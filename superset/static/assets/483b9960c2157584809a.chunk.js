"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[5296],{

/***/ 29432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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



/***/ }),

/***/ 25619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60650);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37703);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5977);
/* harmony import */ var src_components_MessageToasts_withToasts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14114);
/* harmony import */ var src_components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38703);
/* harmony import */ var src_common_hooks_apiResources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29432);
/* harmony import */ var src_dashboard_actions_hydrate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47173);
/* harmony import */ var src_dashboard_actions_datasources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50810);
/* harmony import */ var src_dashboard_util_injectCustomCss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14505);
/* harmony import */ var src_setup_setupPlugins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69753);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11965);
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











(0,src_setup_setupPlugins__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
const DashboardContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => Promise.all(/* import() | DashboardContainer */[__webpack_require__.e(1216), __webpack_require__.e(876), __webpack_require__.e(8680), __webpack_require__.e(193), __webpack_require__.e(5618), __webpack_require__.e(452)]).then(__webpack_require__.bind(__webpack_require__, 76198)));
const originalDocumentTitle = document.title;
const DashboardPage = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useDispatch */ .I0)();
  const { addDangerToast } = (0,src_components_MessageToasts_withToasts__WEBPACK_IMPORTED_MODULE_2__/* .useToasts */ .e)();
  const { idOrSlug } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useParams */ .UO)();
  const { result: dashboard, error: dashboardApiError } = (0,src_common_hooks_apiResources__WEBPACK_IMPORTED_MODULE_4__/* .useDashboard */ .QU)(idOrSlug);
  const { result: charts, error: chartsApiError } = (0,src_common_hooks_apiResources__WEBPACK_IMPORTED_MODULE_4__/* .useDashboardCharts */ .Es)(idOrSlug);
  const { result: datasets, error: datasetsApiError } = (0,src_common_hooks_apiResources__WEBPACK_IMPORTED_MODULE_4__/* .useDashboardDatasets */ .JL)(idOrSlug);
  const isDashboardHydrated = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const error = dashboardApiError || chartsApiError;
  const readyToRender = Boolean(dashboard && charts);
  const { dashboard_title, css } = dashboard || {};
  if (readyToRender && !isDashboardHydrated.current) {
    isDashboardHydrated.current = true;
    dispatch((0,src_dashboard_actions_hydrate__WEBPACK_IMPORTED_MODULE_5__/* .hydrateDashboard */ .Y)(dashboard, charts));
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (dashboard_title) {
      document.title = dashboard_title;
    }
    return () => {
      document.title = originalDocumentTitle;
    };
  }, [dashboard_title]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (css) {
      // returning will clean up custom css
      // when dashboard unmounts or changes
      return (0,src_dashboard_util_injectCustomCss__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(css);
    }
    return () => {};
  }, [css]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (datasetsApiError) {
      addDangerToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('Error loading chart datasources. Filters may not work correctly.'));
    } else
    {
      dispatch((0,src_dashboard_actions_datasources__WEBPACK_IMPORTED_MODULE_6__/* .setDatasources */ .Fy)(datasets));
    }
  }, [addDangerToast, datasets, datasetsApiError, dispatch]);
  if (error)
  throw error; // caught in error boundary
  if (!readyToRender)
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Loading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(DashboardContainer, null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardPage);

/***/ }),

/***/ 14505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ injectCustomCss)
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
function createStyleElement(className) {
  const style = document.createElement('style');
  style.className = className;
  style.type = 'text/css';
  return style;
}
function injectCustomCss(css) {
  const className = 'CssEditor-css';
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.querySelector(`.${className}`) || createStyleElement(className);
  if ('styleSheet' in style) {
    style.styleSheet.cssText = css;
  } else
  {
    style.innerHTML = css;
  }
  /**
   * Ensures that the style applied is always the last.
   *
   * from: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
   * The Node.appendChild() method adds a node to the end of the list of children
   * of a specified parent node. If the given child is a reference to an existing
   * node in the document, appendChild() moves it from its current position to the
   * new position (there is no requirement to remove the node from its parent node
   * before appending it to some other node).
   */
  head.appendChild(style);
  return function removeCustomCSS() {
    style.remove();
  };
}

/***/ })

}]);