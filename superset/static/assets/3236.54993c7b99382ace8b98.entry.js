"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[3236],{

/***/ 5951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14890);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37703);
/* harmony import */ var _ToastPresenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37355);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72570);
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






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__/* .connect */ .$j)(
({ messageToasts: toasts }) => ({ toasts }),
(dispatch) => (0,redux__WEBPACK_IMPORTED_MODULE_3__/* .bindActionCreators */ .DE)({ removeToast: _actions__WEBPACK_IMPORTED_MODULE_2__/* .removeToast */ .RS }, dispatch))(
_ToastPresenter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z));

/***/ }),

/***/ 61806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ messageToastsReducer)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72570);
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


function messageToastsReducer(toasts = [], action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__/* .ADD_TOAST */ .h:{
        const { payload: toast } = action;
        const result = toasts.slice();
        if (!toast.noDuplicate || !result.find((x) => x.text === toast.text)) {
          return [toast, ...toasts];
        }
        return toasts;
      }

    case _actions__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_TOAST */ .K7:{
        const {
          payload: { id } } =
        action;
        return [...toasts].filter((toast) => toast.id !== id);
      }

    default:
      return toasts;}

}

/***/ }),

/***/ 69600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ middleware_loggerMiddleware)
});

// EXTERNAL MODULE: ./node_modules/shortid/index.js
var shortid = __webpack_require__(14670);
var shortid_default = /*#__PURE__*/__webpack_require__.n(shortid);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./src/utils/safeStringify.ts
var safeStringify = __webpack_require__(9679);
// EXTERNAL MODULE: ./src/logger/actions/index.ts
var actions = __webpack_require__(97381);
// EXTERNAL MODULE: ./src/logger/LogUtils.ts
var LogUtils = __webpack_require__(3741);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
;// CONCATENATED MODULE: ./src/utils/DebouncedMessageQueue.js




















class DebouncedMessageQueue {
  constructor({
    callback = () => {},
    sizeThreshold = 1000,
    delayThreshold = 1000 })
  {
    this.queue = [];
    this.sizeThreshold = sizeThreshold;
    this.delayThrehold = delayThreshold;

    this.trigger = debounce_default()(this.trigger.bind(this), this.delayThrehold);
    this.callback = callback;
  }

  append(eventData) {
    this.queue.push(eventData);
    this.trigger();
  }

  trigger() {
    if (this.queue.length > 0) {
      const events = this.queue.splice(0, this.sizeThreshold);
      this.callback.call(null, events);

      // If there are remaining items, call it again.
      if (this.queue.length > 0) {
        this.trigger();
      }
    }
  }}


/* harmony default export */ const utils_DebouncedMessageQueue = (DebouncedMessageQueue);
;// CONCATENATED MODULE: ./src/middleware/loggerMiddleware.js
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
/* eslint prefer-const: 2 */








const LOG_ENDPOINT = '/superset/log/?explode=events';
const sendBeacon = (events) => {
  if (events.length <= 0) {
    return;
  }

  let endpoint = LOG_ENDPOINT;
  const { source, source_id } = events[0];
  // backend logs treat these request params as first-class citizens
  if (source === 'dashboard') {
    endpoint += `&dashboard_id=${source_id}`;
  } else if (source === 'slice') {
    endpoint += `&slice_id=${source_id}`;
  }

  if (navigator.sendBeacon) {
    const formData = new FormData();
    formData.append('events', (0,safeStringify/* safeStringify */.o)(events));
    navigator.sendBeacon(endpoint, formData);
  } else {
    SupersetClient/* default.post */.Z.post({
      endpoint,
      postPayload: { events },
      parseMethod: null });

  }
};

// beacon API has data size limit = 2^16.
// assume avg each log entry has 2^6 characters
const MAX_EVENTS_PER_REQUEST = 1024;
const logMessageQueue = new utils_DebouncedMessageQueue({
  callback: sendBeacon,
  sizeThreshold: MAX_EVENTS_PER_REQUEST,
  delayThreshold: 1000 });

let lastEventId = 0;
const loggerMiddleware = (store) => (next) => (action) => {var _dashboardLayout$pres;
  if (action.type !== actions.LOG_EVENT) {
    return next(action);
  }

  const {
    dashboardInfo,
    explore,
    impressionId,
    dashboardLayout } =
  store.getState();
  let logMetadata = {
    impression_id: impressionId,
    version: 'v2' };

  if (dashboardInfo) {
    logMetadata = {
      source: 'dashboard',
      source_id: dashboardInfo.id,
      ...logMetadata };

  } else if (explore) {
    logMetadata = {
      source: 'explore',
      source_id: explore.slice ? explore.slice.slice_id : 0,
      ...logMetadata };

  }

  const { eventName } = action.payload;
  let { eventData = {} } = action.payload;
  eventData = {
    ...logMetadata,
    ts: new Date().getTime(),
    event_name: eventName,
    ...eventData };

  if (LogUtils/* LOG_EVENT_TYPE_TIMING.has */.TY.has(eventName)) {
    eventData = {
      ...eventData,
      event_type: 'timing',
      trigger_event: lastEventId };

  } else {
    lastEventId = shortid_default().generate();
    eventData = {
      ...eventData,
      event_type: 'user',
      event_id: lastEventId,
      visibility: document.visibilityState };

  }

  if (eventData.target_id && dashboardLayout != null && (_dashboardLayout$pres = dashboardLayout.present) != null && _dashboardLayout$pres[eventData.target_id]) {
    const { meta } = dashboardLayout.present[eventData.target_id];
    // chart name or tab/header text
    eventData.target_name = meta.chartId ? meta.sliceName : meta.text;
  }

  logMessageQueue.append(eventData);
  return eventData;
};

/* harmony default export */ const middleware_loggerMiddleware = (loggerMiddleware);

/***/ }),

/***/ 16737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mG": () => (/* binding */ formatSelectOptions),
/* harmony export */   "n_": () => (/* binding */ getDatasourceParameter)
/* harmony export */ });
/* unused harmony export mainMetric */
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

function formatSelectOptions(options) {
  return options.map((opt) => [opt, opt.toString()]);
}

function getDatasourceParameter(datasourceId, datasourceType) {
  return `${datasourceId}__${datasourceType}`;
}

function mainMetric(savedMetrics) {
  // Using 'count' as default metric if it exists, otherwise using whatever one shows up first
  let metric;
  if (savedMetrics && savedMetrics.length > 0) {
    savedMetrics.forEach((m) => {
      if (m.metric_name === 'count') {
        metric = 'count';
      }
    });
    if (!metric) {
      metric = savedMetrics[0].metric_name;
    }
  }
  return metric;
}

/***/ }),

/***/ 61358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jt": () => (/* binding */ SET_REPORT),
/* harmony export */   "Aw": () => (/* binding */ fetchUISpecificReport),
/* harmony export */   "J8": () => (/* binding */ ADD_REPORT),
/* harmony export */   "cq": () => (/* binding */ addReport),
/* harmony export */   "Dr": () => (/* binding */ EDIT_REPORT),
/* harmony export */   "Me": () => (/* binding */ editReport),
/* harmony export */   "M": () => (/* binding */ toggleActive),
/* harmony export */   "MZ": () => (/* binding */ deleteActiveReport)
/* harmony export */ });
/* unused harmony export setReport */
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21173);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15926);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98286);
/* harmony import */ var src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72570);
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





