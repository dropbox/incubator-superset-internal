(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[4772],{

/***/ 80470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CategoricalScheme)
/* harmony export */ });
/* harmony import */ var _ColorScheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77252);
/*
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

class CategoricalScheme extends _ColorScheme__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {}

/***/ }),

/***/ 34042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_makeSingleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23630);
/* harmony import */ var _ColorSchemeRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89727);
/* harmony import */ var _colorSchemes_categorical_d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62234);
/*
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




class CategoricalSchemeRegistry extends _ColorSchemeRegistry__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  constructor() {
    super();
    this.registerValue('SUPERSET_DEFAULT', _colorSchemes_categorical_d3__WEBPACK_IMPORTED_MODULE_1__/* ["default"][0] */ .Z[0]);
  }

}

const getInstance = (0,_utils_makeSingleton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(CategoricalSchemeRegistry);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getInstance);

/***/ }),

/***/ 77252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColorScheme)
/* harmony export */ });
/*
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
class ColorScheme {
  constructor({
    colors,
    description = '',
    id,
    label,
    isDefault
  }) {
    this.colors = void 0;
    this.description = void 0;
    this.id = void 0;
    this.label = void 0;
    this.isDefault = void 0;
    this.id = id;
    this.label = label ?? id;
    this.colors = colors;
    this.description = description;
    this.isDefault = isDefault;
  }

}

/***/ }),

/***/ 89727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColorSchemeRegistry)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93721);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8018);
/*
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

class ColorSchemeRegistry extends _models__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  constructor() {
    super({
      name: 'ColorScheme',
      overwritePolicy: _models__WEBPACK_IMPORTED_MODULE_1__/* .OverwritePolicy.WARN */ .r.WARN,
      setFirstItemAsDefault: true
    });
  }

  get(key) {
    return super.get(key);
  }

}

/***/ }),

/***/ 90606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SequentialScheme)
/* harmony export */ });
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63122);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1077);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7659);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30108);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73626);
/* harmony import */ var _ColorScheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77252);
/*
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



class SequentialScheme extends _ColorScheme__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  constructor(config) {
    super(config);
    this.isDiverging = void 0;
    const {
      isDiverging = false
    } = config;
    this.isDiverging = isDiverging;
  }
  /**
   * Return a linear scale with a new domain interpolated from the input domain
   * to match the number of elements in the color scheme
   * because D3 continuous scale uses piecewise mapping between domain and range.
   * This is a common use-case when the domain is [min, max]
   * and the palette has more than two colors.
   *
   * @param domain domain of the scale
   * @param modifyRange Set this to true if you don't want to modify the domain and
   * want to interpolate range to have the same number of elements with domain instead.
   */


  createLinearScale(domain = [0, 1], modifyRange = false) {
    const scale = (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().interpolate(d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).clamp(true);
    return modifyRange || domain.length === this.colors.length ? scale.domain(domain).range(this.getColors(domain.length)) : scale.domain((0,d3_interpolate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,d3_interpolate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(d3_interpolate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, domain), this.colors.length)).range(this.colors);
  }
  /**
   * Get colors from this scheme
   * @param numColors number of colors to return.
   * Will interpolate the current scheme to match the number of colors requested
   * @param extent The extent of the color range to use.
   * For example [0.2, 1] will rescale the color scheme
   * such that color values in the range [0, 0.2) are excluded from the scheme.
   */


  getColors(numColors = this.colors.length, extent = [0, 1]) {
    if (numColors === this.colors.length && extent[0] === 0 && extent[1] === 1) {
      return this.colors;
    }

    const piecewiseScale = (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, this.colors);
    const adjustExtent = (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().range(extent).clamp(true);
    return (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(t => piecewiseScale(adjustExtent(t)), numColors);
  }

}

/***/ }),

/***/ 67542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_makeSingleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23630);
/* harmony import */ var _ColorSchemeRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89727);
/* harmony import */ var _colorSchemes_sequential_d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72410);
/*
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




class SequentialSchemeRegistry extends _ColorSchemeRegistry__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  constructor() {
    super();
    this.registerValue('SUPERSET_DEFAULT', _colorSchemes_sequential_d3__WEBPACK_IMPORTED_MODULE_1__/* ["default"][0] */ .Z[0]);
  }

}

const getInstance = (0,_utils_makeSingleton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(SequentialSchemeRegistry);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getInstance);

/***/ }),

/***/ 62234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoricalScheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80470);
/*
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

const schemes = [{
  id: 'd3Category10',
  label: 'D3 Category 10',
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf']
}, {
  id: 'd3Category20',
  label: 'D3 Category 20',
  colors: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
}, {
  id: 'd3Category20b',
  label: 'D3 Category 20b',
  colors: ['#393b79', '#5254a3', '#6b6ecf', '#9c9ede', '#637939', '#8ca252', '#b5cf6b', '#cedb9c', '#8c6d31', '#bd9e39', '#e7ba52', '#e7cb94', '#843c39', '#ad494a', '#d6616b', '#e7969c', '#7b4173', '#a55194', '#ce6dbd', '#de9ed6']
}, {
  id: 'd3Category20c',
  label: 'D3 Category 20c',
  colors: ['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#e6550d', '#fd8d3c', '#fdae6b', '#fdd0a2', '#31a354', '#74c476', '#a1d99b', '#c7e9c0', '#756bb1', '#9e9ac8', '#bcbddc', '#dadaeb', '#636363', '#969696', '#bdbdbd', '#d9d9d9']
}].map(s => new _CategoricalScheme__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(s));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (schemes);

/***/ }),

/***/ 72410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SequentialScheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90606);
/*
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

const schemes = [{
  id: 'schemeRdBu',
  label: 'red/blue',
  isDiverging: true,
  colors: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061']
}, {
  id: 'schemeBrBG',
  label: 'brown/green',
  isDiverging: true,
  colors: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30']
}, {
  id: 'schemePRGn',
  label: 'purple/green',
  isDiverging: true,
  colors: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b']
}, {
  id: 'schemePiYG',
  label: 'pink/green',
  isDiverging: true,
  colors: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419']
}, {
  id: 'schemePuOr',
  label: 'purple/orange',
  isDiverging: true,
  colors: ['#2d004b', '#542788', '#8073ac', '#b2abd2', '#d8daeb', '#fee0b6', '#fdb863', '#e08214', '#b35806', '#7f3b08']
}, {
  id: 'schemeRdGy',
  label: 'red/gray/black',
  isDiverging: true,
  colors: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a']
}, {
  id: 'schemeRdYlBu',
  label: 'red/yellow/blue',
  colors: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
  isDiverging: true
}, {
  id: 'schemeRdYlGn',
  label: 'red/yellow/green',
  colors: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
  isDiverging: true
}, {
  id: 'schemeSpectral',
  label: 'rainbow',
  colors: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2']
}, {
  id: 'schemeBlues',
  label: 'blues',
  colors: ['#b5d4e9', '#93c3df', '#6daed5', '#4b97c9', '#2f7ebc', '#1864aa', '#0a4a90', '#08306b']
}, {
  id: 'schemeGreens',
  label: 'greens',
  colors: ['#b7e2b1', '#97d494', '#73c378', '#4daf62', '#2f984f', '#157f3b', '#036429', '#00441b']
}, {
  id: 'schemeGrays',
  label: 'grays',
  colors: ['#cecece', '#b4b4b4', '#979797', '#7a7a7a', '#5f5f5f', '#404040', '#1e1e1e', '#000000']
}, {
  id: 'schemeOranges',
  label: 'oranges',
  colors: ['#fdc28c', '#fda762', '#fb8d3d', '#f2701d', '#e25609', '#c44103', '#9f3303', '#7f2704']
}, {
  id: 'schemePurples',
  label: 'purples',
  colors: ['#cecee5', '#b6b5d8', '#9e9bc9', '#8782bc', '#7363ac', '#61409b', '#501f8c', '#3f007d']
}, {
  id: 'schemeReds',
  label: 'reds',
  colors: ['#fcaa8e', '#fc8a6b', '#f9694c', '#ef4533', '#d92723', '#bb151a', '#970b13', '#67000d']
}, {
  id: 'schemeViridis',
  label: 'Viridis',
  colors: ['#482475', '#414487', '#355f8d', '#2a788e', '#21918c', '#22a884', '#44bf70', '#7ad151', '#bddf26', '#fde725']
}, {
  id: 'schemeInferno',
  label: 'Inferno',
  colors: ['#160b39', '#420a68', '#6a176e', '#932667', '#bc3754', '#dd513a', '#f37819', '#fca50a', '#f6d746', '#fcffa4']
}, {
  id: 'schemeMagma',
  label: 'Magma',
  colors: ['#140e36', '#3b0f70', '#641a80', '#8c2981', '#b73779', '#de4968', '#f7705c', '#fe9f6d', '#fecf92', '#fcfdbf']
}, {
  id: 'schemeWarm',
  label: 'Warm',
  colors: ['#963db3', '#bf3caf', '#e4419d', '#fe4b83', '#ff5e63', '#ff7847', '#fb9633', '#e2b72f', '#c6d63c', '#aff05b']
}, {
  id: 'schemeCool',
  label: 'Cool',
  colors: ['#6054c8', '#4c6edb', '#368ce1', '#23abd8', '#1ac7c2', '#1ddfa3', '#30ef82', '#52f667', '#7ff658', '#aff05b']
}, {
  id: 'schemeCubehelixDefault',
  label: 'Cube Helix',
  colors: ['#1a1530', '#163d4e', '#1f6642', '#54792f', '#a07949', '#d07e93', '#cf9cda', '#c1caf3', '#d2eeef', '#ffffff']
}, {
  id: 'schemeBuGn',
  label: 'blue/green',
  colors: ['#b7e4da', '#8fd3c1', '#68c2a3', '#49b17f', '#2f9959', '#157f3c', '#036429', '#00441b']
}, {
  id: 'schemeBuPu',
  label: 'blue/purple',
  colors: ['#b2cae1', '#9cb3d5', '#8f95c6', '#8c74b5', '#8952a5', '#852d8f', '#730f71', '#4d004b']
}, {
  id: 'schemeGnBu',
  label: 'green/blue',
  colors: ['#bde5bf', '#9ed9bb', '#7bcbc4', '#58b7cd', '#399cc6', '#1d7eb7', '#0b60a1', '#084081']
}, {
  id: 'schemeOrRd',
  label: 'orange/red',
  colors: ['#fdca94', '#fdb07a', '#fa8e5d', '#f16c49', '#e04530', '#c81d13', '#a70403', '#7f0000']
}, {
  id: 'schemePuBuGn',
  label: 'purple/blue/green',
  colors: ['#bec9e2', '#98b9d9', '#69a8cf', '#4096c0', '#19879f', '#037877', '#016353', '#014636']
}, {
  id: 'schemePuBu',
  label: 'purple/blue',
  colors: ['#bfc9e2', '#9bb9d9', '#72a8cf', '#4394c3', '#1a7db6', '#0667a1', '#045281', '#023858']
}, {
  id: 'schemePuRd',
  label: 'purple/red',
  colors: ['#d0aad2', '#d08ac2', '#dd63ae', '#e33890', '#d71c6c', '#b70b4f', '#8f023a', '#67001f']
}, {
  id: 'schemeRdPu',
  label: 'red/purple',
  colors: ['#fbb5bc', '#f993b0', '#f369a3', '#e03e98', '#c01788', '#99037c', '#700174', '#49006a']
}, {
  id: 'schemeYlGnBu',
  label: 'yellow/green/blue',
  colors: ['#d5eeb3', '#a9ddb7', '#73c9bd', '#45b4c2', '#2897bf', '#2073b2', '#234ea0', '#1c3185', '#081d58']
}, {
  id: 'schemeYlGn',
  label: 'yellow/green',
  colors: ['#e4f4ac', '#c7e89b', '#a2d88a', '#78c578', '#4eaf63', '#2f944e', '#15793f', '#036034', '#004529']
}, {
  id: 'schemeYlOrBr',
  label: 'yellow/orange/brown',
  colors: ['#feeaa1', '#fed676', '#feba4a', '#fb992c', '#ee7918', '#d85b0a', '#b74304', '#8f3204', '#662506']
}, {
  id: 'schemeYlOrRd',
  label: 'yellow/orange/red',
  colors: ['#fee087', '#fec965', '#feab4b', '#fd893c', '#fa5c2e', '#ec3023', '#d31121', '#af0225', '#800026']
}].map(s => new _SequentialScheme__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(s));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (schemes);

/***/ }),

/***/ 21173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SupersetClientClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30617);
/*
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

let singletonClient;

function getInstance() {
  if (!singletonClient) {
    throw new Error('You must call SupersetClient.configure(...) before calling other methods');
  }

  return singletonClient;
}

const SupersetClient = {
  configure: config => {
    singletonClient = new _SupersetClientClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(config);
    return singletonClient;
  },
  reset: () => {
    singletonClient = undefined;
  },
  getInstance,
  delete: request => getInstance().delete(request),
  get: request => getInstance().get(request),
  init: force => getInstance().init(force),
  isAuthenticated: () => getInstance().isAuthenticated(),
  post: request => getInstance().post(request),
  put: request => getInstance().put(request),
  reAuthenticate: () => getInstance().reAuthenticate(),
  request: request => getInstance().request(request)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SupersetClient);

/***/ }),

/***/ 30617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SupersetClientClass)
/* harmony export */ });
/* harmony import */ var _callApi_callApiAndParseWithTimeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43925);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94044);
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


class SupersetClientClass {
  constructor({
    baseUrl = _constants__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_BASE_URL */ .w0,
    host,
    protocol,
    headers = {},
    fetchRetryOptions = {},
    mode = 'same-origin',
    timeout,
    credentials = undefined,
    csrfToken = undefined
  } = {}) {
    this.credentials = void 0;
    this.csrfToken = void 0;
    this.csrfPromise = void 0;
    this.fetchRetryOptions = void 0;
    this.baseUrl = void 0;
    this.protocol = void 0;
    this.host = void 0;
    this.headers = void 0;
    this.mode = void 0;
    this.timeout = void 0;
    const url = new URL(host || protocol ? `${protocol || 'https:'}//${host || 'localhost'}` : baseUrl, // baseUrl for API could also be relative, so we provide current location.href
    // as the base of baseUrl
    window.location.href);
    this.baseUrl = url.href.replace(/\/+$/, ''); // always strip trailing slash

    this.host = url.host;
    this.protocol = url.protocol;
    this.headers = { ...headers
    };
    this.mode = mode;
    this.timeout = timeout;
    this.credentials = credentials;
    this.csrfToken = csrfToken;
    this.fetchRetryOptions = { ..._constants__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_FETCH_RETRY_OPTIONS */ .pG,
      ...fetchRetryOptions
    };

    if (typeof this.csrfToken === 'string') {
      this.headers = { ...this.headers,
        'X-CSRFToken': this.csrfToken
      };
      this.csrfPromise = Promise.resolve(this.csrfToken);
    }
  }

  async init(force = false) {
    if (this.isAuthenticated() && !force) {
      return this.csrfPromise;
    }

    return this.getCSRFToken();
  }

  async reAuthenticate() {
    return this.init(true);
  }

  isAuthenticated() {
    // if CSRF protection is disabled in the Superset app, the token may be an empty string
    return this.csrfToken !== null && this.csrfToken !== undefined;
  }

  async get(requestConfig) {
    return this.request({ ...requestConfig,
      method: 'GET'
    });
  }

