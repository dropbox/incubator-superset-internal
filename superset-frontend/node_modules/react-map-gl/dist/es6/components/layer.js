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
  var {
    layout = {},
    paint = {},
    filter,
    minzoom,
    maxzoom,
    beforeId
  } = props,
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
export default class Layer extends PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "_map", null);

    this.id = props.id || "jsx-layer-".concat(layerCounter++);
    this.type = props.type;
  }

  componentDidMount() {
    this._createLayer();
  }

  componentDidUpdate(prevProps) {
    this._updateLayer(prevProps);
  }

  componentWillUnmount() {
    this._map.removeLayer(this.id);
  }

  _createLayer() {
    var map = this._map;
    var options = Object.assign({}, this.props);
    options.id = this.id;
    delete options.beforeId;

    if (map.style._loaded) {
      map.addLayer(options, this.props.beforeId);
    } else {
      map.once('styledata', () => this.forceUpdate());
    }
  }

  _updateLayer(prevProps) {
    var {
      props
    } = this;
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

  _render(context) {
    this._map = context.map;
    return null;
  }

  render() {
    return React.createElement(MapContext.Consumer, null, this._render.bind(this));
  }

}

_defineProperty(Layer, "propTypes", propTypes);
//# sourceMappingURL=layer.js.map