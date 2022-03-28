(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[5322,7893],{

/***/ 50600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Legend)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js
var NumberFormatterRegistrySingleton = __webpack_require__(50855);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.js
/* eslint-disable react/jsx-sort-default-props */

/* eslint-disable react/sort-prop-types */

/* eslint-disable jsx-a11y/anchor-is-valid */

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




const categoryDelimiter = ' - ';
const propTypes = {
  categories: (prop_types_default()).object,
  forceCategorical: (prop_types_default()).bool,
  format: (prop_types_default()).string,
  position: prop_types_default().oneOf([null, 'tl', 'tr', 'bl', 'br']),
  showSingleCategory: (prop_types_default()).func,
  toggleCategory: (prop_types_default()).func
};
const defaultProps = {
  categories: {},
  forceCategorical: false,
  format: null,
  position: 'tr',
  showSingleCategory: () => {},
  toggleCategory: () => {}
};
class Legend extends react.PureComponent {
  format(value) {
    if (!this.props.format || this.props.forceCategorical) {
      return value;
    }

    const numValue = parseFloat(value);
    return (0,NumberFormatterRegistrySingleton/* formatNumber */.uf)(this.props.format, numValue);
  }

  formatCategoryLabel(k) {
    if (!this.props.format) {
      return k;
    }

    if (k.includes(categoryDelimiter)) {
      const values = k.split(categoryDelimiter);
      return this.format(values[0]) + categoryDelimiter + this.format(values[1]);
    }

    return this.format(k);
  }

  render() {
    if (Object.keys(this.props.categories).length === 0 || this.props.position === null) {
      return null;
    }

    const categories = Object.entries(this.props.categories).map((_ref) => {
      let [k, v] = _ref;
      const style = {
        color: "rgba(" + v.color.join(', ') + ")"
      };
      const icon = v.enabled ? '\u25FC' : '\u25FB';
      return react.createElement("li", {
        key: k
      }, react.createElement("a", {
        href: "#",
        onClick: () => this.props.toggleCategory(k),
        onDoubleClick: () => this.props.showSingleCategory(k)
      }, react.createElement("span", {
        style: style
      }, icon), " ", this.formatCategoryLabel(k)));
    });
    const vertical = this.props.position.charAt(0) === 't' ? 'top' : 'bottom';
    const horizontal = this.props.position.charAt(1) === 'r' ? 'right' : 'left';
    const style = {
      position: 'absolute',
      [vertical]: '0px',
      [horizontal]: '10px'
    };
    return react.createElement("div", {
      className: "legend",
      style: style
    }, react.createElement("ul", {
      className: "categories"
    }, categories));
  }

}
Legend.propTypes = propTypes;
Legend.defaultProps = defaultProps;

/***/ }),

/***/ 52598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ createCategoricalDeckGLComponent),
  "G": () => (/* binding */ createDeckGLComponent)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/DeckGLContainer.js + 91 modules
var DeckGLContainer = __webpack_require__(85011);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalColorNamespace.js
var CategoricalColorNamespace = __webpack_require__(83527);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/AnimatableDeckGLContainer.js + 4 modules
var AnimatableDeckGLContainer = __webpack_require__(89759);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.js + 1 modules
var Legend = __webpack_require__(50600);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/colors.js
var colors = __webpack_require__(15191);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/time.js
var time = __webpack_require__(57485);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/sandbox.js + 161 modules
var sandbox = __webpack_require__(88574);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/fitViewport.js + 1 modules
var fitViewport = __webpack_require__(50980);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/CategoricalDeckGLContainer.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/sort-prop-types */

/* eslint-disable react/require-default-props */

/* eslint-disable react/no-unused-prop-types */

/* eslint-disable react/no-access-state-in-setstate */

/* eslint-disable camelcase */

/* eslint-disable no-prototype-builtins */

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

/* eslint no-underscore-dangle: ["error", { "allow": ["", "__timestamp"] }] */







 // eslint-disable-next-line import/extensions


const {
  getScale
} = CategoricalColorNamespace;