  async delete(requestConfig) {
    return this.request({ ...requestConfig,
      method: 'DELETE'
    });
  }

  async put(requestConfig) {
    return this.request({ ...requestConfig,
      method: 'PUT'
    });
  }

  async post(requestConfig) {
    return this.request({ ...requestConfig,
      method: 'POST'
    });
  }

  async request({
    credentials,
    mode,
    endpoint,
    host,
    url,
    headers,
    timeout,
    fetchRetryOptions,
    ...rest
  }) {
    await this.ensureAuth();
    return (0,_callApi_callApiAndParseWithTimeout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({ ...rest,
      credentials: credentials ?? this.credentials,
      mode: mode ?? this.mode,
      url: this.getUrl({
        endpoint,
        host,
        url
      }),
      headers: { ...this.headers,
        ...headers
      },
      timeout: timeout ?? this.timeout,
      fetchRetryOptions: fetchRetryOptions ?? this.fetchRetryOptions
    });
  }

  async ensureAuth() {
    return this.csrfPromise ?? // eslint-disable-next-line prefer-promise-reject-errors
    Promise.reject({
      error: `SupersetClient has not been provided a CSRF token, ensure it is
        initialized with \`client.getCSRFToken()\` or try logging in at
        ${this.getUrl({
        endpoint: '/login'
      })}`
    });
  }

  async getCSRFToken() {
    this.csrfToken = undefined; // If we can request this resource successfully, it means that the user has
    // authenticated. If not we throw an error prompting to authenticate.

    this.csrfPromise = (0,_callApi_callApiAndParseWithTimeout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      credentials: this.credentials,
      headers: { ...this.headers
      },
      method: 'GET',
      mode: this.mode,
      timeout: this.timeout,
      url: this.getUrl({
        endpoint: 'api/v1/security/csrf_token/'
      }),
      parseMethod: 'json'
    }).then(({
      json
    }) => {
      if (typeof json === 'object') {
        this.csrfToken = json.result;

        if (typeof this.csrfToken === 'string') {
          this.headers = { ...this.headers,
            'X-CSRFToken': this.csrfToken
          };
        }
      }

      if (this.isAuthenticated()) {
        return this.csrfToken;
      } // eslint-disable-next-line prefer-promise-reject-errors


      return Promise.reject({
        error: 'Failed to fetch CSRF token'
      });
    });
    return this.csrfPromise;
  }

  getUrl({
    host: inputHost,
    endpoint = '',
    url
  } = {}) {
    if (typeof url === 'string') return url;
    const host = inputHost ?? this.host;
    const cleanHost = host.slice(-1) === '/' ? host.slice(0, -1) : host; // no backslash

    return `${this.protocol}//${cleanHost}/${endpoint[0] === '/' ? endpoint.slice(1) : endpoint}`;
  }

}

/***/ }),

/***/ 43925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ callApiAndParseWithTimeout)
});

;// CONCATENATED MODULE: ./node_modules/whatwg-fetch/fetch.js
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  (typeof global !== 'undefined' && global)

var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this)
        if (isConsumed) {
          return isConsumed
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch_fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch_fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch_fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}

// EXTERNAL MODULE: ./node_modules/fetch-retry/index.js
var fetch_retry = __webpack_require__(59707);
var fetch_retry_default = /*#__PURE__*/__webpack_require__.n(fetch_retry);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/constants.js
var constants = __webpack_require__(94044);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/connection/callApi/callApi.js
/*
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




function tryParsePayload(payload) {
  try {
    return typeof payload === 'string' ? JSON.parse(payload) : payload;
  } catch (error) {
    throw new Error(`Invalid payload:\n\n${payload}`);
  }
}
/**
 * Try appending search params to an URL if needed.
 */


function getFullUrl(partialUrl, params) {
  if (params) {
    const url = new URL(partialUrl, window.location.href);
    const search = params instanceof URLSearchParams ? params : new URLSearchParams(params); // will completely override any existing search params

    url.search = search.toString();
    return url.href;
  }

  return partialUrl;
}
/**
 * Fetch an API response and returns the corresponding json.
 *
 * @param {Payload} postPayload payload to send as FormData in a post form
 * @param {Payload} jsonPayload json payload to post, will automatically add Content-Type header
 * @param {string} stringify whether to stringify field values when post as formData
 */


async function callApi({
  body,
  cache = 'default',
  credentials = 'same-origin',
  fetchRetryOptions,
  headers,
  method = 'GET',
  mode = 'same-origin',
  postPayload,
  jsonPayload,
  redirect = 'follow',
  signal,
  stringify = true,
  url: url_,
  searchParams
}) {
  const fetchWithRetry = fetch_retry_default()(fetch, fetchRetryOptions);
  const url = `${getFullUrl(url_, searchParams)}`;
  const request = {
    body,
    cache,
    credentials,
    headers,
    method,
    mode,
    redirect,
    signal
  };

  if (method === 'GET' && cache !== 'no-store' && cache !== 'reload' && constants/* CACHE_AVAILABLE */.wE && (window.location && window.location.protocol) === 'https:') {
    const supersetCache = await caches.open(constants/* CACHE_KEY */.oy);
    const cachedResponse = await supersetCache.match(url);

    if (cachedResponse) {
      // if we have a cached response, send its ETag in the
      // `If-None-Match` header in a conditional request
      const etag = cachedResponse.headers.get('Etag');
      request.headers = { ...request.headers,
        'If-None-Match': etag
      };
    }

    const response = await fetchWithRetry(url, request);

    if (response.status === constants/* HTTP_STATUS_NOT_MODIFIED */.D_) {
      const cachedFullResponse = await supersetCache.match(url);

      if (cachedFullResponse) {
        return cachedFullResponse.clone();
      }

      throw new Error('Received 304 but no content is cached!');
    }

    if (response.status === constants/* HTTP_STATUS_OK */.m7 && response.headers.get('Etag')) {
      supersetCache.delete(url);
      supersetCache.put(url, response.clone());
    }

    return response;
  }

  if (method === 'POST' || method === 'PATCH' || method === 'PUT') {
    if (postPayload && jsonPayload) {
      throw new Error('Please provide only one of jsonPayload or postPayload');
    }

    if (postPayload instanceof FormData) {
      request.body = postPayload;
    } else if (postPayload) {
      const payload = tryParsePayload(postPayload);

      if (payload && typeof payload === 'object') {
        // using FormData has the effect that Content-Type header is set to `multipart/form-data`,
        // not e.g., 'application/x-www-form-urlencoded'
        const formData = new FormData();
        Object.keys(payload).forEach(key => {
          const value = payload[key];

          if (typeof value !== 'undefined') {
            formData.append(key, stringify ? JSON.stringify(value) : String(value));
          }
        });
        request.body = formData;
      }
    }

    if (jsonPayload !== undefined) {
      request.body = JSON.stringify(jsonPayload);
      request.headers = { ...request.headers,
        'Content-Type': 'application/json'
      };
    }
  }

  return fetchWithRetry(url, request);
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/connection/callApi/rejectAfterTimeout.js
/*
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
// returns a Promise that rejects after the specified timeout
function rejectAfterTimeout(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => // eslint-disable-next-line prefer-promise-reject-errors
    reject({
      error: 'Request timed out',
      statusText: 'timeout',
      timeout
    }), timeout);
  });
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/connection/callApi/parseResponse.js
/*
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
async function parseResponse(apiPromise, parseMethod) {
  const response = await apiPromise; // reject failed HTTP requests with the raw response

  if (!response.ok) {
    return Promise.reject(response);
  }

  if (parseMethod === null || parseMethod === 'raw') {
    return response;
  }

  if (parseMethod === 'text') {
    const text = await response.text();
    const result = {
      response,
      text
    };
    return result;
  } // by default treat this as json


  if (parseMethod === undefined || parseMethod === 'json') {
    const json = await response.json();
    const result = {
      json,
      response
    };
    return result;
  }

  throw new Error(`Expected parseResponse=json|text|raw|null, got '${parseMethod}'.`);
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/connection/callApi/callApiAndParseWithTimeout.js
/*
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



async function callApiAndParseWithTimeout({
  timeout,
  parseMethod,
  ...rest
}) {
  const apiPromise = callApi(rest);
  const racedPromise = typeof timeout === 'number' && timeout > 0 ? Promise.race([apiPromise, rejectAfterTimeout(timeout)]) : apiPromise;
  return parseResponse(racedPromise, parseMethod);
}

/***/ }),

/***/ 94044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w0": () => (/* binding */ DEFAULT_BASE_URL),
/* harmony export */   "m7": () => (/* binding */ HTTP_STATUS_OK),
/* harmony export */   "D_": () => (/* binding */ HTTP_STATUS_NOT_MODIFIED),
/* harmony export */   "wE": () => (/* binding */ CACHE_AVAILABLE),
/* harmony export */   "oy": () => (/* binding */ CACHE_KEY),
/* harmony export */   "pG": () => (/* binding */ DEFAULT_FETCH_RETRY_OPTIONS)
/* harmony export */ });
/*
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
const DEFAULT_BASE_URL = 'http://localhost'; // HTTP status codes

const HTTP_STATUS_OK = 200;
const HTTP_STATUS_NOT_MODIFIED = 304; // Namespace for Cache API

const CACHE_AVAILABLE = ('caches' in window);
const CACHE_KEY = '@SUPERSET-UI/CONNECTION';
const DEFAULT_FETCH_RETRY_OPTIONS = {
  retries: 3,
  retryDelay: 1000,
  retryOn: [503]
};

/***/ }),

/***/ 84240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ExtensibleFunction)
/* harmony export */ });
/*
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
 * From https://stackoverflow.com/questions/36871299/how-to-extend-function-with-es6-classes
 */
class ExtensibleFunction extends Function {
  constructor(fn) {
    super(); // eslint-disable-next-line @typescript-eslint/no-unsafe-return, no-constructor-return

    return Object.setPrototypeOf(fn, new.target.prototype);
  }

}

/***/ }),

/***/ 8018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ OverwritePolicy),
/* harmony export */   "Z": () => (/* binding */ Registry)
/* harmony export */ });
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
let OverwritePolicy;

(function (OverwritePolicy) {
  OverwritePolicy["ALLOW"] = "ALLOW";
  OverwritePolicy["PROHIBIT"] = "PROHIBIT";
  OverwritePolicy["WARN"] = "WARN";
})(OverwritePolicy || (OverwritePolicy = {}));

/**
 * Registry class
 *
 * Can use generic to specify type of item in the registry
 * @type V Type of value
 * @type W Type of value returned from loader function when using registerLoader().
 * Set W=V when does not support asynchronous loader.
 * By default W is set to V | Promise<V> to support
 * both synchronous and asynchronous loaders.
 */
class Registry {
  constructor(config = {}) {
    this.name = void 0;
    this.overwritePolicy = void 0;
    this.items = void 0;
    this.promises = void 0;
    this.listeners = void 0;
    const {
      name = '',
      overwritePolicy = OverwritePolicy.ALLOW
    } = config;
    this.name = name;
    this.overwritePolicy = overwritePolicy;
    this.items = {};
    this.promises = {};
    this.listeners = new Set();
  }

  clear() {
    const keys = this.keys();
    this.items = {};
    this.promises = {};
    this.notifyListeners(keys);
    return this;
  }

  has(key) {
    const item = this.items[key];
    return item !== null && item !== undefined;
  }

  registerValue(key, value) {
    const item = this.items[key];
    const willOverwrite = this.has(key) && ('value' in item && item.value !== value || 'loader' in item);

    if (willOverwrite) {
      if (this.overwritePolicy === OverwritePolicy.WARN) {
        // eslint-disable-next-line no-console
        console.warn(`Item with key "${key}" already exists. You are assigning a new value.`);
      } else if (this.overwritePolicy === OverwritePolicy.PROHIBIT) {
        throw new Error(`Item with key "${key}" already exists. Cannot overwrite.`);
      }
    }

    if (!item || willOverwrite) {
      this.items[key] = {
        value
      };
      delete this.promises[key];
      this.notifyListeners([key]);
    }

    return this;
  }

  registerLoader(key, loader) {
    const item = this.items[key];
    const willOverwrite = this.has(key) && ('loader' in item && item.loader !== loader || 'value' in item);

    if (willOverwrite) {
      if (this.overwritePolicy === OverwritePolicy.WARN) {
        // eslint-disable-next-line no-console
        console.warn(`Item with key "${key}" already exists. You are assigning a new value.`);
      } else if (this.overwritePolicy === OverwritePolicy.PROHIBIT) {
        throw new Error(`Item with key "${key}" already exists. Cannot overwrite.`);
      }
    }

    if (!item || willOverwrite) {
      this.items[key] = {
        loader
      };
      delete this.promises[key];
      this.notifyListeners([key]);
    }

    return this;
  }

  get(key) {
    const item = this.items[key];

    if (item !== undefined) {
      if ('loader' in item) {
        return item.loader && item.loader();
      }

      return item.value;
    }

    return undefined;
  }

  getAsPromise(key) {
    const promise = this.promises[key];

    if (typeof promise !== 'undefined') {
      return promise;
    }

    const item = this.get(key);

    if (item !== undefined) {
      const newPromise = Promise.resolve(item);
      this.promises[key] = newPromise;
      return newPromise;
    }

    return Promise.reject(new Error(`Item with key "${key}" is not registered.`));
  }

  getMap() {
    return this.keys().reduce((prev, key) => {
      const map = prev;
      map[key] = this.get(key);
      return map;
    }, {});
  }

  getMapAsPromise() {
    const keys = this.keys();
    return Promise.all(keys.map(key => this.getAsPromise(key))).then(values => values.reduce((prev, value, i) => {
      const map = prev;
      map[keys[i]] = value;
      return map;
    }, {}));
  }

  keys() {
    return Object.keys(this.items);
  }

  values() {
    return this.keys().map(key => this.get(key));
  }

  valuesAsPromise() {
    return Promise.all(this.keys().map(key => this.getAsPromise(key)));
  }

  entries() {
    return this.keys().map(key => ({
      key,
      value: this.get(key)
    }));
  }

  entriesAsPromise() {
    const keys = this.keys();
    return this.valuesAsPromise().then(values => values.map((value, i) => ({
      key: keys[i],
      value
    })));
  }

  remove(key) {
    const isChange = this.has(key);
    delete this.items[key];
    delete this.promises[key];

    if (isChange) {
      this.notifyListeners([key]);
    }

    return this;
  }

  addListener(listener) {
    this.listeners.add(listener);
  }

  removeListener(listener) {
    this.listeners.delete(listener);
  }

  notifyListeners(keys) {
    this.listeners.forEach(listener => {
      try {
        listener(keys);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Exception thrown from a registry listener:', e);
      }
    });
  }

}

/***/ }),

