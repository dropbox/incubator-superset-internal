/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * More strict JSON value types. If this fails to satisfy TypeScript when using
 * as function arguments, use `JsonObject` instead. `StrictJsonObject` helps make
 * sure all values are plain objects, but it does not accept specific types when
 * used as function arguments.
 * (Ref: https://github.com/microsoft/TypeScript/issues/15300).
 */

/**
 * More strict JSON objects that makes sure all values are plain objects.
 * If this fails to satisfy TypeScript when using as function arguments,
 * use `JsonObject` instead.
 * (Ref: https://github.com/microsoft/TypeScript/issues/15300).
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

/**
 * Request payload, can be use in GET query string, Post form or POST JSON.
 * If string, will parse with JSON.parse.
 */
// this make sure at least one of `url` or `endpoint` is set
export default {};