"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[4052],{

/***/ 13433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60650);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58593);
/* harmony import */ var src_components_MessageToasts_withToasts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14114);
/* harmony import */ var src_utils_copy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10222);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11965);
function _EMOTION_STRINGIFIED_CSS_ERROR__() {return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";} /**
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







const propTypes = {
  copyNode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  getText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onCopyEnd: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  shouldShowText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  tooltipText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  addDangerToast: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  addSuccessToast: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired) };


const defaultProps = {
  copyNode: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", null, "Copy"),
  onCopyEnd: () => {},
  shouldShowText: true,
  wrapped: true,
  tooltipText: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Copy to clipboard') };var _ref =  true ? { name: "8irbms", styles: "display:inline-flex;align-items:center" } : 0;


class CopyToClipboard extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    // bindings
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.props.getText) {
      this.props.getText((d) => {
        this.copyToClipboard(d);
      });
    } else {
      this.copyToClipboard(this.props.text);
    }
  }

  getDecoratedCopyNode() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(this.props.copyNode, {
      style: { cursor: 'pointer' },
      onClick: this.onClick });

  }

  copyToClipboard(textToCopy) {
    (0,src_utils_copy__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(textToCopy).
    then(() => {
      this.props.addSuccessToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Copied to clipboard!'));
    }).
    catch(() => {
      this.props.addDangerToast(
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)(
      'Sorry, your browser does not support copying. Use Ctrl / Cmd + C!'));


    }).
    finally(() => {
      this.props.onCopyEnd();
    });
  }

  renderNotWrapped() {
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Tooltip */ .u, {
        id: "copy-to-clipboard-tooltip",
        placement: "top",
        style: { cursor: 'pointer' },
        title: this.props.tooltipText,
        trigger: ['hover'] },

      this.getDecoratedCopyNode()));


  }

  renderLink() {
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", { css: _ref },
      this.props.shouldShowText && this.props.text &&
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", { className: "m-r-5" },
      this.props.text),


      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Tooltip */ .u, {
        id: "copy-to-clipboard-tooltip",
        placement: "top",
        title: this.props.tooltipText,
        trigger: ['hover'] },

      this.getDecoratedCopyNode())));



  }

  render() {
    const { wrapped } = this.props;
    if (!wrapped) {
      return this.renderNotWrapped();
    }
    return this.renderLink();
  }}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,src_components_MessageToasts_withToasts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(CopyToClipboard));

CopyToClipboard.propTypes = propTypes;
CopyToClipboard.defaultProps = defaultProps;

/***/ }),

/***/ 54076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "li": () => (/* binding */ NULL_STRING),
/* harmony export */   "Tb": () => (/* binding */ TRUE_STRING),
/* harmony export */   "jy": () => (/* binding */ FALSE_STRING),
/* harmony export */   "G9": () => (/* binding */ storeQuery),
/* harmony export */   "Mv": () => (/* binding */ prepareCopyToClipboardTabularData),
/* harmony export */   "cD": () => (/* binding */ applyFormattingToTabularData),
/* harmony export */   "EI": () => (/* binding */ noOp),
/* harmony export */   "fV": () => (/* binding */ detectOS)
/* harmony export */ });
/* unused harmony exports SHORT_DATE, SHORT_TIME, getParamFromQuery, optionLabel, optionValue, optionFromValue */
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14826);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76187);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21173);
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


// ATTENTION: If you change any constants, make sure to also change constants.py

const NULL_STRING = '<NULL>';
const TRUE_STRING = 'TRUE';
const FALSE_STRING = 'FALSE';

// moment time format strings
const SHORT_DATE = 'MMM D, YYYY';
const SHORT_TIME = 'h:m a';

const DATETIME_FORMATTER = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* .getTimeFormatter */ .bt)(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* ["default"].DATABASE_DATETIME */ .Z.DATABASE_DATETIME);

function getParamFromQuery(query, param) {
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === param) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
}

function storeQuery(query) {
  return _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"].post */ .Z.post({
    endpoint: '/kv/store/',
    postPayload: { data: query } }).
  then((response) => {
    const baseUrl = window.location.origin + window.location.pathname;
    const url = `${baseUrl}?id=${response.json.id}`;
    return url;
  });
}

function optionLabel(opt) {
  if (opt === null) {
    return NULL_STRING;
  }
  if (opt === '') {
    return '<empty string>';
  }
  if (opt === true) {
    return '<true>';
  }
  if (opt === false) {
    return '<false>';
  }
  if (typeof opt !== 'string' && opt.toString) {
    return opt.toString();
  }
  return opt;
}

function optionValue(opt) {
  if (opt === null) {
    return NULL_STRING;
  }
  return opt;
}

function optionFromValue(opt) {
  // From a list of options, handles special values & labels
  return { value: optionValue(opt), label: optionLabel(opt) };
}

function prepareCopyToClipboardTabularData(data, columns) {
  let result = '';
  for (let i = 0; i < data.length; i += 1) {
    const row = {};
    for (let j = 0; j < columns.length; j += 1) {
      // JavaScript does not mantain the order of a mixed set of keys (i.e integers and strings)
      // the below function orders the keys based on the column names.
      const key = columns[j].name || columns[j];
      if (data[i][key]) {
        row[j] = data[i][key];
      } else {
        row[j] = data[i][parseFloat(key)];
      }
    }
    result += `${Object.values(row).join('\t')}\n`;
  }
  return result;
}

function applyFormattingToTabularData(data) {
  if (!data || data.length === 0 || !('__timestamp' in data[0])) {
    return data;
  }
  return data.map((row) => ({
    ...row,
    /* eslint-disable no-underscore-dangle */
    __timestamp:
    row.__timestamp === 0 || row.__timestamp ?
    DATETIME_FORMATTER(new Date(row.__timestamp)) :
    row.__timestamp
    /* eslint-enable no-underscore-dangle */ }));

}

const noOp = () => undefined;

