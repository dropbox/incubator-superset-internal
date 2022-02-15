"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[347],{

/***/ 63295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AggregationLayer)
});

// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/composite-layer.js
var composite_layer = __webpack_require__(78918);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lifecycle/props.js
var lifecycle_props = __webpack_require__(71761);
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/attribute/attribute-manager.js + 8 modules
var attribute_manager = __webpack_require__(83518);
// EXTERNAL MODULE: ./node_modules/@luma.gl/gltools/dist/esm/index.js + 13 modules
var esm = __webpack_require__(39450);
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/prop-utils.js
function filterProps(props, filterKeys) {
  const filteredProps = {};

  for (const key in props) {
    if (!filterKeys.includes(key)) {
      filteredProps[key] = props[key];
    }
  }

  return filteredProps;
}
//# sourceMappingURL=prop-utils.js.map
;// CONCATENATED MODULE: ./node_modules/@deck.gl/aggregation-layers/dist/esm/aggregation-layer.js



class AggregationLayer extends composite_layer/* default */.Z {
  initializeState(dimensions) {
    super.initializeState();
    this.setState({
      ignoreProps: filterProps(this.constructor._propTypes, dimensions.data.props),
      dimensions
    });
  }

  updateState(opts) {
    super.updateState(opts);
    const {
      changeFlags
    } = opts;

    if (changeFlags.extensionsChanged) {
      const shaders = this.getShaders({});

      if (shaders && shaders.defines) {
        shaders.defines.NON_INSTANCED_MODEL = 1;
      }

      this.updateShaders(shaders);
    }

    this._updateAttributes(opts.props);
  }

  updateAttributes(changedAttributes) {
    this.setState({
      changedAttributes
    });
  }

  getAttributes() {
    return this.getAttributeManager().getShaderAttributes();
  }

  getModuleSettings() {
    const {
      viewport,
      mousePosition,
      gl
    } = this.context;
    const moduleSettings = Object.assign(Object.create(this.props), {
      viewport,
      mousePosition,
      pickingActive: 0,
      devicePixelRatio: (0,esm/* cssToDeviceRatio */.w)(gl)
    });
    return moduleSettings;
  }

  updateShaders(shaders) {}

  isAggregationDirty(updateOpts, params = {}) {
    const {
      props,
      oldProps,
      changeFlags
    } = updateOpts;
    const {
      compareAll = false,
      dimension
    } = params;
    const {
      ignoreProps
    } = this.state;
    const {
      props: dataProps,
      accessors = []
    } = dimension;
    const {
      updateTriggersChanged
    } = changeFlags;

    if (changeFlags.dataChanged) {
      return true;
    }

    if (updateTriggersChanged) {
      if (updateTriggersChanged.all) {
        return true;
      }

      for (const accessor of accessors) {
        if (updateTriggersChanged[accessor]) {
          return true;
        }
      }
    }

    if (compareAll) {
      if (changeFlags.extensionsChanged) {
        return true;
      }

      return (0,lifecycle_props/* compareProps */.tg)({
        oldProps,
        newProps: props,
        ignoreProps,
        propTypes: this.constructor._propTypes
      });
    }

    for (const name of dataProps) {
      if (props[name] !== oldProps[name]) {
        return true;
      }
    }

    return false;
  }

  isAttributeChanged(name) {
    const {
      changedAttributes
    } = this.state;

    if (!name) {
      return !isObjectEmpty(changedAttributes);
    }

    return changedAttributes && changedAttributes[name] !== undefined;
  }

  _getAttributeManager() {
    return new attribute_manager/* default */.Z(this.context.gl, {
      id: this.props.id,
      stats: this.context.stats
    });
  }

}

function isObjectEmpty(obj) {
  let isEmpty = true;

  for (const key in obj) {
    isEmpty = false;
    break;
  }

  return isEmpty;
}

AggregationLayer.layerName = 'AggregationLayer';
//# sourceMappingURL=aggregation-layer.js.map

