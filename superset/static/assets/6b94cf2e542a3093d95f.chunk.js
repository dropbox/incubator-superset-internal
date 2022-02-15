"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[4441],{

/***/ 34441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EchartsTimeseries)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _components_Echart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92882);
/* harmony import */ var _utils_series__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66978);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11965);
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




const TIMER_DURATION = 300; // @ts-ignore

function EchartsTimeseries({
  formData,
  height,
  width,
  echartOptions,
  groupby,
  labelMap,
  selectedValues,
  setDataMask,
  legendData = []
}) {
  const {
    emitFilter,
    stack
  } = formData;
  const echartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const lastTimeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(Date.now());
  const lastSelectedLegend = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  const clickTimer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const handleDoubleClickChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(name => {
    var _echartRef$current;

    const echartInstance = (_echartRef$current = echartRef.current) == null ? void 0 : _echartRef$current.getEchartInstance();

    if (!name) {
      _utils_series__WEBPACK_IMPORTED_MODULE_1__/* .currentSeries.legend */ .aI.legend = '';
      echartInstance == null ? void 0 : echartInstance.dispatchAction({
        type: 'legendAllSelect'
      });
    } else {
      legendData.forEach(datum => {
        if (datum === name) {
          _utils_series__WEBPACK_IMPORTED_MODULE_1__/* .currentSeries.legend */ .aI.legend = datum;
          echartInstance == null ? void 0 : echartInstance.dispatchAction({
            type: 'legendSelect',
            name: datum
          });
        } else {
          echartInstance == null ? void 0 : echartInstance.dispatchAction({
            type: 'legendUnSelect',
            name: datum
          });
        }
      });
    }
  }, [legendData]);

  const getModelInfo = (target, globalModel) => {
    let el = target;
    let model = null;

    while (el) {
      // eslint-disable-next-line no-underscore-dangle
      const modelInfo = el.__ecComponentInfo;

      if (modelInfo != null) {
        model = globalModel.getComponent(modelInfo.mainType, modelInfo.index);
        break;
      }

      el = el.parent;
    }

    return model;
  };

  const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(values => {
    if (!emitFilter) {
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
        label: groupbyValues.length ? groupbyValues : undefined,
        value: groupbyValues.length ? groupbyValues : null,
        selectedValues: values.length ? values : null
      }
    });
  }, [groupby, labelMap, setDataMask]);
  const eventHandlers = {
    click: props => {
      if (clickTimer.current) {
        clearTimeout(clickTimer.current);
      } // Ensure that double-click events do not trigger single click event. So we put it in the timer.


      clickTimer.current = setTimeout(() => {
        const {
          seriesName: name
        } = props;
        const values = Object.values(selectedValues);

        if (values.includes(name)) {
          handleChange(values.filter(v => v !== name));
        } else {
          handleChange([name]);
        }
      }, TIMER_DURATION);
    },
    mouseout: () => {
      _utils_series__WEBPACK_IMPORTED_MODULE_1__/* .currentSeries.name */ .aI.name = '';
    },
    mouseover: params => {
      _utils_series__WEBPACK_IMPORTED_MODULE_1__/* .currentSeries.name */ .aI.name = params.seriesName;
    },
    legendselectchanged: payload => {
      const currentTime = Date.now(); // TIMER_DURATION is the interval between two legendselectchanged event

      if (currentTime - lastTimeRef.current < TIMER_DURATION && lastSelectedLegend.current === payload.name) {
        // execute dbclick
        handleDoubleClickChange(payload.name);
      } else {
        lastTimeRef.current = currentTime; // remember last selected legend

        lastSelectedLegend.current = payload.name;
      } // if all legend is unselected, we keep all selected


      if (Object.values(payload.selected).every(i => !i)) {
        handleDoubleClickChange();
      }
    }
  };
  const zrEventHandlers = {
    dblclick: params => {
      var _echartRef$current2;

      // clear single click timer
      if (clickTimer.current) {
        clearTimeout(clickTimer.current);
      }

      const pointInPixel = [params.offsetX, params.offsetY];
      const echartInstance = (_echartRef$current2 = echartRef.current) == null ? void 0 : _echartRef$current2.getEchartInstance();

      if (echartInstance != null && echartInstance.containPixel('grid', pointInPixel)) {
        var _params$target;

        // do not trigger if click unstacked chart's blank area
        if (!stack && ((_params$target = params.target) == null ? void 0 : _params$target.type) === 'ec-polygon') return; // @ts-ignore

        const globalModel = echartInstance.getModel();
        const model = getModelInfo(params.target, globalModel);
        const seriesCount = globalModel.getSeriesCount();
        const currentSeriesIndices = globalModel.getCurrentSeriesIndices();

        if (model) {
          const {
            name
          } = model;

          if (seriesCount !== currentSeriesIndices.length) {
            handleDoubleClickChange();
          } else {
            handleDoubleClickChange(name);
          }
        }
      }
    }
  };
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Echart__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    ref: echartRef,
    height: height,
    width: width,
    echartOptions: echartOptions,
    eventHandlers: eventHandlers,
    zrEventHandlers: zrEventHandlers,
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