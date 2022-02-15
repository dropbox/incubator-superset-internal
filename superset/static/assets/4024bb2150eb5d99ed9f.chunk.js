"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[6126],{

/***/ 46597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgNote({
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
    d: "M16 14H8C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14ZM16 10H10C9.44772 10 9 10.4477 9 11C9 11.5523 9.44772 12 10 12H16C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10ZM20 4H17V3C17 2.44772 16.5523 2 16 2C15.4477 2 15 2.44772 15 3V4H13V3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V4H9V3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3V4H4C3.44772 4 3 4.44772 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V5C21 4.44772 20.5523 4 20 4ZM19 19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V6H7V7C7 7.55228 7.44772 8 8 8C8.55228 8 9 7.55228 9 7V6H11V7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7V6H15V7C15 7.55228 15.4477 8 16 8C16.5523 8 17 7.55228 17 7V6H19V19Z",
    fill: "currentColor"
  })));
}

const ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgNote);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);