const SET_REPORT = 'SET_REPORT';
function setReport(report) {
  return { type: SET_REPORT, report };
}

function fetchUISpecificReport(
userId,
filter_field,
creation_method,
dashboardId)
{
  const queryParams = rison__WEBPACK_IMPORTED_MODULE_0___default().encode({
    filters: [
    {
      col: filter_field,
      opr: 'eq',
      value: dashboardId },

    {
      col: 'creation_method',
      opr: 'eq',
      value: creation_method },

    {
      col: 'created_by',
      opr: 'rel_o_m',
      value: userId }] });



  return function fetchUISpecificReportThunk(dispatch) {
    return _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get({
      endpoint: `/api/v1/report/?q=${queryParams}` }).

    then(({ json }) => {
      dispatch(setReport(json));
    }).
    catch(() =>
    dispatch(
    (0,src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_2__/* .addDangerToast */ .Gb)(
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)(
    'There was an issue fetching reports attached to this dashboard.'))));




  };
}

const structureFetchAction = (dispatch, getState) => {
  const state = getState();
  const { user, dashboardInfo, charts, explore } = state;
  if (dashboardInfo) {
    dispatch(
    fetchUISpecificReport(
    user.userId,
    'dashboard_id',
    'dashboards',
    dashboardInfo.id));


  } else {
    const [chartArr] = Object.keys(charts);
    dispatch(
    fetchUISpecificReport(
    explore.user.userId,
    'chart_id',
    'charts',
    charts[chartArr].id));


  }
};

const ADD_REPORT = 'ADD_REPORT';

const addReport = (report) => (dispatch) =>
_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"].post */ .Z.post({
  endpoint: `/api/v1/report/`,
  jsonPayload: report }).

then(({ json }) => {
  dispatch({ type: ADD_REPORT, json });
  dispatch((0,src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_2__/* .addSuccessToast */ .ws)((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('The report has been created')));
}).
catch(async (e) => {
  const parsedError = await (0,src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_1__/* .getClientErrorObject */ .O)(e);
  const errorMessage = parsedError.message;
  const errorArr = Object.keys(errorMessage);
  const error = errorMessage[errorArr[0]];
  dispatch(
  (0,src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_2__/* .addDangerToast */ .Gb)(
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('An error occurred while editing this report: %s', error)));


});

const EDIT_REPORT = 'EDIT_REPORT';

function editReport(id, report) {
  return function (dispatch) {
    _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"].put */ .Z.put({
      endpoint: `/api/v1/report/${id}`,
      jsonPayload: report }).

    then(({ json }) => {
      dispatch({ type: EDIT_REPORT, json });
    }).
    catch(() =>
    dispatch(
    (0,src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_2__/* .addDangerToast */ .Gb)((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('An error occurred while editing this report.'))));


  };
}

function toggleActive(report, isActive) {
  return function toggleActiveThunk(dispatch) {
    return _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"].put */ .Z.put({
      endpoint: encodeURI(`/api/v1/report/${report.id}`),
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        active: isActive }) }).


    catch(() => {
      dispatch(
      (0,src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_2__/* .addDangerToast */ .Gb)(
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('We were unable to active or deactivate this report.')));


    }).
    finally(() => {
      dispatch(structureFetchAction);
    });
  };
}

function deleteActiveReport(report) {
  return function deleteActiveReportThunk(dispatch) {
    return _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"]["delete"] */ .Z["delete"]({
      endpoint: encodeURI(`/api/v1/report/${report.id}`) }).

    catch(() => {
      dispatch((0,src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_2__/* .addDangerToast */ .Gb)((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('Your report could not be deleted')));
    }).
    finally(() => {
      dispatch(structureFetchAction);
      dispatch((0,src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_2__/* .addSuccessToast */ .ws)((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('Deleted: %s', report.name)));
    });
  };
}

/***/ }),

/***/ 16471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ reportsReducer)
/* harmony export */ });
/* harmony import */ var _actions_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61358);
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


function reportsReducer(state = {}, action) {
  const actionHandlers = {
    [_actions_reports__WEBPACK_IMPORTED_MODULE_0__/* .SET_REPORT */ .jt]() {
      return {
        ...action.report.result.reduce(
        (obj, report) => ({ ...obj, [report.id]: report }),
        {}) };


    },
    [_actions_reports__WEBPACK_IMPORTED_MODULE_0__/* .ADD_REPORT */ .J8]() {
      const report = action.json.result;
      report.id = action.json.id;
      return {
        ...state,
        [action.json.id]: report };

    },
    [_actions_reports__WEBPACK_IMPORTED_MODULE_0__/* .EDIT_REPORT */ .Dr]() {
      const report = action.json.result;
      report.id = action.json.id;
      return {
        ...state,
        [action.json.id]: report };

    } };


  if (action.type in actionHandlers) {
    return actionHandlers[action.type]();
  }
  return state;
}

/***/ }),

/***/ 76634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* reexport */ useComponentDidMount)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/common/hooks/useComponentDidMount/useComponentDidMount.ts
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

const useComponentDidMount = (effect) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0,react.useEffect)(effect, []);
};
;// CONCATENATED MODULE: ./src/common/hooks/useComponentDidMount/index.ts
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

/***/ 83268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37840);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38097);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58593);
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




function CertifiedIcon({ certifiedBy, details, size = 'l' }) {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Tooltip */ .u, { id: "certified-details-tooltip", title: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    certifiedBy && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", null,
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('Certified by %s', certifiedBy))),

    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", null, details)) },

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Certified */ .Z.Certified, { iconColor: _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .supersetTheme.colors.primary.base */ .K6.colors.primary.base, iconSize: size }));

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CertifiedIcon);

/***/ }),

/***/ 17198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DeleteModal)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82191);
/* harmony import */ var src_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74069);
/* harmony import */ var src_components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49238);
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





const StyledDiv = _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .styled.div */ .iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({ theme }) => theme.colors.grayscale.light1};
    text-transform: uppercase;
  }
`;
const DescriptionContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .styled.div */ .iK.div`
  line-height: 40px;
  padding-top: 16px;
