"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[3037],{

/***/ 83265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Polygon),
  "getLayer": () => (/* binding */ getLayer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/composite-layer.js
var composite_layer = __webpack_require__(78918);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/log.js
var log = __webpack_require__(80744);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/iterable-utils.js
var iterable_utils = __webpack_require__(38550);
// EXTERNAL MODULE: ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer.js + 5 modules
var solid_polygon_layer = __webpack_require__(71435);
// EXTERNAL MODULE: ./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer.js + 4 modules
var path_layer = __webpack_require__(62112);
// EXTERNAL MODULE: ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/polygon.js
var solid_polygon_layer_polygon = __webpack_require__(99890);
// EXTERNAL MODULE: ./node_modules/@deck.gl/layers/dist/esm/utils.js
var utils = __webpack_require__(98452);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/layers/dist/esm/polygon-layer/polygon-layer.js





const defaultLineColor = [0, 0, 0, 255];
const defaultFillColor = [0, 0, 0, 255];
const defaultProps = {
  stroked: true,
  filled: true,
  extruded: false,
  elevationScale: 1,
  wireframe: false,
  _normalize: true,
  _windingOrder: 'CW',
  lineWidthUnits: 'meters',
  lineWidthScale: 1,
  lineWidthMinPixels: 0,
  lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
  lineJointRounded: false,
  lineMiterLimit: 4,
  getPolygon: {
    type: 'accessor',
    value: f => f.polygon
  },
  getFillColor: {
    type: 'accessor',
    value: defaultFillColor
  },
  getLineColor: {
    type: 'accessor',
    value: defaultLineColor
  },
  getLineWidth: {
    type: 'accessor',
    value: 1
  },
  getElevation: {
    type: 'accessor',
    value: 1000
  },
  material: true
};
class PolygonLayer extends composite_layer/* default */.Z {
  initializeState() {
    this.state = {
      paths: []
    };

    if (this.props.getLineDashArray) {
      log/* default.removed */.Z.removed('getLineDashArray', 'PathStyleExtension')();
    }
  }

  updateState({
    oldProps,
    props,
    changeFlags
  }) {
    const geometryChanged = changeFlags.dataChanged || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPolygon);

    if (geometryChanged && Array.isArray(changeFlags.dataChanged)) {
      const paths = this.state.paths.slice();
      const pathsDiff = changeFlags.dataChanged.map(dataRange => (0,utils/* replaceInRange */.b)({
        data: paths,
        getIndex: p => p.__source.index,
        dataRange,
        replace: this._getPaths(dataRange)
      }));
      this.setState({
        paths,
        pathsDiff
      });
    } else if (geometryChanged) {
      this.setState({
        paths: this._getPaths(),
        pathsDiff: null
      });
    }
  }

  _getPaths(dataRange = {}) {
    const {
      data,
      getPolygon,
      positionFormat,
      _normalize
    } = this.props;
    const paths = [];
    const positionSize = positionFormat === 'XY' ? 2 : 3;
    const {
      startRow,
      endRow
    } = dataRange;
    const {
      iterable,
      objectInfo
    } = (0,iterable_utils/* createIterable */.jB)(data, startRow, endRow);

    for (const object of iterable) {
      objectInfo.index++;
      let polygon = getPolygon(object, objectInfo);

      if (_normalize) {
        polygon = solid_polygon_layer_polygon/* normalize */.F(polygon, positionSize);
      }

      const {
        holeIndices
      } = polygon;
      const positions = polygon.positions || polygon;

      if (holeIndices) {
        for (let i = 0; i <= holeIndices.length; i++) {
          const path = positions.slice(holeIndices[i - 1] || 0, holeIndices[i] || positions.length);
          paths.push(this.getSubLayerRow({
            path
          }, object, objectInfo.index));
        }
      } else {
        paths.push(this.getSubLayerRow({
          path: positions
        }, object, objectInfo.index));
      }
    }

    return paths;
  }

  renderLayers() {
    const {
      data,
      _dataDiff,
      stroked,
      filled,
      extruded,
      wireframe,
      _normalize,
      _windingOrder,
      elevationScale,
      transitions,
      positionFormat
    } = this.props;
    const {
      lineWidthUnits,
      lineWidthScale,
      lineWidthMinPixels,
      lineWidthMaxPixels,
      lineJointRounded,
      lineMiterLimit,
      lineDashJustified
    } = this.props;
    const {
      getFillColor,
      getLineColor,
      getLineWidth,
      getLineDashArray,
      getElevation,
      getPolygon,
      updateTriggers,
      material
    } = this.props;
    const {
      paths,
      pathsDiff
    } = this.state;
    const FillLayer = this.getSubLayerClass('fill', solid_polygon_layer/* default */.Z);
    const StrokeLayer = this.getSubLayerClass('stroke', path_layer/* default */.Z);
    const polygonLayer = this.shouldRenderSubLayer('fill', paths) && new FillLayer({
      _dataDiff,
      extruded,
      elevationScale,
      filled,
      wireframe,
      _normalize,
      _windingOrder,
      getElevation,
      getFillColor,
      getLineColor: extruded && wireframe ? getLineColor : defaultLineColor,
      material,
      transitions
    }, this.getSubLayerProps({
      id: 'fill',
      updateTriggers: {
        getPolygon: updateTriggers.getPolygon,
        getElevation: updateTriggers.getElevation,
        getFillColor: updateTriggers.getFillColor,
        lineColors: extruded && wireframe,
        getLineColor: updateTriggers.getLineColor
      }
    }), {
      data,
      positionFormat,
      getPolygon
    });
    const polygonLineLayer = !extruded && stroked && this.shouldRenderSubLayer('stroke', paths) && new StrokeLayer({
      _dataDiff: pathsDiff && (() => pathsDiff),
      widthUnits: lineWidthUnits,
      widthScale: lineWidthScale,
      widthMinPixels: lineWidthMinPixels,
      widthMaxPixels: lineWidthMaxPixels,
      jointRounded: lineJointRounded,
      miterLimit: lineMiterLimit,
      dashJustified: lineDashJustified,
      _pathType: 'loop',
      transitions: transitions && {
        getWidth: transitions.getLineWidth,
        getColor: transitions.getLineColor,
        getPath: transitions.getPolygon
      },
      getColor: this.getSubLayerAccessor(getLineColor),
      getWidth: this.getSubLayerAccessor(getLineWidth),
      getDashArray: this.getSubLayerAccessor(getLineDashArray)
    }, this.getSubLayerProps({
      id: 'stroke',
      updateTriggers: {
        getWidth: updateTriggers.getLineWidth,
        getColor: updateTriggers.getLineColor,
        getDashArray: updateTriggers.getLineDashArray
      }
    }), {
      data: paths,
      positionFormat,
      getPath: x => x.path
    });
    return [!extruded && polygonLayer, polygonLineLayer, extruded && polygonLayer];
  }

}
PolygonLayer.layerName = 'PolygonLayer';
PolygonLayer.defaultProps = defaultProps;
//# sourceMappingURL=polygon-layer.js.map
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/AnimatableDeckGLContainer.js + 4 modules
var AnimatableDeckGLContainer = __webpack_require__(89759);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.js + 1 modules
var Legend = __webpack_require__(50600);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/TooltipRow.js
var TooltipRow = __webpack_require__(57981);
// EXTERNAL MODULE: ./node_modules/d3-array/src/index.js + 31 modules
var src = __webpack_require__(4065);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/node_modules/d3-scale/src/threshold.js + 5 modules
var threshold = __webpack_require__(92802);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/SequentialScheme.js
var SequentialScheme = __webpack_require__(90606);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/SequentialSchemeRegistrySingleton.js
var SequentialSchemeRegistrySingleton = __webpack_require__(67542);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/colors.js
var colors = __webpack_require__(15191);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils.js
/* eslint-disable no-negated-condition */

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




