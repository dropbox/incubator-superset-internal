"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[9173],{

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

/***/ 29848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ActionsBar)
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




const StyledActions = _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .styled.span */ .iK.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.primary.base};
      }
    }
  }
`;
const ActionWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .styled.span */ .iK.span`
  color: ${({ theme }) => theme.colors.grayscale.base};
`;
function ActionsBar({ actions }) {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledActions, { className: "actions" },
  actions.map((action, index) => {
    const ActionIcon = src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[action.icon];
    if (action.tooltip) {
      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__/* .Tooltip */ .u, { id: `${action.label}-tooltip`, title: action.tooltip, placement: action.placement, key: index },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionWrapper, { role: "button", tabIndex: 0, className: "action-button", onClick: action.onClick },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionIcon, null)));


    }
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionWrapper, { role: "button", tabIndex: 0, className: "action-button", onClick: action.onClick, key: index },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionIcon, null));

  }));

}

/***/ }),

/***/ 49588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ savedquery_SavedQueryList)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/views/CRUD/utils.tsx
var utils = __webpack_require__(40768);
// EXTERNAL MODULE: ./src/components/Popover/index.tsx
var Popover = __webpack_require__(76697);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/views/CRUD/hooks.ts
var hooks = __webpack_require__(34858);
// EXTERNAL MODULE: ./src/components/ConfirmStatusChange/index.tsx
var ConfirmStatusChange = __webpack_require__(19259);
// EXTERNAL MODULE: ./src/utils/export.ts
var utils_export = __webpack_require__(32228);
// EXTERNAL MODULE: ./src/components/Menu/SubMenu.tsx
var SubMenu = __webpack_require__(62753);
// EXTERNAL MODULE: ./src/components/ListView/index.ts + 11 modules
var ListView = __webpack_require__(9678);
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(38703);
// EXTERNAL MODULE: ./src/components/DeleteModal/index.tsx
var DeleteModal = __webpack_require__(17198);
// EXTERNAL MODULE: ./src/components/ListView/ActionsBar.tsx
var ActionsBar = __webpack_require__(29848);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./src/views/CRUD/data/common.ts
var common = __webpack_require__(95413);
// EXTERNAL MODULE: ./src/utils/copy.ts
var copy = __webpack_require__(10222);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./src/components/ImportModal/index.tsx
var ImportModal = __webpack_require__(27989);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/views/CRUD/data/components/SyntaxHighlighterCopy/index.tsx
var SyntaxHighlighterCopy = __webpack_require__(31673);
// EXTERNAL MODULE: ./src/views/CRUD/data/hooks.ts
var data_hooks = __webpack_require__(14025);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/views/CRUD/data/savedquery/SavedQueryPreviewModal.tsx
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







const QueryTitle = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.secondary.light2};
  font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
  margin-bottom: 0;
  text-transform: uppercase;
`;
const QueryLabel = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.grayscale.dark2};
  font-size: ${({ theme }) => theme.typography.sizes.m - 1}px;
  padding: 4px 0 16px 0;
