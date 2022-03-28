"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[6962],{

/***/ 46977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ EmptyWrapperType),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18446);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60650);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79521);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82191);
/* harmony import */ var src_components_dataViewCommon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4664);
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






const DEFAULT_PAGE_SIZE = 10;
var EmptyWrapperType;
(function (EmptyWrapperType) {
  EmptyWrapperType["Default"] = "Default";
  EmptyWrapperType["Small"] = "Small";
})(EmptyWrapperType || (EmptyWrapperType = {}));
const EmptyWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  margin: ${({ theme }) => theme.gridUnit * 40}px 0;
`;
const TableViewStyles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  ${({ scrollTable, theme }) => scrollTable &&
`
    flex: 1 1 auto;
    margin-bottom: ${theme.gridUnit * 4}px;
    overflow: auto;
  `}

  .table-row {
    ${({ theme, small }) => !small && `height: ${theme.gridUnit * 11 - 1}px;`}

    .table-cell {
      ${({ theme, small }) => small &&
`
        padding-top: ${theme.gridUnit + 1}px;
        padding-bottom: ${theme.gridUnit + 1}px;
        line-height: 1.45;
      `}
    }
  }

  th[role='columnheader'] {
    z-index: 1;
    border-bottom: ${({ theme }) => `${theme.gridUnit - 2}px solid ${theme.colors.grayscale.light2}`};
    ${({ small }) => small && `padding-bottom: 0;`}
  }
`;
const PaginationStyles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grayscale.light5};

  ${({ isPaginationSticky }) => isPaginationSticky &&
`
        position: sticky;
        bottom: 0;
        left: 0;
    `};

  .row-count-container {
    margin-top: ${({ theme }) => theme.gridUnit * 2}px;
    color: ${({ theme }) => theme.colors.grayscale.base};
  }
