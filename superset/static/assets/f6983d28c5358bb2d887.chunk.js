"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[8903],{

/***/ 48903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ esm_HorizonChart)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/extent.js
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

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/ensureIsArray.js
var ensureIsArray = __webpack_require__(86852);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    let r0 = Math.round(start / step), r1 = Math.round(stop / step);
    if (r0 * step < start) ++r0;
    if (r1 * step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) * step;
  } else {
    step = -step;
    let r0 = Math.round(start * step), r1 = Math.round(stop * step);
    if (r0 / step < start) ++r0;
    if (r1 / step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
}

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/ascending.js
/* harmony default export */ function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/bisector.js


/* harmony default export */ function bisector(f) {
  let delta = f;
  let compare = f;

  if (f.length === 1) {
    delta = (d, x) => f(d) - x;
    compare = ascendingComparator(f);
  }

  function left(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function right(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) > 0) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }

  function center(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
}

function ascendingComparator(f) {
  return (d, x) => ascending(f(d), x);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/number.js
/* harmony default export */ function number(x) {
  return x === null ? NaN : +x;
}

function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/bisect.js




const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = bisector(number).center;
/* harmony default export */ const bisect = (bisectRight);

// EXTERNAL MODULE: ./node_modules/d3-interpolate/src/value.js
var value = __webpack_require__(81265);
// EXTERNAL MODULE: ./node_modules/d3-interpolate/src/number.js
var src_number = __webpack_require__(73626);
// EXTERNAL MODULE: ./node_modules/d3-interpolate/src/round.js
var round = __webpack_require__(55720);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/constant.js
function constants(x) {
  return function() {
    return x;
  };
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/number.js
function number_number(x) {
  return +x;
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/continuous.js





var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constants(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisect(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = value/* default */.Z,
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), src_number/* default */.Z)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number_number), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = round/* default */.Z, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity, identity);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/init.js
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}

// EXTERNAL MODULE: ./node_modules/d3-format/src/index.js + 15 modules
var src = __webpack_require__(16722);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/tickFormat.js



function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = (0,src/* formatSpecifier */.YQ)(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = (0,src/* precisionPrefix */.S5)(step, value))) specifier.precision = precision;
      return (0,src/* formatPrefix */.jH)(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = (0,src/* precisionRound */.F0)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = (0,src/* precisionFixed */.zB)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return (0,src/* format */.WU)(specifier);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/linear.js





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start
        d[i1] = stop
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = continuous();

  scale.copy = function() {
    return copy(scale, linear());
  };

  initRange.apply(scale, arguments);

  return linearish(scale);
}

// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonRow.js
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

/* eslint-disable no-continue, no-bitwise */

/* eslint-disable react/jsx-sort-default-props */

/* eslint-disable react/sort-prop-types */





const DEFAULT_COLORS = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#fee090', '#fdae61', '#f46d43', '#d73027'];
const propTypes = {
  className: (prop_types_default()).string,
  width: (prop_types_default()).number,
  height: (prop_types_default()).number,
  data: prop_types_default().arrayOf(prop_types_default().shape({
    y: (prop_types_default()).number
  })).isRequired,
  bands: (prop_types_default()).number,
  colors: prop_types_default().arrayOf((prop_types_default()).string),
  colorScale: (prop_types_default()).string,
  mode: (prop_types_default()).string,
  offsetX: (prop_types_default()).number,
  title: (prop_types_default()).string,
  yDomain: prop_types_default().arrayOf((prop_types_default()).number)
};
const defaultProps = {
  className: '',
  width: 800,
  height: 20,
  bands: DEFAULT_COLORS.length >> 1,
  colors: DEFAULT_COLORS,
  colorScale: 'series',
  mode: 'offset',
  offsetX: 0,
  title: '',
  yDomain: undefined
};

