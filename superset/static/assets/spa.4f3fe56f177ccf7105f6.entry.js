/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 39969:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(57641);

/***/ }),

/***/ 40701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J0": () => (/* binding */ CREATE_COMPONENT),
  "YA": () => (/* binding */ CREATE_TOP_LEVEL_TABS),
  "bK": () => (/* binding */ DASHBOARD_TITLE_CHANGED),
  "CB": () => (/* binding */ DELETE_COMPONENT),
  "Mu": () => (/* binding */ DELETE_TOP_LEVEL_TABS),
  "L1": () => (/* binding */ HANDLE_COMPONENT_DROP),
  "aZ": () => (/* binding */ MOVE_COMPONENT),
  "qL": () => (/* binding */ RESIZE_COMPONENT),
  "nj": () => (/* binding */ UPDATE_COMPONENTS),
  "x_": () => (/* binding */ UPDATE_COMPONENTS_PARENTS_LIST),
  "LM": () => (/* binding */ createComponent),
  "Ww": () => (/* binding */ dashboardTitleChanged),
  "v7": () => (/* binding */ deleteComponent),
  "g3": () => (/* binding */ deleteTopLevelTabs),
  "_p": () => (/* binding */ handleComponentDrop),
  "az": () => (/* binding */ redoLayoutAction),
  "iO": () => (/* binding */ resizeComponent),
  "Ou": () => (/* binding */ undoLayoutAction),
  "WZ": () => (/* binding */ updateComponents),
  "A7": () => (/* binding */ updateDashboardTitle)
});

// UNUSED EXPORTS: createTopLevelTabs

// EXTERNAL MODULE: ./node_modules/redux-undo/lib/index.js
var lib = __webpack_require__(21090);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./src/components/MessageToasts/actions.ts
var actions = __webpack_require__(72570);
// EXTERNAL MODULE: ./src/dashboard/util/componentTypes.ts
var componentTypes = __webpack_require__(81255);
// EXTERNAL MODULE: ./src/dashboard/util/constants.ts
var constants = __webpack_require__(80621);
// EXTERNAL MODULE: ./src/dashboard/util/getComponentWidthFromDrop.js
var getComponentWidthFromDrop = __webpack_require__(47456);
;// CONCATENATED MODULE: ./src/dashboard/util/dropOverflowsParent.js
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


function doesChildOverflowParent(dropResult, layout) {
  const childWidth = (0,getComponentWidthFromDrop/* default */.Z)({ dropResult, layout });
  return typeof childWidth === 'number' && childWidth < 0;
}
// EXTERNAL MODULE: ./src/dashboard/util/findParentId.js
var findParentId = __webpack_require__(44803);
;// CONCATENATED MODULE: ./src/dashboard/util/isInDifferentFilterScopes.js
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
function isInDifferentFilterScopes({
  dashboardFilters = {},
  source = [],
  destination = [] })
{
  const sourceSet = new Set(source);
  const destinationSet = new Set(destination);

  const allScopes = [].concat(
  ...Object.values(dashboardFilters).map(({ scopes }) =>
  [].concat(...Object.values(scopes).map(({ scope }) => scope))));


  return allScopes.some((tab) => destinationSet.has(tab) !== sourceSet.has(tab));
}
// EXTERNAL MODULE: ./src/dashboard/actions/dashboardFilters.js
var dashboardFilters = __webpack_require__(86422);
// EXTERNAL MODULE: ./src/dashboard/actions/dashboardState.js + 1 modules
var actions_dashboardState = __webpack_require__(31758);
;// CONCATENATED MODULE: ./src/dashboard/actions/dashboardLayout.js
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











// Component CRUD -------------------------------------------------------------
const UPDATE_COMPONENTS = 'UPDATE_COMPONENTS';

// this is a helper that takes an action as input and dispatches
// an additional setUnsavedChanges(true) action after the dispatch in the case
// that dashboardState.hasUnsavedChanges is false.
function setUnsavedChangesAfterAction(action) {
  return (...args) => (dispatch, getState) => {
    const result = action(...args);
    if (typeof result === 'function') {
      dispatch(result(dispatch, getState));
    } else {
      dispatch(result);
    }

    const isComponentLevelEvent =
    result.type === UPDATE_COMPONENTS &&
    result.payload &&
    result.payload.nextComponents;
    // trigger dashboardFilters state update if dashboard layout is changed.
    if (!isComponentLevelEvent) {
      const components = getState().dashboardLayout.present;
      dispatch((0,dashboardFilters/* updateLayoutComponents */.P_)(components));
    }

    if (!getState().dashboardState.hasUnsavedChanges) {
      dispatch((0,actions_dashboardState/* setUnsavedChanges */["if"])(true));
    }
  };
}

const updateComponents = setUnsavedChangesAfterAction(
(nextComponents) => ({
  type: UPDATE_COMPONENTS,
  payload: {
    nextComponents } }));




function updateDashboardTitle(text) {
  return (dispatch, getState) => {
    const { dashboardLayout } = getState();
    dispatch(
    updateComponents({
      [constants/* DASHBOARD_HEADER_ID */.M2]: {
        ...dashboardLayout.present[constants/* DASHBOARD_HEADER_ID */.M2],
        meta: {
          text } } }));




  };
}

const DASHBOARD_TITLE_CHANGED = 'DASHBOARD_TITLE_CHANGED';

// call this one when it's not an undo-able action
function dashboardTitleChanged(text) {
  return {
    type: DASHBOARD_TITLE_CHANGED,
    text };

}

const DELETE_COMPONENT = 'DELETE_COMPONENT';
const deleteComponent = setUnsavedChangesAfterAction((id, parentId) => ({
  type: DELETE_COMPONENT,
  payload: {
    id,
    parentId } }));



const CREATE_COMPONENT = 'CREATE_COMPONENT';
const createComponent = setUnsavedChangesAfterAction((dropResult) => ({
  type: CREATE_COMPONENT,
  payload: {
    dropResult } }));



// Tabs -----------------------------------------------------------------------
const CREATE_TOP_LEVEL_TABS = 'CREATE_TOP_LEVEL_TABS';
const createTopLevelTabs = setUnsavedChangesAfterAction((dropResult) => ({
  type: CREATE_TOP_LEVEL_TABS,
  payload: {
    dropResult } }));



const DELETE_TOP_LEVEL_TABS = 'DELETE_TOP_LEVEL_TABS';
const deleteTopLevelTabs = setUnsavedChangesAfterAction(() => ({
  type: DELETE_TOP_LEVEL_TABS,
  payload: {} }));


// Resize ---------------------------------------------------------------------
const RESIZE_COMPONENT = 'RESIZE_COMPONENT';
function resizeComponent({ id, width, height }) {
  return (dispatch, getState) => {
    const { dashboardLayout: undoableLayout } = getState();
    const { present: dashboard } = undoableLayout;
    const component = dashboard[id];
    const widthChanged = width && component.meta.width !== width;
    const heightChanged = height && component.meta.height !== height;
    if (component && (widthChanged || heightChanged)) {
      // update the size of this component
      const updatedComponents = {
        [id]: {
          ...component,
          meta: {
            ...component.meta,
            width: width || component.meta.width,
            height: height || component.meta.height } } };




      dispatch(updateComponents(updatedComponents));
    }
  };
}

// Drag and drop --------------------------------------------------------------
const MOVE_COMPONENT = 'MOVE_COMPONENT';
const moveComponent = setUnsavedChangesAfterAction((dropResult) => ({
  type: MOVE_COMPONENT,
  payload: {
    dropResult } }));



const HANDLE_COMPONENT_DROP = 'HANDLE_COMPONENT_DROP';
function handleComponentDrop(dropResult) {
  return (dispatch, getState) => {
    const overflowsParent = doesChildOverflowParent(
    dropResult,
    getState().dashboardLayout.present);


    if (overflowsParent) {
      return dispatch(
      (0,actions/* addWarningToast */.Dz)(
      (0,TranslatorSingleton.t)(
      `There is not enough space for this component. Try decreasing its width, or increasing the destination width.`)));



    }

    const { source, destination } = dropResult;
    const droppedOnRoot = destination && destination.id === constants/* DASHBOARD_ROOT_ID */._4;
    const isNewComponent = source.id === constants/* NEW_COMPONENTS_SOURCE_ID */.D0;
    const dashboardRoot = getState().dashboardLayout.present[constants/* DASHBOARD_ROOT_ID */._4];
    const rootChildId =
    dashboardRoot && dashboardRoot.children ? dashboardRoot.children[0] : '';

    if (droppedOnRoot) {
      dispatch(createTopLevelTabs(dropResult));
    } else if (destination && isNewComponent) {
      dispatch(createComponent(dropResult));
    } else if (
    // Add additional allow-to-drop logic for tag/tags source.
    // We only allow
    // - top-level tab => top-level tab: rearrange top-level tab order
    // - nested tab => top-level tab: allow row tab become top-level tab
    // Dashboard does not allow top-level tab become nested tab, to avoid
    // nested tab inside nested tab.
    source.type === componentTypes/* TABS_TYPE */.yR &&
    destination.type === componentTypes/* TABS_TYPE */.yR &&
    source.id === rootChildId &&
    destination.id !== rootChildId)
    {
      return dispatch(
      (0,actions/* addWarningToast */.Dz)((0,TranslatorSingleton.t)(`Can not move top level tab into nested tabs`)));

    } else if (
    destination &&
    source &&
    !(

    destination.id === source.id && destination.index === source.index))

    {
      dispatch(moveComponent(dropResult));
    }

    // call getState() again down here in case redux state is stale after
    // previous dispatch(es)
    const { dashboardFilters, dashboardLayout: undoableLayout } = getState();

    // if we moved a child from a Tab or Row parent and it was the only child, delete the parent.
    if (!isNewComponent) {
      const { present: layout } = undoableLayout;
      const sourceComponent = layout[source.id] || {};
      const destinationComponent = layout[destination.id] || {};
      if (
      (sourceComponent.type === componentTypes/* TABS_TYPE */.yR ||
      sourceComponent.type === componentTypes/* ROW_TYPE */.Os) &&
      sourceComponent.children &&
      sourceComponent.children.length === 0)
      {
        const parentId = (0,findParentId/* default */.Z)({
          childId: source.id,
          layout });

        dispatch(deleteComponent(source.id, parentId));
      }

      // show warning if item has been moved between different scope
      if (
      isInDifferentFilterScopes({
        dashboardFilters,
        source: (sourceComponent.parents || []).concat(source.id),
        destination: (destinationComponent.parents || []).concat(
        destination.id) }))


      {
        dispatch(
        (0,actions/* addWarningToast */.Dz)(
        (0,TranslatorSingleton.t)('This chart has been moved to a different filter scope.')));


      }
    }

    return null;
  };
}

// Undo redo ------------------------------------------------------------------
function undoLayoutAction() {
  return (dispatch, getState) => {
    dispatch(lib/* ActionCreators.undo */.zF.undo());

    const { dashboardLayout, dashboardState } = getState();

    if (
    dashboardLayout.past.length === 0 &&
    !dashboardState.maxUndoHistoryExceeded &&
    !dashboardState.updatedColorScheme)
    {
      dispatch((0,actions_dashboardState/* setUnsavedChanges */["if"])(false));
    }
  };
}

const redoLayoutAction = setUnsavedChangesAfterAction(
lib/* ActionCreators.redo */.zF.redo);


// Update component parents list ----------------------------------------------
const UPDATE_COMPONENTS_PARENTS_LIST = 'UPDATE_COMPONENTS_PARENTS_LIST';

/***/ }),

/***/ 31758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BD": () => (/* binding */ ADD_SLICE),
  "P0": () => (/* binding */ ON_CHANGE),
  "ec": () => (/* binding */ ON_REFRESH),
  "k5": () => (/* binding */ ON_REFRESH_SUCCESS),
  "Ii": () => (/* binding */ ON_SAVE),
  "Vd": () => (/* binding */ REMOVE_SLICE),
  "nV": () => (/* binding */ SET_ACTIVE_TABS),
  "J$": () => (/* binding */ SET_COLOR_SCHEME),
  "RU": () => (/* binding */ SET_DIRECT_PATH),
  "$f": () => (/* binding */ SET_EDIT_MODE),
  "mq": () => (/* binding */ SET_FOCUSED_FILTER_FIELD),
  "r$": () => (/* binding */ SET_FULL_SIZE_CHART_ID),
  "n1": () => (/* binding */ SET_MAX_UNDO_HISTORY_EXCEEDED),
  "yV": () => (/* binding */ SET_REFRESH_FREQUENCY),
  "ee": () => (/* binding */ SET_UNSAVED_CHANGES),
  "oJ": () => (/* binding */ SHOW_BUILDER_PANE),
  "ek": () => (/* binding */ TOGGLE_EXPAND_SLICE),
  "Z9": () => (/* binding */ TOGGLE_FAVE_STAR),
  "H9": () => (/* binding */ TOGGLE_PUBLISHED),
  "Iw": () => (/* binding */ UNSET_FOCUSED_FILTER_FIELD),
  "Be": () => (/* binding */ UPDATE_CSS),
  "Pi": () => (/* binding */ addSliceToDashboard),
  "Mn": () => (/* binding */ fetchCharts),
  "Lb": () => (/* binding */ fetchFaveStar),
  "Qt": () => (/* binding */ maxUndoHistoryToast),
  "z2": () => (/* binding */ onChange),
  "Yy": () => (/* binding */ onRefresh),
  "rL": () => (/* binding */ removeSliceFromDashboard),
  "M8": () => (/* binding */ saveDashboardRequest),
  "TN": () => (/* binding */ saveFaveStar),
  "dr": () => (/* binding */ savePublished),
  "$_": () => (/* binding */ setActiveTabs),
  "ps": () => (/* binding */ setColorSchemeAndUnsavedChanges),
  "E2": () => (/* binding */ setDirectPathToChild),
  "Mb": () => (/* binding */ setEditMode),
  "GH": () => (/* binding */ setFocusedFilterField),
  "zL": () => (/* binding */ setFullSizeChartId),
  "uN": () => (/* binding */ setMaxUndoHistoryExceeded),
  "sL": () => (/* binding */ setRefreshFrequency),
  "if": () => (/* binding */ setUnsavedChanges),
  "O8": () => (/* binding */ showBuilderPane),
  "WL": () => (/* binding */ toggleExpandSlice),
  "oY": () => (/* binding */ unsetFocusedFilterField),
  "Sn": () => (/* binding */ updateCss)
});

// UNUSED EXPORTS: FETCH_FAVE_STAR, SAVE_FAVE_STAR, addSlice, onRefreshSuccess, onSave, removeSlice, saveDashboardRequestSuccess, setColorScheme, toggleFaveStar, togglePublished

// EXTERNAL MODULE: ./node_modules/redux-undo/lib/index.js
var lib = __webpack_require__(21090);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/ensureIsArray.js
var ensureIsArray = __webpack_require__(86852);
// EXTERNAL MODULE: ./src/chart/chartAction.js
var chartAction = __webpack_require__(22428);
// EXTERNAL MODULE: ./src/chart/chartReducer.ts
var chartReducer = __webpack_require__(64714);
// EXTERNAL MODULE: ./src/explore/store.js
var store = __webpack_require__(35854);
// EXTERNAL MODULE: ./src/utils/getClientErrorObject.ts
var getClientErrorObject = __webpack_require__(98286);
// EXTERNAL MODULE: ./src/dashboard/util/constants.ts
var constants = __webpack_require__(80621);
// EXTERNAL MODULE: ./src/components/MessageToasts/actions.ts
var actions = __webpack_require__(72570);
// EXTERNAL MODULE: ./src/dashboard/util/serializeActiveFilterValues.js
var serializeActiveFilterValues = __webpack_require__(11370);
;// CONCATENATED MODULE: ./src/dashboard/util/serializeFilterScopes.js
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
function serializeFilterScopes(dashboardFilters) {
  return Object.values(dashboardFilters).reduce((map, { chartId, scopes }) => {
    const scopesById = Object.keys(scopes).reduce(
    (scopesByColumn, column) => ({
      ...scopesByColumn,
      [column]: scopes[column] }),

    {});


    return {
      ...map,
      [chartId]: scopesById };

  }, {});
}
// EXTERNAL MODULE: ./src/dashboard/util/activeDashboardFilters.js
var activeDashboardFilters = __webpack_require__(43399);
// EXTERNAL MODULE: ./src/utils/safeStringify.ts
var safeStringify = __webpack_require__(9679);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./src/dashboard/actions/dashboardLayout.js + 2 modules
var actions_dashboardLayout = __webpack_require__(40701);
// EXTERNAL MODULE: ./src/dashboard/actions/dashboardInfo.ts
var dashboardInfo = __webpack_require__(41295);
// EXTERNAL MODULE: ./src/dashboard/actions/datasources.ts
var datasources = __webpack_require__(50810);
// EXTERNAL MODULE: ./src/dashboard/actions/dashboardFilters.js
var actions_dashboardFilters = __webpack_require__(86422);
// EXTERNAL MODULE: ./src/dashboard/actions/nativeFilters.ts
var nativeFilters = __webpack_require__(52794);
;// CONCATENATED MODULE: ./src/dashboard/actions/dashboardState.js
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
/* eslint camelcase: 0 */



















const SET_UNSAVED_CHANGES = 'SET_UNSAVED_CHANGES';
function setUnsavedChanges(hasUnsavedChanges) {
  return { type: SET_UNSAVED_CHANGES, payload: { hasUnsavedChanges } };
}

const ADD_SLICE = 'ADD_SLICE';
function addSlice(slice) {
  return { type: ADD_SLICE, slice };
}

const REMOVE_SLICE = 'REMOVE_SLICE';
function removeSlice(sliceId) {
  return { type: REMOVE_SLICE, sliceId };
}

const FAVESTAR_BASE_URL = '/superset/favstar/Dashboard';
const TOGGLE_FAVE_STAR = 'TOGGLE_FAVE_STAR';
function toggleFaveStar(isStarred) {
  return { type: TOGGLE_FAVE_STAR, isStarred };
}

const FETCH_FAVE_STAR = 'FETCH_FAVE_STAR';
function fetchFaveStar(id) {
  return function fetchFaveStarThunk(dispatch) {
    return SupersetClient/* default.get */.Z.get({
      endpoint: `${FAVESTAR_BASE_URL}/${id}/count/` }).

    then(({ json }) => {
      if (json.count > 0) dispatch(toggleFaveStar(true));
    }).
    catch(() =>
    dispatch(
    (0,actions/* addDangerToast */.Gb)(
    (0,TranslatorSingleton.t)(
    'There was an issue fetching the favorite status of this dashboard.'))));




  };
}

const SAVE_FAVE_STAR = 'SAVE_FAVE_STAR';
function saveFaveStar(id, isStarred) {
  return function saveFaveStarThunk(dispatch) {
    const urlSuffix = isStarred ? 'unselect' : 'select';
    return SupersetClient/* default.get */.Z.get({
      endpoint: `${FAVESTAR_BASE_URL}/${id}/${urlSuffix}/` }).

    then(() => {
      dispatch(toggleFaveStar(!isStarred));
    }).
    catch(() =>
    dispatch(
    (0,actions/* addDangerToast */.Gb)((0,TranslatorSingleton.t)('There was an issue favoriting this dashboard.'))));


  };
}

const TOGGLE_PUBLISHED = 'TOGGLE_PUBLISHED';
function togglePublished(isPublished) {
  return { type: TOGGLE_PUBLISHED, isPublished };
}

function savePublished(id, isPublished) {
  return function savePublishedThunk(dispatch) {
    return SupersetClient/* default.put */.Z.put({
      endpoint: `/api/v1/dashboard/${id}`,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        published: isPublished }) }).


    then(() => {
      const nowPublished = isPublished ? 'published' : 'hidden';
      dispatch((0,actions/* addSuccessToast */.ws)((0,TranslatorSingleton.t)(`This dashboard is now ${nowPublished}`)));
      dispatch(togglePublished(isPublished));
    }).
    catch(() => {
      dispatch(
      (0,actions/* addDangerToast */.Gb)(
      (0,TranslatorSingleton.t)('You do not have permissions to edit this dashboard.')));


    });
  };
}

const TOGGLE_EXPAND_SLICE = 'TOGGLE_EXPAND_SLICE';
function toggleExpandSlice(sliceId) {
  return { type: TOGGLE_EXPAND_SLICE, sliceId };
}

const UPDATE_CSS = 'UPDATE_CSS';
function updateCss(css) {
  return { type: UPDATE_CSS, css };
}

const SET_EDIT_MODE = 'SET_EDIT_MODE';
function setEditMode(editMode) {
  return { type: SET_EDIT_MODE, editMode };
}

const ON_CHANGE = 'ON_CHANGE';
function onChange() {
  return { type: ON_CHANGE };
}

const ON_SAVE = 'ON_SAVE';
function onSave(lastModifiedTime) {
  return { type: ON_SAVE, lastModifiedTime };
}

const SET_REFRESH_FREQUENCY = 'SET_REFRESH_FREQUENCY';
function setRefreshFrequency(refreshFrequency, isPersistent = false) {
  return { type: SET_REFRESH_FREQUENCY, refreshFrequency, isPersistent };
}

function saveDashboardRequestSuccess(lastModifiedTime) {
  return (dispatch) => {
    dispatch(onSave(lastModifiedTime));
    // clear layout undo history
    dispatch(lib/* ActionCreators.clearHistory */.zF.clearHistory());
  };
}

function saveDashboardRequest(data, id, saveType) {
  return (dispatch, getState) => {var _data$metadata, _data$metadata2, _data$metadata3, _data$metadata4, _data$metadata5, _data$metadata6;
    dispatch({ type: actions_dashboardLayout/* UPDATE_COMPONENTS_PARENTS_LIST */.x_ });

    const { dashboardFilters, dashboardLayout } = getState();
    const layout = dashboardLayout.present;
    Object.values(dashboardFilters).forEach((filter) => {var _layout$componentId;
      const { chartId } = filter;
      const componentId = filter.directPathToFilter.slice().pop();
      const directPathToFilter = (((_layout$componentId = layout[componentId]) == null ? void 0 : _layout$componentId.parents) || []).slice();
      directPathToFilter.push(componentId);
      dispatch((0,actions_dashboardFilters/* updateDirectPathToFilter */.yz)(chartId, directPathToFilter));
    });
    // serialize selected values for each filter field, grouped by filter id
    const serializedFilters = (0,serializeActiveFilterValues/* default */.Z)((0,activeDashboardFilters/* getActiveFilters */.De)());
    // serialize filter scope for each filter field, grouped by filter id
    const serializedFilterScopes = serializeFilterScopes(dashboardFilters);
    const {
      certified_by,
      certification_details,
      css,
      dashboard_title,
      owners,
      roles,
      slug } =
    data;

    const hasId = (item) => item.id !== undefined;

    // making sure the data is what the backend expects
    const cleanedData = {
      ...data,
      certified_by: certified_by || '',
      certification_details:
      certified_by && certification_details ? certification_details : '',
      css: css || '',
      dashboard_title: dashboard_title || (0,TranslatorSingleton.t)('[ untitled dashboard ]'),
      owners: (0,ensureIsArray/* default */.Z)(owners).map((o) => hasId(o) ? o.id : o),
      roles: !(0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.DASHBOARD_RBAC */.T.DASHBOARD_RBAC) ?
      undefined :
      (0,ensureIsArray/* default */.Z)(roles).map((r) => hasId(r) ? r.id : r),
      slug: slug || null,
      metadata: {
        ...data.metadata,
        color_namespace: ((_data$metadata = data.metadata) == null ? void 0 : _data$metadata.color_namespace) || undefined,
        color_scheme: ((_data$metadata2 = data.metadata) == null ? void 0 : _data$metadata2.color_scheme) || '',
        expanded_slices: ((_data$metadata3 = data.metadata) == null ? void 0 : _data$metadata3.expanded_slices) || {},
        label_colors: ((_data$metadata4 = data.metadata) == null ? void 0 : _data$metadata4.label_colors) || {},
        refresh_frequency: ((_data$metadata5 = data.metadata) == null ? void 0 : _data$metadata5.refresh_frequency) || 0,
        timed_refresh_immune_slices:
        ((_data$metadata6 = data.metadata) == null ? void 0 : _data$metadata6.timed_refresh_immune_slices) || [] } };



    const handleChartConfiguration = () => {
      const {
        dashboardInfo: {
          metadata: { chart_configuration = {} } } } =

      getState();
      const chartConfiguration = Object.values(chart_configuration).reduce(
      (prev, next) => {
        // If chart removed from dashboard - remove it from metadata
        if (
        Object.values(layout).find(
        (layoutItem) => {var _layoutItem$meta;return (layoutItem == null ? void 0 : (_layoutItem$meta = layoutItem.meta) == null ? void 0 : _layoutItem$meta.chartId) === next.id;}))

        {
          return { ...prev, [next.id]: next };
        }
        return prev;
      },
      {});

      return chartConfiguration;
    };

    const onCopySuccess = (response) => {
      const lastModifiedTime = response.json.last_modified_time;
      if (lastModifiedTime) {
        dispatch(saveDashboardRequestSuccess(lastModifiedTime));
      }
      if ((0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.DASHBOARD_CROSS_FILTERS */.T.DASHBOARD_CROSS_FILTERS)) {
        const chartConfiguration = handleChartConfiguration();
        dispatch((0,dashboardInfo/* setChartConfiguration */.Aw)(chartConfiguration));
      }
      dispatch((0,actions/* addSuccessToast */.ws)((0,TranslatorSingleton.t)('This dashboard was saved successfully.')));
      return response;
    };

    const onUpdateSuccess = (response) => {
      const updatedDashboard = response.json.result;
      const lastModifiedTime = response.json.last_modified_time;
      // synching with the backend transformations of the metadata
      if (updatedDashboard.json_metadata) {
        const metadata = JSON.parse(updatedDashboard.json_metadata);
        dispatch(
        (0,dashboardInfo/* dashboardInfoChanged */.a8)({
          metadata }));


        if (metadata.chart_configuration) {
          dispatch({
            type: dashboardInfo/* SET_CHART_CONFIG_COMPLETE */.t$,
            chartConfiguration: metadata.chart_configuration });

        }
        if (metadata.native_filter_configuration) {
          dispatch({
            type: nativeFilters/* SET_FILTER_CONFIG_COMPLETE */.qe,
            filterConfig: metadata.native_filter_configuration });

        }
      }
      if (lastModifiedTime) {
        dispatch(saveDashboardRequestSuccess(lastModifiedTime));
      }
      // redirect to the new slug or id
      window.history.pushState(
      { event: 'dashboard_properties_changed' },
      '',
      `/superset/dashboard/${slug || id}/`);


      dispatch((0,actions/* addSuccessToast */.ws)((0,TranslatorSingleton.t)('This dashboard was saved successfully.')));
      return response;
    };

    const onError = async (response) => {
      const { error, message } = await (0,getClientErrorObject/* getClientErrorObject */.O)(response);
      let errorText = (0,TranslatorSingleton.t)('Sorry, an unknown error occured');

      if (error) {
        errorText = (0,TranslatorSingleton.t)(
        'Sorry, there was an error saving this dashboard: %s',
        error);

      }
      if (typeof message === 'string' && message === 'Forbidden') {
        errorText = (0,TranslatorSingleton.t)('You do not have permission to edit this dashboard');
      }
      dispatch((0,actions/* addDangerToast */.Gb)(errorText));
    };

    if (saveType === constants/* SAVE_TYPE_OVERWRITE */.TN) {
      let chartConfiguration = {};
      if ((0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.DASHBOARD_CROSS_FILTERS */.T.DASHBOARD_CROSS_FILTERS)) {
        chartConfiguration = handleChartConfiguration();
      }
      const updatedDashboard = {
        certified_by: cleanedData.certified_by,
        certification_details: cleanedData.certification_details,
        css: cleanedData.css,
        dashboard_title: cleanedData.dashboard_title,
        slug: cleanedData.slug,
        owners: cleanedData.owners,
        roles: cleanedData.roles,
        json_metadata: (0,safeStringify/* safeStringify */.o)({
          ...((cleanedData == null ? void 0 : cleanedData.metadata) || {}),
          default_filters: (0,safeStringify/* safeStringify */.o)(serializedFilters),
          filter_scopes: serializedFilterScopes,
          chart_configuration: chartConfiguration }) };



      return SupersetClient/* default.put */.Z.put({
        endpoint: `/api/v1/dashboard/${id}`,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedDashboard) }).

      then((response) => onUpdateSuccess(response)).
      catch((response) => onError(response));
    }
    // changing the data as the endpoint requires
    const copyData = { ...cleanedData };
    if (copyData.metadata) {
      delete copyData.metadata;
    }
    const finalCopyData = {
      ...copyData,
      // the endpoint is expecting the metadata to be flat
      ...((cleanedData == null ? void 0 : cleanedData.metadata) || {}) };

    return SupersetClient/* default.post */.Z.post({
      endpoint: `/superset/copy_dash/${id}/`,
      postPayload: {
        data: {
          ...finalCopyData,
          default_filters: (0,safeStringify/* safeStringify */.o)(serializedFilters),
          filter_scopes: (0,safeStringify/* safeStringify */.o)(serializedFilterScopes) } } }).



    then((response) => onCopySuccess(response)).
    catch((response) => onError(response));
  };
}

function fetchCharts(
chartList = [],
force = false,
interval = 0,
dashboardId)
{
  return (dispatch, getState) => {
    if (!interval) {
      chartList.forEach((chartKey) =>
      dispatch((0,chartAction.refreshChart)(chartKey, force, dashboardId)));

      return;
    }

    const { metadata: meta } = getState().dashboardInfo;
    const refreshTime = Math.max(interval, meta.stagger_time || 5000); // default 5 seconds
    if (typeof meta.stagger_refresh !== 'boolean') {
      meta.stagger_refresh =
      meta.stagger_refresh === undefined ?
      true :
      meta.stagger_refresh === 'true';
    }
    const delay = meta.stagger_refresh ?
    refreshTime / (chartList.length - 1) :
    0;
    chartList.forEach((chartKey, i) => {
      setTimeout(
      () => dispatch((0,chartAction.refreshChart)(chartKey, force, dashboardId)),
      delay * i);

    });
  };
}

const refreshCharts = (chartList, force, interval, dashboardId, dispatch) =>
new Promise((resolve) => {
  dispatch(fetchCharts(chartList, force, interval, dashboardId));
  resolve();
});

const ON_REFRESH_SUCCESS = 'ON_REFRESH_SUCCESS';
function onRefreshSuccess() {
  return { type: ON_REFRESH_SUCCESS };
}

const ON_REFRESH = 'ON_REFRESH';
function onRefresh(
chartList = [],
force = false,
interval = 0,
dashboardId)
{
  return (dispatch) => {
    dispatch({ type: ON_REFRESH });
    refreshCharts(chartList, force, interval, dashboardId, dispatch).then(() =>
    dispatch({ type: ON_REFRESH_SUCCESS }));

  };
}

const SHOW_BUILDER_PANE = 'SHOW_BUILDER_PANE';
function showBuilderPane() {
  return { type: SHOW_BUILDER_PANE };
}

function addSliceToDashboard(id, component) {
  return (dispatch, getState) => {
    const { sliceEntities } = getState();
    const selectedSlice = sliceEntities.slices[id];
    if (!selectedSlice) {
      return dispatch(
      (0,actions/* addWarningToast */.Dz)(
      'Sorry, there is no chart definition associated with the chart trying to be added.'));


    }
    const form_data = {
      ...selectedSlice.form_data,
      slice_id: selectedSlice.slice_id };

    const newChart = {
      ...chartReducer/* chart */.u,
      id,
      form_data,
      formData: (0,store/* applyDefaultFormData */.oN)(form_data) };


    return Promise.all([
    dispatch((0,chartAction.addChart)(newChart, id)),
    dispatch((0,datasources/* fetchDatasourceMetadata */.QR)(form_data.datasource))]).
    then(() => {
      dispatch(addSlice(selectedSlice));

      if (selectedSlice && selectedSlice.viz_type === 'filter_box') {
        dispatch((0,actions_dashboardFilters/* addFilter */.KJ)(id, component, selectedSlice.form_data));
      }
    });
  };
}

function removeSliceFromDashboard(id) {
  return (dispatch, getState) => {
    const sliceEntity = getState().sliceEntities.slices[id];
    if (sliceEntity && sliceEntity.viz_type === 'filter_box') {
      dispatch((0,actions_dashboardFilters/* removeFilter */.ku)(id));
    }

    dispatch(removeSlice(id));
    dispatch((0,chartAction.removeChart)(id));
  };
}

const SET_COLOR_SCHEME = 'SET_COLOR_SCHEME';
function setColorScheme(colorScheme) {
  return { type: SET_COLOR_SCHEME, colorScheme };
}

function setColorSchemeAndUnsavedChanges(colorScheme) {
  return (dispatch) => {
    dispatch(setColorScheme(colorScheme));
    dispatch(setUnsavedChanges(true));
  };
}

const SET_DIRECT_PATH = 'SET_DIRECT_PATH';
function setDirectPathToChild(path) {
  return { type: SET_DIRECT_PATH, path };
}

const SET_ACTIVE_TABS = 'SET_ACTIVE_TABS';
function setActiveTabs(tabId, prevTabId) {
  return { type: SET_ACTIVE_TABS, tabId, prevTabId };
}

