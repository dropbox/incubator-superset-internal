"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[8463],{

/***/ 18463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMap({
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
    d: "M22.32 5.05L16.32 3.05H16.25C16.2035 3.04532 16.1566 3.04532 16.11 3.05H15.88H15.75H15.68L10 5L4.32 3.05C4.01493 2.94941 3.6801 3.00149 3.42 3.19C3.15781 3.37668 3.00149 3.67814 3 4V18C2.99889 18.4299 3.27269 18.8124 3.68 18.95L9.68 20.95C9.88145 21.0157 10.0986 21.0157 10.3 20.95L16 19.05L21.68 21C21.7862 21.0144 21.8938 21.0144 22 21C22.2091 21.0029 22.4132 20.9361 22.58 20.81C22.8422 20.6233 22.9985 20.3219 23 20V6C23.0011 5.57009 22.7273 5.18757 22.32 5.05ZM9 18.61L5 17.28V5.39L9 6.72V18.61ZM15 17.28L11 18.61V6.72L15 5.39V17.28ZM21 18.61L17 17.28V5.39L21 6.72V18.61Z",
    fill: "currentColor"
  })));
}

const ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgMap);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);