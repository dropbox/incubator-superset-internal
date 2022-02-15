"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[3208],{

/***/ 19936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ pointToDensityGridDataCPU)
/* harmony export */ });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38550);
/* harmony import */ var _utils_grid_aggregation_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70050);


function pointToDensityGridDataCPU(props, aggregationParams) {
  const hashInfo = pointsToGridHashing(props, aggregationParams);
  const result = getGridLayerDataFromGridHash(hashInfo);
  return {
    gridHash: hashInfo.gridHash,
    gridOffset: hashInfo.gridOffset,
    data: result
  };
}

function pointsToGridHashing(props, aggregationParams) {
  const {
    data = [],
    cellSize
  } = props;
  const {
    attributes,
    viewport,
    projectPoints,
    numInstances
  } = aggregationParams;
  const positions = attributes.positions.value;
  const {
    size
  } = attributes.positions.getAccessor();
  const boundingBox = aggregationParams.boundingBox || getPositionBoundingBox(attributes.positions, numInstances);
  const offsets = aggregationParams.posOffset || [180, 90];
  const gridOffset = aggregationParams.gridOffset || (0,_utils_grid_aggregation_utils__WEBPACK_IMPORTED_MODULE_0__/* .getGridOffset */ .wc)(boundingBox, cellSize);

  if (gridOffset.xOffset <= 0 || gridOffset.yOffset <= 0) {
    return {
      gridHash: {},
      gridOffset
    };
  }

  const {
    width,
    height
  } = viewport;
  const numCol = Math.ceil(width / gridOffset.xOffset);
  const numRow = Math.ceil(height / gridOffset.yOffset);
  const gridHash = {};
  const {
    iterable,
    objectInfo
  } = (0,_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__/* .createIterable */ .jB)(data);
  const position = new Array(3);

  for (const pt of iterable) {
    objectInfo.index++;
    position[0] = positions[objectInfo.index * size];
    position[1] = positions[objectInfo.index * size + 1];
    position[2] = size >= 3 ? positions[objectInfo.index * size + 2] : 0;
    const [x, y] = projectPoints ? viewport.project(position) : position;

    if (Number.isFinite(x) && Number.isFinite(y)) {
      const yIndex = Math.floor((y + offsets[1]) / gridOffset.yOffset);
      const xIndex = Math.floor((x + offsets[0]) / gridOffset.xOffset);

      if (!projectPoints || xIndex >= 0 && xIndex < numCol && yIndex >= 0 && yIndex < numRow) {
        const key = "".concat(yIndex, "-").concat(xIndex);
        gridHash[key] = gridHash[key] || {
          count: 0,
          points: [],
          lonIdx: xIndex,
          latIdx: yIndex
        };
        gridHash[key].count += 1;
        gridHash[key].points.push({
          source: pt,
          index: objectInfo.index
        });
      }
    }
  }

  return {
    gridHash,
    gridOffset,
    offsets: [offsets[0] * -1, offsets[1] * -1]
  };
}

function getGridLayerDataFromGridHash({
  gridHash,
  gridOffset,
  offsets
}) {
  const data = new Array(Object.keys(gridHash).length);
  let i = 0;

  for (const key in gridHash) {
    const idxs = key.split('-');
    const latIdx = parseInt(idxs[0], 10);
    const lonIdx = parseInt(idxs[1], 10);
    const index = i++;
    data[index] = {
      index,
      position: [offsets[0] + gridOffset.xOffset * lonIdx, offsets[1] + gridOffset.yOffset * latIdx],
      ...gridHash[key]
    };
  }

  return data;
}

function getPositionBoundingBox(positionAttribute, numInstance) {
  const positions = positionAttribute.value;
  const {
    size
  } = positionAttribute.getAccessor();
  let yMin = Infinity;
  let yMax = -Infinity;
  let xMin = Infinity;
  let xMax = -Infinity;
  let y;
  let x;

  for (let i = 0; i < numInstance; i++) {
    x = positions[i * size];
    y = positions[i * size + 1];

    if (Number.isFinite(x) && Number.isFinite(y)) {
      yMin = y < yMin ? y : yMin;
      yMax = y > yMax ? y : yMax;
      xMin = x < xMin ? x : xMin;
      xMax = x > xMax ? x : xMax;
    }
  }

  return {
    xMin,
    xMax,
    yMin,
    yMax
  };
}
//# sourceMappingURL=grid-aggregator.js.map

/***/ }),

/***/ 13208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GridAggregationLayer)
/* harmony export */ });
/* harmony import */ var _aggregation_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63295);
/* harmony import */ var _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78651);
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53478);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80744);
/* harmony import */ var _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98014);
/* harmony import */ var _cpu_grid_layer_grid_aggregator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19936);






class GridAggregationLayer extends _aggregation_layer__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  initializeState({
    dimensions
  }) {
    const {
      gl
    } = this.context;
    super.initializeState(dimensions);
    this.setState({
      layerData: {},
      gpuGridAggregator: new _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(gl, {
        id: "".concat(this.id, "-gpu-aggregator")
      }),
      cpuGridAggregator: _cpu_grid_layer_grid_aggregator__WEBPACK_IMPORTED_MODULE_2__/* .pointToDensityGridDataCPU */ .h
    });
  }

  updateState(opts) {
    super.updateState(opts);
    this.updateAggregationState(opts);
    const {
      aggregationDataDirty,
      aggregationWeightsDirty,
      gpuAggregation
    } = this.state;

    if (this.getNumInstances() <= 0) {
      return;
    }

    let aggregationDirty = false;

    if (aggregationDataDirty || gpuAggregation && aggregationWeightsDirty) {
      this._updateAggregation(opts);

      aggregationDirty = true;
    }

    if (!gpuAggregation && (aggregationDataDirty || aggregationWeightsDirty)) {
      this._updateWeightBins();

      this._uploadAggregationResults();

      aggregationDirty = true;
    }

    this.setState({
      aggregationDirty
    });
  }

  finalizeState() {
    var _this$state$gpuGridAg;

    const {
      count
    } = this.state.weights;

    if (count && count.aggregationBuffer) {
      count.aggregationBuffer.delete();
    }

    (_this$state$gpuGridAg = this.state.gpuGridAggregator) === null || _this$state$gpuGridAg === void 0 ? void 0 : _this$state$gpuGridAg.delete();
    super.finalizeState();
  }

  updateShaders(shaders) {
    if (this.state.gpuAggregation) {
      this.state.gpuGridAggregator.updateShaders(shaders);
    }
  }

  updateAggregationState(opts) {
    _deck_gl_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"].assert */ .Z.assert(false);
  }

  allocateResources(numRow, numCol) {
    if (this.state.numRow !== numRow || this.state.numCol !== numCol) {
      const dataBytes = numCol * numRow * 4 * 4;
      const gl = this.context.gl;
      const {
        weights
      } = this.state;

      for (const name in weights) {
        const weight = weights[name];

        if (weight.aggregationBuffer) {
          weight.aggregationBuffer.delete();
        }

        weight.aggregationBuffer = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z(gl, {
          byteLength: dataBytes,
          accessor: {
            size: 4,
            type: 5126,
            divisor: 1
          }
        });
      }
    }
  }

  updateResults({
    aggregationData,
    maxMinData,
    maxData,
    minData
  }) {
    const {
      count
    } = this.state.weights;

    if (count) {
      count.aggregationData = aggregationData;
      count.maxMinData = maxMinData;
      count.maxData = maxData;
      count.minData = minData;
    }
  }

  _updateAggregation(opts) {
    const {
      cpuGridAggregator,
      gpuGridAggregator,
      gridOffset,
      posOffset,
      translation = [0, 0],
      scaling = [0, 0, 0],
      boundingBox,
      projectPoints,
      gpuAggregation,
      numCol,
      numRow
    } = this.state;
    const {
      props
    } = opts;
    const {
      viewport
    } = this.context;
    const attributes = this.getAttributes();
    const vertexCount = this.getNumInstances();

    if (!gpuAggregation) {
      const result = cpuGridAggregator(props, {
        gridOffset,
        projectPoints,
        attributes,
        viewport,
        posOffset,
        boundingBox
      });
      this.setState({
        layerData: result
      });
    } else {
      const {
        weights
      } = this.state;
      gpuGridAggregator.run({
        weights,
        cellSize: [gridOffset.xOffset, gridOffset.yOffset],
        numCol,
        numRow,
        translation,
        scaling,
        vertexCount,
        projectPoints,
        attributes,
        moduleSettings: this.getModuleSettings()
      });
    }
  }

  _updateWeightBins() {
    const {
      getValue
    } = this.state;
    const sortedBins = new _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z(this.state.layerData.data || [], {
      getValue
    });
    this.setState({
      sortedBins
    });
  }

  _uploadAggregationResults() {
    const {
      numCol,
      numRow
    } = this.state;
    const {
      data
    } = this.state.layerData;
    const {
      aggregatedBins,
      minValue,
      maxValue,
      totalCount
    } = this.state.sortedBins;
    const ELEMENTCOUNT = 4;
    const aggregationSize = numCol * numRow * ELEMENTCOUNT;
    const aggregationData = new Float32Array(aggregationSize).fill(0);

    for (const bin of aggregatedBins) {
      const {
        lonIdx,
        latIdx
      } = data[bin.i];
      const {
        value,
        counts
      } = bin;
      const cellIndex = (lonIdx + latIdx * numCol) * ELEMENTCOUNT;
      aggregationData[cellIndex] = value;
      aggregationData[cellIndex + ELEMENTCOUNT - 1] = counts;
    }

    const maxMinData = new Float32Array([maxValue, 0, 0, minValue]);
    const maxData = new Float32Array([maxValue, 0, 0, totalCount]);
    const minData = new Float32Array([minValue, 0, 0, totalCount]);
    this.updateResults({
      aggregationData,
      maxMinData,
      maxData,
      minData
    });
  }

}
GridAggregationLayer.layerName = 'GridAggregationLayer';
//# sourceMappingURL=grid-aggregation-layer.js.map

