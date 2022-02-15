"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[6259],{

/***/ 76259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ReactSunburst)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/components/reactify.js
var reactify = __webpack_require__(73834);
// EXTERNAL MODULE: ./node_modules/d3/d3.js
var d3 = __webpack_require__(15078);
var d3_default = /*#__PURE__*/__webpack_require__.n(d3);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalColorNamespace.js
var CategoricalColorNamespace = __webpack_require__(83527);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js
var NumberFormatterRegistrySingleton = __webpack_require__(50855);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormats.js
var NumberFormats = __webpack_require__(63758);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/SequentialSchemeRegistrySingleton.js
var SequentialSchemeRegistrySingleton = __webpack_require__(67542);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-sunburst/esm/utils/wrapSvgText.js
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

/*
  Utility function that takes a d3 svg:text selection and a max width, and splits the
  text's text across multiple tspan lines such that any given line does not exceed max width

  If text does not span multiple lines AND adjustedY is passed,
  will set the text to the passed val
*/

function wrapSvgText(text, width, adjustedY) {
  const lineHeight = 1; // ems

  text.each(function each() {
    const d3Text = d3_default().select(this);
    const words = d3Text.text().split(/\s+/);
    let line = [];
    let lineNumber = 0;
    const x = d3Text.attr('x');
    const y = d3Text.attr('y');
    const dy = parseFloat(d3Text.attr('dy'));
    let tspan = d3Text.text(null).append('tspan').attr('x', x).attr('y', y).attr('dy', `${dy}em`);
    let didWrap = false;
    words.forEach(word => {
      line.push(word);
      tspan.text(line.join(' '));

      if (tspan.node().getComputedTextLength() > width) {
        lineNumber += 1;
        line.pop(); // remove word that pushes over the limit

        tspan.text(line.join(' '));
        line = [word];
        tspan = d3Text.append('tspan').attr('x', x).attr('y', y).attr('dy', `${lineNumber * lineHeight + dy}em`).text(word);
        didWrap = true;
      }
    });

    if (!didWrap && typeof adjustedY !== 'undefined') {
      tspan.attr('y', adjustedY);
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-sunburst/esm/Sunburst.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-sunburst/esm/Sunburst.js
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
  // Each row is an array of [hierarchy-lvl1, hierarchy-lvl2, metric1, metric2]
  // hierarchy-lvls are string. metrics are number
  data: prop_types_default().arrayOf((prop_types_default()).array),
  width: (prop_types_default()).number,
  height: (prop_types_default()).number,
  colorScheme: (prop_types_default()).string,
  linearColorScheme: (prop_types_default()).string,
  numberFormat: (prop_types_default()).string,
  metrics: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object // The metric object
  ]))
};

function metricLabel(metric) {
  return typeof metric === 'string' || metric instanceof String ? metric : metric.label;
} // Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.


function getAncestors(node) {
  const path = [];
  let current = node;

  while (current.parent) {
    path.unshift(current);
    current = current.parent;
  }

  return path;
}

function buildHierarchy(rows) {
  const root = {
    name: 'root',
    children: []
  }; // each record [groupby1val, groupby2val, (<string> or 0)n, m1, m2]

  rows.forEach(row => {
    const m1 = Number(row[row.length - 2]);
    const m2 = Number(row[row.length - 1]);
    const levels = row.slice(0, -2);

    if (Number.isNaN(m1)) {
      // e.g. if this is a header row
      return;
    }

    let currentNode = root;

    for (let level = 0; level < levels.length; level += 1) {
      const children = currentNode.children || [];
      const nodeName = levels[level].toString(); // If the next node has the name '0', it will

      const isLeafNode = level >= levels.length - 1 || levels[level + 1] === 0;
      let childNode;

      if (!isLeafNode) {
        childNode = children.find(child => child.name === nodeName && child.level === level);

        if (!childNode) {
          childNode = {
            name: nodeName,
            children: [],
            level
          };
          children.push(childNode);
        }

        currentNode = childNode;
      } else if (nodeName !== 0) {
        // Reached the end of the sequence; create a leaf node.
        childNode = {
          name: nodeName,
          m1,
          m2
        };
        children.push(childNode);
      }
    }
  });

  function recurse(node) {
    if (node.children) {
      let sums;
      let m1 = 0;
      let m2 = 0;

      for (let i = 0; i < node.children.length; i += 1) {
        sums = recurse(node.children[i]);
        m1 += sums[0];
        m2 += sums[1];
      }

      node.m1 = m1;
      node.m2 = m2;
    }

    return [node.m1, node.m2];
  }

  recurse(root);
  return root;
}