`;
function DeleteModal({ description, onConfirm, onHide, open, title }) {
  const [disableChange, setDisableChange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [confirmation, setConfirmation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const hide = () => {
    setConfirmation('');
    onHide();
  };
  const confirm = () => {
    setConfirmation('');
    onConfirm();
  };
  const onChange = (event) => {var _event$target$value;
    const targetValue = (_event$target$value = event.target.value) != null ? _event$target$value : '';
    setDisableChange(targetValue.toUpperCase() !== (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('DELETE'));
    setConfirmation(targetValue);
  };
  const onPressEnter = () => {
    if (!disableChange) {
      confirm();
    }
  };
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_components_Modal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { disablePrimaryButton: disableChange, onHide: hide, onHandledPrimaryAction: confirm, primaryButtonName: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('delete'), primaryButtonType: "danger", show: open, title: title },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(DescriptionContainer, null, description),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(StyledDiv, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_components_Form__WEBPACK_IMPORTED_MODULE_3__/* .FormLabel */ .lX, { htmlFor: "delete" },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Type "%s" to confirm', (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('DELETE'))),

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .II, { type: "text", id: "delete", autoComplete: "off", value: confirmation, onChange: onChange, onPressEnter: onPressEnter })));


}

/***/ }),

/***/ 14278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zn": () => (/* binding */ PluginContext),
/* harmony export */   "gp": () => (/* binding */ usePluginContext),
/* harmony export */   "EM": () => (/* binding */ DynamicPluginProvider)
/* harmony export */ });
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14176);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38849);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85639);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17390);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23099);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91877);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46415);
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




const metadataRegistry = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
const dummyPluginContext = {
  loading: true,
  dynamicPlugins: {},
  keys: [],
  mountedPluginMetadata: {},
  fetchAll: () => {} };

/**
 * It is highly recommended to use the usePluginContext hook instead.
 * @see usePluginContext
 */
const PluginContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(dummyPluginContext);
/**
 * The plugin context provides info about what dynamic plugins are available.
 * It also provides loading info for the plugins' javascript bundles.
 *
 * Note: This does not include any information about static plugins.
 * Those are compiled into the Superset bundle at build time.
 * Dynamic plugins are added by the end user and can be any webhosted javascript.
 */
const usePluginContext = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PluginContext);
function getRegistryData() {
  return {
    keys: metadataRegistry.keys(),
    mountedPluginMetadata: lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default()(metadataRegistry.getMap(), (value) => value === undefined) // cast required to get rid of undefined values
  };
}
function pluginContextReducer(state, action) {
  switch (action.type) {
    case 'begin':{
        const plugins = { ...state.dynamicPlugins };
        action.keys.forEach((key) => {
          plugins[key] = { key, error: null, mounting: true };
        });
        return {
          ...state,
          loading: action.keys.length > 0,
          dynamicPlugins: plugins };

      }
    case 'complete':{
        return {
          ...state,
          loading: Object.values(state.dynamicPlugins).some((plugin) => plugin.mounting && plugin.key !== action.key),
          dynamicPlugins: {
            ...state.dynamicPlugins,
            [action.key]: {
              key: action.key,
              mounting: false,
              error: action.error } } };



      }
    case 'changed keys':{
        return {
          ...state,
          ...getRegistryData() };

      }
    default:
      return state;}

}
const pluginApi = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
  method: 'GET',
  endpoint: '/dynamic-plugins/api/read' });

const sharedModules = {
  react: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 67294, 19)),
  lodash: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 96486, 23)),
  'react-dom': () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9060, 19)),
  '@superset-ui/chart-controls': () => Promise.all(/* import() */[__webpack_require__.e(1216), __webpack_require__.e(7211), __webpack_require__.e(7017), __webpack_require__.e(8483), __webpack_require__.e(5042)]).then(__webpack_require__.bind(__webpack_require__, 88483)),
  '@superset-ui/core': () => Promise.all(/* import() */[__webpack_require__.e(1216), __webpack_require__.e(7211), __webpack_require__.e(7017), __webpack_require__.e(6439)]).then(__webpack_require__.bind(__webpack_require__, 67017)) };

const DynamicPluginProvider = ({ children }) => {
  const [pluginState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(pluginContextReducer, dummyPluginContext, (state) => ({
    ...state,
    ...getRegistryData(),
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    fetchAll,
    loading: (0,src_featureFlags__WEBPACK_IMPORTED_MODULE_4__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_5__/* .FeatureFlag.DYNAMIC_PLUGINS */ .T.DYNAMIC_PLUGINS)
    // TODO: Write fetchByKeys
  }));
  // For now, we fetch all the plugins at the same time.
  // In the future it would be nice to fetch on an as-needed basis.
  // That will most likely depend on having a json manifest for each plugin.
  async function fetchAll() {
    try {
      await (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .defineSharedModules */ .YW)(sharedModules);
      const { result: plugins } = await pluginApi({});
      dispatch({ type: 'begin', keys: plugins.map((plugin) => plugin.key) });
      await Promise.all(plugins.map(async (plugin) => {
        let error = null;
        try {
          await import( /* webpackIgnore: true */plugin.bundle_url);
        }
        catch (err) {
          _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(`Failed to load plugin ${plugin.key} with the following error:`, err.stack);
          error = err;
        }
        dispatch({
          type: 'complete',
          key: plugin.key,
          error });

      }));
    }
    catch (error) {
      _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error('Failed to load dynamic plugins', error.stack || error);
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if ((0,src_featureFlags__WEBPACK_IMPORTED_MODULE_4__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_5__/* .FeatureFlag.DYNAMIC_PLUGINS */ .T.DYNAMIC_PLUGINS)) {
      fetchAll();
    }
    const registryListener = () => {
      dispatch({ type: 'changed keys' });
    };
    metadataRegistry.addListener(registryListener);
    return () => {
      metadataRegistry.removeListener(registryListener);
    };
  }, []);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(PluginContext.Provider, { value: pluginState },
  children);

};

/***/ }),

/***/ 36674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60650);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58593);
/* harmony import */ var src_common_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76634);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38097);
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





const StyledLink = _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .styled.a */ .iK.a`
  font-size: ${({ theme }) => theme.typography.sizes.xl}px;
  display: flex;
  padding: 0 0 0 0.5em;
`;
const FaveStar = ({ itemId, isStarred, showTooltip, saveFaveStar, fetchFaveStar }) => {
  (0,src_common_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_2__/* .useComponentDidMount */ .J)(() => {
    if (fetchFaveStar) {
      fetchFaveStar(itemId);
    }
  });
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
    e.preventDefault();
    saveFaveStar(itemId, !!isStarred);
  }, [isStarred, itemId, saveFaveStar]);
  const content = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledLink, { href: "#", onClick: onClick, className: "fave-unfave-icon", role: "button" },
  isStarred ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"].FavoriteSelected */ .Z.FavoriteSelected, { iconSize: "xxl" }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"].FavoriteUnselected */ .Z.FavoriteUnselected, { iconSize: "xxl" }));

  if (showTooltip) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__/* .Tooltip */ .u, { id: "fave-unfave-tooltip", title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('Click to favorite/unfavorite') },
    content);

  }
  return content;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FaveStar);

/***/ }),

/***/ 50948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11965);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13423);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38097);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8818);
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






const ToastContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .styled.div */ .iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`;
const StyledIcon = (theme) => _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.css`
  min-width: ${theme.gridUnit * 5}px;
  color: ${theme.colors.grayscale.base};
`;
function Toast({ toast, onCloseToast }) {
  const hideTimer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const showToast = () => {
    setVisible(true);
  };
  const handleClosePress = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }
    // Wait for the transition
    setVisible(() => {
      setTimeout(() => {
        onCloseToast(toast.id);
      }, 150);
      return false;
    });
  }, [onCloseToast, toast.id]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setTimeout(showToast);
    if (toast.duration > 0) {
      hideTimer.current = setTimeout(handleClosePress, toast.duration);
    }
    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
    };
  }, [handleClosePress, toast.duration]);
  let className = 'toast--success';
  let icon = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].CircleCheckSolid */ .Z.CircleCheckSolid, { css: (theme) => StyledIcon(theme) });
  if (toast.toastType === _types__WEBPACK_IMPORTED_MODULE_3__/* .ToastType.WARNING */ .p.WARNING) {
    icon = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].WarningSolid */ .Z.WarningSolid, { css: StyledIcon });
    className = 'toast--warning';
  } else
  if (toast.toastType === _types__WEBPACK_IMPORTED_MODULE_3__/* .ToastType.DANGER */ .p.DANGER) {
    icon = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].ErrorSolid */ .Z.ErrorSolid, { css: StyledIcon });
    className = 'toast--danger';
  } else
  if (toast.toastType === _types__WEBPACK_IMPORTED_MODULE_3__/* .ToastType.INFO */ .p.INFO) {
    icon = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].InfoSolid */ .Z.InfoSolid, { css: StyledIcon });
    className = 'toast--info';
  }
  return (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.jsx)(ToastContainer, { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('alert', 'toast', visible && 'toast--visible', className), role: "alert" },
  icon,
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.jsx)(interweave__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, { content: toast.text }),
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", { className: "fa fa-close pull-right pointer", role: "button", tabIndex: 0, onClick: handleClosePress, "aria-label": "Close" }));

}

