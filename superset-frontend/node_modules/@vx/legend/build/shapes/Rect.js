'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShapeRect;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShapeRect(_ref) {
  var fill = _ref.fill,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;

  return _react2.default.createElement('div', {
    style: {
      width: width,
      height: height,
      background: fill,
      style: style
    }
  });
}