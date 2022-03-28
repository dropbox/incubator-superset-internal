"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[3375],{

/***/ 93011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11965);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60650);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68135);
/* harmony import */ var _superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88186);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58593);
/* harmony import */ var src_components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49238);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38097);
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
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  validationErrors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  renderTrigger: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  rightNode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  leftNode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  hovered: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  tooltipOnClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  warning: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  danger: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string) };


const defaultProps = {
  validationErrors: [],
  renderTrigger: false,
  hovered: false,
  name: undefined };var _ref =  true ? { name: "8wgs83", styles: "margin-bottom:0;position:relative" } : 0;


class ControlHeader extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  renderOptionalIcons() {
    if (this.props.hovered) {
      return (
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          css: (theme) => _emotion_react__WEBPACK_IMPORTED_MODULE_5__.css`
            position: absolute;
            top: 50%;
            right: 0;
            padding-left: ${theme.gridUnit}px;
            transform: translate(100%, -50%);
            white-space: nowrap;
          ` },

        this.props.description &&
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", null,
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_6__/* .InfoTooltipWithTrigger */ .V, {
          label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__.t)('description'),
          tooltip: this.props.description,
          placement: "top",
          onClick: this.props.tooltipOnClick }),
        ' '),


        this.props.renderTrigger &&
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", null,
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_6__/* .InfoTooltipWithTrigger */ .V, {
          label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__.t)('bolt'),
          tooltip: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__.t)('Changing this control takes effect instantly'),
          placement: "top",
          icon: "bolt" }),
        ' ')));




    }
    return null;
  }

  render() {
    if (!this.props.label) {
      return null;
    }
    const labelClass =
    this.props.validationErrors.length > 0 ? 'text-danger' : '';

    const { theme } = this.props;

    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", { className: "ControlHeader" },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", { className: "pull-left" },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components_Form__WEBPACK_IMPORTED_MODULE_3__/* .FormLabel */ .lX, {
        css: _ref },




      this.props.leftNode && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", null, this.props.leftNode),
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        role: "button",
        tabIndex: 0,
        onClick: this.props.onClick,
        className: labelClass,
        style: { cursor: this.props.onClick ? 'pointer' : '' } },

      this.props.label),
      ' ',
      this.props.warning &&
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", null,
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Tooltip */ .u, {
        id: "error-tooltip",
        placement: "top",
        title: this.props.warning },

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"].AlertSolid */ .Z.AlertSolid, {
        iconColor: theme.colors.alert.base,
        iconSize: "s" })),

      ' '),


      this.props.danger &&
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", null,
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Tooltip */ .u, {
        id: "error-tooltip",
        placement: "top",
        title: this.props.danger },

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"].ErrorSolid */ .Z.ErrorSolid, {
        iconColor: theme.colors.error.base,
        iconSize: "s" })),

      ' '),


      this.props.validationErrors.length > 0 &&
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", null,
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Tooltip */ .u, {
        id: "error-tooltip",
        placement: "top",
        title: this.props.validationErrors.join(' ') },

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"].ErrorSolid */ .Z.ErrorSolid, {
        iconColor: theme.colors.error.base,
        iconSize: "s" })),

      ' '),


      this.renderOptionalIcons())),


      this.props.rightNode &&
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", { className: "pull-right" }, this.props.rightNode),

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", { className: "clearfix" })));


  }}


ControlHeader.propTypes = propTypes;
ControlHeader.defaultProps = defaultProps;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__.b)(ControlHeader));

/***/ }),

/***/ 62276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ RangePicker),
/* harmony export */   "M": () => (/* binding */ DatePicker)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11448);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37840);
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


const AntdRangePicker = antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"].RangePicker */ .Z.RangePicker;
const RangePicker = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .iK)(AntdRangePicker)`
  border-radius: ${({ theme }) => theme.gridUnit}px;
`;
const DatePicker = antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;

/***/ }),

/***/ 76697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55241);
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

// Eventually Popover can be wrapped and customized in this file
// for now we're just redirecting
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 73375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ DateFilterLabel)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
;// CONCATENATED MODULE: ./src/explore/components/controls/DateFilterControl/utils/dateFilterUtils.ts
const SEPARATOR = ' : ';
const buildTimeRangeString = (since, until) => `${since}${SEPARATOR}${until}`;
const formatDateEndpoint = (dttm, isStart) => dttm.replace('T00:00:00', '') || (isStart ? '-∞' : '∞');
const formatTimeRange = (timeRange, endpoints) => {
  const splitDateRange = timeRange.split(SEPARATOR);
  if (splitDateRange.length === 1)
  return timeRange;
  const formattedEndpoints = (endpoints || ['unknown', 'unknown']).map((endpoint) => endpoint === 'inclusive' ? '≤' : '<');
  return `${formatDateEndpoint(splitDateRange[0], true)} ${formattedEndpoints[0]} col ${formattedEndpoints[1]} ${formatDateEndpoint(splitDateRange[1])}`;
};
;// CONCATENATED MODULE: ./src/explore/components/controls/DateFilterControl/types.ts
const PreviousCalendarWeek = 'previous calendar week';
const PreviousCalendarMonth = 'previous calendar month';
const PreviousCalendarYear = 'previous calendar year';
;// CONCATENATED MODULE: ./src/explore/components/controls/DateFilterControl/utils/constants.ts
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



