"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[3720],{

/***/ 12104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 92881:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Z = localPoint;

var _point = __webpack_require__(49762);

function localPoint(node, event) {
  // called with no args
  if (!node) return;

  // called with localPoint(event)
  if (node.target) {
    event = node;

    // set node to targets owner svg
    node = event.target.ownerSVGElement;

    // find the outermost svg
    while (node.ownerSVGElement) {
      node = node.ownerSVGElement;
    }
  }

  // default to mouse event
  var _event = event,
      clientX = _event.clientX,
      clientY = _event.clientY;

  // support touch event

  if (event.changedTouches) {
    clientX = event.changedTouches[0].clientX;
    clientY = event.changedTouches[0].clientY;
  }

  // calculate coordinates from svg
  if (node.createSVGPoint) {
    var point = node.createSVGPoint();
    point.x = clientX;
    point.y = clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return new _point.Point({
      x: point.x,
      y: point.y
    });
  }

  // fallback to calculating position from non-svg dom node
  var rect = node.getBoundingClientRect();
  return new _point.Point({
    x: clientX - rect.left - node.clientLeft,
    y: clientY - rect.top - node.clientTop
  });
}

/***/ }),

/***/ 31390:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Z = LinearGradient;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinearGradient.propTypes = {
  id: _propTypes2.default.string.isRequired,
  from: _propTypes2.default.string,
  to: _propTypes2.default.string,
  x1: _propTypes2.default.string,
  y1: _propTypes2.default.string,
  y2: _propTypes2.default.string,
  fromOffset: _propTypes2.default.string,
  fromOpacity: _propTypes2.default.number,
  toOffset: _propTypes2.default.string,
  toOpacity: _propTypes2.default.number,
  rotate: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  transform: _propTypes2.default.string
};

function LinearGradient(_ref) {
  var children = _ref.children,
      id = _ref.id,
      from = _ref.from,
      to = _ref.to,
      x1 = _ref.x1,
      y1 = _ref.y1,
      x2 = _ref.x2,
      y2 = _ref.y2,
      _ref$fromOffset = _ref.fromOffset,
      fromOffset = _ref$fromOffset === undefined ? '0%' : _ref$fromOffset,
      _ref$fromOpacity = _ref.fromOpacity,
      fromOpacity = _ref$fromOpacity === undefined ? 1 : _ref$fromOpacity,
      _ref$toOffset = _ref.toOffset,
      toOffset = _ref$toOffset === undefined ? '100%' : _ref$toOffset,
      _ref$toOpacity = _ref.toOpacity,
      toOpacity = _ref$toOpacity === undefined ? 1 : _ref$toOpacity,
      rotate = _ref.rotate,
      transform = _ref.transform,
      _ref$vertical = _ref.vertical,
      vertical = _ref$vertical === undefined ? true : _ref$vertical,
      restProps = _objectWithoutProperties(_ref, ['children', 'id', 'from', 'to', 'x1', 'y1', 'x2', 'y2', 'fromOffset', 'fromOpacity', 'toOffset', 'toOpacity', 'rotate', 'transform', 'vertical']);

  if (vertical && !x1 && !x2 && !y1 && !y2) {
    x1 = '0';
    x2 = '0';
    y1 = '0';
    y2 = '1';
  }
  return _react2.default.createElement(
    'defs',
    null,
    _react2.default.createElement(
      'linearGradient',
      _extends({
        id: id,
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        gradientTransform: rotate ? 'rotate(' + rotate + ')' : transform
      }, restProps),
      !!children && children,
      !children && _react2.default.createElement('stop', { offset: fromOffset, stopColor: from, stopOpacity: fromOpacity }),
      !children && _react2.default.createElement('stop', { offset: toOffset, stopColor: to, stopOpacity: toOpacity })
    )
  );
}

/***/ }),

/***/ 49762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Point": () => (/* binding */ Point)
/* harmony export */ });
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




/***/ }),

/***/ 53720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BigNumber),
  "renderTooltipFactory": () => (/* binding */ renderTooltipFactory)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/shortid/index.js
var shortid = __webpack_require__(14670);
var shortid_default = /*#__PURE__*/__webpack_require__.n(shortid);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js
var NumberFormatterRegistrySingleton = __webpack_require__(50855);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/formatters/smartDateVerbose.js
var smartDateVerbose = __webpack_require__(47447);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/dimension/computeMaxFontSize.js
var computeMaxFontSize = __webpack_require__(84402);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/index.js + 10 modules
var color = __webpack_require__(43734);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/index.js + 50 modules
var src = __webpack_require__(86005);
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/node_modules/@vx/grid/node_modules/@vx/group/dist/vx-group.es.js



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

