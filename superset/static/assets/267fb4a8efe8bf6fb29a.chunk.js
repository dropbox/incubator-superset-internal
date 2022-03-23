"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[9502],{

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

/***/ 29848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ActionsBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37840);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58593);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38097);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11965);
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




const StyledActions = _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .styled.span */ .iK.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.primary.base};
      }
    }
  }
`;
const ActionWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .styled.span */ .iK.span`
  color: ${({ theme }) => theme.colors.grayscale.base};
`;
function ActionsBar({ actions }) {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledActions, { className: "actions" },
  actions.map((action, index) => {
    const ActionIcon = src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[action.icon];
    if (action.tooltip) {
      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__/* .Tooltip */ .u, { id: `${action.label}-tooltip`, title: action.tooltip, placement: action.placement, key: index },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionWrapper, { role: "button", tabIndex: 0, className: "action-button", onClick: action.onClick },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionIcon, null)));


    }
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionWrapper, { role: "button", tabIndex: 0, className: "action-button", onClick: action.onClick, key: index },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionIcon, null));

  }));

}

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

/***/ 63082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ alert_AlertList)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/api/v1/makeApi.js + 1 modules
var makeApi = __webpack_require__(85639);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/components/ListView/ActionsBar.tsx
var ActionsBar = __webpack_require__(29848);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/components/FacePile/index.tsx + 1 modules
var FacePile = __webpack_require__(34581);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./src/components/ListView/index.ts + 11 modules
var ListView = __webpack_require__(9678);
// EXTERNAL MODULE: ./src/components/Menu/SubMenu.tsx
var SubMenu = __webpack_require__(62753);
// EXTERNAL MODULE: ./src/components/Switch/index.tsx
var Switch = __webpack_require__(12441);
// EXTERNAL MODULE: ./src/constants.ts
var constants = __webpack_require__(27600);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/views/CRUD/alert/components/AlertStatusIcon.tsx
var AlertStatusIcon = __webpack_require__(46714);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/views/CRUD/alert/types.ts
var types = __webpack_require__(28745);
;// CONCATENATED MODULE: ./src/views/CRUD/alert/components/RecipientIcon.tsx
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





const StyledIcon = (theme) => emotion_react_browser_esm.css`
  color: ${theme.colors.grayscale.light1};
  margin-right: ${theme.gridUnit * 2}px;
`;
function RecipientIcon({ type }) {
  const recipientIconConfig = {
    icon: null,
    label: '' };

  switch (type) {
    case types/* RecipientIconName.email */.u.email:
      recipientIconConfig.icon = (0,emotion_react_browser_esm.jsx)(Icons/* default.Email */.Z.Email, { css: StyledIcon });
      recipientIconConfig.label = (0,TranslatorSingleton.t)(`${types/* RecipientIconName.email */.u.email}`);
      break;
    case types/* RecipientIconName.slack */.u.slack:
      recipientIconConfig.icon = (0,emotion_react_browser_esm.jsx)(Icons/* default.Slack */.Z.Slack, { css: StyledIcon });
      recipientIconConfig.label = (0,TranslatorSingleton.t)(`${types/* RecipientIconName.slack */.u.slack}`);
      break;
    default:
      recipientIconConfig.icon = null;
      recipientIconConfig.label = '';}

  return recipientIconConfig.icon ? (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: recipientIconConfig.label, placement: "bottom" },
  recipientIconConfig.icon) :
  null;
}
// EXTERNAL MODULE: ./src/components/ConfirmStatusChange/index.tsx
var ConfirmStatusChange = __webpack_require__(19259);
// EXTERNAL MODULE: ./src/components/DeleteModal/index.tsx
var DeleteModal = __webpack_require__(17198);
;// CONCATENATED MODULE: ./src/components/LastUpdated/index.tsx
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




const REFRESH_INTERVAL = 60000; // every minute
moment_default().updateLocale('en', {
  calendar: {
    lastDay: '[Yesterday at] LTS',
    sameDay: '[Today at] LTS',
    nextDay: '[Tomorrow at] LTS',
    lastWeek: '[last] dddd [at] LTS',
    nextWeek: 'dddd [at] LTS',
    sameElse: 'L' } });


const TextStyles = style/* styled.span */.iK.span`
  color: ${({ theme }) => theme.colors.grayscale.base};
`;
const Refresh = (0,style/* styled */.iK)(Icons/* default.Refresh */.Z.Refresh)`
  color: ${({ theme }) => theme.colors.primary.base};
  width: auto;
  height: ${({ theme }) => theme.gridUnit * 5}px;
  position: relative;
  top: ${({ theme }) => theme.gridUnit}px;
  left: ${({ theme }) => theme.gridUnit}px;
  cursor: pointer;
`;
const LastUpdated = ({ updatedAt, update }) => {
  const [timeSince, setTimeSince] = (0,react.useState)(moment_default()(updatedAt));
  (0,react.useEffect)(() => {
    setTimeSince(() => moment_default()(updatedAt));
    // update UI every minute in case day changes
    const interval = setInterval(() => {
      setTimeSince(() => moment_default()(updatedAt));
    }, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [updatedAt]);
  return (0,emotion_react_browser_esm.jsx)(TextStyles, null,
  (0,TranslatorSingleton.t)('Last Updated %s', timeSince.isValid() ? timeSince.calendar() : '--'),
  update && (0,emotion_react_browser_esm.jsx)(Refresh, { onClick: update }));

};
/* harmony default export */ const components_LastUpdated = (LastUpdated);
// EXTERNAL MODULE: ./src/views/CRUD/hooks.ts
var hooks = __webpack_require__(34858);
// EXTERNAL MODULE: ./src/views/CRUD/utils.tsx
var utils = __webpack_require__(40768);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./src/components/TimezoneSelector/index.tsx
var TimezoneSelector = __webpack_require__(98978);
// EXTERNAL MODULE: ./src/components/Radio/index.tsx
var Radio = __webpack_require__(87183);
// EXTERNAL MODULE: ./src/components/index.ts + 1 modules
var components = __webpack_require__(33346);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./src/explore/components/controls/TextAreaControl.jsx
var TextAreaControl = __webpack_require__(42878);
// EXTERNAL MODULE: ./src/views/CRUD/data/database/state.ts
var state = __webpack_require__(1483);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var common_components = __webpack_require__(82191);
// EXTERNAL MODULE: ./src/components/CronPicker/index.ts + 1 modules
var CronPicker = __webpack_require__(9433);
;// CONCATENATED MODULE: ./src/views/CRUD/alert/components/AlertReportCronScheduler.tsx
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






const AlertReportCronScheduler = ({ value, onChange }) => {
  const theme = (0,style/* useTheme */.Fg)();
  const inputRef = (0,react.useRef)(null);
  const [scheduleFormat, setScheduleFormat] = (0,react.useState)('picker');
  const customSetValue = (0,react.useCallback)((newValue) => {var _inputRef$current;
    onChange(newValue);
    (_inputRef$current = inputRef.current) == null ? void 0 : _inputRef$current.setValue(newValue);
  }, [inputRef, onChange]);
  const [error, onError] = (0,react.useState)();
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(Radio/* Radio.Group */.Y.Group, { onChange: (e) => setScheduleFormat(e.target.value), value: scheduleFormat },
  (0,emotion_react_browser_esm.jsx)("div", { className: "inline-container add-margin" },
  (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { value: "picker" }),
  (0,emotion_react_browser_esm.jsx)(CronPicker.CronPicker, { clearButton: false, value: value, setValue: customSetValue, disabled: scheduleFormat !== 'picker', displayError: scheduleFormat === 'picker', onError: onError })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "inline-container add-margin" },
  (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { value: "input" }),
  (0,emotion_react_browser_esm.jsx)("span", { className: "input-label" }, "CRON Schedule"),
  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, { className: "styled-input" },
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(common_components/* Input */.II, { type: "text", name: "crontab", ref: inputRef, style: error ? { borderColor: theme.colors.error.base } : {}, placeholder: (0,TranslatorSingleton.t)('CRON expression'), disabled: scheduleFormat !== 'input', onBlur: (event) => {
      onChange(event.target.value);
    }, onPressEnter: () => {var _inputRef$current2;
      onChange(((_inputRef$current2 = inputRef.current) == null ? void 0 : _inputRef$current2.input.value) || '');
    } }))))));





};
;// CONCATENATED MODULE: ./src/views/CRUD/alert/components/NotificationMethod.tsx
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





const StyledNotificationMethod = style/* styled.div */.iK.div`
  margin-bottom: 10px;

  .input-container {
    textarea {
      height: auto;
    }
  }

  .inline-container {
    margin-bottom: 10px;

    .input-container {
      margin-left: 10px;
    }

    > div {
      margin: 0;
    }

    .delete-button {
      margin-left: 10px;
      padding-top: 3px;
    }
  }
