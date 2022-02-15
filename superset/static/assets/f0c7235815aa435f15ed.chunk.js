"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[1573],{

/***/ 99890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ normalize),
/* harmony export */   "m": () => (/* binding */ getSurfaceIndices)
/* harmony export */ });
/* harmony import */ var earcut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9187);
/* harmony import */ var earcut__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(earcut__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _math_gl_polygon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1738);


const OUTER_POLYGON_WINDING = _math_gl_polygon__WEBPACK_IMPORTED_MODULE_1__/* .WINDING.CLOCKWISE */ .wG.CLOCKWISE;
const HOLE_POLYGON_WINDING = _math_gl_polygon__WEBPACK_IMPORTED_MODULE_1__/* .WINDING.COUNTER_CLOCKWISE */ .wG.COUNTER_CLOCKWISE;
const windingOptions = {
  isClosed: true
};

function validate(polygon) {
  polygon = polygon && polygon.positions || polygon;

  if (!Array.isArray(polygon) && !ArrayBuffer.isView(polygon)) {
    throw new Error('invalid polygon');
  }
}

function isSimple(polygon) {
  return polygon.length >= 1 && polygon[0].length >= 2 && Number.isFinite(polygon[0][0]);
}

function isNestedRingClosed(simplePolygon) {
  const p0 = simplePolygon[0];
  const p1 = simplePolygon[simplePolygon.length - 1];
  return p0[0] === p1[0] && p0[1] === p1[1] && p0[2] === p1[2];
}

function isFlatRingClosed(positions, size, startIndex, endIndex) {
  for (let i = 0; i < size; i++) {
    if (positions[startIndex + i] !== positions[endIndex - size + i]) {
      return false;
    }
  }

  return true;
}

function copyNestedRing(target, targetStartIndex, simplePolygon, size, windingDirection) {
  let targetIndex = targetStartIndex;
  const len = simplePolygon.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < size; j++) {
      target[targetIndex++] = simplePolygon[i][j] || 0;
    }
  }

  if (!isNestedRingClosed(simplePolygon)) {
    for (let j = 0; j < size; j++) {
      target[targetIndex++] = simplePolygon[0][j] || 0;
    }
  }

  windingOptions.start = targetStartIndex;
  windingOptions.end = targetIndex;
  windingOptions.size = size;
  (0,_math_gl_polygon__WEBPACK_IMPORTED_MODULE_1__/* .modifyPolygonWindingDirection */ .Ny)(target, windingDirection, windingOptions);
  return targetIndex;
}

function copyFlatRing(target, targetStartIndex, positions, size, srcStartIndex = 0, srcEndIndex, windingDirection) {
  srcEndIndex = srcEndIndex || positions.length;
  const srcLength = srcEndIndex - srcStartIndex;

  if (srcLength <= 0) {
    return targetStartIndex;
  }

  let targetIndex = targetStartIndex;

  for (let i = 0; i < srcLength; i++) {
    target[targetIndex++] = positions[srcStartIndex + i];
  }

  if (!isFlatRingClosed(positions, size, srcStartIndex, srcEndIndex)) {
    for (let i = 0; i < size; i++) {
      target[targetIndex++] = positions[srcStartIndex + i];
    }
  }

  windingOptions.start = targetStartIndex;
  windingOptions.end = targetIndex;
  windingOptions.size = size;
  (0,_math_gl_polygon__WEBPACK_IMPORTED_MODULE_1__/* .modifyPolygonWindingDirection */ .Ny)(target, windingDirection, windingOptions);
  return targetIndex;
}

function normalize(polygon, positionSize) {
  validate(polygon);
  const positions = [];
  const holeIndices = [];

  if (polygon.positions) {
    const {
      positions: srcPositions,
      holeIndices: srcHoleIndices
    } = polygon;

    if (srcHoleIndices) {
      let targetIndex = 0;

      for (let i = 0; i <= srcHoleIndices.length; i++) {
        targetIndex = copyFlatRing(positions, targetIndex, srcPositions, positionSize, srcHoleIndices[i - 1], srcHoleIndices[i], i === 0 ? OUTER_POLYGON_WINDING : HOLE_POLYGON_WINDING);
        holeIndices.push(targetIndex);
      }

      holeIndices.pop();
      return {
        positions,
        holeIndices
      };
    }

    polygon = srcPositions;
  }

  if (Number.isFinite(polygon[0])) {
    copyFlatRing(positions, 0, polygon, positionSize, 0, positions.length, OUTER_POLYGON_WINDING);
    return positions;
  }

  if (!isSimple(polygon)) {
    let targetIndex = 0;

    for (const [polygonIndex, simplePolygon] of polygon.entries()) {
      targetIndex = copyNestedRing(positions, targetIndex, simplePolygon, positionSize, polygonIndex === 0 ? OUTER_POLYGON_WINDING : HOLE_POLYGON_WINDING);
      holeIndices.push(targetIndex);
    }

    holeIndices.pop();
    return {
      positions,
      holeIndices
    };
  }

  copyNestedRing(positions, 0, polygon, positionSize, OUTER_POLYGON_WINDING);
  return positions;
}
function getSurfaceIndices(normalizedPolygon, positionSize, preproject) {
  let holeIndices = null;

  if (normalizedPolygon.holeIndices) {
    holeIndices = normalizedPolygon.holeIndices.map(positionIndex => positionIndex / positionSize);
  }

  let positions = normalizedPolygon.positions || normalizedPolygon;

  if (preproject) {
    const n = positions.length;
    positions = positions.slice();
    const p = [];

    for (let i = 0; i < n; i += positionSize) {
      p[0] = positions[i];
      p[1] = positions[i + 1];
      const xy = preproject(p);
      positions[i] = xy[0];
      positions[i + 1] = xy[1];
    }
  }

  return earcut__WEBPACK_IMPORTED_MODULE_0___default()(positions, holeIndices, positionSize);
}
//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ 71435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SolidPolygonLayer)
});

// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/layer.js + 11 modules
var lib_layer = __webpack_require__(95772);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/project32/project32.js
var project32 = __webpack_require__(93844);
// EXTERNAL MODULE: ./node_modules/@luma.gl/shadertools/dist/esm/modules/phong-lighting/phong-lighting.js + 3 modules
var phong_lighting = __webpack_require__(95644);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/picking/picking.js + 1 modules
var picking = __webpack_require__(51331);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/constants.js
var constants = __webpack_require__(24088);
// EXTERNAL MODULE: ./node_modules/@luma.gl/webgl/dist/esm/features/features.js
var features = __webpack_require__(44211);
// EXTERNAL MODULE: ./node_modules/@luma.gl/webgl/dist/esm/features/webgl-features-table.js
var webgl_features_table = __webpack_require__(6948);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/lib/model.js + 9 modules
var model = __webpack_require__(281);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/geometry/geometry.js
var geometry = __webpack_require__(53982);
// EXTERNAL MODULE: ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/polygon.js
var solid_polygon_layer_polygon = __webpack_require__(99890);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/tesselator.js
var tesselator = __webpack_require__(28005);
// EXTERNAL MODULE: ./node_modules/@math.gl/polygon/dist/esm/index.js + 7 modules
var esm = __webpack_require__(1738);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/polygon-tesselator.js



class PolygonTesselator extends tesselator/* default */.Z {
  constructor(opts) {
    const {
      fp64,
      IndexType = Uint32Array
    } = opts;
    super({ ...opts,
      attributes: {
        positions: {
          size: 3,
          type: fp64 ? Float64Array : Float32Array
        },
        vertexValid: {
          type: Uint8ClampedArray,
          size: 1
        },
        indices: {
          type: IndexType,
          size: 1
        }
      }
    });
  }

  get(attributeName) {
    const {
      attributes
    } = this;

    if (attributeName === 'indices') {
      return attributes.indices && attributes.indices.subarray(0, this.vertexCount);
    }

    return attributes[attributeName];
  }

  updateGeometry(opts) {
    super.updateGeometry(opts);
    const externalIndices = this.buffers.indices;

    if (externalIndices) {
      this.vertexCount = (externalIndices.value || externalIndices).length;
    }
  }

  normalizeGeometry(polygon) {
    if (this.normalize) {
      polygon = solid_polygon_layer_polygon/* normalize */.F(polygon, this.positionSize);

      if (this.opts.resolution) {
        return (0,esm/* cutPolygonByGrid */.WZ)(polygon.positions || polygon, polygon.holeIndices, {
          size: this.positionSize,
          gridResolution: this.opts.resolution,
          edgeTypes: true
        });
      }

      if (this.opts.wrapLongitude) {
        return (0,esm/* cutPolygonByMercatorBounds */.GU)(polygon.positions || polygon, polygon.holeIndices, {
          size: this.positionSize,
          maxLatitude: 86,
          edgeTypes: true
        });
      }
    }

    return polygon;
  }

  getGeometrySize(polygon) {
    if (Array.isArray(polygon) && !Number.isFinite(polygon[0])) {
      let size = 0;

      for (const subPolygon of polygon) {
        size += this.getGeometrySize(subPolygon);
      }

      return size;
    }

    return (polygon.positions || polygon).length / this.positionSize;
  }

  getGeometryFromBuffer(buffer) {
    if (this.normalize || !this.buffers.indices) {
      return super.getGeometryFromBuffer(buffer);
    }

    return () => null;
  }

