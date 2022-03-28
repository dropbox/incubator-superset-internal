"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[9885],{

/***/ 79885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ReactCountryMap)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/components/reactify.js
var reactify = __webpack_require__(73834);
// EXTERNAL MODULE: ./node_modules/d3/d3.js
var d3 = __webpack_require__(15078);
var d3_default = /*#__PURE__*/__webpack_require__.n(d3);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-country-map/node_modules/d3-array/src/extent.js
/* harmony default export */ function extent(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
}

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js
var NumberFormatterRegistrySingleton = __webpack_require__(50855);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/SequentialSchemeRegistrySingleton.js
var SequentialSchemeRegistrySingleton = __webpack_require__(67542);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/countries.js + 46 modules
var countries = __webpack_require__(84145);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/CountryMap.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/CountryMap.js
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

/* eslint-disable react/sort-prop-types */






const propTypes = {
  data: prop_types_default().arrayOf(prop_types_default().shape({
    country_id: (prop_types_default()).string,
    metric: (prop_types_default()).number
  })),
  width: (prop_types_default()).number,
  height: (prop_types_default()).number,
  country: (prop_types_default()).string,
  linearColorScheme: (prop_types_default()).string,
  mapBaseUrl: (prop_types_default()).string,
  numberFormat: (prop_types_default()).string
};
const maps = {};

function CountryMap(element, props) {
  const {
    data,
    width,
    height,
    country,
    linearColorScheme,
    numberFormat
  } = props;
  const container = element;
  const format = (0,NumberFormatterRegistrySingleton/* getNumberFormatter */.JB)(numberFormat);
  const colorScale = (0,SequentialSchemeRegistrySingleton/* default */.Z)().get(linearColorScheme).createLinearScale(extent(data, v => v.metric));
  const colorMap = {};
  data.forEach(d => {
    colorMap[d.country_id] = colorScale(d.metric);
  });

  const colorFn = d => colorMap[d.properties.ISO] || 'none';

  const path = d3_default().geo.path();
  const div = d3_default().select(container);
  div.classed('superset-legacy-chart-country-map', true);
  div.selectAll('*').remove();
  container.style.height = `${height}px`;
  container.style.width = `${width}px`;
  const svg = div.append('svg:svg').attr('width', width).attr('height', height).attr('preserveAspectRatio', 'xMidYMid meet');
  const backgroundRect = svg.append('rect').attr('class', 'background').attr('width', width).attr('height', height);
  const g = svg.append('g');
  const mapLayer = g.append('g').classed('map-layer', true);
  const textLayer = g.append('g').classed('text-layer', true).attr('transform', `translate(${width / 2}, 45)`);
  const bigText = textLayer.append('text').classed('big-text', true);
  const resultText = textLayer.append('text').classed('result-text', true).attr('dy', '1em');
  let centered;

  const clicked = function clicked(d) {
    const hasCenter = d && centered !== d;
    let x;
    let y;
    let k;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    if (hasCenter) {
      const centroid = path.centroid(d);
      [x, y] = centroid;
      k = 4;
      centered = d;
    } else {
      x = halfWidth;
      y = halfHeight;
      k = 1;
      centered = null;
    }

    g.transition().duration(750).attr('transform', `translate(${halfWidth},${halfHeight})scale(${k})translate(${-x},${-y})`);
    textLayer.style('opacity', 0).attr('transform', `translate(0,0)translate(${x},${hasCenter ? y - 5 : 45})`).transition().duration(750).style('opacity', 1);
    bigText.transition().duration(750).style('font-size', hasCenter ? 6 : 16);
    resultText.transition().duration(750).style('font-size', hasCenter ? 16 : 24);
  };

  backgroundRect.on('click', clicked);

  const selectAndDisplayNameOfRegion = function selectAndDisplayNameOfRegion(feature) {
    let name = '';

    if (feature && feature.properties) {
      if (feature.properties.ID_2) {
        name = feature.properties.NAME_2;
      } else {
        name = feature.properties.NAME_1;
      }
    }

    bigText.text(name);
  };

  const updateMetrics = function updateMetrics(region) {
    if (region.length > 0) {
      resultText.text(format(region[0].metric));
    }
  };

  const mouseenter = function mouseenter(d) {
    // Darken color
    let c = colorFn(d);

    if (c !== 'none') {
      c = d3_default().rgb(c).darker().toString();
    }

    d3_default().select(this).style('fill', c);
    selectAndDisplayNameOfRegion(d);
    const result = data.filter(region => region.country_id === d.properties.ISO);
    updateMetrics(result);
  };

  const mouseout = function mouseout() {
    d3_default().select(this).style('fill', colorFn);
    bigText.text('');
    resultText.text('');
  };

  function drawMap(mapData) {
    const {
      features
    } = mapData;
    const center = d3_default().geo.centroid(mapData);
    const scale = 100;
    const projection = d3_default().geo.mercator().scale(scale).center(center).translate([width / 2, height / 2]);
    path.projection(projection); // Compute scale that fits container.

    const bounds = path.bounds(mapData);
    const hscale = scale * width / (bounds[1][0] - bounds[0][0]);
    const vscale = scale * height / (bounds[1][1] - bounds[0][1]);
    const newScale = hscale < vscale ? hscale : vscale; // Compute bounds and offset using the updated scale.

    projection.scale(newScale);
    const newBounds = path.bounds(mapData);
    projection.translate([width - (newBounds[0][0] + newBounds[1][0]) / 2, height - (newBounds[0][1] + newBounds[1][1]) / 2]); // Draw each province as a path

    mapLayer.selectAll('path').data(features).enter().append('path').attr('d', path).attr('class', 'region').attr('vector-effect', 'non-scaling-stroke').style('fill', colorFn).on('mouseenter', mouseenter).on('mouseout', mouseout).on('click', clicked);
  }

  const map = maps[country];

  if (map) {
    drawMap(map);
  } else {
    const url = countries/* default */.ZP[country];
    d3_default().json(url, (error, mapData) => {
      if (error) {
        var _countryOptions$find;

        const countryName = ((_countryOptions$find = countries/* countryOptions.find */.O$.find(x => x[0] === country)) == null ? void 0 : _countryOptions$find[1]) || country;
        d3_default().select(element).html(`<div class="alert alert-danger">Could not load map data for ${countryName}</div>`);
      } else {
        maps[country] = mapData;
        drawMap(mapData);
      }
    });
  }
}

CountryMap.displayName = 'CountryMap';
CountryMap.propTypes = propTypes;
/* harmony default export */ const esm_CountryMap = (CountryMap);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/ReactCountryMap.js
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


/* harmony default export */ const ReactCountryMap = ((0,reactify/* default */.Z)(esm_CountryMap));

/***/ })

}]);