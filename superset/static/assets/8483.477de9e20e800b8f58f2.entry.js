"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[8483],{

/***/ 88483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "COLUMN_NAME_ALIASES": () => (/* reexport */ constants/* COLUMN_NAME_ALIASES */.DS),
  "COMPARATOR": () => (/* reexport */ types/* COMPARATOR */.O9),
  "ColumnOption": () => (/* reexport */ ColumnOption/* ColumnOption */.E),
  "ColumnTypeLabel": () => (/* reexport */ ColumnTypeLabel/* ColumnTypeLabel */.j),
  "ControlComponentProps": () => (/* reexport */ types/* ControlComponentProps */.qU),
  "ControlFormItemSpec": () => (/* reexport */ types/* ControlFormItemSpec */.Tu),
  "D3_FORMAT_DOCS": () => (/* reexport */ D3Formatting/* D3_FORMAT_DOCS */.YD),
  "D3_FORMAT_OPTIONS": () => (/* reexport */ D3Formatting/* D3_FORMAT_OPTIONS */.F6),
  "D3_TIME_FORMAT_DOCS": () => (/* reexport */ D3Formatting/* D3_TIME_FORMAT_DOCS */.oq),
  "D3_TIME_FORMAT_OPTIONS": () => (/* reexport */ D3Formatting/* D3_TIME_FORMAT_OPTIONS */.HC),
  "DEFAULT_NUMBER_FORMAT": () => (/* reexport */ D3Formatting/* DEFAULT_NUMBER_FORMAT */.Ul),
  "DEFAULT_TIME_FORMAT": () => (/* reexport */ D3Formatting/* DEFAULT_TIME_FORMAT */._r),
  "InfoTooltipWithTrigger": () => (/* reexport */ InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V),
  "MULTIPLE_VALUE_COMPARATORS": () => (/* reexport */ types/* MULTIPLE_VALUE_COMPARATORS */.vD),
  "Metric": () => (/* reexport */ types/* Metric */.jb),
  "MetricOption": () => (/* reexport */ MetricOption/* MetricOption */.m),
  "QueryModeLabel": () => (/* reexport */ constants/* QueryModeLabel */.cm),
  "TIME_COLUMN": () => (/* reexport */ utils_constants/* TIME_COLUMN */.a),
  "TIME_COLUMN_OPTION": () => (/* reexport */ constants/* TIME_COLUMN_OPTION */.Au),
  "TIME_COMPARISON_SEPARATOR": () => (/* reexport */ utils_constants/* TIME_COMPARISON_SEPARATOR */.K),
  "TIME_FILTER_LABELS": () => (/* reexport */ constants/* TIME_FILTER_LABELS */.m_),
  "__hack__reexport__": () => (/* reexport */ components/* __hack__reexport__ */.M),
  "boxplotOperator": () => (/* reexport */ boxplotOperator/* boxplotOperator */.F),
  "columnChoices": () => (/* reexport */ columnChoices/* default */.Z),
  "contributionOperator": () => (/* reexport */ contributionOperator/* contributionOperator */.I),
  "dndColumnsControl": () => (/* reexport */ dndControls/* dndColumnsControl */.lC),
  "dndEntity": () => (/* reexport */ dndControls/* dndEntity */.zo),
  "emitFilterControl": () => (/* reexport */ emitFilterControl/* emitFilterControl */.a),
  "expandControlConfig": () => (/* reexport */ expandControlConfig/* expandControlConfig */.q),
  "expandControlType": () => (/* reexport */ expandControlConfig/* expandControlType */.$),
  "formatSelectOptions": () => (/* reexport */ selectOptions/* formatSelectOptions */.m),
  "formatSelectOptionsForRange": () => (/* reexport */ selectOptions/* formatSelectOptionsForRange */.B),
  "getColorFormatters": () => (/* reexport */ getColorFormatters/* getColorFormatters */.ni),
  "getColorFunction": () => (/* reexport */ getColorFormatters/* getColorFunction */.E2),
  "getMetricOffsetsMap": () => (/* reexport */ getMetricOffsetsMap/* getMetricOffsetsMap */.O),
  "getOpacity": () => (/* reexport */ getColorFormatters/* getOpacity */.Km),
  "isValidTimeCompare": () => (/* reexport */ isValidTimeCompare/* isValidTimeCompare */.A),
  "legacySortBy": () => (/* reexport */ legacySortBy/* legacySortBy */.A),
  "mainMetric": () => (/* reexport */ mainMetric),
  "pivotOperator": () => (/* reexport */ pivotOperator/* pivotOperator */.H),
  "prophetOperator": () => (/* reexport */ prophetOperator/* prophetOperator */.D),
  "resampleOperator": () => (/* reexport */ resampleOperator/* resampleOperator */.X),
  "rgbToRgba": () => (/* reexport */ getColorFormatters/* rgbToRgba */.wB),
  "rollingWindowOperator": () => (/* reexport */ rollingWindowOperator/* rollingWindowOperator */.V),
  "round": () => (/* reexport */ getColorFormatters/* round */.NM),
  "sections": () => (/* binding */ sections),
  "sharedControlComponents": () => (/* reexport */ components/* default */.Z),
  "sharedControls": () => (/* reexport */ shared_controls/* sharedControls */.Hq),
  "sortOperator": () => (/* reexport */ sortOperator/* sortOperator */.C),
  "timeCompareOperator": () => (/* reexport */ timeCompareOperator/* timeCompareOperator */.N),
  "timeComparePivotOperator": () => (/* reexport */ timeComparePivotOperator/* timeComparePivotOperator */.O)
});

