"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[7843],{

/***/ 12515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jp": () => (/* binding */ getChartKey),
/* harmony export */   "xW": () => (/* binding */ getAnnotationJsonUrl),
/* harmony export */   "sW": () => (/* binding */ getURIDirectory),
/* harmony export */   "vp": () => (/* binding */ getExploreLongUrl),
/* harmony export */   "kN": () => (/* binding */ getChartDataUri),
/* harmony export */   "H6": () => (/* binding */ getExploreUrl),
/* harmony export */   "kP": () => (/* binding */ shouldUseLegacyApi),
/* harmony export */   "u": () => (/* binding */ buildV1ChartDataPayload),
/* harmony export */   "pd": () => (/* binding */ getLegacyEndpointType),
/* harmony export */   "Md": () => (/* binding */ postForm),
/* harmony export */   "pe": () => (/* binding */ exportChart),
/* harmony export */   "AH": () => (/* binding */ exploreChart),
/* harmony export */   "bX": () => (/* binding */ useDebouncedEffect),
/* harmony export */   "CB": () => (/* binding */ getSimpleSQLExpression)
/* harmony export */ });
/* unused harmony exports getHostName, getExploreUrlFromDashboard */
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57557);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15306);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54998);
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38849);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81395);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69205);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86852);
/* harmony import */ var src_utils_hostNamesConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86374);
/* harmony import */ var src_utils_safeStringify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9679);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27600);
/* harmony import */ var src_explore_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69856);
/* harmony import */ var src_dashboard_util_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80621);
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








const MAX_URL_LENGTH = 8000;

function getChartKey(explore) {
  const { slice } = explore;
  return slice ? slice.slice_id : 0;
}

let requestCounter = 0;
function getHostName(allowDomainSharding = false) {
  let currentIndex = 0;
  if (allowDomainSharding) {
    currentIndex = requestCounter % src_utils_hostNamesConfig__WEBPACK_IMPORTED_MODULE_4__/* .availableDomains.length */ .X.length;
    requestCounter += 1;

    // if domain sharding is enabled, skip main domain for fetching chart API
    // leave main domain free for other calls like fav star, save change, etc.
    // to make dashboard be responsive when it's loading large number of charts
    if (currentIndex === 0) {
      currentIndex += 1;
      requestCounter += 1;
    }
  }
  return src_utils_hostNamesConfig__WEBPACK_IMPORTED_MODULE_4__/* .availableDomains */ .X[currentIndex];
}

function getAnnotationJsonUrl(slice_id, form_data, isNative, force) {
  if (slice_id === null || slice_id === undefined) {
    return null;
  }
  const uri = urijs__WEBPACK_IMPORTED_MODULE_3___default()(window.location.search);
  const endpoint = isNative ? 'annotation_json' : 'slice_json';
  return uri.
  pathname(`/superset/${endpoint}/${slice_id}`).
  search({
    form_data: (0,src_utils_safeStringify__WEBPACK_IMPORTED_MODULE_8__/* .safeStringify */ .o)(form_data, (key, value) =>
    value === null ? undefined : value),

    force }).

  toString();
}

function getURIDirectory(endpointType = 'base') {
  // Building the directory part of the URI
  if (
  ['full', 'json', 'csv', 'query', 'results', 'samples'].includes(
  endpointType))

  {
    return '/superset/explore_json/';
  }
  return '/superset/explore/';
}

/**
 * This gets the url of the explore page, with all the form data included explicitly.
 * This includes any form data overrides from the dashboard.
 */