const DEFAULT_NUM_BUCKETS = 10;
function getBreakPoints(_ref, features, accessor) {
  let {
    break_points: formDataBreakPoints,
    num_buckets: formDataNumBuckets
  } = _ref;

  if (!features) {
    return [];
  }

  if (formDataBreakPoints === undefined || formDataBreakPoints.length === 0) {
    // compute evenly distributed break points based on number of buckets
    const numBuckets = formDataNumBuckets ? parseInt(formDataNumBuckets, 10) : DEFAULT_NUM_BUCKETS;
    const [minValue, maxValue] = (0,src.extent)(features, accessor);

    if (minValue === undefined) {
      return [];
    }

    const delta = (maxValue - minValue) / numBuckets;
    const precision = delta === 0 ? 0 : Math.max(0, Math.ceil(Math.log10(1 / delta)));
    const extraBucket = maxValue > maxValue.toFixed(precision) ? 1 : 0;
    return new Array(numBuckets + 1 + extraBucket).fill().map((_, i) => (minValue + i * delta).toFixed(precision));
  }

  return formDataBreakPoints.sort((a, b) => parseFloat(a) - parseFloat(b));
}
function getBreakPointColorScaler(_ref2, features, accessor) {
  let {
    break_points: formDataBreakPoints,
    num_buckets: formDataNumBuckets,
    linear_color_scheme: linearColorScheme,
    opacity
  } = _ref2;
  const breakPoints = formDataBreakPoints || formDataNumBuckets ? getBreakPoints({
    break_points: formDataBreakPoints,
    num_buckets: formDataNumBuckets
  }, features, accessor) : null;
  const colorScheme = Array.isArray(linearColorScheme) ? new SequentialScheme/* default */.Z({
    colors: linearColorScheme,
    id: 'custom'
  }) : (0,SequentialSchemeRegistrySingleton/* default */.Z)().get(linearColorScheme);
  let scaler;
  let maskPoint;

  if (breakPoints !== null) {
    // bucket colors into discrete colors
    const n = breakPoints.length - 1;
    const bucketedColors = n > 1 ? colorScheme.getColors(n) : [colorScheme.colors[colorScheme.colors.length - 1]]; // repeat ends

    const first = bucketedColors[0];
    const last = bucketedColors[bucketedColors.length - 1];
    bucketedColors.unshift(first);
    bucketedColors.push(last);
    const points = breakPoints.map(p => parseFloat(p));
    scaler = (0,threshold/* default */.Z)().domain(points).range(bucketedColors);

    maskPoint = value => value > breakPoints[n] || value < breakPoints[0];
  } else {
    // interpolate colors linearly
    scaler = colorScheme.createLinearScale((0,src.extent)(features, accessor));

    maskPoint = () => false;
  }

  return d => {
    const v = accessor(d);
    const c = (0,colors.hexToRGB)(scaler(v));

    if (maskPoint(v)) {
      c[3] = 0;
    } else {
      c[3] = opacity / 100 * 255;
    }

    return c;
  };
}
function getBuckets(fd, features, accessor) {
  const breakPoints = getBreakPoints(fd, features, accessor);
  const colorScaler = getBreakPointColorScaler(fd, features, accessor);
  const buckets = {};
  breakPoints.slice(1).forEach((value, i) => {
    const range = breakPoints[i] + " - " + breakPoints[i + 1];
    const mid = 0.5 * (parseFloat(breakPoints[i]) + parseFloat(breakPoints[i + 1])); // fix polygon doesn't show

    const metricLabel = fd.metric ? fd.metric.label || fd.metric : null;
    buckets[range] = {
      color: colorScaler({
        [metricLabel || fd.metric]: mid
      }),
      enabled: true
    };
  });
  return buckets;
}
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/common.js
var common = __webpack_require__(37032);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/time.js
var time = __webpack_require__(57485);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/sandbox.js + 161 modules
var sandbox = __webpack_require__(88574);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/getPointsFromPolygon.js
/** Format originally used by the Polygon plugin */

