"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[9678],{

/***/ 49576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37840);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38097);
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



const CheckboxLabel = _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .styled.label */ .iK.label`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
`;
const CheckboxHalf = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .iK)(src_components_Icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CheckboxHalf */ .Z.CheckboxHalf)`
  color: ${({ theme }) => theme.colors.primary.base};
  cursor: pointer;
`;
const CheckboxOff = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .iK)(src_components_Icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CheckboxOff */ .Z.CheckboxOff)`
  color: ${({ theme }) => theme.colors.grayscale.base};
  cursor: pointer;
`;
const CheckboxOn = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .iK)(src_components_Icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CheckboxOn */ .Z.CheckboxOn)`
  color: ${({ theme }) => theme.colors.primary.base};
  cursor: pointer;
`;
const HiddenInput = _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .styled.input */ .iK.input`
  &[type='checkbox'] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    left: 3px;
    margin: 0;
    top: 4px;
  }
`;
const InputContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .styled.div */ .iK.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
`;
const IndeterminateCheckbox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({ indeterminate, id, checked, onChange, title = '', labelText = '' }, ref) => {
  const defaultRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const resolvedRef = ref || defaultRef;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(InputContainer, null,
  indeterminate && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(CheckboxHalf, null),
  !indeterminate && checked && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(CheckboxOn, null),
  !indeterminate && !checked && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(CheckboxOff, null),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(HiddenInput, { name: id, id: id, type: "checkbox", ref: resolvedRef, checked: checked, onChange: onChange })),

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(CheckboxLabel, { title: title, htmlFor: id },
  labelText));


});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndeterminateCheckbox);

/***/ }),

/***/ 9678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* reexport */ FilterOperator),
  "Z": () => (/* reexport */ ListView_ListView)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var components = __webpack_require__(82191);
// EXTERNAL MODULE: ./src/components/Alert/index.tsx
var Alert = __webpack_require__(29487);
;// CONCATENATED MODULE: ./src/assets/images/empty.svg
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgEmpty(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: 119,
    height: 76,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M83.195 1.366L103 24v38a4 4 0 01-4 4H20a4 4 0 01-4-4V24L35.805 1.366A4 4 0 0138.815 0h41.37a4 4 0 013.01 1.366zM101 26v36a2 2 0 01-2 2H20a2 2 0 01-2-2V26h17.25A4.75 4.75 0 0140 30.75a6.75 6.75 0 006.75 6.75h25.5A6.75 6.75 0 0079 30.75 4.75 4.75 0 0183.75 26H101zm-.658-2L81.69 2.683A2 2 0 0080.185 2h-41.37a2 2 0 00-1.505.683L18.657 24H35.25A6.75 6.75 0 0142 30.75a4.75 4.75 0 004.75 4.75h25.5A4.75 4.75 0 0077 30.75 6.75 6.75 0 0183.75 24h16.592z",
    fill: "#D1D1D1"
  })), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M16 53.29C6.074 55.7 0 58.94 0 62.5 0 69.956 26.64 76 59.5 76S119 69.956 119 62.5c0-3.56-6.074-6.799-16-9.21V62a4 4 0 01-4 4H20a4 4 0 01-4-4v-8.71z",
    fill: "#F2F2F2"
  })));
}

/* harmony default export */ const empty = (SvgEmpty);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/components/IndeterminateCheckbox/index.tsx
var IndeterminateCheckbox = __webpack_require__(49576);
// EXTERNAL MODULE: ./src/components/dataViewCommon/index.ts + 7 modules
var dataViewCommon = __webpack_require__(4664);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/components/ListView/CardCollection.tsx
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



const CardContainer = style/* styled.div */.iK.div`
  ${({ theme, showThumbnails }) => `
    display: grid;
    grid-gap: ${theme.gridUnit * 12}px ${theme.gridUnit * 4}px;
    grid-template-columns: repeat(auto-fit, 300px);
    margin-top: ${theme.gridUnit * -6}px;
    padding: ${showThumbnails ?
`${theme.gridUnit * 8 + 3}px ${theme.gridUnit * 9}px` :
`${theme.gridUnit * 8 + 1}px ${theme.gridUnit * 9}px`};
  `}