  updateGeometryAttributes(polygon, context) {
    if (Array.isArray(polygon) && !Number.isFinite(polygon[0])) {
      for (const subPolygon of polygon) {
        const geometrySize = this.getGeometrySize(subPolygon);
        context.geometrySize = geometrySize;
        this.updateGeometryAttributes(subPolygon, context);
        context.vertexStart += geometrySize;
        context.indexStart = this.indexStarts[context.geometryIndex + 1];
      }
    } else {
      this._updateIndices(polygon, context);

      this._updatePositions(polygon, context);

      this._updateVertexValid(polygon, context);
    }
  }

  _updateIndices(polygon, {
    geometryIndex,
    vertexStart: offset,
    indexStart
  }) {
    const {
      attributes,
      indexStarts,
      typedArrayManager
    } = this;
    let target = attributes.indices;

    if (!target) {
      return;
    }

    let i = indexStart;
    const indices = solid_polygon_layer_polygon/* getSurfaceIndices */.m(polygon, this.positionSize, this.opts.preproject);
    target = typedArrayManager.allocate(target, indexStart + indices.length, {
      copy: true
    });

    for (let j = 0; j < indices.length; j++) {
      target[i++] = indices[j] + offset;
    }

    indexStarts[geometryIndex + 1] = indexStart + indices.length;
    attributes.indices = target;
  }

