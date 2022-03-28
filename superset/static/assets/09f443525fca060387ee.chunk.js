"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[128],{

/***/ 10128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ReactTreemap)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/components/reactify.js
var reactify = __webpack_require__(73834);
// EXTERNAL MODULE: ./node_modules/d3-selection/src/selection/index.js + 40 modules
var selection = __webpack_require__(44059);
;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selectAll.js


/* harmony default export */ function selectAll(selector) {
  return typeof selector === "string"
      ? new selection/* Selection */.Y1([document.querySelectorAll(selector)], [document.documentElement])
      : new selection/* Selection */.Y1([selector == null ? [] : selector], selection/* root */.Jz);
}

// EXTERNAL MODULE: ./node_modules/d3-selection/src/select.js
var src_select = __webpack_require__(94017);
;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/treemap/round.js
/* harmony default export */ function treemap_round(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/treemap/dice.js
/* harmony default export */ function dice(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (x1 - x0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/treemap/slice.js
/* harmony default export */ function slice(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (y1 - y0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/treemap/squarify.js



var phi = (1 + Math.sqrt(5)) / 2;

function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
      nodes = parent.children,
      row,
      nodeValue,
      i0 = 0,
      i1 = 0,
      n = nodes.length,
      dx, dy,
      value = parent.value,
      sumValue,
      minValue,
      maxValue,
      newRatio,
      minRatio,
      alpha,
      beta;

  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) { sumValue -= nodeValue; break; }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
    if (row.dice) dice(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
    else slice(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }

  return rows;
}

/* harmony default export */ const squarify = ((function custom(ratio) {

  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }

  squarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return squarify;
})(phi));

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/accessors.js
function optional(f) {
  return f == null ? null : required(f);
}

function required(f) {
  if (typeof f !== "function") throw new Error;
  return f;
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/constant.js
function constantZero() {
  return 0;
}

/* harmony default export */ function constant(x) {
  return function() {
    return x;
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/treemap/index.js





/* harmony default export */ function src_treemap() {
  var tile = squarify,
      round = false,
      dx = 1,
      dy = 1,
      paddingStack = [0],
      paddingInner = constantZero,
      paddingTop = constantZero,
      paddingRight = constantZero,
      paddingBottom = constantZero,
      paddingLeft = constantZero;

  function treemap(root) {
    root.x0 =
    root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round) root.eachBefore(treemap_round);
    return root;
  }

  function positionNode(node) {
    var p = paddingStack[node.depth],
        x0 = node.x0 + p,
        y0 = node.y0 + p,
        x1 = node.x1 - p,
        y1 = node.y1 - p;
    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }

  treemap.round = function(x) {
    return arguments.length ? (round = !!x, treemap) : round;
  };

  treemap.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };

  treemap.tile = function(x) {
    return arguments.length ? (tile = required(x), treemap) : tile;
  };

  treemap.padding = function(x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };

  treemap.paddingInner = function(x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : constant(+x), treemap) : paddingInner;
  };

  treemap.paddingOuter = function(x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };

  treemap.paddingTop = function(x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : constant(+x), treemap) : paddingTop;
  };

  treemap.paddingRight = function(x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : constant(+x), treemap) : paddingRight;
  };

  treemap.paddingBottom = function(x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : constant(+x), treemap) : paddingBottom;
  };

  treemap.paddingLeft = function(x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : constant(+x), treemap) : paddingLeft;
  };

  return treemap;
}

// EXTERNAL MODULE: ./node_modules/d3-hierarchy/src/hierarchy/index.js + 11 modules
var hierarchy = __webpack_require__(71939);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js
var NumberFormatterRegistrySingleton = __webpack_require__(50855);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalColorNamespace.js
var CategoricalColorNamespace = __webpack_require__(83527);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/Treemap.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/Treemap.js
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

/* eslint-disable no-param-reassign, func-names */

/* eslint-disable react/sort-prop-types */




 // Declare PropTypes for recursive data structures
// https://github.com/facebook/react/issues/5676

/* eslint-disable-next-line  no-undef */

const lazyFunction = f => () => f().apply(undefined, arguments);

