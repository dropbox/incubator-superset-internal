(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[621,5042,6439],{

/***/ 69753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ setupPlugins)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartControlPanelRegistrySingleton.js
var ChartControlPanelRegistrySingleton = __webpack_require__(14299);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/models/Preset.js
var Preset = __webpack_require__(26474);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-big-number/esm/BigNumber/index.js + 1 modules
var BigNumber = __webpack_require__(74779);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-big-number/esm/BigNumberTotal/index.js + 1 modules
var BigNumberTotal = __webpack_require__(48243);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-calendar/esm/index.js + 2 modules
var esm = __webpack_require__(73699);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-chord/esm/index.js + 2 modules
var legacy_plugin_chart_chord_esm = __webpack_require__(40758);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/index.js + 2 modules
var legacy_plugin_chart_country_map_esm = __webpack_require__(90022);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-event-flow/esm/index.js + 1 modules
var legacy_plugin_chart_event_flow_esm = __webpack_require__(42575);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/index.js + 2 modules
var legacy_plugin_chart_heatmap_esm = __webpack_require__(77512);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/esm/index.js + 2 modules
var legacy_plugin_chart_histogram_esm = __webpack_require__(48143);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/index.js + 2 modules
var legacy_plugin_chart_horizon_esm = __webpack_require__(28801);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-map-box/esm/index.js + 1 modules
var legacy_plugin_chart_map_box_esm = __webpack_require__(93775);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-paired-t-test/esm/index.js + 2 modules
var legacy_plugin_chart_paired_t_test_esm = __webpack_require__(92565);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-parallel-coordinates/esm/index.js + 2 modules
var legacy_plugin_chart_parallel_coordinates_esm = __webpack_require__(8795);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-partition/esm/index.js + 3 modules
var legacy_plugin_chart_partition_esm = __webpack_require__(79909);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-pivot-table/esm/index.js + 2 modules
var legacy_plugin_chart_pivot_table_esm = __webpack_require__(93273);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-rose/esm/index.js + 2 modules
var legacy_plugin_chart_rose_esm = __webpack_require__(79954);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-sankey/esm/index.js + 2 modules
var legacy_plugin_chart_sankey_esm = __webpack_require__(16915);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-sunburst/esm/index.js + 2 modules
var legacy_plugin_chart_sunburst_esm = __webpack_require__(65314);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/index.js + 6 modules
var plugin_chart_table_esm = __webpack_require__(18917);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/index.js + 2 modules
var legacy_plugin_chart_treemap_esm = __webpack_require__(10773);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-word-cloud/esm/plugin/index.js + 4 modules
var esm_plugin = __webpack_require__(97235);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-world-map/esm/index.js + 2 modules
var legacy_plugin_chart_world_map_esm = __webpack_require__(83009);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/Area/index.js + 1 modules
var Area = __webpack_require__(90081);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/Bar/index.js + 1 modules
var Bar = __webpack_require__(93661);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/Bubble/index.js + 1 modules
var Bubble = __webpack_require__(96082);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/Bullet/index.js + 1 modules
var Bullet = __webpack_require__(82622);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/Compare/index.js + 1 modules
var Compare = __webpack_require__(40676);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/DistBar/index.js + 1 modules
var DistBar = __webpack_require__(66121);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/DualLine/index.js + 1 modules
var DualLine = __webpack_require__(63955);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/Line/index.js + 1 modules
var Line = __webpack_require__(99483);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/LineMulti/index.js + 1 modules
var LineMulti = __webpack_require__(80772);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/TimePivot/index.js + 1 modules
var TimePivot = __webpack_require__(28733);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/index.js + 24 modules
var legacy_preset_chart_deckgl_esm = __webpack_require__(66306);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/BoxPlot/index.js + 3 modules
var BoxPlot = __webpack_require__(55778);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Funnel/index.js + 4 modules
var Funnel = __webpack_require__(47285);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Treemap/index.js + 4 modules
var Treemap = __webpack_require__(95990);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Gauge/index.js + 5 modules
var Gauge = __webpack_require__(26425);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Graph/index.js + 5 modules
var Graph = __webpack_require__(62110);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Radar/index.js + 4 modules
var Radar = __webpack_require__(51873);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/MixedTimeseries/index.js + 4 modules
var MixedTimeseries = __webpack_require__(84946);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Pie/index.js + 4 modules
var Pie = __webpack_require__(36325);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Timeseries/Area/index.js + 1 modules
var Timeseries_Area = __webpack_require__(69774);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Timeseries/index.js + 1 modules
var Timeseries = __webpack_require__(54915);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Timeseries/Regular/Bar/index.js
var Regular_Bar = __webpack_require__(58662);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Timeseries/Regular/Line/index.js
var Regular_Line = __webpack_require__(64405);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Timeseries/Regular/SmoothLine/index.js
var SmoothLine = __webpack_require__(79917);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Timeseries/Regular/Scatter/index.js + 1 modules
var Scatter = __webpack_require__(72812);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Timeseries/Step/index.js + 1 modules
var Step = __webpack_require__(66116);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Tree/index.js + 5 modules
var Tree = __webpack_require__(52595);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/models/ChartPlugin.js
var ChartPlugin = __webpack_require__(15179);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/models/ChartMetadata.js
var ChartMetadata = __webpack_require__(40702);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/types/Base.js
var Base = __webpack_require__(52686);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/buildQueryContext.js
var buildQueryContext = __webpack_require__(69205);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/types/QueryResponse.js
var QueryResponse = __webpack_require__(23274);
;// CONCATENATED MODULE: ./src/filters/components/Select/types.ts
const DEFAULT_FORM_DATA = {
  defaultValue: null,
  enableEmptyFilter: false,
  inverseSelection: false,
  defaultToFirstItem: false,
  multiSelect: true,
  searchAllOptions: false,
  sortAscending: true };
;// CONCATENATED MODULE: ./src/filters/components/Select/buildQuery.ts
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


const buildQuery = (formData, options) => {
  const { search, coltypeMap } = (options == null ? void 0 : options.ownState) || {};
  const { sortAscending, sortMetric } = { ...DEFAULT_FORM_DATA, ...formData };
  return (0,buildQueryContext/* default */.Z)(formData, (baseQueryObject) => {
    const { columns = [], filters = [] } = baseQueryObject;
    const extraFilters = [];
    if (search) {
      columns.forEach((column) => {
        if (coltypeMap[column] === QueryResponse/* GenericDataType.STRING */.Z.STRING) {
          extraFilters.push({
            col: column,
            op: 'ILIKE',
            val: `%${search}%` });

        } else
        if (coltypeMap[column] === QueryResponse/* GenericDataType.NUMERIC */.Z.NUMERIC &&
        !Number.isNaN(Number(search))) {
          // for numeric columns we apply a >= where clause
          extraFilters.push({
            col: column,
            op: '>=',
            val: Number(search) });

        }
      });
    }
    const sortColumns = sortMetric ? [sortMetric] : columns;
    const query = [
    {
      ...baseQueryObject,
      groupby: columns,
      metrics: sortMetric ? [sortMetric] : [],
      filters: filters.concat(extraFilters),
      orderby: sortMetric || sortAscending !== undefined ?
      sortColumns.map((column) => [column, !!sortAscending]) :
      [] }];


    return query;
  });
};
/* harmony default export */ const Select_buildQuery = (buildQuery);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/validator/validateNonEmpty.js
var validateNonEmpty = __webpack_require__(42621);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/index.js + 10 modules
var chart_controls_esm = __webpack_require__(88483);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/lib/index.js
var lib = __webpack_require__(27524);
;// CONCATENATED MODULE: ./src/filters/components/Select/controlPanel.ts
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




const { enableEmptyFilter, inverseSelection, multiSelect, defaultToFirstItem, searchAllOptions, sortAscending } = DEFAULT_FORM_DATA;
const config = {
  controlPanelSections: [
  // @ts-ignore
  chart_controls_esm.sections.legacyRegularTime,
  {
    label: (0,TranslatorSingleton.t)('Query'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'groupby',
      config: {
        ...lib.sharedControls.groupby,
        label: 'Column',
        required: true } }]] },





  {
    label: (0,TranslatorSingleton.t)('UI Configuration'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'sortAscending',
      config: {
        type: 'CheckboxControl',
        renderTrigger: true,
        label: (0,TranslatorSingleton.t)('Sort ascending'),
        default: sortAscending,
        description: (0,TranslatorSingleton.t)('Check for sorting ascending') } }],



    [
    {
      name: 'multiSelect',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Multiple select'),
        default: multiSelect,
        resetConfig: true,
        affectsDataMask: true,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('Allow selecting multiple values') } }],



    [
    {
      name: 'enableEmptyFilter',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Required'),
        default: enableEmptyFilter,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('User must select a value before applying the filter') } }],



    [
    {
      name: 'defaultToFirstItem',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Default to first item'),
        default: defaultToFirstItem,
        resetConfig: true,
        affectsDataMask: true,
        renderTrigger: true,
        requiredFirst: true,
        description: (0,TranslatorSingleton.t)('Select first item by default (when using this option, default value can’t be set)') } }],



    [
    {
      name: 'inverseSelection',
      config: {
        type: 'CheckboxControl',
        renderTrigger: true,
        affectsDataMask: true,
        label: (0,TranslatorSingleton.t)('Inverse selection'),
        default: inverseSelection,
        description: (0,TranslatorSingleton.t)('Exclude selected values') } }],



    [
    {
      name: 'searchAllOptions',
      config: {
        type: 'CheckboxControl',
        renderTrigger: true,
        affectsDataMask: true,
        label: (0,TranslatorSingleton.t)('Search all filter options'),
        default: searchAllOptions,
        description: (0,TranslatorSingleton.t)('By default, each filter loads at most 1000 choices at the initial page load. ' +
        'Check this box if you have more than 1000 filter values and want to enable dynamically ' +
        'searching that loads filter values as users type (may add stress to your database).') } }]] }],






  controlOverrides: {
    groupby: {
      multi: false,
      validators: [validateNonEmpty/* default */.Z] } } };