function getExploreLongUrl(
formData,
endpointType,
allowOverflow = true,
extraSearch = {})
{
  if (!formData.datasource) {
    return null;
  }

  // remove formData params that we don't need in the explore url.
  // These are present when generating explore urls from the dashboard page.
  // This should be superseded by some sort of "exploration context" system
  // where form data and other context is referenced by id.
  const trimmedFormData = lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(formData, ['dataMask', 'url_params']);

  const uri = new (urijs__WEBPACK_IMPORTED_MODULE_3___default())('/');
  const directory = getURIDirectory(endpointType);
  const search = uri.search(true);
  Object.keys(extraSearch).forEach((key) => {
    search[key] = extraSearch[key];
  });
  search.form_data = (0,src_utils_safeStringify__WEBPACK_IMPORTED_MODULE_8__/* .safeStringify */ .o)(trimmedFormData);
  if (endpointType === src_constants__WEBPACK_IMPORTED_MODULE_5__/* .URL_PARAMS.standalone.name */ .KD.standalone.name) {
    search.standalone = src_dashboard_util_constants__WEBPACK_IMPORTED_MODULE_7__/* .DashboardStandaloneMode.HIDE_NAV */ ._B.HIDE_NAV;
  }
  const url = uri.directory(directory).search(search).toString();
  if (!allowOverflow && url.length > MAX_URL_LENGTH) {
    const minimalFormData = {
      datasource: formData.datasource,
      viz_type: formData.viz_type };

    return getExploreLongUrl(minimalFormData, endpointType, false, {
      URL_IS_TOO_LONG_TO_SHARE: null });

  }
  return url;
}

function getExploreUrlFromDashboard(formData) {
  // remove formData params that we don't need in the explore url.
  // These are present when generating explore urls from the dashboard page.
  // This should be superseded by some sort of "exploration context" system
  // where form data and other context is referenced by id.
  const trimmedFormData = _omit(formData, [
  'dataMask',
  'url_params',
  'label_colors']);

  return getExploreLongUrl(trimmedFormData, null, false);
}

function getChartDataUri({ path, qs, allowDomainSharding = false }) {
  // The search params from the window.location are carried through,
  // but can be specified with curUrl (used for unit tests to spoof
  // the window.location).
  let uri = new (urijs__WEBPACK_IMPORTED_MODULE_3___default())({
    protocol: window.location.protocol.slice(0, -1),
    hostname: getHostName(allowDomainSharding),
    port: window.location.port ? window.location.port : '',
    path });

  if (qs) {
    uri = uri.search(qs);
  }
  return uri;
}

/**
 * This gets the minimal url for the given form data.
 * If there are dashboard overrides present in the form data,
 * they will not be included in the url.
 */
function getExploreUrl({
  formData,
  endpointType = 'base',
  force = false,
  curUrl = null,
  requestParams = {},
  allowDomainSharding = false,
  method = 'POST' })
{
  if (!formData.datasource) {
    return null;
  }

  // label_colors should not pollute the URL
  // eslint-disable-next-line no-param-reassign
  delete formData.label_colors;

  let uri = getChartDataUri({ path: '/', allowDomainSharding });
  if (curUrl) {
    uri = urijs__WEBPACK_IMPORTED_MODULE_3___default()(urijs__WEBPACK_IMPORTED_MODULE_3___default()(curUrl).search());
  }

  const directory = getURIDirectory(endpointType);

  // Building the querystring (search) part of the URI
  const search = uri.search(true);
  const { slice_id, extra_filters, adhoc_filters, viz_type } = formData;
  if (slice_id) {
    const form_data = { slice_id };
    if (method === 'GET') {
      form_data.viz_type = viz_type;
      if (extra_filters && extra_filters.length) {
        form_data.extra_filters = extra_filters;
      }
      if (adhoc_filters && adhoc_filters.length) {
        form_data.adhoc_filters = adhoc_filters;
      }
    }
    search.form_data = (0,src_utils_safeStringify__WEBPACK_IMPORTED_MODULE_8__/* .safeStringify */ .o)(form_data);
  }
  if (force) {
    search.force = 'true';
  }
  if (endpointType === 'csv') {
    search.csv = 'true';
  }
  if (endpointType === src_constants__WEBPACK_IMPORTED_MODULE_5__/* .URL_PARAMS.standalone.name */ .KD.standalone.name) {
    search.standalone = '1';
  }
  if (endpointType === 'query') {
    search.query = 'true';
  }
  if (endpointType === 'results') {
    search.results = 'true';
  }
  if (endpointType === 'samples') {
    search.samples = 'true';
  }
  const paramNames = Object.keys(requestParams);
  if (paramNames.length) {
    paramNames.forEach((name) => {
      if (requestParams.hasOwnProperty(name)) {
        search[name] = requestParams[name];
      }
    });
  }
  return uri.search(search).directory(directory).toString();
}

