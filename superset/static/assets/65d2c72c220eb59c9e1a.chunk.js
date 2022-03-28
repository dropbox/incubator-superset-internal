(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[3118],{

/***/ 12104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zP": () => (/* binding */ textColor),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports allColors, grayColors, getPaletteForBrightness, colorHues */
// source https://yeun.github.io/open-color/
var allColors={red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e8f7ff","#ccedff","#a3daff","#72c3fc","#4dadf7","#329af0","#228ae6","#1c7cd6","#1b6ec2","#1862ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"]};var grayColors=allColors.gray;var DEFAULT_BRIGHTNESS=6,DEFAULT_BRIGHTNESS_DARK=2;var getPaletteForBrightness=function(a,b){void 0===a&&(a=DEFAULT_BRIGHTNESS),void 0===b&&(b=["cyan","yellow","pink","grape","blue","lime","teal","red","violet","orange","indigo","green"]);// sanity check indices
var c=Math.max(0,Math.min(a,allColors.red.length-1));// filter non-sensical hues
return b.map(function(a){return allColors[a]&&allColors[a][c]}).filter(function(a){return a})};var primaryHue="cyan";var colorHues=Object.keys(allColors).sort();var textColor=grayColors[7];/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({default:allColors[primaryHue][5],dark:allColors[primaryHue][7],light:allColors[primaryHue][3],disabled:textColor,lightDisabled:grayColors[3],text:textColor,black:grayColors[9],darkGray:grayColors[8],lightGray:grayColors[3],grid:grayColors[4],gridDark:grayColors[8],label:textColor,tickLabel:textColor,grays:grayColors,categories:[].concat(getPaletteForBrightness(DEFAULT_BRIGHTNESS),getPaletteForBrightness(DEFAULT_BRIGHTNESS_DARK))});

/***/ }),

/***/ 33118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ esm_Histogram)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/group/dist/vx-group.es.js



var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function Group(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      transform = _ref.transform,
      className = _ref.className,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['top', 'left', 'transform', 'className', 'children']);

  return react.createElement(
    'g',
    _extends({
      className: classnames_default()('vx-group', className),
      transform: transform || 'translate(' + left + ', ' + top + ')'
    }, restProps),
    children
  );
}



// EXTERNAL MODULE: ./node_modules/d3-array/src/index.js + 31 modules
var src = __webpack_require__(4065);
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js
function init_initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function init_initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.interpolator(domain); break;
    default: this.interpolator(interpolator).domain(domain); break;
  }
  return this;
}

// EXTERNAL MODULE: ./node_modules/d3-collection/src/index.js + 3 modules
var d3_collection_src = __webpack_require__(31654);
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/array.js
var array = Array.prototype;

var array_map = array.map;
var array_slice = array.slice;

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/ordinal.js




var implicit = {name: "implicit"};