`;
const CardWrapper = style/* styled.div */.iK.div`
  border: 2px solid transparent;
  &.card-selected {
    border: 2px solid ${({ theme }) => theme.colors.primary.base};
  }
  &.bulk-select {
    cursor: pointer;
  }
`;
function CardCollection({ bulkSelectEnabled, loading, prepareRow, renderCard, rows, showThumbnails }) {
  function handleClick(event, toggleRowSelected) {
    if (bulkSelectEnabled) {
      event.preventDefault();
      event.stopPropagation();
      toggleRowSelected();
    }
  }
  if (!renderCard)
  return null;
  return (0,emotion_react_browser_esm.jsx)(CardContainer, { showThumbnails: showThumbnails },
  loading &&
  rows.length === 0 &&
  [...new Array(25)].map((e, i) => (0,emotion_react_browser_esm.jsx)("div", { key: i }, renderCard({ loading }))),
  rows.length > 0 &&
  rows.map((row) => {
    if (!renderCard)
    return null;
    prepareRow(row);
    return (0,emotion_react_browser_esm.jsx)(CardWrapper, { className: classnames_default()({
        'card-selected': bulkSelectEnabled && row.isSelected,
        'bulk-select': bulkSelectEnabled }),
      key: row.id, onClick: (e) => handleClick(e, row.toggleRowSelected), role: "none" },
    renderCard({ ...row.original, loading }));

  }));

}
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js + 2 modules
var emotion_element_99289b21_browser_esm = __webpack_require__(68135);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/react-table/index.js
var react_table = __webpack_require__(79521);
// EXTERNAL MODULE: ./node_modules/use-query-params/esm/index.js + 16 modules
var esm = __webpack_require__(35755);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
;// CONCATENATED MODULE: ./src/components/ListView/utils.ts
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





// Define custom RisonParam for proper encoding/decoding; note that
// plus symbols should be encoded to avoid being converted into a space
const RisonParam = {
  encode: (data) => data === undefined ? undefined : rison_default().encode(data).replace(/\+/g, '%2B'),
  decode: (dataStr) => dataStr === undefined || Array.isArray(dataStr) ?
  undefined :
  rison_default().decode(dataStr) };

const SELECT_WIDTH = 200;
class ListViewError extends Error {constructor(...args) {super(...args);this.
    name = 'ListViewError';}}

// removes element from a list, returns new list
function removeFromList(list, index) {
  return list.filter((_, i) => index !== i);
}
// apply update to elements of object list, returns new list
function updateInList(list, index, update) {
  const element = list.find((_, i) => index === i);
  return [
  ...list.slice(0, index),
  { ...element, ...update },
  ...list.slice(index + 1)];

}
function mergeCreateFilterValues(list, updateObj) {
  return list.map(({ id, urlDisplay, operator }) => {
    const currentFilterId = urlDisplay || id;
    const update = updateObj[currentFilterId];
    return { id, urlDisplay, operator, value: update };
  });
}
// convert filters from UI objects to data objects
function convertFilters(fts) {
  return fts.
  filter((f) => !(typeof f.value === 'undefined' ||
  Array.isArray(f.value) && !f.value.length)).
  map(({ value, operator, id }) => {
    // handle between filter using 2 api filters
    if (operator === 'between' && Array.isArray(value)) {
      return [
      {
        value: value[0],
        operator: 'gt',
        id },

      {
        value: value[1],
        operator: 'lt',
        id }];


    }
    return {
      value,
      operator,
      id };

  }).
  flat();
}
// convertFilters but to handle new decoded rison format
function convertFiltersRison(filterObj, list) {
  const filters = [];
  const refs = {};
  Object.keys(filterObj).forEach((id) => {
    const filter = {
      id,
      value: filterObj[id]
      // operator: filterObj[id][1], // TODO: can probably get rid of this
    };
    refs[id] = filter;
    filters.push(filter);
  });
  // Add operators from filter list
  list.forEach((value) => {
    const currentFilterId = value.urlDisplay || value.id;
    const filter = refs[currentFilterId];
    if (filter) {
      filter.operator = value.operator;
      filter.id = value.id;
    }
  });
  return filters;
}
function extractInputValue(inputType, event) {
  if (!inputType || inputType === 'text') {
    return event.currentTarget.value;
  }
  if (inputType === 'checkbox') {
    return event.currentTarget.checked;
  }
  return null;
}
function useListViewState({ fetchData, columns, data, count, initialPageSize, initialFilters = [], initialSort = [], bulkSelectMode = false, bulkSelectColumnConfig, renderCard = false, defaultViewMode = 'card' }) {
  const [query, setQuery] = (0,esm/* useQueryParams */.Kx)({
    filters: RisonParam,
    pageIndex: esm/* NumberParam */.yz,
    sortColumn: esm/* StringParam */.Zp,
    sortOrder: esm/* StringParam */.Zp,
    viewMode: esm/* StringParam */.Zp });

  const initialSortBy = (0,react.useMemo)(() => query.sortColumn && query.sortOrder ?
  [{ id: query.sortColumn, desc: query.sortOrder === 'desc' }] :
  initialSort, [query.sortColumn, query.sortOrder]);
  const initialState = {
    filters: query.filters ?
    convertFiltersRison(query.filters, initialFilters) :
    [],
    pageIndex: query.pageIndex || 0,
    pageSize: initialPageSize,
    sortBy: initialSortBy };

  const [viewMode, setViewMode] = (0,react.useState)(query.viewMode || (
  renderCard ? defaultViewMode : 'table'));
  const columnsWithSelect = (0,react.useMemo)(() => {
    // add exact filter type so filters with falsey values are not filtered out
    const columnsWithFilter = columns.map((f) => ({ ...f, filter: 'exact' }));
    return bulkSelectMode ?
    [bulkSelectColumnConfig, ...columnsWithFilter] :
    columnsWithFilter;
  }, [bulkSelectMode, columns]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, canPreviousPage, canNextPage, pageCount, gotoPage, setAllFilters, selectedFlatRows, toggleAllRowsSelected, state: { pageIndex, pageSize, sortBy, filters } } = (0,react_table.useTable)({
    columns: columnsWithSelect,
    count,
    data,
    disableFilters: true,
    disableSortRemove: true,
    initialState,
    manualFilters: true,
    manualPagination: true,
    manualSortBy: true,
    autoResetFilters: false,
    pageCount: Math.ceil(count / initialPageSize) },
  react_table.useFilters, react_table.useSortBy, react_table.usePagination, react_table.useRowState, react_table.useRowSelect);
  const [internalFilters, setInternalFilters] = (0,react.useState)(query.filters && initialFilters.length ?
  mergeCreateFilterValues(initialFilters, query.filters) :
  []);
  (0,react.useEffect)(() => {
    if (initialFilters.length) {
      setInternalFilters(mergeCreateFilterValues(initialFilters, query.filters ? query.filters : {}));
    }
  }, [initialFilters]);
  (0,react.useEffect)(() => {
    // From internalFilters, produce a simplified obj
    const filterObj = {};
    internalFilters.forEach((filter) => {
      if (filter.value !== undefined && (
      typeof filter.value !== 'string' || filter.value.length > 0)) {
        const currentFilterId = filter.urlDisplay || filter.id;
        filterObj[currentFilterId] = filter.value;
      }
    });
    const queryParams = {
      filters: Object.keys(filterObj).length ? filterObj : undefined,
      pageIndex };

    if (sortBy[0]) {
      queryParams.sortColumn = sortBy[0].id;
      queryParams.sortOrder = sortBy[0].desc ? 'desc' : 'asc';
    }
    if (renderCard) {
      queryParams.viewMode = viewMode;
    }
    const method = typeof query.pageIndex !== 'undefined' &&
    queryParams.pageIndex !== query.pageIndex ?
    'push' :
    'replace';
    setQuery(queryParams, method);
    fetchData({ pageIndex, pageSize, sortBy, filters });
  }, [fetchData, pageIndex, pageSize, sortBy, filters]);
  (0,react.useEffect)(() => {
    if (!isEqual_default()(initialState.pageIndex, pageIndex)) {
      gotoPage(initialState.pageIndex);
    }
  }, [query]);
  const applyFilterValue = (index, value) => {
    setInternalFilters((currentInternalFilters) => {
      // skip redunundant updates
      if (currentInternalFilters[index].value === value) {
        return currentInternalFilters;
      }
      const update = { ...currentInternalFilters[index], value };
      const updatedFilters = updateInList(currentInternalFilters, index, update);
      setAllFilters(convertFilters(updatedFilters));
      gotoPage(0); // clear pagination on filter
      return updatedFilters;
    });
  };
  return {
    canNextPage,
    canPreviousPage,
    getTableBodyProps,
    getTableProps,
    gotoPage,
    headerGroups,
    pageCount,
    prepareRow,
    rows,
    selectedFlatRows,
    setAllFilters,
    state: { pageIndex, pageSize, sortBy, filters, internalFilters, viewMode },
    toggleAllRowsSelected,
    applyFilterValue,
    setViewMode };

}
const filterSelectStyles = {
  container: (provider, { getValue }) => ({
    ...provider,
    // dynamic width based on label string length
    minWidth: `${Math.min(12, Math.max(5, 3 + getValue()[0].label.length / 2))}em` }),

  control: (provider) => ({
    ...provider,
    borderWidth: 0,
    boxShadow: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent' }) };
// EXTERNAL MODULE: ./src/components/Form/index.tsx + 1 modules
var Form = __webpack_require__(49238);
;// CONCATENATED MODULE: ./src/components/ListView/Filters/Search.tsx
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






const Container = style/* styled.div */.iK.div`
  width: ${SELECT_WIDTH}px;
