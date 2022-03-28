"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[5656],{

/***/ 73995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DatabaseSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21173);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60650);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15926);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33346);
/* harmony import */ var src_components_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37921);
/* harmony import */ var src_components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49238);
/* harmony import */ var src_components_RefreshLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40277);
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







const DatabaseSelectorWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .styled.div */ .iK.div`
  ${({ theme }) => `
    .refresh {
      display: flex;
      align-items: center;
      width: 30px;
      margin-left: ${theme.gridUnit}px;
      margin-top: ${theme.gridUnit * 5}px;
    }

    .section {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .select {
      flex: 1;
    }

    & > div {
      margin-bottom: ${theme.gridUnit * 4}px;
    }
  `}
`;
const LabelStyle = _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .styled.div */ .iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${({ theme }) => theme.gridUnit - 2}px;
`;
const SelectLabel = ({ backend, databaseName }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(LabelStyle, null,
(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Label__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null, backend),
databaseName);

function DatabaseSelector({ db, formMode = false, getDbList, handleError, isDatabaseSelectEnabled = true, onDbChange, onSchemaChange, onSchemasLoad, readOnly = false, schema, sqlLabMode = false }) {
  const [loadingSchemas, setLoadingSchemas] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [schemaOptions, setSchemaOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [currentDb, setCurrentDb] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(db ?
  {
    label: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(SelectLabel, { backend: db.backend, databaseName: db.database_name }),
    value: db.id,
    ...db } :

  undefined);
  const [currentSchema, setCurrentSchema] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(schema ? { label: schema, value: schema } : undefined);
  const [refresh, setRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const loadDatabases = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => async (search, page, pageSize) => {
    const queryParams = rison__WEBPACK_IMPORTED_MODULE_1___default().encode({
      order_columns: 'database_name',
      order_direction: 'asc',
      page,
      page_size: pageSize,
      ...(formMode || !sqlLabMode ?
      { filters: [{ col: 'database_name', opr: 'ct', value: search }] } :
      {
        filters: [
        { col: 'database_name', opr: 'ct', value: search },
        {
          col: 'expose_in_sqllab',
          opr: 'eq',
          value: true }] }) });




    const endpoint = `/api/v1/database/?q=${queryParams}`;
    return _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"].get */ .Z.get({ endpoint }).then(({ json }) => {
      const { result } = json;
      if (getDbList) {
        getDbList(result);
      }
      if (result.length === 0) {
        handleError((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)("It seems you don't have access to any database"));
      }
      const options = result.map((row) => ({
        label: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(SelectLabel, { backend: row.backend, databaseName: row.database_name }),
        value: row.id,
        id: row.id,
        database_name: row.database_name,
        backend: row.backend,
        allow_multi_schema_metadata_fetch: row.allow_multi_schema_metadata_fetch }));

      return {
        data: options,
        totalCount: options.length };

    });
  }, [formMode, getDbList, handleError, sqlLabMode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (currentDb) {
      setLoadingSchemas(true);
      const queryParams = rison__WEBPACK_IMPORTED_MODULE_1___default().encode({ force: refresh > 0 });
      const endpoint = `/api/v1/database/${currentDb.value}/schemas/?q=${queryParams}`;
      // TODO: Would be nice to add pagination in a follow-up. Needs endpoint changes.
      _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"].get */ .Z.get({ endpoint }).
      then(({ json }) => {
        const options = json.result.
        map((s) => ({
          value: s,
          label: s,
          title: s })).

        sort((a, b) => a.label.localeCompare(b.label));
        if (onSchemasLoad) {
          onSchemasLoad(options);
        }
        setSchemaOptions(options);
        setLoadingSchemas(false);
      }).
      catch((e) => {
        setLoadingSchemas(false);
        handleError((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('There was an error loading the schemas'));
      });
    }
  }, [currentDb, onSchemasLoad, refresh]);
  function changeDataBase(value, database) {
    setCurrentDb(database);
    setCurrentSchema(undefined);
    if (onDbChange) {
      onDbChange(database);
    }
    if (onSchemaChange) {
      onSchemaChange(undefined);
    }
  }
  function changeSchema(schema) {
    setCurrentSchema(schema);
    if (onSchemaChange) {
      onSchemaChange(schema.value);
    }
  }
  function renderSelectRow(select, refreshBtn) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "section" },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", { className: "select" }, select),
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", { className: "refresh" }, refreshBtn));

  }
  function renderDatabaseSelect() {
    return renderSelectRow((0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components__WEBPACK_IMPORTED_MODULE_2__/* .Select */ .P, { ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Select database or type database name'), optionFilterProps: ['database_name', 'value'], header: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Form__WEBPACK_IMPORTED_MODULE_4__/* .FormLabel */ .lX, null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Database')), lazyLoading: false, onChange: changeDataBase, value: currentDb, placeholder: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Select database or type database name'), disabled: !isDatabaseSelectEnabled || readOnly, options: loadDatabases }), null);
  }
  function renderSchemaSelect() {
    const refreshIcon = !formMode && !readOnly && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_RefreshLabel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, { onClick: () => setRefresh(refresh + 1), tooltipContent: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Force refresh schema list') });
    return renderSelectRow((0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components__WEBPACK_IMPORTED_MODULE_2__/* .Select */ .P, { ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Select schema or type schema name'), disabled: readOnly, header: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Form__WEBPACK_IMPORTED_MODULE_4__/* .FormLabel */ .lX, null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Schema')), labelInValue: true, lazyLoading: false, loading: loadingSchemas, name: "select-schema", placeholder: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Select schema or type schema name'), onChange: (item) => changeSchema(item), options: schemaOptions, showSearch: true, value: currentSchema }), refreshIcon);
  }
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(DatabaseSelectorWrapper, null,
  renderDatabaseSelect(),
  renderSchemaSelect());

}

/***/ }),

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

/***/ 40277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58593);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38097);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11965);
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



const RefreshLabel = ({ onClick, tooltipContent }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const IconWithoutRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Refresh */ .Z.Refresh, props));
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__/* .Tooltip */ .u, { title: tooltipContent },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(IconWithoutRef, { role: "button", onClick: onClick, css: (theme) => ({
      cursor: 'pointer',
      color: theme.colors.grayscale.base,
      '&:hover': { color: theme.colors.primary.base } }) }));


};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefreshLabel);

/***/ }),

/***/ 17982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21173);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60650);
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33346);
/* harmony import */ var src_components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49238);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38097);
/* harmony import */ var src_components_DatabaseSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73995);
/* harmony import */ var src_components_RefreshLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40277);
/* harmony import */ var src_components_CertifiedIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83268);
/* harmony import */ var src_components_WarningIconWithTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86057);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11965);
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









const TableSelectorWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .styled.div */ .iK.div`
  ${({ theme }) => `
    .refresh {
      display: flex;
      align-items: center;
      width: 30px;
      margin-left: ${theme.gridUnit}px;
      margin-top: ${theme.gridUnit * 5}px;
    }

    .section {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .divider {
      border-bottom: 1px solid ${theme.colors.secondary.light5};
      margin: 15px 0;
    }

    .table-length {
      color: ${theme.colors.grayscale.light1};
    }

    .select {
      flex: 1;
    }
  `}
`;
const TableLabel = _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .styled.span */ .iK.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({ theme }) => theme.gridUnit}px;
  }
`;
const TableOption = ({ table }) => {
  const { label, type, extra } = table;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(TableLabel, { title: label },
  type === 'view' ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Eye */ .Z.Eye, { iconSize: "m" }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Table */ .Z.Table, { iconSize: "m" }),
  (extra == null ? void 0 : extra.certification) && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_CertifiedIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, { certifiedBy: extra.certification.certified_by, details: extra.certification.details, size: "l" }),
  (extra == null ? void 0 : extra.warning_markdown) && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_WarningIconWithTooltip__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, { warningMarkdown: extra.warning_markdown, size: "l" }),
  label);

};
const TableSelector = ({ database, formMode = false, getDbList, handleError, isDatabaseSelectEnabled = true, onDbChange, onSchemaChange, onSchemasLoad, onTableChange, onTablesLoad, readOnly = false, schema, sqlLabMode = true, tableName }) => {
  const [currentDatabase, setCurrentDatabase] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(database);
  const [currentSchema, setCurrentSchema] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(schema);
  const [currentTable, setCurrentTable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [refresh, setRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [previousRefresh, setPreviousRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [loadingTables, setLoadingTables] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [tableOptions, setTableOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // reset selections
    if (database === undefined) {
      setCurrentDatabase(undefined);
      setCurrentSchema(undefined);
      setCurrentTable(undefined);
    }
  }, [database]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (currentDatabase && currentSchema) {
      setLoadingTables(true);
      const encodedSchema = encodeURIComponent(currentSchema);
      const forceRefresh = refresh !== previousRefresh;
      // TODO: Would be nice to add pagination in a follow-up. Needs endpoint changes.
      const endpoint = encodeURI(`/superset/tables/${currentDatabase.id}/${encodedSchema}/undefined/${forceRefresh}/`);
      if (previousRefresh !== refresh) {
        setPreviousRefresh(refresh);
      }
      _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"].get */ .Z.get({ endpoint }).
      then(({ json }) => {
        const options = [];
        let currentTable;
        json.options.forEach((table) => {
          const option = {
            value: table.value,
            label: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(TableOption, { table: table }),
            text: table.label };

          options.push(option);
          if (table.label === tableName) {
            currentTable = option;
          }
        });
        if (onTablesLoad) {
          onTablesLoad(json.options);
        }
        setTableOptions(options.sort((a, b) => a.text.localeCompare(b.text)));
        setCurrentTable(currentTable);
        setLoadingTables(false);
      }).
      catch((e) => {
        setLoadingTables(false);
        handleError((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.t)('There was an error loading the tables'));
      });
    }
    // We are using the refresh state to re-trigger the query
    // previousRefresh should be out of dependencies array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDatabase, currentSchema, onTablesLoad, refresh]);
  function renderSelectRow(select, refreshBtn) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "section" },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "select" }, select),
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "refresh" }, refreshBtn));

  }
  const internalTableChange = (table) => {
    setCurrentTable(table);
    if (onTableChange && currentSchema) {
      onTableChange(table == null ? void 0 : table.value, currentSchema);
    }
  };
  const internalDbChange = (db) => {
    setCurrentDatabase(db);
    if (onDbChange) {
      onDbChange(db);
    }
  };
  const internalSchemaChange = (schema) => {
    setCurrentSchema(schema);
    if (onSchemaChange) {
      onSchemaChange(schema);
    }
    internalTableChange(undefined);
  };
  function renderDatabaseSelector() {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_DatabaseSelector__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, { key: currentDatabase == null ? void 0 : currentDatabase.id, db: currentDatabase, formMode: formMode, getDbList: getDbList, handleError: handleError, onDbChange: readOnly ? undefined : internalDbChange, onSchemaChange: readOnly ? undefined : internalSchemaChange, onSchemasLoad: onSchemasLoad, schema: currentSchema, sqlLabMode: sqlLabMode, isDatabaseSelectEnabled: isDatabaseSelectEnabled && !readOnly, readOnly: readOnly });
  }
  const handleFilterOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (search, option) => {
    const searchValue = search.trim().toLowerCase();
    const { text } = option;
    return text.toLowerCase().includes(searchValue);
  }, []);
  function renderTableSelect() {
    const disabled = currentSchema && !formMode && readOnly ||
    !currentSchema && !(database != null && database.allow_multi_schema_metadata_fetch);
    const header = sqlLabMode ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Form__WEBPACK_IMPORTED_MODULE_2__/* .FormLabel */ .lX, null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.t)('See table schema')) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Form__WEBPACK_IMPORTED_MODULE_2__/* .FormLabel */ .lX, null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.t)('Table'));
    const select = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components__WEBPACK_IMPORTED_MODULE_1__/* .Select */ .P, { ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.t)('Select table or type table name'), disabled: disabled, filterOption: handleFilterOption, header: header, labelInValue: true, lazyLoading: false, loading: loadingTables, name: "select-table", onChange: (table) => internalTableChange(table), options: tableOptions, placeholder: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.t)('Select table or type table name'), showSearch: true, value: currentTable });
    const refreshLabel = !formMode && !readOnly && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_RefreshLabel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, { onClick: () => setRefresh(refresh + 1), tooltipContent: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.t)('Force refresh table list') });
    return renderSelectRow(select, refreshLabel);
  }
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(TableSelectorWrapper, null,
  renderDatabaseSelector(),
  sqlLabMode && !formMode && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "divider" }),
  renderTableSelect());

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableSelector);

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