function ordinal_ordinal() {
  var index = (0,d3_collection_src/* map */.UI)(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = (0,d3_collection_src/* map */.UI)();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = array_slice.call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal_ordinal(domain, range).unknown(unknown);
  };

  init_initRange.apply(scale, arguments);

  return scale;
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/band.js




function band() {
  var scale = ordinal_ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = (0,src.range)(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return init_initRange.apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

// EXTERNAL MODULE: ./node_modules/d3-interpolate/src/value.js
var value = __webpack_require__(81265);
// EXTERNAL MODULE: ./node_modules/d3-interpolate/src/number.js
var src_number = __webpack_require__(73626);
// EXTERNAL MODULE: ./node_modules/d3-interpolate/src/round.js
var round = __webpack_require__(55720);
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/constant.js
/* harmony default export */ function src_constant(x) {
  return function() {
    return x;
  };
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/number.js
/* harmony default export */ function d3_scale_src_number(x) {
  return +x;
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/continuous.js






var unit = [0, 1];

function continuous_identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : src_constant(isNaN(b) ? NaN : 0.5);
}

function clamper(domain) {
  var a = domain[0], b = domain[domain.length - 1], t;
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
    var i = (0,src.bisect)(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function continuous_copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function continuous_transformer() {
  var domain = unit,
      range = unit,
      interpolate = value/* default */.Z,
      transform,
      untransform,
      unknown,
      clamp = continuous_identity,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), src_number/* default */.Z)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = array_map.call(_, d3_scale_src_number), clamp === continuous_identity || (clamp = clamper(domain)), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = array_slice.call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = array_slice.call(_), interpolate = round/* default */.Z, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? clamper(domain) : continuous_identity, scale) : clamp !== continuous_identity;
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

function continuous_continuous(transform, untransform) {
  return continuous_transformer()(transform, untransform);
}

// EXTERNAL MODULE: ./node_modules/d3-format/src/index.js + 15 modules
var d3_format_src = __webpack_require__(16722);
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/tickFormat.js



/* harmony default export */ function src_tickFormat(start, stop, count, specifier) {
  var step = (0,src.tickStep)(start, stop, count),
      precision;
  specifier = (0,d3_format_src/* formatSpecifier */.YQ)(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = (0,d3_format_src/* precisionPrefix */.S5)(step, value))) specifier.precision = precision;
      return (0,d3_format_src/* formatPrefix */.jH)(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = (0,d3_format_src/* precisionRound */.F0)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = (0,d3_format_src/* precisionFixed */.zB)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return (0,d3_format_src/* format */.WU)(specifier);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/linear.js





function linear_linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return (0,src.ticks)(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return src_tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = (0,src.tickIncrement)(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = (0,src.tickIncrement)(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = (0,src.tickIncrement)(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = continuous_continuous(continuous_identity, continuous_identity);

  scale.copy = function() {
    return continuous_copy(scale, linear());
  };

  init_initRange.apply(scale, arguments);

  return linear_linearish(scale);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/identity.js




function identity_identity(domain) {
  var unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = map.call(_, number), scale) : domain.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return identity_identity(domain).unknown(unknown);
  };

  domain = arguments.length ? map.call(domain, number) : [0, 1];

  return linearish(scale);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/log.js






function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log_loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = format(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(nice(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  return scale;
}

function log() {
  var scale = log_loggish(transformer()).domain([1, 10]);

  scale.copy = function() {
    return copy(scale, log()).base(scale.base());
  };

  initRange.apply(scale, arguments);

  return scale;
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/symlog.js




function transformSymlog(c) {
  return function(x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function(x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlog_symlogish(transform) {
  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return linearish(scale);
}

function symlog() {
  var scale = symlog_symlogish(transformer());

  scale.copy = function() {
    return copy(scale, symlog()).constant(scale.constant());
  };

  return initRange.apply(scale, arguments);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/pow.js




function transformPow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function pow_powish(transform) {
  var scale = transform(identity, identity),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(identity, identity)
        : exponent === 0.5 ? transform(transformSqrt, transformSquare)
        : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return linearish(scale);
}

function pow() {
  var scale = pow_powish(transformer());

  scale.copy = function() {
    return copy(scale, pow()).exponent(scale.exponent());
  };

  initRange.apply(scale, arguments);

  return scale;
}

function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/quantile.js




function quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = threshold(domain, i / n);
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : range[bisect(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(scale, arguments);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/quantize.js





function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x <= x ? range[bisect(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = slice.call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function() {
    return domain.slice();
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(linearish(scale), arguments);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/threshold.js




function threshold_threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x <= x ? range[bisect(domain, x, 0, n)] : unknown;
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return threshold_threshold()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(scale, arguments);
}

// EXTERNAL MODULE: ./node_modules/d3-time/src/index.js + 16 modules
var d3_time_src = __webpack_require__(35009);
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/time.js








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function time_number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function time_calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = continuous(identity, identity),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = bisector(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = tickStep(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(tickStep(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(map.call(_, time_number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(nice(d, interval))
        : scale;
  };

  scale.copy = function() {
    return copy(scale, time_calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ function time() {
  return initRange.apply(time_calendar(timeYear, timeMonth, timeWeek, timeDay, timeHour, timeMinute, timeSecond, timeMillisecond, timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/utcTime.js





/* harmony default export */ function utcTime() {
  return initRange.apply(calendar(utcYear, utcMonth, utcWeek, utcDay, utcHour, utcMinute, utcSecond, utcMillisecond, utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/sequential.js







function sequential_transformer() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = identity,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function sequential_copy(source, target) {
  return target
      .domain(source.domain())
      .interpolator(source.interpolator())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function sequential() {
  var scale = linearish(sequential_transformer()(identity));

  scale.copy = function() {
    return sequential_copy(scale, sequential());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequentialLog() {
  var scale = loggish(sequential_transformer()).domain([1, 10]);

  scale.copy = function() {
    return sequential_copy(scale, sequentialLog()).base(scale.base());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequentialSymlog() {
  var scale = symlogish(sequential_transformer());

  scale.copy = function() {
    return sequential_copy(scale, sequentialSymlog()).constant(scale.constant());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequentialPow() {
  var scale = powish(sequential_transformer());

  scale.copy = function() {
    return sequential_copy(scale, sequentialPow()).exponent(scale.exponent());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/sequentialQuantile.js




function sequentialQuantile() {
  var domain = [],
      interpolator = identity;

  function scale(x) {
    if (!isNaN(x = +x)) return interpolator((bisect(domain, x) - 1) / (domain.length - 1));
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return scale;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return initInterpolator.apply(scale, arguments);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/diverging.js








function diverging_transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = identity,
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (x < t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), t2 = transform(x2 = +_[2]), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1);
    return scale;
  };
}

function diverging() {
  var scale = linearish(diverging_transformer()(identity));

  scale.copy = function() {
    return copy(scale, diverging());
  };

  return initInterpolator.apply(scale, arguments);
}

function divergingLog() {
  var scale = loggish(diverging_transformer()).domain([0.1, 1, 10]);

  scale.copy = function() {
    return copy(scale, divergingLog()).base(scale.base());
  };

  return initInterpolator.apply(scale, arguments);
}

function divergingSymlog() {
  var scale = symlogish(diverging_transformer());

  scale.copy = function() {
    return copy(scale, divergingSymlog()).constant(scale.constant());
  };

  return initInterpolator.apply(scale, arguments);
}

function divergingPow() {
  var scale = powish(diverging_transformer());

  scale.copy = function() {
    return copy(scale, divergingPow()).exponent(scale.exponent());
  };

  return initInterpolator.apply(scale, arguments);
}

function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/index.js
































;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/scale/dist/vx-scale.es.js


var vx_scale_es_band = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      padding = _ref.padding,
      paddingInner = _ref.paddingInner,
      paddingOuter = _ref.paddingOuter,
      align = _ref.align,
      tickFormat = _ref.tickFormat;

  var scale = band();
  scale.type = 'band';

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (padding) scale.padding(padding);
  if (paddingInner) scale.paddingInner(paddingInner);
  if (paddingOuter) scale.paddingOuter(paddingOuter);
  if (align) scale.align(align);
  if (tickFormat) scale.tickFormat = tickFormat;

  return scale;
});

var vx_scale_es_point = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      padding = _ref.padding,
      align = _ref.align,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice;

  var scale = scalePoint();
  scale.type = 'point';

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (padding) scale.padding(padding);
  if (align) scale.align(align);

  return scale;
});

var vx_scale_es_linear = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = linear();
  scale.type = 'linear';

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);

  return scale;
});

var vx_scale_es_time = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = scaleTime();
  scale.type = 'time';

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);

  return scale;
});

var utc = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = scaleUtc();
  scale.type = 'utc';

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);

  return scale;
});

var vx_scale_es_log = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      base = _ref.base,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = scaleLog();
  scale.type = 'log';

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);
  if (base) scale.base(base);

  return scale;
});

var power = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      exponent = _ref.exponent,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = scalePow();
  scale.type = 'power';

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);
  if (exponent) scale.exponent(exponent);

  return scale;
});

var vx_scale_es_ordinal = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain,
      unknown = _ref.unknown;

  var scale = scaleOrdinal();
  scale.type = 'ordinal';

  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  if (unknown) scale.unknown(unknown);

  return scale;
});

var vx_scale_es_quantize = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain,
      ticks = _ref.ticks,
      tickFormat = _ref.tickFormat,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice;

  var scale = scaleQuantize();
  scale.type = 'quantize';

  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (ticks) scale.ticks(ticks);
  if (tickFormat) scale.tickFormat(tickFormat);

  return scale;
});

var vx_scale_es_quantile = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain;

  var scale = scaleQuantile();
  scale.type = 'quantile';

  if (range) scale.range(range);
  if (domain) scale.domain(domain);

  return scale;
});

var vx_scale_es_threshold = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain;

  var scale = scaleThreshold();
  scale.type = 'threshold';

  if (range) scale.range(range);
  if (domain) scale.domain(domain);

  return scale;
});

var vx_scale_es_objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var has = Object.prototype.hasOwnProperty;

function updateScale(scale, _ref) {
  var args = vx_scale_es_objectWithoutProperties(_ref, []);

  var nextScale = scale.copy();
  Object.keys(args).forEach(function (key) {
    if (has.call(nextScale, key)) nextScale[key](args[key]);
  });
  return nextScale;
}



// EXTERNAL MODULE: ./node_modules/@data-ui/shared/esm/enhancer/WithTooltip.js
var WithTooltip = __webpack_require__(85195);
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/utils/componentIsX.js
function isAxis(name) {
  return /axis/gi.test(name);
}
function isSeries(name) {
  return /series/gi.test(name);
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/utils/addDensityAndCumulativeValuesToBins.js
/* eslint no-param-reassign: 0 */
// bins should minimally have the shape
// Array<Object{ count: Number }>
function addDensityAndCumulativeValuesToBins(bins) {
  var cumulative = 0;
  bins.forEach(function (bin) {
    cumulative += isNaN(bin.count) ? 0 : bin.count; // eslint-disable-line no-restricted-globals

    bin.cumulative = cumulative;
  });
  var total = cumulative;
  bins.forEach(function (bin) {
    bin.density = bin.count / total;
    bin.cumulativeDensity = bin.cumulative / total;
  });
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/array.js
var array_array = Array.prototype;

var src_array_map = array_array.map;
var src_array_slice = array_array.slice;

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/ordinal.js



var ordinal_implicit = {name: "implicit"};

function src_ordinal_ordinal(range) {
  var index = map(),
      domain = [],
      unknown = ordinal_implicit;

  range = range == null ? [] : slice.call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== ordinal_implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = map();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice.call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return src_ordinal_ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/band.js



function band_band() {
  var scale = ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = sequence(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band_band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function band_pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return band_pointish(copy());
  };

  return scale;
}

function band_point() {
  return band_pointish(band_band().paddingInner(1));
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/constant.js
/* harmony default export */ function d3_scale_src_constant(x) {
  return function() {
    return x;
  };
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/number.js
/* harmony default export */ function node_modules_d3_scale_src_number(x) {
  return +x;
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/continuous.js






var continuous_unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : d3_scale_src_constant(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function continuous_bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function continuous_polymap(domain, range, deinterpolate, reinterpolate) {
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
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = (0,src.bisect)(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function src_continuous_copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function src_continuous_continuous(deinterpolate, reinterpolate) {
  var domain = continuous_unit,
      range = continuous_unit,
      interpolate = value/* default */.Z,
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? continuous_polymap : continuous_bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = src_array_map.call(_, node_modules_d3_scale_src_number), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = src_array_slice.call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = src_array_slice.call(_), interpolate = round/* default */.Z, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/tickFormat.js



/* harmony default export */ function d3_scale_src_tickFormat(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = (0,src.tickStep)(start, stop, count == null ? 10 : count),
      precision;
  specifier = (0,d3_format_src/* formatSpecifier */.YQ)(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = (0,d3_format_src/* precisionPrefix */.S5)(step, value))) specifier.precision = precision;
      return (0,d3_format_src/* formatPrefix */.jH)(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = (0,d3_format_src/* precisionRound */.F0)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = (0,d3_format_src/* precisionFixed */.zB)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return (0,d3_format_src/* format */.WU)(specifier);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/linear.js





function src_linear_linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return (0,src.ticks)(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return d3_scale_src_tickFormat(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = (0,src.tickIncrement)(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = (0,src.tickIncrement)(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = (0,src.tickIncrement)(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear_linear() {
  var scale = src_continuous_continuous(deinterpolateLinear, src_number/* default */.Z);

  scale.copy = function() {
    return src_continuous_copy(scale, linear_linear());
  };

  return src_linear_linearish(scale);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/identity.js




function src_identity_identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = map.call(_, number), scale) : domain.slice();
  };

  scale.copy = function() {
    return src_identity_identity().domain(domain);
  };

  return linearish(scale);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/log.js






function log_deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : constant(b);
}

function log_reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function log_pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function log_powp(base) {
  return base === 10 ? log_pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function log_logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function log_reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log_log() {
  var scale = continuous(log_deinterpolate, log_reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = log_logp(10),
      pows = log_powp(10);

  function rescale() {
    logs = log_logp(base), pows = log_powp(base);
    if (domain()[0] < 0) logs = log_reflect(logs), pows = log_reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = format(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(nice(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return copy(scale, log_log().base(base));
  };

  return scale;
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/pow.js




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow_pow() {
  var exponent = 1,
      scale = continuous(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : constant(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return copy(scale, pow_pow().exponent(exponent));
  };

  return linearish(scale);
}

function pow_sqrt() {
  return pow_pow().exponent(0.5);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/quantile.js



function quantile_quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = threshold(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[bisect(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile_quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/quantize.js




function quantize_quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[bisect(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = slice.call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize_quantize()
        .domain([x0, x1])
        .range(range);
  };

  return linearish(scale);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/threshold.js



function src_threshold_threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[bisect(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return src_threshold_threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/time.js








var time_durationSecond = 1000,
    time_durationMinute = time_durationSecond * 60,
    time_durationHour = time_durationMinute * 60,
    time_durationDay = time_durationHour * 24,
    time_durationWeek = time_durationDay * 7,
    time_durationMonth = time_durationDay * 30,
    time_durationYear = time_durationDay * 365;

function time_date(t) {
  return new Date(t);
}

function src_time_number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function src_time_calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = continuous(deinterpolate, reinterpolate),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      time_durationSecond],
    [second,  5,  5 * time_durationSecond],
    [second, 15, 15 * time_durationSecond],
    [second, 30, 30 * time_durationSecond],
    [minute,  1,      time_durationMinute],
    [minute,  5,  5 * time_durationMinute],
    [minute, 15, 15 * time_durationMinute],
    [minute, 30, 30 * time_durationMinute],
    [  hour,  1,      time_durationHour  ],
    [  hour,  3,  3 * time_durationHour  ],
    [  hour,  6,  6 * time_durationHour  ],
    [  hour, 12, 12 * time_durationHour  ],
    [   day,  1,      time_durationDay   ],
    [   day,  2,  2 * time_durationDay   ],
    [  week,  1,      time_durationWeek  ],
    [ month,  1,      time_durationMonth ],
    [ month,  3,  3 * time_durationMonth ],
    [  year,  1,      time_durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = bisector(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = tickStep(start / time_durationYear, stop / time_durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(tickStep(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(map.call(_, src_time_number)) : domain().map(time_date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(nice(d, interval))
        : scale;
  };

  scale.copy = function() {
    return copy(scale, src_time_calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ function src_time() {
  return src_time_calendar(timeYear, timeMonth, timeWeek, timeDay, timeHour, timeMinute, timeSecond, timeMillisecond, timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/utcTime.js




/* harmony default export */ function src_utcTime() {
  return calendar(utcYear, utcMonth, utcWeek, utcDay, utcHour, utcMinute, utcSecond, utcMillisecond, utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/colors.js
/* harmony default export */ function colors(s) {
  return s.match(/.{6}/g).map(function(x) {
    return "#" + x;
  });
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category10.js


/* harmony default export */ const category10 = (colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category20b.js


/* harmony default export */ const category20b = (colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"));

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category20c.js


/* harmony default export */ const category20c = (colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"));

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category20.js


/* harmony default export */ const category20 = (colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"));

// EXTERNAL MODULE: ./node_modules/d3-color/src/cubehelix.js
var cubehelix = __webpack_require__(18218);
// EXTERNAL MODULE: ./node_modules/d3-interpolate/src/cubehelix.js
var src_cubehelix = __webpack_require__(68499);
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/cubehelix.js



/* harmony default export */ const d3_scale_src_cubehelix = ((0,src_cubehelix/* cubehelixLong */.B)((0,cubehelix/* default */.Z)(300, 0.5, 0.0), (0,cubehelix/* default */.Z)(-240, 0.5, 1.0)));

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/rainbow.js



var warm = (0,src_cubehelix/* cubehelixLong */.B)((0,cubehelix/* default */.Z)(-100, 0.75, 0.35), (0,cubehelix/* default */.Z)(80, 1.50, 0.8));

var cool = (0,src_cubehelix/* cubehelixLong */.B)((0,cubehelix/* default */.Z)(260, 0.75, 0.35), (0,cubehelix/* default */.Z)(80, 1.50, 0.8));

var rainbow = (0,cubehelix/* default */.Z)();

/* harmony default export */ function src_rainbow(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  rainbow.h = 360 * t - 100;
  rainbow.s = 1.5 - 1.5 * ts;
  rainbow.l = 0.8 - 0.9 * ts;
  return rainbow + "";
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/viridis.js


function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

/* harmony default export */ const viridis = (ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")));

var magma = ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/sequential.js


function sequential_sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential_sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return linearish(scale);
}

;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/d3-scale/index.js






































;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/utils/binNumericData.js


var DEFAULT_BIN_COUNT = 10;
/*
 * handles binning of numeric data by series index
 * if binValues are passed, ignores other bin values that are encountered
 *
 * returns an object of bins keyed on series index with the following shape
 * {
 *   [seriesIdx]: Array<Object{
 *      bin0: String,
 *      bin1: String,
 *      data: Array<datum>,
 *      count: Number,
 *      id: String,
 *    }>,
 * }
 */

function binNumericData(_ref) {
  var allData = _ref.allData,
      _ref$binCount = _ref.binCount,
      userBinCount = _ref$binCount === void 0 ? DEFAULT_BIN_COUNT : _ref$binCount,
      binValues = _ref.binValues,
      limits = _ref.limits,
      rawDataByIndex = _ref.rawDataByIndex,
      valueAccessor = _ref.valueAccessor;
  var binCount = Array.isArray(binValues) ? binValues.length : userBinCount;
  var binsByIndex = {};
  var histogram = (0,src.histogram)();
  var extent = (0,src.extent)(allData, valueAccessor);

  if (binValues) {
    // account for extent of binValues if passed
    var binExtent = (0,src.extent)(binValues);
    extent = [Math.min(binExtent[0], extent[0]), Math.max(binExtent[1], extent[1])];
  }

  var scale = linear_linear().domain(extent).nice(binCount);
  histogram.domain(limits || scale.domain()).thresholds(binValues || scale.ticks(binCount));
  Object.keys(rawDataByIndex).forEach(function (index) {
    var data = rawDataByIndex[index];
    var seriesBins = histogram.value(valueAccessor)(data); // if the last bin equals the upper bound of the second to last bin, combine them
    // see https://github.com/d3/d3-array/issues/46#issuecomment-269873644

    var lastBinIndex = seriesBins.length - 1;
    var lastBin = seriesBins[lastBinIndex];
    var nextToLastBin = seriesBins[lastBinIndex - 1];
    var shouldCombineEndBins = nextToLastBin && nextToLastBin.x1 === lastBin.x0 && lastBin.x1 === lastBin.x0;
    var filteredBins = shouldCombineEndBins ? seriesBins.slice(0, -1) : seriesBins;
    binsByIndex[index] = filteredBins.map(function (bin, i) {
      return {
        bin0: bin.x0,
        // if the upper limit equals the lower one, use the delta between this bin and the last
        bin1: bin.x0 === bin.x1 ? i > 0 && bin.x0 + bin.x0 - seriesBins[i - 1].x0 || bin.x1 + 1 : bin.x1,
        data: [].concat(bin).concat(shouldCombineEndBins && (shouldCombineEndBins && i === lastBinIndex - 1 ? lastBin : [])),
        // if the last bin was inclusive / omitted, add its count to the last bin
        count: bin.length + (shouldCombineEndBins && i === lastBinIndex - 1 ? lastBin.length || 0 : 0),
        id: i.toString()
      };
    });
  });
  return binsByIndex;
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/utils/caseInsensitiveSort.js
function caseInsensitiveSort(a, b) {
  if (!a.toLowerCase || !b.toLowerCase) return a - b;
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  return 0;
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/utils/binCategoricalData.js


var sortBins = function sortBins(a, b) {
  return caseInsensitiveSort(a.bin, b.bin);
};
/*
 * handles binning of categorical data by series index
 * if binValues are passed, ignores other bin values that are encountered
 *
 * returns an object of bins keyed on series index with the following shape
 *  {
 *    [seriesIdx]: Array<Object{ bin: String, data: Array<datum>, count: Number }>,
 *  }
 */


function binCategoricalData(_ref) {
  var rawDataByIndex = _ref.rawDataByIndex,
      valueAccessor = _ref.valueAccessor,
      _ref$binValues = _ref.binValues,
      binValues = _ref$binValues === void 0 ? null : _ref$binValues;
  var binsByIndex = {};
  Object.keys(rawDataByIndex).forEach(function (index) {
    var data = rawDataByIndex[index];
    var bins = {};
    data.forEach(function (datum) {
      var bin = valueAccessor(datum);
      bins[bin] = bins[bin] || {
        bin: bin,
        data: [],
        count: 0,
        id: bin
      };
      bins[bin].data.push(datum);
      bins[bin].count += 1;
    }); // convert to an array of bins

    if (binValues) {
      binsByIndex[index] = binValues.map(function (bin) {
        return bins[bin] || {
          bin: bin,
          count: 0,
          data: []
        };
      });
    } else {
      binsByIndex[index] = Object.values(bins).sort(sortBins);
    }
  });
  return binsByIndex;
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/utils/componentName.js
function componentName(component) {
  if (component && component.type) {
    return component.type.displayName || component.type.name || 'Component';
  }

  return 'Component';
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/utils/collectDataFromChildSeries.js



function collectDataFromChildSeries(children) {
  var allRawData = [];
  var allBinnedData = [];
  var rawDataByIndex = {};
  var binnedDataByIndex = {};
  react.Children.forEach(children, function (Child, i) {
    var name = componentName(Child);

    if (isSeries(name)) {
      var rawData = Child.props.rawData;
      var binnedData = Child.props.binnedData;

      if (rawData && rawData.length > 0) {
        rawDataByIndex[i] = rawData;
        allRawData = allRawData.concat(rawData);
      }

      if (binnedData && binnedData.length > 0) {
        binnedDataByIndex[i] = binnedData;
        allBinnedData = allBinnedData.concat(binnedData);
      }
    }
  });
  return {
    allBinnedData: allBinnedData,
    allRawData: allRawData,
    binnedDataByIndex: binnedDataByIndex,
    rawDataByIndex: rawDataByIndex
  };
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/utils/collectBinnedDataFromChildSeries.js




function collectBinnedDataFromChildSeries(_ref) {
  var children = _ref.children,
      binCount = _ref.binCount,
      binType = _ref.binType,
      binValues = _ref.binValues,
      limits = _ref.limits,
      valueAccessor = _ref.valueAccessor;

  var _collectDataFromChild = collectDataFromChildSeries(children),
      allRawData = _collectDataFromChild.allRawData,
      rawDataByIndex = _collectDataFromChild.rawDataByIndex,
      binnedDataByIndex = _collectDataFromChild.binnedDataByIndex;

  var result = binnedDataByIndex;

  if (Object.keys(binnedDataByIndex).length === 0) {
    var binningFunc = binType === 'numeric' ? binNumericData : binCategoricalData;
    result = binningFunc({
      allData: allRawData,
      rawDataByIndex: rawDataByIndex,
      valueAccessor: valueAccessor,
      limits: limits,
      binCount: binCount,
      binValues: binValues
    });
  }

  Object.values(result).forEach(function (bins) {
    addDensityAndCumulativeValuesToBins(bins);
  });
  return result;
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/utils/computeDomainsFromBins.js


/*
 * Computes the bin and value domains from numeric or categorical bins
 */

function computeDomainsFromBins(_ref) {
  var binsByIndex = _ref.binsByIndex,
      binType = _ref.binType,
      valueKey = _ref.valueKey,
      binValues = _ref.binValues;
  var binDomain;
  var valueDomain;
  Object.values(binsByIndex).forEach(function (bins) {
    var currValueMax = (0,src.max)(bins, function (d) {
      return d[valueKey];
    });

    if (valueDomain) {
      valueDomain[1] = Math.max(currValueMax, valueDomain[1]);
    } else {
      valueDomain = [0, currValueMax];
    }

    if (binType === 'numeric') {
      if (binDomain) {
        binDomain[0] = Math.min(bins[0].bin0, binDomain[0]);
        binDomain[1] = Math.max(bins[bins.length - 1].bin1, binDomain[1]);
      } else {
        binDomain = [bins[0].bin0, bins[bins.length - 1].bin1];
      }
    } else {
      if (!binDomain) binDomain = {}; // use lookup to avoid lots of Array scans

      bins.forEach(function (bin) {
        binDomain[bin.bin] = true;
      });
    }
  });

  if (Array.isArray(binValues)) {
    var providedBinsCoverDomain = true;
    binValues.forEach(function (binValue) {
      if (!(binValue in binDomain)) {
        providedBinsCoverDomain = false;
      }
    });

    if (providedBinsCoverDomain) {
      binDomain = binValues;
    }
  }

  if (!Array.isArray(binDomain)) {
    binDomain = Object.keys(binDomain).sort(caseInsensitiveSort);
  }

  return {
    binDomain: binDomain,
    valueDomain: valueDomain
  };
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/utils/getValueKey.js
function getValueKey(_ref) {
  var normalized = _ref.normalized,
      cumulative = _ref.cumulative;
  if (normalized && cumulative) return 'cumulativeDensity';
  if (cumulative) return 'cumulative';
  if (normalized) return 'density';
  return 'count';
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/utils/shallowCompareObjectEntries.js
function shallowCompareObjectEntries(a, b) {
  var keysA = Object.keys(a);
  var keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(function (k) {
    return a[k] === b[k];
  });
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/utils/propShapes.js

var numericBinnedDatumShape = prop_types_default().shape({
  id: (prop_types_default()).string.isRequired,
  bin0: (prop_types_default()).number.isRequired,
  bin1: (prop_types_default()).number.isRequired,
  count: (prop_types_default()).number.isRequired,
  cumulative: (prop_types_default()).number,
  density: (prop_types_default()).number,
  cumulativeDensity: (prop_types_default()).number
});
var categoricalBinnedDatumShape = prop_types_default().shape({
  id: (prop_types_default()).string.isRequired,
  bin: (prop_types_default()).string.isRequired,
  count: (prop_types_default()).number.isRequired,
  cumulative: (prop_types_default()).number,
  density: (prop_types_default()).number,
  cumulativeDensity: (prop_types_default()).number
});
var binnedDataShape = prop_types_default().arrayOf(prop_types_default().oneOfType([numericBinnedDatumShape, categoricalBinnedDatumShape])); // styles ---------------------------------------------------------------------

var axisStylesShape = prop_types_default().shape({
  stroke: (prop_types_default()).string,
  strokeWidth: (prop_types_default()).number,
  label: prop_types_default().shape({
    left: (prop_types_default()).object,
    right: (prop_types_default()).object,
    bottom: (prop_types_default()).object,
    top: (prop_types_default()).object
  })
});
var tickStylesShape = prop_types_default().shape({
  stroke: (prop_types_default()).string,
  tickLength: (prop_types_default()).number,
  label: prop_types_default().shape({
    left: (prop_types_default()).object,
    right: (prop_types_default()).object,
    bottom: (prop_types_default()).object,
    top: (prop_types_default()).object
  })
});
var gridStylesShape = prop_types_default().shape({
  stroke: (prop_types_default()).string,
  strokeWidth: (prop_types_default()).number
});
var themeShape = prop_types_default().shape({
  gridStyles: gridStylesShape,
  xAxisStyles: axisStylesShape,
  xTickStyles: tickStylesShape,
  yAxisStyles: axisStylesShape,
  yTickStyles: tickStylesShape
});
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/chart/Histogram.js
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function Histogram_extends() { Histogram_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Histogram_extends.apply(this, arguments); }

/* eslint complexity: ['error', 17] */












var propTypes = Histogram_extends({}, WithTooltip/* withTooltipPropTypes */.W2, {
  ariaLabel: (prop_types_default()).string.isRequired,
  binValues: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string])),
  binCount: (prop_types_default()).number,
  binType: prop_types_default().oneOf(['numeric', 'categorical']),
  children: (prop_types_default()).node.isRequired,
  cumulative: (prop_types_default()).bool,
  height: (prop_types_default()).number.isRequired,
  horizontal: (prop_types_default()).bool,
  limits: prop_types_default().arrayOf((prop_types_default()).number),
  // values outside the limits are ignored
  margin: prop_types_default().shape({
    top: (prop_types_default()).number,
    right: (prop_types_default()).number,
    bottom: (prop_types_default()).number,
    left: (prop_types_default()).number
  }),
  normalized: (prop_types_default()).bool,
  renderTooltip: (prop_types_default()).func,
  theme: themeShape,
  width: (prop_types_default()).number.isRequired,
  valueAccessor: (prop_types_default()).func
});
var defaultProps = {
  binCount: 10,
  binType: 'numeric',
  binValues: null,
  cumulative: false,
  horizontal: false,
  limits: null,
  margin: {
    top: 32,
    right: 32,
    bottom: 64,
    left: 64
  },
  normalized: false,
  renderTooltip: null,
  theme: {},
  valueAccessor: function valueAccessor(d) {
    return d;
  }
};

var Histogram =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Histogram, _React$PureComponent);

  function Histogram(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.state = _this.getStateFromProps(props);
    return _this;
  }

  var _proto = Histogram.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var shouldComputeBinsAndScales = false; // eslint-disable-next-line react/destructuring-assignment

    if (['width', 'height', 'children'].some(function (prop) {
      return _this2.props[prop] !== nextProps[prop];
    })) {
      shouldComputeBinsAndScales = true;
    }

    if (['margin'].some( // eslint-disable-next-line react/destructuring-assignment
    function (prop) {
      return !shallowCompareObjectEntries(_this2.props[prop], nextProps[prop]);
    })) {
      shouldComputeBinsAndScales = true;
    }

    if (shouldComputeBinsAndScales) this.setState(this.getStateFromProps(nextProps));
  };

  _proto.getStateFromProps = function getStateFromProps(props) {
    var dimensions = this.getDimmensions(props);
    var binsByIndex = this.getBinnedData(props);
    var scales = this.getScales(props, binsByIndex, dimensions);
    return Histogram_extends({
      binsByIndex: binsByIndex
    }, dimensions, scales);
  };

  _proto.getDimmensions = function getDimmensions(props) {
    var _ref = props || this.props,
        margin = _ref.margin,
        width = _ref.width,
        height = _ref.height;

    var completeMargin = Histogram_extends({}, defaultProps.margin, margin);

    return {
      margin: completeMargin,
      innerHeight: height - completeMargin.top - completeMargin.bottom,
      innerWidth: width - completeMargin.left - completeMargin.right
    };
  };

  _proto.getBinnedData = function getBinnedData(props) {
    var _ref2 = props || this.props,
        children = _ref2.children,
        binCount = _ref2.binCount,
        binType = _ref2.binType,
        binValues = _ref2.binValues,
        limits = _ref2.limits,
        valueAccessor = _ref2.valueAccessor;

    return collectBinnedDataFromChildSeries({
      children: children,
      binCount: binCount,
      binType: binType,
      binValues: binValues,
      limits: limits,
      valueAccessor: valueAccessor
    });
  };

  _proto.getScales = function getScales(props, binsByIndex, _ref3) {
    var innerHeight = _ref3.innerHeight,
        innerWidth = _ref3.innerWidth;

    var _ref4 = props || this.props,
        binType = _ref4.binType,
        binValues = _ref4.binValues,
        cumulative = _ref4.cumulative,
        horizontal = _ref4.horizontal,
        normalized = _ref4.normalized;

    var binScaleFunc = binType === 'numeric' ? vx_scale_es_linear : vx_scale_es_band;
    var valueKey = getValueKey({
      normalized: normalized,
      cumulative: cumulative
    });

    var _computeDomainsFromBi = computeDomainsFromBins({
      binsByIndex: binsByIndex,
      binType: binType,
      binValues: binValues,
      valueKey: valueKey
    }),
        binDomain = _computeDomainsFromBi.binDomain,
        valueDomain = _computeDomainsFromBi.valueDomain;

    var binRange = horizontal ? [innerHeight, 0] : [0, innerWidth];
    var valueRange = horizontal ? [0, innerWidth] : [innerHeight, 0]; // when viewing categorical data horizontally it is more natural to
    // read alphabetical from top down

    if (horizontal && binType === 'categorical') binRange.reverse();
    return {
      binScale: binScaleFunc({
        range: binRange,
        domain: binDomain
      }),
      valueScale: vx_scale_es_linear({
        range: valueRange,
        domain: valueDomain
      }),
      valueKey: valueKey
    };
  };

  _proto.render = function render() {
    var renderTooltip = this.props.renderTooltip;

    if (renderTooltip) {
      return react.createElement(WithTooltip/* default */.ZP, {
        renderTooltip: renderTooltip
      }, react.createElement(Histogram, Histogram_extends({}, this.props, {
        renderTooltip: null
      })));
    }

    var _this$props = this.props,
        ariaLabel = _this$props.ariaLabel,
        binType = _this$props.binType,
        binValues = _this$props.binValues,
        children = _this$props.children,
        height = _this$props.height,
        horizontal = _this$props.horizontal,
        onMouseLeave = _this$props.onMouseLeave,
        onMouseMove = _this$props.onMouseMove,
        theme = _this$props.theme,
        valueAccessor = _this$props.valueAccessor,
        width = _this$props.width;
    var _this$state = this.state,
        binsByIndex = _this$state.binsByIndex,
        binScale = _this$state.binScale,
        innerHeight = _this$state.innerHeight,
        innerWidth = _this$state.innerWidth,
        margin = _this$state.margin,
        valueKey = _this$state.valueKey,
        valueScale = _this$state.valueScale;
    return react.createElement("svg", {
      "aria-label": ariaLabel,
      role: "img",
      width: width,
      height: height
    }, react.createElement(Group, {
      left: margin.left,
      top: margin.top
    }, react.Children.map(children, function (Child, index) {
      var name = componentName(Child);

      if (isSeries(name)) {
        var binnedData = binsByIndex[index];
        return react.cloneElement(Child, {
          binScale: binScale,
          binType: binType,
          binnedData: binnedData,
          horizontal: horizontal,
          valueAccessor: valueAccessor,
          valueKey: valueKey,
          valueScale: valueScale,
          onMouseLeave: onMouseLeave,
          onMouseMove: onMouseMove
        });
      } else if (isAxis(name)) {
        var styleKey = name[0].toLowerCase();
        var binOrValue = name === 'XAxis' && !horizontal || name === 'YAxis' && horizontal ? 'bin' : 'value';
        var tickValues = Child.props.tickValues || (binOrValue === 'bin' && binValues ? binValues : null);
        return react.cloneElement(Child, {
          top: name === 'YAxis' || Child.props.orientation === 'top' ? 0 : innerHeight,
          left: name === 'XAxis' || Child.props.orientation === 'left' ? 0 : innerWidth,
          label: Child.props.label || (binOrValue === 'value' ? valueKey : null),
          scale: binOrValue === 'value' ? valueScale : binScale,
          axisStyles: Histogram_extends({}, theme[styleKey + "AxisStyles"], Child.props.axisStyles),
          tickStyles: Histogram_extends({}, theme[styleKey + "TickStyles"], Child.props.tickStyles),
          tickValues: tickValues
        });
      }

      return Child;
    })));
  };

  return Histogram;
}(react.PureComponent);

Histogram.propTypes = propTypes;
Histogram.defaultProps = defaultProps;
Histogram.displayName = 'Histogram';
/* harmony default export */ const chart_Histogram = (Histogram);
// EXTERNAL MODULE: ./node_modules/@data-ui/theme/esm/color.js
var color = __webpack_require__(12104);
;// CONCATENATED MODULE: ./node_modules/@data-ui/theme/esm/font.js
function font_extends(){return font_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},font_extends.apply(this,arguments)}var getFont=function(a){var b=a.fontFamily,c=a.fontSize,d=a.letterSpacing,e=void 0===d?0:d,f=a.lineHeight,g=a.padding;return{color:color/* textColor */.zP,fontFamily:b,fontSize:c,letterSpacing:e,lineHeight:f+"px",paddingBottom:g,paddingTop:g}},fontFamily="BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif";/* harmony default export */ const font = ({fontFamily:fontFamily,// weights
light:{fontWeight:200},bold:{fontWeight:700},// size
tiny:font_extends({},getFont({fontFamily:fontFamily,fontSize:10,lineHeight:12,letterSpacing:.4})),small:font_extends({},getFont({fontFamily:fontFamily,fontSize:12,lineHeight:16,letterSpacing:.4})),regular:font_extends({},getFont({fontFamily:fontFamily,fontSize:14,lineHeight:18,letterSpacing:.2})),large:font_extends({},getFont({fontFamily:fontFamily,fontSize:18,lineHeight:24,spacing:0}))});
;// CONCATENATED MODULE: ./node_modules/@data-ui/theme/esm/svgFont.js
function svgFont_extends(){return svgFont_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},svgFont_extends.apply(this,arguments)}var getSvgFont=function(a){var b=a.fontFamily,c=a.fontSize,d=a.letterSpacing;return{fill:color/* textColor */.zP,stroke:"none",fontFamily:b,fontSize:c,letterSpacing:d}},svgFont_fontFamily="BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif";/* harmony default export */ const svgFont = ({fontFamily:svgFont_fontFamily,// weights
light:{fontWeight:200},bold:{fontWeight:700},// alignment
start:{textAnchor:"start"},middle:{textAnchor:"middle"},end:{textAnchor:"end"},// size
tiny:svgFont_extends({},getSvgFont({fontFamily:svgFont_fontFamily,fontSize:10,letterSpacing:.4})),small:svgFont_extends({},getSvgFont({fontFamily:svgFont_fontFamily,fontSize:12,letterSpacing:.4})),regular:svgFont_extends({},getSvgFont({fontFamily:svgFont_fontFamily,fontSize:14,letterSpacing:.2})),large:svgFont_extends({},getSvgFont({fontFamily:svgFont_fontFamily,fontSize:18,spacing:0}))});
;// CONCATENATED MODULE: ./node_modules/@data-ui/theme/esm/svgLabel.js
function svgLabel_extends(){return svgLabel_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},svgLabel_extends.apply(this,arguments)}var baseLabel=svgLabel_extends({},svgFont.small,svgFont.bold,svgFont.middle,{pointerEvents:"none"});var labelTiny=svgLabel_extends({},svgFont.tiny,svgFont.bold,svgFont.middle,{pointerEvents:"none"});var baseTickLabel=svgLabel_extends({},svgFont.small,svgFont.light,svgFont.middle,{pointerEvents:"none"});var tickLabels={top:svgLabel_extends({},baseTickLabel,{dy:"-0.25em"}),right:svgLabel_extends({},baseTickLabel,svgFont.start,{dx:"0.25em",dy:"0.25em"}),bottom:svgLabel_extends({},baseTickLabel,{dy:"0.25em"}),left:svgLabel_extends({},baseTickLabel,svgFont.end,{dx:"-0.25em",dy:"0.25em"})};/* harmony default export */ const svgLabel = ({baseLabel:baseLabel,baseTickLabel:baseTickLabel,tickLabels:tickLabels});
;// CONCATENATED MODULE: ./node_modules/@data-ui/theme/esm/size.js
var size_unit=8;// eslint-disable-line import/prefer-default-export
;// CONCATENATED MODULE: ./node_modules/@data-ui/theme/esm/chartTheme.js
function chartTheme_extends(){return chartTheme_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},chartTheme_extends.apply(this,arguments)}var chartTheme_colors=color/* default */.ZP;var labelStyles=chartTheme_extends({},baseLabel,font.light);var gridStyles={stroke:chartTheme_colors.grid,strokeWidth:1};var xAxisStyles={stroke:chartTheme_colors.gridDark,strokeWidth:2,label:{bottom:chartTheme_extends({},baseLabel),top:chartTheme_extends({},baseLabel)}};var yAxisStyles={stroke:chartTheme_colors.grid,strokeWidth:1,label:{left:chartTheme_extends({},baseLabel),right:chartTheme_extends({},baseLabel)}};var xTickStyles={stroke:chartTheme_colors.grid,length:+size_unit,label:{bottom:chartTheme_extends({},tickLabels.bottom),top:chartTheme_extends({},tickLabels.top)}};var yTickStyles={stroke:chartTheme_colors.grid,length:+size_unit,label:{left:chartTheme_extends({},tickLabels.left),right:chartTheme_extends({},tickLabels.right)}};/* harmony default export */ const chartTheme = ({colors:chartTheme_colors,labelStyles:labelStyles,gridStyles:gridStyles,xAxisStyles:xAxisStyles,xTickStyles:xTickStyles,yAxisStyles:yAxisStyles,yTickStyles:yTickStyles});
// EXTERNAL MODULE: ./node_modules/d3-shape/src/index.js + 50 modules
var d3_shape_src = __webpack_require__(86005);
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/point/dist/vx-point.es.js
var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Point = function () {
  function Point(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y;
    classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  createClass(Point, [{
    key: "value",
    value: function value() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "toArray",
    value: function toArray$$1() {
      return [this.x, this.y];
    }
  }]);
  return Point;
}();



// EXTERNAL MODULE: ./node_modules/d3-path/src/index.js + 1 modules
var d3_path_src = __webpack_require__(50777);
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/shape/dist/vx-shape.es.js









function callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}

function additionalProps(restProps, data) {
  return Object.keys(restProps).reduce(function (ret, cur) {
    ret[cur] = callOrValue(restProps[cur], data);
    return ret;
  }, {});
}

var vx_shape_es_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var vx_shape_es_objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

Arc.propTypes = {
  className: (prop_types_default()).string,
  data: (prop_types_default()).any,
  centroid: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  innerRadius: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  outerRadius: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  cornerRadius: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  startAngle: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  endAngle: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  padAngle: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  padRadius: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number])
};

function Arc(_ref) {
  var className = _ref.className,
      data = _ref.data,
      centroid = _ref.centroid,
      innerRadius = _ref.innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['className', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius']);

  var arc$$1 = (0,d3_shape_src.arc)();
  if (centroid) arc$$1.centroid(centroid);
  if (innerRadius) arc$$1.innerRadius(innerRadius);
  if (outerRadius) arc$$1.outerRadius(outerRadius);
  if (cornerRadius) arc$$1.cornerRadius(cornerRadius);
  if (startAngle) arc$$1.startAngle(startAngle);
  if (endAngle) arc$$1.endAngle(endAngle);
  if (padAngle) arc$$1.padAngle(padAngle);
  if (padRadius) arc$$1.padRadius(padRadius);
  return react.createElement('path', vx_shape_es_extends({ className: classnames_default()('vx-arc', className), d: arc$$1(data) }, additionalProps(restProps, data)));
}

Pie.propTypes = {
  className: (prop_types_default()).string,
  top: (prop_types_default()).number,
  left: (prop_types_default()).number,
  data: (prop_types_default()).array,
  centroid: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  innerRadius: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  outerRadius: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  cornerRadius: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  startAngle: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  endAngle: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  padAngle: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  padRadius: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  pieSort: (prop_types_default()).func,
  pieSortValues: (prop_types_default()).func,
  pieValue: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  children: (prop_types_default()).func
};

function Pie(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      data = _ref.data,
      centroid = _ref.centroid,
      _ref$innerRadius = _ref.innerRadius,
      innerRadius = _ref$innerRadius === undefined ? 0 : _ref$innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      _ref$startAngle = _ref.startAngle,
      startAngle = _ref$startAngle === undefined ? 0 : _ref$startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      pieSort = _ref.pieSort,
      pieSortValues = _ref.pieSortValues,
      pieValue = _ref.pieValue,
      children = _ref.children,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['className', 'top', 'left', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius', 'pieSort', 'pieSortValues', 'pieValue', 'children']);

  var path$$1 = (0,d3_shape_src.arc)();
  path$$1.innerRadius(innerRadius);
  if (outerRadius) path$$1.outerRadius(outerRadius);
  if (cornerRadius) path$$1.cornerRadius(cornerRadius);
  if (padRadius) path$$1.padRadius(padRadius);
  var pie$$1 = (0,d3_shape_src.pie)();
  if (pieSort !== undefined) pie$$1.sort(pieSort);
  if (pieSortValues !== undefined) pie$$1.sortValues(pieSortValues);
  if (pieValue) pie$$1.value(pieValue);
  if (padAngle != null) pie$$1.padAngle(padAngle);
  if (startAngle != null) pie$$1.startAngle(startAngle);
  if (endAngle != null) pie$$1.endAngle(endAngle);
  var arcs = pie$$1(data);
  var renderFunctionArg = {
    arcs: arcs,
    generatePathProps: function generatePathProps(arc$$1, index) {
      return vx_shape_es_extends({
        className: classnames_default()('vx-pie-arc', className),
        d: path$$1(arc$$1)
      }, additionalProps(restProps, vx_shape_es_extends({}, arc$$1, {
        index: index,
        centroid: centroid ? path$$1.centroid(arc$$1) : undefined
      })));
    },
    generateCentroid: function generateCentroid(arc$$1) {
      return centroid && centroid(path$$1.centroid(arc$$1), arc$$1);
    }
  };
  return react.createElement(
    Group,
    { className: 'vx-pie-arcs-group', top: top, left: left },
    children ? children(renderFunctionArg) : arcs.map(function (arc$$1, i) {
      var pathProps = renderFunctionArg.generatePathProps(arc$$1, i);
      return react.createElement(
        'g',
        { key: 'pie-arc-' + i },
        react.createElement('path', pathProps),
        renderFunctionArg.generateCentroid(arc$$1)
      );
    })
  );
}

Line.propTypes = {
  innerRef: (prop_types_default()).func
};

function Line(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === undefined ? new Point({ x: 0, y: 0 }) : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === undefined ? new Point({ x: 1, y: 1 }) : _ref$to,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      _ref$strokeDasharray = _ref.strokeDasharray,
      strokeDasharray = _ref$strokeDasharray === undefined ? '' : _ref$strokeDasharray,
      _ref$transform = _ref.transform,
      transform = _ref$transform === undefined ? '' : _ref$transform,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      data = _ref.data,
      innerRef = _ref.innerRef,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['from', 'to', 'stroke', 'strokeWidth', 'strokeDasharray', 'transform', 'className', 'data', 'innerRef']);

  return react.createElement('line', vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-line', className),
    x1: from.x,
    y1: from.y,
    x2: to.x,
    y2: to.y,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    transform: transform
  }, additionalProps(restProps, data)));
}

LinePath.propTypes = {
  innerRef: (prop_types_default()).func,
  xScale: (prop_types_default()).func,
  yScale: (prop_types_default()).func,
  data: (prop_types_default()).array,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  defined: (prop_types_default()).func,
  stroke: (prop_types_default()).string,
  strokeWidth: (prop_types_default()).number,
  glyph: (prop_types_default()).func,
  curve: (prop_types_default()).func
};

function LinePath(_ref) {
  var children = _ref.children,
      data = _ref.data,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      x = _ref.x,
      y = _ref.y,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'steelblue' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$strokeDasharray = _ref.strokeDasharray,
      strokeDasharray = _ref$strokeDasharray === undefined ? '' : _ref$strokeDasharray,
      _ref$strokeDashoffset = _ref.strokeDashoffset,
      strokeDashoffset = _ref$strokeDashoffset === undefined ? 0 : _ref$strokeDashoffset,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'none' : _ref$fill,
      _ref$curve = _ref.curve,
      curve = _ref$curve === undefined ? d3_shape_src.curveLinear : _ref$curve,
      glyph = _ref.glyph,
      innerRef = _ref.innerRef,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['children', 'data', 'xScale', 'yScale', 'x', 'y', 'defined', 'className', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeDashoffset', 'fill', 'curve', 'glyph', 'innerRef']);

  var path$$1 = (0,d3_shape_src.line)().x(function () {
    return xScale(x.apply(undefined, arguments));
  }).y(function () {
    return yScale(y.apply(undefined, arguments));
  }).defined(defined).curve(curve);
  if (children) return children({ path: path$$1 });
  return react.createElement(
    'g',
    null,
    react.createElement('path', vx_shape_es_extends({
      ref: innerRef,
      className: classnames_default()('vx-linepath', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      strokeDashoffset: strokeDashoffset,
      fill: fill
    }, additionalProps(restProps, data))),
    glyph && react.createElement(
      'g',
      { className: 'vx-linepath-glyphs' },
      data.map(glyph)
    )
  );
}

LineRadial.propTypes = {
  innerRef: (prop_types_default()).func
};

function LineRadial(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      angle = _ref.angle,
      radius = _ref.radius,
      defined = _ref.defined,
      curve = _ref.curve,
      data = _ref.data,
      innerRef = _ref.innerRef,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['className', 'angle', 'radius', 'defined', 'curve', 'data', 'innerRef']);

  var path$$1 = (0,d3_shape_src.radialLine)();
  if (angle) path$$1.angle(angle);
  if (radius) path$$1.radius(radius);
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  return react.createElement(
    'g',
    null,
    react.createElement('path', vx_shape_es_extends({
      ref: innerRef,
      className: classnames_default()('vx-line-radial', className),
      d: path$$1(data)
    }, additionalProps(restProps, data)))
  );
}

Area.propTypes = {
  x: (prop_types_default()).func,
  x0: (prop_types_default()).func,
  x1: (prop_types_default()).func,
  y: (prop_types_default()).func,
  y0: (prop_types_default()).func,
  y1: (prop_types_default()).func,
  xScale: (prop_types_default()).func,
  yScale: (prop_types_default()).func,
  data: (prop_types_default()).array,
  defined: (prop_types_default()).func,
  className: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool, (prop_types_default()).object, (prop_types_default()).array]),
  innerRef: (prop_types_default()).func,
  strokeDasharray: (prop_types_default()).string,
  strokeWidth: (prop_types_default()).number,
  stroke: (prop_types_default()).string,
  fill: (prop_types_default()).string,
  curve: (prop_types_default()).func
};

function Area(_ref) {
  var children = _ref.children,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y = _ref.y,
      y0 = _ref.y0,
      y1 = _ref.y1,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      strokeDasharray = _ref.strokeDasharray,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'rgba(0,0,0,0.3)' : _ref$fill,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['children', 'x', 'x0', 'x1', 'y', 'y0', 'y1', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path$$1 = (0,d3_shape_src.area)();
  if (x) path$$1.x(function () {
    return xScale(x.apply(undefined, arguments));
  });
  if (x0) path$$1.x0(function () {
    return xScale(x0.apply(undefined, arguments));
  });
  if (x1) path$$1.x1(function () {
    return xScale(x1.apply(undefined, arguments));
  });
  if (y) path$$1.y(function () {
    return yScale(y.apply(undefined, arguments));
  });
  if (y0) path$$1.y0(function () {
    return yScale(y0.apply(undefined, arguments));
  });
  if (y1) path$$1.y1(function () {
    return yScale(y1.apply(undefined, arguments));
  });
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  if (children) return children({ path: path$$1 });
  return react.createElement(
    'g',
    null,
    react.createElement('path', vx_shape_es_extends({
      ref: innerRef,
      className: classnames_default()('vx-area', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, additionalProps(restProps, data)))
  );
}

AreaClosed.propTypes = {
  innerRef: (prop_types_default()).func
};

function AreaClosed(_ref) {
  var x = _ref.x,
      y = _ref.y,
      y0 = _ref.y0,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      data = _ref.data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      strokeDasharray = _ref.strokeDasharray,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'rgba(0,0,0,0.3)' : _ref$fill,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['x', 'y', 'y0', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path$$1 = (0,d3_shape_src.area)().x(function () {
    return xScale(x.apply(undefined, arguments));
  }).y0(y0 || yScale.range()[0]).y1(function () {
    return yScale(y.apply(undefined, arguments));
  }).defined(defined);
  if (curve) path$$1.curve(curve);
  return react.createElement(
    'g',
    null,
    react.createElement('path', vx_shape_es_extends({
      ref: innerRef,
      className: classnames_default()('vx-area-closed', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, additionalProps(restProps, data)))
  );
}

AreaStack.propTypes = {
  className: (prop_types_default()).string,
  top: (prop_types_default()).number,
  left: (prop_types_default()).number,
  keys: (prop_types_default()).array,
  data: (prop_types_default()).array,
  curve: (prop_types_default()).func,
  defined: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).bool]),
  x: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  x0: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  x1: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  y: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  y0: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  y1: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  glyph: (prop_types_default()).bool,
  reverse: (prop_types_default()).bool
};

function AreaStack(_ref) {
  var className = _ref.className,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      glyph = _ref.glyph,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['className', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'glyph', 'reverse']);

  var stack$$1 = (0,d3_shape_src.stack)();
  if (keys) stack$$1.keys(keys);

  var path$$1 = (0,d3_shape_src.area)();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);
  if (y0) path$$1.y0(y0);
  if (y1) path$$1.y1(y1);
  if (curve) path$$1.curve(curve);
  if (defined) path$$1.defined(defined);

  var seriesData = stack$$1(data);
  if (reverse) seriesData.reverse();

  return react.createElement(
    'g',
    null,
    seriesData.map(function (series, i) {
      return react.createElement('path', vx_shape_es_extends({
        className: classnames_default()('vx-area-stack', className),
        key: 'area-stack-' + i + '-' + (series.key || ''),
        d: path$$1(series)
      }, additionalProps(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    }),
    !!glyph && react.createElement(
      'g',
      { className: 'vx-area-stack-glyphs' },
      data.map(glyph)
    )
  );
}

Bar.propTypes = {
  innerRef: (prop_types_default()).func
};

function Bar(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      width = _ref.width,
      height = _ref.height,
      rx = _ref.rx,
      ry = _ref.ry,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'steelblue' : _ref$fill,
      fillOpacity = _ref.fillOpacity,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      strokeLinecap = _ref.strokeLinecap,
      strokeLinejoin = _ref.strokeLinejoin,
      strokeMiterlimit = _ref.strokeMiterlimit,
      strokeOpacity = _ref.strokeOpacity,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'fillOpacity', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity']);

  return react.createElement('rect', vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-bar', className),
    x: x,
    y: y,
    width: width,
    height: height,
    rx: rx,
    ry: ry,
    fill: fill,
    fillOpacity: fillOpacity,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    strokeLinecap: strokeLinecap,
    strokeLinejoin: strokeLinejoin,
    strokeMiterlimit: strokeMiterlimit,
    strokeOpacity: strokeOpacity
  }, additionalProps(restProps, data)));
}

BarGroup.propTypes = {
  data: (prop_types_default()).array.isRequired,
  x0: (prop_types_default()).func.isRequired,
  x0Scale: (prop_types_default()).func.isRequired,
  x1Scale: (prop_types_default()).func.isRequired,
  yScale: (prop_types_default()).func.isRequired,
  zScale: (prop_types_default()).func.isRequired,
  keys: (prop_types_default()).array.isRequired,
  height: (prop_types_default()).number.isRequired,
  className: (prop_types_default()).string,
  top: (prop_types_default()).number,
  left: (prop_types_default()).number
};

function BarGroup(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x0 = _ref.x0,
      x0Scale = _ref.x0Scale,
      x1Scale = _ref.x1Scale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x0', 'x0Scale', 'x1Scale', 'yScale', 'zScale', 'keys', 'height']);

  var format = x0Scale.tickFormat ? x0Scale.tickFormat() : function (d) {
    return d;
  };
  return react.createElement(
    Group,
    { className: classnames_default()('vx-bar-group', className), top: top, left: left },
    data && data.map(function (d, i) {
      return react.createElement(
        Group,
        { key: 'bar-group-' + i + '-' + x0(d), left: x0Scale(x0(d)) },
        keys && keys.map(function (key, j) {
          var value = d[key];
          return react.createElement(Bar, vx_shape_es_extends({
            key: 'bar-group-bar-' + i + '-' + j + '-' + value + '-' + key,
            x: x1Scale(key),
            y: yScale(value),
            width: x1Scale.bandwidth(),
            height: height - yScale(value),
            fill: zScale(key),
            data: {
              key: key,
              value: value,
              x: format(x0(d)),
              data: d
            }
          }, restProps));
        })
      );
    })
  );
}

BarGroupHorizontal.propTypes = {
  data: (prop_types_default()).array.isRequired,
  y0: (prop_types_default()).func.isRequired,
  y0Scale: (prop_types_default()).func.isRequired,
  y1Scale: (prop_types_default()).func.isRequired,
  xScale: (prop_types_default()).func.isRequired,
  zScale: (prop_types_default()).func.isRequired,
  keys: (prop_types_default()).array.isRequired,
  width: (prop_types_default()).number.isRequired,
  className: (prop_types_default()).string,
  top: (prop_types_default()).number,
  left: (prop_types_default()).number
};

function BarGroupHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      y0 = _ref.y0,
      y0Scale = _ref.y0Scale,
      y1Scale = _ref.y1Scale,
      xScale = _ref.xScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      width = _ref.width,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'y0', 'y0Scale', 'y1Scale', 'xScale', 'zScale', 'keys', 'width']);

  var format = y0Scale.tickFormat ? y0Scale.tickFormat() : function (d) {
    return d;
  };
  return react.createElement(
    Group,
    { className: classnames_default()('vx-bar-group-horizontal', className), top: top, left: left },
    data && data.map(function (d, i) {
      return react.createElement(
        Group,
        { key: 'bar-group-' + i + '-' + y0(d), top: y0Scale(y0(d)) },
        keys && keys.map(function (key, j) {
          var value = d[key];
          return react.createElement(Bar, vx_shape_es_extends({
            key: 'bar-group-bar-' + i + '-' + j + '-' + value + '-' + key,
            x: 0,
            y: y1Scale(key),
            width: width - xScale(value),
            height: y1Scale.bandwidth(),
            fill: zScale(key),
            data: {
              key: key,
              value: value,
              y: format(y0(d)),
              data: d
            }
          }, restProps));
        })
      );
    })
  );
}

function objHasMethod(obj, funcName) {
  return !!obj[funcName] && typeof obj[funcName] === 'function';
}

BarStack.propTypes = {
  data: (prop_types_default()).array.isRequired,
  x: (prop_types_default()).func.isRequired,
  xScale: (prop_types_default()).func.isRequired,
  yScale: (prop_types_default()).func.isRequired,
  zScale: (prop_types_default()).func.isRequired,
  keys: (prop_types_default()).array.isRequired,
  className: (prop_types_default()).string,
  top: (prop_types_default()).number,
  left: (prop_types_default()).number,
  width: (prop_types_default()).number,
  height: (prop_types_default()).number
};

function BarStack(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x = _ref.x,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      width = _ref.width,
      height = _ref.height,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x', 'xScale', 'yScale', 'zScale', 'keys', 'width', 'height']);

  var series = (0,d3_shape_src.stack)().keys(keys)(data);
  var format = xScale.tickFormat ? xScale.tickFormat() : function (d) {
    return d;
  };
  var xRange = xScale.range();
  var xDomain = xScale.domain();
  return react.createElement(
    Group,
    { className: classnames_default()('vx-bar-stack', className), top: top, left: left },
    series && series.map(function (s, i) {
      return react.createElement(
        Group,
        { key: 'vx-bar-stack-' + i },
        s.map(function (d, ii) {
          var barHeight = yScale(d[0]) - yScale(d[1]);
          var barWidth = width || (objHasMethod(xScale, 'bandwidth') ? xScale.bandwidth() : Math.abs(xRange[xRange.length - 1] - xRange[0]) / xDomain.length);

          var barX = objHasMethod(xScale, 'bandwidth') ? xScale(x(d.data)) : xScale(x(d.data)) - barWidth / 2;
          return react.createElement(Bar, vx_shape_es_extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: barX,
            y: yScale(d[1]),
            width: barWidth,
            height: barHeight,
            fill: zScale(s.key),
            data: {
              paddingInner: objHasMethod(xScale, 'paddingInner') && xScale.paddingInner(),
              paddingOuter: objHasMethod(xScale, 'paddingOuter') && xScale.paddingOuter(),
              step: objHasMethod(xScale, 'step') && xScale.step(),
              key: s.key,
              value: d[1],
              height: barHeight,
              width: barWidth,
              x: x(d.data),
              xFormatted: format(x(d.data)),
              data: d.data
            }
          }, restProps));
        })
      );
    })
  );
}

BarStackHorizontal.propTypes = {
  data: (prop_types_default()).array.isRequired,
  y: (prop_types_default()).func.isRequired,
  xScale: (prop_types_default()).func.isRequired,
  yScale: (prop_types_default()).func.isRequired,
  zScale: (prop_types_default()).func.isRequired,
  keys: (prop_types_default()).array.isRequired,
  className: (prop_types_default()).string,
  top: (prop_types_default()).number,
  left: (prop_types_default()).number,
  width: (prop_types_default()).number,
  height: (prop_types_default()).number
};

function BarStackHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      y = _ref.y,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      width = _ref.width,
      height = _ref.height,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'y', 'xScale', 'yScale', 'zScale', 'keys', 'width', 'height']);

  var series = (0,d3_shape_src.stack)().keys(keys)(data);
  var format = yScale.tickFormat ? yScale.tickFormat() : function (d) {
    return d;
  };
  var yRange = yScale.range();
  var yDomain = yScale.domain();
  return react.createElement(
    Group,
    { className: classnames_default()('vx-bar-stack-horizontal', className), top: top, left: left },
    series && series.map(function (s, i) {
      return react.createElement(
        Group,
        { key: 'vx-bar-stack-horizontal-' + i },
        s.map(function (d, ii) {
          var barWidth = xScale(d[1]) - xScale(d[0]);
          var barHeight = width || (objHasMethod(yScale, 'bandwidth') ? yScale.bandwidth() : Math.abs(yRange[yRange.length - 1] - yRange[0]) / yDomain.length);

          var barY = objHasMethod(yScale, 'bandwidth') ? yScale(y(d.data)) : yScale(y(d.data)) - barHeight / 2;
          return react.createElement(Bar, vx_shape_es_extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: xScale(d[0]),
            y: barY,
            width: barWidth,
            height: barHeight,
            fill: zScale(s.key),
            data: {
              paddingInner: objHasMethod(yScale, 'paddingInner') && yScale.paddingInner(),
              paddingOuter: objHasMethod(yScale, 'paddingOuter') && yScale.paddingOuter(),
              step: objHasMethod(yScale, 'step') && yScale.step(),
              key: s.key,
              value: d[0],
              height: barHeight,
              width: barWidth,
              y: y(d.data),
              yFormatted: format(y(d.data)),
              data: d.data
            }
          }, restProps));
        })
      );
    })
  );
}

var STACK_ORDERS = {
  ascending: d3_shape_src.stackOrderAscending,
  descending: d3_shape_src.stackOrderDescending,
  insideout: d3_shape_src.stackOrderInsideOut,
  none: d3_shape_src.stackOrderNone,
  reverse: d3_shape_src.stackOrderReverse
};

var STACK_ORDER_NAMES = Object.keys(STACK_ORDERS);

function stackOrder(order) {
  return STACK_ORDERS[order] || STACK_ORDERS.none;
}

var STACK_OFFSETS = {
  expand: d3_shape_src.stackOffsetExpand,
  diverging: d3_shape_src.stackOffsetDiverging,
  none: d3_shape_src.stackOffsetNone,
  silhouette: d3_shape_src.stackOffsetSilhouette,
  wiggle: d3_shape_src.stackOffsetWiggle
};

var STACK_OFFSET_NAMES = Object.keys(STACK_OFFSETS);

function stackOffset(offset) {
  return STACK_OFFSETS[offset] || STACK_OFFSETS.none;
}

Stack.propTypes = {
  className: (prop_types_default()).string,
  top: (prop_types_default()).number,
  left: (prop_types_default()).number,
  keys: (prop_types_default()).array,
  data: (prop_types_default()).array,
  curve: (prop_types_default()).func,
  defined: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).bool]),
  x: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  x0: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  x1: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  y: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  y0: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  y1: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  value: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  order: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).array, (prop_types_default()).string]),
  offset: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).array, (prop_types_default()).string]),
  render: (prop_types_default()).func,
  reverse: (prop_types_default()).bool
};

function Stack(_ref) {
  var className = _ref.className,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      value = _ref.value,
      order = _ref.order,
      offset = _ref.offset,
      render = _ref.render,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'value', 'order', 'offset', 'render', 'reverse']);

  var stack$$1 = (0,d3_shape_src.stack)();
  if (keys) stack$$1.keys(keys);
  if (value) stack$$1.value(value);
  if (order) stack$$1.order(stackOrder(order));
  if (offset) stack$$1.offset(stackOffset(offset));

  var path$$1 = (0,d3_shape_src.area)();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);
  if (y0) path$$1.y0(y0);
  if (y1) path$$1.y1(y1);
  if (curve) path$$1.curve(curve);
  if (defined) path$$1.defined(defined);

  var seriesData = stack$$1(data);
  if (reverse) seriesData.reverse();

  if (render) {
    return react.createElement(
      Group,
      { top: top, left: left },
      render({ seriesData: seriesData, path: path$$1 })
    );
  }

  return react.createElement(
    Group,
    { top: top, left: left },
    seriesData.map(function (series, i) {
      return react.createElement('path', vx_shape_es_extends({
        className: classnames_default()('vx-stack', className),
        key: 'stack-' + i + '-' + (series.key || ''),
        d: path$$1(series)
      }, additionalProps(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    })
  );
}

var degreesToRadians = function degreesToRadians(degrees) {
  return Math.PI / 180 * degrees;
};

function pathHorizontalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var link = (0,d3_shape_src.linkHorizontal)();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkHorizontal.propTypes = {
  innerRef: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function LinkHorizontal(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathHorizontalDiagonal({ source: source, target: target, x: x, y: y });
  return react.createElement('path', vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link-horizontal', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var link = (0,d3_shape_src.linkVertical)();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkVertical.propTypes = {
  innerRef: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function LinkVertical(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathVerticalDiagonal({ source: source, target: target, x: x, y: y });
  return react.createElement('path', vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link-vertical', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      angle = _ref.angle,
      radius = _ref.radius;

  return function (data) {
    var link = (0,d3_shape_src.linkRadial)();
    link.angle(angle);
    link.radius(radius);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkRadial.propTypes = {
  innerRef: (prop_types_default()).func,
  angle: (prop_types_default()).func,
  radius: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function LinkRadial(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$angle = _ref2.angle,
      angle = _ref2$angle === undefined ? function (d) {
    return d.x;
  } : _ref2$angle,
      _ref2$radius = _ref2.radius,
      radius = _ref2$radius === undefined ? function (d) {
    return d.y;
  } : _ref2$radius,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'angle', 'radius', 'source', 'target']);

  path$$1 = path$$1 || pathRadialDiagonal({ source: source, target: target, angle: angle, radius: radius });
  return react.createElement('path', vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link-radius', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathHorizontalCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path$$1 = (0,d3_path_src/* path */.E)();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path$$1.toString();
  };
}

LinkHorizontalCurve.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function LinkHorizontalCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || pathHorizontalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path$$1 = (0,d3_path_src/* path */.E)();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path$$1.toString();
  };
}

LinkVerticalCurve.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function LinkVerticalCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || pathVerticalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sa = x(sourceData) - Math.PI / 2;
    var sr = y(sourceData);
    var ta = x(targetData) - Math.PI / 2;
    var tr = y(targetData);

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);

    var sx = sr * sc;
    var sy = sr * ss;
    var tx = tr * tc;
    var ty = tr * ts;

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path$$1 = (0,d3_path_src/* path */.E)();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path$$1.toString();
  };
}

LinkRadialCurve.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function LinkRadialCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || pathRadialCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathHorizontalLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = (0,d3_path_src/* path */.E)();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkHorizontalLine.propTypes = {
  innerRef: (prop_types_default()).func,
  path: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func
};

function LinkHorizontalLine(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathHorizontalLine({ source: source, target: target, x: x, y: y });
  return react.createElement('path', vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = (0,d3_path_src/* path */.E)();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkVerticalLine.propTypes = {
  innerRef: (prop_types_default()).func,
  path: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func
};

function LinkVerticalLine(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathVerticalLine({ source: source, target: target, x: x, y: y });
  return react.createElement('path', vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sa = x(sourceData) - Math.PI / 2;
    var sr = y(sourceData);
    var ta = x(targetData) - Math.PI / 2;
    var tr = y(targetData);

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);

    var path$$1 = (0,d3_path_src/* path */.E)();
    path$$1.moveTo(sr * sc, sr * ss);
    path$$1.lineTo(tr * tc, tr * ts);

    return path$$1.toString();
  };
}

LinkRadialStep.propTypes = {
  innerRef: (prop_types_default()).func,
  path: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func
};

function LinkRadialStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathRadialLine({ source: source, target: target, x: x, y: y });
  return react.createElement('path', vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathHorizontalStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = (0,d3_path_src/* path */.E)();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(sx + (tx - sx) * percent, sy);
    path$$1.lineTo(sx + (tx - sx) * percent, ty);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkHorizontalStep.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function LinkHorizontalStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.5 : _ref2$percent,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'percent', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathHorizontalStep({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = (0,d3_path_src/* path */.E)();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(sx, sy + (ty - sy) * percent);
    path$$1.lineTo(tx, sy + (ty - sy) * percent);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkVerticalStep.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function LinkVerticalStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.5 : _ref2$percent,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'percent', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathVerticalStep({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var sa = sx - Math.PI / 2;
    var sr = sy;
    var ta = tx - Math.PI / 2;
    var tr = ty;

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);
    var sf = Math.abs(ta - sa) > Math.PI ? ta <= sa : ta > sa;

    return '\n      M' + sr * sc + ',' + sr * ss + '\n      A' + sr + ',' + sr + ',0,0,' + (sf ? 1 : 0) + ',' + sr * tc + ',' + sr * ts + '\n      L' + tr * tc + ',' + tr * ts + '\n    ';
  };
}

LinkRadialStep$1.propTypes = {
  innerRef: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function LinkRadialStep$1(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathRadialStep({ source: source, target: target, x: x, y: y });
  return react.createElement('path', vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

Polygon.propTypes = {
  sides: (prop_types_default()).number.isRequired,
  size: (prop_types_default()).number.isRequired,
  className: (prop_types_default()).string,
  rotate: (prop_types_default()).number
};

var getPoint = function getPoint(_ref) {
  var sides = _ref.sides,
      size = _ref.size,
      center = _ref.center,
      rotate = _ref.rotate,
      side = _ref.side;

  var degrees = 360 / sides * side - rotate;
  var radians = degreesToRadians(degrees);

  return new Point({
    x: center.x + size * Math.cos(radians),
    y: center.y + size * Math.sin(radians)
  });
};

var getPoints = function getPoints(_ref2) {
  var sides = _ref2.sides,
      size = _ref2.size,
      center = _ref2.center,
      rotate = _ref2.rotate;

  return [].concat(toConsumableArray(Array(sides).keys())).map(function (side) {
    return getPoint({
      sides: sides,
      size: size,
      center: center,
      rotate: rotate,
      side: side
    });
  });
};

function Polygon(_ref3) {
  var sides = _ref3.sides,
      _ref3$size = _ref3.size,
      size = _ref3$size === undefined ? 25 : _ref3$size,
      _ref3$center = _ref3.center,
      center = _ref3$center === undefined ? new Point({ x: 0, y: 0 }) : _ref3$center,
      _ref3$rotate = _ref3.rotate,
      rotate = _ref3$rotate === undefined ? 0 : _ref3$rotate,
      className = _ref3.className,
      restProps = vx_shape_es_objectWithoutProperties(_ref3, ['sides', 'size', 'center', 'rotate', 'className']);

  var points = getPoints({
    sides: sides,
    size: size,
    center: center,
    rotate: rotate
  }).map(function (p) {
    return p.toArray();
  }).join(' ');

  return react.createElement('polygon', vx_shape_es_extends({ points: points, className: classnames_default()('vx-polygon', className) }, restProps));
}



// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var esm_classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var esm_createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(82963);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(61120);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(97326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__(46871);
;// CONCATENATED MODULE: ./node_modules/d3-timer/src/timer.js
var timer_frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++timer_frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --timer_frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  timer_frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    timer_frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (timer_frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    timer_frame = 1, setFrame(wake);
  }
}

;// CONCATENATED MODULE: ./node_modules/d3-timer/src/interval.js


/* harmony default export */ function src_interval(callback, delay, time) {
  var t = new Timer, total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? now() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
}

;// CONCATENATED MODULE: ./node_modules/react-move/es/Node/Node.js
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i]; // eslint-disable-line no-param-reassign
  }

  return obj;
}

function Node(key, data, type) {
  this.key = key;
  this.data = data;
  this.type = type;
  this.state = {};
}

extend(Node.prototype, {
  setState: function setState(state) {
    var s = this.state;
    extend(s, typeof state === 'function' ? state(s) : state);
  },
  updateData: function updateData(data) {
    this.data = data;
    return this;
  },
  updateType: function updateType(type) {
    this.type = type;
    return this;
  }
});
/* harmony default export */ const Node_Node = (Node);
;// CONCATENATED MODULE: ./node_modules/react-move/es/Node/index.js

;// CONCATENATED MODULE: ./node_modules/react-move/es/core/mergeKeys.js
/* based on react-motion's mergeDiff (https://github.com/chenglou/react-motion) */
function mergeKeys(currNodeKeys, currKeyIndex, nextNodeKeys, nextKeyIndex) {
  var allKeys = [];

  for (var i = 0; i < nextNodeKeys.length; i++) {
    allKeys[i] = nextNodeKeys[i];
  }

  for (var _i = 0; _i < currNodeKeys.length; _i++) {
    if (nextKeyIndex[currNodeKeys[_i]] === undefined) {
      allKeys.push(currNodeKeys[_i]);
    }
  }

  return allKeys.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a];
    var nextOrderB = nextKeyIndex[b];
    var currOrderA = currKeyIndex[a];
    var currOrderB = currKeyIndex[b];

    if (nextOrderA != null && nextOrderB != null) {
      return nextKeyIndex[a] - nextKeyIndex[b];
    } else if (currOrderA != null && currOrderB != null) {
      return currKeyIndex[a] - currKeyIndex[b];
    } else if (nextOrderA != null) {
      for (var _i2 = 0; _i2 < nextNodeKeys.length; _i2++) {
        var pivot = nextNodeKeys[_i2];

        if (!currKeyIndex[pivot]) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && currOrderB > currKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && currOrderB < currKeyIndex[pivot]) {
          return 1;
        }
      }

      return 1;
    }

    for (var _i3 = 0; _i3 < nextNodeKeys.length; _i3++) {
      var _pivot = nextNodeKeys[_i3];

      if (!currKeyIndex[_pivot]) {
        continue;
      }

      if (nextOrderB < nextKeyIndex[_pivot] && currOrderA > currKeyIndex[_pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[_pivot] && currOrderA < currKeyIndex[_pivot]) {
        return -1;
      }
    }

    return -1;
  });
}

/* harmony default export */ const core_mergeKeys = (mergeKeys);
;// CONCATENATED MODULE: ./node_modules/react-move/es/core/types.js
var ENTER = 'ENTER';
var UPDATE = 'UPDATE';
var LEAVE = 'LEAVE';
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__(94334);
// EXTERNAL MODULE: ./node_modules/d3-interpolate/src/transform/index.js + 2 modules
var transform = __webpack_require__(33636);
;// CONCATENATED MODULE: ./node_modules/react-move/es/core/transition/tween.js



function getInterpolator(attr) {
  if (attr === 'transform') {
    return transform/* interpolateTransformSvg */.w;
  }

  return value/* default */.Z;
}

function getTween(nameSpace, attr, value1) {
  return function tween() {
    var _this = this;

    var value0 = nameSpace ? this.state[nameSpace][attr] : this.state[attr];

    if (value0 === value1) {
      return null;
    }

    var i = getInterpolator(attr)(value0, value1);
    var stateTween;

    if (nameSpace === null) {
      stateTween = function stateTween(t) {
        _this.setState(function () {
          return (0,defineProperty/* default */.Z)({}, attr, i(t));
        });
      };
    } else {
      stateTween = function stateTween(t) {
        _this.setState(function (state) {
          return (0,defineProperty/* default */.Z)({}, nameSpace, (0,objectSpread/* default */.Z)({}, state[nameSpace], (0,defineProperty/* default */.Z)({}, attr, i(t))));
        });
      };
    }

    return stateTween;
  };
}

/* harmony default export */ function tween(nameSpace, attr, value) {
  return getTween.call(this, nameSpace, attr, value);
}
;// CONCATENATED MODULE: ./node_modules/d3-timer/src/timeout.js


/* harmony default export */ function src_timeout(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

;// CONCATENATED MODULE: ./node_modules/react-move/es/core/transition/schedule.js

// Apapted from https://github.com/d3/d3-transition/blob/master/src/transition/schedule.js

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
/* harmony default export */ function schedule(node, stateKey, id, timing, tweens) {
  var events = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var schedules = node.TRANSITION_SCHEDULES;

  if (!schedules) {
    node.TRANSITION_SCHEDULES = {}; // eslint-disable-line no-param-reassign
  } else if (id in schedules) {
    return;
  }

  var config = (0,objectSpread/* default */.Z)({
    stateKey: stateKey,
    events: events,
    tweens: tweens
  }, timing, {
    timer: null,
    state: CREATED
  });

  create(node, id, config);
}

function create(node, id, config) {
  var schedules = node.TRANSITION_SCHEDULES; // Initialize the transition timer when the transition is created.
  // Note the actual delay is not known until the first callback!

  var transition = (0,objectSpread/* default */.Z)({}, config);

  var n = transition.tweens.length;
  var tweens = new Array(n);
  schedules[id] = transition;
  transition.timer = timer(schedule, 0, transition.time);

  function schedule(elapsed) {
    transition.state = SCHEDULED;
    transition.timer.restart(start, transition.delay, transition.time); // If the elapsed delay is less than our first sleep, start immediately.

    if (transition.delay <= elapsed) {
      start(elapsed - transition.delay);
    }
  }

  function start(elapsed) {
    // eslint-disable-line consistent-return
    // If the state is not SCHEDULED, then we previously errored on start.
    if (transition.state !== SCHEDULED) return stop();

    for (var sid in schedules) {
      // eslint-disable-line
      var s = schedules[sid];

      if (s.stateKey !== transition.stateKey) {
        continue; // eslint-disable-line no-continue
      } // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!


      if (s.state === STARTED) return src_timeout(start); // 1. Interrupt the active transition, if any. dispatch the interrupt event.
      // 2. Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!

      if (s.state === RUNNING) {
        s.state = ENDED;
        s.timer.stop();

        if (s.events.interrupt && typeof s.events.interrupt === 'function') {
          s.events.interrupt.call(this);
        }

        delete schedules[sid];
      } else if (+sid < id) {
        s.state = ENDED;
        s.timer.stop();
        delete schedules[sid];
      }
    } // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.


    src_timeout(function () {
      if (transition.state === STARTED) {
        transition.state = RUNNING;
        transition.timer.restart(tick, transition.delay, transition.time);
        tick(elapsed);
      }
    });
    transition.state = STARTING;

    if (transition.events.start && typeof transition.events.start === 'function') {
      transition.events.start.call(node);
    }

    if (transition.state !== STARTING) {
      // interrupted
      return; // eslint-disable-line consistent-return
    }

    transition.state = STARTED; // Initialize the tween, deleting null tween.

    var j = -1;

    for (var i = 0; i < n; ++i) {
      var res = transition.tweens[i].call(node);

      if (res) {
        tweens[++j] = res;
      }
    }

    tweens.length = j + 1;
  }

  function tick(elapsed) {
    var t = 1;

    if (elapsed < transition.duration) {
      t = transition.ease.call(null, elapsed / transition.duration);
    } else {
      transition.timer.restart(stop);
      transition.state = ENDING;
    }

    var i = -1;

    while (++i < tweens.length) {
      tweens[i].call(null, t);
    }

    if (transition.state === ENDING) {
      if (transition.events.end && typeof transition.events.end === 'function') {
        transition.events.end.call(node);
      }

      stop();
    }
  }

  function stop() {
    transition.state = ENDED;
    transition.timer.stop();
    delete schedules[id];

    for (var i in schedules) {
      return;
    } // eslint-disable-line guard-for-in, no-restricted-syntax


    delete node.TRANSITION_SCHEDULES; // eslint-disable-line no-param-reassign
  }
}
;// CONCATENATED MODULE: ./node_modules/react-move/es/core/transition/transition.js







function once(func) {
  var called = false;
  return function transitionEvent() {
    if (!called) {
      called = true;
      func.call(this);
    }
  };
}

var id = 0;
function newId() {
  return ++id;
} // from https://github.com/d3/d3-ease/blob/master/src/linear.js

function transition_linear(t) {
  return +t;
}

var preset = {
  time: null,
  delay: 0,
  duration: 250,
  ease: transition_linear
};

function scheduleTransitions() {
  var _this = this;

  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var transitions = (0,objectSpread/* default */.Z)({}, config);

  var events = transitions.events || {};
  delete transitions.events; // each event handler should be called only once

  Object.keys(events).forEach(function (d) {
    if (typeof events[d] !== 'function') {
      throw new Error('Event handlers must be a function');
    } else {
      events[d] = once(events[d]);
    }
  });
  var timing = transitions.timing || {};
  delete transitions.timing;
  Object.keys(transitions).forEach(function (stateKey) {
    var tweens = [];

    if ((0,esm_typeof/* default */.Z)(transitions[stateKey]) === 'object' && Array.isArray(transitions[stateKey]) === false) {
      Object.keys(transitions[stateKey]).forEach(function (attr) {
        var val = transitions[stateKey][attr];

        if (Array.isArray(val)) {
          if (val.length === 1) {
            tweens.push(tween.call(_this, stateKey, attr, val[0]));
          } else {
            _this.setState(function (state) {
              return (0,defineProperty/* default */.Z)({}, stateKey, (0,objectSpread/* default */.Z)({}, state[stateKey], (0,defineProperty/* default */.Z)({}, attr, val[0])));
            });

            tweens.push(tween.call(_this, stateKey, attr, val[1]));
          }
        } else if (typeof val === 'function') {
          var getResonanceCustomTween = function getResonanceCustomTween() {
            var resonanceCustomTween = function resonanceCustomTween(t) {
              _this.setState(function (state) {
                return (0,defineProperty/* default */.Z)({}, stateKey, (0,objectSpread/* default */.Z)({}, state[stateKey], (0,defineProperty/* default */.Z)({}, attr, val(t))));
              });
            };

            return resonanceCustomTween;
          };

          tweens.push(getResonanceCustomTween);
        } else {
          _this.setState(function (state) {
            return (0,defineProperty/* default */.Z)({}, stateKey, (0,objectSpread/* default */.Z)({}, state[stateKey], (0,defineProperty/* default */.Z)({}, attr, val)));
          }); // This assures any existing transitions are stopped


          tweens.push(tween.call(_this, stateKey, attr, val));
        }
      });
    } else {
      var val = transitions[stateKey];

      if (Array.isArray(val)) {
        if (val.length === 1) {
          tweens.push(tween.call(_this, null, stateKey, val[0]));
        } else {
          _this.setState(function () {
            return (0,defineProperty/* default */.Z)({}, stateKey, val[0]);
          });

          tweens.push(tween.call(_this, null, stateKey, val[1]));
        }
      } else if (typeof val === 'function') {
        var getResonanceCustomTween = function getResonanceCustomTween() {
          var resonanceCustomTween = function resonanceCustomTween(t) {
            _this.setState(function () {
              return (0,defineProperty/* default */.Z)({}, stateKey, val(t));
            });
          };

          return resonanceCustomTween;
        };

        tweens.push(getResonanceCustomTween);
      } else {
        _this.setState(function () {
          return (0,defineProperty/* default */.Z)({}, stateKey, val);
        }); // This assures any existing transitions are stopped


        tweens.push(tween.call(_this, null, stateKey, val));
      }
    }

    var timingConfig = (0,objectSpread/* default */.Z)({}, preset, timing, {
      time: now()
    });

    schedule(_this, stateKey, newId(), timingConfig, tweens, events);
  });
}

function transition(config) {
  var _this2 = this;

  if (Array.isArray(config)) {
    config.forEach(function (c) {
      scheduleTransitions.call(_this2, c);
    });
  } else {
    scheduleTransitions.call(this, config);
  }
}
;// CONCATENATED MODULE: ./node_modules/react-move/es/core/transition/stop.js
function stop() {
  var ts = this.TRANSITION_SCHEDULES;

  if (ts) {
    Object.keys(ts).forEach(function (s) {
      ts[s].timer.stop();
    });
  }
}
;// CONCATENATED MODULE: ./node_modules/react-move/es/core/transition/index.js


;// CONCATENATED MODULE: ./node_modules/react-move/es/NodeGroup/NodeGroup.js
















var NodeGroup =
/*#__PURE__*/
function (_Component) {
  (0,inherits/* default */.Z)(NodeGroup, _Component);

  function NodeGroup() {
    var _getPrototypeOf2;

    var _this;

    (0,esm_classCallCheck/* default */.Z)(this, NodeGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,possibleConstructorReturn/* default */.Z)(this, (_getPrototypeOf2 = (0,getPrototypeOf/* default */.Z)(NodeGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this)), "state", {
      nodeKeys: [],
      nodeHash: {},
      nodes: [],
      data: null
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this)), "animate", function () {
      var _this$state = _this.state,
          nodeKeys = _this$state.nodeKeys,
          nodeHash = _this$state.nodeHash;

      if (_this.unmounting) {
        return;
      }

      var pending = false;
      var nextNodeKeys = [];
      var length = nodeKeys.length;

      for (var i = 0; i < length; i++) {
        var k = nodeKeys[i];
        var n = nodeHash[k];

        if (n.TRANSITION_SCHEDULES) {
          pending = true;
        }

        if (n.type === LEAVE && !n.TRANSITION_SCHEDULES) {
          delete nodeHash[k];
        } else {
          nextNodeKeys.push(k);
        }
      }

      if (!pending) {
        _this.interval.stop();
      }

      _this.setState(function () {
        return {
          nodeKeys: nextNodeKeys,
          nodes: nextNodeKeys.map(function (key) {
            return nodeHash[key];
          })
        };
      });
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this)), "interval", null);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this)), "unmounting", false);

    return _this;
  }

  (0,esm_createClass/* default */.Z)(NodeGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startInterval();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.data !== this.props.data && !this.unmounting) {
        this.startInterval();
      }
    }
  }, {
    key: "startInterval",
    value: function startInterval() {
      if (!this.interval) {
        this.interval = src_interval(this.animate);
      } else {
        this.interval.restart(this.animate);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$state2 = this.state,
          nodeKeys = _this$state2.nodeKeys,
          nodeHash = _this$state2.nodeHash;
      this.unmounting = true;

      if (this.interval) {
        this.interval.stop();
      }

      nodeKeys.forEach(function (key) {
        stop.call(nodeHash[key]);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var renderedChildren = this.props.children(this.state.nodes);
      return renderedChildren && react.Children.only(renderedChildren);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.data !== prevState.data) {
        var data = nextProps.data,
            keyAccessor = nextProps.keyAccessor,
            start = nextProps.start,
            enter = nextProps.enter,
            update = nextProps.update,
            leave = nextProps.leave;
        var nodeKeys = prevState.nodeKeys,
            nodeHash = prevState.nodeHash;
        var keyIndex = {};

        for (var i = 0; i < nodeKeys.length; i++) {
          keyIndex[nodeKeys[i]] = i;
        }

        var nextKeyIndex = {};
        var nextNodeKeys = [];

        for (var _i = 0; _i < data.length; _i++) {
          var d = data[_i];
          var k = keyAccessor(d, _i);
          nextKeyIndex[k] = _i;
          nextNodeKeys.push(k);

          if (keyIndex[k] === undefined) {
            nodeHash[k] = new Node_Node(k, d, ENTER);
          }
        }

        for (var _i2 = 0; _i2 < nodeKeys.length; _i2++) {
          var _k = nodeKeys[_i2];
          var n = nodeHash[_k];

          if (nextKeyIndex[_k] !== undefined) {
            n.updateData(data[nextKeyIndex[_k]]);
            n.updateType(UPDATE);
          } else {
            n.updateType(LEAVE);
          }
        }

        var mergedNodeKeys = core_mergeKeys(nodeKeys, keyIndex, nextNodeKeys, nextKeyIndex);

        for (var _i3 = 0; _i3 < mergedNodeKeys.length; _i3++) {
          var _k2 = mergedNodeKeys[_i3];
          var _n = nodeHash[_k2];
          var _d = _n.data;

          if (_n.type === ENTER) {
            _n.setState(start(_d, nextKeyIndex[_k2]));

            transition.call(_n, enter(_d, nextKeyIndex[_k2]));
          } else if (_n.type === LEAVE) {
            transition.call(_n, leave(_d, keyIndex[_k2]));
          } else {
            transition.call(_n, update(_d, nextKeyIndex[_k2]));
          }
        }

        return {
          data: data,
          nodes: mergedNodeKeys.map(function (key) {
            return nodeHash[key];
          }),
          nodeHash: nodeHash,
          nodeKeys: mergedNodeKeys
        };
      }

      return null;
    }
  }]);

  return NodeGroup;
}(react.Component);

NodeGroup.propTypes =  false ? 0 : {};
NodeGroup.defaultProps = {
  enter: function enter() {},
  update: function update() {},
  leave: function leave() {}
};
(0,react_lifecycles_compat_es.polyfill)(NodeGroup);
/* harmony default export */ const NodeGroup_NodeGroup = (NodeGroup);
;// CONCATENATED MODULE: ./node_modules/react-move/es/NodeGroup/index.js

;// CONCATENATED MODULE: ./node_modules/react-move/es/Animate/Animate.js




var keyAccessor = function keyAccessor() {
  return '$$key$$';
};

function Animate(props) {
  var show = props.show,
      start = props.start,
      enter = props.enter,
      update = props.update,
      leave = props.leave,
      children = props.children;
  var data = typeof start === 'function' ? start() : start;
  return react.createElement(NodeGroup_NodeGroup, {
    data: show ? [data] : [],
    start: function start() {
      return data;
    },
    keyAccessor: keyAccessor,
    enter: typeof enter === 'function' ? enter : function () {
      return enter;
    },
    update: typeof update === 'function' ? update : function () {
      return update;
    },
    leave: typeof leave === 'function' ? leave : function () {
      return leave;
    }
  }, function (nodes) {
    if (!nodes[0]) {
      return null;
    }

    var renderedChildren = children(nodes[0].state);
    return renderedChildren && react.Children.only(renderedChildren);
  });
}

Animate.propTypes =  false ? 0 : {};
Animate.defaultProps = {
  show: true
};
/* harmony default export */ const Animate_Animate = ((/* unused pure expression or super */ null && (Animate)));
;// CONCATENATED MODULE: ./node_modules/react-move/es/Animate/index.js

;// CONCATENATED MODULE: ./node_modules/react-move/es/index.js


;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/utils/callOrValue.js
function callOrValue_callOrValue(maybeFn) {
  if (typeof maybeFn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return maybeFn.apply(void 0, args);
  }

  return maybeFn;
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/series/animated/AnimatedBarSeries.js








var AnimatedBarSeries_propTypes = {
  rawData: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string])),
  // eslint-disable-line react/no-unused-prop-types
  binnedData: binnedDataShape,
  fill: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  fillOpacity: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  horizontal: (prop_types_default()).bool,
  stroke: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  strokeWidth: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  valueKey: (prop_types_default()).string,
  onClick: (prop_types_default()).func,
  // likely injected by parent Histogram
  binScale: (prop_types_default()).func,
  valueScale: (prop_types_default()).func,
  onMouseMove: (prop_types_default()).func,
  onMouseLeave: (prop_types_default()).func,
  keyAccessor: (prop_types_default()).func
};
var AnimatedBarSeries_defaultProps = {
  rawData: [],
  binnedData: [],
  binScale: null,
  fill: chartTheme.colors["default"],
  fillOpacity: 0.7,
  horizontal: false,
  onClick: null,
  onMouseMove: null,
  onMouseLeave: null,
  stroke: '#FFFFFF',
  strokeWidth: 1,
  valueKey: 'count',
  valueScale: null,
  keyAccessor: function keyAccessor(d) {
    return d.id;
  }
};
var INDEX_DELAY_MULTIPLIER = 10;

var getBin = function getBin(d) {
  return typeof d.bin === 'undefined' ? d.bin0 : d.bin;
};

var getBin1 = function getBin1(d) {
  return typeof d.bin === 'undefined' ? d.bin1 : d.bin;
};

function AnimatedBarSeries(_ref) {
  var binnedData = _ref.binnedData,
      valueScale = _ref.valueScale,
      binScale = _ref.binScale,
      horizontal = _ref.horizontal,
      keyAccessor = _ref.keyAccessor,
      fill = _ref.fill,
      fillOpacity = _ref.fillOpacity,
      onClick = _ref.onClick,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      valueKey = _ref.valueKey;
  var maxBarLength = Math.max.apply(Math, valueScale.range()); // compute once and use throughout

  var barWidths = binnedData.map(function (_, i) {
    return binScale.bandwidth ? binScale.bandwidth() // categorical
    : Math.abs(binScale(binnedData[i].bin1) - binScale(binnedData[i].bin0));
  } // numeric
  );

  var getValue = function getValue(d) {
    return d[valueKey];
  };

  var getX = horizontal ? getValue : getBin;
  var getY = horizontal ? getBin1 : getValue;
  var xScale = horizontal ? valueScale : binScale;
  var yScale = horizontal ? binScale : valueScale;
  return react.createElement(NodeGroup_NodeGroup, {
    data: binnedData,
    keyAccessor: keyAccessor,
    start: function start(d, i) {
      return {
        x: horizontal ? 0 : xScale(getX(d)),
        y: horizontal ? yScale(getY(d)) : maxBarLength,
        fill: d.fill || callOrValue_callOrValue(fill, d, i),
        width: horizontal ? 0 : barWidths[i],
        height: horizontal ? barWidths[i] : 0
      };
    },
    enter: function enter(d, i) {
      return {
        x: [horizontal ? 0 : xScale(getX(d))],
        y: [yScale(getY(d))],
        width: [horizontal ? xScale(getX(d)) : barWidths[i]],
        height: [horizontal ? barWidths[i] : maxBarLength - yScale(getY(d))],
        fill: [d.fill || callOrValue_callOrValue(fill, d, i)],
        stroke: [d.stroke || callOrValue_callOrValue(stroke, d, i)],
        timing: {
          duration: 300,
          delay: INDEX_DELAY_MULTIPLIER * i
        }
      };
    },
    update: function update(d, i) {
      return {
        x: [horizontal ? 0 : xScale(getX(d))],
        y: [yScale(getY(d))],
        width: [horizontal ? xScale(getX(d)) : barWidths[i]],
        height: [horizontal ? barWidths[i] : maxBarLength - yScale(getY(d))],
        fill: [d.fill || callOrValue_callOrValue(fill, d, i)],
        stroke: [d.stroke || callOrValue_callOrValue(stroke, d, i)],
        timing: {
          duration: 300,
          delay: INDEX_DELAY_MULTIPLIER * i
        }
      };
    },
    leave: function leave(d, i) {
      return {
        x: horizontal ? 0 : xScale(getX(d)),
        y: horizontal ? yScale(getY(d)) : maxBarLength,
        width: horizontal ? 0 : barWidths[i],
        height: horizontal ? barWidths[i] : 0,
        timing: {
          duration: 300,
          delay: INDEX_DELAY_MULTIPLIER / 2 * i
        }
      };
    }
  }, function (data) {
    return react.createElement(Group, null, data.map(function (modifiedDatum, i) {
      var key = modifiedDatum.key,
          rawDatum = modifiedDatum.data,
          d = modifiedDatum.state;
      return react.createElement(Bar, {
        key: "bar" + key,
        x: d.x,
        y: d.y,
        width: d.width,
        height: d.height,
        fill: d.fill,
        stroke: d.stroke,
        fillOpacity: typeof fillOpacity === 'undefined' ? callOrValue_callOrValue(fillOpacity, rawDatum, i) : fillOpacity,
        strokeWidth: rawDatum.strokeWidth || callOrValue_callOrValue(strokeWidth, rawDatum, i),
        onClick: onClick && function () {
          return function (event) {
            onClick({
              event: event,
              datum: rawDatum,
              data: binnedData,
              color: d.fill,
              index: i
            });
          };
        },
        onMouseMove: onMouseMove && function () {
          return function (event) {
            onMouseMove({
              event: event,
              datum: rawDatum,
              data: binnedData,
              color: d.fill,
              index: i
            });
          };
        },
        onMouseLeave: onMouseLeave && function () {
          return onMouseLeave;
        }
      });
    }));
  });
}

AnimatedBarSeries.propTypes = AnimatedBarSeries_propTypes;
AnimatedBarSeries.defaultProps = AnimatedBarSeries_defaultProps;
/* harmony default export */ const animated_AnimatedBarSeries = (AnimatedBarSeries);
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/series/BarSeries.js








var BarSeries_propTypes = {
  animated: (prop_types_default()).bool,
  rawData: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string])),
  // eslint-disable-line react/no-unused-prop-types
  binnedData: binnedDataShape,
  fill: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  fillOpacity: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  horizontal: (prop_types_default()).bool,
  stroke: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  strokeWidth: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  valueKey: (prop_types_default()).string,
  onClick: (prop_types_default()).func,
  // likely injected by parent Histogram
  binScale: (prop_types_default()).func,
  valueScale: (prop_types_default()).func,
  onMouseMove: (prop_types_default()).func,
  onMouseLeave: (prop_types_default()).func
};
var BarSeries_defaultProps = {
  animated: true,
  rawData: [],
  binnedData: [],
  binScale: null,
  fill: chartTheme.colors["default"],
  fillOpacity: 0.7,
  horizontal: false,
  onClick: null,
  onMouseMove: null,
  onMouseLeave: null,
  stroke: '#FFFFFF',
  strokeWidth: 1,
  valueKey: 'count',
  valueScale: null
};

function BarSeries(_ref) {
  var animated = _ref.animated,
      binnedData = _ref.binnedData,
      binScale = _ref.binScale,
      fill = _ref.fill,
      fillOpacity = _ref.fillOpacity,
      horizontal = _ref.horizontal,
      onClick = _ref.onClick,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      valueKey = _ref.valueKey,
      valueScale = _ref.valueScale;
  if (!binScale || !valueScale || !binnedData || binnedData.length === 0) return null;
  var maxBarLength = Math.max.apply(Math, valueScale.range());
  return react.createElement(Group, null, animated && react.createElement(animated_AnimatedBarSeries, {
    binnedData: binnedData,
    binScale: binScale,
    horizontal: horizontal,
    fill: fill,
    fillOpacity: fillOpacity,
    onClick: onClick,
    onMouseMove: onMouseMove,
    onMouseLeave: onMouseLeave,
    stroke: stroke,
    strokeWidth: strokeWidth,
    valueKey: valueKey,
    valueScale: valueScale
  }), !animated && binnedData.map(function (d, i) {
    var binPosition = binScale(d.bin || (horizontal ? d.bin1 : d.bin0));
    var barLength = horizontal ? valueScale(d[valueKey]) : maxBarLength - valueScale(d[valueKey]);
    var barWidth = binScale.bandwidth ? binScale.bandwidth() // categorical
    : Math.abs(binScale(binnedData[i].bin1) - binScale(binnedData[i].bin0)); // numeric

    var color = d.fill || callOrValue_callOrValue(fill, d, i);
    return react.createElement(Bar, {
      key: "bar-" + binPosition,
      x: horizontal ? 0 : binPosition,
      y: horizontal ? binPosition : maxBarLength - barLength,
      width: horizontal ? barLength : barWidth,
      height: horizontal ? barWidth : barLength,
      fill: color,
      fillOpacity: typeof fillOpacity === 'undefined' ? callOrValue_callOrValue(fillOpacity, d, i) : fillOpacity,
      stroke: d.stroke || callOrValue_callOrValue(stroke, d, i),
      strokeWidth: d.strokeWidth || callOrValue_callOrValue(strokeWidth, d, i),
      onClick: onClick && function () {
        return function (event) {
          onClick({
            event: event,
            data: binnedData,
            datum: d,
            color: color,
            index: i
          });
        };
      },
      onMouseMove: onMouseMove && function () {
        return function (event) {
          onMouseMove({
            event: event,
            data: binnedData,
            datum: d,
            color: color,
            index: i
          });
        };
      },
      onMouseLeave: onMouseLeave && function () {
        return onMouseLeave;
      }
    });
  }));
}

BarSeries.propTypes = BarSeries_propTypes;
BarSeries.defaultProps = BarSeries_defaultProps;
BarSeries.displayName = 'BarSeries';
/* harmony default export */ const series_BarSeries = (BarSeries);
// EXTERNAL MODULE: ./node_modules/reduce-css-calc/index.js
var reduce_css_calc = __webpack_require__(26488);
var reduce_css_calc_default = /*#__PURE__*/__webpack_require__.n(reduce_css_calc);
;// CONCATENATED MODULE: ./node_modules/@vx/text/dist/vx-text.es.js




var commonjsGlobal = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var vx_text_es_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = vx_text_es_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

var MEASUREMENT_ELEMENT_ID = '__react_svg_text_measurement_id';

function getStringWidth(str, style) {
  try {
    // Calculate length of each word to be used to determine number of words per line
    var textEl = document.getElementById(MEASUREMENT_ELEMENT_ID);
    if (!textEl) {
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.position = 'absolute';
      svg.style.top = '-100%';
      svg.style.left = '-100%';
      textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      textEl.setAttribute('id', MEASUREMENT_ELEMENT_ID);
      svg.appendChild(textEl);
      document.body.appendChild(svg);
    }

    Object.assign(textEl.style, style);
    textEl.textContent = str;
    return textEl.getComputedTextLength();
  } catch (e) {
    return null;
  }
}

var getStringWidth$1 = memoize_1(getStringWidth, function (str, style) {
  return str + '_' + JSON.stringify(style);
});

var vx_text_es_classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var vx_text_es_createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var vx_text_es_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var vx_text_es_inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var vx_text_es_objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var vx_text_es_possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Text = function (_Component) {
  vx_text_es_inherits(Text, _Component);

  function Text(props) {
    vx_text_es_classCallCheck(this, Text);

    var _this = vx_text_es_possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));

    _this.state = {
      wordsByLines: []
    };
    return _this;
  }

  vx_text_es_createClass(Text, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateWordsByLines(this.props, true);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var needCalculate = this.props.children !== nextProps.children || this.props.style !== nextProps.style;
      this.updateWordsByLines(nextProps, needCalculate);
    }
  }, {
    key: 'updateWordsByLines',
    value: function updateWordsByLines(props, needCalculate) {
      // Only perform calculations if using features that require them (multiline, scaleToFit)
      if (props.width || props.scaleToFit) {
        if (needCalculate) {
          var words = props.children ? props.children.toString().split(/\s+/) : [];

          this.wordsWithComputedWidth = words.map(function (word) {
            return {
              word: word,
              width: getStringWidth$1(word, props.style)
            };
          });
          this.spaceWidth = getStringWidth$1('\xA0', props.style);
        }

        var wordsByLines = this.calculateWordsByLines(this.wordsWithComputedWidth, this.spaceWidth, props.width);
        this.setState({ wordsByLines: wordsByLines });
      } else {
        this.updateWordsWithoutCalculate(props);
      }
    }
  }, {
    key: 'updateWordsWithoutCalculate',
    value: function updateWordsWithoutCalculate(props) {
      var words = props.children ? props.children.toString().split(/\s+/) : [];
      this.setState({ wordsByLines: [{ words: words }] });
    }
  }, {
    key: 'calculateWordsByLines',
    value: function calculateWordsByLines(wordsWithComputedWidth, spaceWidth, lineWidth) {
      var scaleToFit = this.props.scaleToFit;

      return wordsWithComputedWidth.reduce(function (result, _ref) {
        var word = _ref.word,
            width = _ref.width;

        var currentLine = result[result.length - 1];

        if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < lineWidth)) {
          // Word can be added to an existing line
          currentLine.words.push(word);
          currentLine.width += width + spaceWidth;
        } else {
          // Add first word to line or word is too long to scaleToFit on existing line
          var newLine = { words: [word], width: width };
          result.push(newLine);
        }

        return result;
      }, []);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dx = _props.dx,
          dy = _props.dy,
          textAnchor = _props.textAnchor,
          verticalAnchor = _props.verticalAnchor,
          scaleToFit = _props.scaleToFit,
          angle = _props.angle,
          lineHeight = _props.lineHeight,
          capHeight = _props.capHeight,
          innerRef = _props.innerRef,
          textProps = vx_text_es_objectWithoutProperties(_props, ['dx', 'dy', 'textAnchor', 'verticalAnchor', 'scaleToFit', 'angle', 'lineHeight', 'capHeight', 'innerRef']);
      var wordsByLines = this.state.wordsByLines;
      var x = textProps.x,
          y = textProps.y;


      var startDy = void 0;
      switch (verticalAnchor) {
        case 'start':
          startDy = reduce_css_calc_default()('calc(' + capHeight + ')');
          break;
        case 'middle':
          startDy = reduce_css_calc_default()('calc(' + (wordsByLines.length - 1) / 2 + ' * -' + lineHeight + ' + (' + capHeight + ' / 2))');
          break;
        default:
          startDy = reduce_css_calc_default()('calc(' + (wordsByLines.length - 1) + ' * -' + lineHeight + ')');
          break;
      }

      var transforms = [];
      if (scaleToFit && wordsByLines.length) {
        var lineWidth = wordsByLines[0].width;
        var sx = this.props.width / lineWidth;
        var sy = sx;
        var originX = x - sx * x;
        var originY = y - sy * y;
        transforms.push('matrix(' + sx + ', 0, 0, ' + sy + ', ' + originX + ', ' + originY + ')');
      }
      if (angle) {
        transforms.push('rotate(' + angle + ', ' + x + ', ' + y + ')');
      }
      if (transforms.length) {
        textProps.transform = transforms.join(' ');
      }

      return react.createElement(
        'svg',
        {
          ref: innerRef,
          x: dx,
          y: dy,
          fontSize: textProps.fontSize,
          style: { overflow: 'visible' }
        },
        react.createElement(
          'text',
          vx_text_es_extends({}, textProps, { textAnchor: textAnchor }),
          wordsByLines.map(function (line, index) {
            return react.createElement(
              'tspan',
              { x: x, dy: index === 0 ? startDy : lineHeight, key: index },
              line.words.join(' ')
            );
          })
        )
      );
    }
  }]);
  return Text;
}(react.Component);

Text.defaultProps = {
  x: 0,
  y: 0,
  dx: 0,
  dy: 0,
  lineHeight: '1em',
  capHeight: '0.71em', // Magic number from d3
  scaleToFit: false,
  textAnchor: 'start',
  verticalAnchor: 'end' // default SVG behavior
};

Text.propTypes = {
  scaleToFit: (prop_types_default()).bool,
  angle: (prop_types_default()).number,
  textAnchor: prop_types_default().oneOf(['start', 'middle', 'end', 'inherit']),
  verticalAnchor: prop_types_default().oneOf(['start', 'middle', 'end']),
  style: (prop_types_default()).object,
  innerRef: (prop_types_default()).func,
  x: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  y: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  dx: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  dy: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  lineHeight: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  capHeight: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string])
};



;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/node_modules/@vx/axis/dist/vx-axis.es.js








function center(scale) {
  var offset = scale.bandwidth() / 2;
  if (scale.round()) offset = Math.round(offset);
  return function (d) {
    return scale(d) + offset;
  };
}

function vx_axis_es_identity(x) {
  return x;
}

var ORIENT = {
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom'
};

function labelTransform(_ref) {
  var labelOffset = _ref.labelOffset,
      labelProps = _ref.labelProps,
      orientation = _ref.orientation,
      range = _ref.range,
      tickLabelFontSize = _ref.tickLabelFontSize,
      tickLength = _ref.tickLength;

  var sign = orientation === ORIENT.left || orientation === ORIENT.top ? -1 : 1;

  var x = void 0;
  var y = void 0;
  var transform = null;

  if (orientation === ORIENT.top || orientation === ORIENT.bottom) {
    x = (range[0] + range[range.length - 1]) / 2;
    y = sign * (tickLength + labelOffset + tickLabelFontSize + (orientation === ORIENT.bottom ? labelProps.fontSize : 0));
  } else {
    x = sign * ((range[0] + range[range.length - 1]) / 2);
    y = -(tickLength + labelOffset);
    transform = 'rotate(' + sign * 90 + ')';
  }

  return { x: x, y: y, transform: transform };
}

var vx_axis_es_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var vx_axis_es_propTypes = {
  axisClassName: (prop_types_default()).string,
  axisLineClassName: (prop_types_default()).string,
  hideAxisLine: (prop_types_default()).bool,
  hideTicks: (prop_types_default()).bool,
  hideZero: (prop_types_default()).bool,
  label: (prop_types_default()).string,
  labelClassName: (prop_types_default()).string,
  labelOffset: (prop_types_default()).number,
  labelProps: (prop_types_default()).object,
  left: (prop_types_default()).number,
  numTicks: (prop_types_default()).number,
  orientation: prop_types_default().oneOf([ORIENT.top, ORIENT.right, ORIENT.bottom, ORIENT.left]),
  rangePadding: (prop_types_default()).number,
  scale: (prop_types_default()).func.isRequired,
  stroke: (prop_types_default()).string,
  strokeWidth: (prop_types_default()).number,
  strokeDasharray: (prop_types_default()).string,
  tickClassName: (prop_types_default()).string,
  tickFormat: (prop_types_default()).func,
  tickLabelProps: (prop_types_default()).func,
  tickLength: (prop_types_default()).number,
  tickStroke: (prop_types_default()).string,
  tickTransform: (prop_types_default()).string,
  tickValues: (prop_types_default()).array,
  tickComponent: (prop_types_default()).func,
  top: (prop_types_default()).number,
  children: (prop_types_default()).func
};

function Axis(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      _ref$hideAxisLine = _ref.hideAxisLine,
      hideAxisLine = _ref$hideAxisLine === undefined ? false : _ref$hideAxisLine,
      _ref$hideTicks = _ref.hideTicks,
      hideTicks = _ref$hideTicks === undefined ? false : _ref$hideTicks,
      _ref$hideZero = _ref.hideZero,
      hideZero = _ref$hideZero === undefined ? false : _ref$hideZero,
      _ref$label = _ref.label,
      label = _ref$label === undefined ? '' : _ref$label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 14 : _ref$labelOffset,
      _ref$labelProps = _ref.labelProps,
      labelProps = _ref$labelProps === undefined ? {
    textAnchor: 'middle',
    fontFamily: 'Arial',
    fontSize: 10,
    fill: 'black'
  } : _ref$labelProps,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      _ref$numTicks = _ref.numTicks,
      numTicks = _ref$numTicks === undefined ? 10 : _ref$numTicks,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === undefined ? ORIENT.bottom : _ref$orientation,
      _ref$rangePadding = _ref.rangePadding,
      rangePadding = _ref$rangePadding === undefined ? 0 : _ref$rangePadding,
      scale = _ref.scale,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (tickValue, index) {
    return {
      textAnchor: 'middle',
      fontFamily: 'Arial',
      fontSize: 10,
      fill: 'black'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      _ref$tickStroke = _ref.tickStroke,
      tickStroke = _ref$tickStroke === undefined ? 'black' : _ref$tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      tickComponent = _ref.tickComponent,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top;

  var values = scale.ticks ? scale.ticks(numTicks) : scale.domain();
  if (tickValues) values = tickValues;
  var format = scale.tickFormat ? scale.tickFormat() : vx_axis_es_identity;
  if (tickFormat) format = tickFormat;

  var range = scale.range();
  var range0 = range[0] + 0.5 - rangePadding;
  var range1 = range[range.length - 1] + 0.5 + rangePadding;

  var horizontal = orientation !== ORIENT.left && orientation !== ORIENT.right;
  var isLeft = orientation === ORIENT.left;
  var isTop = orientation === ORIENT.top;
  var tickSign = isLeft || isTop ? -1 : 1;

  var position = (scale.bandwidth ? center : vx_axis_es_identity)(scale.copy());

  var axisFromPoint = new Point({
    x: horizontal ? range0 : 0,
    y: horizontal ? 0 : range0
  });
  var axisToPoint = new Point({
    x: horizontal ? range1 : 0,
    y: horizontal ? 0 : range1
  });

  var tickLabelFontSize = 10; // track the max tick label size to compute label offset

  if (!!children) {
    return react.createElement(
      Group,
      { className: classnames_default()('vx-axis', axisClassName), top: top, left: left },
      children({
        axisFromPoint: axisFromPoint,
        axisToPoint: axisToPoint,
        horizontal: horizontal,
        tickSign: tickSign,
        numTicks: numTicks,
        label: label,
        rangePadding: rangePadding,
        tickLength: tickLength,
        tickFormat: format,
        tickPosition: position,
        ticks: values.map(function (value, index) {
          var from = new Point({
            x: horizontal ? position(value) : 0,
            y: horizontal ? 0 : position(value)
          });
          var to = new Point({
            x: horizontal ? position(value) : tickSign * tickLength,
            y: horizontal ? tickLength * tickSign : position(value)
          });
          return {
            value: value,
            index: index,
            from: from,
            to: to,
            formattedValue: format(value, index)
          };
        })
      })
    );
  }

  return react.createElement(
    Group,
    { className: classnames_default()('vx-axis', axisClassName), top: top, left: left },
    values.map(function (val, index) {
      if (hideZero && val === 0) return null;

      var tickFromPoint = new Point({
        x: horizontal ? position(val) : 0,
        y: horizontal ? 0 : position(val)
      });
      var tickToPoint = new Point({
        x: horizontal ? position(val) : tickSign * tickLength,
        y: horizontal ? tickLength * tickSign : position(val)
      });

      var tickLabelPropsObj = tickLabelProps(val, index);
      tickLabelFontSize = Math.max(tickLabelFontSize, tickLabelPropsObj.fontSize || 0);

      return react.createElement(
        Group,
        {
          key: 'vx-tick-' + val + '-' + index,
          className: classnames_default()('vx-axis-tick', tickClassName),
          transform: tickTransform
        },
        !hideTicks && react.createElement(Line, { from: tickFromPoint, to: tickToPoint, stroke: tickStroke }),
        tickComponent ? tickComponent(vx_axis_es_extends({
          x: tickToPoint.x,
          y: tickToPoint.y + (horizontal && !isTop ? tickLabelFontSize : 0),
          formattedValue: format(val, index)
        }, tickLabelPropsObj)) : react.createElement(
          Text,
          vx_axis_es_extends({
            x: tickToPoint.x,
            y: tickToPoint.y + (horizontal && !isTop ? tickLabelFontSize : 0)
          }, tickLabelPropsObj),
          format(val, index)
        )
      );
    }),
    !hideAxisLine && react.createElement(Line, {
      className: classnames_default()('vx-axis-line', axisLineClassName),
      from: axisFromPoint,
      to: axisToPoint,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray
    }),
    label && react.createElement(
      Text,
      vx_axis_es_extends({
        className: classnames_default()('vx-axis-label', labelClassName)
      }, labelTransform({
        labelOffset: labelOffset,
        labelProps: labelProps,
        orientation: orientation,
        range: range,
        tickLabelFontSize: tickLabelFontSize,
        tickLength: tickLength
      }), labelProps),
      label
    )
  );
}

Axis.propTypes = vx_axis_es_propTypes;

var propTypes$1 = {
  axisClassName: (prop_types_default()).string,
  axisLineClassName: (prop_types_default()).string,
  hideAxisLine: (prop_types_default()).bool,
  hideTicks: (prop_types_default()).bool,
  hideZero: (prop_types_default()).bool,
  label: (prop_types_default()).string,
  labelClassName: (prop_types_default()).string,
  labelOffset: (prop_types_default()).number,
  labelProps: (prop_types_default()).object,
  left: (prop_types_default()).number,
  numTicks: (prop_types_default()).number,
  rangePadding: (prop_types_default()).number,
  scale: (prop_types_default()).func.isRequired,
  stroke: (prop_types_default()).string,
  strokeWidth: (prop_types_default()).number,
  strokeDasharray: (prop_types_default()).string,
  tickClassName: (prop_types_default()).string,
  tickFormat: (prop_types_default()).func,
  tickLabelProps: (prop_types_default()).func,
  tickLength: (prop_types_default()).number,
  tickStroke: (prop_types_default()).string,
  tickTransform: (prop_types_default()).string,
  tickValues: (prop_types_default()).array,
  tickComponent: (prop_types_default()).func,
  top: (prop_types_default()).number,
  children: (prop_types_default()).func
};

function AxisLeft(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      hideAxisLine = _ref.hideAxisLine,
      hideTicks = _ref.hideTicks,
      hideZero = _ref.hideZero,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 36 : _ref$labelOffset,
      labelProps = _ref.labelProps,
      left = _ref.left,
      numTicks = _ref.numTicks,
      rangePadding = _ref.rangePadding,
      scale = _ref.scale,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (_ref2) {
    var tick = _ref2.tick,
        index = _ref2.index;
    return {
      dx: '-0.25em',
      dy: '0.25em',
      fill: 'black',
      fontFamily: 'Arial',
      fontSize: 10,
      textAnchor: 'end'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      tickStroke = _ref.tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      tickComponent = _ref.tickComponent,
      top = _ref.top;

  return react.createElement(Axis, {
    axisClassName: classnames_default()('vx-axis-left', axisClassName),
    axisLineClassName: axisLineClassName,
    hideAxisLine: hideAxisLine,
    hideTicks: hideTicks,
    hideZero: hideZero,
    label: label,
    labelClassName: labelClassName,
    labelOffset: labelOffset,
    labelProps: labelProps,
    left: left,
    numTicks: numTicks,
    orientation: ORIENT.left,
    rangePadding: rangePadding,
    scale: scale,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    tickClassName: tickClassName,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickLength,
    tickStroke: tickStroke,
    tickTransform: tickTransform,
    tickValues: tickValues,
    tickComponent: tickComponent,
    top: top,
    children: children
  });
}

AxisLeft.propTypes = propTypes$1;

var propTypes$2 = {
  axisClassName: (prop_types_default()).string,
  axisLineClassName: (prop_types_default()).string,
  hideAxisLine: (prop_types_default()).bool,
  hideTicks: (prop_types_default()).bool,
  hideZero: (prop_types_default()).bool,
  label: (prop_types_default()).string,
  labelClassName: (prop_types_default()).string,
  labelOffset: (prop_types_default()).number,
  labelProps: (prop_types_default()).object,
  left: (prop_types_default()).number,
  numTicks: (prop_types_default()).number,
  rangePadding: (prop_types_default()).number,
  scale: (prop_types_default()).func.isRequired,
  stroke: (prop_types_default()).string,
  strokeWidth: (prop_types_default()).number,
  strokeDasharray: (prop_types_default()).string,
  tickClassName: (prop_types_default()).string,
  tickFormat: (prop_types_default()).func,
  tickLabelProps: (prop_types_default()).func,
  tickLength: (prop_types_default()).number,
  tickStroke: (prop_types_default()).string,
  tickTransform: (prop_types_default()).string,
  tickValues: (prop_types_default()).array,
  tickComponent: (prop_types_default()).func,
  top: (prop_types_default()).number,
  children: (prop_types_default()).func
};

function AxisRight(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      hideAxisLine = _ref.hideAxisLine,
      hideTicks = _ref.hideTicks,
      hideZero = _ref.hideZero,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 36 : _ref$labelOffset,
      labelProps = _ref.labelProps,
      left = _ref.left,
      numTicks = _ref.numTicks,
      rangePadding = _ref.rangePadding,
      scale = _ref.scale,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (_ref2) {
    var tick = _ref2.tick,
        index = _ref2.index;
    return {
      dx: '0.25em',
      dy: '0.25em',
      fill: 'black',
      fontFamily: 'Arial',
      fontSize: 10,
      textAnchor: 'start'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      tickStroke = _ref.tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      tickComponent = _ref.tickComponent,
      top = _ref.top;

  return react.createElement(Axis, {
    axisClassName: classnames_default()('vx-axis-right', axisClassName),
    axisLineClassName: axisLineClassName,
    hideAxisLine: hideAxisLine,
    hideTicks: hideTicks,
    hideZero: hideZero,
    label: label,
    labelClassName: labelClassName,
    labelOffset: labelOffset,
    labelProps: labelProps,
    left: left,
    numTicks: numTicks,
    orientation: ORIENT.right,
    rangePadding: rangePadding,
    scale: scale,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    tickClassName: tickClassName,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickLength,
    tickStroke: tickStroke,
    tickTransform: tickTransform,
    tickValues: tickValues,
    tickComponent: tickComponent,
    top: top,
    children: children
  });
}

AxisRight.propTypes = propTypes$2;

var propTypes$3 = {
  axisClassName: (prop_types_default()).string,
  axisLineClassName: (prop_types_default()).string,
  hideAxisLine: (prop_types_default()).bool,
  hideTicks: (prop_types_default()).bool,
  hideZero: (prop_types_default()).bool,
  label: (prop_types_default()).string,
  labelClassName: (prop_types_default()).string,
  labelOffset: (prop_types_default()).number,
  labelProps: (prop_types_default()).object,
  left: (prop_types_default()).number,
  numTicks: (prop_types_default()).number,
  rangePadding: (prop_types_default()).number,
  scale: (prop_types_default()).func.isRequired,
  stroke: (prop_types_default()).string,
  strokeWidth: (prop_types_default()).number,
  strokeDasharray: (prop_types_default()).string,
  tickClassName: (prop_types_default()).string,
  tickFormat: (prop_types_default()).func,
  tickLabelProps: (prop_types_default()).func,
  tickLength: (prop_types_default()).number,
  tickStroke: (prop_types_default()).string,
  tickTransform: (prop_types_default()).string,
  tickValues: (prop_types_default()).array,
  tickComponent: (prop_types_default()).func,
  top: (prop_types_default()).number,
  children: (prop_types_default()).func
};

function AxisTop(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      hideAxisLine = _ref.hideAxisLine,
      hideTicks = _ref.hideTicks,
      hideZero = _ref.hideZero,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 8 : _ref$labelOffset,
      labelProps = _ref.labelProps,
      left = _ref.left,
      numTicks = _ref.numTicks,
      rangePadding = _ref.rangePadding,
      scale = _ref.scale,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (_ref2) {
    var tick = _ref2.tick,
        index = _ref2.index;
    return {
      dy: '-0.25em',
      fill: 'black',
      fontFamily: 'Arial',
      fontSize: 10,
      textAnchor: 'middle'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      tickStroke = _ref.tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      tickComponent = _ref.tickComponent,
      top = _ref.top;

  return react.createElement(Axis, {
    axisClassName: classnames_default()('vx-axis-top', axisClassName),
    axisLineClassName: axisLineClassName,
    hideAxisLine: hideAxisLine,
    hideTicks: hideTicks,
    hideZero: hideZero,
    label: label,
    labelClassName: labelClassName,
    labelOffset: labelOffset,
    labelProps: labelProps,
    left: left,
    numTicks: numTicks,
    orientation: ORIENT.top,
    rangePadding: rangePadding,
    scale: scale,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    tickClassName: tickClassName,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickLength,
    tickStroke: tickStroke,
    tickTransform: tickTransform,
    tickValues: tickValues,
    tickComponent: tickComponent,
    top: top,
    children: children
  });
}

AxisTop.propTypes = propTypes$3;

var propTypes$4 = {
  axisClassName: (prop_types_default()).string,
  axisLineClassName: (prop_types_default()).string,
  hideAxisLine: (prop_types_default()).bool,
  hideTicks: (prop_types_default()).bool,
  hideZero: (prop_types_default()).bool,
  label: (prop_types_default()).string,
  labelClassName: (prop_types_default()).string,
  labelOffset: (prop_types_default()).number,
  labelProps: (prop_types_default()).object,
  left: (prop_types_default()).number,
  numTicks: (prop_types_default()).number,
  rangePadding: (prop_types_default()).number,
  scale: (prop_types_default()).func.isRequired,
  stroke: (prop_types_default()).string,
  strokeWidth: (prop_types_default()).number,
  strokeDasharray: (prop_types_default()).string,
  tickClassName: (prop_types_default()).string,
  tickFormat: (prop_types_default()).func,
  tickLabelProps: (prop_types_default()).func,
  tickLength: (prop_types_default()).number,
  tickStroke: (prop_types_default()).string,
  tickTransform: (prop_types_default()).string,
  tickValues: (prop_types_default()).array,
  tickComponent: (prop_types_default()).func,
  top: (prop_types_default()).number,
  children: (prop_types_default()).func
};

function AxisBottom(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      hideAxisLine = _ref.hideAxisLine,
      hideTicks = _ref.hideTicks,
      hideZero = _ref.hideZero,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 8 : _ref$labelOffset,
      labelProps = _ref.labelProps,
      left = _ref.left,
      numTicks = _ref.numTicks,
      rangePadding = _ref.rangePadding,
      scale = _ref.scale,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (_ref2) {
    var tick = _ref2.tick,
        index = _ref2.index;
    return {
      dy: '0.25em',
      fill: 'black',
      fontFamily: 'Arial',
      fontSize: 10,
      textAnchor: 'middle'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      tickStroke = _ref.tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      tickComponent = _ref.tickComponent,
      top = _ref.top;

  return react.createElement(Axis, {
    axisClassName: classnames_default()('vx-axis-bottom', axisClassName),
    axisLineClassName: axisLineClassName,
    hideAxisLine: hideAxisLine,
    hideTicks: hideTicks,
    hideZero: hideZero,
    label: label,
    labelClassName: labelClassName,
    labelOffset: labelOffset,
    labelProps: labelProps,
    left: left,
    numTicks: numTicks,
    orientation: ORIENT.bottom,
    rangePadding: rangePadding,
    scale: scale,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    tickClassName: tickClassName,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickLength,
    tickStroke: tickStroke,
    tickTransform: tickTransform,
    tickValues: tickValues,
    tickComponent: tickComponent,
    top: top,
    children: children
  });
}

AxisBottom.propTypes = propTypes$4;



;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/axis/XAxis.js




var XAxis_propTypes = {
  axisStyles: axisStylesShape,
  label: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).element]),
  labelProps: (prop_types_default()).object,
  // eslint-disable-line react/forbid-prop-types
  numTicks: (prop_types_default()).number,
  orientation: prop_types_default().oneOf(['bottom', 'top']),
  tickStyles: tickStylesShape,
  tickLabelProps: (prop_types_default()).func,
  tickFormat: (prop_types_default()).func,
  tickValues: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string])),
  // probably injected by parent
  top: (prop_types_default()).number,
  left: (prop_types_default()).number,
  scale: (prop_types_default()).func
};
var XAxis_defaultProps = {
  axisStyles: {},
  label: null,
  labelProps: null,
  left: 0,
  numTicks: null,
  orientation: 'bottom',
  scale: null,
  tickFormat: null,
  tickLabelProps: undefined,
  tickStyles: {},
  top: 0,
  tickValues: undefined
};
function XAxis(_ref) {
  var axisStyles = _ref.axisStyles,
      label = _ref.label,
      labelProps = _ref.labelProps,
      top = _ref.top,
      left = _ref.left,
      numTicks = _ref.numTicks,
      orientation = _ref.orientation,
      scale = _ref.scale,
      tickFormat = _ref.tickFormat,
      passedTickLabelProps = _ref.tickLabelProps,
      tickStyles = _ref.tickStyles,
      tickValues = _ref.tickValues;
  if (!scale) return null;
  var Axis = orientation === 'bottom' ? AxisBottom : AxisTop;
  var tickLabelProps = passedTickLabelProps;

  if (!tickLabelProps) {
    tickLabelProps = tickStyles.label && tickStyles.label[orientation] ? function () {
      return tickStyles.label[orientation];
    } : undefined;
  }

  return react.createElement(Axis, {
    top: top,
    left: left,
    hideTicks: false,
    hideZero: false,
    label: label,
    labelProps: labelProps || (axisStyles.label || {})[orientation],
    numTicks: numTicks,
    scale: scale,
    stroke: axisStyles.stroke,
    strokeWidth: axisStyles.strokeWidth,
    tickFormat: tickFormat,
    tickLength: tickStyles.tickLength,
    tickLabelProps: tickLabelProps,
    tickStroke: tickStyles.stroke,
    tickValues: tickValues
  });
}
XAxis.propTypes = XAxis_propTypes;
XAxis.defaultProps = XAxis_defaultProps;
XAxis.displayName = 'XAxis';
;// CONCATENATED MODULE: ./node_modules/@data-ui/histogram/esm/axis/YAxis.js




var YAxis_propTypes = {
  axisStyles: axisStylesShape,
  label: (prop_types_default()).string,
  labelProps: (prop_types_default()).object,
  // eslint-disable-line react/forbid-prop-types
  numTicks: (prop_types_default()).number,
  orientation: prop_types_default().oneOf(['left', 'right']),
  tickStyles: tickStylesShape,
  tickLabelProps: (prop_types_default()).func,
  tickFormat: (prop_types_default()).func,
  tickValues: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string])),
  // probably injected by parent
  top: (prop_types_default()).number,
  left: (prop_types_default()).number,
  scale: (prop_types_default()).func
};
var YAxis_defaultProps = {
  axisStyles: {},
  label: null,
  labelProps: null,
  left: 0,
  numTicks: 5,
  orientation: 'left',
  scale: null,
  tickFormat: null,
  tickLabelProps: undefined,
  tickStyles: {},
  tickValues: undefined,
  top: 0
};
function YAxis(_ref) {
  var axisStyles = _ref.axisStyles,
      label = _ref.label,
      labelProps = _ref.labelProps,
      top = _ref.top,
      left = _ref.left,
      numTicks = _ref.numTicks,
      orientation = _ref.orientation,
      scale = _ref.scale,
      tickFormat = _ref.tickFormat,
      passedTickLabelProps = _ref.tickLabelProps,
      tickStyles = _ref.tickStyles,
      tickValues = _ref.tickValues;
  if (!scale) return null;
  var Axis = orientation === 'left' ? AxisLeft : AxisRight;
  var tickLabelProps = passedTickLabelProps;

  if (!tickLabelProps) {
    tickLabelProps = tickStyles.label && tickStyles.label[orientation] ? function () {
      return tickStyles.label[orientation];
    } : undefined;
  }

  return react.createElement(Axis, {
    top: top,
    left: left,
    hideTicks: false,
    hideZero: false,
    label: label,
    labelProps: labelProps || (axisStyles.label || {})[orientation],
    numTicks: numTicks,
    scale: scale,
    stroke: axisStyles.stroke,
    strokeWidth: axisStyles.strokeWidth,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickStyles.tickLength,
    tickStroke: tickStyles.stroke,
    tickValues: tickValues
  });
}
YAxis.propTypes = YAxis_propTypes;
YAxis.defaultProps = YAxis_defaultProps;
YAxis.displayName = 'YAxis';
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/LegendItem.js


function LegendItem_extends() { LegendItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LegendItem_extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function LegendItem(_ref) {
  var _ref$flexDirection = _ref.flexDirection,
      flexDirection = _ref$flexDirection === void 0 ? 'row' : _ref$flexDirection,
      _ref$alignItems = _ref.alignItems,
      alignItems = _ref$alignItems === void 0 ? 'center' : _ref$alignItems,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? '0' : _ref$margin,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? 'flex' : _ref$display,
      children = _ref.children,
      restProps = _objectWithoutPropertiesLoose(_ref, ["flexDirection", "alignItems", "margin", "display", "children"]);

  return /*#__PURE__*/react.createElement("div", LegendItem_extends({
    className: "vx-legend-item",
    style: {
      display: display,
      alignItems: alignItems,
      flexDirection: flexDirection,
      margin: margin
    }
  }, restProps), children);
}
LegendItem.propTypes = {
  alignItems: (prop_types_default()).string,
  margin: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  children: (prop_types_default()).node,
  display: (prop_types_default()).string
};
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/LegendLabel.js


function LegendLabel_extends() { LegendLabel_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LegendLabel_extends.apply(this, arguments); }

function LegendLabel_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function LegendLabel(_ref) {
  var _ref$flex = _ref.flex,
      flex = _ref$flex === void 0 ? '1' : _ref$flex,
      label = _ref.label,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? '5px 0' : _ref$margin,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align,
      children = _ref.children,
      restProps = LegendLabel_objectWithoutPropertiesLoose(_ref, ["flex", "label", "margin", "align", "children"]);

  return /*#__PURE__*/react.createElement("div", LegendLabel_extends({
    className: "vx-legend-label",
    style: {
      justifyContent: align,
      display: 'flex',
      flex: flex,
      margin: margin
    }
  }, restProps), children || label);
}
LegendLabel.propTypes = {
  align: (prop_types_default()).string,
  label: (prop_types_default()).node,
  flex: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  margin: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  children: (prop_types_default()).node
};
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/shapes/Rect.js


function Rect_extends() { Rect_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Rect_extends.apply(this, arguments); }


function ShapeRect(_ref) {
  var fill = _ref.fill,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;
  return /*#__PURE__*/react.createElement("div", {
    style: Rect_extends({
      width: width,
      height: height,
      background: fill
    }, style)
  });
}
ShapeRect.propTypes = {
  fill: (prop_types_default()).string,
  width: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  height: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
};
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/group/esm/Group.js


function Group_extends() { Group_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Group_extends.apply(this, arguments); }

function Group_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Group_Group(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      transform = _ref.transform,
      className = _ref.className,
      children = _ref.children,
      innerRef = _ref.innerRef,
      restProps = Group_objectWithoutPropertiesLoose(_ref, ["top", "left", "transform", "className", "children", "innerRef"]);

  return /*#__PURE__*/react.createElement("g", Group_extends({
    ref: innerRef,
    className: classnames_default()('vx-group', className),
    transform: transform || "translate(" + left + ", " + top + ")"
  }, restProps), children);
}
Group_Group.propTypes = {
  top: (prop_types_default()).number,
  left: (prop_types_default()).number,
  transform: (prop_types_default()).string,
  className: (prop_types_default()).string,
  children: (prop_types_default()).node,
  innerRef: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func, (prop_types_default()).object])
};
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/shapes/Circle.js



function ShapeCircle(_ref) {
  var fill = _ref.fill,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;
  var cleanWidth = typeof width === 'string' || typeof width === 'undefined' ? 0 : width;
  var cleanHeight = typeof height === 'string' || typeof height === 'undefined' ? 0 : height;
  var size = Math.max(cleanWidth, cleanHeight);
  var radius = size / 2;
  return /*#__PURE__*/react.createElement("svg", {
    width: size,
    height: size
  }, /*#__PURE__*/react.createElement(Group_Group, {
    top: radius,
    left: radius
  }, /*#__PURE__*/react.createElement("circle", {
    r: radius,
    fill: fill,
    style: style
  })));
}
ShapeCircle.propTypes = {
  fill: (prop_types_default()).string,
  width: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  height: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
};
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/shapes/Line.js



function ShapeLine(_ref) {
  var fill = _ref.fill,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;
  var cleanHeight = typeof height === 'string' || typeof height === 'undefined' ? 0 : height;
  var lineThickness = typeof (style == null ? void 0 : style.strokeWidth) === 'number' ? style == null ? void 0 : style.strokeWidth : 2;
  return /*#__PURE__*/react.createElement("svg", {
    width: width,
    height: height
  }, /*#__PURE__*/react.createElement(Group_Group, {
    top: cleanHeight / 2 - lineThickness / 2
  }, /*#__PURE__*/react.createElement("line", {
    x1: 0,
    x2: width,
    y1: 0,
    y2: 0,
    stroke: fill,
    strokeWidth: lineThickness,
    style: style
  })));
}
ShapeLine.propTypes = {
  fill: (prop_types_default()).string,
  width: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  height: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
};
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/util/renderShape.js
function renderShape_extends() { renderShape_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return renderShape_extends.apply(this, arguments); }






var NO_OP = function NO_OP() {
  return undefined;
};

function renderShape(_ref) {
  var _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? 'rect' : _ref$shape,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? NO_OP : _ref$fill,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? NO_OP : _ref$size,
      width = _ref.width,
      height = _ref.height,
      label = _ref.label,
      item = _ref.item,
      itemIndex = _ref.itemIndex,
      _ref$shapeStyle = _ref.shapeStyle,
      shapeStyle = _ref$shapeStyle === void 0 ? NO_OP : _ref$shapeStyle;
  var props = {
    width: width,
    height: height,
    item: item,
    itemIndex: itemIndex,
    label: label,
    fill: fill(renderShape_extends({}, label)),
    size: size(renderShape_extends({}, label)),
    style: shapeStyle(renderShape_extends({}, label))
  };

  if (typeof shape === 'string') {
    if (shape === 'circle') {
      return /*#__PURE__*/react.createElement(ShapeCircle, props);
    }

    if (shape === 'line') {
      return /*#__PURE__*/react.createElement(ShapeLine, props);
    }

    return /*#__PURE__*/react.createElement(ShapeRect, props);
  }

  if ( /*#__PURE__*/react.isValidElement(shape)) {
    return /*#__PURE__*/react.cloneElement(shape, props);
  }

  if (shape) {
    return /*#__PURE__*/react.createElement(shape, props);
  }

  return null;
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/LegendShape.js


function LegendShape_extends() { LegendShape_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LegendShape_extends.apply(this, arguments); }




function LegendShape(_ref) {
  var _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? ShapeRect : _ref$shape,
      width = _ref.width,
      height = _ref.height,
      margin = _ref.margin,
      label = _ref.label,
      item = _ref.item,
      itemIndex = _ref.itemIndex,
      fill = _ref.fill,
      size = _ref.size,
      shapeStyle = _ref.shapeStyle;
  return /*#__PURE__*/react.createElement("div", {
    className: "vx-legend-shape",
    style: {
      display: 'flex',
      width: size ? size(LegendShape_extends({}, label)) : width,
      height: size ? size(LegendShape_extends({}, label)) : height,
      margin: margin
    }
  }, renderShape({
    shape: shape,
    item: item,
    itemIndex: itemIndex,
    label: label,
    width: width,
    height: height,
    fill: fill,
    shapeStyle: shapeStyle
  }));
}
LegendShape.propTypes = {
  itemIndex: (prop_types_default()).number.isRequired,
  margin: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  fill: (prop_types_default()).func,
  size: (prop_types_default()).func,
  shapeStyle: (prop_types_default()).func,
  width: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  height: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
};
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/util/valueOrIdentity.js
/** Returns an object's value if defined, or the object. */
function valueOrIdentity(_) {
  if (_ && typeof _ === 'object' && 'value' in _ && typeof _.value !== 'undefined') return _.value;
  return _;
}
/** Returns an object's value if defined, or the object, coerced to a string. */

function valueOrIdentityString(_) {
  return String(valueOrIdentity(_));
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/util/labelTransformFactory.js
/** Returns a function which takes a Datum and index as input, and returns a formatted label object. */
function labelTransformFactory(_ref) {
  var scale = _ref.scale,
      labelFormat = _ref.labelFormat;
  return function (d, i) {
    return {
      datum: d,
      index: i,
      text: "" + labelFormat(d, i),
      // @ts-ignore
      value: scale(d)
    };
  };
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/index.js


function Legend_extends() { Legend_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Legend_extends.apply(this, arguments); }

function Legend_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var defaultStyle = {
  display: 'flex'
};
function Legend(_ref) {
  var className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? defaultStyle : _ref$style,
      scale = _ref.scale,
      shape = _ref.shape,
      inputDomain = _ref.domain,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? valueOrIdentityString : _ref$fill,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? valueOrIdentityString : _ref$size,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === void 0 ? valueOrIdentity : _ref$labelFormat,
      _ref$labelTransform = _ref.labelTransform,
      labelTransform = _ref$labelTransform === void 0 ? labelTransformFactory : _ref$labelTransform,
      _ref$shapeWidth = _ref.shapeWidth,
      shapeWidth = _ref$shapeWidth === void 0 ? 15 : _ref$shapeWidth,
      _ref$shapeHeight = _ref.shapeHeight,
      shapeHeight = _ref$shapeHeight === void 0 ? 15 : _ref$shapeHeight,
      _ref$shapeMargin = _ref.shapeMargin,
      shapeMargin = _ref$shapeMargin === void 0 ? '2px 4px 2px 0' : _ref$shapeMargin,
      shapeStyle = _ref.shapeStyle,
      _ref$labelAlign = _ref.labelAlign,
      labelAlign = _ref$labelAlign === void 0 ? 'left' : _ref$labelAlign,
      _ref$labelFlex = _ref.labelFlex,
      labelFlex = _ref$labelFlex === void 0 ? '1' : _ref$labelFlex,
      _ref$labelMargin = _ref.labelMargin,
      labelMargin = _ref$labelMargin === void 0 ? '0 4px' : _ref$labelMargin,
      _ref$itemMargin = _ref.itemMargin,
      itemMargin = _ref$itemMargin === void 0 ? '0' : _ref$itemMargin,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'column' : _ref$direction,
      _ref$itemDirection = _ref.itemDirection,
      itemDirection = _ref$itemDirection === void 0 ? 'row' : _ref$itemDirection,
      legendLabelProps = _ref.legendLabelProps,
      children = _ref.children,
      legendItemProps = Legend_objectWithoutPropertiesLoose(_ref, ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"]);

  // `Scale extends ScaleType` constraint is tricky
  //  could consider removing `scale` altogether in the future and making `domain: Datum[]` required
  // @ts-ignore doesn't like `.domain()`
  var domain = inputDomain || ('domain' in scale ? scale.domain() : []);
  var labelFormatter = labelTransform({
    scale: scale,
    labelFormat: labelFormat
  });
  var labels = domain.map(labelFormatter);
  if (children) return /*#__PURE__*/react.createElement(react.Fragment, null, children(labels));
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()('vx-legend', className),
    style: Legend_extends({}, style, {
      flexDirection: direction
    })
  }, labels.map(function (label, i) {
    return /*#__PURE__*/react.createElement(LegendItem, Legend_extends({
      key: "legend-" + label.text + "-" + i,
      margin: itemMargin,
      flexDirection: itemDirection
    }, legendItemProps), /*#__PURE__*/react.createElement(LegendShape, {
      shape: shape,
      height: shapeHeight,
      width: shapeWidth,
      margin: shapeMargin,
      item: domain[i],
      itemIndex: i,
      label: label,
      fill: fill,
      size: size,
      shapeStyle: shapeStyle
    }), /*#__PURE__*/react.createElement(LegendLabel, Legend_extends({
      label: label.text,
      flex: labelFlex,
      margin: labelMargin,
      align: labelAlign
    }, legendLabelProps)));
  }));
}
Legend.propTypes = {
  children: (prop_types_default()).func,
  className: (prop_types_default()).string,
  domain: (prop_types_default()).array,
  shapeWidth: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  shapeHeight: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  shapeMargin: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  labelAlign: (prop_types_default()).string,
  labelFlex: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  labelMargin: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  itemMargin: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  fill: (prop_types_default()).func,
  size: (prop_types_default()).func,
  shapeStyle: (prop_types_default()).func
};
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Ordinal.js



/** Ordinal scales map from strings to an Output type. */
function Ordinal(props) {
  return /*#__PURE__*/react.createElement(Legend, props);
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/array.js
var src_array_array = Array.prototype;

var d3_scale_src_array_map = src_array_array.map;
var d3_scale_src_array_slice = src_array_array.slice;

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js
function src_init_initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function src_init_initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.interpolator(domain); break;
    default: this.interpolator(interpolator).domain(domain); break;
  }
  return this;
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/ordinal.js




var src_ordinal_implicit = {name: "implicit"};

function d3_scale_src_ordinal_ordinal() {
  var index = (0,d3_collection_src/* map */.UI)(),
      domain = [],
      range = [],
      unknown = src_ordinal_implicit;

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== src_ordinal_implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = (0,d3_collection_src/* map */.UI)();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = d3_scale_src_array_slice.call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return d3_scale_src_ordinal_ordinal(domain, range).unknown(unknown);
  };

  src_init_initRange.apply(scale, arguments);

  return scale;
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/band.js




function src_band_band() {
  var scale = ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = sequence(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return src_band_band(domain(), range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return initRange.apply(rescale(), arguments);
}

function src_band_pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return src_band_pointish(copy());
  };

  return scale;
}

function src_band_point() {
  return src_band_pointish(src_band_band.apply(null, arguments).paddingInner(1));
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/continuous.js






var src_continuous_unit = (/* unused pure expression or super */ null && ([0, 1]));

function src_continuous_identity(x) {
  return x;
}

function continuous_normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constant(isNaN(b) ? NaN : 0.5);
}

function continuous_clamper(domain) {
  var a = domain[0], b = domain[domain.length - 1], t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function src_continuous_bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = continuous_normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = continuous_normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function src_continuous_polymap(domain, range, interpolate) {
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
    d[i] = continuous_normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisect(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function d3_scale_src_continuous_copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function src_continuous_transformer() {
  var domain = src_continuous_unit,
      range = src_continuous_unit,
      interpolate = interpolateValue,
      transform,
      untransform,
      unknown,
      clamp = src_continuous_identity,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? src_continuous_polymap : src_continuous_bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = map.call(_, number), clamp === src_continuous_identity || (clamp = continuous_clamper(domain)), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = slice.call(_), interpolate = interpolateRound, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? continuous_clamper(domain) : src_continuous_identity, scale) : clamp !== src_continuous_identity;
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

function d3_scale_src_continuous_continuous(transform, untransform) {
  return src_continuous_transformer()(transform, untransform);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/tickFormat.js



/* harmony default export */ function node_modules_d3_scale_src_tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/linear.js





function d3_scale_src_linear_linearish(scale) {
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

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = tickIncrement(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = tickIncrement(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = tickIncrement(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function src_linear_linear() {
  var scale = continuous(identity, identity);

  scale.copy = function() {
    return copy(scale, src_linear_linear());
  };

  initRange.apply(scale, arguments);

  return d3_scale_src_linear_linearish(scale);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/identity.js




function d3_scale_src_identity_identity(domain) {
  var unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = map.call(_, number), scale) : domain.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return d3_scale_src_identity_identity(domain).unknown(unknown);
  };

  domain = arguments.length ? map.call(domain, number) : [0, 1];

  return linearish(scale);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/log.js






function log_transformLog(x) {
  return Math.log(x);
}

function log_transformExp(x) {
  return Math.exp(x);
}

function log_transformLogn(x) {
  return -Math.log(-x);
}

function log_transformExpn(x) {
  return -Math.exp(-x);
}

function src_log_pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function src_log_powp(base) {
  return base === 10 ? src_log_pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function src_log_logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function src_log_reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function src_log_loggish(transform) {
  var scale = transform(log_transformLog, log_transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = src_log_logp(base), pows = src_log_powp(base);
    if (domain()[0] < 0) {
      logs = src_log_reflect(logs), pows = src_log_reflect(pows);
      transform(log_transformLogn, log_transformExpn);
    } else {
      transform(log_transformLog, log_transformExp);
    }
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = format(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(nice(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  return scale;
}

function src_log_log() {
  var scale = src_log_loggish(transformer()).domain([1, 10]);

  scale.copy = function() {
    return copy(scale, src_log_log()).base(scale.base());
  };

  initRange.apply(scale, arguments);

  return scale;
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/symlog.js




function symlog_transformSymlog(c) {
  return function(x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function symlog_transformSymexp(c) {
  return function(x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function src_symlog_symlogish(transform) {
  var c = 1, scale = transform(symlog_transformSymlog(c), symlog_transformSymexp(c));

  scale.constant = function(_) {
    return arguments.length ? transform(symlog_transformSymlog(c = +_), symlog_transformSymexp(c)) : c;
  };

  return linearish(scale);
}

function symlog_symlog() {
  var scale = src_symlog_symlogish(transformer());

  scale.copy = function() {
    return copy(scale, symlog_symlog()).constant(scale.constant());
  };

  return initRange.apply(scale, arguments);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/pow.js




function pow_transformPow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function pow_transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function pow_transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function src_pow_powish(transform) {
  var scale = transform(identity, identity),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(identity, identity)
        : exponent === 0.5 ? transform(pow_transformSqrt, pow_transformSquare)
        : transform(pow_transformPow(exponent), pow_transformPow(1 / exponent));
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return linearish(scale);
}

function src_pow_pow() {
  var scale = src_pow_powish(transformer());

  scale.copy = function() {
    return copy(scale, src_pow_pow()).exponent(scale.exponent());
  };

  initRange.apply(scale, arguments);

  return scale;
}

function src_pow_sqrt() {
  return src_pow_pow.apply(null, arguments).exponent(0.5);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/quantile.js




function src_quantile_quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = threshold(domain, i / n);
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : range[bisect(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return src_quantile_quantile()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(scale, arguments);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/quantize.js





function src_quantize_quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x <= x ? range[bisect(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = slice.call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function() {
    return domain.slice();
  };

  scale.copy = function() {
    return src_quantize_quantize()
        .domain([x0, x1])
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(linearish(scale), arguments);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/threshold.js




function d3_scale_src_threshold_threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x <= x ? range[bisect(domain, x, 0, n)] : unknown;
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return d3_scale_src_threshold_threshold()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(scale, arguments);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/time.js








var src_time_durationSecond = 1000,
    src_time_durationMinute = src_time_durationSecond * 60,
    src_time_durationHour = src_time_durationMinute * 60,
    src_time_durationDay = src_time_durationHour * 24,
    src_time_durationWeek = src_time_durationDay * 7,
    src_time_durationMonth = src_time_durationDay * 30,
    src_time_durationYear = src_time_durationDay * 365;

function src_time_date(t) {
  return new Date(t);
}

function d3_scale_src_time_number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function d3_scale_src_time_calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = continuous(identity, identity),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      src_time_durationSecond],
    [second,  5,  5 * src_time_durationSecond],
    [second, 15, 15 * src_time_durationSecond],
    [second, 30, 30 * src_time_durationSecond],
    [minute,  1,      src_time_durationMinute],
    [minute,  5,  5 * src_time_durationMinute],
    [minute, 15, 15 * src_time_durationMinute],
    [minute, 30, 30 * src_time_durationMinute],
    [  hour,  1,      src_time_durationHour  ],
    [  hour,  3,  3 * src_time_durationHour  ],
    [  hour,  6,  6 * src_time_durationHour  ],
    [  hour, 12, 12 * src_time_durationHour  ],
    [   day,  1,      src_time_durationDay   ],
    [   day,  2,  2 * src_time_durationDay   ],
    [  week,  1,      src_time_durationWeek  ],
    [ month,  1,      src_time_durationMonth ],
    [ month,  3,  3 * src_time_durationMonth ],
    [  year,  1,      src_time_durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = bisector(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = tickStep(start / src_time_durationYear, stop / src_time_durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(tickStep(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(map.call(_, d3_scale_src_time_number)) : domain().map(src_time_date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(nice(d, interval))
        : scale;
  };

  scale.copy = function() {
    return copy(scale, d3_scale_src_time_calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ function d3_scale_src_time() {
  return initRange.apply(d3_scale_src_time_calendar(timeYear, timeMonth, timeWeek, timeDay, timeHour, timeMinute, timeSecond, timeMillisecond, timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/utcTime.js





/* harmony default export */ function d3_scale_src_utcTime() {
  return initRange.apply(calendar(utcYear, utcMonth, utcWeek, utcDay, utcHour, utcMinute, utcSecond, utcMillisecond, utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/sequential.js







function src_sequential_transformer() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = identity,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function src_sequential_copy(source, target) {
  return target
      .domain(source.domain())
      .interpolator(source.interpolator())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function src_sequential_sequential() {
  var scale = linearish(src_sequential_transformer()(identity));

  scale.copy = function() {
    return src_sequential_copy(scale, src_sequential_sequential());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequential_sequentialLog() {
  var scale = loggish(src_sequential_transformer()).domain([1, 10]);

  scale.copy = function() {
    return src_sequential_copy(scale, sequential_sequentialLog()).base(scale.base());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequential_sequentialSymlog() {
  var scale = symlogish(src_sequential_transformer());

  scale.copy = function() {
    return src_sequential_copy(scale, sequential_sequentialSymlog()).constant(scale.constant());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequential_sequentialPow() {
  var scale = powish(src_sequential_transformer());

  scale.copy = function() {
    return src_sequential_copy(scale, sequential_sequentialPow()).exponent(scale.exponent());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequential_sequentialSqrt() {
  return sequential_sequentialPow.apply(null, arguments).exponent(0.5);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/sequentialQuantile.js




function sequentialQuantile_sequentialQuantile() {
  var domain = [],
      interpolator = identity;

  function scale(x) {
    if (!isNaN(x = +x)) return interpolator((bisect(domain, x) - 1) / (domain.length - 1));
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return scale;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequentialQuantile_sequentialQuantile(interpolator).domain(domain);
  };

  return initInterpolator.apply(scale, arguments);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/diverging.js








function src_diverging_transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = identity,
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (x < t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), t2 = transform(x2 = +_[2]), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1);
    return scale;
  };
}

function diverging_diverging() {
  var scale = linearish(src_diverging_transformer()(identity));

  scale.copy = function() {
    return copy(scale, diverging_diverging());
  };

  return initInterpolator.apply(scale, arguments);
}

function diverging_divergingLog() {
  var scale = loggish(src_diverging_transformer()).domain([0.1, 1, 10]);

  scale.copy = function() {
    return copy(scale, diverging_divergingLog()).base(scale.base());
  };

  return initInterpolator.apply(scale, arguments);
}

function diverging_divergingSymlog() {
  var scale = symlogish(src_diverging_transformer());

  scale.copy = function() {
    return copy(scale, diverging_divergingSymlog()).constant(scale.constant());
  };

  return initInterpolator.apply(scale, arguments);
}

function diverging_divergingPow() {
  var scale = powish(src_diverging_transformer());

  scale.copy = function() {
    return copy(scale, diverging_divergingPow()).exponent(scale.exponent());
  };

  return initInterpolator.apply(scale, arguments);
}

function diverging_divergingSqrt() {
  return diverging_divergingPow.apply(null, arguments).exponent(0.5);
}

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/index.js
































;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/scale/esm/scales/ordinal.js

function ordinalScale(_ref) {
  var range = _ref.range,
      domain = _ref.domain,
      unknown = _ref.unknown;
  var scale = d3_scale_src_ordinal_ordinal();
  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  if (unknown) scale.unknown(unknown); // @ts-ignore

  scale.type = 'ordinal';
  return scale;
}
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/CategoricalColorNamespace.js
var CategoricalColorNamespace = __webpack_require__(83527);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(91033);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/responsive/esm/components/ParentSize.js


function ParentSize_extends() { ParentSize_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ParentSize_extends.apply(this, arguments); }

function ParentSize_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ParentSize_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ParentSize = /*#__PURE__*/function (_React$Component) {
  ParentSize_inheritsLoose(ParentSize, _React$Component);

  function ParentSize() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "animationFrameID", 0);

    _defineProperty(_assertThisInitialized(_this), "resizeObserver", void 0);

    _defineProperty(_assertThisInitialized(_this), "target", null);

    _defineProperty(_assertThisInitialized(_this), "state", {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    });

    _defineProperty(_assertThisInitialized(_this), "resize", debounce_default()(function (_ref) {
      var width = _ref.width,
          height = _ref.height,
          top = _ref.top,
          left = _ref.left;

      _this.setState(function () {
        return {
          width: width,
          height: height,
          top: top,
          left: left
        };
      });
    }, _this.props.debounceTime, {
      leading: _this.props.enableDebounceLeadingCall
    }));

    _defineProperty(_assertThisInitialized(_this), "setTarget", function (ref) {
      _this.target = ref;
    });

    return _this;
  }

  var _proto = ParentSize.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.resizeObserver = new ResizeObserver_es["default"](function (entries
    /** , observer */
    ) {
      if (entries === void 0) {
        entries = [];
      }

      entries.forEach(function (entry) {
        var _entry$contentRect = entry.contentRect,
            left = _entry$contentRect.left,
            top = _entry$contentRect.top,
            width = _entry$contentRect.width,
            height = _entry$contentRect.height;
        _this2.animationFrameID = window.requestAnimationFrame(function () {
          _this2.resize({
            width: width,
            height: height,
            top: top,
            left: left
          });
        });
      });
    });
    if (this.target) this.resizeObserver.observe(this.target);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameID);
    if (this.resizeObserver) this.resizeObserver.disconnect();
    this.resize.cancel();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        debounceTime = _this$props.debounceTime,
        parentSizeStyles = _this$props.parentSizeStyles,
        enableDebounceLeadingCall = _this$props.enableDebounceLeadingCall,
        restProps = ParentSize_objectWithoutPropertiesLoose(_this$props, ["className", "children", "debounceTime", "parentSizeStyles", "enableDebounceLeadingCall"]);

    return /*#__PURE__*/react.createElement("div", ParentSize_extends({
      style: parentSizeStyles,
      ref: this.setTarget,
      className: className
    }, restProps), children(ParentSize_extends({}, this.state, {
      ref: this.target,
      resize: this.resize
    })));
  };

  return ParentSize;
}(react.Component);

_defineProperty(ParentSize, "propTypes", {
  className: (prop_types_default()).string,
  debounceTime: (prop_types_default()).number,
  enableDebounceLeadingCall: (prop_types_default()).bool,
  children: (prop_types_default()).func.isRequired
});

_defineProperty(ParentSize, "defaultProps", {
  debounceTime: 300,
  enableDebounceLeadingCall: true,
  parentSizeStyles: {
    width: '100%',
    height: '100%'
  }
});


// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/esm/WithLegend.js
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

/* eslint-disable react/sort-prop-types, react/jsx-sort-default-props */




const WithLegend_propTypes = {
  className: (prop_types_default()).string,
  width: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  height: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  renderChart: (prop_types_default()).func.isRequired,
  renderLegend: (prop_types_default()).func.isRequired,
  position: prop_types_default().oneOf(['top', 'left', 'bottom', 'right']),
  legendJustifyContent: prop_types_default().oneOf(['center', 'flex-start', 'flex-end'])
};
const WithLegend_defaultProps = {
  className: '',
  width: 'auto',
  height: 'auto',
  position: 'top',
  legendJustifyContent: undefined
};
const LEGEND_STYLE_BASE = {
  display: 'flex',
  flexGrow: 0,
  flexShrink: 0,
  order: -1,
  paddingTop: '5px',
  fontSize: '0.9em'
};
const CHART_STYLE_BASE = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'auto',
  position: 'relative'
};

class WithLegend extends react.Component {
  getContainerDirection() {
    const {
      position
    } = this.props;

    switch (position) {
      case 'left':
        return 'row';

      case 'right':
        return 'row-reverse';

      case 'bottom':
        return 'column-reverse';

      default:
      case 'top':
        return 'column';
    }
  }

  getLegendJustifyContent() {
    const {
      legendJustifyContent,
      position
    } = this.props;

    if (legendJustifyContent) {
      return legendJustifyContent;
    }

    switch (position) {
      case 'left':
        return 'flex-start';

      case 'right':
        return 'flex-start';

      case 'bottom':
        return 'flex-end';

      default:
      case 'top':
        return 'flex-end';
    }
  }

  render() {
    const {
      className,
      width,
      height,
      position,
      renderChart,
      renderLegend
    } = this.props;
    const isHorizontal = position === 'left' || position === 'right';
    const style = {
      display: 'flex',
      flexDirection: this.getContainerDirection()
    };

    if (width) {
      style.width = width;
    }

    if (height) {
      style.height = height;
    }

    const chartStyle = { ...CHART_STYLE_BASE
    };

    if (isHorizontal) {
      chartStyle.width = 0;
    } else {
      chartStyle.height = 0;
    }

    const legendDirection = isHorizontal ? 'column' : 'row';
    const legendStyle = { ...LEGEND_STYLE_BASE,
      flexDirection: legendDirection,
      justifyContent: this.getLegendJustifyContent()
    };
    const legendContainerStyle = {
      flexWrap: 'wrap',
      display: 'flex',
      flexDirection: legendDirection
    };
    return (0,emotion_react_browser_esm.jsx)("div", {
      className: `with-legend ${className}`,
      style: style
    }, (0,emotion_react_browser_esm.jsx)("div", {
      className: "legend-container",
      style: legendStyle
    }, renderLegend({
      // Pass flexDirection for @vx/legend to arrange legend items
      direction: legendDirection,
      style: legendContainerStyle
    })), (0,emotion_react_browser_esm.jsx)("div", {
      className: "main-container",
      style: chartStyle
    }, (0,emotion_react_browser_esm.jsx)(ParentSize, null, parent => parent.width > 0 && parent.height > 0 ? // Only render when necessary
    renderChart(parent) : null)));
  }

}

WithLegend.propTypes = WithLegend_propTypes;
WithLegend.defaultProps = WithLegend_defaultProps;
/* harmony default export */ const esm_WithLegend = (WithLegend);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/esm/Histogram.js
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









const Histogram_propTypes = {
  className: (prop_types_default()).string,
  data: prop_types_default().arrayOf(prop_types_default().shape({
    key: (prop_types_default()).string,
    values: prop_types_default().arrayOf((prop_types_default()).number)
  })).isRequired,
  width: (prop_types_default()).number.isRequired,
  height: (prop_types_default()).number.isRequired,
  colorScheme: (prop_types_default()).string,
  normalized: (prop_types_default()).bool,
  cumulative: (prop_types_default()).bool,
  binCount: (prop_types_default()).number,
  opacity: (prop_types_default()).number,
  xAxisLabel: (prop_types_default()).string,
  yAxisLabel: (prop_types_default()).string,
  showLegend: (prop_types_default()).bool
};
const Histogram_defaultProps = {
  binCount: 15,
  className: '',
  colorScheme: '',
  normalized: false,
  cumulative: false,
  opacity: 1,
  xAxisLabel: '',
  yAxisLabel: ''
};

class CustomHistogram extends react.PureComponent {
  render() {
    const {
      className,
      data,
      width,
      height,
      binCount,
      colorScheme,
      normalized,
      cumulative,
      opacity,
      xAxisLabel,
      yAxisLabel,
      showLegend
    } = this.props;
    const colorFn = CategoricalColorNamespace.getScale(colorScheme);
    const keys = data.map(d => d.key);
    const colorScale = ordinalScale({
      domain: keys,
      range: keys.map(x => colorFn(x))
    });
    return (0,emotion_react_browser_esm.jsx)(esm_WithLegend, {
      className: `superset-legacy-chart-histogram ${className}`,
      width: width,
      height: height,
      position: "top",
      renderLegend: ({
        direction,
        style
      }) => showLegend && (0,emotion_react_browser_esm.jsx)(Ordinal, {
        style: style,
        scale: colorScale,
        direction: direction,
        shape: "rect",
        labelMargin: "0 15px 0 0"
      }),
      renderChart: parent => (0,emotion_react_browser_esm.jsx)(chart_Histogram, {
        width: parent.width,
        height: parent.height,
        ariaLabel: "Histogram",
        normalized: normalized,
        cumulative: cumulative,
        binCount: binCount,
        binType: "numeric",
        margin: {
          top: 20,
          right: 20
        },
        renderTooltip: ({
          datum,
          color
        }) => (0,emotion_react_browser_esm.jsx)("div", null, (0,emotion_react_browser_esm.jsx)("strong", {
          style: {
            color
          }
        }, datum.bin0, " to ", datum.bin1), (0,emotion_react_browser_esm.jsx)("div", null, (0,emotion_react_browser_esm.jsx)("strong", null, (0,TranslatorSingleton.t)('count'), " "), datum.count), (0,emotion_react_browser_esm.jsx)("div", null, (0,emotion_react_browser_esm.jsx)("strong", null, (0,TranslatorSingleton.t)('cumulative'), " "), datum.cumulative), (0,emotion_react_browser_esm.jsx)("div", null, (0,emotion_react_browser_esm.jsx)("strong", null, (0,TranslatorSingleton.t)('percentile (exclusive)'), " "), `{((datum.cumulativeDensity - datum.density) * 100).toPrecision(4)}th`)),
        valueAccessor: datum => datum,
        theme: chartTheme
      }, data.map(series => (0,emotion_react_browser_esm.jsx)(series_BarSeries, {
        key: series.key,
        animated: true,
        rawData: series.values,
        fill: colorScale(series.key),
        fillOpacity: opacity
      })), (0,emotion_react_browser_esm.jsx)(XAxis, {
        label: xAxisLabel
      }), (0,emotion_react_browser_esm.jsx)(YAxis, {
        label: yAxisLabel
      }))
    });
  }

}

CustomHistogram.propTypes = Histogram_propTypes;
CustomHistogram.defaultProps = Histogram_defaultProps;
/* harmony default export */ const esm_Histogram = ((0,style/* styled */.iK)(CustomHistogram)`
  .superset-legacy-chart-histogram {
    overflow: hidden;
  }
`);

/***/ }),

/***/ 5623:
/***/ ((module) => {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ 46871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ 26488:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Module dependencies
 */
var balanced = __webpack_require__(56524)
var reduceFunctionCall = __webpack_require__(86913)
var mexp = __webpack_require__(22087)

/**
 * Constantes
 */
var MAX_STACK = 100 // should be enough for a single calc()...
var NESTED_CALC_RE = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g

/**
 * Global variables
 */
var stack

/**
 * Expose reduceCSSCalc plugin
 *
 * @type {Function}
 */
module.exports = reduceCSSCalc

/**
 * Reduce CSS calc() in a string, whenever it's possible
 *
 * @param {String} value css input
 */
function reduceCSSCalc(value, decimalPrecision) {
  stack = 0
  decimalPrecision = Math.pow(10, decimalPrecision === undefined ? 5 : decimalPrecision)

  // Allow calc() on multiple lines
  value = value.replace(/\n+/g, " ")

  /**
   * Evaluates an expression
   *
   * @param {String} expression
   * @returns {String}
   */
  function evaluateExpression (expression, functionIdentifier, call) {
    if (stack++ > MAX_STACK) {
      stack = 0
      throw new Error("Call stack overflow for " + call)
    }

    if (expression === "") {
      throw new Error(functionIdentifier + "(): '" + call + "' must contain a non-whitespace string")
    }

    expression = evaluateNestedExpression(expression, call)

    var units = getUnitsInExpression(expression)

    // If the expression contains multiple units or CSS variables,
    // then let the expression be (i.e. browser calc())
    if (units.length > 1 || expression.indexOf("var(") > -1) {
      return functionIdentifier + "(" + expression + ")"
    }

    var unit = units[0] || ""

    if (unit === "%") {
      // Convert percentages to numbers, to handle expressions like: 50% * 50% (will become: 25%):
      // console.log(expression)
      expression = expression.replace(/\b[0-9\.]+%/g, function(percent) {
        return parseFloat(percent.slice(0, -1)) * 0.01
      })
    }

    // Remove units in expression:
    var toEvaluate = expression.replace(new RegExp(unit, "gi"), "")
    var result

    try {
      result = mexp.eval(toEvaluate)
    }
    catch (e) {
      return functionIdentifier + "(" + expression + ")"
    }

    // Transform back to a percentage result:
    if (unit === "%") {
      result *= 100
    }

    // adjust rounding shit
    // (0.1 * 0.2 === 0.020000000000000004)
    if (functionIdentifier.length || unit === "%") {
      result = Math.round(result * decimalPrecision) / decimalPrecision
    }

    // Add unit
    result += unit

    return result
  }

  /**
   * Evaluates nested expressions
   *
   * @param {String} expression
   * @returns {String}
   */
  function evaluateNestedExpression(expression, call) {
    // Remove the calc part from nested expressions to ensure
    // better browser compatibility
    expression = expression.replace(/((?:\-[a-z]+\-)?calc)/g, "")
    var evaluatedPart = ""
    var nonEvaluatedPart = expression
    var matches
    while ((matches = NESTED_CALC_RE.exec(nonEvaluatedPart))) {
      if (matches[0].index > 0) {
        evaluatedPart += nonEvaluatedPart.substring(0, matches[0].index)
      }

      var balancedExpr = balanced("(", ")", nonEvaluatedPart.substring([0].index))
      if (balancedExpr.body === "") {
        throw new Error("'" + expression + "' must contain a non-whitespace string")
      }

      var evaluated = evaluateExpression(balancedExpr.body, "", call)

      evaluatedPart += balancedExpr.pre + evaluated
      nonEvaluatedPart = balancedExpr.post
    }

    return evaluatedPart + nonEvaluatedPart
  }

  return reduceFunctionCall(value, /((?:\-[a-z]+\-)?calc)\(/, evaluateExpression)
}

/**
 * Checks what units are used in an expression
 *
 * @param {String} expression
 * @returns {Array}
 */

function getUnitsInExpression(expression) {
  var uniqueUnits = []
  var uniqueLowerCaseUnits = []
  var unitRegEx = /[\.0-9]([%a-z]+)/gi
  var matches = unitRegEx.exec(expression)

  while (matches) {
    if (!matches || !matches[1]) {
      continue
    }

    if (uniqueLowerCaseUnits.indexOf(matches[1].toLowerCase()) === -1) {
      uniqueUnits.push(matches[1])
      uniqueLowerCaseUnits.push(matches[1].toLowerCase())
    }

    matches = unitRegEx.exec(expression)
  }

  return uniqueUnits
}


/***/ }),

/***/ 56524:
/***/ ((module) => {

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ 86913:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 * Module dependencies
 */
var balanced = __webpack_require__(5623)

/**
 * Expose `reduceFunctionCall`
 *
 * @type {Function}
 */
module.exports = reduceFunctionCall

/**
 * Walkthrough all expressions, evaluate them and insert them into the declaration
 *
 * @param {Array} expressions
 * @param {Object} declaration
 */

function reduceFunctionCall(string, functionRE, callback) {
  var call = string
  return getFunctionCalls(string, functionRE).reduce(function(string, obj) {
    return string.replace(obj.functionIdentifier + "(" + obj.matches.body + ")", evalFunctionCall(obj.matches.body, obj.functionIdentifier, callback, call, functionRE))
  }, string)
}

/**
 * Parses expressions in a value
 *
 * @param {String} value
 * @returns {Array}
 * @api private
 */

function getFunctionCalls(call, functionRE) {
  var expressions = []

  var fnRE = typeof functionRE === "string" ? new RegExp("\\b(" + functionRE + ")\\(") : functionRE
  do {
    var searchMatch = fnRE.exec(call)
    if (!searchMatch) {
      return expressions
    }
    if (searchMatch[1] === undefined) {
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + functionRE)
    }
    var fn = searchMatch[1]
    var startIndex = searchMatch.index
    var matches = balanced("(", ")", call.substring(startIndex))

    if (!matches || matches.start !== searchMatch[0].length - 1) {
      throw new SyntaxError(fn + "(): missing closing ')' in the value '" + call + "'")
    }

    expressions.push({matches: matches, functionIdentifier: fn})
    call = matches.post
  }
  while (fnRE.test(call))

  return expressions
}

/**
 * Evaluates an expression
 *
 * @param {String} expression
 * @returns {String}
 * @api private
 */

function evalFunctionCall (string, functionIdentifier, callback, call, functionRE) {
  // allow recursivity
  return callback(reduceFunctionCall(string, functionRE, callback), functionIdentifier, call)
}


/***/ })

}]);