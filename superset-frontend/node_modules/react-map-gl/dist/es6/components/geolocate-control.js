import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import WebMercatorViewport from 'viewport-mercator-project';
import mapboxgl from '../utils/mapboxgl';
import BaseControl from './base-control';
import Marker from './marker';
import MapState from '../utils/map-state';
import TransitionManager from '../utils/transition-manager';
import { isGeolocationSupported } from '../utils/geolocate-utils';
var LINEAR_TRANSITION_PROPS = Object.assign({}, TransitionManager.defaultProps, {
  transitionDuration: 500
});

var noop = () => {};

var propTypes = Object.assign({}, BaseControl.propTypes, {
  className: PropTypes.string,
  style: PropTypes.object,
  positionOptions: PropTypes.object,
  fitBoundsOptions: PropTypes.object,
  trackUserLocation: PropTypes.bool,
  showUserLocation: PropTypes.bool,
  onViewStateChange: PropTypes.func,
  onViewportChange: PropTypes.func
});
var defaultProps = Object.assign({}, BaseControl.defaultProps, {
  className: '',
  style: {},
  positionOptions: null,
  fitBoundsOptions: null,
  trackUserLocation: false,
  showUserLocation: true
});
export default class GeolocateControl extends BaseControl {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      supportsGeolocation: false,
      markerPosition: null
    });

    _defineProperty(this, "_mapboxGeolocateControl", null);

    _defineProperty(this, "_geolocateButtonRef", createRef());

    _defineProperty(this, "_markerRef", createRef());

    _defineProperty(this, "_setupMapboxGeolocateControl", supportsGeolocation => {
      if (!supportsGeolocation) {
        console.warn('Geolocation support is not available, the GeolocateControl will not be visible.');
        return;
      }

      var controlOptions = {};
      ['positionOptions', 'fitBoundsOptions', 'trackUserLocation', 'showUserLocation'].forEach(prop => {
        if (prop in this.props && this.props[prop] !== null) {
          controlOptions[prop] = this.props[prop];
        }
      });
      this._mapboxGeolocateControl = new mapboxgl.GeolocateControl(controlOptions);
      this._mapboxGeolocateControl._watchState = 'OFF';
      this._mapboxGeolocateControl._geolocateButton = this._geolocateButtonRef.current;
      this._mapboxGeolocateControl._updateMarker = this._updateMarker;
      this._mapboxGeolocateControl._updateCamera = this._updateCamera;
      this._mapboxGeolocateControl._setup = true;
    });

    _defineProperty(this, "_onClickGeolocate", () => {
      return this._mapboxGeolocateControl.trigger();
    });

    _defineProperty(this, "_updateMarker", position => {
      if (position) {
        this.setState({
          markerPosition: position.coords
        });
      }
    });

    _defineProperty(this, "_getBounds", position => {
      var center = new mapboxgl.LngLat(position.coords.longitude, position.coords.latitude);
      var radius = position.coords.accuracy;
      var bounds = center.toBounds(radius);
      return [[bounds._ne.lng, bounds._ne.lat], [bounds._sw.lng, bounds._sw.lat]];
    });

    _defineProperty(this, "_updateCamera", position => {
      var {
        viewport
      } = this._context;

      var bounds = this._getBounds(position);

      var {
        longitude,
        latitude,
        zoom
      } = new WebMercatorViewport(viewport).fitBounds(bounds);
      var newViewState = Object.assign({}, viewport, {
        longitude,
        latitude,
        zoom
      });
      var mapState = new MapState(newViewState);
      var viewState = Object.assign({}, mapState.getViewportProps(), LINEAR_TRANSITION_PROPS);
      var onViewportChange = this.props.onViewportChange || this._context.onViewportChange || noop;
      var onViewStateChange = this.props.onViewStateChange || this._context.onViewStateChange || noop;
      onViewStateChange({
        viewState
      });
      onViewportChange(viewState);
    });

    _defineProperty(this, "_renderButton", (type, label, callback) => {
      return React.createElement("button", {
        key: type,
        className: "mapboxgl-ctrl-icon mapboxgl-ctrl-".concat(type),
        ref: this._geolocateButtonRef,
        type: "button",
        title: label,
        onClick: callback
      });
    });

    _defineProperty(this, "_renderMarker", () => {
      var {
        showUserLocation
      } = this.props;
      var {
        markerPosition
      } = this.state;

      if (!showUserLocation || !markerPosition) {
        return null;
      }

      return React.createElement(Marker, {
        key: "location-maker",
        ref: this._markerRef,
        className: "mapboxgl-user-location-dot",
        longitude: markerPosition.longitude,
        latitude: markerPosition.latitude,
        onContextMenu: e => e.preventDefault(),
        captureDrag: false,
        captureDoubleClick: false
      });
    });
  }

  componentDidMount() {
    isGeolocationSupported().then(result => {
      this.setState({
        supportsGeolocation: result
      });

      this._setupMapboxGeolocateControl(result);
    });
  }

  componentDidUpdate() {
    var markerRef = this._markerRef.current;

    if (this._mapboxGeolocateControl && markerRef) {
      this._mapboxGeolocateControl._dotElement = markerRef._containerRef.current;
    }
  }

  componentWillUnmount() {
    var geolocationWatchID = this._mapboxGeolocateControl._geolocationWatchID;

    if (geolocationWatchID !== undefined) {
      window.navigator.geolocation.clearWatch(geolocationWatchID);
      this._mapboxGeolocateControl._geolocationWatchID = undefined;
    }
  }

  _render() {
    if (!this.state.supportsGeolocation) {
      return null;
    }

    var {
      className,
      style
    } = this.props;
    return React.createElement("div", null, this._renderMarker(), React.createElement("div", {
      key: "geolocate-control",
      className: "mapboxgl-ctrl mapboxgl-ctrl-group ".concat(className),
      ref: this._containerRef,
      style: style,
      onContextMenu: e => e.preventDefault()
    }, this._renderButton('geolocate', 'Geolocate', this._onClickGeolocate)));
  }

}

_defineProperty(GeolocateControl, "propTypes", propTypes);

_defineProperty(GeolocateControl, "defaultProps", defaultProps);
//# sourceMappingURL=geolocate-control.js.map