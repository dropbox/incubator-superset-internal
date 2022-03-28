(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[6060],{

/***/ 4459:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(29720)/* .GenIcon */ .w_
module.exports.r = function FaSort (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"}}]})(props);
};


/***/ }),

/***/ 63326:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(29720)/* .GenIcon */ .w_
module.exports.s = function FaSortDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"}}]})(props);
};


/***/ }),

/***/ 6609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(29720)/* .GenIcon */ .w_
module.exports.h = function FaSortUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"}}]})(props);
};


/***/ }),

/***/ 26060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TableChart)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-table/node_modules/d3-array/src/max.js
function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-table/node_modules/d3-array/src/extent.js
/* harmony default export */ function extent(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
}

// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fa/FaSort.js
var FaSort = __webpack_require__(4459);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fa/FaSortDown.js
var FaSortDown = __webpack_require__(63326);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fa/FaSortUp.js
var FaSortUp = __webpack_require__(6609);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/types/QueryResponse.js
var QueryResponse = __webpack_require__(23274);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/TimeFormatterRegistrySingleton.js + 5 modules
var TimeFormatterRegistrySingleton = __webpack_require__(14826);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/constants.js
var constants = __webpack_require__(92134);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/ensureIsArray.js
var ensureIsArray = __webpack_require__(86852);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-table/index.js
var react_table = __webpack_require__(79521);
// EXTERNAL MODULE: ./node_modules/match-sorter/dist/match-sorter.esm.js
var match_sorter_esm = __webpack_require__(90233);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(35666);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/DataTable/utils/useAsyncState.js
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

 // useAsyncDebounce in dist build of `react-table` requires regeneratorRuntime


/**
 * Hook useState to allow always return latest initialValue
 */

function useAsyncState(initialValue, callback, wait = 200) {
  const [value, setValue] = (0,react.useState)(initialValue);
  const valueRef = (0,react.useRef)(initialValue);
  const onChange = (0,react_table.useAsyncDebounce)(callback, wait); // sync updated initialValue

  if (valueRef.current !== initialValue) {
    valueRef.current = initialValue;

    if (value !== initialValue) {
      setValue(initialValue);
    }
  }

  const setBoth = newValue => {
    setValue(newValue);
    onChange(newValue);
  };

  return [value, setBoth];
}
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/DataTable/components/GlobalFilter.js


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




function DefaultSearchInput({
  count,
  value,
  onChange
}) {
  return (0,emotion_react_browser_esm.jsx)("span", {
    className: "dt-global-filter"
  }, "Search", ' ', (0,emotion_react_browser_esm.jsx)("input", {
    className: "form-control input-sm",
    placeholder: `${count} records...`,
    value: value,
    onChange: onChange
  }));
}