/* harmony default export */ const controlPanel = (config);
;// CONCATENATED MODULE: ./src/filters/components/Select/transformProps.ts

function transformProps(chartProps) {
  const { formData, height, hooks, queriesData, width, behaviors, appSection, filterState, isRefreshing } = chartProps;
  const newFormData = { ...DEFAULT_FORM_DATA, ...formData };
  const { setDataMask = () => {}, setFocusedFilter = () => {}, unsetFocusedFilter = () => {} } = hooks;
  const [queryData] = queriesData;
  const { colnames = [], coltypes = [], data = [] } = queryData || {};
  const coltypeMap = colnames.reduce((accumulator, item, index) => ({ ...accumulator, [item]: coltypes[index] }), {});
  return {
    filterState,
    coltypeMap,
    appSection,
    width,
    behaviors,
    height,
    data,
    formData: newFormData,
    isRefreshing,
    setDataMask,
    setFocusedFilter,
    unsetFocusedFilter };

}
// EXTERNAL MODULE: ./src/filters/components/Select/images/thumbnail.png
var thumbnail = __webpack_require__(80757);
;// CONCATENATED MODULE: ./src/filters/components/Select/index.ts
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





class FilterSelectPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    const metadata = new ChartMetadata/* default */.Z({
      name: (0,TranslatorSingleton.t)('Select filter'),
      description: (0,TranslatorSingleton.t)('Select filter plugin using AntD'),
      behaviors: [Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART, Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER],
      enableNoResults: false,
      tags: [(0,TranslatorSingleton.t)('Experimental')],
      thumbnail: thumbnail });

    super({
      buildQuery: Select_buildQuery,
      controlPanel: controlPanel,
      loadChart: () => __webpack_require__.e(/* import() */ 5181).then(__webpack_require__.bind(__webpack_require__, 45181)),
      metadata,
      transformProps: transformProps });

  }}
;// CONCATENATED MODULE: ./src/filters/components/Range/buildQuery.ts
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
 * The buildQuery function is used to create an instance of QueryContext that's
 * sent to the chart data endpoint. In addition to containing information of which
 * datasource to use, it specifies the type (e.g. full payload, samples, query) and
 * format (e.g. CSV or JSON) of the result and whether or not to force refresh the data from
 * the datasource as opposed to using a cached copy of the data, if available.
 *
 * More importantly though, QueryContext contains a property `queries`, which is an array of
 * QueryObjects specifying individual data requests to be made. A QueryObject specifies which
 * columns, metrics and filters, among others, to use during the query. Usually it will be enough
 * to specify just one query based on the baseQueryObject, but for some more advanced use cases
 * it is possible to define post processing operations in the QueryObject, or multiple queries
 * if a viz needs multiple different result sets.
 */
function buildQuery_buildQuery(formData) {
  const { groupby } = formData;
  const [column = ''] = groupby || [];
  // @ts-ignore (need update interface Column )
  return (0,buildQueryContext/* default */.Z)(formData, (baseQueryObject) => [
  {
    ...baseQueryObject,
    columns: [],
    groupby: [],
    metrics: [
    {
      aggregate: 'MIN',
      column: {
        column_name: column,
        id: 1,
        type_generic: QueryResponse/* GenericDataType.NUMERIC */.Z.NUMERIC },

      expressionType: 'SIMPLE',
      hasCustomLabel: true,
      label: 'min' },

    {
      aggregate: 'MAX',
      column: {
        column_name: column,
        id: 2,
        type_generic: QueryResponse/* GenericDataType.NUMERIC */.Z.NUMERIC },

      expressionType: 'SIMPLE',
      hasCustomLabel: true,
      label: 'max' }] }]);




}
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/shared-controls/index.js
var shared_controls = __webpack_require__(28500);
;// CONCATENATED MODULE: ./src/filters/components/Range/controlPanel.ts
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


const controlPanel_config = {
  controlPanelSections: [
  chart_controls_esm.sections.legacyRegularTime,
  {
    label: (0,TranslatorSingleton.t)('Query'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'groupby',
      config: {
        ...shared_controls/* sharedControls.groupby */.Hq.groupby,
        label: 'Column',
        required: true } }]] },





  {
    label: (0,TranslatorSingleton.t)('UI Configuration'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'enableEmptyFilter',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Required'),
        default: false,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('User must select a value for this filter.') } }]] }] };







/* harmony default export */ const Range_controlPanel = (controlPanel_config);
;// CONCATENATED MODULE: ./src/filters/components/Range/transformProps.ts
function transformProps_transformProps(chartProps) {
  const { formData, height, hooks, queriesData, width, behaviors, filterState } = chartProps;
  const { setDataMask = () => {}, setFocusedFilter = () => {}, unsetFocusedFilter = () => {} } = hooks;
  const { data } = queriesData[0];
  return {
    data,
    formData,
    behaviors,
    height,
    setDataMask,
    filterState,
    width,
    setFocusedFilter,
    unsetFocusedFilter };

}
// EXTERNAL MODULE: ./src/filters/components/Range/images/thumbnail.png
var images_thumbnail = __webpack_require__(29872);
;// CONCATENATED MODULE: ./src/filters/components/Range/index.ts
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





class RangeFilterPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    const metadata = new ChartMetadata/* default */.Z({
      name: (0,TranslatorSingleton.t)('Range filter'),
      description: (0,TranslatorSingleton.t)('Range filter plugin using AntD'),
      behaviors: [Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART, Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER],
      tags: [(0,TranslatorSingleton.t)('Experimental')],
      thumbnail: images_thumbnail });

    super({
      buildQuery: buildQuery_buildQuery,
      controlPanel: Range_controlPanel,
      loadChart: () => __webpack_require__.e(/* import() */ 326).then(__webpack_require__.bind(__webpack_require__, 30326)),
      metadata,
      transformProps: transformProps_transformProps });

  }}
;// CONCATENATED MODULE: ./src/filters/components/Time/controlPanel.ts


const Time_controlPanel_config = {
  // For control input types, see: superset-frontend/src/explore/components/controls/index.js
  controlPanelSections: [
  {
    label: (0,TranslatorSingleton.t)('Query'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'groupby',
      config: {
        ...lib.sharedControls.groupby,
        label: 'Column',
        required: true } }]] },





  {
    label: (0,TranslatorSingleton.t)('UI Configuration'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'enableEmptyFilter',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Required'),
        default: false,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('User must select a value for this filter.') } }]] }] };







/* harmony default export */ const Time_controlPanel = (Time_controlPanel_config);
;// CONCATENATED MODULE: ./src/filters/components/Time/types.ts
const types_DEFAULT_FORM_DATA = {
  defaultValue: null };
;// CONCATENATED MODULE: ./src/filters/components/Time/transformProps.ts

function Time_transformProps_transformProps(chartProps) {
  const { formData, height, hooks, queriesData, width, behaviors, filterState } = chartProps;
  const { setDataMask = () => {}, setFocusedFilter = () => {}, unsetFocusedFilter = () => {} } = hooks;
  const { data } = queriesData[0];
  return {
    data,
    filterState,
    formData: {
      ...types_DEFAULT_FORM_DATA,
      ...formData },

    height,
    behaviors,
    setDataMask,
    setFocusedFilter,
    unsetFocusedFilter,
    width };

}
// EXTERNAL MODULE: ./src/filters/components/Time/images/thumbnail.png
var Time_images_thumbnail = __webpack_require__(29884);
;// CONCATENATED MODULE: ./src/filters/components/Time/index.ts
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




class TimeFilterPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    const metadata = new ChartMetadata/* default */.Z({
      name: (0,TranslatorSingleton.t)('Time filter'),
      description: (0,TranslatorSingleton.t)('Custom time filter plugin'),
      behaviors: [Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART, Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER],
      thumbnail: Time_images_thumbnail,
      tags: [(0,TranslatorSingleton.t)('Experimental')],
      datasourceCount: 0 });

    super({
      controlPanel: Time_controlPanel,
      loadChart: () => Promise.all(/* import() */[__webpack_require__.e(1216), __webpack_require__.e(4998), __webpack_require__.e(7843), __webpack_require__.e(3375), __webpack_require__.e(9483)]).then(__webpack_require__.bind(__webpack_require__, 89483)),
      metadata,
      transformProps: Time_transformProps_transformProps });

  }}
;// CONCATENATED MODULE: ./src/filters/components/TimeColumn/buildQuery.ts
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
 * The buildQuery function is used to create an instance of QueryContext that's
 * sent to the chart data endpoint. In addition to containing information of which
 * datasource to use, it specifies the type (e.g. full payload, samples, query) and
 * format (e.g. CSV or JSON) of the result and whether or not to force refresh the data from
 * the datasource as opposed to using a cached copy of the data, if available.
 *
 * More importantly though, QueryContext contains a property `queries`, which is an array of
 * QueryObjects specifying individual data requests to be made. A QueryObject specifies which
 * columns, metrics and filters, among others, to use during the query. Usually it will be enough
 * to specify just one query based on the baseQueryObject, but for some more advanced use cases
 * it is possible to define post processing operations in the QueryObject, or multiple queries
 * if a viz needs multiple different result sets.
 */
function TimeColumn_buildQuery_buildQuery(formData) {
  return (0,buildQueryContext/* default */.Z)(formData, (baseQueryObject) => [
  {
    result_type: 'columns',
    columns: [],
    metrics: [],
    orderby: [] }]);


}
;// CONCATENATED MODULE: ./src/filters/components/TimeColumn/controlPanel.ts

const TimeColumn_controlPanel_config = {
  controlPanelSections: [
  {
    label: (0,TranslatorSingleton.t)('UI Configuration'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'enableEmptyFilter',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Required'),
        default: false,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('User must select a value for this filter.') } }]] }] };







/* harmony default export */ const TimeColumn_controlPanel = (TimeColumn_controlPanel_config);
;// CONCATENATED MODULE: ./src/filters/components/TimeColumn/types.ts
const TimeColumn_types_DEFAULT_FORM_DATA = {
  defaultValue: null };
;// CONCATENATED MODULE: ./src/filters/components/TimeColumn/transformProps.ts

function TimeColumn_transformProps_transformProps(chartProps) {
  const { behaviors, formData, height, hooks, queriesData, width, filterState } = chartProps;
  const { setDataMask = () => {}, setFocusedFilter = () => {}, unsetFocusedFilter = () => {} } = hooks;
  const { data } = queriesData[0];
  return {
    filterState,
    behaviors,
    width,
    height,
    data,
    formData: { ...TimeColumn_types_DEFAULT_FORM_DATA, ...formData },
    setDataMask,
    setFocusedFilter,
    unsetFocusedFilter };

}
// EXTERNAL MODULE: ./src/filters/components/TimeColumn/images/thumbnail.png
var TimeColumn_images_thumbnail = __webpack_require__(53041);
;// CONCATENATED MODULE: ./src/filters/components/TimeColumn/index.ts
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





class FilterTimeColumnPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    const metadata = new ChartMetadata/* default */.Z({
      name: (0,TranslatorSingleton.t)('Time column'),
      description: (0,TranslatorSingleton.t)('Time column filter plugin'),
      behaviors: [Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART, Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER],
      tags: [(0,TranslatorSingleton.t)('Experimental')],
      thumbnail: TimeColumn_images_thumbnail });

    super({
      buildQuery: TimeColumn_buildQuery_buildQuery,
      controlPanel: TimeColumn_controlPanel,
      loadChart: () => __webpack_require__.e(/* import() */ 4572).then(__webpack_require__.bind(__webpack_require__, 24572)),
      metadata,
      transformProps: TimeColumn_transformProps_transformProps });

  }}
;// CONCATENATED MODULE: ./src/filters/components/GroupBy/buildQuery.ts
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
 * The buildQuery function is used to create an instance of QueryContext that's
 * sent to the chart data endpoint. In addition to containing information of which
 * datasource to use, it specifies the type (e.g. full payload, samples, query) and
 * format (e.g. CSV or JSON) of the result and whether or not to force refresh the data from
 * the datasource as opposed to using a cached copy of the data, if available.
 *
 * More importantly though, QueryContext contains a property `queries`, which is an array of
 * QueryObjects specifying individual data requests to be made. A QueryObject specifies which
 * columns, metrics and filters, among others, to use during the query. Usually it will be enough
 * to specify just one query based on the baseQueryObject, but for some more advanced use cases
 * it is possible to define post processing operations in the QueryObject, or multiple queries
 * if a viz needs multiple different result sets.
 */
function GroupBy_buildQuery_buildQuery(formData) {
  return (0,buildQueryContext/* default */.Z)(formData, (baseQueryObject) => [
  {
    ...baseQueryObject,
    result_type: 'columns',
    columns: [],
    metrics: [],
    orderby: [] }]);


}
;// CONCATENATED MODULE: ./src/filters/components/GroupBy/types.ts
const GroupBy_types_DEFAULT_FORM_DATA = {
  defaultValue: null,
  multiSelect: false };
;// CONCATENATED MODULE: ./src/filters/components/GroupBy/controlPanel.ts
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




const { multiSelect: controlPanel_multiSelect } = GroupBy_types_DEFAULT_FORM_DATA;
const GroupBy_controlPanel_config = {
  controlPanelSections: [
  // @ts-ignore
  chart_controls_esm.sections.legacyRegularTime,
  {
    label: (0,TranslatorSingleton.t)('Query'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'groupby',
      config: {
        ...lib.sharedControls.groupby,
        label: 'Columns to show',
        multiple: true,
        required: false } }]] },





  {
    label: (0,TranslatorSingleton.t)('UI Configuration'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'multiSelect',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Multiple select'),
        default: controlPanel_multiSelect,
        affectsDataMask: true,
        resetConfig: true,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('Allow selecting multiple values') } }],



    [
    {
      name: 'enableEmptyFilter',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Required'),
        default: false,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('User must select a value for this filter.') } }]] }] };







