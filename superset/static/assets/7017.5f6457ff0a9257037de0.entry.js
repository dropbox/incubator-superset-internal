(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[7017],{

/***/ 25945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SuperChart)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/commonjs/index.js
var commonjs = __webpack_require__(47859);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/node_modules/@vx/responsive/esm/components/ParentSize.js
var ParentSize = __webpack_require__(10750);
// EXTERNAL MODULE: ./node_modules/reselect/es/index.js
var es = __webpack_require__(22222);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/dimension/parseLength.js
var parseLength = __webpack_require__(8439);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartComponentRegistrySingleton.js
var ChartComponentRegistrySingleton = __webpack_require__(47441);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartTransformPropsRegistrySingleton.js
var ChartTransformPropsRegistrySingleton = __webpack_require__(77979);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/models/ChartProps.js
var ChartProps = __webpack_require__(20783);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/components/createLoadableRenderer.js
var createLoadableRenderer = __webpack_require__(70463);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/chart/components/SuperChartCore.js


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

/* eslint-disable react/jsx-sort-default-props */








function IDENTITY(x) {
  return x;
}

const EMPTY = () => null;

const defaultProps = {
  id: '',
  className: '',
  preTransformProps: IDENTITY,
  overrideTransformProps: undefined,
  postTransformProps: IDENTITY,

  onRenderSuccess() {},

  onRenderFailure() {}

};
const BLANK_CHART_PROPS = new ChartProps/* default */.Z();
class SuperChartCore extends react.PureComponent {
  constructor(...args) {
    super(...args);
    this.container = void 0;
    this.processChartProps = (0,es/* createSelector */.P1)(input => input.chartProps, input => input.preTransformProps, input => input.transformProps, input => input.postTransformProps, (chartProps, pre = IDENTITY, transform = IDENTITY, post = IDENTITY) => post(transform(pre(chartProps))));
    this.createLoadableRenderer = (0,es/* createSelector */.P1)(input => input.chartType, input => input.overrideTransformProps, (chartType, overrideTransformProps) => {
      if (chartType) {
        const Renderer = (0,createLoadableRenderer/* default */.Z)({
          loader: {
            Chart: () => (0,ChartComponentRegistrySingleton/* default */.Z)().getAsPromise(chartType),
            transformProps: overrideTransformProps ? () => Promise.resolve(overrideTransformProps) : () => (0,ChartTransformPropsRegistrySingleton/* default */.Z)().getAsPromise(chartType)
          },
          loading: loadingProps => this.renderLoading(loadingProps, chartType),
          render: this.renderChart
        }); // Trigger preloading.

        Renderer.preload();
        return Renderer;
      }

      return EMPTY;
    });

    this.renderChart = (loaded, props) => {
      const {
        Chart,
        transformProps
      } = loaded;
      const {
        chartProps,
        preTransformProps,
        postTransformProps
      } = props;
      return (0,emotion_react_browser_esm.jsx)(Chart, this.processChartProps({
        chartProps,
        preTransformProps,
        transformProps,
        postTransformProps
      }));
    };

    this.renderLoading = (loadingProps, chartType) => {
      const {
        error
      } = loadingProps;

      if (error) {
        return (0,emotion_react_browser_esm.jsx)("div", {
          className: "alert alert-warning",
          role: "alert"
        }, (0,emotion_react_browser_esm.jsx)("strong", null, "ERROR"), "\xA0", (0,emotion_react_browser_esm.jsx)("code", null, "chartType=\"", chartType, "\""), " \u2014", error.toString());
      }

      return null;
    };

    this.setRef = container => {
      this.container = container;
    };
  }

  render() {
    const {
      id,
      className,
      preTransformProps,
      postTransformProps,
      chartProps = BLANK_CHART_PROPS,
      onRenderSuccess,
      onRenderFailure
    } = this.props; // Create LoadableRenderer and start preloading
    // the lazy-loaded Chart components

    const Renderer = this.createLoadableRenderer(this.props); // Do not render if chartProps is set to null.
    // but the pre-loading has been started in this.createLoadableRenderer
    // to prepare for rendering once chartProps becomes available.

    if (chartProps === null) {
      return null;
    }

    const containerProps = {};

    if (id) {
      containerProps.id = id;
    }

    if (className) {
      containerProps.className = className;
    }

    return (0,emotion_react_browser_esm.jsx)("div", _extends({}, containerProps, {
      ref: this.setRef
    }), (0,emotion_react_browser_esm.jsx)(Renderer, {
      preTransformProps: preTransformProps,
      postTransformProps: postTransformProps,
      chartProps: chartProps,
      onRenderSuccess: onRenderSuccess,
      onRenderFailure: onRenderFailure
    }));
  }

}
SuperChartCore.propTypes = {
  id: (prop_types_default()).string,
  className: (prop_types_default()).string,
  chartType: (prop_types_default()).string.isRequired
};
SuperChartCore.defaultProps = defaultProps;
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/chart/components/FallbackComponent.js
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


const CONTAINER_STYLE = {
  backgroundColor: '#000',
  color: '#fff',
  overflow: 'auto',
  padding: 32
};
function FallbackComponent({
  componentStack,
  error,
  height,
  width
}) {
  return (0,emotion_react_browser_esm.jsx)("div", {
    style: { ...CONTAINER_STYLE,
      height,
      width
    }
  }, (0,emotion_react_browser_esm.jsx)("div", null, (0,emotion_react_browser_esm.jsx)("div", null, (0,emotion_react_browser_esm.jsx)("b", null, "Oops! An error occured!")), (0,emotion_react_browser_esm.jsx)("code", null, error ? error.toString() : 'Unknown Error')), componentStack && (0,emotion_react_browser_esm.jsx)("div", null, (0,emotion_react_browser_esm.jsx)("b", null, "Stack Trace:"), (0,emotion_react_browser_esm.jsx)("code", null, componentStack.split('\n').map(row => (0,emotion_react_browser_esm.jsx)("div", {
    key: row
  }, row)))));
}
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/chart/components/NoResultsComponent.js


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



const MESSAGE_STYLES = {
  maxWidth: 800
};
const TITLE_STYLES = {
  fontSize: 16,
  fontWeight: 'bold',
  paddingBottom: 8
};
const BODY_STYLES = {
  fontSize: 14
};
const MIN_WIDTH_FOR_BODY = 250;

const generateContainerStyles = (height, width) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height,
  justifyContent: 'center',
  padding: 16,
  textAlign: 'center',
  width
});

const NoResultsComponent = ({
  className,
  height,
  id,
  width
}) => {
  const containerStyles = (0,react.useMemo)(() => generateContainerStyles(height, width), [height, width]); // render the body if the width is auto/100% or greater than 250 pixels

  const shouldRenderBody = typeof width === 'string' || width > MIN_WIDTH_FOR_BODY;
  const BODY_STRING = (0,TranslatorSingleton.t)('No results were returned for this query. If you expected results to be returned, ensure any filters are configured properly and the datasource contains data for the selected time range.');
  return (0,emotion_react_browser_esm.jsx)("div", {
    className: className,
    id: id,
    style: containerStyles,
    title: shouldRenderBody ? undefined : BODY_STRING
  }, (0,emotion_react_browser_esm.jsx)("div", {
    style: MESSAGE_STYLES
  }, (0,emotion_react_browser_esm.jsx)("div", {
    style: TITLE_STYLES
  }, (0,TranslatorSingleton.t)('No Results')), shouldRenderBody && (0,emotion_react_browser_esm.jsx)("div", {
    style: BODY_STYLES
  }, BODY_STRING)));
};

NoResultsComponent.propTypes = {
  className: (prop_types_default()).string,
  height: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired,
  id: (prop_types_default()).string,
  width: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired
};
/* harmony default export */ const components_NoResultsComponent = (NoResultsComponent);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/chart/components/SuperChart.js


function SuperChart_extends() { SuperChart_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SuperChart_extends.apply(this, arguments); }

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










const SuperChart_defaultProps = {
  FallbackComponent: FallbackComponent,
  height: 400,
  width: '100%',
  enableNoResults: true
};
class SuperChart extends react.PureComponent {
  constructor(...args) {
    super(...args);
    this.core = void 0;
    this.createChartProps = ChartProps/* default.createSelector */.Z.createSelector();
    this.parseDimension = (0,es/* createSelector */.P1)(({
      width
    }) => width, ({
      height
    }) => height, (width, height) => {
      // Parse them in case they are % or 'auto'
      const widthInfo = (0,parseLength/* default */.Z)(width);
      const heightInfo = (0,parseLength/* default */.Z)(height);
      const boxHeight = heightInfo.isDynamic ? `${heightInfo.multiplier * 100}%` : heightInfo.value;
      const boxWidth = widthInfo.isDynamic ? `${widthInfo.multiplier * 100}%` : widthInfo.value;
      const style = {
        height: boxHeight,
        width: boxWidth
      }; // bounding box will ensure that when one dimension is not dynamic
      // e.g. height = 300
      // the auto size will be bound to that value instead of being 100% by default
      // e.g. height: 300 instead of height: '100%'

      const BoundingBox = widthInfo.isDynamic && heightInfo.isDynamic && widthInfo.multiplier === 1 && heightInfo.multiplier === 1 ? react.Fragment : ({
        children
      }) => (0,emotion_react_browser_esm.jsx)("div", {
        style: style
      }, children);
      return {
        BoundingBox,
        heightInfo,
        widthInfo
      };
    });

    this.setRef = core => {
      this.core = core;
    };
  }

  renderChart(width, height) {
    const {
      id,
      className,
      chartType,
      preTransformProps,
      overrideTransformProps,
      postTransformProps,
      onRenderSuccess,
      onRenderFailure,
      disableErrorBoundary,
      FallbackComponent,
      onErrorBoundary,
      Wrapper,
      queriesData,
      enableNoResults,
      ...rest
    } = this.props;
    const chartProps = this.createChartProps({ ...rest,
      queriesData,
      height,
      width
    });
    let chart; // Render the no results component if the query data is null or empty

    const noResultQueries = enableNoResults && (!queriesData || queriesData.every(({
      data
    }) => !data || Array.isArray(data) && data.length === 0));

    if (noResultQueries) {
      chart = (0,emotion_react_browser_esm.jsx)(components_NoResultsComponent, {
        id: id,
        className: className,
        height: height,
        width: width
      });
    } else {
      const chartWithoutWrapper = (0,emotion_react_browser_esm.jsx)(SuperChartCore, {
        ref: this.setRef,
        id: id,
        className: className,
        chartType: chartType,
        chartProps: chartProps,
        preTransformProps: preTransformProps,
        overrideTransformProps: overrideTransformProps,
        postTransformProps: postTransformProps,
        onRenderSuccess: onRenderSuccess,
        onRenderFailure: onRenderFailure
      });

      chart = Wrapper ? (0,emotion_react_browser_esm.jsx)(Wrapper, {
        width: width,
        height: height
      }, chartWithoutWrapper) : chartWithoutWrapper;
    } // Include the error boundary by default unless it is specifically disabled.


    return disableErrorBoundary === true ? chart : (0,emotion_react_browser_esm.jsx)(commonjs/* default */.ZP, {
      FallbackComponent: props => (0,emotion_react_browser_esm.jsx)(FallbackComponent, SuperChart_extends({
        width: width,
        height: height
      }, props)),
      onError: onErrorBoundary
    }, chart);
  }

  render() {
    const {
      heightInfo,
      widthInfo,
      BoundingBox
    } = this.parseDimension(this.props); // If any of the dimension is dynamic, get parent's dimension

    if (widthInfo.isDynamic || heightInfo.isDynamic) {
      const {
        debounceTime
      } = this.props;
      return (0,emotion_react_browser_esm.jsx)(BoundingBox, null, (0,emotion_react_browser_esm.jsx)(ParentSize/* default */.Z, {
        debounceTime: debounceTime
      }, ({
        width,
        height
      }) => this.renderChart(widthInfo.isDynamic ? Math.floor(width) : widthInfo.value, heightInfo.isDynamic ? Math.floor(height) : heightInfo.value)));
    }

    return this.renderChart(widthInfo.value, heightInfo.value);
  }

}
SuperChart.propTypes = {
  disableErrorBoundary: (prop_types_default()).bool,
  debounceTime: (prop_types_default()).number,
  enableNoResults: (prop_types_default()).bool,
  FallbackComponent: (prop_types_default()).elementType,
  showOverflow: (prop_types_default()).bool,
  height: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  width: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  Wrapper: (prop_types_default()).elementType
};
SuperChart.defaultProps = SuperChart_defaultProps;

/***/ }),

/***/ 70463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createLoadableRenderer)
/* harmony export */ });
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68356);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_0__);
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

const defaultProps = {
  onRenderFailure() {},

  onRenderSuccess() {}

};
function createLoadableRenderer(options) {
  const LoadableRenderer = react_loadable__WEBPACK_IMPORTED_MODULE_0___default().Map(options); // Extends the behavior of LoadableComponent to provide post-render listeners

  class CustomLoadableRenderer extends LoadableRenderer {
    componentDidMount() {
      this.afterRender();
    }

    componentDidUpdate() {
      this.afterRender();
    }

    afterRender() {
      const {
        loaded,
        loading,
        error
      } = this.state;
      const {
        onRenderFailure,
        onRenderSuccess
      } = this.props;

      if (!loading) {
        if (error) {
          onRenderFailure(error);
        } else if (loaded && Object.keys(loaded).length > 0) {
          onRenderSuccess();
        }
      }
    }

  }

  CustomLoadableRenderer.defaultProps = void 0;
  CustomLoadableRenderer.defaultProps = defaultProps;
  CustomLoadableRenderer.preload = LoadableRenderer.preload;
  return CustomLoadableRenderer;
}

/***/ }),

/***/ 73834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ reactify)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11965);


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
 // TODO: Note that id and className can collide between Props and ReactifyProps