/***/ }),

/***/ 78651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ GPUGridAggregator)
});

// EXTERNAL MODULE: ./node_modules/@luma.gl/webgl/dist/esm/features/webgl-features-table.js
var webgl_features_table = __webpack_require__(6948);
// EXTERNAL MODULE: ./node_modules/@luma.gl/webgl/dist/esm/features/features.js
var features = __webpack_require__(44211);
// EXTERNAL MODULE: ./node_modules/@luma.gl/gltools/dist/esm/index.js + 13 modules
var esm = __webpack_require__(39450);
// EXTERNAL MODULE: ./node_modules/@luma.gl/webgl/dist/esm/classes/copy-and-blit.js + 1 modules
var copy_and_blit = __webpack_require__(1953);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/lib/model.js + 9 modules
var model = __webpack_require__(281);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/transform/transform.js + 6 modules
var transform = __webpack_require__(63346);
// EXTERNAL MODULE: ./node_modules/@luma.gl/shadertools/dist/esm/modules/fp64/fp64.js + 3 modules
var fp64 = __webpack_require__(41083);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/log.js
var log = __webpack_require__(80744);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/shader.js
var shader = __webpack_require__(27870);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/project32/project32.js
var project32 = __webpack_require__(93844);
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/aggregation-operation-utils.js
var aggregation_operation_utils = __webpack_require__(15614);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator-constants.js

const DEFAULT_RUN_PARAMS = {
  projectPoints: false,
  viewport: null,
  createBufferObjects: true,
  moduleSettings: {}
};
const MAX_32_BIT_FLOAT = 3.402823466e38;
const MIN_BLEND_EQUATION = [32775, 32774];
const MAX_BLEND_EQUATION = [32776, 32774];
const MAX_MIN_BLEND_EQUATION = [32776, 32775];
const EQUATION_MAP = {
  [aggregation_operation_utils/* AGGREGATION_OPERATION.SUM */.KM.SUM]: 32774,
  [aggregation_operation_utils/* AGGREGATION_OPERATION.MEAN */.KM.MEAN]: 32774,
  [aggregation_operation_utils/* AGGREGATION_OPERATION.MIN */.KM.MIN]: MIN_BLEND_EQUATION,
  [aggregation_operation_utils/* AGGREGATION_OPERATION.MAX */.KM.MAX]: MAX_BLEND_EQUATION
};
const ELEMENTCOUNT = 4;
const DEFAULT_WEIGHT_PARAMS = {
  size: 1,
  operation: aggregation_operation_utils/* AGGREGATION_OPERATION.SUM */.KM.SUM,
  needMin: false,
  needMax: false,
  combineMaxMin: false
};
const PIXEL_SIZE = 4;
const WEIGHT_SIZE = 3;
const MAX_MIN_TEXTURE_OPTS = {
  format: 34836,
  type: 5126,
  border: 0,
  mipmaps: false,
  parameters: {
    [10240]: 9728,
    [10241]: 9728
  },
  dataFormat: 6408,
  width: 1,
  height: 1
};
//# sourceMappingURL=gpu-grid-aggregator-constants.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-to-grid-vs.glsl.js
/* harmony default export */ const aggregate_to_grid_vs_glsl = ("#define SHADER_NAME gpu-aggregation-to-grid-vs\n\nattribute vec3 positions;\nattribute vec3 positions64Low;\nattribute vec3 weights;\nuniform vec2 cellSize;\nuniform vec2 gridSize;\nuniform bool projectPoints;\nuniform vec2 translation;\nuniform vec3 scaling;\n\nvarying vec3 vWeights;\n\nvec2 project_to_pixel(vec4 pos) {\n  vec4 result;\n  pos.xy = pos.xy/pos.w;\n  result = pos + vec4(translation, 0., 0.);\n  result.xy = scaling.z > 0. ? result.xy * scaling.xy : result.xy;\n  return result.xy;\n}\n\nvoid main(void) {\n\n  vWeights = weights;\n\n  vec4 windowPos = vec4(positions, 1.);\n  if (projectPoints) {\n    windowPos = project_position_to_clipspace(positions, positions64Low, vec3(0));\n  }\n\n  vec2 pos = project_to_pixel(windowPos);\n\n  vec2 pixelXY64[2];\n  pixelXY64[0] = vec2(pos.x, 0.);\n  pixelXY64[1] = vec2(pos.y, 0.);\n  vec2 gridXY64[2];\n  gridXY64[0] = div_fp64(pixelXY64[0], vec2(cellSize.x, 0));\n  gridXY64[1] = div_fp64(pixelXY64[1], vec2(cellSize.y, 0));\n  float x = floor(gridXY64[0].x);\n  float y = floor(gridXY64[1].x);\n  pos = vec2(x, y);\n  pos = (pos * (2., 2.) / (gridSize)) - (1., 1.);\n  vec2 offset = 1.0 / gridSize;\n  pos = pos + offset;\n\n  gl_Position = vec4(pos, 0.0, 1.0);\n  gl_PointSize = 1.0;\n}\n");
//# sourceMappingURL=aggregate-to-grid-vs.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-to-grid-fs.glsl.js
/* harmony default export */ const aggregate_to_grid_fs_glsl = ("#define SHADER_NAME gpu-aggregation-to-grid-fs\n\nprecision highp float;\n\nvarying vec3 vWeights;\n\nvoid main(void) {\n  gl_FragColor = vec4(vWeights, 1.0);\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n");
//# sourceMappingURL=aggregate-to-grid-fs.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-all-vs.glsl.js
/* harmony default export */ const aggregate_all_vs_glsl = ("#version 300 es\n#define SHADER_NAME gpu-aggregation-all-vs-64\n\nin vec2 position;\nuniform ivec2 gridSize;\nout vec2 vTextureCoord;\n\nvoid main(void) {\n  vec2 pos = vec2(-1.0, -1.0);\n  vec2 offset = 1.0 / vec2(gridSize);\n  pos = pos + offset;\n\n  gl_Position = vec4(pos, 0.0, 1.0);\n\n  int yIndex = gl_InstanceID / gridSize[0];\n  int xIndex = gl_InstanceID - (yIndex * gridSize[0]);\n\n  vec2 yIndexFP64 = vec2(float(yIndex), 0.);\n  vec2 xIndexFP64 = vec2(float(xIndex), 0.);\n  vec2 gridSizeYFP64 = vec2(gridSize[1], 0.);\n  vec2 gridSizeXFP64 = vec2(gridSize[0], 0.);\n\n  vec2 texCoordXFP64 = div_fp64(yIndexFP64, gridSizeYFP64);\n  vec2 texCoordYFP64 = div_fp64(xIndexFP64, gridSizeXFP64);\n\n  vTextureCoord = vec2(texCoordYFP64.x, texCoordXFP64.x);\n  gl_PointSize = 1.0;\n}\n");
//# sourceMappingURL=aggregate-all-vs.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-all-fs.glsl.js
/* harmony default export */ const aggregate_all_fs_glsl = ("#version 300 es\n#define SHADER_NAME gpu-aggregation-all-fs\n\nprecision highp float;\n\nin vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform bool combineMaxMin;\nout vec4 fragColor;\nvoid main(void) {\n  vec4 textureColor = texture(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n  if (textureColor.a == 0.) {\n    discard;\n  }\n  fragColor.rgb = textureColor.rgb;\n  fragColor.a = combineMaxMin ? textureColor.r : textureColor.a;\n}\n");
//# sourceMappingURL=aggregate-all-fs.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/transform-mean-vs.glsl.js
/* harmony default export */ const transform_mean_vs_glsl = ("#define SHADER_NAME gpu-aggregation-transform-mean-vs\nattribute vec4 aggregationValues;\nvarying vec4 meanValues;\n\nvoid main()\n{\n  bool isCellValid = bool(aggregationValues.w > 0.);\n  meanValues.xyz = isCellValid ? aggregationValues.xyz/aggregationValues.w : vec3(0, 0, 0);\n  meanValues.w = aggregationValues.w;\n  gl_PointSize = 1.0;\n}\n");
//# sourceMappingURL=transform-mean-vs.glsl.js.map
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/resource-utils.js
var resource_utils = __webpack_require__(92637);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator.js











