'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Stack;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _group = require('@vx/group');

var _additionalProps = require('../util/additionalProps');

var _additionalProps2 = _interopRequireDefault(_additionalProps);

var _stackOrder = require('../util/stackOrder');

var _stackOrder2 = _interopRequireDefault(_stackOrder);

var _stackOffset = require('../util/stackOffset');

var _stackOffset2 = _interopRequireDefault(_stackOffset);

var _d3Shape = require('d3-shape');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      restProps = _objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'value', 'order', 'offset', 'render', 'reverse']);

  var stack = (0, _d3Shape.stack)();
  if (keys) stack.keys(keys);
  if (value) stack.value(value);
  if (order) stack.order((0, _stackOrder2.default)(order));
  if (offset) stack.offset((0, _stackOffset2.default)(offset));

  var path = (0, _d3Shape.area)();
  if (x) path.x(x);
  if (x0) path.x0(x0);
  if (x1) path.x1(x1);
  if (y0) path.y0(y0);
  if (y1) path.y1(y1);
  if (curve) path.curve(curve);
  if (defined) path.defined(defined);

  var seriesData = stack(data);
  if (reverse) seriesData.reverse();

  if (render) return _react2.default.createElement(
    _group.Group,
    { top: top, left: left },
    render({ seriesData: seriesData, path: path })
  );

  return _react2.default.createElement(
    _group.Group,
    { top: top, left: left },
    seriesData.map(function (series, i) {
      return _react2.default.createElement('path', _extends({
        className: (0, _classnames2.default)('vx-stack', className),
        key: 'stack-' + i + '-' + (series.key || ''),
        d: path(series)
      }, (0, _additionalProps2.default)(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    })
  );
}