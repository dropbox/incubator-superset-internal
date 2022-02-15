"use strict";

exports.__esModule = true;
exports.annotationsAndLayersControls = exports.annotationLayers = void 0;

var _core = require("@superset-ui/core");

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
const annotationLayers = [];
exports.annotationLayers = annotationLayers;
const annotationsAndLayersControls = {
  label: (0, _core.t)('Annotations and Layers'),
  expanded: false,
  controlSetRows: [[{
    name: 'annotation_layers',
    config: {
      type: 'AnnotationLayerControl',
      label: '',
      default: annotationLayers,
      description: (0, _core.t)('Annotation Layers')
    }
  }]]
};
exports.annotationsAndLayersControls = annotationsAndLayersControls;