function getCategories(fd, data) {
  const c = fd.color_picker || {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
  const fixedColor = [c.r, c.g, c.b, 255 * c.a];
  const colorFn = getScale(fd.color_scheme);
  const categories = {};
  data.forEach(d => {
    if (d.cat_color != null && !categories.hasOwnProperty(d.cat_color)) {
      let color;

      if (fd.dimension) {
        color = (0,colors.hexToRGB)(colorFn(d.cat_color), c.a * 255);
      } else {
        color = fixedColor;
      }

      categories[d.cat_color] = {
        color,
        enabled: true
      };
    }
  });
  return categories;
}

const propTypes = {
  datasource: (prop_types_default()).object.isRequired,
  formData: (prop_types_default()).object.isRequired,
  getLayer: (prop_types_default()).func.isRequired,
  getPoints: (prop_types_default()).func.isRequired,
  height: (prop_types_default()).number.isRequired,
  mapboxApiKey: (prop_types_default()).string.isRequired,
  onAddFilter: (prop_types_default()).func,
  payload: (prop_types_default()).object.isRequired,
  setControlValue: (prop_types_default()).func.isRequired,
  viewport: (prop_types_default()).object.isRequired,
  width: (prop_types_default()).number.isRequired
};
class CategoricalDeckGLContainer extends react.PureComponent {
  /*
   * A Deck.gl container that handles categories.
   *
   * The container will have an interactive legend, populated from the
   * categories present in the data.
   */
  constructor(props) {
    super(props);

    _defineProperty(this, "containerRef", react.createRef());

    _defineProperty(this, "setTooltip", tooltip => {
      const {
        current
      } = this.containerRef;

      if (current) {
        current.setTooltip(tooltip);
      }
    });

    this.state = this.getStateFromProps(props);
    this.getLayers = this.getLayers.bind(this);
    this.onValuesChange = this.onValuesChange.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
    this.showSingleCategory = this.showSingleCategory.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.payload.form_data !== this.state.formData) {
      this.setState(_extends({}, this.getStateFromProps(nextProps)));
    }
  }

  onValuesChange(values) {
    this.setState({
      values: Array.isArray(values) ? values : [values, values + this.state.getStep(values)]
    });
  } // eslint-disable-next-line class-methods-use-this


  getStateFromProps(props, state) {
    const features = props.payload.data.features || [];
    const timestamps = features.map(f => f.__timestamp);
    const categories = getCategories(props.formData, features); // the state is computed only from the payload; if it hasn't changed, do
    // not recompute state since this would reset selections and/or the play
    // slider position due to changes in form controls

    if (state && props.payload.form_data === state.formData) {
      return _extends({}, state, {
        categories
      });
    } // the granularity has to be read from the payload form_data, not the
    // props formData which comes from the instantaneous controls state


    const granularity = props.payload.form_data.time_grain_sqla || props.payload.form_data.granularity || 'P1D';
    const {
      start,
      end,
      getStep,
      values,
      disabled
    } = (0,time/* getPlaySliderParams */.g)(timestamps, granularity);
    const {
      width,
      height,
      formData
    } = props;
    let {
      viewport
    } = props;

    if (formData.autozoom) {
      viewport = (0,fitViewport/* default */.Z)(viewport, {
        width,
        height,
        points: props.getPoints(features)
      });
    }

    if (viewport.zoom < 0) {
      viewport.zoom = 0;
    }

    return {
      start,
      end,
      getStep,
      values,
      disabled,
      viewport,
      selected: [],
      lastClick: 0,
      formData: props.payload.form_data,
      categories
    };
  }

  getLayers(values) {
    const {
      getLayer,
      payload,
      formData: fd,
      onAddFilter
    } = this.props;
    let features = payload.data.features ? [...payload.data.features] : []; // Add colors from categories or fixed color

    features = this.addColor(features, fd); // Apply user defined data mutator if defined

    if (fd.js_data_mutator) {
      const jsFnMutator = (0,sandbox/* default */.Z)(fd.js_data_mutator);
      features = jsFnMutator(features);
    } // Filter by time


    if (values[0] === values[1] || values[1] === this.end) {
      features = features.filter(d => d.__timestamp >= values[0] && d.__timestamp <= values[1]);
    } else {
      features = features.filter(d => d.__timestamp >= values[0] && d.__timestamp < values[1]);
    } // Show only categories selected in the legend


    const cats = this.state.categories;

    if (fd.dimension) {
      features = features.filter(d => cats[d.cat_color] && cats[d.cat_color].enabled);
    }

    const filteredPayload = _extends({}, payload, {
      data: _extends({}, payload.data, {
        features
      })
    });

    return [getLayer(fd, filteredPayload, onAddFilter, this.setTooltip, this.props.datasource)];
  } // eslint-disable-next-line class-methods-use-this


  addColor(data, fd) {
    const c = fd.color_picker || {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
    const colorFn = getScale(fd.color_scheme);
    return data.map(d => {
      let color;

      if (fd.dimension) {
        color = (0,colors.hexToRGB)(colorFn(d.cat_color), c.a * 255);
        return _extends({}, d, {
          color
        });
      }

      return d;
    });
  }

  toggleCategory(category) {
    const categoryState = this.state.categories[category];

    const categories = _extends({}, this.state.categories, {
      [category]: _extends({}, categoryState, {
        enabled: !categoryState.enabled
      })
    }); // if all categories are disabled, enable all -- similar to nvd3


    if (Object.values(categories).every(v => !v.enabled)) {
      /* eslint-disable no-param-reassign */
      Object.values(categories).forEach(v => {
        v.enabled = true;
      });
    }

    this.setState({
      categories
    });
  }

  showSingleCategory(category) {
    const categories = _extends({}, this.state.categories);
    /* eslint-disable no-param-reassign */


    Object.values(categories).forEach(v => {
      v.enabled = false;
    });
    categories[category].enabled = true;
    this.setState({
      categories
    });
  }

  render() {
    return react.createElement("div", {
      style: {
        position: 'relative'
      }
    }, react.createElement(AnimatableDeckGLContainer/* default */.Z, {
      ref: this.containerRef,
      getLayers: this.getLayers,
      start: this.state.start,
      end: this.state.end,
      getStep: this.state.getStep,
      values: this.state.values,
      disabled: this.state.disabled,
      viewport: this.state.viewport,
      mapboxApiAccessToken: this.props.mapboxApiKey,
      mapStyle: this.props.formData.mapbox_style,
      setControlValue: this.props.setControlValue,
      width: this.props.width,
      height: this.props.height
    }, react.createElement(Legend/* default */.Z, {
      forceCategorical: true,
      categories: this.state.categories,
      format: this.props.formData.legend_format,
      position: this.props.formData.legend_position,
      showSingleCategory: this.showSingleCategory,
      toggleCategory: this.toggleCategory
    })));
  }

}
CategoricalDeckGLContainer.propTypes = propTypes;
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/factory.js
function factory_extends() { factory_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return factory_extends.apply(this, arguments); }

function factory_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/sort-prop-types */

/* eslint-disable react/jsx-handler-names */

/* eslint-disable camelcase */

/* eslint-disable react/no-unused-prop-types */

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




 // eslint-disable-next-line import/extensions


const factory_propTypes = {
  datasource: (prop_types_default()).object.isRequired,
  formData: (prop_types_default()).object.isRequired,
  height: (prop_types_default()).number.isRequired,
  onAddFilter: (prop_types_default()).func,
  payload: (prop_types_default()).object.isRequired,
  setControlValue: (prop_types_default()).func.isRequired,
  viewport: (prop_types_default()).object.isRequired,
  width: (prop_types_default()).number.isRequired
};
const defaultProps = {
  onAddFilter() {}

};
function createDeckGLComponent(getLayer, getPoints) {
  // Higher order component
  class Component extends react.PureComponent {
    constructor(props) {
      super(props);

      factory_defineProperty(this, "containerRef", react.createRef());

      factory_defineProperty(this, "setTooltip", tooltip => {
        const {
          current
        } = this.containerRef;

        if (current) {
          current.setTooltip(tooltip);
        }
      });

      const {
        width,
        height,
        formData
      } = props;
      let {
        viewport
      } = props;

      if (formData.autozoom) {
        viewport = (0,fitViewport/* default */.Z)(viewport, {
          width,
          height,
          points: getPoints(props.payload.data.features)
        });
      }

      this.state = {
        viewport,
        layer: this.computeLayer(props)
      };
      this.onViewportChange = this.onViewportChange.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      // Only recompute the layer if anything BUT the viewport has changed
      const nextFdNoVP = factory_extends({}, nextProps.formData, {
        viewport: null
      });

      const currFdNoVP = factory_extends({}, this.props.formData, {
        viewport: null
      });

      if (!(0,lodash.isEqual)(nextFdNoVP, currFdNoVP) || nextProps.payload !== this.props.payload) {
        this.setState({
          layer: this.computeLayer(nextProps)
        });
      }
    }

    onViewportChange(viewport) {
      this.setState({
        viewport
      });
    }

    computeLayer(props) {
      const {
        formData,
        payload,
        onAddFilter
      } = props;
      return getLayer(formData, payload, onAddFilter, this.setTooltip);
    }

    render() {
      const {
        formData,
        payload,
        setControlValue,
        height,
        width
      } = this.props;
      const {
        layer,
        viewport
      } = this.state;
      return react.createElement(DeckGLContainer/* default */.Z, {
        ref: this.containerRef,
        mapboxApiAccessToken: payload.data.mapboxApiKey,
        viewport: viewport,
        layers: [layer],
        mapStyle: formData.mapbox_style,
        setControlValue: setControlValue,
        width: width,
        height: height,
        onViewportChange: this.onViewportChange
      });
    }

  }

  Component.propTypes = factory_propTypes;
  Component.defaultProps = defaultProps;
  return Component;
}
function createCategoricalDeckGLComponent(getLayer, getPoints) {
  function Component(props) {
    const {
      datasource,
      formData,
      height,
      payload,
      setControlValue,
      viewport,
      width
    } = props;
    return react.createElement(CategoricalDeckGLContainer, {
      datasource: datasource,
      formData: formData,
      mapboxApiKey: payload.data.mapboxApiKey,
      setControlValue: setControlValue,
      viewport: viewport,
      getLayer: getLayer,
      payload: payload,
      getPoints: getPoints,
      width: width,
      height: height
    });
  }

  Component.propTypes = factory_propTypes;
  Component.defaultProps = defaultProps;
  return Component;
}

/***/ }),

