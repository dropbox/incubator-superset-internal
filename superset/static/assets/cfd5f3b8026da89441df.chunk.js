"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[2306],{

/***/ 22306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EchartsPie)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _components_Echart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92882);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11965);
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



function EchartsPie({
  height,
  width,
  echartOptions,
  setDataMask,
  labelMap,
  groupby,
  selectedValues,
  formData
}) {
  const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(values => {
    if (!formData.emitFilter) {
      return;
    }

    const groupbyValues = values.map(value => labelMap[value]);
    setDataMask({
      extraFormData: {
        filters: values.length === 0 ? [] : groupby.map((col, idx) => {
          const val = groupbyValues.map(v => v[idx]);
          if (val === null || val === undefined) return {
            col,
            op: 'IS NULL'
          };
          return {
            col,
            op: 'IN',
            val: val
          };
        })
      },
      filterState: {
        value: groupbyValues.length ? groupbyValues : null,
        selectedValues: values.length ? values : null
      }
    });
  }, [groupby, labelMap, setDataMask, selectedValues]);
  const eventHandlers = {
    click: props => {
      const {
        name
      } = props;
      const values = Object.values(selectedValues);

      if (values.includes(name)) {
        handleChange(values.filter(v => v !== name));
      } else {
        handleChange([name]);
      }
    }
  };
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Echart__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    height: height,
    width: width,
    echartOptions: echartOptions,
    eventHandlers: eventHandlers,
    selectedValues: selectedValues
  });
}

/***/ }),

/***/ 92882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37840);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32577);
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




const Styles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .styled.div */ .iK.div`
  height: ${({
  height
}) => height};
  width: ${({
  width
}) => width};
`;

function Echart({
  width,
  height,
  echartOptions,
  eventHandlers,
  zrEventHandlers,
  selectedValues = {}
}, ref) {
  const divRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const currentSelection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.keys(selectedValues) || [], [selectedValues]);
  const previousSelection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    getEchartInstance: () => chartRef.current
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!divRef.current) return;

    if (!chartRef.current) {
      chartRef.current = (0,echarts__WEBPACK_IMPORTED_MODULE_1__/* .init */ .S1)(divRef.current);
    }

    Object.entries(eventHandlers || {}).forEach(([name, handler]) => {
      var _chartRef$current, _chartRef$current2;

      (_chartRef$current = chartRef.current) == null ? void 0 : _chartRef$current.off(name);
      (_chartRef$current2 = chartRef.current) == null ? void 0 : _chartRef$current2.on(name, handler);
    });
    Object.entries(zrEventHandlers || {}).forEach(([name, handler]) => {
      var _chartRef$current3, _chartRef$current4;

      (_chartRef$current3 = chartRef.current) == null ? void 0 : _chartRef$current3.getZr().off(name);
      (_chartRef$current4 = chartRef.current) == null ? void 0 : _chartRef$current4.getZr().on(name, handler);
    });
    chartRef.current.setOption(echartOptions, true);
  }, [echartOptions, eventHandlers, zrEventHandlers]); // highlighting

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!chartRef.current) return;
    chartRef.current.dispatchAction({
      type: 'downplay',
      dataIndex: previousSelection.current.filter(value => !currentSelection.includes(value))
    });

    if (currentSelection.length) {
      chartRef.current.dispatchAction({
        type: 'highlight',
        dataIndex: currentSelection
      });
    }

    previousSelection.current = currentSelection;
  }, [currentSelection]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (chartRef.current) {
      chartRef.current.resize({
        width,
        height
      });
    }
  }, [width, height]);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(Styles, {
    ref: divRef,
    height: height,
    width: width
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Echart));

/***/ })

}]);