/***/ 97894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dataset_DatasetList)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
// EXTERNAL MODULE: ./src/views/CRUD/utils.tsx
var utils = __webpack_require__(40768);
// EXTERNAL MODULE: ./src/views/CRUD/hooks.ts
var hooks = __webpack_require__(34858);
// EXTERNAL MODULE: ./src/components/ConfirmStatusChange/index.tsx
var ConfirmStatusChange = __webpack_require__(19259);
// EXTERNAL MODULE: ./src/datasource/DatasourceModal.tsx
var DatasourceModal = __webpack_require__(5579);
// EXTERNAL MODULE: ./src/components/DeleteModal/index.tsx
var DeleteModal = __webpack_require__(17198);
// EXTERNAL MODULE: ./src/utils/export.ts
var utils_export = __webpack_require__(32228);
// EXTERNAL MODULE: ./src/components/ListView/index.ts + 11 modules
var ListView = __webpack_require__(9678);
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(38703);
// EXTERNAL MODULE: ./src/components/Menu/SubMenu.tsx
var SubMenu = __webpack_require__(62753);
// EXTERNAL MODULE: ./src/views/CRUD/data/common.ts
var common = __webpack_require__(95413);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/components/FacePile/index.tsx + 1 modules
var FacePile = __webpack_require__(34581);
// EXTERNAL MODULE: ./src/components/CertifiedIcon/index.tsx
var CertifiedIcon = __webpack_require__(83268);
// EXTERNAL MODULE: ./src/components/InfoTooltip/index.tsx
var InfoTooltip = __webpack_require__(8272);
// EXTERNAL MODULE: ./src/components/ImportModal/index.tsx
var ImportModal = __webpack_require__(27989);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./src/components/WarningIconWithTooltip/index.tsx
var WarningIconWithTooltip = __webpack_require__(86057);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./src/components/TableSelector/index.tsx
var TableSelector = __webpack_require__(17982);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/views/CRUD/data/dataset/AddDatasetModal.tsx
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