DefaultSearchInput.propTypes = {
  count: (prop_types_default()).number.isRequired,
  value: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const GlobalFilter = (react.memo(function GlobalFilter({
  preGlobalFilteredRows,
  filterValue = '',
  searchInput,
  setGlobalFilter
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useAsyncState(filterValue, newValue => {
    setGlobalFilter(newValue || undefined);
  }, 200);
  const SearchInput = searchInput || DefaultSearchInput;
  return (0,emotion_react_browser_esm.jsx)(SearchInput, {
    count: count,
    value: value,
    onChange: e => {
      const target = e.target;
      e.preventDefault();
      setValue(target.value);
    }
  });
}));
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/utils/selectOptions.js
var selectOptions = __webpack_require__(24610);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/DataTable/components/SelectPageSize.js


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




function DefaultSelectRenderer({
  current,
  options,
  onChange
}) {
  return (0,emotion_react_browser_esm.jsx)("span", {
    className: "dt-select-page-size form-inline"
  }, "Show", ' ', (0,emotion_react_browser_esm.jsx)("select", {
    className: "form-control input-sm",
    value: current,
    onBlur: () => {},
    onChange: e => {
      onChange(Number(e.target.value));
    }
  }, options.map(option => {
    const [size, text] = Array.isArray(option) ? option : [option, option];
    return (0,emotion_react_browser_esm.jsx)("option", {
      key: size,
      value: size
    }, text);
  })), ' ', "entries");
}

DefaultSelectRenderer.propTypes = {
  current: (prop_types_default()).number.isRequired,
  options: (prop_types_default()).array.isRequired,
  onChange: (prop_types_default()).func.isRequired
};

function getOptionValue(x) {
  return Array.isArray(x) ? x[0] : x;
}

/* harmony default export */ const SelectPageSize = (/*#__PURE__*/react.memo(function SelectPageSize({
  total,
  options: sizeOptions,
  current: currentSize,
  selectRenderer,
  onChange
}) {
  const sizeOptionValues = sizeOptions.map(getOptionValue);
  let options = [...sizeOptions]; // insert current size to list

  if (currentSize !== undefined && (currentSize !== total || !sizeOptionValues.includes(0)) && !sizeOptionValues.includes(currentSize)) {
    options = [...sizeOptions];
    options.splice(sizeOptionValues.findIndex(x => x > currentSize), 0, (0,selectOptions/* formatSelectOptions */.m)([currentSize])[0]);
  }

  const current = currentSize === undefined ? sizeOptionValues[0] : currentSize;
  const SelectRenderer = selectRenderer || DefaultSelectRenderer;
  return (0,emotion_react_browser_esm.jsx)(SelectRenderer, {
    current: current,
    options: options,
    onChange: onChange
  });
}));
;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/DataTable/components/Pagination.js
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


// first, ..., prev, current, next, ..., last
const MINIMAL_PAGE_ITEM_COUNT = 7;
/**
 * Generate numeric page items around current page.
 *   - Always include first and last page
 *   - Add ellipsis if needed
 */

function generatePageItems(total, current, width) {
  if (width < MINIMAL_PAGE_ITEM_COUNT) {
    throw new Error(`Must allow at least ${MINIMAL_PAGE_ITEM_COUNT} page items`);
  }

  if (width % 2 === 0) {
    throw new Error(`Must allow odd number of page items`);
  }

  if (total < width) {
    return [...new Array(total).keys()];
  }

  const left = Math.max(0, Math.min(total - width, current - Math.floor(width / 2)));
  const items = new Array(width);

  for (let i = 0; i < width; i += 1) {
    items[i] = i + left;
  } // replace non-ending items with placeholders


  if (items[0] > 0) {
    items[0] = 0;
    items[1] = 'prev-more';
  }

  if (items[items.length - 1] < total - 1) {
    items[items.length - 1] = total - 1;
    items[items.length - 2] = 'next-more';
  }

  return items;
}
/* harmony default export */ const Pagination = (/*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(function Pagination({
  style,
  pageCount,
  currentPage = 0,
  maxPageItemCount = 9,
  onPageChange
}, ref) {
  const pageItems = generatePageItems(pageCount, currentPage, maxPageItemCount);
  return (0,emotion_react_browser_esm.jsx)("div", {
    ref: ref,
    className: "dt-pagination",
    style: style
  }, (0,emotion_react_browser_esm.jsx)("ul", {
    className: "pagination pagination-sm"
  }, pageItems.map(item => typeof item === 'number' ? // actual page number
  (0,emotion_react_browser_esm.jsx)("li", {
    key: item,
    className: currentPage === item ? 'active' : undefined
  }, (0,emotion_react_browser_esm.jsx)("a", {
    href: `#page-${item}`,
    role: "button",
    onClick: e => {
      e.preventDefault();
      onPageChange(item);
    }
  }, item + 1)) : (0,emotion_react_browser_esm.jsx)("li", {
    key: item,
    className: "dt-pagination-ellipsis"
  }, (0,emotion_react_browser_esm.jsx)("span", null, "\u2026")))));
})));
;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/DataTable/utils/getScrollBarSize.js
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
let cached;

const css = x => x.join('\n');

function getScrollBarSize(forceRefresh = false) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (cached === undefined || forceRefresh) {
    const inner = document.createElement('div');
    const outer = document.createElement('div');
    inner.style.cssText = css`
      width: auto;
      height: 100%;
      overflow: scroll;
    `;
    outer.style.cssText = css`
      position: absolute;
      visibility: hidden;
      overflow: hidden;
      width: 100px;
      height: 50px;
    `;
    outer.append(inner);
    document.body.append(outer);
    cached = outer.clientWidth - inner.clientWidth;
    outer.remove();
  }

  return cached;
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/DataTable/utils/needScrollBar.js
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
 * Whether a container need scroll bars when in another container.
 */
function needScrollBar({
  width,
  height,
  innerHeight,
  innerWidth,
  scrollBarSize
}) {
  const hasVerticalScroll = innerHeight > height;
  const hasHorizontalScroll = innerWidth > width - (hasVerticalScroll ? scrollBarSize : 0);
  return [hasVerticalScroll, hasHorizontalScroll];
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/DataTable/utils/useMountedMemo.js
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
 * Execute a memoized callback only when mounted. Execute again when factory updated.
 * Returns undefined if not mounted yet.
 */

function useMountedMemo(factory, deps) {
  const mounted = (0,react.useRef)();
  (0,react.useLayoutEffect)(() => {
    mounted.current = factory;
  });
  return (0,react.useMemo)(() => {
    if (mounted.current) {
      return factory();
    }

    return undefined; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted.current, mounted.current === factory, ...(deps || [])]);
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/DataTable/hooks/useSticky.js
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





let ReducerActions;

(function (ReducerActions) {
  ReducerActions["init"] = "init";
  ReducerActions["setStickyState"] = "setStickyState";
})(ReducerActions || (ReducerActions = {}));

const sum = (a, b) => a + b;

const mergeStyleProp = (node, style) => ({
  style: { ...node.props.style,
    ...style
  }
});

const fixedTableLayout = {
  tableLayout: 'fixed'
};
/**
 * An HOC for generating sticky header and fixed-height scrollable area
 */

function StickyWrap({
  sticky = {},
  width: maxWidth,
  height: maxHeight,
  children: table,
  setStickyState
}) {
  if (!table || table.type !== 'table') {
    throw new Error('<StickyWrap> must have only one <table> element as child');
  }

  let thead;
  let tbody;
  let tfoot;
  react.Children.forEach(table.props.children, node => {
    if (!node) {
      return;
    }

    if (node.type === 'thead') {
      thead = node;
    } else if (node.type === 'tbody') {
      tbody = node;
    } else if (node.type === 'tfoot') {
      tfoot = node;
    }
  });

  if (!thead || !tbody) {
    throw new Error('<table> in <StickyWrap> must contain both thead and tbody.');
  }

  const columnCount = (0,react.useMemo)(() => {
    var _thead;

    const headerRows = react.Children.toArray((_thead = thead) == null ? void 0 : _thead.props.children).pop();
    return headerRows.props.children.length;
  }, [thead]);
  const theadRef = (0,react.useRef)(null); // original thead for layout computation

  const tfootRef = (0,react.useRef)(null); // original tfoot for layout computation

  const scrollHeaderRef = (0,react.useRef)(null); // fixed header

  const scrollFooterRef = (0,react.useRef)(null); // fixed footer

  const scrollBodyRef = (0,react.useRef)(null); // main body

  const scrollBarSize = getScrollBarSize();
  const {
    bodyHeight,
    columnWidths
  } = sticky;
  const needSizer = !columnWidths || sticky.width !== maxWidth || sticky.height !== maxHeight || sticky.setStickyState !== setStickyState; // update scrollable area and header column sizes when mounted

  (0,react.useLayoutEffect)(() => {
    if (!theadRef.current) {
      return;
    }

    const bodyThead = theadRef.current;
    const theadHeight = bodyThead.clientHeight;
    const tfootHeight = tfootRef.current ? tfootRef.current.clientHeight : 0;

    if (!theadHeight) {
      return;
    }

    const fullTableHeight = bodyThead.parentNode.clientHeight;
    const ths = bodyThead.childNodes[0].childNodes;
    const widths = Array.from(ths).map(th => th.clientWidth);
    const [hasVerticalScroll, hasHorizontalScroll] = needScrollBar({
      width: maxWidth,
      height: maxHeight - theadHeight - tfootHeight,
      innerHeight: fullTableHeight,
      innerWidth: widths.reduce(sum),
      scrollBarSize
    }); // real container height, include table header, footer and space for
    // horizontal scroll bar

    const realHeight = Math.min(maxHeight, hasHorizontalScroll ? fullTableHeight + scrollBarSize : fullTableHeight);
    setStickyState({
      hasVerticalScroll,
      hasHorizontalScroll,
      setStickyState,
      width: maxWidth,
      height: maxHeight,
      realHeight,
      tableHeight: fullTableHeight,
      bodyHeight: realHeight - theadHeight - tfootHeight,
      columnWidths: widths
    });
  }, [maxWidth, maxHeight, setStickyState, scrollBarSize]);
  let sizerTable;
  let headerTable;
  let footerTable;
  let bodyTable;

  if (needSizer) {
    const theadWithRef = /*#__PURE__*/react.cloneElement(thead, {
      ref: theadRef
    });
    const tfootWithRef = tfoot && /*#__PURE__*/react.cloneElement(tfoot, {
      ref: tfootRef
    });
    sizerTable = (0,emotion_react_browser_esm.jsx)("div", {
      key: "sizer",
      style: {
        height: maxHeight,
        overflow: 'auto',
        visibility: 'hidden'
      }
    }, /*#__PURE__*/react.cloneElement(table, {}, theadWithRef, tbody, tfootWithRef));
  } // reuse previously column widths, will be updated by `useLayoutEffect` above


  const colWidths = columnWidths == null ? void 0 : columnWidths.slice(0, columnCount);

  if (colWidths && bodyHeight) {
    const bodyColgroup = (0,emotion_react_browser_esm.jsx)("colgroup", null, colWidths.map((w, i) => // eslint-disable-next-line react/no-array-index-key
    (0,emotion_react_browser_esm.jsx)("col", {
      key: i,
      width: w
    }))); // header columns do not have vertical scroll bars,
    // so we add scroll bar size to the last column


    const headerColgroup = sticky.hasVerticalScroll && scrollBarSize ? (0,emotion_react_browser_esm.jsx)("colgroup", null, colWidths.map((x, i) => // eslint-disable-next-line react/no-array-index-key
    (0,emotion_react_browser_esm.jsx)("col", {
      key: i,
      width: x + (i === colWidths.length - 1 ? scrollBarSize : 0)
    }))) : bodyColgroup;
    headerTable = (0,emotion_react_browser_esm.jsx)("div", {
      key: "header",
      ref: scrollHeaderRef,
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/react.cloneElement(table, mergeStyleProp(table, fixedTableLayout), headerColgroup, thead), headerTable);
    footerTable = tfoot && (0,emotion_react_browser_esm.jsx)("div", {
      key: "footer",
      ref: scrollFooterRef,
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/react.cloneElement(table, mergeStyleProp(table, fixedTableLayout), headerColgroup, tfoot), footerTable);

    const onScroll = e => {
      if (scrollHeaderRef.current) {
        scrollHeaderRef.current.scrollLeft = e.currentTarget.scrollLeft;
      }

      if (scrollFooterRef.current) {
        scrollFooterRef.current.scrollLeft = e.currentTarget.scrollLeft;
      }
    };

    bodyTable = (0,emotion_react_browser_esm.jsx)("div", {
      key: "body",
      ref: scrollBodyRef,
      style: {
        height: bodyHeight,
        overflow: 'auto'
      },
      onScroll: sticky.hasHorizontalScroll ? onScroll : undefined
    }, /*#__PURE__*/react.cloneElement(table, mergeStyleProp(table, fixedTableLayout), bodyColgroup, tbody));
  }

  return (0,emotion_react_browser_esm.jsx)("div", {
    style: {
      width: maxWidth,
      height: sticky.realHeight || maxHeight,
      overflow: 'hidden'
    }
  }, headerTable, bodyTable, footerTable, sizerTable);
}

function useInstance(instance) {
  const {
    dispatch,
    state: {
      sticky
    },
    data,
    page,
    rows,
    getTableSize = () => undefined
  } = instance;
  const setStickyState = (0,react.useCallback)(size => {
    dispatch({
      type: ReducerActions.setStickyState,
      size
    });
  }, // turning pages would also trigger a resize
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [dispatch, getTableSize, page, rows]);

  const useStickyWrap = renderer => {
    const {
      width,
      height
    } = useMountedMemo(getTableSize, [getTableSize]) || sticky; // only change of data should trigger re-render
    // eslint-disable-next-line react-hooks/exhaustive-deps

    const table = (0,react.useMemo)(renderer, [page, rows]);
    (0,react.useLayoutEffect)(() => {
      if (!width || !height) {
        setStickyState();
      }
    }, [width, height]);

    if (!width || !height) {
      return null;
    }

    if (data.length === 0) {
      return table;
    }

    return (0,emotion_react_browser_esm.jsx)(StickyWrap, {
      width: width,
      height: height,
      sticky: sticky,
      setStickyState: setStickyState
    }, table);
  };

  Object.assign(instance, {
    setStickyState,
    wrapStickyTable: useStickyWrap
  });
}

function useSticky(hooks) {
  hooks.useInstance.push(useInstance);
  hooks.stateReducers.push((newState, action_, prevState) => {
    const action = action_;

    if (action.type === ReducerActions.init) {
      return { ...newState,
        sticky: { ...(prevState == null ? void 0 : prevState.sticky)
        }
      };
    }

    if (action.type === ReducerActions.setStickyState) {
      const {
        size
      } = action;

      if (!size) {
        return { ...newState
        };
      }

      return { ...newState,
        sticky: { ...(prevState == null ? void 0 : prevState.sticky),
          ...(newState == null ? void 0 : newState.sticky),
          ...action.size
        }
      };
    }

    return newState;
  });
}
useSticky.pluginName = 'useSticky';
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/consts.js
var consts = __webpack_require__(95928);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/DataTable/DataTable.js


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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









// Be sure to pass our updateMyData and the skipReset option
function DataTable({
  tableClassName,
  columns,
  data,
  serverPaginationData,
  width: initialWidth = '100%',
  height: initialHeight = 300,
  pageSize: initialPageSize = 0,
  initialState: initialState_ = {},
  pageSizeOptions = consts/* PAGE_SIZE_OPTIONS */.T,
  maxPageItemCount = 9,
  sticky: doSticky,
  searchInput = true,
  onServerPaginationChange,
  rowCount,
  selectPageSize,
  noResults: noResultsText = 'No data found',
  hooks,
  serverPagination,
  wrapperRef: userWrapperRef,
  ...moreUseTableOptions
}) {
  const tableHooks = [react_table.useGlobalFilter, react_table.useSortBy, react_table.usePagination, doSticky ? useSticky : [], hooks || []].flat();
  const resultsSize = serverPagination ? rowCount : data.length;
  const sortByRef = (0,react.useRef)([]); // cache initial `sortby` so sorting doesn't trigger page reset

  const pageSizeRef = (0,react.useRef)([initialPageSize, resultsSize]);
  const hasPagination = initialPageSize > 0 && resultsSize > 0; // pageSize == 0 means no pagination

  const hasGlobalControl = hasPagination || !!searchInput;
  const initialState = { ...initialState_,
    // zero length means all pages, the `usePagination` plugin does not
    // understand pageSize = 0
    sortBy: sortByRef.current,
    pageSize: initialPageSize > 0 ? initialPageSize : resultsSize || 10
  };
  const defaultWrapperRef = (0,react.useRef)(null);
  const globalControlRef = (0,react.useRef)(null);
  const paginationRef = (0,react.useRef)(null);
  const wrapperRef = userWrapperRef || defaultWrapperRef;
  const paginationData = JSON.stringify(serverPaginationData);
  const defaultGetTableSize = (0,react.useCallback)(() => {
    if (wrapperRef.current) {
      var _globalControlRef$cur, _paginationRef$curren;

      // `initialWidth` and `initialHeight` could be also parameters like `100%`
      // `Number` reaturns `NaN` on them, then we fallback to computed size
      const width = Number(initialWidth) || wrapperRef.current.clientWidth;
      const height = (Number(initialHeight) || wrapperRef.current.clientHeight) - (((_globalControlRef$cur = globalControlRef.current) == null ? void 0 : _globalControlRef$cur.clientHeight) || 0) - (((_paginationRef$curren = paginationRef.current) == null ? void 0 : _paginationRef$curren.clientHeight) || 0);
      return {
        width,
        height
      };
    }

    return undefined; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialHeight, initialWidth, wrapperRef, hasPagination, hasGlobalControl, paginationRef, resultsSize, paginationData]);
  const defaultGlobalFilter = (0,react.useCallback)((rows, columnIds, filterValue) => {
    // allow searching by "col1_value col2_value"
    const joinedString = row => columnIds.map(x => row.values[x]).join(' ');

    return (0,match_sorter_esm/* matchSorter */.Lu)(rows, filterValue, {
      keys: [...columnIds, joinedString],
      threshold: match_sorter_esm/* rankings.ACRONYM */.tL.ACRONYM
    });
  }, []);
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    footerGroups,
    page,
    pageCount,
    gotoPage,
    preGlobalFilteredRows,
    setGlobalFilter,
    setPageSize: setPageSize_,
    wrapStickyTable,
    state: {
      pageIndex,
      pageSize,
      globalFilter: filterValue,
      sticky = {}
    }
  } = (0,react_table.useTable)({
    columns,
    data,
    initialState,
    getTableSize: defaultGetTableSize,
    globalFilter: defaultGlobalFilter,
    ...moreUseTableOptions
  }, ...tableHooks); // make setPageSize accept 0

  const setPageSize = size => {
    if (serverPagination) {
      onServerPaginationChange(0, size);
    } // keep the original size if data is empty


    if (size || resultsSize !== 0) {
      setPageSize_(size === 0 ? resultsSize : size);
    }
  };

  const noResults = typeof noResultsText === 'function' ? noResultsText(filterValue) : noResultsText;

  const getNoResults = () => (0,emotion_react_browser_esm.jsx)("div", {
    className: "dt-no-results"
  }, noResults);

  if (!columns || columns.length === 0) {
    return wrapStickyTable ? wrapStickyTable(getNoResults) : getNoResults();
  }

  const shouldRenderFooter = columns.some(x => !!x.Footer);

  const renderTable = () => (0,emotion_react_browser_esm.jsx)("table", getTableProps({
    className: tableClassName
  }), (0,emotion_react_browser_esm.jsx)("thead", null, headerGroups.map(headerGroup => {
    const {
      key: headerGroupKey,
      ...headerGroupProps
    } = headerGroup.getHeaderGroupProps();
    return (0,emotion_react_browser_esm.jsx)("tr", _extends({
      key: headerGroupKey || headerGroup.id
    }, headerGroupProps), headerGroup.headers.map(column => column.render('Header', {
      key: column.id,
      ...column.getSortByToggleProps()
    })));
  })), (0,emotion_react_browser_esm.jsx)("tbody", getTableBodyProps(), page && page.length > 0 ? page.map(row => {
    prepareRow(row);
    const {
      key: rowKey,
      ...rowProps
    } = row.getRowProps();
    return (0,emotion_react_browser_esm.jsx)("tr", _extends({
      key: rowKey || row.id
    }, rowProps), row.cells.map(cell => cell.render('Cell', {
      key: cell.column.id
    })));
  }) : (0,emotion_react_browser_esm.jsx)("tr", null, (0,emotion_react_browser_esm.jsx)("td", {
    className: "dt-no-results",
    colSpan: columns.length
  }, noResults))), shouldRenderFooter && (0,emotion_react_browser_esm.jsx)("tfoot", null, footerGroups.map(footerGroup => {
    const {
      key: footerGroupKey,
      ...footerGroupProps
    } = footerGroup.getHeaderGroupProps();
    return (0,emotion_react_browser_esm.jsx)("tr", _extends({
      key: footerGroupKey || footerGroup.id
    }, footerGroupProps), footerGroup.headers.map(column => column.render('Footer', {
      key: column.id
    })));
  }))); // force update the pageSize when it's been update from the initial state


  if (pageSizeRef.current[0] !== initialPageSize || // when initialPageSize stays as zero, but total number of records changed,
  // we'd also need to update page size
  initialPageSize === 0 && pageSizeRef.current[1] !== resultsSize) {
    pageSizeRef.current = [initialPageSize, resultsSize];
    setPageSize(initialPageSize);
  }

  const paginationStyle = sticky.height ? {} : {
    visibility: 'hidden'
  };
  let resultPageCount = pageCount;
  let resultCurrentPageSize = pageSize;
  let resultCurrentPage = pageIndex;
  let resultOnPageChange = gotoPage;

  if (serverPagination) {
    const serverPageSize = serverPaginationData.pageSize ?? initialPageSize;
    resultPageCount = Math.ceil(rowCount / serverPageSize);

    if (!Number.isFinite(resultPageCount)) {
      resultPageCount = 0;
    }

    resultCurrentPageSize = serverPageSize;
    const foundPageSizeIndex = pageSizeOptions.findIndex(([option]) => option >= resultCurrentPageSize);

    if (foundPageSizeIndex === -1) {
      resultCurrentPageSize = 0;
    }

    resultCurrentPage = serverPaginationData.currentPage ?? 0;

    resultOnPageChange = pageNumber => onServerPaginationChange(pageNumber, serverPageSize);
  }

  return (0,emotion_react_browser_esm.jsx)("div", {
    ref: wrapperRef,
    style: {
      width: initialWidth,
      height: initialHeight
    }
  }, hasGlobalControl ? (0,emotion_react_browser_esm.jsx)("div", {
    ref: globalControlRef,
    className: "form-inline dt-controls"
  }, (0,emotion_react_browser_esm.jsx)("div", {
    className: "row"
  }, (0,emotion_react_browser_esm.jsx)("div", {
    className: "col-sm-6"
  }, hasPagination ? (0,emotion_react_browser_esm.jsx)(SelectPageSize, {
    total: resultsSize,
    current: resultCurrentPageSize,
    options: pageSizeOptions,
    selectRenderer: typeof selectPageSize === 'boolean' ? undefined : selectPageSize,
    onChange: setPageSize
  }) : null), searchInput ? (0,emotion_react_browser_esm.jsx)("div", {
    className: "col-sm-6"
  }, (0,emotion_react_browser_esm.jsx)(GlobalFilter, {
    searchInput: typeof searchInput === 'boolean' ? undefined : searchInput,
    preGlobalFilteredRows: preGlobalFilteredRows,
    setGlobalFilter: setGlobalFilter,
    filterValue: filterValue
  })) : null)) : null, wrapStickyTable ? wrapStickyTable(renderTable) : renderTable(), hasPagination && resultPageCount > 1 ? (0,emotion_react_browser_esm.jsx)(Pagination, {
    ref: paginationRef,
    style: paginationStyle,
    maxPageItemCount: maxPageItemCount,
    pageCount: resultPageCount,
    currentPage: resultCurrentPage,
    onPageChange: resultOnPageChange
  }) : null);
}
DataTable.propTypes = {
  tableClassName: (prop_types_default()).string,
  pageSizeOptions: (prop_types_default()).array,
  maxPageItemCount: (prop_types_default()).number,
  hooks: (prop_types_default()).array,
  width: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  height: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  serverPagination: (prop_types_default()).bool,
  onServerPaginationChange: (prop_types_default()).func.isRequired,
  serverPaginationData: prop_types_default().shape({
    pageSize: (prop_types_default()).number,
    currentPage: (prop_types_default()).number
  }).isRequired,
  pageSize: (prop_types_default()).number,
  noResults: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func]),
  sticky: (prop_types_default()).bool,
  rowCount: (prop_types_default()).number.isRequired
};
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/Styles.js
/*
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

/* harmony default export */ const Styles = (style/* styled.div */.iK.div`
  table {
    width: 100%;
    min-width: auto;
    max-width: none;
    margin: 0;
  }

  th,
  td {
    min-width: 4.3em;
  }

  thead > tr > th {
    padding-right: 1.4em;
    position: relative;
    background: ${({
  theme: {
    colors
  }
}) => colors.grayscale.light5};
    text-align: left;
  }
  th svg {
    color: ${({
  theme: {
    colors
  }
}) => colors.grayscale.light2};
    position: relative;
    vertical-align: middle;
    margin: 0 ${({
  theme: {
    gridUnit
  }
}) => gridUnit}px;
  }
  th.is-sorted svg {
    color: ${({
  theme: {
    colors
  }
}) => colors.grayscale.base};
  }
  .table > tbody > tr:first-of-type > td,
  .table > tbody > tr:first-of-type > th {
    border-top: 0;
  }

  .dt-controls {
    padding-bottom: 0.65em;
  }
  .dt-metric {
    text-align: right;
  }
  .dt-totals {
    font-weight: bold;
  }
  .dt-is-null {
    color: ${({
  theme: {
    colors
  }
}) => colors.grayscale.light1};
  }
  td.dt-is-filter {
    cursor: pointer;
  }
  td.dt-is-filter:hover {
    background-color: ${({
  theme: {
    colors
  }
}) => colors.secondary.light4};
  }
  td.dt-is-active-filter,
  td.dt-is-active-filter:hover {
    background-color: ${({
  theme: {
    colors
  }
}) => colors.secondary.light3};
  }

  .dt-global-filter {
    float: right;
  }

  .dt-pagination {
    text-align: right;
    /* use padding instead of margin so clientHeight can capture it */
    padding-top: 0.5em;
  }
  .dt-pagination .pagination {
    margin: 0;
  }

  .pagination > li > span.dt-pagination-ellipsis:focus,
  .pagination > li > span.dt-pagination-ellipsis:hover {
    background: ${({
  theme: {
    colors
  }
}) => colors.grayscale.light5};
  }

  .dt-no-results {
    text-align: center;
    padding: 1em 0.6em;
  }
`);
// EXTERNAL MODULE: ./node_modules/xss/lib/index.js
var lib = __webpack_require__(68924);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js
var NumberFormatterRegistrySingleton = __webpack_require__(50855);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/utils/formatValue.js
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


const xss = new lib.FilterXSS({
  whiteList: { ...(0,lib.getDefaultWhiteList)(),
    span: ['style', 'class', 'title'],
    div: ['style', 'class'],
    a: ['style', 'class', 'href', 'title', 'target'],
    img: ['style', 'class', 'src', 'alt', 'title', 'width', 'height'],
    video: ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width', 'muted']
  },
  stripIgnoreTag: true,
  css: false
});

function isProbablyHTML(text) {
  return /<[^>]+>/.test(text);
}
/**
 * Format text for cell value.
 */


function formatValue(formatter, value) {
  // render undefined as empty string
  if (value === undefined) {
    return [false, ''];
  } // render null as `N/A`


  if (value === null) {
    return [false, 'N/A'];
  }

  if (formatter) {
    // in case percent metric can specify percent format in the future
    return [false, formatter(value)];
  }

  if (typeof value === 'string') {
    return isProbablyHTML(value) ? [true, xss.process(value)] : [false, value];
  }

  return [false, value.toString()];
}

function formatColumnValue(column, value) {
  const {
    dataType,
    formatter,
    config = {}
  } = column;
  const isNumber = dataType === QueryResponse/* GenericDataType.NUMERIC */.Z.NUMERIC;
  const smallNumberFormatter = config.d3SmallNumberFormat === undefined ? formatter : (0,NumberFormatterRegistrySingleton/* getNumberFormatter */.JB)(config.d3SmallNumberFormat);
  return formatValue(isNumber && typeof value === 'number' && Math.abs(value) < 1 ? smallNumberFormatter : formatter, value);
}
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/DataTable/utils/externalAPIs.js
var externalAPIs = __webpack_require__(17766);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/TableChart.js
function TableChart_extends() { TableChart_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableChart_extends.apply(this, arguments); }

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
 * Return sortType based on data type
 */
function getSortTypeByDataType(dataType) {
  if (dataType === QueryResponse/* GenericDataType.TEMPORAL */.Z.TEMPORAL) {
    return 'datetime';
  }

  if (dataType === QueryResponse/* GenericDataType.STRING */.Z.STRING) {
    return 'alphanumeric';
  }

  return 'basic';
}
/**
 * Cell background to render columns as horizontal bar chart
 */


function cellBar({
  value,
  valueRange,
  colorPositiveNegative = false,
  alignPositiveNegative
}) {
  const [minValue, maxValue] = valueRange;
  const r = colorPositiveNegative && value < 0 ? 150 : 0;

  if (alignPositiveNegative) {
    const perc = Math.abs(Math.round(value / maxValue * 100)); // The 0.01 to 0.001 is a workaround for what appears to be a
    // CSS rendering bug on flat, transparent colors

    return `linear-gradient(to right, rgba(${r},0,0,0.2), rgba(${r},0,0,0.2) ${perc}%, ` + `rgba(0,0,0,0.01) ${perc}%, rgba(0,0,0,0.001) 100%)`;
  }

  const posExtent = Math.abs(Math.max(maxValue, 0));
  const negExtent = Math.abs(Math.min(minValue, 0));
  const tot = posExtent + negExtent;
  const perc1 = Math.round(Math.min(negExtent + value, negExtent) / tot * 100);
  const perc2 = Math.round(Math.abs(value) / tot * 100); // The 0.01 to 0.001 is a workaround for what appears to be a
  // CSS rendering bug on flat, transparent colors

  return `linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.001) ${perc1}%, ` + `rgba(${r},0,0,0.2) ${perc1}%, rgba(${r},0,0,0.2) ${perc1 + perc2}%, ` + `rgba(0,0,0,0.01) ${perc1 + perc2}%, rgba(0,0,0,0.001) 100%)`;
}

function SortIcon({
  column
}) {
  const {
    isSorted,
    isSortedDesc
  } = column;

  let sortIcon = (0,emotion_react_browser_esm.jsx)(FaSort/* FaSort */.r, null);

  if (isSorted) {
    sortIcon = isSortedDesc ? (0,emotion_react_browser_esm.jsx)(FaSortDown/* FaSortDown */.s, null) : (0,emotion_react_browser_esm.jsx)(FaSortUp/* FaSortUp */.h, null);
  }

  return sortIcon;
}

function SearchInput({
  count,
  value,
  onChange
}) {
  return (0,emotion_react_browser_esm.jsx)("span", {
    className: "dt-global-filter"
  }, (0,TranslatorSingleton.t)('Search'), ' ', (0,emotion_react_browser_esm.jsx)("input", {
    className: "form-control input-sm",
    placeholder: (0,TranslatorSingleton.tn)('search.num_records', count),
    value: value,
    onChange: onChange
  }));
}

function TableChart_SelectPageSize({
  options,
  current,
  onChange
}) {
  return (0,emotion_react_browser_esm.jsx)("span", {
    className: "dt-select-page-size form-inline"
  }, (0,TranslatorSingleton.t)('page_size.show'), ' ', (0,emotion_react_browser_esm.jsx)("select", {
    className: "form-control input-sm",
    value: current,
    onBlur: () => {},
    onChange: e => {
      onChange(Number(e.target.value));
    }
  }, options.map(option => {
    const [size, text] = Array.isArray(option) ? option : [option, option];
    return (0,emotion_react_browser_esm.jsx)("option", {
      key: size,
      value: size
    }, text);
  })), ' ', (0,TranslatorSingleton.t)('page_size.entries'));
}

function TableChart(props) {
  const {
    timeGrain,
    height,
    width,
    data,
    totals,
    isRawRecords,
    rowCount = 0,
    columns: columnsMeta,
    alignPositiveNegative: defaultAlignPN = false,
    colorPositiveNegative: defaultColorPN = false,
    includeSearch = false,
    pageSize = 0,
    serverPagination = false,
    serverPaginationData,
    setDataMask,
    showCellBars = true,
    emitFilter = false,
    sortDesc = false,
    filters,
    sticky = true,
    // whether to use sticky header
    columnColorFormatters
  } = props;
  const timestampFormatter = (0,react.useCallback)(value => (0,TimeFormatterRegistrySingleton/* getTimeFormatterForGranularity */.uh)(timeGrain)(value), [timeGrain]);
  const handleChange = (0,react.useCallback)(filters => {
    if (!emitFilter) {
      return;
    }

    const groupBy = Object.keys(filters);
    const groupByValues = Object.values(filters);
    const labelElements = [];
    groupBy.forEach(col => {
      const isTimestamp = col === constants/* DTTM_ALIAS */.W3;
      const filterValues = (0,ensureIsArray/* default */.Z)(filters == null ? void 0 : filters[col]);

      if (filterValues.length) {
        const valueLabels = filterValues.map(value => isTimestamp ? timestampFormatter(value) : value);
        labelElements.push(`${valueLabels.join(', ')}`);
      }
    });
    setDataMask({
      extraFormData: {
        filters: groupBy.length === 0 ? [] : groupBy.map(col => {
          const val = (0,ensureIsArray/* default */.Z)(filters == null ? void 0 : filters[col]);
          if (!val.length) return {
            col,
            op: 'IS NULL'
          };
          return {
            col,
            op: 'IN',
            val: val.map(el => el instanceof Date ? el.getTime() : el),
            grain: col === constants/* DTTM_ALIAS */.W3 ? timeGrain : undefined
          };
        })
      },
      filterState: {
        label: labelElements.join(', '),
        value: groupByValues.length ? groupByValues : null,
        filters: filters && Object.keys(filters).length ? filters : null
      }
    });
  }, [emitFilter, setDataMask]); // only take relevant page size options

  const pageSizeOptions = (0,react.useMemo)(() => {
    const getServerPagination = n => n <= rowCount;

    return consts/* PAGE_SIZE_OPTIONS.filter */.T.filter(([n]) => serverPagination ? getServerPagination(n) : n <= 2 * data.length);
  }, [data.length, rowCount, serverPagination]);
  const getValueRange = (0,react.useCallback)(function getValueRange(key, alignPositiveNegative) {
    var _data$;

    if (typeof (data == null ? void 0 : (_data$ = data[0]) == null ? void 0 : _data$[key]) === 'number') {
      const nums = data.map(row => row[key]);
      return alignPositiveNegative ? [0, max(nums.map(Math.abs))] : extent(nums);
    }

    return null;
  }, [data]);
  const isActiveFilterValue = (0,react.useCallback)(function isActiveFilterValue(key, val) {
    var _filters$key;

    return !!filters && ((_filters$key = filters[key]) == null ? void 0 : _filters$key.includes(val));
  }, [filters]);

  function getEmitTarget(col) {
    var _meta$config;

    const meta = columnsMeta == null ? void 0 : columnsMeta.find(x => x.key === col);
    return (meta == null ? void 0 : (_meta$config = meta.config) == null ? void 0 : _meta$config.emitTarget) || col;
  }

  const toggleFilter = (0,react.useCallback)(function toggleFilter(key, val) {
    let updatedFilters = { ...(filters || {})
    };
    const target = getEmitTarget(key);

    if (filters && isActiveFilterValue(target, val)) {
      updatedFilters = {};
    } else {
      updatedFilters = {
        [target]: [val]
      };
    }

    if (Array.isArray(updatedFilters[target]) && updatedFilters[target].length === 0) {
      delete updatedFilters[target];
    }

    handleChange(updatedFilters);
  }, [filters, handleChange, isActiveFilterValue]);

  const getSharedStyle = column => {
    const {
      isNumeric,
      config = {}
    } = column;
    const textAlign = config.horizontalAlign ? config.horizontalAlign : isNumeric ? 'right' : 'left';
    return {
      textAlign
    };
  };

  const getColumnConfigs = (0,react.useCallback)((column, i) => {
    const {
      key,
      label,
      isNumeric,
      dataType,
      isMetric,
      config = {}
    } = column;
    const isFilter = !isNumeric && emitFilter;
    const columnWidth = Number.isNaN(Number(config.columnWidth)) ? config.columnWidth : Number(config.columnWidth); // inline style for both th and td cell

    const sharedStyle = getSharedStyle(column);
    const alignPositiveNegative = config.alignPositiveNegative === undefined ? defaultAlignPN : config.alignPositiveNegative;
    const colorPositiveNegative = config.colorPositiveNegative === undefined ? defaultColorPN : config.colorPositiveNegative;
    const hasColumnColorFormatters = isNumeric && Array.isArray(columnColorFormatters) && columnColorFormatters.length > 0;
    const valueRange = !hasColumnColorFormatters && (config.showCellBars === undefined ? showCellBars : config.showCellBars) && (isMetric || isRawRecords) && getValueRange(key, alignPositiveNegative);
    let className = '';

    if (isFilter) {
      className += ' dt-is-filter';
    }

    return {
      id: String(i),
      // to allow duplicate column keys
      // must use custom accessor to allow `.` in column names
      // typing is incorrect in current version of `@types/react-table`
      // so we ask TS not to check.
      accessor: datum => datum[key],
      Cell: ({
        value
      }) => {
        const [isHtml, text] = formatColumnValue(column, value);
        const html = isHtml ? {
          __html: text
        } : undefined;
        let backgroundColor;

        if (hasColumnColorFormatters) {
          columnColorFormatters.filter(formatter => formatter.column === column.key).forEach(formatter => {
            const formatterResult = formatter.getColorFromValue(value);

            if (formatterResult) {
              backgroundColor = formatterResult;
            }
          });
        }

        const cellProps = {
          // show raw number in title in case of numeric values
          title: typeof value === 'number' ? String(value) : undefined,
          onClick: emitFilter && !valueRange ? () => toggleFilter(key, value) : undefined,
          className: [className, value == null ? 'dt-is-null' : '', isActiveFilterValue(key, value) ? ' dt-is-active-filter' : ''].join(' '),
          style: { ...sharedStyle,
            background: backgroundColor || (valueRange ? cellBar({
              value: value,
              valueRange,
              alignPositiveNegative,
              colorPositiveNegative
            }) : undefined)
          }
        };

        if (html) {
          // eslint-disable-next-line react/no-danger
          return (0,emotion_react_browser_esm.jsx)("td", TableChart_extends({}, cellProps, {
            dangerouslySetInnerHTML: html
          }));
        } // If cellProps renderes textContent already, then we don't have to
        // render `Cell`. This saves some time for large tables.


        return (0,emotion_react_browser_esm.jsx)("td", cellProps, text);
      },
      Header: ({
        column: col,
        onClick,
        style
      }) => (0,emotion_react_browser_esm.jsx)("th", {
        title: "Shift + Click to sort by multiple columns",
        className: [className, col.isSorted ? 'is-sorted' : ''].join(' '),
        style: { ...sharedStyle,
          ...style
        },
        onClick: onClick
      }, config.columnWidth ? // column width hint
      (0,emotion_react_browser_esm.jsx)("div", {
        style: {
          width: columnWidth,
          height: 0.01
        }
      }) : null, label, (0,emotion_react_browser_esm.jsx)(SortIcon, {
        column: col
      })),
      Footer: totals ? i === 0 ? (0,emotion_react_browser_esm.jsx)("th", null, (0,TranslatorSingleton.t)('Totals')) : (0,emotion_react_browser_esm.jsx)("td", {
        style: sharedStyle
      }, (0,emotion_react_browser_esm.jsx)("strong", null, formatColumnValue(column, totals[key])[1])) : undefined,
      sortDescFirst: sortDesc,
      sortType: getSortTypeByDataType(dataType)
    };
  }, [defaultAlignPN, defaultColorPN, emitFilter, getValueRange, isActiveFilterValue, isRawRecords, showCellBars, sortDesc, toggleFilter, totals, columnColorFormatters]);
  const columns = (0,react.useMemo)(() => columnsMeta.map(getColumnConfigs), [columnsMeta, getColumnConfigs]);

  const handleServerPaginationChange = (pageNumber, pageSize) => {
    (0,externalAPIs/* updateExternalFormData */.X)(setDataMask, pageNumber, pageSize);
  };

  return (0,emotion_react_browser_esm.jsx)(Styles, null, (0,emotion_react_browser_esm.jsx)(DataTable, {
    columns: columns,
    data: data,
    rowCount: rowCount,
    tableClassName: "table table-striped table-condensed",
    pageSize: pageSize,
    serverPaginationData: serverPaginationData,
    pageSizeOptions: pageSizeOptions,
    width: width,
    height: height,
    serverPagination: serverPagination,
    onServerPaginationChange: handleServerPaginationChange // 9 page items in > 340px works well even for 100+ pages
    ,
    maxPageItemCount: width > 340 ? 9 : 7,
    noResults: filter => (0,TranslatorSingleton.t)(filter ? 'No matching records found' : 'No records found'),
    searchInput: includeSearch && SearchInput,
    selectPageSize: pageSize !== null && TableChart_SelectPageSize // not in use in Superset, but needed for unit tests
    ,
    sticky: sticky
  }));
}

/***/ }),

/***/ 90233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lu": () => (/* binding */ matchSorter),
/* harmony export */   "tL": () => (/* binding */ rankings)
/* harmony export */ });
/* unused harmony export defaultBaseSortFn */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87462);
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76826);
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remove_accents__WEBPACK_IMPORTED_MODULE_0__);



