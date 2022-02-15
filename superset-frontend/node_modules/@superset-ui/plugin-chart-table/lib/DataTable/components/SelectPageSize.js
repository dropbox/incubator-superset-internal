"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _chartControls = require("@superset-ui/chart-controls");

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
function DefaultSelectRenderer({
  current,
  options,
  onChange
}) {
  return (0, _react2.jsx)("span", {
    className: "dt-select-page-size form-inline"
  }, "Show", ' ', (0, _react2.jsx)("select", {
    className: "form-control input-sm",
    value: current,
    onBlur: () => {},
    onChange: e => {
      onChange(Number(e.target.value));
    }
  }, options.map(option => {
    const [size, text] = Array.isArray(option) ? option : [option, option];
    return (0, _react2.jsx)("option", {
      key: size,
      value: size
    }, text);
  })), ' ', "entries");
}

DefaultSelectRenderer.propTypes = {
  current: _propTypes.default.number.isRequired,
  options: _propTypes.default.array.isRequired,
  onChange: _propTypes.default.func.isRequired
};

function getOptionValue(x) {
  return Array.isArray(x) ? x[0] : x;
}

var _default = /*#__PURE__*/_react.default.memo(function SelectPageSize({
  total,
  options: sizeOptions,
  current: currentSize,
  selectRenderer,
  onChange
}) {
  const sizeOptionValues = sizeOptions.map(getOptionValue);
  let options = [...sizeOptions]; // insert current size to list

  if (currentSize !== undefined && (currentSize !== total || !sizeOptionValues.includes(0)) && !sizeOptionValues.includes(currentSize)) {
    options = [...sizeOptions];
    options.splice(sizeOptionValues.findIndex(x => x > currentSize), 0, (0, _chartControls.formatSelectOptions)([currentSize])[0]);
  }

  const current = currentSize === undefined ? sizeOptionValues[0] : currentSize;
  const SelectRenderer = selectRenderer || DefaultSelectRenderer;
  return (0, _react2.jsx)(SelectRenderer, {
    current: current,
    options: options,
    onChange: onChange
  });
});

exports.default = _default;