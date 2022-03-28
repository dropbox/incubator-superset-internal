(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[423],{

/***/ 18359:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.yTickStyles = exports.xTickStyles = exports.yAxisStyles = exports.xAxisStyles = exports.gridStyles = exports.labelStyles = exports.colors = undefined;

var _color = __webpack_require__(78139);

var _color2 = _interopRequireDefault(_color);

var _font = __webpack_require__(595);

var _font2 = _interopRequireDefault(_font);

var _svgLabel = __webpack_require__(36231);

var _size = __webpack_require__(13136);

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var colors = exports.colors = _color2['default'];

var labelStyles = exports.labelStyles = Object.assign({}, _svgLabel.baseLabel, _font2['default'].light);

var gridStyles = exports.gridStyles = {
  stroke: colors.grid,
  strokeWidth: 1
};

var xAxisStyles = exports.xAxisStyles = {
  stroke: colors.gridDark,
  strokeWidth: 2,
  label: {
    bottom: Object.assign({}, _svgLabel.baseLabel),
    top: Object.assign({}, _svgLabel.baseLabel)
  }
};

var yAxisStyles = exports.yAxisStyles = {
  stroke: colors.grid,
  strokeWidth: 1,
  label: {
    left: Object.assign({}, _svgLabel.baseLabel),
    right: Object.assign({}, _svgLabel.baseLabel)
  }
};

var xTickStyles = exports.xTickStyles = {
  stroke: colors.grid,
  length: 1 * _size2['default'],
  label: {
    bottom: Object.assign({}, _svgLabel.tickLabels.bottom),
    top: Object.assign({}, _svgLabel.tickLabels.top)
  }
};

var yTickStyles = exports.yTickStyles = {
  stroke: colors.grid,
  length: 1 * _size2['default'],
  label: {
    left: Object.assign({}, _svgLabel.tickLabels.left),
    right: Object.assign({}, _svgLabel.tickLabels.right)
  }
};

exports["default"] = {
  colors: colors,
  labelStyles: labelStyles,
  gridStyles: gridStyles,
  xAxisStyles: xAxisStyles,
  xTickStyles: xTickStyles,
  yAxisStyles: yAxisStyles,
  yTickStyles: yTickStyles
};

/***/ }),

/***/ 78139:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint max-len: 0 */

// source https://yeun.github.io/open-color/
var allColors = exports.allColors = {
  red: ['#fff5f5', '#ffe3e3', '#ffc9c9', '#ffa8a8', '#ff8787', '#ff6b6b', '#fa5252', '#f03e3e', '#e03131', '#c92a2a'],
  pink: ['#fff0f6', '#ffdeeb', '#fcc2d7', '#faa2c1', '#f783ac', '#f06595', '#e64980', '#d6336c', '#c2255c', '#a61e4d'],
  grape: ['#f8f0fc', '#f3d9fa', '#eebefa', '#e599f7', '#da77f2', '#cc5de8', '#be4bdb', '#ae3ec9', '#9c36b5', '#862e9c'],
  violet: ['#f3f0ff', '#e5dbff', '#d0bfff', '#b197fc', '#9775fa', '#845ef7', '#7950f2', '#7048e8', '#6741d9', '#5f3dc4'],
  indigo: ['#edf2ff', '#dbe4ff', '#bac8ff', '#91a7ff', '#748ffc', '#5c7cfa', '#4c6ef5', '#4263eb', '#3b5bdb', '#364fc7'],
  blue: ['#e8f7ff', '#ccedff', '#a3daff', '#72c3fc', '#4dadf7', '#329af0', '#228ae6', '#1c7cd6', '#1b6ec2', '#1862ab'],
  cyan: ['#e3fafc', '#c5f6fa', '#99e9f2', '#66d9e8', '#3bc9db', '#22b8cf', '#15aabf', '#1098ad', '#0c8599', '#0b7285'],
  teal: ['#e6fcf5', '#c3fae8', '#96f2d7', '#63e6be', '#38d9a9', '#20c997', '#12b886', '#0ca678', '#099268', '#087f5b'],
  green: ['#ebfbee', '#d3f9d8', '#b2f2bb', '#8ce99a', '#69db7c', '#51cf66', '#40c057', '#37b24d', '#2f9e44', '#2b8a3e'],
  lime: ['#f4fce3', '#e9fac8', '#d8f5a2', '#c0eb75', '#a9e34b', '#94d82d', '#82c91e', '#74b816', '#66a80f', '#5c940d'],
  yellow: ['#fff9db', '#fff3bf', '#ffec99', '#ffe066', '#ffd43b', '#fcc419', '#fab005', '#f59f00', '#f08c00', '#e67700'],
  orange: ['#fff4e6', '#ffe8cc', '#ffd8a8', '#ffc078', '#ffa94d', '#ff922b', '#fd7e14', '#f76707', '#e8590c', '#d9480f']
};

var grayColors = exports.grayColors = ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529'];

var getPaletteForBrightness = exports.getPaletteForBrightness = function getPaletteForBrightness() {
  var brightness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var hues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['cyan', 'yellow', 'pink', 'grape', 'blue', 'lime', 'teal', 'red', 'violet', 'orange', 'indigo', 'green'];

  // sanity check indices
  var index = Math.max(0, Math.min(brightness, allColors.red.length - 1));

  // filter non-sensical hues
  return hues.map(function (hue) {
    return allColors[hue] && allColors[hue][index];
  }).filter(function (val) {
    return val;
  });
};

var primaryHue = 'cyan';

var colorHues = exports.colorHues = Object.keys(allColors).sort();
var textColor = exports.textColor = grayColors[7];

exports["default"] = {
  'default': allColors[primaryHue][5],
  dark: allColors[primaryHue][7],
  light: allColors[primaryHue][3],

  disabled: textColor,
  lightDisabled: grayColors[3],

  text: textColor,
  black: grayColors[9],
  darkGray: grayColors[8],
  lightGray: grayColors[3],

  grid: grayColors[4],
  gridDark: grayColors[8],
  label: textColor,
  tickLabel: textColor,

  grays: grayColors,
  categories: [].concat(_toConsumableArray(getPaletteForBrightness(6)), _toConsumableArray(getPaletteForBrightness(2)))
};

/***/ }),

/***/ 595:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _color = __webpack_require__(78139);

var getFont = function getFont(_ref) {
  var fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      _ref$letterSpacing = _ref.letterSpacing,
      letterSpacing = _ref$letterSpacing === undefined ? 0 : _ref$letterSpacing,
      lineHeight = _ref.lineHeight,
      padding = _ref.padding;
  return {
    color: _color.textColor,
    fontFamily: fontFamily,
    fontSize: fontSize,
    letterSpacing: letterSpacing,
    lineHeight: String(lineHeight) + 'px',
    paddingBottom: padding,
    paddingTop: padding
  };
};

var fontFamily = 'BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif';

exports["default"] = {
  fontFamily: fontFamily,

  // weights
  light: {
    fontWeight: 200
  },
  bold: {
    fontWeight: 700
  },

  // size
  tiny: Object.assign({}, getFont({
    fontFamily: fontFamily,
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.4
  })),
  small: Object.assign({}, getFont({
    fontFamily: fontFamily,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4
  })),
  regular: Object.assign({}, getFont({
    fontFamily: fontFamily,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.2
  })),
  large: Object.assign({}, getFont({
    fontFamily: fontFamily,
    fontSize: 18,
    lineHeight: 24,
    spacing: 0
  }))
};

/***/ }),

/***/ 66849:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
__webpack_unused_export__ = ({
  value: true
});

var _color = __webpack_require__(78139);

Object.defineProperty(exports, "$_", ({
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_color)['default'];
    }

    return get;
  }()
}));
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    function get() {
      return _color.allColors;
    }

    return get;
  }()
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    function get() {
      return _color.getPaletteForBrightness;
    }

    return get;
  }()
});

var _font = __webpack_require__(595);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_font)['default'];
    }

    return get;
  }()
});

var _size = __webpack_require__(13136);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    function get() {
      return _size.unit;
    }

    return get;
  }()
});

var _svgFont = __webpack_require__(23056);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_svgFont)['default'];
    }

    return get;
  }()
});

var _svgLabel = __webpack_require__(36231);

Object.defineProperty(exports, "cq", ({
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_svgLabel)['default'];
    }

    return get;
  }()
}));

var _chartTheme = __webpack_require__(18359);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_chartTheme)['default'];
    }

    return get;
  }()
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),

/***/ 13136:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/* eslint import/prefer-default-export: 0 */
var unit = exports.unit = 8;

/***/ }),

/***/ 23056:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _color = __webpack_require__(78139);

var getSvgFont = function getSvgFont(_ref) {
  var fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      letterSpacing = _ref.letterSpacing;
  return {
    fill: _color.textColor,
    stroke: 'none',
    fontFamily: fontFamily,
    fontSize: fontSize,
    letterSpacing: letterSpacing
  };
};

var fontFamily = 'BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif';

exports["default"] = {
  fontFamily: fontFamily,

  // weights
  light: {
    fontWeight: 200
  },
  bold: {
    fontWeight: 700
  },

  // alignment
  start: {
    textAnchor: 'start'
  },
  middle: {
    textAnchor: 'middle'
  },
  end: {
    textAnchor: 'end'
  },

  // size
  tiny: Object.assign({}, getSvgFont({
    fontFamily: fontFamily,
    fontSize: 10,
    letterSpacing: 0.4
  })),
  small: Object.assign({}, getSvgFont({
    fontFamily: fontFamily,
    fontSize: 12,
    letterSpacing: 0.4
  })),
  regular: Object.assign({}, getSvgFont({
    fontFamily: fontFamily,
    fontSize: 14,
    letterSpacing: 0.2
  })),
  large: Object.assign({}, getSvgFont({
    fontFamily: fontFamily,
    fontSize: 18,
    spacing: 0
  }))
};

/***/ }),

/***/ 36231:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.tickLabels = exports.baseTickLabel = exports.baseLabel = undefined;

var _svgFont = __webpack_require__(23056);

var _svgFont2 = _interopRequireDefault(_svgFont);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var baseLabel = exports.baseLabel = Object.assign({}, _svgFont2['default'].small, _svgFont2['default'].bold, _svgFont2['default'].middle, {
  pointerEvents: 'none'
});

var baseTickLabel = exports.baseTickLabel = Object.assign({}, _svgFont2['default'].small, _svgFont2['default'].light, _svgFont2['default'].middle, {
  pointerEvents: 'none'
});

