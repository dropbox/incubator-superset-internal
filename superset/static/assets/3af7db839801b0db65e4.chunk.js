"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[5507],{

/***/ 87405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgFieldBoolean({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.0005 4H11.0005V20H12.0005V4ZM15.248 12.4746C15.248 14.8184 16.1611 16.166 17.748 16.166C19.3301 16.166 20.2383 14.8281 20.2383 12.4893C20.2383 10.1553 19.3154 8.78809 17.748 8.78809C16.1709 8.78809 15.248 10.1504 15.248 12.4746ZM5.5791 9.93066V16H6.45801V8.9541H5.58398L3.70898 10.3018V11.2295L5.50098 9.93066H5.5791ZM17.748 15.3994C18.7881 15.3994 19.3545 14.3643 19.3545 12.4746C19.3545 10.6045 18.7783 9.55957 17.748 9.55957C16.7178 9.55957 16.1318 10.6143 16.1318 12.4746C16.1318 14.3594 16.708 15.3994 17.748 15.3994Z",
    fill: "currentColor"
  })));
}

const ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgFieldBoolean);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);