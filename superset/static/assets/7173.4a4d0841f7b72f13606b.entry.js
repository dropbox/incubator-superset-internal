"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[7173],{

/***/ 22428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHART_UPDATE_STARTED": () => (/* binding */ CHART_UPDATE_STARTED),
/* harmony export */   "chartUpdateStarted": () => (/* binding */ chartUpdateStarted),
/* harmony export */   "CHART_UPDATE_SUCCEEDED": () => (/* binding */ CHART_UPDATE_SUCCEEDED),
/* harmony export */   "chartUpdateSucceeded": () => (/* binding */ chartUpdateSucceeded),
/* harmony export */   "CHART_UPDATE_STOPPED": () => (/* binding */ CHART_UPDATE_STOPPED),
/* harmony export */   "chartUpdateStopped": () => (/* binding */ chartUpdateStopped),
/* harmony export */   "CHART_UPDATE_FAILED": () => (/* binding */ CHART_UPDATE_FAILED),
/* harmony export */   "chartUpdateFailed": () => (/* binding */ chartUpdateFailed),
/* harmony export */   "CHART_RENDERING_FAILED": () => (/* binding */ CHART_RENDERING_FAILED),
/* harmony export */   "chartRenderingFailed": () => (/* binding */ chartRenderingFailed),
/* harmony export */   "CHART_RENDERING_SUCCEEDED": () => (/* binding */ CHART_RENDERING_SUCCEEDED),
/* harmony export */   "chartRenderingSucceeded": () => (/* binding */ chartRenderingSucceeded),
/* harmony export */   "REMOVE_CHART": () => (/* binding */ REMOVE_CHART),
/* harmony export */   "removeChart": () => (/* binding */ removeChart),
/* harmony export */   "ANNOTATION_QUERY_SUCCESS": () => (/* binding */ ANNOTATION_QUERY_SUCCESS),
/* harmony export */   "annotationQuerySuccess": () => (/* binding */ annotationQuerySuccess),
/* harmony export */   "ANNOTATION_QUERY_STARTED": () => (/* binding */ ANNOTATION_QUERY_STARTED),
/* harmony export */   "annotationQueryStarted": () => (/* binding */ annotationQueryStarted),
/* harmony export */   "ANNOTATION_QUERY_FAILED": () => (/* binding */ ANNOTATION_QUERY_FAILED),
/* harmony export */   "annotationQueryFailed": () => (/* binding */ annotationQueryFailed),
/* harmony export */   "DYNAMIC_PLUGIN_CONTROLS_READY": () => (/* binding */ DYNAMIC_PLUGIN_CONTROLS_READY),
/* harmony export */   "dynamicPluginControlsReady": () => (/* binding */ dynamicPluginControlsReady),
/* harmony export */   "getChartDataRequest": () => (/* binding */ getChartDataRequest),
/* harmony export */   "runAnnotationQuery": () => (/* binding */ runAnnotationQuery),
/* harmony export */   "TRIGGER_QUERY": () => (/* binding */ TRIGGER_QUERY),
/* harmony export */   "triggerQuery": () => (/* binding */ triggerQuery),
/* harmony export */   "RENDER_TRIGGERED": () => (/* binding */ RENDER_TRIGGERED),
/* harmony export */   "renderTriggered": () => (/* binding */ renderTriggered),
/* harmony export */   "UPDATE_QUERY_FORM_DATA": () => (/* binding */ UPDATE_QUERY_FORM_DATA),
/* harmony export */   "updateQueryFormData": () => (/* binding */ updateQueryFormData),
/* harmony export */   "UPDATE_CHART_ID": () => (/* binding */ UPDATE_CHART_ID),
/* harmony export */   "updateChartId": () => (/* binding */ updateChartId),
/* harmony export */   "ADD_CHART": () => (/* binding */ ADD_CHART),
/* harmony export */   "addChart": () => (/* binding */ addChart),
/* harmony export */   "exploreJSON": () => (/* binding */ exploreJSON),
/* harmony export */   "GET_SAVED_CHART": () => (/* binding */ GET_SAVED_CHART),
/* harmony export */   "getSavedChart": () => (/* binding */ getSavedChart),
/* harmony export */   "POST_CHART_FORM_DATA": () => (/* binding */ POST_CHART_FORM_DATA),
/* harmony export */   "postChartFormData": () => (/* binding */ postChartFormData),
/* harmony export */   "redirectSQLLab": () => (/* binding */ redirectSQLLab),
/* harmony export */   "refreshChart": () => (/* binding */ refreshChart)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21173);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60650);
/* harmony import */ var src_explore_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35854);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91877);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46415);
/* harmony import */ var src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12515);
/* harmony import */ var src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10945);
/* harmony import */ var src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72570);
/* harmony import */ var src_logger_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97381);
/* harmony import */ var src_logger_LogUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3741);
/* harmony import */ var src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98286);
/* harmony import */ var src_utils_hostNamesConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86374);
/* harmony import */ var src_dataMask_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74599);
/* harmony import */ var src_middleware_asyncEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77997);
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
/* eslint no-undef: 'error' */
/* eslint no-param-reassign: ["error", { "props": false }] */















const CHART_UPDATE_STARTED = 'CHART_UPDATE_STARTED';
function chartUpdateStarted(queryController, latestQueryFormData, key) {
  return {
    type: CHART_UPDATE_STARTED,
    queryController,
    latestQueryFormData,
    key };

}

const CHART_UPDATE_SUCCEEDED = 'CHART_UPDATE_SUCCEEDED';
function chartUpdateSucceeded(queriesResponse, key) {
  return { type: CHART_UPDATE_SUCCEEDED, queriesResponse, key };
}

const CHART_UPDATE_STOPPED = 'CHART_UPDATE_STOPPED';
function chartUpdateStopped(key) {
  return { type: CHART_UPDATE_STOPPED, key };
}

const CHART_UPDATE_FAILED = 'CHART_UPDATE_FAILED';
function chartUpdateFailed(queriesResponse, key) {
  return { type: CHART_UPDATE_FAILED, queriesResponse, key };
}

const CHART_RENDERING_FAILED = 'CHART_RENDERING_FAILED';
function chartRenderingFailed(error, key, stackTrace) {
  return { type: CHART_RENDERING_FAILED, error, key, stackTrace };
}

const CHART_RENDERING_SUCCEEDED = 'CHART_RENDERING_SUCCEEDED';
function chartRenderingSucceeded(key) {
  return { type: CHART_RENDERING_SUCCEEDED, key };
}

const REMOVE_CHART = 'REMOVE_CHART';
function removeChart(key) {
  return { type: REMOVE_CHART, key };
}

const ANNOTATION_QUERY_SUCCESS = 'ANNOTATION_QUERY_SUCCESS';
function annotationQuerySuccess(annotation, queryResponse, key) {
  return { type: ANNOTATION_QUERY_SUCCESS, annotation, queryResponse, key };
}

const ANNOTATION_QUERY_STARTED = 'ANNOTATION_QUERY_STARTED';
function annotationQueryStarted(annotation, queryController, key) {
  return { type: ANNOTATION_QUERY_STARTED, annotation, queryController, key };
}

const ANNOTATION_QUERY_FAILED = 'ANNOTATION_QUERY_FAILED';
function annotationQueryFailed(annotation, queryResponse, key) {
  return { type: ANNOTATION_QUERY_FAILED, annotation, queryResponse, key };
}

const DYNAMIC_PLUGIN_CONTROLS_READY = 'DYNAMIC_PLUGIN_CONTROLS_READY';
const dynamicPluginControlsReady = () => (dispatch, getState) => {
  const state = getState();
  const controlsState = (0,src_explore_store__WEBPACK_IMPORTED_MODULE_1__/* .getControlsState */ .R3)(
  state.explore,
  state.explore.form_data);

  dispatch({
    type: DYNAMIC_PLUGIN_CONTROLS_READY,
    key: controlsState.slice_id.value,
    controlsState });

};

const legacyChartDataRequest = async (
formData,
resultFormat,
resultType,
force,
method = 'POST',
requestParams = {}) =>
{
  const endpointType = (0,src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_2__/* .getLegacyEndpointType */ .pd)({ resultFormat, resultType });
  const allowDomainSharding =
  // eslint-disable-next-line camelcase
  src_utils_hostNamesConfig__WEBPACK_IMPORTED_MODULE_7__/* .allowCrossDomain */ ._ && (requestParams == null ? void 0 : requestParams.dashboard_id);
  const url = (0,src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_2__/* .getExploreUrl */ .H6)({
    formData,
    endpointType,
    force,
    allowDomainSharding,
    method,
    requestParams: requestParams.dashboard_id ?
    { dashboard_id: requestParams.dashboard_id } :
    {} });

  const querySettings = {
    ...requestParams,
    url,
    postPayload: { form_data: formData } };


  const clientMethod =
   true && (0,src_featureFlags__WEBPACK_IMPORTED_MODULE_10__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_11__/* .FeatureFlag.CLIENT_CACHE */ .T.CLIENT_CACHE) ?
  _superset_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"].get */ .Z.get :
  _superset_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"].post */ .Z.post;
  return clientMethod(querySettings).then(({ json, response }) => (


  {
    response,
    json: { result: [json] } }));


};

const v1ChartDataRequest = async (
formData,
resultFormat,
resultType,
force,
requestParams,
setDataMask,
ownState) =>
{
  const payload = (0,src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_2__/* .buildV1ChartDataPayload */ .u)({
    formData,
    resultType,
    resultFormat,
    force,
    setDataMask,
    ownState });


  // The dashboard id is added to query params for tracking purposes
  const { slice_id: sliceId } = formData;
  const { dashboard_id: dashboardId } = requestParams;

  const qs = {};
  if (sliceId !== undefined) qs.form_data = `{"slice_id":${sliceId}}`;
  if (dashboardId !== undefined) qs.dashboard_id = dashboardId;
  if (force !== false) qs.force = force;

  const allowDomainSharding =
  // eslint-disable-next-line camelcase
  src_utils_hostNamesConfig__WEBPACK_IMPORTED_MODULE_7__/* .allowCrossDomain */ ._ && (requestParams == null ? void 0 : requestParams.dashboard_id);
  const url = (0,src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_2__/* .getChartDataUri */ .kN)({
    path: '/api/v1/chart/data',
    qs,
    allowDomainSharding }).
  toString();

  const querySettings = {
    ...requestParams,
    url,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload) };


  return _superset_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"].post */ .Z.post(querySettings);
};

async function getChartDataRequest({
  formData,
  setDataMask = () => {},
  resultFormat = 'json',
  resultType = 'full',
  force = false,
  method = 'POST',
  requestParams = {},
  ownState = {} })
{
  let querySettings = {
    ...requestParams };


  if (src_utils_hostNamesConfig__WEBPACK_IMPORTED_MODULE_7__/* .allowCrossDomain */ ._) {
    querySettings = {
      ...querySettings,
      mode: 'cors',
      credentials: 'include' };

  }

  if ((0,src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_2__/* .shouldUseLegacyApi */ .kP)(formData)) {
    return legacyChartDataRequest(
    formData,
    resultFormat,
    resultType,
    force,
    method,
    querySettings);

  }
  return v1ChartDataRequest(
  formData,
  resultFormat,
  resultType,
  force,
  querySettings,
  setDataMask,
  ownState);

}

function runAnnotationQuery(
annotation,
timeout = 60,
formData = null,
key,
isDashboardRequest = false,
force = false)
{
  return function (dispatch, getState) {
    const sliceKey = key || Object.keys(getState().charts)[0];
    // make a copy of formData, not modifying original formData
    const fd = {
      ...(formData || getState().charts[sliceKey].latestQueryFormData) };


    if (!(0,src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_3__/* .requiresQuery */ .m7)(annotation.sourceType)) {
      return Promise.resolve();
    }

    const granularity = fd.time_grain_sqla || fd.granularity;
    fd.time_grain_sqla = granularity;
    fd.granularity = granularity;
    const overridesKeys = Object.keys(annotation.overrides);
    if (overridesKeys.includes('since') || overridesKeys.includes('until')) {
      annotation.overrides = {
        ...annotation.overrides,
        time_range: null };

    }
    const sliceFormData = Object.keys(annotation.overrides).reduce(
    (d, k) => ({
      ...d,
      [k]: annotation.overrides[k] || fd[k] }),

    {});


    if (!isDashboardRequest && fd) {
      const hasExtraFilters = fd.extra_filters && fd.extra_filters.length > 0;
      sliceFormData.extra_filters = hasExtraFilters ?
      fd.extra_filters :
      undefined;
    }

    const isNative = annotation.sourceType === src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_3__/* .ANNOTATION_SOURCE_TYPES.NATIVE */ .S4.NATIVE;
    const url = (0,src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_2__/* .getAnnotationJsonUrl */ .xW)(
    annotation.value,
    sliceFormData,
    isNative,
    force);

    const controller = new AbortController();
    const { signal } = controller;

    dispatch(annotationQueryStarted(annotation, controller, sliceKey));

    return _superset_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"].get */ .Z.get({
      url,
      signal,
      timeout: timeout * 1000 }).

    then(({ json }) =>
    dispatch(annotationQuerySuccess(annotation, json, sliceKey))).

    catch((response) =>
    (0,src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_6__/* .getClientErrorObject */ .O)(response).then((err) => {
      if (err.statusText === 'timeout') {
        dispatch(
        annotationQueryFailed(
        annotation,
        { error: 'Query timeout' },
        sliceKey));


      } else if ((err.error || '').toLowerCase().includes('no data')) {
        dispatch(annotationQuerySuccess(annotation, err, sliceKey));
      } else if (err.statusText !== 'abort') {
        dispatch(annotationQueryFailed(annotation, err, sliceKey));
      }
    }));

  };
}

const TRIGGER_QUERY = 'TRIGGER_QUERY';
function triggerQuery(value = true, key) {
  return { type: TRIGGER_QUERY, value, key };
}

// this action is used for forced re-render without fetch data
const RENDER_TRIGGERED = 'RENDER_TRIGGERED';
function renderTriggered(value, key) {
  return { type: RENDER_TRIGGERED, value, key };
}

const UPDATE_QUERY_FORM_DATA = 'UPDATE_QUERY_FORM_DATA';
function updateQueryFormData(value, key) {
  return { type: UPDATE_QUERY_FORM_DATA, value, key };
}

// in the sql lab -> explore flow, user can inline edit chart title,
// then the chart will be assigned a new slice_id
const UPDATE_CHART_ID = 'UPDATE_CHART_ID';
function updateChartId(newId, key = 0) {
  return { type: UPDATE_CHART_ID, newId, key };
}

const ADD_CHART = 'ADD_CHART';
function addChart(chart, key) {
  return { type: ADD_CHART, chart, key };
}

function exploreJSON(
formData,
force = false,
timeout = 60,
key,
method,
dashboardId,
ownState)
{
  return async (dispatch) => {
    const logStart = src_logger_LogUtils__WEBPACK_IMPORTED_MODULE_5__/* .Logger.getTimestamp */ .Yd.getTimestamp();
    const controller = new AbortController();

    const requestParams = {
      signal: controller.signal,
      timeout: timeout * 1000 };

    if (dashboardId) requestParams.dashboard_id = dashboardId;

    const setDataMask = (dataMask) => {
      dispatch((0,src_dataMask_actions__WEBPACK_IMPORTED_MODULE_8__/* .updateDataMask */ .eG)(formData.slice_id, dataMask));
    };
    const chartDataRequest = getChartDataRequest({
      setDataMask,
      formData,
      resultFormat: 'json',
      resultType: 'full',
      force,
      method,
      requestParams,
      ownState });


    dispatch(chartUpdateStarted(controller, formData, key));

    const chartDataRequestCaught = chartDataRequest.
    then(({ response, json }) => {
      if ((0,src_featureFlags__WEBPACK_IMPORTED_MODULE_10__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_11__/* .FeatureFlag.GLOBAL_ASYNC_QUERIES */ .T.GLOBAL_ASYNC_QUERIES)) {
        // deal with getChartDataRequest transforming the response data
        const result = 'result' in json ? json.result : json;
        switch (response.status) {
          case 200:
            // Query results returned synchronously, meaning query was already cached.
            return Promise.resolve(result);
          case 202:
            // Query is running asynchronously and we must await the results
            if ((0,src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_2__/* .shouldUseLegacyApi */ .kP)(formData)) {
              return (0,src_middleware_asyncEvent__WEBPACK_IMPORTED_MODULE_9__/* .waitForAsyncData */ .YJ)(result[0]);
            }
            return (0,src_middleware_asyncEvent__WEBPACK_IMPORTED_MODULE_9__/* .waitForAsyncData */ .YJ)(result);
          default:
            throw new Error(
            `Received unexpected response status (${response.status}) while fetching chart data`);}


      }

      return json.result;
    }).
    then((queriesResponse) => {
      queriesResponse.forEach((resultItem) =>
      dispatch(
      (0,src_logger_actions__WEBPACK_IMPORTED_MODULE_13__.logEvent)(src_logger_LogUtils__WEBPACK_IMPORTED_MODULE_5__/* .LOG_ACTIONS_LOAD_CHART */ .W9, {
        slice_id: key,
        applied_filters: resultItem.applied_filters,
        is_cached: resultItem.is_cached,
        force_refresh: force,
        row_count: resultItem.rowcount,
        datasource: formData.datasource,
        start_offset: logStart,
        ts: new Date().getTime(),
        duration: src_logger_LogUtils__WEBPACK_IMPORTED_MODULE_5__/* .Logger.getTimestamp */ .Yd.getTimestamp() - logStart,
        has_extra_filters:
        formData.extra_filters && formData.extra_filters.length > 0,
        viz_type: formData.viz_type,
        data_age: resultItem.is_cached ?
        moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_0___default().utc(resultItem.cached_dttm)) :
        null })));



      return dispatch(chartUpdateSucceeded(queriesResponse, key));
    }).
    catch((response) => {
      if ((0,src_featureFlags__WEBPACK_IMPORTED_MODULE_10__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_11__/* .FeatureFlag.GLOBAL_ASYNC_QUERIES */ .T.GLOBAL_ASYNC_QUERIES)) {
        return dispatch(chartUpdateFailed([response], key));
      }

      const appendErrorLog = (errorDetails, isCached) => {
        dispatch(
        (0,src_logger_actions__WEBPACK_IMPORTED_MODULE_13__.logEvent)(src_logger_LogUtils__WEBPACK_IMPORTED_MODULE_5__/* .LOG_ACTIONS_LOAD_CHART */ .W9, {
          slice_id: key,
          has_err: true,
          is_cached: isCached,
          error_details: errorDetails,
          datasource: formData.datasource,
          start_offset: logStart,
          ts: new Date().getTime(),
          duration: src_logger_LogUtils__WEBPACK_IMPORTED_MODULE_5__/* .Logger.getTimestamp */ .Yd.getTimestamp() - logStart }));


      };
      if (response.name === 'AbortError') {
        appendErrorLog('abort');
        return dispatch(chartUpdateStopped(key));
      }
      return (0,src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_6__/* .getClientErrorObject */ .O)(response).then((parsedResponse) => {
        if (response.statusText === 'timeout') {
          appendErrorLog('timeout');
        } else {
          appendErrorLog(parsedResponse.error, parsedResponse.is_cached);
        }
        return dispatch(chartUpdateFailed([parsedResponse], key));
      });
    });

    // only retrieve annotations when calling the legacy API
    const annotationLayers = (0,src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_2__/* .shouldUseLegacyApi */ .kP)(formData) ?
    formData.annotation_layers || [] :
    [];
    const isDashboardRequest = dashboardId > 0;

    return Promise.all([
    chartDataRequestCaught,
    dispatch(triggerQuery(false, key)),
    dispatch(updateQueryFormData(formData, key)),
    ...annotationLayers.map((x) =>
    dispatch(
    runAnnotationQuery(
    x,
    timeout,
    formData,
    key,
    isDashboardRequest,
    force)))]);




  };
}

const GET_SAVED_CHART = 'GET_SAVED_CHART';
function getSavedChart(
formData,
force = false,
timeout = 60,
key,
dashboardId,
ownState)
{
  /*
   * Perform a GET request to `/explore_json`.
   *
   * This will return the payload of a saved chart, optionally filtered by
   * ad-hoc or extra filters from dashboards. Eg:
   *
   *  GET  /explore_json?{"chart_id":1}
   *  GET  /explore_json?{"chart_id":1,"extra_filters":"..."}
   *
   */
  return exploreJSON(
  formData,
  force,
  timeout,
  key,
  'GET',
  dashboardId,
  ownState);

}

const POST_CHART_FORM_DATA = 'POST_CHART_FORM_DATA';
function postChartFormData(
formData,
force = false,
timeout = 60,
key,
dashboardId,
ownState)
{
  /*
   * Perform a POST request to `/explore_json`.
   *
   * This will post the form data to the endpoint, returning a new chart.
   *
   */
  return exploreJSON(
  formData,
  force,
  timeout,
  key,
  'POST',
  dashboardId,
  ownState);

}

function redirectSQLLab(formData) {
  return (dispatch) => {
    getChartDataRequest({ formData, resultFormat: 'json', resultType: 'query' }).
    then(({ json }) => {
      const redirectUrl = '/superset/sqllab/';
      const payload = {
        datasourceKey: formData.datasource,
        sql: json.result[0].query };

      (0,src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_2__/* .postForm */ .Md)(redirectUrl, payload);
    }).
    catch(() =>
    dispatch((0,src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_4__/* .addDangerToast */ .Gb)((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_14__.t)('An error occurred while loading the SQL'))));

  };
}

function refreshChart(chartKey, force, dashboardId) {
  return (dispatch, getState) => {var _getState$dataMask$ch;
    const chart = (getState().charts || {})[chartKey];
    const timeout = getState().dashboardInfo.common.conf.
    SUPERSET_WEBSERVER_TIMEOUT;

    if (
    !chart.latestQueryFormData ||
    Object.keys(chart.latestQueryFormData).length === 0)
    {
      return;
    }
    dispatch(
    postChartFormData(
    chart.latestQueryFormData,
    force,
    timeout,
    chart.id,
    dashboardId, (_getState$dataMask$ch =
    getState().dataMask[chart.id]) == null ? void 0 : _getState$dataMask$ch.ownState));


  };
}

/***/ }),

/***/ 57902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var src_components_ErrorMessage_ErrorMessageWithStackTrace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72875);
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





const propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
  onError: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  showMessage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool) };

const defaultProps = {
  onError: () => {},
  showMessage: true };


class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  componentDidCatch(error, info) {
    if (this.props.onError) this.props.onError(error, info);
    this.setState({ error, info });
  }

  render() {
    const { error, info } = this.state;
    if (error) {
      const firstLine = error.toString();
      const message =
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", null,
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('Unexpected error')),
      firstLine ? `: ${firstLine}` : '');


      if (this.props.showMessage) {
        return (
          (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(src_components_ErrorMessage_ErrorMessageWithStackTrace__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            subtitle: message,
            copyText: message,
            stackTrace: info ? info.componentStack : null }));


      }
      return null;
    }
    return this.props.children;
  }}

ErrorBoundary.propTypes = propTypes;
ErrorBoundary.defaultProps = defaultProps;

/***/ }),

/***/ 86422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fK": () => (/* binding */ ADD_FILTER),
/* harmony export */   "KJ": () => (/* binding */ addFilter),
/* harmony export */   "l3": () => (/* binding */ REMOVE_FILTER),
/* harmony export */   "ku": () => (/* binding */ removeFilter),
/* harmony export */   "oW": () => (/* binding */ CHANGE_FILTER),
/* harmony export */   "M6": () => (/* binding */ changeFilter),
/* harmony export */   "oT": () => (/* binding */ UPDATE_DIRECT_PATH_TO_FILTER),
/* harmony export */   "yz": () => (/* binding */ updateDirectPathToFilter),
/* harmony export */   "ib": () => (/* binding */ UPDATE_LAYOUT_COMPONENTS),
/* harmony export */   "P_": () => (/* binding */ updateLayoutComponents),
/* harmony export */   "cK": () => (/* binding */ UPDATE_DASHBOARD_FILTERS_SCOPE),
/* harmony export */   "l6": () => (/* binding */ updateDashboardFiltersScope)
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
/* eslint-disable camelcase */
// util function to make sure filter is a valid slice in current dashboard
function isValidFilter(getState, chartId) {
  return getState().dashboardState.sliceIds.includes(chartId);
}

const ADD_FILTER = 'ADD_FILTER';
function addFilter(chartId, component, form_data) {
  return (dispatch, getState) => {
    if (isValidFilter(getState, chartId)) {
      return dispatch({ type: ADD_FILTER, chartId, component, form_data });
    }
    return getState().dashboardFilters;
  };
}

const REMOVE_FILTER = 'REMOVE_FILTER';
function removeFilter(chartId) {
  return (dispatch, getState) => {
    if (isValidFilter(getState, chartId)) {
      return dispatch({ type: REMOVE_FILTER, chartId });
    }
    return getState().dashboardFilters;
  };
}

const CHANGE_FILTER = 'CHANGE_FILTER';
function changeFilter(chartId, newSelectedValues, merge) {
  return (dispatch, getState) => {
    if (isValidFilter(getState, chartId)) {
      const components = getState().dashboardLayout.present;
      return dispatch({
        type: CHANGE_FILTER,
        chartId,
        newSelectedValues,
        merge,
        components });

    }
    return getState().dashboardFilters;
  };
}

const UPDATE_DIRECT_PATH_TO_FILTER = 'UPDATE_DIRECT_PATH_TO_FILTER';
function updateDirectPathToFilter(chartId, path) {
  return (dispatch, getState) => {
    if (isValidFilter(getState, chartId)) {
      return dispatch({ type: UPDATE_DIRECT_PATH_TO_FILTER, chartId, path });
    }
    return getState().dashboardFilters;
  };
}

const UPDATE_LAYOUT_COMPONENTS = 'UPDATE_LAYOUT_COMPONENTS';
function updateLayoutComponents(components) {
  return (dispatch) => {
    dispatch({ type: UPDATE_LAYOUT_COMPONENTS, components });
  };
}

const UPDATE_DASHBOARD_FILTERS_SCOPE = 'UPDATE_DASHBOARD_FILTERS_SCOPE';
function updateDashboardFiltersScope(scopes) {
  return (dispatch) => {
    dispatch({ type: UPDATE_DASHBOARD_FILTERS_SCOPE, scopes });
  };
}

/***/ }),

/***/ 47173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ HYDRATE_DASHBOARD),
  "Y": () => (/* binding */ hydrateDashboard)
});

// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(47037);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalColorNamespace.js
var CategoricalColorNamespace = __webpack_require__(83527);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartMetadataRegistrySingleton.js
var ChartMetadataRegistrySingleton = __webpack_require__(38849);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/types/Base.js
var Base = __webpack_require__(52686);
// EXTERNAL MODULE: ./src/chart/chartReducer.ts
var chartReducer = __webpack_require__(64714);
// EXTERNAL MODULE: ./src/dashboard/reducers/sliceEntities.js
var sliceEntities = __webpack_require__(37927);
// EXTERNAL MODULE: ./src/dashboard/reducers/nativeFilters.ts
var reducers_nativeFilters = __webpack_require__(39759);
// EXTERNAL MODULE: ./src/explore/store.js
var store = __webpack_require__(35854);
// EXTERNAL MODULE: ./src/dashboard/util/activeDashboardFilters.js
var activeDashboardFilters = __webpack_require__(43399);
// EXTERNAL MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__(30845);
;// CONCATENATED MODULE: ./src/dashboard/util/findPermission.ts
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

const findPermission = (0,memoize_one_esm/* default */.Z)((perm, view, roles) => !!roles &&
Object.values(roles).some((permissions) => permissions.some(([perm_, view_]) => perm_ === perm && view_ === view)));
/* harmony default export */ const util_findPermission = (findPermission);
// this should really be a config value,
// but is hardcoded in backend logic already, so...
const ADMIN_ROLE_NAME = 'admin';
const isUserAdmin = (user) => Object.keys(user.roles).some((role) => role.toLowerCase() === ADMIN_ROLE_NAME);
const isUserDashboardOwner = (dashboard, user) => dashboard.owners.some((owner) => owner.username === user.username);
const canUserEditDashboard = (dashboard, user) => !!(user != null && user.roles) && (
isUserAdmin(user) || isUserDashboardOwner(dashboard, user)) &&
findPermission('can_write', 'Dashboard', user.roles);
// EXTERNAL MODULE: ./src/dashboard/reducers/dashboardFilters.js
var reducers_dashboardFilters = __webpack_require__(39023);
// EXTERNAL MODULE: ./src/dashboard/util/constants.ts
var constants = __webpack_require__(80621);
// EXTERNAL MODULE: ./src/dashboard/util/componentTypes.ts
var componentTypes = __webpack_require__(81255);
;// CONCATENATED MODULE: ./src/dashboard/util/findFirstParentContainer.js
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



function findFirstParentContainerId(layout = {}) {
  // DASHBOARD_GRID_TYPE or TABS_TYPE?
  let parent = layout[constants/* DASHBOARD_ROOT_ID */._4];
  if (
  parent &&
  parent.children.length &&
  layout[parent.children[0]].type === componentTypes/* TABS_TYPE */.yR)
  {
    const tabs = layout[parent.children[0]];
    parent = layout[tabs.children[0]];
  } else {
    parent = layout[parent.children[0]];
  }

  return parent.id;
}
;// CONCATENATED MODULE: ./src/dashboard/util/getEmptyLayout.js
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




function getEmptyLayout() {
  return {
    [constants/* DASHBOARD_VERSION_KEY */.Zn]: 'v2',
    [constants/* DASHBOARD_ROOT_ID */._4]: {
      type: componentTypes/* DASHBOARD_ROOT_TYPE */.U0,
      id: constants/* DASHBOARD_ROOT_ID */._4,
      children: [constants/* DASHBOARD_GRID_ID */.PV] },

    [constants/* DASHBOARD_GRID_ID */.PV]: {
      type: componentTypes/* DASHBOARD_GRID_TYPE */.BG,
      id: constants/* DASHBOARD_GRID_ID */.PV,
      children: [],
      parents: [constants/* DASHBOARD_ROOT_ID */._4] } };


}
// EXTERNAL MODULE: ./src/dashboard/util/getFilterConfigsFromFormdata.js
var getFilterConfigsFromFormdata = __webpack_require__(53046);
// EXTERNAL MODULE: ./src/dashboard/util/getLocationHash.ts
var getLocationHash = __webpack_require__(56967);
// EXTERNAL MODULE: ./src/dashboard/util/newComponentFactory.js
var newComponentFactory = __webpack_require__(28428);
// EXTERNAL MODULE: ./src/visualizations/FilterBox/FilterBox.jsx
var FilterBox = __webpack_require__(51777);
// EXTERNAL MODULE: ./src/constants.ts
var src_constants = __webpack_require__(27600);
// EXTERNAL MODULE: ./src/utils/urlUtils.ts
var urlUtils = __webpack_require__(23525);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./src/dashboard/util/extractUrlParams.ts
var extractUrlParams = __webpack_require__(70400);
;// CONCATENATED MODULE: ./src/dashboard/actions/hydrate.js










































const HYDRATE_DASHBOARD = 'HYDRATE_DASHBOARD';

const hydrateDashboard = (dashboardData, chartData) => (
dispatch,
getState) =>
{var _metadata, _metadata2, _metadata3, _metadata4, _dashboardData$metada, _dashboardData$metada2, _metadata5, _metadata6, _metadata7, _metadata8;
  const { user, common, dashboardState } = getState();
  let { metadata } = dashboardData;
  const regularUrlParams = (0,extractUrlParams/* default */.Z)('regular');
  const reservedUrlParams = (0,extractUrlParams/* default */.Z)('reserved');
  const editMode = reservedUrlParams.edit === 'true';

  let preselectFilters = {};

  chartData.forEach((chart) => {
    // eslint-disable-next-line no-param-reassign
    chart.slice_id = chart.form_data.slice_id;
  });
  try {
    // allow request parameter overwrite dashboard metadata
    preselectFilters =
    (0,urlUtils/* getUrlParam */.e)(src_constants/* URL_PARAMS.preselectFilters */.KD.preselectFilters) ||
    JSON.parse(metadata.default_filters);
  } catch (e) {
    //
  }

  // Priming the color palette with user's label-color mapping provided in
  // the dashboard's JSON metadata
  if ((_metadata = metadata) != null && _metadata.label_colors) {
    const namespace = metadata.color_namespace;
    const colorMap = isString_default()(metadata.label_colors) ?
    JSON.parse(metadata.label_colors) :
    metadata.label_colors;
    const categoricalNamespace = CategoricalColorNamespace.getNamespace(
    namespace);


    Object.keys(colorMap).forEach((label) => {
      categoricalNamespace.setColor(label, colorMap[label]);
    });
  }

  // dashboard layout
  const { position_data } = dashboardData;
  // new dash: position_json could be {} or null
  const layout =
  position_data && Object.keys(position_data).length > 0 ?
  position_data :
  getEmptyLayout();

  // create a lookup to sync layout names with slice names
  const chartIdToLayoutId = {};
  Object.values(layout).forEach((layoutComponent) => {
    if (layoutComponent.type === componentTypes/* CHART_TYPE */.dW) {
      chartIdToLayoutId[layoutComponent.meta.chartId] = layoutComponent.id;
    }
  });

  // find root level chart container node for newly-added slices
  const parentId = findFirstParentContainerId(layout);
  const parent = layout[parentId];
  let newSlicesContainer;
  let newSlicesContainerWidth = 0;

  const filterScopes = ((_metadata2 = metadata) == null ? void 0 : _metadata2.filter_scopes) || {};

  const chartQueries = {};
  const dashboardFilters = {};
  const slices = {};
  const sliceIds = new Set();
  chartData.forEach((slice) => {
    const key = slice.slice_id;
    const form_data = {
      ...slice.form_data,
      url_params: {
        ...slice.form_data.url_params,
        ...regularUrlParams } };


    chartQueries[key] = {
      ...chartReducer/* chart */.u,
      id: key,
      form_data,
      formData: (0,store/* applyDefaultFormData */.oN)(form_data) };


    slices[key] = {
      slice_id: key,
      slice_url: slice.slice_url,
      slice_name: slice.slice_name,
      form_data: slice.form_data,
      viz_type: slice.form_data.viz_type,
      datasource: slice.form_data.datasource,
      description: slice.description,
      description_markeddown: slice.description_markeddown,
      owners: slice.owners,
      modified: slice.modified,
      changed_on: new Date(slice.changed_on).getTime() };


    sliceIds.add(key);

    // if there are newly added slices from explore view, fill slices into 1 or more rows
    if (!chartIdToLayoutId[key] && layout[parentId]) {
      if (
      newSlicesContainerWidth === 0 ||
      newSlicesContainerWidth + constants/* GRID_DEFAULT_CHART_WIDTH */.fw > constants/* GRID_COLUMN_COUNT */.cz)
      {
        newSlicesContainer = (0,newComponentFactory/* default */.Z)(
        componentTypes/* ROW_TYPE */.Os,
        (parent.parents || []).slice());

        layout[newSlicesContainer.id] = newSlicesContainer;
        parent.children.push(newSlicesContainer.id);
        newSlicesContainerWidth = 0;
      }

      const chartHolder = (0,newComponentFactory/* default */.Z)(
      componentTypes/* CHART_TYPE */.dW,
      {
        chartId: slice.slice_id },

      (newSlicesContainer.parents || []).slice());


      layout[chartHolder.id] = chartHolder;
      newSlicesContainer.children.push(chartHolder.id);
      chartIdToLayoutId[chartHolder.meta.chartId] = chartHolder.id;
      newSlicesContainerWidth += constants/* GRID_DEFAULT_CHART_WIDTH */.fw;
    }

    // build DashboardFilters for interactive filter features
    if (slice.form_data.viz_type === 'filter_box') {
      const configs = (0,getFilterConfigsFromFormdata/* default */.Z)(slice.form_data);
      let { columns } = configs;
      const { labels } = configs;
      if (preselectFilters[key]) {
        Object.keys(columns).forEach((col) => {
          if (preselectFilters[key][col]) {
            columns = {
              ...columns,
              [col]: preselectFilters[key][col] };

          }
        });
      }

      const scopesByChartId = Object.keys(columns).reduce((map, column) => {
        const scopeSettings = {
          ...filterScopes[key] };

        const { scope, immune } = {
          ...reducers_dashboardFilters/* DASHBOARD_FILTER_SCOPE_GLOBAL */.GI,
          ...scopeSettings[column] };


        return {
          ...map,
          [column]: {
            scope,
            immune } };


      }, {});

      const componentId = chartIdToLayoutId[key];
      const directPathToFilter = (layout[componentId].parents || []).slice();
      directPathToFilter.push(componentId);
      dashboardFilters[key] = {
        ...reducers_dashboardFilters/* dashboardFilter */.Mj,
        chartId: key,
        componentId,
        datasourceId: slice.form_data.datasource,
        filterName: slice.slice_name,
        directPathToFilter,
        columns,
        labels,
        scopes: scopesByChartId,
        isInstantFilter: !!slice.form_data.instant_filtering,
        isDateFilter: Object.keys(columns).includes(FilterBox.TIME_RANGE) };

    }

    // sync layout names with current slice names in case a slice was edited
    // in explore since the layout was updated. name updates go through layout for undo/redo
    // functionality and python updates slice names based on layout upon dashboard save
    const layoutId = chartIdToLayoutId[key];
    if (layoutId && layout[layoutId]) {
      layout[layoutId].meta.sliceName = slice.slice_name;
    }
  });
  (0,activeDashboardFilters/* buildActiveFilters */.DU)({
    dashboardFilters,
    components: layout });


  // store the header as a layout component so we can undo/redo changes
  layout[constants/* DASHBOARD_HEADER_ID */.M2] = {
    id: constants/* DASHBOARD_HEADER_ID */.M2,
    type: componentTypes/* DASHBOARD_HEADER_TYPE */.Vl,
    meta: {
      text: dashboardData.dashboard_title } };



  const dashboardLayout = {
    past: [],
    present: layout,
    future: [] };


  // find direct link component and path from root
  const directLinkComponentId = (0,getLocationHash/* default */.Z)();
  let directPathToChild = [];
  if (layout[directLinkComponentId]) {
    directPathToChild = (layout[directLinkComponentId].parents || []).slice();
    directPathToChild.push(directLinkComponentId);
  }

  const nativeFilters = (0,reducers_nativeFilters/* getInitialState */.a)({
    filterConfig: ((_metadata3 = metadata) == null ? void 0 : _metadata3.native_filter_configuration) || [],
    filterSetsConfig: ((_metadata4 = metadata) == null ? void 0 : _metadata4.filter_sets_configuration) || [] });


  if (!metadata) {
    metadata = {};
  }

  metadata.show_native_filters = (_dashboardData$metada =
  dashboardData == null ? void 0 : (_dashboardData$metada2 = dashboardData.metadata) == null ? void 0 : _dashboardData$metada2.show_native_filters) != null ? _dashboardData$metada :
  (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.DASHBOARD_NATIVE_FILTERS */.T.DASHBOARD_NATIVE_FILTERS);

  if ((0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.DASHBOARD_CROSS_FILTERS */.T.DASHBOARD_CROSS_FILTERS)) {
    // If user just added cross filter to dashboard it's not saving it scope on server,
    // so we tweak it until user will update scope and will save it in server
    Object.values(dashboardLayout.present).forEach((layoutItem) => {var _layoutItem$meta, _behaviors, _ref, _getChartMetadataRegi, _chartQueries$chartId, _chartQueries$chartId2;
      const chartId = (_layoutItem$meta = layoutItem.meta) == null ? void 0 : _layoutItem$meta.chartId;
      const behaviors = (_behaviors = (_ref = (_getChartMetadataRegi =

      (0,ChartMetadataRegistrySingleton/* default */.Z)().get((_chartQueries$chartId =
      chartQueries[chartId]) == null ? void 0 : (_chartQueries$chartId2 = _chartQueries$chartId.formData) == null ? void 0 : _chartQueries$chartId2.viz_type)) != null ? _getChartMetadataRegi :
      {}) == null ? void 0 : _ref.
      behaviors) != null ? _behaviors : [];

      if (!metadata.chart_configuration) {
        metadata.chart_configuration = {};
      }
      if (
      behaviors.includes(Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART) &&
      !metadata.chart_configuration[chartId])
      {
        metadata.chart_configuration[chartId] = {
          id: chartId,
          crossFilters: {
            scope: {
              rootPath: [constants/* DASHBOARD_ROOT_ID */._4],
              excluded: [chartId] // By default it doesn't affects itself
            } } };


      }
    });
  }

  const { roles } = user;
  const canEdit = canUserEditDashboard(dashboardData, user);

  return dispatch({
    type: HYDRATE_DASHBOARD,
    data: {
      sliceEntities: { ...sliceEntities/* initSliceEntities */.b, slices, isLoading: false },
      charts: chartQueries,
      // read-only data
      dashboardInfo: {
        ...dashboardData,
        metadata,
        userId: user.userId ? String(user.userId) : null, // legacy, please use state.user instead
        dash_edit_perm: canEdit,
        dash_save_perm: util_findPermission('can_save_dash', 'Superset', roles),
        dash_share_perm: util_findPermission(
        'can_share_dashboard',
        'Superset',
        roles),

        superset_can_explore: util_findPermission('can_explore', 'Superset', roles),
        superset_can_share: util_findPermission(
        'can_share_chart',
        'Superset',
        roles),

        superset_can_csv: util_findPermission('can_csv', 'Superset', roles),
        slice_can_edit: util_findPermission('can_slice', 'Superset', roles),
        common: {
          // legacy, please use state.common instead
          flash_messages: common.flash_messages,
          conf: common.conf } },


      dashboardFilters,
      nativeFilters,
      dashboardState: {
        preselectNativeFilters: (0,urlUtils/* getUrlParam */.e)(src_constants/* URL_PARAMS.nativeFilters */.KD.nativeFilters),
        sliceIds: Array.from(sliceIds),
        directPathToChild,
        directPathLastUpdated: Date.now(),
        focusedFilterField: null,
        expandedSlices: ((_metadata5 = metadata) == null ? void 0 : _metadata5.expanded_slices) || {},
        refreshFrequency: ((_metadata6 = metadata) == null ? void 0 : _metadata6.refresh_frequency) || 0,
        // dashboard viewers can set refresh frequency for the current visit,
        // only persistent refreshFrequency will be saved to backend
        shouldPersistRefreshFrequency: false,
        css: dashboardData.css || '',
        colorNamespace: ((_metadata7 = metadata) == null ? void 0 : _metadata7.color_namespace) || null,
        colorScheme: ((_metadata8 = metadata) == null ? void 0 : _metadata8.color_scheme) || null,
        editMode: canEdit && editMode,
        isPublished: dashboardData.published,
        hasUnsavedChanges: false,
        maxUndoHistoryExceeded: false,
        lastModifiedTime: dashboardData.changed_on,
        isRefreshing: false,
        activeTabs: (dashboardState == null ? void 0 : dashboardState.activeTabs) || [] },

      dashboardLayout } });


};

/***/ }),

/***/ 68969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lf": () => (/* binding */ SET_ALL_SLICES),
/* harmony export */   "D2": () => (/* binding */ FETCH_ALL_SLICES_STARTED),
/* harmony export */   "cK": () => (/* binding */ FETCH_ALL_SLICES_FAILED),
/* harmony export */   "To": () => (/* binding */ fetchAllSlices)
/* harmony export */ });
/* unused harmony exports setAllSlices, fetchAllSlicesStarted, fetchAllSlicesFailed */
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21173);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60650);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15926);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72570);
/* harmony import */ var src_modules_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16737);
/* harmony import */ var src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98286);
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







const SET_ALL_SLICES = 'SET_ALL_SLICES';
function setAllSlices(slices) {
  return { type: SET_ALL_SLICES, payload: { slices } };
}

const FETCH_ALL_SLICES_STARTED = 'FETCH_ALL_SLICES_STARTED';
function fetchAllSlicesStarted() {
  return { type: FETCH_ALL_SLICES_STARTED };
}

const FETCH_ALL_SLICES_FAILED = 'FETCH_ALL_SLICES_FAILED';
function fetchAllSlicesFailed(error) {
  return { type: FETCH_ALL_SLICES_FAILED, payload: { error } };
}

const FETCH_SLICES_PAGE_SIZE = 200;
function fetchAllSlices(userId) {
  return (dispatch, getState) => {
    const { sliceEntities } = getState();
    if (sliceEntities.lastUpdated === 0) {
      dispatch(fetchAllSlicesStarted());

      return _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get({
        endpoint: `/api/v1/chart/?q=${rison__WEBPACK_IMPORTED_MODULE_0___default().encode({
          columns: [
          'changed_on_delta_humanized',
          'changed_on_utc',
          'datasource_id',
          'datasource_type',
          'datasource_url',
          'datasource_name_text',
          'description_markeddown',
          'description',
          'id',
          'params',
          'slice_name',
          'url',
          'viz_type'],

          filters: [{ col: 'owners', opr: 'rel_m_m', value: userId }],
          page_size: FETCH_SLICES_PAGE_SIZE,
          order_column: 'changed_on_delta_humanized',
          order_direction: 'desc' })
        }` }).

      then(({ json }) => {
        const slices = {};
        json.result.forEach((slice) => {
          let form_data = JSON.parse(slice.params);
          form_data = {
            ...form_data,
            // force using datasource stored in relational table prop
            datasource:
            (0,src_modules_utils__WEBPACK_IMPORTED_MODULE_4__/* .getDatasourceParameter */ .n_)(
            slice.datasource_id,
            slice.datasource_type) ||
            form_data.datasource };

          slices[slice.id] = {
            slice_id: slice.id,
            slice_url: slice.url,
            slice_name: slice.slice_name,
            form_data,
            datasource_name: slice.datasource_name_text,
            datasource_url: slice.datasource_url,
            datasource_id: slice.datasource_id,
            datasource_type: slice.datasource_type,
            changed_on: new Date(slice.changed_on_utc).getTime(),
            description: slice.description,
            description_markdown: slice.description_markeddown,
            viz_type: slice.viz_type,
            modified: slice.changed_on_delta_humanized,
            changed_on_humanized: slice.changed_on_delta_humanized };

        });

        return dispatch(setAllSlices(slices));
      }).
      catch(
      (errorResponse) =>
      console.log(errorResponse) ||
      (0,src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_2__/* .getClientErrorObject */ .O)(errorResponse).then(({ error }) => {
        dispatch(
        fetchAllSlicesFailed(
        error || (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Could not fetch all saved charts')));


        dispatch(
        (0,src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_1__/* .addDangerToast */ .Gb)(
        (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Sorry there was an error fetching saved charts: ') + error));


      }));

    }

    return dispatch(setAllSlices(sliceEntities.slices));
  };
}

/***/ }),

/***/ 39023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GI": () => (/* binding */ DASHBOARD_FILTER_SCOPE_GLOBAL),
/* harmony export */   "Mj": () => (/* binding */ dashboardFilter),
/* harmony export */   "ZP": () => (/* binding */ dashboardFiltersReducer)
/* harmony export */ });
/* harmony import */ var _actions_dashboardFilters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86422);
/* harmony import */ var _actions_hydrate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47173);
/* harmony import */ var _visualizations_FilterBox_FilterBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51777);
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80621);
/* harmony import */ var _util_getFilterConfigsFromFormdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53046);
/* harmony import */ var _util_activeDashboardFilters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43399);
/* harmony import */ var _util_getDashboardFilterKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20194);
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
/* eslint-disable camelcase */








const DASHBOARD_FILTER_SCOPE_GLOBAL = {
  scope: [_util_constants__WEBPACK_IMPORTED_MODULE_2__/* .DASHBOARD_ROOT_ID */ ._4],
  immune: [] };


const dashboardFilter = {
  chartId: null,
  componentId: null,
  filterName: null,
  datasourceId: null,
  directPathToFilter: [],
  isDateFilter: false,
  isInstantFilter: true,
  columns: {},
  labels: {},
  scopes: {} };


const CHANGE_FILTER_VALUE_ACTIONS = [_actions_dashboardFilters__WEBPACK_IMPORTED_MODULE_5__/* .ADD_FILTER */ .fK, _actions_dashboardFilters__WEBPACK_IMPORTED_MODULE_5__/* .REMOVE_FILTER */ .l3, _actions_dashboardFilters__WEBPACK_IMPORTED_MODULE_5__/* .CHANGE_FILTER */ .oW];

function dashboardFiltersReducer(dashboardFilters = {}, action) {
  const actionHandlers = {
    [_actions_dashboardFilters__WEBPACK_IMPORTED_MODULE_5__/* .ADD_FILTER */ .fK]() {
      const { chartId, component, form_data } = action;
      const { columns, labels } = (0,_util_getFilterConfigsFromFormdata__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(form_data);
      const scopes = Object.keys(columns).reduce(
      (map, column) => ({
        ...map,
        [column]: DASHBOARD_FILTER_SCOPE_GLOBAL }),

      {});

      const directPathToFilter = component ?
      (component.parents || []).slice().concat(component.id) :
      [];

      const newFilter = {
        ...dashboardFilter,
        chartId,
        componentId: component.id,
        datasourceId: form_data.datasource,
        filterName: component.meta.sliceName,
        directPathToFilter,
        columns,
        labels,
        scopes,
        isInstantFilter: !!form_data.instant_filtering,
        isDateFilter: Object.keys(columns).includes(_visualizations_FilterBox_FilterBox__WEBPACK_IMPORTED_MODULE_1__.TIME_RANGE) };


      return newFilter;
    },

    [_actions_dashboardFilters__WEBPACK_IMPORTED_MODULE_5__/* .CHANGE_FILTER */ .oW](state) {
      const { newSelectedValues, merge } = action;
      const updatedColumns = Object.keys(newSelectedValues).reduce(
      (columns, name) => {
        // override existed column value, or add new column name
        if (!merge || !(name in columns)) {
          return {
            ...columns,
            [name]: newSelectedValues[name] };

        }

        return {
          ...columns,
          [name]: [...columns[name], ...newSelectedValues[name]] };

      },
      { ...state.columns });


      return {
        ...state,
        columns: updatedColumns };

    },

    [_actions_dashboardFilters__WEBPACK_IMPORTED_MODULE_5__/* .UPDATE_DIRECT_PATH_TO_FILTER */ .oT](state) {
      const { path } = action;
      return {
        ...state,
        directPathToFilter: path };

    } };


  if (action.type === _actions_dashboardFilters__WEBPACK_IMPORTED_MODULE_5__/* .UPDATE_LAYOUT_COMPONENTS */ .ib) {
    (0,_util_activeDashboardFilters__WEBPACK_IMPORTED_MODULE_4__/* .buildActiveFilters */ .DU)({
      dashboardFilters,
      components: action.components });

    return dashboardFilters;
  }
  if (action.type === _actions_dashboardFilters__WEBPACK_IMPORTED_MODULE_5__/* .UPDATE_DASHBOARD_FILTERS_SCOPE */ .cK) {
    const allDashboardFiltersScope = action.scopes;
    // update filter scope for each filter field
    const updatedFilters = Object.entries(allDashboardFiltersScope).reduce(
    (map, entry) => {
      const [filterKey, { scope, immune }] = entry;
      const { chartId, column } = (0,_util_getDashboardFilterKey__WEBPACK_IMPORTED_MODULE_6__/* .getChartIdAndColumnFromFilterKey */ ._)(filterKey);
      const scopes = {
        ...map[chartId].scopes,
        [column]: {
          scope,
          immune } };


      return {
        ...map,
        [chartId]: {
          ...map[chartId],
          scopes } };


    },
    dashboardFilters);


    (0,_util_activeDashboardFilters__WEBPACK_IMPORTED_MODULE_4__/* .buildActiveFilters */ .DU)({ dashboardFilters: updatedFilters });
    return updatedFilters;
  }
  if (action.type === _actions_dashboardFilters__WEBPACK_IMPORTED_MODULE_5__/* .REMOVE_FILTER */ .l3) {
    const { chartId } = action;
    const { [chartId]: deletedFilter, ...updatedFilters } = dashboardFilters;
    (0,_util_activeDashboardFilters__WEBPACK_IMPORTED_MODULE_4__/* .buildActiveFilters */ .DU)({ dashboardFilters: updatedFilters });

    return updatedFilters;
  }
  if (action.type === _actions_hydrate__WEBPACK_IMPORTED_MODULE_0__/* .HYDRATE_DASHBOARD */ .$) {
    return action.data.dashboardFilters;
  }

  if (action.type in actionHandlers) {
    const updatedFilters = {
      ...dashboardFilters,
      [action.chartId]: actionHandlers[action.type](
      dashboardFilters[action.chartId]) };


    if (CHANGE_FILTER_VALUE_ACTIONS.includes(action.type)) {
      (0,_util_activeDashboardFilters__WEBPACK_IMPORTED_MODULE_4__/* .buildActiveFilters */ .DU)({ dashboardFilters: updatedFilters });
    }

    return updatedFilters;
  }

  return dashboardFilters;
}

/***/ }),

/***/ 37927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ initSliceEntities),
/* harmony export */   "Z": () => (/* binding */ sliceEntitiesReducer)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60650);
/* harmony import */ var _actions_sliceEntities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68969);
/* harmony import */ var _actions_hydrate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47173);
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





const initSliceEntities = {
  slices: {},
  isLoading: true,
  errorMessage: null,
  lastUpdated: 0 };


function sliceEntitiesReducer(
state = initSliceEntities,
action)
{
  const actionHandlers = {
    [_actions_hydrate__WEBPACK_IMPORTED_MODULE_1__/* .HYDRATE_DASHBOARD */ .$]() {
      return {
        ...action.data.sliceEntities };

    },
    [_actions_sliceEntities__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_ALL_SLICES_STARTED */ .D2]() {
      return {
        ...state,
        isLoading: true };

    },
    [_actions_sliceEntities__WEBPACK_IMPORTED_MODULE_0__/* .SET_ALL_SLICES */ .lf]() {
      return {
        ...state,
        isLoading: false,
        slices: { ...state.slices, ...action.payload.slices },
        lastUpdated: new Date().getTime() };

    },
    [_actions_sliceEntities__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_ALL_SLICES_FAILED */ .cK]() {
      return {
        ...state,
        isLoading: false,
        lastUpdated: new Date().getTime(),
        errorMessage:
        action.payload.error || (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__.t)('Could not fetch all saved charts') };

    } };


  if (action.type in actionHandlers) {
    return actionHandlers[action.type]();
  }
  return state;
}

/***/ }),

/***/ 43399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "De": () => (/* binding */ getActiveFilters),
/* harmony export */   "Z3": () => (/* binding */ isFilterBox),
/* harmony export */   "_f": () => (/* binding */ getAppliedFilterValues),
/* harmony export */   "Q1": () => (/* binding */ getChartIdsInFilterScope),
/* harmony export */   "DU": () => (/* binding */ buildActiveFilters)
/* harmony export */ });
/* harmony import */ var lodash_fp_keyBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58809);
/* harmony import */ var lodash_fp_keyBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_keyBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_fp_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8816);
/* harmony import */ var lodash_fp_flow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_flow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_fp_mapValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83927);
/* harmony import */ var lodash_fp_mapValues__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_mapValues__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41609);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _getDashboardFilterKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20194);
/* harmony import */ var _componentTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81255);
/* harmony import */ var _reducers_dashboardFilters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39023);

























let allFilterBoxChartIds = [];
let activeFilters = {};
let appliedFilterValuesByChart = {};
let allComponents = {};

// output: { [id_column]: { values, scope } }
function getActiveFilters() {
  return activeFilters;
}

// currently filter_box is a chart,
// when selecting filter scopes, they have to be out pulled out in a few places.
// after we make filter_box a dashboard build-in component, will not need this check anymore.
function isFilterBox(chartId) {
  return allFilterBoxChartIds.includes(chartId);
}

// this function is to find all filter values applied to a chart,
// it goes through all active filters and their scopes.
// return: { [column]: array of selected values }
function getAppliedFilterValues(chartId) {
  // use cached data if possible
  if (!(chartId in appliedFilterValuesByChart)) {
    const applicableFilters = Object.entries(
    activeFilters).
    filter(([, { scope: chartIds }]) => chartIds.includes(chartId));
    appliedFilterValuesByChart[chartId] = lodash_fp_flow__WEBPACK_IMPORTED_MODULE_1___default()(
    lodash_fp_keyBy__WEBPACK_IMPORTED_MODULE_0___default()(
    ([filterKey]) => (0,_getDashboardFilterKey__WEBPACK_IMPORTED_MODULE_6__/* .getChartIdAndColumnFromFilterKey */ ._)(filterKey).column),

    lodash_fp_mapValues__WEBPACK_IMPORTED_MODULE_2___default()(([, { values }]) => values))(
    applicableFilters);
  }
  return appliedFilterValuesByChart[chartId];
}

function getChartIdsInFilterScope({
  filterScope = _reducers_dashboardFilters__WEBPACK_IMPORTED_MODULE_5__/* .DASHBOARD_FILTER_SCOPE_GLOBAL */ .GI })
{
  function traverse(chartIds = [], component = {}, immuneChartIds = []) {
    if (!component) {
      return;
    }

    if (
    component.type === _componentTypes__WEBPACK_IMPORTED_MODULE_4__/* .CHART_TYPE */ .dW &&
    component.meta &&
    component.meta.chartId &&
    !immuneChartIds.includes(component.meta.chartId))
    {
      chartIds.push(component.meta.chartId);
    } else if (component.children) {
      component.children.forEach((child) =>
      traverse(chartIds, allComponents[child], immuneChartIds));

    }
  }

  const chartIds = [];
  const { scope: scopeComponentIds, immune: immuneChartIds } = filterScope;
  scopeComponentIds.forEach((componentId) =>
  traverse(chartIds, allComponents[componentId], immuneChartIds));


  return chartIds;
}

// non-empty filter fields in dashboardFilters,
// activeFilters map contains selected values and filter scope.
// values: array of selected values
// scope: array of chartIds that applicable to the filter field.
function buildActiveFilters({ dashboardFilters = {}, components = {} }) {
  allFilterBoxChartIds = Object.values(dashboardFilters).map(
  (filter) => filter.chartId);


  // clear cache
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(components)) {
    allComponents = components;
  }
  appliedFilterValuesByChart = {};
  activeFilters = Object.values(dashboardFilters).reduce((result, filter) => {
    const { chartId, columns, scopes } = filter;
    const nonEmptyFilters = {};

    Object.keys(columns).forEach((column) => {
      if (
      Array.isArray(columns[column]) ?
      columns[column].length :
      columns[column] !== undefined)
      {
        // remove filter itself
        const scope = getChartIdsInFilterScope({
          filterScope: scopes[column] }).
        filter((id) => chartId !== id);

        nonEmptyFilters[(0,_getDashboardFilterKey__WEBPACK_IMPORTED_MODULE_6__/* .getDashboardFilterKey */ .w)({ chartId, column })] = {
          values: columns[column],
          scope };

      }
    });

    return {
      ...result,
      ...nonEmptyFilters };

  }, {});
}

/***/ }),

/***/ 53046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getFilterConfigsFromFormdata)
/* harmony export */ });
/* harmony import */ var src_explore_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69856);
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
/* eslint-disable camelcase */


function getFilterConfigsFromFormdata(form_data = {}) {
  const {
    date_filter,
    filter_configs = [],
    show_druid_time_granularity,
    show_druid_time_origin,
    show_sqla_time_column,
    show_sqla_time_granularity } =
  form_data;
  let configs = filter_configs.reduce(
  ({ columns, labels }, config) => {
    let defaultValues = config[src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_CONFIG_ATTRIBUTES.DEFAULT_VALUE */ .ft.DEFAULT_VALUE];

    // treat empty string as null (no default value)
    if (defaultValues === '') {
      defaultValues = null;
    }

    // defaultValue could be ; separated values,
    // could be null or ''
    if (defaultValues && config[src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_CONFIG_ATTRIBUTES.MULTIPLE */ .ft.MULTIPLE]) {
      defaultValues = config.defaultValue.split(';');
    }

    const updatedColumns = {
      ...columns,
      [config.column]: config.vals || defaultValues };

    const updatedLabels = {
      ...labels,
      [config.column]: config.label };


    return {
      columns: updatedColumns,
      labels: updatedLabels };

  },
  { columns: {}, labels: {} });


  if (date_filter) {
    let updatedColumns = {
      ...configs.columns,
      [src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .TIME_FILTER_MAP.time_range */ .i2.time_range]: form_data.time_range };

    const updatedLabels = {
      ...configs.labels,
      ...Object.entries(src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .TIME_FILTER_MAP */ .i2).reduce(
      (map, [key, value]) => ({
        ...map,
        [value]: src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .TIME_FILTER_LABELS */ .m_[key] }),

      {}) };



    if (show_sqla_time_granularity) {
      updatedColumns = {
        ...updatedColumns,
        [src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .TIME_FILTER_MAP.time_grain_sqla */ .i2.time_grain_sqla]: form_data.time_grain_sqla };

    }

    if (show_sqla_time_column) {
      updatedColumns = {
        ...updatedColumns,
        [src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .TIME_FILTER_MAP.granularity_sqla */ .i2.granularity_sqla]: form_data.granularity_sqla };

    }

    if (show_druid_time_granularity) {
      updatedColumns = {
        ...updatedColumns,
        [src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .TIME_FILTER_MAP.granularity */ .i2.granularity]: form_data.granularity };

    }

    if (show_druid_time_origin) {
      updatedColumns = {
        ...updatedColumns,
        [src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .TIME_FILTER_MAP.druid_time_origin */ .i2.druid_time_origin]: form_data.druid_time_origin };

    }

    configs = {
      ...configs,
      columns: updatedColumns,
      labels: updatedLabels };

  }
  return configs;
}

/***/ }),

/***/ 28428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ entityFactory)
/* harmony export */ });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14670);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60650);
/* harmony import */ var _componentTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81255);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80621);
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







const typeToDefaultMetaData = {
  [_componentTypes__WEBPACK_IMPORTED_MODULE_1__/* .CHART_TYPE */ .dW]: { width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .GRID_DEFAULT_CHART_WIDTH */ .fw, height: 50 },
  [_componentTypes__WEBPACK_IMPORTED_MODULE_1__/* .COLUMN_TYPE */ .BA]: {
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .GRID_DEFAULT_CHART_WIDTH */ .fw,
    background: _constants__WEBPACK_IMPORTED_MODULE_2__/* .BACKGROUND_TRANSPARENT */ .HE },

  [_componentTypes__WEBPACK_IMPORTED_MODULE_1__/* .DIVIDER_TYPE */ .hE]: null,
  [_componentTypes__WEBPACK_IMPORTED_MODULE_1__/* .HEADER_TYPE */ .Nc]: {
    text: 'New header',
    headerSize: _constants__WEBPACK_IMPORTED_MODULE_2__/* .MEDIUM_HEADER */ .OE,
    background: _constants__WEBPACK_IMPORTED_MODULE_2__/* .BACKGROUND_TRANSPARENT */ .HE },

  [_componentTypes__WEBPACK_IMPORTED_MODULE_1__/* .MARKDOWN_TYPE */ .xh]: { width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .GRID_DEFAULT_CHART_WIDTH */ .fw, height: 50 },
  [_componentTypes__WEBPACK_IMPORTED_MODULE_1__/* .ROW_TYPE */ .Os]: { background: _constants__WEBPACK_IMPORTED_MODULE_2__/* .BACKGROUND_TRANSPARENT */ .HE },
  [_componentTypes__WEBPACK_IMPORTED_MODULE_1__/* .TABS_TYPE */ .yR]: null,
  [_componentTypes__WEBPACK_IMPORTED_MODULE_1__/* .TAB_TYPE */ .gn]: {
    text: '',
    defaultText: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__.t)('Tab title'),
    placeholder: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__.t)('Tab title') } };



function uuid(type) {
  return `${type}-${shortid__WEBPACK_IMPORTED_MODULE_0___default().generate()}`;
}

function entityFactory(type, meta, parents = []) {
  return {
    type,
    id: uuid(type),
    children: [],
    parents,
    meta: {
      ...typeToDefaultMetaData[type],
      ...meta } };


}

/***/ }),

/***/ 79069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CheckboxControl)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5872);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ControlHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93011);
/* harmony import */ var _components_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87253);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11965);
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
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func) };


const defaultProps = {
  value: false,
  onChange: () => {} };


const checkboxStyle = { paddingRight: '5px' };

class CheckboxControl extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  onChange() {
    this.props.onChange(!this.props.value);
  }

  renderCheckbox() {
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Checkbox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        onChange: this.onChange.bind(this),
        style: checkboxStyle,
        checked: !!this.props.value }));


  }

  render() {
    if (this.props.label) {
      return (
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ControlHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},
        this.props, {
          leftNode: this.renderCheckbox(),
          onClick: this.onChange.bind(this) })));


    }
    return this.renderCheckbox();
  }}

CheckboxControl.propTypes = propTypes;
CheckboxControl.defaultProps = defaultProps;

/***/ }),

/***/ 71119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColorSchemeControl)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5872);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11965);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23560);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33346);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58593);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60650);
/* harmony import */ var _ControlHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93011);
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
  description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  labelMargin: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  clearable: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  default: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  choices: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([
  prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().array)),
  (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]),

  schemes: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]),
  isLinear: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool) };


const defaultProps = {
  choices: [],
  schemes: {},
  clearable: false,
  onChange: () => {} };var _ref =  true ? { name: "kjime2", styles: "list-style:none;margin:0;padding:0;display:flex;align-items:center;& li{flex-basis:9px;height:10px;margin:9px 1px;}" } : 0;


class ColorSchemeControl extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.renderOption = this.renderOption.bind(this);
  }

  onChange(value) {
    this.props.onChange(value);
  }

  renderOption(value) {
    const { isLinear } = this.props;
    const currentScheme = this.schemes[value];

    // For categorical scheme, display all the colors
    // For sequential scheme, show 10 or interpolate to 10.
    // Sequential schemes usually have at most 10 colors.
    let colors = [];
    if (currentScheme) {
      colors = isLinear ? currentScheme.getColors(10) : currentScheme.colors;
    }

    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_5__/* .Tooltip */ .u, { id: `${currentScheme.id}-tooltip`, title: currentScheme.label },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
        css: _ref },














      colors.map((color, i) =>
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
        key: `${currentScheme.id}-${i}`,
        css: /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.css)({
          backgroundColor: color,
          border: `1px solid ${color === 'white' ? 'black' : color}` },  true ? "" : 0,  true ? "" : 0) }, "\xA0")))));








  }

  render() {
    const { schemes, choices } = this.props;
    // save parsed schemes for later
    this.schemes = lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(schemes) ? schemes() : schemes;

    const allColorOptions = (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(choices) ? choices() : choices).filter(
    (o) => o[0] !== 'SUPERSET_DEFAULT');

    const options = allColorOptions.map(([value]) => {var _this$schemes, _this$schemes$value;return {
        value,
        label: ((_this$schemes = this.schemes) == null ? void 0 : (_this$schemes$value = _this$schemes[value]) == null ? void 0 : _this$schemes$value.label) || value,
        customLabel: this.renderOption(value) };});


    let currentScheme =
    this.props.value || (
    this.props.default !== undefined ? this.props.default : undefined);

    if (currentScheme === 'SUPERSET_DEFAULT') {var _this$schemes2, _this$schemes2$SUPERS;
      currentScheme = (_this$schemes2 = this.schemes) == null ? void 0 : (_this$schemes2$SUPERS = _this$schemes2.SUPERSET_DEFAULT) == null ? void 0 : _this$schemes2$SUPERS.id;
    }

    const selectProps = {
      ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Select color scheme'),
      allowClear: this.props.clearable,
      name: `select-${this.props.name}`,
      onChange: this.onChange,
      options,
      placeholder: `Select (${options.length})`,
      value: currentScheme };

    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components__WEBPACK_IMPORTED_MODULE_4__/* .Select */ .P, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ header: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ControlHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, this.props) }, selectProps)));

  }}


ColorSchemeControl.propTypes = propTypes;
ColorSchemeControl.defaultProps = defaultProps;

/***/ }),

/***/ 28543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vq": () => (/* binding */ EXPRESSION_TYPES),
/* harmony export */   "Pr": () => (/* binding */ CLAUSES),
/* harmony export */   "ZP": () => (/* binding */ AdhocFilter)
/* harmony export */ });
/* harmony import */ var src_explore_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69856);
/* harmony import */ var src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12515);
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



const EXPRESSION_TYPES = {
  SIMPLE: 'SIMPLE',
  SQL: 'SQL' };


const CLAUSES = {
  HAVING: 'HAVING',
  WHERE: 'WHERE' };


const OPERATORS_TO_SQL = {
  '==': '=',
  '!=': '<>',
  '>': '>',
  '<': '<',
  '>=': '>=',
  '<=': '<=',
  IN: 'IN',
  'NOT IN': 'NOT IN',
  LIKE: 'LIKE',
  ILIKE: 'ILIKE',
  REGEX: 'REGEX',
  'IS NOT NULL': 'IS NOT NULL',
  'IS NULL': 'IS NULL',
  'IS TRUE': 'IS TRUE',
  'IS FALSE': 'IS FALSE',
  'LATEST PARTITION': ({ datasource }) =>
  `= '{{ presto.latest_partition('${datasource.schema}.${datasource.datasource_name}') }}'` };


const CUSTOM_OPERATIONS = [...src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .CUSTOM_OPERATORS */ .qB].map(
(op) => src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .OPERATOR_ENUM_TO_OPERATOR_TYPE */ .LT[op].operation);


function translateToSql(adhocMetric, { useSimple } = {}) {
  if (adhocMetric.expressionType === EXPRESSION_TYPES.SIMPLE || useSimple) {
    const { subject, comparator } = adhocMetric;
    const operator =
    adhocMetric.operator &&
    CUSTOM_OPERATIONS.indexOf(adhocMetric.operator) >= 0 ?
    OPERATORS_TO_SQL[adhocMetric.operator](adhocMetric) :
    OPERATORS_TO_SQL[adhocMetric.operator];
    return (0,src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_1__/* .getSimpleSQLExpression */ .CB)(subject, operator, comparator);
  }
  if (adhocMetric.expressionType === EXPRESSION_TYPES.SQL) {
    return adhocMetric.sqlExpression;
  }
  return '';
}

class AdhocFilter {
  constructor(adhocFilter) {
    this.expressionType = adhocFilter.expressionType || EXPRESSION_TYPES.SIMPLE;
    if (this.expressionType === EXPRESSION_TYPES.SIMPLE) {var _adhocFilter$operator;
      this.subject = adhocFilter.subject;
      this.operator = (_adhocFilter$operator = adhocFilter.operator) == null ? void 0 : _adhocFilter$operator.toUpperCase();
      this.operatorId = adhocFilter.operatorId;
      this.comparator = adhocFilter.comparator;
      if (
      [src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .Operators.IS_TRUE */ .d.IS_TRUE, src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .Operators.IS_FALSE */ .d.IS_FALSE].indexOf(
      adhocFilter.operatorId) >=
      0)
      {
        this.comparator = adhocFilter.operatorId === src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .Operators.IS_TRUE */ .d.IS_TRUE;
      }
      if (
      [src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .Operators.IS_NULL */ .d.IS_NULL, src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .Operators.IS_NOT_NULL */ .d.IS_NOT_NULL].indexOf(
      adhocFilter.operatorId) >=
      0)
      {
        this.comparator = null;
      }
      this.clause = adhocFilter.clause || CLAUSES.WHERE;
      this.sqlExpression = null;
    } else if (this.expressionType === EXPRESSION_TYPES.SQL) {
      this.sqlExpression =
      typeof adhocFilter.sqlExpression === 'string' ?
      adhocFilter.sqlExpression :
      translateToSql(adhocFilter, { useSimple: true });
      this.clause = adhocFilter.clause;
      if (
      adhocFilter.operator &&
      CUSTOM_OPERATIONS.indexOf(adhocFilter.operator) >= 0)
      {
        this.subject = adhocFilter.subject;
        this.operator = adhocFilter.operator;
        this.operatorId = adhocFilter.operatorId;
      } else {
        this.subject = null;
        this.operator = null;
      }
      this.comparator = null;
    }
    this.isExtra = !!adhocFilter.isExtra;
    this.isNew = !!adhocFilter.isNew;

    this.filterOptionName =
    adhocFilter.filterOptionName ||
    `filter_${Math.random().
    toString(36).
    substring(2, 15)}_${Math.random().toString(36).substring(2, 15)}`;
  }

  duplicateWith(nextFields) {
    return new AdhocFilter({
      ...this,
      // all duplicated fields are not new (i.e. will not open popup automatically)
      isNew: false,
      ...nextFields });

  }

  equals(adhocFilter) {
    return (
      adhocFilter.expressionType === this.expressionType &&
      adhocFilter.sqlExpression === this.sqlExpression &&
      adhocFilter.operator === this.operator &&
      adhocFilter.operatorId === this.operatorId &&
      adhocFilter.comparator === this.comparator &&
      adhocFilter.subject === this.subject);

  }

  isValid() {
    const nullCheckOperators = [src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .Operators.IS_NOT_NULL */ .d.IS_NOT_NULL, src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .Operators.IS_NULL */ .d.IS_NULL].map(
    (op) => src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .OPERATOR_ENUM_TO_OPERATOR_TYPE */ .LT[op].operation);

    const truthCheckOperators = [src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .Operators.IS_TRUE */ .d.IS_TRUE, src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .Operators.IS_FALSE */ .d.IS_FALSE].map(
    (op) => src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .OPERATOR_ENUM_TO_OPERATOR_TYPE */ .LT[op].operation);

    if (this.expressionType === EXPRESSION_TYPES.SIMPLE) {
      if (nullCheckOperators.indexOf(this.operator) >= 0) {
        return !!(this.operator && this.subject);
      }
      if (truthCheckOperators.indexOf(this.operator) >= 0) {
        return !!(this.subject && this.comparator !== null);
      }
      if (this.operator && this.subject && this.clause) {
        if (Array.isArray(this.comparator)) {
          if (this.comparator.length > 0) {
            // A non-empty array of values ('IN' or 'NOT IN' clauses)
            return true;
          }
        } else if (this.comparator !== null) {
          // A value has been selected or typed
          return true;
        }
      }
    } else if (this.expressionType === EXPRESSION_TYPES.SQL) {
      return !!(this.sqlExpression && this.clause);
    }
    return false;
  }

  getDefaultLabel() {
    const label = this.translateToSql();
    return label.length < 43 ? label : `${label.substring(0, 40)}...`;
  }

  getTooltipTitle() {
    return this.translateToSql();
  }

  translateToSql() {
    return translateToSql(this);
  }}

/***/ }),

/***/ 46566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FilterControl_AdhocFilterControl)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/logging.js
var logging = __webpack_require__(23099);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/ensureIsArray.js
var ensureIsArray = __webpack_require__(86852);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js + 2 modules
var emotion_element_99289b21_browser_esm = __webpack_require__(68135);
// EXTERNAL MODULE: ./src/explore/components/ControlHeader.jsx
var ControlHeader = __webpack_require__(93011);
// EXTERNAL MODULE: ./src/explore/components/controls/MetricControl/adhocMetricType.js
var adhocMetricType = __webpack_require__(17536);
// EXTERNAL MODULE: ./src/explore/components/controls/MetricControl/savedMetricType.js
var savedMetricType = __webpack_require__(27130);
// EXTERNAL MODULE: ./src/explore/components/controls/MetricControl/AdhocMetric.js
var AdhocMetric = __webpack_require__(19113);
// EXTERNAL MODULE: ./src/explore/constants.ts
var constants = __webpack_require__(69856);
// EXTERNAL MODULE: ./src/explore/components/controls/MetricControl/FilterDefinitionOption.jsx
var FilterDefinitionOption = __webpack_require__(40266);
// EXTERNAL MODULE: ./src/explore/components/controls/OptionControls/index.tsx
var OptionControls = __webpack_require__(33334);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/explore/components/controls/FilterControl/AdhocFilterPopoverTrigger/index.tsx + 3 modules
var AdhocFilterPopoverTrigger = __webpack_require__(94968);
// EXTERNAL MODULE: ./src/explore/components/DndItemType.ts
var DndItemType = __webpack_require__(42753);
// EXTERNAL MODULE: ./src/explore/components/controls/FilterControl/columnType.js
var columnType = __webpack_require__(72201);
// EXTERNAL MODULE: ./src/explore/components/controls/FilterControl/AdhocFilter/index.js
var AdhocFilter = __webpack_require__(28543);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/explore/components/controls/FilterControl/AdhocFilterOption/index.jsx
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
  adhocFilter: prop_types_default().instanceOf(AdhocFilter/* default */.ZP).isRequired,
  onFilterEdit: (prop_types_default()).func.isRequired,
  onRemoveFilter: (prop_types_default()).func,
  options: prop_types_default().arrayOf(
  prop_types_default().oneOfType([
  columnType/* default */.Z,
  prop_types_default().shape({ saved_metric_name: (prop_types_default()).string.isRequired }),
  adhocMetricType/* default */.Z])).

  isRequired,
  sections: prop_types_default().arrayOf((prop_types_default()).string),
  operators: prop_types_default().arrayOf((prop_types_default()).string),
  datasource: (prop_types_default()).object,
  partitionColumn: (prop_types_default()).string,
  onMoveLabel: (prop_types_default()).func,
  onDropLabel: (prop_types_default()).func,
  index: (prop_types_default()).number };


const AdhocFilterOption = ({
  adhocFilter,
  options,
  datasource,
  onFilterEdit,
  onRemoveFilter,
  partitionColumn,
  onMoveLabel,
  onDropLabel,
  index,
  sections,
  operators }) =>

(0,emotion_react_browser_esm.jsx)(AdhocFilterPopoverTrigger/* default */.Z, {
  sections: sections,
  operators: operators,
  adhocFilter: adhocFilter,
  options: options,
  datasource: datasource,
  onFilterEdit: onFilterEdit,
  partitionColumn: partitionColumn },

(0,emotion_react_browser_esm.jsx)(OptionControls/* OptionControlLabel */.yz, {
  label: adhocFilter.getDefaultLabel(),
  tooltipTitle: adhocFilter.getTooltipTitle(),
  onRemove: onRemoveFilter,
  onMoveLabel: onMoveLabel,
  onDropLabel: onDropLabel,
  index: index,
  type: DndItemType/* DndItemType.FilterOption */.g.FilterOption,
  withCaret: true,
  isExtra: adhocFilter.isExtra }));




/* harmony default export */ const FilterControl_AdhocFilterOption = (AdhocFilterOption);

AdhocFilterOption.propTypes = propTypes;
;// CONCATENATED MODULE: ./src/explore/components/controls/FilterControl/adhocFilterType.js
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



/* harmony default export */ const adhocFilterType = (prop_types_default().oneOfType([
prop_types_default().shape({
  expressionType: prop_types_default().oneOf([AdhocFilter/* EXPRESSION_TYPES.SIMPLE */.vq.SIMPLE]).isRequired,
  clause: prop_types_default().oneOf([AdhocFilter/* CLAUSES.HAVING */.Pr.HAVING, AdhocFilter/* CLAUSES.WHERE */.Pr.WHERE]).isRequired,
  subject: (prop_types_default()).string.isRequired,
  comparator: prop_types_default().oneOfType([
  (prop_types_default()).string,
  prop_types_default().arrayOf((prop_types_default()).string)]).
  isRequired }),

prop_types_default().shape({
  expressionType: prop_types_default().oneOf([AdhocFilter/* EXPRESSION_TYPES.SQL */.vq.SQL]).isRequired,
  clause: prop_types_default().oneOf([AdhocFilter/* CLAUSES.WHERE */.Pr.WHERE, AdhocFilter/* CLAUSES.HAVING */.Pr.HAVING]).isRequired,
  sqlExpression: (prop_types_default()).string.isRequired })]));
;// CONCATENATED MODULE: ./src/explore/components/controls/FilterControl/AdhocFilterControl/index.jsx
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


















const selectedMetricType = prop_types_default().oneOfType([
(prop_types_default()).string,
adhocMetricType/* default */.Z]);


const AdhocFilterControl_propTypes = {
  label: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).string]),
  name: (prop_types_default()).string,
  sections: prop_types_default().arrayOf((prop_types_default()).string),
  operators: prop_types_default().arrayOf((prop_types_default()).string),
  onChange: (prop_types_default()).func,
  value: prop_types_default().arrayOf(adhocFilterType),
  datasource: (prop_types_default()).object,
  columns: prop_types_default().arrayOf(columnType/* default */.Z),
  savedMetrics: prop_types_default().arrayOf(savedMetricType/* default */.Z),
  selectedMetrics: prop_types_default().oneOfType([
  selectedMetricType,
  prop_types_default().arrayOf(selectedMetricType)]),

  isLoading: (prop_types_default()).bool };


const defaultProps = {
  name: '',
  onChange: () => {},
  columns: [],
  savedMetrics: [],
  selectedMetrics: [] };


function isDictionaryForAdhocFilter(value) {
  return value && !(value instanceof AdhocFilter/* default */.ZP) && value.expressionType;
}

class AdhocFilterControl extends react.Component {
  constructor(props) {
    super(props);
    this.optionsForSelect = this.optionsForSelect.bind(this);
    this.onRemoveFilter = this.onRemoveFilter.bind(this);
    this.onNewFilter = this.onNewFilter.bind(this);
    this.onFilterEdit = this.onFilterEdit.bind(this);
    this.moveLabel = this.moveLabel.bind(this);
    this.onChange = this.onChange.bind(this);
    this.mapOption = this.mapOption.bind(this);
    this.getMetricExpression = this.getMetricExpression.bind(this);

    const filters = (this.props.value || []).map((filter) =>
    isDictionaryForAdhocFilter(filter) ? new AdhocFilter/* default */.ZP(filter) : filter);


    this.optionRenderer = (option) => (0,emotion_react_browser_esm.jsx)(FilterDefinitionOption/* default */.Z, { option: option });
    this.valueRenderer = (adhocFilter, index) =>
    (0,emotion_react_browser_esm.jsx)(FilterControl_AdhocFilterOption, {
      key: index,
      index: index,
      adhocFilter: adhocFilter,
      onFilterEdit: this.onFilterEdit,
      options: this.state.options,
      sections: this.props.sections,
      operators: this.props.operators,
      datasource: this.props.datasource,
      onRemoveFilter: () => this.onRemoveFilter(index),
      onMoveLabel: this.moveLabel,
      onDropLabel: () => this.props.onChange(this.state.values),
      partitionColumn: this.state.partitionColumn });


    this.state = {
      values: filters,
      options: this.optionsForSelect(this.props),
      partitionColumn: null };

  }

  componentDidMount() {
    const { datasource } = this.props;
    if (datasource && datasource.type === 'table') {var _datasource$database;
      const dbId = (_datasource$database = datasource.database) == null ? void 0 : _datasource$database.id;
      const {
        datasource_name: name,
        schema,
        is_sqllab_view: isSqllabView } =
      datasource;

      if (!isSqllabView && dbId && name && schema) {
        SupersetClient/* default.get */.Z.get({
          endpoint: `/superset/extra_table_metadata/${dbId}/${name}/${schema}/` }).

        then(({ json }) => {
          if (json && json.partitions) {
            const { partitions } = json;
            // for now only show latest_partition option
            // when table datasource has only 1 partition key.
            if (
            partitions &&
            partitions.cols &&
            Object.keys(partitions.cols).length === 1)
            {
              this.setState({ partitionColumn: partitions.cols[0] });
            }
          }
        }).
        catch((error) => {
          logging/* default.error */.Z.error('fetch extra_table_metadata:', error.statusText);
        });
      }
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.columns !== nextProps.columns) {
      this.setState({ options: this.optionsForSelect(nextProps) });
    }
    if (this.props.value !== nextProps.value) {
      this.setState({
        values: (nextProps.value || []).map((filter) =>
        isDictionaryForAdhocFilter(filter) ? new AdhocFilter/* default */.ZP(filter) : filter) });


    }
  }

  onRemoveFilter(index) {
    const valuesCopy = [...this.state.values];
    valuesCopy.splice(index, 1);
    this.setState((prevState) => ({
      ...prevState,
      values: valuesCopy }));

    this.props.onChange(valuesCopy);
  }

  onNewFilter(newFilter) {
    const mappedOption = this.mapOption(newFilter);
    if (mappedOption) {
      this.setState(
      (prevState) => ({
        ...prevState,
        values: [...prevState.values, mappedOption] }),

      () => {
        this.props.onChange(this.state.values);
      });

    }
  }

  onFilterEdit(changedFilter) {
    this.props.onChange(
    this.state.values.map((value) => {
      if (value.filterOptionName === changedFilter.filterOptionName) {
        return changedFilter;
      }
      return value;
    }));

  }

  onChange(opts) {
    const options = (opts || []).
    map((option) => this.mapOption(option)).
    filter((option) => option);
    this.props.onChange(options);
  }

  getMetricExpression(savedMetricName) {
    return this.props.savedMetrics.find(
    (savedMetric) => savedMetric.metric_name === savedMetricName).
    expression;
  }

  moveLabel(dragIndex, hoverIndex) {
    const { values } = this.state;

    const newValues = [...values];
    [newValues[hoverIndex], newValues[dragIndex]] = [
    newValues[dragIndex],
    newValues[hoverIndex]];

    this.setState({ values: newValues });
  }

  mapOption(option) {
    // already a AdhocFilter, skip
    if (option instanceof AdhocFilter/* default */.ZP) {
      return option;
    }
    // via datasource saved metric
    if (option.saved_metric_name) {
      return new AdhocFilter/* default */.ZP({
        expressionType:
        this.props.datasource.type === 'druid' ?
        AdhocFilter/* EXPRESSION_TYPES.SIMPLE */.vq.SIMPLE :
        AdhocFilter/* EXPRESSION_TYPES.SQL */.vq.SQL,
        subject:
        this.props.datasource.type === 'druid' ?
        option.saved_metric_name :
        this.getMetricExpression(option.saved_metric_name),
        operator:
        constants/* OPERATOR_ENUM_TO_OPERATOR_TYPE */.LT[constants/* Operators.GREATER_THAN */.d.GREATER_THAN].operation,
        comparator: 0,
        clause: AdhocFilter/* CLAUSES.HAVING */.Pr.HAVING });

    }
    // has a custom label, meaning it's custom column
    if (option.label) {
      return new AdhocFilter/* default */.ZP({
        expressionType:
        this.props.datasource.type === 'druid' ?
        AdhocFilter/* EXPRESSION_TYPES.SIMPLE */.vq.SIMPLE :
        AdhocFilter/* EXPRESSION_TYPES.SQL */.vq.SQL,
        subject:
        this.props.datasource.type === 'druid' ?
        option.label :
        new AdhocMetric/* default */.Z(option).translateToSql(),
        operator:
        constants/* OPERATOR_ENUM_TO_OPERATOR_TYPE */.LT[constants/* Operators.GREATER_THAN */.d.GREATER_THAN].operation,
        comparator: 0,
        clause: AdhocFilter/* CLAUSES.HAVING */.Pr.HAVING });

    }
    // add a new filter item
    if (option.column_name) {
      return new AdhocFilter/* default */.ZP({
        expressionType: AdhocFilter/* EXPRESSION_TYPES.SIMPLE */.vq.SIMPLE,
        subject: option.column_name,
        operator: constants/* OPERATOR_ENUM_TO_OPERATOR_TYPE */.LT[constants/* Operators.EQUALS */.d.EQUALS].operation,
        comparator: '',
        clause: AdhocFilter/* CLAUSES.WHERE */.Pr.WHERE,
        isNew: true });

    }
    return null;
  }

  optionsForSelect(props) {
    const options = [
    ...props.columns,
    ...(0,ensureIsArray/* default */.Z)(props.selectedMetrics).map(
    (metric) =>
    metric && (
    typeof metric === 'string' ?
    { saved_metric_name: metric } :
    new AdhocMetric/* default */.Z(metric)))].

    filter((option) => option);

    return options.
    reduce((results, option) => {
      if (option.saved_metric_name) {
        results.push({
          ...option,
          filterOptionName: option.saved_metric_name });

      } else if (option.column_name) {
        results.push({
          ...option,
          filterOptionName: `_col_${option.column_name}` });

      } else if (option instanceof AdhocMetric/* default */.Z) {
        results.push({
          ...option,
          filterOptionName: `_adhocmetric_${option.label}` });

      }
      return results;
    }, []).
    sort((a, b) =>
    (a.saved_metric_name || a.column_name || a.label).localeCompare(
    b.saved_metric_name || b.column_name || b.label));


  }

  addNewFilterPopoverTrigger(trigger) {
    return (
      (0,emotion_react_browser_esm.jsx)(AdhocFilterPopoverTrigger/* default */.Z, {
        operators: this.props.operators,
        sections: this.props.sections,
        adhocFilter: new AdhocFilter/* default */.ZP({}),
        datasource: this.props.datasource,
        options: this.state.options,
        onFilterEdit: this.onNewFilter,
        partitionColumn: this.state.partitionColumn },

      trigger));


  }

  render() {
    const { theme } = this.props;
    return (
      (0,emotion_react_browser_esm.jsx)("div", { className: "metrics-select" },
      (0,emotion_react_browser_esm.jsx)(OptionControls/* HeaderContainer */.gM, null,
      (0,emotion_react_browser_esm.jsx)(ControlHeader/* default */.Z, this.props),
      this.addNewFilterPopoverTrigger(
      (0,emotion_react_browser_esm.jsx)(OptionControls/* AddIconButton */.IG, null,
      (0,emotion_react_browser_esm.jsx)(Icons/* default.PlusLarge */.Z.PlusLarge, {
        iconSize: "s",
        iconColor: theme.colors.grayscale.light5 })))),




      (0,emotion_react_browser_esm.jsx)(OptionControls/* LabelsContainer */.yj, null,
      this.state.values.length > 0 ?
      this.state.values.map((value, index) =>
      this.valueRenderer(value, index)) :

      this.addNewFilterPopoverTrigger(
      (0,emotion_react_browser_esm.jsx)(OptionControls/* AddControlLabel */.SW, null,
      (0,emotion_react_browser_esm.jsx)(Icons/* default.PlusSmall */.Z.PlusSmall, { iconColor: theme.colors.grayscale.light1 }),
      (0,TranslatorSingleton.t)('Add filter'))))));





  }}


AdhocFilterControl.propTypes = AdhocFilterControl_propTypes;
AdhocFilterControl.defaultProps = defaultProps;

/* harmony default export */ const FilterControl_AdhocFilterControl = ((0,emotion_element_99289b21_browser_esm.b)(AdhocFilterControl));

/***/ }),

/***/ 72201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  column_name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string) }));

/***/ }),

/***/ 19113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ EXPRESSION_TYPES),
/* harmony export */   "Z": () => (/* binding */ AdhocMetric)
/* harmony export */ });
/* harmony import */ var src_explore_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69856);
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


const EXPRESSION_TYPES = {
  SIMPLE: 'SIMPLE',
  SQL: 'SQL' };


function inferSqlExpressionColumn(adhocMetric) {
  if (
  adhocMetric.sqlExpression &&
  src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .sqlaAutoGeneratedMetricRegex.test */ .Q_.test(adhocMetric.sqlExpression))
  {
    const indexFirstCloseParen = adhocMetric.sqlExpression.indexOf(')');
    const indexPairedOpenParen = adhocMetric.sqlExpression.
    substring(0, indexFirstCloseParen).
    lastIndexOf('(');
    if (indexFirstCloseParen > 0 && indexPairedOpenParen > 0) {
      return adhocMetric.sqlExpression.substring(
      indexPairedOpenParen + 1,
      indexFirstCloseParen);

    }
  }
  return null;
}

function inferSqlExpressionAggregate(adhocMetric) {
  if (
  adhocMetric.sqlExpression &&
  src_explore_constants__WEBPACK_IMPORTED_MODULE_0__/* .sqlaAutoGeneratedMetricRegex.test */ .Q_.test(adhocMetric.sqlExpression))
  {
    const indexFirstOpenParen = adhocMetric.sqlExpression.indexOf('(');
    if (indexFirstOpenParen > 0) {
      return adhocMetric.sqlExpression.substring(0, indexFirstOpenParen);
    }
  }
  return null;
}

class AdhocMetric {
  constructor(adhocMetric) {
    this.expressionType = adhocMetric.expressionType || EXPRESSION_TYPES.SIMPLE;
    if (this.expressionType === EXPRESSION_TYPES.SIMPLE) {
      // try to be clever in the case of transitioning from Sql expression back to simple expression
      const inferredColumn = inferSqlExpressionColumn(adhocMetric);
      this.column =
      adhocMetric.column ||
      inferredColumn && { column_name: inferredColumn };
      this.aggregate =
      adhocMetric.aggregate || inferSqlExpressionAggregate(adhocMetric);
      this.sqlExpression = null;
    } else if (this.expressionType === EXPRESSION_TYPES.SQL) {
      this.sqlExpression = adhocMetric.sqlExpression;
      this.column = null;
      this.aggregate = null;
    }
    this.isNew = !!adhocMetric.isNew;
    this.hasCustomLabel = !!(adhocMetric.hasCustomLabel && adhocMetric.label);
    this.label = this.hasCustomLabel ?
    adhocMetric.label :
    this.getDefaultLabel();

    this.optionName =
    adhocMetric.optionName ||
    `metric_${Math.random().
    toString(36).
    substring(2, 15)}_${Math.random().toString(36).substring(2, 15)}`;
  }

  getDefaultLabel() {
    const label = this.translateToSql(true);
    return label.length < 43 ? label : `${label.substring(0, 40)}...`;
  }

  translateToSql(useVerboseName = false) {
    if (this.expressionType === EXPRESSION_TYPES.SIMPLE) {var _this$column, _this$column2;
      const aggregate = this.aggregate || '';
      // eslint-disable-next-line camelcase
      const column =
      useVerboseName && (_this$column = this.column) != null && _this$column.verbose_name ?
      `(${this.column.verbose_name})` :
      (_this$column2 = this.column) != null && _this$column2.column_name ?
      `(${this.column.column_name})` :
      '';
      return aggregate + column;
    }
    if (this.expressionType === EXPRESSION_TYPES.SQL) {
      return this.sqlExpression;
    }
    return '';
  }

  duplicateWith(nextFields) {
    return new AdhocMetric({
      ...this,
      // all duplicate metrics are not considered new by default
      isNew: false,
      // but still overriddable by nextFields
      ...nextFields });

  }

  equals(adhocMetric) {
    return (
      adhocMetric.label === this.label &&
      adhocMetric.expressionType === this.expressionType &&
      adhocMetric.sqlExpression === this.sqlExpression &&
      adhocMetric.aggregate === this.aggregate &&
      (adhocMetric.column && adhocMetric.column.column_name) === (
      this.column && this.column.column_name));

  }

  isValid() {
    if (this.expressionType === EXPRESSION_TYPES.SIMPLE) {
      return !!(this.column && this.aggregate);
    }
    if (this.expressionType === EXPRESSION_TYPES.SQL) {
      return !!this.sqlExpression;
    }
    return false;
  }

  inferSqlExpressionAggregate() {
    return inferSqlExpressionAggregate(this);
  }

  inferSqlExpressionColumn() {
    return inferSqlExpressionColumn(this);
  }}

/***/ }),

/***/ 40266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FilterDefinitionOption)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _columnType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34087);
/* harmony import */ var _adhocMetricType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17536);
/* harmony import */ var _optionRenderers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99963);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11965);
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
  option: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
  _columnType__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({ saved_metric_name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired) }),
  _adhocMetricType__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z]).
  isRequired };


function FilterDefinitionOption({ option }) {
  if (option.saved_metric_name) {
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_optionRenderers__WEBPACK_IMPORTED_MODULE_4__/* .StyledColumnOption */ .l, {
        column: { column_name: option.saved_metric_name, type: 'expression' },
        showType: true }));


  }
  if (option.column_name) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_optionRenderers__WEBPACK_IMPORTED_MODULE_4__/* .StyledColumnOption */ .l, { column: option, showType: true });
  }
  if (option.label) {
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_optionRenderers__WEBPACK_IMPORTED_MODULE_4__/* .StyledColumnOption */ .l, {
        column: { column_name: option.label, type: 'expression' },
        showType: true }));


  }
  return null;
}
FilterDefinitionOption.propTypes = propTypes;

/***/ }),

/***/ 17536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_explore_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69856);
/* harmony import */ var _columnType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34087);
/* harmony import */ var _AdhocMetric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19113);
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






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  expressionType: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf([_AdhocMetric__WEBPACK_IMPORTED_MODULE_3__/* .EXPRESSION_TYPES.SIMPLE */ .v.SIMPLE]).isRequired,
  column: _columnType__WEBPACK_IMPORTED_MODULE_2__/* ["default"].isRequired */ .Z.isRequired,
  aggregate: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(Object.keys(src_explore_constants__WEBPACK_IMPORTED_MODULE_1__/* .AGGREGATES */ .YY)).isRequired,
  label: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired) }),

prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  expressionType: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf([_AdhocMetric__WEBPACK_IMPORTED_MODULE_3__/* .EXPRESSION_TYPES.SQL */ .v.SQL]).isRequired,
  sqlExpression: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired) })]));

/***/ }),

/***/ 34087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  column_name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string) }));

/***/ }),

/***/ 27130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  metric_name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  verbose_name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  expression: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired) }));

/***/ }),

/***/ 82199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SelectControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11965);
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33346);
/* harmony import */ var src_explore_components_ControlHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93011);
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
  ariaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  choices: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  clearable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  freeForm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  multi: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isMulti: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
  (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]),

  default: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
  (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]),

  showHeader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  optionRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  valueKey: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  filterOption: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  // ControlHeader props
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  renderTrigger: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  validationErrors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  rightNode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  leftNode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  hovered: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  tooltipOnClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  warning: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  danger: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string) };


const defaultProps = {
  autoFocus: false,
  choices: [],
  clearable: true,
  description: null,
  disabled: false,
  freeForm: false,
  isLoading: false,
  label: null,
  multi: false,
  onChange: () => {},
  onFocus: () => {},
  showHeader: true,
  valueKey: 'value' };


class SelectControl extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      options: this.getOptions(props) };

    this.onChange = this.onChange.bind(this);
    this.handleFilterOptions = this.handleFilterOptions.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
    nextProps.choices !== this.props.choices ||
    nextProps.options !== this.props.options)
    {
      const options = this.getOptions(nextProps);
      this.setState({ options });
    }
  }

  // Beware: This is acting like an on-click instead of an on-change
  // (firing every time user chooses vs firing only if a new option is chosen).
  onChange(val) {
    // will eventually call `exploreReducer`: SET_FIELD_VALUE
    const { valueKey } = this.props;
    let onChangeVal = val;

    if (Array.isArray(val)) {
      const values = val.map((v) => (v == null ? void 0 : v[valueKey]) || v);
      onChangeVal = values;
    }
    if (typeof val === 'object' && val != null && val[valueKey]) {
      onChangeVal = val[valueKey];
    }
    this.props.onChange(onChangeVal, []);
  }

  getOptions(props) {
    const { choices, optionRenderer, valueKey } = props;
    let options = [];
    if (props.options) {
      options = props.options.map((o) => ({
        ...o,
        value: o[valueKey],
        label: o.label || o[valueKey],
        customLabel: optionRenderer ? optionRenderer(o) : undefined }));

    } else if (choices) {
      // Accepts different formats of input
      options = choices.map((c) => {
        if (Array.isArray(c)) {
          const [value, label] = c.length > 1 ? c : [c[0], c[0]];
          return {
            value,
            label };

        }
        if (Object.is(c)) {
          return {
            ...c,
            value: c[valueKey],
            label: c.label || c[valueKey] };

        }
        return { value: c, label: c };
      });
    }
    return options;
  }

  handleFilterOptions(text, option) {
    const { filterOption } = this.props;
    return filterOption({ data: option }, text);
  }

  render() {
    const {
      ariaLabel,
      autoFocus,
      clearable,
      disabled,
      filterOption,
      freeForm,
      isLoading,
      isMulti,
      label,
      multi,
      name,
      placeholder,
      onFocus,
      optionRenderer,
      showHeader,
      value,
      // ControlHeader props
      description,
      renderTrigger,
      rightNode,
      leftNode,
      validationErrors,
      onClick,
      hovered,
      tooltipOnClick,
      warning,
      danger } =
    this.props;

    const headerProps = {
      name,
      label,
      description,
      renderTrigger,
      rightNode,
      leftNode,
      validationErrors,
      onClick,
      hovered,
      tooltipOnClick,
      warning,
      danger };


    const getValue = () => {
      const currentValue =
      value || (
      this.props.default !== undefined ? this.props.default : undefined);

      // safety check - the value is intended to be undefined but null was used
      if (
      currentValue === null &&
      !this.state.options.find((o) => o.value === null))
      {
        return undefined;
      }
      return currentValue;
    };

    const selectProps = {
      allowNewOptions: freeForm,
      autoFocus,
      ariaLabel:
      ariaLabel || (typeof label === 'string' ? label : (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('Select ...')),
      allowClear: clearable,
      disabled,
      filterOption:
      filterOption && typeof filterOption === 'function' ?
      this.handleFilterOptions :
      true,
      header: showHeader && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_explore_components_ControlHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, headerProps),
      loading: isLoading,
      mode: isMulti || multi ? 'multiple' : 'single',
      name: `select-${name}`,
      onChange: this.onChange,
      onFocus,
      optionRenderer,
      options: this.state.options,
      placeholder,
      value: getValue() };


    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        css: (theme) => _emotion_react__WEBPACK_IMPORTED_MODULE_5__.css`
          .type-label {
            margin-right: ${theme.gridUnit * 2}px;
          }
          .Select__multi-value__label > span,
          .Select__option > span,
          .Select__single-value > span {
            display: flex;
            align-items: center;
          }
        ` },

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components__WEBPACK_IMPORTED_MODULE_2__/* .Select */ .P, selectProps)));


  }}


SelectControl.propTypes = propTypes;
SelectControl.defaultProps = defaultProps;

/***/ }),

/***/ 665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SpatialControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82191);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60650);
/* harmony import */ var src_components_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37921);
/* harmony import */ var src_components_Popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76697);
/* harmony import */ var src_components_PopoverSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83734);
/* harmony import */ var src_components_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87253);
/* harmony import */ var _ControlHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93011);
/* harmony import */ var _SelectControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82199);
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












const spatialTypes = {
  latlong: 'latlong',
  delimited: 'delimited',
  geohash: 'geohash' };


const propTypes = {
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  animation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  choices: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array) };


const defaultProps = {
  onChange: () => {},
  animation: true,
  choices: [] };


class SpatialControl extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    const v = props.value || {};
    let defaultCol;
    if (props.choices.length > 0) {
      defaultCol = props.choices[0][0];
    }
    this.state = {
      type: v.type || spatialTypes.latlong,
      delimiter: v.delimiter || ',',
      latCol: v.latCol || defaultCol,
      lonCol: v.lonCol || defaultCol,
      lonlatCol: v.lonlatCol || defaultCol,
      reverseCheckbox: v.reverseCheckbox || false,
      geohashCol: v.geohashCol || defaultCol,
      value: null,
      errors: [] };

    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.onChange = this.onChange.bind(this);
    this.renderReverseCheckbox = this.renderReverseCheckbox.bind(this);
  }

  componentDidMount() {
    this.onChange();
  }

  onChange() {
    const { type } = this.state;
    const value = { type };
    const errors = [];
    const errMsg = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Invalid lat/long configuration.');
    if (type === spatialTypes.latlong) {
      value.latCol = this.state.latCol;
      value.lonCol = this.state.lonCol;
      if (!value.lonCol || !value.latCol) {
        errors.push(errMsg);
      }
    } else if (type === spatialTypes.delimited) {
      value.lonlatCol = this.state.lonlatCol;
      value.delimiter = this.state.delimiter;
      value.reverseCheckbox = this.state.reverseCheckbox;
      if (!value.lonlatCol || !value.delimiter) {
        errors.push(errMsg);
      }
    } else if (type === spatialTypes.geohash) {
      value.geohashCol = this.state.geohashCol;
      value.reverseCheckbox = this.state.reverseCheckbox;
      if (!value.geohashCol) {
        errors.push(errMsg);
      }
    }
    this.setState({ value, errors });
    this.props.onChange(value, errors);
  }

  setType(type) {
    this.setState({ type }, this.onChange);
  }

  toggleCheckbox() {
    this.setState(
    (prevState) => ({ reverseCheckbox: !prevState.reverseCheckbox }),
    this.onChange);

  }

  renderLabelContent() {
    if (this.state.errors.length > 0) {
      return 'N/A';
    }
    if (this.state.type === spatialTypes.latlong) {
      return `${this.state.lonCol} | ${this.state.latCol}`;
    }
    if (this.state.type === spatialTypes.delimited) {
      return `${this.state.lonlatCol}`;
    }
    if (this.state.type === spatialTypes.geohash) {
      return `${this.state.geohashCol}`;
    }
    return null;
  }

  renderSelect(name, type) {
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SelectControl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        ariaLabel: name,
        name: name,
        choices: this.props.choices,
        value: this.state[name],
        clearable: false,
        onFocus: () => {
          this.setType(type);
        },
        onChange: (value) => {
          this.setState({ [name]: value }, this.onChange);
        } }));


  }

  renderReverseCheckbox() {
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", null,
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Reverse lat/long '),
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Checkbox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
        checked: this.state.reverseCheckbox,
        onChange: this.toggleCheckbox })));



  }

  renderPopoverContent() {
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { style: { width: '300px' } },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_PopoverSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Longitude & Latitude columns'),
        isSelected: this.state.type === spatialTypes.latlong,
        onSelect: this.setType.bind(this, spatialTypes.latlong) },

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .X2, { gutter: 16 },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, { xs: 24, md: 12 }, "Longitude",

      this.renderSelect('lonCol', spatialTypes.latlong)),

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, { xs: 24, md: 12 }, "Latitude",

      this.renderSelect('latCol', spatialTypes.latlong)))),



      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_PopoverSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Delimited long & lat single column'),
        info: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)(
        'Multiple formats accepted, look the geopy.points ' +
        'Python library for more details'),

        isSelected: this.state.type === spatialTypes.delimited,
        onSelect: this.setType.bind(this, spatialTypes.delimited) },

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .X2, { gutter: 16 },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, { xs: 24, md: 12 },
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Column'),
      this.renderSelect('lonlatCol', spatialTypes.delimited)),

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, { xs: 24, md: 12 },
      this.renderReverseCheckbox()))),



      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_PopoverSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Geohash'),
        isSelected: this.state.type === spatialTypes.geohash,
        onSelect: this.setType.bind(this, spatialTypes.geohash) },

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .X2, { gutter: 16 },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, { xs: 24, md: 12 }, "Column",

      this.renderSelect('geohashCol', spatialTypes.geohash)),

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, { xs: 24, md: 12 },
      this.renderReverseCheckbox())))));





  }

  render() {
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", null,
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ControlHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, this.props),
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Popover__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        content: this.renderPopoverContent(),
        placement: "topLeft" // so that popover doesn't move when label changes
        , trigger: "click" },

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Label__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, { className: "pointer" }, this.renderLabelContent()))));



  }}


SpatialControl.propTypes = propTypes;
SpatialControl.defaultProps = defaultProps;

/***/ }),

/***/ 42878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextAreaControl)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5872);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82191);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60650);
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35932);
/* harmony import */ var src_components_AsyncAceEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94670);
/* harmony import */ var src_components_ModalTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68073);
/* harmony import */ var src_explore_components_ControlHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93011);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11965);
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
  name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  initialValue: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  minLines: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  maxLines: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  offerEditInModal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  language: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([
  null,
  'json',
  'html',
  'sql',
  'markdown',
  'javascript']),

  aboveEditorSection: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool) };


const defaultProps = {
  onChange: () => {},
  initialValue: '',
  height: 250,
  minLines: 3,
  maxLines: 10,
  offerEditInModal: true,
  readOnly: false };


class TextAreaControl extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  onControlChange(event) {
    const { value } = event.target;
    this.props.onChange(value);
  }

  renderEditor(inModal = false) {
    const minLines = inModal ? 40 : this.props.minLines || 12;
    if (this.props.language) {
      const style = { border: '1px solid #CCC' };
      if (this.props.readOnly) {
        style.backgroundColor = '#f2f2f2';
      }
      return (
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(src_components_AsyncAceEditor__WEBPACK_IMPORTED_MODULE_5__/* .TextAreaEditor */ .YH, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          mode: this.props.language,
          style: style,
          minLines: minLines,
          maxLines: inModal ? 1000 : this.props.maxLines,
          onChange: this.props.onChange,
          width: "100%",
          height: `${minLines}em`,
          editorProps: { $blockScrolling: true },
          defaultValue: this.props.initialValue,
          readOnly: this.props.readOnly,
          key: this.props.name },
        this.props)));


    }
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_3__/* .TextArea */ .Kx, {
        placeholder: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('textarea'),
        onChange: this.onControlChange.bind(this),
        defaultValue: this.props.initialValue,
        disabled: this.props.readOnly,
        style: { height: this.props.height } }));


  }

  renderModalBody() {
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", null,
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", null, this.props.aboveEditorSection),
      this.renderEditor(true)));


  }

  render() {
    const controlHeader = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(src_explore_components_ControlHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, this.props);
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", null,
      controlHeader,
      this.renderEditor(),
      this.props.offerEditInModal &&
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(src_components_ModalTrigger__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        modalTitle: controlHeader,
        triggerNode:
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, { buttonSize: "small", className: "m-t-5" },
        (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Edit'), " ", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("strong", null, this.props.language), ' ',
        (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('in modal')),


        modalBody: this.renderModalBody(true),
        responsive: true })));




  }}


TextAreaControl.propTypes = propTypes;
TextAreaControl.defaultProps = defaultProps;

/***/ }),

/***/ 92252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ai": () => (/* binding */ controls)
/* harmony export */ });
/* unused harmony exports PRIMARY_COLOR, D3_FORMAT_OPTIONS, D3_FORMAT_DOCS, D3_TIME_FORMAT_OPTIONS, columnChoices */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34042);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67542);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60650);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42621);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12788);
/* harmony import */ var src_modules_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16737);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69856);
/* harmony import */ var _components_optionRenderers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99963);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11965);
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
 * This file exports all controls available for use in the different visualization types
 *
 * While the React components located in `controls/components` represent different
 * types of controls (CheckboxControl, SelectControl, TextControl, ...), the controls here
 * represent instances of control types, that can be reused across visualization types.
 *
 * When controls are reused across viz types, their values are carried over as a user
 * changes the chart types.
 *
 * While the keys defined in the control itself get passed to the controlType as props,
 * here's a list of the keys that are common to all controls, and as a result define the
 * control interface:
 *
 * - type: the control type, referencing a React component of the same name
 * - label: the label as shown in the control's header
 * - description: shown in the info tooltip of the control's header
 * - default: the default value when opening a new chart, or changing visualization type
 * - renderTrigger: a bool that defines whether the visualization should be re-rendered
     when changed. This should `true` for controls that only affect the rendering (client side)
     and don't affect the query or backend data processing as those require to re run a query
     and fetch the data
 * - validators: an array of functions that will receive the value of the component and
     should return error messages when the value is not valid. The error message gets
     bubbled up to the control header, section header and query panel header.
 * - warning: text shown as a tooltip on a warning icon in the control's header
 * - error: text shown as a tooltip on a error icon in the control's header
 * - mapStateToProps: a function that receives the App's state and return an object of k/v
     to overwrite configuration at runtime. This is useful to alter a component based on
     anything external to it, like another control's value. For instance it's possible to
     show a warning based on the value of another component. It's also possible to bind
     arbitrary data from the redux store to the component this way.
 * - tabOverride: set to 'data' if you want to force a renderTrigger to show up on the `Data`
     tab, otherwise `renderTrigger: true` components will show up on the `Style` tab.
 *
 * Note that the keys defined in controls in this file that are not listed above represent
 * props specific for the React component defined as `type`. Also note that this module work
 * in tandem with `controlPanels/index.js` that defines how controls are composed into sections for
 * each and every visualization type.
 */






const categoricalSchemeRegistry = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
const sequentialSchemeRegistry = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();

const PRIMARY_COLOR = { r: 0, g: 122, b: 135, a: 1 };

// input choices & options
const D3_FORMAT_OPTIONS = [
['SMART_NUMBER', 'Adaptative formating'],
['~g', 'Original value'],
[',d', ',d (12345.432 => 12,345)'],
['.1s', '.1s (12345.432 => 10k)'],
['.3s', '.3s (12345.432 => 12.3k)'],
[',.1%', ',.1% (12345.432 => 1,234,543.2%)'],
['.3%', '.3% (12345.432 => 1234543.200%)'],
['.4r', '.4r (12345.432 => 12350)'],
[',.3f', ',.3f (12345.432 => 12,345.432)'],
['+,', '+, (12345.432 => +12,345.432)'],
['$,.2f', '$,.2f (12345.432 => $12,345.43)'],
['DURATION', 'Duration in ms (66000 => 1m 6s)'],
['DURATION_SUB', 'Duration in ms (100.40008 => 100ms 400µs 80ns)']];


const ROW_LIMIT_OPTIONS = [10, 50, 100, 250, 500, 1000, 5000, 10000, 50000];

const SERIES_LIMITS = [0, 5, 10, 25, 50, 100, 500];

const D3_FORMAT_DOCS =
'D3 format syntax: https://github.com/d3/d3-format';

const D3_TIME_FORMAT_OPTIONS = (/* unused pure expression or super */ null && ([
['smart_date', 'Adaptative formating'],
['%d/%m/%Y', '%d/%m/%Y | 14/01/2019'],
['%m/%d/%Y', '%m/%d/%Y | 01/14/2019'],
['%Y-%m-%d', '%Y-%m-%d | 2019-01-14'],
['%Y-%m-%d %H:%M:%S', '%Y-%m-%d %H:%M:%S | 2019-01-14 01:32:10'],
['%d-%m-%Y %H:%M:%S', '%Y-%m-%d %H:%M:%S | 14-01-2019 01:32:10'],
['%H:%M:%S', '%H:%M:%S | 01:32:10']]));


const timeColumnOption = {
  verbose_name: 'Time',
  column_name: '__timestamp',
  description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)(
  'A reference to the [Time] configuration, taking granularity into ' +
  'account') };



const groupByControl = {
  type: 'SelectControl',
  multi: true,
  freeForm: true,
  label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Group by'),
  default: [],
  includeTime: false,
  description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('One or many controls to group by'),
  optionRenderer: (c) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_optionRenderers__WEBPACK_IMPORTED_MODULE_2__/* .StyledColumnOption */ .l, { column: c, showType: true }),
  valueKey: 'column_name',
  filterOption: ({ data: opt }, text) =>
  opt.column_name &&
  opt.column_name.toLowerCase().indexOf(text.toLowerCase()) >= 0 ||
  opt.verbose_name &&
  opt.verbose_name.toLowerCase().indexOf(text.toLowerCase()) >= 0,
  mapStateToProps: (state, control) => {
    const newState = {};
    if (state.datasource) {
      newState.options = state.datasource.columns.filter((c) => c.groupby);
      if (control && control.includeTime) {
        newState.options.push(timeColumnOption);
      }
    }
    return newState;
  } };


const metrics = {
  type: 'MetricsControl',
  multi: true,
  label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Metrics'),
  validators: [_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z],
  mapStateToProps: (state) => {
    const { datasource } = state;
    return {
      columns: datasource ? datasource.columns : [],
      savedMetrics: datasource ? datasource.metrics : [],
      datasourceType: datasource && datasource.type };

  },
  description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('One or many metrics to display') };

const metric = {
  ...metrics,
  multi: false,
  label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Metric'),
  description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Metric') };


function columnChoices(datasource) {
  if (datasource && datasource.columns) {
    return datasource.columns.
    map((col) => [col.column_name, col.verbose_name || col.column_name]).
    sort((opt1, opt2) =>
    opt1[1].toLowerCase() > opt2[1].toLowerCase() ? 1 : -1);

  }
  return [];
}

const controls = {
  metrics,

  metric,

  datasource: {
    type: 'DatasourceControl',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Dataset'),
    default: null,
    description: null,
    mapStateToProps: ({ datasource }) => ({
      datasource,
      isEditable: !!datasource }) },



  viz_type: {
    type: 'VizTypeControl',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Visualization type'),
    default: 'table',
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('The type of visualization to display') },


  color_picker: {
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Fixed color'),
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Use this to define a static color for all circles'),
    type: 'ColorPickerControl',
    default: PRIMARY_COLOR,
    renderTrigger: true },


  metric_2: {
    ...metric,
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Right axis metric'),
    clearable: true,
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Choose a metric for right axis') },


  linear_color_scheme: {
    type: 'ColorSchemeControl',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Linear color scheme'),
    choices: () =>
    sequentialSchemeRegistry.values().map((value) => [value.id, value.label]),
    default: sequentialSchemeRegistry.getDefaultKey(),
    clearable: false,
    description: '',
    renderTrigger: true,
    schemes: () => sequentialSchemeRegistry.getMap(),
    isLinear: true },


  secondary_metric: {
    ...metric,
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Color metric'),
    default: null,
    validators: [],
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('A metric to use for color') },


  groupby: groupByControl,

  columns: {
    ...groupByControl,
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Columns'),
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('One or many controls to pivot as columns') },


  druid_time_origin: {
    type: 'SelectControl',
    freeForm: true,
    label: _constants__WEBPACK_IMPORTED_MODULE_1__/* .TIME_FILTER_LABELS.druid_time_origin */ .m_.druid_time_origin,
    choices: [
    ['', 'default'],
    ['now', 'now']],

    default: null,
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)(
    'Defines the origin where time buckets start, ' +
    'accepts natural dates as in `now`, `sunday` or `1970-01-01`') },



  granularity: {
    type: 'SelectControl',
    freeForm: true,
    label: _constants__WEBPACK_IMPORTED_MODULE_1__/* .TIME_FILTER_LABELS.granularity */ .m_.granularity,
    default: 'P1D',
    choices: [
    [null, 'all'],
    ['PT5S', '5 seconds'],
    ['PT30S', '30 seconds'],
    ['PT1M', '1 minute'],
    ['PT5M', '5 minutes'],
    ['PT30M', '30 minutes'],
    ['PT1H', '1 hour'],
    ['PT6H', '6 hour'],
    ['P1D', '1 day'],
    ['P7D', '7 days'],
    ['P1W', 'week'],
    ['week_starting_sunday', 'week starting Sunday'],
    ['week_ending_saturday', 'week ending Saturday'],
    ['P1M', 'month'],
    ['P3M', 'quarter'],
    ['P1Y', 'year']],

    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)(
    'The time granularity for the visualization. Note that you ' +
    'can type and use simple natural language as in `10 seconds`, ' +
    '`1 day` or `56 weeks`') },



  granularity_sqla: {
    type: 'SelectControl',
    label: _constants__WEBPACK_IMPORTED_MODULE_1__/* .TIME_FILTER_LABELS.granularity_sqla */ .m_.granularity_sqla,
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)(
    'The time column for the visualization. Note that you ' +
    'can define arbitrary expression that return a DATETIME ' +
    'column in the table. Also note that the ' +
    'filter below is applied against this column or ' +
    'expression'),

    clearable: false,
    optionRenderer: (c) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_optionRenderers__WEBPACK_IMPORTED_MODULE_2__/* .StyledColumnOption */ .l, { column: c, showType: true }),
    valueKey: 'column_name',
    mapStateToProps: (state) => {
      const props = {};
      if (state.datasource) {
        props.choices = state.datasource.granularity_sqla;
        props.default = null;
        if (state.datasource.main_dttm_col) {
          props.default = state.datasource.main_dttm_col;
        } else if (props.choices && props.choices.length > 0) {
          props.default = props.choices[0].column_name;
        }
      }
      return props;
    } },


  time_grain_sqla: {
    type: 'SelectControl',
    label: _constants__WEBPACK_IMPORTED_MODULE_1__/* .TIME_FILTER_LABELS.time_grain_sqla */ .m_.time_grain_sqla,
    default: 'P1D',
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)(
    'The time granularity for the visualization. This ' +
    'applies a date transformation to alter ' +
    'your time column and defines a new time granularity. ' +
    'The options here are defined on a per database ' +
    'engine basis in the Superset source code.'),

    mapStateToProps: (state) => ({
      choices: state.datasource ? state.datasource.time_grain_sqla : null }) },



  time_range: {
    type: 'DateFilterControl',
    freeForm: true,
    label: _constants__WEBPACK_IMPORTED_MODULE_1__/* .TIME_FILTER_LABELS.time_range */ .m_.time_range,
    default: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('No filter'), // this value is translated, but the backend wouldn't understand a translated value?
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)(
    'The time range for the visualization. All relative times, e.g. "Last month", ' +
    '"Last 7 days", "now", etc. are evaluated on the server using the server\'s ' +
    'local time (sans timezone). All tooltips and placeholder times are expressed ' +
    'in UTC (sans timezone). The timestamps are then evaluated by the database ' +
    "using the engine's local timezone. Note one can explicitly set the timezone " +
    'per the ISO 8601 format if specifying either the start and/or end time.'),

    mapStateToProps: ({ form_data: formData }) => ({
      // eslint-disable-next-line camelcase
      endpoints: formData == null ? void 0 : formData.time_range_endpoints }) },



  row_limit: {
    type: 'SelectControl',
    freeForm: true,
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Row limit'),
    validators: [_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z],
    default: 10000,
    choices: (0,src_modules_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatSelectOptions */ .mG)(ROW_LIMIT_OPTIONS) },


  limit: {
    type: 'SelectControl',
    freeForm: true,
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Series limit'),
    validators: [_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z],
    choices: (0,src_modules_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatSelectOptions */ .mG)(SERIES_LIMITS),
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)(
    'Limits the number of time series that get displayed. A sub query ' +
    '(or an extra phase where sub queries are not supported) is applied to limit ' +
    'the number of time series that get fetched and displayed. This feature is useful ' +
    'when grouping by high cardinality dimension(s).') },



  timeseries_limit_metric: {
    type: 'MetricsControl',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Sort by'),
    default: null,
    clearable: true,
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Metric used to define the top series'),
    mapStateToProps: (state) => ({
      columns: state.datasource ? state.datasource.columns : [],
      savedMetrics: state.datasource ? state.datasource.metrics : [],
      datasourceType: state.datasource && state.datasource.type }) },



  series: {
    ...groupByControl,
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Series'),
    multi: false,
    default: null,
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)(
    'Defines the grouping of entities. ' +
    'Each series is shown as a specific color on the chart and ' +
    'has a legend toggle') },



  entity: {
    ...groupByControl,
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Entity'),
    default: null,
    multi: false,
    validators: [_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z],
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('This defines the element to be plotted on the chart') },


  x: {
    ...metric,
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('X Axis'),
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Metric assigned to the [X] axis'),
    default: null },


  y: {
    ...metric,
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Y Axis'),
    default: null,
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Metric assigned to the [Y] axis') },


  size: {
    ...metric,
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Bubble size'),
    default: null },


  y_axis_format: {
    type: 'SelectControl',
    freeForm: true,
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Y Axis Format'),
    renderTrigger: true,
    default: 'SMART_NUMBER',
    choices: D3_FORMAT_OPTIONS,
    description: D3_FORMAT_DOCS,
    mapStateToProps: (state) => {
      const showWarning =
      state.controls &&
      state.controls.comparison_type &&
      state.controls.comparison_type.value === 'percentage';
      return {
        warning: showWarning ?
        (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)(
        'When `Calculation type` is set to "Percentage change", the Y ' +
        'Axis Format is forced to `.1%`') :

        null,
        disabled: showWarning };

    } },


  adhoc_filters: {
    type: 'AdhocFilterControl',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Filters'),
    default: null,
    description: '',
    mapStateToProps: (state) => ({
      columns: state.datasource ?
      state.datasource.columns.filter((c) => c.filterable) :
      [],
      savedMetrics: state.datasource ? state.datasource.metrics : [],
      datasource: state.datasource }) },



  color_scheme: {
    type: 'ColorSchemeControl',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Color scheme'),
    default: categoricalSchemeRegistry.getDefaultKey(),
    renderTrigger: true,
    choices: () => categoricalSchemeRegistry.keys().map((s) => [s, s]),
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('The color scheme for rendering chart'),
    schemes: () => categoricalSchemeRegistry.getMap() } };

/***/ }),

/***/ 35854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R3": () => (/* binding */ getControlsState),
/* harmony export */   "oN": () => (/* binding */ applyDefaultFormData)
/* harmony export */ });
/* unused harmony exports defaultControls, defaultState */
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14299);
/* harmony import */ var _controlUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97488);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92252);
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




function handleDeprecatedControls(formData) {
  // Reacffectation / handling of deprecated controls
  /* eslint-disable no-param-reassign */

  // y_axis_zero was a boolean forcing 0 to be part of the Y Axis
  if (formData.y_axis_zero) {
    formData.y_axis_bounds = [0, null];
  }
}

function getControlsState(state, inputFormData) {
  /*
   * Gets a new controls object to put in the state. The controls object
   * is similar to the configuration control with only the controls
   * related to the current viz_type, materializes mapStateToProps functions,
   * adds value keys coming from inputFormData passed here. This can't be an action creator
   * just yet because it's used in both the explore and dashboard views.
   * */
  // Getting a list of active control names for the current viz
  const formData = { ...inputFormData };
  const vizType =
  formData.viz_type || state.common.conf.DEFAULT_VIZ_TYPE || 'table';

  handleDeprecatedControls(formData);

  const controlsState = (0,_controlUtils__WEBPACK_IMPORTED_MODULE_0__/* .getAllControlsState */ .mi)(
  vizType,
  state.datasource.type,
  state,
  formData);


  const controlPanelConfig = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)().get(vizType) || {};
  if (controlPanelConfig.onInit) {
    return controlPanelConfig.onInit(controlsState);
  }

  return controlsState;
}

function applyDefaultFormData(inputFormData) {
  const datasourceType = inputFormData.datasource.split('__')[1];
  const vizType = inputFormData.viz_type;
  const controlsState = (0,_controlUtils__WEBPACK_IMPORTED_MODULE_0__/* .getAllControlsState */ .mi)(vizType, datasourceType, null, {
    ...inputFormData });

  const controlFormData = (0,_controlUtils__WEBPACK_IMPORTED_MODULE_0__/* .getFormDataFromControls */ .Hu)(controlsState);

  const formData = {};
  Object.keys(controlsState).
  concat(Object.keys(inputFormData)).
  forEach((controlName) => {
    if (inputFormData[controlName] === undefined) {
      formData[controlName] = controlFormData[controlName];
    } else {
      formData[controlName] = inputFormData[controlName];
    }
  });

  return formData;
}

const defaultControls = { ..._controls__WEBPACK_IMPORTED_MODULE_1__/* .controls */ .ai };
Object.keys(_controls__WEBPACK_IMPORTED_MODULE_1__/* .controls */ .ai).forEach((f) => {
  defaultControls[f].value = _controls__WEBPACK_IMPORTED_MODULE_1__/* .controls */ .ai[f].default;
});

const defaultState = {
  controls: defaultControls,
  form_data: (0,_controlUtils__WEBPACK_IMPORTED_MODULE_0__/* .getFormDataFromControls */ .Hu)(defaultControls) };




/***/ }),

/***/ 10945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J_": () => (/* binding */ ANNOTATION_TYPES_METADATA),
/* harmony export */   "DT": () => (/* binding */ ANNOTATION_TYPES),
/* harmony export */   "qy": () => (/* binding */ DEFAULT_ANNOTATION_TYPE),
/* harmony export */   "dS": () => (/* binding */ ANNOTATION_SOURCE_TYPES_METADATA),
/* harmony export */   "S4": () => (/* binding */ ANNOTATION_SOURCE_TYPES),
/* harmony export */   "m7": () => (/* binding */ requiresQuery)
/* harmony export */ });
/* unused harmony export applyNativeColumns */
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
function extractTypes(metadata) {
  return Object.keys(metadata).reduce((prev, key) => {
    const result = prev;
    result[key] = key;
    return result;
  }, {});
}

const ANNOTATION_TYPES_METADATA = {
  FORMULA: {
    value: 'FORMULA',
    label: 'Formula' },

  EVENT: {
    value: 'EVENT',
    label: 'Event',
    supportNativeSource: true },

  INTERVAL: {
    value: 'INTERVAL',
    label: 'Interval',
    supportNativeSource: true },

  TIME_SERIES: {
    value: 'TIME_SERIES',
    label: 'Time series' } };



const ANNOTATION_TYPES = extractTypes(ANNOTATION_TYPES_METADATA);

const DEFAULT_ANNOTATION_TYPE = ANNOTATION_TYPES.FORMULA;

const ANNOTATION_SOURCE_TYPES_METADATA = {
  NATIVE: {
    value: 'NATIVE',
    label: 'Superset annotation' } };



const ANNOTATION_SOURCE_TYPES = extractTypes(
ANNOTATION_SOURCE_TYPES_METADATA);


function requiresQuery(annotationSourceType) {
  return !!annotationSourceType;
}

const NATIVE_COLUMN_NAMES = {
  timeColumn: 'start_dttm',
  intervalEndColumn: 'end_dttm',
  titleColumn: 'short_descr',
  descriptionColumns: ['long_descr'] };


function applyNativeColumns(annotation) {
  if (annotation.sourceType === ANNOTATION_SOURCE_TYPES.NATIVE) {
    return { ...annotation, ...NATIVE_COLUMN_NAMES };
  }
  return annotation;
}

/***/ }),

/***/ 51777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TIME_RANGE": () => (/* binding */ TIME_RANGE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23279);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4065);
/* harmony import */ var src_components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79676);
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35932);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86852);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21173);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(60650);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27600);
/* harmony import */ var src_components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49238);
/* harmony import */ var src_explore_components_controls_DateFilterControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73375);
/* harmony import */ var src_explore_components_ControlRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61357);
/* harmony import */ var src_explore_components_Control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65725);
/* harmony import */ var src_explore_controls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92252);
/* harmony import */ var src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12515);
/* harmony import */ var src_components_Select_OnPasteSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75017);
/* harmony import */ var src_explore_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69856);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11965);
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




















// a shortcut to a map key, used by many components
const TIME_RANGE = src_explore_constants__WEBPACK_IMPORTED_MODULE_14__/* .TIME_FILTER_MAP.time_range */ .i2.time_range;

const propTypes = {
  chartId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
  origSelectedValues: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  datasource: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
  instantFiltering: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  filtersFields: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(
  prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    field: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string) })),


  filtersChoices: prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf(
  prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(
  prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    text: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    filter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    metric: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number) }))),



  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onFilterMenuOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onFilterMenuClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  showDateFilter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  showSqlaTimeGrain: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  showSqlaTimeColumn: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  showDruidTimeGrain: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  showDruidTimeOrigin: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool) };

const defaultProps = {
  origSelectedValues: {},
  onChange: () => {},
  onFilterMenuOpen: () => {},
  onFilterMenuClose: () => {},
  showDateFilter: false,
  showSqlaTimeGrain: false,
  showSqlaTimeColumn: false,
  showDruidTimeGrain: false,
  showDruidTimeOrigin: false,
  instantFiltering: false };


class FilterBox extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);this.

























    onCloseDateFilterControl = () => this.onFilterMenuClose(TIME_RANGE);this.state = { selectedValues: props.origSelectedValues, // this flag is used by non-instant filter, to make the apply button enabled/disabled
      hasChanged: false };this.debouncerCache = {};this.maxValueCache = {};this.changeFilter = this.changeFilter.bind(this);this.onFilterMenuOpen = this.onFilterMenuOpen.bind(this);this.onOpenDateFilterControl = this.onOpenDateFilterControl.bind(this);this.onFilterMenuClose = this.onFilterMenuClose.bind(this);}onFilterMenuOpen(column) {return this.props.onFilterMenuOpen(this.props.chartId, column);}onFilterMenuClose(column) {return this.props.onFilterMenuClose(this.props.chartId, column);}onOpenDateFilterControl() {return this.onFilterMenuOpen(TIME_RANGE);}
  getControlData(controlName) {
    const { selectedValues } = this.state;
    const control = {
      ...src_explore_controls__WEBPACK_IMPORTED_MODULE_11__/* .controls */ .ai[controlName], // TODO: make these controls ('druid_time_origin', 'granularity', 'granularity_sqla', 'time_grain_sqla') accessible from getControlsForVizType.
      name: controlName,
      key: `control-${controlName}`,
      value: selectedValues[src_explore_constants__WEBPACK_IMPORTED_MODULE_14__/* .TIME_FILTER_MAP */ .i2[controlName]],
      actions: { setControlValue: this.changeFilter } };

    const mapFunc = control.mapStateToProps;
    return mapFunc ? { ...control, ...mapFunc(this.props) } : control;
  }

  /**
   * Get known max value of a column
   */
  getKnownMax(key, choices) {
    this.maxValueCache[key] = Math.max(
    this.maxValueCache[key] || 0,
    (0,d3_array__WEBPACK_IMPORTED_MODULE_3__.max)(choices || this.props.filtersChoices[key] || [], (x) => x.metric));

    return this.maxValueCache[key];
  }

  clickApply() {
    const { selectedValues } = this.state;
    this.setState({ hasChanged: false }, () => {
      this.props.onChange(selectedValues, false);
    });
  }

  changeFilter(filter, options) {
    const fltr = src_explore_constants__WEBPACK_IMPORTED_MODULE_14__/* .TIME_FILTER_MAP */ .i2[filter] || filter;
    let vals = null;
    if (options !== null) {
      if (Array.isArray(options)) {
        vals = options.map((opt) => typeof opt === 'string' ? opt : opt.value);
      } else if (Object.values(src_explore_constants__WEBPACK_IMPORTED_MODULE_14__/* .TIME_FILTER_MAP */ .i2).includes(fltr)) {var _options$value;
        vals = (_options$value = options.value) != null ? _options$value : options;
      } else {var _options$value2;
        // must use array member for legacy extra_filters's value
        vals = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)((_options$value2 = options.value) != null ? _options$value2 : options);
      }
    }

    this.setState(
    (prevState) => ({
      selectedValues: {
        ...prevState.selectedValues,
        [fltr]: vals },

      hasChanged: true }),

    () => {
      if (this.props.instantFiltering) {
        this.props.onChange({ [fltr]: vals }, false);
      }
    });

  }

  /**
   * Generate a debounce function that loads options for a specific column
   */
  debounceLoadOptions(key) {
    if (!(key in this.debouncerCache)) {
      this.debouncerCache[key] = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()((input, callback) => {
        this.loadOptions(key, input).then(callback);
      }, src_constants__WEBPACK_IMPORTED_MODULE_6__/* .SLOW_DEBOUNCE */ .M$);
    }
    return this.debouncerCache[key];
  }

  /**
   * Transform select options, add bar background
   */
  transformOptions(options, max) {
    const maxValue = max === undefined ? (0,d3_array__WEBPACK_IMPORTED_MODULE_3__.max)(options, (x) => x.metric) : max;
    return options.map((opt) => {
      const perc = Math.round(opt.metric / maxValue * 100);
      const color = 'lightgrey';
      const backgroundImage = `linear-gradient(to right, ${color}, ${color} ${perc}%, rgba(0,0,0,0) ${perc}%`;
      const style = { backgroundImage };
      let label = opt.id;
      if (label === true) {
        label = src_constants__WEBPACK_IMPORTED_MODULE_6__/* .BOOL_TRUE_DISPLAY */ .Ly;
      } else if (label === false) {
        label = src_constants__WEBPACK_IMPORTED_MODULE_6__/* .BOOL_FALSE_DISPLAY */ .gz;
      }
      return { value: opt.id, label, style };
    });
  }

  async loadOptions(key, inputValue = '') {var _json$data;
    const input = inputValue.toLowerCase();
    const sortAsc = this.props.filtersFields.find((x) => x.key === key).asc;
    const formData = {
      ...this.props.rawFormData,
      adhoc_filters: inputValue ?
      [
      {
        clause: 'WHERE',
        expressionType: 'SIMPLE',
        subject: key,
        operator: 'ILIKE',
        comparator: `%${input}%` }] :


      null };


    const { json } = await _superset_ui_core__WEBPACK_IMPORTED_MODULE_16__/* ["default"].get */ .Z.get({
      url: (0,src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_12__/* .getExploreUrl */ .H6)({
        formData,
        endpointType: 'json',
        method: 'GET' }) });


    const options = ((json == null ? void 0 : (_json$data = json.data) == null ? void 0 : _json$data[key]) || []).filter((x) => x.id);
    if (!options || options.length === 0) {
      return [];
    }
    if (input) {
      // sort those starts with search query to front
      options.sort((a, b) => {
        const labelA = a.id.toLowerCase();
        const labelB = b.id.toLowerCase();
        const textOrder = labelB.startsWith(input) - labelA.startsWith(input);
        return textOrder === 0 ?
        (a.metric - b.metric) * (sortAsc ? 1 : -1) :
        textOrder;
      });
    }
    return this.transformOptions(options, this.getKnownMax(key, options));
  }

  renderDateFilter() {
    const { showDateFilter } = this.props;
    const label = src_explore_constants__WEBPACK_IMPORTED_MODULE_14__/* .TIME_FILTER_LABELS.time_range */ .m_.time_range;
    if (showDateFilter) {
      return (
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", { className: "row space-1" },
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: "col-lg-12 col-xs-12" },


        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_17__.jsx)(src_explore_components_controls_DateFilterControl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          name: TIME_RANGE,
          label: label,
          description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_18__.t)('Select start and end date'),
          onChange: (newValue) => {
            this.changeFilter(TIME_RANGE, newValue);
          },
          onOpenDateFilterControl: this.onOpenDateFilterControl,
          onCloseDateFilterControl: this.onCloseDateFilterControl,
          value: this.state.selectedValues[TIME_RANGE] || 'No filter' }))));




    }
    return null;
  }

  renderDatasourceFilters() {
    const {
      showSqlaTimeGrain,
      showSqlaTimeColumn,
      showDruidTimeGrain,
      showDruidTimeOrigin } =
    this.props;
    const datasourceFilters = [];
    const sqlaFilters = [];
    const druidFilters = [];
    if (showSqlaTimeGrain) sqlaFilters.push('time_grain_sqla');
    if (showSqlaTimeColumn) sqlaFilters.push('granularity_sqla');
    if (showDruidTimeGrain) druidFilters.push('granularity');
    if (showDruidTimeOrigin) druidFilters.push('druid_time_origin');
    if (sqlaFilters.length) {
      datasourceFilters.push(
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_17__.jsx)(src_explore_components_ControlRow__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        key: "sqla-filters",
        controls: sqlaFilters.map((control) =>
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_17__.jsx)(src_explore_components_Control__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, this.getControlData(control))) }));



    }
    if (druidFilters.length) {
      datasourceFilters.push(
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_17__.jsx)(src_explore_components_ControlRow__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        key: "druid-filters",
        controls: druidFilters.map((control) =>
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_17__.jsx)(src_explore_components_Control__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, this.getControlData(control))) }));



    }
    return datasourceFilters;
  }

  renderSelect(filterConfig) {
    const { filtersChoices } = this.props;
    const { selectedValues } = this.state;
    this.debouncerCache = {};
    this.maxValueCache = {};

    // Add created options to filtersChoices, even though it doesn't exist,
    // or these options will exist in query sql but invisible to end user.
    Object.keys(selectedValues).
    filter((key) => key in filtersChoices).
    forEach((key) => {
      // empty values are ignored
      if (!selectedValues[key]) {
        return;
      }
      const choices = filtersChoices[key] || (filtersChoices[key] = []);
      const choiceIds = new Set(choices.map((f) => f.id));
      const selectedValuesForKey = Array.isArray(selectedValues[key]) ?
      selectedValues[key] :
      [selectedValues[key]];
      selectedValuesForKey.
      filter((value) => value !== null && !choiceIds.has(value)).
      forEach((value) => {
        choices.unshift({
          filter: key,
          id: value,
          text: value,
          metric: 0 });

      });
    });
    const {
      key,
      label,
      [src_explore_constants__WEBPACK_IMPORTED_MODULE_14__/* .FILTER_CONFIG_ATTRIBUTES.MULTIPLE */ .ft.MULTIPLE]: isMultiple,
      [src_explore_constants__WEBPACK_IMPORTED_MODULE_14__/* .FILTER_CONFIG_ATTRIBUTES.DEFAULT_VALUE */ .ft.DEFAULT_VALUE]: defaultValue,
      [src_explore_constants__WEBPACK_IMPORTED_MODULE_14__/* .FILTER_CONFIG_ATTRIBUTES.CLEARABLE */ .ft.CLEARABLE]: isClearable,
      [src_explore_constants__WEBPACK_IMPORTED_MODULE_14__/* .FILTER_CONFIG_ATTRIBUTES.SEARCH_ALL_OPTIONS */ .ft.SEARCH_ALL_OPTIONS]: searchAllOptions } =
    filterConfig;
    const data = filtersChoices[key] || [];
    let value = selectedValues[key] || null;

    // Assign default value if required
    if (value === undefined && defaultValue) {
      // multiple values are separated by semicolons
      value = isMultiple ? defaultValue.split(';') : defaultValue;
    }

    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_17__.jsx)(src_components_Select_OnPasteSelect__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        cacheOptions: true,
        loadOptions: this.debounceLoadOptions(key),
        defaultOptions: this.transformOptions(data),
        key: key,
        placeholder: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_18__.t)('Type or Select [%s]', label),
        isMulti: isMultiple,
        isClearable: isClearable,
        value: value,
        options: this.transformOptions(data),
        onChange: (newValue) => {
          // avoid excessive re-renders
          if (newValue !== value) {
            this.changeFilter(key, newValue);
          }
        }
        // TODO try putting this back once react-select is upgraded
        // onFocus={() => this.onFilterMenuOpen(key)}
        , onMenuOpen: () => this.onFilterMenuOpen(key),
        onBlur: () => this.onFilterMenuClose(key),
        onMenuClose: () => this.onFilterMenuClose(key),
        selectWrap:
        searchAllOptions && data.length >= src_explore_constants__WEBPACK_IMPORTED_MODULE_14__/* .FILTER_OPTIONS_LIMIT */ .cM ?
        src_components_Select__WEBPACK_IMPORTED_MODULE_4__/* .AsyncCreatableSelect */ .JY :
        src_components_Select__WEBPACK_IMPORTED_MODULE_4__/* .CreatableSelect */ .a7,

        noResultsText: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_18__.t)('No results found'),
        forceOverflow: true }));


  }

  renderFilters() {
    const { filtersFields = [] } = this.props;
    return filtersFields.map((filterConfig) => {
      const { label, key } = filterConfig;
      return (
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", { key: key, className: "m-b-5 filter-container" },
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_17__.jsx)(src_components_Form__WEBPACK_IMPORTED_MODULE_7__/* .FormLabel */ .lX, { htmlFor: `LABEL-${key}` }, label),
        this.renderSelect(filterConfig)));


    });
  }

  render() {
    const { instantFiltering, width, height } = this.props;
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", { style: { width, height, overflow: 'auto' } },
      this.renderDateFilter(),
      this.renderDatasourceFilters(),
      this.renderFilters(),
      !instantFiltering &&
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_17__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        buttonSize: "small",
        buttonStyle: "primary",
        onClick: this.clickApply.bind(this),
        disabled: !this.state.hasChanged },

      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_18__.t)('Apply'))));




  }}


FilterBox.propTypes = propTypes;
FilterBox.defaultProps = defaultProps;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterBox);

/***/ }),

/***/ 64714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ chart),
/* harmony export */   "Z": () => (/* binding */ chartReducer)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60650);
/* harmony import */ var src_dashboard_actions_hydrate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47173);
/* harmony import */ var src_dashboard_actions_datasources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50810);
/* harmony import */ var src_explore_controlUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97488);
/* harmony import */ var src_modules_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1836);
/* harmony import */ var _chartAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22428);
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






const chart = {
  id: 0,
  chartAlert: null,
  chartStatus: 'loading',
  chartStackTrace: null,
  chartUpdateEndTime: null,
  chartUpdateStartTime: 0,
  latestQueryFormData: {},
  sliceFormData: null,
  queryController: null,
  queriesResponse: null,
  triggerQuery: true,
  lastRendered: 0 };

function chartReducer(charts = {}, action) {
  const actionHandlers = {
    [_chartAction__WEBPACK_IMPORTED_MODULE_4__.ADD_CHART]() {
      return {
        ...chart,
        ...action.chart };

    },
    [_chartAction__WEBPACK_IMPORTED_MODULE_4__.CHART_UPDATE_SUCCEEDED](state) {
      return {
        ...state,
        chartStatus: 'success',
        chartAlert: null,
        queriesResponse: action.queriesResponse,
        chartUpdateEndTime: (0,src_modules_dates__WEBPACK_IMPORTED_MODULE_3__/* .now */ .zO)() };

    },
    [_chartAction__WEBPACK_IMPORTED_MODULE_4__.CHART_UPDATE_STARTED](state) {
      return {
        ...state,
        chartStatus: 'loading',
        chartStackTrace: null,
        chartAlert: null,
        chartUpdateEndTime: null,
        chartUpdateStartTime: (0,src_modules_dates__WEBPACK_IMPORTED_MODULE_3__/* .now */ .zO)(),
        queryController: action.queryController };

    },
    [_chartAction__WEBPACK_IMPORTED_MODULE_4__.CHART_UPDATE_STOPPED](state) {
      return {
        ...state,
        chartStatus: 'stopped',
        chartAlert: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Updating chart was stopped'),
        chartUpdateEndTime: (0,src_modules_dates__WEBPACK_IMPORTED_MODULE_3__/* .now */ .zO)() };

    },
    [_chartAction__WEBPACK_IMPORTED_MODULE_4__.CHART_RENDERING_SUCCEEDED](state) {
      return { ...state, chartStatus: 'rendered', chartUpdateEndTime: (0,src_modules_dates__WEBPACK_IMPORTED_MODULE_3__/* .now */ .zO)() };
    },
    [_chartAction__WEBPACK_IMPORTED_MODULE_4__.CHART_RENDERING_FAILED](state) {
      return {
        ...state,
        chartStatus: 'failed',
        chartStackTrace: action.stackTrace,
        chartAlert: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('An error occurred while rendering the visualization: %s', action.error) };

    },
    [_chartAction__WEBPACK_IMPORTED_MODULE_4__.CHART_UPDATE_FAILED](state) {var _action$queriesRespon, _action$queriesRespon2, _action$queriesRespon3, _action$queriesRespon4;
      return {
        ...state,
        chartStatus: 'failed',
        chartAlert: action.queriesResponse ? (_action$queriesRespon =
        action.queriesResponse) == null ? void 0 : (_action$queriesRespon2 = _action$queriesRespon[0]) == null ? void 0 : _action$queriesRespon2.error :
        (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Network error.'),
        chartUpdateEndTime: (0,src_modules_dates__WEBPACK_IMPORTED_MODULE_3__/* .now */ .zO)(),
        queriesResponse: action.queriesResponse,
        chartStackTrace: action.queriesResponse ? (_action$queriesRespon3 =
        action.queriesResponse) == null ? void 0 : (_action$queriesRespon4 = _action$queriesRespon3[0]) == null ? void 0 : _action$queriesRespon4.stacktrace :
        null };

    },
    [_chartAction__WEBPACK_IMPORTED_MODULE_4__.DYNAMIC_PLUGIN_CONTROLS_READY](state) {
      const sliceFormData = (0,src_explore_controlUtils__WEBPACK_IMPORTED_MODULE_2__/* .getFormDataFromControls */ .Hu)(action.controlsState);
      return { ...state, sliceFormData };
    },
    [_chartAction__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_QUERY](state) {
      return {
        ...state,
        triggerQuery: action.value,
        chartStatus: 'loading' };

    },
    [_chartAction__WEBPACK_IMPORTED_MODULE_4__.RENDER_TRIGGERED](state) {
      return { ...state, lastRendered: action.value };
    },
    [_chartAction__WEBPACK_IMPORTED_MODULE_4__.UPDATE_QUERY_FORM_DATA](state) {
      return { ...state, latestQueryFormData: action.value };
    },
    [_chartAction__WEBPACK_IMPORTED_MODULE_4__.ANNOTATION_QUERY_STARTED](state) {
      if (state.annotationQuery &&
      state.annotationQuery[action.annotation.name]) {
        state.annotationQuery[action.annotation.name].abort();
      }
      const annotationQuery = {
        ...state.annotationQuery,
        [action.annotation.name]: action.queryController };

      return {
        ...state,
        annotationQuery };

    },
    [_chartAction__WEBPACK_IMPORTED_MODULE_4__.ANNOTATION_QUERY_SUCCESS](state) {
      const annotationData = {
        ...state.annotationData,
        [action.annotation.name]: action.queryResponse.data };

      const annotationError = { ...state.annotationError };
      delete annotationError[action.annotation.name];
      const annotationQuery = { ...state.annotationQuery };
      delete annotationQuery[action.annotation.name];
      return {
        ...state,
        annotationData,
        annotationError,
        annotationQuery };

    },
    [_chartAction__WEBPACK_IMPORTED_MODULE_4__.ANNOTATION_QUERY_FAILED](state) {
      const annotationData = { ...state.annotationData };
      delete annotationData[action.annotation.name];
      const annotationError = {
        ...state.annotationError,
        [action.annotation.name]: action.queryResponse ?
        action.queryResponse.error :
        (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Network error.') };

      const annotationQuery = { ...state.annotationQuery };
      delete annotationQuery[action.annotation.name];
      return {
        ...state,
        annotationData,
        annotationError,
        annotationQuery };

    } };

  /* eslint-disable no-param-reassign */
  if (action.type === _chartAction__WEBPACK_IMPORTED_MODULE_4__.REMOVE_CHART) {
    delete charts[action.key];
    return charts;
  }
  if (action.type === _chartAction__WEBPACK_IMPORTED_MODULE_4__.UPDATE_CHART_ID) {
    const { newId, key } = action;
    charts[newId] = {
      ...charts[key],
      id: newId };

    delete charts[key];
    return charts;
  }
  if (action.type === src_dashboard_actions_hydrate__WEBPACK_IMPORTED_MODULE_0__/* .HYDRATE_DASHBOARD */ .$) {
    return { ...action.data.charts };
  }
  if (action.type === src_dashboard_actions_datasources__WEBPACK_IMPORTED_MODULE_1__/* .DatasourcesAction.SET_DATASOURCES */ .Rn.SET_DATASOURCES) {
    return Object.fromEntries(Object.entries(charts).map(([chartId, chart]) => [
    chartId,
    // if render has failed, clear error message,
    // which will trigger a re-render
    chart.chartStatus === 'failed' ?
    {
      ...chart,
      chartStatus: '',
      chartStackTrace: null,
      chartAlert: null } :

    chart]));

  }
  if (action.type in actionHandlers) {
    return {
      ...charts,
      [action.key]: actionHandlers[action.type](charts[action.key]) };

  }
  return charts;
}

/***/ }),

/***/ 83601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useComponentDidUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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

const useComponentDidUpdate = (effect) => {
  const isMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isMountedRef.current) {
      effect();
    } else
    {
      isMountedRef.current = true;
    }
  }, [effect]);
};

/***/ }),

/***/ 67337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* reexport */ usePrevious)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/common/hooks/usePrevious/usePrevious.ts
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

function usePrevious(value, initialValue) {
  const previous = (0,react.useRef)(initialValue);
  (0,react.useEffect)(() => {
    // useEffect runs after the render completes
    previous.current = value;
  }, [value]);
  return previous.current;
}
;// CONCATENATED MODULE: ./src/common/hooks/usePrevious/index.ts
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

/***/ 13842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lU": () => (/* binding */ CheckboxChecked),
/* harmony export */   "dc": () => (/* binding */ CheckboxHalfChecked),
/* harmony export */   "zq": () => (/* binding */ CheckboxUnchecked)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37840);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11965);
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


const CheckboxChecked = () => {
  const theme = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .Fg)();
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", { d: "M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0Z", fill: theme.colors.primary.base }),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", { d: "M7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z", fill: "white" }));

};
const CheckboxHalfChecked = () => {
  const theme = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .Fg)();
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", { d: "M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z", fill: theme.colors.grayscale.light1 }),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", { d: "M14 10H4V8H14V10Z", fill: "white" }));

};
const CheckboxUnchecked = () => {
  const theme = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .Fg)();
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", { d: "M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z", fill: theme.colors.grayscale.light2 }),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", { d: "M16 2V16H2V2H16V2Z", fill: "white" }));

};

/***/ }),

/***/ 87253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lU": () => (/* reexport */ CheckboxIcons/* CheckboxChecked */.lU),
  "zq": () => (/* reexport */ CheckboxIcons/* CheckboxUnchecked */.zq),
  "ZP": () => (/* reexport */ Checkbox)
});

// UNUSED EXPORTS: CheckboxHalfChecked

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/components/Checkbox/Checkbox.tsx
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



const Styles = style/* styled.span */.iK.span`
  &,
  & svg {
    vertical-align: top;
  }
`;
function Checkbox({ checked, onChange, style }) {
  return (0,emotion_react_browser_esm.jsx)(Styles, { style: style, onClick: () => {
      onChange(!checked);
    }, role: "checkbox", tabIndex: 0, "aria-checked": checked, "aria-label": "Checkbox" },
  checked ? (0,emotion_react_browser_esm.jsx)(CheckboxIcons/* CheckboxChecked */.lU, null) : (0,emotion_react_browser_esm.jsx)(CheckboxIcons/* CheckboxUnchecked */.zq, null));

}
// EXTERNAL MODULE: ./src/components/Checkbox/CheckboxIcons.tsx
var CheckboxIcons = __webpack_require__(13842);
;// CONCATENATED MODULE: ./src/components/Checkbox/index.tsx
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

/***/ 34581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FacePile)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalSchemeRegistrySingleton.js
var CategoricalSchemeRegistrySingleton = __webpack_require__(34042);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var components = __webpack_require__(82191);
;// CONCATENATED MODULE: ./src/components/FacePile/utils.tsx
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
// https://en.wikipedia.org/wiki/Linear_congruential_generator
function stringAsciiPRNG(value, m) {
  // Xn+1 = (a * Xn + c) % m
  // 0 < a < m
  // 0 <= c < m
  // 0 <= X0 < m
  const charCodes = [...value].map((letter) => letter.charCodeAt(0));
  const len = charCodes.length;
  const a = len % (m - 1) + 1;
  const c = charCodes.reduce((current, next) => current + next) % m;
  let random = charCodes[0] % m;
  [...new Array(len)].forEach(() => {
    random = (a * random + c) % m;
  });
  return random;
}
function getRandomColor(sampleValue, colorList) {
  // if no value is passed, always return transparent color for consistency
  if (!sampleValue)
  return 'transparent';
  // value based random color index,
  // ensuring the same sampleValue always resolves to the same color
  return colorList[stringAsciiPRNG(sampleValue, colorList.length)];
}
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/components/FacePile/index.tsx
var _getCategoricalScheme, _getCategoricalScheme2; /**
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





const colorList = (_getCategoricalScheme = (_getCategoricalScheme2 = (0,CategoricalSchemeRegistrySingleton/* default */.Z)().get()) == null ? void 0 : _getCategoricalScheme2.colors) != null ? _getCategoricalScheme : [];
const customAvatarStyler = (theme) => `
  width: ${theme.gridUnit * 6}px;
  height: ${theme.gridUnit * 6}px;
  line-height: ${theme.gridUnit * 6}px;
  font-size: ${theme.typography.sizes.m}px;
`;
const StyledAvatar = (0,style/* styled */.iK)(components/* Avatar */.qE)`
  ${({ theme }) => customAvatarStyler(theme)}
`;
// to apply styling to the maxCount avatar
const StyledGroup = (0,style/* styled */.iK)(components/* Avatar.Group */.qE.Group)`
  .ant-avatar {
    ${({ theme }) => customAvatarStyler(theme)}
  }
`;
function FacePile({ users, maxCount = 4 }) {
  return (0,emotion_react_browser_esm.jsx)(StyledGroup, { maxCount: maxCount },
  users.map(({ first_name, last_name, id }) => {var _first_name$, _last_name$;
    const name = `${first_name} ${last_name}`;
    const uniqueKey = `${id}-${first_name}-${last_name}`;
    const color = getRandomColor(uniqueKey, colorList);
    return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { key: name, title: name, placement: "top" },
    (0,emotion_react_browser_esm.jsx)(StyledAvatar, { key: name, style: {
        backgroundColor: color,
        borderColor: color } },

    first_name && ((_first_name$ = first_name[0]) == null ? void 0 : _first_name$.toLocaleUpperCase()),
    last_name && ((_last_name$ = last_name[0]) == null ? void 0 : _last_name$.toLocaleUpperCase())));


  }));

}

/***/ }),

/***/ 83734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PopoverSection)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11965);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37840);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58593);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38097);
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




function PopoverSection({ title, isSelected, children, onSelect, info }) {
  const theme = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .Fg)();
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", { css: /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.css)({
      paddingBottom: theme.gridUnit * 2,
      opacity: isSelected ? 1 : theme.opacity.mediumHeavy },  true ? "" : 0,  true ? "" : 0) },

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", { role: "button", tabIndex: 0, onClick: onSelect, css: /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.css)({
      display: 'flex',
      alignItems: 'center',
      cursor: onSelect ? 'pointer' : 'default' },  true ? "" : 0,  true ? "" : 0) },

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", null, title),
  info && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__/* .Tooltip */ .u, { title: info, css: /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.css)({ marginLeft: theme.gridUnit },  true ? "" : 0,  true ? "" : 0) },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].InfoSolidSmall */ .Z.InfoSolidSmall, { role: "img", width: 14, height: 14, iconColor: theme.colors.grayscale.light1 })),

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Check */ .Z.Check, { role: "img", iconColor: isSelected ? theme.colors.primary.base : theme.colors.grayscale.base })),

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", { css: /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.css)({
      marginLeft: theme.gridUnit,
      marginTop: theme.gridUnit },  true ? "" : 0,  true ? "" : 0) },

  children));


}

/***/ }),

/***/ 41295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$A": () => (/* binding */ DASHBOARD_INFO_UPDATED),
/* harmony export */   "a8": () => (/* binding */ dashboardInfoChanged),
/* harmony export */   "t$": () => (/* binding */ SET_CHART_CONFIG_COMPLETE),
/* harmony export */   "Aw": () => (/* binding */ setChartConfiguration)
/* harmony export */ });
/* unused harmony exports SET_CHART_CONFIG_BEGIN, SET_CHART_CONFIG_FAIL */
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47037);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83527);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85639);


const DASHBOARD_INFO_UPDATED = 'DASHBOARD_INFO_UPDATED';
// updates partially changed dashboard info
function dashboardInfoChanged(newInfo) {
  const { metadata } = newInfo;
  const categoricalNamespace = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__.getNamespace(metadata == null ? void 0 : metadata.color_namespace);
  categoricalNamespace.resetColors();
  if (metadata != null && metadata.label_colors) {
    const labelColors = metadata.label_colors;
    const colorMap = lodash_isString__WEBPACK_IMPORTED_MODULE_0___default()(labelColors) ?
    JSON.parse(labelColors) :
    labelColors;
    Object.keys(colorMap).forEach((label) => {
      categoricalNamespace.setColor(label, colorMap[label]);
    });
  }
  return { type: DASHBOARD_INFO_UPDATED, newInfo };
}
const SET_CHART_CONFIG_BEGIN = 'SET_CHART_CONFIG_BEGIN';
const SET_CHART_CONFIG_COMPLETE = 'SET_CHART_CONFIG_COMPLETE';
const SET_CHART_CONFIG_FAIL = 'SET_CHART_CONFIG_FAIL';
const setChartConfiguration = (chartConfiguration) => async (dispatch, getState) => {
  dispatch({
    type: SET_CHART_CONFIG_BEGIN,
    chartConfiguration });

  const { id, metadata } = getState().dashboardInfo;
  // TODO extract this out when makeApi supports url parameters
  const updateDashboard = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    method: 'PUT',
    endpoint: `/api/v1/dashboard/${id}` });

  try {
    const response = await updateDashboard({
      json_metadata: JSON.stringify({
        ...metadata,
        chart_configuration: chartConfiguration }) });


    dispatch(dashboardInfoChanged({
      metadata: JSON.parse(response.result.json_metadata) }));

    dispatch({
      type: SET_CHART_CONFIG_COMPLETE,
      chartConfiguration });

  }
  catch (err) {
    dispatch({ type: SET_CHART_CONFIG_FAIL, chartConfiguration });
  }
};

/***/ }),

/***/ 50810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rn": () => (/* binding */ DatasourcesAction),
/* harmony export */   "Fy": () => (/* binding */ setDatasources),
/* harmony export */   "QR": () => (/* binding */ fetchDatasourceMetadata)
/* harmony export */ });
/* unused harmony export setDatasource */
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21173);

// update datasources index for Dashboard
var DatasourcesAction;
(function (DatasourcesAction) {
  DatasourcesAction["SET_DATASOURCES"] = "SET_DATASOURCES";
  DatasourcesAction["SET_DATASOURCE"] = "SET_DATASOURCE";
})(DatasourcesAction || (DatasourcesAction = {}));
function setDatasources(datasources) {
  return {
    type: DatasourcesAction.SET_DATASOURCES,
    datasources };

}
function setDatasource(datasource, key) {
  return {
    type: DatasourcesAction.SET_DATASOURCE,
    key,
    datasource };

}
function fetchDatasourceMetadata(key) {
  return (dispatch, getState) => {
    const { datasources } = getState();
    const datasource = datasources[key];
    if (datasource) {
      return dispatch(setDatasource(datasource, key));
    }
    return _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get({
      endpoint: `/superset/fetch_datasource_metadata?datasourceKey=${key}` }).
    then(({ json }) => dispatch(setDatasource(json, key)));
  };
}

/***/ }),

/***/ 52794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qe": () => (/* binding */ SET_FILTER_CONFIG_COMPLETE),
/* harmony export */   "kN": () => (/* binding */ SET_IN_SCOPE_STATUS_OF_FILTERS),
/* harmony export */   "SS": () => (/* binding */ SET_FILTER_SETS_CONFIG_COMPLETE),
/* harmony export */   "RY": () => (/* binding */ setFilterConfiguration),
/* harmony export */   "xk": () => (/* binding */ setInScopeStatusOfFilters),
/* harmony export */   "J8": () => (/* binding */ setFilterSetsConfiguration),
/* harmony export */   "gc": () => (/* binding */ SAVE_FILTER_SETS),
/* harmony export */   "X8": () => (/* binding */ SET_FOCUSED_NATIVE_FILTER),
/* harmony export */   "T6": () => (/* binding */ UNSET_FOCUSED_NATIVE_FILTER),
/* harmony export */   "$7": () => (/* binding */ setFocusedNativeFilter),
/* harmony export */   "Up": () => (/* binding */ unsetFocusedNativeFilter)
/* harmony export */ });
/* unused harmony exports SET_FILTER_CONFIG_BEGIN, SET_FILTER_CONFIG_FAIL, SET_FILTER_SETS_CONFIG_BEGIN, SET_FILTER_SETS_CONFIG_FAIL, saveFilterSets */
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85639);
/* harmony import */ var src_dataMask_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74599);
/* harmony import */ var _dashboardInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41295);
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



const SET_FILTER_CONFIG_BEGIN = 'SET_FILTER_CONFIG_BEGIN';
const SET_FILTER_CONFIG_COMPLETE = 'SET_FILTER_CONFIG_COMPLETE';
const SET_FILTER_CONFIG_FAIL = 'SET_FILTER_CONFIG_FAIL';
const SET_IN_SCOPE_STATUS_OF_FILTERS = 'SET_IN_SCOPE_STATUS_OF_FILTERS';
const SET_FILTER_SETS_CONFIG_BEGIN = 'SET_FILTER_SETS_CONFIG_BEGIN';
const SET_FILTER_SETS_CONFIG_COMPLETE = 'SET_FILTER_SETS_CONFIG_COMPLETE';
const SET_FILTER_SETS_CONFIG_FAIL = 'SET_FILTER_SETS_CONFIG_FAIL';
const setFilterConfiguration = (filterConfig) => async (dispatch, getState) => {var _getState$nativeFilte;
  dispatch({
    type: SET_FILTER_CONFIG_BEGIN,
    filterConfig });

  const { id, metadata } = getState().dashboardInfo;
  const oldFilters = (_getState$nativeFilte = getState().nativeFilters) == null ? void 0 : _getState$nativeFilte.filters;
  // TODO extract this out when makeApi supports url parameters
  const updateDashboard = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    method: 'PUT',
    endpoint: `/api/v1/dashboard/${id}` });

  const mergedFilterConfig = filterConfig.map((filter) => {
    const oldFilter = oldFilters[filter.id];
    if (!oldFilter) {
      return filter;
    }
    return { ...oldFilter, ...filter };
  });
  try {
    const response = await updateDashboard({
      json_metadata: JSON.stringify({
        ...metadata,
        native_filter_configuration: mergedFilterConfig }) });


    dispatch((0,_dashboardInfo__WEBPACK_IMPORTED_MODULE_1__/* .dashboardInfoChanged */ .a8)({
      metadata: JSON.parse(response.result.json_metadata) }));

    dispatch({
      type: SET_FILTER_CONFIG_COMPLETE,
      filterConfig: mergedFilterConfig });

    dispatch((0,src_dataMask_actions__WEBPACK_IMPORTED_MODULE_0__/* .setDataMaskForFilterConfigComplete */ .Ft)(mergedFilterConfig, oldFilters));
  }
  catch (err) {
    dispatch({
      type: SET_FILTER_CONFIG_FAIL,
      filterConfig: mergedFilterConfig });

    dispatch({
      type: src_dataMask_actions__WEBPACK_IMPORTED_MODULE_0__/* .SET_DATA_MASK_FOR_FILTER_CONFIG_FAIL */ .u3,
      filterConfig: mergedFilterConfig });

  }
};
const setInScopeStatusOfFilters = (filterScopes) => async (dispatch, getState) => {var _getState$nativeFilte2;
  const filters = (_getState$nativeFilte2 = getState().nativeFilters) == null ? void 0 : _getState$nativeFilte2.filters;
  const filtersWithScopes = filterScopes.map((scope) => ({
    ...filters[scope.filterId],
    chartsInScope: scope.chartsInScope,
    tabsInScope: scope.tabsInScope }));

  dispatch({
    type: SET_IN_SCOPE_STATUS_OF_FILTERS,
    filterConfig: filtersWithScopes });

  // need to update native_filter_configuration in the dashboard metadata
  const { metadata } = getState().dashboardInfo;
  const filterConfig = metadata.native_filter_configuration;
  const mergedFilterConfig = filterConfig.map((filter) => {
    const filterWithScope = filtersWithScopes.find((scope) => scope.id === filter.id);
    if (!filterWithScope) {
      return filter;
    }
    return { ...filterWithScope, ...filter };
  });
  metadata.native_filter_configuration = mergedFilterConfig;
  dispatch((0,_dashboardInfo__WEBPACK_IMPORTED_MODULE_1__/* .dashboardInfoChanged */ .a8)({
    metadata }));

};
const setFilterSetsConfiguration = (filterSetsConfig) => async (dispatch, getState) => {
  dispatch({
    type: SET_FILTER_SETS_CONFIG_BEGIN,
    filterSetsConfig });

  const { id, metadata } = getState().dashboardInfo;
  // TODO extract this out when makeApi supports url parameters
  const updateDashboard = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    method: 'PUT',
    endpoint: `/api/v1/dashboard/${id}` });

  try {
    const response = await updateDashboard({
      json_metadata: JSON.stringify({
        ...metadata,
        filter_sets_configuration: filterSetsConfig }) });


    const newMetadata = JSON.parse(response.result.json_metadata);
    dispatch((0,_dashboardInfo__WEBPACK_IMPORTED_MODULE_1__/* .dashboardInfoChanged */ .a8)({
      metadata: newMetadata }));

    dispatch({
      type: SET_FILTER_SETS_CONFIG_COMPLETE,
      filterSetsConfig: newMetadata == null ? void 0 : newMetadata.filter_sets_configuration });

  }
  catch (err) {
    dispatch({ type: SET_FILTER_SETS_CONFIG_FAIL, filterSetsConfig });
  }
};
const SAVE_FILTER_SETS = 'SAVE_FILTER_SETS';
function saveFilterSets(name, filtersSetId, dataMask) {
  return {
    type: SAVE_FILTER_SETS,
    name,
    filtersSetId,
    dataMask };

}
const SET_FOCUSED_NATIVE_FILTER = 'SET_FOCUSED_NATIVE_FILTER';
const UNSET_FOCUSED_NATIVE_FILTER = 'UNSET_FOCUSED_NATIVE_FILTER';
function setFocusedNativeFilter(id) {
  return {
    type: SET_FOCUSED_NATIVE_FILTER,
    id };

}
function unsetFocusedNativeFilter() {
  return {
    type: UNSET_FOCUSED_NATIVE_FILTER };

}

/***/ }),

/***/ 92242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pF": () => (/* binding */ REMOVAL_DELAY_SECS),
/* harmony export */   "G$": () => (/* binding */ validateForm),
/* harmony export */   "GA": () => (/* binding */ createHandleSave),
/* harmony export */   "zt": () => (/* binding */ createHandleTabEdit),
/* harmony export */   "rW": () => (/* binding */ NATIVE_FILTER_PREFIX),
/* harmony export */   "W6": () => (/* binding */ generateFilterId),
/* harmony export */   "QN": () => (/* binding */ getFilterIds)
/* harmony export */ });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14670);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_dataMask_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8868);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60650);



const REMOVAL_DELAY_SECS = 5;
const validateForm = async (form, currentFilterId, filterConfigMap, filterIds, removedFilters, setCurrentFilterId) => {
  const addValidationError = (filterId, field, error) => {
    const fieldError = {
      name: ['filters', filterId, field],
      errors: [error] };

    form.setFields([fieldError]);
    setCurrentFilterId(filterId);
  };
  try {
    let formValues;
    try {
      formValues = await form.validateFields();
    }
    catch (error) {var _error$errorFields;
      // In Jest tests in chain of tests, Ant generate `outOfDate` error so need to catch it here
      if (!(error != null && (_error$errorFields = error.errorFields) != null && _error$errorFields.length) && error != null && error.outOfDate) {
        formValues = error.values;
      } else
      {
        throw error;
      }
    }
    const validateCycles = (filterId, trace = []) => {var _formValues$filters, _formValues$filters$f, _formValues$filters$f2, _filterConfigMap$filt, _filterConfigMap$filt2;
      if (trace.includes(filterId)) {
        addValidationError(filterId, 'parentFilter', (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__.t)('Cannot create cyclic hierarchy'));
        return false;
      }
      const parentId = (_formValues$filters = formValues.filters) != null && _formValues$filters[filterId] ? (_formValues$filters$f =
      formValues.filters[filterId]) == null ? void 0 : (_formValues$filters$f2 = _formValues$filters$f.parentFilter) == null ? void 0 : _formValues$filters$f2.value : (_filterConfigMap$filt =
      filterConfigMap[filterId]) == null ? void 0 : (_filterConfigMap$filt2 = _filterConfigMap$filt.cascadeParentIds) == null ? void 0 : _filterConfigMap$filt2[0];
      if (parentId) {
        return validateCycles(parentId, [...trace, filterId]);
      }
      return true;
    };
    const invalid = filterIds.
    filter((id) => !removedFilters[id]).
    some((filterId) => !validateCycles(filterId));
    if (invalid) {
      return null;
    }
    return formValues;
  }
  catch (error) {
    console.warn('Filter configuration failed:', error);
    if (!error.errorFields || !error.errorFields.length)
    return null; // not a validation error
    const errorFields = error.errorFields;
    // filter id is the second item in the field name
    if (!errorFields.some((field) => field.name[1] === currentFilterId)) {
      // switch to the first tab that had a validation error
      const filterError = errorFields.find((field) => field.name[0] === 'filters');
      if (filterError) {
        const filterId = filterError.name[1];
        setCurrentFilterId(filterId);
      }
    }
    return null;
  }
};
const createHandleSave = (filterConfigMap, filterIds, removedFilters, saveForm, values) => async () => {
  const newFilterConfig = filterIds.
  filter((id) => !removedFilters[id]).
  map((id) => {var _values$filters, _formInputs$controlVa, _formInputs$requiredF, _formInputs$defaultDa;
    // create a filter config object from the form inputs
    const formInputs = (_values$filters = values.filters) == null ? void 0 : _values$filters[id];
    // if user didn't open a filter, return the original config
    if (!formInputs)
    return filterConfigMap[id];
    const target = {};
    if (formInputs.dataset) {
      target.datasetId = formInputs.dataset.value;
    }
    if (formInputs.dataset && formInputs.column) {
      target.column = { name: formInputs.column };
    }
    return {
      id,
      adhoc_filters: formInputs.adhoc_filters,
      time_range: formInputs.time_range,
      controlValues: (_formInputs$controlVa = formInputs.controlValues) != null ? _formInputs$controlVa : {},
      granularity_sqla: formInputs.granularity_sqla,
      requiredFirst: Object.values((_formInputs$requiredF = formInputs.requiredFirst) != null ? _formInputs$requiredF : {}).find((rf) => rf),
      name: formInputs.name,
      filterType: formInputs.filterType,
      // for now there will only ever be one target
      targets: [target],
      defaultDataMask: (_formInputs$defaultDa = formInputs.defaultDataMask) != null ? _formInputs$defaultDa : (0,src_dataMask_reducer__WEBPACK_IMPORTED_MODULE_1__/* .getInitialDataMask */ .H)(),
      cascadeParentIds: formInputs.parentFilter ?
      [formInputs.parentFilter.value] :
      [],
      scope: formInputs.scope,
      sortMetric: formInputs.sortMetric,
      type: formInputs.type };

  });
  await saveForm(newFilterConfig);
};
const createHandleTabEdit = (setRemovedFilters, setSaveAlertVisible, addFilter) => (filterId, action) => {
  const completeFilterRemoval = (filterId) => {
    // the filter state will actually stick around in the form,
    // and the filterConfig/newFilterIds, but we use removedFilters
    // to mark it as removed.
    setRemovedFilters((removedFilters) => ({
      ...removedFilters,
      [filterId]: { isPending: false } }));

  };
  if (action === 'remove') {
    // first set up the timer to completely remove it
    const timerId = window.setTimeout(() => completeFilterRemoval(filterId), REMOVAL_DELAY_SECS * 1000);
    // mark the filter state as "removal in progress"
    setRemovedFilters((removedFilters) => ({
      ...removedFilters,
      [filterId]: { isPending: true, timerId } }));

    setSaveAlertVisible(false);
  } else
  if (action === 'add') {
    addFilter();
  }
};
const NATIVE_FILTER_PREFIX = 'NATIVE_FILTER-';
const generateFilterId = () => `${NATIVE_FILTER_PREFIX}${shortid__WEBPACK_IMPORTED_MODULE_0___default().generate()}`;
const getFilterIds = (config) => config.map((filter) => filter.id);

/***/ }),

/***/ 39759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ getInitialState),
/* harmony export */   "Z": () => (/* binding */ nativeFilterReducer)
/* harmony export */ });
/* harmony import */ var src_dashboard_actions_nativeFilters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52794);
/* harmony import */ var _actions_hydrate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47173);
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


function getInitialState({ filterSetsConfig, filterConfig, state: prevState }) {
  const state = {};
  const filters = {};
  if (filterConfig) {
    filterConfig.forEach((filter) => {
      const { id } = filter;
      filters[id] = filter;
    });
    state.filters = filters;
  } else
  {var _prevState$filters;
    state.filters = (_prevState$filters = prevState == null ? void 0 : prevState.filters) != null ? _prevState$filters : {};
  }
  if (filterSetsConfig) {
    const filterSets = {};
    filterSetsConfig.forEach((filtersSet) => {
      const { id } = filtersSet;
      filterSets[id] = filtersSet;
    });
    state.filterSets = filterSets;
  } else
  {var _prevState$filterSets;
    state.filterSets = (_prevState$filterSets = prevState == null ? void 0 : prevState.filterSets) != null ? _prevState$filterSets : {};
  }
  state.focusedFilterId = undefined;
  return state;
}
function nativeFilterReducer(state = {
  filters: {},
  filterSets: {} },
action) {
  const { filterSets } = state;
  switch (action.type) {
    case _actions_hydrate__WEBPACK_IMPORTED_MODULE_1__/* .HYDRATE_DASHBOARD */ .$:
      return {
        filters: action.data.nativeFilters.filters,
        filterSets: action.data.nativeFilters.filterSets };

    case src_dashboard_actions_nativeFilters__WEBPACK_IMPORTED_MODULE_0__/* .SAVE_FILTER_SETS */ .gc:
      return {
        ...state,
        filterSets: {
          ...filterSets,
          [action.filtersSetId]: {
            id: action.filtersSetId,
            name: action.name,
            dataMask: action.dataMask } } };



    case src_dashboard_actions_nativeFilters__WEBPACK_IMPORTED_MODULE_0__/* .SET_FILTER_CONFIG_COMPLETE */ .qe:
    case src_dashboard_actions_nativeFilters__WEBPACK_IMPORTED_MODULE_0__/* .SET_IN_SCOPE_STATUS_OF_FILTERS */ .kN:
      return getInitialState({ filterConfig: action.filterConfig, state });
    case src_dashboard_actions_nativeFilters__WEBPACK_IMPORTED_MODULE_0__/* .SET_FILTER_SETS_CONFIG_COMPLETE */ .SS:
      return getInitialState({
        filterSetsConfig: action.filterSetsConfig,
        state });

    case src_dashboard_actions_nativeFilters__WEBPACK_IMPORTED_MODULE_0__/* .SET_FOCUSED_NATIVE_FILTER */ .X8:
      return {
        ...state,
        focusedFilterId: action.id };

    case src_dashboard_actions_nativeFilters__WEBPACK_IMPORTED_MODULE_0__/* .UNSET_FOCUSED_NATIVE_FILTER */ .T6:
      return {
        ...state,
        focusedFilterId: undefined };

    // TODO handle SET_FILTER_CONFIG_FAIL action
    default:
      return state;}

}

/***/ }),

/***/ 20194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ getDashboardFilterKey),
/* harmony export */   "_": () => (/* binding */ getChartIdAndColumnFromFilterKey)
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
function getDashboardFilterKey({ chartId, column }) {
  return `${chartId}_${column}`;
}
const filterKeySplitter = /^([0-9]+)_(.*)$/;
function getChartIdAndColumnFromFilterKey(key) {
  const match = filterKeySplitter.exec(key);
  if (!match)
  throw new Error('Cannot parse invalid filter key');
  return { chartId: parseInt(match[1], 10), column: match[2] };
}

/***/ }),

/***/ 56967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getLocationHash)
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
function getLocationHash() {
  return (window.location.hash || '#').substring(1);
}

/***/ }),

/***/ 74599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ch": () => (/* binding */ CLEAR_DATA_MASK_STATE),
/* harmony export */   "A": () => (/* binding */ UPDATE_DATA_MASK),
/* harmony export */   "mO": () => (/* binding */ SET_DATA_MASK_FOR_FILTER_CONFIG_COMPLETE),
/* harmony export */   "u3": () => (/* binding */ SET_DATA_MASK_FOR_FILTER_CONFIG_FAIL),
/* harmony export */   "Ft": () => (/* binding */ setDataMaskForFilterConfigComplete),
/* harmony export */   "eG": () => (/* binding */ updateDataMask),
/* harmony export */   "ze": () => (/* binding */ clearDataMask),
/* harmony export */   "sh": () => (/* binding */ clearDataMaskState)
/* harmony export */ });
/* harmony import */ var _featureFlags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91877);
/* harmony import */ var _featureFlags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46415);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8868);


const CLEAR_DATA_MASK_STATE = 'CLEAR_DATA_MASK_STATE';
const UPDATE_DATA_MASK = 'UPDATE_DATA_MASK';
const SET_DATA_MASK_FOR_FILTER_CONFIG_COMPLETE = 'SET_DATA_MASK_FOR_FILTER_CONFIG_COMPLETE';
const SET_DATA_MASK_FOR_FILTER_CONFIG_FAIL = 'SET_DATA_MASK_FOR_FILTER_CONFIG_FAIL';
function setDataMaskForFilterConfigComplete(filterConfig, filters) {
  return {
    type: SET_DATA_MASK_FOR_FILTER_CONFIG_COMPLETE,
    filterConfig,
    filters };

}
function updateDataMask(filterId, dataMask) {
  // Only apply data mask if one of the relevant features is enabled
  const isFeatureFlagActive = (0,_featureFlags__WEBPACK_IMPORTED_MODULE_1__/* .isFeatureEnabled */ .cr)(_featureFlags__WEBPACK_IMPORTED_MODULE_2__/* .FeatureFlag.DASHBOARD_NATIVE_FILTERS */ .T.DASHBOARD_NATIVE_FILTERS) ||
  (0,_featureFlags__WEBPACK_IMPORTED_MODULE_1__/* .isFeatureEnabled */ .cr)(_featureFlags__WEBPACK_IMPORTED_MODULE_2__/* .FeatureFlag.DASHBOARD_CROSS_FILTERS */ .T.DASHBOARD_CROSS_FILTERS);
  return {
    type: UPDATE_DATA_MASK,
    filterId,
    dataMask: isFeatureFlagActive ? dataMask : {} };

}
function clearDataMask(filterId) {
  return updateDataMask(filterId, (0,_reducer__WEBPACK_IMPORTED_MODULE_0__/* .getInitialDataMask */ .H)(filterId));
}
function clearDataMaskState() {
  return {
    type: CLEAR_DATA_MASK_STATE };

}

/***/ }),

/***/ 8868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ getInitialDataMask),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18172);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46415);
/* harmony import */ var src_dashboard_components_nativeFilters_FiltersConfigModal_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92242);
/* harmony import */ var src_dashboard_actions_hydrate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47173);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91877);
/* harmony import */ var src_utils_urlUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23525);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27600);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74599);
/* harmony import */ var _reduxUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99543);
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
/* eslint-disable no-param-reassign */
// <- When we work with Immer, we need reassign, so disabling lint









function getInitialDataMask(id, moreProps = {}) {
  let otherProps = {};
  if (id) {
    otherProps = {
      id };

  }
  return {
    ...otherProps,
    extraFormData: {},
    filterState: {},
    ownState: {},
    ...moreProps };

}
function fillNativeFilters(filterConfig, mergedDataMask, draftDataMask, currentFilters) {
  const dataMaskFromUrl = (0,src_utils_urlUtils__WEBPACK_IMPORTED_MODULE_2__/* .getUrlParam */ .e)(src_constants__WEBPACK_IMPORTED_MODULE_3__/* .URL_PARAMS.nativeFilters */ .KD.nativeFilters) || {};
  filterConfig.forEach((filter) => {var _currentFilters$filte;
    mergedDataMask[filter.id] = {
      ...getInitialDataMask(filter.id),
      ...filter.defaultDataMask,
      ...dataMaskFromUrl[filter.id] };

    if (currentFilters &&
    !(0,_reduxUtils__WEBPACK_IMPORTED_MODULE_5__/* .areObjectsEqual */ .JB)(filter.defaultDataMask, (_currentFilters$filte = currentFilters[filter.id]) == null ? void 0 : _currentFilters$filte.defaultDataMask, { ignoreUndefined: true })) {
      mergedDataMask[filter.id] = {
        ...mergedDataMask[filter.id],
        ...filter.defaultDataMask };

    }
  });
  // Get back all other non-native filters
  Object.values(draftDataMask).forEach((filter) => {
    if (!String(filter == null ? void 0 : filter.id).startsWith(src_dashboard_components_nativeFilters_FiltersConfigModal_utils__WEBPACK_IMPORTED_MODULE_0__/* .NATIVE_FILTER_PREFIX */ .rW)) {
      mergedDataMask[filter == null ? void 0 : filter.id] = filter;
    }
  });
}
const dataMaskReducer = (0,immer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)((draft, action) => {var _action$data$dashboar3, _action$data$dashboar4, _action$data$dashboar5, _action$filterConfig;
  const cleanState = {};
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_4__/* .CLEAR_DATA_MASK_STATE */ .Ch:
      return cleanState;
    case _actions__WEBPACK_IMPORTED_MODULE_4__/* .UPDATE_DATA_MASK */ .A:
      draft[action.filterId] = {
        ...getInitialDataMask(action.filterId),
        ...draft[action.filterId],
        ...action.dataMask };

      return draft;
    // TODO: update hydrate to .ts
    // @ts-ignore
    case src_dashboard_actions_hydrate__WEBPACK_IMPORTED_MODULE_1__/* .HYDRATE_DASHBOARD */ .$:
      if ((0,src_featureFlags__WEBPACK_IMPORTED_MODULE_7__/* .isFeatureEnabled */ .cr)(_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .FeatureFlag.DASHBOARD_CROSS_FILTERS */ .T.DASHBOARD_CROSS_FILTERS)) {var _action$data$dashboar, _action$data$dashboar2;
        Object.keys(
        // @ts-ignore
        (_action$data$dashboar = action.data.dashboardInfo) == null ? void 0 : (_action$data$dashboar2 = _action$data$dashboar.metadata) == null ? void 0 : _action$data$dashboar2.chart_configuration).forEach((id) => {
          cleanState[id] = {
            ...getInitialDataMask(id) // take initial data
          };
        });
      }
      fillNativeFilters(
      // @ts-ignore
      (_action$data$dashboar3 = (_action$data$dashboar4 = action.data.dashboardInfo) == null ? void 0 : (_action$data$dashboar5 = _action$data$dashboar4.metadata) == null ? void 0 : _action$data$dashboar5.native_filter_configuration) != null ? _action$data$dashboar3 :
      [], cleanState, draft);
      return cleanState;
    case _actions__WEBPACK_IMPORTED_MODULE_4__/* .SET_DATA_MASK_FOR_FILTER_CONFIG_COMPLETE */ .mO:
      fillNativeFilters((_action$filterConfig = action.filterConfig) != null ? _action$filterConfig : [], cleanState, draft, action.filters);
      return cleanState;
    default:
      return draft;}

}, {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataMaskReducer);

/***/ }),

/***/ 5579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var src_components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29487);
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35932);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21173);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60650);
/* harmony import */ var src_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74069);
/* harmony import */ var src_components_AsyncEsmComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67913);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91877);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46415);
/* harmony import */ var src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98286);
/* harmony import */ var src_components_MessageToasts_withToasts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14114);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11965);
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









const DatasourceEditor = (0,src_components_AsyncEsmComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(() => __webpack_require__.e(/* import() */ 9893).then(__webpack_require__.bind(__webpack_require__, 79893)));
const StyledDatasourceModal = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .iK)(src_components_Modal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)`
  .modal-content {
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .modal-header {
    flex: 0 1 auto;
  }
  .modal-body {
    flex: 1 1 auto;
    overflow: auto;
  }

  .modal-footer {
    flex: 0 1 auto;
  }

  .ant-modal-body {
    overflow: visible;
  }
`;
function buildExtraJsonObject(item) {
  const certification = item != null && item.certified_by || item != null && item.certification_details ?
  {
    certified_by: item == null ? void 0 : item.certified_by,
    details: item == null ? void 0 : item.certification_details } :

  undefined;
  return JSON.stringify({
    certification,
    warning_markdown: item == null ? void 0 : item.warning_markdown });

}
const DatasourceModal = ({ addSuccessToast, datasource, onDatasourceSave, onHide, show }) => {
  const [currentDatasource, setCurrentDatasource] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(datasource);
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isSaving, setIsSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [modal, contextHolder] = src_components_Modal__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useModal */ .Z.useModal();
  const onConfirmSave = () => {var _currentDatasource$ta, _currentDatasource$da, _currentDatasource$me, _currentDatasource$co;
    // Pull out extra fields into the extra object
    const schema = ((_currentDatasource$ta = currentDatasource.tableSelector) == null ? void 0 : _currentDatasource$ta.schema) || ((_currentDatasource$da =
    currentDatasource.databaseSelector) == null ? void 0 : _currentDatasource$da.schema) ||
    currentDatasource.schema;
    setIsSaving(true);
    _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"].post */ .Z.post({
      endpoint: '/datasource/save/',
      postPayload: {
        data: {
          ...currentDatasource,
          schema,
          metrics: currentDatasource == null ? void 0 : (_currentDatasource$me = currentDatasource.metrics) == null ? void 0 : _currentDatasource$me.map((metric) => ({
            ...metric,
            extra: buildExtraJsonObject(metric) })),

          columns: currentDatasource == null ? void 0 : (_currentDatasource$co = currentDatasource.columns) == null ? void 0 : _currentDatasource$co.map((column) => ({
            ...column,
            extra: buildExtraJsonObject(column) })),

          type: currentDatasource.type || currentDatasource.datasource_type,
          owners: currentDatasource.owners.map((o) => o.value || o.id) } } }).



    then(({ json }) => {
      addSuccessToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('The dataset has been saved'));
      onDatasourceSave({
        ...json,
        owners: currentDatasource.owners });

      onHide();
    }).
    catch((response) => {
      setIsSaving(false);
      (0,src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_5__/* .getClientErrorObject */ .O)(response).then(({ error }) => {
        modal.error({
          title: 'Error',
          content: error || (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('An error has occurred'),
          okButtonProps: { danger: true, className: 'btn-danger' } });

      });
    });
  };
  const onDatasourceChange = (data, err) => {
    setCurrentDatasource({
      ...data,
      metrics: data == null ? void 0 : data.metrics.map((metric) => ({
        ...metric,
        is_certified: (metric == null ? void 0 : metric.certified_by) || (metric == null ? void 0 : metric.certification_details) })) });


    setErrors(err);
  };
  const renderSaveDialog = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_components_Alert__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, { css: (theme) => ({
      marginTop: theme.gridUnit * 4,
      marginBottom: theme.gridUnit * 4 }),
    type: "warning", showIcon: true, message: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)(`The dataset configuration exposed here
                affects all the charts using this dataset.
                Be mindful that changing settings
                here may affect other charts
                in undesirable ways.`) }),
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Are you sure you want to save and apply changes?'));

  const onClickSave = () => {
    dialog.current = modal.confirm({
      title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Confirm save'),
      content: renderSaveDialog(),
      onOk: onConfirmSave,
      icon: null });

  };
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(StyledDatasourceModal, { show: show, onHide: onHide, title: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", null,
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Edit Dataset '),
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong", null, currentDatasource.table_name)),
    footer: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    (0,src_featureFlags__WEBPACK_IMPORTED_MODULE_11__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_12__/* .FeatureFlag.ENABLE_REACT_CRUD_VIEWS */ .T.ENABLE_REACT_CRUD_VIEWS) && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { buttonSize: "small", buttonStyle: "default", className: "m-r-5", onClick: () => {
        window.location.href =
        currentDatasource.edit_url || currentDatasource.url;
      } },
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Use legacy datasource editor')),

    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { buttonSize: "small", className: "m-r-5", onClick: onHide },
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Cancel')),

    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { buttonSize: "small", buttonStyle: "primary", onClick: onClickSave, disabled: isSaving || errors.length > 0 },
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Save'))),

    responsive: true },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(DatasourceEditor, { showLoadingForImport: true, height: 500, datasource: currentDatasource, onChange: onDatasourceChange }),
  contextHolder);

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,src_components_MessageToasts_withToasts__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(DatasourceModal));

/***/ }),

/***/ 65725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Control)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/ErrorBoundary/index.jsx
var ErrorBoundary = __webpack_require__(57902);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/shared-controls/components/index.js + 11 modules
var components = __webpack_require__(22016);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var common_components = __webpack_require__(82191);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(37703);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js + 2 modules
var emotion_element_99289b21_browser_esm = __webpack_require__(68135);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/components/InfoTooltipWithTrigger.js
var InfoTooltipWithTrigger = __webpack_require__(88186);
// EXTERNAL MODULE: ./src/components/Popover/index.tsx
var Popover = __webpack_require__(76697);
// EXTERNAL MODULE: ./src/components/AsyncEsmComponent/index.tsx
var AsyncEsmComponent = __webpack_require__(67913);
// EXTERNAL MODULE: ./src/explore/exploreUtils/index.js
var exploreUtils = __webpack_require__(12515);
// EXTERNAL MODULE: ./src/chart/chartAction.js
var chartAction = __webpack_require__(22428);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/explore/components/controls/CustomListItem/index.tsx
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



function CustomListItem(props) {
  const { selectable, children, ...rest } = props;
  const theme = (0,style/* useTheme */.Fg)();
  const css = {
    '&.ant-list-item': {
      padding: `${theme.gridUnit + 2}px ${theme.gridUnit * 3}px`,
      ':first-of-type': {
        borderTopLeftRadius: theme.gridUnit,
        borderTopRightRadius: theme.gridUnit },

      ':last-of-type': {
        borderBottomLeftRadius: theme.gridUnit,
        borderBottomRightRadius: theme.gridUnit } } };



  if (selectable) {
    css['&:hover'] = {
      cursor: 'pointer',
      backgroundColor: theme.colors.grayscale.light4 };

  }
  return (0,emotion_react_browser_esm.jsx)(common_components/* List.Item */.aV.Item, extends_default()({}, rest, { css: css }),
  children);

}
;// CONCATENATED MODULE: ./src/explore/components/controls/AnnotationLayerControl/index.jsx
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












const AnnotationLayer = (0,AsyncEsmComponent/* default */.Z)(
() => Promise.all(/* import() */[__webpack_require__.e(7211), __webpack_require__.e(5094)]).then(__webpack_require__.bind(__webpack_require__, 25094)),
// size of overlay inner content
() => (0,emotion_react_browser_esm.jsx)("div", { style: { width: 450, height: 368 } }));


const propTypes = {
  colorScheme: (prop_types_default()).string.isRequired,
  annotationError: (prop_types_default()).object,
  annotationQuery: (prop_types_default()).object,
  vizType: (prop_types_default()).string,

  validationErrors: (prop_types_default()).array,
  name: (prop_types_default()).string.isRequired,
  actions: (prop_types_default()).object,
  value: prop_types_default().arrayOf((prop_types_default()).object),
  onChange: (prop_types_default()).func,
  refreshAnnotationData: (prop_types_default()).func };


const defaultProps = {
  vizType: '',
  value: [],
  annotationError: {},
  annotationQuery: {},
  onChange: () => {} };


class AnnotationLayerControl extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      popoverVisible: {},
      addedAnnotationIndex: null };

    this.addAnnotationLayer = this.addAnnotationLayer.bind(this);
    this.removeAnnotationLayer = this.removeAnnotationLayer.bind(this);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
  }

  componentDidMount() {
    // preload the AnotationLayer component and dependent libraries i.e. mathjs
    AnnotationLayer.preload();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { name, annotationError, validationErrors, value } = nextProps;
    if (Object.keys(annotationError).length && !validationErrors.length) {
      this.props.actions.setControlValue(
      name,
      value,
      Object.keys(annotationError));

    }
    if (!Object.keys(annotationError).length && validationErrors.length) {
      this.props.actions.setControlValue(name, value, []);
    }
  }

  addAnnotationLayer(originalAnnotation, newAnnotation) {
    let annotations = this.props.value;
    if (annotations.includes(originalAnnotation)) {
      annotations = annotations.map((anno) =>
      anno === originalAnnotation ? newAnnotation : anno);

    } else {
      annotations = [...annotations, newAnnotation];
      this.setState({ addedAnnotationIndex: annotations.length - 1 });
    }

    this.props.refreshAnnotationData(newAnnotation);
    this.props.onChange(annotations);
  }

  handleVisibleChange(visible, popoverKey) {
    this.setState((prevState) => ({
      popoverVisible: { ...prevState.popoverVisible, [popoverKey]: visible } }));

  }

  removeAnnotationLayer(annotation) {
    const annotations = this.props.value.filter((anno) => anno !== annotation);
    this.props.onChange(annotations);
  }

  renderPopover(popoverKey, annotation, error) {
    const id = (annotation == null ? void 0 : annotation.name) || '_new';

    return (
      (0,emotion_react_browser_esm.jsx)("div", { id: `annotation-pop-${id}` },
      (0,emotion_react_browser_esm.jsx)(AnnotationLayer, extends_default()({},
      annotation, {
        error: error,
        colorScheme: this.props.colorScheme,
        vizType: this.props.vizType,
        addAnnotationLayer: (newAnnotation) =>
        this.addAnnotationLayer(annotation, newAnnotation),

        removeAnnotationLayer: () => this.removeAnnotationLayer(annotation),
        close: () => {
          this.handleVisibleChange(false, popoverKey);
          this.setState({ addedAnnotationIndex: null });
        } }))));



  }

  renderInfo(anno) {
    const { annotationError, annotationQuery } = this.props;
    if (annotationQuery[anno.name]) {
      return (
        (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-refresh", style: { color: 'orange' }, "aria-hidden": true }));

    }
    if (annotationError[anno.name]) {
      return (
        (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, {
          label: "validation-errors",
          bsStyle: "danger",
          tooltip: annotationError[anno.name] }));


    }
    if (!anno.show) {
      return (0,emotion_react_browser_esm.jsx)("span", { style: { color: 'red' } }, " Hidden ");
    }
    return '';
  }

  render() {
    const { addedAnnotationIndex } = this.state;
    const addedAnnotation = this.props.value[addedAnnotationIndex];

    const annotations = this.props.value.map((anno, i) =>
    (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, {
      key: i,
      trigger: "click",
      placement: "right",
      title: (0,TranslatorSingleton.t)('Edit annotation layer'),
      css: (theme) => ({
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: theme.colors.grayscale.light4 } }),


      content: this.renderPopover(
      i,
      anno,
      this.props.annotationError[anno.name]),

      visible: this.state.popoverVisible[i],
      onVisibleChange: (visible) => this.handleVisibleChange(visible, i) },

    (0,emotion_react_browser_esm.jsx)(CustomListItem, { selectable: true },
    (0,emotion_react_browser_esm.jsx)("span", null, anno.name),
    (0,emotion_react_browser_esm.jsx)("span", { style: { float: 'right' } }, this.renderInfo(anno)))));




    const addLayerPopoverKey = 'add';
    return (
      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(common_components/* List */.aV, { bordered: true, css: (theme) => ({ borderRadius: theme.gridUnit }) },
      annotations,
      (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, {
        trigger: "click",
        placement: "right",
        content: this.renderPopover(addLayerPopoverKey, addedAnnotation),
        title: (0,TranslatorSingleton.t)('Add annotation layer'),
        visible: this.state.popoverVisible[addLayerPopoverKey],
        destroyTooltipOnHide: true,
        onVisibleChange: (visible) =>
        this.handleVisibleChange(visible, addLayerPopoverKey) },


      (0,emotion_react_browser_esm.jsx)(CustomListItem, { selectable: true },
      (0,emotion_react_browser_esm.jsx)("i", {

        className: "fa fa-plus" }),
      ' ', "\xA0 ",
      (0,TranslatorSingleton.t)('Add annotation layer'))))));





  }}


AnnotationLayerControl.propTypes = propTypes;
AnnotationLayerControl.defaultProps = defaultProps;

// Tried to hook this up through stores/control.jsx instead of using redux
// directly, could not figure out how to get access to the color_scheme
function mapStateToProps({ charts, explore }) {var _explore$controls, _explore$controls$col;
  const chartKey = (0,exploreUtils/* getChartKey */.Jp)(explore);
  const chart = charts[chartKey] || charts[0] || {};

  return {
    // eslint-disable-next-line camelcase
    colorScheme: (_explore$controls = explore.controls) == null ? void 0 : (_explore$controls$col = _explore$controls.color_scheme) == null ? void 0 : _explore$controls$col.value,
    annotationError: chart.annotationError,
    annotationQuery: chart.annotationQuery,
    vizType: explore.controls.viz_type.value };

}

function mapDispatchToProps(dispatch) {
  return {
    refreshAnnotationData: (annotationLayer) =>
    dispatch((0,chartAction.runAnnotationQuery)(annotationLayer)) };

}

const themedAnnotationLayerControl = (0,emotion_element_99289b21_browser_esm.b)(AnnotationLayerControl);

/* harmony default export */ const controls_AnnotationLayerControl = ((0,es/* connect */.$j)(
mapStateToProps,
mapDispatchToProps)(
themedAnnotationLayerControl));
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./src/explore/components/ControlHeader.jsx
var ControlHeader = __webpack_require__(93011);
;// CONCATENATED MODULE: ./src/explore/components/controls/BoundsControl.jsx
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







const BoundsControl_propTypes = {
  onChange: (prop_types_default()).func,
  value: (prop_types_default()).array };


const BoundsControl_defaultProps = {
  onChange: () => {},
  value: [null, null] };


const StyledDiv = style/* styled.div */.iK.div`
  display: flex;
`;

const MinInput = (0,style/* styled */.iK)(common_components/* InputNumber */.Rn)`
  flex: 1;
  margin-right: ${({ theme }) => theme.gridUnit}px;
`;

const MaxInput = (0,style/* styled */.iK)(common_components/* InputNumber */.Rn)`
  flex: 1;
  margin-left: ${({ theme }) => theme.gridUnit}px;
`;

class BoundsControl extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      minMax: [
      Number.isNaN(this.props.value[0]) ? '' : props.value[0],
      Number.isNaN(this.props.value[1]) ? '' : props.value[1]] };


    this.onChange = debounce_default()(this.onChange.bind(this), 300);
    this.onMinChange = this.onMinChange.bind(this);
    this.onMaxChange = this.onMaxChange.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual_default()(prevProps.value, this.props.value)) {
      this.update();
    }
  }

  update() {
    this.setState({
      minMax: [
      Number.isNaN(this.props.value[0]) ? '' : this.props.value[0],
      Number.isNaN(this.props.value[1]) ? '' : this.props.value[1]] });


  }

  onMinChange(value) {
    this.setState(
    (prevState) => ({
      minMax: [value, prevState.minMax[1]] }),

    this.onChange);

  }

  onMaxChange(value) {
    this.setState(
    (prevState) => ({
      minMax: [prevState.minMax[0], value] }),

    this.onChange);

  }

  onChange() {
    const mm = this.state.minMax;
    const min = Number.isNaN(parseFloat(mm[0])) ? null : parseFloat(mm[0]);
    const max = Number.isNaN(parseFloat(mm[1])) ? null : parseFloat(mm[1]);
    this.props.onChange([min, max]);
  }

  render() {
    return (
      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(ControlHeader/* default */.Z, this.props),
      (0,emotion_react_browser_esm.jsx)(StyledDiv, null,
      (0,emotion_react_browser_esm.jsx)(MinInput, {

        placeholder: (0,TranslatorSingleton.t)('Min'),
        onChange: this.onMinChange,
        value: this.state.minMax[0] }),

      (0,emotion_react_browser_esm.jsx)(MaxInput, {

        placeholder: (0,TranslatorSingleton.t)('Max'),
        onChange: this.onMaxChange,
        value: this.state.minMax[1] }))));




  }}


BoundsControl.propTypes = BoundsControl_propTypes;
BoundsControl.defaultProps = BoundsControl_defaultProps;
// EXTERNAL MODULE: ./src/explore/components/controls/CheckboxControl.jsx
var CheckboxControl = __webpack_require__(79069);
// EXTERNAL MODULE: ./node_modules/shortid/index.js
var shortid = __webpack_require__(14670);
var shortid_default = /*#__PURE__*/__webpack_require__.n(shortid);
// EXTERNAL MODULE: ./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js
var react_sortable_hoc_esm = __webpack_require__(95742);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/explore/components/controls/OptionControls/index.tsx
var OptionControls = __webpack_require__(33334);
;// CONCATENATED MODULE: ./src/explore/components/controls/CollectionControl/index.jsx
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













const CollectionControl_propTypes = {
  name: (prop_types_default()).string.isRequired,
  label: (prop_types_default()).string,
  description: (prop_types_default()).string,
  placeholder: (prop_types_default()).string,
  addTooltip: (prop_types_default()).string,
  itemGenerator: (prop_types_default()).func,
  keyAccessor: (prop_types_default()).func,
  onChange: (prop_types_default()).func,
  value: prop_types_default().oneOfType([(prop_types_default()).array]),
  isFloat: (prop_types_default()).bool,
  isInt: (prop_types_default()).bool,
  controlName: (prop_types_default()).string.isRequired };


const CollectionControl_defaultProps = {
  label: null,
  description: null,
  onChange: () => {},
  placeholder: (0,TranslatorSingleton.t)('Empty collection'),
  itemGenerator: () => ({ key: shortid_default().generate() }),
  keyAccessor: (o) => o.key,
  value: [],
  addTooltip: (0,TranslatorSingleton.t)('Add an item') };

const SortableListItem = (0,react_sortable_hoc_esm/* SortableElement */.W8)(CustomListItem);
const SortableList = (0,react_sortable_hoc_esm/* SortableContainer */.JN)(common_components/* List */.aV);
const SortableDragger = (0,react_sortable_hoc_esm/* SortableHandle */.W6)(() =>
(0,emotion_react_browser_esm.jsx)("i", {
  role: "img",
  "aria-label": "drag",
  className: "fa fa-bars text-primary",
  style: { cursor: 'ns-resize' } }));var _ref =  true ? { name: "11g6mpt", styles: "justify-content:flex-start" } : 0;



class CollectionControl extends react.Component {
  constructor(props) {
    super(props);
    this.onAdd = this.onAdd.bind(this);
  }

  onChange(i, value) {
    const newValue = [...this.props.value];
    newValue[i] = { ...this.props.value[i], ...value };
    this.props.onChange(newValue);
  }

  onAdd() {
    this.props.onChange(this.props.value.concat([this.props.itemGenerator()]));
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.props.onChange((0,react_sortable_hoc_esm/* arrayMove */.Rp)(this.props.value, oldIndex, newIndex));
  }

  removeItem(i) {
    this.props.onChange(this.props.value.filter((o, ix) => i !== ix));
  }

  renderList() {
    if (this.props.value.length === 0) {
      return (0,emotion_react_browser_esm.jsx)("div", { className: "text-muted" }, this.props.placeholder);
    }
    const Control = controls[this.props.controlName];
    return (
      (0,emotion_react_browser_esm.jsx)(SortableList, {
        useDragHandle: true,
        lockAxis: "y",
        onSortEnd: this.onSortEnd.bind(this),
        bordered: true,
        css: (theme) => ({
          borderRadius: theme.gridUnit }) },


      this.props.value.map((o, i) => {
        // label relevant only for header, not here
        const { label, ...commonProps } = this.props;
        return (
          (0,emotion_react_browser_esm.jsx)(SortableListItem, {
            className: "clearfix",
            css: _ref,
            key: this.props.keyAccessor(o),
            index: i },

          (0,emotion_react_browser_esm.jsx)(SortableDragger, null),
          (0,emotion_react_browser_esm.jsx)("div", {
            css: (theme) => ({
              flex: 1,
              marginLeft: theme.gridUnit * 2,
              marginRight: theme.gridUnit * 2 }) },


          (0,emotion_react_browser_esm.jsx)(Control, extends_default()({},
          commonProps,
          o, {
            onChange: this.onChange.bind(this, i) }))),


          (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, {
            icon: "times",
            label: "remove-item",
            tooltip: (0,TranslatorSingleton.t)('Remove item'),
            bsStyle: "primary",
            onClick: this.removeItem.bind(this, i) })));



      })));


  }

  render() {
    const { theme } = this.props;
    return (
      (0,emotion_react_browser_esm.jsx)("div", { className: "CollectionControl" },
      (0,emotion_react_browser_esm.jsx)(OptionControls/* HeaderContainer */.gM, null,
      (0,emotion_react_browser_esm.jsx)(ControlHeader/* default */.Z, this.props),
      (0,emotion_react_browser_esm.jsx)(OptionControls/* AddIconButton */.IG, { onClick: this.onAdd },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.PlusLarge */.Z.PlusLarge, {
        iconSize: "s",
        iconColor: theme.colors.grayscale.light5 }))),



      this.renderList()));


  }}


CollectionControl.propTypes = CollectionControl_propTypes;
CollectionControl.defaultProps = CollectionControl_defaultProps;

/* harmony default export */ const controls_CollectionControl = ((0,emotion_element_99289b21_browser_esm.b)(CollectionControl));
// EXTERNAL MODULE: ./node_modules/react-color/lib/index.js
var lib = __webpack_require__(24198);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalSchemeRegistrySingleton.js
var CategoricalSchemeRegistrySingleton = __webpack_require__(34042);
;// CONCATENATED MODULE: ./src/explore/components/controls/ColorPickerControl.jsx
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







const ColorPickerControl_propTypes = {
  onChange: (prop_types_default()).func,
  value: (prop_types_default()).object };


const ColorPickerControl_defaultProps = {
  onChange: () => {} };


const swatchCommon = {
  position: 'absolute',
  width: '50px',
  height: '20px',
  top: '0px',
  left: '0px',
  right: '0px',
  bottom: '0px' };


const styles = {
  swatch: {
    width: '50px',
    height: '20px',
    position: 'relative',
    padding: '5px',
    borderRadius: '1px',
    display: 'inline-block',
    cursor: 'pointer',
    boxShadow:
    'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.25) 0px 0px 4px inset' },

  color: {
    ...swatchCommon,
    borderRadius: '2px' },

  checkboard: {
    ...swatchCommon,
    background:
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==") left center' } };


class ColorPickerControl extends react.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(col) {
    this.props.onChange(col.rgb);
  }

  renderPopover() {
    const presetColors = (0,CategoricalSchemeRegistrySingleton/* default */.Z)().
    get().
    colors.filter((s, i) => i < 7);
    return (
      (0,emotion_react_browser_esm.jsx)("div", { id: "filter-popover", className: "color-popover" },
      (0,emotion_react_browser_esm.jsx)(lib/* SketchPicker */.xS, {
        color: this.props.value,
        onChange: this.onChange,
        presetColors: presetColors })));



  }

  render() {
    const c = this.props.value || { r: 0, g: 0, b: 0, a: 0 };
    const colStyle = {
      ...styles.color,
      background: `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})` };

    return (
      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(ControlHeader/* default */.Z, this.props),
      (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, {
        trigger: "click",
        placement: "right",
        content: this.renderPopover() },

      (0,emotion_react_browser_esm.jsx)("div", { style: styles.swatch },
      (0,emotion_react_browser_esm.jsx)("div", { style: styles.checkboard }),
      (0,emotion_react_browser_esm.jsx)("div", { style: colStyle })))));




  }}


ColorPickerControl.propTypes = ColorPickerControl_propTypes;
ColorPickerControl.defaultProps = ColorPickerControl_defaultProps;
// EXTERNAL MODULE: ./src/explore/components/controls/ColorSchemeControl.jsx
var ColorSchemeControl = __webpack_require__(71119);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./src/components/Alert/index.tsx
var Alert = __webpack_require__(29487);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./src/components/TableView/index.ts
var TableView = __webpack_require__(76962);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/views/CRUD/hooks.ts
var hooks = __webpack_require__(34858);
// EXTERNAL MODULE: ./src/constants.ts
var constants = __webpack_require__(27600);
// EXTERNAL MODULE: ./src/utils/getClientErrorObject.ts
var getClientErrorObject = __webpack_require__(98286);
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(38703);
// EXTERNAL MODULE: ./src/views/CRUD/data/dataset/constants.ts
var dataset_constants = __webpack_require__(52389);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/components/FacePile/index.tsx + 1 modules
var FacePile = __webpack_require__(34581);
;// CONCATENATED MODULE: ./src/datasource/ChangeDatasourceModal.tsx
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















const CONFIRM_WARNING_MESSAGE = (0,TranslatorSingleton.t)('Warning! Changing the dataset may break the chart if the metadata does not exist.');
const CHANGE_WARNING_MSG = (0,TranslatorSingleton.t)('Changing the dataset may break the chart if the chart relies ' +
'on columns or metadata that does not exist in the target dataset');
const ChangeDatasourceModal_Modal = (0,style/* styled */.iK)(Modal/* default */.Z)`
  .ant-modal-body {
    display: flex;
    flex-direction: column;
  }
`;
const ConfirmModalStyled = style/* styled.div */.iK.div`
  .btn-container {
    display: flex;
    justify-content: flex-end;
    padding: 0px 15px;
    margin: 10px 0 0 0;
  }

  .confirm-modal-container {
    margin: 9px;
  }
`;
const StyledSpan = style/* styled.span */.iK.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.dark1};
  &: hover {
    color: ${({ theme }) => theme.colors.primary.dark2};
  }
`;
const ChangeDatasourceModal = ({ addDangerToast, addSuccessToast, onChange, onDatasourceSave, onHide, show }) => {
  const [filter, setFilter] = (0,react.useState)(undefined);
  const [pageIndex, setPageIndex] = (0,react.useState)(0);
  const [sortBy, setSortBy] = (0,react.useState)(dataset_constants/* SORT_BY */.dY);
  const [confirmChange, setConfirmChange] = (0,react.useState)(false);
  const [confirmedDataset, setConfirmedDataset] = (0,react.useState)();
  const searchRef = (0,react.useRef)(null);
  const { state: { loading, resourceCollection, resourceCount }, fetchData } = (0,hooks/* useListViewResource */.Yi)('dataset', (0,TranslatorSingleton.t)('dataset'), addDangerToast);
  const selectDatasource = (0,react.useCallback)((datasource) => {
    setConfirmChange(true);
    setConfirmedDataset(datasource);
  }, []);
  const fetchDatasetPayload = {
    pageIndex,
    pageSize: dataset_constants/* PAGE_SIZE */.IV,
    filters: [],
    sortBy };

  (0,exploreUtils/* useDebouncedEffect */.bX)(() => {
    fetchData({
      ...fetchDatasetPayload,
      ...(filter && {
        filters: [
        {
          id: 'table_name',
          operator: 'ct',
          value: filter }] }) });




  }, constants/* SLOW_DEBOUNCE */.M$, [filter, pageIndex, sortBy]);
  (0,react.useEffect)(() => {
    const onEnterModal = async () => {
      setTimeout(() => {var _searchRef$current;return searchRef == null ? void 0 : (_searchRef$current = searchRef.current) == null ? void 0 : _searchRef$current.focus();}, 200);
    };
    if (show) {
      onEnterModal();
    }
  }, [
  addDangerToast,
  fetchData,
  onChange,
  onDatasourceSave,
  onHide,
  selectDatasource,
  show]);

  const changeSearch = (event) => {var _event$target$value;
    const searchValue = (_event$target$value = event.target.value) != null ? _event$target$value : '';
    setFilter(searchValue);
    setPageIndex(0);
  };
  const handleChangeConfirm = () => {
    SupersetClient/* default.get */.Z.get({
      endpoint: `/datasource/get/${confirmedDataset == null ? void 0 : confirmedDataset.type}/${confirmedDataset == null ? void 0 : confirmedDataset.id}/` }).

    then(({ json }) => {
      onDatasourceSave(json);
      onChange(`${confirmedDataset == null ? void 0 : confirmedDataset.id}__table`);
    }).
    catch((response) => {
      (0,getClientErrorObject/* getClientErrorObject */.O)(response).then(({ error, message }) => {
        const errorMessage = error ?
        error.error || error.statusText || error :
        message;
        addDangerToast(errorMessage);
      });
    });
    onHide();
    addSuccessToast('Successfully changed dataset!');
  };
  const handlerCancelConfirm = () => {
    setConfirmChange(false);
  };
  const columns = [
  {
    Cell: ({ row: { original } }) => (0,emotion_react_browser_esm.jsx)(StyledSpan, { role: "button", tabIndex: 0, onClick: () => selectDatasource({ type: 'table', ...original }) },
    original == null ? void 0 : original.table_name),

    Header: (0,TranslatorSingleton.t)('Name'),
    accessor: 'table_name' },

  {
    Header: (0,TranslatorSingleton.t)('Type'),
    accessor: 'kind',
    disableSortBy: true },

  {
    Header: (0,TranslatorSingleton.t)('Schema'),
    accessor: 'schema' },

  {
    Header: (0,TranslatorSingleton.t)('Connection'),
    accessor: 'database.database_name',
    disableSortBy: true },

  {
    Cell: ({ row: { original: { owners = [] } } }) => (0,emotion_react_browser_esm.jsx)(FacePile/* default */.Z, { users: owners }),
    Header: (0,TranslatorSingleton.t)('Owners'),
    id: 'owners',
    disableSortBy: true }];


  const onServerPagination = (args) => {
    setPageIndex(args.pageIndex);
    if (args.sortBy) {
      // ensure default sort by
      setSortBy(args.sortBy.length > 0 ? args.sortBy : dataset_constants/* SORT_BY */.dY);
    }
  };
  return (0,emotion_react_browser_esm.jsx)(ChangeDatasourceModal_Modal, { show: show, onHide: onHide, responsive: true, title: (0,TranslatorSingleton.t)('Change dataset'), width: confirmChange ? '432px' : '', height: confirmChange ? 'auto' : '540px', hideFooter: !confirmChange, footer: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    confirmChange && (0,emotion_react_browser_esm.jsx)(ConfirmModalStyled, null,
    (0,emotion_react_browser_esm.jsx)("div", { className: "btn-container" },
    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { onClick: handlerCancelConfirm }, "Cancel"),
    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { className: "proceed-btn", buttonStyle: "primary", onClick: handleChangeConfirm }, "Proceed")))) },





  (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  !confirmChange && (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { roomBelow: true, type: "warning", css: (theme) => ({ marginBottom: theme.gridUnit * 4 }), message: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)("strong", null, (0,TranslatorSingleton.t)('Warning!')), " ", CHANGE_WARNING_MSG) }),

  (0,emotion_react_browser_esm.jsx)(common_components/* Input */.II, { ref: searchRef, type: "text", value: filter, placeholder: (0,TranslatorSingleton.t)('Search / Filter'), onChange: changeSearch }),
  loading && (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null),
  !loading && (0,emotion_react_browser_esm.jsx)(TableView/* default */.Z, { columns: columns, data: resourceCollection, pageSize: dataset_constants/* PAGE_SIZE */.IV, initialPageIndex: pageIndex, initialSortBy: sortBy, totalCount: resourceCount, onServerPagination: onServerPagination, className: "table-condensed", emptyWrapperType: TableView/* EmptyWrapperType.Small */.u.Small, serverPagination: true, isPaginationSticky: true, scrollTable: true })),

  confirmChange && (0,emotion_react_browser_esm.jsx)(react.Fragment, null, CONFIRM_WARNING_MESSAGE)));


};
/* harmony default export */ const datasource_ChangeDatasourceModal = ((0,withToasts/* default */.Z)(ChangeDatasourceModal));
// EXTERNAL MODULE: ./src/datasource/DatasourceModal.tsx
var DatasourceModal = __webpack_require__(5579);
// EXTERNAL MODULE: ./src/components/ErrorMessage/ErrorAlert.tsx
var ErrorAlert = __webpack_require__(91178);
// EXTERNAL MODULE: ./src/components/WarningIconWithTooltip/index.tsx
var WarningIconWithTooltip = __webpack_require__(86057);
;// CONCATENATED MODULE: ./src/explore/components/controls/DatasourceControl/index.jsx
/* eslint-disable camelcase */
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














const DatasourceControl_propTypes = {
  actions: (prop_types_default()).object.isRequired,
  onChange: (prop_types_default()).func,
  value: (prop_types_default()).string,
  datasource: (prop_types_default()).object.isRequired,
  form_data: (prop_types_default()).object.isRequired,
  isEditable: (prop_types_default()).bool,
  onDatasourceSave: (prop_types_default()).func };


const DatasourceControl_defaultProps = {
  onChange: () => {},
  onDatasourceSave: null,
  value: null,
  isEditable: true };


const Styles = style/* styled.div */.iK.div`
  .data-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    padding: ${({ theme }) => 2 * theme.gridUnit}px;
  }
  .error-alert {
    margin: ${({ theme }) => 2 * theme.gridUnit}px;
  }
  .ant-dropdown-trigger {
    margin-left: ${({ theme }) => 2 * theme.gridUnit}px;
    box-shadow: none;
    &:active {
      box-shadow: none;
    }
  }
  .btn-group .open .dropdown-toggle {
    box-shadow: none;
    &.button-default {
      background: none;
    }
  }
  i.angle {
    color: ${({ theme }) => theme.colors.primary.base};
  }
  svg.datasource-modal-trigger {
    color: ${({ theme }) => theme.colors.primary.base};
    cursor: pointer;
  }
  .title-select {
    flex: 1 1 100%;
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.grayscale.light3};
    padding: ${({ theme }) => theme.gridUnit * 2}px;
    border-radius: ${({ theme }) => theme.borderRadius}px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .dataset-svg {
    margin-right: ${({ theme }) => 2 * theme.gridUnit}px;
    flex: none;
  }
  span[aria-label='dataset-physical'] {
    color: ${({ theme }) => theme.colors.grayscale.base};
  }
  span[aria-label='more-vert'] {
    color: ${({ theme }) => theme.colors.primary.base};
  }
`;

const CHANGE_DATASET = 'change_dataset';
const VIEW_IN_SQL_LAB = 'view_in_sql_lab';
const EDIT_DATASET = 'edit_dataset';

class DatasourceControl extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showEditDatasourceModal: false,
      showChangeDatasourceModal: false };

    this.onDatasourceSave = this.onDatasourceSave.bind(this);
    this.toggleChangeDatasourceModal = this.toggleChangeDatasourceModal.bind(
    this);

    this.toggleEditDatasourceModal = this.toggleEditDatasourceModal.bind(this);
    this.toggleShowDatasource = this.toggleShowDatasource.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  onDatasourceSave(datasource) {var _this$props$form_data, _columns$find;
    this.props.actions.setDatasource(datasource);
    const timeCol = (_this$props$form_data = this.props.form_data) == null ? void 0 : _this$props$form_data.granularity_sqla;
    const { columns } = this.props.datasource;
    const firstDttmCol = columns.find((column) => column.is_dttm);
    if (
    datasource.type === 'table' &&
    !((_columns$find = columns.find(({ column_name }) => column_name === timeCol)) != null && _columns$find.is_dttm))
    {
      // set `granularity_sqla` to first datatime column name or null
      this.props.actions.setControlValue(
      'granularity_sqla',
      firstDttmCol ? firstDttmCol.column_name : null);

    }
    if (this.props.onDatasourceSave) {
      this.props.onDatasourceSave(datasource);
    }
  }

  toggleShowDatasource() {
    this.setState(({ showDatasource }) => ({
      showDatasource: !showDatasource }));

  }

  toggleChangeDatasourceModal() {
    this.setState(({ showChangeDatasourceModal }) => ({
      showChangeDatasourceModal: !showChangeDatasourceModal }));

  }

  toggleEditDatasourceModal() {
    this.setState(({ showEditDatasourceModal }) => ({
      showEditDatasourceModal: !showEditDatasourceModal }));

  }

  handleMenuItemClick({ key }) {
    if (key === CHANGE_DATASET) {
      this.toggleChangeDatasourceModal();
    }
    if (key === EDIT_DATASET) {
      this.toggleEditDatasourceModal();
    }
    if (key === VIEW_IN_SQL_LAB) {
      const { datasource } = this.props;
      const payload = {
        datasourceKey: `${datasource.id}__${datasource.type}`,
        sql: datasource.sql };

      (0,exploreUtils/* postForm */.Md)('/superset/sqllab/', payload);
    }
  }

  render() {var _extra;
    const { showChangeDatasourceModal, showEditDatasourceModal } = this.state;
    const { datasource, onChange } = this.props;
    const isMissingDatasource = datasource.id == null;

    const isSqlSupported = datasource.type === 'table';

    const datasourceMenu =
    (0,emotion_react_browser_esm.jsx)(common_components/* Menu */.v2, { onClick: this.handleMenuItemClick },
    this.props.isEditable &&
    (0,emotion_react_browser_esm.jsx)(common_components/* Menu.Item */.v2.Item, { key: EDIT_DATASET },
    (0,TranslatorSingleton.t)('Edit dataset')),


    (0,emotion_react_browser_esm.jsx)(common_components/* Menu.Item */.v2.Item, { key: CHANGE_DATASET }, (0,TranslatorSingleton.t)('Change dataset')),
    isSqlSupported &&
    (0,emotion_react_browser_esm.jsx)(common_components/* Menu.Item */.v2.Item, { key: VIEW_IN_SQL_LAB }, (0,TranslatorSingleton.t)('View in SQL Lab')));




    const { health_check_message: healthCheckMessage } = datasource;

    let extra = {};
    if (datasource != null && datasource.extra) {
      try {
        extra = JSON.parse(datasource == null ? void 0 : datasource.extra);
      } catch {} // eslint-disable-line no-empty
    }

    return (
      (0,emotion_react_browser_esm.jsx)(Styles, { className: "DatasourceControl" },
      (0,emotion_react_browser_esm.jsx)("div", { className: "data-container" },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.DatasetPhysical */.Z.DatasetPhysical, { className: "dataset-svg" }),

      !isMissingDatasource && datasource.name.length > 25 ?
      (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: datasource.name },
      (0,emotion_react_browser_esm.jsx)("span", { className: "title-select" }, datasource.name)) :


      (0,emotion_react_browser_esm.jsx)("span", { title: datasource.name, className: "title-select" },
      datasource.name),


      healthCheckMessage &&
      (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: healthCheckMessage },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.AlertSolid */.Z.AlertSolid, { iconColor: style/* supersetTheme.colors.warning.base */.K6.colors.warning.base })),


      ((_extra = extra) == null ? void 0 : _extra.warning_markdown) &&
      (0,emotion_react_browser_esm.jsx)(WarningIconWithTooltip/* default */.Z, { warningMarkdown: extra.warning_markdown }),

      (0,emotion_react_browser_esm.jsx)(common_components/* Dropdown */.Lt, {
        overlay: datasourceMenu,
        trigger: ['click'] },


      (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: (0,TranslatorSingleton.t)('More dataset related options') },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.MoreVert */.Z.MoreVert, {
        className: "datasource-modal-trigger" })))),






      isMissingDatasource &&
      (0,emotion_react_browser_esm.jsx)("div", { className: "error-alert" },
      (0,emotion_react_browser_esm.jsx)(ErrorAlert/* default */.Z, {
        level: "warning",
        title: (0,TranslatorSingleton.t)('Missing dataset'),
        source: "explore",
        subtitle:
        (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
        (0,emotion_react_browser_esm.jsx)("p", null,
        (0,TranslatorSingleton.t)(
        'The dataset linked to this chart may have been deleted.')),


        (0,emotion_react_browser_esm.jsx)("p", null,
        (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
          buttonStyle: "primary",
          onClick: () =>
          this.handleMenuItemClick({ key: CHANGE_DATASET }) },


        (0,TranslatorSingleton.t)('Change dataset')))) })),







      showEditDatasourceModal &&
      (0,emotion_react_browser_esm.jsx)(DatasourceModal/* default */.Z, {
        datasource: datasource,
        show: showEditDatasourceModal,
        onDatasourceSave: this.onDatasourceSave,
        onHide: this.toggleEditDatasourceModal }),


      showChangeDatasourceModal &&
      (0,emotion_react_browser_esm.jsx)(datasource_ChangeDatasourceModal, {
        onDatasourceSave: this.onDatasourceSave,
        onHide: this.toggleChangeDatasourceModal,
        show: showChangeDatasourceModal,
        onChange: onChange })));




  }}


DatasourceControl.propTypes = DatasourceControl_propTypes;
DatasourceControl.defaultProps = DatasourceControl_defaultProps;

/* harmony default export */ const controls_DatasourceControl = (DatasourceControl);
// EXTERNAL MODULE: ./src/explore/components/controls/DateFilterControl/index.ts + 12 modules
var DateFilterControl = __webpack_require__(73375);
// EXTERNAL MODULE: ./src/components/Label/index.tsx
var Label = __webpack_require__(37921);
// EXTERNAL MODULE: ./src/components/Collapse/index.tsx
var Collapse = __webpack_require__(43700);
// EXTERNAL MODULE: ./src/explore/components/controls/TextControl/index.tsx
var TextControl = __webpack_require__(79684);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/ensureIsArray.js
var ensureIsArray = __webpack_require__(86852);
// EXTERNAL MODULE: ./src/common/hooks/usePrevious/index.ts + 1 modules
var usePrevious = __webpack_require__(67337);
// EXTERNAL MODULE: ./src/explore/components/controls/MetricControl/columnType.js
var columnType = __webpack_require__(34087);
// EXTERNAL MODULE: ./src/explore/components/DndItemType.ts
var DndItemType = __webpack_require__(42753);
// EXTERNAL MODULE: ./src/explore/components/controls/MetricControl/AdhocMetric.js
var AdhocMetric = __webpack_require__(19113);
// EXTERNAL MODULE: ./src/explore/components/controls/MetricControl/savedMetricType.js
var savedMetricType = __webpack_require__(27130);
;// CONCATENATED MODULE: ./src/explore/components/controls/MetricControl/AdhocMetricEditPopoverTitle.jsx
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






const AdhocMetricEditPopoverTitle_propTypes = {
  title: prop_types_default().shape({
    label: (prop_types_default()).string,
    hasCustomLabel: (prop_types_default()).bool }),

  onChange: (prop_types_default()).func.isRequired,
  isEditDisabled: (prop_types_default()).bool };


class AdhocMetricEditPopoverTitle extends react.Component {
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.state = {
      isHovered: false,
      isEditMode: false };

  }

  onMouseOver() {
    this.setState({ isHovered: true });
  }

  onMouseOut() {
    this.setState({ isHovered: false });
  }

  onClick() {
    this.setState({ isEditMode: true });
  }

  onBlur() {
    this.setState({ isEditMode: false });
  }

  onInputBlur(e) {
    if (e.target.value === '') {
      this.props.onChange(e);
    }
    this.onBlur();
  }

  render() {
    const { title, onChange, isEditDisabled } = this.props;
    const defaultLabel = (0,TranslatorSingleton.t)('My metric');

    if (isEditDisabled) {
      return (
        (0,emotion_react_browser_esm.jsx)("span", null, title.label || defaultLabel));

    }

    return this.state.isEditMode ?
    (0,emotion_react_browser_esm.jsx)(common_components/* Input */.II, {
      className: "metric-edit-popover-label-input",
      type: "text",
      placeholder: title.label,
      value: title.hasCustomLabel ? title.label : '',
      autoFocus: true,
      onChange: onChange,
      onBlur: this.onInputBlur }) :



    (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { placement: "top", title: "Click to edit label" },
    (0,emotion_react_browser_esm.jsx)("span", {
      className: "AdhocMetricEditPopoverTitle inline-editable",

      onMouseOver: this.onMouseOver,
      onMouseOut: this.onMouseOut,
      onClick: this.onClick,
      onBlur: this.onBlur,
      role: "button",
      tabIndex: 0 },

    title.label || defaultLabel, "\xA0",

    (0,emotion_react_browser_esm.jsx)("i", {
      className: "fa fa-pencil",
      style: { color: this.state.isHovered ? 'black' : 'grey' } })));




  }}

AdhocMetricEditPopoverTitle.propTypes = AdhocMetricEditPopoverTitle_propTypes;
// EXTERNAL MODULE: ./src/explore/components/ExploreContentPopover.tsx
var ExploreContentPopover = __webpack_require__(63325);
// EXTERNAL MODULE: ./src/components/Tabs/index.ts
var Tabs = __webpack_require__(40637);
// EXTERNAL MODULE: ./src/components/index.ts + 1 modules
var src_components = __webpack_require__(33346);
// EXTERNAL MODULE: ./src/components/Form/index.tsx + 1 modules
var Form = __webpack_require__(49238);
// EXTERNAL MODULE: ./src/components/AsyncAceEditor/index.tsx
var AsyncAceEditor = __webpack_require__(94670);
// EXTERNAL MODULE: ./src/SqlLab/utils/sqlKeywords.ts
var sqlKeywords = __webpack_require__(33313);
// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__(54076);
// EXTERNAL MODULE: ./src/explore/constants.ts
var explore_constants = __webpack_require__(69856);
// EXTERNAL MODULE: ./src/explore/components/optionRenderers.tsx
var optionRenderers = __webpack_require__(99963);
;// CONCATENATED MODULE: ./src/explore/components/controls/MetricControl/AdhocMetricEditPopover/index.jsx
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
/* eslint-disable camelcase */


















const AdhocMetricEditPopover_propTypes = {
  onChange: (prop_types_default()).func.isRequired,
  onClose: (prop_types_default()).func.isRequired,
  onResize: (prop_types_default()).func.isRequired,
  getCurrentTab: (prop_types_default()).func,
  getCurrentLabel: (prop_types_default()).func,
  adhocMetric: prop_types_default().instanceOf(AdhocMetric/* default */.Z).isRequired,
  columns: prop_types_default().arrayOf(columnType/* default */.Z),
  savedMetricsOptions: prop_types_default().arrayOf(savedMetricType/* default */.Z),
  savedMetric: savedMetricType/* default */.Z,
  datasourceType: (prop_types_default()).string };


const AdhocMetricEditPopover_defaultProps = {
  columns: [],
  getCurrentTab: common/* noOp */.EI };


const StyledSelect = (0,style/* styled */.iK)(src_components/* Select */.P)`
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

const SAVED_TAB_KEY = 'SAVED';

const startingWidth = 320;
const startingHeight = 240;

class AdhocMetricEditPopover extends react.PureComponent {
  // "Saved" is a default tab unless there are no saved metrics for dataset







  constructor(props) {
    super(props);this.defaultActiveTabKey = (this.props.savedMetric.metric_name || this.props.adhocMetric.isNew) && Array.isArray(this.props.savedMetricsOptions) && this.props.savedMetricsOptions.length > 0 ? SAVED_TAB_KEY : this.props.adhocMetric.expressionType;
    this.onSave = this.onSave.bind(this);
    this.onResetStateAndClose = this.onResetStateAndClose.bind(this);
    this.onColumnChange = this.onColumnChange.bind(this);
    this.onAggregateChange = this.onAggregateChange.bind(this);
    this.onSavedMetricChange = this.onSavedMetricChange.bind(this);
    this.onSqlExpressionChange = this.onSqlExpressionChange.bind(this);
    this.onDragDown = this.onDragDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
    this.handleAceEditorRef = this.handleAceEditorRef.bind(this);
    this.refreshAceEditor = this.refreshAceEditor.bind(this);

    this.state = {
      adhocMetric: this.props.adhocMetric,
      savedMetric: this.props.savedMetric,
      width: startingWidth,
      height: startingHeight };


    document.addEventListener('mouseup', this.onMouseUp);
  }

  componentDidMount() {
    this.props.getCurrentTab(this.defaultActiveTabKey);
  }

  componentDidUpdate(prevProps, prevState) {var _prevState$adhocMetri, _this$state$adhocMetr, _prevState$adhocMetri2, _this$state$adhocMetr2, _prevState$adhocMetri3, _prevState$adhocMetri4, _this$state$adhocMetr3, _this$state$adhocMetr4, _prevState$savedMetri, _this$state$savedMetr;
    if (
    ((_prevState$adhocMetri = prevState.adhocMetric) == null ? void 0 : _prevState$adhocMetri.sqlExpression) !== ((_this$state$adhocMetr =
    this.state.adhocMetric) == null ? void 0 : _this$state$adhocMetr.sqlExpression) ||
    ((_prevState$adhocMetri2 = prevState.adhocMetric) == null ? void 0 : _prevState$adhocMetri2.aggregate) !== ((_this$state$adhocMetr2 = this.state.adhocMetric) == null ? void 0 : _this$state$adhocMetr2.aggregate) ||
    ((_prevState$adhocMetri3 = prevState.adhocMetric) == null ? void 0 : (_prevState$adhocMetri4 = _prevState$adhocMetri3.column) == null ? void 0 : _prevState$adhocMetri4.column_name) !== ((_this$state$adhocMetr3 =
    this.state.adhocMetric) == null ? void 0 : (_this$state$adhocMetr4 = _this$state$adhocMetr3.column) == null ? void 0 : _this$state$adhocMetr4.column_name) ||
    ((_prevState$savedMetri = prevState.savedMetric) == null ? void 0 : _prevState$savedMetri.metric_name) !== ((_this$state$savedMetr = this.state.savedMetric) == null ? void 0 : _this$state$savedMetr.metric_name))
    {var _this$state$savedMetr2, _this$state$savedMetr3, _this$state$adhocMetr5;
      this.props.getCurrentLabel({
        savedMetricLabel:
        ((_this$state$savedMetr2 = this.state.savedMetric) == null ? void 0 : _this$state$savedMetr2.verbose_name) || ((_this$state$savedMetr3 =
        this.state.savedMetric) == null ? void 0 : _this$state$savedMetr3.metric_name),
        adhocMetricLabel: (_this$state$adhocMetr5 = this.state.adhocMetric) == null ? void 0 : _this$state$adhocMetr5.getDefaultLabel() });

    }
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
  }

  onSave() {var _this$props$savedMetr;
    const { adhocMetric, savedMetric } = this.state;

    const metric = savedMetric != null && savedMetric.metric_name ? savedMetric : adhocMetric;
    const oldMetric = (_this$props$savedMetr = this.props.savedMetric) != null && _this$props$savedMetr.metric_name ?
    this.props.savedMetric :
    this.props.adhocMetric;
    this.props.onChange(
    {
      ...metric },

    oldMetric);

    this.props.onClose();
  }

  onResetStateAndClose() {
    this.setState(
    {
      adhocMetric: this.props.adhocMetric,
      savedMetric: this.props.savedMetric },

    this.props.onClose);

  }

  onColumnChange(columnName) {
    const column = this.props.columns.find(
    (column) => column.column_name === columnName);

    this.setState((prevState) => ({
      adhocMetric: prevState.adhocMetric.duplicateWith({
        column,
        expressionType: AdhocMetric/* EXPRESSION_TYPES.SIMPLE */.v.SIMPLE }),

      savedMetric: undefined }));

  }

  onAggregateChange(aggregate) {
    // we construct this object explicitly to overwrite the value in the case aggregate is null
    this.setState((prevState) => ({
      adhocMetric: prevState.adhocMetric.duplicateWith({
        aggregate,
        expressionType: AdhocMetric/* EXPRESSION_TYPES.SIMPLE */.v.SIMPLE }),

      savedMetric: undefined }));

  }

  onSavedMetricChange(savedMetricName) {
    const savedMetric = this.props.savedMetricsOptions.find(
    (metric) => metric.metric_name === savedMetricName);

    this.setState((prevState) => ({
      savedMetric,
      adhocMetric: prevState.adhocMetric.duplicateWith({
        column: undefined,
        aggregate: undefined,
        sqlExpression: undefined,
        expressionType: AdhocMetric/* EXPRESSION_TYPES.SIMPLE */.v.SIMPLE }) }));


  }

  onSqlExpressionChange(sqlExpression) {
    this.setState((prevState) => ({
      adhocMetric: prevState.adhocMetric.duplicateWith({
        sqlExpression,
        expressionType: AdhocMetric/* EXPRESSION_TYPES.SQL */.v.SQL }),

      savedMetric: undefined }));

  }

  onDragDown(e) {
    this.dragStartX = e.clientX;
    this.dragStartY = e.clientY;
    this.dragStartWidth = this.state.width;
    this.dragStartHeight = this.state.height;
    document.addEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(e) {
    this.props.onResize();
    this.setState({
      width: Math.max(
      this.dragStartWidth + (e.clientX - this.dragStartX),
      startingWidth),

      height: Math.max(
      this.dragStartHeight + (e.clientY - this.dragStartY) * 2,
      startingHeight) });


  }

  onMouseUp() {
    document.removeEventListener('mousemove', this.onMouseMove);
  }

  onTabChange(tab) {
    this.refreshAceEditor();
    this.props.getCurrentTab(tab);
  }

  handleAceEditorRef(ref) {
    if (ref) {
      this.aceEditorRef = ref;
    }
  }

  refreshAceEditor() {
    setTimeout(() => {
      if (this.aceEditorRef) {
        this.aceEditorRef.editor.resize();
      }
    }, 0);
  }

  renderColumnOption(option) {
    const column = { ...option };
    if (column.metric_name && !column.verbose_name) {
      column.verbose_name = column.metric_name;
    }
    return (0,emotion_react_browser_esm.jsx)(optionRenderers/* StyledColumnOption */.l, { column: column, showType: true });
  }

  renderMetricOption(savedMetric) {
    return (0,emotion_react_browser_esm.jsx)(optionRenderers/* StyledMetricOption */.B, { metric: savedMetric, showType: true });
  }

  render() {var _savedMetricsOptions$;
    const {
      adhocMetric: propsAdhocMetric,
      savedMetric: propsSavedMetric,
      columns,
      savedMetricsOptions,
      onChange,
      onClose,
      onResize,
      datasourceType,
      ...popoverProps } =
    this.props;
    const { adhocMetric, savedMetric } = this.state;
    const keywords = sqlKeywords/* default.concat */.Z.concat(
    columns.map((column) => ({
      name: column.column_name,
      value: column.column_name,
      score: 50,
      meta: 'column' })));



    const columnValue =
    adhocMetric.column && adhocMetric.column.column_name ||
    adhocMetric.inferSqlExpressionColumn();

    // autofocus on column if there's no value in column; otherwise autofocus on aggregate
    const columnSelectProps = {
      ariaLabel: (0,TranslatorSingleton.t)('Select column'),
      placeholder: (0,TranslatorSingleton.t)('%s column(s)', columns.length),
      value: columnValue,
      onChange: this.onColumnChange,
      allowClear: true,
      autoFocus: !columnValue };


    const aggregateSelectProps = {
      ariaLabel: (0,TranslatorSingleton.t)('Select aggregate options'),
      placeholder: (0,TranslatorSingleton.t)('%s aggregates(s)', explore_constants/* AGGREGATES_OPTIONS.length */.Ps.length),
      value: adhocMetric.aggregate || adhocMetric.inferSqlExpressionAggregate(),
      onChange: this.onAggregateChange,
      allowClear: true,
      autoFocus: !!columnValue };


    const savedSelectProps = {
      ariaLabel: (0,TranslatorSingleton.t)('Select saved metrics'),
      placeholder: (0,TranslatorSingleton.t)('%s saved metric(s)', (_savedMetricsOptions$ = savedMetricsOptions == null ? void 0 : savedMetricsOptions.length) != null ? _savedMetricsOptions$ : 0),
      value: savedMetric == null ? void 0 : savedMetric.metric_name,
      onChange: this.onSavedMetricChange,
      allowClear: true,
      autoFocus: true };


    if (this.props.datasourceType === 'druid' && aggregateSelectProps.options) {
      aggregateSelectProps.options = aggregateSelectProps.options.filter(
      (aggregate) => aggregate !== 'AVG');

    }

    const stateIsValid = adhocMetric.isValid() || (savedMetric == null ? void 0 : savedMetric.metric_name);
    const hasUnsavedChanges =
    !adhocMetric.equals(propsAdhocMetric) ||
    !(
    typeof (savedMetric == null ? void 0 : savedMetric.metric_name) === 'undefined' &&
    typeof (propsSavedMetric == null ? void 0 : propsSavedMetric.metric_name) === 'undefined') &&

    (savedMetric == null ? void 0 : savedMetric.metric_name) !== (propsSavedMetric == null ? void 0 : propsSavedMetric.metric_name);

    return (
      (0,emotion_react_browser_esm.jsx)(Form/* Form */.l0, extends_default()({
        layout: "vertical",
        id: "metrics-edit-popover" },

      popoverProps),

      (0,emotion_react_browser_esm.jsx)(Tabs/* default */.ZP, {
        id: "adhoc-metric-edit-tabs",

        defaultActiveKey: this.defaultActiveTabKey,
        className: "adhoc-metric-edit-tabs",
        style: { height: this.state.height, width: this.state.width },
        onChange: this.onTabChange,
        allowOverflow: true },

      (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { key: SAVED_TAB_KEY, tab: (0,TranslatorSingleton.t)('Saved') },
      (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { label: (0,TranslatorSingleton.t)('Saved metric') },
      (0,emotion_react_browser_esm.jsx)(StyledSelect, extends_default()({
        options:
        Array.isArray(savedMetricsOptions) ?
        savedMetricsOptions.map((savedMetric) => ({
          value: savedMetric.metric_name,
          label: savedMetric.metric_name,
          customLabel: this.renderMetricOption(savedMetric),
          key: savedMetric.id })) :

        [] },

      savedSelectProps)))),



      (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { key: AdhocMetric/* EXPRESSION_TYPES.SIMPLE */.v.SIMPLE, tab: (0,TranslatorSingleton.t)('Simple') },
      (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { label: (0,TranslatorSingleton.t)('column') },
      (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, extends_default()({
        options: columns.map((column) => ({
          value: column.column_name,
          label: column.verbose_name || column.column_name,
          key: column.id,
          customLabel: this.renderColumnOption(column) })) },

      columnSelectProps))),


      (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { label: (0,TranslatorSingleton.t)('aggregate') },
      (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, extends_default()({
        options: explore_constants/* AGGREGATES_OPTIONS.map */.Ps.map((option) => ({
          value: option,
          label: option,
          key: option })) },

      aggregateSelectProps)))),



      (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, {
        key: AdhocMetric/* EXPRESSION_TYPES.SQL */.v.SQL,
        tab: (0,TranslatorSingleton.t)('Custom SQL') },


      this.props.datasourceType !== 'druid' ?
      (0,emotion_react_browser_esm.jsx)(AsyncAceEditor/* SQLEditor */.iO, {

        showLoadingForImport: true,
        ref: this.handleAceEditorRef,
        keywords: keywords,
        height: `${this.state.height - 80}px`,
        onChange: this.onSqlExpressionChange,
        width: "100%",
        showGutter: false,
        value:
        adhocMetric.sqlExpression || adhocMetric.translateToSql(),

        editorProps: { $blockScrolling: true },
        enableLiveAutocompletion: true,
        className: "filter-sql-editor",
        wrapEnabled: true }) :


      (0,emotion_react_browser_esm.jsx)("div", { className: "custom-sql-disabled-message" }, "Custom SQL Metrics are not available on druid datasources"))),





      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        buttonSize: "small",
        onClick: this.onResetStateAndClose,

        cta: true },

      (0,TranslatorSingleton.t)('Close')),

      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        disabled: !stateIsValid,
        buttonStyle:
        hasUnsavedChanges && stateIsValid ? 'primary' : 'default',

        buttonSize: "small",

        onClick: this.onSave,
        cta: true },

      (0,TranslatorSingleton.t)('Save')),

      (0,emotion_react_browser_esm.jsx)("i", {
        role: "button",
        "aria-label": "Resize",
        tabIndex: 0,
        onMouseDown: this.onDragDown,
        className: "fa fa-expand edit-popover-resize text-muted" }))));




  }}

AdhocMetricEditPopover.propTypes = AdhocMetricEditPopover_propTypes;
AdhocMetricEditPopover.defaultProps = AdhocMetricEditPopover_defaultProps;
;// CONCATENATED MODULE: ./src/explore/components/controls/MetricControl/AdhocMetricPopoverTrigger.tsx
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





class AdhocMetricPopoverTrigger extends react.PureComponent {
  constructor(props) {
    super(props);
    this.onPopoverResize = this.onPopoverResize.bind(this);
    this.onLabelChange = this.onLabelChange.bind(this);
    this.closePopover = this.closePopover.bind(this);
    this.togglePopover = this.togglePopover.bind(this);
    this.getCurrentTab = this.getCurrentTab.bind(this);
    this.getCurrentLabel = this.getCurrentLabel.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      adhocMetric: props.adhocMetric,
      popoverVisible: false,
      title: {
        label: props.adhocMetric.label,
        hasCustomLabel: props.adhocMetric.hasCustomLabel },

      currentLabel: '',
      labelModified: false,
      isTitleEditDisabled: false };

  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.adhocMetric.optionName !== nextProps.adhocMetric.optionName) {
      return {
        adhocMetric: nextProps.adhocMetric,
        title: {
          label: nextProps.adhocMetric.label,
          hasCustomLabel: nextProps.adhocMetric.hasCustomLabel },

        currentLabel: '',
        labelModified: false };

    }
    return {
      adhocMetric: nextProps.adhocMetric };

  }
  onLabelChange(e) {var _this$props$adhocMetr;
    const { verbose_name, metric_name } = this.props.savedMetric;
    const defaultMetricLabel = (_this$props$adhocMetr = this.props.adhocMetric) == null ? void 0 : _this$props$adhocMetr.getDefaultLabel();
    const label = e.target.value;
    this.setState((state) => ({
      title: {
        label: label ||
        state.currentLabel ||
        verbose_name ||
        metric_name ||
        defaultMetricLabel,
        hasCustomLabel: !!label },

      labelModified: true }));

  }
  onPopoverResize() {
    this.forceUpdate();
  }
  closePopover() {
    this.togglePopover(false);
    this.setState({
      labelModified: false });

  }
  togglePopover(visible) {
    this.setState({
      popoverVisible: visible });

  }
  getCurrentTab(tab) {
    this.setState({
      isTitleEditDisabled: tab === SAVED_TAB_KEY });

  }
  getCurrentLabel({ savedMetricLabel, adhocMetricLabel }) {
    const currentLabel = savedMetricLabel || adhocMetricLabel;
    this.setState({
      currentLabel,
      labelModified: true });

    if (savedMetricLabel || !this.state.title.hasCustomLabel) {
      this.setState({
        title: {
          label: currentLabel,
          hasCustomLabel: false } });


    }
  }
  onChange(newMetric, oldMetric) {
    this.props.onMetricEdit({ ...newMetric, ...this.state.title }, oldMetric);
  }
  render() {
    const { adhocMetric, savedMetric, columns, savedMetricsOptions, datasourceType, isControlledComponent } = this.props;
    const { verbose_name, metric_name } = savedMetric;
    const { hasCustomLabel, label } = adhocMetric;
    const adhocMetricLabel = hasCustomLabel ?
    label :
    adhocMetric.getDefaultLabel();
    const title = this.state.labelModified ?
    this.state.title :
    {
      label: verbose_name || metric_name || adhocMetricLabel,
      hasCustomLabel };

    const { visible, togglePopover, closePopover } = isControlledComponent ?
    {
      visible: this.props.visible,
      togglePopover: this.props.togglePopover,
      closePopover: this.props.closePopover } :

    {
      visible: this.state.popoverVisible,
      togglePopover: this.togglePopover,
      closePopover: this.closePopover };

    const overlayContent = (0,emotion_react_browser_esm.jsx)(ExploreContentPopover/* ExplorePopoverContent */.b, null,
    (0,emotion_react_browser_esm.jsx)(AdhocMetricEditPopover, { adhocMetric: adhocMetric, columns: columns, savedMetricsOptions: savedMetricsOptions, savedMetric: savedMetric, datasourceType: datasourceType, onResize: this.onPopoverResize, onClose: closePopover, onChange: this.onChange, getCurrentTab: this.getCurrentTab, getCurrentLabel: this.getCurrentLabel }));

    const popoverTitle = (0,emotion_react_browser_esm.jsx)(AdhocMetricEditPopoverTitle, { title: title, onChange: this.onLabelChange, isEditDisabled: this.state.isTitleEditDisabled });
    return (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, { placement: "right", trigger: "click", content: overlayContent, defaultVisible: visible, visible: visible, onVisibleChange: togglePopover, title: popoverTitle, destroyTooltipOnHide: true },
    this.props.children);

  }}

/* harmony default export */ const MetricControl_AdhocMetricPopoverTrigger = (AdhocMetricPopoverTrigger);
;// CONCATENATED MODULE: ./src/explore/components/controls/MetricControl/AdhocMetricOption.jsx
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









const AdhocMetricOption_propTypes = {
  adhocMetric: prop_types_default().instanceOf(AdhocMetric/* default */.Z),
  onMetricEdit: (prop_types_default()).func.isRequired,
  onRemoveMetric: (prop_types_default()).func,
  columns: prop_types_default().arrayOf(columnType/* default */.Z),
  savedMetricsOptions: prop_types_default().arrayOf(savedMetricType/* default */.Z),
  savedMetric: savedMetricType/* default */.Z,
  datasourceType: (prop_types_default()).string,
  onMoveLabel: (prop_types_default()).func,
  onDropLabel: (prop_types_default()).func,
  index: (prop_types_default()).number,
  type: (prop_types_default()).string,
  multi: (prop_types_default()).bool };


class AdhocMetricOption extends react.PureComponent {
  constructor(props) {
    super(props);
    this.onRemoveMetric = this.onRemoveMetric.bind(this);
  }

  onRemoveMetric(e) {
    e.stopPropagation();
    this.props.onRemoveMetric(this.props.index);
  }

  render() {
    const {
      adhocMetric,
      onMetricEdit,
      columns,
      savedMetricsOptions,
      savedMetric,
      datasourceType,
      onMoveLabel,
      onDropLabel,
      index,
      type,
      multi } =
    this.props;

    return (
      (0,emotion_react_browser_esm.jsx)(MetricControl_AdhocMetricPopoverTrigger, {
        adhocMetric: adhocMetric,
        onMetricEdit: onMetricEdit,
        columns: columns,
        savedMetricsOptions: savedMetricsOptions,
        savedMetric: savedMetric,
        datasourceType: datasourceType },

      (0,emotion_react_browser_esm.jsx)(OptionControls/* OptionControlLabel */.yz, {
        savedMetric: savedMetric,
        adhocMetric: adhocMetric,
        label: adhocMetric.label,
        onRemove: this.onRemoveMetric,
        onMoveLabel: onMoveLabel,
        onDropLabel: onDropLabel,
        index: index,
        type: type != null ? type : DndItemType/* DndItemType.AdhocMetricOption */.g.AdhocMetricOption,
        withCaret: true,
        isFunction: true,
        multi: multi })));



  }}


/* harmony default export */ const MetricControl_AdhocMetricOption = (AdhocMetricOption);

AdhocMetricOption.propTypes = AdhocMetricOption_propTypes;
;// CONCATENATED MODULE: ./src/explore/components/controls/MetricControl/MetricDefinitionValue.jsx
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







const MetricDefinitionValue_propTypes = {
  option: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).string]).isRequired,
  index: (prop_types_default()).number.isRequired,
  onMetricEdit: (prop_types_default()).func,
  onRemoveMetric: (prop_types_default()).func,
  onMoveLabel: (prop_types_default()).func,
  onDropLabel: (prop_types_default()).func,
  columns: prop_types_default().arrayOf(columnType/* default */.Z),
  savedMetrics: prop_types_default().arrayOf(savedMetricType/* default */.Z),
  savedMetricsOptions: prop_types_default().arrayOf(savedMetricType/* default */.Z),
  multi: (prop_types_default()).bool,
  datasourceType: (prop_types_default()).string };


function MetricDefinitionValue({
  option,
  onMetricEdit,
  onRemoveMetric,
  columns,
  savedMetrics,
  savedMetricsOptions,
  datasourceType,
  onMoveLabel,
  onDropLabel,
  index,
  type,
  multi })
{
  const getSavedMetricByName = (metricName) =>
  savedMetrics.find((metric) => metric.metric_name === metricName);

  let savedMetric;
  if (typeof option === 'string') {
    savedMetric = getSavedMetricByName(option);
  } else if (option.metric_name) {
    savedMetric = option;
  }

  if (option instanceof AdhocMetric/* default */.Z || savedMetric) {var _savedMetric;
    const adhocMetric =
    option instanceof AdhocMetric/* default */.Z ? option : new AdhocMetric/* default */.Z({ isNew: true });

    const metricOptionProps = {
      onMetricEdit,
      onRemoveMetric,
      columns,
      savedMetricsOptions,
      datasourceType,
      adhocMetric,
      onMoveLabel,
      onDropLabel,
      index,
      savedMetric: (_savedMetric = savedMetric) != null ? _savedMetric : {},
      type,
      multi };


    return (0,emotion_react_browser_esm.jsx)(MetricControl_AdhocMetricOption, metricOptionProps);
  }
  return null;
}
MetricDefinitionValue.propTypes = MetricDefinitionValue_propTypes;
// EXTERNAL MODULE: ./src/explore/components/controls/MetricControl/adhocMetricType.js
var adhocMetricType = __webpack_require__(17536);
;// CONCATENATED MODULE: ./src/explore/components/controls/MetricControl/MetricsControl.jsx
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















const MetricsControl_propTypes = {
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func,
  value: prop_types_default().oneOfType([
  prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).string, adhocMetricType/* default */.Z])),
  prop_types_default().oneOfType([(prop_types_default()).string, adhocMetricType/* default */.Z])]),

  columns: prop_types_default().arrayOf(columnType/* default */.Z),
  savedMetrics: prop_types_default().arrayOf(savedMetricType/* default */.Z),
  isLoading: (prop_types_default()).bool,
  multi: (prop_types_default()).bool,
  clearable: (prop_types_default()).bool,
  datasourceType: (prop_types_default()).string };


const MetricsControl_defaultProps = {
  onChange: () => {},
  clearable: true,
  savedMetrics: [],
  columns: [] };


function getOptionsForSavedMetrics(
savedMetrics,
currentMetricValues,
currentMetric)
{var _savedMetrics$filter;
  return (_savedMetrics$filter =
  savedMetrics == null ? void 0 : savedMetrics.filter((savedMetric) =>
  Array.isArray(currentMetricValues) ?
  !currentMetricValues.includes(savedMetric.metric_name) ||
  savedMetric.metric_name === currentMetric :
  savedMetric)) != null ? _savedMetrics$filter :
  [];

}

function isDictionaryForAdhocMetric(value) {
  return value && !(value instanceof AdhocMetric/* default */.Z) && value.expressionType;
}

// adhoc metrics are stored as dictionaries in URL params. We convert them back into the
// AdhocMetric class for typechecking, consistency and instance method access.
function coerceAdhocMetrics(value) {
  if (!value) {
    return [];
  }
  if (!Array.isArray(value)) {
    if (isDictionaryForAdhocMetric(value)) {
      return [new AdhocMetric/* default */.Z(value)];
    }
    return [value];
  }
  return value.map((val) => {
    if (isDictionaryForAdhocMetric(val)) {
      return new AdhocMetric/* default */.Z(val);
    }
    return val;
  });
}

const emptySavedMetric = { metric_name: '', expression: '' };

// TODO: use typeguards to distinguish saved metrics from adhoc metrics
const getMetricsMatchingCurrentDataset = (value, columns, savedMetrics) =>
(0,ensureIsArray/* default */.Z)(value).filter((metric) => {
  if (typeof metric === 'string' || metric.metric_name) {
    return savedMetrics == null ? void 0 : savedMetrics.some(
    (savedMetric) =>
    savedMetric.metric_name === metric ||
    savedMetric.metric_name === metric.metric_name);

  }
  return columns == null ? void 0 : columns.some(
  (column) =>
  !metric.column || metric.column.column_name === column.column_name);

});

const MetricsControl = ({
  onChange,
  multi,
  value: propsValue,
  columns,
  savedMetrics,
  datasource,
  datasourceType,
  ...props }) =>
{
  const [value, setValue] = (0,react.useState)(coerceAdhocMetrics(propsValue));
  const theme = (0,style/* useTheme */.Fg)();
  const prevColumns = (0,usePrevious/* usePrevious */.D)(columns);
  const prevSavedMetrics = (0,usePrevious/* usePrevious */.D)(savedMetrics);

  const handleChange = (0,react.useCallback)(
  (opts) => {
    // if clear out options
    if (opts === null) {
      onChange(null);
      return;
    }

    const transformedOpts = (0,ensureIsArray/* default */.Z)(opts);
    const optionValues = transformedOpts.
    map((option) => {
      // pre-defined metric
      if (option.metric_name) {
        return option.metric_name;
      }
      return option;
    }).
    filter((option) => option);
    onChange(multi ? optionValues : optionValues[0]);
  },
  [multi, onChange]);


  const onNewMetric = (0,react.useCallback)(
  (newMetric) => {
    const newValue = [...value, newMetric];
    setValue(newValue);
    handleChange(newValue);
  },
  [handleChange, value]);


  const onMetricEdit = (0,react.useCallback)(
  (changedMetric, oldMetric) => {
    const newValue = value.map((val) => {
      if (
      // compare saved metrics
      val === oldMetric.metric_name ||
      // compare adhoc metrics
      typeof val.optionName !== 'undefined' ?
      val.optionName === oldMetric.optionName :
      false)
      {
        return changedMetric;
      }
      return val;
    });
    setValue(newValue);
    handleChange(newValue);
  },
  [handleChange, value]);


  const onRemoveMetric = (0,react.useCallback)(
  (index) => {
    if (!Array.isArray(value)) {
      return;
    }
    const valuesCopy = [...value];
    valuesCopy.splice(index, 1);
    setValue(valuesCopy);
    handleChange(valuesCopy);
  },
  [handleChange, value]);


  const moveLabel = (0,react.useCallback)(
  (dragIndex, hoverIndex) => {
    const newValues = [...value];
    [newValues[hoverIndex], newValues[dragIndex]] = [
    newValues[dragIndex],
    newValues[hoverIndex]];

    setValue(newValues);
  },
  [value]);


  const isAddNewMetricDisabled = (0,react.useCallback)(() => !multi && value.length > 0, [
  multi,
  value.length]);


  const savedMetricOptions = (0,react.useMemo)(
  () => getOptionsForSavedMetrics(savedMetrics, propsValue, null),
  [propsValue, savedMetrics]);


  const newAdhocMetric = (0,react.useMemo)(() => new AdhocMetric/* default */.Z({ isNew: true }), [
  value]);

  const addNewMetricPopoverTrigger = (0,react.useCallback)(
  (trigger) => {
    if (isAddNewMetricDisabled()) {
      return trigger;
    }
    return (
      (0,emotion_react_browser_esm.jsx)(MetricControl_AdhocMetricPopoverTrigger, {
        adhocMetric: newAdhocMetric,
        onMetricEdit: onNewMetric,
        columns: columns,
        savedMetricsOptions: savedMetricOptions,
        datasource: datasource,
        savedMetric: emptySavedMetric,
        datasourceType: datasourceType },

      trigger));


  },
  [
  columns,
  datasource,
  datasourceType,
  isAddNewMetricDisabled,
  newAdhocMetric,
  onNewMetric,
  savedMetricOptions]);



  (0,react.useEffect)(() => {
    // Remove selected custom metrics that do not exist in the dataset anymore
    // Remove selected adhoc metrics that use columns which do not exist in the dataset anymore
    if (
    propsValue && (
    !isEqual_default()(prevColumns, columns) ||
    !isEqual_default()(prevSavedMetrics, savedMetrics)))
    {
      const matchingMetrics = getMetricsMatchingCurrentDataset(
      propsValue,
      columns,
      savedMetrics);

      if (!isEqual_default()(matchingMetrics, propsValue)) {
        handleChange(matchingMetrics);
      }
    }
  }, [columns, handleChange, savedMetrics]);

  (0,react.useEffect)(() => {
    setValue(coerceAdhocMetrics(propsValue));
  }, [propsValue]);

  const onDropLabel = (0,react.useCallback)(() => handleChange(value), [
  handleChange,
  value]);


  const valueRenderer = (0,react.useCallback)(
  (option, index) =>
  (0,emotion_react_browser_esm.jsx)(MetricDefinitionValue, {
    key: index,
    index: index,
    option: option,
    onMetricEdit: onMetricEdit,
    onRemoveMetric: onRemoveMetric,
    columns: columns,
    datasource: datasource,
    savedMetrics: savedMetrics,
    savedMetricsOptions: getOptionsForSavedMetrics(
    savedMetrics,
    value,
    value == null ? void 0 : value[index]),

    datasourceType: datasourceType,
    onMoveLabel: moveLabel,
    onDropLabel: onDropLabel,
    multi: multi }),


  [
  columns,
  datasource,
  datasourceType,
  moveLabel,
  multi,
  onDropLabel,
  onMetricEdit,
  onRemoveMetric,
  savedMetrics,
  value]);



  return (
    (0,emotion_react_browser_esm.jsx)("div", { className: "metrics-select" },
    (0,emotion_react_browser_esm.jsx)(OptionControls/* HeaderContainer */.gM, null,
    (0,emotion_react_browser_esm.jsx)(ControlHeader/* default */.Z, props),
    addNewMetricPopoverTrigger(
    (0,emotion_react_browser_esm.jsx)(OptionControls/* AddIconButton */.IG, {
      disabled: isAddNewMetricDisabled() },


    (0,emotion_react_browser_esm.jsx)(Icons/* default.PlusLarge */.Z.PlusLarge, {
      iconSize: "s",
      iconColor: theme.colors.grayscale.light5 })))),




    (0,emotion_react_browser_esm.jsx)(OptionControls/* LabelsContainer */.yj, null,
    value.length > 0 ?
    value.map((value, index) => valueRenderer(value, index)) :
    addNewMetricPopoverTrigger(
    (0,emotion_react_browser_esm.jsx)(OptionControls/* AddControlLabel */.SW, null,
    (0,emotion_react_browser_esm.jsx)(Icons/* default.PlusSmall */.Z.PlusSmall, { iconColor: theme.colors.grayscale.light1 }),
    (0,TranslatorSingleton.t)('Add metric'))))));





};

MetricsControl.propTypes = MetricsControl_propTypes;
MetricsControl.defaultProps = MetricsControl_defaultProps;

/* harmony default export */ const MetricControl_MetricsControl = (MetricsControl);
// EXTERNAL MODULE: ./src/components/PopoverSection/index.tsx
var PopoverSection = __webpack_require__(83734);
;// CONCATENATED MODULE: ./src/explore/components/controls/FixedOrMetricControl/index.jsx
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











const controlTypes = {
  fixed: 'fix',
  metric: 'metric' };


const FixedOrMetricControl_propTypes = {
  onChange: (prop_types_default()).func,
  value: (prop_types_default()).object,
  isFloat: (prop_types_default()).bool,
  datasource: (prop_types_default()).object.isRequired,
  default: prop_types_default().shape({
    type: prop_types_default().oneOf(['fix', 'metric']),
    value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]) }) };



const FixedOrMetricControl_defaultProps = {
  onChange: () => {},
  default: { type: controlTypes.fixed, value: 5 } };


class FixedOrMetricControl extends react.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.setType = this.setType.bind(this);
    this.setFixedValue = this.setFixedValue.bind(this);
    this.setMetric = this.setMetric.bind(this);
    const type =
    (props.value ? props.value.type : props.default.type) ||
    controlTypes.fixed;
    const value =
    (props.value ? props.value.value : props.default.value) || '100';
    this.state = {
      type,
      fixedValue: type === controlTypes.fixed ? value : '',
      metricValue: type === controlTypes.metric ? value : null };

  }

  onChange() {
    this.props.onChange({
      type: this.state.type,
      value:
      this.state.type === controlTypes.fixed ?
      this.state.fixedValue :
      this.state.metricValue });

  }

  setType(type) {
    this.setState({ type }, this.onChange);
  }

  setFixedValue(fixedValue) {
    this.setState({ fixedValue }, this.onChange);
  }

  setMetric(metricValue) {
    this.setState({ metricValue }, this.onChange);
  }

  render() {
    const value = this.props.value || this.props.default;
    const type = value.type || controlTypes.fixed;
    const columns = this.props.datasource ?
    this.props.datasource.columns :
    null;
    const metrics = this.props.datasource ?
    this.props.datasource.metrics :
    null;
    return (
      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(ControlHeader/* default */.Z, this.props),
      (0,emotion_react_browser_esm.jsx)(Collapse/* default */.Z, {
        ghost: true,
        css: (theme) => /*#__PURE__*/(0,emotion_react_browser_esm.css)("&.ant-collapse>.ant-collapse-item.ant-collapse-no-arrow>.ant-collapse-header{border:0px;padding:0px 0px ",




        theme.gridUnit * 2, "px 0px;display:inline-block;}&.ant-collapse-ghost>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box{padding:0px;& .well{margin-bottom:0px;padding:",










        theme.gridUnit * 2, "px;}}" + ( true ? "" : 0),  true ? "" : 0) },




      (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, {
        showArrow: false,
        header:
        (0,emotion_react_browser_esm.jsx)(Label/* default */.Z, { onClick: () => undefined },
        this.state.type === controlTypes.fixed &&
        (0,emotion_react_browser_esm.jsx)("span", null, this.state.fixedValue),

        this.state.type === controlTypes.metric &&
        (0,emotion_react_browser_esm.jsx)("span", null,
        (0,emotion_react_browser_esm.jsx)("span", null, "metric: "),
        (0,emotion_react_browser_esm.jsx)("strong", null,
        this.state.metricValue ?
        this.state.metricValue.label :
        null))) },






      (0,emotion_react_browser_esm.jsx)("div", { className: "well" },
      (0,emotion_react_browser_esm.jsx)(PopoverSection/* default */.Z, {
        title: (0,TranslatorSingleton.t)('Fixed'),
        isSelected: type === controlTypes.fixed,
        onSelect: () => {
          this.setType(controlTypes.fixed);
        } },

      (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, {
        isFloat: true,
        onChange: this.setFixedValue,
        onFocus: () => {
          this.setType(controlTypes.fixed);
        },
        value: this.state.fixedValue })),


      (0,emotion_react_browser_esm.jsx)(PopoverSection/* default */.Z, {
        title: (0,TranslatorSingleton.t)('Based on a metric'),
        isSelected: type === controlTypes.metric,
        onSelect: () => {
          this.setType(controlTypes.metric);
        } },

      (0,emotion_react_browser_esm.jsx)(MetricControl_MetricsControl, {
        name: "metric",
        columns: columns,
        savedMetrics: metrics,
        multi: false,
        onFocus: () => {
          this.setType(controlTypes.metric);
        },
        onChange: this.setMetric,
        value: this.state.metricValue })))))));







  }}


FixedOrMetricControl.propTypes = FixedOrMetricControl_propTypes;
FixedOrMetricControl.defaultProps = FixedOrMetricControl_defaultProps;
;// CONCATENATED MODULE: ./src/explore/components/controls/HiddenControl.jsx
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




const HiddenControl_propTypes = {
  onChange: (prop_types_default()).func,
  value: prop_types_default().oneOfType([
  (prop_types_default()).string,
  (prop_types_default()).number,
  (prop_types_default()).object,
  (prop_types_default()).bool,
  (prop_types_default()).array,
  (prop_types_default()).func]) };



const HiddenControl_defaultProps = {
  onChange: () => {} };


function HiddenControl(props) {
  // This wouldn't be necessary but might as well
  return (0,emotion_react_browser_esm.jsx)(common_components/* Input */.II, { type: "hidden", value: props.value });
}

HiddenControl.propTypes = HiddenControl_propTypes;
HiddenControl.defaultProps = HiddenControl_defaultProps;
;// CONCATENATED MODULE: ./src/explore/components/controls/SelectAsyncControl/index.tsx
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






function isLabeledValue(arg) {
  return arg.value !== undefined;
}
const SelectAsyncControl = ({ addDangerToast, allowClear = true, ariaLabel, dataEndpoint, multi = true, mutator, onChange, placeholder, value, ...props }) => {
  const [options, setOptions] = (0,react.useState)([]);
  const handleOnChange = (val) => {
    let onChangeVal = val;
    if (Array.isArray(val)) {
      const values = val.map((v) => isLabeledValue(v) ? v.value : v);
      onChangeVal = values;
    }
    if (isLabeledValue(val)) {
      onChangeVal = val.value;
    }
    onChange(onChangeVal);
  };
  const getValue = () => {
    const currentValue = value || (props.default !== undefined ? props.default : undefined);
    // safety check - the value is intended to be undefined but null was used
    if (currentValue === null && !options.find((o) => o.value === null)) {
      return undefined;
    }
    return currentValue;
  };
  (0,react.useEffect)(() => {
    const onError = (response) => (0,getClientErrorObject/* getClientErrorObject */.O)(response).then((e) => {
      const { error } = e;
      addDangerToast(`${(0,TranslatorSingleton.t)('Error while fetching data')}: ${error}`);
    });
    const loadOptions = () => SupersetClient/* default.get */.Z.get({
      endpoint: dataEndpoint }).

    then((response) => {
      const data = mutator ? mutator(response.json) : response.json.result;
      setOptions(data);
    }).
    catch(onError);
    loadOptions();
  }, [addDangerToast, dataEndpoint, mutator]);
  return (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { allowClear: allowClear, ariaLabel: ariaLabel || (0,TranslatorSingleton.t)('Select ...'), value: getValue(), header: (0,emotion_react_browser_esm.jsx)(ControlHeader/* default */.Z, props), mode: multi ? 'multiple' : 'single', onChange: handleOnChange, options: options, placeholder: placeholder });
};
/* harmony default export */ const controls_SelectAsyncControl = ((0,withToasts/* default */.Z)(SelectAsyncControl));
// EXTERNAL MODULE: ./src/explore/components/controls/SelectControl.jsx
var SelectControl = __webpack_require__(82199);
// EXTERNAL MODULE: ./node_modules/antd/lib/slider/index.js
var slider = __webpack_require__(36155);
;// CONCATENATED MODULE: ./src/components/Slider/index.tsx
function Slider_EMOTION_STRINGIFIED_CSS_ERROR_() {return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";} /**
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


var Slider_ref =  true ? { name: "mlsake", styles: "margin-left:0;margin-right:0" } : 0;
function Slider(props) {
  return (0,emotion_react_browser_esm.jsx)(slider/* default */.Z, extends_default()({}, props, { css: Slider_ref }));
}
;// CONCATENATED MODULE: ./src/explore/components/controls/SliderControl.jsx
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





const SliderControl_propTypes = {
  onChange: (prop_types_default()).func,
  value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]) };


const SliderControl_defaultProps = {
  onChange: () => {} };


function SliderControl(props) {
  return (
    (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(ControlHeader/* default */.Z, props),
    (0,emotion_react_browser_esm.jsx)(Slider, extends_default()({}, props, { defaultValue: props.default }))));


}

SliderControl.propTypes = SliderControl_propTypes;
SliderControl.defaultProps = SliderControl_defaultProps;
// EXTERNAL MODULE: ./src/explore/components/controls/SpatialControl.jsx
var SpatialControl = __webpack_require__(665);
// EXTERNAL MODULE: ./src/explore/components/controls/TextAreaControl.jsx
var TextAreaControl = __webpack_require__(42878);
;// CONCATENATED MODULE: ./src/explore/components/controls/TimeSeriesColumnControl/index.jsx
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











const TimeSeriesColumnControl_propTypes = {
  label: (prop_types_default()).string,
  tooltip: (prop_types_default()).string,
  colType: (prop_types_default()).string,
  width: (prop_types_default()).string,
  height: (prop_types_default()).string,
  timeLag: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  timeRatio: (prop_types_default()).string,
  comparisonType: (prop_types_default()).string,
  showYAxis: (prop_types_default()).bool,
  yAxisBounds: (prop_types_default()).array,
  bounds: (prop_types_default()).array,
  d3format: (prop_types_default()).string,
  dateFormat: (prop_types_default()).string,
  onChange: (prop_types_default()).func };


const TimeSeriesColumnControl_defaultProps = {
  label: (0,TranslatorSingleton.t)('Time series columns'),
  tooltip: '',
  colType: '',
  width: '',
  height: '',
  timeLag: '',
  timeRatio: '',
  comparisonType: '',
  showYAxis: false,
  yAxisBounds: [null, null],
  bounds: [null, null],
  d3format: '',
  dateFormat: '' };


const comparisonTypeOptions = [
{ value: 'value', label: 'Actual value', key: 'value' },
{ value: 'diff', label: 'Difference', key: 'diff' },
{ value: 'perc', label: 'Percentage', key: 'perc' },
{ value: 'perc_change', label: 'Percentage change', key: 'perc_change' }];


const colTypeOptions = [
{ value: 'time', label: 'Time comparison', key: 'time' },
{ value: 'contrib', label: 'Contribution', key: 'contrib' },
{ value: 'spark', label: 'Sparkline', key: 'spark' },
{ value: 'avg', label: 'Period average', key: 'avg' }];


const StyledRow = (0,style/* styled */.iK)(common_components/* Row */.X2)`
  margin-top: ${({ theme }) => theme.gridUnit * 2}px;
  display: flex;
  align-items: center;
`;

const StyledCol = (0,style/* styled */.iK)(common_components/* Col */.JX)`
  display: flex;
  align-items: center;
`;

const StyledTooltip = (0,style/* styled */.iK)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V)`
  margin-left: ${({ theme }) => theme.gridUnit}px;
  color: ${({ theme }) => theme.colors.grayscale.light1};
`;

const ButtonBar = style/* styled.div */.iK.div`
  margin-top: ${({ theme }) => theme.gridUnit * 5}px;
  display: flex;
  justify-content: center;
`;

class TimeSeriesColumnControl extends react.Component {
  constructor(props) {
    super(props);

    this.onSave = this.onSave.bind(this);
    this.onClose = this.onClose.bind(this);
    this.resetState = this.resetState.bind(this);
    this.initialState = this.initialState.bind(this);
    this.onPopoverVisibleChange = this.onPopoverVisibleChange.bind(this);

    this.state = this.initialState();
  }

  initialState() {
    return {
      label: this.props.label,
      tooltip: this.props.tooltip,
      colType: this.props.colType,
      width: this.props.width,
      height: this.props.height,
      timeLag: this.props.timeLag || 0,
      timeRatio: this.props.timeRatio,
      comparisonType: this.props.comparisonType,
      showYAxis: this.props.showYAxis,
      yAxisBounds: this.props.yAxisBounds,
      bounds: this.props.bounds,
      d3format: this.props.d3format,
      dateFormat: this.props.dateFormat,
      popoverVisible: false };

  }

  resetState() {
    const initialState = this.initialState();
    this.setState({ ...initialState });
  }

  onSave() {
    this.props.onChange(this.state);
    this.setState({ popoverVisible: false });
  }

  onClose() {
    this.resetState();
  }

  onSelectChange(attr, opt) {
    this.setState({ [attr]: opt });
  }

  onTextInputChange(attr, event) {
    this.setState({ [attr]: event.target.value });
  }

  onCheckboxChange(attr, value) {
    this.setState({ [attr]: value });
  }

  onBoundsChange(bounds) {
    this.setState({ bounds });
  }

  onPopoverVisibleChange(popoverVisible) {
    if (popoverVisible) {
      this.setState({ popoverVisible });
    } else {
      this.resetState();
    }
  }

  onYAxisBoundsChange(yAxisBounds) {
    this.setState({ yAxisBounds });
  }

  textSummary() {
    return `${this.props.label}`;
  }

  formRow(label, tooltip, ttLabel, control) {
    return (
      (0,emotion_react_browser_esm.jsx)(StyledRow, null,
      (0,emotion_react_browser_esm.jsx)(StyledCol, { xs: 24, md: 11 },
      label,
      (0,emotion_react_browser_esm.jsx)(StyledTooltip, { placement: "top", tooltip: tooltip, label: ttLabel })),

      (0,emotion_react_browser_esm.jsx)(common_components/* Col */.JX, { xs: 24, md: 13 },
      control)));



  }

  renderPopover() {
    return (
      (0,emotion_react_browser_esm.jsx)("div", { id: "ts-col-popo", style: { width: 320 } },
      this.formRow(
      'Label',
      'The column header label',
      'time-lag',
      (0,emotion_react_browser_esm.jsx)(common_components/* Input */.II, {
        value: this.state.label,
        onChange: this.onTextInputChange.bind(this, 'label'),
        placeholder: "Label" })),


      this.formRow(
      'Tooltip',
      'Column header tooltip',
      'col-tooltip',
      (0,emotion_react_browser_esm.jsx)(common_components/* Input */.II, {
        value: this.state.tooltip,
        onChange: this.onTextInputChange.bind(this, 'tooltip'),
        placeholder: "Tooltip" })),


      this.formRow(
      'Type',
      'Type of comparison, value difference or percentage',
      'col-type',
      (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, {
        ariaLabel: (0,TranslatorSingleton.t)('Type'),
        value: this.state.colType || undefined,
        onChange: this.onSelectChange.bind(this, 'colType'),
        options: colTypeOptions })),


      (0,emotion_react_browser_esm.jsx)("hr", null),
      this.state.colType === 'spark' &&
      this.formRow(
      'Width',
      'Width of the sparkline',
      'spark-width',
      (0,emotion_react_browser_esm.jsx)(common_components/* Input */.II, {
        value: this.state.width,
        onChange: this.onTextInputChange.bind(this, 'width'),
        placeholder: "Width" })),


      this.state.colType === 'spark' &&
      this.formRow(
      'Height',
      'Height of the sparkline',
      'spark-width',
      (0,emotion_react_browser_esm.jsx)(common_components/* Input */.II, {
        value: this.state.height,
        onChange: this.onTextInputChange.bind(this, 'height'),
        placeholder: "Height" })),


      ['time', 'avg'].indexOf(this.state.colType) >= 0 &&
      this.formRow(
      'Time lag',
      'Number of periods to compare against',
      'time-lag',
      (0,emotion_react_browser_esm.jsx)(common_components/* Input */.II, {
        value: this.state.timeLag,
        onChange: this.onTextInputChange.bind(this, 'timeLag'),
        placeholder: "Time Lag" })),


      ['spark'].indexOf(this.state.colType) >= 0 &&
      this.formRow(
      'Time ratio',
      'Number of periods to ratio against',
      'time-ratio',
      (0,emotion_react_browser_esm.jsx)(common_components/* Input */.II, {
        value: this.state.timeRatio,
        onChange: this.onTextInputChange.bind(this, 'timeRatio'),
        placeholder: "Time Ratio" })),


      this.state.colType === 'time' &&
      this.formRow(
      'Type',
      'Type of comparison, value difference or percentage',
      'comp-type',
      (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, {
        ariaLabel: (0,TranslatorSingleton.t)('Type'),
        value: this.state.comparisonType || undefined,
        onChange: this.onSelectChange.bind(this, 'comparisonType'),
        options: comparisonTypeOptions })),


      this.state.colType === 'spark' &&
      this.formRow(
      'Show Y-axis',
      'Show Y-axis on the sparkline. Will display the manually set min/max if set or min/max values in the data otherwise.',
      'show-y-axis-bounds',
      (0,emotion_react_browser_esm.jsx)(CheckboxControl/* default */.Z, {
        value: this.state.showYAxis,
        onChange: this.onCheckboxChange.bind(this, 'showYAxis') })),


      this.state.colType === 'spark' &&
      this.formRow(
      'Y-axis bounds',
      'Manually set min/max values for the y-axis.',
      'y-axis-bounds',
      (0,emotion_react_browser_esm.jsx)(BoundsControl, {
        value: this.state.yAxisBounds,
        onChange: this.onYAxisBoundsChange.bind(this) })),


      this.state.colType !== 'spark' &&
      this.formRow(
      'Color bounds',
      `Number bounds used for color encoding from red to blue.
              Reverse the numbers for blue to red. To get pure red or blue,
              you can enter either only min or max.`,
      'bounds',
      (0,emotion_react_browser_esm.jsx)(BoundsControl, {
        value: this.state.bounds,
        onChange: this.onBoundsChange.bind(this) })),


      this.formRow(
      'Number format',
      'Optional d3 number format string',
      'd3-format',
      (0,emotion_react_browser_esm.jsx)(common_components/* Input */.II, {
        value: this.state.d3format,
        onChange: this.onTextInputChange.bind(this, 'd3format'),
        placeholder: "Number format string" })),


      this.state.colType === 'spark' &&
      this.formRow(
      'Date format',
      'Optional d3 date format string',
      'date-format',
      (0,emotion_react_browser_esm.jsx)(common_components/* Input */.II, {
        value: this.state.dateFormat,
        onChange: this.onTextInputChange.bind(this, 'dateFormat'),
        placeholder: "Date format string" })),


      (0,emotion_react_browser_esm.jsx)(ButtonBar, null,
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonSize: "small", onClick: this.onClose, cta: true },
      (0,TranslatorSingleton.t)('Close')),

      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        buttonStyle: "primary",
        buttonSize: "small",
        onClick: this.onSave,
        cta: true },

      (0,TranslatorSingleton.t)('Save')))));




  }

  render() {
    return (
      (0,emotion_react_browser_esm.jsx)("span", null,
      this.textSummary(), ' ',
      (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, {
        trigger: "click",
        placement: "right",
        content: this.renderPopover(),
        title: "Column Configuration",
        visible: this.state.popoverVisible,
        onVisibleChange: this.onPopoverVisibleChange },

      (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, {
        icon: "edit",
        className: "text-primary",
        label: "edit-ts-column" }))));




  }}


TimeSeriesColumnControl.propTypes = TimeSeriesColumnControl_propTypes;
TimeSeriesColumnControl.defaultProps = TimeSeriesColumnControl_defaultProps;
// EXTERNAL MODULE: ./node_modules/geolib/dist/geolib.js
var geolib = __webpack_require__(79512);
;// CONCATENATED MODULE: ./src/explore/components/controls/ViewportControl.jsx
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










const DEFAULT_VIEWPORT = {
  longitude: 6.85236157047845,
  latitude: 31.222656842808707,
  zoom: 1,
  bearing: 0,
  pitch: 0 };


const PARAMS = ['longitude', 'latitude', 'zoom', 'bearing', 'pitch'];

const ViewportControl_propTypes = {
  onChange: (prop_types_default()).func,
  value: prop_types_default().shape({
    longitude: (prop_types_default()).number,
    latitude: (prop_types_default()).number,
    zoom: (prop_types_default()).number,
    bearing: (prop_types_default()).number,
    pitch: (prop_types_default()).number }),

  default: (prop_types_default()).object,
  name: (prop_types_default()).string.isRequired };


const ViewportControl_defaultProps = {
  onChange: () => {},
  default: { type: 'fix', value: 5 },
  value: DEFAULT_VIEWPORT };


class ViewportControl extends react.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(ctrl, value) {
    this.props.onChange({
      ...this.props.value,
      [ctrl]: value });

  }

  renderTextControl(ctrl) {
    return (
      (0,emotion_react_browser_esm.jsx)("div", { key: ctrl },
      (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, null, ctrl),
      (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, {
        value: this.props.value[ctrl],
        onChange: this.onChange.bind(this, ctrl),
        isFloat: true })));



  }

  renderPopover() {
    return (
      (0,emotion_react_browser_esm.jsx)("div", { id: `filter-popover-${this.props.name}` },
      PARAMS.map((ctrl) => this.renderTextControl(ctrl))));


  }

  renderLabel() {
    if (this.props.value.longitude && this.props.value.latitude) {
      return `${(0,geolib.decimal2sexagesimal)(
      this.props.value.longitude)
      } | ${(0,geolib.decimal2sexagesimal)(this.props.value.latitude)}`;
    }
    return 'N/A';
  }

  render() {
    return (
      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(ControlHeader/* default */.Z, this.props),
      (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, {
        container: document.body,
        trigger: "click",
        placement: "right",
        content: this.renderPopover(),
        title: "Viewport" },

      (0,emotion_react_browser_esm.jsx)(Label/* default */.Z, { className: "pointer" }, this.renderLabel()))));



  }}


ViewportControl.propTypes = ViewportControl_propTypes;
ViewportControl.defaultProps = ViewportControl_defaultProps;
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartMetadataRegistrySingleton.js
var ChartMetadataRegistrySingleton = __webpack_require__(38849);
// EXTERNAL MODULE: ./src/components/DynamicPlugins/index.tsx
var DynamicPlugins = __webpack_require__(14278);
// EXTERNAL MODULE: ./src/explore/components/controls/VizTypeControl/VizTypeGallery.tsx
var VizTypeGallery = __webpack_require__(13284);
;// CONCATENATED MODULE: ./src/explore/components/controls/VizTypeControl/index.tsx
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









const VizTypeControl_propTypes = {
  description: (prop_types_default()).string,
  label: (prop_types_default()).string,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func,
  value: (prop_types_default()).string.isRequired,
  labelType: (prop_types_default()).string };

const VizTypeControl_defaultProps = {
  onChange: () => {},
  labelType: 'default' };

const metadataRegistry = (0,ChartMetadataRegistrySingleton/* default */.Z)();
const VIZ_TYPE_CONTROL_TEST_ID = 'viz-type-control';
function VizSupportValidation({ vizType }) {
  const state = (0,DynamicPlugins/* usePluginContext */.gp)();
  if (state.loading || metadataRegistry.has(vizType)) {
    return null;
  }
  return (0,emotion_react_browser_esm.jsx)("div", { className: "text-danger" },
  (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-exclamation-circle text-danger" }), ' ',
  (0,emotion_react_browser_esm.jsx)("small", null, (0,TranslatorSingleton.t)('This visualization type is not supported.')));

}
const UnpaddedModal = (0,style/* styled */.iK)(Modal/* default */.Z)`
  .ant-modal-body {
    padding: 0;
  }
`;
/** Manages the viz type and the viz picker modal */
const VizTypeControl = (props) => {var _mountedPluginMetadat;
  const { value: initialValue, onChange, isModalOpenInit, labelType } = props;
  const { mountedPluginMetadata } = (0,DynamicPlugins/* usePluginContext */.gp)();
  const [showModal, setShowModal] = (0,react.useState)(!!isModalOpenInit);
  // a trick to force re-initialization of the gallery each time the modal opens,
  // ensuring that the modal always opens to the correct category.
  const [modalKey, setModalKey] = (0,react.useState)(0);
  const [selectedViz, setSelectedViz] = (0,react.useState)(initialValue);
  const openModal = (0,react.useCallback)(() => {
    setShowModal(true);
  }, []);
  const onSubmit = (0,react.useCallback)(() => {
    onChange(selectedViz);
    setShowModal(false);
  }, [selectedViz, onChange]);
  const onCancel = (0,react.useCallback)(() => {
    setShowModal(false);
    setModalKey((key) => key + 1);
    // make sure the modal re-opens to the last submitted viz
    setSelectedViz(initialValue);
  }, [initialValue]);
  const labelContent = initialValue ?
  ((_mountedPluginMetadat = mountedPluginMetadata[initialValue]) == null ? void 0 : _mountedPluginMetadat.name) || `${initialValue}` :
  (0,TranslatorSingleton.t)('Select Viz Type');
  return (0,emotion_react_browser_esm.jsx)("div", null,
  (0,emotion_react_browser_esm.jsx)(ControlHeader/* default */.Z, props),
  (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "error-tooltip", placement: "right", title: (0,TranslatorSingleton.t)('Click to change visualization type') },
  (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(Label/* default */.Z, { onClick: openModal, type: labelType },
  labelContent),

  initialValue && (0,emotion_react_browser_esm.jsx)(VizSupportValidation, { vizType: initialValue }))),



  (0,emotion_react_browser_esm.jsx)(UnpaddedModal, { show: showModal, onHide: onCancel, title: (0,TranslatorSingleton.t)('Select a visualization type'), primaryButtonName: (0,TranslatorSingleton.t)('Select'), disablePrimaryButton: !selectedViz, onHandledPrimaryAction: onSubmit, maxWidth: `${VizTypeGallery/* MAX_ADVISABLE_VIZ_GALLERY_WIDTH */.UB}px`, responsive: true },

  (0,emotion_react_browser_esm.jsx)(VizTypeGallery/* default */.ZP, { key: modalKey, selectedViz: selectedViz, onChange: setSelectedViz })));


};
VizTypeControl.propTypes = VizTypeControl_propTypes;
VizTypeControl.defaultProps = VizTypeControl_defaultProps;
/* harmony default export */ const controls_VizTypeControl = (VizTypeControl);
// EXTERNAL MODULE: ./src/explore/components/controls/FilterControl/AdhocFilterControl/index.jsx + 2 modules
var AdhocFilterControl = __webpack_require__(46566);
;// CONCATENATED MODULE: ./src/components/FormRow/index.jsx
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






const STYLE_ROW = { marginTop: '5px', minHeight: '30px' };
const STYLE_RALIGN = { textAlign: 'right' };

const FormRow_propTypes = {
  label: (prop_types_default()).string.isRequired,
  tooltip: (prop_types_default()).string,
  control: (prop_types_default()).node.isRequired,
  isCheckbox: (prop_types_default()).bool };


const FormRow_defaultProps = {
  tooltip: null,
  isCheckbox: false };


function FormRow({ label, tooltip, control, isCheckbox }) {
  const labelAndTooltip =
  (0,emotion_react_browser_esm.jsx)("span", null,
  label, ' ',
  tooltip &&
  (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, {
    placement: "top",
    label: label,
    tooltip: tooltip }));




  if (isCheckbox) {
    return (
      (0,emotion_react_browser_esm.jsx)(common_components/* Row */.X2, { style: STYLE_ROW, gutter: 16 },
      (0,emotion_react_browser_esm.jsx)(common_components/* Col */.JX, { xs: 24, md: 8, style: STYLE_RALIGN },
      control),

      (0,emotion_react_browser_esm.jsx)(common_components/* Col */.JX, { xs: 24, md: 16 },
      labelAndTooltip)));



  }
  return (
    (0,emotion_react_browser_esm.jsx)(common_components/* Row */.X2, { style: STYLE_ROW, gutter: 16 },
    (0,emotion_react_browser_esm.jsx)(common_components/* Col */.JX, { xs: 24, md: 8, style: STYLE_RALIGN },
    labelAndTooltip),

    (0,emotion_react_browser_esm.jsx)(common_components/* Col */.JX, { xs: 24, md: 16 },
    control)));



}
FormRow.propTypes = FormRow_propTypes;
FormRow.defaultProps = FormRow_defaultProps;
;// CONCATENATED MODULE: ./src/explore/components/controls/FilterBoxItemControl/index.jsx
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












const INTEGRAL_TYPES = new Set([
'TINYINT',
'SMALLINT',
'INT',
'INTEGER',
'BIGINT',
'LONG']);

const DECIMAL_TYPES = new Set([
'FLOAT',
'DOUBLE',
'REAL',
'NUMERIC',
'DECIMAL',
'MONEY']);


const FilterBoxItemControl_propTypes = {
  datasource: (prop_types_default()).object.isRequired,
  onChange: (prop_types_default()).func,
  asc: (prop_types_default()).bool,
  clearable: (prop_types_default()).bool,
  multiple: (prop_types_default()).bool,
  column: (prop_types_default()).string,
  label: (prop_types_default()).string,
  metric: (prop_types_default()).string,
  searchAllOptions: (prop_types_default()).bool,
  defaultValue: (prop_types_default()).string };


const FilterBoxItemControl_defaultProps = {
  onChange: () => {},
  asc: true,
  clearable: true,
  multiple: true,
  searchAllOptions: false };


const STYLE_WIDTH = { width: 350 };

class FilterBoxItemControl extends react.Component {
  constructor(props) {
    super(props);
    const {
      column,
      metric,
      asc,
      clearable,
      multiple,
      searchAllOptions,
      label,
      defaultValue } =
    props;
    this.state = {
      column,
      metric,
      label,
      asc,
      clearable,
      multiple,
      searchAllOptions,
      defaultValue };

    this.onChange = this.onChange.bind(this);
    this.onControlChange = this.onControlChange.bind(this);
  }

  onChange() {
    this.props.onChange(this.state);
  }

  onControlChange(attr, value) {
    let typedValue = value;
    const { column: selectedColumnName, multiple } = this.state;
    if (value && !multiple && attr === explore_constants/* FILTER_CONFIG_ATTRIBUTES.DEFAULT_VALUE */.ft.DEFAULT_VALUE) {
      // if single value filter_box,
      // convert input value string to the column's data type
      const { datasource } = this.props;
      const selectedColumn = datasource.columns.find(
      (col) => col.column_name === selectedColumnName);


      if (selectedColumn && selectedColumn.type) {
        const type = selectedColumn.type.toUpperCase();
        if (type === 'BOOLEAN') {
          typedValue = value === 'true';
        } else if (INTEGRAL_TYPES.has(type)) {
          typedValue = Number.isNaN(Number(value)) ? null : parseInt(value, 10);
        } else if (DECIMAL_TYPES.has(type)) {
          typedValue = Number.isNaN(Number(value)) ? null : parseFloat(value);
        }
      }
    }
    this.setState({ [attr]: typedValue }, this.onChange);
  }

  setType() {}

  textSummary() {
    return this.state.column || 'N/A';
  }

  renderForm() {
    return (
      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(FormRow, {
        label: (0,TranslatorSingleton.t)('Column'),
        control:
        (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, {
          ariaLabel: (0,TranslatorSingleton.t)('Column'),
          value: this.state.column,
          name: "column",
          options: this.props.datasource.columns.
          filter((col) => col.column_name !== this.state.column).
          map((col) => ({
            value: col.column_name,
            label: col.column_name })).

          concat([
          { value: this.state.column, label: this.state.column }]),

          onChange: (v) => this.onControlChange('column', v) }) }),



      (0,emotion_react_browser_esm.jsx)(FormRow, {
        label: (0,TranslatorSingleton.t)('Label'),
        control:
        (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, {
          value: this.state.label,
          name: "label",
          onChange: (v) => this.onControlChange('label', v) }) }),



      (0,emotion_react_browser_esm.jsx)(FormRow, {
        label: (0,TranslatorSingleton.t)('Default'),
        tooltip: (0,TranslatorSingleton.t)(
        '(optional) default value for the filter, when using ' +
        'the multiple option, you can use a semicolon-delimited list ' +
        'of options.'),

        control:
        (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, {
          value: this.state.defaultValue,
          name: "defaultValue",
          onChange: (v) =>
          this.onControlChange(explore_constants/* FILTER_CONFIG_ATTRIBUTES.DEFAULT_VALUE */.ft.DEFAULT_VALUE, v) }) }),




      (0,emotion_react_browser_esm.jsx)(FormRow, {
        label: (0,TranslatorSingleton.t)('Sort metric'),
        tooltip: (0,TranslatorSingleton.t)('Metric to sort the results by'),
        control:
        (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, {
          ariaLabel: (0,TranslatorSingleton.t)('Sort metric'),
          value: this.state.metric,
          name: "column",
          options: this.props.datasource.metrics.
          filter((m) => m.metric_name !== this.state.metric).
          map((m) => ({
            value: m.metric_name,
            label: m.metric_name })).

          concat([
          { value: this.state.metric, label: this.state.metric }]),

          onChange: (v) => this.onControlChange('metric', v) }) }),



      (0,emotion_react_browser_esm.jsx)(FormRow, {
        label: (0,TranslatorSingleton.t)('Sort ascending'),
        tooltip: (0,TranslatorSingleton.t)('Check for sorting ascending'),
        isCheckbox: true,
        control:
        (0,emotion_react_browser_esm.jsx)(CheckboxControl/* default */.Z, {
          value: this.state.asc,
          onChange: (v) => this.onControlChange('asc', v) }) }),



      (0,emotion_react_browser_esm.jsx)(FormRow, {
        label: (0,TranslatorSingleton.t)('Allow multiple selections'),
        isCheckbox: true,
        tooltip: (0,TranslatorSingleton.t)(
        'Multiple selections allowed, otherwise filter ' +
        'is limited to a single value'),

        control:
        (0,emotion_react_browser_esm.jsx)(CheckboxControl/* default */.Z, {
          value: this.state.multiple,
          onChange: (v) =>
          this.onControlChange(explore_constants/* FILTER_CONFIG_ATTRIBUTES.MULTIPLE */.ft.MULTIPLE, v) }) }),




      (0,emotion_react_browser_esm.jsx)(FormRow, {
        label: (0,TranslatorSingleton.t)('Search all filter options'),
        tooltip: (0,TranslatorSingleton.t)(
        'By default, each filter loads at most 1000 choices at the initial page load. ' +
        'Check this box if you have more than 1000 filter values and want to enable dynamically ' +
        'searching that loads filter values as users type (may add stress to your database).'),

        isCheckbox: true,
        control:
        (0,emotion_react_browser_esm.jsx)(CheckboxControl/* default */.Z, {
          value: this.state.searchAllOptions,
          onChange: (v) =>
          this.onControlChange(
          explore_constants/* FILTER_CONFIG_ATTRIBUTES.SEARCH_ALL_OPTIONS */.ft.SEARCH_ALL_OPTIONS,
          v) }) }),





      (0,emotion_react_browser_esm.jsx)(FormRow, {
        label: (0,TranslatorSingleton.t)('Required'),
        tooltip: (0,TranslatorSingleton.t)('User must select a value for this filter'),
        isCheckbox: true,
        control:
        (0,emotion_react_browser_esm.jsx)(CheckboxControl/* default */.Z, {
          value: !this.state.clearable,
          onChange: (v) => this.onControlChange('clearable', !v) }) })));





  }

  renderPopover() {
    return (
      (0,emotion_react_browser_esm.jsx)("div", { id: "ts-col-popo", style: STYLE_WIDTH },
      this.renderForm()));


  }

  render() {
    return (
      (0,emotion_react_browser_esm.jsx)("span", null,
      this.textSummary(), ' ',
      (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, {
        trigger: "click",
        placement: "right",
        content: this.renderPopover(),
        title: (0,TranslatorSingleton.t)('Filter configuration') },

      (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, {
        icon: "edit",
        className: "text-primary",
        label: "edit-ts-column" }))));




  }}


FilterBoxItemControl.propTypes = FilterBoxItemControl_propTypes;
FilterBoxItemControl.defaultProps = FilterBoxItemControl_defaultProps;
// EXTERNAL MODULE: ./src/common/hooks/useComponentDidUpdate/useComponentDidUpdate.ts
var useComponentDidUpdate = __webpack_require__(83601);
;// CONCATENATED MODULE: ./src/common/hooks/useComponentDidUpdate/index.ts
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

;// CONCATENATED MODULE: ./src/explore/components/controls/ConditionalFormattingControl/types.ts
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
var COMPARATOR;
(function (COMPARATOR) {
  COMPARATOR["NONE"] = "None";
  COMPARATOR["GREATER_THAN"] = ">";
  COMPARATOR["LESS_THAN"] = "<";
  COMPARATOR["GREATER_OR_EQUAL"] = "\u2265";
  COMPARATOR["LESS_OR_EQUAL"] = "\u2264";
  COMPARATOR["EQUAL"] = "=";
  COMPARATOR["NOT_EQUAL"] = "\u2260";
  COMPARATOR["BETWEEN"] = "< x <";
  COMPARATOR["BETWEEN_OR_EQUAL"] = "\u2264 x \u2264";
  COMPARATOR["BETWEEN_OR_LEFT_EQUAL"] = "\u2264 x <";
  COMPARATOR["BETWEEN_OR_RIGHT_EQUAL"] = "< x \u2264";
})(COMPARATOR || (COMPARATOR = {}));
const MULTIPLE_VALUE_COMPARATORS = [
COMPARATOR.BETWEEN,
COMPARATOR.BETWEEN_OR_EQUAL,
COMPARATOR.BETWEEN_OR_LEFT_EQUAL,
COMPARATOR.BETWEEN_OR_RIGHT_EQUAL];
;// CONCATENATED MODULE: ./src/explore/components/controls/ConditionalFormattingControl/FormattingPopoverContent.tsx
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







const FullWidthInputNumber = (0,style/* styled */.iK)(common_components/* InputNumber */.Rn)`
  width: 100%;
`;
const JustifyEnd = style/* styled.div */.iK.div`
  display: flex;
  justify-content: flex-end;
`;
const colorSchemeOptions = [
{ value: 'rgb(0,255,0)', label: (0,TranslatorSingleton.t)('green') },
{ value: 'rgb(255,255,0)', label: (0,TranslatorSingleton.t)('yellow') },
{ value: 'rgb(255,0,0)', label: (0,TranslatorSingleton.t)('red') }];

const operatorOptions = [
{ value: COMPARATOR.NONE, label: 'None' },
{ value: COMPARATOR.GREATER_THAN, label: '>' },
{ value: COMPARATOR.LESS_THAN, label: '<' },
{ value: COMPARATOR.GREATER_OR_EQUAL, label: '≥' },
{ value: COMPARATOR.LESS_OR_EQUAL, label: '≤' },
{ value: COMPARATOR.EQUAL, label: '=' },
{ value: COMPARATOR.NOT_EQUAL, label: '≠' },
{ value: COMPARATOR.BETWEEN, label: '< x <' },
{ value: COMPARATOR.BETWEEN_OR_EQUAL, label: '≤ x ≤' },
{ value: COMPARATOR.BETWEEN_OR_LEFT_EQUAL, label: '≤ x <' },
{ value: COMPARATOR.BETWEEN_OR_RIGHT_EQUAL, label: '< x ≤' }];

const targetValueValidator = (compare, rejectMessage) => (targetValue) => (_, compareValue) => {
  if (!targetValue ||
  !compareValue ||
  compare(Number(targetValue), Number(compareValue))) {
    return Promise.resolve();
  }
  return Promise.reject(new Error(rejectMessage));
};
const targetValueLeftValidator = targetValueValidator((target, val) => target > val, (0,TranslatorSingleton.t)('This value should be smaller than the right target value'));
const targetValueRightValidator = targetValueValidator((target, val) => target < val, (0,TranslatorSingleton.t)('This value should be greater than the left target value'));
const isOperatorMultiValue = (operator) => operator && MULTIPLE_VALUE_COMPARATORS.includes(operator);
const isOperatorNone = (operator) => !operator || operator === COMPARATOR.NONE;
const rulesRequired = [{ required: true, message: (0,TranslatorSingleton.t)('Required') }];
const rulesTargetValueLeft = [
{ required: true, message: (0,TranslatorSingleton.t)('Required') },
({ getFieldValue }) => ({
  validator: targetValueLeftValidator(getFieldValue('targetValueRight')) })];


const rulesTargetValueRight = [
{ required: true, message: (0,TranslatorSingleton.t)('Required') },
({ getFieldValue }) => ({
  validator: targetValueRightValidator(getFieldValue('targetValueLeft')) })];


const targetValueLeftDeps = ['targetValueRight'];
const targetValueRightDeps = ['targetValueLeft'];
const shouldFormItemUpdate = (prevValues, currentValues) => isOperatorNone(prevValues.operator) !==
isOperatorNone(currentValues.operator) ||
isOperatorMultiValue(prevValues.operator) !==
isOperatorMultiValue(currentValues.operator);
const operatorField = (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { name: "operator", label: (0,TranslatorSingleton.t)('Operator'), rules: rulesRequired, initialValue: operatorOptions[0].value },
(0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Operator'), options: operatorOptions }));

const renderOperatorFields = ({ getFieldValue }) => isOperatorNone(getFieldValue('operator')) ? (0,emotion_react_browser_esm.jsx)(common_components/* Row */.X2, { gutter: 12 },
(0,emotion_react_browser_esm.jsx)(common_components/* Col */.JX, { span: 6 }, operatorField)) :
isOperatorMultiValue(getFieldValue('operator')) ? (0,emotion_react_browser_esm.jsx)(common_components/* Row */.X2, { gutter: 12 },
(0,emotion_react_browser_esm.jsx)(common_components/* Col */.JX, { span: 9 },
(0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { name: "targetValueLeft", label: (0,TranslatorSingleton.t)('Left value'), rules: rulesTargetValueLeft, dependencies: targetValueLeftDeps, validateTrigger: "onBlur", trigger: "onBlur" },
(0,emotion_react_browser_esm.jsx)(FullWidthInputNumber, null))),


(0,emotion_react_browser_esm.jsx)(common_components/* Col */.JX, { span: 6 }, operatorField),
(0,emotion_react_browser_esm.jsx)(common_components/* Col */.JX, { span: 9 },
(0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { name: "targetValueRight", label: (0,TranslatorSingleton.t)('Right value'), rules: rulesTargetValueRight, dependencies: targetValueRightDeps, validateTrigger: "onBlur", trigger: "onBlur" },
(0,emotion_react_browser_esm.jsx)(FullWidthInputNumber, null)))) :


(0,emotion_react_browser_esm.jsx)(common_components/* Row */.X2, { gutter: 12 },
(0,emotion_react_browser_esm.jsx)(common_components/* Col */.JX, { span: 6 }, operatorField),
(0,emotion_react_browser_esm.jsx)(common_components/* Col */.JX, { span: 18 },
(0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { name: "targetValue", label: (0,TranslatorSingleton.t)('Target value'), rules: rulesRequired },
(0,emotion_react_browser_esm.jsx)(FullWidthInputNumber, null))));



const FormattingPopoverContent = ({ config, onChange, columns = [] }) => {var _columns$;return (0,emotion_react_browser_esm.jsx)(Form/* Form */.l0, { onFinish: onChange, initialValues: config, requiredMark: "optional", layout: "vertical" },
  (0,emotion_react_browser_esm.jsx)(common_components/* Row */.X2, { gutter: 12 },
  (0,emotion_react_browser_esm.jsx)(common_components/* Col */.JX, { span: 12 },
  (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { name: "column", label: (0,TranslatorSingleton.t)('Column'), rules: rulesRequired, initialValue: (_columns$ = columns[0]) == null ? void 0 : _columns$.value },
  (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Select column'), options: columns }))),


  (0,emotion_react_browser_esm.jsx)(common_components/* Col */.JX, { span: 12 },
  (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { name: "colorScheme", label: (0,TranslatorSingleton.t)('Color scheme'), rules: rulesRequired, initialValue: colorSchemeOptions[0].value },
  (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Color scheme'), options: colorSchemeOptions })))),



  (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { noStyle: true, shouldUpdate: shouldFormItemUpdate },
  renderOperatorFields),

  (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, null,
  (0,emotion_react_browser_esm.jsx)(JustifyEnd, null,
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { htmlType: "submit", buttonStyle: "primary" },
  (0,TranslatorSingleton.t)('Apply')))));};
;// CONCATENATED MODULE: ./src/explore/components/controls/ConditionalFormattingControl/FormattingPopover.tsx
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



const FormattingPopover = ({ title, columns, onChange, config, children, ...props }) => {
  const [visible, setVisible] = (0,react.useState)(false);
  const handleSave = (0,react.useCallback)((newConfig) => {
    setVisible(false);
    onChange(newConfig);
  }, [onChange]);
  return (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, extends_default()({ title: title, content: (0,emotion_react_browser_esm.jsx)(FormattingPopoverContent, { onChange: handleSave, config: config, columns: columns }), visible: visible, onVisibleChange: setVisible, trigger: ['click'], overlayStyle: { width: '450px' } }, props),
  children);

};
;// CONCATENATED MODULE: ./src/explore/components/controls/ConditionalFormattingControl/ConditionalFormattingControl.tsx
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








const FormattersContainer = style/* styled.div */.iK.div`
  ${({ theme }) => emotion_react_browser_esm.css`
    padding: ${theme.gridUnit}px;
    border: solid 1px ${theme.colors.grayscale.light2};
    border-radius: ${theme.gridUnit}px;
  `}
`;
const FormatterContainer = (0,style/* styled */.iK)(OptionControls/* OptionControlContainer */.EQ)`
  &,
  & > div {
    margin-bottom: ${({ theme }) => theme.gridUnit}px;
    :last-child {
      margin-bottom: 0;
    }
  }
`;
const CloseButton = style/* styled.button */.iK.button`
  ${({ theme }) => emotion_react_browser_esm.css`
    color: ${theme.colors.grayscale.light1};
    height: 100%;
    width: ${theme.gridUnit * 6}px;
    border: none;
    border-right: solid 1px ${theme.colors.grayscale.dark2}0C;
    padding: 0;
    outline: none;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  `}
`;
const ConditionalFormattingControl = ({ value, onChange, columnOptions, verboseMap, ...props }) => {
  const theme = (0,style/* useTheme */.Fg)();
  const [conditionalFormattingConfigs, setConditionalFormattingConfigs] = (0,react.useState)(value != null ? value : []);
  (0,react.useEffect)(() => {
    if (onChange) {
      onChange(conditionalFormattingConfigs);
    }
  }, [conditionalFormattingConfigs, onChange]);
  // remove formatter when corresponding column is removed from controls
  const removeFormattersWhenColumnsChange = (0,react.useCallback)(() => {
    const newFormattingConfigs = conditionalFormattingConfigs.filter((config) => columnOptions.some((option) => (option == null ? void 0 : option.value) === (config == null ? void 0 : config.column)));
    if (newFormattingConfigs.length !== conditionalFormattingConfigs.length &&
    onChange) {
      setConditionalFormattingConfigs(newFormattingConfigs);
      onChange(newFormattingConfigs);
    }
  }, [JSON.stringify(columnOptions)]);
  (0,useComponentDidUpdate/* useComponentDidUpdate */.d)(removeFormattersWhenColumnsChange);
  const onDelete = (index) => {
    setConditionalFormattingConfigs((prevConfigs) => prevConfigs.filter((_, i) => i !== index));
  };
  const onSave = (config) => {
    setConditionalFormattingConfigs((prevConfigs) => [...prevConfigs, config]);
  };
  const onEdit = (newConfig, index) => {
    const newConfigs = [...conditionalFormattingConfigs];
    newConfigs.splice(index, 1, newConfig);
    setConditionalFormattingConfigs(newConfigs);
  };
  const createLabel = ({ column, operator, targetValue, targetValueLeft, targetValueRight }) => {var _ref;
    const columnName = (_ref = column && (verboseMap == null ? void 0 : verboseMap[column])) != null ? _ref : column;
    switch (operator) {
      case COMPARATOR.NONE:
        return `${columnName}`;
      case COMPARATOR.BETWEEN:
        return `${targetValueLeft} ${COMPARATOR.LESS_THAN} ${columnName} ${COMPARATOR.LESS_THAN} ${targetValueRight}`;
      case COMPARATOR.BETWEEN_OR_EQUAL:
        return `${targetValueLeft} ${COMPARATOR.LESS_OR_EQUAL} ${columnName} ${COMPARATOR.LESS_OR_EQUAL} ${targetValueRight}`;
      case COMPARATOR.BETWEEN_OR_LEFT_EQUAL:
        return `${targetValueLeft} ${COMPARATOR.LESS_OR_EQUAL} ${columnName} ${COMPARATOR.LESS_THAN} ${targetValueRight}`;
      case COMPARATOR.BETWEEN_OR_RIGHT_EQUAL:
        return `${targetValueLeft} ${COMPARATOR.LESS_THAN} ${columnName} ${COMPARATOR.LESS_OR_EQUAL} ${targetValueRight}`;
      default:
        return `${columnName} ${operator} ${targetValue}`;}

  };
  return (0,emotion_react_browser_esm.jsx)("div", null,
  (0,emotion_react_browser_esm.jsx)(ControlHeader/* default */.Z, props),
  (0,emotion_react_browser_esm.jsx)(FormattersContainer, null,
  conditionalFormattingConfigs.map((config, index) => (0,emotion_react_browser_esm.jsx)(FormatterContainer, { key: index },
  (0,emotion_react_browser_esm.jsx)(CloseButton, { onClick: () => onDelete(index) },
  (0,emotion_react_browser_esm.jsx)(Icons/* default.XSmall */.Z.XSmall, { iconColor: theme.colors.grayscale.light1 })),

  (0,emotion_react_browser_esm.jsx)(FormattingPopover, { title: (0,TranslatorSingleton.t)('Edit formatter'), config: config, columns: columnOptions, onChange: (newConfig) => onEdit(newConfig, index), destroyTooltipOnHide: true },
  (0,emotion_react_browser_esm.jsx)(OptionControls/* OptionControlContainer */.EQ, { withCaret: true },
  (0,emotion_react_browser_esm.jsx)(OptionControls/* Label */.__, null, createLabel(config)),
  (0,emotion_react_browser_esm.jsx)(OptionControls/* CaretContainer */.Ne, null,
  (0,emotion_react_browser_esm.jsx)(Icons/* default.CaretRight */.Z.CaretRight, { iconColor: theme.colors.grayscale.light1 })))))),




  (0,emotion_react_browser_esm.jsx)(FormattingPopover, { title: (0,TranslatorSingleton.t)('Add new formatter'), columns: columnOptions, onChange: onSave, destroyTooltipOnHide: true },
  (0,emotion_react_browser_esm.jsx)(OptionControls/* AddControlLabel */.SW, null,
  (0,emotion_react_browser_esm.jsx)(Icons/* default.PlusSmall */.Z.PlusSmall, { iconColor: theme.colors.grayscale.light1 }),
  (0,TranslatorSingleton.t)('Add new color formatter')))));




};
/* harmony default export */ const ConditionalFormattingControl_ConditionalFormattingControl = (ConditionalFormattingControl);
;// CONCATENATED MODULE: ./src/explore/components/controls/ConditionalFormattingControl/index.ts
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


/* harmony default export */ const controls_ConditionalFormattingControl = (ConditionalFormattingControl_ConditionalFormattingControl);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDrop.js + 1 modules
var useDrop = __webpack_require__(22068);
;// CONCATENATED MODULE: ./src/explore/components/controls/DndColumnSelectControl/DndSelectLabel.tsx
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






function DndSelectLabel({ displayGhostButton = true, accept, ...props }) {
  const theme = (0,style/* useTheme */.Fg)();
  const [{ isOver, canDrop }, datasourcePanelDrop] = (0,useDrop/* useDrop */.L)({
    accept,
    drop: (item) => {
      props.onDrop(item);
      props.onDropValue == null ? void 0 : props.onDropValue(item.value);
    },
    canDrop: (item) => {var _props$canDropValue;return props.canDrop(item) && ((_props$canDropValue = props.canDropValue == null ? void 0 : props.canDropValue(item.value)) != null ? _props$canDropValue : true);},
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      type: monitor.getItemType() }) });


  function renderGhostButton() {
    return (0,emotion_react_browser_esm.jsx)(OptionControls/* AddControlLabel */.SW, { cancelHover: !props.onClickGhostButton, onClick: props.onClickGhostButton },
    (0,emotion_react_browser_esm.jsx)(Icons/* default.PlusSmall */.Z.PlusSmall, { iconColor: theme.colors.grayscale.light1 }),
    (0,TranslatorSingleton.t)(props.ghostButtonText || 'Drop columns here'));

  }
  return (0,emotion_react_browser_esm.jsx)("div", { ref: datasourcePanelDrop },
  (0,emotion_react_browser_esm.jsx)(OptionControls/* HeaderContainer */.gM, null,
  (0,emotion_react_browser_esm.jsx)(ControlHeader/* default */.Z, props)),

  (0,emotion_react_browser_esm.jsx)(OptionControls/* DndLabelsContainer */.H$, { canDrop: canDrop, isOver: isOver },
  props.valuesRenderer(),
  displayGhostButton && renderGhostButton()));


}
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDrag.js + 1 modules
var useDrag = __webpack_require__(27034);
;// CONCATENATED MODULE: ./src/explore/components/controls/DndColumnSelectControl/Option.tsx
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





const StyledInfoTooltipWithTrigger = (0,style/* styled */.iK)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V)`
  margin: 0 ${({ theme }) => theme.gridUnit}px;
`;
function Option({ children, index, clickClose, withCaret, isExtra, canDelete = true }) {
  const theme = (0,style/* useTheme */.Fg)();
  const onClickClose = (0,react.useCallback)((e) => {
    e.stopPropagation();
    clickClose(index);
  }, [clickClose, index]);
  return (0,emotion_react_browser_esm.jsx)(OptionControls/* OptionControlContainer */.EQ, { withCaret: withCaret },
  canDelete && (0,emotion_react_browser_esm.jsx)(OptionControls/* CloseContainer */.gu, { role: "button", onClick: onClickClose },
  (0,emotion_react_browser_esm.jsx)(Icons/* default.XSmall */.Z.XSmall, { iconColor: theme.colors.grayscale.light1 })),

  (0,emotion_react_browser_esm.jsx)(OptionControls/* Label */.__, null, children),
  isExtra && (0,emotion_react_browser_esm.jsx)(StyledInfoTooltipWithTrigger, { icon: "exclamation-triangle", placement: "top", bsStyle: "warning", tooltip: (0,TranslatorSingleton.t)(`
                This filter was inherited from the dashboard's context.
                It won't be saved when saving the chart.
              `) }),
  withCaret && (0,emotion_react_browser_esm.jsx)(OptionControls/* CaretContainer */.Ne, null,
  (0,emotion_react_browser_esm.jsx)(Icons/* default.CaretRight */.Z.CaretRight, { iconColor: theme.colors.grayscale.light1 })));


}
;// CONCATENATED MODULE: ./src/explore/components/controls/DndColumnSelectControl/OptionWrapper.tsx
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







const OptionLabel = style/* styled.div */.iK.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
function OptionWrapper(props) {
  const { index, label, tooltipTitle, column, type, onShiftOptions, clickClose, withCaret, isExtra, canDelete = true, ...rest } = props;
  const ref = (0,react.useRef)(null);
  const labelRef = (0,react.useRef)(null);
  const [{ isDragging }, drag] = (0,useDrag/* useDrag */.c)({
    item: {
      type,
      dragIndex: index },

    collect: (monitor) => ({
      isDragging: monitor.isDragging() }) });


  const [, drop] = (0,useDrop/* useDrop */.L)({
    accept: type,
    hover: (item, monitor) => {var _ref$current;
      if (!ref.current) {
        return;
      }
      const { dragIndex } = item;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = (_ref$current = ref.current) == null ? void 0 : _ref$current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset ?
      clientOffset.y - hoverBoundingRect.top :
      0;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      onShiftOptions(dragIndex, hoverIndex);
      // eslint-disable-next-line no-param-reassign
      item.dragIndex = hoverIndex;
    } });

  const shouldShowTooltip = !isDragging && tooltipTitle && label && tooltipTitle !== label ||
  !isDragging &&
  labelRef &&
  labelRef.current &&
  labelRef.current.scrollWidth > labelRef.current.clientWidth;
  const LabelContent = () => {
    if (!shouldShowTooltip) {
      return (0,emotion_react_browser_esm.jsx)("span", null, label);
    }
    return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: tooltipTitle || label },
    (0,emotion_react_browser_esm.jsx)("span", null, label));

  };
  const ColumnOption = () => (0,emotion_react_browser_esm.jsx)(optionRenderers/* StyledColumnOption */.l, { column: column, labelRef: labelRef, showTooltip: !!shouldShowTooltip, showType: true });
  const Label = () => {
    if (label) {
      return (0,emotion_react_browser_esm.jsx)(OptionLabel, { ref: labelRef },
      (0,emotion_react_browser_esm.jsx)(LabelContent, null));

    }
    if (column) {
      return (0,emotion_react_browser_esm.jsx)(OptionLabel, null,
      (0,emotion_react_browser_esm.jsx)(ColumnOption, null));

    }
    return null;
  };
  drag(drop(ref));
  return (0,emotion_react_browser_esm.jsx)(OptionControls/* DragContainer */.a7, extends_default()({ ref: ref }, rest),
  (0,emotion_react_browser_esm.jsx)(Option, { index: index, clickClose: clickClose, withCaret: withCaret, isExtra: isExtra, canDelete: canDelete },
  (0,emotion_react_browser_esm.jsx)(Label, null)));


}
;// CONCATENATED MODULE: ./src/explore/components/controls/DndColumnSelectControl/utils/optionSelector.ts

class OptionSelector {



  constructor(options, multi, initialValues) {this.values = void 0;this.options = void 0;this.multi = void 0;
    this.options = options;
    this.multi = multi;
    this.values = (0,ensureIsArray/* default */.Z)(initialValues).
    map((value) => {
      if (value && value in options) {
        return options[value];
      }
      return null;
    }).
    filter(Boolean);
  }
  add(value) {
    if (value in this.options) {
      this.values.push(this.options[value]);
    }
  }
  del(idx) {
    this.values.splice(idx, 1);
  }
  replace(idx, value) {
    if (this.values[idx]) {
      this.values[idx] = this.options[value];
    }
  }
  swap(a, b) {
    [this.values[a], this.values[b]] = [this.values[b], this.values[a]];
  }
  has(value) {
    return (0,ensureIsArray/* default */.Z)(this.getValues()).includes(value);
  }
  getValues() {
    if (!this.multi) {
      return this.values.length > 0 ? this.values[0].column_name : undefined;
    }
    return this.values.map((option) => option.column_name);
  }}
;// CONCATENATED MODULE: ./src/explore/components/controls/DndColumnSelectControl/ColumnSelectPopover.tsx
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
/* eslint-disable camelcase */







const ColumnSelectPopover_StyledSelect = (0,style/* styled */.iK)(src_components/* Select */.P)`
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
const ColumnSelectPopover = ({ columns, editedColumn, onChange, onClose }) => {
  const [initialCalculatedColumn, initialSimpleColumn] = editedColumn != null && editedColumn.expression ?
  [editedColumn, undefined] :
  [undefined, editedColumn];
  const [selectedCalculatedColumn, setSelectedCalculatedColumn] = (0,react.useState)(initialCalculatedColumn);
  const [selectedSimpleColumn, setSelectedSimpleColumn] = (0,react.useState)(initialSimpleColumn);
  const [calculatedColumns, simpleColumns] = (0,react.useMemo)(() => columns == null ? void 0 : columns.reduce((acc, column) => {
    if (column.expression) {
      acc[0].push(column);
    } else
    {
      acc[1].push(column);
    }
    return acc;
  }, [[], []]), [columns]);
  const onCalculatedColumnChange = (0,react.useCallback)((selectedColumnName) => {
    const selectedColumn = calculatedColumns.find((col) => col.column_name === selectedColumnName);
    setSelectedCalculatedColumn(selectedColumn);
    setSelectedSimpleColumn(undefined);
  }, [calculatedColumns]);
  const onSimpleColumnChange = (0,react.useCallback)((selectedColumnName) => {
    const selectedColumn = simpleColumns.find((col) => col.column_name === selectedColumnName);
    setSelectedCalculatedColumn(undefined);
    setSelectedSimpleColumn(selectedColumn);
  }, [simpleColumns]);
  const defaultActiveTabKey = initialSimpleColumn || calculatedColumns.length === 0 ? 'simple' : 'saved';
  const onSave = (0,react.useCallback)(() => {
    const selectedColumn = selectedCalculatedColumn || selectedSimpleColumn;
    if (!selectedColumn) {
      return;
    }
    onChange(selectedColumn);
    onClose();
  }, [onChange, onClose, selectedCalculatedColumn, selectedSimpleColumn]);
  const onResetStateAndClose = (0,react.useCallback)(() => {
    setSelectedCalculatedColumn(initialCalculatedColumn);
    setSelectedSimpleColumn(initialSimpleColumn);
    onClose();
  }, [initialCalculatedColumn, initialSimpleColumn, onClose]);
  const stateIsValid = selectedCalculatedColumn || selectedSimpleColumn;
  const hasUnsavedChanges = (selectedCalculatedColumn == null ? void 0 : selectedCalculatedColumn.column_name) !== (
  initialCalculatedColumn == null ? void 0 : initialCalculatedColumn.column_name) ||
  (selectedSimpleColumn == null ? void 0 : selectedSimpleColumn.column_name) !== (initialSimpleColumn == null ? void 0 : initialSimpleColumn.column_name);
  const savedExpressionsLabel = (0,TranslatorSingleton.t)('Saved expressions');
  const simpleColumnsLabel = (0,TranslatorSingleton.t)('Column');
  return (0,emotion_react_browser_esm.jsx)(Form/* Form */.l0, { layout: "vertical", id: "metrics-edit-popover" },
  (0,emotion_react_browser_esm.jsx)(Tabs/* default */.ZP, { id: "adhoc-metric-edit-tabs", defaultActiveKey: defaultActiveTabKey, className: "adhoc-metric-edit-tabs", allowOverflow: true },
  (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { key: "saved", tab: (0,TranslatorSingleton.t)('Saved') },
  (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { label: savedExpressionsLabel },
  (0,emotion_react_browser_esm.jsx)(ColumnSelectPopover_StyledSelect, { ariaLabel: savedExpressionsLabel, value: selectedCalculatedColumn == null ? void 0 : selectedCalculatedColumn.column_name, onChange: onCalculatedColumnChange, allowClear: true, autoFocus: !selectedCalculatedColumn, placeholder: (0,TranslatorSingleton.t)('%s column(s)', calculatedColumns.length), options: calculatedColumns.map((calculatedColumn) => ({
      value: calculatedColumn.column_name,
      label: calculatedColumn.verbose_name || calculatedColumn.column_name,
      customLabel: (0,emotion_react_browser_esm.jsx)(optionRenderers/* StyledColumnOption */.l, { column: calculatedColumn, showType: true }),
      key: calculatedColumn.column_name })) }))),



  (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { key: "simple", tab: (0,TranslatorSingleton.t)('Simple') },
  (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { label: simpleColumnsLabel },
  (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: simpleColumnsLabel, value: selectedSimpleColumn == null ? void 0 : selectedSimpleColumn.column_name, onChange: onSimpleColumnChange, allowClear: true, autoFocus: !selectedSimpleColumn, placeholder: (0,TranslatorSingleton.t)('%s column(s)', simpleColumns.length), options: simpleColumns.map((simpleColumn) => ({
      value: simpleColumn.column_name,
      label: simpleColumn.verbose_name || simpleColumn.column_name,
      customLabel: (0,emotion_react_browser_esm.jsx)(optionRenderers/* StyledColumnOption */.l, { column: simpleColumn, showType: true }),
      key: simpleColumn.column_name })) })))),




  (0,emotion_react_browser_esm.jsx)("div", null,
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonSize: "small", onClick: onResetStateAndClose, cta: true },
  (0,TranslatorSingleton.t)('Close')),

  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { disabled: !stateIsValid, buttonStyle: hasUnsavedChanges && stateIsValid ? 'primary' : 'default', buttonSize: "small", onClick: onSave, cta: true },
  (0,TranslatorSingleton.t)('Save'))));



};
/* harmony default export */ const DndColumnSelectControl_ColumnSelectPopover = (ColumnSelectPopover);
;// CONCATENATED MODULE: ./src/explore/components/controls/DndColumnSelectControl/ColumnSelectPopoverTrigger.tsx
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




const ColumnSelectPopoverTrigger = ({ columns, editedColumn, onColumnEdit, isControlledComponent, children, ...props }) => {
  const [popoverVisible, setPopoverVisible] = (0,react.useState)(false);
  const togglePopover = (0,react.useCallback)((visible) => {
    setPopoverVisible(visible);
  }, []);
  const closePopover = (0,react.useCallback)(() => {
    setPopoverVisible(false);
  }, []);
  const { visible, handleTogglePopover, handleClosePopover } = isControlledComponent ?
  {
    visible: props.visible,
    handleTogglePopover: props.togglePopover,
    handleClosePopover: props.closePopover } :

  {
    visible: popoverVisible,
    handleTogglePopover: togglePopover,
    handleClosePopover: closePopover };

  const overlayContent = (0,react.useMemo)(() => (0,emotion_react_browser_esm.jsx)(ExploreContentPopover/* ExplorePopoverContent */.b, null,
  (0,emotion_react_browser_esm.jsx)(DndColumnSelectControl_ColumnSelectPopover, { editedColumn: editedColumn, columns: columns, onClose: handleClosePopover, onChange: onColumnEdit })),
  [columns, editedColumn, handleClosePopover, onColumnEdit]);
  return (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, { placement: "right", trigger: "click", content: overlayContent, defaultVisible: visible, visible: visible, onVisibleChange: handleTogglePopover, destroyTooltipOnHide: true },
  children);

};
/* harmony default export */ const DndColumnSelectControl_ColumnSelectPopoverTrigger = (ColumnSelectPopoverTrigger);
;// CONCATENATED MODULE: ./src/explore/components/controls/DndColumnSelectControl/DndColumnSelect.tsx
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









function DndColumnSelect(props) {
  const { value, options, multi = true, onChange, canDelete = true, ghostButtonText, name, label } = props;
  const [newColumnPopoverVisible, setNewColumnPopoverVisible] = (0,react.useState)(false);
  const optionSelector = (0,react.useMemo)(() => new OptionSelector(options, multi, value), [multi, options, value]);
  // synchronize values in case of dataset changes
  const handleOptionsChange = (0,react.useCallback)(() => {
    const optionSelectorValues = optionSelector.getValues();
    if (typeof value !== typeof optionSelectorValues) {
      onChange(optionSelectorValues);
    }
    if (typeof value === 'string' &&
    typeof optionSelectorValues === 'string' &&
    value !== optionSelectorValues) {
      onChange(optionSelectorValues);
    }
    if (Array.isArray(optionSelectorValues) &&
    Array.isArray(value) && (
    optionSelectorValues.length !== value.length ||
    optionSelectorValues.every((val, index) => val === value[index]))) {
      onChange(optionSelectorValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(value), JSON.stringify(optionSelector.getValues())]);
  // useComponentDidUpdate to avoid running this for the first render, to avoid
  // calling onChange when the initial value is not valid for the dataset
  (0,useComponentDidUpdate/* useComponentDidUpdate */.d)(handleOptionsChange);
  const onDrop = (0,react.useCallback)((item) => {
    const column = item.value;
    if (!optionSelector.multi && !isEmpty_default()(optionSelector.values)) {
      optionSelector.replace(0, column.column_name);
    } else
    {
      optionSelector.add(column.column_name);
    }
    onChange(optionSelector.getValues());
  }, [onChange, optionSelector]);
  const canDrop = (0,react.useCallback)((item) => {
    const columnName = item.value.column_name;
    return columnName in optionSelector.options && !optionSelector.has(columnName);
  }, [optionSelector]);
  const onClickClose = (0,react.useCallback)((index) => {
    optionSelector.del(index);
    onChange(optionSelector.getValues());
  }, [onChange, optionSelector]);
  const onShiftOptions = (0,react.useCallback)((dragIndex, hoverIndex) => {
    optionSelector.swap(dragIndex, hoverIndex);
    onChange(optionSelector.getValues());
  }, [onChange, optionSelector]);
  const popoverOptions = (0,react.useMemo)(() => Object.values(options).filter((col) => !optionSelector.values.
  map((val) => val.column_name).
  includes(col.column_name)), [optionSelector.values, options]);
  const valuesRenderer = (0,react.useCallback)(() => optionSelector.values.map((column, idx) => (0,featureFlags/* isFeatureEnabled */.c)(featureFlags/* FeatureFlag.ENABLE_DND_WITH_CLICK_UX */.T.ENABLE_DND_WITH_CLICK_UX) ? (0,emotion_react_browser_esm.jsx)(DndColumnSelectControl_ColumnSelectPopoverTrigger, { columns: popoverOptions, onColumnEdit: (newColumn) => {
      optionSelector.replace(idx, newColumn.column_name);
      onChange(optionSelector.getValues());
    }, editedColumn: column },
  (0,emotion_react_browser_esm.jsx)(OptionWrapper, { key: idx, index: idx, clickClose: onClickClose, onShiftOptions: onShiftOptions, type: `${DndItemType/* DndItemType.ColumnOption */.g.ColumnOption}_${name}_${label}`, canDelete: canDelete, column: column, withCaret: true })) :
  (0,emotion_react_browser_esm.jsx)(OptionWrapper, { key: idx, index: idx, clickClose: onClickClose, onShiftOptions: onShiftOptions, type: `${DndItemType/* DndItemType.ColumnOption */.g.ColumnOption}_${name}_${label}`, canDelete: canDelete, column: column })), [
  canDelete,
  label,
  name,
  onChange,
  onClickClose,
  onShiftOptions,
  optionSelector,
  popoverOptions]);

  const addNewColumnWithPopover = (0,react.useCallback)((newColumn) => {
    optionSelector.add(newColumn.column_name);
    onChange(optionSelector.getValues());
  }, [onChange, optionSelector]);
  const togglePopover = (0,react.useCallback)((visible) => {
    setNewColumnPopoverVisible(visible);
  }, []);
  const closePopover = (0,react.useCallback)(() => {
    togglePopover(false);
  }, [togglePopover]);
  const openPopover = (0,react.useCallback)(() => {
    togglePopover(true);
  }, [togglePopover]);
  const defaultGhostButtonText = (0,featureFlags/* isFeatureEnabled */.c)(featureFlags/* FeatureFlag.ENABLE_DND_WITH_CLICK_UX */.T.ENABLE_DND_WITH_CLICK_UX) ?
  (0,TranslatorSingleton.tn)('Drop a column here or click', 'Drop columns here or click', multi ? 2 : 1) :
  (0,TranslatorSingleton.tn)('Drop column here', 'Drop columns here', multi ? 2 : 1);
  return (0,emotion_react_browser_esm.jsx)("div", null,
  (0,emotion_react_browser_esm.jsx)(DndSelectLabel, extends_default()({ onDrop: onDrop, canDrop: canDrop, valuesRenderer: valuesRenderer, accept: DndItemType/* DndItemType.Column */.g.Column, displayGhostButton: multi || optionSelector.values.length === 0, ghostButtonText: ghostButtonText || defaultGhostButtonText, onClickGhostButton: (0,featureFlags/* isFeatureEnabled */.c)(featureFlags/* FeatureFlag.ENABLE_DND_WITH_CLICK_UX */.T.ENABLE_DND_WITH_CLICK_UX) ?
    openPopover :
    undefined }, props)),
  (0,emotion_react_browser_esm.jsx)(DndColumnSelectControl_ColumnSelectPopoverTrigger, { columns: popoverOptions, onColumnEdit: addNewColumnWithPopover, isControlledComponent: true, togglePopover: togglePopover, closePopover: closePopover, visible: newColumnPopoverVisible },
  (0,emotion_react_browser_esm.jsx)("div", null)));


}
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/logging.js
var logging = __webpack_require__(23099);
// EXTERNAL MODULE: ./src/explore/components/controls/FilterControl/AdhocFilterPopoverTrigger/index.tsx + 3 modules
var AdhocFilterPopoverTrigger = __webpack_require__(94968);
// EXTERNAL MODULE: ./src/explore/components/controls/FilterControl/AdhocFilter/index.js
var AdhocFilter = __webpack_require__(28543);
;// CONCATENATED MODULE: ./src/explore/components/DatasourcePanel/types.ts
function isDatasourcePanelDndItem(item) {
  return (item == null ? void 0 : item.value) && (item == null ? void 0 : item.type);
}
function isSavedMetric(item) {
  return item == null ? void 0 : item.metric_name;
}
;// CONCATENATED MODULE: ./src/explore/components/controls/DndColumnSelectControl/DndFilterSelect.tsx
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with work for additional information
 * regarding copyright ownership.  The ASF licenses file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use file except in compliance
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










const EMPTY_OBJECT = {};
const DND_ACCEPTED_TYPES = [
DndItemType/* DndItemType.Column */.g.Column,
DndItemType/* DndItemType.Metric */.g.Metric,
DndItemType/* DndItemType.MetricOption */.g.MetricOption,
DndItemType/* DndItemType.AdhocMetricOption */.g.AdhocMetricOption];

const isDictionaryForAdhocFilter = (value) => !(value instanceof AdhocFilter/* default */.ZP) && (value == null ? void 0 : value.expressionType);
const DndFilterSelect = (props) => {var _props$value;
  const { datasource, onChange = () => {}, name: controlName } = props;
  const propsValues = Array.from((_props$value = props.value) != null ? _props$value : []);
  const [values, setValues] = (0,react.useState)(propsValues.map((filter) => isDictionaryForAdhocFilter(filter) ? new AdhocFilter/* default */.ZP(filter) : filter));
  const [partitionColumn, setPartitionColumn] = (0,react.useState)(undefined);
  const [newFilterPopoverVisible, setNewFilterPopoverVisible] = (0,react.useState)(false);
  const [droppedItem, setDroppedItem] = (0,react.useState)({});
  const optionsForSelect = (columns, formData) => {
    const options = [
    ...columns,
    ...[...((formData == null ? void 0 : formData.metrics) || []), formData == null ? void 0 : formData.metric].map((metric) => metric && (
    typeof metric === 'string' ?
    { saved_metric_name: metric } :
    new AdhocMetric/* default */.Z(metric)))].
    filter((option) => option);
    return options.
    reduce((results, option) => {
      if ('saved_metric_name' in option && option.saved_metric_name) {
        results.push({
          ...option,
          filterOptionName: option.saved_metric_name });

      } else
      if ('column_name' in option && option.column_name) {
        results.push({
          ...option,
          filterOptionName: `_col_${option.column_name}` });

      } else
      if (option instanceof AdhocMetric/* default */.Z) {
        results.push({
          ...option,
          filterOptionName: `_adhocmetric_${option.label}` });

      }
      return results;
    }, []).
    sort((a, b) => {var _localeCompare, _ref;return (_localeCompare = (_ref = a.saved_metric_name || a.column_name || a.label) == null ? void 0 : _ref.localeCompare(b.saved_metric_name || b.column_name || b.label || '')) != null ? _localeCompare : 0;});
  };
  const [options, setOptions] = (0,react.useState)(optionsForSelect(props.columns, props.formData));
  (0,react.useEffect)(() => {
    if (datasource && datasource.type === 'table') {var _datasource$database;
      const dbId = (_datasource$database = datasource.database) == null ? void 0 : _datasource$database.id;
      const { datasource_name: name, schema, is_sqllab_view: isSqllabView } = datasource;
      if (!isSqllabView && dbId && name && schema) {
        SupersetClient/* default.get */.Z.get({
          endpoint: `/superset/extra_table_metadata/${dbId}/${name}/${schema}/` }).

        then(({ json }) => {
          if (json && json.partitions) {
            const { partitions } = json;
            // for now only show latest_partition option
            // when table datasource has only 1 partition key.
            if (partitions &&
            partitions.cols &&
            Object.keys(partitions.cols).length === 1) {
              setPartitionColumn(partitions.cols[0]);
            }
          }
        }).
        catch((error) => {
          logging/* default.error */.Z.error('fetch extra_table_metadata:', error.statusText);
        });
      }
    }
  }, [datasource]);
  (0,react.useEffect)(() => {
    setOptions(optionsForSelect(props.columns, props.formData));
  }, [props.columns, props.formData]);
  (0,react.useEffect)(() => {
    setValues((props.value || []).map((filter) => isDictionaryForAdhocFilter(filter) ? new AdhocFilter/* default */.ZP(filter) : filter));
  }, [props.value]);
  const onClickClose = (0,react.useCallback)((index) => {
    const valuesCopy = [...values];
    valuesCopy.splice(index, 1);
    setValues(valuesCopy);
    onChange(valuesCopy);
  }, [onChange, values]);
  const onShiftOptions = (0,react.useCallback)((dragIndex, hoverIndex) => {
    const newValues = [...values];
    [newValues[hoverIndex], newValues[dragIndex]] = [
    newValues[dragIndex],
    newValues[hoverIndex]];

    setValues(newValues);
  }, [values]);
  const getMetricExpression = (0,react.useCallback)((savedMetricName) => {var _props$savedMetrics$f;return (_props$savedMetrics$f = props.savedMetrics.find((savedMetric) => savedMetric.metric_name === savedMetricName)) == null ? void 0 : _props$savedMetrics$f.expression;}, [props.savedMetrics]);
  const mapOption = (0,react.useCallback)((option) => {
    // already a AdhocFilter, skip
    if (option instanceof AdhocFilter/* default */.ZP) {
      return option;
    }
    const filterOptions = option;
    // via datasource saved metric
    if (filterOptions.saved_metric_name) {
      return new AdhocFilter/* default */.ZP({
        expressionType: datasource.type === 'druid' ?
        AdhocFilter/* EXPRESSION_TYPES.SIMPLE */.vq.SIMPLE :
        AdhocFilter/* EXPRESSION_TYPES.SQL */.vq.SQL,
        subject: datasource.type === 'druid' ?
        filterOptions.saved_metric_name :
        getMetricExpression(filterOptions.saved_metric_name),
        operator: explore_constants/* OPERATOR_ENUM_TO_OPERATOR_TYPE */.LT[explore_constants/* Operators.GREATER_THAN */.d.GREATER_THAN].operation,
        operatorId: explore_constants/* Operators.GREATER_THAN */.d.GREATER_THAN,
        comparator: 0,
        clause: AdhocFilter/* CLAUSES.HAVING */.Pr.HAVING });

    }
    // has a custom label, meaning it's custom column
    if (filterOptions.label) {
      return new AdhocFilter/* default */.ZP({
        expressionType: datasource.type === 'druid' ?
        AdhocFilter/* EXPRESSION_TYPES.SIMPLE */.vq.SIMPLE :
        AdhocFilter/* EXPRESSION_TYPES.SQL */.vq.SQL,
        subject: datasource.type === 'druid' ?
        filterOptions.label :
        new AdhocMetric/* default */.Z(option).translateToSql(),
        operator: explore_constants/* OPERATOR_ENUM_TO_OPERATOR_TYPE */.LT[explore_constants/* Operators.GREATER_THAN */.d.GREATER_THAN].operation,
        operatorId: explore_constants/* Operators.GREATER_THAN */.d.GREATER_THAN,
        comparator: 0,
        clause: AdhocFilter/* CLAUSES.HAVING */.Pr.HAVING });

    }
    // add a new filter item
    if (filterOptions.column_name) {
      return new AdhocFilter/* default */.ZP({
        expressionType: AdhocFilter/* EXPRESSION_TYPES.SIMPLE */.vq.SIMPLE,
        subject: filterOptions.column_name,
        operator: explore_constants/* OPERATOR_ENUM_TO_OPERATOR_TYPE */.LT[explore_constants/* Operators.EQUALS */.d.EQUALS].operation,
        operatorId: explore_constants/* Operators.EQUALS */.d.EQUALS,
        comparator: '',
        clause: AdhocFilter/* CLAUSES.WHERE */.Pr.WHERE,
        isNew: true });

    }
    return null;
  }, [datasource.type, getMetricExpression]);
  const onFilterEdit = (0,react.useCallback)((changedFilter) => {
    onChange(values.map((value) => {
      if (value.filterOptionName === changedFilter.filterOptionName) {
        return changedFilter;
      }
      return value;
    }));
  }, [onChange, values]);
  const onNewFilter = (0,react.useCallback)((newFilter) => {
    const mappedOption = mapOption(newFilter);
    if (mappedOption) {
      const newValues = [...values, mappedOption];
      setValues(newValues);
      onChange(newValues);
    }
  }, [mapOption, onChange, values]);
  const togglePopover = (0,react.useCallback)((visible) => {
    setNewFilterPopoverVisible(visible);
  }, []);
  const closePopover = (0,react.useCallback)(() => {
    togglePopover(false);
  }, [togglePopover]);
  const valuesRenderer = (0,react.useCallback)(() => values.map((adhocFilter, index) => {
    const label = adhocFilter.getDefaultLabel();
    const tooltipTitle = adhocFilter.getTooltipTitle();
    return (0,emotion_react_browser_esm.jsx)(AdhocFilterPopoverTrigger/* default */.Z, { key: index, adhocFilter: adhocFilter, options: options, datasource: datasource, onFilterEdit: onFilterEdit, partitionColumn: partitionColumn },
    (0,emotion_react_browser_esm.jsx)(OptionWrapper, { key: index, index: index, label: label, tooltipTitle: tooltipTitle, clickClose: onClickClose, onShiftOptions: onShiftOptions, type: DndItemType/* DndItemType.FilterOption */.g.FilterOption, withCaret: true, isExtra: adhocFilter.isExtra }));

  }), [
  onClickClose,
  onFilterEdit,
  onShiftOptions,
  options,
  partitionColumn,
  datasource,
  values]);

  const handleClickGhostButton = (0,react.useCallback)(() => {
    setDroppedItem({});
    togglePopover(true);
  }, [togglePopover]);
  const adhocFilter = (0,react.useMemo)(() => {
    if (isSavedMetric(droppedItem)) {
      return new AdhocFilter/* default */.ZP({
        expressionType: AdhocFilter/* EXPRESSION_TYPES.SQL */.vq.SQL,
        clause: AdhocFilter/* CLAUSES.HAVING */.Pr.HAVING,
        sqlExpression: droppedItem == null ? void 0 : droppedItem.expression });

    }
    if (droppedItem instanceof AdhocMetric/* default */.Z) {
      return new AdhocFilter/* default */.ZP({
        expressionType: AdhocFilter/* EXPRESSION_TYPES.SQL */.vq.SQL,
        clause: AdhocFilter/* CLAUSES.HAVING */.Pr.HAVING,
        sqlExpression: droppedItem == null ? void 0 : droppedItem.translateToSql() });

    }
    const config = {
      subject: droppedItem == null ? void 0 : droppedItem.column_name };

    if (config.subject && (0,featureFlags/* isFeatureEnabled */.c)(featureFlags/* FeatureFlag.UX_BETA */.T.UX_BETA)) {
      config.operator = explore_constants/* OPERATOR_ENUM_TO_OPERATOR_TYPE */.LT[explore_constants/* Operators.IN */.d.IN].operation;
      config.operatorId = explore_constants/* Operators.IN */.d.IN;
    }
    return new AdhocFilter/* default */.ZP(config);
  }, [droppedItem]);
  const canDrop = (0,react.useCallback)(() => true, []);
  const handleDrop = (0,react.useCallback)((item) => {
    setDroppedItem(item.value);
    togglePopover(true);
  }, [controlName, togglePopover]);
  const ghostButtonText = (0,featureFlags/* isFeatureEnabled */.c)(featureFlags/* FeatureFlag.ENABLE_DND_WITH_CLICK_UX */.T.ENABLE_DND_WITH_CLICK_UX) ?
  (0,TranslatorSingleton.t)('Drop columns/metrics here or click') :
  (0,TranslatorSingleton.t)('Drop columns or metrics here');
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(DndSelectLabel, extends_default()({ onDrop: handleDrop, canDrop: canDrop, valuesRenderer: valuesRenderer, accept: DND_ACCEPTED_TYPES, ghostButtonText: ghostButtonText, onClickGhostButton: (0,featureFlags/* isFeatureEnabled */.c)(featureFlags/* FeatureFlag.ENABLE_DND_WITH_CLICK_UX */.T.ENABLE_DND_WITH_CLICK_UX) ?
    handleClickGhostButton :
    undefined }, props)),
  (0,emotion_react_browser_esm.jsx)(AdhocFilterPopoverTrigger/* default */.Z, { adhocFilter: adhocFilter, options: options, datasource: datasource, onFilterEdit: onNewFilter, partitionColumn: partitionColumn, isControlledComponent: true, visible: newFilterPopoverVisible, togglePopover: togglePopover, closePopover: closePopover },
  (0,emotion_react_browser_esm.jsx)("div", null)));


};
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/types/QueryResponse.js
var QueryResponse = __webpack_require__(23274);
;// CONCATENATED MODULE: ./src/explore/components/controls/DndColumnSelectControl/DndMetricSelect.tsx
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with work for additional information
 * regarding copyright ownership.  The ASF licenses file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use file except in compliance
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











const DndMetricSelect_EMPTY_OBJECT = {};
const DndMetricSelect_DND_ACCEPTED_TYPES = [DndItemType/* DndItemType.Column */.g.Column, DndItemType/* DndItemType.Metric */.g.Metric];
const DndMetricSelect_isDictionaryForAdhocMetric = (value) => value && !(value instanceof AdhocMetric/* default */.Z) && value.expressionType;
const DndMetricSelect_coerceAdhocMetrics = (value) => {
  if (!value) {
    return [];
  }
  if (!Array.isArray(value)) {
    if (DndMetricSelect_isDictionaryForAdhocMetric(value)) {
      return [new AdhocMetric/* default */.Z(value)];
    }
    return [value];
  }
  return value.map((val) => {
    if (DndMetricSelect_isDictionaryForAdhocMetric(val)) {
      return new AdhocMetric/* default */.Z(val);
    }
    return val;
  });
};
const DndMetricSelect_getOptionsForSavedMetrics = (savedMetrics, currentMetricValues, currentMetric) => {var _savedMetrics$filter;return (_savedMetrics$filter = savedMetrics == null ? void 0 : savedMetrics.filter((savedMetric) => {var _savedMetric$metric_n;return Array.isArray(currentMetricValues) ?
    !currentMetricValues.includes((_savedMetric$metric_n = savedMetric.metric_name) != null ? _savedMetric$metric_n : '') ||
    savedMetric.metric_name === currentMetric :
    savedMetric;})) != null ? _savedMetrics$filter : [];};
// TODO: use typeguards to distinguish saved metrics from adhoc metrics
const DndMetricSelect_getMetricsMatchingCurrentDataset = (values, columns, savedMetrics, prevColumns, prevSavedMetrics) => {
  const areSavedMetricsEqual = !prevSavedMetrics || isEqual_default()(prevSavedMetrics, savedMetrics);
  const areColsEqual = !prevColumns || isEqual_default()(prevColumns, columns);
  if (areColsEqual && areSavedMetricsEqual) {
    return values;
  }
  return values.reduce((acc, metric) => {
    if ((typeof metric === 'string' || metric.metric_name) && (
    areSavedMetricsEqual ||
    savedMetrics != null && savedMetrics.some((savedMetric) => savedMetric.metric_name === metric ||
    savedMetric.metric_name === metric.metric_name))) {
      acc.push(metric);
      return acc;
    }
    if (!areColsEqual) {
      const newCol = columns == null ? void 0 : columns.find((column) => {var _metric$column;return ((_metric$column = metric.column) == null ? void 0 : _metric$column.column_name) === column.column_name;});
      if (newCol) {
        acc.push({ ...metric, column: newCol });
      }
    } else
    {
      acc.push(metric);
    }
    return acc;
  }, []);
};
const DndMetricSelect = (props) => {
  const { onChange, multi, columns, savedMetrics } = props;
  const handleChange = (0,react.useCallback)((opts) => {
    // if clear out options
    if (opts === null) {
      onChange(null);
      return;
    }
    const transformedOpts = (0,ensureIsArray/* default */.Z)(opts);
    const optionValues = transformedOpts.
    map((option) => {
      // pre-defined metric
      if (option.metric_name) {
        return option.metric_name;
      }
      return option;
    }).
    filter((option) => option);
    onChange(multi ? optionValues : optionValues[0]);
  }, [multi, onChange]);
  const [value, setValue] = (0,react.useState)(DndMetricSelect_coerceAdhocMetrics(props.value));
  const [droppedItem, setDroppedItem] = (0,react.useState)({});
  const [newMetricPopoverVisible, setNewMetricPopoverVisible] = (0,react.useState)(false);
  const prevColumns = (0,usePrevious/* usePrevious */.D)(columns);
  const prevSavedMetrics = (0,usePrevious/* usePrevious */.D)(savedMetrics);
  (0,react.useEffect)(() => {
    setValue(DndMetricSelect_coerceAdhocMetrics(props.value));
  }, [JSON.stringify(props.value)]);
  (0,react.useEffect)(() => {
    // Remove selected custom metrics that do not exist in the dataset anymore
    // Remove selected adhoc metrics that use columns which do not exist in the dataset anymore
    // Sync adhoc metrics with dataset columns when they are modified by the user
    if (!props.value) {
      return;
    }
    const propsValues = (0,ensureIsArray/* default */.Z)(props.value);
    const matchingMetrics = DndMetricSelect_getMetricsMatchingCurrentDataset(propsValues, columns, savedMetrics, prevColumns, prevSavedMetrics);
    if (!isEqual_default()(propsValues, matchingMetrics)) {
      handleChange(matchingMetrics);
    }
  }, [columns, savedMetrics, handleChange]);
  const canDrop = (0,react.useCallback)((item) => {
    const isMetricAlreadyInValues = item.type === 'metric' ? value.includes(item.value.metric_name) : false;
    return !isMetricAlreadyInValues;
  }, [value]);
  const onNewMetric = (0,react.useCallback)((newMetric) => {
    const newValue = props.multi ? [...value, newMetric] : [newMetric];
    setValue(newValue);
    handleChange(newValue);
  }, [handleChange, props.multi, value]);
  const onMetricEdit = (0,react.useCallback)((changedMetric, oldMetric) => {
    if (oldMetric instanceof AdhocMetric/* default */.Z && oldMetric.equals(changedMetric)) {
      return;
    }
    const newValue = value.map((value) => {
      if (
      // compare saved metrics
      'metric_name' in oldMetric && value === oldMetric.metric_name ||
      // compare adhoc metrics
      typeof value.optionName !== 'undefined' ?
      value.optionName ===
      oldMetric.optionName :
      false) {
        return changedMetric;
      }
      return value;
    });
    setValue(newValue);
    handleChange(newValue);
  }, [handleChange, value]);
  const onRemoveMetric = (0,react.useCallback)((index) => {
    if (!Array.isArray(value)) {
      return;
    }
    const valuesCopy = [...value];
    valuesCopy.splice(index, 1);
    setValue(valuesCopy);
    onChange(valuesCopy);
  }, [onChange, value]);
  const moveLabel = (0,react.useCallback)((dragIndex, hoverIndex) => {
    const newValues = [...value];
    [newValues[hoverIndex], newValues[dragIndex]] = [
    newValues[dragIndex],
    newValues[hoverIndex]];

    setValue(newValues);
  }, [value]);
  const newSavedMetricOptions = (0,react.useMemo)(() => DndMetricSelect_getOptionsForSavedMetrics(props.savedMetrics, props.value), [props.savedMetrics, props.value]);
  const getSavedMetricOptionsForMetric = (0,react.useCallback)((index) => {var _props$value;return DndMetricSelect_getOptionsForSavedMetrics(props.savedMetrics, props.value, (_props$value = props.value) == null ? void 0 : _props$value[index]);}, [props.savedMetrics, props.value]);
  const handleDropLabel = (0,react.useCallback)(() => onChange(multi ? value : value[0]), [multi, onChange, value]);
  const valueRenderer = (0,react.useCallback)((option, index) => (0,emotion_react_browser_esm.jsx)(MetricDefinitionValue, { key: index, index: index, option: option, onMetricEdit: onMetricEdit, onRemoveMetric: onRemoveMetric, columns: props.columns, savedMetrics: props.savedMetrics, savedMetricsOptions: getSavedMetricOptionsForMetric(index), datasourceType: props.datasourceType, onMoveLabel: moveLabel, onDropLabel: handleDropLabel, type: `${DndItemType/* DndItemType.AdhocMetricOption */.g.AdhocMetricOption}_${props.name}_${props.label}`, multi: multi }), [
  getSavedMetricOptionsForMetric,
  handleDropLabel,
  moveLabel,
  multi,
  onMetricEdit,
  onRemoveMetric,
  props.columns,
  props.datasourceType,
  props.label,
  props.name,
  props.savedMetrics]);

  const valuesRenderer = (0,react.useCallback)(() => value.map((value, index) => valueRenderer(value, index)), [value, valueRenderer]);
  const togglePopover = (0,react.useCallback)((visible) => {
    setNewMetricPopoverVisible(visible);
  }, []);
  const closePopover = (0,react.useCallback)(() => {
    togglePopover(false);
  }, [togglePopover]);
  const handleDrop = (0,react.useCallback)((item) => {
    if (item.type === DndItemType/* DndItemType.Metric */.g.Metric) {
      onNewMetric(item.value);
    }
    if (item.type === DndItemType/* DndItemType.Column */.g.Column) {
      setDroppedItem(item);
      togglePopover(true);
    }
  }, [onNewMetric, togglePopover]);
  const handleClickGhostButton = (0,react.useCallback)(() => {
    setDroppedItem({});
    togglePopover(true);
  }, [togglePopover]);
  const adhocMetric = (0,react.useMemo)(() => {
    if (isDatasourcePanelDndItem(droppedItem) &&
    droppedItem.type === DndItemType/* DndItemType.Column */.g.Column) {
      const itemValue = droppedItem.value;
      const config = {
        column: itemValue };

      if ((0,featureFlags/* isFeatureEnabled */.c)(featureFlags/* FeatureFlag.UX_BETA */.T.UX_BETA)) {
        if (itemValue.type_generic === QueryResponse/* GenericDataType.NUMERIC */.Z.NUMERIC) {
          config.aggregate = explore_constants/* AGGREGATES.SUM */.YY.SUM;
        } else
        if (itemValue.type_generic === QueryResponse/* GenericDataType.STRING */.Z.STRING ||
        itemValue.type_generic === QueryResponse/* GenericDataType.BOOLEAN */.Z.BOOLEAN ||
        itemValue.type_generic === QueryResponse/* GenericDataType.TEMPORAL */.Z.TEMPORAL) {
          config.aggregate = explore_constants/* AGGREGATES.COUNT_DISTINCT */.YY.COUNT_DISTINCT;
        }
      }
      return new AdhocMetric/* default */.Z(config);
    }
    return new AdhocMetric/* default */.Z({ isNew: true });
  }, [droppedItem]);
  const ghostButtonText = (0,featureFlags/* isFeatureEnabled */.c)(featureFlags/* FeatureFlag.ENABLE_DND_WITH_CLICK_UX */.T.ENABLE_DND_WITH_CLICK_UX) ?
  (0,TranslatorSingleton.tn)('Drop a column/metric here or click', 'Drop columns/metrics here or click', multi ? 2 : 1) :
  (0,TranslatorSingleton.tn)('Drop column or metric here', 'Drop columns or metrics here', multi ? 2 : 1);
  return (0,emotion_react_browser_esm.jsx)("div", { className: "metrics-select" },
  (0,emotion_react_browser_esm.jsx)(DndSelectLabel, extends_default()({ onDrop: handleDrop, canDrop: canDrop, valuesRenderer: valuesRenderer, accept: DndMetricSelect_DND_ACCEPTED_TYPES, ghostButtonText: ghostButtonText, displayGhostButton: multi || value.length === 0, onClickGhostButton: (0,featureFlags/* isFeatureEnabled */.c)(featureFlags/* FeatureFlag.ENABLE_DND_WITH_CLICK_UX */.T.ENABLE_DND_WITH_CLICK_UX) ?
    handleClickGhostButton :
    undefined }, props)),
  (0,emotion_react_browser_esm.jsx)(MetricControl_AdhocMetricPopoverTrigger, { adhocMetric: adhocMetric, onMetricEdit: onNewMetric, columns: props.columns, savedMetricsOptions: newSavedMetricOptions, savedMetric: DndMetricSelect_EMPTY_OBJECT, datasourceType: props.datasourceType, isControlledComponent: true, visible: newMetricPopoverVisible, togglePopover: togglePopover, closePopover: closePopover },
  (0,emotion_react_browser_esm.jsx)("div", null)));


};
;// CONCATENATED MODULE: ./src/explore/components/controls/DndColumnSelectControl/index.ts
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




;// CONCATENATED MODULE: ./src/explore/components/controls/index.js
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


























const controlMap = {
  AnnotationLayerControl: controls_AnnotationLayerControl,
  BoundsControl: BoundsControl,
  CheckboxControl: CheckboxControl/* default */.Z,
  CollectionControl: controls_CollectionControl,
  ColorPickerControl: ColorPickerControl,
  ColorSchemeControl: ColorSchemeControl/* default */.Z,
  DatasourceControl: controls_DatasourceControl,
  DateFilterControl: DateFilterControl/* default */.Z,
  DndColumnSelectControl: DndSelectLabel,
  DndColumnSelect: DndColumnSelect,
  DndFilterSelect: DndFilterSelect,
  DndMetricSelect: DndMetricSelect,
  FixedOrMetricControl: FixedOrMetricControl,
  HiddenControl: HiddenControl,
  SelectAsyncControl: controls_SelectAsyncControl,
  SelectControl: SelectControl/* default */.Z,
  SliderControl: SliderControl,
  SpatialControl: SpatialControl/* default */.Z,
  TextAreaControl: TextAreaControl/* default */.Z,
  TextControl: TextControl/* default */.Z,
  TimeSeriesColumnControl: TimeSeriesColumnControl,
  ViewportControl: ViewportControl,
  VizTypeControl: controls_VizTypeControl,
  MetricsControl: MetricControl_MetricsControl,
  AdhocFilterControl: AdhocFilterControl/* default */.Z,
  FilterBoxItemControl: FilterBoxItemControl,
  ConditionalFormattingControl: controls_ConditionalFormattingControl,
  ...components/* default */.Z };

/* harmony default export */ const controls = (controlMap);
;// CONCATENATED MODULE: ./src/explore/components/Control.tsx
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




function Control(props) {
  const { actions: { setControlValue }, name, type, hidden } = props;
  const [hovered, setHovered] = (0,react.useState)(false);
  const onChange = (0,react.useCallback)((value, errors) => setControlValue(name, value, errors), [name, setControlValue]);
  if (!type)
  return null;
  const ControlComponent = typeof type === 'string' ? controls[type] : type;
  if (!ControlComponent) {
    // eslint-disable-next-line no-console
    console.warn(`Unknown controlType: ${type}`);
    return null;
  }
  return (0,emotion_react_browser_esm.jsx)("div", { className: "Control", style: hidden ? { display: 'none' } : undefined, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) },
  (0,emotion_react_browser_esm.jsx)(ErrorBoundary/* default */.Z, null,
  (0,emotion_react_browser_esm.jsx)(ControlComponent, extends_default()({ onChange: onChange, hovered: hovered }, props))));


}

/***/ }),

/***/ 61357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ControlRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11965);
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

const NUM_COLUMNS = 12;
function ControlRow({ controls }) {
  // ColorMapControl renders null and should not be counted
  // in the columns number
  const countableControls = controls.filter((control) => !['ColorMapControl'].includes(control == null ? void 0 : control.props.type));
  const colSize = NUM_COLUMNS / countableControls.length;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { className: "row space-1" },
  controls.map((control, i) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { className: `col-lg-${colSize} col-xs-12`, key: i },
  control)));


}

/***/ }),

/***/ 42753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ DndItemType)
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
/**
 * All possible draggable items for the chart controls.
 */
var DndItemType;
(function (DndItemType) {
  // an existing column in table
  DndItemType["Column"] = "column";
  // a selected column option in ColumnSelectControl
  DndItemType["ColumnOption"] = "columnOption";
  // an adhoc column option in ColumnSelectControl
  DndItemType["AdhocColumnOption"] = "adhocColumn";
  // a saved metric
  DndItemType["Metric"] = "metric";
  // a selected saved metric in MetricsControl
  DndItemType["MetricOption"] = "metricOption";
  // an adhoc metric option in MetricsControl
  DndItemType["AdhocMetricOption"] = "adhocMetric";
  // an adhoc filter option
  DndItemType["FilterOption"] = "filterOption";
})(DndItemType || (DndItemType = {}));

/***/ }),

/***/ 63325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ ExplorePopoverContent)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37840);
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

const ExplorePopoverContent = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* .styled.div */ .iK.div`
  .edit-popover-resize {
    transform: scaleX(-1);
    float: right;
    margin-top: ${({ theme }) => theme.gridUnit * 4}px;
    margin-right: ${({ theme }) => theme.gridUnit * -2}px;
    cursor: nwse-resize;
  }
  .filter-sql-editor {
    border: ${({ theme }) => theme.colors.grayscale.light2} solid thin;
  }
  .custom-sql-disabled-message {
    color: ${({ theme }) => theme.colors.grayscale.light1};
    font-size: ${({ theme }) => theme.typography.sizes.xs}px;
    text-align: center;
    margin-top: ${({ theme }) => theme.gridUnit * 15}px;
  }
`;

/***/ }),

/***/ 94968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FilterControl_AdhocFilterPopoverTrigger)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/Popover/index.tsx
var Popover = __webpack_require__(76697);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./src/components/ErrorBoundary/index.jsx
var ErrorBoundary = __webpack_require__(57902);
// EXTERNAL MODULE: ./src/components/Tabs/index.ts
var Tabs = __webpack_require__(40637);
// EXTERNAL MODULE: ./src/explore/components/controls/MetricControl/adhocMetricType.js
var adhocMetricType = __webpack_require__(17536);
// EXTERNAL MODULE: ./src/explore/components/controls/FilterControl/AdhocFilter/index.js
var AdhocFilter = __webpack_require__(28543);
// EXTERNAL MODULE: ./src/components/index.ts + 1 modules
var components = __webpack_require__(33346);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./src/explore/constants.ts
var constants = __webpack_require__(69856);
// EXTERNAL MODULE: ./src/explore/components/controls/MetricControl/FilterDefinitionOption.jsx
var FilterDefinitionOption = __webpack_require__(40266);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var common_components = __webpack_require__(82191);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/explore/components/controls/FilterControl/AdhocFilterEditPopoverSimpleTabContent/index.tsx
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







const StyledInput = (0,style/* styled */.iK)(common_components/* Input */.II)`
  margin-bottom: ${({ theme }) => theme.gridUnit * 4}px;
`;
const SelectWithLabel = (0,style/* styled */.iK)(components/* Select */.P)`
  .ant-select-selector::after {
    content: ${({ labelText }) => labelText || '\\A0'};
    display: inline-block;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.grayscale.light1};
    width: max-content;
  }
`;
const useSimpleTabFilterProps = (props) => {
  const isOperatorRelevant = (operator, subject) => {var _props$datasource$col;
    const column = (_props$datasource$col = props.datasource.columns) == null ? void 0 : _props$datasource$col.find((col) => col.column_name === subject);
    const isColumnBoolean = !!column && (column.type === 'BOOL' || column.type === 'BOOLEAN');
    const isColumnNumber = !!column && (column.type === 'INT' || column.type === 'INTEGER');
    const isColumnFunction = !!column && !!column.expression;
    if (operator && constants/* CUSTOM_OPERATORS.has */.qB.has(operator)) {
      const { partitionColumn } = props;
      return partitionColumn && subject && subject === partitionColumn;
    }
    if (operator === constants/* Operators.IS_TRUE */.d.IS_TRUE || operator === constants/* Operators.IS_FALSE */.d.IS_FALSE) {
      return isColumnBoolean || isColumnNumber || isColumnFunction;
    }
    if (isColumnBoolean) {
      return operator === constants/* Operators.IS_NULL */.d.IS_NULL || operator === constants/* Operators.IS_NOT_NULL */.d.IS_NOT_NULL;
    }
    return !(props.datasource.type === 'druid' &&
    constants/* TABLE_ONLY_OPERATORS.indexOf */.QB.indexOf(operator) >= 0 ||
    props.datasource.type === 'table' &&
    constants/* DRUID_ONLY_OPERATORS.indexOf */.fV.indexOf(operator) >= 0 ||
    props.adhocFilter.clause === AdhocFilter/* CLAUSES.HAVING */.Pr.HAVING &&
    constants/* HAVING_OPERATORS.indexOf */.Ak.indexOf(operator) === -1);
  };
  const onSubjectChange = (id) => {
    const option = props.options.find((option) => 'column_name' in option && option.column_name === id ||
    'optionName' in option && option.optionName === id);
    let subject = '';
    let clause;
    // infer the new clause based on what subject was selected.
    if (option && 'column_name' in option) {
      subject = option.column_name;
      clause = AdhocFilter/* CLAUSES.WHERE */.Pr.WHERE;
    } else
    if (option && 'saved_metric_name' in option) {
      subject = option.saved_metric_name;
      clause = AdhocFilter/* CLAUSES.HAVING */.Pr.HAVING;
    } else
    if (option && option.label) {
      subject = option.label;
      clause = AdhocFilter/* CLAUSES.HAVING */.Pr.HAVING;
    }
    const { operator, operatorId } = props.adhocFilter;
    props.onChange(props.adhocFilter.duplicateWith({
      subject,
      clause,
      operator: operator && operatorId && isOperatorRelevant(operatorId, subject) ?
      constants/* OPERATOR_ENUM_TO_OPERATOR_TYPE */.LT[operatorId].operation :
      null,
      expressionType: AdhocFilter/* EXPRESSION_TYPES.SIMPLE */.vq.SIMPLE,
      operatorId }));

  };
  const onOperatorChange = (operatorId) => {
    const currentComparator = props.adhocFilter.comparator;
    let newComparator;
    // convert between list of comparators and individual comparators
    // (e.g. `in ('North America', 'Africa')` to `== 'North America'`)
    if (constants/* MULTI_OPERATORS.has */.qK.has(operatorId)) {
      newComparator = Array.isArray(currentComparator) ?
      currentComparator :
      [currentComparator].filter((element) => element);
    } else
    {
      newComparator = Array.isArray(currentComparator) ?
      currentComparator[0] :
      currentComparator;
    }
    if (operatorId === constants/* Operators.IS_TRUE */.d.IS_TRUE || operatorId === constants/* Operators.IS_FALSE */.d.IS_FALSE) {
      newComparator = constants/* Operators.IS_TRUE */.d.IS_TRUE === operatorId;
    }
    if (operatorId && constants/* CUSTOM_OPERATORS.has */.qB.has(operatorId)) {
      props.onChange(props.adhocFilter.duplicateWith({
        subject: props.adhocFilter.subject,
        clause: AdhocFilter/* CLAUSES.WHERE */.Pr.WHERE,
        operatorId,
        operator: constants/* OPERATOR_ENUM_TO_OPERATOR_TYPE */.LT[operatorId].operation,
        expressionType: AdhocFilter/* EXPRESSION_TYPES.SQL */.vq.SQL,
        datasource: props.datasource }));

    } else
    {
      props.onChange(props.adhocFilter.duplicateWith({
        operatorId,
        operator: constants/* OPERATOR_ENUM_TO_OPERATOR_TYPE */.LT[operatorId].operation,
        comparator: newComparator,
        expressionType: AdhocFilter/* EXPRESSION_TYPES.SIMPLE */.vq.SIMPLE }));

    }
  };
  const onComparatorChange = (comparator) => {
    props.onChange(props.adhocFilter.duplicateWith({
      comparator,
      expressionType: AdhocFilter/* EXPRESSION_TYPES.SIMPLE */.vq.SIMPLE }));

  };
  return {
    onSubjectChange,
    onOperatorChange,
    onComparatorChange,
    isOperatorRelevant };

};
const AdhocFilterEditPopoverSimpleTabContent = (props) => {var _props$operators, _props$operators2;
  const { onSubjectChange, onOperatorChange, isOperatorRelevant, onComparatorChange } = useSimpleTabFilterProps(props);
  const [suggestions, setSuggestions] = (0,react.useState)([]);
  const [comparator, setComparator] = (0,react.useState)(props.adhocFilter.comparator);
  const [loadingComparatorSuggestions, setLoadingComparatorSuggestions] = (0,react.useState)(false);
  const onInputComparatorChange = (event) => {
    onComparatorChange(event.target.value);
  };
  const renderSubjectOptionLabel = (option) => (0,emotion_react_browser_esm.jsx)(FilterDefinitionOption/* default */.Z, { option: option });
  const getOptionsRemaining = () => {var _ref;
    // if select is multi/value is array, we show the options not selected
    const valuesFromSuggestionsLength = Array.isArray(comparator) ?
    comparator.filter((v) => suggestions.includes(v)).length :
    0;
    return (_ref = (suggestions == null ? void 0 : suggestions.length) - valuesFromSuggestionsLength) != null ? _ref : 0;
  };
  const createSuggestionsPlaceholder = () => {
    const optionsRemaining = getOptionsRemaining();
    const placeholder = (0,TranslatorSingleton.t)('%s option(s)', optionsRemaining);
    return optionsRemaining ? placeholder : '';
  };
  const handleSubjectChange = (subject) => {
    setComparator(undefined);
    onSubjectChange(subject);
  };
  let columns = props.options;
  const { subject, operator, operatorId } = props.adhocFilter;
  const subjectSelectProps = {
    ariaLabel: (0,TranslatorSingleton.t)('Select subject'),
    value: subject != null ? subject : undefined,
    onChange: handleSubjectChange,
    notFoundContent: (0,TranslatorSingleton.t)('No such column found. To filter on a metric, try the Custom SQL tab.'),
    autoFocus: !subject,
    placeholder: '' };

  if (props.datasource.type === 'druid') {
    subjectSelectProps.placeholder = (0,TranslatorSingleton.t)('%s column(s) and metric(s)', columns.length);
  } else
  {
    // we cannot support simple ad-hoc filters for metrics because we don't know what type
    // the value should be cast to (without knowing the output type of the aggregate, which
    // becomes a rather complicated problem)
    subjectSelectProps.placeholder =
    props.adhocFilter.clause === AdhocFilter/* CLAUSES.WHERE */.Pr.WHERE ?
    (0,TranslatorSingleton.t)('%s column(s)', columns.length) :
    (0,TranslatorSingleton.t)('To filter on a metric, use Custom SQL tab.');
    columns = props.options.filter((option) => 'column_name' in option && option.column_name);
  }
  const operatorSelectProps = {
    placeholder: (0,TranslatorSingleton.t)('%s operator(s)', ((_props$operators = props.operators) != null ? _props$operators : constants/* OPERATORS_OPTIONS */.GS).filter((op) => isOperatorRelevant(op, subject)).length),
    value: operatorId,
    onChange: onOperatorChange,
    autoFocus: !!subjectSelectProps.value && !operator,
    ariaLabel: (0,TranslatorSingleton.t)('Select operator') };

  const shouldFocusComparator = !!subjectSelectProps.value && !!operatorSelectProps.value;
  const comparatorSelectProps = {
    allowClear: true,
    allowNewOptions: true,
    ariaLabel: (0,TranslatorSingleton.t)('Comparator option'),
    mode: constants/* MULTI_OPERATORS.has */.qK.has(operatorId) ?
    'multiple' :
    'single',
    loading: loadingComparatorSuggestions,
    value: comparator,
    onChange: onComparatorChange,
    notFoundContent: (0,TranslatorSingleton.t)('Type a value here'),
    disabled: constants/* DISABLE_INPUT_OPERATORS.includes */.yi.includes(operatorId),
    placeholder: createSuggestionsPlaceholder(),
    autoFocus: shouldFocusComparator };

  const labelText = comparator && comparator.length > 0 && createSuggestionsPlaceholder();
  (0,react.useEffect)(() => {
    const refreshComparatorSuggestions = () => {
      const { datasource } = props;
      const col = props.adhocFilter.subject;
      const having = props.adhocFilter.clause === AdhocFilter/* CLAUSES.HAVING */.Pr.HAVING;
      if (col && datasource && datasource.filter_select && !having) {
        const controller = new AbortController();
        const { signal } = controller;
        if (loadingComparatorSuggestions) {
          controller.abort();
        }
        setLoadingComparatorSuggestions(true);
        SupersetClient/* default.get */.Z.get({
          signal,
          endpoint: `/superset/filter/${datasource.type}/${datasource.id}/${col}/` }).

        then(({ json }) => {
          setSuggestions(json);
          setLoadingComparatorSuggestions(false);
        }).
        catch(() => {
          setSuggestions([]);
          setLoadingComparatorSuggestions(false);
        });
      }
    };
    refreshComparatorSuggestions();
  }, [props.adhocFilter.subject]);
  (0,react.useEffect)(() => {
    setComparator(props.adhocFilter.comparator);
  }, [props.adhocFilter.comparator]);
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(components/* Select */.P, extends_default()({ css: (theme) => ({
      marginTop: theme.gridUnit * 4,
      marginBottom: theme.gridUnit * 4 }),
    options: columns.map((column) => ({
      value: 'column_name' in column && column.column_name ||
      'optionName' in column && column.optionName ||
      '',
      label: 'saved_metric_name' in column && column.saved_metric_name ||
      'column_name' in column && column.column_name ||
      'label' in column && column.label,
      key: 'id' in column && column.id ||
      'optionName' in column && column.optionName ||
      undefined,
      customLabel: renderSubjectOptionLabel(column) })) },
  subjectSelectProps)),
  (0,emotion_react_browser_esm.jsx)(components/* Select */.P, extends_default()({ css: (theme) => ({ marginBottom: theme.gridUnit * 4 }), options: ((_props$operators2 = props.operators) != null ? _props$operators2 : constants/* OPERATORS_OPTIONS */.GS).
    filter((op) => isOperatorRelevant(op, subject)).
    map((option) => ({
      value: option,
      label: constants/* OPERATOR_ENUM_TO_OPERATOR_TYPE */.LT[option].display,
      key: option })) },
  operatorSelectProps)),
  constants/* MULTI_OPERATORS.has */.qK.has(operatorId) || suggestions.length > 0 ? (0,emotion_react_browser_esm.jsx)(SelectWithLabel, extends_default()({ labelText: labelText, options: suggestions.map((suggestion) => ({
      value: suggestion,
      label: String(suggestion) })) },
  comparatorSelectProps)) : (0,emotion_react_browser_esm.jsx)(StyledInput, { name: "filter-value", ref: (ref) => {
      if (ref && shouldFocusComparator) {
        ref.focus();
      }
    }, onChange: onInputComparatorChange, value: comparator, placeholder: (0,TranslatorSingleton.t)('Filter value (case sensitive)'), disabled: constants/* DISABLE_INPUT_OPERATORS.includes */.yi.includes(operatorId) }));

};
/* harmony default export */ const FilterControl_AdhocFilterEditPopoverSimpleTabContent = (AdhocFilterEditPopoverSimpleTabContent);
// EXTERNAL MODULE: ./src/components/AsyncAceEditor/index.tsx
var AsyncAceEditor = __webpack_require__(94670);
// EXTERNAL MODULE: ./src/SqlLab/utils/sqlKeywords.ts
var sqlKeywords = __webpack_require__(33313);
// EXTERNAL MODULE: ./src/explore/components/controls/FilterControl/columnType.js
var columnType = __webpack_require__(72201);
;// CONCATENATED MODULE: ./src/explore/components/controls/FilterControl/AdhocFilterEditPopoverSqlTabContent/index.jsx
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
  adhocFilter: prop_types_default().instanceOf(AdhocFilter/* default */.ZP).isRequired,
  onChange: (prop_types_default()).func.isRequired,
  options: prop_types_default().arrayOf(
  prop_types_default().oneOfType([
  columnType/* default */.Z,
  prop_types_default().shape({ saved_metric_name: (prop_types_default()).string.isRequired }),
  adhocMetricType/* default */.Z])).

  isRequired,
  height: (prop_types_default()).number.isRequired,
  activeKey: (prop_types_default()).string.isRequired };


const StyledSelect = (0,style/* styled */.iK)(components/* Select */.P)`
  ${({ theme }) => `
    width: ${theme.gridUnit * 30}px;
    marginRight: ${theme.gridUnit}px;
  `}
`;

class AdhocFilterEditPopoverSqlTabContent extends react.Component {
  constructor(props) {
    super(props);
    this.onSqlExpressionChange = this.onSqlExpressionChange.bind(this);
    this.onSqlExpressionClauseChange = this.onSqlExpressionClauseChange.bind(
    this);

    this.handleAceEditorRef = this.handleAceEditorRef.bind(this);

    this.selectProps = {
      ariaLabel: (0,TranslatorSingleton.t)('Select column') };

  }

  componentDidUpdate() {
    if (this.aceEditorRef) {
      this.aceEditorRef.editor.resize();
    }
  }

  onSqlExpressionClauseChange(clause) {
    this.props.onChange(
    this.props.adhocFilter.duplicateWith({
      clause,
      expressionType: AdhocFilter/* EXPRESSION_TYPES.SQL */.vq.SQL }));


  }

  onSqlExpressionChange(sqlExpression) {
    this.props.onChange(
    this.props.adhocFilter.duplicateWith({
      sqlExpression,
      expressionType: AdhocFilter/* EXPRESSION_TYPES.SQL */.vq.SQL }));


  }

  handleAceEditorRef(ref) {
    if (ref) {
      this.aceEditorRef = ref;
    }
  }

  render() {
    const { adhocFilter, height, options } = this.props;

    const clauseSelectProps = {
      placeholder: (0,TranslatorSingleton.t)('choose WHERE or HAVING...'),
      value: adhocFilter.clause,
      onChange: this.onSqlExpressionClauseChange };

    const keywords = sqlKeywords/* default.concat */.Z.concat(
    options.
    map((option) => {
      if (option.column_name) {
        return {
          name: option.column_name,
          value: option.column_name,
          score: 50,
          meta: 'option' };

      }
      return null;
    }).
    filter(Boolean));

    const selectOptions = Object.keys(AdhocFilter/* CLAUSES */.Pr).map((clause) => ({
      label: clause,
      value: clause }));


    return (
      (0,emotion_react_browser_esm.jsx)("span", null,
      (0,emotion_react_browser_esm.jsx)("div", { className: "filter-edit-clause-section" },
      (0,emotion_react_browser_esm.jsx)(StyledSelect, extends_default()({
        options: selectOptions },
      this.selectProps,
      clauseSelectProps)),

      (0,emotion_react_browser_esm.jsx)("span", { className: "filter-edit-clause-info" },
      (0,emotion_react_browser_esm.jsx)("strong", null, "WHERE"), " ", (0,TranslatorSingleton.t)('Filters by columns'),
      (0,emotion_react_browser_esm.jsx)("br", null),
      (0,emotion_react_browser_esm.jsx)("strong", null, "HAVING"), " ", (0,TranslatorSingleton.t)('Filters by metrics'))),


      (0,emotion_react_browser_esm.jsx)("div", { css: (theme) => ({ marginTop: theme.gridUnit * 4 }) },
      (0,emotion_react_browser_esm.jsx)(AsyncAceEditor/* SQLEditor */.iO, {
        ref: this.handleAceEditorRef,
        keywords: keywords,
        height: `${height - 130}px`,
        onChange: this.onSqlExpressionChange,
        width: "100%",
        showGutter: false,
        value: adhocFilter.sqlExpression || adhocFilter.translateToSql(),
        editorProps: { $blockScrolling: true },
        enableLiveAutocompletion: true,
        className: "filter-sql-editor",
        wrapEnabled: true }))));




  }}

AdhocFilterEditPopoverSqlTabContent.propTypes = propTypes;
;// CONCATENATED MODULE: ./src/explore/components/controls/FilterControl/AdhocFilterEditPopover/index.jsx
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













const AdhocFilterEditPopover_propTypes = {
  adhocFilter: prop_types_default().instanceOf(AdhocFilter/* default */.ZP).isRequired,
  onChange: (prop_types_default()).func.isRequired,
  onClose: (prop_types_default()).func.isRequired,
  onResize: (prop_types_default()).func.isRequired,
  options: prop_types_default().arrayOf(
  prop_types_default().oneOfType([
  columnType/* default */.Z,
  prop_types_default().shape({ saved_metric_name: (prop_types_default()).string.isRequired }),
  adhocMetricType/* default */.Z])).

  isRequired,
  datasource: (prop_types_default()).object,
  partitionColumn: (prop_types_default()).string,
  theme: (prop_types_default()).object,
  sections: prop_types_default().arrayOf((prop_types_default()).string),
  operators: prop_types_default().arrayOf((prop_types_default()).string) };


const ResizeIcon = style/* styled.i */.iK.i`
  margin-left: ${({ theme }) => theme.gridUnit * 2}px;
`;

const startingWidth = 320;
const startingHeight = 240;
const SectionWrapper = style/* styled.div */.iK.div`
  .ant-select {
    margin-bottom: ${({ theme }) => theme.gridUnit * 4}px;
  }
`;

const FilterPopoverContentContainer = style/* styled.div */.iK.div`
  .adhoc-filter-edit-tabs > .nav-tabs {
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;

    & > li > a {
      padding: ${({ theme }) => theme.gridUnit}px;
    }
  }

  #filter-edit-popover {
    max-width: none;
  }

  .filter-edit-clause-info {
    font-size: ${({ theme }) => theme.typography.sizes.xs}px;
    padding-left: ${({ theme }) => theme.gridUnit}px;
  }

  .filter-edit-clause-section {
    display: inline-flex;
  }

  .adhoc-filter-simple-column-dropdown {
    margin-top: ${({ theme }) => theme.gridUnit * 5}px;
  }
`;

class AdhocFilterEditPopover extends react.Component {
  constructor(props) {var _this$props, _this$props$adhocFilt;
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onDragDown = this.onDragDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onAdhocFilterChange = this.onAdhocFilterChange.bind(this);
    this.adjustHeight = this.adjustHeight.bind(this);
    this.onTabChange = this.onTabChange.bind(this);

    this.state = {
      adhocFilter: this.props.adhocFilter,
      width: startingWidth,
      height: startingHeight,
      activeKey: ((_this$props = this.props) == null ? void 0 : (_this$props$adhocFilt = _this$props.adhocFilter) == null ? void 0 : _this$props$adhocFilt.expressionType) || 'SIMPLE' };


    this.popoverContentRef = /*#__PURE__*/react.createRef();
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.onMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
  }

  onAdhocFilterChange(adhocFilter) {
    this.setState({ adhocFilter });
  }

  onSave() {
    this.props.onChange(this.state.adhocFilter);
    this.props.onClose();
  }

  onDragDown(e) {
    this.dragStartX = e.clientX;
    this.dragStartY = e.clientY;
    this.dragStartWidth = this.state.width;
    this.dragStartHeight = this.state.height;
    document.addEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(e) {
    this.props.onResize();
    this.setState({
      width: Math.max(
      this.dragStartWidth + (e.clientX - this.dragStartX),
      startingWidth),

      height: Math.max(
      this.dragStartHeight + (e.clientY - this.dragStartY) * 2,
      startingHeight) });


  }

  onMouseUp() {
    document.removeEventListener('mousemove', this.onMouseMove);
  }

  onTabChange(activeKey) {
    this.setState({
      activeKey });

  }

  adjustHeight(heightDifference) {
    this.setState((state) => ({ height: state.height + heightDifference }));
  }

  render() {
    const {
      adhocFilter: propsAdhocFilter,
      options,
      onChange,
      onClose,
      onResize,
      datasource,
      partitionColumn,
      sections = ['SIMPLE', 'CUSTOM_SQL'],
      theme,
      operators,
      ...popoverProps } =
    this.props;

    const { adhocFilter } = this.state;

    const resultSections =
    (datasource == null ? void 0 : datasource.type) === 'druid' ?
    sections.filter((s) => s !== 'CUSTOM_SQL') :
    sections;

    const stateIsValid = adhocFilter.isValid();
    const hasUnsavedChanges = !adhocFilter.equals(propsAdhocFilter);

    const sectionRenders = {};

    sectionRenders.CUSTOM_SQL =
    (0,emotion_react_browser_esm.jsx)(ErrorBoundary/* default */.Z, null,
    (0,emotion_react_browser_esm.jsx)(AdhocFilterEditPopoverSqlTabContent, {
      adhocFilter: this.state.adhocFilter,
      onChange: this.onAdhocFilterChange,
      options: this.props.options,
      height: this.state.height,
      activeKey: this.state.activeKey }));




    sectionRenders.SIMPLE =
    (0,emotion_react_browser_esm.jsx)(ErrorBoundary/* default */.Z, null,
    (0,emotion_react_browser_esm.jsx)(FilterControl_AdhocFilterEditPopoverSimpleTabContent, {
      operators: operators,
      adhocFilter: this.state.adhocFilter,
      onChange: this.onAdhocFilterChange,
      options: options,
      datasource: datasource,
      onHeightChange: this.adjustHeight,
      partitionColumn: partitionColumn,
      popoverRef: this.popoverContentRef.current }));




    return (
      (0,emotion_react_browser_esm.jsx)(FilterPopoverContentContainer, extends_default()({
        id: "filter-edit-popover" },
      popoverProps, {

        ref: this.popoverContentRef }),

      resultSections.length > 1 ?
      (0,emotion_react_browser_esm.jsx)(Tabs/* default */.ZP, {
        id: "adhoc-filter-edit-tabs",
        defaultActiveKey: adhocFilter.expressionType,
        className: "adhoc-filter-edit-tabs",

        style: { minHeight: this.state.height, width: this.state.width },
        allowOverflow: true,
        onChange: this.onTabChange },

      resultSections.includes('SIMPLE') &&
      (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, {
        className: "adhoc-filter-edit-tab",
        key: AdhocFilter/* EXPRESSION_TYPES.SIMPLE */.vq.SIMPLE,
        tab: (0,TranslatorSingleton.t)('Simple') },

      sectionRenders.SIMPLE),


      resultSections.includes('CUSTOM_SQL') &&
      (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, {
        className: "adhoc-filter-edit-tab",
        key: AdhocFilter/* EXPRESSION_TYPES.SQL */.vq.SQL,
        tab: (0,TranslatorSingleton.t)('Custom SQL') },

      sectionRenders.CUSTOM_SQL)) :




      (0,emotion_react_browser_esm.jsx)(SectionWrapper, null, sectionRenders[resultSections[0]]),

      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonSize: "small", onClick: this.props.onClose, cta: true },
      (0,TranslatorSingleton.t)('Close')),

      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {

        disabled: !stateIsValid,
        buttonStyle:
        hasUnsavedChanges && stateIsValid ? 'primary' : 'default',

        buttonSize: "small",
        className: "m-r-5",
        onClick: this.onSave,
        cta: true },

      (0,TranslatorSingleton.t)('Save')),

      (0,emotion_react_browser_esm.jsx)(ResizeIcon, {
        role: "button",
        "aria-label": "Resize",
        tabIndex: 0,
        onMouseDown: this.onDragDown,
        className: "fa fa-expand edit-popover-resize text-muted" }))));




  }}


AdhocFilterEditPopover.propTypes = AdhocFilterEditPopover_propTypes;
// EXTERNAL MODULE: ./src/explore/components/ExploreContentPopover.tsx
var ExploreContentPopover = __webpack_require__(63325);
;// CONCATENATED MODULE: ./src/explore/components/controls/FilterControl/AdhocFilterPopoverTrigger/index.tsx
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




class AdhocFilterPopoverTrigger extends react.PureComponent {
  constructor(props) {
    super(props);
    this.onPopoverResize = this.onPopoverResize.bind(this);
    this.closePopover = this.closePopover.bind(this);
    this.togglePopover = this.togglePopover.bind(this);
    this.state = {
      popoverVisible: false };

  }
  onPopoverResize() {
    this.forceUpdate();
  }
  closePopover() {
    this.togglePopover(false);
  }
  togglePopover(visible) {
    this.setState({
      popoverVisible: visible });

  }
  render() {
    const { adhocFilter, isControlledComponent } = this.props;
    const { visible, togglePopover, closePopover } = isControlledComponent ?
    {
      visible: this.props.visible,
      togglePopover: this.props.togglePopover,
      closePopover: this.props.closePopover } :

    {
      visible: this.state.popoverVisible,
      togglePopover: this.togglePopover,
      closePopover: this.closePopover };

    const overlayContent = (0,emotion_react_browser_esm.jsx)(ExploreContentPopover/* ExplorePopoverContent */.b, null,
    (0,emotion_react_browser_esm.jsx)(AdhocFilterEditPopover, { adhocFilter: adhocFilter, options: this.props.options, datasource: this.props.datasource, partitionColumn: this.props.partitionColumn, onResize: this.onPopoverResize, onClose: closePopover, sections: this.props.sections, operators: this.props.operators, onChange: this.props.onFilterEdit }));

    return (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, { placement: "right", trigger: "click", content: overlayContent, defaultVisible: visible, visible: visible, onVisibleChange: togglePopover, destroyTooltipOnHide: true },
    this.props.children);

  }}

/* harmony default export */ const FilterControl_AdhocFilterPopoverTrigger = (AdhocFilterPopoverTrigger);

/***/ }),

/***/ 33334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a7": () => (/* binding */ DragContainer),
/* harmony export */   "EQ": () => (/* binding */ OptionControlContainer),
/* harmony export */   "__": () => (/* binding */ Label),
/* harmony export */   "Ne": () => (/* binding */ CaretContainer),
/* harmony export */   "gu": () => (/* binding */ CloseContainer),
/* harmony export */   "gM": () => (/* binding */ HeaderContainer),
/* harmony export */   "yj": () => (/* binding */ LabelsContainer),
/* harmony export */   "H$": () => (/* binding */ DndLabelsContainer),
/* harmony export */   "SW": () => (/* binding */ AddControlLabel),
/* harmony export */   "IG": () => (/* binding */ AddIconButton),
/* harmony export */   "yz": () => (/* binding */ OptionControlLabel)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5872);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22068);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27034);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60650);
/* harmony import */ var _superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88186);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58593);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38097);
/* harmony import */ var _optionRenderers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99963);
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







const DragContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  margin-bottom: ${({ theme }) => theme.gridUnit}px;
  :last-child {
    margin-bottom: 0;
  }
`;
const OptionControlContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  height: ${({ theme }) => theme.gridUnit * 6}px;
  background-color: ${({ theme }) => theme.colors.grayscale.light3};
  border-radius: 3px;
  cursor: ${({ withCaret }) => withCaret ? 'pointer' : 'default'};
`;
const Label = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  ${({ theme }) => `
    display: flex;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
    white-space: nowrap;
    padding-left: ${theme.gridUnit}px;
    svg {
      margin-right: ${theme.gridUnit}px;
      margin-left: ${theme.gridUnit}px;
    }
    .type-label {
      margin-right: ${theme.gridUnit * 2}px;
      margin-left: ${theme.gridUnit}px;
      font-weight: ${theme.typography.weights.normal};
      width: auto;
    }
    .option-label {
      display: inline;
    }
  `}
`;
const LabelText = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.span */ .iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CaretContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  height: 100%;
  border-left: solid 1px ${({ theme }) => theme.colors.grayscale.dark2}0C;
  margin-left: auto;
`;
const CloseContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  height: 100%;
  width: ${({ theme }) => theme.gridUnit * 6}px;
  border-right: solid 1px ${({ theme }) => theme.colors.grayscale.dark2}0C;
  cursor: pointer;
`;
const StyledInfoTooltipWithTrigger = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled */ .iK)(_superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_6__/* .InfoTooltipWithTrigger */ .V)`
  margin: 0 ${({ theme }) => theme.gridUnit}px;
`;
const HeaderContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LabelsContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  padding: ${({ theme }) => theme.gridUnit}px;
  border: solid 1px ${({ theme }) => theme.colors.grayscale.light2};
  border-radius: ${({ theme }) => theme.gridUnit}px;
`;
const DndLabelsContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  padding: ${({ theme }) => theme.gridUnit}px;
  border: ${({ canDrop, isOver, theme }) => {
  if (canDrop) {
    return `dashed 1px ${theme.colors.info.dark1}`;
  }
  if (isOver && !canDrop) {
    return `dashed 1px ${theme.colors.error.dark1}`;
  }
  return `solid 1px ${theme.colors.grayscale.light2}`;
}};
  border-radius: ${({ theme }) => theme.gridUnit}px;
`;
const AddControlLabel = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.gridUnit * 6}px;
  padding-left: ${({ theme }) => theme.gridUnit}px;
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  color: ${({ theme }) => theme.colors.grayscale.light1};
  border: dashed 1px ${({ theme }) => theme.colors.grayscale.light2};
  border-radius: ${({ theme }) => theme.gridUnit}px;
  cursor: ${({ cancelHover }) => cancelHover ? 'inherit' : 'pointer'};

  :hover {
    background-color: ${({ cancelHover, theme }) => cancelHover ? 'inherit' : theme.colors.grayscale.light4};
  }

  :active {
    background-color: ${({ cancelHover, theme }) => cancelHover ? 'inherit' : theme.colors.grayscale.light3};
  }
`;
const AddIconButton = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.button */ .iK.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.gridUnit * 4}px;
  width: ${({ theme }) => theme.gridUnit * 4}px;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.primary.dark1};
  border: none;
  border-radius: 2px;

  :disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.grayscale.light1};
  }
`;
const OptionControlLabel = ({ label, savedMetric, adhocMetric, onRemove, onMoveLabel, onDropLabel, withCaret, isFunction, type, index, isExtra, tooltipTitle, multi = true, ...props }) => {
  const theme = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .useTheme */ .Fg)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const labelRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const hasMetricName = savedMetric == null ? void 0 : savedMetric.metric_name;
  const [, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_7__/* .useDrop */ .L)({
    accept: type,
    drop() {
      if (!multi) {
        return;
      }
      onDropLabel == null ? void 0 : onDropLabel();
    },
    hover(item, monitor) {var _ref$current;
      if (!multi) {
        return;
      }
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = (_ref$current = ref.current) == null ? void 0 : _ref$current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset != null && clientOffset.y ?
      (clientOffset == null ? void 0 : clientOffset.y) - hoverBoundingRect.top :
      0;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      onMoveLabel == null ? void 0 : onMoveLabel(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      // eslint-disable-next-line no-param-reassign
      item.index = hoverIndex;
    } });

  const [{ isDragging }, drag] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_8__/* .useDrag */ .c)({
    item: {
      type,
      index,
      value: savedMetric != null && savedMetric.metric_name ? savedMetric : adhocMetric },

    collect: (monitor) => ({
      isDragging: monitor.isDragging() }) });


  const getLabelContent = () => {
    const shouldShowTooltip = !isDragging &&
    typeof label === 'string' &&
    tooltipTitle &&
    label &&
    tooltipTitle !== label ||
    !isDragging &&
    labelRef &&
    labelRef.current &&
    labelRef.current.scrollWidth > labelRef.current.clientWidth;
    if (savedMetric && hasMetricName) {
      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_optionRenderers__WEBPACK_IMPORTED_MODULE_4__/* .StyledMetricOption */ .B, { metric: savedMetric, labelRef: labelRef, showTooltip: !!shouldShowTooltip });
    }
    if (!shouldShowTooltip) {
      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(LabelText, { ref: labelRef }, label);
    }
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Tooltip */ .u, { title: tooltipTitle || label },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(LabelText, { ref: labelRef }, label));

  };
  const getOptionControlContent = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(OptionControlContainer, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ withCaret: withCaret }, props),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(CloseContainer, { role: "button", onClick: onRemove },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"].XSmall */ .Z.XSmall, { iconColor: theme.colors.grayscale.light1 })),

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(Label, null,
  isFunction && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"].FunctionX */ .Z.FunctionX, { viewBox: "0 0 16 11", iconSize: "l" }),
  getLabelContent()),

  isExtra && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(StyledInfoTooltipWithTrigger, { icon: "exclamation-triangle", placement: "top", bsStyle: "warning", tooltip: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)(`
                This filter was inherited from the dashboard's context.
                It won't be saved when saving the chart.
              `) }),
  withCaret && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(CaretContainer, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"].CaretRight */ .Z.CaretRight, { iconColor: theme.colors.grayscale.light1 })));


  drag(drop(ref));
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(DragContainer, { ref: ref }, getOptionControlContent());
};

/***/ }),

/***/ 79684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59377);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12788);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23279);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27600);
/* harmony import */ var src_explore_components_ControlHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93011);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82191);
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






const safeStringify = (value) => value == null ? '' : String(value);
class TextControl extends react__WEBPACK_IMPORTED_MODULE_0__.Component {

  constructor(props) {
    super(props);this.initialValue = void 0;this.





    onChange = (inputValue) => {var _this$props$onChange, _this$props;
      let parsedValue = inputValue;
      // Validation & casting
      const errors = [];
      if (inputValue !== '' && this.props.isFloat) {
        const error = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(inputValue);
        if (error) {
          errors.push(error);
        } else
        {
          parsedValue = inputValue.match(/.*([.0])$/g) ?
          inputValue :
          parseFloat(inputValue);
        }
      }
      if (inputValue !== '' && this.props.isInt) {
        const error = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(inputValue);
        if (error) {
          errors.push(error);
        } else
        {
          parsedValue = parseInt(inputValue, 10);
        }
      }
      (_this$props$onChange = (_this$props = this.props).onChange) == null ? void 0 : _this$props$onChange.call(_this$props, parsedValue, errors);
    };this.
    debouncedOnChange = lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()((inputValue) => {
      this.onChange(inputValue);
    }, src_constants__WEBPACK_IMPORTED_MODULE_2__/* .FAST_DEBOUNCE */ .oP);this.
    onChangeWrapper = (event) => {
      const { value } = event.target;
      this.setState({ value }, () => {
        this.debouncedOnChange(value);
      });
    };this.
    render = () => {
      let { value } = this.state;
      if (this.initialValue !== this.props.value) {
        this.initialValue = this.props.value;
        value = safeStringify(this.props.value);
      }
      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", null,
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_explore_components_ControlHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, this.props),
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .II, { type: "text", placeholder: this.props.placeholder, onChange: this.onChangeWrapper, onFocus: this.props.onFocus, value: value, disabled: this.props.disabled, "aria-label": this.props.label }));

    };this.initialValue = props.value;this.state = { value: safeStringify(this.initialValue) };}}

/***/ }),

/***/ 99963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ StyledMetricOption),
/* harmony export */   "l": () => (/* binding */ StyledColumnOption)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5483);
/* harmony import */ var _superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82204);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11965);
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



const OptionContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .styled.div */ .iK.div`
  width: 100%;
  > span {
    display: flex;
    align-items: center;
  }

  .option-label {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    & ~ i {
      margin-left: ${({ theme }) => theme.gridUnit}px;
    }
  }
  .type-label {
    margin-right: ${({ theme }) => theme.gridUnit * 3}px;
    width: ${({ theme }) => theme.gridUnit * 7}px;
    display: inline-block;
    text-align: center;
    font-weight: ${({ theme }) => theme.typography.weights.bold};
  }
`;
const StyledMetricOption = (props) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(OptionContainer, null,
(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_3__/* .MetricOption */ .m, props));

const StyledColumnOption = (props) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(OptionContainer, null,
(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_4__/* .ColumnOption */ .E, props));

/***/ }),

/***/ 97488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "RO": () => (/* reexport */ applyMapStateToPropsToControl),
  "mi": () => (/* reexport */ getAllControlsState),
  "Bx": () => (/* reexport */ getControlConfig_getControlConfig),
  "vP": () => (/* reexport */ getControlStateFromControlConfig),
  "Hu": () => (/* reexport */ getFormDataFromControls),
  "Bq": () => (/* reexport */ getSectionsToRender)
});

// UNUSED EXPORTS: findControlItem, getControlState

// NAMESPACE OBJECT: ./src/explore/controlPanels/sections.tsx
var sections_namespaceObject = {};
__webpack_require__.r(sections_namespaceObject);
__webpack_require__.d(sections_namespaceObject, {
  "NVD3TimeSeries": () => (NVD3TimeSeries),
  "annotations": () => (annotations),
  "colorScheme": () => (colorScheme),
  "datasourceAndVizType": () => (datasourceAndVizType),
  "druidTimeSeries": () => (druidTimeSeries),
  "sqlaTimeSeries": () => (sqlaTimeSeries)
});

// EXTERNAL MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__(30845);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartControlPanelRegistrySingleton.js
var ChartControlPanelRegistrySingleton = __webpack_require__(14299);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/utils/expandControlConfig.js
var expandControlConfig = __webpack_require__(80848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./src/modules/utils.js
var utils = __webpack_require__(16737);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/explore/controlPanels/sections.tsx
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



const druidTimeSeries = {
  label: (0,TranslatorSingleton.t)('Time'),
  expanded: true,
  description: (0,TranslatorSingleton.t)('Time related form attributes'),
  controlSetRows: [['time_range']] };

const datasourceAndVizType = {
  label: (0,TranslatorSingleton.t)('Chart type'),
  expanded: true,
  controlSetRows: [
  ['datasource'],
  ['viz_type'],
  [
  {
    name: 'slice_id',
    config: {
      type: 'HiddenControl',
      label: (0,TranslatorSingleton.t)('Chart ID'),
      hidden: true,
      description: (0,TranslatorSingleton.t)('The id of the active chart') } },


  {
    name: 'cache_timeout',
    config: {
      type: 'HiddenControl',
      label: (0,TranslatorSingleton.t)('Cache Timeout (seconds)'),
      hidden: true,
      description: (0,TranslatorSingleton.t)('The number of seconds before expiring the cache') } },


  {
    name: 'url_params',
    config: {
      type: 'HiddenControl',
      label: (0,TranslatorSingleton.t)('URL parameters'),
      hidden: true,
      description: (0,TranslatorSingleton.t)('Extra parameters for use in jinja templated queries') } },


  {
    name: 'time_range_endpoints',
    config: {
      type: 'HiddenControl',
      label: (0,TranslatorSingleton.t)('Time range endpoints'),
      hidden: true,
      description: (0,TranslatorSingleton.t)('Time range endpoints (SIP-15)') } }]] };





const colorScheme = {
  label: (0,TranslatorSingleton.t)('Color scheme'),
  controlSetRows: [['color_scheme']] };

const sqlaTimeSeries = {
  label: (0,TranslatorSingleton.t)('Time'),
  description: (0,TranslatorSingleton.t)('Time related form attributes'),
  expanded: true,
  controlSetRows: [['granularity_sqla'], ['time_range']] };

const annotations = {
  label: (0,TranslatorSingleton.t)('Annotations and layers'),
  tabOverride: 'data',
  expanded: true,
  controlSetRows: [
  [
  {
    name: 'annotation_layers',
    config: {
      type: 'AnnotationLayerControl',
      label: '',
      default: [],
      description: 'Annotation layers',
      renderTrigger: true,
      tabOverride: 'data' } }]] };





const NVD3TimeSeries = [
{
  label: (0,TranslatorSingleton.t)('Query'),
  expanded: true,
  controlSetRows: [
  ['metrics'],
  ['adhoc_filters'],
  ['groupby'],
  ['limit', 'timeseries_limit_metric'],
  [
  {
    name: 'order_desc',
    config: {
      type: 'CheckboxControl',
      label: (0,TranslatorSingleton.t)('Sort descending'),
      default: true,
      description: (0,TranslatorSingleton.t)('Whether to sort descending or ascending') } },


  {
    name: 'contribution',
    config: {
      type: 'CheckboxControl',
      label: (0,TranslatorSingleton.t)('Contribution'),
      default: false,
      description: (0,TranslatorSingleton.t)('Compute the contribution to the total') } }],



  ['row_limit', null]] },


{
  label: (0,TranslatorSingleton.t)('Advanced analytics'),
  tabOverride: 'data',
  description: (0,TranslatorSingleton.t)('This section contains options ' +
  'that allow for advanced analytical post processing ' +
  'of query results'),
  controlSetRows: [
  [(0,emotion_react_browser_esm.jsx)("h1", { className: "section-header" }, (0,TranslatorSingleton.t)('Rolling window'))],
  [
  {
    name: 'rolling_type',
    config: {
      type: 'SelectControl',
      label: (0,TranslatorSingleton.t)('Rolling function'),
      default: 'None',
      choices: (0,utils/* formatSelectOptions */.mG)([
      'None',
      'mean',
      'sum',
      'std',
      'cumsum']),

      description: (0,TranslatorSingleton.t)('Defines a rolling window function to apply, works along ' +
      'with the [Periods] text box') } },


  {
    name: 'rolling_periods',
    config: {
      type: 'TextControl',
      label: (0,TranslatorSingleton.t)('Periods'),
      isInt: true,
      description: (0,TranslatorSingleton.t)('Defines the size of the rolling window function, ' +
      'relative to the time granularity selected') } },


  {
    name: 'min_periods',
    config: {
      type: 'TextControl',
      label: (0,TranslatorSingleton.t)('Min periods'),
      isInt: true,
      description: (0,TranslatorSingleton.t)('The minimum number of rolling periods required to show ' +
      'a value. For instance if you do a cumulative sum on 7 days ' +
      'you may want your "Min Period" to be 7, so that all data points ' +
      'shown are the total of 7 periods. This will hide the "ramp up" ' +
      'taking place over the first 7 periods') } }],



  [(0,emotion_react_browser_esm.jsx)("h1", { className: "section-header" }, (0,TranslatorSingleton.t)('Time comparison'))],
  [
  {
    name: 'time_compare',
    config: {
      type: 'SelectControl',
      multi: true,
      freeForm: true,
      label: (0,TranslatorSingleton.t)('Time shift'),
      choices: (0,utils/* formatSelectOptions */.mG)([
      '1 day',
      '1 week',
      '28 days',
      '30 days',
      '52 weeks',
      '1 year',
      '104 weeks',
      '2 years']),

      description: (0,TranslatorSingleton.t)('Overlay one or more timeseries from a ' +
      'relative time period. Expects relative time deltas ' +
      'in natural language (example:  24 hours, 7 days, ' +
      '52 weeks, 365 days). Free text is supported.') } },


  {
    name: 'comparison_type',
    config: {
      type: 'SelectControl',
      label: (0,TranslatorSingleton.t)('Calculation type'),
      default: 'values',
      choices: [
      ['values', 'Actual values'],
      ['absolute', 'Difference'],
      ['percentage', 'Percentage change'],
      ['ratio', 'Ratio']],

      description: (0,TranslatorSingleton.t)('How to display time shifts: as individual lines; as the ' +
      'difference between the main time series and each time shift; ' +
      'as the percentage change; or as the ratio between series and time shifts.') } }],



  [(0,emotion_react_browser_esm.jsx)("h1", { className: "section-header" }, (0,TranslatorSingleton.t)('Python functions'))],
  // eslint-disable-next-line jsx-a11y/heading-has-content
  [(0,emotion_react_browser_esm.jsx)("h2", { className: "section-header" }, "pandas.resample")],
  [
  {
    name: 'resample_rule',
    config: {
      type: 'SelectControl',
      freeForm: true,
      label: (0,TranslatorSingleton.t)('Rule'),
      default: null,
      choices: (0,utils/* formatSelectOptions */.mG)(['1T', '1H', '1D', '7D', '1M', '1AS']),
      description: (0,TranslatorSingleton.t)('Pandas resample rule') } },


  {
    name: 'resample_method',
    config: {
      type: 'SelectControl',
      freeForm: true,
      label: (0,TranslatorSingleton.t)('Method'),
      default: null,
      choices: (0,utils/* formatSelectOptions */.mG)([
      'asfreq',
      'bfill',
      'ffill',
      'median',
      'mean',
      'sum']),

      description: (0,TranslatorSingleton.t)('Pandas resample method') } }]] }];
;// CONCATENATED MODULE: ./src/explore/controlUtils/getSectionsToRender.ts
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




const getMemoizedSectionsToRender = (0,memoize_one_esm/* default */.Z)((datasourceType, controlPanelConfig) => {
  const { sectionOverrides = {}, controlOverrides, controlPanelSections = [] } = controlPanelConfig;
  // default control panel sections
  const sections = { ...sections_namespaceObject };
  // apply section overrides
  Object.entries(sectionOverrides).forEach(([section, overrides]) => {
    if (typeof overrides === 'object' && overrides.constructor === Object) {
      sections[section] = {
        ...sections[section],
        ...overrides };

    } else
    {
      sections[section] = overrides;
    }
  });
  const { datasourceAndVizType } = sections;
  // list of datasource-specific controls that should be removed
  const invalidControls = datasourceType === 'table' ?
  ['granularity', 'druid_time_origin'] :
  ['granularity_sqla', 'time_grain_sqla'];
  return [datasourceAndVizType].
  concat(controlPanelSections).
  filter((section) => !!section).
  map((section) => {
    const { controlSetRows } = section;
    return {
      ...section,
      controlSetRows: (controlSetRows == null ? void 0 : controlSetRows.map((row) => row.
      filter((control) => typeof control !== 'string' ||
      !invalidControls.includes(control)).
      map((item) => (0,expandControlConfig/* expandControlConfig */.q)(item, controlOverrides)))) || [] };

  });
});
/**
 * Get the clean and processed control panel sections
 */
function getSectionsToRender(vizType, datasourceType) {
  const controlPanelConfig =
  // TODO: update `chartControlPanelRegistry` type to use ControlPanelConfig
  (0,ChartControlPanelRegistrySingleton/* default */.Z)().get(vizType) || {};
  return getMemoizedSectionsToRender(datasourceType, controlPanelConfig);
}
;// CONCATENATED MODULE: ./src/explore/controlUtils/getControlConfig.ts
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
 * Find control item from control panel config.
 */
function findControlItem(controlPanelSections, controlKey) {var _controlPanelSections;
  return (_controlPanelSections = controlPanelSections.
  map((section) => section.controlSetRows).
  flat(2).
  find((control) => controlKey === control ||
  control !== null &&
  typeof control === 'object' &&
  'name' in control &&
  control.name === controlKey)) != null ? _controlPanelSections : null;
}
const getMemoizedControlConfig = (0,memoize_one_esm/* default */.Z)((controlKey, controlPanelConfig) => {
  const { controlOverrides = {}, controlPanelSections = [] } = controlPanelConfig;
  const control = (0,expandControlConfig/* expandControlConfig */.q)(findControlItem(controlPanelSections, controlKey), controlOverrides);
  return control && 'config' in control ? control.config : control;
});
const getControlConfig_getControlConfig = function getControlConfig(controlKey, vizType) {
  const controlPanelConfig = (0,ChartControlPanelRegistrySingleton/* default */.Z)().get(vizType) || {};
  return getMemoizedControlConfig(controlKey, controlPanelConfig);
};
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/ensureIsArray.js
var ensureIsArray = __webpack_require__(86852);
;// CONCATENATED MODULE: ./src/explore/controlUtils/getControlState.ts



function execControlValidator(control, processedState) {
  const validators = control.validators;
  const { externalValidationErrors = [] } = control;
  const errors = [];
  if (validators && validators.length > 0) {
    validators.forEach((validator) => {
      const error = validator.call(control, control.value, processedState);
      if (error) {
        errors.push(error);
      }
    });
  }
  const validationErrors = [...errors, ...externalValidationErrors];
  // always reset validation errors even when there is no validator
  return { ...control, validationErrors };
}
/**
 * Clear control values that are no longer in the `choices` list.
 */
function handleMissingChoice(control) {
  // If the value is not valid anymore based on choices, clear it
  if (control.type === 'SelectControl' &&
  !control.freeForm &&
  control.choices &&
  control.value) {
    const alteredControl = { ...control };
    const choices = control.choices;
    const value = (0,ensureIsArray/* default */.Z)(control.value);
    const choiceValues = choices.map((c) => c[0]);
    if (control.multi && value.length > 0) {
      alteredControl.value = value.filter((el) => choiceValues.includes(el));
      return alteredControl;
    }
    if (!control.multi && !choiceValues.includes(value[0])) {
      alteredControl.value = null;
      return alteredControl;
    }
  }
  return control;
}
function applyMapStateToPropsToControl(controlState, controlPanelState) {
  const { mapStateToProps } = controlState;
  let state = { ...controlState };
  let { value } = state; // value is current user-input value
  if (mapStateToProps && controlPanelState) {
    state = {
      ...controlState,
      ...mapStateToProps.call(controlState, controlPanelState, controlState) };

    // `mapStateToProps` may also provide a value
    value = value || state.value;
  }
  // If default is a function, evaluate it
  if (typeof state.default === 'function') {
    state.default = state.default(state, controlPanelState);
    // if default is still a function, discard
    if (typeof state.default === 'function') {
      delete state.default;
    }
  }
  // If no current value, set it as default
  if (state.default && value === undefined) {
    value = state.default;
  }
  // If a choice control went from multi=false to true, wrap value in array
  if (value && state.multi && !Array.isArray(value)) {
    value = [value];
  }
  state.value = value;
  return execControlValidator(handleMissingChoice(state), state);
}
function getControlStateFromControlConfig(controlConfig, controlPanelState, value) {
  // skip invalid config values
  if (!controlConfig) {
    return null;
  }
  const controlState = { ...controlConfig, value };
  // only apply mapStateToProps when control states have been initialized
  // or when explicitly didn't provide control panel state (mostly for testing)
  if (controlPanelState && controlPanelState.controls ||
  controlPanelState === null) {
    return applyMapStateToPropsToControl(controlState, controlPanelState);
  }
  return controlState;
}
function getControlState(controlKey, vizType, state, value) {
  return getControlStateFromControlConfig(getControlConfig(controlKey, vizType), state, value);
}
function getAllControlsState(vizType, datasourceType, state, formData) {
  const controlsState = {};
  getSectionsToRender(vizType, datasourceType).forEach((section) => section.controlSetRows.forEach((fieldsetRow) => fieldsetRow.forEach((field) => {
    if (field && field.config && field.name) {
      const { config, name } = field;
      controlsState[name] = getControlStateFromControlConfig(config, state, formData[name]);
    }
  })));
  return controlsState;
}
;// CONCATENATED MODULE: ./src/explore/controlUtils/getFormDataFromControls.ts
function getFormDataFromControls(controlsState) {
  const formData = {
    viz_type: 'table',
    datasource: '' };

  Object.keys(controlsState).forEach((controlName) => {
    const control = controlsState[controlName];
    formData[controlName] = control.value;
  });
  return formData;
}
;// CONCATENATED MODULE: ./src/explore/controlUtils/index.ts
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

/***/ 3741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W9": () => (/* binding */ LOG_ACTIONS_LOAD_CHART),
/* harmony export */   "aD": () => (/* binding */ LOG_ACTIONS_RENDER_CHART),
/* harmony export */   "Ev": () => (/* binding */ LOG_ACTIONS_HIDE_BROWSER_TAB),
/* harmony export */   "Wl": () => (/* binding */ LOG_ACTIONS_MOUNT_DASHBOARD),
/* harmony export */   "$b": () => (/* binding */ LOG_ACTIONS_MOUNT_EXPLORER),
/* harmony export */   "Iq": () => (/* binding */ LOG_ACTIONS_SELECT_DASHBOARD_TAB),
/* harmony export */   "TD": () => (/* binding */ LOG_ACTIONS_FORCE_REFRESH_CHART),
/* harmony export */   "Ep": () => (/* binding */ LOG_ACTIONS_CHANGE_EXPLORE_CONTROLS),
/* harmony export */   "vH": () => (/* binding */ LOG_ACTIONS_TOGGLE_EDIT_DASHBOARD),
/* harmony export */   "H3": () => (/* binding */ LOG_ACTIONS_FORCE_REFRESH_DASHBOARD),
/* harmony export */   "S": () => (/* binding */ LOG_ACTIONS_PERIODIC_RENDER_DASHBOARD),
/* harmony export */   "oK": () => (/* binding */ LOG_ACTIONS_EXPLORE_DASHBOARD_CHART),
/* harmony export */   "PC": () => (/* binding */ LOG_ACTIONS_EXPORT_CSV_DASHBOARD_CHART),
/* harmony export */   "Qg": () => (/* binding */ LOG_ACTIONS_CHANGE_DASHBOARD_FILTER),
/* harmony export */   "tB": () => (/* binding */ LOG_ACTIONS_OMNIBAR_TRIGGERED),
/* harmony export */   "TY": () => (/* binding */ LOG_EVENT_TYPE_TIMING),
/* harmony export */   "Yd": () => (/* binding */ Logger)
/* harmony export */ });
/* unused harmony export LOG_EVENT_TYPE_USER */
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
// Log event names ------------------------------------------------------------
const LOG_ACTIONS_LOAD_CHART = 'load_chart';
const LOG_ACTIONS_RENDER_CHART = 'render_chart';
const LOG_ACTIONS_HIDE_BROWSER_TAB = 'hide_browser_tab';
const LOG_ACTIONS_MOUNT_DASHBOARD = 'mount_dashboard';
const LOG_ACTIONS_MOUNT_EXPLORER = 'mount_explorer';
const LOG_ACTIONS_SELECT_DASHBOARD_TAB = 'select_dashboard_tab';
const LOG_ACTIONS_FORCE_REFRESH_CHART = 'force_refresh_chart';
const LOG_ACTIONS_CHANGE_EXPLORE_CONTROLS = 'change_explore_controls';
const LOG_ACTIONS_TOGGLE_EDIT_DASHBOARD = 'toggle_edit_dashboard';
const LOG_ACTIONS_FORCE_REFRESH_DASHBOARD = 'force_refresh_dashboard';
const LOG_ACTIONS_PERIODIC_RENDER_DASHBOARD = 'periodic_render_dashboard';
const LOG_ACTIONS_EXPLORE_DASHBOARD_CHART = 'explore_dashboard_chart';
const LOG_ACTIONS_EXPORT_CSV_DASHBOARD_CHART = 'export_csv_dashboard_chart';
const LOG_ACTIONS_CHANGE_DASHBOARD_FILTER = 'change_dashboard_filter';
const LOG_ACTIONS_OMNIBAR_TRIGGERED = 'omnibar_triggered';
// Log event types --------------------------------------------------------------
const LOG_EVENT_TYPE_TIMING = new Set([
LOG_ACTIONS_LOAD_CHART,
LOG_ACTIONS_RENDER_CHART,
LOG_ACTIONS_HIDE_BROWSER_TAB]);

const LOG_EVENT_TYPE_USER = new Set([
LOG_ACTIONS_MOUNT_DASHBOARD,
LOG_ACTIONS_SELECT_DASHBOARD_TAB,
LOG_ACTIONS_EXPLORE_DASHBOARD_CHART,
LOG_ACTIONS_FORCE_REFRESH_CHART,
LOG_ACTIONS_EXPORT_CSV_DASHBOARD_CHART,
LOG_ACTIONS_CHANGE_DASHBOARD_FILTER,
LOG_ACTIONS_CHANGE_EXPLORE_CONTROLS,
LOG_ACTIONS_TOGGLE_EDIT_DASHBOARD,
LOG_ACTIONS_FORCE_REFRESH_DASHBOARD,
LOG_ACTIONS_PERIODIC_RENDER_DASHBOARD,
LOG_ACTIONS_OMNIBAR_TRIGGERED,
LOG_ACTIONS_MOUNT_EXPLORER]);

const Logger = {
  timeOriginOffset: 0,
  markTimeOrigin() {
    this.timeOriginOffset = window.performance.now();
  },
  // note that this returns ms since last navigation, NOT ms since epoch
  getTimestamp() {
    return Math.round(window.performance.now() - this.timeOriginOffset);
  } };

/***/ }),

/***/ 97381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOG_EVENT": () => (/* binding */ LOG_EVENT),
/* harmony export */   "logEvent": () => (/* binding */ logEvent)
/* harmony export */ });
const LOG_EVENT = 'LOG_EVENT';
function logEvent(eventName, eventData) {
  return (dispatch) => dispatch({
    type: LOG_EVENT,
    payload: {
      eventName,
      eventData } });


}

/***/ }),

/***/ 77997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YJ": () => (/* binding */ waitForAsyncData)
/* harmony export */ });
/* unused harmony exports init, processEvents */
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86852);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85639);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21173);
/* harmony import */ var _featureFlags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91877);
/* harmony import */ var _featureFlags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46415);
/* harmony import */ var _utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98286);
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



const TRANSPORT_POLLING = 'polling';
const TRANSPORT_WS = 'ws';
const JOB_STATUS = {
  PENDING: 'pending',
  RUNNING: 'running',
  ERROR: 'error',
  DONE: 'done' };

const LOCALSTORAGE_KEY = 'last_async_event_id';
const POLLING_URL = '/api/v1/async_event/';
const MAX_RETRIES = 6;
const RETRY_DELAY = 100;
let config;
let transport;
let pollingDelayMs;
let pollingTimeoutId;
let listenersByJobId;
let retriesByJobId;
let lastReceivedEventId;
const init = (appConfig) => {
  if (!(0,_featureFlags__WEBPACK_IMPORTED_MODULE_1__/* .isFeatureEnabled */ .cr)(_featureFlags__WEBPACK_IMPORTED_MODULE_2__/* .FeatureFlag.GLOBAL_ASYNC_QUERIES */ .T.GLOBAL_ASYNC_QUERIES))
  return;
  if (pollingTimeoutId)
  clearTimeout(pollingTimeoutId);
  listenersByJobId = {};
  retriesByJobId = {};
  lastReceivedEventId = null;
  if (appConfig) {
    config = appConfig;
  } else
  {
    // load bootstrap data from DOM
    const appContainer = document.getElementById('app');
    if (appContainer) {var _bootstrapData$common;
      const bootstrapData = JSON.parse((appContainer == null ? void 0 : appContainer.getAttribute('data-bootstrap')) || '{}');
      config = bootstrapData == null ? void 0 : (_bootstrapData$common = bootstrapData.common) == null ? void 0 : _bootstrapData$common.conf;
    } else
    {
      config = {};
      console.warn('asyncEvent: app config data not found');
    }
  }
  transport = config.GLOBAL_ASYNC_QUERIES_TRANSPORT || TRANSPORT_POLLING;
  pollingDelayMs = config.GLOBAL_ASYNC_QUERIES_POLLING_DELAY || 500;
  try {
    lastReceivedEventId = localStorage.getItem(LOCALSTORAGE_KEY);
  }
  catch (err) {
    console.warn('Failed to fetch last event Id from localStorage');
  }
  if (transport === TRANSPORT_POLLING) {
    loadEventsFromApi();
  }
  if (transport === TRANSPORT_WS) {
    wsConnect();
  }
};
const addListener = (id, fn) => {
  listenersByJobId[id] = fn;
};
const removeListener = (id) => {
  if (!listenersByJobId[id])
  return;
  delete listenersByJobId[id];
};
const waitForAsyncData = async (asyncResponse) => new Promise((resolve, reject) => {
  const jobId = asyncResponse.job_id;
  const listener = async (asyncEvent) => {
    switch (asyncEvent.status) {
      case JOB_STATUS.DONE:{
          let { data, status } = await fetchCachedData(asyncEvent); // eslint-disable-line prefer-const
          data = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(data);
          if (status === 'success') {
            resolve(data);
          } else
          {
            reject(data);
          }
          break;
        }
      case JOB_STATUS.ERROR:{
          const err = (0,_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_0__/* .parseErrorJson */ .M)(asyncEvent);
          reject(err);
          break;
        }
      default:{
          console.warn('received event with status', asyncEvent.status);
        }}

    removeListener(jobId);
  };
  addListener(jobId, listener);
});
const fetchEvents = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
  method: 'GET',
  endpoint: POLLING_URL });

const fetchCachedData = async (asyncEvent) => {
  let status = 'success';
  let data;
  try {
    const { json } = await _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get({
      endpoint: String(asyncEvent.result_url) });

    data = 'result' in json ? json.result : json;
  }
  catch (response) {
    status = 'error';
    data = await (0,_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_0__/* .getClientErrorObject */ .O)(response);
  }
  return { status, data };
};
const setLastId = (asyncEvent) => {
  lastReceivedEventId = asyncEvent.id;
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, lastReceivedEventId);
  }
  catch (err) {
    console.warn('Error saving event Id to localStorage', err);
  }
};
const loadEventsFromApi = async () => {
  const eventArgs = lastReceivedEventId ? { last_id: lastReceivedEventId } : {};
  if (Object.keys(listenersByJobId).length) {
    try {
      const { result: events } = await fetchEvents(eventArgs);
      if (events && events.length)
      await processEvents(events);
    }
    catch (err) {
      console.warn(err);
    }
  }
  if (transport === TRANSPORT_POLLING) {
    pollingTimeoutId = window.setTimeout(loadEventsFromApi, pollingDelayMs);
  }
};
const processEvents = async (events) => {
  events.forEach((asyncEvent) => {
    const jobId = asyncEvent.job_id;
    const listener = listenersByJobId[jobId];
    if (listener) {
      listener(asyncEvent);
      delete retriesByJobId[jobId];
    } else
    {
      // handle race condition where event is received
      // before listener is registered
      if (!retriesByJobId[jobId])
      retriesByJobId[jobId] = 0;
      retriesByJobId[jobId] += 1;
      if (retriesByJobId[jobId] <= MAX_RETRIES) {
        setTimeout(() => {
          processEvents([asyncEvent]);
        }, RETRY_DELAY * retriesByJobId[jobId]);
      } else
      {
        delete retriesByJobId[jobId];
        console.warn('listener not found for job_id', asyncEvent.job_id);
      }
    }
    setLastId(asyncEvent);
  });
};
const wsConnectMaxRetries = 6;
const wsConnectErrorDelay = 2500;
let wsConnectRetries = 0;
let wsConnectTimeout;
let ws;
const wsConnect = () => {
  let url = config.GLOBAL_ASYNC_QUERIES_WEBSOCKET_URL;
  if (lastReceivedEventId)
  url += `?last_id=${lastReceivedEventId}`;
  ws = new WebSocket(url);
  ws.addEventListener('open', (event) => {
    console.log('WebSocket connected');
    clearTimeout(wsConnectTimeout);
    wsConnectRetries = 0;
  });
  ws.addEventListener('close', (event) => {
    wsConnectTimeout = setTimeout(() => {
      wsConnectRetries += 1;
      if (wsConnectRetries <= wsConnectMaxRetries) {
        wsConnect();
      } else
      {
        console.warn('WebSocket not available, falling back to async polling');
        loadEventsFromApi();
      }
    }, wsConnectErrorDelay);
  });
  ws.addEventListener('error', (event) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState
    if (ws.readyState < 2)
    ws.close();
  });
  ws.addEventListener('message', async (event) => {
    let events = [];
    try {
      events = [JSON.parse(event.data)];
      await processEvents(events);
    }
    catch (err) {
      console.warn(err);
    }
  });
};
init();

/***/ }),

/***/ 8911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* Licensed to the Apache Software Foundation (ASF) under one
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
/* eslint-disable global-require */
const loadModule = () => {
  let module;
  try {
    // @ts-ignore
    module = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../superset_text'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // eslint-disable-line import/no-unresolved
  }
  catch (e) {
    module = {};
  }
  return module;
};
const supersetText = loadModule();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supersetText);

/***/ }),

/***/ 23525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getUrlParam),
/* harmony export */   "O": () => (/* binding */ getShortUrl)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94435);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21173);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15926);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getClientErrorObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98286);
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * 'License'); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



function getUrlParam({ name, type }) {
  const urlParam = new (_babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_0___default())(window.location.search).get(name);
  switch (type) {
    case 'number':
      if (!urlParam) {
        return null;
      }
      if (urlParam === 'true') {
        return 1;
      }
      if (urlParam === 'false') {
        return 0;
      }
      if (!Number.isNaN(Number(urlParam))) {
        return Number(urlParam);
      }
      return null;
    case 'object':
      if (!urlParam) {
        return null;
      }
      return JSON.parse(urlParam);
    case 'boolean':
      if (!urlParam) {
        return null;
      }
      return urlParam !== 'false' && urlParam !== '0';
    case 'rison':
      if (!urlParam) {
        return null;
      }
      try {
        return rison__WEBPACK_IMPORTED_MODULE_1___default().decode(urlParam);
      }
      catch {
        return null;
      }
    default:
      return urlParam;}

}
function getShortUrl(longUrl) {
  return _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"].post */ .Z.post({
    endpoint: '/r/shortner/',
    postPayload: { data: `/${longUrl}` },
    parseMethod: 'text',
    stringify: false // the url saves with an extra set of string quotes without this
  }).
  then(({ text }) => text).
  catch((response) =>
  // @ts-ignore
  (0,_getClientErrorObject__WEBPACK_IMPORTED_MODULE_2__/* .getClientErrorObject */ .O)(response).then(({ error, statusText }) => Promise.reject(error || statusText)));
}

/***/ }),

/***/ 52389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IV": () => (/* binding */ PAGE_SIZE),
/* harmony export */   "dY": () => (/* binding */ SORT_BY),
/* harmony export */   "iX": () => (/* binding */ PASSWORDS_NEEDED_MESSAGE),
/* harmony export */   "mI": () => (/* binding */ CONFIRM_OVERWRITE_MESSAGE)
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

const PAGE_SIZE = 25;
const SORT_BY = [{ id: 'changed_on_delta_humanized', desc: true }];
const PASSWORDS_NEEDED_MESSAGE = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('The passwords for the databases below are needed in order to ' +
'import them together with the datasets. Please note that the ' +
'"Secure Extra" and "Certificate" sections of ' +
'the database configuration are not present in export files, and ' +
'should be added manually after the import if they are needed.');
const CONFIRM_OVERWRITE_MESSAGE = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('You are importing one or more datasets that already exist. ' +
'Overwriting might cause you to lose some of your work. Are you ' +
'sure you want to overwrite?');

/***/ }),

/***/ 34858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yi": () => (/* binding */ useListViewResource),
/* harmony export */   "LE": () => (/* binding */ useSingleViewResource),
/* harmony export */   "PW": () => (/* binding */ useImportResource),
/* harmony export */   "NE": () => (/* binding */ useFavoriteStatus),
/* harmony export */   "fF": () => (/* binding */ useChartEditModal),
/* harmony export */   "bR": () => (/* binding */ copyQueryLink),
/* harmony export */   "rM": () => (/* binding */ getDatabaseImages),
/* harmony export */   "jb": () => (/* binding */ getConnectionAlert),
/* harmony export */   "z": () => (/* binding */ getDatabaseDocumentationLinks),
/* harmony export */   "xx": () => (/* binding */ testDatabaseConnection),
/* harmony export */   "cb": () => (/* binding */ useAvailableDatabases),
/* harmony export */   "h1": () => (/* binding */ useDatabaseValidation)
/* harmony export */ });
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15926);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21173);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60650);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85639);
/* harmony import */ var src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40768);
/* harmony import */ var src_utils_copy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10222);
/* harmony import */ var src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98286);
/* harmony import */ var src_utils_textUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8911);
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







const parsedErrorMessage = (errorMessage) => {
  if (typeof errorMessage === 'string') {
    return errorMessage;
  }
  return Object.entries(errorMessage).
  map(([key, value]) => {
    if (Array.isArray(value)) {
      return `(${key}) ${value.join(', ')}`;
    }
    return `(${key}) ${value}`;
  }).
  join('\n');
};
function useListViewResource(resource, resourceLabel, // resourceLabel for translations
handleErrorMsg, infoEnable = true, defaultCollectionValue = [], baseFilters, // must be memoized
initialLoadingState = true) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    count: 0,
    collection: defaultCollectionValue,
    loading: initialLoadingState,
    lastFetchDataConfig: null,
    permissions: [],
    bulkSelectEnabled: false });

  function updateState(update) {
    setState((currentState) => ({ ...currentState, ...update }));
  }
  function toggleBulkSelect() {
    updateState({ bulkSelectEnabled: !state.bulkSelectEnabled });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!infoEnable)
    return;
    _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get({
      endpoint: `/api/v1/${resource}/_info?q=${rison__WEBPACK_IMPORTED_MODULE_0___default().encode({
        keys: ['permissions'] })
      }` }).
    then(({ json: infoJson = {} }) => {
      updateState({
        permissions: infoJson.permissions });

    }, (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_2__/* .createErrorHandler */ .v$)((errMsg) => handleErrorMsg((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('An error occurred while fetching %s info: %s', resourceLabel, errMsg))));
  }, []);
  function hasPerm(perm) {
    if (!state.permissions.length) {
      return false;
    }
    return Boolean(state.permissions.find((p) => p === perm));
  }
  const fetchData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ pageIndex, pageSize, sortBy, filters: filterValues }) => {
    // set loading state, cache the last config for refreshing data.
    updateState({
      lastFetchDataConfig: {
        filters: filterValues,
        pageIndex,
        pageSize,
        sortBy },

      loading: true });

    const filterExps = (baseFilters || []).
    concat(filterValues).
    map(({ id, operator: opr, value }) => ({
      col: id,
      opr,
      value: value && typeof value === 'object' && 'value' in value ?
      value.value :
      value }));

    const queryParams = rison__WEBPACK_IMPORTED_MODULE_0___default().encode({
      order_column: sortBy[0].id,
      order_direction: sortBy[0].desc ? 'desc' : 'asc',
      page: pageIndex,
      page_size: pageSize,
      ...(filterExps.length ? { filters: filterExps } : {}) });

    return _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get({
      endpoint: `/api/v1/${resource}/?q=${queryParams}` }).

    then(({ json = {} }) => {
      updateState({
        collection: json.result,
        count: json.count,
        lastFetched: new Date().toISOString() });

    }, (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_2__/* .createErrorHandler */ .v$)((errMsg) => handleErrorMsg((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('An error occurred while fetching %ss: %s', resourceLabel, errMsg)))).
    finally(() => {
      updateState({ loading: false });
    });
  }, [baseFilters]);
  return {
    state: {
      loading: state.loading,
      resourceCount: state.count,
      resourceCollection: state.collection,
      bulkSelectEnabled: state.bulkSelectEnabled,
      lastFetched: state.lastFetched },

    setResourceCollection: (update) => updateState({
      collection: update }),

    hasPerm,
    fetchData,
    toggleBulkSelect,
    refreshData: (provideConfig) => {
      if (state.lastFetchDataConfig) {
        return fetchData(state.lastFetchDataConfig);
      }
      if (provideConfig) {
        return fetchData(provideConfig);
      }
      return null;
    } };

}
function useSingleViewResource(resourceName, resourceLabel, // resourceLabel for translations
handleErrorMsg) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    loading: false,
    resource: null,
    error: null });

  function updateState(update) {
    setState((currentState) => ({ ...currentState, ...update }));
  }
  const fetchResource = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((resourceID) => {
    // Set loading state
    updateState({
      loading: true });

    return _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get({
      endpoint: `/api/v1/${resourceName}/${resourceID}` }).

    then(({ json = {} }) => {
      updateState({
        resource: json.result,
        error: null });

      return json.result;
    }, (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_2__/* .createErrorHandler */ .v$)((errMsg) => {
      handleErrorMsg((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('An error occurred while fetching %ss: %s', resourceLabel, parsedErrorMessage(errMsg)));
      updateState({
        error: errMsg });

    })).
    finally(() => {
      updateState({ loading: false });
    });
  }, [handleErrorMsg, resourceName, resourceLabel]);
  const createResource = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((resource, hideToast = false) => {
    // Set loading state
    updateState({
      loading: true });

    return _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"].post */ .Z.post({
      endpoint: `/api/v1/${resourceName}/`,
      body: JSON.stringify(resource),
      headers: { 'Content-Type': 'application/json' } }).

    then(({ json = {} }) => {
      updateState({
        resource: { id: json.id, ...json.result },
        error: null });

      return json.id;
    }, (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_2__/* .createErrorHandler */ .v$)((errMsg) => {
      // we did not want toasts for db-connection-ui but did not want to disable it everywhere
      if (!hideToast) {
        handleErrorMsg((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('An error occurred while creating %ss: %s', resourceLabel, parsedErrorMessage(errMsg)));
      }
      updateState({
        error: errMsg });

    })).
    finally(() => {
      updateState({ loading: false });
    });
  }, [handleErrorMsg, resourceName, resourceLabel]);
  const updateResource = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((resourceID, resource, hideToast = false) => {
    // Set loading state
    updateState({
      loading: true });

    return _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"].put */ .Z.put({
      endpoint: `/api/v1/${resourceName}/${resourceID}`,
      body: JSON.stringify(resource),
      headers: { 'Content-Type': 'application/json' } }).

    then(({ json = {} }) => {
      updateState({
        resource: { ...json.result, id: json.id },
        error: null });

      return json.result;
    }, (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_2__/* .createErrorHandler */ .v$)((errMsg) => {
      if (!hideToast) {
        handleErrorMsg((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('An error occurred while fetching %ss: %s', resourceLabel, JSON.stringify(errMsg)));
      }
      updateState({
        error: errMsg });

      return errMsg;
    })).
    finally(() => {
      updateState({ loading: false });
    });
  }, [handleErrorMsg, resourceName, resourceLabel]);
  const clearError = () => updateState({
    error: null });

  return {
    state,
    setResource: (update) => updateState({
      resource: update }),

    fetchResource,
    createResource,
    updateResource,
    clearError };

}
function useImportResource(resourceName, resourceLabel, // resourceLabel for translations
handleErrorMsg) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    loading: false,
    passwordsNeeded: [],
    alreadyExists: [] });

  function updateState(update) {
    setState((currentState) => ({ ...currentState, ...update }));
  }
  const importResource = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((bundle, databasePasswords = {}, overwrite = false) => {
    // Set loading state
    updateState({
      loading: true });

    const formData = new FormData();
    formData.append('formData', bundle);
    /* The import bundle never contains database passwords; if required
     * they should be provided by the user during import.
     */
    if (databasePasswords) {
      formData.append('passwords', JSON.stringify(databasePasswords));
    }
    /* If the imported model already exists the user needs to confirm
     * that they want to overwrite it.
     */
    if (overwrite) {
      formData.append('overwrite', 'true');
    }
    return _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"].post */ .Z.post({
      endpoint: `/api/v1/${resourceName}/import/`,
      body: formData,
      headers: { Accept: 'application/json' } }).

    then(() => true).
    catch((response) => (0,src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_3__/* .getClientErrorObject */ .O)(response).then((error) => {
      if (!error.errors) {
        handleErrorMsg((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('An error occurred while importing %s: %s', resourceLabel, error.message || error.error));
        return false;
      }
      if ((0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_2__/* .hasTerminalValidation */ .Er)(error.errors)) {
        handleErrorMsg((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('An error occurred while importing %s: %s', resourceLabel, error.errors.map((payload) => payload.message).join('\n')));
      } else
      {
        updateState({
          passwordsNeeded: (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_2__/* .getPasswordsNeeded */ .$u)(error.errors),
          alreadyExists: (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_2__/* .getAlreadyExists */ .cE)(error.errors) });

      }
      return false;
    })).
    finally(() => {
      updateState({ loading: false });
    });
  }, []);
  return { state, importResource };
}
var FavStarClassName;
(function (FavStarClassName) {
  FavStarClassName["CHART"] = "slice";
  FavStarClassName["DASHBOARD"] = "Dashboard";
})(FavStarClassName || (FavStarClassName = {}));
const favoriteApis = {
  chart: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
    requestType: 'rison',
    method: 'GET',
    endpoint: '/api/v1/chart/favorite_status/' }),

  dashboard: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
    requestType: 'rison',
    method: 'GET',
    endpoint: '/api/v1/dashboard/favorite_status/' }) };


function useFavoriteStatus(type, ids, handleErrorMsg) {
  const [favoriteStatus, setFavoriteStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const updateFavoriteStatus = (update) => setFavoriteStatus((currentState) => ({ ...currentState, ...update }));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!ids.length) {
      return;
    }
    favoriteApis[type](ids).then(({ result }) => {
      const update = result.reduce((acc, element) => {
        acc[element.id] = element.value;
        return acc;
      }, {});
      updateFavoriteStatus(update);
    }, (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_2__/* .createErrorHandler */ .v$)((errMsg) => handleErrorMsg((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('There was an error fetching the favorite status: %s', errMsg))));
  }, [ids, type, handleErrorMsg]);
  const saveFaveStar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id, isStarred) => {
    const urlSuffix = isStarred ? 'unselect' : 'select';
    _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get({
      endpoint: `/superset/favstar/${type === 'chart' ? FavStarClassName.CHART : FavStarClassName.DASHBOARD}/${id}/${urlSuffix}/` }).
    then(({ json }) => {
      updateFavoriteStatus({
        [id]: (json == null ? void 0 : json.count) > 0 });

    }, (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_2__/* .createErrorHandler */ .v$)((errMsg) => handleErrorMsg((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('There was an error saving the favorite status: %s', errMsg))));
  }, [type]);
  return [saveFaveStar, favoriteStatus];
}
const useChartEditModal = (setCharts, charts) => {
  const [sliceCurrentlyEditing, setSliceCurrentlyEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  function openChartEditModal(chart) {
    setSliceCurrentlyEditing({
      slice_id: chart.id,
      slice_name: chart.slice_name,
      description: chart.description,
      cache_timeout: chart.cache_timeout,
      certified_by: chart.certified_by,
      certification_details: chart.certification_details });

  }
  function closeChartEditModal() {
    setSliceCurrentlyEditing(null);
  }
  function handleChartUpdated(edits) {
    // update the chart in our state with the edited info
    const newCharts = charts.map((chart) => chart.id === edits.id ? { ...chart, ...edits } : chart);
    setCharts(newCharts);
  }
  return {
    sliceCurrentlyEditing,
    handleChartUpdated,
    openChartEditModal,
    closeChartEditModal };

};
const copyQueryLink = (id, addDangerToast, addSuccessToast) => {
  (0,src_utils_copy__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(`${window.location.origin}/superset/sqllab?savedQueryId=${id}`).
  then(() => {
    addSuccessToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('Link Copied!'));
  }).
  catch(() => {
    addDangerToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('Sorry, your browser does not support copying.'));
  });
};
const getDatabaseImages = () => src_utils_textUtils__WEBPACK_IMPORTED_MODULE_4__/* ["default"].DB_IMAGES */ .Z.DB_IMAGES;
const getConnectionAlert = () => src_utils_textUtils__WEBPACK_IMPORTED_MODULE_4__/* ["default"].DB_CONNECTION_ALERTS */ .Z.DB_CONNECTION_ALERTS;
const getDatabaseDocumentationLinks = () => src_utils_textUtils__WEBPACK_IMPORTED_MODULE_4__/* ["default"].DB_CONNECTION_DOC_LINKS */ .Z.DB_CONNECTION_DOC_LINKS;
const testDatabaseConnection = (connection, handleErrorMsg, addSuccessToast) => {
  _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"].post */ .Z.post({
    endpoint: 'api/v1/database/test_connection',
    body: JSON.stringify(connection),
    headers: { 'Content-Type': 'application/json' } }).
  then(() => {
    addSuccessToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('Connection looks good!'));
  }, (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_2__/* .createErrorHandler */ .v$)((errMsg) => {
    handleErrorMsg((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)(`${(0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('ERROR: ')}${parsedErrorMessage(errMsg)}`));
  }));
};
function useAvailableDatabases() {
  const [availableDbs, setAvailableDbs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const getAvailable = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get({
      endpoint: `/api/v1/database/available/` }).
    then(({ json }) => {
      setAvailableDbs(json);
    });
  }, [setAvailableDbs]);
  return [availableDbs, getAvailable];
}
function useDatabaseValidation() {
  const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const getValidation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((database, onCreate = false) => {
    _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"].post */ .Z.post({
      endpoint: '/api/v1/database/validate_parameters',
      body: JSON.stringify(database),
      headers: { 'Content-Type': 'application/json' } }).

    then(() => {
      setValidationErrors(null);
    }).
    catch((e) => {
      if (typeof e.json === 'function') {
        e.json().then(({ errors = [] }) => {
          const parsedErrors = errors.
          filter((error) => {
            const skipValidationError = ![
            'CONNECTION_MISSING_PARAMETERS_ERROR',
            'CONNECTION_ACCESS_DENIED_ERROR'].
            includes(error.error_type);
            return skipValidationError || onCreate;
          }).
          reduce((obj, { error_type, extra, message }) => {
            if (extra.catalog) {
              if (extra.catalog.name) {
                return {
                  ...obj,
                  error_type,
                  [extra.catalog.idx]: {
                    name: message } };


              }
              if (extra.catalog.url) {
                return {
                  ...obj,
                  error_type,
                  [extra.catalog.idx]: {
                    url: message } };


              }
              return {
                ...obj,
                error_type,
                [extra.catalog.idx]: {
                  name: message,
                  url: message } };


            }
            // if extra.invalid doesn't exist then the
            // error can't be mapped to a parameter
            // so leave it alone
            if (extra.invalid) {
              return {
                ...obj,
                [extra.invalid[0]]: message,
                error_type };

            }
            if (extra.missing) {
              return {
                ...obj,
                error_type,
                ...Object.assign({}, ...extra.missing.map((field) => ({
                  [field]: 'This is a required field' }))) };


            }
            return obj;
          }, {});
          setValidationErrors(parsedErrors);
        });
      } else
      {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    });
  }, [setValidationErrors]);
  return [validationErrors, getValidation, setValidationErrors];
}

/***/ }),

/***/ 40768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IV": () => (/* binding */ PAGE_SIZE),
/* harmony export */   "Ld": () => (/* binding */ getEditedObjects),
/* harmony export */   "B1": () => (/* binding */ getUserOwnedObjects),
/* harmony export */   "Hn": () => (/* binding */ getRecentAcitivtyObjs),
/* harmony export */   "tm": () => (/* binding */ createFetchRelated),
/* harmony export */   "wk": () => (/* binding */ createFetchDistinct),
/* harmony export */   "v$": () => (/* binding */ createErrorHandler),
/* harmony export */   "Gm": () => (/* binding */ handleChartDelete),
/* harmony export */   "Iu": () => (/* binding */ handleDashboardDelete),
/* harmony export */   "IB": () => (/* binding */ shortenSQL),
/* harmony export */   "iv": () => (/* binding */ loadingCardCount),
/* harmony export */   "mq": () => (/* binding */ mq),
/* harmony export */   "_L": () => (/* binding */ CardContainer),
/* harmony export */   "ZB": () => (/* binding */ CardStyles),
/* harmony export */   "xL": () => (/* binding */ StyledIcon),
/* harmony export */   "$u": () => (/* binding */ getPasswordsNeeded),
/* harmony export */   "cE": () => (/* binding */ getAlreadyExists),
/* harmony export */   "Er": () => (/* binding */ hasTerminalValidation)
/* harmony export */ });
/* unused harmony exports isNeedsPassword, isAlreadyExists */
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21173);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23099);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11965);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15926);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98286);
/* harmony import */ var src_utils_textUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8911);
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




const createFetchResourceMethod = (method) => (resource, relation, handleError, user) => async (filterValue = '', page, pageSize) => {var _json$result;
  const resourceEndpoint = `/api/v1/${resource}/${method}/${relation}`;
  const queryParams = rison__WEBPACK_IMPORTED_MODULE_0___default().encode({
    filter: filterValue,
    page,
    page_size: pageSize });

  const { json = {} } = await _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get({
    endpoint: `${resourceEndpoint}?q=${queryParams}` });

  let fetchedLoggedUser = false;
  const loggedUser = user ?
  {
    label: `${user.firstName} ${user.lastName}`,
    value: user.userId } :

  undefined;
  const data = [];
  json == null ? void 0 : (_json$result = json.result) == null ? void 0 : _json$result.forEach(({ text, value }) => {
    if (loggedUser &&
    value === loggedUser.value &&
    text === loggedUser.label) {
      fetchedLoggedUser = true;
    } else
    {
      data.push({
        label: text,
        value });

    }
  });
  if (loggedUser && (!filterValue || fetchedLoggedUser)) {
    data.unshift(loggedUser);
  }
  return {
    data,
    totalCount: json == null ? void 0 : json.count };

};
const PAGE_SIZE = 5;
const getParams = (filters) => {
  const params = {
    order_column: 'changed_on_delta_humanized',
    order_direction: 'desc',
    page: 0,
    page_size: PAGE_SIZE,
    filters };

  if (!filters)
  delete params.filters;
  return rison__WEBPACK_IMPORTED_MODULE_0___default().encode(params);
};
const getEditedObjects = (userId) => {
  const filters = {
    edited: [
    {
      col: 'changed_by',
      opr: 'rel_o_m',
      value: `${userId}` }] };



  const batch = [
  _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get({
    endpoint: `/api/v1/dashboard/?q=${getParams(filters.edited)}` }),

  _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get({
    endpoint: `/api/v1/chart/?q=${getParams(filters.edited)}` })];


  return Promise.all(batch).
  then(([editedCharts, editedDashboards]) => {var _editedDashboards$jso, _editedCharts$json;
    const res = {
      editedDash: (_editedDashboards$jso = editedDashboards.json) == null ? void 0 : _editedDashboards$jso.result.slice(0, 3),
      editedChart: (_editedCharts$json = editedCharts.json) == null ? void 0 : _editedCharts$json.result.slice(0, 3) };

    return res;
  }).
  catch((err) => err);
};
const getUserOwnedObjects = (userId, resource) => {
  const filters = {
    created: [
    {
      col: 'created_by',
      opr: 'rel_o_m',
      value: `${userId}` }] };



  return _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get({
    endpoint: `/api/v1/${resource}/?q=${getParams(filters.created)}` }).
  then((res) => {var _res$json;return (_res$json = res.json) == null ? void 0 : _res$json.result;});
};
const getRecentAcitivtyObjs = (userId, recent, addDangerToast) => _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get({ endpoint: recent }).then((recentsRes) => {
  const res = {};
  const filters = [
  {
    col: 'created_by',
    opr: 'rel_o_m',
    value: 0 }];


  const newBatch = [
  _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get({
    endpoint: `/api/v1/chart/?q=${getParams(filters)}` }),

  _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get({
    endpoint: `/api/v1/dashboard/?q=${getParams(filters)}` })];


  return Promise.all(newBatch).
  then(([chartRes, dashboardRes]) => {
    res.examples = [...chartRes.json.result, ...dashboardRes.json.result];
    res.viewed = recentsRes.json;
    return res;
  }).
  catch((errMsg) => addDangerToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('There was an error fetching your recent activity:'), errMsg));
});
const createFetchRelated = createFetchResourceMethod('related');
const createFetchDistinct = createFetchResourceMethod('distinct');
function createErrorHandler(handleErrorFunc) {
  return async (e) => {
    const parsedError = await (0,src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_1__/* .getClientErrorObject */ .O)(e);
    // Taking the first error returned from the API
    // @ts-ignore
    const errorsArray = parsedError == null ? void 0 : parsedError.errors;
    const config = await src_utils_textUtils__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
    if (errorsArray &&
    errorsArray.length &&
    config &&
    config.ERRORS &&
    errorsArray[0].error_type in config.ERRORS) {
      parsedError.message = config.ERRORS[errorsArray[0].error_type];
    }
    _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"].error */ .Z.error(e);
    handleErrorFunc(parsedError.message || parsedError.error);
  };
}
function handleChartDelete({ id, slice_name: sliceName }, addSuccessToast, addDangerToast, refreshData, chartFilter, userId) {
  const filters = {
    pageIndex: 0,
    pageSize: PAGE_SIZE,
    sortBy: [
    {
      id: 'changed_on_delta_humanized',
      desc: true }],


    filters: [
    {
      id: 'created_by',
      operator: 'rel_o_m',
      value: `${userId}` }] };



  _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"]["delete"] */ .Z["delete"]({
    endpoint: `/api/v1/chart/${id}` }).
  then(() => {
    if (chartFilter === 'Mine')
    refreshData(filters);else

    refreshData();
    addSuccessToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('Deleted: %s', sliceName));
  }, () => {
    addDangerToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('There was an issue deleting: %s', sliceName));
  });
}
function handleDashboardDelete({ id, dashboard_title: dashboardTitle }, refreshData, addSuccessToast, addDangerToast, dashboardFilter, userId) {
  return _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"]["delete"] */ .Z["delete"]({
    endpoint: `/api/v1/dashboard/${id}` }).
  then(() => {
    const filters = {
      pageIndex: 0,
      pageSize: PAGE_SIZE,
      sortBy: [
      {
        id: 'changed_on_delta_humanized',
        desc: true }],


      filters: [
      {
        id: 'owners',
        operator: 'rel_m_m',
        value: `${userId}` }] };



    if (dashboardFilter === 'Mine')
    refreshData(filters);else

    refreshData();
    addSuccessToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('Deleted: %s', dashboardTitle));
  }, createErrorHandler((errMsg) => addDangerToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('There was an issue deleting %s: %s', dashboardTitle, errMsg))));
}
function shortenSQL(sql, maxLines) {
  let lines = sql.split('\n');
  if (lines.length >= maxLines) {
    lines = lines.slice(0, maxLines);
    lines.push('...');
  }
  return lines.join('\n');
}
// loading card count for homepage
const loadingCardCount = 5;
const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
const CardContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .styled.div */ .iK.div`
  ${({ showThumbnails, theme }) => `
    overflow: hidden;
    display: grid;
    grid-gap: ${theme.gridUnit * 12}px ${theme.gridUnit * 4}px;
    grid-template-columns: repeat(auto-fit, 300px);
    max-height: ${showThumbnails ? '314' : '148'}px;
    margin-top: ${theme.gridUnit * -6}px;
    padding: ${showThumbnails ?
`${theme.gridUnit * 8 + 3}px ${theme.gridUnit * 9}px` :
`${theme.gridUnit * 8 + 1}px ${theme.gridUnit * 9}px`};
  `}
`;
const CardStyles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .styled.div */ .iK.div`
  cursor: pointer;
  a {
    text-decoration: none;
  }
  .ant-card-cover > div {
    /* Height is calculated based on 300px width, to keep the same aspect ratio as the 800*450 thumbnails */
    height: 168px;
  }
`;
const StyledIcon = (theme) => _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__.css`
  margin: auto ${theme.gridUnit * 2}px auto 0;
  color: ${theme.colors.grayscale.base};
`;
const isNeedsPassword = (payload) => typeof payload === 'object' &&
Array.isArray(payload._schema) &&
payload._schema.length === 1 &&
payload._schema[0] === 'Must provide a password for the database';
const isAlreadyExists = (payload) => typeof payload === 'string' &&
payload.includes('already exists and `overwrite=true` was not passed');
const getPasswordsNeeded = (errors) => errors.
map((error) => Object.entries(error.extra).
filter(([, payload]) => isNeedsPassword(payload)).
map(([fileName]) => fileName)).
flat();
const getAlreadyExists = (errors) => errors.
map((error) => Object.entries(error.extra).
filter(([, payload]) => isAlreadyExists(payload)).
map(([fileName]) => fileName)).
flat();
const hasTerminalValidation = (errors) => errors.some((error) => !Object.values(error.extra).some((payload) => isNeedsPassword(payload) || isAlreadyExists(payload)));

/***/ })

}]);