var rankings = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
matchSorter.rankings = rankings;

var defaultBaseSortFn = function defaultBaseSortFn(a, b) {
  return String(a.rankedValue).localeCompare(String(b.rankedValue));
};
/**
 * Takes an array of items and a value and returns a new array with the items that match the given value
 * @param {Array} items - the items to sort
 * @param {String} value - the value to use for ranking
 * @param {Object} options - Some options to configure the sorter
 * @return {Array} - the new sorted array
 */


function matchSorter(items, value, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      keys = _options.keys,
      _options$threshold = _options.threshold,
      threshold = _options$threshold === void 0 ? rankings.MATCHES : _options$threshold,
      _options$baseSort = _options.baseSort,
      baseSort = _options$baseSort === void 0 ? defaultBaseSortFn : _options$baseSort,
      _options$sorter = _options.sorter,
      sorter = _options$sorter === void 0 ? function (matchedItems) {
    return matchedItems.sort(function (a, b) {
      return sortRankedValues(a, b, baseSort);
    });
  } : _options$sorter;
  var matchedItems = items.reduce(reduceItemsToRanked, []);
  return sorter(matchedItems).map(function (_ref) {
    var item = _ref.item;
    return item;
  });

  function reduceItemsToRanked(matches, item, index) {
    var rankingInfo = getHighestRanking(item, keys, value, options);
    var rank = rankingInfo.rank,
        _rankingInfo$keyThres = rankingInfo.keyThreshold,
        keyThreshold = _rankingInfo$keyThres === void 0 ? threshold : _rankingInfo$keyThres;

    if (rank >= keyThreshold) {
      matches.push((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, rankingInfo, {
        item: item,
        index: index
      }));
    }

    return matches;
  }
}
/**
 * Gets the highest ranking for value for the given item based on its values for the given keys
 * @param {*} item - the item to rank
 * @param {Array} keys - the keys to get values from the item for the ranking
 * @param {String} value - the value to rank against
 * @param {Object} options - options to control the ranking
 * @return {{rank: Number, keyIndex: Number, keyThreshold: Number}} - the highest ranking
 */