/**
 * Format that is geojson standard
 * https://geojson.org/geojson-spec.html
 */
function getPointsFromPolygon(feature) {
  return 'geometry' in feature.polygon ? feature.polygon.geometry.coordinates[0] : feature.polygon;
}
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/fitViewport.js + 1 modules
var fitViewport = __webpack_require__(50980);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Polygon/Polygon.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/sort-prop-types */

/* eslint-disable react/jsx-handler-names */

/* eslint-disable react/no-access-state-in-setstate */

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

/* eslint no-underscore-dangle: ["error", { "allow": ["", "__timestamp"] }] */









 // eslint-disable-next-line import/extensions

 // eslint-disable-next-line import/extensions


const DOUBLE_CLICK_TRESHOLD = 250; // milliseconds

function _getElevation(d, colorScaler) {
  /* in deck.gl 5.3.4 (used in Superset as of 2018-10-24), if a polygon has
   * opacity zero it will make everything behind it have opacity zero,
   * effectively showing the map layer no matter what other polygons are
   * behind it.
   */
  return colorScaler(d)[3] === 0 ? 0 : d.elevation;
}

function setTooltipContent(formData) {
  return o => {
    const metricLabel = formData.metric.label || formData.metric;
    return react.createElement("div", {
      className: "deckgl-tooltip"
    }, o.object.name && react.createElement(TooltipRow/* default */.Z, {
      label: "name: ",
      value: "" + o.object.name
    }), o.object[formData.line_column] && react.createElement(TooltipRow/* default */.Z, {
      label: formData.line_column + ": ",
      value: "" + o.object[formData.line_column]
    }), formData.metric && react.createElement(TooltipRow/* default */.Z, {
      label: metricLabel + ": ",
      value: "" + o.object[metricLabel]
    }));
  };
}