// leading to (likely) unexpected behaviors. We should either require Props to not
// contain an id/className, or not combine them (via intersection), instead preferring
// wrapping (composition). As an example:
// interface MyProps {
//   id: number;
// }
// function myRender(container: HTMLDivElement, props: Readonly<MyProps>): void {
//   props.id // unusable: id is string & number
// }
// new (reactify(myRender))({ id: 5 }); // error: id has to be string & number


function reactify(renderFn, callbacks) {
  class ReactifiedComponent extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
      super(props);
      this.container = void 0;
      this.setContainerRef = this.setContainerRef.bind(this);
    }

    componentDidMount() {
      this.execute();
    }

    componentDidUpdate() {
      this.execute();
    }

    componentWillUnmount() {
      this.container = undefined;

      if (callbacks != null && callbacks.componentWillUnmount) {
        callbacks.componentWillUnmount.bind(this)();
      }
    }

    setContainerRef(ref) {
      this.container = ref;
    }

    execute() {
      if (this.container) {
        renderFn(this.container, this.props);
      }
    }

    render() {
      const {
        id,
        className
      } = this.props;
      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        ref: this.setContainerRef,
        id: id,
        className: className
      });
    }

  }

  ReactifiedComponent.propTypes = {
    id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
  };
  const ReactifiedClass = ReactifiedComponent;

  if (renderFn.displayName) {
    ReactifiedClass.displayName = renderFn.displayName;
  } // eslint-disable-next-line react/forbid-foreign-prop-types


  if (renderFn.propTypes) {
    ReactifiedClass.propTypes = { ...ReactifiedClass.propTypes,
      ...renderFn.propTypes
    };
  }

  if (renderFn.defaultProps) {
    ReactifiedClass.defaultProps = renderFn.defaultProps;
  }

  return ReactifiedComponent;
}

/***/ }),

/***/ 40702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChartMetadata)
/* harmony export */ });
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
class ChartMetadata {
  constructor(config) {
    this.name = void 0;
    this.canBeAnnotationTypes = void 0;
    this.canBeAnnotationTypesLookup = void 0;
    this.credits = void 0;
    this.description = void 0;
    this.show = void 0;
    this.supportedAnnotationTypes = void 0;
    this.thumbnail = void 0;
    this.useLegacyApi = void 0;
    this.behaviors = void 0;
    this.datasourceCount = void 0;
    this.enableNoResults = void 0;
    this.deprecated = void 0;
    this.exampleGallery = void 0;
    this.tags = void 0;
    this.category = void 0;
    const {
      name,
      canBeAnnotationTypes = [],
      credits = [],
      description = '',
      show = true,
      supportedAnnotationTypes = [],
      thumbnail,
      useLegacyApi = false,
      behaviors = [],
      datasourceCount = 1,
      enableNoResults = true,
      deprecated = false,
      exampleGallery = [],
      tags = [],
      category = null
    } = config;
    this.name = name;
    this.credits = credits;
    this.description = description;
    this.show = show;
    this.canBeAnnotationTypes = canBeAnnotationTypes;
    this.canBeAnnotationTypesLookup = canBeAnnotationTypes.reduce((prev, type) => {
      const lookup = prev;
      lookup[type] = true;
      return lookup;
    }, {});
    this.supportedAnnotationTypes = supportedAnnotationTypes;
    this.thumbnail = thumbnail;
    this.useLegacyApi = useLegacyApi;
    this.behaviors = behaviors;
    this.datasourceCount = datasourceCount;
    this.enableNoResults = enableNoResults;
    this.deprecated = deprecated;
    this.exampleGallery = exampleGallery;
    this.tags = tags;
    this.category = category;
  }

  canBeAnnotationType(type) {
    return this.canBeAnnotationTypesLookup[type] || false;
  }

  clone() {
    return new ChartMetadata(this);
  }

}

/***/ }),

/***/ 15179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChartPlugin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26942);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65154);
/* harmony import */ var _registries_ChartMetadataRegistrySingleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38849);
/* harmony import */ var _registries_ChartBuildQueryRegistrySingleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81395);
/* harmony import */ var _registries_ChartComponentRegistrySingleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47441);
/* harmony import */ var _registries_ChartControlPanelRegistrySingleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14299);
/* harmony import */ var _registries_ChartTransformPropsRegistrySingleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77979);
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








function IDENTITY(x) {
  return x;
}

const EMPTY = {};

/**
 * Loaders of the form `() => import('foo')` may return esmodules
 * which require the value to be extracted as `module.default`
 * */
function sanitizeLoader(loader) {
  return () => {
    const loaded = loader();
    return loaded instanceof Promise ? loaded.then(module => 'default' in module && module.default || module) : loaded;
  };
}

class ChartPlugin extends ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z {
  constructor(config) {
    super();
    this.controlPanel = void 0;
    this.metadata = void 0;
    this.loadBuildQuery = void 0;
    this.loadTransformProps = void 0;
    this.loadChart = void 0;
    const {
      metadata,
      buildQuery,
      loadBuildQuery,
      transformProps = IDENTITY,
      loadTransformProps,
      Chart,
      loadChart,
      controlPanel = EMPTY
    } = config;
    this.controlPanel = controlPanel;
    this.metadata = metadata;
    this.loadBuildQuery = loadBuildQuery && sanitizeLoader(loadBuildQuery) || buildQuery && sanitizeLoader(() => buildQuery) || undefined;
    this.loadTransformProps = sanitizeLoader(loadTransformProps ?? (() => transformProps));

    if (loadChart) {
      this.loadChart = sanitizeLoader(loadChart);
    } else if (Chart) {
      this.loadChart = () => Chart;
    } else {
      throw new Error('Chart or loadChart is required');
    }
  }

  register() {
    const key = this.config.key || (0,___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('config.key');
    (0,_registries_ChartMetadataRegistrySingleton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().registerValue(key, this.metadata);
    (0,_registries_ChartComponentRegistrySingleton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().registerLoader(key, this.loadChart);
    (0,_registries_ChartControlPanelRegistrySingleton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)().registerValue(key, this.controlPanel);
    (0,_registries_ChartTransformPropsRegistrySingleton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().registerLoader(key, this.loadTransformProps);

    if (this.loadBuildQuery) {
      (0,_registries_ChartBuildQueryRegistrySingleton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)().registerLoader(key, this.loadBuildQuery);
    }

    return this;
  }

  unregister() {
    const key = this.config.key || (0,___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('config.key');
    (0,_registries_ChartMetadataRegistrySingleton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().remove(key);
    (0,_registries_ChartComponentRegistrySingleton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().remove(key);
    (0,_registries_ChartControlPanelRegistrySingleton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)().remove(key);
    (0,_registries_ChartTransformPropsRegistrySingleton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().remove(key);
    (0,_registries_ChartBuildQueryRegistrySingleton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)().remove(key);
    return this;
  }

  configure(config, replace) {
    super.configure(config, replace);
    return this;
  }

}

/***/ }),

/***/ 20783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChartProps)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22222);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14181);
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

/** Type checking is disabled for this file due to reselect only supporting
 * TS declarations for selectors with up to 12 arguments. */
// @ts-nocheck


const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 600;
class ChartProps {
  constructor(config = {}) {
    this.annotationData = void 0;
    this.datasource = void 0;
    this.rawDatasource = void 0;
    this.initialValues = void 0;
    this.formData = void 0;
    this.rawFormData = void 0;
    this.height = void 0;
    this.hooks = void 0;
    this.ownState = void 0;
    this.filterState = void 0;
    this.queriesData = void 0;
    this.width = void 0;
    this.behaviors = void 0;
    this.appSection = void 0;
    this.isRefreshing = void 0;
    const {
      annotationData = {},
      datasource = {},
      formData = {},
      hooks = {},
      ownState = {},
      filterState = {},
      initialValues = {},
      queriesData = [],
      behaviors = [],
      width = DEFAULT_WIDTH,
      height = DEFAULT_HEIGHT,
      appSection,
      isRefreshing
    } = config;
    this.width = width;
    this.height = height;
    this.annotationData = annotationData;
    this.datasource = (0,___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(datasource);
    this.rawDatasource = datasource;
    this.formData = (0,___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(formData);
    this.rawFormData = formData;
    this.hooks = hooks;
    this.initialValues = initialValues;
    this.queriesData = queriesData;
    this.ownState = ownState;
    this.filterState = filterState;
    this.behaviors = behaviors;
    this.appSection = appSection;
    this.isRefreshing = isRefreshing;
  }

} // eslint-disable-next-line func-name-matching

ChartProps.createSelector = void 0;

ChartProps.createSelector = function create() {
  return (0,reselect__WEBPACK_IMPORTED_MODULE_0__/* .createSelector */ .P1)(input => input.annotationData, input => input.datasource, input => input.formData, input => input.height, input => input.hooks, input => input.initialValues, input => input.queriesData, input => input.width, input => input.ownState, input => input.filterState, input => input.behaviors, input => input.appSection, input => input.isRefreshing, (annotationData, datasource, formData, height, hooks, initialValues, queriesData, width, ownState, filterState, behaviors, appSection, isRefreshing) => new ChartProps({
    annotationData,
    datasource,
    formData,
    height,
    hooks,
    initialValues,
    queriesData,
    ownState,
    filterState,
    width,
    behaviors,
    appSection,
    isRefreshing
  }));
};

/***/ }),

/***/ 47441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8018);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23630);
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


class ChartComponentRegistry extends ___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  constructor() {
    super({
      name: 'ChartComponent',
      overwritePolicy: ___WEBPACK_IMPORTED_MODULE_0__/* .OverwritePolicy.WARN */ .r.WARN
    });
  }

}

const getInstance = (0,___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(ChartComponentRegistry);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getInstance);

/***/ }),

/***/ 77979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8018);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23630);
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


class ChartTransformPropsRegistry extends ___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  constructor() {
    super({
      name: 'ChartTransformProps',
      overwritePolicy: ___WEBPACK_IMPORTED_MODULE_0__/* .OverwritePolicy.WARN */ .r.WARN
    });
  }

}

const getInstance = (0,___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(ChartTransformPropsRegistry);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getInstance);

/***/ }),

/***/ 43734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E8": () => (/* binding */ BRAND_COLOR),
  "CW": () => (/* reexport */ airbnb),
  "kI": () => (/* reexport */ CategoricalColorNamespace),
  "A5": () => (/* reexport */ CategoricalColorScale/* default */.Z),
  "Gz": () => (/* reexport */ d3/* default */.Z),
  "Ys": () => (/* reexport */ echarts),
  "$5": () => (/* reexport */ google),
  "Dg": () => (/* reexport */ lyft),
  "XF": () => (/* reexport */ preset),
  "gE": () => (/* reexport */ CategoricalScheme/* default */.Z),
  "yE": () => (/* reexport */ superset),
  "zR": () => (/* reexport */ ColorSchemeRegistry/* default */.Z),
  "UM": () => (/* reexport */ common),
  "Bs": () => (/* reexport */ sequential_d3/* default */.Z),
  "T8": () => (/* reexport */ SequentialScheme/* default */.Z),
  "B_": () => (/* reexport */ CategoricalSchemeRegistrySingleton/* default */.Z),
  "j3": () => (/* reexport */ SequentialSchemeRegistrySingleton/* default */.Z)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalColorNamespace.js
var CategoricalColorNamespace = __webpack_require__(83527);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalColorScale.js
var CategoricalColorScale = __webpack_require__(35853);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalScheme.js
var CategoricalScheme = __webpack_require__(80470);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalSchemeRegistrySingleton.js
var CategoricalSchemeRegistrySingleton = __webpack_require__(34042);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/SequentialSchemeRegistrySingleton.js
var SequentialSchemeRegistrySingleton = __webpack_require__(67542);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/SequentialScheme.js
var SequentialScheme = __webpack_require__(90606);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/ColorSchemeRegistry.js
var ColorSchemeRegistry = __webpack_require__(89727);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/color/colorSchemes/categorical/airbnb.js
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

const schemes = [{
  id: 'bnbColors',
  label: 'Airbnb Colors',
  colors: ['#ff5a5f', // rausch
  '#7b0051', // hackb
  '#007A87', // kazan
  '#00d1c1', // babu
  '#8ce071', // lima
  '#ffb400', // beach
  '#b4a76c', // barol
  '#ff8083', '#cc0086', '#00a1b3', '#00ffeb', '#bbedab', '#ffd266', '#cbc29a', '#ff3339', '#ff1ab1', '#005c66', '#00b3a5', '#55d12e', '#b37e00', '#988b4e']
}].map(s => new CategoricalScheme/* default */.Z(s));
/* harmony default export */ const airbnb = (schemes);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/colorSchemes/categorical/d3.js
var d3 = __webpack_require__(62234);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/color/colorSchemes/categorical/echarts.js
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

const echarts_schemes = [{
  id: 'echarts4Colors',
  label: 'ECharts v4.x Colors',
  colors: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3']
}, {
  id: 'echarts5Colors',
  label: 'ECharts v5.x Colors',
  colors: ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE', '#3BA272', '#FC8452', '#9A60B4', '#EA7CCC']
}].map(s => new CategoricalScheme/* default */.Z(s));
/* harmony default export */ const echarts = (echarts_schemes);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/color/colorSchemes/categorical/google.js
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

const google_schemes = [{
  id: 'googleCategory10c',
  label: 'Google Category 10c',
  colors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00', '#b82e2e', '#316395']
}, {
  id: 'googleCategory20c',
  label: 'Google Category 20c',
  colors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00', '#b82e2e', '#316395', '#994499', '#22aa99', '#aaaa11', '#6633cc', '#e67300', '#8b0707', '#651067', '#329262', '#5574a6', '#3b3eac']
}].map(s => new CategoricalScheme/* default */.Z(s));
/* harmony default export */ const google = (google_schemes);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/color/colorSchemes/categorical/lyft.js
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

const lyft_schemes = [{
  id: 'lyftColors',
  label: 'Lyft Colors',
  colors: ['#EA0B8C', '#6C838E', '#29ABE2', '#33D9C1', '#9DACB9', '#7560AA', '#2D5584', '#831C4A', '#333D47', '#AC2077']
}].map(s => new CategoricalScheme/* default */.Z(s));
/* harmony default export */ const lyft = (lyft_schemes);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/color/colorSchemes/categorical/preset.js
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

