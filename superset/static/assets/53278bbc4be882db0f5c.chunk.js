"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[4473],{

/***/ 4473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ReactPartition)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/components/reactify.js
var reactify = __webpack_require__(73834);
// EXTERNAL MODULE: ./node_modules/d3/d3.js
var d3 = __webpack_require__(15078);
var d3_default = /*#__PURE__*/__webpack_require__.n(d3);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/d3-hierarchy/src/hierarchy/index.js + 11 modules
var hierarchy = __webpack_require__(71939);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js
var NumberFormatterRegistrySingleton = __webpack_require__(50855);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/TimeFormatterRegistrySingleton.js + 5 modules
var TimeFormatterRegistrySingleton = __webpack_require__(14826);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalColorNamespace.js
var CategoricalColorNamespace = __webpack_require__(83527);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-partition/esm/Partition.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-partition/esm/Partition.js
/* eslint-disable react/sort-prop-types */

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

/* eslint no-param-reassign: [2, {"props": false}] */




 // Compute dx, dy, x, y for each node and
// return an array of nodes in breadth-first order

function init(root) {
  const flat = [];
  const dy = 1 / (root.height + 1);
  let prev = null;
  root.each(n => {
    n.y = dy * n.depth;
    n.dy = dy;

    if (n.parent) {
      n.x = prev.depth === n.parent.depth ? 0 : prev.x + prev.dx;
      n.dx = n.weight / n.parent.sum * n.parent.dx;
    } else {
      n.x = 0;
      n.dx = 1;
    }

    prev = n;
    flat.push(n);
  });
  return flat;
} // Declare PropTypes for recursive data structures
// https://github.com/facebook/react/issues/5676

/* eslint-disable-next-line  no-undef */


const lazyFunction = f => () => f().apply(undefined, arguments);

const leafType = prop_types_default().shape({
  name: (prop_types_default()).string,
  val: (prop_types_default()).number.isRequired
});
const parentShape = {
  name: (prop_types_default()).string,
  val: (prop_types_default()).number.isRequired,
  children: prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().shape(lazyFunction(() => parentShape)), leafType]))
};
const nodeType = prop_types_default().oneOfType([prop_types_default().shape(parentShape), leafType]);
const propTypes = {
  data: prop_types_default().arrayOf(nodeType),
  // array of rootNode
  width: (prop_types_default()).number,
  height: (prop_types_default()).number,
  colorScheme: (prop_types_default()).string,
  dateTimeFormat: (prop_types_default()).string,
  equalDateSize: (prop_types_default()).bool,
  levels: prop_types_default().arrayOf((prop_types_default()).string),
  metrics: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object])),
  numberFormat: (prop_types_default()).string,
  partitionLimit: (prop_types_default()).number,
  partitionThreshold: (prop_types_default()).number,
  timeSeriesOption: (prop_types_default()).string,
  useLogScale: (prop_types_default()).bool,
  useRichTooltip: (prop_types_default()).bool
};

function getAncestors(d) {
  const ancestors = [d];
  let node = d;

  while (node.parent) {
    ancestors.push(node.parent);
    node = node.parent;
  }

  return ancestors;
} // This vis is based on
// http://mbostock.github.io/d3/talk/20111018/partition.html