  _updatePositions(polygon, {
    vertexStart,
    geometrySize
  }) {
    const {
      attributes: {
        positions
      },
      positionSize
    } = this;

    if (!positions) {
      return;
    }

    const polygonPositions = polygon.positions || polygon;

    for (let i = vertexStart, j = 0; j < geometrySize; i++, j++) {
      const x = polygonPositions[j * positionSize];
      const y = polygonPositions[j * positionSize + 1];
      const z = positionSize > 2 ? polygonPositions[j * positionSize + 2] : 0;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
  }

  _updateVertexValid(polygon, {
    vertexStart,
    geometrySize
  }) {
    const {
      attributes: {
        vertexValid
      },
      positionSize
    } = this;
    const holeIndices = polygon && polygon.holeIndices;

    if (polygon && polygon.edgeTypes) {
      vertexValid.set(polygon.edgeTypes, vertexStart);
    } else {
      vertexValid.fill(1, vertexStart, vertexStart + geometrySize);
    }

    if (holeIndices) {
      for (let j = 0; j < holeIndices.length; j++) {
        vertexValid[vertexStart + holeIndices[j] / positionSize - 1] = 0;
      }
    }

    vertexValid[vertexStart + geometrySize - 1] = 0;
  }

}
//# sourceMappingURL=polygon-tesselator.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-vertex-main.glsl.js
/* harmony default export */ const solid_polygon_layer_vertex_main_glsl = ("\nattribute vec2 vertexPositions;\nattribute float vertexValid;\n\nuniform bool extruded;\nuniform bool isWireframe;\nuniform float elevationScale;\nuniform float opacity;\n\nvarying vec4 vColor;\n\nstruct PolygonProps {\n  vec4 fillColors;\n  vec4 lineColors;\n  vec3 positions;\n  vec3 nextPositions;\n  vec3 pickingColors;\n  vec3 positions64Low;\n  vec3 nextPositions64Low;\n  float elevations;\n};\n\nvec3 project_offset_normal(vec3 vector) {\n  if (project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||\n    project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {\n    return normalize(vector * project_uCommonUnitsPerWorldUnit);\n  }\n  return project_normal(vector);\n}\n\nvoid calculatePosition(PolygonProps props) {\n#ifdef IS_SIDE_VERTEX\n  if(vertexValid < 0.5){\n    gl_Position = vec4(0.);\n    return;\n  }\n#endif\n\n  vec3 pos;\n  vec3 pos64Low;\n  vec3 normal;\n  vec4 colors = isWireframe ? props.lineColors : props.fillColors;\n\n  geometry.worldPosition = props.positions;\n  geometry.worldPositionAlt = props.nextPositions;\n  geometry.pickingColor = props.pickingColors;\n\n#ifdef IS_SIDE_VERTEX\n  pos = mix(props.positions, props.nextPositions, vertexPositions.x);\n  pos64Low = mix(props.positions64Low, props.nextPositions64Low, vertexPositions.x);\n#else\n  pos = props.positions;\n  pos64Low = props.positions64Low;\n#endif\n\n  if (extruded) {\n    pos.z += props.elevations * vertexPositions.y * elevationScale;\n\n#ifdef IS_SIDE_VERTEX\n    normal = vec3(\n      props.positions.y - props.nextPositions.y + (props.positions64Low.y - props.nextPositions64Low.y),\n      props.nextPositions.x - props.positions.x + (props.nextPositions64Low.x - props.positions64Low.x),\n      0.0);\n    normal = project_offset_normal(normal);\n#else\n    normal = vec3(0.0, 0.0, 1.0);\n#endif\n    geometry.normal = normal;\n  }\n\n  gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n\n  if (extruded) {\n    vec3 lightColor = lighting_getLightColor(colors.rgb, project_uCameraPosition, geometry.position.xyz, normal);\n    vColor = vec4(lightColor, colors.a * opacity);\n  } else {\n    vColor = vec4(colors.rgb, colors.a * opacity);\n  }\n  DECKGL_FILTER_COLOR(vColor, geometry);\n}\n");
//# sourceMappingURL=solid-polygon-layer-vertex-main.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-vertex-top.glsl.js

/* harmony default export */ const solid_polygon_layer_vertex_top_glsl = ("#define SHADER_NAME solid-polygon-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec3 positions64Low;\nattribute float elevations;\nattribute vec4 fillColors;\nattribute vec4 lineColors;\nattribute vec3 pickingColors;\n\n".concat(solid_polygon_layer_vertex_main_glsl, "\n\nvoid main(void) {\n  PolygonProps props;\n\n  props.positions = positions;\n  props.positions64Low = positions64Low;\n  props.elevations = elevations;\n  props.fillColors = fillColors;\n  props.lineColors = lineColors;\n  props.pickingColors = pickingColors;\n\n  calculatePosition(props);\n}\n"));
//# sourceMappingURL=solid-polygon-layer-vertex-top.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-vertex-side.glsl.js

/* harmony default export */ const solid_polygon_layer_vertex_side_glsl = ("#define SHADER_NAME solid-polygon-layer-vertex-shader-side\n#define IS_SIDE_VERTEX\n\n\nattribute vec3 instancePositions;\nattribute vec3 nextPositions;\nattribute vec3 instancePositions64Low;\nattribute vec3 nextPositions64Low;\nattribute float instanceElevations;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute vec3 instancePickingColors;\n\n".concat(solid_polygon_layer_vertex_main_glsl, "\n\nvoid main(void) {\n  PolygonProps props;\n\n  #if RING_WINDING_ORDER_CW == 1\n    props.positions = instancePositions;\n    props.positions64Low = instancePositions64Low;\n    props.nextPositions = nextPositions;\n    props.nextPositions64Low = nextPositions64Low;\n  #else\n    props.positions = nextPositions;\n    props.positions64Low = nextPositions64Low;\n    props.nextPositions = instancePositions;\n    props.nextPositions64Low = instancePositions64Low;\n  #endif\n  props.elevations = instanceElevations;\n  props.fillColors = instanceFillColors;\n  props.lineColors = instanceLineColors;\n  props.pickingColors = instancePickingColors;\n\n  calculatePosition(props);\n}\n"));
//# sourceMappingURL=solid-polygon-layer-vertex-side.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-fragment.glsl.js
/* harmony default export */ const solid_polygon_layer_fragment_glsl = ("#define SHADER_NAME solid-polygon-layer-fragment-shader\n\nprecision highp float;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_FragColor = vColor;\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n");
//# sourceMappingURL=solid-polygon-layer-fragment.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer.js






const DEFAULT_COLOR = [0, 0, 0, 255];
const defaultProps = {
  filled: true,
  extruded: false,
  wireframe: false,
  _normalize: true,
  _windingOrder: 'CW',
  elevationScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  getPolygon: {
    type: 'accessor',
    value: f => f.polygon
  },
  getElevation: {
    type: 'accessor',
    value: 1000
  },
  getFillColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getLineColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  material: true
};
const ATTRIBUTE_TRANSITION = {
  enter: (value, chunk) => {
    return chunk.length ? chunk.subarray(chunk.length - value.length) : value;
  }
};
class SolidPolygonLayer extends lib_layer/* default */.Z {
  getShaders(type) {
    return super.getShaders({
      vs: type === 'top' ? solid_polygon_layer_vertex_top_glsl : solid_polygon_layer_vertex_side_glsl,
      fs: solid_polygon_layer_fragment_glsl,
      defines: {
        RING_WINDING_ORDER_CW: !this.props._normalize && this.props._windingOrder === 'CCW' ? 0 : 1
      },
      modules: [project32/* default */.Z, phong_lighting/* gouraudLighting */.N, picking/* default */.Z]
    });
  }

  get wrapLongitude() {
    return false;
  }