`;
const TableView = ({ columns, data, pageSize: initialPageSize, totalCount = data.length, initialPageIndex, initialSortBy = [], loading = false, withPagination = true, emptyWrapperType = EmptyWrapperType.Default, noDataText, showRowCount = true, serverPagination = false, onServerPagination = () => {}, ...props }) => {
  const initialState = {
    pageSize: initialPageSize != null ? initialPageSize : DEFAULT_PAGE_SIZE,
    pageIndex: initialPageIndex != null ? initialPageIndex : 0,
    sortBy: initialSortBy };

  const { getTableProps, getTableBodyProps, headerGroups, page, rows, prepareRow, pageCount, gotoPage, state: { pageIndex, pageSize, sortBy } } = (0,react_table__WEBPACK_IMPORTED_MODULE_2__.useTable)({
    columns,
    data,
    initialState,
    manualPagination: serverPagination,
    manualSortBy: serverPagination,
    pageCount: Math.ceil(totalCount / initialState.pageSize) },
  react_table__WEBPACK_IMPORTED_MODULE_2__.useFilters, react_table__WEBPACK_IMPORTED_MODULE_2__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_2__.usePagination);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (serverPagination && pageIndex !== initialState.pageIndex) {
      onServerPagination({
        pageIndex });

    }
  }, [pageIndex]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (serverPagination && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(sortBy, initialState.sortBy)) {
      onServerPagination({
        pageIndex: 0,
        sortBy });

    }
  }, [sortBy]);
  const content = withPagination ? page : rows;
  let EmptyWrapperComponent;
  switch (emptyWrapperType) {
    case EmptyWrapperType.Small:
      EmptyWrapperComponent = ({ children }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
      break;
    case EmptyWrapperType.Default:
    default:
      EmptyWrapperComponent = ({ children }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(EmptyWrapper, null, children);}

  const isEmpty = !loading && content.length === 0;
  const hasPagination = pageCount > 1 && withPagination;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(TableViewStyles, props,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_components_dataViewCommon__WEBPACK_IMPORTED_MODULE_4__/* .TableCollection */ .J, { getTableProps: getTableProps, getTableBodyProps: getTableBodyProps, prepareRow: prepareRow, headerGroups: headerGroups, rows: content, columns: columns, loading: loading }),
  isEmpty && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(EmptyWrapperComponent, null,
  noDataText ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_3__/* .Empty */ .HY, { image: src_common_components__WEBPACK_IMPORTED_MODULE_3__/* .Empty.PRESENTED_IMAGE_SIMPLE */ .HY.PRESENTED_IMAGE_SIMPLE, description: noDataText }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_3__/* .Empty */ .HY, { image: src_common_components__WEBPACK_IMPORTED_MODULE_3__/* .Empty.PRESENTED_IMAGE_SIMPLE */ .HY.PRESENTED_IMAGE_SIMPLE }))),


  hasPagination && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(PaginationStyles, { className: "pagination-container", isPaginationSticky: props.isPaginationSticky },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_components_dataViewCommon__WEBPACK_IMPORTED_MODULE_4__/* .Pagination */ .t, { totalPages: pageCount || 0, currentPage: pageCount ? pageIndex + 1 : 0, onChange: (p) => gotoPage(p - 1), hideFirstAndLastPageLinks: true }),
  showRowCount && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", { className: "row-count-container" },
  !loading &&
  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__.t)('%s-%s of %s', pageSize * pageIndex + (page.length && 1), pageSize * pageIndex + page.length, totalCount))));



};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(TableView));

/***/ }),

/***/ 76962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* reexport safe */ _TableView__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "Z": () => (/* reexport safe */ _TableView__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _TableView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46977);
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

/***/ 4664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* reexport */ dataViewCommon_Pagination),
  "J": () => (/* reexport */ TableCollection)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/components/Pagination/Next.tsx
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


function Next({ disabled, onClick }) {
  return (0,emotion_react_browser_esm.jsx)("li", { className: classnames_default()({ disabled }) },
  (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: disabled ? -1 : 0, onClick: (e) => {
      e.preventDefault();
      if (!disabled)
      onClick(e);
    } }, "\xBB"));



}
;// CONCATENATED MODULE: ./src/components/Pagination/Prev.tsx
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


function Prev({ disabled, onClick }) {
  return (0,emotion_react_browser_esm.jsx)("li", { className: classnames_default()({ disabled }) },
  (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: disabled ? -1 : 0, onClick: (e) => {
      e.preventDefault();
      if (!disabled)
      onClick(e);
    } }, "\xAB"));



}
;// CONCATENATED MODULE: ./src/components/Pagination/Item.tsx
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


function Item({ active, children, onClick }) {
  return (0,emotion_react_browser_esm.jsx)("li", { className: classnames_default()({ active }) },
  (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: active ? -1 : 0, onClick: (e) => {
      e.preventDefault();
      if (!active)
      onClick(e);
    } },
  children));


}
;// CONCATENATED MODULE: ./src/components/Pagination/Ellipsis.tsx
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


function Ellipsis({ disabled, onClick }) {
  return (0,emotion_react_browser_esm.jsx)("li", { className: classnames_default()({ disabled }) },
  (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: disabled ? -1 : 0, onClick: (e) => {
      e.preventDefault();
      if (!disabled)
      onClick(e);
    } }, "\u2026"));



}
;// CONCATENATED MODULE: ./src/components/Pagination/index.tsx
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






const PaginationList = style/* styled.ul */.iK.ul`
  display: inline-block;
  margin: 16px 0;
  padding: 0;

  li {
    display: inline;
    margin: 0 4px;

    span {
      padding: 8px 12px;
      text-decoration: none;
      background-color: ${({ theme }) => theme.colors.grayscale.light5};
      border-radius: ${({ theme }) => theme.borderRadius}px;

      &:hover,
      &:focus {
        z-index: 2;
        color: ${({ theme }) => theme.colors.grayscale.dark1};
        background-color: ${({ theme }) => theme.colors.grayscale.light3};
      }
    }

    &.disabled {
      span {
        background-color: transparent;
        cursor: default;

        &:focus {
          outline: none;
        }
      }
    }
    &.active {
      span {
        z-index: 3;
        color: ${({ theme }) => theme.colors.grayscale.light5};
        cursor: default;
        background-color: ${({ theme }) => theme.colors.primary.base};

        &:focus {
          outline: none;
        }
      }
    }
  }
