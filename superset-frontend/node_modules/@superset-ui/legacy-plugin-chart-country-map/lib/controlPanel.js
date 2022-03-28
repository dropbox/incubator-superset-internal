"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

var _chartControls = require("@superset-ui/chart-controls");

var _countries = require("./countries");

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
const config = {
  controlPanelSections: [_chartControls.sections.legacyRegularTime, {
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [[{
      name: 'select_country',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('Country'),
        default: null,
        choices: _countries.countryOptions,
        description: (0, _core.t)('Which country to plot the map for?'),
        validators: [_core.validateNonEmpty]
      }
    }], ['entity'], ['metric'], ['adhoc_filters']]
  }, {
    label: (0, _core.t)('Chart Options'),
    expanded: true,
    tabOverride: 'customize',
    controlSetRows: [[{
      name: 'number_format',
      config: {
        type: 'SelectControl',
        freeForm: true,
        label: (0, _core.t)('Number format'),
        renderTrigger: true,
        default: 'SMART_NUMBER',
        choices: _chartControls.D3_FORMAT_OPTIONS,
        description: _chartControls.D3_FORMAT_DOCS
      }
    }], ['linear_color_scheme']]
  }],
  controlOverrides: {
    entity: {
      label: (0, _core.t)('ISO 3166-2 Codes'),
      description: (0, _core.t)('Column containing ISO 3166-2 codes of region/province/department in your table.')
    },
    metric: {
      label: (0, _core.t)('Metric'),
      description: (0, _core.t)('Metric to display bottom title')
    },
    linear_color_scheme: {
      renderTrigger: false
    }
  }
};
var _default = config;
exports.default = _default;