const BUFFER_NAMES = ['aggregationBuffer', 'maxMinBuffer', 'minBuffer', 'maxBuffer'];
const ARRAY_BUFFER_MAP = {
  maxData: 'maxBuffer',
  minData: 'minBuffer',
  maxMinData: 'maxMinBuffer'
};
const REQUIRED_FEATURES = [webgl_features_table/* FEATURES.WEBGL2 */.h.WEBGL2, webgl_features_table/* FEATURES.COLOR_ATTACHMENT_RGBA32F */.h.COLOR_ATTACHMENT_RGBA32F, webgl_features_table/* FEATURES.BLEND_EQUATION_MINMAX */.h.BLEND_EQUATION_MINMAX, webgl_features_table/* FEATURES.FLOAT_BLEND */.h.FLOAT_BLEND, webgl_features_table/* FEATURES.TEXTURE_FLOAT */.h.TEXTURE_FLOAT];
class GPUGridAggregator {
  static getAggregationData({
    aggregationData,
    maxData,
    minData,
    maxMinData,
    pixelIndex
  }) {
    const index = pixelIndex * PIXEL_SIZE;
    const results = {};

    if (aggregationData) {
      results.cellCount = aggregationData[index + 3];
      results.cellWeight = aggregationData[index];
    }

    if (maxMinData) {
      results.maxCellWieght = maxMinData[0];
      results.minCellWeight = maxMinData[3];
    } else {
      if (maxData) {
        results.maxCellWieght = maxData[0];
        results.totalCount = maxData[3];
      }

      if (minData) {
        results.minCellWeight = minData[0];
        results.totalCount = maxData[3];
      }
    }

    return results;
  }

  static getCellData({
    countsData,
    size = 1
  }) {
    const numCells = countsData.length / 4;
    const cellWeights = new Float32Array(numCells * size);
    const cellCounts = new Uint32Array(numCells);

    for (let i = 0; i < numCells; i++) {
      for (let sizeIndex = 0; sizeIndex < size; sizeIndex++) {
        cellWeights[i * size + sizeIndex] = countsData[i * 4 + sizeIndex];
      }

      cellCounts[i] = countsData[i * 4 + 3];
    }

    return {
      cellCounts,
      cellWeights
    };
  }

  static isSupported(gl) {
    return (0,features/* hasFeatures */.ag)(gl, REQUIRED_FEATURES);
  }

  constructor(gl, opts = {}) {
    this.id = opts.id || 'gpu-grid-aggregator';
    this.gl = gl;
    this.state = {
      weightAttributes: {},
      textures: {},
      meanTextures: {},
      buffers: {},
      framebuffers: {},
      maxMinFramebuffers: {},
      minFramebuffers: {},
      maxFramebuffers: {},
      equations: {},
      resources: {},
      results: {}
    };
    this._hasGPUSupport = (0,esm/* isWebGL2 */.D0)(gl) && (0,features/* hasFeatures */.ag)(this.gl, webgl_features_table/* FEATURES.BLEND_EQUATION_MINMAX */.h.BLEND_EQUATION_MINMAX, webgl_features_table/* FEATURES.COLOR_ATTACHMENT_RGBA32F */.h.COLOR_ATTACHMENT_RGBA32F, webgl_features_table/* FEATURES.TEXTURE_FLOAT */.h.TEXTURE_FLOAT);

    if (this._hasGPUSupport) {
      this._setupModels();
    }
  }

  delete() {
    const {
      gridAggregationModel,
      allAggregationModel,
      meanTransform
    } = this;
    const {
      textures,
      framebuffers,
      maxMinFramebuffers,
      minFramebuffers,
      maxFramebuffers,
      meanTextures,
      resources
    } = this.state;
    gridAggregationModel === null || gridAggregationModel === void 0 ? void 0 : gridAggregationModel.delete();
    allAggregationModel === null || allAggregationModel === void 0 ? void 0 : allAggregationModel.delete();
    meanTransform === null || meanTransform === void 0 ? void 0 : meanTransform.delete();
    deleteResources([framebuffers, textures, maxMinFramebuffers, minFramebuffers, maxFramebuffers, meanTextures, resources]);
  }

  run(opts = {}) {
    this.setState({
      results: {}
    });

    const aggregationParams = this._normalizeAggregationParams(opts);

    if (!this._hasGPUSupport) {
      log/* default.log */.Z.log(1, 'GPUGridAggregator: not supported')();
    }

    return this._runAggregation(aggregationParams);
  }

  getData(weightId) {
    const data = {};
    const results = this.state.results;

    if (!results[weightId].aggregationData) {
      results[weightId].aggregationData = results[weightId].aggregationBuffer.getData();
    }

    data.aggregationData = results[weightId].aggregationData;

    for (const arrayName in ARRAY_BUFFER_MAP) {
      const bufferName = ARRAY_BUFFER_MAP[arrayName];

      if (results[weightId][arrayName] || results[weightId][bufferName]) {
        results[weightId][arrayName] = results[weightId][arrayName] || results[weightId][bufferName].getData();
        data[arrayName] = results[weightId][arrayName];
      }
    }

    return data;
  }

  updateShaders(shaderOptions = {}) {
    this.setState({
      shaderOptions,
      modelDirty: true
    });
  }

  _normalizeAggregationParams(opts) {
    const aggregationParams = { ...DEFAULT_RUN_PARAMS,
      ...opts
    };
    const {
      weights
    } = aggregationParams;

    if (weights) {
      aggregationParams.weights = normalizeWeightParams(weights);
    }

    return aggregationParams;
  }

  setState(updateObject) {
    Object.assign(this.state, updateObject);
  }

  _getAggregateData(opts) {
    const results = {};
    const {
      textures,
      framebuffers,
      maxMinFramebuffers,
      minFramebuffers,
      maxFramebuffers,
      resources
    } = this.state;
    const {
      weights
    } = opts;

    for (const id in weights) {
      results[id] = {};
      const {
        needMin,
        needMax,
        combineMaxMin
      } = weights[id];
      results[id].aggregationTexture = textures[id];
      results[id].aggregationBuffer = (0,copy_and_blit/* readPixelsToBuffer */.Jb)(framebuffers[id], {
        target: weights[id].aggregationBuffer,
        sourceType: 5126
      });

      if (needMin && needMax && combineMaxMin) {
        results[id].maxMinBuffer = (0,copy_and_blit/* readPixelsToBuffer */.Jb)(maxMinFramebuffers[id], {
          target: weights[id].maxMinBuffer,
          sourceType: 5126
        });
        results[id].maxMinTexture = resources["".concat(id, "-maxMinTexture")];
      } else {
        if (needMin) {
          results[id].minBuffer = (0,copy_and_blit/* readPixelsToBuffer */.Jb)(minFramebuffers[id], {
            target: weights[id].minBuffer,
            sourceType: 5126
          });
          results[id].minTexture = resources["".concat(id, "-minTexture")];
        }

        if (needMax) {
          results[id].maxBuffer = (0,copy_and_blit/* readPixelsToBuffer */.Jb)(maxFramebuffers[id], {
            target: weights[id].maxBuffer,
            sourceType: 5126
          });
          results[id].maxTexture = resources["".concat(id, "-maxTexture")];
        }
      }
    }

    this._trackGPUResultBuffers(results, weights);

    return results;
  }

  _renderAggregateData(opts) {
    const {
      cellSize,
      projectPoints,
      attributes,
      moduleSettings,
      numCol,
      numRow,
      weights,
      translation,
      scaling
    } = opts;
    const {
      maxMinFramebuffers,
      minFramebuffers,
      maxFramebuffers
    } = this.state;
    const gridSize = [numCol, numRow];
    const parameters = {
      blend: true,
      depthTest: false,
      blendFunc: [1, 1]
    };
    const uniforms = {
      cellSize,
      gridSize,
      projectPoints,
      translation,
      scaling
    };

    for (const id in weights) {
      const {
        needMin,
        needMax
      } = weights[id];
      const combineMaxMin = needMin && needMax && weights[id].combineMaxMin;

      this._renderToWeightsTexture({
        id,
        parameters,
        moduleSettings,
        uniforms,
        gridSize,
        attributes,
        weights
      });

      if (combineMaxMin) {
        this._renderToMaxMinTexture({
          id,
          parameters: { ...parameters,
            blendEquation: MAX_MIN_BLEND_EQUATION
          },
          gridSize,
          minOrMaxFb: maxMinFramebuffers[id],
          clearParams: {
            clearColor: [0, 0, 0, MAX_32_BIT_FLOAT]
          },
          combineMaxMin
        });
      } else {
        if (needMin) {
          this._renderToMaxMinTexture({
            id,
            parameters: { ...parameters,
              blendEquation: MIN_BLEND_EQUATION
            },
            gridSize,
            minOrMaxFb: minFramebuffers[id],
            clearParams: {
              clearColor: [MAX_32_BIT_FLOAT, MAX_32_BIT_FLOAT, MAX_32_BIT_FLOAT, 0]
            },
            combineMaxMin
          });
        }

        if (needMax) {
          this._renderToMaxMinTexture({
            id,
            parameters: { ...parameters,
              blendEquation: MAX_BLEND_EQUATION
            },
            gridSize,
            minOrMaxFb: maxFramebuffers[id],
            clearParams: {
              clearColor: [0, 0, 0, 0]
            },
            combineMaxMin
          });
        }
      }
    }
  }