const TableSelectorContainer = style/* styled.div */.iK.div`
  padding-bottom: 340px;
  width: 65%;
`;
const DatasetModal = ({ addDangerToast, addSuccessToast, onDatasetAdd, onHide, show }) => {
  const [currentDatabase, setCurrentDatabase] = (0,react.useState)();
  const [currentSchema, setSchema] = (0,react.useState)('');
  const [currentTableName, setTableName] = (0,react.useState)('');
  const [disableSave, setDisableSave] = (0,react.useState)(true);
  const { createResource } = (0,hooks/* useSingleViewResource */.LE)('dataset', (0,TranslatorSingleton.t)('dataset'), addDangerToast);
  (0,react.useEffect)(() => {
    setDisableSave(currentDatabase === undefined || currentTableName === '');
  }, [currentTableName, currentDatabase]);
  const onDbChange = (db) => {
    setCurrentDatabase(db);
  };
  const onSchemaChange = (schema) => {
    setSchema(schema);
  };
  const onTableChange = (tableName) => {
    setTableName(tableName);
  };
  const clearModal = () => {
    setSchema('');
    setTableName('');
    setCurrentDatabase(undefined);
    setDisableSave(true);
  };
  const hide = () => {
    clearModal();
    onHide();
  };
  const onSave = () => {
    if (currentDatabase === undefined) {
      return;
    }
    const data = {
      database: currentDatabase.id,
      ...(currentSchema ? { schema: currentSchema } : {}),
      table_name: currentTableName };

    createResource(data).then((response) => {
      if (!response) {
        return;
      }
      if (onDatasetAdd) {
        onDatasetAdd({ id: response.id, ...response });
      }
      addSuccessToast((0,TranslatorSingleton.t)('The dataset has been saved'));
      hide();
    });
  };
  return (0,emotion_react_browser_esm.jsx)(Modal/* default */.Z, { disablePrimaryButton: disableSave, onHandledPrimaryAction: onSave, onHide: hide, primaryButtonName: (0,TranslatorSingleton.t)('Add'), show: show, title: (0,TranslatorSingleton.t)('Add dataset') },
  (0,emotion_react_browser_esm.jsx)(TableSelectorContainer, null,
  (0,emotion_react_browser_esm.jsx)(TableSelector/* default */.Z, { clearable: false, formMode: true, database: currentDatabase, schema: currentSchema, tableName: currentTableName, onDbChange: onDbChange, onSchemaChange: onSchemaChange, onTableChange: onTableChange, handleError: addDangerToast })));


};
/* harmony default export */ const AddDatasetModal = ((0,withToasts/* default */.Z)(DatasetModal));
// EXTERNAL MODULE: ./src/views/CRUD/data/dataset/constants.ts
var constants = __webpack_require__(52389);
;// CONCATENATED MODULE: ./src/views/CRUD/data/dataset/DatasetList.tsx
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
