`;
const NotificationMethod = ({ setting = null, index, onUpdate, onRemove }) => {
  const { method, recipients, options } = setting || {};
  const [recipientValue, setRecipientValue] = (0,react.useState)(recipients || '');
  const theme = (0,style/* useTheme */.Fg)();
  if (!setting) {
    return null;
  }
  const onMethodChange = (method) => {
    // Since we're swapping the method, reset the recipients
    setRecipientValue('');
    if (onUpdate) {
      const updatedSetting = {
        ...setting,
        method,
        recipients: '' };

      onUpdate(index, updatedSetting);
    }
  };
  const onRecipientsChange = (event) => {
    const { target } = event;
    setRecipientValue(target.value);
    if (onUpdate) {
      const updatedSetting = {
        ...setting,
        recipients: target.value };

      onUpdate(index, updatedSetting);
    }
  };
  // Set recipients
  if (!!recipients && recipientValue !== recipients) {
    setRecipientValue(recipients);
  }
  return (0,emotion_react_browser_esm.jsx)(StyledNotificationMethod, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "inline-container" },
  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Delivery method'), onChange: onMethodChange, placeholder: (0,TranslatorSingleton.t)('Select Delivery Method'), options: (options || []).map((method) => ({
      label: method,
      value: method })),
    value: method }))),


  method !== undefined && !!onRemove ? (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: 0, className: "delete-button", onClick: () => onRemove(index) },
  (0,emotion_react_browser_esm.jsx)(Icons/* default.Trash */.Z.Trash, { iconColor: theme.colors.grayscale.base })) :
  null),

  method !== undefined ? (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)(method)),
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("textarea", { name: "recipients", value: recipientValue, onChange: onRecipientsChange })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "helper" },
  (0,TranslatorSingleton.t)('Recipients are separated by "," or ";"'))) :

  null);

};
;// CONCATENATED MODULE: ./src/views/CRUD/alert/AlertReportModal.tsx
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
















const TIMEOUT_MIN = 1;
const TEXT_BASED_VISUALIZATION_TYPES = [
'pivot_table',
'pivot_table_v2',
'table',
'paired_ttest'];

const DEFAULT_NOTIFICATION_METHODS = ['Email'];
const DEFAULT_NOTIFICATION_FORMAT = 'PNG';
const CONDITIONS = [
{
  label: (0,TranslatorSingleton.t)('< (Smaller than)'),
  value: '<' },

{
  label: (0,TranslatorSingleton.t)('> (Larger than)'),
  value: '>' },

{
  label: (0,TranslatorSingleton.t)('<= (Smaller or equal)'),
  value: '<=' },

{
  label: (0,TranslatorSingleton.t)('>= (Larger or equal)'),
  value: '>=' },

{
  label: (0,TranslatorSingleton.t)('== (Is equal)'),
  value: '==' },

{
  label: (0,TranslatorSingleton.t)('!= (Is not equal)'),
  value: '!=' },

{
  label: (0,TranslatorSingleton.t)('Not null'),
  value: 'not null' }];


const RETENTION_OPTIONS = [
{
  label: (0,TranslatorSingleton.t)('None'),
  value: 0 },

{
  label: (0,TranslatorSingleton.t)('30 days'),
  value: 30 },

{
  label: (0,TranslatorSingleton.t)('60 days'),
  value: 60 },

{
  label: (0,TranslatorSingleton.t)('90 days'),
  value: 90 }];


const DEFAULT_RETENTION = 90;
const DEFAULT_WORKING_TIMEOUT = 3600;
const DEFAULT_CRON_VALUE = '0 * * * *'; // every hour
const DEFAULT_ALERT = {
  active: true,
  creation_method: 'alerts_reports',
  crontab: DEFAULT_CRON_VALUE,
  log_retention: DEFAULT_RETENTION,
  working_timeout: DEFAULT_WORKING_TIMEOUT,
  name: '',
  owners: [],
  recipients: [],
  sql: '',
  validator_config_json: {},
  validator_type: '',
  grace_period: undefined };

const StyledModal = (0,style/* styled */.iK)(Modal/* default */.Z)`
  .ant-modal-body {
    overflow: initial;
  }
`;
const AlertReportModal_StyledIcon = (theme) => emotion_react_browser_esm.css`
  margin: auto ${theme.gridUnit * 2}px auto 0;
  color: ${theme.colors.grayscale.base};
`;
const StyledSectionContainer = style/* styled.div */.iK.div`
  display: flex;
  min-width: 1000px;
  flex-direction: column;

  .header-section {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    width: 100%;
    padding: ${({ theme }) => theme.gridUnit * 4}px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  }

  .column-section {
    display: flex;
    flex: 1 1 auto;

    .column {
      flex: 1 1 auto;
      min-width: calc(33.33% - ${({ theme }) => theme.gridUnit * 8}px);
      padding: ${({ theme }) => theme.gridUnit * 4}px;

      .async-select {
        margin: 10px 0 20px;
      }

      &.condition {
        border-right: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
      }

      &.message {
        border-left: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
      }
    }
  }

  .inline-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    &.wrap {
      flex-wrap: wrap;
    }

    > div {
      flex: 1 1 auto;
    }

    &.add-margin {
      margin-bottom: 5px;
    }

    .styled-input {
      margin: 0 0 0 10px;

      input {
        flex: 0 0 auto;
      }
    }
  }
`;
const StyledSectionTitle = style/* styled.div */.iK.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.gridUnit * 2}px auto
    ${({ theme }) => theme.gridUnit * 4}px auto;

  h4 {
    margin: 0;
  }

  .required {
    margin-left: ${({ theme }) => theme.gridUnit}px;
    color: ${({ theme }) => theme.colors.error.base};
  }
`;
const StyledSwitchContainer = style/* styled.div */.iK.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  .switch-label {
    margin-left: 10px;
  }