const shouldUseLegacyApi = (formData) => {
  const vizMetadata = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)().get(formData.viz_type);
  return vizMetadata ? vizMetadata.useLegacyApi : false;
};

const buildV1ChartDataPayload = ({
  formData,
  force,
  resultFormat,
  resultType,
  setDataMask,
  ownState }) =>
{var _getChartBuildQueryRe;
  const buildQuery = (_getChartBuildQueryRe =
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)().get(formData.viz_type)) != null ? _getChartBuildQueryRe :
  (buildQueryformData) =>
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(buildQueryformData, (baseQueryObject) => [
  {
    ...baseQueryObject }]);


  return buildQuery(
  {
    ...formData,
    force,
    result_format: resultFormat,
    result_type: resultType },

  {
    ownState,
    hooks: {
      setDataMask } });



};

const getLegacyEndpointType = ({ resultType, resultFormat }) =>
resultFormat === 'csv' ? resultFormat : resultType;

function postForm(url, payload, target = '_blank') {
  if (!url) {
    return;
  }

  const hiddenForm = document.createElement('form');
  hiddenForm.action = url;
  hiddenForm.method = 'POST';
  hiddenForm.target = target;
  const token = document.createElement('input');
  token.type = 'hidden';
  token.name = 'csrf_token';
  token.value = (document.getElementById('csrf_token') || {}).value;
  hiddenForm.appendChild(token);
  const data = document.createElement('input');
  data.type = 'hidden';
  data.name = 'form_data';
  data.value = (0,src_utils_safeStringify__WEBPACK_IMPORTED_MODULE_8__/* .safeStringify */ .o)(payload);
  hiddenForm.appendChild(data);

  document.body.appendChild(hiddenForm);
  hiddenForm.submit();
  document.body.removeChild(hiddenForm);
}

const exportChart = ({
  formData,
  resultFormat = 'json',
  resultType = 'full',
  force = false,
  ownState = {} }) =>
{
  let url;
  let payload;
  if (shouldUseLegacyApi(formData)) {
    const endpointType = getLegacyEndpointType({ resultFormat, resultType });
    url = getExploreUrl({
      formData,
      endpointType,
      allowDomainSharding: false });

    payload = formData;
  } else {
    url = '/api/v1/chart/data';
    payload = buildV1ChartDataPayload({
      formData,
      force,
      resultFormat,
      resultType,
      ownState });

  }
  postForm(url, payload);
};

const exploreChart = (formData) => {
  const url = getExploreUrl({
    formData,
    endpointType: 'base',
    allowDomainSharding: false });

  postForm(url, formData);
};

const useDebouncedEffect = (effect, delay, deps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(effect, deps);

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};

const getSimpleSQLExpression = (subject, operator, comparator) => {
  const isMulti =
  [...src_explore_constants__WEBPACK_IMPORTED_MODULE_6__/* .MULTI_OPERATORS */ .qK].
  map((op) => src_explore_constants__WEBPACK_IMPORTED_MODULE_6__/* .OPERATOR_ENUM_TO_OPERATOR_TYPE */ .LT[op].operation).
  indexOf(operator) >= 0;
  let expression = subject != null ? subject : '';
  if (subject && operator) {
    expression += ` ${operator}`;
    const firstValue =
    isMulti && Array.isArray(comparator) ? comparator[0] : comparator;
    const comparatorArray = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(comparator);
    const isString =
    firstValue !== undefined && Number.isNaN(Number(firstValue));
    const quote = isString ? "'" : '';
    const [prefix, suffix] = isMulti ? ['(', ')'] : ['', ''];
    const formattedComparators = comparatorArray.map(
    (val) =>
    `${quote}${isString ? String(val).replace("'", "''") : val}${quote}`);

    if (comparatorArray.length > 0) {
      expression += ` ${prefix}${formattedComparators.join(', ')}${suffix}`;
    }
  }
  return expression;
};

/***/ }),

/***/ 86374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ availableDomains),
/* harmony export */   "_": () => (/* binding */ allowCrossDomain)
/* harmony export */ });
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91877);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46415);
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


