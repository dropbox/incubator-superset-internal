(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[4174],{

/***/ 4591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97538);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37840);
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


const StyledItem = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .iK)(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Item */ .Z.Item)`
  ${({ theme }) => `
    .ant-form-item-label {
      padding-bottom: ${theme.gridUnit}px;
      & > label {
        text-transform: uppercase;
        font-size: ${theme.typography.sizes.s}px;
        color: ${theme.colors.grayscale.base};

        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
          &::before {
            display: none;
          }
          &::after {
            display: inline-block;
            color: ${theme.colors.error.base};
            font-size: ${theme.typography.sizes.s}px;
            content: '*';
          }
        }
      }
    }
  `}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledItem);

/***/ }),

/***/ 2857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FormLabel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37840);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11965);
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


const Label = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .styled.label */ .iK.label`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  color: ${({ theme }) => theme.colors.grayscale.base};
  margin-bottom: ${({ theme }) => theme.gridUnit}px;
`;
const RequiredLabel = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .styled.label */ .iK.label`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  color: ${({ theme }) => theme.colors.grayscale.base};
  margin-bottom: ${({ theme }) => theme.gridUnit}px;
  &::after {
    display: inline-block;
    margin-left: ${({ theme }) => theme.gridUnit}px;
    color: ${({ theme }) => theme.colors.error.base};
    font-size: ${({ theme }) => theme.typography.sizes.m}px;
    content: '*';
  }
`;
function FormLabel({ children, htmlFor, required = false, className }) {
  const StyledLabel = required ? RequiredLabel : Label;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledLabel, { htmlFor: htmlFor, className: className },
  children);

}

/***/ }),

/***/ 70917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Form_LabeledErrorBoundInput)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 3 modules
var input = __webpack_require__(4107);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
// EXTERNAL MODULE: ./src/components/InfoTooltip/index.tsx
var InfoTooltip = __webpack_require__(8272);
;// CONCATENATED MODULE: ./src/assets/images/icons/error.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgError(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 7a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1zm0 8a1 1 0 100 2 1 1 0 000-2zm9.71-7.44l-5.27-5.27a1.05 1.05 0 00-.71-.29H8.27a1.05 1.05 0 00-.71.29L2.29 7.56a1.05 1.05 0 00-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 00.71-.29l5.27-5.27a1.05 1.05 0 00.29-.71V8.27a1.05 1.05 0 00-.29-.71zM20 15.31L15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62z",
    fill: "currentColor"
  })));
}

/* harmony default export */ const error = (SvgError);
// EXTERNAL MODULE: ./src/components/Form/FormItem.tsx
var FormItem = __webpack_require__(4591);
// EXTERNAL MODULE: ./src/components/Form/FormLabel.tsx
var FormLabel = __webpack_require__(2857);
;// CONCATENATED MODULE: ./src/components/Form/LabeledErrorBoundInput.tsx
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







const StyledInput = (0,style/* styled */.iK)(input/* default */.Z)`
  margin: ${({ theme }) => `${theme.gridUnit}px 0 ${theme.gridUnit * 2}px`};
`;
const alertIconStyles = (theme, hasError) => emotion_react_browser_esm.css`
  .ant-form-item-children-icon {
    display: none;
  }
  ${hasError &&
`.ant-form-item-control-input-content {
      position: relative;
      &:after {
        content: ' ';
        display: inline-block;
        background: ${theme.colors.error.base};
        mask: url(${error});
        mask-size: cover;
        width: ${theme.gridUnit * 4}px;
        height: ${theme.gridUnit * 4}px;
        position: absolute;
        right: ${theme.gridUnit * 1.25}px;
        top: ${theme.gridUnit * 2.75}px;
      }
    }`}
`;
const StyledFormGroup = (0,style/* styled */.iK)('div')`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-bottom: ${({ theme }) => theme.gridUnit * 3}px;
  .ant-form-item {
    margin-bottom: 0;
  }
`;
const StyledAlignment = style/* styled.div */.iK.div`
  display: flex;
  align-items: center;
`;
const StyledFormLabel = (0,style/* styled */.iK)(FormLabel/* default */.Z)`
  margin-bottom: 0;
