(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[3776,7893],{

/***/ 46811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Multi)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/DeckGLContainer.js + 91 modules
var DeckGLContainer = __webpack_require__(85011);
// EXTERNAL MODULE: ./node_modules/urijs/src/URI.js
var URI = __webpack_require__(54998);
var URI_default = /*#__PURE__*/__webpack_require__.n(URI);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/safeStringify.js
/* eslint-disable consistent-return */

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
 * A Stringify function that will not crash when it runs into circular JSON references,
 * unlike JSON.stringify. Any circular references are simply omitted, as if there had
 * been no data present
 * @param object any JSON object to be stringified
 */
// eslint-disable-next-line import/prefer-default-export
function safeStringify(object) {
  const cache = new Set();
  return JSON.stringify(object, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        // We've seen this object before
        try {
          // Quick deep copy to duplicate if this is a repeat rather than a circle.
          return JSON.parse(JSON.stringify(value));
        } catch (error) {
          // Discard key if value cannot be duplicated.
          return;
        }
      } // Store the value in our cache.


      cache.add(value);
    }

    return value;
  });
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/explore.js


const MAX_URL_LENGTH = 8000;
function getURIDirectory(formData, endpointType) {
  if (endpointType === void 0) {
    endpointType = 'base';
  }

  // Building the directory part of the URI
  let directory = '/superset/explore/';

  if (['json', 'csv', 'query', 'results', 'samples'].includes(endpointType)) {
    directory = '/superset/explore_json/';
  }

  return directory;
}
function getExploreLongUrl(formData, endpointType, allowOverflow, extraSearch) {
  if (allowOverflow === void 0) {
    allowOverflow = true;
  }

  if (extraSearch === void 0) {
    extraSearch = {};
  }

  if (!formData.datasource) {
    return null;
  }

  const uri = new (URI_default())('/');
  const directory = getURIDirectory(formData, endpointType);
  const search = uri.search(true);
  Object.keys(extraSearch).forEach(key => {
    search[key] = extraSearch[key];
  });
  search.form_data = safeStringify(formData);

  if (endpointType === 'standalone') {
    search.standalone = 'true';
  }

  const url = uri.directory(directory).search(search).toString();

  if (!allowOverflow && url.length > MAX_URL_LENGTH) {
    const minimalFormData = {
      datasource: formData.datasource,
      viz_type: formData.viz_type
    };
    return getExploreLongUrl(minimalFormData, endpointType, false, {
      URL_IS_TOO_LONG_TO_SHARE: null
    });
  }

  return url;
}
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Grid/Grid.js + 8 modules
var Grid = __webpack_require__(54486);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Screengrid/Screengrid.js + 4 modules
var Screengrid = __webpack_require__(28230);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Path/Path.js
var Path = __webpack_require__(97492);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Hex/Hex.js + 4 modules
var Hex = __webpack_require__(1186);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Scatter/Scatter.js + 2 modules
var Scatter = __webpack_require__(4598);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Geojson/Geojson.js + 18 modules
var Geojson = __webpack_require__(24022);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Arc/Arc.js + 3 modules
var Arc = __webpack_require__(66585);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Polygon/Polygon.js + 3 modules
var Polygon = __webpack_require__(83265);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/index.js
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








const layerGenerators = {
  deck_grid: Grid.getLayer,
  deck_screengrid: Screengrid.getLayer,
  deck_path: Path.getLayer,
  deck_hex: Hex.getLayer,
  deck_scatter: Scatter.getLayer,
  deck_geojson: Geojson.getLayer,
  deck_arc: Arc.getLayer,
  deck_polygon: Polygon.getLayer
};
/* harmony default export */ const esm_layers = (layerGenerators);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/Multi/Multi.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-handler-names */

/* eslint-disable react/no-access-state-in-setstate */

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







const propTypes = {
  formData: (prop_types_default()).object.isRequired,
  payload: (prop_types_default()).object.isRequired,
  setControlValue: (prop_types_default()).func.isRequired,
  viewport: (prop_types_default()).object.isRequired,
  onAddFilter: (prop_types_default()).func,
  onSelect: (prop_types_default()).func
};
const defaultProps = {
  onAddFilter() {},

  onSelect() {}

};