/***/ }),

/***/ 37355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ToastPresenter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37840);
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50948);
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



const StyledToastPresenter = _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .styled.div */ .iK.div`
  max-width: 600px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  margin-right: 50px;
  margin-bottom: 50px;
  z-index: ${({ theme }) => theme.zIndex.max};

  .toast {
    background: ${({ theme }) => theme.colors.grayscale.dark1};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 2px 4px 0
      fade(
        ${({ theme }) => theme.colors.grayscale.dark2},
        ${({ theme }) => theme.opacity.mediumLight}
      );
    color: ${({ theme }) => theme.colors.grayscale.light5};
    opacity: 0;
    position: relative;
    transform: translateY(-100%);
    white-space: pre-line;
    will-change: transform, opacity;
    transition: transform ${({ theme }) => theme.transitionTiming}s,
      opacity ${({ theme }) => theme.transitionTiming}s;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
    }
  }

  .toast > button {
    color: ${({ theme }) => theme.colors.grayscale.light5};
    opacity: 1;
  }

  .toast--visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
function ToastPresenter({ toasts, removeToast }) {
  return toasts.length > 0 && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledToastPresenter, { id: "toast-presenter" },
  toasts.map((toast) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, { key: toast.id, toast: toast, onCloseToast: removeToast })));

}

/***/ }),

/***/ 1510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zi": () => (/* binding */ getFormData),
/* harmony export */   "on": () => (/* binding */ mergeExtraFormData),
/* harmony export */   "vk": () => (/* binding */ getExtraFormData),
/* harmony export */   "X3": () => (/* binding */ nativeFilterGate),
/* harmony export */   "Rz": () => (/* binding */ findTabsWithChartsInScope)
/* harmony export */ });
/* unused harmony export isCrossFilter */
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92134);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52686);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46415);
/* harmony import */ var src_dashboard_util_extractUrlParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70400);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91877);
/* harmony import */ var _util_componentTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81255);
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80621);
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





const getFormData = ({ datasetId, cascadingFilters = {}, groupby, inputRef, defaultDataMask, controlValues, filterType, sortMetric, adhoc_filters, time_range, granularity_sqla, type }) => {var _defaultDataMask$filt;
  const otherProps = {};
  if (datasetId) {
    otherProps.datasource = `${datasetId}__table`;
  }
  if (groupby) {
    otherProps.groupby = [groupby];
  }
  if (sortMetric) {
    otherProps.sortMetric = sortMetric;
  }
  return {
    ...controlValues,
    ...otherProps,
    adhoc_filters: adhoc_filters != null ? adhoc_filters : [],
    extra_filters: [],
    extra_form_data: cascadingFilters,
    granularity_sqla,
    metrics: ['count'],
    row_limit: 1000,
    showSearch: true,
    defaultValue: defaultDataMask == null ? void 0 : (_defaultDataMask$filt = defaultDataMask.filterState) == null ? void 0 : _defaultDataMask$filt.value,
    time_range,
    time_range_endpoints: ['inclusive', 'exclusive'],
    url_params: (0,src_dashboard_util_extractUrlParams__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('regular'),
    inView: true,
    viz_type: filterType,
    inputRef,
    type };

};
function mergeExtraFormData(originalExtra = {}, newExtra = {}) {
  const mergedExtra = {};
  _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .EXTRA_FORM_DATA_APPEND_KEYS.forEach */ .Ci.forEach((key) => {
    const mergedValues = [
    ...(originalExtra[key] || []),
    ...(newExtra[key] || [])];

    if (mergedValues.length) {
      mergedExtra[key] = mergedValues;
    }
  });
  _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .EXTRA_FORM_DATA_OVERRIDE_KEYS.forEach */ .Ay.forEach((key) => {
    const originalValue = originalExtra[key];
    if (originalValue !== undefined) {
      mergedExtra[key] = originalValue;
    }
    const newValue = newExtra[key];
    if (newValue !== undefined) {
      mergedExtra[key] = newValue;
    }
  });
  return mergedExtra;
}
function isCrossFilter(vizType) {var _getChartMetadataRegi, _getChartMetadataRegi2;
  // @ts-ignore need export from superset-ui `ItemWithValue`
  return (_getChartMetadataRegi = getChartMetadataRegistry().items[vizType]) == null ? void 0 : (_getChartMetadataRegi2 = _getChartMetadataRegi.value.behaviors) == null ? void 0 : _getChartMetadataRegi2.includes(Behavior.INTERACTIVE_CHART);
}
function getExtraFormData(dataMask, charts, filterIdsAppliedOnChart) {
  let extraFormData = {};
  filterIdsAppliedOnChart.forEach((key) => {var _dataMask$key$extraFo, _dataMask$key;
    extraFormData = mergeExtraFormData(extraFormData, (_dataMask$key$extraFo = (_dataMask$key = dataMask[key]) == null ? void 0 : _dataMask$key.extraFormData) != null ? _dataMask$key$extraFo : {});
  });
  return extraFormData;
}
function nativeFilterGate(behaviors) {
  return !behaviors.includes(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .Behavior.NATIVE_FILTER */ .cg.NATIVE_FILTER) ||
  (0,src_featureFlags__WEBPACK_IMPORTED_MODULE_5__/* .isFeatureEnabled */ .cr)(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .FeatureFlag.DASHBOARD_FILTERS_EXPERIMENTAL */ .T.DASHBOARD_FILTERS_EXPERIMENTAL) &&
  (0,src_featureFlags__WEBPACK_IMPORTED_MODULE_5__/* .isFeatureEnabled */ .cr)(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .FeatureFlag.DASHBOARD_CROSS_FILTERS */ .T.DASHBOARD_CROSS_FILTERS) &&
  behaviors.includes(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .Behavior.INTERACTIVE_CHART */ .cg.INTERACTIVE_CHART);
}
const isComponentATab = (dashboardLayout, componentId) => dashboardLayout[componentId].type === _util_componentTypes__WEBPACK_IMPORTED_MODULE_1__/* .TAB_TYPE */ .gn;
const findTabsWithChartsInScopeHelper = (dashboardLayout, chartsInScope, componentId, tabIds, tabsToHighlight) => {
  if (dashboardLayout[componentId].type === _util_componentTypes__WEBPACK_IMPORTED_MODULE_1__/* .CHART_TYPE */ .dW &&
  chartsInScope.includes(dashboardLayout[componentId].meta.chartId)) {
    tabIds.forEach(tabsToHighlight.add, tabsToHighlight);
  }
  if (dashboardLayout[componentId].children.length === 0 ||
  isComponentATab(dashboardLayout, componentId) &&
  tabsToHighlight.has(componentId)) {
    return;
  }
  dashboardLayout[componentId].children.forEach((childId) => findTabsWithChartsInScopeHelper(dashboardLayout, chartsInScope, childId, isComponentATab(dashboardLayout, childId) ? [...tabIds, childId] : tabIds, tabsToHighlight));
};
const findTabsWithChartsInScope = (dashboardLayout, chartsInScope) => {
  const dashboardRoot = dashboardLayout[_util_constants__WEBPACK_IMPORTED_MODULE_2__/* .DASHBOARD_ROOT_ID */ ._4];
  const rootChildId = dashboardRoot.children[0];
  const hasTopLevelTabs = rootChildId !== _util_constants__WEBPACK_IMPORTED_MODULE_2__/* .DASHBOARD_GRID_ID */ .PV;
  const tabsInScope = new Set();
  if (hasTopLevelTabs) {var _dashboardLayout$root;
    (_dashboardLayout$root = dashboardLayout[rootChildId].children) == null ? void 0 : _dashboardLayout$root.forEach((tabId) => findTabsWithChartsInScopeHelper(dashboardLayout, chartsInScope, tabId, [tabId], tabsInScope));
  } else
  {
    Object.values(dashboardLayout).
    filter((element) => element.type === _util_componentTypes__WEBPACK_IMPORTED_MODULE_1__/* .TAB_TYPE */ .gn).
    forEach((element) => findTabsWithChartsInScopeHelper(dashboardLayout, chartsInScope, element.id, [element.id], tabsInScope));
  }
  return tabsInScope;
};

/***/ }),

/***/ 81255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dW": () => (/* binding */ CHART_TYPE),
/* harmony export */   "BA": () => (/* binding */ COLUMN_TYPE),
/* harmony export */   "Vl": () => (/* binding */ DASHBOARD_HEADER_TYPE),
/* harmony export */   "BG": () => (/* binding */ DASHBOARD_GRID_TYPE),
/* harmony export */   "U0": () => (/* binding */ DASHBOARD_ROOT_TYPE),
/* harmony export */   "hE": () => (/* binding */ DIVIDER_TYPE),
/* harmony export */   "Nc": () => (/* binding */ HEADER_TYPE),
/* harmony export */   "xh": () => (/* binding */ MARKDOWN_TYPE),
/* harmony export */   "F0": () => (/* binding */ NEW_COMPONENT_SOURCE_TYPE),
/* harmony export */   "Os": () => (/* binding */ ROW_TYPE),
/* harmony export */   "yR": () => (/* binding */ TABS_TYPE),
/* harmony export */   "gn": () => (/* binding */ TAB_TYPE),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
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
const CHART_TYPE = 'CHART';
const COLUMN_TYPE = 'COLUMN';
const DASHBOARD_HEADER_TYPE = 'HEADER';
const DASHBOARD_GRID_TYPE = 'GRID';
const DASHBOARD_ROOT_TYPE = 'ROOT';
const DIVIDER_TYPE = 'DIVIDER';
const HEADER_TYPE = 'HEADER';
const MARKDOWN_TYPE = 'MARKDOWN';
const NEW_COMPONENT_SOURCE_TYPE = 'NEW_COMPONENT_SOURCE';
const ROW_TYPE = 'ROW';
const TABS_TYPE = 'TABS';
const TAB_TYPE = 'TAB';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  CHART_TYPE,
  COLUMN_TYPE,
  DASHBOARD_HEADER_TYPE,
  DASHBOARD_GRID_TYPE,
  DASHBOARD_ROOT_TYPE,
  DIVIDER_TYPE,
  HEADER_TYPE,
  MARKDOWN_TYPE,
  NEW_COMPONENT_SOURCE_TYPE,
  ROW_TYPE,
  TABS_TYPE,
  TAB_TYPE });

/***/ }),

/***/ 70400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ extractUrlParams)
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17563);
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

const reservedQueryParams = new Set(['standalone', 'edit']);
/**
 * Returns the url params that are used to customize queries
 */
function extractUrlParams(urlParamType) {
  const queryParams = query_string__WEBPACK_IMPORTED_MODULE_0__.parse(window.location.search);
  return Object.entries(queryParams).reduce((acc, [key, value]) => {
    if (urlParamType === 'regular' && reservedQueryParams.has(key) ||
    urlParamType === 'reserved' && !reservedQueryParams.has(key))
    return acc;
    // if multiple url params share the same key (?foo=bar&foo=baz), they will appear as an array.
    // Only one value can be used for a given query param, so we just take the first one.
    if (Array.isArray(value)) {
      return {
        ...acc,
        [key]: value[0] };

    }
    return { ...acc, [key]: value };
  }, {});
}

/***/ }),

/***/ 83673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PropertiesModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var src_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74069);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82191);
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35932);
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33346);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15926);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60650);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21173);
/* harmony import */ var src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98286);
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








const FormItem = src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Item */ .l0.Item;
const StyledFormItem = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .iK)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.Item */ .l0.Item)`
  margin-bottom: 0;