const SET_FOCUSED_FILTER_FIELD = 'SET_FOCUSED_FILTER_FIELD';
function setFocusedFilterField(chartId, column) {
  return { type: SET_FOCUSED_FILTER_FIELD, chartId, column };
}

const UNSET_FOCUSED_FILTER_FIELD = 'UNSET_FOCUSED_FILTER_FIELD';
function unsetFocusedFilterField(chartId, column) {
  return { type: UNSET_FOCUSED_FILTER_FIELD, chartId, column };
}

const SET_FULL_SIZE_CHART_ID = 'SET_FULL_SIZE_CHART_ID';
function setFullSizeChartId(chartId) {
  return { type: SET_FULL_SIZE_CHART_ID, chartId };
}

// Undo history ---------------------------------------------------------------
const SET_MAX_UNDO_HISTORY_EXCEEDED = 'SET_MAX_UNDO_HISTORY_EXCEEDED';
function setMaxUndoHistoryExceeded(maxUndoHistoryExceeded = true) {
  return {
    type: SET_MAX_UNDO_HISTORY_EXCEEDED,
    payload: { maxUndoHistoryExceeded } };

}

function maxUndoHistoryToast() {
  return (dispatch, getState) => {
    const { dashboardLayout } = getState();
    const historyLength = dashboardLayout.past.length;

    return dispatch(
    (0,actions/* addWarningToast */.Dz)(
    `You have used all ${historyLength} undo slots and will not be able to fully undo subsequent actions. You may save your current state to reset the history.`));


  };
}

/***/ }),

/***/ 44803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ findParentIdWithCache)
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
function findParentId({ childId, layout = {} }) {
  let parentId = null;

  const ids = Object.keys(layout);
  for (let i = 0; i <= ids.length - 1; i += 1) {
    const id = ids[i];
    const component = layout[id] || {};
    if (
    id !== childId &&
    component.children &&
    component.children.includes(childId))
    {
      parentId = id;
      break;
    }
  }

  return parentId;
}

const cache = {};
function findParentIdWithCache({ childId, layout = {} }) {
  if (cache[childId]) {
    const lastParent = layout[cache[childId]] || {};
    if (lastParent.children && lastParent.children.includes(childId)) {
      return lastParent.id;
    }
  }
  cache[childId] = findParentId({ childId, layout });
  return cache[childId];
}

/***/ }),

/***/ 47456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getComponentWidthFromDrop)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80621);
/* harmony import */ var _findParentId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44803);
/* harmony import */ var _getDetailedComponentWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72673);
/* harmony import */ var _newComponentFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28428);
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





function getComponentWidthFromDrop({
  dropResult,
  layout: components })
{
  const { source, destination, dragging } = dropResult;

  const isNewComponent = source.id === _constants__WEBPACK_IMPORTED_MODULE_0__/* .NEW_COMPONENTS_SOURCE_ID */ .D0;
  const component = isNewComponent ?
  (0,_newComponentFactory__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(dragging.type) :
  components[dragging.id] || {};

  // moving a component within the same container shouldn't change its width
  if (source.id === destination.id) {
    return component.meta.width;
  }

  const {
    width: draggingWidth,
    minimumWidth: minDraggingWidth } =
  (0,_getDetailedComponentWidth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    component,
    components });


  const {
    width: destinationWidth,
    occupiedWidth: draggingOccupiedWidth } =
  (0,_getDetailedComponentWidth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    id: destination.id,
    components });


  let destinationCapacity = Number(destinationWidth - draggingOccupiedWidth);

  if (Number.isNaN(destinationCapacity)) {
    const {
      width: grandparentWidth,
      occupiedWidth: grandparentOccupiedWidth } =
    (0,_getDetailedComponentWidth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
      id: (0,_findParentId__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        childId: destination.id,
        layout: components }),

      components });


    destinationCapacity = Number(grandparentWidth - grandparentOccupiedWidth);
  }

  if (
  Number.isNaN(destinationCapacity) ||
  Number.isNaN(Number(draggingWidth)))
  {
    return draggingWidth;
  }
  if (destinationCapacity >= draggingWidth) {
    return draggingWidth;
  }
  if (destinationCapacity >= minDraggingWidth) {
    return destinationCapacity;
  }

  return -1;
}

/***/ }),

/***/ 72673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getDetailedComponentWidth)
/* harmony export */ });
/* harmony import */ var _findParentId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44803);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80621);
/* harmony import */ var _componentTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81255);
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




function getTotalChildWidth({ id, components }) {
  const component = components[id];
  if (!component) return 0;

  let width = 0;

  (component.children || []).forEach((childId) => {
    const child = components[childId] || {};
    width += (child.meta || {}).width || 0;
  });

  return width;
}

function getDetailedComponentWidth({
  // pass either an id, or a component
  id,
  component: passedComponent,
  components = {} })
{
  const result = {
    width: undefined,
    occupiedWidth: undefined,
    minimumWidth: undefined };


  const component = passedComponent || components[id];
  if (!component) return result;

  // note these remain as undefined if the component has no defined width
  result.width = (component.meta || {}).width;
  result.occupiedWidth = result.width;

  if (component.type === _componentTypes__WEBPACK_IMPORTED_MODULE_2__/* .ROW_TYPE */ .Os) {
    // not all rows have width 12, e
    result.width =
    getDetailedComponentWidth({
      id: (0,_findParentId__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
        childId: component.id,
        layout: components }),

      components }).
    width || _constants__WEBPACK_IMPORTED_MODULE_1__/* .GRID_COLUMN_COUNT */ .cz;
    result.occupiedWidth = getTotalChildWidth({ id: component.id, components });
    result.minimumWidth = result.occupiedWidth || _constants__WEBPACK_IMPORTED_MODULE_1__/* .GRID_MIN_COLUMN_COUNT */ .cx;
  } else if (component.type === _componentTypes__WEBPACK_IMPORTED_MODULE_2__/* .COLUMN_TYPE */ .BA) {
    // find the width of the largest child, only rows count
    result.minimumWidth = _constants__WEBPACK_IMPORTED_MODULE_1__/* .GRID_MIN_COLUMN_COUNT */ .cx;
    result.occupiedWidth = 0;
    (component.children || []).forEach((childId) => {
      // rows don't have widths, so find the width of its children
      if (components[childId].type === _componentTypes__WEBPACK_IMPORTED_MODULE_2__/* .ROW_TYPE */ .Os) {
        result.minimumWidth = Math.max(
        result.minimumWidth,
        getTotalChildWidth({ id: childId, components }));

      }
    });
  } else if (
  component.type === _componentTypes__WEBPACK_IMPORTED_MODULE_2__/* .MARKDOWN_TYPE */ .xh ||
  component.type === _componentTypes__WEBPACK_IMPORTED_MODULE_2__/* .CHART_TYPE */ .dW)
  {
    result.minimumWidth = _constants__WEBPACK_IMPORTED_MODULE_1__/* .GRID_MIN_COLUMN_COUNT */ .cx;
  }

  return result;
}

/***/ }),

/***/ 11370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ serializeActiveFilterValues)
/* harmony export */ });
/* harmony import */ var _getDashboardFilterKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20194);
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


// input: { [id_column1]: values, [id_column2]: values }
// output: { id: { column1: values, column2: values } }
function serializeActiveFilterValues(activeFilters) {
  return Object.entries(activeFilters).reduce((map, entry) => {
    const [filterKey, { values }] = entry;
    const { chartId, column } = (0,_getDashboardFilterKey__WEBPACK_IMPORTED_MODULE_0__/* .getChartIdAndColumnFromFilterKey */ ._)(filterKey);
    const entryByChartId = {
      ...map[chartId],
      [column]: values };

    return {
      ...map,
      [chartId]: entryByChartId };

  }, {});
}

/***/ }),

/***/ 11354:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(86843);
var toObject = __webpack_require__(89678);
var callWithSafeIterationClosing = __webpack_require__(75196);
var isArrayIteratorMethod = __webpack_require__(6782);
var toLength = __webpack_require__(43057);
var createProperty = __webpack_require__(55449);
var getIteratorMethod = __webpack_require__(22902);

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ 75196:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(96059);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ 55449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__(46935);
var definePropertyModule = __webpack_require__(65988);
var createPropertyDescriptor = __webpack_require__(31887);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ 6782:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(99813);
var Iterators = __webpack_require__(12077);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 64620:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(68459);
var requireObjectCoercible = __webpack_require__(48219);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 73291:
/***/ ((module) => {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
// eslint-disable-next-line  max-statements
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        for (var k = base; /* no condition */; k += base) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;
  }
  return output.join('');
};

module.exports = function (input) {
  var encoded = [];
  var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
  }
  return encoded.join('.');
};


/***/ }),

/***/ 77971:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = __webpack_require__(64620).charAt;
var InternalStateModule = __webpack_require__(45402);
var defineIterator = __webpack_require__(47771);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 33601:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(77971);
var $ = __webpack_require__(76887);
var DESCRIPTORS = __webpack_require__(55746);
var USE_NATIVE_URL = __webpack_require__(28468);
var global = __webpack_require__(21899);
var defineProperties = __webpack_require__(59938);
var redefine = __webpack_require__(99754);
var anInstance = __webpack_require__(5743);
var has = __webpack_require__(47457);
var assign = __webpack_require__(24420);
var arrayFrom = __webpack_require__(11354);
var codeAt = __webpack_require__(64620).codeAt;
var toASCII = __webpack_require__(73291);
var setToStringTag = __webpack_require__(90904);
var URLSearchParamsModule = __webpack_require__(95304);
var InternalStateModule = __webpack_require__(45402);

var NativeURL = global.URL;
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var floor = Math.floor;
var pow = Math.pow;

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[A-Za-z]/;
var ALPHANUMERIC = /[\d+\-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^(0x|0X)/;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
// eslint-disable-next-line no-control-regex
var TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
var EOF;

var parseHost = function (url, input) {
  var result, codePoints, index;
  if (input.charAt(0) == '[') {
    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
    result = parseIPv6(input.slice(1, -1));
    if (!result) return INVALID_HOST;
    url.host = result;
  // opaque host
  } else if (!isSpecial(url)) {
    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
    result = '';
    codePoints = arrayFrom(input);
    for (index = 0; index < codePoints.length; index++) {
      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
    }
    url.host = result;
  } else {
    input = toASCII(input);
    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
    result = parseIPv4(input);
    if (result === null) return INVALID_HOST;
    url.host = result;
  }
};

var parseIPv4 = function (input) {
  var parts = input.split('.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.pop();
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && part.charAt(0) == '0') {
      radix = HEX_START.test(part) ? 16 : 8;
      part = part.slice(radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
      number = parseInt(part, radix);
    }
    numbers.push(number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = numbers.pop();
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// eslint-disable-next-line max-statements
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var char = function () {
    return input.charAt(pointer);
  };

  if (char() == ':') {
    if (input.charAt(1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (char()) {
    if (pieceIndex == 8) return;
    if (char() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && HEX.test(char())) {
      value = value * 16 + parseInt(char(), 16);
      pointer++;
      length++;
    }
    if (char() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (char()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (char() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!DIGIT.test(char())) return;
        while (DIGIT.test(char())) {
          number = parseInt(char(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (char() == ':') {
      pointer++;
      if (!char()) return;
    } else if (char()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      result.unshift(host % 256);
      host = floor(host / 256);
    } return result.join('.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += host[index].toString(16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (char, set) {
  var code = codeAt(char, 0);
  return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
};

var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

var isSpecial = function (url) {
  return has(specialSchemes, url.scheme);
};

var includesCredentials = function (url) {
  return url.username != '' || url.password != '';
};

var cannotHaveUsernamePasswordPort = function (url) {
  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};

var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && ALPHA.test(string.charAt(0))
    && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
};

var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
    string.length == 2 ||
    ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

var shortenURLsPath = function (url) {
  var path = url.path;
  var pathSize = path.length;
  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
    path.pop();
  }
};

var isSingleDot = function (segment) {
  return segment === '.' || segment.toLowerCase() === '%2e';
};

var isDoubleDot = function (segment) {
  segment = segment.toLowerCase();
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

// eslint-disable-next-line max-statements
var parseURL = function (url, input, stateOverride, base) {
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, char, bufferCodePoints, failure;

  if (!stateOverride) {
    url.scheme = '';
    url.username = '';
    url.password = '';
    url.host = null;
    url.port = null;
    url.path = [];
    url.query = null;
    url.fragment = null;
    url.cannotBeABaseURL = false;
    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
  }

  input = input.replace(TAB_AND_NEW_LINE, '');

  codePoints = arrayFrom(input);

  while (pointer <= codePoints.length) {
    char = codePoints[pointer];
    switch (state) {
      case SCHEME_START:
        if (char && ALPHA.test(char)) {
          buffer += char.toLowerCase();
          state = SCHEME;
        } else if (!stateOverride) {
          state = NO_SCHEME;
          continue;
        } else return INVALID_SCHEME;
        break;

      case SCHEME:
        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
          buffer += char.toLowerCase();
        } else if (char == ':') {
          if (stateOverride && (
            (isSpecial(url) != has(specialSchemes, buffer)) ||
            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
            (url.scheme == 'file' && !url.host)
          )) return;
          url.scheme = buffer;
          if (stateOverride) {
            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
            return;
          }
          buffer = '';
          if (url.scheme == 'file') {
            state = FILE;
          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
            state = SPECIAL_RELATIVE_OR_AUTHORITY;
          } else if (isSpecial(url)) {
            state = SPECIAL_AUTHORITY_SLASHES;
          } else if (codePoints[pointer + 1] == '/') {
            state = PATH_OR_AUTHORITY;
            pointer++;
          } else {
            url.cannotBeABaseURL = true;
            url.path.push('');
            state = CANNOT_BE_A_BASE_URL_PATH;
          }
        } else if (!stateOverride) {
          buffer = '';
          state = NO_SCHEME;
          pointer = 0;
          continue;
        } else return INVALID_SCHEME;
        break;

      case NO_SCHEME:
        if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
        if (base.cannotBeABaseURL && char == '#') {
          url.scheme = base.scheme;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          url.cannotBeABaseURL = true;
          state = FRAGMENT;
          break;
        }
        state = base.scheme == 'file' ? FILE : RELATIVE;
        continue;

      case SPECIAL_RELATIVE_OR_AUTHORITY:
        if (char == '/' && codePoints[pointer + 1] == '/') {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          pointer++;
        } else {
          state = RELATIVE;
          continue;
        } break;

      case PATH_OR_AUTHORITY:
        if (char == '/') {
          state = AUTHORITY;
          break;
        } else {
          state = PATH;
          continue;
        }

      case RELATIVE:
        url.scheme = base.scheme;
        if (char == EOF) {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
        } else if (char == '/' || (char == '\\' && isSpecial(url))) {
          state = RELATIVE_SLASH;
        } else if (char == '?') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          state = FRAGMENT;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.path.pop();
          state = PATH;
          continue;
        } break;

      case RELATIVE_SLASH:
        if (isSpecial(url) && (char == '/' || char == '\\')) {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        } else if (char == '/') {
          state = AUTHORITY;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          state = PATH;
          continue;
        } break;

      case SPECIAL_AUTHORITY_SLASHES:
        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
        pointer++;
        break;

      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
        if (char != '/' && char != '\\') {
          state = AUTHORITY;
          continue;
        } break;

      case AUTHORITY:
        if (char == '@') {
          if (seenAt) buffer = '%40' + buffer;
          seenAt = true;
          bufferCodePoints = arrayFrom(buffer);
          for (var i = 0; i < bufferCodePoints.length; i++) {
            var codePoint = bufferCodePoints[i];
            if (codePoint == ':' && !seenPasswordToken) {
              seenPasswordToken = true;
              continue;
            }
            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
            if (seenPasswordToken) url.password += encodedCodePoints;
            else url.username += encodedCodePoints;
          }
          buffer = '';
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (seenAt && buffer == '') return INVALID_AUTHORITY;
          pointer -= arrayFrom(buffer).length + 1;
          buffer = '';
          state = HOST;
        } else buffer += char;
        break;

      case HOST:
      case HOSTNAME:
        if (stateOverride && url.scheme == 'file') {
          state = FILE_HOST;
          continue;
        } else if (char == ':' && !seenBracket) {
          if (buffer == '') return INVALID_HOST;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PORT;
          if (stateOverride == HOSTNAME) return;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (isSpecial(url) && buffer == '') return INVALID_HOST;
          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PATH_START;
          if (stateOverride) return;
          continue;
        } else {
          if (char == '[') seenBracket = true;
          else if (char == ']') seenBracket = false;
          buffer += char;
        } break;

      case PORT:
        if (DIGIT.test(char)) {
          buffer += char;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url)) ||
          stateOverride
        ) {
          if (buffer != '') {
            var port = parseInt(buffer, 10);
            if (port > 0xFFFF) return INVALID_PORT;
            url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
            buffer = '';
          }
          if (stateOverride) return;
          state = PATH_START;
          continue;
        } else return INVALID_PORT;
        break;

      case FILE:
        url.scheme = 'file';
        if (char == '/' || char == '\\') state = FILE_SLASH;
        else if (base && base.scheme == 'file') {
          if (char == EOF) {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '?') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
              url.host = base.host;
              url.path = base.path.slice();
              shortenURLsPath(url);
            }
            state = PATH;
            continue;
          }
        } else {
          state = PATH;
          continue;
        } break;

      case FILE_SLASH:
        if (char == '/' || char == '\\') {
          state = FILE_HOST;
          break;
        }
        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
          else url.host = base.host;
        }
        state = PATH;
        continue;

      case FILE_HOST:
        if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
          if (!stateOverride && isWindowsDriveLetter(buffer)) {
            state = PATH;
          } else if (buffer == '') {
            url.host = '';
            if (stateOverride) return;
            state = PATH_START;
          } else {
            failure = parseHost(url, buffer);
            if (failure) return failure;
            if (url.host == 'localhost') url.host = '';
            if (stateOverride) return;
            buffer = '';
            state = PATH_START;
          } continue;
        } else buffer += char;
        break;

      case PATH_START:
        if (isSpecial(url)) {
          state = PATH;
          if (char != '/' && char != '\\') continue;
        } else if (!stateOverride && char == '?') {
          url.query = '';
          state = QUERY;
        } else if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          state = PATH;
          if (char != '/') continue;
        } break;

      case PATH:
        if (
          char == EOF || char == '/' ||
          (char == '\\' && isSpecial(url)) ||
          (!stateOverride && (char == '?' || char == '#'))
        ) {
          if (isDoubleDot(buffer)) {
            shortenURLsPath(url);
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else if (isSingleDot(buffer)) {
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else {
            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
              if (url.host) url.host = '';
              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
            }
            url.path.push(buffer);
          }
          buffer = '';
          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
            while (url.path.length > 1 && url.path[0] === '') {
              url.path.shift();
            }
          }
          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          }
        } else {
          buffer += percentEncode(char, pathPercentEncodeSet);
        } break;

      case CANNOT_BE_A_BASE_URL_PATH:
        if (char == '?') {
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case QUERY:
        if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          if (char == "'" && isSpecial(url)) url.query += '%27';
          else if (char == '#') url.query += '%23';
          else url.query += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case FRAGMENT:
        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
        break;
    }

    pointer++;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLConstructor, 'URL');
  var base = arguments.length > 1 ? arguments[1] : undefined;
  var urlString = String(url);
  var state = setInternalState(that, { type: 'URL' });
  var baseState, failure;
  if (base !== undefined) {
    if (base instanceof URLConstructor) baseState = getInternalURLState(base);
    else {
      failure = parseURL(baseState = {}, String(base));
      if (failure) throw TypeError(failure);
    }
  }
  failure = parseURL(state, urlString, null, baseState);
  if (failure) throw TypeError(failure);
  var searchParams = state.searchParams = new URLSearchParams();
  var searchParamsState = getInternalSearchParamsState(searchParams);
  searchParamsState.updateSearchParams(state.query);
  searchParamsState.updateURL = function () {
    state.query = String(searchParams) || null;
  };
  if (!DESCRIPTORS) {
    that.href = serializeURL.call(that);
    that.origin = getOrigin.call(that);
    that.protocol = getProtocol.call(that);
    that.username = getUsername.call(that);
    that.password = getPassword.call(that);
    that.host = getHost.call(that);
    that.hostname = getHostname.call(that);
    that.port = getPort.call(that);
    that.pathname = getPathname.call(that);
    that.search = getSearch.call(that);
    that.searchParams = getSearchParams.call(that);
    that.hash = getHash.call(that);
  }
};

var URLPrototype = URLConstructor.prototype;

var serializeURL = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';
  if (host !== null) {
    output += '//';
    if (includesCredentials(url)) {
      output += username + (password ? ':' + password : '') + '@';
    }
    output += serializeHost(host);
    if (port !== null) output += ':' + port;
  } else if (scheme == 'file') output += '//';
  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  if (query !== null) output += '?' + query;
  if (fragment !== null) output += '#' + fragment;
  return output;
};

var getOrigin = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var port = url.port;
  if (scheme == 'blob') try {
    return new URL(scheme.path[0]).origin;
  } catch (error) {
    return 'null';
  }
  if (scheme == 'file' || !isSpecial(url)) return 'null';
  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};

var getProtocol = function () {
  return getInternalURLState(this).scheme + ':';
};

var getUsername = function () {
  return getInternalURLState(this).username;
};

var getPassword = function () {
  return getInternalURLState(this).password;
};

var getHost = function () {
  var url = getInternalURLState(this);
  var host = url.host;
  var port = url.port;
  return host === null ? ''
    : port === null ? serializeHost(host)
    : serializeHost(host) + ':' + port;
};

var getHostname = function () {
  var host = getInternalURLState(this).host;
  return host === null ? '' : serializeHost(host);
};

var getPort = function () {
  var port = getInternalURLState(this).port;
  return port === null ? '' : String(port);
};

var getPathname = function () {
  var url = getInternalURLState(this);
  var path = url.path;
  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};

var getSearch = function () {
  var query = getInternalURLState(this).query;
  return query ? '?' + query : '';
};

var getSearchParams = function () {
  return getInternalURLState(this).searchParams;
};

var getHash = function () {
  var fragment = getInternalURLState(this).fragment;
  return fragment ? '#' + fragment : '';
};

var accessorDescriptor = function (getter, setter) {
  return { get: getter, set: setter, configurable: true, enumerable: true };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function (href) {
      var url = getInternalURLState(this);
      var urlString = String(href);
      var failure = parseURL(url, urlString);
      if (failure) throw TypeError(failure);
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function (protocol) {
      var url = getInternalURLState(this);
      parseURL(url, String(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function (username) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(username));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function (password) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(password));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function (host) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function (hostname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function (port) {
      var url = getInternalURLState(this);
      if (cannotHaveUsernamePasswordPort(url)) return;
      port = String(port);
      if (port == '') url.port = null;
      else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function (pathname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      url.path = [];
      parseURL(url, pathname + '', PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function (search) {
      var url = getInternalURLState(this);
      search = String(search);
      if (search == '') {
        url.query = null;
      } else {
        if ('?' == search.charAt(0)) search = search.slice(1);
        url.query = '';
        parseURL(url, search, QUERY);
      }
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function (hash) {
      var url = getInternalURLState(this);
      hash = String(hash);
      if (hash == '') {
        url.fragment = null;
        return;
      }
      if ('#' == hash.charAt(0)) hash = hash.slice(1);
      url.fragment = '';
      parseURL(url, hash, FRAGMENT);
    })
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return serializeURL.call(this);
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return serializeURL.call(this);
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
    return nativeCreateObjectURL.apply(NativeURL, arguments);
  });
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
    return nativeRevokeObjectURL.apply(NativeURL, arguments);
  });
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),

/***/ 98947:
/***/ (() => {

// empty


/***/ }),

/***/ 57641:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(71459);

module.exports = parent;


/***/ }),

/***/ 71459:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(33601);
__webpack_require__(98947);
__webpack_require__(95304);
var path = __webpack_require__(54058);

module.exports = path.URL;


/***/ }),

/***/ 51127:
/***/ ((module) => {

"use strict";


// Note: This regex matches even invalid JSON strings, but since we’re
// working on the output of `JSON.stringify` we know that only valid strings
// are present (unless the user supplied a weird `options.indent` but in
// that case we don’t care since the output would be invalid anyway).
var stringOrChar = /("(?:[^\\"]|\\.)*")|[:,]/g;

module.exports = function stringify(passedObj, options) {
  var indent, maxLength, replacer;

  options = options || {};
  indent = JSON.stringify(
    [1],
    undefined,
    options.indent === undefined ? 2 : options.indent
  ).slice(2, -3);
  maxLength =
    indent === ""
      ? Infinity
      : options.maxLength === undefined
      ? 80
      : options.maxLength;
  replacer = options.replacer;

  return (function _stringify(obj, currentIndent, reserved) {
    // prettier-ignore
    var end, index, items, key, keyPart, keys, length, nextIndent, prettified, start, string, value;

    if (obj && typeof obj.toJSON === "function") {
      obj = obj.toJSON();
    }

    string = JSON.stringify(obj, replacer);

    if (string === undefined) {
      return string;
    }

    length = maxLength - currentIndent.length - reserved;

    if (string.length <= length) {
      prettified = string.replace(stringOrChar, function(match, stringLiteral) {
        return stringLiteral || match + " ";
      });
      if (prettified.length <= length) {
        return prettified;
      }
    }

    if (replacer != null) {
      obj = JSON.parse(string);
      replacer = undefined;
    }

    if (typeof obj === "object" && obj !== null) {
      nextIndent = currentIndent + indent;
      items = [];
      index = 0;

      if (Array.isArray(obj)) {
        start = "[";
        end = "]";
        length = obj.length;
        for (; index < length; index++) {
          items.push(
            _stringify(obj[index], nextIndent, index === length - 1 ? 0 : 1) ||
              "null"
          );
        }
      } else {
        start = "{";
        end = "}";
        keys = Object.keys(obj);
        length = keys.length;
        for (; index < length; index++) {
          key = keys[index];
          keyPart = JSON.stringify(key) + ": ";
          value = _stringify(
            obj[key],
            nextIndent,
            keyPart.length + (index === length - 1 ? 0 : 1)
          );
          if (value !== undefined) {
            items.push(keyPart + value);
          }
        }
      }

      if (items.length > 0) {
        return [start, indent + items.join(",\n" + nextIndent), end].join(
          "\n" + currentIndent
        );
      }
    }

    return string;
  })(passedObj, "", 0);
};


/***/ }),

/***/ 80760:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(94140);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),

/***/ 63105:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(34963),
    baseFilter = __webpack_require__(80760),
    baseIteratee = __webpack_require__(67206),
    isArray = __webpack_require__(1469);

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),

/***/ 43063:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(34963),
    baseFilter = __webpack_require__(80760),
    baseIteratee = __webpack_require__(67206),
    isArray = __webpack_require__(1469),
    negate = __webpack_require__(94885);

/**
 * The opposite of `_.filter`; this method returns the elements of `collection`
 * that `predicate` does **not** return truthy for.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.filter
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': true }
 * ];
 *
 * _.reject(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.reject(users, { 'age': 40, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.reject(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.reject(users, 'active');
 * // => objects for ['barney']
 */
function reject(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, negate(baseIteratee(predicate, 3)));
}

module.exports = reject;


/***/ }),

/***/ 42236:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var ActionTypes = exports.ActionTypes = {
  UNDO: '@@redux-undo/UNDO',
  REDO: '@@redux-undo/REDO',
  JUMP_TO_FUTURE: '@@redux-undo/JUMP_TO_FUTURE',
  JUMP_TO_PAST: '@@redux-undo/JUMP_TO_PAST',
  JUMP: '@@redux-undo/JUMP',
  CLEAR_HISTORY: '@@redux-undo/CLEAR_HISTORY'
};

var ActionCreators = exports.ActionCreators = {
  undo: function undo() {
    return { type: ActionTypes.UNDO };
  },
  redo: function redo() {
    return { type: ActionTypes.REDO };
  },
  jumpToFuture: function jumpToFuture(index) {
    return { type: ActionTypes.JUMP_TO_FUTURE, index: index };
  },
  jumpToPast: function jumpToPast(index) {
    return { type: ActionTypes.JUMP_TO_PAST, index: index };
  },
  jump: function jump(index) {
    return { type: ActionTypes.JUMP, index: index };
  },
  clearHistory: function clearHistory() {
    return { type: ActionTypes.CLEAR_HISTORY };
  }
};

/***/ }),

/***/ 18823:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var __DEBUG__ = void 0;
var displayBuffer = void 0;

var colors = {
  prevState: '#9E9E9E',
  action: '#03A9F4',
  nextState: '#4CAF50'

  /* istanbul ignore next: debug messaging is not tested */
};function initBuffer() {
  displayBuffer = {
    header: [],
    prev: [],
    action: [],
    next: [],
    msgs: []
  };
}

/* istanbul ignore next: debug messaging is not tested */
function printBuffer() {
  var _displayBuffer = displayBuffer,
      header = _displayBuffer.header,
      prev = _displayBuffer.prev,
      next = _displayBuffer.next,
      action = _displayBuffer.action,
      msgs = _displayBuffer.msgs;

  if (console.group) {
    var _console, _console2, _console3, _console4, _console5;

    (_console = console).groupCollapsed.apply(_console, _toConsumableArray(header));
    (_console2 = console).log.apply(_console2, _toConsumableArray(prev));
    (_console3 = console).log.apply(_console3, _toConsumableArray(action));
    (_console4 = console).log.apply(_console4, _toConsumableArray(next));
    (_console5 = console).log.apply(_console5, _toConsumableArray(msgs));
    console.groupEnd();
  } else {
    var _console6, _console7, _console8, _console9, _console10;

    (_console6 = console).log.apply(_console6, _toConsumableArray(header));
    (_console7 = console).log.apply(_console7, _toConsumableArray(prev));
    (_console8 = console).log.apply(_console8, _toConsumableArray(action));
    (_console9 = console).log.apply(_console9, _toConsumableArray(next));
    (_console10 = console).log.apply(_console10, _toConsumableArray(msgs));
  }
}

/* istanbul ignore next: debug messaging is not tested */
function colorFormat(text, color, obj) {
  return ['%c' + text, 'color: ' + color + '; font-weight: bold', obj];
}

/* istanbul ignore next: debug messaging is not tested */
function start(action, state) {
  initBuffer();
  if (__DEBUG__) {
    if (console.group) {
      displayBuffer.header = ['%credux-undo', 'font-style: italic', 'action', action.type];
      displayBuffer.action = colorFormat('action', colors.action, action);
      displayBuffer.prev = colorFormat('prev history', colors.prevState, state);
    } else {
      displayBuffer.header = ['redux-undo action', action.type];
      displayBuffer.action = ['action', action];
      displayBuffer.prev = ['prev history', state];
    }
  }
}

/* istanbul ignore next: debug messaging is not tested */
function end(nextState) {
  if (__DEBUG__) {
    if (console.group) {
      displayBuffer.next = colorFormat('next history', colors.nextState, nextState);
    } else {
      displayBuffer.next = ['next history', nextState];
    }
    printBuffer();
  }
}

/* istanbul ignore next: debug messaging is not tested */
function log() {
  if (__DEBUG__) {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    displayBuffer.msgs = displayBuffer.msgs.concat([].concat(args, ['\n']));
  }
}

/* istanbul ignore next: debug messaging is not tested */
function set(debug) {
  __DEBUG__ = debug;
}

exports.set = set;
exports.start = start;
exports.end = end;
exports.log = log;

/***/ }),

/***/ 91619:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseActions = parseActions;
exports.isHistory = isHistory;
exports.distinctState = distinctState;
exports.includeAction = includeAction;
exports.excludeAction = excludeAction;
exports.combineFilters = combineFilters;
exports.groupByActionTypes = groupByActionTypes;
exports.newHistory = newHistory;
// parseActions helper: takes a string (or array)
//                      and makes it an array if it isn't yet
function parseActions(rawActions) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Array.isArray(rawActions)) {
    return rawActions;
  } else if (typeof rawActions === 'string') {
    return [rawActions];
  }
  return defaultValue;
}

// isHistory helper: check for a valid history object
function isHistory(history) {
  return typeof history.present !== 'undefined' && typeof history.future !== 'undefined' && typeof history.past !== 'undefined' && Array.isArray(history.future) && Array.isArray(history.past);
}

// distinctState helper: deprecated, does nothing in latest beta
/* istanbul ignore next */
function distinctState() {
  console.warn('distinctState is deprecated in beta4 and newer. ' + 'The distinctState behavior is now default, which means only ' + 'actions resulting in a new state are recorded. ' + 'See https://github.com/omnidan/redux-undo#filtering-actions ' + 'for more details.');
  return function () {
    return true;
  };
}

// includeAction helper: whitelist actions to be added to the history
function includeAction(rawActions) {
  var actions = parseActions(rawActions);
  return function (action) {
    return actions.indexOf(action.type) >= 0;
  };
}

// excludeAction helper: blacklist actions from being added to the history
function excludeAction(rawActions) {
  var actions = parseActions(rawActions);
  return function (action) {
    return actions.indexOf(action.type) < 0;
  };
}

// combineFilters helper: combine multiple filters to one
function combineFilters() {
  for (var _len = arguments.length, filters = Array(_len), _key = 0; _key < _len; _key++) {
    filters[_key] = arguments[_key];
  }

  return filters.reduce(function (prev, curr) {
    return function (action, currentState, previousHistory) {
      return prev(action, currentState, previousHistory) && curr(action, currentState, previousHistory);
    };
  }, function () {
    return true;
  });
}