`;
function Pagination({ children }) {
  return (0,emotion_react_browser_esm.jsx)(PaginationList, { role: "navigation" }, children);
}
Pagination.Next = Next;
Pagination.Prev = Prev;
Pagination.Item = Item;
Pagination.Ellipsis = Ellipsis;
/* harmony default export */ const components_Pagination = (Pagination);
// EXTERNAL MODULE: ./node_modules/react-ultimate-pagination/lib/react-ultimate-pagination.js
var react_ultimate_pagination = __webpack_require__(52630);
;// CONCATENATED MODULE: ./src/components/dataViewCommon/Pagination.tsx
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



const ListViewPagination = (0,react_ultimate_pagination/* createUltimatePagination */.YM)({
  WrapperComponent: components_Pagination,
  itemTypeToComponent: {
    [react_ultimate_pagination/* ITEM_TYPES.PAGE */.iB.PAGE]: ({ value, isActive, onClick }) => (0,emotion_react_browser_esm.jsx)(components_Pagination.Item, { active: isActive, onClick: onClick },
    value),

    [react_ultimate_pagination/* ITEM_TYPES.ELLIPSIS */.iB.ELLIPSIS]: ({ isActive, onClick }) => (0,emotion_react_browser_esm.jsx)(components_Pagination.Ellipsis, { disabled: isActive, onClick: onClick }),
    [react_ultimate_pagination/* ITEM_TYPES.PREVIOUS_PAGE_LINK */.iB.PREVIOUS_PAGE_LINK]: ({ isActive, onClick }) => (0,emotion_react_browser_esm.jsx)(components_Pagination.Prev, { disabled: isActive, onClick: onClick }),
    [react_ultimate_pagination/* ITEM_TYPES.NEXT_PAGE_LINK */.iB.NEXT_PAGE_LINK]: ({ isActive, onClick }) => (0,emotion_react_browser_esm.jsx)(components_Pagination.Next, { disabled: isActive, onClick: onClick }),
    [react_ultimate_pagination/* ITEM_TYPES.FIRST_PAGE_LINK */.iB.FIRST_PAGE_LINK]: () => null,
    [react_ultimate_pagination/* ITEM_TYPES.LAST_PAGE_LINK */.iB.LAST_PAGE_LINK]: () => null } });


/* harmony default export */ const dataViewCommon_Pagination = (ListViewPagination);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
;// CONCATENATED MODULE: ./src/components/dataViewCommon/TableCollection.tsx
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




const Table = style/* styled.table */.iK.table`
  background-color: ${({ theme }) => theme.colors.grayscale.light5};
  border-collapse: separate;
  border-radius: ${({ theme }) => theme.borderRadius}px;

  thead > tr > th {
    border: 0;
  }

  tbody {
    tr:first-of-type > td {
      border-top: 0;
    }
  }
  th {
    background: ${({ theme }) => theme.colors.grayscale.light5};
    position: sticky;
    top: 0;

    &:first-of-type {
      padding-left: ${({ theme }) => theme.gridUnit * 4}px;
    }

    &.xs {
      min-width: 25px;
    }
    &.sm {
      min-width: 50px;
    }
    &.md {
      min-width: 75px;
    }
    &.lg {
      min-width: 100px;
    }
    &.xl {
      min-width: 150px;
    }
    &.xxl {
      min-width: 200px;
    }

    span {
      white-space: nowrap;
      display: flex;
      align-items: center;
      line-height: 2;
    }

    svg {
      display: inline-block;
      position: relative;
    }
  }

  td {
    &.xs {
      width: 25px;
    }
    &.sm {
      width: 50px;
    }
    &.md {
      width: 75px;
    }
    &.lg {
      width: 100px;
    }
    &.xl {
      width: 150px;
    }
    &.xxl {
      width: 200px;
    }
  }

  .table-cell-loader {
    position: relative;

    .loading-bar {
      background-color: ${({ theme }) => theme.colors.secondary.light4};
      border-radius: 7px;

      span {
        visibility: hidden;
      }
    }

    &:after {
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      left: 0;
      content: '';
      display: block;
      width: 100%;
      height: 48px;
      background-image: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0) 80%
      );
      background-size: 200px 48px;
      background-position: -100px 0;
      background-repeat: no-repeat;
      animation: loading-shimmer 1s infinite;
    }
  }

  .actions {
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
  }

  .table-row {
    .actions {
      opacity: 0;
      font-size: ${({ theme }) => theme.typography.sizes.xl}px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary.light5};

      .actions {
        opacity: 1;
        transition: opacity ease-in ${({ theme }) => theme.transitionTiming}s;
      }
    }
  }

  .table-row-selected {
    background-color: ${({ theme }) => theme.colors.secondary.light4};

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary.light4};
    }
  }

  .table-cell {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 320px;
    line-height: 1;
    vertical-align: middle;
    &:first-of-type {
      padding-left: ${({ theme }) => theme.gridUnit * 4}px;
    }
  }

  @keyframes loading-shimmer {
    40% {
      background-position: 100% 0;
    }

    100% {
      background-position: 100% 0;
    }
  }
