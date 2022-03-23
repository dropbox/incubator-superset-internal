/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 47074:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./src/explore/actions/saveModalActions.js
var saveModalActions_namespaceObject = {};
__webpack_require__.r(saveModalActions_namespaceObject);
__webpack_require__.d(saveModalActions_namespaceObject, {
  "FETCH_DASHBOARDS_FAILED": () => (FETCH_DASHBOARDS_FAILED),
  "FETCH_DASHBOARDS_SUCCEEDED": () => (FETCH_DASHBOARDS_SUCCEEDED),
  "REMOVE_SAVE_MODAL_ALERT": () => (REMOVE_SAVE_MODAL_ALERT),
  "SAVE_SLICE_FAILED": () => (SAVE_SLICE_FAILED),
  "SAVE_SLICE_SUCCESS": () => (SAVE_SLICE_SUCCESS),
  "fetchDashboards": () => (fetchDashboards),
  "fetchDashboardsFailed": () => (fetchDashboardsFailed),
  "fetchDashboardsSucceeded": () => (fetchDashboardsSucceeded),
  "removeSaveModalAlert": () => (removeSaveModalAlert),
  "saveSlice": () => (saveSlice),
  "saveSliceFailed": () => (saveSliceFailed),
  "saveSliceSuccess": () => (saveSliceSuccess)
});

// NAMESPACE OBJECT: ./src/explore/actions/exploreActions.ts
var exploreActions_namespaceObject = {};
__webpack_require__.r(exploreActions_namespaceObject);
__webpack_require__.d(exploreActions_namespaceObject, {
  "CREATE_NEW_SLICE": () => (CREATE_NEW_SLICE),
  "FETCH_DATASOURCES_STARTED": () => (FETCH_DATASOURCES_STARTED),
  "FETCH_DATASOURCES_SUCCEEDED": () => (FETCH_DATASOURCES_SUCCEEDED),
  "FETCH_DATASOURCE_SUCCEEDED": () => (FETCH_DATASOURCE_SUCCEEDED),
  "FETCH_FAVE_STAR": () => (FETCH_FAVE_STAR),
  "POST_DATASOURCE_STARTED": () => (POST_DATASOURCE_STARTED),
  "SAVE_FAVE_STAR": () => (SAVE_FAVE_STAR),
  "SET_DATASOURCE": () => (SET_DATASOURCE),
  "SET_DATASOURCES": () => (SET_DATASOURCES),
  "SET_DATASOURCE_TYPE": () => (SET_DATASOURCE_TYPE),
  "SET_EXPLORE_CONTROLS": () => (SET_EXPLORE_CONTROLS),
  "SET_FIELD_VALUE": () => (SET_FIELD_VALUE),
  "SLICE_UPDATED": () => (SLICE_UPDATED),
  "TOGGLE_FAVE_STAR": () => (TOGGLE_FAVE_STAR),
  "UPDATE_CHART_TITLE": () => (UPDATE_CHART_TITLE),
  "createNewSlice": () => (createNewSlice),
  "exploreActions": () => (exploreActions),
  "fetchDatasourceSucceeded": () => (fetchDatasourceSucceeded),
  "fetchDatasourcesStarted": () => (fetchDatasourcesStarted),
  "fetchDatasourcesSucceeded": () => (fetchDatasourcesSucceeded),
  "fetchFaveStar": () => (fetchFaveStar),
  "saveFaveStar": () => (saveFaveStar),
  "setControlValue": () => (setControlValue),
  "setDatasource": () => (setDatasource),
  "setDatasourceType": () => (setDatasourceType),
  "setDatasources": () => (setDatasources),
  "setExploreControls": () => (setExploreControls),
  "sliceUpdated": () => (sliceUpdated),
  "toggleFaveStar": () => (toggleFaveStar),
  "updateChartTitle": () => (updateChartTitle)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@hot-loader/react-dom/index.js
var react_dom = __webpack_require__(9060);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var es = __webpack_require__(53894);
// EXTERNAL MODULE: ./src/middleware/loggerMiddleware.js + 1 modules
var loggerMiddleware = __webpack_require__(69600);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./src/reduxUtils.ts
var reduxUtils = __webpack_require__(99543);
// EXTERNAL MODULE: ./node_modules/shortid/index.js
var shortid = __webpack_require__(14670);
var shortid_default = /*#__PURE__*/__webpack_require__.n(shortid);
// EXTERNAL MODULE: ./src/components/MessageToasts/actions.ts
var actions = __webpack_require__(72570);
// EXTERNAL MODULE: ./src/components/MessageToasts/types.ts
var types = __webpack_require__(8818);
;// CONCATENATED MODULE: ./src/components/MessageToasts/getToastsFromPyFlashMessages.js
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



function toastsFromPyFlashMessages(flashMessages = []) {
  const toasts = [];

  flashMessages.forEach(([messageType, message]) => {
    const toastType =
    messageType === 'danger' ?
    types/* ToastType.DANGER */.p.DANGER :
    messageType === 'success' && types/* ToastType.SUCCESS */.p.SUCCESS || types/* ToastType.INFO */.p.INFO;

    const toast = (0,actions/* addToast */.fz)({
      text: message,
      toastType }).
    payload;

    toasts.push(toast);
  });

  return toasts;
}
// EXTERNAL MODULE: ./src/explore/exploreUtils/index.js
var exploreUtils = __webpack_require__(12515);
// EXTERNAL MODULE: ./src/explore/store.js
var store = __webpack_require__(35854);
// EXTERNAL MODULE: ./src/explore/controlUtils/index.ts + 5 modules
var controlUtils = __webpack_require__(97488);
;// CONCATENATED MODULE: ./src/explore/reducers/getInitialState.ts
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





function getInitialState(bootstrapData) {
  const { form_data: initialFormData } = bootstrapData;
  const { slice } = bootstrapData;
  const sliceName = slice ? slice.slice_name : null;
  const exploreState = {
    // note this will add `form_data` to state,
    // which will be manipulatable by future reducers.
    ...bootstrapData,
    sliceName,
    common: {
      flash_messages: bootstrapData.common.flash_messages,
      conf: bootstrapData.common.conf },

    isDatasourceMetaLoading: false,
    isStarred: false,
    // Initial control state will skip `control.mapStateToProps`
    // because `bootstrapData.controls` is undefined.
    controls: (0,store/* getControlsState */.R3)(bootstrapData, initialFormData) };

  // apply initial mapStateToProps for all controls, must execute AFTER
  // bootstrapState has initialized `controls`. Order of execution is not
  // guaranteed, so controls shouldn't rely on the each other's mapped state.
  Object.entries(exploreState.controls).forEach(([key, controlState]) => {
    exploreState.controls[key] = (0,controlUtils/* applyMapStateToPropsToControl */.RO)(controlState, exploreState);
  });
  const sliceFormData = slice ?
  (0,controlUtils/* getFormDataFromControls */.Hu)((0,store/* getControlsState */.R3)(bootstrapData, slice.form_data)) :
  null;
  const chartKey = (0,exploreUtils/* getChartKey */.Jp)(bootstrapData);
  const chart = {
    id: chartKey,
    chartAlert: null,
    chartStatus: null,
    chartStackTrace: null,
    chartUpdateEndTime: null,
    chartUpdateStartTime: 0,
    latestQueryFormData: (0,controlUtils/* getFormDataFromControls */.Hu)(exploreState.controls),
    sliceFormData,
    queryController: null,
    queriesResponse: null,
    triggerQuery: false,
    lastRendered: 0 };

  return {
    charts: {
      [chartKey]: chart },

    saveModal: {
      dashboards: [],
      saveModalAlert: null },

    explore: exploreState,
    impressionId: shortid_default().generate(),
    messageToasts: toastsFromPyFlashMessages((bootstrapData.common || {}).flash_messages || []) };

}
// EXTERNAL MODULE: ./src/reports/reducers/reports.js
var reports = __webpack_require__(16471);
// EXTERNAL MODULE: ./src/chart/chartReducer.ts
var chartReducer = __webpack_require__(64714);
// EXTERNAL MODULE: ./src/dataMask/reducer.ts
var reducer = __webpack_require__(8868);
// EXTERNAL MODULE: ./src/components/MessageToasts/reducers.js
var reducers = __webpack_require__(61806);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
;// CONCATENATED MODULE: ./src/explore/actions/saveModalActions.js
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



const FETCH_DASHBOARDS_SUCCEEDED = 'FETCH_DASHBOARDS_SUCCEEDED';
function fetchDashboardsSucceeded(choices) {
  return { type: FETCH_DASHBOARDS_SUCCEEDED, choices };
}

const FETCH_DASHBOARDS_FAILED = 'FETCH_DASHBOARDS_FAILED';
function fetchDashboardsFailed(userId) {
  return { type: FETCH_DASHBOARDS_FAILED, userId };
}

function fetchDashboards(userId) {
  return function fetchDashboardsThunk(dispatch) {
    return SupersetClient/* default.get */.Z.get({
      endpoint: `/dashboardasync/api/read?_flt_0_owners=${userId}` }).

    then(({ json }) => {
      const choices = json.pks.map((id, index) => ({
        value: id,
        label: (json.result[index] || {}).dashboard_title }));


      return dispatch(fetchDashboardsSucceeded(choices));
    }).
    catch(() => dispatch(fetchDashboardsFailed(userId)));
  };
}

const SAVE_SLICE_FAILED = 'SAVE_SLICE_FAILED';
function saveSliceFailed() {
  return { type: SAVE_SLICE_FAILED };
}
const SAVE_SLICE_SUCCESS = 'SAVE_SLICE_SUCCESS';
function saveSliceSuccess(data) {
  return { type: SAVE_SLICE_SUCCESS, data };
}

const REMOVE_SAVE_MODAL_ALERT = 'REMOVE_SAVE_MODAL_ALERT';
function removeSaveModalAlert() {
  return { type: REMOVE_SAVE_MODAL_ALERT };
}

function saveSlice(formData, requestParams) {
  return (dispatch) => {
    const url = (0,exploreUtils/* getExploreUrl */.H6)({
      formData,
      endpointType: 'base',
      force: false,
      curUrl: null,
      requestParams });


    // Save the query context so we can re-generate the data from Python
    // for alerts and reports
    const queryContext = (0,exploreUtils/* buildV1ChartDataPayload */.u)({
      formData,
      force: false,
      resultFormat: 'json',
      resultType: 'full' });


    return SupersetClient/* default.post */.Z.post({
      url,
      postPayload: { form_data: formData, query_context: queryContext } }).

    then((response) => {
      dispatch(saveSliceSuccess(response.json));
      return response.json;
    }).
    catch(() => dispatch(saveSliceFailed()));
  };
}
;// CONCATENATED MODULE: ./src/explore/reducers/saveModalReducer.js
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
/* eslint camelcase: 0 */


function saveModalReducer(state = {}, action) {
  const actionHandlers = {
    [FETCH_DASHBOARDS_SUCCEEDED]() {
      return { ...state, dashboards: action.choices };
    },
    [FETCH_DASHBOARDS_FAILED]() {
      return {
        ...state,
        saveModalAlert: `fetching dashboards failed for ${action.userId}` };

    },
    [SAVE_SLICE_FAILED]() {
      return { ...state, saveModalAlert: 'Failed to save slice' };
    },
    [SAVE_SLICE_SUCCESS](data) {
      return { ...state, data };
    },
    [REMOVE_SAVE_MODAL_ALERT]() {
      return { ...state, saveModalAlert: null };
    } };


  if (action.type in actionHandlers) {
    return actionHandlers[action.type]();
  }
  return state;
}
// EXTERNAL MODULE: ./src/chart/chartAction.js
var chartAction = __webpack_require__(22428);
// EXTERNAL MODULE: ./src/explore/constants.ts
var constants = __webpack_require__(69856);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
;// CONCATENATED MODULE: ./src/explore/actions/exploreActions.ts


const FAVESTAR_BASE_URL = '/superset/favstar/slice';
const SET_DATASOURCE_TYPE = 'SET_DATASOURCE_TYPE';
function setDatasourceType(datasourceType) {
  return { type: SET_DATASOURCE_TYPE, datasourceType };
}
const SET_DATASOURCE = 'SET_DATASOURCE';
function setDatasource(datasource) {
  return { type: SET_DATASOURCE, datasource };
}
const SET_DATASOURCES = 'SET_DATASOURCES';
function setDatasources(datasources) {
  return { type: SET_DATASOURCES, datasources };
}
const POST_DATASOURCE_STARTED = 'POST_DATASOURCE_STARTED';
const FETCH_DATASOURCE_SUCCEEDED = 'FETCH_DATASOURCE_SUCCEEDED';
function fetchDatasourceSucceeded() {
  return { type: FETCH_DATASOURCE_SUCCEEDED };
}
const FETCH_DATASOURCES_STARTED = 'FETCH_DATASOURCES_STARTED';
function fetchDatasourcesStarted() {
  return { type: FETCH_DATASOURCES_STARTED };
}
const FETCH_DATASOURCES_SUCCEEDED = 'FETCH_DATASOURCES_SUCCEEDED';
function fetchDatasourcesSucceeded() {
  return { type: FETCH_DATASOURCES_SUCCEEDED };
}
const TOGGLE_FAVE_STAR = 'TOGGLE_FAVE_STAR';
function toggleFaveStar(isStarred) {
  return { type: TOGGLE_FAVE_STAR, isStarred };
}
const FETCH_FAVE_STAR = 'FETCH_FAVE_STAR';
function fetchFaveStar(sliceId) {
  return function (dispatch) {
    SupersetClient/* default.get */.Z.get({
      endpoint: `${FAVESTAR_BASE_URL}/${sliceId}/count/` }).
    then(({ json }) => {
      if (json.count > 0) {
        dispatch(toggleFaveStar(true));
      }
    });
  };
}
const SAVE_FAVE_STAR = 'SAVE_FAVE_STAR';
function saveFaveStar(sliceId, isStarred) {
  return function (dispatch) {
    const urlSuffix = isStarred ? 'unselect' : 'select';
    SupersetClient/* default.get */.Z.get({
      endpoint: `${FAVESTAR_BASE_URL}/${sliceId}/${urlSuffix}/` }).

    then(() => dispatch(toggleFaveStar(!isStarred))).
    catch(() => {
      dispatch((0,actions/* addDangerToast */.Gb)((0,TranslatorSingleton.t)('An error occurred while starring this chart')));
    });
  };
}
const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
function setControlValue(controlName, value, validationErrors) {
  return { type: SET_FIELD_VALUE, controlName, value, validationErrors };
}
const SET_EXPLORE_CONTROLS = 'UPDATE_EXPLORE_CONTROLS';
function setExploreControls(formData) {
  return { type: SET_EXPLORE_CONTROLS, formData };
}
const UPDATE_CHART_TITLE = 'UPDATE_CHART_TITLE';
function updateChartTitle(sliceName) {
  return { type: UPDATE_CHART_TITLE, sliceName };
}
const CREATE_NEW_SLICE = 'CREATE_NEW_SLICE';
function createNewSlice(can_add, can_download, can_overwrite, slice, form_data) {
  return {
    type: CREATE_NEW_SLICE,
    can_add,
    can_download,
    can_overwrite,
    slice,
    form_data };

}
const SLICE_UPDATED = 'SLICE_UPDATED';
function sliceUpdated(slice) {
  return { type: SLICE_UPDATED, slice };
}
const exploreActions = {
  ...actions/* toastActions */.s2,
  setDatasourceType,
  setDatasource,
  setDatasources,
  fetchDatasourcesStarted,
  fetchDatasourcesSucceeded,
  toggleFaveStar,
  fetchFaveStar,
  saveFaveStar,
  setControlValue,
  setExploreControls,
  updateChartTitle,
  createNewSlice,
  sliceUpdated };
;// CONCATENATED MODULE: ./src/explore/reducers/exploreReducer.js
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
/* eslint camelcase: 0 */






function exploreReducer(state = {}, action) {
  const actionHandlers = {
    [chartAction.DYNAMIC_PLUGIN_CONTROLS_READY]() {
      return {
        ...state,
        controls: action.controlsState };

    },
    [TOGGLE_FAVE_STAR]() {
      return {
        ...state,
        isStarred: action.isStarred };

    },
    [POST_DATASOURCE_STARTED]() {
      return {
        ...state,
        isDatasourceMetaLoading: true };

    },
    [SET_DATASOURCE]() {
      const newFormData = { ...state.form_data };
      if (action.datasource.type !== state.datasource.type) {
        if (action.datasource.type === 'table') {
          newFormData.granularity_sqla = action.datasource.granularity_sqla;
          newFormData.time_grain_sqla = action.datasource.time_grain_sqla;
          delete newFormData.druid_time_origin;
          delete newFormData.granularity;
        } else {
          newFormData.druid_time_origin = action.datasource.druid_time_origin;
          newFormData.granularity = action.datasource.granularity;
          delete newFormData.granularity_sqla;
          delete newFormData.time_grain_sqla;
        }
      }

      const controls = { ...state.controls };
      if (
      action.datasource.id !== state.datasource.id ||
      action.datasource.type !== state.datasource.type)
      {
        // reset time range filter to default
        newFormData.time_range = constants/* DEFAULT_TIME_RANGE */.X5;

        // reset control values for column/metric related controls
        Object.entries(controls).forEach(([controlName, controlState]) => {
          if (
          // for direct column select controls
          controlState.valueKey === 'column_name' ||
          // for all other controls
          'columns' in controlState)
          {
            // if a control use datasource columns, reset its value to `undefined`,
            // then `getControlsState` will pick up the default.
            // TODO: filter out only invalid columns and keep others
            controls[controlName] = {
              ...controlState,
              value: undefined };

            newFormData[controlName] = undefined;
          }
        });
      }

      const newState = {
        ...state,
        controls,
        datasource: action.datasource,
        datasource_id: action.datasource.id,
        datasource_type: action.datasource.type };

      return {
        ...newState,
        form_data: newFormData,
        controls: (0,store/* getControlsState */.R3)(newState, newFormData) };

    },
    [FETCH_DATASOURCES_STARTED]() {
      return {
        ...state,
        isDatasourcesLoading: true };

    },
    [SET_DATASOURCES]() {
      return {
        ...state,
        datasources: action.datasources };

    },
    [SET_FIELD_VALUE]() {
      const new_form_data = state.form_data;
      const { controlName, value, validationErrors } = action;
      new_form_data[controlName] = value;

      const vizType = new_form_data.viz_type;

      // Use the processed control config (with overrides and everything)
      // if `controlName` does not existing in current controls,
      const controlConfig =
      state.controls[action.controlName] ||
      (0,controlUtils/* getControlConfig */.Bx)(action.controlName, vizType) ||
      {};

      // will call validators again
      const control = {
        ...(0,controlUtils/* getControlStateFromControlConfig */.vP)(controlConfig, state, action.value) };


      const newState = {
        ...state,
        controls: { ...state.controls, [action.controlName]: control } };


      const rerenderedControls = {};
      if (Array.isArray(control.rerender)) {
        control.rerender.forEach((controlName) => {
          rerenderedControls[controlName] = {
            ...(0,controlUtils/* getControlStateFromControlConfig */.vP)(
            newState.controls[controlName],
            newState,
            newState.controls[controlName].value) };


        });
      }

      // combine newly detected errors with errors from `onChange` event of
      // each control component (passed via reducer action).
      const errors = control.validationErrors || [];
      (validationErrors || []).forEach((err) => {
        // skip duplicated errors
        if (!errors.includes(err)) {
          errors.push(err);
        }
      });
      const hasErrors = errors && errors.length > 0;

      const currentControlsState =
      action.controlName === 'viz_type' &&
      action.value !== state.controls.viz_type.value ?
      // rebuild the full control state if switching viz type
      (0,store/* getControlsState */.R3)(
      state,
      (0,controlUtils/* getFormDataFromControls */.Hu)({
        ...state.controls,
        viz_type: control })) :


      state.controls;

      return {
        ...state,
        form_data: new_form_data,
        triggerRender: control.renderTrigger && !hasErrors,
        controls: {
          ...currentControlsState,
          [action.controlName]: {
            ...control,
            validationErrors: errors },

          ...rerenderedControls } };


    },
    [SET_EXPLORE_CONTROLS]() {
      return {
        ...state,
        controls: (0,store/* getControlsState */.R3)(state, action.formData) };

    },
    [UPDATE_CHART_TITLE]() {
      return {
        ...state,
        sliceName: action.sliceName };

    },
    [CREATE_NEW_SLICE]() {
      return {
        ...state,
        slice: action.slice,
        controls: (0,store/* getControlsState */.R3)(state, action.form_data),
        can_add: action.can_add,
        can_download: action.can_download,
        can_overwrite: action.can_overwrite };

    },
    [SLICE_UPDATED]() {var _action$slice$owners, _action$slice$slice_n;
      return {
        ...state,
        slice: {
          ...state.slice,
          ...action.slice,
          owners: (_action$slice$owners = action.slice.owners) != null ? _action$slice$owners : null },

        sliceName: (_action$slice$slice_n = action.slice.slice_name) != null ? _action$slice$slice_n : state.sliceName };

    } };

  if (action.type in actionHandlers) {
    return actionHandlers[action.type]();
  }
  return state;
}
;// CONCATENATED MODULE: ./src/explore/reducers/index.js
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









const impressionId = (state = '') => state;

/* harmony default export */ const explore_reducers = ((0,redux/* combineReducers */.UY)({
  charts: chartReducer/* default */.Z,
  saveModal: saveModalReducer,
  dataMask: reducer/* default */.Z,
  explore: exploreReducer,
  impressionId,
  messageToasts: reducers/* default */.Z,
  reports: reports/* default */.Z }));
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var react_redux_es = __webpack_require__(37703);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DndProvider.js
var DndProvider = __webpack_require__(38626);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/index.js + 12 modules
var esm = __webpack_require__(57865);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js + 2 modules
var emotion_element_99289b21_browser_esm = __webpack_require__(68135);
// EXTERNAL MODULE: ./src/components/DynamicPlugins/index.tsx
var DynamicPlugins = __webpack_require__(14278);
// EXTERNAL MODULE: ./src/components/MessageToasts/ToastContainer.jsx
var ToastContainer = __webpack_require__(5951);
// EXTERNAL MODULE: ./src/setup/setupApp.ts + 6 modules
var setupApp = __webpack_require__(84153);
// EXTERNAL MODULE: ./src/setup/setupPlugins.ts + 38 modules
var setupPlugins = __webpack_require__(69753);
// EXTERNAL MODULE: ./src/preamble.ts + 3 modules
var preamble = __webpack_require__(26009);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/re-resizable/lib/index.js + 1 modules
var lib = __webpack_require__(29119);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./src/common/hooks/usePrevious/index.ts + 1 modules
var usePrevious = __webpack_require__(67337);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/utils/localStorageHelpers.ts
var localStorageHelpers = __webpack_require__(61337);
// EXTERNAL MODULE: ./src/constants.ts
var src_constants = __webpack_require__(27600);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/dashboard/actions/datasources.ts
var datasources = __webpack_require__(50810);
// EXTERNAL MODULE: ./src/dashboard/util/propShapes.jsx
var propShapes = __webpack_require__(2275);
// EXTERNAL MODULE: ./src/dashboard/components/nativeFilters/utils.ts
var utils = __webpack_require__(1510);
// EXTERNAL MODULE: ./node_modules/react-split/dist/react-split.es.js + 1 modules
var react_split_es = __webpack_require__(40323);
;// CONCATENATED MODULE: ./node_modules/raf-schd/dist/raf-schd.esm.js
var rafSchd = function rafSchd(fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };

  wrapperFn.cancel = function () {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  return wrapperFn;
};

/* harmony default export */ const raf_schd_esm = (rafSchd);

// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__(91296);
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);
// EXTERNAL MODULE: ./node_modules/lodash.throttle/index.js
var lodash_throttle = __webpack_require__(93096);
var lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(lodash_throttle);
;// CONCATENATED MODULE: ./node_modules/react-resize-detector/build/index.esm.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}var patchResizeHandler = function (resizeCallback, refreshMode, refreshRate, refreshOptions) {
    switch (refreshMode) {
        case 'debounce':
            return lodash_debounce_default()(resizeCallback, refreshRate, refreshOptions);
        case 'throttle':
            return lodash_throttle_default()(resizeCallback, refreshRate, refreshOptions);
        default:
            return resizeCallback;
    }
};
var isFunction = function (fn) { return typeof fn === 'function'; };
var isSSR = function () { return typeof window === 'undefined'; };
var isDOMElement = function (element) { return element instanceof Element || element instanceof HTMLDocument; };var ResizeDetector = /** @class */ (function (_super) {
    __extends(ResizeDetector, _super);
    function ResizeDetector(props) {
        var _this = _super.call(this, props) || this;
        _this.cancelHandler = function () {
            if (_this.resizeHandler && _this.resizeHandler.cancel) {
                // cancel debounced handler
                _this.resizeHandler.cancel();
                _this.resizeHandler = null;
            }
        };
        _this.rafClean = function () {
            if (_this.raf && _this.raf.cancel) {
                _this.raf.cancel();
                _this.raf = null;
            }
        };
        _this.attachObserver = function () {
            var targetRef = _this.props.targetRef;
            if (targetRef && targetRef.current) {
                _this.targetRef.current = targetRef.current;
            }
            var element = _this.getElement();
            if (!element) {
                // can't find element to observe
                return;
            }
            if (_this.observableElement && _this.observableElement === element) {
                // element is already observed
                return;
            }
            _this.observableElement = element;
            _this.resizeObserver.observe(element);
        };
        _this.getElement = function () {
            var _a = _this.props, querySelector = _a.querySelector, targetDomEl = _a.targetDomEl;
            if (isSSR())
                return null;
            // in case we pass a querySelector
            if (querySelector)
                return document.querySelector(querySelector);
            // in case we pass a DOM element
            if (targetDomEl && isDOMElement(targetDomEl))
                return targetDomEl;
            // in case we pass a React ref using React.createRef()
            if (_this.targetRef && isDOMElement(_this.targetRef.current))
                return _this.targetRef.current;
            // the worse case when we don't receive any information from the parent and the library doesn't add any wrappers
            // we have to use a deprecated `findDOMNode` method in order to find a DOM element to attach to
            var currentElement = (0,react_dom.findDOMNode)(_this);
            if (!currentElement)
                return null;
            var renderType = _this.getRenderType();
            switch (renderType) {
                case 'renderProp':
                    return currentElement;
                case 'childFunction':
                    return currentElement;
                case 'child':
                    return currentElement;
                case 'childArray':
                    return currentElement;
                default:
                    return currentElement.parentElement;
            }
        };
        _this.createUpdater = function () {
            _this.rafClean();
            _this.raf = raf_schd_esm(function (_a) {
                var width = _a.width, height = _a.height;
                var onResize = _this.props.onResize;
                if (onResize && isFunction(onResize)) {
                    onResize(width, height);
                }
                _this.setState({ width: width, height: height });
            });
            return _this.raf;
        };
        _this.createResizeHandler = function (entries) {
            var _a = _this.state, widthCurrent = _a.width, heightCurrent = _a.height;
            var _b = _this.props, _c = _b.handleWidth, handleWidth = _c === void 0 ? true : _c, _d = _b.handleHeight, handleHeight = _d === void 0 ? true : _d;
            if (!handleWidth && !handleHeight)
                return;
            var updater = _this.createUpdater();
            entries.forEach(function (entry) {
                var _a = (entry && entry.contentRect) || {}, width = _a.width, height = _a.height;
                var isWidthChanged = handleWidth && widthCurrent !== width;
                var isHeightChanged = handleHeight && heightCurrent !== height;
                var isSizeChanged = isWidthChanged || isHeightChanged;
                var shouldSetSize = !_this.skipOnMount && isSizeChanged && !isSSR();
                if (shouldSetSize) {
                    updater({ width: width, height: height });
                }
                _this.skipOnMount = false;
            });
        };
        _this.getRenderType = function () {
            var _a = _this.props, render = _a.render, children = _a.children;
            if (isFunction(render)) {
                // DEPRECATED. Use `Child Function Pattern` instead
                return 'renderProp';
            }
            if (isFunction(children)) {
                return 'childFunction';
            }
            if ((0,react.isValidElement)(children)) {
                return 'child';
            }
            if (Array.isArray(children)) {
                // DEPRECATED. Wrap children with a single parent
                return 'childArray';
            }
            // DEPRECATED. Use `Child Function Pattern` instead
            return 'parent';
        };
        var skipOnMount = props.skipOnMount, refreshMode = props.refreshMode, _a = props.refreshRate, refreshRate = _a === void 0 ? 1000 : _a, refreshOptions = props.refreshOptions;
        _this.state = {
            width: undefined,
            height: undefined
        };
        _this.skipOnMount = skipOnMount;
        _this.raf = null;
        _this.targetRef = (0,react.createRef)();
        _this.observableElement = null;
        _this.resizeHandler = patchResizeHandler(_this.createResizeHandler, refreshMode, refreshRate, refreshOptions);
        _this.resizeObserver = new ResizeObserver(_this.resizeHandler);
        return _this;
    }
    ResizeDetector.prototype.componentDidMount = function () {
        this.attachObserver();
    };
    ResizeDetector.prototype.componentDidUpdate = function () {
        this.attachObserver();
    };
    ResizeDetector.prototype.componentWillUnmount = function () {
        this.resizeObserver.disconnect();
        this.rafClean();
        this.cancelHandler();
    };
    ResizeDetector.prototype.render = function () {
        var _a = this.props, render = _a.render, children = _a.children, _b = _a.nodeType, WrapperTag = _b === void 0 ? 'div' : _b;
        var _c = this.state, width = _c.width, height = _c.height;
        var childProps = { width: width, height: height, targetRef: this.targetRef };
        var renderType = this.getRenderType();
        var typedChildren;
        switch (renderType) {
            case 'renderProp':
                return render && render(childProps);
            case 'childFunction':
                typedChildren = children;
                return typedChildren(childProps);
            case 'child':
                // @TODO bug prone logic
                typedChildren = children;
                if (typedChildren.type && typeof typedChildren.type === 'string') {
                    // child is a native DOM elements such as div, span etc
                    var nativeProps = __rest(childProps, ["targetRef"]);
                    return (0,react.cloneElement)(typedChildren, nativeProps);
                }
                // class or functional component otherwise
                return (0,react.cloneElement)(typedChildren, childProps);
            case 'childArray':
                typedChildren = children;
                return typedChildren.map(function (el) { return !!el && (0,react.cloneElement)(el, childProps); });
            default:
                return react.createElement(WrapperTag, null);
        }
    };
    return ResizeDetector;
}(react.PureComponent));function withResizeDetector(ComponentInner, options) {
    var ResizeDetectorHOC = /** @class */ (function (_super) {
        __extends(ResizeDetectorHOC, _super);
        function ResizeDetectorHOC() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ref = createRef();
            return _this;
        }
        ResizeDetectorHOC.prototype.render = function () {
            var _a = this.props, forwardedRef = _a.forwardedRef, rest = __rest(_a, ["forwardedRef"]);
            var targetRef = forwardedRef || this.ref;
            return (React.createElement(ResizeDetector, __assign({}, options, { targetRef: targetRef }),
                React.createElement(ComponentInner, __assign({ targetRef: targetRef }, rest))));
        };
        return ResizeDetectorHOC;
    }(Component));
    function forwardRefWrapper(props, ref) {
        return React.createElement(ResizeDetectorHOC, __assign({}, props, { forwardedRef: ref }));
    }
    var name = ComponentInner.displayName || ComponentInner.name;
    forwardRefWrapper.displayName = "withResizeDetector(" + name + ")";
    return forwardRef(forwardRefWrapper);
}var createAsyncNotifier = function (onResize, setSize) {
    return raf_schd_esm(function (_a) {
        var width = _a.width, height = _a.height;
        if (isFunction(onResize)) {
            onResize(width, height);
        }
        setSize({ width: width, height: height });
    });
};
function useResizeDetector(props) {
    if (props === void 0) { props = {}; }
    var _a = props.skipOnMount, skipOnMount = _a === void 0 ? false : _a, refreshMode = props.refreshMode, _b = props.refreshRate, refreshRate = _b === void 0 ? 1000 : _b, refreshOptions = props.refreshOptions, _c = props.handleWidth, handleWidth = _c === void 0 ? true : _c, _d = props.handleHeight, handleHeight = _d === void 0 ? true : _d, onResize = props.onResize;
    var skipResize = (0,react.useRef)(null);
    var ref = (0,react.useRef)();
    var resizeHandler = (0,react.useRef)(null);
    var onResizeCallback = (0,react.useRef)(onResize);
    (0,react.useEffect)(function () {
        if (skipResize.current === null) {
            skipResize.current = skipOnMount;
        }
    }, [skipOnMount]);
    var _e = (0,react.useState)({
        width: undefined,
        height: undefined
    }), size = _e[0], setSize = _e[1];
    (0,react.useEffect)(function () {
        var notifyResizeAsync = createAsyncNotifier(onResizeCallback.current, setSize);
        var resizeCallback = function (entries) {
            if (!handleWidth && !handleHeight)
                return;
            entries.forEach(function (entry) {
                var _a = (entry && entry.contentRect) || {}, width = _a.width, height = _a.height;
                var shouldSetSize = !skipResize.current && !isSSR();
                if (shouldSetSize) {
                    notifyResizeAsync({ width: width, height: height });
                }
                skipResize.current = false;
            });
        };
        resizeHandler.current = patchResizeHandler(resizeCallback, refreshMode, refreshRate, refreshOptions);
        var resizeObserver = new ResizeObserver(resizeHandler.current);
        if (ref.current) {
            resizeObserver.observe(ref.current);
        }
        return function () {
            resizeObserver.disconnect();
            notifyResizeAsync.cancel();
            var patchedResizeHandler = resizeHandler.current;
            if (patchedResizeHandler && patchedResizeHandler.cancel) {
                patchedResizeHandler.cancel();
            }
        };
    }, [refreshMode, refreshRate, refreshOptions, handleWidth, handleHeight, onResizeCallback]);
    return __assign({ ref: ref }, size);
}/* harmony default export */ const index_esm = ((/* unused pure expression or super */ null && (ResizeDetector)));//# sourceMappingURL=index.esm.js.map