/***/ 93721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RegistryWithDefaultKey)
/* harmony export */ });
/* harmony import */ var _Registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8018);
/*
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

class RegistryWithDefaultKey extends _Registry__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  constructor(config = {}) {
    super(config);
    this.initialDefaultKey = void 0;
    this.defaultKey = void 0;
    this.setFirstItemAsDefault = void 0;
    const {
      initialDefaultKey = undefined,
      setFirstItemAsDefault = false
    } = config;
    this.initialDefaultKey = initialDefaultKey;
    this.defaultKey = initialDefaultKey;
    this.setFirstItemAsDefault = setFirstItemAsDefault;
  }

  clear() {
    super.clear();
    this.defaultKey = this.initialDefaultKey;
    return this;
  }

  get(key) {
    const targetKey = key ?? this.defaultKey;
    return targetKey ? super.get(targetKey) : undefined;
  }

  registerValue(key, value) {
    super.registerValue(key, value); // If there is no default, set as default

    if (this.setFirstItemAsDefault && !this.defaultKey) {
      this.defaultKey = key;
    }

    return this;
  }

  registerLoader(key, loader) {
    super.registerLoader(key, loader); // If there is no default, set as default

    if (this.setFirstItemAsDefault && !this.defaultKey) {
      this.defaultKey = key;
    }

    return this;
  }

  getDefaultKey() {
    return this.defaultKey;
  }

  setDefaultKey(key) {
    this.defaultKey = key;
    return this;
  }

  clearDefaultKey() {
    this.defaultKey = undefined;
    return this;
  }

}

/***/ }),

/***/ 63758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
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
const DOLLAR = '$,.2f';
const DOLLAR_SIGNED = '+$,.2f';
const DOLLAR_ROUND = '$,d';
const DOLLAR_ROUND_SIGNED = '+$,d';
const FLOAT_1_POINT = ',.1f';
const FLOAT_2_POINT = ',.2f';
const FLOAT_3_POINT = ',.3f';
const FLOAT = FLOAT_2_POINT;
const FLOAT_SIGNED_1_POINT = '+,.1f';
const FLOAT_SIGNED_2_POINT = '+,.2f';
const FLOAT_SIGNED_3_POINT = '+,.3f';
const FLOAT_SIGNED = FLOAT_SIGNED_2_POINT;
const INTEGER = ',d';
const INTEGER_SIGNED = '+,d';
const PERCENT_1_POINT = ',.1%';
const PERCENT_2_POINT = ',.2%';
const PERCENT_3_POINT = ',.3%';
const PERCENT = PERCENT_2_POINT;
const PERCENT_SIGNED_1_POINT = '+,.1%';
const PERCENT_SIGNED_2_POINT = '+,.2%';
const PERCENT_SIGNED_3_POINT = '+,.3%';
const PERCENT_SIGNED = PERCENT_SIGNED_2_POINT;
const SI_1_DIGIT = '.1s';
const SI_2_DIGIT = '.2s';
const SI_3_DIGIT = '.3s';
const SI = SI_3_DIGIT;
const SMART_NUMBER = 'SMART_NUMBER';
const SMART_NUMBER_SIGNED = 'SMART_NUMBER_SIGNED';
const NumberFormats = {
  DOLLAR,
  DOLLAR_ROUND,
  DOLLAR_ROUND_SIGNED,
  DOLLAR_SIGNED,
  FLOAT,
  FLOAT_1_POINT,
  FLOAT_2_POINT,
  FLOAT_3_POINT,
  FLOAT_SIGNED,
  FLOAT_SIGNED_1_POINT,
  FLOAT_SIGNED_2_POINT,
  FLOAT_SIGNED_3_POINT,
  INTEGER,
  INTEGER_SIGNED,
  PERCENT,
  PERCENT_1_POINT,
  PERCENT_2_POINT,
  PERCENT_3_POINT,
  PERCENT_SIGNED,
  PERCENT_SIGNED_1_POINT,
  PERCENT_SIGNED_2_POINT,
  PERCENT_SIGNED_3_POINT,
  SI,
  SI_1_DIGIT,
  SI_2_DIGIT,
  SI_3_DIGIT,
  SMART_NUMBER,
  SMART_NUMBER_SIGNED
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberFormats);

/***/ }),

/***/ 79330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ PREVIEW_VALUE),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84240);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65154);
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


const PREVIEW_VALUE = 12345.432;

class NumberFormatter extends _models__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  constructor(config) {
    super(value => this.format(value));
    this.id = void 0;
    this.label = void 0;
    this.description = void 0;
    this.formatFunc = void 0;
    this.isInvalid = void 0;
    const {
      id = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)('config.id'),
      label,
      description = '',
      formatFunc = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)('config.formatFunc'),
      isInvalid = false
    } = config;
    this.id = id;
    this.label = label ?? id;
    this.description = description;
    this.formatFunc = formatFunc;
    this.isInvalid = isInvalid;
  }

  format(value) {
    if (value === null || value === undefined || Number.isNaN(value)) {
      return `${value}`;
    }

    if (value === Number.POSITIVE_INFINITY) {
      return '∞';
    }

    if (value === Number.NEGATIVE_INFINITY) {
      return '-∞';
    }

    return this.formatFunc(value);
  }

  preview(value = PREVIEW_VALUE) {
    return `${value} => ${this.format(value)}`;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberFormatter);

/***/ }),

/***/ 51341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NumberFormatterRegistry)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93721);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8018);
/* harmony import */ var _factories_createD3NumberFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82518);
/* harmony import */ var _factories_createSmartNumberFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49092);
/* harmony import */ var _NumberFormats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63758);
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




class NumberFormatterRegistry extends _models__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  constructor() {
    super({
      name: 'NumberFormatter',
      overwritePolicy: _models__WEBPACK_IMPORTED_MODULE_1__/* .OverwritePolicy.WARN */ .r.WARN
    });
    this.registerValue(_NumberFormats__WEBPACK_IMPORTED_MODULE_2__/* ["default"].SMART_NUMBER */ .Z.SMART_NUMBER, (0,_factories_createSmartNumberFormatter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)());
    this.registerValue(_NumberFormats__WEBPACK_IMPORTED_MODULE_2__/* ["default"].SMART_NUMBER_SIGNED */ .Z.SMART_NUMBER_SIGNED, (0,_factories_createSmartNumberFormatter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
      signed: true
    }));
    this.setDefaultKey(_NumberFormats__WEBPACK_IMPORTED_MODULE_2__/* ["default"].SMART_NUMBER */ .Z.SMART_NUMBER);
  }

  get(formatterId) {
    const targetFormat = `${formatterId === null || typeof formatterId === 'undefined' || formatterId === '' ? this.defaultKey : formatterId}`.trim();

    if (this.has(targetFormat)) {
      return super.get(targetFormat);
    } // Create new formatter if does not exist


    const formatter = (0,_factories_createD3NumberFormatter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
      formatString: targetFormat
    });
    this.registerValue(targetFormat, formatter);
    return formatter;
  }

  format(formatterId, value) {
    return this.get(formatterId)(value);
  }

}

/***/ }),

/***/ 50855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "JB": () => (/* binding */ getNumberFormatter),
/* harmony export */   "uf": () => (/* binding */ formatNumber)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23630);
/* harmony import */ var _NumberFormatterRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51341);
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


const getInstance = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(_NumberFormatterRegistry__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getInstance);
function getNumberFormatter(format) {
  return getInstance().get(format);
}
function formatNumber(format, value) {
  return getInstance().format(format, value);
}

/***/ }),

/***/ 82518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createD3NumberFormatter)
/* harmony export */ });
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16722);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65154);
/* harmony import */ var _NumberFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79330);
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



function createD3NumberFormatter(config) {
  const {
    description,
    formatString = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)('config.formatString'),
    label,
    locale
  } = config;
  let formatFunc;
  let isInvalid = false;

  try {
    formatFunc = typeof locale === 'undefined' ? (0,d3_format__WEBPACK_IMPORTED_MODULE_0__/* .format */ .WU)(formatString) : (0,d3_format__WEBPACK_IMPORTED_MODULE_0__/* .formatLocale */ .FF)(locale).format(formatString);
  } catch (error) {
    formatFunc = value => `${value} (Invalid format: ${formatString})`;

    isInvalid = true;
  }

  return new _NumberFormatter__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({
    description,
    formatFunc,
    id: formatString,
    isInvalid,
    label
  });
}

/***/ }),

/***/ 75908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createDurationFormatter)
/* harmony export */ });
/* harmony import */ var pretty_ms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73258);
/* harmony import */ var pretty_ms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pretty_ms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NumberFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79330);
/*
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


function createDurationFormatter(config = {}) {
  const {
    description,
    id,
    label,
    multiplier = 1,
    ...prettyMsOptions
  } = config;
  return new _NumberFormatter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
    description,
    formatFunc: value => pretty_ms__WEBPACK_IMPORTED_MODULE_0___default()(value * multiplier, prettyMsOptions),
    id: id ?? 'duration_format',
    label: label ?? `Duration formatter`
  });
}

/***/ }),

/***/ 49092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createSmartNumberFormatter)
/* harmony export */ });
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16722);
/* harmony import */ var _NumberFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79330);
/* harmony import */ var _NumberFormats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63758);
/*
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



const siFormatter = (0,d3_format__WEBPACK_IMPORTED_MODULE_0__/* .format */ .WU)(`.3~s`);
const float2PointFormatter = (0,d3_format__WEBPACK_IMPORTED_MODULE_0__/* .format */ .WU)(`.2~f`);
const float4PointFormatter = (0,d3_format__WEBPACK_IMPORTED_MODULE_0__/* .format */ .WU)(`.4~f`);

function formatValue(value) {
  if (value === 0) {
    return '0';
  }

  const absoluteValue = Math.abs(value);

  if (absoluteValue >= 1000) {
    // Normal human being are more familiar
    // with billion (B) that giga (G)
    return siFormatter(value).replace('G', 'B');
  }

  if (absoluteValue >= 1) {
    return float2PointFormatter(value);
  }

  if (absoluteValue >= 0.001) {
    return float4PointFormatter(value);
  }

  if (absoluteValue > 0.000001) {
    return `${siFormatter(value * 1000000)}µ`;
  }

  return siFormatter(value);
}

function createSmartNumberFormatter(config = {}) {
  const {
    description,
    signed = false,
    id,
    label
  } = config;
  const getSign = signed ? value => value > 0 ? '+' : '' : () => '';
  return new _NumberFormatter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
    description,
    formatFunc: value => `${getSign(value)}${formatValue(value)}`,
    id: id || signed ? _NumberFormats__WEBPACK_IMPORTED_MODULE_2__/* ["default"].SMART_NUMBER_SIGNED */ .Z.SMART_NUMBER_SIGNED : _NumberFormats__WEBPACK_IMPORTED_MODULE_2__/* ["default"].SMART_NUMBER */ .Z.SMART_NUMBER,
    label: label ?? 'Adaptive formatter'
  });
}

/***/ }),

/***/ 37840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iv": () => (/* reexport safe */ _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css),
/* harmony export */   "tZ": () => (/* reexport safe */ _emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx),
/* harmony export */   "f6": () => (/* reexport safe */ _emotion_react__WEBPACK_IMPORTED_MODULE_3__.a),
/* harmony export */   "zo": () => (/* reexport safe */ _emotion_react__WEBPACK_IMPORTED_MODULE_3__.C),
/* harmony export */   "Zz": () => (/* reexport safe */ _emotion_react__WEBPACK_IMPORTED_MODULE_3__.b),
/* harmony export */   "S9": () => (/* reexport safe */ _emotion_cache__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "Fg": () => (/* binding */ useTheme),
/* harmony export */   "Yi": () => (/* binding */ emotionCache),
/* harmony export */   "iK": () => (/* binding */ styled),
/* harmony export */   "K6": () => (/* binding */ supersetTheme)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42968);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68135);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23882);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11965);
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





function useTheme() {
  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.u)(); // in the case there is no theme, useTheme returns an empty object

  if (Object.keys(theme).length === 0 && theme.constructor === Object) {
    throw new Error('useTheme() could not find a ThemeContext. The <ThemeProvider/> component is likely missing from the app.');
  }

  return theme;
}
const emotionCache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
  key: 'superset'
});
const styled = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
const defaultTheme = {
  borderRadius: 4,
  colors: {
    text: {
      label: '#879399',
      help: '#737373'
    },
    primary: {
      base: '#20A7C9',
      dark1: '#1A85A0',
      dark2: '#156378',
      light1: '#79CADE',
      light2: '#A5DAE9',
      light3: '#D2EDF4',
      light4: '#E9F6F9',
      light5: '#F3F8FA'
    },
    secondary: {
      base: '#444E7C',
      dark1: '#363E63',
      dark2: '#282E4A',
      dark3: '#1B1F31',
      light1: '#8E94B0',
      light2: '#B4B8CA',
      light3: '#D9DBE4',
      light4: '#ECEEF2',
      light5: '#F5F5F8'
    },
    grayscale: {
      base: '#666666',
      dark1: '#323232',
      dark2: '#000000',
      light1: '#B2B2B2',
      light2: '#E0E0E0',
      light3: '#F0F0F0',
      light4: '#F7F7F7',
      light5: '#FFFFFF'
    },
    error: {
      base: '#E04355',
      dark1: '#A7323F',
      dark2: '#6F212A',
      light1: '#EFA1AA',
      light2: '#FAEDEE'
    },
    warning: {
      base: '#FF7F44',
      dark1: '#BF5E33',
      dark2: '#7F3F21',
      light1: '#FEC0A1',
      light2: '#FFF2EC'
    },
    alert: {
      base: '#FCC700',
      dark1: '#BC9501',
      dark2: '#7D6300',
      light1: '#FDE380',
      light2: '#FEF9E6'
    },
    success: {
      base: '#5AC189',
      dark1: '#439066',
      dark2: '#2B6144',
      light1: '#ACE1C4',
      light2: '#EEF8F3'
    },
    info: {
      base: '#66BCFE',
      dark1: '#4D8CBE',
      dark2: '#315E7E',
      light1: '#B3DEFE',
      light2: '#EFF8FE'
    }
  },
  opacity: {
    light: '10%',
    mediumLight: '35%',
    mediumHeavy: '60%',
    heavy: '80%'
  },
  typography: {
    families: {
      sansSerif: `'Inter', Helvetica, Arial`,
      serif: `Georgia, 'Times New Roman', Times, serif`,
      monospace: `'Fira Code', 'Courier New', monospace`
    },
    weights: {
      light: 200,
      normal: 400,
      bold: 700
    },
    sizes: {
      xxs: 9,
      xs: 10,
      s: 12,
      m: 14,
      l: 16,
      xl: 21,
      xxl: 28
    }
  },
  zIndex: {
    aboveDashboardCharts: 10,
    dropdown: 11,
    max: 3000
  },
  transitionTiming: 0.3,
  gridUnit: 4
};
const supersetTheme = defaultTheme;

/***/ }),

/***/ 76187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ LOCAL_PREFIX),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
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
const LOCAL_PREFIX = 'local!';
const DATABASE_DATETIME = '%Y-%m-%d %H:%M:%S';
const DATABASE_DATETIME_REVERSE = '%d-%m-%Y %H:%M:%S';
const US_DATE = '%m/%d/%Y';
const INTERNATIONAL_DATE = '%d/%m/%Y';
const DATABASE_DATE = '%Y-%m-%d';
const TIME = '%H:%M:%S';
const TimeFormats = {
  DATABASE_DATE,
  DATABASE_DATETIME,
  DATABASE_DATETIME_REVERSE,
  INTERNATIONAL_DATE,
  TIME,
  US_DATE
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeFormats);

/***/ }),

/***/ 60270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ PREVIEW_TIME),
  "Z": () => (/* binding */ time_format_TimeFormatter)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/models/ExtensibleFunction.js
