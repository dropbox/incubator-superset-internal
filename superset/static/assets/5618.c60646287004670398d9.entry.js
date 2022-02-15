"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[5618],{

/***/ 5144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ChartContainer)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(37703);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./src/chart/chartAction.js
var chartAction = __webpack_require__(22428);
// EXTERNAL MODULE: ./src/logger/actions/index.ts
var actions = __webpack_require__(97381);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/Alert/index.tsx
var Alert = __webpack_require__(29487);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/logging.js
var logging = __webpack_require__(23099);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./src/dashboard/constants.ts
var constants = __webpack_require__(9531);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(38703);
// EXTERNAL MODULE: ./src/components/ErrorBoundary/index.jsx
var ErrorBoundary = __webpack_require__(57902);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/lodash/snakeCase.js
var snakeCase = __webpack_require__(11865);
var snakeCase_default = /*#__PURE__*/__webpack_require__.n(snakeCase);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/components/SuperChart.js + 3 modules
var SuperChart = __webpack_require__(25945);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/types/Base.js
var Base = __webpack_require__(52686);
// EXTERNAL MODULE: ./src/logger/LogUtils.ts
var LogUtils = __webpack_require__(3741);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/chart/ChartRenderer.jsx
























const propTypes = {
  annotationData: (prop_types_default()).object,
  actions: (prop_types_default()).object,
  chartId: (prop_types_default()).number.isRequired,
  datasource: (prop_types_default()).object,
  initialValues: (prop_types_default()).object,
  formData: (prop_types_default()).object.isRequired,
  labelColors: (prop_types_default()).object,
  height: (prop_types_default()).number,
  width: (prop_types_default()).number,
  setControlValue: (prop_types_default()).func,
  vizType: (prop_types_default()).string.isRequired,
  triggerRender: (prop_types_default()).bool,
  // state
  chartAlert: (prop_types_default()).string,
  chartStatus: (prop_types_default()).string,
  queriesResponse: prop_types_default().arrayOf((prop_types_default()).object),
  triggerQuery: (prop_types_default()).bool,
  refreshOverlayVisible: (prop_types_default()).bool,
  // dashboard callbacks
  addFilter: (prop_types_default()).func,
  setDataMask: (prop_types_default()).func,
  onFilterMenuOpen: (prop_types_default()).func,
  onFilterMenuClose: (prop_types_default()).func,
  ownState: (prop_types_default()).object };


const BLANK = {};

const defaultProps = {
  addFilter: () => BLANK,
  onFilterMenuOpen: () => BLANK,
  onFilterMenuClose: () => BLANK,
  initialValues: BLANK,
  setControlValue() {},
  triggerRender: false };


class ChartRenderer extends react.Component {
  constructor(props) {
    super(props);
    this.hasQueryResponseChange = false;

    this.handleAddFilter = this.handleAddFilter.bind(this);
    this.handleRenderSuccess = this.handleRenderSuccess.bind(this);
    this.handleRenderFailure = this.handleRenderFailure.bind(this);
    this.handleSetControlValue = this.handleSetControlValue.bind(this);

    this.hooks = {
      onAddFilter: this.handleAddFilter,
      onError: this.handleRenderFailure,
      setControlValue: this.handleSetControlValue,
      onFilterMenuOpen: this.props.onFilterMenuOpen,
      onFilterMenuClose: this.props.onFilterMenuClose,
      setDataMask: (dataMask) => {var _this$props$actions;
        (_this$props$actions = this.props.actions) == null ? void 0 : _this$props$actions.updateDataMask(this.props.chartId, dataMask);
      } };

  }

  shouldComponentUpdate(nextProps) {var _nextProps$queriesRes, _nextProps$queriesRes2;
    const resultsReady =
    nextProps.queriesResponse &&
    ['success', 'rendered'].indexOf(nextProps.chartStatus) > -1 &&
    !((_nextProps$queriesRes = nextProps.queriesResponse) != null && (_nextProps$queriesRes2 = _nextProps$queriesRes[0]) != null && _nextProps$queriesRes2.error) &&
    !nextProps.refreshOverlayVisible;

    if (resultsReady) {
      this.hasQueryResponseChange =
      nextProps.queriesResponse !== this.props.queriesResponse;
      return (
        this.hasQueryResponseChange ||
        !isEqual_default()(nextProps.datasource, this.props.datasource) ||
        nextProps.annotationData !== this.props.annotationData ||
        nextProps.ownState !== this.props.ownState ||
        nextProps.filterState !== this.props.filterState ||
        nextProps.height !== this.props.height ||
        nextProps.width !== this.props.width ||
        nextProps.triggerRender ||
        nextProps.labelColors !== this.props.labelColors ||
        nextProps.formData.color_scheme !== this.props.formData.color_scheme ||
        nextProps.cacheBusterProp !== this.props.cacheBusterProp);

    }
    return false;
  }

  handleAddFilter(col, vals, merge = true, refresh = true) {
    this.props.addFilter(col, vals, merge, refresh);
  }

  handleRenderSuccess() {
    const { actions, chartStatus, chartId, vizType } = this.props;
    if (['loading', 'rendered'].indexOf(chartStatus) < 0) {
      actions.chartRenderingSucceeded(chartId);
    }

    // only log chart render time which is triggered by query results change
    // currently we don't log chart re-render time, like window resize etc
    if (this.hasQueryResponseChange) {
      actions.logEvent(LogUtils/* LOG_ACTIONS_RENDER_CHART */.aD, {
        slice_id: chartId,
        viz_type: vizType,
        start_offset: this.renderStartTime,
        ts: new Date().getTime(),
        duration: LogUtils/* Logger.getTimestamp */.Yd.getTimestamp() - this.renderStartTime });

    }
  }

  handleRenderFailure(error, info) {
    const { actions, chartId } = this.props;
    logging/* default.warn */.Z.warn(error);
    actions.chartRenderingFailed(
    error.toString(),
    chartId,
    info ? info.componentStack : null);


    // only trigger render log when query is changed
    if (this.hasQueryResponseChange) {
      actions.logEvent(LogUtils/* LOG_ACTIONS_RENDER_CHART */.aD, {
        slice_id: chartId,
        has_err: true,
        error_details: error.toString(),
        start_offset: this.renderStartTime,
        ts: new Date().getTime(),
        duration: LogUtils/* Logger.getTimestamp */.Yd.getTimestamp() - this.renderStartTime });

    }
  }

  handleSetControlValue(...args) {
    const { setControlValue } = this.props;
    if (setControlValue) {
      setControlValue(...args);
    }
  }

  render() {
    const {
      chartAlert,
      chartStatus,
      vizType,
      chartId,
      refreshOverlayVisible } =
    this.props;

    // Skip chart rendering
    if (
    refreshOverlayVisible ||
    chartStatus === 'loading' ||
    !!chartAlert ||
    chartStatus === null)
    {
      return null;
    }

    this.renderStartTime = LogUtils/* Logger.getTimestamp */.Yd.getTimestamp();

    const {
      width,
      height,
      datasource,
      annotationData,
      initialValues,
      ownState,
      filterState,
      formData,
      queriesResponse } =
    this.props;

    // It's bad practice to use unprefixed `vizType` as classnames for chart
    // container. It may cause css conflicts as in the case of legacy table chart.
    // When migrating charts, we should gradually add a `superset-chart-` prefix
    // to each one of them.
    const snakeCaseVizType = snakeCase_default()(vizType);
    const chartClassName =
    vizType === 'table' ?
    `superset-chart-${snakeCaseVizType}` :
    snakeCaseVizType;

    const webpackHash =
     false ?
    0 :
    '';

    return (
      (0,emotion_react_browser_esm.jsx)(SuperChart/* default */.Z, {
        disableErrorBoundary: true,
        key: `${chartId}${webpackHash}`,
        id: `chart-id-${chartId}`,
        className: chartClassName,
        chartType: vizType,
        width: width,
        height: height,
        annotationData: annotationData,
        datasource: datasource,
        initialValues: initialValues,
        formData: formData,
        ownState: ownState,
        filterState: filterState,
        hooks: this.hooks,
        behaviors: [Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART],
        queriesData: queriesResponse,
        onRenderSuccess: this.handleRenderSuccess,
        onRenderFailure: this.handleRenderFailure }));


  }}


