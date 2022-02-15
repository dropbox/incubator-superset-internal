"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[7633],{

/***/ 82842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ query_QueryList)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/views/CRUD/utils.tsx
var utils = __webpack_require__(40768);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/views/CRUD/hooks.ts
var hooks = __webpack_require__(34858);
// EXTERNAL MODULE: ./src/components/Menu/SubMenu.tsx
var SubMenu = __webpack_require__(62753);
// EXTERNAL MODULE: ./src/components/Popover/index.tsx
var Popover = __webpack_require__(76697);
// EXTERNAL MODULE: ./src/views/CRUD/data/common.ts
var common = __webpack_require__(95413);
// EXTERNAL MODULE: ./src/components/ListView/index.ts + 11 modules
var ListView = __webpack_require__(9678);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/cjs/light.js
var light = __webpack_require__(42110);
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/cjs/languages/hljs/sql.js
var sql = __webpack_require__(33743);
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/github.js
var github = __webpack_require__(120);
// EXTERNAL MODULE: ./src/constants.ts
var constants = __webpack_require__(27600);
// EXTERNAL MODULE: ./src/views/CRUD/types.ts
var types = __webpack_require__(12);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/views/CRUD/data/components/SyntaxHighlighterCopy/index.tsx
var SyntaxHighlighterCopy = __webpack_require__(31673);
// EXTERNAL MODULE: ./src/views/CRUD/data/hooks.ts
var data_hooks = __webpack_require__(14025);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/views/CRUD/data/query/QueryPreviewModal.tsx
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








const QueryTitle = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.secondary.light2};
  font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
  margin-bottom: 0;
  text-transform: uppercase;
`;
const QueryLabel = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.grayscale.dark2};
  font-size: ${({ theme }) => theme.typography.sizes.m - 1}px;
  padding: 4px 0 24px 0;
`;
const QueryViewToggle = style/* styled.div */.iK.div`
  margin: 0 0 ${({ theme }) => theme.gridUnit * 6}px 0;
`;
const TabButton = style/* styled.div */.iK.div`
  display: inline;
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  padding: ${({ theme }) => theme.gridUnit * 2}px
    ${({ theme }) => theme.gridUnit * 4}px;
  margin-right: ${({ theme }) => theme.gridUnit * 4}px;
  color: ${({ theme }) => theme.colors.secondary.dark1};

  &.active,
  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.secondary.light4};
    border-bottom: none;
    border-radius: ${({ theme }) => theme.borderRadius}px;
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  }

  &:hover:not(.active) {
    background: ${({ theme }) => theme.colors.secondary.light5};
  }
`;
const StyledModal = (0,style/* styled */.iK)(Modal/* default */.Z)`
  .ant-modal-body {
    padding: ${({ theme }) => theme.gridUnit * 6}px;
  }

  pre {
    font-size: ${({ theme }) => theme.typography.sizes.xs}px;
    font-weight: ${({ theme }) => theme.typography.weights.normal};
    line-height: ${({ theme }) => theme.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`;
