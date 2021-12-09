import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import DraggableControl from './draggable-control';
var propTypes = Object.assign({}, DraggableControl.propTypes, {
  className: PropTypes.string,
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired
});
var defaultProps = Object.assign({}, DraggableControl.defaultProps, {
  className: ''
});
export default class Marker extends DraggableControl {
  _getPosition() {
    var {
      longitude,
      latitude,
      offsetLeft,
      offsetTop
    } = this.props;
    var {
      dragPos,
      dragOffset
    } = this.state;

    if (dragPos && dragOffset) {
      return this._getDraggedPosition(dragPos, dragOffset);
    }

    var [x, y] = this._context.viewport.project([longitude, latitude]);

    x += offsetLeft;
    y += offsetTop;
    return [x, y];
  }

  _render() {
    var {
      className,
      draggable
    } = this.props;
    var {
      dragPos
    } = this.state;

    var [x, y] = this._getPosition();

    var containerStyle = {
      position: 'absolute',
      left: x,
      top: y,
      cursor: draggable ? dragPos ? 'grabbing' : 'grab' : 'auto'
    };
    return React.createElement("div", {
      className: "mapboxgl-marker ".concat(className),
      ref: this._containerRef,
      style: containerStyle
    }, this.props.children);
  }

}

_defineProperty(Marker, "propTypes", propTypes);

_defineProperty(Marker, "defaultProps", defaultProps);
//# sourceMappingURL=marker.js.map