`;
const LabeledErrorBoundInput = ({ label, validationMethods, errorMessage, helpText, required = false, hasTooltip = false, tooltipText, id, className, ...props }) => (0,emotion_react_browser_esm.jsx)(StyledFormGroup, { className: className },
(0,emotion_react_browser_esm.jsx)(StyledAlignment, null,
(0,emotion_react_browser_esm.jsx)(StyledFormLabel, { htmlFor: id, required: required },
label),

hasTooltip && (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: `${tooltipText}`, viewBox: "0 -1 24 24" })),

(0,emotion_react_browser_esm.jsx)(FormItem/* default */.Z, { css: (theme) => alertIconStyles(theme, !!errorMessage), validateTrigger: Object.keys(validationMethods), validateStatus: errorMessage ? 'error' : 'success', help: errorMessage || helpText, hasFeedback: !!errorMessage },
(0,emotion_react_browser_esm.jsx)(StyledInput, extends_default()({}, props, validationMethods))));


/* harmony default export */ const Form_LabeledErrorBoundInput = (LabeledErrorBoundInput);

/***/ }),

/***/ 49238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l0": () => (/* reexport */ Form),
  "xJ": () => (/* reexport */ FormItem/* default */.Z),
  "lX": () => (/* reexport */ FormLabel/* default */.Z)
});

// UNUSED EXPORTS: FormProps, LabeledErrorBoundInput

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/lib/form/index.js
var lib_form = __webpack_require__(97538);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/components/Form/Form.tsx
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



const StyledForm = (0,style/* styled */.iK)(lib_form/* default */.Z)`
  &.ant-form label {
    font-size: ${({ theme }) => theme.typography.sizes.s}px;
  }
  .ant-form-item {
    margin-bottom: ${({ theme }) => theme.gridUnit * 4}px;
  }
`;
function Form(props) {
  return (0,emotion_react_browser_esm.jsx)(StyledForm, props);
}

// EXTERNAL MODULE: ./src/components/Form/FormItem.tsx
var FormItem = __webpack_require__(4591);
// EXTERNAL MODULE: ./src/components/Form/FormLabel.tsx
var FormLabel = __webpack_require__(2857);
// EXTERNAL MODULE: ./src/components/Form/LabeledErrorBoundInput.tsx + 1 modules
var LabeledErrorBoundInput = __webpack_require__(70917);
;// CONCATENATED MODULE: ./src/components/Form/index.tsx
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






/***/ }),

/***/ 8272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InfoTooltip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37840);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58593);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38097);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11965);
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




const StyledTooltip = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .iK)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__/* .Tooltip */ .u)`
  cursor: pointer;
  path:first-of-type {
    fill: #999999;
  }
`;
const StyledTooltipTitle = _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .styled.span */ .iK.span`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const defaultOverlayStyle = {
  fontSize: '12px',
  lineHeight: '16px' };

const defaultColor = 'rgba(0,0,0,0.9)';
function InfoTooltip({ tooltip, placement = 'right', trigger = 'hover', overlayStyle = defaultOverlayStyle, bgColor = defaultColor, viewBox = '0 -2 24 24' }) {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledTooltip, { title: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledTooltipTitle, null, tooltip), placement: placement, trigger: trigger, overlayStyle: overlayStyle, color: bgColor },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].InfoSolidSmall */ .Z.InfoSolidSmall, { className: "info-solid-small", viewBox: viewBox }));

}

/***/ }),

/***/ 55083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ findValue),
/* harmony export */   "G": () => (/* binding */ hasOption)
/* harmony export */ });
/**
 * Find Option value that matches a possibly string value.
 *
 * Translate possible string values to `OptionType` objects, fallback to value
 * itself if cannot be found in the options list.
 *
 * Always returns an array.
 */
