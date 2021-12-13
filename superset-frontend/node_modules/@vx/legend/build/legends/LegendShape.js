'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LegendShape;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Rect = require('../shapes/Rect');

var _Rect2 = _interopRequireDefault(_Rect);

var _renderShape = require('../util/renderShape');

var _renderShape2 = _interopRequireDefault(_renderShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LegendShape(_ref) {
  var _ref$shape = _ref.shape,
      shape = _ref$shape === undefined ? _Rect2.default : _ref$shape,
      width = _ref.width,
      height = _ref.height,
      margin = _ref.margin,
      label = _ref.label,
      fill = _ref.fill,
      size = _ref.size,
      shapeStyle = _ref.shapeStyle;

  return _react2.default.createElement(
    'div',
    {
      className: 'vx-legend-shape',
      style: {
        display: 'flex',
        width: !!size ? size(_extends({}, label)) : width,
        height: !!size ? size(_extends({}, label)) : height,
        margin: margin
      }
    },
    (0, _renderShape2.default)({
      shape: shape,
      label: label,
      width: width,
      height: height,
      fill: fill,
      shapeStyle: shapeStyle
    })
  );
}