const preset_schemes = [{
  id: 'presetColors',
  label: 'Preset Colors',
  colors: [// Full color
  '#6BD3B3', '#FCC550', '#408184', '#66CBE2', '#EE5960', '#484E5A', '#FF874E', '#03748E', '#C9BBAB', '#B17BAA', // Pastels
  '#B5E9D9', '#FDE2A7', '#9FC0C1', '#B2E5F0', '#F6ACAF', '#A4A6AC', '#FFC3A6', '#81B9C6', '#E4DDD5', '#D9BDD5']
}].map(s => new CategoricalScheme/* default */.Z(s));
/* harmony default export */ const preset = (preset_schemes);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/color/colorSchemes/categorical/superset.js
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

const superset_schemes = [{
  id: 'supersetColors',
  label: 'Superset Colors',
  colors: [// Full color
  '#1FA8C9', '#454E7C', '#5AC189', '#FF7F44', '#666666', '#E04355', '#FCC700', '#A868B7', '#3CCCCB', '#A38F79', // Pastels
  '#8FD3E4', '#A1A6BD', '#ACE1C4', '#FEC0A1', '#B2B2B2', '#EFA1AA', '#FDE380', '#D3B3DA', '#9EE5E5', '#D1C6BC']
}].map(s => new CategoricalScheme/* default */.Z(s));
/* harmony default export */ const superset = (superset_schemes);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/color/colorSchemes/categorical/index.js
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







;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/color/colorSchemes/sequential/common.js
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

const common_schemes = [{
  id: 'blue_white_yellow',
  label: 'blue/white/yellow',
  colors: ['#00d1c1', 'white', '#ffb400']
}, {
  id: 'fire',
  colors: ['white', 'yellow', 'red', 'black']
}, {
  id: 'white_black',
  label: 'white/black',
  colors: ['white', 'black']
}, {
  id: 'black_white',
  label: 'black/white',
  colors: ['black', 'white']
}, {
  id: 'dark_blue',
  label: 'dark blues',
  colors: ['#EBF5F8', '#6BB1CC', '#357E9B', '#1B4150', '#092935']
}, {
  id: 'pink_grey',
  label: 'pink/grey',
  isDiverging: true,
  colors: ['#E70B81', '#FAFAFA', '#666666']
}, {
  id: 'greens',
  colors: ['#ffffcc', '#78c679', '#006837']
}, {
  id: 'purples',
  colors: ['#f2f0f7', '#9e9ac8', '#54278f']
}, {
  id: 'oranges',
  colors: ['#fef0d9', '#fc8d59', '#b30000']
}, {
  id: 'red_yellow_blue',
  label: 'red/yellow/blue',
  isDiverging: true,
  colors: ['#d7191c', '#fdae61', '#ffffbf', '#abd9e9', '#2c7bb6']
}, {
  id: 'brown_white_green',
  label: 'brown/white/green',
  isDiverging: true,
  colors: ['#a6611a', '#dfc27d', '#f5f5f5', '#80cdc1', '#018571']
}, {
  id: 'purple_white_green',
  label: 'purple/white/green',
  isDiverging: true,
  colors: ['#7b3294', '#c2a5cf', '#f7f7f7', '#a6dba0', '#008837']
}, {
  id: 'superset_seq_1',
  label: 'Superset Sequential #1',
  isDiverging: false,
  colors: ['#F4FAD4', '#D7F1AC', '#A9E3AF', '#82CDBB', '#63C1BF', '#1FA8C9', '#2367AC', '#2A2D84', '#251354', '#050415']
}, {
  id: 'superset_seq_2',
  label: 'Superset Sequential #2',
  isDiverging: false,
  colors: ['#FBF1B4', '#FDD093', '#FEAD71', '#FF7F44', '#E04355', '#C53D6F', '#952B7B', '#4F167B', '#251354', '#050415']
}, {
  id: 'superset_div_1',
  label: 'Superset Diverging #1',
  isDiverging: false,
  colors: ['#E04355', '#E87180', '#EFA1AA', '#F7D0D4', '#F6F6F7', '#C8E9F1', '#8FD3E4', '#58BDD7', '#1FA8C9']
}, {
  id: 'superset_div_2',
  label: 'Superset Diverging #2',
  isDiverging: false,
  colors: ['#FF7F44', '#FF9E72', '#FEC0A1', '#FFDFD0', '#F6F6F7', '#C8E9F1', '#8FD3E4', '#58BDD7', '#1FA8C9']
}, {
  id: 'preset_seq_1',
  label: 'Preset Sequential #1',
  isDiverging: false,
  colors: ['#F3FAEB', '#DEF2D7', '#CAEAC4', '#98DEBC', '#69D3B5', '#4AA59D', '#287886', '#0D5B6A', '#03273F', '#03273F']
}, {
  id: 'preset_seq_2',
  label: 'Preset Sequential #2',
  isDiverging: false,
  colors: ['#FEECE8', '#FDE2DA', '#FCCEC2', '#F998AA', '#F76896', '#D13186', '#AC0378', '#790071', '#43026C', '#050415']
}, {
  id: 'preset_div_1',
  label: 'Preset Diverging #1',
  isDiverging: false,
  colors: ['#B17BAA', '#C59DC0', '#D9BDD5', '#D9BDD5', '#F6F6F7', '#CBEFE5', '#98DECA', '#64D0B0', '#32BE96']
}, {
  id: 'preset_div_2',
  label: 'Preset Diverging #2',
  isDiverging: false,
  colors: ['#CB5171', '#D87C94', '#E5A8B7', '#F2D3DB', '#F6F6F7', '#CEE8EC', '#9CD1D8', '#6CBAC6', '#3AA3B2']
}, {
  id: 'echarts_gradient',
  label: 'ECharts gradient',
  isDiverging: false,
  colors: ['#f6EFA6', '#D88273', '#BF444C']
}].map(s => new SequentialScheme/* default */.Z(s));
/* harmony default export */ const common = (common_schemes);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/colorSchemes/sequential/d3.js
var sequential_d3 = __webpack_require__(72410);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/color/colorSchemes/sequential/index.js
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


;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/color/colorSchemes/index.js
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


;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/color/index.js
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









const BRAND_COLOR = '#00A699';

/***/ }),

/***/ 84402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ computeMaxFontSize)
/* harmony export */ });
/* harmony import */ var _getTextDimension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17614);
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


function decreaseSizeUntil(startSize, computeDimension, condition) {
  let size = startSize;
  let dimension = computeDimension(size);

  while (!condition(dimension)) {
    size -= 1;
    dimension = computeDimension(size);
  }

  return size;
}

function computeMaxFontSize(input) {
  const {
    idealFontSize,
    maxWidth,
    maxHeight,
    style,
    ...rest
  } = input;
  let size;

  if (idealFontSize !== undefined && idealFontSize !== null) {
    size = idealFontSize;
  } else if (maxHeight === undefined || maxHeight === null) {
    throw new Error('You must specify at least one of maxHeight or idealFontSize');
  } else {
    size = Math.floor(maxHeight);
  }

  function computeDimension(fontSize) {
    return (0,_getTextDimension__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({ ...rest,
      style: { ...style,
        fontSize: `${fontSize}px`
      }
    });
  }

  if (maxWidth !== undefined && maxWidth !== null) {
    size = decreaseSizeUntil(size, computeDimension, dim => dim.width <= maxWidth);
  }

  if (maxHeight !== undefined && maxHeight !== null) {
    size = decreaseSizeUntil(size, computeDimension, dim => dim.height <= maxHeight);
  }

  return size;
}

/***/ }),

/***/ 17614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getTextDimension)
/* harmony export */ });
/* harmony import */ var _svg_updateTextNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4520);
/* harmony import */ var _svg_getBBoxCeil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81318);
/* harmony import */ var _svg_factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83698);
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



function getTextDimension(input, defaultDimension) {
  const {
    text,
    className,
    style,
    container
  } = input; // Empty string

  if (text.length === 0) {
    return {
      height: 0,
      width: 0
    };
  }

  const svgNode = _svg_factories__WEBPACK_IMPORTED_MODULE_0__/* .hiddenSvgFactory.createInContainer */ .Y.createInContainer(container);
  const textNode = _svg_factories__WEBPACK_IMPORTED_MODULE_0__/* .textFactory.createInContainer */ .S.createInContainer(svgNode);
  (0,_svg_updateTextNode__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(textNode, {
    className,
    style,
    text
  });
  const dimension = (0,_svg_getBBoxCeil__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(textNode, defaultDimension); // The nodes are added to the DOM briefly only to make getBBox works.
  // (If not added to DOM getBBox will always return 0x0.)
  // After that the svg nodes are not needed.
  // We delay its removal in case there are subsequent calls to this function
  // that can reuse the svg nodes.
  // Experiments have shown that reusing existing nodes
  // instead of deleting and adding new ones can save lot of time.

  setTimeout(() => {
    _svg_factories__WEBPACK_IMPORTED_MODULE_0__/* .textFactory.removeFromContainer */ .S.removeFromContainer(svgNode);
    _svg_factories__WEBPACK_IMPORTED_MODULE_0__/* .hiddenSvgFactory.removeFromContainer */ .Y.removeFromContainer(container);
  }, 500);
  return dimension;
}

/***/ }),

/***/ 8439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ parseLength)
/* harmony export */ });
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
const HUNDRED_PERCENT = {
  isDynamic: true,
  multiplier: 1
};
function parseLength(input) {
  if (input === 'auto' || input === '100%') {
    return HUNDRED_PERCENT;
  }

  if (typeof input === 'string' && input.length > 0 && input[input.length - 1] === '%') {
    return {
      isDynamic: true,
      multiplier: parseFloat(input) / 100
    };
  }

  const value = typeof input === 'number' ? input : parseFloat(input);
  return {
    isDynamic: false,
    value
  };
}

/***/ }),

/***/ 24003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LazyFactory)
/* harmony export */ });
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
class LazyFactory {
  constructor(factoryFn) {
    this.activeNodes = new Map();
    this.factoryFn = void 0;
    this.factoryFn = factoryFn;
  }

  createInContainer(container = document.body) {
    if (this.activeNodes.has(container)) {
      const entry = this.activeNodes.get(container);
      entry.counter += 1;
      return entry.node;
    }

    const node = this.factoryFn();
    container.append(node);
    this.activeNodes.set(container, {
      counter: 1,
      node
    });
    return node;
  }

  removeFromContainer(container = document.body) {
    if (this.activeNodes.has(container)) {
      const entry = this.activeNodes.get(container);
      entry.counter -= 1;

      if (entry.counter === 0) {
        container.removeChild(entry.node);
        this.activeNodes.delete(container);
      }
    }
  }

}

/***/ }),

/***/ 16957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ SVG_NS)
/* harmony export */ });
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
// eslint-disable-next-line import/prefer-default-export
const SVG_NS = 'http://www.w3.org/2000/svg';

/***/ }),

/***/ 18987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createHiddenSvgNode)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16957);
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

function createHiddenSvgNode() {
  const svgNode = document.createElementNS(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SVG_NS */ .h, 'svg');
  svgNode.style.position = 'absolute'; // so it won't disrupt page layout

  svgNode.style.top = '-100%';
  svgNode.style.left = '-100%';
  svgNode.style.width = '0'; // no dimensions

  svgNode.style.height = '0';
  svgNode.style.opacity = '0'; // not visible

  svgNode.style.pointerEvents = 'none'; // won't capture mouse events

  return svgNode;
}

/***/ }),

/***/ 93216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createTextNode)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16957);
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

function createTextNode() {
  return document.createElementNS(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SVG_NS */ .h, 'text');
}

/***/ }),

/***/ 83698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ hiddenSvgFactory),
/* harmony export */   "S": () => (/* binding */ textFactory)
/* harmony export */ });
/* harmony import */ var _LazyFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24003);
/* harmony import */ var _createHiddenSvgNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18987);
/* harmony import */ var _createTextNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93216);
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



const hiddenSvgFactory = new _LazyFactory__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(_createHiddenSvgNode__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
const textFactory = new _LazyFactory__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(_createTextNode__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);

/***/ }),

/***/ 81318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getBBoxCeil)
/* harmony export */ });
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
const DEFAULT_DIMENSION = {
  height: 20,
  width: 100
};
function getBBoxCeil(node, defaultDimension = DEFAULT_DIMENSION) {
  const {
    width,
    height
  } = node.getBBox ? node.getBBox() : defaultDimension;
  return {
    height: Math.ceil(height),
    width: Math.ceil(width)
  };
}

/***/ }),

/***/ 4520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ updateTextNode)
/* harmony export */ });
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
const STYLE_FIELDS = ['font', 'fontWeight', 'fontStyle', 'fontSize', 'fontFamily', 'letterSpacing'];
function updateTextNode(node, {
  className,
  style = {},
  text
} = {}) {
  const textNode = node;

  if (textNode.textContent !== text) {
    textNode.textContent = typeof text === 'undefined' ? null : text;
  }

  if (textNode.getAttribute('class') !== className) {
    textNode.setAttribute('class', className ?? '');
  } // Clear style
  // Note: multi-word property names are hyphenated and not camel-cased.


  textNode.style.removeProperty('font');
  textNode.style.removeProperty('font-weight');
  textNode.style.removeProperty('font-style');
  textNode.style.removeProperty('font-size');
  textNode.style.removeProperty('font-family');
  textNode.style.removeProperty('letter-spacing'); // Apply new style
  // Note: the font field will auto-populate other font fields when applicable.

  STYLE_FIELDS.filter(field => typeof style[field] !== 'undefined' && style[field] !== null).forEach(field => {
    textNode.style[field] = `${style[field]}`;
  });
  return textNode;
}

/***/ }),

