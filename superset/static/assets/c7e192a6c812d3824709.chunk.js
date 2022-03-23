"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[4502],{

/***/ 27989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60650);
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35932);
/* harmony import */ var src_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74069);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82191);
/* harmony import */ var src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34858);
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






const HelperMessage = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  display: block;
  color: ${({ theme }) => theme.colors.grayscale.base};
  font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
`;
const StyledInputContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  padding-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  padding-top: ${({ theme }) => theme.gridUnit * 2}px;

  & > div {
    margin: ${({ theme }) => theme.gridUnit}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${({ theme }) => theme.gridUnit * 2}px;
    }

    i {
      margin: 0 ${({ theme }) => theme.gridUnit}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({ theme }) => theme.gridUnit * 1.5}px
      ${({ theme }) => theme.gridUnit * 2}px;
    border-style: none;
    border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    border-radius: ${({ theme }) => theme.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${({ theme }) => theme.gridUnit * 3}px;
    }
  }
`;
const ImportModelsModal = ({ resourceName, resourceLabel, passwordsNeededMessage, confirmOverwriteMessage, addDangerToast, addSuccessToast, onModelImport, show, onHide, passwordFields = [], setPasswordFields = () => {} }) => {
  const [isHidden, setIsHidden] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [passwords, setPasswords] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [needsOverwriteConfirm, setNeedsOverwriteConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [confirmedOverwrite, setConfirmedOverwrite] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [fileList, setFileList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [importingModel, setImportingModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const clearModal = () => {
    setFileList([]);
    setPasswordFields([]);
    setPasswords({});
    setNeedsOverwriteConfirm(false);
    setConfirmedOverwrite(false);
    setImportingModel(false);
  };
  const handleErrorMsg = (msg) => {
    clearModal();
    addDangerToast(msg);
  };
  const { state: { alreadyExists, passwordsNeeded }, importResource } = (0,src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useImportResource */ .PW)(resourceName, resourceLabel, handleErrorMsg);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setPasswordFields(passwordsNeeded);
    if (passwordsNeeded.length > 0) {
      setImportingModel(false);
    }
  }, [passwordsNeeded, setPasswordFields]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setNeedsOverwriteConfirm(alreadyExists.length > 0);
    if (alreadyExists.length > 0) {
      setImportingModel(false);
    }
  }, [alreadyExists, setNeedsOverwriteConfirm]);
  // Functions
  const hide = () => {
    setIsHidden(true);
    onHide();
    clearModal();
  };
  const onUpload = () => {var _fileList$;
    if (!(((_fileList$ = fileList[0]) == null ? void 0 : _fileList$.originFileObj) instanceof File)) {
      return;
    }
    setImportingModel(true);
    importResource(fileList[0].originFileObj, passwords, confirmedOverwrite).then((result) => {
      if (result) {
        addSuccessToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('The import was successful'));
        clearModal();
        onModelImport();
      }
    });
  };
  const changeFile = (info) => {
    setFileList([
    {
      ...info.file,
      status: 'done' }]);


  };
  const removeFile = (removedFile) => {
    setFileList(fileList.filter((file) => file.uid !== removedFile.uid));
    return false;
  };
  const confirmOverwrite = (event) => {var _event$currentTarget$, _event$currentTarget;
    const targetValue = (_event$currentTarget$ = (_event$currentTarget = event.currentTarget) == null ? void 0 : _event$currentTarget.value) != null ? _event$currentTarget$ : '';
    setConfirmedOverwrite(targetValue.toUpperCase() === (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('OVERWRITE'));
  };
  const renderPasswordFields = () => {
    if (passwordFields.length === 0) {
      return null;
    }
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", null, "Database passwords"),
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(HelperMessage, null, passwordsNeededMessage),
    passwordFields.map((fileName) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(StyledInputContainer, { key: `password-for-${fileName}` },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "control-label" },
    fileName,
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", { className: "required" }, "*")),

    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", { name: `password-${fileName}`, autoComplete: `password-${fileName}`, type: "password", value: passwords[fileName], onChange: (event) => setPasswords({ ...passwords, [fileName]: event.target.value }) }))));


  };
  const renderOverwriteConfirmation = () => {
    if (!needsOverwriteConfirm) {
      return null;
    }
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(StyledInputContainer, null,
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "confirm-overwrite" }, confirmOverwriteMessage),
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "control-label" },
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('Type "%s" to confirm', (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('OVERWRITE'))),

    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", { id: "overwrite", type: "text", onChange: confirmOverwrite })));


  };
  // Show/hide
  if (isHidden && show) {
    setIsHidden(false);
  }
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Modal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { name: "model", className: "import-model-modal", disablePrimaryButton: fileList.length === 0 ||
    needsOverwriteConfirm && !confirmedOverwrite ||
    importingModel, onHandledPrimaryAction: onUpload, onHide: hide, primaryButtonName: needsOverwriteConfirm ? (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('Overwrite') : (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('Import'), primaryButtonType: needsOverwriteConfirm ? 'danger' : 'primary', width: "750px", show: show, title: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('Import %s', resourceLabel)) },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(StyledInputContainer, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_3__/* .Upload */ .gq, { name: "modelFile", id: "modelFile", accept: ".yaml,.json,.yml,.zip", fileList: fileList, onChange: changeFile, onRemove: removeFile
    // upload is handled by hook
    , customRequest: () => {} },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, { loading: importingModel }, "Select file"))),


  renderPasswordFields(),
  renderOverwriteConfirmation());

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportModelsModal);

/***/ }),

/***/ 95413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ commonMenuData)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60650);
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

const commonMenuData = {
  name: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Data'),
  tabs: [
  {
    name: 'Databases',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Databases'),
    url: '/databaseview/list/',
    usesRouter: true },

  {
    name: 'Datasets',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Datasets'),
    url: '/tablemodelview/list/',
    usesRouter: true },

  {
    name: 'Saved queries',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Saved queries'),
    url: '/savedqueryview/list/',
    usesRouter: true },

  {
    name: 'Query history',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Query history'),
    url: '/superset/sqllab/history/',
    usesRouter: true }] };

/***/ }),

/***/ 64022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ database_DatabaseList)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(38703);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./src/views/CRUD/hooks.ts
var hooks = __webpack_require__(34858);
// EXTERNAL MODULE: ./src/views/CRUD/utils.tsx
var utils = __webpack_require__(40768);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/components/Menu/SubMenu.tsx
var SubMenu = __webpack_require__(62753);
// EXTERNAL MODULE: ./src/components/DeleteModal/index.tsx
var DeleteModal = __webpack_require__(17198);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/components/ListView/index.ts + 11 modules
var ListView = __webpack_require__(9678);
// EXTERNAL MODULE: ./src/views/CRUD/data/common.ts
var common = __webpack_require__(95413);
// EXTERNAL MODULE: ./src/components/ImportModal/index.tsx
var ImportModal = __webpack_require__(27989);
// EXTERNAL MODULE: ./src/utils/export.ts
var utils_export = __webpack_require__(32228);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/url-search-params.js
var url_search_params = __webpack_require__(94435);
var url_search_params_default = /*#__PURE__*/__webpack_require__.n(url_search_params);
// EXTERNAL MODULE: ./src/components/Tabs/index.ts
var Tabs = __webpack_require__(40637);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var components = __webpack_require__(82191);
// EXTERNAL MODULE: ./src/components/Alert/index.tsx
var Alert = __webpack_require__(29487);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
;// CONCATENATED MODULE: ./node_modules/react-lines-ellipsis/lib/index.modern.js


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const canvasStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: 0,
  overflow: 'hidden',
  'padding-top': 0,
  'padding-bottom': 0,
  border: 'none'
};
const mirrorProps = ['box-sizing', 'width', 'font-size', 'font-weight', 'font-family', 'font-style', 'letter-spacing', 'text-indent', 'white-space', 'word-break', 'overflow-wrap', 'padding-left', 'padding-right'];

function omit(obj, omittedKeys) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  const ret = {};
  Object.keys(obj).forEach(key => {
    if (omittedKeys.indexOf(key) > -1) {
      return;
    }

    ret[key] = obj[key];
  });
  return ret;
}

function prevSibling(node, count) {
  while (node && count--) {
    node = node.previousElementSibling;
  }

  return node;
}

const defaultProps = {
  basedOn: undefined,
  className: '',
  component: 'div',
  ellipsis: '…',
  // &hellip;
  maxLine: 1,

  onReflow() {},

  text: '',
  trimRight: true,
  winWidth: undefined // for the HOC

};
const usedProps = Object.keys(defaultProps);
/**
 * props.text {String} the text you want to clamp
 * props.maxLine {Number|String} max lines allowed
 * props.ellipsis {String} the ellipsis indicator
 * props.trimRight {Boolean} should we trimRight the clamped text?
 * props.basedOn {String} letters|words
 * props.className {String}
 */

class LinesEllipsis extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      clamped: false
    };
    this.units = [];
    this.maxLine = 0;
    this.canvas = null;
  }

  componentDidMount() {
    this.initCanvas();
    this.reflow(this.props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.winWidth !== this.props.winWidth) {
      this.copyStyleToCanvas();
    }

    if (this.props !== prevProps) {
      this.reflow(this.props);
    }
  }

  componentWillUnmount() {
    this.canvas.parentNode.removeChild(this.canvas);
  }

  setState(state, callback) {
    if (typeof state.clamped !== 'undefined') {
      this.clamped = state.clamped;
    }

    return super.setState(state, callback);
  }

  initCanvas() {
    if (this.canvas) return;
    const canvas = this.canvas = document.createElement('div');
    canvas.className = `LinesEllipsis-canvas ${this.props.className}`;
    canvas.setAttribute('aria-hidden', 'true');
    this.copyStyleToCanvas();
    Object.keys(canvasStyle).forEach(key => {
      canvas.style[key] = canvasStyle[key];
    });
    document.body.appendChild(canvas);
  }

  copyStyleToCanvas() {
    const targetStyle = window.getComputedStyle(this.target);
    mirrorProps.forEach(key => {
      this.canvas.style[key] = targetStyle[key];
    });
  }

  reflow(props) {
    /* eslint-disable no-control-regex */
    const basedOn = props.basedOn || (/^[\x00-\x7F]+$/.test(props.text) ? 'words' : 'letters');

    switch (basedOn) {
      case 'words':
        this.units = props.text.split(/\b|(?=\W)/);
        break;

      case 'letters':
        this.units = Array.from(props.text);
        break;

      default:
        throw new Error(`Unsupported options basedOn: ${basedOn}`);
    }

    this.maxLine = +props.maxLine || 1;
    this.canvas.innerHTML = this.units.map(c => {
      return `<span class='LinesEllipsis-unit'>${c}</span>`;
    }).join('');
    const ellipsisIndex = this.putEllipsis(this.calcIndexes());
    const clamped = ellipsisIndex > -1;
    const newState = {
      clamped,
      text: clamped ? this.units.slice(0, ellipsisIndex).join('') : props.text
    };
    this.setState(newState, props.onReflow.bind(this, newState));
  }

  calcIndexes() {
    const indexes = [0];
    let elt = this.canvas.firstElementChild;
    if (!elt) return indexes;
    let index = 0;
    let line = 1;
    let offsetTop = elt.offsetTop;

    while (elt = elt.nextElementSibling) {
      if (elt.offsetTop > offsetTop) {
        line++;
        indexes.push(index);
        offsetTop = elt.offsetTop;
      }

      index++;

      if (line > this.maxLine) {
        break;
      }
    }

    return indexes;
  }

  putEllipsis(indexes) {
    if (indexes.length <= this.maxLine) return -1;
    const lastIndex = indexes[this.maxLine];
    const units = this.units.slice(0, lastIndex);
    const maxOffsetTop = this.canvas.children[lastIndex].offsetTop;
    this.canvas.innerHTML = units.map((c, i) => {
      return `<span class='LinesEllipsis-unit'>${c}</span>`;
    }).join('') + `<wbr><span class='LinesEllipsis-ellipsis'>${this.props.ellipsis}</span>`;
    const ndEllipsis = this.canvas.lastElementChild;
    let ndPrevUnit = prevSibling(ndEllipsis, 2);

    while (ndPrevUnit && (ndEllipsis.offsetTop > maxOffsetTop || // IE & Edge: doesn't support <wbr>
    ndEllipsis.offsetHeight > ndPrevUnit.offsetHeight || ndEllipsis.offsetTop > ndPrevUnit.offsetTop)) {
      this.canvas.removeChild(ndPrevUnit);
      ndPrevUnit = prevSibling(ndEllipsis, 2);
      units.pop();
    }

    return units.length;
  } // expose


  isClamped() {
    return this.clamped; // do not use state.clamped. #27
  }

  render() {
    const {
      text,
      clamped
    } = this.state;

    const _this$props = this.props,
          {
      component: Component,
      ellipsis,
      trimRight,
      className
    } = _this$props,
          rest = _objectWithoutPropertiesLoose(_this$props, ["component", "ellipsis", "trimRight", "className"]);

    return /*#__PURE__*/react.createElement(Component, _extends({
      className: `LinesEllipsis ${clamped ? 'LinesEllipsis--clamped' : ''} ${className}`,
      ref: node => this.target = node
    }, omit(rest, usedProps)), clamped && trimRight ? text.replace(/[\s\uFEFF\xA0]+$/, '') : text, /*#__PURE__*/react.createElement("wbr", null), clamped && /*#__PURE__*/react.createElement("span", {
      className: "LinesEllipsis-ellipsis"
    }, ellipsis));
  }

}

LinesEllipsis.defaultProps = defaultProps;

/* harmony default export */ const index_modern = (LinesEllipsis);

// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/components/IconButton/index.tsx
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