// EXTERNAL MODULE: ./src/chart/ChartContainer.jsx + 3 modules
var ChartContainer = __webpack_require__(5144);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalColorNamespace.js
var CategoricalColorNamespace = __webpack_require__(83527);
// EXTERNAL MODULE: ./src/components/ReportModal/index.tsx + 1 modules
var ReportModal = __webpack_require__(97860);
// EXTERNAL MODULE: ./src/reports/actions/reports.js
var actions_reports = __webpack_require__(61358);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./src/components/ReportModal/HeaderReportActionsDropdown/index.tsx
var HeaderReportActionsDropdown = __webpack_require__(48600);
// EXTERNAL MODULE: ./src/components/EditableTitle/index.tsx
var EditableTitle = __webpack_require__(38270);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/lodash/memoize.js
var memoize = __webpack_require__(88306);
var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartControlPanelRegistrySingleton.js
var ChartControlPanelRegistrySingleton = __webpack_require__(14299);
// EXTERNAL MODULE: ./src/explore/controls.jsx
var controls = __webpack_require__(92252);
;// CONCATENATED MODULE: ./src/utils/getControlsForVizType.js
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





const memoizedControls = memoize_default()((vizType, controlPanel) => {
  const controlsMap = {};
  ((controlPanel == null ? void 0 : controlPanel.controlPanelSections) || []).forEach((section) => {
    section.controlSetRows.forEach((row) => {
      row.forEach((control) => {
        if (!control) return;
        if (typeof control === 'string') {
          // For now, we have to look in controls.jsx to get the config for some controls.
          // Once everything is migrated out, delete this if statement.
          controlsMap[control] = controls/* controls */.ai[control];
        } else if (control.name && control.config) {
          // condition needed because there are elements, e.g. <hr /> in some control configs (I'm looking at you, FilterBox!)
          controlsMap[control.name] = control.config;
        }
      });
    });
  });
  return controlsMap;
});

const getControlsForVizType = (vizType) => {
  const controlPanel = (0,ChartControlPanelRegistrySingleton/* default */.Z)().get(vizType);
  return memoizedControls(vizType, controlPanel);
};

/* harmony default export */ const utils_getControlsForVizType = (getControlsForVizType);
// EXTERNAL MODULE: ./src/utils/safeStringify.ts
var safeStringify = __webpack_require__(9679);
// EXTERNAL MODULE: ./src/components/ModalTrigger/index.jsx
var ModalTrigger = __webpack_require__(68073);
// EXTERNAL MODULE: ./src/components/TableView/index.ts
var TableView = __webpack_require__(76962);
;// CONCATENATED MODULE: ./src/components/AlteredSliceTag/index.jsx
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










const propTypes = {
  origFormData: (prop_types_default()).object.isRequired,
  currentFormData: (prop_types_default()).object.isRequired };


function alterForComparison(value) {
  // Considering `[]`, `{}`, `null` and `undefined` as identical
  // for this purpose
  if (value === undefined || value === null || value === '') {
    return null;
  }
  if (typeof value === 'object') {
    if (Array.isArray(value) && value.length === 0) {
      return null;
    }
    const keys = Object.keys(value);
    if (keys && keys.length === 0) {
      return null;
    }
  }
  return value;
}

class AlteredSliceTag extends react.Component {
  constructor(props) {
    super(props);
    const diffs = this.getDiffs(props);
    const controlsMap = utils_getControlsForVizType(this.props.origFormData.viz_type);
    const rows = this.getRowsFromDiffs(diffs, controlsMap);

    this.state = { rows, hasDiffs: !isEmpty_default()(diffs), controlsMap };
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    // Update differences if need be
    if (isEqual_default()(this.props, newProps)) {
      return;
    }
    const diffs = this.getDiffs(newProps);
    this.setState((prevState) => ({
      rows: this.getRowsFromDiffs(diffs, prevState.controlsMap),
      hasDiffs: !isEmpty_default()(diffs) }));

  }

  getRowsFromDiffs(diffs, controlsMap) {
    return Object.entries(diffs).map(([key, diff]) => ({
      control: controlsMap[key] && controlsMap[key].label || key,
      before: this.formatValue(diff.before, key, controlsMap),
      after: this.formatValue(diff.after, key, controlsMap) }));

  }

  getDiffs(props) {
    // Returns all properties that differ in the
    // current form data and the saved form data
    const ofd = props.origFormData;
    const cfd = props.currentFormData;

    const fdKeys = Object.keys(cfd);
    const diffs = {};
    fdKeys.forEach((fdKey) => {
      if (!ofd[fdKey] && !cfd[fdKey]) {
        return;
      }
      if (['filters', 'having', 'having_filters', 'where'].includes(fdKey)) {
        return;
      }
      if (!this.isEqualish(ofd[fdKey], cfd[fdKey])) {
        diffs[fdKey] = { before: ofd[fdKey], after: cfd[fdKey] };
      }
    });
    return diffs;
  }

  isEqualish(val1, val2) {
    return isEqual_default()(alterForComparison(val1), alterForComparison(val2));
  }

  formatValue(value, key, controlsMap) {var _controlsMap$key, _controlsMap$key2, _controlsMap$key3;
    // Format display value based on the control type
    // or the value type
    if (value === undefined) {
      return 'N/A';
    }
    if (value === null) {
      return 'null';
    }
    if (((_controlsMap$key = controlsMap[key]) == null ? void 0 : _controlsMap$key.type) === 'AdhocFilterControl') {
      if (!value.length) {
        return '[]';
      }
      return value.
      map((v) => {
        const filterVal =
        v.comparator && v.comparator.constructor === Array ?
        `[${v.comparator.join(', ')}]` :
        v.comparator;
        return `${v.subject} ${v.operator} ${filterVal}`;
      }).
      join(', ');
    }
    if (((_controlsMap$key2 = controlsMap[key]) == null ? void 0 : _controlsMap$key2.type) === 'BoundsControl') {
      return `Min: ${value[0]}, Max: ${value[1]}`;
    }
    if (((_controlsMap$key3 = controlsMap[key]) == null ? void 0 : _controlsMap$key3.type) === 'CollectionControl') {
      return value.map((v) => (0,safeStringify/* safeStringify */.o)(v)).join(', ');
    }
    if (typeof value === 'boolean') {
      return value ? 'true' : 'false';
    }
    if (value.constructor === Array) {
      return value.length ? value.join(', ') : '[]';
    }
    if (typeof value === 'string' || typeof value === 'number') {
      return value;
    }
    return (0,safeStringify/* safeStringify */.o)(value);
  }

  renderModalBody() {
    const columns = [
    {
      accessor: 'control',
      Header: 'Control' },

    {
      accessor: 'before',
      Header: 'Before' },

    {
      accessor: 'after',
      Header: 'After' }];



    return (
      (0,emotion_react_browser_esm.jsx)(TableView/* default */.Z, {
        columns: columns,
        data: this.state.rows,
        pageSize: 50,
        className: "table-condensed" }));


  }

  renderTriggerNode() {
    return (
      (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "difference-tooltip", title: (0,TranslatorSingleton.t)('Click to see difference') },
      (0,emotion_react_browser_esm.jsx)("span", {
        className: "label label-warning m-l-5",
        style: { fontSize: '12px' } },

      (0,TranslatorSingleton.t)('Altered'))));



  }

  render() {
    // Return nothing if there are no differences
    if (!this.state.hasDiffs) {
      return null;
    }
    // Render the label-warning 'Altered' tag which the user may
    // click to open a modal containing a table summarizing the
    // differences in the slice
    return (
      (0,emotion_react_browser_esm.jsx)(ModalTrigger/* default */.Z, {
        triggerNode: this.renderTriggerNode(),
        modalTitle: (0,TranslatorSingleton.t)('Chart changes'),
        modalBody: this.renderModalBody(),
        responsive: true }));


  }}


AlteredSliceTag.propTypes = propTypes;
// EXTERNAL MODULE: ./src/components/FaveStar/index.tsx
var FaveStar = __webpack_require__(36674);
// EXTERNAL MODULE: ./src/components/Label/index.tsx
var Label = __webpack_require__(37921);
// EXTERNAL MODULE: ./src/modules/dates.js
var dates = __webpack_require__(1836);
;// CONCATENATED MODULE: ./src/components/Timer/index.tsx
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