`;
const StyledInputContainer = style/* styled.div */.iK.div`
  flex: 1;
  margin: ${({ theme }) => theme.gridUnit * 2}px;
  margin-top: 0;

  .helper {
    display: block;
    color: ${({ theme }) => theme.colors.grayscale.base};
    font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
    padding: ${({ theme }) => theme.gridUnit}px 0;
    text-align: left;
  }

  .required {
    margin-left: ${({ theme }) => theme.gridUnit / 2}px;
    color: ${({ theme }) => theme.colors.error.base};
  }

  .input-container {
    display: flex;
    align-items: center;

    > div {
      width: 100%;
    }

    label {
      display: flex;
      margin-right: ${({ theme }) => theme.gridUnit * 2}px;
    }

    i {
      margin: 0 ${({ theme }) => theme.gridUnit}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  input[disabled] {
    color: ${({ theme }) => theme.colors.grayscale.base};
  }

  textarea {
    height: 300px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({ theme }) => theme.gridUnit}px
      ${({ theme }) => theme.gridUnit * 2}px;
    border-style: none;
    border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    border-radius: ${({ theme }) => theme.gridUnit}px;

    &[name='description'] {
      flex: 1 1 auto;
    }
  }

  .input-label {
    margin-left: 10px;
  }
`;
const StyledRadio = (0,style/* styled */.iK)(Radio/* Radio */.Y)`
  display: block;
  line-height: ${({ theme }) => theme.gridUnit * 7}px;
`;
const StyledRadioGroup = (0,style/* styled */.iK)(Radio/* Radio.Group */.Y.Group)`
  margin-left: ${({ theme }) => theme.gridUnit * 5.5}px;
`;
// Notification Method components
const StyledNotificationAddButton = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.primary.dark1};
  cursor: pointer;

  i {
    margin-right: ${({ theme }) => theme.gridUnit * 2}px;
  }

  &.disabled {
    color: ${({ theme }) => theme.colors.grayscale.light1};
    cursor: default;
  }
`;
const timezoneHeaderStyle = (theme) => emotion_react_browser_esm.css`
  margin: ${theme.gridUnit * 3}px 0;
`;
const NotificationMethodAdd = ({ status = 'active', onClick }) => {
  if (status === 'hidden') {
    return null;
  }
  const checkStatus = () => {
    if (status !== 'disabled') {
      onClick();
    }
  };
  return (0,emotion_react_browser_esm.jsx)(StyledNotificationAddButton, { className: status, onClick: checkStatus },
  (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), ' ',
  status === 'active' ?
  (0,TranslatorSingleton.t)('Add notification method') :
  (0,TranslatorSingleton.t)('Add delivery method'));

};
const AlertReportModal = ({ addDangerToast, onAdd, onHide, show, alert = null, isReport = false }) => {var _currentAlert$databas2, _currentAlert$databas3, _currentAlert$validat5, _currentAlert$chart2, _currentAlert$chart3, _currentAlert$dashboa2, _currentAlert$dashboa3;
  const conf = (0,state/* useCommonConf */.c)();
  const allowedNotificationMethods = (conf == null ? void 0 : conf.ALERT_REPORTS_NOTIFICATION_METHODS) || DEFAULT_NOTIFICATION_METHODS;
  const [disableSave, setDisableSave] = (0,react.useState)(true);
  const [currentAlert, setCurrentAlert] = (0,react.useState)();
  const [isHidden, setIsHidden] = (0,react.useState)(true);
  const [contentType, setContentType] = (0,react.useState)('dashboard');
  const [reportFormat, setReportFormat] = (0,react.useState)(DEFAULT_NOTIFICATION_FORMAT);
  // Dropdown options
  const [conditionNotNull, setConditionNotNull] = (0,react.useState)(false);
  const [sourceOptions, setSourceOptions] = (0,react.useState)([]);
  const [dashboardOptions, setDashboardOptions] = (0,react.useState)([]);
  const [chartOptions, setChartOptions] = (0,react.useState)([]);
  // Chart metadata
  const [chartVizType, setChartVizType] = (0,react.useState)('');
  const isEditMode = alert !== null;
  const formatOptionEnabled = contentType === 'chart' && (
  (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.ALERTS_ATTACH_REPORTS */.T.ALERTS_ATTACH_REPORTS) || isReport);
  const [notificationAddState, setNotificationAddState] = (0,react.useState)('active');
  const [notificationSettings, setNotificationSettings] = (0,react.useState)([]);
  const onNotificationAdd = () => {
    const settings = notificationSettings.slice();
    settings.push({
      recipients: '',
      options: allowedNotificationMethods });

    setNotificationSettings(settings);
    setNotificationAddState(settings.length === allowedNotificationMethods.length ?
    'hidden' :
    'disabled');
  };
  const updateNotificationSetting = (index, setting) => {
    const settings = notificationSettings.slice();
    settings[index] = setting;
    setNotificationSettings(settings);
    if (setting.method !== undefined && notificationAddState !== 'hidden') {
      setNotificationAddState('active');
    }
  };
  const removeNotificationSetting = (index) => {
    const settings = notificationSettings.slice();
    settings.splice(index, 1);
    setNotificationSettings(settings);
    setNotificationAddState('active');
  };
  // Alert fetch logic
  const { state: { loading, resource, error: fetchError }, fetchResource, createResource, updateResource, clearError } = (0,hooks/* useSingleViewResource */.LE)('report', (0,TranslatorSingleton.t)('report'), addDangerToast);
  // Functions
  const hide = () => {
    clearError();
    setIsHidden(true);
    onHide();
    setNotificationSettings([]);
    setCurrentAlert({ ...DEFAULT_ALERT });
    setNotificationAddState('active');
  };
  const onSave = () => {var _currentAlert$chart, _currentAlert$dashboa, _currentAlert$databas;
    // Notification Settings
    const recipients = [];
    notificationSettings.forEach((setting) => {
      if (setting.method && setting.recipients.length) {
        recipients.push({
          recipient_config_json: {
            target: setting.recipients },

          type: setting.method });

      }
    });
    const data = {
      ...currentAlert,
      type: isReport ? 'Report' : 'Alert',
      validator_type: conditionNotNull ? 'not null' : 'operator',
      validator_config_json: conditionNotNull ?
      {} :
      currentAlert == null ? void 0 : currentAlert.validator_config_json,
      chart: contentType === 'chart' ? currentAlert == null ? void 0 : (_currentAlert$chart = currentAlert.chart) == null ? void 0 : _currentAlert$chart.value : null,
      dashboard: contentType === 'dashboard' ? currentAlert == null ? void 0 : (_currentAlert$dashboa = currentAlert.dashboard) == null ? void 0 : _currentAlert$dashboa.value : null,
      database: currentAlert == null ? void 0 : (_currentAlert$databas = currentAlert.database) == null ? void 0 : _currentAlert$databas.value,
      owners: ((currentAlert == null ? void 0 : currentAlert.owners) || []).map((owner) => owner.value),
      recipients,
      report_format: contentType === 'dashboard' ?
      DEFAULT_NOTIFICATION_FORMAT :
      reportFormat || DEFAULT_NOTIFICATION_FORMAT };

    if (data.recipients && !data.recipients.length) {
      delete data.recipients;
    }
    data.context_markdown = 'string';
    if (isEditMode) {
      // Edit
      if (currentAlert && currentAlert.id) {
        const update_id = currentAlert.id;
        delete data.id;
        delete data.created_by;
        delete data.last_eval_dttm;
        delete data.last_state;
        delete data.last_value;
        delete data.last_value_row_json;
        updateResource(update_id, data).then((response) => {
          if (!response) {
            return;
          }
          if (onAdd) {
            onAdd();
          }
          hide();
        });
      }
    } else
    if (currentAlert) {
      // Create
      createResource(data).then((response) => {
        if (!response) {
          return;
        }
        if (onAdd) {
          onAdd(response);
        }
        hide();
      });
    }
  };
  // Fetch data to populate form dropdowns
  const loadOwnerOptions = (0,react.useMemo)(() => (input = '', page, pageSize) => {
    const query = rison_default().encode({ filter: input, page, page_size: pageSize });
    return SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/report/related/owners?q=${query}` }).
    then((response) => ({
      data: response.json.result.map((item) => ({
        value: item.value,
        label: item.text })),

      totalCount: response.json.count }));

  }, []);
  const getSourceData = (0,react.useCallback)((db) => {
    const database = db || (currentAlert == null ? void 0 : currentAlert.database);
    if (!database || database.label) {
      return null;
    }
    let result;
    // Cycle through source options to find the selected option
    sourceOptions.forEach((source) => {
      if (source.value === database.value || source.value === database.id) {
        result = source;
      }
    });
    return result;
  }, [currentAlert == null ? void 0 : currentAlert.database, sourceOptions]);
  // Updating alert/report state
  const updateAlertState = (name, value) => {
    setCurrentAlert((currentAlertData) => ({
      ...currentAlertData,
      [name]: value }));

  };
  const loadSourceOptions = (0,react.useMemo)(() => (input = '', page, pageSize) => {
    const query = rison_default().encode({ filter: input, page, page_size: pageSize });
    return SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/report/related/database?q=${query}` }).
    then((response) => {
      const list = response.json.result.map((item) => ({
        value: item.value,
        label: item.text }));

      setSourceOptions(list);
      return { data: list, totalCount: response.json.count };
    });
  }, []);
  const databaseLabel = currentAlert && currentAlert.database && !currentAlert.database.label;
  (0,react.useEffect)(() => {
    // Find source if current alert has one set
    if (databaseLabel) {
      updateAlertState('database', getSourceData());
    }
  }, [databaseLabel, getSourceData]);
  const loadDashboardOptions = (0,react.useMemo)(() => (input = '', page, pageSize) => {
    const query = rison_default().encode({ filter: input, page, page_size: pageSize });
    return SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/report/related/dashboard?q=${query}` }).
    then((response) => {
      const list = response.json.result.map((item) => ({
        value: item.value,
        label: item.text }));

      setDashboardOptions(list);
      return { data: list, totalCount: response.json.count };
    });
  }, []);
  const getDashboardData = (db) => {
    const dashboard = db || (currentAlert == null ? void 0 : currentAlert.dashboard);
    if (!dashboard || dashboard.label) {
      return null;
    }
    let result;
    // Cycle through dashboard options to find the selected option
    dashboardOptions.forEach((dash) => {
      if (dash.value === dashboard.value || dash.value === dashboard.id) {
        result = dash;
      }
    });
    return result;
  };
  const getChartData = (0,react.useCallback)((chartData) => {
    const chart = chartData || (currentAlert == null ? void 0 : currentAlert.chart);
    if (!chart || chart.label) {
      return null;
    }
    let result;
    // Cycle through chart options to find the selected option
    chartOptions.forEach((slice) => {
      if (slice.value === chart.value || slice.value === chart.id) {
        result = slice;
      }
    });
    return result;
  }, [chartOptions, currentAlert == null ? void 0 : currentAlert.chart]);
  const noChartLabel = currentAlert && currentAlert.chart && !currentAlert.chart.label;
  (0,react.useEffect)(() => {
    // Find source if current alert has one set
    if (noChartLabel) {
      updateAlertState('chart', getChartData());
    }
  }, [getChartData, noChartLabel]);
  const loadChartOptions = (0,react.useMemo)(() => (input = '', page, pageSize) => {
    const query = rison_default().encode({ filter: input, page, page_size: pageSize });
    return SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/report/related/chart?q=${query}` }).
    then((response) => {
      const list = response.json.result.map((item) => ({
        value: item.value,
        label: item.text }));

      setChartOptions(list);
      return { data: list, totalCount: response.json.count };
    });
  }, []);
  const getChartVisualizationType = (chart) => SupersetClient/* default.get */.Z.get({
    endpoint: `/api/v1/chart/${chart.value}` }).
  then((response) => setChartVizType(response.json.result.viz_type));
  // Handle input/textarea updates
  const onTextChange = (event) => {
    const { target } = event;
    updateAlertState(target.name, target.value);
  };
  const onTimeoutVerifyChange = (event) => {
    const { target } = event;
    const value = +target.value;
    // Need to make sure grace period is not lower than TIMEOUT_MIN
    if (value === 0) {
      updateAlertState(target.name, null);
    } else
    {
      updateAlertState(target.name, value ? Math.max(value, TIMEOUT_MIN) : value);
    }
  };
  const onSQLChange = (value) => {
    updateAlertState('sql', value || '');
  };
  const onOwnersChange = (value) => {
    updateAlertState('owners', value || []);
  };
  const onSourceChange = (value) => {
    updateAlertState('database', value || []);
  };
  const onDashboardChange = (dashboard) => {
    updateAlertState('dashboard', dashboard || undefined);
    updateAlertState('chart', null);
  };
  const onChartChange = (chart) => {
    getChartVisualizationType(chart);
    updateAlertState('chart', chart || undefined);
    updateAlertState('dashboard', null);
  };
  const onActiveSwitch = (checked) => {
    updateAlertState('active', checked);
  };
  const onConditionChange = (op) => {var _currentAlert$validat;
    setConditionNotNull(op === 'not null');
    const config = {
      op,
      threshold: currentAlert ? (_currentAlert$validat =
      currentAlert.validator_config_json) == null ? void 0 : _currentAlert$validat.threshold :
      undefined };

    updateAlertState('validator_config_json', config);
  };
  const onThresholdChange = (event) => {var _currentAlert$validat2;
    const { target } = event;
    const config = {
      op: currentAlert ? (_currentAlert$validat2 = currentAlert.validator_config_json) == null ? void 0 : _currentAlert$validat2.op : undefined,
      threshold: target.value };

    updateAlertState('validator_config_json', config);
  };
  const onLogRetentionChange = (retention) => {
    updateAlertState('log_retention', retention);
  };
  const onTimezoneChange = (timezone) => {
    updateAlertState('timezone', timezone);
  };
  const onContentTypeChange = (event) => {
    const { target } = event;
    // Gives time to close the select before changing the type
    setTimeout(() => setContentType(target.value), 200);
  };
  const onFormatChange = (event) => {
    const { target } = event;
    setReportFormat(target.value);
  };
  // Make sure notification settings has the required info
  const checkNotificationSettings = () => {
    if (!notificationSettings.length) {
      return false;
    }
    let hasInfo = false;
    notificationSettings.forEach((setting) => {var _setting$recipients;
      if (!!setting.method && (_setting$recipients = setting.recipients) != null && _setting$recipients.length) {
        hasInfo = true;
      }
    });
    return hasInfo;
  };
  const validate = () => {var _currentAlert$name, _currentAlert$owners, _currentAlert$crontab;
    if (currentAlert && (_currentAlert$name =
    currentAlert.name) != null && _currentAlert$name.length && (_currentAlert$owners =
    currentAlert.owners) != null && _currentAlert$owners.length && (_currentAlert$crontab =
    currentAlert.crontab) != null && _currentAlert$crontab.length &&
    currentAlert.working_timeout !== undefined && (
    contentType === 'dashboard' && !!currentAlert.dashboard ||
    contentType === 'chart' && !!currentAlert.chart) &&
    checkNotificationSettings()) {var _currentAlert$sql, _currentAlert$validat3, _currentAlert$validat4;
      if (isReport) {
        setDisableSave(false);
      } else
      if (!!currentAlert.database && (_currentAlert$sql =
      currentAlert.sql) != null && _currentAlert$sql.length && (
      conditionNotNull || !!((_currentAlert$validat3 = currentAlert.validator_config_json) != null && _currentAlert$validat3.op)) && (
      conditionNotNull ||
      ((_currentAlert$validat4 = currentAlert.validator_config_json) == null ? void 0 : _currentAlert$validat4.threshold) !== undefined)) {
        setDisableSave(false);
      } else
      {
        setDisableSave(true);
      }
    } else
    {
      setDisableSave(true);
    }
  };
  // Initialize
  (0,react.useEffect)(() => {
    if (isEditMode && (
    !(currentAlert != null && currentAlert.id) || (alert == null ? void 0 : alert.id) !== currentAlert.id || isHidden && show)) {
      if (alert && alert.id !== null && !loading && !fetchError) {
        const id = alert.id || 0;
        fetchResource(id);
      }
    } else
    if (!isEditMode && (
    !currentAlert || currentAlert.id || isHidden && show)) {
      setCurrentAlert({ ...DEFAULT_ALERT });
      setNotificationSettings([]);
      setNotificationAddState('active');
    }
  }, [alert]);
  (0,react.useEffect)(() => {
    if (resource) {
      // Add notification settings
      const settings = (resource.recipients || []).map((setting) => {
        const config = typeof setting.recipient_config_json === 'string' ?
        JSON.parse(setting.recipient_config_json) :
        {};
        return {
          method: setting.type,
          // @ts-ignore: Type not assignable
          recipients: config.target || setting.recipient_config_json,
          options: allowedNotificationMethods };

      });
      setNotificationSettings(settings);
      setNotificationAddState(settings.length === allowedNotificationMethods.length ?
      'hidden' :
      'active');
      setContentType(resource.chart ? 'chart' : 'dashboard');
      setReportFormat(resource.chart ?
      resource.report_format || DEFAULT_NOTIFICATION_FORMAT :
      DEFAULT_NOTIFICATION_FORMAT);
      const validatorConfig = typeof resource.validator_config_json === 'string' ?
      JSON.parse(resource.validator_config_json) :
      resource.validator_config_json;
      setConditionNotNull(resource.validator_type === 'not null');
      if (resource.chart) {
        setChartVizType(resource.chart.viz_type);
      }
      setCurrentAlert({
        ...resource,
        chart: resource.chart ?
        getChartData(resource.chart) || {
          value: resource.chart.id,
          label: resource.chart.slice_name } :

        undefined,
        dashboard: resource.dashboard ?
        getDashboardData(resource.dashboard) || {
          value: resource.dashboard.id,
          label: resource.dashboard.dashboard_title } :

        undefined,
        database: resource.database ?
        getSourceData(resource.database) || {
          value: resource.database.id,
          label: resource.database.database_name } :

        undefined,
        owners: (resource.owners || []).map((owner) => ({
          value: owner.id,
          label: `${owner.first_name} ${owner.last_name}` })),

        // @ts-ignore: Type not assignable
        validator_config_json: resource.validator_type === 'not null' ?
        {
          op: 'not null' } :

        validatorConfig });

    }
  }, [resource]);
  // Validation
  const currentAlertSafe = currentAlert || {};
  (0,react.useEffect)(() => {
    validate();
  }, [
  currentAlertSafe.name,
  currentAlertSafe.owners,
  currentAlertSafe.database,
  currentAlertSafe.sql,
  currentAlertSafe.validator_config_json,
  currentAlertSafe.crontab,
  currentAlertSafe.working_timeout,
  currentAlertSafe.dashboard,
  currentAlertSafe.chart,
  contentType,
  notificationSettings,
  conditionNotNull]);

  // Show/hide
  if (isHidden && show) {
    setIsHidden(false);
  }
  return (0,emotion_react_browser_esm.jsx)(StyledModal, { className: "no-content-padding", responsive: true, disablePrimaryButton: disableSave, onHandledPrimaryAction: onSave, onHide: hide, primaryButtonName: isEditMode ? (0,TranslatorSingleton.t)('Save') : (0,TranslatorSingleton.t)('Add'), show: show, width: "100%", maxWidth: "1450px", title: (0,emotion_react_browser_esm.jsx)("h4", null,
    isEditMode ? (0,emotion_react_browser_esm.jsx)(Icons/* default.EditAlt */.Z.EditAlt, { css: AlertReportModal_StyledIcon }) : (0,emotion_react_browser_esm.jsx)(Icons/* default.PlusLarge */.Z.PlusLarge, { css: AlertReportModal_StyledIcon }),
    isEditMode ?
    (0,TranslatorSingleton.t)(`Edit ${isReport ? 'Report' : 'Alert'}`) :
    (0,TranslatorSingleton.t)(`Add ${isReport ? 'Report' : 'Alert'}`)) },

  (0,emotion_react_browser_esm.jsx)(StyledSectionContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "header-section" },
  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  isReport ? (0,TranslatorSingleton.t)('Report name') : (0,TranslatorSingleton.t)('Alert name'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("input", { type: "text", name: "name", value: currentAlert ? currentAlert.name : '', placeholder: isReport ? (0,TranslatorSingleton.t)('Report name') : (0,TranslatorSingleton.t)('Alert name'), onChange: onTextChange }))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('Owners'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Owners'), allowClear: true, name: "owners", mode: "multiple", value: (currentAlert == null ? void 0 : currentAlert.owners) || [], options: loadOwnerOptions, onChange: onOwnersChange }))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('Description')),
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("input", { type: "text", name: "description", value: currentAlert ? currentAlert.description || '' : '', placeholder: (0,TranslatorSingleton.t)('Description'), onChange: onTextChange }))),


  (0,emotion_react_browser_esm.jsx)(StyledSwitchContainer, null,
  (0,emotion_react_browser_esm.jsx)(Switch/* Switch */.r, { onChange: onActiveSwitch, checked: currentAlert ? currentAlert.active : true }),
  (0,emotion_react_browser_esm.jsx)("div", { className: "switch-label" }, "Active"))),


  (0,emotion_react_browser_esm.jsx)("div", { className: "column-section" },
  !isReport && (0,emotion_react_browser_esm.jsx)("div", { className: "column condition" },
  (0,emotion_react_browser_esm.jsx)(StyledSectionTitle, null,
  (0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Alert condition'))),

  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('Database'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Database'), name: "source", value: currentAlert != null && (_currentAlert$databas2 = currentAlert.database) != null && _currentAlert$databas2.label &&
    currentAlert != null && (_currentAlert$databas3 = currentAlert.database) != null && _currentAlert$databas3.value ?
    {
      value: currentAlert.database.value,
      label: currentAlert.database.label } :

    undefined, options: loadSourceOptions, onChange: onSourceChange }))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('SQL Query'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)(TextAreaControl/* default */.Z, { name: "sql", language: "sql", offerEditInModal: false, minLines: 15, maxLines: 15, onChange: onSQLChange, readOnly: false, initialValue: resource == null ? void 0 : resource.sql, key: currentAlert == null ? void 0 : currentAlert.id })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "inline-container wrap" },
  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('Trigger Alert If...'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Condition'), onChange: onConditionChange, placeholder: "Condition", value: (currentAlert == null ? void 0 : (_currentAlert$validat5 = currentAlert.validator_config_json) == null ? void 0 : _currentAlert$validat5.op) || undefined, options: CONDITIONS }))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('Value'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("input", { type: "number", name: "threshold", disabled: conditionNotNull, value: currentAlert &&
    currentAlert.validator_config_json &&
    currentAlert.validator_config_json.threshold !==
    undefined ?
    currentAlert.validator_config_json.threshold :
    '', placeholder: (0,TranslatorSingleton.t)('Value'), onChange: onThresholdChange }))))),




  (0,emotion_react_browser_esm.jsx)("div", { className: "column schedule" },
  (0,emotion_react_browser_esm.jsx)(StyledSectionTitle, null,
  (0,emotion_react_browser_esm.jsx)("h4", null,
  isReport ?
  (0,TranslatorSingleton.t)('Report schedule') :
  (0,TranslatorSingleton.t)('Alert condition schedule')),

  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)(AlertReportCronScheduler, { value: (currentAlert == null ? void 0 : currentAlert.crontab) || DEFAULT_CRON_VALUE, onChange: (newVal) => updateAlertState('crontab', newVal) }),
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('Timezone')),
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container", css: (theme) => timezoneHeaderStyle(theme) },
  (0,emotion_react_browser_esm.jsx)(TimezoneSelector/* default */.Z, { onTimezoneChange: onTimezoneChange, timezone: currentAlert == null ? void 0 : currentAlert.timezone })),

  (0,emotion_react_browser_esm.jsx)(StyledSectionTitle, null,
  (0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Schedule settings'))),

  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('Log retention'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)(components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Log retention'), placeholder: (0,TranslatorSingleton.t)('Log retention'), onChange: onLogRetentionChange, value: (currentAlert == null ? void 0 : currentAlert.log_retention) || DEFAULT_RETENTION, options: RETENTION_OPTIONS }))),


  (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" },
  (0,TranslatorSingleton.t)('Working timeout'),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("input", { type: "number", min: "1", name: "working_timeout", value: (currentAlert == null ? void 0 : currentAlert.working_timeout) || '', placeholder: (0,TranslatorSingleton.t)('Time in seconds'), onChange: onTimeoutVerifyChange }),
  (0,emotion_react_browser_esm.jsx)("span", { className: "input-label" }, "seconds"))),


  !isReport && (0,emotion_react_browser_esm.jsx)(StyledInputContainer, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: "control-label" }, (0,TranslatorSingleton.t)('Grace period')),
  (0,emotion_react_browser_esm.jsx)("div", { className: "input-container" },
  (0,emotion_react_browser_esm.jsx)("input", { type: "number", min: "1", name: "grace_period", value: (currentAlert == null ? void 0 : currentAlert.grace_period) || '', placeholder: (0,TranslatorSingleton.t)('Time in seconds'), onChange: onTimeoutVerifyChange }),
  (0,emotion_react_browser_esm.jsx)("span", { className: "input-label" }, "seconds")))),



  (0,emotion_react_browser_esm.jsx)("div", { className: "column message" },
  (0,emotion_react_browser_esm.jsx)(StyledSectionTitle, null,
  (0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Message content')),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  (0,emotion_react_browser_esm.jsx)(Radio/* Radio.Group */.Y.Group, { onChange: onContentTypeChange, value: contentType },
  (0,emotion_react_browser_esm.jsx)(StyledRadio, { value: "dashboard" }, (0,TranslatorSingleton.t)('Dashboard')),
  (0,emotion_react_browser_esm.jsx)(StyledRadio, { value: "chart" }, (0,TranslatorSingleton.t)('Chart'))),

  (0,emotion_react_browser_esm.jsx)(components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Chart'), css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({
      display: contentType === 'chart' ? 'inline' : 'none' },  true ? "" : 0,  true ? "" : 0),
    name: "chart", value: currentAlert != null && (_currentAlert$chart2 = currentAlert.chart) != null && _currentAlert$chart2.label && currentAlert != null && (_currentAlert$chart3 = currentAlert.chart) != null && _currentAlert$chart3.value ?
    {
      value: currentAlert.chart.value,
      label: currentAlert.chart.label } :

    undefined, options: loadChartOptions, onChange: onChartChange }),
  (0,emotion_react_browser_esm.jsx)(components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Dashboard'), css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({
      display: contentType === 'dashboard' ? 'inline' : 'none' },  true ? "" : 0,  true ? "" : 0),
    name: "dashboard", value: currentAlert != null && (_currentAlert$dashboa2 = currentAlert.dashboard) != null && _currentAlert$dashboa2.label && currentAlert != null && (_currentAlert$dashboa3 = currentAlert.dashboard) != null && _currentAlert$dashboa3.value ?
    {
      value: currentAlert.dashboard.value,
      label: currentAlert.dashboard.label } :

    undefined, options: loadDashboardOptions, onChange: onDashboardChange }),
  formatOptionEnabled && (0,emotion_react_browser_esm.jsx)("div", { className: "inline-container" },
  (0,emotion_react_browser_esm.jsx)(StyledRadioGroup, { onChange: onFormatChange, value: reportFormat },
  (0,emotion_react_browser_esm.jsx)(StyledRadio, { value: "PNG" }, (0,TranslatorSingleton.t)('Send as PNG')),
  (0,emotion_react_browser_esm.jsx)(StyledRadio, { value: "CSV" }, (0,TranslatorSingleton.t)('Send as CSV')),
  TEXT_BASED_VISUALIZATION_TYPES.includes(chartVizType) && (0,emotion_react_browser_esm.jsx)(StyledRadio, { value: "TEXT" }, (0,TranslatorSingleton.t)('Send as text')))),


  (0,emotion_react_browser_esm.jsx)(StyledSectionTitle, null,
  (0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Notification method')),
  (0,emotion_react_browser_esm.jsx)("span", { className: "required" }, "*")),

  notificationSettings.map((notificationSetting, i) => (0,emotion_react_browser_esm.jsx)(NotificationMethod, { setting: notificationSetting, index: i, key: `NotificationMethod-${i}`, onUpdate: updateNotificationSetting, onRemove: removeNotificationSetting })),
  (0,emotion_react_browser_esm.jsx)(NotificationMethodAdd, { status: notificationAddState, onClick: onNotificationAdd })))));




};
/* harmony default export */ const alert_AlertReportModal = ((0,withToasts/* default */.Z)(AlertReportModal));
;// CONCATENATED MODULE: ./src/views/CRUD/alert/AlertList.tsx
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
const deleteAlerts = (0,makeApi/* default */.Z)({
  requestType: 'rison',
  method: 'DELETE',
  endpoint: '/api/v1/report/' });