var ExtensibleFunction = __webpack_require__(84240);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/isRequired.js
var isRequired = __webpack_require__(65154);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/time-format/utils/stringifyTimeInput.js
/*
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
function stringifyTimeInput(value, fn) {
  if (value === null || value === undefined) {
    return `${value}`;
  }

  return fn(value instanceof Date ? value : new Date(value));
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/time-format/TimeFormatter.js
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



const PREVIEW_TIME = new Date(Date.UTC(2017, 1, 14, 11, 22, 33)); // Use type augmentation to indicate that
// an instance of TimeFormatter is also a function

class TimeFormatter extends ExtensibleFunction/* default */.Z {
  constructor(config) {
    super(value => this.format(value));
    this.id = void 0;
    this.label = void 0;
    this.description = void 0;
    this.formatFunc = void 0;
    this.useLocalTime = void 0;
    const {
      id = (0,isRequired/* default */.Z)('config.id'),
      label,
      description = '',
      formatFunc = (0,isRequired/* default */.Z)('config.formatFunc'),
      useLocalTime = false
    } = config;
    this.id = id;
    this.label = label ?? id;
    this.description = description;
    this.formatFunc = formatFunc;
    this.useLocalTime = useLocalTime;
  }

  format(value) {
    return stringifyTimeInput(value, time => this.formatFunc(time));
  }

  preview(value = PREVIEW_TIME) {
    return `${value.toUTCString()} => ${this.format(value)}`;
  }

}

/* harmony default export */ const time_format_TimeFormatter = (TimeFormatter);

/***/ }),

/***/ 14826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ TimeFormatterRegistrySingleton),
  "mr": () => (/* binding */ formatTime),
  "ns": () => (/* binding */ formatTimeRange),
  "bt": () => (/* binding */ getTimeFormatter),
  "uh": () => (/* binding */ getTimeFormatterForGranularity),
  "Rg": () => (/* binding */ getTimeRangeFormatter)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/makeSingleton.js
var makeSingleton = __webpack_require__(23630);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/models/RegistryWithDefaultKey.js
var RegistryWithDefaultKey = __webpack_require__(93721);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/models/Registry.js
var Registry = __webpack_require__(8018);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/TimeFormats.js
var TimeFormats = __webpack_require__(76187);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/factories/createD3TimeFormatter.js
var createD3TimeFormatter = __webpack_require__(52046);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/time-format/TimeFormatterRegistry.js
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



class TimeFormatterRegistry extends RegistryWithDefaultKey/* default */.Z {
  constructor() {
    super({
      initialDefaultKey: TimeFormats/* default.DATABASE_DATETIME */.Z.DATABASE_DATETIME,
      name: 'TimeFormatter',
      overwritePolicy: Registry/* OverwritePolicy.WARN */.r.WARN
    });
  }

  get(format) {
    const targetFormat = `${format === null || typeof format === 'undefined' || format === '' ? this.defaultKey : format}`.trim();

    if (this.has(targetFormat)) {
      return super.get(targetFormat);
    } // Create new formatter if does not exist


    const useLocalTime = targetFormat.startsWith(TimeFormats/* LOCAL_PREFIX */.D);
    const formatString = targetFormat.replace(TimeFormats/* LOCAL_PREFIX */.D, '');
    const formatter = (0,createD3TimeFormatter/* default */.Z)({
      formatString,
      useLocalTime
    });
    this.registerValue(targetFormat, formatter);
    return formatter;
  }

  format(format, value) {
    return this.get(format)(value);
  }

}
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/TimeFormatter.js + 1 modules
var TimeFormatter = __webpack_require__(60270);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/types.js
var types = __webpack_require__(30794);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/time-format/TimeFormatsForGranularity.js
/*
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


const {
  DATABASE_DATE,
  DATABASE_DATETIME
} = TimeFormats/* default */.Z;
const MINUTE = '%Y-%m-%d %H:%M';
/**
 * Map time granularity to d3-format string
 */

const TimeFormatsForGranularity = {
  [types/* TimeGranularity.DATE */.A.DATE]: DATABASE_DATE,
  [types/* TimeGranularity.SECOND */.A.SECOND]: DATABASE_DATETIME,
  [types/* TimeGranularity.MINUTE */.A.MINUTE]: MINUTE,
  [types/* TimeGranularity.FIVE_MINUTES */.A.FIVE_MINUTES]: MINUTE,
  [types/* TimeGranularity.TEN_MINUTES */.A.TEN_MINUTES]: MINUTE,
  [types/* TimeGranularity.FIFTEEN_MINUTES */.A.FIFTEEN_MINUTES]: MINUTE,
  [types/* TimeGranularity.THIRTY_MINUTES */.A.THIRTY_MINUTES]: MINUTE,
  [types/* TimeGranularity.HOUR */.A.HOUR]: '%Y-%m-%d %H:00',
  [types/* TimeGranularity.DAY */.A.DAY]: DATABASE_DATE,
  [types/* TimeGranularity.WEEK */.A.WEEK]: DATABASE_DATE,
  [types/* TimeGranularity.MONTH */.A.MONTH]: '%b %Y',
  [types/* TimeGranularity.QUARTER */.A.QUARTER]: '%Y Q%q',
  [types/* TimeGranularity.YEAR */.A.YEAR]: '%Y',
  [types/* TimeGranularity.WEEK_STARTING_SUNDAY */.A.WEEK_STARTING_SUNDAY]: DATABASE_DATE,
  [types/* TimeGranularity.WEEK_STARTING_MONDAY */.A.WEEK_STARTING_MONDAY]: DATABASE_DATE,
  [types/* TimeGranularity.WEEK_ENDING_SATURDAY */.A.WEEK_ENDING_SATURDAY]: DATABASE_DATE,
  [types/* TimeGranularity.WEEK_ENDING_SUNDAY */.A.WEEK_ENDING_SUNDAY]: DATABASE_DATE
};
/* harmony default export */ const time_format_TimeFormatsForGranularity = (TimeFormatsForGranularity);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/time-format/utils/createTime.js
/*
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
function createTime(mode, year, month = 0, date = 1, hours = 0, minutes = 0, seconds = 0, milliseconds = 0) {
  const args = [year, month, date, hours, minutes, seconds, milliseconds];
  return mode === 'local' ? new Date(...args) : new Date(Date.UTC(...args));
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/time-format/utils/createTimeRangeFromGranularity.js
/*
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


const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = 60 * MS_IN_SECOND;
const MS_IN_HOUR = 60 * MS_IN_MINUTE;

function deductOneMs(time) {
  return new Date(time.getTime() - 1);
}

function computeEndTimeFromGranularity(time, granularity, useLocalTime) {
  const date = useLocalTime ? time.getDate() : time.getUTCDate();
  const month = useLocalTime ? time.getMonth() : time.getUTCMonth();
  const year = useLocalTime ? time.getFullYear() : time.getUTCFullYear();
  const mode = useLocalTime ? 'local' : 'utc';

  switch (granularity) {
    case types/* TimeGranularity.SECOND */.A.SECOND:
      return new Date(time.getTime() + MS_IN_SECOND - 1);

    case types/* TimeGranularity.MINUTE */.A.MINUTE:
      return new Date(time.getTime() + MS_IN_MINUTE - 1);

    case types/* TimeGranularity.FIVE_MINUTES */.A.FIVE_MINUTES:
      return new Date(time.getTime() + MS_IN_MINUTE * 5 - 1);

    case types/* TimeGranularity.TEN_MINUTES */.A.TEN_MINUTES:
      return new Date(time.getTime() + MS_IN_MINUTE * 10 - 1);

    case types/* TimeGranularity.FIFTEEN_MINUTES */.A.FIFTEEN_MINUTES:
      return new Date(time.getTime() + MS_IN_MINUTE * 15 - 1);

    case types/* TimeGranularity.THIRTY_MINUTES */.A.THIRTY_MINUTES:
      return new Date(time.getTime() + MS_IN_MINUTE * 30 - 1);

    case types/* TimeGranularity.HOUR */.A.HOUR:
      return new Date(time.getTime() + MS_IN_HOUR - 1);
    // For the day granularity and above, using Date overflow is better than adding timestamp
    // because it will also handle daylight saving.

    case types/* TimeGranularity.WEEK */.A.WEEK:
    case types/* TimeGranularity.WEEK_STARTING_SUNDAY */.A.WEEK_STARTING_SUNDAY:
    case types/* TimeGranularity.WEEK_STARTING_MONDAY */.A.WEEK_STARTING_MONDAY:
      return deductOneMs(createTime(mode, year, month, date + 7));

    case types/* TimeGranularity.MONTH */.A.MONTH:
      return deductOneMs(createTime(mode, year, month + 1));

    case types/* TimeGranularity.QUARTER */.A.QUARTER:
      return deductOneMs(createTime(mode, year, (Math.floor(month / 3) + 1) * 3));

    case types/* TimeGranularity.YEAR */.A.YEAR:
      return deductOneMs(createTime(mode, year + 1));
    // For the WEEK_ENDING_XXX cases,
    // currently assume "time" returned from database is supposed to be the end time
    // (in contrast to all other granularities that the returned time is start time).
    // However, the returned "time" is at 00:00:00.000, so have to add 23:59:59.999.

    case types/* TimeGranularity.WEEK_ENDING_SATURDAY */.A.WEEK_ENDING_SATURDAY:
    case types/* TimeGranularity.WEEK_ENDING_SUNDAY */.A.WEEK_ENDING_SUNDAY:
    case types/* TimeGranularity.DATE */.A.DATE:
    case types/* TimeGranularity.DAY */.A.DAY:
    default:
      return deductOneMs(createTime(mode, year, month, date + 1));
  }
}

function createTimeRangeFromGranularity(time, granularity, useLocalTime = false) {
  const endTime = computeEndTimeFromGranularity(time, granularity, useLocalTime);

  if (granularity === types/* TimeGranularity.WEEK_ENDING_SATURDAY */.A.WEEK_ENDING_SATURDAY || granularity === types/* TimeGranularity.WEEK_ENDING_SUNDAY */.A.WEEK_ENDING_SUNDAY) {
    const date = useLocalTime ? time.getDate() : time.getUTCDate();
    const month = useLocalTime ? time.getMonth() : time.getUTCMonth();
    const year = useLocalTime ? time.getFullYear() : time.getUTCFullYear();
    const startTime = createTime(useLocalTime ? 'local' : 'utc', year, month, date - 6);
    return [startTime, endTime];
  }

  return [time, endTime];
}
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/models/ExtensibleFunction.js
var ExtensibleFunction = __webpack_require__(84240);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/time-format/TimeRangeFormatter.js
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


class TimeRangeFormatter extends ExtensibleFunction/* default */.Z {
  constructor(config) {
    super(value => this.format(value));
    this.id = void 0;
    this.label = void 0;
    this.description = void 0;
    this.formatFunc = void 0;
    this.useLocalTime = void 0;
    const {
      id,
      label,
      description = '',
      formatFunc,
      useLocalTime = false
    } = config;
    this.id = id;
    this.label = label ?? id;
    this.description = description;
    this.formatFunc = formatFunc;
    this.useLocalTime = useLocalTime;
  }

  format(values) {
    return this.formatFunc(values);
  }

}

/* harmony default export */ const time_format_TimeRangeFormatter = (TimeRangeFormatter);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/time-format/TimeFormatterRegistrySingleton.js
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







const getInstance = (0,makeSingleton/* default */.Z)(TimeFormatterRegistry);
/* harmony default export */ const TimeFormatterRegistrySingleton = (getInstance);
function getTimeRangeFormatter(formatId) {
  return new time_format_TimeRangeFormatter({
    id: formatId || 'undefined',
    formatFunc: range => {
      const format = getInstance().get(formatId);
      const [start, end] = range.map(value => format(value));
      return start === end ? start : [start, end].join(' — ');
    },
    useLocalTime: formatId == null ? void 0 : formatId.startsWith(TimeFormats/* LOCAL_PREFIX */.D)
  });
}
function formatTimeRange(formatId, range) {
  return getTimeRangeFormatter(formatId)(range);
}
function getTimeFormatter(formatId, granularity) {
  if (granularity) {
    const formatString = formatId || time_format_TimeFormatsForGranularity[granularity];
    const timeRangeFormatter = getTimeRangeFormatter(formatString);
    return new TimeFormatter/* default */.Z({
      id: [formatString, granularity].join('/'),
      formatFunc: value => timeRangeFormatter.format(createTimeRangeFromGranularity(value, granularity, timeRangeFormatter.useLocalTime)),
      useLocalTime: timeRangeFormatter.useLocalTime
    });
  }

  return getInstance().get(formatId);
}
/**
 * Syntactic sugar for backward compatibility
 * TODO: Deprecate this in the next breaking change.
 * @param granularity
 */

function getTimeFormatterForGranularity(granularity) {
  return getTimeFormatter(undefined, granularity);
}
function formatTime(formatId, value, granularity) {
  return getTimeFormatter(formatId, granularity)(value);
}

/***/ }),

/***/ 52046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createD3TimeFormatter)
/* harmony export */ });
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90317);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30472);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65154);
/* harmony import */ var _TimeFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60270);
/* harmony import */ var _TimeFormats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76187);
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




function createD3TimeFormatter(config) {
  const {
    description,
    formatString = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('formatString'),
    label,
    locale,
    useLocalTime = false
  } = config;
  const id = useLocalTime ? `${_TimeFormats__WEBPACK_IMPORTED_MODULE_1__/* .LOCAL_PREFIX */ .D}${formatString}` : formatString;
  let formatFunc;

  if (typeof locale === 'undefined') {
    const format = useLocalTime ? d3_time_format__WEBPACK_IMPORTED_MODULE_2__/* .timeFormat */ .i$ : d3_time_format__WEBPACK_IMPORTED_MODULE_2__/* .utcFormat */ .g0;
    formatFunc = format(formatString);
  } else {
    const localeObject = (0,d3_time_format__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(locale);
    formatFunc = useLocalTime ? localeObject.format(formatString) : localeObject.utcFormat(formatString);
  }

  return new _TimeFormatter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z({
    description,
    formatFunc,
    id,
    label,
    useLocalTime
  });
}

/***/ }),

/***/ 62990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createMultiFormatter)
});