/***/ }),

/***/ 15614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KM": () => (/* binding */ AGGREGATION_OPERATION),
/* harmony export */   "_D": () => (/* binding */ getValueFunc),
/* harmony export */   "q5": () => (/* binding */ wrapGetValueFunc)
/* harmony export */ });
/* unused harmony exports getMean, getSum, getMax, getMin */
const AGGREGATION_OPERATION = {
  SUM: 1,
  MEAN: 2,
  MIN: 3,
  MAX: 4
};

function sumReducer(accu, cur) {
  return accu + cur;
}

function maxReducer(accu, cur) {
  return cur > accu ? cur : accu;
}

function minReducer(accu, cur) {
  return cur < accu ? cur : accu;
}

function getMean(pts, accessor) {
  if (Number.isFinite(accessor)) {
    return pts.length ? accessor : null;
  }

  const filtered = pts.map(accessor).filter(Number.isFinite);
  return filtered.length ? filtered.reduce(sumReducer, 0) / filtered.length : null;
}
function getSum(pts, accessor) {
  if (Number.isFinite(accessor)) {
    return pts.length ? pts.length * accessor : null;
  }

  const filtered = pts.map(accessor).filter(Number.isFinite);
  return filtered.length ? filtered.reduce(sumReducer, 0) : null;
}
function getMax(pts, accessor) {
  if (Number.isFinite(accessor)) {
    return pts.length ? accessor : null;
  }

  const filtered = pts.map(accessor).filter(Number.isFinite);
  return filtered.length ? filtered.reduce(maxReducer, -Infinity) : null;
}
function getMin(pts, accessor) {
  if (Number.isFinite(accessor)) {
    return pts.length ? accessor : null;
  }

  const filtered = pts.map(accessor).filter(Number.isFinite);
  return filtered.length ? filtered.reduce(minReducer, Infinity) : null;
}
function getValueFunc(aggregation, accessor, context) {
  const op = AGGREGATION_OPERATION[aggregation] || AGGREGATION_OPERATION.SUM;
  accessor = wrapAccessor(accessor, context);

  switch (op) {
    case AGGREGATION_OPERATION.MIN:
      return pts => getMin(pts, accessor);

    case AGGREGATION_OPERATION.SUM:
      return pts => getSum(pts, accessor);

    case AGGREGATION_OPERATION.MEAN:
      return pts => getMean(pts, accessor);

    case AGGREGATION_OPERATION.MAX:
      return pts => getMax(pts, accessor);

    default:
      return null;
  }
}

function wrapAccessor(accessor, context = {}) {
  if (Number.isFinite(accessor)) {
    return accessor;
  }

  return pt => {
    context.index = pt.index;
    return accessor(pt.source, context);
  };
}

function wrapGetValueFunc(getValue, context = {}) {
  return pts => {
    context.indices = pts.map(pt => pt.index);
    return getValue(pts.map(pt => pt.source), context);
  };
}
//# sourceMappingURL=aggregation-operation-utils.js.map

/***/ }),

/***/ 98014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BinSorter)
/* harmony export */ });
/* harmony import */ var _scale_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25660);
const defaultGetValue = points => points.length;


const MAX_32_BIT_FLOAT = 3.402823466e38;

const defaultGetPoints = bin => bin.points;

const defaultGetIndex = bin => bin.index;

const ascending = (a, b) => a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;

const defaultProps = {
  getValue: defaultGetValue,
  getPoints: defaultGetPoints,
  getIndex: defaultGetIndex,
  filterData: null
};
class BinSorter {
  constructor(bins = [], props = defaultProps) {
    this.aggregatedBins = this.getAggregatedBins(bins, props);

    this._updateMinMaxValues();

    this.binMap = this.getBinMap();
  }