function Icicle(element, props) {
  const {
    width,
    height,
    data,
    colorScheme,
    dateTimeFormat,
    equalDateSize,
    levels,
    useLogScale = false,
    metrics = [],
    numberFormat,
    partitionLimit,
    partitionThreshold,
    useRichTooltip,
    timeSeriesOption = 'not_time'
  } = props;
  const div = d3_default().select(element);
  div.classed('superset-legacy-chart-partition', true); // Chart options

  const chartType = timeSeriesOption;
  const hasTime = ['adv_anal', 'time_series'].includes(chartType);
  const format = (0,NumberFormatterRegistrySingleton/* getNumberFormatter */.JB)(numberFormat);
  const timeFormat = (0,TimeFormatterRegistrySingleton/* getTimeFormatter */.bt)(dateTimeFormat);
  const colorFn = CategoricalColorNamespace.getScale(colorScheme);
  div.selectAll('*').remove();
  const tooltip = div.append('div').classed('partition-tooltip', true);

  function hasDateNode(n) {
    return metrics.includes(n.data.name) && hasTime;
  }

  function getCategory(depth) {
    if (!depth) {
      return 'Metric';
    }

    if (hasTime && depth === 1) {
      return 'Date';
    }

    return levels[depth - (hasTime ? 2 : 1)];
  }

  function drawVis(i, dat) {
    const datum = dat[i];
    const w = width;
    const h = height / data.length;
    const x = d3_default().scale.linear().range([0, w]);
    const y = d3_default().scale.linear().range([0, h]);
    const viz = div.append('div').attr('class', 'chart').style('width', `${w}px`).style('height', `${h}px`).append('svg:svg').attr('width', w).attr('height', h); // Add padding between multiple visualizations

    if (i !== data.length - 1 && data.length > 1) {
      viz.style('padding-bottom', '3px');
    }

    if (i !== 0 && data.length > 1) {
      viz.style('padding-top', '3px');
    }

    const root = (0,hierarchy/* default */.ZP)(datum); // node.name is the metric/group name
    // node.disp is the display value
    // node.value determines sorting order
    // node.weight determines partition height
    // node.sum is the sum of children weights

    root.eachAfter(n => {
      n.disp = n.data.val;
      n.value = n.disp < 0 ? -n.disp : n.disp;
      n.weight = n.value;
      n.name = n.data.name; // If the parent is a metric and we still have
      // the time column, perform a date-time format

      if (n.parent && hasDateNode(n.parent)) {
        // Format timestamp values
        n.weight = equalDateSize ? 1 : n.value;
        n.value = n.name;
        n.name = timeFormat(n.name);
      }

      if (useLogScale) n.weight = Math.log(n.weight + 1);
      n.disp = n.disp && !Number.isNaN(n.disp) && Number.isFinite(n.disp) ? format(n.disp) : '';
    }); // Perform sort by weight

    root.sort((a, b) => {
      const v = b.value - a.value;

      if (v === 0) {
        return b.name > a.name ? 1 : -1;
      }

      return v;
    }); // Prune data based on partition limit and threshold
    // both are applied at the same time

    if (partitionThreshold && partitionThreshold >= 0) {
      // Compute weight sums as we go
      root.each(n => {
        n.sum = n.children ? n.children.reduce((a, v) => a + v.weight, 0) || 1 : 1;

        if (n.children) {
          // Dates are not ordered by weight
          if (hasDateNode(n)) {
            if (equalDateSize) {
              return;
            }

            const removeIndices = []; // Keep at least one child

            for (let j = 1; j < n.children.length; j += 1) {
              if (n.children[j].weight / n.sum < partitionThreshold) {
                removeIndices.push(j);
              }
            }

            for (let j = removeIndices.length - 1; j >= 0; j -= 1) {
              n.children.splice(removeIndices[j], 1);
            }
          } else {
            // Find first child that falls below the threshold
            let j;

            for (j = 1; j < n.children.length; j += 1) {
              if (n.children[j].weight / n.sum < partitionThreshold) {
                break;
              }
            }

            n.children = n.children.slice(0, j);
          }
        }
      });
    }

    if (partitionLimit && partitionLimit >= 0) {
      root.each(n => {
        if (n.children && n.children.length > partitionLimit) {
          if (!hasDateNode(n)) {
            n.children = n.children.slice(0, partitionLimit);
          }
        }
      });
    } // Compute final weight sums


    root.eachAfter(n => {
      n.sum = n.children ? n.children.reduce((a, v) => a + v.weight, 0) || 1 : 1;
    });

    function positionAndPopulate(tip, d) {
      let t = '<table>';

      if (useRichTooltip) {
        const nodes = getAncestors(d);
        nodes.reverse().forEach(n => {
          const atNode = n.depth === d.depth;
          t += '<tbody>';
          t += '<tr>' + '<td>' + '<div ' + `style='border: 2px solid ${atNode ? 'black' : 'transparent'};` + `background-color: ${n.color};'` + '></div>' + '</td>' + `<td>${getCategory(n.depth)}</td>` + `<td>${n.name}</td>` + `<td>${n.disp}</td>` + '</tr>';
        });
      } else {
        t += '<thead><tr><td colspan="3">' + `<strong>${getCategory(d.depth)}</strong>` + '</td></tr></thead><tbody>';
        t += '<tr>' + '<td>' + `<div style='border: thin solid grey; background-color: ${d.color};'` + '></div>' + '</td>' + `<td>${d.name}</td>` + `<td>${d.disp}</td>` + '</tr>';
      }

      t += '</tbody></table>';
      const [tipX, tipY] = d3_default().mouse(element);
      tip.html(t).style('left', `${tipX + 15}px`).style('top', `${tipY}px`);
    }

    const nodes = init(root);
    let zoomX = w / root.dx;
    let zoomY = h / 1; // Keep text centered in its division

    function transform(d) {
      return `translate(8,${d.dx * zoomY / 2})`;
    }

    const g = viz.selectAll('g').data(nodes).enter().append('svg:g').attr('transform', d => `translate(${x(d.y)},${y(d.x)})`).on('mouseover', d => {
      tooltip.interrupt().transition().duration(100).style('opacity', 0.9);
      positionAndPopulate(tooltip, d);
    }).on('mousemove', d => {
      positionAndPopulate(tooltip, d);
    }).on('mouseout', () => {
      tooltip.interrupt().transition().duration(250).style('opacity', 0);
    }); // When clicking a subdivision, the vis will zoom in to it

    function click(d) {
      if (!d.children) {
        if (d.parent) {
          // Clicking on the rightmost level should zoom in
          return click(d.parent);
        }

        return false;
      }

      zoomX = (d.y ? w - 40 : w) / (1 - d.y);
      zoomY = h / d.dx;
      x.domain([d.y, 1]).range([d.y ? 40 : 0, w]);
      y.domain([d.x, d.x + d.dx]);
      const t = g.transition().duration((d3_default()).event.altKey ? 7500 : 750).attr('transform', nd => `translate(${x(nd.y)},${y(nd.x)})`);
      t.select('rect').attr('width', d.dy * zoomX).attr('height', nd => nd.dx * zoomY);
      t.select('text').attr('transform', transform).style('opacity', nd => nd.dx * zoomY > 12 ? 1 : 0);
      d3_default().event.stopPropagation();
      return true;
    }

    g.on('click', click);
    g.append('svg:rect').attr('width', root.dy * zoomX).attr('height', d => d.dx * zoomY);
    g.append('svg:text').attr('transform', transform).attr('dy', '0.35em').style('opacity', d => d.dx * zoomY > 12 ? 1 : 0).text(d => {
      if (!d.disp) {
        return d.name;
      }

      return `${d.name}: ${d.disp}`;
    }); // Apply color scheme

    g.selectAll('rect').style('fill', d => {
      d.color = colorFn(d.name);
      return d.color;
    });
  }

  for (let i = 0; i < data.length; i += 1) {
    drawVis(i, data);
  }
}