  _renderToMaxMinTexture(opts) {
    const {
      id,
      parameters,
      gridSize,
      minOrMaxFb,
      combineMaxMin,
      clearParams = {}
    } = opts;
    const {
      framebuffers
    } = this.state;
    const {
      gl,
      allAggregationModel
    } = this;
    (0,esm/* withParameters */.s8)(gl, { ...clearParams,
      framebuffer: minOrMaxFb,
      viewport: [0, 0, gridSize[0], gridSize[1]]
    }, () => {
      gl.clear(16384);
      allAggregationModel.draw({
        parameters,
        uniforms: {
          uSampler: framebuffers[id].texture,
          gridSize,
          combineMaxMin
        }
      });
    });
  }

  _renderToWeightsTexture(opts) {
    const {
      id,
      parameters,
      moduleSettings,
      uniforms,
      gridSize,
      weights
    } = opts;
    const {
      framebuffers,
      equations,
      weightAttributes
    } = this.state;
    const {
      gl,
      gridAggregationModel
    } = this;
    const {
      operation
    } = weights[id];
    const clearColor = operation === aggregation_operation_utils/* AGGREGATION_OPERATION.MIN */.KM.MIN ? [MAX_32_BIT_FLOAT, MAX_32_BIT_FLOAT, MAX_32_BIT_FLOAT, 0] : [0, 0, 0, 0];
    (0,esm/* withParameters */.s8)(gl, {
      framebuffer: framebuffers[id],
      viewport: [0, 0, gridSize[0], gridSize[1]],
      clearColor
    }, () => {
      gl.clear(16384);
      const attributes = {
        weights: weightAttributes[id]
      };
      gridAggregationModel.draw({
        parameters: { ...parameters,
          blendEquation: equations[id]
        },
        moduleSettings,
        uniforms,
        attributes
      });
    });

    if (operation === aggregation_operation_utils/* AGGREGATION_OPERATION.MEAN */.KM.MEAN) {
      const {
        meanTextures,
        textures
      } = this.state;
      const transformOptions = {
        _sourceTextures: {
          aggregationValues: meanTextures[id]
        },
        _targetTexture: textures[id],
        elementCount: textures[id].width * textures[id].height
      };

      if (this.meanTransform) {
        this.meanTransform.update(transformOptions);
      } else {
        this.meanTransform = getMeanTransform(gl, transformOptions);
      }

      this.meanTransform.run({
        parameters: {
          blend: false,
          depthTest: false
        }
      });
      framebuffers[id].attach({
        [36064]: textures[id]
      });
    }
  }

  _runAggregation(opts) {
    this._updateModels(opts);

    this._setupFramebuffers(opts);

    this._renderAggregateData(opts);

    const results = this._getAggregateData(opts);

    this.setState({
      results
    });
    return results;
  }

  _setupFramebuffers(opts) {
    const {
      textures,
      framebuffers,
      maxMinFramebuffers,
      minFramebuffers,
      maxFramebuffers,
      meanTextures,
      equations
    } = this.state;
    const {
      weights
    } = opts;
    const {
      numCol,
      numRow
    } = opts;
    const framebufferSize = {
      width: numCol,
      height: numRow
    };

    for (const id in weights) {
      const {
        needMin,
        needMax,
        combineMaxMin,
        operation
      } = weights[id];
      textures[id] = weights[id].aggregationTexture || textures[id] || (0,resource_utils/* getFloatTexture */.hq)(this.gl, {
        id: "".concat(id, "-texture"),
        width: numCol,
        height: numRow
      });
      textures[id].resize(framebufferSize);
      let texture = textures[id];

      if (operation === aggregation_operation_utils/* AGGREGATION_OPERATION.MEAN */.KM.MEAN) {
        meanTextures[id] = meanTextures[id] || (0,resource_utils/* getFloatTexture */.hq)(this.gl, {
          id: "".concat(id, "-mean-texture"),
          width: numCol,
          height: numRow
        });
        meanTextures[id].resize(framebufferSize);
        texture = meanTextures[id];
      }

      if (framebuffers[id]) {
        framebuffers[id].attach({
          [36064]: texture
        });
      } else {
        framebuffers[id] = (0,resource_utils/* getFramebuffer */._w)(this.gl, {
          id: "".concat(id, "-fb"),
          width: numCol,
          height: numRow,
          texture
        });
      }

      framebuffers[id].resize(framebufferSize);
      equations[id] = EQUATION_MAP[operation] || EQUATION_MAP.SUM;

      if (needMin || needMax) {
        if (needMin && needMax && combineMaxMin) {
          if (!maxMinFramebuffers[id]) {
            texture = weights[id].maxMinTexture || this._getMinMaxTexture("".concat(id, "-maxMinTexture"));
            maxMinFramebuffers[id] = (0,resource_utils/* getFramebuffer */._w)(this.gl, {
              id: "".concat(id, "-maxMinFb"),
              texture
            });
          }
        } else {
          if (needMin) {
            if (!minFramebuffers[id]) {
              texture = weights[id].minTexture || this._getMinMaxTexture("".concat(id, "-minTexture"));
              minFramebuffers[id] = (0,resource_utils/* getFramebuffer */._w)(this.gl, {
                id: "".concat(id, "-minFb"),
                texture
              });
            }
          }

          if (needMax) {
            if (!maxFramebuffers[id]) {
              texture = weights[id].maxTexture || this._getMinMaxTexture("".concat(id, "-maxTexture"));
              maxFramebuffers[id] = (0,resource_utils/* getFramebuffer */._w)(this.gl, {
                id: "".concat(id, "-maxFb"),
                texture
              });
            }
          }
        }
      }
    }
  }

  _getMinMaxTexture(name) {
    const {
      resources
    } = this.state;

    if (!resources[name]) {
      resources[name] = (0,resource_utils/* getFloatTexture */.hq)(this.gl, {
        id: "resourceName"
      });
    }

    return resources[name];
  }

  _setupModels({
    numCol = 0,
    numRow = 0
  } = {}) {
    var _this$gridAggregation;

    const {
      gl
    } = this;
    const {
      shaderOptions
    } = this.state;
    (_this$gridAggregation = this.gridAggregationModel) === null || _this$gridAggregation === void 0 ? void 0 : _this$gridAggregation.delete();
    this.gridAggregationModel = getAggregationModel(gl, shaderOptions);

    if (!this.allAggregationModel) {
      const instanceCount = numCol * numRow;
      this.allAggregationModel = getAllAggregationModel(gl, instanceCount);
    }
  }

  _setupWeightAttributes(opts) {
    const {
      weightAttributes
    } = this.state;
    const {
      weights
    } = opts;

    for (const id in weights) {
      weightAttributes[id] = opts.attributes[id];
    }
  }

  _trackGPUResultBuffers(results, weights) {
    const {
      resources
    } = this.state;

    for (const id in results) {
      if (results[id]) {
        for (const bufferName of BUFFER_NAMES) {
          if (results[id][bufferName] && weights[id][bufferName] !== results[id][bufferName]) {
            const name = "gpu-result-".concat(id, "-").concat(bufferName);

            if (resources[name]) {
              resources[name].delete();
            }

            resources[name] = results[id][bufferName];
          }
        }
      }
    }
  }

  _updateModels(opts) {
    const {
      vertexCount,
      attributes,
      numCol,
      numRow
    } = opts;
    const {
      modelDirty
    } = this.state;

    if (modelDirty) {
      this._setupModels(opts);

      this.setState({
        modelDirty: false
      });
    }

    this._setupWeightAttributes(opts);

    this.gridAggregationModel.setVertexCount(vertexCount);
    this.gridAggregationModel.setAttributes(attributes);
    this.allAggregationModel.setInstanceCount(numCol * numRow);
  }

}

function normalizeWeightParams(weights) {
  const result = {};

  for (const id in weights) {
    result[id] = { ...DEFAULT_WEIGHT_PARAMS,
      ...weights[id]
    };
  }

  return result;
}

function deleteResources(resources) {
  resources = Array.isArray(resources) ? resources : [resources];
  resources.forEach(obj => {
    for (const name in obj) {
      obj[name].delete();
    }
  });
}

function getAggregationModel(gl, shaderOptions) {
  const shaders = (0,shader/* mergeShaders */.l)({
    vs: aggregate_to_grid_vs_glsl,
    fs: aggregate_to_grid_fs_glsl,
    modules: [fp64/* fp64arithmetic */.n2, project32/* default */.Z]
  }, shaderOptions);
  return new model/* default */.Z(gl, {
    id: 'Gird-Aggregation-Model',
    vertexCount: 1,
    drawMode: 0,
    ...shaders
  });
}

function getAllAggregationModel(gl, instanceCount) {
  return new model/* default */.Z(gl, {
    id: 'All-Aggregation-Model',
    vs: aggregate_all_vs_glsl,
    fs: aggregate_all_fs_glsl,
    modules: [fp64/* fp64arithmetic */.n2],
    vertexCount: 1,
    drawMode: 0,
    isInstanced: true,
    instanceCount,
    attributes: {
      position: [0, 0]
    }
  });
}

