"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[9938],{

/***/ 79938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventFlow)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _data_ui_event_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9857);
/* harmony import */ var _data_ui_event_flow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11965);


/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




function EventFlow({
  data,
  initialMinEventCount,
  height = 400,
  width = 400
}) {
  if (data) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_2__.App, {
      width: width,
      height: height,
      data: data,
      initialMinEventCount: initialMinEventCount,
      initialShowControls: false
    });
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    style: {
      height,
      width
    }
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.t)('Sorry, there appears to be no data')));
}
EventFlow.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array.isRequired),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  width: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  initialMinEventCount: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired)
};

/***/ })

}]);