"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[9893],{

/***/ 79893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ datasource_DatasourceEditor)
});

// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var components = __webpack_require__(82191);
// EXTERNAL MODULE: ./src/components/Radio/index.tsx
var Radio = __webpack_require__(87183);
// EXTERNAL MODULE: ./src/components/Card/index.tsx
var Card = __webpack_require__(57011);
// EXTERNAL MODULE: ./src/components/Alert/index.tsx
var Alert = __webpack_require__(29487);
// EXTERNAL MODULE: ./src/components/Badge/index.tsx
var Badge = __webpack_require__(82607);
// EXTERNAL MODULE: ./node_modules/shortid/index.js
var shortid = __webpack_require__(14670);
var shortid_default = /*#__PURE__*/__webpack_require__.n(shortid);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./src/components/index.ts + 1 modules
var src_components = __webpack_require__(33346);
// EXTERNAL MODULE: ./src/components/Form/index.tsx + 1 modules
var Form = __webpack_require__(49238);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/components/Tabs/index.ts
var Tabs = __webpack_require__(40637);
// EXTERNAL MODULE: ./src/components/CertifiedIcon/index.tsx
var CertifiedIcon = __webpack_require__(83268);
// EXTERNAL MODULE: ./src/components/WarningIconWithTooltip/index.tsx
var WarningIconWithTooltip = __webpack_require__(86057);
// EXTERNAL MODULE: ./src/components/DatabaseSelector/index.tsx
var DatabaseSelector = __webpack_require__(73995);
// EXTERNAL MODULE: ./src/components/Label/index.tsx
var Label = __webpack_require__(37921);
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(38703);
// EXTERNAL MODULE: ./src/components/TableSelector/index.tsx
var TableSelector = __webpack_require__(17982);
// EXTERNAL MODULE: ./src/components/EditableTitle/index.tsx
var EditableTitle = __webpack_require__(38270);
// EXTERNAL MODULE: ./src/utils/getClientErrorObject.ts
var getClientErrorObject = __webpack_require__(98286);
// EXTERNAL MODULE: ./src/explore/components/controls/CheckboxControl.jsx
var CheckboxControl = __webpack_require__(79069);
// EXTERNAL MODULE: ./src/explore/components/controls/TextControl/index.tsx
var TextControl = __webpack_require__(79684);
// EXTERNAL MODULE: ./src/explore/components/controls/TextAreaControl.jsx
var TextAreaControl = __webpack_require__(42878);
// EXTERNAL MODULE: ./src/explore/components/controls/SpatialControl.jsx
var SpatialControl = __webpack_require__(665);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
;// CONCATENATED MODULE: ./src/CRUD/utils.js
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


function recurseReactClone(children, type, propExtender) {
  /**
   * Clones a React component's children, and injects new props
   * where the type specified is matched.
   */
  return react.Children.map(children, (child) => {
    let newChild = child;
    if (child && child.type.name === type.name) {
      newChild = /*#__PURE__*/react.cloneElement(child, propExtender(child));
    }
    if (newChild && newChild.props.children) {
      newChild = /*#__PURE__*/react.cloneElement(newChild, {
        children: recurseReactClone(
        newChild.props.children,
        type,
        propExtender) });


    }
    return newChild;
  });
}
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
;// CONCATENATED MODULE: ./src/CRUD/Field.tsx
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