`;
const StyledHelpBlock = _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .styled.span */ .iK.span`
  margin-bottom: 0;
`;
function PropertiesModal({ slice, onHide, onSave, show }) {
  const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [form] = src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Form.useForm */ .l0.useForm();
  // values of form inputs
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(slice.slice_name || '');
  const [selectedOwners, setSelectedOwners] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  function showError({ error, statusText, message }) {
    let errorText = error || statusText || (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('An error has occurred');
    if (message === 'Forbidden') {
      errorText = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('You do not have permission to edit this chart');
    }
    src_components_Modal__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error({
      title: 'Error',
      content: errorText,
      okButtonProps: { danger: true, className: 'btn-danger' } });

  }
  const fetchChartOwners = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async function fetchChartOwners() {
    try {
      const response = await _superset_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"].get */ .Z.get({
        endpoint: `/api/v1/chart/${slice.slice_id}` });

      const chart = response.json.result;
      setSelectedOwners(chart.owners.map((owner) => ({
        value: owner.id,
        label: `${owner.first_name} ${owner.last_name}` })));

    }
    catch (response) {
      const clientError = await (0,src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_6__/* .getClientErrorObject */ .O)(response);
      showError(clientError);
    }
  }, [slice.slice_id]);
  const loadOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (input = '', page, pageSize) => {
    const query = rison__WEBPACK_IMPORTED_MODULE_5___default().encode({
      filter: input,
      page,
      page_size: pageSize });

    return _superset_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"].get */ .Z.get({
      endpoint: `/api/v1/chart/related/owners?q=${query}` }).
    then((response) => ({
      data: response.json.result.map((item) => ({
        value: item.value,
        label: item.text })),

      totalCount: response.json.count }));

  }, []);
  const onSubmit = async (values) => {
    setSubmitting(true);
    const { certified_by: certifiedBy, certification_details: certificationDetails, description, cache_timeout: cacheTimeout } = values;
    const payload = {
      slice_name: name || null,
      description: description || null,
      cache_timeout: cacheTimeout || null,
      certified_by: certifiedBy || null,
      certification_details: certifiedBy && certificationDetails ? certificationDetails : null };

    if (selectedOwners) {
      payload.owners = selectedOwners.map((o) => o.value);
    }
    try {
      const res = await _superset_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"].put */ .Z.put({
        endpoint: `/api/v1/chart/${slice.slice_id}`,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload) });

      // update the redux state
      const updatedChart = {
        ...res.json.result,
        id: slice.slice_id };

      onSave(updatedChart);
      onHide();
    }
    catch (res) {
      const clientError = await (0,src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_6__/* .getClientErrorObject */ .O)(res);
      showError(clientError);
    }
    setSubmitting(false);
  };
  const ownersLabel = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Owners');
  // get the owners of this slice
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchChartOwners();
  }, [fetchChartOwners]);
  // update name after it's changed in another modal
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setName(slice.slice_name || '');
  }, [slice.slice_name]);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_components_Modal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, { show: show, onHide: onHide, title: "Edit Chart Properties", footer: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, { htmlType: "button", buttonSize: "small", onClick: onHide, cta: true },
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Cancel')),

    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, { htmlType: "submit", buttonSize: "small", buttonStyle: "primary", onClick: form.submit, disabled: submitting || !name, cta: true },
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Save'))),

    responsive: true, wrapProps: { 'data-test': 'properties-edit-modal' } },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .l0, { form: form, onFinish: onSubmit, layout: "vertical", initialValues: {
      name: slice.slice_name || '',
      description: slice.description || '',
      cache_timeout: slice.cache_timeout != null ? slice.cache_timeout : '',
      certified_by: slice.certified_by || '',
      certification_details: slice.certified_by && slice.certification_details ?
      slice.certification_details :
      '' } },

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .X2, { gutter: 16 },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, { xs: 24, md: 12 },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Basic information')),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(FormItem, { label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Name'), required: true },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Input */ .II, { name: "name", type: "text", value: name, onChange: (event) => {var _event$target$value;return setName((_event$target$value = event.target.value) != null ? _event$target$value : '');} })),

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(FormItem, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(StyledFormItem, { label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Description'), name: "description" },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .TextArea */ .Kx, { rows: 3, style: { maxWidth: '100%' } })),

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(StyledHelpBlock, { className: "help-block" },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('The description can be displayed as widget headers in the dashboard view. Supports markdown.'))),


  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Certification')),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(FormItem, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(StyledFormItem, { label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Certified by'), name: "certified_by" },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Input */ .II, null)),

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(StyledHelpBlock, { className: "help-block" },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Person or group that has certified this chart.'))),


  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(FormItem, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(StyledFormItem, { label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Certification details'), name: "certification_details" },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Input */ .II, null)),

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(StyledHelpBlock, { className: "help-block" },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Any additional detail to show in the certification tooltip.')))),



  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Col */ .JX, { xs: 24, md: 12 },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Configuration')),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(FormItem, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(StyledFormItem, { label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Cache timeout'), name: "cacheTimeout" },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Input */ .II, null)),

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(StyledHelpBlock, { className: "help-block" },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)("Duration (in seconds) of the caching timeout for this chart. Note this defaults to the dataset's timeout if undefined."))),


  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", { style: { marginTop: '1em' } }, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Access')),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(FormItem, { label: ownersLabel },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(src_components__WEBPACK_IMPORTED_MODULE_4__/* .Select */ .P, { ariaLabel: ownersLabel, mode: "multiple", name: "owners", value: selectedOwners || [], onChange: setSelectedOwners, options: loadOptions, disabled: !selectedOwners, allowClear: true }),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(StyledHelpBlock, { className: "help-block" },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('A list of users who can alter the chart. Searchable by name or username.')))))));






}

/***/ }),

/***/ 13284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UB": () => (/* binding */ MAX_ADVISABLE_VIZ_GALLERY_WIDTH),
/* harmony export */   "ZP": () => (/* binding */ VizTypeGallery)
/* harmony export */ });
/* unused harmony export VIZ_TYPE_CONTROL_TEST_ID */
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5872);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74221);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60650);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11965);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82191);
/* harmony import */ var src_components_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37921);
/* harmony import */ var src_components_DynamicPlugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14278);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38097);
/* harmony import */ var src_dashboard_components_nativeFilters_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1510);
/* harmony import */ var scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64239);
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










var SECTIONS;
(function (SECTIONS) {
  SECTIONS["ALL_CHARTS"] = "ALL_CHARTS";
  SECTIONS["CATEGORY"] = "CATEGORY";
  SECTIONS["TAGS"] = "TAGS";
  SECTIONS["RECOMMENDED_TAGS"] = "RECOMMENDED_TAGS";
})(SECTIONS || (SECTIONS = {}));
const DEFAULT_ORDER = [
'line',
'big_number',
'big_number_total',
'table',
'pivot_table_v2',
'echarts_timeseries_line',
'echarts_area',
'echarts_timeseries_bar',
'echarts_timeseries_scatter',
'pie',
'mixed_timeseries',
'filter_box',
'dist_bar',
'area',
'bar',
'deck_polygon',
'time_table',
'histogram',
'deck_scatter',
'deck_hex',
'time_pivot',
'deck_arc',
'heatmap',
'deck_grid',
'dual_line',
'deck_screengrid',
'line_multi',
'treemap',
'box_plot',
'sunburst',
'sankey',
'word_cloud',
'mapbox',
'kepler',
'cal_heatmap',
'rose',
'bubble',
'deck_geojson',
'horizon',
'deck_multi',
'compare',
'partition',
'event_flow',
'deck_path',
'graph_chart',
'world_map',
'paired_ttest',
'para',
'country_map'];

const typesWithDefaultOrder = new Set(DEFAULT_ORDER);
const THUMBNAIL_GRID_UNITS = 24;
const MAX_ADVISABLE_VIZ_GALLERY_WIDTH = 1090;
const OTHER_CATEGORY = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Other');
const ALL_CHARTS = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('All charts');
const RECOMMENDED_TAGS = [(0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Popular'), (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('ECharts'), (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Advanced-Analytics')];
const VIZ_TYPE_CONTROL_TEST_ID = 'viz-type-control';
const VizPickerLayout = _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .styled.div */ .iK.div`
  ${({ isSelectedVizMetadata }) => `
    display: grid;
    grid-template-rows: ${isSelectedVizMetadata ?
`auto minmax(100px, 1fr) minmax(200px, 35%)` :
'auto minmax(100px, 1fr)'};
    // em is used here because the sidebar should be sized to fit the longest standard tag
    grid-template-columns: minmax(14em, auto) 5fr;
    grid-template-areas:
      'sidebar search'
      'sidebar main'
      'details details';
    height: 70vh;
    overflow: auto;
  `}
