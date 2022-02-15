"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[666],{

/***/ 73728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CPUAggregator)
/* harmony export */ });
/* harmony import */ var _bin_sorter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98014);
/* harmony import */ var _scale_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25660);
/* harmony import */ var _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15614);




function nop() {}

const dimensionSteps = ['getBins', 'getDomain', 'getScaleFunc'];
const defaultDimensions = [{
  key: 'fillColor',
  accessor: 'getFillColor',
  pickingInfo: 'colorValue',
  getBins: {
    triggers: {
      value: {
        prop: 'getColorValue',
        updateTrigger: 'getColorValue'
      },
      weight: {
        prop: 'getColorWeight',
        updateTrigger: 'getColorWeight'
      },
      aggregation: {
        prop: 'colorAggregation'
      },
      filterData: {
        prop: '_filterData',
        updateTrigger: '_filterData'
      }
    }
  },
  getDomain: {
    triggers: {
      lowerPercentile: {
        prop: 'lowerPercentile'
      },
      upperPercentile: {
        prop: 'upperPercentile'
      },
      scaleType: {
        prop: 'colorScaleType'
      }
    }
  },
  getScaleFunc: {
    triggers: {
      domain: {
        prop: 'colorDomain'
      },
      range: {
        prop: 'colorRange'
      }
    },
    onSet: {
      props: 'onSetColorDomain'
    }
  },
  nullValue: [0, 0, 0, 0]
}, {
  key: 'elevation',
  accessor: 'getElevation',
  pickingInfo: 'elevationValue',
  getBins: {
    triggers: {
      value: {
        prop: 'getElevationValue',
        updateTrigger: 'getElevationValue'
      },
      weight: {
        prop: 'getElevationWeight',
        updateTrigger: 'getElevationWeight'
      },
      aggregation: {
        prop: 'elevationAggregation'
      },
      filterData: {
        prop: '_filterData',
        updateTrigger: '_filterData'
      }
    }
  },
  getDomain: {
    triggers: {
      lowerPercentile: {
        prop: 'elevationLowerPercentile'
      },
      upperPercentile: {
        prop: 'elevationUpperPercentile'
      },
      scaleType: {
        prop: 'elevationScaleType'
      }
    }
  },
  getScaleFunc: {
    triggers: {
      domain: {
        prop: 'elevationDomain'
      },
      range: {
        prop: 'elevationRange'
      }
    },
    onSet: {
      props: 'onSetElevationDomain'
    }
  },
  nullValue: -1
}];

const defaultGetCellSize = props => props.cellSize;

class CPUAggregator {
  constructor(opts) {
    this.state = {
      layerData: {},
      dimensions: {}
    };
    this.changeFlags = {};
    this.dimensionUpdaters = {};
    this._getCellSize = opts.getCellSize || defaultGetCellSize;
    this._getAggregator = opts.getAggregator;

    this._addDimension(opts.dimensions || defaultDimensions);
  }

  static defaultDimensions() {
    return defaultDimensions;
  }

  updateState(opts, aggregationParams) {
    const {
      oldProps,
      props,
      changeFlags
    } = opts;
    this.updateGetValueFuncs(oldProps, props, changeFlags);
    const reprojectNeeded = this.needsReProjectPoints(oldProps, props, changeFlags);
    let aggregationDirty = false;

    if (changeFlags.dataChanged || reprojectNeeded) {
      this.getAggregatedData(props, aggregationParams);
      aggregationDirty = true;
    } else {
      const dimensionChanges = this.getDimensionChanges(oldProps, props, changeFlags) || [];
      dimensionChanges.forEach(f => typeof f === 'function' && f());
      aggregationDirty = true;
    }

    this.setState({
      aggregationDirty
    });
    return this.state;
  }

  setState(updateObject) {
    this.state = { ...this.state,
      ...updateObject
    };
  }

  setDimensionState(key, updateObject) {
    this.setState({
      dimensions: { ...this.state.dimensions,
        [key]: { ...this.state.dimensions[key],
          ...updateObject
        }
      }
    });
  }

  normalizeResult(result = {}) {
    if (result.hexagons) {
      return {
        data: result.hexagons,
        ...result
      };
    } else if (result.layerData) {
      return {
        data: result.layerData,
        ...result
      };
    }

    return result;
  }