  initializeState() {
    const {
      gl,
      viewport
    } = this.context;
    let {
      coordinateSystem
    } = this.props;

    if (viewport.isGeospatial && coordinateSystem === constants/* COORDINATE_SYSTEM.DEFAULT */.Df.DEFAULT) {
      coordinateSystem = constants/* COORDINATE_SYSTEM.LNGLAT */.Df.LNGLAT;
    }

    this.setState({
      numInstances: 0,
      polygonTesselator: new PolygonTesselator({
        preproject: coordinateSystem === constants/* COORDINATE_SYSTEM.LNGLAT */.Df.LNGLAT && viewport.projectFlat,
        fp64: this.use64bitPositions(),
        IndexType: !gl || (0,features/* hasFeatures */.ag)(gl, webgl_features_table/* FEATURES.ELEMENT_INDEX_UINT32 */.h.ELEMENT_INDEX_UINT32) ? Uint32Array : Uint16Array
      })
    });
    const attributeManager = this.getAttributeManager();
    const noAlloc = true;
    attributeManager.remove(['instancePickingColors']);
    attributeManager.add({
      indices: {
        size: 1,
        isIndexed: true,
        update: this.calculateIndices,
        noAlloc
      },
      positions: {
        size: 3,
        type: 5130,
        fp64: this.use64bitPositions(),
        transition: ATTRIBUTE_TRANSITION,
        accessor: 'getPolygon',
        update: this.calculatePositions,
        noAlloc,
        shaderAttributes: {
          positions: {
            vertexOffset: 0,
            divisor: 0
          },
          instancePositions: {
            vertexOffset: 0,
            divisor: 1
          },
          nextPositions: {
            vertexOffset: 1,
            divisor: 1
          }
        }
      },
      vertexValid: {
        size: 1,
        divisor: 1,
        type: 5121,
        update: this.calculateVertexValid,
        noAlloc
      },
      elevations: {
        size: 1,
        transition: ATTRIBUTE_TRANSITION,
        accessor: 'getElevation',
        shaderAttributes: {
          elevations: {
            divisor: 0
          },
          instanceElevations: {
            divisor: 1
          }
        }
      },
      fillColors: {
        alias: 'colors',
        size: this.props.colorFormat.length,
        type: 5121,
        normalized: true,
        transition: ATTRIBUTE_TRANSITION,
        accessor: 'getFillColor',
        defaultValue: DEFAULT_COLOR,
        shaderAttributes: {
          fillColors: {
            divisor: 0
          },
          instanceFillColors: {
            divisor: 1
          }
        }
      },
      lineColors: {
        alias: 'colors',
        size: this.props.colorFormat.length,
        type: 5121,
        normalized: true,
        transition: ATTRIBUTE_TRANSITION,
        accessor: 'getLineColor',
        defaultValue: DEFAULT_COLOR,
        shaderAttributes: {
          lineColors: {
            divisor: 0
          },
          instanceLineColors: {
            divisor: 1
          }
        }
      },
      pickingColors: {
        size: 3,
        type: 5121,
        accessor: (object, {
          index,
          target: value
        }) => this.encodePickingColor(object && object.__source ? object.__source.index : index, value),
        shaderAttributes: {
          pickingColors: {
            divisor: 0
          },
          instancePickingColors: {
            divisor: 1
          }
        }
      }
    });
  }

  getPickingInfo(params) {
    const info = super.getPickingInfo(params);
    const {
      index
    } = info;
    const {
      data
    } = this.props;

    if (data[0] && data[0].__source) {
      info.object = data.find(d => d.__source.index === index);
    }

    return info;
  }