// EXTERNAL MODULE: ./node_modules/d3-time-format/src/defaultLocale.js
var defaultLocale = __webpack_require__(90317);
// EXTERNAL MODULE: ./node_modules/d3-time/src/index.js + 16 modules
var src = __webpack_require__(35009);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/time-format/utils/d3Time.js
/*
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


function createUtils(useLocalTime = false) {
  let floorSecond;
  let floorMinute;
  let floorHour;
  let floorDay;
  let floorWeek;
  let floorWeekStartOnSunday;
  let floorWeekStartOnMonday;
  let floorWeekStartOnTuesday;
  let floorWeekStartOnWednesday;
  let floorWeekStartOnThursday;
  let floorWeekStartOnFriday;
  let floorWeekStartOnSaturday;
  let floorMonth;
  let floorYear;

  if (useLocalTime) {
    floorSecond = src/* timeSecond */.S1;
    floorMinute = src/* timeMinute */.Z_;
    floorHour = src/* timeHour */.WQ;
    floorDay = src/* timeDay */.rr;
    floorWeek = src/* timeWeek */.NG;
    floorWeekStartOnSunday = src/* timeSunday */.Zy;
    floorWeekStartOnMonday = src/* timeMonday */.Ox;
    floorWeekStartOnTuesday = src/* timeTuesday */.YD;
    floorWeekStartOnWednesday = src/* timeWednesday */.EF;
    floorWeekStartOnThursday = src/* timeThursday */.Ig;
    floorWeekStartOnFriday = src/* timeFriday */.y2;
    floorWeekStartOnSaturday = src/* timeSaturday */.Lq;
    floorMonth = src/* timeMonth */.F0;
    floorYear = src/* timeYear */.jB;
  } else {
    floorSecond = src/* utcSecond */.OL;
    floorMinute = src/* utcMinute */.rz;
    floorHour = src/* utcHour */.lM;
    floorDay = src/* utcDay */.AN;
    floorWeek = src/* utcWeek */.YF;
    floorWeekStartOnSunday = src/* utcSunday */.pI;
    floorWeekStartOnMonday = src/* utcMonday */.l6;
    floorWeekStartOnTuesday = src/* utcTuesday */.J1;
    floorWeekStartOnWednesday = src/* utcWednesday */.b3;
    floorWeekStartOnThursday = src/* utcThursday */.hB;
    floorWeekStartOnFriday = src/* utcFriday */.QQ;
    floorWeekStartOnSaturday = src/* utcSaturday */.g4;
    floorMonth = src/* utcMonth */.me;
    floorYear = src/* utcYear */.ol;
  }

  return {
    floorSecond,
    floorMinute,
    floorHour,
    floorDay,
    floorWeek,
    floorWeekStartOnSunday,
    floorWeekStartOnMonday,
    floorWeekStartOnTuesday,
    floorWeekStartOnWednesday,
    floorWeekStartOnThursday,
    floorWeekStartOnFriday,
    floorWeekStartOnSaturday,
    floorMonth,
    floorYear,
    hasMillisecond: date => floorSecond(date) < date,
    hasSecond: date => floorMinute(date) < date,
    hasMinute: date => floorHour(date) < date,
    hasHour: date => floorDay(date) < date,
    isNotFirstDayOfMonth: date => floorMonth(date) < date,
    isNotFirstDayOfWeek: date => floorWeek(date) < date,
    isNotFirstDayOfWeekStartOnSunday: date => floorWeekStartOnSunday(date) < date,
    isNotFirstDayOfWeekStartOnMonday: date => floorWeekStartOnMonday(date) < date,
    isNotFirstDayOfWeekStartOnTuesday: date => floorWeekStartOnTuesday(date) < date,
    isNotFirstDayOfWeekStartOnWednesday: date => floorWeekStartOnWednesday(date) < date,
    isNotFirstDayOfWeekStartOnThursday: date => floorWeekStartOnThursday(date) < date,
    isNotFirstDayOfWeekStartOnFriday: date => floorWeekStartOnFriday(date) < date,
    isNotFirstDayOfWeekStartOnSaturday: date => floorWeekStartOnSaturday(date) < date,
    isNotFirstMonth: date => floorYear(date) < date
  };
}

const utcUtils = createUtils();
const localTimeUtils = createUtils(true);

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/TimeFormatter.js + 1 modules
var TimeFormatter = __webpack_require__(60270);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/time-format/factories/createMultiFormatter.js
/*
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



function createMultiFormatter({
  id,
  label,
  description,
  formats = {},
  useLocalTime = false
}) {
  const {
    millisecond = '.%L',
    second = ':%S',
    minute = '%I:%M',
    hour = '%I %p',
    day = '%a %d',
    week = '%b %d',
    month = '%B',
    year = '%Y'
  } = formats;
  const format = useLocalTime ? defaultLocale/* timeFormat */.i$ : defaultLocale/* utcFormat */.g0;
  const formatMillisecond = format(millisecond);
  const formatSecond = format(second);
  const formatMinute = format(minute);
  const formatHour = format(hour);
  const formatDay = format(day);
  const formatFirstDayOfWeek = format(week);
  const formatMonth = format(month);
  const formatYear = format(year);
  const {
    hasMillisecond,
    hasSecond,
    hasMinute,
    hasHour,
    isNotFirstDayOfMonth,
    isNotFirstDayOfWeek,
    isNotFirstMonth
  } = useLocalTime ? localTimeUtils : utcUtils;

  function multiFormatFunc(date) {
    if (hasMillisecond(date)) {
      return formatMillisecond;
    }

    if (hasSecond(date)) {
      return formatSecond;
    }

    if (hasMinute(date)) {
      return formatMinute;
    }

    if (hasHour(date)) {
      return formatHour;
    }

    if (isNotFirstDayOfMonth(date)) {
      return isNotFirstDayOfWeek(date) ? formatDay : formatFirstDayOfWeek;
    }

    if (isNotFirstMonth(date)) {
      return formatMonth;
    }

    return formatYear;
  }

  return new TimeFormatter/* default */.Z({
    description,
    formatFunc: date => multiFormatFunc(date)(date),
    id,
    label,
    useLocalTime
  });
}

/***/ }),

/***/ 11304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_createMultiFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62990);
/*
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

const smartDateFormatter = (0,_factories_createMultiFormatter__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
  id: 'smart_date',
  label: 'Adaptative Formatting',
  formats: {
    millisecond: '.%Lms',
    second: ':%Ss',
    minute: '%I:%M',
    hour: '%I %p',
    day: '%a %d',
    week: '%b %d',
    month: '%B',
    year: '%Y'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smartDateFormatter);

/***/ }),

/***/ 47447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_createMultiFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62990);
/*
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

const smartDateFormatter = (0,_factories_createMultiFormatter__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
  id: 'smart_date_verbose',
  label: 'Verbose Adaptative Formatting',
  formats: {
    millisecond: '.%L',
    second: '%a %b %d, %I:%M:%S %p',
    minute: '%a %b %d, %I:%M %p',
    hour: '%a %b %d, %I %p',
    day: '%a %b %-e',
    week: '%a %b %-e',
    month: '%b %Y',
    year: '%Y'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smartDateFormatter);

/***/ }),

/***/ 30794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ TimeGranularity)
/* harmony export */ });
/*
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
 * search for `builtin_time_grains` in incubator-superset/superset/db_engine_specs/base.py
 */
const TimeGranularity = {
  DATE: 'date',
  SECOND: 'PT1S',
  MINUTE: 'PT1M',
  FIVE_MINUTES: 'PT5M',
  TEN_MINUTES: 'PT10M',
  FIFTEEN_MINUTES: 'PT15M',
  THIRTY_MINUTES: 'PT30M',
  HOUR: 'PT1H',
  DAY: 'P1D',
  WEEK: 'P1W',
  WEEK_STARTING_SUNDAY: '1969-12-28T00:00:00Z/P1W',
  WEEK_STARTING_MONDAY: '1969-12-29T00:00:00Z/P1W',
  WEEK_ENDING_SATURDAY: 'P1W/1970-01-03T00:00:00Z',
  WEEK_ENDING_SUNDAY: 'P1W/1970-01-04T00:00:00Z',
  MONTH: 'P1M',
  QUARTER: 'P3M',
  YEAR: 'P1Y'
};

/***/ }),

/***/ 60650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "oK": () => (/* binding */ addLocaleData),
  "Zt": () => (/* binding */ addTranslation),
  "hk": () => (/* binding */ addTranslations),
  "jQ": () => (/* binding */ configure),
  "t": () => (/* binding */ t),
  "tn": () => (/* binding */ tn)
});

// EXTERNAL MODULE: ./node_modules/jed/jed.js
var jed = __webpack_require__(42353);
var jed_default = /*#__PURE__*/__webpack_require__.n(jed);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/logging.js
var logging = __webpack_require__(23099);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/translation/Translator.js
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


const DEFAULT_LANGUAGE_PACK = {
  domain: 'superset',
  locale_data: {
    superset: {
      '': {
        domain: 'superset',
        lang: 'en',
        plural_forms: 'nplurals=2; plural=(n != 1)'
      }
    }
  }
};
class Translator {
  constructor(config = {}) {
    this.i18n = void 0;
    this.locale = void 0;
    const {
      languagePack = DEFAULT_LANGUAGE_PACK
    } = config;
    this.i18n = new (jed_default())(languagePack);
    this.locale = this.i18n.options.locale_data.superset[''].lang;
  }
  /**
   * Add additional translations on the fly, used by plugins.
   */


  addTranslation(key, texts) {
    const translations = this.i18n.options.locale_data.superset;

    if (key in translations) {
      logging/* default.warn */.Z.warn(`Duplicate translation key "${key}", will override.`);
    }

    translations[key] = texts;
  }
  /**
   * Add a series of translations.
   */


  addTranslations(translations) {
    if (translations && !Array.isArray(translations)) {
      Object.entries(translations).forEach(([key, vals]) => this.addTranslation(key, vals));
    } else {
      logging/* default.warn */.Z.warn('Invalid translations');
    }
  }

  addLocaleData(data) {
    // always fallback to English
    const translations = (data == null ? void 0 : data[this.locale]) || (data == null ? void 0 : data.en);

    if (translations) {
      this.addTranslations(translations);
    } else {
      logging/* default.warn */.Z.warn('Invalid locale data');
    }
  }

  translate(input, ...args) {
    return this.i18n.translate(input).fetch(...args);
  }

  translateWithNumber(key, ...args) {
    const [plural, num, ...rest] = args;

    if (typeof plural === 'number') {
      return this.i18n.translate(key).ifPlural(plural, key).fetch(plural, num, ...args);
    }

    return this.i18n.translate(key).ifPlural(num, plural).fetch(...rest);
  }

}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js
/*
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

/* eslint no-console: 0 */

let singleton;
let isConfigured = false;

function configure(config) {
  singleton = new Translator(config);
  isConfigured = true;
  return singleton;
}

function getInstance() {
  if (!isConfigured) {
    console.warn('You should call configure(...) before calling other methods');
  }

  if (typeof singleton === 'undefined') {
    singleton = new Translator();
  }

  return singleton;
}

function addTranslation(key, translations) {
  return getInstance().addTranslation(key, translations);
}

function addTranslations(translations) {
  return getInstance().addTranslations(translations);
}

function addLocaleData(data) {
  return getInstance().addLocaleData(data);
}

function t(input, ...args) {
  return getInstance().translate(input, ...args);
}

function tn(key, ...args) {
  return getInstance().translateWithNumber(key, ...args);
}



/***/ }),

/***/ 65154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ isRequired)
/* harmony export */ });
/*
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
function isRequired(field) {
  throw new Error(`${field} is required.`);
}

/***/ }),

/***/ 23099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
const console = window.console || {};

const log = console.log || (() => {});

const logger = {
  log,
  debug: console.debug || log,
  info: console.info || log,
  warn: console.warn || log,
  error: console.error || log,
  trace: console.trace || log,
  table: console.table || log
};
/**
 * Superset frontend logger, currently just an alias to console.
 * This may be extended to support numerous console operations safely
 * i.e.: https://developer.mozilla.org/en-US/docs/Web/API/Console
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);

/***/ }),

/***/ 23630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ makeSingleton)
/* harmony export */ });
/*
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
function makeSingleton(BaseClass, ...args) {
  let singleton;
  return function getInstance() {
    if (!singleton) {
      singleton = new BaseClass(...args);
    }

    return singleton;
  };
}

/***/ }),

/***/ 406:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _ColorScheme = _interopRequireDefault(__webpack_require__(26589));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
class CategoricalScheme extends _ColorScheme.default {}

exports["default"] = CategoricalScheme;

/***/ }),

/***/ 26589:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

/*
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
class ColorScheme {
  constructor({
    colors,
    description = '',
    id,
    label,
    isDefault
  }) {
    this.colors = void 0;
    this.description = void 0;
    this.id = void 0;
    this.label = void 0;
    this.isDefault = void 0;
    this.id = id;
    this.label = label ?? id;
    this.colors = colors;
    this.description = description;
    this.isDefault = isDefault;
  }

}

exports["default"] = ColorScheme;

/***/ }),

/***/ 94367:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _d3Scale = __webpack_require__(60404);

var _d3Interpolate = __webpack_require__(87468);

var _ColorScheme = _interopRequireDefault(__webpack_require__(26589));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
class SequentialScheme extends _ColorScheme.default {
  constructor(config) {
    super(config);
    this.isDiverging = void 0;
    const {
      isDiverging = false
    } = config;
    this.isDiverging = isDiverging;
  }
  /**
   * Return a linear scale with a new domain interpolated from the input domain
   * to match the number of elements in the color scheme
   * because D3 continuous scale uses piecewise mapping between domain and range.
   * This is a common use-case when the domain is [min, max]
   * and the palette has more than two colors.
   *
   * @param domain domain of the scale
   * @param modifyRange Set this to true if you don't want to modify the domain and
   * want to interpolate range to have the same number of elements with domain instead.
   */


  createLinearScale(domain = [0, 1], modifyRange = false) {
    const scale = (0, _d3Scale.scaleLinear)().interpolate(_d3Interpolate.interpolateHcl).clamp(true);
    return modifyRange || domain.length === this.colors.length ? scale.domain(domain).range(this.getColors(domain.length)) : scale.domain((0, _d3Interpolate.quantize)((0, _d3Interpolate.piecewise)(_d3Interpolate.interpolateNumber, domain), this.colors.length)).range(this.colors);
  }
  /**
   * Get colors from this scheme
   * @param numColors number of colors to return.
   * Will interpolate the current scheme to match the number of colors requested
   * @param extent The extent of the color range to use.
   * For example [0.2, 1] will rescale the color scheme
   * such that color values in the range [0, 0.2) are excluded from the scheme.
   */


  getColors(numColors = this.colors.length, extent = [0, 1]) {
    if (numColors === this.colors.length && extent[0] === 0 && extent[1] === 1) {
      return this.colors;
    }

    const piecewiseScale = (0, _d3Interpolate.piecewise)(_d3Interpolate.interpolateHcl, this.colors);
    const adjustExtent = (0, _d3Scale.scaleLinear)().range(extent).clamp(true);
    return (0, _d3Interpolate.quantize)(t => piecewiseScale(adjustExtent(t)), numColors);
  }

}

exports["default"] = SequentialScheme;

/***/ }),

/***/ 23840:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.Z = void 0;

var _CategoricalScheme = _interopRequireDefault(__webpack_require__(406));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
const schemes = [{
  id: 'bnbColors',
  label: 'Airbnb Colors',
  colors: ['#ff5a5f', // rausch
  '#7b0051', // hackb
  '#007A87', // kazan
  '#00d1c1', // babu
  '#8ce071', // lima
  '#ffb400', // beach
  '#b4a76c', // barol
  '#ff8083', '#cc0086', '#00a1b3', '#00ffeb', '#bbedab', '#ffd266', '#cbc29a', '#ff3339', '#ff1ab1', '#005c66', '#00b3a5', '#55d12e', '#b37e00', '#988b4e']
}].map(s => new _CategoricalScheme.default(s));
var _default = schemes;
exports.Z = _default;

/***/ }),

/***/ 86423:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.Z = void 0;

var _CategoricalScheme = _interopRequireDefault(__webpack_require__(406));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
const schemes = [{
  id: 'd3Category10',
  label: 'D3 Category 10',
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf']
}, {
  id: 'd3Category20',
  label: 'D3 Category 20',
  colors: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
}, {
  id: 'd3Category20b',
  label: 'D3 Category 20b',
  colors: ['#393b79', '#5254a3', '#6b6ecf', '#9c9ede', '#637939', '#8ca252', '#b5cf6b', '#cedb9c', '#8c6d31', '#bd9e39', '#e7ba52', '#e7cb94', '#843c39', '#ad494a', '#d6616b', '#e7969c', '#7b4173', '#a55194', '#ce6dbd', '#de9ed6']
}, {
  id: 'd3Category20c',
  label: 'D3 Category 20c',
  colors: ['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#e6550d', '#fd8d3c', '#fdae6b', '#fdd0a2', '#31a354', '#74c476', '#a1d99b', '#c7e9c0', '#756bb1', '#9e9ac8', '#bcbddc', '#dadaeb', '#636363', '#969696', '#bdbdbd', '#d9d9d9']
}].map(s => new _CategoricalScheme.default(s));
var _default = schemes;
exports.Z = _default;

