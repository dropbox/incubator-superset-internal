#!/usr/bin/env bash
#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

set -euo pipefail

readonly REPO_NAME="apache/superset"
readonly CACHE_DIR="/tmp/superset"
readonly ARCHITECTURE_AMD64="linux/amd64"
readonly ARCHITECTURE_ARM64="linux/arm64"

readonly GITHUB_RELEASE_TAG_NAME="${1:-}"
readonly SHA=$(git rev-parse HEAD)
readonly GITHUB_EVENT_NAME="${GITHUB_EVENT_NAME:-}"
readonly GITHUB_HEAD_REF="${GITHUB_HEAD_REF:-}"
readonly GITHUB_REF="${GITHUB_REF:-}"
readonly GITHUB_ACTOR="${GITHUB_ACTOR:-unknown}"
readonly TEST_ENV="${TEST_ENV:-false}"

readonly DOCKERHUB_USER="${DOCKERHUB_USER:-}"
readonly DOCKERHUB_TOKEN="${DOCKERHUB_TOKEN:-}"

log_info() {
    echo "[INFO] $*" >&2
}

log_error() {
    echo "[ERROR] $*" >&2
}

log_debug() {
    if [[ "${DEBUG:-false}" == "true" ]]; then
        echo "[DEBUG] $*" >&2
    fi
}

cleanup() {
    local exit_code=$?
    if [[ $exit_code -ne 0 ]]; then
        log_error "Script failed with exit code $exit_code"
    fi
    exit $exit_code
}

trap cleanup EXIT

determine_tags() {
    local refspec latest_tag
    
    case "${GITHUB_EVENT_NAME}" in
        "pull_request")
            refspec=$(echo "${GITHUB_HEAD_REF}" | sed 's/[^a-zA-Z0-9]/-/g' | head -c 40)
            local pr_num=$(echo "${GITHUB_REF}" | sed 's:refs/pull/::' | sed 's:/merge::')
            latest_tag="pr-${pr_num}"
            ;;
        "release")
            refspec=$(echo "${GITHUB_REF}" | sed 's:refs/tags/::' | head -c 40)
            latest_tag="${refspec}"
            ;;
        *)
            refspec=$(echo "${GITHUB_REF}" | sed 's:refs/heads/::' | sed 's/[^a-zA-Z0-9]/-/g' | head -c 40)
            latest_tag="${refspec}"
            ;;
    esac

    if [[ "${refspec}" == "master" ]]; then
        latest_tag="master"
    fi

    if [[ -n "${GITHUB_RELEASE_TAG_NAME}" ]]; then
        if command -v ./scripts/tag_latest_release.sh >/dev/null 2>&1; then
            local output
            output=$(./scripts/tag_latest_release.sh "${GITHUB_RELEASE_TAG_NAME}" --dry-run 2>/dev/null || true)
            local skip_tag=$(echo "${output}" | grep "SKIP_TAG" | cut -d'=' -f2 || echo "")
            
            if [[ "${skip_tag}" == "SKIP_TAG::false" ]]; then
                latest_tag="latest"
            fi
        else
            log_error "tag_latest_release.sh script not found"
        fi
    fi

    echo "${refspec}" "${latest_tag}"
}

setup_docker() {
    local docker_args architecture_list
    
    if [[ -z "${DOCKERHUB_TOKEN}" ]]; then
        log_info "Skipping Docker push (no credentials provided)"
        docker_args="--load"
        architecture_list="${ARCHITECTURE_AMD64} ${ARCHITECTURE_ARM64}"
    else
        log_info "Setting up Docker authentication and push"
        docker logout 2>/dev/null || true
        
        if ! docker login --username "${DOCKERHUB_USER}" --password "${DOCKERHUB_TOKEN}"; then
            log_error "Docker login failed"
            return 1
        fi
        
        docker_args="--push"
        architecture_list="${ARCHITECTURE_AMD64},${ARCHITECTURE_ARM64}"
    fi
    
    echo "${docker_args}" "${architecture_list}"
}