function getMeanTransform(gl, opts) {
  return new transform/* default */.Z(gl, {
    vs: transform_mean_vs_glsl,
    _targetTextureVarying: 'meanValues',
    ...opts
  });
}
//# sourceMappingURL=gpu-grid-aggregator.js.map

/***/ }),

/***/ 70050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A5": () => (/* binding */ getBoundingBox),
/* harmony export */   "wc": () => (/* binding */ getGridOffset),
/* harmony export */   "PQ": () => (/* binding */ getGridParams)
/* harmony export */ });
/* unused harmony export alignToCell */
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24088);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80744);

const R_EARTH = 6378000;

function toFinite(n) {
  return Number.isFinite(n) ? n : 0;
}

function getBoundingBox(attributes, vertexCount) {
  const positions = attributes.positions.value;
  let yMin = Infinity;
  let yMax = -Infinity;
  let xMin = Infinity;
  let xMax = -Infinity;
  let y;
  let x;

  for (let i = 0; i < vertexCount; i++) {
    x = positions[i * 3];
    y = positions[i * 3 + 1];
    yMin = y < yMin ? y : yMin;
    yMax = y > yMax ? y : yMax;
    xMin = x < xMin ? x : xMin;
    xMax = x > xMax ? x : xMax;
  }

  const boundingBox = {
    xMin: toFinite(xMin),
    xMax: toFinite(xMax),
    yMin: toFinite(yMin),
    yMax: toFinite(yMax)
  };
  return boundingBox;
}

function getTranslation(boundingBox, gridOffset, coordinateSystem, viewport) {
  const {
    width,
    height
  } = viewport;
  const worldOrigin = coordinateSystem === _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__/* .COORDINATE_SYSTEM.CARTESIAN */ .Df.CARTESIAN ? [-width / 2, -height / 2] : [-180, -90];
  _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__/* ["default"].assert */ .Z.assert(coordinateSystem === _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__/* .COORDINATE_SYSTEM.CARTESIAN */ .Df.CARTESIAN || coordinateSystem === _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__/* .COORDINATE_SYSTEM.LNGLAT */ .Df.LNGLAT || coordinateSystem === _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__/* .COORDINATE_SYSTEM.DEFAULT */ .Df.DEFAULT);
  const {
    xMin,
    yMin
  } = boundingBox;
  return [-1 * (alignToCell(xMin - worldOrigin[0], gridOffset.xOffset) + worldOrigin[0]), -1 * (alignToCell(yMin - worldOrigin[1], gridOffset.yOffset) + worldOrigin[1])];
}

function alignToCell(inValue, cellSize) {
  const sign = inValue < 0 ? -1 : 1;
  let value = sign < 0 ? Math.abs(inValue) + cellSize : Math.abs(inValue);
  value = Math.floor(value / cellSize) * cellSize;
  return value * sign;
}
function getGridOffset(boundingBox, cellSize, convertToMeters = true) {
  if (!convertToMeters) {
    return {
      xOffset: cellSize,
      yOffset: cellSize
    };
  }

  const {
    yMin,
    yMax
  } = boundingBox;
  const centerLat = (yMin + yMax) / 2;
  return calculateGridLatLonOffset(cellSize, centerLat);
}
function getGridParams(boundingBox, cellSize, viewport, coordinateSystem) {
  const gridOffset = getGridOffset(boundingBox, cellSize, coordinateSystem !== _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__/* .COORDINATE_SYSTEM.CARTESIAN */ .Df.CARTESIAN);
  const translation = getTranslation(boundingBox, gridOffset, coordinateSystem, viewport);
  const {
    xMin,
    yMin,
    xMax,
    yMax
  } = boundingBox;
  const width = xMax - xMin + gridOffset.xOffset;
  const height = yMax - yMin + gridOffset.yOffset;
  const numCol = Math.ceil(width / gridOffset.xOffset);
  const numRow = Math.ceil(height / gridOffset.yOffset);
  return {
    gridOffset,
    translation,
    width,
    height,
    numCol,
    numRow
  };
}

function calculateGridLatLonOffset(cellSize, latitude) {
  const yOffset = calculateLatOffset(cellSize);
  const xOffset = calculateLonOffset(latitude, cellSize);
  return {
    yOffset,
    xOffset
  };
}

function calculateLatOffset(dy) {
  return dy / R_EARTH * (180 / Math.PI);
}

function calculateLonOffset(lat, dx) {
  return dx / R_EARTH * (180 / Math.PI) / Math.cos(lat * Math.PI / 180);
}
//# sourceMappingURL=grid-aggregation-utils.js.map

/***/ }),

/***/ 92637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hq": () => (/* binding */ getFloatTexture),
/* harmony export */   "_w": () => (/* binding */ getFramebuffer)
/* harmony export */ });
/* unused harmony export getFloatArray */
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4912);
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39450);
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53849);

const DEFAULT_PARAMETERS = {
  [10240]: 9728,
  [10241]: 9728
};
function getFloatTexture(gl, opts = {}) {
  const {
    width = 1,
    height = 1,
    data = null,
    unpackFlipY = true,
    parameters = DEFAULT_PARAMETERS
  } = opts;
  const texture = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(gl, {
    data,
    format: (0,_luma_gl_core__WEBPACK_IMPORTED_MODULE_1__/* .isWebGL2 */ .D0)(gl) ? 34836 : 6408,
    type: 5126,
    border: 0,
    mipmaps: false,
    parameters,
    dataFormat: 6408,
    width,
    height,
    unpackFlipY
  });
  return texture;
}
function getFramebuffer(gl, opts) {
  const {
    id,
    width = 1,
    height = 1,
    texture
  } = opts;
  const fb = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z(gl, {
    id,
    width,
    height,
    attachments: {
      [36064]: texture
    }
  });
  return fb;
}
function getFloatArray(array, size, fillValue = 0) {
  if (!array || array.length < size) {
    return new Float32Array(size).fill(fillValue);
  }

  return array;
}
//# sourceMappingURL=resource-utils.js.map

/***/ }),

/***/ 41083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n2": () => (/* binding */ fp64arithmetic)
});

// UNUSED EXPORTS: fp64, fp64LowPart, fp64ify, fp64ifyMatrix4