/***/ }),

/***/ 12121:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.Z = void 0;

var _CategoricalScheme = _interopRequireDefault(__webpack_require__(406));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
const schemes = [{
  id: 'echarts4Colors',
  label: 'ECharts v4.x Colors',
  colors: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3']
}, {
  id: 'echarts5Colors',
  label: 'ECharts v5.x Colors',
  colors: ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE', '#3BA272', '#FC8452', '#9A60B4', '#EA7CCC']
}].map(s => new _CategoricalScheme.default(s));
var _default = schemes;
exports.Z = _default;

/***/ }),

/***/ 7474:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.Z = void 0;

var _CategoricalScheme = _interopRequireDefault(__webpack_require__(406));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
const schemes = [{
  id: 'googleCategory10c',
  label: 'Google Category 10c',
  colors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00', '#b82e2e', '#316395']
}, {
  id: 'googleCategory20c',
  label: 'Google Category 20c',
  colors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00', '#b82e2e', '#316395', '#994499', '#22aa99', '#aaaa11', '#6633cc', '#e67300', '#8b0707', '#651067', '#329262', '#5574a6', '#3b3eac']
}].map(s => new _CategoricalScheme.default(s));
var _default = schemes;
exports.Z = _default;

/***/ }),

/***/ 52579:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.Z = void 0;

var _CategoricalScheme = _interopRequireDefault(__webpack_require__(406));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
const schemes = [{
  id: 'lyftColors',
  label: 'Lyft Colors',
  colors: ['#EA0B8C', '#6C838E', '#29ABE2', '#33D9C1', '#9DACB9', '#7560AA', '#2D5584', '#831C4A', '#333D47', '#AC2077']
}].map(s => new _CategoricalScheme.default(s));
var _default = schemes;
exports.Z = _default;

/***/ }),

/***/ 72590:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.Z = void 0;

var _CategoricalScheme = _interopRequireDefault(__webpack_require__(406));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
const schemes = [{
  id: 'presetColors',
  label: 'Preset Colors',
  colors: [// Full color
  '#6BD3B3', '#FCC550', '#408184', '#66CBE2', '#EE5960', '#484E5A', '#FF874E', '#03748E', '#C9BBAB', '#B17BAA', // Pastels
  '#B5E9D9', '#FDE2A7', '#9FC0C1', '#B2E5F0', '#F6ACAF', '#A4A6AC', '#FFC3A6', '#81B9C6', '#E4DDD5', '#D9BDD5']
}].map(s => new _CategoricalScheme.default(s));
var _default = schemes;
exports.Z = _default;

/***/ }),

/***/ 76450:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.Z = void 0;

var _CategoricalScheme = _interopRequireDefault(__webpack_require__(406));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
const schemes = [{
  id: 'supersetColors',
  label: 'Superset Colors',
  colors: [// Full color
  '#1FA8C9', '#454E7C', '#5AC189', '#FF7F44', '#666666', '#E04355', '#FCC700', '#A868B7', '#3CCCCB', '#A38F79', // Pastels
  '#8FD3E4', '#A1A6BD', '#ACE1C4', '#FEC0A1', '#B2B2B2', '#EFA1AA', '#FDE380', '#D3B3DA', '#9EE5E5', '#D1C6BC']
}].map(s => new _CategoricalScheme.default(s));
var _default = schemes;
exports.Z = _default;

/***/ }),

/***/ 84362:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.Z = void 0;

var _SequentialScheme = _interopRequireDefault(__webpack_require__(94367));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
const schemes = [{
  id: 'blue_white_yellow',
  label: 'blue/white/yellow',
  colors: ['#00d1c1', 'white', '#ffb400']
}, {
  id: 'fire',
  colors: ['white', 'yellow', 'red', 'black']
}, {
  id: 'white_black',
  label: 'white/black',
  colors: ['white', 'black']
}, {
  id: 'black_white',
  label: 'black/white',
  colors: ['black', 'white']
}, {
  id: 'dark_blue',
  label: 'dark blues',
  colors: ['#EBF5F8', '#6BB1CC', '#357E9B', '#1B4150', '#092935']
}, {
  id: 'pink_grey',
  label: 'pink/grey',
  isDiverging: true,
  colors: ['#E70B81', '#FAFAFA', '#666666']
}, {
  id: 'greens',
  colors: ['#ffffcc', '#78c679', '#006837']
}, {
  id: 'purples',
  colors: ['#f2f0f7', '#9e9ac8', '#54278f']
}, {
  id: 'oranges',
  colors: ['#fef0d9', '#fc8d59', '#b30000']
}, {
  id: 'red_yellow_blue',
  label: 'red/yellow/blue',
  isDiverging: true,
  colors: ['#d7191c', '#fdae61', '#ffffbf', '#abd9e9', '#2c7bb6']
}, {
  id: 'brown_white_green',
  label: 'brown/white/green',
  isDiverging: true,
  colors: ['#a6611a', '#dfc27d', '#f5f5f5', '#80cdc1', '#018571']
}, {
  id: 'purple_white_green',
  label: 'purple/white/green',
  isDiverging: true,
  colors: ['#7b3294', '#c2a5cf', '#f7f7f7', '#a6dba0', '#008837']
}, {
  id: 'superset_seq_1',
  label: 'Superset Sequential #1',
  isDiverging: false,
  colors: ['#F4FAD4', '#D7F1AC', '#A9E3AF', '#82CDBB', '#63C1BF', '#1FA8C9', '#2367AC', '#2A2D84', '#251354', '#050415']
}, {
  id: 'superset_seq_2',
  label: 'Superset Sequential #2',
  isDiverging: false,
  colors: ['#FBF1B4', '#FDD093', '#FEAD71', '#FF7F44', '#E04355', '#C53D6F', '#952B7B', '#4F167B', '#251354', '#050415']
}, {
  id: 'superset_div_1',
  label: 'Superset Diverging #1',
  isDiverging: false,
  colors: ['#E04355', '#E87180', '#EFA1AA', '#F7D0D4', '#F6F6F7', '#C8E9F1', '#8FD3E4', '#58BDD7', '#1FA8C9']
}, {
  id: 'superset_div_2',
  label: 'Superset Diverging #2',
  isDiverging: false,
  colors: ['#FF7F44', '#FF9E72', '#FEC0A1', '#FFDFD0', '#F6F6F7', '#C8E9F1', '#8FD3E4', '#58BDD7', '#1FA8C9']
}, {
  id: 'preset_seq_1',
  label: 'Preset Sequential #1',
  isDiverging: false,
  colors: ['#F3FAEB', '#DEF2D7', '#CAEAC4', '#98DEBC', '#69D3B5', '#4AA59D', '#287886', '#0D5B6A', '#03273F', '#03273F']
}, {
  id: 'preset_seq_2',
  label: 'Preset Sequential #2',
  isDiverging: false,
  colors: ['#FEECE8', '#FDE2DA', '#FCCEC2', '#F998AA', '#F76896', '#D13186', '#AC0378', '#790071', '#43026C', '#050415']
}, {
  id: 'preset_div_1',
  label: 'Preset Diverging #1',
  isDiverging: false,
  colors: ['#B17BAA', '#C59DC0', '#D9BDD5', '#D9BDD5', '#F6F6F7', '#CBEFE5', '#98DECA', '#64D0B0', '#32BE96']
}, {
  id: 'preset_div_2',
  label: 'Preset Diverging #2',
  isDiverging: false,
  colors: ['#CB5171', '#D87C94', '#E5A8B7', '#F2D3DB', '#F6F6F7', '#CEE8EC', '#9CD1D8', '#6CBAC6', '#3AA3B2']
}, {
  id: 'echarts_gradient',
  label: 'ECharts gradient',
  isDiverging: false,
  colors: ['#f6EFA6', '#D88273', '#BF444C']
}].map(s => new _SequentialScheme.default(s));
var _default = schemes;
exports.Z = _default;

/***/ }),

/***/ 79563:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.Z = void 0;

var _SequentialScheme = _interopRequireDefault(__webpack_require__(94367));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
const schemes = [{
  id: 'schemeRdBu',
  label: 'red/blue',
  isDiverging: true,
  colors: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061']
}, {
  id: 'schemeBrBG',
  label: 'brown/green',
  isDiverging: true,
  colors: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30']
}, {
  id: 'schemePRGn',
  label: 'purple/green',
  isDiverging: true,
  colors: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b']
}, {
  id: 'schemePiYG',
  label: 'pink/green',
  isDiverging: true,
  colors: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419']
}, {
  id: 'schemePuOr',
  label: 'purple/orange',
  isDiverging: true,
  colors: ['#2d004b', '#542788', '#8073ac', '#b2abd2', '#d8daeb', '#fee0b6', '#fdb863', '#e08214', '#b35806', '#7f3b08']
}, {
  id: 'schemeRdGy',
  label: 'red/gray/black',
  isDiverging: true,
  colors: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a']
}, {
  id: 'schemeRdYlBu',
  label: 'red/yellow/blue',
  colors: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
  isDiverging: true
}, {
  id: 'schemeRdYlGn',
  label: 'red/yellow/green',
  colors: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
  isDiverging: true
}, {
  id: 'schemeSpectral',
  label: 'rainbow',
  colors: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2']
}, {
  id: 'schemeBlues',
  label: 'blues',
  colors: ['#b5d4e9', '#93c3df', '#6daed5', '#4b97c9', '#2f7ebc', '#1864aa', '#0a4a90', '#08306b']
}, {
  id: 'schemeGreens',
  label: 'greens',
  colors: ['#b7e2b1', '#97d494', '#73c378', '#4daf62', '#2f984f', '#157f3b', '#036429', '#00441b']
}, {
  id: 'schemeGrays',
  label: 'grays',
  colors: ['#cecece', '#b4b4b4', '#979797', '#7a7a7a', '#5f5f5f', '#404040', '#1e1e1e', '#000000']
}, {
  id: 'schemeOranges',
  label: 'oranges',
  colors: ['#fdc28c', '#fda762', '#fb8d3d', '#f2701d', '#e25609', '#c44103', '#9f3303', '#7f2704']
}, {
  id: 'schemePurples',
  label: 'purples',
  colors: ['#cecee5', '#b6b5d8', '#9e9bc9', '#8782bc', '#7363ac', '#61409b', '#501f8c', '#3f007d']
}, {
  id: 'schemeReds',
  label: 'reds',
  colors: ['#fcaa8e', '#fc8a6b', '#f9694c', '#ef4533', '#d92723', '#bb151a', '#970b13', '#67000d']
}, {
  id: 'schemeViridis',
  label: 'Viridis',
  colors: ['#482475', '#414487', '#355f8d', '#2a788e', '#21918c', '#22a884', '#44bf70', '#7ad151', '#bddf26', '#fde725']
}, {
  id: 'schemeInferno',
  label: 'Inferno',
  colors: ['#160b39', '#420a68', '#6a176e', '#932667', '#bc3754', '#dd513a', '#f37819', '#fca50a', '#f6d746', '#fcffa4']
}, {
  id: 'schemeMagma',
  label: 'Magma',
  colors: ['#140e36', '#3b0f70', '#641a80', '#8c2981', '#b73779', '#de4968', '#f7705c', '#fe9f6d', '#fecf92', '#fcfdbf']
}, {
  id: 'schemeWarm',
  label: 'Warm',
  colors: ['#963db3', '#bf3caf', '#e4419d', '#fe4b83', '#ff5e63', '#ff7847', '#fb9633', '#e2b72f', '#c6d63c', '#aff05b']
}, {
  id: 'schemeCool',
  label: 'Cool',
  colors: ['#6054c8', '#4c6edb', '#368ce1', '#23abd8', '#1ac7c2', '#1ddfa3', '#30ef82', '#52f667', '#7ff658', '#aff05b']
}, {
  id: 'schemeCubehelixDefault',
  label: 'Cube Helix',
  colors: ['#1a1530', '#163d4e', '#1f6642', '#54792f', '#a07949', '#d07e93', '#cf9cda', '#c1caf3', '#d2eeef', '#ffffff']
}, {
  id: 'schemeBuGn',
  label: 'blue/green',
  colors: ['#b7e4da', '#8fd3c1', '#68c2a3', '#49b17f', '#2f9959', '#157f3c', '#036429', '#00441b']
}, {
  id: 'schemeBuPu',
  label: 'blue/purple',
  colors: ['#b2cae1', '#9cb3d5', '#8f95c6', '#8c74b5', '#8952a5', '#852d8f', '#730f71', '#4d004b']
}, {
  id: 'schemeGnBu',
  label: 'green/blue',
  colors: ['#bde5bf', '#9ed9bb', '#7bcbc4', '#58b7cd', '#399cc6', '#1d7eb7', '#0b60a1', '#084081']
}, {
  id: 'schemeOrRd',
  label: 'orange/red',
  colors: ['#fdca94', '#fdb07a', '#fa8e5d', '#f16c49', '#e04530', '#c81d13', '#a70403', '#7f0000']
}, {
  id: 'schemePuBuGn',
  label: 'purple/blue/green',
  colors: ['#bec9e2', '#98b9d9', '#69a8cf', '#4096c0', '#19879f', '#037877', '#016353', '#014636']
}, {
  id: 'schemePuBu',
  label: 'purple/blue',
  colors: ['#bfc9e2', '#9bb9d9', '#72a8cf', '#4394c3', '#1a7db6', '#0667a1', '#045281', '#023858']
}, {
  id: 'schemePuRd',
  label: 'purple/red',
  colors: ['#d0aad2', '#d08ac2', '#dd63ae', '#e33890', '#d71c6c', '#b70b4f', '#8f023a', '#67001f']
}, {
  id: 'schemeRdPu',
  label: 'red/purple',
  colors: ['#fbb5bc', '#f993b0', '#f369a3', '#e03e98', '#c01788', '#99037c', '#700174', '#49006a']
}, {
  id: 'schemeYlGnBu',
  label: 'yellow/green/blue',
  colors: ['#d5eeb3', '#a9ddb7', '#73c9bd', '#45b4c2', '#2897bf', '#2073b2', '#234ea0', '#1c3185', '#081d58']
}, {
  id: 'schemeYlGn',
  label: 'yellow/green',
  colors: ['#e4f4ac', '#c7e89b', '#a2d88a', '#78c578', '#4eaf63', '#2f944e', '#15793f', '#036034', '#004529']
}, {
  id: 'schemeYlOrBr',
  label: 'yellow/orange/brown',
  colors: ['#feeaa1', '#fed676', '#feba4a', '#fb992c', '#ee7918', '#d85b0a', '#b74304', '#8f3204', '#662506']
}, {
  id: 'schemeYlOrRd',
  label: 'yellow/orange/red',
  colors: ['#fee087', '#fec965', '#feab4b', '#fd893c', '#fa5c2e', '#ec3023', '#d31121', '#af0225', '#800026']
}].map(s => new _SequentialScheme.default(s));
var _default = schemes;
exports.Z = _default;

/***/ }),

