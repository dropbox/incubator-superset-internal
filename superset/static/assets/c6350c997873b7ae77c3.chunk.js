"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[4486],{

/***/ 54486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Grid),
  "getLayer": () => (/* binding */ getLayer)
});

// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/composite-layer.js
var composite_layer = __webpack_require__(78918);
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator.js + 6 modules
var gpu_grid_aggregator = __webpack_require__(78651);
// EXTERNAL MODULE: ./node_modules/@luma.gl/webgl/dist/esm/classes/buffer.js
var buffer = __webpack_require__(53478);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/log.js
var log = __webpack_require__(80744);
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/aggregation-operation-utils.js
var aggregation_operation_utils = __webpack_require__(15614);
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/color-utils.js
var color_utils = __webpack_require__(4516);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/layer.js + 11 modules
var lib_layer = __webpack_require__(95772);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/project32/project32.js
var project32 = __webpack_require__(93844);
// EXTERNAL MODULE: ./node_modules/@luma.gl/shadertools/dist/esm/modules/phong-lighting/phong-lighting.js + 3 modules
var phong_lighting = __webpack_require__(95644);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/picking/picking.js + 1 modules
var picking = __webpack_require__(51331);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/math-utils.js
var math_utils = __webpack_require__(75126);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/lib/model.js + 9 modules
var model = __webpack_require__(281);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/geometry/geometry.js
var geometry = __webpack_require__(53982);
// EXTERNAL MODULE: ./node_modules/@luma.gl/webgl/dist/esm/utils/utils.js
var utils = __webpack_require__(74538);
;// CONCATENATED MODULE: ./node_modules/@luma.gl/engine/dist/esm/geometries/cube-geometry.js


