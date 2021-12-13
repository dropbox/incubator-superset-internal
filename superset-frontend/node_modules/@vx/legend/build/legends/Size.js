'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LegendSize;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Legend = require('./Legend');

var _Legend2 = _interopRequireDefault(_Legend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function LegendSize(_ref) {
  var scale = _ref.scale,
      domain = _ref.domain,
      _ref$steps = _ref.steps,
      steps = _ref$steps === undefined ? 5 : _ref$steps,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === undefined ? function (x) {
    return x;
  } : _ref$labelFormat,
      _ref$labelTransform = _ref.labelTransform,
      labelTransform = _ref$labelTransform === undefined ? defaultTransform : _ref$labelTransform,
      restProps = _objectWithoutProperties(_ref, ['scale', 'domain', 'steps', 'labelFormat', 'labelTransform']);

  domain = domain || defaultDomain({ steps: steps, scale: scale });
  return _react2.default.createElement(_Legend2.default, _extends({
    scale: scale,
    domain: domain,
    labelFormat: labelFormat,
    labelTransform: labelTransform
  }, restProps));
}

function defaultDomain(_ref2) {
  var steps = _ref2.steps,
      scale = _ref2.scale;

  var domain = scale.domain();
  var start = domain[0];
  var end = domain[domain.length - 1];
  var step = (end - start) / (steps - 1);
  return new Array(steps).fill(1).reduce(function (acc, cur, i) {
    acc.push(start + i * step);
    return acc;
  }, []);
}

function defaultTransform(_ref3) {
  var scale = _ref3.scale,
      labelFormat = _ref3.labelFormat;

  return function (d, i) {
    return {
      text: '' + labelFormat(d, i),
      value: scale(d),
      datum: d,
      index: i
    };
  };
}