/***/ 66585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Arc),
  "getLayer": () => (/* binding */ getLayer)
});

// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/layer.js + 11 modules
var lib_layer = __webpack_require__(95772);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/project32/project32.js
var project32 = __webpack_require__(93844);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/picking/picking.js + 1 modules
var picking = __webpack_require__(51331);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/lib/model.js + 9 modules
var lib_model = __webpack_require__(281);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/geometry/geometry.js
var geometry = __webpack_require__(53982);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer-vertex.glsl.js
/* harmony default export */ const arc_layer_vertex_glsl = ("#define SHADER_NAME arc-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec4 instanceSourceColors;\nattribute vec4 instanceTargetColors;\nattribute vec3 instanceSourcePositions;\nattribute vec3 instanceSourcePositions64Low;\nattribute vec3 instanceTargetPositions;\nattribute vec3 instanceTargetPositions64Low;\nattribute vec3 instancePickingColors;\nattribute float instanceWidths;\nattribute float instanceHeights;\nattribute float instanceTilts;\n\nuniform bool greatCircle;\nuniform bool useShortestPath;\nuniform float numSegments;\nuniform float opacity;\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\n\nvarying vec4 vColor;\nvarying vec2 uv;\nvarying float isValid;\n\nfloat paraboloid(float distance, float sourceZ, float targetZ, float ratio) {\n\n  float deltaZ = targetZ - sourceZ;\n  float dh = distance * instanceHeights;\n  if (dh == 0.0) {\n    return sourceZ + deltaZ * ratio;\n  }\n  float unitZ = deltaZ / dh;\n  float p2 = unitZ * unitZ + 1.0;\n  float dir = step(deltaZ, 0.0);\n  float z0 = mix(sourceZ, targetZ, dir);\n  float r = mix(ratio, 1.0 - ratio, dir);\n  return sqrt(r * (p2 - r)) * dh + z0;\n}\nvec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {\n  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);\n  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);\n\n  return dir_screenspace * offset_direction * width / 2.0;\n}\n\nfloat getSegmentRatio(float index) {\n  return smoothstep(0.0, 1.0, index / (numSegments - 1.0));\n}\n\nvec3 interpolateFlat(vec3 source, vec3 target, float segmentRatio) {\n  float distance = length(source.xy - target.xy);\n  float z = paraboloid(distance, source.z, target.z, segmentRatio);\n\n  float tiltAngle = radians(instanceTilts);\n  vec2 tiltDirection = normalize(target.xy - source.xy);\n  vec2 tilt = vec2(-tiltDirection.y, tiltDirection.x) * z * sin(tiltAngle);\n\n  return vec3(\n    mix(source.xy, target.xy, segmentRatio) + tilt,\n    z * cos(tiltAngle)\n  );\n}\nfloat getAngularDist (vec2 source, vec2 target) {\n  vec2 sourceRadians = radians(source);\n  vec2 targetRadians = radians(target);\n  vec2 sin_half_delta = sin((sourceRadians - targetRadians) / 2.0);\n  vec2 shd_sq = sin_half_delta * sin_half_delta;\n\n  float a = shd_sq.y + cos(sourceRadians.y) * cos(targetRadians.y) * shd_sq.x;\n  return 2.0 * asin(sqrt(a));\n}\n\nvec3 interpolateGreatCircle(vec3 source, vec3 target, vec3 source3D, vec3 target3D, float angularDist, float t) {\n  vec2 lngLat;\n  if(abs(angularDist - PI) < 0.001) {\n    lngLat = (1.0 - t) * source.xy + t * target.xy;\n  } else {\n    float a = sin((1.0 - t) * angularDist);\n    float b = sin(t * angularDist);\n    vec3 p = source3D.yxz * a + target3D.yxz * b;\n    lngLat = degrees(vec2(atan(p.y, -p.x), atan(p.z, length(p.xy))));\n  }\n\n  float z = paraboloid(angularDist * EARTH_RADIUS, source.z, target.z, t);\n\n  return vec3(lngLat, z);\n}\n\nvoid main(void) {\n  geometry.worldPosition = instanceSourcePositions;\n  geometry.worldPositionAlt = instanceTargetPositions;\n\n  float segmentIndex = positions.x;\n  float segmentRatio = getSegmentRatio(segmentIndex);\n  float prevSegmentRatio = getSegmentRatio(max(0.0, segmentIndex - 1.0));\n  float nextSegmentRatio = getSegmentRatio(min(numSegments - 1.0, segmentIndex + 1.0));\n  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));\n  isValid = 1.0;\n\n  uv = vec2(segmentRatio, positions.y);\n  geometry.uv = uv;\n  geometry.pickingColor = instancePickingColors;\n\n  vec4 curr;\n  vec4 next;\n  vec3 source;\n  vec3 target;\n\n  if ((greatCircle || project_uProjectionMode == PROJECTION_MODE_GLOBE) && project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT) {\n    source = project_globe_(vec3(instanceSourcePositions.xy, 0.0));\n    target = project_globe_(vec3(instanceTargetPositions.xy, 0.0));\n    float angularDist = getAngularDist(instanceSourcePositions.xy, instanceTargetPositions.xy);\n\n    vec3 prevPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, prevSegmentRatio);\n    vec3 currPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, segmentRatio);\n    vec3 nextPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, nextSegmentRatio);\n\n    if (abs(currPos.x - prevPos.x) > 180.0) {\n      indexDir = -1.0;\n      isValid = 0.0;\n    } else if (abs(currPos.x - nextPos.x) > 180.0) {\n      indexDir = 1.0;\n      isValid = 0.0;\n    }\n    nextPos = indexDir < 0.0 ? prevPos : nextPos;\n    nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;\n\n    if (isValid == 0.0) {\n      nextPos.x += nextPos.x > 0.0 ? -360.0 : 360.0;\n      float t = ((currPos.x > 0.0 ? 180.0 : -180.0) - currPos.x) / (nextPos.x - currPos.x);\n      currPos = mix(currPos, nextPos, t);\n      segmentRatio = mix(segmentRatio, nextSegmentRatio, t);\n    }\n\n    vec3 currPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, segmentRatio);\n    vec3 nextPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, nextSegmentRatio);\n  \n    curr = project_position_to_clipspace(currPos, currPos64Low, vec3(0.0), geometry.position);\n    next = project_position_to_clipspace(nextPos, nextPos64Low, vec3(0.0));\n  \n  } else {\n    vec3 source_world = instanceSourcePositions;\n    vec3 target_world = instanceTargetPositions;\n    if (useShortestPath) {\n      source_world.x = mod(source_world.x + 180., 360.0) - 180.;\n      target_world.x = mod(target_world.x + 180., 360.0) - 180.;\n\n      float deltaLng = target_world.x - source_world.x;\n      if (deltaLng > 180.) target_world.x -= 360.;\n      if (deltaLng < -180.) source_world.x -= 360.;\n    }\n    source = project_position(source_world, instanceSourcePositions64Low);\n    target = project_position(target_world, instanceTargetPositions64Low);\n    float antiMeridianX = 0.0;\n\n    if (useShortestPath) {\n      if (project_uProjectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {\n        antiMeridianX = -(project_uCoordinateOrigin.x + 180.) / 360. * TILE_SIZE;\n      }\n      float thresholdRatio = (antiMeridianX - source.x) / (target.x - source.x);\n\n      if (prevSegmentRatio <= thresholdRatio && nextSegmentRatio > thresholdRatio) {\n        isValid = 0.0;\n        indexDir = sign(segmentRatio - thresholdRatio);\n        segmentRatio = thresholdRatio;\n      }\n    }\n\n    nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;\n    vec3 currPos = interpolateFlat(source, target, segmentRatio);\n    vec3 nextPos = interpolateFlat(source, target, nextSegmentRatio);\n\n    if (useShortestPath) {\n      if (nextPos.x < antiMeridianX) {\n        currPos.x += TILE_SIZE;\n        nextPos.x += TILE_SIZE;\n      }\n    }\n\n    curr = project_common_position_to_clipspace(vec4(currPos, 1.0));\n    next = project_common_position_to_clipspace(vec4(nextPos, 1.0));\n    geometry.position = vec4(currPos, 1.0);\n  }\n  float widthPixels = clamp(\n    project_size_to_pixel(instanceWidths * widthScale),\n    widthMinPixels, widthMaxPixels\n  );\n  vec3 offset = vec3(\n    getExtrusionOffset((next.xy - curr.xy) * indexDir, positions.y, widthPixels),\n    0.0);\n  DECKGL_FILTER_SIZE(offset, geometry);\n  gl_Position = curr + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n\n  vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio);\n  vColor = vec4(color.rgb, color.a * opacity);\n  DECKGL_FILTER_COLOR(vColor, geometry);\n}\n");
//# sourceMappingURL=arc-layer-vertex.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer-fragment.glsl.js
/* harmony default export */ const arc_layer_fragment_glsl = ("#define SHADER_NAME arc-layer-fragment-shader\n\nprecision highp float;\n\nvarying vec4 vColor;\nvarying vec2 uv;\nvarying float isValid;\n\nvoid main(void) {\n  if (isValid == 0.0) {\n    discard;\n  }\n\n  gl_FragColor = vColor;\n  geometry.uv = uv;\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n");
//# sourceMappingURL=arc-layer-fragment.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer.js