const CUBE_INDICES = new Uint16Array([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]);
const CUBE_POSITIONS = new Float32Array([-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1]);
const CUBE_NORMALS = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0]);
const CUBE_TEX_COORDS = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1]);
const ATTRIBUTES = {
  POSITION: {
    size: 3,
    value: new Float32Array(CUBE_POSITIONS)
  },
  NORMAL: {
    size: 3,
    value: new Float32Array(CUBE_NORMALS)
  },
  TEXCOORD_0: {
    size: 2,
    value: new Float32Array(CUBE_TEX_COORDS)
  }
};
class CubeGeometry extends geometry/* default */.Z {
  constructor(props = {}) {
    const {
      id = (0,utils/* uid */.hQ)('cube-geometry')
    } = props;
    super({ ...props,
      id,
      indices: {
        size: 1,
        value: new Uint16Array(CUBE_INDICES)
      },
      attributes: { ...ATTRIBUTES,
        ...props.attributes
      }
    });
  }

}
//# sourceMappingURL=cube-geometry.js.map
// EXTERNAL MODULE: ./node_modules/@luma.gl/shadertools/dist/esm/modules/fp64/fp64.js + 3 modules
var fp64 = __webpack_require__(41083);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-cell-layer-vertex.glsl.js
/* harmony default export */ const gpu_grid_cell_layer_vertex_glsl = ("#version 300 es\n#define SHADER_NAME gpu-grid-cell-layer-vertex-shader\n#define RANGE_COUNT 6\n\nin vec3 positions;\nin vec3 normals;\n\nin vec4 colors;\nin vec4 elevations;\nin vec3 instancePickingColors;\nuniform vec2 offset;\nuniform bool extruded;\nuniform float cellSize;\nuniform float coverage;\nuniform float opacity;\nuniform float elevationScale;\n\nuniform ivec2 gridSize;\nuniform vec2 gridOrigin;\nuniform vec2 gridOriginLow;\nuniform vec2 gridOffset;\nuniform vec2 gridOffsetLow;\nuniform vec4 colorRange[RANGE_COUNT];\nuniform vec2 elevationRange;\nuniform vec2 colorDomain;\nuniform bool colorDomainValid;\nuniform vec2 elevationDomain;\nuniform bool elevationDomainValid;\n\nlayout(std140) uniform;\nuniform ColorData\n{\n  vec4 maxMinCount;\n} colorData;\nuniform ElevationData\n{\n  vec4 maxMinCount;\n} elevationData;\n\n#define EPSILON 0.00001\nout vec4 vColor;\n\nvec4 quantizeScale(vec2 domain, vec4 range[RANGE_COUNT], float value) {\n  vec4 outColor = vec4(0., 0., 0., 0.);\n  if (value >= (domain.x - EPSILON) && value <= (domain.y + EPSILON)) {\n    float domainRange = domain.y - domain.x;\n    if (domainRange <= 0.) {\n      outColor = colorRange[0];\n    } else {\n      float rangeCount = float(RANGE_COUNT);\n      float rangeStep = domainRange / rangeCount;\n      float idx = floor((value - domain.x) / rangeStep);\n      idx = clamp(idx, 0., rangeCount - 1.);\n      int intIdx = int(idx);\n      outColor = colorRange[intIdx];\n    }\n  }\n  return outColor;\n}\n\nfloat linearScale(vec2 domain, vec2 range, float value) {\n  if (value >= (domain.x - EPSILON) && value <= (domain.y + EPSILON)) {\n    return ((value - domain.x) / (domain.y - domain.x)) * (range.y - range.x) + range.x;\n  }\n  return -1.;\n}\n\nvoid main(void) {\n\n  vec2 clrDomain = colorDomainValid ? colorDomain : vec2(colorData.maxMinCount.a, colorData.maxMinCount.r);\n  vec4 color = quantizeScale(clrDomain, colorRange, colors.r);\n\n  float elevation = 0.0;\n\n  if (extruded) {\n    vec2 elvDomain = elevationDomainValid ? elevationDomain : vec2(elevationData.maxMinCount.a, elevationData.maxMinCount.r);\n    elevation = linearScale(elvDomain, elevationRange, elevations.r);\n    elevation = elevation  * (positions.z + 1.0) / 2.0 * elevationScale;\n  }\n  float shouldRender = float(color.r > 0.0 && elevations.r >= 0.0);\n  float dotRadius = cellSize / 2. * coverage * shouldRender;\n\n  int yIndex = (gl_InstanceID / gridSize[0]);\n  int xIndex = gl_InstanceID - (yIndex * gridSize[0]);\n\n  vec2 instancePositionXFP64 = mul_fp64(vec2(gridOffset[0], gridOffsetLow[0]), vec2(float(xIndex), 0.));\n  instancePositionXFP64 = sum_fp64(instancePositionXFP64, vec2(gridOrigin[0], gridOriginLow[0]));\n  vec2 instancePositionYFP64 = mul_fp64(vec2(gridOffset[1], gridOffsetLow[1]), vec2(float(yIndex), 0.));\n  instancePositionYFP64 = sum_fp64(instancePositionYFP64, vec2(gridOrigin[1], gridOriginLow[1]));\n\n  vec3 centroidPosition = vec3(instancePositionXFP64[0], instancePositionYFP64[0], elevation);\n  vec3 centroidPosition64Low = vec3(instancePositionXFP64[1], instancePositionYFP64[1], 0.0);\n  vec3 pos = vec3(project_size(positions.xy + offset) * dotRadius, 0.);\n  picking_setPickingColor(instancePickingColors);\n\n  vec4 position_commonspace;\n  gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64Low, pos, position_commonspace);\n\n  vec3 normals_commonspace = project_normal(normals);\n\n   if (extruded) {\n    vec3 lightColor = lighting_getLightColor(color.rgb, project_uCameraPosition, position_commonspace.xyz, normals_commonspace);\n    vColor = vec4(lightColor, color.a * opacity) / 255.;\n  } else {\n    vColor = vec4(color.rgb, color.a * opacity) / 255.;\n  }\n}\n");
//# sourceMappingURL=gpu-grid-cell-layer-vertex.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-cell-layer-fragment.glsl.js
/* harmony default export */ const gpu_grid_cell_layer_fragment_glsl = ("#version 300 es\n#define SHADER_NAME gpu-grid-cell-layer-fragment-shader\n\nprecision highp float;\n\nin vec4 vColor;\n\nout vec4 fragColor;\n\nvoid main(void) {\n  fragColor = vColor;\n  fragColor = picking_filterColor(fragColor);\n}\n");
//# sourceMappingURL=gpu-grid-cell-layer-fragment.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-cell-layer.js






