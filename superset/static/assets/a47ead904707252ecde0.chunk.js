"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[2112],{

/***/ 28005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Tesselator)
/* harmony export */ });
/* harmony import */ var _iterable_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38550);
/* harmony import */ var _typed_array_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36610);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75304);
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53478);




class Tesselator {
  constructor(opts = {}) {
    const {
      attributes = {}
    } = opts;
    this.typedArrayManager = _typed_array_manager__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
    this.indexStarts = null;
    this.vertexStarts = null;
    this.vertexCount = 0;
    this.instanceCount = 0;
    this.attributes = {};
    this._attributeDefs = attributes;
    this.opts = opts;
    this.updateGeometry(opts);
    Object.seal(this);
  }

  updateGeometry(opts) {
    Object.assign(this.opts, opts);
    const {
      data,
      buffers = {},
      getGeometry,
      geometryBuffer,
      positionFormat,
      dataChanged,
      normalize = true
    } = this.opts;
    this.data = data;
    this.getGeometry = getGeometry;
    this.positionSize = geometryBuffer && geometryBuffer.size || (positionFormat === 'XY' ? 2 : 3);
    this.buffers = buffers;
    this.normalize = normalize;

    if (geometryBuffer) {
      (0,_assert__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(data.startIndices);
      this.getGeometry = this.getGeometryFromBuffer(geometryBuffer);

      if (!normalize) {
        buffers.positions = geometryBuffer;
      }
    }

    this.geometryBuffer = buffers.positions;

    if (Array.isArray(dataChanged)) {
      for (const dataRange of dataChanged) {
        this._rebuildGeometry(dataRange);
      }
    } else {
      this._rebuildGeometry();
    }
  }

  updatePartialGeometry({
    startRow,
    endRow
  }) {
    this._rebuildGeometry({
      startRow,
      endRow
    });
  }

  normalizeGeometry(geometry) {
    return geometry;
  }

  updateGeometryAttributes(geometry, startIndex, size) {
    throw new Error('Not implemented');
  }

  getGeometrySize(geometry) {
    throw new Error('Not implemented');
  }

  getGeometryFromBuffer(geometryBuffer) {
    const value = geometryBuffer.value || geometryBuffer;
    (0,_assert__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(ArrayBuffer.isView(value));
    return (0,_iterable_utils__WEBPACK_IMPORTED_MODULE_2__/* .getAccessorFromBuffer */ .jr)(value, {
      size: this.positionSize,
      offset: geometryBuffer.offset,
      stride: geometryBuffer.stride,
      startIndices: this.data.startIndices
    });
  }

  _allocate(instanceCount, copy) {
    const {
      attributes,
      buffers,
      _attributeDefs,
      typedArrayManager
    } = this;

    for (const name in _attributeDefs) {
      if (name in buffers) {
        typedArrayManager.release(attributes[name]);
        attributes[name] = null;
      } else {
        const def = _attributeDefs[name];
        def.copy = copy;
        attributes[name] = typedArrayManager.allocate(attributes[name], instanceCount, def);
      }
    }
  }

  _forEachGeometry(visitor, startRow, endRow) {
    const {
      data,
      getGeometry
    } = this;
    const {
      iterable,
      objectInfo
    } = (0,_iterable_utils__WEBPACK_IMPORTED_MODULE_2__/* .createIterable */ .jB)(data, startRow, endRow);

    for (const object of iterable) {
      objectInfo.index++;
      const geometry = getGeometry(object, objectInfo);
      visitor(geometry, objectInfo.index);
    }
  }

  _rebuildGeometry(dataRange) {
    if (!this.data || !this.getGeometry) {
      return;
    }

    let {
      indexStarts,
      vertexStarts,
      instanceCount
    } = this;
    const {
      data,
      geometryBuffer
    } = this;
    const {
      startRow = 0,
      endRow = Infinity
    } = dataRange || {};
    const normalizedData = {};

    if (!dataRange) {
      indexStarts = [0];
      vertexStarts = [0];
    }

    if (this.normalize || !geometryBuffer) {
      this._forEachGeometry((geometry, dataIndex) => {
        geometry = this.normalizeGeometry(geometry);
        normalizedData[dataIndex] = geometry;
        vertexStarts[dataIndex + 1] = vertexStarts[dataIndex] + this.getGeometrySize(geometry);
      }, startRow, endRow);

      instanceCount = vertexStarts[vertexStarts.length - 1];
    } else if (geometryBuffer.buffer instanceof _luma_gl_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z) {
      const byteStride = geometryBuffer.stride || this.positionSize * 4;
      vertexStarts = data.startIndices;
      instanceCount = vertexStarts[data.length] || geometryBuffer.buffer.byteLength / byteStride;
    } else {
      const bufferValue = geometryBuffer.value || geometryBuffer;
      const elementStride = geometryBuffer.stride / bufferValue.BYTES_PER_ELEMENT || this.positionSize;
      vertexStarts = data.startIndices;
      instanceCount = vertexStarts[data.length] || bufferValue.length / elementStride;
    }

    this._allocate(instanceCount, Boolean(dataRange));

    this.indexStarts = indexStarts;
    this.vertexStarts = vertexStarts;
    this.instanceCount = instanceCount;
    const context = {};

    this._forEachGeometry((geometry, dataIndex) => {
      geometry = normalizedData[dataIndex] || geometry;
      context.vertexStart = vertexStarts[dataIndex];
      context.indexStart = indexStarts[dataIndex];
      const vertexEnd = dataIndex < vertexStarts.length - 1 ? vertexStarts[dataIndex + 1] : instanceCount;
      context.geometrySize = vertexEnd - vertexStarts[dataIndex];
      context.geometryIndex = dataIndex;
      this.updateGeometryAttributes(geometry, context);
    }, startRow, endRow);

    this.vertexCount = indexStarts[indexStarts.length - 1];
  }

}
//# sourceMappingURL=tesselator.js.map

/***/ }),