var tickLabels = exports.tickLabels = {
  top: Object.assign({}, baseTickLabel, {
    dy: '-0.25em'
  }),
  right: Object.assign({}, baseTickLabel, _svgFont2['default'].start, {
    dx: '0.25em',
    dy: '0.25em'
  }),
  bottom: Object.assign({}, baseTickLabel, {
    dy: '0.25em'
  }),
  left: Object.assign({}, baseTickLabel, _svgFont2['default'].end, {
    dx: '-0.25em',
    dy: '0.25em'
  })
};

exports["default"] = {
  baseLabel: baseLabel,
  baseTickLabel: baseTickLabel,
  tickLabels: tickLabels
};

/***/ }),

/***/ 6030:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Z = localPoint;

var _point = __webpack_require__(56946);

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

/***/ 2197:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Z = GlyphDot;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(94184);

var _classnames2 = _interopRequireDefault(_classnames);

var _Glyph = __webpack_require__(4178);

var _Glyph2 = _interopRequireDefault(_Glyph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GlyphDot(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      className = _ref.className,
      children = _ref.children,
      cx = _ref.cx,
      cy = _ref.cy,
      r = _ref.r,
      fill = _ref.fill,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      restProps = _objectWithoutProperties(_ref, ['top', 'left', 'className', 'children', 'cx', 'cy', 'r', 'fill', 'stroke', 'strokeWidth', 'strokeDasharray']);

  return _react2.default.createElement(
    _Glyph2.default,
    { top: top, left: left },
    _react2.default.createElement('circle', _extends({
      className: (0, _classnames2.default)('vx-glyph-dot', className),
      cx: cx,
      cy: cy,
      r: r,
      fill: fill,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray
    }, restProps)),
    children
  );
}

/***/ }),

/***/ 4178:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Glyph;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(94184);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _group = __webpack_require__(77499);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Glyph.propTypes = {
  top: _propTypes2.default.number,
  left: _propTypes2.default.number,
  className: _propTypes2.default.string,
  children: _propTypes2.default.any
};

function Glyph(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      className = _ref.className,
      children = _ref.children;

  return _react2.default.createElement(
    _group.Group,
    { className: (0, _classnames2.default)('vx-glyph', className), top: top, left: left },
    children
  );
}

/***/ }),

/***/ 89790:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Z = Group;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(94184);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Group(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      transform = _ref.transform,
      className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['top', 'left', 'transform', 'className', 'children']);

  return _react2.default.createElement(
    'g',
    _extends({
      className: (0, _classnames2.default)('vx-group', className),
      transform: transform || 'translate(' + left + ', ' + top + ')'
    }, restProps),
    children
  );
}

/***/ }),

/***/ 77499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Group": () => (/* binding */ Group)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



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

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    'g',
    _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-group', className),
      transform: transform || 'translate(' + left + ', ' + top + ')'
    }, restProps),
    children
  );
}




/***/ }),

/***/ 21778:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
  function Point(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y;

    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "value",
    value: function value() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y];
    }
  }]);

  return Point;
}();

exports.Z = Point;

/***/ }),

/***/ 56946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 46065:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _d3Scale = __webpack_require__(14893);

exports.Z = function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = (0, _d3Scale.scaleLinear)();
  scale.type = 'linear';

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);

  return scale;
};

/***/ }),

/***/ 11650:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Z = AreaClosed;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(94184);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__(86005);

var _additionalProps = __webpack_require__(65866);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

AreaClosed.propTypes = {
  innerRef: _propTypes2.default.func
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
      restProps = _objectWithoutProperties(_ref, ['x', 'y', 'y0', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path = (0, _d3Shape.area)().x(function () {
    return xScale(x.apply(undefined, arguments));
  }).y0(y0 || yScale.range()[0]).y1(function () {
    return yScale(y.apply(undefined, arguments));
  }).defined(defined);
  if (curve) path.curve(curve);
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', _extends({
      ref: innerRef,
      className: (0, _classnames2.default)('vx-area-closed', className),
      d: path(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, (0, _additionalProps2.default)(restProps, data)))
  );
}

/***/ }),

/***/ 27931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Z = Bar;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(94184);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _additionalProps = __webpack_require__(65866);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

Bar.propTypes = {
  innerRef: _propTypes2.default.func
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
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'fillOpacity', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity']);

  return _react2.default.createElement('rect', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-bar', className),
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
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ 81815:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Z = Line;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(94184);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _point = __webpack_require__(56946);

var _additionalProps = __webpack_require__(65866);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

Line.propTypes = {
  innerRef: _propTypes2.default.func
};

function Line(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === undefined ? new _point.Point({ x: 0, y: 0 }) : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === undefined ? new _point.Point({ x: 1, y: 1 }) : _ref$to,
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
      restProps = _objectWithoutProperties(_ref, ['from', 'to', 'stroke', 'strokeWidth', 'strokeDasharray', 'transform', 'className', 'data', 'innerRef']);

  return _react2.default.createElement('line', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-line', className),
    x1: from.x,
    y1: from.y,
    x2: to.x,
    y2: to.y,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    transform: transform
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ 46464:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Z = LinePath;

var _curve = __webpack_require__(33452);

var _classnames = __webpack_require__(94184);

var _classnames2 = _interopRequireDefault(_classnames);

var _d3Shape = __webpack_require__(86005);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _additionalProps = __webpack_require__(65866);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinePath.propTypes = {
  innerRef: _propTypes2.default.func,
  xScale: _propTypes2.default.func,
  yScale: _propTypes2.default.func,
  data: _propTypes2.default.array,
  x: _propTypes2.default.func,
  y: _propTypes2.default.func,
  defined: _propTypes2.default.func,
  stroke: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.number,
  glyph: _propTypes2.default.func,
  curve: _propTypes2.default.func
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
      curve = _ref$curve === undefined ? _curve.curveLinear : _ref$curve,
      glyph = _ref.glyph,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ['children', 'data', 'xScale', 'yScale', 'x', 'y', 'defined', 'className', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeDashoffset', 'fill', 'curve', 'glyph', 'innerRef']);

  var path = (0, _d3Shape.line)().x(function () {
    return xScale(x.apply(undefined, arguments));
  }).y(function () {
    return yScale(y.apply(undefined, arguments));
  }).defined(defined).curve(curve);
  if (children) return children({ path: path });
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', _extends({
      ref: innerRef,
      className: (0, _classnames2.default)('vx-linepath', className),
      d: path(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      strokeDashoffset: strokeDashoffset,
      fill: fill
    }, (0, _additionalProps2.default)(restProps, data))),
    glyph && _react2.default.createElement(
      'g',
      { className: 'vx-linepath-glyphs' },
      data.map(glyph)
    )
  );
}

/***/ }),

/***/ 65866:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = additionalProps;

var _callOrValue = __webpack_require__(16794);

var _callOrValue2 = _interopRequireDefault(_callOrValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function additionalProps(restProps, data) {
  return Object.keys(restProps).reduce(function (ret, cur) {
    ret[cur] = (0, _callOrValue2.default)(restProps[cur], data);
    return ret;
  }, {});
}

/***/ }),

/***/ 16794:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = callOrValue;
function callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}

/***/ }),

/***/ 33452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "curveBasis": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveBasis),
/* harmony export */   "curveBasisClosed": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveBasisClosed),
/* harmony export */   "curveBasisOpen": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveBasisOpen),
/* harmony export */   "curveStep": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveStep),
/* harmony export */   "curveStepAfter": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveStepAfter),
/* harmony export */   "curveStepBefore": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveStepBefore),
/* harmony export */   "curveBundle": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveBundle),
/* harmony export */   "curveLinear": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveLinear),
/* harmony export */   "curveLinearClosed": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveLinearClosed),
/* harmony export */   "curveCardinal": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveCardinal),
/* harmony export */   "curveCardinalClosed": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveCardinalClosed),
/* harmony export */   "curveCardinalOpen": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveCardinalOpen),
/* harmony export */   "curveCatmullRom": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveCatmullRom),
/* harmony export */   "curveCatmullRomClosed": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveCatmullRomClosed),
/* harmony export */   "curveCatmullRomOpen": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveCatmullRomOpen),
/* harmony export */   "curveMonotoneX": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveMonotoneX),
/* harmony export */   "curveMonotoneY": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveMonotoneY),
/* harmony export */   "curveNatural": () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_0__.curveNatural)
/* harmony export */ });
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86005);



/***/ }),

/***/ 55938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TimeTable_TimeTable)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/mustache/mustache.js
var mustache = __webpack_require__(466);
var mustache_default = /*#__PURE__*/__webpack_require__.n(mustache);
// EXTERNAL MODULE: ./node_modules/d3-scale/src/index.js + 19 modules
var src = __webpack_require__(14893);
// EXTERNAL MODULE: ./src/components/TableView/index.ts
var TableView = __webpack_require__(76962);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js
var NumberFormatterRegistrySingleton = __webpack_require__(50855);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/time-format/TimeFormatterRegistrySingleton.js + 5 modules
var TimeFormatterRegistrySingleton = __webpack_require__(14826);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/components/InfoTooltipWithTrigger.js
var InfoTooltipWithTrigger = __webpack_require__(88186);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/components/MetricOption.js
var MetricOption = __webpack_require__(5483);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/visualizations/TimeTable/FormattedNumber.jsx
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




const propTypes = {
  num: (prop_types_default()).number,
  format: (prop_types_default()).string };


const defaultProps = {
  num: 0,
  format: undefined };


function FormattedNumber({ num, format }) {
  if (format) {
    return (0,emotion_react_browser_esm.jsx)("span", { title: num }, (0,NumberFormatterRegistrySingleton/* formatNumber */.uf)(format, num));
  }
  return (0,emotion_react_browser_esm.jsx)("span", null, num);
}

FormattedNumber.propTypes = propTypes;
FormattedNumber.defaultProps = defaultProps;

