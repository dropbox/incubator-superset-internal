import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import assert from '../assert';
import TransitionInterpolator from './transition-interpolator';
import { flyToViewport, getFlyToDuration } from 'viewport-mercator-project';
import { isValid, getEndValueByShortestPath } from './transition-utils';
import { lerp } from '../math-utils';
var VIEWPORT_TRANSITION_PROPS = ['longitude', 'latitude', 'zoom', 'bearing', 'pitch'];
var REQUIRED_PROPS = ['latitude', 'longitude', 'zoom', 'width', 'height'];
var LINEARLY_INTERPOLATED_PROPS = ['bearing', 'pitch'];
var DEFAULT_OPTS = {
  speed: 1.2,
  curve: 1.414
};
export default class ViewportFlyToInterpolator extends TransitionInterpolator {
  constructor() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();

    _defineProperty(this, "speed", void 0);

    _defineProperty(this, "propNames", VIEWPORT_TRANSITION_PROPS);

    _defineProperty(this, "props", void 0);

    this.props = Object.assign({}, DEFAULT_OPTS, props);
  }

  initializeProps(startProps, endProps) {
    var startViewportProps = {};
    var endViewportProps = {};

    for (var key of REQUIRED_PROPS) {
      var startValue = startProps[key];
      var endValue = endProps[key];
      assert(isValid(startValue) && isValid(endValue), "".concat(key, " must be supplied for transition"));
      startViewportProps[key] = startValue;
      endViewportProps[key] = getEndValueByShortestPath(key, startValue, endValue);
    }

    for (var _key of LINEARLY_INTERPOLATED_PROPS) {
      var _startValue = startProps[_key] || 0;

      var _endValue = endProps[_key] || 0;

      startViewportProps[_key] = _startValue;
      endViewportProps[_key] = getEndValueByShortestPath(_key, _startValue, _endValue);
    }

    return {
      start: startViewportProps,
      end: endViewportProps
    };
  }

  interpolateProps(startProps, endProps, t) {
    var viewport = flyToViewport(startProps, endProps, t, this.props);

    for (var key of LINEARLY_INTERPOLATED_PROPS) {
      viewport[key] = lerp(startProps[key], endProps[key], t);
    }

    return viewport;
  }

  getDuration(startProps, endProps) {
    var {
      transitionDuration
    } = endProps;

    if (transitionDuration === 'auto') {
      transitionDuration = getFlyToDuration(startProps, endProps, this.props);
    }

    return transitionDuration;
  }

}
//# sourceMappingURL=viewport-fly-to-interpolator.js.map