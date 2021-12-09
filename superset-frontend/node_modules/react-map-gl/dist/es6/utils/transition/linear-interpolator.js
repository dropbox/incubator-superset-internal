import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import WebMercatorViewport from 'viewport-mercator-project';
import assert from '../assert';
import TransitionInterpolator from './transition-interpolator';
import { isValid, getEndValueByShortestPath } from './transition-utils';
import { lerp } from '../math-utils';
var VIEWPORT_TRANSITION_PROPS = ['longitude', 'latitude', 'zoom', 'bearing', 'pitch'];
export default class LinearInterpolator extends TransitionInterpolator {
  constructor() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();

    _defineProperty(this, "around", void 0);

    if (Array.isArray(opts)) {
      opts = {
        transitionProps: opts
      };
    }

    this.propNames = opts.transitionProps || VIEWPORT_TRANSITION_PROPS;

    if (opts.around) {
      this.around = opts.around;
    }
  }

  initializeProps(startProps, endProps) {
    var startViewportProps = {};
    var endViewportProps = {};

    if (this.around) {
      startViewportProps.around = this.around;
      var aroundLngLat = new WebMercatorViewport(startProps).unproject(this.around);
      Object.assign(endViewportProps, endProps, {
        around: new WebMercatorViewport(endProps).project(aroundLngLat),
        aroundLngLat
      });
    }

    for (var key of this.propNames) {
      var startValue = startProps[key];
      var endValue = endProps[key];
      assert(isValid(startValue) && isValid(endValue), "".concat(key, " must be supplied for transition"));
      startViewportProps[key] = startValue;
      endViewportProps[key] = getEndValueByShortestPath(key, startValue, endValue);
    }

    return {
      start: startViewportProps,
      end: endViewportProps
    };
  }

  interpolateProps(startProps, endProps, t) {
    var viewport = {};

    for (var key of this.propNames) {
      viewport[key] = lerp(startProps[key], endProps[key], t);
    }

    if (endProps.around) {
      var [longitude, latitude] = new WebMercatorViewport(Object.assign({}, endProps, viewport)).getMapCenterByLngLatPosition({
        lngLat: endProps.aroundLngLat,
        pos: lerp(startProps.around, endProps.around, t)
      });
      viewport.longitude = longitude;
      viewport.latitude = latitude;
    }

    return viewport;
  }

}
//# sourceMappingURL=linear-interpolator.js.map