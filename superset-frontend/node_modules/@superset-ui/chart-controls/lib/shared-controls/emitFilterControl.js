"use strict";

exports.__esModule = true;
exports.emitFilterControl = void 0;

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
const enableCrossFilter = (0, _core.isFeatureEnabled)(_core.FeatureFlag.DASHBOARD_CROSS_FILTERS);
const emitFilterControl = enableCrossFilter ? [{
  name: 'emit_filter',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Emit dashboard cross filters'),
    default: false,
    renderTrigger: true,
    description: (0, _core.t)('Emit dashboard cross filters.')
  }
}] : [];
exports.emitFilterControl = emitFilterControl;