class DeckMulti extends react.PureComponent {
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

    this.state = {
      subSlicesLayers: {}
    };
    this.onViewportChange = this.onViewportChange.bind(this);
  }

  componentDidMount() {
    const {
      formData,
      payload
    } = this.props;
    this.loadLayers(formData, payload);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      formData,
      payload
    } = nextProps;
    const hasChanges = !lodash_default().isEqual(this.props.formData.deck_slices, nextProps.formData.deck_slices);

    if (hasChanges) {
      this.loadLayers(formData, payload);
    }
  }

  onViewportChange(viewport) {
    this.setState({
      viewport
    });
  }

  loadLayers(formData, payload, viewport) {
    this.setState({
      subSlicesLayers: {},
      viewport
    });
    payload.data.slices.forEach(subslice => {
      // Filters applied to multi_deck are passed down to underlying charts
      // note that dashboard contextual information (filter_immune_slices and such) aren't
      // taken into consideration here
      const filters = [...(subslice.form_data.filters || []), ...(formData.filters || []), ...(formData.extra_filters || [])];

      const subsliceCopy = _extends({}, subslice, {
        form_data: _extends({}, subslice.form_data, {
          filters
        })
      });

      SupersetClient/* default.get */.Z.get({
        endpoint: getExploreLongUrl(subsliceCopy.form_data, 'json')
      }).then((_ref) => {
        let {
          json
        } = _ref;
        const layer = esm_layers[subsliceCopy.form_data.viz_type](subsliceCopy.form_data, json, this.props.onAddFilter, this.setTooltip, [], this.props.onSelect);
        this.setState({
          subSlicesLayers: _extends({}, this.state.subSlicesLayers, {
            [subsliceCopy.slice_id]: layer
          })
        });
      }).catch(() => {});
    });
  }

  render() {
    const {
      payload,
      formData,
      setControlValue
    } = this.props;
    const {
      subSlicesLayers
    } = this.state;
    const layers = Object.values(subSlicesLayers);
    return react.createElement(DeckGLContainer/* default */.Z, {
      ref: this.containerRef,
      mapboxApiAccessToken: payload.data.mapboxApiKey,
      viewport: this.state.viewport || this.props.viewport,
      layers: layers,
      mapStyle: formData.mapbox_style,
      setControlValue: setControlValue,
      onViewportChange: this.onViewportChange
    });
  }

}

DeckMulti.propTypes = propTypes;
DeckMulti.defaultProps = defaultProps;
/* harmony default export */ const Multi = (DeckMulti);

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

/***/ 1186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Hex),
  "getLayer": () => (/* binding */ getLayer)
});

// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/log.js
var log = __webpack_require__(80744);
// EXTERNAL MODULE: ./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer.js + 3 modules
var column_layer = __webpack_require__(15103);
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/color-utils.js
var color_utils = __webpack_require__(4516);
;// CONCATENATED MODULE: ./node_modules/d3-hexbin/src/hexbin.js
var thirdPi = Math.PI / 3,
    angles = [0, thirdPi, 2 * thirdPi, 3 * thirdPi, 4 * thirdPi, 5 * thirdPi];

function pointX(d) {
  return d[0];
}

function pointY(d) {
  return d[1];
}