const COLOR_DATA_UBO_INDEX = 0;
const ELEVATION_DATA_UBO_INDEX = 1;
const defaultProps = {
  colorDomain: null,
  colorRange: color_utils/* defaultColorRange */.K,
  elevationDomain: null,
  elevationRange: [0, 1000],
  elevationScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  gridSize: {
    type: 'array',
    min: 0,
    value: [1, 1]
  },
  gridOrigin: {
    type: 'array',
    min: 0,
    value: [0, 0]
  },
  gridOffset: {
    type: 'array',
    min: 0,
    value: [0, 0]
  },
  cellSize: {
    type: 'number',
    min: 0,
    max: 1000,
    value: 1000
  },
  offset: {
    type: 'array',
    min: 0,
    value: [1, 1]
  },
  coverage: {
    type: 'number',
    min: 0,
    max: 1,
    value: 1
  },
  extruded: true,
  material: true
};
class GPUGridCellLayer extends lib_layer/* default */.Z {
  getShaders() {
    return super.getShaders({
      vs: gpu_grid_cell_layer_vertex_glsl,
      fs: gpu_grid_cell_layer_fragment_glsl,
      modules: [project32/* default */.Z, phong_lighting/* gouraudLighting */.N, picking/* default */.Z, fp64/* fp64arithmetic */.n2]
    });
  }

  initializeState() {
    const {
      gl
    } = this.context;
    const attributeManager = this.getAttributeManager();
    attributeManager.addInstanced({
      colors: {
        size: 4,
        noAlloc: true
      },
      elevations: {
        size: 4,
        noAlloc: true
      }
    });

    const model = this._getModel(gl);

    this._setupUniformBuffer(model);

    this.setState({
      model
    });
  }

  _getModel(gl) {
    return new model/* default */.Z(gl, { ...this.getShaders(),
      id: this.props.id,
      geometry: new CubeGeometry(),
      isInstanced: true
    });
  }

  draw({
    uniforms
  }) {
    const {
      cellSize,
      offset,
      extruded,
      elevationScale,
      coverage,
      gridSize,
      gridOrigin,
      gridOffset,
      elevationRange,
      colorMaxMinBuffer,
      elevationMaxMinBuffer
    } = this.props;
    const gridOriginLow = [(0,math_utils/* fp64LowPart */.Ks)(gridOrigin[0]), (0,math_utils/* fp64LowPart */.Ks)(gridOrigin[1])];
    const gridOffsetLow = [(0,math_utils/* fp64LowPart */.Ks)(gridOffset[0]), (0,math_utils/* fp64LowPart */.Ks)(gridOffset[1])];
    const domainUniforms = this.getDomainUniforms();
    const colorRange = (0,color_utils/* colorRangeToFlatArray */.P)(this.props.colorRange);
    this.bindUniformBuffers(colorMaxMinBuffer, elevationMaxMinBuffer);
    this.state.model.setUniforms(uniforms).setUniforms(domainUniforms).setUniforms({
      cellSize,
      offset,
      extruded,
      elevationScale,
      coverage,
      gridSize,
      gridOrigin,
      gridOriginLow,
      gridOffset,
      gridOffsetLow,
      colorRange,
      elevationRange
    }).draw();
    this.unbindUniformBuffers(colorMaxMinBuffer, elevationMaxMinBuffer);
  }

  bindUniformBuffers(colorMaxMinBuffer, elevationMaxMinBuffer) {
    colorMaxMinBuffer.bind({
      target: 35345,
      index: COLOR_DATA_UBO_INDEX
    });
    elevationMaxMinBuffer.bind({
      target: 35345,
      index: ELEVATION_DATA_UBO_INDEX
    });
  }

  unbindUniformBuffers(colorMaxMinBuffer, elevationMaxMinBuffer) {
    colorMaxMinBuffer.unbind({
      target: 35345,
      index: COLOR_DATA_UBO_INDEX
    });
    elevationMaxMinBuffer.unbind({
      target: 35345,
      index: ELEVATION_DATA_UBO_INDEX
    });
  }

  getDomainUniforms() {
    const {
      colorDomain,
      elevationDomain
    } = this.props;
    const domainUniforms = {};

    if (colorDomain !== null) {
      domainUniforms.colorDomainValid = true;
      domainUniforms.colorDomain = colorDomain;
    } else {
      domainUniforms.colorDomainValid = false;
    }

    if (elevationDomain !== null) {
      domainUniforms.elevationDomainValid = true;
      domainUniforms.elevationDomain = elevationDomain;
    } else {
      domainUniforms.elevationDomainValid = false;
    }

    return domainUniforms;
  }