/* harmony default export */ const TimeTable_FormattedNumber = (FormattedNumber);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/d3-array/src/index.js + 31 modules
var d3_array_src = __webpack_require__(4065);
// EXTERNAL MODULE: ./node_modules/@data-ui/sparkline/node_modules/@vx/group/build/Group.js
var Group = __webpack_require__(89790);
// EXTERNAL MODULE: ./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/Line.js
var Line = __webpack_require__(81815);
// EXTERNAL MODULE: ./node_modules/@data-ui/sparkline/node_modules/@vx/point/build/Point.js
var Point = __webpack_require__(21778);
// EXTERNAL MODULE: ./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/index.js
var build = __webpack_require__(66849);
;// CONCATENATED MODULE: ./node_modules/@data-ui/sparkline/esm/annotation/Label.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Label_propTypes = {
  anchor: prop_types_default().oneOf(['start', 'middle', 'end']),
  dominantBaseline: (prop_types_default()).string,
  dx: (prop_types_default()).number,
  dy: (prop_types_default()).number,
  fill: (prop_types_default()).string,
  label: (prop_types_default()).node,
  paintOrder: (prop_types_default()).string,
  stroke: (prop_types_default()).string,
  strokeWidth: (prop_types_default()).number,
  x: (prop_types_default()).number,
  y: (prop_types_default()).number
};
var Label_defaultProps = {
  anchor: 'middle',
  dominantBaseline: 'middle',
  dx: 0,
  dy: 0,
  fill: build/* color.text */.$_.text,
  label: null,
  paintOrder: 'stroke',
  stroke: '#fff',
  strokeWidth: 2,
  x: 0,
  y: 0
};

function Label(_ref) {
  var anchor = _ref.anchor,
      dominantBaseline = _ref.dominantBaseline,
      dx = _ref.dx,
      dy = _ref.dy,
      fill = _ref.fill,
      label = _ref.label,
      paintOrder = _ref.paintOrder,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      x = _ref.x,
      y = _ref.y,
      rest = _objectWithoutPropertiesLoose(_ref, ["anchor", "dominantBaseline", "dx", "dy", "fill", "label", "paintOrder", "stroke", "strokeWidth", "x", "y"]);

  return react.createElement("text", _extends({
    x: x,
    y: y,
    dx: dx,
    dy: dy,
    fill: fill,
    dominantBaseline: dominantBaseline,
    paintOrder: paintOrder,
    stroke: stroke,
    strokeWidth: strokeWidth,
    textAnchor: anchor
  }, rest), label);
}

Label.propTypes = Label_propTypes;
Label.defaultProps = Label_defaultProps;
Label.displayName = 'Label';
/* harmony default export */ const annotation_Label = (Label);
;// CONCATENATED MODULE: ./node_modules/@data-ui/sparkline/esm/utils/positionLabel.js
var DEFAULT_LABEL_OFFSET = 8;
function positionLabel(orientation, labelOffset) {
  if (labelOffset === void 0) {
    labelOffset = DEFAULT_LABEL_OFFSET;
  }

  if (orientation === 'top') {
    return {
      textAnchor: 'middle',
      dy: -Math.abs(labelOffset),
      dx: 0
    };
  } else if (orientation === 'right') {
    return {
      textAnchor: 'start',
      dy: 0,
      dx: Math.abs(labelOffset)
    };
  } else if (orientation === 'bottom') {
    return {
      textAnchor: 'middle',
      dy: Math.abs(labelOffset),
      dx: 0
    };
  } else if (orientation === 'left') {
    return {
      textAnchor: 'end',
      dy: 0,
      dx: -Math.abs(labelOffset)
    };
  }

  return orientation;
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/sparkline/esm/annotation/HorizontalReferenceLine.js
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function HorizontalReferenceLine_extends() { HorizontalReferenceLine_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HorizontalReferenceLine_extends.apply(this, arguments); }










var HorizontalReferenceLine_propTypes = {
  reference: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().oneOf(['mean', 'median', 'min', 'max'])]),
  LabelComponent: (prop_types_default()).element,
  labelOffset: (prop_types_default()).number,
  labelPosition: prop_types_default().oneOf(['top', 'right', 'bottom', 'left']),
  renderLabel: (prop_types_default()).func,
  stroke: (prop_types_default()).string,
  strokeDasharray: (prop_types_default()).string,
  strokeLinecap: prop_types_default().oneOf(['butt', 'square', 'round', 'inherit']),
  strokeWidth: (prop_types_default()).number,
  // all likely passed by the parent chart
  data: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).object])),
  getY: (prop_types_default()).func,
  xScale: (prop_types_default()).func,
  yScale: (prop_types_default()).func
};
var HorizontalReferenceLine_defaultProps = {
  data: [],
  getY: null,
  LabelComponent: react.createElement(annotation_Label, HorizontalReferenceLine_extends({}, build/* svgLabel.baseTickLabel */.cq.baseTickLabel, {
    stroke: "#fff"
  })),
  labelOffset: 8,
  labelPosition: 'right',
  reference: 'mean',
  renderLabel: null,
  stroke: build/* color.darkGray */.$_.darkGray,
  strokeDasharray: null,
  strokeLinecap: 'round',
  strokeWidth: 2,
  xScale: null,
  yScale: null
};

var HorizontalReferenceLine =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(HorizontalReferenceLine, _React$PureComponent);

  function HorizontalReferenceLine() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = HorizontalReferenceLine.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        data = _this$props.data,
        getY = _this$props.getY,
        LabelComponent = _this$props.LabelComponent,
        labelOffset = _this$props.labelOffset,
        labelPosition = _this$props.labelPosition,
        reference = _this$props.reference,
        renderLabel = _this$props.renderLabel,
        stroke = _this$props.stroke,
        strokeDasharray = _this$props.strokeDasharray,
        strokeLinecap = _this$props.strokeLinecap,
        strokeWidth = _this$props.strokeWidth,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale;
    if (!xScale || !yScale || !getY || !data.length) return null;

    var _xScale$range = xScale.range(),
        x0 = _xScale$range[0],
        x1 = _xScale$range[1];

    var refNumber = reference;
    if (reference === 'mean') refNumber = (0,d3_array_src.mean)(data, getY);
    if (reference === 'median') refNumber = (0,d3_array_src.median)(data, getY);
    if (reference === 'max') refNumber = (0,d3_array_src.max)(data, getY);
    if (reference === 'min') refNumber = (0,d3_array_src.min)(data, getY);
    var scaledRef = yScale(refNumber);
    var fromPoint = new Point/* default */.Z({
      x: x0,
      y: scaledRef
    });
    var toPoint = new Point/* default */.Z({
      x: x1,
      y: scaledRef
    });
    var label = renderLabel && renderLabel(refNumber);
    return react.createElement(Group/* default */.Z, {
      style: {
        pointerEvents: 'none'
      }
    }, react.createElement(Line/* default */.Z, {
      from: fromPoint,
      to: toPoint,
      stroke: stroke,
      strokeDasharray: strokeDasharray,
      strokeLinecap: strokeLinecap,
      strokeWidth: strokeWidth,
      vectorEffect: "non-scaling-stroke"
    }), label && react.cloneElement(LabelComponent, HorizontalReferenceLine_extends({
      x: toPoint.x,
      y: toPoint.y
    }, positionLabel(labelPosition, labelOffset), {
      label: label
    })));
  };

  return HorizontalReferenceLine;
}(react.PureComponent);

HorizontalReferenceLine.propTypes = HorizontalReferenceLine_propTypes;
HorizontalReferenceLine.defaultProps = HorizontalReferenceLine_defaultProps;
HorizontalReferenceLine.displayName = 'ReferenceLine';
/* harmony default export */ const annotation_HorizontalReferenceLine = (HorizontalReferenceLine);
// EXTERNAL MODULE: ./node_modules/@data-ui/shared/esm/enhancer/WithTooltip.js
var WithTooltip = __webpack_require__(85195);
// EXTERNAL MODULE: ./node_modules/@data-ui/sparkline/node_modules/@vx/scale/build/scales/linear.js
var linear = __webpack_require__(46065);
// EXTERNAL MODULE: ./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/Bar.js
var Bar = __webpack_require__(27931);
;// CONCATENATED MODULE: ./node_modules/@data-ui/sparkline/esm/utils/callOrValue.js
function callOrValue(maybeFn) {
  if (typeof maybeFn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return maybeFn.apply(void 0, args);
  }

  return maybeFn;
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/sparkline/esm/series/BarSeries.js
function BarSeries_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function BarSeries_extends() { BarSeries_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return BarSeries_extends.apply(this, arguments); }









var BarSeries_propTypes = {
  fill: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  fillOpacity: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  LabelComponent: (prop_types_default()).element,
  labelOffset: (prop_types_default()).number,
  labelPosition: prop_types_default().oneOfType([(prop_types_default()).func, prop_types_default().oneOf(['top', 'right', 'bottom', 'left'])]),
  onMouseMove: (prop_types_default()).func,
  onMouseLeave: (prop_types_default()).func,
  renderLabel: (prop_types_default()).func,
  // (val, i) => node
  stroke: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  strokeWidth: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  // all likely passed by the parent chart
  data: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).object])),
  getX: (prop_types_default()).func,
  getY: (prop_types_default()).func,
  xScale: (prop_types_default()).func,
  yScale: (prop_types_default()).func
};
var BarSeries_defaultProps = {
  data: [],
  fill: build/* color.default */.$_["default"],
  fillOpacity: 0.7,
  getX: null,
  getY: null,
  labelOffset: 8,
  LabelComponent: react.createElement(annotation_Label, BarSeries_extends({}, build/* svgLabel.baseTickLabel */.cq.baseTickLabel, {
    stroke: "#fff"
  })),
  labelPosition: 'top',
  onMouseMove: null,
  onMouseLeave: null,
  renderLabel: null,
  stroke: '#fff',
  strokeWidth: 1,
  xScale: null,
  yScale: null
};