function getHighestRanking(item, keys, value, options) {
  if (!keys) {
    // if keys is not specified, then we assume the item given is ready to be matched
    var stringItem = item;
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: stringItem,
      rank: getMatchRanking(stringItem, value, options),
      keyIndex: -1,
      keyThreshold: options.threshold
    };
  }

  var valuesToRank = getAllValuesToRank(item, keys);
  return valuesToRank.reduce(function (_ref2, _ref3, i) {
    var rank = _ref2.rank,
        rankedValue = _ref2.rankedValue,
        keyIndex = _ref2.keyIndex,
        keyThreshold = _ref2.keyThreshold;
    var itemValue = _ref3.itemValue,
        attributes = _ref3.attributes;
    var newRank = getMatchRanking(itemValue, value, options);
    var newRankedValue = rankedValue;
    var minRanking = attributes.minRanking,
        maxRanking = attributes.maxRanking,
        threshold = attributes.threshold;

    if (newRank < minRanking && newRank >= rankings.MATCHES) {
      newRank = minRanking;
    } else if (newRank > maxRanking) {
      newRank = maxRanking;
    }

    if (newRank > rank) {
      rank = newRank;
      keyIndex = i;
      keyThreshold = threshold;
      newRankedValue = itemValue;
    }

    return {
      rankedValue: newRankedValue,
      rank: rank,
      keyIndex: keyIndex,
      keyThreshold: keyThreshold
    };
  }, {
    rankedValue: item,
    rank: rankings.NO_MATCH,
    keyIndex: -1,
    keyThreshold: options.threshold
  });
}
/**
 * Gives a rankings score based on how well the two strings match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @param {Object} options - options for the match (like keepDiacritics for comparison)
 * @returns {Number} the ranking for how well stringToRank matches testString
 */