// Detects the user's OS through the browser
const detectOS = () => {
  const { appVersion } = navigator;

  // Leveraging this condition because of stackOverflow
  // https://stackoverflow.com/questions/11219582/how-to-detect-my-browser-version-and-operating-system-using-javascript
  if (appVersion.includes('Win')) return 'Windows';
  if (appVersion.includes('Mac')) return 'MacOS';
  if (appVersion.includes('X11')) return 'UNIX';
  if (appVersion.includes('Linux')) return 'Linux';

  return 'Unknown OS';
};

/***/ }),

/***/ 35932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5872);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11965);
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21804);
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71577);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37840);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58593);
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







function Button(props) {
  const { tooltip, placement, disabled = false, buttonSize, buttonStyle, className, cta, children, href, showMarginRight = true, ...restProps } = props;
  const theme = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .useTheme */ .Fg)();
  const { colors, transitionTiming, borderRadius, typography } = theme;
  const { primary, grayscale, success, warning, error } = colors;
  let height = 32;
  let padding = 18;
  if (buttonSize === 'xsmall') {
    height = 22;
    padding = 5;
  } else
  if (buttonSize === 'small') {
    height = 30;
    padding = 10;
  }
  let backgroundColor = primary.light4;
  let backgroundColorHover = (0,polished__WEBPACK_IMPORTED_MODULE_6__/* .mix */ .CD)(0.1, primary.base, primary.light4);
  let backgroundColorActive = (0,polished__WEBPACK_IMPORTED_MODULE_6__/* .mix */ .CD)(0.25, primary.base, primary.light4);
  let backgroundColorDisabled = grayscale.light2;
  let color = primary.dark1;
  let colorHover = color;
  let borderWidth = 0;
  let borderStyle = 'none';
  let borderColor = 'transparent';
  let borderColorHover = 'transparent';
  let borderColorDisabled = 'transparent';
  if (buttonStyle === 'primary') {
    backgroundColor = primary.dark1;
    backgroundColorHover = (0,polished__WEBPACK_IMPORTED_MODULE_6__/* .mix */ .CD)(0.1, grayscale.light5, primary.dark1);
    backgroundColorActive = (0,polished__WEBPACK_IMPORTED_MODULE_6__/* .mix */ .CD)(0.2, grayscale.dark2, primary.dark1);
    color = grayscale.light5;
    colorHover = color;
  } else
  if (buttonStyle === 'tertiary' || buttonStyle === 'dashed') {
    backgroundColor = grayscale.light5;
    backgroundColorHover = grayscale.light5;
    backgroundColorActive = grayscale.light5;
    backgroundColorDisabled = grayscale.light5;
    borderWidth = 1;
    borderStyle = buttonStyle === 'dashed' ? 'dashed' : 'solid';
    borderColor = primary.dark1;
    borderColorHover = primary.light1;
    borderColorDisabled = grayscale.light2;
  } else
  if (buttonStyle === 'danger') {
    backgroundColor = error.base;
    backgroundColorHover = (0,polished__WEBPACK_IMPORTED_MODULE_6__/* .mix */ .CD)(0.1, grayscale.light5, error.base);
    backgroundColorActive = (0,polished__WEBPACK_IMPORTED_MODULE_6__/* .mix */ .CD)(0.2, grayscale.dark2, error.base);
    color = grayscale.light5;
    colorHover = color;
  } else
  if (buttonStyle === 'warning') {
    backgroundColor = warning.base;
    backgroundColorHover = (0,polished__WEBPACK_IMPORTED_MODULE_6__/* .mix */ .CD)(0.1, grayscale.dark2, warning.base);
    backgroundColorActive = (0,polished__WEBPACK_IMPORTED_MODULE_6__/* .mix */ .CD)(0.2, grayscale.dark2, warning.base);
    color = grayscale.light5;
    colorHover = color;
  } else
  if (buttonStyle === 'success') {
    backgroundColor = success.base;
    backgroundColorHover = (0,polished__WEBPACK_IMPORTED_MODULE_6__/* .mix */ .CD)(0.1, grayscale.light5, success.base);
    backgroundColorActive = (0,polished__WEBPACK_IMPORTED_MODULE_6__/* .mix */ .CD)(0.2, grayscale.dark2, success.base);
    color = grayscale.light5;
    colorHover = color;
  } else
  if (buttonStyle === 'link') {
    backgroundColor = 'transparent';
    backgroundColorHover = 'transparent';
    backgroundColorActive = 'transparent';
    colorHover = primary.base;
  }
  const element = children;
  let renderedChildren = [];
  if (element && element.type === react__WEBPACK_IMPORTED_MODULE_2__.Fragment) {
    renderedChildren = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(element.props.children);
  } else
  {
    renderedChildren = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children);
  }
  const firstChildMargin = showMarginRight && renderedChildren.length > 1 ? theme.gridUnit * 2 : 0;
  const button = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ href: disabled ? undefined : href, disabled: disabled, className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'superset-button', { cta: !!cta }), css: /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.css)({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 1.5715,
      fontSize: typography.sizes.s,
      fontWeight: typography.weights.bold,
      height,
      textTransform: 'uppercase',
      padding: `0px ${padding}px`,
      transition: `all ${transitionTiming}s`,
      minWidth: cta ? theme.gridUnit * 36 : undefined,
      minHeight: cta ? theme.gridUnit * 8 : undefined,
      boxShadow: 'none',
      borderWidth,
      borderStyle,
      borderColor,
      borderRadius,
      color,
      backgroundColor,
      '&:hover': {
        color: colorHover,
        backgroundColor: backgroundColorHover,
        borderColor: borderColorHover },

      '&:active': {
        color,
        backgroundColor: backgroundColorActive },

      '&:focus': {
        color,
        backgroundColor,
        borderColor },

      '&[disabled], &[disabled]:hover': {
        color: grayscale.base,
        backgroundColor: backgroundColorDisabled,
        borderColor: borderColorDisabled },

      marginLeft: 0,
      '& + .superset-button': {
        marginLeft: theme.gridUnit * 2 },

      '& :first-of-type': {
        marginRight: firstChildMargin } },  true ? "" : 0,  true ? "" : 0) },

  restProps),
  children);

  if (tooltip) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__/* .Tooltip */ .u, { placement: placement, id: `${lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1___default()(tooltip)}-tooltip`, title: tooltip },


    disabled ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", null, button) : button);

  }
  return button;
}

