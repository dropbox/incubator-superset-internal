'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LegendLabel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

LegendLabel.propTypes = {
  label: _propTypes2.default.string.isRequired,
  margin: _propTypes2.default.string.isRequired
};

function LegendLabel(_ref) {
  var label = _ref.label,
      margin = _ref.margin,
      align = _ref.align;

  return _react2.default.createElement(
    'div',
    {
      className: 'vx-legend-label',
      style: {
        justifyContent: align,
        display: 'flex',
        flex: '1',
        margin: margin
      }
    },
    label
  );
}