const leafType = prop_types_default().shape({
  name: (prop_types_default()).string,
  value: (prop_types_default()).number.isRequired
});
const parentShape = {
  name: (prop_types_default()).string,
  children: prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().shape(lazyFunction(() => parentShape)), leafType]))
};
const nodeType = prop_types_default().oneOfType([prop_types_default().shape(parentShape), leafType]);
const propTypes = {
  data: prop_types_default().arrayOf(nodeType),
  width: (prop_types_default()).number,
  height: (prop_types_default()).number,
  colorScheme: (prop_types_default()).string,
  margin: prop_types_default().shape({
    top: (prop_types_default()).number,
    right: (prop_types_default()).number,
    bottom: (prop_types_default()).number,
    left: (prop_types_default()).number
  }),
  numberFormat: (prop_types_default()).string,
  treemapRatio: (prop_types_default()).number
};

function hovered(hover) {
  return function (node) {
    selectAll(node.ancestors().map(d => d.node)).classed('node--hover', hover).select('rect').attr('width', d => d.x1 - d.x0 - hover).attr('height', d => d.y1 - d.y0 - hover);
  };
}
/* Modified from https://bl.ocks.org/mbostock/911ad09bdead40ec0061 */


function Treemap(element, props) {
  const {
    data: rawData,
    width,
    height,
    numberFormat,
    colorScheme,
    treemapRatio
  } = props;
  const div = (0,src_select/* default */.Z)(element);
  div.classed('superset-legacy-chart-treemap', true);
  const formatNumber = (0,NumberFormatterRegistrySingleton/* getNumberFormatter */.JB)(numberFormat);
  const colorFn = CategoricalColorNamespace.getScale(colorScheme);
  const rootNodes = rawData;
  div.selectAll('*').remove();

  if (rootNodes.length > 0) {
    const [rootNode] = rootNodes;
    const treemap = src_treemap().size([width, height]).paddingOuter(3).paddingTop(19).paddingInner(1).tile(squarify.ratio(treemapRatio)).round(true);
    const root = treemap((0,hierarchy/* default */.ZP)(rootNode).sum(d => d.value).sort((a, b) => b.height - a.height || b.value - a.value));
    const svg = div.append('svg').attr('class', 'treemap').attr('width', width).attr('height', height);
    const cell = svg.selectAll('.node').data(root.descendants()).enter().append('g').attr('transform', d => `translate(${d.x0},${d.y0})`).attr('class', 'node').each(function (d) {
      d.node = this;
    }).on('mouseover', hovered(true)).on('mouseout', hovered(false));
    cell.append('rect').attr('id', d => `rect-${d.data.name}`).attr('width', d => d.x1 - d.x0).attr('height', d => d.y1 - d.y0).style('fill', d => colorFn(d.depth));
    cell.append('clipPath').attr('id', d => `clip-${d.data.name}`).append('use').attr('xlink:href', d => `#rect-${d.data.name}`);
    const label = cell.append('text').attr('clip-path', d => `url(#clip-${d.data.name})`);
    label.filter(d => d.children).selectAll('tspan').data(d => d.data.name.slice(Math.max(0, d.data.name.lastIndexOf('.') + 1)).split(/(?=[A-Z][^A-Z])/g).concat(`\u00A0${formatNumber(d.value)}`)).enter().append('tspan').attr('x', (d, i) => i ? null : 4).attr('y', 13).text(d => d);
    label.filter(d => !d.children).selectAll('tspan').data(d => d.data.name.slice(Math.max(0, d.data.name.lastIndexOf('.') + 1)).split(/(?=[A-Z][^A-Z])/g).concat(formatNumber(d.value))).enter().append('tspan').attr('x', 4).attr('y', (d, i) => 13 + i * 10).text(d => d);
    cell.append('title').text(d => `${d.data.name}\n${formatNumber(d.value)}`);
  }
}

Treemap.displayName = 'Treemap';
Treemap.propTypes = propTypes;
/* harmony default export */ const esm_Treemap = (Treemap);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/ReactTreemap.js
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


/* harmony default export */ const ReactTreemap = ((0,reactify/* default */.Z)(esm_Treemap));

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