const RefreshContainer = style/* styled.div */.iK.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.gridUnit * 4}px
    ${({ theme }) => theme.gridUnit * 3}px;
  background-color: ${({ theme }) => theme.colors.grayscale.light5};
`;
function AlertList({ addDangerToast, isReportEnabled = false, user, addSuccessToast }) {
  const title = isReportEnabled ? (0,TranslatorSingleton.t)('report') : (0,TranslatorSingleton.t)('alert');
  const titlePlural = isReportEnabled ? (0,TranslatorSingleton.t)('reports') : (0,TranslatorSingleton.t)('alerts');
  const pathName = isReportEnabled ? 'Reports' : 'Alerts';
  const initalFilters = (0,react.useMemo)(() => [
  {
    id: 'type',
    operator: ListView/* FilterOperator.equals */.p.equals,
    value: isReportEnabled ? 'Report' : 'Alert' }],

  [isReportEnabled]);
  const { state: { loading, resourceCount: alertsCount, resourceCollection: alerts, bulkSelectEnabled, lastFetched }, hasPerm, fetchData, refreshData, toggleBulkSelect } = (0,hooks/* useListViewResource */.Yi)('report', (0,TranslatorSingleton.t)('reports'), addDangerToast, true, undefined, initalFilters);
  const { updateResource } = (0,hooks/* useSingleViewResource */.LE)('report', (0,TranslatorSingleton.t)('reports'), addDangerToast);
  const [alertModalOpen, setAlertModalOpen] = (0,react.useState)(false);
  const [currentAlert, setCurrentAlert] = (0,react.useState)(null);
  const [currentAlertDeleting, setCurrentAlertDeleting] = (0,react.useState)(null);
  // Actions
  function handleAlertEdit(alert) {
    setCurrentAlert(alert);
    setAlertModalOpen(true);
  }
  const generateKey = () => `${new Date().getTime()}`;
  const canEdit = hasPerm('can_write');
  const canDelete = hasPerm('can_write');
  const canCreate = hasPerm('can_write');
  (0,react.useEffect)(() => {
    if (bulkSelectEnabled && canDelete) {
      toggleBulkSelect();
    }
  }, [isReportEnabled]);
  const handleAlertDelete = ({ id, name }) => {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/report/${id}` }).
    then(() => {
      refreshData();
      setCurrentAlertDeleting(null);
      addSuccessToast((0,TranslatorSingleton.t)('Deleted: %s', name));
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting %s: %s', name, errMsg))));
  };
  const handleBulkAlertDelete = async (alertsToDelete) => {
    try {
      const { message } = await deleteAlerts(alertsToDelete.map(({ id }) => id));
      refreshData();
      addSuccessToast(message);
    }
    catch (e) {
      (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting the selected %s: %s', titlePlural, errMsg)))(e);
    }
  };
  const initialSort = [{ id: 'name', desc: true }];
  const toggleActive = (data, checked) => {
    if (data && data.id) {
      const update_id = data.id;
      updateResource(update_id, { active: checked }).then(() => {
        refreshData();
      });
    }
  };
  const columns = (0,react.useMemo)(() => [
  {
    Cell: ({ row: { original: { last_state: lastState } } }) => (0,emotion_react_browser_esm.jsx)(AlertStatusIcon/* default */.Z, { state: lastState, isReportEnabled: isReportEnabled }),
    accessor: 'last_state',
    size: 'xs',
    disableSortBy: true },

  {
    Cell: ({ row: { original: { last_eval_dttm: lastEvalDttm } } }) => lastEvalDttm ?
    moment_default().utc(lastEvalDttm).local().format(constants/* DATETIME_WITH_TIME_ZONE */.v2) :
    '',
    accessor: 'last_eval_dttm',
    Header: (0,TranslatorSingleton.t)('Last run'),
    size: 'lg' },

  {
    accessor: 'name',
    Header: (0,TranslatorSingleton.t)('Name'),
    size: 'xl' },

  {
    Header: (0,TranslatorSingleton.t)('Schedule'),
    accessor: 'crontab_humanized',
    size: 'xl',
    Cell: ({ row: { original: { crontab_humanized = '' } } }) => (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: crontab_humanized, placement: "topLeft" },
    (0,emotion_react_browser_esm.jsx)("span", null, crontab_humanized)) },


  {
    Cell: ({ row: { original: { recipients } } }) => recipients.map((r) => (0,emotion_react_browser_esm.jsx)(RecipientIcon, { key: r.id, type: r.type })),
    accessor: 'recipients',
    Header: (0,TranslatorSingleton.t)('Notification method'),
    disableSortBy: true,
    size: 'xl' },

  {
    accessor: 'created_by',
    disableSortBy: true,
    hidden: true,
    size: 'xl' },

  {
    Cell: ({ row: { original: { owners = [] } } }) => (0,emotion_react_browser_esm.jsx)(FacePile/* default */.Z, { users: owners }),
    Header: (0,TranslatorSingleton.t)('Owners'),
    id: 'owners',
    disableSortBy: true,
    size: 'xl' },

  {
    Cell: ({ row: { original } }) => (0,emotion_react_browser_esm.jsx)(Switch/* Switch */.r, { checked: original.active, onClick: (checked) => toggleActive(original, checked), size: "small" }),
    Header: (0,TranslatorSingleton.t)('Active'),
    accessor: 'active',
    id: 'active',
    size: 'xl' },

  {
    Cell: ({ row: { original } }) => {
      const history = (0,react_router/* useHistory */.k6)();
      const handleEdit = () => handleAlertEdit(original);
      const handleDelete = () => setCurrentAlertDeleting(original);
      const handleGotoExecutionLog = () => history.push(`/${original.type.toLowerCase()}/${original.id}/log`);
      const actions = [
      canEdit ?
      {
        label: 'execution-log-action',
        tooltip: (0,TranslatorSingleton.t)('Execution log'),
        placement: 'bottom',
        icon: 'Note',
        onClick: handleGotoExecutionLog } :

      null,
      canEdit ?
      {
        label: 'edit-action',
        tooltip: (0,TranslatorSingleton.t)('Edit'),
        placement: 'bottom',
        icon: 'Edit',
        onClick: handleEdit } :

      null,
      canDelete ?
      {
        label: 'delete-action',
        tooltip: (0,TranslatorSingleton.t)('Delete'),
        placement: 'bottom',
        icon: 'Trash',
        onClick: handleDelete } :

      null].
      filter((item) => item !== null);
      return (0,emotion_react_browser_esm.jsx)(ActionsBar/* default */.Z, { actions: actions });
    },
    Header: (0,TranslatorSingleton.t)('Actions'),
    id: 'actions',
    hidden: !canEdit && !canDelete,
    disableSortBy: true,
    size: 'xl' }],

  [canDelete, canEdit, isReportEnabled]);
  const subMenuButtons = [];
  if (canCreate) {
    subMenuButtons.push({
      name: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), " ", title),

      buttonStyle: 'primary',
      onClick: () => {
        handleAlertEdit(null);
      } });

  }
  if (canDelete) {
    subMenuButtons.push({
      name: (0,TranslatorSingleton.t)('Bulk select'),
      onClick: toggleBulkSelect,
      buttonStyle: 'secondary',
      'data-test': 'bulk-select-toggle' });

  }
  const EmptyStateButton = (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "primary", onClick: () => handleAlertEdit(null) },
  (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), " ", title);

  const emptyState = {
    message: (0,TranslatorSingleton.t)('No %s yet', titlePlural),
    slot: canCreate ? EmptyStateButton : null };

  const filters = (0,react.useMemo)(() => [
  {
    Header: (0,TranslatorSingleton.t)('Created by'),
    id: 'created_by',
    input: 'select',
    operator: ListView/* FilterOperator.relationOneMany */.p.relationOneMany,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchRelated */.tm)('report', 'created_by', (0,utils/* createErrorHandler */.v$)((errMsg) => (0,TranslatorSingleton.t)('An error occurred while fetching created by values: %s', errMsg)), user),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('Status'),
    id: 'last_state',
    input: 'select',
    operator: ListView/* FilterOperator.equals */.p.equals,
    unfilteredLabel: 'Any',
    selects: [
    { label: (0,TranslatorSingleton.t)(`${types/* AlertState.success */.Z.success}`), value: types/* AlertState.success */.Z.success },
    { label: (0,TranslatorSingleton.t)(`${types/* AlertState.working */.Z.working}`), value: types/* AlertState.working */.Z.working },
    { label: (0,TranslatorSingleton.t)(`${types/* AlertState.error */.Z.error}`), value: types/* AlertState.error */.Z.error },
    { label: (0,TranslatorSingleton.t)(`${types/* AlertState.noop */.Z.noop}`), value: types/* AlertState.noop */.Z.noop },
    { label: (0,TranslatorSingleton.t)(`${types/* AlertState.grace */.Z.grace}`), value: types/* AlertState.grace */.Z.grace }] },


  {
    Header: (0,TranslatorSingleton.t)('Search'),
    id: 'name',
    input: 'search',
    operator: ListView/* FilterOperator.contains */.p.contains }],

  []);
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(SubMenu/* default */.Z, { activeChild: pathName, name: (0,TranslatorSingleton.t)('Alerts & reports'), tabs: [
    {
      name: 'Alerts',
      label: (0,TranslatorSingleton.t)('Alerts'),
      url: '/alert/list/',
      usesRouter: true,
      'data-test': 'alert-list' },

    {
      name: 'Reports',
      label: (0,TranslatorSingleton.t)('Reports'),
      url: '/report/list/',
      usesRouter: true,
      'data-test': 'report-list' }],

    buttons: subMenuButtons },
  (0,emotion_react_browser_esm.jsx)(RefreshContainer, null,
  (0,emotion_react_browser_esm.jsx)(components_LastUpdated, { updatedAt: lastFetched, update: () => refreshData() }))),


  (0,emotion_react_browser_esm.jsx)(alert_AlertReportModal, { alert: currentAlert, addDangerToast: addDangerToast, layer: currentAlert, onHide: () => {
      setAlertModalOpen(false);
      setCurrentAlert(null);
      refreshData();
    }, show: alertModalOpen, isReport: isReportEnabled, key: (currentAlert == null ? void 0 : currentAlert.id) || generateKey() }),
  currentAlertDeleting && (0,emotion_react_browser_esm.jsx)(DeleteModal/* default */.Z, { description: (0,TranslatorSingleton.t)('This action will permanently delete %s.', currentAlertDeleting.name), onConfirm: () => {
      if (currentAlertDeleting) {
        handleAlertDelete(currentAlertDeleting);
      }
    }, onHide: () => setCurrentAlertDeleting(null), open: true, title: (0,TranslatorSingleton.t)('Delete %s?', title) }),
  (0,emotion_react_browser_esm.jsx)(ConfirmStatusChange/* default */.Z, { title: (0,TranslatorSingleton.t)('Please confirm'), description: (0,TranslatorSingleton.t)('Are you sure you want to delete the selected %s?', titlePlural), onConfirm: handleBulkAlertDelete },
  (confirmDelete) => {
    const bulkActions = canDelete ?
    [
    {
      key: 'delete',
      name: (0,TranslatorSingleton.t)('Delete'),
      onSelect: confirmDelete,
      type: 'danger' }] :


    [];
    return (0,emotion_react_browser_esm.jsx)(ListView/* default */.Z, { className: "alerts-list-view", columns: columns, count: alertsCount, data: alerts, emptyState: emptyState, fetchData: fetchData, filters: filters, initialSort: initialSort, loading: loading, bulkActions: bulkActions, bulkSelectEnabled: bulkSelectEnabled, disableBulkSelect: toggleBulkSelect, pageSize: PAGE_SIZE });
  }));


}
/* harmony default export */ const alert_AlertList = ((0,withToasts/* default */.Z)(AlertList));