build_docker_image() {
    local target="$1"
    local dockerfile="${2:-Dockerfile}"
    local build_args="${3:-}"
    local suffix="${4:-}"
    local docker_args="$5"
    local platform="$6"
    local refspec="$7"
    local latest_tag="$8"
    
    local image_tags=(
        "${REPO_NAME}:${SHA}${suffix}"
        "${REPO_NAME}:${refspec}${suffix}"
        "${REPO_NAME}:${latest_tag}${suffix}"
    )
    
    local tag_args=()
    for tag in "${image_tags[@]}"; do
        tag_args+=("-t" "${tag}")
    done
    
    local cache_args=(
        "--cache-from=type=local,src=${CACHE_DIR}"
        "--cache-to=type=local,ignore-error=true,dest=${CACHE_DIR}"
    )
    
    if [[ "${target}" == "dev" ]]; then
        cache_args+=("--cache-from=type=registry,ref=apache/superset:master-dev")
    elif [[ "${target}" == "websocket" ]]; then
        cache_args+=("--cache-from=type=registry,ref=apache/superset:master-websocket")
    elif [[ "${target}" == "dockerize" ]]; then
        cache_args+=("--cache-from=type=registry,ref=apache/superset:dockerize")
    fi
    
    local label_args=(
        "--label" "sha=${SHA}"
        "--label" "built_at=$(date -Iseconds)"
        "--label" "target=${target}"
        "--label" "build_actor=${GITHUB_ACTOR}"
    )
    
    log_info "Building ${target} image for platform ${platform}"
    log_debug "Tags: ${image_tags[*]}"
    
    local cmd=(
        docker buildx build
        ${docker_args}
        "${cache_args[@]}"
        "${tag_args[@]}"
        --platform "${platform}"
        "${label_args[@]}"
    )
    
    if [[ -n "${target}" && "${target}" != "dockerize" ]]; then
        cmd+=(--target "${target}")
    fi
    
    if [[ -n "${build_args}" ]]; then
        cmd+=(${build_args})
    fi
    
    if [[ -n "${dockerfile}" && "${dockerfile}" != "Dockerfile" ]]; then
        cmd+=(-f "${dockerfile}")
    fi
    
    if [[ "${target}" == "websocket" ]]; then
        cmd+=(superset-websocket)
    else
        cmd+=(.)
    fi
    
    "${cmd[@]}"
}

main() {
    log_info "Starting Docker build process"
    log_info "SHA: ${SHA}"
    log_info "Event: ${GITHUB_EVENT_NAME}"
    
    local tag_info
    tag_info=$(determine_tags)
    read -r refspec latest_tag <<< "${tag_info}"
    
    log_info "REFSPEC: ${refspec}"
    log_info "LATEST_TAG: ${latest_tag}"
    
    if [[ "${TEST_ENV}" == "true" ]]; then
        log_info "Test environment detected, skipping actual build"
        return 0
    fi
    
    local docker_setup
    docker_setup=$(setup_docker)
    read -r docker_args architecture_list <<< "${docker_setup}"
    
    log_info "Rolling with tags:"
    log_info "- ${REPO_NAME}:${SHA}"
    log_info "- ${REPO_NAME}:${refspec}"
    log_info "- ${REPO_NAME}:${latest_tag}"
    
    local dev_tag
    if [[ "${latest_tag}" == "master" ]]; then
        dev_tag="${REPO_NAME}:latest-dev"
    else
        dev_tag="${REPO_NAME}:${latest_tag}-dev"
    fi
    
    for platform in ${architecture_list//,/ }; do
        log_info "Building for platform: ${platform}"
        
        build_docker_image "dev" "Dockerfile" "" "-dev" "${docker_args}" "${platform}" "${refspec}" "${latest_tag}"
        
        build_docker_image "lean" "Dockerfile" "" "" "${docker_args}" "${platform}" "${refspec}" "${latest_tag}"
        
        build_docker_image "lean" "Dockerfile" "--build-arg PY_VER=3.10-slim-bookworm" "-py310" "${docker_args}" "${platform}" "${refspec}" "${latest_tag}"
        
        build_docker_image "lean" "Dockerfile" "--build-arg PY_VER=3.9-slim-bullseye" "-py39" "${docker_args}" "${platform}" "${refspec}" "${latest_tag}"
        
        build_docker_image "websocket" "" "" "-websocket" "${docker_args}" "${platform}" "${refspec}" "${latest_tag}"
        
        build_docker_image "dockerize" "dockerize.Dockerfile" "" "" "${docker_args}" "${platform}" "dockerize" "dockerize"
    done
    
    log_info "Docker build process completed successfully"
}

main "$@"