const formItemInlineCss = emotion_react_browser_esm.css`
  .ant-form-item-control-input-content {
    display: flex;
    flex-direction: row;
  }
`;
function Field({ fieldKey, value, label, description, control, onChange, compact, inline }) {
  const onControlChange = (0,react.useCallback)((newValue) => {
    onChange(fieldKey, newValue);
  }, [onChange, fieldKey]);
  const hookedControl = /*#__PURE__*/react.cloneElement(control, {
    value,
    onChange: onControlChange });

  return (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { label: (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, { className: "m-r-5" },
    label || fieldKey,
    compact && description && (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "field-descr", placement: "right", title: description },
    (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-info-circle m-l-5" }))),

    css: inline && formItemInlineCss },
  hookedControl,
  !compact && description && (0,emotion_react_browser_esm.jsx)("div", { css: (theme) => ({
      color: theme.colors.grayscale.base,
      [inline ? 'marginLeft' : 'marginTop']: theme.gridUnit }) },

  description));


}
;// CONCATENATED MODULE: ./src/CRUD/Fieldset.jsx
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







const propTypes = {
  children: (prop_types_default()).node.isRequired,
  onChange: (prop_types_default()).func,
  item: (prop_types_default()).object,
  title: (prop_types_default()).node,
  compact: (prop_types_default()).bool };

const defaultProps = {
  compact: false,
  title: null };


class Fieldset extends react.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(fieldKey, val) {
    return this.props.onChange({
      ...this.props.item,
      [fieldKey]: val });

  }

  render() {
    const { title } = this.props;
    const propExtender = (field) => ({
      onChange: this.onChange,
      value: this.props.item[field.props.fieldKey],
      compact: this.props.compact });

    return (
      (0,emotion_react_browser_esm.jsx)(Form/* Form */.l0, { componentClass: "fieldset", className: "CRUD", layout: "vertical" },
      title && (0,emotion_react_browser_esm.jsx)("legend", null, title),
      recurseReactClone(this.props.children, Field, propExtender)));


  }}

Fieldset.propTypes = propTypes;
Fieldset.defaultProps = defaultProps;
;// CONCATENATED MODULE: ./src/CRUD/CollectionTable.tsx
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








var SortOrder;
(function (SortOrder) {
  SortOrder[SortOrder["asc"] = 1] = "asc";
  SortOrder[SortOrder["desc"] = 2] = "desc";
  SortOrder[SortOrder["unsort"] = 0] = "unsort";
})(SortOrder || (SortOrder = {}));
function createCollectionArray(collection) {
  return Object.keys(collection).map((k) => collection[k]);
}
function createKeyedCollection(arr) {
  const collectionArray = arr.map((o) => ({
    ...o,
    id: o.id || shortid_default().generate() }));

  const collection = {};
  collectionArray.forEach((o) => {
    collection[o.id] = o;
  });
  return {
    collection,
    collectionArray };

}
const CrudTableWrapper = style/* styled.div */.iK.div`
  ${({ stickyHeader }) => stickyHeader &&
`
      height: 350px;
      overflow-y: auto;
      overflow-x: auto;

      .table {
        min-width: 800px;
      }
      thead th {
        background: #fff;
        position: sticky;
        top: 0;
        z-index: 9;
        min
      }
    `}
  th span {
    vertical-align: ${({ theme }) => theme.gridUnit * -2}px;
  }
`;
const CrudButtonWrapper = style/* styled.div */.iK.div`
  text-align: right;
  ${({ theme }) => `margin-bottom: ${theme.gridUnit * 2}px`}
`;
class CRUDCollection extends react.PureComponent {
  constructor(props) {
    super(props);
    const { collection, collectionArray } = createKeyedCollection(props.collection);
    this.state = {
      expandedColumns: {},
      collection,
      collectionArray,
      sortColumn: '',
      sort: 0 };

    this.renderItem = this.renderItem.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.renderExpandableSection = this.renderExpandableSection.bind(this);
    this.getLabel = this.getLabel.bind(this);
    this.onFieldsetChange = this.onFieldsetChange.bind(this);
    this.renderTableBody = this.renderTableBody.bind(this);
    this.changeCollection = this.changeCollection.bind(this);
    this.sortColumn = this.sortColumn.bind(this);
    this.renderSortIcon = this.renderSortIcon.bind(this);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.collection !== this.props.collection) {
      const { collection, collectionArray } = createKeyedCollection(nextProps.collection);
      this.setState({
        collection,
        collectionArray });

    }
  }
  onCellChange(id, col, val) {
    this.changeCollection({
      ...this.state.collection,
      [id]: {
        ...this.state.collection[id],
        [col]: val } });


  }
  onAddItem() {
    if (this.props.itemGenerator) {
      let newItem = this.props.itemGenerator();
      if (!newItem.id) {
        newItem = { ...newItem, id: shortid_default().generate() };
      }
      this.changeCollection(this.state.collection, newItem);
    }
  }
  onFieldsetChange(item) {
    this.changeCollection({
      ...this.state.collection,
      [item.id]: item });

  }
  getLabel(col) {
    const { columnLabels } = this.props;
    let label = columnLabels && columnLabels[col] ? columnLabels[col] : col;
    if (label.startsWith('__')) {
      // special label-free columns (ie: caret for expand, delete cross)
      label = '';
    }
    return label;
  }
  changeCollection(collection, newItem) {
    this.setState({ collection });
    if (this.props.onChange) {
      const collectionArray = this.state.collectionArray.
      map((c) => collection[c.id])
      // filter out removed items
      .filter((c) => c !== undefined);
      if (newItem) {
        collectionArray.unshift(newItem);
      }
      this.props.onChange(collectionArray);
    }
  }
  deleteItem(id) {
    const newColl = { ...this.state.collection };
    delete newColl[id];
    this.changeCollection(newColl);
  }
  effectiveTableColumns() {
    const { tableColumns, allowDeletes, expandFieldset } = this.props;
    const cols = allowDeletes ?
    tableColumns.concat(['__actions']) :
    tableColumns;
    return expandFieldset ? ['__expand'].concat(cols) : cols;
  }
  toggleExpand(id) {
    this.onCellChange(id, '__expanded', false);
    this.setState((prevState) => ({
      expandedColumns: {
        ...prevState.expandedColumns,
        [id]: !prevState.expandedColumns[id] } }));


  }
  sortColumn(col, sort = SortOrder.unsort) {
    const { sortColumns } = this.props;
    // default sort logic sorting string, boolean and number
    const compareSort = (m, n) => {
      if (typeof m === 'string') {
        return (m || ' ').localeCompare(n);
      }
      return m - n;
    };
    return () => {
      if (sortColumns != null && sortColumns.includes(col)) {
        // display in unsorted order if no sort specified
        if (sort === SortOrder.unsort) {
          const { collection } = createKeyedCollection(this.props.collection);
          const collectionArray = createCollectionArray(collection);
          this.setState({
            collectionArray,
            sortColumn: '',
            sort });

          return;
        }
        // newly ordered collection
        const sorted = [
        ...this.state.collectionArray].
        sort((a, b) => compareSort(a[col], b[col]));
        const newCollection = sort === SortOrder.asc ? sorted : sorted.reverse();
        this.setState((prevState) => ({
          ...prevState,
          collectionArray: newCollection,
          sortColumn: col,
          sort }));

      }
    };
  }
  renderSortIcon(col) {
    if (this.state.sortColumn === col && this.state.sort === SortOrder.asc) {
      return (0,emotion_react_browser_esm.jsx)(Icons/* default.SortAsc */.Z.SortAsc, { onClick: this.sortColumn(col, 2) });
    }
    if (this.state.sortColumn === col && this.state.sort === SortOrder.desc) {
      return (0,emotion_react_browser_esm.jsx)(Icons/* default.SortDesc */.Z.SortDesc, { onClick: this.sortColumn(col, 0) });
    }
    return (0,emotion_react_browser_esm.jsx)(Icons/* default.Sort */.Z.Sort, { onClick: this.sortColumn(col, 1) });
  }
  renderHeaderRow() {
    const cols = this.effectiveTableColumns();
    const { allowDeletes, expandFieldset, extraButtons, sortColumns } = this.props;
    return (0,emotion_react_browser_esm.jsx)("thead", null,
    (0,emotion_react_browser_esm.jsx)("tr", null,
    expandFieldset && (0,emotion_react_browser_esm.jsx)("th", { "aria-label": "Expand", className: "tiny-cell" }),
    cols.map((col) => (0,emotion_react_browser_esm.jsx)("th", { key: col },
    this.getLabel(col),
    (sortColumns == null ? void 0 : sortColumns.includes(col)) && this.renderSortIcon(col))),

    extraButtons,
    allowDeletes && (0,emotion_react_browser_esm.jsx)("th", { key: "delete-item", "aria-label": "Delete", className: "tiny-cell" })));


  }
  renderExpandableSection(item) {
    const propsGenerator = () => ({ item, onChange: this.onFieldsetChange });
    return recurseReactClone(this.props.expandFieldset, Fieldset, propsGenerator);
  }
  renderCell(record, col) {
    const renderer = this.props.itemRenderers && this.props.itemRenderers[col];
    const val = record[col];
    const onChange = this.onCellChange.bind(this, record.id, col);
    return renderer ? renderer(val, onChange, this.getLabel(col), record) : val;
  }
  renderItem(record) {
    const { allowAddItem, allowDeletes, expandFieldset, tableColumns } = this.props;
    /* eslint-disable no-underscore-dangle */
    const isExpanded = !!this.state.expandedColumns[record.id] || record.__expanded;
    let tds = [];
    if (expandFieldset) {
      tds.push((0,emotion_react_browser_esm.jsx)("td", { key: "__expand", className: "expand" },
      (0,emotion_react_browser_esm.jsx)("i", { role: "button", "aria-label": "Toggle expand", tabIndex: 0, className: `fa fa-caret-${isExpanded ? 'down' : 'right'} text-primary pointer`, onClick: this.toggleExpand.bind(this, record.id) })));

    }
    tds = tds.concat(tableColumns.map((col) => (0,emotion_react_browser_esm.jsx)("td", { key: col }, this.renderCell(record, col))));
    if (allowAddItem) {
      tds.push((0,emotion_react_browser_esm.jsx)("td", { key: "add" }));
    }
    if (allowDeletes) {
      tds.push((0,emotion_react_browser_esm.jsx)("td", { key: "__actions", className: "text-primary" },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.Trash */.Z.Trash, { "aria-label": "Delete item", className: "pointer", role: "button", tabIndex: 0, onClick: this.deleteItem.bind(this, record.id) })));

    }
    const trs = [
    (0,emotion_react_browser_esm.jsx)("tr", { 'data-test': 'table-row', className: "row", key: record.id },
    tds)];


    if (isExpanded) {
      trs.push((0,emotion_react_browser_esm.jsx)("tr", { className: "exp", key: `exp__${record.id}` },
      (0,emotion_react_browser_esm.jsx)("td", { colSpan: this.effectiveTableColumns().length, className: "expanded" },
      (0,emotion_react_browser_esm.jsx)("div", null, this.renderExpandableSection(record)))));


    }
    return trs;
  }
  renderEmptyCell() {
    return (0,emotion_react_browser_esm.jsx)("tr", null,
    (0,emotion_react_browser_esm.jsx)("td", { className: "empty-collection" }, this.props.emptyMessage));

  }
  renderTableBody() {
    const data = this.state.collectionArray;
    const content = data.length ?
    data.map((d) => this.renderItem(d)) :
    this.renderEmptyCell();
    return (0,emotion_react_browser_esm.jsx)("tbody", null, content);
  }
  render() {
    return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(CrudButtonWrapper, null,
    this.props.allowAddItem && (0,emotion_react_browser_esm.jsx)("span", { className: "m-t-10 m-r-10" },
    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonSize: "small", buttonStyle: "tertiary", onClick: this.onAddItem },
    (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), ' ',
    (0,TranslatorSingleton.t)('Add item')))),



    (0,emotion_react_browser_esm.jsx)(CrudTableWrapper, { className: "CRUD", stickyHeader: this.props.stickyHeader },
    (0,emotion_react_browser_esm.jsx)("table", { className: "table" },
    this.renderHeaderRow(),
    this.renderTableBody())));



  }}
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
;// CONCATENATED MODULE: ./src/datasource/DatasourceEditor.jsx
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





































const DatasourceContainer = style/* styled.div */.iK.div`
  .change-warning {
    margin: 16px 10px 0;
    color: ${({ theme }) => theme.colors.warning.base};
  }

  .change-warning .bold {
    font-weight: ${({ theme }) => theme.typography.weights.bold};
  }

  .form-group.has-feedback > .help-block {
    margin-top: 8px;
  }

  .form-group.form-group-md {
    margin-bottom: 8px;
  }
`;

const FlexRowContainer = style/* styled.div */.iK.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${({ theme }) => theme.gridUnit}px;
  }
`;

const StyledTableTabs = (0,style/* styled */.iK)(Tabs/* default */.ZP)`
  overflow: visible;
  .ant-tabs-content-holder {
    overflow: visible;
  }
`;

const StyledBadge = (0,style/* styled */.iK)(Badge/* default */.Z)`
  .ant-badge-count {
    line-height: ${({ theme }) => theme.gridUnit * 4}px;
    height: ${({ theme }) => theme.gridUnit * 4}px;
    margin-left: ${({ theme }) => theme.gridUnit}px;
  }
`;

const EditLockContainer = style/* styled.div */.iK.div`
  font-size: ${style/* supersetTheme.typography.sizes.s */.K6.typography.sizes.s}px;
  display: flex;
  align-items: center;
  a {
    padding: 0 10px;
  }
`;

const ColumnButtonWrapper = style/* styled.div */.iK.div`
  text-align: right;
  ${({ theme }) => `margin-bottom: ${theme.gridUnit * 2}px`}
`;

const StyledLabelWrapper = style/* styled.div */.iK.div`
  display: flex;
  align-items: center;
  span {
    margin-right: ${({ theme }) => theme.gridUnit}px;
  }
