"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _useAsyncState = _interopRequireDefault(require("../utils/useAsyncState"));

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
function DefaultSearchInput({
  count,
  value,
  onChange
}) {
  return (0, _react2.jsx)("span", {
    className: "dt-global-filter"
  }, "Search", ' ', (0, _react2.jsx)("input", {
    className: "form-control input-sm",
    placeholder: `${count} records...`,
    value: value,
    onChange: onChange
  }));
}

DefaultSearchInput.propTypes = {
  count: _propTypes.default.number.isRequired,
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired
};

var _default = _react.default.memo(function GlobalFilter({
  preGlobalFilteredRows,
  filterValue = '',
  searchInput,
  setGlobalFilter
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = (0, _useAsyncState.default)(filterValue, newValue => {
    setGlobalFilter(newValue || undefined);
  }, 200);
  const SearchInput = searchInput || DefaultSearchInput;
  return (0, _react2.jsx)(SearchInput, {
    count: count,
    value: value,
    onChange: e => {
      const target = e.target;
      e.preventDefault();
      setValue(target.value);
    }
  });
});

exports.default = _default;