"use strict";

exports.__esModule = true;
exports.ColumnTypeLabel = ColumnTypeLabel;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@superset-ui/core");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-nested-ternary */

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
function ColumnTypeLabel({
  type
}) {
  let stringIcon = '?';

  if (type === '' || type === 'expression') {
    stringIcon = 'ƒ';
  } else if (type === 'aggregate') {
    stringIcon = 'AGG';
  } else if (type === _core.GenericDataType.STRING) {
    stringIcon = 'ABC';
  } else if (type === _core.GenericDataType.NUMERIC) {
    stringIcon = '#';
  } else if (type === _core.GenericDataType.BOOLEAN) {
    stringIcon = 'T/F';
  } else if (type === _core.GenericDataType.TEMPORAL) {
    stringIcon = 'time';
  }

  const typeIcon = stringIcon === 'time' ? (0, _react2.jsx)("i", {
    className: "fa fa-clock-o type-label"
  }) : (0, _react2.jsx)("div", {
    className: "type-label"
  }, stringIcon);
  return (0, _react2.jsx)("span", null, typeIcon);
}

var _default = ColumnTypeLabel;
exports.default = _default;