/***/ 67017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AnnotationOpacity": () => (/* reexport */ AnnotationLayer/* AnnotationOpacity */.TJ),
  "AnnotationSourceType": () => (/* reexport */ AnnotationLayer/* AnnotationSourceType */.u$),
  "AnnotationStyle": () => (/* reexport */ AnnotationLayer/* AnnotationStyle */.QW),
  "AnnotationType": () => (/* reexport */ AnnotationLayer/* AnnotationType */.JJ),
  "ApiLegacy": () => (/* reexport */ legacy_namespaceObject),
  "ApiV1": () => (/* reexport */ v1_namespaceObject),
  "AppSection": () => (/* reexport */ Base/* AppSection */.Tr),
  "BRAND_COLOR": () => (/* reexport */ color/* BRAND_COLOR */.E8),
  "Behavior": () => (/* reexport */ Base/* Behavior */.cg),
  "BuildQuery": () => (/* reexport */ ChartBuildQueryRegistrySingleton.BuildQuery),
  "CategoricalAirbnb": () => (/* reexport */ color/* CategoricalAirbnb */.CW),
  "CategoricalColorNamespace": () => (/* reexport */ color/* CategoricalColorNamespace */.kI),
  "CategoricalColorScale": () => (/* reexport */ color/* CategoricalColorScale */.A5),
  "CategoricalD3": () => (/* reexport */ color/* CategoricalD3 */.Gz),
  "CategoricalEcharts": () => (/* reexport */ color/* CategoricalEcharts */.Ys),
  "CategoricalGoogle": () => (/* reexport */ color/* CategoricalGoogle */.$5),
  "CategoricalLyft": () => (/* reexport */ color/* CategoricalLyft */.Dg),
  "CategoricalPreset": () => (/* reexport */ color/* CategoricalPreset */.XF),
  "CategoricalScheme": () => (/* reexport */ color/* CategoricalScheme */.gE),
  "CategoricalSuperset": () => (/* reexport */ color/* CategoricalSuperset */.yE),
  "ChartClient": () => (/* reexport */ ChartClient),
  "ChartDataProvider": () => (/* reexport */ components_ChartDataProvider),
  "ChartFrame": () => (/* reexport */ ChartFrame),
  "ChartMetadata": () => (/* reexport */ ChartMetadata/* default */.Z),
  "ChartPlugin": () => (/* reexport */ ChartPlugin/* default */.Z),
  "ChartProps": () => (/* reexport */ ChartProps/* default */.Z),
  "ColorSchemeRegistry": () => (/* reexport */ color/* ColorSchemeRegistry */.zR),
  "ComparisionType": () => (/* reexport */ AdvancedAnalytics/* ComparisionType */.pF),
  "DTTM_ALIAS": () => (/* reexport */ constants/* DTTM_ALIAS */.W3),
  "DatasourceKey": () => (/* reexport */ DatasourceKey/* default */.Z),
  "DatasourceType": () => (/* reexport */ Datasource/* DatasourceType */.i),
  "EXTRA_FORM_DATA_APPEND_KEYS": () => (/* reexport */ constants/* EXTRA_FORM_DATA_APPEND_KEYS */.Ci),
  "EXTRA_FORM_DATA_OVERRIDE_EXTRA_KEYS": () => (/* reexport */ constants/* EXTRA_FORM_DATA_OVERRIDE_EXTRA_KEYS */.fn),
  "EXTRA_FORM_DATA_OVERRIDE_KEYS": () => (/* reexport */ constants/* EXTRA_FORM_DATA_OVERRIDE_KEYS */.Ay),
  "EXTRA_FORM_DATA_OVERRIDE_REGULAR_KEYS": () => (/* reexport */ constants/* EXTRA_FORM_DATA_OVERRIDE_REGULAR_KEYS */.NU),
  "EXTRA_FORM_DATA_OVERRIDE_REGULAR_MAPPINGS": () => (/* reexport */ constants/* EXTRA_FORM_DATA_OVERRIDE_REGULAR_MAPPINGS */.gn),
  "EmotionCacheProvider": () => (/* reexport */ style/* EmotionCacheProvider */.zo),
  "ExtensibleFunction": () => (/* reexport */ ExtensibleFunction/* default */.Z),
  "FAST_DEBOUNCE": () => (/* reexport */ components_constants/* FAST_DEBOUNCE */.o),
  "FeatureFlag": () => (/* reexport */ featureFlags/* FeatureFlag */.T),
  "GenericDataType": () => (/* reexport */ QueryResponse/* GenericDataType */.Z),
  "LOCAL_PREFIX": () => (/* reexport */ TimeFormats/* LOCAL_PREFIX */.D),
  "NumberFormats": () => (/* reexport */ NumberFormats/* default */.Z),
  "NumberFormatter": () => (/* reexport */ NumberFormatter/* default */.Z),
  "NumberFormatterRegistry": () => (/* reexport */ NumberFormatterRegistry/* default */.Z),
  "OverwritePolicy": () => (/* reexport */ Registry/* OverwritePolicy */.r),
  "PREVIEW_TIME": () => (/* reexport */ TimeFormatter/* PREVIEW_TIME */.F),
  "PREVIEW_VALUE": () => (/* reexport */ NumberFormatter/* PREVIEW_VALUE */.G),
  "PandasAxis": () => (/* reexport */ PandasAxis),
  "Plugin": () => (/* reexport */ Plugin/* default */.Z),
  "Preset": () => (/* reexport */ Preset/* default */.Z),
  "QueryMode": () => (/* reexport */ QueryFormData/* QueryMode */.nJ),
  "Registry": () => (/* reexport */ Registry/* default */.Z),
  "RegistryWithDefaultKey": () => (/* reexport */ RegistryWithDefaultKey/* default */.Z),
  "RollingType": () => (/* reexport */ AdvancedAnalytics/* RollingType */.su),
  "SLOW_DEBOUNCE": () => (/* reexport */ components_constants/* SLOW_DEBOUNCE */.M),
  "SafeMarkdown": () => (/* reexport */ SafeMarkdown/* default */.Z),
  "SequentialCommon": () => (/* reexport */ color/* SequentialCommon */.UM),
  "SequentialD3": () => (/* reexport */ color/* SequentialD3 */.Bs),
  "SequentialScheme": () => (/* reexport */ color/* SequentialScheme */.T8),
  "SuperChart": () => (/* reexport */ SuperChart/* default */.Z),
  "SupersetApiError": () => (/* reexport */ v1_types/* SupersetApiError */.P),
  "SupersetApiErrorType": () => (/* reexport */ v1_types/* SupersetApiErrorType */.M),
  "SupersetClient": () => (/* reexport */ SupersetClient/* default */.Z),
  "SupersetClientClass": () => (/* reexport */ SupersetClientClass/* default */.Z),
  "ThemeProvider": () => (/* reexport */ style/* ThemeProvider */.f6),
  "TimeFormats": () => (/* reexport */ TimeFormats/* default */.Z),
  "TimeFormatter": () => (/* reexport */ TimeFormatter/* default */.Z),
  "TimeGranularity": () => (/* reexport */ time_format_types/* TimeGranularity */.A),
  "TooltipFrame": () => (/* reexport */ tooltip_TooltipFrame),
  "TooltipTable": () => (/* reexport */ TooltipTable),
  "WithLegend": () => (/* reexport */ legend_WithLegend),
  "__hack_reexport_AdvancedAnalytics": () => (/* reexport */ AdvancedAnalytics/* default */.ZP),
  "__hack_reexport_Column": () => (/* reexport */ Column),
  "__hack_reexport_Datasource": () => (/* reexport */ Datasource/* default */.Z),
  "__hack_reexport_Metric": () => (/* reexport */ Metric),
  "__hack_reexport_Query": () => (/* reexport */ Query),
  "__hack_reexport_QueryFormData": () => (/* reexport */ QueryFormData/* default */.ZP),
  "__hack_reexport_QueryResponse": () => (/* reexport */ QueryResponse/* default */.C),
  "__hack_reexport_Time": () => (/* reexport */ Time),
  "__hack_reexport_chart_Base": () => (/* reexport */ Base/* default */.ZP),
  "__hack_reexport_chart_QueryResponse": () => (/* reexport */ types_QueryResponse),
  "__hack_reexport_chart_TransformFunction": () => (/* reexport */ TransformFunction),
  "__hack_reexport_connection": () => (/* reexport */ connection_types),
  "__hack_reexport_dimension": () => (/* reexport */ dimension_types),
  "__hack_reexport_jed": () => (/* reexport */ jed),
  "__hack_reexport_trasnslation": () => (/* reexport */ translation_types),
  "addLocaleData": () => (/* reexport */ TranslatorSingleton/* addLocaleData */.oK),
  "addTranslation": () => (/* reexport */ TranslatorSingleton/* addTranslation */.Zt),
  "addTranslations": () => (/* reexport */ TranslatorSingleton/* addTranslations */.hk),
  "buildQueryContext": () => (/* reexport */ buildQueryContext/* default */.Z),
  "buildQueryObject": () => (/* reexport */ buildQueryObject/* default */.Z),
  "callApi": () => (/* reexport */ callApiAndParseWithTimeout/* default */.Z),
  "computeMaxFontSize": () => (/* reexport */ computeMaxFontSize/* default */.Z),
  "configure": () => (/* reexport */ TranslatorSingleton/* configure */.jQ),
  "convertFilter": () => (/* reexport */ convertFilter/* default */.Z),
  "convertKeysToCamelCase": () => (/* reexport */ convertKeysToCamelCase/* default */.Z),
  "createD3NumberFormatter": () => (/* reexport */ createD3NumberFormatter/* default */.Z),
  "createD3TimeFormatter": () => (/* reexport */ createD3TimeFormatter/* default */.Z),
  "createDurationFormatter": () => (/* reexport */ createDurationFormatter/* default */.Z),
  "createEmotionCache": () => (/* reexport */ style/* createEmotionCache */.S9),
  "createLoadableRenderer": () => (/* reexport */ createLoadableRenderer/* default */.Z),
  "createMultiFormatter": () => (/* reexport */ createMultiFormatter/* default */.Z),
  "createSiAtMostNDigitFormatter": () => (/* reexport */ createSiAtMostNDigitFormatter),
  "createSmartNumberFormatter": () => (/* reexport */ createSmartNumberFormatter/* default */.Z),
  "css": () => (/* reexport */ style/* css */.iv),
  "defineSharedModule": () => (/* reexport */ shared_modules/* defineSharedModule */.vO),
  "defineSharedModules": () => (/* reexport */ shared_modules/* defineSharedModules */.YW),
  "emotionCache": () => (/* reexport */ style/* emotionCache */.Yi),
  "ensureIsArray": () => (/* reexport */ ensureIsArray/* default */.Z),
  "ensureIsInt": () => (/* reexport */ ensureIsInt/* default */.Z),
  "evalExpression": () => (/* reexport */ math_expression/* evalExpression */.f),
  "extractTimegrain": () => (/* reexport */ extractTimegrain/* default */.Z),
  "formatNumber": () => (/* reexport */ NumberFormatterRegistrySingleton/* formatNumber */.uf),
  "formatTime": () => (/* reexport */ TimeFormatterRegistrySingleton/* formatTime */.mr),
  "formatTimeRange": () => (/* reexport */ TimeFormatterRegistrySingleton/* formatTimeRange */.ns),
  "getCategoricalSchemeRegistry": () => (/* reexport */ color/* getCategoricalSchemeRegistry */.B_),
  "getChartBuildQueryRegistry": () => (/* reexport */ ChartBuildQueryRegistrySingleton/* default */.Z),
  "getChartComponentRegistry": () => (/* reexport */ ChartComponentRegistrySingleton/* default */.Z),
  "getChartControlPanelRegistry": () => (/* reexport */ ChartControlPanelRegistrySingleton/* default */.Z),
  "getChartMetadataRegistry": () => (/* reexport */ ChartMetadataRegistrySingleton/* default */.Z),
  "getChartTransformPropsRegistry": () => (/* reexport */ ChartTransformPropsRegistrySingleton/* default */.Z),
  "getMetricLabel": () => (/* reexport */ getMetricLabel/* default */.Z),
  "getMultipleTextDimensions": () => (/* reexport */ getMultipleTextDimensions),
  "getNumberFormatter": () => (/* reexport */ NumberFormatterRegistrySingleton/* getNumberFormatter */.JB),
  "getNumberFormatterRegistry": () => (/* reexport */ NumberFormatterRegistrySingleton/* default */.ZP),
  "getSequentialSchemeRegistry": () => (/* reexport */ color/* getSequentialSchemeRegistry */.j3),
  "getTextDimension": () => (/* reexport */ getTextDimension/* default */.Z),
  "getTimeFormatter": () => (/* reexport */ TimeFormatterRegistrySingleton/* getTimeFormatter */.bt),
  "getTimeFormatterForGranularity": () => (/* reexport */ TimeFormatterRegistrySingleton/* getTimeFormatterForGranularity */.uh),
  "getTimeFormatterRegistry": () => (/* reexport */ TimeFormatterRegistrySingleton/* default */.ZP),
  "getTimeRangeFormatter": () => (/* reexport */ TimeFormatterRegistrySingleton/* getTimeRangeFormatter */.Rg),
  "isBinaryAdhocFilter": () => (/* reexport */ Filter/* isBinaryAdhocFilter */.kC),
  "isBinaryOperator": () => (/* reexport */ Operator/* isBinaryOperator */.VU),
  "isDefined": () => (/* reexport */ isDefined/* default */.Z),
  "isDruidFormData": () => (/* reexport */ QueryFormData/* isDruidFormData */.zU),
  "isEventAnnotationLayer": () => (/* reexport */ AnnotationLayer/* isEventAnnotationLayer */.pD),
  "isFeatureEnabled": () => (/* reexport */ featureFlags/* isFeatureEnabled */.c),
  "isFormulaAnnotationLayer": () => (/* reexport */ AnnotationLayer/* isFormulaAnnotationLayer */.x5),
  "isIntervalAnnotationLayer": () => (/* reexport */ AnnotationLayer/* isIntervalAnnotationLayer */.Ry),
  "isPostProcessingAggregation": () => (/* reexport */ isPostProcessingAggregation),
  "isPostProcessingBoxplot": () => (/* reexport */ isPostProcessingBoxplot),
  "isPostProcessingCompare": () => (/* reexport */ isPostProcessingCompare),
  "isPostProcessingContribution": () => (/* reexport */ isPostProcessingContribution),
  "isPostProcessingCum": () => (/* reexport */ isPostProcessingCum),
  "isPostProcessingDiff": () => (/* reexport */ isPostProcessingDiff),
  "isPostProcessingPivot": () => (/* reexport */ isPostProcessingPivot),
  "isPostProcessingProphet": () => (/* reexport */ isPostProcessingProphet),
  "isPostProcessingResample": () => (/* reexport */ isPostProcessingResample),
  "isPostProcessingRolling": () => (/* reexport */ isPostProcessingRolling),
  "isPostProcessingSort": () => (/* reexport */ isPostProcessingSort),
  "isRecordAnnotationResult": () => (/* reexport */ AnnotationLayer/* isRecordAnnotationResult */.$c),
  "isRequired": () => (/* reexport */ isRequired/* default */.Z),
  "isSetAdhocFilter": () => (/* reexport */ Filter/* isSetAdhocFilter */.VK),
  "isSetOperator": () => (/* reexport */ Operator/* isSetOperator */.XA),
  "isSimpleAdhocFilter": () => (/* reexport */ Filter/* isSimpleAdhocFilter */.Ki),
  "isTableAnnotationLayer": () => (/* reexport */ AnnotationLayer/* isTableAnnotationLayer */.mn),
  "isTimeseriesAnnotationLayer": () => (/* reexport */ AnnotationLayer/* isTimeseriesAnnotationLayer */.nl),
  "isTimeseriesAnnotationResult": () => (/* reexport */ AnnotationLayer/* isTimeseriesAnnotationResult */.b4),
  "isUnaryAdhocFilter": () => (/* reexport */ Filter/* isUnaryAdhocFilter */._l),
  "isUnaryOperator": () => (/* reexport */ Operator/* isUnaryOperator */.CW),
  "isValidExpression": () => (/* reexport */ math_expression/* isValidExpression */.$),
  "jsx": () => (/* reexport */ style/* jsx */.tZ),
  "legacyValidateInteger": () => (/* reexport */ legacyValidateInteger/* default */.Z),
  "legacyValidateNumber": () => (/* reexport */ legacyValidateNumber/* default */.Z),
  "logging": () => (/* reexport */ logging/* default */.Z),
  "makeApi": () => (/* reexport */ makeApi/* default */.Z),
  "makeSingleton": () => (/* reexport */ makeSingleton/* default */.Z),
  "mergeMargin": () => (/* reexport */ mergeMargin),
  "normalizeOrderBy": () => (/* reexport */ normalizeOrderBy/* default */.Z),
  "parseLength": () => (/* reexport */ parseLength/* default */.Z),
  "promiseTimeout": () => (/* reexport */ promiseTimeout),
  "reactify": () => (/* reexport */ reactify/* default */.Z),
  "removeDuplicates": () => (/* reexport */ removeDuplicates/* default */.Z),
  "reset": () => (/* reexport */ shared_modules/* reset */.mc),
  "seed": () => (/* reexport */ random/* seed */.D),
  "seedRandom": () => (/* reexport */ random/* seedRandom */.b),
  "smartDateDetailedFormatter": () => (/* reexport */ smartDateDetailed/* default */.Z),
  "smartDateFormatter": () => (/* reexport */ smartDate/* default */.Z),
  "smartDateVerboseFormatter": () => (/* reexport */ smartDateVerbose/* default */.Z),
  "styled": () => (/* reexport */ style/* styled */.iK),
  "supersetTheme": () => (/* reexport */ style/* supersetTheme */.K6),
  "t": () => (/* reexport */ TranslatorSingleton.t),
  "tn": () => (/* reexport */ TranslatorSingleton.tn),
  "useTheme": () => (/* reexport */ style/* useTheme */.Fg),
  "validateInteger": () => (/* reexport */ validateInteger/* default */.Z),
  "validateNonEmpty": () => (/* reexport */ validateNonEmpty/* default */.Z),
  "validateNumber": () => (/* reexport */ validateNumber/* default */.Z),
  "withTheme": () => (/* reexport */ style/* withTheme */.Zz)
});