/***/ 59707:
/***/ ((module) => {

"use strict";


module.exports = function (fetch, defaults) {
  defaults = defaults || {};
  if (typeof fetch !== 'function') {
    throw new ArgumentError('fetch must be a function');
  }

  if (typeof defaults !== 'object') {
    throw new ArgumentError('defaults must be an object');
  }

  if (defaults.retries !== undefined && !isPositiveInteger(defaults.retries)) {
    throw new ArgumentError('retries must be a positive integer');
  }

  if (defaults.retryDelay !== undefined && !isPositiveInteger(defaults.retryDelay) && typeof defaults.retryDelay !== 'function') {
    throw new ArgumentError('retryDelay must be a positive integer or a function returning a positive integer');
  }

  if (defaults.retryOn !== undefined && !Array.isArray(defaults.retryOn) && typeof defaults.retryOn !== 'function') {
    throw new ArgumentError('retryOn property expects an array or function');
  }

  var baseDefaults = {
    retries: 3,
    retryDelay: 1000,
    retryOn: [],
  };

  defaults = Object.assign(baseDefaults, defaults);

  return function fetchRetry(input, init) {
    var retries = defaults.retries;
    var retryDelay = defaults.retryDelay;
    var retryOn = defaults.retryOn;

    if (init && init.retries !== undefined) {
      if (isPositiveInteger(init.retries)) {
        retries = init.retries;
      } else {
        throw new ArgumentError('retries must be a positive integer');
      }
    }

    if (init && init.retryDelay !== undefined) {
      if (isPositiveInteger(init.retryDelay) || (typeof init.retryDelay === 'function')) {
        retryDelay = init.retryDelay;
      } else {
        throw new ArgumentError('retryDelay must be a positive integer or a function returning a positive integer');
      }
    }

    if (init && init.retryOn) {
      if (Array.isArray(init.retryOn) || (typeof init.retryOn === 'function')) {
        retryOn = init.retryOn;
      } else {
        throw new ArgumentError('retryOn property expects an array or function');
      }
    }

    // eslint-disable-next-line no-undef
    return new Promise(function (resolve, reject) {
      var wrappedFetch = function (attempt) {
        fetch(input, init)
          .then(function (response) {
            if (Array.isArray(retryOn) && retryOn.indexOf(response.status) === -1) {
              resolve(response);
            } else if (typeof retryOn === 'function') {
              try {
                // eslint-disable-next-line no-undef
                return Promise.resolve(retryOn(attempt, null, response))
                  .then(function (retryOnResponse) {
                    if(retryOnResponse) {
                      retry(attempt, null, response);
                    } else {
                      resolve(response);
                    }
                  }).catch(reject);
              } catch (error) {
                reject(error);
              }
            } else {
              if (attempt < retries) {
                retry(attempt, null, response);
              } else {
                resolve(response);
              }
            }
          })
          .catch(function (error) {
            if (typeof retryOn === 'function') {
              try {
                // eslint-disable-next-line no-undef
                Promise.resolve(retryOn(attempt, error, null))
                  .then(function (retryOnResponse) {
                    if(retryOnResponse) {
                      retry(attempt, error, null);
                    } else {
                      reject(error);
                    }
                  })
                  .catch(function(error) {
                    reject(error);
                  });
              } catch(error) {
                reject(error);
              }
            } else if (attempt < retries) {
              retry(attempt, error, null);
            } else {
              reject(error);
            }
          });
      };

      function retry(attempt, error, response) {
        var delay = (typeof retryDelay === 'function') ?
          retryDelay(attempt, error, response) : retryDelay;
        setTimeout(function () {
          wrappedFetch(++attempt);
        }, delay);
      }

      wrappedFetch(0);
    });
  };
};

function isPositiveInteger(value) {
  return Number.isInteger(value) && value >= 0;
}

function ArgumentError(message) {
  this.name = 'ArgumentError';
  this.message = message;
}


/***/ }),

/***/ 42353:
/***/ (function(module, exports) {

/**
 * @preserve jed.js https://github.com/SlexAxton/Jed
 */
/*
-----------
A gettext compatible i18n library for modern JavaScript Applications

by Alex Sexton - AlexSexton [at] gmail - @SlexAxton

MIT License

A jQuery Foundation project - requires CLA to contribute -
https://contribute.jquery.org/CLA/



Jed offers the entire applicable GNU gettext spec'd set of
functions, but also offers some nicer wrappers around them.
The api for gettext was written for a language with no function
overloading, so Jed allows a little more of that.

Many thanks to Joshua I. Miller - unrtst@cpan.org - who wrote
gettext.js back in 2008. I was able to vet a lot of my ideas
against his. I also made sure Jed passed against his tests
in order to offer easy upgrades -- jsgettext.berlios.de
*/
(function (root, undef) {

  // Set up some underscore-style functions, if you already have
  // underscore, feel free to delete this section, and use it
  // directly, however, the amount of functions used doesn't
  // warrant having underscore as a full dependency.
  // Underscore 1.3.0 was used to port and is licensed
  // under the MIT License by Jeremy Ashkenas.
  var ArrayProto    = Array.prototype,
      ObjProto      = Object.prototype,
      slice         = ArrayProto.slice,
      hasOwnProp    = ObjProto.hasOwnProperty,
      nativeForEach = ArrayProto.forEach,
      breaker       = {};

  // We're not using the OOP style _ so we don't need the
  // extra level of indirection. This still means that you
  // sub out for real `_` though.
  var _ = {
    forEach : function( obj, iterator, context ) {
      var i, l, key;
      if ( obj === null ) {
        return;
      }

      if ( nativeForEach && obj.forEach === nativeForEach ) {
        obj.forEach( iterator, context );
      }
      else if ( obj.length === +obj.length ) {
        for ( i = 0, l = obj.length; i < l; i++ ) {
          if ( i in obj && iterator.call( context, obj[i], i, obj ) === breaker ) {
            return;
          }
        }
      }
      else {
        for ( key in obj) {
          if ( hasOwnProp.call( obj, key ) ) {
            if ( iterator.call (context, obj[key], key, obj ) === breaker ) {
              return;
            }
          }
        }
      }
    },
    extend : function( obj ) {
      this.forEach( slice.call( arguments, 1 ), function ( source ) {
        for ( var prop in source ) {
          obj[prop] = source[prop];
        }
      });
      return obj;
    }
  };
  // END Miniature underscore impl

  // Jed is a constructor function
  var Jed = function ( options ) {
    // Some minimal defaults
    this.defaults = {
      "locale_data" : {
        "messages" : {
          "" : {
            "domain"       : "messages",
            "lang"         : "en",
            "plural_forms" : "nplurals=2; plural=(n != 1);"
          }
          // There are no default keys, though
        }
      },
      // The default domain if one is missing
      "domain" : "messages",
      // enable debug mode to log untranslated strings to the console
      "debug" : false
    };

    // Mix in the sent options with the default options
    this.options = _.extend( {}, this.defaults, options );
    this.textdomain( this.options.domain );

    if ( options.domain && ! this.options.locale_data[ this.options.domain ] ) {
      throw new Error('Text domain set to non-existent domain: `' + options.domain + '`');
    }
  };

  // The gettext spec sets this character as the default
  // delimiter for context lookups.
  // e.g.: context\u0004key
  // If your translation company uses something different,
  // just change this at any time and it will use that instead.
  Jed.context_delimiter = String.fromCharCode( 4 );

  function getPluralFormFunc ( plural_form_string ) {
    return Jed.PF.compile( plural_form_string || "nplurals=2; plural=(n != 1);");
  }

  function Chain( key, i18n ){
    this._key = key;
    this._i18n = i18n;
  }

  // Create a chainable api for adding args prettily
  _.extend( Chain.prototype, {
    onDomain : function ( domain ) {
      this._domain = domain;
      return this;
    },
    withContext : function ( context ) {
      this._context = context;
      return this;
    },
    ifPlural : function ( num, pkey ) {
      this._val = num;
      this._pkey = pkey;
      return this;
    },
    fetch : function ( sArr ) {
      if ( {}.toString.call( sArr ) != '[object Array]' ) {
        sArr = [].slice.call(arguments, 0);
      }
      return ( sArr && sArr.length ? Jed.sprintf : function(x){ return x; } )(
        this._i18n.dcnpgettext(this._domain, this._context, this._key, this._pkey, this._val),
        sArr
      );
    }
  });

  // Add functions to the Jed prototype.
  // These will be the functions on the object that's returned
  // from creating a `new Jed()`
  // These seem redundant, but they gzip pretty well.
  _.extend( Jed.prototype, {
    // The sexier api start point
    translate : function ( key ) {
      return new Chain( key, this );
    },

    textdomain : function ( domain ) {
      if ( ! domain ) {
        return this._textdomain;
      }
      this._textdomain = domain;
    },

    gettext : function ( key ) {
      return this.dcnpgettext.call( this, undef, undef, key );
    },

    dgettext : function ( domain, key ) {
     return this.dcnpgettext.call( this, domain, undef, key );
    },

    dcgettext : function ( domain , key /*, category */ ) {
      // Ignores the category anyways
      return this.dcnpgettext.call( this, domain, undef, key );
    },

    ngettext : function ( skey, pkey, val ) {
      return this.dcnpgettext.call( this, undef, undef, skey, pkey, val );
    },

    dngettext : function ( domain, skey, pkey, val ) {
      return this.dcnpgettext.call( this, domain, undef, skey, pkey, val );
    },

    dcngettext : function ( domain, skey, pkey, val/*, category */) {
      return this.dcnpgettext.call( this, domain, undef, skey, pkey, val );
    },

    pgettext : function ( context, key ) {
      return this.dcnpgettext.call( this, undef, context, key );
    },

    dpgettext : function ( domain, context, key ) {
      return this.dcnpgettext.call( this, domain, context, key );
    },

    dcpgettext : function ( domain, context, key/*, category */) {
      return this.dcnpgettext.call( this, domain, context, key );
    },

    npgettext : function ( context, skey, pkey, val ) {
      return this.dcnpgettext.call( this, undef, context, skey, pkey, val );
    },

    dnpgettext : function ( domain, context, skey, pkey, val ) {
      return this.dcnpgettext.call( this, domain, context, skey, pkey, val );
    },

    // The most fully qualified gettext function. It has every option.
    // Since it has every option, we can use it from every other method.
    // This is the bread and butter.
    // Technically there should be one more argument in this function for 'Category',
    // but since we never use it, we might as well not waste the bytes to define it.
    dcnpgettext : function ( domain, context, singular_key, plural_key, val ) {
      // Set some defaults

      plural_key = plural_key || singular_key;

      // Use the global domain default if one
      // isn't explicitly passed in
      domain = domain || this._textdomain;

      var fallback;

      // Handle special cases

      // No options found
      if ( ! this.options ) {
        // There's likely something wrong, but we'll return the correct key for english
        // We do this by instantiating a brand new Jed instance with the default set
        // for everything that could be broken.
        fallback = new Jed();
        return fallback.dcnpgettext.call( fallback, undefined, undefined, singular_key, plural_key, val );
      }

      // No translation data provided
      if ( ! this.options.locale_data ) {
        throw new Error('No locale data provided.');
      }

      if ( ! this.options.locale_data[ domain ] ) {
        throw new Error('Domain `' + domain + '` was not found.');
      }

      if ( ! this.options.locale_data[ domain ][ "" ] ) {
        throw new Error('No locale meta information provided.');
      }

      // Make sure we have a truthy key. Otherwise we might start looking
      // into the empty string key, which is the options for the locale
      // data.
      if ( ! singular_key ) {
        throw new Error('No translation key found.');
      }

      var key  = context ? context + Jed.context_delimiter + singular_key : singular_key,
          locale_data = this.options.locale_data,
          dict = locale_data[ domain ],
          defaultConf = (locale_data.messages || this.defaults.locale_data.messages)[""],
          pluralForms = dict[""].plural_forms || dict[""]["Plural-Forms"] || dict[""]["plural-forms"] || defaultConf.plural_forms || defaultConf["Plural-Forms"] || defaultConf["plural-forms"],
          val_list,
          res;

      var val_idx;
      if (val === undefined) {
        // No value passed in; assume singular key lookup.
        val_idx = 0;

      } else {
        // Value has been passed in; use plural-forms calculations.

        // Handle invalid numbers, but try casting strings for good measure
        if ( typeof val != 'number' ) {
          val = parseInt( val, 10 );

          if ( isNaN( val ) ) {
            throw new Error('The number that was passed in is not a number.');
          }
        }

        val_idx = getPluralFormFunc(pluralForms)(val);
      }

      // Throw an error if a domain isn't found
      if ( ! dict ) {
        throw new Error('No domain named `' + domain + '` could be found.');
      }

      val_list = dict[ key ];

      // If there is no match, then revert back to
      // english style singular/plural with the keys passed in.
      if ( ! val_list || val_idx > val_list.length ) {
        if (this.options.missing_key_callback) {
          this.options.missing_key_callback(key, domain);
        }
        res = [ singular_key, plural_key ];

        // collect untranslated strings
        if (this.options.debug===true) {
          console.log(res[ getPluralFormFunc(pluralForms)( val ) ]);
        }
        return res[ getPluralFormFunc()( val ) ];
      }

      res = val_list[ val_idx ];

      // This includes empty strings on purpose
      if ( ! res  ) {
        res = [ singular_key, plural_key ];
        return res[ getPluralFormFunc()( val ) ];
      }
      return res;
    }
  });


  // We add in sprintf capabilities for post translation value interolation
  // This is not internally used, so you can remove it if you have this
  // available somewhere else, or want to use a different system.

  // We _slightly_ modify the normal sprintf behavior to more gracefully handle
  // undefined values.

  /**
   sprintf() for JavaScript 0.7-beta1
   http://www.diveintojavascript.com/projects/javascript-sprintf

   Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are met:
       * Redistributions of source code must retain the above copyright
         notice, this list of conditions and the following disclaimer.
       * Redistributions in binary form must reproduce the above copyright
         notice, this list of conditions and the following disclaimer in the
         documentation and/or other materials provided with the distribution.
       * Neither the name of sprintf() for JavaScript nor the
         names of its contributors may be used to endorse or promote products
         derived from this software without specific prior written permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
   ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
   WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   DISCLAIMED. IN NO EVENT SHALL Alexandru Marasteanu BE LIABLE FOR ANY
   DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
   (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
   LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
   ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */
  var sprintf = (function() {
    function get_type(variable) {
      return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
    }
    function str_repeat(input, multiplier) {
      for (var output = []; multiplier > 0; output[--multiplier] = input) {/* do nothing */}
      return output.join('');
    }

    var str_format = function() {
      if (!str_format.cache.hasOwnProperty(arguments[0])) {
        str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
      }
      return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
    };

    str_format.format = function(parse_tree, argv) {
      var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
      for (i = 0; i < tree_length; i++) {
        node_type = get_type(parse_tree[i]);
        if (node_type === 'string') {
          output.push(parse_tree[i]);
        }
        else if (node_type === 'array') {
          match = parse_tree[i]; // convenience purposes only
          if (match[2]) { // keyword argument
            arg = argv[cursor];
            for (k = 0; k < match[2].length; k++) {
              if (!arg.hasOwnProperty(match[2][k])) {
                throw(sprintf('[sprintf] property "%s" does not exist', match[2][k]));
              }
              arg = arg[match[2][k]];
            }
          }
          else if (match[1]) { // positional argument (explicit)
            arg = argv[match[1]];
          }
          else { // positional argument (implicit)
            arg = argv[cursor++];
          }

          if (/[^s]/.test(match[8]) && (get_type(arg) != 'number')) {
            throw(sprintf('[sprintf] expecting number but found %s', get_type(arg)));
          }

          // Jed EDIT
          if ( typeof arg == 'undefined' || arg === null ) {
            arg = '';
          }
          // Jed EDIT

          switch (match[8]) {
            case 'b': arg = arg.toString(2); break;
            case 'c': arg = String.fromCharCode(arg); break;
            case 'd': arg = parseInt(arg, 10); break;
            case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
            case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
            case 'o': arg = arg.toString(8); break;
            case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
            case 'u': arg = Math.abs(arg); break;
            case 'x': arg = arg.toString(16); break;
            case 'X': arg = arg.toString(16).toUpperCase(); break;
          }
          arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);
          pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
          pad_length = match[6] - String(arg).length;
          pad = match[6] ? str_repeat(pad_character, pad_length) : '';
          output.push(match[5] ? arg + pad : pad + arg);
        }
      }
      return output.join('');
    };

    str_format.cache = {};

    str_format.parse = function(fmt) {
      var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
      while (_fmt) {
        if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
          parse_tree.push(match[0]);
        }
        else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
          parse_tree.push('%');
        }
        else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
          if (match[2]) {
            arg_names |= 1;
            var field_list = [], replacement_field = match[2], field_match = [];
            if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
              field_list.push(field_match[1]);
              while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                  field_list.push(field_match[1]);
                }
                else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
                  field_list.push(field_match[1]);
                }
                else {
                  throw('[sprintf] huh?');
                }
              }
            }
            else {
              throw('[sprintf] huh?');
            }
            match[2] = field_list;
          }
          else {
            arg_names |= 2;
          }
          if (arg_names === 3) {
            throw('[sprintf] mixing positional and named placeholders is not (yet) supported');
          }
          parse_tree.push(match);
        }
        else {
          throw('[sprintf] huh?');
        }
        _fmt = _fmt.substring(match[0].length);
      }
      return parse_tree;
    };

    return str_format;
  })();

  var vsprintf = function(fmt, argv) {
    argv.unshift(fmt);
    return sprintf.apply(null, argv);
  };

  Jed.parse_plural = function ( plural_forms, n ) {
    plural_forms = plural_forms.replace(/n/g, n);
    return Jed.parse_expression(plural_forms);
  };

  Jed.sprintf = function ( fmt, args ) {
    if ( {}.toString.call( args ) == '[object Array]' ) {
      return vsprintf( fmt, [].slice.call(args) );
    }
    return sprintf.apply(this, [].slice.call(arguments) );
  };

  Jed.prototype.sprintf = function () {
    return Jed.sprintf.apply(this, arguments);
  };
  // END sprintf Implementation

  // Start the Plural forms section
  // This is a full plural form expression parser. It is used to avoid
  // running 'eval' or 'new Function' directly against the plural
  // forms.
  //
  // This can be important if you get translations done through a 3rd
  // party vendor. I encourage you to use this instead, however, I
  // also will provide a 'precompiler' that you can use at build time
  // to output valid/safe function representations of the plural form
  // expressions. This means you can build this code out for the most
  // part.
  Jed.PF = {};

  Jed.PF.parse = function ( p ) {
    var plural_str = Jed.PF.extractPluralExpr( p );
    return Jed.PF.parser.parse.call(Jed.PF.parser, plural_str);
  };

  Jed.PF.compile = function ( p ) {
    // Handle trues and falses as 0 and 1
    function imply( val ) {
      return (val === true ? 1 : val ? val : 0);
    }

    var ast = Jed.PF.parse( p );
    return function ( n ) {
      return imply( Jed.PF.interpreter( ast )( n ) );
    };
  };

  Jed.PF.interpreter = function ( ast ) {
    return function ( n ) {
      var res;
      switch ( ast.type ) {
        case 'GROUP':
          return Jed.PF.interpreter( ast.expr )( n );
        case 'TERNARY':
          if ( Jed.PF.interpreter( ast.expr )( n ) ) {
            return Jed.PF.interpreter( ast.truthy )( n );
          }
          return Jed.PF.interpreter( ast.falsey )( n );
        case 'OR':
          return Jed.PF.interpreter( ast.left )( n ) || Jed.PF.interpreter( ast.right )( n );
        case 'AND':
          return Jed.PF.interpreter( ast.left )( n ) && Jed.PF.interpreter( ast.right )( n );
        case 'LT':
          return Jed.PF.interpreter( ast.left )( n ) < Jed.PF.interpreter( ast.right )( n );
        case 'GT':
          return Jed.PF.interpreter( ast.left )( n ) > Jed.PF.interpreter( ast.right )( n );
        case 'LTE':
          return Jed.PF.interpreter( ast.left )( n ) <= Jed.PF.interpreter( ast.right )( n );
        case 'GTE':
          return Jed.PF.interpreter( ast.left )( n ) >= Jed.PF.interpreter( ast.right )( n );
        case 'EQ':
          return Jed.PF.interpreter( ast.left )( n ) == Jed.PF.interpreter( ast.right )( n );
        case 'NEQ':
          return Jed.PF.interpreter( ast.left )( n ) != Jed.PF.interpreter( ast.right )( n );
        case 'MOD':
          return Jed.PF.interpreter( ast.left )( n ) % Jed.PF.interpreter( ast.right )( n );
        case 'VAR':
          return n;
        case 'NUM':
          return ast.val;
        default:
          throw new Error("Invalid Token found.");
      }
    };
  };

  Jed.PF.extractPluralExpr = function ( p ) {
    // trim first
    p = p.replace(/^\s\s*/, '').replace(/\s\s*$/, '');

    if (! /;\s*$/.test(p)) {
      p = p.concat(';');
    }

    var nplurals_re = /nplurals\=(\d+);/,
        plural_re = /plural\=(.*);/,
        nplurals_matches = p.match( nplurals_re ),
        res = {},
        plural_matches;

    // Find the nplurals number
    if ( nplurals_matches.length > 1 ) {
      res.nplurals = nplurals_matches[1];
    }
    else {
      throw new Error('nplurals not found in plural_forms string: ' + p );
    }

    // remove that data to get to the formula
    p = p.replace( nplurals_re, "" );
    plural_matches = p.match( plural_re );

    if (!( plural_matches && plural_matches.length > 1 ) ) {
      throw new Error('`plural` expression not found: ' + p);
    }
    return plural_matches[ 1 ];
  };

  /* Jison generated parser */
  Jed.PF.parser = (function(){

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"?":6,":":7,"||":8,"&&":9,"<":10,"<=":11,">":12,">=":13,"!=":14,"==":15,"%":16,"(":17,")":18,"n":19,"NUMBER":20,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"?",7:":",8:"||",9:"&&",10:"<",11:"<=",12:">",13:">=",14:"!=",15:"==",16:"%",17:"(",18:")",19:"n",20:"NUMBER"},
productions_: [0,[3,2],[4,5],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,1],[4,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return { type : 'GROUP', expr: $$[$0-1] };
break;
case 2:this.$ = { type: 'TERNARY', expr: $$[$0-4], truthy : $$[$0-2], falsey: $$[$0] };
break;
case 3:this.$ = { type: "OR", left: $$[$0-2], right: $$[$0] };
break;
case 4:this.$ = { type: "AND", left: $$[$0-2], right: $$[$0] };
break;
case 5:this.$ = { type: 'LT', left: $$[$0-2], right: $$[$0] };
break;
case 6:this.$ = { type: 'LTE', left: $$[$0-2], right: $$[$0] };
break;
case 7:this.$ = { type: 'GT', left: $$[$0-2], right: $$[$0] };
break;
case 8:this.$ = { type: 'GTE', left: $$[$0-2], right: $$[$0] };
break;
case 9:this.$ = { type: 'NEQ', left: $$[$0-2], right: $$[$0] };
break;
case 10:this.$ = { type: 'EQ', left: $$[$0-2], right: $$[$0] };
break;
case 11:this.$ = { type: 'MOD', left: $$[$0-2], right: $$[$0] };
break;
case 12:this.$ = { type: 'GROUP', expr: $$[$0-1] };
break;
case 13:this.$ = { type: 'VAR' };
break;
case 14:this.$ = { type: 'NUM', val: Number(yytext) };
break;
}
},
table: [{3:1,4:2,17:[1,3],19:[1,4],20:[1,5]},{1:[3]},{5:[1,6],6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{4:17,17:[1,3],19:[1,4],20:[1,5]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],18:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],18:[2,14]},{1:[2,1]},{4:18,17:[1,3],19:[1,4],20:[1,5]},{4:19,17:[1,3],19:[1,4],20:[1,5]},{4:20,17:[1,3],19:[1,4],20:[1,5]},{4:21,17:[1,3],19:[1,4],20:[1,5]},{4:22,17:[1,3],19:[1,4],20:[1,5]},{4:23,17:[1,3],19:[1,4],20:[1,5]},{4:24,17:[1,3],19:[1,4],20:[1,5]},{4:25,17:[1,3],19:[1,4],20:[1,5]},{4:26,17:[1,3],19:[1,4],20:[1,5]},{4:27,17:[1,3],19:[1,4],20:[1,5]},{6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[1,28]},{6:[1,7],7:[1,29],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{5:[2,3],6:[2,3],7:[2,3],8:[2,3],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[1,16],18:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[1,16],18:[2,6]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7],16:[1,16],18:[2,7]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8],16:[1,16],18:[2,8]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[1,16],18:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[1,16],18:[2,10]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],18:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],18:[2,12]},{4:30,17:[1,3],19:[1,4],20:[1,5]},{5:[2,2],6:[1,7],7:[2,2],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,2]}],
defaultActions: {6:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + this.terminals_[symbol]+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){

var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 20
break;
case 2:return 19
break;
case 3:return 8
break;
case 4:return 9
break;
case 5:return 6
break;
case 6:return 7
break;
case 7:return 11
break;
case 8:return 13
break;
case 9:return 10
break;
case 10:return 12
break;
case 11:return 14
break;
case 12:return 15
break;
case 13:return 16
break;
case 14:return 17
break;
case 15:return 18
break;
case 16:return 5
break;
case 17:return 'INVALID'
break;
}
};
lexer.rules = [/^\s+/,/^[0-9]+(\.[0-9]+)?\b/,/^n\b/,/^\|\|/,/^&&/,/^\?/,/^:/,/^<=/,/^>=/,/^</,/^>/,/^!=/,/^==/,/^%/,/^\(/,/^\)/,/^$/,/^./];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
// End parser

  // Handle node, amd, and global systems
  if (true) {
    if ( true && module.exports) {
      exports = module.exports = Jed;
    }
    exports.Jed = Jed;
  }
  else {}

})(this);