  disablePickingIndex(objectIndex) {
    const {
      data
    } = this.props;

    if (data[0] && data[0].__source) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].__source.index === objectIndex) {
          this._disablePickingIndex(i);
        }
      }
    } else {
      this._disablePickingIndex(objectIndex);
    }
  }

  draw({
    uniforms
  }) {
    const {
      extruded,
      filled,
      wireframe,
      elevationScale
    } = this.props;
    const {
      topModel,
      sideModel,
      polygonTesselator
    } = this.state;
    const renderUniforms = { ...uniforms,
      extruded: Boolean(extruded),
      elevationScale
    };

    if (sideModel) {
      sideModel.setInstanceCount(polygonTesselator.instanceCount - 1);
      sideModel.setUniforms(renderUniforms);

      if (wireframe) {
        sideModel.setDrawMode(3);
        sideModel.setUniforms({
          isWireframe: true
        }).draw();
      }

      if (filled) {
        sideModel.setDrawMode(6);
        sideModel.setUniforms({
          isWireframe: false
        }).draw();
      }
    }

    if (topModel) {
      topModel.setVertexCount(polygonTesselator.vertexCount);
      topModel.setUniforms(renderUniforms).draw();
    }
  }

  updateState(updateParams) {
    super.updateState(updateParams);
    this.updateGeometry(updateParams);
    const {
      props,
      oldProps,
      changeFlags
    } = updateParams;
    const attributeManager = this.getAttributeManager();
    const regenerateModels = changeFlags.extensionsChanged || props.filled !== oldProps.filled || props.extruded !== oldProps.extruded;

    if (regenerateModels) {
      var _this$state$models;

      (_this$state$models = this.state.models) === null || _this$state$models === void 0 ? void 0 : _this$state$models.forEach(model => model.delete());
      this.setState(this._getModels(this.context.gl));
      attributeManager.invalidateAll();
    }
  }

  updateGeometry({
    props,
    oldProps,
    changeFlags
  }) {
    const geometryConfigChanged = changeFlags.dataChanged || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPolygon);

    if (geometryConfigChanged) {
      const {
        polygonTesselator
      } = this.state;
      const buffers = props.data.attributes || {};
      polygonTesselator.updateGeometry({
        data: props.data,
        normalize: props._normalize,
        geometryBuffer: buffers.getPolygon,
        buffers,
        getGeometry: props.getPolygon,
        positionFormat: props.positionFormat,
        wrapLongitude: props.wrapLongitude,
        resolution: this.context.viewport.resolution,
        fp64: this.use64bitPositions(),
        dataChanged: changeFlags.dataChanged
      });
      this.setState({
        numInstances: polygonTesselator.instanceCount,
        startIndices: polygonTesselator.vertexStarts
      });

      if (!changeFlags.dataChanged) {
        this.getAttributeManager().invalidateAll();
      }
    }
  }

  _getModels(gl) {
    const {
      id,
      filled,
      extruded
    } = this.props;
    let topModel;
    let sideModel;

    if (filled) {
      const shaders = this.getShaders('top');
      shaders.defines.NON_INSTANCED_MODEL = 1;
      topModel = new model/* default */.Z(gl, { ...shaders,
        id: "".concat(id, "-top"),
        drawMode: 4,
        attributes: {
          vertexPositions: new Float32Array([0, 1])
        },
        uniforms: {
          isWireframe: false,
          isSideVertex: false
        },
        vertexCount: 0,
        isIndexed: true
      });
    }

    if (extruded) {
      sideModel = new model/* default */.Z(gl, { ...this.getShaders('side'),
        id: "".concat(id, "-side"),
        geometry: new geometry/* default */.Z({
          drawMode: 1,
          vertexCount: 4,
          attributes: {
            vertexPositions: {
              size: 2,
              value: new Float32Array([1, 0, 0, 0, 0, 1, 1, 1])
            }
          }
        }),
        instanceCount: 0,
        isInstanced: 1
      });
      sideModel.userData.excludeAttributes = {
        indices: true
      };
    }

    return {
      models: [sideModel, topModel].filter(Boolean),
      topModel,
      sideModel
    };
  }

  calculateIndices(attribute) {
    const {
      polygonTesselator
    } = this.state;
    attribute.startIndices = polygonTesselator.indexStarts;
    attribute.value = polygonTesselator.get('indices');
  }

  calculatePositions(attribute) {
    const {
      polygonTesselator
    } = this.state;
    attribute.startIndices = polygonTesselator.vertexStarts;
    attribute.value = polygonTesselator.get('positions');
  }

  calculateVertexValid(attribute) {
    attribute.value = this.state.polygonTesselator.get('vertexValid');
  }

}
SolidPolygonLayer.layerName = 'SolidPolygonLayer';
SolidPolygonLayer.defaultProps = defaultProps;
//# sourceMappingURL=solid-polygon-layer.js.map

/***/ }),

/***/ 98452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ replaceInRange)
/* harmony export */ });
function replaceInRange({
  data,
  getIndex,
  dataRange,
  replace
}) {
  const {
    startRow = 0,
    endRow = Infinity
  } = dataRange;
  const count = data.length;
  let replaceStart = count;
  let replaceEnd = count;

  for (let i = 0; i < count; i++) {
    const row = getIndex(data[i]);

    if (replaceStart > i && row >= startRow) {
      replaceStart = i;
    }

    if (row >= endRow) {
      replaceEnd = i;
      break;
    }
  }

  let index = replaceStart;
  const dataLengthChanged = replaceEnd - replaceStart !== replace.length;
  const endChunk = dataLengthChanged && data.slice(replaceEnd);

  for (let i = 0; i < replace.length; i++) {
    data[index++] = replace[i];
  }

  if (dataLengthChanged) {
    for (let i = 0; i < endChunk.length; i++) {
      data[index++] = endChunk[i];
    }

    data.length = index;
  }

  return {
    startRow: replaceStart,
    endRow: replaceStart + replace.length
  };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 95644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ gouraudLighting)
});

// UNUSED EXPORTS: phongLighting