const FRAME_OPTIONS = [
{ value: 'Common', label: (0,TranslatorSingleton.t)('Last') },
{ value: 'Calendar', label: (0,TranslatorSingleton.t)('Previous') },
{ value: 'Custom', label: (0,TranslatorSingleton.t)('Custom') },
{ value: 'Advanced', label: (0,TranslatorSingleton.t)('Advanced') },
{ value: 'No filter', label: (0,TranslatorSingleton.t)('No filter') }];

const COMMON_RANGE_OPTIONS = [
{ value: 'Last day', label: (0,TranslatorSingleton.t)('last day') },
{ value: 'Last week', label: (0,TranslatorSingleton.t)('last week') },
{ value: 'Last month', label: (0,TranslatorSingleton.t)('last month') },
{ value: 'Last quarter', label: (0,TranslatorSingleton.t)('last quarter') },
{ value: 'Last year', label: (0,TranslatorSingleton.t)('last year') }];

const COMMON_RANGE_VALUES_SET = new Set(COMMON_RANGE_OPTIONS.map(({ value }) => value));
const CALENDAR_RANGE_OPTIONS = [
{ value: PreviousCalendarWeek, label: (0,TranslatorSingleton.t)('previous calendar week') },
{ value: PreviousCalendarMonth, label: (0,TranslatorSingleton.t)('previous calendar month') },
{ value: PreviousCalendarYear, label: (0,TranslatorSingleton.t)('previous calendar year') }];

const CALENDAR_RANGE_VALUES_SET = new Set(CALENDAR_RANGE_OPTIONS.map(({ value }) => value));
const GRAIN_OPTIONS = [
{ value: 'second', label: (rel) => `${(0,TranslatorSingleton.t)('Seconds')} ${rel}` },
{ value: 'minute', label: (rel) => `${(0,TranslatorSingleton.t)('Minutes')} ${rel}` },
{ value: 'hour', label: (rel) => `${(0,TranslatorSingleton.t)('Hours')} ${rel}` },
{ value: 'day', label: (rel) => `${(0,TranslatorSingleton.t)('Days')} ${rel}` },
{ value: 'week', label: (rel) => `${(0,TranslatorSingleton.t)('Weeks')} ${rel}` },
{ value: 'month', label: (rel) => `${(0,TranslatorSingleton.t)('Months')} ${rel}` },
{ value: 'quarter', label: (rel) => `${(0,TranslatorSingleton.t)('Quarters')} ${rel}` },
{ value: 'year', label: (rel) => `${(0,TranslatorSingleton.t)('Years')} ${rel}` }];

const SINCE_GRAIN_OPTIONS = GRAIN_OPTIONS.map((item) => ({
  value: item.value,
  label: item.label((0,TranslatorSingleton.t)('Before')) }));

const UNTIL_GRAIN_OPTIONS = GRAIN_OPTIONS.map((item) => ({
  value: item.value,
  label: item.label((0,TranslatorSingleton.t)('After')) }));

const SINCE_MODE_OPTIONS = [
{ value: 'specific', label: (0,TranslatorSingleton.t)('Specific Date/Time') },
{ value: 'relative', label: (0,TranslatorSingleton.t)('Relative Date/Time') },
{ value: 'now', label: (0,TranslatorSingleton.t)('Now') },
{ value: 'today', label: (0,TranslatorSingleton.t)('Midnight') }];

const UNTIL_MODE_OPTIONS = SINCE_MODE_OPTIONS.slice();
const COMMON_RANGE_SET = new Set([
'Last day',
'Last week',
'Last month',
'Last quarter',
'Last year']);

const CALENDAR_RANGE_SET = new Set([
PreviousCalendarWeek,
PreviousCalendarMonth,
PreviousCalendarYear]);

const MOMENT_FORMAT = 'YYYY-MM-DD[T]HH:mm:ss';
const SEVEN_DAYS_AGO = moment_default()().
utc().
startOf('day').
subtract(7, 'days').
format(MOMENT_FORMAT);
const MIDNIGHT = moment_default()().utc().startOf('day').format(MOMENT_FORMAT);
;// CONCATENATED MODULE: ./src/explore/components/controls/DateFilterControl/utils/dateParser.ts
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
 * RegExp to test a string for a full ISO 8601 Date
 * Does not do any sort of date validation, only checks if the string is according to the ISO 8601 spec.
 *  YYYY-MM-DDThh:mm:ss
 *  YYYY-MM-DDThh:mm:ssTZD
 *  YYYY-MM-DDThh:mm:ss.sTZD
 * @see: https://www.w3.org/TR/NOTE-datetime
 */
const iso8601 = String.raw`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`;
const datetimeConstant = String.raw`TODAY|NOW`;
const grainValue = String.raw`[+-]?[1-9][0-9]*`;
const grain = String.raw`YEAR|QUARTER|MONTH|WEEK|DAY|HOUR|MINUTE|SECOND`;
const CUSTOM_RANGE_EXPRESSION = RegExp(String.raw`^DATEADD\(DATETIME\("(${iso8601}|${datetimeConstant})"\),\s(${grainValue}),\s(${grain})\)$`, 'i');
const ISO8601_AND_CONSTANT = RegExp(String.raw`^${iso8601}$|^${datetimeConstant}$`, 'i');
const DATETIME_CONSTANT = ['now', 'today'];
const defaultCustomRange = {
  sinceDatetime: SEVEN_DAYS_AGO,
  sinceMode: 'relative',
  sinceGrain: 'day',
  sinceGrainValue: -7,
  untilDatetime: MIDNIGHT,
  untilMode: 'specific',
  untilGrain: 'day',
  untilGrainValue: 7,
  anchorMode: 'now',
  anchorValue: 'now' };