ChartRenderer.propTypes = propTypes;
ChartRenderer.defaultProps = defaultProps;

/* harmony default export */ const chart_ChartRenderer = (ChartRenderer);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./src/common/hooks/apiResources/index.ts + 3 modules
var apiResources = __webpack_require__(29432);
// EXTERNAL MODULE: ./src/components/ErrorMessage/ErrorMessageWithStackTrace.tsx
var ErrorMessageWithStackTrace = __webpack_require__(72875);
;// CONCATENATED MODULE: ./src/chart/ChartErrorMessage.tsx
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
 * fetches the chart owners and adds them to the extra data of the error message
 */
const ChartErrorMessage = ({ chartId, error, ...props }) => {
  const { result: owners } = (0,apiResources/* useChartOwnerNames */.hb)(chartId);
  // don't mutate props
  const ownedError = error && {
    ...error,
    extra: { ...error.extra, owners } };

  return (0,emotion_react_browser_esm.jsx)(ErrorMessageWithStackTrace/* default */.Z, extends_default()({}, props, { error: ownedError }));
};
;// CONCATENATED MODULE: ./src/chart/Chart.jsx
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














const Chart_propTypes = {
  annotationData: (prop_types_default()).object,
  actions: (prop_types_default()).object,
  chartId: (prop_types_default()).number.isRequired,
  datasource: (prop_types_default()).object,
  // current chart is included by dashboard
  dashboardId: (prop_types_default()).number,
  // original selected values for FilterBox viz
  // so that FilterBox can pre-populate selected values
  // only affect UI control
  initialValues: (prop_types_default()).object,
  // formData contains chart's own filter parameter
  // and merged with extra filter that current dashboard applying
  formData: (prop_types_default()).object.isRequired,
  labelColors: (prop_types_default()).object,
  width: (prop_types_default()).number,
  height: (prop_types_default()).number,
  setControlValue: (prop_types_default()).func,
  timeout: (prop_types_default()).number,
  vizType: (prop_types_default()).string.isRequired,
  triggerRender: (prop_types_default()).bool,
  isFiltersInitialized: (prop_types_default()).bool,
  // state
  chartAlert: (prop_types_default()).string,
  chartStatus: (prop_types_default()).string,
  chartStackTrace: (prop_types_default()).string,
  queriesResponse: prop_types_default().arrayOf((prop_types_default()).object),
  triggerQuery: (prop_types_default()).bool,
  refreshOverlayVisible: (prop_types_default()).bool,
  errorMessage: (prop_types_default()).node,
  // dashboard callbacks
  addFilter: (prop_types_default()).func,
  onQuery: (prop_types_default()).func,
  onFilterMenuOpen: (prop_types_default()).func,
  onFilterMenuClose: (prop_types_default()).func,
  ownState: (prop_types_default()).object };


const Chart_BLANK = {};
const NONEXISTENT_DATASET = (0,TranslatorSingleton.t)(
'The dataset associated with this chart no longer exists');


const Chart_defaultProps = {
  addFilter: () => Chart_BLANK,
  onFilterMenuOpen: () => Chart_BLANK,
  onFilterMenuClose: () => Chart_BLANK,
  initialValues: Chart_BLANK,
  setControlValue() {},
  triggerRender: false,
  dashboardId: null,
  chartStackTrace: null };


const Styles = style/* styled.div */.iK.div`
  min-height: ${(p) => p.height}px;
  position: relative;

  .chart-tooltip {
    opacity: 0.75;
    font-size: ${({ theme }) => theme.typography.sizes.s}px;
  }
`;

const RefreshOverlayWrapper = style/* styled.div */.iK.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Chart extends react.PureComponent {
  constructor(props) {
    super(props);
    this.handleRenderContainerFailure = this.handleRenderContainerFailure.bind(
    this);

  }

  componentDidMount() {
    if (this.props.triggerQuery) {
      this.runQuery();
    }
  }

  componentDidUpdate() {
    if (this.props.triggerQuery) {
      this.runQuery();
    }
  }

  runQuery() {
    if (this.props.chartId > 0 && (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.CLIENT_CACHE */.T.CLIENT_CACHE)) {
      // Load saved chart with a GET request
      this.props.actions.getSavedChart(
      this.props.formData,
      false,
      this.props.timeout,
      this.props.chartId,
      this.props.dashboardId,
      this.props.ownState);

    } else {
      // Create chart with POST request
      this.props.actions.postChartFormData(
      this.props.formData,
      false,
      this.props.timeout,
      this.props.chartId,
      this.props.dashboardId,
      this.props.ownState);

    }
  }

  handleRenderContainerFailure(error, info) {
    const { actions, chartId } = this.props;
    logging/* default.warn */.Z.warn(error);
    actions.chartRenderingFailed(
    error.toString(),
    chartId,
    info ? info.componentStack : null);


    actions.logEvent(LogUtils/* LOG_ACTIONS_RENDER_CHART */.aD, {
      slice_id: chartId,
      has_err: true,
      error_details: error.toString(),
      start_offset: this.renderStartTime,
      ts: new Date().getTime(),
      duration: LogUtils/* Logger.getTimestamp */.Yd.getTimestamp() - this.renderStartTime });

  }

  renderErrorMessage(queryResponse) {var _queryResponse$errors;
    const {
      chartId,
      chartAlert,
      chartStackTrace,
      datasource,
      dashboardId,
      height } =
    this.props;

    const error = queryResponse == null ? void 0 : (_queryResponse$errors = queryResponse.errors) == null ? void 0 : _queryResponse$errors[0];
    const message = chartAlert || (queryResponse == null ? void 0 : queryResponse.message);

    // if datasource is still loading, don't render JS errors
    if (
    chartAlert !== undefined &&
    chartAlert !== NONEXISTENT_DATASET &&
    datasource === constants/* PLACEHOLDER_DATASOURCE */.t)
    {
      return (
        (0,emotion_react_browser_esm.jsx)(Styles, {
          "data-ui-anchor": "chart",
          className: "chart-container",

          height: height },

        (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null)));


    }

    return (
      (0,emotion_react_browser_esm.jsx)(ChartErrorMessage, {
        chartId: chartId,
        error: error,
        subtitle: message,
        copyText: message,
        link: queryResponse ? queryResponse.link : null,
        source: dashboardId ? 'dashboard' : 'explore',
        stackTrace: chartStackTrace }));


  }

  render() {
    const {
      height,
      chartAlert,
      chartStatus,
      errorMessage,
      onQuery,
      refreshOverlayVisible,
      queriesResponse = [] } =
    this.props;

    const isLoading = chartStatus === 'loading';
    const isFaded = refreshOverlayVisible && !errorMessage;
    this.renderContainerStartTime = LogUtils/* Logger.getTimestamp */.Yd.getTimestamp();
    if (chartStatus === 'failed') {
      return queriesResponse.map((item) => this.renderErrorMessage(item));
    }

    if (errorMessage) {
      return (
        (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, {

          message: errorMessage,
          type: "warning" }));


    }

    return (
      (0,emotion_react_browser_esm.jsx)(ErrorBoundary/* default */.Z, {
        onError: this.handleRenderContainerFailure,
        showMessage: false },

      (0,emotion_react_browser_esm.jsx)(Styles, {
        "data-ui-anchor": "chart",
        className: "chart-container",

        height: height },

      (0,emotion_react_browser_esm.jsx)("div", {
        className: `slice_container ${isFaded ? ' faded' : ''}` },


      (0,emotion_react_browser_esm.jsx)(chart_ChartRenderer, this.props)),


      !isLoading && !chartAlert && isFaded &&
      (0,emotion_react_browser_esm.jsx)(RefreshOverlayWrapper, null,
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { onClick: onQuery, buttonStyle: "primary" },
      (0,TranslatorSingleton.t)('Run query'))),




      isLoading && (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null))));



  }}