// NAMESPACE OBJECT: ./node_modules/@superset-ui/chart-controls/esm/sections/index.js
var esm_sections_namespaceObject = {};
__webpack_require__.r(esm_sections_namespaceObject);
__webpack_require__.d(esm_sections_namespaceObject, {
  "FORECAST_DEFAULT_DATA": () => (FORECAST_DEFAULT_DATA),
  "advancedAnalyticsControls": () => (advancedAnalyticsControls),
  "annotationLayers": () => (annotationLayers),
  "annotations": () => (annotations),
  "annotationsAndLayersControls": () => (annotationsAndLayersControls),
  "colorScheme": () => (colorScheme),
  "datasourceAndVizType": () => (datasourceAndVizType),
  "forecastIntervalControls": () => (forecastIntervalControls),
  "legacyRegularTime": () => (legacyRegularTime),
  "legacyTimeseriesTime": () => (legacyTimeseriesTime),
  "titleControls": () => (titleControls)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/chart-controls/esm/sections/sections.js
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

// A few standard controls sections that are used internally.
// Not recommended for use in third-party plugins.
const baseTimeSection = {
  label: (0,TranslatorSingleton.t)('Time'),
  expanded: true,
  description: (0,TranslatorSingleton.t)('Time related form attributes')
};
const legacyTimeseriesTime = { ...baseTimeSection,
  controlSetRows: [['granularity'], ['druid_time_origin'], ['granularity_sqla'], ['time_grain_sqla'], ['time_range']]
};
const legacyRegularTime = { ...baseTimeSection,
  controlSetRows: [['granularity_sqla'], ['time_range']]
};
const datasourceAndVizType = {
  label: (0,TranslatorSingleton.t)('Datasource & Chart Type'),
  expanded: true,
  controlSetRows: [['datasource'], ['viz_type'], [{
    name: 'slice_id',
    config: {
      type: 'HiddenControl',
      label: (0,TranslatorSingleton.t)('Chart ID'),
      hidden: true,
      description: (0,TranslatorSingleton.t)('The id of the active chart')
    }
  }, {
    name: 'cache_timeout',
    config: {
      type: 'HiddenControl',
      label: (0,TranslatorSingleton.t)('Cache Timeout (seconds)'),
      hidden: true,
      description: (0,TranslatorSingleton.t)('The number of seconds before expiring the cache')
    }
  }, {
    name: 'url_params',
    config: {
      type: 'HiddenControl',
      label: (0,TranslatorSingleton.t)('URL Parameters'),
      hidden: true,
      description: (0,TranslatorSingleton.t)('Extra url parameters for use in Jinja templated queries')
    }
  }, {
    name: 'custom_params',
    config: {
      type: 'HiddenControl',
      label: (0,TranslatorSingleton.t)('Extra Parameters'),
      hidden: true,
      description: (0,TranslatorSingleton.t)('Extra parameters that any plugins can choose to set for use in Jinja templated queries')
    }
  }, {
    name: 'time_range_endpoints',
    config: {
      type: 'HiddenControl',
      label: (0,TranslatorSingleton.t)('Time range endpoints'),
      hidden: true,
      description: (0,TranslatorSingleton.t)('Time range endpoints (SIP-15)')
    }
  }]]
};
const colorScheme = {
  label: (0,TranslatorSingleton.t)('Color Scheme'),
  controlSetRows: [['color_scheme']]
};
const annotations = {
  label: (0,TranslatorSingleton.t)('Annotations and Layers'),
  tabOverride: 'data',
  expanded: true,
  controlSetRows: [[{
    name: 'annotation_layers',
    config: {
      type: 'AnnotationLayerControl',
      label: '',
      default: [],
      description: (0,TranslatorSingleton.t)('Annotation Layers'),
      renderTrigger: true
    }
  }]]
};
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/types/AdvancedAnalytics.js
var AdvancedAnalytics = __webpack_require__(30005);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/utils/selectOptions.js
var selectOptions = __webpack_require__(24610);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/chart-controls/esm/sections/advancedAnalytics.js
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




const advancedAnalyticsControls = {
  label: (0,TranslatorSingleton.t)('Advanced analytics'),
  tabOverride: 'data',
  description: (0,TranslatorSingleton.t)('This section contains options ' + 'that allow for advanced analytical post processing ' + 'of query results'),
  controlSetRows: [[(0,emotion_react_browser_esm.jsx)("h1", {
    className: "section-header"
  }, (0,TranslatorSingleton.t)('Rolling window'))], [{
    name: 'rolling_type',
    config: {
      type: 'SelectControl',
      label: (0,TranslatorSingleton.t)('Rolling function'),
      default: null,
      choices: [[null, (0,TranslatorSingleton.t)('None')]].concat((0,selectOptions/* formatSelectOptions */.m)(Object.values(AdvancedAnalytics/* RollingType */.su))),
      description: (0,TranslatorSingleton.t)('Defines a rolling window function to apply, works along ' + 'with the [Periods] text box')
    }
  }], [{
    name: 'rolling_periods',
    config: {
      type: 'TextControl',
      label: (0,TranslatorSingleton.t)('Periods'),
      isInt: true,
      description: (0,TranslatorSingleton.t)('Defines the size of the rolling window function, ' + 'relative to the time granularity selected'),
      visibility: ({
        controls
      }) => {
        var _controls$rolling_typ;

        return Boolean(controls == null ? void 0 : (_controls$rolling_typ = controls.rolling_type) == null ? void 0 : _controls$rolling_typ.value) && controls.rolling_type.value !== AdvancedAnalytics/* RollingType.Cumsum */.su.Cumsum;
      }
    }
  }], [{
    name: 'min_periods',
    config: {
      type: 'TextControl',
      label: (0,TranslatorSingleton.t)('Min periods'),
      isInt: true,
      description: (0,TranslatorSingleton.t)('The minimum number of rolling periods required to show ' + 'a value. For instance if you do a cumulative sum on 7 days ' + 'you may want your "Min Period" to be 7, so that all data points ' + 'shown are the total of 7 periods. This will hide the "ramp up" ' + 'taking place over the first 7 periods'),
      visibility: ({
        controls
      }) => {
        var _controls$rolling_typ2;

        return Boolean(controls == null ? void 0 : (_controls$rolling_typ2 = controls.rolling_type) == null ? void 0 : _controls$rolling_typ2.value) && controls.rolling_type.value !== AdvancedAnalytics/* RollingType.Cumsum */.su.Cumsum;
      }
    }
  }], [(0,emotion_react_browser_esm.jsx)("h1", {
    className: "section-header"
  }, (0,TranslatorSingleton.t)('Time comparison'))], [{
    name: 'time_compare',
    config: {
      type: 'SelectControl',
      multi: true,
      freeForm: true,
      label: (0,TranslatorSingleton.t)('Time shift'),
      choices: (0,selectOptions/* formatSelectOptions */.m)(['1 day ago', '1 week ago', '28 days ago', '30 days ago', '52 weeks ago', '1 year ago', '104 weeks ago', '2 years ago']),
      description: (0,TranslatorSingleton.t)('Overlay one or more timeseries from a ' + 'relative time period. Expects relative time deltas ' + 'in natural language (example:  24 hours, 7 days, ' + '52 weeks, 365 days). Free text is supported.')
    }
  }], [{
    name: 'comparison_type',
    config: {
      type: 'SelectControl',
      label: (0,TranslatorSingleton.t)('Calculation type'),
      default: 'values',
      choices: [[AdvancedAnalytics/* ComparisionType.Values */.pF.Values, 'Actual values'], [AdvancedAnalytics/* ComparisionType.Difference */.pF.Difference, 'Difference'], [AdvancedAnalytics/* ComparisionType.Percentage */.pF.Percentage, 'Percentage change'], [AdvancedAnalytics/* ComparisionType.Ratio */.pF.Ratio, 'Ratio']],
      description: (0,TranslatorSingleton.t)('How to display time shifts: as individual lines; as the ' + 'difference between the main time series and each time shift; ' + 'as the percentage change; or as the ratio between series and time shifts.')
    }
  }], [(0,emotion_react_browser_esm.jsx)("h1", {
    className: "section-header"
  }, (0,TranslatorSingleton.t)('Resample'))], [{
    name: 'resample_rule',
    config: {
      type: 'SelectControl',
      freeForm: true,
      label: (0,TranslatorSingleton.t)('Rule'),
      default: null,
      choices: [['1T', '1 minutely frequency'], ['1H', '1 hourly frequency'], ['1D', '1 calendar day frequency'], ['7D', '7 calendar day frequency'], ['1MS', '1 month start frequency'], ['1M', '1 month end frequency'], ['1AS', '1 year start frequency'], ['1A', '1 year end frequency']],
      description: (0,TranslatorSingleton.t)('Pandas resample rule')
    }
  }], [{
    name: 'resample_method',
    config: {
      type: 'SelectControl',
      freeForm: true,
      label: (0,TranslatorSingleton.t)('Fill method'),
      default: null,
      choices: [['asfreq', 'Null imputation'], ['zerofill', 'Zero imputation'], ['ffill', 'Forward values'], ['bfill', 'Backward values'], ['median', 'Median values'], ['mean', 'Mean values'], ['sum', 'Sum values']],
      description: (0,TranslatorSingleton.t)('Pandas resample method')
    }
  }]]
};
;// CONCATENATED MODULE: ./node_modules/@superset-ui/chart-controls/esm/sections/annotationsAndLayers.js
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

const annotationLayers = [];
const annotationsAndLayersControls = {
  label: (0,TranslatorSingleton.t)('Annotations and Layers'),
  expanded: false,
  controlSetRows: [[{
    name: 'annotation_layers',
    config: {
      type: 'AnnotationLayerControl',
      label: '',
      default: annotationLayers,
      description: (0,TranslatorSingleton.t)('Annotation Layers')
    }
  }]]
};
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/validator/legacyValidateInteger.js
var legacyValidateInteger = __webpack_require__(12788);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/validator/legacyValidateNumber.js
var legacyValidateNumber = __webpack_require__(59377);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/chart-controls/esm/sections/forecastInterval.js
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

const FORECAST_DEFAULT_DATA = {
  forecastEnabled: false,
  forecastInterval: 0.8,
  forecastPeriods: 10,
  forecastSeasonalityDaily: null,
  forecastSeasonalityWeekly: null,
  forecastSeasonalityYearly: null
};
const forecastIntervalControls = {
  label: (0,TranslatorSingleton.t)('Predictive Analytics'),
  expanded: false,
  controlSetRows: [[{
    name: 'forecastEnabled',
    config: {
      type: 'CheckboxControl',
      label: (0,TranslatorSingleton.t)('Enable forecast'),
      renderTrigger: false,
      default: FORECAST_DEFAULT_DATA.forecastEnabled,
      description: (0,TranslatorSingleton.t)('Enable forecasting')
    }
  }], [{
    name: 'forecastPeriods',
    config: {
      type: 'TextControl',
      label: (0,TranslatorSingleton.t)('Forecast periods'),
      validators: [legacyValidateInteger/* default */.Z],
      default: FORECAST_DEFAULT_DATA.forecastPeriods,
      description: (0,TranslatorSingleton.t)('How many periods into the future do we want to predict')
    }
  }], [{
    name: 'forecastInterval',
    config: {
      type: 'TextControl',
      label: (0,TranslatorSingleton.t)('Confidence interval'),
      validators: [legacyValidateNumber/* default */.Z],
      default: FORECAST_DEFAULT_DATA.forecastInterval,
      description: (0,TranslatorSingleton.t)('Width of the confidence interval. Should be between 0 and 1')
    }
  }, {
    name: 'forecastSeasonalityYearly',
    config: {
      type: 'SelectControl',
      freeForm: true,
      label: 'Yearly seasonality',
      choices: [[null, 'default'], [true, 'Yes'], [false, 'No']],
      default: FORECAST_DEFAULT_DATA.forecastSeasonalityYearly,
      description: (0,TranslatorSingleton.t)('Should yearly seasonality be applied. An integer value will specify Fourier order of seasonality.')
    }
  }], [{
    name: 'forecastSeasonalityWeekly',
    config: {
      type: 'SelectControl',
      freeForm: true,
      label: 'Weekly seasonality',
      choices: [[null, 'default'], [true, 'Yes'], [false, 'No']],
      default: FORECAST_DEFAULT_DATA.forecastSeasonalityWeekly,
      description: (0,TranslatorSingleton.t)('Should weekly seasonality be applied. An integer value will specify Fourier order of seasonality.')
    }
  }, {
    name: 'forecastSeasonalityDaily',
    config: {
      type: 'SelectControl',
      freeForm: true,
      label: 'Daily seasonality',
      choices: [[null, 'default'], [true, 'Yes'], [false, 'No']],
      default: FORECAST_DEFAULT_DATA.forecastSeasonalityDaily,
      description: (0,TranslatorSingleton.t)('Should daily seasonality be applied. An integer value will specify Fourier order of seasonality.')
    }
  }]]
};
;// CONCATENATED MODULE: ./node_modules/@superset-ui/chart-controls/esm/sections/chartTitle.js
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




const TITLE_MARGIN_OPTIONS = [15, 30, 50, 75, 100, 125, 150, 200];
const TITLE_POSITION_OPTIONS = ['Left', 'Top'];
const titleControls = {
  label: (0,TranslatorSingleton.t)('Chart Title'),
  tabOverride: 'customize',
  expanded: true,
  controlSetRows: [[(0,emotion_react_browser_esm.jsx)("h1", {
    className: "section-header"
  }, (0,TranslatorSingleton.t)('X Axis'))], [{
    name: 'x_axis_title',
    config: {
      type: 'TextControl',
      label: (0,TranslatorSingleton.t)('X Axis Title'),
      renderTrigger: true,
      default: '',
      description: (0,TranslatorSingleton.t)('Changing this control takes effect instantly')
    }
  }], [{
    name: 'x_axis_title_margin',
    config: {
      type: 'SelectControl',
      freeForm: true,
      clearable: true,
      label: (0,TranslatorSingleton.t)('X AXIS TITLE BOTTOM MARGIN'),
      renderTrigger: true,
      default: TITLE_MARGIN_OPTIONS[0],
      choices: (0,selectOptions/* formatSelectOptions */.m)(TITLE_MARGIN_OPTIONS),
      description: (0,TranslatorSingleton.t)('Changing this control takes effect instantly')
    }
  }], [(0,emotion_react_browser_esm.jsx)("h1", {
    className: "section-header"
  }, (0,TranslatorSingleton.t)('Y Axis'))], [{
    name: 'y_axis_title',
    config: {
      type: 'TextControl',
      label: (0,TranslatorSingleton.t)('Y Axis Title'),
      renderTrigger: true,
      default: '',
      description: (0,TranslatorSingleton.t)('Changing this control takes effect instantly')
    }
  }], [{
    name: 'y_axis_title_margin',
    config: {
      type: 'SelectControl',
      freeForm: true,
      clearable: true,
      label: (0,TranslatorSingleton.t)('Y AXIS TITLE MARGIN'),
      renderTrigger: true,
      default: TITLE_MARGIN_OPTIONS[0],
      choices: (0,selectOptions/* formatSelectOptions */.m)(TITLE_MARGIN_OPTIONS),
      description: (0,TranslatorSingleton.t)('Changing this control takes effect instantly')
    }
  }], [{
    name: 'y_axis_title_position',
    config: {
      type: 'SelectControl',
      freeForm: true,
      clearable: false,
      label: (0,TranslatorSingleton.t)('Y AXIS TITLE POSITION'),
      renderTrigger: true,
      default: TITLE_POSITION_OPTIONS[0],
      choices: (0,selectOptions/* formatSelectOptions */.m)(TITLE_POSITION_OPTIONS),
      description: (0,TranslatorSingleton.t)('Changing this control takes effect instantly')
    }
  }]]
};
;// CONCATENATED MODULE: ./node_modules/@superset-ui/chart-controls/esm/sections/index.js
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





// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/utils/D3Formatting.js
var D3Formatting = __webpack_require__(67774);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/utils/expandControlConfig.js
var expandControlConfig = __webpack_require__(80848);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/utils/getColorFormatters.js
var getColorFormatters = __webpack_require__(31841);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/chart-controls/esm/utils/mainMetric.js
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
function mainMetric(savedMetrics) {
  // Using 'count' as default metric if it exists, otherwise using whatever one shows up first
  let metric;

  if (savedMetrics && savedMetrics.length > 0) {
    savedMetrics.forEach(m => {
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
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/utils/columnChoices.js
var columnChoices = __webpack_require__(87581);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/chart-controls/esm/utils/index.js
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






// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/constants.js
var constants = __webpack_require__(14785);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/operators/rollingWindowOperator.js
var rollingWindowOperator = __webpack_require__(11941);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/operators/timeCompareOperator.js
var timeCompareOperator = __webpack_require__(87463);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/operators/timeComparePivotOperator.js
var timeComparePivotOperator = __webpack_require__(24115);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/operators/sortOperator.js
var sortOperator = __webpack_require__(22535);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/operators/pivotOperator.js
var pivotOperator = __webpack_require__(19751);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/operators/resampleOperator.js
var resampleOperator = __webpack_require__(43806);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/operators/contributionOperator.js
var contributionOperator = __webpack_require__(43276);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/operators/prophetOperator.js
var prophetOperator = __webpack_require__(43467);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/operators/boxplotOperator.js
var boxplotOperator = __webpack_require__(54994);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/operators/utils/getMetricOffsetsMap.js
var getMetricOffsetsMap = __webpack_require__(3821);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/operators/utils/isValidTimeCompare.js
var isValidTimeCompare = __webpack_require__(67254);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/operators/utils/constants.js
var utils_constants = __webpack_require__(33690);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/chart-controls/esm/operators/utils/index.js
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */



;// CONCATENATED MODULE: ./node_modules/@superset-ui/chart-controls/esm/operators/index.js
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */










// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/components/InfoTooltipWithTrigger.js
var InfoTooltipWithTrigger = __webpack_require__(88186);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/components/ColumnOption.js
var ColumnOption = __webpack_require__(82204);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/components/ColumnTypeLabel.js
var ColumnTypeLabel = __webpack_require__(81126);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/components/MetricOption.js
var MetricOption = __webpack_require__(5483);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/shared-controls/index.js
var shared_controls = __webpack_require__(28500);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/shared-controls/dndControls.js
var dndControls = __webpack_require__(91479);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/shared-controls/components/index.js + 11 modules
var components = __webpack_require__(22016);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/shared-controls/legacySortBy.js
var legacySortBy = __webpack_require__(34096);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/shared-controls/emitFilterControl.js
var emitFilterControl = __webpack_require__(36906);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/types.js + 1 modules
var types = __webpack_require__(98736);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/chart-controls/esm/index.js
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



 // can't do `export * as sections from './sections'`, babel-transformer will fail

const sections = esm_sections_namespaceObject;



 // React control components








/***/ }),

/***/ 54994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ boxplotOperator)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86852);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95669);
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */

const PERCENTILE_REGEX = /(\d+)\/(\d+) percentiles/;
const boxplotOperator = (formData, queryObject) => {
  const {
    groupby,
    whiskerOptions
  } = formData;

  if (whiskerOptions) {
    let whiskerType;
    let percentiles;
    const percentileMatch = PERCENTILE_REGEX.exec(whiskerOptions);

    if (whiskerOptions === 'Tukey' || !whiskerOptions) {
      whiskerType = 'tukey';
    } else if (whiskerOptions === 'Min/max (no outliers)') {
      whiskerType = 'min/max';
    } else if (percentileMatch) {
      whiskerType = 'percentile';
      percentiles = [parseInt(percentileMatch[1], 10), parseInt(percentileMatch[2], 10)];
    } else {
      throw new Error(`Unsupported whisker type: ${whiskerOptions}`);
    }

    return {
      operation: 'boxplot',
      options: {
        whisker_type: whiskerType,
        percentiles,
        groupby: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(groupby),
        metrics: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(queryObject.metrics).map(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)
      }
    };
  }

  return undefined;
};

/***/ }),