/* harmony default export */ const GroupBy_controlPanel = (GroupBy_controlPanel_config);
;// CONCATENATED MODULE: ./src/filters/components/GroupBy/transformProps.ts

function GroupBy_transformProps_transformProps(chartProps) {
  const { behaviors, formData, height, hooks, queriesData, width, filterState } = chartProps;
  const { setDataMask = () => {}, setFocusedFilter = () => {}, unsetFocusedFilter = () => {} } = hooks;
  const { data } = queriesData[0];
  return {
    filterState,
    behaviors,
    width,
    height,
    data,
    formData: { ...GroupBy_types_DEFAULT_FORM_DATA, ...formData },
    setDataMask,
    setFocusedFilter,
    unsetFocusedFilter };

}
// EXTERNAL MODULE: ./src/filters/components/GroupBy/images/thumbnail.png
var GroupBy_images_thumbnail = __webpack_require__(43225);
;// CONCATENATED MODULE: ./src/filters/components/GroupBy/index.ts
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





class FilterGroupByPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    const metadata = new ChartMetadata/* default */.Z({
      name: (0,TranslatorSingleton.t)('Group By'),
      description: (0,TranslatorSingleton.t)('Group By filter plugin'),
      behaviors: [Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART, Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER],
      tags: [(0,TranslatorSingleton.t)('Experimental')],
      thumbnail: GroupBy_images_thumbnail });

    super({
      buildQuery: GroupBy_buildQuery_buildQuery,
      controlPanel: GroupBy_controlPanel,
      loadChart: () => __webpack_require__.e(/* import() */ 8464).then(__webpack_require__.bind(__webpack_require__, 8464)),
      metadata,
      transformProps: GroupBy_transformProps_transformProps });

  }}
;// CONCATENATED MODULE: ./src/filters/components/TimeGrain/buildQuery.ts
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
 * The buildQuery function is used to create an instance of QueryContext that's
 * sent to the chart data endpoint. In addition to containing information of which
 * datasource to use, it specifies the type (e.g. full payload, samples, query) and
 * format (e.g. CSV or JSON) of the result and whether or not to force refresh the data from
 * the datasource as opposed to using a cached copy of the data, if available.
 *
 * More importantly though, QueryContext contains a property `queries`, which is an array of
 * QueryObjects specifying individual data requests to be made. A QueryObject specifies which
 * columns, metrics and filters, among others, to use during the query. Usually it will be enough
 * to specify just one query based on the baseQueryObject, but for some more advanced use cases
 * it is possible to define post processing operations in the QueryObject, or multiple queries
 * if a viz needs multiple different result sets.
 */
function TimeGrain_buildQuery_buildQuery(formData) {
  return (0,buildQueryContext/* default */.Z)(formData, () => [
  {
    result_type: 'timegrains',
    columns: [],
    metrics: [],
    orderby: [] }]);


}
;// CONCATENATED MODULE: ./src/filters/components/TimeGrain/controlPanel.ts

const TimeGrain_controlPanel_config = {
  controlPanelSections: [
  {
    label: (0,TranslatorSingleton.t)('UI Configuration'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'enableEmptyFilter',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Required'),
        default: false,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('User must select a value for this filter.') } }]] }] };







/* harmony default export */ const TimeGrain_controlPanel = (TimeGrain_controlPanel_config);
;// CONCATENATED MODULE: ./src/filters/components/TimeGrain/types.ts
const TimeGrain_types_DEFAULT_FORM_DATA = {
  defaultValue: null };
;// CONCATENATED MODULE: ./src/filters/components/TimeGrain/transformProps.ts

function TimeGrain_transformProps_transformProps(chartProps) {
  const { formData, height, hooks, queriesData, width, filterState } = chartProps;
  const { setDataMask = () => {}, setFocusedFilter = () => {}, unsetFocusedFilter = () => {} } = hooks;
  const { data } = queriesData[0];
  return {
    filterState,
    width,
    height,
    data,
    formData: { ...TimeGrain_types_DEFAULT_FORM_DATA, ...formData },
    setDataMask,
    setFocusedFilter,
    unsetFocusedFilter };

}
// EXTERNAL MODULE: ./src/filters/components/TimeGrain/images/thumbnail.png
var TimeGrain_images_thumbnail = __webpack_require__(78292);
;// CONCATENATED MODULE: ./src/filters/components/TimeGrain/index.ts
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





class FilterTimeGrainPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    const metadata = new ChartMetadata/* default */.Z({
      name: (0,TranslatorSingleton.t)('Time grain'),
      description: (0,TranslatorSingleton.t)('Time grain filter plugin'),
      behaviors: [Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART, Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER],
      tags: [(0,TranslatorSingleton.t)('Experimental')],
      thumbnail: TimeGrain_images_thumbnail });

    super({
      buildQuery: TimeGrain_buildQuery_buildQuery,
      controlPanel: TimeGrain_controlPanel,
      loadChart: () => __webpack_require__.e(/* import() */ 1948).then(__webpack_require__.bind(__webpack_require__, 81948)),
      metadata,
      transformProps: TimeGrain_transformProps_transformProps });

  }}
;// CONCATENATED MODULE: ./src/filters/components/index.ts
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






// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-pivot-table/esm/plugin/index.js + 3 modules
var plugin_chart_pivot_table_esm_plugin = __webpack_require__(89253);
;// CONCATENATED MODULE: ./src/visualizations/FilterBox/transformProps.ts
const NOOP = () => {};
function FilterBox_transformProps_transformProps(chartProps) {
  const { datasource, formData, hooks, initialValues, queriesData, rawDatasource = {}, rawFormData, width, height } = chartProps;
  const { onAddFilter = NOOP, onFilterMenuOpen = NOOP, onFilterMenuClose = NOOP } = hooks;
  const { sliceId, dateFilter, instantFiltering, showDruidTimeGranularity, showDruidTimeOrigin, showSqlaTimeColumn, showSqlaTimeGranularity } = formData;
  const { verboseMap = {} } = datasource;
  const filterConfigs = formData.filterConfigs || [];
  const filtersFields = filterConfigs.map((flt) => ({
    ...flt,
    key: flt.column,
    label: flt.label || verboseMap[flt.column] || flt.column }));

  return {
    chartId: sliceId,
    width,
    height,
    datasource: rawDatasource,
    filtersChoices: queriesData[0].data,
    filtersFields,
    instantFiltering,
    onChange: onAddFilter,
    onFilterMenuOpen,
    onFilterMenuClose,
    origSelectedValues: initialValues || {},
    showDateFilter: dateFilter,
    showDruidTimeGrain: showDruidTimeGranularity,
    showDruidTimeOrigin,
    showSqlaTimeColumn,
    showSqlaTimeGrain: showSqlaTimeGranularity,
    // the original form data, needed for async select options
    rawFormData };

}
// EXTERNAL MODULE: ./src/visualizations/FilterBox/images/thumbnail.png
var FilterBox_images_thumbnail = __webpack_require__(34168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/visualizations/FilterBox/controlPanel.jsx
var _bootstrapData$common, _bootstrapData$common2; /**
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




const appContainer = document.getElementById('app');
const bootstrapData = JSON.parse(appContainer.getAttribute('data-bootstrap'));
const druidIsActive = !!(bootstrapData != null && (_bootstrapData$common = bootstrapData.common) != null && (_bootstrapData$common2 = _bootstrapData$common.conf) != null && _bootstrapData$common2.DRUID_IS_ACTIVE);
const druidSection = druidIsActive ?
[
[
{
  name: 'show_druid_time_granularity',
  config: {
    type: 'CheckboxControl',
    label: (0,TranslatorSingleton.t)('Show Druid granularity dropdown'),
    default: false,
    description: (0,TranslatorSingleton.t)('Check to include Druid granularity dropdown') } }],



[
{
  name: 'show_druid_time_origin',
  config: {
    type: 'CheckboxControl',
    label: (0,TranslatorSingleton.t)('Show Druid time origin'),
    default: false,
    description: (0,TranslatorSingleton.t)('Check to include time origin dropdown') } }]] :




[];

/* harmony default export */ const FilterBox_controlPanel = ({
  controlPanelSections: [
  chart_controls_esm.sections.legacyTimeseriesTime,
  {
    label: (0,TranslatorSingleton.t)('Filters configuration'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'filter_configs',
      config: {
        type: 'CollectionControl',
        label: 'Filters',
        description: (0,TranslatorSingleton.t)('Filter configuration for the filter box'),
        validators: [],
        controlName: 'FilterBoxItemControl',
        mapStateToProps: ({ datasource }) => ({ datasource }) } }],



    [(0,emotion_react_browser_esm.jsx)("hr", null)],
    [
    {
      name: 'date_filter',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Date filter'),
        default: true,
        description: (0,TranslatorSingleton.t)('Whether to include a time filter') } }],



    [
    {
      name: 'instant_filtering',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Instant filtering'),
        renderTrigger: true,
        default: false,
        description: (0,TranslatorSingleton.t)(
        'Check to apply filters instantly as they change instead of displaying [Apply] button') } }],




    [
    {
      name: 'show_sqla_time_granularity',
      config: {
        type: 'CheckboxControl',
        label: druidIsActive ?
        (0,TranslatorSingleton.t)('Show SQL time grain dropdown') :
        (0,TranslatorSingleton.t)('Show time grain dropdown'),
        default: false,
        description: druidIsActive ?
        (0,TranslatorSingleton.t)('Check to include SQL time grain dropdown') :
        (0,TranslatorSingleton.t)('Check to include time grain dropdown') } }],



    [
    {
      name: 'show_sqla_time_column',
      config: {
        type: 'CheckboxControl',
        label: druidIsActive ?
        (0,TranslatorSingleton.t)('Show SQL time column') :
        (0,TranslatorSingleton.t)('Show time column'),
        default: false,
        description: (0,TranslatorSingleton.t)('Check to include time column dropdown') } }],



    ...druidSection,
    ['adhoc_filters']] }],



  controlOverrides: {
    adhoc_filters: {
      label: (0,TranslatorSingleton.t)('Limit selector values'),
      description: (0,TranslatorSingleton.t)(
      'These filters apply to the values available in the dropdowns') } } });
;// CONCATENATED MODULE: ./src/visualizations/FilterBox/FilterBoxChartPlugin.js
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





const metadata = new ChartMetadata/* default */.Z({
  category: (0,TranslatorSingleton.t)('Tools'),
  name: (0,TranslatorSingleton.t)('Filter box'),
  description: (0,TranslatorSingleton.t)(`Chart component that lets you add a custom filter UI in your dashboard. When added to dashboard, a filter box lets users specify specific values or ranges to filter charts by. The charts that each filter box is applied to can be fine tuned as well in the dashboard view.

    Note that this plugin is being replaced with the new Filters feature that lives in the dashboard view itself. It's easier to use and has more capabilities!`),
  thumbnail: FilterBox_images_thumbnail,
  useLegacyApi: true });


class FilterBoxChartPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    super({
      controlPanel: FilterBox_controlPanel,
      metadata,
      transformProps: FilterBox_transformProps_transformProps,
      loadChart: () => Promise.all(/* import() */[__webpack_require__.e(1216), __webpack_require__.e(4998), __webpack_require__.e(4654), __webpack_require__.e(741), __webpack_require__.e(6962), __webpack_require__.e(7843), __webpack_require__.e(2825), __webpack_require__.e(3375), __webpack_require__.e(7173), __webpack_require__.e(3)]).then(__webpack_require__.bind(__webpack_require__, 51777)) });

  }}