`;
const SearchIcon = (0,style/* styled */.iK)(Icons/* default.Search */.Z.Search)`
  color: ${({ theme }) => theme.colors.grayscale.light1};
`;
const StyledInput = (0,style/* styled */.iK)(components/* AntdInput */.oc)`
  border-radius: ${({ theme }) => theme.gridUnit}px;
`;
function SearchFilter({ Header, name, initialValue, onSubmit }) {
  const [value, setValue] = (0,react.useState)(initialValue || '');
  const handleSubmit = () => {
    if (value) {
      // encode plus signs to prevent them from being converted into a space
      onSubmit(value.trim().replace(/\+/g, '%2B'));
    }
  };
  const handleChange = (e) => {
    setValue(e.currentTarget.value);
    if (e.currentTarget.value === '') {
      onSubmit('');
    }
  };
  return (0,emotion_react_browser_esm.jsx)(Container, null,
  (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, null, Header),
  (0,emotion_react_browser_esm.jsx)(StyledInput, { allowClear: true, placeholder: (0,TranslatorSingleton.t)('Type a value'), name: name, value: value, onChange: handleChange, onPressEnter: handleSubmit, onBlur: handleSubmit, prefix: (0,emotion_react_browser_esm.jsx)(SearchIcon, { iconSize: "l" }) }));

}
// EXTERNAL MODULE: ./src/components/index.ts + 1 modules
var src_components = __webpack_require__(33346);
;// CONCATENATED MODULE: ./src/components/ListView/Filters/Base.ts


const FilterContainer = style/* styled.div */.iK.div`
  display: inline-flex;
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  align-items: center;
  width: ${SELECT_WIDTH}px;