/***/ 43276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ contributionOperator)
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */
const contributionOperator = (formData, queryObject) => {
  if (formData.contributionMode) {
    return {
      operation: 'contribution',
      options: {
        orientation: formData.contributionMode
      }
    };
  }

  return undefined;
};

/***/ }),

/***/ 19751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ pivotOperator)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86852);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95669);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67254);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33690);
/* harmony import */ var _timeComparePivotOperator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24115);
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */



const pivotOperator = (formData, queryObject) => {
  const metricLabels = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(queryObject.metrics).map(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

  if (queryObject.is_timeseries && metricLabels.length) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .isValidTimeCompare */ .A)(formData, queryObject)) {
      return (0,_timeComparePivotOperator__WEBPACK_IMPORTED_MODULE_3__/* .timeComparePivotOperator */ .O)(formData, queryObject);
    }

    return {
      operation: 'pivot',
      options: {
        index: [_utils__WEBPACK_IMPORTED_MODULE_4__/* .TIME_COLUMN */ .a],
        columns: queryObject.columns || [],
        // Create 'dummy' mean aggregates to assign cell values in pivot table
        // use the 'mean' aggregates to avoid drop NaN. PR: https://github.com/apache-superset/superset-ui/pull/1231
        aggregates: Object.fromEntries(metricLabels.map(metric => [metric, {
          operator: 'mean'
        }])),
        drop_missing_columns: false
      }
    };
  }

  return undefined;
};