  getAggregatedBins(bins, props) {
    const {
      getValue = defaultGetValue,
      getPoints = defaultGetPoints,
      getIndex = defaultGetIndex,
      filterData
    } = props;
    const hasFilter = typeof filterData === 'function';
    const binCount = bins.length;
    const aggregatedBins = [];
    let index = 0;

    for (let binIndex = 0; binIndex < binCount; binIndex++) {
      const bin = bins[binIndex];
      const points = getPoints(bin);
      const i = getIndex(bin);
      const filteredPoints = hasFilter ? points.filter(filterData) : points;
      bin.filteredPoints = hasFilter ? filteredPoints : null;
      const value = filteredPoints.length ? getValue(filteredPoints) : null;

      if (value !== null && value !== undefined) {
        aggregatedBins[index] = {
          i: Number.isFinite(i) ? i : binIndex,
          value,
          counts: filteredPoints.length
        };
        index++;
      }
    }

    return aggregatedBins;
  }

  _percentileToIndex(percentileRange) {
    const len = this.sortedBins.length;

    if (len < 2) {
      return [0, 0];
    }

    const [lower, upper] = percentileRange.map(n => (0,_scale_utils__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .uZ)(n, 0, 100));
    const lowerIdx = Math.ceil(lower / 100 * (len - 1));
    const upperIdx = Math.floor(upper / 100 * (len - 1));
    return [lowerIdx, upperIdx];
  }

  getBinMap() {
    const binMap = {};

    for (const bin of this.aggregatedBins) {
      binMap[bin.i] = bin;
    }

    return binMap;
  }

  _updateMinMaxValues() {
    let maxCount = 0;
    let maxValue = 0;
    let minValue = MAX_32_BIT_FLOAT;
    let totalCount = 0;

    for (const x of this.aggregatedBins) {
      maxCount = maxCount > x.counts ? maxCount : x.counts;
      maxValue = maxValue > x.value ? maxValue : x.value;
      minValue = minValue < x.value ? minValue : x.value;
      totalCount += x.counts;
    }

    this.maxCount = maxCount;
    this.maxValue = maxValue;
    this.minValue = minValue;
    this.totalCount = totalCount;
  }

  getValueRange(percentileRange) {
    if (!this.sortedBins) {
      this.sortedBins = this.aggregatedBins.sort((a, b) => ascending(a.value, b.value));
    }

    if (!this.sortedBins.length) {
      return [];
    }

    let lowerIdx = 0;
    let upperIdx = this.sortedBins.length - 1;

    if (Array.isArray(percentileRange)) {
      const idxRange = this._percentileToIndex(percentileRange);

      lowerIdx = idxRange[0];
      upperIdx = idxRange[1];
    }

    return [this.sortedBins[lowerIdx].value, this.sortedBins[upperIdx].value];
  }

  getValueDomainByScale(scale, [lower = 0, upper = 100] = []) {
    if (!this.sortedBins) {
      this.sortedBins = this.aggregatedBins.sort((a, b) => ascending(a.value, b.value));
    }

    if (!this.sortedBins.length) {
      return [];
    }

    const indexEdge = this._percentileToIndex([lower, upper]);

    return this._getScaleDomain(scale, indexEdge);
  }

  _getScaleDomain(scaleType, [lowerIdx, upperIdx]) {
    const bins = this.sortedBins;

    switch (scaleType) {
      case 'quantize':
      case 'linear':
        return [bins[lowerIdx].value, bins[upperIdx].value];

      case 'quantile':
        return (0,_scale_utils__WEBPACK_IMPORTED_MODULE_0__/* .getQuantileDomain */ .N4)(bins.slice(lowerIdx, upperIdx + 1), d => d.value);

      case 'ordinal':
        return (0,_scale_utils__WEBPACK_IMPORTED_MODULE_0__/* .getOrdinalDomain */ .Rr)(bins, d => d.value);

      default:
        return [bins[lowerIdx].value, bins[upperIdx].value];
    }
  }

}
//# sourceMappingURL=bin-sorter.js.map