function getLayer(formData, payload, onAddFilter, setTooltip, selected, onSelect, filters) {
  const fd = formData;
  const fc = fd.fill_color_picker;
  const sc = fd.stroke_color_picker;
  let data = [...payload.data.features];

  if (filters != null) {
    filters.forEach(f => {
      data = data.filter(x => f(x));
    });
  }

  if (fd.js_data_mutator) {
    // Applying user defined data mutator if defined
    const jsFnMutator = (0,sandbox/* default */.Z)(fd.js_data_mutator);
    data = jsFnMutator(data);
  }

  const metricLabel = fd.metric ? fd.metric.label || fd.metric : null;

  const accessor = d => d[metricLabel]; // base color for the polygons


  const baseColorScaler = fd.metric === null ? () => [fc.r, fc.g, fc.b, 255 * fc.a] : getBreakPointColorScaler(fd, data, accessor); // when polygons are selected, reduce the opacity of non-selected polygons

  const colorScaler = d => {
    const baseColor = baseColorScaler(d);

    if (selected.length > 0 && !selected.includes(d[fd.line_column])) {
      baseColor[3] /= 2;
    }

    return baseColor;
  };

  const tooltipContentGenerator = fd.line_column && fd.metric && ['json', 'geohash', 'zipcode'].includes(fd.line_type) ? setTooltipContent(fd) : undefined;
  return new PolygonLayer(_extends({
    id: "path-layer-" + fd.slice_id,
    data,
    pickable: true,
    filled: fd.filled,
    stroked: fd.stroked,
    getPolygon: getPointsFromPolygon,
    getFillColor: colorScaler,
    getLineColor: [sc.r, sc.g, sc.b, 255 * sc.a],
    getLineWidth: fd.line_width,
    extruded: fd.extruded,
    getElevation: d => _getElevation(d, colorScaler),
    elevationScale: fd.multiplier,
    fp64: true
  }, (0,common/* commonLayerProps */.N)(fd, setTooltip, tooltipContentGenerator, onSelect)));
}
const propTypes = {
  formData: (prop_types_default()).object.isRequired,
  payload: (prop_types_default()).object.isRequired,
  setControlValue: (prop_types_default()).func.isRequired,
  viewport: (prop_types_default()).object.isRequired,
  onAddFilter: (prop_types_default()).func,
  width: (prop_types_default()).number.isRequired,
  height: (prop_types_default()).number.isRequired
};
const Polygon_defaultProps = {
  onAddFilter() {}

};