;// CONCATENATED MODULE: ./node_modules/@luma.gl/shadertools/dist/esm/modules/lights/lights.glsl.js
/* harmony default export */ const lights_glsl = ("#if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))\n\nstruct AmbientLight {\n vec3 color;\n};\n\nstruct PointLight {\n vec3 color;\n vec3 position;\n vec3 attenuation;\n};\n\nstruct DirectionalLight {\n  vec3 color;\n  vec3 direction;\n};\n\nuniform AmbientLight lighting_uAmbientLight;\nuniform PointLight lighting_uPointLight[MAX_LIGHTS];\nuniform DirectionalLight lighting_uDirectionalLight[MAX_LIGHTS];\nuniform int lighting_uPointLightCount;\nuniform int lighting_uDirectionalLightCount;\n\nuniform bool lighting_uEnabled;\n\nfloat getPointLightAttenuation(PointLight pointLight, float distance) {\n  return pointLight.attenuation.x\n       + pointLight.attenuation.y * distance\n       + pointLight.attenuation.z * distance * distance;\n}\n\n#endif\n");
//# sourceMappingURL=lights.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@luma.gl/shadertools/dist/esm/modules/lights/lights.js

const INITIAL_MODULE_OPTIONS = {
  lightSources: {}
};

function convertColor({
  color = [0, 0, 0],
  intensity = 1.0
} = {}) {
  return color.map(component => component * intensity / 255.0);
}

function getLightSourceUniforms({
  ambientLight,
  pointLights = [],
  directionalLights = []
}) {
  const lightSourceUniforms = {};

  if (ambientLight) {
    lightSourceUniforms['lighting_uAmbientLight.color'] = convertColor(ambientLight);
  } else {
    lightSourceUniforms['lighting_uAmbientLight.color'] = [0, 0, 0];
  }

  pointLights.forEach((pointLight, index) => {
    lightSourceUniforms["lighting_uPointLight[".concat(index, "].color")] = convertColor(pointLight);
    lightSourceUniforms["lighting_uPointLight[".concat(index, "].position")] = pointLight.position;
    lightSourceUniforms["lighting_uPointLight[".concat(index, "].attenuation")] = pointLight.attenuation || [1, 0, 0];
  });
  lightSourceUniforms.lighting_uPointLightCount = pointLights.length;
  directionalLights.forEach((directionalLight, index) => {
    lightSourceUniforms["lighting_uDirectionalLight[".concat(index, "].color")] = convertColor(directionalLight);
    lightSourceUniforms["lighting_uDirectionalLight[".concat(index, "].direction")] = directionalLight.direction;
  });
  lightSourceUniforms.lighting_uDirectionalLightCount = directionalLights.length;
  return lightSourceUniforms;
}

function getUniforms(opts = INITIAL_MODULE_OPTIONS) {
  if ('lightSources' in opts) {
    const {
      ambientLight,
      pointLights,
      directionalLights
    } = opts.lightSources || {};
    const hasLights = ambientLight || pointLights && pointLights.length > 0 || directionalLights && directionalLights.length > 0;

    if (!hasLights) {
      return {
        lighting_uEnabled: false
      };
    }

    return Object.assign({}, getLightSourceUniforms({
      ambientLight,
      pointLights,
      directionalLights
    }), {
      lighting_uEnabled: true
    });
  }

  if ('lights' in opts) {
    const lightSources = {
      pointLights: [],
      directionalLights: []
    };

    for (const light of opts.lights || []) {
      switch (light.type) {
        case 'ambient':
          lightSources.ambientLight = light;
          break;

        case 'directional':
          lightSources.directionalLights.push(light);
          break;

        case 'point':
          lightSources.pointLights.push(light);
          break;

        default:
      }
    }

    return getUniforms({
      lightSources
    });
  }

  return {};
}