Chart.propTypes = Chart_propTypes;
Chart.defaultProps = Chart_defaultProps;

/* harmony default export */ const chart_Chart = (Chart);
// EXTERNAL MODULE: ./src/dataMask/actions.ts
var dataMask_actions = __webpack_require__(74599);
;// CONCATENATED MODULE: ./src/chart/ChartContainer.jsx
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








function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)(
    {
      ...chartAction,
      updateDataMask: dataMask_actions/* updateDataMask */.eG,
      logEvent: actions.logEvent },

    dispatch) };


}

/* harmony default export */ const ChartContainer = ((0,es/* connect */.$j)(null, mapDispatchToProps)(chart_Chart));

/***/ }),

/***/ 2275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cP": () => (/* binding */ componentShape),
/* harmony export */   "$6": () => (/* binding */ chartPropShape),
/* harmony export */   "Rw": () => (/* binding */ slicePropShape),
/* harmony export */   "Er": () => (/* binding */ dashboardFilterPropShape),
/* harmony export */   "DZ": () => (/* binding */ dashboardStatePropShape),
/* harmony export */   "$X": () => (/* binding */ dashboardInfoPropShape),
/* harmony export */   "ck": () => (/* binding */ filterScopeSelectorTreeNodePropShape)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _componentTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81255);
/* harmony import */ var _backgroundStyleOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(713);
/* harmony import */ var _headerStyleOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79271);
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





const componentShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(Object.values(_componentTypes__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)).isRequired,
  parents: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)),
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)),
  meta: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    // Dimensions
    width: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),

    // Header
    headerSize: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(_headerStyleOptions__WEBPACK_IMPORTED_MODULE_3__/* ["default"].map */ .Z.map((opt) => opt.value)),

    // Row
    background: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(_backgroundStyleOptions__WEBPACK_IMPORTED_MODULE_2__/* ["default"].map */ .Z.map((opt) => opt.value)),

    // Chart
    chartId: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number) }) });



const chartPropShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  chartAlert: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  chartStatus: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  chartUpdateEndTime: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  chartUpdateStartTime: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  latestQueryFormData: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
  queryController: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({ abort: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func) }),
  queriesResponse: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
  triggerQuery: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  lastRendered: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number) });


const slicePropShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  slice_id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  slice_url: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  slice_name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  datasource: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  datasource_name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  datasource_link: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  changed_on: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  modified: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  viz_type: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  description_markeddown: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  owners: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)) });


const dashboardFilterPropShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  chartId: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  componentId: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  filterName: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  datasourceId: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  directPathToFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)).isRequired,
  isDateFilter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool.isRequired),
  isInstantFilter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool.isRequired),
  columns: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
  labels: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
  scopes: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object) });


const dashboardStatePropShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  sliceIds: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)).isRequired,
  expandedSlices: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
  editMode: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  isPublished: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool.isRequired),
  colorNamespace: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  colorScheme: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  updatedColorScheme: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  hasUnsavedChanges: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool) });


const dashboardInfoPropShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  metadata: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
  slug: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  dash_edit_perm: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool.isRequired),
  dash_save_perm: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool.isRequired),
  common: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
  userId: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired) });


/* eslint-disable-next-line  no-undef */
const lazyFunction = (f) => () => f().apply(undefined, arguments);

const leafType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)]).isRequired,
  label: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired) });


const parentShape = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)]).isRequired,
  label: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(
  prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
  prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape(lazyFunction(() => parentShape)),
  leafType])) };




const filterScopeSelectorTreeNodePropShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape(parentShape),
leafType]);

/***/ }),

/***/ 14086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RowCountLabel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50855);
/* harmony import */ var src_components_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37921);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58593);
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







const propTypes = {
  rowcount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  limit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  rows: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  suffix: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool) };


const defaultProps = {
  suffix: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('rows') };


function RowCountLabel({ rowcount, limit, suffix, loading }) {
  const limitReached = rowcount === limit;
  const type =
  limitReached || rowcount === 0 && !loading ? 'danger' : 'default';
  const formattedRowCount = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .getNumberFormatter */ .JB)()(rowcount);
  const tooltip =
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", null,
  limitReached && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('Limit reached')),
  loading ? 'Loading' : rowcount);


  return (
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__/* .Tooltip */ .u, { id: "tt-rowcount-tooltip", title: tooltip },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_components_Label__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { type: type },
    loading ? 'Loading...' : `${formattedRowCount} ${suffix}`)));



}

RowCountLabel.propTypes = propTypes;
RowCountLabel.defaultProps = defaultProps;

/***/ }),

/***/ 87189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useUrlShortener)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var src_utils_urlUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23525);
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


function useUrlShortener(url) {
  const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [shortUrl, setShortUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  async function getShortUrl() {
    if (update) {
      const newShortUrl = await (0,src_utils_urlUtils__WEBPACK_IMPORTED_MODULE_1__/* .getShortUrl */ .O)(url);
      setShortUrl(newShortUrl);
      setUpdate(false);
      return newShortUrl;
    }
    return shortUrl;
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => setUpdate(true), [url]);
  return getShortUrl;
}

/***/ }),

/***/ 37488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ButtonGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11965);
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
var _ref =  true ? { name: "1qbe4ct", styles: "& :nth-child(1):not(:nth-last-child(1)){border-top-right-radius:0;border-bottom-right-radius:0;border-right:0;margin-left:0;}& :not(:nth-child(1)):not(:nth-last-child(1)){border-radius:0;border-right:0;margin-left:0;}& :nth-last-child(1):not(:nth-child(1)){border-top-left-radius:0;border-bottom-left-radius:0;margin-left:0;}" } : 0;
function ButtonGroup(props) {
  const { className, children } = props;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { role: "group", className: className, css: _ref },

















  children);

}

/***/ }),

/***/ 9433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CronPicker": () => (/* reexport */ CronPicker)
});

// UNUSED EXPORTS: LOCALE

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__(69224);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/react-js-cron/dist/esm/index.js + 12 modules
var esm = __webpack_require__(61247);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/components/CronPicker/CronPicker.tsx
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