const StyledButton = (0,style/* styled */.iK)(Button/* default */.Z)`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
`;
const StyledImage = style/* styled.div */.iK.div`
  padding: ${({ theme }) => theme.gridUnit * 4}px;
  height: ${({ theme }) => theme.gridUnit * 18}px;
  margin: ${({ theme }) => theme.gridUnit * 3}px 0;

  .default-db-icon {
    font-size: 36px;
    color: ${({ theme }) => theme.colors.grayscale.base};
    margin-right: 0;
    span:first-of-type {
      margin-right: 0;
    }
  }

  &:first-of-type {
    margin-right: 0;
  }

  img {
    width: ${({ theme }) => theme.gridUnit * 10}px;
    height: ${({ theme }) => theme.gridUnit * 10}px;
    margin: 0;
    &:first-of-type {
      margin-right: 0;
    }
  }
  svg {
    &:first-of-type {
      margin-right: 0;
    }
  }
`;
const StyledInner = style/* styled.div */.iK.div`
  max-height: calc(1.5em * 2);
  white-space: break-spaces;

  &:first-of-type {
    margin-right: 0;
  }

  .LinesEllipsis {
    &:first-of-type {
      margin-right: 0;
    }
  }
`;
const StyledBottom = style/* styled.div */.iK.div`
  padding: ${({ theme }) => theme.gridUnit * 4}px 0;
  border-radius: 0 0 ${({ theme }) => theme.borderRadius}px
    ${({ theme }) => theme.borderRadius}px;
  background-color: ${({ theme }) => theme.colors.grayscale.light4};
  width: 100%;
  line-height: 1.5em;
  overflow: hidden;
  white-space: no-wrap;
  text-overflow: ellipsis;

  &:first-of-type {
    margin-right: 0;
  }
`;
const IconButton = (0,style/* styled */.iK)(({ icon, altText, buttonText, ...props }) => (0,emotion_react_browser_esm.jsx)(StyledButton, props,
(0,emotion_react_browser_esm.jsx)(StyledImage, null,
icon && (0,emotion_react_browser_esm.jsx)("img", { src: icon, alt: altText }),
!icon && (0,emotion_react_browser_esm.jsx)(Icons/* default.DatabaseOutlined */.Z.DatabaseOutlined, { className: "default-db-icon", "aria-label": "default-icon" })),


(0,emotion_react_browser_esm.jsx)(StyledBottom, null,
(0,emotion_react_browser_esm.jsx)(StyledInner, null,
(0,emotion_react_browser_esm.jsx)(index_modern, { text: buttonText, maxLine: "2", basedOn: "words", trimRight: true })))))


`
  text-transform: none;
  background-color: ${({ theme }) => theme.colors.grayscale.light5};
  font-weight: ${({ theme }) => theme.typography.weights.normal};
  color: ${({ theme }) => theme.colors.grayscale.dark2};
  border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  margin: 0;
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.grayscale.light5};
    color: ${({ theme }) => theme.colors.grayscale.dark2};
    border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    box-shadow: 4px 4px 20px ${({ theme }) => theme.colors.grayscale.light2};
  }
`;
/* harmony default export */ const components_IconButton = (IconButton);
// EXTERNAL MODULE: ./src/components/InfoTooltip/index.tsx
var InfoTooltip = __webpack_require__(8272);
// EXTERNAL MODULE: ./src/views/CRUD/data/database/state.ts
var state = __webpack_require__(1483);
;// CONCATENATED MODULE: ./src/views/CRUD/data/database/types.ts
// the values should align with the database
// model enum in superset/superset/models/core.py
var CONFIGURATION_METHOD;
(function (CONFIGURATION_METHOD) {
  CONFIGURATION_METHOD["SQLALCHEMY_URI"] = "sqlalchemy_form";
  CONFIGURATION_METHOD["DYNAMIC_FORM"] = "dynamic_form";
})(CONFIGURATION_METHOD || (CONFIGURATION_METHOD = {}));
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/components/IndeterminateCheckbox/index.tsx
var IndeterminateCheckbox = __webpack_require__(49576);
// EXTERNAL MODULE: ./src/components/Collapse/index.tsx
var Collapse = __webpack_require__(43700);
// EXTERNAL MODULE: ./src/components/AsyncAceEditor/index.tsx
var AsyncAceEditor = __webpack_require__(94670);
;// CONCATENATED MODULE: ./src/views/CRUD/data/database/DatabaseModal/styles.ts
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



const CTAS_CVAS_SCHEMA_FORM_HEIGHT = 102;
const EXPOSE_IN_SQLLAB_FORM_HEIGHT = CTAS_CVAS_SCHEMA_FORM_HEIGHT + 153;
const EXPOSE_ALL_FORM_HEIGHT = EXPOSE_IN_SQLLAB_FORM_HEIGHT + 102;
const anticonHeight = 12;
const no_margin_bottom = emotion_react_browser_esm.css`
  margin-bottom: 0;
`;
const labelMarginBotton = (theme) => emotion_react_browser_esm.css`
  margin-bottom: ${theme.gridUnit * 2}px;
`;
const marginBottom = (theme) => css`
  margin-bottom: ${theme.gridUnit * 4}px;
`;
const StyledFormHeader = style/* styled.header */.iK.header`
  border-bottom: ${({ theme }) => `${theme.gridUnit * 0.25}px solid
    ${theme.colors.grayscale.light2};`}
  padding: ${({ theme }) => theme.gridUnit * 2}px
    ${({ theme }) => theme.gridUnit * 4}px;
  line-height: ${({ theme }) => theme.gridUnit * 6}px;

  .helper-top {
    padding-bottom: 0;
    color: ${({ theme }) => theme.colors.grayscale.base};
    font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
    margin: 0;
  }

  .helper-bottom {
    padding-top: 0;
    color: ${({ theme }) => theme.colors.grayscale.base};
    font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
    margin: 0;
  }

  h4 {
    color: ${({ theme }) => theme.colors.grayscale.dark2};
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.sizes.l}px;
    margin: 0;
    padding: 0;
    line-height: ${({ theme }) => theme.gridUnit * 8}px;
  }

  .select-db {
    padding-bottom: ${({ theme }) => theme.gridUnit * 2}px;
    .helper {
      margin: 0;
    }

    h4 {
      margin: 0 0 ${({ theme }) => theme.gridUnit * 4}px;
    }
  }
`;
const antdCollapseStyles = (theme) => emotion_react_browser_esm.css`
  .ant-collapse-header {
    padding-top: ${theme.gridUnit * 3.5}px;
    padding-bottom: ${theme.gridUnit * 2.5}px;

    .anticon.ant-collapse-arrow {
      top: calc(50% - ${anticonHeight / 2}px);
    }
    .helper {
      color: ${theme.colors.grayscale.base};
    }
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: ${theme.gridUnit}px;
  }
  p.helper {
    margin-bottom: 0;
    padding: 0;
  }
`;
const antDTabsStyles = emotion_react_browser_esm.css`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`;
const antDModalNoPaddingStyles = emotion_react_browser_esm.css`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`;
const infoTooltip = (theme) => emotion_react_browser_esm.css`
  margin-bottom: ${theme.gridUnit * 5}px;
  svg {
    margin-bottom: ${theme.gridUnit * 0.25}px;
  }
`;
const toggleStyle = (theme) => emotion_react_browser_esm.css`
  padding-left: ${theme.gridUnit * 2}px;
`;
const formScrollableStyles = (theme) => emotion_react_browser_esm.css`
  padding: ${theme.gridUnit * 4}px ${theme.gridUnit * 4}px 0;
`;
const antDModalStyles = (theme) => emotion_react_browser_esm.css`
  .ant-select-dropdown {
    height: ${theme.gridUnit * 40}px;
  }

  .ant-modal-header {
    padding: ${theme.gridUnit * 4.5}px ${theme.gridUnit * 4}px
      ${theme.gridUnit * 4}px;
  }

  .ant-modal-close-x .close {
    color: ${theme.colors.grayscale.dark1};
    opacity: 1;
  }

  .ant-modal-title > h4 {
    font-weight: bold;
  }

  .ant-modal-body {
    height: ${theme.gridUnit * 180.5}px;
  }

  .ant-modal-footer {
    height: ${theme.gridUnit * 16.25}px;
  }
`;
const antDAlertStyles = (theme) => emotion_react_browser_esm.css`
  border: 1px solid ${theme.colors.info.base};
  padding: ${theme.gridUnit * 4}px;
  margin: ${theme.gridUnit * 4}px 0;

  .ant-alert-message {
    color: ${theme.colors.info.dark2};
    font-size: ${theme.typography.sizes.s + 1}px;
    font-weight: bold;
  }

  .ant-alert-description {
    color: ${theme.colors.info.dark2};
    font-size: ${theme.typography.sizes.s + 1}px;
    line-height: ${theme.gridUnit * 4}px;

    a {
      text-decoration: underline;
    }

    .ant-alert-icon {
      margin-right: ${theme.gridUnit * 2.5}px;
      font-size: ${theme.typography.sizes.l + 1}px;
      position: relative;
      top: ${theme.gridUnit / 4}px;
    }
  }
`;
const StyledAlertMargin = style/* styled.div */.iK.div`
  margin: 0 ${({ theme }) => theme.gridUnit * 4}px -${({ theme }) => theme.gridUnit * 4}px;
`;
const antDErrorAlertStyles = (theme) => emotion_react_browser_esm.css`
  border: ${theme.colors.error.base} 1px solid;
  padding: ${theme.gridUnit * 4}px;
  margin: ${theme.gridUnit * 8}px ${theme.gridUnit * 4}px;
  color: ${theme.colors.error.dark2};
  .ant-alert-message {
    font-size: ${theme.typography.sizes.s + 1}px;
    font-weight: bold;
  }
  .ant-alert-description {
    font-size: ${theme.typography.sizes.s + 1}px;
    line-height: ${theme.gridUnit * 4}px;
    .ant-alert-icon {
      margin-right: ${theme.gridUnit * 2.5}px;
      font-size: ${theme.typography.sizes.l + 1}px;
      position: relative;
      top: ${theme.gridUnit / 4}px;
    }
  }
`;
const formHelperStyles = (theme) => emotion_react_browser_esm.css`
  .required {
    margin-left: ${theme.gridUnit / 2}px;
    color: ${theme.colors.error.base};
  }

  .helper {
    display: block;
    padding: ${theme.gridUnit}px 0;
    color: ${theme.colors.grayscale.light1};
    font-size: ${theme.typography.sizes.s - 1}px;
    text-align: left;
  }
`;
const wideButton = (theme) => emotion_react_browser_esm.css`
  width: 100%;
  border: 1px solid ${theme.colors.primary.dark2};
  color: ${theme.colors.primary.dark2};
  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.primary.dark1};
    color: ${theme.colors.primary.dark1};
  }
`;
const formStyles = (theme) => emotion_react_browser_esm.css`
  .form-group {
    margin-bottom: ${theme.gridUnit * 4}px;
    &-w-50 {
      display: inline-block;
      width: ${`calc(50% - ${theme.gridUnit * 4}px)`};
      & + .form-group-w-50 {
        margin-left: ${theme.gridUnit * 8}px;
        margin-bottom: ${theme.gridUnit * 10}px;
      }
    }
  }
  .control-label {
    color: ${theme.colors.grayscale.dark1};
    font-size: ${theme.typography.sizes.s - 1}px;
  }
  .helper {
    color: ${theme.colors.grayscale.light1};
    font-size: ${theme.typography.sizes.s - 1}px;
    margin-top: ${theme.gridUnit * 1.5}px;
  }
  .ant-tabs-content-holder {
    overflow: auto;
    max-height: 475px;
  }
`;
const validatedFormStyles = (theme) => emotion_react_browser_esm.css`
  label {
    color: ${theme.colors.grayscale.dark1};
    font-size: ${theme.typography.sizes.s - 1}px;
    margin-bottom: 0;
  }
`;
const StyledInputContainer = style/* styled.div */.iK.div`
  margin-bottom: ${({ theme }) => theme.gridUnit * 6}px;
  &.mb-0 {
    margin-bottom: 0;
  }
  &.mb-8 {
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  }

  .control-label {
    color: ${({ theme }) => theme.colors.grayscale.dark1};
    font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .input-container {
    display: flex;
    align-items: top;

    label {
      display: flex;
      margin-left: ${({ theme }) => theme.gridUnit * 2}px;
      margin-top: ${({ theme }) => theme.gridUnit * 0.75}px;
      font-family: ${({ theme }) => theme.typography.families.sansSerif};
      font-size: ${({ theme }) => theme.typography.sizes.m}px;
    }

    i {
      margin: 0 ${({ theme }) => theme.gridUnit}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({ theme }) => theme.gridUnit * 1.5}px
      ${({ theme }) => theme.gridUnit * 2}px;
    border-style: none;
    border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    border-radius: ${({ theme }) => theme.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({ theme }) => theme.gridUnit * 8}px;
    margin-bottom: 0;
    padding: 0;
    .control-label {
      margin-bottom: 0;
    }
    &.open {
      height: ${CTAS_CVAS_SCHEMA_FORM_HEIGHT}px;
      padding-right: ${({ theme }) => theme.gridUnit * 5}px;
    }
  }
`;
const StyledJsonEditor = (0,style/* styled */.iK)(AsyncAceEditor/* JsonEditor */.Ad)`
  flex: 1 1 auto;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  border-radius: ${({ theme }) => theme.gridUnit}px;
`;
const StyledExpandableForm = style/* styled.div */.iK.div`
  padding-top: ${({ theme }) => theme.gridUnit}px;
  .input-container {
    padding-top: ${({ theme }) => theme.gridUnit}px;
    padding-bottom: ${({ theme }) => theme.gridUnit}px;
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({ theme }) => theme.gridUnit * 7}px;
    &.open {
      height: ${EXPOSE_IN_SQLLAB_FORM_HEIGHT}px;
      &.ctas-open {
        height: ${EXPOSE_ALL_FORM_HEIGHT}px;
      }
    }
  }
`;
const StyledAlignment = style/* styled.div */.iK.div`
  padding: 0 ${({ theme }) => theme.gridUnit * 4}px;
  margin-top: ${({ theme }) => theme.gridUnit * 6}px;
`;
const buttonLinkStyles = (theme) => emotion_react_browser_esm.css`
  font-weight: 400;
  text-transform: initial;
  padding-right: ${theme.gridUnit * 2}px;
`;
const alchemyButtonLinkStyles = (theme) => emotion_react_browser_esm.css`
  font-weight: 400;
  text-transform: initial;
  padding: ${theme.gridUnit * 8}px 0 0;
  margin-left: 0px;
`;
const TabHeader = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${({ theme }) => theme.colors.grayscale.base};
    font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
    margin: 0px;
  }
`;
const CreateHeaderTitle = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.grayscale.dark2};
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.sizes.m}px;
`;
const CreateHeaderSubtitle = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.grayscale.dark1};
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
`;
const EditHeaderTitle = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.grayscale.light1};
  font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
  text-transform: uppercase;
`;
const EditHeaderSubtitle = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.grayscale.dark1};
  font-size: ${({ theme }) => theme.typography.sizes.l}px;
  font-weight: bold;