function groupByActionTypes(rawActions) {
  var actions = parseActions(rawActions);
  return function (action) {
    return actions.indexOf(action.type) >= 0 ? action.type : null;
  };
}

function newHistory(past, present, future) {
  var group = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  return {
    past: past,
    present: present,
    future: future,
    group: group,
    _latestUnfiltered: present,
    index: past.length,
    limit: past.length + future.length + 1
  };
}

/***/ }),

/***/ 21090:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _actions = __webpack_require__(42236);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _actions.ActionTypes;
  }
});
Object.defineProperty(exports, "zF", ({
  enumerable: true,
  get: function get() {
    return _actions.ActionCreators;
  }
}));

var _helpers = __webpack_require__(91619);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _helpers.parseActions;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _helpers.isHistory;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _helpers.distinctState;
  }
});
Object.defineProperty(exports, "an", ({
  enumerable: true,
  get: function get() {
    return _helpers.includeAction;
  }
}));
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _helpers.excludeAction;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _helpers.combineFilters;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _helpers.groupByActionTypes;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _helpers.newHistory;
  }
});

var _reducer = __webpack_require__(82479);

Object.defineProperty(exports, "ZP", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reducer).default;
  }
}));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 82479:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = undoable;

var _debug = __webpack_require__(18823);

var debug = _interopRequireWildcard(_debug);

var _actions = __webpack_require__(42236);

var _helpers = __webpack_require__(91619);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// createHistory
function createHistory(state, ignoreInitialState) {
  // ignoreInitialState essentially prevents the user from undoing to the
  // beginning, in the case that the undoable reducer handles initialization
  // in a way that can't be redone simply
  var history = (0, _helpers.newHistory)([], state, []);
  if (ignoreInitialState) {
    history._latestUnfiltered = null;
  }
  return history;
}

// lengthWithoutFuture: get length of history
function lengthWithoutFuture(history) {
  return history.past.length + 1;
}

// insert: insert `state` into history, which means adding the current state
//         into `past`, setting the new `state` as `present` and erasing
//         the `future`.
function insert(history, state, limit, group) {
  debug.log('inserting', state);
  debug.log('new free: ', limit - lengthWithoutFuture(history));

  var past = history.past,
      _latestUnfiltered = history._latestUnfiltered;

  var historyOverflow = limit && lengthWithoutFuture(history) >= limit;

  var pastSliced = past.slice(historyOverflow ? 1 : 0);
  var newPast = _latestUnfiltered != null ? [].concat(_toConsumableArray(pastSliced), [_latestUnfiltered]) : pastSliced;

  return (0, _helpers.newHistory)(newPast, state, [], group);
}

// jumpToFuture: jump to requested index in future history
function jumpToFuture(history, index) {
  if (index < 0 || index >= history.future.length) return history;

  var past = history.past,
      future = history.future,
      _latestUnfiltered = history._latestUnfiltered;


  var newPast = [].concat(_toConsumableArray(past), [_latestUnfiltered], _toConsumableArray(future.slice(0, index)));
  var newPresent = future[index];
  var newFuture = future.slice(index + 1);

  return (0, _helpers.newHistory)(newPast, newPresent, newFuture);
}

// jumpToPast: jump to requested index in past history
function jumpToPast(history, index) {
  if (index < 0 || index >= history.past.length) return history;

  var past = history.past,
      future = history.future,
      _latestUnfiltered = history._latestUnfiltered;


  var newPast = past.slice(0, index);
  var newFuture = [].concat(_toConsumableArray(past.slice(index + 1)), [_latestUnfiltered], _toConsumableArray(future));
  var newPresent = past[index];

  return (0, _helpers.newHistory)(newPast, newPresent, newFuture);
}

// jump: jump n steps in the past or forward
function jump(history, n) {
  if (n > 0) return jumpToFuture(history, n - 1);
  if (n < 0) return jumpToPast(history, history.past.length + n);
  return history;
}

// helper to dynamically match in the reducer's switch-case
function actionTypeAmongClearHistoryType(actionType, clearHistoryType) {
  return clearHistoryType.indexOf(actionType) > -1 ? actionType : !actionType;
}

// redux-undo higher order reducer
function undoable(reducer) {
  var rawConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  debug.set(rawConfig.debug);

  var config = {
    initTypes: (0, _helpers.parseActions)(rawConfig.initTypes, ['@@redux-undo/INIT']),
    limit: rawConfig.limit,
    filter: rawConfig.filter || function () {
      return true;
    },
    groupBy: rawConfig.groupBy || function () {
      return null;
    },
    undoType: rawConfig.undoType || _actions.ActionTypes.UNDO,
    redoType: rawConfig.redoType || _actions.ActionTypes.REDO,
    jumpToPastType: rawConfig.jumpToPastType || _actions.ActionTypes.JUMP_TO_PAST,
    jumpToFutureType: rawConfig.jumpToFutureType || _actions.ActionTypes.JUMP_TO_FUTURE,
    jumpType: rawConfig.jumpType || _actions.ActionTypes.JUMP,
    clearHistoryType: Array.isArray(rawConfig.clearHistoryType) ? rawConfig.clearHistoryType : [rawConfig.clearHistoryType || _actions.ActionTypes.CLEAR_HISTORY],
    neverSkipReducer: rawConfig.neverSkipReducer || false,
    ignoreInitialState: rawConfig.ignoreInitialState || false,
    syncFilter: rawConfig.syncFilter || false
  };

  var initialState = config.history;
  return function () {
    for (var _len = arguments.length, slices = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      slices[_key - 2] = arguments[_key];
    }

    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    debug.start(action, state);

    var history = state;
    if (!initialState) {
      debug.log('history is uninitialized');

      if (state === undefined) {
        var clearHistoryAction = { type: _actions.ActionTypes.CLEAR_HISTORY };
        var start = reducer.apply(undefined, [state, clearHistoryAction].concat(slices));

        history = createHistory(start, config.ignoreInitialState);

        debug.log('do not set initialState on probe actions');
      } else if ((0, _helpers.isHistory)(state)) {
        history = initialState = config.ignoreInitialState ? state : (0, _helpers.newHistory)(state.past, state.present, state.future);
        debug.log('initialHistory initialized: initialState is a history', initialState);
      } else {
        history = initialState = createHistory(state, config.ignoreInitialState);
        debug.log('initialHistory initialized: initialState is not a history', initialState);
      }
    }

    var skipReducer = function skipReducer(res) {
      return config.neverSkipReducer ? _extends({}, res, {
        present: reducer.apply(undefined, [res.present, action].concat(slices))
      }) : res;
    };

    var res = void 0;
    switch (action.type) {
      case undefined:
        return history;

      case config.undoType:
        res = jump(history, -1);
        debug.log('perform undo');
        debug.end(res);
        return skipReducer(res);

      case config.redoType:
        res = jump(history, 1);
        debug.log('perform redo');
        debug.end(res);
        return skipReducer(res);

      case config.jumpToPastType:
        res = jumpToPast(history, action.index);
        debug.log('perform jumpToPast to ' + action.index);
        debug.end(res);
        return skipReducer(res);

      case config.jumpToFutureType:
        res = jumpToFuture(history, action.index);
        debug.log('perform jumpToFuture to ' + action.index);
        debug.end(res);
        return skipReducer(res);

      case config.jumpType:
        res = jump(history, action.index);
        debug.log('perform jump to ' + action.index);
        debug.end(res);
        return skipReducer(res);

      case actionTypeAmongClearHistoryType(action.type, config.clearHistoryType):
        res = createHistory(history.present);
        debug.log('perform clearHistory');
        debug.end(res);
        return skipReducer(res);

      default:
        res = reducer.apply(undefined, [history.present, action].concat(slices));

        if (config.initTypes.some(function (actionType) {
          return actionType === action.type;
        })) {
          debug.log('reset history due to init action');
          debug.end(initialState);
          return initialState;
        }

        if (history._latestUnfiltered === res) {
          // Don't handle this action. Do not call debug.end here,
          // because this action should not produce side effects to the console
          return history;
        }

        var filtered = typeof config.filter === 'function' && !config.filter(action, res, history);
        var group = config.groupBy(action, res, history);

        if (filtered) {
          // if filtering an action, merely update the present
          var filteredState = (0, _helpers.newHistory)(history.past, res, history.future, history.group);
          if (!config.syncFilter) {
            filteredState._latestUnfiltered = history._latestUnfiltered;
          }
          debug.log('filter ignored action, not storing it in past');
          debug.end(filteredState);
          return filteredState;
        } else if (group != null && group === history.group) {
          var groupedState = (0, _helpers.newHistory)(history.past, res, history.future, history.group);
          debug.log('groupBy grouped the action with the previous action');
          debug.end(groupedState);
          return groupedState;
        } else {
          // If the action wasn't filtered, insert normally
          history = insert(history, res, config.limit, group);

          debug.log('inserted new state into history');
          debug.end(history);
          return history;
        }
    }
  };
}
module.exports = exports['default'];

/***/ }),

/***/ 19259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ConfirmStatusChange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var src_components_DeleteModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17198);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11965);
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


function ConfirmStatusChange({ title, description, onConfirm, children }) {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [currentCallbackArgs, setCurrentCallbackArgs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const showConfirm = (...callbackArgs) => {
    // check if any args are DOM events, if so, call persist
    callbackArgs.forEach((arg) => {
      if (!arg) {
        return;
      }
      if (typeof arg.persist === 'function') {
        arg.persist();
      }
      if (typeof arg.preventDefault === 'function') {
        arg.preventDefault();
      }
      if (typeof arg.stopPropagation === 'function') {
        arg.stopPropagation();
      }
    });
    setOpen(true);
    setCurrentCallbackArgs(callbackArgs);
  };
  const hide = () => {
    setOpen(false);
    setCurrentCallbackArgs([]);
  };
  const confirm = () => {
    onConfirm(...currentCallbackArgs);
    hide();
  };
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
  children && children(showConfirm),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(src_components_DeleteModal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, { description: description, onConfirm: confirm, onHide: hide, open: open, title: title }));

}

/***/ }),

/***/ 55467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ListViewCard)
});

// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var components = __webpack_require__(82191);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/url.js
var url = __webpack_require__(39969);
var url_default = /*#__PURE__*/__webpack_require__.n(url);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/logging.js
var logging = __webpack_require__(23099);
;// CONCATENATED MODULE: ./src/components/ListViewCard/ImageLoader.tsx
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


const ImageContainer = style/* styled.div */.iK.div`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center ${({ position }) => position};
  display: inline-block;
  height: calc(100% - 1px);
  width: calc(100% - 2px);
  margin: 1px 1px 0 1px;
`;
function ImageLoader({ src, fallback, isLoading, position, ...rest }) {
  const [imgSrc, setImgSrc] = react.useState(fallback);
  (0,react.useEffect)(() => {
    if (src) {
      fetch(src).
      then((response) => response.blob()).
      then((blob) => {
        if (/image/.test(blob.type)) {
          const imgURL = url_default().createObjectURL(blob);
          setImgSrc(imgURL);
        }
      }).
      catch((errMsg) => {
        logging/* default.error */.Z.error(errMsg);
        setImgSrc(fallback);
      });
    }
    return () => {
      // theres a very brief period where isLoading is false and this component is about to unmount
      // where the stale imgSrc is briefly rendered. Setting imgSrc to fallback smoothes the transition.
      setImgSrc(fallback);
    };
  }, [src, fallback]);
  return (0,emotion_react_browser_esm.jsx)(ImageContainer, extends_default()({ src: isLoading ? fallback : imgSrc }, rest, { position: position }));
}
// EXTERNAL MODULE: ./src/components/CertifiedIcon/index.tsx
var CertifiedIcon = __webpack_require__(83268);
;// CONCATENATED MODULE: ./src/components/ListViewCard/index.tsx
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






const ActionsWrapper = style/* styled.div */.iK.div`
  width: 64px;
  display: flex;
  justify-content: space-between;
`;
const StyledCard = (0,style/* styled */.iK)(components/* AntdCard */.Ak)`
  border: 1px solid #d9dbe4;
  border-radius: ${({ theme }) => theme.gridUnit}px;
  overflow: hidden;

  .ant-card-body {
    padding: ${({ theme }) => theme.gridUnit * 4}px
      ${({ theme }) => theme.gridUnit * 2}px;
  }
  .ant-card-meta-detail > div:not(:last-child) {
    margin-bottom: 0;
  }
  .gradient-container {
    position: relative;
    height: 100%;
  }
  &:hover {
    box-shadow: 8px 8px 28px 0px rgba(0, 0, 0, 0.24);
    transition: box-shadow ${({ theme }) => theme.transitionTiming}s ease-in-out;

    .gradient-container:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 47.83%,
        rgba(0, 0, 0, 0.219135) 79.64%,
        rgba(0, 0, 0, 0.5) 100%
      );

      transition: background ${({ theme }) => theme.transitionTiming}s
        ease-in-out;
    }

    .cover-footer {
      transform: translateY(0);
    }
  }
`;
const Cover = style/* styled.div */.iK.div`
  height: 264px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  overflow: hidden;

  .cover-footer {
    transform: translateY(${({ theme }) => theme.gridUnit * 9}px);
    transition: ${({ theme }) => theme.transitionTiming}s ease-out;
  }
`;
const TitleContainer = style/* styled.div */.iK.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

  .card-actions {
    margin-left: auto;
    align-self: flex-end;
    padding-left: ${({ theme }) => theme.gridUnit}px;
    span[role='img'] {
      display: flex;
      align-items: center;
    }
  }
`;
const TitleLink = style/* styled.span */.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  & a {
    color: ${({ theme }) => theme.colors.grayscale.dark1} !important;
  }
`;
const TitleRight = style/* styled.span */.iK.span`
  position: absolute;
  right: -1px;
  bottom: ${({ theme }) => theme.gridUnit}px;
`;
const CoverFooter = style/* styled.div */.iK.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  top: -${({ theme }) => theme.gridUnit * 9}px;
  padding: 0 8px;
`;
const CoverFooterLeft = style/* styled.div */.iK.div`
  flex: 1;
  overflow: hidden;
`;
const CoverFooterRight = style/* styled.div */.iK.div`
  align-self: flex-end;
  margin-left: auto;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const paragraphConfig = { rows: 1, width: 150 };
const AnchorLink = ({ to, children }) => (0,emotion_react_browser_esm.jsx)("a", { href: to }, children);
function ListViewCard({ title, url, linkComponent, titleRight, imgURL, imgFallbackURL, description, coverLeft, coverRight, actions, avatar, loading, imgPosition = 'top', cover, certifiedBy, certificationDetails }) {
  const Link = url && linkComponent ? linkComponent : AnchorLink;
  const theme = (0,style/* useTheme */.Fg)();
  return (0,emotion_react_browser_esm.jsx)(StyledCard, { cover: cover || (0,emotion_react_browser_esm.jsx)(Cover, null,
    (0,emotion_react_browser_esm.jsx)(Link, { to: url },
    (0,emotion_react_browser_esm.jsx)("div", { className: "gradient-container" },
    (0,emotion_react_browser_esm.jsx)(ImageLoader, { src: imgURL || '', fallback: imgFallbackURL || '', isLoading: loading, position: imgPosition }))),


    (0,emotion_react_browser_esm.jsx)(CoverFooter, { className: "cover-footer" },
    !loading && coverLeft && (0,emotion_react_browser_esm.jsx)(CoverFooterLeft, null, coverLeft),
    !loading && coverRight && (0,emotion_react_browser_esm.jsx)(CoverFooterRight, null, coverRight))) },


  loading && (0,emotion_react_browser_esm.jsx)(components/* AntdCard.Meta */.Ak.Meta, { title: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(TitleContainer, null,
    (0,emotion_react_browser_esm.jsx)(components/* Skeleton.Input */.Od.Input, { active: true, size: "small", css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({
        width: Math.trunc(theme.gridUnit * 62.5) },  true ? "" : 0,  true ? "" : 0) }),

    (0,emotion_react_browser_esm.jsx)("div", { className: "card-actions" },
    (0,emotion_react_browser_esm.jsx)(components/* Skeleton.Button */.Od.Button, { active: true, shape: "circle" }), ' ',
    (0,emotion_react_browser_esm.jsx)(components/* Skeleton.Button */.Od.Button, { active: true, css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({
        width: theme.gridUnit * 10 },  true ? "" : 0,  true ? "" : 0) })))),



    description: (0,emotion_react_browser_esm.jsx)(components/* ThinSkeleton */.yX, { round: true, active: true, title: false, paragraph: paragraphConfig }) }),
  !loading && (0,emotion_react_browser_esm.jsx)(components/* AntdCard.Meta */.Ak.Meta, { title: (0,emotion_react_browser_esm.jsx)(TitleContainer, null,
    (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: title },
    (0,emotion_react_browser_esm.jsx)(TitleLink, null,
    (0,emotion_react_browser_esm.jsx)(Link, { to: url },
    certifiedBy && (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(CertifiedIcon/* default */.Z, { certifiedBy: certifiedBy, details: certificationDetails }), ' '),

    title))),



    titleRight && (0,emotion_react_browser_esm.jsx)(TitleRight, null, titleRight),
    (0,emotion_react_browser_esm.jsx)("div", { className: "card-actions" },
    actions)),

    description: description, avatar: avatar || null }));

}
ListViewCard.Actions = ActionsWrapper;
/* harmony default export */ const components_ListViewCard = (ListViewCard);

/***/ }),

/***/ 62753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23279);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5977);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73727);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37840);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71230);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82191);
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35932);
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








const StyledHeader = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  margin-bottom: ${({ theme }) => theme.gridUnit * 4}px;
  .header {
    font-weight: ${({ theme }) => theme.typography.weights.bold};
    margin-right: ${({ theme }) => theme.gridUnit * 3}px;
    text-align: left;
    font-size: 18px;
    padding: ${({ theme }) => theme.gridUnit * 3}px;
    display: inline-block;
    line-height: ${({ theme }) => theme.gridUnit * 9}px;
  }
  .nav-right {
    display: flex;
    align-items: center;
    padding: 14px 0;
    margin-right: ${({ theme }) => theme.gridUnit * 3}px;
    float: right;
    position: absolute;
    right: 0;
  }
  .nav-right-collapse {
    display: flex;
    align-items: center;
    padding: 14px 0;
    margin-right: 0;
    float: left;
    padding-left: 10px;
  }
  .menu {
    background-color: white;
    .ant-menu-horizontal {
      line-height: inherit;
      .ant-menu-item {
        &:hover {
          border-bottom: none;
        }
      }
    }
    .ant-menu {
      padding: ${({ theme }) => theme.gridUnit * 4}px 0px;
    }
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0 ${({ theme }) => theme.gridUnit + 1}px;
  }

  .menu .ant-menu-item {
    li {
      a,
      div {
        font-size: ${({ theme }) => theme.typography.sizes.s}px;
        color: ${({ theme }) => theme.colors.secondary.dark1};

        a {
          margin: 0;
          padding: ${({ theme }) => theme.gridUnit * 4}px;
          line-height: ${({ theme }) => theme.gridUnit * 5}px;
        }
      }

      &.no-router a {
        padding: ${({ theme }) => theme.gridUnit * 2}px
          ${({ theme }) => theme.gridUnit * 4}px;
      }
    }
    li.active > a,
    li.active > div,
    li > a:hover,
    li > a:focus,
    li > div:hover {
      background: ${({ theme }) => theme.colors.secondary.light4};
      border-bottom: none;
      border-radius: ${({ theme }) => theme.borderRadius}px;
      margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
      text-decoration: none;
    }
  }

  .btn-link {
    padding: 10px 0;
  }
  .ant-menu-horizontal {
    border: none;
  }
  @media (max-width: 767px) {
    .header,
    .nav-right {
      position: relative;
      margin-left: ${({ theme }) => theme.gridUnit * 2}px;
    }
  }
`;
const SubMenuComponent = (props) => {var _props$tabs, _props$buttons;
  const [showMenu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('horizontal');
  const [navRightStyle, setNavRightStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('nav-right');
  let hasHistory = true;
  // If no parent <Router> component exists, useHistory throws an error
  try {
    (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .useHistory */ .k6)();
  }
  catch (err) {
    // If error is thrown, we know not to use <Link> in render
    hasHistory = false;
  }
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    function handleResize() {
      if (window.innerWidth <= 767)
      setMenu('inline');else

      setMenu('horizontal');
      if (props.buttons &&
      props.buttons.length >= 3 &&
      window.innerWidth >= 795) {
        setNavRightStyle('nav-right');
      } else
      if (props.buttons &&
      props.buttons.length >= 3 &&
      window.innerWidth <= 795) {
        setNavRightStyle('nav-right-collapse');
      }
    }
    handleResize();
    const resize = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(handleResize, 10);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [props.buttons]);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(StyledHeader, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, { className: "menu", role: "navigation" },
  props.name && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "header" }, props.name),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_3__/* .Menu */ .v2, { mode: showMenu, style: { backgroundColor: 'transparent' } }, (_props$tabs =
  props.tabs) == null ? void 0 : _props$tabs.map((tab) => {
    if ((props.usesRouter || hasHistory) && !!tab.usesRouter) {
      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_3__/* .Menu.Item */ .v2.Item, { key: tab.label },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", { role: "tab", className: tab.name === props.activeChild ? 'active' : '' },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", null,
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .Link */ .rU, { to: tab.url || '' }, tab.label))));



    }
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_3__/* .Menu.Item */ .v2.Item, { key: tab.label },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('no-router', {
        active: tab.name === props.activeChild }),
      role: "tab" },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", { href: tab.url, onClick: tab.onClick },
    tab.label)));



  })),

  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: navRightStyle }, (_props$buttons =
  props.buttons) == null ? void 0 : _props$buttons.map((btn, i) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, { key: i, buttonStyle: btn.buttonStyle, onClick: btn.onClick },
  btn.name)))),



  props.children);

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubMenuComponent);

/***/ }),

/***/ 20818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PropertiesModal)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var components = __webpack_require__(82191);
// EXTERNAL MODULE: ./src/components/Form/index.tsx + 1 modules
var Form = __webpack_require__(49238);
// EXTERNAL MODULE: ./node_modules/json-stringify-pretty-compact/index.js
var json_stringify_pretty_compact = __webpack_require__(51127);
var json_stringify_pretty_compact_default = /*#__PURE__*/__webpack_require__.n(json_stringify_pretty_compact);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/components/index.ts + 1 modules
var src_components = __webpack_require__(33346);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/ensureIsArray.js
var ensureIsArray = __webpack_require__(86852);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalSchemeRegistrySingleton.js
var CategoricalSchemeRegistrySingleton = __webpack_require__(34042);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./src/components/AsyncAceEditor/index.tsx
var AsyncAceEditor = __webpack_require__(94670);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./src/explore/components/controls/ColorSchemeControl.jsx
var ColorSchemeControl = __webpack_require__(71119);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/dashboard/components/ColorSchemeControlWrapper.jsx
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
/* eslint-env browser */






const propTypes = {
  onChange: (prop_types_default()).func,
  labelMargin: (prop_types_default()).number,
  colorScheme: (prop_types_default()).string };


const defaultProps = {
  colorScheme: undefined,
  onChange: () => {} };


class ColorSchemeControlWrapper extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
    this.categoricalSchemeRegistry = (0,CategoricalSchemeRegistrySingleton/* default */.Z)();
    this.choices = this.categoricalSchemeRegistry.keys().map((s) => [s, s]);
    this.schemes = this.categoricalSchemeRegistry.getMap();
  }

  setHover(hovered) {
    this.setState({ hovered });
  }

  render() {
    const { colorScheme, labelMargin = 0 } = this.props;
    return (
      (0,emotion_react_browser_esm.jsx)(ColorSchemeControl/* default */.Z, {
        description: (0,TranslatorSingleton.t)(
        "Any color palette selected here will override the colors applied to this dashboard's individual charts"),

        label: (0,TranslatorSingleton.t)('Color scheme'),
        labelMargin: labelMargin,
        name: "color_scheme",
        onChange: this.props.onChange,
        value: colorScheme,
        choices: this.choices,
        clearable: true,
        schemes: this.schemes,
        hovered: this.state.hovered }));


  }}


ColorSchemeControlWrapper.propTypes = propTypes;
ColorSchemeControlWrapper.defaultProps = defaultProps;

/* harmony default export */ const components_ColorSchemeControlWrapper = (ColorSchemeControlWrapper);
// EXTERNAL MODULE: ./src/utils/getClientErrorObject.ts
var getClientErrorObject = __webpack_require__(98286);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
;// CONCATENATED MODULE: ./src/dashboard/components/PropertiesModal/index.tsx
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














const StyledFormItem = (0,style/* styled */.iK)(Form/* FormItem */.xJ)`
  margin-bottom: 0;
`;
const StyledJsonEditor = (0,style/* styled */.iK)(AsyncAceEditor/* JsonEditor */.Ad)`
  border-radius: ${({ theme }) => theme.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.light2};