// NAMESPACE OBJECT: ./node_modules/@superset-ui/core/esm/query/api/legacy/index.js
var legacy_namespaceObject = {};
__webpack_require__.r(legacy_namespaceObject);
__webpack_require__.d(legacy_namespaceObject, {
  "__hack_reexport_query_api_legacy": () => (legacy_types),
  "fetchExploreJson": () => (fetchExploreJson),
  "getDatasourceMetadata": () => (getDatasourceMetadata),
  "getFormData": () => (getFormData)
});

// NAMESPACE OBJECT: ./node_modules/@superset-ui/core/esm/query/api/v1/index.js
var v1_namespaceObject = {};
__webpack_require__.r(v1_namespaceObject);
__webpack_require__.d(v1_namespaceObject, {
  "default": () => (v1),
  "getChartData": () => (getChartData)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/models/ExtensibleFunction.js
var ExtensibleFunction = __webpack_require__(84240);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/models/Plugin.js
var Plugin = __webpack_require__(26942);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/models/Preset.js
var Preset = __webpack_require__(26474);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/models/Registry.js
var Registry = __webpack_require__(8018);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/models/RegistryWithDefaultKey.js
var RegistryWithDefaultKey = __webpack_require__(93721);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/models/index.js
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





// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/convertKeysToCamelCase.js
var convertKeysToCamelCase = __webpack_require__(14181);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/ensureIsArray.js
var ensureIsArray = __webpack_require__(86852);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/ensureIsInt.js
var ensureIsInt = __webpack_require__(56040);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/isDefined.js
var isDefined = __webpack_require__(13555);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/isRequired.js
var isRequired = __webpack_require__(65154);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/makeSingleton.js
var makeSingleton = __webpack_require__(23630);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/utils/promiseTimeout.js
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

/** setTimeout that returns a promise */
function promiseTimeout(
/** A function to be executed after the timer expires. */
func,
/** The time, in milliseconds (thousandths of a second), the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, as soon as possible.  */
delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(func());
    }, delay);
  });
}
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/logging.js
var logging = __webpack_require__(23099);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/removeDuplicates.js
var removeDuplicates = __webpack_require__(12349);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/random.js
var random = __webpack_require__(81335);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/utils/index.js
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











// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/types/Datasource.js
var Datasource = __webpack_require__(78209);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/types/Filter.js
var Filter = __webpack_require__(39726);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/types/Operator.js
var Operator = __webpack_require__(75170);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/types/QueryFormData.js
var QueryFormData = __webpack_require__(41434);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/types/QueryResponse.js
var QueryResponse = __webpack_require__(23274);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/types/AdvancedAnalytics.js
var AdvancedAnalytics = __webpack_require__(30005);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/query/types/PostProcessing.js
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
let PandasAxis;

(function (PandasAxis) {
  PandasAxis[PandasAxis["Row"] = 0] = "Row";
  PandasAxis[PandasAxis["Column"] = 1] = "Column";
})(PandasAxis || (PandasAxis = {}));

