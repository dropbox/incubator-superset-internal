"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

var _chartControls = require("@superset-ui/chart-controls");

var _Shared_DeckGL = require("../utilities/Shared_DeckGL");

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
var _default = {
  controlPanelSections: [_chartControls.sections.legacyRegularTime, {
    label: (0, _core.t)('Map'),
    expanded: true,
    controlSetRows: [[_Shared_DeckGL.mapboxStyle, _Shared_DeckGL.viewport], [{
      name: 'deck_slices',
      config: {
        type: 'SelectAsyncControl',
        multi: true,
        label: (0, _core.t)('deck.gl charts'),
        validators: [_core.validateNonEmpty],
        default: [],
        description: (0, _core.t)('Pick a set of deck.gl charts to layer on top of one another'),
        dataEndpoint: '/sliceasync/api/read?_flt_0_viz_type=deck_&_flt_7_viz_type=deck_multi',
        placeholder: (0, _core.t)('Select charts'),
        onAsyncErrorMessage: (0, _core.t)('Error while fetching charts'),
        mutator: data => {
          if (!data || !data.result) {
            return [];
          }

          return data.result.map(o => ({
            value: o.id,
            label: o.slice_name
          }));
        }
      }
    }, null]]
  }, {
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [['adhoc_filters']]
  }]
};
exports.default = _default;