function getDomainsConfig() {var _bootstrapData$common;
  const appContainer = document.getElementById('app');
  if (!appContainer) {
    return [];
  }

  const bootstrapData = JSON.parse(appContainer.getAttribute('data-bootstrap'));
  // this module is a little special, it may be loaded before index.jsx,
  // where window.featureFlags get initialized
  // eslint-disable-next-line camelcase
  (0,src_featureFlags__WEBPACK_IMPORTED_MODULE_0__/* .initFeatureFlags */ .fG)(bootstrapData == null ? void 0 : (_bootstrapData$common = bootstrapData.common) == null ? void 0 : _bootstrapData$common.feature_flags);
  const availableDomains = new Set([window.location.hostname]);
  if (
  (0,src_featureFlags__WEBPACK_IMPORTED_MODULE_0__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_1__/* .FeatureFlag.ALLOW_DASHBOARD_DOMAIN_SHARDING */ .T.ALLOW_DASHBOARD_DOMAIN_SHARDING) &&
  bootstrapData &&
  bootstrapData.common &&
  bootstrapData.common.conf &&
  bootstrapData.common.conf.SUPERSET_WEBSERVER_DOMAINS)
  {
    bootstrapData.common.conf.SUPERSET_WEBSERVER_DOMAINS.forEach((hostName) => {
      availableDomains.add(hostName);
    });
  }
  return Array.from(availableDomains);
}

const availableDomains = getDomainsConfig();

const allowCrossDomain = availableDomains.length > 1;

/***/ }),

/***/ 87183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ Radio)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37840);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55742);
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


const StyledRadio = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .iK)(antd__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)`
  .ant-radio-inner {
    top: -1px;
    left: 2px;
    width: ${({ theme }) => theme.gridUnit * 4}px;
    height: ${({ theme }) => theme.gridUnit * 4}px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.grayscale.light2};
  }

  .ant-radio.ant-radio-checked {
    .ant-radio-inner {
      border-width: ${({ theme }) => theme.gridUnit + 1}px;
      border-color: ${({ theme }) => theme.colors.primary.base};
    }

    .ant-radio-inner::after {
      background-color: ${({ theme }) => theme.colors.grayscale.light5};
      top: 0;
      left: 0;
      width: ${({ theme }) => theme.gridUnit + 2}px;
      height: ${({ theme }) => theme.gridUnit + 2}px;
    }
  }

  .ant-radio:hover,
  .ant-radio:focus {
    .ant-radio-inner {
      border-color: ${({ theme }) => theme.colors.primary.dark1};
    }
  }
`;
const StyledGroup = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .iK)(antd__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Group */ .ZP.Group)`
  font-size: inherit;
`;
const Radio = Object.assign(StyledRadio, {
  Group: StyledGroup });

/***/ }),

/***/ 27600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v2": () => (/* binding */ DATETIME_WITH_TIME_ZONE),
/* harmony export */   "n2": () => (/* binding */ TIME_WITH_MS),
/* harmony export */   "Ly": () => (/* binding */ BOOL_TRUE_DISPLAY),
/* harmony export */   "gz": () => (/* binding */ BOOL_FALSE_DISPLAY),
/* harmony export */   "KD": () => (/* binding */ URL_PARAMS),
/* harmony export */   "oP": () => (/* binding */ FAST_DEBOUNCE),
/* harmony export */   "M$": () => (/* binding */ SLOW_DEBOUNCE)
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
const DATETIME_WITH_TIME_ZONE = 'YYYY-MM-DD HH:mm:ssZ';
const TIME_WITH_MS = 'HH:mm:ss.SSS';
const BOOL_TRUE_DISPLAY = 'True';
const BOOL_FALSE_DISPLAY = 'False';
const URL_PARAMS = {
  standalone: {
    name: 'standalone',
    type: 'number' },

  preselectFilters: {
    name: 'preselect_filters',
    type: 'object' },

  nativeFilters: {
    name: 'native_filters',
    type: 'rison' },

  filterSet: {
    name: 'filter_set',
    type: 'string' },

  showFilters: {
    name: 'show_filters',
    type: 'boolean' } };


/**
 * Faster debounce delay for inputs without expensive operation.
 */
const FAST_DEBOUNCE = 250;
/**
 * Slower debounce delay for inputs with expensive API calls.
 */