`;
const SectionTitle = _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .styled.h3 */ .iK.h3`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  font-size: ${({ theme }) => theme.typography.sizes.l}px;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  line-height: ${({ theme }) => theme.gridUnit * 6}px;
`;
const LeftPane = _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .styled.div */ .iK.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  overflow: auto;

  .ant-collapse .ant-collapse-item {
    .ant-collapse-header {
      font-size: ${({ theme }) => theme.typography.sizes.s}px;
      color: ${({ theme }) => theme.colors.grayscale.base};
      padding-left: ${({ theme }) => theme.gridUnit * 2}px;
      padding-bottom: ${({ theme }) => theme.gridUnit}px;
    }
    .ant-collapse-content .ant-collapse-content-box {
      display: flex;
      flex-direction: column;
      padding: 0 ${({ theme }) => theme.gridUnit * 2}px;
    }
  }
`;
const RightPane = _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .styled.div */ .iK.div`
  grid-area: main;
  overflow-y: auto;
`;
const SearchWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .styled.div */ .iK.div`
  ${({ theme }) => `
    grid-area: search;
    margin-top: ${theme.gridUnit * 3}px;
    margin-bottom: ${theme.gridUnit}px;
    margin-left: ${theme.gridUnit * 3}px;
    margin-right: ${theme.gridUnit * 3}px;
    .ant-input-affix-wrapper {
      padding-left: ${theme.gridUnit * 2}px;
    }
  `}
`;
/** Styles to line up prefix/suffix icons in the search input */
const InputIconAlignment = _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .styled.div */ .iK.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.grayscale.base};
`;
const SelectorLabel = _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .styled.button */ .iK.button`
  ${({ theme }) => `
    all: unset; // remove default button styles
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    margin: ${theme.gridUnit}px 0;
    padding: 0 ${theme.gridUnit}px;
    border-radius: ${theme.borderRadius}px;
    line-height: 2em;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;

    &:focus {
      outline: initial;
    }

    &.selected {
      background-color: ${theme.colors.primary.dark1};
      color: ${theme.colors.primary.light5};

      svg {
        color: ${theme.colors.primary.light5};
      }

      &:hover {
        .cancel {
          visibility: visible;
        }
      }
    }

    & span:first-of-type svg {
      margin-top: ${theme.gridUnit * 1.5}px;
    }

    .cancel {
      visibility: hidden;
    }
  `}