/***/ }),

/***/ 43467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ prophetOperator)
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */
const prophetOperator = (formData, queryObject) => {
  if (formData.forecastEnabled) {
    return {
      operation: 'prophet',
      options: {
        time_grain: formData.time_grain_sqla,
        periods: parseInt(formData.forecastPeriods, 10),
        confidence_interval: parseFloat(formData.forecastInterval),
        yearly_seasonality: formData.forecastSeasonalityYearly,
        weekly_seasonality: formData.forecastSeasonalityWeekly,
        daily_seasonality: formData.forecastSeasonalityDaily
      }
    };
  }

  return undefined;
};

/***/ }),

/***/ 43806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ resampleOperator)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33690);
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */

const resampleOperator = (formData, queryObject) => {
  const resampleZeroFill = formData.resample_method === 'zerofill';
  const resampleMethod = resampleZeroFill ? 'asfreq' : formData.resample_method;
  const resampleRule = formData.resample_rule;

  if (resampleMethod && resampleRule) {
    return {
      operation: 'resample',
      options: {
        method: resampleMethod,
        rule: resampleRule,
        fill_value: resampleZeroFill ? 0 : null,
        time_column: _utils__WEBPACK_IMPORTED_MODULE_0__/* .TIME_COLUMN */ .a
      }
    };
  }

  return undefined;
};