/***/ }),

/***/ 91178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ErrorAlert)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60650);
/* harmony import */ var src_utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54076);
/* harmony import */ var src_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74069);
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35932);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38097);
/* harmony import */ var _CopyToClipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13433);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11965);
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







const ErrorAlertDiv = _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .styled.div */ .iK.div`
  align-items: center;
  background-color: ${({ level, theme }) => theme.colors[level].light2};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  border: 1px solid ${({ level, theme }) => theme.colors[level].base};
  color: ${({ level, theme }) => theme.colors[level].dark2};
  padding: ${({ theme }) => 2 * theme.gridUnit}px;
  width: 100%;

  .top-row {
    display: flex;
    justify-content: space-between;
  }

  .error-body {
    padding-top: ${({ theme }) => theme.gridUnit}px;
    padding-left: ${({ theme }) => 8 * theme.gridUnit}px;
  }

  .icon {
    margin-right: ${({ theme }) => 2 * theme.gridUnit}px;
  }

  .link {
    color: ${({ level, theme }) => theme.colors[level].dark2};
    text-decoration: underline;
  }
`;
const ErrorModal = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .styled */ .iK)(src_components_Modal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)`
  color: ${({ level, theme }) => theme.colors[level].dark2};
  overflow-wrap: break-word;

  .ant-modal-header {
    background-color: ${({ level, theme }) => theme.colors[level].light2};
    padding: ${({ theme }) => 4 * theme.gridUnit}px;
  }

  .icon {
    margin-right: ${({ theme }) => 2 * theme.gridUnit}px;
  }

  .header {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.typography.sizes.l}px;
  }
`;
const LeftSideContent = _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .styled.div */ .iK.div`
  align-items: center;
  display: flex;
`;
function ErrorAlert({ body, copyText, level = 'error', source = 'dashboard', subtitle, title }) {
  const theme = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .useTheme */ .Fg)();
  const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isBodyExpanded, setIsBodyExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isExpandable = ['explore', 'sqllab'].includes(source);
  const iconColor = theme.colors[level].base;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(ErrorAlertDiv, { level: level, role: "alert" },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "top-row" },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(LeftSideContent, null,
  level === 'error' ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"].ErrorSolid */ .Z.ErrorSolid, { className: "icon", iconColor: iconColor }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"].WarningSolid */ .Z.WarningSolid, { className: "icon", iconColor: iconColor }),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("strong", null, title)),

  !isExpandable && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", { role: "button", tabIndex: 0, className: "link", onClick: () => setIsModalOpen(true) },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('See more'))),


  isExpandable ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "error-body" },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", null, subtitle),
  body && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
  !isBodyExpanded && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", { role: "button", tabIndex: 0, className: "link", onClick: () => setIsBodyExpanded(true) },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('See more')),

  isBodyExpanded && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", null),
  body,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", { role: "button", tabIndex: 0, className: "link", onClick: () => setIsBodyExpanded(false) },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('See less'))))) :



  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(ErrorModal, { level: level, show: isModalOpen, onHide: () => setIsModalOpen(false), title: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "header" },
    level === 'error' ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"].ErrorSolid */ .Z.ErrorSolid, { className: "icon", iconColor: iconColor }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"].WarningSolid */ .Z.WarningSolid, { className: "icon", iconColor: iconColor }),
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "title" }, title)),
    footer: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    copyText && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CopyToClipboard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, { text: copyText, shouldShowText: false, wrapped: false, copyNode: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, { onClick: src_utils_common__WEBPACK_IMPORTED_MODULE_1__/* .noOp */ .EI }, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Copy message')) }),
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, { cta: true, buttonStyle: "primary", onClick: () => setIsModalOpen(false) },
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Close'))) },


  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", null, subtitle),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", null),
  body)));



}

/***/ }),

/***/ 92869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8018);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23630);
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

class ErrorMessageComponentRegistry extends _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  constructor() {
    super({
      name: 'ErrorMessageComponent',
      overwritePolicy: _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* .OverwritePolicy.ALLOW */ .r.ALLOW });

  }}

const getErrorMessageComponentRegistry = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(ErrorMessageComponentRegistry);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getErrorMessageComponentRegistry);

/***/ }),

/***/ 37921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5872);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11965);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82191);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37840);
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



function Label(props) {
  const theme = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .Fg)();
  const { colors, transitionTiming } = theme;
  const { type, onClick, children, ...rest } = props;
  const { primary, secondary, grayscale, success, warning, error, info } = colors;
  let backgroundColor = grayscale.light3;
  let backgroundColorHover = onClick ? primary.light2 : grayscale.light3;
  let borderColor = onClick ? grayscale.light2 : 'transparent';
  let borderColorHover = onClick ? primary.light1 : 'transparent';
  let color = grayscale.dark1;
  if (type && type !== 'default') {
    color = grayscale.light4;
    let baseColor;
    if (type === 'success') {
      baseColor = success;
    } else
    if (type === 'warning') {
      baseColor = warning;
    } else
    if (type === 'danger') {
      baseColor = error;
    } else
    if (type === 'info') {
      baseColor = info;
    } else
    if (type === 'secondary') {
      baseColor = secondary;
    } else
    {
      baseColor = primary;
    }
    backgroundColor = baseColor.base;
    backgroundColorHover = onClick ? baseColor.dark1 : baseColor.base;
    borderColor = onClick ? baseColor.dark1 : 'transparent';
    borderColorHover = onClick ? baseColor.dark2 : 'transparent';
  }
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Tag */ .Vp, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ onClick: onClick }, rest, { css: /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.css)({
      transition: `background-color ${transitionTiming}s`,
      whiteSpace: 'nowrap',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      backgroundColor,
      borderColor,
      borderRadius: 21,
      padding: '0.35em 0.8em',
      lineHeight: 1,
      color,
      maxWidth: '100%',
      '&:hover': {
        backgroundColor: backgroundColorHover,
        borderColor: borderColorHover,
        opacity: 1 } },  true ? "" : 0,  true ? "" : 0) }),


  children);

}