const lights = {
  name: 'lights',
  vs: lights_glsl,
  fs: lights_glsl,
  getUniforms,
  defines: {
    MAX_LIGHTS: 3
  }
};
//# sourceMappingURL=lights.js.map
;// CONCATENATED MODULE: ./node_modules/@luma.gl/shadertools/dist/esm/modules/phong-lighting/phong-lighting.glsl.js
/* harmony default export */ const phong_lighting_glsl = ("\nuniform float lighting_uAmbient;\nuniform float lighting_uDiffuse;\nuniform float lighting_uShininess;\nuniform vec3  lighting_uSpecularColor;\n\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {\n    vec3 halfway_direction = normalize(light_direction + view_direction);\n    float lambertian = dot(light_direction, normal_worldspace);\n    float specular = 0.0;\n    if (lambertian > 0.0) {\n      float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);\n      specular = pow(specular_angle, lighting_uShininess);\n    }\n    lambertian = max(lambertian, 0.0);\n    return (lambertian * lighting_uDiffuse * surfaceColor + specular * lighting_uSpecularColor) * color;\n}\n\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\n  vec3 lightColor = surfaceColor;\n\n  if (lighting_uEnabled) {\n    vec3 view_direction = normalize(cameraPosition - position_worldspace);\n    lightColor = lighting_uAmbient * surfaceColor * lighting_uAmbientLight.color;\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uPointLightCount) {\n        break;\n      }\n      PointLight pointLight = lighting_uPointLight[i];\n      vec3 light_position_worldspace = pointLight.position;\n      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);\n      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n    }\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uDirectionalLightCount) {\n        break;\n      }\n      DirectionalLight directionalLight = lighting_uDirectionalLight[i];\n      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n    }\n  }\n  return lightColor;\n}\n\nvec3 lighting_getSpecularLightColor(vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\n  vec3 lightColor = vec3(0, 0, 0);\n  vec3 surfaceColor = vec3(0, 0, 0);\n\n  if (lighting_uEnabled) {\n    vec3 view_direction = normalize(cameraPosition - position_worldspace);\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uPointLightCount) {\n        break;\n      }\n      PointLight pointLight = lighting_uPointLight[i];\n      vec3 light_position_worldspace = pointLight.position;\n      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);\n      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n    }\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uDirectionalLightCount) {\n        break;\n      }\n      DirectionalLight directionalLight = lighting_uDirectionalLight[i];\n      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n    }\n  }\n  return lightColor;\n}\n");
//# sourceMappingURL=phong-lighting.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@luma.gl/shadertools/dist/esm/modules/phong-lighting/phong-lighting.js


const phong_lighting_INITIAL_MODULE_OPTIONS = {};

function getMaterialUniforms(material) {
  const {
    ambient = 0.35,
    diffuse = 0.6,
    shininess = 32,
    specularColor = [30, 30, 30]
  } = material;
  return {
    lighting_uAmbient: ambient,
    lighting_uDiffuse: diffuse,
    lighting_uShininess: shininess,
    lighting_uSpecularColor: specularColor.map(x => x / 255)
  };
}

function phong_lighting_getUniforms(opts = phong_lighting_INITIAL_MODULE_OPTIONS) {
  if (!('material' in opts)) {
    return {};
  }

  const {
    material
  } = opts;

  if (!material) {
    return {
      lighting_uEnabled: false
    };
  }

  return getMaterialUniforms(material);
}

const gouraudLighting = {
  name: 'gouraud-lighting',
  dependencies: [lights],
  vs: phong_lighting_glsl,
  defines: {
    LIGHTING_VERTEX: 1
  },
  getUniforms: phong_lighting_getUniforms
};
const phongLighting = {
  name: 'phong-lighting',
  dependencies: [lights],
  fs: phong_lighting_glsl,
  defines: {
    LIGHTING_FRAGMENT: 1
  },
  getUniforms: phong_lighting_getUniforms
};
//# sourceMappingURL=phong-lighting.js.map

/***/ }),

/***/ 9187:
/***/ ((module) => {



module.exports = earcut;
module.exports["default"] = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode || outerNode.next === outerNode.prev) return triangles;

    var minX, minY, maxX, maxY, x, y, invSize;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 1 / invSize : 0;
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, invSize);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            // skipping the next vertex leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, invSize) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, invSize),
        maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);

    var p = ear.prevZ,
        n = ear.nextZ;

    // look for points inside the triangle in both directions
    while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;

        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    // look for remaining points in decreasing z-order
    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    // look for remaining points in increasing z-order
    while (n && n.z <= maxZ) {
        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return filterPoints(p);
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, invSize);
                earcutLinked(c, triangles, dim, minX, minY, invSize);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);

        // filter collinear points around the cuts
        filterPoints(outerNode, outerNode.next);
        filterPoints(b, b.next);
    }
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m; // hole touches outer segment; pick leftmost endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m;

    do {
        if (hx >= p.x && p.x >= mx && hx !== p.x &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if (locallyInside(p, hole) &&
                (tan < tanMin || (tan === tanMin && (p.x > m.x || (p.x === m.x && sectorContainsSector(m, p)))))) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    } while (p !== stop);

    return m;
}

// whether sector in vertex m contains sector in vertex p in the same coordinates
function sectorContainsSector(m, p) {
    return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) * invSize;
    y = 32767 * (y - minY) * invSize;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
           (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
            (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
            equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    var o1 = sign(area(p1, q1, p2));
    var o2 = sign(area(p1, q1, q2));
    var o3 = sign(area(p2, q2, p1));
    var o4 = sign(area(p2, q2, q1));

    if (o1 !== o2 && o3 !== o4) return true; // general case

    if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
    if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
    if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
    if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

    return false;
}

// for collinear points p, q, r, check if point q lies on segment pr
function onSegment(p, q, r) {
    return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}

function sign(num) {
    return num > 0 ? 1 : num < 0 ? -1 : 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertex index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertex nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};


/***/ })

}]);