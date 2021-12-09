import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MapContext from './map-context';
import assert from '../utils/assert';
import deepEqual from '../utils/deep-equal';
var propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  source: PropTypes.string,
  beforeId: PropTypes.string
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
      otherProps = _objectWithoutProperties(props, ["layout", "paint", "filter", "minzoom", "maxzoom", "beforeId"]);

  if (beforeId !== prevProps.beforeId) {
    map.moveLayer(id, beforeId);
  }

  if (layout !== prevProps.layout) {
    for (var key in layout) {
      if (!deepEqual(layout[key], prevProps.layout[key])) {
        map.setLayoutProperty(id, key, layout[key]);
      }
    }
  }

  if (paint !== prevProps.paint) {
    for (var _key in paint) {
      if (!deepEqual(paint[_key], prevProps.paint[_key])) {
        map.setPaintProperty(id, _key, paint[_key]);
      }
    }
  }

  if (!deepEqual(filter, prevProps.filter)) {
    map.setFilter(id, filter);
  }

  if (minzoom !== prevProps.minzoom || maxzoom !== prevProps.maxzoom) {
    map.setLayerZoomRange(id, minzoom, maxzoom);
  }

  for (var _key2 in otherProps) {
    if (!deepEqual(otherProps[_key2], prevProps[_key2])) {
      map.setLayerProperty(id, _key2, otherProps[_key2]);
    }
  }
}

var layerCounter = 0;

var Layer = function (_PureComponent) {
  _inherits(Layer, _PureComponent);

  function Layer(props) {
    var _this;

    _classCallCheck(this, Layer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "id", void 0);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "_map", null);

    _this.id = props.id || "jsx-layer-".concat(layerCounter++);
    _this.type = props.type;
    return _this;
  }

  _createClass(Layer, [{
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
      assert(!props.id || props.id === this.id, 'layer id changed');
      assert(props.type === this.type, 'layer type changed');
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
      return React.createElement(MapContext.Consumer, null, this._render.bind(this));
    }
  }]);

  return Layer;
}(PureComponent);

_defineProperty(Layer, "propTypes", propTypes);

export { Layer as default };
//# sourceMappingURL=layer.js.map