/***/ }),

/***/ 72570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ ADD_TOAST),
/* harmony export */   "fz": () => (/* binding */ addToast),
/* harmony export */   "K7": () => (/* binding */ REMOVE_TOAST),
/* harmony export */   "RS": () => (/* binding */ removeToast),
/* harmony export */   "bM": () => (/* binding */ addInfoToast),
/* harmony export */   "ws": () => (/* binding */ addSuccessToast),
/* harmony export */   "Dz": () => (/* binding */ addWarningToast),
/* harmony export */   "Gb": () => (/* binding */ addDangerToast),
/* harmony export */   "s2": () => (/* binding */ toastActions)
/* harmony export */ });
/* unused harmony exports getToastUuid, ADD_INFO_TOAST, ADD_SUCCESS_TOAST, ADD_WARNING_TOAST, ADD_DANGER_TOAST */
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14670);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8818);
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


function getToastUuid(type) {
  return `${type}-${shortid__WEBPACK_IMPORTED_MODULE_0___default().generate()}`;
}
const ADD_TOAST = 'ADD_TOAST';
function addToast({ toastType, text, duration = 8000, noDuplicate = false }) {
  return {
    type: ADD_TOAST,
    payload: {
      id: getToastUuid(toastType),
      toastType,
      text,
      duration,
      noDuplicate } };


}
const REMOVE_TOAST = 'REMOVE_TOAST';
function removeToast(id) {
  return {
    type: REMOVE_TOAST,
    payload: {
      id } };


}
// Different types of toasts
const ADD_INFO_TOAST = 'ADD_INFO_TOAST';
function addInfoToast(text, options) {
  return addToast({
    text,
    toastType: _types__WEBPACK_IMPORTED_MODULE_1__/* .ToastType.INFO */ .p.INFO,
    duration: 4000,
    ...options });

}
const ADD_SUCCESS_TOAST = 'ADD_SUCCESS_TOAST';
function addSuccessToast(text, options) {
  return addToast({
    text,
    toastType: _types__WEBPACK_IMPORTED_MODULE_1__/* .ToastType.SUCCESS */ .p.SUCCESS,
    duration: 4000,
    ...options });

}
const ADD_WARNING_TOAST = 'ADD_WARNING_TOAST';
function addWarningToast(text, options) {
  return addToast({
    text,
    toastType: _types__WEBPACK_IMPORTED_MODULE_1__/* .ToastType.WARNING */ .p.WARNING,
    duration: 6000,
    ...options });

}
const ADD_DANGER_TOAST = 'ADD_DANGER_TOAST';
function addDangerToast(text, options) {
  return addToast({
    text,
    toastType: _types__WEBPACK_IMPORTED_MODULE_1__/* .ToastType.DANGER */ .p.DANGER,
    duration: 8000,
    ...options });

}
const toastActions = {
  addInfoToast,
  addSuccessToast,
  addWarningToast,
  addDangerToast };

/***/ }),

/***/ 8818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ ToastType)
/* harmony export */ });
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
var ToastType;
(function (ToastType) {
  ToastType["INFO"] = "INFO_TOAST";
  ToastType["SUCCESS"] = "SUCCESS_TOAST";
  ToastType["WARNING"] = "WARNING_TOAST";
  ToastType["DANGER"] = "DANGER_TOAST";
})(ToastType || (ToastType = {}));

/***/ }),

/***/ 14114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ withToasts),
/* harmony export */   "e": () => (/* binding */ useToasts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14890);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37703);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72570);
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




const toasters = {
  addInfoToast: _actions__WEBPACK_IMPORTED_MODULE_2__/* .addInfoToast */ .bM,
  addSuccessToast: _actions__WEBPACK_IMPORTED_MODULE_2__/* .addSuccessToast */ .ws,
  addWarningToast: _actions__WEBPACK_IMPORTED_MODULE_2__/* .addWarningToast */ .Dz,
  addDangerToast: _actions__WEBPACK_IMPORTED_MODULE_2__/* .addDangerToast */ .Gb };

// To work properly the redux state must have a `messageToasts` subtree
function withToasts(BaseComponent) {
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .connect */ .$j)(null, (dispatch) => (0,redux__WEBPACK_IMPORTED_MODULE_3__/* .bindActionCreators */ .DE)(toasters, dispatch))(BaseComponent);
  // Redux has some confusing typings that cause problems for consumers of this function.
  // If someone can fix the types, great, but for now it's just any.
}
function useToasts() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useDispatch */ .I0)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,redux__WEBPACK_IMPORTED_MODULE_3__/* .bindActionCreators */ .DE)(toasters, dispatch), [dispatch]);
}

/***/ }),

/***/ 74069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* reexport */ StyledModal),
  "Z": () => (/* reexport */ Modal_Modal)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/lodash/isNil.js
var isNil = __webpack_require__(14293);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var components = __webpack_require__(82191);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./node_modules/re-resizable/lib/index.js + 1 modules
var lib = __webpack_require__(29119);
// EXTERNAL MODULE: ./node_modules/react-draggable/build/cjs/cjs.js
var cjs = __webpack_require__(61193);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
;// CONCATENATED MODULE: ./src/components/Modal/Modal.tsx
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