;// CONCATENATED MODULE: ./src/visualizations/TimeTable/transformProps.js
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
function TimeTable_transformProps_transformProps(chartProps) {
  const { height, datasource, formData, queriesData } = chartProps;
  const { columnCollection = [], groupby, metrics, url } = formData;
  const { records, columns } = queriesData[0].data;
  const isGroupBy = (groupby == null ? void 0 : groupby.length) > 0;

  // When there is a "group by",
  // each row in the table is a database column
  // Otherwise,
  // each row in the table is a metric
  let rows;
  if (isGroupBy) {
    rows = columns.map((column) =>
    typeof column === 'object' ? column : { label: column });

  } else {
    const metricMap = datasource.metrics.reduce((acc, current) => {
      const map = acc;
      map[current.metric_name] = current;
      return map;
    }, {});

    rows = metrics.map((metric) =>
    typeof metric === 'object' ? metric : metricMap[metric]);

  }

  // TODO: Better parse this from controls instead of mutative value here.
  columnCollection.forEach((column) => {
    const c = column;
    if (c.timeLag !== undefined && c.timeLag !== null && c.timeLag !== '') {
      c.timeLag = parseInt(c.timeLag, 10);
    }
  });

  return {
    height,
    data: records,
    columnConfigs: columnCollection,
    rows,
    rowType: isGroupBy ? 'column' : 'metric',
    url };

}
// EXTERNAL MODULE: ./src/visualizations/TimeTable/images/thumbnail.png
var TimeTable_images_thumbnail = __webpack_require__(24432);
;// CONCATENATED MODULE: ./src/visualizations/TimeTable/TimeTableChartPlugin.js
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




const TimeTableChartPlugin_metadata = new ChartMetadata/* default */.Z({
  category: (0,TranslatorSingleton.t)('Table'),
  name: (0,TranslatorSingleton.t)('Time-series Table'),
  description: (0,TranslatorSingleton.t)(
  'Compare multiple time series charts (as sparklines) and related metrics quickly.'),

  tags: [
  (0,TranslatorSingleton.t)('Multi-Variables'),
  (0,TranslatorSingleton.t)('Comparison'),
  (0,TranslatorSingleton.t)('Legacy'),
  (0,TranslatorSingleton.t)('Percentages'),
  (0,TranslatorSingleton.t)('Tabular'),
  (0,TranslatorSingleton.t)('Text'),
  (0,TranslatorSingleton.t)('Trend')],

  thumbnail: TimeTable_images_thumbnail,
  useLegacyApi: true });


class TimeTableChartPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    super({
      metadata: TimeTableChartPlugin_metadata,
      transformProps: TimeTable_transformProps_transformProps,
      loadChart: () => Promise.all(/* import() */[__webpack_require__.e(1216), __webpack_require__.e(1095), __webpack_require__.e(6962), __webpack_require__.e(423)]).then(__webpack_require__.bind(__webpack_require__, 55938)) });

  }}
;// CONCATENATED MODULE: ./src/visualizations/presets/MainPreset.js
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





























class MainPreset extends Preset/* default */.Z {
  constructor() {
    const experimentalplugins = (0,featureFlags/* isFeatureEnabled */.c)(
    featureFlags/* FeatureFlag.DASHBOARD_FILTERS_EXPERIMENTAL */.T.DASHBOARD_FILTERS_EXPERIMENTAL) ?

    [new FilterGroupByPlugin().configure({ key: 'filter_groupby' })] :
    [];

    super({
      name: 'Legacy charts',
      presets: [new legacy_preset_chart_deckgl_esm/* DeckGLChartPreset */.kA()],
      plugins: [
      new Area/* default */.Z().configure({ key: 'area' }),
      new Bar/* default */.Z().configure({ key: 'bar' }),
      new BigNumber/* default */.Z().configure({ key: 'big_number' }),
      new BigNumberTotal/* default */.Z().configure({ key: 'big_number_total' }),
      new BoxPlot/* default */.Z().configure({ key: 'box_plot' }),
      new Bubble/* default */.Z().configure({ key: 'bubble' }),
      new Bullet/* default */.Z().configure({ key: 'bullet' }),
      new esm/* default */.Z().configure({ key: 'cal_heatmap' }),
      new legacy_plugin_chart_chord_esm/* default */.Z().configure({ key: 'chord' }),
      new Compare/* default */.Z().configure({ key: 'compare' }),
      new legacy_plugin_chart_country_map_esm/* default */.Z().configure({ key: 'country_map' }),
      new DistBar/* default */.Z().configure({ key: 'dist_bar' }),
      new DualLine/* default */.Z().configure({ key: 'dual_line' }),
      new legacy_plugin_chart_event_flow_esm/* default */.Z().configure({ key: 'event_flow' }),
      new FilterBoxChartPlugin().configure({ key: 'filter_box' }),
      new Funnel/* default */.Z().configure({ key: 'funnel' }),
      new Treemap/* default */.Z().configure({ key: 'treemap_v2' }),
      new Gauge/* default */.Z().configure({ key: 'gauge_chart' }),
      new Graph/* default */.Z().configure({ key: 'graph_chart' }),
      new Radar/* default */.Z().configure({ key: 'radar' }),
      new MixedTimeseries/* default */.Z().configure({
        key: 'mixed_timeseries' }),

      new legacy_plugin_chart_heatmap_esm/* default */.Z().configure({ key: 'heatmap' }),
      new legacy_plugin_chart_histogram_esm/* default */.Z().configure({ key: 'histogram' }),
      new legacy_plugin_chart_horizon_esm/* default */.Z().configure({ key: 'horizon' }),
      new Line/* default */.Z().configure({ key: 'line' }),
      new LineMulti/* default */.Z().configure({ key: 'line_multi' }),
      new legacy_plugin_chart_map_box_esm/* default */.Z().configure({ key: 'mapbox' }),
      new legacy_plugin_chart_paired_t_test_esm/* default */.Z().configure({ key: 'paired_ttest' }),
      new legacy_plugin_chart_parallel_coordinates_esm/* default */.Z().configure({ key: 'para' }),
      new legacy_plugin_chart_partition_esm/* default */.Z().configure({ key: 'partition' }),
      new Pie/* default */.Z().configure({ key: 'pie' }),
      new legacy_plugin_chart_pivot_table_esm/* default */.Z().configure({ key: 'pivot_table' }),
      new plugin_chart_pivot_table_esm_plugin/* default */.Z().configure({ key: 'pivot_table_v2' }),
      new legacy_plugin_chart_rose_esm/* default */.Z().configure({ key: 'rose' }),
      new legacy_plugin_chart_sankey_esm/* default */.Z().configure({ key: 'sankey' }),
      new legacy_plugin_chart_sunburst_esm/* default */.Z().configure({ key: 'sunburst' }),
      new plugin_chart_table_esm/* default */.Z().configure({ key: 'table' }),
      new TimePivot/* default */.Z().configure({ key: 'time_pivot' }),
      new TimeTableChartPlugin().configure({ key: 'time_table' }),
      new legacy_plugin_chart_treemap_esm/* default */.Z().configure({ key: 'treemap' }),
      new esm_plugin/* default */.Z().configure({ key: 'word_cloud' }),
      new legacy_plugin_chart_world_map_esm/* default */.Z().configure({ key: 'world_map' }),
      new Timeseries_Area/* default */.Z().configure({
        key: 'echarts_area' }),

      new Timeseries/* default */.Z().configure({
        key: 'echarts_timeseries' }),

      new Regular_Bar/* default */.Z().configure({
        key: 'echarts_timeseries_bar' }),

      new Regular_Line/* default */.Z().configure({
        key: 'echarts_timeseries_line' }),

      new SmoothLine/* default */.Z().configure({
        key: 'echarts_timeseries_smooth' }),

      new Scatter/* default */.Z().configure({
        key: 'echarts_timeseries_scatter' }),

      new Step/* default */.Z().configure({
        key: 'echarts_timeseries_step' }),

      new FilterSelectPlugin().configure({ key: 'filter_select' }),
      new RangeFilterPlugin().configure({ key: 'filter_range' }),
      new TimeFilterPlugin().configure({ key: 'filter_time' }),
      new FilterTimeColumnPlugin().configure({ key: 'filter_timecolumn' }),
      new FilterTimeGrainPlugin().configure({ key: 'filter_timegrain' }),
      new Tree/* default */.Z().configure({ key: 'tree_chart' }),
      ...experimentalplugins] });


  }}
