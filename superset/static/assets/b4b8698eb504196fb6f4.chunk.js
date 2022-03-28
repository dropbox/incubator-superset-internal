"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[1611],{

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

/***/ 35276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ annotation_AnnotationList)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
// EXTERNAL MODULE: ./src/components/ListView/ActionsBar.tsx
var ActionsBar = __webpack_require__(29848);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/components/ConfirmStatusChange/index.tsx
var ConfirmStatusChange = __webpack_require__(19259);
// EXTERNAL MODULE: ./src/components/DeleteModal/index.tsx
var DeleteModal = __webpack_require__(17198);
// EXTERNAL MODULE: ./src/components/ListView/index.ts + 11 modules
var ListView = __webpack_require__(9678);
// EXTERNAL MODULE: ./src/components/Menu/SubMenu.tsx
var SubMenu = __webpack_require__(62753);
// EXTERNAL MODULE: ./src/utils/getClientErrorObject.ts
var getClientErrorObject = __webpack_require__(98286);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/views/CRUD/hooks.ts
var hooks = __webpack_require__(34858);
// EXTERNAL MODULE: ./src/views/CRUD/utils.tsx
var utils = __webpack_require__(40768);
// EXTERNAL MODULE: ./src/components/DatePicker/index.tsx
var DatePicker = __webpack_require__(62276);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./src/components/AsyncAceEditor/index.tsx
var AsyncAceEditor = __webpack_require__(94670);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/views/CRUD/annotation/AnnotationModal.tsx
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










