"use strict";

exports.__esModule = true;
exports.titleControls = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@superset-ui/core");

var _utils = require("../utils");

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const TITLE_MARGIN_OPTIONS = [15, 30, 50, 75, 100, 125, 150, 200];
const TITLE_POSITION_OPTIONS = ['Left', 'Top'];
const titleControls = {
  label: (0, _core.t)('Chart Title'),
  tabOverride: 'customize',
  expanded: true,
  controlSetRows: [[(0, _react2.jsx)("h1", {
    className: "section-header"
  }, (0, _core.t)('X Axis'))], [{
    name: 'x_axis_title',
    config: {
      type: 'TextControl',
      label: (0, _core.t)('X Axis Title'),
      renderTrigger: true,
      default: '',
      description: (0, _core.t)('Changing this control takes effect instantly')
    }
  }], [{
    name: 'x_axis_title_margin',
    config: {
      type: 'SelectControl',
      freeForm: true,
      clearable: true,
      label: (0, _core.t)('X AXIS TITLE BOTTOM MARGIN'),
      renderTrigger: true,
      default: TITLE_MARGIN_OPTIONS[0],
      choices: (0, _utils.formatSelectOptions)(TITLE_MARGIN_OPTIONS),
      description: (0, _core.t)('Changing this control takes effect instantly')
    }
  }], [(0, _react2.jsx)("h1", {
    className: "section-header"
  }, (0, _core.t)('Y Axis'))], [{
    name: 'y_axis_title',
    config: {
      type: 'TextControl',
      label: (0, _core.t)('Y Axis Title'),
      renderTrigger: true,
      default: '',
      description: (0, _core.t)('Changing this control takes effect instantly')
    }
  }], [{
    name: 'y_axis_title_margin',
    config: {
      type: 'SelectControl',
      freeForm: true,
      clearable: true,
      label: (0, _core.t)('Y AXIS TITLE MARGIN'),
      renderTrigger: true,
      default: TITLE_MARGIN_OPTIONS[0],
      choices: (0, _utils.formatSelectOptions)(TITLE_MARGIN_OPTIONS),
      description: (0, _core.t)('Changing this control takes effect instantly')
    }
  }], [{
    name: 'y_axis_title_position',
    config: {
      type: 'SelectControl',
      freeForm: true,
      clearable: false,
      label: (0, _core.t)('Y AXIS TITLE POSITION'),
      renderTrigger: true,
      default: TITLE_POSITION_OPTIONS[0],
      choices: (0, _utils.formatSelectOptions)(TITLE_POSITION_OPTIONS),
      description: (0, _core.t)('Changing this control takes effect instantly')
    }
  }]]
};
exports.titleControls = titleControls;