;// CONCATENATED MODULE: ./src/setup/setupPluginsExtra.ts
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
// For individual deployments to add custom overrides
function setupPluginsExtra() {}
// EXTERNAL MODULE: ./src/modules/utils.js
var utils = __webpack_require__(16737);
;// CONCATENATED MODULE: ./src/explore/controlPanels/Separator.js
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



/* harmony default export */ const Separator = ({
  controlPanelSections: [
  {
    label: (0,TranslatorSingleton.t)('Code'),
    controlSetRows: [
    [
    {
      name: 'markup_type',
      config: {
        type: 'SelectControl',
        label: (0,TranslatorSingleton.t)('Markup type'),
        clearable: false,
        choices: (0,utils/* formatSelectOptions */.mG)(['markdown', 'html']),
        default: 'markdown',
        validators: [validateNonEmpty/* default */.Z],
        description: (0,TranslatorSingleton.t)('Pick your favorite markup language') } }],



    [
    {
      name: 'code',
      config: {
        type: 'TextAreaControl',
        label: (0,TranslatorSingleton.t)('Code'),
        description: (0,TranslatorSingleton.t)('Put your code here'),
        mapStateToProps: (state) => ({
          language:
          state.controls && state.controls.markup_type ?
          state.controls.markup_type.value :
          'markdown' }),

        default: '' } }]] }],






  controlOverrides: {
    code: {
      default:
      '####Section Title\n' +
      'A paragraph describing the section ' +
      'of the dashboard, right before the separator line ' +
      '\n\n' +
      '---------------' } },


  sectionOverrides: {
    druidTimeSeries: {
      controlSetRows: [] },

    sqlaTimeSeries: {
      controlSetRows: [] } } });
;// CONCATENATED MODULE: ./src/explore/controlPanels/TimeTable.js
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



/* harmony default export */ const TimeTable = ({
  controlPanelSections: [
  chart_controls_esm.sections.legacyTimeseriesTime,
  {
    label: (0,TranslatorSingleton.t)('Query'),
    expanded: true,
    controlSetRows: [
    ['metrics'],
    ['adhoc_filters'],
    ['groupby'],
    ['limit'],
    [
    {
      name: 'column_collection',
      config: {
        type: 'CollectionControl',
        label: (0,TranslatorSingleton.t)('Time series columns'),
        renderTrigger: true,
        validators: [validateNonEmpty/* default */.Z],
        controlName: 'TimeSeriesColumnControl' } }],



    ['row_limit'],
    [
    {
      name: 'url',
      config: {
        type: 'TextControl',
        label: (0,TranslatorSingleton.t)('URL'),
        description: (0,TranslatorSingleton.t)(
        "Templated link, it's possible to include {{ metric }} " +
        'or other values coming from the controls.'),

        default: '' } }]] }],






  controlOverrides: {
    groupby: {
      multiple: false } } });
;// CONCATENATED MODULE: ./src/setup/setupPlugins.ts
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





function setupPlugins() {
  new MainPreset().register();
  // TODO: Remove these shims once the control panel configs are moved into the plugin package.
  (0,ChartControlPanelRegistrySingleton/* default */.Z)().
  registerValue('separator', Separator).
  registerValue('time_table', TimeTable);
  setupPluginsExtra();
}

/***/ }),

/***/ 75042:
/***/ (() => {

/* (ignored) */

/***/ })

}]);