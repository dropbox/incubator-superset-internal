(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[665],{

/***/ 45578:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIteratee = __webpack_require__(67206),
    baseUniq = __webpack_require__(45652);

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ }),

/***/ 27989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 13434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45578);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(60650);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(38849);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(21173);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(37840);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15926);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(91877);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(46415);
/* harmony import */ var src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40768);
/* harmony import */ var src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34858);
/* harmony import */ var src_utils_export__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32228);
/* harmony import */ var src_components_ConfirmStatusChange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19259);
/* harmony import */ var src_components_Menu_SubMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62753);
/* harmony import */ var src_components_FaveStar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36674);
/* harmony import */ var src_components_ListView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9678);
/* harmony import */ var src_components_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38703);
/* harmony import */ var src_utils_localStorageHelpers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(61337);
/* harmony import */ var src_components_MessageToasts_withToasts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14114);
/* harmony import */ var src_explore_components_PropertiesModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(83673);
/* harmony import */ var src_components_ImportModal_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27989);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(58593);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38097);
/* harmony import */ var src_dashboard_components_nativeFilters_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1510);
/* harmony import */ var src_setup_setupPlugins__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(69753);
/* harmony import */ var src_components_CertifiedIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(83268);
/* harmony import */ var _ChartCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(34024);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(11965);
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
const PASSWORDS_NEEDED_MESSAGE = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('The passwords for the databases below are needed in order to ' +
'import them together with the charts. Please note that the ' +
'"Secure Extra" and "Certificate" sections of ' +
'the database configuration are not present in export files, and ' +
'should be added manually after the import if they are needed.');
const CONFIRM_OVERWRITE_MESSAGE = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('You are importing one or more charts that already exist. ' +
'Overwriting might cause you to lose some of your work. Are you ' +
'sure you want to overwrite?');
(0,src_setup_setupPlugins__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();
const registry = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)();
const createFetchDatasets = async (filterValue = '', page, pageSize) => {var _json$result;
  // add filters if filterValue
  const filters = filterValue ?
  { filters: [{ col: 'table_name', opr: 'sw', value: filterValue }] } :
  {};
  const queryParams = rison__WEBPACK_IMPORTED_MODULE_2___default().encode({
    columns: ['datasource_name', 'datasource_id'],
    keys: ['none'],
    order_column: 'table_name',
    order_direction: 'asc',
    page,
    page_size: pageSize,
    ...filters });

  const { json = {} } = await _superset_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"].get */ .Z.get({
    endpoint: `/api/v1/dataset/?q=${queryParams}` });

  const datasets = json == null ? void 0 : (_json$result = json.result) == null ? void 0 : _json$result.map(({ table_name: tableName, id }) => ({
    label: tableName,
    value: id }));

  return {
    data: lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default()(datasets, 'value'),
    totalCount: json == null ? void 0 : json.count };

};
const Actions = _superset_ui_core__WEBPACK_IMPORTED_MODULE_24__/* .styled.div */ .iK.div`
  color: ${({ theme }) => theme.colors.grayscale.base};
`;
function ChartList(props) {
  const { addDangerToast, addSuccessToast } = props;
  const { state: { loading, resourceCount: chartCount, resourceCollection: charts, bulkSelectEnabled }, setResourceCollection: setCharts, hasPerm, fetchData, toggleBulkSelect, refreshData } = (0,src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useListViewResource */ .Yi)('chart', (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('chart'), addDangerToast);
  const chartIds = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => charts.map((c) => c.id), [charts]);
  const [saveFavoriteStatus, favoriteStatus] = (0,src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useFavoriteStatus */ .NE)('chart', chartIds, addDangerToast);
  const { sliceCurrentlyEditing, handleChartUpdated, openChartEditModal, closeChartEditModal } = (0,src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useChartEditModal */ .fF)(setCharts, charts);
  const [importingChart, showImportModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [passwordFields, setPasswordFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [preparingExport, setPreparingExport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const { userId } = props.user;
  const userKey = (0,src_utils_localStorageHelpers__WEBPACK_IMPORTED_MODULE_25__/* .getFromLocalStorage */ .f)(userId == null ? void 0 : userId.toString(), null);
  const openChartImportModal = () => {
    showImportModal(true);
  };
  const closeChartImportModal = () => {
    showImportModal(false);
  };
  const handleChartImport = () => {
    showImportModal(false);
    refreshData();
  };
  const canCreate = hasPerm('can_write');
  const canEdit = hasPerm('can_write');
  const canDelete = hasPerm('can_write');
  const canExport = hasPerm('can_read') && (0,src_featureFlags__WEBPACK_IMPORTED_MODULE_26__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_27__/* .FeatureFlag.VERSIONED_EXPORT */ .T.VERSIONED_EXPORT);
  const initialSort = [{ id: 'changed_on_delta_humanized', desc: true }];
  const handleBulkChartExport = (chartsToExport) => {
    const ids = chartsToExport.map(({ id }) => id);
    (0,src_utils_export__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)('chart', ids, () => {
      setPreparingExport(false);
    });
    setPreparingExport(true);
  };
  function handleBulkChartDelete(chartsToDelete) {
    _superset_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"]["delete"] */ .Z["delete"]({
      endpoint: `/api/v1/chart/?q=${rison__WEBPACK_IMPORTED_MODULE_2___default().encode(chartsToDelete.map(({ id }) => id))}` }).
    then(({ json = {} }) => {
      refreshData();
      addSuccessToast(json.message);
    }, (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_4__/* .createErrorHandler */ .v$)((errMsg) => addDangerToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('There was an issue deleting the selected charts: %s', errMsg))));
  }
  const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [
  ...(props.user.userId ?
  [
  {
    Cell: ({ row: { original: { id } } }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_FaveStar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, { itemId: id, saveFaveStar: saveFavoriteStatus, isStarred: favoriteStatus[id] }),
    Header: '',
    id: 'id',
    disableSortBy: true,
    size: 'xs' }] :


  []),
  {
    Cell: ({ row: { original: { url, slice_name: sliceName, certified_by: certifiedBy, certification_details: certificationDetails } } }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)("a", { href: url },
    certifiedBy && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_CertifiedIcon__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, { certifiedBy: certifiedBy, details: certificationDetails }), ' '),

    sliceName),

    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Chart'),
    accessor: 'slice_name' },

  {
    Cell: ({ row: { original: { viz_type: vizType } } }) => {var _registry$get;return ((_registry$get = registry.get(vizType)) == null ? void 0 : _registry$get.name) || vizType;},
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Visualization type'),
    accessor: 'viz_type',
    size: 'xxl' },

  {
    Cell: ({ row: { original: { datasource_name_text: dsNameTxt, datasource_url: dsUrl } } }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)("a", { href: dsUrl }, dsNameTxt),
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Dataset'),
    accessor: 'datasource_id',
    disableSortBy: true,
    size: 'xl' },

  {
    Cell: ({ row: { original: { last_saved_by: lastSavedBy, changed_by_url: changedByUrl } } }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)("a", { href: changedByUrl },
    lastSavedBy != null && lastSavedBy.first_name ?
    `${lastSavedBy == null ? void 0 : lastSavedBy.first_name} ${lastSavedBy == null ? void 0 : lastSavedBy.last_name}` :
    null),

    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Modified by'),
    accessor: 'last_saved_by.first_name',
    size: 'xl' },

  {
    Cell: ({ row: { original: { last_saved_at: lastSavedAt } } }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)("span", { className: "no-wrap" },
    lastSavedAt ? moment__WEBPACK_IMPORTED_MODULE_3___default().utc(lastSavedAt).fromNow() : null),

    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Last modified'),
    accessor: 'last_saved_at',
    size: 'xl' },

  {
    accessor: 'owners',
    hidden: true,
    disableSortBy: true },

  {
    Cell: ({ row: { original: { created_by: createdBy } } }) => createdBy ? `${createdBy.first_name} ${createdBy.last_name}` : '',
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Created by'),
    accessor: 'created_by',
    disableSortBy: true,
    size: 'xl' },

  {
    Cell: ({ row: { original } }) => {
      const handleDelete = () => (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_4__/* .handleChartDelete */ .Gm)(original, addSuccessToast, addDangerToast, refreshData);
      const openEditModal = () => openChartEditModal(original);
      const handleExport = () => handleBulkChartExport([original]);
      if (!canEdit && !canDelete && !canExport) {
        return null;
      }
      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(Actions, { className: "actions" },
      canDelete && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_ConfirmStatusChange__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, { title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Please confirm'), description: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Are you sure you want to delete'), ' ',
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)("b", null, original.slice_name), "?"),
        onConfirm: handleDelete },
      (confirmDelete) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_15__/* .Tooltip */ .u, { id: "delete-action-tooltip", title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Delete'), placement: "bottom" },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)("span", { role: "button", tabIndex: 0, className: "action-button", onClick: confirmDelete },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_16__/* ["default"].Trash */ .Z.Trash, null)))),



      canExport && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_15__/* .Tooltip */ .u, { id: "export-action-tooltip", title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Export'), placement: "bottom" },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)("span", { role: "button", tabIndex: 0, className: "action-button", onClick: handleExport },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_16__/* ["default"].Share */ .Z.Share, null))),


      canEdit && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_15__/* .Tooltip */ .u, { id: "edit-action-tooltip", title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Edit'), placement: "bottom" },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)("span", { role: "button", tabIndex: 0, className: "action-button", onClick: openEditModal },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_16__/* ["default"].EditAlt */ .Z.EditAlt, null))));



    },
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Actions'),
    id: 'actions',
    disableSortBy: true,
    hidden: !canEdit && !canDelete }],

  [
  canEdit,
  canDelete,
  canExport,
  ...(props.user.userId ? [favoriteStatus] : [])]);

  const favoritesFilter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Favorite'),
    id: 'id',
    urlDisplay: 'favorite',
    input: 'select',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_10__/* .FilterOperator.chartIsFav */ .p.chartIsFav,
    unfilteredLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Any'),
    selects: [
    { label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Yes'), value: true },
    { label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('No'), value: false }] }),

  []);
  const filters = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [
  {
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Owner'),
    id: 'owners',
    input: 'select',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_10__/* .FilterOperator.relationManyMany */ .p.relationManyMany,
    unfilteredLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('All'),
    fetchSelects: (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_4__/* .createFetchRelated */ .tm)('chart', 'owners', (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_4__/* .createErrorHandler */ .v$)((errMsg) => addDangerToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('An error occurred while fetching chart owners values: %s', errMsg))), props.user),
    paginate: true },

  {
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Created by'),
    id: 'created_by',
    input: 'select',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_10__/* .FilterOperator.relationOneMany */ .p.relationOneMany,
    unfilteredLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('All'),
    fetchSelects: (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_4__/* .createFetchRelated */ .tm)('chart', 'created_by', (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_4__/* .createErrorHandler */ .v$)((errMsg) => addDangerToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('An error occurred while fetching chart created by values: %s', errMsg))), props.user),
    paginate: true },

  {
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Viz type'),
    id: 'viz_type',
    input: 'select',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_10__/* .FilterOperator.equals */ .p.equals,
    unfilteredLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('All'),
    selects: registry.
    keys().
    filter((k) => {var _registry$get2;return (0,src_dashboard_components_nativeFilters_utils__WEBPACK_IMPORTED_MODULE_17__/* .nativeFilterGate */ .X3)(((_registry$get2 = registry.get(k)) == null ? void 0 : _registry$get2.behaviors) || []);}).
    map((k) => {var _registry$get3;return { label: ((_registry$get3 = registry.get(k)) == null ? void 0 : _registry$get3.name) || k, value: k };}).
    sort((a, b) => {
      if (!a.label || !b.label) {
        return 0;
      }
      if (a.label > b.label) {
        return 1;
      }
      if (a.label < b.label) {
        return -1;
      }
      return 0;
    }) },

  {
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Dataset'),
    id: 'datasource_id',
    input: 'select',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_10__/* .FilterOperator.equals */ .p.equals,
    unfilteredLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('All'),
    fetchSelects: createFetchDatasets,
    paginate: true },

  ...(props.user.userId ? [favoritesFilter] : []),
  {
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Certified'),
    id: 'id',
    urlDisplay: 'certified',
    input: 'select',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_10__/* .FilterOperator.chartIsCertified */ .p.chartIsCertified,
    unfilteredLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Any'),
    selects: [
    { label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Yes'), value: true },
    { label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('No'), value: false }] },


  {
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Search'),
    id: 'slice_name',
    input: 'search',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_10__/* .FilterOperator.chartAllText */ .p.chartAllText }],

  [addDangerToast, favoritesFilter, props.user]);
  const sortTypes = [
  {
    desc: false,
    id: 'slice_name',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Alphabetical'),
    value: 'alphabetical' },

  {
    desc: true,
    id: 'changed_on_delta_humanized',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Recently modified'),
    value: 'recently_modified' },

  {
    desc: false,
    id: 'changed_on_delta_humanized',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Least recently modified'),
    value: 'least_recently_modified' }];


  function renderCard(chart) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(_ChartCard__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, { chart: chart, showThumbnails: userKey ?
      userKey.thumbnails :
      (0,src_featureFlags__WEBPACK_IMPORTED_MODULE_26__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_27__/* .FeatureFlag.THUMBNAILS */ .T.THUMBNAILS), hasPerm: hasPerm, openChartEditModal: openChartEditModal, bulkSelectEnabled: bulkSelectEnabled, addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, refreshData: refreshData, loading: loading, favoriteStatus: favoriteStatus[chart.id], saveFavoriteStatus: saveFavoriteStatus, handleBulkChartExport: handleBulkChartExport });
  }
  const subMenuButtons = [];
  if (canDelete || canExport) {
    subMenuButtons.push({
      name: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Bulk select'),
      buttonStyle: 'secondary',
      'data-test': 'bulk-select',
      onClick: toggleBulkSelect });

  }
  if (canCreate) {
    subMenuButtons.push({
      name: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)("i", { className: "fa fa-plus" }), " ", (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Chart')),

      buttonStyle: 'primary',
      onClick: () => {
        window.location.assign('/chart/add');
      } });

    if ((0,src_featureFlags__WEBPACK_IMPORTED_MODULE_26__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_27__/* .FeatureFlag.VERSIONED_EXPORT */ .T.VERSIONED_EXPORT)) {
      subMenuButtons.push({
        name: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_15__/* .Tooltip */ .u, { id: "import-tooltip", title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Import charts'), placement: "bottomRight" },
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_16__/* ["default"].Import */ .Z.Import, null)),

        buttonStyle: 'link',
        onClick: openChartImportModal });

    }
  }
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_Menu_SubMenu__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, { name: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Charts'), buttons: subMenuButtons }),
  sliceCurrentlyEditing && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_explore_components_PropertiesModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, { onHide: closeChartEditModal, onSave: handleChartUpdated, show: true, slice: sliceCurrentlyEditing }),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_ConfirmStatusChange__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, { title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Please confirm'), description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Are you sure you want to delete the selected charts?'), onConfirm: handleBulkChartDelete },
  (confirmDelete) => {
    const bulkActions = [];
    if (canDelete) {
      bulkActions.push({
        key: 'delete',
        name: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Delete'),
        type: 'danger',
        onSelect: confirmDelete });

    }
    if (canExport) {
      bulkActions.push({
        key: 'export',
        name: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('Export'),
        type: 'primary',
        onSelect: handleBulkChartExport });

    }
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_ListView__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, { bulkActions: bulkActions, bulkSelectEnabled: bulkSelectEnabled, cardSortSelectOptions: sortTypes, className: "chart-list-view", columns: columns, count: chartCount, data: charts, disableBulkSelect: toggleBulkSelect, fetchData: fetchData, filters: filters, initialSort: initialSort, loading: loading, pageSize: PAGE_SIZE, renderCard: renderCard, showThumbnails: userKey ?
      userKey.thumbnails :
      (0,src_featureFlags__WEBPACK_IMPORTED_MODULE_26__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_27__/* .FeatureFlag.THUMBNAILS */ .T.THUMBNAILS), defaultViewMode: (0,src_featureFlags__WEBPACK_IMPORTED_MODULE_26__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_27__/* .FeatureFlag.LISTVIEWS_DEFAULT_CARD_VIEW */ .T.LISTVIEWS_DEFAULT_CARD_VIEW) ?
      'card' :
      'table' });
  }),


  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_ImportModal_index__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, { resourceName: "chart", resourceLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_21__.t)('chart'), passwordsNeededMessage: PASSWORDS_NEEDED_MESSAGE, confirmOverwriteMessage: CONFIRM_OVERWRITE_MESSAGE, addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, onModelImport: handleChartImport, show: importingChart, onHide: closeChartImportModal, passwordFields: passwordFields, setPasswordFields: setPasswordFields }),
  preparingExport && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_28__.jsx)(src_components_Loading__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, null));

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,src_components_MessageToasts_withToasts__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(ChartList));

/***/ })

}]);