const MODAL_HEADER_HEIGHT = 55;
const MODAL_MIN_CONTENT_HEIGHT = 54;
const MODAL_FOOTER_HEIGHT = 65;
const RESIZABLE_MIN_HEIGHT = MODAL_HEADER_HEIGHT + MODAL_MIN_CONTENT_HEIGHT;
const RESIZABLE_MIN_WIDTH = '380px';
const RESIZABLE_MAX_HEIGHT = '100vh';
const RESIZABLE_MAX_WIDTH = '100vw';
const BaseModal = (props) =>
// Removes mask animation. Fixed in 4.6.0.
// https://github.com/ant-design/ant-design/issues/27192
(0,emotion_react_browser_esm.jsx)(components/* Modal */.u_, extends_default()({}, props, { maskTransitionName: "" }));
const StyledModal = (0,style/* styled */.iK)(BaseModal)`
  ${({ theme, responsive, maxWidth }) => responsive && /*#__PURE__*/
(0,emotion_react_browser_esm.css)("max-width:",
maxWidth != null ? maxWidth : '900px', ";padding-left:",
theme.gridUnit * 3, "px;padding-right:",
theme.gridUnit * 3, "px;" + ( true ? "" : 0),  true ? "" : 0)
}

  .ant-modal-header {
    background-color: ${({ theme }) => theme.colors.grayscale.light4};
    border-radius: ${({ theme }) => theme.borderRadius}px
      ${({ theme }) => theme.borderRadius}px 0 0;
    padding-left: ${({ theme }) => theme.gridUnit * 4}px;
    padding-right: ${({ theme }) => theme.gridUnit * 4}px;

    .ant-modal-title h4 {
      display: flex;
      margin: 0;
      align-items: center;
    }
  }

  .ant-modal-close-x {
    display: flex;
    align-items: center;

    .close {
      flex: 1 1 auto;
      margin-bottom: ${({ theme }) => theme.gridUnit}px;
      color: ${({ theme }) => theme.colors.secondary.dark1};
      font-size: 32px;
      font-weight: ${({ theme }) => theme.typography.weights.light};
    }
  }

  .ant-modal-body {
    padding: ${({ theme }) => theme.gridUnit * 4}px;
    overflow: auto;
    ${({ resizable, height }) => !resizable && height && `height: ${height};`}
  }
  .ant-modal-footer {
    border-top: ${({ theme }) => theme.gridUnit / 4}px solid
      ${({ theme }) => theme.colors.grayscale.light2};
    padding: ${({ theme }) => theme.gridUnit * 4}px;

    .btn {
      font-size: 12px;
      text-transform: uppercase;
    }

    .btn + .btn {
      margin-left: ${({ theme }) => theme.gridUnit * 2}px;
    }
  }

  // styling for Tabs component
  // Aaron note 20-11-19: this seems to be exclusively here for the Edit Database modal.
  // TODO: remove this as it is a special case.
  .ant-tabs-top {
    margin-top: -${({ theme }) => theme.gridUnit * 4}px;
  }

  &.no-content-padding .ant-modal-body {
    padding: 0;
  }

  ${({ draggable, theme }) => draggable &&
`
    .ant-modal-header {
      padding: 0;
      .draggable-trigger {
          cursor: move;
          padding: ${theme.gridUnit * 4}px;
          width: 100%;
        }
    }
  `};

  ${({ resizable, hideFooter }) => resizable &&
`
    .resizable {
      pointer-events: all;

      .resizable-wrapper {
        height: 100%;
      }

      .ant-modal-content {
        height: 100%;

        .ant-modal-body {
          /* 100% - header height - footer height */
          height: ${hideFooter ?
`calc(100% - ${MODAL_HEADER_HEIGHT}px);` :
`calc(100% - ${MODAL_HEADER_HEIGHT}px - ${MODAL_FOOTER_HEIGHT}px);`}
        }
      }
    }
  `}
`;
const CustomModal = ({ children, disablePrimaryButton = false, onHide, onHandledPrimaryAction, primaryButtonName = (0,TranslatorSingleton.t)('OK'), primaryButtonType = 'primary', show, name, title, width, maxWidth, responsive = false, centered, footer, hideFooter, wrapProps, draggable = false, resizable = false, resizableConfig = {
    maxHeight: RESIZABLE_MAX_HEIGHT,
    maxWidth: RESIZABLE_MAX_WIDTH,
    minHeight: hideFooter ?
    RESIZABLE_MIN_HEIGHT :
    RESIZABLE_MIN_HEIGHT + MODAL_FOOTER_HEIGHT,
    minWidth: RESIZABLE_MIN_WIDTH,
    enable: {
      bottom: true,
      bottomLeft: false,
      bottomRight: true,
      left: false,
      top: false,
      topLeft: false,
      topRight: false,
      right: true } },

  draggableConfig, destroyOnClose, ...rest }) => {
  const draggableRef = (0,react.useRef)(null);
  const [bounds, setBounds] = (0,react.useState)();
  const [dragDisabled, setDragDisabled] = (0,react.useState)(true);
  const modalFooter = isNil_default()(footer) ?
  [
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { key: "back", onClick: onHide, cta: true },
  (0,TranslatorSingleton.t)('Cancel')),

  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { key: "submit", buttonStyle: primaryButtonType, disabled: disablePrimaryButton, onClick: onHandledPrimaryAction, cta: true },
  primaryButtonName)] :


  footer;
  const modalWidth = width || (responsive ? '100vw' : '600px');
  const shouldShowMask = !(resizable || draggable);
  const onDragStart = (_, uiData) => {var _window, _window$document, _draggableRef$current;
    const { clientWidth, clientHeight } = (_window = window) == null ? void 0 : (_window$document = _window.document) == null ? void 0 : _window$document.documentElement;
    const targetRect = draggableRef == null ? void 0 : (_draggableRef$current = draggableRef.current) == null ? void 0 : _draggableRef$current.getBoundingClientRect();
    if (targetRect) {
      setBounds({
        left: -(targetRect == null ? void 0 : targetRect.left) + (uiData == null ? void 0 : uiData.x),
        right: clientWidth - ((targetRect == null ? void 0 : targetRect.right) - (uiData == null ? void 0 : uiData.x)),
        top: -(targetRect == null ? void 0 : targetRect.top) + (uiData == null ? void 0 : uiData.y),
        bottom: clientHeight - ((targetRect == null ? void 0 : targetRect.bottom) - (uiData == null ? void 0 : uiData.y)) });

    }
  };
  const ModalTitle = () => draggable ? (0,emotion_react_browser_esm.jsx)("div", { className: "draggable-trigger", onMouseOver: () => dragDisabled && setDragDisabled(false), onMouseOut: () => !dragDisabled && setDragDisabled(true) },
  title) :
  (0,emotion_react_browser_esm.jsx)(react.Fragment, null, title);
  return (0,emotion_react_browser_esm.jsx)(StyledModal, extends_default()({ centered: !!centered, onOk: onHandledPrimaryAction, onCancel: onHide, width: modalWidth, maxWidth: maxWidth, responsive: responsive, visible: show, title: (0,emotion_react_browser_esm.jsx)(ModalTitle, null), closeIcon: (0,emotion_react_browser_esm.jsx)("span", { className: "close", "aria-hidden": "true" }, "\xD7"),

    footer: !hideFooter ? modalFooter : null, hideFooter: hideFooter, wrapProps: { 'data-test': `${name || title}-modal`, ...wrapProps }, modalRender: (modal) => resizable || draggable ? (0,emotion_react_browser_esm.jsx)((cjs_default()), extends_default()({ disabled: !draggable || dragDisabled, bounds: bounds, onStart: (event, uiData) => onDragStart(event, uiData) }, draggableConfig),
    resizable ? (0,emotion_react_browser_esm.jsx)(lib/* Resizable */.e, extends_default()({ className: "resizable" }, resizableConfig),
    (0,emotion_react_browser_esm.jsx)("div", { className: "resizable-wrapper", ref: draggableRef },
    modal)) :

    (0,emotion_react_browser_esm.jsx)("div", { ref: draggableRef }, modal)) :
    modal, mask: shouldShowMask, draggable: draggable, resizable: resizable, destroyOnClose: destroyOnClose || resizable || draggable }, rest),
  children);

};
CustomModal.displayName = 'Modal';
// TODO: in another PR, rename this to CompatabilityModal
// and demote it as the default export.
// We should start using AntD component interfaces going forward.
const Modal = Object.assign(CustomModal, {
  error: components/* Modal.error */.u_.error,
  warning: components/* Modal.warning */.u_.warning,
  confirm: components/* Modal.confirm */.u_.confirm,
  useModal: components/* Modal.useModal */.u_.useModal });