/* harmony default export */ function hexbin() {
  var x0 = 0,
      y0 = 0,
      x1 = 1,
      y1 = 1,
      x = pointX,
      y = pointY,
      r,
      dx,
      dy;

  function hexbin(points) {
    var binsById = {}, bins = [], i, n = points.length;

    for (i = 0; i < n; ++i) {
      if (isNaN(px = +x.call(null, point = points[i], i, points))
          || isNaN(py = +y.call(null, point, i, points))) continue;

      var point,
          px,
          py,
          pj = Math.round(py = py / dy),
          pi = Math.round(px = px / dx - (pj & 1) / 2),
          py1 = py - pj;

      if (Math.abs(py1) * 3 > 1) {
        var px1 = px - pi,
            pi2 = pi + (px < pi ? -1 : 1) / 2,
            pj2 = pj + (py < pj ? -1 : 1),
            px2 = px - pi2,
            py2 = py - pj2;
        if (px1 * px1 + py1 * py1 > px2 * px2 + py2 * py2) pi = pi2 + (pj & 1 ? 1 : -1) / 2, pj = pj2;
      }

      var id = pi + "-" + pj, bin = binsById[id];
      if (bin) bin.push(point);
      else {
        bins.push(bin = binsById[id] = [point]);
        bin.x = (pi + (pj & 1) / 2) * dx;
        bin.y = pj * dy;
      }
    }

    return bins;
  }

  function hexagon(radius) {
    var x0 = 0, y0 = 0;
    return angles.map(function(angle) {
      var x1 = Math.sin(angle) * radius,
          y1 = -Math.cos(angle) * radius,
          dx = x1 - x0,
          dy = y1 - y0;
      x0 = x1, y0 = y1;
      return [dx, dy];
    });
  }

  hexbin.hexagon = function(radius) {
    return "m" + hexagon(radius == null ? r : +radius).join("l") + "z";
  };

  hexbin.centers = function() {
    var centers = [],
        j = Math.round(y0 / dy),
        i = Math.round(x0 / dx);
    for (var y = j * dy; y < y1 + r; y += dy, ++j) {
      for (var x = i * dx + (j & 1) * dx / 2; x < x1 + dx / 2; x += dx) {
        centers.push([x, y]);
      }
    }
    return centers;
  };

  hexbin.mesh = function() {
    var fragment = hexagon(r).slice(0, 4).join("l");
    return hexbin.centers().map(function(p) { return "M" + p + "m" + fragment; }).join("");
  };

  hexbin.x = function(_) {
    return arguments.length ? (x = _, hexbin) : x;
  };

  hexbin.y = function(_) {
    return arguments.length ? (y = _, hexbin) : y;
  };

  hexbin.radius = function(_) {
    return arguments.length ? (r = +_, dx = r * 2 * Math.sin(thirdPi), dy = r * 1.5, hexbin) : r;
  };

  hexbin.size = function(_) {
    return arguments.length ? (x0 = y0 = 0, x1 = +_[0], y1 = +_[1], hexbin) : [x1 - x0, y1 - y0];
  };

  hexbin.extent = function(_) {
    return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], hexbin) : [[x0, y0], [x1, y1]];
  };

  return hexbin.radius(1);
}

;// CONCATENATED MODULE: ./node_modules/d3-hexbin/index.js


// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/iterable-utils.js
var iterable_utils = __webpack_require__(38550);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/hexagon-layer/hexagon-aggregator.js