/***/ }),

/***/ 51455:
/***/ ((module) => {

"use strict";

module.exports = milliseconds => {
	if (typeof milliseconds !== 'number') {
		throw new TypeError('Expected a number');
	}

	const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;

	return {
		days: roundTowardsZero(milliseconds / 86400000),
		hours: roundTowardsZero(milliseconds / 3600000) % 24,
		minutes: roundTowardsZero(milliseconds / 60000) % 60,
		seconds: roundTowardsZero(milliseconds / 1000) % 60,
		milliseconds: roundTowardsZero(milliseconds) % 1000,
		microseconds: roundTowardsZero(milliseconds * 1000) % 1000,
		nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1000
	};
};


/***/ }),

/***/ 73258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const parseMilliseconds = __webpack_require__(51455);

const pluralize = (word, count) => count === 1 ? word : `${word}s`;

const SECOND_ROUNDING_EPSILON = 0.0000001;

module.exports = (milliseconds, options = {}) => {
	if (!Number.isFinite(milliseconds)) {
		throw new TypeError('Expected a finite number');
	}

	if (options.colonNotation) {
		options.compact = false;
		options.formatSubMilliseconds = false;
		options.separateMilliseconds = false;
		options.verbose = false;
	}

	if (options.compact) {
		options.secondsDecimalDigits = 0;
		options.millisecondsDecimalDigits = 0;
	}

	const result = [];

	const floorDecimals = (value, decimalDigits) => {
		const flooredInterimValue = Math.floor((value * (10 ** decimalDigits)) + SECOND_ROUNDING_EPSILON);
		const flooredValue = Math.round(flooredInterimValue) / (10 ** decimalDigits);
		return flooredValue.toFixed(decimalDigits);
	};

	const add = (value, long, short, valueString) => {
		if ((result.length === 0 || !options.colonNotation) && value === 0 && !(options.colonNotation && short === 'm')) {
			return;
		}

		valueString = (valueString || value || '0').toString();
		let prefix;
		let suffix;
		if (options.colonNotation) {
			prefix = result.length > 0 ? ':' : '';
			suffix = '';
			const wholeDigits = valueString.includes('.') ? valueString.split('.')[0].length : valueString.length;
			const minLength = result.length > 0 ? 2 : 1;
			valueString = '0'.repeat(Math.max(0, minLength - wholeDigits)) + valueString;
		} else {
			prefix = '';
			suffix = options.verbose ? ' ' + pluralize(long, value) : short;
		}

		result.push(prefix + valueString + suffix);
	};

	const parsed = parseMilliseconds(milliseconds);

	add(Math.trunc(parsed.days / 365), 'year', 'y');
	add(parsed.days % 365, 'day', 'd');
	add(parsed.hours, 'hour', 'h');
	add(parsed.minutes, 'minute', 'm');

	if (
		options.separateMilliseconds ||
		options.formatSubMilliseconds ||
		(!options.colonNotation && milliseconds < 1000)
	) {
		add(parsed.seconds, 'second', 's');
		if (options.formatSubMilliseconds) {
			add(parsed.milliseconds, 'millisecond', 'ms');
			add(parsed.microseconds, 'microsecond', 'µs');
			add(parsed.nanoseconds, 'nanosecond', 'ns');
		} else {
			const millisecondsAndBelow =
				parsed.milliseconds +
				(parsed.microseconds / 1000) +
				(parsed.nanoseconds / 1e6);

			const millisecondsDecimalDigits =
				typeof options.millisecondsDecimalDigits === 'number' ?
					options.millisecondsDecimalDigits :
					0;

			const roundedMiliseconds = millisecondsAndBelow >= 1 ?
				Math.round(millisecondsAndBelow) :
				Math.ceil(millisecondsAndBelow);

			const millisecondsString = millisecondsDecimalDigits ?
				millisecondsAndBelow.toFixed(millisecondsDecimalDigits) :
				roundedMiliseconds;

			add(
				Number.parseFloat(millisecondsString, 10),
				'millisecond',
				'ms',
				millisecondsString
			);
		}
	} else {
		const seconds = (milliseconds / 1000) % 60;
		const secondsDecimalDigits =
			typeof options.secondsDecimalDigits === 'number' ?
				options.secondsDecimalDigits :
				1;
		const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
		const secondsString = options.keepDecimalsOnWholeSeconds ?
			secondsFixed :
			secondsFixed.replace(/\.0+$/, '');
		add(Number.parseFloat(secondsString, 10), 'second', 's', secondsString);
	}

	if (result.length === 0) {
		return '0' + (options.verbose ? ' milliseconds' : 'ms');
	}

	if (options.compact) {
		return result[0];
	}

	if (typeof options.unitCount === 'number') {
		const separator = options.colonNotation ? '' : ' ';
		return result.slice(0, Math.max(options.unitCount, 1)).join(separator);
	}

	return options.colonNotation ? result.join('') : result.join(' ');
};


/***/ })

}]);