`;
;// CONCATENATED MODULE: ./src/components/ListView/Filters/Select.tsx
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





function SelectFilter({ Header, name, fetchSelects, initialValue, onSelect, selects = [] }) {
  const [selectedOption, setSelectedOption] = (0,react.useState)(initialValue);
  const onChange = (selected) => {
    onSelect(selected ? { label: selected.label, value: selected.value } : undefined);
    setSelectedOption(selected);
  };
  const onClear = () => {
    onSelect(undefined);
    setSelectedOption(undefined);
  };
  const fetchAndFormatSelects = (0,react.useMemo)(() => async (inputValue, page, pageSize) => {
    if (fetchSelects) {
      const selectValues = await fetchSelects(inputValue, page, pageSize);
      return {
        data: selectValues.data,
        totalCount: selectValues.totalCount };

    }
    return {
      data: [],
      totalCount: 0 };

  }, [fetchSelects]);
  return (0,emotion_react_browser_esm.jsx)(FilterContainer, null,
  (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { allowClear: true, ariaLabel: typeof Header === 'string' ? Header : name || (0,TranslatorSingleton.t)('Filter'), labelInValue: true, header: (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, null, Header), onChange: onChange, onClear: onClear, options: fetchSelects ? fetchAndFormatSelects : selects, placeholder: (0,TranslatorSingleton.t)('Select or type a value'), showSearch: true, value: selectedOption }));

}
/* harmony default export */ const Select = (SelectFilter);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/components/DatePicker/index.tsx
var DatePicker = __webpack_require__(62276);
;// CONCATENATED MODULE: ./src/components/ListView/Filters/DateRange.tsx
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





const RangeFilterContainer = style/* styled.div */.iK.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 360px;
`;
function DateRangeFilter({ Header, initialValue, onSubmit }) {
  const [value, setValue] = (0,react.useState)(initialValue != null ? initialValue : null);
  const momentValue = (0,react.useMemo)(() => {
    if (!value || Array.isArray(value) && !value.length)
    return null;
    return [moment_default()(value[0]), moment_default()(value[1])];
  }, [value]);
  return (0,emotion_react_browser_esm.jsx)(RangeFilterContainer, null,
  (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, null, Header),
  (0,emotion_react_browser_esm.jsx)(DatePicker/* RangePicker */.S, { showTime: true, value: momentValue, onChange: (momentRange) => {var _momentRange$0$valueO, _momentRange$, _momentRange$1$valueO, _momentRange$2;
      if (!momentRange) {
        setValue(null);
        onSubmit([]);
        return;
      }
      const changeValue = [(_momentRange$0$valueO = (_momentRange$ =
      momentRange[0]) == null ? void 0 : _momentRange$.valueOf()) != null ? _momentRange$0$valueO : 0, (_momentRange$1$valueO = (_momentRange$2 =
      momentRange[1]) == null ? void 0 : _momentRange$2.valueOf()) != null ? _momentRange$1$valueO : 0];

      setValue(changeValue);
      onSubmit(changeValue);
    } }));

}
;// CONCATENATED MODULE: ./src/components/ListView/Filters/index.tsx
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