class DeckGLPolygon extends react.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "containerRef", react.createRef());

    _defineProperty(this, "setTooltip", tooltip => {
      const {
        current
      } = this.containerRef;

      if (current) {
        current.setTooltip(tooltip);
      }
    });

    this.state = DeckGLPolygon.getDerivedStateFromProps(props);
    this.getLayers = this.getLayers.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onValuesChange = this.onValuesChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const {
      width,
      height,
      formData,
      payload
    } = props; // the state is computed only from the payload; if it hasn't changed, do
    // not recompute state since this would reset selections and/or the play
    // slider position due to changes in form controls

    if (state && payload.form_data === state.formData) {
      return null;
    }

    const features = payload.data.features || [];
    const timestamps = features.map(f => f.__timestamp); // the granularity has to be read from the payload form_data, not the
    // props formData which comes from the instantaneous controls state

    const granularity = payload.form_data.time_grain_sqla || payload.form_data.granularity || 'P1D';
    const {
      start,
      end,
      getStep,
      values,
      disabled
    } = (0,time/* getPlaySliderParams */.g)(timestamps, granularity);
    let {
      viewport
    } = props;

    if (formData.autozoom) {
      viewport = (0,fitViewport/* default */.Z)(viewport, {
        width,
        height,
        points: features.flatMap(getPointsFromPolygon)
      });
    }

    return {
      start,
      end,
      getStep,
      values,
      disabled,
      viewport,
      selected: [],
      lastClick: 0,
      formData: payload.form_data
    };
  }

  onSelect(polygon) {
    const {
      formData,
      onAddFilter
    } = this.props;
    const now = new Date();
    const doubleClick = now - this.state.lastClick <= DOUBLE_CLICK_TRESHOLD; // toggle selected polygons

    const selected = [...this.state.selected];

    if (doubleClick) {
      selected.splice(0, selected.length, polygon);
    } else if (formData.toggle_polygons) {
      const i = selected.indexOf(polygon);

      if (i === -1) {
        selected.push(polygon);
      } else {
        selected.splice(i, 1);
      }
    } else {
      selected.splice(0, 1, polygon);
    }

    this.setState({
      selected,
      lastClick: now
    });

    if (formData.table_filter) {
      onAddFilter(formData.line_column, selected, false, true);
    }
  }

  onValuesChange(values) {
    this.setState({
      values: Array.isArray(values) ? values : [values, values + this.state.getStep(values)]
    });
  }

  getLayers(values) {
    if (this.props.payload.data.features === undefined) {
      return [];
    }

    const filters = []; // time filter

    if (values[0] === values[1] || values[1] === this.end) {
      filters.push(d => d.__timestamp >= values[0] && d.__timestamp <= values[1]);
    } else {
      filters.push(d => d.__timestamp >= values[0] && d.__timestamp < values[1]);
    }

    const layer = getLayer(this.props.formData, this.props.payload, this.props.onAddFilter, this.setTooltip, this.state.selected, this.onSelect, filters);
    return [layer];
  }

  render() {
    const {
      payload,
      formData,
      setControlValue
    } = this.props;
    const {
      start,
      end,
      getStep,
      values,
      disabled,
      viewport
    } = this.state;
    const fd = formData;
    const metricLabel = fd.metric ? fd.metric.label || fd.metric : null;

    const accessor = d => d[metricLabel];

    const buckets = getBuckets(formData, payload.data.features, accessor);
    return react.createElement("div", {
      style: {
        position: 'relative'
      }
    }, react.createElement(AnimatableDeckGLContainer/* default */.Z, {
      ref: this.containerRef,
      aggregation: true,
      getLayers: this.getLayers,
      start: start,
      end: end,
      getStep: getStep,
      values: values,
      disabled: disabled,
      viewport: viewport,
      width: this.props.width,
      height: this.props.height,
      mapboxApiAccessToken: payload.data.mapboxApiKey,
      mapStyle: formData.mapbox_style,
      setControlValue: setControlValue,
      onValuesChange: this.onValuesChange,
      onViewportChange: this.onViewportChange
    }, formData.metric !== null && react.createElement(Legend/* default */.Z, {
      categories: buckets,
      position: formData.legend_position,
      format: formData.legend_format
    })));
  }

}

DeckGLPolygon.propTypes = propTypes;
DeckGLPolygon.defaultProps = Polygon_defaultProps;
/* harmony default export */ const Polygon = (DeckGLPolygon);

/***/ })

}]);