`;
const IconsPane = _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .styled.div */ .iK.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${({ theme }) => theme.gridUnit * THUMBNAIL_GRID_UNITS}px
  );
  grid-auto-rows: max-content;
  justify-content: space-evenly;
  grid-gap: ${({ theme }) => theme.gridUnit * 2}px;
  justify-items: center;
  // for some reason this padding doesn't seem to apply at the bottom of the container. Why is a mystery.
  padding: ${({ theme }) => theme.gridUnit * 2}px;
`;
const DetailsPane = (theme) => _superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.css`
  grid-area: details;
  border-top: 1px solid ${theme.colors.grayscale.light2};
`;
const DetailsPopulated = (theme) => _superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.css`
  padding: ${theme.gridUnit * 4}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'viz-name examples-header'
    'viz-tags examples'
    'description examples';
`;
// overflow hidden on the details pane and overflow auto on the description
// (plus grid layout) enables the description to scroll while the header stays in place.
const TagsWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .styled.div */ .iK.div`
  grid-area: viz-tags;
  width: ${({ theme }) => theme.gridUnit * 120}px;
  padding-right: ${({ theme }) => theme.gridUnit * 14}px;
  padding-bottom: ${({ theme }) => theme.gridUnit * 2}px;
`;
const Description = _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .styled.p */ .iK.p`
  grid-area: description;
  overflow: auto;
  padding-right: ${({ theme }) => theme.gridUnit * 14}px;
  margin: 0;
`;
const Examples = _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .styled.div */ .iK.div`
  grid-area: examples;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  gap: ${({ theme }) => theme.gridUnit * 4}px;

  img {
    height: 100%;
    border-radius: ${({ theme }) => theme.gridUnit}px;
    border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  }
`;
const thumbnailContainerCss = (theme) => _superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.css`
  cursor: pointer;
  width: ${theme.gridUnit * THUMBNAIL_GRID_UNITS}px;

  img {
    min-width: ${theme.gridUnit * THUMBNAIL_GRID_UNITS}px;
    min-height: ${theme.gridUnit * THUMBNAIL_GRID_UNITS}px;
    border: 1px solid ${theme.colors.grayscale.light2};
    border-radius: ${theme.gridUnit}px;
    transition: border-color ${theme.transitionTiming};
  }

  &.selected img {
    border: 2px solid ${theme.colors.primary.light2};
  }

  &:hover:not(.selected) img {
    border: 1px solid ${theme.colors.grayscale.light1};
  }

  .viztype-label {
    margin-top: ${theme.gridUnit * 2}px;
    text-align: center;
  }
`;
function vizSortFactor(entry) {
  if (typesWithDefaultOrder.has(entry.key)) {
    return DEFAULT_ORDER.indexOf(entry.key);
  }
  return DEFAULT_ORDER.length;
}
const Thumbnail = ({ entry, selectedViz, setSelectedViz }) => {
  const theme = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .useTheme */ .Fg)();
  const { key, value: type } = entry;
  const isSelected = selectedViz === entry.key;
  return (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { role: "button"
    // using css instead of a styled component to preserve
    // the data-test attribute
    , css: thumbnailContainerCss(theme), tabIndex: 0, className: isSelected ? 'selected' : '', onClick: () => setSelectedViz(key) },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", { alt: type.name, width: "100%", className: `viztype-selector ${isSelected ? 'selected' : ''}`, src: type.thumbnail }),
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { className: "viztype-label" },
  type.name));


};
/** A list of viz thumbnails, used within the viz picker modal */
const ThumbnailGallery = ({ vizEntries, ...props }) => (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(IconsPane, null,
vizEntries.map((entry) => (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(Thumbnail, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ key: entry.key }, props, { entry: entry }))));