function getMatchRanking(testString, stringToRank, options) {
  testString = prepareValueForComparison(testString, options);
  stringToRank = prepareValueForComparison(stringToRank, options); // too long

  if (stringToRank.length > testString.length) {
    return rankings.NO_MATCH;
  } // case sensitive equals


  if (testString === stringToRank) {
    return rankings.CASE_SENSITIVE_EQUAL;
  } // Lower casing before further comparison


  testString = testString.toLowerCase();
  stringToRank = stringToRank.toLowerCase(); // case insensitive equals

  if (testString === stringToRank) {
    return rankings.EQUAL;
  } // starts with


  if (testString.startsWith(stringToRank)) {
    return rankings.STARTS_WITH;
  } // word starts with


  if (testString.includes(" " + stringToRank)) {
    return rankings.WORD_STARTS_WITH;
  } // contains


  if (testString.includes(stringToRank)) {
    return rankings.CONTAINS;
  } else if (stringToRank.length === 1) {
    // If the only character in the given stringToRank
    //   isn't even contained in the testString, then
    //   it's definitely not a match.
    return rankings.NO_MATCH;
  } // acronym


  if (getAcronym(testString).includes(stringToRank)) {
    return rankings.ACRONYM;
  } // will return a number between rankings.MATCHES and
  // rankings.MATCHES + 1 depending  on how close of a match it is.


  return getClosenessRanking(testString, stringToRank);
}
/**
 * Generates an acronym for a string.
 *
 * @param {String} string the string for which to produce the acronym
 * @returns {String} the acronym
 */