const LOCALE = {
  everyText: (0,TranslatorSingleton.t)('every'),
  emptyMonths: (0,TranslatorSingleton.t)('every month'),
  emptyMonthDays: (0,TranslatorSingleton.t)('every day of the month'),
  emptyMonthDaysShort: (0,TranslatorSingleton.t)('day of the month'),
  emptyWeekDays: (0,TranslatorSingleton.t)('every day of the week'),
  emptyWeekDaysShort: (0,TranslatorSingleton.t)('day of the week'),
  emptyHours: (0,TranslatorSingleton.t)('every hour'),
  emptyMinutes: (0,TranslatorSingleton.t)('every minute'),
  emptyMinutesForHourPeriod: (0,TranslatorSingleton.t)('every'),
  yearOption: (0,TranslatorSingleton.t)('year'),
  monthOption: (0,TranslatorSingleton.t)('month'),
  weekOption: (0,TranslatorSingleton.t)('week'),
  dayOption: (0,TranslatorSingleton.t)('day'),
  hourOption: (0,TranslatorSingleton.t)('hour'),
  minuteOption: (0,TranslatorSingleton.t)('minute'),
  rebootOption: (0,TranslatorSingleton.t)('reboot'),
  prefixPeriod: (0,TranslatorSingleton.t)('Every'),
  prefixMonths: (0,TranslatorSingleton.t)('in'),
  prefixMonthDays: (0,TranslatorSingleton.t)('on'),
  prefixWeekDays: (0,TranslatorSingleton.t)('on'),
  prefixWeekDaysForMonthAndYearPeriod: (0,TranslatorSingleton.t)('and'),
  prefixHours: (0,TranslatorSingleton.t)('at'),
  prefixMinutes: (0,TranslatorSingleton.t)(':'),
  prefixMinutesForHourPeriod: (0,TranslatorSingleton.t)('at'),
  suffixMinutesForHourPeriod: (0,TranslatorSingleton.t)('minute(s)'),
  errorInvalidCron: (0,TranslatorSingleton.t)('Invalid cron expression'),
  clearButtonText: (0,TranslatorSingleton.t)('Clear'),
  weekDays: [
  // Order is important, the index will be used as value
  (0,TranslatorSingleton.t)('Sunday'),
  (0,TranslatorSingleton.t)('Monday'),
  (0,TranslatorSingleton.t)('Tuesday'),
  (0,TranslatorSingleton.t)('Wednesday'),
  (0,TranslatorSingleton.t)('Thursday'),
  (0,TranslatorSingleton.t)('Friday'),
  (0,TranslatorSingleton.t)('Saturday')],

  months: [
  // Order is important, the index will be used as value
  (0,TranslatorSingleton.t)('January'),
  (0,TranslatorSingleton.t)('February'),
  (0,TranslatorSingleton.t)('March'),
  (0,TranslatorSingleton.t)('April'),
  (0,TranslatorSingleton.t)('May'),
  (0,TranslatorSingleton.t)('June'),
  (0,TranslatorSingleton.t)('July'),
  (0,TranslatorSingleton.t)('August'),
  (0,TranslatorSingleton.t)('September'),
  (0,TranslatorSingleton.t)('October'),
  (0,TranslatorSingleton.t)('November'),
  (0,TranslatorSingleton.t)('December')],

  // Order is important, the index will be used as value
  altWeekDays: [
  (0,TranslatorSingleton.t)('SUN'),
  (0,TranslatorSingleton.t)('MON'),
  (0,TranslatorSingleton.t)('TUE'),
  (0,TranslatorSingleton.t)('WED'),
  (0,TranslatorSingleton.t)('THU'),
  (0,TranslatorSingleton.t)('FRI'),
  (0,TranslatorSingleton.t)('SAT')],

  // Order is important, the index will be used as value
  altMonths: [
  (0,TranslatorSingleton.t)('JAN'),
  (0,TranslatorSingleton.t)('FEB'),
  (0,TranslatorSingleton.t)('MAR'),
  (0,TranslatorSingleton.t)('APR'),
  (0,TranslatorSingleton.t)('MAY'),
  (0,TranslatorSingleton.t)('JUN'),
  (0,TranslatorSingleton.t)('JUL'),
  (0,TranslatorSingleton.t)('AUG'),
  (0,TranslatorSingleton.t)('SEP'),
  (0,TranslatorSingleton.t)('OCT'),
  (0,TranslatorSingleton.t)('NOV'),
  (0,TranslatorSingleton.t)('DEC')] };


const CronPicker = (0,style/* styled */.iK)((props) => (0,emotion_react_browser_esm.jsx)(config_provider/* default */.ZP, { getPopupContainer: (trigger) => trigger.parentElement },
(0,emotion_react_browser_esm.jsx)(esm/* default */.Z, extends_default()({ locale: LOCALE }, props))))
`
  .react-js-cron-select:not(.react-js-cron-custom-select) > div:first-of-type,
  .react-js-cron-custom-select {
    border-radius: ${({ theme }) => theme.gridUnit}px;
    background-color: ${({ theme }) => theme.colors.grayscale.light4} !important;
  }
  .react-js-cron-custom-select > div:first-of-type {
    border-radius: ${({ theme }) => theme.gridUnit}px;
  }
`;
;// CONCATENATED MODULE: ./src/components/CronPicker/index.ts
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

/***/ 38270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EditableTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
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




function EditableTitle({ canEdit = false, editing = false, extraClasses, multiLine = false, noPermitTooltip, onSaveTitle, showTooltip = true, style, title = '', defaultTitle = '', placeholder = '' }) {
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(editing);
  const [currentTitle, setCurrentTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(title);
  const [lastTitle, setLastTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(title);
  const [contentBoundingRect, setContentBoundingRect] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  // Used so we can access the DOM element if a user clicks on this component.
  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (title !== currentTitle) {
      setLastTitle(currentTitle);
      setCurrentTitle(title);
    }
  }, [title]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isEditing) {
      contentRef.current.focus();
      // move cursor and scroll to the end
      if (contentRef.current.setSelectionRange) {
        const { length } = contentRef.current.value;
        contentRef.current.setSelectionRange(length, length);
        contentRef.current.scrollLeft = contentRef.current.scrollWidth;
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
      }
    }
  }, [isEditing]);
  function handleClick() {
    if (!canEdit || isEditing) {
      return;
    }
    // For multi-line values, save the actual rendered size of the displayed text.
    // Later, if a textarea is constructed for editing the value, we'll need this.
    const contentBounding = contentRef.current ?
    contentRef.current.getBoundingClientRect() :
    null;
    setIsEditing(true);
    setContentBoundingRect(contentBounding);
  }
  function handleBlur() {
    const formattedTitle = currentTitle.trim();
    if (!canEdit) {
      return;
    }
    setIsEditing(false);
    if (!formattedTitle.length) {
      setCurrentTitle(lastTitle);
      return;
    }
    if (lastTitle !== formattedTitle) {
      setLastTitle(formattedTitle);
    }
    if (title !== formattedTitle) {
      onSaveTitle(formattedTitle);
    }
  }
  // tl;dr when a EditableTitle is being edited, typically the Tab that wraps it has been
  // clicked and is focused/active. For accessibility, when the focused tab anchor intercepts
  // the ' ' key (among others, including all arrows) the onChange() doesn't fire. Somehow
  // keydown is still called so we can detect this and manually add a ' ' to the current title
  function handleKeyDown(event) {
    if (event.key === ' ') {
      event.stopPropagation();
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      handleBlur();
    }
  }
  function handleChange(ev) {
    if (!canEdit) {
      return;
    }
    setCurrentTitle(ev.target.value);
  }
  function handleKeyPress(ev) {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      handleBlur();
    }
  }
  let value;
  value = currentTitle;
  if (!isEditing && !currentTitle) {
    value = defaultTitle || title;
  }
  // Construct an inline style based on previously-saved height of the rendered label. Only
  // used in multi-line contexts.
  const editStyle = isEditing && contentBoundingRect ?
  { height: `${contentBoundingRect.height}px` } :
  undefined;
  // Create a textarea when we're editing a multi-line value, otherwise create an input (which may
  // be text or a button).
  let titleComponent = multiLine && isEditing ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", { ref: contentRef, value: value, className: !title ? 'text-muted' : undefined, onKeyDown: handleKeyDown, onChange: handleChange, onBlur: handleBlur, onClick: handleClick, onKeyPress: handleKeyPress, placeholder: placeholder, style: editStyle }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", { ref: contentRef, type: isEditing ? 'text' : 'button', value: value, className: !title ? 'text-muted' : undefined, onKeyDown: handleKeyDown, onChange: handleChange, onBlur: handleBlur, onClick: handleClick, onKeyPress: handleKeyPress, placeholder: placeholder });
  if (showTooltip && !isEditing) {
    titleComponent = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Tooltip */ .u, { id: "title-tooltip", title: canEdit ?
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('Click to edit') :
      noPermitTooltip ||
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)("You don't have the rights to alter this title.") },
    titleComponent);

  }
  if (!canEdit) {
    // don't actually want an input in this case
    titleComponent = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", { title: value },
    value);

  }
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('editable-title', extraClasses, canEdit && 'editable-title--editable', isEditing && 'editable-title--editing'), style: style },
  titleComponent);

}