/* harmony default export */ const Modal_Modal = (Modal);
;// CONCATENATED MODULE: ./src/components/Modal/index.ts
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

/***/ 84153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ setupApp)
});

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(19755);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./src/utils/getClientErrorObject.ts
var getClientErrorObject = __webpack_require__(98286);
// EXTERNAL MODULE: ./src/components/ErrorMessage/getErrorMessageComponentRegistry.ts
var getErrorMessageComponentRegistry = __webpack_require__(92869);
// EXTERNAL MODULE: ./src/components/ErrorMessage/types.ts
var types = __webpack_require__(67663);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/components/ErrorMessage/IssueCode.tsx
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

function IssueCode({ code, message }) {
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  message, ' ',
  (0,emotion_react_browser_esm.jsx)("a", { href: `https://superset.apache.org/docs/miscellaneous/issue-codes#issue-${code}`, rel: "noopener noreferrer", target: "_blank" },
  (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-external-link" })));


}
// EXTERNAL MODULE: ./src/components/ErrorMessage/ErrorAlert.tsx
var ErrorAlert = __webpack_require__(91178);
;// CONCATENATED MODULE: ./src/components/ErrorMessage/TimeoutErrorMessage.tsx
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




function TimeoutErrorMessage({ error, source }) {
  const { extra, level } = error;
  const isVisualization = ['dashboard', 'explore'].includes(source);
  const subtitle = isVisualization ?
  (0,TranslatorSingleton.tn)('We’re having trouble loading this visualization. Queries are set to timeout after %s second.', 'We’re having trouble loading this visualization. Queries are set to timeout after %s seconds.', extra.timeout, extra.timeout) :
  (0,TranslatorSingleton.tn)('We’re having trouble loading these results. Queries are set to timeout after %s second.', 'We’re having trouble loading these results. Queries are set to timeout after %s seconds.', extra.timeout, extra.timeout);
  const body = (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)("p", null,
  (0,TranslatorSingleton.t)('This may be triggered by:'),
  (0,emotion_react_browser_esm.jsx)("br", null),
  extra.issue_codes.
  map((issueCode) => (0,emotion_react_browser_esm.jsx)(IssueCode, issueCode)).
  reduce((prev, curr) => [prev, (0,emotion_react_browser_esm.jsx)("br", null), curr])),

  isVisualization && extra.owners && (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)("br", null),
  (0,emotion_react_browser_esm.jsx)("p", null,
  (0,TranslatorSingleton.tn)('Please reach out to the Chart Owner for assistance.', 'Please reach out to the Chart Owners for assistance.', extra.owners.length)),

  (0,emotion_react_browser_esm.jsx)("p", null,
  (0,TranslatorSingleton.tn)('Chart Owner: %s', 'Chart Owners: %s', extra.owners.length, extra.owners.join(', ')))));



  const copyText = `${subtitle}
${(0,TranslatorSingleton.t)('This may be triggered by:')}
${extra.issue_codes.map((issueCode) => issueCode.message).join('\n')}`;
  return (0,emotion_react_browser_esm.jsx)(ErrorAlert/* default */.Z, { title: (0,TranslatorSingleton.t)('Timeout error'), subtitle: subtitle, level: level, source: source, copyText: copyText, body: body });
}
/* harmony default export */ const ErrorMessage_TimeoutErrorMessage = (TimeoutErrorMessage);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
;// CONCATENATED MODULE: ./src/components/ErrorMessage/DatabaseErrorMessage.tsx
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