`;
const PropertiesModal = ({ addSuccessToast, colorScheme: currentColorScheme, dashboardId, dashboardInfo: currentDashboardInfo, dashboardTitle, onHide = () => {}, onlyApply = false, onSubmit = () => {}, show = false }) => {
  const [form] = components/* Form.useForm */.l0.useForm();
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [isAdvancedOpen, setIsAdvancedOpen] = (0,react.useState)(false);
  const [colorScheme, setColorScheme] = (0,react.useState)(currentColorScheme);
  const [jsonMetadata, setJsonMetadata] = (0,react.useState)('');
  const [dashboardInfo, setDashboardInfo] = (0,react.useState)();
  const [owners, setOwners] = (0,react.useState)([]);
  const [roles, setRoles] = (0,react.useState)([]);
  const saveLabel = onlyApply ? (0,TranslatorSingleton.t)('Apply') : (0,TranslatorSingleton.t)('Save');
  const handleErrorResponse = async (response) => {
    const { error, statusText, message } = await (0,getClientErrorObject/* getClientErrorObject */.O)(response);
    let errorText = error || statusText || (0,TranslatorSingleton.t)('An error has occurred');
    if (typeof message === 'object' && 'json_metadata' in message) {
      errorText = message.json_metadata;
    } else
    if (typeof message === 'string') {
      errorText = message;
      if (message === 'Forbidden') {
        errorText = (0,TranslatorSingleton.t)('You do not have permission to edit this dashboard');
      }
    }
    Modal/* default.error */.Z.error({
      title: 'Error',
      content: errorText,
      okButtonProps: { danger: true, className: 'btn-danger' } });

  };
  const loadAccessOptions = (0,react.useCallback)((accessType = 'owners', input = '', page, pageSize) => {
    const query = rison_default().encode({
      filter: input,
      page,
      page_size: pageSize });

    return SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/dashboard/related/${accessType}?q=${query}` }).
    then((response) => ({
      data: response.json.result.map((item) => ({
        value: item.value,
        label: item.text })),

      totalCount: response.json.count }));

  }, []);
  const handleDashboardData = (0,react.useCallback)((dashboardData) => {
    const { id, dashboard_title, slug, certified_by, certification_details, owners, roles, metadata } = dashboardData;
    const dashboardInfo = {
      id,
      title: dashboard_title,
      slug: slug || '',
      certifiedBy: certified_by || '',
      certificationDetails: certification_details || '' };

    form.setFieldsValue(dashboardInfo);
    setDashboardInfo(dashboardInfo);
    setOwners(owners);
    setRoles(roles);
    setColorScheme(metadata.color_scheme);
    // temporary fix to remove positions from dashboards' metadata
    if (metadata != null && metadata.positions) {
      delete metadata.positions;
    }
    setJsonMetadata(metadata ? json_stringify_pretty_compact_default()(metadata) : '');
  }, [form]);
  const fetchDashboardDetails = (0,react.useCallback)(() => {
    setIsLoading(true);
    // We fetch the dashboard details because not all code
    // that renders this component have all the values we need.
    // At some point when we have a more consistent frontend
    // datamodel, the dashboard could probably just be passed as a prop.
    SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/dashboard/${dashboardId}` }).
    then((response) => {var _dashboard$json_metad;
      const dashboard = response.json.result;
      const jsonMetadataObj = (_dashboard$json_metad = dashboard.json_metadata) != null && _dashboard$json_metad.length ?
      JSON.parse(dashboard.json_metadata) :
      {};
      handleDashboardData({
        ...dashboard,
        metadata: jsonMetadataObj });

      setIsLoading(false);
    }, handleErrorResponse);
  }, [dashboardId, handleDashboardData]);
  const getJsonMetadata = () => {
    try {
      const jsonMetadataObj = jsonMetadata != null && jsonMetadata.length ?
      JSON.parse(jsonMetadata) :
      {};
      return jsonMetadataObj;
    }
    catch (_) {
      return {};
    }
  };
  const handleOnChangeOwners = (owners) => {
    const parsedOwners = (0,ensureIsArray/* default */.Z)(owners).map((o) => ({
      id: o.value,
      full_name: o.label }));

    setOwners(parsedOwners);
  };
  const handleOnChangeRoles = (roles) => {
    const parsedRoles = (0,ensureIsArray/* default */.Z)(roles).map((r) => ({
      id: r.value,
      name: r.label }));

    setRoles(parsedRoles);
  };
  const handleOwnersSelectValue = () => {
    const parsedOwners = (owners || []).map((owner) => ({
      value: owner.id,
      label: owner.full_name || `${owner.first_name} ${owner.last_name}` }));

    return parsedOwners;
  };
  const handleRolesSelectValue = () => {
    const parsedRoles = (roles || []).map((role) => ({
      value: role.id,
      label: `${role.name}` }));

    return parsedRoles;
  };
  const onColorSchemeChange = (colorScheme, { updateMetadata = true } = {}) => {
    // check that color_scheme is valid
    const colorChoices = (0,CategoricalSchemeRegistrySingleton/* default */.Z)().keys();
    const jsonMetadataObj = getJsonMetadata();
    // only fire if the color_scheme is present and invalid
    if (colorScheme && !colorChoices.includes(colorScheme)) {
      Modal/* default.error */.Z.error({
        title: 'Error',
        content: (0,TranslatorSingleton.t)('A valid color scheme is required'),
        okButtonProps: { danger: true, className: 'btn-danger' } });

      throw new Error('A valid color scheme is required');
    }
    // update metadata to match selection
    if (updateMetadata) {
      jsonMetadataObj.color_scheme = colorScheme;
      jsonMetadataObj.label_colors = jsonMetadataObj.label_colors || {};
      setJsonMetadata(json_stringify_pretty_compact_default()(jsonMetadataObj));
    }
    setColorScheme(colorScheme);
  };
  const onFinish = () => {
    const { title, slug, certifiedBy, certificationDetails } = form.getFieldsValue();
    let currentColorScheme = colorScheme;
    let colorNamespace = '';
    // color scheme in json metadata has precedence over selection
    if (jsonMetadata != null && jsonMetadata.length) {
      const metadata = JSON.parse(jsonMetadata);
      currentColorScheme = (metadata == null ? void 0 : metadata.color_scheme) || colorScheme;
      colorNamespace = (metadata == null ? void 0 : metadata.color_namespace) || '';
    }
    onColorSchemeChange(currentColorScheme, {
      updateMetadata: false });

    const moreOnSubmitProps = {};
    const morePutProps = {};
    if ((0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.DASHBOARD_RBAC */.T.DASHBOARD_RBAC)) {
      moreOnSubmitProps.roles = roles;
      morePutProps.roles = (roles || []).map((r) => r.id);
    }
    const onSubmitProps = {
      id: dashboardId,
      title,
      slug,
      jsonMetadata,
      owners,
      colorScheme: currentColorScheme,
      colorNamespace,
      certifiedBy,
      certificationDetails,
      ...moreOnSubmitProps };

    if (onlyApply) {
      onSubmit(onSubmitProps);
      onHide();
    } else
    {
      SupersetClient/* default.put */.Z.put({
        endpoint: `/api/v1/dashboard/${dashboardId}`,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dashboard_title: title,
          slug: slug || null,
          json_metadata: jsonMetadata || null,
          owners: (owners || []).map((o) => o.id),
          certified_by: certifiedBy || null,
          certification_details: certifiedBy && certificationDetails ? certificationDetails : null,
          ...morePutProps }) }).

      then(() => {
        addSuccessToast((0,TranslatorSingleton.t)('The dashboard has been saved'));
        onSubmit(onSubmitProps);
        onHide();
      }, handleErrorResponse);
    }
  };
  const getRowsWithoutRoles = () => {
    const jsonMetadataObj = getJsonMetadata();
    const hasCustomLabelColors = !!Object.keys((jsonMetadataObj == null ? void 0 : jsonMetadataObj.label_colors) || {}).length;
    return (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, { gutter: 16 },
    (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 12 },
    (0,emotion_react_browser_esm.jsx)("h3", { style: { marginTop: '1em' } }, (0,TranslatorSingleton.t)('Access')),
    (0,emotion_react_browser_esm.jsx)(StyledFormItem, { label: (0,TranslatorSingleton.t)('Owners') },
    (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { allowClear: true, ariaLabel: (0,TranslatorSingleton.t)('Owners'), disabled: isLoading, mode: "multiple", onChange: handleOnChangeOwners, options: (input, page, pageSize) => loadAccessOptions('owners', input, page, pageSize), value: handleOwnersSelectValue() })),

    (0,emotion_react_browser_esm.jsx)("p", { className: "help-block" },
    (0,TranslatorSingleton.t)('Owners is a list of users who can alter the dashboard. Searchable by name or username.'))),


    (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 12 },
    (0,emotion_react_browser_esm.jsx)("h3", { style: { marginTop: '1em' } }, (0,TranslatorSingleton.t)('Colors')),
    (0,emotion_react_browser_esm.jsx)(components_ColorSchemeControlWrapper, { hasCustomLabelColors: hasCustomLabelColors, onChange: onColorSchemeChange, colorScheme: colorScheme, labelMargin: 4 })));


  };
  const getRowsWithRoles = () => {
    const jsonMetadataObj = getJsonMetadata();
    const hasCustomLabelColors = !!Object.keys((jsonMetadataObj == null ? void 0 : jsonMetadataObj.label_colors) || {}).length;
    return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, null,
    (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 24 },
    (0,emotion_react_browser_esm.jsx)("h3", { style: { marginTop: '1em' } }, (0,TranslatorSingleton.t)('Access')))),


    (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, { gutter: 16 },
    (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 12 },
    (0,emotion_react_browser_esm.jsx)(StyledFormItem, { label: (0,TranslatorSingleton.t)('Owners') },
    (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { allowClear: true, ariaLabel: (0,TranslatorSingleton.t)('Owners'), disabled: isLoading, mode: "multiple", onChange: handleOnChangeOwners, options: (input, page, pageSize) => loadAccessOptions('owners', input, page, pageSize), value: handleOwnersSelectValue() })),

    (0,emotion_react_browser_esm.jsx)("p", { className: "help-block" },
    (0,TranslatorSingleton.t)('Owners is a list of users who can alter the dashboard. Searchable by name or username.'))),


    (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 12 },
    (0,emotion_react_browser_esm.jsx)(StyledFormItem, { label: (0,TranslatorSingleton.t)('Roles') },
    (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { allowClear: true, ariaLabel: (0,TranslatorSingleton.t)('Roles'), disabled: isLoading, mode: "multiple", onChange: handleOnChangeRoles, options: (input, page, pageSize) => loadAccessOptions('roles', input, page, pageSize), value: handleRolesSelectValue() })),

    (0,emotion_react_browser_esm.jsx)("p", { className: "help-block" },
    (0,TranslatorSingleton.t)('Roles is a list which defines access to the dashboard. Granting a role access to a dashboard will bypass dataset level checks. If no roles are defined, then the dashboard is available to all roles.')))),



    (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, null,
    (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 12 },
    (0,emotion_react_browser_esm.jsx)(components_ColorSchemeControlWrapper, { hasCustomLabelColors: hasCustomLabelColors, onChange: onColorSchemeChange, colorScheme: colorScheme, labelMargin: 4 }))));



  };
  (0,react.useEffect)(() => {
    if (show) {
      if (!currentDashboardInfo) {
        fetchDashboardDetails();
      } else
      {
        handleDashboardData(currentDashboardInfo);
      }
    }
    AsyncAceEditor/* JsonEditor.preload */.Ad.preload();
  }, [currentDashboardInfo, fetchDashboardDetails, handleDashboardData, show]);
  (0,react.useEffect)(() => {
    // the title can be changed inline in the dashboard, this catches it
    if (dashboardTitle &&
    dashboardInfo &&
    dashboardInfo.title !== dashboardTitle) {
      form.setFieldsValue({
        ...dashboardInfo,
        title: dashboardTitle });

    }
  }, [dashboardInfo, dashboardTitle, form]);
  return (0,emotion_react_browser_esm.jsx)(Modal/* default */.Z, { show: show, onHide: onHide, title: (0,TranslatorSingleton.t)('Dashboard properties'), footer: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { htmlType: "button", buttonSize: "small", onClick: onHide, cta: true },
    (0,TranslatorSingleton.t)('Cancel')),

    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { onClick: form.submit, buttonSize: "small", buttonStyle: "primary", className: "m-r-5", cta: true },
    saveLabel)),

    responsive: true },
  (0,emotion_react_browser_esm.jsx)(components/* Form */.l0, { form: form, onFinish: onFinish, layout: "vertical", initialValues: dashboardInfo },
  (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, null,
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 24 },
  (0,emotion_react_browser_esm.jsx)("h3", null, (0,TranslatorSingleton.t)('Basic information')))),


  (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, { gutter: 16 },
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 12 },
  (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { label: (0,TranslatorSingleton.t)('Title'), name: "title" },
  (0,emotion_react_browser_esm.jsx)(components/* Input */.II, { type: "text", disabled: isLoading }))),


  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 12 },
  (0,emotion_react_browser_esm.jsx)(StyledFormItem, { label: (0,TranslatorSingleton.t)('URL slug'), name: "slug" },
  (0,emotion_react_browser_esm.jsx)(components/* Input */.II, { type: "text", disabled: isLoading })),

  (0,emotion_react_browser_esm.jsx)("p", { className: "help-block" },
  (0,TranslatorSingleton.t)('A readable URL for your dashboard')))),



  (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.DASHBOARD_RBAC */.T.DASHBOARD_RBAC) ?
  getRowsWithRoles() :
  getRowsWithoutRoles(),
  (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, null,
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 24 },
  (0,emotion_react_browser_esm.jsx)("h3", null, (0,TranslatorSingleton.t)('Certification')))),


  (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, { gutter: 16 },
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 12 },
  (0,emotion_react_browser_esm.jsx)(StyledFormItem, { label: (0,TranslatorSingleton.t)('Certified by'), name: "certifiedBy" },
  (0,emotion_react_browser_esm.jsx)(components/* Input */.II, { type: "text", disabled: isLoading })),

  (0,emotion_react_browser_esm.jsx)("p", { className: "help-block" },
  (0,TranslatorSingleton.t)('Person or group that has certified this dashboard.'))),


  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 12 },
  (0,emotion_react_browser_esm.jsx)(StyledFormItem, { label: (0,TranslatorSingleton.t)('Certification details'), name: "certificationDetails" },
  (0,emotion_react_browser_esm.jsx)(components/* Input */.II, { type: "text", disabled: isLoading })),

  (0,emotion_react_browser_esm.jsx)("p", { className: "help-block" },
  (0,TranslatorSingleton.t)('Any additional detail to show in the certification tooltip.')))),



  (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, null,
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24, md: 24 },
  (0,emotion_react_browser_esm.jsx)("h3", { style: { marginTop: '1em' } },
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "link", onClick: () => setIsAdvancedOpen(!isAdvancedOpen) },
  (0,emotion_react_browser_esm.jsx)("i", { className: `fa fa-angle-${isAdvancedOpen ? 'down' : 'right'}`, style: { minWidth: '1em' } }),
  (0,TranslatorSingleton.t)('Advanced'))),


  isAdvancedOpen && (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(StyledFormItem, { label: (0,TranslatorSingleton.t)('JSON metadata') },
  (0,emotion_react_browser_esm.jsx)(StyledJsonEditor, { showLoadingForImport: true, name: "json_metadata", value: jsonMetadata, onChange: setJsonMetadata, tabSize: 2, width: "100%", height: "200px", wrapEnabled: true })),

  (0,emotion_react_browser_esm.jsx)("p", { className: "help-block" },
  (0,TranslatorSingleton.t)('This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter specific parameters.')))))));






};
/* harmony default export */ const components_PropertiesModal = ((0,withToasts/* default */.Z)(PropertiesModal));

/***/ }),

/***/ 32228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ handleResourceExport)
/* harmony export */ });
/* harmony import */ var src_utils_parseCookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89816);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15926);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14670);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
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



function handleResourceExport(resource, ids, done, interval = 200) {
  const token = shortid__WEBPACK_IMPORTED_MODULE_1___default().generate();
  const url = `/api/v1/${resource}/export/?q=${rison__WEBPACK_IMPORTED_MODULE_0___default().encode(ids)}&token=${token}`;
  // create new iframe for export
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = url;
  document.body.appendChild(iframe);
  const timer = window.setInterval(() => {
    const cookie = (0,src_utils_parseCookie__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    if (cookie[token] === 'done') {
      window.clearInterval(timer);
      document.body.removeChild(iframe);
      done();
    }
  }, interval);
}

/***/ }),

/***/ 34024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChartCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60650);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91877);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46415);
/* harmony import */ var src_components_ConfirmStatusChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19259);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38097);
/* harmony import */ var src_components_ListViewCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55467);
/* harmony import */ var src_components_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37921);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82191);
/* harmony import */ var src_components_FaveStar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36674);
/* harmony import */ var src_components_FacePile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34581);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40768);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11965);
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











function ChartCard({ chart, hasPerm, openChartEditModal, bulkSelectEnabled, addDangerToast, addSuccessToast, refreshData, loading, showThumbnails, saveFavoriteStatus, favoriteStatus, chartFilter, userId, handleBulkChartExport }) {
  const canEdit = hasPerm('can_write');
  const canDelete = hasPerm('can_write');
  const canExport = hasPerm('can_read') && (0,src_featureFlags__WEBPACK_IMPORTED_MODULE_9__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_10__/* .FeatureFlag.VERSIONED_EXPORT */ .T.VERSIONED_EXPORT);
  const theme = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .useTheme */ .Fg)();
  const menu = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_5__/* .Menu */ .v2, null,
  canDelete && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_5__/* .Menu.Item */ .v2.Item, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_components_ConfirmStatusChange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, { title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_13__.t)('Please confirm'), description: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_13__.t)('Are you sure you want to delete'), " ", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)("b", null, chart.slice_name), "?"),

    onConfirm: () => (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .handleChartDelete */ .Gm)(chart, addSuccessToast, addDangerToast, refreshData, chartFilter, userId) },
  (confirmDelete) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", { role: "button", tabIndex: 0, className: "action-button", onClick: confirmDelete },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Trash */ .Z.Trash, { iconSize: "l" }), " ", (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_13__.t)('Delete')))),



  canExport && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_5__/* .Menu.Item */ .v2.Item, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", { role: "button", tabIndex: 0, onClick: () => handleBulkChartExport([chart]) },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Share */ .Z.Share, { iconSize: "l" }), " ", (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_13__.t)('Export'))),


  canEdit && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_5__/* .Menu.Item */ .v2.Item, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", { role: "button", tabIndex: 0, onClick: () => openChartEditModal(chart) },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].EditAlt */ .Z.EditAlt, { iconSize: "l" }), " ", (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_13__.t)('Edit'))));



  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_8__/* .CardStyles */ .ZB, { onClick: () => {
      if (!bulkSelectEnabled && chart.url) {
        window.location.href = chart.url;
      }
    } },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_components_ListViewCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, { loading: loading, title: chart.slice_name, certifiedBy: chart.certified_by, certificationDetails: chart.certification_details, cover: !(0,src_featureFlags__WEBPACK_IMPORTED_MODULE_9__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_10__/* .FeatureFlag.THUMBNAILS */ .T.THUMBNAILS) || !showThumbnails ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null) : null, url: bulkSelectEnabled ? undefined : chart.url, imgURL: chart.thumbnail_url || '', imgFallbackURL: "/static/assets/images/chart-card-fallback.svg", description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_13__.t)('Modified %s', chart.changed_on_delta_humanized), coverLeft: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_components_FacePile__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, { users: chart.owners || [] }), coverRight: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_components_Label__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, { type: "secondary" }, chart.datasource_name_text), actions: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_components_ListViewCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Actions */ .Z.Actions, { onClick: (e) => {
        e.stopPropagation();
        e.preventDefault();
      } },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_components_FaveStar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, { itemId: chart.id, saveFaveStar: saveFavoriteStatus, isStarred: favoriteStatus }),
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_5__/* .Dropdown */ .Lt, { overlay: menu },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].MoreVert */ .Z.MoreVert, { iconColor: theme.colors.grayscale.base }))) }));



}

/***/ }),

/***/ 99415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5977);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(73727);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60650);
/* harmony import */ var src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40768);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(91877);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46415);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82191);
/* harmony import */ var src_components_ConfirmStatusChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19259);
/* harmony import */ var src_components_ListViewCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55467);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38097);
/* harmony import */ var src_components_Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37921);
/* harmony import */ var src_components_FacePile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34581);
/* harmony import */ var src_components_FaveStar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36674);
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












function DashboardCard({ dashboard, hasPerm, bulkSelectEnabled, dashboardFilter, refreshData, userId, addDangerToast, addSuccessToast, openDashboardEditModal, favoriteStatus, saveFavoriteStatus, showThumbnails, handleBulkDashboardExport }) {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .useHistory */ .k6)();
  const canEdit = hasPerm('can_write');
  const canDelete = hasPerm('can_write');
  const canExport = hasPerm('can_read');
  const theme = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .useTheme */ .Fg)();
  const menu = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Menu */ .v2, null,
  canEdit && openDashboardEditModal && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Menu.Item */ .v2.Item, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { role: "button", tabIndex: 0, className: "action-button", onClick: () => openDashboardEditModal && openDashboardEditModal(dashboard) },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"].EditAlt */ .Z.EditAlt, { iconSize: "l" }), " ", (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__.t)('Edit'))),


  canExport && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Menu.Item */ .v2.Item, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { role: "button", tabIndex: 0, onClick: () => handleBulkDashboardExport([dashboard]), className: "action-button" },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Share */ .Z.Share, { iconSize: "l" }), " ", (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__.t)('Export'))),


  canDelete && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Menu.Item */ .v2.Item, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_ConfirmStatusChange__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, { title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__.t)('Please confirm'), description: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__.t)('Are you sure you want to delete'), ' ',
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("b", null, dashboard.dashboard_title), "?"),
    onConfirm: () => (0,src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_1__/* .handleDashboardDelete */ .Iu)(dashboard, refreshData, addSuccessToast, addDangerToast, dashboardFilter, userId) },
  (confirmDelete) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { role: "button", tabIndex: 0, className: "action-button", onClick: confirmDelete },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Trash */ .Z.Trash, { iconSize: "l" }), " ", (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__.t)('Delete')))));




  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_1__/* .CardStyles */ .ZB, { onClick: () => {
      if (!bulkSelectEnabled) {
        history.push(dashboard.url);
      }
    } },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_ListViewCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, { loading: dashboard.loading || false, title: dashboard.dashboard_title, certifiedBy: dashboard.certified_by, certificationDetails: dashboard.certification_details, titleRight: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Label__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null, dashboard.published ? (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__.t)('published') : (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__.t)('draft')), cover: !(0,src_featureFlags__WEBPACK_IMPORTED_MODULE_13__/* .isFeatureEnabled */ .cr)(src_featureFlags__WEBPACK_IMPORTED_MODULE_14__/* .FeatureFlag.THUMBNAILS */ .T.THUMBNAILS) || !showThumbnails ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null) : null, url: bulkSelectEnabled ? undefined : dashboard.url, linkComponent: react_router_dom__WEBPACK_IMPORTED_MODULE_15__/* .Link */ .rU, imgURL: dashboard.thumbnail_url, imgFallbackURL: "/static/assets/images/dashboard-card-fallback.svg", description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__.t)('Modified %s', dashboard.changed_on_delta_humanized), coverLeft: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_FacePile__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, { users: dashboard.owners || [] }), actions: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_ListViewCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Actions */ .Z.Actions, { onClick: (e) => {
        e.stopPropagation();
        e.preventDefault();
      } },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_FaveStar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, { itemId: dashboard.id, saveFaveStar: saveFavoriteStatus, isStarred: favoriteStatus }),
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_2__/* .Dropdown */ .Lt, { overlay: menu },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"].MoreVert */ .Z.MoreVert, { iconColor: theme.colors.grayscale.base }))) }));



}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardCard);

/***/ }),

/***/ 12:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ TableTabTypes),
/* harmony export */   "J": () => (/* binding */ QueryObjectColumns)
/* harmony export */ });
var TableTabTypes;
(function (TableTabTypes) {
  TableTabTypes["FAVORITE"] = "Favorite";
  TableTabTypes["MINE"] = "Mine";
  TableTabTypes["EXAMPLES"] = "Examples";
})(TableTabTypes || (TableTabTypes = {}));
var QueryObjectColumns;
(function (QueryObjectColumns) {
  QueryObjectColumns["id"] = "id";
  QueryObjectColumns["changed_on"] = "changed_on";
  QueryObjectColumns["database"] = "database";
  QueryObjectColumns["database_name"] = "database.database_name";
  QueryObjectColumns["schema"] = "schema";
  QueryObjectColumns["sql"] = "sql";
  QueryObjectColumns["executed_sql"] = "exceuted_sql";
  QueryObjectColumns["sql_tables"] = "sql_tables";
  QueryObjectColumns["status"] = "status";
  QueryObjectColumns["tab_name"] = "tab_name";
  QueryObjectColumns["user"] = "user";
  QueryObjectColumns["user_first_name"] = "user.first_name";
  QueryObjectColumns["start_time"] = "start_time";
  QueryObjectColumns["end_time"] = "end_time";
  QueryObjectColumns["rows"] = "rows";
  QueryObjectColumns["tmp_table_name"] = "tmp_table_name";
  QueryObjectColumns["tracking_url"] = "tracking_url";
})(QueryObjectColumns || (QueryObjectColumns = {}));

/***/ }),

/***/ 4453:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@hot-loader/react-dom/index.js
var react_dom = __webpack_require__(9060);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(37703);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DndProvider.js
var DndProvider = __webpack_require__(38626);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/index.js + 12 modules
var esm = __webpack_require__(57865);
// EXTERNAL MODULE: ./node_modules/use-query-params/esm/index.js + 16 modules
var use_query_params_esm = __webpack_require__(35755);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js + 2 modules
var emotion_element_99289b21_browser_esm = __webpack_require__(68135);
// EXTERNAL MODULE: ./src/components/DynamicPlugins/index.tsx
var DynamicPlugins = __webpack_require__(14278);
// EXTERNAL MODULE: ./src/components/ErrorBoundary/index.jsx
var ErrorBoundary = __webpack_require__(57902);
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(38703);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
// EXTERNAL MODULE: ./src/utils/urlUtils.ts
var urlUtils = __webpack_require__(23525);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var components = __webpack_require__(82191);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/constants.ts
var constants = __webpack_require__(27600);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
;// CONCATENATED MODULE: ./src/components/Menu/LanguagePicker.tsx
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




const { SubMenu } = components/* MainNav */.$t;
const StyledLabel = style/* styled.div */.iK.div`
  display: flex;
  align-items: center;

  & i {
    margin-right: ${({ theme }) => theme.gridUnit * 2}px;
  }

  & a {
    display: block;
    width: 150px;
    word-wrap: break-word;
    text-decoration: none;
  }
`;
const StyledFlag = style/* styled.i */.iK.i`
  margin-top: 2px;
`;
function LanguagePicker(props) {
  const { locale, languages, ...rest } = props;
  return (0,emotion_react_browser_esm.jsx)(SubMenu, extends_default()({ "aria-label": "Languages", title: (0,emotion_react_browser_esm.jsx)("div", { className: "f16" },
    (0,emotion_react_browser_esm.jsx)(StyledFlag, { className: `flag ${languages[locale].flag}` })),
    icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.TriangleDown */.Z.TriangleDown, null) }, rest),
  Object.keys(languages).map((langKey) => (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: langKey, style: { whiteSpace: 'normal', height: 'auto' } },
  (0,emotion_react_browser_esm.jsx)(StyledLabel, { className: "f16" },
  (0,emotion_react_browser_esm.jsx)("i", { className: `flag ${languages[langKey].flag}` }),
  (0,emotion_react_browser_esm.jsx)("a", { href: languages[langKey].url }, languages[langKey].name)))));



}
;// CONCATENATED MODULE: ./src/components/Menu/MenuRight.tsx
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






const dropdownItems = [
{
  label: (0,TranslatorSingleton.t)('SQL query'),
  url: '/superset/sqllab?new=true',
  icon: 'fa-fw fa-search' },

{
  label: (0,TranslatorSingleton.t)('Chart'),
  url: '/chart/add',
  icon: 'fa-fw fa-bar-chart' },

{
  label: (0,TranslatorSingleton.t)('Dashboard'),
  url: '/dashboard/new',
  icon: 'fa-fw fa-dashboard' }];


const versionInfoStyles = (theme) => emotion_react_browser_esm.css`
  padding: ${theme.gridUnit * 1.5}px ${theme.gridUnit * 4}px
    ${theme.gridUnit * 4}px ${theme.gridUnit * 7}px;
  color: ${theme.colors.grayscale.base};
  font-size: ${theme.typography.sizes.xs}px;
  white-space: nowrap;
`;
const StyledI = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.primary.dark1};
`;
const StyledDiv = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ align }) => align};
  align-items: center;
  margin-right: ${({ theme }) => theme.gridUnit}px;
  .ant-menu-submenu-title > svg {
    top: ${({ theme }) => theme.gridUnit * 5.25}px;
  }
`;
const StyledAnchor = style/* styled.a */.iK.a`
  padding-right: ${({ theme }) => theme.gridUnit}px;
  padding-left: ${({ theme }) => theme.gridUnit}px;
