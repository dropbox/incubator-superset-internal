import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { useRef } from 'react';
import { composeRef } from "rc-util/es/ref";
import raf from "rc-util/es/raf";
import Tooltip from '../tooltip';
var SliderTooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var visible = props.visible;
  var innerRef = useRef(null);
  var rafRef = useRef(null);

  function cancelKeepAlign() {
    raf.cancel(rafRef.current);
    rafRef.current = null;
  }

  function keepAlign() {
    rafRef.current = raf(function () {
      innerRef.current.forcePopupAlign();
      rafRef.current = null;
      keepAlign();
    });
  }

  React.useEffect(function () {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }

    return cancelKeepAlign;
  }, [visible]);
  return /*#__PURE__*/React.createElement(Tooltip, _extends({
    ref: composeRef(innerRef, ref)
  }, props));
});
export default SliderTooltip;