/***/ }),

/***/ 48600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeaderReportActionsDropDown)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11965);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37703);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60650);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38097);
/* harmony import */ var src_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12441);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82191);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91877);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46415);
/* harmony import */ var src_components_DeleteModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17198);
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








const deleteColor = (theme) => _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.css`
  color: ${theme.colors.error.base};
`;var _ref =  true ? { name: "833hqy", styles: "width:200px" } : 0;
function HeaderReportActionsDropDown({ showReportModal, toggleActive, deleteActiveReport }) {
  const reports = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useSelector */ .v9)((state) => state.reports);
  const reportsIds = Object.keys(reports);
  const report = reports[reportsIds[0]];
  const [currentReportDeleting, setCurrentReportDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const theme = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .useTheme */ .Fg)();
  const toggleActiveKey = async (data, checked) => {
    if (data != null && data.id) {
      toggleActive(data, checked);
    }
  };
  const handleReportDelete = (report) => {
    deleteActiveReport(report);
    setCurrentReportDeleting(null);
  };
  const menu = () => (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_4__/* .Menu */ .v2, { selectable: false, css: _ref },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Item */ .v2.Item, null,
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Email reports active'),
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_components_Switch__WEBPACK_IMPORTED_MODULE_3__/* .Switch */ .r, { checked: report == null ? void 0 : report.active, onClick: (checked) => toggleActiveKey(report, checked), size: "small", css: /*#__PURE__*/(0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.css)({ marginLeft: theme.gridUnit * 2 },  true ? "" : 0,  true ? "" : 0) })),

  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Item */ .v2.Item, { onClick: showReportModal }, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Edit email report')),
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Item */ .v2.Item, { onClick: () => setCurrentReportDeleting(report), css: deleteColor },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Delete email report')));


  return (0,src_featureFlags__WEBPACK_IMPORTED_MODULE_9__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_10__/* .FeatureFlag.ALERT_REPORTS */ .T.ALERT_REPORTS) ? (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_4__/* .NoAnimationDropdown */ .$i
  // ref={ref}
  , { overlay: menu(), trigger: ['click'], getPopupContainer: (triggerNode) => triggerNode.closest('.action-button') },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", { role: "button", className: "action-button", tabIndex: 0 },
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Calendar */ .Z.Calendar, null))),


  currentReportDeleting && (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_components_DeleteModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, { description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('This action will permanently delete %s.', currentReportDeleting.name), onConfirm: () => {
      if (currentReportDeleting) {
        handleReportDelete(currentReportDeleting);
      }
    }, onHide: () => setCurrentReportDeleting(null), open: true, title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.t)('Delete Report?') })) :
  null;
}

/***/ }),

/***/ 97860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ReportModal)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(37703);
// EXTERNAL MODULE: ./src/reports/actions/reports.js
var actions_reports = __webpack_require__(61358);
// EXTERNAL MODULE: ./src/components/TimezoneSelector/index.tsx
var TimezoneSelector = __webpack_require__(98978);
// EXTERNAL MODULE: ./src/components/Form/LabeledErrorBoundInput.tsx + 1 modules
var LabeledErrorBoundInput = __webpack_require__(70917);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/components/Radio/index.tsx
var Radio = __webpack_require__(87183);
// EXTERNAL MODULE: ./src/components/CronPicker/index.ts + 1 modules
var CronPicker = __webpack_require__(9433);
;// CONCATENATED MODULE: ./src/components/ReportModal/styles.tsx
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





const StyledModal = (0,style/* styled */.iK)(Modal/* default */.Z)`
  .ant-modal-body {
    padding: 0;
  }

  h4 {
    font-weight: 600;
  }
`;
const StyledTopSection = style/* styled.div */.iK.div`
  padding: ${({ theme }) => `${theme.gridUnit * 3}px ${theme.gridUnit * 4}px ${theme.gridUnit * 2}px`};
  label {
    font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
    color: ${({ theme }) => theme.colors.grayscale.light1};
  }
`;
const StyledBottomSection = style/* styled.div */.iK.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  padding: ${({ theme }) => `${theme.gridUnit * 4}px ${theme.gridUnit * 4}px ${theme.gridUnit * 6}px`};
  .ant-select {
    width: 100%;
  }
  .control-label {
    font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
    color: ${({ theme }) => theme.colors.grayscale.light1};
  }
