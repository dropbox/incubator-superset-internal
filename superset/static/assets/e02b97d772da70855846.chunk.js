"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[8774],{

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

/***/ 49997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ OmniContainer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./src/common/hooks/useComponentDidMount/index.ts + 1 modules
var useComponentDidMount = __webpack_require__(76634);
// EXTERNAL MODULE: ./src/logger/actions/index.ts
var actions = __webpack_require__(97381);
// EXTERNAL MODULE: ./node_modules/omnibar/dist/index.js
var dist = __webpack_require__(60193);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/components/OmniContainer/Omnibar.tsx
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


/**
 * @deprecated Component "omnibar" does not support prop className or id (the original implementation used className). However, the original javascript code was sending these prop and was working correctly. lol
 * As this behavior is unpredictable, and does not works whitch types, I have isolated this component so that in the future a better solution can be found and implemented.
 * We need to find a substitute for this component or some way of working around this problem
 */
function Omnibar({ extensions, placeholder, id }) {
  return (0,emotion_react_browser_esm.jsx)(dist/* default */.ZP
  // @ts-ignore
  , { id: id, placeholder: placeholder, extensions: extensions, autoComplete: "off", autoFocus: true });
}
// EXTERNAL MODULE: ./src/logger/LogUtils.ts
var LogUtils = __webpack_require__(3741);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
;// CONCATENATED MODULE: ./src/components/OmniContainer/getDashboards.ts
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

const getDashboards = async (query) => {var _response;
  // todo: Build a dedicated endpoint for dashboard searching
  // i.e. superset/v1/api/dashboards?q=${query}
  let response;
  try {
    response = await SupersetClient/* default.get */.Z.get({
      endpoint: `/dashboardasync/api/read?_oc_DashboardModelViewAsync=changed_on&_od_DashboardModelViewAsync=desc&_flt_2_dashboard_title=${query}` });

  }
  catch (error) {
    return [{ title: (0,TranslatorSingleton.t)('An error occurred while fetching dashboards') }];
  }
  return (_response = response) == null ? void 0 : _response.json.result.map((item) => ({
    title: item.dashboard_title,
    ...item }));

};
;// CONCATENATED MODULE: ./src/components/OmniContainer/index.tsx
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