`;
const StyledModal = (0,style/* styled */.iK)(Modal/* default */.Z)`
  .ant-modal-content {
  }

  .ant-modal-body {
    padding: 24px;
  }

  pre {
    font-size: ${({ theme }) => theme.typography.sizes.xs}px;
    font-weight: ${({ theme }) => theme.typography.weights.normal};
    line-height: ${({ theme }) => theme.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`;
const SavedQueryPreviewModal = ({ fetchData, onHide, openInSqlLab, queries, savedQuery, show, addDangerToast, addSuccessToast }) => {
  const { handleKeyPress, handleDataChange, disablePrevious, disableNext } = (0,data_hooks/* useQueryPreviewState */.C)({
    queries,
    currentQueryId: savedQuery.id,
    fetchData });

  return (0,emotion_react_browser_esm.jsx)("div", { role: "none", onKeyUp: handleKeyPress },
  (0,emotion_react_browser_esm.jsx)(StyledModal, { onHide: onHide, show: show, title: (0,TranslatorSingleton.t)('Query preview'), footer: [
    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { key: "previous-saved-query", disabled: disablePrevious, onClick: () => handleDataChange(true) },
    (0,TranslatorSingleton.t)('Previous')),

    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { key: "next-saved-query", disabled: disableNext, onClick: () => handleDataChange(false) },
    (0,TranslatorSingleton.t)('Next')),

    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { key: "open-in-sql-lab", buttonStyle: "primary", onClick: () => openInSqlLab(savedQuery.id) },
    (0,TranslatorSingleton.t)('Open in SQL Lab'))] },


  (0,emotion_react_browser_esm.jsx)(QueryTitle, null, (0,TranslatorSingleton.t)('Query name')),
  (0,emotion_react_browser_esm.jsx)(QueryLabel, null, savedQuery.label),
  (0,emotion_react_browser_esm.jsx)(SyntaxHighlighterCopy/* default */.Z, { language: "sql", addDangerToast: addDangerToast, addSuccessToast: addSuccessToast },
  savedQuery.sql || '')));



};
/* harmony default export */ const savedquery_SavedQueryPreviewModal = ((0,withToasts/* default */.Z)(SavedQueryPreviewModal));
;// CONCATENATED MODULE: ./src/views/CRUD/data/savedquery/SavedQueryList.tsx
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
'import them together with the saved queries. Please note that the ' +
'"Secure Extra" and "Certificate" sections of ' +
'the database configuration are not present in export files, and ' +
'should be added manually after the import if they are needed.');
const CONFIRM_OVERWRITE_MESSAGE = (0,TranslatorSingleton.t)('You are importing one or more saved queries that already exist. ' +
'Overwriting might cause you to lose some of your work. Are you ' +
'sure you want to overwrite?');
const StyledTableLabel = style/* styled.div */.iK.div`
  .count {
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`;
const StyledPopoverItem = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.grayscale.dark2};
`;
function SavedQueryList({ addDangerToast, addSuccessToast, user }) {
  const { state: { loading, resourceCount: queryCount, resourceCollection: queries, bulkSelectEnabled }, hasPerm, fetchData, toggleBulkSelect, refreshData } = (0,hooks/* useListViewResource */.Yi)('saved_query', (0,TranslatorSingleton.t)('Saved queries'), addDangerToast);
  const [queryCurrentlyDeleting, setQueryCurrentlyDeleting] = (0,react.useState)(null);
  const [savedQueryCurrentlyPreviewing, setSavedQueryCurrentlyPreviewing] = (0,react.useState)(null);
  const [importingSavedQuery, showImportModal] = (0,react.useState)(false);
  const [passwordFields, setPasswordFields] = (0,react.useState)([]);
  const [preparingExport, setPreparingExport] = (0,react.useState)(false);
  const openSavedQueryImportModal = () => {
    showImportModal(true);
  };
  const closeSavedQueryImportModal = () => {
    showImportModal(false);
  };
  const handleSavedQueryImport = () => {
    showImportModal(false);
    refreshData();
  };
  const canCreate = hasPerm('can_write');
  const canEdit = hasPerm('can_write');
  const canDelete = hasPerm('can_write');
  const canExport = hasPerm('can_read') && (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.VERSIONED_EXPORT */.T.VERSIONED_EXPORT);
  const openNewQuery = () => {
    window.open(`${window.location.origin}/superset/sqllab?new=true`);
  };
  const handleSavedQueryPreview = (0,react.useCallback)((id) => {
    SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/saved_query/${id}` }).
    then(({ json = {} }) => {
      setSavedQueryCurrentlyPreviewing({ ...json.result });
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue previewing the selected query %s', errMsg))));
  }, [addDangerToast]);
  const menuData = {
    activeChild: 'Saved queries',
    ...common/* commonMenuData */.Y };

  const subMenuButtons = [];
  if (canDelete) {
    subMenuButtons.push({
      name: (0,TranslatorSingleton.t)('Bulk select'),
      onClick: toggleBulkSelect,
      buttonStyle: 'secondary' });

  }
  subMenuButtons.push({
    name: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), " ", (0,TranslatorSingleton.t)('Query')),

    onClick: openNewQuery,
    buttonStyle: 'primary' });

  if (canCreate && (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.VERSIONED_EXPORT */.T.VERSIONED_EXPORT)) {
    subMenuButtons.push({
      name: (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "import-tooltip", title: (0,TranslatorSingleton.t)('Import queries'), placement: "bottomRight" },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.Import */.Z.Import, null)),

      buttonStyle: 'link',
      onClick: openSavedQueryImportModal,
      'data-test': 'import-button' });

  }
  menuData.buttons = subMenuButtons;
  // Action methods
  const openInSqlLab = (id) => {
    window.open(`${window.location.origin}/superset/sqllab?savedQueryId=${id}`);
  };
  const copyQueryLink = (0,react.useCallback)((id) => {
    (0,copy/* default */.Z)(`${window.location.origin}/superset/sqllab?savedQueryId=${id}`).
    then(() => {
      addSuccessToast((0,TranslatorSingleton.t)('Link Copied!'));
    }).
    catch(() => {
      addDangerToast((0,TranslatorSingleton.t)('Sorry, your browser does not support copying.'));
    });
  }, [addDangerToast, addSuccessToast]);
  const handleQueryDelete = ({ id, label }) => {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/saved_query/${id}` }).
    then(() => {
      refreshData();
      setQueryCurrentlyDeleting(null);
      addSuccessToast((0,TranslatorSingleton.t)('Deleted: %s', label));
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting %s: %s', label, errMsg))));
  };
  const handleBulkSavedQueryExport = (savedQueriesToExport) => {
    const ids = savedQueriesToExport.map(({ id }) => id);
    (0,utils_export/* default */.Z)('saved_query', ids, () => {
      setPreparingExport(false);
    });
    setPreparingExport(true);
  };
  const handleBulkQueryDelete = (queriesToDelete) => {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/saved_query/?q=${rison_default().encode(queriesToDelete.map(({ id }) => id))}` }).
    then(({ json = {} }) => {
      refreshData();
      addSuccessToast(json.message);
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting the selected queries: %s', errMsg))));
  };
  const initialSort = [{ id: 'changed_on_delta_humanized', desc: true }];
  const columns = (0,react.useMemo)(() => [
  {
    accessor: 'label',
    Header: (0,TranslatorSingleton.t)('Name') },

  {
    accessor: 'database.database_name',
    Header: (0,TranslatorSingleton.t)('Database'),
    size: 'xl' },

  {
    accessor: 'database',
    hidden: true,
    disableSortBy: true },

  {
    accessor: 'schema',
    Header: (0,TranslatorSingleton.t)('Schema'),
    size: 'xl' },

  {
    Cell: ({ row: { original: { sql_tables: tables = [] } } }) => {
      const names = tables.map((table) => table.table);
      const main = (names == null ? void 0 : names.shift()) || '';
      if (names.length) {
        return (0,emotion_react_browser_esm.jsx)(StyledTableLabel, null,
        (0,emotion_react_browser_esm.jsx)("span", null, main),
        (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, { placement: "right", title: (0,TranslatorSingleton.t)('TABLES'), trigger: "click", content: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
          names.map((name) => (0,emotion_react_browser_esm.jsx)(StyledPopoverItem, { key: name }, name))) },

        (0,emotion_react_browser_esm.jsx)("span", { className: "count" }, "(+", names.length, ")")));


      }
      return main;
    },
    accessor: 'sql_tables',
    Header: (0,TranslatorSingleton.t)('Tables'),
    size: 'xl',
    disableSortBy: true },

  {
    Cell: ({ row: { original: { created_on: createdOn } } }) => {
      const date = new Date(createdOn);
      const utc = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
      return moment_default()(utc).fromNow();
    },
    Header: (0,TranslatorSingleton.t)('Created on'),
    accessor: 'created_on',
    size: 'xl' },

  {
    Cell: ({ row: { original: { changed_on_delta_humanized: changedOn } } }) => changedOn,
    Header: (0,TranslatorSingleton.t)('Modified'),
    accessor: 'changed_on_delta_humanized',
    size: 'xl' },

  {
    Cell: ({ row: { original } }) => {
      const handlePreview = () => {
        handleSavedQueryPreview(original.id);
      };
      const handleEdit = () => openInSqlLab(original.id);
      const handleCopy = () => copyQueryLink(original.id);
      const handleExport = () => handleBulkSavedQueryExport([original]);
      const handleDelete = () => setQueryCurrentlyDeleting(original);
      const actions = [
      {
        label: 'preview-action',
        tooltip: (0,TranslatorSingleton.t)('Query preview'),
        placement: 'bottom',
        icon: 'Binoculars',
        onClick: handlePreview },

      canEdit && {
        label: 'edit-action',
        tooltip: (0,TranslatorSingleton.t)('Edit query'),
        placement: 'bottom',
        icon: 'Edit',
        onClick: handleEdit },

      {
        label: 'copy-action',
        tooltip: (0,TranslatorSingleton.t)('Copy query URL'),
        placement: 'bottom',
        icon: 'Copy',
        onClick: handleCopy },

      canExport && {
        label: 'export-action',
        tooltip: (0,TranslatorSingleton.t)('Export query'),
        placement: 'bottom',
        icon: 'Share',
        onClick: handleExport },

      canDelete && {
        label: 'delete-action',
        tooltip: (0,TranslatorSingleton.t)('Delete query'),
        placement: 'bottom',
        icon: 'Trash',
        onClick: handleDelete }].

      filter((item) => !!item);
      return (0,emotion_react_browser_esm.jsx)(ActionsBar/* default */.Z, { actions: actions });
    },
    Header: (0,TranslatorSingleton.t)('Actions'),
    id: 'actions',
    disableSortBy: true }],

  [canDelete, canEdit, canExport, copyQueryLink, handleSavedQueryPreview]);
  const filters = (0,react.useMemo)(() => [
  {
    Header: (0,TranslatorSingleton.t)('Database'),
    id: 'database',
    input: 'select',
    operator: ListView/* FilterOperator.relationOneMany */.p.relationOneMany,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchRelated */.tm)('saved_query', 'database', (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching dataset datasource values: %s', errMsg)))),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('Schema'),
    id: 'schema',
    input: 'select',
    operator: ListView/* FilterOperator.equals */.p.equals,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchDistinct */.wk)('saved_query', 'schema', (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching schema values: %s', errMsg)))),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('Search'),
    id: 'label',
    input: 'search',
    operator: ListView/* FilterOperator.allText */.p.allText }],

  [addDangerToast]);
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(SubMenu/* default */.Z, menuData),
  queryCurrentlyDeleting && (0,emotion_react_browser_esm.jsx)(DeleteModal/* default */.Z, { description: (0,TranslatorSingleton.t)('This action will permanently delete the saved query.'), onConfirm: () => {
      if (queryCurrentlyDeleting) {
        handleQueryDelete(queryCurrentlyDeleting);
      }
    }, onHide: () => setQueryCurrentlyDeleting(null), open: true, title: (0,TranslatorSingleton.t)('Delete Query?') }),
  savedQueryCurrentlyPreviewing && (0,emotion_react_browser_esm.jsx)(savedquery_SavedQueryPreviewModal, { fetchData: handleSavedQueryPreview, onHide: () => setSavedQueryCurrentlyPreviewing(null), savedQuery: savedQueryCurrentlyPreviewing, queries: queries, openInSqlLab: openInSqlLab, show: true }),
  (0,emotion_react_browser_esm.jsx)(ConfirmStatusChange/* default */.Z, { title: (0,TranslatorSingleton.t)('Please confirm'), description: (0,TranslatorSingleton.t)('Are you sure you want to delete the selected queries?'), onConfirm: handleBulkQueryDelete },
  (confirmDelete) => {
    const bulkActions = [];
    if (canDelete) {
      bulkActions.push({
        key: 'delete',
        name: (0,TranslatorSingleton.t)('Delete'),
        onSelect: confirmDelete,
        type: 'danger' });

    }
    if (canExport) {
      bulkActions.push({
        key: 'export',
        name: (0,TranslatorSingleton.t)('Export'),
        type: 'primary',
        onSelect: handleBulkSavedQueryExport });

    }
    return (0,emotion_react_browser_esm.jsx)(ListView/* default */.Z, { className: "saved_query-list-view", columns: columns, count: queryCount, data: queries, fetchData: fetchData, filters: filters, initialSort: initialSort, loading: loading, pageSize: PAGE_SIZE, bulkActions: bulkActions, bulkSelectEnabled: bulkSelectEnabled, disableBulkSelect: toggleBulkSelect, highlightRowId: savedQueryCurrentlyPreviewing == null ? void 0 : savedQueryCurrentlyPreviewing.id });
  }),


  (0,emotion_react_browser_esm.jsx)(ImportModal/* default */.Z, { resourceName: "saved_query", resourceLabel: (0,TranslatorSingleton.t)('queries'), passwordsNeededMessage: PASSWORDS_NEEDED_MESSAGE, confirmOverwriteMessage: CONFIRM_OVERWRITE_MESSAGE, addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, onModelImport: handleSavedQueryImport, show: importingSavedQuery, onHide: closeSavedQueryImportModal, passwordFields: passwordFields, setPasswordFields: setPasswordFields }),
  preparingExport && (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null));

}
/* harmony default export */ const savedquery_SavedQueryList = ((0,withToasts/* default */.Z)(SavedQueryList));

/***/ })

}]);