function getAcronym(string) {
  var acronym = '';
  var wordsInString = string.split(' ');
  wordsInString.forEach(function (wordInString) {
    var splitByHyphenWords = wordInString.split('-');
    splitByHyphenWords.forEach(function (splitByHyphenWord) {
      acronym += splitByHyphenWord.substr(0, 1);
    });
  });
  return acronym;
}
/**
 * Returns a score based on how spread apart the
 * characters from the stringToRank are within the testString.
 * A number close to rankings.MATCHES represents a loose match. A number close
 * to rankings.MATCHES + 1 represents a tighter match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @returns {Number} the number between rankings.MATCHES and
 * rankings.MATCHES + 1 for how well stringToRank matches testString
 */


function getClosenessRanking(testString, stringToRank) {
  var matchingInOrderCharCount = 0;
  var charNumber = 0;

  function findMatchingCharacter(matchChar, string, index) {
    for (var j = index, J = string.length; j < J; j++) {
      var stringChar = string[j];

      if (stringChar === matchChar) {
        matchingInOrderCharCount += 1;
        return j + 1;
      }
    }

    return -1;
  }

  function getRanking(spread) {
    var spreadPercentage = 1 / spread;
    var inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
    var ranking = rankings.MATCHES + inOrderPercentage * spreadPercentage;
    return ranking;
  }

  var firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);

  if (firstIndex < 0) {
    return rankings.NO_MATCH;
  }

  charNumber = firstIndex;

  for (var i = 1, I = stringToRank.length; i < I; i++) {
    var matchChar = stringToRank[i];
    charNumber = findMatchingCharacter(matchChar, testString, charNumber);
    var found = charNumber > -1;

    if (!found) {
      return rankings.NO_MATCH;
    }
  }

  var spread = charNumber - firstIndex;
  return getRanking(spread);
}
/**
 * Sorts items that have a rank, index, and keyIndex
 * @param {Object} a - the first item to sort
 * @param {Object} b - the second item to sort
 * @return {Number} -1 if a should come first, 1 if b should come first, 0 if equal
 */


