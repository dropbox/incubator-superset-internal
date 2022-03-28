"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[9452],{

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

/***/ 69053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ csstemplates_CssTemplatesList)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
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
// EXTERNAL MODULE: ./src/components/DeleteModal/index.tsx
var DeleteModal = __webpack_require__(17198);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./src/components/ConfirmStatusChange/index.tsx
var ConfirmStatusChange = __webpack_require__(19259);
// EXTERNAL MODULE: ./src/components/ListView/ActionsBar.tsx
var ActionsBar = __webpack_require__(29848);
// EXTERNAL MODULE: ./src/components/ListView/index.ts + 11 modules
var ListView = __webpack_require__(9678);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./src/components/AsyncAceEditor/index.tsx
var AsyncAceEditor = __webpack_require__(94670);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/views/CRUD/csstemplates/CssTemplateModal.tsx
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








const StyledCssTemplateTitle = style/* styled.div */.iK.div`
  margin: ${({ theme }) => theme.gridUnit * 2}px auto
    ${({ theme }) => theme.gridUnit * 4}px auto;
`;
const StyledCssEditor = (0,style/* styled */.iK)(AsyncAceEditor/* CssEditor */.ry)`
  border-radius: ${({ theme }) => theme.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.light2};
`;
const TemplateContainer = style/* styled.div */.iK.div`
  margin-bottom: ${({ theme }) => theme.gridUnit * 10}px;

  .control-label {
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  }

  .required {
    margin-left: ${({ theme }) => theme.gridUnit / 2}px;
    color: ${({ theme }) => theme.colors.error.base};
  }

  input[type='text'] {
    padding: ${({ theme }) => theme.gridUnit * 1.5}px
      ${({ theme }) => theme.gridUnit * 2}px;
    border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    border-radius: ${({ theme }) => theme.gridUnit}px;
    width: 50%;
  }
`;
const CssTemplateModal = ({ addDangerToast, onCssTemplateAdd, onHide, show, cssTemplate = null }) => {
  const [disableSave, setDisableSave] = (0,react.useState)(true);
  const [currentCssTemplate, setCurrentCssTemplate] = (0,react.useState)(null);
  const [isHidden, setIsHidden] = (0,react.useState)(true);
  const isEditMode = cssTemplate !== null;
  // cssTemplate fetch logic
  const { state: { loading, resource }, fetchResource, createResource, updateResource } = (0,hooks/* useSingleViewResource */.LE)('css_template', (0,TranslatorSingleton.t)('css_template'), addDangerToast);
  // Functions
  const hide = () => {
    setIsHidden(true);
    onHide();
  };
  const onSave = () => {
    if (isEditMode) {
      // Edit
      if (currentCssTemplate && currentCssTemplate.id) {
        const update_id = currentCssTemplate.id;
        delete currentCssTemplate.id;
        delete currentCssTemplate.created_by;
        updateResource(update_id, currentCssTemplate).then((response) => {
          if (!response) {
            return;
          }
          if (onCssTemplateAdd) {
            onCssTemplateAdd();
          }
          hide();
        });
      }
    } else
    if (currentCssTemplate) {
      // Create
      createResource(currentCssTemplate).then((response) => {
        if (!response) {
          return;
        }
        if (onCssTemplateAdd) {
          onCssTemplateAdd();
        }
        hide();
      });
    }
  };
  const onTemplateNameChange = (event) => {
    const { target } = event;
    const data = {
      ...currentCssTemplate,
      template_name: currentCssTemplate ? currentCssTemplate.template_name : '',
      css: currentCssTemplate ? currentCssTemplate.css : '' };

    data[target.name] = target.value;
    setCurrentCssTemplate(data);
  };
  const onCssChange = (css) => {
    const data = {
      ...currentCssTemplate,
      template_name: currentCssTemplate ? currentCssTemplate.template_name : '',
      css };

    setCurrentCssTemplate(data);
  };
  const validate = () => {
    if (currentCssTemplate &&
    currentCssTemplate.template_name.length &&
    currentCssTemplate.css &&
    currentCssTemplate.css.length) {
      setDisableSave(false);
    } else
    {
      setDisableSave(true);
    }
  };
  // Initialize
  (0,react.useEffect)(() => {
    if (isEditMode && (
    !currentCssTemplate ||
    !currentCssTemplate.id ||
    cssTemplate && cssTemplate.id !== currentCssTemplate.id ||
    isHidden && show)) {
      if (cssTemplate && cssTemplate.id !== null && !loading) {
        const id = cssTemplate.id || 0;
        fetchResource(id);
      }
    } else
    if (!isEditMode && (
    !currentCssTemplate || currentCssTemplate.id || isHidden && show)) {
      setCurrentCssTemplate({
        template_name: '',
        css: '' });

    }
  }, [cssTemplate]);
  (0,react.useEffect)(() => {
    if (resource) {
      setCurrentCssTemplate(resource);
    }
  }, [resource]);
  // Validation
  (0,react.useEffect)(() => {
    validate();
  }, [
  currentCssTemplate ? currentCssTemplate.template_name : '',
  currentCssTemplate ? currentCssTemplate.css : '']);

  // Show/hide
  if (isHidden && show) {
    setIsHidden(false);
  }
  return (0,emotion_react_browser_esm.jsx)(Modal/* default */.Z, { disablePrimaryButton: disableSave, onHandledPrimaryAction: onSave, onHide: hide, primaryButtonName: isEditMode ? (0,TranslatorSingleton.t)('Save') : (0,TranslatorSingleton.t)('Add'), show: show, width: "55%", title: (0,emotion_react_browser_esm.jsx)("h4", null,
    isEditMode ? (0,emotion_react_browser_esm.jsx)(Icons/* default.EditAlt */.Z.EditAlt, { css: utils/* StyledIcon */.xL }) : (0,emotion_react_browser_esm.jsx)(Icons/* default.PlusLarge */.Z.PlusLarge, { css: utils/* StyledIcon */.xL }),
    isEditMode ?
    (0,TranslatorSingleton.t)('Edit CSS template properties') :
    (0,TranslatorSingleton.t)('Add CSS template')) },

  (0,emotion_react_browser_esm.jsx)(StyledCssTemplateTitle, null,
  (0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Basic information'))),

  (0,emotion_react_browser_esm.jsx)(TemplateContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('CSS template name'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)("input", { name: "template_name", onChange: onTemplateNameChange, type: "text", value: currentCssTemplate == null ? void 0 : currentCssTemplate.template_name })),

  (0,emotion_react_browser_esm.jsx)(TemplateContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('css'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)(StyledCssEditor, { onChange: onCssChange, value: currentCssTemplate == null ? void 0 : currentCssTemplate.css, width: "100%" })));


};
/* harmony default export */ const csstemplates_CssTemplateModal = ((0,withToasts/* default */.Z)(CssTemplateModal));
;// CONCATENATED MODULE: ./src/views/CRUD/csstemplates/CssTemplatesList.tsx
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
function CssTemplatesList({ addDangerToast, addSuccessToast, user }) {
  const { state: { loading, resourceCount: templatesCount, resourceCollection: templates, bulkSelectEnabled }, hasPerm, fetchData, refreshData, toggleBulkSelect } = (0,hooks/* useListViewResource */.Yi)('css_template', (0,TranslatorSingleton.t)('CSS templates'), addDangerToast);
  const [cssTemplateModalOpen, setCssTemplateModalOpen] = (0,react.useState)(false);
  const [currentCssTemplate, setCurrentCssTemplate] = (0,react.useState)(null);
  const canCreate = hasPerm('can_write');
  const canEdit = hasPerm('can_write');
  const canDelete = hasPerm('can_write');
  const [templateCurrentlyDeleting, setTemplateCurrentlyDeleting] = (0,react.useState)(null);
  const handleTemplateDelete = ({ id, template_name }) => {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/css_template/${id}` }).
    then(() => {
      refreshData();
      setTemplateCurrentlyDeleting(null);
      addSuccessToast((0,TranslatorSingleton.t)('Deleted: %s', template_name));
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting %s: %s', template_name, errMsg))));
  };
  const handleBulkTemplateDelete = (templatesToDelete) => {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/css_template/?q=${rison_default().encode(templatesToDelete.map(({ id }) => id))}` }).
    then(({ json = {} }) => {
      refreshData();
      addSuccessToast(json.message);
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting the selected templates: %s', errMsg))));
  };
  function handleCssTemplateEdit(cssTemplate) {
    setCurrentCssTemplate(cssTemplate);
    setCssTemplateModalOpen(true);
  }
  const initialSort = [{ id: 'template_name', desc: true }];
  const columns = (0,react.useMemo)(() => [
  {
    accessor: 'template_name',
    Header: (0,TranslatorSingleton.t)('Name') },

  {
    Cell: ({ row: { original: { changed_on_delta_humanized: changedOn, changed_by: changedBy } } }) => {
      let name = 'null';
      if (changedBy) {
        name = `${changedBy.first_name} ${changedBy.last_name}`;
      }
      return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "allow-run-async-header-tooltip", title: (0,TranslatorSingleton.t)('Last modified by %s', name), placement: "right" },
      (0,emotion_react_browser_esm.jsx)("span", null, changedOn));

    },
    Header: (0,TranslatorSingleton.t)('Last modified'),
    accessor: 'changed_on_delta_humanized',
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
    size: 'xl',
    disableSortBy: true },

  {
    accessor: 'created_by',
    disableSortBy: true,
    Header: (0,TranslatorSingleton.t)('Created by'),
    Cell: ({ row: { original: { created_by: createdBy } } }) => createdBy ? `${createdBy.first_name} ${createdBy.last_name}` : '',
    size: 'xl' },

  {
    Cell: ({ row: { original } }) => {
      const handleEdit = () => handleCssTemplateEdit(original);
      const handleDelete = () => setTemplateCurrentlyDeleting(original);
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
  const menuData = {
    name: (0,TranslatorSingleton.t)('CSS templates') };

  const subMenuButtons = [];
  if (canCreate) {
    subMenuButtons.push({
      name: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), " ", (0,TranslatorSingleton.t)('CSS template')),

      buttonStyle: 'primary',
      onClick: () => {
        setCurrentCssTemplate(null);
        setCssTemplateModalOpen(true);
      } });

  }
  if (canDelete) {
    subMenuButtons.push({
      name: (0,TranslatorSingleton.t)('Bulk select'),
      onClick: toggleBulkSelect,
      buttonStyle: 'secondary' });

  }
  menuData.buttons = subMenuButtons;
  const filters = (0,react.useMemo)(() => [
  {
    Header: (0,TranslatorSingleton.t)('Created by'),
    id: 'created_by',
    input: 'select',
    operator: ListView/* FilterOperator.relationOneMany */.p.relationOneMany,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchRelated */.tm)('css_template', 'created_by', (0,utils/* createErrorHandler */.v$)((errMsg) => (0,TranslatorSingleton.t)('An error occurred while fetching dataset datasource values: %s', errMsg)), user),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('Search'),
    id: 'template_name',
    input: 'search',
    operator: ListView/* FilterOperator.contains */.p.contains }],

  []);
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(SubMenu/* default */.Z, menuData),
  (0,emotion_react_browser_esm.jsx)(csstemplates_CssTemplateModal, { addDangerToast: addDangerToast, cssTemplate: currentCssTemplate, onCssTemplateAdd: () => refreshData(), onHide: () => setCssTemplateModalOpen(false), show: cssTemplateModalOpen }),
  templateCurrentlyDeleting && (0,emotion_react_browser_esm.jsx)(DeleteModal/* default */.Z, { description: (0,TranslatorSingleton.t)('This action will permanently delete the template.'), onConfirm: () => {
      if (templateCurrentlyDeleting) {
        handleTemplateDelete(templateCurrentlyDeleting);
      }
    }, onHide: () => setTemplateCurrentlyDeleting(null), open: true, title: (0,TranslatorSingleton.t)('Delete Template?') }),
  (0,emotion_react_browser_esm.jsx)(ConfirmStatusChange/* default */.Z, { title: (0,TranslatorSingleton.t)('Please confirm'), description: (0,TranslatorSingleton.t)('Are you sure you want to delete the selected templates?'), onConfirm: handleBulkTemplateDelete },
  (confirmDelete) => {
    const bulkActions = canDelete ?
    [
    {
      key: 'delete',
      name: (0,TranslatorSingleton.t)('Delete'),
      onSelect: confirmDelete,
      type: 'danger' }] :


    [];
    return (0,emotion_react_browser_esm.jsx)(ListView/* default */.Z, { className: "css-templates-list-view", columns: columns, count: templatesCount, data: templates, fetchData: fetchData, filters: filters, initialSort: initialSort, loading: loading, pageSize: PAGE_SIZE, bulkActions: bulkActions, bulkSelectEnabled: bulkSelectEnabled, disableBulkSelect: toggleBulkSelect });
  }));


}
/* harmony default export */ const csstemplates_CssTemplatesList = ((0,withToasts/* default */.Z)(CssTemplatesList));

/***/ })

}]);