const SPECIFIC_MODE = ['specific', 'today', 'now'];
const dttmToMoment = (dttm) => {
  if (dttm === 'now') {
    return moment_default()().utc().startOf('second');
  }
  if (dttm === 'today') {
    return moment_default()().utc().startOf('day');
  }
  return moment_default()(dttm);
};
const dttmToString = (dttm) => dttmToMoment(dttm).format(MOMENT_FORMAT);
const customTimeRangeDecode = (timeRange) => {
  const splitDateRange = timeRange.split(SEPARATOR);
  if (splitDateRange.length === 2) {
    const [since, until] = splitDateRange;
    // specific : specific
    if (ISO8601_AND_CONSTANT.test(since) && ISO8601_AND_CONSTANT.test(until)) {
      const sinceMode = DATETIME_CONSTANT.includes(since) ?
      since :
      'specific';
      const untilMode = DATETIME_CONSTANT.includes(until) ?
      until :
      'specific';
      return {
        customRange: {
          ...defaultCustomRange,
          sinceDatetime: since,
          untilDatetime: until,
          sinceMode,
          untilMode },

        matchedFlag: true };

    }
    // relative : specific
    const sinceCapturedGroup = since.match(CUSTOM_RANGE_EXPRESSION);
    if (sinceCapturedGroup &&
    ISO8601_AND_CONSTANT.test(until) &&
    since.includes(until)) {
      const [dttm, grainValue, grain] = sinceCapturedGroup.slice(1);
      const untilMode = DATETIME_CONSTANT.includes(until) ?
      until :
      'specific';
      return {
        customRange: {
          ...defaultCustomRange,
          sinceGrain: grain,
          sinceGrainValue: parseInt(grainValue, 10),
          sinceDatetime: dttm,
          untilDatetime: dttm,
          sinceMode: 'relative',
          untilMode },

        matchedFlag: true };

    }
    // specific : relative
    const untilCapturedGroup = until.match(CUSTOM_RANGE_EXPRESSION);
    if (ISO8601_AND_CONSTANT.test(since) &&
    untilCapturedGroup &&
    until.includes(since)) {
      const [dttm, grainValue, grain] = [...untilCapturedGroup.slice(1)];
      const sinceMode = DATETIME_CONSTANT.includes(since) ?
      since :
      'specific';
      return {
        customRange: {
          ...defaultCustomRange,
          untilGrain: grain,
          untilGrainValue: parseInt(grainValue, 10),
          sinceDatetime: dttm,
          untilDatetime: dttm,
          untilMode: 'relative',
          sinceMode },

        matchedFlag: true };

    }
    // relative : relative
    if (sinceCapturedGroup && untilCapturedGroup) {
      const [sinceDttm, sinceGrainValue, sinceGrain] = [
      ...sinceCapturedGroup.slice(1)];

      const [untileDttm, untilGrainValue, untilGrain] = [
      ...untilCapturedGroup.slice(1)];

      if (sinceDttm === untileDttm) {
        return {
          customRange: {
            ...defaultCustomRange,
            sinceGrain: sinceGrain,
            sinceGrainValue: parseInt(sinceGrainValue, 10),
            sinceDatetime: sinceDttm,
            untilGrain: untilGrain,
            untilGrainValue: parseInt(untilGrainValue, 10),
            untilDatetime: untileDttm,
            anchorValue: sinceDttm,
            sinceMode: 'relative',
            untilMode: 'relative',
            anchorMode: sinceDttm === 'now' ? 'now' : 'specific' },

          matchedFlag: true };

      }
    }
  }
  return {
    customRange: defaultCustomRange,
    matchedFlag: false };

};
const customTimeRangeEncode = (customRange) => {
  const { sinceDatetime, sinceMode, sinceGrain, sinceGrainValue, untilDatetime, untilMode, untilGrain, untilGrainValue, anchorValue } = { ...customRange };
  // specific : specific
  if (SPECIFIC_MODE.includes(sinceMode) && SPECIFIC_MODE.includes(untilMode)) {
    const since = sinceMode === 'specific' ? dttmToString(sinceDatetime) : sinceMode;
    const until = untilMode === 'specific' ? dttmToString(untilDatetime) : untilMode;
    return `${since} : ${until}`;
  }
  // specific : relative
  if (SPECIFIC_MODE.includes(sinceMode) && untilMode === 'relative') {
    const since = sinceMode === 'specific' ? dttmToString(sinceDatetime) : sinceMode;
    const until = `DATEADD(DATETIME("${since}"), ${untilGrainValue}, ${untilGrain})`;
    return `${since} : ${until}`;
  }
  // relative : specific
  if (sinceMode === 'relative' && SPECIFIC_MODE.includes(untilMode)) {
    const until = untilMode === 'specific' ? dttmToString(untilDatetime) : untilMode;
    const since = `DATEADD(DATETIME("${until}"), ${-Math.abs(sinceGrainValue)}, ${sinceGrain})`;
    return `${since} : ${until}`;
  }
  // relative : relative
  const since = `DATEADD(DATETIME("${anchorValue}"), ${-Math.abs(sinceGrainValue)}, ${sinceGrain})`;
  const until = `DATEADD(DATETIME("${anchorValue}"), ${untilGrainValue}, ${untilGrain})`;
  return `${since} : ${until}`;
};
;// CONCATENATED MODULE: ./src/explore/components/controls/DateFilterControl/utils/index.ts
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