function DatabaseErrorMessage({ error, source = 'dashboard', subtitle }) {
  const { extra, level, message } = error;
  const isVisualization = ['dashboard', 'explore'].includes(source);
  const body = extra && (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)("p", null,
  (0,TranslatorSingleton.t)('This may be triggered by:'),
  (0,emotion_react_browser_esm.jsx)("br", null),
  extra.issue_codes.
  map((issueCode) => (0,emotion_react_browser_esm.jsx)(IssueCode, extends_default()({}, issueCode, { key: issueCode.code }))).
  reduce((prev, curr) => [prev, (0,emotion_react_browser_esm.jsx)("br", null), curr])),

  isVisualization && extra.owners && (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)("br", null),
  (0,emotion_react_browser_esm.jsx)("p", null,
  (0,TranslatorSingleton.tn)('Please reach out to the Chart Owner for assistance.', 'Please reach out to the Chart Owners for assistance.', extra.owners.length)),

  (0,emotion_react_browser_esm.jsx)("p", null,
  (0,TranslatorSingleton.tn)('Chart Owner: %s', 'Chart Owners: %s', extra.owners.length, extra.owners.join(', ')))));



  const copyText = extra && extra.issue_codes ?
  `${message}
${(0,TranslatorSingleton.t)('This may be triggered by:')}
${extra.issue_codes.map((issueCode) => issueCode.message).join('\n')}` :
  message;
  return (0,emotion_react_browser_esm.jsx)(ErrorAlert/* default */.Z, { title: (0,TranslatorSingleton.t)('%s Error', extra && extra.engine_name || (0,TranslatorSingleton.t)('DB engine')), subtitle: subtitle, level: level, source: source, copyText: copyText, body: body });
}
/* harmony default export */ const ErrorMessage_DatabaseErrorMessage = (DatabaseErrorMessage);
// EXTERNAL MODULE: ./node_modules/js-levenshtein/index.js
var js_levenshtein = __webpack_require__(39991);
var js_levenshtein_default = /*#__PURE__*/__webpack_require__.n(js_levenshtein);
;// CONCATENATED MODULE: ./src/components/ErrorMessage/ParameterErrorMessage.tsx
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





const maxDistanceForSuggestion = 2;
const findMatches = (undefinedParameters, templateKeys) => {
  const matches = {};
  undefinedParameters.forEach((undefinedParameter) => {
    templateKeys.forEach((templateKey) => {
      if (js_levenshtein_default()(undefinedParameter, templateKey) <= maxDistanceForSuggestion) {
        if (!matches[undefinedParameter]) {
          matches[undefinedParameter] = [];
        }
        matches[undefinedParameter].push(`"${templateKey}"`);
      }
    });
  });
  return matches;
};
function ParameterErrorMessage({ error, source = 'sqllab', subtitle }) {
  const { extra = { issue_codes: [] }, level, message } = error;
  const triggerMessage = (0,TranslatorSingleton.tn)('This was triggered by:', 'This may be triggered by:', extra.issue_codes.length);
  const matches = findMatches(extra.undefined_parameters || [], Object.keys(extra.template_parameters || {}));
  const body = (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)("p", null,
  Object.keys(matches).length > 0 && (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)("p", null, (0,TranslatorSingleton.t)('Did you mean:')),
  (0,emotion_react_browser_esm.jsx)("ul", null,
  Object.entries(matches).map(([undefinedParameter, templateKeys]) => (0,emotion_react_browser_esm.jsx)("li", null,
  (0,TranslatorSingleton.tn)('%(suggestion)s instead of "%(undefinedParameter)s?"', '%(firstSuggestions)s or %(lastSuggestion)s instead of "%(undefinedParameter)s"?', templateKeys.length, {
    suggestion: templateKeys.join(', '),
    firstSuggestions: templateKeys.slice(0, -1).join(', '),
    lastSuggestion: templateKeys[templateKeys.length - 1],
    undefinedParameter })))),



  (0,emotion_react_browser_esm.jsx)("br", null)),

  triggerMessage,
  (0,emotion_react_browser_esm.jsx)("br", null),
  extra.issue_codes.length > 0 &&
  extra.issue_codes.
  map((issueCode) => (0,emotion_react_browser_esm.jsx)(IssueCode, issueCode)).
  reduce((prev, curr) => [prev, (0,emotion_react_browser_esm.jsx)("br", null), curr])));


  const copyText = `${message}
${triggerMessage}
${extra.issue_codes.map((issueCode) => issueCode.message).join('\n')}`;
  return (0,emotion_react_browser_esm.jsx)(ErrorAlert/* default */.Z, { title: (0,TranslatorSingleton.t)('Parameter error'), subtitle: subtitle, level: level, source: source, copyText: copyText, body: body });
}
/* harmony default export */ const ErrorMessage_ParameterErrorMessage = (ParameterErrorMessage);
;// CONCATENATED MODULE: ./src/setup/setupErrorMessagesExtra.ts
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
// For individual deployments to add custom error messages
function setupErrorMessagesExtra() {}
;// CONCATENATED MODULE: ./src/setup/setupErrorMessages.ts
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