var BarSeries =
/*#__PURE__*/
function (_React$PureComponent) {
  BarSeries_inheritsLoose(BarSeries, _React$PureComponent);

  function BarSeries() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = BarSeries.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        data = _this$props.data,
        getX = _this$props.getX,
        getY = _this$props.getY,
        fill = _this$props.fill,
        fillOpacity = _this$props.fillOpacity,
        labelOffset = _this$props.labelOffset,
        LabelComponent = _this$props.LabelComponent,
        labelPosition = _this$props.labelPosition,
        onMouseMove = _this$props.onMouseMove,
        onMouseLeave = _this$props.onMouseLeave,
        renderLabel = _this$props.renderLabel,
        stroke = _this$props.stroke,
        strokeWidth = _this$props.strokeWidth,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale;
    if (!xScale || !yScale || !getX || !getY || !data.length) return null;
    var barWidth = Math.max(1, Math.max.apply(Math, xScale.range()) / data.length - 1);
    var maxBarHeight = Math.max.apply(Math, yScale.range());
    var labels = []; // render labels as top-most layer

    return react.createElement(Group/* default */.Z, null, data.map(function (d, i) {
      var yVal = getY(d);
      var x = xScale(getX(d));
      var y = yScale(yVal);
      var key = "bar-" + x + "-" + y + "-" + i;
      var label = renderLabel && renderLabel(yVal, i);
      var fillValue = callOrValue(d.fill || fill, yVal, i);

      if (label) {
        labels.push(BarSeries_extends({
          key: key,
          label: label,
          x: x,
          y: y
        }, positionLabel(callOrValue(labelPosition, yVal, i), labelOffset)));
      }

      return react.createElement(Bar/* default */.Z, {
        key: key,
        x: x - barWidth / 2,
        y: y,
        width: barWidth,
        height: maxBarHeight - y,
        fill: fillValue,
        fillOpacity: callOrValue(typeof d.fillOpacity === 'undefined' ? fillOpacity : d.fillOpacity, yVal, i),
        stroke: callOrValue(d.stroke || stroke, yVal, i),
        strokeWidth: callOrValue(d.strokeWidth || strokeWidth, yVal, i),
        onMouseMove: onMouseMove && function () {
          return function (event) {
            onMouseMove({
              event: event,
              data: data,
              datum: d,
              index: i,
              color: fillValue
            });
          };
        },
        onMouseLeave: onMouseLeave && function () {
          return onMouseLeave;
        }
      });
    }), labels.map(function (labelProps) {
      return react.cloneElement(LabelComponent, labelProps);
    }));
  };

  return BarSeries;
}(react.PureComponent);

BarSeries.propTypes = BarSeries_propTypes;
BarSeries.defaultProps = BarSeries_defaultProps;
BarSeries.displayName = 'BarSeries';
/* harmony default export */ const series_BarSeries = (BarSeries);
;// CONCATENATED MODULE: ./node_modules/@data-ui/sparkline/esm/utils/componentIsX.js
function componentName(component) {
  if (component && component.type) {
    return component.type.displayName || component.type.name || 'Component';
  }

  return '';
}
function isSeries(name) {
  return /series/gi.test(name);
}
function isReferenceLine(name) {
  return /referenceline/gi.test(name);
}
function isBandLine(name) {
  return /bandline/gi.test(name);
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/sparkline/esm/utils/defined.js
// eslint-disable-next-line no-restricted-globals
var defined = function defined(d) {
  return typeof d !== 'undefined' && d !== null && !isNaN(d);
};

/* harmony default export */ const utils_defined = (defined);
;// CONCATENATED MODULE: ./node_modules/@data-ui/sparkline/esm/chart/Sparkline.js
function Sparkline_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Sparkline_extends() { Sparkline_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Sparkline_extends.apply(this, arguments); }

/* eslint react/no-unused-prop-types: 0 */








var Sparkline_propTypes = {
  ariaLabel: (prop_types_default()).string.isRequired,
  children: (prop_types_default()).node.isRequired,
  className: (prop_types_default()).string,
  // number or objects (with accessors)
  data: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).object])),
  height: (prop_types_default()).number.isRequired,
  margin: prop_types_default().shape({
    top: (prop_types_default()).number,
    right: (prop_types_default()).number,
    bottom: (prop_types_default()).number,
    left: (prop_types_default()).number
  }),
  max: (prop_types_default()).number,
  min: (prop_types_default()).number,
  onMouseMove: (prop_types_default()).func,
  onMouseLeave: (prop_types_default()).func,
  preserveAspectRatio: (prop_types_default()).string,
  styles: (prop_types_default()).object,
  // eslint-disable-line react/forbid-prop-types
  width: (prop_types_default()).number.isRequired,
  valueAccessor: (prop_types_default()).func,
  viewBox: (prop_types_default()).string
};
var Sparkline_defaultProps = {
  className: null,
  data: [],
  margin: {
    top: 16,
    right: 16,
    bottom: 16,
    left: 16
  },
  max: null,
  min: null,
  onMouseMove: null,
  onMouseLeave: null,
  preserveAspectRatio: null,
  styles: null,
  valueAccessor: function valueAccessor(d) {
    return d;
  },
  viewBox: null
};

var getX = function getX(d) {
  return d.i;
};

var getY = function getY(d) {
  return d.y;
};

var parsedDatumThunk = function parsedDatumThunk(valueAccessor) {
  return function (d, i) {
    var y = valueAccessor(d);
    return Sparkline_extends({
      i: i,
      y: y,
      id: y
    }, d);
  };
};

var Sparkline =
/*#__PURE__*/
function (_React$PureComponent) {
  Sparkline_inheritsLoose(Sparkline, _React$PureComponent);

  function Sparkline(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.getMaxY = _this.getMaxY.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = _this.getStateFromProps(props);
    return _this;
  }

  var _proto = Sparkline.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if ([// recompute scales if any of the following change
    'data', 'height', 'margin', 'max', 'min', 'valueAccessor', 'width'].some(function (prop) {
      return _this2.props[prop] !== nextProps[prop];
    }) // eslint-disable-line react/destructuring-assignment
    ) {
        this.setState(this.getStateFromProps(nextProps));
      }
  };

  _proto.getStateFromProps = function getStateFromProps(props) {
    var dimensions = this.getDimmensions(props);
    var scales = this.getScales(props, dimensions);
    return Sparkline_extends({}, dimensions, scales);
  };

  _proto.getScales = function getScales(props, _ref) {
    var innerHeight = _ref.innerHeight,
        innerWidth = _ref.innerWidth;

    var _ref2 = props || this.props,
        rawData = _ref2.data,
        min = _ref2.min,
        max = _ref2.max,
        valueAccessor = _ref2.valueAccessor;

    var data = rawData.map(parsedDatumThunk(valueAccessor));
    var yExtent = (0,d3_array_src.extent)(data, getY);
    var xScale = (0,linear/* default */.Z)({
      domain: [0, data.length - 1],
      range: [0, innerWidth]
    });
    var yScale = (0,linear/* default */.Z)({
      domain: [utils_defined(min) ? min : yExtent[0], utils_defined(max) ? max : yExtent[1]],
      range: [innerHeight, 0]
    });
    return {
      xScale: xScale,
      yScale: yScale,
      data: data
    };
  };

  _proto.getMaxY = function getMaxY() {
    var yScale = this.state.yScale;
    return Math.max.apply(Math, yScale.domain());
  };

  _proto.getDimmensions = function getDimmensions(props) {
    var _ref3 = props || this.props,
        margin = _ref3.margin,
        width = _ref3.width,
        height = _ref3.height;

    var completeMargin = Sparkline_extends({}, Sparkline_defaultProps.margin, margin);

    return {
      margin: completeMargin,
      innerHeight: height - completeMargin.top - completeMargin.bottom,
      innerWidth: width - completeMargin.left - completeMargin.right
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        ariaLabel = _this$props.ariaLabel,
        children = _this$props.children,
        className = _this$props.className,
        height = _this$props.height,
        onMouseMove = _this$props.onMouseMove,
        onMouseLeave = _this$props.onMouseLeave,
        preserveAspectRatio = _this$props.preserveAspectRatio,
        styles = _this$props.styles,
        width = _this$props.width,
        viewBox = _this$props.viewBox;
    var _this$state = this.state,
        data = _this$state.data,
        margin = _this$state.margin,
        xScale = _this$state.xScale,
        yScale = _this$state.yScale;
    var seriesProps = {
      xScale: xScale,
      yScale: yScale,
      data: data,
      getX: getX,
      getY: getY,
      margin: margin
    };
    return react.createElement("svg", {
      "aria-label": ariaLabel,
      className: className,
      height: height,
      role: "img",
      preserveAspectRatio: preserveAspectRatio,
      style: styles,
      width: width,
      viewBox: viewBox
    }, react.createElement(Group/* default */.Z, {
      left: margin.left,
      top: margin.top
    }, react.Children.map(children, function (Child) {
      var name = componentName(Child);

      if (isSeries(name) || isReferenceLine(name) || isBandLine(name)) {
        return react.cloneElement(Child, seriesProps);
      }

      return Child;
    }), (onMouseMove || onMouseLeave) && react.createElement(series_BarSeries, Sparkline_extends({
      fill: "transparent",
      fillOpacity: 0,
      stroke: "transparent",
      strokeWidth: 1
    }, seriesProps, {
      getY: this.getMaxY,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave
    }))));
  };

  return Sparkline;
}(react.PureComponent);

Sparkline.propTypes = Sparkline_propTypes;
Sparkline.defaultProps = Sparkline_defaultProps;
Sparkline.displayName = 'Sparkline';
/* harmony default export */ const chart_Sparkline = (Sparkline);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/index.js + 50 modules
var d3_shape_src = __webpack_require__(86005);
// EXTERNAL MODULE: ./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/LinePath.js
var LinePath = __webpack_require__(46464);
// EXTERNAL MODULE: ./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/AreaClosed.js
var AreaClosed = __webpack_require__(11650);
// EXTERNAL MODULE: ./node_modules/@data-ui/sparkline/node_modules/@vx/event/build/localPoint.js
var localPoint = __webpack_require__(6030);
;// CONCATENATED MODULE: ./node_modules/@data-ui/sparkline/esm/utils/findClosestDatum.js


function findClosestDatum(_ref) {
  var data = _ref.data,
      getX = _ref.getX,
      xScale = _ref.xScale,
      event = _ref.event,
      _ref$marginLeft = _ref.marginLeft,
      marginLeft = _ref$marginLeft === void 0 ? 0 : _ref$marginLeft;
  if (!event || !event.target || !event.target.ownerSVGElement) return {};
  var bisect = (0,d3_array_src.bisector)(getX).right;
  var svgCoords = (0,localPoint/* default */.Z)(event.target.ownerSVGElement, event);
  var x = svgCoords.x - marginLeft;
  var dataX = xScale.invert(x);
  var index = bisect(data, dataX, 1);
  var d0 = data[index - 1];
  var d1 = data[index];
  var d = !d0 || Math.abs(dataX - getX(d0)) > Math.abs(dataX - getX(d1)) ? d1 : d0;
  return {
    datum: d,
    index: d === d0 ? index - 1 : index
  };
}
;// CONCATENATED MODULE: ./node_modules/@data-ui/sparkline/esm/series/LineSeries.js
function LineSeries_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }










var LineSeries_propTypes = {
  curve: prop_types_default().oneOf(['linear', 'cardinal', 'basis', 'monotoneX']),
  fill: (prop_types_default()).string,
  fillOpacity: (prop_types_default()).number,
  onMouseMove: (prop_types_default()).func,
  onMouseLeave: (prop_types_default()).func,
  showArea: (prop_types_default()).bool,
  showLine: (prop_types_default()).bool,
  stroke: (prop_types_default()).string,
  strokeDasharray: (prop_types_default()).string,
  strokeLinecap: prop_types_default().oneOf(['butt', 'square', 'round', 'inherit']),
  strokeWidth: (prop_types_default()).number,
  // all likely passed by the parent chart
  data: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).object])),
  getX: (prop_types_default()).func,
  getY: (prop_types_default()).func,
  xScale: (prop_types_default()).func,
  yScale: (prop_types_default()).func,
  margin: prop_types_default().shape({
    top: (prop_types_default()).number,
    right: (prop_types_default()).number,
    bottom: (prop_types_default()).number,
    left: (prop_types_default()).number
  })
};
var LineSeries_defaultProps = {
  curve: 'monotoneX',
  data: [],
  fill: build/* color.default */.$_["default"],
  fillOpacity: 0.3,
  getX: null,
  getY: null,
  onMouseMove: null,
  onMouseLeave: null,
  showArea: false,
  showLine: true,
  stroke: build/* color.default */.$_["default"],
  strokeWidth: 2,
  strokeDasharray: null,
  strokeLinecap: 'round',
  xScale: null,
  yScale: null,
  margin: {}
};
var CURVE_LOOKUP = {
  linear: d3_shape_src.curveLinear,
  basis: d3_shape_src.curveBasis,
  cardinal: d3_shape_src.curveCardinal,
  monotoneX: d3_shape_src.curveMonotoneX
};

var LineSeries =
/*#__PURE__*/
function (_React$PureComponent) {
  LineSeries_inheritsLoose(LineSeries, _React$PureComponent);

  function LineSeries() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = LineSeries.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        curve = _this$props.curve,
        data = _this$props.data,
        getX = _this$props.getX,
        getY = _this$props.getY,
        fill = _this$props.fill,
        fillOpacity = _this$props.fillOpacity,
        onMouseMove = _this$props.onMouseMove,
        onMouseLeave = _this$props.onMouseLeave,
        showArea = _this$props.showArea,
        showLine = _this$props.showLine,
        stroke = _this$props.stroke,
        strokeWidth = _this$props.strokeWidth,
        strokeDasharray = _this$props.strokeDasharray,
        strokeLinecap = _this$props.strokeLinecap,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale,
        margin = _this$props.margin;
    if (!xScale || !yScale || !getX || !getY || !data.length) return null;
    var curveFunc = CURVE_LOOKUP[curve];
    return react.createElement(Group/* default */.Z, {
      onMouseMove: onMouseMove && function (event) {
        var _findClosestDatum = findClosestDatum({
          data: data,
          getX: getX,
          event: event,
          xScale: xScale,
          marginLeft: margin.left
        }),
            datum = _findClosestDatum.datum,
            index = _findClosestDatum.index;

        onMouseMove({
          event: event,
          data: data,
          datum: datum,
          index: index,
          color: fill
        });
      },
      onMouseLeave: onMouseLeave
    }, showArea && react.createElement(AreaClosed/* default */.Z, {
      data: data,
      x: getX,
      y: getY,
      xScale: xScale,
      yScale: yScale,
      fill: fill,
      fillOpacity: fillOpacity,
      stroke: "transparent",
      strokeWidth: strokeWidth,
      curve: curveFunc,
      defined: function defined(d) {
        return utils_defined(getY(d));
      }
    }), showLine && strokeWidth > 0 && react.createElement(LinePath/* default */.Z, {
      data: data,
      x: getX,
      y: getY,
      xScale: xScale,
      yScale: yScale,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      strokeLinecap: strokeLinecap,
      curve: curveFunc,
      glyph: null,
      defined: function defined(d) {
        return utils_defined(getY(d));
      }
    }));
  };

  return LineSeries;
}(react.PureComponent);

LineSeries.propTypes = LineSeries_propTypes;
LineSeries.defaultProps = LineSeries_defaultProps;
LineSeries.displayName = 'LineSeries';
/* harmony default export */ const series_LineSeries = (LineSeries);
;// CONCATENATED MODULE: ./node_modules/@data-ui/sparkline/esm/annotation/VerticalReferenceLine.js
function VerticalReferenceLine_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function VerticalReferenceLine_extends() { VerticalReferenceLine_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return VerticalReferenceLine_extends.apply(this, arguments); }

/* eslint complexity: ['error', 12] */








var ZERO_DELTA = 0.00001;
var VerticalReferenceLine_propTypes = {
  reference: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().oneOf(['first', 'last', 'min', 'max'])]),
  LabelComponent: (prop_types_default()).element,
  labelOffset: (prop_types_default()).number,
  labelPosition: prop_types_default().oneOf(['top', 'right', 'bottom', 'left']),
  renderLabel: (prop_types_default()).func,
  stroke: (prop_types_default()).string,
  strokeDasharray: (prop_types_default()).string,
  strokeLinecap: prop_types_default().oneOf(['butt', 'square', 'round', 'inherit']),
  strokeWidth: (prop_types_default()).number,
  // all likely passed by the parent chart
  data: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).object])),
  getX: (prop_types_default()).func,
  getY: (prop_types_default()).func,
  xScale: (prop_types_default()).func,
  yScale: (prop_types_default()).func
};
var VerticalReferenceLine_defaultProps = {
  data: [],
  getX: null,
  getY: null,
  LabelComponent: react.createElement(annotation_Label, VerticalReferenceLine_extends({}, build/* svgLabel.baseTickLabel */.cq.baseTickLabel, {
    stroke: "#fff"
  })),
  labelOffset: 10,
  labelPosition: 'top',
  reference: 'last',
  renderLabel: null,
  stroke: build/* color.darkGray */.$_.darkGray,
  strokeDasharray: null,
  strokeLinecap: 'round',
  strokeWidth: 2,
  xScale: null,
  yScale: null
};

var VerticalReferenceLine =
/*#__PURE__*/
function (_React$PureComponent) {
  VerticalReferenceLine_inheritsLoose(VerticalReferenceLine, _React$PureComponent);

  function VerticalReferenceLine() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = VerticalReferenceLine.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        data = _this$props.data,
        getX = _this$props.getX,
        getY = _this$props.getY,
        LabelComponent = _this$props.LabelComponent,
        labelOffset = _this$props.labelOffset,
        labelPosition = _this$props.labelPosition,
        reference = _this$props.reference,
        renderLabel = _this$props.renderLabel,
        stroke = _this$props.stroke,
        strokeDasharray = _this$props.strokeDasharray,
        strokeLinecap = _this$props.strokeLinecap,
        strokeWidth = _this$props.strokeWidth,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale;
    if (!xScale || !yScale || !getY || !getX || !data.length) return null;

    var _yScale$range = yScale.range(),
        y1 = _yScale$range[0],
        y0 = _yScale$range[1];

    var _yScale$domain = yScale.domain(),
        yMin = _yScale$domain[0],
        yMax = _yScale$domain[1]; // use a number if passed, else find the index based on the ref type


    var index = reference;

    if (typeof reference !== 'number') {
      index = data.findIndex(function (d, i) {
        return reference === 'first' && i === 0 || reference === 'last' && i === data.length - 1 || reference === 'min' && Math.abs(getY(d) - yMin) < ZERO_DELTA || reference === 'max' && Math.abs(getY(d) - yMax) < ZERO_DELTA;
      });
    }

    var datum = data[index]; // use passed value if no datum, this enables custom x values

    var refNumber = datum ? getX(datum) : index;
    var scaledRef = xScale(refNumber);
    var fromPoint = new Point/* default */.Z({
      x: scaledRef,
      y: y1
    });
    var toPoint = new Point/* default */.Z({
      x: scaledRef,
      y: y0
    });
    var label = renderLabel && renderLabel(datum && getY(datum) || refNumber);
    return react.createElement(Group/* default */.Z, {
      style: {
        pointerEvents: 'none'
      }
    }, react.createElement(Line/* default */.Z, {
      from: fromPoint,
      to: toPoint,
      stroke: stroke,
      strokeDasharray: strokeDasharray,
      strokeLinecap: strokeLinecap,
      strokeWidth: strokeWidth,
      vectorEffect: "non-scaling-stroke"
    }), label && react.cloneElement(LabelComponent, VerticalReferenceLine_extends({
      x: toPoint.x,
      y: toPoint.y
    }, positionLabel(labelPosition, labelOffset), {
      label: label
    })));
  };

  return VerticalReferenceLine;
}(react.PureComponent);

VerticalReferenceLine.propTypes = VerticalReferenceLine_propTypes;
VerticalReferenceLine.defaultProps = VerticalReferenceLine_defaultProps;
VerticalReferenceLine.displayName = 'VerticalReferenceLine';
/* harmony default export */ const annotation_VerticalReferenceLine = (VerticalReferenceLine);
// EXTERNAL MODULE: ./node_modules/@data-ui/sparkline/node_modules/@vx/glyph/build/glyphs/Dot.js
var Dot = __webpack_require__(2197);
;// CONCATENATED MODULE: ./node_modules/@data-ui/sparkline/esm/series/PointSeries.js
function PointSeries_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function PointSeries_extends() { PointSeries_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PointSeries_extends.apply(this, arguments); }

/* eslint complexity: 0 */










var PointSeries_propTypes = {
  fill: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  fillOpacity: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  LabelComponent: (prop_types_default()).element,
  labelOffset: (prop_types_default()).number,
  labelPosition: prop_types_default().oneOfType([(prop_types_default()).func, prop_types_default().oneOf(['auto', 'top', 'right', 'bottom', 'left'])]),
  onMouseMove: (prop_types_default()).func,
  onMouseLeave: (prop_types_default()).func,
  points: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, // index
  prop_types_default().oneOf(['all', 'min', 'max', 'first', 'last'])])),
  size: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  renderLabel: (prop_types_default()).func,
  // (d, i) => node
  stroke: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  strokeWidth: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).number]),
  // all likely passed by the parent chart
  data: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).object])),
  getX: (prop_types_default()).func,
  getY: (prop_types_default()).func,
  xScale: (prop_types_default()).func,
  yScale: (prop_types_default()).func
};
var PointSeries_defaultProps = {
  data: [],
  fill: build/* color.default */.$_["default"],
  fillOpacity: 1,
  LabelComponent: react.createElement(annotation_Label, PointSeries_extends({}, build/* svgLabel.baseTickLabel */.cq.baseTickLabel, {
    stroke: "#fff"
  })),
  labelOffset: 12,
  labelPosition: 'auto',
  onMouseMove: null,
  onMouseLeave: null,
  getX: null,
  getY: null,
  points: ['min', 'max'],
  renderLabel: null,
  size: 4,
  stroke: '#fff',
  strokeWidth: 2,
  xScale: null,
  yScale: null
};
var PointSeries_ZERO_DELTA = 0.00001;