`;
const CredentialInfoForm = style/* styled.div */.iK.div`
  .catalog-type-select {
    margin: 0 0 20px;
  }

  .label-select {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.grayscale.dark1};
    font-size: 11px;
    margin: 0 5px ${({ theme }) => theme.gridUnit * 2}px;
  }

  .label-paste {
    color: ${({ theme }) => theme.colors.grayscale.light1};
    font-size: 11px;
    line-height: 16px;
  }

  .input-container {
    margin: ${({ theme }) => theme.gridUnit * 7}px 0;
    display: flex;
    flex-direction: column;
}
  }
  .input-form {
    height: 100px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    border-radius: ${({ theme }) => theme.gridUnit}px;
    resize: vertical;
    padding: ${({ theme }) => theme.gridUnit * 1.5}px
      ${({ theme }) => theme.gridUnit * 2}px;
    &::placeholder {
      color: ${({ theme }) => theme.colors.grayscale.light1};
    }
  }

  .input-container {
    .input-upload {
      display: none;
    }
    .input-upload-current {
      display: flex;
      justify-content: space-between;
    }
    .input-upload-btn {
      width: ${({ theme }) => theme.gridUnit * 32}px
    }
  }`;
const SelectDatabaseStyles = style/* styled.div */.iK.div`
  .preferred {
    .superset-button {
      margin-left: 0;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${({ theme }) => theme.gridUnit * 4}px;
  }

  .preferred-item {
    width: 32%;
    margin-bottom: ${({ theme }) => theme.gridUnit * 2.5}px;
  }

  .available {
    margin: ${({ theme }) => theme.gridUnit * 4}px;
    .available-label {
      font-size: ${({ theme }) => theme.typography.sizes.l * 1.1}px;
      font-weight: bold;
      margin: ${({ theme }) => theme.gridUnit * 6}px 0;
    }
    .available-select {
      width: 100%;
    }
  }

  .label-available-select {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
  }

  .control-label {
    color: ${({ theme }) => theme.colors.grayscale.dark1};
    font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  }
`;
const StyledFooterButton = (0,style/* styled */.iK)(Button/* default */.Z)`
  width: ${({ theme }) => theme.gridUnit * 40}px;
`;
const StyledStickyHeader = style/* styled.div */.iK.div`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.max};
  background: ${({ theme }) => theme.colors.grayscale.light5};
`;
const StyledCatalogTable = style/* styled.div */.iK.div`
  margin-bottom: 16px;

  .catalog-type-select {
    margin: 0 0 20px;
  }

  .gsheet-title {
    font-size: ${({ theme }) => theme.typography.sizes.l * 1.1}px;
    font-weight: bold;
    margin: ${({ theme }) => theme.gridUnit * 10}px 0 16px;
  }

  .catalog-label {
    margin: 0 0 7px;
  }

  .catalog-name {
    display: flex;
    .catalog-name-input {
      width: 95%;
      margin-bottom: 0px;
    }
  }

  .catalog-name-url {
    margin: 4px 0;
    width: 95%;
  }

  .catalog-delete {
    align-self: center;
    background: ${({ theme }) => theme.colors.grayscale.light4};
    margin: 5px 5px 8px 5px;
  }

  .catalog-add-btn {
    width: 95%;
  }