function isPostProcessingAggregation(rule) {
  return (rule == null ? void 0 : rule.operation) === 'aggregation';
}
function isPostProcessingBoxplot(rule) {
  return (rule == null ? void 0 : rule.operation) === 'boxplot';
}
function isPostProcessingContribution(rule) {
  return (rule == null ? void 0 : rule.operation) === 'contribution';
}
function isPostProcessingPivot(rule) {
  return (rule == null ? void 0 : rule.operation) === 'pivot';
}
function isPostProcessingProphet(rule) {
  return (rule == null ? void 0 : rule.operation) === 'prophet';
}
function isPostProcessingDiff(rule) {
  return (rule == null ? void 0 : rule.operation) === 'diff';
}
function isPostProcessingRolling(rule) {
  return (rule == null ? void 0 : rule.operation) === 'rolling';
}
function isPostProcessingCum(rule) {
  return (rule == null ? void 0 : rule.operation) === 'cum';
}
function isPostProcessingCompare(rule) {
  return (rule == null ? void 0 : rule.operation) === 'compare';
}
function isPostProcessingSort(rule) {
  return (rule == null ? void 0 : rule.operation) === 'sort';
}
function isPostProcessingResample(rule) {
  return (rule == null ? void 0 : rule.operation) === 'resample';
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/query/types/Column.js
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
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Column information defined in datasource.
 */
/* harmony default export */ const Column = ({});
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/query/types/Metric.js
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
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Select a predefined metric by its `metric_name`.
 */

/**
 * Metric definition stored in datasource metadata.
 */
/* harmony default export */ const Metric = ({});
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/query/types/Query.js
/* eslint camelcase: 0 */

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
 * Query object directly compatible with the new chart data API.
 * A stricter version of query form data.
 *
 * All information should be related to generating database queries. Config values
 * for client-side processing and chart rendering should happen in `buildQuery`
 * and `transformProps`.
 */
/* harmony default export */ const Query = ({});
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/query/types/Time.js
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
/* harmony default export */ const Time = ({});
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/query/types/index.js
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



















/* harmony default export */ const types = ({});
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/types/index.js
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


// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/translation/types/jed.js
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

/**
 * Translations for a language in the format of { key: [singular, plural, ...]}.
 */
/* harmony default export */ const jed = ({});
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/translation/types/index.js
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
 * Superset supported languages.
 */

/* harmony default export */ const translation_types = ({});
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/translation/index.js
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


/* harmony default export */ const translation = ({});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/callApi/callApiAndParseWithTimeout.js + 4 modules
var callApiAndParseWithTimeout = __webpack_require__(43925);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClientClass.js
var SupersetClientClass = __webpack_require__(30617);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/connection/types.js
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
 * More strict JSON value types. If this fails to satisfy TypeScript when using
 * as function arguments, use `JsonObject` instead. `StrictJsonObject` helps make
 * sure all values are plain objects, but it does not accept specific types when
 * used as function arguments.
 * (Ref: https://github.com/microsoft/TypeScript/issues/15300).
 */

/**
 * More strict JSON objects that makes sure all values are plain objects.
 * If this fails to satisfy TypeScript when using as function arguments,
 * use `JsonObject` instead.
 * (Ref: https://github.com/microsoft/TypeScript/issues/15300).
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

/**
 * Request payload, can be use in GET query string, Post form or POST JSON.
 * If string, will parse with JSON.parse.
 */
// this make sure at least one of `url` or `endpoint` is set
/* harmony default export */ const connection_types = ({});
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/connection/index.js
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





// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/dynamic-plugins/shared-modules.js
var shared_modules = __webpack_require__(17390);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/dynamic-plugins/index.js
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

;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/query/api/legacy/fetchExploreJson.js
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

async function fetchExploreJson({
  client = SupersetClient/* default */.Z,
  method = 'POST',
  requestConfig,
  endpoint = '/superset/explore_json/',
  formData
}) {
  const {
    json
  } = await client.request({ ...requestConfig,
    method,
    endpoint,
    searchParams: method === 'GET' ? new URLSearchParams({
      form_data: JSON.stringify(formData)
    }) : undefined,
    postPayload: method === 'POST' ? {
      form_data: formData
    } : undefined
  });
  return json;
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/query/api/legacy/getFormData.js
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

function getFormData({
  client = SupersetClient/* default */.Z,
  sliceId,
  overrideFormData,
  requestConfig
}) {
  const promise = client.get({
    endpoint: `/api/v1/form_data/?slice_id=${sliceId}`,
    ...requestConfig
  }).then(({
    json
  }) => json);
  return overrideFormData ? promise.then(formData => ({ ...formData,
    ...overrideFormData
  })) : promise;
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/query/api/legacy/getDatasourceMetadata.js
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

function getDatasourceMetadata({
  client = SupersetClient/* default */.Z,
  datasourceKey,
  requestConfig
}) {
  return client.get({
    endpoint: `/superset/fetch_datasource_metadata?datasourceKey=${datasourceKey}`,
    ...requestConfig
  }).then(response => response.json);
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/query/api/legacy/types.js
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
/* harmony default export */ const legacy_types = ({});
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/query/api/legacy/index.js
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





// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/api/v1/makeApi.js + 1 modules
var makeApi = __webpack_require__(85639);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/query/api/v1/index.js
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

const getChartData = (0,makeApi/* default */.Z)({
  method: 'POST',
  endpoint: '/api/v1/chart/data'
});
/**
 * All v1 API
 */

/* harmony default export */ const v1 = ({
  getChartData
});
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/constants.js
var constants = __webpack_require__(92134);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/buildQueryContext.js
var buildQueryContext = __webpack_require__(69205);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/buildQueryObject.js + 4 modules
var buildQueryObject = __webpack_require__(88293);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/convertFilter.js
var convertFilter = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/extractTimegrain.js
var extractTimegrain = __webpack_require__(54441);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/getMetricLabel.js
var getMetricLabel = __webpack_require__(95669);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/DatasourceKey.js
var DatasourceKey = __webpack_require__(44409);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/normalizeOrderBy.js
var normalizeOrderBy = __webpack_require__(77249);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/types/AnnotationLayer.js
var AnnotationLayer = __webpack_require__(33484);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/api/v1/types.js
var v1_types = __webpack_require__(63352);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/query/index.js
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

















 // API Callers


// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormats.js
var NumberFormats = __webpack_require__(63758);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormatter.js
var NumberFormatter = __webpack_require__(79330);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js
var NumberFormatterRegistrySingleton = __webpack_require__(50855);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistry.js
var NumberFormatterRegistry = __webpack_require__(51341);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/factories/createD3NumberFormatter.js
var createD3NumberFormatter = __webpack_require__(82518);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/factories/createDurationFormatter.js
var createDurationFormatter = __webpack_require__(75908);
// EXTERNAL MODULE: ./node_modules/d3-format/src/index.js + 15 modules
var src = __webpack_require__(16722);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/number-format/factories/createSiAtMostNDigitFormatter.js
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


function createSiAtMostNDigitFormatter(config = {}) {
  const {
    description,
    n = 3,
    id,
    label
  } = config;
  const siFormatter = (0,src/* format */.WU)(`.${n}s`);
  return new NumberFormatter/* default */.Z({
    description,
    formatFunc: value => {
      const si = siFormatter(value);
      /* Removing trailing `.00` if any */

      return si.slice(-1) < 'A' ? parseFloat(si).toString() : si;
    },
    id: id ?? `si_at_most_${n}_digit`,
    label: label ?? `SI with at most ${n} significant digits`
  });
}
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/factories/createSmartNumberFormatter.js
var createSmartNumberFormatter = __webpack_require__(49092);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/number-format/index.js
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








// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/TimeFormats.js
var TimeFormats = __webpack_require__(76187);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/TimeFormatter.js + 1 modules
var TimeFormatter = __webpack_require__(60270);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/TimeFormatterRegistrySingleton.js + 5 modules
var TimeFormatterRegistrySingleton = __webpack_require__(14826);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/factories/createD3TimeFormatter.js
var createD3TimeFormatter = __webpack_require__(52046);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/factories/createMultiFormatter.js + 1 modules
var createMultiFormatter = __webpack_require__(62990);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/formatters/smartDate.js
var smartDate = __webpack_require__(11304);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/formatters/smartDateDetailed.js
var smartDateDetailed = __webpack_require__(75497);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/formatters/smartDateVerbose.js
var smartDateVerbose = __webpack_require__(47447);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/types.js
var time_format_types = __webpack_require__(30794);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/time-format/index.js
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









// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/dimension/getTextDimension.js
var getTextDimension = __webpack_require__(17614);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/dimension/svg/getBBoxCeil.js
var getBBoxCeil = __webpack_require__(81318);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/dimension/svg/factories.js
var factories = __webpack_require__(83698);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/dimension/svg/updateTextNode.js
var updateTextNode = __webpack_require__(4520);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/dimension/getMultipleTextDimensions.js
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



/**
 * get dimensions of multiple texts with same style
 * @param input
 * @param defaultDimension
 */

function getMultipleTextDimensions(input, defaultDimension) {
  const {
    texts,
    className,
    style,
    container
  } = input;
  const cache = new Map(); // for empty string

  cache.set('', {
    height: 0,
    width: 0
  });
  let textNode;
  let svgNode;
  const dimensions = texts.map(text => {
    // Check if this string has been computed already
    if (cache.has(text)) {
      return cache.get(text);
    } // Lazy creation of text and svg nodes


    if (!textNode) {
      svgNode = factories/* hiddenSvgFactory.createInContainer */.Y.createInContainer(container);
      textNode = factories/* textFactory.createInContainer */.S.createInContainer(svgNode);
    } // Update text and get dimension


    (0,updateTextNode/* default */.Z)(textNode, {
      className,
      style,
      text
    });
    const dimension = (0,getBBoxCeil/* default */.Z)(textNode, defaultDimension); // Store result to cache

    cache.set(text, dimension);
    return dimension;
  }); // Remove svg node, if any

  if (svgNode && textNode) {
    // The nodes are added to the DOM briefly only to make getBBox works.
    // (If not added to DOM getBBox will always return 0x0.)
    // After that the svg nodes are not needed.
    // We delay its removal in case there are subsequent calls to this function
    // that can reuse the svg nodes.
    // Experiments have shown that reusing existing nodes
    // instead of deleting and adding new ones can save lot of time.
    setTimeout(() => {
      factories/* textFactory.removeFromContainer */.S.removeFromContainer(svgNode);
      factories/* hiddenSvgFactory.removeFromContainer */.Y.removeFromContainer(container);
    }, 500);
  }

  return dimensions;
}
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/dimension/computeMaxFontSize.js
var computeMaxFontSize = __webpack_require__(84402);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/dimension/mergeMargin.js
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
function mergeOneSide(operation, a = 0, b = 0) {
  if (Number.isNaN(a) || a === null) return b;
  if (Number.isNaN(b) || b === null) return a;
  return operation(a, b);
}

function mergeMargin(margin1 = {}, margin2 = {}, mode = 'expand') {
  const {
    top,
    left,
    bottom,
    right
  } = margin1;
  const operation = mode === 'expand' ? Math.max : Math.min;
  return {
    bottom: mergeOneSide(operation, bottom, margin2.bottom),
    left: mergeOneSide(operation, left, margin2.left),
    right: mergeOneSide(operation, right, margin2.right),
    top: mergeOneSide(operation, top, margin2.top)
  };
}
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/dimension/parseLength.js
var parseLength = __webpack_require__(8439);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/dimension/types.js
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
/* harmony default export */ const dimension_types = ({});
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/dimension/index.js
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







// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/index.js + 10 modules
var color = __webpack_require__(43734);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/validator/legacyValidateInteger.js
var legacyValidateInteger = __webpack_require__(12788);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/validator/legacyValidateNumber.js
var legacyValidateNumber = __webpack_require__(59377);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/validator/validateInteger.js
var validateInteger = __webpack_require__(12971);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/validator/validateNumber.js
var validateNumber = __webpack_require__(67181);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/validator/validateNonEmpty.js
var validateNonEmpty = __webpack_require__(42621);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/validator/index.js
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





// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartBuildQueryRegistrySingleton.js
var ChartBuildQueryRegistrySingleton = __webpack_require__(81395);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartMetadataRegistrySingleton.js
var ChartMetadataRegistrySingleton = __webpack_require__(38849);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/chart/clients/ChartClient.js
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



class ChartClient {
  constructor(config = {}) {
    this.client = void 0;
    const {
      client = SupersetClient/* default */.Z
    } = config;
    this.client = client;
  }

  loadFormData(input, options) {
    /* If sliceId is provided, use it to fetch stored formData from API */
    if ('sliceId' in input) {
      const promise = this.client.get({
        endpoint: `/api/v1/form_data/?slice_id=${input.sliceId}`,
        ...options
      }).then(response => response.json);
      /*
       * If formData is also specified, override API result
       * with user-specified formData
       */

      return promise.then(dbFormData => ({ ...dbFormData,
        ...input.formData
      }));
    }
    /* If sliceId is not provided, returned formData wrapped in a Promise */


    return input.formData ? Promise.resolve(input.formData) : Promise.reject(new Error('At least one of sliceId or formData must be specified'));
  }

  async loadQueryData(formData, options) {
    const {
      viz_type: visType
    } = formData;
    const metaDataRegistry = (0,ChartMetadataRegistrySingleton/* default */.Z)();
    const buildQueryRegistry = (0,ChartBuildQueryRegistrySingleton/* default */.Z)();

    if (metaDataRegistry.has(visType)) {
      const {
        useLegacyApi
      } = metaDataRegistry.get(visType);

      const buildQuery = (await buildQueryRegistry.get(visType)) ?? (() => formData);

      const requestConfig = useLegacyApi ? {
        endpoint: '/superset/explore_json/',
        postPayload: {
          form_data: buildQuery(formData)
        },
        ...options
      } : {
        endpoint: '/api/v1/chart/data',
        jsonPayload: {
          query_context: buildQuery(formData)
        },
        ...options
      };
      return this.client.post(requestConfig).then(response => Array.isArray(response.json) ? response.json : [response.json]);
    }

    return Promise.reject(new Error(`Unknown chart type: ${visType}`));
  }

  loadDatasource(datasourceKey, options) {
    return this.client.get({
      endpoint: `/superset/fetch_datasource_metadata?datasourceKey=${datasourceKey}`,
      ...options
    }).then(response => response.json);
  } // eslint-disable-next-line class-methods-use-this


  loadAnnotation(annotationLayer) {
    /* When annotation does not require query */
    if (!(0,isDefined/* default */.Z)(annotationLayer.sourceType)) {
      return Promise.resolve({});
    } // TODO: Implement


    return Promise.reject(new Error('This feature is not implemented yet.'));
  }

  loadAnnotations(annotationLayers) {
    if (Array.isArray(annotationLayers) && annotationLayers.length > 0) {
      return Promise.all(annotationLayers.map(layer => this.loadAnnotation(layer))).then(results => annotationLayers.reduce((prev, layer, i) => {
        const output = prev;
        output[layer.name] = results[i];
        return output;
      }, {}));
    }

    return Promise.resolve({});
  }

  loadChartData(input) {
    return this.loadFormData(input).then(formData => Promise.all([this.loadAnnotations(formData.annotation_layers), this.loadDatasource(formData.datasource), this.loadQueryData(formData)]).then(([annotationData, datasource, queriesData]) => ({
      annotationData,
      datasource,
      formData,
      queriesData
    })));
  }

}
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/models/ChartMetadata.js
var ChartMetadata = __webpack_require__(40702);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/models/ChartPlugin.js
var ChartPlugin = __webpack_require__(15179);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/models/ChartProps.js
var ChartProps = __webpack_require__(20783);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/components/createLoadableRenderer.js
var createLoadableRenderer = __webpack_require__(70463);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/components/reactify.js
var reactify = __webpack_require__(73834);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/components/SuperChart.js + 3 modules
var SuperChart = __webpack_require__(25945);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartComponentRegistrySingleton.js
var ChartComponentRegistrySingleton = __webpack_require__(47441);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartControlPanelRegistrySingleton.js
var ChartControlPanelRegistrySingleton = __webpack_require__(14299);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartTransformPropsRegistrySingleton.js
var ChartTransformPropsRegistrySingleton = __webpack_require__(77979);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/chart/components/ChartDataProvider.js


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

/* eslint react/sort-comp: 'off' */



class ChartDataProvider extends react.PureComponent {
  constructor(props) {
    super(props);
    this.chartClient = void 0;

    this.handleFetchData = () => {
      const {
        loadDatasource,
        formDataRequestOptions,
        datasourceRequestOptions,
        queryRequestOptions
      } = this.props;
      this.setState({
        status: 'loading'
      }, () => {
        try {
          this.chartClient.loadFormData(this.extractSliceIdAndFormData(), formDataRequestOptions).then(formData => Promise.all([loadDatasource ? this.chartClient.loadDatasource(formData.datasource, datasourceRequestOptions) : Promise.resolve(undefined), this.chartClient.loadQueryData(formData, queryRequestOptions)]).then(([datasource, queriesData]) => ( // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          {
            datasource,
            formData,
            queriesData
          }))).then(this.handleReceiveData).catch(this.handleError);
        } catch (error) {
          this.handleError(error);
        }
      });
    };

    this.handleReceiveData = payload => {
      const {
        onLoaded
      } = this.props;
      if (onLoaded) onLoaded(payload);
      this.setState({
        payload,
        status: 'loaded'
      });
    };

    this.handleError = error => {
      const {
        onError
      } = this.props;
      if (onError) onError(error);
      this.setState({
        error,
        status: 'error'
      });
    };

    this.state = {
      status: 'uninitialized'
    };
    this.chartClient = new ChartClient({
      client: props.client
    });
  }

  componentDidMount() {
    this.handleFetchData();
  }

  componentDidUpdate(prevProps) {
    const {
      formData,
      sliceId
    } = this.props;

    if (formData !== prevProps.formData || sliceId !== prevProps.sliceId) {
      this.handleFetchData();
    }
  }

  extractSliceIdAndFormData() {
    const {
      formData,
      sliceId
    } = this.props;
    return formData ? {
      formData
    } : {
      sliceId: sliceId
    };
  }

  render() {
    const {
      children
    } = this.props;
    const {
      status,
      payload,
      error
    } = this.state;

    switch (status) {
      case 'loading':
        return children({
          loading: true
        });

      case 'loaded':
        return children({
          payload
        });

      case 'error':
        return children({
          error
        });

      case 'uninitialized':
      default:
        return null;
    }
  }

}

ChartDataProvider.propTypes = {
  children: (prop_types_default()).func.isRequired,
  loadDatasource: (prop_types_default()).bool,
  onError: (prop_types_default()).func,
  onLoaded: (prop_types_default()).func
};
/* harmony default export */ const components_ChartDataProvider = (ChartDataProvider);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/types/Base.js
var Base = __webpack_require__(52686);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/chart/types/TransformFunction.js
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
/* harmony default export */ const TransformFunction = ({});
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/chart/types/QueryResponse.js
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

/**
 * Types for query response
 */
// data record value filters from FilterBox

/**
 * Legacy queried data for charts. List of arbitrary dictionaries generated
 * by `viz.py`.
 * TODO: clean this up when all charts have been migrated to v1 API.
 */

/**
 * Ambiguous query data type. Reserved for the generic QueryFormData.
 * Don't use this for a specific chart (since you know which API it uses already).
 */
/* harmony default export */ const types_QueryResponse = ({});
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/chart/index.js
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




















// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/chart-composition/ChartFrame.js


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




function checkNumber(input) {
  return (0,isDefined/* default */.Z)(input) && typeof input === 'number';
}

class ChartFrame extends react.PureComponent {
  render() {
    const {
      contentWidth,
      contentHeight,
      width,
      height,
      renderContent
    } = this.props;
    const overflowX = checkNumber(contentWidth) && contentWidth > width;
    const overflowY = checkNumber(contentHeight) && contentHeight > height;

    if (overflowX || overflowY) {
      return (0,emotion_react_browser_esm.jsx)("div", {
        style: {
          height,
          overflowX: overflowX ? 'auto' : 'hidden',
          overflowY: overflowY ? 'auto' : 'hidden',
          width
        }
      }, renderContent({
        height: Math.max(contentHeight ?? 0, height),
        width: Math.max(contentWidth ?? 0, width)
      }));
    }

    return renderContent({
      height,
      width
    });
  }

}
ChartFrame.propTypes = {
  contentWidth: (prop_types_default()).number,
  contentHeight: (prop_types_default()).number,
  height: (prop_types_default()).number.isRequired,
  renderContent: (prop_types_default()).func.isRequired,
  width: (prop_types_default()).number.isRequired
};
ChartFrame.defaultProps = {
  renderContent() {}

};
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/node_modules/@vx/responsive/esm/components/ParentSize.js
var ParentSize = __webpack_require__(10750);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/chart-composition/legend/WithLegend.js


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



const defaultProps = {
  className: '',
  height: 'auto',
  position: 'top',
  width: 'auto'
};
const LEGEND_STYLE_BASE = {
  display: 'flex',
  flexGrow: 0,
  flexShrink: 0,
  order: -1
};
const CHART_STYLE_BASE = {
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  position: 'relative'
};

class WithLegend extends react.PureComponent {
  getContainerDirection() {
    const {
      position
    } = this.props;

    if (position === 'left') {
      return 'row';
    }

    if (position === 'right') {
      return 'row-reverse';
    }

    if (position === 'bottom') {
      return 'column-reverse';
    }

    return 'column';
  }

  getLegendJustifyContent() {
    const {
      legendJustifyContent,
      position
    } = this.props;

    if (legendJustifyContent) {
      return legendJustifyContent;
    }

    if (position === 'left' || position === 'right') {
      return 'flex-start';
    }

    return 'flex-end';
  }

  render() {
    const {
      className,
      debounceTime,
      width,
      height,
      position,
      renderChart,
      renderLegend
    } = this.props;
    const isHorizontal = position === 'left' || position === 'right';
    const style = {
      display: 'flex',
      flexDirection: this.getContainerDirection(),
      height,
      width
    };
    const chartStyle = { ...CHART_STYLE_BASE
    };

    if (isHorizontal) {
      chartStyle.width = 0;
    } else {
      chartStyle.height = 0;
    }

    const legendDirection = isHorizontal ? 'column' : 'row';
    const legendStyle = { ...LEGEND_STYLE_BASE,
      flexDirection: legendDirection,
      justifyContent: this.getLegendJustifyContent()
    };
    return (0,emotion_react_browser_esm.jsx)("div", {
      className: `with-legend ${className}`,
      style: style
    }, renderLegend && (0,emotion_react_browser_esm.jsx)("div", {
      className: "legend-container",
      style: legendStyle
    }, renderLegend({
      // Pass flexDirection for @vx/legend to arrange legend items
      direction: legendDirection
    })), (0,emotion_react_browser_esm.jsx)("div", {
      className: "main-container",
      style: chartStyle
    }, (0,emotion_react_browser_esm.jsx)(ParentSize/* default */.Z, {
      debounceTime: debounceTime
    }, parent => parent.width > 0 && parent.height > 0 ? // Only render when necessary
    renderChart(parent) : null)));
  }

}

WithLegend.propTypes = {
  className: (prop_types_default()).string.isRequired,
  debounceTime: (prop_types_default()).number,
  width: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired,
  height: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired,
  legendJustifyContent: prop_types_default().oneOf(['center', 'flex-start', 'flex-end']),
  position: prop_types_default().oneOf(['top', 'left', 'bottom', 'right']).isRequired,
  renderChart: (prop_types_default()).func.isRequired,
  renderLegend: (prop_types_default()).func
};
WithLegend.defaultProps = defaultProps;
/* harmony default export */ const legend_WithLegend = (WithLegend);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/chart-composition/tooltip/TooltipFrame.js


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


const TooltipFrame_defaultProps = {
  className: ''
};
const CONTAINER_STYLE = {
  padding: 8
};

class TooltipFrame extends react.PureComponent {
  render() {
    const {
      className,
      children
    } = this.props;
    return (0,emotion_react_browser_esm.jsx)("div", {
      className: className,
      style: CONTAINER_STYLE
    }, children);
  }

}

TooltipFrame.propTypes = {
  className: (prop_types_default()).string,
  children: (prop_types_default()).node.isRequired
};
TooltipFrame.defaultProps = TooltipFrame_defaultProps;
/* harmony default export */ const tooltip_TooltipFrame = (TooltipFrame);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/chart-composition/tooltip/TooltipTable.js


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


const TooltipTable_defaultProps = {
  className: '',
  data: []
};
const VALUE_CELL_STYLE = {
  paddingLeft: 8,
  textAlign: 'right'
};
class TooltipTable extends react.PureComponent {
  render() {
    const {
      className,
      data
    } = this.props;
    return (0,emotion_react_browser_esm.jsx)("table", {
      className: className
    }, (0,emotion_react_browser_esm.jsx)("tbody", null, data.map(({
      key,
      keyColumn,
      keyStyle,
      valueColumn,
      valueStyle
    }) => (0,emotion_react_browser_esm.jsx)("tr", {
      key: key
    }, (0,emotion_react_browser_esm.jsx)("td", {
      style: keyStyle
    }, keyColumn ?? key), (0,emotion_react_browser_esm.jsx)("td", {
      style: valueStyle ? { ...VALUE_CELL_STYLE,
        ...valueStyle
      } : VALUE_CELL_STYLE
    }, valueColumn)))));
  }

}
TooltipTable.propTypes = {
  className: (prop_types_default()).string,
  data: prop_types_default().arrayOf(prop_types_default().shape({
    key: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
    keyColumn: (prop_types_default()).node,
    valueColumn: (prop_types_default()).node.isRequired
  })).isRequired
};
TooltipTable.defaultProps = TooltipTable_defaultProps;
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/chart-composition/index.js
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




// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/components/constants.js
var components_constants = __webpack_require__(16918);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/components/SafeMarkdown.js
var SafeMarkdown = __webpack_require__(78019);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/components/index.js
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


// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/math-expression/index.js
var math_expression = __webpack_require__(27211);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/index.js
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

/***/ 26942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Plugin)
/* harmony export */ });
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
class Plugin {
  constructor() {
    this.config = void 0;
    this.config = {};
  }

  resetConfig() {
    // The child class can set default config
    // by overriding this function.
    this.config = {};
    return this;
  }

  configure(config, replace = false) {
    this.config = replace ? config : { ...this.config,
      ...config
    };
    return this;
  }

  register() {
    return this;
  }

  unregister() {
    return this;
  }

}

/***/ }),