function pointToHexbin(props, aggregationParams) {
  const {
    data,
    radius
  } = props;
  const {
    viewport,
    attributes
  } = aggregationParams;
  const centerLngLat = data.length ? getPointsCenter(data, aggregationParams) : null;
  const radiusCommon = getRadiusInCommon(radius, viewport, centerLngLat);
  const screenPoints = [];
  const {
    iterable,
    objectInfo
  } = (0,iterable_utils/* createIterable */.jB)(data);
  const positions = attributes.positions.value;
  const {
    size
  } = attributes.positions.getAccessor();

  for (const object of iterable) {
    objectInfo.index++;
    const posIndex = objectInfo.index * size;
    const position = [positions[posIndex], positions[posIndex + 1]];
    const arrayIsFinite = Number.isFinite(position[0]) && Number.isFinite(position[1]);

    if (arrayIsFinite) {
      screenPoints.push({
        screenCoord: viewport.projectFlat(position),
        source: object,
        index: objectInfo.index
      });
    } else {
      log/* default.warn */.Z.warn('HexagonLayer: invalid position')();
    }
  }

  const newHexbin = hexbin().radius(radiusCommon).x(d => d.screenCoord[0]).y(d => d.screenCoord[1]);
  const hexagonBins = newHexbin(screenPoints);
  return {
    hexagons: hexagonBins.map((hex, index) => ({
      position: viewport.unprojectFlat([hex.x, hex.y]),
      points: hex,
      index
    })),
    radiusCommon
  };
}
function getPointsCenter(data, aggregationParams) {
  const {
    attributes
  } = aggregationParams;
  const positions = attributes.positions.value;
  const {
    size
  } = attributes.positions.getAccessor();
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  let i;

  for (i = 0; i < size * data.length; i += size) {
    const x = positions[i];
    const y = positions[i + 1];
    const arrayIsFinite = Number.isFinite(x) && Number.isFinite(y);

    if (arrayIsFinite) {
      minX = Math.min(x, minX);
      maxX = Math.max(x, maxX);
      minY = Math.min(y, minY);
      maxY = Math.max(y, maxY);
    }
  }

  return [minX, minY, maxX, maxY].every(Number.isFinite) ? [(minX + maxX) / 2, (minY + maxY) / 2] : null;
}
function getRadiusInCommon(radius, viewport, center) {
  const {
    unitsPerMeter
  } = viewport.getDistanceScales(center);
  return radius * unitsPerMeter[0];
}
//# sourceMappingURL=hexagon-aggregator.js.map
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/cpu-aggregator.js
var cpu_aggregator = __webpack_require__(73728);
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/aggregation-layer.js + 1 modules
var aggregation_layer = __webpack_require__(63295);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/hexagon-layer/hexagon-layer.js







function nop() {}

const defaultProps = {
  colorDomain: null,
  colorRange: color_utils/* defaultColorRange */.K,
  getColorValue: {
    type: 'accessor',
    value: null
  },
  getColorWeight: {
    type: 'accessor',
    value: 1
  },
  colorAggregation: 'SUM',
  lowerPercentile: {
    type: 'number',
    value: 0,
    min: 0,
    max: 100
  },
  upperPercentile: {
    type: 'number',
    value: 100,
    min: 0,
    max: 100
  },
  colorScaleType: 'quantize',
  onSetColorDomain: nop,
  elevationDomain: null,
  elevationRange: [0, 1000],
  getElevationValue: {
    type: 'accessor',
    value: null
  },
  getElevationWeight: {
    type: 'accessor',
    value: 1
  },
  elevationAggregation: 'SUM',
  elevationLowerPercentile: {
    type: 'number',
    value: 0,
    min: 0,
    max: 100
  },
  elevationUpperPercentile: {
    type: 'number',
    value: 100,
    min: 0,
    max: 100
  },
  elevationScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  elevationScaleType: 'linear',
  onSetElevationDomain: nop,
  radius: {
    type: 'number',
    value: 1000,
    min: 1
  },
  coverage: {
    type: 'number',
    min: 0,
    max: 1,
    value: 1
  },
  extruded: false,
  hexagonAggregator: pointToHexbin,
  getPosition: {
    type: 'accessor',
    value: x => x.position
  },
  material: true,
  _filterData: {
    type: 'function',
    value: null,
    optional: true
  }
};
class HexagonLayer extends aggregation_layer/* default */.Z {
  shouldUpdateState({
    changeFlags
  }) {
    return changeFlags.somethingChanged;
  }

  initializeState() {
    const cpuAggregator = new cpu_aggregator/* default */.Z({
      getAggregator: props => props.hexagonAggregator,
      getCellSize: props => props.radius
    });
    this.state = {
      cpuAggregator,
      aggregatorState: cpuAggregator.state,
      hexagonVertices: null
    };
    const attributeManager = this.getAttributeManager();
    attributeManager.add({
      positions: {
        size: 3,
        accessor: 'getPosition'
      }
    });
  }