const TimerLabel = (0,style/* styled */.iK)(Label/* default */.Z)`
  text-align: left;
  width: 91px;
`;
function Timer({ endTime, isRunning, startTime, status = 'success' }) {
  const [clockStr, setClockStr] = (0,react.useState)('00:00:00.00');
  const timer = (0,react.useRef)();
  (0,react.useEffect)(() => {
    const stopTimer = () => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = undefined;
      }
    };
    if (isRunning) {
      timer.current = setInterval(() => {
        if (startTime) {
          const endDttm = endTime || (0,dates/* now */.zO)();
          if (startTime < endDttm) {
            setClockStr((0,dates/* fDuration */.zQ)(startTime, endDttm));
          }
          if (!isRunning) {
            stopTimer();
          }
        }
      }, 30);
    }
    return stopTimer;
  }, [endTime, isRunning, startTime]);
  return (0,emotion_react_browser_esm.jsx)(TimerLabel, { type: status, role: "timer" },
  clockStr);

}
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/components/CachedLabel/TooltipContent.tsx
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



const TooltipContent = ({ cachedTimestamp }) => {
  const cachedText = cachedTimestamp ? (0,emotion_react_browser_esm.jsx)("span", null,
  (0,TranslatorSingleton.t)('Loaded data cached'),
  (0,emotion_react_browser_esm.jsx)("b", null, " ", moment_default().utc(cachedTimestamp).fromNow())) :
  (0,TranslatorSingleton.t)('Loaded from cache');
  return (0,emotion_react_browser_esm.jsx)("span", null,
  cachedText, ". ", (0,TranslatorSingleton.t)('Click to force-refresh'));

};
;// CONCATENATED MODULE: ./src/components/CachedLabel/index.tsx
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





const CacheLabel = ({ className, onClick, cachedTimestamp }) => {
  const [hovered, setHovered] = (0,react.useState)(false);
  const labelType = hovered ? 'primary' : 'default';
  return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: (0,emotion_react_browser_esm.jsx)(TooltipContent, { cachedTimestamp: cachedTimestamp }), id: "cache-desc-tooltip" },
  (0,emotion_react_browser_esm.jsx)(Label/* default */.Z, { className: `${className}`, type: labelType, onClick: onClick, onMouseOver: () => setHovered(true), onMouseOut: () => setHovered(false) },
  (0,TranslatorSingleton.t)('cached'), " ", (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-refresh" })));


};
/* harmony default export */ const CachedLabel = (CacheLabel);
// EXTERNAL MODULE: ./src/explore/components/PropertiesModal/index.tsx
var PropertiesModal = __webpack_require__(83673);
// EXTERNAL MODULE: ./src/components/CertifiedIcon/index.tsx
var CertifiedIcon = __webpack_require__(83268);
// EXTERNAL MODULE: ./src/utils/copy.ts
var copy = __webpack_require__(10222);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/common/hooks/useUrlShortener.ts
var useUrlShortener = __webpack_require__(87189);
// EXTERNAL MODULE: ./src/components/Popover/index.tsx
var Popover = __webpack_require__(76697);
// EXTERNAL MODULE: ./src/components/Form/index.tsx + 1 modules
var Form = __webpack_require__(49238);
// EXTERNAL MODULE: ./src/components/CopyToClipboard/index.jsx
var CopyToClipboard = __webpack_require__(13433);
// EXTERNAL MODULE: ./src/utils/urlUtils.ts
var urlUtils = __webpack_require__(23525);
;// CONCATENATED MODULE: ./src/explore/components/EmbedCodeButton.jsx
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













const EmbedCodeButton_propTypes = {
  latestQueryFormData: (prop_types_default()).object.isRequired };


class EmbedCodeButton extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '400',
      width: '600',
      shortUrlId: 0 };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.getCopyUrl = this.getCopyUrl.bind(this);
    this.onShortUrlSuccess = this.onShortUrlSuccess.bind(this);
  }

  onShortUrlSuccess(shortUrl) {
    const shortUrlId = shortUrl.substring(shortUrl.indexOf('/r/') + 3);
    this.setState(() => ({
      shortUrlId }));

  }

  getCopyUrl() {
    return (0,urlUtils/* getShortUrl */.O)((0,exploreUtils/* getExploreLongUrl */.vp)(this.props.latestQueryFormData)).
    then(this.onShortUrlSuccess).
    catch(this.props.addDangerToast);
  }

  handleInputChange(e) {
    const { value, name } = e.currentTarget;
    const data = {};
    data[name] = value;
    this.setState(data);
  }

  generateEmbedHTML() {
    const srcLink = `${window.location.origin + (0,exploreUtils/* getURIDirectory */.sW)()}?r=${
    this.state.shortUrlId
    }&${src_constants/* URL_PARAMS.standalone.name */.KD.standalone.name}=1&height=${this.state.height}`;
    return (
      '<iframe\n' +
      `  width="${this.state.width}"\n` +
      `  height="${this.state.height}"\n` +
      '  seamless\n' +
      '  frameBorder="0"\n' +
      '  scrolling="no"\n' +
      `  src="${srcLink}"\n` +
      '>\n' +
      '</iframe>');

  }

  renderPopoverContent() {
    const html = this.generateEmbedHTML();
    return (
      (0,emotion_react_browser_esm.jsx)("div", { id: "embed-code-popover" },
      (0,emotion_react_browser_esm.jsx)("div", { className: "row" },
      (0,emotion_react_browser_esm.jsx)("div", { className: "col-sm-10" },
      (0,emotion_react_browser_esm.jsx)("textarea", {

        name: "embedCode",
        value: html,
        rows: "4",
        readOnly: true,
        className: "form-control input-sm" })),


      (0,emotion_react_browser_esm.jsx)("div", { className: "col-sm-2" },
      (0,emotion_react_browser_esm.jsx)(CopyToClipboard/* default */.Z, {
        shouldShowText: false,
        text: html,
        copyNode:
        (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-clipboard", title: (0,TranslatorSingleton.t)('Copy to clipboard') }) }))),




      (0,emotion_react_browser_esm.jsx)("br", null),
      (0,emotion_react_browser_esm.jsx)("div", { className: "row" },
      (0,emotion_react_browser_esm.jsx)("div", { className: "col-md-6 col-sm-12" },
      (0,emotion_react_browser_esm.jsx)("div", { className: "form-group" },
      (0,emotion_react_browser_esm.jsx)("small", null,
      (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, { htmlFor: "embed-height" }, (0,TranslatorSingleton.t)('Height'))),

      (0,emotion_react_browser_esm.jsx)("input", {
        className: "form-control input-sm",
        type: "text",
        defaultValue: this.state.height,
        name: "height",
        onChange: this.handleInputChange }))),



      (0,emotion_react_browser_esm.jsx)("div", { className: "col-md-6 col-sm-12" },
      (0,emotion_react_browser_esm.jsx)("div", { className: "form-group" },
      (0,emotion_react_browser_esm.jsx)("small", null,
      (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, { htmlFor: "embed-width" }, (0,TranslatorSingleton.t)('Width'))),

      (0,emotion_react_browser_esm.jsx)("input", {
        className: "form-control input-sm",
        type: "text",
        defaultValue: this.state.width,
        name: "width",
        onChange: this.handleInputChange,
        id: "embed-width" }))))));






  }

  render() {
    return (
      (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, {
        trigger: "click",
        placement: "left",
        onClick: this.getCopyUrl,
        content: this.renderPopoverContent() },

      (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, {
        id: "embed-code-tooltip",
        placement: "top",
        title: "Embed code",
        trigger: ['hover'] },

      (0,emotion_react_browser_esm.jsx)("div", {
        className: "btn btn-default btn-sm",

        style: { display: 'flex', alignItems: 'center', height: 30 } },

      (0,emotion_react_browser_esm.jsx)(Icons/* default.Code */.Z.Code, { iconSize: "l" })))));




  }}


EmbedCodeButton.propTypes = EmbedCodeButton_propTypes;
// EXTERNAL MODULE: ./src/common/components/index.tsx
var components = __webpack_require__(82191);
// EXTERNAL MODULE: ./src/utils/downloadAsImage.ts
var downloadAsImage = __webpack_require__(56727);
// EXTERNAL MODULE: ./src/explore/components/controls/ViewQueryModal.tsx
var ViewQueryModal = __webpack_require__(15423);
;// CONCATENATED MODULE: ./src/explore/components/ExploreAdditionalActionsMenu/index.jsx
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











const ExploreAdditionalActionsMenu_propTypes = {
  onOpenPropertiesModal: (prop_types_default()).func,
  onOpenInEditor: (prop_types_default()).func,
  chartStatus: (prop_types_default()).string,
  latestQueryFormData: (prop_types_default()).object.isRequired,
  slice: (prop_types_default()).object };


const MENU_KEYS = {
  EDIT_PROPERTIES: 'edit_properties',
  RUN_IN_SQL_LAB: 'run_in_sql_lab',
  DOWNLOAD_AS_IMAGE: 'download_as_image',
  VIEW_QUERY: 'view_query' };


const ExploreAdditionalActionsMenu = (props) => {
  const { datasource } = props.latestQueryFormData;
  const sqlSupported = datasource && datasource.split('__')[1] === 'table';
  const handleMenuClick = ({ key, domEvent }) => {var _slice$slice_name;
    const { slice, onOpenInEditor, latestQueryFormData } = props;
    switch (key) {
      case MENU_KEYS.EDIT_PROPERTIES:
        props.onOpenPropertiesModal();
        break;
      case MENU_KEYS.RUN_IN_SQL_LAB:
        onOpenInEditor(latestQueryFormData);
        break;
      case MENU_KEYS.DOWNLOAD_AS_IMAGE:
        (0,downloadAsImage/* default */.Z)(
        '.panel-body > .chart-container',
        // eslint-disable-next-line camelcase
        (_slice$slice_name = slice == null ? void 0 : slice.slice_name) != null ? _slice$slice_name : (0,TranslatorSingleton.t)('New chart'),
        {},
        true)(
        domEvent);
        break;
      default:
        break;}

  };

  const { slice } = props;
  return (
    (0,emotion_react_browser_esm.jsx)(components/* Dropdown */.Lt, {
      trigger: "click",

      overlay:
      (0,emotion_react_browser_esm.jsx)(components/* Menu */.v2, { onClick: handleMenuClick, selectable: false },
      slice &&
      (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: MENU_KEYS.EDIT_PROPERTIES },
      (0,TranslatorSingleton.t)('Edit properties')),


      (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: MENU_KEYS.VIEW_QUERY },
      (0,emotion_react_browser_esm.jsx)(ModalTrigger/* default */.Z, {
        triggerNode:
        (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('View query')),

        modalTitle: (0,TranslatorSingleton.t)('View query'),
        modalBody:
        (0,emotion_react_browser_esm.jsx)(ViewQueryModal/* default */.Z, {
          latestQueryFormData: props.latestQueryFormData }),


        draggable: true,
        resizable: true,
        responsive: true })),


      sqlSupported &&
      (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: MENU_KEYS.RUN_IN_SQL_LAB },
      (0,TranslatorSingleton.t)('Run in SQL Lab')),


      (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: MENU_KEYS.DOWNLOAD_AS_IMAGE },
      (0,TranslatorSingleton.t)('Download as image'))) },




    (0,emotion_react_browser_esm.jsx)("div", {
      role: "button",
      id: "query",
      tabIndex: 0,
      className: "btn btn-default btn-sm" },

    (0,emotion_react_browser_esm.jsx)("i", { role: "img", className: "fa fa-bars" }))));



};

ExploreAdditionalActionsMenu.propTypes = ExploreAdditionalActionsMenu_propTypes;

function mapDispatchToProps(dispatch) {
  return (0,redux/* bindActionCreators */.DE)({ sliceUpdated: sliceUpdated }, dispatch);
}

/* harmony default export */ const components_ExploreAdditionalActionsMenu = ((0,react_redux_es/* connect */.$j)(null, mapDispatchToProps)(ExploreAdditionalActionsMenu));
;// CONCATENATED MODULE: ./src/explore/components/ExploreActionButtons.tsx
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










var _ref =  true ? { name: "yc7s2v", styles: "display:flex;align-items:center;&:focus, &:focus:active{outline:0;}" } : 0;
const ActionButton = (props) => {
  const { icon, text, tooltip, className, onTooltipVisibilityChange, ...rest } = props;
  return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: `${icon}-tooltip`, placement: "top", title: tooltip, trigger: ['hover'], onVisibleChange: onTooltipVisibilityChange },
  (0,emotion_react_browser_esm.jsx)("div", extends_default()({ role: "button", tabIndex: 0, css: _ref,



    className: className || 'btn btn-default btn-sm', style: { height: 30 } }, rest),
  icon,
  text && (0,emotion_react_browser_esm.jsx)("span", { style: { marginLeft: 5 } }, text)));


};
const ExploreActionButtons = (props) => {
  const { actions, canDownloadCSV, chartStatus, latestQueryFormData, slice, addDangerToast } = props;
  const copyTooltipText = (0,TranslatorSingleton.t)('Copy chart URL to clipboard');
  const [copyTooltip, setCopyTooltip] = (0,react.useState)(copyTooltipText);
  const longUrl = (0,exploreUtils/* getExploreLongUrl */.vp)(latestQueryFormData);
  const getShortUrl = (0,useUrlShortener/* useUrlShortener */.n)(longUrl);
  const doCopyLink = async () => {
    try {
      setCopyTooltip((0,TranslatorSingleton.t)('Loading...'));
      const shortUrl = await getShortUrl();
      await (0,copy/* default */.Z)(shortUrl);
      setCopyTooltip((0,TranslatorSingleton.t)('Copied to clipboard!'));
    }
    catch (error) {
      setCopyTooltip((0,TranslatorSingleton.t)('Sorry, your browser does not support copying.'));
    }
  };
  const doShareEmail = async () => {
    try {
      const subject = (0,TranslatorSingleton.t)('Superset Chart');
      const shortUrl = await getShortUrl();
      const body = (0,TranslatorSingleton.t)('%s%s', 'Check out this chart: ', shortUrl);
      window.location.href = `mailto:?Subject=${subject}%20&Body=${body}`;
    }
    catch (error) {
      addDangerToast((0,TranslatorSingleton.t)('Sorry, something went wrong. Try again later.'));
    }
  };
  const doExportCSV = canDownloadCSV ?
  exploreUtils/* exportChart.bind */.pe.bind(undefined, {
    formData: latestQueryFormData,
    resultType: 'results',
    resultFormat: 'csv' }) :

  null;
  const doExportJson = exploreUtils/* exportChart.bind */.pe.bind(undefined, {
    formData: latestQueryFormData,
    resultType: 'results',
    resultFormat: 'json' });

  const exportToCSVClasses = classnames_default()('btn btn-default btn-sm', {
    disabled: !canDownloadCSV });

  return (0,emotion_react_browser_esm.jsx)("div", { className: "btn-group results", role: "group" },
  latestQueryFormData && (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(ActionButton, { icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.Link */.Z.Link, { iconSize: "l" }), tooltip: copyTooltip, onClick: doCopyLink, onTooltipVisibilityChange: (value) => !value && setTimeout(() => setCopyTooltip(copyTooltipText), 200) }),
  (0,emotion_react_browser_esm.jsx)(ActionButton, { icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.Email */.Z.Email, { iconSize: "l" }), tooltip: (0,TranslatorSingleton.t)('Share chart by email'), onClick: doShareEmail }),
  (0,emotion_react_browser_esm.jsx)(EmbedCodeButton, { latestQueryFormData: latestQueryFormData }),
  (0,emotion_react_browser_esm.jsx)(ActionButton, { icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.FileTextOutlined */.Z.FileTextOutlined, { iconSize: "m" }), text: ".JSON", tooltip: (0,TranslatorSingleton.t)('Export to .JSON format'), onClick: doExportJson }),
  (0,emotion_react_browser_esm.jsx)(ActionButton, { icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.FileExcelOutlined */.Z.FileExcelOutlined, { iconSize: "m" }), text: ".CSV", tooltip: (0,TranslatorSingleton.t)('Export to .CSV format'), onClick: doExportCSV, className: exportToCSVClasses })),

  (0,emotion_react_browser_esm.jsx)(components_ExploreAdditionalActionsMenu, { latestQueryFormData: latestQueryFormData, chartStatus: chartStatus, onOpenInEditor: actions.redirectSQLLab, onOpenPropertiesModal: actions.openPropertiesModal, slice: slice }));

};
/* harmony default export */ const components_ExploreActionButtons = ((0,withToasts/* default */.Z)(ExploreActionButtons));
// EXTERNAL MODULE: ./src/explore/components/RowCountLabel.jsx
var RowCountLabel = __webpack_require__(14086);
;// CONCATENATED MODULE: ./src/explore/components/ExploreChartHeader.jsx
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























const CHART_STATUS_MAP = {
  failed: 'danger',
  loading: 'warning',
  success: 'success' };


const ExploreChartHeader_propTypes = {
  actions: (prop_types_default()).object.isRequired,
  addHistory: (prop_types_default()).func,
  can_overwrite: (prop_types_default()).bool.isRequired,
  can_download: (prop_types_default()).bool.isRequired,
  dashboardId: (prop_types_default()).number,
  isStarred: (prop_types_default()).bool.isRequired,
  slice: (prop_types_default()).object,
  sliceName: (prop_types_default()).string,
  table_name: (prop_types_default()).string,
  form_data: (prop_types_default()).object,
  ownState: (prop_types_default()).object,
  timeout: (prop_types_default()).number,
  chart: propShapes/* chartPropShape */.$6 };


const StyledHeader = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  span[role='button'] {
    display: flex;
    height: 100%;
  }

  .title-panel {
    display: flex;
    align-items: center;
  }

  .right-button-panel {
    display: flex;
    align-items: center;

    > .btn-group {
      flex: 0 0 auto;
      margin-left: ${({ theme }) => theme.gridUnit}px;
    }
  }

  .action-button {
    color: ${({ theme }) => theme.colors.grayscale.base};
    margin: 0 ${({ theme }) => theme.gridUnit * 1.5}px 0
      ${({ theme }) => theme.gridUnit}px;
  }
`;

const StyledButtons = style/* styled.span */.iK.span`
  display: flex;
  align-items: center;