/***/ 62112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PathLayer)
});

// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/layer.js + 11 modules
var lib_layer = __webpack_require__(95772);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/project32/project32.js
var project32 = __webpack_require__(93844);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/picking/picking.js + 1 modules
var picking = __webpack_require__(51331);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/log.js
var log = __webpack_require__(80744);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/lib/model.js + 9 modules
var model = __webpack_require__(281);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/geometry/geometry.js
var geometry = __webpack_require__(53982);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/tesselator.js
var tesselator = __webpack_require__(28005);
// EXTERNAL MODULE: ./node_modules/@math.gl/polygon/dist/esm/index.js + 7 modules
var esm = __webpack_require__(1738);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/path-layer/path.js

function normalizePath(path, size, gridResolution, wrapLongitude) {
  let flatPath = path;

  if (Array.isArray(path[0])) {
    const length = path.length * size;
    flatPath = new Array(length);

    for (let i = 0; i < path.length; i++) {
      for (let j = 0; j < size; j++) {
        flatPath[i * size + j] = path[i][j] || 0;
      }
    }
  }

  if (gridResolution) {
    return (0,esm/* cutPolylineByGrid */.dj)(flatPath, {
      size,
      gridResolution
    });
  }

  if (wrapLongitude) {
    return (0,esm/* cutPolylineByMercatorBounds */.ct)(flatPath, {
      size
    });
  }

  return flatPath;
}
//# sourceMappingURL=path.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/path-layer/path-tesselator.js


const START_CAP = 1;
const END_CAP = 2;
const INVALID = 4;
class PathTesselator extends tesselator/* default */.Z {
  constructor(opts) {
    super({ ...opts,
      attributes: {
        positions: {
          size: 3,
          padding: 18,
          initialize: true,
          type: opts.fp64 ? Float64Array : Float32Array
        },
        segmentTypes: {
          size: 1,
          type: Uint8ClampedArray
        }
      }
    });
  }

  getGeometryFromBuffer(buffer) {
    if (this.normalize) {
      return super.getGeometryFromBuffer(buffer);
    }

    return () => null;
  }

  normalizeGeometry(path) {
    if (this.normalize) {
      return normalizePath(path, this.positionSize, this.opts.resolution, this.opts.wrapLongitude);
    }

    return path;
  }