  getAggregatedData(props, aggregationParams) {
    const aggregator = this._getAggregator(props);

    const result = aggregator(props, aggregationParams);
    this.setState({
      layerData: this.normalizeResult(result)
    });
    this.changeFlags = {
      layerData: true
    };
    this.getSortedBins(props);
  }

  updateGetValueFuncs(oldProps, props, changeFlags) {
    for (const key in this.dimensionUpdaters) {
      const {
        value,
        weight,
        aggregation
      } = this.dimensionUpdaters[key].getBins.triggers;
      let getValue = props[value.prop];
      const getValueChanged = this.needUpdateDimensionStep(this.dimensionUpdaters[key].getBins, oldProps, props, changeFlags);

      if (getValueChanged) {
        if (getValue) {
          getValue = (0,_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_0__/* .wrapGetValueFunc */ .q5)(getValue, {
            data: props.data
          });
        } else {
          getValue = (0,_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_0__/* .getValueFunc */ ._D)(props[aggregation.prop], props[weight.prop], {
            data: props.data
          });
        }
      }

      if (getValue) {
        this.setDimensionState(key, {
          getValue
        });
      }
    }
  }

  needsReProjectPoints(oldProps, props, changeFlags) {
    return this._getCellSize(oldProps) !== this._getCellSize(props) || this._getAggregator(oldProps) !== this._getAggregator(props) || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPosition);
  }

  addDimension(dimensions) {
    this._addDimension(dimensions);
  }

  _addDimension(dimensions = []) {
    dimensions.forEach(dimension => {
      const {
        key
      } = dimension;
      this.dimensionUpdaters[key] = this.getDimensionUpdaters(dimension);
      this.state.dimensions[key] = {
        getValue: null,
        domain: null,
        sortedBins: null,
        scaleFunc: nop
      };
    });
  }

  getDimensionUpdaters({
    key,
    accessor,
    pickingInfo,
    getBins,
    getDomain,
    getScaleFunc,
    nullValue
  }) {
    return {
      key,
      accessor,
      pickingInfo,
      getBins: {
        updater: this.getDimensionSortedBins,
        ...getBins
      },
      getDomain: {
        updater: this.getDimensionValueDomain,
        ...getDomain
      },
      getScaleFunc: {
        updater: this.getDimensionScale,
        ...getScaleFunc
      },
      attributeAccessor: this.getSubLayerDimensionAttribute(key, nullValue)
    };
  }

  needUpdateDimensionStep(dimensionStep, oldProps, props, changeFlags) {
    return Object.values(dimensionStep.triggers).some(item => {
      if (item.updateTrigger) {
        return changeFlags.dataChanged || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged[item.updateTrigger]);
      }

      return oldProps[item.prop] !== props[item.prop];
    });
  }

  getDimensionChanges(oldProps, props, changeFlags) {
    const updaters = [];

    for (const key in this.dimensionUpdaters) {
      const needUpdate = dimensionSteps.find(step => this.needUpdateDimensionStep(this.dimensionUpdaters[key][step], oldProps, props, changeFlags));

      if (needUpdate) {
        updaters.push(this.dimensionUpdaters[key][needUpdate].updater.bind(this, props, this.dimensionUpdaters[key]));
      }
    }

    return updaters.length ? updaters : null;
  }

  getUpdateTriggers(props) {
    const _updateTriggers = props.updateTriggers || {};

    const updateTriggers = {};

    for (const key in this.dimensionUpdaters) {
      const {
        accessor
      } = this.dimensionUpdaters[key];
      updateTriggers[accessor] = {};
      dimensionSteps.forEach(step => {
        Object.values(this.dimensionUpdaters[key][step].triggers).forEach(({
          prop,
          updateTrigger
        }) => {
          if (updateTrigger) {
            const fromProp = _updateTriggers[updateTrigger];

            if (typeof fromProp === 'object' && !Array.isArray(fromProp)) {
              Object.assign(updateTriggers[accessor], fromProp);
            } else if (fromProp !== undefined) {
              updateTriggers[accessor][prop] = fromProp;
            }
          } else {
            updateTriggers[accessor][prop] = props[prop];
          }
        });
      });
    }

    return updateTriggers;
  }

  getSortedBins(props) {
    for (const key in this.dimensionUpdaters) {
      this.getDimensionSortedBins(props, this.dimensionUpdaters[key]);
    }
  }

  getDimensionSortedBins(props, dimensionUpdater) {
    const {
      key
    } = dimensionUpdater;
    const {
      getValue
    } = this.state.dimensions[key];
    const sortedBins = new _bin_sorter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(this.state.layerData.data || [], {
      getValue,
      filterData: props._filterData
    });
    this.setDimensionState(key, {
      sortedBins
    });
    this.getDimensionValueDomain(props, dimensionUpdater);
  }

  getDimensionValueDomain(props, dimensionUpdater) {
    const {
      getDomain,
      key
    } = dimensionUpdater;
    const {
      triggers: {
        lowerPercentile,
        upperPercentile,
        scaleType
      }
    } = getDomain;
    const valueDomain = this.state.dimensions[key].sortedBins.getValueDomainByScale(props[scaleType.prop], [props[lowerPercentile.prop], props[upperPercentile.prop]]);
    this.setDimensionState(key, {
      valueDomain
    });
    this.getDimensionScale(props, dimensionUpdater);
  }

  getDimensionScale(props, dimensionUpdater) {
    const {
      key,
      getScaleFunc,
      getDomain
    } = dimensionUpdater;
    const {
      domain,
      range
    } = getScaleFunc.triggers;
    const {
      scaleType
    } = getDomain.triggers;
    const {
      onSet
    } = getScaleFunc;
    const dimensionRange = props[range.prop];
    const dimensionDomain = props[domain.prop] || this.state.dimensions[key].valueDomain;
    const getScaleFunction = (0,_scale_utils__WEBPACK_IMPORTED_MODULE_2__/* .getScaleFunctionByScaleType */ .ge)(scaleType && props[scaleType.prop]);
    const scaleFunc = getScaleFunction(dimensionDomain, dimensionRange);

    if (typeof onSet === 'object' && typeof props[onSet.props] === 'function') {
      props[onSet.props](scaleFunc.domain());
    }

    this.setDimensionState(key, {
      scaleFunc
    });
  }

  getSubLayerDimensionAttribute(key, nullValue) {
    return cell => {
      const {
        sortedBins,
        scaleFunc
      } = this.state.dimensions[key];
      const bin = sortedBins.binMap[cell.index];

      if (bin && bin.counts === 0) {
        return nullValue;
      }

      const cv = bin && bin.value;
      const domain = scaleFunc.domain();
      const isValueInDomain = cv >= domain[0] && cv <= domain[domain.length - 1];
      return isValueInDomain ? scaleFunc(cv) : nullValue;
    };
  }

  getSubLayerAccessors(props) {
    const accessors = {};

    for (const key in this.dimensionUpdaters) {
      const {
        accessor
      } = this.dimensionUpdaters[key];
      accessors[accessor] = this.getSubLayerDimensionAttribute(props, key);
    }

    return accessors;
  }

  getPickingInfo({
    info
  }) {
    const isPicked = info.picked && info.index > -1;
    let object = null;

    if (isPicked) {
      const cell = this.state.layerData.data[info.index];
      const binInfo = {};

      for (const key in this.dimensionUpdaters) {
        const {
          pickingInfo
        } = this.dimensionUpdaters[key];
        const {
          sortedBins
        } = this.state.dimensions[key];
        const value = sortedBins.binMap[cell.index] && sortedBins.binMap[cell.index].value;
        binInfo[pickingInfo] = value;
      }

      object = Object.assign(binInfo, cell, {
        points: cell.filteredPoints || cell.points
      });
    }

    info.picked = Boolean(object);
    info.object = object;
    return info;
  }

  getAccessor(dimensionKey) {
    if (!this.dimensionUpdaters.hasOwnProperty(dimensionKey)) {
      return nop;
    }

    return this.dimensionUpdaters[dimensionKey].attributeAccessor;
  }

}
//# sourceMappingURL=cpu-aggregator.js.map