const DEFAULT_COLOR = [0, 0, 0, 255];
const defaultProps = {
  getSourcePosition: {
    type: 'accessor',
    value: x => x.sourcePosition
  },
  getTargetPosition: {
    type: 'accessor',
    value: x => x.targetPosition
  },
  getSourceColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getTargetColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getWidth: {
    type: 'accessor',
    value: 1
  },
  getHeight: {
    type: 'accessor',
    value: 1
  },
  getTilt: {
    type: 'accessor',
    value: 0
  },
  greatCircle: false,
  widthUnits: 'pixels',
  widthScale: {
    type: 'number',
    value: 1,
    min: 0
  },
  widthMinPixels: {
    type: 'number',
    value: 0,
    min: 0
  },
  widthMaxPixels: {
    type: 'number',
    value: Number.MAX_SAFE_INTEGER,
    min: 0
  }
};
class ArcLayer extends lib_layer/* default */.Z {
  getShaders() {
    return super.getShaders({
      vs: arc_layer_vertex_glsl,
      fs: arc_layer_fragment_glsl,
      modules: [project32/* default */.Z, picking/* default */.Z]
    });
  }

  get wrapLongitude() {
    return false;
  }

  initializeState() {
    const attributeManager = this.getAttributeManager();
    attributeManager.addInstanced({
      instanceSourcePositions: {
        size: 3,
        type: 5130,
        fp64: this.use64bitPositions(),
        transition: true,
        accessor: 'getSourcePosition'
      },
      instanceTargetPositions: {
        size: 3,
        type: 5130,
        fp64: this.use64bitPositions(),
        transition: true,
        accessor: 'getTargetPosition'
      },
      instanceSourceColors: {
        size: this.props.colorFormat.length,
        type: 5121,
        normalized: true,
        transition: true,
        accessor: 'getSourceColor',
        defaultValue: DEFAULT_COLOR
      },
      instanceTargetColors: {
        size: this.props.colorFormat.length,
        type: 5121,
        normalized: true,
        transition: true,
        accessor: 'getTargetColor',
        defaultValue: DEFAULT_COLOR
      },
      instanceWidths: {
        size: 1,
        transition: true,
        accessor: 'getWidth',
        defaultValue: 1
      },
      instanceHeights: {
        size: 1,
        transition: true,
        accessor: 'getHeight',
        defaultValue: 1
      },
      instanceTilts: {
        size: 1,
        transition: true,
        accessor: 'getTilt',
        defaultValue: 0
      }
    });
  }