`;
;// CONCATENATED MODULE: ./src/views/CRUD/data/database/DatabaseModal/ExtraOptions.tsx
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







const ExtraOptions = ({ db, onInputChange, onTextChange, onEditorChange, onExtraInputChange, onExtraEditorChange }) => {var _db$extra_json, _db$extra_json2, _db$extra_json3, _db$extra_json3$metad, _db$extra_json4, _db$extra_json4$metad, _db$extra_json5, _db$extra_json6, _db$extra_json7, _db$extra_json8, _db$extra_json9;
  const expandableModalIsOpen = !!(db != null && db.expose_in_sqllab);
  const createAsOpen = !!(db != null && db.allow_ctas || db != null && db.allow_cvas);
  return (0,emotion_react_browser_esm.jsx)(Collapse/* default */.Z, { expandIconPosition: "right", accordion: true, css: (theme) => antdCollapseStyles(theme) },
  (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { header: (0,emotion_react_browser_esm.jsx)("div", null,
    (0,emotion_react_browser_esm.jsx)("h4", null, "SQL Lab"),
    (0,emotion_react_browser_esm.jsx)("p", { className: "helper" }, "Adjust how this database will interact with SQL Lab.")),


    key: "1" },
  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, { css: no_margin_bottom },
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(IndeterminateCheckbox/* default */.Z, { id: "expose_in_sqllab", indeterminate: false, checked: !!(db != null && db.expose_in_sqllab), onChange: onInputChange, labelText: (0,TranslatorSingleton.t)('Expose database in SQL Lab') }),
  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('Allow this database to be queried in SQL Lab') })),

  (0,emotion_react_browser_esm.jsx)(StyledExpandableForm, { className: classnames_default()('expandable', {
      open: expandableModalIsOpen,
      'ctas-open': createAsOpen }) },

  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, { css: no_margin_bottom },
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(IndeterminateCheckbox/* default */.Z, { id: "allow_ctas", indeterminate: false, checked: !!(db != null && db.allow_ctas), onChange: onInputChange, labelText: (0,TranslatorSingleton.t)('Allow CREATE TABLE AS') }),
  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('Allow creation of new tables based on queries') }))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, { css: no_margin_bottom },
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(IndeterminateCheckbox/* default */.Z, { id: "allow_cvas", indeterminate: false, checked: !!(db != null && db.allow_cvas), onChange: onInputChange, labelText: (0,TranslatorSingleton.t)('Allow CREATE VIEW AS') }),
  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('Allow creation of new views based on queries') })),

  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, { className: classnames_default()('expandable', { open: createAsOpen }) },
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('CTAS & CVAS SCHEMA')),
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("input", { type: "text", name: "force_ctas_schema", value: (db == null ? void 0 : db.force_ctas_schema) || '', placeholder: (0,TranslatorSingleton.t)('Create or select schema...'), onChange: onInputChange })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "helper" },
  (0,TranslatorSingleton.t)('Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.')))),



  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, { css: no_margin_bottom },
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(IndeterminateCheckbox/* default */.Z, { id: "allow_dml", indeterminate: false, checked: !!(db != null && db.allow_dml), onChange: onInputChange, labelText: (0,TranslatorSingleton.t)('Allow DML') }),
  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('Allow manipulation of the database using non-SELECT statements such as UPDATE, DELETE, CREATE, etc.') }))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, { css: no_margin_bottom },
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(IndeterminateCheckbox/* default */.Z, { id: "allow_multi_schema_metadata_fetch", indeterminate: false, checked: !!(db != null && db.allow_multi_schema_metadata_fetch), onChange: onInputChange, labelText: (0,TranslatorSingleton.t)('Allow Multi Schema Metadata Fetch') }),
  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('Allow SQL Lab to fetch a list of all tables and all views across all database ' +
    'schemas. For large data warehouse with thousands of tables, this can be ' +
    'expensive and put strain on the system.') }))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, { css: no_margin_bottom },
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(IndeterminateCheckbox/* default */.Z, { id: "cost_estimate_enabled", indeterminate: false, checked: !!(db != null && (_db$extra_json = db.extra_json) != null && _db$extra_json.cost_estimate_enabled), onChange: onExtraInputChange, labelText: (0,TranslatorSingleton.t)('Enable query cost estimation') }),
  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('For Presto and Postgres, shows a button to compute cost before running a query.') }))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(IndeterminateCheckbox/* default */.Z, { id: "allows_virtual_table_explore", indeterminate: false, checked: !!(db != null && (_db$extra_json2 = db.extra_json) != null && _db$extra_json2.allows_virtual_table_explore), onChange: onExtraInputChange, labelText: (0,TranslatorSingleton.t)('Allow this database to be explored') }),
  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('When enabled, users are able to visualize SQL Lab results in Explore.') })))))),





  (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { header: (0,emotion_react_browser_esm.jsx)("div", null,
    (0,emotion_react_browser_esm.jsx)("h4", null, "Performance"),
    (0,emotion_react_browser_esm.jsx)("p", { className: "helper" }, "Adjust performance settings of this database.")),


    key: "2" },
  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, { className: "mb-8" },
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('Chart cache timeout')),
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("input", { type: "number", name: "cache_timeout", value: (db == null ? void 0 : db.cache_timeout) || '', placeholder: (0,TranslatorSingleton.t)('Enter duration in seconds'), onChange: onInputChange })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "helper" },
  (0,TranslatorSingleton.t)('Duration (in seconds) of the caching timeout for charts of this database.' +
  ' A timeout of 0 indicates that the cache never expires.' +
  ' Note this defaults to the global timeout if undefined.'))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('Schema cache timeout')),
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("input", { type: "number", name: "schema_cache_timeout", value: (db == null ? void 0 : (_db$extra_json3 = db.extra_json) == null ? void 0 : (_db$extra_json3$metad = _db$extra_json3.metadata_cache_timeout) == null ? void 0 : _db$extra_json3$metad.schema_cache_timeout) ||
    '', placeholder: (0,TranslatorSingleton.t)('Enter duration in seconds'), onChange: onExtraInputChange })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "helper" },
  (0,TranslatorSingleton.t)('Duration (in seconds) of the metadata caching timeout for schemas of ' +
  'this database. If left unset, the cache never expires.'))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('Table cache timeout')),
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("input", { type: "number", name: "table_cache_timeout", value: (db == null ? void 0 : (_db$extra_json4 = db.extra_json) == null ? void 0 : (_db$extra_json4$metad = _db$extra_json4.metadata_cache_timeout) == null ? void 0 : _db$extra_json4$metad.table_cache_timeout) ||
    '', placeholder: (0,TranslatorSingleton.t)('Enter duration in seconds'), onChange: onExtraInputChange })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "helper" },
  (0,TranslatorSingleton.t)('Duration (in seconds) of the metadata caching timeout for tables of ' +
  'this database. If left unset, the cache never expires. '))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, { css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ no_margin_bottom: no_margin_bottom },  true ? "" : 0,  true ? "" : 0) },
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(IndeterminateCheckbox/* default */.Z, { id: "allow_run_async", indeterminate: false, checked: !!(db != null && db.allow_run_async), onChange: onInputChange, labelText: (0,TranslatorSingleton.t)('Asynchronous query execution') }),
  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('Operate the database in asynchronous mode, meaning that the queries ' +
    'are executed on remote workers as opposed to on the web server itself. ' +
    'This assumes that you have a Celery worker setup as well as a results ' +
    'backend. Refer to the installation docs for more information.') }))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, { css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ no_margin_bottom: no_margin_bottom },  true ? "" : 0,  true ? "" : 0) },
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(IndeterminateCheckbox/* default */.Z, { id: "cancel_query_on_windows_unload", indeterminate: false, checked: !!(db != null && (_db$extra_json5 = db.extra_json) != null && _db$extra_json5.cancel_query_on_windows_unload), onChange: onExtraInputChange, labelText: (0,TranslatorSingleton.t)('Cancel query on window unload event') }),
  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('Terminate running queries when browser window closed or navigated ' +
    'to another page. Available for Presto, Hive, MySQL, Postgres and ' +
    'Snowflake databases.') })))),



  (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { header: (0,emotion_react_browser_esm.jsx)("div", null,
    (0,emotion_react_browser_esm.jsx)("h4", null, "Security"),
    (0,emotion_react_browser_esm.jsx)("p", { className: "helper" }, "Add extra connection information.")),
    key: "3" },
  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('Secure extra')),
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(StyledJsonEditor, { name: "encrypted_extra", value: (db == null ? void 0 : db.encrypted_extra) || '', placeholder: (0,TranslatorSingleton.t)('Secure extra'), onChange: (json) => onEditorChange({ json, name: 'encrypted_extra' }), width: "100%", height: "160px" })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "helper" },
  (0,emotion_react_browser_esm.jsx)("div", null,
  (0,TranslatorSingleton.t)('JSON string containing additional connection configuration. ' +
  'This is used to provide connection information for systems ' +
  'like Hive, Presto and BigQuery which do not conform to the ' +
  'username:password syntax normally used by SQLAlchemy.')))),



  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('Root certificate')),
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("textarea", { name: "server_cert", value: (db == null ? void 0 : db.server_cert) || '', placeholder: (0,TranslatorSingleton.t)('Enter CA_BUNDLE'), onChange: onTextChange })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "helper" },
  (0,TranslatorSingleton.t)('Optional CA_BUNDLE contents to validate HTTPS requests. Only ' +
  'available on certain database engines.'))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('Schemas allowed for CSV upload')),

  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("input", { type: "text", name: "schemas_allowed_for_csv_upload", value: ((db == null ? void 0 : (_db$extra_json6 = db.extra_json) == null ? void 0 : _db$extra_json6.schemas_allowed_for_csv_upload) || []).join(','), placeholder: "schema1,schema2", onChange: onExtraInputChange })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "helper" },
  (0,TranslatorSingleton.t)('A comma-separated list of schemas that CSVs are allowed to upload to.'))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, { css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ no_margin_bottom: no_margin_bottom },  true ? "" : 0,  true ? "" : 0) },
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(IndeterminateCheckbox/* default */.Z, { id: "impersonate_user", indeterminate: false, checked: !!(db != null && db.impersonate_user), onChange: onInputChange, labelText: (0,TranslatorSingleton.t)('Impersonate logged in user (Presto, Trino, Drill, Hive, and GSheets)') }),
  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('If Presto or Trino, all the queries in SQL Lab are going to be executed as the ' +
    'currently logged on user who must have permission to run them. If Hive ' +
    'and hive.server2.enable.doAs is enabled, will run the queries as ' +
    'service account, but impersonate the currently logged on user via ' +
    'hive.server2.proxy.user property.') }))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, { css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ ...no_margin_bottom },  true ? "" : 0,  true ? "" : 0) },
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(IndeterminateCheckbox/* default */.Z, { id: "allow_csv_upload", indeterminate: false, checked: !!(db != null && db.allow_csv_upload), onChange: onInputChange, labelText: (0,TranslatorSingleton.t)('Allow data upload') }),
  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('If selected, please set the schemas allowed for data upload in Extra.') })))),



  (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { header: (0,emotion_react_browser_esm.jsx)("div", null,
    (0,emotion_react_browser_esm.jsx)("h4", null, "Other"),
    (0,emotion_react_browser_esm.jsx)("p", { className: "helper" }, "Additional settings.")),
    key: "4" },
  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('Metadata Parameters')),
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(StyledJsonEditor, { name: "metadata_params", value: (db == null ? void 0 : (_db$extra_json7 = db.extra_json) == null ? void 0 : _db$extra_json7.metadata_params) || '', placeholder: (0,TranslatorSingleton.t)('Metadata Parameters'), onChange: (json) => onExtraEditorChange({ json, name: 'metadata_params' }), width: "100%", height: "160px" })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "helper" },
  (0,emotion_react_browser_esm.jsx)("div", null,
  (0,TranslatorSingleton.t)('The metadata_params object gets unpacked into the sqlalchemy.MetaData call.')))),



  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('Engine Parameters')),
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(StyledJsonEditor, { name: "engine_params", value: (db == null ? void 0 : (_db$extra_json8 = db.extra_json) == null ? void 0 : _db$extra_json8.engine_params) || '', placeholder: (0,TranslatorSingleton.t)('Engine Parameters'), onChange: (json) => onExtraEditorChange({ json, name: 'engine_params' }), width: "100%", height: "160px" })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "helper" },
  (0,emotion_react_browser_esm.jsx)("div", null,
  (0,TranslatorSingleton.t)('The engine_params object gets unpacked into the sqlalchemy.create_engine call.')))),



  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('Version')),

  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("input", { type: "number", name: "version", value: (db == null ? void 0 : (_db$extra_json9 = db.extra_json) == null ? void 0 : _db$extra_json9.version) || '', placeholder: (0,TranslatorSingleton.t)('Version number'), onChange: onExtraInputChange })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "helper" },
  (0,TranslatorSingleton.t)('Specify the database version. This should be used with ' +
  'Presto in order to enable query cost estimation.')))));




};
/* harmony default export */ const DatabaseModal_ExtraOptions = (ExtraOptions);
;// CONCATENATED MODULE: ./src/views/CRUD/data/database/DatabaseModal/SqlAlchemyForm.tsx
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




const SqlAlchemyTab = ({ db, onInputChange, testConnection, conf, isEditMode = false }) => {var _conf$SQLALCHEMY_DOCS, _conf$SQLALCHEMY_DISP;return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('Display Name'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("input", { type: "text", name: "database_name", value: (db == null ? void 0 : db.database_name) || '', placeholder: (0,TranslatorSingleton.t)('Name your database'), onChange: onInputChange })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "helper" },
  (0,TranslatorSingleton.t)('Pick a name to help you identify this database.'))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('SQLAlchemy URI'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("input", { type: "text", name: "sqlalchemy_uri", value: (db == null ? void 0 : db.sqlalchemy_uri) || '', autoComplete: "off", placeholder: (0,TranslatorSingleton.t)('dialect+driver://username:password@host:port/database'), onChange: onInputChange })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "helper" },
  (0,TranslatorSingleton.t)('Refer to the'), ' ',
  (0,emotion_react_browser_esm.jsx)("a", { href: (_conf$SQLALCHEMY_DOCS = conf == null ? void 0 : conf.SQLALCHEMY_DOCS_URL) != null ? _conf$SQLALCHEMY_DOCS : '', target: "_blank", rel: "noopener noreferrer" }, (_conf$SQLALCHEMY_DISP =
  conf == null ? void 0 : conf.SQLALCHEMY_DISPLAY_TEXT) != null ? _conf$SQLALCHEMY_DISP : ''),
  ' ',
  (0,TranslatorSingleton.t)('for more information on how to structure your URI.'))),


  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { onClick: testConnection, cta: true, buttonStyle: "link", css: (theme) => wideButton(theme) },
  (0,TranslatorSingleton.t)('Test connection')));};


/* harmony default export */ const SqlAlchemyForm = (SqlAlchemyTab);
// EXTERNAL MODULE: ./src/components/Form/LabeledErrorBoundInput.tsx + 1 modules
var LabeledErrorBoundInput = __webpack_require__(70917);
// EXTERNAL MODULE: ./src/components/Form/FormLabel.tsx
var FormLabel = __webpack_require__(2857);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DeleteFilled.js
// This icon file is generated automatically.
var DeleteFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" } }] }, "name": "delete", "theme": "filled" };
/* harmony default export */ const asn_DeleteFilled = (DeleteFilled);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(27029);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteFilled.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var DeleteFilled_DeleteFilled = function DeleteFilled(props, ref) {
  return react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_DeleteFilled
  }));
};

DeleteFilled_DeleteFilled.displayName = 'DeleteFilled';
/* harmony default export */ const icons_DeleteFilled = (react.forwardRef(DeleteFilled_DeleteFilled));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js
// This icon file is generated automatically.
var CloseOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, "name": "close", "theme": "outlined" };
/* harmony default export */ const asn_CloseOutlined = (CloseOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CloseOutlined_CloseOutlined = function CloseOutlined(props, ref) {
  return react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_CloseOutlined
  }));
};

CloseOutlined_CloseOutlined.displayName = 'CloseOutlined';
/* harmony default export */ const icons_CloseOutlined = (react.forwardRef(CloseOutlined_CloseOutlined));
;// CONCATENATED MODULE: ./src/views/CRUD/data/database/DatabaseModal/DatabaseConnectionForm.tsx
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








// These are the columns that are going to be added to encrypted extra, they differ in name based
// on the engine, however we want to use the same component for each of them. Make sure to add the
// the engine specific name here.
const encryptedCredentialsMap = {
  gsheets: 'service_account_info',
  bigquery: 'credentials_info' };

var CredentialInfoOptions;
(function (CredentialInfoOptions) {
  CredentialInfoOptions[CredentialInfoOptions["jsonUpload"] = 0] = "jsonUpload";
  CredentialInfoOptions[CredentialInfoOptions["copyPaste"] = 1] = "copyPaste";
})(CredentialInfoOptions || (CredentialInfoOptions = {}));
const castStringToBoolean = (optionValue) => optionValue === 'true';
const FormFieldOrder = [
'host',
'port',
'database',
'username',
'password',
'database_name',
'credentials_info',
'service_account_info',
'catalog',
'query',
'encryption'];var _ref =  true ? { name: "s5xdrg", styles: "display:flex;align-items:center" } : 0;

const CredentialsInfo = ({ changeMethods, isEditMode, db, editNewDb }) => {var _db$parameters, _db$parameters2, _db$parameters3;
  const [uploadOption, setUploadOption] = (0,react.useState)(CredentialInfoOptions.jsonUpload.valueOf());
  const [fileToUpload, setFileToUpload] = (0,react.useState)(null);
  const [isPublic, setIsPublic] = (0,react.useState)(true);
  const showCredentialsInfo = (db == null ? void 0 : db.engine) === 'gsheets' ? !isEditMode && !isPublic : !isEditMode;
  // a database that has an optional encrypted field has an encrypted_extra that is an empty object, this checks for that.
  const isEncrypted = isEditMode && (db == null ? void 0 : db.encrypted_extra) !== '{}';
  const encryptedField = (db == null ? void 0 : db.engine) && encryptedCredentialsMap[db.engine];
  const encryptedValue = typeof (db == null ? void 0 : (_db$parameters = db.parameters) == null ? void 0 : _db$parameters[encryptedField]) === 'object' ?
  JSON.stringify(db == null ? void 0 : (_db$parameters2 = db.parameters) == null ? void 0 : _db$parameters2[encryptedField]) :
  db == null ? void 0 : (_db$parameters3 = db.parameters) == null ? void 0 : _db$parameters3[encryptedField];
  return (0,emotion_react_browser_esm.jsx)(CredentialInfoForm, null,
  (db == null ? void 0 : db.engine) === 'gsheets' && (0,emotion_react_browser_esm.jsx)("div", { className: "catalog-type-select" },
  (0,emotion_react_browser_esm.jsx)(FormLabel/* default */.Z, { css: (theme) => labelMarginBotton(theme), required: true },
  (0,TranslatorSingleton.t)('Type of Google Sheets allowed')),

  (0,emotion_react_browser_esm.jsx)(components/* Select */.Ph, { style: { width: '100%' }, defaultValue: isEncrypted ? 'false' : 'true', onChange: (value) => setIsPublic(castStringToBoolean(value)) },
  (0,emotion_react_browser_esm.jsx)(components/* Select.Option */.Ph.Option, { value: "true", key: 1 },
  (0,TranslatorSingleton.t)('Publicly shared sheets only')),

  (0,emotion_react_browser_esm.jsx)(components/* Select.Option */.Ph.Option, { value: "false", key: 2 },
  (0,TranslatorSingleton.t)('Public and privately shared sheets')))),



  showCredentialsInfo && (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(FormLabel/* default */.Z, { required: true },
  (0,TranslatorSingleton.t)('How∂ do you want to enter service account credentials?')),

  (0,emotion_react_browser_esm.jsx)(components/* Select */.Ph, { defaultValue: uploadOption, style: { width: '100%' }, onChange: (option) => setUploadOption(option) },
  (0,emotion_react_browser_esm.jsx)(components/* Select.Option */.Ph.Option, { value: CredentialInfoOptions.jsonUpload },
  (0,TranslatorSingleton.t)('Upload JSON file')),


  (0,emotion_react_browser_esm.jsx)(components/* Select.Option */.Ph.Option, { value: CredentialInfoOptions.copyPaste },
  (0,TranslatorSingleton.t)('Copy and Paste JSON credentials')))),



  uploadOption === CredentialInfoOptions.copyPaste ||
  isEditMode ||
  editNewDb ? (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(FormLabel/* default */.Z, { required: true }, (0,TranslatorSingleton.t)('Service Account')),
  (0,emotion_react_browser_esm.jsx)("textarea", { className: "input-form", name: encryptedField, value: encryptedValue, onChange: changeMethods.onParametersChange, placeholder: "Paste content of service credentials JSON file here" }),
  (0,emotion_react_browser_esm.jsx)("span", { className: "label-paste" },
  (0,TranslatorSingleton.t)('Copy and paste the entire service account .json file here'))) :

  showCredentialsInfo && (0,emotion_react_browser_esm.jsx)("div", { className: "input-container", css: (theme) => infoTooltip(theme) },
  (0,emotion_react_browser_esm.jsx)("div", { css: _ref },
  (0,emotion_react_browser_esm.jsx)(FormLabel/* default */.Z, { required: true }, (0,TranslatorSingleton.t)('Upload Credentials')),
  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('Use the JSON file you automatically downloaded when creating your service account.'), viewBox: "0 0 24 24" })),


  !fileToUpload && (0,emotion_react_browser_esm.jsx)(components/* Button */.zx, { className: "input-upload-btn", onClick: () => {var _document, _document$getElementB;return (_document = document) == null ? void 0 : (_document$getElementB = _document.getElementById('selectedFile')) == null ? void 0 : _document$getElementB.click();} },
  (0,TranslatorSingleton.t)('Choose File')),

  fileToUpload && (0,emotion_react_browser_esm.jsx)("div", { className: "input-upload-current" },
  fileToUpload,
  (0,emotion_react_browser_esm.jsx)(icons_DeleteFilled, { onClick: () => {
      setFileToUpload(null);
      changeMethods.onParametersChange({
        target: {
          name: encryptedField,
          value: '' } });


    } })),


  (0,emotion_react_browser_esm.jsx)("input", { id: "selectedFile", className: "input-upload", type: "file", onChange: async (event) => {var _file, _file2;
      let file;
      if (event.target.files) {
        file = event.target.files[0];
      }
      setFileToUpload((_file = file) == null ? void 0 : _file.name);
      changeMethods.onParametersChange({
        target: {
          type: null,
          name: encryptedField,
          value: await ((_file2 = file) == null ? void 0 : _file2.text()),
          checked: false } });


      document.getElementById('selectedFile').value = null;
    } })));


};
const TableCatalog = ({ required, changeMethods, getValidation, validationErrors, db }) => {
  const tableCatalog = (db == null ? void 0 : db.catalog) || [];
  const catalogError = validationErrors || {};
  return (0,emotion_react_browser_esm.jsx)(StyledCatalogTable, null,
  (0,emotion_react_browser_esm.jsx)("h4", { className: "gsheet-title" },
  (0,TranslatorSingleton.t)('Connect Google Sheets as tables to this database')),

  (0,emotion_react_browser_esm.jsx)("div", null,
  tableCatalog == null ? void 0 : tableCatalog.map((sheet, idx) => {var _catalogError$idx, _catalogError$idx2;return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(FormLabel/* default */.Z, { className: "catalog-label", required: true },
    (0,TranslatorSingleton.t)('Google Sheet Name and URL')),

    (0,emotion_react_browser_esm.jsx)("div", { className: "catalog-name" },
    (0,emotion_react_browser_esm.jsx)(LabeledErrorBoundInput/* default */.Z, { className: "catalog-name-input", required: required, validationMethods: { onBlur: getValidation }, errorMessage: (_catalogError$idx = catalogError[idx]) == null ? void 0 : _catalogError$idx.name, placeholder: (0,TranslatorSingleton.t)('Enter a name for this sheet'), onChange: (e) => {
        changeMethods.onParametersChange({
          target: {
            type: `catalog-${idx}`,
            name: 'name',
            value: e.target.value } });


      }, value: sheet.name }),
    (tableCatalog == null ? void 0 : tableCatalog.length) > 1 && (0,emotion_react_browser_esm.jsx)(icons_CloseOutlined, { className: "catalog-delete", onClick: () => changeMethods.onRemoveTableCatalog(idx) })),

    (0,emotion_react_browser_esm.jsx)(LabeledErrorBoundInput/* default */.Z, { className: "catalog-name-url", required: required, validationMethods: { onBlur: getValidation }, errorMessage: (_catalogError$idx2 = catalogError[idx]) == null ? void 0 : _catalogError$idx2.url, placeholder: (0,TranslatorSingleton.t)('Paste the shareable Google Sheet URL here'), onChange: (e) => changeMethods.onParametersChange({
        target: {
          type: `catalog-${idx}`,
          name: 'value',
          value: e.target.value } }),

      value: sheet.value }));}),

  (0,emotion_react_browser_esm.jsx)(StyledFooterButton, { className: "catalog-add-btn", onClick: () => {
      changeMethods.onAddTableCatalog();
    } }, "+ ",
  (0,TranslatorSingleton.t)('Add sheet'))));



};
const hostField = ({ required, changeMethods, getValidation, validationErrors, db }) => {var _db$parameters4;return (0,emotion_react_browser_esm.jsx)(LabeledErrorBoundInput/* default */.Z, { id: "host", name: "host", value: db == null ? void 0 : (_db$parameters4 = db.parameters) == null ? void 0 : _db$parameters4.host, required: required, hasTooltip: true, tooltipText: (0,TranslatorSingleton.t)('This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com).'), validationMethods: { onBlur: getValidation }, errorMessage: validationErrors == null ? void 0 : validationErrors.host, placeholder: "e.g. 127.0.0.1", className: "form-group-w-50", label: "Host", onChange: changeMethods.onParametersChange });};
const portField = ({ required, changeMethods, getValidation, validationErrors, db }) => {var _db$parameters5;return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(LabeledErrorBoundInput/* default */.Z, { id: "port", name: "port", type: "number", required: required, value: db == null ? void 0 : (_db$parameters5 = db.parameters) == null ? void 0 : _db$parameters5.port, validationMethods: { onBlur: getValidation }, errorMessage: validationErrors == null ? void 0 : validationErrors.port, placeholder: "e.g. 5432", className: "form-group-w-50", label: "Port", onChange: changeMethods.onParametersChange }));};

const databaseField = ({ required, changeMethods, getValidation, validationErrors, db }) => {var _db$parameters6;return (0,emotion_react_browser_esm.jsx)(LabeledErrorBoundInput/* default */.Z, { id: "database", name: "database", required: required, value: db == null ? void 0 : (_db$parameters6 = db.parameters) == null ? void 0 : _db$parameters6.database, validationMethods: { onBlur: getValidation }, errorMessage: validationErrors == null ? void 0 : validationErrors.database, placeholder: "e.g. world_population", label: "Database name", onChange: changeMethods.onParametersChange, helpText: (0,TranslatorSingleton.t)('Copy the name of the  database you are trying to connect to.') });};
const usernameField = ({ required, changeMethods, getValidation, validationErrors, db }) => {var _db$parameters7;return (0,emotion_react_browser_esm.jsx)(LabeledErrorBoundInput/* default */.Z, { id: "username", name: "username", required: required, value: db == null ? void 0 : (_db$parameters7 = db.parameters) == null ? void 0 : _db$parameters7.username, validationMethods: { onBlur: getValidation }, errorMessage: validationErrors == null ? void 0 : validationErrors.username, placeholder: "e.g. Analytics", label: "Username", onChange: changeMethods.onParametersChange });};
const passwordField = ({ required, changeMethods, getValidation, validationErrors, db, isEditMode }) => {var _db$parameters8;return (0,emotion_react_browser_esm.jsx)(LabeledErrorBoundInput/* default */.Z, { id: "password", name: "password", required: required, type: isEditMode && 'password', value: db == null ? void 0 : (_db$parameters8 = db.parameters) == null ? void 0 : _db$parameters8.password, validationMethods: { onBlur: getValidation }, errorMessage: validationErrors == null ? void 0 : validationErrors.password, placeholder: "e.g. ********", label: "Password", onChange: changeMethods.onParametersChange });};
const displayField = ({ changeMethods, getValidation, validationErrors, db }) => (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
(0,emotion_react_browser_esm.jsx)(LabeledErrorBoundInput/* default */.Z, { id: "database_name", name: "database_name", required: true, value: db == null ? void 0 : db.database_name, validationMethods: { onBlur: getValidation }, errorMessage: validationErrors == null ? void 0 : validationErrors.database_name, placeholder: "", label: (0,TranslatorSingleton.t)('Display Name'), onChange: changeMethods.onChange, helpText: (0,TranslatorSingleton.t)('Pick a nickname for this database to display as in Superset.') }));

const queryField = ({ required, changeMethods, getValidation, validationErrors, db }) => (0,emotion_react_browser_esm.jsx)(LabeledErrorBoundInput/* default */.Z, { id: "query_input", name: "query_input", required: required, value: (db == null ? void 0 : db.query_input) || '', validationMethods: { onBlur: getValidation }, errorMessage: validationErrors == null ? void 0 : validationErrors.query, placeholder: "e.g. param1=value1&param2=value2", label: "Additional Parameters", onChange: changeMethods.onQueryChange, helpText: (0,TranslatorSingleton.t)('Add additional custom parameters') });
const forceSSLField = ({ isEditMode, changeMethods, db, sslForced }) => {var _db$parameters9;return (0,emotion_react_browser_esm.jsx)("div", { css: (theme) => infoTooltip(theme) },
  (0,emotion_react_browser_esm.jsx)(components/* Switch */.rs, { disabled: sslForced && !isEditMode, checked: (db == null ? void 0 : (_db$parameters9 = db.parameters) == null ? void 0 : _db$parameters9.encryption) || sslForced, onChange: (changed) => {
      changeMethods.onParametersChange({
        target: {
          type: 'toggle',
          name: 'encryption',
          checked: true,
          value: changed } });


    } }),
  (0,emotion_react_browser_esm.jsx)("span", { css: toggleStyle }, "SSL"),
  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('SSL Mode "require" will be used.'), placement: "right", viewBox: "0 -5 24 24" }));};

const FORM_FIELD_MAP = {
  host: hostField,
  port: portField,
  database: databaseField,
  username: usernameField,
  password: passwordField,
  database_name: displayField,
  query: queryField,
  encryption: forceSSLField,
  credentials_info: CredentialsInfo,
  service_account_info: CredentialsInfo,
  catalog: TableCatalog };

const DatabaseConnectionForm = ({ dbModel: { parameters }, onParametersChange, onChange, onQueryChange, onParametersUploadFileChange, onAddTableCatalog, onRemoveTableCatalog, validationErrors, getValidation, db, isEditMode = false, sslForced, editNewDb }) => (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
(0,emotion_react_browser_esm.jsx)("div", {
  // @ts-ignore
  css: (theme) => [
  formScrollableStyles,
  validatedFormStyles(theme)] },

parameters &&
FormFieldOrder.filter((key) => Object.keys(parameters.properties).includes(key) ||
key === 'database_name').map((field) => {var _parameters$required;return FORM_FIELD_MAP[field]({
    required: (_parameters$required = parameters.required) == null ? void 0 : _parameters$required.includes(field),
    changeMethods: {
      onParametersChange,
      onChange,
      onQueryChange,
      onParametersUploadFileChange,
      onAddTableCatalog,
      onRemoveTableCatalog },

    validationErrors,
    getValidation,
    db,
    key: field,
    isEditMode,
    sslForced,
    editNewDb });})));



const FormFieldMap = (/* unused pure expression or super */ null && (FORM_FIELD_MAP));
/* harmony default export */ const DatabaseModal_DatabaseConnectionForm = (DatabaseConnectionForm);
;// CONCATENATED MODULE: ./src/views/CRUD/data/database/DatabaseModal/ModalHeader.tsx
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



const supersetTextDocs = (0,hooks/* getDatabaseDocumentationLinks */.z)();
const DOCUMENTATION_LINK = supersetTextDocs ?
supersetTextDocs.support :
'https://superset.apache.org/docs/databases/installing-database-drivers';
const irregularDocumentationLinks = {
  postgresql: 'https://superset.apache.org/docs/databases/postgres',
  mssql: 'https://superset.apache.org/docs/databases/sql-server',
  gsheets: 'https://superset.apache.org/docs/databases/google-sheets' };

const documentationLink = (engine) => {
  if (!engine)
  return null;
  if (supersetTextDocs) {
    // override doc link for superset_txt yml
    return supersetTextDocs[engine] || supersetTextDocs.default;
  }
  if (!irregularDocumentationLinks[engine]) {
    return `https://superset.apache.org/docs/databases/${engine}`;
  }
  return irregularDocumentationLinks[engine];
};
const ModalHeader = ({ isLoading, isEditMode, useSqlAlchemyForm, hasConnectedDb, db, dbName, dbModel, editNewDb }) => {
  const isEditHeader = (0,emotion_react_browser_esm.jsx)(StyledFormHeader, null,
  (0,emotion_react_browser_esm.jsx)(EditHeaderTitle, null, db == null ? void 0 : db.backend),
  (0,emotion_react_browser_esm.jsx)(EditHeaderSubtitle, null, dbName));

  const useSqlAlchemyFormHeader = (0,emotion_react_browser_esm.jsx)(StyledFormHeader, null,
  (0,emotion_react_browser_esm.jsx)("p", { className: "helper-top" }, " STEP 2 OF 2 "),
  (0,emotion_react_browser_esm.jsx)("h4", null, "Enter Primary Credentials"),
  (0,emotion_react_browser_esm.jsx)("p", { className: "helper-bottom" }, "Need help? Learn how to connect your database",
  ' ',
  (0,emotion_react_browser_esm.jsx)("a", { href: (supersetTextDocs == null ? void 0 : supersetTextDocs.default) || DOCUMENTATION_LINK, target: "_blank", rel: "noopener noreferrer" }, "here"), "."));





  const hasConnectedDbHeader = (0,emotion_react_browser_esm.jsx)(StyledStickyHeader, null,
  (0,emotion_react_browser_esm.jsx)(StyledFormHeader, null,
  (0,emotion_react_browser_esm.jsx)("p", { className: "helper-top" }, " STEP 3 OF 3 "),
  (0,emotion_react_browser_esm.jsx)("h4", { className: "step-3-text" }, "Your database was successfully connected! Here are some optional settings for your database"),



  (0,emotion_react_browser_esm.jsx)("p", { className: "helper-bottom" }, "Need help? Learn more about",
  ' ',
  (0,emotion_react_browser_esm.jsx)("a", { href: documentationLink(db == null ? void 0 : db.engine), target: "_blank", rel: "noopener noreferrer" }, "connecting to ",
  dbModel.name, "."))));




  const hasDbHeader = (0,emotion_react_browser_esm.jsx)(StyledStickyHeader, null,
  (0,emotion_react_browser_esm.jsx)(StyledFormHeader, null,
  (0,emotion_react_browser_esm.jsx)("p", { className: "helper-top" }, " STEP 2 OF 3 "),
  (0,emotion_react_browser_esm.jsx)("h4", null, "Enter the required ", dbModel.name, " credentials"),
  (0,emotion_react_browser_esm.jsx)("p", { className: "helper-bottom" }, "Need help? Learn more about",
  ' ',
  (0,emotion_react_browser_esm.jsx)("a", { href: documentationLink(db == null ? void 0 : db.engine), target: "_blank", rel: "noopener noreferrer" }, "connecting to ",
  dbModel.name, "."))));




  const noDbHeader = (0,emotion_react_browser_esm.jsx)(StyledFormHeader, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "select-db" },
  (0,emotion_react_browser_esm.jsx)("p", { className: "helper-top" }, " STEP 1 OF 3 "),
  (0,emotion_react_browser_esm.jsx)("h4", null, "Select a database to connect")));


  if (isLoading)
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null);
  if (isEditMode) {
    return isEditHeader;
  }
  if (useSqlAlchemyForm) {
    return useSqlAlchemyFormHeader;
  }
  if (hasConnectedDb && !editNewDb) {
    return hasConnectedDbHeader;
  }
  if (db || editNewDb) {
    return hasDbHeader;
  }
  return noDbHeader;
};
/* harmony default export */ const DatabaseModal_ModalHeader = (ModalHeader);
;// CONCATENATED MODULE: ./src/views/CRUD/data/database/DatabaseModal/index.tsx
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



