/***/ }),

/***/ 15103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ColumnLayer)
});

// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/layer.js + 11 modules
var lib_layer = __webpack_require__(95772);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/project32/project32.js
var project32 = __webpack_require__(93844);
// EXTERNAL MODULE: ./node_modules/@luma.gl/shadertools/dist/esm/modules/phong-lighting/phong-lighting.js + 3 modules
var phong_lighting = __webpack_require__(95644);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/picking/picking.js + 1 modules
var picking = __webpack_require__(51331);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/lib/model.js + 9 modules
var model = __webpack_require__(281);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/log.js
var log = __webpack_require__(80744);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/geometry/geometry.js
var geometry = __webpack_require__(53982);
// EXTERNAL MODULE: ./node_modules/@luma.gl/webgl/dist/esm/utils/utils.js
var utils = __webpack_require__(74538);
// EXTERNAL MODULE: ./node_modules/@math.gl/polygon/dist/esm/index.js + 7 modules
var esm = __webpack_require__(1738);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/column-layer/column-geometry.js



class ColumnGeometry extends geometry/* default */.Z {
  constructor(props = {}) {
    const {
      id = (0,utils/* uid */.hQ)('column-geometry')
    } = props;
    const {
      indices,
      attributes
    } = tesselateColumn(props);
    super({ ...props,
      id,
      indices,
      attributes
    });
  }

}