  updateState({
    props,
    oldProps,
    changeFlags
  }) {
    super.updateState({
      props,
      oldProps,
      changeFlags
    });

    if (changeFlags.extensionsChanged) {
      var _this$state$model;

      const {
        gl
      } = this.context;
      (_this$state$model = this.state.model) === null || _this$state$model === void 0 ? void 0 : _this$state$model.delete();
      this.state.model = this._getModel(gl);
      this.getAttributeManager().invalidateAll();
    }
  }

  draw({
    uniforms
  }) {
    const {
      viewport
    } = this.context;
    const {
      widthUnits,
      widthScale,
      widthMinPixels,
      widthMaxPixels,
      greatCircle,
      wrapLongitude
    } = this.props;
    const widthMultiplier = widthUnits === 'pixels' ? viewport.metersPerPixel : 1;
    this.state.model.setUniforms(uniforms).setUniforms({
      greatCircle,
      widthScale: widthScale * widthMultiplier,
      widthMinPixels,
      widthMaxPixels,
      useShortestPath: wrapLongitude
    }).draw();
  }

  _getModel(gl) {
    let positions = [];
    const NUM_SEGMENTS = 50;

    for (let i = 0; i < NUM_SEGMENTS; i++) {
      positions = positions.concat([i, 1, 0, i, -1, 0]);
    }

    const model = new lib_model/* default */.Z(gl, { ...this.getShaders(),
      id: this.props.id,
      geometry: new geometry/* default */.Z({
        drawMode: 5,
        attributes: {
          positions: new Float32Array(positions)
        }
      }),
      isInstanced: true
    });
    model.setUniforms({
      numSegments: NUM_SEGMENTS
    });
    return model;
  }

}
ArcLayer.layerName = 'ArcLayer';
ArcLayer.defaultProps = defaultProps;
//# sourceMappingURL=arc-layer.js.map
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/common.js
var common = __webpack_require__(37032);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/factory.js + 1 modules
var factory = __webpack_require__(52598);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/TooltipRow.js
var TooltipRow = __webpack_require__(57981);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Arc/Arc.js
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







