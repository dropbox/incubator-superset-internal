"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[1948],{

/***/ 81948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginFilterTimegrain)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5872);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86852);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33346);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74448);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11965);
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




function PluginFilterTimegrain(props) {
  const { data, formData, height, width, setDataMask, setFocusedFilter, unsetFocusedFilter, filterState } = props;
  const { defaultValue, inputRef } = formData;
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue != null ? defaultValue : []);
  const durationMap = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => data.reduce((agg, { duration, name }) => ({
    ...agg,
    [duration]: name }),
  {}), [JSON.stringify(data)]);
  const handleChange = (values) => {
    const resultValue = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(values);
    const [timeGrain] = resultValue;
    const label = timeGrain ? durationMap[timeGrain] : undefined;
    const extraFormData = {};
    if (timeGrain) {
      extraFormData.time_grain_sqla = timeGrain;
    }
    setValue(resultValue);
    setDataMask({
      extraFormData,
      filterState: {
        label,
        value: resultValue.length ? resultValue : null } });


  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    handleChange(defaultValue != null ? defaultValue : []);
    // I think after Config Modal update some filter it re-creates default value for all other filters
    // so we can process it like this `JSON.stringify` or start to use `Immer`
  }, [JSON.stringify(defaultValue)]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {var _filterState$value;
    handleChange((_filterState$value = filterState.value) != null ? _filterState$value : []);
  }, [JSON.stringify(filterState.value)]);
  const placeholderText = (data || []).length === 0 ?
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('No data') :
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.tn)('%s option', '%s options', data.length, data.length);
  const formItemData = {};
  if (filterState.validateMessage) {
    formItemData.extra = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common__WEBPACK_IMPORTED_MODULE_3__/* .StatusMessage */ .Am, { status: filterState.validateStatus },
    filterState.validateMessage);

  }
  const options = (data || []).map((row) => {
    const { name, duration } = row;
    return {
      label: name,
      value: duration };

  });
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common__WEBPACK_IMPORTED_MODULE_3__/* .FilterPluginStyle */ .un, { height: height, width: width },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common__WEBPACK_IMPORTED_MODULE_3__/* .StyledFormItem */ .jp, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ validateStatus: filterState.validateStatus }, formItemData),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_components__WEBPACK_IMPORTED_MODULE_2__/* .Select */ .P, { allowClear: true, value: value, placeholder: placeholderText
    // @ts-ignore
    , onChange: handleChange, onMouseEnter: setFocusedFilter, onMouseLeave: unsetFocusedFilter, ref: inputRef, options: options })));


}

/***/ }),

/***/ 74448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "un": () => (/* binding */ FilterPluginStyle),
/* harmony export */   "jp": () => (/* binding */ StyledFormItem),
/* harmony export */   "Am": () => (/* binding */ StatusMessage)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37840);
/* harmony import */ var _components_Form_FormItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4591);
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


const FilterPluginStyle = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .styled.div */ .iK.div`
  min-height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;
const StyledFormItem = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .iK)(_components_Form_FormItem__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;
const StatusMessage = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .styled.div */ .iK.div`
  color: ${({ theme, status = 'error' }) => {var _theme$colors$status;return (_theme$colors$status = theme.colors[status]) == null ? void 0 : _theme$colors$status.base;}};
`;

/***/ })

}]);