`;
const { SubMenu: MenuRight_SubMenu } = components/* MainNav */.$t;
const RightMenu = ({ align, settings, navbarRight, isFrontendRoute }) => (0,emotion_react_browser_esm.jsx)(StyledDiv, { align: align },
(0,emotion_react_browser_esm.jsx)(components/* MainNav */.$t, { mode: "horizontal" },
!navbarRight.user_is_anonymous && (0,emotion_react_browser_esm.jsx)(MenuRight_SubMenu, { title: (0,emotion_react_browser_esm.jsx)(StyledI, { className: "fa fa-plus" }), icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.TriangleDown */.Z.TriangleDown, null) },
dropdownItems.map((menu) => (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: menu.label },
(0,emotion_react_browser_esm.jsx)("a", { href: menu.url },
(0,emotion_react_browser_esm.jsx)("i", { className: `fa ${menu.icon}` }), ' ',
menu.label)))),



(0,emotion_react_browser_esm.jsx)(MenuRight_SubMenu, { title: "Settings", icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.TriangleDown */.Z.TriangleDown, { iconSize: "xl" }) },
settings.map((section, index) => {var _section$childs;return [
  (0,emotion_react_browser_esm.jsx)(components/* MainNav.ItemGroup */.$t.ItemGroup, { key: `${section.label}`, title: section.label }, (_section$childs =
  section.childs) == null ? void 0 : _section$childs.map((child) => {
    if (typeof child !== 'string') {
      return (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: `${child.label}` },
      isFrontendRoute(child.url) ? (0,emotion_react_browser_esm.jsx)(react_router_dom/* Link */.rU, { to: child.url || '' }, child.label) : (0,emotion_react_browser_esm.jsx)("a", { href: child.url }, child.label));

    }
    return null;
  })),

  index < settings.length - 1 && (0,emotion_react_browser_esm.jsx)(components/* MainNav.Divider */.$t.Divider, null)];}),


!navbarRight.user_is_anonymous && [
(0,emotion_react_browser_esm.jsx)(components/* MainNav.Divider */.$t.Divider, { key: "user-divider" }),
(0,emotion_react_browser_esm.jsx)(components/* MainNav.ItemGroup */.$t.ItemGroup, { key: "user-section", title: (0,TranslatorSingleton.t)('User') },
navbarRight.user_profile_url && (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: "profile" },
(0,emotion_react_browser_esm.jsx)("a", { href: navbarRight.user_profile_url }, (0,TranslatorSingleton.t)('Profile'))),

navbarRight.user_info_url && (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: "info" },
(0,emotion_react_browser_esm.jsx)("a", { href: navbarRight.user_info_url }, (0,TranslatorSingleton.t)('Info'))),

(0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: "logout" },
(0,emotion_react_browser_esm.jsx)("a", { href: navbarRight.user_logout_url }, (0,TranslatorSingleton.t)('Logout'))))],



(navbarRight.version_string ||
navbarRight.version_sha ||
navbarRight.build_number) && [
(0,emotion_react_browser_esm.jsx)(components/* MainNav.Divider */.$t.Divider, { key: "version-info-divider" }),
(0,emotion_react_browser_esm.jsx)(components/* MainNav.ItemGroup */.$t.ItemGroup, { key: "about-section", title: (0,TranslatorSingleton.t)('About') },
(0,emotion_react_browser_esm.jsx)("div", { className: "about-section" },
navbarRight.show_watermark && (0,emotion_react_browser_esm.jsx)("div", { css: versionInfoStyles },
(0,TranslatorSingleton.t)('Powered by Apache Superset')),

navbarRight.version_string && (0,emotion_react_browser_esm.jsx)("div", { css: versionInfoStyles }, "Version: ",
navbarRight.version_string),

navbarRight.version_sha && (0,emotion_react_browser_esm.jsx)("div", { css: versionInfoStyles }, "SHA: ",
navbarRight.version_sha),

navbarRight.build_number && (0,emotion_react_browser_esm.jsx)("div", { css: versionInfoStyles }, "Build: ",
navbarRight.build_number)))]),





navbarRight.show_language_picker && (0,emotion_react_browser_esm.jsx)(LanguagePicker, { locale: navbarRight.locale, languages: navbarRight.languages })),

navbarRight.documentation_url && (0,emotion_react_browser_esm.jsx)(StyledAnchor, { href: navbarRight.documentation_url, target: "_blank", rel: "noreferrer", title: (0,TranslatorSingleton.t)('Documentation') },
(0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-question" }), "\xA0"),


navbarRight.bug_report_url && (0,emotion_react_browser_esm.jsx)(StyledAnchor, { href: navbarRight.bug_report_url, target: "_blank", rel: "noreferrer", title: (0,TranslatorSingleton.t)('Report a bug') },
(0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-bug" })),

navbarRight.user_is_anonymous && (0,emotion_react_browser_esm.jsx)(StyledAnchor, { href: navbarRight.user_login_url },
(0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-fw fa-sign-in" }),
(0,TranslatorSingleton.t)('Login')));


/* harmony default export */ const MenuRight = (RightMenu);
;// CONCATENATED MODULE: ./src/components/Menu/Menu.tsx
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












const StyledHeader = style/* styled.header */.iK.header`
  background-color: white;
  margin-bottom: 2px;
  &:nth-last-of-type(2) nav {
    margin-bottom: 2px;
  }

  .caret {
    display: none;
  }
  .navbar-brand {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .navbar-brand-text {
    border-left: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    border-right: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    height: 100%;
    color: ${({ theme }) => theme.colors.grayscale.dark1};
    padding-left: ${({ theme }) => theme.gridUnit * 4}px;
    padding-right: ${({ theme }) => theme.gridUnit * 4}px;
    margin-right: ${({ theme }) => theme.gridUnit * 6}px;
    font-size: ${({ theme }) => theme.gridUnit * 4}px;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      max-width: ${({ theme }) => theme.gridUnit * 58}px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    @media (max-width: 1127px) {
      display: none;
    }
  }
  .main-nav .ant-menu-submenu-title > svg {
    top: ${({ theme }) => theme.gridUnit * 5.25}px;
  }
  @media (max-width: 767px) {
    .navbar-brand {
      float: none;
    }
  }
  .ant-menu-horizontal .ant-menu-item {
    height: 100%;
    line-height: inherit;
  }
  .ant-menu > .ant-menu-item > a {
    padding: ${({ theme }) => theme.gridUnit * 4}px;
  }
  @media (max-width: 767px) {
    .ant-menu-item {
      padding: 0 ${({ theme }) => theme.gridUnit * 6}px 0
        ${({ theme }) => theme.gridUnit * 3}px !important;
    }
    .ant-menu > .ant-menu-item > a {
      padding: 0px;
    }
    .main-nav .ant-menu-submenu-title > svg:nth-child(1) {
      display: none;
    }
    .ant-menu-item-active > a {
      &:hover {
        color: ${({ theme }) => theme.colors.primary.base} !important;
        background-color: transparent !important;
      }
    }
  }

  .ant-menu-item a {
    &:hover {
      color: ${({ theme }) => theme.colors.grayscale.dark1};
      background-color: ${({ theme }) => theme.colors.primary.light5};
      border-bottom: none;
      margin: 0;
      &:after {
        opacity: 1;
        width: 100%;
      }
    }
  }
`;
const { SubMenu: Menu_SubMenu } = components/* MainNav */.$t;
const { useBreakpoint } = grid/* default */.ZP;
function Menu({ data: { menu, brand, navbar_right: navbarRight, settings }, isFrontendRoute = () => false }) {
  const [showMenu, setMenu] = (0,react.useState)('horizontal');
  const screens = useBreakpoint();
  (0,react.useEffect)(() => {
    function handleResize() {
      if (window.innerWidth <= 767) {
        setMenu('inline');
      } else

      setMenu('horizontal');
    }
    handleResize();
    const windowResize = debounce_default()(() => handleResize(), 10);
    window.addEventListener('resize', windowResize);
    return () => window.removeEventListener('resize', windowResize);
  }, []);
  const standalone = (0,urlUtils/* getUrlParam */.e)(constants/* URL_PARAMS.standalone */.KD.standalone);
  if (standalone)
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null);
  const renderSubMenu = ({ label, childs, url, index, isFrontendRoute }) => {
    if (url && isFrontendRoute) {
      return (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: label, role: "presentation" },
      (0,emotion_react_browser_esm.jsx)(react_router_dom/* Link */.rU, { role: "button", to: url },
      label));


    }
    if (url) {
      return (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: label },
      (0,emotion_react_browser_esm.jsx)("a", { href: url }, label));

    }
    return (0,emotion_react_browser_esm.jsx)(Menu_SubMenu, { key: index, title: label, icon: showMenu === 'inline' ? (0,emotion_react_browser_esm.jsx)(react.Fragment, null) : (0,emotion_react_browser_esm.jsx)(Icons/* default.TriangleDown */.Z.TriangleDown, null) },
    childs == null ? void 0 : childs.map((child, index1) => {
      if (typeof child === 'string' && child === '-') {
        return (0,emotion_react_browser_esm.jsx)(components/* MainNav.Divider */.$t.Divider, { key: `$${index1}` });
      }
      if (typeof child !== 'string') {
        return (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: `${child.label}` },
        child.isFrontendRoute ? (0,emotion_react_browser_esm.jsx)(react_router_dom/* Link */.rU, { to: child.url || '' }, child.label) : (0,emotion_react_browser_esm.jsx)("a", { href: child.url }, child.label));

      }
      return null;
    }));

  };
  return (0,emotion_react_browser_esm.jsx)(StyledHeader, { className: "top", id: "main-menu", role: "navigation" },
  (0,emotion_react_browser_esm.jsx)(emotion_react_browser_esm.Global, { styles: emotion_react_browser_esm.css`
          .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light.ant-menu-submenu-placement-bottomLeft {
            border-radius: 0px;
          }
          .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light {
            border-radius: 0px;
          }
        ` }),
  (0,emotion_react_browser_esm.jsx)(row/* default */.Z, null,
  (0,emotion_react_browser_esm.jsx)(col/* default */.Z, { md: 16, xs: 24 },
  (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "brand-tooltip", placement: "bottomLeft", title: brand.tooltip, arrowPointAtCenter: true },
  (0,emotion_react_browser_esm.jsx)("a", { className: "navbar-brand", href: brand.path },
  (0,emotion_react_browser_esm.jsx)("img", { width: brand.width, src: brand.icon, alt: brand.alt }))),


  brand.text && (0,emotion_react_browser_esm.jsx)("div", { className: "navbar-brand-text" },
  (0,emotion_react_browser_esm.jsx)("span", null, brand.text)),

  (0,emotion_react_browser_esm.jsx)(components/* MainNav */.$t, { mode: showMenu, className: "main-nav" },
  menu.map((item) => {var _item$childs;
    const props = {
      ...item,
      isFrontendRoute: isFrontendRoute(item.url),
      childs: (_item$childs = item.childs) == null ? void 0 : _item$childs.map((c) => {
        if (typeof c === 'string') {
          return c;
        }
        return {
          ...c,
          isFrontendRoute: isFrontendRoute(c.url) };

      }) };

    return renderSubMenu(props);
  }))),


  (0,emotion_react_browser_esm.jsx)(col/* default */.Z, { md: 8, xs: 24 },
  (0,emotion_react_browser_esm.jsx)(MenuRight, { align: screens.md ? 'flex-end' : 'flex-start', settings: settings, navbarRight: navbarRight, isFrontendRoute: isFrontendRoute }))));



}
// transform the menu data to reorganize components
function MenuWrapper({ data, ...rest }) {
  const newMenuData = {
    ...data };

  // Menu items that should go into settings dropdown
  const settingsMenus = {
    Security: true,
    Manage: true };

  // Cycle through menu.menu to build out cleanedMenu and settings
  const cleanedMenu = [];
  const settings = [];
  newMenuData.menu.forEach((item) => {
    if (!item) {
      return;
    }
    const children = [];
    const newItem = {
      ...item };

    // Filter childs
    if (item.childs) {
      item.childs.forEach((child) => {
        if (typeof child === 'string') {
          children.push(child);
        } else
        if (child.label) {
          children.push(child);
        }
      });
      newItem.childs = children;
    }
    if (!settingsMenus.hasOwnProperty(item.name)) {
      cleanedMenu.push(newItem);
    } else
    {
      settings.push(newItem);
    }
  });
  newMenuData.menu = cleanedMenu;
  newMenuData.settings = settings;
  return (0,emotion_react_browser_esm.jsx)(Menu, extends_default()({ data: newMenuData }, rest));
}
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/common/hooks/useComponentDidMount/index.ts + 1 modules
var useComponentDidMount = __webpack_require__(76634);
;// CONCATENATED MODULE: ./src/components/FlashProvider/index.tsx
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


const flashObj = {
  info: 'addInfoToast',
  alert: 'addDangerToast',
  danger: 'addDangerToast',
  warning: 'addWarningToast',
  success: 'addSuccessToast' };

function FlashProvider({ children, messages }) {
  const toasts = (0,withToasts/* useToasts */.e)();
  (0,useComponentDidMount/* useComponentDidMount */.J)(() => {
    messages.forEach((message) => {
      const [type, text] = message;
      const flash = flashObj[type];
      const toast = toasts[flash];
      if (toast) {
        toast(text);
      }
    });
  });
  return children;
}
// EXTERNAL MODULE: ./src/preamble.ts + 3 modules
var preamble = __webpack_require__(26009);
// EXTERNAL MODULE: ./src/components/MessageToasts/ToastContainer.jsx
var ToastContainer = __webpack_require__(5951);
// EXTERNAL MODULE: ./src/setup/setupApp.ts + 6 modules
var setupApp = __webpack_require__(84153);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./node_modules/lodash/reject.js
var reject = __webpack_require__(43063);
var reject_default = /*#__PURE__*/__webpack_require__.n(reject);
// EXTERNAL MODULE: ./src/components/Collapse/index.tsx
var Collapse = __webpack_require__(43700);
// EXTERNAL MODULE: ./src/utils/localStorageHelpers.ts
var localStorageHelpers = __webpack_require__(61337);
// EXTERNAL MODULE: ./src/components/ListViewCard/index.tsx + 1 modules
var ListViewCard = __webpack_require__(55467);
// EXTERNAL MODULE: ./src/views/CRUD/utils.tsx
var utils = __webpack_require__(40768);
;// CONCATENATED MODULE: ./src/views/CRUD/storageKeys.ts
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
// storage keys for welcome page sticky tabs and tables
const HOMEPAGE_CHART_FILTER = 'homepage_chart_filter';
const HOMEPAGE_ACTIVITY_FILTER = 'homepage_activity_filter';
const HOMEPAGE_DASHBOARD_FILTER = 'homepage_dashboard_filter';
const HOMEPAGE_COLLAPSE_STATE = 'homepage_collapse_state';
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/components/Menu/SubMenu.tsx
var components_Menu_SubMenu = __webpack_require__(62753);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
;// CONCATENATED MODULE: ./src/views/CRUD/welcome/EmptyState.tsx
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




const EmptyContainer = style/* styled.div */.iK.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ButtonContainer = style/* styled.div */.iK.div`
  Button {
    svg {
      color: ${({ theme }) => theme.colors.grayscale.light5};
    }
  }
`;
function EmptyState({ tableName, tab }) {
  const mineRedirects = {
    DASHBOARDS: '/dashboard/new',
    CHARTS: '/chart/add',
    SAVED_QUERIES: '/superset/sqllab?new=true' };

  const favRedirects = {
    DASHBOARDS: '/dashboard/list/',
    CHARTS: '/chart/list',
    SAVED_QUERIES: '/savedqueryview/list/' };

  const tableIcon = {
    RECENTS: 'union.svg',
    DASHBOARDS: 'empty-dashboard.svg',
    CHARTS: 'empty-charts.svg',
    SAVED_QUERIES: 'empty-queries.svg' };

  const mine = (0,emotion_react_browser_esm.jsx)("span", null, `No ${tableName === 'SAVED_QUERIES' ?
  (0,TranslatorSingleton.t)('saved queries') :
  (0,TranslatorSingleton.t)(`${tableName.toLowerCase()}`)} yet`);
  const recent = (0,emotion_react_browser_esm.jsx)("span", { className: "no-recents" },
  (() => {
    if (tab === 'Viewed') {
      return (0,TranslatorSingleton.t)(`Recently viewed charts, dashboards, and saved queries will appear here`);
    }
    if (tab === 'Created') {
      return (0,TranslatorSingleton.t)('Recently created charts, dashboards, and saved queries will appear here');
    }
    if (tab === 'Examples') {
      return (0,TranslatorSingleton.t)(`Example ${tableName.toLowerCase()} will appear here`);
    }
    if (tab === 'Edited') {
      return (0,TranslatorSingleton.t)(`Recently edited charts, dashboards, and saved queries will appear here`);
    }
    return null;
  })());

  // Mine and Recent Activity(all tabs) tab empty state
  if (tab === 'Mine' || tableName === 'RECENTS' || tab === 'Examples') {
    return (0,emotion_react_browser_esm.jsx)(EmptyContainer, null,
    (0,emotion_react_browser_esm.jsx)(components/* Empty */.HY, { image: `/static/assets/images/${tableIcon[tableName]}`, description: tableName === 'RECENTS' || tab === 'Examples' ? recent : mine },
    tableName !== 'RECENTS' && (0,emotion_react_browser_esm.jsx)(ButtonContainer, null,
    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "primary", onClick: () => {
        window.location = mineRedirects[tableName];
      } },
    (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }),
    tableName === 'SAVED_QUERIES' ?
    (0,TranslatorSingleton.t)('SQL query') :
    (0,TranslatorSingleton.t)(`${tableName.
    split('').
    slice(0, tableName.length - 1).
    join('')}
                    `)))));




  }
  // Favorite tab empty state
  return (0,emotion_react_browser_esm.jsx)(EmptyContainer, null,
  (0,emotion_react_browser_esm.jsx)(components/* Empty */.HY, { image: "/static/assets/images/star-circle.svg", description: (0,emotion_react_browser_esm.jsx)("span", { className: "no-favorites" },
    (0,TranslatorSingleton.t)("You don't have any favorites yet!")) },

  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "primary", onClick: () => {
      window.location = favRedirects[tableName];
    } }, "See all",
  ' ',
  tableName === 'SAVED_QUERIES' ?
  (0,TranslatorSingleton.t)('SQL Lab queries') :
  (0,TranslatorSingleton.t)(`${tableName}`))));



}
;// CONCATENATED MODULE: ./src/views/CRUD/welcome/ActivityTable.tsx
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











var SetTabType;
(function (SetTabType) {
  SetTabType["EDITED"] = "Edited";
  SetTabType["CREATED"] = "Created";
  SetTabType["VIEWED"] = "Viewed";
  SetTabType["EXAMPLE"] = "Examples";
})(SetTabType || (SetTabType = {}));
const Styles = style/* styled.div */.iK.div`
  .recentCards {
    max-height: none;
    grid-gap: ${({ theme }) => `${theme.gridUnit * 4}px`};
  }
`;
const UNTITLED = (0,TranslatorSingleton.t)('[Untitled]');
const UNKNOWN_TIME = (0,TranslatorSingleton.t)('Unknown');
const getEntityTitle = (entity) => {
  if ('dashboard_title' in entity)
  return entity.dashboard_title || UNTITLED;
  if ('slice_name' in entity)
  return entity.slice_name || UNTITLED;
  if ('label' in entity)
  return entity.label || UNTITLED;
  return entity.item_title || UNTITLED;
};
const getEntityIcon = (entity) => {
  if ('sql' in entity)
  return (0,emotion_react_browser_esm.jsx)(Icons/* default.Sql */.Z.Sql, null);
  const url = 'item_url' in entity ? entity.item_url : entity.url;
  if (url != null && url.includes('dashboard')) {
    return (0,emotion_react_browser_esm.jsx)(Icons/* default.NavDashboard */.Z.NavDashboard, null);
  }
  if (url != null && url.includes('explore')) {
    return (0,emotion_react_browser_esm.jsx)(Icons/* default.NavCharts */.Z.NavCharts, null);
  }
  return null;
};
const getEntityUrl = (entity) => {
  if ('sql' in entity)
  return `/superset/sqllab?savedQueryId=${entity.id}`;
  if ('url' in entity)
  return entity.url;
  return entity.item_url;
};
const getEntityLastActionOn = (entity) => {
  // translation keys for last action on
  const LAST_VIEWED = `Viewed %s`;
  const LAST_MODIFIED = `Modified %s`;
  // for Recent viewed items
  if ('time_delta_humanized' in entity) {
    return (0,TranslatorSingleton.t)(LAST_VIEWED, entity.time_delta_humanized);
  }
  if ('changed_on_delta_humanized' in entity) {
    return (0,TranslatorSingleton.t)(LAST_MODIFIED, entity.changed_on_delta_humanized);
  }
  let time;
  let translationKey = LAST_MODIFIED;
  if ('time' in entity) {
    // eslint-disable-next-line prefer-destructuring
    time = entity.time;
    translationKey = LAST_VIEWED;
  }
  if ('changed_on' in entity)
  time = entity.changed_on;
  if ('changed_on_utc' in entity)
  time = entity.changed_on_utc;
  return (0,TranslatorSingleton.t)(translationKey, time == null ? UNKNOWN_TIME : moment_default()(time).fromNow());
};
function ActivityTable({ activeChild, setActiveChild, activityData, user, loadedCount }) {var _activityData$activeC;
  const [editedObjs, setEditedObjs] = (0,react.useState)();
  const [loadingState, setLoadingState] = (0,react.useState)(false);
  const getEditedCards = () => {
    setLoadingState(true);
    (0,utils/* getEditedObjects */.Ld)(user.userId).then((r) => {
      setEditedObjs([...r.editedChart, ...r.editedDash]);
      setLoadingState(false);
    });
  };
  (0,react.useEffect)(() => {
    if (activeChild === 'Edited') {
      setLoadingState(true);
      getEditedCards();
    }
  }, [activeChild]);
  const tabs = [
  {
    name: 'Edited',
    label: (0,TranslatorSingleton.t)('Edited'),
    onClick: () => {
      setActiveChild('Edited');
      (0,localStorageHelpers/* setInLocalStorage */._)(HOMEPAGE_ACTIVITY_FILTER, SetTabType.EDITED);
    } },

  {
    name: 'Created',
    label: (0,TranslatorSingleton.t)('Created'),
    onClick: () => {
      setActiveChild('Created');
      (0,localStorageHelpers/* setInLocalStorage */._)(HOMEPAGE_ACTIVITY_FILTER, SetTabType.CREATED);
    } }];


  if (activityData != null && activityData.Viewed) {
    tabs.unshift({
      name: 'Viewed',
      label: (0,TranslatorSingleton.t)('Viewed'),
      onClick: () => {
        setActiveChild('Viewed');
        (0,localStorageHelpers/* setInLocalStorage */._)(HOMEPAGE_ACTIVITY_FILTER, SetTabType.VIEWED);
      } });

  }
  const renderActivity = () => (activeChild !== 'Edited' ? activityData[activeChild] : editedObjs).map((entity) => {
    const url = getEntityUrl(entity);
    const lastActionOn = getEntityLastActionOn(entity);
    return (0,emotion_react_browser_esm.jsx)(utils/* CardStyles */.ZB, { onClick: () => {
        window.location.href = url;
      }, key: url },
    (0,emotion_react_browser_esm.jsx)(ListViewCard/* default */.Z, { cover: (0,emotion_react_browser_esm.jsx)(react.Fragment, null), url: url, title: getEntityTitle(entity), description: lastActionOn, avatar: getEntityIcon(entity), actions: null }));

  });
  const doneFetching = loadedCount < 3;
  if (loadingState && !editedObjs || doneFetching) {
    return (0,emotion_react_browser_esm.jsx)(LoadingCards, null);
  }
  return (0,emotion_react_browser_esm.jsx)(Styles, null,
  (0,emotion_react_browser_esm.jsx)(components_Menu_SubMenu/* default */.Z, { activeChild: activeChild, tabs: tabs }),
  ((_activityData$activeC = activityData[activeChild]) == null ? void 0 : _activityData$activeC.length) > 0 ||
  activeChild === 'Edited' && editedObjs && editedObjs.length > 0 ? (0,emotion_react_browser_esm.jsx)(utils/* CardContainer */._L, { className: "recentCards" },
  renderActivity()) :
  (0,emotion_react_browser_esm.jsx)(EmptyState, { tableName: "RECENTS", tab: activeChild }));

}
// EXTERNAL MODULE: ./node_modules/lodash/filter.js
var filter = __webpack_require__(63105);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);
// EXTERNAL MODULE: ./src/views/CRUD/hooks.ts
var hooks = __webpack_require__(34858);
// EXTERNAL MODULE: ./src/views/CRUD/types.ts
var types = __webpack_require__(12);
// EXTERNAL MODULE: ./src/explore/components/PropertiesModal/index.tsx
var PropertiesModal = __webpack_require__(83673);
// EXTERNAL MODULE: ./src/views/CRUD/chart/ChartCard.tsx
var ChartCard = __webpack_require__(34024);
// EXTERNAL MODULE: ./src/utils/export.ts
var utils_export = __webpack_require__(32228);
;// CONCATENATED MODULE: ./src/views/CRUD/welcome/ChartTable.tsx
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


















function ChartTable({ user, addDangerToast, addSuccessToast, mine, showThumbnails, examples }) {
  const history = (0,react_router/* useHistory */.k6)();
  const filterStore = (0,localStorageHelpers/* getFromLocalStorage */.f)(HOMEPAGE_CHART_FILTER, null);
  const initialFilter = filterStore || types/* TableTabTypes.EXAMPLES */.s.EXAMPLES;
  const filteredExamples = filter_default()(examples, (obj) => 'viz_type' in obj);
  const { state: { loading, resourceCollection: charts, bulkSelectEnabled }, setResourceCollection: setCharts, hasPerm, refreshData, fetchData } = (0,hooks/* useListViewResource */.Yi)('chart', (0,TranslatorSingleton.t)('chart'), addDangerToast, true, initialFilter === 'Mine' ? mine : filteredExamples, [], false);
  const chartIds = (0,react.useMemo)(() => charts.map((c) => c.id), [charts]);
  const [saveFavoriteStatus, favoriteStatus] = (0,hooks/* useFavoriteStatus */.NE)('chart', chartIds, addDangerToast);
  const { sliceCurrentlyEditing, openChartEditModal, handleChartUpdated, closeChartEditModal } = (0,hooks/* useChartEditModal */.fF)(setCharts, charts);
  const [chartFilter, setChartFilter] = (0,react.useState)(initialFilter);
  const [preparingExport, setPreparingExport] = (0,react.useState)(false);
  const [loaded, setLoaded] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (loaded || chartFilter === 'Favorite') {
      getData(chartFilter);
    }
    setLoaded(true);
  }, [chartFilter]);
  const handleBulkChartExport = (chartsToExport) => {
    const ids = chartsToExport.map(({ id }) => id);
    (0,utils_export/* default */.Z)('chart', ids, () => {
      setPreparingExport(false);
    });
    setPreparingExport(true);
  };
  const getFilters = (filterName) => {
    const filters = [];
    if (filterName === 'Mine') {
      filters.push({
        id: 'created_by',
        operator: 'rel_o_m',
        value: `${user == null ? void 0 : user.userId}` });

    } else
    if (filterName === 'Favorite') {
      filters.push({
        id: 'id',
        operator: 'chart_is_favorite',
        value: true });

    } else
    if (filterName === 'Examples') {
      filters.push({
        id: 'created_by',
        operator: 'rel_o_m',
        value: 0 });

    }
    return filters;
  };
  const getData = (filter) => fetchData({
    pageIndex: 0,
    pageSize: utils/* PAGE_SIZE */.IV,
    sortBy: [
    {
      id: 'changed_on_delta_humanized',
      desc: true }],


    filters: getFilters(filter) });

  const menuTabs = [
  {
    name: 'Favorite',
    label: (0,TranslatorSingleton.t)('Favorite'),
    onClick: () => {
      setChartFilter(types/* TableTabTypes.FAVORITE */.s.FAVORITE);
      (0,localStorageHelpers/* setInLocalStorage */._)(HOMEPAGE_CHART_FILTER, types/* TableTabTypes.FAVORITE */.s.FAVORITE);
    } },

  {
    name: 'Mine',
    label: (0,TranslatorSingleton.t)('Mine'),
    onClick: () => {
      setChartFilter(types/* TableTabTypes.MINE */.s.MINE);
      (0,localStorageHelpers/* setInLocalStorage */._)(HOMEPAGE_CHART_FILTER, types/* TableTabTypes.MINE */.s.MINE);
    } }];


  if (examples) {
    menuTabs.push({
      name: 'Examples',
      label: (0,TranslatorSingleton.t)('Examples'),
      onClick: () => {
        setChartFilter(types/* TableTabTypes.EXAMPLES */.s.EXAMPLES);
        (0,localStorageHelpers/* setInLocalStorage */._)(HOMEPAGE_CHART_FILTER, types/* TableTabTypes.EXAMPLES */.s.EXAMPLES);
      } });

  }
  if (loading)
  return (0,emotion_react_browser_esm.jsx)(LoadingCards, { cover: showThumbnails });
  return (0,emotion_react_browser_esm.jsx)(ErrorBoundary/* default */.Z, null,
  sliceCurrentlyEditing && (0,emotion_react_browser_esm.jsx)(PropertiesModal/* default */.Z, { onHide: closeChartEditModal, onSave: handleChartUpdated, show: true, slice: sliceCurrentlyEditing }),

  (0,emotion_react_browser_esm.jsx)(components_Menu_SubMenu/* default */.Z, { activeChild: chartFilter, tabs: menuTabs, buttons: [
    {
      name: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }),
      (0,TranslatorSingleton.t)('Chart')),

      buttonStyle: 'tertiary',
      onClick: () => {
        window.location.assign('/chart/add');
      } },

    {
      name: 'View All »',
      buttonStyle: 'link',
      onClick: () => {
        const target = chartFilter === 'Favorite' ?
        `/chart/list/?filters=(favorite:(label:${(0,TranslatorSingleton.t)('Yes')},value:!t))` :
        '/chart/list/';
        history.push(target);
      } }] }),


  charts != null && charts.length ? (0,emotion_react_browser_esm.jsx)(utils/* CardContainer */._L, { showThumbnails: showThumbnails },
  charts.map((e) => (0,emotion_react_browser_esm.jsx)(ChartCard/* default */.Z, { key: `${e.id}`, openChartEditModal: openChartEditModal, chartFilter: chartFilter, chart: e, userId: user == null ? void 0 : user.userId, hasPerm: hasPerm, showThumbnails: showThumbnails, bulkSelectEnabled: bulkSelectEnabled, refreshData: refreshData, addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, favoriteStatus: favoriteStatus[e.id], saveFavoriteStatus: saveFavoriteStatus, handleBulkChartExport: handleBulkChartExport }))) :
  (0,emotion_react_browser_esm.jsx)(EmptyState, { tableName: "CHARTS", tab: chartFilter }),
  preparingExport && (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null));

}
/* harmony default export */ const welcome_ChartTable = ((0,withToasts/* default */.Z)(ChartTable));
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/cjs/light.js
var light = __webpack_require__(42110);
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/cjs/languages/hljs/sql.js
var sql = __webpack_require__(33743);
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/github.js
var github = __webpack_require__(120);
// EXTERNAL MODULE: ./src/components/DeleteModal/index.tsx
var DeleteModal = __webpack_require__(17198);
;// CONCATENATED MODULE: ./src/views/CRUD/welcome/SavedQueries.tsx
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















light/* default.registerLanguage */.Z.registerLanguage('sql', sql/* default */.Z);
const CardStyles = style/* styled.div */.iK.div`
  cursor: pointer;
  a {
    text-decoration: none;
  }
  .ant-card-cover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    & > div {
      height: 171px;
    }
  }
  .gradient-container > div {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${({ theme }) => theme.colors.secondary.light3};
    display: inline-block;
    width: 100%;
    height: 179px;
    background-repeat: no-repeat;
    vertical-align: middle;
  }
`;
const QueryData = style/* styled.div */.iK.div`
  svg {
    margin-left: ${({ theme }) => theme.gridUnit * 10}px;
  }
  .query-title {
    padding: ${({ theme }) => theme.gridUnit * 2 + 2}px;
    font-size: ${({ theme }) => theme.typography.sizes.l}px;
  }
`;
const QueryContainer = style/* styled.div */.iK.div`
  pre {
    height: ${({ theme }) => theme.gridUnit * 40}px;
    border: none !important;
    background-color: ${({ theme }) => theme.colors.grayscale.light5} !important;
    overflow: hidden;
    padding: ${({ theme }) => theme.gridUnit * 4}px !important;
  }
`;
const SavedQueries = ({ user, addDangerToast, addSuccessToast, mine, showThumbnails, featureFlag }) => {
  const { state: { loading, resourceCollection: queries }, hasPerm, fetchData, refreshData } = (0,hooks/* useListViewResource */.Yi)('saved_query', (0,TranslatorSingleton.t)('query'), addDangerToast, true, mine, [], false);
  const [queryFilter, setQueryFilter] = (0,react.useState)('Mine');
  const [queryDeleteModal, setQueryDeleteModal] = (0,react.useState)(false);
  const [currentlyEdited, setCurrentlyEdited] = (0,react.useState)({});
  const [ifMine, setMine] = (0,react.useState)(true);
  const canEdit = hasPerm('can_edit');
  const canDelete = hasPerm('can_delete');
  const theme = (0,style/* useTheme */.Fg)();
  const handleQueryDelete = ({ id, label }) => {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/saved_query/${id}` }).
    then(() => {
      const queryParams = {
        filters: [
        {
          id: 'created_by',
          operator: 'rel_o_m',
          value: `${user == null ? void 0 : user.userId}` }],


        pageSize: utils/* PAGE_SIZE */.IV,
        sortBy: [
        {
          id: 'changed_on_delta_humanized',
          desc: true }],


        pageIndex: 0 };

      // if mine is default there refresh data with current filters
      const filter = ifMine ? queryParams : undefined;
      refreshData(filter);
      setMine(false);
      setQueryDeleteModal(false);
      addSuccessToast((0,TranslatorSingleton.t)('Deleted: %s', label));
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting %s: %s', label, errMsg))));
  };
  const getFilters = (filterName) => {
    const filters = [];
    if (filterName === 'Mine') {
      filters.push({
        id: 'created_by',
        operator: 'rel_o_m',
        value: `${user == null ? void 0 : user.userId}` });

    } else
    {
      filters.push({
        id: 'id',
        operator: 'saved_query_is_fav',
        value: true });

    }
    return filters;
  };
  const getData = (filter) => fetchData({
    pageIndex: 0,
    pageSize: utils/* PAGE_SIZE */.IV,
    sortBy: [
    {
      id: 'changed_on_delta_humanized',
      desc: true }],


    filters: getFilters(filter) });

  const renderMenu = (query) => (0,emotion_react_browser_esm.jsx)(components/* Menu */.v2, null,
  canEdit && (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { onClick: () => {
      window.location.href = `/superset/sqllab?savedQueryId=${query.id}`;
    } },
  (0,TranslatorSingleton.t)('Edit')),

  (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { onClick: () => {
      if (query.id) {
        (0,hooks/* copyQueryLink */.bR)(query.id, addDangerToast, addSuccessToast);
      }
    } },
  (0,TranslatorSingleton.t)('Share')),

  canDelete && (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { onClick: () => {
      setQueryDeleteModal(true);
      setCurrentlyEdited(query);
    } },
  (0,TranslatorSingleton.t)('Delete')));


  if (loading)
  return (0,emotion_react_browser_esm.jsx)(LoadingCards, { cover: showThumbnails });
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  queryDeleteModal && (0,emotion_react_browser_esm.jsx)(DeleteModal/* default */.Z, { description: (0,TranslatorSingleton.t)('This action will permanently delete the saved query.'), onConfirm: () => {
      if (queryDeleteModal) {
        handleQueryDelete(currentlyEdited);
      }
    }, onHide: () => {
      setQueryDeleteModal(false);
    }, open: true, title: (0,TranslatorSingleton.t)('Delete Query?') }),
  (0,emotion_react_browser_esm.jsx)(components_Menu_SubMenu/* default */.Z, { activeChild: queryFilter, tabs: [
    /* @TODO uncomment when fav functionality is implemented
    {
      name: 'Favorite',
      label: t('Favorite'),
      onClick: () => {
        getData('Favorite').then(() => setQueryFilter('Favorite'));
      },
    },
    */
    {
      name: 'Mine',
      label: (0,TranslatorSingleton.t)('Mine'),
      onClick: () => getData('Mine').then(() => setQueryFilter('Mine')) }],

    buttons: [
    {
      name: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), "SQL Query"),


      buttonStyle: 'tertiary',
      onClick: () => {
        window.location.href = '/superset/sqllab?new=true';
      } },

    {
      name: 'View All »',
      buttonStyle: 'link',
      onClick: () => {
        window.location.href = '/savedqueryview/list';
      } }] }),


  queries.length > 0 ? (0,emotion_react_browser_esm.jsx)(utils/* CardContainer */._L, { showThumbnails: showThumbnails },
  queries.map((q) => {var _q$sql, _q$sql2;return (0,emotion_react_browser_esm.jsx)(CardStyles, { onClick: () => {
        window.location.href = `/superset/sqllab?savedQueryId=${q.id}`;
      }, key: q.id },
    (0,emotion_react_browser_esm.jsx)(ListViewCard/* default */.Z, { imgURL: "", url: `/superset/sqllab?savedQueryId=${q.id}`, title: q.label, imgFallbackURL: "/static/assets/images/empty-query.svg", description: (0,TranslatorSingleton.t)('Ran %s', q.changed_on_delta_humanized), cover: q != null && (_q$sql = q.sql) != null && _q$sql.length && showThumbnails && featureFlag ? (0,emotion_react_browser_esm.jsx)(QueryContainer, null,
      (0,emotion_react_browser_esm.jsx)(light/* default */.Z, { language: "sql", lineProps: {
          style: {
            color: 'black',
            wordBreak: 'break-all',
            whiteSpace: 'pre-wrap' } },

        style: github/* default */.Z, wrapLines: true, lineNumberStyle: {
          display: 'none' },
        showLineNumbers: false },
      (0,utils/* shortenSQL */.IB)(q.sql, 25))) :

      showThumbnails && !(q != null && (_q$sql2 = q.sql) != null && _q$sql2.length) ? false : (0,emotion_react_browser_esm.jsx)(react.Fragment, null), actions: (0,emotion_react_browser_esm.jsx)(QueryData, null,
      (0,emotion_react_browser_esm.jsx)(ListViewCard/* default.Actions */.Z.Actions, { onClick: (e) => {
          e.stopPropagation();
          e.preventDefault();
        } },
      (0,emotion_react_browser_esm.jsx)(components/* Dropdown */.Lt, { overlay: renderMenu(q) },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.MoreVert */.Z.MoreVert, { iconColor: theme.colors.grayscale.base })))) }));})) :




  (0,emotion_react_browser_esm.jsx)(EmptyState, { tableName: "SAVED_QUERIES", tab: queryFilter }));

};
/* harmony default export */ const welcome_SavedQueries = ((0,withToasts/* default */.Z)(SavedQueries));
// EXTERNAL MODULE: ./src/dashboard/components/PropertiesModal/index.tsx + 1 modules
var components_PropertiesModal = __webpack_require__(20818);
// EXTERNAL MODULE: ./src/views/CRUD/dashboard/DashboardCard.tsx
var DashboardCard = __webpack_require__(99415);
;// CONCATENATED MODULE: ./src/views/CRUD/welcome/DashboardTable.tsx
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

















function DashboardTable({ user, addDangerToast, addSuccessToast, mine, showThumbnails, examples }) {
  const history = (0,react_router/* useHistory */.k6)();
  const filterStore = (0,localStorageHelpers/* getFromLocalStorage */.f)(HOMEPAGE_DASHBOARD_FILTER, null);
  const defaultFilter = filterStore || types/* TableTabTypes.EXAMPLES */.s.EXAMPLES;
  const filteredExamples = filter_default()(examples, (obj) => !('viz_type' in obj));
  const { state: { loading, resourceCollection: dashboards }, setResourceCollection: setDashboards, hasPerm, refreshData, fetchData } = (0,hooks/* useListViewResource */.Yi)('dashboard', (0,TranslatorSingleton.t)('dashboard'), addDangerToast, true, defaultFilter === 'Mine' ? mine : filteredExamples, [], false);
  const dashboardIds = (0,react.useMemo)(() => dashboards.map((c) => c.id), [dashboards]);
  const [saveFavoriteStatus, favoriteStatus] = (0,hooks/* useFavoriteStatus */.NE)('dashboard', dashboardIds, addDangerToast);
  const [editModal, setEditModal] = (0,react.useState)();
  const [dashboardFilter, setDashboardFilter] = (0,react.useState)(defaultFilter);
  const [preparingExport, setPreparingExport] = (0,react.useState)(false);
  const [loaded, setLoaded] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (loaded || dashboardFilter === 'Favorite') {
      getData(dashboardFilter);
    }
    setLoaded(true);
  }, [dashboardFilter]);
  const handleBulkDashboardExport = (dashboardsToExport) => {
    const ids = dashboardsToExport.map(({ id }) => id);
    (0,utils_export/* default */.Z)('dashboard', ids, () => {
      setPreparingExport(false);
    });
    setPreparingExport(true);
  };
  const handleDashboardEdit = (edits) => SupersetClient/* default.get */.Z.get({
    endpoint: `/api/v1/dashboard/${edits.id}` }).
  then(({ json = {} }) => {
    setDashboards(dashboards.map((dashboard) => {
      if (dashboard.id === json.id) {
        return json.result;
      }
      return dashboard;
    }));
  }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching dashboards: %s', errMsg))));
  const getFilters = (filterName) => {
    const filters = [];
    if (filterName === 'Mine') {
      filters.push({
        id: 'created_by',
        operator: 'rel_o_m',
        value: `${user == null ? void 0 : user.userId}` });

    } else
    if (filterName === 'Favorite') {
      filters.push({
        id: 'id',
        operator: 'dashboard_is_favorite',
        value: true });

    } else
    if (filterName === 'Examples') {
      filters.push({
        id: 'created_by',
        operator: 'rel_o_m',
        value: 0 });

    }
    return filters;
  };
  const menuTabs = [
  {
    name: 'Favorite',
    label: (0,TranslatorSingleton.t)('Favorite'),
    onClick: () => {
      setDashboardFilter(types/* TableTabTypes.FAVORITE */.s.FAVORITE);
      (0,localStorageHelpers/* setInLocalStorage */._)(HOMEPAGE_DASHBOARD_FILTER, types/* TableTabTypes.FAVORITE */.s.FAVORITE);
    } },

  {
    name: 'Mine',
    label: (0,TranslatorSingleton.t)('Mine'),
    onClick: () => {
      setDashboardFilter(types/* TableTabTypes.MINE */.s.MINE);
      (0,localStorageHelpers/* setInLocalStorage */._)(HOMEPAGE_DASHBOARD_FILTER, types/* TableTabTypes.MINE */.s.MINE);
    } }];


  if (examples) {
    menuTabs.push({
      name: 'Examples',
      label: (0,TranslatorSingleton.t)('Examples'),
      onClick: () => {
        setDashboardFilter(types/* TableTabTypes.EXAMPLES */.s.EXAMPLES);
        (0,localStorageHelpers/* setInLocalStorage */._)(HOMEPAGE_DASHBOARD_FILTER, types/* TableTabTypes.EXAMPLES */.s.EXAMPLES);
      } });

  }
  const getData = (filter) => fetchData({
    pageIndex: 0,
    pageSize: utils/* PAGE_SIZE */.IV,
    sortBy: [
    {
      id: 'changed_on_delta_humanized',
      desc: true }],


    filters: getFilters(filter) });

  if (loading)
  return (0,emotion_react_browser_esm.jsx)(LoadingCards, { cover: showThumbnails });
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(components_Menu_SubMenu/* default */.Z, { activeChild: dashboardFilter, tabs: menuTabs, buttons: [
    {
      name: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), "Dashboard"),


      buttonStyle: 'tertiary',
      onClick: () => {
        window.location.assign('/dashboard/new');
      } },

    {
      name: 'View All »',
      buttonStyle: 'link',
      onClick: () => {
        const target = dashboardFilter === 'Favorite' ?
        `/dashboard/list/?filters=(favorite:(label:${(0,TranslatorSingleton.t)('Yes')},value:!t))` :
        '/dashboard/list/';
        history.push(target);
      } }] }),


  editModal && (0,emotion_react_browser_esm.jsx)(components_PropertiesModal/* default */.Z, { dashboardId: editModal == null ? void 0 : editModal.id, show: true, onHide: () => setEditModal(undefined), onSubmit: handleDashboardEdit }),
  dashboards.length > 0 && (0,emotion_react_browser_esm.jsx)(utils/* CardContainer */._L, { showThumbnails: showThumbnails },
  dashboards.map((e) => (0,emotion_react_browser_esm.jsx)(DashboardCard/* default */.Z, { key: e.id, dashboard: e, hasPerm: hasPerm, bulkSelectEnabled: false, showThumbnails: showThumbnails, dashboardFilter: dashboardFilter, refreshData: refreshData, addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, userId: user == null ? void 0 : user.userId, loading: loading, openDashboardEditModal: (dashboard) => setEditModal(dashboard), saveFavoriteStatus: saveFavoriteStatus, favoriteStatus: favoriteStatus[e.id], handleBulkDashboardExport: handleBulkDashboardExport }))),

  dashboards.length === 0 && (0,emotion_react_browser_esm.jsx)(EmptyState, { tableName: "DASHBOARDS", tab: dashboardFilter }),
  preparingExport && (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null));

}
/* harmony default export */ const welcome_DashboardTable = ((0,withToasts/* default */.Z)(DashboardTable));
;// CONCATENATED MODULE: ./src/views/CRUD/welcome/Welcome.tsx
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