function vx_group_es_Group(_ref) {
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



// EXTERNAL MODULE: ./node_modules/@data-ui/xy-chart/node_modules/@vx/point/dist/vx-point.es.js
var vx_point_es = __webpack_require__(49762);
// EXTERNAL MODULE: ./node_modules/d3-path/src/index.js + 1 modules
var d3_path_src = __webpack_require__(50777);
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/node_modules/@vx/grid/node_modules/@vx/shape/dist/vx-shape.es.js









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

  var arc$$1 = (0,src.arc)();
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

  var path$$1 = (0,src.arc)();
  path$$1.innerRadius(innerRadius);
  if (outerRadius) path$$1.outerRadius(outerRadius);
  if (cornerRadius) path$$1.cornerRadius(cornerRadius);
  if (padRadius) path$$1.padRadius(padRadius);
  var pie$$1 = (0,src.pie)();
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
    vx_group_es_Group,
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
      from = _ref$from === undefined ? new vx_point_es.Point({ x: 0, y: 0 }) : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === undefined ? new vx_point_es.Point({ x: 1, y: 1 }) : _ref$to,
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
      curve = _ref$curve === undefined ? src.curveLinear : _ref$curve,
      glyph = _ref.glyph,
      innerRef = _ref.innerRef,
      restProps = vx_shape_es_objectWithoutProperties(_ref, ['children', 'data', 'xScale', 'yScale', 'x', 'y', 'defined', 'className', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeDashoffset', 'fill', 'curve', 'glyph', 'innerRef']);

  var path$$1 = (0,src.line)().x(function () {
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

  var path$$1 = (0,src.radialLine)();
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

  var path$$1 = (0,src.area)();
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

  var path$$1 = (0,src.area)().x(function () {
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

  var stack$$1 = (0,src.stack)();
  if (keys) stack$$1.keys(keys);

  var path$$1 = (0,src.area)();
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
    vx_group_es_Group,
    { className: classnames_default()('vx-bar-group', className), top: top, left: left },
    data && data.map(function (d, i) {
      return react.createElement(
        vx_group_es_Group,
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
    vx_group_es_Group,
    { className: classnames_default()('vx-bar-group-horizontal', className), top: top, left: left },
    data && data.map(function (d, i) {
      return react.createElement(
        vx_group_es_Group,
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

  var series = (0,src.stack)().keys(keys)(data);
  var format = xScale.tickFormat ? xScale.tickFormat() : function (d) {
    return d;
  };
  var xRange = xScale.range();
  var xDomain = xScale.domain();
  return react.createElement(
    vx_group_es_Group,
    { className: classnames_default()('vx-bar-stack', className), top: top, left: left },
    series && series.map(function (s, i) {
      return react.createElement(
        vx_group_es_Group,
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

  var series = (0,src.stack)().keys(keys)(data);
  var format = yScale.tickFormat ? yScale.tickFormat() : function (d) {
    return d;
  };
  var yRange = yScale.range();
  var yDomain = yScale.domain();
  return react.createElement(
    vx_group_es_Group,
    { className: classnames_default()('vx-bar-stack-horizontal', className), top: top, left: left },
    series && series.map(function (s, i) {
      return react.createElement(
        vx_group_es_Group,
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
  ascending: src.stackOrderAscending,
  descending: src.stackOrderDescending,
  insideout: src.stackOrderInsideOut,
  none: src.stackOrderNone,
  reverse: src.stackOrderReverse
};

var STACK_ORDER_NAMES = Object.keys(STACK_ORDERS);

function stackOrder(order) {
  return STACK_ORDERS[order] || STACK_ORDERS.none;
}

var STACK_OFFSETS = {
  expand: src.stackOffsetExpand,
  diverging: src.stackOffsetDiverging,
  none: src.stackOffsetNone,
  silhouette: src.stackOffsetSilhouette,
  wiggle: src.stackOffsetWiggle
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

  var stack$$1 = (0,src.stack)();
  if (keys) stack$$1.keys(keys);
  if (value) stack$$1.value(value);
  if (order) stack$$1.order(stackOrder(order));
  if (offset) stack$$1.offset(stackOffset(offset));

  var path$$1 = (0,src.area)();
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
      vx_group_es_Group,
      { top: top, left: left },
      render({ seriesData: seriesData, path: path$$1 })
    );
  }

  return react.createElement(
    vx_group_es_Group,
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
    var link = (0,src.linkHorizontal)();
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
    var link = (0,src.linkVertical)();
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
    var link = (0,src.linkRadial)();
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

  return new vx_point_es.Point({
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
      center = _ref3$center === undefined ? new vx_point_es.Point({ x: 0, y: 0 }) : _ref3$center,
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



;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/node_modules/@vx/grid/dist/vx-grid.es.js







var vx_grid_es_extends = Object.assign || function (target) {
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

var vx_grid_es_objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

Rows.propTypes = {
  top: (prop_types_default()).number,
  left: (prop_types_default()).number,
  className: (prop_types_default()).string,
  stroke: (prop_types_default()).string,
  strokeWidth: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  strokeDasharray: (prop_types_default()).string,
  numTicks: (prop_types_default()).number,
  lineStyle: (prop_types_default()).object,
  offset: (prop_types_default()).number,
  scale: (prop_types_default()).func.isRequired,
  width: (prop_types_default()).number.isRequired,
  tickValues: (prop_types_default()).array
};

function Rows(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      scale = _ref.scale,
      width = _ref.width,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? '#eaf0f6' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      className = _ref.className,
      _ref$numTicks = _ref.numTicks,
      numTicks = _ref$numTicks === undefined ? 10 : _ref$numTicks,
      lineStyle = _ref.lineStyle,
      offset = _ref.offset,
      tickValues = _ref.tickValues,
      restProps = vx_grid_es_objectWithoutProperties(_ref, ['top', 'left', 'scale', 'width', 'stroke', 'strokeWidth', 'strokeDasharray', 'className', 'numTicks', 'lineStyle', 'offset', 'tickValues']);

  var ticks = scale.ticks ? scale.ticks(numTicks) : scale.domain();
  if (tickValues) ticks = tickValues;
  return react.createElement(
    vx_group_es_Group,
    { className: classnames_default()('vx-rows', className), top: top, left: left },
    ticks.map(function (d, i) {
      var y = offset ? scale(d) + offset : scale(d);
      var fromPoint = new vx_point_es.Point({
        x: 0,
        y: y
      });
      var toPoint = new vx_point_es.Point({
        x: width,
        y: y
      });
      return react.createElement(Line, vx_grid_es_extends({
        key: 'row-line-' + d + '-' + i,
        from: fromPoint,
        to: toPoint,
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeDasharray: strokeDasharray,
        style: lineStyle
      }, restProps));
    })
  );
}

Columns.propTypes = {
  top: (prop_types_default()).number,
  left: (prop_types_default()).number,
  className: (prop_types_default()).string,
  stroke: (prop_types_default()).string,
  strokeWidth: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  strokeDasharray: (prop_types_default()).string,
  numTicks: (prop_types_default()).number,
  lineStyle: (prop_types_default()).object,
  offset: (prop_types_default()).number,
  scale: (prop_types_default()).func.isRequired,
  height: (prop_types_default()).number.isRequired,
  tickValues: (prop_types_default()).array
};

function Columns(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      scale = _ref.scale,
      height = _ref.height,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? '#eaf0f6' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      className = _ref.className,
      _ref$numTicks = _ref.numTicks,
      numTicks = _ref$numTicks === undefined ? 10 : _ref$numTicks,
      lineStyle = _ref.lineStyle,
      offset = _ref.offset,
      tickValues = _ref.tickValues,
      restProps = vx_grid_es_objectWithoutProperties(_ref, ['top', 'left', 'scale', 'height', 'stroke', 'strokeWidth', 'strokeDasharray', 'className', 'numTicks', 'lineStyle', 'offset', 'tickValues']);

  var ticks = scale.ticks ? scale.ticks(numTicks) : scale.domain();
  if (tickValues) ticks = tickValues;
  return react.createElement(
    vx_group_es_Group,
    { className: classnames_default()('vx-columns', className), top: top, left: left },
    ticks.map(function (d, i) {
      var x = offset ? scale(d) + offset : scale(d);
      var fromPoint = new vx_point_es.Point({
        x: x,
        y: 0
      });
      var toPoint = new vx_point_es.Point({
        x: x,
        y: height
      });
      return react.createElement(Line, vx_grid_es_extends({
        key: 'column-line-' + d + '-' + i,
        from: fromPoint,
        to: toPoint,
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeDasharray: strokeDasharray,
        style: lineStyle
      }, restProps));
    })
  );
}

Grid.propTypes = {
  top: (prop_types_default()).number,
  left: (prop_types_default()).number,
  className: (prop_types_default()).string,
  stroke: (prop_types_default()).string,
  strokeWidth: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  strokeDasharray: (prop_types_default()).string,
  numTicksRows: (prop_types_default()).number,
  numTicksColumns: (prop_types_default()).number,
  rowLineStyle: (prop_types_default()).object,
  columnLineStyle: (prop_types_default()).object,
  xOffset: (prop_types_default()).number,
  yOffset: (prop_types_default()).number,
  xScale: (prop_types_default()).func.isRequired,
  yScale: (prop_types_default()).func.isRequired,
  height: (prop_types_default()).number.isRequired,
  width: (prop_types_default()).number.isRequired,
  rowTickValues: (prop_types_default()).array,
  columnTickValues: (prop_types_default()).array
};

function Grid(_ref) {
  var top = _ref.top,
      left = _ref.left,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      width = _ref.width,
      height = _ref.height,
      className = _ref.className,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      numTicksRows = _ref.numTicksRows,
      numTicksColumns = _ref.numTicksColumns,
      rowLineStyle = _ref.rowLineStyle,
      columnLineStyle = _ref.columnLineStyle,
      xOffset = _ref.xOffset,
      yOffset = _ref.yOffset,
      rowTickValues = _ref.rowTickValues,
      columnTickValues = _ref.columnTickValues,
      restProps = vx_grid_es_objectWithoutProperties(_ref, ['top', 'left', 'xScale', 'yScale', 'width', 'height', 'className', 'stroke', 'strokeWidth', 'strokeDasharray', 'numTicksRows', 'numTicksColumns', 'rowLineStyle', 'columnLineStyle', 'xOffset', 'yOffset', 'rowTickValues', 'columnTickValues']);

  return react.createElement(
    vx_group_es_Group,
    { className: classnames_default()('vx-grid', className), top: top, left: left },
    react.createElement(Rows, vx_grid_es_extends({
      className: className,
      scale: yScale,
      width: width,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      numTicks: numTicksRows,
      style: rowLineStyle,
      offset: yOffset,
      tickValues: rowTickValues
    }, restProps)),
    react.createElement(Columns, vx_grid_es_extends({
      className: className,
      scale: xScale,
      height: height,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      numTicks: numTicksColumns,
      style: columnLineStyle,
      offset: xOffset,
      tickValues: columnTickValues
    }, restProps))
  );
}



;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/node_modules/@vx/group/dist/vx-group.es.js



var vx_group_es_extends = Object.assign || function (target) {
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

var vx_group_es_objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function dist_vx_group_es_Group(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      transform = _ref.transform,
      className = _ref.className,
      children = _ref.children,
      restProps = vx_group_es_objectWithoutProperties(_ref, ['top', 'left', 'transform', 'className', 'children']);

  return react.createElement(
    'g',
    vx_group_es_extends({
      className: classnames_default()('cx-group', className),
      transform: transform || 'translate(' + left + ', ' + top + ')'
    }, restProps),
    children
  );
}



// EXTERNAL MODULE: ./node_modules/@data-ui/shared/esm/enhancer/WithTooltip.js
var WithTooltip = __webpack_require__(85195);
// EXTERNAL MODULE: ./node_modules/@data-ui/theme/esm/color.js
var esm_color = __webpack_require__(12104);
;// CONCATENATED MODULE: ./node_modules/@vx/threshold/node_modules/@vx/group/dist/vx-group.es.js



var dist_vx_group_es_extends = Object.assign || function (target) {
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

var dist_vx_group_es_objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function group_dist_vx_group_es_Group(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      transform = _ref.transform,
      className = _ref.className,
      children = _ref.children,
      restProps = dist_vx_group_es_objectWithoutProperties(_ref, ['top', 'left', 'transform', 'className', 'children']);

  return react.createElement(
    'g',
    dist_vx_group_es_extends({
      className: classnames_default()('vx-group', className),
      transform: transform || 'translate(' + left + ', ' + top + ')'
    }, restProps),
    children
  );
}



;// CONCATENATED MODULE: ./node_modules/@vx/threshold/node_modules/@vx/point/dist/vx-point.es.js
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

var vx_point_es_Point = function () {
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



;// CONCATENATED MODULE: ./node_modules/@vx/threshold/node_modules/@vx/shape/dist/vx-shape.es.js









function vx_shape_es_callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}

function vx_shape_es_additionalProps(restProps, data) {
  return Object.keys(restProps).reduce(function (ret, cur) {
    ret[cur] = vx_shape_es_callOrValue(restProps[cur], data);
    return ret;
  }, {});
}

var dist_vx_shape_es_extends = Object.assign || function (target) {
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

var dist_vx_shape_es_objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function vx_shape_es_Arc(_ref) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref, ['className', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius']);

  var arc$$1 = arc();
  if (centroid) arc$$1.centroid(centroid);
  if (innerRadius) arc$$1.innerRadius(innerRadius);
  if (outerRadius) arc$$1.outerRadius(outerRadius);
  if (cornerRadius) arc$$1.cornerRadius(cornerRadius);
  if (startAngle) arc$$1.startAngle(startAngle);
  if (endAngle) arc$$1.endAngle(endAngle);
  if (padAngle) arc$$1.padAngle(padAngle);
  if (padRadius) arc$$1.padRadius(padRadius);
  return React.createElement('path', dist_vx_shape_es_extends({ className: cx('vx-arc', className), d: arc$$1(data) }, vx_shape_es_additionalProps(restProps, data)));
}

function vx_shape_es_Pie(_ref) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref, ['className', 'top', 'left', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius', 'pieSort', 'pieSortValues', 'pieValue', 'children']);

  var path$$1 = arc();
  path$$1.innerRadius(innerRadius);
  if (outerRadius) path$$1.outerRadius(outerRadius);
  if (cornerRadius) path$$1.cornerRadius(cornerRadius);
  if (padRadius) path$$1.padRadius(padRadius);
  var pie$$1 = pie();
  if (pieSort) pie$$1.sort(pieSort);
  if (pieSortValues) pie$$1.sortValues(pieSortValues);
  if (pieValue) pie$$1.value(pieValue);
  if (padAngle != null) pie$$1.padAngle(padAngle);
  if (startAngle != null) pie$$1.startAngle(startAngle);
  if (endAngle != null) pie$$1.endAngle(endAngle);
  var arcs = pie$$1(data);
  var renderFunctionArg = {
    arcs: arcs,
    generatePathProps: function generatePathProps(arc$$1, index) {
      return dist_vx_shape_es_extends({
        className: cx('vx-pie-arc', className),
        d: path$$1(arc$$1)
      }, vx_shape_es_additionalProps(restProps, dist_vx_shape_es_extends({}, arc$$1, {
        index: index,
        centroid: centroid ? path$$1.centroid(arc$$1) : undefined
      })));
    },
    generateCentroid: function generateCentroid(arc$$1) {
      return centroid && centroid(path$$1.centroid(arc$$1), arc$$1);
    }
  };
  return React.createElement(
    Group,
    { className: 'vx-pie-arcs-group', top: top, left: left },
    children ? children(renderFunctionArg) : arcs.map(function (arc$$1, i) {
      var pathProps = renderFunctionArg.generatePathProps(arc$$1, i);
      return React.createElement(
        'g',
        { key: 'pie-arc-' + i },
        React.createElement('path', pathProps),
        renderFunctionArg.generateCentroid(arc$$1)
      );
    })
  );
}

vx_shape_es_Line.propTypes = {
  innerRef: (prop_types_default()).func
};

function vx_shape_es_Line(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === undefined ? new vx_point_es_Point({ x: 0, y: 0 }) : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === undefined ? new vx_point_es_Point({ x: 1, y: 1 }) : _ref$to,
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref, ['from', 'to', 'stroke', 'strokeWidth', 'strokeDasharray', 'transform', 'className', 'data', 'innerRef']);

  return react.createElement('line', dist_vx_shape_es_extends({
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
  }, vx_shape_es_additionalProps(restProps, data)));
}

vx_shape_es_LinePath.propTypes = {
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

function vx_shape_es_LinePath(_ref) {
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
      curve = _ref$curve === undefined ? src.curveLinear : _ref$curve,
      glyph = _ref.glyph,
      innerRef = _ref.innerRef,
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref, ['children', 'data', 'xScale', 'yScale', 'x', 'y', 'defined', 'className', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeDashoffset', 'fill', 'curve', 'glyph', 'innerRef']);

  var path$$1 = (0,src.line)().x(function () {
    return xScale(x.apply(undefined, arguments));
  }).y(function () {
    return yScale(y.apply(undefined, arguments));
  }).defined(defined).curve(curve);
  if (children) return children({ path: path$$1 });
  return react.createElement(
    'g',
    null,
    react.createElement('path', dist_vx_shape_es_extends({
      ref: innerRef,
      className: classnames_default()('vx-linepath', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      strokeDashoffset: strokeDashoffset,
      fill: fill
    }, vx_shape_es_additionalProps(restProps, data))),
    glyph && react.createElement(
      'g',
      { className: 'vx-linepath-glyphs' },
      data.map(glyph)
    )
  );
}

vx_shape_es_LineRadial.propTypes = {
  innerRef: (prop_types_default()).func
};

function vx_shape_es_LineRadial(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      angle = _ref.angle,
      radius = _ref.radius,
      defined = _ref.defined,
      curve = _ref.curve,
      data = _ref.data,
      innerRef = _ref.innerRef,
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref, ['className', 'angle', 'radius', 'defined', 'curve', 'data', 'innerRef']);

  var path$$1 = (0,src.radialLine)();
  if (angle) path$$1.angle(angle);
  if (radius) path$$1.radius(radius);
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  return react.createElement(
    'g',
    null,
    react.createElement('path', dist_vx_shape_es_extends({
      ref: innerRef,
      className: classnames_default()('vx-line-radial', className),
      d: path$$1(data)
    }, vx_shape_es_additionalProps(restProps, data)))
  );
}

vx_shape_es_Area.propTypes = {
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

function vx_shape_es_Area(_ref) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref, ['children', 'x', 'x0', 'x1', 'y', 'y0', 'y1', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path$$1 = (0,src.area)();
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
    react.createElement('path', dist_vx_shape_es_extends({
      ref: innerRef,
      className: classnames_default()('vx-area', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, vx_shape_es_additionalProps(restProps, data)))
  );
}

vx_shape_es_AreaClosed.propTypes = {
  innerRef: (prop_types_default()).func
};

function vx_shape_es_AreaClosed(_ref) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref, ['x', 'y', 'y0', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path$$1 = (0,src.area)().x(function () {
    return xScale(x.apply(undefined, arguments));
  }).y0(y0 || yScale.range()[0]).y1(function () {
    return yScale(y.apply(undefined, arguments));
  }).defined(defined);
  if (curve) path$$1.curve(curve);
  return react.createElement(
    'g',
    null,
    react.createElement('path', dist_vx_shape_es_extends({
      ref: innerRef,
      className: classnames_default()('vx-area-closed', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, vx_shape_es_additionalProps(restProps, data)))
  );
}

function vx_shape_es_AreaStack(_ref) {
  var className = _ref.className,
      _ref$top = _ref.top,
      _ref$left = _ref.left,
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'glyph', 'reverse']);

  var stack$$1 = stack();
  if (keys) stack$$1.keys(keys);

  var path$$1 = area();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);
  if (y0) path$$1.y0(y0);
  if (y1) path$$1.y1(y1);
  if (curve) path$$1.curve(curve);
  if (defined) path$$1.defined(defined);

  var seriesData = stack$$1(data);
  if (reverse) seriesData.reverse();

  return React.createElement(
    'g',
    null,
    seriesData.map(function (series, i) {
      return React.createElement('path', dist_vx_shape_es_extends({
        className: cx('vx-area-stack', className),
        key: 'area-stack-' + i + '-' + (series.key || ''),
        d: path$$1(series)
      }, vx_shape_es_additionalProps(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    }),
    !!glyph && React.createElement(
      'g',
      { className: 'vx-area-stack-glyphs' },
      data.map(glyph)
    )
  );
}

vx_shape_es_Bar.propTypes = {
  innerRef: (prop_types_default()).func
};

function vx_shape_es_Bar(_ref) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'fillOpacity', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity']);

  return react.createElement('rect', dist_vx_shape_es_extends({
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
  }, vx_shape_es_additionalProps(restProps, data)));
}

function vx_shape_es_BarGroup(_ref) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x0', 'x0Scale', 'x1Scale', 'yScale', 'zScale', 'keys', 'height']);

  var format = x0Scale.tickFormat ? x0Scale.tickFormat() : function (d) {
    return d;
  };
  return react.createElement(
    group_dist_vx_group_es_Group,
    { className: classnames_default()('vx-bar-group', className), top: top, left: left },
    data && data.map(function (d, i) {
      return react.createElement(
        group_dist_vx_group_es_Group,
        { key: 'bar-group-' + i + '-' + x0(d), left: x0Scale(x0(d)) },
        keys && keys.map(function (key, i) {
          var value = d[key];
          return react.createElement(vx_shape_es_Bar, dist_vx_shape_es_extends({
            key: 'bar-group-bar-' + i + '-' + value + '-' + key,
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

vx_shape_es_BarGroup.propTypes = {
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

function vx_shape_es_BarGroupHorizontal(_ref) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'y0', 'y0Scale', 'y1Scale', 'xScale', 'zScale', 'keys', 'width']);

  var format = y0Scale.tickFormat ? y0Scale.tickFormat() : function (d) {
    return d;
  };
  return react.createElement(
    group_dist_vx_group_es_Group,
    { className: classnames_default()('vx-bar-group-horizontal', className), top: top, left: left },
    data && data.map(function (d, i) {
      return react.createElement(
        group_dist_vx_group_es_Group,
        { key: 'bar-group-' + i + '-' + y0(d), top: y0Scale(y0(d)) },
        keys && keys.map(function (key, i) {
          var value = d[key];
          return react.createElement(vx_shape_es_Bar, dist_vx_shape_es_extends({
            key: 'bar-group-bar-' + i + '-' + value + '-' + key,
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

vx_shape_es_BarGroupHorizontal.propTypes = {
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

function vx_shape_es_BarStack(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x = _ref.x,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x', 'xScale', 'yScale', 'zScale', 'keys', 'height']);

  var series = (0,src.stack)().keys(keys)(data);
  var format = xScale.tickFormat ? xScale.tickFormat() : function (d) {
    return d;
  };
  var bandwidth = xScale.bandwidth();
  var step = xScale.step();
  var paddingInner = xScale.paddingInner();
  var paddingOuter = xScale.paddingOuter();
  return react.createElement(
    group_dist_vx_group_es_Group,
    { className: classnames_default()('vx-bar-stack', className), top: top, left: left },
    series && series.map(function (s, i) {
      return react.createElement(
        group_dist_vx_group_es_Group,
        { key: 'vx-bar-stack-' + i },
        s.map(function (d, ii) {
          var barHeight = yScale(d[0]) - yScale(d[1]);
          return react.createElement(vx_shape_es_Bar, dist_vx_shape_es_extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: xScale(x(d.data)),
            y: yScale(d[1]),
            width: bandwidth,
            height: barHeight,
            fill: zScale(s.key),
            data: {
              bandwidth: bandwidth,
              paddingInner: paddingInner,
              paddingOuter: paddingOuter,
              step: step,
              key: s.key,
              value: d[1],
              height: barHeight,
              width: bandwidth,
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

vx_shape_es_BarStack.propTypes = {
  data: (prop_types_default()).array.isRequired,
  x: (prop_types_default()).func.isRequired,
  xScale: (prop_types_default()).func.isRequired,
  yScale: (prop_types_default()).func.isRequired,
  zScale: (prop_types_default()).func.isRequired,
  keys: (prop_types_default()).array.isRequired,
  className: (prop_types_default()).string,
  top: (prop_types_default()).number,
  left: (prop_types_default()).number
};

function vx_shape_es_BarStackHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      y = _ref.y,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'y', 'xScale', 'yScale', 'zScale', 'keys', 'height']);

  var series = (0,src.stack)().keys(keys)(data);
  var format = yScale.tickFormat ? yScale.tickFormat() : function (d) {
    return d;
  };
  var bandwidth = yScale.bandwidth();
  var step = yScale.step();
  var paddingInner = yScale.paddingInner();
  var paddingOuter = yScale.paddingOuter();
  return react.createElement(
    group_dist_vx_group_es_Group,
    { className: classnames_default()('vx-bar-stack-horizontal', className), top: top, left: left },
    series && series.map(function (s, i) {
      return react.createElement(
        group_dist_vx_group_es_Group,
        { key: 'vx-bar-stack-horizontal-' + i },
        s.map(function (d, ii) {
          var barWidth = xScale(d[1]) - xScale(d[0]);
          return react.createElement(vx_shape_es_Bar, dist_vx_shape_es_extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: xScale(d[0]),
            y: yScale(y(d.data)),
            width: barWidth,
            height: bandwidth,
            fill: zScale(s.key),
            data: {
              bandwidth: bandwidth,
              paddingInner: paddingInner,
              paddingOuter: paddingOuter,
              step: step,
              key: s.key,
              value: d[0],
              height: bandwidth,
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

vx_shape_es_BarStackHorizontal.propTypes = {
  data: (prop_types_default()).array.isRequired,
  y: (prop_types_default()).func.isRequired,
  xScale: (prop_types_default()).func.isRequired,
  yScale: (prop_types_default()).func.isRequired,
  zScale: (prop_types_default()).func.isRequired,
  keys: (prop_types_default()).array.isRequired,
  className: (prop_types_default()).string,
  top: (prop_types_default()).number,
  left: (prop_types_default()).number
};

var vx_shape_es_STACK_ORDERS = {
  ascending: src.stackOrderAscending,
  descending: src.stackOrderDescending,
  insideout: src.stackOrderInsideOut,
  none: src.stackOrderNone,
  reverse: src.stackOrderReverse
};

var vx_shape_es_STACK_ORDER_NAMES = Object.keys(vx_shape_es_STACK_ORDERS);

function vx_shape_es_stackOrder(order) {
  return vx_shape_es_STACK_ORDERS[order] || vx_shape_es_STACK_ORDERS.none;
}

var vx_shape_es_STACK_OFFSETS = {
  expand: src.stackOffsetExpand,
  diverging: src.stackOffsetDiverging,
  none: src.stackOffsetNone,
  silhouette: src.stackOffsetSilhouette,
  wiggle: src.stackOffsetWiggle
};

var vx_shape_es_STACK_OFFSET_NAMES = Object.keys(vx_shape_es_STACK_OFFSETS);

function vx_shape_es_stackOffset(offset) {
  return vx_shape_es_STACK_OFFSETS[offset] || vx_shape_es_STACK_OFFSETS.none;
}

function vx_shape_es_Stack(_ref) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'value', 'order', 'offset', 'render', 'reverse']);

  var stack$$1 = stack();
  if (keys) stack$$1.keys(keys);
  if (value) stack$$1.value(value);
  if (order) stack$$1.order(vx_shape_es_stackOrder(order));
  if (offset) stack$$1.offset(vx_shape_es_stackOffset(offset));

  var path$$1 = area();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);
  if (y0) path$$1.y0(y0);
  if (y1) path$$1.y1(y1);
  if (curve) path$$1.curve(curve);
  if (defined) path$$1.defined(defined);

  var seriesData = stack$$1(data);
  if (reverse) seriesData.reverse();

  if (render) return React.createElement(
    Group,
    { top: top, left: left },
    render({ seriesData: seriesData, path: path$$1 })
  );

  return React.createElement(
    Group,
    { top: top, left: left },
    seriesData.map(function (series, i) {
      return React.createElement('path', dist_vx_shape_es_extends({
        className: cx('vx-stack', className),
        key: 'stack-' + i + '-' + (series.key || ''),
        d: path$$1(series)
      }, vx_shape_es_additionalProps(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    })
  );
}

function vx_shape_es_pathHorizontalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var link = (0,src.linkHorizontal)();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

vx_shape_es_LinkHorizontal.propTypes = {
  innerRef: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function vx_shape_es_LinkHorizontal(_ref2) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || vx_shape_es_pathHorizontalDiagonal({ source: source, target: target, x: x, y: y });
  return react.createElement('path', dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link-horizontal', className),
    d: path$$1(data)
  }, vx_shape_es_additionalProps(restProps, data)));
}

function vx_shape_es_pathVerticalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var link = (0,src.linkVertical)();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

vx_shape_es_LinkVertical.propTypes = {
  innerRef: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function vx_shape_es_LinkVertical(_ref2) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || vx_shape_es_pathVerticalDiagonal({ source: source, target: target, x: x, y: y });
  return react.createElement('path', dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link-vertical', className),
    d: path$$1(data)
  }, vx_shape_es_additionalProps(restProps, data)));
}

function vx_shape_es_pathRadialDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      angle = _ref.angle,
      radius = _ref.radius;

  return function (data) {
    var link = (0,src.linkRadial)();
    link.angle(angle);
    link.radius(radius);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

vx_shape_es_LinkRadial.propTypes = {
  innerRef: (prop_types_default()).func,
  angle: (prop_types_default()).func,
  radius: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function vx_shape_es_LinkRadial(_ref2) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'angle', 'radius', 'source', 'target']);

  path$$1 = path$$1 || vx_shape_es_pathRadialDiagonal({ source: source, target: target, angle: angle, radius: radius });
  return react.createElement('path', dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link-radius', className),
    d: path$$1(data)
  }, vx_shape_es_additionalProps(restProps, data)));
}

function vx_shape_es_pathHorizontalCurve(_ref) {
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

vx_shape_es_LinkHorizontalCurve.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function vx_shape_es_LinkHorizontalCurve(_ref2) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || vx_shape_es_pathHorizontalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, vx_shape_es_additionalProps(restProps, data)));
}

function vx_shape_es_pathVerticalCurve(_ref) {
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

vx_shape_es_LinkVerticalCurve.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function vx_shape_es_LinkVerticalCurve(_ref2) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || vx_shape_es_pathVerticalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, vx_shape_es_additionalProps(restProps, data)));
}

function vx_shape_es_pathRadialCurve(_ref) {
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

vx_shape_es_LinkRadialCurve.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function vx_shape_es_LinkRadialCurve(_ref2) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || vx_shape_es_pathRadialCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, vx_shape_es_additionalProps(restProps, data)));
}

function vx_shape_es_pathHorizontalLine(_ref) {
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

vx_shape_es_LinkHorizontalLine.propTypes = {
  innerRef: (prop_types_default()).func,
  path: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func
};

function vx_shape_es_LinkHorizontalLine(_ref2) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || vx_shape_es_pathHorizontalLine({ source: source, target: target, x: x, y: y });
  return react.createElement('path', dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, vx_shape_es_additionalProps(restProps, data)));
}

function vx_shape_es_pathVerticalLine(_ref) {
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

vx_shape_es_LinkVerticalLine.propTypes = {
  innerRef: (prop_types_default()).func,
  path: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func
};

function vx_shape_es_LinkVerticalLine(_ref2) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || vx_shape_es_pathVerticalLine({ source: source, target: target, x: x, y: y });
  return react.createElement('path', dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, vx_shape_es_additionalProps(restProps, data)));
}

function vx_shape_es_pathRadialLine(_ref) {
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

vx_shape_es_LinkRadialStep.propTypes = {
  innerRef: (prop_types_default()).func,
  path: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func
};

function vx_shape_es_LinkRadialStep(_ref2) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || vx_shape_es_pathRadialLine({ source: source, target: target, x: x, y: y });
  return react.createElement('path', dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, vx_shape_es_additionalProps(restProps, data)));
}

function vx_shape_es_pathHorizontalStep(_ref) {
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

vx_shape_es_LinkHorizontalStep.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function vx_shape_es_LinkHorizontalStep(_ref2) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'percent', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || vx_shape_es_pathHorizontalStep({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, vx_shape_es_additionalProps(restProps, data)));
}

function vx_shape_es_pathVerticalStep(_ref) {
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

vx_shape_es_LinkVerticalStep.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function vx_shape_es_LinkVerticalStep(_ref2) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'percent', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || vx_shape_es_pathVerticalStep({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, vx_shape_es_additionalProps(restProps, data)));
}

function vx_shape_es_pathRadialStep(_ref) {
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

vx_shape_es_LinkRadialStep$1.propTypes = {
  innerRef: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function vx_shape_es_LinkRadialStep$1(_ref2) {
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
      restProps = dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || vx_shape_es_pathRadialStep({ source: source, target: target, x: x, y: y });
  return react.createElement('path', dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, vx_shape_es_additionalProps(restProps, data)));
}



;// CONCATENATED MODULE: ./node_modules/@vx/threshold/node_modules/@vx/clip-path/dist/vx-clip-path.es.js


var vx_clip_path_es_extends = Object.assign || function (target) {
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

var vx_clip_path_es_objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var ClipPath = (function (_ref) {
  var id = _ref.id,
      children = _ref.children,
      restProps = vx_clip_path_es_objectWithoutProperties(_ref, ['id', 'children']);
  return react.createElement(
    'defs',
    null,
    react.createElement(
      'clipPath',
      vx_clip_path_es_extends({ id: id }, restProps),
      children
    )
  );
});

var CircleClipPath = (function (_ref) {
  var id = _ref.id,
      cx = _ref.cx,
      cy = _ref.cy,
      r = _ref.r,
      restProps = vx_clip_path_es_objectWithoutProperties(_ref, ['id', 'cx', 'cy', 'r']);
  return React.createElement(
    ClipPath,
    { id: id },
    React.createElement('circle', vx_clip_path_es_extends({ cx: cx, cy: cy, r: r }, restProps))
  );
});

var RectClipPath = (function (_ref) {
  var id = _ref.id,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 1 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 1 : _ref$height,
      restProps = vx_clip_path_es_objectWithoutProperties(_ref, ['id', 'x', 'y', 'width', 'height']);
  return React.createElement(
    ClipPath,
    { id: id },
    React.createElement('rect', vx_clip_path_es_extends({ x: x, y: y, width: width, height: height }, restProps))
  );
});



;// CONCATENATED MODULE: ./node_modules/@vx/threshold/dist/vx-threshold.es.js





var vx_threshold_es_extends = Object.assign || function (target) {
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

function Threshold(_ref) {
  var className = _ref.className,
      curve = _ref.curve,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      clipAboveTo = _ref.clipAboveTo,
      clipBelowTo = _ref.clipBelowTo,
      data = _ref.data,
      x = _ref.x,
      y0 = _ref.y0,
      y1 = _ref.y1,
      aboveAreaProps = _ref.aboveAreaProps,
      belowAreaProps = _ref.belowAreaProps;

  return react.createElement(
    'g',
    { className: classnames_default()('vx-threshold', className) },
    react.createElement(
      vx_shape_es_Area,
      { curve: curve, data: data, x: x, y1: y1, xScale: xScale, yScale: yScale },
      function (_ref2) {
        var path = _ref2.path;

        return react.createElement(
          'g',
          null,
          react.createElement(
            ClipPath,
            { id: 'threshold-clip-below' },
            react.createElement('path', { d: path.y0(clipBelowTo)(data) })
          ),
          react.createElement(
            ClipPath,
            { id: 'threshold-clip-above' },
            react.createElement('path', { d: path.y0(clipAboveTo)(data) })
          )
        );
      }
    ),
    react.createElement(vx_shape_es_Area, vx_threshold_es_extends({
      curve: curve,
      data: data,
      x: x,
      y0: y0,
      y1: y1,
      xScale: xScale,
      yScale: yScale,
      strokeWidth: 0,
      clipPath: 'url(#threshold-clip-below)'
    }, belowAreaProps)),
    react.createElement(vx_shape_es_Area, vx_threshold_es_extends({
      curve: curve,
      data: data,
      x: x,
      y0: y0,
      y1: y1,
      xScale: xScale,
      yScale: yScale,
      strokeWidth: 0,
      clipPath: 'url(#threshold-clip-above)'
    }, aboveAreaProps))
  );
}



;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/utils/interpolatorLookup.js

/* harmony default export */ const interpolatorLookup = ({
  linear: src.curveLinear,
  cardinal: src.curveCardinal,
  monotoneX: src.curveMonotoneX,
  monotoneY: src.curveMonotoneY,
  natural: src.curveNatural
});
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/utils/propShapes.js


var stringNumberDateObjectPropType = prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number, prop_types_default().instanceOf(Date), (prop_types_default()).object]);
var scaleShape = prop_types_default().shape({
  type: prop_types_default().oneOf(['time', 'timeUtc', 'linear', 'band']).isRequired,
  includeZero: (prop_types_default()).bool,
  // these would override any computation done by xyplot
  // and would allow specifying colors for scales, etc.
  range: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string])),
  rangeRound: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string])),
  domain: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]))
});
var boxPlotSeriesDataShape = prop_types_default().arrayOf(prop_types_default().shape({
  x: stringNumberDateObjectPropType,
  median: (prop_types_default()).number.isRequired,
  min: (prop_types_default()).number.isRequired,
  max: (prop_types_default()).number.isRequired,
  firstQuartile: (prop_types_default()).number.isRequired,
  thirdQuartile: (prop_types_default()).number.isRequired,
  outliers: (prop_types_default()).array.isRequired
}));
var violinPlotSeriesDataShape = prop_types_default().arrayOf(prop_types_default().shape({
  x: stringNumberDateObjectPropType,
  binData: (prop_types_default()).array.isRequired
}));
var lineSeriesDataShape = prop_types_default().arrayOf(prop_types_default().shape({
  x: stringNumberDateObjectPropType,
  y: (prop_types_default()).number // null data are not rendered

}));
var areaSeriesDataShape = prop_types_default().arrayOf(prop_types_default().shape({
  x: stringNumberDateObjectPropType,
  y: (prop_types_default()).number,
  // null data are not rendered
  y0: (prop_types_default()).number,
  y1: (prop_types_default()).number
}));
var barSeriesDataShape = prop_types_default().arrayOf(prop_types_default().shape({
  x: stringNumberDateObjectPropType,
  y: stringNumberDateObjectPropType,
  fill: (prop_types_default()).string,
  stroke: (prop_types_default()).string,
  strokeWidth: (prop_types_default()).number,
  label: (prop_types_default()).string
}));
var groupedBarSeriesDataShape = prop_types_default().arrayOf(prop_types_default().shape({
  x: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]).isRequired,
  y: (prop_types_default()).number.isRequired
}));
var stackedBarSeriesDataShape = prop_types_default().arrayOf(prop_types_default().shape({
  x: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]).isRequired,
  y: (prop_types_default()).number.isRequired
}));
var pointSeriesDataShape = prop_types_default().arrayOf(prop_types_default().shape({
  x: stringNumberDateObjectPropType,
  y: (prop_types_default()).number,
  size: (prop_types_default()).number,
  fill: (prop_types_default()).string,
  stroke: (prop_types_default()).string,
  strokeWidth: (prop_types_default()).number,
  strokeDasharray: (prop_types_default()).string,
  label: (prop_types_default()).string
}));
var intervalSeriesDataShape = prop_types_default().arrayOf(prop_types_default().shape({
  x0: stringNumberDateObjectPropType,
  x1: stringNumberDateObjectPropType,
  fill: (prop_types_default()).string,
  stroke: (prop_types_default()).string,
  strokeWidth: (prop_types_default()).number
}));
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
var interpolationShape = prop_types_default().oneOf(Object.keys(interpolatorLookup));
var pointComponentPropTypes = {
  x: (prop_types_default()).number.isRequired,
  y: (prop_types_default()).number.isRequired,
  size: (prop_types_default()).number.isRequired,
  fill: (prop_types_default()).string.isRequired,
  fillOpacity: (prop_types_default()).number.isRequired,
  stroke: (prop_types_default()).string.isRequired,
  strokeWidth: (prop_types_default()).number.isRequired,
  strokeDasharray: (prop_types_default()).string,
  onClick: (prop_types_default()).func,
  onMouseMove: (prop_types_default()).func,
  onMouseLeave: (prop_types_default()).func,
  data: pointSeriesDataShape.isRequired,
  datum: (prop_types_default()).object.isRequired
};
var generalStyleShape = prop_types_default().shape({
  stroke: (prop_types_default()).string,
  strokeWidth: (prop_types_default()).number,
  strokeOpacity: (prop_types_default()).number,
  fill: (prop_types_default()).string,
  fillOpacity: (prop_types_default()).number
});
var marginShape = prop_types_default().shape({
  top: (prop_types_default()).number,
  left: (prop_types_default()).number,
  right: (prop_types_default()).number,
  bottom: (prop_types_default()).number
});
var brushShape = prop_types_default().shape({
  start: prop_types_default().shape({
    x: (prop_types_default()).number.isRequired,
    y: (prop_types_default()).number.isRequired
  }),
  end: prop_types_default().shape({
    x: (prop_types_default()).number.isRequired,
    y: (prop_types_default()).number.isRequired
  }),
  extent: prop_types_default().shape({
    x0: (prop_types_default()).number.isRequired,
    y0: (prop_types_default()).number.isRequired,
    x1: (prop_types_default()).number.isRequired,
    y1: (prop_types_default()).number.isRequired
  }),
  bounds: prop_types_default().shape({
    x0: (prop_types_default()).number.isRequired,
    y0: (prop_types_default()).number.isRequired,
    x1: (prop_types_default()).number.isRequired,
    y1: (prop_types_default()).number.isRequired
  })
});
var dragShape = prop_types_default().shape({
  x: (prop_types_default()).number,
  y: (prop_types_default()).number,
  dx: (prop_types_default()).number,
  dy: (prop_types_default()).number,
  isDragging: (prop_types_default()).bool,
  dragEnd: (prop_types_default()).func,
  dragMove: (prop_types_default()).func,
  dragStart: (prop_types_default()).func
});
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/utils/sharedSeriesProps.js


/* harmony default export */ const sharedSeriesProps = ({
  disableMouseEvents: (prop_types_default()).bool,
  seriesKey: (prop_types_default()).string,
  onClick: (prop_types_default()).func,
  onMouseMove: (prop_types_default()).func,
  onMouseLeave: (prop_types_default()).func,
  xScale: (prop_types_default()).func,
  yScale: (prop_types_default()).func,
  margin: marginShape
});
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/series/AreaDifferenceSeries.js
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function AreaDifferenceSeries_extends() { AreaDifferenceSeries_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AreaDifferenceSeries_extends.apply(this, arguments); }









var propTypes = AreaDifferenceSeries_extends({}, sharedSeriesProps, {
  children: (prop_types_default()).node.isRequired,
  // AreaSeries type
  interpolation: interpolationShape
});

var defaultProps = {
  interpolation: 'monotoneX'
};
var DEFAULT_OPACITY = 0.4;

var getX = function getX(d) {
  return d.x;
};

var getY0 = function getY0(d) {
  return d.y0;
};

var getY1 = function getY1(d) {
  return d.y1;
};

var AreaDifferenceSeries =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(AreaDifferenceSeries, _React$PureComponent);

  function AreaDifferenceSeries() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = AreaDifferenceSeries.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        disableMouseEvents = _this$props.disableMouseEvents,
        interpolation = _this$props.interpolation,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale,
        onClick = _this$props.onClick,
        onMouseMove = _this$props.onMouseMove,
        onMouseLeave = _this$props.onMouseLeave,
        children = _this$props.children,
        margin = _this$props.margin;
    if (!xScale || !yScale) return null;
    var childArray = react.Children.toArray(children);
    var child1 = childArray[0],
        child2 = childArray[1];

    if (childArray.length !== 2 || child1.type.displayName !== 'AreaSeries' || child2.type.displayName !== 'AreaSeries') {
      console.warn('AreaDifferenceSeries expects exactly two AreaSeries children');
      return null;
    }

    var _child1$props = child1.props,
        data1 = _child1$props.data,
        fill1 = _child1$props.fill,
        opacity1 = _child1$props.fillOpacity;
    var _child2$props = child2.props,
        data2 = _child2$props.data,
        fill2 = _child2$props.fill,
        opacity2 = _child2$props.fillOpacity;

    if (data1.length !== data2.length) {
      console.warn('AreaDifferenceSeries children should have the same data length');
      return null;
    }

    var curve = interpolatorLookup[interpolation] || interpolatorLookup.monotoneX;
    var yExtent = yScale.range();
    var mergedData = data1.map(function (d, i) {
      return {
        x: d.x,
        y0: d.y,
        y1: data2[i].y
      };
    });
    return react.createElement("g", null, react.createElement(Threshold, {
      data: mergedData,
      x: getX,
      y0: getY0,
      y1: getY1,
      xScale: xScale,
      yScale: yScale,
      clipAboveTo: Math.min.apply(Math, yExtent),
      clipBelowTo: Math.max.apply(Math, yExtent),
      curve: curve,
      aboveAreaProps: {
        fill: fill1 || esm_color/* default.categories.0 */.ZP.categories[0],
        fillOpacity: opacity1 || DEFAULT_OPACITY
      },
      belowAreaProps: {
        fill: fill2 || esm_color/* default.categories.0 */.ZP.categories[0],
        fillOpacity: opacity2 || DEFAULT_OPACITY
      }
    }), childArray.map(function (Child) {
      return react.cloneElement(Child, {
        xScale: xScale,
        yScale: yScale,
        onClick: onClick,
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave,
        interpolation: interpolation,
        disableMouseEvents: Child.props.disableMouseEvents || disableMouseEvents,
        fill: 'transparent',
        margin: margin
      });
    }));
  };

  return AreaDifferenceSeries;
}(react.PureComponent);


AreaDifferenceSeries.propTypes = propTypes;
AreaDifferenceSeries.defaultProps = defaultProps;
AreaDifferenceSeries.displayName = 'AreaDifferenceSeries';
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/utils/chartUtils.js
/* eslint no-magic-numbers: 'off' */

function chartUtils_callOrValue(maybeFn) {
  if (typeof maybeFn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return maybeFn.apply(void 0, args);
  }

  return maybeFn;
}
function componentName(component) {
  if (component && component.type) {
    return component.type.displayName || component.type.name || 'Component';
  }

  return '';
}
function getChildWithName(name, children) {
  var ChildOfInterest = react.Children.toArray(children).filter(function (c) {
    return componentName(c) === name;
  });
  return ChildOfInterest.length ? ChildOfInterest[0] : null;
}
function isDefined(val) {
  return typeof val !== 'undefined' && val !== null;
}
function isAxis(name) {
  return /axis/gi.test(name);
}
function isBarSeries(name) {
  return /bar/gi.test(name);
}
function isBrush(name) {
  return name === 'Brush';
}
function isCirclePackSeries(name) {
  return name === 'CirclePackSeries';
}
function isCrossHair(name) {
  return /crosshair/gi.test(name);
}
function isReferenceLine(name) {
  return /reference/gi.test(name);
}
function isSeries(name) {
  return /series/gi.test(name);
}
function isStackedSeries(name) {
  return /stacked/gi.test(name);
}
function numTicksForHeight(height) {
  if (height <= 300) return 3;
  if (height <= 600) return 5;
  return 8;
}
function numTicksForWidth(width) {
  if (width <= 300) return 3;
  if (width <= 400) return 5;
  return 10;
}
function propOrFallback(props, propName, fallback) {
  return props && isDefined(props[propName]) ? props[propName] : fallback;
}
function scaleInvert(scale, value) {
  // Test if the scale is an ordinalScale or not,
  // Since an ordinalScale doesn't support invert function.
  if (!scale.invert) {
    var _scale$range = scale.range(),
        start = _scale$range[0],
        end = _scale$range[1];

    var i = 0;
    var width = scale.step() * (end - start) / Math.abs(end - start);

    if (width > 0) {
      while (value > start + width * (i + 1)) {
        i += 1;
      }
    } else {
      while (value < start + width * (i + 1)) {
        i += 1;
      }
    }

    return i;
  }

  return scale.invert(value);
}
function getDomainFromExtent(scale, start, end, tolerentDelta) {
  var domain;
  var invertedStart = scaleInvert(scale, start + (start < end ? -tolerentDelta : tolerentDelta));
  var invertedEnd = scaleInvert(scale, end + (end < start ? -tolerentDelta : tolerentDelta));
  var minValue = Math.min(invertedStart, invertedEnd);
  var maxValue = Math.max(invertedStart, invertedEnd);

  if (scale.invert) {
    domain = {
      start: minValue,
      end: maxValue
    };
  } else {
    var values = [];
    var scaleDomain = scale.domain();

    for (var i = minValue; i <= maxValue; i += 1) {
      values.push(scaleDomain[i]);
    }

    domain = {
      values: values
    };
  }

  return domain;
}
var DEFAULT_CHART_MARGIN = {
  top: 64,
  right: 64,
  bottom: 64,
  left: 64
};
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/utils/collectVoronoiData.js


 // this function collects all data from child series to defines a voronoi overlay
// because x,y coordinates are required to define a voronoi, it filters any points
// with undefined x or y values

function collectVoronoiData(_ref) {
  var children = _ref.children,
      getX = _ref.getX,
      getY = _ref.getY;
  return react.Children.toArray(children).reduce(function (result, Child) {
    var name = componentName(Child);

    if (isSeries(name) && !Child.props.disableMouseEvents) {
      if (name === AreaDifferenceSeries.displayName) {
        return result.concat(collectVoronoiData({
          children: Child.props.children,
          getX: getX,
          getY: getY
        }));
      }

      return result.concat(Child.props.data.filter(function (d) {
        return isDefined(getX(d)) && isDefined(getY(d));
      }));
    }

    return result;
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/node_modules/@vx/event/dist/vx-event.es.js


function localPoint(node, event) {
  // called with no args
  if (!node) return;

  // called with localPoint(event)
  if (node.target) {
    event = node;

    // set node to targets owner svg
    node = event.target.ownerSVGElement;

    // find the outermost svg
    while (node.ownerSVGElement) {
      node = node.ownerSVGElement;
    }
  }

  // default to mouse event
  var _event = event,
      clientX = _event.clientX,
      clientY = _event.clientY;

  // support touch event

  if (event.changedTouches) {
    clientX = event.changedTouches[0].clientX;
    clientY = event.changedTouches[0].clientY;
  }

  // calculate coordinates from svg
  if (node.createSVGPoint) {
    var point = node.createSVGPoint();
    point.x = clientX;
    point.y = clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return new vx_point_es.Point({
      x: point.x,
      y: point.y
    });
  }

  // fallback to calculating position from non-svg dom node
  var rect = node.getBoundingClientRect();
  return new vx_point_es.Point({
    x: clientX - rect.left - node.clientLeft,
    y: clientY - rect.top - node.clientTop
  });
}

function touchPoint(node, event) {
  if (!node) return;
  var svg = node.ownerSVGElement || node;
  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.changedTouches[0].clientX;
    point.y = event.changedTouches[0].clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return new Point({
      x: point.x,
      y: point.y
    });
  }
  var rect = node.getBoundingClientRect();
  return new Point({
    x: event.changedTouches[0].clientX - rect.left - node.clientLeft,
    y: event.changedTouches[0].clientY - rect.top - node.clientTop
  });
}



// EXTERNAL MODULE: ./node_modules/d3-array/src/index.js + 31 modules
var d3_array_src = __webpack_require__(4065);
// EXTERNAL MODULE: ./node_modules/@data-ui/xy-chart/node_modules/@vx/event/build/localPoint.js
var build_localPoint = __webpack_require__(92881);
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/utils/findClosestDatum.js


function findClosestDatum(_ref) {
  var data = _ref.data,
      getX = _ref.getX,
      xScale = _ref.xScale,
      event = _ref.event,
      _ref$marginLeft = _ref.marginLeft,
      marginLeft = _ref$marginLeft === void 0 ? 0 : _ref$marginLeft;
  if (!event || !event.target || !event.target.ownerSVGElement) return null;
  var bisect = (0,d3_array_src.bisector)(getX).left; // if the g element has a transform we need to be in g coords not svg coords

  var svgCoords = (0,build_localPoint/* default */.Z)(event.target.ownerSVGElement, event);
  var mouseX = svgCoords.x - marginLeft;
  var isOrdinalScale = typeof xScale.invert !== 'function';
  var d;

  if (isOrdinalScale) {
    // Ordinal scales don't have an invert function so we do it maually
    var xDomain = xScale.domain();
    var scaledXValues = xDomain.map(function (val) {
      return xScale(val);
    });
    var index = (0,d3_array_src.bisectLeft)(scaledXValues, mouseX);
    var d0 = data[index - 1];
    var d1 = data[index];
    d = d0 || d1;
  } else {
    var dataX = xScale.invert(mouseX);

    var _index = bisect(data, dataX, 0);

    var _d = data[_index - 1];

    var _d2 = data[_index] || {};

    d = !_d || Math.abs(dataX - getX(_d)) > Math.abs(dataX - getX(_d2)) ? _d2 : _d;
  }

  return d;
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/utils/findClosestDatums.js




var DEFAULT_MAX_DISTANCE_PX = 1000;
function findClosestDatums(_ref) {
  var children = _ref.children,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? {} : _ref$margin,
      getX = _ref.getX,
      getY = _ref.getY,
      event = _ref.event,
      _ref$maxXDistancePx = _ref.maxXDistancePx,
      maxXDistancePx = _ref$maxXDistancePx === void 0 ? DEFAULT_MAX_DISTANCE_PX : _ref$maxXDistancePx;
  if (!event || !event.target || !event.target.ownerSVGElement) return null;
  var series = {};
  var gElement = event.target.ownerSVGElement;

  var _localPoint = localPoint(gElement, event),
      svgMouseX = _localPoint.x,
      svgMouseY = _localPoint.y;

  var mouseX = svgMouseX - (margin.left || 0);
  var mouseY = svgMouseY - (margin.top || 0);
  var closestDatum;
  var minDeltaX = Infinity;
  var minDeltaY = Infinity;
  var flatSeriesChildren = [];
  react.Children.forEach(children, function (Child) {
    var name = componentName(Child);

    if (name === 'AreaDifferenceSeries') {
      react.Children.forEach(Child.props.children, function (NestedChild) {
        flatSeriesChildren.push(NestedChild);
      });
    } else if (isSeries(name)) {
      flatSeriesChildren.push(Child);
    }
  }); // collect data from all series that have an x value near this point

  flatSeriesChildren.forEach(function (Child, childIndex) {
    if (!Child.props.disableMouseEvents) {
      var _Child$props = Child.props,
          data = _Child$props.data,
          seriesKey = _Child$props.seriesKey; // @TODO data should be sorted, come up with a way to enforce+cache instead of relying on user

      var datum = findClosestDatum({
        data: data,
        getX: getX,
        xScale: xScale,
        event: event,
        marginLeft: margin.left
      });
      var deltaX = Math.abs(xScale(getX(datum || {})) - mouseX);

      if (datum && deltaX <= maxXDistancePx) {
        var key = seriesKey || childIndex; // fall back to child index

        series[key] = datum;
        var deltaY = Math.abs(yScale(getY(datum)) - mouseY);
        closestDatum = deltaY < minDeltaY && deltaX <= minDeltaX ? datum : closestDatum;
        minDeltaX = closestDatum === datum ? deltaX : minDeltaX;
        minDeltaY = closestDatum === datum ? deltaY : minDeltaY;
      }
    }
  });
  return {
    series: series,
    closestDatum: closestDatum
  };
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/utils/shallowCompareObjectEntries.js
function shallowCompareObjectEntries(a, b) {
  var keysA = Object.keys(a);
  var keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(function (k) {
    return a[k] === b[k];
  });
}
;// CONCATENATED MODULE: ./node_modules/d3-voronoi/src/constant.js
/* harmony default export */ function constant(x) {
  return function() {
    return x;
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-voronoi/src/point.js
function point_x(d) {
  return d[0];
}

function point_y(d) {
  return d[1];
}

;// CONCATENATED MODULE: ./node_modules/d3-voronoi/src/RedBlackTree.js
function RedBlackTree() {
  this._ = null; // root node
}

function RedBlackNode(node) {
  node.U = // parent node
  node.C = // color - true for red, false for black
  node.L = // left node
  node.R = // right node
  node.P = // previous node
  node.N = null; // next node
}

RedBlackTree.prototype = {
  constructor: RedBlackTree,

  insert: function(after, node) {
    var parent, grandpa, uncle;

    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N) after.N.P = node;
      after.N = node;
      if (after.R) {
        after = after.R;
        while (after.L) after = after.L;
        after.L = node;
      } else {
        after.R = node;
      }
      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }
    node.L = node.R = null;
    node.U = parent;
    node.C = true;

    after = node;
    while (parent && parent.C) {
      grandpa = parent.U;
      if (parent === grandpa.L) {
        uncle = grandpa.R;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }
      parent = after.U;
    }
    this._.C = false;
  },

  remove: function(node) {
    if (node.N) node.N.P = node.P;
    if (node.P) node.P.N = node.N;
    node.N = node.P = null;

    var parent = node.U,
        sibling,
        left = node.L,
        right = node.R,
        next,
        red;

    if (!left) next = right;
    else if (!right) next = left;
    else next = RedBlackFirst(right);

    if (parent) {
      if (parent.L === node) parent.L = next;
      else parent.R = next;
    } else {
      this._ = next;
    }

    if (left && right) {
      red = next.C;
      next.C = node.C;
      next.L = left;
      left.U = next;
      if (next !== right) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right;
        right.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }

    if (node) node.U = parent;
    if (red) return;
    if (node && node.C) { node.C = false; return; }

    do {
      if (node === this._) break;
      if (node === parent.L) {
        sibling = parent.R;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }
        if ((sibling.L && sibling.L.C)
            || (sibling.R && sibling.R.C)) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }
          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }
        if ((sibling.L && sibling.L.C)
          || (sibling.R && sibling.R.C)) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }
          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }
      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);

    if (node) node.C = false;
  }
};

function RedBlackRotateLeft(tree, node) {
  var p = node,
      q = node.R,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R) p.R.U = p;
  q.L = p;
}

function RedBlackRotateRight(tree, node) {
  var p = node,
      q = node.L,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L) p.L.U = p;
  q.R = p;
}

function RedBlackFirst(node) {
  while (node.L) node = node.L;
  return node;
}

/* harmony default export */ const src_RedBlackTree = (RedBlackTree);

;// CONCATENATED MODULE: ./node_modules/d3-voronoi/src/Edge.js


function createEdge(left, right, v0, v1) {
  var edge = [null, null],
      index = edges.push(edge) - 1;
  edge.left = left;
  edge.right = right;
  if (v0) setEdgeEnd(edge, left, right, v0);
  if (v1) setEdgeEnd(edge, right, left, v1);
  cells[left.index].halfedges.push(index);
  cells[right.index].halfedges.push(index);
  return edge;
}

function createBorderEdge(left, v0, v1) {
  var edge = [v0, v1];
  edge.left = left;
  return edge;
}

function setEdgeEnd(edge, left, right, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left;
    edge.right = right;
  } else if (edge.left === right) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
}

// Liang–Barsky line clipping.
function clipEdge(edge, x0, y0, x1, y1) {
  var a = edge[0],
      b = edge[1],
      ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?

  if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
  if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
  return true;
}

function connectEdge(edge, x0, y0, x1, y1) {
  var v1 = edge[1];
  if (v1) return true;

  var v0 = edge[0],
      left = edge.left,
      right = edge.right,
      lx = left[0],
      ly = left[1],
      rx = right[0],
      ry = right[1],
      fx = (lx + rx) / 2,
      fy = (ly + ry) / 2,
      fm,
      fb;

  if (ry === ly) {
    if (fx < x0 || fx >= x1) return;
    if (lx > rx) {
      if (!v0) v0 = [fx, y0];
      else if (v0[1] >= y1) return;
      v1 = [fx, y1];
    } else {
      if (!v0) v0 = [fx, y1];
      else if (v0[1] < y0) return;
      v1 = [fx, y0];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;
    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0) v0 = [(y0 - fb) / fm, y0];
        else if (v0[1] >= y1) return;
        v1 = [(y1 - fb) / fm, y1];
      } else {
        if (!v0) v0 = [(y1 - fb) / fm, y1];
        else if (v0[1] < y0) return;
        v1 = [(y0 - fb) / fm, y0];
      }
    } else {
      if (ly < ry) {
        if (!v0) v0 = [x0, fm * x0 + fb];
        else if (v0[0] >= x1) return;
        v1 = [x1, fm * x1 + fb];
      } else {
        if (!v0) v0 = [x1, fm * x1 + fb];
        else if (v0[0] < x0) return;
        v1 = [x0, fm * x0 + fb];
      }
    }
  }

  edge[0] = v0;
  edge[1] = v1;
  return true;
}

function clipEdges(x0, y0, x1, y1) {
  var i = edges.length,
      edge;

  while (i--) {
    if (!connectEdge(edge = edges[i], x0, y0, x1, y1)
        || !clipEdge(edge, x0, y0, x1, y1)
        || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon
            || Math.abs(edge[0][1] - edge[1][1]) > epsilon)) {
      delete edges[i];
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/d3-voronoi/src/Cell.js



function createCell(site) {
  return cells[site.index] = {
    site: site,
    halfedges: []
  };
}

function cellHalfedgeAngle(cell, edge) {
  var site = cell.site,
      va = edge.left,
      vb = edge.right;
  if (site === vb) vb = va, va = site;
  if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va) va = edge[1], vb = edge[0];
  else va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}

function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}

function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}

function sortCellHalfedges() {
  for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
      var index = new Array(m),
          array = new Array(m);
      for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
      index.sort(function(i, j) { return array[j] - array[i]; });
      for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
      for (j = 0; j < m; ++j) halfedges[j] = array[j];
    }
  }
}

function clipCells(x0, y0, x1, y1) {
  var nCells = cells.length,
      iCell,
      cell,
      site,
      iHalfedge,
      halfedges,
      nHalfedges,
      start,
      startX,
      startY,
      end,
      endX,
      endY,
      cover = true;

  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length;

      // Remove any dangling clipped edges.
      while (iHalfedge--) {
        if (!edges[halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      }

      // Insert any border edges as necessary.
      iHalfedge = 0, nHalfedges = halfedges.length;
      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
        if (Math.abs(endX - startX) > epsilon || Math.abs(endY - startY) > epsilon) {
          halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(site, end,
              Math.abs(endX - x0) < epsilon && y1 - endY > epsilon ? [x0, Math.abs(startX - x0) < epsilon ? startY : y1]
              : Math.abs(endY - y1) < epsilon && x1 - endX > epsilon ? [Math.abs(startY - y1) < epsilon ? startX : x1, y1]
              : Math.abs(endX - x1) < epsilon && endY - y0 > epsilon ? [x1, Math.abs(startX - x1) < epsilon ? startY : y0]
              : Math.abs(endY - y0) < epsilon && endX - x0 > epsilon ? [Math.abs(startY - y0) < epsilon ? startX : x0, y0]
              : null)) - 1);
          ++nHalfedges;
        }
      }

      if (nHalfedges) cover = false;
    }
  }

  // If there weren’t any edges, have the closest site cover the extent.
  // It doesn’t matter which corner of the extent we measure!
  if (cover) {
    var dx, dy, d2, dc = Infinity;

    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = cells[iCell]) {
        site = cell.site;
        dx = site[0] - x0;
        dy = site[1] - y0;
        d2 = dx * dx + dy * dy;
        if (d2 < dc) dc = d2, cover = cell;
      }
    }

    if (cover) {
      var v00 = [x0, y0], v01 = [x0, y1], v11 = [x1, y1], v10 = [x1, y0];
      cover.halfedges.push(
        edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1,
        edges.push(createBorderEdge(site, v01, v11)) - 1,
        edges.push(createBorderEdge(site, v11, v10)) - 1,
        edges.push(createBorderEdge(site, v10, v00)) - 1
      );
    }
  }

  // Lastly delete any cells with no edges; these were entirely clipped.
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      if (!cell.halfedges.length) {
        delete cells[iCell];
      }
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/d3-voronoi/src/Circle.js



var circlePool = [];

var firstCircle;

function Circle() {
  RedBlackNode(this);
  this.x =
  this.y =
  this.arc =
  this.site =
  this.cy = null;
}

function attachCircle(arc) {
  var lArc = arc.P,
      rArc = arc.N;

  if (!lArc || !rArc) return;

  var lSite = lArc.site,
      cSite = arc.site,
      rSite = rArc.site;

  if (lSite === rSite) return;

  var bx = cSite[0],
      by = cSite[1],
      ax = lSite[0] - bx,
      ay = lSite[1] - by,
      cx = rSite[0] - bx,
      cy = rSite[1] - by;

  var d = 2 * (ax * cy - ay * cx);
  if (d >= -epsilon2) return;

  var ha = ax * ax + ay * ay,
      hc = cx * cx + cy * cy,
      x = (cy * ha - ay * hc) / d,
      y = (ax * hc - cx * ha) / d;

  var circle = circlePool.pop() || new Circle;
  circle.arc = arc;
  circle.site = cSite;
  circle.x = x + bx;
  circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

  arc.circle = circle;

  var before = null,
      node = circles._;

  while (node) {
    if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
      if (node.L) node = node.L;
      else { before = node.P; break; }
    } else {
      if (node.R) node = node.R;
      else { before = node; break; }
    }
  }

  circles.insert(before, circle);
  if (!before) firstCircle = circle;
}

function detachCircle(arc) {
  var circle = arc.circle;
  if (circle) {
    if (!circle.P) firstCircle = circle.N;
    circles.remove(circle);
    circlePool.push(circle);
    RedBlackNode(circle);
    arc.circle = null;
  }
}

;// CONCATENATED MODULE: ./node_modules/d3-voronoi/src/Beach.js






var beachPool = [];

function Beach() {
  RedBlackNode(this);
  this.edge =
  this.site =
  this.circle = null;
}

function createBeach(site) {
  var beach = beachPool.pop() || new Beach;
  beach.site = site;
  return beach;
}

function detachBeach(beach) {
  detachCircle(beach);
  beaches.remove(beach);
  beachPool.push(beach);
  RedBlackNode(beach);
}

function removeBeach(beach) {
  var circle = beach.circle,
      x = circle.x,
      y = circle.cy,
      vertex = [x, y],
      previous = beach.P,
      next = beach.N,
      disappearing = [beach];

  detachBeach(beach);

  var lArc = previous;
  while (lArc.circle
      && Math.abs(x - lArc.circle.x) < epsilon
      && Math.abs(y - lArc.circle.cy) < epsilon) {
    previous = lArc.P;
    disappearing.unshift(lArc);
    detachBeach(lArc);
    lArc = previous;
  }

  disappearing.unshift(lArc);
  detachCircle(lArc);

  var rArc = next;
  while (rArc.circle
      && Math.abs(x - rArc.circle.x) < epsilon
      && Math.abs(y - rArc.circle.cy) < epsilon) {
    next = rArc.N;
    disappearing.push(rArc);
    detachBeach(rArc);
    rArc = next;
  }

  disappearing.push(rArc);
  detachCircle(rArc);

  var nArcs = disappearing.length,
      iArc;
  for (iArc = 1; iArc < nArcs; ++iArc) {
    rArc = disappearing[iArc];
    lArc = disappearing[iArc - 1];
    setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
  }

  lArc = disappearing[0];
  rArc = disappearing[nArcs - 1];
  rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);

  attachCircle(lArc);
  attachCircle(rArc);
}

function addBeach(site) {
  var x = site[0],
      directrix = site[1],
      lArc,
      rArc,
      dxl,
      dxr,
      node = beaches._;

  while (node) {
    dxl = leftBreakPoint(node, directrix) - x;
    if (dxl > epsilon) node = node.L; else {
      dxr = x - rightBreakPoint(node, directrix);
      if (dxr > epsilon) {
        if (!node.R) {
          lArc = node;
          break;
        }
        node = node.R;
      } else {
        if (dxl > -epsilon) {
          lArc = node.P;
          rArc = node;
        } else if (dxr > -epsilon) {
          lArc = node;
          rArc = node.N;
        } else {
          lArc = rArc = node;
        }
        break;
      }
    }
  }

  createCell(site);
  var newArc = createBeach(site);
  beaches.insert(lArc, newArc);

  if (!lArc && !rArc) return;

  if (lArc === rArc) {
    detachCircle(lArc);
    rArc = createBeach(lArc.site);
    beaches.insert(newArc, rArc);
    newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
    attachCircle(lArc);
    attachCircle(rArc);
    return;
  }

  if (!rArc) { // && lArc
    newArc.edge = createEdge(lArc.site, newArc.site);
    return;
  }

  // else lArc !== rArc
  detachCircle(lArc);
  detachCircle(rArc);

  var lSite = lArc.site,
      ax = lSite[0],
      ay = lSite[1],
      bx = site[0] - ax,
      by = site[1] - ay,
      rSite = rArc.site,
      cx = rSite[0] - ax,
      cy = rSite[1] - ay,
      d = 2 * (bx * cy - by * cx),
      hb = bx * bx + by * by,
      hc = cx * cx + cy * cy,
      vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];

  setEdgeEnd(rArc.edge, lSite, rSite, vertex);
  newArc.edge = createEdge(lSite, site, null, vertex);
  rArc.edge = createEdge(site, rSite, null, vertex);
  attachCircle(lArc);
  attachCircle(rArc);
}

function leftBreakPoint(arc, directrix) {
  var site = arc.site,
      rfocx = site[0],
      rfocy = site[1],
      pby2 = rfocy - directrix;

  if (!pby2) return rfocx;

  var lArc = arc.P;
  if (!lArc) return -Infinity;

  site = lArc.site;
  var lfocx = site[0],
      lfocy = site[1],
      plby2 = lfocy - directrix;

  if (!plby2) return lfocx;

  var hl = lfocx - rfocx,
      aby2 = 1 / pby2 - 1 / plby2,
      b = hl / plby2;

  if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;

  return (rfocx + lfocx) / 2;
}

function rightBreakPoint(arc, directrix) {
  var rArc = arc.N;
  if (rArc) return leftBreakPoint(rArc, directrix);
  var site = arc.site;
  return site[1] === directrix ? site[0] : Infinity;
}

;// CONCATENATED MODULE: ./node_modules/d3-voronoi/src/Diagram.js






var epsilon = 1e-6;
var epsilon2 = 1e-12;
var beaches;
var cells;
var circles;
var edges;

function triangleArea(a, b, c) {
  return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
}

function lexicographic(a, b) {
  return b[1] - a[1]
      || b[0] - a[0];
}

function Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(),
      x,
      y,
      circle;

  edges = [];
  cells = new Array(sites.length);
  beaches = new src_RedBlackTree;
  circles = new src_RedBlackTree;

  while (true) {
    circle = firstCircle;
    if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
      if (site[0] !== x || site[1] !== y) {
        addBeach(site);
        x = site[0], y = site[1];
      }
      site = sites.pop();
    } else if (circle) {
      removeBeach(circle.arc);
    } else {
      break;
    }
  }

  sortCellHalfedges();

  if (extent) {
    var x0 = +extent[0][0],
        y0 = +extent[0][1],
        x1 = +extent[1][0],
        y1 = +extent[1][1];
    clipEdges(x0, y0, x1, y1);
    clipCells(x0, y0, x1, y1);
  }

  this.edges = edges;
  this.cells = cells;

  beaches =
  circles =
  edges =
  cells = null;
}

Diagram.prototype = {
  constructor: Diagram,

  polygons: function() {
    var edges = this.edges;

    return this.cells.map(function(cell) {
      var polygon = cell.halfedges.map(function(i) { return cellHalfedgeStart(cell, edges[i]); });
      polygon.data = cell.site.data;
      return polygon;
    });
  },

  triangles: function() {
    var triangles = [],
        edges = this.edges;

    this.cells.forEach(function(cell, i) {
      if (!(m = (halfedges = cell.halfedges).length)) return;
      var site = cell.site,
          halfedges,
          j = -1,
          m,
          s0,
          e1 = edges[halfedges[m - 1]],
          s1 = e1.left === site ? e1.right : e1.left;

      while (++j < m) {
        s0 = s1;
        e1 = edges[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;
        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });

    return triangles;
  },

  links: function() {
    return this.edges.filter(function(edge) {
      return edge.right;
    }).map(function(edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },

  find: function(x, y, radius) {
    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;

    // Use the previously-found cell, or start with an arbitrary one.
    while (!(cell = that.cells[i1])) if (++i1 >= n) return null;
    var dx = x - cell.site[0], dy = y - cell.site[1], d2 = dx * dx + dy * dy;

    // Traverse the half-edges to find a closer cell, if any.
    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function(e) {
        var edge = that.edges[e], v = edge.left;
        if ((v === cell.site || !v) && !(v = edge.right)) return;
        var vx = x - v[0], vy = y - v[1], v2 = vx * vx + vy * vy;
        if (v2 < d2) d2 = v2, i1 = v.index;
      });
    } while (i1 !== null);

    that._found = i0;

    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
}

;// CONCATENATED MODULE: ./node_modules/d3-voronoi/src/voronoi.js




/* harmony default export */ function voronoi() {
  var x = point_x,
      y = point_y,
      extent = null;

  function voronoi(data) {
    return new Diagram(data.map(function(d, i) {
      var s = [Math.round(x(d, i, data) / epsilon) * epsilon, Math.round(y(d, i, data) / epsilon) * epsilon];
      s.index = i;
      s.data = d;
      return s;
    }), extent);
  }

  voronoi.polygons = function(data) {
    return voronoi(data).polygons();
  };

  voronoi.links = function(data) {
    return voronoi(data).links();
  };

  voronoi.triangles = function(data) {
    return voronoi(data).triangles();
  };

  voronoi.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : constant(+_), voronoi) : x;
  };

  voronoi.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : constant(+_), voronoi) : y;
  };

  voronoi.extent = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
  };

  voronoi.size = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
  };

  return voronoi;
}

;// CONCATENATED MODULE: ./node_modules/d3-voronoi/src/index.js


;// CONCATENATED MODULE: ./node_modules/@vx/voronoi/dist/vx-voronoi.es.js





// returns a d3 voronoi *layout*, for a voronoi *diagram* call `layout(data)`

var voronoi$1 = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 0 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 0 : _ref$height,
      x = _ref.x,
      y = _ref.y;

  var voronoi$$1 = voronoi();

  if (x) voronoi$$1.x(x);
  if (y) voronoi$$1.y(y);

  voronoi$$1.extent([[-1, -1], [width + 1, height + 1]]);

  return voronoi$$1;
});

function vx_voronoi_es_callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}

function vx_voronoi_es_additionalProps(restProps, data) {
  return Object.keys(restProps).reduce(function (ret, cur) {
    ret[cur] = vx_voronoi_es_callOrValue(restProps[cur], data);
    return ret;
  }, {});
}

var vx_voronoi_es_extends = Object.assign || function (target) {
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

var vx_voronoi_es_objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var vx_voronoi_es_propTypes = {
  polygon: prop_types_default().arrayOf((prop_types_default()).array)
};

function VoronoiPolygon(_ref) {
  var polygon = _ref.polygon,
      className = _ref.className,
      restProps = vx_voronoi_es_objectWithoutProperties(_ref, ['polygon', 'className']);

  if (!polygon) return null;
  var data = polygon.data;
  return react.createElement('path', vx_voronoi_es_extends({
    className: classnames_default()('vx-voronoi-polygon', className),
    d: 'M' + polygon.join('L') + 'Z'
  }, vx_voronoi_es_additionalProps(restProps, data)));
}

VoronoiPolygon.propTypes = vx_voronoi_es_propTypes;



;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/chart/Voronoi.js
function Voronoi_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/* eslint react/no-array-index-key: 0, react/no-unused-prop-types: 0 */




var Voronoi_propTypes = {
  data: prop_types_default().arrayOf((prop_types_default()).object).isRequired,
  onClick: (prop_types_default()).func,
  onMouseMove: (prop_types_default()).func,
  onMouseLeave: (prop_types_default()).func,
  onMouseDown: (prop_types_default()).func,
  showVoronoi: (prop_types_default()).bool,
  width: (prop_types_default()).number.isRequired,
  height: (prop_types_default()).number.isRequired,
  x: (prop_types_default()).func.isRequired,
  y: (prop_types_default()).func.isRequired
};
var Voronoi_defaultProps = {
  onClick: null,
  onMouseMove: null,
  onMouseLeave: null,
  onMouseDown: null,
  showVoronoi: false
};

var Voronoi =
/*#__PURE__*/
function (_React$PureComponent) {
  Voronoi_inheritsLoose(Voronoi, _React$PureComponent);

  Voronoi.getVoronoi = function getVoronoi(props) {
    var x = props.x,
        y = props.y,
        data = props.data,
        width = props.width,
        height = props.height;
    return voronoi$1({
      x: x,
      y: y,
      width: width,
      height: height
    })(data);
  };

  function Voronoi(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.state = {
      voronoi: Voronoi.getVoronoi(props)
    };
    return _this;
  }

  var _proto = Voronoi.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (['data', 'x', 'y', 'width', 'height'].some(function (prop) {
      return _this2.props[prop] !== nextProps[prop];
    } // eslint-disable-line react/destructuring-assignment
    )) {
      this.setState({
        voronoi: Voronoi.getVoronoi(nextProps)
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        onMouseLeave = _this$props.onMouseLeave,
        onMouseMove = _this$props.onMouseMove,
        onClick = _this$props.onClick,
        showVoronoi = _this$props.showVoronoi,
        onMouseDown = _this$props.onMouseDown;
    var voronoi = this.state.voronoi;
    return react.createElement(dist_vx_group_es_Group, null, voronoi.polygons().map(function (polygon, i) {
      return react.createElement(VoronoiPolygon, {
        key: "voronoi-" + polygon.length + "-" + i,
        polygon: polygon,
        fill: "transparent",
        stroke: showVoronoi ? '#ddd' : 'transparent',
        strokeWidth: 1,
        onClick: onClick && function () {
          return function (event) {
            onClick({
              event: event,
              datum: polygon.data
            });
          };
        },
        onMouseMove: onMouseMove && function () {
          return function (event) {
            onMouseMove({
              event: event,
              datum: polygon.data
            });
          };
        },
        onMouseLeave: onMouseLeave && function () {
          return onMouseLeave;
        },
        onMouseDown: onMouseDown && function () {
          return onMouseDown;
        }
      });
    }));
  };

  return Voronoi;
}(react.PureComponent);

Voronoi.propTypes = Voronoi_propTypes;
Voronoi.defaultProps = Voronoi_defaultProps;
Voronoi.displayName = 'Voronoi';
/* harmony default export */ const chart_Voronoi = (Voronoi);
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/utils/collectDataFromChildSeries.js



function collectDataFromChildSeries(children) {
  var allData = [];
  react.Children.forEach(children, function (Child) {
    if (Child && Child.props) {
      var data = Child.props.data;
      var name = componentName(Child);

      if (name === AreaDifferenceSeries.displayName) {
        allData = allData.concat(collectDataFromChildSeries(Child.props.children));
      } else if (data && isSeries(name)) {
        allData = allData.concat(Child.props.data);
      }
    }
  });
  return allData;
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/utils/getChartDimensions.js
function getChartDimensions_extends() { getChartDimensions_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return getChartDimensions_extends.apply(this, arguments); }


function getChartDimensions(_ref) {
  var margin = _ref.margin,
      width = _ref.width,
      height = _ref.height;

  var completeMargin = getChartDimensions_extends({}, DEFAULT_CHART_MARGIN, margin);

  return {
    margin: completeMargin,
    innerHeight: Math.max(0, height - completeMargin.top - completeMargin.bottom),
    innerWidth: Math.max(0, width - completeMargin.left - completeMargin.right)
  };
}
// EXTERNAL MODULE: ./node_modules/d3-scale/src/index.js + 19 modules
var d3_scale_src = __webpack_require__(14893);
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/node_modules/@vx/scale/dist/vx-scale.es.js


var band = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      padding = _ref.padding,
      paddingInner = _ref.paddingInner,
      paddingOuter = _ref.paddingOuter,
      align = _ref.align,
      tickFormat = _ref.tickFormat;

  var scale = (0,d3_scale_src.scaleBand)();

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

var point = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      padding = _ref.padding,
      align = _ref.align,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice;

  var scale = scalePoint();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (padding) scale.padding(padding);
  if (align) scale.align(align);

  return scale;
});

var linear = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = (0,d3_scale_src.scaleLinear)();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);

  return scale;
});

var time = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = (0,d3_scale_src.scaleTime)();

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

  var scale = (0,d3_scale_src.scaleUtc)();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);

  return scale;
});

var log = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      base = _ref.base,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = scaleLog();

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

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);
  if (exponent) scale.exponent(exponent);

  return scale;
});

var ordinal = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain,
      unknown = _ref.unknown;

  var scale = (0,d3_scale_src.scaleOrdinal)();

  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  if (unknown) scale.unknown(unknown);

  return scale;
});

