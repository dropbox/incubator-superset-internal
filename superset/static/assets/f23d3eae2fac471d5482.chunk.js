(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[7040,7893],{

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