  get(attributeName) {
    return this.attributes[attributeName];
  }

  getGeometrySize(path) {
    if (Array.isArray(path[0])) {
      let size = 0;

      for (const subPath of path) {
        size += this.getGeometrySize(subPath);
      }

      return size;
    }

    const numPoints = this.getPathLength(path);

    if (numPoints < 2) {
      return 0;
    }

    if (this.isClosed(path)) {
      return numPoints < 3 ? 0 : numPoints + 2;
    }

    return numPoints;
  }

  updateGeometryAttributes(path, context) {
    if (context.geometrySize === 0) {
      return;
    }

    if (path && Array.isArray(path[0])) {
      for (const subPath of path) {
        const geometrySize = this.getGeometrySize(subPath);
        context.geometrySize = geometrySize;
        this.updateGeometryAttributes(subPath, context);
        context.vertexStart += geometrySize;
      }
    } else {
      this._updateSegmentTypes(path, context);

      this._updatePositions(path, context);
    }
  }

  _updateSegmentTypes(path, context) {
    const {
      segmentTypes
    } = this.attributes;
    const isPathClosed = this.isClosed(path);
    const {
      vertexStart,
      geometrySize
    } = context;
    segmentTypes.fill(0, vertexStart, vertexStart + geometrySize);

    if (isPathClosed) {
      segmentTypes[vertexStart] = INVALID;
      segmentTypes[vertexStart + geometrySize - 2] = INVALID;
    } else {
      segmentTypes[vertexStart] += START_CAP;
      segmentTypes[vertexStart + geometrySize - 2] += END_CAP;
    }

    segmentTypes[vertexStart + geometrySize - 1] = INVALID;
  }

  _updatePositions(path, context) {
    const {
      positions
    } = this.attributes;

    if (!positions) {
      return;
    }

    const {
      vertexStart,
      geometrySize
    } = context;
    const p = new Array(3);

    for (let i = vertexStart, ptIndex = 0; ptIndex < geometrySize; i++, ptIndex++) {
      this.getPointOnPath(path, ptIndex, p);
      positions[i * 3] = p[0];
      positions[i * 3 + 1] = p[1];
      positions[i * 3 + 2] = p[2];
    }
  }

  getPathLength(path) {
    return path.length / this.positionSize;
  }

  getPointOnPath(path, index, target = []) {
    const {
      positionSize
    } = this;

    if (index * positionSize >= path.length) {
      index += 1 - path.length / positionSize;
    }

    const i = index * positionSize;
    target[0] = path[i];
    target[1] = path[i + 1];
    target[2] = positionSize === 3 && path[i + 2] || 0;
    return target;
  }