function setupErrorMessages() {
  const errorMessageComponentRegistry = (0,getErrorMessageComponentRegistry/* default */.Z)();
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.FRONTEND_TIMEOUT_ERROR */.C.FRONTEND_TIMEOUT_ERROR, ErrorMessage_TimeoutErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.BACKEND_TIMEOUT_ERROR */.C.BACKEND_TIMEOUT_ERROR, ErrorMessage_TimeoutErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.DATABASE_NOT_FOUND_ERROR */.C.DATABASE_NOT_FOUND_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.GENERIC_DB_ENGINE_ERROR */.C.GENERIC_DB_ENGINE_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.GENERIC_BACKEND_ERROR */.C.GENERIC_BACKEND_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.COLUMN_DOES_NOT_EXIST_ERROR */.C.COLUMN_DOES_NOT_EXIST_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.TABLE_DOES_NOT_EXIST_ERROR */.C.TABLE_DOES_NOT_EXIST_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.MISSING_TEMPLATE_PARAMS_ERROR */.C.MISSING_TEMPLATE_PARAMS_ERROR, ErrorMessage_ParameterErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.INVALID_TEMPLATE_PARAMS_ERROR */.C.INVALID_TEMPLATE_PARAMS_ERROR, ErrorMessage_ParameterErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.RESULTS_BACKEND_NOT_CONFIGURED_ERROR */.C.RESULTS_BACKEND_NOT_CONFIGURED_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.DML_NOT_ALLOWED_ERROR */.C.DML_NOT_ALLOWED_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.INVALID_CTAS_QUERY_ERROR */.C.INVALID_CTAS_QUERY_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.INVALID_CVAS_QUERY_ERROR */.C.INVALID_CVAS_QUERY_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.QUERY_SECURITY_ACCESS_ERROR */.C.QUERY_SECURITY_ACCESS_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.CONNECTION_INVALID_HOSTNAME_ERROR */.C.CONNECTION_INVALID_HOSTNAME_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.RESULTS_BACKEND_ERROR */.C.RESULTS_BACKEND_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.ASYNC_WORKERS_ERROR */.C.ASYNC_WORKERS_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.SQLLAB_TIMEOUT_ERROR */.C.SQLLAB_TIMEOUT_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.CONNECTION_PORT_CLOSED_ERROR */.C.CONNECTION_PORT_CLOSED_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.CONNECTION_HOST_DOWN_ERROR */.C.CONNECTION_HOST_DOWN_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.CONNECTION_INVALID_USERNAME_ERROR */.C.CONNECTION_INVALID_USERNAME_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.CONNECTION_INVALID_PASSWORD_ERROR */.C.CONNECTION_INVALID_PASSWORD_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.CONNECTION_ACCESS_DENIED_ERROR */.C.CONNECTION_ACCESS_DENIED_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.CONNECTION_UNKNOWN_DATABASE_ERROR */.C.CONNECTION_UNKNOWN_DATABASE_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.SCHEMA_DOES_NOT_EXIST_ERROR */.C.SCHEMA_DOES_NOT_EXIST_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.OBJECT_DOES_NOT_EXIST_ERROR */.C.OBJECT_DOES_NOT_EXIST_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.SYNTAX_ERROR */.C.SYNTAX_ERROR, ErrorMessage_DatabaseErrorMessage);
  errorMessageComponentRegistry.registerValue(types/* ErrorTypeEnum.CONNECTION_DATABASE_PERMISSIONS_ERROR */.C.CONNECTION_DATABASE_PERMISSIONS_ERROR, ErrorMessage_DatabaseErrorMessage);
  setupErrorMessagesExtra();
}
;// CONCATENATED MODULE: ./src/setup/setupApp.ts
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
/* eslint global-require: 0 */




function showApiMessage(resp) {
  const template = '<div class="alert"> ' +
  '<button type="button" class="close" ' +
  'data-dismiss="alert">\xD7</button> </div>';
  const severity = resp.severity || 'info';
  jquery_default()(template).
  addClass(`alert-${severity}`).
  append(resp.message || '').
  appendTo(jquery_default()('#alert-container'));
}
function toggleCheckbox(apiUrlPrefix, selector) {
  SupersetClient/* default.get */.Z.get({
    endpoint: apiUrlPrefix + jquery_default()(selector)[0].checked }).

  then(() => undefined).
  catch((response) => (0,getClientErrorObject/* getClientErrorObject */.O)(response).then((parsedResp) => {
    if (parsedResp && parsedResp.message) {
      showApiMessage(parsedResp);
    }
  }));
}
function setupApp() {
  jquery_default()(document).ready(function () {
    jquery_default()(':checkbox[data-checkbox-api-prefix]').change(function () {
      const $this = jquery_default()(this);
      const prefix = $this.data('checkbox-api-prefix');
      const id = $this.attr('id');
      toggleCheckbox(prefix, `#${id}`);
    });
    // for language picker dropdown
    jquery_default()('#language-picker a').click(function (ev) {
      ev.preventDefault();
      SupersetClient/* default.get */.Z.get({
        url: ev.currentTarget.href,
        parseMethod: null }).
      then(() => {
        window.location.reload();
      });
    });
  });
  // A set of hacks to allow apps to run within a FAB template
  // this allows for the server side generated menus to function
  window.$ = (jquery_default());
  window.jQuery = (jquery_default());
  __webpack_require__(57915);
  // setup appwide custom error messages
  setupErrorMessages();
}

/***/ }),

/***/ 10222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
const copyTextToClipboard = async (text) => new Promise((resolve, reject) => {
  const selection = document.getSelection();
  if (selection) {
    selection.removeAllRanges();
    const range = document.createRange();
    const span = document.createElement('span');
    span.textContent = text;
    span.style.position = 'fixed';
    span.style.top = '0';
    span.style.clip = 'rect(0, 0, 0, 0)';
    span.style.whiteSpace = 'pre';
    document.body.appendChild(span);
    range.selectNode(span);
    selection.addRange(range);
    try {
      if (!document.execCommand('copy')) {
        reject();
      }
    }
    catch (err) {
      reject();
    }
    document.body.removeChild(span);
    if (selection.removeRange) {
      selection.removeRange(range);
    } else
    {
      selection.removeAllRanges();
    }
  }
  resolve();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyTextToClipboard);

/***/ })

}]);