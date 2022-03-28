"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[5859],{

/***/ 65859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ReactSankey)
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
// EXTERNAL MODULE: ./node_modules/d3-array/src/index.js + 31 modules
var src = __webpack_require__(4065);
// EXTERNAL MODULE: ./node_modules/d3-collection/src/index.js + 3 modules
var d3_collection_src = __webpack_require__(31654);
// EXTERNAL MODULE: ./node_modules/d3-interpolate/src/number.js
var number = __webpack_require__(73626);
;// CONCATENATED MODULE: ./node_modules/d3-sankey/src/sankey.js




/* harmony default export */ function src_sankey() {
  var sankey = {},
      nodeWidth = 24,
      nodePadding = 8,
      size = [1, 1],
      nodes = [],
      links = [];

  sankey.nodeWidth = function(_) {
    if (!arguments.length) return nodeWidth;
    nodeWidth = +_;
    return sankey;
  };

  sankey.nodePadding = function(_) {
    if (!arguments.length) return nodePadding;
    nodePadding = +_;
    return sankey;
  };

  sankey.nodes = function(_) {
    if (!arguments.length) return nodes;
    nodes = _;
    return sankey;
  };

  sankey.links = function(_) {
    if (!arguments.length) return links;
    links = _;
    return sankey;
  };

  sankey.size = function(_) {
    if (!arguments.length) return size;
    size = _;
    return sankey;
  };

  sankey.layout = function(iterations) {
    computeNodeLinks();
    computeNodeValues();
    computeNodeBreadths();
    computeNodeDepths(iterations);
    computeLinkDepths();
    return sankey;
  };

  sankey.relayout = function() {
    computeLinkDepths();
    return sankey;
  };

  sankey.link = function() {
    var curvature = .5;

    function link(d) {
      var x0 = d.source.x + d.source.dx,
          x1 = d.target.x,
          xi = (0,number/* default */.Z)(x0, x1),
          x2 = xi(curvature),
          x3 = xi(1 - curvature),
          y0 = d.source.y + d.sy + d.dy / 2,
          y1 = d.target.y + d.ty + d.dy / 2;
      return "M" + x0 + "," + y0
           + "C" + x2 + "," + y0
           + " " + x3 + "," + y1
           + " " + x1 + "," + y1;
    }

    link.curvature = function(_) {
      if (!arguments.length) return curvature;
      curvature = +_;
      return link;
    };

    return link;
  };

  // Populate the sourceLinks and targetLinks for each node.
  // Also, if the source and target are not objects, assume they are indices.
  function computeNodeLinks() {
    nodes.forEach(function(node) {
      node.sourceLinks = [];
      node.targetLinks = [];
    });
    links.forEach(function(link) {
      var source = link.source,
          target = link.target;
      if (typeof source === "number") source = link.source = nodes[link.source];
      if (typeof target === "number") target = link.target = nodes[link.target];
      source.sourceLinks.push(link);
      target.targetLinks.push(link);
    });
  }

  // Compute the value (size) of each node by summing the associated links.
  function computeNodeValues() {
    nodes.forEach(function(node) {
      node.value = Math.max(
        (0,src.sum)(node.sourceLinks, value),
        (0,src.sum)(node.targetLinks, value)
      );
    });
  }

  // Iteratively assign the breadth (x-position) for each node.
  // Nodes are assigned the maximum breadth of incoming neighbors plus one;
  // nodes with no incoming links are assigned breadth zero, while
  // nodes with no outgoing links are assigned the maximum breadth.
  function computeNodeBreadths() {
    var remainingNodes = nodes,
        nextNodes,
        x = 0;

    while (remainingNodes.length) {
      nextNodes = [];
      remainingNodes.forEach(function(node) {
        node.x = x;
        node.dx = nodeWidth;
        node.sourceLinks.forEach(function(link) {
          if (nextNodes.indexOf(link.target) < 0) {
            nextNodes.push(link.target);
          }
        });
      });
      remainingNodes = nextNodes;
      ++x;
    }

    //
    moveSinksRight(x);
    scaleNodeBreadths((size[0] - nodeWidth) / (x - 1));
  }

  // function moveSourcesRight() {
  //   nodes.forEach(function(node) {
  //     if (!node.targetLinks.length) {
  //       node.x = min(node.sourceLinks, function(d) { return d.target.x; }) - 1;
  //     }
  //   });
  // }

  function moveSinksRight(x) {
    nodes.forEach(function(node) {
      if (!node.sourceLinks.length) {
        node.x = x - 1;
      }
    });
  }

  function scaleNodeBreadths(kx) {
    nodes.forEach(function(node) {
      node.x *= kx;
    });
  }

  function computeNodeDepths(iterations) {
    var nodesByBreadth = (0,d3_collection_src/* nest */.b1)()
        .key(function(d) { return d.x; })
        .sortKeys(src.ascending)
        .entries(nodes)
        .map(function(d) { return d.values; });

    //
    initializeNodeDepth();
    resolveCollisions();
    for (var alpha = 1; iterations > 0; --iterations) {
      relaxRightToLeft(alpha *= .99);
      resolveCollisions();
      relaxLeftToRight(alpha);
      resolveCollisions();
    }

    function initializeNodeDepth() {
      var ky = (0,src.min)(nodesByBreadth, function(nodes) {
        return (size[1] - (nodes.length - 1) * nodePadding) / (0,src.sum)(nodes, value);
      });

      nodesByBreadth.forEach(function(nodes) {
        nodes.forEach(function(node, i) {
          node.y = i;
          node.dy = node.value * ky;
        });
      });

      links.forEach(function(link) {
        link.dy = link.value * ky;
      });
    }

    function relaxLeftToRight(alpha) {
      nodesByBreadth.forEach(function(nodes) {
        nodes.forEach(function(node) {
          if (node.targetLinks.length) {
            var y = (0,src.sum)(node.targetLinks, weightedSource) / (0,src.sum)(node.targetLinks, value);
            node.y += (y - center(node)) * alpha;
          }
        });
      });

      function weightedSource(link) {
        return center(link.source) * link.value;
      }
    }

    function relaxRightToLeft(alpha) {
      nodesByBreadth.slice().reverse().forEach(function(nodes) {
        nodes.forEach(function(node) {
          if (node.sourceLinks.length) {
            var y = (0,src.sum)(node.sourceLinks, weightedTarget) / (0,src.sum)(node.sourceLinks, value);
            node.y += (y - center(node)) * alpha;
          }
        });
      });

      function weightedTarget(link) {
        return center(link.target) * link.value;
      }
    }

    function resolveCollisions() {
      nodesByBreadth.forEach(function(nodes) {
        var node,
            dy,
            y0 = 0,
            n = nodes.length,
            i;

        // Push any overlapping nodes down.
        nodes.sort(ascendingDepth);
        for (i = 0; i < n; ++i) {
          node = nodes[i];
          dy = y0 - node.y;
          if (dy > 0) node.y += dy;
          y0 = node.y + node.dy + nodePadding;
        }

        // If the bottommost node goes outside the bounds, push it back up.
        dy = y0 - nodePadding - size[1];
        if (dy > 0) {
          y0 = node.y -= dy;

          // Push any overlapping nodes back up.
          for (i = n - 2; i >= 0; --i) {
            node = nodes[i];
            dy = node.y + node.dy + nodePadding - y0;
            if (dy > 0) node.y -= dy;
            y0 = node.y;
          }
        }
      });
    }

    function ascendingDepth(a, b) {
      return a.y - b.y;
    }
  }

  function computeLinkDepths() {
    nodes.forEach(function(node) {
      node.sourceLinks.sort(ascendingTargetDepth);
      node.targetLinks.sort(ascendingSourceDepth);
    });
    nodes.forEach(function(node) {
      var sy = 0, ty = 0;
      node.sourceLinks.forEach(function(link) {
        link.sy = sy;
        sy += link.dy;
      });
      node.targetLinks.forEach(function(link) {
        link.ty = ty;
        ty += link.dy;
      });
    });

    function ascendingSourceDepth(a, b) {
      return a.source.y - b.source.y;
    }

    function ascendingTargetDepth(a, b) {
      return a.target.y - b.target.y;
    }
  }

  function center(node) {
    return node.y + node.dy / 2;
  }

  function value(link) {
    return link.value;
  }

  return sankey;
}