;// CONCATENATED MODULE: ./node_modules/@luma.gl/shadertools/dist/esm/modules/fp64/fp64-utils.js
function fp64ify(a, out = [], startIndex = 0) {
  const hiPart = Math.fround(a);
  const loPart = a - hiPart;
  out[startIndex] = hiPart;
  out[startIndex + 1] = loPart;
  return out;
}
function fp64LowPart(a) {
  return a - Math.fround(a);
}
function fp64ifyMatrix4(matrix) {
  const matrixFP64 = new Float32Array(32);

  for (let i = 0; i < 4; ++i) {
    for (let j = 0; j < 4; ++j) {
      const index = i * 4 + j;
      fp64ify(matrix[j * 4 + i], matrixFP64, index * 2);
    }
  }

  return matrixFP64;
}
//# sourceMappingURL=fp64-utils.js.map
;// CONCATENATED MODULE: ./node_modules/@luma.gl/shadertools/dist/esm/modules/fp64/fp64-arithmetic.glsl.js
/* harmony default export */ const fp64_arithmetic_glsl = ("uniform float ONE;\nvec2 split(float a) {\n  const float SPLIT = 4097.0;\n  float t = a * SPLIT;\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float a_hi = t * ONE - (t - a);\n  float a_lo = a * ONE - a_hi;\n#else\n  float a_hi = t - (t - a);\n  float a_lo = a - a_hi;\n#endif\n  return vec2(a_hi, a_lo);\n}\nvec2 split2(vec2 a) {\n  vec2 b = split(a.x);\n  b.y += a.y;\n  return b;\n}\nvec2 quickTwoSum(float a, float b) {\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float sum = (a + b) * ONE;\n  float err = b - (sum - a) * ONE;\n#else\n  float sum = a + b;\n  float err = b - (sum - a);\n#endif\n  return vec2(sum, err);\n}\nvec2 twoSum(float a, float b) {\n  float s = (a + b);\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float v = (s * ONE - a) * ONE;\n  float err = (a - (s - v) * ONE) * ONE * ONE * ONE + (b - v);\n#else\n  float v = s - a;\n  float err = (a - (s - v)) + (b - v);\n#endif\n  return vec2(s, err);\n}\n\nvec2 twoSub(float a, float b) {\n  float s = (a - b);\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float v = (s * ONE - a) * ONE;\n  float err = (a - (s - v) * ONE) * ONE * ONE * ONE - (b + v);\n#else\n  float v = s - a;\n  float err = (a - (s - v)) - (b + v);\n#endif\n  return vec2(s, err);\n}\n\nvec2 twoSqr(float a) {\n  float prod = a * a;\n  vec2 a_fp64 = split(a);\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float err = ((a_fp64.x * a_fp64.x - prod) * ONE + 2.0 * a_fp64.x *\n    a_fp64.y * ONE * ONE) + a_fp64.y * a_fp64.y * ONE * ONE * ONE;\n#else\n  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;\n#endif\n  return vec2(prod, err);\n}\n\nvec2 twoProd(float a, float b) {\n  float prod = a * b;\n  vec2 a_fp64 = split(a);\n  vec2 b_fp64 = split(b);\n  float err = ((a_fp64.x * b_fp64.x - prod) + a_fp64.x * b_fp64.y +\n    a_fp64.y * b_fp64.x) + a_fp64.y * b_fp64.y;\n  return vec2(prod, err);\n}\n\nvec2 sum_fp64(vec2 a, vec2 b) {\n  vec2 s, t;\n  s = twoSum(a.x, b.x);\n  t = twoSum(a.y, b.y);\n  s.y += t.x;\n  s = quickTwoSum(s.x, s.y);\n  s.y += t.y;\n  s = quickTwoSum(s.x, s.y);\n  return s;\n}\n\nvec2 sub_fp64(vec2 a, vec2 b) {\n  vec2 s, t;\n  s = twoSub(a.x, b.x);\n  t = twoSub(a.y, b.y);\n  s.y += t.x;\n  s = quickTwoSum(s.x, s.y);\n  s.y += t.y;\n  s = quickTwoSum(s.x, s.y);\n  return s;\n}\n\nvec2 mul_fp64(vec2 a, vec2 b) {\n  vec2 prod = twoProd(a.x, b.x);\n  prod.y += a.x * b.y;\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  prod = split2(prod);\n#endif\n  prod = quickTwoSum(prod.x, prod.y);\n  prod.y += a.y * b.x;\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  prod = split2(prod);\n#endif\n  prod = quickTwoSum(prod.x, prod.y);\n  return prod;\n}\n\nvec2 div_fp64(vec2 a, vec2 b) {\n  float xn = 1.0 / b.x;\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  vec2 yn = mul_fp64(a, vec2(xn, 0));\n#else\n  vec2 yn = a * xn;\n#endif\n  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;\n  vec2 prod = twoProd(xn, diff);\n  return sum_fp64(yn, prod);\n}\n\nvec2 sqrt_fp64(vec2 a) {\n  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);\n  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);\n\n  float x = 1.0 / sqrt(a.x);\n  float yn = a.x * x;\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  vec2 yn_sqr = twoSqr(yn) * ONE;\n#else\n  vec2 yn_sqr = twoSqr(yn);\n#endif\n  float diff = sub_fp64(a, yn_sqr).x;\n  vec2 prod = twoProd(x * 0.5, diff);\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  return sum_fp64(split(yn), prod);\n#else\n  return sum_fp64(vec2(yn, 0.0), prod);\n#endif\n}\n");
//# sourceMappingURL=fp64-arithmetic.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@luma.gl/shadertools/dist/esm/modules/fp64/fp64-functions.glsl.js
/* harmony default export */ const fp64_functions_glsl = ("const vec2 E_FP64 = vec2(2.7182817459106445e+00, 8.254840366817007e-08);\nconst vec2 LOG2_FP64 = vec2(0.6931471824645996e+00, -1.9046542121259336e-09);\nconst vec2 PI_FP64 = vec2(3.1415927410125732, -8.742278012618954e-8);\nconst vec2 TWO_PI_FP64 = vec2(6.2831854820251465, -1.7484556025237907e-7);\nconst vec2 PI_2_FP64 = vec2(1.5707963705062866, -4.371139006309477e-8);\nconst vec2 PI_4_FP64 = vec2(0.7853981852531433, -2.1855695031547384e-8);\nconst vec2 PI_16_FP64 = vec2(0.19634954631328583, -5.463923757886846e-9);\nconst vec2 PI_16_2_FP64 = vec2(0.39269909262657166, -1.0927847515773692e-8);\nconst vec2 PI_16_3_FP64 = vec2(0.5890486240386963, -1.4906100798128818e-9);\nconst vec2 PI_180_FP64 = vec2(0.01745329238474369, 1.3519960498364902e-10);\n\nconst vec2 SIN_TABLE_0_FP64 = vec2(0.19509032368659973, -1.6704714833615242e-9);\nconst vec2 SIN_TABLE_1_FP64 = vec2(0.3826834261417389, 6.22335089017767e-9);\nconst vec2 SIN_TABLE_2_FP64 = vec2(0.5555702447891235, -1.1769521357507529e-8);\nconst vec2 SIN_TABLE_3_FP64 = vec2(0.7071067690849304, 1.2101617041793133e-8);\n\nconst vec2 COS_TABLE_0_FP64 = vec2(0.9807852506637573, 2.9739473106360492e-8);\nconst vec2 COS_TABLE_1_FP64 = vec2(0.9238795042037964, 2.8307490351764386e-8);\nconst vec2 COS_TABLE_2_FP64 = vec2(0.8314695954322815, 1.6870263741530778e-8);\nconst vec2 COS_TABLE_3_FP64 = vec2(0.7071067690849304, 1.2101617152815436e-8);\n\nconst vec2 INVERSE_FACTORIAL_3_FP64 = vec2(1.666666716337204e-01, -4.967053879312289e-09);\nconst vec2 INVERSE_FACTORIAL_4_FP64 = vec2(4.16666679084301e-02, -1.2417634698280722e-09);\nconst vec2 INVERSE_FACTORIAL_5_FP64 = vec2(8.333333767950535e-03, -4.34617203337595e-10);\nconst vec2 INVERSE_FACTORIAL_6_FP64 = vec2(1.3888889225199819e-03, -3.3631094437103215e-11);\nconst vec2 INVERSE_FACTORIAL_7_FP64 = vec2(1.9841270113829523e-04,  -2.725596874933456e-12);\nconst vec2 INVERSE_FACTORIAL_8_FP64 = vec2(2.4801587642286904e-05, -3.406996025904184e-13);\nconst vec2 INVERSE_FACTORIAL_9_FP64 = vec2(2.75573188446287533e-06, 3.7935713937038186e-14);\nconst vec2 INVERSE_FACTORIAL_10_FP64 = vec2(2.755731998149713e-07, -7.575112367869873e-15);\n\nfloat nint(float d) {\n    if (d == floor(d)) return d;\n    return floor(d + 0.5);\n}\n\nvec2 nint_fp64(vec2 a) {\n    float hi = nint(a.x);\n    float lo;\n    vec2 tmp;\n    if (hi == a.x) {\n        lo = nint(a.y);\n        tmp = quickTwoSum(hi, lo);\n    } else {\n        lo = 0.0;\n        if (abs(hi - a.x) == 0.5 && a.y < 0.0) {\n            hi -= 1.0;\n        }\n        tmp = vec2(hi, lo);\n    }\n    return tmp;\n}\n\nvec2 exp_fp64(vec2 a) {\n\n  const int k_power = 4;\n  const float k = 16.0;\n\n  const float inv_k = 1.0 / k;\n\n  if (a.x <= -88.0) return vec2(0.0, 0.0);\n  if (a.x >= 88.0) return vec2(1.0 / 0.0, 1.0 / 0.0);\n  if (a.x == 0.0 && a.y == 0.0) return vec2(1.0, 0.0);\n  if (a.x == 1.0 && a.y == 0.0) return E_FP64;\n\n  float m = floor(a.x / LOG2_FP64.x + 0.5);\n  vec2 r = sub_fp64(a, mul_fp64(LOG2_FP64, vec2(m, 0.0))) * inv_k;\n  vec2 s, t, p;\n\n  p = mul_fp64(r, r);\n  s = sum_fp64(r, p * 0.5);\n  p = mul_fp64(p, r);\n  t = mul_fp64(p, INVERSE_FACTORIAL_3_FP64);\n\n  s = sum_fp64(s, t);\n  p = mul_fp64(p, r);\n  t = mul_fp64(p, INVERSE_FACTORIAL_4_FP64);\n\n  s = sum_fp64(s, t);\n  p = mul_fp64(p, r);\n  t = mul_fp64(p, INVERSE_FACTORIAL_5_FP64);\n\n\n\n\n\n\n  s = sum_fp64(s, t);\n  for (int i = 0; i < k_power; i++) {\n    s = sum_fp64(s * 2.0, mul_fp64(s, s));\n  }\n\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n  s = sum_fp64(s, vec2(ONE, 0.0));\n#else\n  s = sum_fp64(s, vec2(1.0, 0.0));\n#endif\n\n  return s * pow(2.0, m);\n}\n\nvec2 log_fp64(vec2 a)\n{\n  if (a.x == 1.0 && a.y == 0.0) return vec2(0.0, 0.0);\n  if (a.x <= 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);\n  vec2 x = vec2(log(a.x), 0.0);\n  vec2 s;\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n  s = vec2(ONE, 0.0);\n#else\n  s = vec2(1.0, 0.0);\n#endif\n\n  x = sub_fp64(sum_fp64(x, mul_fp64(a, exp_fp64(-x))), s);\n  return x;\n}\n\nvec2 sin_taylor_fp64(vec2 a) {\n  vec2 r, s, t, x;\n\n  if (a.x == 0.0 && a.y == 0.0) {\n    return vec2(0.0, 0.0);\n  }\n\n  x = -mul_fp64(a, a);\n  s = a;\n  r = a;\n\n  r = mul_fp64(r, x);\n  t = mul_fp64(r, INVERSE_FACTORIAL_3_FP64);\n  s = sum_fp64(s, t);\n\n  r = mul_fp64(r, x);\n  t = mul_fp64(r, INVERSE_FACTORIAL_5_FP64);\n  s = sum_fp64(s, t);\n\n\n\n\n\n\n  return s;\n}\n\nvec2 cos_taylor_fp64(vec2 a) {\n  vec2 r, s, t, x;\n\n  if (a.x == 0.0 && a.y == 0.0) {\n    return vec2(1.0, 0.0);\n  }\n\n  x = -mul_fp64(a, a);\n  r = x;\n  s = sum_fp64(vec2(1.0, 0.0), r * 0.5);\n\n  r = mul_fp64(r, x);\n  t = mul_fp64(r, INVERSE_FACTORIAL_4_FP64);\n  s = sum_fp64(s, t);\n\n  r = mul_fp64(r, x);\n  t = mul_fp64(r, INVERSE_FACTORIAL_6_FP64);\n  s = sum_fp64(s, t);\n\n\n\n\n\n\n  return s;\n}\n\nvoid sincos_taylor_fp64(vec2 a, out vec2 sin_t, out vec2 cos_t) {\n  if (a.x == 0.0 && a.y == 0.0) {\n    sin_t = vec2(0.0, 0.0);\n    cos_t = vec2(1.0, 0.0);\n  }\n\n  sin_t = sin_taylor_fp64(a);\n  cos_t = sqrt_fp64(sub_fp64(vec2(1.0, 0.0), mul_fp64(sin_t, sin_t)));\n}\n\nvec2 sin_fp64(vec2 a) {\n    if (a.x == 0.0 && a.y == 0.0) {\n        return vec2(0.0, 0.0);\n    }\n    vec2 z = nint_fp64(div_fp64(a, TWO_PI_FP64));\n    vec2 r = sub_fp64(a, mul_fp64(TWO_PI_FP64, z));\n\n    vec2 t;\n    float q = floor(r.x / PI_2_FP64.x + 0.5);\n    int j = int(q);\n\n    if (j < -2 || j > 2) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    }\n\n    t = sub_fp64(r, mul_fp64(PI_2_FP64, vec2(q, 0.0)));\n\n    q = floor(t.x / PI_16_FP64.x + 0.5);\n    int k = int(q);\n\n    if (k == 0) {\n        if (j == 0) {\n            return sin_taylor_fp64(t);\n        } else if (j == 1) {\n            return cos_taylor_fp64(t);\n        } else if (j == -1) {\n            return -cos_taylor_fp64(t);\n        } else {\n            return -sin_taylor_fp64(t);\n        }\n    }\n\n    int abs_k = int(abs(float(k)));\n\n    if (abs_k > 4) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    } else {\n        t = sub_fp64(t, mul_fp64(PI_16_FP64, vec2(q, 0.0)));\n    }\n\n    vec2 u = vec2(0.0, 0.0);\n    vec2 v = vec2(0.0, 0.0);\n\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n    if (abs(float(abs_k) - 1.0) < 0.5) {\n        u = COS_TABLE_0_FP64;\n        v = SIN_TABLE_0_FP64;\n    } else if (abs(float(abs_k) - 2.0) < 0.5) {\n        u = COS_TABLE_1_FP64;\n        v = SIN_TABLE_1_FP64;\n    } else if (abs(float(abs_k) - 3.0) < 0.5) {\n        u = COS_TABLE_2_FP64;\n        v = SIN_TABLE_2_FP64;\n    } else if (abs(float(abs_k) - 4.0) < 0.5) {\n        u = COS_TABLE_3_FP64;\n        v = SIN_TABLE_3_FP64;\n    }\n#else\n    if (abs_k == 1) {\n        u = COS_TABLE_0_FP64;\n        v = SIN_TABLE_0_FP64;\n    } else if (abs_k == 2) {\n        u = COS_TABLE_1_FP64;\n        v = SIN_TABLE_1_FP64;\n    } else if (abs_k == 3) {\n        u = COS_TABLE_2_FP64;\n        v = SIN_TABLE_2_FP64;\n    } else if (abs_k == 4) {\n        u = COS_TABLE_3_FP64;\n        v = SIN_TABLE_3_FP64;\n    }\n#endif\n\n    vec2 sin_t, cos_t;\n    sincos_taylor_fp64(t, sin_t, cos_t);\n\n\n\n    vec2 result = vec2(0.0, 0.0);\n    if (j == 0) {\n        if (k > 0) {\n            result = sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        } else {\n            result = sub_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        }\n    } else if (j == 1) {\n        if (k > 0) {\n            result = sub_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        } else {\n            result = sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        }\n    } else if (j == -1) {\n        if (k > 0) {\n            result = sub_fp64(mul_fp64(v, sin_t), mul_fp64(u, cos_t));\n        } else {\n            result = -sum_fp64(mul_fp64(v, sin_t), mul_fp64(u, cos_t));\n        }\n    } else {\n        if (k > 0) {\n            result = -sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        } else {\n            result = sub_fp64(mul_fp64(v, cos_t), mul_fp64(u, sin_t));\n        }\n    }\n\n    return result;\n}\n\nvec2 cos_fp64(vec2 a) {\n    if (a.x == 0.0 && a.y == 0.0) {\n        return vec2(1.0, 0.0);\n    }\n    vec2 z = nint_fp64(div_fp64(a, TWO_PI_FP64));\n    vec2 r = sub_fp64(a, mul_fp64(TWO_PI_FP64, z));\n\n    vec2 t;\n    float q = floor(r.x / PI_2_FP64.x + 0.5);\n    int j = int(q);\n\n    if (j < -2 || j > 2) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    }\n\n    t = sub_fp64(r, mul_fp64(PI_2_FP64, vec2(q, 0.0)));\n\n    q = floor(t.x / PI_16_FP64.x + 0.5);\n    int k = int(q);\n\n    if (k == 0) {\n        if (j == 0) {\n            return cos_taylor_fp64(t);\n        } else if (j == 1) {\n            return -sin_taylor_fp64(t);\n        } else if (j == -1) {\n            return sin_taylor_fp64(t);\n        } else {\n            return -cos_taylor_fp64(t);\n        }\n    }\n\n    int abs_k = int(abs(float(k)));\n\n    if (abs_k > 4) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    } else {\n        t = sub_fp64(t, mul_fp64(PI_16_FP64, vec2(q, 0.0)));\n    }\n\n    vec2 u = vec2(0.0, 0.0);\n    vec2 v = vec2(0.0, 0.0);\n\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n    if (abs(float(abs_k) - 1.0) < 0.5) {\n        u = COS_TABLE_0_FP64;\n        v = SIN_TABLE_0_FP64;\n    } else if (abs(float(abs_k) - 2.0) < 0.5) {\n        u = COS_TABLE_1_FP64;\n        v = SIN_TABLE_1_FP64;\n    } else if (abs(float(abs_k) - 3.0) < 0.5) {\n        u = COS_TABLE_2_FP64;\n        v = SIN_TABLE_2_FP64;\n    } else if (abs(float(abs_k) - 4.0) < 0.5) {\n        u = COS_TABLE_3_FP64;\n        v = SIN_TABLE_3_FP64;\n    }\n#else\n    if (abs_k == 1) {\n        u = COS_TABLE_0_FP64;\n        v = SIN_TABLE_0_FP64;\n    } else if (abs_k == 2) {\n        u = COS_TABLE_1_FP64;\n        v = SIN_TABLE_1_FP64;\n    } else if (abs_k == 3) {\n        u = COS_TABLE_2_FP64;\n        v = SIN_TABLE_2_FP64;\n    } else if (abs_k == 4) {\n        u = COS_TABLE_3_FP64;\n        v = SIN_TABLE_3_FP64;\n    }\n#endif\n\n    vec2 sin_t, cos_t;\n    sincos_taylor_fp64(t, sin_t, cos_t);\n\n    vec2 result = vec2(0.0, 0.0);\n    if (j == 0) {\n        if (k > 0) {\n            result = sub_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        } else {\n            result = sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        }\n    } else if (j == 1) {\n        if (k > 0) {\n            result = -sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        } else {\n            result = sub_fp64(mul_fp64(v, cos_t), mul_fp64(u, sin_t));\n        }\n    } else if (j == -1) {\n        if (k > 0) {\n            result = sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        } else {\n            result = sub_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        }\n    } else {\n        if (k > 0) {\n            result = sub_fp64(mul_fp64(v, sin_t), mul_fp64(u, cos_t));\n        } else {\n            result = -sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        }\n    }\n\n    return result;\n}\n\nvec2 tan_fp64(vec2 a) {\n    vec2 sin_a;\n    vec2 cos_a;\n\n    if (a.x == 0.0 && a.y == 0.0) {\n        return vec2(0.0, 0.0);\n    }\n    vec2 z = nint_fp64(div_fp64(a, TWO_PI_FP64));\n    vec2 r = sub_fp64(a, mul_fp64(TWO_PI_FP64, z));\n\n    vec2 t;\n    float q = floor(r.x / PI_2_FP64.x + 0.5);\n    int j = int(q);\n\n\n    if (j < -2 || j > 2) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    }\n\n    t = sub_fp64(r, mul_fp64(PI_2_FP64, vec2(q, 0.0)));\n\n    q = floor(t.x / PI_16_FP64.x + 0.5);\n    int k = int(q);\n    int abs_k = int(abs(float(k)));\n\n    if (abs_k > 4) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    } else {\n        t = sub_fp64(t, mul_fp64(PI_16_FP64, vec2(q, 0.0)));\n    }\n\n\n    vec2 u = vec2(0.0, 0.0);\n    vec2 v = vec2(0.0, 0.0);\n\n    vec2 sin_t, cos_t;\n    vec2 s, c;\n    sincos_taylor_fp64(t, sin_t, cos_t);\n\n    if (k == 0) {\n        s = sin_t;\n        c = cos_t;\n    } else {\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n        if (abs(float(abs_k) - 1.0) < 0.5) {\n            u = COS_TABLE_0_FP64;\n            v = SIN_TABLE_0_FP64;\n        } else if (abs(float(abs_k) - 2.0) < 0.5) {\n            u = COS_TABLE_1_FP64;\n            v = SIN_TABLE_1_FP64;\n        } else if (abs(float(abs_k) - 3.0) < 0.5) {\n            u = COS_TABLE_2_FP64;\n            v = SIN_TABLE_2_FP64;\n        } else if (abs(float(abs_k) - 4.0) < 0.5) {\n            u = COS_TABLE_3_FP64;\n            v = SIN_TABLE_3_FP64;\n        }\n#else\n        if (abs_k == 1) {\n            u = COS_TABLE_0_FP64;\n            v = SIN_TABLE_0_FP64;\n        } else if (abs_k == 2) {\n            u = COS_TABLE_1_FP64;\n            v = SIN_TABLE_1_FP64;\n        } else if (abs_k == 3) {\n            u = COS_TABLE_2_FP64;\n            v = SIN_TABLE_2_FP64;\n        } else if (abs_k == 4) {\n            u = COS_TABLE_3_FP64;\n            v = SIN_TABLE_3_FP64;\n        }\n#endif\n        if (k > 0) {\n            s = sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n            c = sub_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        } else {\n            s = sub_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n            c = sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        }\n    }\n\n    if (j == 0) {\n        sin_a = s;\n        cos_a = c;\n    } else if (j == 1) {\n        sin_a = c;\n        cos_a = -s;\n    } else if (j == -1) {\n        sin_a = -c;\n        cos_a = s;\n    } else {\n        sin_a = -s;\n        cos_a = -c;\n    }\n    return div_fp64(sin_a, cos_a);\n}\n\nvec2 radians_fp64(vec2 degree) {\n  return mul_fp64(degree, PI_180_FP64);\n}\n\nvec2 mix_fp64(vec2 a, vec2 b, float x) {\n  vec2 range = sub_fp64(b, a);\n  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));\n}\n\nvoid vec2_sum_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {\n    out_val[0] = sum_fp64(a[0], b[0]);\n    out_val[1] = sum_fp64(a[1], b[1]);\n}\n\nvoid vec2_sub_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {\n    out_val[0] = sub_fp64(a[0], b[0]);\n    out_val[1] = sub_fp64(a[1], b[1]);\n}\n\nvoid vec2_mul_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {\n    out_val[0] = mul_fp64(a[0], b[0]);\n    out_val[1] = mul_fp64(a[1], b[1]);\n}\n\nvoid vec2_div_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {\n    out_val[0] = div_fp64(a[0], b[0]);\n    out_val[1] = div_fp64(a[1], b[1]);\n}\n\nvoid vec2_mix_fp64(vec2 x[2], vec2 y[2], float a, out vec2 out_val[2]) {\n  vec2 range[2];\n  vec2_sub_fp64(y, x, range);\n  vec2 portion[2];\n  portion[0] = range[0] * a;\n  portion[1] = range[1] * a;\n  vec2_sum_fp64(x, portion, out_val);\n}\n\nvec2 vec2_length_fp64(vec2 x[2]) {\n  return sqrt_fp64(sum_fp64(mul_fp64(x[0], x[0]), mul_fp64(x[1], x[1])));\n}\n\nvoid vec2_normalize_fp64(vec2 x[2], out vec2 out_val[2]) {\n  vec2 length = vec2_length_fp64(x);\n  vec2 length_vec2[2];\n  length_vec2[0] = length;\n  length_vec2[1] = length;\n\n  vec2_div_fp64(x, length_vec2, out_val);\n}\n\nvec2 vec2_distance_fp64(vec2 x[2], vec2 y[2]) {\n  vec2 diff[2];\n  vec2_sub_fp64(x, y, diff);\n  return vec2_length_fp64(diff);\n}\n\nvec2 vec2_dot_fp64(vec2 a[2], vec2 b[2]) {\n  vec2 v[2];\n\n  v[0] = mul_fp64(a[0], b[0]);\n  v[1] = mul_fp64(a[1], b[1]);\n\n  return sum_fp64(v[0], v[1]);\n}\nvoid vec3_sub_fp64(vec2 a[3], vec2 b[3], out vec2 out_val[3]) {\n  for (int i = 0; i < 3; i++) {\n    out_val[i] = sum_fp64(a[i], b[i]);\n  }\n}\n\nvoid vec3_sum_fp64(vec2 a[3], vec2 b[3], out vec2 out_val[3]) {\n  for (int i = 0; i < 3; i++) {\n    out_val[i] = sum_fp64(a[i], b[i]);\n  }\n}\n\nvec2 vec3_length_fp64(vec2 x[3]) {\n  return sqrt_fp64(sum_fp64(sum_fp64(mul_fp64(x[0], x[0]), mul_fp64(x[1], x[1])),\n    mul_fp64(x[2], x[2])));\n}\n\nvec2 vec3_distance_fp64(vec2 x[3], vec2 y[3]) {\n  vec2 diff[3];\n  vec3_sub_fp64(x, y, diff);\n  return vec3_length_fp64(diff);\n}\nvoid vec4_fp64(vec4 a, out vec2 out_val[4]) {\n  out_val[0].x = a[0];\n  out_val[0].y = 0.0;\n\n  out_val[1].x = a[1];\n  out_val[1].y = 0.0;\n\n  out_val[2].x = a[2];\n  out_val[2].y = 0.0;\n\n  out_val[3].x = a[3];\n  out_val[3].y = 0.0;\n}\n\nvoid vec4_scalar_mul_fp64(vec2 a[4], vec2 b, out vec2 out_val[4]) {\n  out_val[0] = mul_fp64(a[0], b);\n  out_val[1] = mul_fp64(a[1], b);\n  out_val[2] = mul_fp64(a[2], b);\n  out_val[3] = mul_fp64(a[3], b);\n}\n\nvoid vec4_sum_fp64(vec2 a[4], vec2 b[4], out vec2 out_val[4]) {\n  for (int i = 0; i < 4; i++) {\n    out_val[i] = sum_fp64(a[i], b[i]);\n  }\n}\n\nvoid vec4_dot_fp64(vec2 a[4], vec2 b[4], out vec2 out_val) {\n  vec2 v[4];\n\n  v[0] = mul_fp64(a[0], b[0]);\n  v[1] = mul_fp64(a[1], b[1]);\n  v[2] = mul_fp64(a[2], b[2]);\n  v[3] = mul_fp64(a[3], b[3]);\n\n  out_val = sum_fp64(sum_fp64(v[0], v[1]), sum_fp64(v[2], v[3]));\n}\n\nvoid mat4_vec4_mul_fp64(vec2 b[16], vec2 a[4], out vec2 out_val[4]) {\n  vec2 tmp[4];\n\n  for (int i = 0; i < 4; i++)\n  {\n    for (int j = 0; j < 4; j++)\n    {\n      tmp[j] = b[j + i * 4];\n    }\n    vec4_dot_fp64(a, tmp, out_val[i]);\n  }\n}\n");
//# sourceMappingURL=fp64-functions.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@luma.gl/shadertools/dist/esm/modules/fp64/fp64.js



const CONST_UNIFORMS = {
  ONE: 1.0
};


function getUniforms() {
  return CONST_UNIFORMS;
}

const fp64arithmetic = {
  name: 'fp64-arithmetic',
  vs: fp64_arithmetic_glsl,
  fs: null,
  getUniforms,
  fp64ify: fp64ify,
  fp64LowPart: fp64LowPart,
  fp64ifyMatrix4: fp64ifyMatrix4
};
const fp64 = {
  name: 'fp64',
  vs: fp64_functions_glsl,
  fs: null,
  dependencies: [fp64arithmetic],
  fp64ify: fp64ify,
  fp64LowPart: fp64LowPart,
  fp64ifyMatrix4: fp64ifyMatrix4
};
//# sourceMappingURL=fp64.js.map

/***/ })

}]);