const engineSpecificAlertMapping = {
  gsheets: {
    message: 'Why do I need to create a database?',
    description: 'To begin using your Google Sheets, you need to create a database first. ' +
    'Databases are used as a way to identify ' +
    'your data so that it can be queried and visualized. This ' +
    'database will hold all of your individual Google Sheets ' +
    'you choose to connect here.' } };


const errorAlertMapping = {
  CONNECTION_MISSING_PARAMETERS_ERROR: {
    message: 'Missing Required Fields',
    description: 'Please complete all required fields.' },

  CONNECTION_INVALID_HOSTNAME_ERROR: {
    message: 'Could not verify the host',
    description: 'The host is invalid. Please verify that this field is entered correctly.' },

  CONNECTION_PORT_CLOSED_ERROR: {
    message: 'Port is closed',
    description: 'Please verify that port is open to connect.' },

  CONNECTION_INVALID_PORT_ERROR: {
    message: 'Invalid Port Number',
    description: 'The port must be a whole number less than or equal to 65535.' },

  CONNECTION_ACCESS_DENIED_ERROR: {
    message: 'Invalid account information',
    description: 'Either the username or password is incorrect.' },

  CONNECTION_INVALID_PASSWORD_ERROR: {
    message: 'Invalid account information',
    description: 'Either the username or password is incorrect.' },

  INVALID_PAYLOAD_SCHEMA_ERROR: {
    message: 'Incorrect Fields',
    description: 'Please make sure all fields are filled out correctly' },

  TABLE_DOES_NOT_EXIST_ERROR: {
    message: 'URL could not be identified',
    description: 'The URL could not be identified. Please check for typos and make sure that "Type of google sheet allowed" selection matches the input' } };


