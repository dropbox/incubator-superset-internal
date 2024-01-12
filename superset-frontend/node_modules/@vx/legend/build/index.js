'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Legend = require('./legends/Legend');

Object.defineProperty(exports, 'Legend', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Legend).default;
  }
});

var _Quantile = require('./legends/Quantile');

Object.defineProperty(exports, 'LegendQuantile', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Quantile).default;
  }
});

var _Linear = require('./legends/Linear');

Object.defineProperty(exports, 'LegendLinear', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Linear).default;
  }
});

var _Ordinal = require('./legends/Ordinal');

Object.defineProperty(exports, 'LegendOrdinal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Ordinal).default;
  }
});

var _Threshold = require('./legends/Threshold');

Object.defineProperty(exports, 'LegendThreshold', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Threshold).default;
  }
});

var _Size = require('./legends/Size');

Object.defineProperty(exports, 'LegendSize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Size).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }