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
export default class Source extends PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "_map", null);

    _defineProperty(this, "_sourceOptions", {});

    this.id = props.id || "jsx-source-".concat(sourceCounter++);
    this.type = props.type;
  }

  componentWillUnmount() {
    this._map.removeSource(this.id);
  }

  getSource() {
    return this._map.getSource(this.id);
  }

  _createSource() {
    var map = this._map;

    if (map.style._loaded) {
      map.addSource(this.id, this._sourceOptions);
    } else {
      map.once('styledata', () => this.forceUpdate());
    }
  }

  _updateSource() {
    var {
      _sourceOptions: sourceOptions,
      props
    } = this;
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

    var {
      type,
      _map: map
    } = this;
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

  _render(context) {
    this._map = context.map;

    this._updateSource();

    return React.Children.map(this.props.children, child => cloneElement(child, {
      source: this.id
    }));
  }

  render() {
    return React.createElement(MapContext.Consumer, null, this._render.bind(this));
  }

}

_defineProperty(Source, "propTypes", propTypes);
//# sourceMappingURL=source.js.map