`;

class ExploreChartHeader extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPropertiesModalOpen: false,
      showingReportModal: false };

    this.openPropertiesModal = this.openPropertiesModal.bind(this);
    this.closePropertiesModal = this.closePropertiesModal.bind(this);
    this.showReportModal = this.showReportModal.bind(this);
    this.hideReportModal = this.hideReportModal.bind(this);
    this.renderReportModal = this.renderReportModal.bind(this);
    this.fetchChartDashboardData = this.fetchChartDashboardData.bind(this);
  }

  componentDidMount() {
    const { dashboardId } = this.props;
    if (this.canAddReports()) {
      const { user, chart } = this.props;
      // this is in the case that there is an anonymous user.
      this.props.fetchUISpecificReport(
      user.userId,
      'chart_id',
      'charts',
      chart.id);

    }
    if (dashboardId) {
      this.fetchChartDashboardData();
    }
  }

  async fetchChartDashboardData() {
    const { dashboardId, slice } = this.props;
    const response = await SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/chart/${slice.slice_id}` });

    const chart = response.json.result;
    const dashboards = chart.dashboards || [];
    const dashboard =
    dashboardId &&
    dashboards.length &&
    dashboards.find((d) => d.id === dashboardId);

    if (dashboard && dashboard.json_metadata) {
      // setting the chart to use the dashboard custom label colors if any
      const labelColors =
      JSON.parse(dashboard.json_metadata).label_colors || {};
      const categoricalNamespace = CategoricalColorNamespace.getNamespace();

      Object.keys(labelColors).forEach((label) => {
        categoricalNamespace.setColor(label, labelColors[label]);
      });
    }
  }

  getSliceName() {
    const { sliceName, table_name: tableName } = this.props;
    const title = sliceName || (0,TranslatorSingleton.t)('%s - untitled', tableName);

    return title;
  }

  postChartFormData() {
    this.props.actions.postChartFormData(
    this.props.form_data,
    true,
    this.props.timeout,
    this.props.chart.id,
    this.props.ownState);

  }

  openPropertiesModal() {
    this.setState({
      isPropertiesModalOpen: true });

  }

  closePropertiesModal() {
    this.setState({
      isPropertiesModalOpen: false });

  }

  showReportModal() {
    this.setState({ showingReportModal: true });
  }

  hideReportModal() {
    this.setState({ showingReportModal: false });
  }

  renderReportModal() {
    const attachedReportExists = !!Object.keys(this.props.reports).length;
    return attachedReportExists ?
    (0,emotion_react_browser_esm.jsx)(HeaderReportActionsDropdown/* default */.Z, {
      showReportModal: this.showReportModal,
      hideReportModal: this.hideReportModal,
      toggleActive: this.props.toggleActive,
      deleteActiveReport: this.props.deleteActiveReport }) :


    (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)("span", {
      role: "button",
      title: (0,TranslatorSingleton.t)('Schedule email report'),
      tabIndex: 0,
      className: "action-button",
      onClick: this.showReportModal },

    (0,emotion_react_browser_esm.jsx)(Icons/* default.Calendar */.Z.Calendar, null)));



  }

  canAddReports() {
    if (!(0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.ALERT_REPORTS */.T.ALERT_REPORTS)) {
      return false;
    }
    const { user } = this.props;
    if (!user) {
      // this is in the case that there is an anonymous user.
      return false;
    }
    const roles = Object.keys(user.roles || []);
    const permissions = roles.map((key) =>
    user.roles[key].filter(
    (perms) => perms[0] === 'menu_access' && perms[1] === 'Manage'));


    return permissions[0].length > 0;
  }

  render() {
    const { user, form_data: formData, slice } = this.props;
    const {
      chartStatus,
      chartUpdateEndTime,
      chartUpdateStartTime,
      latestQueryFormData,
      queriesResponse } =
    this.props.chart;
    // TODO: when will get appropriate design for multi queries use all results and not first only
    const queryResponse = queriesResponse == null ? void 0 : queriesResponse[0];
    const chartFinished = ['failed', 'rendered', 'success'].includes(
    this.props.chart.chartStatus);

    return (
      (0,emotion_react_browser_esm.jsx)(StyledHeader, { id: "slice-header", className: "panel-title-large" },
      (0,emotion_react_browser_esm.jsx)("div", { className: "title-panel" },
      (slice == null ? void 0 : slice.certified_by) &&
      (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)(CertifiedIcon/* default */.Z, {
        certifiedBy: slice.certified_by,
        details: slice.certification_details }),
      ' '),


      (0,emotion_react_browser_esm.jsx)(EditableTitle/* default */.Z, {
        title: this.getSliceName(),
        canEdit: !this.props.slice || this.props.can_overwrite,
        onSaveTitle: this.props.actions.updateChartTitle }),


      this.props.slice &&
      (0,emotion_react_browser_esm.jsx)(StyledButtons, null,
      user.userId &&
      (0,emotion_react_browser_esm.jsx)(FaveStar/* default */.Z, {
        itemId: this.props.slice.slice_id,
        fetchFaveStar: this.props.actions.fetchFaveStar,
        saveFaveStar: this.props.actions.saveFaveStar,
        isStarred: this.props.isStarred,
        showTooltip: true }),


      (0,emotion_react_browser_esm.jsx)(PropertiesModal/* default */.Z, {
        show: this.state.isPropertiesModalOpen,
        onHide: this.closePropertiesModal,
        onSave: this.props.sliceUpdated,
        slice: this.props.slice }),

      (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, {
        id: "edit-desc-tooltip",
        title: (0,TranslatorSingleton.t)('Edit chart properties') },

      (0,emotion_react_browser_esm.jsx)("span", {
        role: "button",
        tabIndex: 0,
        className: "edit-desc-icon",
        onClick: this.openPropertiesModal },

      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-edit" }))),


      this.props.chart.sliceFormData &&
      (0,emotion_react_browser_esm.jsx)(AlteredSliceTag, {
        className: "altered",
        origFormData: this.props.chart.sliceFormData,
        currentFormData: formData }))),





      (0,emotion_react_browser_esm.jsx)("div", { className: "right-button-panel" },
      chartFinished && queryResponse &&
      (0,emotion_react_browser_esm.jsx)(RowCountLabel/* default */.Z, {
        rowcount: Number(queryResponse.rowcount) || 0,
        limit: Number(formData.row_limit) || 0 }),


      chartFinished && queryResponse && queryResponse.is_cached &&
      (0,emotion_react_browser_esm.jsx)(CachedLabel, {
        onClick: this.postChartFormData.bind(this),
        cachedTimestamp: queryResponse.cached_dttm }),


      (0,emotion_react_browser_esm.jsx)(Timer, {
        startTime: chartUpdateStartTime,
        endTime: chartUpdateEndTime,
        isRunning: chartStatus === 'loading',
        status: CHART_STATUS_MAP[chartStatus] }),

      this.canAddReports() && this.renderReportModal(),
      (0,emotion_react_browser_esm.jsx)(ReportModal/* default */.Z, {
        show: this.state.showingReportModal,
        onHide: this.hideReportModal,
        props: {
          userId: this.props.user.userId,
          userEmail: this.props.user.email,
          chart: this.props.chart,
          creationMethod: 'charts' } }),


      (0,emotion_react_browser_esm.jsx)(components_ExploreActionButtons, {
        actions: {
          ...this.props.actions,
          openPropertiesModal: this.openPropertiesModal },

        slice: this.props.slice,
        canDownloadCSV: this.props.can_download,
        chartStatus: chartStatus,
        latestQueryFormData: latestQueryFormData,
        queryResponse: queryResponse }))));




  }}


ExploreChartHeader.propTypes = ExploreChartHeader_propTypes;

function ExploreChartHeader_mapDispatchToProps(dispatch) {
  return (0,redux/* bindActionCreators */.DE)(
  { sliceUpdated: sliceUpdated, fetchUISpecificReport: actions_reports/* fetchUISpecificReport */.Aw, toggleActive: actions_reports/* toggleActive */.M, deleteActiveReport: actions_reports/* deleteActiveReport */.MZ },
  dispatch);

}

/* harmony default export */ const components_ExploreChartHeader = ((0,react_redux_es/* connect */.$j)(null, ExploreChartHeader_mapDispatchToProps)(ExploreChartHeader));
// EXTERNAL MODULE: ./src/components/Collapse/index.tsx
var Collapse = __webpack_require__(43700);
// EXTERNAL MODULE: ./src/components/Tabs/index.ts
var Tabs = __webpack_require__(40637);
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(38703);
// EXTERNAL MODULE: ./src/utils/getClientErrorObject.ts
var getClientErrorObject = __webpack_require__(98286);
// EXTERNAL MODULE: ./src/explore/components/DataTableControl/index.tsx
var DataTableControl = __webpack_require__(50909);
;// CONCATENATED MODULE: ./src/explore/components/DataTablesPane/index.tsx
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










const RESULT_TYPES = {
  results: 'results',
  samples: 'samples' };

const NULLISH_RESULTS_STATE = {
  [RESULT_TYPES.results]: undefined,
  [RESULT_TYPES.samples]: undefined };

const DATA_TABLE_PAGE_SIZE = 50;
const STORAGE_KEYS = {
  isOpen: 'is_datapanel_open' };

const DATAPANEL_KEY = 'data';
const TableControlsWrapper = style/* styled.div */.iK.div`
  display: flex;
  align-items: center;

  span {
    flex-shrink: 0;
  }
`;
const SouthPane = style/* styled.div */.iK.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.grayscale.light5};
  z-index: 5;
  overflow: hidden;
`;
const TabsWrapper = style/* styled.div */.iK.div`
  height: ${({ contentHeight }) => contentHeight}px;
  overflow: hidden;

  .table-condensed {
    height: 100%;
    overflow: auto;
  }
`;
const CollapseWrapper = style/* styled.div */.iK.div`
  height: 100%;

  .collapse-inner {
    height: 100%;

    .ant-collapse-item {
      height: 100%;

      .ant-collapse-content {
        height: calc(100% - ${({ theme }) => theme.gridUnit * 8}px);

        .ant-collapse-content-box {
          padding-top: 0;
          height: 100%;
        }
      }
    }
  }
`;
const Error = style/* styled.pre */.iK.pre`
  margin-top: ${({ theme }) => `${theme.gridUnit * 4}px`};
`;
const DataTablesPane = ({ queryFormData, tableSectionHeight, onCollapseChange, chartStatus, ownState, errorMessage, queriesResponse }) => {
  const [data, setData] = (0,react.useState)(NULLISH_RESULTS_STATE);
  const [isLoading, setIsLoading] = (0,react.useState)({
    [RESULT_TYPES.results]: true,
    [RESULT_TYPES.samples]: true });

  const [columnNames, setColumnNames] = (0,react.useState)([]);
  const [error, setError] = (0,react.useState)(NULLISH_RESULTS_STATE);
  const [filterText, setFilterText] = (0,react.useState)('');
  const [activeTabKey, setActiveTabKey] = (0,react.useState)(RESULT_TYPES.results);
  const [isRequestPending, setIsRequestPending] = (0,react.useState)(NULLISH_RESULTS_STATE);
  const [panelOpen, setPanelOpen] = (0,react.useState)((0,localStorageHelpers/* getFromLocalStorage */.f)(STORAGE_KEYS.isOpen, false));
  const getData = (0,react.useCallback)((resultType) => {
    setIsLoading((prevIsLoading) => ({
      ...prevIsLoading,
      [resultType]: true }));

    return (0,chartAction.getChartDataRequest)({
      formData: queryFormData,
      resultFormat: 'json',
      resultType,
      ownState }).

    then(({ json }) => {
      // Only displaying the first query is currently supported
      if (json.result.length > 1) {
        const data = [];
        json.result.forEach((item) => {
          item.data.forEach((row, i) => {
            if (data[i] !== undefined) {
              data[i] = { ...data[i], ...row };
            } else
            {
              data[i] = row;
            }
          });
        });
        setData((prevData) => ({
          ...prevData,
          [resultType]: data }));

      } else
      {
        setData((prevData) => ({
          ...prevData,
          [resultType]: json.result[0].data }));

      }
      setIsLoading((prevIsLoading) => ({
        ...prevIsLoading,
        [resultType]: false }));

      setError((prevError) => ({
        ...prevError,
        [resultType]: null }));

    }).
    catch((response) => {
      (0,getClientErrorObject/* getClientErrorObject */.O)(response).then(({ error, message }) => {
        setError((prevError) => ({
          ...prevError,
          [resultType]: error || message || (0,TranslatorSingleton.t)('Sorry, An error occurred') }));

        setIsLoading((prevIsLoading) => ({
          ...prevIsLoading,
          [resultType]: false }));

      });
    });
  }, [queryFormData]);
  (0,react.useEffect)(() => {
    (0,localStorageHelpers/* setInLocalStorage */._)(STORAGE_KEYS.isOpen, panelOpen);
  }, [panelOpen]);
  (0,react.useEffect)(() => {
    setIsRequestPending((prevState) => ({
      ...prevState,
      [RESULT_TYPES.results]: true }));

  }, [queryFormData]);
  (0,react.useEffect)(() => {
    setIsRequestPending((prevState) => ({
      ...prevState,
      [RESULT_TYPES.samples]: true }));

  }, [queryFormData == null ? void 0 : queryFormData.adhoc_filters, queryFormData == null ? void 0 : queryFormData.datasource]);
  (0,react.useEffect)(() => {
    if (queriesResponse && chartStatus === 'success') {
      const { colnames } = queriesResponse[0];
      setColumnNames([...colnames]);
    }
  }, [queriesResponse]);
  (0,react.useEffect)(() => {
    if (panelOpen && isRequestPending[RESULT_TYPES.results]) {
      if (errorMessage) {
        setIsRequestPending((prevState) => ({
          ...prevState,
          [RESULT_TYPES.results]: false }));

        setIsLoading((prevIsLoading) => ({
          ...prevIsLoading,
          [RESULT_TYPES.results]: false }));

        return;
      }
      if (chartStatus === 'loading') {
        setIsLoading((prevIsLoading) => ({
          ...prevIsLoading,
          [RESULT_TYPES.results]: true }));

      } else
      {
        setIsRequestPending((prevState) => ({
          ...prevState,
          [RESULT_TYPES.results]: false }));

        getData(RESULT_TYPES.results);
      }
    }
    if (panelOpen &&
    isRequestPending[RESULT_TYPES.samples] &&
    activeTabKey === RESULT_TYPES.samples) {
      setIsRequestPending((prevState) => ({
        ...prevState,
        [RESULT_TYPES.samples]: false }));

      getData(RESULT_TYPES.samples);
    }
  }, [
  panelOpen,
  isRequestPending,
  getData,
  activeTabKey,
  chartStatus,
  errorMessage]);

  const filteredData = {
    [RESULT_TYPES.results]: (0,DataTableControl/* useFilteredTableData */.C4)(filterText, data[RESULT_TYPES.results]),
    [RESULT_TYPES.samples]: (0,DataTableControl/* useFilteredTableData */.C4)(filterText, data[RESULT_TYPES.samples]) };

  // this is to preserve the order of the columns, even if there are integer values,
  // while also only grabbing the first column's keys
  const columns = {
    [RESULT_TYPES.results]: (0,DataTableControl/* useTableColumns */._q)(columnNames, data[RESULT_TYPES.results]),
    [RESULT_TYPES.samples]: (0,DataTableControl/* useTableColumns */._q)(columnNames, data[RESULT_TYPES.samples]) };

  const renderDataTable = (type) => {
    if (isLoading[type]) {
      return (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null);
    }
    if (error[type]) {
      return (0,emotion_react_browser_esm.jsx)(Error, null, error[type]);
    }
    if (data[type]) {var _data$type;
      if (((_data$type = data[type]) == null ? void 0 : _data$type.length) === 0) {
        return (0,emotion_react_browser_esm.jsx)("span", null, "No data");
      }
      return (0,emotion_react_browser_esm.jsx)(TableView/* default */.Z, { columns: columns[type], data: filteredData[type], pageSize: DATA_TABLE_PAGE_SIZE, noDataText: (0,TranslatorSingleton.t)('No data'), emptyWrapperType: TableView/* EmptyWrapperType.Small */.u.Small, className: "table-condensed", isPaginationSticky: true, showRowCount: false, small: true });
    }
    if (errorMessage) {
      return (0,emotion_react_browser_esm.jsx)(Error, null, errorMessage);
    }
    return null;
  };
  const TableControls = (0,emotion_react_browser_esm.jsx)(TableControlsWrapper, null,
  (0,emotion_react_browser_esm.jsx)(DataTableControl/* RowCount */.uy, { data: data[activeTabKey], loading: isLoading[activeTabKey] }),
  (0,emotion_react_browser_esm.jsx)(DataTableControl/* CopyToClipboardButton */.m, { data: data[activeTabKey], columns: columnNames }),
  (0,emotion_react_browser_esm.jsx)(DataTableControl/* FilterInput */.HS, { onChangeHandler: setFilterText }));

  const handleCollapseChange = (openPanelName) => {
    onCollapseChange(openPanelName);
    setPanelOpen(!!openPanelName);
  };
  return (0,emotion_react_browser_esm.jsx)(SouthPane, null,
  (0,emotion_react_browser_esm.jsx)(TabsWrapper, { contentHeight: tableSectionHeight },
  (0,emotion_react_browser_esm.jsx)(CollapseWrapper, null,
  (0,emotion_react_browser_esm.jsx)(Collapse/* default */.Z, { accordion: true, bordered: false, defaultActiveKey: panelOpen ? DATAPANEL_KEY : undefined, onChange: handleCollapseChange, bold: true, ghost: true, className: "collapse-inner" },
  (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { header: (0,TranslatorSingleton.t)('Data'), key: DATAPANEL_KEY },
  (0,emotion_react_browser_esm.jsx)(Tabs/* default */.ZP, { fullWidth: false, tabBarExtraContent: TableControls, activeKey: activeTabKey, onChange: setActiveTabKey },
  (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { tab: (0,TranslatorSingleton.t)('View results'), key: RESULT_TYPES.results },
  renderDataTable(RESULT_TYPES.results)),

  (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { tab: (0,TranslatorSingleton.t)('View samples'), key: RESULT_TYPES.samples },
  renderDataTable(RESULT_TYPES.samples))))))));







};
;// CONCATENATED MODULE: ./src/explore/components/ExploreChartPanel.jsx
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












const ExploreChartPanel_propTypes = {
  actions: (prop_types_default()).object.isRequired,
  addHistory: (prop_types_default()).func,
  onQuery: (prop_types_default()).func,
  can_overwrite: (prop_types_default()).bool.isRequired,
  can_download: (prop_types_default()).bool.isRequired,
  datasource: (prop_types_default()).object,
  dashboardId: (prop_types_default()).number,
  column_formats: (prop_types_default()).object,
  containerId: (prop_types_default()).string.isRequired,
  height: (prop_types_default()).string.isRequired,
  width: (prop_types_default()).string.isRequired,
  isStarred: (prop_types_default()).bool.isRequired,
  slice: (prop_types_default()).object,
  sliceName: (prop_types_default()).string,
  table_name: (prop_types_default()).string,
  vizType: (prop_types_default()).string.isRequired,
  form_data: (prop_types_default()).object,
  ownState: (prop_types_default()).object,
  standalone: (prop_types_default()).number,
  timeout: (prop_types_default()).number,
  refreshOverlayVisible: (prop_types_default()).bool,
  chart: propShapes/* chartPropShape */.$6,
  errorMessage: (prop_types_default()).node,
  triggerRender: (prop_types_default()).bool };


const GUTTER_SIZE_FACTOR = 1.25;

const CHART_PANEL_PADDING_HORIZ = 30;
const CHART_PANEL_PADDING_VERTICAL = 15;
const HEADER_PADDING = 15;

const ExploreChartPanel_STORAGE_KEYS = {
  sizes: 'chart_split_sizes' };


const INITIAL_SIZES = [90, 10];
const MIN_SIZES = [300, 50];
const DEFAULT_SOUTH_PANE_HEIGHT_PERCENT = 40;

const Styles = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  overflow: auto;
  box-shadow: none;
  height: 100%;

  & > div:last-of-type {
    flex-basis: 100%;
  }

  .gutter {
    border-top: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    width: ${({ theme }) => theme.gridUnit * 9}px;
    margin: ${({ theme }) => theme.gridUnit * GUTTER_SIZE_FACTOR}px auto;
  }

  .gutter.gutter-vertical {
    cursor: row-resize;
  }

  .ant-collapse {
    .ant-tabs {
      height: 100%;
      .ant-tabs-nav {
        padding-left: ${({ theme }) => theme.gridUnit * 5}px;
        margin: 0;
      }
      .ant-tabs-content-holder {
        overflow: hidden;
        .ant-tabs-content {
          height: 100%;
        }
      }
    }
  }
`;