const Selector = ({ selector, sectionId, icon, isSelected, onClick, className }) => {
  const btnRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  // see Element.scrollIntoViewIfNeeded()
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoViewIfNeeded
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isSelected) {
      // We need to wait for the modal to open and then scroll, so we put it in the microtask queue
      queueMicrotask(() => (0,scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_12__["default"])(btnRef.current, {
        behavior: 'smooth',
        scrollMode: 'if-needed' }));

    }
  }, []);
  return (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(SelectorLabel, { ref: btnRef, key: selector, name: selector, className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, isSelected && 'selected'), onClick: () => onClick(selector, sectionId) },
  icon,
  selector);

};
const doesVizMatchSelector = (viz, selector) => selector === viz.category ||
selector === OTHER_CATEGORY && viz.category == null ||
(viz.tags || []).indexOf(selector) > -1;
function VizTypeGallery(props) {var _selectedVizMetadata$;
  const { selectedViz, onChange, className } = props;
  const { mountedPluginMetadata } = (0,src_components_DynamicPlugins__WEBPACK_IMPORTED_MODULE_6__/* .usePluginContext */ .gp)();
  const searchInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const [searchInputValue, setSearchInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [isSearchFocused, setIsSearchFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const isActivelySearching = isSearchFocused && !!searchInputValue;
  const selectedVizMetadata = selectedViz ?
  mountedPluginMetadata[selectedViz] :
  null;
  const chartMetadata = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const result = Object.entries(mountedPluginMetadata).
    map(([key, value]) => ({ key, value })).
    filter(({ value }) => (0,src_dashboard_components_nativeFilters_utils__WEBPACK_IMPORTED_MODULE_8__/* .nativeFilterGate */ .X3)(value.behaviors || []) && !value.deprecated);
    result.sort((a, b) => vizSortFactor(a) - vizSortFactor(b));
    return result;
  }, [mountedPluginMetadata]);
  const chartsByCategory = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const result = {};
    chartMetadata.forEach((entry) => {
      const category = entry.value.category || OTHER_CATEGORY;
      if (!result[category]) {
        result[category] = [];
      }
      result[category].push(entry);
    });
    return result;
  }, [chartMetadata]);
  const categories = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => Object.keys(chartsByCategory).sort((a, b) => {
    // make sure Other goes at the end
    if (a === OTHER_CATEGORY)
    return 1;
    if (b === OTHER_CATEGORY)
    return -1;
    // sort alphabetically
    return a.localeCompare(b);
  }), [chartsByCategory]);
  const chartsByTags = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const result = {};
    chartMetadata.forEach((entry) => {
      const tags = entry.value.tags || [];
      tags.forEach((tag) => {
        if (!result[tag]) {
          result[tag] = [];
        }
        result[tag].push(entry);
      });
    });
    return result;
  }, [chartMetadata]);
  const tags = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => Object.keys(chartsByTags).
  sort((a, b) =>
  // sort alphabetically
  a.localeCompare(b)).
  filter((tag) => RECOMMENDED_TAGS.indexOf(tag) === -1), [chartsByTags]);
  const sortedMetadata = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => chartMetadata.sort((a, b) => a.key.localeCompare(b.key)), [chartMetadata]);
  const [activeSelector, setActiveSelector] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => (selectedVizMetadata == null ? void 0 : selectedVizMetadata.category) || RECOMMENDED_TAGS[0]);
  const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => selectedVizMetadata != null && selectedVizMetadata.category ?
  SECTIONS.CATEGORY :
  SECTIONS.RECOMMENDED_TAGS);
  // get a fuse instance for fuzzy search
  const fuse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new fuse_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z(chartMetadata, {
    ignoreLocation: true,
    threshold: 0.3,
    keys: ['value.name', 'value.tags', 'value.description'] }),
  [chartMetadata]);
  const searchResults = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (searchInputValue.trim() === '') {
      return [];
    }
    return fuse.search(searchInputValue).map((result) => result.item);
  }, [searchInputValue, fuse]);
  const focusSearch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    // "start searching" is actually a two-stage process.
    // When you first click on the search bar, the input is focused and nothing else happens.
    // Once you begin typing, the selected category is cleared and the displayed viz entries change.
    setIsSearchFocused(true);
  }, []);
  const changeSearch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event) => setSearchInputValue(event.target.value), []);
  const stopSearching = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    // stopping a search takes you back to the category you were looking at before.
    // Unlike focusSearch, this is a simple one-step process.
    setIsSearchFocused(false);
    setSearchInputValue('');
    searchInputRef.current.blur();
  }, []);
  const clickSelector = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((selector, sectionId) => {
    if (isSearchFocused) {
      stopSearching();
    }
    setActiveSelector(selector);
    setActiveSection(sectionId);
    // clear the selected viz if it is not present in the new category or tags
    const isSelectedVizCompatible = selectedVizMetadata &&
    doesVizMatchSelector(selectedVizMetadata, selector);
    if (selector !== activeSelector && !isSelectedVizCompatible) {
      onChange(null);
    }
  }, [
  stopSearching,
  isSearchFocused,
  activeSelector,
  selectedVizMetadata,
  onChange]);

  const sectionMap = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    [SECTIONS.RECOMMENDED_TAGS]: {
      title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Recommended tags'),
      icon: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Tags */ .Z.Tags, null),
      selectors: RECOMMENDED_TAGS },

    [SECTIONS.CATEGORY]: {
      title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Category'),
      icon: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Category */ .Z.Category, null),
      selectors: categories },

    [SECTIONS.TAGS]: {
      title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Tags'),
      icon: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Tags */ .Z.Tags, null),
      selectors: tags } }),

  [categories, tags]);
  const getVizEntriesToDisplay = () => {
    if (isActivelySearching) {
      return searchResults;
    }
    if (activeSelector === ALL_CHARTS &&
    activeSection === SECTIONS.ALL_CHARTS) {
      return sortedMetadata;
    }
    if (activeSection === SECTIONS.CATEGORY &&
    chartsByCategory[activeSelector]) {
      return chartsByCategory[activeSelector];
    }
    if ((activeSection === SECTIONS.TAGS ||
    activeSection === SECTIONS.RECOMMENDED_TAGS) &&
    chartsByTags[activeSelector]) {
      return chartsByTags[activeSelector];
    }
    return [];
  };
  return (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(VizPickerLayout, { className: className, isSelectedVizMetadata: Boolean(selectedVizMetadata) },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(LeftPane, null,
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(Selector, { css: ({ gridUnit }) =>
    // adjust style for not being inside a collapse
    _superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.css`
              margin: ${gridUnit * 2}px;
              margin-bottom: 0;
            `, sectionId: SECTIONS.ALL_CHARTS, selector: ALL_CHARTS, icon: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Ballot */ .Z.Ballot, null), isSelected: !isActivelySearching &&
    ALL_CHARTS === activeSelector &&
    SECTIONS.ALL_CHARTS === activeSection, onClick: clickSelector }),
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_4__/* .Collapse */ .UO, { expandIconPosition: "right", ghost: true, defaultActiveKey: Object.keys(sectionMap) },
  Object.keys(sectionMap).map((sectionId) => {
    const section = sectionMap[sectionId];
    return (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_4__/* .Collapse.Panel */ .UO.Panel, { header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "header" }, section.title), key: sectionId },
    section.selectors.map((selector) => (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(Selector, { key: selector, selector: selector, sectionId: sectionId, icon: section.icon, isSelected: !isActivelySearching &&
      selector === activeSelector &&
      sectionId === activeSection, onClick: clickSelector })));

  }))),



  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(SearchWrapper, null,
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .II, { type: "text", ref: searchInputRef /* cast required because emotion */, value: searchInputValue, placeholder: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Search all charts'), onChange: changeSearch, onFocus: focusSearch, prefix: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(InputIconAlignment, null,
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Search */ .Z.Search, { iconSize: "m" })),
    suffix: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(InputIconAlignment, null,
    searchInputValue && (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"].XLarge */ .Z.XLarge, { iconSize: "m", onClick: stopSearching })) })),



  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(RightPane, null,
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(ThumbnailGallery, { vizEntries: getVizEntriesToDisplay(), selectedViz: selectedViz, setSelectedViz: onChange })),


  selectedVizMetadata ? (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { css: (theme) => [
    DetailsPane(theme),
    DetailsPopulated(theme)] },

  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(SectionTitle, { css: _superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.css`
                grid-area: viz-name;
              ` },
  selectedVizMetadata == null ? void 0 : selectedVizMetadata.name),

  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(TagsWrapper, null,
  selectedVizMetadata == null ? void 0 : selectedVizMetadata.tags.map((tag) => (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Label__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, { key: tag }, tag))),

  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(Description, null,
  (selectedVizMetadata == null ? void 0 : selectedVizMetadata.description) ||
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('No description available.')),

  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(SectionTitle, { css: _superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.css`
                grid-area: examples-header;
              ` },
  !!(selectedVizMetadata != null && (_selectedVizMetadata$ = selectedVizMetadata.exampleGallery) != null && _selectedVizMetadata$.length) && (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Examples')),

  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(Examples, null,
  ((selectedVizMetadata == null ? void 0 : selectedVizMetadata.exampleGallery) || []).map((example) => (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", { src: example.url, alt: example.caption, title: example.caption }))))) :


  null);

}

/***/ }),

/***/ 61337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ getFromLocalStorage),
/* harmony export */   "_": () => (/* binding */ setInLocalStorage)
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
const getFromLocalStorage = (key, defaultValue) => {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value || 'null') || defaultValue;
  }
  catch {
    return defaultValue;
  }
};
const setInLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  }
  catch {
    // Catch in case localStorage is unavailable
  }
};

/***/ })

}]);