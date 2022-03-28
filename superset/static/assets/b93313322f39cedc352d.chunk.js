"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[4022],{

/***/ 28569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ScatterplotLayer)
});

// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/layer.js + 11 modules
var lib_layer = __webpack_require__(95772);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/project32/project32.js
var project32 = __webpack_require__(93844);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/picking/picking.js + 1 modules
var picking = __webpack_require__(51331);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/lib/model.js + 9 modules
var model = __webpack_require__(281);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/geometry/geometry.js
var geometry = __webpack_require__(53982);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-vertex.glsl.js
/* harmony default export */ const scatterplot_layer_vertex_glsl = ("#define SHADER_NAME scatterplot-layer-vertex-shader\n\nattribute vec3 positions;\n\nattribute vec3 instancePositions;\nattribute vec3 instancePositions64Low;\nattribute float instanceRadius;\nattribute float instanceLineWidths;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform float radiusScale;\nuniform float radiusMinPixels;\nuniform float radiusMaxPixels;\nuniform float lineWidthScale;\nuniform float lineWidthMinPixels;\nuniform float lineWidthMaxPixels;\nuniform float stroked;\nuniform bool filled;\nuniform bool billboard;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\nvarying float outerRadiusPixels;\n\nvoid main(void) {\n  geometry.worldPosition = instancePositions;\n  outerRadiusPixels = clamp(\n    project_size_to_pixel(radiusScale * instanceRadius),\n    radiusMinPixels, radiusMaxPixels\n  );\n  float lineWidthPixels = clamp(\n    project_size_to_pixel(lineWidthScale * instanceLineWidths),\n    lineWidthMinPixels, lineWidthMaxPixels\n  );\n  outerRadiusPixels += stroked * lineWidthPixels / 2.0;\n  unitPosition = positions.xy;\n  geometry.uv = unitPosition;\n  geometry.pickingColor = instancePickingColors;\n\n  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;\n  \n  if (billboard) {\n    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);\n    vec3 offset = positions * outerRadiusPixels;\n    DECKGL_FILTER_SIZE(offset, geometry);\n    gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);\n  } else {\n    vec3 offset = positions * project_pixel_size(outerRadiusPixels);\n    DECKGL_FILTER_SIZE(offset, geometry);\n    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);\n  }\n\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity);\n  DECKGL_FILTER_COLOR(vFillColor, geometry);\n  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity);\n  DECKGL_FILTER_COLOR(vLineColor, geometry);\n}\n");
//# sourceMappingURL=scatterplot-layer-vertex.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-fragment.glsl.js
/* harmony default export */ const scatterplot_layer_fragment_glsl = ("#define SHADER_NAME scatterplot-layer-fragment-shader\n\nprecision highp float;\n\nuniform bool filled;\nuniform float stroked;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\nvarying float outerRadiusPixels;\n\nvoid main(void) {\n  geometry.uv = unitPosition;\n\n  float distToCenter = length(unitPosition) * outerRadiusPixels;\n  float inCircle = smoothedge(distToCenter, outerRadiusPixels);\n\n  if (inCircle == 0.0) {\n    discard;\n  }\n\n  if (stroked > 0.5) {\n    float isLine = smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter);\n    if (filled) {\n      gl_FragColor = mix(vFillColor, vLineColor, isLine);\n    } else {\n      if (isLine == 0.0) {\n        discard;\n      }\n      gl_FragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);\n    }\n  } else if (filled) {\n    gl_FragColor = vFillColor;\n  } else {\n    discard;\n  }\n\n  gl_FragColor.a *= inCircle;\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n");
//# sourceMappingURL=scatterplot-layer-fragment.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer.js