function sortRankedValues(a, b, baseSort) {
  var aFirst = -1;
  var bFirst = 1;
  var aRank = a.rank,
      aKeyIndex = a.keyIndex;
  var bRank = b.rank,
      bKeyIndex = b.keyIndex;
  var same = aRank === bRank;

  if (same) {
    if (aKeyIndex === bKeyIndex) {
      // use the base sort function as a tie-breaker
      return baseSort(a, b);
    } else {
      return aKeyIndex < bKeyIndex ? aFirst : bFirst;
    }
  } else {
    return aRank > bRank ? aFirst : bFirst;
  }
}
/**
 * Prepares value for comparison by stringifying it, removing diacritics (if specified)
 * @param {String} value - the value to clean
 * @param {Object} options - {keepDiacritics: whether to remove diacritics}
 * @return {String} the prepared value
 */


function prepareValueForComparison(value, _ref4) {
  var keepDiacritics = _ref4.keepDiacritics;
  // value might not actually be a string at this point (we don't get to choose)
  // so part of preparing the value for comparison is ensure that it is a string
  value = "" + value; // toString

  if (!keepDiacritics) {
    value = remove_accents__WEBPACK_IMPORTED_MODULE_0___default()(value);
  }

  return value;
}
/**
 * Gets value for key in item at arbitrarily nested keypath
 * @param {Object} item - the item
 * @param {Object|Function} key - the potentially nested keypath or property callback
 * @return {Array} - an array containing the value(s) at the nested keypath
 */