`;
const StyledIconWrapper = style/* styled.span */.iK.span`
  span {
    margin-right: ${({ theme }) => theme.gridUnit * 2}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
`;
const StyledScheduleTitle = style/* styled.div */.iK.div`
  margin-bottom: ${({ theme }) => theme.gridUnit * 7}px;

  h4 {
    margin-bottom: ${({ theme }) => theme.gridUnit * 3}px;
  }
`;
const StyledCronPicker = (0,style/* styled */.iK)(CronPicker.CronPicker)`
  margin-bottom: ${({ theme }) => theme.gridUnit * 3}px;
`;
const StyledCronError = style/* styled.p */.iK.p`
  color: ${({ theme }) => theme.colors.error.base};
`;
const noBottomMargin = emotion_react_browser_esm.css`
  margin-bottom: 0;
`;
const StyledFooterButton = (0,style/* styled */.iK)(Button/* default */.Z)`
  width: ${({ theme }) => theme.gridUnit * 40}px;
`;
const TimezoneHeaderStyle = (theme) => emotion_react_browser_esm.css`
  margin: ${theme.gridUnit * 3}px 0 ${theme.gridUnit * 2}px;
`;
const SectionHeaderStyle = (theme) => emotion_react_browser_esm.css`
  margin: ${theme.gridUnit * 3}px 0;
  font-weight: ${theme.typography.weights.bold};
`;
const StyledMessageContentTitle = style/* styled.div */.iK.div`
  margin: ${({ theme }) => theme.gridUnit * 8}px 0
    ${({ theme }) => theme.gridUnit * 4}px;
`;
const StyledRadio = (0,style/* styled */.iK)(Radio/* Radio */.Y)`
  display: block;
  line-height: ${({ theme }) => theme.gridUnit * 8}px;
`;
const StyledRadioGroup = (0,style/* styled */.iK)(Radio/* Radio.Group */.Y.Group)`
  margin-left: ${({ theme }) => theme.gridUnit * 0.5}px;
`;
;// CONCATENATED MODULE: ./src/components/ReportModal/index.tsx
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










var ActionType;
(function (ActionType) {
  ActionType[ActionType["inputChange"] = 0] = "inputChange";
  ActionType[ActionType["fetched"] = 1] = "fetched";
  ActionType[ActionType["reset"] = 2] = "reset";
})(ActionType || (ActionType = {}));
const TEXT_BASED_VISUALIZATION_TYPES = [
'pivot_table',
'pivot_table_v2',
'table',
'paired_ttest'];

const NOTIFICATION_FORMATS = {
  TEXT: 'TEXT',
  PNG: 'PNG',
  CSV: 'CSV' };

const reportReducer = (state, action) => {
  const initialState = {
    name: 'Weekly Report' };

  switch (action.type) {
    case ActionType.inputChange:
      return {
        ...initialState,
        ...state,
        [action.payload.name]: action.payload.value };

    case ActionType.fetched:
      return {
        ...initialState,
        ...action.payload };

    case ActionType.reset:
      return { ...initialState };
    default:
      return state;}

};
const ReportModal = ({ onReportAdd, onHide, show = false, ...props }) => {var _props$props$chart, _props$props$chart$sl;
  const vizType = (_props$props$chart = props.props.chart) == null ? void 0 : (_props$props$chart$sl = _props$props$chart.sliceFormData) == null ? void 0 : _props$props$chart$sl.viz_type;
  const isChart = !!props.props.chart;
  const defaultNotificationFormat = isChart && TEXT_BASED_VISUALIZATION_TYPES.includes(vizType) ?
  NOTIFICATION_FORMATS.TEXT :
  NOTIFICATION_FORMATS.PNG;
  const [currentReport, setCurrentReport] = (0,react.useReducer)(reportReducer, null);
  const onChange = (0,react.useCallback)((type, payload) => {
    setCurrentReport({ type, payload });
  }, []);
  const [error, setError] = (0,react.useState)();
  // const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = (0,es/* useDispatch */.I0)();
  // Report fetch logic
  const reports = (0,es/* useSelector */.v9)((state) => state.reports);
  const isEditMode = reports && Object.keys(reports).length;
  (0,react.useEffect)(() => {
    if (isEditMode) {
      const reportsIds = Object.keys(reports);
      const report = reports[reportsIds[0]];
      setCurrentReport({
        type: ActionType.fetched,
        payload: report });

    } else
    {
      setCurrentReport({
        type: ActionType.reset });

    }
  }, [reports]);
  const onClose = () => {
    onHide();
  };
  const onSave = async () => {var _props$props$chart2;
    // Create new Report
    const newReportValues = {
      crontab: currentReport == null ? void 0 : currentReport.crontab,
      dashboard: props.props.dashboardId,
      chart: (_props$props$chart2 = props.props.chart) == null ? void 0 : _props$props$chart2.id,
      description: currentReport == null ? void 0 : currentReport.description,
      name: currentReport == null ? void 0 : currentReport.name,
      owners: [props.props.userId],
      recipients: [
      {
        recipient_config_json: { target: props.props.userEmail },
        type: 'Email' }],


      type: 'Report',
      creation_method: props.props.creationMethod,
      active: true,
      report_format: (currentReport == null ? void 0 : currentReport.report_format) || defaultNotificationFormat,
      timezone: currentReport == null ? void 0 : currentReport.timezone };

    if (isEditMode) {
      await dispatch((0,actions_reports/* editReport */.Me)(currentReport == null ? void 0 : currentReport.id, newReportValues));
    } else
    {
      await dispatch((0,actions_reports/* addReport */.cq)(newReportValues));
    }
    if (onReportAdd) {
      onReportAdd();
    }
    onClose();
  };
  const wrappedTitle = (0,emotion_react_browser_esm.jsx)(StyledIconWrapper, null,
  (0,emotion_react_browser_esm.jsx)(Icons/* default.Calendar */.Z.Calendar, null),
  (0,emotion_react_browser_esm.jsx)("span", { className: "text" },
  isEditMode ? (0,TranslatorSingleton.t)('Edit Email Report') : (0,TranslatorSingleton.t)('New Email Report')));


  const renderModalFooter = (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(StyledFooterButton, { key: "back", onClick: onClose },
  (0,TranslatorSingleton.t)('Cancel')),

  (0,emotion_react_browser_esm.jsx)(StyledFooterButton, { key: "submit", buttonStyle: "primary", onClick: onSave, disabled: !(currentReport != null && currentReport.name) },
  isEditMode ? (0,TranslatorSingleton.t)('Save') : (0,TranslatorSingleton.t)('Add')));


  const renderMessageContentSection = (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(StyledMessageContentTitle, null,
  (0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Message Content'))),

  (0,emotion_react_browser_esm.jsx)("div", { className: "inline-container" },
  (0,emotion_react_browser_esm.jsx)(StyledRadioGroup, { onChange: (event) => {
      onChange(ActionType.inputChange, {
        name: 'report_format',
        value: event.target.value });

    }, value: (currentReport == null ? void 0 : currentReport.report_format) || defaultNotificationFormat },
  TEXT_BASED_VISUALIZATION_TYPES.includes(vizType) && (0,emotion_react_browser_esm.jsx)(StyledRadio, { value: NOTIFICATION_FORMATS.TEXT },
  (0,TranslatorSingleton.t)('Text embedded in email')),

  (0,emotion_react_browser_esm.jsx)(StyledRadio, { value: NOTIFICATION_FORMATS.PNG },
  (0,TranslatorSingleton.t)('Image (PNG) embedded in email')),

  (0,emotion_react_browser_esm.jsx)(StyledRadio, { value: NOTIFICATION_FORMATS.CSV },
  (0,TranslatorSingleton.t)('Formatted CSV attached in email')))));




  return (0,emotion_react_browser_esm.jsx)(StyledModal, { show: show, onHide: onClose, title: wrappedTitle, footer: renderModalFooter, width: "432", centered: true },
  (0,emotion_react_browser_esm.jsx)(StyledTopSection, null,
  (0,emotion_react_browser_esm.jsx)(LabeledErrorBoundInput/* default */.Z, { id: "name", name: "name", value: (currentReport == null ? void 0 : currentReport.name) || '', placeholder: "Weekly Report", required: true, validationMethods: {
      onChange: ({ target }) => onChange(ActionType.inputChange, {
        name: target.name,
        value: target.value }) },

    errorMessage: (currentReport == null ? void 0 : currentReport.name) === 'error' ? (0,TranslatorSingleton.t)('REPORT NAME ERROR') : '', label: "Report Name" }),

  (0,emotion_react_browser_esm.jsx)(LabeledErrorBoundInput/* default */.Z, { id: "description", name: "description", value: (currentReport == null ? void 0 : currentReport.description) || '', validationMethods: {
      onChange: ({ target }) => onChange(ActionType.inputChange, {
        name: target.name,
        value: target.value }) },

    errorMessage: (currentReport == null ? void 0 : currentReport.description) === 'error' ? (0,TranslatorSingleton.t)('DESCRIPTION ERROR') : '', label: "Description", placeholder: "Include a description that will be sent with your report", css: noBottomMargin })),


  (0,emotion_react_browser_esm.jsx)(StyledBottomSection, null,
  (0,emotion_react_browser_esm.jsx)(StyledScheduleTitle, null,
  (0,emotion_react_browser_esm.jsx)("h4", { css: (theme) => SectionHeaderStyle(theme) },
  (0,TranslatorSingleton.t)('Schedule')),

  (0,emotion_react_browser_esm.jsx)("p", null, (0,TranslatorSingleton.t)('Scheduled reports will be sent to your email as a PNG'))),


  (0,emotion_react_browser_esm.jsx)(StyledCronPicker, { clearButton: false, value: (currentReport == null ? void 0 : currentReport.crontab) || '0 12 * * 1', setValue: (newValue) => {
      onChange(ActionType.inputChange, {
        name: 'crontab',
        value: newValue });

    }, onError: setError }),
  (0,emotion_react_browser_esm.jsx)(StyledCronError, null, error),
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label", css: (theme) => TimezoneHeaderStyle(theme) },
  (0,TranslatorSingleton.t)('Timezone')),

  (0,emotion_react_browser_esm.jsx)(TimezoneSelector/* default */.Z, { onTimezoneChange: (value) => {
      setCurrentReport({
        type: ActionType.inputChange,
        payload: { name: 'timezone', value } });

    }, timezone: currentReport == null ? void 0 : currentReport.timezone }),
  isChart && renderMessageContentSection));


};
const mapDispatchToProps = (dispatch) => (0,redux/* bindActionCreators */.DE)({ addReport: actions_reports/* addReport */.cq, editReport: actions_reports/* editReport */.Me }, dispatch);
/* harmony default export */ const components_ReportModal = ((0,es/* connect */.$j)(null, mapDispatchToProps)((0,withToasts/* default */.Z)(ReportModal)));

/***/ }),

/***/ 12441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ Switch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37840);
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40987);
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



const StyledSwitch = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .iK)(antd_lib_switch__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)`
  .ant-switch-checked {
    background-color: ${({ theme }) => theme.colors.primary.base};
  }
`;
const Switch = (props) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledSwitch, props);


/***/ }),

/***/ 98978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11965);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80008);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33346);
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




const DEFAULT_TIMEZONE = {
  name: 'GMT Standard Time',
  value: 'Africa/Abidjan' // timezones are deduped by the first alphabetical value
};
const MIN_SELECT_WIDTH = '400px';
const offsetsToName = {
  '-300-240': ['Eastern Standard Time', 'Eastern Daylight Time'],
  '-360-300': ['Central Standard Time', 'Central Daylight Time'],
  '-420-360': ['Mountain Standard Time', 'Mountain Daylight Time'],
  '-420-420': [
  'Mountain Standard Time - Phoenix',
  'Mountain Standard Time - Phoenix'],

  '-480-420': ['Pacific Standard Time', 'Pacific Daylight Time'],
  '-540-480': ['Alaska Standard Time', 'Alaska Daylight Time'],
  '-600-600': ['Hawaii Standard Time', 'Hawaii Daylight Time'],
  '60120': ['Central European Time', 'Central European Daylight Time'],
  '00': [DEFAULT_TIMEZONE.name, DEFAULT_TIMEZONE.name],
  '060': ['GMT Standard Time - London', 'British Summer Time'] };

const currentDate = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()();
const JANUARY = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()([2021, 1]);
const JULY = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()([2021, 7]);
const getOffsetKey = (name) => JANUARY.tz(name).utcOffset().toString() +
JULY.tz(name).utcOffset().toString();
const getTimezoneName = (name) => {var _offsetsToName$offset, _offsetsToName$offset2;
  const offsets = getOffsetKey(name);
  return (currentDate.tz(name).isDST() ? (_offsetsToName$offset =
  offsetsToName[offsets]) == null ? void 0 : _offsetsToName$offset[1] : (_offsetsToName$offset2 =
  offsetsToName[offsets]) == null ? void 0 : _offsetsToName$offset2[0]) || name;
};
const ALL_ZONES = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz.countries().
map((country) => moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz.zonesForCountry(country, true)).
flat();
const TIMEZONES = [];
ALL_ZONES.forEach((zone) => {
  if (!TIMEZONES.find((option) => getOffsetKey(option.name) === getOffsetKey(zone.name))) {
    TIMEZONES.push(zone); // dedupe zones by offsets
  }
});
const TIMEZONE_OPTIONS = TIMEZONES.sort(
// sort by offset
(a, b) => moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz(currentDate, a.name).utcOffset() -
moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz(currentDate, b.name).utcOffset()).map((zone) => ({
  label: `GMT ${moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz(currentDate, zone.name).
  format('Z')} (${getTimezoneName(zone.name)})`,
  value: zone.name,
  offsets: getOffsetKey(zone.name) }));

const TimezoneSelector = ({ onTimezoneChange, timezone }) => {
  const prevTimezone = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(timezone);
  const matchTimezoneToOptions = (timezone) => {var _TIMEZONE_OPTIONS$fin;return ((_TIMEZONE_OPTIONS$fin = TIMEZONE_OPTIONS.find((option) => option.offsets === getOffsetKey(timezone))) == null ? void 0 : _TIMEZONE_OPTIONS$fin.
    value) || DEFAULT_TIMEZONE.value;};
  const updateTimezone = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((tz) => {
    // update the ref to track changes
    prevTimezone.current = tz;
    // the parent component contains the state for the value
    onTimezoneChange(tz);
  }, [onTimezoneChange]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const updatedTz = matchTimezoneToOptions(timezone || moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz.guess());
    if (prevTimezone.current !== updatedTz) {
      updateTimezone(updatedTz);
    }
  }, [timezone, updateTimezone]);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(src_components__WEBPACK_IMPORTED_MODULE_2__/* .Select */ .P, { ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('Timezone selector'), css: /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)({ minWidth: MIN_SELECT_WIDTH },  true ? "" : 0,  true ? "" : 0) // smallest size for current values
    , onChange: onTimezoneChange, value: timezone || DEFAULT_TIMEZONE.value, options: TIMEZONE_OPTIONS });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimezoneSelector);

/***/ }),

/***/ 9531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ PLACEHOLDER_DATASOURCE)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78209);
/* eslint-disable import/prefer-default-export */

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
const PLACEHOLDER_DATASOURCE = {
  id: 0,
  type: _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* .DatasourceType.Table */ .i.Table,
  uid: '_placeholder_',
  datasource_name: '',
  table_name: '',
  columns: [],
  column_types: [],
  metrics: [],
  column_format: {},
  verbose_map: {},
  main_dttm_col: '',
  description: '' };

/***/ }),

/***/ 713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60650);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80621);
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
{
  value: _constants__WEBPACK_IMPORTED_MODULE_0__/* .BACKGROUND_TRANSPARENT */ .HE,
  label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__.t)('Transparent'),
  className: 'background--transparent' },

{
  value: _constants__WEBPACK_IMPORTED_MODULE_0__/* .BACKGROUND_WHITE */ .b5,
  label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__.t)('White'),
  className: 'background--white' }]);

/***/ }),

/***/ 79271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60650);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80621);
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
{
  value: _constants__WEBPACK_IMPORTED_MODULE_0__/* .SMALL_HEADER */ .u_,
  label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__.t)('Small'),
  className: 'header-style-option header-small' },

{
  value: _constants__WEBPACK_IMPORTED_MODULE_0__/* .MEDIUM_HEADER */ .OE,
  label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__.t)('Medium'),
  className: 'header-style-option header-medium' },

{
  value: _constants__WEBPACK_IMPORTED_MODULE_0__/* .LARGE_HEADER */ .pQ,
  label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__.t)('Large'),
  className: 'header-style-option header-large' }]);

/***/ }),

/***/ 50909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qi": () => (/* binding */ CopyButton),
/* harmony export */   "m": () => (/* binding */ CopyToClipboardButton),
/* harmony export */   "HS": () => (/* binding */ FilterInput),
/* harmony export */   "uy": () => (/* binding */ RowCount),
/* harmony export */   "C4": () => (/* binding */ useFilteredTableData),
/* harmony export */   "_q": () => (/* binding */ useTableColumns)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60650);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23279);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82191);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27600);
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35932);
/* harmony import */ var src_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54076);
/* harmony import */ var src_components_CopyToClipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13433);
/* harmony import */ var src_explore_components_RowCountLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14086);
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









const CopyButton = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .styled */ .iK)(src_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)`
  font-size: ${({ theme }) => theme.typography.sizes.s}px;

  // needed to override button's first-of-type margin: 0
  && {
    margin: 0 ${({ theme }) => theme.gridUnit * 2}px;
  }

  i {
    padding: 0 ${({ theme }) => theme.gridUnit}px;
  }
`;
const CopyNode = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(CopyButton, { buttonSize: "xsmall" },
(0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("i", { className: "fa fa-clipboard" }));

const CopyToClipboardButton = ({ data, columns }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_CopyToClipboard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, { text: data && columns ? (0,src_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .prepareCopyToClipboardTabularData */ .Mv)(data, columns) : '', wrapped: false, copyNode: CopyNode });
const FilterInput = ({ onChangeHandler }) => {
  const debouncedChangeHandler = lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(onChangeHandler, src_constants__WEBPACK_IMPORTED_MODULE_3__/* .SLOW_DEBOUNCE */ .M$);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Input */ .II, { placeholder: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('Search'), onChange: (event) => {
      const filterText = event.target.value;
      debouncedChangeHandler(filterText);
    } });
};
const RowCount = ({ data, loading }) => {var _data$length;return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_explore_components_RowCountLabel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, { rowcount: (_data$length = data == null ? void 0 : data.length) != null ? _data$length : 0, loading: loading, suffix: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('rows retrieved') });};
const useFilteredTableData = (filterText, data) => (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
  if (!(data != null && data.length)) {
    return [];
  }
  const formattedData = (0,src_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .applyFormattingToTabularData */ .cD)(data);
  return formattedData.filter((row) => Object.values(row).some((value) => value == null ? void 0 : value.toString().toLowerCase().includes(filterText.toLowerCase())));
}, [data, filterText]);
const useTableColumns = (colnames, data, moreConfigs) => (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => colnames && data != null && data.length ?
colnames.
filter((column) => Object.keys(data[0]).includes(column)).
map((key) => ({
  accessor: (row) => row[key],
  Header: key,
  Cell: ({ value }) => {
    if (value === true) {
      return src_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOOL_TRUE_DISPLAY */ .Ly;
    }
    if (value === false) {
      return src_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOOL_FALSE_DISPLAY */ .gz;
    }
    return String(value);
  },
  ...(moreConfigs == null ? void 0 : moreConfigs[key]) })) :

[], [data, moreConfigs]);

/***/ }),

/***/ 15423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86852);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60650);
/* harmony import */ var react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42110);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs_github__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(120);
/* harmony import */ var src_components_CopyToClipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13433);
/* harmony import */ var src_components_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38703);
/* harmony import */ var src_explore_components_DataTableControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50909);
/* harmony import */ var src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98286);
/* harmony import */ var src_chart_chartAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22428);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53459);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_htmlbars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49889);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_sql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33743);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22489);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11965);
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













const CopyButtonViewQuery = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .styled */ .iK)(src_explore_components_DataTableControl__WEBPACK_IMPORTED_MODULE_3__/* .CopyButton */ .qi)`
  && {
    margin: 0 0 ${({ theme }) => theme.gridUnit}px;
  }
`;
react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_7__/* ["default"].registerLanguage */ .Z.registerLanguage('markdown', react_syntax_highlighter_dist_cjs_languages_hljs_markdown__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_7__/* ["default"].registerLanguage */ .Z.registerLanguage('html', react_syntax_highlighter_dist_cjs_languages_hljs_htmlbars__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);
react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_7__/* ["default"].registerLanguage */ .Z.registerLanguage('sql', react_syntax_highlighter_dist_cjs_languages_hljs_sql__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z);
react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_7__/* ["default"].registerLanguage */ .Z.registerLanguage('json', react_syntax_highlighter_dist_cjs_languages_hljs_json__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z);
const StyledSyntaxContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .styled.div */ .iK.div`
  height: 100%;
`;
const StyledSyntaxHighlighter = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .styled */ .iK)(react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)`
  height: calc(100% - 26px); // 100% - clipboard height
`;
const ViewQueryModal = (props) => {
  const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const loadChartData = (resultType) => {
    setIsLoading(true);
    (0,src_chart_chartAction__WEBPACK_IMPORTED_MODULE_5__.getChartDataRequest)({
      formData: props.latestQueryFormData,
      resultFormat: 'json',
      resultType }).

    then(({ json }) => {
      setResult((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(json.result));
      setIsLoading(false);
      setError(null);
    }).
    catch((response) => {
      (0,src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_4__/* .getClientErrorObject */ .O)(response).then(({ error, message }) => {
        setError(error ||
        message ||
        response.statusText ||
        (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_13__.t)('Sorry, An error occurred'));
        setIsLoading(false);
      });
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadChartData('query');
  }, [JSON.stringify(props.latestQueryFormData)]);
  if (isLoading) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_components_Loading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null);
  }
  if (error) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)("pre", null, error);
  }
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
  result.map((item) => item.query ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(StyledSyntaxContainer, { key: item.query },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_components_CopyToClipboard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, { text: item.query, shouldShowText: false, copyNode: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(CopyButtonViewQuery, { buttonSize: "xsmall" },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)("i", { className: "fa fa-clipboard" })) }),

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(StyledSyntaxHighlighter, { language: item.language || undefined, style: react_syntax_highlighter_dist_cjs_styles_hljs_github__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z },
  item.query)) :

  null));

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewQueryModal);

/***/ }),

/***/ 56727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ downloadAsImage)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15306);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29306);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21804);
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72570);




/**
 * @remark
 * same as https://github.com/apache/superset/blob/c53bc4ddf9808a8bb6916bbe3cb31935d33a2420/superset-frontend/src/assets/stylesheets/less/variables.less#L34
 */
const GRAY_BACKGROUND_COLOR = '#F5F5F5';
/**
 * generate a consistent file stem from a description and date
 *
 * @param description title or description of content of file
 * @param date date when file was generated
 */
const generateFileStem = (description, date = new Date()) => `${lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default()(description)}-${date.toISOString().replace(/[: ]/g, '-')}`;
/**
 * Create an event handler for turning an element into an image
 *
 * @param selector css selector of the parent element which should be turned into image
 * @param description name or a short description of what is being printed.
 *   Value will be normalized, and a date as well as a file extension will be added.
 * @param domToImageOptions dom-to-image Options object.
 * @param isExactSelector if false, searches for the closest ancestor that matches selector.
 * @returns event handler
 */
function downloadAsImage(selector, description, domToImageOptions = {}, isExactSelector = false) {
  return (event) => {
    const elementToPrint = isExactSelector ?
    document.querySelector(selector) :
    event.currentTarget.closest(selector);
    if (!elementToPrint) {
      return (0,src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_3__/* .addWarningToast */ .Dz)((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('Image download failed, please refresh and try again.'));
    }
    // Mapbox controls are loaded from different origin, causing CORS error
    // See https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL#exceptions
    const filter = (node) => {
      if (typeof node.className === 'string') {
        return node.className !== 'mapboxgl-control-container' &&
        !node.className.includes('ant-dropdown');
      }
      return true;
    };
    return dom_to_image__WEBPACK_IMPORTED_MODULE_1___default().toJpeg(elementToPrint, {
      quality: 0.95,
      bgcolor: GRAY_BACKGROUND_COLOR,
      filter }).

    then((dataUrl) => {
      const link = document.createElement('a');
      link.download = `${generateFileStem(description)}.jpg`;
      link.href = dataUrl;
      link.click();
    }).
    catch((e) => {
      console.error('Creating image failed', e);
    });
  };
}

/***/ })

}]);