  _setupUniformBuffer(model) {
    const gl = this.context.gl;
    const programHandle = model.program.handle;
    const colorIndex = gl.getUniformBlockIndex(programHandle, 'ColorData');
    const elevationIndex = gl.getUniformBlockIndex(programHandle, 'ElevationData');
    gl.uniformBlockBinding(programHandle, colorIndex, COLOR_DATA_UBO_INDEX);
    gl.uniformBlockBinding(programHandle, elevationIndex, ELEVATION_DATA_UBO_INDEX);
  }

}
GPUGridCellLayer.layerName = 'GPUGridCellLayer';
GPUGridCellLayer.defaultProps = defaultProps;
//# sourceMappingURL=gpu-grid-cell-layer.js.map
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/cpu-grid-layer/grid-aggregator.js
var grid_aggregator = __webpack_require__(19936);
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/grid-aggregation-layer.js
var grid_aggregation_layer = __webpack_require__(13208);
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/grid-aggregation-utils.js
var grid_aggregation_utils = __webpack_require__(70050);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-layer.js









const gpu_grid_layer_defaultProps = {
  colorDomain: null,
  colorRange: color_utils/* defaultColorRange */.K,
  getColorWeight: {
    type: 'accessor',
    value: 1
  },
  colorAggregation: 'SUM',
  elevationDomain: null,
  elevationRange: [0, 1000],
  getElevationWeight: {
    type: 'accessor',
    value: 1
  },
  elevationAggregation: 'SUM',
  elevationScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  cellSize: {
    type: 'number',
    min: 1,
    max: 1000,
    value: 1000
  },
  coverage: {
    type: 'number',
    min: 0,
    max: 1,
    value: 1
  },
  getPosition: {
    type: 'accessor',
    value: x => x.position
  },
  extruded: false,
  material: true
};
const DIMENSIONS = {
  data: {
    props: ['cellSize', 'colorAggregation', 'elevationAggregation']
  }
};
const POSITION_ATTRIBUTE_NAME = 'positions';
class GPUGridLayer extends grid_aggregation_layer/* default */.Z {
  initializeState() {
    const {
      gl
    } = this.context;
    const isSupported = gpu_grid_aggregator/* default.isSupported */.Z.isSupported(gl);

    if (!isSupported) {
      log/* default.error */.Z.error('GPUGridLayer is not supported on this browser, use GridLayer instead')();
    }

    super.initializeState({
      dimensions: DIMENSIONS
    });
    this.setState({
      gpuAggregation: true,
      projectPoints: false,
      isSupported,
      weights: {
        color: {
          needMin: true,
          needMax: true,
          combineMaxMin: true,
          maxMinBuffer: new buffer/* default */.Z(gl, {
            byteLength: 4 * 4,
            accessor: {
              size: 4,
              type: 5126,
              divisor: 1
            }
          })
        },
        elevation: {
          needMin: true,
          needMax: true,
          combineMaxMin: true,
          maxMinBuffer: new buffer/* default */.Z(gl, {
            byteLength: 4 * 4,
            accessor: {
              size: 4,
              type: 5126,
              divisor: 1
            }
          })
        }
      },
      positionAttributeName: 'positions'
    });
    const attributeManager = this.getAttributeManager();
    attributeManager.add({
      [POSITION_ATTRIBUTE_NAME]: {
        size: 3,
        accessor: 'getPosition',
        type: 5130,
        fp64: this.use64bitPositions()
      },
      color: {
        size: 3,
        accessor: 'getColorWeight'
      },
      elevation: {
        size: 3,
        accessor: 'getElevationWeight'
      }
    });
  }

  updateState(opts) {
    if (this.state.isSupported === false) {
      return;
    }

    super.updateState(opts);
    const {
      aggregationDirty
    } = this.state;

    if (aggregationDirty) {
      this.setState({
        gridHash: null
      });
    }
  }

  getHashKeyForIndex(index) {
    const {
      numRow,
      numCol,
      boundingBox,
      gridOffset
    } = this.state;
    const gridSize = [numCol, numRow];
    const gridOrigin = [boundingBox.xMin, boundingBox.yMin];
    const cellSize = [gridOffset.xOffset, gridOffset.yOffset];
    const yIndex = Math.floor(index / gridSize[0]);
    const xIndex = index - yIndex * gridSize[0];
    const latIdx = Math.floor((yIndex * cellSize[1] + gridOrigin[1] + 90 + cellSize[1] / 2) / cellSize[1]);
    const lonIdx = Math.floor((xIndex * cellSize[0] + gridOrigin[0] + 180 + cellSize[0] / 2) / cellSize[0]);
    return "".concat(latIdx, "-").concat(lonIdx);
  }

