"use strict";

exports.__esModule = true;
exports.default = ControlHeader;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@superset-ui/core");

var _InfoTooltipWithTrigger = require("./InfoTooltipWithTrigger");

var _Tooltip = require("./Tooltip");

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
function ControlHeader({
  name,
  description,
  label,
  tooltipOnClick,
  onClick,
  warning,
  danger,
  leftNode,
  rightNode,
  validationErrors = [],
  renderTrigger = false,
  hovered = false,
  required = false
}) {
  const renderOptionalIcons = () => {
    if (hovered) {
      return (0, _react2.jsx)("span", null, description && (0, _react2.jsx)("span", null, (0, _react2.jsx)(_InfoTooltipWithTrigger.InfoTooltipWithTrigger, {
        label: (0, _core.t)('description'),
        tooltip: description,
        placement: "top",
        onClick: tooltipOnClick
      }), ' '), renderTrigger && (0, _react2.jsx)("span", null, (0, _react2.jsx)(_InfoTooltipWithTrigger.InfoTooltipWithTrigger, {
        label: (0, _core.t)('bolt'),
        tooltip: (0, _core.t)('Changing this control takes effect instantly'),
        placement: "top",
        icon: "bolt"
      }), ' '));
    }

    return null;
  };

  if (!label) {
    return null;
  }

  const labelClass = validationErrors.length > 0 ? 'text-danger' : '';
  return (0, _react2.jsx)("div", {
    className: "ControlHeader",
    "data-test": `${name}-header`
  }, (0, _react2.jsx)("div", {
    className: "pull-left"
  }, (0, _react2.jsx)("label", {
    className: "control-label",
    htmlFor: name
  }, leftNode && (0, _react2.jsx)("span", null, leftNode), (0, _react2.jsx)("span", {
    role: "button",
    tabIndex: 0,
    onClick: onClick,
    className: labelClass,
    style: {
      cursor: onClick ? 'pointer' : ''
    }
  }, label), ' ', warning && (0, _react2.jsx)("span", null, (0, _react2.jsx)(_Tooltip.Tooltip, {
    id: "error-tooltip",
    placement: "top",
    title: warning
  }, (0, _react2.jsx)("i", {
    className: "fa fa-exclamation-circle text-warning"
  })), ' '), danger && (0, _react2.jsx)("span", null, (0, _react2.jsx)(_Tooltip.Tooltip, {
    id: "error-tooltip",
    placement: "top",
    title: danger
  }, (0, _react2.jsx)("i", {
    className: "fa fa-exclamation-circle text-danger"
  })), ' '), validationErrors.length > 0 && (0, _react2.jsx)("span", null, (0, _react2.jsx)(_Tooltip.Tooltip, {
    id: "error-tooltip",
    placement: "top",
    title: validationErrors.join(' ')
  }, (0, _react2.jsx)("i", {
    className: "fa fa-exclamation-circle text-danger"
  })), ' '), renderOptionalIcons(), required && (0, _react2.jsx)("span", {
    className: "text-danger m-l-4"
  }, (0, _react2.jsx)("strong", null, "*")))), rightNode && (0, _react2.jsx)("div", {
    className: "pull-right"
  }, rightNode), (0, _react2.jsx)("div", {
    className: "clearfix"
  }));
}

ControlHeader.propTypes = {
  name: _propTypes.default.string,
  label: _propTypes.default.node,
  description: _propTypes.default.node,
  validationErrors: _propTypes.default.arrayOf(_propTypes.default.string),
  renderTrigger: _propTypes.default.bool,
  rightNode: _propTypes.default.node,
  leftNode: _propTypes.default.node,
  hovered: _propTypes.default.bool,
  required: _propTypes.default.bool,
  warning: _propTypes.default.string,
  danger: _propTypes.default.string,
  onClick: _propTypes.default.func,
  tooltipOnClick: _propTypes.default.func
};