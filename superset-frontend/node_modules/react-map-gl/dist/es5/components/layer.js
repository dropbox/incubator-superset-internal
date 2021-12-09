"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mapContext = _interopRequireDefault(require("./map-context"));

var _assert = _interopRequireDefault(require("../utils/assert"));

var _deepEqual = _interopRequireDefault(require("../utils/deep-equal"));

var propTypes = {
  type: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string,
  source: _propTypes["default"].string,
  beforeId: _propTypes["default"].string
};

function diffLayerStyles(map, id, props, prevProps) {
  var _props$layout = props.layout,
      layout = _props$layout === void 0 ? {} : _props$layout,
      _props$paint = props.paint,
      paint = _props$paint === void 0 ? {} : _props$paint,
      filter = props.filter,
      minzoom = props.minzoom,
      maxzoom = props.maxzoom,
      beforeId = props.beforeId,
      otherProps = (0, _objectWithoutProperties2["default"])(props, ["layout", "paint", "filter", "minzoom", "maxzoom", "beforeId"]);

  if (beforeId !== prevProps.beforeId) {
    map.moveLayer(id, beforeId);
  }

  if (layout !== prevProps.layout) {
    for (var key in layout) {
      if (!(0, _deepEqual["default"])(layout[key], prevProps.layout[key])) {
        map.setLayoutProperty(id, key, layout[key]);
      }
    }
  }

  if (paint !== prevProps.paint) {
    for (var _key in paint) {
      if (!(0, _deepEqual["default"])(paint[_key], prevProps.paint[_key])) {
        map.setPaintProperty(id, _key, paint[_key]);
      }
    }
  }

  if (!(0, _deepEqual["default"])(filter, prevProps.filter)) {
    map.setFilter(id, filter);
  }

  if (minzoom !== prevProps.minzoom || maxzoom !== prevProps.maxzoom) {
    map.setLayerZoomRange(id, minzoom, maxzoom);
  }

  for (var _key2 in otherProps) {
    if (!(0, _deepEqual["default"])(otherProps[_key2], prevProps[_key2])) {
      map.setLayerProperty(id, _key2, otherProps[_key2]);
    }
  }
}

var layerCounter = 0;

var Layer = function (_PureComponent) {
  (0, _inherits2["default"])(Layer, _PureComponent);

  function Layer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Layer);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Layer).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "type", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_map", null);
    _this.id = props.id || "jsx-layer-".concat(layerCounter++);
    _this.type = props.type;
    return _this;
  }

  (0, _createClass2["default"])(Layer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._createLayer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this._updateLayer(prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._map.removeLayer(this.id);
    }
  }, {
    key: "_createLayer",
    value: function _createLayer() {
      var _this2 = this;

      var map = this._map;
      var options = Object.assign({}, this.props);
      options.id = this.id;
      delete options.beforeId;

      if (map.style._loaded) {
        map.addLayer(options, this.props.beforeId);
      } else {
        map.once('styledata', function () {
          return _this2.forceUpdate();
        });
      }
    }
  }, {
    key: "_updateLayer",
    value: function _updateLayer(prevProps) {
      var props = this.props;
      (0, _assert["default"])(!props.id || props.id === this.id, 'layer id changed');
      (0, _assert["default"])(props.type === this.type, 'layer type changed');
      var map = this._map;

      if (!map.getLayer(this.id)) {
        this._createLayer();

        return;
      }

      try {
        diffLayerStyles(map, this.id, props, prevProps);
      } catch (error) {
        console.warn(error);
      }
    }
  }, {
    key: "_render",
    value: function _render(context) {
      this._map = context.map;
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_mapContext["default"].Consumer, null, this._render.bind(this));
    }
  }]);
  return Layer;
}(_react.PureComponent);

exports["default"] = Layer;
(0, _defineProperty2["default"])(Layer, "propTypes", propTypes);
//# sourceMappingURL=layer.js.map