  getPositionForIndex(index) {
    const {
      numRow,
      numCol,
      boundingBox,
      gridOffset
    } = this.state;
    const gridSize = [numCol, numRow];
    const gridOrigin = [boundingBox.xMin, boundingBox.yMin];
    const cellSize = [gridOffset.xOffset, gridOffset.yOffset];
    const yIndex = Math.floor(index / gridSize[0]);
    const xIndex = index - yIndex * gridSize[0];
    const yPos = yIndex * cellSize[1] + gridOrigin[1];
    const xPos = xIndex * cellSize[0] + gridOrigin[0];
    return [xPos, yPos];
  }

  getPickingInfo({
    info,
    mode
  }) {
    const {
      index
    } = info;
    let object = null;

    if (index >= 0) {
      const {
        gpuGridAggregator
      } = this.state;
      const position = this.getPositionForIndex(index);
      const colorInfo = gpu_grid_aggregator/* default.getAggregationData */.Z.getAggregationData({
        pixelIndex: index,
        ...gpuGridAggregator.getData('color')
      });
      const elevationInfo = gpu_grid_aggregator/* default.getAggregationData */.Z.getAggregationData({
        pixelIndex: index,
        ...gpuGridAggregator.getData('elevation')
      });
      object = {
        colorValue: colorInfo.cellWeight,
        elevationValue: elevationInfo.cellWeight,
        count: colorInfo.cellCount || elevationInfo.cellCount,
        position,
        totalCount: colorInfo.totalCount || elevationInfo.totalCount
      };

      if (mode !== 'hover') {
        const {
          props
        } = this;
        let {
          gridHash
        } = this.state;

        if (!gridHash) {
          const {
            gridOffset,
            translation,
            boundingBox
          } = this.state;
          const {
            viewport
          } = this.context;
          const attributes = this.getAttributes();
          const cpuAggregation = (0,grid_aggregator/* pointToDensityGridDataCPU */.h)(props, {
            gridOffset,
            attributes,
            viewport,
            translation,
            boundingBox
          });
          gridHash = cpuAggregation.gridHash;
          this.setState({
            gridHash
          });
        }

        const key = this.getHashKeyForIndex(index);
        const cpuAggregationData = gridHash[key];
        Object.assign(object, cpuAggregationData);
      }
    }

    info.picked = Boolean(object);
    info.object = object;
    return info;
  }

  renderLayers() {
    if (!this.state.isSupported) {
      return null;
    }

    const {
      elevationScale,
      extruded,
      cellSize: cellSizeMeters,
      coverage,
      material,
      elevationRange,
      colorDomain,
      elevationDomain
    } = this.props;
    const {
      weights,
      numRow,
      numCol,
      gridOrigin,
      gridOffset
    } = this.state;
    const {
      color,
      elevation
    } = weights;
    const colorRange = (0,color_utils/* colorRangeToFlatArray */.P)(this.props.colorRange);
    const SubLayerClass = this.getSubLayerClass('gpu-grid-cell', GPUGridCellLayer);
    return new SubLayerClass({
      gridSize: [numCol, numRow],
      gridOrigin,
      gridOffset: [gridOffset.xOffset, gridOffset.yOffset],
      colorRange,
      elevationRange,
      colorDomain,
      elevationDomain,
      cellSize: cellSizeMeters,
      coverage,
      material,
      elevationScale,
      extruded
    }, this.getSubLayerProps({
      id: 'gpu-grid-cell'
    }), {
      data: {
        attributes: {
          colors: color.aggregationBuffer,
          elevations: elevation.aggregationBuffer
        }
      },
      colorMaxMinBuffer: color.maxMinBuffer,
      elevationMaxMinBuffer: elevation.maxMinBuffer,
      numInstances: numCol * numRow
    });
  }

  finalizeState() {
    const {
      color,
      elevation
    } = this.state.weights;
    [color, elevation].forEach(weight => {
      const {
        aggregationBuffer,
        maxMinBuffer
      } = weight;
      maxMinBuffer.delete();
      aggregationBuffer === null || aggregationBuffer === void 0 ? void 0 : aggregationBuffer.delete();
    });
    super.finalizeState();
  }