const StyledAnnotationTitle = style/* styled.div */.iK.div`
  margin: ${({ theme }) => theme.gridUnit * 2}px auto
    ${({ theme }) => theme.gridUnit * 4}px auto;
`;
const StyledJsonEditor = (0,style/* styled */.iK)(AsyncAceEditor/* JsonEditor */.Ad)`
  border-radius: ${({ theme }) => theme.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.light2};
`;
const AnnotationContainer = style/* styled.div */.iK.div`
  margin-bottom: ${({ theme }) => theme.gridUnit * 5}px;

  .control-label {
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  }

  .required {
    margin-left: ${({ theme }) => theme.gridUnit / 2}px;
    color: ${({ theme }) => theme.colors.error.base};
  }

  textarea {
    flex: 1 1 auto;
    height: ${({ theme }) => theme.gridUnit * 17}px;
    resize: none;
    width: 100%;
  }

  textarea,
  input[type='text'] {
    padding: ${({ theme }) => theme.gridUnit * 1.5}px
      ${({ theme }) => theme.gridUnit * 2}px;
    border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    border-radius: ${({ theme }) => theme.gridUnit}px;
  }

  input[type='text'] {
    width: 65%;
  }
`;
const AnnotationModal = ({ addDangerToast, addSuccessToast, annnotationLayerId, annotation = null, onAnnotationAdd, onHide, show }) => {var _currentAnnotation$st, _currentAnnotation$en;
  const [disableSave, setDisableSave] = (0,react.useState)(true);
  const [currentAnnotation, setCurrentAnnotation] = (0,react.useState)(null);
  const isEditMode = annotation !== null;
  // annotation fetch logic
  const { state: { loading, resource }, fetchResource, createResource, updateResource } = (0,hooks/* useSingleViewResource */.LE)(`annotation_layer/${annnotationLayerId}/annotation`, (0,TranslatorSingleton.t)('annotation'), addDangerToast);
  const resetAnnotation = () => {
    // Reset annotation
    setCurrentAnnotation({
      short_descr: '',
      start_dttm: '',
      end_dttm: '',
      json_metadata: '',
      long_descr: '' });

  };
  const hide = () => {
    if (isEditMode) {
      setCurrentAnnotation(resource);
    } else
    {
      resetAnnotation();
    }
    onHide();
  };
  const onSave = () => {
    if (isEditMode) {
      // Edit
      if (currentAnnotation && currentAnnotation.id) {
        const update_id = currentAnnotation.id;
        delete currentAnnotation.id;
        delete currentAnnotation.created_by;
        delete currentAnnotation.changed_by;
        delete currentAnnotation.changed_on_delta_humanized;
        delete currentAnnotation.layer;
        updateResource(update_id, currentAnnotation).then((response) => {
          // No response on error
          if (!response) {
            return;
          }
          if (onAnnotationAdd) {
            onAnnotationAdd();
          }
          hide();
          addSuccessToast((0,TranslatorSingleton.t)('The annotation has been updated'));
        });
      }
    } else
    if (currentAnnotation) {
      // Create
      createResource(currentAnnotation).then((response) => {
        if (!response) {
          return;
        }
        if (onAnnotationAdd) {
          onAnnotationAdd();
        }
        hide();
        addSuccessToast((0,TranslatorSingleton.t)('The annotation has been saved'));
      });
    }
  };
  const onAnnotationTextChange = (event) => {
    const { target } = event;
    const data = {
      ...currentAnnotation,
      end_dttm: currentAnnotation ? currentAnnotation.end_dttm : '',
      short_descr: currentAnnotation ? currentAnnotation.short_descr : '',
      start_dttm: currentAnnotation ? currentAnnotation.start_dttm : '' };

    data[target.name] = target.value;
    setCurrentAnnotation(data);
  };
  const onJsonChange = (json) => {
    const data = {
      ...currentAnnotation,
      end_dttm: currentAnnotation ? currentAnnotation.end_dttm : '',
      json_metadata: json,
      short_descr: currentAnnotation ? currentAnnotation.short_descr : '',
      start_dttm: currentAnnotation ? currentAnnotation.start_dttm : '' };

    setCurrentAnnotation(data);
  };
  const onDateChange = (value, dateString) => {
    const data = {
      ...currentAnnotation,
      end_dttm: currentAnnotation && dateString[1].length ?
      moment_default()(dateString[1]).format('YYYY-MM-DD HH:mm') :
      '',
      short_descr: currentAnnotation ? currentAnnotation.short_descr : '',
      start_dttm: currentAnnotation && dateString[0].length ?
      moment_default()(dateString[0]).format('YYYY-MM-DD HH:mm') :
      '' };

    setCurrentAnnotation(data);
  };
  const validate = () => {
    if (currentAnnotation &&
    currentAnnotation.short_descr.length &&
    currentAnnotation.start_dttm.length &&
    currentAnnotation.end_dttm.length) {
      setDisableSave(false);
    } else
    {
      setDisableSave(true);
    }
  };
  // Initialize
  (0,react.useEffect)(() => {
    if (isEditMode && (
    !currentAnnotation ||
    !currentAnnotation.id ||
    annotation && annotation.id !== currentAnnotation.id ||
    show)) {
      if (annotation && annotation.id !== null && !loading) {
        const id = annotation.id || 0;
        fetchResource(id);
      }
    } else
    if (!isEditMode && (
    !currentAnnotation || currentAnnotation.id || show)) {
      resetAnnotation();
    }
  }, [annotation]);
  (0,react.useEffect)(() => {
    if (resource) {
      setCurrentAnnotation(resource);
    }
  }, [resource]);
  // Validation
  (0,react.useEffect)(() => {
    validate();
  }, [
  currentAnnotation ? currentAnnotation.short_descr : '',
  currentAnnotation ? currentAnnotation.start_dttm : '',
  currentAnnotation ? currentAnnotation.end_dttm : '']);

  return (0,emotion_react_browser_esm.jsx)(Modal/* default */.Z, { disablePrimaryButton: disableSave, onHandledPrimaryAction: onSave, onHide: hide, primaryButtonName: isEditMode ? (0,TranslatorSingleton.t)('Save') : (0,TranslatorSingleton.t)('Add'), show: show, width: "55%", title: (0,emotion_react_browser_esm.jsx)("h4", null,
    isEditMode ? (0,emotion_react_browser_esm.jsx)(Icons/* default.EditAlt */.Z.EditAlt, { css: utils/* StyledIcon */.xL }) : (0,emotion_react_browser_esm.jsx)(Icons/* default.PlusLarge */.Z.PlusLarge, { css: utils/* StyledIcon */.xL }),
    isEditMode ? (0,TranslatorSingleton.t)('Edit annotation') : (0,TranslatorSingleton.t)('Add annotation')) },

  (0,emotion_react_browser_esm.jsx)(StyledAnnotationTitle, null,
  (0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Basic information'))),

  (0,emotion_react_browser_esm.jsx)(AnnotationContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('Annotation name'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)("input", { name: "short_descr", onChange: onAnnotationTextChange, type: "text", value: currentAnnotation == null ? void 0 : currentAnnotation.short_descr })),

  (0,emotion_react_browser_esm.jsx)(AnnotationContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('date'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)(DatePicker/* RangePicker */.S, { format: "YYYY-MM-DD HH:mm", onChange: onDateChange, showTime: { format: 'hh:mm a' }, use12Hours: true, value: currentAnnotation != null && (_currentAnnotation$st = currentAnnotation.start_dttm) != null && _currentAnnotation$st.length ||
    currentAnnotation != null && (_currentAnnotation$en = currentAnnotation.end_dttm) != null && _currentAnnotation$en.length ?
    [
    moment_default()(currentAnnotation.start_dttm),
    moment_default()(currentAnnotation.end_dttm)] :

    null })),

  (0,emotion_react_browser_esm.jsx)(StyledAnnotationTitle, null,
  (0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Additional information'))),

  (0,emotion_react_browser_esm.jsx)(AnnotationContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('description')),
  (0,emotion_react_browser_esm.jsx)("textarea", { name: "long_descr", value: currentAnnotation ? currentAnnotation.long_descr : '', placeholder: (0,TranslatorSingleton.t)('Description (this can be seen in the list)'), onChange: onAnnotationTextChange })),

  (0,emotion_react_browser_esm.jsx)(AnnotationContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('JSON metadata')),
  (0,emotion_react_browser_esm.jsx)(StyledJsonEditor, { onChange: onJsonChange, value: currentAnnotation && currentAnnotation.json_metadata ?
    currentAnnotation.json_metadata :
    '', width: "100%", height: "120px" })));


};
/* harmony default export */ const annotation_AnnotationModal = ((0,withToasts/* default */.Z)(AnnotationModal));
;// CONCATENATED MODULE: ./src/views/CRUD/annotation/AnnotationList.tsx
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
function AnnotationList({ addDangerToast, addSuccessToast }) {
  const { annotationLayerId } = (0,react_router/* useParams */.UO)();
  const { state: { loading, resourceCount: annotationsCount, resourceCollection: annotations, bulkSelectEnabled }, fetchData, refreshData, toggleBulkSelect } = (0,hooks/* useListViewResource */.Yi)(`annotation_layer/${annotationLayerId}/annotation`, (0,TranslatorSingleton.t)('annotation'), addDangerToast, false);
  const [annotationModalOpen, setAnnotationModalOpen] = (0,react.useState)(false);
  const [annotationLayerName, setAnnotationLayerName] = (0,react.useState)('');
  const [currentAnnotation, setCurrentAnnotation] = (0,react.useState)(null);
  const [annotationCurrentlyDeleting, setAnnotationCurrentlyDeleting] = (0,react.useState)(null);
  const handleAnnotationEdit = (annotation) => {
    setCurrentAnnotation(annotation);
    setAnnotationModalOpen(true);
  };
  const fetchAnnotationLayer = (0,react.useCallback)(async function fetchAnnotationLayer() {
    try {
      const response = await SupersetClient/* default.get */.Z.get({
        endpoint: `/api/v1/annotation_layer/${annotationLayerId}` });

      setAnnotationLayerName(response.json.result.name);
    }
    catch (response) {
      await (0,getClientErrorObject/* getClientErrorObject */.O)(response).then(({ error }) => {
        addDangerToast(error.error || error.statusText || error);
      });
    }
  }, [annotationLayerId]);
  const handleAnnotationDelete = ({ id, short_descr }) => {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/annotation_layer/${annotationLayerId}/annotation/${id}` }).
    then(() => {
      refreshData();
      setAnnotationCurrentlyDeleting(null);
      addSuccessToast((0,TranslatorSingleton.t)('Deleted: %s', short_descr));
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting %s: %s', short_descr, errMsg))));
  };
  const handleBulkAnnotationsDelete = (annotationsToDelete) => {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/annotation_layer/${annotationLayerId}/annotation/?q=${rison_default().encode(annotationsToDelete.map(({ id }) => id))}` }).
    then(({ json = {} }) => {
      refreshData();
      addSuccessToast(json.message);
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting the selected annotations: %s', errMsg))));
  };
  // get the Annotation Layer
  (0,react.useEffect)(() => {
    fetchAnnotationLayer();
  }, [fetchAnnotationLayer]);
  const initialSort = [{ id: 'short_descr', desc: true }];
  const columns = (0,react.useMemo)(() => [
  {
    accessor: 'short_descr',
    Header: (0,TranslatorSingleton.t)('Label') },

  {
    accessor: 'long_descr',
    Header: (0,TranslatorSingleton.t)('Description') },

  {
    Cell: ({ row: { original: { start_dttm: startDttm } } }) => moment_default()(new Date(startDttm)).format('ll'),
    Header: (0,TranslatorSingleton.t)('Start'),
    accessor: 'start_dttm' },

  {
    Cell: ({ row: { original: { end_dttm: endDttm } } }) => moment_default()(new Date(endDttm)).format('ll'),
    Header: (0,TranslatorSingleton.t)('End'),
    accessor: 'end_dttm' },

  {
    Cell: ({ row: { original } }) => {
      const handleEdit = () => handleAnnotationEdit(original);
      const handleDelete = () => setAnnotationCurrentlyDeleting(original);
      const actions = [
      {
        label: 'edit-action',
        tooltip: (0,TranslatorSingleton.t)('Edit annotation'),
        placement: 'bottom',
        icon: 'Edit',
        onClick: handleEdit },

      {
        label: 'delete-action',
        tooltip: (0,TranslatorSingleton.t)('Delete annotation'),
        placement: 'bottom',
        icon: 'Trash',
        onClick: handleDelete }];


      return (0,emotion_react_browser_esm.jsx)(ActionsBar/* default */.Z, { actions: actions });
    },
    Header: (0,TranslatorSingleton.t)('Actions'),
    id: 'actions',
    disableSortBy: true }],

  [true, true]);
  const subMenuButtons = [];
  subMenuButtons.push({
    name: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), " ", (0,TranslatorSingleton.t)('Annotation')),

    buttonStyle: 'primary',
    onClick: () => {
      handleAnnotationEdit(null);
    } });

  subMenuButtons.push({
    name: (0,TranslatorSingleton.t)('Bulk select'),
    onClick: toggleBulkSelect,
    buttonStyle: 'secondary',
    'data-test': 'annotation-bulk-select' });

  const StyledHeader = style/* styled.div */.iK.div`
    display: flex;
    flex-direction: row;

    a,
    Link {
      margin-left: 16px;
      font-size: 12px;
      font-weight: normal;
      text-decoration: underline;
    }
  `;
  let hasHistory = true;
  try {
    (0,react_router/* useHistory */.k6)();
  }
  catch (err) {
    // If error is thrown, we know not to use <Link> in render
    hasHistory = false;
  }
  const EmptyStateButton = (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "primary", onClick: () => {
      handleAnnotationEdit(null);
    } },
  (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), " ", (0,TranslatorSingleton.t)('Annotation')));


  const emptyState = {
    message: (0,TranslatorSingleton.t)('No annotation yet'),
    slot: EmptyStateButton };

  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(SubMenu/* default */.Z, { name: (0,emotion_react_browser_esm.jsx)(StyledHeader, null,
    (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)(`Annotation Layer ${annotationLayerName}`)),
    (0,emotion_react_browser_esm.jsx)("span", null,
    hasHistory ? (0,emotion_react_browser_esm.jsx)(react_router_dom/* Link */.rU, { to: "/annotationlayermodelview/list/" }, "Back to all") : (0,emotion_react_browser_esm.jsx)("a", { href: "/annotationlayermodelview/list/" }, "Back to all"))),

    buttons: subMenuButtons }),
  (0,emotion_react_browser_esm.jsx)(annotation_AnnotationModal, { addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, annotation: currentAnnotation, show: annotationModalOpen, onAnnotationAdd: () => refreshData(), annnotationLayerId: annotationLayerId, onHide: () => setAnnotationModalOpen(false) }),
  annotationCurrentlyDeleting && (0,emotion_react_browser_esm.jsx)(DeleteModal/* default */.Z, { description: (0,TranslatorSingleton.t)(`Are you sure you want to delete ${annotationCurrentlyDeleting == null ? void 0 : annotationCurrentlyDeleting.short_descr}?`), onConfirm: () => {
      if (annotationCurrentlyDeleting) {
        handleAnnotationDelete(annotationCurrentlyDeleting);
      }
    }, onHide: () => setAnnotationCurrentlyDeleting(null), open: true, title: (0,TranslatorSingleton.t)('Delete Annotation?') }),
  (0,emotion_react_browser_esm.jsx)(ConfirmStatusChange/* default */.Z, { title: (0,TranslatorSingleton.t)('Please confirm'), description: (0,TranslatorSingleton.t)('Are you sure you want to delete the selected annotations?'), onConfirm: handleBulkAnnotationsDelete },
  (confirmDelete) => {
    const bulkActions = [
    {
      key: 'delete',
      name: (0,TranslatorSingleton.t)('Delete'),
      onSelect: confirmDelete,
      type: 'danger' }];


    return (0,emotion_react_browser_esm.jsx)(ListView/* default */.Z, { className: "annotations-list-view", bulkActions: bulkActions, bulkSelectEnabled: bulkSelectEnabled, columns: columns, count: annotationsCount, data: annotations, disableBulkSelect: toggleBulkSelect, emptyState: emptyState, fetchData: fetchData, initialSort: initialSort, loading: loading, pageSize: PAGE_SIZE });
  }));


}
/* harmony default export */ const annotation_AnnotationList = ((0,withToasts/* default */.Z)(AnnotationList));

/***/ })

}]);