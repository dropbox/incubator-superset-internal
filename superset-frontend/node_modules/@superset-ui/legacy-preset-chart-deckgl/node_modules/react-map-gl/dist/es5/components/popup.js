"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _useMapControl = _interopRequireWildcard(require("./use-map-control"));

var _dynamicPosition = require("../utils/dynamic-position");

var _terrain = require("../utils/terrain");

var _crispPixel = require("../utils/crisp-pixel");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = Object.assign({}, _useMapControl.mapControlPropTypes, {
  className: PropTypes.string,
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  altitude: PropTypes.number,
  offsetLeft: PropTypes.number,
  offsetTop: PropTypes.number,
  tipSize: PropTypes.number,
  closeButton: PropTypes.bool,
  closeOnClick: PropTypes.bool,
  anchor: PropTypes.oneOf(Object.keys(_dynamicPosition.ANCHOR_POSITION)),
  dynamicPosition: PropTypes.bool,
  sortByDepth: PropTypes.bool,
  onClose: PropTypes.func
});
var defaultProps = Object.assign({}, _useMapControl.mapControlDefaultProps, {
  className: '',
  offsetLeft: 0,
  offsetTop: 0,
  tipSize: 10,
  anchor: 'bottom',
  dynamicPosition: true,
  sortByDepth: false,
  closeButton: true,
  closeOnClick: true,
  onClose: function onClose() {}
});

function getPosition(props, viewport, el, _ref) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      x = _ref2[0],
      y = _ref2[1];

  var anchor = props.anchor,
      dynamicPosition = props.dynamicPosition,
      tipSize = props.tipSize;

  if (el) {
    return dynamicPosition ? (0, _dynamicPosition.getDynamicPosition)({
      x: x,
      y: y,
      anchor: anchor,
      padding: tipSize,
      width: viewport.width,
      height: viewport.height,
      selfWidth: el.clientWidth,
      selfHeight: el.clientHeight
    }) : anchor;
  }

  return anchor;
}

function getContainerStyle(props, viewport, el, _ref3, positionType) {
  var _ref4 = (0, _slicedToArray2["default"])(_ref3, 3),
      x = _ref4[0],
      y = _ref4[1],
      z = _ref4[2];

  var offsetLeft = props.offsetLeft,
      offsetTop = props.offsetTop,
      sortByDepth = props.sortByDepth;
  var anchorPosition = _dynamicPosition.ANCHOR_POSITION[positionType];
  var left = x + offsetLeft;
  var top = y + offsetTop;
  var xPercentage = (0, _crispPixel.crispPercentage)(el, -anchorPosition.x * 100);
  var yPercentage = (0, _crispPixel.crispPercentage)(el, -anchorPosition.y * 100, 'y');
  var style = {
    position: 'absolute',
    transform: "\n      translate(".concat(xPercentage, "%, ").concat(yPercentage, "%)\n      translate(").concat((0, _crispPixel.crispPixel)(left), "px, ").concat((0, _crispPixel.crispPixel)(top), "px)\n    "),
    display: undefined,
    zIndex: undefined
  };

  if (!sortByDepth) {
    return style;
  }

  if (z > 1 || z < -1 || x < 0 || x > viewport.width || y < 0 || y > viewport.height) {
    style.display = 'none';
  } else {
    style.zIndex = Math.floor((1 - z) / 2 * 100000);
  }

  return style;
}

function onClick(evt, _ref5) {
  var props = _ref5.props,
      context = _ref5.context;

  if (props.closeOnClick || evt.target.className === 'mapboxgl-popup-close-button') {
    props.onClose();

    if (context.eventManager) {
      context.eventManager.once('click', function (e) {
        return e.stopPropagation();
      }, evt.target);
    }
  }
}

function Popup(props) {
  var contentRef = (0, React.useRef)(null);
  var thisRef = (0, _useMapControl["default"])(_objectSpread(_objectSpread({}, props), {}, {
    onClick: onClick
  }));
  var context = thisRef.context,
      containerRef = thisRef.containerRef;

  var _useState = (0, React.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      setLoaded = _useState2[1];

  (0, React.useEffect)(function () {
    setLoaded(true);
  }, [contentRef.current]);
  var viewport = context.viewport,
      map = context.map;
  var className = props.className,
      longitude = props.longitude,
      latitude = props.latitude,
      tipSize = props.tipSize,
      closeButton = props.closeButton,
      children = props.children;
  var altitude = props.altitude;

  if (altitude === undefined) {
    altitude = (0, _terrain.getTerrainElevation)(map, {
      longitude: longitude,
      latitude: latitude
    });
  }

  var position = viewport.project([longitude, latitude, altitude]);
  var positionType = getPosition(props, viewport, contentRef.current, position);
  var containerStyle = getContainerStyle(props, viewport, containerRef.current, position, positionType);
  var onReactClick = (0, React.useCallback)(function (e) {
    return !context.eventManager && onClick(e, thisRef);
  }, [context.eventManager]);
  return React.createElement("div", {
    className: "mapboxgl-popup mapboxgl-popup-anchor-".concat(positionType, " ").concat(className),
    style: containerStyle,
    ref: containerRef
  }, React.createElement("div", {
    key: "tip",
    className: "mapboxgl-popup-tip",
    style: {
      borderWidth: tipSize
    }
  }), React.createElement("div", {
    key: "content",
    ref: contentRef,
    className: "mapboxgl-popup-content",
    onClick: onReactClick
  }, closeButton && React.createElement("button", {
    key: "close-button",
    className: "mapboxgl-popup-close-button",
    type: "button"
  }, "\xD7"), children));
}

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;

var _default = React.memo(Popup);

exports["default"] = _default;
//# sourceMappingURL=popup.js.map