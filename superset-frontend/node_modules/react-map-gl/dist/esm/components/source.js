import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent, cloneElement } from 'react';
import PropTypes from 'prop-types';
import MapContext from './map-context';
import assert from '../utils/assert';
var propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string
};
var sourceCounter = 0;

var Source = function (_PureComponent) {
  _inherits(Source, _PureComponent);

  function Source(props) {
    var _this;

    _classCallCheck(this, Source);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Source).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "id", void 0);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "_map", null);

    _defineProperty(_assertThisInitialized(_this), "_sourceOptions", {});

    _this.id = props.id || "jsx-source-".concat(sourceCounter++);
    _this.type = props.type;
    return _this;
  }

  _createClass(Source, [{
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
      assert(!props.id || props.id === this.id, 'source id changed');
      assert(props.type === this.type, 'source type changed');
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

      return React.Children.map(this.props.children, function (child) {
        return cloneElement(child, {
          source: _this3.id
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(MapContext.Consumer, null, this._render.bind(this));
    }
  }]);

  return Source;
}(PureComponent);

_defineProperty(Source, "propTypes", propTypes);

export { Source as default };
//# sourceMappingURL=source.js.map