/***/ 26474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Preset)
/* harmony export */ });
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
class Preset {
  constructor(config = {}) {
    this.name = void 0;
    this.description = void 0;
    this.presets = void 0;
    this.plugins = void 0;
    const {
      name = '',
      description = '',
      presets = [],
      plugins = []
    } = config;
    this.name = name;
    this.description = description;
    this.presets = presets;
    this.plugins = plugins;
  }

  register() {
    this.presets.forEach(preset => {
      preset.register();
    });
    this.plugins.forEach(plugin => {
      plugin.register();
    });
    return this;
  }

}

/***/ }),

/***/ 54441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ extractTimegrain)
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

/* eslint-disable no-underscore-dangle */
function extractTimegrain(formData) {
  const {
    time_grain_sqla,
    extra_filters,
    extra_form_data
  } = formData;

  if (extra_form_data != null && extra_form_data.time_grain_sqla) {
    return extra_form_data.time_grain_sqla;
  }

  const extra_grain = (extra_filters || []).filter(filter => filter.col === '__time_grain');

  if (extra_grain.length) {
    return extra_grain[0].val;
  }

  return time_grain_sqla;
}

/***/ }),

/***/ 77249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ normalizeOrderBy)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41609);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51584);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isBoolean__WEBPACK_IMPORTED_MODULE_1__);
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


function normalizeOrderBy(queryObject) {
  if (Array.isArray(queryObject.orderby) && queryObject.orderby.length > 0) {
    // ensure a valid orderby clause
    const orderbyClause = queryObject.orderby[0];

    if (Array.isArray(orderbyClause) && orderbyClause.length === 2 && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(orderbyClause[0]) && lodash_isBoolean__WEBPACK_IMPORTED_MODULE_1___default()(orderbyClause[1])) {
      return queryObject;
    }
  } // ensure that remove invalid orderby clause


  const cloneQueryObject = { ...queryObject
  };
  delete cloneQueryObject.timeseries_limit_metric;
  delete cloneQueryObject.legacy_order_by;
  delete cloneQueryObject.order_desc;
  delete cloneQueryObject.orderby;
  const isAsc = !queryObject.order_desc;

  if (queryObject.timeseries_limit_metric !== undefined && queryObject.timeseries_limit_metric !== null && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(queryObject.timeseries_limit_metric)) {
    return { ...cloneQueryObject,
      orderby: [[queryObject.timeseries_limit_metric, isAsc]]
    };
  } // todo: Removed `legacy_ordery_by` after refactoring


  if (queryObject.legacy_order_by !== undefined && queryObject.legacy_order_by !== null && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(queryObject.legacy_order_by)) {
    return { ...cloneQueryObject,
      // @ts-ignore
      orderby: [[queryObject.legacy_order_by, isAsc]]
    };
  }

  if (Array.isArray(queryObject.metrics) && queryObject.metrics.length > 0) {
    return { ...cloneQueryObject,
      orderby: [[queryObject.metrics[0], isAsc]]
    };
  }

  return cloneQueryObject;
}

/***/ }),

/***/ 30005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "su": () => (/* binding */ RollingType),
/* harmony export */   "pF": () => (/* binding */ ComparisionType),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
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
 * specific language governing permissions and limitations
 * under the License.
 */
let RollingType;

(function (RollingType) {
  RollingType["Mean"] = "mean";
  RollingType["Sum"] = "sum";
  RollingType["Std"] = "std";
  RollingType["Cumsum"] = "cumsum";
})(RollingType || (RollingType = {}));

let ComparisionType;

(function (ComparisionType) {
  ComparisionType["Values"] = "values";
  ComparisionType["Difference"] = "difference";
  ComparisionType["Percentage"] = "percentage";
  ComparisionType["Ratio"] = "ratio";
})(ComparisionType || (ComparisionType = {}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ 33484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JJ": () => (/* binding */ AnnotationType),
/* harmony export */   "u$": () => (/* binding */ AnnotationSourceType),
/* harmony export */   "TJ": () => (/* binding */ AnnotationOpacity),
/* harmony export */   "QW": () => (/* binding */ AnnotationStyle),
/* harmony export */   "x5": () => (/* binding */ isFormulaAnnotationLayer),
/* harmony export */   "pD": () => (/* binding */ isEventAnnotationLayer),
/* harmony export */   "Ry": () => (/* binding */ isIntervalAnnotationLayer),
/* harmony export */   "nl": () => (/* binding */ isTimeseriesAnnotationLayer),
/* harmony export */   "mn": () => (/* binding */ isTableAnnotationLayer),
/* harmony export */   "b4": () => (/* binding */ isTimeseriesAnnotationResult),
/* harmony export */   "$c": () => (/* binding */ isRecordAnnotationResult)
/* harmony export */ });
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

/* eslint camelcase: 0 */
let AnnotationType;

(function (AnnotationType) {
  AnnotationType["Event"] = "EVENT";
  AnnotationType["Formula"] = "FORMULA";
  AnnotationType["Interval"] = "INTERVAL";
  AnnotationType["Timeseries"] = "TIME_SERIES";
})(AnnotationType || (AnnotationType = {}));

let AnnotationSourceType;

(function (AnnotationSourceType) {
  AnnotationSourceType["Line"] = "line";
  AnnotationSourceType["Native"] = "NATIVE";
  AnnotationSourceType["Table"] = "table";
  AnnotationSourceType["Undefined"] = "";
})(AnnotationSourceType || (AnnotationSourceType = {}));

let AnnotationOpacity;

(function (AnnotationOpacity) {
  AnnotationOpacity["High"] = "opacityHigh";
  AnnotationOpacity["Low"] = "opacityLow";
  AnnotationOpacity["Medium"] = "opacityMedium";
  AnnotationOpacity["Undefined"] = "";
})(AnnotationOpacity || (AnnotationOpacity = {}));

let AnnotationStyle;

(function (AnnotationStyle) {
  AnnotationStyle["Dashed"] = "dashed";
  AnnotationStyle["Dotted"] = "dotted";
  AnnotationStyle["Solid"] = "solid";
  AnnotationStyle["LongDashed"] = "longDashed";
})(AnnotationStyle || (AnnotationStyle = {}));

function isFormulaAnnotationLayer(layer) {
  return layer.annotationType === AnnotationType.Formula;
}
function isEventAnnotationLayer(layer) {
  return layer.annotationType === AnnotationType.Event;
}
function isIntervalAnnotationLayer(layer) {
  return layer.annotationType === AnnotationType.Interval;
}
function isTimeseriesAnnotationLayer(layer) {
  return layer.annotationType === AnnotationType.Timeseries;
}
function isTableAnnotationLayer(layer) {
  return layer.sourceType === AnnotationSourceType.Table;
}
function isTimeseriesAnnotationResult(result) {
  return Array.isArray(result);
}
function isRecordAnnotationResult(result) {
  return 'columns' in result && 'records' in result;
}

/***/ }),

/***/ 75497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_createMultiFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62990);
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

const smartDateDetailedFormatter = (0,_factories_createMultiFormatter__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
  id: 'smart_date_detailed',
  label: 'Detailed adaptive formatter',
  formats: {
    millisecond: '%Y-%m-%d %H:%M:%S.%L',
    second: '%Y-%m-%d %H:%M:%S',
    minute: '%Y-%m-%d %H:%M',
    hour: '%Y-%m-%d %H:%M',
    day: '%Y-%m-%d',
    week: '%Y-%m-%d',
    month: '%Y-%m-%d',
    year: '%Y'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smartDateDetailedFormatter);

/***/ }),

/***/ 14181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ convertKeysToCamelCase)
/* harmony export */ });
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68929);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68630);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_mapKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67523);
/* harmony import */ var lodash_mapKeys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_mapKeys__WEBPACK_IMPORTED_MODULE_2__);
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



function convertKeysToCamelCase(object) {
  if (object === null || object === undefined) {
    return object;
  }

  if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(object)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return lodash_mapKeys__WEBPACK_IMPORTED_MODULE_2___default()(object, (_, k) => lodash_camelCase__WEBPACK_IMPORTED_MODULE_0___default()(k));
  }

  throw new Error(`Cannot convert input that is not a plain object: ${object}`);
}

/***/ }),

/***/ 56040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ensureIsInt)
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
function ensureIsInt(value, defaultValue) {
  const val = parseInt(String(value), 10);
  const defaultOrNaN = defaultValue === undefined ? NaN : defaultValue;
  return Number.isNaN(val) ? defaultOrNaN : val;
}

/***/ }),

/***/ 13555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ isDefined)
/* harmony export */ });
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
function isDefined(x) {
  return x !== null && x !== undefined;
}

/***/ }),

/***/ 81335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ seed),
/* harmony export */   "b": () => (/* binding */ seedRandom)
/* harmony export */ });
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36377);
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_0__);
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

let random = seedrandom__WEBPACK_IMPORTED_MODULE_0___default()('superset-ui');
function seed(seed) {
  random = seedrandom__WEBPACK_IMPORTED_MODULE_0___default()(seed);
  return random;
}
function seedRandom() {
  return random();
}

/***/ }),

/***/ 12971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ validateInteger)
/* harmony export */ });
/* harmony import */ var _translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60650);
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

function validateInteger(v) {
  if (typeof v === 'string' && v.trim().length > 0 && Number.isInteger(Number(v.trim())) || typeof v === 'number' && Number.isInteger(v)) {
    return false;
  }

  return (0,_translation__WEBPACK_IMPORTED_MODULE_0__.t)('is expected to be an integer');
}

/***/ }),

/***/ 10750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ParentSize)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23279);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91033);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ParentSize = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ParentSize, _React$Component);

  function ParentSize() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "animationFrameID", 0);

    _defineProperty(_assertThisInitialized(_this), "resizeObserver", void 0);

    _defineProperty(_assertThisInitialized(_this), "target", null);

    _defineProperty(_assertThisInitialized(_this), "state", {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    });

    _defineProperty(_assertThisInitialized(_this), "resize", lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref) {
      var width = _ref.width,
          height = _ref.height,
          top = _ref.top,
          left = _ref.left;

      _this.setState(function () {
        return {
          width: width,
          height: height,
          top: top,
          left: left
        };
      });
    }, _this.props.debounceTime, {
      leading: _this.props.enableDebounceLeadingCall
    }));

    _defineProperty(_assertThisInitialized(_this), "setTarget", function (ref) {
      _this.target = ref;
    });

    return _this;
  }

  var _proto = ParentSize.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_3__["default"](function (entries
    /** , observer */
    ) {
      if (entries === void 0) {
        entries = [];
      }

      entries.forEach(function (entry) {
        var _entry$contentRect = entry.contentRect,
            left = _entry$contentRect.left,
            top = _entry$contentRect.top,
            width = _entry$contentRect.width,
            height = _entry$contentRect.height;
        _this2.animationFrameID = window.requestAnimationFrame(function () {
          _this2.resize({
            width: width,
            height: height,
            top: top,
            left: left
          });
        });
      });
    });
    if (this.target) this.resizeObserver.observe(this.target);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameID);
    if (this.resizeObserver) this.resizeObserver.disconnect();
    this.resize.cancel();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        debounceTime = _this$props.debounceTime,
        parentSizeStyles = _this$props.parentSizeStyles,
        enableDebounceLeadingCall = _this$props.enableDebounceLeadingCall,
        restProps = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "debounceTime", "parentSizeStyles", "enableDebounceLeadingCall"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", _extends({
      style: parentSizeStyles,
      ref: this.setTarget,
      className: className
    }, restProps), children(_extends({}, this.state, {
      ref: this.target,
      resize: this.resize
    })));
  };

  return ParentSize;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

_defineProperty(ParentSize, "propTypes", {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  debounceTime: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  enableDebounceLeadingCall: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func.isRequired)
});

_defineProperty(ParentSize, "defaultProps", {
  debounceTime: 300,
  enableDebounceLeadingCall: true,
  parentSizeStyles: {
    width: '100%',
    height: '100%'
  }
});



/***/ }),

/***/ 38401:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withErrorBoundary = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _ErrorBoundaryFallbackComponent = __webpack_require__(13118);

var _ErrorBoundaryFallbackComponent2 = _interopRequireDefault(_ErrorBoundaryFallbackComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var babelPluginFlowReactPropTypes_proptype_ComponentType = __webpack_require__(67294).babelPluginFlowReactPropTypes_proptype_ComponentType || __webpack_require__(45697).any;

var ErrorBoundary = function (_Component) {
  _inherits(ErrorBoundary, _Component);

  function ErrorBoundary() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      error: null,
      info: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ErrorBoundary, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error, info) {
      var onError = this.props.onError;


      if (typeof onError === 'function') {
        try {
          /* istanbul ignore next: Ignoring ternary; can’t reproduce missing info in test environment. */
          onError.call(this, error, info ? info.componentStack : '');
        } catch (ignoredError) {}
      }

      this.setState({ error: error, info: info });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          FallbackComponent = _props.FallbackComponent;
      var _state = this.state,
          error = _state.error,
          info = _state.info;


      if (error !== null) {
        return _react2.default.createElement(FallbackComponent, {
          componentStack:
          // istanbul ignore next: Ignoring ternary; can’t reproduce missing info in test environment.
          info ? info.componentStack : '',
          error: error
        });
      }

      return children || null;
    }
  }]);

  return ErrorBoundary;
}(_react.Component);

ErrorBoundary.defaultProps = {
  FallbackComponent: _ErrorBoundaryFallbackComponent2.default
};
ErrorBoundary.propTypes = {
  error: typeof Error === 'function' ? __webpack_require__(45697).instanceOf(Error) : __webpack_require__(45697).any,
  info: __webpack_require__(45697).shape({
    componentStack: __webpack_require__(45697).string.isRequired
  })
};
var withErrorBoundary = exports.withErrorBoundary = function withErrorBoundary(Component, FallbackComponent, onError) {
  var Wrapped = function Wrapped(props) {
    return _react2.default.createElement(
      ErrorBoundary,
      { FallbackComponent: FallbackComponent, onError: onError },
      _react2.default.createElement(Component, props)
    );
  };

  // Format for display in DevTools
  var name = Component.displayName || Component.name;
  Wrapped.displayName = name ? 'WithErrorBoundary(' + name + ')' : 'WithErrorBoundary';

  return Wrapped;
};

withErrorBoundary.propTypes = babelPluginFlowReactPropTypes_proptype_ComponentType === __webpack_require__(45697).any ? {} : babelPluginFlowReactPropTypes_proptype_ComponentType;
exports["default"] = ErrorBoundary;

/***/ }),

/***/ 13118:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toTitle = function toTitle(error, componentStack) {
  return error.toString() + "\n\nThis is located at:" + componentStack;
};

var ErrorBoundaryFallbackComponent = function ErrorBoundaryFallbackComponent(_ref) {
  var componentStack = _ref.componentStack,
      error = _ref.error;
  return _react2.default.createElement(
    "div",
    { style: style, title: toTitle(error, componentStack) },
    _react2.default.createElement(
      "svg",
      { style: svgStyle, viewBox: "0 0 24 24", preserveAspectRatio: "xMidYMid" },
      _react2.default.createElement("path", {
        d: "M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,\n        12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,\n        12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,\n        9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,\n        8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,\n        15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,\n        17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z"
      })
    )
  );
};

ErrorBoundaryFallbackComponent.propTypes = {
  componentStack: __webpack_require__(45697).string.isRequired,
  error: typeof Error === "function" ? __webpack_require__(45697).instanceOf(Error).isRequired : __webpack_require__(45697).any.isRequired
};
var style = {
  height: '100%',
  maxHeight: '100vh',
  width: '100%',
  maxWidth: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#C00',
  color: '#FFF',
  boxSizing: 'border-box',
  cursor: 'help'
};

var svgStyle = {
  fill: 'currentColor',
  flex: '1 1 auto'
};

exports["default"] = ErrorBoundaryFallbackComponent;

/***/ }),

/***/ 47859:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = undefined;

var _ErrorBoundaryFallbackComponent = __webpack_require__(13118);

var _ErrorBoundaryFallbackComponent2 = _interopRequireDefault(_ErrorBoundaryFallbackComponent);

var _ErrorBoundary = __webpack_require__(38401);

var _ErrorBoundary2 = _interopRequireDefault(_ErrorBoundary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ZP = _ErrorBoundary2.default;
__webpack_unused_export__ = _ErrorBoundary2.default;
__webpack_unused_export__ = _ErrorBoundary.withErrorBoundary;
__webpack_unused_export__ = _ErrorBoundaryFallbackComponent2.default;

/***/ }),

/***/ 68356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(67294);
var PropTypes = __webpack_require__(45697);

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];

function isWebpackReady(getModuleIds) {
  if (( false ? 0 : _typeof(__webpack_require__.m)) !== "object") {
    return false;
  }

  return getModuleIds().every(function (moduleId) {
    return typeof moduleId !== "undefined" && typeof __webpack_require__.m[moduleId] !== "undefined";
  });
}

function load(loader) {
  var promise = loader();

  var state = {
    loading: true,
    loaded: null,
    error: null
  };

  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });

  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };

  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);

      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });

  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return React.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _class, _temp;

  if (!options.loading) {
    throw new Error("react-loadable requires a `loading` component");
  }

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);

  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }
    return res.promise;
  }

  ALL_INITIALIZERS.push(init);

  if (typeof opts.webpack === "function") {
    READY_INITIALIZERS.push(function () {
      if (isWebpackReady(opts.webpack)) {
        return init();
      }
    });
  }

  return _temp = _class = function (_React$Component) {
    _inherits(LoadableComponent, _React$Component);

    function LoadableComponent(props) {
      _classCallCheck(this, LoadableComponent);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.retry = function () {
        _this.setState({ error: null, loading: true, timedOut: false });
        res = loadFn(opts.loader);
        _this._loadModule();
      };

      init();

      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    LoadableComponent.preload = function preload() {
      return init();
    };

    LoadableComponent.prototype.componentWillMount = function componentWillMount() {
      this._mounted = true;
      this._loadModule();
    };

    LoadableComponent.prototype._loadModule = function _loadModule() {
      var _this2 = this;

      if (this.context.loadable && Array.isArray(opts.modules)) {
        opts.modules.forEach(function (moduleName) {
          _this2.context.loadable.report(moduleName);
        });
      }

      if (!res.loading) {
        return;
      }

      if (typeof opts.delay === "number") {
        if (opts.delay === 0) {
          this.setState({ pastDelay: true });
        } else {
          this._delay = setTimeout(function () {
            _this2.setState({ pastDelay: true });
          }, opts.delay);
        }
      }

      if (typeof opts.timeout === "number") {
        this._timeout = setTimeout(function () {
          _this2.setState({ timedOut: true });
        }, opts.timeout);
      }

      var update = function update() {
        if (!_this2._mounted) {
          return;
        }

        _this2.setState({
          error: res.error,
          loaded: res.loaded,
          loading: res.loading
        });

        _this2._clearTimeouts();
      };

      res.promise.then(function () {
        update();
      }).catch(function (err) {
        update();
      });
    };

    LoadableComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this._mounted = false;
      this._clearTimeouts();
    };

    LoadableComponent.prototype._clearTimeouts = function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    };

    LoadableComponent.prototype.render = function render() {
      if (this.state.loading || this.state.error) {
        return React.createElement(opts.loading, {
          isLoading: this.state.loading,
          pastDelay: this.state.pastDelay,
          timedOut: this.state.timedOut,
          error: this.state.error,
          retry: this.retry
        });
      } else if (this.state.loaded) {
        return opts.render(this.state.loaded, this.props);
      } else {
        return null;
      }
    };

    return LoadableComponent;
  }(React.Component), _class.contextTypes = {
    loadable: PropTypes.shape({
      report: PropTypes.func.isRequired
    })
  }, _temp;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== "function") {
    throw new Error("LoadableMap requires a `render(loaded, props)` function");
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

var Capture = function (_React$Component2) {
  _inherits(Capture, _React$Component2);

  function Capture() {
    _classCallCheck(this, Capture);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Capture.prototype.getChildContext = function getChildContext() {
    return {
      loadable: {
        report: this.props.report
      }
    };
  };

  Capture.prototype.render = function render() {
    return React.Children.only(this.props.children);
  };

  return Capture;
}(React.Component);

Capture.propTypes = {
  report: PropTypes.func.isRequired
};
Capture.childContextTypes = {
  loadable: PropTypes.shape({
    report: PropTypes.func.isRequired
  }).isRequired
};


Loadable.Capture = Capture;

function flushInitializers(initializers) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init());
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  return new Promise(function (resolve, reject) {
    // We always will resolve, errors should be handled within loading UIs.
    flushInitializers(READY_INITIALIZERS).then(resolve, resolve);
  });
};

module.exports = Loadable;

/***/ }),

/***/ 22222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P1": () => (/* binding */ createSelector)
/* harmony export */ });
/* unused harmony exports defaultMemoize, createSelectorCreator, createStructuredSelector */
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ 36377:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(84832);

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(68652);

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(90801);

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(92030);

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(3618);

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(89049);

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(51971);

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;


/***/ }),

/***/ 84832:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = String(data);
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.alea = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ 89049:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.tychei = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ 68652:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor128 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ 3618:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);


/***/ }),

/***/ 92030:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorshift7 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);



/***/ }),

/***/ 90801:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorwow = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ 51971:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (global, pool, math) {
//
// The following constants are related to IEEE 754 limits.
//

var width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ( true && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = __webpack_require__(75042);
  } catch (ex) {}
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return seedrandom; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


// End anonymous scope, and pass initial values.
})(
  // global: `self` in browsers (including strict mode and web workers),
  // otherwise `this` in Node and other environments
  (typeof self !== 'undefined') ? self : this,
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);


/***/ })

}]);