  updateState(opts) {
    super.updateState(opts);
    const {
      cpuAggregator,
      hexagonVertices: oldVertices
    } = this.state;

    if (opts.changeFlags.propsOrDataChanged) {
      this.setState({
        aggregatorState: cpuAggregator.updateState(opts, {
          viewport: this.context.viewport,
          attributes: this.getAttributes()
        })
      });
    }

    const {
      hexagonVertices
    } = cpuAggregator.state.layerData || {};

    if (hexagonVertices && oldVertices !== hexagonVertices) {
      const vertices = this.convertLatLngToMeterOffset(hexagonVertices);

      if (vertices) {
        this.setState({
          hexagonVertices,
          vertices
        });
      }
    } else {
      this.updateRadiusAngle();
    }
  }

  updateRadiusAngle(vertices) {
    const {
      viewport
    } = this.context;
    const {
      unitsPerMeter
    } = viewport.getDistanceScales();
    const {
      cpuAggregator
    } = this.state;

    if (cpuAggregator.state.layerData && cpuAggregator.state.layerData.radiusCommon) {
      const {
        radiusCommon
      } = cpuAggregator.state.layerData;
      const radius = radiusCommon / unitsPerMeter[0];
      this.setState({
        angle: 90,
        radius
      });
    }
  }

  convertLatLngToMeterOffset(hexagonVertices) {
    const {
      viewport
    } = this.context;

    if (Array.isArray(hexagonVertices) && hexagonVertices.length === 6) {
      const vertex0 = hexagonVertices[0];
      const vertex3 = hexagonVertices[3];
      const centroid = [(vertex0[0] + vertex3[0]) / 2, (vertex0[1] + vertex3[1]) / 2];
      const centroidFlat = viewport.projectFlat(centroid);
      const {
        metersPerUnit
      } = viewport.getDistanceScales(centroid);
      const vertices = hexagonVertices.map(vt => {
        const vtFlat = viewport.projectFlat(vt);
        return [(vtFlat[0] - centroidFlat[0]) * metersPerUnit[0], (vtFlat[1] - centroidFlat[1]) * metersPerUnit[1]];
      });
      return vertices;
    }

    log/* default.error */.Z.error('HexagonLayer: hexagonVertices needs to be an array of 6 points')();
    return null;
  }

  getPickingInfo({
    info
  }) {
    return this.state.cpuAggregator.getPickingInfo({
      info
    });
  }

  _onGetSublayerColor(cell) {
    return this.state.cpuAggregator.getAccessor('fillColor')(cell);
  }

  _onGetSublayerElevation(cell) {
    return this.state.cpuAggregator.getAccessor('elevation')(cell);
  }

  _getSublayerUpdateTriggers() {
    return this.state.cpuAggregator.getUpdateTriggers(this.props);
  }

  renderLayers() {
    const {
      elevationScale,
      extruded,
      coverage,
      material,
      transitions
    } = this.props;
    const {
      angle,
      radius,
      cpuAggregator,
      vertices
    } = this.state;
    const SubLayerClass = this.getSubLayerClass('hexagon-cell', column_layer/* default */.Z);

    const updateTriggers = this._getSublayerUpdateTriggers();

    const geometry = vertices && vertices.length ? {
      vertices,
      radius: 1
    } : {
      radius,
      angle
    };
    return new SubLayerClass({ ...geometry,
      diskResolution: 6,
      elevationScale,
      extruded,
      coverage,
      material,
      getFillColor: this._onGetSublayerColor.bind(this),
      getElevation: this._onGetSublayerElevation.bind(this),
      transitions: transitions && {
        getFillColor: transitions.getColorValue || transitions.getColorWeight,
        getElevation: transitions.getElevationValue || transitions.getElevationWeight
      }
    }, this.getSubLayerProps({
      id: 'hexagon-cell',
      updateTriggers
    }), {
      data: cpuAggregator.state.layerData.data
    });
  }

}
HexagonLayer.layerName = 'HexagonLayer';
HexagonLayer.defaultProps = defaultProps;
//# sourceMappingURL=hexagon-layer.js.map
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/common.js
var common = __webpack_require__(37032);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/sandbox.js + 161 modules
var sandbox = __webpack_require__(88574);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/factory.js + 1 modules
var factory = __webpack_require__(52598);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/TooltipRow.js
var TooltipRow = __webpack_require__(57981);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Hex/Hex.js
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