  isClosed(path) {
    if (!this.normalize) {
      return this.opts.loop;
    }

    const {
      positionSize
    } = this;
    const lastPointIndex = path.length - positionSize;
    return path[0] === path[lastPointIndex] && path[1] === path[lastPointIndex + 1] && (positionSize === 2 || path[2] === path[lastPointIndex + 2]);
  }

}
//# sourceMappingURL=path-tesselator.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer-vertex.glsl.js
/* harmony default export */ const path_layer_vertex_glsl = ("#define SHADER_NAME path-layer-vertex-shader\n\nattribute vec2 positions;\n\nattribute float instanceTypes;\nattribute vec3 instanceStartPositions;\nattribute vec3 instanceEndPositions;\nattribute vec3 instanceLeftPositions;\nattribute vec3 instanceRightPositions;\nattribute vec3 instanceLeftPositions64Low;\nattribute vec3 instanceStartPositions64Low;\nattribute vec3 instanceEndPositions64Low;\nattribute vec3 instanceRightPositions64Low;\nattribute float instanceStrokeWidths;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\n\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\nuniform float jointType;\nuniform float capType;\nuniform float miterLimit;\nuniform bool billboard;\n\nuniform float opacity;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vPathPosition;\nvarying float vPathLength;\nvarying float vJointType;\n\nconst float EPSILON = 0.001;\nconst vec3 ZERO_OFFSET = vec3(0.0);\n\nfloat flipIfTrue(bool flag) {\n  return -(float(flag) * 2. - 1.);\n}\nvec3 lineJoin(\n  vec3 prevPoint, vec3 currPoint, vec3 nextPoint,\n  vec2 width\n) {\n  bool isEnd = positions.x > 0.0;\n  float sideOfPath = positions.y;\n  float isJoint = float(sideOfPath == 0.0);\n\n  vec3 deltaA3 = (currPoint - prevPoint);\n  vec3 deltaB3 = (nextPoint - currPoint);\n\n  mat3 rotationMatrix;\n  bool needsRotation = !billboard && project_needs_rotation(currPoint, rotationMatrix);\n  if (needsRotation) {\n    deltaA3 = deltaA3 * rotationMatrix;\n    deltaB3 = deltaB3 * rotationMatrix;\n  }\n  vec2 deltaA = deltaA3.xy / width;\n  vec2 deltaB = deltaB3.xy / width;\n\n  float lenA = length(deltaA);\n  float lenB = length(deltaB);\n\n  vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);\n  vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);\n\n  vec2 perpA = vec2(-dirA.y, dirA.x);\n  vec2 perpB = vec2(-dirB.y, dirB.x);\n  vec2 tangent = dirA + dirB;\n  tangent = length(tangent) > 0. ? normalize(tangent) : perpA;\n  vec2 miterVec = vec2(-tangent.y, tangent.x);\n  vec2 dir = isEnd ? dirA : dirB;\n  vec2 perp = isEnd ? perpA : perpB;\n  float L = isEnd ? lenA : lenB;\n  float sinHalfA = abs(dot(miterVec, perp));\n  float cosHalfA = abs(dot(dirA, miterVec));\n  float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);\n  float cornerPosition = sideOfPath * turnDirection;\n\n  float miterSize = 1.0 / max(sinHalfA, EPSILON);\n  miterSize = mix(\n    min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),\n    miterSize,\n    step(0.0, cornerPosition)\n  );\n\n  vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))\n    * (sideOfPath + isJoint * turnDirection);\n  bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));\n  bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));\n  bool isCap = isStartCap || isEndCap;\n  if (isCap) {\n    offsetVec = mix(perp * sideOfPath, dir * capType * 4.0 * flipIfTrue(isStartCap), isJoint);\n    vJointType = capType;\n  } else {\n    vJointType = jointType;\n  }\n  vPathLength = L;\n  vCornerOffset = offsetVec;\n  vMiterLength = dot(vCornerOffset, miterVec * turnDirection);\n  vMiterLength = isCap ? isJoint : vMiterLength;\n\n  vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);\n  vPathPosition = vec2(\n    dot(offsetFromStartOfPath, perp),\n    dot(offsetFromStartOfPath, dir)\n  );\n  geometry.uv = vPathPosition;\n\n  float isValid = step(instanceTypes, 3.5);\n  vec3 offset = vec3(offsetVec * width * isValid, 0.0);\n\n  if (needsRotation) {\n    offset = rotationMatrix * offset;\n  }\n  return currPoint + offset;\n}\nvoid clipLine(inout vec4 position, vec4 refPosition) {\n  if (position.w < EPSILON) {\n    float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);\n    position = refPosition + (position - refPosition) * r;\n  }\n}\n\nvoid main() {\n  geometry.worldPosition = instanceStartPositions;\n  geometry.worldPositionAlt = instanceEndPositions;\n  geometry.pickingColor = instancePickingColors;\n\n  vec2 widthPixels = vec2(clamp(project_size_to_pixel(instanceStrokeWidths * widthScale),\n    widthMinPixels, widthMaxPixels) / 2.0);\n  vec3 width;\n\n  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);\n\n  float isEnd = positions.x;\n\n  vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);\n  vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);\n\n  vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);\n  vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);\n\n  vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);\n  vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);\n\n  if (billboard) {\n    vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64Low, ZERO_OFFSET);\n    vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);\n    vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);\n\n    clipLine(prevPositionScreen, currPositionScreen);\n    clipLine(nextPositionScreen, currPositionScreen);\n    clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));\n\n    width = vec3(widthPixels, 0.0);\n    DECKGL_FILTER_SIZE(width, geometry);\n\n    vec3 pos = lineJoin(\n      prevPositionScreen.xyz / prevPositionScreen.w,\n      currPositionScreen.xyz / currPositionScreen.w,\n      nextPositionScreen.xyz / nextPositionScreen.w,\n      project_pixel_size_to_clipspace(width.xy)\n    );\n\n    gl_Position = vec4(pos * currPositionScreen.w, currPositionScreen.w);\n  } else {\n    prevPosition = project_position(prevPosition, prevPosition64Low);\n    currPosition = project_position(currPosition, currPosition64Low);\n    nextPosition = project_position(nextPosition, nextPosition64Low);\n\n    width = vec3(project_pixel_size(widthPixels), 0.0);\n    DECKGL_FILTER_SIZE(width, geometry);\n\n    vec4 pos = vec4(\n      lineJoin(prevPosition, currPosition, nextPosition, width.xy),\n      1.0);\n    geometry.position = pos;\n    gl_Position = project_common_position_to_clipspace(pos);\n  }\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  DECKGL_FILTER_COLOR(vColor, geometry);\n}\n");
//# sourceMappingURL=path-layer-vertex.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer-fragment.glsl.js
/* harmony default export */ const path_layer_fragment_glsl = ("#define SHADER_NAME path-layer-fragment-shader\n\nprecision highp float;\n\nuniform float miterLimit;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vPathPosition;\nvarying float vPathLength;\nvarying float vJointType;\n\nvoid main(void) {\n  geometry.uv = vPathPosition;\n\n  if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {\n    if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {\n      discard;\n    }\n    if (vJointType < 0.5 && vMiterLength > miterLimit + 1.0) {\n      discard;\n    }\n  }\n  gl_FragColor = vColor;\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n");
//# sourceMappingURL=path-layer-fragment.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer.js