;// CONCATENATED MODULE: ./node_modules/d3-sankey/index.js


// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js
var NumberFormatterRegistrySingleton = __webpack_require__(50855);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormats.js
var NumberFormats = __webpack_require__(63758);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalColorNamespace.js
var CategoricalColorNamespace = __webpack_require__(83527);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-sankey/esm/utils.js
var utils = __webpack_require__(84874);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-sankey/esm/Sankey.js
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

/* eslint-disable no-param-reassign */

/* eslint-disable react/sort-prop-types */





const propTypes = {
  data: prop_types_default().arrayOf(prop_types_default().shape({
    source: (prop_types_default()).string,
    target: (prop_types_default()).string,
    value: (prop_types_default()).number
  })),
  width: (prop_types_default()).number,
  height: (prop_types_default()).number,
  colorScheme: (prop_types_default()).string
};
const formatNumber = (0,NumberFormatterRegistrySingleton/* getNumberFormatter */.JB)(NumberFormats/* default.FLOAT */.Z.FLOAT);

function Sankey(element, props) {
  const {
    data,
    width,
    height,
    colorScheme
  } = props;
  const div = d3_default().select(element);
  div.classed(`superset-legacy-chart-sankey`, true);
  const margin = {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  div.selectAll('*').remove();
  const tooltip = div.append('div').attr('class', 'sankey-tooltip').style('opacity', 0);
  const svg = div.append('svg').attr('width', innerWidth + margin.left + margin.right).attr('height', innerHeight + margin.top + margin.bottom).append('g').attr('transform', `translate(${margin.left},${margin.top})`);
  const colorFn = CategoricalColorNamespace.getScale(colorScheme);
  const sankey = src_sankey().nodeWidth(15).nodePadding(10).size([innerWidth, innerHeight]);
  const path = sankey.link();
  let nodes = {}; // Compute the distinct nodes from the links.

  const links = data.map(row => {
    const link = { ...row
    };
    link.source = nodes[link.source] || (nodes[link.source] = {
      name: link.source
    });
    link.target = nodes[link.target] || (nodes[link.target] = {
      name: link.target
    });
    link.value = Number(link.value);
    return link;
  });
  nodes = d3_default().values(nodes);
  sankey.nodes(nodes).links(links).layout(32);

  function getTooltipHtml(d) {
    let html;

    if (d.sourceLinks) {
      // is node
      html = `${d.name} Value: <span class='emph'>${formatNumber(d.value)}</span>`;
    } else {
      const val = formatNumber(d.value);
      const sourcePercent = d3_default().round(d.value / d.source.value * 100, 1);
      const targetPercent = d3_default().round(d.value / d.target.value * 100, 1);
      html = ["<div class=''>Path Value: <span class='emph'>", val, '</span></div>', "<div class='percents'>", "<span class='emph'>", Number.isFinite(sourcePercent) ? sourcePercent : '100', '%</span> of ', d.source.name, '<br/>', `<span class='emph'>${Number.isFinite(targetPercent) ? targetPercent : '--'}%</span> of `, d.target.name, '</div>'].join('');
    }

    return html;
  }

  function onmouseover(d) {
    tooltip.html(() => getTooltipHtml(d)).transition().duration(200);
    const {
      height: tooltipHeight,
      width: tooltipWidth
    } = tooltip.node().getBoundingClientRect();
    tooltip.style('left', `${Math.min((d3_default()).event.offsetX + 10, width - tooltipWidth)}px`).style('top', `${Math.min((d3_default()).event.offsetY + 10, height - tooltipHeight)}px`).style('position', 'absolute').style('opacity', 0.95);
  }

  function onmouseout() {
    tooltip.transition().duration(100).style('opacity', 0);
  }

  const link = svg.append('g').selectAll('.link').data(links).enter().append('path').attr('class', 'link').attr('d', path).style('stroke-width', d => Math.max(1, d.dy)).sort((a, b) => b.dy - a.dy).on('mouseover', onmouseover).on('mouseout', onmouseout);

  function dragmove(d) {
    d3_default().select(this).attr('transform', `translate(${d.x},${d.y = Math.max(0, Math.min(height - d.dy, (d3_default()).event.y))})`);
    sankey.relayout();
    link.attr('d', path);
  }

  function checkVisibility() {
    const elements = div.selectAll('.node')[0] ?? [];
    const overlappingElements = (0,utils/* getOverlappingElements */.Ce)(elements);
    elements.forEach(el => {
      const text = el.getElementsByTagName('text')[0];

      if (text) {
        if (overlappingElements.includes(el)) {
          text.classList.add('opacity-0');
        } else {
          text.classList.remove('opacity-0');
        }
      }
    });
  }

  const node = svg.append('g').selectAll('.node').data(nodes).enter().append('g').attr('class', 'node').attr('transform', d => `translate(${d.x},${d.y})`).call(d3_default().behavior.drag().origin(d => d).on('dragstart', function dragStart() {
    this.parentNode.append(this);
  }).on('drag', dragmove).on('dragend', checkVisibility));
  const minRectHeight = 5;
  node.append('rect').attr('height', d => d.dy > minRectHeight ? d.dy : minRectHeight).attr('width', sankey.nodeWidth()).style('fill', d => {
    const name = d.name || 'N/A';
    d.color = colorFn(name.replace(/ .*/, ''));
    return d.color;
  }).style('stroke', d => d3_default().rgb(d.color).darker(2)).on('mouseover', onmouseover).on('mouseout', onmouseout);
  node.append('text').attr('x', -6).attr('y', d => d.dy / 2).attr('dy', '.35em').attr('text-anchor', 'end').attr('transform', null).text(d => d.name).attr('class', 'opacity-0').filter(d => d.x < innerWidth / 2).attr('x', 6 + sankey.nodeWidth()).attr('text-anchor', 'start');
  checkVisibility();
}

Sankey.displayName = 'Sankey';
Sankey.propTypes = propTypes;
/* harmony default export */ const esm_Sankey = (Sankey);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-sankey/esm/ReactSankey.js
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





const ReactSanKey = (0,reactify/* default */.Z)(esm_Sankey);

const SankeyComponent = ({
  className,
  ...otherProps
}) => (0,emotion_react_browser_esm.jsx)("div", {
  className: className
}, (0,emotion_react_browser_esm.jsx)(ReactSanKey, otherProps));

SankeyComponent.propTypes = {
  className: (prop_types_default()).string.isRequired
};
/* harmony default export */ const ReactSankey = ((0,style/* styled */.iK)(SankeyComponent)`
  .superset-legacy-chart-sankey {
    .node {
      rect {
        cursor: move;
        fill-opacity: 0.9;
        shape-rendering: crispEdges;
      }
      text {
        pointer-events: none;
        text-shadow: 0 1px 0 #fff;
        font-size: ${({
  fontSize
}) => fontSize}em;
      }
    }
    .link {
      fill: none;
      stroke: #000;
      stroke-opacity: 0.2;
      &:hover {
        stroke-opacity: 0.5;
      }
    }
    .opacity-0 {
      opacity: 0;
    }
  }
  .sankey-tooltip {
    position: absolute;
    width: auto;
    background: #ddd;
    padding: 10px;
    font-size: ${({
  fontSize
}) => fontSize}em;
    font-weight: ${({
  theme
}) => theme.typography.weights.light};
    color: #000;
    border: 1px solid #fff;
    text-align: center;
    pointer-events: none;
  }
`);

/***/ })

}]);