/***/ }),

/***/ 11941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ rollingWindowOperator)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30005);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86852);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56040);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67254);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3821);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33690);
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */


const rollingWindowOperator = (formData, queryObject) => {
  let columns;

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .isValidTimeCompare */ .A)(formData, queryObject)) {
    const metricsMap = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .getMetricOffsetsMap */ .O)(formData, queryObject);
    const comparisonType = formData.comparison_type;

    if (comparisonType === _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .ComparisionType.Values */ .pF.Values) {
      // time compare type: actual values
      columns = [...Array.from(metricsMap.values()), ...Array.from(metricsMap.keys())];
    } else {
      // time compare type: difference / percentage / ratio
      columns = Array.from(metricsMap.entries()).map(([offset, metric]) => [comparisonType, metric, offset].join(_utils__WEBPACK_IMPORTED_MODULE_3__/* .TIME_COMPARISON_SEPARATOR */ .K));
    }
  } else {
    columns = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(queryObject.metrics).map(metric => {
      if (typeof metric === 'string') {
        return metric;
      }

      return metric.label;
    });
  }

  const columnsMap = Object.fromEntries(columns.map(col => [col, col]));

  if (formData.rolling_type === _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .RollingType.Cumsum */ .su.Cumsum) {
    return {
      operation: 'cum',
      options: {
        operator: 'sum',
        columns: columnsMap,
        is_pivot_df: true
      }
    };
  }

  if ([_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .RollingType.Sum */ .su.Sum, _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .RollingType.Mean */ .su.Mean, _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .RollingType.Std */ .su.Std].includes(formData.rolling_type)) {
    return {
      operation: 'rolling',
      options: {
        rolling_type: formData.rolling_type,
        window: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(formData.rolling_periods, 1),
        min_periods: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(formData.min_periods, 0),
        columns: columnsMap,
        is_pivot_df: true
      }
    };
  }

  return undefined;
};