const DEFAULT_COLOR = [0, 0, 0, 255];
const defaultProps = {
  radiusUnits: 'meters',
  radiusScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  radiusMinPixels: {
    type: 'number',
    min: 0,
    value: 0
  },
  radiusMaxPixels: {
    type: 'number',
    min: 0,
    value: Number.MAX_SAFE_INTEGER
  },
  lineWidthUnits: 'meters',
  lineWidthScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  lineWidthMinPixels: {
    type: 'number',
    min: 0,
    value: 0
  },
  lineWidthMaxPixels: {
    type: 'number',
    min: 0,
    value: Number.MAX_SAFE_INTEGER
  },
  stroked: false,
  filled: true,
  billboard: false,
  getPosition: {
    type: 'accessor',
    value: x => x.position
  },
  getRadius: {
    type: 'accessor',
    value: 1
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
  strokeWidth: {
    deprecatedFor: 'getLineWidth'
  },
  outline: {
    deprecatedFor: 'stroked'
  },
  getColor: {
    deprecatedFor: ['getFillColor', 'getLineColor']
  }
};
class ScatterplotLayer extends lib_layer/* default */.Z {
  getShaders() {
    return super.getShaders({
      vs: scatterplot_layer_vertex_glsl,
      fs: scatterplot_layer_fragment_glsl,
      modules: [project32/* default */.Z, picking/* default */.Z]
    });
  }

  initializeState() {
    this.getAttributeManager().addInstanced({
      instancePositions: {
        size: 3,
        type: 5130,
        fp64: this.use64bitPositions(),
        transition: true,
        accessor: 'getPosition'
      },
      instanceRadius: {
        size: 1,
        transition: true,
        accessor: 'getRadius',
        defaultValue: 1
      },
      instanceFillColors: {
        size: this.props.colorFormat.length,
        transition: true,
        normalized: true,
        type: 5121,
        accessor: 'getFillColor',
        defaultValue: [0, 0, 0, 255]
      },
      instanceLineColors: {
        size: this.props.colorFormat.length,
        transition: true,
        normalized: true,
        type: 5121,
        accessor: 'getLineColor',
        defaultValue: [0, 0, 0, 255]
      },
      instanceLineWidths: {
        size: 1,
        transition: true,
        accessor: 'getLineWidth',
        defaultValue: 1
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
      radiusUnits,
      radiusScale,
      radiusMinPixels,
      radiusMaxPixels,
      stroked,
      filled,
      billboard,
      lineWidthUnits,
      lineWidthScale,
      lineWidthMinPixels,
      lineWidthMaxPixels
    } = this.props;
    const pointRadiusMultiplier = radiusUnits === 'pixels' ? viewport.metersPerPixel : 1;
    const lineWidthMultiplier = lineWidthUnits === 'pixels' ? viewport.metersPerPixel : 1;
    this.state.model.setUniforms(uniforms).setUniforms({
      stroked: stroked ? 1 : 0,
      filled,
      billboard,
      radiusScale: radiusScale * pointRadiusMultiplier,
      radiusMinPixels,
      radiusMaxPixels,
      lineWidthScale: lineWidthScale * lineWidthMultiplier,
      lineWidthMinPixels,
      lineWidthMaxPixels
    }).draw();
  }

  _getModel(gl) {
    const positions = [-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0];
    return new model/* default */.Z(gl, { ...this.getShaders(),
      id: this.props.id,
      geometry: new geometry/* default */.Z({
        drawMode: 6,
        vertexCount: 4,
        attributes: {
          positions: {
            size: 3,
            value: new Float32Array(positions)
          }
        }
      }),
      isInstanced: true
    });
  }

}
ScatterplotLayer.layerName = 'ScatterplotLayer';
ScatterplotLayer.defaultProps = defaultProps;
//# sourceMappingURL=scatterplot-layer.js.map

/***/ }),

/***/ 49296:
/***/ ((module) => {



module.exports = TinySDF;
module.exports["default"] = TinySDF;

var INF = 1e20;

function TinySDF(fontSize, buffer, radius, cutoff, fontFamily, fontWeight) {
    this.fontSize = fontSize || 24;
    this.buffer = buffer === undefined ? 3 : buffer;
    this.cutoff = cutoff || 0.25;
    this.fontFamily = fontFamily || 'sans-serif';
    this.fontWeight = fontWeight || 'normal';
    this.radius = radius || 8;

    // For backwards compatibility, we honor the implicit contract that the
    // size of the returned bitmap will be fontSize + buffer * 2
    var size = this.size = this.fontSize + this.buffer * 2;
    // Glyphs may be slightly larger than their fontSize. The canvas already
    // has buffer space, but create extra buffer space in the output grid for the
    // "halo" to extend into (if metric extraction is enabled)
    var gridSize = size + this.buffer * 2;

    this.canvas = document.createElement('canvas');
    this.canvas.width = this.canvas.height = size;

    this.ctx = this.canvas.getContext('2d');
    this.ctx.font = this.fontWeight + ' ' + this.fontSize + 'px ' + this.fontFamily;

    this.ctx.textAlign = 'left'; // Necessary so that RTL text doesn't have different alignment
    this.ctx.fillStyle = 'black';

    // temporary arrays for the distance transform
    this.gridOuter = new Float64Array(gridSize * gridSize);
    this.gridInner = new Float64Array(gridSize * gridSize);
    this.f = new Float64Array(gridSize);
    this.z = new Float64Array(gridSize + 1);
    this.v = new Uint16Array(gridSize);

    this.useMetrics = this.ctx.measureText('A').actualBoundingBoxLeft !== undefined;

    // hack around https://bugzilla.mozilla.org/show_bug.cgi?id=737852
    this.middle = Math.round((size / 2) * (navigator.userAgent.indexOf('Gecko/') >= 0 ? 1.2 : 1));
}

function prepareGrids(imgData, width, height, glyphWidth, glyphHeight, gridOuter, gridInner) {
    // Initialize grids outside the glyph range to alpha 0
    gridOuter.fill(INF, 0, width * height);
    gridInner.fill(0, 0, width * height);

    var offset = (width - glyphWidth) / 2; // This is zero if we're not extracting metrics

    for (var y = 0; y < glyphHeight; y++) {
        for (var x = 0; x < glyphWidth; x++) {
            var j = (y + offset) * width + x + offset;
            var a = imgData.data[4 * (y * glyphWidth + x) + 3] / 255; // alpha value
            if (a === 1) {
                gridOuter[j] = 0;
                gridInner[j] = INF;
            } else if (a === 0) {
                gridOuter[j] = INF;
                gridInner[j] = 0;
            } else {
                var b = Math.max(0, 0.5 - a);
                var c = Math.max(0, a - 0.5);
                gridOuter[j] = b * b;
                gridInner[j] = c * c;
            }
        }
    }
}

function extractAlpha(alphaChannel, width, height, gridOuter, gridInner, radius, cutoff) {
    for (var i = 0; i < width * height; i++) {
        var d = Math.sqrt(gridOuter[i]) - Math.sqrt(gridInner[i]);
        alphaChannel[i] = Math.round(255 - 255 * (d / radius + cutoff));
    }
}

TinySDF.prototype._draw = function (char, getMetrics) {
    var textMetrics = this.ctx.measureText(char);
    // Older browsers only expose the glyph width
    // This is enough for basic layout with all glyphs using the same fixed size
    var advance = textMetrics.width;

    var doubleBuffer = 2 * this.buffer;
    var width, glyphWidth, height, glyphHeight, top;

    var imgTop, imgLeft, baselinePosition;
    // If the browser supports bounding box metrics, we can generate a smaller
    // SDF. This is a significant performance win.
    if (getMetrics && this.useMetrics) {
        // The integer/pixel part of the top alignment is encoded in metrics.top
        // The remainder is implicitly encoded in the rasterization
        top = Math.floor(textMetrics.actualBoundingBoxAscent);
        baselinePosition = this.buffer + Math.ceil(textMetrics.actualBoundingBoxAscent);
        imgTop = this.buffer;
        imgLeft = this.buffer;

        // If the glyph overflows the canvas size, it will be clipped at the
        // bottom/right
        glyphWidth = Math.min(this.size,
            Math.ceil(textMetrics.actualBoundingBoxRight - textMetrics.actualBoundingBoxLeft));
        glyphHeight = Math.min(this.size - imgTop,
            Math.ceil(textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent));

        width = glyphWidth + doubleBuffer;
        height = glyphHeight + doubleBuffer;
        this.ctx.textBaseline = 'alphabetic';
    } else {
        width = glyphWidth = this.size;
        height = glyphHeight = this.size;
        // 19 points is an approximation of the "cap height" ascent from alphabetic
        // baseline (even though actual drawing is from middle baseline, we can
        // use the approximation because every glyph fills the em box)
        top = 19 * this.fontSize / 24;
        imgTop = imgLeft = 0;
        baselinePosition = this.middle;
        this.ctx.textBaseline = 'middle';
    }

    var imgData;
    if (glyphWidth && glyphHeight) {
        this.ctx.clearRect(imgLeft, imgTop, glyphWidth, glyphHeight);
        this.ctx.fillText(char, this.buffer, baselinePosition);
        imgData = this.ctx.getImageData(imgLeft, imgTop, glyphWidth, glyphHeight);
    }

    var alphaChannel = new Uint8ClampedArray(width * height);

    prepareGrids(imgData, width, height, glyphWidth, glyphHeight, this.gridOuter, this.gridInner);

    edt(this.gridOuter, width, height, this.f, this.v, this.z);
    edt(this.gridInner, width, height, this.f, this.v, this.z);

    extractAlpha(alphaChannel, width, height, this.gridOuter, this.gridInner, this.radius, this.cutoff);

    return {
        data: alphaChannel,
        metrics: {
            width: glyphWidth,
            height: glyphHeight,
            sdfWidth: width,
            sdfHeight: height,
            top: top,
            left: 0,
            advance: advance
        }
    };
};

TinySDF.prototype.draw = function (char) {
    return this._draw(char, false).data;
};

TinySDF.prototype.drawWithMetrics = function (char) {
    return this._draw(char, true);
};

// 2D Euclidean squared distance transform by Felzenszwalb & Huttenlocher https://cs.brown.edu/~pff/papers/dt-final.pdf
function edt(data, width, height, f, v, z) {
    for (var x = 0; x < width; x++) edt1d(data, x, width, height, f, v, z);
    for (var y = 0; y < height; y++) edt1d(data, y * width, 1, width, f, v, z);
}

// 1D squared distance transform
function edt1d(grid, offset, stride, length, f, v, z) {
    var q, k, s, r;
    v[0] = 0;
    z[0] = -INF;
    z[1] = INF;

    for (q = 0; q < length; q++) f[q] = grid[offset + q * stride];

    for (q = 1, k = 0, s = 0; q < length; q++) {
        do {
            r = v[k];
            s = (f[q] - f[r] + q * q - r * r) / (q - r) / 2;
        } while (s <= z[k] && --k > -1);

        k++;
        v[k] = q;
        z[k] = s;
        z[k + 1] = INF;
    }

    for (q = 0, k = 0; q < length; q++) {
        while (z[k + 1] < q) k++;
        r = v[k];
        grid[offset + q * stride] = f[r] + (q - r) * (q - r);
    }
}


/***/ }),

/***/ 24022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Geojson),
  "getLayer": () => (/* binding */ getLayer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/composite-layer.js
var composite_layer = __webpack_require__(78918);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/log.js
var log = __webpack_require__(80744);
// EXTERNAL MODULE: ./node_modules/@deck.gl/layers/dist/esm/utils.js
var utils = __webpack_require__(98452);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/geojson-layer/geojson-binary.js
const GEOM_TYPES = (/* unused pure expression or super */ null && (['points', 'lines', 'polygons']));
function binaryToFeatureForAccesor(data, index) {
  if (!data) {
    return null;
  }

  const featureIndex = 'startIndices' in data ? data.startIndices[index] : index;
  const geometryIndex = data.featureIds.value[featureIndex];

  if (featureIndex !== -1) {
    return getPropertiesForIndex(data, geometryIndex, featureIndex);
  }

  return null;
}

function getPropertiesForIndex(data, propertiesIndex, numericPropsIndex) {
  const feature = {
    properties: { ...data.properties[propertiesIndex]
    }
  };

  for (const prop in data.numericProps) {
    feature.properties[prop] = data.numericProps[prop].value[numericPropsIndex];
  }

  return feature;
}

function findIndexBinary(data, uniqueIdProperty, featureId) {
  if (!data) {
    return -1;
  }

  for (const gt of GEOM_TYPES) {
    const index = findIndexByType(data, uniqueIdProperty, featureId, gt);

    if (index !== -1) {
      return index;
    }
  }

  return -1;
}

function findIndexByType(data, uniqueIdProperty, featureId, geomType) {
  if (!data) {
    return -1;
  }

  if (!(geomType in data) || !data[geomType].positions.value.length) return -1;
  let index = -1;

  if (data[geomType].numericProps[uniqueIdProperty]) {
    index = data[geomType].numericProps[uniqueIdProperty].value.indexOf(featureId);
  } else {
    const propertyIndex = data[geomType].properties.findIndex(elem => elem[uniqueIdProperty] === featureId);
    index = data[geomType].featureIds.value.indexOf(propertyIndex);
  }

  return index;
}

function calculatePickingColors(geojsonBinary, encodePickingColor) {
  const pickingColors = {
    points: null,
    lines: null,
    polygons: null
  };

  for (const key in pickingColors) {
    const featureIds = geojsonBinary[key].globalFeatureIds.value;
    pickingColors[key] = new Uint8ClampedArray(featureIds.length * 3);
    const pickingColor = [];

    for (let i = 0; i < featureIds.length; i++) {
      encodePickingColor(featureIds[i], pickingColor);
      pickingColors[key][i * 3 + 0] = pickingColor[0];
      pickingColors[key][i * 3 + 1] = pickingColor[1];
      pickingColors[key][i * 3 + 2] = pickingColor[2];
    }
  }

  return pickingColors;
}
//# sourceMappingURL=geojson-binary.js.map
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/layer.js + 11 modules
var lib_layer = __webpack_require__(95772);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/project32/project32.js
var project32 = __webpack_require__(93844);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/shaderlib/picking/picking.js + 1 modules
var picking = __webpack_require__(51331);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/lib/model.js + 9 modules
var model = __webpack_require__(281);
// EXTERNAL MODULE: ./node_modules/@luma.gl/engine/dist/esm/geometry/geometry.js
var geometry = __webpack_require__(53982);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/icon-layer/icon-layer-vertex.glsl.js
/* harmony default export */ const icon_layer_vertex_glsl = ("#define SHADER_NAME icon-layer-vertex-shader\n\nattribute vec2 positions;\n\nattribute vec3 instancePositions;\nattribute vec3 instancePositions64Low;\nattribute float instanceSizes;\nattribute float instanceAngles;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\nattribute vec4 instanceIconFrames;\nattribute float instanceColorModes;\nattribute vec2 instanceOffsets;\nattribute vec2 instancePixelOffset;\n\nuniform float sizeScale;\nuniform vec2 iconsTextureDim;\nuniform float sizeMinPixels;\nuniform float sizeMaxPixels;\nuniform bool billboard;\n\nvarying float vColorMode;\nvarying vec4 vColor;\nvarying vec2 vTextureCoords;\nvarying vec2 uv;\n\nvec2 rotate_by_angle(vec2 vertex, float angle) {\n  float angle_radian = angle * PI / 180.0;\n  float cos_angle = cos(angle_radian);\n  float sin_angle = sin(angle_radian);\n  mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);\n  return rotationMatrix * vertex;\n}\n\nvoid main(void) {\n  geometry.worldPosition = instancePositions;\n  geometry.uv = positions;\n  geometry.pickingColor = instancePickingColors;\n  uv = positions;\n\n  vec2 iconSize = instanceIconFrames.zw;\n  float sizePixels = clamp(\n    project_size_to_pixel(instanceSizes * sizeScale), \n    sizeMinPixels, sizeMaxPixels\n  );\n  float instanceScale = iconSize.y == 0.0 ? 0.0 : sizePixels / iconSize.y;\n  vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;\n  pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;\n  pixelOffset += instancePixelOffset;\n  pixelOffset.y *= -1.0;\n\n  if (billboard)  {\n    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);\n    vec3 offset = vec3(pixelOffset, 0.0);\n    DECKGL_FILTER_SIZE(offset, geometry);\n    gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);\n\n  } else {\n    vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);\n    DECKGL_FILTER_SIZE(offset_common, geometry);\n    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position); \n  }\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n\n  vTextureCoords = mix(\n    instanceIconFrames.xy,\n    instanceIconFrames.xy + iconSize,\n    (positions.xy + 1.0) / 2.0\n  ) / iconsTextureDim;\n\n  vColor = instanceColors;\n  DECKGL_FILTER_COLOR(vColor, geometry);\n\n  vColorMode = instanceColorModes;\n}\n");
//# sourceMappingURL=icon-layer-vertex.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/icon-layer/icon-layer-fragment.glsl.js
/* harmony default export */ const icon_layer_fragment_glsl = ("#define SHADER_NAME icon-layer-fragment-shader\n\nprecision highp float;\n\nuniform float opacity;\nuniform sampler2D iconsTexture;\nuniform float alphaCutoff;\n\nvarying float vColorMode;\nvarying vec4 vColor;\nvarying vec2 vTextureCoords;\nvarying vec2 uv;\n\nvoid main(void) {\n  geometry.uv = uv;\n\n  vec4 texColor = texture2D(iconsTexture, vTextureCoords);\n  vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);\n  float a = texColor.a * opacity * vColor.a;\n\n  if (a < alphaCutoff) {\n    discard;\n  }\n\n  gl_FragColor = vec4(color, a);\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n");
//# sourceMappingURL=icon-layer-fragment.glsl.js.map
// EXTERNAL MODULE: ./node_modules/@luma.gl/webgl/dist/esm/webgl-utils/texture-utils.js + 2 modules
var texture_utils = __webpack_require__(95432);
// EXTERNAL MODULE: ./node_modules/@luma.gl/webgl/dist/esm/classes/copy-and-blit.js + 1 modules
var copy_and_blit = __webpack_require__(1953);
// EXTERNAL MODULE: ./node_modules/@luma.gl/webgl/dist/esm/classes/texture-2d.js + 1 modules
var texture_2d = __webpack_require__(4912);
// EXTERNAL MODULE: ./node_modules/@loaders.gl/images/dist/esm/image-loader.js + 11 modules
var image_loader = __webpack_require__(98949);
// EXTERNAL MODULE: ./node_modules/@loaders.gl/core/dist/esm/lib/api/load.js + 23 modules
var load = __webpack_require__(73838);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/iterable-utils.js
var iterable_utils = __webpack_require__(38550);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/icon-layer/icon-manager.js




const DEFAULT_CANVAS_WIDTH = 1024;
const DEFAULT_BUFFER = 4;

const noop = () => {};

const DEFAULT_TEXTURE_PARAMETERS = {
  [10241]: 9987,
  [10240]: 9729,
  [10242]: 33071,
  [10243]: 33071
};

function nextPowOfTwo(number) {
  return Math.pow(2, Math.ceil(Math.log2(number)));
}

function resizeImage(ctx, imageData, width, height) {
  if (width === imageData.width && height === imageData.height) {
    return imageData;
  }

  ctx.canvas.height = height;
  ctx.canvas.width = width;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(imageData, 0, 0, imageData.width, imageData.height, 0, 0, width, height);
  return ctx.canvas;
}

function getIconId(icon) {
  return icon && (icon.id || icon.url);
}

function resizeTexture(gl, texture, width, height) {
  const oldWidth = texture.width;
  const oldHeight = texture.height;
  const newTexture = (0,texture_utils/* cloneTextureFrom */.h)(texture, {
    width,
    height
  });
  (0,copy_and_blit/* copyToTexture */.Lv)(texture, newTexture, {
    targetY: 0,
    width: oldWidth,
    height: oldHeight
  });
  texture.delete();
  return newTexture;
}

function buildRowMapping(mapping, columns, yOffset) {
  for (let i = 0; i < columns.length; i++) {
    const {
      icon,
      xOffset
    } = columns[i];
    const id = getIconId(icon);
    mapping[id] = { ...icon,
      x: xOffset,
      y: yOffset
    };
  }
}

function buildMapping({
  icons,
  buffer,
  mapping = {},
  xOffset = 0,
  yOffset = 0,
  rowHeight = 0,
  canvasWidth
}) {
  let columns = [];

  for (let i = 0; i < icons.length; i++) {
    const icon = icons[i];
    const id = getIconId(icon);

    if (!mapping[id]) {
      const {
        height,
        width
      } = icon;

      if (xOffset + width + buffer > canvasWidth) {
        buildRowMapping(mapping, columns, yOffset);
        xOffset = 0;
        yOffset = rowHeight + yOffset + buffer;
        rowHeight = 0;
        columns = [];
      }

      columns.push({
        icon,
        xOffset
      });
      xOffset = xOffset + width + buffer;
      rowHeight = Math.max(rowHeight, height);
    }
  }

  if (columns.length > 0) {
    buildRowMapping(mapping, columns, yOffset);
  }

  return {
    mapping,
    rowHeight,
    xOffset,
    yOffset,
    canvasWidth,
    canvasHeight: nextPowOfTwo(rowHeight + yOffset + buffer)
  };
}
function getDiffIcons(data, getIcon, cachedIcons) {
  if (!data || !getIcon) {
    return null;
  }

  cachedIcons = cachedIcons || {};
  const icons = {};
  const {
    iterable,
    objectInfo
  } = (0,iterable_utils/* createIterable */.jB)(data);

  for (const object of iterable) {
    objectInfo.index++;
    const icon = getIcon(object, objectInfo);
    const id = getIconId(icon);

    if (!icon) {
      throw new Error('Icon is missing.');
    }

    if (!icon.url) {
      throw new Error('Icon url is missing.');
    }

    if (!icons[id] && (!cachedIcons[id] || icon.url !== cachedIcons[id].url)) {
      icons[id] = { ...icon,
        source: object,
        sourceIndex: objectInfo.index
      };
    }
  }

  return icons;
}
class IconManager {
  constructor(gl, {
    onUpdate = noop,
    onError = noop
  }) {
    this.gl = gl;
    this.onUpdate = onUpdate;
    this.onError = onError;
    this._loadOptions = null;
    this._getIcon = null;
    this._texture = null;
    this._externalTexture = null;
    this._mapping = {};
    this._pendingCount = 0;
    this._autoPacking = false;
    this._xOffset = 0;
    this._yOffset = 0;
    this._rowHeight = 0;
    this._buffer = DEFAULT_BUFFER;
    this._canvasWidth = DEFAULT_CANVAS_WIDTH;
    this._canvasHeight = 0;
    this._canvas = null;
  }

  finalize() {
    var _this$_texture;

    (_this$_texture = this._texture) === null || _this$_texture === void 0 ? void 0 : _this$_texture.delete();
  }

  getTexture() {
    return this._texture || this._externalTexture;
  }

  getIconMapping(icon) {
    const id = this._autoPacking ? getIconId(icon) : icon;
    return this._mapping[id] || {};
  }

  setProps({
    loadOptions,
    autoPacking,
    iconAtlas,
    iconMapping,
    data,
    getIcon
  }) {
    if (loadOptions) {
      this._loadOptions = loadOptions;
    }

    if (autoPacking !== undefined) {
      this._autoPacking = autoPacking;
    }

    if (getIcon) {
      this._getIcon = getIcon;
    }

    if (iconMapping) {
      this._mapping = iconMapping;
    }

    if (iconAtlas) {
      this._updateIconAtlas(iconAtlas);
    }

    if (this._autoPacking && (data || getIcon) && typeof document !== 'undefined') {
      this._canvas = this._canvas || document.createElement('canvas');

      this._updateAutoPacking(data);
    }
  }

  get isLoaded() {
    return this._pendingCount === 0;
  }

  _updateIconAtlas(iconAtlas) {
    var _this$_texture2;

    (_this$_texture2 = this._texture) === null || _this$_texture2 === void 0 ? void 0 : _this$_texture2.delete();
    this._texture = null;
    this._externalTexture = iconAtlas;
    this.onUpdate();
  }

  _updateAutoPacking(data) {
    const icons = Object.values(getDiffIcons(data, this._getIcon, this._mapping) || {});

    if (icons.length > 0) {
      const {
        mapping,
        xOffset,
        yOffset,
        rowHeight,
        canvasHeight
      } = buildMapping({
        icons,
        buffer: this._buffer,
        canvasWidth: this._canvasWidth,
        mapping: this._mapping,
        rowHeight: this._rowHeight,
        xOffset: this._xOffset,
        yOffset: this._yOffset
      });
      this._rowHeight = rowHeight;
      this._mapping = mapping;
      this._xOffset = xOffset;
      this._yOffset = yOffset;
      this._canvasHeight = canvasHeight;

      if (!this._texture) {
        this._texture = new texture_2d/* default */.Z(this.gl, {
          width: this._canvasWidth,
          height: this._canvasHeight,
          parameters: DEFAULT_TEXTURE_PARAMETERS
        });
      }

      if (this._texture.height !== this._canvasHeight) {
        this._texture = resizeTexture(this.gl, this._texture, this._canvasWidth, this._canvasHeight);
      }

      this.onUpdate();

      this._loadIcons(icons);
    }
  }

  _loadIcons(icons) {
    const ctx = this._canvas.getContext('2d');

    for (const icon of icons) {
      this._pendingCount++;
      (0,load/* load */.z)(icon.url, image_loader/* ImageLoader */.S, this._loadOptions).then(imageData => {
        const id = getIconId(icon);
        const {
          x,
          y,
          width,
          height
        } = this._mapping[id];
        const data = resizeImage(ctx, imageData, width, height);

        this._texture.setSubImageData({
          data,
          x,
          y,
          width,
          height
        });

        this._texture.generateMipmap();

        this.onUpdate();
      }).catch(error => {
        this.onError({
          url: icon.url,
          source: icon.source,
          sourceIndex: icon.sourceIndex,
          loadOptions: this._loadOptions,
          error
        });
      }).finally(() => {
        this._pendingCount--;
      });
    }
  }

}
//# sourceMappingURL=icon-manager.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/icon-layer/icon-layer.js





const DEFAULT_COLOR = [0, 0, 0, 255];
const defaultProps = {
  iconAtlas: {
    type: 'image',
    value: null,
    async: true
  },
  iconMapping: {
    type: 'object',
    value: {},
    async: true
  },
  sizeScale: {
    type: 'number',
    value: 1,
    min: 0
  },
  billboard: true,
  sizeUnits: 'pixels',
  sizeMinPixels: {
    type: 'number',
    min: 0,
    value: 0
  },
  sizeMaxPixels: {
    type: 'number',
    min: 0,
    value: Number.MAX_SAFE_INTEGER
  },
  alphaCutoff: {
    type: 'number',
    value: 0.05,
    min: 0,
    max: 1
  },
  getPosition: {
    type: 'accessor',
    value: x => x.position
  },
  getIcon: {
    type: 'accessor',
    value: x => x.icon
  },
  getColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getSize: {
    type: 'accessor',
    value: 1
  },
  getAngle: {
    type: 'accessor',
    value: 0
  },
  getPixelOffset: {
    type: 'accessor',
    value: [0, 0]
  },
  onIconError: {
    type: 'function',
    value: null,
    compare: false,
    optional: true
  }
};
class IconLayer extends lib_layer/* default */.Z {
  getShaders() {
    return super.getShaders({
      vs: icon_layer_vertex_glsl,
      fs: icon_layer_fragment_glsl,
      modules: [project32/* default */.Z, picking/* default */.Z]
    });
  }

  initializeState() {
    this.state = {
      iconManager: new IconManager(this.context.gl, {
        onUpdate: this._onUpdate.bind(this),
        onError: this._onError.bind(this)
      })
    };
    const attributeManager = this.getAttributeManager();
    attributeManager.addInstanced({
      instancePositions: {
        size: 3,
        type: 5130,
        fp64: this.use64bitPositions(),
        transition: true,
        accessor: 'getPosition'
      },
      instanceSizes: {
        size: 1,
        transition: true,
        accessor: 'getSize',
        defaultValue: 1
      },
      instanceOffsets: {
        size: 2,
        accessor: 'getIcon',
        transform: this.getInstanceOffset
      },
      instanceIconFrames: {
        size: 4,
        accessor: 'getIcon',
        transform: this.getInstanceIconFrame
      },
      instanceColorModes: {
        size: 1,
        type: 5121,
        accessor: 'getIcon',
        transform: this.getInstanceColorMode
      },
      instanceColors: {
        size: this.props.colorFormat.length,
        type: 5121,
        normalized: true,
        transition: true,
        accessor: 'getColor',
        defaultValue: DEFAULT_COLOR
      },
      instanceAngles: {
        size: 1,
        transition: true,
        accessor: 'getAngle'
      },
      instancePixelOffset: {
        size: 2,
        transition: true,
        accessor: 'getPixelOffset'
      }
    });
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
    const {
      iconAtlas,
      iconMapping,
      data,
      getIcon
    } = props;
    const {
      iconManager
    } = this.state;
    iconManager.setProps({
      loadOptions: props.loadOptions
    });
    let iconMappingChanged = false;
    const prePacked = iconAtlas || this.internalState.isAsyncPropLoading('iconAtlas');

    if (prePacked) {
      if (oldProps.iconAtlas !== props.iconAtlas) {
        iconManager.setProps({
          iconAtlas,
          autoPacking: false
        });
      }

      if (oldProps.iconMapping !== props.iconMapping) {
        iconManager.setProps({
          iconMapping
        });
        iconMappingChanged = true;
      }
    } else {
      iconManager.setProps({
        autoPacking: true
      });
    }

    if (changeFlags.dataChanged || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getIcon)) {
      iconManager.setProps({
        data,
        getIcon
      });
    }

    if (iconMappingChanged) {
      attributeManager.invalidate('instanceOffsets');
      attributeManager.invalidate('instanceIconFrames');
      attributeManager.invalidate('instanceColorModes');
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

  get isLoaded() {
    return super.isLoaded && this.state.iconManager.isLoaded;
  }

  finalizeState() {
    super.finalizeState();
    this.state.iconManager.finalize();
  }

  draw({
    uniforms
  }) {
    const {
      sizeScale,
      sizeMinPixels,
      sizeMaxPixels,
      sizeUnits,
      billboard,
      alphaCutoff
    } = this.props;
    const {
      iconManager
    } = this.state;
    const {
      viewport
    } = this.context;
    const iconsTexture = iconManager.getTexture();

    if (iconsTexture) {
      this.state.model.setUniforms(uniforms).setUniforms({
        iconsTexture,
        iconsTextureDim: [iconsTexture.width, iconsTexture.height],
        sizeScale: sizeScale * (sizeUnits === 'pixels' ? viewport.metersPerPixel : 1),
        sizeMinPixels,
        sizeMaxPixels,
        billboard,
        alphaCutoff
      }).draw();
    }
  }

  _getModel(gl) {
    const positions = [-1, -1, -1, 1, 1, 1, 1, -1];
    return new model/* default */.Z(gl, { ...this.getShaders(),
      id: this.props.id,
      geometry: new geometry/* default */.Z({
        drawMode: 6,
        attributes: {
          positions: {
            size: 2,
            value: new Float32Array(positions)
          }
        }
      }),
      isInstanced: true
    });
  }

  _onUpdate() {
    this.setNeedsRedraw();
  }

  _onError(evt) {
    const {
      onIconError
    } = this.getCurrentLayer().props;

    if (onIconError) {
      onIconError(evt);
    } else {
      log/* default.error */.Z.error(evt.error)();
    }
  }

  getInstanceOffset(icon) {
    const rect = this.state.iconManager.getIconMapping(icon);
    return [rect.width / 2 - rect.anchorX || 0, rect.height / 2 - rect.anchorY || 0];
  }

  getInstanceColorMode(icon) {
    const mapping = this.state.iconManager.getIconMapping(icon);
    return mapping.mask ? 1 : 0;
  }

  getInstanceIconFrame(icon) {
    const rect = this.state.iconManager.getIconMapping(icon);
    return [rect.x || 0, rect.y || 0, rect.width || 0, rect.height || 0];
  }

}
IconLayer.layerName = 'IconLayer';
IconLayer.defaultProps = defaultProps;
//# sourceMappingURL=icon-layer.js.map
// EXTERNAL MODULE: ./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer.js + 2 modules
var scatterplot_layer = __webpack_require__(28569);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/text-layer/multi-icon-layer/multi-icon-layer-fragment.glsl.js
/* harmony default export */ const multi_icon_layer_fragment_glsl = ("#define SHADER_NAME multi-icon-layer-fragment-shader\n\nprecision highp float;\n\nuniform float opacity;\nuniform sampler2D iconsTexture;\nuniform float gamma;\nuniform bool sdf;\nuniform float alphaCutoff;\nuniform float buffer;\nuniform float outlineBuffer;\nuniform vec4 outlineColor;\n\nvarying vec4 vColor;\nvarying vec2 vTextureCoords;\nvarying vec2 uv;\n\nvoid main(void) {\n  geometry.uv = uv;\n\n  if (!picking_uActive) {\n    float alpha = texture2D(iconsTexture, vTextureCoords).a;\n    vec4 color = vColor;\n    if (sdf) {\n      float distance = alpha;\n      alpha = smoothstep(buffer - gamma, buffer + gamma, distance);\n\n      if (outlineBuffer > 0.0) {\n        float inFill = alpha;\n        float inBorder = smoothstep(outlineBuffer - gamma, outlineBuffer + gamma, distance);\n        color = mix(outlineColor, vColor, inFill);\n        alpha = inBorder;\n      }\n    }\n    float a = alpha * color.a;\n    \n    if (a < alphaCutoff) {\n      discard;\n    }\n\n    gl_FragColor = vec4(color.rgb, a * opacity);\n  }\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n");
//# sourceMappingURL=multi-icon-layer-fragment.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/text-layer/multi-icon-layer/multi-icon-layer.js



const multi_icon_layer_DEFAULT_BUFFER = 192.0 / 256;
const EMPTY_ARRAY = [];
const multi_icon_layer_defaultProps = {
  getIconOffsets: {
    type: 'accessor',
    value: x => x.offsets
  },
  alphaCutoff: 0.001,
  smoothing: 0.1,
  outlineWidth: 0,
  outlineColor: {
    type: 'color',
    value: [0, 0, 0, 255]
  }
};
class MultiIconLayer extends IconLayer {
  getShaders() {
    return { ...super.getShaders(),
      fs: multi_icon_layer_fragment_glsl
    };
  }

  initializeState() {
    super.initializeState();
    const attributeManager = this.getAttributeManager();
    attributeManager.addInstanced({
      instanceOffsets: {
        size: 2,
        accessor: 'getIconOffsets'
      },
      instancePickingColors: {
        type: 5121,
        size: 3,
        accessor: (object, {
          index,
          target: value
        }) => this.encodePickingColor(index, value)
      }
    });
  }

  updateState(params) {
    super.updateState(params);
    const {
      props,
      oldProps
    } = params;
    let {
      outlineColor
    } = props;

    if (outlineColor !== oldProps.outlineColor) {
      outlineColor = outlineColor.map(x => x / 255);
      outlineColor[3] = Number.isFinite(outlineColor[3]) ? outlineColor[3] : 1;
      this.setState({
        outlineColor
      });
    }

    if (!props.sdf && props.outlineWidth) {
      log/* default.warn */.Z.warn("".concat(this.id, ": fontSettings.sdf is required to render outline"))();
    }
  }

  draw(params) {
    const {
      sdf,
      smoothing,
      outlineWidth
    } = this.props;
    const {
      outlineColor
    } = this.state;
    params.uniforms = { ...params.uniforms,
      buffer: multi_icon_layer_DEFAULT_BUFFER,
      outlineBuffer: outlineWidth ? Math.max(smoothing, multi_icon_layer_DEFAULT_BUFFER * (1 - outlineWidth)) : -1,
      gamma: smoothing,
      sdf: Boolean(sdf),
      outlineColor
    };
    super.draw(params);
  }

  getInstanceOffset(icons) {
    return icons ? Array.from(icons).map(icon => super.getInstanceOffset(icon)) : EMPTY_ARRAY;
  }

  getInstanceColorMode(icons) {
    return 1;
  }

  getInstanceIconFrame(icons) {
    return icons ? Array.from(icons).map(icon => super.getInstanceIconFrame(icon)) : EMPTY_ARRAY;
  }

}
MultiIconLayer.layerName = 'MultiIconLayer';
MultiIconLayer.defaultProps = multi_icon_layer_defaultProps;
//# sourceMappingURL=multi-icon-layer.js.map
// EXTERNAL MODULE: ./node_modules/@mapbox/tiny-sdf/index.js
var tiny_sdf = __webpack_require__(49296);
var tiny_sdf_default = /*#__PURE__*/__webpack_require__.n(tiny_sdf);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/text-layer/utils.js

const MISSING_CHAR_WIDTH = 32;
const SINGLE_LINE = [];
function utils_nextPowOfTwo(number) {
  return Math.pow(2, Math.ceil(Math.log2(number)));
}
function utils_buildMapping({
  characterSet,
  getFontWidth,
  fontHeight,
  buffer,
  maxCanvasWidth,
  mapping = {},
  xOffset = 0,
  yOffset = 0
}) {
  let row = 0;
  let x = xOffset;
  let i = 0;

  for (const char of characterSet) {
    if (!mapping[char]) {
      const width = getFontWidth(char, i++);

      if (x + width + buffer * 2 > maxCanvasWidth) {
        x = 0;
        row++;
      }

      mapping[char] = {
        x: x + buffer,
        y: yOffset + row * (fontHeight + buffer * 2) + buffer,
        width,
        height: fontHeight
      };
      x += width + buffer * 2;
    }
  }

  const rowHeight = fontHeight + buffer * 2;
  return {
    mapping,
    xOffset: x,
    yOffset: yOffset + row * rowHeight,
    canvasHeight: utils_nextPowOfTwo(yOffset + (row + 1) * rowHeight)
  };
}

function getTextWidth(text, startIndex, endIndex, mapping) {
  let width = 0;

  for (let i = startIndex; i < endIndex; i++) {
    const character = text[i];
    let frameWidth = null;
    const frame = mapping && mapping[character];

    if (frame) {
      frameWidth = frame.width;
    }

    width += frameWidth;
  }

  return width;
}

function breakAll(text, startIndex, endIndex, maxWidth, iconMapping, target) {
  let rowStartCharIndex = startIndex;
  let rowOffsetLeft = 0;

  for (let i = startIndex; i < endIndex; i++) {
    const textWidth = getTextWidth(text, i, i + 1, iconMapping);

    if (rowOffsetLeft + textWidth > maxWidth) {
      if (rowStartCharIndex < i) {
        target.push(i);
      }

      rowStartCharIndex = i;
      rowOffsetLeft = 0;
    }

    rowOffsetLeft += textWidth;
  }

  return rowOffsetLeft;
}

function breakWord(text, startIndex, endIndex, maxWidth, iconMapping, target) {
  let rowStartCharIndex = startIndex;
  let groupStartCharIndex = startIndex;
  let groupEndCharIndex = startIndex;
  let rowOffsetLeft = 0;

  for (let i = startIndex; i < endIndex; i++) {
    if (text[i] === ' ') {
      groupEndCharIndex = i + 1;
    } else if (text[i + 1] === ' ' || i + 1 === endIndex) {
      groupEndCharIndex = i + 1;
    }

    if (groupEndCharIndex > groupStartCharIndex) {
      let groupWidth = getTextWidth(text, groupStartCharIndex, groupEndCharIndex, iconMapping);

      if (rowOffsetLeft + groupWidth > maxWidth) {
        if (rowStartCharIndex < groupStartCharIndex) {
          target.push(groupStartCharIndex);
          rowStartCharIndex = groupStartCharIndex;
          rowOffsetLeft = 0;
        }

        if (groupWidth > maxWidth) {
          groupWidth = breakAll(text, groupStartCharIndex, groupEndCharIndex, maxWidth, iconMapping, target);
          rowStartCharIndex = target[target.length - 1];
        }
      }

      groupStartCharIndex = groupEndCharIndex;
      rowOffsetLeft += groupWidth;
    }
  }

  return rowOffsetLeft;
}

function autoWrapping(text, wordBreak, maxWidth, iconMapping, startIndex = 0, endIndex) {
  if (endIndex === undefined) {
    endIndex = text.length;
  }

  const result = [];

  if (wordBreak === 'break-all') {
    breakAll(text, startIndex, endIndex, maxWidth, iconMapping, result);
  } else {
    breakWord(text, startIndex, endIndex, maxWidth, iconMapping, result);
  }

  return result;
}

function transformRow(line, startIndex, endIndex, iconMapping, leftOffsets, rowSize) {
  let x = 0;
  let rowHeight = 0;

  for (let i = startIndex; i < endIndex; i++) {
    const character = line[i];
    const frame = iconMapping[character];

    if (frame) {
      if (!rowHeight) {
        rowHeight = frame.height;
      }

      leftOffsets[i] = x + frame.width / 2;
      x += frame.width;
    } else {
      log/* default.warn */.Z.warn("Missing character: ".concat(character, " (").concat(character.codePointAt(0), ")"))();
      leftOffsets[i] = x;
      x += MISSING_CHAR_WIDTH;
    }
  }

  rowSize[0] = x;
  rowSize[1] = rowHeight;
}

function transformParagraph(paragraph, lineHeight, wordBreak, maxWidth, iconMapping) {
  paragraph = Array.from(paragraph);
  const numCharacters = paragraph.length;
  const x = new Array(numCharacters);
  const y = new Array(numCharacters);
  const rowWidth = new Array(numCharacters);
  const autoWrappingEnabled = (wordBreak === 'break-word' || wordBreak === 'break-all') && isFinite(maxWidth) && maxWidth > 0;
  const size = [0, 0];
  const rowSize = [];
  let rowOffsetTop = 0;
  let lineStartIndex = 0;
  let lineEndIndex = 0;

  for (let i = 0; i <= numCharacters; i++) {
    const char = paragraph[i];

    if (char === '\n' || i === numCharacters) {
      lineEndIndex = i;
    }

    if (lineEndIndex > lineStartIndex) {
      const rows = autoWrappingEnabled ? autoWrapping(paragraph, wordBreak, maxWidth, iconMapping, lineStartIndex, lineEndIndex) : SINGLE_LINE;

      for (let rowIndex = 0; rowIndex <= rows.length; rowIndex++) {
        const rowStart = rowIndex === 0 ? lineStartIndex : rows[rowIndex - 1];
        const rowEnd = rowIndex < rows.length ? rows[rowIndex] : lineEndIndex;
        transformRow(paragraph, rowStart, rowEnd, iconMapping, x, rowSize);

        for (let j = rowStart; j < rowEnd; j++) {
          y[j] = rowOffsetTop + rowSize[1] / 2;
          rowWidth[j] = rowSize[0];
        }

        rowOffsetTop = rowOffsetTop + rowSize[1] * lineHeight;
        size[0] = Math.max(size[0], rowSize[0]);
      }

      lineStartIndex = lineEndIndex;
    }

    if (char === '\n') {
      x[lineStartIndex] = 0;
      y[lineStartIndex] = 0;
      rowWidth[lineStartIndex] = 0;
      lineStartIndex++;
    }
  }

  size[1] = rowOffsetTop;
  return {
    x,
    y,
    rowWidth,
    size
  };
}
function getTextFromBuffer({
  value,
  length,
  stride,
  offset,
  startIndices,
  characterSet
}) {
  const bytesPerElement = value.BYTES_PER_ELEMENT;
  const elementStride = stride ? stride / bytesPerElement : 1;
  const elementOffset = offset ? offset / bytesPerElement : 0;
  const characterCount = startIndices[length] || Math.ceil((value.length - elementOffset) / elementStride);
  const autoCharacterSet = characterSet && new Set();
  const texts = new Array(length);
  let codes = value;

  if (elementStride > 1 || elementOffset > 0) {
    codes = new value.constructor(characterCount);

    for (let i = 0; i < characterCount; i++) {
      codes[i] = value[i * elementStride + elementOffset];
    }
  }

  for (let index = 0; index < length; index++) {
    const startIndex = startIndices[index];
    const endIndex = startIndices[index + 1] || characterCount;
    const codesAtIndex = codes.subarray(startIndex, endIndex);
    texts[index] = String.fromCodePoint.apply(null, codesAtIndex);

    if (autoCharacterSet) {
      codesAtIndex.forEach(autoCharacterSet.add, autoCharacterSet);
    }
  }

  if (autoCharacterSet) {
    for (const charCode of autoCharacterSet) {
      characterSet.add(String.fromCodePoint(charCode));
    }
  }

  return {
    texts,
    characterCount
  };
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/text-layer/lru-cache.js
class LRUCache {
  constructor(limit = 5) {
    this.limit = limit;
    this.clear();
  }

  clear() {
    this._cache = {};
    this._order = [];
  }

  get(key) {
    const value = this._cache[key];

    if (value) {
      this._deleteOrder(key);

      this._appendOrder(key);
    }

    return value;
  }

  set(key, value) {
    if (!this._cache[key]) {
      if (Object.keys(this._cache).length === this.limit) {
        this.delete(this._order[0]);
      }

      this._cache[key] = value;

      this._appendOrder(key);
    } else {
      this.delete(key);
      this._cache[key] = value;

      this._appendOrder(key);
    }
  }

  delete(key) {
    const value = this._cache[key];

    if (value) {
      this._deleteCache(key);

      this._deleteOrder(key);
    }
  }

  _deleteCache(key) {
    delete this._cache[key];
  }

  _deleteOrder(key) {
    const index = this._order.findIndex(o => o === key);

    if (index >= 0) {
      this._order.splice(index, 1);
    }
  }

  _appendOrder(key) {
    this._order.push(key);
  }

}
//# sourceMappingURL=lru-cache.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/text-layer/font-atlas-manager.js




function getDefaultCharacterSet() {
  const charSet = [];

  for (let i = 32; i < 128; i++) {
    charSet.push(String.fromCharCode(i));
  }

  return charSet;
}

const DEFAULT_CHAR_SET = getDefaultCharacterSet();
const DEFAULT_FONT_FAMILY = 'Monaco, monospace';
const DEFAULT_FONT_WEIGHT = 'normal';
const DEFAULT_FONT_SIZE = 64;
const font_atlas_manager_DEFAULT_BUFFER = 4;
const DEFAULT_CUTOFF = 0.25;
const DEFAULT_RADIUS = 12;
const MAX_CANVAS_WIDTH = 1024;
const BASELINE_SCALE = 0.9;
const HEIGHT_SCALE = 1.2;
const CACHE_LIMIT = 3;
const cache = new LRUCache(CACHE_LIMIT);
const VALID_PROPS = ['fontFamily', 'fontWeight', 'characterSet', 'fontSize', 'sdf', 'buffer', 'cutoff', 'radius'];

function getNewChars(key, characterSet) {
  const cachedFontAtlas = cache.get(key);

  if (!cachedFontAtlas) {
    return characterSet;
  }

  const newChars = [];
  const cachedMapping = cachedFontAtlas.mapping;
  let cachedCharSet = Object.keys(cachedMapping);
  cachedCharSet = new Set(cachedCharSet);
  let charSet = characterSet;

  if (charSet instanceof Array) {
    charSet = new Set(charSet);
  }

  charSet.forEach(char => {
    if (!cachedCharSet.has(char)) {
      newChars.push(char);
    }
  });
  return newChars;
}

function populateAlphaChannel(alphaChannel, imageData) {
  for (let i = 0; i < alphaChannel.length; i++) {
    imageData.data[4 * i + 3] = alphaChannel[i];
  }
}

function setTextStyle(ctx, fontFamily, fontSize, fontWeight) {
  ctx.font = "".concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'baseline';
  ctx.textAlign = 'left';
}

class FontAtlasManager {
  constructor() {
    this.props = {
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: DEFAULT_FONT_WEIGHT,
      characterSet: DEFAULT_CHAR_SET,
      fontSize: DEFAULT_FONT_SIZE,
      buffer: font_atlas_manager_DEFAULT_BUFFER,
      sdf: false,
      cutoff: DEFAULT_CUTOFF,
      radius: DEFAULT_RADIUS
    };
    this._key = null;
    this._atlas = null;
  }

  get texture() {
    return this._atlas;
  }

  get mapping() {
    return this._atlas && this._atlas.mapping;
  }

  get scale() {
    return HEIGHT_SCALE;
  }

  setProps(props = {}) {
    VALID_PROPS.forEach(prop => {
      if (prop in props) {
        this.props[prop] = props[prop];
      }
    });
    const oldKey = this._key;
    this._key = this._getKey();
    const charSet = getNewChars(this._key, this.props.characterSet);
    const cachedFontAtlas = cache.get(this._key);

    if (cachedFontAtlas && charSet.length === 0) {
      if (this._key !== oldKey) {
        this._atlas = cachedFontAtlas;
      }

      return;
    }

    const fontAtlas = this._generateFontAtlas(this._key, charSet, cachedFontAtlas);

    this._atlas = fontAtlas;
    cache.set(this._key, fontAtlas);
  }

  _generateFontAtlas(key, characterSet, cachedFontAtlas) {
    const {
      fontFamily,
      fontWeight,
      fontSize,
      buffer,
      sdf,
      radius,
      cutoff
    } = this.props;
    let canvas = cachedFontAtlas && cachedFontAtlas.data;

    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.width = MAX_CANVAS_WIDTH;
    }

    const ctx = canvas.getContext('2d');
    setTextStyle(ctx, fontFamily, fontSize, fontWeight);
    const {
      mapping,
      canvasHeight,
      xOffset,
      yOffset
    } = utils_buildMapping({
      getFontWidth: char => ctx.measureText(char).width,
      fontHeight: fontSize * HEIGHT_SCALE,
      buffer,
      characterSet,
      maxCanvasWidth: MAX_CANVAS_WIDTH,
      ...(cachedFontAtlas && {
        mapping: cachedFontAtlas.mapping,
        xOffset: cachedFontAtlas.xOffset,
        yOffset: cachedFontAtlas.yOffset
      })
    });

    if (canvas.height !== canvasHeight) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      canvas.height = canvasHeight;
      ctx.putImageData(imageData, 0, 0);
    }

    setTextStyle(ctx, fontFamily, fontSize, fontWeight);

    if (sdf) {
      const tinySDF = new (tiny_sdf_default())(fontSize, buffer, radius, cutoff, fontFamily, fontWeight);
      const imageData = ctx.getImageData(0, 0, tinySDF.size, tinySDF.size);

      for (const char of characterSet) {
        populateAlphaChannel(tinySDF.draw(char), imageData);
        ctx.putImageData(imageData, mapping[char].x - buffer, mapping[char].y + buffer);
      }
    } else {
      for (const char of characterSet) {
        ctx.fillText(char, mapping[char].x, mapping[char].y + fontSize * BASELINE_SCALE);
      }
    }

    return {
      xOffset,
      yOffset,
      mapping,
      data: canvas,
      width: canvas.width,
      height: canvas.height
    };
  }

  _getKey() {
    const {
      fontFamily,
      fontWeight,
      fontSize,
      buffer,
      sdf,
      radius,
      cutoff
    } = this.props;

    if (sdf) {
      return "".concat(fontFamily, " ").concat(fontWeight, " ").concat(fontSize, " ").concat(buffer, " ").concat(radius, " ").concat(cutoff);
    }

    return "".concat(fontFamily, " ").concat(fontWeight, " ").concat(fontSize, " ").concat(buffer);
  }

}
//# sourceMappingURL=font-atlas-manager.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/text-layer/text-background-layer/text-background-layer-vertex.glsl.js
/* harmony default export */ const text_background_layer_vertex_glsl = ("#define SHADER_NAME text-background-layer-vertex-shader\n\nattribute vec2 positions;\n\nattribute vec3 instancePositions;\nattribute vec3 instancePositions64Low;\nattribute vec4 instanceRects;\nattribute float instanceSizes;\nattribute float instanceAngles;\nattribute vec2 instancePixelOffsets;\nattribute float instanceLineWidths;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute vec3 instancePickingColors;\n\nuniform bool billboard;\nuniform float opacity;\nuniform float sizeScale;\nuniform float sizeMinPixels;\nuniform float sizeMaxPixels;\nuniform vec4 padding;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying float vLineWidth;\nvarying vec2 uv;\nvarying vec2 dimensions;\n\nvec2 rotate_by_angle(vec2 vertex, float angle) {\n  float angle_radian = radians(angle);\n  float cos_angle = cos(angle_radian);\n  float sin_angle = sin(angle_radian);\n  mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);\n  return rotationMatrix * vertex;\n}\n\nvoid main(void) {\n  geometry.worldPosition = instancePositions;\n  geometry.uv = positions;\n  geometry.pickingColor = instancePickingColors;\n  uv = positions;\n  vLineWidth = instanceLineWidths;\n  float sizePixels = clamp(\n    project_size_to_pixel(instanceSizes * sizeScale),\n    sizeMinPixels, sizeMaxPixels\n  );\n\n  dimensions = instanceRects.zw * sizePixels + padding.xy + padding.zw;\n\n  vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * sizePixels + mix(-padding.xy, padding.zw, positions);\n  pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);\n  pixelOffset += instancePixelOffsets;\n  pixelOffset.y *= -1.0;\n\n  if (billboard)  {\n    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);\n    vec3 offset = vec3(pixelOffset, 0.0);\n    DECKGL_FILTER_SIZE(offset, geometry);\n    gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);\n  } else {\n    vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);\n    DECKGL_FILTER_SIZE(offset_common, geometry);\n    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);\n  }\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity);\n  DECKGL_FILTER_COLOR(vFillColor, geometry);\n  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity);\n  DECKGL_FILTER_COLOR(vLineColor, geometry);\n}\n");
//# sourceMappingURL=text-background-layer-vertex.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/text-layer/text-background-layer/text-background-layer-fragment.glsl.js
/* harmony default export */ const text_background_layer_fragment_glsl = ("#define SHADER_NAME text-background-layer-fragment-shader\n\nprecision highp float;\n\nuniform bool stroked;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying float vLineWidth;\nvarying vec2 uv;\nvarying vec2 dimensions;\n\nvoid main(void) {\n  geometry.uv = uv;\n\n  vec2 pixelPosition = uv * dimensions;\n  if (stroked) {\n    float distToEdge = min(\n      min(pixelPosition.x, dimensions.x - pixelPosition.x),\n      min(pixelPosition.y, dimensions.y - pixelPosition.y)\n    );\n    float isBorder = smoothedge(distToEdge, vLineWidth);\n    gl_FragColor = mix(vFillColor, vLineColor, isBorder);\n  } else {\n    gl_FragColor = vFillColor;\n  }\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n");
//# sourceMappingURL=text-background-layer-fragment.glsl.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/text-layer/text-background-layer/text-background-layer.js




const text_background_layer_defaultProps = {
  billboard: true,
  sizeScale: 1,
  sizeUnits: 'pixels',
  sizeMinPixels: 0,
  sizeMaxPixels: Number.MAX_SAFE_INTEGER,
  padding: {
    type: 'array',
    value: [0, 0, 0, 0]
  },
  getPosition: {
    type: 'accessor',
    value: x => x.position
  },
  getSize: {
    type: 'accessor',
    value: 1
  },
  getAngle: {
    type: 'accessor',
    value: 0
  },
  getPixelOffset: {
    type: 'accessor',
    value: [0, 0]
  },
  getBoundingRect: {
    type: 'accessor',
    value: [0, 0, 0, 0]
  },
  getFillColor: {
    type: 'accessor',
    value: [0, 0, 0, 255]
  },
  getLineColor: {
    type: 'accessor',
    value: [0, 0, 0, 255]
  },
  getLineWidth: {
    type: 'accessor',
    value: 1
  }
};
class TextBackgroundLayer extends lib_layer/* default */.Z {
  getShaders() {
    return super.getShaders({
      vs: text_background_layer_vertex_glsl,
      fs: text_background_layer_fragment_glsl,
      modules: [project32/* default */.Z, picking/* default */.Z]
    });
  }

  initializeState() {
    this.getAttributeManager().addInstanced({
      instancePositions: {
        size: 3,
        type: 5130,
        fp64: this.use64bitPositions(),
        transition: true,
        accessor: 'getPosition'
      },
      instanceSizes: {
        size: 1,
        transition: true,
        accessor: 'getSize',
        defaultValue: 1
      },
      instanceAngles: {
        size: 1,
        transition: true,
        accessor: 'getAngle'
      },
      instanceRects: {
        size: 4,
        accessor: 'getBoundingRect'
      },
      instancePixelOffsets: {
        size: 2,
        transition: true,
        accessor: 'getPixelOffset'
      },
      instanceFillColors: {
        size: 4,
        transition: true,
        normalized: true,
        type: 5121,
        accessor: 'getFillColor',
        defaultValue: [0, 0, 0, 255]
      },
      instanceLineColors: {
        size: 4,
        transition: true,
        normalized: true,
        type: 5121,
        accessor: 'getLineColor',
        defaultValue: [0, 0, 0, 255]
      },
      instanceLineWidths: {
        size: 1,
        transition: true,
        accessor: 'getLineWidth',
        defaultValue: 1
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
      billboard,
      sizeScale,
      sizeUnits,
      sizeMinPixels,
      sizeMaxPixels,
      getLineWidth
    } = this.props;
    let {
      padding
    } = this.props;
    const sizeScaleMultiplier = sizeUnits === 'pixels' ? viewport.metersPerPixel : 1;

    if (padding.length < 4) {
      padding = [padding[0], padding[1], padding[0], padding[1]];
    }

    this.state.model.setUniforms(uniforms).setUniforms({
      billboard,
      stroked: Boolean(getLineWidth),
      padding,
      sizeScale: sizeScale * sizeScaleMultiplier,
      sizeMinPixels,
      sizeMaxPixels
    }).draw();
  }

  _getModel(gl) {
    const positions = [0, 0, 1, 0, 1, 1, 0, 1];
    return new model/* default */.Z(gl, { ...this.getShaders(),
      id: this.props.id,
      geometry: new geometry/* default */.Z({
        drawMode: 6,
        vertexCount: 4,
        attributes: {
          positions: {
            size: 2,
            value: new Float32Array(positions)
          }
        }
      }),
      isInstanced: true
    });
  }

}
TextBackgroundLayer.layerName = 'TextBackgroundLayer';
TextBackgroundLayer.defaultProps = text_background_layer_defaultProps;
//# sourceMappingURL=text-background-layer.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/text-layer/text-layer.js





const DEFAULT_FONT_SETTINGS = {
  fontSize: DEFAULT_FONT_SIZE,
  buffer: font_atlas_manager_DEFAULT_BUFFER,
  sdf: false,
  radius: DEFAULT_RADIUS,
  cutoff: DEFAULT_CUTOFF,
  smoothing: 0.1
};
const TEXT_ANCHOR = {
  start: 1,
  middle: 0,
  end: -1
};
const ALIGNMENT_BASELINE = {
  top: 1,
  center: 0,
  bottom: -1
};
const text_layer_DEFAULT_COLOR = [0, 0, 0, 255];
const DEFAULT_LINE_HEIGHT = 1.0;
const FONT_SETTINGS_PROPS = ['fontSize', 'buffer', 'sdf', 'radius', 'cutoff'];
const text_layer_defaultProps = {
  billboard: true,
  sizeScale: 1,
  sizeUnits: 'pixels',
  sizeMinPixels: 0,
  sizeMaxPixels: Number.MAX_SAFE_INTEGER,
  background: false,
  getBackgroundColor: {
    type: 'accessor',
    value: [255, 255, 255, 255]
  },
  getBorderColor: {
    type: 'accessor',
    value: text_layer_DEFAULT_COLOR
  },
  getBorderWidth: {
    type: 'accessor',
    value: 0
  },
  backgroundPadding: {
    type: 'array',
    value: [0, 0, 0, 0]
  },
  characterSet: {
    type: 'object',
    value: DEFAULT_CHAR_SET
  },
  fontFamily: DEFAULT_FONT_FAMILY,
  fontWeight: DEFAULT_FONT_WEIGHT,
  lineHeight: DEFAULT_LINE_HEIGHT,
  outlineWidth: {
    type: 'number',
    value: 0,
    min: 0
  },
  outlineColor: {
    type: 'color',
    value: text_layer_DEFAULT_COLOR
  },
  fontSettings: {},
  wordBreak: 'break-word',
  maxWidth: {
    type: 'number',
    value: -1
  },
  getText: {
    type: 'accessor',
    value: x => x.text
  },
  getPosition: {
    type: 'accessor',
    value: x => x.position
  },
  getColor: {
    type: 'accessor',
    value: text_layer_DEFAULT_COLOR
  },
  getSize: {
    type: 'accessor',
    value: 32
  },
  getAngle: {
    type: 'accessor',
    value: 0
  },
  getTextAnchor: {
    type: 'accessor',
    value: 'middle'
  },
  getAlignmentBaseline: {
    type: 'accessor',
    value: 'center'
  },
  getPixelOffset: {
    type: 'accessor',
    value: [0, 0]
  },
  backgroundColor: {
    deprecatedFor: ['background', 'getBackgroundColor']
  }
};
class TextLayer extends composite_layer/* default */.Z {
  initializeState() {
    this.state = {
      styleVersion: 0,
      fontAtlasManager: new FontAtlasManager()
    };
  }

  updateState({
    props,
    oldProps,
    changeFlags
  }) {
    const textChanged = changeFlags.dataChanged || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getText);
    const oldCharacterSet = this.state.characterSet;

    if (textChanged) {
      this._updateText();
    }

    const fontChanged = oldCharacterSet !== this.state.characterSet || this._fontChanged(oldProps, props);

    if (fontChanged) {
      this._updateFontAtlas(oldProps, props);
    }

    const styleChanged = fontChanged || props.lineHeight !== oldProps.lineHeight || props.wordBreak !== oldProps.wordBreak || props.maxWidth !== oldProps.maxWidth;

    if (styleChanged) {
      this.setState({
        styleVersion: this.state.styleVersion + 1
      });
    }
  }

  getPickingInfo({
    info
  }) {
    info.object = info.index >= 0 ? this.props.data[info.index] : null;
    return info;
  }

  _updateFontAtlas(oldProps, props) {
    const {
      fontSettings,
      fontFamily,
      fontWeight
    } = props;
    const {
      fontAtlasManager,
      characterSet
    } = this.state;
    fontAtlasManager.setProps({ ...DEFAULT_FONT_SETTINGS,
      ...fontSettings,
      characterSet,
      fontFamily,
      fontWeight
    });
  }

  _fontChanged(oldProps, props) {
    if (oldProps.fontFamily !== props.fontFamily || oldProps.fontWeight !== props.fontWeight) {
      return true;
    }

    if (oldProps.fontSettings === props.fontSettings) {
      return false;
    }

    const oldFontSettings = oldProps.fontSettings || {};
    const fontSettings = props.fontSettings || {};
    return FONT_SETTINGS_PROPS.some(prop => oldFontSettings[prop] !== fontSettings[prop]);
  }

  _updateText() {
    const {
      data,
      characterSet
    } = this.props;
    const textBuffer = data.attributes && data.attributes.getText;
    let {
      getText
    } = this.props;
    let {
      startIndices
    } = data;
    let numInstances;
    const autoCharacterSet = characterSet === 'auto' && new Set();

    if (textBuffer && startIndices) {
      const {
        texts,
        characterCount
      } = getTextFromBuffer({ ...(ArrayBuffer.isView(textBuffer) ? {
          value: textBuffer
        } : textBuffer),
        length: data.length,
        startIndices,
        characterSet: autoCharacterSet
      });
      numInstances = characterCount;

      getText = (_, {
        index
      }) => texts[index];
    } else {
      const {
        iterable,
        objectInfo
      } = (0,iterable_utils/* createIterable */.jB)(data);
      startIndices = [0];
      numInstances = 0;

      for (const object of iterable) {
        objectInfo.index++;
        const text = Array.from(getText(object, objectInfo) || '');

        if (autoCharacterSet) {
          text.forEach(autoCharacterSet.add, autoCharacterSet);
        }

        numInstances += text.length;
        startIndices.push(numInstances);
      }
    }

    this.setState({
      getText,
      startIndices,
      numInstances,
      characterSet: autoCharacterSet || characterSet
    });
  }

  getBoundingRect(object, objectInfo) {
    const iconMapping = this.state.fontAtlasManager.mapping;
    const {
      getText
    } = this.state;
    const {
      wordBreak,
      maxWidth,
      lineHeight,
      getTextAnchor,
      getAlignmentBaseline
    } = this.props;
    const paragraph = getText(object, objectInfo) || '';
    const {
      size: [width, height]
    } = transformParagraph(paragraph, lineHeight, wordBreak, maxWidth, iconMapping);
    const anchorX = TEXT_ANCHOR[typeof getTextAnchor === 'function' ? getTextAnchor(object, objectInfo) : getTextAnchor];
    const anchorY = ALIGNMENT_BASELINE[typeof getAlignmentBaseline === 'function' ? getAlignmentBaseline(object, objectInfo) : getAlignmentBaseline];
    return [(anchorX - 1) * width / 2, (anchorY - 1) * height / 2, width, height];
  }

  getIconOffsets(object, objectInfo) {
    const iconMapping = this.state.fontAtlasManager.mapping;
    const {
      getText
    } = this.state;
    const {
      wordBreak,
      maxWidth,
      lineHeight,
      getTextAnchor,
      getAlignmentBaseline
    } = this.props;
    const paragraph = getText(object, objectInfo) || '';
    const {
      x,
      y,
      rowWidth,
      size: [width, height]
    } = transformParagraph(paragraph, lineHeight, wordBreak, maxWidth, iconMapping);
    const anchorX = TEXT_ANCHOR[typeof getTextAnchor === 'function' ? getTextAnchor(object, objectInfo) : getTextAnchor];
    const anchorY = ALIGNMENT_BASELINE[typeof getAlignmentBaseline === 'function' ? getAlignmentBaseline(object, objectInfo) : getAlignmentBaseline];
    const numCharacters = x.length;
    const offsets = new Array(numCharacters * 2);
    let index = 0;

    for (let i = 0; i < numCharacters; i++) {
      const rowOffset = (1 - anchorX) * (width - rowWidth[i]) / 2;
      offsets[index++] = (anchorX - 1) * width / 2 + rowOffset + x[i];
      offsets[index++] = (anchorY - 1) * height / 2 + y[i];
    }

    return offsets;
  }

  renderLayers() {
    const {
      startIndices,
      numInstances,
      getText,
      fontAtlasManager: {
        scale,
        texture,
        mapping
      },
      styleVersion
    } = this.state;
    const {
      data,
      _dataDiff,
      getPosition,
      getColor,
      getSize,
      getAngle,
      getPixelOffset,
      getBackgroundColor,
      getBorderColor,
      getBorderWidth,
      backgroundPadding,
      background,
      billboard,
      fontSettings,
      outlineWidth,
      outlineColor,
      sizeScale,
      sizeUnits,
      sizeMinPixels,
      sizeMaxPixels,
      transitions,
      updateTriggers
    } = this.props;
    const CharactersLayerClass = this.getSubLayerClass('characters', MultiIconLayer);
    const BackgroundLayerClass = this.getSubLayerClass('background', TextBackgroundLayer);
    return [background && new BackgroundLayerClass({
      getFillColor: getBackgroundColor,
      getLineColor: getBorderColor,
      getLineWidth: getBorderWidth,
      padding: backgroundPadding,
      getPosition,
      getSize,
      getAngle,
      getPixelOffset,
      billboard,
      sizeScale: sizeScale / this.state.fontAtlasManager.props.fontSize,
      sizeUnits,
      sizeMinPixels,
      sizeMaxPixels,
      transitions: transitions && {
        getPosition: transitions.getPosition,
        getAngle: transitions.getAngle,
        getSize: transitions.getSize,
        getFillColor: transitions.getBackgroundColor,
        getLineColor: transitions.getBorderColor,
        getLineWidth: transitions.getBorderWidth,
        getPixelOffset: transitions.getPixelOffset
      }
    }, this.getSubLayerProps({
      id: 'background',
      updateTriggers: {
        getPosition: updateTriggers.getPosition,
        getAngle: updateTriggers.getAngle,
        getSize: updateTriggers.getSize,
        getFillColor: updateTriggers.getBackgroundColor,
        getLineColor: updateTriggers.getBorderColor,
        getLineWidth: updateTriggers.getBorderWidth,
        getPixelOffset: updateTriggers.getPixelOffset,
        getBoundingRect: {
          getText: updateTriggers.getText,
          getTextAnchor: updateTriggers.getTextAnchor,
          getAlignmentBaseline: updateTriggers.getAlignmentBaseline,
          styleVersion
        }
      }
    }), {
      data: data.attributes ? {
        length: data.length,
        attributes: data.attributes.background || {}
      } : data,
      _dataDiff,
      autoHighlight: false,
      getBoundingRect: this.getBoundingRect.bind(this)
    }), new CharactersLayerClass({
      sdf: fontSettings.sdf,
      smoothing: Number.isFinite(fontSettings.smoothing) ? fontSettings.smoothing : DEFAULT_FONT_SETTINGS.smoothing,
      outlineWidth,
      outlineColor,
      iconAtlas: texture,
      iconMapping: mapping,
      getPosition,
      getColor,
      getSize,
      getAngle,
      getPixelOffset,
      billboard,
      sizeScale: sizeScale * scale,
      sizeUnits,
      sizeMinPixels: sizeMinPixels * scale,
      sizeMaxPixels: sizeMaxPixels * scale,
      transitions: transitions && {
        getPosition: transitions.getPosition,
        getAngle: transitions.getAngle,
        getColor: transitions.getColor,
        getSize: transitions.getSize,
        getPixelOffset: transitions.getPixelOffset
      }
    }, this.getSubLayerProps({
      id: 'characters',
      updateTriggers: {
        getIcon: updateTriggers.getText,
        getPosition: updateTriggers.getPosition,
        getAngle: updateTriggers.getAngle,
        getColor: updateTriggers.getColor,
        getSize: updateTriggers.getSize,
        getPixelOffset: updateTriggers.getPixelOffset,
        getIconOffsets: {
          getText: updateTriggers.getText,
          getTextAnchor: updateTriggers.getTextAnchor,
          getAlignmentBaseline: updateTriggers.getAlignmentBaseline,
          styleVersion
        }
      }
    }), {
      data,
      _dataDiff,
      startIndices,
      numInstances,
      getIconOffsets: this.getIconOffsets.bind(this),
      getIcon: getText
    })];
  }

}
TextLayer.layerName = 'TextLayer';
TextLayer.defaultProps = text_layer_defaultProps;
//# sourceMappingURL=text-layer.js.map
// EXTERNAL MODULE: ./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer.js + 4 modules
var path_layer = __webpack_require__(62112);
// EXTERNAL MODULE: ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer.js + 5 modules
var solid_polygon_layer = __webpack_require__(71435);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/geojson-layer/sub-layer-map.js





const POINT_LAYER = {
  circle: {
    type: scatterplot_layer/* default */.Z,
    props: {
      filled: 'filled',
      stroked: 'stroked',
      lineWidthMaxPixels: 'lineWidthMaxPixels',
      lineWidthMinPixels: 'lineWidthMinPixels',
      lineWidthScale: 'lineWidthScale',
      lineWidthUnits: 'lineWidthUnits',
      pointRadiusMaxPixels: 'radiusMaxPixels',
      pointRadiusMinPixels: 'radiusMinPixels',
      pointRadiusScale: 'radiusScale',
      pointRadiusUnits: 'radiusUnits',
      getFillColor: 'getFillColor',
      getLineColor: 'getLineColor',
      getLineWidth: 'getLineWidth',
      getPointRadius: 'getRadius'
    }
  },
  icon: {
    type: IconLayer,
    props: {
      iconAtlas: 'iconAtlas',
      iconMapping: 'iconMapping',
      iconSizeMaxPixels: 'sizeMaxPixels',
      iconSizeMinPixels: 'sizeMinPixels',
      iconSizeScale: 'sizeScale',
      iconSizeUnits: 'sizeUnits',
      getIcon: 'getIcon',
      getIconAngle: 'getAngle',
      getIconColor: 'getColor',
      getIconPixelOffset: 'getPixelOffset',
      getIconSize: 'getSize'
    }
  },
  text: {
    type: TextLayer,
    props: {
      textSizeMaxPixels: 'sizeMaxPixels',
      textSizeMinPixels: 'sizeMinPixels',
      textSizeScale: 'sizeScale',
      textSizeUnits: 'sizeUnits',
      textBackground: 'background',
      textBackgroundPadding: 'backgroundPadding',
      textFontFamily: 'fontFamily',
      textFontWeight: 'fontWeight',
      textLineHeight: 'lineHeight',
      textMaxWidth: 'maxWidth',
      textOutlineColor: 'outlineColor',
      textOutlineWidth: 'outlineWidth',
      textWordBreak: 'wordBreak',
      textCharacterSet: 'characterSet',
      getText: 'getText',
      getTextAngle: 'getAngle',
      getTextColor: 'getColor',
      getTextPixelOffset: 'getPixelOffset',
      getTextSize: 'getSize',
      getTextAnchor: 'getTextAnchor',
      getTextAlignmentBaseline: 'getAlignmentBaseline',
      getTextBackgroundColor: 'getBackgroundColor',
      getTextBorderColor: 'getBorderColor',
      getTextBorderWidth: 'getBorderWidth'
    }
  }
};
const LINE_LAYER = {
  type: path_layer/* default */.Z,
  props: {
    lineWidthUnits: 'widthUnits',
    lineWidthScale: 'widthScale',
    lineWidthMinPixels: 'widthMinPixels',
    lineWidthMaxPixels: 'widthMaxPixels',
    lineJointRounded: 'jointRounded',
    lineCapRounded: 'capRounded',
    lineMiterLimit: 'miterLimit',
    getLineColor: 'getColor',
    getLineWidth: 'getWidth'
  }
};
const POLYGON_LAYER = {
  type: solid_polygon_layer/* default */.Z,
  props: {
    extruded: 'extruded',
    filled: 'filled',
    wireframe: 'wireframe',
    elevationScale: 'elevationScale',
    material: 'material',
    getElevation: 'getElevation',
    getFillColor: 'getFillColor',
    getLineColor: 'getLineColor'
  }
};
function getDefaultProps({
  type,
  props
}) {
  const result = {};

  for (const key in props) {
    result[key] = type.defaultProps[props[key]];
  }

  return result;
}
function forwardProps(layer, mapping) {
  const {
    transitions,
    updateTriggers
  } = layer.props;
  const result = {
    updateTriggers: {},
    transitions: transitions && {
      getPosition: transitions.geometry
    }
  };

  for (const sourceKey in mapping) {
    const targetKey = mapping[sourceKey];
    let value = layer.props[sourceKey];

    if (sourceKey.startsWith('get')) {
      value = layer.getSubLayerAccessor(value);
      result.updateTriggers[targetKey] = updateTriggers[sourceKey];

      if (transitions) {
        result.transitions[targetKey] = transitions[sourceKey];
      }
    }

    result[targetKey] = value;
  }

  return result;
}
//# sourceMappingURL=sub-layer-map.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/geojson-layer/geojson.js

function getGeojsonFeatures(geojson) {
  if (Array.isArray(geojson)) {
    return geojson;
  }

  log/* default.assert */.Z.assert(geojson.type, 'GeoJSON does not have type');

  switch (geojson.type) {
    case 'Feature':
      return [geojson];

    case 'FeatureCollection':
      log/* default.assert */.Z.assert(Array.isArray(geojson.features), 'GeoJSON does not have features array');
      return geojson.features;

    default:
      return [{
        geometry: geojson
      }];
  }
}
function separateGeojsonFeatures(features, wrapFeature, dataRange = {}) {
  const separated = {
    pointFeatures: [],
    lineFeatures: [],
    polygonFeatures: [],
    polygonOutlineFeatures: []
  };
  const {
    startRow = 0,
    endRow = features.length
  } = dataRange;

  for (let featureIndex = startRow; featureIndex < endRow; featureIndex++) {
    const feature = features[featureIndex];
    log/* default.assert */.Z.assert(feature && feature.geometry, 'GeoJSON does not have geometry');
    const {
      geometry
    } = feature;

    if (geometry.type === 'GeometryCollection') {
      log/* default.assert */.Z.assert(Array.isArray(geometry.geometries), 'GeoJSON does not have geometries array');
      const {
        geometries
      } = geometry;

      for (let i = 0; i < geometries.length; i++) {
        const subGeometry = geometries[i];
        separateGeometry(subGeometry, separated, wrapFeature, feature, featureIndex);
      }
    } else {
      separateGeometry(geometry, separated, wrapFeature, feature, featureIndex);
    }
  }

  return separated;
}

function separateGeometry(geometry, separated, wrapFeature, sourceFeature, sourceFeatureIndex) {
  const {
    type,
    coordinates
  } = geometry;
  const {
    pointFeatures,
    lineFeatures,
    polygonFeatures,
    polygonOutlineFeatures
  } = separated;

  if (!validateGeometry(type, coordinates)) {
    log/* default.warn */.Z.warn("".concat(type, " coordinates are malformed"))();
    return;
  }

  switch (type) {
    case 'Point':
      pointFeatures.push(wrapFeature({
        geometry
      }, sourceFeature, sourceFeatureIndex));
      break;

    case 'MultiPoint':
      coordinates.forEach(point => {
        pointFeatures.push(wrapFeature({
          geometry: {
            type: 'Point',
            coordinates: point
          }
        }, sourceFeature, sourceFeatureIndex));
      });
      break;

    case 'LineString':
      lineFeatures.push(wrapFeature({
        geometry
      }, sourceFeature, sourceFeatureIndex));
      break;

    case 'MultiLineString':
      coordinates.forEach(path => {
        lineFeatures.push(wrapFeature({
          geometry: {
            type: 'LineString',
            coordinates: path
          }
        }, sourceFeature, sourceFeatureIndex));
      });
      break;

    case 'Polygon':
      polygonFeatures.push(wrapFeature({
        geometry
      }, sourceFeature, sourceFeatureIndex));
      coordinates.forEach(path => {
        polygonOutlineFeatures.push(wrapFeature({
          geometry: {
            type: 'LineString',
            coordinates: path
          }
        }, sourceFeature, sourceFeatureIndex));
      });
      break;

    case 'MultiPolygon':
      coordinates.forEach(polygon => {
        polygonFeatures.push(wrapFeature({
          geometry: {
            type: 'Polygon',
            coordinates: polygon
          }
        }, sourceFeature, sourceFeatureIndex));
        polygon.forEach(path => {
          polygonOutlineFeatures.push(wrapFeature({
            geometry: {
              type: 'LineString',
              coordinates: path
            }
          }, sourceFeature, sourceFeatureIndex));
        });
      });
      break;

    default:
  }
}

const COORDINATE_NEST_LEVEL = {
  Point: 1,
  MultiPoint: 2,
  LineString: 2,
  MultiLineString: 3,
  Polygon: 3,
  MultiPolygon: 4
};
function validateGeometry(type, coordinates) {
  let nestLevel = COORDINATE_NEST_LEVEL[type];
  log/* default.assert */.Z.assert(nestLevel, "Unknown GeoJSON type ".concat(type));

  while (coordinates && --nestLevel > 0) {
    coordinates = coordinates[0];
  }

  return coordinates && Number.isFinite(coordinates[0]);
}
//# sourceMappingURL=geojson.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/geojson-layer/geojson-layer-props.js


function createEmptyLayerProps() {
  return {
    points: {},
    lines: {},
    polygons: {},
    polygonsOutline: {}
  };
}

function getCoordinates(f) {
  return f.geometry.coordinates;
}

function createLayerPropsFromFeatures(features, featuresDiff) {
  const layerProps = createEmptyLayerProps();
  const {
    pointFeatures,
    lineFeatures,
    polygonFeatures,
    polygonOutlineFeatures
  } = features;
  layerProps.points.data = pointFeatures;

  layerProps.points._dataDiff = featuresDiff.pointFeatures && (() => featuresDiff.pointFeatures);

  layerProps.points.getPosition = getCoordinates;
  layerProps.lines.data = lineFeatures;

  layerProps.lines._dataDiff = featuresDiff.lineFeatures && (() => featuresDiff.lineFeatures);

  layerProps.lines.getPath = getCoordinates;
  layerProps.polygons.data = polygonFeatures;

  layerProps.polygons._dataDiff = featuresDiff.polygonFeatures && (() => featuresDiff.polygonFeatures);

  layerProps.polygons.getPolygon = getCoordinates;
  layerProps.polygonsOutline.data = polygonOutlineFeatures;

  layerProps.polygonsOutline._dataDiff = featuresDiff.polygonOutlineFeatures && (() => featuresDiff.polygonOutlineFeatures);

  layerProps.polygonsOutline.getPath = getCoordinates;
  return layerProps;
}
function createLayerPropsFromBinary(geojsonBinary, encodePickingColor) {
  const layerProps = createEmptyLayerProps();
  const {
    points,
    lines,
    polygons
  } = geojsonBinary;
  const customPickingColors = calculatePickingColors(geojsonBinary, encodePickingColor);
  layerProps.points.data = {
    length: points.positions.value.length / points.positions.size,
    attributes: {
      getPosition: points.positions,
      instancePickingColors: {
        size: 3,
        value: customPickingColors.points
      }
    },
    properties: points.properties,
    numericProps: points.numericProps,
    featureIds: points.featureIds
  };
  layerProps.lines.data = {
    length: lines.pathIndices.value.length - 1,
    startIndices: lines.pathIndices.value,
    attributes: {
      getPath: lines.positions,
      instancePickingColors: {
        size: 3,
        value: customPickingColors.lines
      }
    },
    properties: lines.properties,
    numericProps: lines.numericProps,
    featureIds: lines.featureIds
  };
  layerProps.lines._pathType = 'open';
  layerProps.polygons.data = {
    length: polygons.polygonIndices.value.length - 1,
    startIndices: polygons.polygonIndices.value,
    attributes: {
      getPolygon: polygons.positions,
      pickingColors: {
        size: 3,
        value: customPickingColors.polygons
      }
    },
    properties: polygons.properties,
    numericProps: polygons.numericProps,
    featureIds: polygons.featureIds
  };
  layerProps.polygons._normalize = false;

  if (polygons.triangles) {
    layerProps.polygons.data.attributes.indices = polygons.triangles.value;
  }

  layerProps.polygonsOutline.data = {
    length: polygons.primitivePolygonIndices.value.length - 1,
    startIndices: polygons.primitivePolygonIndices.value,
    attributes: {
      getPath: polygons.positions,
      instancePickingColors: {
        size: 3,
        value: customPickingColors.polygons
      }
    },
    properties: polygons.properties,
    numericProps: polygons.numericProps,
    featureIds: polygons.featureIds
  };
  layerProps.polygonsOutline._pathType = 'open';
  return layerProps;
}
//# sourceMappingURL=geojson-layer-props.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/geojson-layer/geojson-layer.js






const geojson_layer_defaultProps = { ...getDefaultProps(POINT_LAYER.circle),
  ...getDefaultProps(POINT_LAYER.icon),
  ...getDefaultProps(POINT_LAYER.text),
  ...getDefaultProps(LINE_LAYER),
  ...getDefaultProps(POLYGON_LAYER),
  stroked: true,
  filled: true,
  extruded: false,
  wireframe: false,
  iconAtlas: {
    type: 'object',
    value: null
  },
  iconMapping: {
    type: 'object',
    value: {}
  },
  getIcon: {
    type: 'accessor',
    value: f => f.properties.icon
  },
  getText: {
    type: 'accessor',
    value: f => f.properties.text
  },
  pointType: 'circle',
  getRadius: {
    deprecatedFor: 'getPointRadius'
  }
};
class GeoJsonLayer extends composite_layer/* default */.Z {
  initializeState() {
    this.state = {
      layerProps: {},
      features: {}
    };

    if (this.props.getLineDashArray) {
      log/* default.removed */.Z.removed('getLineDashArray', 'PathStyleExtension')();
    }
  }

  updateState({
    props,
    changeFlags
  }) {
    if (!changeFlags.dataChanged) {
      return;
    }

    const {
      data
    } = this.props;
    const binary = data && 'points' in data && 'polygons' in data && 'lines' in data;
    this.setState({
      binary
    });

    if (binary) {
      this._updateStateBinary({
        props,
        changeFlags
      });
    } else {
      this._updateStateJSON({
        props,
        changeFlags
      });
    }
  }

  _updateStateBinary({
    props,
    changeFlags
  }) {
    const layerProps = createLayerPropsFromBinary(props.data, this.encodePickingColor);
    this.setState({
      layerProps
    });
  }

  _updateStateJSON({
    props,
    changeFlags
  }) {
    const features = getGeojsonFeatures(props.data);
    const wrapFeature = this.getSubLayerRow.bind(this);
    let newFeatures = {};
    const featuresDiff = {};

    if (Array.isArray(changeFlags.dataChanged)) {
      const oldFeatures = this.state.features;

      for (const key in oldFeatures) {
        newFeatures[key] = oldFeatures[key].slice();
        featuresDiff[key] = [];
      }

      for (const dataRange of changeFlags.dataChanged) {
        const partialFeatures = separateGeojsonFeatures(features, wrapFeature, dataRange);

        for (const key in oldFeatures) {
          featuresDiff[key].push((0,utils/* replaceInRange */.b)({
            data: newFeatures[key],
            getIndex: f => f.__source.index,
            dataRange,
            replace: partialFeatures[key]
          }));
        }
      }
    } else {
      newFeatures = separateGeojsonFeatures(features, wrapFeature);
    }

    const layerProps = createLayerPropsFromFeatures(newFeatures, featuresDiff);
    this.setState({
      features: newFeatures,
      featuresDiff,
      layerProps
    });
  }

  _updateAutoHighlight(info) {
    const pointLayerIdPrefix = "".concat(this.id, "-points-");
    const sourceIsPoints = info.sourceLayer.id.startsWith(pointLayerIdPrefix);

    for (const layer of this.getSubLayers()) {
      if (layer.id.startsWith(pointLayerIdPrefix) === sourceIsPoints) {
        layer.updateAutoHighlight(info);
      }
    }
  }

  _renderPolygonLayer() {
    const {
      extruded,
      wireframe
    } = this.props;
    const {
      layerProps
    } = this.state;
    const id = 'polygons-fill';
    const PolygonFillLayer = this.shouldRenderSubLayer(id, layerProps.polygons.data) && this.getSubLayerClass(id, POLYGON_LAYER.type);

    if (PolygonFillLayer) {
      const forwardedProps = forwardProps(this, POLYGON_LAYER.props);
      const useLineColor = extruded && wireframe;

      if (!useLineColor) {
        delete forwardedProps.getLineColor;
      }

      forwardedProps.updateTriggers.lineColors = useLineColor;
      return new PolygonFillLayer(forwardedProps, this.getSubLayerProps({
        id,
        updateTriggers: forwardedProps.updateTriggers
      }), layerProps.polygons);
    }

    return null;
  }

  _renderLineLayers() {
    const {
      extruded,
      stroked
    } = this.props;
    const {
      layerProps
    } = this.state;
    const polygonStrokeLayerId = 'polygons-stroke';
    const lineStringsLayerId = 'linestrings';
    const PolygonStrokeLayer = !extruded && stroked && this.shouldRenderSubLayer(polygonStrokeLayerId, layerProps.polygonsOutline.data) && this.getSubLayerClass(polygonStrokeLayerId, LINE_LAYER.type);
    const LineStringsLayer = this.shouldRenderSubLayer(lineStringsLayerId, layerProps.lines.data) && this.getSubLayerClass(lineStringsLayerId, LINE_LAYER.type);

    if (PolygonStrokeLayer || LineStringsLayer) {
      const forwardedProps = forwardProps(this, LINE_LAYER.props);
      return [PolygonStrokeLayer && new PolygonStrokeLayer(forwardedProps, this.getSubLayerProps({
        id: polygonStrokeLayerId,
        updateTriggers: forwardedProps.updateTriggers
      }), layerProps.polygonsOutline), LineStringsLayer && new LineStringsLayer(forwardedProps, this.getSubLayerProps({
        id: lineStringsLayerId,
        updateTriggers: forwardedProps.updateTriggers
      }), layerProps.lines)];
    }

    return null;
  }

  _renderPointLayers() {
    const {
      pointType
    } = this.props;
    const {
      layerProps,
      binary
    } = this.state;
    let {
      highlightedObjectIndex
    } = this.props;

    if (!binary && Number.isFinite(highlightedObjectIndex)) {
      highlightedObjectIndex = layerProps.points.data.findIndex(d => d.__source.index === highlightedObjectIndex);
    }

    const types = new Set(pointType.split('+'));
    const pointLayers = [];

    for (const type of types) {
      const id = "points-".concat(type);
      const PointLayerMapping = POINT_LAYER[type];
      const PointsLayer = PointLayerMapping && this.shouldRenderSubLayer(id, layerProps.points.data) && this.getSubLayerClass(id, PointLayerMapping.type);

      if (PointsLayer) {
        const forwardedProps = forwardProps(this, PointLayerMapping.props);
        pointLayers.push(new PointsLayer(forwardedProps, this.getSubLayerProps({
          id,
          updateTriggers: forwardedProps.updateTriggers,
          highlightedObjectIndex
        }), layerProps.points));
      }
    }

    return pointLayers;
  }

  renderLayers() {
    const {
      extruded
    } = this.props;

    const polygonFillLayer = this._renderPolygonLayer();

    const lineLayers = this._renderLineLayers();

    const pointLayers = this._renderPointLayers();

    return [!extruded && polygonFillLayer, lineLayers, pointLayers, extruded && polygonFillLayer];
  }

  getSubLayerAccessor(accessor) {
    const {
      binary
    } = this.state;

    if (!binary || typeof accessor !== 'function') {
      return super.getSubLayerAccessor(accessor);
    }

    return (object, info) => {
      const {
        data,
        index
      } = info;
      const feature = binaryToFeatureForAccesor(data, index);
      return accessor(feature, info);
    };
  }

}
GeoJsonLayer.layerName = 'GeoJsonLayer';
GeoJsonLayer.defaultProps = geojson_layer_defaultProps;
//# sourceMappingURL=geojson-layer.js.map
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/DeckGLContainer.js + 91 modules
var DeckGLContainer = __webpack_require__(85011);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/colors.js
var colors = __webpack_require__(15191);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/sandbox.js + 161 modules
var sandbox = __webpack_require__(88574);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/common.js
var common = __webpack_require__(37032);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/TooltipRow.js
var TooltipRow = __webpack_require__(57981);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Geojson/Geojson.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


 // TODO import geojsonExtent from 'geojson-extent';






const propertyMap = {
  fillColor: 'fillColor',
  color: 'fillColor',
  fill: 'fillColor',
  'fill-color': 'fillColor',
  strokeColor: 'strokeColor',
  'stroke-color': 'strokeColor',
  'stroke-width': 'strokeWidth'
};

const alterProps = (props, propOverrides) => {
  const newProps = {};
  Object.keys(props).forEach(k => {
    if (k in propertyMap) {
      newProps[propertyMap[k]] = props[k];
    } else {
      newProps[k] = props[k];
    }
  });

  if (typeof props.fillColor === 'string') {
    newProps.fillColor = (0,colors.hexToRGB)(props.fillColor);
  }

  if (typeof props.strokeColor === 'string') {
    newProps.strokeColor = (0,colors.hexToRGB)(props.strokeColor);
  }

  return _extends({}, newProps, {}, propOverrides);
};

let features;

const recurseGeoJson = (node, propOverrides, extraProps) => {
  if (node && node.features) {
    node.features.forEach(obj => {
      recurseGeoJson(obj, propOverrides, node.extraProps || extraProps);
    });
  }

  if (node && node.geometry) {
    const newNode = _extends({}, node, {
      properties: alterProps(node.properties, propOverrides)
    });

    if (!newNode.extraProps) {
      newNode.extraProps = extraProps;
    }

    features.push(newNode);
  }
};

function setTooltipContent(o) {
  return o.object.extraProps && react.createElement("div", {
    className: "deckgl-tooltip"
  }, Object.keys(o.object.extraProps).map((prop, index) => react.createElement(TooltipRow/* default */.Z, {
    key: "prop-" + index,
    label: prop + ": ",
    value: "" + o.object.extraProps[prop]
  })));
}

function getLayer(formData, payload, onAddFilter, setTooltip) {
  const fd = formData;
  const fc = fd.fill_color_picker;
  const sc = fd.stroke_color_picker;
  const fillColor = [fc.r, fc.g, fc.b, 255 * fc.a];
  const strokeColor = [sc.r, sc.g, sc.b, 255 * sc.a];
  const propOverrides = {};

  if (fillColor[3] > 0) {
    propOverrides.fillColor = fillColor;
  }

  if (strokeColor[3] > 0) {
    propOverrides.strokeColor = strokeColor;
  }

  features = [];
  recurseGeoJson(payload.data, propOverrides);
  let jsFnMutator;

  if (fd.js_data_mutator) {
    // Applying user defined data mutator if defined
    jsFnMutator = (0,sandbox/* default */.Z)(fd.js_data_mutator);
    features = jsFnMutator(features);
  }

  return new GeoJsonLayer(_extends({
    id: "geojson-layer-" + fd.slice_id,
    filled: fd.filled,
    data: features,
    stroked: fd.stroked,
    extruded: fd.extruded,
    pointRadiusScale: fd.point_radius_scale
  }, (0,common/* commonLayerProps */.N)(fd, setTooltip, setTooltipContent)));
}
const propTypes = {
  formData: (prop_types_default()).object.isRequired,
  payload: (prop_types_default()).object.isRequired,
  setControlValue: (prop_types_default()).func.isRequired,
  viewport: (prop_types_default()).object.isRequired,
  onAddFilter: (prop_types_default()).func
};
const Geojson_defaultProps = {
  onAddFilter() {}

};

class DeckGLGeoJson extends react.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "containerRef", react.createRef());

    _defineProperty(this, "setTooltip", tooltip => {
      const {
        current
      } = this.containerRef;

      if (current) {
        current.setTooltip(tooltip);
      }
    });
  }

  render() {
    const {
      formData,
      payload,
      setControlValue,
      onAddFilter,
      viewport
    } = this.props; // TODO get this to work
    // if (formData.autozoom) {
    //   viewport = common.fitViewport(viewport, geojsonExtent(payload.data.features));
    // }

    const layer = getLayer(formData, payload, onAddFilter, this.setTooltip);
    return react.createElement(DeckGLContainer/* default */.Z, {
      ref: this.containerRef,
      mapboxApiAccessToken: payload.data.mapboxApiKey,
      viewport: viewport,
      layers: [layer],
      mapStyle: formData.mapbox_style,
      setControlValue: setControlValue
    });
  }

}

DeckGLGeoJson.propTypes = propTypes;
DeckGLGeoJson.defaultProps = Geojson_defaultProps;
/* harmony default export */ const Geojson = (DeckGLGeoJson);

/***/ })

}]);