function QueryPreviewModal({ onHide, openInSqlLab, queries, query, fetchData, show, addDangerToast, addSuccessToast }) {
  const { handleKeyPress, handleDataChange, disablePrevious, disableNext } = (0,data_hooks/* useQueryPreviewState */.C)({
    queries,
    currentQueryId: query.id,
    fetchData });

  const [currentTab, setCurrentTab] = (0,react.useState)('user');
  const { id, sql, executed_sql } = query;
  return (0,emotion_react_browser_esm.jsx)("div", { role: "none", onKeyUp: handleKeyPress },
  (0,emotion_react_browser_esm.jsx)(StyledModal, { onHide: onHide, show: show, title: (0,TranslatorSingleton.t)('Query preview'), footer: [
    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { key: "previous-query", disabled: disablePrevious, onClick: () => handleDataChange(true) },
    (0,TranslatorSingleton.t)('Previous')),

    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { key: "next-query", disabled: disableNext, onClick: () => handleDataChange(false) },
    (0,TranslatorSingleton.t)('Next')),

    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { key: "open-in-sql-lab", buttonStyle: "primary", onClick: () => openInSqlLab(id) },
    (0,TranslatorSingleton.t)('Open in SQL Lab'))] },


  (0,emotion_react_browser_esm.jsx)(QueryTitle, null, (0,TranslatorSingleton.t)('Tab name')),
  (0,emotion_react_browser_esm.jsx)(QueryLabel, null, query.tab_name),
  (0,emotion_react_browser_esm.jsx)(QueryViewToggle, null,
  (0,emotion_react_browser_esm.jsx)(TabButton, { role: "button", className: classnames_default()({ active: currentTab === 'user' }), onClick: () => setCurrentTab('user') },
  (0,TranslatorSingleton.t)('User query')),

  (0,emotion_react_browser_esm.jsx)(TabButton, { role: "button", className: classnames_default()({ active: currentTab === 'executed' }), onClick: () => setCurrentTab('executed') },
  (0,TranslatorSingleton.t)('Executed query'))),


  (0,emotion_react_browser_esm.jsx)(SyntaxHighlighterCopy/* default */.Z, { addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, language: "sql" },
  (currentTab === 'user' ? sql : executed_sql) || '')));



}
/* harmony default export */ const query_QueryPreviewModal = ((0,withToasts/* default */.Z)(QueryPreviewModal));
;// CONCATENATED MODULE: ./src/views/CRUD/data/query/QueryList.tsx
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
const SQL_PREVIEW_MAX_LINES = 4;
const TopAlignedListView = (0,style/* styled */.iK)(ListView/* default */.Z)`
  table .table-cell {
    vertical-align: top;
  }
`;
light/* default.registerLanguage */.Z.registerLanguage('sql', sql/* default */.Z);
const StyledSyntaxHighlighter = (0,style/* styled */.iK)(light/* default */.Z)`
  height: ${({ theme }) => theme.gridUnit * 26}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StyledTableLabel = style/* styled.div */.iK.div`
  .count {
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`;
const StyledPopoverItem = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.grayscale.dark2};
`;
function QueryList({ addDangerToast, addSuccessToast }) {
  const { state: { loading, resourceCount: queryCount, resourceCollection: queries }, fetchData } = (0,hooks/* useListViewResource */.Yi)('query', (0,TranslatorSingleton.t)('Query history'), addDangerToast, false);
  const [queryCurrentlyPreviewing, setQueryCurrentlyPreviewing] = (0,react.useState)();
  const theme = (0,style/* useTheme */.Fg)();
  const handleQueryPreview = (0,react.useCallback)((id) => {
    SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/query/${id}` }).
    then(({ json = {} }) => {
      setQueryCurrentlyPreviewing({ ...json.result });
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue previewing the selected query. %s', errMsg))));
  }, [addDangerToast]);
  const menuData = {
    activeChild: 'Query history',
    ...common/* commonMenuData */.Y };

  const initialSort = [{ id: types/* QueryObjectColumns.start_time */.J.start_time, desc: true }];
  const columns = (0,react.useMemo)(() => [
  {
    Cell: ({ row: { original: { status } } }) => {
      const statusConfig = {
        name: null,
        label: '' };

      if (status === 'success') {
        statusConfig.name = (0,emotion_react_browser_esm.jsx)(Icons/* default.Check */.Z.Check, { iconColor: theme.colors.success.base });
        statusConfig.label = (0,TranslatorSingleton.t)('Success');
      } else
      if (status === 'failed' || status === 'stopped') {
        statusConfig.name = (0,emotion_react_browser_esm.jsx)(Icons/* default.XSmall */.Z.XSmall, { iconColor: status === 'failed' ?
          theme.colors.error.base :
          theme.colors.grayscale.base });
        statusConfig.label = (0,TranslatorSingleton.t)('Failed');
      } else
      if (status === 'running') {
        statusConfig.name = (0,emotion_react_browser_esm.jsx)(Icons/* default.Running */.Z.Running, { iconColor: theme.colors.primary.base });
        statusConfig.label = (0,TranslatorSingleton.t)('Running');
      } else
      if (status === 'timed_out') {
        statusConfig.name = (0,emotion_react_browser_esm.jsx)(Icons/* default.Offline */.Z.Offline, { iconColor: theme.colors.grayscale.light1 });
        statusConfig.label = (0,TranslatorSingleton.t)('Offline');
      } else
      if (status === 'scheduled' || status === 'pending') {
        statusConfig.name = (0,emotion_react_browser_esm.jsx)(Icons/* default.Queued */.Z.Queued, { iconColor: theme.colors.grayscale.base });
        statusConfig.label = (0,TranslatorSingleton.t)('Scheduled');
      }
      return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: statusConfig.label, placement: "bottom" },
      (0,emotion_react_browser_esm.jsx)("span", null, statusConfig.name));

    },
    accessor: types/* QueryObjectColumns.status */.J.status,
    size: 'xs',
    disableSortBy: true },

  {
    accessor: types/* QueryObjectColumns.start_time */.J.start_time,
    Header: (0,TranslatorSingleton.t)('Time'),
    size: 'xl',
    Cell: ({ row: { original: { start_time, end_time } } }) => {
      const startMoment = moment_default().utc(start_time).local();
      const formattedStartTimeData = startMoment.
      format(constants/* DATETIME_WITH_TIME_ZONE */.v2).
      split(' ');
      const formattedStartTime = (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      formattedStartTimeData[0], " ", (0,emotion_react_browser_esm.jsx)("br", null),
      formattedStartTimeData[1]);

      return end_time ? (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: (0,TranslatorSingleton.t)('Duration: %s', moment_default()(moment_default().utc(end_time - start_time)).format(constants/* TIME_WITH_MS */.n2)), placement: "bottom" },
      (0,emotion_react_browser_esm.jsx)("span", null, formattedStartTime)) :
      formattedStartTime;
    } },

  {
    accessor: types/* QueryObjectColumns.tab_name */.J.tab_name,
    Header: (0,TranslatorSingleton.t)('Tab name'),
    size: 'xl' },

  {
    accessor: types/* QueryObjectColumns.database_name */.J.database_name,
    Header: (0,TranslatorSingleton.t)('Database'),
    size: 'xl' },

  {
    accessor: types/* QueryObjectColumns.database */.J.database,
    hidden: true },

  {
    accessor: types/* QueryObjectColumns.schema */.J.schema,
    Header: (0,TranslatorSingleton.t)('Schema'),
    size: 'xl' },

  {
    Cell: ({ row: { original: { sql_tables: tables = [] } } }) => {
      const names = tables.map((table) => table.table);
      const main = names.length > 0 ? names.shift() : '';
      if (names.length) {
        return (0,emotion_react_browser_esm.jsx)(StyledTableLabel, null,
        (0,emotion_react_browser_esm.jsx)("span", null, main),
        (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, { placement: "right", title: (0,TranslatorSingleton.t)('TABLES'), trigger: "click", content: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
          names.map((name) => (0,emotion_react_browser_esm.jsx)(StyledPopoverItem, { key: name }, name))) },

        (0,emotion_react_browser_esm.jsx)("span", { className: "count" }, "(+", names.length, ")")));


      }
      return main;
    },
    accessor: types/* QueryObjectColumns.sql_tables */.J.sql_tables,
    Header: (0,TranslatorSingleton.t)('Tables'),
    size: 'xl',
    disableSortBy: true },

  {
    accessor: types/* QueryObjectColumns.user_first_name */.J.user_first_name,
    Header: (0,TranslatorSingleton.t)('User'),
    size: 'xl',
    Cell: ({ row: { original: { user } } }) => user ? `${user.first_name} ${user.last_name}` : '' },

  {
    accessor: types/* QueryObjectColumns.user */.J.user,
    hidden: true },

  {
    accessor: types/* QueryObjectColumns.rows */.J.rows,
    Header: (0,TranslatorSingleton.t)('Rows'),
    size: 'md' },

  {
    accessor: types/* QueryObjectColumns.sql */.J.sql,
    Header: (0,TranslatorSingleton.t)('SQL'),
    Cell: ({ row: { original, id } }) => (0,emotion_react_browser_esm.jsx)("div", { tabIndex: 0, role: "button", onClick: () => setQueryCurrentlyPreviewing(original) },
    (0,emotion_react_browser_esm.jsx)(StyledSyntaxHighlighter, { language: "sql", style: github/* default */.Z },
    (0,utils/* shortenSQL */.IB)(original.sql, SQL_PREVIEW_MAX_LINES))) },



  {
    Header: (0,TranslatorSingleton.t)('Actions'),
    id: 'actions',
    disableSortBy: true,
    Cell: ({ row: { original: { id } } }) => (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: (0,TranslatorSingleton.t)('Open query in SQL Lab'), placement: "bottom" },
    (0,emotion_react_browser_esm.jsx)("a", { href: `/superset/sqllab?queryId=${id}` },
    (0,emotion_react_browser_esm.jsx)(Icons/* default.Full */.Z.Full, { iconColor: theme.colors.grayscale.base }))) }],



  []);
  const filters = (0,react.useMemo)(() => [
  {
    Header: (0,TranslatorSingleton.t)('Database'),
    id: 'database',
    input: 'select',
    operator: ListView/* FilterOperator.relationOneMany */.p.relationOneMany,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchRelated */.tm)('query', 'database', (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching database values: %s', errMsg)))),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('State'),
    id: 'status',
    input: 'select',
    operator: ListView/* FilterOperator.equals */.p.equals,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchDistinct */.wk)('query', 'status', (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching schema values: %s', errMsg)))),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('User'),
    id: 'user',
    input: 'select',
    operator: ListView/* FilterOperator.relationOneMany */.p.relationOneMany,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchRelated */.tm)('query', 'user', (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching user values: %s', errMsg)))),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('Time range'),
    id: 'start_time',
    input: 'datetime_range',
    operator: ListView/* FilterOperator.between */.p.between },

  {
    Header: (0,TranslatorSingleton.t)('Search by query text'),
    id: 'sql',
    input: 'search',
    operator: ListView/* FilterOperator.contains */.p.contains }],

  [addDangerToast]);
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(SubMenu/* default */.Z, menuData),
  queryCurrentlyPreviewing && (0,emotion_react_browser_esm.jsx)(query_QueryPreviewModal, { onHide: () => setQueryCurrentlyPreviewing(undefined), query: queryCurrentlyPreviewing, queries: queries, fetchData: handleQueryPreview, openInSqlLab: (id) => window.location.assign(`/superset/sqllab?queryId=${id}`), show: true }),
  (0,emotion_react_browser_esm.jsx)(TopAlignedListView, { className: "query-history-list-view", columns: columns, count: queryCount, data: queries, fetchData: fetchData, filters: filters, initialSort: initialSort, loading: loading, pageSize: PAGE_SIZE, highlightRowId: queryCurrentlyPreviewing == null ? void 0 : queryCurrentlyPreviewing.id }));

}
/* harmony default export */ const query_QueryList = ((0,withToasts/* default */.Z)(QueryList));

/***/ })

}]);