/***/ }),

/***/ 22535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ sortOperator)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30005);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33690);
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */


const sortOperator = (formData, queryObject) => {
  if (queryObject.is_timeseries && Object.values(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* .RollingType */ .su).includes(formData.rolling_type)) {
    return {
      operation: 'sort',
      options: {
        columns: {
          [_utils__WEBPACK_IMPORTED_MODULE_1__/* .TIME_COLUMN */ .a]: true
        }
      }
    };
  }

  return undefined;
};

/***/ }),

/***/ 87463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ timeCompareOperator)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30005);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3821);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67254);
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */


const timeCompareOperator = (formData, queryObject) => {
  const comparisonType = formData.comparison_type;
  const metricOffsetMap = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getMetricOffsetsMap */ .O)(formData, queryObject);

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .isValidTimeCompare */ .A)(formData, queryObject) && comparisonType !== _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .ComparisionType.Values */ .pF.Values) {
    return {
      operation: 'compare',
      options: {
        source_columns: Array.from(metricOffsetMap.values()),
        compare_columns: Array.from(metricOffsetMap.keys()),
        compare_type: comparisonType,
        drop_original_columns: true
      }
    };
  }

  return undefined;
};

/***/ }),

/***/ 24115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ timeComparePivotOperator)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30005);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3821);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67254);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33690);
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */


const timeComparePivotOperator = (formData, queryObject) => {
  const comparisonType = formData.comparison_type;
  const metricOffsetMap = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getMetricOffsetsMap */ .O)(formData, queryObject);

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .isValidTimeCompare */ .A)(formData, queryObject)) {
    const valuesAgg = Object.fromEntries([...metricOffsetMap.values(), ...metricOffsetMap.keys()].map(metric => [metric, // use the 'mean' aggregates to avoid drop NaN
    {
      operator: 'mean'
    }]));
    const changeAgg = Object.fromEntries([...metricOffsetMap.entries()].map(([offset, metric]) => [comparisonType, metric, offset].join(_utils__WEBPACK_IMPORTED_MODULE_2__/* .TIME_COMPARISON_SEPARATOR */ .K)) // use the 'mean' aggregates to avoid drop NaN
    .map(metric => [metric, {
      operator: 'mean'
    }]));
    return {
      operation: 'pivot',
      options: {
        index: ['__timestamp'],
        columns: queryObject.columns || [],
        aggregates: comparisonType === _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .ComparisionType.Values */ .pF.Values ? valuesAgg : changeAgg,
        drop_missing_columns: false
      }
    };
  }

  return undefined;
};

/***/ }),

/***/ 33690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ TIME_COMPARISON_SEPARATOR),
/* harmony export */   "a": () => (/* binding */ TIME_COLUMN)
/* harmony export */ });
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */
const TIME_COMPARISON_SEPARATOR = '__';
const TIME_COLUMN = '__timestamp';

/***/ }),

/***/ 3821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ getMetricOffsetsMap)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86852);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95669);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33690);
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */


const getMetricOffsetsMap = (formData, queryObject) => {
  /*
    return metric offset-label and metric-label hashmap, for instance:
    {
      "SUM(value)__1 year ago": "SUM(value)",
      "SUM(value)__2 year ago": "SUM(value)"
    }
  */
  const queryMetrics = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(queryObject.metrics);
  const timeOffsets = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(formData.time_compare);
  const metricLabels = queryMetrics.map(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  const metricOffsetMap = new Map();
  metricLabels.forEach(metric => {
    timeOffsets.forEach(offset => {
      metricOffsetMap.set([metric, offset].join(_constants__WEBPACK_IMPORTED_MODULE_2__/* .TIME_COMPARISON_SEPARATOR */ .K), metric);
    });
  });
  return metricOffsetMap;
};

/***/ }),