const ExploreChartPanel = (props) => {
  const theme = (0,style/* useTheme */.Fg)();
  const gutterMargin = theme.gridUnit * GUTTER_SIZE_FACTOR;
  const gutterHeight = theme.gridUnit * GUTTER_SIZE_FACTOR;
  const { height: hHeight, ref: headerRef } = useResizeDetector({
    refreshMode: 'debounce',
    refreshRate: 300 });

  const { width: chartPanelWidth, ref: chartPanelRef } = useResizeDetector({
    refreshMode: 'debounce',
    refreshRate: 300 });

  const [splitSizes, setSplitSizes] = (0,react.useState)(
  (0,localStorageHelpers/* getFromLocalStorage */.f)(ExploreChartPanel_STORAGE_KEYS.sizes, INITIAL_SIZES));

  const { slice } = props;
  const updateQueryContext = (0,react.useCallback)(
  async function fetchChartData() {
    if (slice && slice.query_context === null) {
      const queryContext = (0,exploreUtils/* buildV1ChartDataPayload */.u)({
        formData: slice.form_data,
        force: false,
        resultFormat: 'json',
        resultType: 'full',
        setDataMask: null,
        ownState: null });


      await SupersetClient/* default.put */.Z.put({
        endpoint: `/api/v1/chart/${slice.slice_id}`,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query_context: JSON.stringify(queryContext),
          query_context_generation: true }) });


    }
  },
  [slice]);


  (0,react.useEffect)(() => {
    updateQueryContext();
  }, [updateQueryContext]);

  const calcSectionHeight = (0,react.useCallback)(
  (percent) => {
    let headerHeight;
    if (props.standalone) {
      headerHeight = 0;
    } else if (hHeight) {
      headerHeight = hHeight + HEADER_PADDING;
    } else {
      headerHeight = 50;
    }
    const containerHeight = parseInt(props.height, 10) - headerHeight;
    return (
      containerHeight * percent / 100 - (gutterHeight / 2 + gutterMargin));

  },
  [gutterHeight, gutterMargin, props.height, props.standalone, hHeight]);


  const [tableSectionHeight, setTableSectionHeight] = (0,react.useState)(
  calcSectionHeight(INITIAL_SIZES[1]));


  const recalcPanelSizes = (0,react.useCallback)(
  ([, southPercent]) => {
    setTableSectionHeight(calcSectionHeight(southPercent));
  },
  [calcSectionHeight]);


  (0,react.useEffect)(() => {
    recalcPanelSizes(splitSizes);
  }, [recalcPanelSizes, splitSizes]);

  (0,react.useEffect)(() => {
    (0,localStorageHelpers/* setInLocalStorage */._)(ExploreChartPanel_STORAGE_KEYS.sizes, splitSizes);
  }, [splitSizes]);

  const onDragEnd = (sizes) => {
    setSplitSizes(sizes);
  };

  const onCollapseChange = (openPanelName) => {
    let splitSizes;
    if (!openPanelName) {
      splitSizes = INITIAL_SIZES;
    } else {
      splitSizes = [
      100 - DEFAULT_SOUTH_PANE_HEIGHT_PERCENT,
      DEFAULT_SOUTH_PANE_HEIGHT_PERCENT];

    }
    setSplitSizes(splitSizes);
  };
  const renderChart = (0,react.useCallback)(() => {
    const { chart, vizType } = props;
    const newHeight =
    vizType === 'filter_box' ?
    calcSectionHeight(100) - CHART_PANEL_PADDING_VERTICAL :
    calcSectionHeight(splitSizes[0]) - CHART_PANEL_PADDING_VERTICAL;
    const chartWidth = chartPanelWidth - CHART_PANEL_PADDING_HORIZ;
    return (
      chartWidth > 0 &&
      (0,emotion_react_browser_esm.jsx)(ChartContainer/* default */.Z, {
        width: Math.floor(chartWidth),
        height: newHeight,
        ownState: props.ownState,
        annotationData: chart.annotationData,
        chartAlert: chart.chartAlert,
        chartStackTrace: chart.chartStackTrace,
        chartId: chart.id,
        chartStatus: chart.chartStatus,
        triggerRender: props.triggerRender,
        datasource: props.datasource,
        errorMessage: props.errorMessage,
        formData: props.form_data,
        onQuery: props.onQuery,
        queriesResponse: chart.queriesResponse,
        refreshOverlayVisible: props.refreshOverlayVisible,
        setControlValue: props.actions.setControlValue,
        timeout: props.timeout,
        triggerQuery: chart.triggerQuery,
        vizType: props.vizType }));



  }, [calcSectionHeight, chartPanelWidth, props, splitSizes]);

  const panelBody = (0,react.useMemo)(
  () =>
  (0,emotion_react_browser_esm.jsx)("div", { className: "panel-body", ref: chartPanelRef },
  renderChart()),


  [chartPanelRef, renderChart]);


  const standaloneChartBody = (0,react.useMemo)(
  () => (0,emotion_react_browser_esm.jsx)("div", { ref: chartPanelRef }, renderChart()),
  [chartPanelRef, renderChart]);


  const [queryFormData, setQueryFormData] = (0,react.useState)(
  props.chart.latestQueryFormData);


  (0,react.useEffect)(() => {
    // only update when `latestQueryFormData` changes AND `triggerRender`
    // is false. No update should be done when only `triggerRender` changes,
    // as this can trigger a query downstream based on incomplete form data.
    // (`latestQueryFormData` is only updated when a a valid request has been
    // triggered).
    if (!props.triggerRender) {
      setQueryFormData(props.chart.latestQueryFormData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.chart.latestQueryFormData]);

  if (props.standalone) {
    // dom manipulation hack to get rid of the boostrap theme's body background
    const standaloneClass = 'background-transparent';
    const bodyClasses = document.body.className.split(' ');
    if (!bodyClasses.includes(standaloneClass)) {
      document.body.className += ` ${standaloneClass}`;
    }
    return standaloneChartBody;
  }

  const header =
  (0,emotion_react_browser_esm.jsx)(components_ExploreChartHeader, {
    ownState: props.ownState,
    actions: props.actions,
    addHistory: props.addHistory,
    can_overwrite: props.can_overwrite,
    can_download: props.can_download,
    dashboardId: props.dashboardId,
    isStarred: props.isStarred,
    slice: props.slice,
    sliceName: props.sliceName,
    table_name: props.table_name,
    form_data: props.form_data,
    timeout: props.timeout,
    chart: props.chart,
    user: props.user,
    reports: props.reports });



  const elementStyle = (dimension, elementSize, gutterSize) => ({
    [dimension]: `calc(${elementSize}% - ${gutterSize + gutterMargin}px)` });


  return (
    (0,emotion_react_browser_esm.jsx)(Styles, { className: "panel panel-default chart-container", ref: chartPanelRef },
    (0,emotion_react_browser_esm.jsx)("div", { className: "panel-heading", ref: headerRef },
    header),

    props.vizType === 'filter_box' ?
    panelBody :

    (0,emotion_react_browser_esm.jsx)(react_split_es/* default */.Z, {
      sizes: splitSizes,
      minSize: MIN_SIZES,
      direction: "vertical",
      gutterSize: gutterHeight,
      onDragEnd: onDragEnd,
      elementStyle: elementStyle },

    panelBody,
    (0,emotion_react_browser_esm.jsx)(DataTablesPane, {
      ownState: props.ownState,
      queryFormData: queryFormData,
      tableSectionHeight: tableSectionHeight,
      onCollapseChange: onCollapseChange,
      chartStatus: props.chart.chartStatus,
      errorMessage: props.errorMessage,
      queriesResponse: props.chart.queriesResponse }))));





};

ExploreChartPanel.propTypes = ExploreChartPanel_propTypes;

/* harmony default export */ const components_ExploreChartPanel = (ExploreChartPanel);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/types/Datasource.js
var Datasource = __webpack_require__(78209);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/ensureIsArray.js
var ensureIsArray = __webpack_require__(86852);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/index.js + 10 modules
var chart_controls_esm = __webpack_require__(88483);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/components/InfoTooltipWithTrigger.js
var InfoTooltipWithTrigger = __webpack_require__(88186);
// EXTERNAL MODULE: ./src/explore/components/ControlRow.tsx
var ControlRow = __webpack_require__(61357);
// EXTERNAL MODULE: ./src/explore/components/Control.tsx + 41 modules
var Control = __webpack_require__(65725);
;// CONCATENATED MODULE: ./src/explore/components/ControlPanelsContainer.tsx
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
/* eslint camelcase: 0 */













const ControlPanelsContainer_Styles = style/* styled.div */.iK.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  overflow-x: visible;
  overflow-y: auto;
  #controlSections {
    min-height: 100%;
    overflow: visible;
  }
  .nav-tabs {
    flex: 0 0 1;
  }
  .tab-content {
    overflow: auto;
    flex: 1 1 100%;
  }
  .Select__menu {
    max-width: 100%;
  }
  .type-label {
    margin-right: ${({ theme }) => theme.gridUnit * 3}px;
    width: ${({ theme }) => theme.gridUnit * 7}px;
    display: inline-block;
    text-align: center;
    font-weight: ${({ theme }) => theme.typography.weights.bold};
  }
`;
const ControlPanelsTabs = (0,style/* styled */.iK)(Tabs/* default */.ZP)`
  .ant-tabs-nav-list {
    width: ${({ fullWidth }) => fullWidth ? '100%' : '50%'};
  }
  .ant-tabs-content-holder {
    overflow: visible;
  }
  .ant-tabs-tabpane {
    height: 100%;
  }
`;
const isTimeSection = (section) => !!section.label && (
chart_controls_esm.sections.legacyRegularTime.label === section.label ||
chart_controls_esm.sections.legacyTimeseriesTime.label === section.label);
const hasTimeColumn = (datasource) => {var _datasource$columns;return (datasource == null ? void 0 : (_datasource$columns = datasource.columns) == null ? void 0 : _datasource$columns.some((c) => c.is_dttm)) ||
  datasource.type === Datasource/* DatasourceType.Druid */.i.Druid;};
const sectionsToExpand = (sections, datasource) =>
// avoid expanding time section if datasource doesn't include time column
sections.reduce((acc, section) => section.expanded && (!isTimeSection(section) || hasTimeColumn(datasource)) ?
[...acc, String(section.label)] :
acc, []);
function getState(props) {
  const { exploreState: { datasource } } = props;
  const querySections = [];
  const customizeSections = [];
  (0,controlUtils/* getSectionsToRender */.Bq)(props.form_data.viz_type, props.datasource_type).forEach((section) => {
    // if at least one control in the section is not `renderTrigger`
    // or asks to be displayed at the Data tab
    if (section.tabOverride === 'data' ||
    section.controlSetRows.some((rows) => rows.some((control) => control &&
    typeof control === 'object' &&
    'config' in control &&
    control.config && (
    !control.config.renderTrigger ||
    control.config.tabOverride === 'data')))) {
      querySections.push(section);
    } else
    {
      customizeSections.push(section);
    }
  });
  const expandedQuerySections = sectionsToExpand(querySections, datasource);
  const expandedCustomizeSections = sectionsToExpand(customizeSections, datasource);
  return {
    expandedQuerySections,
    expandedCustomizeSections,
    querySections,
    customizeSections,
    loading: false };

}
class ControlPanelsContainer extends react.Component {
  // trigger updates to the component when async plugins load

  constructor(props) {
    super(props);
    this.state = {
      expandedQuerySections: [],
      expandedCustomizeSections: [],
      querySections: [],
      customizeSections: [],
      loading: false };

    this.renderControl = this.renderControl.bind(this);
    this.renderControlPanelSection = this.renderControlPanelSection.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (this.props.form_data.datasource !== prevProps.form_data.datasource ||
    this.props.form_data.viz_type !== prevProps.form_data.viz_type) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(getState(this.props));
    }
  }
  // required for an Antd bug that would otherwise malfunction re-rendering
  // a collapsed panel after changing the datasource or viz type
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.form_data.datasource !== nextProps.form_data.datasource ||
    this.props.form_data.viz_type !== nextProps.form_data.viz_type) {
      this.setState({ loading: true });
    }
  }
  componentDidMount() {
    this.setState(getState(this.props));
  }
  renderControl({ name, config }) {var _config$mapStateToPro;
    const { actions, controls, chart, exploreState } = this.props;
    const { visibility } = config;
    // If the control item is not an object, we have to look up the control data from
    // the centralized controls file.
    // When it is an object we read control data straight from `config` instead
    const controlData = {
      ...config,
      ...controls[name],
      // if `mapStateToProps` accept three arguments, it means it needs chart
      // state, too. Since it's may be expensive to run mapStateToProps for every
      // re-render, we only run this when the chart plugin explicitly ask for this.
      ...(((_config$mapStateToPro = config.mapStateToProps) == null ? void 0 : _config$mapStateToPro.length) === 3 ?
      // @ts-ignore /* The typing accuses of having an extra parameter. I didn't remove it because I believe it could be an error in the types and not in the code */
      config.mapStateToProps(exploreState, controls[name], chart) :
      // for other controls, `mapStateToProps` is already run in
      // controlUtils/getControlState.ts
      undefined),
      name };

    const { validationErrors, ...restProps } = controlData;
    // if visibility check says the config is not visible, don't render it
    if (visibility && !visibility.call(config, this.props, controlData)) {
      return null;
    }
    return (0,emotion_react_browser_esm.jsx)(Control/* default */.Z, extends_default()({ key: `control-${name}`, name: name, validationErrors: validationErrors, actions: actions }, restProps));
  }
  renderControlPanelSection(section) {
    const { controls } = this.props;
    const { label, description } = section;
    // Section label can be a ReactNode but in some places we want to
    // have a string ID. Using forced type conversion for now,
    // should probably add a `id` field to sections in the future.
    const sectionId = String(label);
    const hasErrors = section.controlSetRows.some((rows) => rows.some((item) => {
      const controlName = typeof item === 'string' ?
      item :
      item && 'name' in item ?
      item.name :
      null;
      return controlName &&
      controlName in controls &&
      controls[controlName].validationErrors &&
      controls[controlName].validationErrors.length > 0;
    }));
    const PanelHeader = () => (0,emotion_react_browser_esm.jsx)("span", null,
    (0,emotion_react_browser_esm.jsx)("span", null, label), ' ',
    description &&
    // label is only used in tooltip id (should probably call this prop `id`)
    (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, { label: sectionId, tooltip: description }),
    hasErrors && (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, { label: "validation-errors", bsStyle: "danger", tooltip: "This section contains validation errors" }));

    return (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { css: (theme) => emotion_react_browser_esm.css`
          margin-bottom: 0;
          box-shadow: none;

          &:last-child {
            padding-bottom: ${theme.gridUnit * 10}px;
          }

          .panel-body {
            margin-left: ${theme.gridUnit * 4}px;
            padding-bottom: 0px;
          }

          span.label {
            display: inline-block;
          }
        `, header: PanelHeader(), key: sectionId },
    section.controlSetRows.map((controlSets, i) => {
      const renderedControls = controlSets.
      map((controlItem) => {
        if (!controlItem) {
          // When the item is invalid
          return null;
        }
        if ( /*#__PURE__*/react.isValidElement(controlItem)) {
          // When the item is a React element
          return controlItem;
        }
        if (controlItem.name &&
        controlItem.config &&
        controlItem.name !== 'datasource') {
          return this.renderControl(controlItem);
        }
        return null;
      }).
      filter((x) => x !== null);
      // don't show the row if it is empty
      if (renderedControls.length === 0) {
        return null;
      }
      return (0,emotion_react_browser_esm.jsx)(ControlRow/* default */.Z, { key: `controlsetrow-${i}`, controls: renderedControls });
    }));

  }
  render() {
    const controlPanelRegistry = (0,ChartControlPanelRegistrySingleton/* default */.Z)();
    if (!controlPanelRegistry.has(this.props.form_data.viz_type) &&
    this.context.loading ||
    this.state.loading) {
      return (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null);
    }
    const showCustomizeTab = this.state.customizeSections.length > 0;
    return (0,emotion_react_browser_esm.jsx)(ControlPanelsContainer_Styles, null,
    (0,emotion_react_browser_esm.jsx)(ControlPanelsTabs, { id: "controlSections", fullWidth: showCustomizeTab },
    (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { key: "query", tab: (0,TranslatorSingleton.t)('Data') },
    (0,emotion_react_browser_esm.jsx)(Collapse/* default */.Z, { bordered: true, activeKey: this.state.expandedQuerySections, expandIconPosition: "right", onChange: (selection) => {
        this.setState({
          expandedQuerySections: (0,ensureIsArray/* default */.Z)(selection) });

      }, ghost: true },
    this.state.querySections.map(this.renderControlPanelSection))),


    showCustomizeTab && (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { key: "display", tab: (0,TranslatorSingleton.t)('Customize') },
    (0,emotion_react_browser_esm.jsx)(Collapse/* default */.Z, { bordered: true, activeKey: this.state.expandedCustomizeSections, expandIconPosition: "right", onChange: (selection) => {
        this.setState({
          expandedCustomizeSections: (0,ensureIsArray/* default */.Z)(selection) });

      }, ghost: true },
    this.state.customizeSections.map(this.renderControlPanelSection)))));




  }}ControlPanelsContainer.contextType = DynamicPlugins/* PluginContext */.Zn;

/* harmony default export */ const components_ControlPanelsContainer = ((0,react_redux_es/* connect */.$j)(function mapStateToProps(state) {
  const { explore, charts } = state;
  const chartKey = Object.keys(charts)[0];
  const chart = charts[chartKey];
  return {
    chart,
    isDatasourceMetaLoading: explore.isDatasourceMetaLoading,
    controls: explore.controls,
    exploreState: explore };

}, function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)(exploreActions, dispatch) };

})(ControlPanelsContainer));
// EXTERNAL MODULE: ./src/components/Alert/index.tsx
var Alert = __webpack_require__(29487);
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/react-markdown.js
var react_markdown = __webpack_require__(30724);
var react_markdown_default = /*#__PURE__*/__webpack_require__.n(react_markdown);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./src/components/Radio/index.tsx
var Radio = __webpack_require__(87183);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/components/index.ts + 1 modules
var src_components = __webpack_require__(33346);
;// CONCATENATED MODULE: ./src/explore/components/SaveModal.tsx
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
/* eslint camelcase: 0 */











// Session storage key for recent dashboard
const SK_DASHBOARD_ID = 'save_chart_recent_dashboard';
const SELECT_PLACEHOLDER = (0,TranslatorSingleton.t)('**Select** a dashboard OR **create** a new one');
const StyledModal = (0,style/* styled */.iK)(Modal/* default */.Z)`
  .ant-modal-body {
    overflow: visible;
  }
`;
class SaveModal extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      saveToDashboardId: null,
      newSliceName: props.sliceName,
      alert: null,
      action: this.canOverwriteSlice() ? 'overwrite' : 'saveas' };

    this.onDashboardSelectChange = this.onDashboardSelectChange.bind(this);
    this.onSliceNameChange = this.onSliceNameChange.bind(this);
    this.changeAction = this.changeAction.bind(this);
    this.saveOrOverwrite = this.saveOrOverwrite.bind(this);
  }
  canOverwriteSlice() {var _this$props$slice, _this$props$slice$own;
    return (_this$props$slice = this.props.slice) == null ? void 0 : (_this$props$slice$own = _this$props$slice.owners) == null ? void 0 : _this$props$slice$own.includes(this.props.userId);
  }
  componentDidMount() {
    this.props.actions.fetchDashboards(this.props.userId).then(() => {
      const dashboardIds = this.props.dashboards.map((dashboard) => dashboard.value);
      const lastDashboard = sessionStorage.getItem(SK_DASHBOARD_ID);
      let recentDashboard = lastDashboard && parseInt(lastDashboard, 10);
      if (this.props.dashboardId) {
        recentDashboard = this.props.dashboardId;
      }
      if (recentDashboard !== null &&
      dashboardIds.indexOf(recentDashboard) !== -1) {
        this.setState({
          saveToDashboardId: recentDashboard });

      }
    });
  }
  onSliceNameChange(event) {
    this.setState({ newSliceName: event.target.value });
  }
  onDashboardSelectChange(selected) {
    const newDashboardName = selected ? String(selected) : undefined;
    const saveToDashboardId = selected && typeof selected === 'number' ? selected : null;
    this.setState({ saveToDashboardId, newDashboardName });
  }
  changeAction(action) {
    this.setState({ action });
  }
  saveOrOverwrite(gotodash) {
    this.setState({ alert: null });
    this.props.actions.removeSaveModalAlert();
    const sliceParams = {};
    if (this.props.slice && this.props.slice.slice_id) {
      sliceParams.slice_id = this.props.slice.slice_id;
    }
    if (sliceParams.action === 'saveas') {
      if (this.state.newSliceName === '') {
        this.setState({ alert: (0,TranslatorSingleton.t)('Please enter a chart name') });
        return;
      }
    }
    sliceParams.action = this.state.action;
    sliceParams.slice_name = this.state.newSliceName;
    sliceParams.save_to_dashboard_id = this.state.saveToDashboardId;
    sliceParams.new_dashboard_name = this.state.newDashboardName;
    this.props.actions.
    saveSlice(this.props.form_data, sliceParams).
    then((data) => {
      if (data.dashboard_id === null) {
        sessionStorage.removeItem(SK_DASHBOARD_ID);
      } else
      {
        sessionStorage.setItem(SK_DASHBOARD_ID, data.dashboard_id);
      }
      // Go to new slice url or dashboard url
      const url = gotodash ? data.dashboard_url : data.slice.slice_url;
      window.location.assign(url);
    });
    this.props.onHide();
  }
  removeAlert() {
    if (this.props.alert) {
      this.props.actions.removeSaveModalAlert();
    }
    this.setState({ alert: null });
  }
  render() {
    const dashboardSelectValue = this.state.saveToDashboardId || this.state.newDashboardName;
    return (0,emotion_react_browser_esm.jsx)(StyledModal, { show: true, onHide: this.props.onHide, title: (0,TranslatorSingleton.t)('Save chart'), footer: (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { id: "btn_cancel", buttonSize: "small", onClick: this.props.onHide },
      (0,TranslatorSingleton.t)('Cancel')),

      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { id: "btn_modal_save_goto_dash", buttonSize: "small", disabled: !this.state.newSliceName ||
        !this.state.saveToDashboardId && !this.state.newDashboardName, onClick: () => this.saveOrOverwrite(true) },
      (0,TranslatorSingleton.t)('Save & go to dashboard')),

      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { id: "btn_modal_save", buttonSize: "small", buttonStyle: "primary", onClick: () => this.saveOrOverwrite(false), disabled: !this.state.newSliceName },
      !this.canOverwriteSlice() && this.props.slice ?
      (0,TranslatorSingleton.t)('Save as new chart') :
      (0,TranslatorSingleton.t)('Save'))) },


    (0,emotion_react_browser_esm.jsx)(Form/* Form */.l0, { layout: "vertical" },
    (this.state.alert || this.props.alert) && (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { type: "warning", message: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      this.state.alert ? this.state.alert : this.props.alert,
      (0,emotion_react_browser_esm.jsx)("i", { role: "button", "aria-label": "Remove alert", tabIndex: 0, className: "fa fa-close pull-right", onClick: this.removeAlert.bind(this), style: { cursor: 'pointer' } })) }),

    (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, null,
    (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { id: "overwrite-radio", disabled: !this.canOverwriteSlice(), checked: this.state.action === 'overwrite', onChange: () => this.changeAction('overwrite') },
    (0,TranslatorSingleton.t)('Save (Overwrite)')),

    (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { id: "saveas-radio", checked: this.state.action === 'saveas', onChange: () => this.changeAction('saveas') },
    ' ',
    (0,TranslatorSingleton.t)('Save as ...'), " \xA0")),


    (0,emotion_react_browser_esm.jsx)("hr", null),
    (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { label: (0,TranslatorSingleton.t)('Chart name'), required: true },
    (0,emotion_react_browser_esm.jsx)(components/* Input */.II, { name: "new_slice_name", type: "text", placeholder: "Name", value: this.state.newSliceName, onChange: this.onSliceNameChange })),

    (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { label: (0,TranslatorSingleton.t)('Add to dashboard') },
    (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { allowClear: true, allowNewOptions: true, ariaLabel: (0,TranslatorSingleton.t)('Select a dashboard'), options: this.props.dashboards, onChange: this.onDashboardSelectChange, value: dashboardSelectValue || undefined, placeholder:
      // Using markdown to allow for good i18n
      (0,emotion_react_browser_esm.jsx)((react_markdown_default()), { source: SELECT_PLACEHOLDER, renderers: { paragraph: 'span' } }) }))));



  }}

function mapStateToProps({ explore, saveModal }) {var _explore$user;
  return {
    datasource: explore.datasource,
    slice: explore.slice,
    userId: (_explore$user = explore.user) == null ? void 0 : _explore$user.userId,
    dashboards: saveModal.dashboards,
    alert: saveModal.saveModalAlert };

}
/* harmony default export */ const components_SaveModal = ((0,react_redux_es/* connect */.$j)(mapStateToProps, () => ({}))(SaveModal));
// EXTERNAL MODULE: ./src/components/ButtonGroup/index.tsx
var ButtonGroup = __webpack_require__(37488);
;// CONCATENATED MODULE: ./src/explore/components/QueryAndSaveBtns.jsx
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








const QueryAndSaveBtns_propTypes = {
  canAdd: (prop_types_default()).bool.isRequired,
  onQuery: (prop_types_default()).func.isRequired,
  onSave: (prop_types_default()).func,
  onStop: (prop_types_default()).func,
  loading: (prop_types_default()).bool,
  chartIsStale: (prop_types_default()).bool,
  errorMessage: (prop_types_default()).node };


const defaultProps = {
  onStop: () => {},
  onSave: () => {} };


function QueryAndSaveBtns({
  canAdd,
  onQuery,
  onSave,
  onStop,
  loading,
  chartIsStale,
  errorMessage })
{
  let qryButtonStyle = 'tertiary';
  if (errorMessage) {
    qryButtonStyle = 'danger';
  } else if (chartIsStale) {
    qryButtonStyle = 'primary';
  }

  const saveButtonDisabled = errorMessage ? true : loading;
  const qryOrStopButton = loading ?
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
    onClick: onStop,
    buttonStyle: "warning",
    buttonSize: "small",
    disabled: !canAdd },

  (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-stop-circle-o" }), " ", (0,TranslatorSingleton.t)('Stop')) :


  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
    buttonSize: "small",
    onClick: onQuery,
    buttonStyle: qryButtonStyle,
    disabled: !!errorMessage },


  (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-bolt" }), " ", (0,TranslatorSingleton.t)('Run'));



  const theme = (0,style/* useTheme */.Fg)();

  return (
    (0,emotion_react_browser_esm.jsx)("div", {
      css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({
        display: 'flex',
        flexShrink: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: theme.gridUnit * 2,
        paddingRight: theme.gridUnit * 2,
        paddingBottom: 0,
        paddingLeft: theme.gridUnit * 4,
        '& button': {
          width: 100 },

        '.errMsg': {
          marginLeft: theme.gridUnit * 4 } },  true ? "" : 0,  true ? "" : 0) },



    (0,emotion_react_browser_esm.jsx)(ButtonGroup/* default */.Z, { className: "query-and-save" },
    qryOrStopButton,
    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
      buttonStyle: "tertiary",
      buttonSize: "small",
      "data-target": "#save_modal",
      "data-toggle": "modal",
      disabled: saveButtonDisabled,
      onClick: onSave },


    (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus-circle" }), " ", (0,TranslatorSingleton.t)('Save'))),


    errorMessage &&
    (0,emotion_react_browser_esm.jsx)("span", { className: "errMsg" },
    ' ',
    (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, {
      id: "query-error-tooltip",
      placement: "right",
      title: errorMessage },

    (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-exclamation-circle text-danger fa-lg" })))));





}

QueryAndSaveBtns.propTypes = QueryAndSaveBtns_propTypes;
QueryAndSaveBtns.defaultProps = defaultProps;
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
// EXTERNAL MODULE: ./node_modules/match-sorter/dist/match-sorter.esm.js
var match_sorter_esm = __webpack_require__(90233);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDrag.js + 1 modules
var useDrag = __webpack_require__(27034);
// EXTERNAL MODULE: ./src/explore/components/DndItemType.ts
var DndItemType = __webpack_require__(42753);
// EXTERNAL MODULE: ./src/explore/components/optionRenderers.tsx
var optionRenderers = __webpack_require__(99963);
;// CONCATENATED MODULE: ./src/explore/components/DatasourcePanel/DatasourcePanelDragOption/index.tsx
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





const DatasourceItemContainer = style/* styled.div */.iK.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.gridUnit * 6}px;
  cursor: pointer;

  > div {
    width: 100%;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.grayscale.light2};
  }
`;
function DatasourcePanelDragOption(props) {
  const { labelRef, showTooltip, type, value } = props;
  const [{ isDragging }, drag] = (0,useDrag/* useDrag */.c)({
    item: {
      value: props.value,
      type: props.type },

    collect: (monitor) => ({
      isDragging: monitor.isDragging() }) });


  const optionProps = {
    labelRef,
    showTooltip: !isDragging && showTooltip,
    showType: true };

  return (0,emotion_react_browser_esm.jsx)(DatasourceItemContainer, { ref: drag },
  type === DndItemType/* DndItemType.Column */.g.Column ? (0,emotion_react_browser_esm.jsx)(optionRenderers/* StyledColumnOption */.l, extends_default()({ column: value }, optionProps)) : (0,emotion_react_browser_esm.jsx)(optionRenderers/* StyledMetricOption */.B, extends_default()({ metric: value }, optionProps)));

}
;// CONCATENATED MODULE: ./src/explore/components/DatasourcePanel/index.tsx
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