var ActionType;
(function (ActionType) {
  ActionType[ActionType["configMethodChange"] = 0] = "configMethodChange";
  ActionType[ActionType["dbSelected"] = 1] = "dbSelected";
  ActionType[ActionType["editorChange"] = 2] = "editorChange";
  ActionType[ActionType["fetched"] = 3] = "fetched";
  ActionType[ActionType["inputChange"] = 4] = "inputChange";
  ActionType[ActionType["parametersChange"] = 5] = "parametersChange";
  ActionType[ActionType["reset"] = 6] = "reset";
  ActionType[ActionType["textChange"] = 7] = "textChange";
  ActionType[ActionType["extraInputChange"] = 8] = "extraInputChange";
  ActionType[ActionType["extraEditorChange"] = 9] = "extraEditorChange";
  ActionType[ActionType["addTableCatalogSheet"] = 10] = "addTableCatalogSheet";
  ActionType[ActionType["removeTableCatalogSheet"] = 11] = "removeTableCatalogSheet";
  ActionType[ActionType["queryChange"] = 12] = "queryChange";
})(ActionType || (ActionType = {}));
function dbReducer(state, action) {var _action$payload$type, _trimmedState$catalog2, _action$payload, _action$payload$param;
  const trimmedState = {
    ...(state || {}) };

  let query = {};
  let query_input = '';
  let deserializeExtraJSON = {};
  let extra_json;
  switch (action.type) {
    case ActionType.extraEditorChange:
      return {
        ...trimmedState,
        extra_json: {
          ...trimmedState.extra_json,
          [action.payload.name]: action.payload.json } };


    case ActionType.extraInputChange:
      if (action.payload.name === 'schema_cache_timeout' ||
      action.payload.name === 'table_cache_timeout') {var _trimmedState$extra_j;
        return {
          ...trimmedState,
          extra_json: {
            ...trimmedState.extra_json,
            metadata_cache_timeout: {
              ...((_trimmedState$extra_j = trimmedState.extra_json) == null ? void 0 : _trimmedState$extra_j.metadata_cache_timeout),
              [action.payload.name]: action.payload.value } } };



      }
      if (action.payload.name === 'schemas_allowed_for_csv_upload') {
        return {
          ...trimmedState,
          extra_json: {
            ...trimmedState.extra_json,
            schemas_allowed_for_csv_upload: (action.payload.value || '').split(',') } };


      }
      return {
        ...trimmedState,
        extra_json: {
          ...trimmedState.extra_json,
          [action.payload.name]: action.payload.type === 'checkbox' ?
          action.payload.checked :
          action.payload.value } };


    case ActionType.inputChange:
      if (action.payload.type === 'checkbox') {
        return {
          ...trimmedState,
          [action.payload.name]: action.payload.checked };

      }
      return {
        ...trimmedState,
        [action.payload.name]: action.payload.value };

    case ActionType.parametersChange:
      if (trimmedState.catalog !== undefined && (_action$payload$type =
      action.payload.type) != null && _action$payload$type.startsWith('catalog')) {var _action$payload$type2, _trimmedState$catalog;
        // Formatting wrapping google sheets table catalog
        const idx = (_action$payload$type2 = action.payload.type) == null ? void 0 : _action$payload$type2.split('-')[1];
        const catalogToUpdate = (trimmedState == null ? void 0 : trimmedState.catalog[idx]) || {};
        catalogToUpdate[action.payload.name] = action.payload.value;
        const paramatersCatalog = {};
        // eslint-disable-next-line array-callback-return
        (_trimmedState$catalog = trimmedState.catalog) == null ? void 0 : _trimmedState$catalog.map((item) => {
          paramatersCatalog[item.name] = item.value;
        });
        return {
          ...trimmedState,
          parameters: {
            ...trimmedState.parameters,
            catalog: paramatersCatalog } };


      }
      return {
        ...trimmedState,
        parameters: {
          ...trimmedState.parameters,
          [action.payload.name]: action.payload.value } };


    case ActionType.addTableCatalogSheet:
      if (trimmedState.catalog !== undefined) {
        return {
          ...trimmedState,
          catalog: [...trimmedState.catalog, { name: '', value: '' }] };

      }
      return {
        ...trimmedState,
        catalog: [{ name: '', value: '' }] };

    case ActionType.removeTableCatalogSheet:
      (_trimmedState$catalog2 = trimmedState.catalog) == null ? void 0 : _trimmedState$catalog2.splice(action.payload.indexToDelete, 1);
      return {
        ...trimmedState };

    case ActionType.editorChange:
      return {
        ...trimmedState,
        [action.payload.name]: action.payload.json };

    case ActionType.queryChange:
      return {
        ...trimmedState,
        parameters: {
          ...trimmedState.parameters,
          query: Object.fromEntries(new (url_search_params_default())(action.payload.value)) },

        query_input: action.payload.value };

    case ActionType.textChange:
      return {
        ...trimmedState,
        [action.payload.name]: action.payload.value };

    case ActionType.fetched:
      // convert all the keys in this payload into strings
      if (action.payload.extra) {var _extra_json, _extra_json2, _extra_json3;
        extra_json = {
          ...JSON.parse(action.payload.extra || '') };

        deserializeExtraJSON = {
          ...JSON.parse(action.payload.extra || ''),
          metadata_params: JSON.stringify((_extra_json = extra_json) == null ? void 0 : _extra_json.metadata_params),
          engine_params: JSON.stringify((_extra_json2 = extra_json) == null ? void 0 : _extra_json2.engine_params),
          schemas_allowed_for_csv_upload: (_extra_json3 = extra_json) == null ? void 0 : _extra_json3.schemas_allowed_for_csv_upload };

      }
      // convert query to a string and store in query_input
      query = ((_action$payload = action.payload) == null ? void 0 : (_action$payload$param = _action$payload.parameters) == null ? void 0 : _action$payload$param.query) || {};
      query_input = Object.entries(query).
      map(([key, value]) => `${key}=${value}`).
      join('&');
      if (action.payload.encrypted_extra &&
      action.payload.configuration_method ===
      CONFIGURATION_METHOD.DYNAMIC_FORM) {var _extra_json4, _extra_json4$engine_p;
        const engineParamsCatalog = Object.keys(((_extra_json4 = extra_json) == null ? void 0 : (_extra_json4$engine_p = _extra_json4.engine_params) == null ? void 0 : _extra_json4$engine_p.catalog) || {}).map((e) => {var _extra_json5, _extra_json5$engine_p;return {
            name: e,
            value: (_extra_json5 = extra_json) == null ? void 0 : (_extra_json5$engine_p = _extra_json5.engine_params) == null ? void 0 : _extra_json5$engine_p.catalog[e] };});

        return {
          ...action.payload,
          engine: action.payload.backend || trimmedState.engine,
          configuration_method: action.payload.configuration_method,
          extra_json: deserializeExtraJSON,
          catalog: engineParamsCatalog,
          parameters: action.payload.parameters,
          query_input };

      }
      return {
        ...action.payload,
        encrypted_extra: action.payload.encrypted_extra || '',
        engine: action.payload.backend || trimmedState.engine,
        configuration_method: action.payload.configuration_method,
        extra_json: deserializeExtraJSON,
        parameters: action.payload.parameters,
        query_input };

    case ActionType.dbSelected:
      return {
        ...action.payload };

    case ActionType.configMethodChange:
      return {
        ...action.payload };

    case ActionType.reset:
    default:
      return null;}

}
const DEFAULT_TAB_KEY = '1';
const serializeExtra = (extraJson) => JSON.stringify({
  ...extraJson,
  metadata_params: JSON.parse((extraJson == null ? void 0 : extraJson.metadata_params) || '{}'),
  engine_params: JSON.parse((extraJson == null ? void 0 : extraJson.engine_params) || '{}'),
  schemas_allowed_for_csv_upload: ((extraJson == null ? void 0 : extraJson.schemas_allowed_for_csv_upload) || []).filter((schema) => schema !== '') });