/***/ 67254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ isValidTimeCompare)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30005);
/* harmony import */ var _getMetricOffsetsMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3821);
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
 * specific language governing permissions and limitationsxw
 * under the License.
 */


const isValidTimeCompare = (formData, queryObject) => {
  const comparisonType = formData.comparison_type;
  const metricOffsetMap = (0,_getMetricOffsetsMap__WEBPACK_IMPORTED_MODULE_0__/* .getMetricOffsetsMap */ .O)(formData, queryObject);
  return Object.values(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .ComparisionType */ .pF).includes(comparisonType) && metricOffsetMap.size > 0;
};

/***/ }),

/***/ 36906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ emitFilterControl)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46415);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60650);
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

const enableCrossFilter = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* .isFeatureEnabled */ .c)(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__/* .FeatureFlag.DASHBOARD_CROSS_FILTERS */ .T.DASHBOARD_CROSS_FILTERS);
const emitFilterControl = enableCrossFilter ? [{
  name: 'emit_filter',
  config: {
    type: 'CheckboxControl',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__.t)('Emit dashboard cross filters'),
    default: false,
    renderTrigger: true,
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__.t)('Emit dashboard cross filters.')
  }
}] : [];

/***/ }),

/***/ 34096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ legacySortBy)
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

const legacySortBy = [['legacy_order_by'], [{
  name: 'order_desc',
  config: {
    type: 'CheckboxControl',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Sort descending'),
    default: true,
    description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Whether to sort descending or ascending. Takes effect only when "Sort by" is set')
  }
}]];

/***/ }),

/***/ 98736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O9": () => (/* binding */ COMPARATOR),
  "qU": () => (/* reexport */ types_namespaceObject.ControlComponentProps),
  "Tu": () => (/* reexport */ ControlForm.ControlFormItemSpec),
  "vD": () => (/* binding */ MULTIPLE_VALUE_COMPARATORS),
  "jb": () => (/* reexport */ esm.Metric)
});

// UNUSED EXPORTS: default

// NAMESPACE OBJECT: ./node_modules/@superset-ui/chart-controls/esm/shared-controls/components/types.js
var types_namespaceObject = {};
__webpack_require__.r(types_namespaceObject);

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/index.js + 42 modules
var esm = __webpack_require__(67017);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/components/ControlForm/index.js
var ControlForm = __webpack_require__(95504);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/chart-controls/esm/shared-controls/components/types.js

/**
 * Props passed to control components.
 *
 * Ref: superset-frontend/src/explore/components/Control.tsx
 */
;// CONCATENATED MODULE: ./node_modules/@superset-ui/chart-controls/esm/types.js


 // eslint-disable-next-line @typescript-eslint/no-explicit-any

// Ref:
//  - superset-frontend/src/explore/components/ConditionalFormattingControl.tsx
let COMPARATOR;

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

const MULTIPLE_VALUE_COMPARATORS = [COMPARATOR.BETWEEN, COMPARATOR.BETWEEN_OR_EQUAL, COMPARATOR.BETWEEN_OR_LEFT_EQUAL, COMPARATOR.BETWEEN_OR_RIGHT_EQUAL];
/* harmony default export */ const types = ({});

/***/ }),

/***/ 87581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ columnChoices)
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
 * Convert Datasource columns to column choices
 */
function columnChoices(datasource) {
  return (datasource == null ? void 0 : datasource.columns.map(col => [col.column_name, col.verbose_name || col.column_name]).sort((opt1, opt2) => opt1[1].toLowerCase() > opt2[1].toLowerCase() ? 1 : -1)) || [];
}

/***/ }),

/***/ 31841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NM": () => (/* binding */ round),
/* harmony export */   "wB": () => (/* binding */ rgbToRgba),
/* harmony export */   "Km": () => (/* binding */ getOpacity),
/* harmony export */   "E2": () => (/* binding */ getColorFunction),
/* harmony export */   "ni": () => (/* binding */ getColorFormatters)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98736);
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

