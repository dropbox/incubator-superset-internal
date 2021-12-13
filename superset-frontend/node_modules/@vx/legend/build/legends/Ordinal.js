'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LegendOrdinal;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Legend = require('./Legend');

var _Legend2 = _interopRequireDefault(_Legend);

var _valueOrIdentity = require('../util/valueOrIdentity');

var _valueOrIdentity2 = _interopRequireDefault(_valueOrIdentity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LegendOrdinal.propTypes = {
  scale: _propTypes2.default.func.isRequired,
  domain: _propTypes2.default.array,
  labelTransform: _propTypes2.default.func,
  labelFormat: _propTypes2.default.func
};

function LegendOrdinal(_ref) {
  var scale = _ref.scale,
      domain = _ref.domain,
      _ref$labelTransform = _ref.labelTransform,
      labelTransform = _ref$labelTransform === undefined ? defaultTransform : _ref$labelTransform,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === undefined ? _valueOrIdentity2.default : _ref$labelFormat,
      restProps = _objectWithoutProperties(_ref, ['scale', 'domain', 'labelTransform', 'labelFormat']);

  return _react2.default.createElement(_Legend2.default, _extends({
    scale: scale,
    domain: domain,
    labelFormat: labelFormat,
    labelTransform: labelTransform
  }, restProps));
}

function defaultTransform(_ref2) {
  var scale = _ref2.scale,
      labelFormat = _ref2.labelFormat;

  return function (d, i) {
    return {
      datum: d,
      index: i,
      text: '' + labelFormat(d, i),
      value: scale(d)
    };
  };
}