  updateAggregationState(opts) {
    const {
      props,
      oldProps
    } = opts;
    const {
      cellSize,
      coordinateSystem
    } = props;
    const {
      viewport
    } = this.context;
    const cellSizeChanged = oldProps.cellSize !== cellSize;
    const {
      dimensions
    } = this.state;
    const positionsChanged = this.isAttributeChanged(POSITION_ATTRIBUTE_NAME);
    const attributesChanged = positionsChanged || this.isAttributeChanged();
    let {
      boundingBox
    } = this.state;

    if (positionsChanged) {
      boundingBox = (0,grid_aggregation_utils/* getBoundingBox */.A5)(this.getAttributes(), this.getNumInstances());
      this.setState({
        boundingBox
      });
    }

    if (positionsChanged || cellSizeChanged) {
      const {
        gridOffset,
        translation,
        width,
        height,
        numCol,
        numRow
      } = (0,grid_aggregation_utils/* getGridParams */.PQ)(boundingBox, cellSize, viewport, coordinateSystem);
      this.allocateResources(numRow, numCol);
      this.setState({
        gridOffset,
        translation,
        gridOrigin: [-1 * translation[0], -1 * translation[1]],
        width,
        height,
        numCol,
        numRow
      });
    }

    const aggregationDataDirty = attributesChanged || this.isAggregationDirty(opts, {
      dimension: dimensions.data,
      compareAll: true
    });

    if (aggregationDataDirty) {
      this._updateAccessors(opts);
    }

    this.setState({
      aggregationDataDirty
    });
  }

  _updateAccessors(opts) {
    const {
      colorAggregation,
      elevationAggregation
    } = opts.props;
    const {
      color,
      elevation
    } = this.state.weights;
    color.operation = aggregation_operation_utils/* AGGREGATION_OPERATION */.KM[colorAggregation];
    elevation.operation = aggregation_operation_utils/* AGGREGATION_OPERATION */.KM[elevationAggregation];
  }

}
GPUGridLayer.layerName = 'GPUGridLayer';
GPUGridLayer.defaultProps = gpu_grid_layer_defaultProps;
//# sourceMappingURL=gpu-grid-layer.js.map
// EXTERNAL MODULE: ./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer.js + 3 modules
var column_layer = __webpack_require__(15103);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/column-layer/grid-cell-layer.js


const grid_cell_layer_defaultProps = {
  cellSize: {
    type: 'number',
    min: 0,
    value: 1000
  },
  offset: {
    type: 'array',
    min: 0,
    value: [1, 1]
  }
};
class GridCellLayer extends column_layer/* default */.Z {
  getGeometry(diskResolution) {
    return new CubeGeometry();
  }

  draw({
    uniforms
  }) {
    const {
      elevationScale,
      extruded,
      offset,
      coverage,
      cellSize,
      angle
    } = this.props;
    this.state.model.setUniforms(uniforms).setUniforms({
      radius: cellSize / 2,
      angle,
      offset,
      extruded,
      coverage,
      elevationScale,
      edgeDistance: 1,
      isWireframe: false
    }).draw();
  }

}
GridCellLayer.layerName = 'GridCellLayer';
GridCellLayer.defaultProps = grid_cell_layer_defaultProps;
//# sourceMappingURL=grid-cell-layer.js.map
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/cpu-aggregator.js
var cpu_aggregator = __webpack_require__(73728);
// EXTERNAL MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/aggregation-layer.js + 1 modules
var aggregation_layer = __webpack_require__(63295);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/cpu-grid-layer/cpu-grid-layer.js






function nop() {}

