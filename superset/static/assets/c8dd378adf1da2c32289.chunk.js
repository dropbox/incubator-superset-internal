"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[9483],{

/***/ 89483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimeFilterPlugin)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37840);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var src_explore_components_controls_DateFilterControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73375);
/* harmony import */ var src_explore_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69856);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74448);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11965);
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





const TimeFilterStyles = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .iK)(_common__WEBPACK_IMPORTED_MODULE_3__/* .FilterPluginStyle */ .un)`
  overflow-x: auto;
`;
const ControlContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .styled.div */ .iK.div`
  padding: 2px;
  & > span,
  & > span:hover {
    border: 2px solid transparent;
    display: inline-block;
    border: ${({ theme, validateStatus }) => {var _theme$colors$validat;return validateStatus && `2px solid ${(_theme$colors$validat = theme.colors[validateStatus]) == null ? void 0 : _theme$colors$validat.base}`;}};
  }
  &:focus {
    & > span {
      border: 2px solid
        ${({ theme, validateStatus }) => {var _theme$colors$validat2;return validateStatus ? (_theme$colors$validat2 =
  theme.colors[validateStatus]) == null ? void 0 : _theme$colors$validat2.base :
  theme.colors.primary.base;}};
      outline: 0;
      box-shadow: 0 0 0 2px
        ${({ validateStatus }) => validateStatus ?
'rgba(224, 67, 85, 12%)' :
'rgba(32, 167, 201, 0.2)'};
    }
  }
`;
function TimeFilterPlugin(props) {var _props$formData;
  const { setDataMask, setFocusedFilter, unsetFocusedFilter, width, height, filterState, formData: { inputRef } } = props;
  const handleTimeRangeChange = (timeRange) => {
    const isSet = timeRange && timeRange !== src_explore_constants__WEBPACK_IMPORTED_MODULE_2__/* .NO_TIME_RANGE */ .vM;
    setDataMask({
      extraFormData: isSet ?
      {
        time_range: timeRange } :

      {},
      filterState: {
        value: isSet ? timeRange : undefined } });


  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    handleTimeRangeChange(filterState.value);
  }, [filterState.value]);
  return (_props$formData = props.formData) != null && _props$formData.inView ?
  // @ts-ignore
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(TimeFilterStyles, { width: width, height: height },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(ControlContainer, { tabIndex: -1, ref: inputRef, validateStatus: filterState.validateStatus, onFocus: setFocusedFilter, onBlur: unsetFocusedFilter, onMouseEnter: setFocusedFilter, onMouseLeave: unsetFocusedFilter },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_explore_components_controls_DateFilterControl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, { endpoints: ['inclusive', 'exclusive'], value: filterState.value || src_explore_constants__WEBPACK_IMPORTED_MODULE_2__/* .NO_TIME_RANGE */ .vM, name: "time_range", onChange: handleTimeRangeChange, type: filterState.validateStatus }))) :

  null;
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