/***/ }),

/***/ 4516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ defaultColorRange),
/* harmony export */   "P": () => (/* binding */ colorRangeToFlatArray)
/* harmony export */ });
const defaultColorRange = [[255, 255, 178], [254, 217, 118], [254, 178, 76], [253, 141, 60], [240, 59, 32], [189, 0, 38]];
function colorRangeToFlatArray(colorRange, normalize = false, ArrayType = Float32Array) {
  let flatArray;

  if (Number.isFinite(colorRange[0])) {
    flatArray = new ArrayType(colorRange);
  } else {
    flatArray = new ArrayType(colorRange.length * 4);
    let index = 0;

    for (let i = 0; i < colorRange.length; i++) {
      const color = colorRange[i];
      flatArray[index++] = color[0];
      flatArray[index++] = color[1];
      flatArray[index++] = color[2];
      flatArray[index++] = Number.isFinite(color[3]) ? color[3] : 255;
    }
  }

  if (normalize) {
    for (let i = 0; i < flatArray.length; i++) {
      flatArray[i] /= 255;
    }
  }

  return flatArray;
}
//# sourceMappingURL=color-utils.js.map

/***/ }),

/***/ 25660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N4": () => (/* binding */ getQuantileDomain),
/* harmony export */   "Rr": () => (/* binding */ getOrdinalDomain),
/* harmony export */   "uZ": () => (/* binding */ clamp),
/* harmony export */   "ge": () => (/* binding */ getScaleFunctionByScaleType)
/* harmony export */ });
/* unused harmony exports getScale, getQuantizeScale, getLinearScale, getQuantileScale, getOrdinalScale, quantizeScale, linearScale, unique, getLinearDomain, getScaleDomain */
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80744);

function getScale(domain, range, scaleFunction) {
  const scale = scaleFunction;

  scale.domain = () => domain;

  scale.range = () => range;

  return scale;
}
function getQuantizeScale(domain, range) {
  const scaleFunction = value => quantizeScale(domain, range, value);

  return getScale(domain, range, scaleFunction);
}
function getLinearScale(domain, range) {
  const scaleFunction = value => linearScale(domain, range, value);

  return getScale(domain, range, scaleFunction);
}
function getQuantileScale(domain, range) {
  const sortedDomain = domain.sort(ascending);
  let i = 0;
  const n = Math.max(1, range.length);
  const thresholds = new Array(n - 1);

  while (++i < n) {
    thresholds[i - 1] = threshold(sortedDomain, i / n);
  }

  const scaleFunction = value => thresholdsScale(thresholds, range, value);

  scaleFunction.thresholds = () => thresholds;

  return getScale(domain, range, scaleFunction);
}

function ascending(a, b) {
  return a - b;
}

function threshold(domain, fraction) {
  const domainLength = domain.length;

  if (fraction <= 0 || domainLength < 2) {
    return domain[0];
  }

  if (fraction >= 1) {
    return domain[domainLength - 1];
  }

  const domainFraction = (domainLength - 1) * fraction;
  const lowIndex = Math.floor(domainFraction);
  const low = domain[lowIndex];
  const high = domain[lowIndex + 1];
  return low + (high - low) * (domainFraction - lowIndex);
}

