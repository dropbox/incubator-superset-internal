"use strict";

exports.__esModule = true;
exports.ColumnOption = ColumnOption;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@superset-ui/core");

var _Tooltip = require("./Tooltip");

var _ColumnTypeLabel = require("./ColumnTypeLabel");

var _InfoTooltipWithTrigger = _interopRequireDefault(require("./InfoTooltipWithTrigger"));

var _CertifiedIconWithTooltip = _interopRequireDefault(require("./CertifiedIconWithTooltip"));

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
const StyleOverrides = _core.styled.span`
  svg {
    margin-right: ${({
  theme
}) => theme.gridUnit}px;
  }
`;

function ColumnOption({
  column,
  labelRef,
  showType = false,
  showTooltip = true
}) {
  const {
    expression,
    column_name,
    type_generic
  } = column;
  const hasExpression = expression && expression !== column_name;
  const type = hasExpression ? 'expression' : type_generic;
  return (0, _react2.jsx)(StyleOverrides, null, showType && type !== undefined && (0, _react2.jsx)(_ColumnTypeLabel.ColumnTypeLabel, {
    type: type
  }), column.is_certified && (0, _react2.jsx)(_CertifiedIconWithTooltip.default, {
    metricName: column.metric_name,
    certifiedBy: column.certified_by,
    details: column.certification_details
  }), showTooltip ? (0, _react2.jsx)(_Tooltip.Tooltip, {
    id: "metric-name-tooltip",
    title: column.verbose_name || column.column_name,
    trigger: ['hover'],
    placement: "top"
  }, (0, _react2.jsx)("span", {
    className: "m-r-5 option-label column-option-label",
    ref: labelRef
  }, column.verbose_name || column.column_name)) : (0, _react2.jsx)("span", {
    className: "m-r-5 option-label column-option-label",
    ref: labelRef
  }, column.verbose_name || column.column_name), column.description && (0, _react2.jsx)(_InfoTooltipWithTrigger.default, {
    className: "m-r-5 text-muted",
    icon: "info",
    tooltip: column.description,
    label: `descr-${column.column_name}`,
    placement: "top"
  }), hasExpression && (0, _react2.jsx)(_InfoTooltipWithTrigger.default, {
    className: "m-r-5 text-muted",
    icon: "question-circle-o",
    tooltip: column.expression,
    label: `expr-${column.column_name}`,
    placement: "top"
  }));
}

ColumnOption.propTypes = {
  showType: _propTypes.default.bool,
  showTooltip: _propTypes.default.bool
};
var _default = ColumnOption;
exports.default = _default;