`;

const checkboxGenerator = (d, onChange) =>
(0,emotion_react_browser_esm.jsx)(CheckboxControl/* default */.Z, { value: d, onChange: onChange });

const DATA_TYPES = [
{ value: 'STRING', label: 'STRING' },
{ value: 'NUMERIC', label: 'NUMERIC' },
{ value: 'DATETIME', label: 'DATETIME' },
{ value: 'BOOLEAN', label: 'BOOLEAN' }];


const DATASOURCE_TYPES_ARR = [
{ key: 'physical', label: (0,TranslatorSingleton.t)('Physical (table or view)') },
{ key: 'virtual', label: (0,TranslatorSingleton.t)('Virtual (SQL)') }];

const DATASOURCE_TYPES = {};
DATASOURCE_TYPES_ARR.forEach((o) => {
  DATASOURCE_TYPES[o.key] = o;
});var _ref =  true ? { name: "s5xdrg", styles: "display:flex;align-items:center" } : 0;

function CollectionTabTitle({ title, collection }) {
  return (
    (0,emotion_react_browser_esm.jsx)("div", {
      css: _ref },


    title, ' ',
    (0,emotion_react_browser_esm.jsx)(StyledBadge, { count: collection ? collection.length : 0, showZero: true })));


}

CollectionTabTitle.propTypes = {
  title: (prop_types_default()).string,
  collection: (prop_types_default()).array };


function ColumnCollectionTable({
  columns,
  onChange,
  editableColumnName,
  showExpression,
  allowAddItem,
  allowEditDataType,
  itemGenerator })
{
  return (
    (0,emotion_react_browser_esm.jsx)(CRUDCollection, {
      collection: columns,
      tableColumns: ['column_name', 'type', 'is_dttm', 'filterable', 'groupby'],
      sortColumns: ['column_name', 'type', 'is_dttm', 'filterable', 'groupby'],
      allowDeletes: true,
      allowAddItem: allowAddItem,
      itemGenerator: itemGenerator,
      stickyHeader: true,
      expandFieldset:
      (0,emotion_react_browser_esm.jsx)(FormContainer, null,
      (0,emotion_react_browser_esm.jsx)(Fieldset, { compact: true },
      showExpression &&
      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "expression",
        label: (0,TranslatorSingleton.t)('SQL expression'),
        control:
        (0,emotion_react_browser_esm.jsx)(TextAreaControl/* default */.Z, {
          language: "markdown",
          offerEditInModal: false }) }),




      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "verbose_name",
        label: (0,TranslatorSingleton.t)('Label'),
        control:
        (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, {
          controlId: "verbose_name",
          placeholder: (0,TranslatorSingleton.t)('Label') }) }),



      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "description",
        label: (0,TranslatorSingleton.t)('Description'),
        control:
        (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, {
          controlId: "description",
          placeholder: (0,TranslatorSingleton.t)('Description') }) }),



      allowEditDataType &&
      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "type",
        label: (0,TranslatorSingleton.t)('Data type'),
        control:
        (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, {
          ariaLabel: (0,TranslatorSingleton.t)('Data type'),
          options: DATA_TYPES,
          name: "type",
          allowNewOptions: true,
          allowClear: true }) }),




      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "python_date_format",
        label: (0,TranslatorSingleton.t)('Datetime format'),
        description:
        /* Note the fragmented translations may not work. */
        (0,emotion_react_browser_esm.jsx)("div", null,
        (0,TranslatorSingleton.t)('The pattern of timestamp format. For strings use '),
        (0,emotion_react_browser_esm.jsx)("a", { href: "https://docs.python.org/2/library/datetime.html#strftime-strptime-behavior" },
        (0,TranslatorSingleton.t)('Python datetime string pattern')),

        (0,TranslatorSingleton.t)(' expression which needs to adhere to the '),
        (0,emotion_react_browser_esm.jsx)("a", { href: "https://en.wikipedia.org/wiki/ISO_8601" },
        (0,TranslatorSingleton.t)('ISO 8601')),

        (0,TranslatorSingleton.t)(` standard to ensure that the lexicographical ordering
                      coincides with the chronological ordering. If the
                      timestamp format does not adhere to the ISO 8601 standard
                      you will need to define an expression and type for
                      transforming the string into a date or timestamp. Note
                      currently time zones are not supported. If time is stored
                      in epoch format, put \`epoch_s\` or \`epoch_ms\`. If no pattern
                      is specified we fall back to using the optional defaults on a per
                      database/column name level via the extra parameter.`)),


        control:
        (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, {
          controlId: "python_date_format",
          placeholder: "%Y/%m/%d" }) }),



      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "certified_by",
        label: (0,TranslatorSingleton.t)('Certified By'),
        description: (0,TranslatorSingleton.t)('Person or group that has certified this metric'),
        control:
        (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, {
          controlId: "certified",
          placeholder: (0,TranslatorSingleton.t)('Certified by') }) }),



      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "certification_details",
        label: (0,TranslatorSingleton.t)('Certification details'),
        description: (0,TranslatorSingleton.t)('Details of the certification'),
        control:
        (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, {
          controlId: "certificationDetails",
          placeholder: (0,TranslatorSingleton.t)('Certification details') }) }))),






      columnLabels: {
        column_name: (0,TranslatorSingleton.t)('Column'),
        type: (0,TranslatorSingleton.t)('Data type'),
        groupby: (0,TranslatorSingleton.t)('Is dimension'),
        is_dttm: (0,TranslatorSingleton.t)('Is temporal'),
        filterable: (0,TranslatorSingleton.t)('Is filterable') },

      onChange: onChange,
      itemRenderers: {
        column_name: (v, onItemChange, _, record) =>
        editableColumnName ?
        (0,emotion_react_browser_esm.jsx)(StyledLabelWrapper, null,
        record.is_certified &&
        (0,emotion_react_browser_esm.jsx)(CertifiedIcon/* default */.Z, {
          certifiedBy: record.certified_by,
          details: record.certification_details }),


        (0,emotion_react_browser_esm.jsx)(EditableTitle/* default */.Z, { canEdit: true, title: v, onSaveTitle: onItemChange })) :


        (0,emotion_react_browser_esm.jsx)(StyledLabelWrapper, null,
        record.is_certified &&
        (0,emotion_react_browser_esm.jsx)(CertifiedIcon/* default */.Z, {
          certifiedBy: record.certified_by,
          details: record.certification_details }),


        v),


        type: (d) => d ? (0,emotion_react_browser_esm.jsx)(Label/* default */.Z, null, d) : null,
        is_dttm: checkboxGenerator,
        filterable: checkboxGenerator,
        groupby: checkboxGenerator } }));



}
ColumnCollectionTable.propTypes = {
  columns: (prop_types_default()).array.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  editableColumnName: (prop_types_default()).bool,
  showExpression: (prop_types_default()).bool,
  allowAddItem: (prop_types_default()).bool,
  allowEditDataType: (prop_types_default()).bool,
  itemGenerator: (prop_types_default()).func };

ColumnCollectionTable.defaultProps = {
  editableColumnName: false,
  showExpression: false,
  allowAddItem: false,
  allowEditDataType: false,
  itemGenerator: () => ({
    column_name: '<new column>',
    filterable: true,
    groupby: true }) };



function StackedField({ label, formElement }) {
  return (
    (0,emotion_react_browser_esm.jsx)("div", null,
    (0,emotion_react_browser_esm.jsx)("div", null,
    (0,emotion_react_browser_esm.jsx)("strong", null, label)),

    (0,emotion_react_browser_esm.jsx)("div", null, formElement)));


}

StackedField.propTypes = {
  label: (prop_types_default()).string,
  formElement: (prop_types_default()).node };


function FormContainer({ children }) {
  return (0,emotion_react_browser_esm.jsx)(Card/* default */.Z, { padded: true }, children);
}

FormContainer.propTypes = {
  children: (prop_types_default()).node };


const DatasourceEditor_propTypes = {
  datasource: (prop_types_default()).object.isRequired,
  onChange: (prop_types_default()).func,
  addSuccessToast: (prop_types_default()).func.isRequired,
  addDangerToast: (prop_types_default()).func.isRequired };


const DatasourceEditor_defaultProps = {
  onChange: () => {} };


