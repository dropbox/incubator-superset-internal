import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import WebMercatorViewport, { normalizeViewportProps } from 'viewport-mercator-project';
import { TransitionInterpolator } from './transition';
import { clamp } from './math-utils';
import assert from './assert';
export var MAPBOX_LIMITS = {
  minZoom: 0,
  maxZoom: 24,
  minPitch: 0,
  maxPitch: 60
};
var DEFAULT_STATE = {
  pitch: 0,
  bearing: 0,
  altitude: 1.5
};
export default class MapState {
  constructor(_ref) {
    var {
      width,
      height,
      latitude,
      longitude,
      zoom,
      bearing = DEFAULT_STATE.bearing,
      pitch = DEFAULT_STATE.pitch,
      altitude = DEFAULT_STATE.altitude,
      maxZoom = MAPBOX_LIMITS.maxZoom,
      minZoom = MAPBOX_LIMITS.minZoom,
      maxPitch = MAPBOX_LIMITS.maxPitch,
      minPitch = MAPBOX_LIMITS.minPitch,
      transitionDuration,
      transitionEasing,
      transitionInterpolator,
      transitionInterruption,
      startPanLngLat,
      startZoomLngLat,
      startBearing,
      startPitch,
      startZoom
    } = _ref;

    _defineProperty(this, "_viewportProps", void 0);

    _defineProperty(this, "_interactiveState", void 0);

    assert(Number.isFinite(width), '`width` must be supplied');
    assert(Number.isFinite(height), '`height` must be supplied');
    assert(Number.isFinite(longitude), '`longitude` must be supplied');
    assert(Number.isFinite(latitude), '`latitude` must be supplied');
    assert(Number.isFinite(zoom), '`zoom` must be supplied');
    this._viewportProps = this._applyConstraints({
      width,
      height,
      latitude,
      longitude,
      zoom,
      bearing,
      pitch,
      altitude,
      maxZoom,
      minZoom,
      maxPitch,
      minPitch,
      transitionDuration,
      transitionEasing,
      transitionInterpolator,
      transitionInterruption
    });
    this._interactiveState = {
      startPanLngLat,
      startZoomLngLat,
      startBearing,
      startPitch,
      startZoom
    };
  }

  getViewportProps() {
    return this._viewportProps;
  }

  getInteractiveState() {
    return this._interactiveState;
  }

  panStart(_ref2) {
    var {
      pos
    } = _ref2;
    return this._getUpdatedMapState({
      startPanLngLat: this._unproject(pos)
    });
  }

  pan(_ref3) {
    var {
      pos,
      startPos
    } = _ref3;

    var startPanLngLat = this._interactiveState.startPanLngLat || this._unproject(startPos);

    if (!startPanLngLat) {
      return this;
    }

    var [longitude, latitude] = this._calculateNewLngLat({
      startPanLngLat,
      pos
    });

    return this._getUpdatedMapState({
      longitude,
      latitude
    });
  }

  panEnd() {
    return this._getUpdatedMapState({
      startPanLngLat: null
    });
  }

  rotateStart(_ref4) {
    var {
      pos
    } = _ref4;
    return this._getUpdatedMapState({
      startBearing: this._viewportProps.bearing,
      startPitch: this._viewportProps.pitch
    });
  }

  rotate(_ref5) {
    var {
      deltaScaleX = 0,
      deltaScaleY = 0
    } = _ref5;
    var {
      startBearing,
      startPitch
    } = this._interactiveState;

    if (!Number.isFinite(startBearing) || !Number.isFinite(startPitch)) {
      return this;
    }

    var {
      pitch,
      bearing
    } = this._calculateNewPitchAndBearing({
      deltaScaleX,
      deltaScaleY,
      startBearing: startBearing || 0,
      startPitch: startPitch || 0
    });

    return this._getUpdatedMapState({
      bearing,
      pitch
    });
  }

  rotateEnd() {
    return this._getUpdatedMapState({
      startBearing: null,
      startPitch: null
    });
  }

  zoomStart(_ref6) {
    var {
      pos
    } = _ref6;
    return this._getUpdatedMapState({
      startZoomLngLat: this._unproject(pos),
      startZoom: this._viewportProps.zoom
    });
  }

  zoom(_ref7) {
    var {
      pos,
      startPos,
      scale
    } = _ref7;
    assert(scale > 0, '`scale` must be a positive number');
    var {
      startZoom,
      startZoomLngLat
    } = this._interactiveState;

    if (!Number.isFinite(startZoom)) {
      startZoom = this._viewportProps.zoom;
      startZoomLngLat = this._unproject(startPos) || this._unproject(pos);
    }

    assert(startZoomLngLat, '`startZoomLngLat` prop is required ' + 'for zoom behavior to calculate where to position the map.');

    var zoom = this._calculateNewZoom({
      scale,
      startZoom: startZoom || 0
    });

    var zoomedViewport = new WebMercatorViewport(Object.assign({}, this._viewportProps, {
      zoom
    }));
    var [longitude, latitude] = zoomedViewport.getMapCenterByLngLatPosition({
      lngLat: startZoomLngLat,
      pos
    });
    return this._getUpdatedMapState({
      zoom,
      longitude,
      latitude
    });
  }

  zoomEnd() {
    return this._getUpdatedMapState({
      startZoomLngLat: null,
      startZoom: null
    });
  }

  _getUpdatedMapState(newProps) {
    return new MapState(Object.assign({}, this._viewportProps, this._interactiveState, newProps));
  }

  _applyConstraints(props) {
    var {
      maxZoom,
      minZoom,
      zoom
    } = props;
    props.zoom = clamp(zoom, minZoom, maxZoom);
    var {
      maxPitch,
      minPitch,
      pitch
    } = props;
    props.pitch = clamp(pitch, minPitch, maxPitch);
    Object.assign(props, normalizeViewportProps(props));
    return props;
  }

  _unproject(pos) {
    var viewport = new WebMercatorViewport(this._viewportProps);
    return pos && viewport.unproject(pos);
  }

  _calculateNewLngLat(_ref8) {
    var {
      startPanLngLat,
      pos
    } = _ref8;
    var viewport = new WebMercatorViewport(this._viewportProps);
    return viewport.getMapCenterByLngLatPosition({
      lngLat: startPanLngLat,
      pos
    });
  }

  _calculateNewZoom(_ref9) {
    var {
      scale,
      startZoom
    } = _ref9;
    var {
      maxZoom,
      minZoom
    } = this._viewportProps;
    var zoom = startZoom + Math.log2(scale);
    return clamp(zoom, minZoom, maxZoom);
  }

  _calculateNewPitchAndBearing(_ref10) {
    var {
      deltaScaleX,
      deltaScaleY,
      startBearing,
      startPitch
    } = _ref10;
    deltaScaleY = clamp(deltaScaleY, -1, 1);
    var {
      minPitch,
      maxPitch
    } = this._viewportProps;
    var bearing = startBearing + 180 * deltaScaleX;
    var pitch = startPitch;

    if (deltaScaleY > 0) {
      pitch = startPitch + deltaScaleY * (maxPitch - startPitch);
    } else if (deltaScaleY < 0) {
      pitch = startPitch - deltaScaleY * (minPitch - startPitch);
    }

    return {
      pitch,
      bearing
    };
  }

}
//# sourceMappingURL=map-state.js.map