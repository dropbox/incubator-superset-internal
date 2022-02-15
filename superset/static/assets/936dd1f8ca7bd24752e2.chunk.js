"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[8230],{

/***/ 28230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Screengrid),
  "getLayer": () => (/* binding */ getLayer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/log.js
var log = __webpack_require__(80744);
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator.js + 6 modules
var gpu_grid_aggregator = __webpack_require__(78651);
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/aggregation-operation-utils.js
var aggregation_operation_utils = __webpack_require__(15614);
// EXTERNAL MODULE: ./node_modules/@luma.gl/webgl/dist/esm/features/features.js
var features = __webpack_require__(44211);
// EXTERNAL MODULE: ./node_modules/@luma.gl/webgl/dist/esm/features/webgl-features-table.js
var webgl_features_table = __webpack_require__(6948);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/lib/model.js + 9 modules
var model = __webpack_require__(281);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/geometry/geometry.js
var geometry = __webpack_require__(53982);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/layer.js + 11 modules
var lib_layer = __webpack_require__(95772);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/picking/picking.js + 1 modules
var picking = __webpack_require__(51331);
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/color-utils.js
var color_utils = __webpack_require__(4516);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer-vertex.glsl.js
/* harmony default export */ const screen_grid_layer_vertex_glsl = ("#define SHADER_NAME screen-grid-layer-vertex-shader\n#define RANGE_COUNT 6\n\nattribute vec3 positions;\nattribute vec3 instancePositions;\nattribute vec4 instanceCounts;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform vec3 cellScale;\nuniform vec4 minColor;\nuniform vec4 maxColor;\nuniform vec4 colorRange[RANGE_COUNT];\nuniform vec2 colorDomain;\nuniform bool shouldUseMinMax;\nuniform sampler2D maxTexture;\n\nvarying vec4 vColor;\nvarying float vSampleCount;\n\nvec4 quantizeScale(vec2 domain, vec4 range[RANGE_COUNT], float value) {\n  vec4 outColor = vec4(0., 0., 0., 0.);\n  if (value >= domain.x && value <= domain.y) {\n    float domainRange = domain.y - domain.x;\n    if (domainRange <= 0.) {\n      outColor = colorRange[0];\n    } else {\n      float rangeCount = float(RANGE_COUNT);\n      float rangeStep = domainRange / rangeCount;\n      float idx = floor((value - domain.x) / rangeStep);\n      idx = clamp(idx, 0., rangeCount - 1.);\n      int intIdx = int(idx);\n      outColor = colorRange[intIdx];\n    }\n  }\n  outColor = outColor / 255.;\n  return outColor;\n}\n\nvoid main(void) {\n  vSampleCount = instanceCounts.a;\n\n  float weight = instanceCounts.r;\n  float maxWeight = texture2D(maxTexture, vec2(0.5)).r;\n\n  float step = weight / maxWeight;\n  vec4 minMaxColor = mix(minColor, maxColor, step) / 255.;\n\n  vec2 domain = colorDomain;\n  float domainMaxValid = float(colorDomain.y != 0.);\n  domain.y = mix(maxWeight, colorDomain.y, domainMaxValid);\n  vec4 rangeColor = quantizeScale(domain, colorRange, weight);\n\n  float rangeMinMax = float(shouldUseMinMax);\n  vec4 color = mix(rangeColor, minMaxColor, rangeMinMax);\n  vColor = vec4(color.rgb, color.a * opacity);\n  picking_setPickingColor(instancePickingColors);\n\n  gl_Position = vec4(instancePositions + positions * cellScale, 1.);\n}\n");
//# sourceMappingURL=screen-grid-layer-vertex.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer-fragment.glsl.js
/* harmony default export */ const screen_grid_layer_fragment_glsl = ("#define SHADER_NAME screen-grid-layer-fragment-shader\n\nprecision highp float;\n\nvarying vec4 vColor;\nvarying float vSampleCount;\n\nvoid main(void) {\n  if (vSampleCount <= 0.0) {\n    discard;\n  }\n  gl_FragColor = vColor;\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n");
//# sourceMappingURL=screen-grid-layer-fragment.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-cell-layer.js





const DEFAULT_MINCOLOR = [0, 0, 0, 0];
const DEFAULT_MAXCOLOR = [0, 255, 0, 255];
const COLOR_PROPS = ["minColor", "maxColor", "colorRange", "colorDomain"];
const defaultProps = {
  cellSizePixels: {
    value: 100,
    min: 1
  },
  cellMarginPixels: {
    value: 2,
    min: 0,
    max: 5
  },
  colorDomain: null,
  colorRange: color_utils/* defaultColorRange */.K
};
class ScreenGridCellLayer extends lib_layer/* default */.Z {
  static isSupported(gl) {
    return (0,features/* hasFeatures */.ag)(gl, [webgl_features_table/* FEATURES.TEXTURE_FLOAT */.h.TEXTURE_FLOAT]);
  }

  getShaders() {
    return {
      vs: screen_grid_layer_vertex_glsl,
      fs: screen_grid_layer_fragment_glsl,
      modules: [picking/* default */.Z]
    };
  }

  initializeState() {
    const {
      gl
    } = this.context;
    const attributeManager = this.getAttributeManager();
    attributeManager.addInstanced({
      instancePositions: {
        size: 3,
        update: this.calculateInstancePositions
      },
      instanceCounts: {
        size: 4,
        noAlloc: true
      }
    });
    this.setState({
      model: this._getModel(gl)
    });
  }

  shouldUpdateState({
    changeFlags
  }) {
    return changeFlags.somethingChanged;
  }

  updateState({
    oldProps,
    props,
    changeFlags
  }) {
    super.updateState({
      oldProps,
      props,
      changeFlags
    });
    const attributeManager = this.getAttributeManager();

    if (props.numInstances !== oldProps.numInstances) {
      attributeManager.invalidateAll();
    } else if (oldProps.cellSizePixels !== props.cellSizePixels) {
      attributeManager.invalidate('instancePositions');
    }

    this._updateUniforms(oldProps, props, changeFlags);
  }

  draw({
    uniforms
  }) {
    const {
      parameters,
      maxTexture
    } = this.props;
    const minColor = this.props.minColor || DEFAULT_MINCOLOR;
    const maxColor = this.props.maxColor || DEFAULT_MAXCOLOR;
    const colorDomain = this.props.colorDomain || [1, 0];
    const {
      model
    } = this.state;
    model.setUniforms(uniforms).setUniforms({
      minColor,
      maxColor,
      maxTexture,
      colorDomain
    }).draw({
      parameters: {
        depthTest: false,
        depthMask: false,
        ...parameters
      }
    });
  }

  calculateInstancePositions(attribute, {
    numInstances
  }) {
    const {
      width,
      height
    } = this.context.viewport;
    const {
      cellSizePixels
    } = this.props;
    const numCol = Math.ceil(width / cellSizePixels);
    const {
      value,
      size
    } = attribute;

    for (let i = 0; i < numInstances; i++) {
      const x = i % numCol;
      const y = Math.floor(i / numCol);
      value[i * size + 0] = x * cellSizePixels / width * 2 - 1;
      value[i * size + 1] = 1 - y * cellSizePixels / height * 2;
      value[i * size + 2] = 0;
    }
  }

  _getModel(gl) {
    return new model/* default */.Z(gl, { ...this.getShaders(),
      id: this.props.id,
      geometry: new geometry/* default */.Z({
        drawMode: 6,
        attributes: {
          positions: new Float32Array([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0])
        }
      }),
      isInstanced: true
    });
  }

  _shouldUseMinMax() {
    const {
      minColor,
      maxColor,
      colorDomain,
      colorRange
    } = this.props;

    if (minColor || maxColor) {
      log/* default.deprecated */.Z.deprecated('ScreenGridLayer props: minColor and maxColor', 'colorRange, colorDomain')();
      return true;
    }

    if (colorDomain || colorRange) {
      return false;
    }

    return true;
  }

  _updateUniforms(oldProps, props, changeFlags) {
    const {
      model
    } = this.state;

    if (COLOR_PROPS.some(key => oldProps[key] !== props[key])) {
      model.setUniforms({
        shouldUseMinMax: this._shouldUseMinMax()
      });
    }

    if (oldProps.colorRange !== props.colorRange) {
      model.setUniforms({
        colorRange: (0,color_utils/* colorRangeToFlatArray */.P)(props.colorRange)
      });
    }

    if (oldProps.cellMarginPixels !== props.cellMarginPixels || oldProps.cellSizePixels !== props.cellSizePixels || changeFlags.viewportChanged) {
      const {
        width,
        height
      } = this.context.viewport;
      const {
        cellSizePixels,
        cellMarginPixels
      } = this.props;
      const margin = cellSizePixels > cellMarginPixels ? cellMarginPixels : 0;
      const cellScale = new Float32Array([(cellSizePixels - margin) / width * 2, -(cellSizePixels - margin) / height * 2, 1]);
      model.setUniforms({
        cellScale
      });
    }
  }

}
ScreenGridCellLayer.layerName = 'ScreenGridCellLayer';
ScreenGridCellLayer.defaultProps = defaultProps;
//# sourceMappingURL=screen-grid-cell-layer.js.map
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/grid-aggregation-layer.js
var grid_aggregation_layer = __webpack_require__(13208);
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/resource-utils.js
var resource_utils = __webpack_require__(92637);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer.js






const screen_grid_layer_defaultProps = { ...ScreenGridCellLayer.defaultProps,
  getPosition: {
    type: 'accessor',
    value: d => d.position
  },
  getWeight: {
    type: 'accessor',
    value: 1
  },
  gpuAggregation: true,
  aggregation: 'SUM'
};
const POSITION_ATTRIBUTE_NAME = 'positions';
const DIMENSIONS = {
  data: {
    props: ['cellSizePixels']
  },
  weights: {
    props: ['aggregation'],
    accessors: ['getWeight']
  }
};
class ScreenGridLayer extends grid_aggregation_layer/* default */.Z {
  initializeState() {
    const {
      gl
    } = this.context;

    if (!ScreenGridCellLayer.isSupported(gl)) {
      this.setState({
        supported: false
      });
      log/* default.error */.Z.error("ScreenGridLayer: ".concat(this.id, " is not supported on this browser"))();
      return;
    }

    super.initializeState({
      dimensions: DIMENSIONS,
      getCellSize: props => props.cellSizePixels
    });
    const weights = {
      count: {
        size: 1,
        operation: aggregation_operation_utils/* AGGREGATION_OPERATION.SUM */.KM.SUM,
        needMax: true,
        maxTexture: (0,resource_utils/* getFloatTexture */.hq)(gl, {
          id: "".concat(this.id, "-max-texture")
        })
      }
    };
    this.setState({
      supported: true,
      projectPoints: true,
      weights,
      subLayerData: {
        attributes: {}
      },
      maxTexture: weights.count.maxTexture,
      positionAttributeName: 'positions',
      posOffset: [0, 0],
      translation: [1, -1]
    });
    const attributeManager = this.getAttributeManager();
    attributeManager.add({
      [POSITION_ATTRIBUTE_NAME]: {
        size: 3,
        accessor: 'getPosition',
        type: 5130,
        fp64: this.use64bitPositions()
      },
      count: {
        size: 3,
        accessor: 'getWeight'
      }
    });
  }

  shouldUpdateState({
    changeFlags
  }) {
    return this.state.supported && changeFlags.somethingChanged;
  }

  updateState(opts) {
    super.updateState(opts);
  }

  renderLayers() {
    if (!this.state.supported) {
      return [];
    }

    const {
      maxTexture,
      numRow,
      numCol,
      weights
    } = this.state;
    const {
      updateTriggers
    } = this.props;
    const {
      aggregationBuffer
    } = weights.count;
    const CellLayerClass = this.getSubLayerClass('cells', ScreenGridCellLayer);
    return new CellLayerClass(this.props, this.getSubLayerProps({
      id: 'cell-layer',
      updateTriggers
    }), {
      data: {
        attributes: {
          instanceCounts: aggregationBuffer
        }
      },
      maxTexture,
      numInstances: numRow * numCol
    });
  }

  finalizeState() {
    super.finalizeState();
    const {
      aggregationBuffer,
      maxBuffer,
      maxTexture
    } = this.state;
    aggregationBuffer === null || aggregationBuffer === void 0 ? void 0 : aggregationBuffer.delete();
    maxBuffer === null || maxBuffer === void 0 ? void 0 : maxBuffer.delete();
    maxTexture === null || maxTexture === void 0 ? void 0 : maxTexture.delete();
  }

  getPickingInfo({
    info,
    mode
  }) {
    const {
      index
    } = info;

    if (index >= 0) {
      const {
        gpuGridAggregator,
        gpuAggregation,
        weights
      } = this.state;
      const aggregationResults = gpuAggregation ? gpuGridAggregator.getData('count') : weights.count;
      info.object = gpu_grid_aggregator/* default.getAggregationData */.Z.getAggregationData({
        pixelIndex: index,
        ...aggregationResults
      });
    }

    return info;
  }

  updateResults({
    aggregationData,
    maxData
  }) {
    const {
      count
    } = this.state.weights;
    count.aggregationData = aggregationData;
    count.aggregationBuffer.setData({
      data: aggregationData
    });
    count.maxData = maxData;
    count.maxTexture.setImageData({
      data: maxData
    });
  }

  updateAggregationState(opts) {
    const cellSize = opts.props.cellSizePixels;
    const cellSizeChanged = opts.oldProps.cellSizePixels !== cellSize;
    const {
      viewportChanged
    } = opts.changeFlags;
    let gpuAggregation = opts.props.gpuAggregation;

    if (this.state.gpuAggregation !== opts.props.gpuAggregation) {
      if (gpuAggregation && !gpu_grid_aggregator/* default.isSupported */.Z.isSupported(this.context.gl)) {
        log/* default.warn */.Z.warn('GPU Grid Aggregation not supported, falling back to CPU')();
        gpuAggregation = false;
      }
    }

    const gpuAggregationChanged = gpuAggregation !== this.state.gpuAggregation;
    this.setState({
      gpuAggregation
    });
    const positionsChanged = this.isAttributeChanged(POSITION_ATTRIBUTE_NAME);
    const {
      dimensions
    } = this.state;
    const {
      data,
      weights
    } = dimensions;
    const aggregationDataDirty = positionsChanged || gpuAggregationChanged || viewportChanged || this.isAggregationDirty(opts, {
      compareAll: gpuAggregation,
      dimension: data
    });
    const aggregationWeightsDirty = this.isAggregationDirty(opts, {
      dimension: weights
    });
    this.setState({
      aggregationDataDirty,
      aggregationWeightsDirty
    });
    const {
      viewport
    } = this.context;

    if (viewportChanged || cellSizeChanged) {
      const {
        width,
        height
      } = viewport;
      const numCol = Math.ceil(width / cellSize);
      const numRow = Math.ceil(height / cellSize);
      this.allocateResources(numRow, numCol);
      this.setState({
        scaling: [width / 2, -height / 2, 1],
        gridOffset: {
          xOffset: cellSize,
          yOffset: cellSize
        },
        width,
        height,
        numCol,
        numRow
      });
    }

    if (aggregationWeightsDirty) {
      this._updateAccessors(opts);
    }

    if (aggregationDataDirty || aggregationWeightsDirty) {
      this._resetResults();
    }
  }

  _updateAccessors(opts) {
    const {
      getWeight,
      aggregation,
      data
    } = opts.props;
    const {
      count
    } = this.state.weights;

    if (count) {
      count.getWeight = getWeight;
      count.operation = aggregation_operation_utils/* AGGREGATION_OPERATION */.KM[aggregation];
    }

    this.setState({
      getValue: (0,aggregation_operation_utils/* getValueFunc */._D)(aggregation, getWeight, {
        data
      })
    });
  }

  _resetResults() {
    const {
      count
    } = this.state.weights;

    if (count) {
      count.aggregationData = null;
    }
  }

}
ScreenGridLayer.layerName = 'ScreenGridLayer';
ScreenGridLayer.defaultProps = screen_grid_layer_defaultProps;
//# sourceMappingURL=screen-grid-layer.js.map
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/AnimatableDeckGLContainer.js + 4 modules
var AnimatableDeckGLContainer = __webpack_require__(89759);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/time.js
var time = __webpack_require__(57485);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/sandbox.js + 161 modules
var sandbox = __webpack_require__(88574);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/common.js
var common = __webpack_require__(37032);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/TooltipRow.js
var TooltipRow = __webpack_require__(57981);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/fitViewport.js + 1 modules
var fitViewport = __webpack_require__(50980);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Screengrid/Screengrid.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/sort-prop-types */

/* eslint-disable react/jsx-handler-names */

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



function getPoints(data) {
  return data.map(d => d.position);
}

function setTooltipContent(o) {
  return react.createElement("div", {
    className: "deckgl-tooltip"
  }, react.createElement(TooltipRow/* default */.Z, {
    label: (0,TranslatorSingleton.t)('Longitude and Latitude') + ": ",
    value: o.coordinate[0] + ", " + o.coordinate[1]
  }), react.createElement(TooltipRow/* default */.Z, {
    label: (0,TranslatorSingleton.t)('Weight') + ": ",
    value: "" + o.object.weight
  }));
}

function getLayer(formData, payload, onAddFilter, setTooltip, selected, onSelect, filters) {
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

  if (filters != null) {
    filters.forEach(f => {
      data = data.filter(x => f(x));
    });
  } // Passing a layer creator function instead of a layer since the
  // layer needs to be regenerated at each render


  return new ScreenGridLayer(_extends({
    id: "screengrid-layer-" + fd.slice_id,
    data,
    pickable: true,
    cellSizePixels: fd.grid_size,
    minColor: [c.r, c.g, c.b, 0],
    maxColor: [c.r, c.g, c.b, 255 * c.a],
    outline: false,
    getWeight: d => d.weight || 0
  }, (0,common/* commonLayerProps */.N)(fd, setTooltip, setTooltipContent)));
}
const propTypes = {
  formData: (prop_types_default()).object.isRequired,
  payload: (prop_types_default()).object.isRequired,
  setControlValue: (prop_types_default()).func.isRequired,
  viewport: (prop_types_default()).object.isRequired,
  onAddFilter: (prop_types_default()).func,
  width: (prop_types_default()).number.isRequired,
  height: (prop_types_default()).number.isRequired
};
const Screengrid_defaultProps = {
  onAddFilter() {}

};

class DeckGLScreenGrid extends react.PureComponent {
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

    this.state = DeckGLScreenGrid.getDerivedStateFromProps(props);
    this.getLayers = this.getLayers.bind(this);
    this.onValuesChange = this.onValuesChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    // the state is computed only from the payload; if it hasn't changed, do
    // not recompute state since this would reset selections and/or the play
    // slider position due to changes in form controls
    if (state && props.payload.form_data === state.formData) {
      return null;
    }

    const features = props.payload.data.features || [];
    const timestamps = features.map(f => f.__timestamp); // the granularity has to be read from the payload form_data, not the
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
        points: getPoints(features)
      });
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
      formData: props.payload.form_data
    };
  }

  onValuesChange(values) {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      values: Array.isArray(values) ? values : [values, values + this.state.getStep(values)]
    });
  }

  getLayers(values) {
    const filters = []; // time filter

    if (values[0] === values[1] || values[1] === this.end) {
      filters.push(d => d.__timestamp >= values[0] && d.__timestamp <= values[1]);
    } else {
      filters.push(d => d.__timestamp >= values[0] && d.__timestamp < values[1]);
    }

    const layer = getLayer(this.props.formData, this.props.payload, this.props.onAddFilter, this.setTooltip, filters);
    return [layer];
  }

  render() {
    const {
      formData,
      payload,
      setControlValue
    } = this.props;
    return react.createElement("div", null, react.createElement(AnimatableDeckGLContainer/* default */.Z, {
      ref: this.containerRef,
      aggregation: true,
      getLayers: this.getLayers,
      start: this.state.start,
      end: this.state.end,
      getStep: this.state.getStep,
      values: this.state.values,
      disabled: this.state.disabled,
      viewport: this.state.viewport,
      width: this.props.width,
      height: this.props.height,
      mapboxApiAccessToken: payload.data.mapboxApiKey,
      mapStyle: formData.mapbox_style,
      setControlValue: setControlValue,
      onValuesChange: this.onValuesChange,
      onViewportChange: this.onViewportChange
    }));
  }

}

DeckGLScreenGrid.propTypes = propTypes;
DeckGLScreenGrid.defaultProps = Screengrid_defaultProps;
/* harmony default export */ const Screengrid = (DeckGLScreenGrid);

/***/ })

}]);