const cpu_grid_layer_defaultProps = {
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
    min: 0,
    max: 100,
    value: 0
  },
  upperPercentile: {
    type: 'number',
    min: 0,
    max: 100,
    value: 100
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
    min: 0,
    max: 100,
    value: 0
  },
  elevationUpperPercentile: {
    type: 'number',
    min: 0,
    max: 100,
    value: 100
  },
  elevationScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  elevationScaleType: 'linear',
  onSetElevationDomain: nop,
  gridAggregator: grid_aggregator/* pointToDensityGridDataCPU */.h,
  cellSize: {
    type: 'number',
    min: 0,
    max: 1000,
    value: 1000
  },
  coverage: {
    type: 'number',
    min: 0,
    max: 1,
    value: 1
  },
  getPosition: {
    type: 'accessor',
    value: x => x.position
  },
  extruded: false,
  material: true,
  _filterData: {
    type: 'function',
    value: null,
    optional: true
  }
};
class CPUGridLayer extends aggregation_layer/* default */.Z {
  initializeState() {
    const cpuAggregator = new cpu_aggregator/* default */.Z({
      getAggregator: props => props.gridAggregator,
      getCellSize: props => props.cellSize
    });
    this.state = {
      cpuAggregator,
      aggregatorState: cpuAggregator.state
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
    this.setState({
      aggregatorState: this.state.cpuAggregator.updateState(opts, {
        viewport: this.context.viewport,
        attributes: this.getAttributes(),
        numInstances: this.getNumInstances(opts.props)
      })
    });
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
      cellSize,
      coverage,
      material,
      transitions
    } = this.props;
    const {
      cpuAggregator
    } = this.state;
    const SubLayerClass = this.getSubLayerClass('grid-cell', GridCellLayer);

    const updateTriggers = this._getSublayerUpdateTriggers();

    return new SubLayerClass({
      cellSize,
      coverage,
      material,
      elevationScale,
      extruded,
      getFillColor: this._onGetSublayerColor.bind(this),
      getElevation: this._onGetSublayerElevation.bind(this),
      transitions: transitions && {
        getFillColor: transitions.getColorValue || transitions.getColorWeight,
        getElevation: transitions.getElevationValue || transitions.getElevationWeight
      }
    }, this.getSubLayerProps({
      id: 'grid-cell',
      updateTriggers
    }), {
      data: cpuAggregator.state.layerData.data
    });
  }

}
CPUGridLayer.layerName = 'CPUGridLayer';
CPUGridLayer.defaultProps = cpu_grid_layer_defaultProps;
//# sourceMappingURL=cpu-grid-layer.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/grid-layer/grid-layer.js




const grid_layer_defaultProps = { ...GPUGridLayer.defaultProps,
  ...CPUGridLayer.defaultProps,
  gpuAggregation: false
};
class GridLayer extends composite_layer/* default */.Z {
  initializeState() {
    this.state = {
      useGPUAggregation: true
    };
  }

  updateState({
    oldProps,
    props,
    changeFlags
  }) {
    const newState = {};
    newState.useGPUAggregation = this.canUseGPUAggregation(props);
    this.setState(newState);
  }

  renderLayers() {
    const {
      data,
      updateTriggers
    } = this.props;
    const id = this.state.useGPUAggregation ? 'GPU' : 'CPU';
    const LayerType = this.state.useGPUAggregation ? this.getSubLayerClass('GPU', GPUGridLayer) : this.getSubLayerClass('CPU', CPUGridLayer);
    return new LayerType(this.props, this.getSubLayerProps({
      id,
      updateTriggers
    }), {
      data
    });
  }

  canUseGPUAggregation(props) {
    const {
      gpuAggregation,
      lowerPercentile,
      upperPercentile,
      getColorValue,
      getElevationValue,
      colorScaleType
    } = props;

    if (!gpuAggregation) {
      return false;
    }

    if (!gpu_grid_aggregator/* default.isSupported */.Z.isSupported(this.context.gl)) {
      return false;
    }

    if (lowerPercentile !== 0 || upperPercentile !== 100) {
      return false;
    }

    if (getColorValue !== null || getElevationValue !== null) {
      return false;
    }

    if (colorScaleType === 'quantile' || colorScaleType === 'ordinal') {
      return false;
    }

    return true;
  }

}
GridLayer.layerName = 'GridLayer';
GridLayer.defaultProps = grid_layer_defaultProps;
//# sourceMappingURL=grid-layer.js.map
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
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Grid/Grid.js
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
    label: (0,TranslatorSingleton.t)('Longitude and Latitude') + ": ",
    value: o.coordinate[0] + ", " + o.coordinate[1]
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
  return new GridLayer(_extends({
    id: "grid-layer-" + fd.slice_id,
    data,
    pickable: true,
    cellSize: fd.grid_size,
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

/* harmony default export */ const Grid = ((0,factory/* createDeckGLComponent */.G)(getLayer, getPoints));

/***/ })

}]);