// EXTERNAL MODULE: ./src/utils/getClientErrorObject.ts
var getClientErrorObject = __webpack_require__(98286);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/explore/components/ControlHeader.jsx
var ControlHeader = __webpack_require__(93011);
// EXTERNAL MODULE: ./src/components/Label/index.tsx
var Label = __webpack_require__(37921);
// EXTERNAL MODULE: ./src/components/Popover/index.tsx
var Popover = __webpack_require__(76697);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var components = __webpack_require__(82191);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/components/index.ts + 1 modules
var src_components = __webpack_require__(33346);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./src/explore/constants.ts
var constants = __webpack_require__(69856);
// EXTERNAL MODULE: ./src/explore/exploreUtils/index.js
var exploreUtils = __webpack_require__(12515);
// EXTERNAL MODULE: ./src/constants.ts
var src_constants = __webpack_require__(27600);
// EXTERNAL MODULE: ./src/utils/testUtils.ts
var testUtils = __webpack_require__(53350);
// EXTERNAL MODULE: ./src/components/Radio/index.tsx
var Radio = __webpack_require__(87183);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/explore/components/controls/DateFilterControl/components/CommonFrame.tsx
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




function CommonFrame(props) {
  let commonRange = 'Last week';
  if (COMMON_RANGE_SET.has(props.value)) {
    commonRange = props.value;
  } else
  {
    props.onChange(commonRange);
  }
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "section-title" }, (0,TranslatorSingleton.t)('Configure Time Range: Last...')),
  (0,emotion_react_browser_esm.jsx)(Radio/* Radio.Group */.Y.Group, { value: commonRange, onChange: (e) => props.onChange(e.target.value) },
  COMMON_RANGE_OPTIONS.map(({ value, label }) => (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { key: value, value: value, className: "vertical-radio" },
  label))));



}
;// CONCATENATED MODULE: ./src/explore/components/controls/DateFilterControl/components/CalendarFrame.tsx
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





function CalendarFrame({ onChange, value }) {
  (0,react.useEffect)(() => {
    if (!CALENDAR_RANGE_SET.has(value)) {
      onChange(PreviousCalendarWeek);
    }
  }, [onChange, value]);
  if (!CALENDAR_RANGE_SET.has(value)) {
    return null;
  }
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "section-title" },
  (0,TranslatorSingleton.t)('Configure Time Range: Previous...')),

  (0,emotion_react_browser_esm.jsx)(Radio/* Radio.Group */.Y.Group, { value: value, onChange: (e) => onChange(e.target.value) },
  CALENDAR_RANGE_OPTIONS.map(({ value, label }) => (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { key: value, value: value, className: "vertical-radio" },
  label))));



}
// EXTERNAL MODULE: ./node_modules/lodash/isInteger.js
var isInteger = __webpack_require__(93754);
var isInteger_default = /*#__PURE__*/__webpack_require__.n(isInteger);
// EXTERNAL MODULE: ./src/components/DatePicker/index.tsx
var DatePicker = __webpack_require__(62276);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/components/InfoTooltipWithTrigger.js
var InfoTooltipWithTrigger = __webpack_require__(88186);
;// CONCATENATED MODULE: ./src/explore/components/controls/DateFilterControl/components/CustomFrame.tsx
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