function setTooltipContent(o) {
  return react.createElement("div", {
    className: "deckgl-tooltip"
  }, react.createElement(TooltipRow/* default */.Z, {
    label: (0,TranslatorSingleton.t)('Centroid (Longitude and Latitude)') + ": ",
    value: "(" + o.coordinate[0] + ", " + o.coordinate[1] + ")"
  }), react.createElement(TooltipRow/* default */.Z, {
    label: (0,TranslatorSingleton.t)('Height') + ": ",
    value: "" + o.object.elevationValue
  }));
}

function getLayer(formData, payload, onAddFilter, setTooltip) {
  const fd = formData;
  const c = fd.color_picker;
  let data = payload.data.features.map(d => _extends({}, d, {
    color: [c.r, c.g, c.b, 255 * c.a]
  }));

  if (fd.js_data_mutator) {
    // Applying user defined data mutator if defined
    const jsFnMutator = (0,sandbox/* default */.Z)(fd.js_data_mutator);
    data = jsFnMutator(data);
  }

  const aggFunc = (0,common/* getAggFunc */.Z)(fd.js_agg_function, p => p.weight);
  return new HexagonLayer(_extends({
    id: "hex-layer-" + fd.slice_id,
    data,
    pickable: true,
    radius: fd.grid_size,
    minColor: [0, 0, 0, 0],
    extruded: fd.extruded,
    maxColor: [c.r, c.g, c.b, 255 * c.a],
    outline: false,
    getElevationValue: aggFunc,
    getColorValue: aggFunc
  }, (0,common/* commonLayerProps */.N)(fd, setTooltip, setTooltipContent)));
}

function getPoints(data) {
  return data.map(d => d.position);
}

/* harmony default export */ const Hex = ((0,factory/* createDeckGLComponent */.G)(getLayer, getPoints));

/***/ }),

/***/ 97492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLayer": () => (/* binding */ getLayer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37032);
/* harmony import */ var _utils_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88574);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52598);
/* harmony import */ var _TooltipRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57981);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/no-array-index-key */

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







function setTooltipContent(o) {
  return o.object.extraProps && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "deckgl-tooltip"
  }, Object.keys(o.object.extraProps).map((prop, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    key: "prop-" + index,
    label: prop + ": ",
    value: "" + o.object.extraProps[prop]
  })));
}

function getLayer(formData, payload, onAddFilter, setTooltip) {
  const fd = formData;
  const c = fd.color_picker;
  const fixedColor = [c.r, c.g, c.b, 255 * c.a];
  let data = payload.data.features.map(feature => _extends({}, feature, {
    path: feature.path,
    width: fd.line_width,
    color: fixedColor
  }));

  if (fd.js_data_mutator) {
    const jsFnMutator = (0,_utils_sandbox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(fd.js_data_mutator);
    data = jsFnMutator(data);
  }

  return new deck_gl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z(_extends({
    id: "path-layer-" + fd.slice_id,
    getColor: d => d.color,
    getPath: d => d.path,
    getWidth: d => d.width,
    data,
    rounded: true,
    widthScale: 1
  }, (0,_common__WEBPACK_IMPORTED_MODULE_1__/* .commonLayerProps */ .N)(fd, setTooltip, setTooltipContent)));
}

function getPoints(data) {
  let points = [];
  data.forEach(d => {
    points = points.concat(d.path);
  });
  return points;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_factory__WEBPACK_IMPORTED_MODULE_3__/* .createDeckGLComponent */ .G)(getLayer, getPoints));

/***/ }),

/***/ 4598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Scatter),
  "getLayer": () => (/* binding */ getLayer)
});