function tesselateColumn(props) {
  const {
    radius,
    height = 1,
    nradial = 10
  } = props;
  let {
    vertices
  } = props;

  if (vertices) {
    log/* default.assert */.Z.assert(vertices.length >= nradial);
    vertices = vertices.flatMap(v => [v[0], v[1]]);
    (0,esm/* modifyPolygonWindingDirection */.Ny)(vertices, esm/* WINDING.COUNTER_CLOCKWISE */.wG.COUNTER_CLOCKWISE);
  }

  const isExtruded = height > 0;
  const vertsAroundEdge = nradial + 1;
  const numVertices = isExtruded ? vertsAroundEdge * 3 + 1 : nradial;
  const stepAngle = Math.PI * 2 / nradial;
  const indices = new Uint16Array(isExtruded ? nradial * 3 * 2 : 0);
  const positions = new Float32Array(numVertices * 3);
  const normals = new Float32Array(numVertices * 3);
  let i = 0;

  if (isExtruded) {
    for (let j = 0; j < vertsAroundEdge; j++) {
      const a = j * stepAngle;
      const vertexIndex = j % nradial;
      const sin = Math.sin(a);
      const cos = Math.cos(a);

      for (let k = 0; k < 2; k++) {
        positions[i + 0] = vertices ? vertices[vertexIndex * 2] : cos * radius;
        positions[i + 1] = vertices ? vertices[vertexIndex * 2 + 1] : sin * radius;
        positions[i + 2] = (1 / 2 - k) * height;
        normals[i + 0] = vertices ? vertices[vertexIndex * 2] : cos;
        normals[i + 1] = vertices ? vertices[vertexIndex * 2 + 1] : sin;
        i += 3;
      }
    }

    positions[i + 0] = positions[i - 3];
    positions[i + 1] = positions[i - 2];
    positions[i + 2] = positions[i - 1];
    i += 3;
  }

  for (let j = isExtruded ? 0 : 1; j < vertsAroundEdge; j++) {
    const v = Math.floor(j / 2) * Math.sign(0.5 - j % 2);
    const a = v * stepAngle;
    const vertexIndex = (v + nradial) % nradial;
    const sin = Math.sin(a);
    const cos = Math.cos(a);
    positions[i + 0] = vertices ? vertices[vertexIndex * 2] : cos * radius;
    positions[i + 1] = vertices ? vertices[vertexIndex * 2 + 1] : sin * radius;
    positions[i + 2] = height / 2;
    normals[i + 2] = 1;
    i += 3;
  }

  if (isExtruded) {
    let index = 0;

    for (let j = 0; j < nradial; j++) {
      indices[index++] = j * 2 + 0;
      indices[index++] = j * 2 + 2;
      indices[index++] = j * 2 + 0;
      indices[index++] = j * 2 + 1;
      indices[index++] = j * 2 + 1;
      indices[index++] = j * 2 + 3;
    }
  }

  return {
    indices,
    attributes: {
      POSITION: {
        size: 3,
        value: positions
      },
      NORMAL: {
        size: 3,
        value: normals
      }
    }
  };
}
//# sourceMappingURL=column-geometry.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer-vertex.glsl.js
/* harmony default export */ const column_layer_vertex_glsl = ("\n#define SHADER_NAME column-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec3 normals;\n\nattribute vec3 instancePositions;\nattribute float instanceElevations;\nattribute vec3 instancePositions64Low;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute float instanceStrokeWidths;\n\nattribute vec3 instancePickingColors;\nuniform float opacity;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform bool extruded;\nuniform bool isStroke;\nuniform float coverage;\nuniform float elevationScale;\nuniform float edgeDistance;\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\nvarying vec4 vColor;\n\nvoid main(void) {\n  geometry.worldPosition = instancePositions;\n\n  vec4 color = isStroke ? instanceLineColors : instanceFillColors;\n  mat2 rotationMatrix = mat2(cos(angle), sin(angle), -sin(angle), cos(angle));\n  float elevation = 0.0;\n  float strokeOffsetRatio = 1.0;\n\n  if (extruded) {\n    elevation = instanceElevations * (positions.z + 1.0) / 2.0 * elevationScale;\n  } else if (isStroke) {\n    float widthPixels = clamp(project_size_to_pixel(instanceStrokeWidths * widthScale),\n      widthMinPixels, widthMaxPixels) / 2.0;\n    strokeOffsetRatio -= sign(positions.z) * project_pixel_size(widthPixels) / project_size(edgeDistance * coverage * radius);\n  }\n  float shouldRender = float(color.a > 0.0 && instanceElevations >= 0.0);\n  float dotRadius = radius * coverage * shouldRender;\n\n  geometry.normal = project_normal(vec3(rotationMatrix * normals.xy, normals.z));\n  geometry.pickingColor = instancePickingColors;\n  vec3 centroidPosition = vec3(instancePositions.xy, instancePositions.z + elevation);\n  vec3 centroidPosition64Low = instancePositions64Low;\n  vec3 pos = vec3(project_size(rotationMatrix * positions.xy * strokeOffsetRatio + offset) * dotRadius, 0.);\n  DECKGL_FILTER_SIZE(pos, geometry);\n\n  gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64Low, pos, geometry.position);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  if (extruded && !isStroke) {\n    vec3 lightColor = lighting_getLightColor(color.rgb, project_uCameraPosition, geometry.position.xyz, geometry.normal);\n    vColor = vec4(lightColor, color.a * opacity);\n  } else {\n    vColor = vec4(color.rgb, color.a * opacity);\n  }\n  DECKGL_FILTER_COLOR(vColor, geometry);\n}\n");
//# sourceMappingURL=column-layer-vertex.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer-fragment.glsl.js
/* harmony default export */ const column_layer_fragment_glsl = ("#define SHADER_NAME column-layer-fragment-shader\n\nprecision highp float;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_FragColor = vColor;\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n");
//# sourceMappingURL=column-layer-fragment.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer.js