function CustomFrame(props) {
  const { customRange, matchedFlag } = customTimeRangeDecode(props.value);
  if (!matchedFlag) {
    props.onChange(customTimeRangeEncode(customRange));
  }
  const { sinceDatetime, sinceMode, sinceGrain, sinceGrainValue, untilDatetime, untilMode, untilGrain, untilGrainValue, anchorValue, anchorMode } = { ...customRange };
  function onChange(control, value) {
    props.onChange(customTimeRangeEncode({
      ...customRange,
      [control]: value }));

  }
  function onGrainValue(control, value) {
    // only positive values in grainValue controls
    if (isInteger_default()(value) && value > 0) {
      props.onChange(customTimeRangeEncode({
        ...customRange,
        [control]: value }));

    }
  }
  function onAnchorMode(option) {
    const radioValue = option.target.value;
    if (radioValue === 'now') {
      props.onChange(customTimeRangeEncode({
        ...customRange,
        anchorValue: 'now',
        anchorMode: radioValue }));

    } else
    {
      props.onChange(customTimeRangeEncode({
        ...customRange,
        anchorValue: MIDNIGHT,
        anchorMode: radioValue }));

    }
  }
  return (0,emotion_react_browser_esm.jsx)("div", null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "section-title" }, (0,TranslatorSingleton.t)('Configure custom time range')),
  (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, { gutter: 24 },
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { span: 12 },
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('START (INCLUSIVE)'), ' ',
  (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, { tooltip: (0,TranslatorSingleton.t)('Start date included in time range'), placement: "right" })),

  (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('START (INCLUSIVE)'), options: SINCE_MODE_OPTIONS, value: sinceMode, onChange: (value) => onChange('sinceMode', value) }),
  sinceMode === 'specific' && (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, null,
  (0,emotion_react_browser_esm.jsx)(DatePicker/* DatePicker */.M, { showTime: true, defaultValue: dttmToMoment(sinceDatetime), onChange: (datetime) => onChange('sinceDatetime', datetime.format(MOMENT_FORMAT)), allowClear: false })),

  sinceMode === 'relative' && (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, { gutter: 8 },
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { span: 11 },

  (0,emotion_react_browser_esm.jsx)(components/* InputNumber */.Rn, { placeholder: (0,TranslatorSingleton.t)('Relative quantity'), value: Math.abs(sinceGrainValue), min: 1, defaultValue: 1, onChange: (value) => onGrainValue('sinceGrainValue', value || 1), onStep: (value) => onGrainValue('sinceGrainValue', value || 1) })),

  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { span: 13 },
  (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Relative period'), options: SINCE_GRAIN_OPTIONS, value: sinceGrain, onChange: (value) => onChange('sinceGrain', value) })))),



  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { span: 12 },
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('END (EXCLUSIVE)'), ' ',
  (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, { tooltip: (0,TranslatorSingleton.t)('End date excluded from time range'), placement: "right" })),

  (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('END (EXCLUSIVE)'), options: UNTIL_MODE_OPTIONS, value: untilMode, onChange: (value) => onChange('untilMode', value) }),
  untilMode === 'specific' && (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, null,
  (0,emotion_react_browser_esm.jsx)(DatePicker/* DatePicker */.M, { showTime: true, defaultValue: dttmToMoment(untilDatetime), onChange: (datetime) => onChange('untilDatetime', datetime.format(MOMENT_FORMAT)), allowClear: false })),

  untilMode === 'relative' && (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, { gutter: 8 },
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { span: 11 },
  (0,emotion_react_browser_esm.jsx)(components/* InputNumber */.Rn, { placeholder: (0,TranslatorSingleton.t)('Relative quantity'), value: untilGrainValue, min: 1, defaultValue: 1, onChange: (value) => onGrainValue('untilGrainValue', value || 1), onStep: (value) => onGrainValue('untilGrainValue', value || 1) })),

  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { span: 13 },
  (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Relative period'), options: UNTIL_GRAIN_OPTIONS, value: untilGrain, onChange: (value) => onChange('untilGrain', value) }))))),




  sinceMode === 'relative' && untilMode === 'relative' && (0,emotion_react_browser_esm.jsx)("div", { className: "control-anchor-to" },
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('Anchor to')),
  (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, { align: "middle" },
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, null,
  (0,emotion_react_browser_esm.jsx)(Radio/* Radio.Group */.Y.Group, { onChange: onAnchorMode, defaultValue: "now", value: anchorMode },
  (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { key: "now", value: "now" },
  (0,TranslatorSingleton.t)('NOW')),

  (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { key: "specific", value: "specific" },
  (0,TranslatorSingleton.t)('Date/Time')))),



  anchorMode !== 'now' && (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, null,
  (0,emotion_react_browser_esm.jsx)(DatePicker/* DatePicker */.M, { showTime: true, defaultValue: dttmToMoment(anchorValue), onChange: (datetime) => onChange('anchorValue', datetime.format(MOMENT_FORMAT)), allowClear: false, className: "control-anchor-to-datetime" })))));




}
;// CONCATENATED MODULE: ./src/explore/components/controls/DateFilterControl/components/DateFunctionTooltip.tsx
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