const SLOW_DEBOUNCE = 500;

/***/ }),

/***/ 69856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YY": () => (/* binding */ AGGREGATES),
/* harmony export */   "Ps": () => (/* binding */ AGGREGATES_OPTIONS),
/* harmony export */   "d": () => (/* binding */ Operators),
/* harmony export */   "LT": () => (/* binding */ OPERATOR_ENUM_TO_OPERATOR_TYPE),
/* harmony export */   "GS": () => (/* binding */ OPERATORS_OPTIONS),
/* harmony export */   "QB": () => (/* binding */ TABLE_ONLY_OPERATORS),
/* harmony export */   "fV": () => (/* binding */ DRUID_ONLY_OPERATORS),
/* harmony export */   "Ak": () => (/* binding */ HAVING_OPERATORS),
/* harmony export */   "qK": () => (/* binding */ MULTI_OPERATORS),
/* harmony export */   "qB": () => (/* binding */ CUSTOM_OPERATORS),
/* harmony export */   "yi": () => (/* binding */ DISABLE_INPUT_OPERATORS),
/* harmony export */   "Q_": () => (/* binding */ sqlaAutoGeneratedMetricRegex),
/* harmony export */   "m_": () => (/* binding */ TIME_FILTER_LABELS),
/* harmony export */   "ft": () => (/* binding */ FILTER_CONFIG_ATTRIBUTES),
/* harmony export */   "cM": () => (/* binding */ FILTER_OPTIONS_LIMIT),
/* harmony export */   "i2": () => (/* binding */ TIME_FILTER_MAP),
/* harmony export */   "X5": () => (/* binding */ DEFAULT_TIME_RANGE),
/* harmony export */   "vM": () => (/* binding */ NO_TIME_RANGE)
/* harmony export */ });
/* unused harmony exports sqlaAutoGeneratedMetricNameRegex, druidAutoGeneratedMetricRegex */
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

const AGGREGATES = {
  AVG: 'AVG',
  COUNT: 'COUNT',
  COUNT_DISTINCT: 'COUNT_DISTINCT',
  MAX: 'MAX',
  MIN: 'MIN',
  SUM: 'SUM' };

const AGGREGATES_OPTIONS = Object.values(AGGREGATES);
var Operators;
(function (Operators) {
  Operators["EQUALS"] = "EQUALS";
  Operators["NOT_EQUALS"] = "NOT_EQUALS";
  Operators["LESS_THAN"] = "LESS_THAN";
  Operators["GREATER_THAN"] = "GREATER_THAN";
  Operators["LESS_THAN_OR_EQUAL"] = "LESS_THAN_OR_EQUAL";
  Operators["GREATER_THAN_OR_EQUAL"] = "GREATER_THAN_OR_EQUAL";
  Operators["IN"] = "IN";
  Operators["NOT_IN"] = "NOT_IN";
  Operators["ILIKE"] = "ILIKE";
  Operators["LIKE"] = "LIKE";
  Operators["REGEX"] = "REGEX";
  Operators["IS_NOT_NULL"] = "IS_NOT_NULL";
  Operators["IS_NULL"] = "IS_NULL";
  Operators["LATEST_PARTITION"] = "LATEST_PARTITION";
  Operators["IS_TRUE"] = "IS_TRUE";
  Operators["IS_FALSE"] = "IS_FALSE";
})(Operators || (Operators = {}));
const OPERATOR_ENUM_TO_OPERATOR_TYPE = {
  [Operators.EQUALS]: { display: 'equals', operation: '==' },
  [Operators.NOT_EQUALS]: { display: 'not equals', operation: '!=' },
  [Operators.GREATER_THAN]: { display: '>', operation: '>' },
  [Operators.LESS_THAN]: { display: '<', operation: '<' },
  [Operators.GREATER_THAN_OR_EQUAL]: { display: '>=', operation: '>=' },
  [Operators.LESS_THAN_OR_EQUAL]: { display: '<=', operation: '<=' },
  [Operators.IN]: { display: 'IN', operation: 'IN' },
  [Operators.NOT_IN]: { display: 'NOT IN', operation: 'NOT IN' },
  [Operators.LIKE]: { display: 'LIKE', operation: 'LIKE' },
  [Operators.ILIKE]: { display: 'LIKE (case insensitive)', operation: 'ILIKE' },
  [Operators.REGEX]: { display: 'REGEX', operation: 'REGEX' },
  [Operators.IS_NOT_NULL]: { display: 'IS NOT NULL', operation: 'IS NOT NULL' },
  [Operators.IS_NULL]: { display: 'IS NULL', operation: 'IS NULL' },
  [Operators.LATEST_PARTITION]: {
    display: 'use latest_partition template',
    operation: 'LATEST PARTITION' },

  [Operators.IS_TRUE]: { display: 'IS TRUE', operation: '==' },
  [Operators.IS_FALSE]: { display: 'IS FALSE', operation: '==' } };