`;
Table.displayName = 'table';
/* harmony default export */ const TableCollection = (/*#__PURE__*/react.memo(({ getTableProps, getTableBodyProps, prepareRow, headerGroups, columns, rows, loading, highlightRowId }) => (0,emotion_react_browser_esm.jsx)(Table, extends_default()({}, getTableProps(), { className: "table table-hover" }),
(0,emotion_react_browser_esm.jsx)("thead", null,
headerGroups.map((headerGroup) => (0,emotion_react_browser_esm.jsx)("tr", headerGroup.getHeaderGroupProps(),
headerGroup.headers.map((column) => {
  let sortIcon = (0,emotion_react_browser_esm.jsx)(Icons/* default.Sort */.Z.Sort, null);
  if (column.isSorted && column.isSortedDesc) {
    sortIcon = (0,emotion_react_browser_esm.jsx)(Icons/* default.SortDesc */.Z.SortDesc, null);
  } else
  if (column.isSorted && !column.isSortedDesc) {
    sortIcon = (0,emotion_react_browser_esm.jsx)(Icons/* default.SortAsc */.Z.SortAsc, null);
  }
  return column.hidden ? null : (0,emotion_react_browser_esm.jsx)("th", extends_default()({}, column.getHeaderProps(column.canSort ? column.getSortByToggleProps() : {}), { className: classnames_default()({
      [column.size || '']: column.size }) }),

  (0,emotion_react_browser_esm.jsx)("span", null,
  column.render('Header'),
  column.canSort && sortIcon));


})))),


(0,emotion_react_browser_esm.jsx)("tbody", getTableBodyProps(),
loading &&
rows.length === 0 &&
[...new Array(25)].map((_, i) => (0,emotion_react_browser_esm.jsx)("tr", { key: i },
columns.map((column, i2) => {
  if (column.hidden)
  return null;
  return (0,emotion_react_browser_esm.jsx)("td", { key: i2, className: classnames_default()('table-cell', {
      'table-cell-loader': loading,
      [column.size || '']: column.size }) },

  (0,emotion_react_browser_esm.jsx)("span", { className: "loading-bar", role: "progressbar" },
  (0,emotion_react_browser_esm.jsx)("span", null, "LOADING")));


}))),

rows.length > 0 &&
rows.map((row) => {
  prepareRow(row);
  // @ts-ignore
  const rowId = row.original.id;
  return (0,emotion_react_browser_esm.jsx)("tr", extends_default()({}, row.getRowProps(), { className: classnames_default()('table-row', {
      'table-row-selected': row.isSelected ||
      typeof rowId !== 'undefined' && rowId === highlightRowId }) }),

  row.cells.map((cell) => {
    if (cell.column.hidden)
    return null;
    const columnCellProps = cell.column.cellProps || {};
    return (0,emotion_react_browser_esm.jsx)("td", extends_default()({ className: classnames_default()('table-cell', {
        'table-cell-loader': loading,
        [cell.column.size || '']: cell.column.size }) },
    cell.getCellProps(), columnCellProps),
    (0,emotion_react_browser_esm.jsx)("span", { className: classnames_default()({ 'loading-bar': loading }), role: loading ? 'progressbar' : undefined },
    (0,emotion_react_browser_esm.jsx)("span", null, cell.render('Cell'))));


  }));

})))));
;// CONCATENATED MODULE: ./src/components/dataViewCommon/index.ts
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



/***/ })

}]);