/***/ }),

/***/ 46714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AlertStatusIcon)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58593);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38097);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28745);
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





function getStatusColor(status, isReportEnabled, theme) {
  switch (status) {
    case _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.working */ .Z.working:
      return theme.colors.primary.base;
    case _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.error */ .Z.error:
      return theme.colors.error.base;
    case _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.success */ .Z.success:
      return isReportEnabled ?
      theme.colors.success.base :
      theme.colors.alert.base;
    case _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.noop */ .Z.noop:
      return theme.colors.success.base;
    case _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.grace */ .Z.grace:
      return theme.colors.alert.base;
    default:
      return theme.colors.grayscale.base;}

}
function AlertStatusIcon({ state, isReportEnabled = false }) {
  const theme = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .useTheme */ .Fg)();
  const lastStateConfig = {
    icon: src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Check */ .Z.Check,
    label: '',
    status: '' };

  switch (state) {
    case _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.success */ .Z.success:
      lastStateConfig.icon = isReportEnabled ?
      src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Check */ .Z.Check :
      src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].AlertSolidSmall */ .Z.AlertSolidSmall;
      lastStateConfig.label = isReportEnabled ?
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Report sent') :
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Alert triggered, notification sent');
      lastStateConfig.status = _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.success */ .Z.success;
      break;
    case _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.working */ .Z.working:
      lastStateConfig.icon = src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Running */ .Z.Running;
      lastStateConfig.label = isReportEnabled ?
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Report sending') :
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Alert running');
      lastStateConfig.status = _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.working */ .Z.working;
      break;
    case _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.error */ .Z.error:
      lastStateConfig.icon = src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].XSmall */ .Z.XSmall;
      lastStateConfig.label = isReportEnabled ?
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Report failed') :
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Alert failed');
      lastStateConfig.status = _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.error */ .Z.error;
      break;
    case _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.noop */ .Z.noop:
      lastStateConfig.icon = src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Check */ .Z.Check;
      lastStateConfig.label = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Nothing triggered');
      lastStateConfig.status = _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.noop */ .Z.noop;
      break;
    case _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.grace */ .Z.grace:
      lastStateConfig.icon = src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].AlertSolidSmall */ .Z.AlertSolidSmall;
      lastStateConfig.label = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Alert Triggered, In Grace Period');
      lastStateConfig.status = _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.grace */ .Z.grace;
      break;
    default:
      lastStateConfig.icon = src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Check */ .Z.Check;
      lastStateConfig.label = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('Nothing triggered');
      lastStateConfig.status = _types__WEBPACK_IMPORTED_MODULE_3__/* .AlertState.noop */ .Z.noop;}

  const Icon = lastStateConfig.icon;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__/* .Tooltip */ .u, { title: lastStateConfig.label, placement: "bottomLeft" },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(Icon, { iconColor: getStatusColor(lastStateConfig.status, isReportEnabled, theme) }));

}

/***/ }),

/***/ 28745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AlertState),
/* harmony export */   "u": () => (/* binding */ RecipientIconName)
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
var AlertState;
(function (AlertState) {
  AlertState["success"] = "Success";
  AlertState["working"] = "Working";
  AlertState["error"] = "Error";
  AlertState["noop"] = "Not triggered";
  AlertState["grace"] = "On Grace";
})(AlertState || (AlertState = {}));
var RecipientIconName;
(function (RecipientIconName) {
  RecipientIconName["email"] = "Email";
  RecipientIconName["slack"] = "Slack";
})(RecipientIconName || (RecipientIconName = {}));

/***/ }),

/***/ 1483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useCommonConf)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37703);
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

function useCommonConf() {
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useSelector */ .v9)((state) => {var _state$common;return state == null ? void 0 : (_state$common = state.common) == null ? void 0 : _state$common.conf;});
}

/***/ })

}]);