const DatabaseModal = ({ addDangerToast, addSuccessToast, onDatabaseAdd, onHide, show, databaseId }) => {var _availableDbs$databas3;
  const [db, setDB] = (0,react.useReducer)(dbReducer, null);
  const [tabKey, setTabKey] = (0,react.useState)(DEFAULT_TAB_KEY);
  const [availableDbs, getAvailableDbs] = (0,hooks/* useAvailableDatabases */.cb)();
  const [validationErrors, getValidation, setValidationErrors] = (0,hooks/* useDatabaseValidation */.h1)();
  const [hasConnectedDb, setHasConnectedDb] = (0,react.useState)(false);
  const [dbName, setDbName] = (0,react.useState)('');
  const [editNewDb, setEditNewDb] = (0,react.useState)(false);
  const [isLoading, setLoading] = (0,react.useState)(false);
  const conf = (0,state/* useCommonConf */.c)();
  const dbImages = (0,hooks/* getDatabaseImages */.rM)();
  const connectionAlert = (0,hooks/* getConnectionAlert */.jb)();
  const isEditMode = !!databaseId;
  const sslForced = (0,utils_featureFlags/* isFeatureEnabled */.c)(utils_featureFlags/* FeatureFlag.FORCE_DATABASE_CONNECTIONS_SSL */.T.FORCE_DATABASE_CONNECTIONS_SSL);
  const hasAlert = connectionAlert || !!(db != null && db.engine && engineSpecificAlertMapping[db.engine]);
  const useSqlAlchemyForm = (db == null ? void 0 : db.configuration_method) === CONFIGURATION_METHOD.SQLALCHEMY_URI;
  const useTabLayout = isEditMode || useSqlAlchemyForm;
  // Database fetch logic
  const { state: { loading: dbLoading, resource: dbFetched, error: dbErrors }, fetchResource, createResource, updateResource, clearError } = (0,hooks/* useSingleViewResource */.LE)('database', (0,TranslatorSingleton.t)('database'), addDangerToast);
  const isDynamic = (engine) => {var _availableDbs$databas, _availableDbs$databas2;return (availableDbs == null ? void 0 : (_availableDbs$databas = availableDbs.databases) == null ? void 0 : (_availableDbs$databas2 = _availableDbs$databas.find((DB) => DB.backend === engine || DB.engine === engine)) == null ? void 0 : _availableDbs$databas2.parameters) !== undefined;};
  const showDBError = validationErrors || dbErrors;
  const isEmpty = (data) => data && Object.keys(data).length === 0;
  const dbModel = (availableDbs == null ? void 0 : (_availableDbs$databas3 = availableDbs.databases) == null ? void 0 : _availableDbs$databas3.find((available) =>
  // TODO: we need a centralized engine in one place
  available.engine === (isEditMode ? db == null ? void 0 : db.backend : db == null ? void 0 : db.engine))) || {};
  // Test Connection logic
  const testConnection = () => {var _db$database_name;
    if (!(db != null && db.sqlalchemy_uri)) {
      addDangerToast((0,TranslatorSingleton.t)('Please enter a SQLAlchemy URI to test'));
      return;
    }
    const connection = {
      sqlalchemy_uri: (db == null ? void 0 : db.sqlalchemy_uri) || '',
      database_name: (db == null ? void 0 : (_db$database_name = db.database_name) == null ? void 0 : _db$database_name.trim()) || undefined,
      impersonate_user: (db == null ? void 0 : db.impersonate_user) || undefined,
      extra: serializeExtra(db == null ? void 0 : db.extra_json) || undefined,
      encrypted_extra: (db == null ? void 0 : db.encrypted_extra) || '',
      server_cert: (db == null ? void 0 : db.server_cert) || undefined };

    (0,hooks/* testDatabaseConnection */.xx)(connection, addDangerToast, addSuccessToast);
  };
  const onClose = () => {
    setDB({ type: ActionType.reset });
    setHasConnectedDb(false);
    setValidationErrors(null); // reset validation errors on close
    clearError();
    setEditNewDb(false);
    onHide();
  };
  const onSave = async () => {var _dbToUpdate$parameter5;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...update } = db || {};
    // Clone DB object
    const dbToUpdate = JSON.parse(JSON.stringify(update));
    if (dbToUpdate.configuration_method === CONFIGURATION_METHOD.DYNAMIC_FORM) {
      // Validate DB before saving
      await getValidation(dbToUpdate, true);
      if (validationErrors && !isEmpty(validationErrors)) {
        return;
      }
      const parameters_schema = isEditMode ?
      dbToUpdate.parameters_schema.properties :
      dbModel == null ? void 0 : dbModel.parameters.properties;
      const additionalEncryptedExtra = JSON.parse(dbToUpdate.encrypted_extra || '{}');
      const paramConfigArray = Object.keys(parameters_schema || {});
      paramConfigArray.forEach((paramConfig) => {var _dbToUpdate$parameter;
        /*
         * Parameters that are annotated with the `x-encrypted-extra` properties should be moved to
         * `encrypted_extra`, so that they are stored encrypted in the backend when the database is
         * created or edited.
         */
        if (parameters_schema[paramConfig]['x-encrypted-extra'] && (_dbToUpdate$parameter =
        dbToUpdate.parameters) != null && _dbToUpdate$parameter[paramConfig]) {var _dbToUpdate$parameter2;
          if (typeof ((_dbToUpdate$parameter2 = dbToUpdate.parameters) == null ? void 0 : _dbToUpdate$parameter2[paramConfig]) === 'object') {var _dbToUpdate$parameter3;
            // add new encrypted extra to encrypted_extra object
            additionalEncryptedExtra[paramConfig] = (_dbToUpdate$parameter3 =
            dbToUpdate.parameters) == null ? void 0 : _dbToUpdate$parameter3[paramConfig];
            // The backend expects `encrypted_extra` as a string for historical reasons.
            dbToUpdate.parameters[paramConfig] = JSON.stringify(dbToUpdate.parameters[paramConfig]);
          } else
          {var _dbToUpdate$parameter4;
            additionalEncryptedExtra[paramConfig] = JSON.parse(((_dbToUpdate$parameter4 = dbToUpdate.parameters) == null ? void 0 : _dbToUpdate$parameter4[paramConfig]) || '{}');
          }
        }
      });
      // cast the new encrypted extra object into a string
      dbToUpdate.encrypted_extra = JSON.stringify(additionalEncryptedExtra);
      // this needs to be added by default to gsheets
      if (dbToUpdate.engine === 'gsheets') {
        dbToUpdate.impersonate_user = true;
      }
    }
    if (dbToUpdate != null && (_dbToUpdate$parameter5 = dbToUpdate.parameters) != null && _dbToUpdate$parameter5.catalog) {
      // need to stringify gsheets catalog to allow it to be seralized
      dbToUpdate.extra_json = {
        engine_params: JSON.stringify({
          catalog: dbToUpdate.parameters.catalog }) };


    }
    if (dbToUpdate != null && dbToUpdate.extra_json) {
      // convert extra_json to back to string
      dbToUpdate.extra = serializeExtra(dbToUpdate == null ? void 0 : dbToUpdate.extra_json);
    }
    if (db != null && db.id) {
      setLoading(true);
      const result = await updateResource(db.id, dbToUpdate, dbToUpdate.configuration_method === CONFIGURATION_METHOD.DYNAMIC_FORM);
      if (result) {
        if (onDatabaseAdd) {
          onDatabaseAdd();
        }
        if (!editNewDb) {
          onClose();
        }
      }
    } else
    if (db) {
      // Create
      setLoading(true);
      const dbId = await createResource(dbToUpdate, dbToUpdate.configuration_method === CONFIGURATION_METHOD.DYNAMIC_FORM);
      if (dbId) {
        setHasConnectedDb(true);
        if (onDatabaseAdd) {
          onDatabaseAdd();
        }
        if (useTabLayout) {
          // tab layout only has one step
          // so it should close immediately on save
          onClose();
        }
      }
    }
    setEditNewDb(false);
    setLoading(false);
  };
  const onChange = (type, payload) => {
    setDB({ type, payload });
  };
  // Initialize
  const fetchDB = () => {
    if (isEditMode && databaseId) {
      if (!dbLoading) {
        fetchResource(databaseId).catch((e) => addDangerToast((0,TranslatorSingleton.t)('Sorry there was an error fetching database information: %s', e.message)));
      }
    }
  };
  const setDatabaseModel = (database_name) => {
    if (database_name === 'Other') {
      // Allow users to connect to DB via legacy SQLA form
      setDB({
        type: ActionType.dbSelected,
        payload: {
          database_name,
          configuration_method: CONFIGURATION_METHOD.SQLALCHEMY_URI,
          engine: undefined } });


    } else
    {
      const selectedDbModel = availableDbs == null ? void 0 : availableDbs.databases.filter((db) => db.name === database_name)[0];
      const { engine, parameters } = selectedDbModel;
      const isDynamic = parameters !== undefined;
      setDB({
        type: ActionType.dbSelected,
        payload: {
          database_name,
          engine,
          configuration_method: isDynamic ?
          CONFIGURATION_METHOD.DYNAMIC_FORM :
          CONFIGURATION_METHOD.SQLALCHEMY_URI,
          paramProperties: parameters == null ? void 0 : parameters.properties } });


    }
    setDB({ type: ActionType.addTableCatalogSheet });
  };
  const renderAvailableSelector = () => {var _ref, _connectionAlert$ADD_;return (0,emotion_react_browser_esm.jsx)("div", { className: "available" },
    (0,emotion_react_browser_esm.jsx)("h4", { className: "available-label" }, "Or choose from a list of other databases we support:"),


    (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, "Supported databases"),
    (0,emotion_react_browser_esm.jsx)(components/* Select */.Ph, { className: "available-select", onChange: setDatabaseModel, placeholder: "Choose a database..." }, (_ref =
    [...((availableDbs == null ? void 0 : availableDbs.databases) || [])]) == null ? void 0 : _ref.
    sort((a, b) => a.name.localeCompare(b.name)).
    map((database) => (0,emotion_react_browser_esm.jsx)(components/* Select.Option */.Ph.Option, { value: database.name, key: database.name },
    database.name)),


    (0,emotion_react_browser_esm.jsx)(components/* Select.Option */.Ph.Option, { value: "Other", key: "Other" }, "Other")),



    (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { showIcon: true, closable: false, css: (theme) => antDAlertStyles(theme), type: "info", message: (connectionAlert == null ? void 0 : (_connectionAlert$ADD_ = connectionAlert.ADD_DATABASE) == null ? void 0 : _connectionAlert$ADD_.message) ||
      (0,TranslatorSingleton.t)('Want to add a new database?'), description: connectionAlert != null && connectionAlert.ADD_DATABASE ? (0,emotion_react_browser_esm.jsx)(react.Fragment, null, "Any databases that allow connections via SQL Alchemy URIs can be added.",

      ' ',
      (0,emotion_react_browser_esm.jsx)("a", { href: connectionAlert == null ? void 0 : connectionAlert.ADD_DATABASE.contact_link, target: "_blank", rel: "noopener noreferrer" },
      connectionAlert == null ? void 0 : connectionAlert.ADD_DATABASE.contact_description_link),
      ' ',
      connectionAlert == null ? void 0 : connectionAlert.ADD_DATABASE.description) :
      (0,emotion_react_browser_esm.jsx)(react.Fragment, null, "Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver",

      ' ',
      (0,emotion_react_browser_esm.jsx)("a", { href: DOCUMENTATION_LINK, target: "_blank", rel: "noopener noreferrer" }, "here"), ".") }));};





  const renderPreferredSelector = () => {var _availableDbs$databas4;return (0,emotion_react_browser_esm.jsx)("div", { className: "preferred" },
    availableDbs == null ? void 0 : (_availableDbs$databas4 = availableDbs.databases) == null ? void 0 : _availableDbs$databas4.
    filter((db) => db.preferred).
    map((database) => (0,emotion_react_browser_esm.jsx)(components_IconButton, { className: "preferred-item", onClick: () => setDatabaseModel(database.name), buttonText: database.name, icon: dbImages == null ? void 0 : dbImages[database.engine] })));};

  const handleBackButtonOnFinish = () => {
    if (dbFetched) {
      fetchResource(dbFetched.id);
    }
    setEditNewDb(true);
  };
  const handleBackButtonOnConnect = () => {
    if (editNewDb) {
      setHasConnectedDb(false);
    }
    setDB({ type: ActionType.reset });
  };
  const renderModalFooter = () => {
    if (db) {
      // if db show back + connenct
      if (!hasConnectedDb || editNewDb) {
        return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
        (0,emotion_react_browser_esm.jsx)(StyledFooterButton, { key: "back", onClick: handleBackButtonOnConnect }, "Back"),


        (0,emotion_react_browser_esm.jsx)(StyledFooterButton, { key: "submit", buttonStyle: "primary", onClick: onSave }, "Connect"));



      }
      return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)(StyledFooterButton, { key: "back", onClick: handleBackButtonOnFinish }, "Back"),


      (0,emotion_react_browser_esm.jsx)(StyledFooterButton, { key: "submit", buttonStyle: "primary", onClick: onSave }, "Finish"));



    }
    return [];
  };
  const renderEditModalFooter = () => (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(StyledFooterButton, { key: "close", onClick: onClose }, "Close"),


  (0,emotion_react_browser_esm.jsx)(StyledFooterButton, { key: "submit", buttonStyle: "primary", onClick: onSave }, "Finish"));



  (0,react.useEffect)(() => {
    if (show) {
      setTabKey(DEFAULT_TAB_KEY);
      getAvailableDbs();
      setLoading(true);
    }
    if (databaseId && show) {
      fetchDB();
    }
  }, [show, databaseId]);
  (0,react.useEffect)(() => {
    if (dbFetched) {
      setDB({
        type: ActionType.fetched,
        payload: dbFetched });

      // keep a copy of the name separate for display purposes
      // because it shouldn't change when the form is updated
      setDbName(dbFetched.database_name);
    }
  }, [dbFetched]);
  (0,react.useEffect)(() => {
    if (isLoading) {
      setLoading(false);
    }
  }, [availableDbs]);
  const tabChange = (key) => {
    setTabKey(key);
  };
  const renderStepTwoAlert = () => {var _connectionAlert$REGI, _engineSpecificAlertM, _connectionAlert$DEFA, _engineSpecificAlertM2, _connectionAlert$DEFA2;
    const { hostname } = window.location;
    let ipAlert = (connectionAlert == null ? void 0 : (_connectionAlert$REGI = connectionAlert.REGIONAL_IPS) == null ? void 0 : _connectionAlert$REGI.default) || '';
    const regionalIPs = (connectionAlert == null ? void 0 : connectionAlert.REGIONAL_IPS) || {};
    Object.entries(regionalIPs).forEach(([ipRegion, ipRange]) => {
      const regex = new RegExp(ipRegion);
      if (hostname.match(regex)) {
        ipAlert = ipRange;
      }
    });
    return (db == null ? void 0 : db.engine) && (0,emotion_react_browser_esm.jsx)(StyledAlertMargin, null,
    (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { closable: false, css: (theme) => antDAlertStyles(theme), type: "info", showIcon: true, message: ((_engineSpecificAlertM = engineSpecificAlertMapping[db.engine]) == null ? void 0 : _engineSpecificAlertM.message) || (
      connectionAlert == null ? void 0 : (_connectionAlert$DEFA = connectionAlert.DEFAULT) == null ? void 0 : _connectionAlert$DEFA.message), description: ((_engineSpecificAlertM2 = engineSpecificAlertMapping[db.engine]) == null ? void 0 : _engineSpecificAlertM2.description) ||
      (connectionAlert == null ? void 0 : (_connectionAlert$DEFA2 = connectionAlert.DEFAULT) == null ? void 0 : _connectionAlert$DEFA2.description) + ipAlert }));

  };
  const errorAlert = () => {
    if (isEmpty(dbErrors) ||
    isEmpty(validationErrors) &&
    !((validationErrors == null ? void 0 : validationErrors.error_type) in errorAlertMapping)) {
      return (0,emotion_react_browser_esm.jsx)(react.Fragment, null);
    }
    if (validationErrors) {var _errorAlertMapping$va, _errorAlertMapping$va2;
      return (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { type: "error", css: (theme) => antDErrorAlertStyles(theme), message: ((_errorAlertMapping$va = errorAlertMapping[validationErrors == null ? void 0 : validationErrors.error_type]) == null ? void 0 : _errorAlertMapping$va.message) || (
        validationErrors == null ? void 0 : validationErrors.error_type), description: ((_errorAlertMapping$va2 = errorAlertMapping[validationErrors == null ? void 0 : validationErrors.error_type]) == null ? void 0 : _errorAlertMapping$va2.description) ||
        JSON.stringify(validationErrors), showIcon: true, closable: false });
    }
    const message = typeof dbErrors === 'object' ? Object.values(dbErrors) : [];
    return (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { type: "error", css: (theme) => antDErrorAlertStyles(theme), message: "Database Creation Error", description: (message == null ? void 0 : message[0]) || dbErrors });
  };
  const renderFinishState = () => {
    if (!editNewDb) {
      return (0,emotion_react_browser_esm.jsx)(DatabaseModal_ExtraOptions, { db: db, onInputChange: ({ target }) => onChange(ActionType.inputChange, {
          type: target.type,
          name: target.name,
          checked: target.checked,
          value: target.value }),
        onTextChange: ({ target }) => onChange(ActionType.textChange, {
          name: target.name,
          value: target.value }),
        onEditorChange: (payload) => onChange(ActionType.editorChange, payload), onExtraInputChange: ({ target }) => {
          onChange(ActionType.extraInputChange, {
            type: target.type,
            name: target.name,
            checked: target.checked,
            value: target.value });

        }, onExtraEditorChange: (payload) => onChange(ActionType.extraEditorChange, payload) });
    }
    return (0,emotion_react_browser_esm.jsx)(DatabaseModal_DatabaseConnectionForm, { isEditMode: true, sslForced: sslForced, dbModel: dbModel, db: db, onParametersChange: ({ target }) => onChange(ActionType.parametersChange, {
        type: target.type,
        name: target.name,
        checked: target.checked,
        value: target.value }),
      onChange: ({ target }) => onChange(ActionType.textChange, {
        name: target.name,
        value: target.value }),
      onQueryChange: ({ target }) => onChange(ActionType.queryChange, {
        name: target.name,
        value: target.value }),
      onAddTableCatalog: () => setDB({ type: ActionType.addTableCatalogSheet }), onRemoveTableCatalog: (idx) => setDB({
        type: ActionType.removeTableCatalogSheet,
        payload: { indexToDelete: idx } }),
      getValidation: () => getValidation(db), validationErrors: validationErrors });
  };
  return useTabLayout ? (0,emotion_react_browser_esm.jsx)(Modal/* default */.Z, { css: (theme) => [
    antDTabsStyles,
    antDModalNoPaddingStyles,
    antDModalStyles(theme),
    formHelperStyles(theme),
    formStyles(theme)],
    name: "database", onHandledPrimaryAction: onSave, onHide: onClose, primaryButtonName: isEditMode ? (0,TranslatorSingleton.t)('Save') : (0,TranslatorSingleton.t)('Connect'), width: "500px", centered: true, show: show, title: (0,emotion_react_browser_esm.jsx)("h4", null, isEditMode ? (0,TranslatorSingleton.t)('Edit database') : (0,TranslatorSingleton.t)('Connect a database')), footer: isEditMode ? renderEditModalFooter() : renderModalFooter() },
  (0,emotion_react_browser_esm.jsx)(StyledStickyHeader, null,
  (0,emotion_react_browser_esm.jsx)(TabHeader, null,
  (0,emotion_react_browser_esm.jsx)(DatabaseModal_ModalHeader, { isLoading: isLoading, isEditMode: isEditMode, useSqlAlchemyForm: useSqlAlchemyForm, hasConnectedDb: hasConnectedDb, db: db, dbName: dbName, dbModel: dbModel }))),


  (0,emotion_react_browser_esm.jsx)(Tabs/* default */.ZP, { defaultActiveKey: DEFAULT_TAB_KEY, activeKey: tabKey, onTabClick: tabChange, animated: { inkBar: true, tabPane: true } },
  (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { tab: (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('Basic')), key: "1" },
  useSqlAlchemyForm ? (0,emotion_react_browser_esm.jsx)(StyledAlignment, null,
  (0,emotion_react_browser_esm.jsx)(SqlAlchemyForm, { db: db, onInputChange: ({ target }) => onChange(ActionType.inputChange, {
      type: target.type,
      name: target.name,
      checked: target.checked,
      value: target.value }),
    conf: conf, testConnection: testConnection, isEditMode: isEditMode }),
  isDynamic((db == null ? void 0 : db.backend) || (db == null ? void 0 : db.engine)) && !isEditMode && (0,emotion_react_browser_esm.jsx)("div", { css: (theme) => infoTooltip(theme) },
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "link", onClick: () => setDB({
      type: ActionType.configMethodChange,
      payload: {
        database_name: db == null ? void 0 : db.database_name,
        configuration_method: CONFIGURATION_METHOD.DYNAMIC_FORM,
        engine: db == null ? void 0 : db.engine } }),

    css: (theme) => alchemyButtonLinkStyles(theme) }, "Connect this database using the dynamic form instead"),


  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('Click this link to switch to an alternate form that exposes only the required fields needed to connect this database.'), viewBox: "0 -6 24 24" }))) :

  (0,emotion_react_browser_esm.jsx)(DatabaseModal_DatabaseConnectionForm, { isEditMode: true, sslForced: sslForced, dbModel: dbModel, db: db, onParametersChange: ({ target }) => onChange(ActionType.parametersChange, {
      type: target.type,
      name: target.name,
      checked: target.checked,
      value: target.value }),
    onChange: ({ target }) => onChange(ActionType.textChange, {
      name: target.name,
      value: target.value }),
    onQueryChange: ({ target }) => onChange(ActionType.queryChange, {
      name: target.name,
      value: target.value }),
    onAddTableCatalog: () => setDB({ type: ActionType.addTableCatalogSheet }), onRemoveTableCatalog: (idx) => setDB({
      type: ActionType.removeTableCatalogSheet,
      payload: { indexToDelete: idx } }),
    getValidation: () => getValidation(db), validationErrors: validationErrors }),
  !isEditMode && (0,emotion_react_browser_esm.jsx)(StyledAlertMargin, null,
  (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { closable: false, css: (theme) => antDAlertStyles(theme), message: "Additional fields may be required", showIcon: true, description: (0,emotion_react_browser_esm.jsx)(react.Fragment, null, "Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has",


    ' ',
    (0,emotion_react_browser_esm.jsx)("a", { href: DOCUMENTATION_LINK, target: "_blank", rel: "noopener noreferrer", className: "additional-fields-alert-description" }, "here"), "."),



    type: "info" }))),


  (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { tab: (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('Advanced')), key: "2" },
  (0,emotion_react_browser_esm.jsx)(DatabaseModal_ExtraOptions, { db: db, onInputChange: ({ target }) => onChange(ActionType.inputChange, {
      type: target.type,
      name: target.name,
      checked: target.checked,
      value: target.value }),
    onTextChange: ({ target }) => onChange(ActionType.textChange, {
      name: target.name,
      value: target.value }),
    onEditorChange: (payload) => onChange(ActionType.editorChange, payload), onExtraInputChange: ({ target }) => {
      onChange(ActionType.extraInputChange, {
        type: target.type,
        name: target.name,
        checked: target.checked,
        value: target.value });

    }, onExtraEditorChange: (payload) => {
      onChange(ActionType.extraEditorChange, payload);
    } }),
  showDBError && errorAlert()))) :


  (0,emotion_react_browser_esm.jsx)(Modal/* default */.Z, { css: (theme) => [
    antDModalNoPaddingStyles,
    antDModalStyles(theme),
    formHelperStyles(theme),
    formStyles(theme)],
    name: "database", onHandledPrimaryAction: onSave, onHide: onClose, primaryButtonName: hasConnectedDb ? (0,TranslatorSingleton.t)('Finish') : (0,TranslatorSingleton.t)('Connect'), width: "500px", centered: true, show: show, title: (0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Connect a database')), footer: renderModalFooter() },
  hasConnectedDb ? (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(DatabaseModal_ModalHeader, { isLoading: isLoading, isEditMode: isEditMode, useSqlAlchemyForm: useSqlAlchemyForm, hasConnectedDb: hasConnectedDb, db: db, dbName: dbName, dbModel: dbModel, editNewDb: editNewDb }),
  renderFinishState()) :
  (0,emotion_react_browser_esm.jsx)(react.Fragment, null,

  !isLoading && (
  !db ? (0,emotion_react_browser_esm.jsx)(SelectDatabaseStyles, null,
  (0,emotion_react_browser_esm.jsx)(DatabaseModal_ModalHeader, { isLoading: isLoading, isEditMode: isEditMode, useSqlAlchemyForm: useSqlAlchemyForm, hasConnectedDb: hasConnectedDb, db: db, dbName: dbName, dbModel: dbModel }),
  renderPreferredSelector(),
  renderAvailableSelector()) :
  (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(DatabaseModal_ModalHeader, { isLoading: isLoading, isEditMode: isEditMode, useSqlAlchemyForm: useSqlAlchemyForm, hasConnectedDb: hasConnectedDb, db: db, dbName: dbName, dbModel: dbModel }),
  hasAlert && renderStepTwoAlert(),
  (0,emotion_react_browser_esm.jsx)(DatabaseModal_DatabaseConnectionForm, { db: db, sslForced: sslForced, dbModel: dbModel, onAddTableCatalog: () => {
      setDB({ type: ActionType.addTableCatalogSheet });
    }, onQueryChange: ({ target }) => onChange(ActionType.queryChange, {
      name: target.name,
      value: target.value }),
    onRemoveTableCatalog: (idx) => {
      setDB({
        type: ActionType.removeTableCatalogSheet,
        payload: { indexToDelete: idx } });

    }, onParametersChange: ({ target }) => onChange(ActionType.parametersChange, {
      type: target.type,
      name: target.name,
      checked: target.checked,
      value: target.value }),
    onChange: ({ target }) => onChange(ActionType.textChange, {
      name: target.name,
      value: target.value }),
    getValidation: () => getValidation(db), validationErrors: validationErrors }),
  (0,emotion_react_browser_esm.jsx)("div", { css: (theme) => infoTooltip(theme) },
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "link", onClick: () => setDB({
      type: ActionType.configMethodChange,
      payload: {
        engine: db.engine,
        configuration_method: CONFIGURATION_METHOD.SQLALCHEMY_URI,
        database_name: db.database_name } }),

    css: buttonLinkStyles }, "Connect this database with a SQLAlchemy URI string instead"),


  (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: (0,TranslatorSingleton.t)('Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually.'), viewBox: "0 -6 24 24" })),


  showDBError && errorAlert()))),


  isLoading && (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null));

};
/* harmony default export */ const database_DatabaseModal = ((0,withToasts/* default */.Z)(DatabaseModal));
;// CONCATENATED MODULE: ./src/views/CRUD/data/database/DatabaseList.tsx
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
