function OwnersSelector({ datasource, onChange }) {
  const loadOptions = (0,react.useCallback)((search = '', page, pageSize) => {
    const query = rison_default().encode({ filter: search, page, page_size: pageSize });
    return SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/dataset/related/owners?q=${query}` }).
    then((response) => ({
      data: response.json.result.map((item) => ({
        value: item.value,
        label: item.text })),

      totalCount: response.json.count }));

  }, []);

  return (
    (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, {
      ariaLabel: (0,TranslatorSingleton.t)('Select owners'),
      mode: "multiple",
      name: "owners",
      value: datasource.owners,
      options: loadOptions,
      onChange: onChange,
      header: (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, null, (0,TranslatorSingleton.t)('Owners')),
      allowClear: true }));


}var _ref2 =  true ? { name: "hkh81z", styles: "margin-top:8px" } : 0;var _ref3 =  true ? { name: "hkh81z", styles: "margin-top:8px" } : 0;

class DatasourceEditor extends react.PureComponent {
  constructor(props) {var _props$datasource$met;
    super(props);
    this.state = {
      datasource: {
        ...props.datasource,
        owners: props.datasource.owners.map((owner) => ({
          value: owner.value || owner.id,
          label: owner.label || `${owner.first_name} ${owner.last_name}` })),

        metrics: (_props$datasource$met = props.datasource.metrics) == null ? void 0 : _props$datasource$met.map((metric) => {
          const {
            certified_by: certifiedByMetric,
            certification_details: certificationDetails } =
          metric;
          const {
            certification: { details, certified_by: certifiedBy } = {},
            warning_markdown: warningMarkdown } =
          JSON.parse(metric.extra || '{}') || {};
          return {
            ...metric,
            certification_details: certificationDetails || details,
            warning_markdown: warningMarkdown || '',
            certified_by: certifiedBy || certifiedByMetric };

        }) },

      errors: [],
      isDruid:
      props.datasource.type === 'druid' ||
      props.datasource.datasource_type === 'druid',
      isSqla:
      props.datasource.datasource_type === 'table' ||
      props.datasource.type === 'table',
      isEditMode: false,
      databaseColumns: props.datasource.columns.filter((col) => !col.expression),
      calculatedColumns: props.datasource.columns.filter(
      (col) => !!col.expression),

      metadataLoading: false,
      activeTabKey: 0,
      datasourceType: props.datasource.sql ?
      DATASOURCE_TYPES.virtual.key :
      DATASOURCE_TYPES.physical.key };


    this.onChange = this.onChange.bind(this);
    this.onChangeEditMode = this.onChangeEditMode.bind(this);
    this.onDatasourcePropChange = this.onDatasourcePropChange.bind(this);
    this.onDatasourceChange = this.onDatasourceChange.bind(this);
    this.tableChangeAndSyncMetadata = this.tableChangeAndSyncMetadata.bind(
    this);

    this.syncMetadata = this.syncMetadata.bind(this);
    this.setColumns = this.setColumns.bind(this);
    this.validateAndChange = this.validateAndChange.bind(this);
    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.allowEditSource = !(0,featureFlags/* isFeatureEnabled */.cr)(
    utils_featureFlags/* FeatureFlag.DISABLE_DATASET_SOURCE_EDIT */.T.DISABLE_DATASET_SOURCE_EDIT);

  }

  onChange() {
    // Emptying SQL if "Physical" radio button is selected
    // Currently the logic to know whether the source is
    // physical or virtual is based on whether SQL is empty or not.
    const { datasourceType, datasource } = this.state;
    const sql =
    datasourceType === DATASOURCE_TYPES.physical.key ? '' : datasource.sql;
    const newDatasource = {
      ...this.state.datasource,
      sql,
      columns: [...this.state.databaseColumns, ...this.state.calculatedColumns] };

    this.props.onChange(newDatasource, this.state.errors);
  }

  onChangeEditMode() {
    this.setState((prevState) => ({ isEditMode: !prevState.isEditMode }));
  }

  onDatasourceChange(datasource, callback = this.validateAndChange) {
    this.setState({ datasource }, callback);
  }

  onDatasourcePropChange(attr, value) {
    if (value === undefined) return; // if value is undefined do not update state
    const datasource = { ...this.state.datasource, [attr]: value };
    this.setState(
    (prevState) => ({
      datasource: { ...prevState.datasource, [attr]: value } }),

    attr === 'table_name' ?
    this.onDatasourceChange(datasource, this.tableChangeAndSyncMetadata) :
    this.onDatasourceChange(datasource, this.validateAndChange));

  }

  onDatasourceTypeChange(datasourceType) {
    this.setState({ datasourceType });
  }

  setColumns(obj) {
    // update calculatedColumns or databaseColumns
    this.setState(obj, this.validateAndChange);
  }

  validateAndChange() {
    this.validate(this.onChange);
  }

  tableChangeAndSyncMetadata() {
    this.validate(() => {
      this.syncMetadata();
      this.onChange();
    });
  }

  updateColumns(cols) {
    const { databaseColumns } = this.state;
    const databaseColumnNames = cols.map((col) => col.name);
    const currentCols = databaseColumns.reduce(
    (agg, col) => ({
      ...agg,
      [col.column_name]: col }),

    {});

    const finalColumns = [];
    const results = {
      added: [],
      modified: [],
      removed: databaseColumns.
      map((col) => col.column_name).
      filter((col) => !databaseColumnNames.includes(col)) };

    cols.forEach((col) => {
      const currentCol = currentCols[col.name];
      if (!currentCol) {
        // new column
        finalColumns.push({
          id: shortid_default().generate(),
          column_name: col.name,
          type: col.type,
          groupby: true,
          filterable: true,
          is_dttm: col.is_dttm });

        results.added.push(col.name);
      } else if (
      currentCol.type !== col.type ||
      !currentCol.is_dttm && col.is_dttm)
      {
        // modified column
        finalColumns.push({
          ...currentCol,
          type: col.type,
          is_dttm: currentCol.is_dttm || col.is_dttm });

        results.modified.push(col.name);
      } else {
        // unchanged
        finalColumns.push(currentCol);
      }
    });
    if (
    results.added.length ||
    results.modified.length ||
    results.removed.length)
    {
      this.setColumns({ databaseColumns: finalColumns });
    }
    return results;
  }

  syncMetadata() {
    const { datasource } = this.state;
    const params = {
      datasource_type: datasource.type || datasource.datasource_type,
      database_name:
      datasource.database.database_name || datasource.database.name,
      schema_name: datasource.schema,
      table_name: datasource.table_name };

    Object.entries(params).forEach(([key, value]) => {
      // rison can't encode the undefined value
      if (value === undefined) {
        params[key] = null;
      }
    });
    const endpoint = `/datasource/external_metadata_by_name/?q=${rison_default().encode(
    params)
    }`;
    this.setState({ metadataLoading: true });

    SupersetClient/* default.get */.Z.get({ endpoint }).
    then(({ json }) => {
      const results = this.updateColumns(json);
      if (results.modified.length) {
        this.props.addSuccessToast(
        (0,TranslatorSingleton.t)('Modified columns: %s', results.modified.join(', ')));

      }
      if (results.removed.length) {
        this.props.addSuccessToast(
        (0,TranslatorSingleton.t)('Removed columns: %s', results.removed.join(', ')));

      }
      if (results.added.length) {
        this.props.addSuccessToast(
        (0,TranslatorSingleton.t)('New columns added: %s', results.added.join(', ')));

      }
      this.props.addSuccessToast((0,TranslatorSingleton.t)('Metadata has been synced'));
      this.setState({ metadataLoading: false });
    }).
    catch((response) =>
    (0,getClientErrorObject/* getClientErrorObject */.O)(response).then(({ error, statusText }) => {
      this.props.addDangerToast(
      error || statusText || (0,TranslatorSingleton.t)('An error has occurred'));

      this.setState({ metadataLoading: false });
    }));

  }

  findDuplicates(arr, accessor) {
    const seen = {};
    const dups = [];
    arr.forEach((obj) => {
      const item = accessor(obj);
      if (item in seen) {
        dups.push(item);
      } else {
        seen[item] = null;
      }
    });
    return dups;
  }

  validate(callback) {
    let errors = [];
    let dups;
    const { datasource } = this.state;

    // Looking for duplicate column_name
    dups = this.findDuplicates(datasource.columns, (obj) => obj.column_name);
    errors = errors.concat(
    dups.map((name) => (0,TranslatorSingleton.t)('Column name [%s] is duplicated', name)));


    // Looking for duplicate metric_name
    dups = this.findDuplicates(datasource.metrics, (obj) => obj.metric_name);
    errors = errors.concat(
    dups.map((name) => (0,TranslatorSingleton.t)('Metric name [%s] is duplicated', name)));


    // Making sure calculatedColumns have an expression defined
    const noFilterCalcCols = this.state.calculatedColumns.filter(
    (col) => !col.expression && !col.json);

    errors = errors.concat(
    noFilterCalcCols.map((col) =>
    (0,TranslatorSingleton.t)('Calculated column [%s] requires an expression', col.column_name)));



    this.setState({ errors }, callback);
  }

  handleTabSelect(activeTabKey) {
    this.setState({ activeTabKey });
  }

  sortMetrics(metrics) {
    return metrics.sort(({ id: a }, { id: b }) => b - a);
  }

  renderSettingsFieldset() {
    const { datasource } = this.state;
    return (
      (0,emotion_react_browser_esm.jsx)(Fieldset, {
        title: (0,TranslatorSingleton.t)('Basic'),
        item: datasource,
        onChange: this.onDatasourceChange },

      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "description",
        label: (0,TranslatorSingleton.t)('Description'),
        control:
        (0,emotion_react_browser_esm.jsx)(TextAreaControl/* default */.Z, { language: "markdown", offerEditInModal: false }) }),


      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "default_endpoint",
        label: (0,TranslatorSingleton.t)('Default URL'),
        description: (0,TranslatorSingleton.t)(
        'Default URL to redirect to when accessing from the dataset list page'),

        control: (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, { controlId: "default_endpoint" }) }),

      (0,emotion_react_browser_esm.jsx)(Field, {
        inline: true,
        fieldKey: "filter_select_enabled",
        label: (0,TranslatorSingleton.t)('Autocomplete filters'),
        description: (0,TranslatorSingleton.t)('Whether to populate autocomplete filters options'),
        control: (0,emotion_react_browser_esm.jsx)(CheckboxControl/* default */.Z, null) }),

      this.state.isSqla &&
      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "fetch_values_predicate",
        label: (0,TranslatorSingleton.t)('Autocomplete query predicate'),
        description: (0,TranslatorSingleton.t)(
        'When using "Autocomplete filters", this can be used to improve performance ' +
        'of the query fetching the values. Use this option to apply a ' +
        'predicate (WHERE clause) to the query selecting the distinct ' +
        'values from the table. Typically the intent would be to limit the scan ' +
        'by applying a relative time filter on a partitioned or indexed time-related field.'),

        control:
        (0,emotion_react_browser_esm.jsx)(TextAreaControl/* default */.Z, {
          language: "sql",
          controlId: "fetch_values_predicate",
          minLines: 5 }) }),




      this.state.isSqla &&
      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "extra",
        label: (0,TranslatorSingleton.t)('Extra'),
        description: (0,TranslatorSingleton.t)(
        'Extra data to specify table metadata. Currently supports ' +
        'metadata of the format: `{ "certification": { "certified_by": ' +
        '"Data Platform Team", "details": "This table is the source of truth." ' +
        '}, "warning_markdown": "This is a warning." }`.'),

        control:
        (0,emotion_react_browser_esm.jsx)(TextAreaControl/* default */.Z, {
          controlId: "extra",
          language: "json",
          offerEditInModal: false }) }),




      (0,emotion_react_browser_esm.jsx)(OwnersSelector, {
        datasource: datasource,
        onChange: (newOwners) => {
          this.onDatasourceChange({ ...datasource, owners: newOwners });
        } })));



  }

  renderAdvancedFieldset() {
    const { datasource } = this.state;
    return (
      (0,emotion_react_browser_esm.jsx)(Fieldset, {
        title: (0,TranslatorSingleton.t)('Advanced'),
        item: datasource,
        onChange: this.onDatasourceChange },

      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "cache_timeout",
        label: (0,TranslatorSingleton.t)('Cache timeout'),
        description: (0,TranslatorSingleton.t)(
        'The duration of time in seconds before the cache is invalidated'),

        control: (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, { controlId: "cache_timeout" }) }),

      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "offset",
        label: (0,TranslatorSingleton.t)('Hours offset'),
        control: (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, { controlId: "offset" }),
        description: (0,TranslatorSingleton.t)(
        'The number of hours, negative or positive, to shift the time column. This can be used to move UTC time to local time.') }),


      this.state.isSqla &&
      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "template_params",
        label: (0,TranslatorSingleton.t)('Template parameters'),
        description: (0,TranslatorSingleton.t)(
        'A set of parameters that become available in the query using Jinja templating syntax'),

        control: (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, { controlId: "template_params" }) })));




  }

  renderSpatialTab() {
    const { datasource } = this.state;
    const { spatials, all_cols: allCols } = datasource;
    return (
      (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, {
        tab: (0,emotion_react_browser_esm.jsx)(CollectionTabTitle, { collection: spatials, title: (0,TranslatorSingleton.t)('Spatial') }),
        key: 4 },

      (0,emotion_react_browser_esm.jsx)(CRUDCollection, {
        tableColumns: ['name', 'config'],
        onChange: this.onDatasourcePropChange.bind(this, 'spatials'),
        itemGenerator: () => ({
          name: '<new spatial>',
          type: '<no type>',
          config: null }),

        collection: spatials,
        allowDeletes: true,
        itemRenderers: {
          name: (d, onChange) =>
          (0,emotion_react_browser_esm.jsx)(EditableTitle/* default */.Z, { canEdit: true, title: d, onSaveTitle: onChange }),

          config: (v, onChange) =>
          (0,emotion_react_browser_esm.jsx)(SpatialControl/* default */.Z, { value: v, onChange: onChange, choices: allCols }) } })));





  }

  renderSourceFieldset() {
    const { datasource } = this.state;
    return (
      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)("div", { className: "m-l-10 m-t-20 m-b-10" },
      DATASOURCE_TYPES_ARR.map((type) =>
      (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, {
        key: type.key,
        value: type.key,
        inline: true,
        onChange: this.onDatasourceTypeChange.bind(this, type.key),
        checked: this.state.datasourceType === type.key,
        disabled: !this.state.isEditMode },

      type.label))),



      (0,emotion_react_browser_esm.jsx)("hr", null),
      (0,emotion_react_browser_esm.jsx)(Fieldset, { item: datasource, onChange: this.onDatasourceChange, compact: true },
      this.state.datasourceType === DATASOURCE_TYPES.virtual.key &&
      (0,emotion_react_browser_esm.jsx)("div", null,
      this.state.isSqla &&
      (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 12 },
      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "databaseSelector",
        label: (0,TranslatorSingleton.t)('virtual'),
        control:
        (0,emotion_react_browser_esm.jsx)("div", { css: _ref2 },
        (0,emotion_react_browser_esm.jsx)(DatabaseSelector/* default */.Z, {
          db: datasource == null ? void 0 : datasource.database,
          schema: datasource.schema,
          onSchemaChange: (schema) =>
          this.state.isEditMode &&
          this.onDatasourcePropChange('schema', schema),

          onDbChange: (database) =>
          this.state.isEditMode &&
          this.onDatasourcePropChange('database', database),

          formMode: false,
          handleError: this.props.addDangerToast,
          readOnly: !this.state.isEditMode })) }),




      (0,emotion_react_browser_esm.jsx)("div", { css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ width: 'calc(100% - 34px)', marginTop: -16 },  true ? "" : 0,  true ? "" : 0) },
      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "table_name",
        label: (0,TranslatorSingleton.t)('Dataset name'),
        control:
        (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, {
          controlId: "table_name",
          onChange: (table) => {
            this.onDatasourcePropChange('table_name', table);
          },
          placeholder: (0,TranslatorSingleton.t)('Dataset name'),
          disabled: !this.state.isEditMode }) }))),





      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "sql",
        label: (0,TranslatorSingleton.t)('SQL'),
        description: (0,TranslatorSingleton.t)(
        'When specifying SQL, the datasource acts as a view. ' +
        'Superset will use this statement as a subquery while grouping and filtering ' +
        'on the generated parent queries.'),

        control:
        (0,emotion_react_browser_esm.jsx)(TextAreaControl/* default */.Z, {
          language: "sql",
          offerEditInModal: false,
          minLines: 20,
          maxLines: 20,
          readOnly: !this.state.isEditMode }) })),





      this.state.isDruid &&
      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "json",
        label: (0,TranslatorSingleton.t)('JSON'),
        description:
        (0,emotion_react_browser_esm.jsx)("div", null,
        (0,TranslatorSingleton.t)('The JSON metric or post aggregation definition.')),


        control:
        (0,emotion_react_browser_esm.jsx)(TextAreaControl/* default */.Z, { language: "json", offerEditInModal: false }) })),





      this.state.datasourceType === DATASOURCE_TYPES.physical.key &&
      (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 12 },
      this.state.isSqla &&
      (0,emotion_react_browser_esm.jsx)(Field, {
        fieldKey: "tableSelector",
        label: (0,TranslatorSingleton.t)('Physical'),
        control:
        (0,emotion_react_browser_esm.jsx)("div", { css: _ref3 },
        (0,emotion_react_browser_esm.jsx)(TableSelector/* default */.Z, {
          clearable: false,
          database: {
            ...datasource.database,
            database_name:
            datasource.database.database_name ||
            datasource.database.name },

          dbId: datasource.database.id,
          handleError: this.props.addDangerToast,
          schema: datasource.schema,
          sqlLabMode: false,
          tableName: datasource.table_name,
          onSchemaChange:
          this.state.isEditMode ?
          (schema) =>
          this.onDatasourcePropChange('schema', schema) :
          undefined,

          onDbChange:
          this.state.isEditMode ?
          (database) =>
          this.onDatasourcePropChange(
          'database',
          database) :

          undefined,

          onTableChange:
          this.state.isEditMode ?
          (table) =>
          this.onDatasourcePropChange('table_name', table) :
          undefined,

          readOnly: !this.state.isEditMode })),



        description: (0,TranslatorSingleton.t)(
        'The pointer to a physical table (or view). Keep in mind that the chart is ' +
        'associated to this Superset logical table, and this logical table points ' +
        'the physical table referenced here.') }))),






      this.allowEditSource &&
      (0,emotion_react_browser_esm.jsx)(EditLockContainer, null,
      (0,emotion_react_browser_esm.jsx)("span", { role: "button", tabIndex: 0, onClick: this.onChangeEditMode },
      this.state.isEditMode ?
      (0,emotion_react_browser_esm.jsx)(Icons/* default.LockUnlocked */.Z.LockUnlocked, {
        iconColor: style/* supersetTheme.colors.grayscale.base */.K6.colors.grayscale.base }) :


      (0,emotion_react_browser_esm.jsx)(Icons/* default.LockLocked */.Z.LockLocked, {
        iconColor: style/* supersetTheme.colors.grayscale.base */.K6.colors.grayscale.base })),



      !this.state.isEditMode &&
      (0,emotion_react_browser_esm.jsx)("div", null, (0,TranslatorSingleton.t)('Click the lock to make changes.')),

      this.state.isEditMode &&
      (0,emotion_react_browser_esm.jsx)("div", null, (0,TranslatorSingleton.t)('Click the lock to prevent further changes.')))));





  }

  renderErrors() {
    if (this.state.errors.length > 0) {
      return (
        (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, {
          css: (theme) => ({ marginBottom: theme.gridUnit * 4 }),
          type: "error",
          message:
          (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
          this.state.errors.map((err) =>
          (0,emotion_react_browser_esm.jsx)("div", { key: err }, err))) }));





    }
    return null;
  }

  renderMetricCollection() {
    const { datasource } = this.state;
    const { metrics } = datasource;
    const sortedMetrics = metrics != null && metrics.length ? this.sortMetrics(metrics) : [];
    return (
      (0,emotion_react_browser_esm.jsx)(CRUDCollection, {
        tableColumns: ['metric_name', 'verbose_name', 'expression'],
        sortColumns: ['metric_name', 'verbose_name', 'expression'],
        columnLabels: {
          metric_name: (0,TranslatorSingleton.t)('Metric'),
          verbose_name: (0,TranslatorSingleton.t)('Label'),
          expression: (0,TranslatorSingleton.t)('SQL expression') },

        expandFieldset:
        (0,emotion_react_browser_esm.jsx)(FormContainer, null,
        (0,emotion_react_browser_esm.jsx)(Fieldset, { compact: true },
        (0,emotion_react_browser_esm.jsx)(Field, {
          fieldKey: "verbose_name",
          label: (0,TranslatorSingleton.t)('Label'),
          control: (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, { controlId: "verbose_name" }) }),

        (0,emotion_react_browser_esm.jsx)(Field, {
          fieldKey: "description",
          label: (0,TranslatorSingleton.t)('Description'),
          control:
          (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, {
            controlId: "description",
            placeholder: (0,TranslatorSingleton.t)('Description') }) }),



        (0,emotion_react_browser_esm.jsx)(Field, {
          fieldKey: "d3format",
          label: (0,TranslatorSingleton.t)('D3 format'),
          control:
          (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, { controlId: "d3format", placeholder: "%y/%m/%d" }) }),


        (0,emotion_react_browser_esm.jsx)(Field, {
          label: (0,TranslatorSingleton.t)('Certified by'),
          fieldKey: "certified_by",
          description: (0,TranslatorSingleton.t)(
          'Person or group that has certified this metric'),

          control:
          (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, {
            controlId: "certified_by",
            placeholder: (0,TranslatorSingleton.t)('Certified by') }) }),



        (0,emotion_react_browser_esm.jsx)(Field, {
          label: (0,TranslatorSingleton.t)('Certification details'),
          fieldKey: "certification_details",
          description: (0,TranslatorSingleton.t)('Details of the certification'),
          control:
          (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, {
            controlId: "certification_details",
            placeholder: (0,TranslatorSingleton.t)('Certification details') }) }),



        (0,emotion_react_browser_esm.jsx)(Field, {
          label: (0,TranslatorSingleton.t)('Warning'),
          fieldKey: "warning_markdown",
          description: (0,TranslatorSingleton.t)('Optional warning about use of this metric'),
          control:
          (0,emotion_react_browser_esm.jsx)(TextAreaControl/* default */.Z, {
            controlId: "warning_markdown",
            language: "markdown",
            offerEditInModal: false }) }))),






        collection: sortedMetrics,
        allowAddItem: true,
        onChange: this.onDatasourcePropChange.bind(this, 'metrics'),
        itemGenerator: () => ({
          metric_name: '<new metric>',
          verbose_name: '',
          expression: '' }),

        itemRenderers: {
          metric_name: (v, onChange, _, record) =>
          (0,emotion_react_browser_esm.jsx)(FlexRowContainer, null,
          record.is_certified &&
          (0,emotion_react_browser_esm.jsx)(CertifiedIcon/* default */.Z, {
            certifiedBy: record.certified_by,
            details: record.certification_details }),


          record.warning_markdown &&
          (0,emotion_react_browser_esm.jsx)(WarningIconWithTooltip/* default */.Z, {
            warningMarkdown: record.warning_markdown }),


          (0,emotion_react_browser_esm.jsx)(EditableTitle/* default */.Z, { canEdit: true, title: v, onSaveTitle: onChange })),


          verbose_name: (v, onChange) =>
          (0,emotion_react_browser_esm.jsx)(EditableTitle/* default */.Z, { canEdit: true, title: v, onSaveTitle: onChange }),

          expression: (v, onChange) =>
          (0,emotion_react_browser_esm.jsx)(EditableTitle/* default */.Z, {
            canEdit: true,
            title: v,
            onSaveTitle: onChange,
            extraClasses: ['datasource-sql-expression'],
            multiLine: true }),


          description: (v, onChange, label) =>
          (0,emotion_react_browser_esm.jsx)(StackedField, {
            label: label,
            formElement: (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, { value: v, onChange: onChange }) }),


          d3format: (v, onChange, label) =>
          (0,emotion_react_browser_esm.jsx)(StackedField, {
            label: label,
            formElement: (0,emotion_react_browser_esm.jsx)(TextControl/* default */.Z, { value: v, onChange: onChange }) }) },



        allowDeletes: true,
        stickyHeader: true }));


  }

  render() {
    const { datasource, activeTabKey } = this.state;
    const { metrics } = datasource;
    const sortedMetrics = metrics != null && metrics.length ? this.sortMetrics(metrics) : [];
    return (
      (0,emotion_react_browser_esm.jsx)(DatasourceContainer, null,
      this.renderErrors(),
      (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, {
        css: (theme) => ({ marginBottom: theme.gridUnit * 4 }),
        type: "warning",
        message:
        (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
        ' ',
        (0,emotion_react_browser_esm.jsx)("strong", null, (0,TranslatorSingleton.t)('Be careful.'), " "),
        (0,TranslatorSingleton.t)(
        'Changing these settings will affect all charts using this dataset, including charts owned by other people.')) }),




      (0,emotion_react_browser_esm.jsx)(StyledTableTabs, {
        fullWidth: false,
        id: "table-tabs",

        onChange: this.handleTabSelect,
        defaultActiveKey: activeTabKey },

      (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { key: 0, tab: (0,TranslatorSingleton.t)('Source') },
      this.renderSourceFieldset()),

      (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, {
        tab:
        (0,emotion_react_browser_esm.jsx)(CollectionTabTitle, {
          collection: sortedMetrics,
          title: (0,TranslatorSingleton.t)('Metrics') }),


        key: 1 },

      this.renderMetricCollection()),

      (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, {
        tab:
        (0,emotion_react_browser_esm.jsx)(CollectionTabTitle, {
          collection: this.state.databaseColumns,
          title: (0,TranslatorSingleton.t)('Columns') }),


        key: 2 },

      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(ColumnButtonWrapper, null,
      (0,emotion_react_browser_esm.jsx)("span", { className: "m-t-10 m-r-10" },
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        buttonSize: "small",
        buttonStyle: "tertiary",
        onClick: this.syncMetadata,
        className: "sync-from-source",
        disabled: this.state.isEditMode },

      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-database" }), ' ',
      (0,TranslatorSingleton.t)('Sync columns from source')))),



      (0,emotion_react_browser_esm.jsx)(ColumnCollectionTable, {
        className: "columns-table",
        columns: this.state.databaseColumns,
        onChange: (databaseColumns) =>
        this.setColumns({ databaseColumns }) }),


      this.state.metadataLoading && (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null))),


      (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, {
        tab:
        (0,emotion_react_browser_esm.jsx)(CollectionTabTitle, {
          collection: this.state.calculatedColumns,
          title: (0,TranslatorSingleton.t)('Calculated columns') }),


        key: 3 },

      (0,emotion_react_browser_esm.jsx)(ColumnCollectionTable, {
        columns: this.state.calculatedColumns,
        onChange: (calculatedColumns) =>
        this.setColumns({ calculatedColumns }),

        editableColumnName: true,
        showExpression: true,
        allowAddItem: true,
        allowEditDataType: true,
        itemGenerator: () => ({
          column_name: '<new column>',
          filterable: true,
          groupby: true,
          expression: '<enter SQL expression here>',
          __expanded: true }) })),



      (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { key: 4, tab: (0,TranslatorSingleton.t)('Settings') },
      (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, { gutter: 16 },
      (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 12 },
      (0,emotion_react_browser_esm.jsx)(FormContainer, null, this.renderSettingsFieldset())),

      (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 12 },
      (0,emotion_react_browser_esm.jsx)(FormContainer, null, this.renderAdvancedFieldset())))))));






  }}