const DEFAULT_TAB_ARR = ['2', '3'];
const WelcomeContainer = style/* styled.div */.iK.div`
  background-color: ${({ theme }) => theme.colors.grayscale.light4};
  .ant-row.menu {
    margin-top: -15px;
    background-color: ${({ theme }) => theme.colors.grayscale.light4};
    &:after {
      content: '';
      display: block;
      border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
      margin: 0px ${({ theme }) => theme.gridUnit * 6}px;
      position: relative;
      width: 100%;
      ${utils.mq[1]} {
        margin-top: 5px;
        margin: 0px 2px;
      }
    }
    .ant-menu.ant-menu-light.ant-menu-root.ant-menu-horizontal {
      padding-left: ${({ theme }) => theme.gridUnit * 8}px;
    }
    button {
      padding: 3px 21px;
    }
  }
  .ant-card-meta-description {
    margin-top: ${({ theme }) => theme.gridUnit}px;
  }
  .ant-card.ant-card-bordered {
    border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  }
  .ant-collapse-item .ant-collapse-content {
    margin-bottom: ${({ theme }) => theme.gridUnit * -6}px;
  }
  div.ant-collapse-item:last-child.ant-collapse-item-active
    .ant-collapse-header {
    padding-bottom: ${({ theme }) => theme.gridUnit * 3}px;
  }
  div.ant-collapse-item:last-child .ant-collapse-header {
    padding-bottom: ${({ theme }) => theme.gridUnit * 9}px;
  }
  .loading-cards {
    margin-top: ${({ theme }) => theme.gridUnit * 8}px;
    .ant-card-cover > div {
      height: 168px;
    }
  }
`;
const WelcomeNav = style/* styled.div */.iK.div`
  height: 50px;
  background-color: white;
  .navbar-brand {
    margin-left: ${({ theme }) => theme.gridUnit * 2}px;
    font-weight: ${({ theme }) => theme.typography.weights.bold};
  }
  .switch {
    float: right;
    margin: ${({ theme }) => theme.gridUnit * 5}px;
    display: flex;
    flex-direction: row;
    span {
      display: block;
      margin: ${({ theme }) => theme.gridUnit * 1}px;
      line-height: 1;
    }
  }
`;
const LoadingCards = ({ cover }) => (0,emotion_react_browser_esm.jsx)(utils/* CardContainer */._L, { showThumbnails: cover, className: "loading-cards" },
[...new Array(utils/* loadingCardCount */.iv)].map(() => (0,emotion_react_browser_esm.jsx)(ListViewCard/* default */.Z, { cover: cover ? false : (0,emotion_react_browser_esm.jsx)(react.Fragment, null), description: "", loading: true })));

function Welcome({ user, addDangerToast }) {
  const userid = user.userId;
  const id = userid.toString();
  const recent = `/superset/recent_activity/${user.userId}/?limit=6`;
  const [activeChild, setActiveChild] = (0,react.useState)('Loading');
  const userKey = (0,localStorageHelpers/* getFromLocalStorage */.f)(id, null);
  let defaultChecked = false;
  if ((0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.THUMBNAILS */.T.THUMBNAILS)) {
    defaultChecked =
    (userKey == null ? void 0 : userKey.thumbnails) === undefined ? true : userKey == null ? void 0 : userKey.thumbnails;
  }
  const [checked, setChecked] = (0,react.useState)(defaultChecked);
  const [activityData, setActivityData] = (0,react.useState)(null);
  const [chartData, setChartData] = (0,react.useState)(null);
  const [queryData, setQueryData] = (0,react.useState)(null);
  const [dashboardData, setDashboardData] = (0,react.useState)(null);
  const [loadedCount, setLoadedCount] = (0,react.useState)(0);
  const collapseState = (0,localStorageHelpers/* getFromLocalStorage */.f)(HOMEPAGE_COLLAPSE_STATE, null);
  const [activeState, setActiveState] = (0,react.useState)(collapseState);
  const handleCollapse = (state) => {
    setActiveState(state);
    (0,localStorageHelpers/* setInLocalStorage */._)(HOMEPAGE_COLLAPSE_STATE, state);
  };
  (0,react.useEffect)(() => {
    const activeTab = (0,localStorageHelpers/* getFromLocalStorage */.f)(HOMEPAGE_ACTIVITY_FILTER, null);
    setActiveState(collapseState || DEFAULT_TAB_ARR);
    (0,utils/* getRecentAcitivtyObjs */.Hn)(user.userId, recent, addDangerToast).
    then((res) => {
      const data = {};
      data.Examples = res.examples;
      if (res.viewed) {
        const filtered = reject_default()(res.viewed, ['item_url', null]).map((r) => r);
        data.Viewed = filtered;
        if (!activeTab && data.Viewed) {
          setActiveChild('Viewed');
        } else
        if (!activeTab && !data.Viewed) {
          setActiveChild('Created');
        } else

        setActiveChild(activeTab);
      } else
      if (!activeTab)
      setActiveChild('Created');else

      setActiveChild(activeTab);
      setActivityData((activityData) => ({ ...activityData, ...data }));
    }).
    catch((0,utils/* createErrorHandler */.v$)((errMsg) => {
      setActivityData((activityData) => ({ ...activityData, Viewed: [] }));
      addDangerToast((0,TranslatorSingleton.t)('There was an issue fetching your recent activity: %s', errMsg));
    }));
    // Sets other activity data in parallel with recents api call
    (0,utils/* getUserOwnedObjects */.B1)(id, 'dashboard').
    then((r) => {
      setDashboardData(r);
      setLoadedCount((loadedCount) => loadedCount + 1);
    }).
    catch((err) => {
      setDashboardData([]);
      setLoadedCount((loadedCount) => loadedCount + 1);
      addDangerToast((0,TranslatorSingleton.t)('There was an issues fetching your dashboards: %s', err));
    });
    (0,utils/* getUserOwnedObjects */.B1)(id, 'chart').
    then((r) => {
      setChartData(r);
      setLoadedCount((loadedCount) => loadedCount + 1);
    }).
    catch((err) => {
      setChartData([]);
      setLoadedCount((loadedCount) => loadedCount + 1);
      addDangerToast((0,TranslatorSingleton.t)('There was an issues fetching your chart: %s', err));
    });
    (0,utils/* getUserOwnedObjects */.B1)(id, 'saved_query').
    then((r) => {
      setQueryData(r);
      setLoadedCount((loadedCount) => loadedCount + 1);
    }).
    catch((err) => {
      setQueryData([]);
      setLoadedCount((loadedCount) => loadedCount + 1);
      addDangerToast((0,TranslatorSingleton.t)('There was an issues fetching your saved queries: %s', err));
    });
  }, []);
  const handleToggle = () => {
    setChecked(!checked);
    (0,localStorageHelpers/* setInLocalStorage */._)(id, { thumbnails: !checked });
  };
  (0,react.useEffect)(() => {
    if (!collapseState && queryData != null && queryData.length) {
      setActiveState((activeState) => [...activeState, '4']);
    }
    setActivityData((activityData) => ({
      ...activityData,
      Created: [
      ...((chartData == null ? void 0 : chartData.slice(0, 3)) || []),
      ...((dashboardData == null ? void 0 : dashboardData.slice(0, 3)) || []),
      ...((queryData == null ? void 0 : queryData.slice(0, 3)) || [])] }));


  }, [chartData, queryData, dashboardData]);
  (0,react.useEffect)(() => {var _activityData$Viewed;
    if (!collapseState && activityData != null && (_activityData$Viewed = activityData.Viewed) != null && _activityData$Viewed.length) {
      setActiveState((activeState) => ['1', ...activeState]);
    }
  }, [activityData]);
  const isRecentActivityLoading = !(activityData != null && activityData.Examples) && !(activityData != null && activityData.Viewed);
  return (0,emotion_react_browser_esm.jsx)(WelcomeContainer, null,
  (0,emotion_react_browser_esm.jsx)(WelcomeNav, null,
  (0,emotion_react_browser_esm.jsx)("span", { className: "navbar-brand" }, "Home"),
  (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.THUMBNAILS */.T.THUMBNAILS) ? (0,emotion_react_browser_esm.jsx)("div", { className: "switch" },
  (0,emotion_react_browser_esm.jsx)(components/* Switch */.rs, { checked: checked, onChange: handleToggle }),
  (0,emotion_react_browser_esm.jsx)("span", null, "Thumbnails")) :
  null),

  (0,emotion_react_browser_esm.jsx)(Collapse/* default */.Z, { activeKey: activeState, onChange: handleCollapse, ghost: true, bigger: true },
  (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { header: (0,TranslatorSingleton.t)('Recents'), key: "1" },
  activityData && (
  activityData.Viewed ||
  activityData.Examples ||
  activityData.Created) &&
  activeChild !== 'Loading' ? (0,emotion_react_browser_esm.jsx)(ActivityTable, { user: user, activeChild: activeChild, setActiveChild: setActiveChild, activityData: activityData, loadedCount: loadedCount }) : (0,emotion_react_browser_esm.jsx)(LoadingCards, null)),

  (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { header: (0,TranslatorSingleton.t)('Dashboards'), key: "2" },
  !dashboardData || isRecentActivityLoading ? (0,emotion_react_browser_esm.jsx)(LoadingCards, { cover: checked }) : (0,emotion_react_browser_esm.jsx)(welcome_DashboardTable, { user: user, mine: dashboardData, showThumbnails: checked, examples: activityData == null ? void 0 : activityData.Examples })),

  (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { header: (0,TranslatorSingleton.t)('Charts'), key: "3" },
  !chartData || isRecentActivityLoading ? (0,emotion_react_browser_esm.jsx)(LoadingCards, { cover: checked }) : (0,emotion_react_browser_esm.jsx)(welcome_ChartTable, { showThumbnails: checked, user: user, mine: chartData, examples: activityData == null ? void 0 : activityData.Examples })),

  (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { header: (0,TranslatorSingleton.t)('Saved queries'), key: "4" },
  !queryData ? (0,emotion_react_browser_esm.jsx)(LoadingCards, { cover: checked }) : (0,emotion_react_browser_esm.jsx)(welcome_SavedQueries, { showThumbnails: checked, user: user, mine: queryData, featureFlag: (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.THUMBNAILS */.T.THUMBNAILS) }))));



}
/* harmony default export */ const welcome_Welcome = ((0,withToasts/* default */.Z)(Welcome));
;// CONCATENATED MODULE: ./src/views/routes.tsx
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


// not lazy loaded since this is the home page.

const AnnotationLayersList = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() | AnnotationLayersList */[__webpack_require__.e(9678), __webpack_require__.e(4787)]).then(__webpack_require__.bind(__webpack_require__, 28999)));
const AlertList = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() | AlertList */[__webpack_require__.e(1216), __webpack_require__.e(876), __webpack_require__.e(9678), __webpack_require__.e(9502)]).then(__webpack_require__.bind(__webpack_require__, 63082)));
const AnnotationList = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() | AnnotationList */[__webpack_require__.e(9678), __webpack_require__.e(1611)]).then(__webpack_require__.bind(__webpack_require__, 35276)));
const ChartList = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() | ChartList */[__webpack_require__.e(1216), __webpack_require__.e(504), __webpack_require__.e(7211), __webpack_require__.e(7017), __webpack_require__.e(8483), __webpack_require__.e(8135), __webpack_require__.e(9678), __webpack_require__.e(621), __webpack_require__.e(665)]).then(__webpack_require__.bind(__webpack_require__, 13434)));
const CssTemplatesList = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() | CssTemplatesList */[__webpack_require__.e(9678), __webpack_require__.e(9452)]).then(__webpack_require__.bind(__webpack_require__, 69053)));
const DashboardList = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() | DashboardList */[__webpack_require__.e(193), __webpack_require__.e(9678), __webpack_require__.e(8774)]).then(__webpack_require__.bind(__webpack_require__, 23767)));
const DashboardPage = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() | DashboardPage */[__webpack_require__.e(1216), __webpack_require__.e(504), __webpack_require__.e(7211), __webpack_require__.e(7017), __webpack_require__.e(8483), __webpack_require__.e(8135), __webpack_require__.e(621), __webpack_require__.e(5296)]).then(__webpack_require__.bind(__webpack_require__, 25619)));
const DatabaseList = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() | DatabaseList */[__webpack_require__.e(9678), __webpack_require__.e(4502)]).then(__webpack_require__.bind(__webpack_require__, 64022)));
const DatasetList = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() | DatasetList */[__webpack_require__.e(9678), __webpack_require__.e(5656)]).then(__webpack_require__.bind(__webpack_require__, 97894)));
const ExecutionLog = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() | ExecutionLog */[__webpack_require__.e(9678), __webpack_require__.e(9137)]).then(__webpack_require__.bind(__webpack_require__, 25163)));
const QueryList = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() | QueryList */[__webpack_require__.e(9678), __webpack_require__.e(4173), __webpack_require__.e(7633)]).then(__webpack_require__.bind(__webpack_require__, 82842)));
const SavedQueryList = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() | SavedQueryList */[__webpack_require__.e(9678), __webpack_require__.e(4173), __webpack_require__.e(9173)]).then(__webpack_require__.bind(__webpack_require__, 49588)));
const routes = [
{
  path: '/superset/welcome/',
  Component: welcome_Welcome },

{
  path: '/dashboard/list/',
  Component: DashboardList },

{
  path: '/superset/dashboard/:idOrSlug/',
  Component: DashboardPage },

{
  path: '/chart/list/',
  Component: ChartList },

{
  path: '/tablemodelview/list/',
  Component: DatasetList },

{
  path: '/databaseview/list/',
  Component: DatabaseList },

{
  path: '/savedqueryview/list/',
  Component: SavedQueryList },

{
  path: '/csstemplatemodelview/list/',
  Component: CssTemplatesList },

{
  path: '/annotationlayermodelview/list/',
  Component: AnnotationLayersList },

{
  path: '/annotationmodelview/:annotationLayerId/annotation/',
  Component: AnnotationList },

{
  path: '/superset/sqllab/history/',
  Component: QueryList },

{
  path: '/alert/list/',
  Component: AlertList },

{
  path: '/report/list/',
  Component: AlertList,
  props: {
    isReportEnabled: true } },


{
  path: '/alert/:alertId/log/',
  Component: ExecutionLog },

{
  path: '/report/:alertId/log/',
  Component: ExecutionLog,
  props: {
    isReportEnabled: true } }];



const frontEndRoutes = routes.
map((r) => r.path).
reduce((acc, curr) => ({
  ...acc,
  [curr]: true }),
{});
function isFrontendRoute(path) {
  if (!(0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.ENABLE_REACT_CRUD_VIEWS */.T.ENABLE_REACT_CRUD_VIEWS))
  return false;
  if (path) {
    const basePath = path.split(/[?#]/)[0]; // strip out query params and link bookmarks
    return !!frontEndRoutes[basePath];
  }
  return false;
}
// EXTERNAL MODULE: ./src/logger/LogUtils.ts
var LogUtils = __webpack_require__(3741);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__(53894);
// EXTERNAL MODULE: ./src/components/MessageToasts/reducers.js
var reducers = __webpack_require__(61806);
// EXTERNAL MODULE: ./src/reduxUtils.ts
var reduxUtils = __webpack_require__(99543);
// EXTERNAL MODULE: ./src/chart/chartReducer.ts
var chartReducer = __webpack_require__(64714);
// EXTERNAL MODULE: ./src/dataMask/reducer.ts
var reducer = __webpack_require__(8868);
// EXTERNAL MODULE: ./src/reports/reducers/reports.js
var reports = __webpack_require__(16471);
// EXTERNAL MODULE: ./src/dashboard/actions/dashboardInfo.ts
var dashboardInfo = __webpack_require__(41295);
// EXTERNAL MODULE: ./src/dashboard/actions/hydrate.js + 3 modules
var hydrate = __webpack_require__(47173);
;// CONCATENATED MODULE: ./src/dashboard/reducers/dashboardInfo.js
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




function dashboardStateReducer(state = {}, action) {
  switch (action.type) {
    case dashboardInfo/* DASHBOARD_INFO_UPDATED */.$A:
      return {
        ...state,
        ...action.newInfo,
        // server-side compare last_modified_time in second level
        last_modified_time: Math.round(new Date().getTime() / 1000) };

    case hydrate/* HYDRATE_DASHBOARD */.$:
      return {
        ...state,
        ...action.data.dashboardInfo
        // set async api call data
      };
    default:
      return state;}

}
// EXTERNAL MODULE: ./src/dashboard/actions/dashboardState.js + 1 modules
var dashboardState = __webpack_require__(31758);
;// CONCATENATED MODULE: ./src/dashboard/reducers/dashboardState.js
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
/* eslint-disable camelcase */



function dashboardState_dashboardStateReducer(state = {}, action) {
  const actionHandlers = {
    [hydrate/* HYDRATE_DASHBOARD */.$]() {
      return { ...state, ...action.data.dashboardState };
    },
    [dashboardState/* UPDATE_CSS */.Be]() {
      return { ...state, css: action.css };
    },
    [dashboardState/* ADD_SLICE */.BD]() {
      const updatedSliceIds = new Set(state.sliceIds);
      updatedSliceIds.add(action.slice.slice_id);
      return {
        ...state,
        sliceIds: Array.from(updatedSliceIds) };

    },
    [dashboardState/* REMOVE_SLICE */.Vd]() {
      const { sliceId } = action;
      const updatedSliceIds = new Set(state.sliceIds);
      updatedSliceIds.delete(sliceId);

      return {
        ...state,
        sliceIds: Array.from(updatedSliceIds) };

    },
    [dashboardState/* TOGGLE_FAVE_STAR */.Z9]() {
      return { ...state, isStarred: action.isStarred };
    },
    [dashboardState/* TOGGLE_PUBLISHED */.H9]() {
      return { ...state, isPublished: action.isPublished };
    },
    [dashboardState/* SET_EDIT_MODE */.$f]() {
      return {
        ...state,
        editMode: action.editMode };

    },
    [dashboardState/* SET_MAX_UNDO_HISTORY_EXCEEDED */.n1]() {
      const { maxUndoHistoryExceeded = true } = action.payload;
      return { ...state, maxUndoHistoryExceeded };
    },
    [dashboardState/* SHOW_BUILDER_PANE */.oJ]() {
      return { ...state };
    },
    [dashboardState/* SET_COLOR_SCHEME */.J$]() {
      return {
        ...state,
        colorScheme: action.colorScheme,
        updatedColorScheme: true };

    },
    [dashboardState/* TOGGLE_EXPAND_SLICE */.ek]() {
      const updatedExpandedSlices = { ...state.expandedSlices };
      const { sliceId } = action;
      if (updatedExpandedSlices[sliceId]) {
        delete updatedExpandedSlices[sliceId];
      } else {
        updatedExpandedSlices[sliceId] = true;
      }
      return { ...state, expandedSlices: updatedExpandedSlices };
    },
    [dashboardState/* ON_CHANGE */.P0]() {
      return { ...state, hasUnsavedChanges: true };
    },
    [dashboardState/* ON_SAVE */.Ii]() {
      return {
        ...state,
        hasUnsavedChanges: false,
        maxUndoHistoryExceeded: false,
        editMode: false,
        updatedColorScheme: false,
        // server-side returns last_modified_time for latest change
        lastModifiedTime: action.lastModifiedTime };

    },
    [dashboardState/* SET_UNSAVED_CHANGES */.ee]() {
      const { hasUnsavedChanges } = action.payload;
      return { ...state, hasUnsavedChanges };
    },
    [dashboardState/* SET_REFRESH_FREQUENCY */.yV]() {
      return {
        ...state,
        refreshFrequency: action.refreshFrequency,
        shouldPersistRefreshFrequency: action.isPersistent,
        hasUnsavedChanges: action.isPersistent };

    },
    [dashboardState/* ON_REFRESH */.ec]() {
      return {
        ...state,
        isRefreshing: true };

    },
    [dashboardState/* ON_REFRESH_SUCCESS */.k5]() {
      return {
        ...state,
        isRefreshing: false };

    },
    [dashboardState/* SET_DIRECT_PATH */.RU]() {
      return {
        ...state,
        directPathToChild: action.path,
        directPathLastUpdated: Date.now() };

    },
    [dashboardState/* SET_ACTIVE_TABS */.nV]() {
      const newActiveTabs = new Set(state.activeTabs);
      newActiveTabs.delete(action.prevTabId);
      newActiveTabs.add(action.tabId);
      return {
        ...state,
        activeTabs: Array.from(newActiveTabs) };

    },
    [dashboardState/* SET_FOCUSED_FILTER_FIELD */.mq]() {
      return {
        ...state,
        focusedFilterField: {
          chartId: action.chartId,
          column: action.column } };


    },
    [dashboardState/* UNSET_FOCUSED_FILTER_FIELD */.Iw]() {
      // dashboard only has 1 focused filter field at a time,
      // but when user switch different filter boxes,
      // browser didn't always fire onBlur and onFocus events in order.
      if (
      !state.focusedFilterField ||
      action.chartId !== state.focusedFilterField.chartId ||
      action.column !== state.focusedFilterField.column)
      {
        return state;
      }
      return {
        ...state,
        focusedFilterField: null };

    },
    [dashboardState/* SET_FULL_SIZE_CHART_ID */.r$]() {
      return {
        ...state,
        fullSizeChartId: action.chartId };

    } };


  if (action.type in actionHandlers) {
    return actionHandlers[action.type]();
  }
  return state;
}
// EXTERNAL MODULE: ./src/dashboard/reducers/dashboardFilters.js
var dashboardFilters = __webpack_require__(39023);
// EXTERNAL MODULE: ./src/dashboard/reducers/nativeFilters.ts
var nativeFilters = __webpack_require__(39759);
// EXTERNAL MODULE: ./node_modules/lodash/keyBy.js
var keyBy = __webpack_require__(24350);
var keyBy_default = /*#__PURE__*/__webpack_require__.n(keyBy);
// EXTERNAL MODULE: ./src/dashboard/actions/datasources.ts
var actions_datasources = __webpack_require__(50810);
;// CONCATENATED MODULE: ./src/dashboard/reducers/datasources.ts




















function datasourcesReducer(datasources, action) {
  if (action.type === actions_datasources/* DatasourcesAction.SET_DATASOURCES */.Rn.SET_DATASOURCES) {
    return {
      ...datasources,
      ...keyBy_default()(action.datasources, 'uid') };

  }
  if (action.type === actions_datasources/* DatasourcesAction.SET_DATASOURCE */.Rn.SET_DATASOURCE) {
    return {
      ...datasources,
      [action.key]: action.datasource };

  }
  return datasources || {};
}
// EXTERNAL MODULE: ./src/dashboard/reducers/sliceEntities.js
var sliceEntities = __webpack_require__(37927);
// EXTERNAL MODULE: ./node_modules/redux-undo/lib/index.js
var lib = __webpack_require__(21090);
// EXTERNAL MODULE: ./src/dashboard/util/constants.ts
var util_constants = __webpack_require__(80621);
// EXTERNAL MODULE: ./src/dashboard/actions/dashboardLayout.js + 2 modules
var dashboardLayout = __webpack_require__(40701);
// EXTERNAL MODULE: ./src/dashboard/util/componentTypes.ts
var componentTypes = __webpack_require__(81255);
;// CONCATENATED MODULE: ./src/dashboard/util/componentIsResizable.ts
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

function componentIsResizable(entity) {
  return [componentTypes/* COLUMN_TYPE */.BA, componentTypes/* CHART_TYPE */.dW, componentTypes/* MARKDOWN_TYPE */.xh].indexOf(entity.type) > -1;
}
// EXTERNAL MODULE: ./src/dashboard/util/findParentId.js
var findParentId = __webpack_require__(44803);
// EXTERNAL MODULE: ./src/dashboard/util/getComponentWidthFromDrop.js
var getComponentWidthFromDrop = __webpack_require__(47456);
;// CONCATENATED MODULE: ./src/dashboard/util/updateComponentParentsList.js
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
function updateComponentParentsList({
  currentComponent,
  layout = {} })
{
  if (currentComponent && layout[currentComponent.id]) {
    const parentsList = (currentComponent.parents || []).slice();
    parentsList.push(currentComponent.id);

    currentComponent.children.forEach((childId) => {
      layout[childId].parents = parentsList; // eslint-disable-line no-param-reassign
      updateComponentParentsList({
        currentComponent: layout[childId],
        layout });

    });
  }
}
// EXTERNAL MODULE: ./src/dashboard/util/newComponentFactory.js
var newComponentFactory = __webpack_require__(28428);
;// CONCATENATED MODULE: ./src/dashboard/util/shouldWrapChildInRow.js
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


const typeToWrapChildLookup = {
  [componentTypes/* DASHBOARD_GRID_TYPE */.BG]: {
    [componentTypes/* CHART_TYPE */.dW]: true,
    [componentTypes/* COLUMN_TYPE */.BA]: true,
    [componentTypes/* MARKDOWN_TYPE */.xh]: true },


  [componentTypes/* TAB_TYPE */.gn]: {
    [componentTypes/* CHART_TYPE */.dW]: true,
    [componentTypes/* COLUMN_TYPE */.BA]: true,
    [componentTypes/* MARKDOWN_TYPE */.xh]: true } };



function shouldWrapChildInRow({ parentType, childType }) {
  if (!parentType || !childType) return false;

  const wrapChildLookup = typeToWrapChildLookup[parentType];
  if (!wrapChildLookup) return false;

  return Boolean(wrapChildLookup[childType]);
}
;// CONCATENATED MODULE: ./src/dashboard/util/newEntitiesFromDrop.js
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







function newEntitiesFromDrop({ dropResult, layout }) {
  const { dragging, destination } = dropResult;

  const dragType = dragging.type;
  const dropEntity = layout[destination.id];
  const dropType = dropEntity.type;
  let newDropChild = (0,newComponentFactory/* default */.Z)(dragType, dragging.meta);
  newDropChild.parents = (dropEntity.parents || []).concat(dropEntity.id);

  if (componentIsResizable(dragging)) {
    newDropChild.meta.width = // don't set a 0 width
    (0,getComponentWidthFromDrop/* default */.Z)({ dropResult, layout }) || undefined;
  }

  const wrapChildInRow = shouldWrapChildInRow({
    parentType: dropType,
    childType: dragType });


  const newEntities = {
    [newDropChild.id]: newDropChild };


  if (wrapChildInRow) {
    const rowWrapper = (0,newComponentFactory/* default */.Z)(componentTypes/* ROW_TYPE */.Os);
    rowWrapper.children = [newDropChild.id];
    rowWrapper.parents = (dropEntity.parents || []).concat(dropEntity.id);
    newEntities[rowWrapper.id] = rowWrapper;
    newDropChild.parents = rowWrapper.parents.concat(rowWrapper.id);
    newDropChild = rowWrapper;
  } else if (dragType === componentTypes/* TABS_TYPE */.yR) {
    // create a new tab component
    const tabChild = (0,newComponentFactory/* default */.Z)(componentTypes/* TAB_TYPE */.gn);
    tabChild.parents = (dropEntity.parents || []).concat(dropEntity.id);
    newDropChild.children = [tabChild.id];
    newEntities[tabChild.id] = tabChild;
  }

  const nextDropChildren = [...dropEntity.children];
  nextDropChildren.splice(destination.index, 0, newDropChild.id);

  newEntities[destination.id] = {
    ...dropEntity,
    children: nextDropChildren };


  return newEntities;
}
;// CONCATENATED MODULE: ./src/dashboard/util/dnd-reorder.js
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
function reorder(list, startIndex, endIndex) {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

function reorderItem({ entitiesMap, source, destination }) {
  const current = [...entitiesMap[source.id].children];
  const next = [...entitiesMap[destination.id].children];
  const target = current[source.index];

  // moving to same list
  if (source.id === destination.id) {
    const reordered = reorder(current, source.index, destination.index);

    const result = {
      ...entitiesMap,
      [source.id]: {
        ...entitiesMap[source.id],
        children: reordered } };



    return result;
  }

  // moving to different list
  current.splice(source.index, 1); // remove from original
  next.splice(destination.index, 0, target); // insert into next

  const result = {
    ...entitiesMap,
    [source.id]: {
      ...entitiesMap[source.id],
      children: current },

    [destination.id]: {
      ...entitiesMap[destination.id],
      children: next } };



  return result;
}
;// CONCATENATED MODULE: ./src/dashboard/reducers/dashboardLayout.js
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















const actionHandlers = {
  [hydrate/* HYDRATE_DASHBOARD */.$](state, action) {
    return {
      ...action.data.dashboardLayout.present };

  },

  [dashboardLayout/* UPDATE_COMPONENTS */.nj](state, action) {
    const {
      payload: { nextComponents } } =
    action;
    return {
      ...state,
      ...nextComponents };

  },

  [dashboardLayout/* DELETE_COMPONENT */.CB](state, action) {
    const {
      payload: { id, parentId } } =
    action;

    if (!parentId || !id || !state[id] || !state[parentId]) return state;

    const nextComponents = { ...state };

    function recursivelyDeleteChildren(componentId, componentParentId) {
      // delete child and it's children
      const component = nextComponents[componentId];
      delete nextComponents[componentId];

      const { children = [] } = component;
      children.forEach((childId) => {
        recursivelyDeleteChildren(childId, componentId);
      });

      const parent = nextComponents[componentParentId];
      if (parent) {
        // may have been deleted in another recursion
        const componentIndex = (parent.children || []).indexOf(componentId);
        if (componentIndex > -1) {
          const nextChildren = [...parent.children];
          nextChildren.splice(componentIndex, 1);
          nextComponents[componentParentId] = {
            ...parent,
            children: nextChildren };

        }
      }
    }

    recursivelyDeleteChildren(id, parentId);
    const nextParent = nextComponents[parentId];
    if (nextParent.type === componentTypes/* ROW_TYPE */.Os && nextParent.children.length === 0) {
      const grandparentId = (0,findParentId/* default */.Z)({
        childId: parentId,
        layout: nextComponents });

      recursivelyDeleteChildren(parentId, grandparentId);
    }

    return nextComponents;
  },

  [dashboardLayout/* CREATE_COMPONENT */.J0](state, action) {
    const {
      payload: { dropResult } } =
    action;

    const newEntities = newEntitiesFromDrop({ dropResult, layout: state });

    return {
      ...state,
      ...newEntities };

  },

  [dashboardLayout/* MOVE_COMPONENT */.aZ](state, action) {
    const {
      payload: { dropResult } } =
    action;
    const { source, destination, dragging } = dropResult;

    if (!source || !destination || !dragging) return state;

    const nextEntities = reorderItem({
      entitiesMap: state,
      source,
      destination });


    if (componentIsResizable(nextEntities[dragging.id])) {
      // update component width if it changed
      const nextWidth =
      (0,getComponentWidthFromDrop/* default */.Z)({
        dropResult,
        layout: state }) ||
      undefined; // don't set a 0 width
      if ((nextEntities[dragging.id].meta || {}).width !== nextWidth) {
        nextEntities[dragging.id] = {
          ...nextEntities[dragging.id],
          meta: {
            ...nextEntities[dragging.id].meta,
            width: nextWidth } };


      }
    }

    // wrap the dragged component in a row depending on destination type
    const wrapInRow = shouldWrapChildInRow({
      parentType: destination.type,
      childType: dragging.type });


    if (wrapInRow) {
      const destinationEntity = nextEntities[destination.id];
      const destinationChildren = destinationEntity.children;
      const newRow = (0,newComponentFactory/* default */.Z)(componentTypes/* ROW_TYPE */.Os);
      newRow.children = [destinationChildren[destination.index]];
      newRow.parents = (destinationEntity.parents || []).concat(destination.id);
      destinationChildren[destination.index] = newRow.id;
      nextEntities[newRow.id] = newRow;
    }

    return {
      ...state,
      ...nextEntities };

  },

  [dashboardLayout/* CREATE_TOP_LEVEL_TABS */.YA](state, action) {
    const {
      payload: { dropResult } } =
    action;
    const { source, dragging } = dropResult;

    // move children of current root to be children of the dragging tab
    const rootComponent = state[util_constants/* DASHBOARD_ROOT_ID */._4];
    const topLevelId = rootComponent.children[0];
    const topLevelComponent = state[topLevelId];

    if (source.id !== util_constants/* NEW_COMPONENTS_SOURCE_ID */.D0) {
      // component already exists
      const draggingTabs = state[dragging.id];
      const draggingTabId = draggingTabs.children[0];
      const draggingTab = state[draggingTabId];

      // move all children except the one that is dragging
      const childrenToMove = [...topLevelComponent.children].filter(
      (id) => id !== dragging.id);


      return {
        ...state,
        [util_constants/* DASHBOARD_ROOT_ID */._4]: {
          ...rootComponent,
          children: [dragging.id] },

        [topLevelId]: {
          ...topLevelComponent,
          children: [] },

        [draggingTabId]: {
          ...draggingTab,
          children: [...draggingTab.children, ...childrenToMove] } };


    }

    // create new component
    const newEntities = newEntitiesFromDrop({ dropResult, layout: state });
    const newEntitiesArray = Object.values(newEntities);
    const tabComponent = newEntitiesArray.find(
    (component) => component.type === componentTypes/* TAB_TYPE */.gn);

    const tabsComponent = newEntitiesArray.find(
    (component) => component.type === componentTypes/* TABS_TYPE */.yR);


    tabComponent.children = [...topLevelComponent.children];
    newEntities[topLevelId] = { ...topLevelComponent, children: [] };
    newEntities[util_constants/* DASHBOARD_ROOT_ID */._4] = {
      ...rootComponent,
      children: [tabsComponent.id] };


    return {
      ...state,
      ...newEntities };

  },

  [dashboardLayout/* DELETE_TOP_LEVEL_TABS */.Mu](state) {
    const rootComponent = state[util_constants/* DASHBOARD_ROOT_ID */._4];
    const topLevelId = rootComponent.children[0];
    const topLevelTabs = state[topLevelId];

    if (topLevelTabs.type !== componentTypes/* TABS_TYPE */.yR) return state;

    let childrenToMove = [];
    const nextEntities = { ...state };

    topLevelTabs.children.forEach((tabId) => {
      const tabComponent = state[tabId];
      childrenToMove = [...childrenToMove, ...tabComponent.children];
      delete nextEntities[tabId];
    });

    delete nextEntities[topLevelId];

    nextEntities[util_constants/* DASHBOARD_ROOT_ID */._4] = {
      ...rootComponent,
      children: [util_constants/* DASHBOARD_GRID_ID */.PV] };


    nextEntities[util_constants/* DASHBOARD_GRID_ID */.PV] = {
      ...state[util_constants/* DASHBOARD_GRID_ID */.PV],
      children: childrenToMove };


    return nextEntities;
  },

  [dashboardLayout/* UPDATE_COMPONENTS_PARENTS_LIST */.x_](state) {
    const nextState = {
      ...state };


    updateComponentParentsList({
      currentComponent: nextState[util_constants/* DASHBOARD_ROOT_ID */._4],
      layout: nextState });


    return {
      ...nextState };

  },

  [dashboardLayout/* DASHBOARD_TITLE_CHANGED */.bK](state, action) {
    return {
      ...state,
      [util_constants/* DASHBOARD_HEADER_ID */.M2]: {
        ...state[util_constants/* DASHBOARD_HEADER_ID */.M2],
        meta: {
          ...state[util_constants/* DASHBOARD_HEADER_ID */.M2].meta,
          text: action.text } } };



  } };


function layoutReducer(state = {}, action) {
  if (action.type in actionHandlers) {
    const handler = actionHandlers[action.type];
    return handler(state, action);
  }

  return state;
}
;// CONCATENATED MODULE: ./src/dashboard/reducers/undoableDashboardLayout.js
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








/* harmony default export */ const undoableDashboardLayout = ((0,lib/* default */.ZP)(layoutReducer, {
  // +1 because length of history seems max out at limit - 1
  // +1 again so we can detect if we've exceeded the limit
  limit: util_constants/* UNDO_LIMIT */.Q9 + 2,
  ignoreInitialState: true,
  filter: (0,lib/* includeAction */.an)([
  hydrate/* HYDRATE_DASHBOARD */.$,
  dashboardLayout/* UPDATE_COMPONENTS */.nj,
  dashboardLayout/* DELETE_COMPONENT */.CB,
  dashboardLayout/* CREATE_COMPONENT */.J0,
  dashboardLayout/* CREATE_TOP_LEVEL_TABS */.YA,
  dashboardLayout/* DELETE_TOP_LEVEL_TABS */.Mu,
  dashboardLayout/* RESIZE_COMPONENT */.qL,
  dashboardLayout/* MOVE_COMPONENT */.aZ,
  dashboardLayout/* HANDLE_COMPONENT_DROP */.L1]) }));
// EXTERNAL MODULE: ./src/middleware/loggerMiddleware.js + 1 modules
var loggerMiddleware = __webpack_require__(69600);
// EXTERNAL MODULE: ./node_modules/shortid/index.js
var shortid = __webpack_require__(14670);
var shortid_default = /*#__PURE__*/__webpack_require__.n(shortid);
;// CONCATENATED MODULE: ./src/views/store.ts
var _container$getAttribu; /**
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
















// Some reducers don't do anything, and redux is just used to reference the initial "state".
// This may change later, as the client application takes on more responsibilities.
const noopReducer = (initialState) => (state = initialState) => state;
const container = document.getElementById('app');
const bootstrap = JSON.parse((_container$getAttribu = container == null ? void 0 : container.getAttribute('data-bootstrap')) != null ? _container$getAttribu : '{}');
// reducers used only in the dashboard page
const dashboardReducers = {
  charts: chartReducer/* default */.Z,
  datasources: datasourcesReducer,
  dashboardInfo: dashboardStateReducer,
  dashboardFilters: dashboardFilters/* default */.ZP,
  dataMask: reducer/* default */.Z,
  nativeFilters: nativeFilters/* default */.Z,
  dashboardState: dashboardState_dashboardStateReducer,
  dashboardLayout: undoableDashboardLayout,
  sliceEntities: sliceEntities/* default */.Z,
  reports: reports/* default */.Z };

// exported for tests
const rootReducer = (0,redux/* combineReducers */.UY)({
  messageToasts: reducers/* default */.Z,
  common: noopReducer(bootstrap.common || {}),
  user: noopReducer(bootstrap.user || {}),
  impressionId: noopReducer(shortid_default().generate()),
  ...dashboardReducers });

const store = (0,redux/* createStore */.MT)(rootReducer, {}, (0,redux/* compose */.qC)((0,redux/* applyMiddleware */.md)(redux_thunk_es/* default */.Z, loggerMiddleware/* default */.Z), (0,reduxUtils/* initEnhancer */.hU)(false)));
;// CONCATENATED MODULE: ./src/views/App.tsx
var App_container$getAttribu; /**
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




















(0,setupApp/* default */.Z)();
const App_container = document.getElementById('app');
const App_bootstrap = JSON.parse((App_container$getAttribu = App_container == null ? void 0 : App_container.getAttribute('data-bootstrap')) != null ? App_container$getAttribu : '{}');
const user = { ...App_bootstrap.user };
const menu = { ...App_bootstrap.common.menu_data };
const common = { ...App_bootstrap.common };
let lastLocationPathname;
(0,featureFlags/* initFeatureFlags */.fG)(App_bootstrap.common.feature_flags);
const RootContextProviders = ({ children }) => {
  const location = (0,react_router/* useLocation */.TH)();
  (0,react.useEffect)(() => {
    // reset performance logger timer start point to avoid soft navigation
    // cause dashboard perf measurement problem
    if (lastLocationPathname && lastLocationPathname !== location.pathname) {
      LogUtils/* Logger.markTimeOrigin */.Yd.markTimeOrigin();
    }
    lastLocationPathname = location.pathname;
  }, [location.pathname]);
  return (0,emotion_react_browser_esm.jsx)(emotion_element_99289b21_browser_esm.a, { theme: preamble/* theme */.r },
  (0,emotion_react_browser_esm.jsx)(es/* Provider */.zt, { store: store },
  (0,emotion_react_browser_esm.jsx)(DndProvider/* DndProvider */.W, { backend: esm/* HTML5Backend */.PD },
  (0,emotion_react_browser_esm.jsx)(FlashProvider, { messages: common.flash_messages },
  (0,emotion_react_browser_esm.jsx)(DynamicPlugins/* DynamicPluginProvider */.EM, null,
  (0,emotion_react_browser_esm.jsx)(use_query_params_esm/* QueryParamProvider */.Fz, { ReactRouterRoute: react_router/* Route */.AW, stringifyOptions: { encode: false } },
  children))))));






};
const App = () => (0,emotion_react_browser_esm.jsx)(react_router_dom/* BrowserRouter */.VK, null,
(0,emotion_react_browser_esm.jsx)(RootContextProviders, null,
(0,emotion_react_browser_esm.jsx)(MenuWrapper, { data: menu, isFrontendRoute: isFrontendRoute }),
(0,emotion_react_browser_esm.jsx)(react_router/* Switch */.rs, null,
routes.map(({ path, Component, props = {}, Fallback = Loading/* default */.Z }) => (0,emotion_react_browser_esm.jsx)(react_router/* Route */.AW, { path: path, key: path },
(0,emotion_react_browser_esm.jsx)(react.Suspense, { fallback: (0,emotion_react_browser_esm.jsx)(Fallback, null) },
(0,emotion_react_browser_esm.jsx)(ErrorBoundary/* default */.Z, null,
(0,emotion_react_browser_esm.jsx)(Component, extends_default()({ user: user }, props))))))),




(0,emotion_react_browser_esm.jsx)(ToastContainer/* default */.Z, null)));


/* harmony default export */ const views_App = (App);
;// CONCATENATED MODULE: ./src/views/index.tsx
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



react_dom.render((0,emotion_react_browser_esm.jsx)(views_App, null), document.getElementById('app'));

/***/ }),

