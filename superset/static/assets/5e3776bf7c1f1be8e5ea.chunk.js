"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[4214],{

/***/ 84214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ReactChord)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/components/reactify.js
var reactify = __webpack_require__(73834);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/d3/d3.js
var d3 = __webpack_require__(15078);
var d3_default = /*#__PURE__*/__webpack_require__.n(d3);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js
var NumberFormatterRegistrySingleton = __webpack_require__(50855);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalColorNamespace.js
var CategoricalColorNamespace = __webpack_require__(83527);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-chord/esm/Chord.js
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

/* eslint-disable no-param-reassign, react/sort-prop-types */



const propTypes = {
  data: prop_types_default().shape({
    matrix: prop_types_default().arrayOf(prop_types_default().arrayOf((prop_types_default()).number)),
    nodes: prop_types_default().arrayOf((prop_types_default()).string)
  }),
  width: (prop_types_default()).number,
  height: (prop_types_default()).number,
  colorScheme: (prop_types_default()).string,
  numberFormat: (prop_types_default()).string
};

function Chord(element, props) {
  const {
    data,
    width,
    height,
    numberFormat,
    colorScheme
  } = props;
  element.innerHTML = '';
  const div = d3_default().select(element);
  div.classed('superset-legacy-chart-chord', true);
  const {
    nodes,
    matrix
  } = data;
  const f = (0,NumberFormatterRegistrySingleton/* getNumberFormatter */.JB)(numberFormat);
  const colorFn = CategoricalColorNamespace.getScale(colorScheme);
  const outerRadius = Math.min(width, height) / 2 - 10;
  const innerRadius = outerRadius - 24;
  let chord;
  const arc = d3_default().svg.arc().innerRadius(innerRadius).outerRadius(outerRadius);
  const layout = d3_default().layout.chord().padding(0.04).sortSubgroups((d3_default()).descending).sortChords((d3_default()).descending);
  const path = d3_default().svg.chord().radius(innerRadius);
  const svg = div.append('svg').attr('width', width).attr('height', height).on('mouseout', () => chord.classed('fade', false)).append('g').attr('id', 'circle').attr('transform', `translate(${width / 2}, ${height / 2})`);
  svg.append('circle').attr('r', outerRadius); // Compute the chord layout.

  layout.matrix(matrix);
  const group = svg.selectAll('.group').data(layout.groups).enter().append('g').attr('class', 'group').on('mouseover', (d, i) => {
    chord.classed('fade', p => p.source.index !== i && p.target.index !== i);
  }); // Add a mouseover title.

  group.append('title').text((d, i) => `${nodes[i]}: ${f(d.value)}`); // Add the group arc.

  const groupPath = group.append('path').attr('id', (d, i) => `group${i}`).attr('d', arc).style('fill', (d, i) => colorFn(nodes[i])); // Add a text label.

  const groupText = group.append('text').attr('x', 6).attr('dy', 15);
  groupText.append('textPath').attr('xlink:href', (d, i) => `#group${i}`).text((d, i) => nodes[i]); // Remove the labels that don't fit. :(

  groupText.filter(function filter(d, i) {
    return groupPath[0][i].getTotalLength() / 2 - 16 < this.getComputedTextLength();
  }).remove(); // Add the chords.

  chord = svg.selectAll('.chord').data(layout.chords).enter().append('path').attr('class', 'chord').on('mouseover', d => {
    chord.classed('fade', p => p !== d);
  }).style('fill', d => colorFn(nodes[d.source.index])).attr('d', path); // Add an elaborate mouseover title for each chord.

  chord.append('title').text(d => `${nodes[d.source.index]} → ${nodes[d.target.index]}: ${f(d.source.value)}\n${nodes[d.target.index]} → ${nodes[d.source.index]}: ${f(d.target.value)}`);
}

Chord.displayName = 'Chord';
Chord.propTypes = propTypes;
/* harmony default export */ const esm_Chord = (Chord);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-chord/esm/ReactChord.js
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





const ReactComponent = (0,reactify/* default */.Z)(esm_Chord);

const ReactChord_Chord = ({
  className,
  ...otherProps
}) => (0,emotion_react_browser_esm.jsx)("div", {
  className: className
}, (0,emotion_react_browser_esm.jsx)(ReactComponent, otherProps));

ReactChord_Chord.defaultProps = {
  otherProps: {}
};
ReactChord_Chord.propTypes = {
  className: (prop_types_default()).string.isRequired,
  otherProps: prop_types_default().objectOf((prop_types_default()).any)
};
/* harmony default export */ const ReactChord = ((0,style/* styled */.iK)(ReactChord_Chord)`
  .superset-legacy-chart-chord svg #circle circle {
    fill: none;
    pointer-events: all;
  }
  .superset-legacy-chart-chord svg .group path {
    fill-opacity: 0.6;
  }
  .superset-legacy-chart-chord svg path.chord {
    stroke: #000;
    stroke-width: 0.25px;
  }
  .superset-legacy-chart-chord svg #circle:hover path.fade {
    opacity: 0.2;
  }
`);

/***/ })

}]);