var PointSeries =
/*#__PURE__*/
function (_React$Component) {
  PointSeries_inheritsLoose(PointSeries, _React$Component);

  function PointSeries() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PointSeries.prototype;

  // we define a custom handler because the points prop may be impractible to cache
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var _this = this;

    var nonPointsAreEqual = Object.keys(PointSeries_propTypes).every( // eslint-disable-next-line react/destructuring-assignment
    function (prop) {
      return prop === 'points' || _this.props[prop] === nextProps[prop];
    });
    var points = this.props.points;
    var pointsAreEqual = nextProps.points.length === points.length && nextProps.points.every(function (point) {
      return points.indexOf(point) > -1;
    });
    return !(pointsAreEqual && nonPointsAreEqual);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        data = _this$props.data,
        getX = _this$props.getX,
        getY = _this$props.getY,
        fill = _this$props.fill,
        fillOpacity = _this$props.fillOpacity,
        LabelComponent = _this$props.LabelComponent,
        labelOffset = _this$props.labelOffset,
        labelPosition = _this$props.labelPosition,
        onMouseMove = _this$props.onMouseMove,
        onMouseLeave = _this$props.onMouseLeave,
        points = _this$props.points,
        renderLabel = _this$props.renderLabel,
        size = _this$props.size,
        stroke = _this$props.stroke,
        strokeWidth = _this$props.strokeWidth,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale;
    if (!xScale || !yScale || !getX || !getY || !data.length) return null;
    var showAll = points.includes('all');
    var showMin = points.includes('min');
    var showMax = points.includes('max');
    var showFirst = points.includes('first');
    var showLast = points.includes('last');

    var _extent = (0,d3_array_src.extent)(data, getY),
        minY = _extent[0],
        maxY = _extent[1];

    var lastIndex = data.length - 1;
    return react.createElement(Group/* default */.Z, null, data.map(function (d, i) {
      if (points.indexOf(i) > -1 || showAll || showFirst && i === 0 || showLast && i === lastIndex || showMin && Math.abs(getY(d) - minY) < PointSeries_ZERO_DELTA || showMax && Math.abs(getY(d) - maxY) < PointSeries_ZERO_DELTA) {
        var yVal = getY(d);
        var cx = xScale(getX(d));
        var cy = yScale(yVal);
        var key = cx + "-" + cy + "-" + i;
        var label = renderLabel && renderLabel(yVal, i);
        var prevCy = data[i - 1] ? yScale(getY(data[i - 1])) : null;
        var nextCy = data[i + 1] ? yScale(getY(data[i + 1])) : null;
        var fillValue = callOrValue(d.fill || fill, yVal, i); // position label above a point if either of the surrounding points are lower

        var autoLabelPosition = prevCy !== null && prevCy > cy || nextCy !== null && nextCy > cy ? 'top' : 'bottom';
        return utils_defined(cx) && utils_defined(cy) && react.createElement(Dot/* default */.Z, {
          key: key,
          cx: cx,
          cy: cy,
          r: callOrValue(d.size || size, yVal, i),
          fill: fillValue,
          fillOpacity: callOrValue(d.fillOpacity || fillOpacity, yVal, i),
          stroke: callOrValue(d.stroke || stroke, yVal, i),
          strokeWidth: callOrValue(d.strokeWidth || strokeWidth, yVal, i),
          onMouseMove: onMouseMove && function (event) {
            onMouseMove({
              event: event,
              data: data,
              datum: d,
              index: i,
              color: fillValue
            });
          },
          onMouseLeave: onMouseLeave
        }, label && react.cloneElement(LabelComponent, PointSeries_extends({
          x: cx,
          y: cy
        }, positionLabel(labelPosition === 'auto' ? autoLabelPosition : callOrValue(labelPosition, yVal, i), labelOffset), {
          label: label
        })));
      }

      return null;
    }));
  };

  return PointSeries;
}(react.Component);

PointSeries.propTypes = PointSeries_propTypes;
PointSeries.defaultProps = PointSeries_defaultProps;
PointSeries.displayName = 'PointSeries';
/* harmony default export */ const series_PointSeries = (PointSeries);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/dimension/getTextDimension.js
var getTextDimension = __webpack_require__(17614);
;// CONCATENATED MODULE: ./src/visualizations/TimeTable/SparklineCell.jsx
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





const SparklineCell_propTypes = {
  className: (prop_types_default()).string,
  width: (prop_types_default()).number,
  height: (prop_types_default()).number,
  data: (prop_types_default()).array.isRequired,
  ariaLabel: (prop_types_default()).string,
  numberFormat: (prop_types_default()).string,
  yAxisBounds: (prop_types_default()).array,
  showYAxis: (prop_types_default()).bool,
  renderTooltip: (prop_types_default()).func };

const SparklineCell_defaultProps = {
  className: '',
  width: 300,
  height: 50,
  ariaLabel: '',
  numberFormat: undefined,
  yAxisBounds: [null, null],
  showYAxis: false,
  renderTooltip() {
    return (0,emotion_react_browser_esm.jsx)("div", null);
  } };


const MARGIN = {
  top: 8,
  right: 8,
  bottom: 8,
  left: 8 };

const tooltipProps = {
  style: {
    opacity: 0.8 },

  offsetTop: 0 };


function getSparklineTextWidth(text) {
  return (
    (0,getTextDimension/* default */.Z)({
      text,
      style: {
        fontSize: '12px',
        fontWeight: 200,
        letterSpacing: 0.4 } }).

    width + 5);

}

function isValidBoundValue(value) {
  return (
    value !== null &&
    value !== undefined &&
    value !== '' &&
    !Number.isNaN(value));

}

class SparklineCell extends react.Component {
  renderHorizontalReferenceLine(value, label) {
    return (
      (0,emotion_react_browser_esm.jsx)(annotation_HorizontalReferenceLine, {
        reference: value,
        labelPosition: "right",
        renderLabel: () => label,
        stroke: "#bbb",
        strokeDasharray: "3 3",
        strokeWidth: 1 }));


  }

  render() {
    const {
      width,
      height,
      data,
      ariaLabel,
      numberFormat,
      yAxisBounds,
      showYAxis,
      renderTooltip } =
    this.props;

    const yScale = {};
    let hasMinBound = false;
    let hasMaxBound = false;

    if (yAxisBounds) {
      const [minBound, maxBound] = yAxisBounds;
      hasMinBound = isValidBoundValue(minBound);
      if (hasMinBound) {
        yScale.min = minBound;
      }
      hasMaxBound = isValidBoundValue(maxBound);
      if (hasMaxBound) {
        yScale.max = maxBound;
      }
    }

    let min;
    let max;
    let minLabel;
    let maxLabel;
    let labelLength = 0;
    if (showYAxis) {
      const [minBound, maxBound] = yAxisBounds;
      min = hasMinBound ?
      minBound :
      data.reduce((acc, current) => Math.min(acc, current), data[0]);
      max = hasMaxBound ?
      maxBound :
      data.reduce((acc, current) => Math.max(acc, current), data[0]);

      minLabel = (0,NumberFormatterRegistrySingleton/* formatNumber */.uf)(numberFormat, min);
      maxLabel = (0,NumberFormatterRegistrySingleton/* formatNumber */.uf)(numberFormat, max);
      labelLength = Math.max(
      getSparklineTextWidth(minLabel),
      getSparklineTextWidth(maxLabel));

    }

    const margin = {
      ...MARGIN,
      right: MARGIN.right + labelLength };


    return (
      (0,emotion_react_browser_esm.jsx)(WithTooltip/* default */.ZP, {
        tooltipProps: tooltipProps,
        hoverStyles: null,
        renderTooltip: renderTooltip },

      ({ onMouseLeave, onMouseMove, tooltipData }) =>
      (0,emotion_react_browser_esm.jsx)(chart_Sparkline, extends_default()({
        ariaLabel: ariaLabel,
        width: width,
        height: height,
        margin: margin,
        data: data,
        onMouseLeave: onMouseLeave,
        onMouseMove: onMouseMove },
      yScale),

      showYAxis && this.renderHorizontalReferenceLine(min, minLabel),
      showYAxis && this.renderHorizontalReferenceLine(max, maxLabel),
      (0,emotion_react_browser_esm.jsx)(series_LineSeries, { showArea: false, stroke: "#767676" }),
      tooltipData &&
      (0,emotion_react_browser_esm.jsx)(annotation_VerticalReferenceLine, {
        reference: tooltipData.index,
        strokeDasharray: "3 3",
        strokeWidth: 1 }),


      tooltipData &&
      (0,emotion_react_browser_esm.jsx)(series_PointSeries, {
        points: [tooltipData.index],
        fill: "#767676",
        strokeWidth: 1 }))));






  }}


SparklineCell.propTypes = SparklineCell_propTypes;
SparklineCell.defaultProps = SparklineCell_defaultProps;

/* harmony default export */ const TimeTable_SparklineCell = (SparklineCell);
;// CONCATENATED MODULE: ./src/visualizations/TimeTable/TimeTable.jsx
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













const ACCESSIBLE_COLOR_BOUNDS = ['#ca0020', '#0571b0'];

function colorFromBounds(value, bounds, colorBounds = ACCESSIBLE_COLOR_BOUNDS) {
  if (bounds) {
    const [min, max] = bounds;
    const [minColor, maxColor] = colorBounds;
    if (min !== null && max !== null) {
      const colorScale = (0,src.scaleLinear)().
      domain([min, (max + min) / 2, max]).
      range([minColor, 'grey', maxColor]);
      return colorScale(value);
    }
    if (min !== null) {
      return value >= min ? maxColor : minColor;
    }
    if (max !== null) {
      return value < max ? maxColor : minColor;
    }
  }
  return null;
}