DatasourceEditor.defaultProps = DatasourceEditor_defaultProps;
DatasourceEditor.propTypes = DatasourceEditor_propTypes;

/* harmony default export */ const datasource_DatasourceEditor = ((0,withToasts/* default */.Z)(DatasourceEditor));

/***/ }),

/***/ 83268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37840);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38097);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58593);
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




function CertifiedIcon({ certifiedBy, details, size = 'l' }) {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Tooltip */ .u, { id: "certified-details-tooltip", title: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    certifiedBy && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", null,
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('Certified by %s', certifiedBy))),

    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", null, details)) },

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Certified */ .Z.Certified, { iconColor: _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .supersetTheme.colors.primary.base */ .K6.colors.primary.base, iconSize: size }));

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CertifiedIcon);

/***/ }),

/***/ 73995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DatabaseSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21173);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60650);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15926);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33346);
/* harmony import */ var src_components_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37921);
/* harmony import */ var src_components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49238);
/* harmony import */ var src_components_RefreshLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40277);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11965);
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







const DatabaseSelectorWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .styled.div */ .iK.div`
  ${({ theme }) => `
    .refresh {
      display: flex;
      align-items: center;
      width: 30px;
      margin-left: ${theme.gridUnit}px;
      margin-top: ${theme.gridUnit * 5}px;
    }

    .section {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .select {
      flex: 1;
    }

    & > div {
      margin-bottom: ${theme.gridUnit * 4}px;
    }
  `}
`;
const LabelStyle = _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .styled.div */ .iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${({ theme }) => theme.gridUnit - 2}px;
`;
const SelectLabel = ({ backend, databaseName }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(LabelStyle, null,
(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Label__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null, backend),
databaseName);

function DatabaseSelector({ db, formMode = false, getDbList, handleError, isDatabaseSelectEnabled = true, onDbChange, onSchemaChange, onSchemasLoad, readOnly = false, schema, sqlLabMode = false }) {
  const [loadingSchemas, setLoadingSchemas] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [schemaOptions, setSchemaOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [currentDb, setCurrentDb] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(db ?
  {
    label: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(SelectLabel, { backend: db.backend, databaseName: db.database_name }),
    value: db.id,
    ...db } :

  undefined);
  const [currentSchema, setCurrentSchema] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(schema ? { label: schema, value: schema } : undefined);
  const [refresh, setRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const loadDatabases = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => async (search, page, pageSize) => {
    const queryParams = rison__WEBPACK_IMPORTED_MODULE_1___default().encode({
      order_columns: 'database_name',
      order_direction: 'asc',
      page,
      page_size: pageSize,
      ...(formMode || !sqlLabMode ?
      { filters: [{ col: 'database_name', opr: 'ct', value: search }] } :
      {
        filters: [
        { col: 'database_name', opr: 'ct', value: search },
        {
          col: 'expose_in_sqllab',
          opr: 'eq',
          value: true }] }) });




    const endpoint = `/api/v1/database/?q=${queryParams}`;
    return _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"].get */ .Z.get({ endpoint }).then(({ json }) => {
      const { result } = json;
      if (getDbList) {
        getDbList(result);
      }
      if (result.length === 0) {
        handleError((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)("It seems you don't have access to any database"));
      }
      const options = result.map((row) => ({
        label: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(SelectLabel, { backend: row.backend, databaseName: row.database_name }),
        value: row.id,
        id: row.id,
        database_name: row.database_name,
        backend: row.backend,
        allow_multi_schema_metadata_fetch: row.allow_multi_schema_metadata_fetch }));

      return {
        data: options,
        totalCount: options.length };

    });
  }, [formMode, getDbList, handleError, sqlLabMode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (currentDb) {
      setLoadingSchemas(true);
      const queryParams = rison__WEBPACK_IMPORTED_MODULE_1___default().encode({ force: refresh > 0 });
      const endpoint = `/api/v1/database/${currentDb.value}/schemas/?q=${queryParams}`;
      // TODO: Would be nice to add pagination in a follow-up. Needs endpoint changes.
      _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"].get */ .Z.get({ endpoint }).
      then(({ json }) => {
        const options = json.result.
        map((s) => ({
          value: s,
          label: s,
          title: s })).

        sort((a, b) => a.label.localeCompare(b.label));
        if (onSchemasLoad) {
          onSchemasLoad(options);
        }
        setSchemaOptions(options);
        setLoadingSchemas(false);
      }).
      catch((e) => {
        setLoadingSchemas(false);
        handleError((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('There was an error loading the schemas'));
      });
    }
  }, [currentDb, onSchemasLoad, refresh]);
  function changeDataBase(value, database) {
    setCurrentDb(database);
    setCurrentSchema(undefined);
    if (onDbChange) {
      onDbChange(database);
    }
    if (onSchemaChange) {
      onSchemaChange(undefined);
    }
  }
  function changeSchema(schema) {
    setCurrentSchema(schema);
    if (onSchemaChange) {
      onSchemaChange(schema.value);
    }
  }
  function renderSelectRow(select, refreshBtn) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "section" },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", { className: "select" }, select),
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", { className: "refresh" }, refreshBtn));

  }
  function renderDatabaseSelect() {
    return renderSelectRow((0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components__WEBPACK_IMPORTED_MODULE_2__/* .Select */ .P, { ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Select database or type database name'), optionFilterProps: ['database_name', 'value'], header: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Form__WEBPACK_IMPORTED_MODULE_4__/* .FormLabel */ .lX, null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Database')), lazyLoading: false, onChange: changeDataBase, value: currentDb, placeholder: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Select database or type database name'), disabled: !isDatabaseSelectEnabled || readOnly, options: loadDatabases }), null);
  }
  function renderSchemaSelect() {
    const refreshIcon = !formMode && !readOnly && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_RefreshLabel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, { onClick: () => setRefresh(refresh + 1), tooltipContent: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Force refresh schema list') });
    return renderSelectRow((0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components__WEBPACK_IMPORTED_MODULE_2__/* .Select */ .P, { ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Select schema or type schema name'), disabled: readOnly, header: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Form__WEBPACK_IMPORTED_MODULE_4__/* .FormLabel */ .lX, null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Schema')), labelInValue: true, lazyLoading: false, loading: loadingSchemas, name: "select-schema", placeholder: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_9__.t)('Select schema or type schema name'), onChange: (item) => changeSchema(item), options: schemaOptions, showSearch: true, value: currentSchema }), refreshIcon);
  }
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(DatabaseSelectorWrapper, null,
  renderDatabaseSelect(),
  renderSchemaSelect());

}

/***/ }),

/***/ 38270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EditableTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58593);
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




function EditableTitle({ canEdit = false, editing = false, extraClasses, multiLine = false, noPermitTooltip, onSaveTitle, showTooltip = true, style, title = '', defaultTitle = '', placeholder = '' }) {
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(editing);
  const [currentTitle, setCurrentTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(title);
  const [lastTitle, setLastTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(title);
  const [contentBoundingRect, setContentBoundingRect] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  // Used so we can access the DOM element if a user clicks on this component.
  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (title !== currentTitle) {
      setLastTitle(currentTitle);
      setCurrentTitle(title);
    }
  }, [title]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isEditing) {
      contentRef.current.focus();
      // move cursor and scroll to the end
      if (contentRef.current.setSelectionRange) {
        const { length } = contentRef.current.value;
        contentRef.current.setSelectionRange(length, length);
        contentRef.current.scrollLeft = contentRef.current.scrollWidth;
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
      }
    }
  }, [isEditing]);
  function handleClick() {
    if (!canEdit || isEditing) {
      return;
    }
    // For multi-line values, save the actual rendered size of the displayed text.
    // Later, if a textarea is constructed for editing the value, we'll need this.
    const contentBounding = contentRef.current ?
    contentRef.current.getBoundingClientRect() :
    null;
    setIsEditing(true);
    setContentBoundingRect(contentBounding);
  }
  function handleBlur() {
    const formattedTitle = currentTitle.trim();
    if (!canEdit) {
      return;
    }
    setIsEditing(false);
    if (!formattedTitle.length) {
      setCurrentTitle(lastTitle);
      return;
    }
    if (lastTitle !== formattedTitle) {
      setLastTitle(formattedTitle);
    }
    if (title !== formattedTitle) {
      onSaveTitle(formattedTitle);
    }
  }
  // tl;dr when a EditableTitle is being edited, typically the Tab that wraps it has been
  // clicked and is focused/active. For accessibility, when the focused tab anchor intercepts
  // the ' ' key (among others, including all arrows) the onChange() doesn't fire. Somehow
  // keydown is still called so we can detect this and manually add a ' ' to the current title
  function handleKeyDown(event) {
    if (event.key === ' ') {
      event.stopPropagation();
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      handleBlur();
    }
  }
  function handleChange(ev) {
    if (!canEdit) {
      return;
    }
    setCurrentTitle(ev.target.value);
  }
  function handleKeyPress(ev) {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      handleBlur();
    }
  }
  let value;
  value = currentTitle;
  if (!isEditing && !currentTitle) {
    value = defaultTitle || title;
  }
  // Construct an inline style based on previously-saved height of the rendered label. Only
  // used in multi-line contexts.
  const editStyle = isEditing && contentBoundingRect ?
  { height: `${contentBoundingRect.height}px` } :
  undefined;
  // Create a textarea when we're editing a multi-line value, otherwise create an input (which may
  // be text or a button).
  let titleComponent = multiLine && isEditing ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", { ref: contentRef, value: value, className: !title ? 'text-muted' : undefined, onKeyDown: handleKeyDown, onChange: handleChange, onBlur: handleBlur, onClick: handleClick, onKeyPress: handleKeyPress, placeholder: placeholder, style: editStyle }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", { ref: contentRef, type: isEditing ? 'text' : 'button', value: value, className: !title ? 'text-muted' : undefined, onKeyDown: handleKeyDown, onChange: handleChange, onBlur: handleBlur, onClick: handleClick, onKeyPress: handleKeyPress, placeholder: placeholder });
  if (showTooltip && !isEditing) {
    titleComponent = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Tooltip */ .u, { id: "title-tooltip", title: canEdit ?
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('Click to edit') :
      noPermitTooltip ||
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)("You don't have the rights to alter this title.") },
    titleComponent);

  }
  if (!canEdit) {
    // don't actually want an input in this case
    titleComponent = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", { title: value },
    value);

  }
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('editable-title', extraClasses, canEdit && 'editable-title--editable', isEditing && 'editable-title--editing'), style: style },
  titleComponent);

}

/***/ }),

/***/ 40277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58593);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38097);
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



const RefreshLabel = ({ onClick, tooltipContent }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const IconWithoutRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Refresh */ .Z.Refresh, props));
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__/* .Tooltip */ .u, { title: tooltipContent },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(IconWithoutRef, { role: "button", onClick: onClick, css: (theme) => ({
      cursor: 'pointer',
      color: theme.colors.grayscale.base,
      '&:hover': { color: theme.colors.primary.base } }) }));


};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefreshLabel);

/***/ }),

/***/ 17982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21173);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60650);
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33346);
/* harmony import */ var src_components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49238);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38097);
/* harmony import */ var src_components_DatabaseSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73995);
/* harmony import */ var src_components_RefreshLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40277);
/* harmony import */ var src_components_CertifiedIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83268);
/* harmony import */ var src_components_WarningIconWithTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86057);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11965);
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









const TableSelectorWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .styled.div */ .iK.div`
  ${({ theme }) => `
    .refresh {
      display: flex;
      align-items: center;
      width: 30px;
      margin-left: ${theme.gridUnit}px;
      margin-top: ${theme.gridUnit * 5}px;
    }

    .section {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .divider {
      border-bottom: 1px solid ${theme.colors.secondary.light5};
      margin: 15px 0;
    }

    .table-length {
      color: ${theme.colors.grayscale.light1};
    }

    .select {
      flex: 1;
    }
  `}
`;
const TableLabel = _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .styled.span */ .iK.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({ theme }) => theme.gridUnit}px;
  }
`;
const TableOption = ({ table }) => {
  const { label, type, extra } = table;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(TableLabel, { title: label },
  type === 'view' ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Eye */ .Z.Eye, { iconSize: "m" }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Table */ .Z.Table, { iconSize: "m" }),
  (extra == null ? void 0 : extra.certification) && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_CertifiedIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, { certifiedBy: extra.certification.certified_by, details: extra.certification.details, size: "l" }),
  (extra == null ? void 0 : extra.warning_markdown) && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_WarningIconWithTooltip__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, { warningMarkdown: extra.warning_markdown, size: "l" }),
  label);

};
const TableSelector = ({ database, formMode = false, getDbList, handleError, isDatabaseSelectEnabled = true, onDbChange, onSchemaChange, onSchemasLoad, onTableChange, onTablesLoad, readOnly = false, schema, sqlLabMode = true, tableName }) => {
  const [currentDatabase, setCurrentDatabase] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(database);
  const [currentSchema, setCurrentSchema] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(schema);
  const [currentTable, setCurrentTable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [refresh, setRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [previousRefresh, setPreviousRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [loadingTables, setLoadingTables] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [tableOptions, setTableOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // reset selections
    if (database === undefined) {
      setCurrentDatabase(undefined);
      setCurrentSchema(undefined);
      setCurrentTable(undefined);
    }
  }, [database]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (currentDatabase && currentSchema) {
      setLoadingTables(true);
      const encodedSchema = encodeURIComponent(currentSchema);
      const forceRefresh = refresh !== previousRefresh;
      // TODO: Would be nice to add pagination in a follow-up. Needs endpoint changes.
      const endpoint = encodeURI(`/superset/tables/${currentDatabase.id}/${encodedSchema}/undefined/${forceRefresh}/`);
      if (previousRefresh !== refresh) {
        setPreviousRefresh(refresh);
      }
      _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"].get */ .Z.get({ endpoint }).
      then(({ json }) => {
        const options = [];
        let currentTable;
        json.options.forEach((table) => {
          const option = {
            value: table.value,
            label: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(TableOption, { table: table }),
            text: table.label };

          options.push(option);
          if (table.label === tableName) {
            currentTable = option;
          }
        });
        if (onTablesLoad) {
          onTablesLoad(json.options);
        }
        setTableOptions(options.sort((a, b) => a.text.localeCompare(b.text)));
        setCurrentTable(currentTable);
        setLoadingTables(false);
      }).
      catch((e) => {
        setLoadingTables(false);
        handleError((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.t)('There was an error loading the tables'));
      });
    }
    // We are using the refresh state to re-trigger the query
    // previousRefresh should be out of dependencies array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDatabase, currentSchema, onTablesLoad, refresh]);
  function renderSelectRow(select, refreshBtn) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "section" },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "select" }, select),
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "refresh" }, refreshBtn));

  }
  const internalTableChange = (table) => {
    setCurrentTable(table);
    if (onTableChange && currentSchema) {
      onTableChange(table == null ? void 0 : table.value, currentSchema);
    }
  };
  const internalDbChange = (db) => {
    setCurrentDatabase(db);
    if (onDbChange) {
      onDbChange(db);
    }
  };
  const internalSchemaChange = (schema) => {
    setCurrentSchema(schema);
    if (onSchemaChange) {
      onSchemaChange(schema);
    }
    internalTableChange(undefined);
  };
  function renderDatabaseSelector() {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_DatabaseSelector__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, { key: currentDatabase == null ? void 0 : currentDatabase.id, db: currentDatabase, formMode: formMode, getDbList: getDbList, handleError: handleError, onDbChange: readOnly ? undefined : internalDbChange, onSchemaChange: readOnly ? undefined : internalSchemaChange, onSchemasLoad: onSchemasLoad, schema: currentSchema, sqlLabMode: sqlLabMode, isDatabaseSelectEnabled: isDatabaseSelectEnabled && !readOnly, readOnly: readOnly });
  }
  const handleFilterOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (search, option) => {
    const searchValue = search.trim().toLowerCase();
    const { text } = option;
    return text.toLowerCase().includes(searchValue);
  }, []);
  function renderTableSelect() {
    const disabled = currentSchema && !formMode && readOnly ||
    !currentSchema && !(database != null && database.allow_multi_schema_metadata_fetch);
    const header = sqlLabMode ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Form__WEBPACK_IMPORTED_MODULE_2__/* .FormLabel */ .lX, null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.t)('See table schema')) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_Form__WEBPACK_IMPORTED_MODULE_2__/* .FormLabel */ .lX, null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.t)('Table'));
    const select = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components__WEBPACK_IMPORTED_MODULE_1__/* .Select */ .P, { ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.t)('Select table or type table name'), disabled: disabled, filterOption: handleFilterOption, header: header, labelInValue: true, lazyLoading: false, loading: loadingTables, name: "select-table", onChange: (table) => internalTableChange(table), options: tableOptions, placeholder: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.t)('Select table or type table name'), showSearch: true, value: currentTable });
    const refreshLabel = !formMode && !readOnly && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(src_components_RefreshLabel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, { onClick: () => setRefresh(refresh + 1), tooltipContent: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__.t)('Force refresh table list') });
    return renderSelectRow(select, refreshLabel);
  }
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(TableSelectorWrapper, null,
  renderDatabaseSelector(),
  sqlLabMode && !formMode && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "divider" }),
  renderTableSelect());

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableSelector);

/***/ })

}]);