const FlexRowContainer = style/* styled.div */.iK.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${({ theme }) => theme.gridUnit}px;
  }
`;
const Actions = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.grayscale.base};
`;
const DatasetList = ({ addDangerToast, addSuccessToast, user }) => {
  const { state: { loading, resourceCount: datasetCount, resourceCollection: datasets, bulkSelectEnabled }, hasPerm, fetchData, toggleBulkSelect, refreshData } = (0,hooks/* useListViewResource */.Yi)('dataset', (0,TranslatorSingleton.t)('dataset'), addDangerToast);
  const [datasetAddModalOpen, setDatasetAddModalOpen] = (0,react.useState)(false);
  const [datasetCurrentlyDeleting, setDatasetCurrentlyDeleting] = (0,react.useState)(null);
  const [datasetCurrentlyEditing, setDatasetCurrentlyEditing] = (0,react.useState)(null);
  const [importingDataset, showImportModal] = (0,react.useState)(false);
  const [passwordFields, setPasswordFields] = (0,react.useState)([]);
  const [preparingExport, setPreparingExport] = (0,react.useState)(false);
  const openDatasetImportModal = () => {
    showImportModal(true);
  };
  const closeDatasetImportModal = () => {
    showImportModal(false);
  };
  const handleDatasetImport = () => {
    showImportModal(false);
    refreshData();
  };
  const canEdit = hasPerm('can_write');
  const canDelete = hasPerm('can_write');
  const canCreate = hasPerm('can_write');
  const canExport = hasPerm('can_read');
  const initialSort = constants/* SORT_BY */.dY;
  const openDatasetEditModal = (0,react.useCallback)(({ id }) => {
    SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/dataset/${id}` }).

    then(({ json = {} }) => {
      const addCertificationFields = json.result.columns.map((column) => {
        const { certification: { details = '', certified_by = '' } = {} } = JSON.parse(column.extra || '{}') || {};
        return {
          ...column,
          certification_details: details || '',
          certified_by: certified_by || '',
          is_certified: details || certified_by };

      });
      // eslint-disable-next-line no-param-reassign
      json.result.columns = [...addCertificationFields];
      setDatasetCurrentlyEditing(json.result);
    }).
    catch(() => {
      addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching dataset related data'));
    });
  }, [addDangerToast]);
  const openDatasetDeleteModal = (dataset) => SupersetClient/* default.get */.Z.get({
    endpoint: `/api/v1/dataset/${dataset.id}/related_objects` }).

  then(({ json = {} }) => {
    setDatasetCurrentlyDeleting({
      ...dataset,
      chart_count: json.charts.count,
      dashboard_count: json.dashboards.count });

  }).
  catch((0,utils/* createErrorHandler */.v$)((errMsg) => (0,TranslatorSingleton.t)('An error occurred while fetching dataset related data: %s', errMsg)));
  const columns = (0,react.useMemo)(() => [
  {
    Cell: ({ row: { original: { kind } } }) => {
      if (kind === 'physical') {
        return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "physical-dataset-tooltip", title: (0,TranslatorSingleton.t)('Physical dataset') },
        (0,emotion_react_browser_esm.jsx)(Icons/* default.DatasetPhysical */.Z.DatasetPhysical, null));

      }
      return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "virtual-dataset-tooltip", title: (0,TranslatorSingleton.t)('Virtual dataset') },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.DatasetVirtual */.Z.DatasetVirtual, null));

    },
    accessor: 'kind_icon',
    disableSortBy: true,
    size: 'xs' },

  {
    Cell: ({ row: { original: { extra, table_name: datasetTitle, description, explore_url: exploreURL } } }) => {
      const titleLink = (0,emotion_react_browser_esm.jsx)("a", { href: exploreURL }, datasetTitle);
      try {
        const parsedExtra = JSON.parse(extra);
        return (0,emotion_react_browser_esm.jsx)(FlexRowContainer, null,
        (parsedExtra == null ? void 0 : parsedExtra.certification) && (0,emotion_react_browser_esm.jsx)(CertifiedIcon/* default */.Z, { certifiedBy: parsedExtra.certification.certified_by, details: parsedExtra.certification.details, size: "l" }),
        (parsedExtra == null ? void 0 : parsedExtra.warning_markdown) && (0,emotion_react_browser_esm.jsx)(WarningIconWithTooltip/* default */.Z, { warningMarkdown: parsedExtra.warning_markdown, size: "l" }),
        titleLink,
        description && (0,emotion_react_browser_esm.jsx)(InfoTooltip/* default */.Z, { tooltip: description, viewBox: "0 -1 24 24" }));

      }
      catch {
        return titleLink;
      }
    },
    Header: (0,TranslatorSingleton.t)('Name'),
    accessor: 'table_name' },

  {
    Cell: ({ row: { original: { kind } } }) => {var _kind$;return ((_kind$ = kind[0]) == null ? void 0 : _kind$.toUpperCase()) + kind.slice(1);},
    Header: (0,TranslatorSingleton.t)('Type'),
    accessor: 'kind',
    disableSortBy: true,
    size: 'md' },

  {
    Header: (0,TranslatorSingleton.t)('Database'),
    accessor: 'database.database_name',
    size: 'lg' },

  {
    Header: (0,TranslatorSingleton.t)('Schema'),
    accessor: 'schema',
    size: 'lg' },

  {
    Cell: ({ row: { original: { changed_on_delta_humanized: changedOn } } }) => (0,emotion_react_browser_esm.jsx)("span", { className: "no-wrap" }, changedOn),
    Header: (0,TranslatorSingleton.t)('Modified'),
    accessor: 'changed_on_delta_humanized',
    size: 'xl' },

  {
    Cell: ({ row: { original: { changed_by_name: changedByName } } }) => changedByName,
    Header: (0,TranslatorSingleton.t)('Modified by'),
    accessor: 'changed_by.first_name',
    size: 'xl' },

  {
    accessor: 'database',
    disableSortBy: true,
    hidden: true },

  {
    Cell: ({ row: { original: { owners = [] } } }) => (0,emotion_react_browser_esm.jsx)(FacePile/* default */.Z, { users: owners }),
    Header: (0,TranslatorSingleton.t)('Owners'),
    id: 'owners',
    disableSortBy: true,
    size: 'lg' },

  {
    accessor: 'sql',
    hidden: true,
    disableSortBy: true },

  {
    Cell: ({ row: { original } }) => {
      const handleEdit = () => openDatasetEditModal(original);
      const handleDelete = () => openDatasetDeleteModal(original);
      const handleExport = () => handleBulkDatasetExport([original]);
      if (!canEdit && !canDelete && !canExport) {
        return null;
      }
      return (0,emotion_react_browser_esm.jsx)(Actions, { className: "actions" },
      canDelete && (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "delete-action-tooltip", title: (0,TranslatorSingleton.t)('Delete'), placement: "bottom" },
      (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: 0, className: "action-button", onClick: handleDelete },
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

  [canEdit, canDelete, canExport, openDatasetEditModal]);
  const filterTypes = (0,react.useMemo)(() => [
  {
    Header: (0,TranslatorSingleton.t)('Owner'),
    id: 'owners',
    input: 'select',
    operator: ListView/* FilterOperator.relationManyMany */.p.relationManyMany,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchRelated */.tm)('dataset', 'owners', (0,utils/* createErrorHandler */.v$)((errMsg) => (0,TranslatorSingleton.t)('An error occurred while fetching dataset owner values: %s', errMsg)), user),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('Database'),
    id: 'database',
    input: 'select',
    operator: ListView/* FilterOperator.relationOneMany */.p.relationOneMany,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchRelated */.tm)('dataset', 'database', (0,utils/* createErrorHandler */.v$)((errMsg) => (0,TranslatorSingleton.t)('An error occurred while fetching datasets: %s', errMsg))),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('Schema'),
    id: 'schema',
    input: 'select',
    operator: ListView/* FilterOperator.equals */.p.equals,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchDistinct */.wk)('dataset', 'schema', (0,utils/* createErrorHandler */.v$)((errMsg) => (0,TranslatorSingleton.t)('An error occurred while fetching schema values: %s', errMsg))),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('Type'),
    id: 'sql',
    input: 'select',
    operator: ListView/* FilterOperator.datasetIsNullOrEmpty */.p.datasetIsNullOrEmpty,
    unfilteredLabel: 'All',
    selects: [
    { label: 'Virtual', value: false },
    { label: 'Physical', value: true }] },


  {
    Header: (0,TranslatorSingleton.t)('Search'),
    id: 'table_name',
    input: 'search',
    operator: ListView/* FilterOperator.contains */.p.contains }],

  []);
  const menuData = {
    activeChild: 'Datasets',
    ...common/* commonMenuData */.Y };

  const buttonArr = [];
  if (canDelete || canExport) {
    buttonArr.push({
      name: (0,TranslatorSingleton.t)('Bulk select'),
      onClick: toggleBulkSelect,
      buttonStyle: 'secondary' });

  }
  if (canCreate) {
    buttonArr.push({
      name: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), " ", (0,TranslatorSingleton.t)('Dataset'), ' '),

      onClick: () => setDatasetAddModalOpen(true),
      buttonStyle: 'primary' });

    if ((0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.VERSIONED_EXPORT */.T.VERSIONED_EXPORT)) {
      buttonArr.push({
        name: (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "import-tooltip", title: (0,TranslatorSingleton.t)('Import datasets'), placement: "bottomRight" },
        (0,emotion_react_browser_esm.jsx)(Icons/* default.Import */.Z.Import, null)),

        buttonStyle: 'link',
        onClick: openDatasetImportModal });

    }
  }
  menuData.buttons = buttonArr;
  const closeDatasetDeleteModal = () => {
    setDatasetCurrentlyDeleting(null);
  };
  const closeDatasetEditModal = () => {
    setDatasetCurrentlyEditing(null);
  };
  const handleDatasetDelete = ({ id, table_name: tableName }) => {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/dataset/${id}` }).
    then(() => {
      refreshData();
      setDatasetCurrentlyDeleting(null);
      addSuccessToast((0,TranslatorSingleton.t)('Deleted: %s', tableName));
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting %s: %s', tableName, errMsg))));
  };
  const handleBulkDatasetDelete = (datasetsToDelete) => {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/dataset/?q=${rison_default().encode(datasetsToDelete.map(({ id }) => id))}` }).
    then(({ json = {} }) => {
      refreshData();
      addSuccessToast(json.message);
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting the selected datasets: %s', errMsg))));
  };
  const handleBulkDatasetExport = (datasetsToExport) => {
    const ids = datasetsToExport.map(({ id }) => id);
    (0,utils_export/* default */.Z)('dataset', ids, () => {
      setPreparingExport(false);
    });
    setPreparingExport(true);
  };
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(SubMenu/* default */.Z, menuData),
  (0,emotion_react_browser_esm.jsx)(AddDatasetModal, { show: datasetAddModalOpen, onHide: () => setDatasetAddModalOpen(false), onDatasetAdd: refreshData }),
  datasetCurrentlyDeleting && (0,emotion_react_browser_esm.jsx)(DeleteModal/* default */.Z, { description: (0,TranslatorSingleton.t)('The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.', datasetCurrentlyDeleting.table_name, datasetCurrentlyDeleting.chart_count, datasetCurrentlyDeleting.dashboard_count), onConfirm: () => {
      if (datasetCurrentlyDeleting) {
        handleDatasetDelete(datasetCurrentlyDeleting);
      }
    }, onHide: closeDatasetDeleteModal, open: true, title: (0,TranslatorSingleton.t)('Delete Dataset?') }),
  datasetCurrentlyEditing && (0,emotion_react_browser_esm.jsx)(DatasourceModal/* default */.Z, { datasource: datasetCurrentlyEditing, onDatasourceSave: refreshData, onHide: closeDatasetEditModal, show: true }),
  (0,emotion_react_browser_esm.jsx)(ConfirmStatusChange/* default */.Z, { title: (0,TranslatorSingleton.t)('Please confirm'), description: (0,TranslatorSingleton.t)('Are you sure you want to delete the selected datasets?'), onConfirm: handleBulkDatasetDelete },
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
        onSelect: handleBulkDatasetExport });

    }
    return (0,emotion_react_browser_esm.jsx)(ListView/* default */.Z, { className: "dataset-list-view", columns: columns, data: datasets, count: datasetCount, pageSize: constants/* PAGE_SIZE */.IV, fetchData: fetchData, filters: filterTypes, loading: loading, initialSort: initialSort, bulkActions: bulkActions, bulkSelectEnabled: bulkSelectEnabled, disableBulkSelect: toggleBulkSelect, renderBulkSelectCopy: (selected) => {
        const { virtualCount, physicalCount } = selected.reduce((acc, e) => {
          if (e.original.kind === 'physical')
          acc.physicalCount += 1;else
          if (e.original.kind === 'virtual') {
            acc.virtualCount += 1;
          }
          return acc;
        }, { virtualCount: 0, physicalCount: 0 });
        if (!selected.length) {
          return (0,TranslatorSingleton.t)('0 Selected');
        }
        if (virtualCount && !physicalCount) {
          return (0,TranslatorSingleton.t)('%s Selected (Virtual)', selected.length, virtualCount);
        }
        if (physicalCount && !virtualCount) {
          return (0,TranslatorSingleton.t)('%s Selected (Physical)', selected.length, physicalCount);
        }
        return (0,TranslatorSingleton.t)('%s Selected (%s Physical, %s Virtual)', selected.length, physicalCount, virtualCount);
      } });
  }),


  (0,emotion_react_browser_esm.jsx)(ImportModal/* default */.Z, { resourceName: "dataset", resourceLabel: (0,TranslatorSingleton.t)('dataset'), passwordsNeededMessage: constants/* PASSWORDS_NEEDED_MESSAGE */.iX, confirmOverwriteMessage: constants/* CONFIRM_OVERWRITE_MESSAGE */.mI, addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, onModelImport: handleDatasetImport, show: importingDataset, onHide: closeDatasetImportModal, passwordFields: passwordFields, setPasswordFields: setPasswordFields }),
  preparingExport && (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null));

};
/* harmony default export */ const dataset_DatasetList = ((0,withToasts/* default */.Z)(DatasetList));

/***/ })

}]);