function findValue(value, options = [], valueKey = 'value') {
  if (value === null || value === undefined || value === '') {
    return [];
  }
  const isGroup = Array.isArray((options[0] || {}).options);
  const flatOptions = isGroup ?
  options.flatMap((x) => x.options || []) :
  options;
  const find = (val) => {
    const realVal = (value || {}).hasOwnProperty(valueKey) ?
    val[valueKey] :
    val;
    return flatOptions.find((x) => x === realVal || x[valueKey] === realVal) || val;
  };
  // If value is a single string, must return an Array so `cleanValue` won't be
  // empty: https://github.com/JedWatson/react-select/blob/32ad5c040bdd96cd1ca71010c2558842d684629c/packages/react-select/src/utils.js#L64
  return (Array.isArray(value) ? value : [value]).map(find);
}
function hasOption(search, options) {
  const searchOption = search.trim().toLowerCase();
  return options.find((opt) => {
    const { label, value } = opt;
    const labelText = String(label);
    const valueText = String(value);
    return valueText.toLowerCase() === searchOption ||
    labelText.toLowerCase() === searchOption;
  });
}

/***/ }),

/***/ 33346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ Select_Select)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/antd/lib/select/index.js
var lib_select = __webpack_require__(64749);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(76570);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(57254);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__(11382);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/utils/getClientErrorObject.ts
var getClientErrorObject = __webpack_require__(98286);
// EXTERNAL MODULE: ./src/components/Select/utils.ts
var utils = __webpack_require__(55083);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/components/Select/Select.tsx
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










const { Option } = lib_select["default"];
const StyledContainer = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledSelect = (0,style/* styled */.iK)(lib_select["default"])`
  ${({ theme }) => `
    && .ant-select-selector {
      border-radius: ${theme.gridUnit}px;
    }

    // Open the dropdown when clicking on the suffix
    // This is fixed in version 4.16
    .ant-select-arrow .anticon:not(.ant-select-suffix) {
      pointer-events: none;
    }
  `}
`;
const StyledStopOutlined = (0,style/* styled */.iK)(Icons/* default.StopOutlined */.Z.StopOutlined)`
  vertical-align: 0;
`;
const StyledCheckOutlined = (0,style/* styled */.iK)(Icons/* default.CheckOutlined */.Z.CheckOutlined)`
  vertical-align: 0;
`;
const StyledError = style/* styled.div */.iK.div`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: ${theme.gridUnit * 2}px;
    color: ${theme.colors.error.base};

    & svg {
      margin-right: ${theme.gridUnit * 2}px;
    }
  `}
`;
const StyledErrorMessage = style/* styled.div */.iK.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StyledSpin = (0,style/* styled */.iK)(spin/* default */.Z)`
  margin-top: ${({ theme }) => -theme.gridUnit}px;
`;
const StyledLoadingText = style/* styled.div */.iK.div`
  ${({ theme }) => `
    margin-left: ${theme.gridUnit * 3}px;
    line-height: ${theme.gridUnit * 8}px;
    color: ${theme.colors.grayscale.light1};
  `}