const TIME_PICKER_HELPER = (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
(0,emotion_react_browser_esm.jsx)("div", null,
(0,emotion_react_browser_esm.jsx)("h3", null, "DATETIME"),
(0,emotion_react_browser_esm.jsx)("p", null, (0,TranslatorSingleton.t)('Return to specific datetime.')),
(0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Syntax')),
(0,emotion_react_browser_esm.jsx)("pre", null,
(0,emotion_react_browser_esm.jsx)("code", null, "datetime([string])")),

(0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Example')),
(0,emotion_react_browser_esm.jsx)("pre", null,
(0,emotion_react_browser_esm.jsx)("code", null, `datetime("2020-03-01 12:00:00")
datetime("now")
datetime("last year")`))),


(0,emotion_react_browser_esm.jsx)("div", null,
(0,emotion_react_browser_esm.jsx)("h3", null, "DATEADD"),
(0,emotion_react_browser_esm.jsx)("p", null, (0,TranslatorSingleton.t)('Moves the given set of dates by a specified interval.')),
(0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Syntax')),
(0,emotion_react_browser_esm.jsx)("pre", null,
(0,emotion_react_browser_esm.jsx)("code", null, `dateadd([datetime], [integer], [dateunit])
dateunit = (year | quarter | month | week | day | hour | minute | second)`)),

(0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Example')),
(0,emotion_react_browser_esm.jsx)("pre", null,
(0,emotion_react_browser_esm.jsx)("code", null, `dateadd(datetime("today"), -13, day)
dateadd(datetime("2020-03-01"), 2, day)`))),


(0,emotion_react_browser_esm.jsx)("div", null,
(0,emotion_react_browser_esm.jsx)("h3", null, "DATETRUNC"),
(0,emotion_react_browser_esm.jsx)("p", null,
(0,TranslatorSingleton.t)('Truncates the specified date to the accuracy specified by the date unit.')),

(0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Syntax')),
(0,emotion_react_browser_esm.jsx)("pre", null,
(0,emotion_react_browser_esm.jsx)("code", null, `datetrunc([datetime], [dateunit])
dateunit = (year | month | week)`)),

(0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Example')),
(0,emotion_react_browser_esm.jsx)("pre", null,
(0,emotion_react_browser_esm.jsx)("code", null, `datetrunc(datetime("2020-03-01"), week)
datetrunc(datetime("2020-03-01"), month)`))),


(0,emotion_react_browser_esm.jsx)("div", null,
(0,emotion_react_browser_esm.jsx)("h3", null, "LASTDAY"),
(0,emotion_react_browser_esm.jsx)("p", null, (0,TranslatorSingleton.t)('Get the last date by the date unit.')),
(0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Syntax')),
(0,emotion_react_browser_esm.jsx)("pre", null,
(0,emotion_react_browser_esm.jsx)("code", null, `lastday([datetime], [dateunit])
dateunit = (year | month | week)`)),

(0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Example')),
(0,emotion_react_browser_esm.jsx)("pre", null,
(0,emotion_react_browser_esm.jsx)("code", null, "lastday(datetime(\"today\"), month)"))),


(0,emotion_react_browser_esm.jsx)("div", null,
(0,emotion_react_browser_esm.jsx)("h3", null, "HOLIDAY"),
(0,emotion_react_browser_esm.jsx)("p", null, (0,TranslatorSingleton.t)('Get the specify date for the holiday')),
(0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Syntax')),
(0,emotion_react_browser_esm.jsx)("pre", null,
(0,emotion_react_browser_esm.jsx)("code", null, `holiday([string])
holiday([holiday string], [datetime])
holiday([holiday string], [datetime], [country name])`)),

(0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Example')),
(0,emotion_react_browser_esm.jsx)("pre", null,
(0,emotion_react_browser_esm.jsx)("code", null, `holiday("new year")
holiday("christmas", datetime("2019"))
holiday("christmas", dateadd(datetime("2019"), 1, year))
holiday("christmas", datetime("2 years ago"))
holiday("Easter Monday", datetime("2019"), "UK")`))));



const StyledTooltip = (props) => {
  const theme = (0,style/* useTheme */.Fg)();
  return (0,emotion_react_browser_esm.jsx)(emotion_react_browser_esm.ClassNames, null,
  ({ css }) => (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, extends_default()({ overlayClassName: css`
            .ant-tooltip-content {
              min-width: ${theme.gridUnit * 125}px;
              max-height: 410px;
              overflow-y: scroll;

              .ant-tooltip-inner {
                max-width: ${theme.gridUnit * 125}px;
                h3 {
                  font-size: ${theme.typography.sizes.m}px;
                  font-weight: ${theme.typography.weights.bold};
                }
                h4 {
                  font-size: ${theme.typography.sizes.m}px;
                  font-weight: ${theme.typography.weights.bold};
                }
                pre {
                  border: none;
                  text-align: left;
                  word-break: break-word;
                  font-size: ${theme.typography.sizes.s}px;
                }
              }
            }
          ` }, props)));

};
function DateFunctionTooltip(props) {
  return (0,emotion_react_browser_esm.jsx)(StyledTooltip, extends_default()({ title: TIME_PICKER_HELPER }, props));
}
;// CONCATENATED MODULE: ./src/explore/components/controls/DateFilterControl/components/AdvancedFrame.tsx
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






function AdvancedFrame(props) {
  const advancedRange = getAdvancedRange(props.value || '');
  const [since, until] = advancedRange.split(SEPARATOR);
  if (advancedRange !== props.value) {
    props.onChange(getAdvancedRange(props.value || ''));
  }
  function getAdvancedRange(value) {
    if (value.includes(SEPARATOR)) {
      return value;
    }
    if (value.startsWith('Last')) {
      return [value, ''].join(SEPARATOR);
    }
    if (value.startsWith('Next')) {
      return ['', value].join(SEPARATOR);
    }
    return SEPARATOR;
  }
  function onChange(control, value) {
    if (control === 'since') {
      props.onChange(`${value}${SEPARATOR}${until}`);
    } else
    {
      props.onChange(`${since}${SEPARATOR}${value}`);
    }
  }
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "section-title" },
  (0,TranslatorSingleton.t)('Configure Advanced Time Range '),
  (0,emotion_react_browser_esm.jsx)(DateFunctionTooltip, { placement: "rightBottom" },
  (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-info-circle text-muted" }))),


  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('START (INCLUSIVE)'), ' ',
  (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, { tooltip: (0,TranslatorSingleton.t)('Start date included in time range'), placement: "right" })),

  (0,emotion_react_browser_esm.jsx)(components/* Input */.II, { key: "since", value: since, onChange: (e) => onChange('since', e.target.value) }),
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('END (EXCLUSIVE)'), ' ',
  (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, { tooltip: (0,TranslatorSingleton.t)('End date excluded from time range'), placement: "right" })),

  (0,emotion_react_browser_esm.jsx)(components/* Input */.II, { key: "until", value: until, onChange: (e) => onChange('until', e.target.value) }));

}
;// CONCATENATED MODULE: ./src/explore/components/controls/DateFilterControl/components/index.ts
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




;// CONCATENATED MODULE: ./src/explore/components/controls/DateFilterControl/DateFilterLabel.tsx
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


















const guessFrame = (timeRange) => {
  if (COMMON_RANGE_VALUES_SET.has(timeRange)) {
    return 'Common';
  }
  if (CALENDAR_RANGE_VALUES_SET.has(timeRange)) {
    return 'Calendar';
  }
  if (timeRange === 'No filter') {
    return 'No filter';
  }
  if (customTimeRangeDecode(timeRange).matchedFlag) {
    return 'Custom';
  }
  return 'Advanced';
};
const fetchTimeRange = async (timeRange, endpoints) => {
  const query = rison_default().encode(timeRange);
  const endpoint = `/api/v1/time_range/?q=${query}`;
  try {var _response$json, _response$json$result, _response$json2, _response$json2$resul;
    const response = await SupersetClient/* default.get */.Z.get({ endpoint });
    const timeRangeString = buildTimeRangeString((response == null ? void 0 : (_response$json = response.json) == null ? void 0 : (_response$json$result = _response$json.result) == null ? void 0 : _response$json$result.since) || '', (response == null ? void 0 : (_response$json2 = response.json) == null ? void 0 : (_response$json2$resul = _response$json2.result) == null ? void 0 : _response$json2$resul.until) || '');
    return {
      value: formatTimeRange(timeRangeString, endpoints) };

  }
  catch (response) {
    const clientError = await (0,getClientErrorObject/* getClientErrorObject */.O)(response);
    return {
      error: clientError.message || clientError.error };

  }
};
const StyledPopover = (0,style/* styled */.iK)(Popover/* default */.Z)``;
const StyledRangeType = (0,style/* styled */.iK)(src_components/* Select */.P)`
  width: 272px;
`;
const ContentStyleWrapper = style/* styled.div */.iK.div`
  .ant-row {
    margin-top: 8px;
  }

  .ant-input-number {
    width: 100%;
  }

  .ant-picker {
    padding: 4px 17px 4px;
    border-radius: 4px;
    width: 100%;
  }

  .ant-divider-horizontal {
    margin: 16px 0;
  }

  .control-label {
    font-size: 11px;
    font-weight: 500;
    color: #b2b2b2;
    line-height: 16px;
    text-transform: uppercase;
    margin: 8px 0;
  }

  .vertical-radio {
    display: block;
    height: 40px;
    line-height: 40px;
  }

  .section-title {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .control-anchor-to {
    margin-top: 16px;
  }

  .control-anchor-to-datetime {
    width: 217px;
  }

  .footer {
    text-align: right;
  }
`;
const IconWrapper = style/* styled.span */.iK.span`
  span {
    margin-right: ${({ theme }) => 2 * theme.gridUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
  .error {
    color: ${({ theme }) => theme.colors.error.base};
  }
`;
const DATE_FILTER_CONTROL_TEST_ID = 'date-filter-control';
const getDateFilterControlTestId = (0,testUtils/* testWithId */.Q)(DATE_FILTER_CONTROL_TEST_ID);
function DateFilterLabel(props) {
  const { value = constants/* DEFAULT_TIME_RANGE */.X5, endpoints, onChange, type } = props;
  const [actualTimeRange, setActualTimeRange] = (0,react.useState)(value);
  const [show, setShow] = (0,react.useState)(false);
  const guessedFrame = (0,react.useMemo)(() => guessFrame(value), [value]);
  const [frame, setFrame] = (0,react.useState)(guessedFrame);
  const [lastFetchedTimeRange, setLastFetchedTimeRange] = (0,react.useState)(value);
  const [timeRangeValue, setTimeRangeValue] = (0,react.useState)(value);
  const [validTimeRange, setValidTimeRange] = (0,react.useState)(false);
  const [evalResponse, setEvalResponse] = (0,react.useState)(value);
  const [tooltipTitle, setTooltipTitle] = (0,react.useState)(value);
  (0,react.useEffect)(() => {
    fetchTimeRange(value, endpoints).then(({ value: actualRange, error }) => {
      if (error) {
        setEvalResponse(error || '');
        setValidTimeRange(false);
        setTooltipTitle(value || '');
      } else
      {
        /*
          HRT == human readable text
          ADR == actual datetime range
          +--------------+------+----------+--------+----------+-----------+
          |              | Last | Previous | Custom | Advanced | No Filter |
          +--------------+------+----------+--------+----------+-----------+
          | control pill | HRT  | HRT      | ADR    | ADR      |   HRT     |
          +--------------+------+----------+--------+----------+-----------+
          | tooltip      | ADR  | ADR      | HRT    | HRT      |   ADR     |
          +--------------+------+----------+--------+----------+-----------+
        */
        if (guessedFrame === 'Common' ||
        guessedFrame === 'Calendar' ||
        guessedFrame === 'No filter') {
          setActualTimeRange(value);
          setTooltipTitle(type === 'error' ?
          (0,TranslatorSingleton.t)('Default value is required') :
          actualRange || '');
        } else
        {
          setActualTimeRange(actualRange || '');
          setTooltipTitle(value || '');
        }
        setValidTimeRange(true);
      }
      setLastFetchedTimeRange(value);
    });
  }, [value]);
  (0,exploreUtils/* useDebouncedEffect */.bX)(() => {
    if (lastFetchedTimeRange !== timeRangeValue) {
      fetchTimeRange(timeRangeValue, endpoints).then(({ value: actualRange, error }) => {
        if (error) {
          setEvalResponse(error || '');
          setValidTimeRange(false);
        } else
        {
          setEvalResponse(actualRange || '');
          setValidTimeRange(true);
        }
        setLastFetchedTimeRange(timeRangeValue);
      });
    }
  }, src_constants/* SLOW_DEBOUNCE */.M$, [timeRangeValue]);
  function onSave() {
    onChange(timeRangeValue);
    setShow(false);
  }
  function onOpen() {
    setTimeRangeValue(value);
    setFrame(guessedFrame);
    setShow(true);
  }
  function onHide() {
    setTimeRangeValue(value);
    setFrame(guessedFrame);
    setShow(false);
  }
  const togglePopover = () => {
    if (show) {
      onHide();
    } else
    {
      setShow(true);
    }
  };
  function onChangeFrame(value) {
    if (value === 'No filter') {
      setTimeRangeValue('No filter');
    }
    setFrame(value);
  }
  const theme = (0,style/* useTheme */.Fg)();
  const overlayContent = (0,emotion_react_browser_esm.jsx)(ContentStyleWrapper, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('RANGE TYPE')),
  (0,emotion_react_browser_esm.jsx)(StyledRangeType, { ariaLabel: (0,TranslatorSingleton.t)('RANGE TYPE'), options: FRAME_OPTIONS, value: frame, onChange: onChangeFrame }),
  frame !== 'No filter' && (0,emotion_react_browser_esm.jsx)(components/* Divider */.iz, null),
  frame === 'Common' && (0,emotion_react_browser_esm.jsx)(CommonFrame, { value: timeRangeValue, onChange: setTimeRangeValue }),
  frame === 'Calendar' && (0,emotion_react_browser_esm.jsx)(CalendarFrame, { value: timeRangeValue, onChange: setTimeRangeValue }),
  frame === 'Advanced' && (0,emotion_react_browser_esm.jsx)(AdvancedFrame, { value: timeRangeValue, onChange: setTimeRangeValue }),
  frame === 'Custom' && (0,emotion_react_browser_esm.jsx)(CustomFrame, { value: timeRangeValue, onChange: setTimeRangeValue }),
  frame === 'No filter' && (0,emotion_react_browser_esm.jsx)("div", null),
  (0,emotion_react_browser_esm.jsx)(components/* Divider */.iz, null),
  (0,emotion_react_browser_esm.jsx)("div", null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "section-title" }, (0,TranslatorSingleton.t)('Actual time range')),
  validTimeRange && (0,emotion_react_browser_esm.jsx)("div", null, evalResponse),
  !validTimeRange && (0,emotion_react_browser_esm.jsx)(IconWrapper, { className: "warning" },
  (0,emotion_react_browser_esm.jsx)(Icons/* default.ErrorSolidSmall */.Z.ErrorSolidSmall, { iconColor: theme.colors.error.base }),
  (0,emotion_react_browser_esm.jsx)("span", { className: "text error" }, evalResponse))),


  (0,emotion_react_browser_esm.jsx)(components/* Divider */.iz, null),
  (0,emotion_react_browser_esm.jsx)("div", { className: "footer" },
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "secondary", cta: true, key: "cancel", onClick: onHide },
  (0,TranslatorSingleton.t)('CANCEL')),

  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, extends_default()({ buttonStyle: "primary", cta: true, disabled: !validTimeRange, key: "apply", onClick: onSave }, getDateFilterControlTestId('apply-button')),
  (0,TranslatorSingleton.t)('APPLY'))));



  const title = (0,emotion_react_browser_esm.jsx)(IconWrapper, null,
  (0,emotion_react_browser_esm.jsx)(Icons/* default.EditAlt */.Z.EditAlt, { iconColor: theme.colors.grayscale.base }),
  (0,emotion_react_browser_esm.jsx)("span", { className: "text" }, (0,TranslatorSingleton.t)('Edit time range')));

  const overlayStyle = {
    width: '600px' };

  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(ControlHeader/* default */.Z, props),
  (0,emotion_react_browser_esm.jsx)(StyledPopover, { placement: "right", trigger: "click", content: overlayContent, title: title, defaultVisible: show, visible: show, onVisibleChange: togglePopover, overlayStyle: overlayStyle },
  (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { placement: "top", title: tooltipTitle },
  (0,emotion_react_browser_esm.jsx)(Label/* default */.Z, { className: "pointer", onClick: onOpen },
  actualTimeRange))));




}
;// CONCATENATED MODULE: ./src/explore/components/controls/DateFilterControl/index.ts
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

/***/ 53350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ testWithId)
/* harmony export */ });
// Using bem standard
const testWithId = (prefix, idOnly = false) => (id) => {
  if (!id && prefix) {
    return idOnly ? prefix : { 'data-test': prefix };
  }
  if (id && !prefix) {
    return idOnly ? id : { 'data-test': id };
  }
  if (!id && !prefix) {
    console.warn('testWithId function has missed "prefix" and "id" params');
    return idOnly ? '' : { 'data-test': '' };
  }
  const newId = `${prefix}__${id}`;
  return idOnly ? newId : { 'data-test': newId };
};

/***/ })

}]);