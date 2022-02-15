"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[4787],{

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

/***/ 28999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ annotationlayers_AnnotationLayersList)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/views/CRUD/hooks.ts
var hooks = __webpack_require__(34858);
// EXTERNAL MODULE: ./src/views/CRUD/utils.tsx
var utils = __webpack_require__(40768);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/components/Menu/SubMenu.tsx
var SubMenu = __webpack_require__(62753);
// EXTERNAL MODULE: ./src/components/ListView/ActionsBar.tsx
var ActionsBar = __webpack_require__(29848);
// EXTERNAL MODULE: ./src/components/ListView/index.ts + 11 modules
var ListView = __webpack_require__(9678);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/components/DeleteModal/index.tsx
var DeleteModal = __webpack_require__(17198);
// EXTERNAL MODULE: ./src/components/ConfirmStatusChange/index.tsx
var ConfirmStatusChange = __webpack_require__(19259);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/views/CRUD/annotationlayers/AnnotationLayerModal.tsx
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







const StyledAnnotationLayerTitle = style/* styled.div */.iK.div`
  margin: ${({ theme }) => theme.gridUnit * 2}px auto
    ${({ theme }) => theme.gridUnit * 4}px auto;
`;
const LayerContainer = style/* styled.div */.iK.div`
  margin-bottom: ${({ theme }) => theme.gridUnit * 10}px;

  .control-label {
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  }

  .required {
    margin-left: ${({ theme }) => theme.gridUnit / 2}px;
    color: ${({ theme }) => theme.colors.error.base};
  }

  textarea,
  input[type='text'] {
    padding: ${({ theme }) => theme.gridUnit * 1.5}px
      ${({ theme }) => theme.gridUnit * 2}px;
    border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    border-radius: ${({ theme }) => theme.gridUnit}px;
    width: 50%;
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    width: 100%;
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.light1};
  }
`;
const AnnotationLayerModal = ({ addDangerToast, onLayerAdd, onHide, show, layer = null }) => {
  const [disableSave, setDisableSave] = (0,react.useState)(true);
  const [currentLayer, setCurrentLayer] = (0,react.useState)();
  const [isHidden, setIsHidden] = (0,react.useState)(true);
  const isEditMode = layer !== null;
  // annotation layer fetch logic
  const { state: { loading, resource }, fetchResource, createResource, updateResource } = (0,hooks/* useSingleViewResource */.LE)('annotation_layer', (0,TranslatorSingleton.t)('annotation_layer'), addDangerToast);
  const resetLayer = () => {
    // Reset layer
    setCurrentLayer({
      name: '',
      descr: '' });

  };
  // Functions
  const hide = () => {
    setIsHidden(true);
    // Reset layer
    resetLayer();
    onHide();
  };
  const onSave = () => {
    if (isEditMode) {
      // Edit
      if (currentLayer && currentLayer.id) {
        const update_id = currentLayer.id;
        delete currentLayer.id;
        delete currentLayer.created_by;
        updateResource(update_id, currentLayer).then((response) => {
          if (!response) {
            return;
          }
          hide();
        });
      }
    } else
    if (currentLayer) {
      // Create
      createResource(currentLayer).then((response) => {
        if (!response) {
          return;
        }
        if (onLayerAdd) {
          onLayerAdd(response);
        }
        hide();
      });
    }
  };
  const onTextChange = (event) => {
    const { target } = event;
    const data = {
      ...currentLayer,
      name: currentLayer ? currentLayer.name : '',
      descr: currentLayer ? currentLayer.descr : '' };

    data[target.name] = target.value;
    setCurrentLayer(data);
  };
  const validate = () => {
    if (currentLayer && currentLayer.name.length) {
      setDisableSave(false);
    } else
    {
      setDisableSave(true);
    }
  };
  // Initialize
  (0,react.useEffect)(() => {
    if (isEditMode && (
    !currentLayer ||
    !currentLayer.id ||
    layer && layer.id !== currentLayer.id ||
    isHidden && show)) {
      if (show && layer && layer.id !== null && !loading) {
        const id = layer.id || 0;
        fetchResource(id);
      }
    } else
    if (!isEditMode && (
    !currentLayer || currentLayer.id || isHidden && show)) {
      // Reset layer
      resetLayer();
    }
  }, [layer, show]);
  (0,react.useEffect)(() => {
    if (resource) {
      setCurrentLayer(resource);
    }
  }, [resource]);
  // Validation
  (0,react.useEffect)(() => {
    validate();
  }, [
  currentLayer ? currentLayer.name : '',
  currentLayer ? currentLayer.descr : '']);

  // Show/hide
  if (isHidden && show) {
    setIsHidden(false);
  }
  return (0,emotion_react_browser_esm.jsx)(Modal/* default */.Z, { disablePrimaryButton: disableSave, onHandledPrimaryAction: onSave, onHide: hide, primaryButtonName: isEditMode ? (0,TranslatorSingleton.t)('Save') : (0,TranslatorSingleton.t)('Add'), show: show, width: "55%", title: (0,emotion_react_browser_esm.jsx)("h4", null,
    isEditMode ? (0,emotion_react_browser_esm.jsx)(Icons/* default.EditAlt */.Z.EditAlt, { css: utils/* StyledIcon */.xL }) : (0,emotion_react_browser_esm.jsx)(Icons/* default.PlusLarge */.Z.PlusLarge, { css: utils/* StyledIcon */.xL }),
    isEditMode ?
    (0,TranslatorSingleton.t)('Edit annotation layer properties') :
    (0,TranslatorSingleton.t)('Add annotation layer')) },

  (0,emotion_react_browser_esm.jsx)(StyledAnnotationLayerTitle, null,
  (0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Basic information'))),

  (0,emotion_react_browser_esm.jsx)(LayerContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('Annotation layer name'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)("input", { name: "name", onChange: onTextChange, type: "text", value: currentLayer == null ? void 0 : currentLayer.name })),

  (0,emotion_react_browser_esm.jsx)(LayerContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('description')),
  (0,emotion_react_browser_esm.jsx)("textarea", { name: "descr", value: currentLayer == null ? void 0 : currentLayer.descr, placeholder: (0,TranslatorSingleton.t)('Description (this can be seen in the list)'), onChange: onTextChange })));


};
/* harmony default export */ const annotationlayers_AnnotationLayerModal = ((0,withToasts/* default */.Z)(AnnotationLayerModal));
;// CONCATENATED MODULE: ./src/views/CRUD/annotationlayers/AnnotationLayersList.tsx
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
const MOMENT_FORMAT = 'MMM DD, YYYY';
function AnnotationLayersList({ addDangerToast, addSuccessToast, user }) {
  const { state: { loading, resourceCount: layersCount, resourceCollection: layers, bulkSelectEnabled }, hasPerm, fetchData, refreshData, toggleBulkSelect } = (0,hooks/* useListViewResource */.Yi)('annotation_layer', (0,TranslatorSingleton.t)('Annotation layers'), addDangerToast);
  const [annotationLayerModalOpen, setAnnotationLayerModalOpen] = (0,react.useState)(false);
  const [currentAnnotationLayer, setCurrentAnnotationLayer] = (0,react.useState)(null);
  const [layerCurrentlyDeleting, setLayerCurrentlyDeleting] = (0,react.useState)(null);
  const handleLayerDelete = ({ id, name }) => {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/annotation_layer/${id}` }).
    then(() => {
      refreshData();
      setLayerCurrentlyDeleting(null);
      addSuccessToast((0,TranslatorSingleton.t)('Deleted: %s', name));
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting %s: %s', name, errMsg))));
  };
  const handleBulkLayerDelete = (layersToDelete) => {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/annotation_layer/?q=${rison_default().encode(layersToDelete.map(({ id }) => id))}` }).
    then(({ json = {} }) => {
      refreshData();
      addSuccessToast(json.message);
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting the selected layers: %s', errMsg))));
  };
  const canCreate = hasPerm('can_write');
  const canEdit = hasPerm('can_write');
  const canDelete = hasPerm('can_write');
  function handleAnnotationLayerEdit(layer) {
    setCurrentAnnotationLayer(layer);
    setAnnotationLayerModalOpen(true);
  }
  const initialSort = [{ id: 'name', desc: true }];
  const columns = (0,react.useMemo)(() => [
  {
    accessor: 'name',
    Header: (0,TranslatorSingleton.t)('Name'),
    Cell: ({ row: { original: { id, name } } }) => {
      let hasHistory = true;
      try {
        (0,react_router/* useHistory */.k6)();
      }
      catch (err) {
        // If error is thrown, we know not to use <Link> in render
        hasHistory = false;
      }
      if (hasHistory) {
        return (0,emotion_react_browser_esm.jsx)(react_router_dom/* Link */.rU, { to: `/annotationmodelview/${id}/annotation` }, name);
      }
      return (0,emotion_react_browser_esm.jsx)("a", { href: `/annotationmodelview/${id}/annotation` }, name);
    } },

  {
    accessor: 'descr',
    Header: (0,TranslatorSingleton.t)('Description') },

  {
    Cell: ({ row: { original: { changed_on: changedOn } } }) => {
      const date = new Date(changedOn);
      const utc = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
      return moment_default()(utc).format(MOMENT_FORMAT);
    },
    Header: (0,TranslatorSingleton.t)('Last modified'),
    accessor: 'changed_on',
    size: 'xl' },

  {
    Cell: ({ row: { original: { created_on: createdOn } } }) => {
      const date = new Date(createdOn);
      const utc = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
      return moment_default()(utc).format(MOMENT_FORMAT);
    },
    Header: (0,TranslatorSingleton.t)('Created on'),
    accessor: 'created_on',
    size: 'xl' },

  {
    accessor: 'created_by',
    disableSortBy: true,
    Header: (0,TranslatorSingleton.t)('Created by'),
    Cell: ({ row: { original: { created_by: createdBy } } }) => createdBy ? `${createdBy.first_name} ${createdBy.last_name}` : '',
    size: 'xl' },

  {
    Cell: ({ row: { original } }) => {
      const handleEdit = () => handleAnnotationLayerEdit(original);
      const handleDelete = () => setLayerCurrentlyDeleting(original);
      const actions = [
      canEdit ?
      {
        label: 'edit-action',
        tooltip: (0,TranslatorSingleton.t)('Edit template'),
        placement: 'bottom',
        icon: 'Edit',
        onClick: handleEdit } :

      null,
      canDelete ?
      {
        label: 'delete-action',
        tooltip: (0,TranslatorSingleton.t)('Delete template'),
        placement: 'bottom',
        icon: 'Trash',
        onClick: handleDelete } :

      null].
      filter((item) => !!item);
      return (0,emotion_react_browser_esm.jsx)(ActionsBar/* default */.Z, { actions: actions });
    },
    Header: (0,TranslatorSingleton.t)('Actions'),
    id: 'actions',
    disableSortBy: true,
    hidden: !canEdit && !canDelete,
    size: 'xl' }],

  [canDelete, canCreate]);
  const subMenuButtons = [];
  if (canCreate) {
    subMenuButtons.push({
      name: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), " ", (0,TranslatorSingleton.t)('Annotation layer')),

      buttonStyle: 'primary',
      onClick: () => {
        handleAnnotationLayerEdit(null);
      } });

  }
  if (canDelete) {
    subMenuButtons.push({
      name: (0,TranslatorSingleton.t)('Bulk select'),
      onClick: toggleBulkSelect,
      buttonStyle: 'secondary' });

  }
  const filters = (0,react.useMemo)(() => [
  {
    Header: (0,TranslatorSingleton.t)('Created by'),
    id: 'created_by',
    input: 'select',
    operator: ListView/* FilterOperator.relationOneMany */.p.relationOneMany,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchRelated */.tm)('annotation_layer', 'created_by', (0,utils/* createErrorHandler */.v$)((errMsg) => (0,TranslatorSingleton.t)('An error occurred while fetching dataset datasource values: %s', errMsg)), user),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('Search'),
    id: 'name',
    input: 'search',
    operator: ListView/* FilterOperator.contains */.p.contains }],

  []);
  const EmptyStateButton = (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "primary", onClick: () => {
      handleAnnotationLayerEdit(null);
    } },
  (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), " ", (0,TranslatorSingleton.t)('Annotation layer')));


  const emptyState = {
    message: (0,TranslatorSingleton.t)('No annotation layers yet'),
    slot: EmptyStateButton };

  const onLayerAdd = (id) => {
    window.location.href = `/annotationmodelview/${id}/annotation`;
  };
  const onModalHide = () => {
    refreshData();
    setAnnotationLayerModalOpen(false);
  };
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(SubMenu/* default */.Z, { name: (0,TranslatorSingleton.t)('Annotation layers'), buttons: subMenuButtons }),
  (0,emotion_react_browser_esm.jsx)(annotationlayers_AnnotationLayerModal, { addDangerToast: addDangerToast, layer: currentAnnotationLayer, onLayerAdd: onLayerAdd, onHide: onModalHide, show: annotationLayerModalOpen }),
  layerCurrentlyDeleting && (0,emotion_react_browser_esm.jsx)(DeleteModal/* default */.Z, { description: (0,TranslatorSingleton.t)('This action will permanently delete the layer.'), onConfirm: () => {
      if (layerCurrentlyDeleting) {
        handleLayerDelete(layerCurrentlyDeleting);
      }
    }, onHide: () => setLayerCurrentlyDeleting(null), open: true, title: (0,TranslatorSingleton.t)('Delete Layer?') }),
  (0,emotion_react_browser_esm.jsx)(ConfirmStatusChange/* default */.Z, { title: (0,TranslatorSingleton.t)('Please confirm'), description: (0,TranslatorSingleton.t)('Are you sure you want to delete the selected layers?'), onConfirm: handleBulkLayerDelete },
  (confirmDelete) => {
    const bulkActions = canDelete ?
    [
    {
      key: 'delete',
      name: (0,TranslatorSingleton.t)('Delete'),
      onSelect: confirmDelete,
      type: 'danger' }] :


    [];
    return (0,emotion_react_browser_esm.jsx)(ListView/* default */.Z, { className: "annotation-layers-list-view", columns: columns, count: layersCount, data: layers, fetchData: fetchData, filters: filters, initialSort: initialSort, loading: loading, pageSize: PAGE_SIZE, bulkActions: bulkActions, bulkSelectEnabled: bulkSelectEnabled, disableBulkSelect: toggleBulkSelect, emptyState: emptyState });
  }));


}
/* harmony default export */ const annotationlayers_AnnotationLayersList = ((0,withToasts/* default */.Z)(AnnotationLayersList));

/***/ })

}]);