class HorizonRow extends react.PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate() {
    this.drawChart();
  }

  componentWillUnmount() {
    this.canvas = null;
  }

  drawChart() {
    if (this.canvas) {
      const {
        data: rawData,
        yDomain,
        width,
        height,
        bands,
        colors,
        colorScale,
        offsetX,
        mode
      } = this.props;
      const data = colorScale === 'change' ? rawData.map(d => ({ ...d,
        y: d.y - rawData[0].y
      })) : rawData;
      const context = this.canvas.getContext('2d');
      context.imageSmoothingEnabled = false;
      context.clearRect(0, 0, width, height); // Reset transform

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.translate(0.5, 0.5);
      const step = width / data.length; // the data frame currently being shown:

      const startIndex = Math.floor(Math.max(0, -(offsetX / step)));
      const endIndex = Math.floor(Math.min(data.length, startIndex + width / step)); // skip drawing if there's no data to be drawn

      if (startIndex > data.length) {
        return;
      } // Create y-scale


      const [min, max] = yDomain || extent(data, d => d.y);
      const y = linear().domain([0, Math.max(-min, max)]).range([0, height]); // we are drawing positive & negative bands separately to avoid mutating canvas state
      // http://www.html5rocks.com/en/tutorials/canvas/performance/

      let hasNegative = false; // draw positive bands

      let value;
      let bExtents;

      for (let b = 0; b < bands; b += 1) {
        context.fillStyle = colors[bands + b]; // Adjust the range based on the current band index.

        bExtents = (b + 1 - bands) * height;
        y.range([bands * height + bExtents, bExtents]); // only the current data frame is being drawn i.e. what's visible:

        for (let i = startIndex; i < endIndex; i += 1) {
          value = data[i].y;

          if (value <= 0) {
            hasNegative = true;
            continue;
          }

          if (value !== undefined) {
            context.fillRect(offsetX + i * step, y(value), step + 1, y(0) - y(value));
          }
        }
      } // draw negative bands


      if (hasNegative) {
        // mirror the negative bands, by flipping the canvas
        if (mode === 'offset') {
          context.translate(0, height);
          context.scale(1, -1);
        }

        for (let b = 0; b < bands; b += 1) {
          context.fillStyle = colors[bands - b - 1]; // Adjust the range based on the current band index.

          bExtents = (b + 1 - bands) * height;
          y.range([bands * height + bExtents, bExtents]); // only the current data frame is being drawn i.e. what's visible:

          for (let ii = startIndex; ii < endIndex; ii += 1) {
            value = data[ii].y;

            if (value >= 0) {
              continue;
            }

            context.fillRect(offsetX + ii * step, y(-value), step + 1, y(0) - y(-value));
          }
        }
      }
    }
  }

  render() {
    const {
      className,
      title,
      width,
      height
    } = this.props;
    return (0,emotion_react_browser_esm.jsx)("div", {
      className: `horizon-row ${className}`
    }, (0,emotion_react_browser_esm.jsx)("span", {
      className: "title"
    }, title), (0,emotion_react_browser_esm.jsx)("canvas", {
      ref: c => {
        this.canvas = c;
      },
      width: width,
      height: height
    }));
  }

}

HorizonRow.propTypes = propTypes;
HorizonRow.defaultProps = defaultProps;
/* harmony default export */ const esm_HorizonRow = (HorizonRow);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonChart.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonChart.js
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

/* eslint-disable react/jsx-sort-default-props, react/sort-prop-types */







const HorizonChart_propTypes = {
  className: (prop_types_default()).string,
  width: (prop_types_default()).number,
  height: (prop_types_default()).number,
  seriesHeight: (prop_types_default()).number,
  data: prop_types_default().arrayOf(prop_types_default().shape({
    key: prop_types_default().arrayOf((prop_types_default()).string),
    values: prop_types_default().arrayOf(prop_types_default().shape({
      y: (prop_types_default()).number
    }))
  })).isRequired,
  // number of bands in each direction (positive / negative)
  bands: (prop_types_default()).number,
  colors: prop_types_default().arrayOf((prop_types_default()).string),
  colorScale: (prop_types_default()).string,
  mode: (prop_types_default()).string,
  offsetX: (prop_types_default()).number
};
const HorizonChart_defaultProps = {
  className: '',
  width: 800,
  height: 600,
  seriesHeight: 20,
  bands: Math.floor(DEFAULT_COLORS.length / 2),
  colors: DEFAULT_COLORS,
  colorScale: 'series',
  mode: 'offset',
  offsetX: 0
};

class HorizonChart extends react.PureComponent {
  render() {
    const {
      className,
      width,
      height,
      data,
      seriesHeight,
      bands,
      colors,
      colorScale,
      mode,
      offsetX
    } = this.props;
    let yDomain;

    if (colorScale === 'overall') {
      const allValues = data.reduce((acc, current) => acc.concat(current.values), []);
      yDomain = extent(allValues, d => d.y);
    }

    return (0,emotion_react_browser_esm.jsx)("div", {
      className: `superset-legacy-chart-horizon ${className}`,
      style: {
        height
      }
    }, data.map(row => (0,emotion_react_browser_esm.jsx)(esm_HorizonRow, {
      key: row.key,
      width: width,
      height: seriesHeight,
      title: (0,ensureIsArray/* default */.Z)(row.key).join(', '),
      data: row.values,
      bands: bands,
      colors: colors,
      colorScale: colorScale,
      mode: mode,
      offsetX: offsetX,
      yDomain: yDomain
    })));
  }

}

HorizonChart.propTypes = HorizonChart_propTypes;
HorizonChart.defaultProps = HorizonChart_defaultProps;
/* harmony default export */ const esm_HorizonChart = (HorizonChart);

/***/ })

}]);