const OPERATORS_OPTIONS = Object.values(Operators);
const TABLE_ONLY_OPERATORS = [Operators.LIKE, Operators.ILIKE];
const DRUID_ONLY_OPERATORS = [Operators.REGEX];
const HAVING_OPERATORS = [
Operators.EQUALS,
Operators.NOT_EQUALS,
Operators.GREATER_THAN,
Operators.LESS_THAN,
Operators.GREATER_THAN_OR_EQUAL,
Operators.LESS_THAN_OR_EQUAL];

const MULTI_OPERATORS = new Set([Operators.IN, Operators.NOT_IN]);
// CUSTOM_OPERATORS will show operator in simple mode,
// but will generate customized sqlExpression
const CUSTOM_OPERATORS = new Set([Operators.LATEST_PARTITION]);
// DISABLE_INPUT_OPERATORS will disable filter value input
// in adhocFilter control
const DISABLE_INPUT_OPERATORS = [
Operators.IS_NOT_NULL,
Operators.IS_NULL,
Operators.LATEST_PARTITION,
Operators.IS_TRUE,
Operators.IS_FALSE];

const sqlaAutoGeneratedMetricNameRegex = /^(sum|min|max|avg|count|count_distinct)__.*$/i;
const sqlaAutoGeneratedMetricRegex = /^(LONG|DOUBLE|FLOAT)?(SUM|AVG|MAX|MIN|COUNT)\([A-Z0-9_."]*\)$/i;
const druidAutoGeneratedMetricRegex = /^(LONG|DOUBLE|FLOAT)?(SUM|MAX|MIN|COUNT)\([A-Z0-9_."]*\)$/i;
const TIME_FILTER_LABELS = {
  time_range: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Time range'),
  granularity_sqla: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Time column'),
  time_grain_sqla: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Time grain'),
  druid_time_origin: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Origin'),
  granularity: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Time granularity') };

const FILTER_CONFIG_ATTRIBUTES = {
  DEFAULT_VALUE: 'defaultValue',
  MULTIPLE: 'multiple',
  SEARCH_ALL_OPTIONS: 'searchAllOptions',
  CLEARABLE: 'clearable' };

const FILTER_OPTIONS_LIMIT = 1000;
/**
 * Map control names to their key in extra_filters
 */
const TIME_FILTER_MAP = {
  time_range: '__time_range',
  granularity_sqla: '__time_col',
  time_grain_sqla: '__time_grain',
  druid_time_origin: '__time_origin',
  granularity: '__granularity' };

// TODO: make this configurable per Superset installation
const DEFAULT_TIME_RANGE = 'No filter';
const NO_TIME_RANGE = 'No filter';

/***/ }),

/***/ 9679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ safeStringify)
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
 * A Stringify function that will not crash when it runs into circular JSON references,
 * unlike JSON.stringify. Any circular references are simply omitted, as if there had
 * been no data present
 * @param object any JSON object to be stringified
 */
function safeStringify(object) {
  const cache = new Set();
  return JSON.stringify(object, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        // We've seen this object before
        try {
          // Quick deep copy to duplicate if this is a repeat rather than a circle.
          return JSON.parse(JSON.stringify(value));
        }
        catch (err) {
          // Discard key if value cannot be duplicated.
          return; // eslint-disable-line consistent-return
        }
      }
      // Store the value in our cache.
      cache.add(value);
    }
    return value;
  });
}

/***/ })

}]);