const round = (num, precision = 0) => Number(`${Math.round(Number(`${num}e+${precision}`))}e-${precision}`);
const rgbToRgba = (rgb, alpha) => rgb.replace(/rgb/i, 'rgba').replace(/\)/i, `,${alpha})`);
const MIN_OPACITY_BOUNDED = 0.05;
const MIN_OPACITY_UNBOUNDED = 0;
const MAX_OPACITY = 1;
const getOpacity = (value, cutoffPoint, extremeValue, minOpacity = MIN_OPACITY_BOUNDED, maxOpacity = MAX_OPACITY) => extremeValue === cutoffPoint ? maxOpacity : round(Math.abs((maxOpacity - minOpacity) / (extremeValue - cutoffPoint) * (value - cutoffPoint)) + minOpacity, 2);
const getColorFunction = ({
  operator,
  targetValue,
  targetValueLeft,
  targetValueRight,
  colorScheme
}, columnValues) => {
  let minOpacity = MIN_OPACITY_BOUNDED;
  const maxOpacity = MAX_OPACITY;
  let comparatorFunction;

  if (operator === undefined || colorScheme === undefined) {
    return () => undefined;
  }

  if (_types__WEBPACK_IMPORTED_MODULE_0__/* .MULTIPLE_VALUE_COMPARATORS.includes */ .vD.includes(operator) && (targetValueLeft === undefined || targetValueRight === undefined)) {
    return () => undefined;
  }

  if (operator !== _types__WEBPACK_IMPORTED_MODULE_0__/* .COMPARATOR.NONE */ .O9.NONE && !_types__WEBPACK_IMPORTED_MODULE_0__/* .MULTIPLE_VALUE_COMPARATORS.includes */ .vD.includes(operator) && targetValue === undefined) {
    return () => undefined;
  }

  switch (operator) {
    case _types__WEBPACK_IMPORTED_MODULE_0__/* .COMPARATOR.NONE */ .O9.NONE:
      minOpacity = MIN_OPACITY_UNBOUNDED;

      comparatorFunction = (value, allValues) => {
        const cutoffValue = Math.min(...allValues);
        const extremeValue = Math.max(...allValues);
        return value >= cutoffValue && value <= extremeValue ? {
          cutoffValue,
          extremeValue
        } : false;
      };

      break;

    case _types__WEBPACK_IMPORTED_MODULE_0__/* .COMPARATOR.GREATER_THAN */ .O9.GREATER_THAN:
      comparatorFunction = (value, allValues) => value > targetValue ? {
        cutoffValue: targetValue,
        extremeValue: Math.max(...allValues)
      } : false;

      break;

    case _types__WEBPACK_IMPORTED_MODULE_0__/* .COMPARATOR.LESS_THAN */ .O9.LESS_THAN:
      comparatorFunction = (value, allValues) => value < targetValue ? {
        cutoffValue: targetValue,
        extremeValue: Math.min(...allValues)
      } : false;

      break;

    case _types__WEBPACK_IMPORTED_MODULE_0__/* .COMPARATOR.GREATER_OR_EQUAL */ .O9.GREATER_OR_EQUAL:
      comparatorFunction = (value, allValues) => value >= targetValue ? {
        cutoffValue: targetValue,
        extremeValue: Math.max(...allValues)
      } : false;

      break;

    case _types__WEBPACK_IMPORTED_MODULE_0__/* .COMPARATOR.LESS_OR_EQUAL */ .O9.LESS_OR_EQUAL:
      comparatorFunction = (value, allValues) => value <= targetValue ? {
        cutoffValue: targetValue,
        extremeValue: Math.min(...allValues)
      } : false;

      break;

    case _types__WEBPACK_IMPORTED_MODULE_0__/* .COMPARATOR.EQUAL */ .O9.EQUAL:
      comparatorFunction = value => value === targetValue ? {
        cutoffValue: targetValue,
        extremeValue: targetValue
      } : false;

      break;

    case _types__WEBPACK_IMPORTED_MODULE_0__/* .COMPARATOR.NOT_EQUAL */ .O9.NOT_EQUAL:
      comparatorFunction = (value, allValues) => {
        if (value === targetValue) {
          return false;
        }

        const max = Math.max(...allValues);
        const min = Math.min(...allValues);
        return {
          cutoffValue: targetValue,
          extremeValue: Math.abs(targetValue - min) > Math.abs(max - targetValue) ? min : max
        };
      };

      break;

    case _types__WEBPACK_IMPORTED_MODULE_0__/* .COMPARATOR.BETWEEN */ .O9.BETWEEN:
      comparatorFunction = value => value > targetValueLeft && value < targetValueRight ? {
        cutoffValue: targetValueLeft,
        extremeValue: targetValueRight
      } : false;

      break;

    case _types__WEBPACK_IMPORTED_MODULE_0__/* .COMPARATOR.BETWEEN_OR_EQUAL */ .O9.BETWEEN_OR_EQUAL:
      comparatorFunction = value => value >= targetValueLeft && value <= targetValueRight ? {
        cutoffValue: targetValueLeft,
        extremeValue: targetValueRight
      } : false;

      break;

    case _types__WEBPACK_IMPORTED_MODULE_0__/* .COMPARATOR.BETWEEN_OR_LEFT_EQUAL */ .O9.BETWEEN_OR_LEFT_EQUAL:
      comparatorFunction = value => value >= targetValueLeft && value < targetValueRight ? {
        cutoffValue: targetValueLeft,
        extremeValue: targetValueRight
      } : false;

      break;

    case _types__WEBPACK_IMPORTED_MODULE_0__/* .COMPARATOR.BETWEEN_OR_RIGHT_EQUAL */ .O9.BETWEEN_OR_RIGHT_EQUAL:
      comparatorFunction = value => value > targetValueLeft && value <= targetValueRight ? {
        cutoffValue: targetValueLeft,
        extremeValue: targetValueRight
      } : false;

      break;

    default:
      comparatorFunction = () => false;

      break;
  }

  return value => {
    const compareResult = comparatorFunction(value, columnValues);
    if (compareResult === false) return undefined;
    const {
      cutoffValue,
      extremeValue
    } = compareResult;
    return rgbToRgba(colorScheme, getOpacity(value, cutoffValue, extremeValue, minOpacity, maxOpacity));
  };
};
const getColorFormatters = (columnConfig, data) => (columnConfig == null ? void 0 : columnConfig.reduce((acc, config) => {
  if ((config == null ? void 0 : config.column) !== undefined && ((config == null ? void 0 : config.operator) === _types__WEBPACK_IMPORTED_MODULE_0__/* .COMPARATOR.NONE */ .O9.NONE || (config == null ? void 0 : config.operator) !== undefined && (_types__WEBPACK_IMPORTED_MODULE_0__/* .MULTIPLE_VALUE_COMPARATORS.includes */ .vD.includes(config == null ? void 0 : config.operator) ? (config == null ? void 0 : config.targetValueLeft) !== undefined && (config == null ? void 0 : config.targetValueRight) !== undefined : (config == null ? void 0 : config.targetValue) !== undefined))) {
    acc.push({
      column: config == null ? void 0 : config.column,
      getColorFromValue: getColorFunction(config, data.map(row => row[config.column]))
    });
  }

  return acc;
}, [])) ?? [];

/***/ })

}]);