const DEFAULT_COLOR = [0, 0, 0, 255];
const defaultProps = {
  diskResolution: {
    type: 'number',
    min: 4,
    value: 20
  },
  vertices: null,
  radius: {
    type: 'number',
    min: 0,
    value: 1000
  },
  angle: {
    type: 'number',
    value: 0
  },
  offset: {
    type: 'array',
    value: [0, 0]
  },
  coverage: {
    type: 'number',
    min: 0,
    max: 1,
    value: 1
  },
  elevationScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  lineWidthUnits: 'meters',
  lineWidthScale: 1,
  lineWidthMinPixels: 0,
  lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
  extruded: true,
  wireframe: false,
  filled: true,
  stroked: false,
  getPosition: {
    type: 'accessor',
    value: x => x.position
  },
  getFillColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getLineColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getLineWidth: {
    type: 'accessor',
    value: 1
  },
  getElevation: {
    type: 'accessor',
    value: 1000
  },
  material: true,
  getColor: {
    deprecatedFor: ['getFillColor', 'getLineColor']
  }
};
class ColumnLayer extends lib_layer/* default */.Z {
  getShaders() {
    return super.getShaders({
      vs: column_layer_vertex_glsl,
      fs: column_layer_fragment_glsl,
      modules: [project32/* default */.Z, phong_lighting/* gouraudLighting */.N, picking/* default */.Z]
    });
  }

