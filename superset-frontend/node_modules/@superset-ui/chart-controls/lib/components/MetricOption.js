"use strict";

exports.__esModule = true;
exports.MetricOption = MetricOption;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@superset-ui/core");

var _InfoTooltipWithTrigger = _interopRequireDefault(require("./InfoTooltipWithTrigger"));

var _ColumnTypeLabel = require("./ColumnTypeLabel");

var _CertifiedIconWithTooltip = _interopRequireDefault(require("./CertifiedIconWithTooltip"));

var _Tooltip = _interopRequireDefault(require("./Tooltip"));

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
const FlexRowContainer = _core.styled.div`
  align-items: center;
  display: flex;

  > svg {
    margin-right: ${({
  theme
}) => theme.gridUnit}px;
  }
`;

function MetricOption({
  metric,
  labelRef,
  openInNewWindow = false,
  showFormula = true,
  showType = false,
  showTooltip = true,
  url = ''
}) {
  const verbose = metric.verbose_name || metric.metric_name || metric.label;
  const link = url ? (0, _react2.jsx)("a", {
    href: url,
    target: openInNewWindow ? '_blank' : '',
    rel: "noreferrer"
  }, verbose) : verbose;
  const warningMarkdown = metric.warning_markdown || metric.warning_text;
  return (0, _react2.jsx)(FlexRowContainer, {
    className: "metric-option"
  }, showType && (0, _react2.jsx)(_ColumnTypeLabel.ColumnTypeLabel, {
    type: "expression"
  }), metric.is_certified && (0, _react2.jsx)(_CertifiedIconWithTooltip.default, {
    metricName: metric.metric_name,
    certifiedBy: metric.certified_by,
    details: metric.certification_details
  }), showTooltip ? (0, _react2.jsx)(_Tooltip.default, {
    id: "metric-name-tooltip",
    title: verbose,
    trigger: ['hover'],
    placement: "top"
  }, (0, _react2.jsx)("span", {
    className: "option-label metric-option-label",
    ref: labelRef
  }, link)) : (0, _react2.jsx)("span", {
    className: "option-label metric-option-label",
    ref: labelRef
  }, link), metric.description && (0, _react2.jsx)(_InfoTooltipWithTrigger.default, {
    className: "text-muted",
    icon: "info",
    tooltip: metric.description,
    label: `descr-${metric.metric_name}`
  }), showFormula && (0, _react2.jsx)(_InfoTooltipWithTrigger.default, {
    className: "text-muted",
    icon: "question-circle-o",
    tooltip: metric.expression,
    label: `expr-${metric.metric_name}`
  }), warningMarkdown && (0, _react2.jsx)(_InfoTooltipWithTrigger.default, {
    className: "text-warning",
    icon: "warning",
    tooltip: (0, _react2.jsx)(_core.SafeMarkdown, {
      source: warningMarkdown
    }),
    label: `warn-${metric.metric_name}`
  }));
}

MetricOption.propTypes = {
  openInNewWindow: _propTypes.default.bool,
  showFormula: _propTypes.default.bool,
  showType: _propTypes.default.bool,
  showTooltip: _propTypes.default.bool,
  url: _propTypes.default.string
};