/***/ 35755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "yz": () => (/* reexport */ NumberParam),
  "Fz": () => (/* reexport */ QueryParamProvider),
  "Zp": () => (/* reexport */ params_StringParam),
  "Kx": () => (/* reexport */ useQueryParams_useQueryParams)
});

// UNUSED EXPORTS: ArrayParam, BooleanParam, DateParam, DateTimeParam, DelimitedArrayParam, DelimitedNumericArrayParam, JsonParam, NumericArrayParam, NumericObjectParam, ObjectParam, QueryParams, decodeArray, decodeBoolean, decodeDate, decodeDelimitedArray, decodeDelimitedNumericArray, decodeJson, decodeNumber, decodeNumericArray, decodeNumericObject, decodeObject, decodeQueryParams, decodeString, encodeArray, encodeBoolean, encodeDate, encodeDelimitedArray, encodeDelimitedNumericArray, encodeJson, encodeNumber, encodeNumericArray, encodeNumericObject, encodeObject, encodeQueryParams, encodeString, transformSearchStringJsonSafe, updateInLocation, updateLocation, useQueryParam, withDefault, withQueryParams, withQueryParamsMapped

;// CONCATENATED MODULE: ./node_modules/serialize-query-params/esm/withDefault.js
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function withDefault(param, defaultValue, includeNull) {
    if (includeNull === void 0) { includeNull = true; }
    var decodeWithDefault = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var decodedValue = param.decode.apply(param, args);
        if (decodedValue === undefined) {
            return defaultValue;
        }
        if (includeNull) {
            if (decodedValue === null) {
                return defaultValue;
            }
            else {
                return decodedValue;
            }
        }
        return decodedValue;
    };
    return __assign(__assign({}, param), { decode: decodeWithDefault });
}
/* harmony default export */ const esm_withDefault = ((/* unused pure expression or super */ null && (withDefault)));

;// CONCATENATED MODULE: ./node_modules/serialize-query-params/esm/serialize.js
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/**
 * Interprets an encoded string and returns either the string or null/undefined if not available.
 * Ignores array inputs (takes just first element in array)
 * @param input encoded string
 */
function getEncodedValue(input, allowEmptyString) {
    if (input == null) {
        return input;
    }
    // '' or []
    if (input.length === 0 &&
        (!allowEmptyString || (allowEmptyString && input !== ''))) {
        return null;
    }
    var str = input instanceof Array ? input[0] : input;
    if (str == null) {
        return str;
    }
    if (!allowEmptyString && str === '') {
        return null;
    }
    return str;
}
/**
 * Interprets an encoded string and return null/undefined or an array with
 * the encoded string contents
 * @param input encoded string
 */
function getEncodedValueArray(input) {
    if (input == null) {
        return input;
    }
    return input instanceof Array ? input : input === '' ? [] : [input];
}
/**
 * Encodes a date as a string in YYYY-MM-DD format.
 *
 * @param {Date} date
 * @return {String} the encoded date
 */
function encodeDate(date) {
    if (date == null) {
        return date;
    }
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
}
/**
 * Converts a date in the format 'YYYY-mm-dd...' into a proper date, because
 * new Date() does not do that correctly. The date can be as complete or incomplete
 * as necessary (aka, '2015', '2015-10', '2015-10-01').
 * It will not work for dates that have times included in them.
 *
 * If an array is provided, only the first entry is used.
 *
 * @param  {String} input String date form like '2015-10-01'
 * @return {Date} parsed date
 */
function decodeDate(input) {
    var dateString = getEncodedValue(input);
    if (dateString == null)
        return dateString;
    var parts = dateString.split('-');
    // may only be a year so won't even have a month
    if (parts[1] != null) {
        parts[1] -= 1; // Note: months are 0-based
    }
    else {
        // just a year, set the month and day to the first
        parts[1] = 0;
        parts[2] = 1;
    }
    var decoded = new (Date.bind.apply(Date, __spreadArrays([void 0], parts)))();
    if (isNaN(decoded.getTime())) {
        return null;
    }
    return decoded;
}
/**
 * Encodes a date as a string in ISO 8601 ("2019-05-28T10:58:40Z") format.
 *
 * @param {Date} date
 * @return {String} the encoded date
 */
function encodeDateTime(date) {
    if (date == null) {
        return date;
    }
    return date.toISOString();
}
/**
 * Converts a date in the https://en.wikipedia.org/wiki/ISO_8601 format.
 * For allowed inputs see specs:
 *  - https://tools.ietf.org/html/rfc2822#page-14
 *  - http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15
 *
 * If an array is provided, only the first entry is used.
 *
 * @param  {String} input String date form like '1995-12-17T03:24:00'
 * @return {Date} parsed date
 */
function decodeDateTime(input) {
    var dateString = getEncodedValue(input);
    if (dateString == null)
        return dateString;
    var decoded = new Date(dateString);
    if (isNaN(decoded.getTime())) {
        return null;
    }
    return decoded;
}
/**
 * Encodes a boolean as a string. true -> "1", false -> "0".
 *
 * @param {Boolean} bool
 * @return {String} the encoded boolean
 */
function encodeBoolean(bool) {
    if (bool == null) {
        return bool;
    }
    return bool ? '1' : '0';
}
/**
 * Decodes a boolean from a string. "1" -> true, "0" -> false.
 * Everything else maps to undefined.
 *
 * If an array is provided, only the first entry is used.
 *
 * @param {String} input the encoded boolean string
 * @return {Boolean} the boolean value
 */
function decodeBoolean(input) {
    var boolStr = getEncodedValue(input);
    if (boolStr == null)
        return boolStr;
    if (boolStr === '1') {
        return true;
    }
    else if (boolStr === '0') {
        return false;
    }
    return null;
}
/**
 * Encodes a number as a string.
 *
 * @param {Number} num
 * @return {String} the encoded number
 */
function encodeNumber(num) {
    if (num == null) {
        return num;
    }
    return String(num);
}
/**
 * Decodes a number from a string. If the number is invalid,
 * it returns undefined.
 *
 * If an array is provided, only the first entry is used.
 *
 * @param {String} input the encoded number string
 * @return {Number} the number value
 */
function decodeNumber(input) {
    var numStr = getEncodedValue(input);
    if (numStr == null)
        return numStr;
    if (numStr === '')
        return null;
    var result = +numStr;
    return result;
}
/**
 * Encodes a string while safely handling null and undefined values.
 *
 * @param {String} str a string to encode
 * @return {String} the encoded string
 */
function encodeString(str) {
    if (str == null) {
        return str;
    }
    return String(str);
}
/**
 * Decodes a string while safely handling null and undefined values.
 *
 * If an array is provided, only the first entry is used.
 *
 * @param {String} input the encoded string
 * @return {String} the string value
 */
function decodeString(input) {
    var str = getEncodedValue(input, true);
    if (str == null)
        return str;
    return String(str);
}
/**
 * Encodes anything as a JSON string.
 *
 * @param {Any} any The thing to be encoded
 * @return {String} The JSON string representation of any
 */
function encodeJson(any) {
    if (any == null) {
        return any;
    }
    return JSON.stringify(any);
}
/**
 * Decodes a JSON string into javascript
 *
 * If an array is provided, only the first entry is used.
 *
 * @param {String} input The JSON string representation
 * @return {Any} The javascript representation
 */
function decodeJson(input) {
    var jsonStr = getEncodedValue(input);
    if (jsonStr == null)
        return jsonStr;
    var result = null;
    try {
        result = JSON.parse(jsonStr);
    }
    catch (e) {
        /* ignore errors, returning undefined */
    }
    return result;
}
/**
 * Encodes an array as a JSON string.
 *
 * @param {Array} array The array to be encoded
 * @return {String[]} The array of strings to be put in the URL
 * as repeated query parameters
 */
function encodeArray(array) {
    if (array == null) {
        return array;
    }
    return array;
}
/**
 * Decodes an array or singular value and returns it as an array
 * or undefined if falsy. Filters out undefined values.
 *
 * @param {String | Array} input The input value
 * @return {Array} The javascript representation
 */
function decodeArray(input) {
    var arr = getEncodedValueArray(input);
    if (arr == null)
        return arr;
    return arr;
}
/**
 * Encodes a numeric array as a JSON string.
 *
 * @param {Array} array The array to be encoded
 * @return {String[]} The array of strings to be put in the URL
 * as repeated query parameters
 */
function encodeNumericArray(array) {
    if (array == null) {
        return array;
    }
    return array.map(String);
}
/**
 * Decodes an array or singular value and returns it as an array
 * or undefined if falsy. Filters out undefined and NaN values.
 *
 * @param {String | Array} input The input value
 * @return {Array} The javascript representation
 */
function decodeNumericArray(input) {
    var arr = decodeArray(input);
    if (arr == null)
        return arr;
    return arr.map(function (d) { return (d === '' || d == null ? null : +d); });
}
/**
 * Encodes an array as a delimited string. For example,
 * ['a', 'b'] -> 'a_b' with entrySeparator='_'
 *
 * @param array The array to be encoded
 * @param entrySeparator The string used to delimit entries
 * @return The array as a string with elements joined by the
 * entry separator
 */
function encodeDelimitedArray(array, entrySeparator) {
    if (entrySeparator === void 0) { entrySeparator = '_'; }
    if (array == null) {
        return array;
    }
    return array.join(entrySeparator);
}
/**
 * Decodes a delimited string into javascript array. For example,
 * 'a_b' -> ['a', 'b'] with entrySeparator='_'
 *
 * If an array is provided as input, only the first entry is used.
 *
 * @param {String} input The JSON string representation
 * @param entrySeparator The array as a string with elements joined by the
 * entry separator
 * @return {Array} The javascript representation
 */
function decodeDelimitedArray(input, entrySeparator) {
    if (entrySeparator === void 0) { entrySeparator = '_'; }
    var arrayStr = getEncodedValue(input, true);
    if (arrayStr == null)
        return arrayStr;
    if (arrayStr === '')
        return [];
    return arrayStr.split(entrySeparator);
}
/**
 * Encodes a numeric array as a delimited string. (alias of encodeDelimitedArray)
 * For example, [1, 2] -> '1_2' with entrySeparator='_'
 *
 * @param {Array} array The array to be encoded
 * @return {String} The JSON string representation of array
 */
var encodeDelimitedNumericArray = encodeDelimitedArray;
/**
 * Decodes a delimited string into javascript array where all entries are numbers
 * For example, '1_2' -> [1, 2] with entrySeparator='_'
 *
 * If an array is provided as input, only the first entry is used.
 *
 * @param {String} jsonStr The JSON string representation
 * @return {Array} The javascript representation
 */
function decodeDelimitedNumericArray(arrayStr, entrySeparator) {
    if (entrySeparator === void 0) { entrySeparator = '_'; }
    var decoded = decodeDelimitedArray(arrayStr, entrySeparator);
    if (decoded == null)
        return decoded;
    return decoded.map(function (d) { return (d === '' || d == null ? null : +d); });
}
/**
 * Encode simple objects as readable strings. Works only for simple,
 * flat objects where values are numbers, strings.
 *
 * For example { foo: bar, boo: baz } -> "foo-bar_boo-baz"
 *
 * @param {Object} object The object to encode
 * @param {String} keyValSeparator="-" The separator between keys and values
 * @param {String} entrySeparator="_" The separator between entries
 * @return {String} The encoded object
 */
function encodeObject(obj, keyValSeparator, entrySeparator) {
    if (keyValSeparator === void 0) { keyValSeparator = '-'; }
    if (entrySeparator === void 0) { entrySeparator = '_'; }
    if (obj == null)
        return obj; // null or undefined
    if (!Object.keys(obj).length)
        return ''; // {} case
    return Object.keys(obj)
        .map(function (key) { return "" + key + keyValSeparator + obj[key]; })
        .join(entrySeparator);
}
/**
 * Decodes a simple object to javascript. Currently works only for simple,
 * flat objects where values are strings.
 *
 * For example "foo-bar_boo-baz" -> { foo: bar, boo: baz }
 *
 * If an array is provided as input, only the first entry is used.
 *
 * @param {String} input The object string to decode
 * @param {String} keyValSeparator="-" The separator between keys and values
 * @param {String} entrySeparator="_" The separator between entries
 * @return {Object} The javascript object
 */
function decodeObject(input, keyValSeparator, entrySeparator) {
    if (keyValSeparator === void 0) { keyValSeparator = '-'; }
    if (entrySeparator === void 0) { entrySeparator = '_'; }
    var objStr = getEncodedValue(input, true);
    if (objStr == null)
        return objStr;
    if (objStr === '')
        return {};
    var obj = {};
    var keyValSeparatorRegExp = new RegExp(keyValSeparator + "(.*)");
    objStr.split(entrySeparator).forEach(function (entryStr) {
        var _a = entryStr.split(keyValSeparatorRegExp), key = _a[0], value = _a[1];
        obj[key] = value;
    });
    return obj;
}
/**
 * Encode simple objects as readable strings. Alias of encodeObject.
 *
 * For example { foo: 123, boo: 521 } -> "foo-123_boo-521"
 *
 * @param {Object} object The object to encode
 * @param {String} keyValSeparator="-" The separator between keys and values
 * @param {String} entrySeparator="_" The separator between entries
 * @return {String} The encoded object
 */
var encodeNumericObject = encodeObject;
/**
 * Decodes a simple object to javascript where all values are numbers.
 * Currently works only for simple, flat objects.
 *
 * For example "foo-123_boo-521" -> { foo: 123, boo: 521 }
 *
 * If an array is provided as input, only the first entry is used.
 *
 * @param {String} input The object string to decode
 * @param {String} keyValSeparator="-" The separator between keys and values
 * @param {String} entrySeparator="_" The separator between entries
 * @return {Object} The javascript object
 */
function decodeNumericObject(input, keyValSeparator, entrySeparator) {
    if (keyValSeparator === void 0) { keyValSeparator = '-'; }
    if (entrySeparator === void 0) { entrySeparator = '_'; }
    var decoded = decodeObject(input, keyValSeparator, entrySeparator);
    if (decoded == null)
        return decoded;
    // convert to numbers
    var decodedNumberObj = {};
    for (var _i = 0, _a = Object.keys(decoded); _i < _a.length; _i++) {
        var key = _a[_i];
        decodedNumberObj[key] = decodeNumber(decoded[key]);
    }
    return decodedNumberObj;
}

;// CONCATENATED MODULE: ./node_modules/serialize-query-params/esm/params.js

/**
 * String values
 */
var params_StringParam = {
    encode: encodeString,
    decode: decodeString,
};
/**
 * Numbers (integers or floats)
 */
var NumberParam = {
    encode: encodeNumber,
    decode: decodeNumber,
};
/**
 * For flat objects where values are strings
 */
var ObjectParam = {
    encode: encodeObject,
    decode: decodeObject,
};
/**
 * For flat arrays of strings, filters out undefined values during decode
 */
var ArrayParam = {
    encode: encodeArray,
    decode: decodeArray,
};
/**
 * For flat arrays of strings, filters out undefined values during decode
 */
var NumericArrayParam = {
    encode: encodeNumericArray,
    decode: decodeNumericArray,
};
/**
 * For any type of data, encoded via JSON.stringify
 */
var JsonParam = {
    encode: encodeJson,
    decode: decodeJson,
};
/**
 * For simple dates (YYYY-MM-DD)
 */
var DateParam = {
    encode: encodeDate,
    decode: decodeDate,
    equals: function (valueA, valueB) {
        if (valueA === valueB)
            return true;
        if (valueA == null || valueB == null)
            return valueA === valueB;
        // ignore time of day
        return (valueA.getFullYear() === valueB.getFullYear() &&
            valueA.getMonth() === valueB.getMonth() &&
            valueA.getDate() === valueB.getDate());
    },
};
/**
 * For dates in simplified extended ISO format (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ)
 */
var DateTimeParam = {
    encode: encodeDateTime,
    decode: decodeDateTime,
    equals: function (valueA, valueB) {
        if (valueA === valueB)
            return true;
        if (valueA == null || valueB == null)
            return valueA === valueB;
        return valueA.valueOf() === valueB.valueOf();
    },
};
/**
 * For boolean values: 1 = true, 0 = false
 */
var BooleanParam = {
    encode: encodeBoolean,
    decode: decodeBoolean,
};
/**
 * For flat objects where the values are numbers
 */
var NumericObjectParam = {
    encode: encodeNumericObject,
    decode: decodeNumericObject,
};
/**
 * For flat arrays of strings, filters out undefined values during decode
 */
var DelimitedArrayParam = {
    encode: encodeDelimitedArray,
    decode: decodeDelimitedArray,
};
/**
 * For flat arrays where the values are numbers, filters out undefined values during decode
 */
var DelimitedNumericArrayParam = {
    encode: encodeDelimitedNumericArray,
    decode: decodeDelimitedNumericArray,
};

// EXTERNAL MODULE: ./node_modules/query-string/index.js
var query_string = __webpack_require__(17563);
;// CONCATENATED MODULE: ./node_modules/serialize-query-params/esm/updateLocation.js
var updateLocation_assign = (undefined && undefined.__assign) || function () {
    updateLocation_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return updateLocation_assign.apply(this, arguments);
};

/**
 * An example of a transformSearchString function that undoes encoding of
 * common JSON characters that are technically allowed in URLs.
 */
var JSON_SAFE_CHARS = "{}[],\":"
    .split('')
    .map(function (d) { return [d, encodeURIComponent(d)]; });
function transformSearchStringJsonSafe(searchString) {
    var str = searchString;
    for (var _i = 0, JSON_SAFE_CHARS_1 = JSON_SAFE_CHARS; _i < JSON_SAFE_CHARS_1.length; _i++) {
        var _a = JSON_SAFE_CHARS_1[_i], char = _a[0], code = _a[1];
        str = str.replace(new RegExp('\\' + code, 'g'), char);
    }
    return str;
}
/**
 * Update a location, wiping out parameters not included in encodedQuery
 * If a param is set to undefined it will be removed from the URL.
 */
function updateLocation(encodedQuery, location, stringifyOptions) {
    var encodedSearchString = (0,query_string.stringify)(encodedQuery, stringifyOptions);
    if (stringifyOptions && stringifyOptions.transformSearchString) {
        encodedSearchString = stringifyOptions.transformSearchString(encodedSearchString);
    }
    var search = encodedSearchString.length ? "?" + encodedSearchString : '';
    var href = (0,query_string.parseUrl)(location.href || '').url + search;
    var newLocation = updateLocation_assign(updateLocation_assign({}, location), { key: "" + Date.now(), // needed for some routers (e.g. react-router)
        href: href,
        search: search, query: encodedQuery });
    return newLocation;
}
/**
 * Update a location while retaining existing parameters.
 * If a param is set to undefined it will be removed from the URL.
 */
function updateInLocation(encodedQueryReplacements, location, stringifyOptions) {
    // if a query is there, use it, otherwise parse the search string
    var currQuery = location.query || (0,query_string.parse)(location.search);
    var newQuery = updateLocation_assign(updateLocation_assign({}, currQuery), encodedQueryReplacements);
    return updateLocation(newQuery, location, stringifyOptions);
}

;// CONCATENATED MODULE: ./node_modules/serialize-query-params/esm/encodeQueryParams.js
/**
 * Convert the values in query to strings via the encode functions configured
 * in paramConfigMap
 *
 * @param paramConfigMap Map from query name to { encode, decode } config
 * @param query Query updates mapping param name to decoded value
 */
function encodeQueryParams(paramConfigMap, query) {
    var encodedQuery = {};
    var paramNames = Object.keys(query);
    for (var _i = 0, paramNames_1 = paramNames; _i < paramNames_1.length; _i++) {
        var paramName = paramNames_1[_i];
        var decodedValue = query[paramName];
        if (!paramConfigMap[paramName]) {
            if (false) {}
            // NOTE: we could just not encode it, but it is probably convenient to have
            // it be included by default as a string type.
            encodedQuery[paramName] =
                decodedValue == null ? decodedValue : String(decodedValue);
        }
        else {
            encodedQuery[paramName] = paramConfigMap[paramName].encode(query[paramName]);
        }
    }
    return encodedQuery;
}
/* harmony default export */ const esm_encodeQueryParams = ((/* unused pure expression or super */ null && (encodeQueryParams)));

;// CONCATENATED MODULE: ./node_modules/serialize-query-params/esm/index.js






if (false) { var validQueryStringInstalled, queryStringVersion; }

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/use-query-params/esm/shallowEqual.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license at
 * https://github.com/facebook/fbjs/blob/master/LICENSE
 */
/*eslint-disable no-self-compare */
var shallowEqual_hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
    // SameValue algorithm
    if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        // Added the nonzero y check to make Flow happy, but it is redundant
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    }
    else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
    }
}
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.

 * @pbeshai modification of shallowEqual to take into consideration a map providing
 * equals functions
 */
