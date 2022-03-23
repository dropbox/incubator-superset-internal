/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ 42669:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@hot-loader/react-dom/index.js
var react_dom = __webpack_require__(9060);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js + 2 modules
var emotion_element_99289b21_browser_esm = __webpack_require__(68135);
// EXTERNAL MODULE: ./src/setup/setupApp.ts + 6 modules
var setupApp = __webpack_require__(84153);
// EXTERNAL MODULE: ./src/setup/setupPlugins.ts + 38 modules
var setupPlugins = __webpack_require__(69753);
// EXTERNAL MODULE: ./src/components/DynamicPlugins/index.tsx
var DynamicPlugins = __webpack_require__(14278);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var components = __webpack_require__(82191);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/components/index.ts + 1 modules
var src_components = __webpack_require__(33346);
// EXTERNAL MODULE: ./src/components/Form/index.tsx + 1 modules
var Form = __webpack_require__(49238);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./src/explore/components/controls/VizTypeControl/VizTypeGallery.tsx
var VizTypeGallery = __webpack_require__(13284);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/addSlice/AddSliceContainer.tsx
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









const ESTIMATED_NAV_HEIGHT = 56;
const ELEMENTS_EXCEPT_VIZ_GALLERY = ESTIMATED_NAV_HEIGHT + 250;
const StyledContainer = style/* styled.div */.iK.div`
  ${({ theme }) => `
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: ${VizTypeGallery/* MAX_ADVISABLE_VIZ_GALLERY_WIDTH */.UB}px;
    max-height: calc(100vh - ${ESTIMATED_NAV_HEIGHT}px);
    border-radius: ${theme.gridUnit}px;
    background-color: ${theme.colors.grayscale.light5};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.gridUnit * 4}px;
    padding-right: ${theme.gridUnit * 4}px;
    padding-bottom: ${theme.gridUnit * 4}px;

    h3 {
      padding-bottom: ${theme.gridUnit * 3}px;
    }

    & .dataset {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: ${theme.gridUnit * 2}px;

      & > div {
        min-width: 200px;
        width: 300px;
      }

      & > span {
        color: ${theme.colors.grayscale.light1};
        margin-left: ${theme.gridUnit * 4}px;
      }
    }

    & .viz-gallery {
      border: 1px solid ${theme.colors.grayscale.light2};
      border-radius: ${theme.gridUnit}px;
      margin: ${theme.gridUnit}px 0px;
      max-height: calc(100vh - ${ELEMENTS_EXCEPT_VIZ_GALLERY}px);
      flex: 1;
    }

    & .footer {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      & > span {
        color: ${theme.colors.grayscale.light1};
        margin-right: ${theme.gridUnit * 4}px;
      }
    }

    /* The following extra ampersands (&&&&) are used to boost selector specificity */

    &&&& .ant-steps-item-tail {
      display: none;
    }

    &&&& .ant-steps-item-icon {
      margin-right: ${theme.gridUnit * 2}px;
      width: ${theme.gridUnit * 5}px;
      height: ${theme.gridUnit * 5}px;
      line-height: ${theme.gridUnit * 5}px;
    }

    &&&& .ant-steps-item-title {
      line-height: ${theme.gridUnit * 5}px;
    }

    &&&& .ant-steps-item-content {
      overflow: unset;

      .ant-steps-item-description {
        margin-top: ${theme.gridUnit}px;
      }
    }

    &&&& .ant-tooltip-open {
      display: inline;
    }

    &&&& .ant-select-selector {
      padding: 0;
    }

    &&&& .ant-select-selection-placeholder {
      padding-left: ${theme.gridUnit * 3}px;
    }
  `}
`;
const TooltipContent = style/* styled.div */.iK.div`
  ${({ theme, hasDescription }) => `
    .tooltip-header {
      font-size: ${hasDescription ? theme.typography.sizes.l : theme.typography.sizes.s}px;
      font-weight: ${hasDescription ?
theme.typography.weights.bold :
theme.typography.weights.normal};
    }

    .tooltip-description {
      margin-top: ${theme.gridUnit * 2}px;
      display: -webkit-box;
      -webkit-line-clamp: 20;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `}
`;
const StyledLabel = style/* styled.span */.iK.span`
  ${({ theme }) => `
    position: absolute;
    left: ${theme.gridUnit * 3}px;
    right: ${theme.gridUnit * 3}px;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;
class AddSliceContainer extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visType: null };

    this.changeDatasource = this.changeDatasource.bind(this);
    this.changeVisType = this.changeVisType.bind(this);
    this.gotoSlice = this.gotoSlice.bind(this);
    this.newLabel = this.newLabel.bind(this);
    this.loadDatasources = this.loadDatasources.bind(this);
  }
  exploreUrl() {var _this$state$datasourc;
    const formData = encodeURIComponent(JSON.stringify({
      viz_type: this.state.visType,
      datasource: (_this$state$datasourc = this.state.datasource) == null ? void 0 : _this$state$datasourc.value }));

    return `/superset/explore/?form_data=${formData}`;
  }
  gotoSlice() {
    window.location.href = this.exploreUrl();
  }
  changeDatasource(datasource) {
    this.setState({ datasource });
  }
  changeVisType(visType) {
    this.setState({ visType });
  }
  isBtnDisabled() {var _this$state$datasourc2;
    return !((_this$state$datasourc2 = this.state.datasource) != null && _this$state$datasourc2.value && this.state.visType);
  }
  newLabel(item) {
    return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { mouseEnterDelay: 1, placement: "right", title: (0,emotion_react_browser_esm.jsx)(TooltipContent, { hasDescription: !!item.description },
      (0,emotion_react_browser_esm.jsx)("div", { className: "tooltip-header" }, item.table_name),
      item.description && (0,emotion_react_browser_esm.jsx)("div", { className: "tooltip-description" }, item.description)) },

    (0,emotion_react_browser_esm.jsx)(StyledLabel, null, item.table_name));

  }
  loadDatasources(search, page, pageSize) {
    const query = rison_default().encode({
      columns: ['id', 'table_name', 'description', 'datasource_type'],
      filters: [{ col: 'table_name', opr: 'ct', value: search }],
      page,
      page_size: pageSize,
      order_column: 'table_name',
      order_direction: 'asc' });

    return SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/dataset/?q=${query}` }).
    then((response) => {
      const list = response.json.result.
      map((item) => ({
        value: `${item.id}__${item.datasource_type}`,
        customLabel: this.newLabel(item),
        label: item.table_name })).

      sort((a, b) => a.label.localeCompare(b.label));
      return {
        data: list,
        totalCount: response.json.count };

    });
  }
  render() {var _this$state$datasourc3;
    const isButtonDisabled = this.isBtnDisabled();
    return (0,emotion_react_browser_esm.jsx)(StyledContainer, null,
    (0,emotion_react_browser_esm.jsx)("h3", null, (0,TranslatorSingleton.t)('Create a new chart')),
    (0,emotion_react_browser_esm.jsx)(components/* Steps */.Rg, { direction: "vertical", size: "small" },
    (0,emotion_react_browser_esm.jsx)(components/* Steps.Step */.Rg.Step, { title: (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, null, (0,TranslatorSingleton.t)('Choose a dataset')), status: (_this$state$datasourc3 = this.state.datasource) != null && _this$state$datasourc3.value ? 'finish' : 'process', description: (0,emotion_react_browser_esm.jsx)("div", { className: "dataset" },
      (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { autoFocus: true, ariaLabel: (0,TranslatorSingleton.t)('Dataset'), name: "select-datasource", onChange: this.changeDatasource, options: this.loadDatasources, placeholder: (0,TranslatorSingleton.t)('Choose a dataset'), showSearch: true, value: this.state.datasource }),
      (0,emotion_react_browser_esm.jsx)("span", null,
      (0,TranslatorSingleton.t)('Instructions to add a dataset are available in the Superset tutorial.'), ' ',
      (0,emotion_react_browser_esm.jsx)("a", { href: "https://superset.apache.org/docs/creating-charts-dashboards/first-dashboard#adding-a-new-table", rel: "noopener noreferrer", target: "_blank" },
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-external-link" })))) }),



    (0,emotion_react_browser_esm.jsx)(components/* Steps.Step */.Rg.Step, { title: (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, null, (0,TranslatorSingleton.t)('Choose chart type')), status: this.state.visType ? 'finish' : 'process', description: (0,emotion_react_browser_esm.jsx)(VizTypeGallery/* default */.ZP, { className: "viz-gallery", onChange: this.changeVisType, selectedViz: this.state.visType }) })),

    (0,emotion_react_browser_esm.jsx)("div", { className: "footer" },
    isButtonDisabled && (0,emotion_react_browser_esm.jsx)("span", null,
    (0,TranslatorSingleton.t)('Please select both a Dataset and a Chart type to proceed')),

    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "primary", disabled: isButtonDisabled, onClick: this.gotoSlice },
    (0,TranslatorSingleton.t)('Create new chart'))));



  }}
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./src/preamble.ts + 3 modules
var preamble = __webpack_require__(26009);
;// CONCATENATED MODULE: ./src/addSlice/App.tsx
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
const addSliceContainer = document.getElementById('app');
const bootstrapData = JSON.parse((addSliceContainer == null ? void 0 : addSliceContainer.getAttribute('data-bootstrap')) || '{}');
(0,featureFlags/* initFeatureFlags */.fG)(bootstrapData.common.feature_flags);
const App = () => (0,emotion_react_browser_esm.jsx)(emotion_element_99289b21_browser_esm.a, { theme: preamble/* theme */.r },
(0,emotion_react_browser_esm.jsx)(DynamicPlugins/* DynamicPluginProvider */.EM, null,
(0,emotion_react_browser_esm.jsx)(AddSliceContainer, null)));


/* harmony default export */ const addSlice_App = (App);
;// CONCATENATED MODULE: ./src/addSlice/index.tsx
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



react_dom.render((0,emotion_react_browser_esm.jsx)(addSlice_App, null), document.getElementById('app'));

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
/******/ 			if (chunkId === 4998) return "4998.353b084d7c381f5d7286.entry.js";
/******/ 			if (chunkId === 7843) return "7843.16bcd05fb844fffbc6e9.entry.js";
/******/ 			if (chunkId === 3375) return "3375.386046b4ab8108a6aeb5.entry.js";
/******/ 			if (chunkId === 4654) return "4654.eaba95995c4cc7744d1c.entry.js";
/******/ 			if (chunkId === 741) return "741.2a17ac676e05fe05b4bc.entry.js";
/******/ 			if (chunkId === 6962) return "6962.9a5e88d636f5668c9d0e.entry.js";
/******/ 			if (chunkId === 2825) return "2825.3e850c3747b0f01c0c3c.entry.js";
/******/ 			if (chunkId === 7173) return "7173.4a4d0841f7b72f13606b.entry.js";
/******/ 			// return url for filenames based on template
/******/ 			return "" + {"3":"801697eb5ab3352c42e5","57":"2cf9bc4ac970720748c0","71":"436bf2271513b4c7a32c","112":"be71e978bbc620ffc544","128":"09f443525fca060387ee","158":"df7539aa250576fe4cf3","177":"f6ae69232927d7dd1a30","183":"911ddd624433d7f0867f","215":"7254cd744b1245396db5","310":"1563948d372fecada150","312":"3aa1656a2b7ab28d62bb","326":"cef86dd8ed7e0b62f4b4","336":"d6bbf09be905d11fa889","347":"b35ff2a8a9d70b9fd5de","363":"35405942d4d50d2dd001","423":"557c77172a88145a2272","440":"ff0aad72b037cc9defda","547":"4dc809f2159ae94ed8f7","597":"ec532018b9e38cc071a5","600":"5f68b3d6f05a562607bc","666":"63eb0d1379f1cf11e869","823":"858db93d79a30d077534","826":"3ac1e6742edc6811953f","992":"d36caa7e430c7b303adb","999":"ed18546530e1fb3fdb9c","1066":"ca1490ad3425672ef184","1075":"d25c694581c3e17f97cb","1095":"3680bcba10025d4cf3eb","1174":"bd6d2c538bb78fcea2f1","1185":"541be5b4ad9b7f276896","1193":"94f2747dbe0f34df1a7a","1243":"f76776ecfb675107b048","1256":"b16af0091358c002effa","1258":"31efb095399ce23d6823","1263":"e1ebf092ea50eba7a149","1293":"89308437860fa7983857","1351":"4c3819c3165f4d3cb3e5","1391":"30c621e164b402fa5061","1398":"1e4e92a480dc5b27ff7e","1493":"fb655e11f755bbed5b11","1568":"aee4a0774888c608f63d","1573":"f0c7235815aa435f15ed","1605":"281404507f98467fd7d8","1899":"92b929932dfe7811cbdc","1921":"1a13273a93f7b61afaa9","1948":"ff270247f7ad048b37fc","2079":"f78da0b31a1f64da12a4","2085":"cb8b4569805b5fe072f8","2089":"887107b248bbaa4c0ed9","2105":"fe2fcb119f108e338ac6","2112":"a47ead904707252ecde0","2264":"3ca36ce2ac9c43b9b179","2267":"4dd9b2ded1ac4435aa8d","2306":"cfd5f3b8026da89441df","2403":"8634710eb87615cfc6bf","2439":"96da625d4cbc67a0064f","2646":"add1d27a3b3d4047480a","2698":"be06d926a61b2ff8096c","2713":"05813f52004aefacbcbe","2797":"b8837234f74badcbcd64","2862":"c3663bc60ac90c9908a0","2983":"27d10999d0c2bca2cf50","3037":"5c194e9031dd389a9309","3118":"65d2c72c220eb59c9e1a","3141":"23ce23648579690f9400","3208":"2a1954fa10b8dcb83d71","3240":"2a9272f662cb2de40c76","3265":"474d7d7c385d10a60693","3325":"a90266e90bac97af3781","3544":"3406c53cc0e4f33bea86","3558":"eb461a449988ae99c3c4","3567":"5825dfd50d3a6a9b1537","3606":"0adb7d4dc6ba6bad8d1c","3609":"1b8c59ecc4d58f21e636","3720":"2e567a88b8dd15938665","3749":"521d48dd5d1067665be3","3776":"de42ae55420f8a80a0d6","3871":"76ef1aed5605fc1068fb","3955":"a0676b5a618b6b82bf83","3985":"c54a8b32d2af0d76b8a2","4018":"f632572beb40c0f0c4d9","4022":"b93313322f39cedc352d","4139":"546708c7300dff5cd155","4192":"30b753df2dcb91b99aec","4214":"5e3776bf7c1f1be8e5ea","4266":"d7fa57e367a6eee483b8","4273":"5945dbd1e7088899e37e","4295":"97a6a288c6f984c81a39","4319":"e2e186f2a0bb6f2700a5","4441":"6b94cf2e542a3093d95f","4458":"e3c0c688a5be0b5da06e","4473":"53278bbc4be882db0f5c","4474":"b3fc848bf220efa9b835","4486":"c6350c997873b7ae77c3","4572":"406d9e4bca6fe5197002","4579":"ac82e0f4ac2bef7b5629","4625":"c9320cb8d2eee5ebaf4d","4662":"c9085feaf1017c91b23c","4667":"46d958dc7f86f6292bb4","4732":"a80344b7469a48cb86c7","4757":"022553145064f1ee2924","4758":"ec45f143d912ef8b9d0c","4794":"f98ef85464f11e5c88a7","4797":"45c4548eeeb8e2e5cc9e","4810":"188774d3ee3c04c9e188","4817":"f5e26b0709f74b69fa03","4832":"206aca9d039eebc52eed","4851":"6686fcc47a6c733deb22","4972":"c4f807af54c5a8aab56e","4980":"6f81cf5d8fbe428ac33f","4981":"437abb94798b28dd8787","5019":"4c8bc6d7aca72fd3d54a","5042":"0aafa94c0bfcbac9f627","5094":"07145907e8edae6fc15e","5181":"3eef88a45c9bcc76588f","5201":"80aa074f906eee87b0e6","5215":"eeaacec0d45a1417c41b","5224":"606b538b7d64335a7781","5226":"7bdd4c10a7916d067525","5249":"fd5ab9bdd08f50f27ff4","5278":"5f8aa9f6cc9941f7cd09","5281":"a4b56aaf274795e76afa","5322":"f3dc5ba9b3f248da30c9","5330":"bad80526aedb7bc5338b","5335":"a91e9ee354fd2b99a954","5350":"edd537b2eaa4adec82a6","5359":"5800205e282e553ee535","5367":"6b1af8966839be51ec26","5507":"3af7db839801b0db65e4","5580":"a94f479ae8bf4d3ac0ad","5592":"b1e9861fc747cea7a61e","5641":"19537bf0b67de2dfd994","5660":"ad0fac23a71d36e4a65d","5707":"429d9ebd98fff39e2608","5771":"a782fb996abf91074d7b","5777":"3f7c6ffbb107b72a71a2","5802":"4457a574df478455a15a","5816":"4d69301b12c619190f1d","5832":"f1d3435d5fe5517d1e0e","5838":"b957c2dc2db93662bc25","5859":"dd62c64a89295e6e9dc6","5962":"4af600b89ed207c88a75","5965":"5b15d49c692694b0d6b3","5972":"0da6cf793e3d1cc69358","5998":"d142a4b602af8829450c","6060":"04414903972982fec99b","6061":"8bffaef3cba5ee3078f0","6126":"4024bb2150eb5d99ed9f","6150":"ed773f8f5c293cb4c13b","6167":"8a7e1d8900669c9e319e","6207":"d46595d332f953beb63a","6254":"c26e672ffd1d2d6ffe82","6259":"8d8595114515a041f325","6303":"d4d6291f5d42a7f1652f","6371":"66ea24b6bd0ebafddd11","6420":"77ac4862a9a0de480eaa","6439":"b7bea1dad0b6731d8f08","6447":"2160abb016acabd01b58","6507":"ff107afb952cd5cd032a","6668":"82739982a9d0087df578","6682":"92912f99d5ec5e63356f","6740":"26b0de51671d1946cf5e","6758":"7650f3fae2f4e8e07dd1","6819":"2d98b68d6ff55d61f8d6","6883":"8ff31cb25f4cbcf65f8e","6977":"ddaf38e3b453b836afd2","6981":"9dcf9659f6e80537876c","7040":"f23d3eae2fac471d5482","7068":"d0bab68bf1b8fe890cb0","7183":"4ee4d78d1c0b53004df4","7219":"faf008b430dc64f745c8","7249":"05401ea8ee3aa4893e10","7405":"866ef25cb2164e793e19","7460":"830c4edc179abe920136","7584":"910bd8b8c2993335fa44","7610":"c4bd3575194e27e4dca4","7654":"29f53849422f19ebe336","7716":"e36d35dc706ec3bf3a29","7760":"4ef3263971e6365c79bf","7803":"2624b6fbf922d341ea04","7828":"97ca3ca635b9948cd3fd","7832":"4d9d2dbac38cc2b0fb90","7850":"ead55581e4ca5be56dc6","7893":"67599d461d8af3da59cc","7922":"c84d95f1054e63d7ffeb","8130":"226edc0441cd972bab15","8230":"936dd1f8ca7bd24752e2","8312":"dac04f73013472377c36","8349":"05f914d2483e65c1b585","8398":"d8f5829d0db6a5a634a6","8425":"52abf98953e003bb0152","8463":"48256f92f964b8bf79a4","8464":"1f3e4c0a11dcd1562253","8616":"600b0291f89941e46ffa","8682":"79102f702737cf867d5f","8695":"c96f012c5780a51d8755","8750":"5c1ccb4ce4d1981ec23a","8883":"68eff701dbdd3308d52d","8903":"f6983d28c5358bb2d887","8924":"ab122e4614324e0c9fe6","8970":"6f72f94b5f107daae7bc","9013":"f709bdaee2140bc2a4c5","9034":"ec820efcb34a9691d251","9052":"b0285bb9d71534ce20b5","9109":"7e727e9ccc7def5a23a2","9131":"a4f1f4d9a0b03d1fdde3","9242":"ef10aede0f2a99f29aa6","9305":"60fe40ee626eb2ec1b5f","9325":"90c33d84118b47709bf1","9393":"654e00a37f7e2cf29ed8","9483":"c8dd378adf1da2c32289","9510":"d0629cd97e7154454216","9558":"fe373e383af8c140dd79","9574":"05b040ad8dbbe4abaf1b","9767":"9b54247b72d042373f5e","9794":"2031cc537c157403943d","9811":"30707e6da4b523886fde","9857":"9ad7ca8fa3245e97322e","9885":"49de7a515c9384988b80","9893":"98379a9ecb5dea20e1cb","9938":"8d2986cd19fe8eb710be"}[chunkId] + ".chunk.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
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
/******/ 			5152: 0
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
/******/ 			5152: 0
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
/******/ 	__webpack_require__.O(undefined, [1216,504,7550,4772,7211,5110,7017,9968,8483,8135,7591,7341,3401,4052,621,4174], () => (__webpack_require__(26009)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [1216,504,7550,4772,7211,5110,7017,9968,8483,8135,7591,7341,3401,4052,621,4174], () => (__webpack_require__(42669)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;