(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[2862,7040,7893],{

/***/ 95644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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