// EXTERNAL MODULE: ./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer.js + 2 modules
var scatterplot_layer = __webpack_require__(28569);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/getMetricLabel.js
var getMetricLabel = __webpack_require__(95669);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/common.js
var common = __webpack_require__(37032);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/factory.js + 1 modules
var factory = __webpack_require__(52598);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/TooltipRow.js
var TooltipRow = __webpack_require__(57981);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/utils.js
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
// eslint-disable-next-line import/prefer-default-export
function utils_roundDecimal(number, precision) {
  let roundedNumber;

  if (precision) {
    // eslint-disable-next-line no-param-reassign
    roundedNumber = Math.round(number * (precision = 10 ** precision)) / precision;
  } else {
    roundedNumber = Math.round(number);
  }

  return roundedNumber;
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/geo.js
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

const defaultViewport = {
  bearing: 0,
  latitude: 31.222656842808707,
  longitude: 6.85236157047845,
  pitch: 0,
  zoom: 1
};
const METER_TO_MILE = 1609.34;
function unitToRadius(unit, num) {
  if (unit === 'square_m') {
    return Math.sqrt(num / Math.PI);
  }

  if (unit === 'radius_m') {
    return num;
  }

  if (unit === 'radius_km') {
    return num * 1000;
  }

  if (unit === 'radius_miles') {
    return num * METER_TO_MILE;
  }

  if (unit === 'square_km') {
    return Math.sqrt(num / Math.PI) * 1000;
  }

  if (unit === 'square_miles') {
    return Math.sqrt(num / Math.PI) * METER_TO_MILE;
  }

  return null;
}
const EARTH_CIRCUMFERENCE_KM = 40075.16;
const MILES_PER_KM = 1.60934;
function kmToPixels(kilometers, latitude, zoomLevel) {
  // Algorithm from: https://wiki.openstreetmap.org/wiki/Zoom_levels
  const latitudeRad = latitude * (Math.PI / 180); // Seems like the zoomLevel is off by one

  const kmPerPixel = EARTH_CIRCUMFERENCE_KM * Math.cos(latitudeRad) / 2 ** (zoomLevel + 9);
  return roundDecimal(kilometers / kmPerPixel, 2);
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Scatter/Scatter.js
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
  return data.map(d => d.position);
}

function setTooltipContent(formData, verboseMap) {
  return o => {
    var _formData$point_radiu;

    const label = (verboseMap == null ? void 0 : verboseMap[formData.point_radius_fixed.value]) || (0,getMetricLabel/* default */.Z)((_formData$point_radiu = formData.point_radius_fixed) == null ? void 0 : _formData$point_radiu.value);
    return react.createElement("div", {
      className: "deckgl-tooltip"
    }, react.createElement(TooltipRow/* default */.Z, {
      label: (0,TranslatorSingleton.t)('Longitude and Latitude') + ": ",
      value: o.object.position[0] + ", " + o.object.position[1]
    }), o.object.cat_color && react.createElement(TooltipRow/* default */.Z, {
      label: (0,TranslatorSingleton.t)('Category') + ": ",
      value: "" + o.object.cat_color
    }), o.object.metric && react.createElement(TooltipRow/* default */.Z, {
      label: label + ": ",
      value: "" + o.object.metric
    }));
  };
}

function getLayer(formData, payload, onAddFilter, setTooltip, datasource) {
  const fd = formData;
  const dataWithRadius = payload.data.features.map(d => {
    let radius = unitToRadius(fd.point_unit, d.radius) || 10;

    if (fd.multiplier) {
      radius *= fd.multiplier;
    }

    if (d.color) {
      return _extends({}, d, {
        radius
      });
    }

    const c = fd.color_picker || {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
    const color = [c.r, c.g, c.b, c.a * 255];
    return _extends({}, d, {
      radius,
      color
    });
  });
  return new scatterplot_layer/* default */.Z(_extends({
    id: "scatter-layer-" + fd.slice_id,
    data: dataWithRadius,
    fp64: true,
    getFillColor: d => d.color,
    getRadius: d => d.radius,
    radiusMinPixels: fd.min_radius || null,
    radiusMaxPixels: fd.max_radius || null,
    stroked: false
  }, (0,common/* commonLayerProps */.N)(fd, setTooltip, setTooltipContent(fd, datasource == null ? void 0 : datasource.verboseMap))));
}
/* harmony default export */ const Scatter = ((0,factory/* createCategoricalDeckGLComponent */.B)(getLayer, getPoints));

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