const DEFAULT_COLOR = [0, 0, 0, 255];
const defaultProps = {
  widthUnits: 'meters',
  widthScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  widthMinPixels: {
    type: 'number',
    min: 0,
    value: 0
  },
  widthMaxPixels: {
    type: 'number',
    min: 0,
    value: Number.MAX_SAFE_INTEGER
  },
  jointRounded: false,
  capRounded: false,
  miterLimit: {
    type: 'number',
    min: 0,
    value: 4
  },
  billboard: false,
  _pathType: null,
  getPath: {
    type: 'accessor',
    value: object => object.path
  },
  getColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getWidth: {
    type: 'accessor',
    value: 1
  },
  rounded: {
    deprecatedFor: ['jointRounded', 'capRounded']
  }
};
const ATTRIBUTE_TRANSITION = {
  enter: (value, chunk) => {
    return chunk.length ? chunk.subarray(chunk.length - value.length) : value;
  }
};
class PathLayer extends lib_layer/* default */.Z {
  getShaders() {
    return super.getShaders({
      vs: path_layer_vertex_glsl,
      fs: path_layer_fragment_glsl,
      modules: [project32/* default */.Z, picking/* default */.Z]
    });
  }

  get wrapLongitude() {
    return false;
  }

  initializeState() {
    const noAlloc = true;
    const attributeManager = this.getAttributeManager();
    attributeManager.addInstanced({
      positions: {
        size: 3,
        vertexOffset: 1,
        type: 5130,
        fp64: this.use64bitPositions(),
        transition: ATTRIBUTE_TRANSITION,
        accessor: 'getPath',
        update: this.calculatePositions,
        noAlloc,
        shaderAttributes: {
          instanceLeftPositions: {
            vertexOffset: 0
          },
          instanceStartPositions: {
            vertexOffset: 1
          },
          instanceEndPositions: {
            vertexOffset: 2
          },
          instanceRightPositions: {
            vertexOffset: 3
          }
        }
      },
      instanceTypes: {
        size: 1,
        type: 5121,
        update: this.calculateSegmentTypes,
        noAlloc
      },
      instanceStrokeWidths: {
        size: 1,
        accessor: 'getWidth',
        transition: ATTRIBUTE_TRANSITION,
        defaultValue: 1
      },
      instanceColors: {
        size: this.props.colorFormat.length,
        type: 5121,
        normalized: true,
        accessor: 'getColor',
        transition: ATTRIBUTE_TRANSITION,
        defaultValue: DEFAULT_COLOR
      },
      instancePickingColors: {
        size: 3,
        type: 5121,
        accessor: (object, {
          index,
          target: value
        }) => this.encodePickingColor(object && object.__source ? object.__source.index : index, value)
      }
    });
    this.setState({
      pathTesselator: new PathTesselator({
        fp64: this.use64bitPositions()
      })
    });

    if (this.props.getDashArray && !this.props.extensions.length) {
      log/* default.removed */.Z.removed('getDashArray', 'PathStyleExtension')();
    }
  }

