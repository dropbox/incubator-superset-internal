'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathHorizontalCurve = pathHorizontalCurve;
exports.default = LinkHorizontalCurve;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Path = require('d3-path');

var _additionalProps = require('../../../util/additionalProps');

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

    var path = (0, _d3Path.path)();
    path.moveTo(sx, sy);
    path.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path.toString();
  };
}

LinkHorizontalCurve.propTypes = {
  innerRef: _propTypes2.default.func,
  percent: _propTypes2.default.number,
  x: _propTypes2.default.func,
  y: _propTypes2.default.func,
  source: _propTypes2.default.func,
  target: _propTypes2.default.func,
  path: _propTypes2.default.func
};

function LinkHorizontalCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
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
      restProps = _objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path = path || pathHorizontalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: path(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}