function getResponsiveContainerClass(width) {
  if (width > 500) {
    return 'l';
  }

  if (width > 200 && width <= 500) {
    return 'm';
  }

  return 's';
}

function getYOffset(width) {
  if (width > 500) {
    return ['0', '20', '40', '60'];
  }

  if (width > 200 && width <= 500) {
    return ['0', '15', '30', '45'];
  }

  return ['0', '10', '20', '30'];
} // Modified from http://bl.ocks.org/kerryrodden/7090426


function Sunburst(element, props) {
  const container = d3_default().select(element);
  const {
    data,
    width,
    height,
    colorScheme,
    linearColorScheme,
    metrics,
    numberFormat
  } = props;
  const responsiveClass = getResponsiveContainerClass(width);
  const isSmallWidth = responsiveClass === 's';
  container.attr('class', `superset-legacy-chart-sunburst ${responsiveClass}`); // vars with shared scope within this function

  const margin = {
    top: 10,
    right: 5,
    bottom: 10,
    left: 5
  };
  const containerWidth = width;
  const containerHeight = height;
  const breadcrumbHeight = containerHeight * 0.085;
  const visWidth = containerWidth - margin.left - margin.right;
  const visHeight = containerHeight - margin.top - margin.bottom - breadcrumbHeight;
  const radius = Math.min(visWidth, visHeight) / 2;
  let colorByCategory = true; // color by category if primary/secondary metrics match

  let maxBreadcrumbs;
  let breadcrumbDims; // set based on data

  let totalSize; // total size of all segments; set after loading the data.

  let breadcrumbs;
  let vis;
  let arcs;
  let gMiddleText; // dom handles

  const categoricalColorScale = CategoricalColorNamespace.getScale(colorScheme);
  let linearColorScale; // Helper + path gen functions

  const partition = d3_default().layout.partition().size([2 * Math.PI, radius * radius]).value(d => d.m1);
  const arc = d3_default().svg.arc().startAngle(d => d.x).endAngle(d => d.x + d.dx).innerRadius(d => Math.sqrt(d.y)).outerRadius(d => Math.sqrt(d.y + d.dy));
  const formatNum = (0,NumberFormatterRegistrySingleton/* getNumberFormatter */.JB)(numberFormat || NumberFormats/* default.SI_3_DIGIT */.Z.SI_3_DIGIT);
  const formatPerc = (0,NumberFormatterRegistrySingleton/* getNumberFormatter */.JB)(NumberFormats/* default.PERCENT_3_POINT */.Z.PERCENT_3_POINT);
  container.select('svg').remove();
  const svg = container.append('svg:svg').attr('width', containerWidth).attr('height', containerHeight);

  function createBreadcrumbs(firstRowData) {
    // -2 bc row contains 2x metrics, +extra for %label and buffer
    maxBreadcrumbs = firstRowData.length - 2 + 1;
    breadcrumbDims = {
      width: visWidth / maxBreadcrumbs,
      height: breadcrumbHeight * 0.8,
      // more margin
      spacing: 3,
      tipTailWidth: 10
    };
    breadcrumbs = svg.append('svg:g').attr('class', 'breadcrumbs').attr('transform', `translate(${margin.left},${margin.top})`);
    breadcrumbs.append('svg:text').attr('class', 'end-label');
  } // Generate a string that describes the points of a breadcrumb polygon.


  function breadcrumbPoints(d, i) {
    const points = [];

    if (isSmallWidth) {
      points.push('0,0');
      points.push(`${width},0`);
      points.push(`${width},0`);
      points.push(`${width},${breadcrumbDims.height}`);
      points.push(`0,${breadcrumbDims.height}`);

      if (i > 0) {// Leftmost breadcrumb; don't include 6th vertex.
        // points.push(`${breadcrumbDims.tipTailWidth},${breadcrumbDims.height / 2}`);
      }
    } else {
      points.push('0,0');
      points.push(`${breadcrumbDims.width},0`);
      points.push(`${breadcrumbDims.width + breadcrumbDims.tipTailWidth},${breadcrumbDims.height / 2}`);
      points.push(`${breadcrumbDims.width},${breadcrumbDims.height}`);
      points.push(`0,${breadcrumbDims.height}`);

      if (i > 0) {
        // Leftmost breadcrumb; don't include 6th vertex.
        points.push(`${breadcrumbDims.tipTailWidth},${breadcrumbDims.height / 2}`);
      }
    }

    return points.join(' ');
  }

  function updateBreadcrumbs(sequenceArray, percentageString) {
    const breadcrumbWidth = isSmallWidth ? width : breadcrumbDims.width;
    const g = breadcrumbs.selectAll('g').data(sequenceArray, d => d.name + d.depth); // Add breadcrumb and label for entering nodes.

    const entering = g.enter().append('svg:g');
    entering.append('svg:polygon').attr('points', breadcrumbPoints).style('fill', d => colorByCategory ? categoricalColorScale(d.name) : linearColorScale(d.m2 / d.m1));
    entering.append('svg:text').attr('x', (breadcrumbWidth + breadcrumbDims.tipTailWidth) / 2).attr('y', breadcrumbDims.height / 4).attr('dy', '0.35em').style('fill', d => {
      // Make text white or black based on the lightness of the background
      const col = d3_default().hsl(colorByCategory ? categoricalColorScale(d.name) : linearColorScale(d.m2 / d.m1));
      return col.l < 0.5 ? 'white' : 'black';
    }).attr('class', 'step-label').text(d => d.name.replace(/_/g, ' ')).call(wrapSvgText, breadcrumbWidth, breadcrumbDims.height / 2); // Set position for entering and updating nodes.

    g.attr('transform', (d, i) => {
      if (isSmallWidth) {
        return `translate(0, ${i * (breadcrumbDims.height + breadcrumbDims.spacing)})`;
      }

      return `translate(${i * (breadcrumbDims.width + breadcrumbDims.spacing)}, 0)`;
    }); // Remove exiting nodes.

    g.exit().remove(); // Now move and update the percentage at the end.

    breadcrumbs.select('.end-label').attr('x', () => {
      if (isSmallWidth) {
        return (breadcrumbWidth + breadcrumbDims.tipTailWidth) / 2;
      }

      return (sequenceArray.length + 0.5) * (breadcrumbDims.width + breadcrumbDims.spacing);
    }).attr('y', () => {
      if (isSmallWidth) {
        return (sequenceArray.length + 1) * breadcrumbDims.height;
      }

      return breadcrumbDims.height / 2;
    }).attr('dy', '0.35em').text(percentageString); // Make the breadcrumb trail visible, if it's hidden.

    breadcrumbs.style('visibility', null);
  } // Fade all but the current sequence, and show it in the breadcrumb trail.


  function mouseenter(d) {
    const sequenceArray = getAncestors(d);
    const parentOfD = sequenceArray[sequenceArray.length - 2] || null;
    const absolutePercentage = (d.m1 / totalSize).toPrecision(3);
    const conditionalPercentage = parentOfD ? (d.m1 / parentOfD.m1).toPrecision(3) : null;
    const absolutePercString = formatPerc(absolutePercentage);
    const conditionalPercString = parentOfD ? formatPerc(conditionalPercentage) : ''; // 3 levels of text if inner-most level, 4 otherwise

    const yOffsets = getYOffset(width);
    let offsetIndex = 0; // If metrics match, assume we are coloring by category

    const metricsMatch = Math.abs(d.m1 - d.m2) < 0.00001;
    gMiddleText.selectAll('*').remove();
    offsetIndex += 1;
    gMiddleText.append('text').attr('class', 'path-abs-percent').attr('y', yOffsets[offsetIndex]).text(`${absolutePercString} of total`);

    if (conditionalPercString) {
      offsetIndex += 1;
      gMiddleText.append('text').attr('class', 'path-cond-percent').attr('y', yOffsets[offsetIndex]).text(`${conditionalPercString} of parent`);
    }

    offsetIndex += 1;
    gMiddleText.append('text').attr('class', 'path-metrics').attr('y', yOffsets[offsetIndex]).text(`${metricLabel(metrics[0])}: ${formatNum(d.m1)}${metricsMatch ? '' : `, ${metricLabel(metrics[1])}: ${formatNum(d.m2)}`}`);
    offsetIndex += 1;
    gMiddleText.append('text').attr('class', 'path-ratio').attr('y', yOffsets[offsetIndex]).text(metricsMatch ? '' : `${metricLabel(metrics[1])}/${metricLabel(metrics[0])}: ${formatPerc(d.m2 / d.m1)}`); // Reset and fade all the segments.

    arcs.selectAll('path').style('stroke-width', null).style('stroke', null).style('opacity', 0.3); // Then highlight only those that are an ancestor of the current segment.

    arcs.selectAll('path').filter(node => sequenceArray.includes(node)).style('opacity', 1).style('stroke', '#aaa');
    updateBreadcrumbs(sequenceArray, absolutePercString);
  } // Restore everything to full opacity when moving off the visualization.


  function mouseleave() {
    // Hide the breadcrumb trail
    breadcrumbs.style('visibility', 'hidden');
    gMiddleText.selectAll('*').remove(); // Deactivate all segments during transition.

    arcs.selectAll('path').on('mouseenter', null); // Transition each segment to full opacity and then reactivate it.

    arcs.selectAll('path').transition().duration(200).style('opacity', 1).style('stroke', null).style('stroke-width', null).each('end', function end() {
      d3_default().select(this).on('mouseenter', mouseenter);
    });
  } // Main function to draw and set up the visualization, once we have the data.


  function createVisualization(rows) {
    const root = buildHierarchy(rows);
    maxBreadcrumbs = rows[0].length - 2;
    vis = svg.append('svg:g').attr('class', 'sunburst-vis').attr('transform', 'translate(' + `${margin.left + visWidth / 2},` + `${margin.top + (isSmallWidth ? breadcrumbHeight * maxBreadcrumbs : breadcrumbHeight) + visHeight / 2}` + ')').on('mouseleave', mouseleave);
    arcs = vis.append('svg:g').attr('id', 'arcs');
    gMiddleText = vis.append('svg:g').attr('class', 'center-label'); // Bounding circle underneath the sunburst, to make it easier to detect
    // when the mouse leaves the parent g.

    arcs.append('svg:circle').attr('r', radius).style('opacity', 0); // For efficiency, filter nodes to keep only those large enough to see.

    const nodes = partition.nodes(root).filter(d => d.dx > 0.005); // 0.005 radians = 0.29 degrees

    if (metrics[0] !== metrics[1] && metrics[1]) {
      colorByCategory = false;
      const ext = d3_default().extent(nodes, d => d.m2 / d.m1);
      linearColorScale = (0,SequentialSchemeRegistrySingleton/* default */.Z)().get(linearColorScheme).createLinearScale(ext);
    }

    arcs.selectAll('path').data(nodes).enter().append('svg:path').attr('display', d => d.depth ? null : 'none').attr('d', arc).attr('fill-rule', 'evenodd').style('fill', d => colorByCategory ? categoricalColorScale(d.name) : linearColorScale(d.m2 / d.m1)).style('opacity', 1).on('mouseenter', mouseenter); // Get total size of the tree = value of root node from partition.

    totalSize = root.value;
  }

  createBreadcrumbs(data[0]);
  createVisualization(data);
}

Sunburst.displayName = 'Sunburst';
Sunburst.propTypes = propTypes;
/* harmony default export */ const esm_Sunburst = (Sunburst);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-sunburst/esm/ReactSunburst.js
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


/* harmony default export */ const ReactSunburst = ((0,reactify/* default */.Z)(esm_Sunburst));

/***/ })

}]);