'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShapeCircle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _group = require('@vx/group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShapeCircle(_ref) {
  var fill = _ref.fill,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;

  if (typeof width === 'string') width = 0;
  if (typeof height === 'string') height = 0;
  var size = Math.max(width, height);
  var radius = size / 2;
  return _react2.default.createElement(
    'svg',
    { width: size, height: size },
    _react2.default.createElement(
      _group.Group,
      { top: radius, left: radius },
      _react2.default.createElement('circle', { r: radius, fill: fill, style: style })
    )
  );
}