const DatasourcePanel_Button = style/* styled.button */.iK.button`
  background: none;
  border: none;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary.dark1};
`;
const ButtonContainer = style/* styled.div */.iK.div`
  text-align: center;
  padding-top: 2px;
`;
const DatasourceContainer = style/* styled.div */.iK.div`
  ${({ theme }) => emotion_react_browser_esm.css`
    background-color: ${theme.colors.grayscale.light4};
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    .ant-collapse {
      height: auto;
    }
    .field-selections {
      padding: 0 0 ${4 * theme.gridUnit}px;
      overflow: auto;
    }
    .field-length {
      margin-bottom: ${theme.gridUnit * 2}px;
      font-size: ${theme.typography.sizes.s}px;
      color: ${theme.colors.grayscale.light1};
    }
    .form-control.input-md {
      width: calc(100% - ${theme.gridUnit * 4}px);
      height: ${theme.gridUnit * 8}px;
      margin: ${theme.gridUnit * 2}px auto;
    }
    .type-label {
      font-weight: ${theme.typography.weights.light};
      font-size: ${theme.typography.sizes.s}px;
      color: ${theme.colors.grayscale.base};
    }
    .Control {
      padding-bottom: 0;
    }
  `};
`;
const LabelWrapper = style/* styled.div */.iK.div`
  overflow: hidden;
  text-overflow: ellipsis;

  & > span {
    white-space: nowrap;
  }

  .option-label {
    display: inline;
  }

  .metric-option {
    & > svg {
      min-width: ${({ theme }) => `${theme.gridUnit * 4}px`};
    }
    & > .option-label {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
const LabelContainer = (props) => {
  const labelRef = (0,react.useRef)(null);
  const [showTooltip, setShowTooltip] = (0,react.useState)(true);
  const isLabelTruncated = () => !!(labelRef &&
  labelRef.current &&
  labelRef.current.scrollWidth > labelRef.current.clientWidth);
  const handleShowTooltip = () => {
    const shouldShowTooltip = isLabelTruncated();
    if (shouldShowTooltip !== showTooltip) {
      setShowTooltip(shouldShowTooltip);
    }
  };
  const handleResetTooltip = () => {
    setShowTooltip(true);
  };
  const extendedProps = {
    labelRef,
    showTooltip };

  return (0,emotion_react_browser_esm.jsx)(LabelWrapper, { onMouseEnter: handleShowTooltip, onMouseLeave: handleResetTooltip, className: props.className }, /*#__PURE__*/
  react.cloneElement(props.children, extendedProps));

};
const enableExploreDnd = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.ENABLE_EXPLORE_DRAG_AND_DROP */.T.ENABLE_EXPLORE_DRAG_AND_DROP);
function DataSourcePanel({ datasource, controls: { datasource: datasourceControl }, actions }) {
  const { columns: _columns, metrics } = datasource;
  // display temporal column first
  const columns = (0,react.useMemo)(() => [..._columns].sort((col1, col2) => {
    if (col1.is_dttm && !col2.is_dttm) {
      return -1;
    }
    if (col2.is_dttm && !col1.is_dttm) {
      return 1;
    }
    return 0;
  }), [_columns]);
  const [inputValue, setInputValue] = (0,react.useState)('');
  const [lists, setList] = (0,react.useState)({
    columns,
    metrics });

  const [showAllMetrics, setShowAllMetrics] = (0,react.useState)(false);
  const [showAllColumns, setShowAllColumns] = (0,react.useState)(false);
  const DEFAULT_MAX_COLUMNS_LENGTH = 50;
  const DEFAULT_MAX_METRICS_LENGTH = 50;
  const search = (0,react.useMemo)(() => debounce_default()((value) => {
    if (value === '') {
      setList({ columns, metrics });
      return;
    }
    setList({
      columns: (0,match_sorter_esm/* matchSorter */.Lu)(columns, value, {
        keys: [
        {
          key: 'verbose_name',
          threshold: match_sorter_esm/* rankings.CONTAINS */.tL.CONTAINS },

        {
          key: 'column_name',
          threshold: match_sorter_esm/* rankings.CONTAINS */.tL.CONTAINS },

        {
          key: (item) => [item.description, item.expression].map((x) => (x == null ? void 0 : x.replace(/[_\n\s]+/g, ' ')) || ''),
          threshold: match_sorter_esm/* rankings.CONTAINS */.tL.CONTAINS,
          maxRanking: match_sorter_esm/* rankings.CONTAINS */.tL.CONTAINS }],


        keepDiacritics: true }),

      metrics: (0,match_sorter_esm/* matchSorter */.Lu)(metrics, value, {
        keys: [
        {
          key: 'verbose_name',
          threshold: match_sorter_esm/* rankings.CONTAINS */.tL.CONTAINS },

        {
          key: 'metric_name',
          threshold: match_sorter_esm/* rankings.CONTAINS */.tL.CONTAINS },

        {
          key: (item) => [item.description, item.expression].map((x) => (x == null ? void 0 : x.replace(/[_\n\s]+/g, ' ')) || ''),
          threshold: match_sorter_esm/* rankings.CONTAINS */.tL.CONTAINS,
          maxRanking: match_sorter_esm/* rankings.CONTAINS */.tL.CONTAINS }],


        keepDiacritics: true,
        baseSort: (a, b) => Number(b.item.is_certified) - Number(a.item.is_certified) ||
        String(a.rankedValue).localeCompare(b.rankedValue) }) });


  }, src_constants/* FAST_DEBOUNCE */.oP), [columns, metrics]);
  (0,react.useEffect)(() => {
    setList({
      columns,
      metrics });

    setInputValue('');
  }, [columns, datasource, metrics]);
  const sortCertifiedFirst = (slice) => slice.sort((a, b) => b.is_certified - a.is_certified);
  const metricSlice = (0,react.useMemo)(() => showAllMetrics ?
  lists.metrics :
  lists.metrics.slice(0, DEFAULT_MAX_METRICS_LENGTH), [lists.metrics, showAllMetrics]);
  const columnSlice = (0,react.useMemo)(() => showAllColumns ?
  sortCertifiedFirst(lists.columns) :
  sortCertifiedFirst(lists.columns.slice(0, DEFAULT_MAX_COLUMNS_LENGTH)), [lists.columns, showAllColumns]);
  const mainBody = (0,react.useMemo)(() => (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(components/* Input */.II, { allowClear: true, onChange: (evt) => {
      setInputValue(evt.target.value);
      search(evt.target.value);
    }, value: inputValue, className: "form-control input-md", placeholder: (0,TranslatorSingleton.t)('Search Metrics & Columns') }),
  (0,emotion_react_browser_esm.jsx)("div", { className: "field-selections" },
  (0,emotion_react_browser_esm.jsx)(Collapse/* default */.Z, { bordered: true, defaultActiveKey: ['metrics', 'column'], expandIconPosition: "right", ghost: true },
  (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { header: (0,emotion_react_browser_esm.jsx)("span", { className: "header" }, (0,TranslatorSingleton.t)('Metrics')), key: "metrics" },
  (0,emotion_react_browser_esm.jsx)("div", { className: "field-length" },
  (0,TranslatorSingleton.t)(`Showing %s of %s`, metricSlice.length, lists.metrics.length)),

  metricSlice.map((m) => (0,emotion_react_browser_esm.jsx)(LabelContainer, { key: m.metric_name, className: "column" },
  enableExploreDnd ? (0,emotion_react_browser_esm.jsx)(DatasourcePanelDragOption, { value: m, type: DndItemType/* DndItemType.Metric */.g.Metric }) : (0,emotion_react_browser_esm.jsx)(optionRenderers/* StyledMetricOption */.B, { metric: m, showType: true }))),

  lists.metrics.length > DEFAULT_MAX_METRICS_LENGTH ? (0,emotion_react_browser_esm.jsx)(ButtonContainer, null,
  (0,emotion_react_browser_esm.jsx)(DatasourcePanel_Button, { onClick: () => setShowAllMetrics(!showAllMetrics) },
  showAllMetrics ? (0,TranslatorSingleton.t)('Show less...') : (0,TranslatorSingleton.t)('Show all...'))) :

  (0,emotion_react_browser_esm.jsx)(react.Fragment, null)),

  (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { header: (0,emotion_react_browser_esm.jsx)("span", { className: "header" }, (0,TranslatorSingleton.t)('Columns')), key: "column" },
  (0,emotion_react_browser_esm.jsx)("div", { className: "field-length" },
  (0,TranslatorSingleton.t)(`Showing %s of %s`, columnSlice.length, lists.columns.length)),

  columnSlice.map((col) => (0,emotion_react_browser_esm.jsx)(LabelContainer, { key: col.column_name, className: "column" },
  enableExploreDnd ? (0,emotion_react_browser_esm.jsx)(DatasourcePanelDragOption, { value: col, type: DndItemType/* DndItemType.Column */.g.Column }) : (0,emotion_react_browser_esm.jsx)(optionRenderers/* StyledColumnOption */.l, { column: col, showType: true }))),

  lists.columns.length > DEFAULT_MAX_COLUMNS_LENGTH ? (0,emotion_react_browser_esm.jsx)(ButtonContainer, null,
  (0,emotion_react_browser_esm.jsx)(DatasourcePanel_Button, { onClick: () => setShowAllColumns(!showAllColumns) },
  showAllColumns ? (0,TranslatorSingleton.t)('Show Less...') : (0,TranslatorSingleton.t)('Show all...'))) :

  (0,emotion_react_browser_esm.jsx)(react.Fragment, null))))),



  [
  columnSlice,
  inputValue,
  lists.columns.length,
  lists.metrics.length,
  metricSlice,
  search,
  showAllColumns,
  showAllMetrics]);

  return (0,emotion_react_browser_esm.jsx)(DatasourceContainer, null,
  (0,emotion_react_browser_esm.jsx)(Control/* default */.Z, extends_default()({}, datasourceControl, { name: "datasource", actions: actions })),
  datasource.id != null && mainBody);

}
// EXTERNAL MODULE: ./src/logger/actions/index.ts
var logger_actions = __webpack_require__(97381);
// EXTERNAL MODULE: ./src/logger/LogUtils.ts
var LogUtils = __webpack_require__(3741);
;// CONCATENATED MODULE: ./src/explore/components/ExploreViewContainer.jsx
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
/* eslint camelcase: 0 */

































const ExploreViewContainer_propTypes = {
  ...components_ExploreChartPanel.propTypes,
  height: (prop_types_default()).string,
  width: (prop_types_default()).string,
  actions: (prop_types_default()).object.isRequired,
  datasource_type: (prop_types_default()).string.isRequired,
  dashboardId: (prop_types_default()).number,
  isDatasourceMetaLoading: (prop_types_default()).bool.isRequired,
  chart: propShapes/* chartPropShape.isRequired */.$6.isRequired,
  slice: (prop_types_default()).object,
  sliceName: (prop_types_default()).string,
  controls: (prop_types_default()).object.isRequired,
  forcedHeight: (prop_types_default()).string,
  form_data: (prop_types_default()).object.isRequired,
  standalone: (prop_types_default()).number.isRequired,
  timeout: (prop_types_default()).number,
  impressionId: (prop_types_default()).string,
  vizType: (prop_types_default()).string };


const ExploreViewContainer_Styles = style/* styled.div */.iK.div`
  background: ${({ theme }) => theme.colors.grayscale.light5};
  text-align: left;
  position: relative;
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-basis: 100vh;
  align-items: stretch;
  border-top: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  .explore-column {
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => 2 * theme.gridUnit}px 0;
    max-height: 100%;
  }
  .data-source-selection {
    background-color: ${({ theme }) => theme.colors.grayscale.light4};
    padding: ${({ theme }) => 2 * theme.gridUnit}px 0;
    border-right: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  }
  .main-explore-content {
    flex: 1;
    min-width: ${({ theme }) => theme.gridUnit * 128}px;
    border-left: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    .panel {
      margin-bottom: 0;
    }
  }
  .controls-column {
    align-self: flex-start;
    padding: 0;
  }
  .title-container {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 0 ${({ theme }) => 2 * theme.gridUnit}px;
    justify-content: space-between;
    .horizontal-text {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.grayscale.light1};
      font-size: ${({ theme }) => 4 * theme.typography.sizes.s};
    }
  }
  .no-show {
    display: none;
  }
  .vertical-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
  .sidebar {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.grayscale.light4};
    padding: ${({ theme }) => 2 * theme.gridUnit}px;
    width: ${({ theme }) => 8 * theme.gridUnit}px;
  }
  .callpase-icon > svg {
    color: ${({ theme }) => theme.colors.primary.base};
  }