function getPoints(data) {
  const points = [];
  data.forEach(d => {
    points.push(d.sourcePosition);
    points.push(d.targetPosition);
  });
  return points;
}

function setTooltipContent(formData) {
  return o => react.createElement("div", {
    className: "deckgl-tooltip"
  }, react.createElement(TooltipRow/* default */.Z, {
    label: (0,TranslatorSingleton.t)('Start (Longitude, Latitude)') + ": ",
    value: o.object.sourcePosition[0] + ", " + o.object.sourcePosition[1]
  }), react.createElement(TooltipRow/* default */.Z, {
    label: (0,TranslatorSingleton.t)('End (Longitude, Latitude)') + ": ",
    value: o.object.targetPosition[0] + ", " + o.object.targetPosition[1]
  }), formData.dimension && react.createElement(TooltipRow/* default */.Z, {
    label: formData.dimension + ": ",
    value: "" + o.object.cat_color
  }));
}

function getLayer(fd, payload, onAddFilter, setTooltip) {
  const data = payload.data.features;
  const sc = fd.color_picker;
  const tc = fd.target_color_picker;
  return new ArcLayer(_extends({
    data,
    getSourceColor: d => d.sourceColor || d.color || [sc.r, sc.g, sc.b, 255 * sc.a],
    getTargetColor: d => d.targetColor || d.color || [tc.r, tc.g, tc.b, 255 * tc.a],
    id: "path-layer-" + fd.slice_id,
    strokeWidth: fd.stroke_width ? fd.stroke_width : 3
  }, (0,common/* commonLayerProps */.N)(fd, setTooltip, setTooltipContent(fd))));
}
/* harmony default export */ const Arc = ((0,factory/* createCategoricalDeckGLComponent */.B)(getLayer, getPoints));

/***/ }),

/***/ 92540:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 95751:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 75307:
/***/ (() => {

/* (ignored) */

/***/ })

}]);