  updateState({
    oldProps,
    props,
    changeFlags
  }) {
    super.updateState({
      props,
      oldProps,
      changeFlags
    });
    const attributeManager = this.getAttributeManager();
    const geometryChanged = changeFlags.dataChanged || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPath);

    if (geometryChanged) {
      const {
        pathTesselator
      } = this.state;
      const buffers = props.data.attributes || {};
      pathTesselator.updateGeometry({
        data: props.data,
        geometryBuffer: buffers.getPath,
        buffers,
        normalize: !props._pathType,
        loop: props._pathType === 'loop',
        getGeometry: props.getPath,
        positionFormat: props.positionFormat,
        wrapLongitude: props.wrapLongitude,
        resolution: this.context.viewport.resolution,
        dataChanged: changeFlags.dataChanged
      });
      this.setState({
        numInstances: pathTesselator.instanceCount,
        startIndices: pathTesselator.vertexStarts
      });

      if (!changeFlags.dataChanged) {
        attributeManager.invalidateAll();
      }
    }

    if (changeFlags.extensionsChanged) {
      var _this$state$model;

      const {
        gl
      } = this.context;
      (_this$state$model = this.state.model) === null || _this$state$model === void 0 ? void 0 : _this$state$model.delete();
      this.state.model = this._getModel(gl);
      attributeManager.invalidateAll();
    }
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
      viewport
    } = this.context;
    const {
      jointRounded,
      capRounded,
      billboard,
      miterLimit,
      widthUnits,
      widthScale,
      widthMinPixels,
      widthMaxPixels
    } = this.props;
    const widthMultiplier = widthUnits === 'pixels' ? viewport.metersPerPixel : 1;
    this.state.model.setUniforms(uniforms).setUniforms({
      jointType: Number(jointRounded),
      capType: Number(capRounded),
      billboard,
      widthScale: widthScale * widthMultiplier,
      miterLimit,
      widthMinPixels,
      widthMaxPixels
    }).draw();
  }

  _getModel(gl) {
    const SEGMENT_INDICES = [0, 1, 2, 1, 4, 2, 1, 3, 4, 3, 5, 4];
    const SEGMENT_POSITIONS = [0, 0, 0, -1, 0, 1, 1, -1, 1, 1, 1, 0];
    return new model/* default */.Z(gl, { ...this.getShaders(),
      id: this.props.id,
      geometry: new geometry/* default */.Z({
        drawMode: 4,
        attributes: {
          indices: new Uint16Array(SEGMENT_INDICES),
          positions: {
            value: new Float32Array(SEGMENT_POSITIONS),
            size: 2
          }
        }
      }),
      isInstanced: true
    });
  }

  calculatePositions(attribute) {
    const {
      pathTesselator
    } = this.state;
    attribute.startIndices = pathTesselator.vertexStarts;
    attribute.value = pathTesselator.get('positions');
  }

  calculateSegmentTypes(attribute) {
    const {
      pathTesselator
    } = this.state;
    attribute.startIndices = pathTesselator.vertexStarts;
    attribute.value = pathTesselator.get('segmentTypes');
  }

}
PathLayer.layerName = 'PathLayer';
PathLayer.defaultProps = defaultProps;
//# sourceMappingURL=path-layer.js.map

/***/ })

}]);