function shallowEqual_shallowEqual(objA, objB, equalMap) {
    var _a, _b;
    if (is(objA, objB)) {
        return true;
    }
    if (typeof objA !== 'object' ||
        objA === null ||
        typeof objB !== 'object' ||
        objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    for (var i = 0; i < keysA.length; i++) {
        var isEqual = (_b = (_a = equalMap === null || equalMap === void 0 ? void 0 : equalMap[keysA[i]]) === null || _a === void 0 ? void 0 : _a.equals) !== null && _b !== void 0 ? _b : is;
        if (!shallowEqual_hasOwnProperty.call(objB, keysA[i]) ||
            !isEqual(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}

;// CONCATENATED MODULE: ./node_modules/use-query-params/esm/helpers.js



function helpers_useUpdateRefIfShallowNew(ref, newValue, isEqual) {
    if (isEqual === void 0) { isEqual = shallowEqual_shallowEqual; }
    var hasNew = ((ref.current == null || newValue == null) && ref.current === newValue) ||
        !isEqual(ref.current, newValue);
    react.useEffect(function () {
        if (hasNew) {
            ref.current = newValue;
        }
    }, [ref, newValue, hasNew]);
}
function helpers_getSSRSafeSearchString(location) {
    // handle checking SSR (#13)
    if (typeof location === 'object') {
        // in browser
        if (typeof window !== 'undefined') {
            return location.search;
        }
        else {
            return (0,query_string.extract)("" + location.pathname + (location.search ? location.search : ''));
        }
    }
    return '';
}

;// CONCATENATED MODULE: ./node_modules/use-query-params/esm/updateUrlQuery.js

/**
 * Creates a new location object containing the specified query changes.
 * If replaceIn or pushIn are used as the updateType, then parameters
 * not specified in queryReplacements are retained. If replace or push
 * are used, only the values in queryReplacements will be available.
 * The default is pushIn.
 */
function createLocationWithChanges(queryReplacements, location, updateType, stringifyOptions) {
    if (updateType === void 0) { updateType = 'pushIn'; }
    switch (updateType) {
        case 'replace':
        case 'push':
            return updateLocation(queryReplacements, location, stringifyOptions);
        case 'replaceIn':
        case 'pushIn':
        default:
            return updateInLocation(queryReplacements, location, stringifyOptions);
    }
}
/**
 * Updates the URL to the new location.
 */
function updateUrlQuery(history, location, updateType) {
    if (updateType === void 0) { updateType = 'pushIn'; }
    switch (updateType) {
        case 'pushIn':
        case 'push':
            history.push(location);
            break;
        case 'replaceIn':
        case 'replace':
        default:
            history.replace(location);
            break;
    }
}

;// CONCATENATED MODULE: ./node_modules/use-query-params/esm/LocationProvider.js


var providerlessContextValue = {
    location: {},
    getLocation: function () { return ({}); },
    setLocation: function () { },
};
var LocationContext = react.createContext(providerlessContextValue);
function LocationProvider_useLocationContext() {
    var context = react.useContext(LocationContext);
    if (false) {}
    return context;
}
/**
 * An internal-only context provider which provides down the most
 * recent location object and a callback to update the history.
 */
function LocationProvider(_a) {
    var history = _a.history, location = _a.location, children = _a.children, stringifyOptions = _a.stringifyOptions;
    var locationRef = react.useRef(location);
    react.useEffect(function () {
        locationRef.current = location;
    }, [location]);
    // TODO: we can probably simplify this now that we are reading location from history
    var getLocation = react.useCallback(function () { return locationRef.current; }, [
        locationRef,
    ]);
    var setLocation = react.useCallback(function (queryReplacements, updateType) {
        // A ref is needed here to stop setLocation updating constantly (see #46)
        locationRef.current = createLocationWithChanges(queryReplacements, history == null || history.location == null
            ? locationRef.current
            : history.location, updateType, stringifyOptions);
        if (history) {
            updateUrlQuery(history, locationRef.current, updateType);
        }
    }, [history, stringifyOptions]);
    return (react.createElement(LocationContext.Provider, { value: { location: location, getLocation: getLocation, setLocation: setLocation } }, children));
}

;// CONCATENATED MODULE: ./node_modules/use-query-params/esm/memoizedQueryParser.js

var makeMemoizedQueryParser = function (initialSearchString) {
    var cachedSearchString = initialSearchString;
    var cachedParsedQuery = (0,query_string.parse)(cachedSearchString || '');
    return function (newSearchString) {
        if (cachedSearchString !== newSearchString) {
            cachedSearchString = newSearchString;
            cachedParsedQuery = (0,query_string.parse)(cachedSearchString);
        }
        return cachedParsedQuery;
    };
};
var memoizedQueryParser_sharedMemoizedQueryParser = makeMemoizedQueryParser();

;// CONCATENATED MODULE: ./node_modules/use-query-params/esm/useQueryParam.js






/**
 * Helper to get the latest decoded value with smart caching.
 * Abstracted into its own function to allow re-use in a functional setter (#26)
 */
function getLatestDecodedValue(location, name, paramConfig, paramConfigRef, encodedValueCacheRef, decodedValueCacheRef) {
    var _a;
    // check if we have a new param config
    var hasNewParamConfig = !shallowEqual(paramConfigRef.current, paramConfig);
    var isValueEqual = (_a = paramConfig.equals) !== null && _a !== void 0 ? _a : shallowEqual;
    // read in the parsed query
    var parsedQuery = sharedMemoizedQueryParser(getSSRSafeSearchString(location) // get the latest location object
    );
    // read in the encoded string value (we have to check cache if available because
    // sometimes the query string changes so we get a new parsedQuery but this value
    // didn't change, so we should avoid generating a new array or whatever value)
    var hasNewEncodedValue = !shallowEqual(encodedValueCacheRef.current, parsedQuery[name]);
    var encodedValue = hasNewEncodedValue
        ? parsedQuery[name]
        : encodedValueCacheRef.current;
    // only decode if we have changes to encoded value or the config.
    // check for undefined to handle initial case
    if (!hasNewEncodedValue &&
        !hasNewParamConfig &&
        decodedValueCacheRef.current !== undefined) {
        return decodedValueCacheRef.current;
    }
    var newDecodedValue = paramConfig.decode(encodedValue);
    var hasNewDecodedValue = ((decodedValueCacheRef.current == null || newDecodedValue == null) &&
        decodedValueCacheRef.current === newDecodedValue) ||
        !isValueEqual(decodedValueCacheRef.current, newDecodedValue);
    // if we have a new decoded value use it, otherwise use cached
    return hasNewDecodedValue
        ? newDecodedValue
        : decodedValueCacheRef.current;
}
/**
 * Given a query param name and query parameter configuration ({ encode, decode })
 * return the decoded value and a setter for updating it.
 *
 * The setter takes two arguments (newValue, updateType) where updateType
 * is one of 'replace' | 'replaceIn' | 'push' | 'pushIn', defaulting to
 * 'pushIn'.
 *
 * You may optionally pass in a rawQuery object, otherwise the query is derived
 * from the location available in the context.
 *
 * D = decoded type
 * D2 = return value from decode (typically same as D)
 */
var useQueryParam = function (name, paramConfig) {
    if (paramConfig === void 0) { paramConfig = StringParam; }
    var _a = useLocationContext(), location = _a.location, getLocation = _a.getLocation, setLocation = _a.setLocation;
    // read in the raw query
    var parsedQuery = sharedMemoizedQueryParser(getSSRSafeSearchString(location));
    // make caches
    var encodedValueCacheRef = React.useRef();
    var paramConfigRef = React.useRef(paramConfig);
    var decodedValueCacheRef = React.useRef();
    var decodedValue = getLatestDecodedValue(location, name, paramConfig, paramConfigRef, encodedValueCacheRef, decodedValueCacheRef);
    // update cached values in a useEffect
    useUpdateRefIfShallowNew(encodedValueCacheRef, parsedQuery[name]);
    useUpdateRefIfShallowNew(paramConfigRef, paramConfig);
    useUpdateRefIfShallowNew(decodedValueCacheRef, decodedValue, paramConfig.equals);
    // create the setter, memoizing via useCallback
    var setValueDeps = {
        paramConfig: paramConfig,
        name: name,
        setLocation: setLocation,
        getLocation: getLocation,
    };
    var setValueDepsRef = React.useRef(setValueDeps);
    setValueDepsRef.current = setValueDeps;
    var setValue = React.useCallback(function setValueCallback(newValue, updateType) {
        var _a;
        var deps = setValueDepsRef.current;
        var newEncodedValue;
        // allow functional updates #26
        if (typeof newValue === 'function') {
            // get latest decoded value to pass as a fresh arg to the setter fn
            var latestValue = getLatestDecodedValue(deps.getLocation(), deps.name, deps.paramConfig, paramConfigRef, encodedValueCacheRef, decodedValueCacheRef);
            decodedValueCacheRef.current = latestValue; // keep cache in sync
            newEncodedValue = deps.paramConfig.encode(newValue(latestValue));
        }
        else {
            newEncodedValue = deps.paramConfig.encode(newValue);
        }
        // update the URL
        deps.setLocation((_a = {}, _a[deps.name] = newEncodedValue, _a), updateType);
    }, []);
    return [decodedValue, setValue];
};

;// CONCATENATED MODULE: ./node_modules/use-query-params/esm/useQueryParams.js






/**
 * Helper to get the latest decoded values with smart caching.
 * Abstracted into its own function to allow re-use in a functional setter (#26)
 */
function getLatestDecodedValues(location, paramConfigMap, paramConfigMapRef, parsedQueryRef, encodedValuesCacheRef, decodedValuesCacheRef) {
    // check if we have a new param config
    var hasNewParamConfigMap = !shallowEqual_shallowEqual(paramConfigMapRef.current, paramConfigMap);
    // read in the parsed query
    var parsedQuery = memoizedQueryParser_sharedMemoizedQueryParser(helpers_getSSRSafeSearchString(location) // get the latest location object
    );
    // check if new encoded values are around (new parsed query).
    // can use triple equals since we already cache this value
    var hasNewParsedQuery = parsedQueryRef.current !== parsedQuery;
    // if nothing has changed, use existing.. so long as we have existing.
    if (!hasNewParsedQuery &&
        !hasNewParamConfigMap &&
        encodedValuesCacheRef.current !== undefined) {
        return {
            encodedValues: encodedValuesCacheRef.current,
            decodedValues: decodedValuesCacheRef.current,
        };
    }
    var encodedValuesCache = encodedValuesCacheRef.current || {};
    var decodedValuesCache = decodedValuesCacheRef.current || {};
    var encodedValues = {};
    // we have new encoded values, so let's get new decoded values.
    // recompute new values but only for those that changed
    var paramNames = Object.keys(paramConfigMap);
    var decodedValues = {};
    for (var _i = 0, paramNames_1 = paramNames; _i < paramNames_1.length; _i++) {
        var paramName = paramNames_1[_i];
        // do we have a new encoded value?
        var paramConfig = paramConfigMap[paramName];
        var hasNewEncodedValue = !shallowEqual_shallowEqual(encodedValuesCache[paramName], parsedQuery[paramName]);
        // if we have a new encoded value, re-decode. otherwise reuse cache
        var encodedValue = void 0;
        var decodedValue = void 0;
        if (hasNewEncodedValue ||
            (encodedValuesCache[paramName] === undefined &&
                decodedValuesCache[paramName] === undefined)) {
            encodedValue = parsedQuery[paramName];
            decodedValue = paramConfig.decode(encodedValue);
        }
        else {
            encodedValue = encodedValuesCache[paramName];
            decodedValue = decodedValuesCache[paramName];
        }
        encodedValues[paramName] = encodedValue;
        decodedValues[paramName] = decodedValue;
    }
    // keep referential equality for decoded valus if we didn't actually change anything
    var hasNewDecodedValues = !shallowEqual_shallowEqual(decodedValuesCacheRef.current, decodedValues, paramConfigMap);
    return {
        encodedValues: encodedValues,
        decodedValues: hasNewDecodedValues
            ? decodedValues
            : decodedValuesCacheRef.current,
    };
}
/**
 * Given a query parameter configuration (mapping query param name to { encode, decode }),
 * return an object with the decoded values and a setter for updating them.
 */
var useQueryParams_useQueryParams = function (paramConfigMap) {
    var _a = LocationProvider_useLocationContext(), location = _a.location, getLocation = _a.getLocation, setLocation = _a.setLocation;
    // read in the raw query
    var parsedQuery = memoizedQueryParser_sharedMemoizedQueryParser(helpers_getSSRSafeSearchString(location));
    // make caches
    var paramConfigMapRef = react.useRef(paramConfigMap);
    var parsedQueryRef = react.useRef(parsedQuery);
    var encodedValuesCacheRef = react.useRef(undefined); // undefined for initial check
    var decodedValuesCacheRef = react.useRef({});
    // memoize paramConfigMap to make the API nicer for consumers.
    // otherwise we'd have to useQueryParams(useMemo(() => { foo: NumberParam }, []))
    paramConfigMap = shallowEqual_shallowEqual(paramConfigMap, paramConfigMapRef.current)
        ? paramConfigMapRef.current
        : paramConfigMap;
    // decode all the values if we have changes
    var _b = getLatestDecodedValues(location, paramConfigMap, paramConfigMapRef, parsedQueryRef, encodedValuesCacheRef, decodedValuesCacheRef), encodedValues = _b.encodedValues, decodedValues = _b.decodedValues;
    // update cached values in useEffects
    helpers_useUpdateRefIfShallowNew(parsedQueryRef, parsedQuery);
    helpers_useUpdateRefIfShallowNew(paramConfigMapRef, paramConfigMap);
    helpers_useUpdateRefIfShallowNew(encodedValuesCacheRef, encodedValues);
    helpers_useUpdateRefIfShallowNew(decodedValuesCacheRef, decodedValues, function (a, b) {
        return shallowEqual_shallowEqual(a, b, paramConfigMap);
    });
    // create a setter for updating multiple query params at once
    var setQueryDeps = {
        paramConfigMap: paramConfigMap,
        setLocation: setLocation,
        getLocation: getLocation,
    };
    var setQueryDepsRef = react.useRef(setQueryDeps);
    setQueryDepsRef.current = setQueryDeps;
    var setQuery = react.useCallback(function (changes, updateType) {
        var deps = setQueryDepsRef.current;
        var encodedChanges;
        if (typeof changes === 'function') {
            // get latest decoded value to pass as a fresh arg to the setter fn
            var latestValues = getLatestDecodedValues(deps.getLocation(), deps.paramConfigMap, paramConfigMapRef, parsedQueryRef, encodedValuesCacheRef, decodedValuesCacheRef).decodedValues;
            decodedValuesCacheRef.current = latestValues; // keep cache in sync
            encodedChanges = encodeQueryParams(deps.paramConfigMap, changes(latestValues));
        }
        else {
            // encode as strings for the URL
            encodedChanges = encodeQueryParams(deps.paramConfigMap, changes);
        }
        // update the URL
        deps.setLocation(encodedChanges, updateType);
    }, []);
    // no longer Partial
    return [decodedValues, setQuery];
};
/* harmony default export */ const esm_useQueryParams = ((/* unused pure expression or super */ null && (useQueryParams_useQueryParams)));

;// CONCATENATED MODULE: ./node_modules/use-query-params/esm/withQueryParams.js
var withQueryParams_assign = (undefined && undefined.__assign) || function () {
    withQueryParams_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return withQueryParams_assign.apply(this, arguments);
};


/**
 * HOC to provide query parameters via props `query` and `setQuery`
 * NOTE: I couldn't get type to automatically infer generic when
 * using the format withQueryParams(config)(component), so I switched
 * to withQueryParams(config, component).
 * See: https://github.com/microsoft/TypeScript/issues/30134
 */
function withQueryParams(paramConfigMap, WrappedComponent) {
    // return a FC that takes props excluding query and setQuery
    var Component = function (props) {
        var _a = useQueryParams(paramConfigMap), query = _a[0], setQuery = _a[1];
        // see https://github.com/microsoft/TypeScript/issues/28938#issuecomment-450636046 for why `...props as P`
        return (React.createElement(WrappedComponent, withQueryParams_assign({ query: query, setQuery: setQuery }, props)));
    };
    Component.displayName = "withQueryParams(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")";
    return Component;
}
/* harmony default export */ const esm_withQueryParams = ((/* unused pure expression or super */ null && (withQueryParams)));
/**
 * HOC to provide query parameters via props mapToProps (similar to
 * react-redux connect style mapStateToProps)
 * NOTE: I couldn't get type to automatically infer generic when
 * using the format withQueryParams(config)(component), so I switched
 * to withQueryParams(config, component).
 * See: https://github.com/microsoft/TypeScript/issues/30134
 */
function withQueryParamsMapped(paramConfigMap, mapToProps, WrappedComponent) {
    // return a FC that takes props excluding query and setQuery
    var Component = function (props) {
        var _a = useQueryParams(paramConfigMap), query = _a[0], setQuery = _a[1];
        var propsToAdd = mapToProps(query, setQuery, props);
        // see https://github.com/microsoft/TypeScript/issues/28938#issuecomment-450636046 for why `...props as P`
        return React.createElement(WrappedComponent, withQueryParams_assign({}, propsToAdd, props));
    };
    Component.displayName = "withQueryParams(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")";
    return Component;
}

;// CONCATENATED MODULE: ./node_modules/use-query-params/esm/QueryParams.js

var QueryParams = function (_a) {
    var config = _a.config, children = _a.children;
    var _b = useQueryParams(config), query = _b[0], setQuery = _b[1];
    return children({ query: query, setQuery: setQuery });
};
/* harmony default export */ const esm_QueryParams = ((/* unused pure expression or super */ null && (QueryParams)));

;// CONCATENATED MODULE: ./node_modules/use-query-params/esm/QueryParamProvider.js
var QueryParamProvider_assign = (undefined && undefined.__assign) || function () {
    QueryParamProvider_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return QueryParamProvider_assign.apply(this, arguments);
};



// we use a lazy caching solution to prevent #46 from happening
var cachedWindowHistory;
var cachedAdaptedWindowHistory;
/**
 * Adapts standard DOM window history to work with our
 * { replace, push } interface.
 *
 * @param history Standard history provided by DOM
 */
function adaptWindowHistory(history) {
    if (history === cachedWindowHistory && cachedAdaptedWindowHistory != null) {
        return cachedAdaptedWindowHistory;
    }
    var adaptedWindowHistory = {
        replace: function (location) {
            history.replaceState(location.state, '', location.protocol + "//" + location.host + location.pathname + location.search);
        },
        push: function (location) {
            history.pushState(location.state, '', location.protocol + "//" + location.host + location.pathname + location.search);
        },
        get location() {
            return window.location;
        },
    };
    cachedWindowHistory = history;
    cachedAdaptedWindowHistory = adaptedWindowHistory;
    return adaptedWindowHistory;
}
// we use a lazy caching solution to prevent #46 from happening
var cachedReachHistory;
var cachedAdaptedReachHistory;
/**
 * Adapts @reach/router history to work with our
 * { replace, push } interface.
 *
 * @param history globalHistory from @reach/router
 */
function adaptReachHistory(history) {
    if (history === cachedReachHistory && cachedAdaptedReachHistory != null) {
        return cachedAdaptedReachHistory;
    }
    var adaptedReachHistory = {
        replace: function (location) {
            history.navigate(location.protocol + "//" + location.host + location.pathname + location.search, { replace: true });
        },
        push: function (location) {
            history.navigate(location.protocol + "//" + location.host + location.pathname + location.search, { replace: false });
        },
        get location() {
            return history.location;
        },
    };
    cachedReachHistory = history;
    cachedAdaptedReachHistory = adaptedReachHistory;
    return adaptedReachHistory;
}
/**
 * Helper to produce the context value falling back to
 * window history and location if not provided.
 */
function getLocationProps(_a) {
    var _b = _a === void 0 ? {} : _a, history = _b.history, location = _b.location;
    var hasWindow = typeof window !== 'undefined';
    if (hasWindow) {
        if (!history) {
            history = adaptWindowHistory(window.history);
        }
        if (!location) {
            location = window.location;
        }
    }
    if (!location) {
        throw new Error("\n        Could not read the location. Is the router wired up correctly?\n      ");
    }
    return { history: history, location: location };
}
/**
 * Context provider for query params to have access to the
 * active routing system, enabling updates to the URL.
 */
function QueryParamProvider(_a) {
    var children = _a.children, ReactRouterRoute = _a.ReactRouterRoute, reachHistory = _a.reachHistory, history = _a.history, location = _a.location, stringifyOptions = _a.stringifyOptions;
    // cache the stringify options object so we users can just do
    // <QueryParamProvider stringifyOptions={{ encode: false }} />
    var stringifyOptionsRef = react.useRef(stringifyOptions);
    var hasNewStringifyOptions = !shallowEqual_shallowEqual(stringifyOptionsRef.current, stringifyOptions);
    var stringifyOptionsCached = hasNewStringifyOptions
        ? stringifyOptions
        : stringifyOptionsRef.current;
    react.useEffect(function () {
        stringifyOptionsRef.current = stringifyOptionsCached;
    }, [stringifyOptionsCached]);
    // if we have React Router, use it to get the context value
    if (ReactRouterRoute) {
        return (react.createElement(ReactRouterRoute, null, function (routeProps) {
            return (react.createElement(LocationProvider, QueryParamProvider_assign({ stringifyOptions: stringifyOptionsCached }, getLocationProps(routeProps)), children));
        }));
    }
    // if we are using reach router, use its history
    if (reachHistory) {
        return (react.createElement(LocationProvider, QueryParamProvider_assign({ stringifyOptions: stringifyOptionsCached }, getLocationProps({
            history: adaptReachHistory(reachHistory),
            location: location,
        })), children));
    }
    // neither reach nor react-router, so allow manual overrides
    return (react.createElement(LocationProvider, QueryParamProvider_assign({ stringifyOptions: stringifyOptionsCached }, getLocationProps({ history: history, location: location })), children));
}
/* harmony default export */ const esm_QueryParamProvider = ((/* unused pure expression or super */ null && (QueryParamProvider)));

;// CONCATENATED MODULE: ./node_modules/use-query-params/esm/index.js








/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk preload function */
/******/ 	(() => {
/******/ 		__webpack_require__.H = {};
/******/ 		__webpack_require__.G = (chunkId) => {
/******/ 			Object.keys(__webpack_require__.H).map((key) => {
/******/ 				__webpack_require__.H[key](chunkId);
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 7211) return "7211.580aea4198bdc8cf4b0e.entry.js";
/******/ 			if (chunkId === 7017) return "7017.5f6457ff0a9257037de0.entry.js";
/******/ 			if (chunkId === 8483) return "8483.477de9e20e800b8f58f2.entry.js";
/******/ 			if (chunkId === 876) return "876.434a35cf0736cfefe965.entry.js";
/******/ 			if (chunkId === 504) return "thumbnail.064d1830e6c10be17b3b.entry.js";
/******/ 			if (chunkId === 8135) return "8135.bb65e8b8f57875c843eb.entry.js";
/******/ 			if (chunkId === 621) return "621.de562546cba574f542fa.entry.js";
/******/ 			if (chunkId === 2441) return "2441.4e58a1cf18d07546e7ed.entry.js";
/******/ 			if (chunkId === 8680) return "8680.af80f218afa9a89432b1.entry.js";
/******/ 			if (chunkId === 5618) return "5618.d2961c1894009c8fdd78.entry.js";
/******/ 			// return url for filenames based on template
/******/ 			return "" + {"3":"801697eb5ab3352c42e5","57":"2cf9bc4ac970720748c0","71":"436bf2271513b4c7a32c","112":"be71e978bbc620ffc544","128":"09f443525fca060387ee","158":"df7539aa250576fe4cf3","177":"f6ae69232927d7dd1a30","183":"911ddd624433d7f0867f","193":"caa55dcd203b3d778feb","215":"7254cd744b1245396db5","310":"1563948d372fecada150","312":"3aa1656a2b7ab28d62bb","326":"cef86dd8ed7e0b62f4b4","336":"d6bbf09be905d11fa889","347":"b35ff2a8a9d70b9fd5de","363":"35405942d4d50d2dd001","423":"557c77172a88145a2272","440":"ff0aad72b037cc9defda","452":"8b215d39080ff3e55537","547":"4dc809f2159ae94ed8f7","597":"ec532018b9e38cc071a5","600":"5f68b3d6f05a562607bc","665":"672eeab53744ef32f4f0","666":"63eb0d1379f1cf11e869","823":"858db93d79a30d077534","826":"3ac1e6742edc6811953f","992":"d36caa7e430c7b303adb","999":"ed18546530e1fb3fdb9c","1066":"ca1490ad3425672ef184","1075":"d25c694581c3e17f97cb","1095":"3680bcba10025d4cf3eb","1174":"bd6d2c538bb78fcea2f1","1185":"541be5b4ad9b7f276896","1193":"94f2747dbe0f34df1a7a","1243":"f76776ecfb675107b048","1256":"b16af0091358c002effa","1258":"31efb095399ce23d6823","1263":"e1ebf092ea50eba7a149","1293":"89308437860fa7983857","1351":"4c3819c3165f4d3cb3e5","1391":"30c621e164b402fa5061","1398":"1e4e92a480dc5b27ff7e","1493":"fb655e11f755bbed5b11","1568":"aee4a0774888c608f63d","1573":"f0c7235815aa435f15ed","1605":"281404507f98467fd7d8","1611":"b4b8698eb504196fb6f4","1899":"92b929932dfe7811cbdc","1921":"1a13273a93f7b61afaa9","1948":"ff270247f7ad048b37fc","2079":"f78da0b31a1f64da12a4","2085":"cb8b4569805b5fe072f8","2089":"887107b248bbaa4c0ed9","2105":"fe2fcb119f108e338ac6","2112":"a47ead904707252ecde0","2264":"3ca36ce2ac9c43b9b179","2267":"4dd9b2ded1ac4435aa8d","2306":"cfd5f3b8026da89441df","2403":"8634710eb87615cfc6bf","2439":"96da625d4cbc67a0064f","2646":"add1d27a3b3d4047480a","2698":"be06d926a61b2ff8096c","2713":"05813f52004aefacbcbe","2797":"b8837234f74badcbcd64","2862":"c3663bc60ac90c9908a0","2983":"27d10999d0c2bca2cf50","3037":"5c194e9031dd389a9309","3118":"65d2c72c220eb59c9e1a","3141":"23ce23648579690f9400","3208":"2a1954fa10b8dcb83d71","3240":"2a9272f662cb2de40c76","3265":"474d7d7c385d10a60693","3325":"a90266e90bac97af3781","3544":"3406c53cc0e4f33bea86","3558":"eb461a449988ae99c3c4","3567":"5825dfd50d3a6a9b1537","3606":"0adb7d4dc6ba6bad8d1c","3609":"1b8c59ecc4d58f21e636","3720":"2e567a88b8dd15938665","3749":"521d48dd5d1067665be3","3776":"de42ae55420f8a80a0d6","3871":"76ef1aed5605fc1068fb","3955":"a0676b5a618b6b82bf83","3985":"c54a8b32d2af0d76b8a2","4018":"f632572beb40c0f0c4d9","4022":"b93313322f39cedc352d","4139":"546708c7300dff5cd155","4173":"8cc1735a0cf473ee01de","4192":"30b753df2dcb91b99aec","4214":"5e3776bf7c1f1be8e5ea","4266":"d7fa57e367a6eee483b8","4273":"5945dbd1e7088899e37e","4295":"97a6a288c6f984c81a39","4319":"e2e186f2a0bb6f2700a5","4441":"6b94cf2e542a3093d95f","4458":"e3c0c688a5be0b5da06e","4473":"53278bbc4be882db0f5c","4474":"b3fc848bf220efa9b835","4486":"c6350c997873b7ae77c3","4502":"c7e192a6c812d3824709","4572":"406d9e4bca6fe5197002","4579":"ac82e0f4ac2bef7b5629","4625":"c9320cb8d2eee5ebaf4d","4662":"c9085feaf1017c91b23c","4667":"46d958dc7f86f6292bb4","4732":"a80344b7469a48cb86c7","4757":"022553145064f1ee2924","4758":"ec45f143d912ef8b9d0c","4787":"26e0d3bdef92a003e5e6","4794":"f98ef85464f11e5c88a7","4797":"45c4548eeeb8e2e5cc9e","4810":"188774d3ee3c04c9e188","4817":"f5e26b0709f74b69fa03","4832":"206aca9d039eebc52eed","4851":"6686fcc47a6c733deb22","4972":"c4f807af54c5a8aab56e","4980":"6f81cf5d8fbe428ac33f","4981":"437abb94798b28dd8787","5019":"4c8bc6d7aca72fd3d54a","5042":"0aafa94c0bfcbac9f627","5094":"07145907e8edae6fc15e","5181":"3eef88a45c9bcc76588f","5201":"80aa074f906eee87b0e6","5215":"eeaacec0d45a1417c41b","5224":"606b538b7d64335a7781","5226":"7bdd4c10a7916d067525","5249":"fd5ab9bdd08f50f27ff4","5278":"5f8aa9f6cc9941f7cd09","5281":"a4b56aaf274795e76afa","5296":"483b9960c2157584809a","5322":"f3dc5ba9b3f248da30c9","5330":"bad80526aedb7bc5338b","5335":"a91e9ee354fd2b99a954","5350":"edd537b2eaa4adec82a6","5359":"5800205e282e553ee535","5367":"6b1af8966839be51ec26","5507":"3af7db839801b0db65e4","5580":"a94f479ae8bf4d3ac0ad","5592":"b1e9861fc747cea7a61e","5641":"19537bf0b67de2dfd994","5656":"3c3e37c3744d33e5f0ef","5660":"ad0fac23a71d36e4a65d","5707":"429d9ebd98fff39e2608","5771":"a782fb996abf91074d7b","5777":"3f7c6ffbb107b72a71a2","5802":"4457a574df478455a15a","5816":"4d69301b12c619190f1d","5832":"f1d3435d5fe5517d1e0e","5838":"b957c2dc2db93662bc25","5859":"dd62c64a89295e6e9dc6","5962":"4af600b89ed207c88a75","5965":"5b15d49c692694b0d6b3","5972":"0da6cf793e3d1cc69358","5998":"d142a4b602af8829450c","6060":"04414903972982fec99b","6061":"8bffaef3cba5ee3078f0","6126":"4024bb2150eb5d99ed9f","6150":"ed773f8f5c293cb4c13b","6167":"8a7e1d8900669c9e319e","6207":"d46595d332f953beb63a","6254":"c26e672ffd1d2d6ffe82","6259":"8d8595114515a041f325","6303":"d4d6291f5d42a7f1652f","6371":"66ea24b6bd0ebafddd11","6420":"77ac4862a9a0de480eaa","6439":"b7bea1dad0b6731d8f08","6447":"2160abb016acabd01b58","6507":"ff107afb952cd5cd032a","6668":"82739982a9d0087df578","6682":"92912f99d5ec5e63356f","6740":"26b0de51671d1946cf5e","6758":"7650f3fae2f4e8e07dd1","6819":"2d98b68d6ff55d61f8d6","6883":"8ff31cb25f4cbcf65f8e","6977":"ddaf38e3b453b836afd2","6981":"9dcf9659f6e80537876c","7040":"f23d3eae2fac471d5482","7068":"d0bab68bf1b8fe890cb0","7183":"4ee4d78d1c0b53004df4","7219":"faf008b430dc64f745c8","7249":"05401ea8ee3aa4893e10","7405":"866ef25cb2164e793e19","7460":"830c4edc179abe920136","7584":"910bd8b8c2993335fa44","7610":"c4bd3575194e27e4dca4","7633":"8ccd0bf7f734d7240c09","7654":"29f53849422f19ebe336","7716":"e36d35dc706ec3bf3a29","7760":"4ef3263971e6365c79bf","7803":"2624b6fbf922d341ea04","7828":"97ca3ca635b9948cd3fd","7832":"4d9d2dbac38cc2b0fb90","7850":"ead55581e4ca5be56dc6","7893":"67599d461d8af3da59cc","7922":"c84d95f1054e63d7ffeb","8130":"226edc0441cd972bab15","8230":"936dd1f8ca7bd24752e2","8312":"dac04f73013472377c36","8349":"05f914d2483e65c1b585","8398":"d8f5829d0db6a5a634a6","8425":"52abf98953e003bb0152","8463":"48256f92f964b8bf79a4","8464":"1f3e4c0a11dcd1562253","8616":"600b0291f89941e46ffa","8682":"79102f702737cf867d5f","8695":"c96f012c5780a51d8755","8750":"5c1ccb4ce4d1981ec23a","8774":"e02b97d772da70855846","8883":"68eff701dbdd3308d52d","8903":"f6983d28c5358bb2d887","8924":"ab122e4614324e0c9fe6","8970":"6f72f94b5f107daae7bc","9013":"f709bdaee2140bc2a4c5","9034":"ec820efcb34a9691d251","9052":"b0285bb9d71534ce20b5","9109":"7e727e9ccc7def5a23a2","9131":"a4f1f4d9a0b03d1fdde3","9137":"ad306fb45fb6021f574e","9173":"45af7c8b31a7b80ef74a","9242":"ef10aede0f2a99f29aa6","9305":"60fe40ee626eb2ec1b5f","9325":"90c33d84118b47709bf1","9393":"654e00a37f7e2cf29ed8","9452":"f088992a3fa3edb33a05","9483":"c8dd378adf1da2c32289","9502":"267fb4a8efe8bf6fb29a","9510":"d0629cd97e7154454216","9558":"fe373e383af8c140dd79","9574":"05b040ad8dbbe4abaf1b","9678":"87c5db28d6d4ce263182","9767":"9b54247b72d042373f5e","9794":"2031cc537c157403943d","9811":"30707e6da4b523886fde","9857":"9ad7ca8fa3245e97322e","9885":"49de7a515c9384988b80","9893":"98379a9ecb5dea20e1cb","9938":"8d2986cd19fe8eb710be"}[chunkId] + ".chunk.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 7103) return "spa.4f3fe56f177ccf7105f6.entry.css";
/******/ 			// return url for filenames based on template
/******/ 			return "" + ({"452":"DashboardContainer","9502":"AlertList"}[chunkId] || chunkId) + "." + {"3":"801697eb5ab3352c42e5","128":"09f443525fca060387ee","423":"557c77172a88145a2272","452":"8b215d39080ff3e55537","823":"858db93d79a30d077534","1066":"ca1490ad3425672ef184","1193":"94f2747dbe0f34df1a7a","1243":"f76776ecfb675107b048","1391":"30c621e164b402fa5061","1921":"1a13273a93f7b61afaa9","2862":"c3663bc60ac90c9908a0","3609":"1b8c59ecc4d58f21e636","3776":"de42ae55420f8a80a0d6","4192":"30b753df2dcb91b99aec","4473":"53278bbc4be882db0f5c","5278":"5f8aa9f6cc9941f7cd09","5322":"f3dc5ba9b3f248da30c9","5965":"5b15d49c692694b0d6b3","6259":"8d8595114515a041f325","7040":"f23d3eae2fac471d5482","7219":"faf008b430dc64f745c8","7828":"97ca3ca635b9948cd3fd","7893":"67599d461d8af3da59cc","8903":"f6983d28c5358bb2d887","9502":"267fb4a8efe8bf6fb29a","9574":"05b040ad8dbbe4abaf1b","9885":"49de7a515c9384988b80","9893":"98379a9ecb5dea20e1cb"}[chunkId] + ".chunk.css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "superset:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/static/assets/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			7103: 0,
/******/ 			3: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"3":1,"128":1,"423":1,"452":1,"823":1,"1066":1,"1193":1,"1243":1,"1391":1,"1921":1,"2862":1,"3609":1,"3776":1,"4192":1,"4473":1,"5278":1,"5322":1,"5965":1,"6259":1,"7040":1,"7219":1,"7828":1,"7893":1,"8903":1,"9502":1,"9574":1,"9885":1,"9893":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			7103: 0,
/******/ 			3: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(3 != chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		__webpack_require__.H.j = (chunkId) => {
/******/ 			if((!__webpack_require__.o(installedChunks, chunkId) || installedChunks[chunkId] === undefined) && 3 != chunkId) {
/******/ 				installedChunks[chunkId] = null;
/******/ 				var link = document.createElement('link');
/******/ 		
/******/ 				link.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					link.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				link.rel = "preload";
/******/ 				link.as = "script";
/******/ 				link.href = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 				document.head.appendChild(link);
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk preload trigger */
/******/ 	(() => {
/******/ 		var chunkToChildrenMap = {
/******/ 			"5296": [
/******/ 				1216,
/******/ 				876,
/******/ 				8680,
/******/ 				193,
/******/ 				5618,
/******/ 				452
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.preload = (chunkId) => {
/******/ 			var chunks = chunkToChildrenMap[chunkId];
/******/ 			Array.isArray(chunks) && chunks.map(__webpack_require__.G);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, [1216,7550,4772,5110,4998,9968,7591,4654,1844,7341,741,995,3727,9602,3401,6962,4052,7843,2825,3375,4174,7173,3236], () => (__webpack_require__(26009)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [1216,7550,4772,5110,4998,9968,7591,4654,1844,7341,741,995,3727,9602,3401,6962,4052,7843,2825,3375,4174,7173,3236], () => (__webpack_require__(4453)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;