const OmniModal = (0,style/* styled */.iK)(Modal/* default */.Z)`
  margin-top: 20%;

  .ant-modal-body {
    padding: 0;
    overflow: visible;
  }
`;
function OmniContainer() {
  const showOmni = (0,react.useRef)();
  const modalRef = (0,react.useRef)(null);
  const [showModal, setShowModal] = (0,react.useState)(false);
  const handleLogEvent = (show) => (0,actions.logEvent)(LogUtils/* LOG_ACTIONS_OMNIBAR_TRIGGERED */.tB, {
    show_omni: show });

  const handleClose = () => {
    showOmni.current = false;
    setShowModal(false);
    handleLogEvent(false);
  };
  (0,useComponentDidMount/* useComponentDidMount */.J)(() => {
    showOmni.current = false;
    function handleKeydown(event) {
      if (!(0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.OMNIBAR */.T.OMNIBAR))
      return;
      const controlOrCommand = event.ctrlKey || event.metaKey;
      const isOk = ['KeyK'].includes(event.code);
      const isEsc = event.key === 'Escape';
      if (isEsc && showOmni.current) {
        handleClose();
        return;
      }
      if (controlOrCommand && isOk) {
        showOmni.current = !showOmni.current;
        setShowModal(showOmni.current);
        handleLogEvent(!!showOmni.current);
      }
    }
    function handleClickOutside(event) {
      if (modalRef.current &&
      !modalRef.current.contains(event.target)) {
        handleClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  return (0,emotion_react_browser_esm.jsx)(OmniModal, { title: "", show: showModal, hideFooter: true, closable: false, onHide: () => {}, destroyOnClose: true },
  (0,emotion_react_browser_esm.jsx)("div", { ref: modalRef },
  (0,emotion_react_browser_esm.jsx)(Omnibar, { id: "InputOmnibar", placeholder: (0,TranslatorSingleton.t)('Search all dashboards'), extensions: [getDashboards] })));


}

/***/ }),

/***/ 23767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dashboard_DashboardList)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./src/views/CRUD/utils.tsx
var utils = __webpack_require__(40768);
// EXTERNAL MODULE: ./src/views/CRUD/hooks.ts
var hooks = __webpack_require__(34858);
// EXTERNAL MODULE: ./src/components/ConfirmStatusChange/index.tsx
var ConfirmStatusChange = __webpack_require__(19259);
// EXTERNAL MODULE: ./src/utils/export.ts
var utils_export = __webpack_require__(32228);
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(38703);
// EXTERNAL MODULE: ./src/components/Menu/SubMenu.tsx
var SubMenu = __webpack_require__(62753);
// EXTERNAL MODULE: ./src/components/ListView/index.ts + 11 modules
var ListView = __webpack_require__(9678);
// EXTERNAL MODULE: ./src/utils/localStorageHelpers.ts
var localStorageHelpers = __webpack_require__(61337);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/components/FacePile/index.tsx + 1 modules
var FacePile = __webpack_require__(34581);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/components/FaveStar/index.tsx
var FaveStar = __webpack_require__(36674);
// EXTERNAL MODULE: ./src/dashboard/components/PropertiesModal/index.tsx + 1 modules
var PropertiesModal = __webpack_require__(20818);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./src/components/ImportModal/index.tsx
var ImportModal = __webpack_require__(27989);
// EXTERNAL MODULE: ./src/components/OmniContainer/index.tsx + 2 modules
var OmniContainer = __webpack_require__(49997);
// EXTERNAL MODULE: ./src/components/CertifiedIcon/index.tsx
var CertifiedIcon = __webpack_require__(83268);
// EXTERNAL MODULE: ./src/views/CRUD/dashboard/DashboardCard.tsx
var DashboardCard = __webpack_require__(99415);
;// CONCATENATED MODULE: ./src/views/CRUD/dashboard/types.ts
var DashboardStatus;
(function (DashboardStatus) {
  DashboardStatus["PUBLISHED"] = "published";
  DashboardStatus["DRAFT"] = "draft";
})(DashboardStatus || (DashboardStatus = {}));
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/views/CRUD/dashboard/DashboardList.tsx
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
'import them together with the dashboards. Please note that the ' +
'"Secure Extra" and "Certificate" sections of ' +
'the database configuration are not present in export files, and ' +
'should be added manually after the import if they are needed.');
const CONFIRM_OVERWRITE_MESSAGE = (0,TranslatorSingleton.t)('You are importing one or more dashboards that already exist. ' +
'Overwriting might cause you to lose some of your work. Are you ' +
'sure you want to overwrite?');
const Actions = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.grayscale.base};
`;
function DashboardList(props) {
  const { addDangerToast, addSuccessToast } = props;
  const { state: { loading, resourceCount: dashboardCount, resourceCollection: dashboards, bulkSelectEnabled }, setResourceCollection: setDashboards, hasPerm, fetchData, toggleBulkSelect, refreshData } = (0,hooks/* useListViewResource */.Yi)('dashboard', (0,TranslatorSingleton.t)('dashboard'), addDangerToast);
  const dashboardIds = (0,react.useMemo)(() => dashboards.map((d) => d.id), [dashboards]);
  const [saveFavoriteStatus, favoriteStatus] = (0,hooks/* useFavoriteStatus */.NE)('dashboard', dashboardIds, addDangerToast);
  const [dashboardToEdit, setDashboardToEdit] = (0,react.useState)(null);
  const [importingDashboard, showImportModal] = (0,react.useState)(false);
  const [passwordFields, setPasswordFields] = (0,react.useState)([]);
  const [preparingExport, setPreparingExport] = (0,react.useState)(false);
  const openDashboardImportModal = () => {
    showImportModal(true);
  };
  const closeDashboardImportModal = () => {
    showImportModal(false);
  };
  const handleDashboardImport = () => {
    showImportModal(false);
    refreshData();
  };
  const { userId } = props.user;
  const userKey = (0,localStorageHelpers/* getFromLocalStorage */.f)(userId == null ? void 0 : userId.toString(), null);
  const canCreate = hasPerm('can_write');
  const canEdit = hasPerm('can_write');
  const canDelete = hasPerm('can_write');
  const canExport = hasPerm('can_read');
  const initialSort = [{ id: 'changed_on_delta_humanized', desc: true }];
  function openDashboardEditModal(dashboard) {
    setDashboardToEdit(dashboard);
  }
  function handleDashboardEdit(edits) {
    return SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/dashboard/${edits.id}` }).
    then(({ json = {} }) => {
      setDashboards(dashboards.map((dashboard) => {var _json$result;
        if (dashboard.id === (json == null ? void 0 : (_json$result = json.result) == null ? void 0 : _json$result.id)) {
          const { changed_by_name, changed_by_url, changed_by, dashboard_title = '', slug = '', json_metadata = '', changed_on_delta_humanized, url = '', certified_by = '', certification_details = '' } = json.result;
          return {
            ...dashboard,
            changed_by_name,
            changed_by_url,
            changed_by,
            dashboard_title,
            slug,
            json_metadata,
            changed_on_delta_humanized,
            url,
            certified_by,
            certification_details };

        }
        return dashboard;
      }));
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching dashboards: %s', errMsg))));
  }
  const handleBulkDashboardExport = (dashboardsToExport) => {
    const ids = dashboardsToExport.map(({ id }) => id);
    (0,utils_export/* default */.Z)('dashboard', ids, () => {
      setPreparingExport(false);
    });
    setPreparingExport(true);
  };
  function handleBulkDashboardDelete(dashboardsToDelete) {
    return SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/dashboard/?q=${rison_default().encode(dashboardsToDelete.map(({ id }) => id))}` }).
    then(({ json = {} }) => {
      refreshData();
      addSuccessToast(json.message);
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting the selected dashboards: ', errMsg))));
  }
  const columns = (0,react.useMemo)(() => [
  ...(props.user.userId ?
  [
  {
    Cell: ({ row: { original: { id } } }) => (0,emotion_react_browser_esm.jsx)(FaveStar/* default */.Z, { itemId: id, saveFaveStar: saveFavoriteStatus, isStarred: favoriteStatus[id] }),
    Header: '',
    id: 'id',
    disableSortBy: true,
    size: 'xs' }] :


  []),
  {
    Cell: ({ row: { original: { url, dashboard_title: dashboardTitle, certified_by: certifiedBy, certification_details: certificationDetails } } }) => (0,emotion_react_browser_esm.jsx)(react_router_dom/* Link */.rU, { to: url },
    certifiedBy && (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(CertifiedIcon/* default */.Z, { certifiedBy: certifiedBy, details: certificationDetails }), ' '),

    dashboardTitle),

    Header: (0,TranslatorSingleton.t)('Title'),
    accessor: 'dashboard_title' },

  {
    Cell: ({ row: { original: { changed_by_name: changedByName, changed_by_url: changedByUrl } } }) => (0,emotion_react_browser_esm.jsx)("a", { href: changedByUrl }, changedByName),
    Header: (0,TranslatorSingleton.t)('Modified by'),
    accessor: 'changed_by.first_name',
    size: 'xl' },

  {
    Cell: ({ row: { original: { status } } }) => status === DashboardStatus.PUBLISHED ? (0,TranslatorSingleton.t)('Published') : (0,TranslatorSingleton.t)('Draft'),
    Header: (0,TranslatorSingleton.t)('Status'),
    accessor: 'published',
    size: 'xl' },

  {
    Cell: ({ row: { original: { changed_on_delta_humanized: changedOn } } }) => (0,emotion_react_browser_esm.jsx)("span", { className: "no-wrap" }, changedOn),
    Header: (0,TranslatorSingleton.t)('Modified'),
    accessor: 'changed_on_delta_humanized',
    size: 'xl' },

  {
    Cell: ({ row: { original: { created_by: createdBy } } }) => createdBy ? `${createdBy.first_name} ${createdBy.last_name}` : '',
    Header: (0,TranslatorSingleton.t)('Created by'),
    accessor: 'created_by',
    disableSortBy: true,
    size: 'xl' },

  {
    Cell: ({ row: { original: { owners = [] } } }) => (0,emotion_react_browser_esm.jsx)(FacePile/* default */.Z, { users: owners }),
    Header: (0,TranslatorSingleton.t)('Owners'),
    accessor: 'owners',
    disableSortBy: true,
    size: 'xl' },

  {
    Cell: ({ row: { original } }) => {
      const handleDelete = () => (0,utils/* handleDashboardDelete */.Iu)(original, refreshData, addSuccessToast, addDangerToast);
      const handleEdit = () => openDashboardEditModal(original);
      const handleExport = () => handleBulkDashboardExport([original]);
      return (0,emotion_react_browser_esm.jsx)(Actions, { className: "actions" },
      canDelete && (0,emotion_react_browser_esm.jsx)(ConfirmStatusChange/* default */.Z, { title: (0,TranslatorSingleton.t)('Please confirm'), description: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
        (0,TranslatorSingleton.t)('Are you sure you want to delete'), ' ',
        (0,emotion_react_browser_esm.jsx)("b", null, original.dashboard_title), "?"),
        onConfirm: handleDelete },
      (confirmDelete) => (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "delete-action-tooltip", title: (0,TranslatorSingleton.t)('Delete'), placement: "bottom" },
      (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: 0, className: "action-button", onClick: confirmDelete },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.Trash */.Z.Trash, null)))),



      canExport && (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "export-action-tooltip", title: (0,TranslatorSingleton.t)('Export'), placement: "bottom" },
      (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: 0, className: "action-button", onClick: handleExport },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.Share */.Z.Share, null))),


      canEdit && (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "edit-action-tooltip", title: (0,TranslatorSingleton.t)('Edit'), placement: "bottom" },
      (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: 0, className: "action-button", onClick: handleEdit },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.EditAlt */.Z.EditAlt, null))));



    },
    Header: (0,TranslatorSingleton.t)('Actions'),
    id: 'actions',
    hidden: !canEdit && !canDelete && !canExport,
    disableSortBy: true }],

  [
  canEdit,
  canDelete,
  canExport,
  ...(props.user.userId ? [favoriteStatus] : [])]);

  const favoritesFilter = (0,react.useMemo)(() => ({
    Header: (0,TranslatorSingleton.t)('Favorite'),
    id: 'id',
    urlDisplay: 'favorite',
    input: 'select',
    operator: ListView/* FilterOperator.dashboardIsFav */.p.dashboardIsFav,
    unfilteredLabel: (0,TranslatorSingleton.t)('Any'),
    selects: [
    { label: (0,TranslatorSingleton.t)('Yes'), value: true },
    { label: (0,TranslatorSingleton.t)('No'), value: false }] }),

  []);
  const filters = (0,react.useMemo)(() => [
  {
    Header: (0,TranslatorSingleton.t)('Owner'),
    id: 'owners',
    input: 'select',
    operator: ListView/* FilterOperator.relationManyMany */.p.relationManyMany,
    unfilteredLabel: (0,TranslatorSingleton.t)('All'),
    fetchSelects: (0,utils/* createFetchRelated */.tm)('dashboard', 'owners', (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching dashboard owner values: %s', errMsg))), props.user),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('Created by'),
    id: 'created_by',
    input: 'select',
    operator: ListView/* FilterOperator.relationOneMany */.p.relationOneMany,
    unfilteredLabel: (0,TranslatorSingleton.t)('All'),
    fetchSelects: (0,utils/* createFetchRelated */.tm)('dashboard', 'created_by', (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching dashboard created by values: %s', errMsg))), props.user),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('Status'),
    id: 'published',
    input: 'select',
    operator: ListView/* FilterOperator.equals */.p.equals,
    unfilteredLabel: (0,TranslatorSingleton.t)('Any'),
    selects: [
    { label: (0,TranslatorSingleton.t)('Published'), value: true },
    { label: (0,TranslatorSingleton.t)('Draft'), value: false }] },


  ...(props.user.userId ? [favoritesFilter] : []),
  {
    Header: (0,TranslatorSingleton.t)('Certified'),
    id: 'id',
    urlDisplay: 'certified',
    input: 'select',
    operator: ListView/* FilterOperator.dashboardIsCertified */.p.dashboardIsCertified,
    unfilteredLabel: (0,TranslatorSingleton.t)('Any'),
    selects: [
    { label: (0,TranslatorSingleton.t)('Yes'), value: true },
    { label: (0,TranslatorSingleton.t)('No'), value: false }] },


  {
    Header: (0,TranslatorSingleton.t)('Search'),
    id: 'dashboard_title',
    input: 'search',
    operator: ListView/* FilterOperator.titleOrSlug */.p.titleOrSlug }],

  [addDangerToast, favoritesFilter, props.user]);
  const sortTypes = [
  {
    desc: false,
    id: 'dashboard_title',
    label: (0,TranslatorSingleton.t)('Alphabetical'),
    value: 'alphabetical' },

  {
    desc: true,
    id: 'changed_on_delta_humanized',
    label: (0,TranslatorSingleton.t)('Recently modified'),
    value: 'recently_modified' },

  {
    desc: false,
    id: 'changed_on_delta_humanized',
    label: (0,TranslatorSingleton.t)('Least recently modified'),
    value: 'least_recently_modified' }];


  function renderCard(dashboard) {
    return (0,emotion_react_browser_esm.jsx)(DashboardCard/* default */.Z, { dashboard: dashboard, hasPerm: hasPerm, bulkSelectEnabled: bulkSelectEnabled, refreshData: refreshData, showThumbnails: userKey ?
      userKey.thumbnails :
      (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.THUMBNAILS */.T.THUMBNAILS), loading: loading, addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, openDashboardEditModal: openDashboardEditModal, saveFavoriteStatus: saveFavoriteStatus, favoriteStatus: favoriteStatus[dashboard.id], handleBulkDashboardExport: handleBulkDashboardExport });
  }
  const subMenuButtons = [];
  if (canDelete || canExport) {
    subMenuButtons.push({
      name: (0,TranslatorSingleton.t)('Bulk select'),
      buttonStyle: 'secondary',
      'data-test': 'bulk-select',
      onClick: toggleBulkSelect });

  }
  if (canCreate) {
    subMenuButtons.push({
      name: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), " ", (0,TranslatorSingleton.t)('Dashboard')),

      buttonStyle: 'primary',
      onClick: () => {
        window.location.assign('/dashboard/new');
      } });

    if ((0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.VERSIONED_EXPORT */.T.VERSIONED_EXPORT)) {
      subMenuButtons.push({
        name: (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "import-tooltip", title: (0,TranslatorSingleton.t)('Import dashboards'), placement: "bottomRight" },
        (0,emotion_react_browser_esm.jsx)(Icons/* default.Import */.Z.Import, null)),

        buttonStyle: 'link',
        onClick: openDashboardImportModal });

    }
  }
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(SubMenu/* default */.Z, { name: (0,TranslatorSingleton.t)('Dashboards'), buttons: subMenuButtons }),
  (0,emotion_react_browser_esm.jsx)(ConfirmStatusChange/* default */.Z, { title: (0,TranslatorSingleton.t)('Please confirm'), description: (0,TranslatorSingleton.t)('Are you sure you want to delete the selected dashboards?'), onConfirm: handleBulkDashboardDelete },
  (confirmDelete) => {
    const bulkActions = [];
    if (canDelete) {
      bulkActions.push({
        key: 'delete',
        name: (0,TranslatorSingleton.t)('Delete'),
        type: 'danger',
        onSelect: confirmDelete });

    }
    if (canExport) {
      bulkActions.push({
        key: 'export',
        name: (0,TranslatorSingleton.t)('Export'),
        type: 'primary',
        onSelect: handleBulkDashboardExport });

    }
    return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    dashboardToEdit && (0,emotion_react_browser_esm.jsx)(PropertiesModal/* default */.Z, { dashboardId: dashboardToEdit.id, show: true, onHide: () => setDashboardToEdit(null), onSubmit: handleDashboardEdit }),
    (0,emotion_react_browser_esm.jsx)(ListView/* default */.Z, { bulkActions: bulkActions, bulkSelectEnabled: bulkSelectEnabled, cardSortSelectOptions: sortTypes, className: "dashboard-list-view", columns: columns, count: dashboardCount, data: dashboards, disableBulkSelect: toggleBulkSelect, fetchData: fetchData, filters: filters, initialSort: initialSort, loading: loading, pageSize: PAGE_SIZE, showThumbnails: userKey ?
      userKey.thumbnails :
      (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.THUMBNAILS */.T.THUMBNAILS), renderCard: renderCard, defaultViewMode: (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.LISTVIEWS_DEFAULT_CARD_VIEW */.T.LISTVIEWS_DEFAULT_CARD_VIEW) ?
      'card' :
      'table' }));

  }),


  (0,emotion_react_browser_esm.jsx)(ImportModal/* default */.Z, { resourceName: "dashboard", resourceLabel: (0,TranslatorSingleton.t)('dashboard'), passwordsNeededMessage: PASSWORDS_NEEDED_MESSAGE, confirmOverwriteMessage: CONFIRM_OVERWRITE_MESSAGE, addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, onModelImport: handleDashboardImport, show: importingDashboard, onHide: closeDashboardImportModal, passwordFields: passwordFields, setPasswordFields: setPasswordFields }),

  (0,emotion_react_browser_esm.jsx)(OmniContainer/* default */.Z, null),

  preparingExport && (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null));

}
/* harmony default export */ const dashboard_DashboardList = ((0,withToasts/* default */.Z)(DashboardList));

/***/ })

}]);