  initializeState() {
    const attributeManager = this.getAttributeManager();
    attributeManager.addInstanced({
      instancePositions: {
        size: 3,
        type: 5130,
        fp64: this.use64bitPositions(),
        transition: true,
        accessor: 'getPosition'
      },
      instanceElevations: {
        size: 1,
        transition: true,
        accessor: 'getElevation'
      },
      instanceFillColors: {
        size: this.props.colorFormat.length,
        type: 5121,
        normalized: true,
        transition: true,
        accessor: 'getFillColor',
        defaultValue: DEFAULT_COLOR
      },
      instanceLineColors: {
        size: this.props.colorFormat.length,
        type: 5121,
        normalized: true,
        transition: true,
        accessor: 'getLineColor',
        defaultValue: DEFAULT_COLOR
      },
      instanceStrokeWidths: {
        size: 1,
        accessor: 'getLineWidth',
        transition: true
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
    const regenerateModels = changeFlags.extensionsChanged;

    if (regenerateModels) {
      var _this$state$model;

      const {
        gl
      } = this.context;
      (_this$state$model = this.state.model) === null || _this$state$model === void 0 ? void 0 : _this$state$model.delete();
      this.state.model = this._getModel(gl);
      this.getAttributeManager().invalidateAll();
    }

    if (regenerateModels || props.diskResolution !== oldProps.diskResolution || props.vertices !== oldProps.vertices || (props.extruded || props.stroked) !== (oldProps.extruded || oldProps.stroked)) {
      this._updateGeometry(props);
    }
  }

  getGeometry(diskResolution, vertices, hasThinkness) {
    const geometry = new ColumnGeometry({
      radius: 1,
      height: hasThinkness ? 2 : 0,
      vertices,
      nradial: diskResolution
    });
    let meanVertexDistance = 0;

    if (vertices) {
      for (let i = 0; i < diskResolution; i++) {
        const p = vertices[i];
        const d = Math.sqrt(p[0] * p[0] + p[1] * p[1]);
        meanVertexDistance += d / diskResolution;
      }
    } else {
      meanVertexDistance = 1;
    }

    this.setState({
      edgeDistance: Math.cos(Math.PI / diskResolution) * meanVertexDistance
    });
    return geometry;
  }

  _getModel(gl) {
    return new model/* default */.Z(gl, { ...this.getShaders(),
      id: this.props.id,
      isInstanced: true
    });
  }

  _updateGeometry({
    diskResolution,
    vertices,
    extruded,
    stroked
  }) {
    const geometry = this.getGeometry(diskResolution, vertices, extruded || stroked);
    this.setState({
      fillVertexCount: geometry.attributes.POSITION.value.length / 3,
      wireframeVertexCount: geometry.indices.value.length
    });
    this.state.model.setProps({
      geometry
    });
  }

  draw({
    uniforms
  }) {
    const {
      viewport
    } = this.context;
    const {
      lineWidthUnits,
      lineWidthScale,
      lineWidthMinPixels,
      lineWidthMaxPixels,
      elevationScale,
      extruded,
      filled,
      stroked,
      wireframe,
      offset,
      coverage,
      radius,
      angle
    } = this.props;
    const {
      model,
      fillVertexCount,
      wireframeVertexCount,
      edgeDistance
    } = this.state;
    const widthMultiplier = lineWidthUnits === 'pixels' ? viewport.metersPerPixel : 1;
    model.setUniforms(uniforms).setUniforms({
      radius,
      angle: angle / 180 * Math.PI,
      offset,
      extruded,
      coverage,
      elevationScale,
      edgeDistance,
      widthScale: lineWidthScale * widthMultiplier,
      widthMinPixels: lineWidthMinPixels,
      widthMaxPixels: lineWidthMaxPixels
    });

    if (extruded && wireframe) {
      model.setProps({
        isIndexed: true
      });
      model.setVertexCount(wireframeVertexCount).setDrawMode(1).setUniforms({
        isStroke: true
      }).draw();
    }

    if (filled) {
      model.setProps({
        isIndexed: false
      });
      model.setVertexCount(fillVertexCount).setDrawMode(5).setUniforms({
        isStroke: false
      }).draw();
    }

    if (!extruded && stroked) {
      model.setProps({
        isIndexed: false
      });
      model.setVertexCount(fillVertexCount * 2 / 3).setDrawMode(5).setUniforms({
        isStroke: true
      }).draw();
    }
  }

}
ColumnLayer.layerName = 'ColumnLayer';
ColumnLayer.defaultProps = defaultProps;
//# sourceMappingURL=column-layer.js.map

/***/ }),

/***/ 50600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ })

}]);