const TimeTable_propTypes = {
  className: (prop_types_default()).string,
  height: (prop_types_default()).number,
  // Example
  // {'2018-04-14 00:00:00': { 'SUM(metric_value)': 80031779.40047 }}
  data: prop_types_default().objectOf(prop_types_default().objectOf((prop_types_default()).number)).isRequired,
  columnConfigs: prop_types_default().arrayOf(
  prop_types_default().shape({
    colType: (prop_types_default()).string,
    comparisonType: (prop_types_default()).string,
    d3format: (prop_types_default()).string,
    key: (prop_types_default()).string,
    label: (prop_types_default()).string,
    timeLag: (prop_types_default()).number })).

  isRequired,
  rows: prop_types_default().arrayOf(
  prop_types_default().oneOfType([
  prop_types_default().shape({
    label: (prop_types_default()).string }),

  prop_types_default().shape({
    metric_name: (prop_types_default()).string })])).


  isRequired,
  rowType: prop_types_default().oneOf(['column', 'metric']).isRequired,
  url: (prop_types_default()).string };

const TimeTable_defaultProps = {
  className: '',
  height: undefined,
  url: '' };


const TimeTableStyles = style/* styled.div */.iK.div`
  height: ${(props) => props.height}px;

  th {
    z-index: 1; // to cover sparkline
  }
`;

const TimeTable = ({
  className,
  height,
  data,
  columnConfigs,
  rowType,
  rows,
  url }) =>
{
  const memoizedColumns = (0,react.useMemo)(
  () => [
  { accessor: 'metric', Header: 'Metric' },
  ...columnConfigs.map((columnConfig, i) => ({
    accessor: columnConfig.key,
    cellProps: columnConfig.colType === 'spark' && {
      style: { width: '1%' } },

    Header: () =>
    (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    columnConfig.label, ' ',
    columnConfig.tooltip &&
    (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, {
      tooltip: columnConfig.tooltip,
      label: `tt-col-${i}`,
      placement: "top" })),




    sortType: (rowA, rowB, columnId) => {
      const rowAVal = rowA.values[columnId].props['data-value'];
      const rowBVal = rowB.values[columnId].props['data-value'];
      return rowAVal - rowBVal;
    } }))],


  [columnConfigs]);


  const memoizedRows = (0,react.useMemo)(() => {
    const renderSparklineCell = (valueField, column, entries) => {
      let sparkData;
      if (column.timeRatio) {
        // Period ratio sparkline
        sparkData = [];
        for (let i = column.timeRatio; i < entries.length; i += 1) {
          const prevData = entries[i - column.timeRatio][valueField];
          if (prevData && prevData !== 0) {
            sparkData.push(entries[i][valueField] / prevData);
          } else {
            sparkData.push(null);
          }
        }
      } else {
        sparkData = entries.map((d) => d[valueField]);
      }

      return (
        (0,emotion_react_browser_esm.jsx)(TimeTable_SparklineCell, {
          width: parseInt(column.width, 10) || 300,
          height: parseInt(column.height, 10) || 50,
          data: sparkData,
          "data-value": sparkData[sparkData.length - 1],
          ariaLabel: `spark-${valueField}`,
          numberFormat: column.d3format,
          yAxisBounds: column.yAxisBounds,
          showYAxis: column.showYAxis,
          renderTooltip: ({ index }) =>
          (0,emotion_react_browser_esm.jsx)("div", null,
          (0,emotion_react_browser_esm.jsx)("strong", null, (0,NumberFormatterRegistrySingleton/* formatNumber */.uf)(column.d3format, sparkData[index])),
          (0,emotion_react_browser_esm.jsx)("div", null,
          (0,TimeFormatterRegistrySingleton/* formatTime */.mr)(
          column.dateFormat,
          moment_default().utc(entries[index].time).toDate()))) }));






    };

    const renderValueCell = (valueField, column, reversedEntries) => {
      const recent = reversedEntries[0][valueField];
      let v;
      let errorMsg;
      if (column.colType === 'time') {
        // Time lag ratio
        const timeLag = column.timeLag || 0;
        const totalLag = Object.keys(reversedEntries).length;
        if (timeLag >= totalLag) {
          errorMsg = `The time lag set at ${timeLag} is too large for the length of data at ${reversedEntries.length}. No data available.`;
        } else {
          v = reversedEntries[timeLag][valueField];
        }
        if (column.comparisonType === 'diff') {
          v = recent - v;
        } else if (column.comparisonType === 'perc') {
          v = recent / v;
        } else if (column.comparisonType === 'perc_change') {
          v = recent / v - 1;
        }
        v = v || 0;
      } else if (column.colType === 'contrib') {
        // contribution to column total
        v =
        recent /
        Object.keys(reversedEntries[0]).
        map((k) => k !== 'time' ? reversedEntries[0][k] : null).
        reduce((a, b) => a + b);
      } else if (column.colType === 'avg') {
        // Average over the last {timeLag}
        v = null;
        if (reversedEntries.length > 0) {
          const stats = reversedEntries.slice(undefined, column.timeLag).reduce(
          function ({ count, sum }, entry) {
            return entry[valueField] !== undefined &&
            entry[valueField] !== null ?
            { count: count + 1, sum: sum + entry[valueField] } :
            { count, sum };
          },
          { count: 0, sum: 0 });

          if (stats.count > 0) {
            v = stats.sum / stats.count;
          }
        }
      }

      const color = colorFromBounds(v, column.bounds);

      return (
        (0,emotion_react_browser_esm.jsx)("span", {
          key: column.key,
          "data-value": v,
          style:
          color && {
            boxShadow: `inset 0px -2.5px 0px 0px ${color}`,
            borderRight: '2px solid #fff' } },



        errorMsg ||
        (0,emotion_react_browser_esm.jsx)("span", { style: { color } },
        (0,emotion_react_browser_esm.jsx)(TimeTable_FormattedNumber, { num: v, format: column.d3format }))));




    };

    const renderLeftCell = (row) => {
      const context = { metric: row };
      const fullUrl = url ? mustache_default().render(url, context) : null;

      if (rowType === 'column') {
        const column = row;
        if (fullUrl) {
          return (
            (0,emotion_react_browser_esm.jsx)("a", { href: fullUrl, rel: "noopener noreferrer", target: "_blank" },
            column.label));


        }
        return column.label;
      }

      return (
        (0,emotion_react_browser_esm.jsx)(MetricOption/* MetricOption */.m, {
          metric: row,
          url: fullUrl,
          showFormula: false,
          openInNewWindow: true }));


    };

    const entries = Object.keys(data).
    sort().
    map((time) => ({ ...data[time], time }));
    const reversedEntries = entries.concat().reverse();

    return rows.map((row) => {
      const valueField = row.label || row.metric_name;
      const cellValues = columnConfigs.reduce((acc, columnConfig) => {
        if (columnConfig.colType === 'spark') {
          return {
            ...acc,
            [columnConfig.key]: renderSparklineCell(
            valueField,
            columnConfig,
            entries) };


        }
        return {
          ...acc,
          [columnConfig.key]: renderValueCell(
          valueField,
          columnConfig,
          reversedEntries) };


      }, {});
      return { ...row, ...cellValues, metric: renderLeftCell(row) };
    });
  }, [columnConfigs, data, rowType, rows, url]);

  const defaultSort =
  rowType === 'column' && columnConfigs.length ?
  [
  {
    id: columnConfigs[0].key,
    desc: 'true' }] :


  [];

  return (
    (0,emotion_react_browser_esm.jsx)(TimeTableStyles, { className: `time-table ${className}`, height: height },
    (0,emotion_react_browser_esm.jsx)(TableView/* default */.Z, {
      className: "table-no-hover",
      columns: memoizedColumns,
      data: memoizedRows,
      initialSortBy: defaultSort,
      withPagination: false })));



};

TimeTable.propTypes = TimeTable_propTypes;
TimeTable.defaultProps = TimeTable_defaultProps;

/* harmony default export */ const TimeTable_TimeTable = (TimeTable);

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if ( true && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
  } else {}
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.3.2';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;
}));


/***/ }),

/***/ 52630:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.iB = exports.YM = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ultimatePagination = __webpack_require__(2371);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var renderItemComponentFunctionFactory = function renderItemComponentFunctionFactory(itemTypeToComponent, currentPage, onChange) {
  var onItemClickFunctionFactory = function onItemClickFunctionFactory(_ref) {
    var value = _ref.value,
        isDisabled = _ref.isDisabled;

    return function () {
      if (!isDisabled && onChange && currentPage !== value) {
        onChange(value);
      }
    };
  };

  return function (props) {
    var ItemComponent = itemTypeToComponent[props.type];
    var onItemClick = onItemClickFunctionFactory(props);
    return _react2.default.createElement(ItemComponent, _extends({ onClick: onItemClick }, props));
  };
};

var createUltimatePagination = function createUltimatePagination(_ref2) {
  var itemTypeToComponent = _ref2.itemTypeToComponent,
      _ref2$WrapperComponen = _ref2.WrapperComponent,
      WrapperComponent = _ref2$WrapperComponen === undefined ? 'div' : _ref2$WrapperComponen;

  var UltimatePaginationComponent = function UltimatePaginationComponent(props) {
    var currentPage = props.currentPage,
        totalPages = props.totalPages,
        boundaryPagesRange = props.boundaryPagesRange,
        siblingPagesRange = props.siblingPagesRange,
        hideEllipsis = props.hideEllipsis,
        hidePreviousAndNextPageLinks = props.hidePreviousAndNextPageLinks,
        hideFirstAndLastPageLinks = props.hideFirstAndLastPageLinks,
        onChange = props.onChange,
        disabled = props.disabled,
        restProps = _objectWithoutProperties(props, ['currentPage', 'totalPages', 'boundaryPagesRange', 'siblingPagesRange', 'hideEllipsis', 'hidePreviousAndNextPageLinks', 'hideFirstAndLastPageLinks', 'onChange', 'disabled']);

    var paginationModel = (0, _ultimatePagination.getPaginationModel)({
      currentPage: currentPage,
      totalPages: totalPages,
      boundaryPagesRange: boundaryPagesRange,
      siblingPagesRange: siblingPagesRange,
      hideEllipsis: hideEllipsis,
      hidePreviousAndNextPageLinks: hidePreviousAndNextPageLinks,
      hideFirstAndLastPageLinks: hideFirstAndLastPageLinks
    });
    var renderItemComponent = renderItemComponentFunctionFactory(itemTypeToComponent, currentPage, onChange);
    return _react2.default.createElement(
      WrapperComponent,
      restProps,
      paginationModel.map(function (itemModel) {
        return renderItemComponent(_extends({}, itemModel, {
          isDisabled: !!disabled
        }));
      })
    );
  };

  UltimatePaginationComponent.propTypes = {
    currentPage: _propTypes2.default.number.isRequired,
    totalPages: _propTypes2.default.number.isRequired,
    boundaryPagesRange: _propTypes2.default.number,
    siblingPagesRange: _propTypes2.default.number,
    hideEllipsis: _propTypes2.default.bool,
    hidePreviousAndNextPageLinks: _propTypes2.default.bool,
    hideFirstAndLastPageLinks: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    disabled: _propTypes2.default.bool
  };

  return UltimatePaginationComponent;
};

