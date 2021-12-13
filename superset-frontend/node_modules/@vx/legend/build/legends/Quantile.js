'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LegendQuantile;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Legend = require('./Legend');

var _Legend2 = _interopRequireDefault(_Legend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LegendQuantile.propTypes = {
  scale: _propTypes2.default.func.isRequired,
  domain: _propTypes2.default.array,
  labelFormat: _propTypes2.default.func,
  labelTransform: _propTypes2.default.func,
  labelDelimiter: _propTypes2.default.string
};

function LegendQuantile(_ref) {
  var scale = _ref.scale,
      domain = _ref.domain,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === undefined ? function (x) {
    return x;
  } : _ref$labelFormat,
      labelTransform = _ref.labelTransform,
      _ref$labelDelimiter = _ref.labelDelimiter,
      labelDelimiter = _ref$labelDelimiter === undefined ? '-' : _ref$labelDelimiter,
      restProps = _objectWithoutProperties(_ref, ['scale', 'domain', 'labelFormat', 'labelTransform', 'labelDelimiter']);

  domain = domain || scale.range();
  labelTransform = labelTransform || defaultTransform({ labelDelimiter: labelDelimiter });
  return _react2.default.createElement(_Legend2.default, _extends({
    scale: scale,
    domain: domain,
    labelFormat: labelFormat,
    labelTransform: labelTransform
  }, restProps));
}

function defaultTransform(_ref2) {
  var labelDelimiter = _ref2.labelDelimiter;

  return function (_ref3) {
    var scale = _ref3.scale,
        labelFormat = _ref3.labelFormat;

    return function (d, i) {
      var _scale$invertExtent = scale.invertExtent(d),
          _scale$invertExtent2 = _slicedToArray(_scale$invertExtent, 2),
          x0 = _scale$invertExtent2[0],
          x1 = _scale$invertExtent2[1];

      return {
        extent: [x0, x1],
        text: labelFormat(x0, i) + ' ' + labelDelimiter + ' ' + labelFormat(x1, i),
        value: scale(x0),
        datum: d,
        index: i
      };
    };
  };
}