function bisectRight(a, x) {
  let lo = 0;
  let hi = a.length;

  while (lo < hi) {
    const mid = lo + hi >>> 1;

    if (ascending(a[mid], x) > 0) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
}

function thresholdsScale(thresholds, range, value) {
  return range[bisectRight(thresholds, value)];
}

function ordinalScale(domain, domainMap, range, value) {
  const key = "".concat(value);
  let d = domainMap.get(key);

  if (d === undefined) {
    d = domain.push(value);
    domainMap.set(key, d);
  }

  return range[(d - 1) % range.length];
}

function getOrdinalScale(domain, range) {
  const domainMap = new Map();
  const uniqueDomain = [];

  for (const d of domain) {
    const key = "".concat(d);

    if (!domainMap.has(key)) {
      domainMap.set(key, uniqueDomain.push(d));
    }
  }

  const scaleFunction = value => ordinalScale(uniqueDomain, domainMap, range, value);

  return getScale(domain, range, scaleFunction);
}
function quantizeScale(domain, range, value) {
  const domainRange = domain[1] - domain[0];

  if (domainRange <= 0) {
    _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"].warn */ .Z.warn('quantizeScale: invalid domain, returning range[0]')();
    return range[0];
  }

  const step = domainRange / range.length;
  const idx = Math.floor((value - domain[0]) / step);
  const clampIdx = Math.max(Math.min(idx, range.length - 1), 0);
  return range[clampIdx];
}
function linearScale(domain, range, value) {
  return (value - domain[0]) / (domain[1] - domain[0]) * (range[1] - range[0]) + range[0];
}

function notNullOrUndefined(d) {
  return d !== undefined && d !== null;
}

function unique(values) {
  const results = [];
  values.forEach(v => {
    if (!results.includes(v) && notNullOrUndefined(v)) {
      results.push(v);
    }
  });
  return results;
}

function getTruthyValues(data, valueAccessor) {
  const values = typeof valueAccessor === 'function' ? data.map(valueAccessor) : data;
  return values.filter(notNullOrUndefined);
}

function getLinearDomain(data, valueAccessor) {
  const sorted = getTruthyValues(data, valueAccessor).sort();
  return sorted.length ? [sorted[0], sorted[sorted.length - 1]] : [0, 0];
}
function getQuantileDomain(data, valueAccessor) {
  return getTruthyValues(data, valueAccessor);
}
function getOrdinalDomain(data, valueAccessor) {
  return unique(getTruthyValues(data, valueAccessor));
}
function getScaleDomain(scaleType, data, valueAccessor) {
  switch (scaleType) {
    case 'quantize':
    case 'linear':
      return getLinearDomain(data, valueAccessor);

    case 'quantile':
      return getQuantileDomain(data, valueAccessor);

    case 'ordinal':
      return getOrdinalDomain(data, valueAccessor);

    default:
      return getLinearDomain(data, valueAccessor);
  }
}
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function getScaleFunctionByScaleType(scaleType) {
  switch (scaleType) {
    case 'quantize':
      return getQuantizeScale;

    case 'linear':
      return getLinearScale;

    case 'quantile':
      return getQuantileScale;

    case 'ordinal':
      return getOrdinalScale;

    default:
      return getQuantizeScale;
  }
}
//# sourceMappingURL=scale-utils.js.map

/***/ }),

/***/ 78918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CompositeLayer)
/* harmony export */ });
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95772);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63803);
/* harmony import */ var _utils_flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61855);