exports.YM = createUltimatePagination;
exports.iB = _ultimatePagination.ITEM_TYPES;

/***/ }),

/***/ 21592:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.ITEM_TYPES = {
    PAGE: 'PAGE',
    ELLIPSIS: 'ELLIPSIS',
    FIRST_PAGE_LINK: 'FIRST_PAGE_LINK',
    PREVIOUS_PAGE_LINK: 'PREVIOUS_PAGE_LINK',
    NEXT_PAGE_LINK: 'NEXT_PAGE_LINK',
    LAST_PAGE_LINK: 'LAST_PAGE_LINK'
};
exports.ITEM_KEYS = {
    FIRST_ELLIPSIS: -1,
    SECOND_ELLIPSIS: -2,
    FIRST_PAGE_LINK: -3,
    PREVIOUS_PAGE_LINK: -4,
    NEXT_PAGE_LINK: -5,
    LAST_PAGE_LINK: -6
};
//# sourceMappingURL=ultimate-pagination-constants.js.map

/***/ }),

/***/ 53804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var ultimate_pagination_constants_1 = __webpack_require__(21592);
exports.createFirstEllipsis = function (pageNumber) {
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.ELLIPSIS,
        key: ultimate_pagination_constants_1.ITEM_KEYS.FIRST_ELLIPSIS,
        value: pageNumber,
        isActive: false
    };
};
exports.createSecondEllipsis = function (pageNumber) {
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.ELLIPSIS,
        key: ultimate_pagination_constants_1.ITEM_KEYS.SECOND_ELLIPSIS,
        value: pageNumber,
        isActive: false
    };
};
exports.createFirstPageLink = function (options) {
    var currentPage = options.currentPage;
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.FIRST_PAGE_LINK,
        key: ultimate_pagination_constants_1.ITEM_KEYS.FIRST_PAGE_LINK,
        value: 1,
        isActive: currentPage === 1
    };
};
exports.createPreviousPageLink = function (options) {
    var currentPage = options.currentPage;
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.PREVIOUS_PAGE_LINK,
        key: ultimate_pagination_constants_1.ITEM_KEYS.PREVIOUS_PAGE_LINK,
        value: Math.max(1, currentPage - 1),
        isActive: currentPage === 1
    };
};
exports.createNextPageLink = function (options) {
    var currentPage = options.currentPage, totalPages = options.totalPages;
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.NEXT_PAGE_LINK,
        key: ultimate_pagination_constants_1.ITEM_KEYS.NEXT_PAGE_LINK,
        value: Math.min(totalPages, currentPage + 1),
        isActive: currentPage === totalPages
    };
};
exports.createLastPageLink = function (options) {
    var currentPage = options.currentPage, totalPages = options.totalPages;
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.LAST_PAGE_LINK,
        key: ultimate_pagination_constants_1.ITEM_KEYS.LAST_PAGE_LINK,
        value: totalPages,
        isActive: currentPage === totalPages
    };
};
exports.createPageFunctionFactory = function (options) {
    var currentPage = options.currentPage;
    return function (pageNumber) {
        return {
            type: ultimate_pagination_constants_1.ITEM_TYPES.PAGE,
            key: pageNumber,
            value: pageNumber,
            isActive: pageNumber === currentPage
        };
    };
};
//# sourceMappingURL=ultimate-pagination-item-factories.js.map

/***/ }),

/***/ 1158:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

function createRange(start, end) {
    var range = [];
    for (var i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}
exports.createRange = createRange;
//# sourceMappingURL=ultimate-pagination-utils.js.map

/***/ }),

/***/ 2371:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var ultimate_pagination_utils_1 = __webpack_require__(1158);
var ultimate_pagination_item_factories_1 = __webpack_require__(53804);
function getPaginationModel(options) {
    if (options == null) {
        throw new Error('getPaginationModel(): options object should be a passed');
    }
    var totalPages = Number(options.totalPages);
    if (isNaN(totalPages)) {
        throw new Error('getPaginationModel(): totalPages should be a number');
    }
    if (totalPages < 0) {
        throw new Error('getPaginationModel(): totalPages shouldn\'t be a negative number');
    }
    var currentPage = Number(options.currentPage);
    if (isNaN(currentPage)) {
        throw new Error('getPaginationModel(): currentPage should be a number');
    }
    if (currentPage < 0) {
        throw new Error('getPaginationModel(): currentPage shouldn\'t be a negative number');
    }
    if (currentPage > totalPages) {
        throw new Error('getPaginationModel(): currentPage shouldn\'t be greater than totalPages');
    }
    var boundaryPagesRange = (options.boundaryPagesRange == null ? 1 : Number(options.boundaryPagesRange));
    if (isNaN(boundaryPagesRange)) {
        throw new Error('getPaginationModel(): boundaryPagesRange should be a number');
    }
    if (boundaryPagesRange < 0) {
        throw new Error('getPaginationModel(): boundaryPagesRange shouldn\'t be a negative number');
    }
    var siblingPagesRange = (options.siblingPagesRange == null ? 1 : Number(options.siblingPagesRange));
    if (isNaN(siblingPagesRange)) {
        throw new Error('getPaginationModel(): siblingPagesRange should be a number');
    }
    if (siblingPagesRange < 0) {
        throw new Error('getPaginationModel(): siblingPagesRange shouldn\'t be a negative number');
    }
    var hidePreviousAndNextPageLinks = Boolean(options.hidePreviousAndNextPageLinks);
    var hideFirstAndLastPageLinks = Boolean(options.hideFirstAndLastPageLinks);
    var hideEllipsis = Boolean(options.hideEllipsis);
    var ellipsisSize = (hideEllipsis ? 0 : 1);
    var paginationModel = [];
    var createPage = ultimate_pagination_item_factories_1.createPageFunctionFactory(options);
    if (!hideFirstAndLastPageLinks) {
        paginationModel.push(ultimate_pagination_item_factories_1.createFirstPageLink(options));
    }
    if (!hidePreviousAndNextPageLinks) {
        paginationModel.push(ultimate_pagination_item_factories_1.createPreviousPageLink(options));
    }
    // Simplify generation of pages if number of available items is equal or greater than total pages to show
    if (1 + 2 * ellipsisSize + 2 * siblingPagesRange + 2 * boundaryPagesRange >= totalPages) {
        var allPages = ultimate_pagination_utils_1.createRange(1, totalPages).map(createPage);
        paginationModel.push.apply(paginationModel, allPages);
    }
    else {
        // Calculate group of first pages
        var firstPagesStart = 1;
        var firstPagesEnd = boundaryPagesRange;
        var firstPages = ultimate_pagination_utils_1.createRange(firstPagesStart, firstPagesEnd).map(createPage);
        // Calculate group of last pages
        var lastPagesStart = totalPages + 1 - boundaryPagesRange;
        var lastPagesEnd = totalPages;
        var lastPages = ultimate_pagination_utils_1.createRange(lastPagesStart, lastPagesEnd).map(createPage);
        // Calculate group of main pages
        var mainPagesStart = Math.min(Math.max(currentPage - siblingPagesRange, firstPagesEnd + ellipsisSize + 1), lastPagesStart - ellipsisSize - 2 * siblingPagesRange - 1);
        var mainPagesEnd = mainPagesStart + 2 * siblingPagesRange;
        var mainPages = ultimate_pagination_utils_1.createRange(mainPagesStart, mainPagesEnd).map(createPage);
        // Add group of first pages
        paginationModel.push.apply(paginationModel, firstPages);
        if (!hideEllipsis) {
            // Calculate and add ellipsis before group of main pages
            var firstEllipsisPageNumber = mainPagesStart - 1;
            var showPageInsteadOfFirstEllipsis = (firstEllipsisPageNumber === firstPagesEnd + 1);
            var createFirstEllipsisOrPage = showPageInsteadOfFirstEllipsis ? createPage : ultimate_pagination_item_factories_1.createFirstEllipsis;
            var firstEllipsis = createFirstEllipsisOrPage(firstEllipsisPageNumber);
            paginationModel.push(firstEllipsis);
        }
        // Add group of main pages
        paginationModel.push.apply(paginationModel, mainPages);
        if (!hideEllipsis) {
            // Calculate and add ellipsis after group of main pages
            var secondEllipsisPageNumber = mainPagesEnd + 1;
            var showPageInsteadOfSecondEllipsis = (secondEllipsisPageNumber === lastPagesStart - 1);
            var createSecondEllipsisOrPage = showPageInsteadOfSecondEllipsis ? createPage : ultimate_pagination_item_factories_1.createSecondEllipsis;
            var secondEllipsis = createSecondEllipsisOrPage(secondEllipsisPageNumber);
            paginationModel.push(secondEllipsis);
        }
        // Add group of last pages
        paginationModel.push.apply(paginationModel, lastPages);
    }
    if (!hidePreviousAndNextPageLinks) {
        paginationModel.push(ultimate_pagination_item_factories_1.createNextPageLink(options));
    }
    if (!hideFirstAndLastPageLinks) {
        paginationModel.push(ultimate_pagination_item_factories_1.createLastPageLink(options));
    }
    return paginationModel;
}
exports.getPaginationModel = getPaginationModel;
var ultimate_pagination_constants_1 = __webpack_require__(21592);
exports.ITEM_TYPES = ultimate_pagination_constants_1.ITEM_TYPES;
exports.ITEM_KEYS = ultimate_pagination_constants_1.ITEM_KEYS;
//# sourceMappingURL=ultimate-pagination.js.map

/***/ })

}]);