function getItemValues(item, key) {
  if (typeof key === 'object') {
    key = key.key;
  }

  var value;

  if (typeof key === 'function') {
    value = key(item);
  } else if (item == null) {
    value = null;
  } else if (Object.hasOwnProperty.call(item, key)) {
    value = item[key];
  } else if (key.includes('.')) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return getNestedValues(key, item);
  } else {
    value = null;
  } // because `value` can also be undefined


  if (value == null) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [String(value)];
}
/**
 * Given path: "foo.bar.baz"
 * And item: {foo: {bar: {baz: 'buzz'}}}
 *   -> 'buzz'
 * @param path a dot-separated set of keys
 * @param item the item to get the value from
 */


function getNestedValues(path, item) {
  var keys = path.split('.');
  var values = [item];

  for (var i = 0, I = keys.length; i < I; i++) {
    var nestedKey = keys[i];
    var nestedValues = [];

    for (var j = 0, J = values.length; j < J; j++) {
      var nestedItem = values[j];
      if (nestedItem == null) continue;

      if (Object.hasOwnProperty.call(nestedItem, nestedKey)) {
        var nestedValue = nestedItem[nestedKey];

        if (nestedValue != null) {
          nestedValues.push(nestedValue);
        }
      } else if (nestedKey === '*') {
        // ensure that values is an array
        nestedValues = nestedValues.concat(nestedItem);
      }
    }

    values = nestedValues;
  }

  if (Array.isArray(values[0])) {
    // keep allowing the implicit wildcard for an array of strings at the end of
    // the path; don't use `.flat()` because that's not available in node.js v10
    var result = [];
    return result.concat.apply(result, values);
  } // Based on our logic it should be an array of strings by now...
  // assuming the user's path terminated in strings


  return values;
}
/**
 * Gets all the values for the given keys in the given item and returns an array of those values
 * @param item - the item from which the values will be retrieved
 * @param keys - the keys to use to retrieve the values
 * @return objects with {itemValue, attributes}
 */


function getAllValuesToRank(item, keys) {
  var allValues = [];

  for (var j = 0, J = keys.length; j < J; j++) {
    var key = keys[j];
    var attributes = getKeyAttributes(key);
    var itemValues = getItemValues(item, key);

    for (var i = 0, I = itemValues.length; i < I; i++) {
      allValues.push({
        itemValue: itemValues[i],
        attributes: attributes
      });
    }
  }

  return allValues;
}

var defaultKeyAttributes = {
  maxRanking: Infinity,
  minRanking: -Infinity
};
/**
 * Gets all the attributes for the given key
 * @param key - the key from which the attributes will be retrieved
 * @return object containing the key's attributes
 */

function getKeyAttributes(key) {
  if (typeof key === 'string') {
    return defaultKeyAttributes;
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, defaultKeyAttributes, key);
}
/*
eslint
  no-continue: "off",
*/




/***/ }),

/***/ 76826:
/***/ ((module) => {

var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
};

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

var removeAccents = function(string) {	
	return string.replace(allAccents, function(match) {
		return characterMap[match];
	});
};

var hasAccents = function(string) {
	return !!string.match(firstAccent);
};

module.exports = removeAccents;
module.exports.has = hasAccents;
module.exports.remove = removeAccents;


/***/ })

}]);