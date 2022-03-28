"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _core = require("@superset-ui/core");

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
const StyledDiv = _core.styled.div`
  margin-bottom: ${({
  theme
}) => theme.gridUnit * 2}px;
`;

function CertifiedIconWithTooltip({
  certifiedBy,
  details,
  metricName
}) {
  const theme = (0, _core.useTheme)();
  return (0, _react2.jsx)(_Tooltip.default, {
    id: `${(0, _lodash.kebabCase)(metricName)}-tooltip`,
    title: (0, _react2.jsx)("div", null, certifiedBy && (0, _react2.jsx)(StyledDiv, null, (0, _core.t)('Certified by %s', certifiedBy)), (0, _react2.jsx)("div", null, details))
  }, (0, _react2.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    enableBackground: "new 0 0 24 24",
    height: "16",
    viewBox: "0 0 24 24",
    width: "16"
  }, (0, _react2.jsx)("g", null, (0, _react2.jsx)("path", {
    fill: theme.colors.primary.base,
    d: "M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M9.38,16.01L7,13.61c-0.39-0.39-0.39-1.02,0-1.41 l0.07-0.07c0.39-0.39,1.03-0.39,1.42,0l1.61,1.62l5.15-5.16c0.39-0.39,1.03-0.39,1.42,0l0.07,0.07c0.39,0.39,0.39,1.02,0,1.41 l-5.92,5.94C10.41,16.4,9.78,16.4,9.38,16.01z"
  }))));
}

CertifiedIconWithTooltip.propTypes = {
  certifiedBy: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.oneOf([null])]),
  details: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.oneOf([null])]),
  metricName: _propTypes.default.string.isRequired
};
var _default = CertifiedIconWithTooltip;
exports.default = _default;