const TRACE_RENDER_LAYERS = 'compositeLayer.renderLayers';
class CompositeLayer extends _layer__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  get isComposite() {
    return true;
  }

  get isLoaded() {
    return super.isLoaded && this.getSubLayers().every(layer => layer.isLoaded);
  }

  getSubLayers() {
    return this.internalState && this.internalState.subLayers || [];
  }

  initializeState() {}

  setState(updateObject) {
    super.setState(updateObject);
    this.setNeedsUpdate();
  }

  getPickingInfo({
    info
  }) {
    const {
      object
    } = info;
    const isDataWrapped = object && object.__source && object.__source.parent && object.__source.parent.id === this.id;

    if (!isDataWrapped) {
      return info;
    }

    info.object = object.__source.object;
    info.index = object.__source.index;
    return info;
  }

  renderLayers() {
    return null;
  }

  filterSubLayer(context) {
    return true;
  }

  shouldRenderSubLayer(id, data) {
    const {
      _subLayerProps: overridingProps
    } = this.props;
    return data && data.length || overridingProps && overridingProps[id];
  }

  getSubLayerClass(id, DefaultLayerClass) {
    const {
      _subLayerProps: overridingProps
    } = this.props;
    return overridingProps && overridingProps[id] && overridingProps[id].type || DefaultLayerClass;
  }

  getSubLayerRow(row, sourceObject, sourceObjectIndex) {
    row.__source = {
      parent: this,
      object: sourceObject,
      index: sourceObjectIndex
    };
    return row;
  }

  getSubLayerAccessor(accessor) {
    if (typeof accessor === 'function') {
      const objectInfo = {
        data: this.props.data,
        target: []
      };
      return (x, i) => {
        if (x && x.__source) {
          objectInfo.index = x.__source.index;
          return accessor(x.__source.object, objectInfo);
        }

        return accessor(x, i);
      };
    }

    return accessor;
  }

  getSubLayerProps(sublayerProps = {}) {
    const {
      opacity,
      pickable,
      visible,
      parameters,
      getPolygonOffset,
      highlightedObjectIndex,
      autoHighlight,
      highlightColor,
      coordinateSystem,
      coordinateOrigin,
      wrapLongitude,
      positionFormat,
      modelMatrix,
      extensions,
      fetch,
      _subLayerProps: overridingProps
    } = this.props;
    const newProps = {
      opacity,
      pickable,
      visible,
      parameters,
      getPolygonOffset,
      highlightedObjectIndex,
      autoHighlight,
      highlightColor,
      coordinateSystem,
      coordinateOrigin,
      wrapLongitude,
      positionFormat,
      modelMatrix,
      extensions,
      fetch
    };
    const overridingSublayerProps = overridingProps && overridingProps[sublayerProps.id];
    const overridingSublayerTriggers = overridingSublayerProps && overridingSublayerProps.updateTriggers;
    const sublayerId = sublayerProps.id || 'sublayer';

    if (overridingSublayerProps) {
      const propTypes = this.constructor._propTypes;
      const subLayerPropTypes = sublayerProps.type ? sublayerProps.type._propTypes : {};

      for (const key in overridingSublayerProps) {
        const propType = subLayerPropTypes[key] || propTypes[key];

        if (propType && propType.type === 'accessor') {
          overridingSublayerProps[key] = this.getSubLayerAccessor(overridingSublayerProps[key]);
        }
      }
    }

    Object.assign(newProps, sublayerProps, overridingSublayerProps);
    newProps.id = "".concat(this.props.id, "-").concat(sublayerId);
    newProps.updateTriggers = {
      all: this.props.updateTriggers.all,
      ...sublayerProps.updateTriggers,
      ...overridingSublayerTriggers
    };

    for (const extension of extensions) {
      const passThroughProps = extension.getSubLayerProps.call(this, extension);

      if (passThroughProps) {
        Object.assign(newProps, passThroughProps, {
          updateTriggers: Object.assign(newProps.updateTriggers, passThroughProps.updateTriggers)
        });
      }
    }

    return newProps;
  }

  _updateAutoHighlight(info) {
    for (const layer of this.getSubLayers()) {
      layer.updateAutoHighlight(info);
    }
  }

  _getAttributeManager() {
    return null;
  }

  _renderLayers() {
    let {
      subLayers
    } = this.internalState;
    const shouldUpdate = !subLayers || this.needsUpdate();

    if (shouldUpdate) {
      subLayers = this.renderLayers();
      subLayers = (0,_utils_flatten__WEBPACK_IMPORTED_MODULE_1__/* .flatten */ .x)(subLayers, Boolean);
      this.internalState.subLayers = subLayers;
    }

    (0,_debug__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(TRACE_RENDER_LAYERS, this, shouldUpdate, subLayers);

    for (const layer of subLayers) {
      layer.parent = this;
    }
  }

}
CompositeLayer.layerName = 'CompositeLayer';
//# sourceMappingURL=composite-layer.js.map

/***/ })

}]);