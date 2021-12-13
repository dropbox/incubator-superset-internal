'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BarStack;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _group = require('@vx/group');

var _Bar = require('./Bar');

var _Bar2 = _interopRequireDefault(_Bar);

var _d3Shape = require('d3-shape');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      height = _ref.height,
      restProps = _objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x', 'xScale', 'yScale', 'zScale', 'keys', 'height']);

  var series = (0, _d3Shape.stack)().keys(keys)(data);
  var format = xScale.tickFormat ? xScale.tickFormat() : function (d) {
    return d;
  };
  var bandwidth = xScale.bandwidth();
  var step = xScale.step();
  var paddingInner = xScale.paddingInner();
  var paddingOuter = xScale.paddingOuter();
  return _react2.default.createElement(
    _group.Group,
    { className: (0, _classnames2.default)('vx-bar-stack', className), top: top, left: left },
    series && series.map(function (s, i) {
      return _react2.default.createElement(
        _group.Group,
        { key: 'vx-bar-stack-' + i },
        s.map(function (d, ii) {
          var barHeight = yScale(d[0]) - yScale(d[1]);
          return _react2.default.createElement(_Bar2.default, _extends({
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

BarStack.propTypes = {
  data: _propTypes2.default.array.isRequired,
  x: _propTypes2.default.func.isRequired,
  xScale: _propTypes2.default.func.isRequired,
  yScale: _propTypes2.default.func.isRequired,
  zScale: _propTypes2.default.func.isRequired,
  keys: _propTypes2.default.array.isRequired,
  className: _propTypes2.default.string,
  top: _propTypes2.default.number,
  left: _propTypes2.default.number
};