function UIFilters({ filters, internalFilters = [], updateFilterValue }) {
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  filters.map(({ Header, fetchSelects, id, input, paginate, selects }, index) => {
    const initialValue = internalFilters[index] && internalFilters[index].value;
    if (input === 'select') {
      return (0,emotion_react_browser_esm.jsx)(Select, { Header: Header, fetchSelects: fetchSelects, initialValue: initialValue, key: id, name: id, onSelect: (option) => updateFilterValue(index, option), paginate: paginate, selects: selects });
    }
    if (input === 'search' && typeof Header === 'string') {
      return (0,emotion_react_browser_esm.jsx)(SearchFilter, { Header: Header, initialValue: initialValue, key: id, name: id, onSubmit: (value) => updateFilterValue(index, value) });
    }
    if (input === 'datetime_range') {
      return (0,emotion_react_browser_esm.jsx)(DateRangeFilter, { Header: Header, initialValue: initialValue, key: id, name: id, onSubmit: (value) => updateFilterValue(index, value) });
    }
    return null;
  }));

}
/* harmony default export */ const Filters = ((0,emotion_element_99289b21_browser_esm.b)(UIFilters));
;// CONCATENATED MODULE: ./src/components/ListView/CardSortSelect.tsx
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





const SortContainer = style/* styled.div */.iK.div`
  display: inline-flex;
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  align-items: center;
  text-align: left;
  width: ${SELECT_WIDTH}px;
`;
const CardSortSelect = ({ initialSort, onChange, options, pageIndex, pageSize }) => {
  const defaultSort = initialSort && options.find(({ id }) => id === initialSort[0].id) ||
  options[0];
  const [value, setValue] = (0,react.useState)({
    label: defaultSort.label,
    value: defaultSort.value });

  const formattedOptions = (0,react.useMemo)(() => options.map((option) => ({ label: option.label, value: option.value })), [options]);
  const handleOnChange = (selected) => {
    setValue(selected);
    const originalOption = options.find(({ value }) => value === selected.value);
    if (originalOption) {
      const sortBy = [
      {
        id: originalOption.id,
        desc: originalOption.desc }];


      onChange({ pageIndex, pageSize, sortBy, filters: [] });
    }
  };
  return (0,emotion_react_browser_esm.jsx)(SortContainer, null,
  (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Sort'), header: (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, null, (0,TranslatorSingleton.t)('Sort')), labelInValue: true, onChange: (value) => handleOnChange(value), options: formattedOptions, showSearch: true, value: value }));

};
;// CONCATENATED MODULE: ./src/components/ListView/ListView.tsx
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














const ListViewStyles = style/* styled.div */.iK.div`
  text-align: center;

  .superset-list-view {
    text-align: left;
    border-radius: 4px 0;
    margin: 0 ${({ theme }) => theme.gridUnit * 4}px;

    .header {
      display: flex;
      padding-bottom: ${({ theme }) => theme.gridUnit * 4}px;

      & .controls {
        display: flex;
        flex-wrap: wrap;
        column-gap: ${({ theme }) => theme.gridUnit * 6}px;
        row-gap: ${({ theme }) => theme.gridUnit * 4}px;
      }
    }

    .body.empty table {
      margin-bottom: 0;
    }

    .body {
      overflow-x: auto;
    }

    .ant-empty {
      .ant-empty-image {
        height: auto;
      }
    }
  }

  .pagination-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.gridUnit * 4}px;
  }

  .row-count-container {
    margin-top: ${({ theme }) => theme.gridUnit * 2}px;
    color: ${({ theme }) => theme.colors.grayscale.base};
  }
`;
const BulkSelectWrapper = (0,style/* styled */.iK)(Alert/* default */.Z)`
  border-radius: 0;
  margin-bottom: 0;
  color: #3d3d3d;
  background-color: ${({ theme }) => theme.colors.primary.light4};

  .selectedCopy {
    display: inline-block;
    padding: ${({ theme }) => theme.gridUnit * 2}px 0;
  }

  .deselect-all {
    color: #1985a0;
    margin-left: ${({ theme }) => theme.gridUnit * 4}px;
  }

  .divider {
    margin: ${({ theme: { gridUnit } }) => `${-gridUnit * 2}px 0 ${-gridUnit * 2}px ${gridUnit * 4}px`};
    width: 1px;
    height: ${({ theme }) => theme.gridUnit * 8}px;
    box-shadow: inset -1px 0px 0px #dadada;
    display: inline-flex;
    vertical-align: middle;
    position: relative;
  }

  .ant-alert-close-icon {
    margin-top: ${({ theme }) => theme.gridUnit * 1.5}px;
  }
`;
const bulkSelectColumnConfig = {
  Cell: ({ row }) => (0,emotion_react_browser_esm.jsx)(IndeterminateCheckbox/* default */.Z, extends_default()({}, row.getToggleRowSelectedProps(), { id: row.id })),
  Header: ({ getToggleAllRowsSelectedProps }) => (0,emotion_react_browser_esm.jsx)(IndeterminateCheckbox/* default */.Z, extends_default()({}, getToggleAllRowsSelectedProps(), { id: "header-toggle-all" })),
  id: 'selection',
  size: 'sm' };

const ViewModeContainer = style/* styled.div */.iK.div`
  padding-right: ${({ theme }) => theme.gridUnit * 4}px;
  margin-top: ${({ theme }) => theme.gridUnit * 5 + 1}px;
  display: inline-block;

  .toggle-button {
    display: inline-block;
    border-radius: ${({ theme }) => theme.gridUnit / 2}px;
    padding: ${({ theme }) => theme.gridUnit}px;
    padding-bottom: ${({ theme }) => theme.gridUnit * 0.5}px;

    &:first-of-type {
      margin-right: ${({ theme }) => theme.gridUnit * 2}px;
    }
  }

  .active {
    background-color: ${({ theme }) => theme.colors.grayscale.base};
    svg {
      color: ${({ theme }) => theme.colors.grayscale.light5};
    }
  }
`;
const EmptyWrapper = style/* styled.div */.iK.div`
  padding: ${({ theme }) => theme.gridUnit * 40}px 0;

  &.table {
    background: ${({ theme }) => theme.colors.grayscale.light5};
  }
`;
const ViewModeToggle = ({ mode, setMode }) => (0,emotion_react_browser_esm.jsx)(ViewModeContainer, null,
(0,emotion_react_browser_esm.jsx)("div", { role: "button", tabIndex: 0, onClick: (e) => {
    e.currentTarget.blur();
    setMode('card');
  }, className: classnames_default()('toggle-button', { active: mode === 'card' }) },
(0,emotion_react_browser_esm.jsx)(Icons/* default.CardView */.Z.CardView, null)),

(0,emotion_react_browser_esm.jsx)("div", { role: "button", tabIndex: 0, onClick: (e) => {
    e.currentTarget.blur();
    setMode('table');
  }, className: classnames_default()('toggle-button', { active: mode === 'table' }) },
(0,emotion_react_browser_esm.jsx)(Icons/* default.ListView */.Z.ListView, null)));


function ListView({ columns, data, count, pageSize: initialPageSize, fetchData, loading, initialSort = [], className = '', filters = [], bulkActions = [], bulkSelectEnabled = false, disableBulkSelect = () => {}, renderBulkSelectCopy = (selected) => (0,TranslatorSingleton.t)('%s Selected', selected.length), renderCard, showThumbnails, cardSortSelectOptions, defaultViewMode = 'card', highlightRowId, emptyState = {} }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, pageCount = 1, gotoPage, applyFilterValue, selectedFlatRows, toggleAllRowsSelected, setViewMode, state: { pageIndex, pageSize, internalFilters, viewMode } } = useListViewState({
    bulkSelectColumnConfig,
    bulkSelectMode: bulkSelectEnabled && Boolean(bulkActions.length),
    columns,
    count,
    data,
    fetchData,
    initialPageSize,
    initialSort,
    initialFilters: filters,
    renderCard: Boolean(renderCard),
    defaultViewMode });

  const filterable = Boolean(filters.length);
  if (filterable) {
    const columnAccessors = columns.reduce((acc, col) => ({ ...acc, [col.id || col.accessor]: true }), {});
    filters.forEach((f) => {
      if (!columnAccessors[f.id]) {
        throw new ListViewError(`Invalid filter config, ${f.id} is not present in columns`);
      }
    });
  }
  const cardViewEnabled = Boolean(renderCard);
  (0,react.useEffect)(() => {
    // discard selections if bulk select is disabled
    if (!bulkSelectEnabled)
    toggleAllRowsSelected(false);
  }, [bulkSelectEnabled, toggleAllRowsSelected]);
  return (0,emotion_react_browser_esm.jsx)(ListViewStyles, null,
  (0,emotion_react_browser_esm.jsx)("div", { className: `superset-list-view ${className}` },
  (0,emotion_react_browser_esm.jsx)("div", { className: "header" },
  cardViewEnabled && (0,emotion_react_browser_esm.jsx)(ViewModeToggle, { mode: viewMode, setMode: setViewMode }),
  (0,emotion_react_browser_esm.jsx)("div", { className: "controls" },
  filterable && (0,emotion_react_browser_esm.jsx)(Filters, { filters: filters, internalFilters: internalFilters, updateFilterValue: applyFilterValue }),
  viewMode === 'card' && cardSortSelectOptions && (0,emotion_react_browser_esm.jsx)(CardSortSelect, { initialSort: initialSort, onChange: fetchData, options: cardSortSelectOptions, pageIndex: pageIndex, pageSize: pageSize }))),


  (0,emotion_react_browser_esm.jsx)("div", { className: `body ${rows.length === 0 ? 'empty' : ''}` },
  bulkSelectEnabled && (0,emotion_react_browser_esm.jsx)(BulkSelectWrapper, { type: "info", closable: true, showIcon: false, onClose: disableBulkSelect, message: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)("div", { className: "selectedCopy" },
    renderBulkSelectCopy(selectedFlatRows)),

    Boolean(selectedFlatRows.length) && (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: 0, className: "deselect-all", onClick: () => toggleAllRowsSelected(false) },
    (0,TranslatorSingleton.t)('Deselect all')),

    (0,emotion_react_browser_esm.jsx)("div", { className: "divider" }),
    bulkActions.map((action) => (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { key: action.key, buttonStyle: action.type, cta: true, onClick: () => action.onSelect(selectedFlatRows.map((r) => r.original)) },
    action.name)))) }),



  viewMode === 'card' && (0,emotion_react_browser_esm.jsx)(CardCollection, { bulkSelectEnabled: bulkSelectEnabled, prepareRow: prepareRow, renderCard: renderCard, rows: rows, loading: loading, showThumbnails: showThumbnails }),
  viewMode === 'table' && (0,emotion_react_browser_esm.jsx)(dataViewCommon/* TableCollection */.J, { getTableProps: getTableProps, getTableBodyProps: getTableBodyProps, prepareRow: prepareRow, headerGroups: headerGroups, rows: rows, columns: columns, loading: loading, highlightRowId: highlightRowId }),
  !loading && rows.length === 0 && (0,emotion_react_browser_esm.jsx)(EmptyWrapper, { className: viewMode },
  (0,emotion_react_browser_esm.jsx)(components/* Empty */.HY, { image: (0,emotion_react_browser_esm.jsx)(empty, null), description: emptyState.message || (0,TranslatorSingleton.t)('No Data') },
  emptyState.slot || null)))),





  rows.length > 0 && (0,emotion_react_browser_esm.jsx)("div", { className: "pagination-container" },
  (0,emotion_react_browser_esm.jsx)(dataViewCommon/* Pagination */.t, { totalPages: pageCount || 0, currentPage: pageCount ? pageIndex + 1 : 0, onChange: (p) => gotoPage(p - 1), hideFirstAndLastPageLinks: true }),
  (0,emotion_react_browser_esm.jsx)("div", { className: "row-count-container" },
  !loading &&
  (0,TranslatorSingleton.t)('%s-%s of %s', pageSize * pageIndex + (rows.length && 1), pageSize * pageIndex + rows.length, count))));



}
/* harmony default export */ const ListView_ListView = (ListView);
;// CONCATENATED MODULE: ./src/components/ListView/types.ts
var FilterOperator;
(function (FilterOperator) {
  FilterOperator["startsWith"] = "sw";
  FilterOperator["endsWith"] = "ew";
  FilterOperator["contains"] = "ct";
  FilterOperator["equals"] = "eq";
  FilterOperator["notStartsWith"] = "nsw";
  FilterOperator["notEndsWith"] = "new";
  FilterOperator["notContains"] = "nct";
  FilterOperator["notEquals"] = "neq";
  FilterOperator["greaterThan"] = "gt";
  FilterOperator["lessThan"] = "lt";
  FilterOperator["relationManyMany"] = "rel_m_m";
  FilterOperator["relationOneMany"] = "rel_o_m";
  FilterOperator["titleOrSlug"] = "title_or_slug";
  FilterOperator["nameOrDescription"] = "name_or_description";
  FilterOperator["allText"] = "all_text";
  FilterOperator["chartAllText"] = "chart_all_text";
  FilterOperator["datasetIsNullOrEmpty"] = "dataset_is_null_or_empty";
  FilterOperator["between"] = "between";
  FilterOperator["dashboardIsFav"] = "dashboard_is_favorite";
  FilterOperator["chartIsFav"] = "chart_is_favorite";
  FilterOperator["chartIsCertified"] = "chart_is_certified";
  FilterOperator["dashboardIsCertified"] = "dashboard_is_certified";
})(FilterOperator || (FilterOperator = {}));
;// CONCATENATED MODULE: ./src/components/ListView/index.ts
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