const PAGE_SIZE = 25;
const PASSWORDS_NEEDED_MESSAGE = (0,TranslatorSingleton.t)('The passwords for the databases below are needed in order to ' +
'import them. Please note that the "Secure Extra" and "Certificate" ' +
'sections of the database configuration are not present in export ' +
'files, and should be added manually after the import if they are needed.');
const CONFIRM_OVERWRITE_MESSAGE = (0,TranslatorSingleton.t)('You are importing one or more databases that already exist. ' +
'Overwriting might cause you to lose some of your work. Are you ' +
'sure you want to overwrite?');
const IconCheck = (0,style/* styled */.iK)(Icons/* default.Check */.Z.Check)`
  color: ${({ theme }) => theme.colors.grayscale.dark1};
`;
const IconCancelX = (0,style/* styled */.iK)(Icons/* default.CancelX */.Z.CancelX)`
  color: ${({ theme }) => theme.colors.grayscale.dark1};
`;
const Actions = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.grayscale.base};
`;
function BooleanDisplay({ value }) {
  return value ? (0,emotion_react_browser_esm.jsx)(IconCheck, null) : (0,emotion_react_browser_esm.jsx)(IconCancelX, null);
}
function DatabaseList({ addDangerToast, addSuccessToast }) {
  const { state: { loading, resourceCount: databaseCount, resourceCollection: databases }, hasPerm, fetchData, refreshData } = (0,hooks/* useListViewResource */.Yi)('database', (0,TranslatorSingleton.t)('database'), addDangerToast);
  const [databaseModalOpen, setDatabaseModalOpen] = (0,react.useState)(false);
  const [databaseCurrentlyDeleting, setDatabaseCurrentlyDeleting] = (0,react.useState)(null);
  const [currentDatabase, setCurrentDatabase] = (0,react.useState)(null);
  const [importingDatabase, showImportModal] = (0,react.useState)(false);
  const [passwordFields, setPasswordFields] = (0,react.useState)([]);
  const [preparingExport, setPreparingExport] = (0,react.useState)(false);
  const openDatabaseImportModal = () => {
    showImportModal(true);
  };
  const closeDatabaseImportModal = () => {
    showImportModal(false);
  };
  const handleDatabaseImport = () => {
    showImportModal(false);
    refreshData();
  };
  const openDatabaseDeleteModal = (database) => SupersetClient/* default.get */.Z.get({
    endpoint: `/api/v1/database/${database.id}/related_objects/` }).

  then(({ json = {} }) => {
    setDatabaseCurrentlyDeleting({
      ...database,
      chart_count: json.charts.count,
      dashboard_count: json.dashboards.count });

  }).
  catch((0,utils/* createErrorHandler */.v$)((errMsg) => (0,TranslatorSingleton.t)('An error occurred while fetching database related data: %s', errMsg)));
  function handleDatabaseDelete({ id, database_name: dbName }) {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/database/${id}` }).
    then(() => {
      refreshData();
      addSuccessToast((0,TranslatorSingleton.t)('Deleted: %s', dbName));
      // Close delete modal
      setDatabaseCurrentlyDeleting(null);
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting %s: %s', dbName, errMsg))));
  }
  function handleDatabaseEditModal({ database = null, modalOpen = false } = {}) {
    // Set database and modal
    setCurrentDatabase(database);
    setDatabaseModalOpen(modalOpen);
  }
  const canCreate = hasPerm('can_write');
  const canEdit = hasPerm('can_write');
  const canDelete = hasPerm('can_write');
  const canExport = hasPerm('can_read') && (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.VERSIONED_EXPORT */.T.VERSIONED_EXPORT);
  const menuData = {
    activeChild: 'Databases',
    ...common/* commonMenuData */.Y };

  if (canCreate) {
    menuData.buttons = [
    {
      'data-test': 'btn-create-database',
      name: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), " ", (0,TranslatorSingleton.t)('Database'), ' '),

      buttonStyle: 'primary',
      onClick: () => {
        // Ensure modal will be opened in add mode
        handleDatabaseEditModal({ modalOpen: true });
      } }];


    if ((0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.VERSIONED_EXPORT */.T.VERSIONED_EXPORT)) {
      menuData.buttons.push({
        name: (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "import-tooltip", title: (0,TranslatorSingleton.t)('Import databases'), placement: "bottomRight" },
        (0,emotion_react_browser_esm.jsx)(Icons/* default.Import */.Z.Import, null)),

        buttonStyle: 'link',
        onClick: openDatabaseImportModal });

    }
  }
  function handleDatabaseExport(database) {
    if (database.id === undefined) {
      return;
    }
    (0,utils_export/* default */.Z)('database', [database.id], () => {
      setPreparingExport(false);
    });
    setPreparingExport(true);
  }
  const initialSort = [{ id: 'changed_on_delta_humanized', desc: true }];
  const columns = (0,react.useMemo)(() => [
  {
    accessor: 'database_name',
    Header: (0,TranslatorSingleton.t)('Database') },

  {
    accessor: 'backend',
    Header: (0,TranslatorSingleton.t)('Backend'),
    size: 'lg',
    disableSortBy: true // TODO: api support for sorting by 'backend'
  },
  {
    accessor: 'allow_run_async',
    Header: (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "allow-run-async-header-tooltip", title: (0,TranslatorSingleton.t)('Asynchronous query execution'), placement: "top" },
    (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('AQE'))),

    Cell: ({ row: { original: { allow_run_async: allowRunAsync } } }) => (0,emotion_react_browser_esm.jsx)(BooleanDisplay, { value: allowRunAsync }),
    size: 'sm' },

  {
    accessor: 'allow_dml',
    Header: (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "allow-dml-header-tooltip", title: (0,TranslatorSingleton.t)('Allow data manipulation language'), placement: "top" },
    (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('DML'))),

    Cell: ({ row: { original: { allow_dml: allowDML } } }) => (0,emotion_react_browser_esm.jsx)(BooleanDisplay, { value: allowDML }),
    size: 'sm' },

  {
    accessor: 'allow_csv_upload',
    Header: (0,TranslatorSingleton.t)('CSV upload'),
    Cell: ({ row: { original: { allow_csv_upload: allowCSVUpload } } }) => (0,emotion_react_browser_esm.jsx)(BooleanDisplay, { value: allowCSVUpload }),
    size: 'md' },

  {
    accessor: 'expose_in_sqllab',
    Header: (0,TranslatorSingleton.t)('Expose in SQL Lab'),
    Cell: ({ row: { original: { expose_in_sqllab: exposeInSqllab } } }) => (0,emotion_react_browser_esm.jsx)(BooleanDisplay, { value: exposeInSqllab }),
    size: 'md' },

  {
    accessor: 'created_by',
    disableSortBy: true,
    Header: (0,TranslatorSingleton.t)('Created by'),
    Cell: ({ row: { original: { created_by: createdBy } } }) => createdBy ? `${createdBy.first_name} ${createdBy.last_name}` : '',
    size: 'xl' },

  {
    Cell: ({ row: { original: { changed_on_delta_humanized: changedOn } } }) => changedOn,
    Header: (0,TranslatorSingleton.t)('Last modified'),
    accessor: 'changed_on_delta_humanized',
    size: 'xl' },

  {
    Cell: ({ row: { original } }) => {
      const handleEdit = () => handleDatabaseEditModal({ database: original, modalOpen: true });
      const handleDelete = () => openDatabaseDeleteModal(original);
      const handleExport = () => handleDatabaseExport(original);
      if (!canEdit && !canDelete && !canExport) {
        return null;
      }
      return (0,emotion_react_browser_esm.jsx)(Actions, { className: "actions" },
      canDelete && (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: 0, className: "action-button", onClick: handleDelete },
      (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "delete-action-tooltip", title: (0,TranslatorSingleton.t)('Delete database'), placement: "bottom" },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.Trash */.Z.Trash, null))),


      canExport && (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "export-action-tooltip", title: (0,TranslatorSingleton.t)('Export'), placement: "bottom" },
      (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: 0, className: "action-button", onClick: handleExport },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.Share */.Z.Share, null))),


      canEdit && (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "edit-action-tooltip", title: (0,TranslatorSingleton.t)('Edit'), placement: "bottom" },
      (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: 0, className: "action-button", onClick: handleEdit },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.EditAlt */.Z.EditAlt, null))));



    },
    Header: (0,TranslatorSingleton.t)('Actions'),
    id: 'actions',
    hidden: !canEdit && !canDelete,
    disableSortBy: true }],

  [canDelete, canEdit, canExport]);
  const filters = (0,react.useMemo)(() => [
  {
    Header: (0,TranslatorSingleton.t)('Expose in SQL Lab'),
    id: 'expose_in_sqllab',
    input: 'select',
    operator: ListView/* FilterOperator.equals */.p.equals,
    unfilteredLabel: 'All',
    selects: [
    { label: 'Yes', value: true },
    { label: 'No', value: false }] },


  {
    Header: (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "allow-run-async-filter-header-tooltip", title: (0,TranslatorSingleton.t)('Asynchronous query execution'), placement: "top" },
    (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('AQE'))),

    id: 'allow_run_async',
    input: 'select',
    operator: ListView/* FilterOperator.equals */.p.equals,
    unfilteredLabel: 'All',
    selects: [
    { label: 'Yes', value: true },
    { label: 'No', value: false }] },


  {
    Header: (0,TranslatorSingleton.t)('Search'),
    id: 'database_name',
    input: 'search',
    operator: ListView/* FilterOperator.contains */.p.contains }],

  []);
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(SubMenu/* default */.Z, menuData),
  (0,emotion_react_browser_esm.jsx)(database_DatabaseModal, { databaseId: currentDatabase == null ? void 0 : currentDatabase.id, show: databaseModalOpen, onHide: handleDatabaseEditModal, onDatabaseAdd: () => {
      refreshData();
    } }),
  databaseCurrentlyDeleting && (0,emotion_react_browser_esm.jsx)(DeleteModal/* default */.Z, { description: (0,TranslatorSingleton.t)('The database %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the database will break those objects.', databaseCurrentlyDeleting.database_name, databaseCurrentlyDeleting.chart_count, databaseCurrentlyDeleting.dashboard_count), onConfirm: () => {
      if (databaseCurrentlyDeleting) {
        handleDatabaseDelete(databaseCurrentlyDeleting);
      }
    }, onHide: () => setDatabaseCurrentlyDeleting(null), open: true, title: (0,TranslatorSingleton.t)('Delete Database?') }),

  (0,emotion_react_browser_esm.jsx)(ListView/* default */.Z, { className: "database-list-view", columns: columns, count: databaseCount, data: databases, fetchData: fetchData, filters: filters, initialSort: initialSort, loading: loading, pageSize: PAGE_SIZE }),

  (0,emotion_react_browser_esm.jsx)(ImportModal/* default */.Z, { resourceName: "database", resourceLabel: (0,TranslatorSingleton.t)('database'), passwordsNeededMessage: PASSWORDS_NEEDED_MESSAGE, confirmOverwriteMessage: CONFIRM_OVERWRITE_MESSAGE, addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, onModelImport: handleDatabaseImport, show: importingDatabase, onHide: closeDatabaseImportModal, passwordFields: passwordFields, setPasswordFields: setPasswordFields }),
  preparingExport && (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null));

}
/* harmony default export */ const database_DatabaseList = ((0,withToasts/* default */.Z)(DatabaseList));

/***/ }),

/***/ 1483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useCommonConf)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37703);
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

function useCommonConf() {
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useSelector */ .v9)((state) => {var _state$common;return state == null ? void 0 : (_state$common = state.common) == null ? void 0 : _state$common.conf;});
}

/***/ })

}]);