Icicle.displayName = 'Icicle';
Icicle.propTypes = propTypes;
/* harmony default export */ const Partition = (Icicle);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-partition/esm/ReactPartition.js
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


/* harmony default export */ const ReactPartition = ((0,reactify/* default */.Z)(Partition));

/***/ }),

/***/ 71939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ hierarchy)
});

// UNUSED EXPORTS: Node, computeHeight

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/count.js
function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;
  else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}

/* harmony default export */ function hierarchy_count() {
  return this.eachAfter(count);
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/each.js
/* harmony default export */ function each(callback) {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      callback(node), children = node.children;
      if (children) for (i = 0, n = children.length; i < n; ++i) {
        next.push(children[i]);
      }
    }
  } while (next.length);
  return this;
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
/* harmony default export */ function eachBefore(callback) {
  var node = this, nodes = [node], children, i;
  while (node = nodes.pop()) {
    callback(node), children = node.children;
    if (children) for (i = children.length - 1; i >= 0; --i) {
      nodes.push(children[i]);
    }
  }
  return this;
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
/* harmony default export */ function eachAfter(callback) {
  var node = this, nodes = [node], next = [], children, i, n;
  while (node = nodes.pop()) {
    next.push(node), children = node.children;
    if (children) for (i = 0, n = children.length; i < n; ++i) {
      nodes.push(children[i]);
    }
  }
  while (node = next.pop()) {
    callback(node);
  }
  return this;
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/sum.js
/* harmony default export */ function sum(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/sort.js
/* harmony default export */ function sort(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/path.js
/* harmony default export */ function path(end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
}

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/ancestors.js
/* harmony default export */ function ancestors() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/descendants.js
/* harmony default export */ function descendants() {
  var nodes = [];
  this.each(function(node) {
    nodes.push(node);
  });
  return nodes;
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/leaves.js
/* harmony default export */ function leaves() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/links.js
/* harmony default export */ function links() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) { // Don’t include the root’s parent, if any.
      links.push({source: node.parent, target: node});
    }
  });
  return links;
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/index.js












function hierarchy(data, children) {
  var root = new Node(data),
      valued = +data.value && (root.value = data.value),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  if (children == null) children = defaultChildren;

  while (node = nodes.pop()) {
    if (valued) node.value = +node.data.value;
    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function defaultChildren(d) {
  return d.children;
}

function copyData(node) {
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: hierarchy_count,
  each: each,
  eachAfter: eachAfter,
  eachBefore: eachBefore,
  sum: sum,
  sort: sort,
  path: path,
  ancestors: ancestors,
  descendants: descendants,
  leaves: leaves,
  links: links,
  copy: node_copy
};


/***/ })

}]);