`;

const getWindowSize = () => ({
  height: window.innerHeight,
  width: window.innerWidth });


function useWindowSize({ delayMs = 250 } = {}) {
  const [size, setSize] = (0,react.useState)(getWindowSize());

  (0,react.useEffect)(() => {
    const onWindowResize = debounce_default()(() => setSize(getWindowSize()), delayMs);
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  return size;
}

function ExploreViewContainer(props) {
  const dynamicPluginContext = (0,DynamicPlugins/* usePluginContext */.gp)();
  const dynamicPlugin = dynamicPluginContext.dynamicPlugins[props.vizType];
  const isDynamicPluginLoading = dynamicPlugin && dynamicPlugin.mounting;
  const wasDynamicPluginLoading = (0,usePrevious/* usePrevious */.D)(isDynamicPluginLoading);

  /** the state of controls in the previous render */
  const previousControls = (0,usePrevious/* usePrevious */.D)(props.controls);
  /** the state of controls last time a query was triggered */
  const [lastQueriedControls, setLastQueriedControls] = (0,react.useState)(
  props.controls);

  const windowSize = useWindowSize();

  const [showingModal, setShowingModal] = (0,react.useState)(false);
  const [isCollapsed, setIsCollapsed] = (0,react.useState)(false);

  const theme = (0,style/* useTheme */.Fg)();
  const width = `${windowSize.width}px`;
  const navHeight = props.standalone ? 0 : 90;
  const height = props.forcedHeight ?
  `${props.forcedHeight}px` :
  `${windowSize.height - navHeight}px`;

  const storageKeys = {
    controlsWidth: 'controls_width',
    dataSourceWidth: 'datasource_width' };


  const defaultSidebarsWidth = {
    controls_width: 320,
    datasource_width: 300 };


  const addHistory = (0,react.useCallback)(
  ({ isReplace = false, title } = {}) => {
    const payload = { ...props.form_data };
    const longUrl = (0,exploreUtils/* getExploreLongUrl */.vp)(
    props.form_data,
    props.standalone ? src_constants/* URL_PARAMS.standalone.name */.KD.standalone.name : null,
    false);

    try {
      if (isReplace) {
        window.history.replaceState(payload, title, longUrl);
      } else {
        window.history.pushState(payload, title, longUrl);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(
      'Failed at altering browser history',
      payload,
      title,
      longUrl);

    }
  },
  [props.form_data, props.standalone]);


  function handlePopstate() {
    const formData = window.history.state;
    if (formData && Object.keys(formData).length) {
      props.actions.setExploreControls(formData);
      props.actions.postChartFormData(
      formData,
      false,
      props.timeout,
      props.chart.id);

    }
  }
  const onQuery = (0,react.useCallback)(() => {
    props.actions.triggerQuery(true, props.chart.id);
    addHistory();
    setLastQueriedControls(props.controls);
  }, [props.controls, addHistory, props.actions, props.chart.id]);

  function handleKeydown(event) {
    const controlOrCommand = event.ctrlKey || event.metaKey;
    if (controlOrCommand) {
      const isEnter = event.key === 'Enter' || event.keyCode === 13;
      const isS = event.key === 's' || event.keyCode === 83;
      if (isEnter) {
        onQuery();
      } else if (isS) {
        if (props.slice) {
          props.actions.
          saveSlice(props.form_data, {
            action: 'overwrite',
            slice_id: props.slice.slice_id,
            slice_name: props.slice.slice_name,
            add_to_dash: 'noSave',
            goto_dash: false }).

          then(({ data }) => {
            window.location = data.slice.slice_url;
          });
        }
      }
    }
  }

  function onStop() {
    if (props.chart && props.chart.queryController) {
      props.chart.queryController.abort();
    }
  }

  function toggleModal() {
    setShowingModal(!showingModal);
  }

  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  // effect to run on mount
  (0,react.useEffect)(() => {
    props.actions.logEvent(LogUtils/* LOG_ACTIONS_MOUNT_EXPLORER */.$b);
    addHistory({ isReplace: true });
    window.addEventListener('popstate', handlePopstate);
    document.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('popstate', handlePopstate);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  (0,react.useEffect)(() => {
    if (wasDynamicPluginLoading && !isDynamicPluginLoading) {
      // reload the controls now that we actually have the control config
      props.actions.dynamicPluginControlsReady();
    }
  }, [isDynamicPluginLoading]);

  (0,react.useEffect)(() => {
    const hasError = Object.values(props.controls).some(
    (control) =>
    control.validationErrors && control.validationErrors.length > 0);

    if (!hasError) {
      props.actions.triggerQuery(true, props.chart.id);
    }
  }, []);

  const reRenderChart = () => {
    props.actions.updateQueryFormData(
    (0,controlUtils/* getFormDataFromControls */.Hu)(props.controls),
    props.chart.id);

    props.actions.renderTriggered(new Date().getTime(), props.chart.id);
    addHistory();
  };

  // effect to run when controls change
  (0,react.useEffect)(() => {
    if (previousControls) {
      if (
      props.controls.datasource && (
      previousControls.datasource == null ||
      props.controls.datasource.value !== previousControls.datasource.value))
      {
        // this should really be handled by actions
        (0,datasources/* fetchDatasourceMetadata */.QR)(props.form_data.datasource, true);
      }

      const changedControlKeys = Object.keys(props.controls).filter(
      (key) =>
      typeof previousControls[key] !== 'undefined' &&
      !(0,reduxUtils/* areObjectsEqual */.JB)(
      props.controls[key].value,
      previousControls[key].value));



      // this should also be handled by the actions that are actually changing the controls
      const hasDisplayControlChanged = changedControlKeys.some(
      (key) => props.controls[key].renderTrigger);

      if (hasDisplayControlChanged) {
        reRenderChart();
      }
    }
  }, [props.controls, props.ownState]);

  const chartIsStale = (0,react.useMemo)(() => {
    if (lastQueriedControls) {
      const changedControlKeys = Object.keys(props.controls).filter(
      (key) =>
      typeof lastQueriedControls[key] !== 'undefined' &&
      !(0,reduxUtils/* areObjectsEqual */.JB)(
      props.controls[key].value,
      lastQueriedControls[key].value));



      return changedControlKeys.some(
      (key) =>
      !props.controls[key].renderTrigger &&
      !props.controls[key].dontRefreshOnChange);

    }
    return false;
  }, [lastQueriedControls, props.controls]);

  (0,react.useEffect)(() => {
    if (props.ownState !== undefined) {
      onQuery();
      reRenderChart();
    }
  }, [props.ownState]);

  if (chartIsStale) {
    props.actions.logEvent(LogUtils/* LOG_ACTIONS_CHANGE_EXPLORE_CONTROLS */.Ep);
  }

  function renderErrorMessage() {
    // Returns an error message as a node if any errors are in the store
    const controlsWithErrors = Object.values(props.controls).filter(
    (control) =>
    control.validationErrors && control.validationErrors.length > 0);

    if (controlsWithErrors.length === 0) {
      return null;
    }

    const errorMessages = controlsWithErrors.map(
    (control) => control.validationErrors);

    const uniqueErrorMessages = [...new Set(errorMessages.flat())];

    const errors = uniqueErrorMessages.
    map((message) => {
      const matchingLabels = controlsWithErrors.
      filter((control) => {var _control$validationEr;return (_control$validationEr = control.validationErrors) == null ? void 0 : _control$validationEr.includes(message);}).
      map((control) => control.label);
      return [matchingLabels, message];
    }).
    map(([labels, message]) =>
    (0,emotion_react_browser_esm.jsx)("div", { key: message },
    labels.length > 1 ? (0,TranslatorSingleton.t)('Controls labeled ') : (0,TranslatorSingleton.t)('Control labeled '),
    (0,emotion_react_browser_esm.jsx)("strong", null, ` ${labels.join(', ')}`),
    (0,emotion_react_browser_esm.jsx)("span", null, ": ", message)));



    let errorMessage;
    if (errors.length > 0) {
      errorMessage = (0,emotion_react_browser_esm.jsx)("div", { style: { textAlign: 'left' } }, errors);
    }
    return errorMessage;
  }

  function renderChartContainer() {
    return (
      (0,emotion_react_browser_esm.jsx)(components_ExploreChartPanel, extends_default()({
        width: width,
        height: height },
      props, {
        errorMessage: renderErrorMessage(),
        refreshOverlayVisible: chartIsStale,
        addHistory: addHistory,
        onQuery: onQuery })));


  }

  function getSidebarWidths(key) {
    return (0,localStorageHelpers/* getFromLocalStorage */.f)(key, defaultSidebarsWidth[key]);
  }

  function setSidebarWidths(key, dimension) {
    const newDimension = Number(getSidebarWidths(key)) + dimension.width;
    (0,localStorageHelpers/* setInLocalStorage */._)(key, newDimension);
  }

  if (props.standalone) {
    return renderChartContainer();
  }

  return (
    (0,emotion_react_browser_esm.jsx)(ExploreViewContainer_Styles, { id: "explore-container", height: height },
    (0,emotion_react_browser_esm.jsx)(emotion_react_browser_esm.Global, {
      styles: emotion_react_browser_esm.css`
          .navbar {
            margin-bottom: 0;
          }
          body {
            height: 100vh;
            max-height: 100vh;
            overflow: hidden;
          }
          #app-menu,
          #app {
            flex: 1 1 auto;
          }
          #app {
            flex-basis: 100%;
            overflow: hidden;
            height: 100%;
          }
          #app-menu {
            flex-shrink: 0;
          }
        ` }),

    showingModal &&
    (0,emotion_react_browser_esm.jsx)(components_SaveModal, {
      onHide: toggleModal,
      actions: props.actions,
      form_data: props.form_data,
      sliceName: props.sliceName,
      dashboardId: props.dashboardId }),


    (0,emotion_react_browser_esm.jsx)(lib/* Resizable */.e, {
      onResizeStop: (evt, direction, ref, d) =>
      setSidebarWidths(storageKeys.dataSourceWidth, d),

      defaultSize: {
        width: getSidebarWidths(storageKeys.dataSourceWidth),
        height: '100%' },

      minWidth: defaultSidebarsWidth[storageKeys.dataSourceWidth],
      maxWidth: "33%",
      enable: { right: true },
      className:
      isCollapsed ? 'no-show' : 'explore-column data-source-selection' },


    (0,emotion_react_browser_esm.jsx)("div", { className: "title-container" },
    (0,emotion_react_browser_esm.jsx)("span", { className: "horizont al-text" }, (0,TranslatorSingleton.t)('Dataset')),
    (0,emotion_react_browser_esm.jsx)("span", {
      role: "button",
      tabIndex: 0,
      className: "action-button",
      onClick: toggleCollapse },

    (0,emotion_react_browser_esm.jsx)(Icons/* default.Expand */.Z.Expand, {
      className: "collapse-icon",
      iconColor: theme.colors.primary.base,
      iconSize: "l" }))),



    (0,emotion_react_browser_esm.jsx)(DataSourcePanel, {
      datasource: props.datasource,
      controls: props.controls,
      actions: props.actions })),


    isCollapsed ?
    (0,emotion_react_browser_esm.jsx)("div", {
      className: "sidebar",
      onClick: toggleCollapse,

      role: "button",
      tabIndex: 0 },

    (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: 0, className: "action-button" },
    (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: (0,TranslatorSingleton.t)('Open Datasource tab') },
    (0,emotion_react_browser_esm.jsx)(Icons/* default.Collapse */.Z.Collapse, {
      className: "collapse-icon",
      iconColor: theme.colors.primary.base,
      iconSize: "l" }))),



    (0,emotion_react_browser_esm.jsx)(Icons/* default.DatasetPhysical */.Z.DatasetPhysical, {
      css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ marginTop: theme.gridUnit * 2 },  true ? "" : 0,  true ? "" : 0),
      iconSize: "l",
      iconColor: theme.colors.grayscale.base })) :


    null,
    (0,emotion_react_browser_esm.jsx)(lib/* Resizable */.e, {
      onResizeStop: (evt, direction, ref, d) =>
      setSidebarWidths(storageKeys.controlsWidth, d),

      defaultSize: {
        width: getSidebarWidths(storageKeys.controlsWidth),
        height: '100%' },

      minWidth: defaultSidebarsWidth[storageKeys.controlsWidth],
      maxWidth: "33%",
      enable: { right: true },
      className: "col-sm-3 explore-column controls-column" },

    (0,emotion_react_browser_esm.jsx)(QueryAndSaveBtns, {
      canAdd: !!(props.can_add || props.can_overwrite),
      onQuery: onQuery,
      onSave: toggleModal,
      onStop: onStop,
      loading: props.chart.chartStatus === 'loading',
      chartIsStale: chartIsStale,
      errorMessage: renderErrorMessage(),
      datasourceType: props.datasource_type }),

    (0,emotion_react_browser_esm.jsx)(components_ControlPanelsContainer, {
      actions: props.actions,
      form_data: props.form_data,
      controls: props.controls,
      datasource_type: props.datasource_type,
      isDatasourceMetaLoading: props.isDatasourceMetaLoading })),


    (0,emotion_react_browser_esm.jsx)("div", {
      className: classnames_default()(
      'main-explore-content',
      isCollapsed ? 'col-sm-9' : 'col-sm-7') },


    renderChartContainer())));



}

ExploreViewContainer.propTypes = ExploreViewContainer_propTypes;

function ExploreViewContainer_mapStateToProps(state) {var _dataMask, _form_data$slice_id, _dataMask2, _form_data$slice_id2;
  const { explore, charts, impressionId, dataMask, reports } = state;
  const form_data = (0,controlUtils/* getFormDataFromControls */.Hu)(explore.controls);
  form_data.extra_form_data = (0,utils/* mergeExtraFormData */.on)(
  { ...form_data.extra_form_data },
  {
    ...((_dataMask = dataMask[(_form_data$slice_id = form_data.slice_id) != null ? _form_data$slice_id : 0]) == null ? void 0 : _dataMask.ownState) // 0 - unsaved chart
  });

  const chartKey = Object.keys(charts)[0];
  const chart = charts[chartKey];

  return {
    isDatasourceMetaLoading: explore.isDatasourceMetaLoading,
    datasource: explore.datasource,
    datasource_type: explore.datasource.type,
    datasourceId: explore.datasource_id,
    dashboardId: explore.form_data ? explore.form_data.dashboardId : undefined,
    controls: explore.controls,
    can_overwrite: !!explore.can_overwrite,
    can_add: !!explore.can_add,
    can_download: !!explore.can_download,
    column_formats: explore.datasource ?
    explore.datasource.column_formats :
    null,
    containerId: explore.slice ?
    `slice-container-${explore.slice.slice_id}` :
    'slice-container',
    isStarred: explore.isStarred,
    slice: explore.slice,
    sliceName: explore.sliceName,
    triggerRender: explore.triggerRender,
    form_data,
    table_name: form_data.datasource_name,
    vizType: form_data.viz_type,
    standalone: explore.standalone,
    forcedHeight: explore.forced_height,
    chart,
    timeout: explore.common.conf.SUPERSET_WEBSERVER_TIMEOUT,
    ownState: (_dataMask2 = dataMask[(_form_data$slice_id2 = form_data.slice_id) != null ? _form_data$slice_id2 : 0]) == null ? void 0 : _dataMask2.ownState, // 0 - unsaved chart
    impressionId,
    user: explore.user,
    reports };

}

function ExploreViewContainer_mapDispatchToProps(dispatch) {
  const actions = {
    ...exploreActions_namespaceObject,
    ...saveModalActions_namespaceObject,
    ...chartAction,
    ...logger_actions };

  return {
    actions: (0,redux/* bindActionCreators */.DE)(actions, dispatch) };

}

/* harmony default export */ const components_ExploreViewContainer = ((0,react_redux_es/* connect */.$j)(
ExploreViewContainer_mapStateToProps,
ExploreViewContainer_mapDispatchToProps)(
ExploreViewContainer));
;// CONCATENATED MODULE: ./src/explore/App.jsx
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















(0,setupApp/* default */.Z)();
(0,setupPlugins/* default */.Z)();

const App = ({ store }) =>
(0,emotion_react_browser_esm.jsx)(react_redux_es/* Provider */.zt, { store: store },
(0,emotion_react_browser_esm.jsx)(DndProvider/* DndProvider */.W, { backend: esm/* HTML5Backend */.PD },
(0,emotion_react_browser_esm.jsx)(emotion_element_99289b21_browser_esm.a, { theme: preamble/* theme */.r },
(0,emotion_react_browser_esm.jsx)(DynamicPlugins/* DynamicPluginProvider */.EM, null,
(0,emotion_react_browser_esm.jsx)(components_ExploreViewContainer, null),
(0,emotion_react_browser_esm.jsx)(ToastContainer/* default */.Z, null)))));






/* harmony default export */ const explore_App = (App);
;// CONCATENATED MODULE: ./src/explore/index.jsx
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











const exploreViewContainer = document.getElementById('app');
const bootstrapData = JSON.parse(
exploreViewContainer.getAttribute('data-bootstrap'));

(0,featureFlags/* initFeatureFlags */.fG)(bootstrapData.common.feature_flags);
const initState = getInitialState(bootstrapData);
const explore_store = (0,redux/* createStore */.MT)(
explore_reducers,
initState,
(0,redux/* compose */.qC)((0,redux/* applyMiddleware */.md)(es/* default */.Z, loggerMiddleware/* default */.Z), (0,reduxUtils/* initEnhancer */.hU)(false)));


react_dom.render((0,emotion_react_browser_esm.jsx)(explore_App, { store: explore_store }), document.getElementById('app'));

/***/ }),

/***/ 91296:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ }),

/***/ 93096:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;


/***/ }),

/***/ 90233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lu": () => (/* binding */ matchSorter),
/* harmony export */   "tL": () => (/* binding */ rankings)
/* harmony export */ });
/* unused harmony export defaultBaseSortFn */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87462);
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76826);
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remove_accents__WEBPACK_IMPORTED_MODULE_0__);



var rankings = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
matchSorter.rankings = rankings;

var defaultBaseSortFn = function defaultBaseSortFn(a, b) {
  return String(a.rankedValue).localeCompare(String(b.rankedValue));
};
/**
 * Takes an array of items and a value and returns a new array with the items that match the given value
 * @param {Array} items - the items to sort
 * @param {String} value - the value to use for ranking
 * @param {Object} options - Some options to configure the sorter
 * @return {Array} - the new sorted array
 */


function matchSorter(items, value, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      keys = _options.keys,
      _options$threshold = _options.threshold,
      threshold = _options$threshold === void 0 ? rankings.MATCHES : _options$threshold,
      _options$baseSort = _options.baseSort,
      baseSort = _options$baseSort === void 0 ? defaultBaseSortFn : _options$baseSort,
      _options$sorter = _options.sorter,
      sorter = _options$sorter === void 0 ? function (matchedItems) {
    return matchedItems.sort(function (a, b) {
      return sortRankedValues(a, b, baseSort);
    });
  } : _options$sorter;
  var matchedItems = items.reduce(reduceItemsToRanked, []);
  return sorter(matchedItems).map(function (_ref) {
    var item = _ref.item;
    return item;
  });

  function reduceItemsToRanked(matches, item, index) {
    var rankingInfo = getHighestRanking(item, keys, value, options);
    var rank = rankingInfo.rank,
        _rankingInfo$keyThres = rankingInfo.keyThreshold,
        keyThreshold = _rankingInfo$keyThres === void 0 ? threshold : _rankingInfo$keyThres;

    if (rank >= keyThreshold) {
      matches.push((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, rankingInfo, {
        item: item,
        index: index
      }));
    }

    return matches;
  }
}
/**
 * Gets the highest ranking for value for the given item based on its values for the given keys
 * @param {*} item - the item to rank
 * @param {Array} keys - the keys to get values from the item for the ranking
 * @param {String} value - the value to rank against
 * @param {Object} options - options to control the ranking
 * @return {{rank: Number, keyIndex: Number, keyThreshold: Number}} - the highest ranking
 */


function getHighestRanking(item, keys, value, options) {
  if (!keys) {
    // if keys is not specified, then we assume the item given is ready to be matched
    var stringItem = item;
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: stringItem,
      rank: getMatchRanking(stringItem, value, options),
      keyIndex: -1,
      keyThreshold: options.threshold
    };
  }

  var valuesToRank = getAllValuesToRank(item, keys);
  return valuesToRank.reduce(function (_ref2, _ref3, i) {
    var rank = _ref2.rank,
        rankedValue = _ref2.rankedValue,
        keyIndex = _ref2.keyIndex,
        keyThreshold = _ref2.keyThreshold;
    var itemValue = _ref3.itemValue,
        attributes = _ref3.attributes;
    var newRank = getMatchRanking(itemValue, value, options);
    var newRankedValue = rankedValue;
    var minRanking = attributes.minRanking,
        maxRanking = attributes.maxRanking,
        threshold = attributes.threshold;

    if (newRank < minRanking && newRank >= rankings.MATCHES) {
      newRank = minRanking;
    } else if (newRank > maxRanking) {
      newRank = maxRanking;
    }

    if (newRank > rank) {
      rank = newRank;
      keyIndex = i;
      keyThreshold = threshold;
      newRankedValue = itemValue;
    }

    return {
      rankedValue: newRankedValue,
      rank: rank,
      keyIndex: keyIndex,
      keyThreshold: keyThreshold
    };
  }, {
    rankedValue: item,
    rank: rankings.NO_MATCH,
    keyIndex: -1,
    keyThreshold: options.threshold
  });
}
/**
 * Gives a rankings score based on how well the two strings match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @param {Object} options - options for the match (like keepDiacritics for comparison)
 * @returns {Number} the ranking for how well stringToRank matches testString
 */


function getMatchRanking(testString, stringToRank, options) {
  testString = prepareValueForComparison(testString, options);
  stringToRank = prepareValueForComparison(stringToRank, options); // too long

  if (stringToRank.length > testString.length) {
    return rankings.NO_MATCH;
  } // case sensitive equals


  if (testString === stringToRank) {
    return rankings.CASE_SENSITIVE_EQUAL;
  } // Lower casing before further comparison


  testString = testString.toLowerCase();
  stringToRank = stringToRank.toLowerCase(); // case insensitive equals

  if (testString === stringToRank) {
    return rankings.EQUAL;
  } // starts with


  if (testString.startsWith(stringToRank)) {
    return rankings.STARTS_WITH;
  } // word starts with


  if (testString.includes(" " + stringToRank)) {
    return rankings.WORD_STARTS_WITH;
  } // contains


  if (testString.includes(stringToRank)) {
    return rankings.CONTAINS;
  } else if (stringToRank.length === 1) {
    // If the only character in the given stringToRank
    //   isn't even contained in the testString, then
    //   it's definitely not a match.
    return rankings.NO_MATCH;
  } // acronym


  if (getAcronym(testString).includes(stringToRank)) {
    return rankings.ACRONYM;
  } // will return a number between rankings.MATCHES and
  // rankings.MATCHES + 1 depending  on how close of a match it is.


  return getClosenessRanking(testString, stringToRank);
}
/**
 * Generates an acronym for a string.
 *
 * @param {String} string the string for which to produce the acronym
 * @returns {String} the acronym
 */


function getAcronym(string) {
  var acronym = '';
  var wordsInString = string.split(' ');
  wordsInString.forEach(function (wordInString) {
    var splitByHyphenWords = wordInString.split('-');
    splitByHyphenWords.forEach(function (splitByHyphenWord) {
      acronym += splitByHyphenWord.substr(0, 1);
    });
  });
  return acronym;
}
/**
 * Returns a score based on how spread apart the
 * characters from the stringToRank are within the testString.
 * A number close to rankings.MATCHES represents a loose match. A number close
 * to rankings.MATCHES + 1 represents a tighter match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @returns {Number} the number between rankings.MATCHES and
 * rankings.MATCHES + 1 for how well stringToRank matches testString
 */


function getClosenessRanking(testString, stringToRank) {
  var matchingInOrderCharCount = 0;
  var charNumber = 0;

  function findMatchingCharacter(matchChar, string, index) {
    for (var j = index, J = string.length; j < J; j++) {
      var stringChar = string[j];

      if (stringChar === matchChar) {
        matchingInOrderCharCount += 1;
        return j + 1;
      }
    }

    return -1;
  }

  function getRanking(spread) {
    var spreadPercentage = 1 / spread;
    var inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
    var ranking = rankings.MATCHES + inOrderPercentage * spreadPercentage;
    return ranking;
  }

  var firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);

  if (firstIndex < 0) {
    return rankings.NO_MATCH;
  }

  charNumber = firstIndex;

  for (var i = 1, I = stringToRank.length; i < I; i++) {
    var matchChar = stringToRank[i];
    charNumber = findMatchingCharacter(matchChar, testString, charNumber);
    var found = charNumber > -1;

    if (!found) {
      return rankings.NO_MATCH;
    }
  }

  var spread = charNumber - firstIndex;
  return getRanking(spread);
}
/**
 * Sorts items that have a rank, index, and keyIndex
 * @param {Object} a - the first item to sort
 * @param {Object} b - the second item to sort
 * @return {Number} -1 if a should come first, 1 if b should come first, 0 if equal
 */


function sortRankedValues(a, b, baseSort) {
  var aFirst = -1;
  var bFirst = 1;
  var aRank = a.rank,
      aKeyIndex = a.keyIndex;
  var bRank = b.rank,
      bKeyIndex = b.keyIndex;
  var same = aRank === bRank;

  if (same) {
    if (aKeyIndex === bKeyIndex) {
      // use the base sort function as a tie-breaker
      return baseSort(a, b);
    } else {
      return aKeyIndex < bKeyIndex ? aFirst : bFirst;
    }
  } else {
    return aRank > bRank ? aFirst : bFirst;
  }
}
/**
 * Prepares value for comparison by stringifying it, removing diacritics (if specified)
 * @param {String} value - the value to clean
 * @param {Object} options - {keepDiacritics: whether to remove diacritics}
 * @return {String} the prepared value
 */


function prepareValueForComparison(value, _ref4) {
  var keepDiacritics = _ref4.keepDiacritics;
  // value might not actually be a string at this point (we don't get to choose)
  // so part of preparing the value for comparison is ensure that it is a string
  value = "" + value; // toString

  if (!keepDiacritics) {
    value = remove_accents__WEBPACK_IMPORTED_MODULE_0___default()(value);
  }

  return value;
}
/**
 * Gets value for key in item at arbitrarily nested keypath
 * @param {Object} item - the item
 * @param {Object|Function} key - the potentially nested keypath or property callback
 * @return {Array} - an array containing the value(s) at the nested keypath
 */


function getItemValues(item, key) {
  if (typeof key === 'object') {
    key = key.key;
  }

  var value;

  if (typeof key === 'function') {
    value = key(item);
  } else if (item == null) {
    value = null;
  } else if (Object.hasOwnProperty.call(item, key)) {
    value = item[key];
  } else if (key.includes('.')) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return getNestedValues(key, item);
  } else {
    value = null;
  } // because `value` can also be undefined


  if (value == null) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [String(value)];
}
/**
 * Given path: "foo.bar.baz"
 * And item: {foo: {bar: {baz: 'buzz'}}}
 *   -> 'buzz'
 * @param path a dot-separated set of keys
 * @param item the item to get the value from
 */


function getNestedValues(path, item) {
  var keys = path.split('.');
  var values = [item];

  for (var i = 0, I = keys.length; i < I; i++) {
    var nestedKey = keys[i];
    var nestedValues = [];

    for (var j = 0, J = values.length; j < J; j++) {
      var nestedItem = values[j];
      if (nestedItem == null) continue;

      if (Object.hasOwnProperty.call(nestedItem, nestedKey)) {
        var nestedValue = nestedItem[nestedKey];

        if (nestedValue != null) {
          nestedValues.push(nestedValue);
        }
      } else if (nestedKey === '*') {
        // ensure that values is an array
        nestedValues = nestedValues.concat(nestedItem);
      }
    }

    values = nestedValues;
  }

  if (Array.isArray(values[0])) {
    // keep allowing the implicit wildcard for an array of strings at the end of
    // the path; don't use `.flat()` because that's not available in node.js v10
    var result = [];
    return result.concat.apply(result, values);
  } // Based on our logic it should be an array of strings by now...
  // assuming the user's path terminated in strings


  return values;
}
/**
 * Gets all the values for the given keys in the given item and returns an array of those values
 * @param item - the item from which the values will be retrieved
 * @param keys - the keys to use to retrieve the values
 * @return objects with {itemValue, attributes}
 */


function getAllValuesToRank(item, keys) {
  var allValues = [];

  for (var j = 0, J = keys.length; j < J; j++) {
    var key = keys[j];
    var attributes = getKeyAttributes(key);
    var itemValues = getItemValues(item, key);

    for (var i = 0, I = itemValues.length; i < I; i++) {
      allValues.push({
        itemValue: itemValues[i],
        attributes: attributes
      });
    }
  }

  return allValues;
}

var defaultKeyAttributes = {
  maxRanking: Infinity,
  minRanking: -Infinity
};
/**
 * Gets all the attributes for the given key
 * @param key - the key from which the attributes will be retrieved
 * @return object containing the key's attributes
 */

function getKeyAttributes(key) {
  if (typeof key === 'string') {
    return defaultKeyAttributes;
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, defaultKeyAttributes, key);
}
/*
eslint
  no-continue: "off",
*/




/***/ }),

/***/ 76826:
/***/ ((module) => {

var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
};

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

var removeAccents = function(string) {	
	return string.replace(allAccents, function(match) {
		return characterMap[match];
	});
};

var hasAccents = function(string) {
	return !!string.match(firstAccent);
};

module.exports = removeAccents;
module.exports.has = hasAccents;
module.exports.remove = removeAccents;


/***/ }),

/***/ 29432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "hb": () => (/* reexport */ useChartOwnerNames),
  "QU": () => (/* reexport */ useDashboard),
  "Es": () => (/* reexport */ useDashboardCharts),
  "JL": () => (/* reexport */ useDashboardDatasets)
});

// UNUSED EXPORTS: useApiResourceFullBody, useApiV1Resource, useTransformedResource

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/api/v1/makeApi.js + 1 modules
var makeApi = __webpack_require__(85639);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/common/hooks/apiResources/apiResources.ts
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


var ResourceStatus;
(function (ResourceStatus) {
  ResourceStatus["LOADING"] = "loading";
  ResourceStatus["COMPLETE"] = "complete";
  ResourceStatus["ERROR"] = "error";
})(ResourceStatus || (ResourceStatus = {}));
const initialState = {
  status: ResourceStatus.LOADING,
  result: null,
  error: null };

/**
 * A general-purpose hook to fetch the response from an endpoint.
 * Returns the full response body from the API, including metadata.
 *
 * Note: You likely want {useApiV1Resource} instead of this!
 *
 * TODO Store the state in redux or something, share state between hook instances.
 *
 * TODO Include a function in the returned resource object to refresh the data.
 *
 * A core design decision here is composition > configuration,
 * and every hook should only have one job.
 * Please address new needs with new hooks if possible,
 * rather than adding config options to this hook.
 *
 * @param endpoint The url where the resource is located.
 */
function useApiResourceFullBody(endpoint) {
  const [resource, setResource] = (0,react.useState)(initialState);
  const cancelRef = (0,react.useRef)(() => {});
  (0,react.useEffect)(() => {
    // If refresh is implemented, this will need to change.
    // The previous values should stay during refresh.
    setResource(initialState);
    // when this effect runs, the endpoint has changed.
    // cancel any current calls so that state doesn't get messed up.
    cancelRef.current();
    let cancelled = false;
    cancelRef.current = () => {
      cancelled = true;
    };
    const fetchResource = (0,makeApi/* default */.Z)({
      method: 'GET',
      endpoint });

    fetchResource({}).
    then((result) => {
      if (!cancelled) {
        setResource({
          status: ResourceStatus.COMPLETE,
          result,
          error: null });

      }
    }).
    catch((error) => {
      if (!cancelled) {
        setResource({
          status: ResourceStatus.ERROR,
          result: null,
          error });

      }
    });
    // Cancel the request when the component un-mounts
    return () => {
      cancelled = true;
    };
  }, [endpoint]);
  return resource;
}
/**
 * For when you want to transform the result of an api resource hook before using it.
 *
 * @param resource the Resource object returned from useApiV1Resource
 * @param transformFn a callback that transforms the result object into the shape you want.
 * Make sure to use a persistent function for this so it doesn't constantly recalculate!
 */
function useTransformedResource(resource, transformFn) {
  return (0,react.useMemo)(() => {
    if (resource.status !== ResourceStatus.COMPLETE) {
      // While incomplete, there is no result - no need to transform.
      return resource;
    }
    return {
      ...resource,
      result: transformFn(resource.result) };

  }, [resource, transformFn]);
}
// returns the "result" field from a fetched API v1 endpoint
const extractInnerResult = (responseBody) => responseBody.result;
/**
 * A general-purpose hook to fetch a Superset resource from a v1 API endpoint.
 * Handles request lifecycle and async logic so you don't have to.
 *
 * This returns the data under the "result" field in the API response body.
 * If you need the full response body, use {useFullApiResource} instead.
 *
 * @param endpoint The url where the resource is located.
 */
function useApiV1Resource(endpoint) {
  return useTransformedResource(useApiResourceFullBody(endpoint), extractInnerResult);
}
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
;// CONCATENATED MODULE: ./src/common/hooks/apiResources/charts.ts
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


function extractOwnerNames({ owners }) {
  if (!owners)
  return null;
  return owners.map((owner) => `${owner.first_name} ${owner.last_name}`);
}
const ownerNamesQuery = rison_default().encode({
  columns: ['owners.first_name', 'owners.last_name'],
  keys: ['none'] });

function useChartOwnerNames(chartId) {
  return useTransformedResource(useApiV1Resource(`/api/v1/chart/${chartId}?q=${ownerNamesQuery}`), extractOwnerNames);
}
;// CONCATENATED MODULE: ./src/common/hooks/apiResources/dashboards.ts
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

const useDashboard = (idOrSlug) => useTransformedResource(useApiV1Resource(`/api/v1/dashboard/${idOrSlug}`), (dashboard) => ({
  ...dashboard,
  metadata: dashboard.json_metadata && JSON.parse(dashboard.json_metadata),
  position_data: dashboard.position_json && JSON.parse(dashboard.position_json) }));

// gets the chart definitions for a dashboard
const useDashboardCharts = (idOrSlug) => useApiV1Resource(`/api/v1/dashboard/${idOrSlug}/charts`);
// gets the datasets for a dashboard
// important: this endpoint only returns the fields in the dataset
// that are necessary for rendering the given dashboard
const useDashboardDatasets = (idOrSlug) => useApiV1Resource(`/api/v1/dashboard/${idOrSlug}/datasets`);
;// CONCATENATED MODULE: ./src/common/hooks/apiResources/index.ts
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

// A central catalog of API Resource hooks.
// Add new API hooks here, organized under
// different files for different resource types.



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 2441) return "2441.4e58a1cf18d07546e7ed.entry.js";
/******/ 			// return url for filenames based on template
/******/ 			return "" + {"3":"801697eb5ab3352c42e5","57":"2cf9bc4ac970720748c0","71":"436bf2271513b4c7a32c","112":"be71e978bbc620ffc544","128":"09f443525fca060387ee","158":"df7539aa250576fe4cf3","177":"f6ae69232927d7dd1a30","183":"911ddd624433d7f0867f","215":"7254cd744b1245396db5","310":"1563948d372fecada150","312":"3aa1656a2b7ab28d62bb","326":"cef86dd8ed7e0b62f4b4","336":"d6bbf09be905d11fa889","347":"b35ff2a8a9d70b9fd5de","363":"35405942d4d50d2dd001","423":"557c77172a88145a2272","440":"ff0aad72b037cc9defda","547":"4dc809f2159ae94ed8f7","597":"ec532018b9e38cc071a5","600":"5f68b3d6f05a562607bc","666":"63eb0d1379f1cf11e869","823":"858db93d79a30d077534","826":"3ac1e6742edc6811953f","992":"d36caa7e430c7b303adb","999":"ed18546530e1fb3fdb9c","1066":"ca1490ad3425672ef184","1075":"d25c694581c3e17f97cb","1095":"3680bcba10025d4cf3eb","1174":"bd6d2c538bb78fcea2f1","1185":"541be5b4ad9b7f276896","1193":"94f2747dbe0f34df1a7a","1243":"f76776ecfb675107b048","1256":"b16af0091358c002effa","1258":"31efb095399ce23d6823","1263":"e1ebf092ea50eba7a149","1293":"89308437860fa7983857","1351":"4c3819c3165f4d3cb3e5","1391":"30c621e164b402fa5061","1398":"1e4e92a480dc5b27ff7e","1493":"fb655e11f755bbed5b11","1568":"aee4a0774888c608f63d","1573":"f0c7235815aa435f15ed","1605":"281404507f98467fd7d8","1899":"92b929932dfe7811cbdc","1921":"1a13273a93f7b61afaa9","1948":"ff270247f7ad048b37fc","2079":"f78da0b31a1f64da12a4","2085":"cb8b4569805b5fe072f8","2089":"887107b248bbaa4c0ed9","2105":"fe2fcb119f108e338ac6","2112":"a47ead904707252ecde0","2264":"3ca36ce2ac9c43b9b179","2267":"4dd9b2ded1ac4435aa8d","2306":"cfd5f3b8026da89441df","2403":"8634710eb87615cfc6bf","2439":"96da625d4cbc67a0064f","2646":"add1d27a3b3d4047480a","2698":"be06d926a61b2ff8096c","2713":"05813f52004aefacbcbe","2797":"b8837234f74badcbcd64","2862":"c3663bc60ac90c9908a0","2983":"27d10999d0c2bca2cf50","3037":"5c194e9031dd389a9309","3118":"65d2c72c220eb59c9e1a","3141":"23ce23648579690f9400","3208":"2a1954fa10b8dcb83d71","3240":"2a9272f662cb2de40c76","3265":"474d7d7c385d10a60693","3325":"a90266e90bac97af3781","3544":"3406c53cc0e4f33bea86","3558":"eb461a449988ae99c3c4","3567":"5825dfd50d3a6a9b1537","3606":"0adb7d4dc6ba6bad8d1c","3609":"1b8c59ecc4d58f21e636","3720":"2e567a88b8dd15938665","3749":"521d48dd5d1067665be3","3776":"de42ae55420f8a80a0d6","3871":"76ef1aed5605fc1068fb","3955":"a0676b5a618b6b82bf83","3985":"c54a8b32d2af0d76b8a2","4018":"f632572beb40c0f0c4d9","4022":"b93313322f39cedc352d","4139":"546708c7300dff5cd155","4192":"30b753df2dcb91b99aec","4214":"5e3776bf7c1f1be8e5ea","4266":"d7fa57e367a6eee483b8","4273":"5945dbd1e7088899e37e","4295":"97a6a288c6f984c81a39","4319":"e2e186f2a0bb6f2700a5","4441":"6b94cf2e542a3093d95f","4458":"e3c0c688a5be0b5da06e","4473":"53278bbc4be882db0f5c","4474":"b3fc848bf220efa9b835","4486":"c6350c997873b7ae77c3","4572":"406d9e4bca6fe5197002","4579":"ac82e0f4ac2bef7b5629","4625":"c9320cb8d2eee5ebaf4d","4662":"c9085feaf1017c91b23c","4667":"46d958dc7f86f6292bb4","4732":"a80344b7469a48cb86c7","4757":"022553145064f1ee2924","4758":"ec45f143d912ef8b9d0c","4794":"f98ef85464f11e5c88a7","4797":"45c4548eeeb8e2e5cc9e","4810":"188774d3ee3c04c9e188","4817":"f5e26b0709f74b69fa03","4832":"206aca9d039eebc52eed","4851":"6686fcc47a6c733deb22","4972":"c4f807af54c5a8aab56e","4980":"6f81cf5d8fbe428ac33f","4981":"437abb94798b28dd8787","5019":"4c8bc6d7aca72fd3d54a","5042":"0aafa94c0bfcbac9f627","5094":"07145907e8edae6fc15e","5181":"3eef88a45c9bcc76588f","5201":"80aa074f906eee87b0e6","5215":"eeaacec0d45a1417c41b","5224":"606b538b7d64335a7781","5226":"7bdd4c10a7916d067525","5249":"fd5ab9bdd08f50f27ff4","5278":"5f8aa9f6cc9941f7cd09","5281":"a4b56aaf274795e76afa","5322":"f3dc5ba9b3f248da30c9","5330":"bad80526aedb7bc5338b","5335":"a91e9ee354fd2b99a954","5350":"edd537b2eaa4adec82a6","5359":"5800205e282e553ee535","5367":"6b1af8966839be51ec26","5507":"3af7db839801b0db65e4","5580":"a94f479ae8bf4d3ac0ad","5592":"b1e9861fc747cea7a61e","5641":"19537bf0b67de2dfd994","5660":"ad0fac23a71d36e4a65d","5707":"429d9ebd98fff39e2608","5771":"a782fb996abf91074d7b","5777":"3f7c6ffbb107b72a71a2","5802":"4457a574df478455a15a","5816":"4d69301b12c619190f1d","5832":"f1d3435d5fe5517d1e0e","5838":"b957c2dc2db93662bc25","5859":"dd62c64a89295e6e9dc6","5962":"4af600b89ed207c88a75","5965":"5b15d49c692694b0d6b3","5972":"0da6cf793e3d1cc69358","5998":"d142a4b602af8829450c","6060":"04414903972982fec99b","6061":"8bffaef3cba5ee3078f0","6126":"4024bb2150eb5d99ed9f","6150":"ed773f8f5c293cb4c13b","6167":"8a7e1d8900669c9e319e","6207":"d46595d332f953beb63a","6254":"c26e672ffd1d2d6ffe82","6259":"8d8595114515a041f325","6303":"d4d6291f5d42a7f1652f","6371":"66ea24b6bd0ebafddd11","6420":"77ac4862a9a0de480eaa","6439":"b7bea1dad0b6731d8f08","6447":"2160abb016acabd01b58","6507":"ff107afb952cd5cd032a","6668":"82739982a9d0087df578","6682":"92912f99d5ec5e63356f","6740":"26b0de51671d1946cf5e","6758":"7650f3fae2f4e8e07dd1","6819":"2d98b68d6ff55d61f8d6","6883":"8ff31cb25f4cbcf65f8e","6977":"ddaf38e3b453b836afd2","6981":"9dcf9659f6e80537876c","7040":"f23d3eae2fac471d5482","7068":"d0bab68bf1b8fe890cb0","7183":"4ee4d78d1c0b53004df4","7219":"faf008b430dc64f745c8","7249":"05401ea8ee3aa4893e10","7405":"866ef25cb2164e793e19","7460":"830c4edc179abe920136","7584":"910bd8b8c2993335fa44","7610":"c4bd3575194e27e4dca4","7654":"29f53849422f19ebe336","7716":"e36d35dc706ec3bf3a29","7760":"4ef3263971e6365c79bf","7803":"2624b6fbf922d341ea04","7828":"97ca3ca635b9948cd3fd","7832":"4d9d2dbac38cc2b0fb90","7850":"ead55581e4ca5be56dc6","7893":"67599d461d8af3da59cc","7922":"c84d95f1054e63d7ffeb","8130":"226edc0441cd972bab15","8230":"936dd1f8ca7bd24752e2","8312":"dac04f73013472377c36","8349":"05f914d2483e65c1b585","8398":"d8f5829d0db6a5a634a6","8425":"52abf98953e003bb0152","8463":"48256f92f964b8bf79a4","8464":"1f3e4c0a11dcd1562253","8616":"600b0291f89941e46ffa","8682":"79102f702737cf867d5f","8695":"c96f012c5780a51d8755","8750":"5c1ccb4ce4d1981ec23a","8883":"68eff701dbdd3308d52d","8903":"f6983d28c5358bb2d887","8924":"ab122e4614324e0c9fe6","8970":"6f72f94b5f107daae7bc","9013":"f709bdaee2140bc2a4c5","9034":"ec820efcb34a9691d251","9052":"b0285bb9d71534ce20b5","9109":"7e727e9ccc7def5a23a2","9131":"a4f1f4d9a0b03d1fdde3","9242":"ef10aede0f2a99f29aa6","9305":"60fe40ee626eb2ec1b5f","9325":"90c33d84118b47709bf1","9393":"654e00a37f7e2cf29ed8","9483":"c8dd378adf1da2c32289","9510":"d0629cd97e7154454216","9558":"fe373e383af8c140dd79","9574":"05b040ad8dbbe4abaf1b","9767":"9b54247b72d042373f5e","9794":"2031cc537c157403943d","9811":"30707e6da4b523886fde","9857":"9ad7ca8fa3245e97322e","9885":"49de7a515c9384988b80","9893":"98379a9ecb5dea20e1cb","9938":"8d2986cd19fe8eb710be"}[chunkId] + ".chunk.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 9782) return "explore.25a59f75c151dc680b6c.entry.css";
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"3":"801697eb5ab3352c42e5","128":"09f443525fca060387ee","423":"557c77172a88145a2272","823":"858db93d79a30d077534","1066":"ca1490ad3425672ef184","1193":"94f2747dbe0f34df1a7a","1243":"f76776ecfb675107b048","1391":"30c621e164b402fa5061","1921":"1a13273a93f7b61afaa9","2862":"c3663bc60ac90c9908a0","3609":"1b8c59ecc4d58f21e636","3776":"de42ae55420f8a80a0d6","4192":"30b753df2dcb91b99aec","4473":"53278bbc4be882db0f5c","5278":"5f8aa9f6cc9941f7cd09","5322":"f3dc5ba9b3f248da30c9","5965":"5b15d49c692694b0d6b3","6259":"8d8595114515a041f325","7040":"f23d3eae2fac471d5482","7219":"faf008b430dc64f745c8","7828":"97ca3ca635b9948cd3fd","7893":"67599d461d8af3da59cc","8903":"f6983d28c5358bb2d887","9574":"05b040ad8dbbe4abaf1b","9885":"49de7a515c9384988b80","9893":"98379a9ecb5dea20e1cb"}[chunkId] + ".chunk.css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "superset:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/static/assets/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			9782: 0,
/******/ 			3: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"3":1,"128":1,"423":1,"823":1,"1066":1,"1193":1,"1243":1,"1391":1,"1921":1,"2862":1,"3609":1,"3776":1,"4192":1,"4473":1,"5278":1,"5322":1,"5965":1,"6259":1,"7040":1,"7219":1,"7828":1,"7893":1,"8903":1,"9574":1,"9885":1,"9893":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			9782: 0,
/******/ 			3: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(3 != chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, [1216,504,7550,4772,7211,5110,7017,4998,9968,8483,8135,7591,4654,1844,7341,741,876,995,9602,8680,323,3401,6962,4052,7843,2825,621,3375,4174,7173,5618,3236], () => (__webpack_require__(26009)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [1216,504,7550,4772,7211,5110,7017,4998,9968,8483,8135,7591,4654,1844,7341,741,876,995,9602,8680,323,3401,6962,4052,7843,2825,621,3375,4174,7173,5618,3236], () => (__webpack_require__(47074)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;