`;
const MAX_TAG_COUNT = 4;
const TOKEN_SEPARATORS = [',', '\n', '\t', ';'];
const DEBOUNCE_TIMEOUT = 500;
const DEFAULT_PAGE_SIZE = 100;
const EMPTY_OPTIONS = [];
const Error = ({ error }) => (0,emotion_react_browser_esm.jsx)(StyledError, null,
(0,emotion_react_browser_esm.jsx)(Icons/* default.ErrorSolid */.Z.ErrorSolid, null), " ", (0,emotion_react_browser_esm.jsx)(StyledErrorMessage, null, error));

const Select = ({ allowNewOptions = false, ariaLabel, fetchOnlyOnSearch, filterOption = true, header = null, invertSelection = false, labelInValue = false, lazyLoading = true, loading, mode = 'single', name, notFoundContent, onError, onChange, onClear, optionFilterProps = ['label', 'value'], options, pageSize = DEFAULT_PAGE_SIZE, placeholder = (0,TranslatorSingleton.t)('Select ...'), showSearch = true, value, ...props }) => {
  const isAsync = typeof options === 'function';
  const isSingleMode = mode === 'single';
  const shouldShowSearch = isAsync || allowNewOptions ? true : showSearch;
  const initialOptions = options && Array.isArray(options) ? options : EMPTY_OPTIONS;
  const [selectOptions, setSelectOptions] = (0,react.useState)(initialOptions);
  const shouldUseChildrenOptions = !!selectOptions.find((opt) => opt == null ? void 0 : opt.customLabel);
  const [selectValue, setSelectValue] = (0,react.useState)(value);
  const [searchedValue, setSearchedValue] = (0,react.useState)('');
  const [isLoading, setIsLoading] = (0,react.useState)(loading);
  const [isTyping, setIsTyping] = (0,react.useState)(false);
  const [error, setError] = (0,react.useState)('');
  const [isDropdownVisible, setIsDropdownVisible] = (0,react.useState)(false);
  const [page, setPage] = (0,react.useState)(0);
  const [totalCount, setTotalCount] = (0,react.useState)(0);
  const [loadingEnabled, setLoadingEnabled] = (0,react.useState)(!lazyLoading);
  const [allValuesLoaded, setAllValuesLoaded] = (0,react.useState)(false);
  const fetchedQueries = (0,react.useRef)(new Map());
  const mappedMode = isSingleMode ?
  undefined :
  allowNewOptions ?
  'tags' :
  'multiple';
  // TODO: Don't assume that isAsync is always labelInValue
  const handleTopOptions = (0,react.useCallback)((selectedValue) => {
    // bringing selected options to the top of the list
    if (selectedValue !== undefined && selectedValue !== null) {
      const isLabeledValue = isAsync || labelInValue;
      const topOptions = [];
      const otherOptions = [];
      selectOptions.forEach((opt) => {
        let found = false;
        if (Array.isArray(selectedValue)) {
          if (isLabeledValue) {
            found =
            selectedValue.find((element) => element.value === opt.value) !== undefined;
          } else
          {
            found = selectedValue.includes(opt.value);
          }
        } else
        {
          found = isLabeledValue ?
          selectedValue.value === opt.value :
          selectedValue === opt.value;
        }
        if (found) {
          topOptions.push(opt);
        } else
        {
          otherOptions.push(opt);
        }
      });
      // fallback for custom options in tags mode as they
      // do not appear in the selectOptions state
      if (!isSingleMode && Array.isArray(selectedValue)) {
        selectedValue.forEach((val) => {
          if (!topOptions.find((tOpt) => tOpt.value === (
          isLabeledValue ? val == null ? void 0 : val.value : val))) {
            if (isLabeledValue) {
              const labelValue = val;
              topOptions.push({
                label: labelValue.label,
                value: labelValue.value });

            } else
            {
              const value = val;
              topOptions.push({ label: String(value), value });
            }
          }
        });
      }
      const sortedOptions = [...topOptions, ...otherOptions];
      if (!isEqual_default()(sortedOptions, selectOptions)) {
        setSelectOptions(sortedOptions);
      }
    }
  }, [isAsync, isSingleMode, labelInValue, selectOptions]);
  const handleOnSelect = (selectedValue) => {
    if (isSingleMode) {
      setSelectValue(selectedValue);
    } else
    {
      const currentSelected = selectValue ?
      Array.isArray(selectValue) ?
      selectValue :
      [selectValue] :
      [];
      if (typeof selectedValue === 'number' ||
      typeof selectedValue === 'string') {
        setSelectValue([
        ...currentSelected,
        selectedValue]);

      } else
      {
        setSelectValue([
        ...currentSelected,
        selectedValue]);

      }
    }
    setSearchedValue('');
  };
  const handleOnDeselect = (value) => {
    if (Array.isArray(selectValue)) {
      if (typeof value === 'number' || typeof value === 'string') {
        const array = selectValue;
        setSelectValue(array.filter((element) => element !== value));
      } else
      {
        const array = selectValue;
        setSelectValue(array.filter((element) => element.value !== value.value));
      }
    }
    setSearchedValue('');
  };
  const internalOnError = (0,react.useCallback)((response) => (0,getClientErrorObject/* getClientErrorObject */.O)(response).then((e) => {
    const { error } = e;
    setError(error);
    if (onError) {
      onError(error);
    }
  }), [onError]);
  const handleData = (data) => {
    let mergedData = [];
    if (data && Array.isArray(data) && data.length) {
      const dataValues = new Set();
      data.forEach((option) => dataValues.add(String(option.value).toLocaleLowerCase()));
      // merges with existing and creates unique options
      setSelectOptions((prevOptions) => {
        mergedData = [
        ...prevOptions.filter((previousOption) => !dataValues.has(String(previousOption.value).toLocaleLowerCase())),
        ...data];

        return mergedData;
      });
    }
    return mergedData;
  };
  const handlePaginatedFetch = (0,react.useMemo)(() => (value, page, pageSize) => {
    if (allValuesLoaded) {
      setIsLoading(false);
      setIsTyping(false);
      return;
    }
    const key = `${value};${page};${pageSize}`;
    const cachedCount = fetchedQueries.current.get(key);
    if (cachedCount) {
      setTotalCount(cachedCount);
      setIsLoading(false);
      setIsTyping(false);
      return;
    }
    setIsLoading(true);
    const fetchOptions = options;
    fetchOptions(value, page, pageSize).
    then(({ data, totalCount }) => {
      const mergedData = handleData(data);
      fetchedQueries.current.set(key, totalCount);
      setTotalCount(totalCount);
      if (!fetchOnlyOnSearch &&
      value === '' &&
      mergedData.length >= totalCount) {
        setAllValuesLoaded(true);
      }
    }).
    catch(internalOnError).
    finally(() => {
      setIsLoading(false);
      setIsTyping(false);
    });
  }, [allValuesLoaded, fetchOnlyOnSearch, internalOnError, options]);
  const handleOnSearch = (0,react.useMemo)(() => debounce_default()((search) => {
    const searchValue = search.trim();
    if (allowNewOptions && isSingleMode) {
      const newOption = searchValue &&
      !(0,utils/* hasOption */.G)(searchValue, selectOptions) && {
        label: searchValue,
        value: searchValue };

      const newOptions = newOption ?
      [
      newOption,
      ...selectOptions.filter((opt) => opt.value !== searchedValue)] :

      [...selectOptions.filter((opt) => opt.value !== searchedValue)];
      setSelectOptions(newOptions);
    }
    if (!searchValue || searchValue === searchedValue) {
      setIsTyping(false);
    }
    setSearchedValue(searchValue);
  }, DEBOUNCE_TIMEOUT), [allowNewOptions, isSingleMode, searchedValue, selectOptions]);
  const handlePagination = (e) => {
    const vScroll = e.currentTarget;
    const thresholdReached = vScroll.scrollTop > (vScroll.scrollHeight - vScroll.offsetHeight) * 0.7;
    const hasMoreData = page * pageSize + pageSize < totalCount;
    if (!isLoading && isAsync && hasMoreData && thresholdReached) {
      const newPage = page + 1;
      handlePaginatedFetch(searchedValue, newPage, pageSize);
      setPage(newPage);
    }
  };
  const handleFilterOption = (search, option) => {
    if (typeof filterOption === 'function') {
      return filterOption(search, option);
    }
    if (filterOption) {
      const searchValue = search.trim().toLowerCase();
      if (optionFilterProps && optionFilterProps.length) {
        return optionFilterProps.some((prop) => {
          const optionProp = option != null && option[prop] ?
          String(option[prop]).trim().toLowerCase() :
          '';
          return optionProp.includes(searchValue);
        });
      }
    }
    return false;
  };
  const handleOnDropdownVisibleChange = (isDropdownVisible) => {
    setIsDropdownVisible(isDropdownVisible);
    if (isAsync && !loadingEnabled) {
      setLoadingEnabled(true);
    }
    // multiple or tags mode keep the dropdown visible while selecting options
    // this waits for the dropdown to be closed before sorting the top options
    if (!isSingleMode && !isDropdownVisible) {
      handleTopOptions(selectValue);
    }
  };
  const dropdownRender = (originNode) => {
    if (!isDropdownVisible) {var _originNode$ref, _originNode$ref$curre;
      (_originNode$ref = originNode.ref) == null ? void 0 : (_originNode$ref$curre = _originNode$ref.current) == null ? void 0 : _originNode$ref$curre.scrollTo({ top: 0 });
    }
    if (isLoading && selectOptions.length === 0 || isTyping) {
      return (0,emotion_react_browser_esm.jsx)(StyledLoadingText, null, (0,TranslatorSingleton.t)('Loading...'));
    }
    return error ? (0,emotion_react_browser_esm.jsx)(Error, { error: error }) : originNode;
  };
  const onInputKeyDown = (event) => {
    if (event.key.length === 1 && isAsync && !isTyping) {
      setIsTyping(true);
    }
  };
  const SuffixIcon = () => {
    if (isLoading) {
      return (0,emotion_react_browser_esm.jsx)(StyledSpin, { size: "small" });
    }
    if (shouldShowSearch && isDropdownVisible) {
      return (0,emotion_react_browser_esm.jsx)(SearchOutlined/* default */.Z, null);
    }
    return (0,emotion_react_browser_esm.jsx)(DownOutlined/* default */.Z, null);
  };
  const handleClear = () => {
    setSelectValue(undefined);
    if (onClear) {
      onClear();
    }
  };
  (0,react.useEffect)(() => {
    fetchedQueries.current.clear();
    setSelectOptions(options && Array.isArray(options) ? options : EMPTY_OPTIONS);
    setAllValuesLoaded(false);
  }, [options]);
  (0,react.useEffect)(() => {
    setSelectValue(value);
  }, [value]);
  (0,react.useEffect)(() => {
    if (selectValue) {
      const array = Array.isArray(selectValue) ?
      selectValue :
      [selectValue];
      const options = [];
      const isLabeledValue = isAsync || labelInValue;
      array.forEach((element) => {
        const found = selectOptions.find((option) => isLabeledValue ?
        option.value === element.value :
        option.value === element);
        if (!found) {
          options.push(isLabeledValue ?
          element :
          { value: element, label: element });
        }
      });
      if (options.length > 0) {
        setSelectOptions([...options, ...selectOptions]);
      }
    }
  }, [labelInValue, isAsync, selectOptions, selectValue]);
  // Stop the invocation of the debounced function after unmounting
  (0,react.useEffect)(() => () => handleOnSearch.cancel(), [handleOnSearch]);
  (0,react.useEffect)(() => {
    const allowFetch = !fetchOnlyOnSearch || searchedValue;
    if (isAsync && loadingEnabled && allowFetch) {
      const page = 0;
      handlePaginatedFetch(searchedValue, page, pageSize);
      setPage(page);
    }
  }, [
  isAsync,
  searchedValue,
  pageSize,
  handlePaginatedFetch,
  loadingEnabled,
  fetchOnlyOnSearch]);

  (0,react.useEffect)(() => {
    if (isSingleMode) {
      handleTopOptions(selectValue);
    }
  }, [handleTopOptions, isSingleMode, selectValue]);
  (0,react.useEffect)(() => {
    if (loading !== undefined && loading !== isLoading) {
      setIsLoading(loading);
    }
  }, [isLoading, loading]);
  return (0,emotion_react_browser_esm.jsx)(StyledContainer, null,
  header,
  (0,emotion_react_browser_esm.jsx)(StyledSelect, extends_default()({ "aria-label": ariaLabel || name, dropdownRender: dropdownRender, filterOption: handleFilterOption, getPopupContainer: (triggerNode) => triggerNode.parentNode, labelInValue: isAsync || labelInValue, maxTagCount: MAX_TAG_COUNT, mode: mappedMode, notFoundContent: allowNewOptions && !fetchOnlyOnSearch ? (0,emotion_react_browser_esm.jsx)(StyledLoadingText, null, (0,TranslatorSingleton.t)('Loading...')) : notFoundContent, onDeselect: handleOnDeselect, onDropdownVisibleChange: handleOnDropdownVisibleChange, onInputKeyDown: onInputKeyDown, onPopupScroll: isAsync ? handlePagination : undefined, onSearch: shouldShowSearch ? handleOnSearch : undefined, onSelect: handleOnSelect, onClear: handleClear, onChange: onChange, options: shouldUseChildrenOptions ? undefined : selectOptions, placeholder: placeholder, showSearch: shouldShowSearch, showArrow: true, tokenSeparators: TOKEN_SEPARATORS, value: selectValue, suffixIcon: (0,emotion_react_browser_esm.jsx)(SuffixIcon, null), menuItemSelectedIcon: invertSelection ? (0,emotion_react_browser_esm.jsx)(StyledStopOutlined, { iconSize: "m" }) : (0,emotion_react_browser_esm.jsx)(StyledCheckOutlined, { iconSize: "m" }) }, props),
  shouldUseChildrenOptions &&
  selectOptions.map((opt) => {
    const isOptObject = typeof opt === 'object';
    const label = isOptObject ? (opt == null ? void 0 : opt.label) || opt.value : opt;
    const value = isOptObject && opt.value || opt;
    const { customLabel, ...optProps } = opt;
    return (0,emotion_react_browser_esm.jsx)(Option, extends_default()({}, optProps, { key: value, label: label, value: value }),
    isOptObject && customLabel ? customLabel : label);

  })));


};
/* harmony default export */ const Select_Select = (Select);
;// CONCATENATED MODULE: ./src/components/index.ts
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


/***/ }),

/***/ 80621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PV": () => (/* binding */ DASHBOARD_GRID_ID),
/* harmony export */   "M2": () => (/* binding */ DASHBOARD_HEADER_ID),
/* harmony export */   "_4": () => (/* binding */ DASHBOARD_ROOT_ID),
/* harmony export */   "Zn": () => (/* binding */ DASHBOARD_VERSION_KEY),
/* harmony export */   "D0": () => (/* binding */ NEW_COMPONENTS_SOURCE_ID),
/* harmony export */   "Jd": () => (/* binding */ NEW_CHART_ID),
/* harmony export */   "Nb": () => (/* binding */ NEW_COLUMN_ID),
/* harmony export */   "ES": () => (/* binding */ NEW_DIVIDER_ID),
/* harmony export */   "Z1": () => (/* binding */ NEW_HEADER_ID),
/* harmony export */   "C3": () => (/* binding */ NEW_MARKDOWN_ID),
/* harmony export */   "vD": () => (/* binding */ NEW_ROW_ID),
/* harmony export */   "Xk": () => (/* binding */ NEW_TAB_ID),
/* harmony export */   "NN": () => (/* binding */ NEW_TABS_ID),
/* harmony export */   "Mu": () => (/* binding */ DASHBOARD_ROOT_DEPTH),
/* harmony export */   "cd": () => (/* binding */ GRID_BASE_UNIT),
/* harmony export */   "es": () => (/* binding */ GRID_GUTTER_SIZE),
/* harmony export */   "cz": () => (/* binding */ GRID_COLUMN_COUNT),
/* harmony export */   "cx": () => (/* binding */ GRID_MIN_COLUMN_COUNT),
/* harmony export */   "AA": () => (/* binding */ GRID_MIN_ROW_UNITS),
/* harmony export */   "fw": () => (/* binding */ GRID_DEFAULT_CHART_WIDTH),
/* harmony export */   "u_": () => (/* binding */ SMALL_HEADER),
/* harmony export */   "OE": () => (/* binding */ MEDIUM_HEADER),
/* harmony export */   "pQ": () => (/* binding */ LARGE_HEADER),
/* harmony export */   "b5": () => (/* binding */ BACKGROUND_WHITE),
/* harmony export */   "HE": () => (/* binding */ BACKGROUND_TRANSPARENT),
/* harmony export */   "Q9": () => (/* binding */ UNDO_LIMIT),
/* harmony export */   "TN": () => (/* binding */ SAVE_TYPE_OVERWRITE),
/* harmony export */   "kS": () => (/* binding */ SAVE_TYPE_NEWDASHBOARD),
/* harmony export */   "Bu": () => (/* binding */ DASHBOARD_POSITION_DATA_LIMIT),
/* harmony export */   "Ep": () => (/* binding */ IN_COMPONENT_ELEMENT_TYPES),
/* harmony export */   "dU": () => (/* binding */ ALL_FILTERS_ROOT),
/* harmony export */   "_B": () => (/* binding */ DashboardStandaloneMode)
/* harmony export */ });
/* unused harmony exports GRID_MAX_ROW_UNITS, GRID_MIN_ROW_HEIGHT */
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
// Ids
const DASHBOARD_GRID_ID = 'GRID_ID';
const DASHBOARD_HEADER_ID = 'HEADER_ID';
const DASHBOARD_ROOT_ID = 'ROOT_ID';
const DASHBOARD_VERSION_KEY = 'DASHBOARD_VERSION_KEY';
const NEW_COMPONENTS_SOURCE_ID = 'NEW_COMPONENTS_SOURCE_ID';
const NEW_CHART_ID = 'NEW_CHART_ID';
const NEW_COLUMN_ID = 'NEW_COLUMN_ID';
const NEW_DIVIDER_ID = 'NEW_DIVIDER_ID';
const NEW_HEADER_ID = 'NEW_HEADER_ID';
const NEW_MARKDOWN_ID = 'NEW_MARKDOWN_ID';
const NEW_ROW_ID = 'NEW_ROW_ID';
const NEW_TAB_ID = 'NEW_TAB_ID';
const NEW_TABS_ID = 'NEW_TABS_ID';
// grid constants
const DASHBOARD_ROOT_DEPTH = 0;
const GRID_BASE_UNIT = 8;
const GRID_GUTTER_SIZE = 2 * GRID_BASE_UNIT;
const GRID_COLUMN_COUNT = 12;
const GRID_MIN_COLUMN_COUNT = 1;
const GRID_MIN_ROW_UNITS = 5;
const GRID_MAX_ROW_UNITS = 100;
const GRID_MIN_ROW_HEIGHT = (/* unused pure expression or super */ null && (GRID_GUTTER_SIZE));
const GRID_DEFAULT_CHART_WIDTH = 4;
// Header types
const SMALL_HEADER = 'SMALL_HEADER';
const MEDIUM_HEADER = 'MEDIUM_HEADER';
const LARGE_HEADER = 'LARGE_HEADER';
// Style types
const BACKGROUND_WHITE = 'BACKGROUND_WHITE';
const BACKGROUND_TRANSPARENT = 'BACKGROUND_TRANSPARENT';
// undo-redo
const UNDO_LIMIT = 50;
// save dash options
const SAVE_TYPE_OVERWRITE = 'overwrite';
const SAVE_TYPE_NEWDASHBOARD = 'newDashboard';
// default dashboard layout data size limit
// could be overwritten by server-side config
const DASHBOARD_POSITION_DATA_LIMIT = 65535;
// in-component element types: can be added into
// directPathToChild, used for in dashboard navigation and focus
const IN_COMPONENT_ELEMENT_TYPES = ['LABEL'];
// filter scope selector filter fields pane root id
const ALL_FILTERS_ROOT = 'ALL_FILTERS_ROOT';
var DashboardStandaloneMode;
(function (DashboardStandaloneMode) {
  DashboardStandaloneMode[DashboardStandaloneMode["HIDE_NAV"] = 1] = "HIDE_NAV";
  DashboardStandaloneMode[DashboardStandaloneMode["HIDE_NAV_AND_TITLE"] = 2] = "HIDE_NAV_AND_TITLE";
  DashboardStandaloneMode[DashboardStandaloneMode["REPORT"] = 3] = "REPORT";
})(DashboardStandaloneMode || (DashboardStandaloneMode = {}));

/***/ }),

/***/ 91877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fG": () => (/* binding */ initFeatureFlags),
/* harmony export */   "cr": () => (/* binding */ isFeatureEnabled)
/* harmony export */ });

function initFeatureFlags(featureFlags) {
  if (!window.featureFlags) {
    window.featureFlags = featureFlags || {};
  }
}
function isFeatureEnabled(feature) {
  return window && window.featureFlags && !!window.featureFlags[feature];
}

/***/ }),

/***/ 1113:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 84116:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 27829:
/***/ (() => {

/* (ignored) */

/***/ })

}]);