var quantize = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain,
      ticks = _ref.ticks,
      tickFormat = _ref.tickFormat,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice;

  var scale = scaleQuantize();

  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (ticks) scale.ticks(ticks);
  if (tickFormat) scale.tickFormat(tickFormat);

  return scale;
});

var quantile = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain;

  var scale = scaleQuantile();

  if (range) scale.range(range);
  if (domain) scale.domain(domain);

  return scale;
});

var threshold = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain;

  var scale = scaleThreshold();

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

function updateScale(scale, _ref) {
  var args = vx_scale_es_objectWithoutProperties(_ref, []);

  var nextScale = scale.copy();
  Object.keys(args).forEach(function (key) {
    if (nextScale.hasOwnProperty(key)) nextScale[key](args[key]);
  });
  return nextScale;
}



;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/utils/getScaleForAccessor.js
function getScaleForAccessor_extends() { getScaleForAccessor_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return getScaleForAccessor_extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var scaleTypeToScale = {
  time: time,
  timeUtc: utc,
  linear: linear,
  band: band,
  ordinal: ordinal
};
function getScaleForAccessor(_ref) {
  var allData = _ref.allData,
      minAccessor = _ref.minAccessor,
      maxAccessor = _ref.maxAccessor,
      type = _ref.type,
      _ref$includeZero = _ref.includeZero,
      includeZero = _ref$includeZero === void 0 ? true : _ref$includeZero,
      range = _ref.range,
      rest = _objectWithoutPropertiesLoose(_ref, ["allData", "minAccessor", "maxAccessor", "type", "includeZero", "range"]);

  var domain;

  if (type === 'band' || type === 'ordinal') {
    domain = allData.map(minAccessor);
  }

  if (type === 'linear' || type === 'time' || type === 'timeUtc') {
    var _extent = (0,d3_array_src.extent)([].concat((0,d3_array_src.extent)(allData, minAccessor), (0,d3_array_src.extent)(allData, maxAccessor))),
        min = _extent[0],
        max = _extent[1];

    domain = [type === 'linear' && includeZero ? Math.min(0, min) : min, type === 'linear' && includeZero ? Math.max(0, max) : max];
  }

  return scaleTypeToScale[type](getScaleForAccessor_extends({
    domain: domain,
    range: range
  }, rest));
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/utils/collectScalesFromProps.js
function collectScalesFromProps_extends() { collectScalesFromProps_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return collectScalesFromProps_extends.apply(this, arguments); }


 // import collectExtentsFromChildSeries from './collectExtentsFromChildSeries';





var collectScalesFromProps_getX = function getX(d) {
  return d && d.x;
};

var xString = function xString(d) {
  return collectScalesFromProps_getX(d).toString();
};

var getY = function getY(d) {
  return d && d.y;
};

var yString = function yString(d) {
  return getY(d).toString();
};

function collectScalesFromProps(props) {
  var xScaleObject = props.xScale,
      yScaleObject = props.yScale,
      children = props.children;

  var _getChartDimensions = getChartDimensions(props),
      innerWidth = _getChartDimensions.innerWidth,
      innerHeight = _getChartDimensions.innerHeight;

  var allData = collectDataFromChildSeries(children); // TODO could collect data extents from child series
  // which would support passing arbitrary x/y accessors
  // const [xExtent, yExtent] = collectExtentsFromChildSeries(children);
  // issues:
  //  voronoi transforms data via scale(getXorY(d))
  //    => Could be solved by transforming in data collection
  //  tooltip/crosshair transforms data via scale(getXorY(d))
  //    => could be solved by transforming in the mousemove call so series own it?

  var xScale = getScaleForAccessor(collectScalesFromProps_extends({
    allData: allData,
    minAccessor: function minAccessor(d) {
      return typeof d.x0 === 'undefined' ? d.x : d.x0;
    },
    maxAccessor: function maxAccessor(d) {
      return typeof d.x1 === 'undefined' ? d.x : d.x1;
    },
    range: [0, innerWidth]
  }, xScaleObject));
  var yScale = getScaleForAccessor(collectScalesFromProps_extends({
    allData: allData,
    minAccessor: function minAccessor(d) {
      return typeof d.y0 === 'undefined' ? d.y : d.y0;
    },
    maxAccessor: function maxAccessor(d) {
      return typeof d.y1 === 'undefined' ? d.y : d.y1;
    },
    range: [innerHeight, 0]
  }, yScaleObject));
  react.Children.forEach(children, function (Child) {
    // Child-specific scales or adjustments here
    var name = componentName(Child);

    if (isBarSeries(name)) {
      var horizontal = Child.props.horizontal;
      var categoryScaleObject = horizontal ? yScaleObject : xScaleObject;

      if (categoryScaleObject.type !== 'band') {
        var categoryScale = horizontal ? yScale : xScale;
        var range = horizontal ? innerHeight : innerWidth;
        var dummyBand = getScaleForAccessor({
          allData: allData,
          minAccessor: horizontal ? yString : xString,
          maxAccessor: horizontal ? yString : xString,
          type: 'band',
          rangeRound: [0, range],
          paddingOuter: 1
        });
        var offset = dummyBand.bandwidth() / 2;
        categoryScale.range([offset, range - offset]);
        categoryScale.barWidth = dummyBand.bandwidth();
        categoryScale.offset = offset;
      }
    }

    if (isCirclePackSeries(name)) {
      yScale.domain([-innerHeight / 2, innerHeight / 2]);
    }
  });
  return {
    xScale: xScale,
    yScale: yScale
  };
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/chart/XYChart.js
function XYChart_extends() { XYChart_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return XYChart_extends.apply(this, arguments); }

function XYChart_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }














var CONTAINER_TRIGGER = 'container';
var SERIES_TRIGGER = 'series';
var VORONOI_TRIGGER = 'voronoi';
var Y_LABEL_OFFSET = 0.7;
var XYChart_propTypes = {
  ariaLabel: (prop_types_default()).string.isRequired,
  children: (prop_types_default()).node,
  disableMouseEvents: (prop_types_default()).bool,
  eventTrigger: prop_types_default().oneOf([CONTAINER_TRIGGER, SERIES_TRIGGER, VORONOI_TRIGGER]),
  eventTriggerRefs: (prop_types_default()).func,
  height: (prop_types_default()).number.isRequired,
  innerRef: (prop_types_default()).func,
  margin: prop_types_default().shape({
    top: (prop_types_default()).number,
    right: (prop_types_default()).number,
    bottom: (prop_types_default()).number,
    left: (prop_types_default()).number
  }),
  renderTooltip: (prop_types_default()).func,
  showXGrid: (prop_types_default()).bool,
  xGridValues: prop_types_default().arrayOf(stringNumberDateObjectPropType),
  xGridOffset: (prop_types_default()).number,
  showYGrid: (prop_types_default()).bool,
  yGridValues: prop_types_default().arrayOf(stringNumberDateObjectPropType),
  yGridOffset: (prop_types_default()).number,
  showVoronoi: (prop_types_default()).bool,
  snapTooltipToDataX: (prop_types_default()).bool,
  snapTooltipToDataY: (prop_types_default()).bool,
  theme: themeShape,
  width: (prop_types_default()).number.isRequired,
  xScale: scaleShape.isRequired,
  yScale: scaleShape.isRequired,
  // these may be passed from WithTooltip
  onClick: (prop_types_default()).func,
  // expects to be called like func({ event, datum })
  onMouseMove: (prop_types_default()).func,
  // expects to be called like func({ event, datum })
  onMouseLeave: (prop_types_default()).func,
  // expects to be called like func({ event, datum })
  tooltipData: prop_types_default().shape({
    event: (prop_types_default()).object,
    datum: (prop_types_default()).object,
    series: (prop_types_default()).object
  })
};
var XYChart_defaultProps = {
  children: null,
  disableMouseEvents: false,
  eventTrigger: SERIES_TRIGGER,
  eventTriggerRefs: null,
  innerRef: null,
  margin: DEFAULT_CHART_MARGIN,
  renderTooltip: null,
  showVoronoi: false,
  showXGrid: false,
  xGridValues: null,
  xGridOffset: null,
  showYGrid: false,
  yGridValues: null,
  yGridOffset: null,
  snapTooltipToDataX: false,
  snapTooltipToDataY: false,
  theme: {},
  onClick: null,
  onMouseMove: null,
  onMouseLeave: null,
  tooltipData: null
}; // accessors

var XYChart_getX = function getX(d) {
  return d && d.x;
};

var XYChart_getY = function getY(d) {
  return d && d.y;
};

var XYChart =
/*#__PURE__*/
function (_React$PureComponent) {
  XYChart_inheritsLoose(XYChart, _React$PureComponent);

  function XYChart(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this; // if renderTooltip is passed we return another XYChart wrapped in WithTooltip
    // therefore we don't want to compute state if the nested chart will do so

    _this.state = props.renderTooltip ? {} : XYChart.getStateFromProps(props);
    _this.getDatumCoords = _this.getDatumCoords.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleContainerEvent = _this.handleContainerEvent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = XYChart.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        renderTooltip = _this$props.renderTooltip,
        eventTriggerRefs = _this$props.eventTriggerRefs;

    if (!renderTooltip && eventTriggerRefs) {
      eventTriggerRefs({
        mousemove: this.handleMouseMove,
        mouseleave: this.handleMouseLeave,
        click: this.handleClick
      });
    }
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var shouldComputeScales = false;

    if (['width', 'height', 'children'].some(function (prop) {
      return _this2.props[prop] !== nextProps[prop];
    } // eslint-disable-line react/destructuring-assignment
    )) {
      shouldComputeScales = true;
    }

    if (['margin', 'xScale', 'yScale'].some( // eslint-disable-next-line react/destructuring-assignment
    function (prop) {
      return !shallowCompareObjectEntries(_this2.props[prop], nextProps[prop]);
    })) {
      shouldComputeScales = true;
    }

    if (shouldComputeScales) this.setState(XYChart.getStateFromProps(nextProps));
  };

  XYChart.getStateFromProps = function getStateFromProps(props) {
    var _getChartDimensions = getChartDimensions(props),
        margin = _getChartDimensions.margin,
        innerWidth = _getChartDimensions.innerWidth,
        innerHeight = _getChartDimensions.innerHeight;

    var _collectScalesFromPro = collectScalesFromProps(props),
        xScale = _collectScalesFromPro.xScale,
        yScale = _collectScalesFromPro.yScale;

    var voronoiData = collectVoronoiData({
      children: props.children,
      getX: XYChart_getX,
      getY: XYChart_getY
    });
    return {
      innerHeight: innerHeight,
      innerWidth: innerWidth,
      margin: margin,
      xScale: xScale,
      yScale: yScale,
      voronoiData: voronoiData,
      voronoiX: function voronoiX(d) {
        return xScale(XYChart_getX(d));
      },
      voronoiY: function voronoiY(d) {
        return yScale(XYChart_getY(d));
      }
    };
  };

  _proto.getNumTicksAndGridValues = function getNumTicksAndGridValues(innerWidth, innerHeight) {
    var _this$props2 = this.props,
        children = _this$props2.children,
        xGridValues = _this$props2.xGridValues,
        yGridValues = _this$props2.yGridValues;
    var xAxis = getChildWithName('XAxis', children);
    var yAxis = getChildWithName('YAxis', children); // use num ticks and tickValues defined on Axes, if relevant

    return {
      numXTicks: propOrFallback(xAxis && xAxis.props, 'numTicks', numTicksForWidth(innerWidth)),
      numYTicks: propOrFallback(yAxis && yAxis.props, 'numTicks', numTicksForHeight(innerHeight)),
      xGridValues: xGridValues || (xAxis && xAxis.props && xAxis.props.tickValues ? xAxis.props.tickValues : null),
      yGridValues: yGridValues || (yAxis && yAxis.props && yAxis.props.tickValues ? yAxis.props.tickValues : null)
    };
  };

  _proto.getDatumCoords = function getDatumCoords(datum) {
    var _this$state = this.state,
        xScale = _this$state.xScale,
        yScale = _this$state.yScale,
        margin = _this$state.margin;
    var coords = {}; // tooltip operates in full width/height space so we must account for margins

    if (datum) coords.x = xScale(XYChart_getX(datum)) + margin.left;
    if (datum) coords.y = yScale(XYChart_getY(datum)) + margin.top;
    return coords;
  };

  _proto.handleContainerEvent = function handleContainerEvent(event) {
    var _this$state2 = this.state,
        xScale = _this$state2.xScale,
        yScale = _this$state2.yScale,
        margin = _this$state2.margin;
    var children = this.props.children;

    var _findClosestDatums = findClosestDatums({
      children: children,
      event: event,
      getX: XYChart_getX,
      getY: XYChart_getY,
      xScale: xScale,
      yScale: yScale,
      margin: margin
    }),
        closestDatum = _findClosestDatums.closestDatum,
        series = _findClosestDatums.series;

    if (closestDatum || Object.keys(series).length > 0) {
      event.persist();
      var args = {
        event: event,
        datum: closestDatum,
        series: series
      };
      if (event.type === 'mousemove') this.handleMouseMove(args);else if (event.type === 'click') this.handleClick(args);
    }
  };

  _proto.handleMouseDown = function handleMouseDown(event) {
    if (this.fireBrushStart) {
      this.fireBrushStart(event);
    }
  };

  _proto.handleMouseMove = function handleMouseMove(args) {
    var _this$props3 = this.props,
        snapTooltipToDataX = _this$props3.snapTooltipToDataX,
        snapTooltipToDataY = _this$props3.snapTooltipToDataY,
        onMouseMove = _this$props3.onMouseMove;
    var isFocusEvent = args.event && args.event.type === 'focus';

    if (onMouseMove) {
      var _this$getDatumCoords = this.getDatumCoords(args.datum),
          x = _this$getDatumCoords.x,
          y = _this$getDatumCoords.y;

      onMouseMove(XYChart_extends({}, args, {
        coords: XYChart_extends({}, (isFocusEvent || snapTooltipToDataX) && {
          x: x
        }, (isFocusEvent || snapTooltipToDataY) && {
          y: y
        }, args.coords)
      }));
    }
  };

  _proto.handleMouseLeave = function handleMouseLeave(args) {
    var onMouseLeave = this.props.onMouseLeave;
    if (onMouseLeave) onMouseLeave(args);
  };

  _proto.handleClick = function handleClick(args) {
    var _this$props4 = this.props,
        snapTooltipToDataX = _this$props4.snapTooltipToDataX,
        snapTooltipToDataY = _this$props4.snapTooltipToDataY,
        onClick = _this$props4.onClick;

    if (onClick) {
      var coords = this.getDatumCoords(args.datum);
      onClick(XYChart_extends({}, args, {
        coords: XYChart_extends({
          x: snapTooltipToDataX ? coords.x : undefined,
          y: snapTooltipToDataY ? coords.y : undefined
        }, args.coords)
      }));
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var renderTooltip = this.props.renderTooltip;

    if (renderTooltip) {
      return react.createElement(WithTooltip/* default */.ZP, {
        renderTooltip: renderTooltip
      }, react.createElement(XYChart, XYChart_extends({}, this.props, {
        renderTooltip: null
      })));
    }

    var _this$props5 = this.props,
        ariaLabel = _this$props5.ariaLabel,
        eventTrigger = _this$props5.eventTrigger,
        children = _this$props5.children,
        showXGrid = _this$props5.showXGrid,
        showYGrid = _this$props5.showYGrid,
        theme = _this$props5.theme,
        height = _this$props5.height,
        width = _this$props5.width,
        innerRef = _this$props5.innerRef,
        tooltipData = _this$props5.tooltipData,
        showVoronoi = _this$props5.showVoronoi,
        xGridOffset = _this$props5.xGridOffset,
        yGridOffset = _this$props5.yGridOffset;
    var _this$state3 = this.state,
        innerWidth = _this$state3.innerWidth,
        innerHeight = _this$state3.innerHeight,
        margin = _this$state3.margin,
        voronoiData = _this$state3.voronoiData,
        voronoiX = _this$state3.voronoiX,
        voronoiY = _this$state3.voronoiY,
        xScale = _this$state3.xScale,
        yScale = _this$state3.yScale;

    var _this$getNumTicksAndG = this.getNumTicksAndGridValues(innerWidth, innerHeight),
        numXTicks = _this$getNumTicksAndG.numXTicks,
        numYTicks = _this$getNumTicksAndG.numYTicks,
        xGridValues = _this$getNumTicksAndG.xGridValues,
        yGridValues = _this$getNumTicksAndG.yGridValues;

    var CrossHairs = []; // ensure these are the top-most layer

    var Brush = null;
    var xAxisOrientation;
    var yAxisOrientation;
    return innerWidth > 0 && innerHeight > 0 && react.createElement("svg", {
      "aria-label": ariaLabel,
      role: "img",
      width: width,
      height: height,
      ref: innerRef
    }, react.createElement(dist_vx_group_es_Group, {
      left: margin.left,
      top: margin.top
    }, showXGrid && react.createElement(Columns, {
      scale: xScale,
      height: innerHeight,
      numTicks: numXTicks,
      stroke: theme.gridStyles && theme.gridStyles.stroke,
      strokeWidth: theme.gridStyles && theme.gridStyles.strokeWidth,
      tickValues: xGridValues,
      offset: isDefined(xGridOffset) ? xGridOffset : xScale.bandwidth && xScale.bandwidth() / 2 || 0
    }), showYGrid && react.createElement(Rows, {
      scale: yScale,
      width: innerWidth,
      numTicks: numYTicks,
      stroke: theme.gridStyles && theme.gridStyles.stroke,
      strokeWidth: theme.gridStyles && theme.gridStyles.strokeWidth,
      tickValues: yGridValues,
      offset: isDefined(yGridOffset) ? yGridOffset : yScale.bandwidth && yScale.bandwidth() / 2 || 0
    }), react.Children.map(children, function (Child) {
      var name = componentName(Child);

      if (isAxis(name)) {
        var styleKey = name[0].toLowerCase();
        var labelOffset = typeof Child.props.labelOffset === 'number' ? Child.props.labelOffset : name === 'YAxis' && Y_LABEL_OFFSET * margin[Child.props.orientation] || 0;

        if (name === 'XAxis') {
          xAxisOrientation = Child.props.orientation;
        } else {
          yAxisOrientation = Child.props.orientation;
        }

        return react.cloneElement(Child, {
          innerHeight: innerHeight,
          innerWidth: innerWidth,
          height: height,
          width: width,
          labelOffset: labelOffset,
          numTicks: name === 'XAxis' ? numXTicks : numYTicks,
          scale: name === 'XAxis' ? xScale : yScale,
          rangePadding: Child.props.rangePadding || (name === 'XAxis' ? xScale.offset : undefined),
          axisStyles: XYChart_extends({}, theme[styleKey + "AxisStyles"], Child.props.axisStyles),
          tickStyles: XYChart_extends({}, theme[styleKey + "TickStyles"], Child.props.tickStyles)
        });
      } else if (isSeries(name)) {
        return react.cloneElement(Child, {
          xScale: xScale,
          yScale: yScale,
          margin: margin,
          onClick: Child.props.onClick || (Child.props.disableMouseEvents ? undefined : _this3.handleClick),
          onMouseLeave: Child.props.onMouseLeave || (Child.props.disableMouseEvents ? undefined : _this3.handleMouseLeave),
          onMouseMove: Child.props.onMouseMove || (Child.props.disableMouseEvents ? undefined : _this3.handleMouseMove)
        });
      } else if (isCrossHair(name)) {
        CrossHairs.push(Child);
        return null;
      } else if (isReferenceLine(name)) {
        return react.cloneElement(Child, {
          xScale: xScale,
          yScale: yScale
        });
      } else if (isBrush(name)) {
        Brush = Child;
        return null;
      }

      return Child;
    }), eventTrigger === VORONOI_TRIGGER && react.createElement(chart_Voronoi, {
      data: voronoiData,
      x: voronoiX,
      y: voronoiY,
      width: innerWidth,
      height: innerHeight,
      onClick: this.handleClick,
      onMouseDown: this.handleMouseDown,
      onMouseMove: this.handleMouseMove,
      onMouseLeave: this.handleMouseLeave,
      showVoronoi: showVoronoi
    }), eventTrigger === CONTAINER_TRIGGER && react.createElement("rect", {
      x: 0,
      y: 0,
      width: innerWidth,
      height: innerHeight,
      fill: "transparent",
      fillOpacity: 0,
      onMouseDown: this.handleMouseDown,
      onClick: this.handleContainerEvent,
      onMouseMove: this.handleContainerEvent,
      onMouseLeave: this.handleMouseLeave
    }), Brush && react.cloneElement(Brush, {
      xScale: xScale,
      yScale: yScale,
      innerHeight: innerHeight,
      innerWidth: innerWidth,
      margin: margin,
      onMouseMove: this.handleContainerEvent,
      onMouseLeave: this.handleMouseLeave,
      onClick: this.handleContainerEvent,
      xAxisOrientation: xAxisOrientation,
      yAxisOrientation: yAxisOrientation
    }), tooltipData && CrossHairs.length > 0 && CrossHairs.map(function (CrossHair, i) {
      return react.cloneElement(CrossHair, {
        key: "crosshair-" + i,
        // eslint-disable-line react/no-array-index-key
        datum: tooltipData.datum,
        series: tooltipData.series,
        getScaledX: function getScaledX(d) {
          return xScale(XYChart_getX(d) || 0) + (xScale.bandwidth ? xScale.bandwidth() / 2 : 0);
        },
        getScaledY: function getScaledY(d) {
          return yScale(XYChart_getY(d) || 0) + (yScale.bandwidth ? yScale.bandwidth() / 2 : 0);
        },
        xScale: xScale,
        yScale: yScale
      });
    })));
  };

  return XYChart;
}(react.PureComponent);

XYChart.propTypes = XYChart_propTypes;
XYChart.defaultProps = XYChart_defaultProps;
XYChart.displayName = 'XYChart';
/* harmony default export */ const chart_XYChart = (XYChart);
// EXTERNAL MODULE: ./node_modules/@data-ui/xy-chart/node_modules/@vx/gradient/build/gradients/LinearGradient.js
var LinearGradient = __webpack_require__(31390);
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/aesthetic/LinearGradient.js

/* harmony default export */ const aesthetic_LinearGradient = (LinearGradient/* default */.Z);
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/node_modules/@vx/shape/dist/vx-shape.es.js









function dist_vx_shape_es_callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}

function dist_vx_shape_es_additionalProps(restProps, data) {
  return Object.keys(restProps).reduce(function (ret, cur) {
    ret[cur] = dist_vx_shape_es_callOrValue(restProps[cur], data);
    return ret;
  }, {});
}

var shape_dist_vx_shape_es_extends = Object.assign || function (target) {
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

var shape_dist_vx_shape_es_objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function dist_vx_shape_es_Arc(_ref) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref, ['className', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius']);

  var arc$$1 = arc();
  if (centroid) arc$$1.centroid(centroid);
  if (innerRadius) arc$$1.innerRadius(innerRadius);
  if (outerRadius) arc$$1.outerRadius(outerRadius);
  if (cornerRadius) arc$$1.cornerRadius(cornerRadius);
  if (startAngle) arc$$1.startAngle(startAngle);
  if (endAngle) arc$$1.endAngle(endAngle);
  if (padAngle) arc$$1.padAngle(padAngle);
  if (padRadius) arc$$1.padRadius(padRadius);
  return React.createElement('path', shape_dist_vx_shape_es_extends({ className: cx('vx-arc', className), d: arc$$1(data) }, dist_vx_shape_es_additionalProps(restProps, data)));
}

function dist_vx_shape_es_Pie(_ref) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref, ['className', 'top', 'left', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius', 'pieSort', 'pieSortValues', 'pieValue']);

  var path$$1 = arc();
  path$$1.innerRadius(innerRadius);
  if (outerRadius) path$$1.outerRadius(outerRadius);
  if (cornerRadius) path$$1.cornerRadius(cornerRadius);
  if (padRadius) path$$1.padRadius(padRadius);
  var pie$$1 = pie();
  if (pieSort) pie$$1.sort(pieSort);
  if (pieSortValues) pie$$1.sortValues(pieSortValues);
  if (pieValue) pie$$1.value(pieValue);
  if (padAngle != null) pie$$1.padAngle(padAngle);
  if (startAngle != null) pie$$1.startAngle(startAngle);
  if (endAngle != null) pie$$1.endAngle(endAngle);
  var arcs = pie$$1(data);
  return React.createElement(
    Group,
    { className: 'vx-pie-arcs-group', top: top, left: left },
    arcs.map(function (arc$$1, i) {
      var c = void 0;
      if (centroid) c = path$$1.centroid(arc$$1);
      return React.createElement(
        'g',
        { key: 'pie-arc-' + i },
        React.createElement('path', shape_dist_vx_shape_es_extends({
          className: cx('vx-pie-arc', className),
          d: path$$1(arc$$1)
        }, dist_vx_shape_es_additionalProps(restProps, shape_dist_vx_shape_es_extends({}, arc$$1, {
          index: i,
          centroid: c
        })))),
        centroid && centroid(c, arc$$1)
      );
    })
  );
}

dist_vx_shape_es_Line.propTypes = {
  innerRef: (prop_types_default()).func
};

function dist_vx_shape_es_Line(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === undefined ? new vx_point_es.Point({ x: 0, y: 0 }) : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === undefined ? new vx_point_es.Point({ x: 1, y: 1 }) : _ref$to,
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref, ['from', 'to', 'stroke', 'strokeWidth', 'strokeDasharray', 'transform', 'className', 'data', 'innerRef']);

  return react.createElement('line', shape_dist_vx_shape_es_extends({
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
  }, dist_vx_shape_es_additionalProps(restProps, data)));
}

dist_vx_shape_es_LinePath.propTypes = {
  innerRef: (prop_types_default()).func
};

function dist_vx_shape_es_LinePath(_ref) {
  var data = _ref.data,
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
      curve = _ref$curve === undefined ? src.curveLinear : _ref$curve,
      glyph = _ref.glyph,
      innerRef = _ref.innerRef,
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref, ['data', 'xScale', 'yScale', 'x', 'y', 'defined', 'className', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeDashoffset', 'fill', 'curve', 'glyph', 'innerRef']);

  var path$$1 = (0,src.line)().x(function (d) {
    return xScale(x(d));
  }).y(function (d) {
    return yScale(y(d));
  }).defined(defined).curve(curve);
  return react.createElement(
    'g',
    null,
    react.createElement('path', shape_dist_vx_shape_es_extends({
      ref: innerRef,
      className: classnames_default()('vx-linepath', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      strokeDashoffset: strokeDashoffset,
      fill: fill
    }, dist_vx_shape_es_additionalProps(restProps, data))),
    glyph && react.createElement(
      'g',
      { className: 'vx-linepath-glyphs' },
      data.map(glyph)
    )
  );
}

dist_vx_shape_es_LineRadial.propTypes = {
  innerRef: (prop_types_default()).func
};

function dist_vx_shape_es_LineRadial(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      angle = _ref.angle,
      radius = _ref.radius,
      defined = _ref.defined,
      curve = _ref.curve,
      data = _ref.data,
      innerRef = _ref.innerRef,
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref, ['className', 'angle', 'radius', 'defined', 'curve', 'data', 'innerRef']);

  var path$$1 = (0,src.radialLine)();
  if (angle) path$$1.angle(angle);
  if (radius) path$$1.radius(radius);
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  return react.createElement(
    'g',
    null,
    react.createElement('path', shape_dist_vx_shape_es_extends({
      ref: innerRef,
      className: classnames_default()('vx-line-radial', className),
      d: path$$1(data)
    }, dist_vx_shape_es_additionalProps(restProps, data)))
  );
}

dist_vx_shape_es_Area.propTypes = {
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

function dist_vx_shape_es_Area(_ref) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref, ['children', 'x', 'x0', 'x1', 'y', 'y0', 'y1', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path$$1 = (0,src.area)();
  if (x) path$$1.x(function (d) {
    return xScale(x(d));
  });
  if (x0) path$$1.x0(function (d) {
    return xScale(x0(d));
  });
  if (x1) path$$1.x1(function (d) {
    return xScale(x1(d));
  });
  if (y) path$$1.y(function (d) {
    return yScale(y(d));
  });
  if (y0) path$$1.y0(function (d) {
    return yScale(y0(d));
  });
  if (y1) path$$1.y1(function (d) {
    return yScale(y1(d));
  });
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  if (children) return children({ path: path$$1 });
  return react.createElement(
    'g',
    null,
    react.createElement('path', shape_dist_vx_shape_es_extends({
      ref: innerRef,
      className: classnames_default()('vx-area', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, dist_vx_shape_es_additionalProps(restProps, data)))
  );
}

dist_vx_shape_es_AreaClosed.propTypes = {
  innerRef: (prop_types_default()).func
};

function dist_vx_shape_es_AreaClosed(_ref) {
  var x = _ref.x,
      y = _ref.y,
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref, ['x', 'y', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path$$1 = (0,src.area)().x(function (d) {
    return xScale(x(d));
  }).y0(yScale.range()[0]).y1(function (d) {
    return yScale(y(d));
  }).defined(defined);
  if (curve) path$$1.curve(curve);
  return react.createElement(
    'g',
    null,
    react.createElement('path', shape_dist_vx_shape_es_extends({
      ref: innerRef,
      className: classnames_default()('vx-area-closed', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, dist_vx_shape_es_additionalProps(restProps, data)))
  );
}

function dist_vx_shape_es_AreaStack(_ref) {
  var className = _ref.className,
      _ref$top = _ref.top,
      _ref$left = _ref.left,
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'glyph', 'reverse']);

  var stack$$1 = stack();
  if (keys) stack$$1.keys(keys);

  var path$$1 = area();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);
  if (y0) path$$1.y0(y0);
  if (y1) path$$1.y1(y1);
  if (curve) path$$1.curve(curve);
  if (defined) path$$1.defined(defined);

  var seriesData = stack$$1(data);
  if (reverse) seriesData.reverse();

  return React.createElement(
    'g',
    null,
    seriesData.map(function (series, i) {
      return React.createElement('path', shape_dist_vx_shape_es_extends({
        className: cx('vx-area-stack', className),
        key: 'area-stack-' + i + '-' + (series.key || ''),
        d: path$$1(series)
      }, dist_vx_shape_es_additionalProps(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    }),
    !!glyph && React.createElement(
      'g',
      { className: 'vx-area-stack-glyphs' },
      data.map(glyph)
    )
  );
}

dist_vx_shape_es_Bar.propTypes = {
  innerRef: (prop_types_default()).func
};

function dist_vx_shape_es_Bar(_ref) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'fillOpacity', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity']);

  return react.createElement('rect', shape_dist_vx_shape_es_extends({
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
  }, dist_vx_shape_es_additionalProps(restProps, data)));
}

function dist_vx_shape_es_BarGroup(_ref) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x0', 'x0Scale', 'x1Scale', 'yScale', 'zScale', 'keys', 'height']);

  var format = x0Scale.tickFormat ? x0Scale.tickFormat() : function (d) {
    return d;
  };
  return react.createElement(
    dist_vx_group_es_Group,
    { className: classnames_default()('vx-bar-group', className), top: top, left: left },
    data && data.map(function (d, i) {
      return react.createElement(
        dist_vx_group_es_Group,
        { key: 'bar-group-' + i + '-' + x0(d), left: x0Scale(x0(d)) },
        keys && keys.map(function (key, i) {
          var value = d[key];
          return react.createElement(dist_vx_shape_es_Bar, shape_dist_vx_shape_es_extends({
            key: 'bar-group-bar-' + i + '-' + value + '-' + key,
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

dist_vx_shape_es_BarGroup.propTypes = {
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

function dist_vx_shape_es_BarStack(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x = _ref.x,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x', 'xScale', 'yScale', 'zScale', 'keys', 'height']);

  var series = (0,src.stack)().keys(keys)(data);
  var format = xScale.tickFormat ? xScale.tickFormat() : function (d) {
    return d;
  };
  var bandwidth = xScale.bandwidth();
  var step = xScale.step();
  var paddingInner = xScale.paddingInner();
  var paddingOuter = xScale.paddingOuter();
  return react.createElement(
    dist_vx_group_es_Group,
    { className: classnames_default()('vx-bar-stack', className), top: top, left: left },
    series && series.map(function (s, i) {
      return react.createElement(
        dist_vx_group_es_Group,
        { key: 'vx-bar-stack-' + i },
        s.map(function (d, ii) {
          var barHeight = yScale(d[0]) - yScale(d[1]);
          return react.createElement(dist_vx_shape_es_Bar, shape_dist_vx_shape_es_extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: xScale(x(d.data)),
            y: yScale(d[1]),
            width: bandwidth,
            height: barHeight,
            fill: zScale(s.key),
            data: {
              bandwidth: bandwidth,
              paddingInner: paddingInner,
              paddingOuter: paddingOuter,
              step: step,
              key: s.key,
              value: d[1],
              height: barHeight,
              width: bandwidth,
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

dist_vx_shape_es_BarStack.propTypes = {
  data: (prop_types_default()).array.isRequired,
  x: (prop_types_default()).func.isRequired,
  xScale: (prop_types_default()).func.isRequired,
  yScale: (prop_types_default()).func.isRequired,
  zScale: (prop_types_default()).func.isRequired,
  keys: (prop_types_default()).array.isRequired,
  className: (prop_types_default()).string,
  top: (prop_types_default()).number,
  left: (prop_types_default()).number
};

function dist_vx_shape_es_BarStackHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      y = _ref.y,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'y', 'xScale', 'yScale', 'zScale', 'keys', 'height']);

  var series = (0,src.stack)().keys(keys)(data);
  var format = yScale.tickFormat ? yScale.tickFormat() : function (d) {
    return d;
  };
  var bandwidth = yScale.bandwidth();
  var step = yScale.step();
  var paddingInner = yScale.paddingInner();
  var paddingOuter = yScale.paddingOuter();
  return react.createElement(
    dist_vx_group_es_Group,
    { className: classnames_default()('vx-bar-stack-horizontal', className), top: top, left: left },
    series && series.map(function (s, i) {
      return react.createElement(
        dist_vx_group_es_Group,
        { key: 'vx-bar-stack-horizontal-' + i },
        s.map(function (d, ii) {
          var barWidth = xScale(d[1]) - xScale(d[0]);
          return react.createElement(dist_vx_shape_es_Bar, shape_dist_vx_shape_es_extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: xScale(d[0]),
            y: yScale(y(d.data)),
            width: barWidth,
            height: bandwidth,
            fill: zScale(s.key),
            data: {
              bandwidth: bandwidth,
              paddingInner: paddingInner,
              paddingOuter: paddingOuter,
              step: step,
              key: s.key,
              value: d[0],
              height: bandwidth,
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

dist_vx_shape_es_BarStackHorizontal.propTypes = {
  data: (prop_types_default()).array.isRequired,
  y: (prop_types_default()).func.isRequired,
  xScale: (prop_types_default()).func.isRequired,
  yScale: (prop_types_default()).func.isRequired,
  zScale: (prop_types_default()).func.isRequired,
  keys: (prop_types_default()).array.isRequired,
  className: (prop_types_default()).string,
  top: (prop_types_default()).number,
  left: (prop_types_default()).number
};

var dist_vx_shape_es_STACK_ORDERS = {
  ascending: src.stackOrderAscending,
  descending: src.stackOrderDescending,
  insideout: src.stackOrderInsideOut,
  none: src.stackOrderNone,
  reverse: src.stackOrderReverse
};

var dist_vx_shape_es_STACK_ORDER_NAMES = Object.keys(dist_vx_shape_es_STACK_ORDERS);

function dist_vx_shape_es_stackOrder(order) {
  return dist_vx_shape_es_STACK_ORDERS[order] || dist_vx_shape_es_STACK_ORDERS.none;
}

var dist_vx_shape_es_STACK_OFFSETS = {
  expand: src.stackOffsetExpand,
  diverging: src.stackOffsetDiverging,
  none: src.stackOffsetNone,
  silhouette: src.stackOffsetSilhouette,
  wiggle: src.stackOffsetWiggle
};

var dist_vx_shape_es_STACK_OFFSET_NAMES = Object.keys(dist_vx_shape_es_STACK_OFFSETS);

function dist_vx_shape_es_stackOffset(offset) {
  return dist_vx_shape_es_STACK_OFFSETS[offset] || dist_vx_shape_es_STACK_OFFSETS.none;
}

function dist_vx_shape_es_Stack(_ref) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'value', 'order', 'offset', 'render', 'reverse']);

  var stack$$1 = stack();
  if (keys) stack$$1.keys(keys);
  if (value) stack$$1.value(value);
  if (order) stack$$1.order(dist_vx_shape_es_stackOrder(order));
  if (offset) stack$$1.offset(dist_vx_shape_es_stackOffset(offset));

  var path$$1 = area();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);
  if (y0) path$$1.y0(y0);
  if (y1) path$$1.y1(y1);
  if (curve) path$$1.curve(curve);
  if (defined) path$$1.defined(defined);

  var seriesData = stack$$1(data);
  if (reverse) seriesData.reverse();

  if (render) return React.createElement(
    Group,
    { top: top, left: left },
    render({ seriesData: seriesData, path: path$$1 })
  );

  return React.createElement(
    Group,
    { top: top, left: left },
    seriesData.map(function (series, i) {
      return React.createElement('path', shape_dist_vx_shape_es_extends({
        className: cx('vx-stack', className),
        key: 'stack-' + i + '-' + (series.key || ''),
        d: path$$1(series)
      }, dist_vx_shape_es_additionalProps(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    })
  );
}

function dist_vx_shape_es_pathHorizontalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var link = (0,src.linkHorizontal)();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

dist_vx_shape_es_LinkHorizontal.propTypes = {
  innerRef: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function dist_vx_shape_es_LinkHorizontal(_ref2) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || dist_vx_shape_es_pathHorizontalDiagonal({ source: source, target: target, x: x, y: y });
  return react.createElement('path', shape_dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link-horizontal', className),
    d: path$$1(data)
  }, dist_vx_shape_es_additionalProps(restProps, data)));
}

function dist_vx_shape_es_pathVerticalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var link = (0,src.linkVertical)();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

dist_vx_shape_es_LinkVertical.propTypes = {
  innerRef: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function dist_vx_shape_es_LinkVertical(_ref2) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || dist_vx_shape_es_pathVerticalDiagonal({ source: source, target: target, x: x, y: y });
  return react.createElement('path', shape_dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link-vertical', className),
    d: path$$1(data)
  }, dist_vx_shape_es_additionalProps(restProps, data)));
}

function dist_vx_shape_es_pathRadialDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      angle = _ref.angle,
      radius = _ref.radius;

  return function (data) {
    var link = (0,src.linkRadial)();
    link.angle(angle);
    link.radius(radius);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

dist_vx_shape_es_LinkRadial.propTypes = {
  innerRef: (prop_types_default()).func,
  angle: (prop_types_default()).func,
  radius: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function dist_vx_shape_es_LinkRadial(_ref2) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'angle', 'radius', 'source', 'target']);

  path$$1 = path$$1 || dist_vx_shape_es_pathRadialDiagonal({ source: source, target: target, angle: angle, radius: radius });
  return react.createElement('path', shape_dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link-radius', className),
    d: path$$1(data)
  }, dist_vx_shape_es_additionalProps(restProps, data)));
}

function dist_vx_shape_es_pathHorizontalCurve(_ref) {
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

dist_vx_shape_es_LinkHorizontalCurve.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function dist_vx_shape_es_LinkHorizontalCurve(_ref2) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || dist_vx_shape_es_pathHorizontalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', shape_dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, dist_vx_shape_es_additionalProps(restProps, data)));
}

function dist_vx_shape_es_pathVerticalCurve(_ref) {
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

dist_vx_shape_es_LinkVerticalCurve.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function dist_vx_shape_es_LinkVerticalCurve(_ref2) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || dist_vx_shape_es_pathVerticalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', shape_dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, dist_vx_shape_es_additionalProps(restProps, data)));
}

function dist_vx_shape_es_pathRadialCurve(_ref) {
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

dist_vx_shape_es_LinkRadialCurve.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function dist_vx_shape_es_LinkRadialCurve(_ref2) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || dist_vx_shape_es_pathRadialCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', shape_dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, dist_vx_shape_es_additionalProps(restProps, data)));
}

function dist_vx_shape_es_pathHorizontalLine(_ref) {
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

dist_vx_shape_es_LinkHorizontalLine.propTypes = {
  innerRef: (prop_types_default()).func,
  path: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func
};

function dist_vx_shape_es_LinkHorizontalLine(_ref2) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || dist_vx_shape_es_pathHorizontalLine({ source: source, target: target, x: x, y: y });
  return react.createElement('path', shape_dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, dist_vx_shape_es_additionalProps(restProps, data)));
}

function dist_vx_shape_es_pathVerticalLine(_ref) {
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

dist_vx_shape_es_LinkVerticalLine.propTypes = {
  innerRef: (prop_types_default()).func,
  path: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func
};

function dist_vx_shape_es_LinkVerticalLine(_ref2) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || dist_vx_shape_es_pathVerticalLine({ source: source, target: target, x: x, y: y });
  return react.createElement('path', shape_dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, dist_vx_shape_es_additionalProps(restProps, data)));
}

function dist_vx_shape_es_pathRadialLine(_ref) {
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

dist_vx_shape_es_LinkRadialStep.propTypes = {
  innerRef: (prop_types_default()).func,
  path: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func
};

function dist_vx_shape_es_LinkRadialStep(_ref2) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || dist_vx_shape_es_pathRadialLine({ source: source, target: target, x: x, y: y });
  return react.createElement('path', shape_dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, dist_vx_shape_es_additionalProps(restProps, data)));
}

function dist_vx_shape_es_pathHorizontalStep(_ref) {
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

dist_vx_shape_es_LinkHorizontalStep.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function dist_vx_shape_es_LinkHorizontalStep(_ref2) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'percent', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || dist_vx_shape_es_pathHorizontalStep({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', shape_dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, dist_vx_shape_es_additionalProps(restProps, data)));
}

function dist_vx_shape_es_pathVerticalStep(_ref) {
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

dist_vx_shape_es_LinkVerticalStep.propTypes = {
  innerRef: (prop_types_default()).func,
  percent: (prop_types_default()).number,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function dist_vx_shape_es_LinkVerticalStep(_ref2) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'percent', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || dist_vx_shape_es_pathVerticalStep({ source: source, target: target, x: x, y: y, percent: percent });
  return react.createElement('path', shape_dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, dist_vx_shape_es_additionalProps(restProps, data)));
}

function dist_vx_shape_es_pathRadialStep(_ref) {
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

dist_vx_shape_es_LinkRadialStep$1.propTypes = {
  innerRef: (prop_types_default()).func,
  x: (prop_types_default()).func,
  y: (prop_types_default()).func,
  source: (prop_types_default()).func,
  target: (prop_types_default()).func,
  path: (prop_types_default()).func
};

function dist_vx_shape_es_LinkRadialStep$1(_ref2) {
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
      restProps = shape_dist_vx_shape_es_objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || dist_vx_shape_es_pathRadialStep({ source: source, target: target, x: x, y: y });
  return react.createElement('path', shape_dist_vx_shape_es_extends({
    ref: innerRef,
    className: classnames_default()('vx-link', className),
    d: path$$1(data)
  }, dist_vx_shape_es_additionalProps(restProps, data)));
}



;// CONCATENATED MODULE: ./node_modules/@data-ui/shared/esm/components/FocusBlurHandler.js
function FocusBlurHandler_inheritsLoose(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}function FocusBlurHandler_assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}var FocusBlurHandler_propTypes={children:(prop_types_default()).node,onFocus:(prop_types_default()).func,onBlur:(prop_types_default()).func},FocusBlurHandler_defaultProps={children:null,onFocus:null,onBlur:null},FocusBlurHandler=/*#__PURE__*/function(a){function b(b){var c;return c=a.call(this,b)||this,c.handleOnClick=c.handleOnClick.bind(FocusBlurHandler_assertThisInitialized(FocusBlurHandler_assertThisInitialized(c))),c}FocusBlurHandler_inheritsLoose(b,a);var c=b.prototype;return c.handleOnClick=function b(a){a.preventDefault()},c.render=function e(){var a=this.props,b=a.children,c=a.onFocus,d=a.onBlur;return react.createElement("a",{// eslint-disable-line jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid
xlinkHref:(d||c)&&"#",role:"presentation",onBlur:d,onFocus:c,onClick:this.handleOnClick},b)},b}(react.PureComponent);FocusBlurHandler.propTypes=FocusBlurHandler_propTypes,FocusBlurHandler.defaultProps=FocusBlurHandler_defaultProps,FocusBlurHandler.displayName="FocusBlurHandler";
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/series/AreaSeries.js
function AreaSeries_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function AreaSeries_extends() { AreaSeries_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AreaSeries_extends.apply(this, arguments); }













var AreaSeries_propTypes = AreaSeries_extends({}, sharedSeriesProps, {
  data: areaSeriesDataShape.isRequired,
  fill: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  fillOpacity: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  interpolation: interpolationShape,
  stroke: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  strokeDasharray: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  strokeWidth: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  strokeLinecap: prop_types_default().oneOf(['butt', 'square', 'round', 'inherit'])
});

var AreaSeries_defaultProps = {
  interpolation: 'monotoneX',
  stroke: esm_color/* default.default */.ZP["default"],
  strokeWidth: 3,
  strokeDasharray: null,
  strokeLinecap: 'round',
  fill: esm_color/* default.default */.ZP["default"],
  fillOpacity: 0.3
};

var x = function x(d) {
  return d && d.x;
};

var AreaSeries_getY = function getY(d) {
  return d && d.y;
};

var AreaSeries_getY0 = function getY0(d) {
  return d && d.y0;
};

var AreaSeries_getY1 = function getY1(d) {
  return d && d.y1;
};

var definedClosed = function definedClosed(d) {
  return isDefined(AreaSeries_getY(d));
};

var definedOpen = function definedOpen(d) {
  return isDefined(AreaSeries_getY0(d)) && isDefined(AreaSeries_getY1(d));
};

var noEventsStyles = {
  pointerEvents: 'none'
};

var AreaSeries =
/*#__PURE__*/
function (_React$PureComponent) {
  AreaSeries_inheritsLoose(AreaSeries, _React$PureComponent);

  function AreaSeries() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = AreaSeries.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        data = _this$props.data,
        disableMouseEvents = _this$props.disableMouseEvents,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale,
        margin = _this$props.margin,
        stroke = _this$props.stroke,
        strokeWidth = _this$props.strokeWidth,
        strokeDasharray = _this$props.strokeDasharray,
        strokeLinecap = _this$props.strokeLinecap,
        fill = _this$props.fill,
        fillOpacity = _this$props.fillOpacity,
        interpolation = _this$props.interpolation,
        onClick = _this$props.onClick,
        onMouseMove = _this$props.onMouseMove,
        onMouseLeave = _this$props.onMouseLeave;
    if (!xScale || !yScale) return null;
    var datum0 = data[0] || {};
    var isClosed = !definedOpen(datum0);
    var yMin = yScale.domain()[0];
    var y0 = isClosed ? function () {
      return yMin;
    } : AreaSeries_getY0;
    var y1 = isClosed ? AreaSeries_getY : AreaSeries_getY1;
    var defined = isClosed ? definedClosed : definedOpen;
    var strokeDasharrayValue = chartUtils_callOrValue(strokeDasharray, data);
    var strokeValue = chartUtils_callOrValue(stroke, data);
    var strokeWidthValue = chartUtils_callOrValue(strokeWidth, data);
    var fillValue = chartUtils_callOrValue(fill, data);
    var curve = interpolatorLookup[interpolation] || interpolatorLookup.monotoneX;
    return react.createElement(dist_vx_group_es_Group, {
      style: disableMouseEvents ? noEventsStyles : null,
      onClick: disableMouseEvents ? null : onClick && function (event) {
        var d = findClosestDatum({
          data: data,
          getX: x,
          event: event,
          xScale: xScale,
          marginLeft: margin.left
        });
        onClick({
          event: event,
          data: data,
          datum: d,
          color: fillValue
        });
      },
      onMouseMove: disableMouseEvents ? null : onMouseMove && function (event) {
        var d = findClosestDatum({
          data: data,
          getX: x,
          event: event,
          xScale: xScale,
          marginLeft: margin.left
        });
        onMouseMove({
          event: event,
          data: data,
          datum: d,
          color: fillValue
        });
      },
      onMouseLeave: disableMouseEvents ? null : onMouseLeave
    }, react.createElement(dist_vx_shape_es_Area, {
      data: data,
      x: x,
      y0: y0,
      y1: y1,
      xScale: xScale,
      yScale: yScale,
      fill: fillValue,
      fillOpacity: chartUtils_callOrValue(fillOpacity, data),
      stroke: "transparent",
      strokeWidth: strokeWidthValue,
      curve: curve,
      defined: defined
    }), strokeWidthValue > 0 && !isClosed && react.createElement(dist_vx_shape_es_LinePath, {
      data: data,
      x: x,
      y: y0,
      xScale: xScale,
      yScale: yScale,
      stroke: strokeValue,
      strokeWidth: strokeWidthValue,
      strokeDasharray: strokeDasharrayValue,
      strokeLinecap: strokeLinecap,
      curve: curve,
      glyph: null,
      defined: defined
    }), react.createElement(dist_vx_shape_es_LinePath, {
      data: data,
      x: x,
      y: y1,
      xScale: xScale,
      yScale: yScale,
      stroke: strokeValue,
      strokeWidth: strokeWidthValue,
      strokeDasharray: strokeDasharrayValue,
      strokeLinecap: strokeLinecap,
      curve: curve,
      defined: defined,
      glyph: function glyph(d, i) {
        return react.createElement(FocusBlurHandler, {
          key: "areapoint-" + i,
          onBlur: disableMouseEvents ? null : onMouseLeave,
          onFocus: disableMouseEvents ? null : function (event) {
            onMouseMove({
              event: event,
              data: data,
              datum: d,
              color: strokeValue,
              index: i
            });
          }
        });
      }
    }));
  };

  return AreaSeries;
}(react.PureComponent);


AreaSeries.propTypes = AreaSeries_propTypes;
AreaSeries.defaultProps = AreaSeries_defaultProps;
AreaSeries.displayName = 'AreaSeries';
;// CONCATENATED MODULE: ./node_modules/@data-ui/xy-chart/esm/chart/CrossHair.js
function CrossHair_extends() { CrossHair_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CrossHair_extends.apply(this, arguments); }








var GROUP_STYLE = {
  pointerEvents: 'none'
};
var CrossHair_propTypes = {
  fullHeight: (prop_types_default()).bool,
  fullWidth: (prop_types_default()).bool,
  circleSize: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  circleFill: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  circleStroke: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  circleStyles: prop_types_default().oneOfType([(prop_types_default()).func, prop_types_default().objectOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]))]),
  lineStyles: prop_types_default().objectOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string])),
  showCircle: (prop_types_default()).bool,
  showMultipleCircles: (prop_types_default()).bool,
  showHorizontalLine: (prop_types_default()).bool,
  showVerticalLine: (prop_types_default()).bool,
  stroke: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  strokeDasharray: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  strokeWidth: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  // likely injected by parent
  datum: (prop_types_default()).object,
  // eslint-disable-line react/forbid-prop-types
  series: prop_types_default().objectOf((prop_types_default()).object),
  getScaledX: (prop_types_default()).func,
  getScaledY: (prop_types_default()).func,
  xScale: (prop_types_default()).func,
  yScale: (prop_types_default()).func
};
var CrossHair_defaultProps = {
  circleSize: 4,
  circleFill: esm_color/* default.grays.7 */.ZP.grays[7],
  circleStroke: '#ffffff',
  circleStyles: {
    pointerEvents: 'none'
  },
  datum: {},
  getScaledX: null,
  getScaledY: null,
  lineStyles: {
    pointerEvents: 'none'
  },
  fullHeight: false,
  fullWidth: false,
  series: {},
  showCircle: true,
  showMultipleCircles: false,
  showHorizontalLine: true,
  showVerticalLine: true,
  stroke: esm_color/* default.grays.6 */.ZP.grays[6],
  strokeDasharray: '5,2',
  strokeWidth: 1,
  xScale: null,
  yScale: null
};

function CrossHair(_ref) {
  var circleFill = _ref.circleFill,
      circleSize = _ref.circleSize,
      circleStroke = _ref.circleStroke,
      circleStyles = _ref.circleStyles,
      datum = _ref.datum,
      getScaledX = _ref.getScaledX,
      getScaledY = _ref.getScaledY,
      fullHeight = _ref.fullHeight,
      fullWidth = _ref.fullWidth,
      lineStyles = _ref.lineStyles,
      series = _ref.series,
      showHorizontalLine = _ref.showHorizontalLine,
      showCircle = _ref.showCircle,
      showMultipleCircles = _ref.showMultipleCircles,
      showVerticalLine = _ref.showVerticalLine,
      stroke = _ref.stroke,
      strokeDasharray = _ref.strokeDasharray,
      strokeWidth = _ref.strokeWidth,
      xScale = _ref.xScale,
      yScale = _ref.yScale;
  if (!xScale || !yScale || !getScaledX || !getScaledY) return null;

  var _extent = (0,d3_array_src.extent)(xScale.range()),
      xMin = _extent[0],
      xMax = _extent[1];

  var _extent2 = (0,d3_array_src.extent)(yScale.range()),
      yMin = _extent2[0],
      yMax = _extent2[1];

  var circleData = showMultipleCircles && series && Object.keys(series).length > 0 ? Object.keys(series).map(function (seriesKey) {
    return CrossHair_extends({
      seriesKey: seriesKey
    }, series[seriesKey]);
  }) : [datum];
  var circlePositions = circleData.map(function (d) {
    return {
      x: getScaledX(d),
      y: getScaledY(d)
    };
  });
  return react.createElement(dist_vx_group_es_Group, {
    style: GROUP_STYLE
  }, showHorizontalLine && !showMultipleCircles && isDefined(circlePositions[0].y) && react.createElement(dist_vx_shape_es_Line, {
    from: {
      x: xMin,
      y: circlePositions[0].y
    },
    to: {
      x: fullWidth ? xMax : circlePositions[0].x,
      y: circlePositions[0].y
    },
    style: lineStyles,
    stroke: stroke,
    strokeDasharray: strokeDasharray,
    strokeWidth: strokeWidth
  }), showVerticalLine && isDefined(circlePositions[0].x) && react.createElement(dist_vx_shape_es_Line, {
    from: {
      x: circlePositions[0].x,
      y: yMax
    },
    to: {
      x: circlePositions[0].x,
      y: fullHeight ? yMin : circlePositions[0].y
    },
    style: lineStyles,
    stroke: stroke,
    strokeDasharray: strokeDasharray,
    strokeWidth: strokeWidth
  }), (showCircle || showMultipleCircles) && circleData.map(function (d, i) {
    var _circlePositions$i = circlePositions[i],
        x = _circlePositions$i.x,
        y = _circlePositions$i.y;
    return isDefined(x) && isDefined(y) && react.createElement("circle", {
      key: "circle-" + (d.seriesKey || i),
      cx: x,
      cy: y,
      r: chartUtils_callOrValue(circleSize, d, i),
      fill: chartUtils_callOrValue(circleFill, d, i),
      strokeWidth: 1,
      stroke: chartUtils_callOrValue(circleStroke, d, i),
      style: chartUtils_callOrValue(circleStyles, d, i)
    });
  }));
}

CrossHair.propTypes = CrossHair_propTypes;
CrossHair.defaultProps = CrossHair_defaultProps;
CrossHair.displayName = 'CrossHair';
/* harmony default export */ const chart_CrossHair = (CrossHair);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-big-number/esm/BigNumber/BigNumber.js


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





const defaultNumberFormatter = (0,NumberFormatterRegistrySingleton/* getNumberFormatter */.JB)();
const CHART_MARGIN = {
  top: 4,
  right: 4,
  bottom: 4,
  left: 4
};
const PROPORTION = {
  // text size: proportion of the chart container sans trendline
  KICKER: 0.1,
  HEADER: 0.3,
  SUBHEADER: 0.125,
  // trendline size: proportion of the whole chart container
  TRENDLINE: 0.3
};
function renderTooltipFactory(formatDate = smartDateVerbose/* default */.Z, formatValue = defaultNumberFormatter) {
  return function renderTooltip({
    datum: {
      x,
      y
    }
  }) {
    // even though `formatDate` supports timestamp as numbers, we need
    // `new Date` to pass type check
    return (0,emotion_react_browser_esm.jsx)("div", {
      style: {
        padding: '4px 8px'
      }
    }, formatDate(new Date(x)), (0,emotion_react_browser_esm.jsx)("br", null), (0,emotion_react_browser_esm.jsx)("strong", null, y === null ? (0,TranslatorSingleton.t)('N/A') : formatValue(y)));
  };
}

class BigNumberVis extends react.PureComponent {
  constructor(...args) {
    super(...args);
    this.gradientId = shortid_default().generate();
  }

  getClassName() {
    const {
      className,
      showTrendLine,
      bigNumberFallback
    } = this.props;
    const names = `superset-legacy-chart-big-number ${className} ${bigNumberFallback ? 'is-fallback-value' : ''}`;
    if (showTrendLine) return names;
    return `${names} no-trendline`;
  }

  createTemporaryContainer() {
    const container = document.createElement('div');
    container.className = this.getClassName();
    container.style.position = 'absolute'; // so it won't disrupt page layout

    container.style.opacity = '0'; // and not visible

    return container;
  }

  renderFallbackWarning() {
    const {
      bigNumberFallback,
      formatTime,
      showTimestamp
    } = this.props;
    if (!bigNumberFallback || showTimestamp) return null;
    return (0,emotion_react_browser_esm.jsx)("span", {
      className: "alert alert-warning",
      role: "alert",
      title: (0,TranslatorSingleton.t)(`Last available value seen on %s`, formatTime(bigNumberFallback.x))
    }, (0,TranslatorSingleton.t)('Not up to date'));
  }

  renderKicker(maxHeight) {
    const {
      timestamp,
      showTimestamp,
      formatTime,
      width
    } = this.props;
    if (!showTimestamp) return null;
    const text = timestamp === null ? '' : formatTime(timestamp);
    const container = this.createTemporaryContainer();
    document.body.append(container);
    const fontSize = (0,computeMaxFontSize/* default */.Z)({
      text,
      maxWidth: width,
      maxHeight,
      className: 'kicker',
      container
    });
    container.remove();
    return (0,emotion_react_browser_esm.jsx)("div", {
      className: "kicker",
      style: {
        fontSize,
        height: maxHeight
      }
    }, text);
  }

  renderHeader(maxHeight) {
    const {
      bigNumber,
      headerFormatter,
      width
    } = this.props;
    const text = bigNumber === null ? (0,TranslatorSingleton.t)('No data') : headerFormatter(bigNumber);
    const container = this.createTemporaryContainer();
    document.body.append(container);
    const fontSize = (0,computeMaxFontSize/* default */.Z)({
      text,
      maxWidth: width,
      maxHeight,
      className: 'header-line',
      container
    });
    container.remove();
    return (0,emotion_react_browser_esm.jsx)("div", {
      className: "header-line",
      style: {
        fontSize,
        height: maxHeight
      }
    }, text);
  }

  renderSubheader(maxHeight) {
    const {
      bigNumber,
      subheader,
      width,
      bigNumberFallback
    } = this.props;
    let fontSize = 0;
    const NO_DATA_OR_HASNT_LANDED = (0,TranslatorSingleton.t)('No data after filtering or data is NULL for the latest time record');
    const NO_DATA = (0,TranslatorSingleton.t)('Try applying different filters or ensuring your datasource has data');
    let text = subheader;

    if (bigNumber === null) {
      text = bigNumberFallback ? NO_DATA : NO_DATA_OR_HASNT_LANDED;
    }

    if (text) {
      const container = this.createTemporaryContainer();
      document.body.append(container);
      fontSize = (0,computeMaxFontSize/* default */.Z)({
        text,
        maxWidth: width,
        maxHeight,
        className: 'subheader-line',
        container
      });
      container.remove();
      return (0,emotion_react_browser_esm.jsx)("div", {
        className: "subheader-line",
        style: {
          fontSize,
          height: maxHeight
        }
      }, text);
    }

    return null;
  }

  renderTrendline(maxHeight) {
    const {
      width,
      trendLineData,
      mainColor,
      subheader,
      startYAxisAtZero,
      headerFormatter,
      formatTime,
      fromDatetime,
      timeRangeFixed
    } = this.props; // if can't find any non-null values, no point rendering the trendline

    if (!(trendLineData != null && trendLineData.some(d => d.y !== null))) {
      return null;
    } // Apply a fixed X range if a time range is specified.
    //
    // XYChart checks the existence of `domain` property and decide whether to
    // apply a domain or not, so it must not be `null` or `undefined`


    const xScale = {
      type: 'timeUtc'
    };
    const tooltipData = trendLineData && [...trendLineData];

    if (tooltipData && timeRangeFixed && fromDatetime) {
      const toDatetime = this.props.toDatetime ?? Date.now();

      if (tooltipData[0].x > fromDatetime) {
        tooltipData.unshift({
          x: fromDatetime,
          y: null
        });
      }

      if (tooltipData[tooltipData.length - 1].x < toDatetime) {
        tooltipData.push({
          x: toDatetime,
          y: null
        });
      }

      xScale.domain = [fromDatetime, toDatetime];
    }

    return (0,emotion_react_browser_esm.jsx)(chart_XYChart, {
      snapTooltipToDataX: true,
      ariaLabel: `Big number visualization ${subheader}` // headerFormatter always NumberFormatter in BigNumber with treadline
      ,
      renderTooltip: renderTooltipFactory(formatTime, headerFormatter),
      xScale: xScale,
      yScale: {
        type: 'linear',
        includeZero: startYAxisAtZero
      },
      width: Math.floor(width),
      height: maxHeight,
      margin: CHART_MARGIN,
      eventTrigger: "container"
    }, (0,emotion_react_browser_esm.jsx)(aesthetic_LinearGradient, {
      id: this.gradientId,
      from: mainColor,
      to: "#fff"
    }), (0,emotion_react_browser_esm.jsx)(AreaSeries, {
      data: tooltipData,
      fill: `url(#${this.gradientId})`,
      stroke: mainColor
    }), (0,emotion_react_browser_esm.jsx)(chart_CrossHair, {
      fullHeight: true,
      stroke: mainColor,
      circleFill: mainColor,
      circleStroke: "#fff",
      showHorizontalLine: false,
      strokeDasharray: "5,2"
    }));
  }

  render() {
    const {
      showTrendLine,
      height,
      kickerFontSize,
      headerFontSize,
      subheaderFontSize
    } = this.props;
    const className = this.getClassName();

    if (showTrendLine) {
      const chartHeight = Math.floor(PROPORTION.TRENDLINE * height);
      const allTextHeight = height - chartHeight;
      return (0,emotion_react_browser_esm.jsx)("div", {
        className: className
      }, (0,emotion_react_browser_esm.jsx)("div", {
        className: "text-container",
        style: {
          height: allTextHeight
        }
      }, this.renderFallbackWarning(), this.renderKicker(Math.ceil(kickerFontSize * (1 - PROPORTION.TRENDLINE) * height)), this.renderHeader(Math.ceil(headerFontSize * (1 - PROPORTION.TRENDLINE) * height)), this.renderSubheader(Math.ceil(subheaderFontSize * (1 - PROPORTION.TRENDLINE) * height))), this.renderTrendline(chartHeight));
    }

    return (0,emotion_react_browser_esm.jsx)("div", {
      className: className,
      style: {
        height
      }
    }, this.renderFallbackWarning(), this.renderKicker(kickerFontSize * height), this.renderHeader(Math.ceil(headerFontSize * height)), this.renderSubheader(Math.ceil(subheaderFontSize * height)));
  }

}

BigNumberVis.propTypes = {
  className: (prop_types_default()).string,
  width: (prop_types_default()).number.isRequired,
  height: (prop_types_default()).number.isRequired,
  bigNumber: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().oneOf([null])]),
  bigNumberFallback: prop_types_default().shape({
    x: (prop_types_default()).number.isRequired,
    y: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().oneOf([null])])
  }),
  fromDatetime: (prop_types_default()).number,
  toDatetime: (prop_types_default()).number,
  headerFontSize: (prop_types_default()).number,
  kickerFontSize: (prop_types_default()).number,
  subheader: (prop_types_default()).string,
  subheaderFontSize: (prop_types_default()).number,
  showTimestamp: (prop_types_default()).bool,
  showTrendLine: (prop_types_default()).bool,
  startYAxisAtZero: (prop_types_default()).bool,
  timeRangeFixed: (prop_types_default()).bool,
  timestamp: (prop_types_default()).number,
  trendLineData: prop_types_default().arrayOf(prop_types_default().shape({
    x: (prop_types_default()).number.isRequired,
    y: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().oneOf([null])])
  })),
  mainColor: (prop_types_default()).string
};
BigNumberVis.defaultProps = {
  className: '',
  headerFormatter: defaultNumberFormatter,
  formatTime: smartDateVerbose/* default */.Z,
  headerFontSize: PROPORTION.HEADER,
  kickerFontSize: PROPORTION.KICKER,
  mainColor: color/* BRAND_COLOR */.E8,
  showTimestamp: false,
  showTrendLine: false,
  startYAxisAtZero: true,
  subheader: '',
  subheaderFontSize: PROPORTION.SUBHEADER,
  timeRangeFixed: false
};
/* harmony default export */ const BigNumber = ((0,style/* styled */.iK)(BigNumberVis)`
  font-family: ${({
  theme
}) => theme.typography.families.sansSerif};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.no-trendline .subheader-line {
    padding-bottom: 0.3em;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .alert {
      font-size: ${({
  theme
}) => theme.typography.sizes.s};
      margin: -0.5em 0 0.4em;
      line-height: 1;
      padding: 2px 4px 3px;
      border-radius: 3px;
    }
  }

  .kicker {
    font-weight: ${({
  theme
}) => theme.typography.weights.light};
    line-height: 1em;
    padding-bottom: 2em;
  }

  .header-line {
    font-weight: ${({
  theme
}) => theme.typography.weights.normal};
    position: relative;
    line-height: 1em;
    span {
      position: absolute;
      bottom: 0;
    }
  }

  .subheader-line {
    font-weight: ${({
  theme
}) => theme.typography.weights.light};
    line-height: 1em;
    padding-bottom: 0;
  }

  &.is-fallback-value {
    .kicker,
    .header-line,
    .subheader-line {
      opacity: 0.5;
    }
  }

  .superset-data-ui-tooltip {
    z-index: 1000;
    background: #000;
  }
`);

/***/ })

}]);