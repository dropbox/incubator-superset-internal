"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[9137],{

/***/ 25163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60650);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5977);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73727);
/* harmony import */ var src_components_ListView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9678);
/* harmony import */ var src_components_Menu_SubMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62753);
/* harmony import */ var src_components_MessageToasts_withToasts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14114);
/* harmony import */ var src_modules_dates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1836);
/* harmony import */ var src_views_CRUD_alert_components_AlertStatusIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46714);
/* harmony import */ var src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34858);
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










const PAGE_SIZE = 25;
const StyledHeader = _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .styled.div */ .iK.div`
  display: flex;
  flex-direction: row;

  a,
  Link {
    margin-left: 16px;
    font-size: 12px;
    font-weight: normal;
    text-decoration: underline;
  }
`;
function ExecutionLog({ addDangerToast, isReportEnabled }) {
  const { alertId } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .useParams */ .UO)();
  const { state: { loading, resourceCount: logCount, resourceCollection: logs }, fetchData } = (0,src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useListViewResource */ .Yi)(`report/${alertId}/log`, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('log'), addDangerToast, false);
  const { state: { loading: alertLoading, resource: alertResource }, fetchResource } = (0,src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useSingleViewResource */ .LE)('report', (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('reports'), addDangerToast);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (alertId !== null && !alertLoading) {
      fetchResource(alertId);
    }
  }, [alertId]);
  const initialSort = [{ id: 'start_dttm', desc: true }];
  const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [
  {
    Cell: ({ row: { original: { state } } }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_views_CRUD_alert_components_AlertStatusIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, { state: state, isReportEnabled: isReportEnabled }),
    accessor: 'state',
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('State'),
    size: 'xs',
    disableSortBy: true },

  {
    Cell: ({ row: { original: { uuid: executionId } } }) => executionId ? executionId.slice(0, 6) : 'none',
    accessor: 'uuid',
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('Execution ID'),
    size: 'xs',
    disableSortBy: true },

  {
    Cell: ({ row: { original: { scheduled_dttm: scheduledDttm } } }) => moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(scheduledDttm)).format('YYYY-MM-DD hh:mm:ss a'),
    accessor: 'scheduled_dttm',
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('Scheduled at (UTC)') },

  {
    Cell: ({ row: { original: { start_dttm: startDttm } } }) => moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(startDttm)).format('YYYY-MM-DD hh:mm:ss a'),
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('Start at (UTC)'),
    accessor: 'start_dttm' },

  {
    Cell: ({ row: { original: { start_dttm: startDttm, end_dttm: endDttm } } }) => (0,src_modules_dates__WEBPACK_IMPORTED_MODULE_5__/* .fDuration */ .zQ)(new Date(startDttm).getTime(), new Date(endDttm).getTime()),
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('Duration'),
    disableSortBy: true },

  {
    accessor: 'value',
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('Value') },

  {
    accessor: 'error_message',
    Header: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('Error message') }],

  [isReportEnabled]);
  const path = `/${isReportEnabled ? 'report' : 'alert'}/list/`;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Menu_SubMenu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, { name: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(StyledHeader, null,
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", null,
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)(`${alertResource == null ? void 0 : alertResource.type}`), " ", alertResource == null ? void 0 : alertResource.name),

    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", null,
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__/* .Link */ .rU, { to: path }, "Back to all"))) }),


  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_ListView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { className: "execution-log-list-view", columns: columns, count: logCount, data: logs, fetchData: fetchData, initialSort: initialSort, loading: loading, pageSize: PAGE_SIZE }));

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,src_components_MessageToasts_withToasts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(ExecutionLog));

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

/***/ })

}]);