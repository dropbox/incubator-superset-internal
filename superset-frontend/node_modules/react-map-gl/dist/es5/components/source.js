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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mapContext = _interopRequireDefault(require("./map-context"));

var _assert = _interopRequireDefault(require("../utils/assert"));

var propTypes = {
  type: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string
};
var sourceCounter = 0;

var Source = function (_PureComponent) {
  (0, _inherits2["default"])(Source, _PureComponent);

  function Source(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Source);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Source).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "type", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_map", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_sourceOptions", {});
    _this.id = props.id || "jsx-source-".concat(sourceCounter++);
    _this.type = props.type;
    return _this;
  }

  (0, _createClass2["default"])(Source, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._map.removeSource(this.id);
    }
  }, {
    key: "getSource",
    value: function getSource() {
      return this._map.getSource(this.id);
    }
  }, {
    key: "_createSource",
    value: function _createSource() {
      var _this2 = this;

      var map = this._map;

      if (map.style._loaded) {
        map.addSource(this.id, this._sourceOptions);
      } else {
        map.once('styledata', function () {
          return _this2.forceUpdate();
        });
      }
    }
  }, {
    key: "_updateSource",
    value: function _updateSource() {
      var sourceOptions = this._sourceOptions,
          props = this.props;
      (0, _assert["default"])(!props.id || props.id === this.id, 'source id changed');
      (0, _assert["default"])(props.type === this.type, 'source type changed');
      var changedKey = null;
      var changedKeyCount = 0;

      for (var key in props) {
        if (key !== 'children' && key !== 'id' && sourceOptions[key] !== props[key]) {
          sourceOptions[key] = props[key];
          changedKey = key;
          changedKeyCount++;
        }
      }

      var type = this.type,
          map = this._map;
      var source = this.getSource();

      if (!source) {
        this._createSource();

        return;
      }

      if (!changedKeyCount) {
        return;
      }

      if (type === 'geojson') {
        source.setData(sourceOptions.data);
      } else if (type === 'image') {
        source.updateImage({
          url: sourceOptions.url,
          coordinates: sourceOptions.coordinates
        });
      } else if ((type === 'canvas' || type === 'video') && changedKeyCount === 1 && changedKey === 'coordinates') {
        source.setCoordinates(sourceOptions.coordinates);
      } else {
        map.removeSource(this.id);
        map.addSource(sourceOptions);
      }
    }
  }, {
    key: "_render",
    value: function _render(context) {
      var _this3 = this;

      this._map = context.map;

      this._updateSource();

      return _react["default"].Children.map(this.props.children, function (child) {
        return (0, _react.cloneElement)(child, {
          source: _this3.id
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_mapContext["default"].Consumer, null, this._render.bind(this));
    }
  }]);
  return Source;
}(_react.PureComponent);

exports["default"] = Source;
(0, _defineProperty2["default"])(Source, "propTypes", propTypes);
//# sourceMappingURL=source.js.map