import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import { useMemo } from 'react';
import * as PropTypes from 'prop-types';
import useDraggableControl, { draggableControlDefaultProps, draggableControlPropTypes } from './draggable-control';
import { crispPixel } from '../utils/crisp-pixel';
import { getTerrainElevation } from '../utils/terrain';
var propTypes = Object.assign({}, draggableControlPropTypes, {
  className: PropTypes.string,
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired
});
var defaultProps = Object.assign({}, draggableControlDefaultProps, {
  className: ''
});

function getPosition(_ref) {
  var props = _ref.props,
      state = _ref.state,
      context = _ref.context;
  var longitude = props.longitude,
      latitude = props.latitude,
      offsetLeft = props.offsetLeft,
      offsetTop = props.offsetTop;
  var dragPos = state.dragPos,
      dragOffset = state.dragOffset;
  var viewport = context.viewport,
      map = context.map;

  if (dragPos && dragOffset) {
    return [dragPos[0] + dragOffset[0], dragPos[1] + dragOffset[1]];
  }

  var altitude = getTerrainElevation(map, {
    longitude: longitude,
    latitude: latitude
  });

  var _viewport$project = viewport.project([longitude, latitude, altitude]),
      _viewport$project2 = _slicedToArray(_viewport$project, 2),
      x = _viewport$project2[0],
      y = _viewport$project2[1];

  x += offsetLeft;
  y += offsetTop;
  return [x, y];
}

function Marker(props) {
  var thisRef = useDraggableControl(props);
  var state = thisRef.state,
      containerRef = thisRef.containerRef;
  var children = props.children,
      className = props.className,
      draggable = props.draggable;
  var dragPos = state.dragPos;

  var _getPosition = getPosition(thisRef),
      _getPosition2 = _slicedToArray(_getPosition, 2),
      x = _getPosition2[0],
      y = _getPosition2[1];

  var transform = "translate(".concat(crispPixel(x), "px, ").concat(crispPixel(y), "px)");
  var cursor = draggable ? dragPos ? 'grabbing' : 'grab' : 'auto';
  var control = useMemo(function () {
    var containerStyle = {
      position: 'absolute',
      left: 0,
      top: 0,
      transform: transform,
      cursor: cursor
    };
    return React.createElement("div", {
      className: "mapboxgl-marker ".concat(className),
      ref: thisRef.containerRef,
      style: containerStyle
    }, children);
  }, [children, className]);
  var container = containerRef.current;

  if (container) {
    container.style.transform = transform;
    container.style.cursor = cursor;
  }

  return control;
}

Marker.defaultProps = defaultProps;
Marker.propTypes = propTypes;
export default React.memo(Marker);
//# sourceMappingURL=marker.js.map