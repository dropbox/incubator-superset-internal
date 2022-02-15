(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[4319],{

/***/ 24319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ROTATION": () => (/* binding */ ROTATION),
  "default": () => (/* binding */ chart_WordCloud)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/d3-cloud/index.js
var d3_cloud = __webpack_require__(76929);
var d3_cloud_default = /*#__PURE__*/__webpack_require__.n(d3_cloud);
// EXTERNAL MODULE: ./node_modules/reselect/es/index.js
var es = __webpack_require__(22222);
;// CONCATENATED MODULE: ./node_modules/encodable/esm/typeGuards/ChannelDef.js
function isValueDef(channelDef) {
  return channelDef && 'value' in channelDef;
}
function isNonValueDef(channelDef) {
  return channelDef && !('value' in channelDef);
}
function isFieldDef(channelDef) {
  return channelDef && 'field' in channelDef && !!channelDef.field;
}
function isTypedFieldDef(channelDef) {
  return isFieldDef(channelDef) && 'type' in channelDef && !!channelDef.type;
}
function isScaleFieldDef(channelDef) {
  return isTypedFieldDef(channelDef) && 'scale' in channelDef;
}
function isPositionFieldDef(channelDef) {
  return isTypedFieldDef(channelDef) && 'axis' in channelDef;
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/typeGuards/Base.js
function isArray(maybeArray) {
  return Array.isArray(maybeArray);
}
function isNotArray(maybeArray) {
  return !Array.isArray(maybeArray);
}
function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}
function isEveryElementDefined(array) {
  return array.every(isDefined);
}
;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-array/src/extent.js
/* harmony default export */ function src_extent(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
}

;// CONCATENATED MODULE: ./node_modules/encodable/esm/types/scale/ScaleType.js
// Modified from vega-lite
// because vega-lite uses namespace which has issues with babel and typescript
const ScaleType = {
  // Continuous - Quantitative
  LINEAR: 'linear',
  LOG: 'log',
  POW: 'pow',
  SQRT: 'sqrt',
  SYMLOG: 'symlog',
  // Continuous - Time
  TIME: 'time',
  UTC: 'utc',
  // Discretizing scales
  QUANTILE: 'quantile',
  QUANTIZE: 'quantize',
  THRESHOLD: 'threshold',
  BIN_ORDINAL: 'bin-ordinal',
  // Discrete scales
  ORDINAL: 'ordinal',
  POINT: 'point',
  BAND: 'band'
};
;// CONCATENATED MODULE: ./node_modules/encodable/esm/typeGuards/Channel.js
function isX(channelType) {
  return channelType === 'X' || channelType === 'XBand';
}
function isY(channelType) {
  return channelType === 'Y' || channelType === 'YBand';
}
function isXOrY(channelType) {
  return isX(channelType) || isY(channelType);
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/utils/keys.js
/**
 * This is a stricter version of Object.keys but with better types.
 * See https://github.com/Microsoft/TypeScript/pull/12253#issuecomment-263132208
 */
const keys = Object.keys;
/* harmony default export */ const utils_keys = (keys);
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/dateTimeToTimestamp.js
// Modified from vega-lite version
// and remove unnecessary dependency

/* eslint-disable no-param-reassign */

/* eslint-disable no-negated-condition */

/**
 * Internal Object for defining datetime expressions.
 * This is an expression version of DateTime.
 * If both month and quarter are provided, month has higher precedence.
 * `day` cannot be combined with other date.
 */

function invalidTimeUnit(unitName, value) {
  return "Invalid " + unitName + ": " + String(value) + ".";
}
/*
 * A designated year that starts on Sunday.
 */


const SUNDAY_YEAR = 2006;
const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const SHORT_MONTHS = MONTHS.map(m => m.slice(0, 3));
const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const SHORT_DAYS = DAYS.map(d => d.slice(0, 3));

function isNumber(x) {
  return typeof x === 'number';
}
/**
 * Returns whether the passed in value is a valid number.
 */


function isNumeric(value) {
  if (isNumber(value)) {
    return true;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  return !isNaN(value) && !isNaN(parseFloat(value));
}

function normalizeQuarter(q) {
  if (isNumeric(q)) {
    q = Number(q);
  }

  if (isNumber(q)) {
    if (q > 4) {
      // eslint-disable-next-line no-console
      console.warn(invalidTimeUnit('quarter', q));
    } // We accept 1-based quarter, so need to readjust to 0-based quarter


    return q - 1;
  } // Invalid quarter


  throw new Error(invalidTimeUnit('quarter', q));
}
function normalizeMonth(m) {
  if (isNumeric(m)) {
    m = Number(m);
  }

  if (isNumber(m)) {
    // We accept 1-based month, so need to readjust to 0-based month
    return m - 1;
  }

  const lowerM = m.toLowerCase();
  const monthIndex = MONTHS.indexOf(lowerM);

  if (monthIndex !== -1) {
    return monthIndex; // 0 for january, ...
  }

  const shortM = lowerM.slice(0, 3);
  const shortMonthIndex = SHORT_MONTHS.indexOf(shortM);

  if (shortMonthIndex !== -1) {
    return shortMonthIndex;
  } // Invalid month


  throw new Error(invalidTimeUnit('month', m));
}
function normalizeDay(d) {
  if (isNumeric(d)) {
    d = Number(d);
  }

  if (isNumber(d)) {
    // mod so that this can be both 0-based where 0 = sunday
    // and 1-based where 7=sunday
    return d % 7;
  }

  const lowerD = d.toLowerCase();
  const dayIndex = DAYS.indexOf(lowerD);

  if (dayIndex !== -1) {
    return dayIndex; // 0 for january, ...
  }

  const shortD = lowerD.slice(0, 3);
  const shortDayIndex = SHORT_DAYS.indexOf(shortD);

  if (shortDayIndex !== -1) {
    return shortDayIndex;
  } // Invalid day


  throw new Error(invalidTimeUnit('day', d));
}
/**
 * @param d the date.
 * @param normalize whether to normalize quarter, month, day. This should probably be true if d is a DateTime.
 * @returns array of date time parts [year, month, day, hours, minutes, seconds, milliseconds]
 */

function dateTimeParts(d, normalize) {
  const parts = [];

  if (normalize && d.day !== undefined) {
    if (utils_keys(d).length > 1) {
      d = { ...d
      };
      delete d.day;
    }
  }

  if (d.year !== undefined) {
    parts.push(d.year);
  } else if (d.day !== undefined) {
    // Set year to 2006 for working with day since January 1 2006 is a Sunday
    parts.push(SUNDAY_YEAR);
  } else {
    parts.push(0);
  }

  if (d.month !== undefined) {
    const month = normalize ? normalizeMonth(d.month) : d.month;
    parts.push(month);
  } else if (d.quarter !== undefined) {
    const quarter = normalize ? normalizeQuarter(d.quarter) : d.quarter;
    parts.push(isNumber(quarter) ? quarter * 3 : quarter + "*3");
  } else {
    parts.push(0); // months start at zero in JS
  }

  if (d.date !== undefined) {
    parts.push(d.date);
  } else if (d.day !== undefined) {
    // HACK: Day only works as a standalone unit
    // This is only correct because we always set year to 2006 for day
    const day = normalize ? normalizeDay(d.day) : d.day;
    parts.push(isNumber(day) ? day + 1 : day + "+1");
  } else {
    parts.push(1); // Date starts at 1 in JS
  }

  ['hours', 'minutes', 'seconds', 'milliseconds'].forEach(timeUnit => {
    const unit = d[timeUnit];
    parts.push(typeof unit === 'undefined' ? 0 : unit);
  });
  return parts;
}
/**
 * @param d the date time.
 * @returns the timestamp.
 */

function dateTimeToTimestamp(d) {
  const parts = dateTimeParts(d, true);

  if (d.utc) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Number(new Date(Date.UTC(...parts)));
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  return Number(new Date(...parts));
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/parseDateTime.js

function parseDateTime(dateTime) {
  if (typeof dateTime === 'number' || typeof dateTime === 'string') {
    return new Date(dateTime);
  }

  return new Date(dateTimeToTimestamp(dateTime));
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/utils/inferElementTypeFromUnionOfArrayTypes.js
/**
 * Type workaround for https://github.com/Microsoft/TypeScript/issues/7294#issuecomment-465794460
 * to avoid error "Cannot invoke an expression whose type lacks a call signature"
 * when using array.map
 */
function inferElementTypeFromUnionOfArrayTypes(array) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return array;
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/typeGuards/DateTime.js
// eslint-disable-next-line import/prefer-default-export
function isDateTime(o) {
  return !!o && !(o instanceof Date) && typeof o !== 'string' && typeof o !== 'boolean' && typeof o !== 'number' && ('year' in o && o.year != null || 'quarter' in o && o.quarter != null || 'month' in o && o.month != null || 'date' in o && o.date != null || 'day' in o && o.day != null || 'hours' in o && o.hours != null || 'minutes' in o && o.minutes != null || 'seconds' in o && o.seconds != null || 'milliseconds' in o && o.milliseconds != null);
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/format/fallbackFormatter.js
function fallbackFormatter(v) {
  return "" + v;
}
// EXTERNAL MODULE: ./node_modules/encodable/esm/options/Encodable.js
var Encodable = __webpack_require__(13663);
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/format/createFormatter.js


function createFormatter({
  formatType,
  format,
  formatInLocalTime
}) {
  if (formatType === 'time') {
    const formatter = Encodable/* default.resolveTimeFormat */.Z.resolveTimeFormat({
      format,
      formatInLocalTime
    });
    return value => formatter(value);
  }

  if (formatType === 'number' || typeof format !== 'undefined' && format.length > 0) {
    const formatter = Encodable/* default.resolveNumberFormat */.Z.resolveNumberFormat(format);
    return value => formatter(value);
  }

  return fallbackFormatter;
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/encoders/ChannelEncoderAxis.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class ChannelEncoderAxis {
  constructor(channelEncoder) {
    _defineProperty(this, "channelEncoder", void 0);

    _defineProperty(this, "config", void 0);

    _defineProperty(this, "formatValue", void 0);

    this.channelEncoder = channelEncoder;
    this.config = channelEncoder.definition.axis;
    this.formatValue = createFormatter(this.config);
  }

  getTitle() {
    return this.config.title;
  }

  hasTitle() {
    const {
      title
    } = this.config;
    return title !== null && typeof title !== 'undefined' && title !== '';
  }

  getTickLabels() {
    const {
      tickCount,
      values
    } = this.config;

    if (typeof values !== 'undefined') {
      return inferElementTypeFromUnionOfArrayTypes(values).map(v => this.formatValue(isDateTime(v) ? parseDateTime(v) : v));
    }

    const {
      scale
    } = this.channelEncoder;

    if (scale && 'domain' in scale) {
      const ticks = 'ticks' in scale ? scale.ticks(tickCount) : scale.domain();
      return ticks.map(this.formatValue);
    }

    return [];
  }

}
// EXTERNAL MODULE: ./node_modules/lodash.get/index.js
var lodash_get = __webpack_require__(29208);
var lodash_get_default = /*#__PURE__*/__webpack_require__.n(lodash_get);
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/createGetterFromChannelDef.js


function createGetterFromChannelDef(definition) {
  if (isValueDef(definition)) {
    return () => definition.value;
  }

  if (typeof definition.field !== 'undefined') {
    return x => lodash_get_default()(x, definition.field);
  }

  return () => undefined;
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/utils/isDisabled.js
function isDisabled(config) {
  return config === false || config === null;
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/utils/isEnabled.js

function isEnabled(config) {
  return !isDisabled(config);
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/fillers/expandLabelOverlapStrategy.js

const STRATEGY_FLAT = {
  strategy: 'flat'
};
const STRATEGY_ROTATE = {
  labelAngle: 40,
  strategy: 'rotate'
};
function expandLabelOverlapStrategy(channelType, labelOverlap = 'auto') {
  let output;

  switch (labelOverlap) {
    case 'flat':
      output = STRATEGY_FLAT;
      break;

    case 'rotate':
      output = STRATEGY_ROTATE;
      break;

    case 'auto':
      output = isX(channelType) ? STRATEGY_ROTATE : STRATEGY_FLAT;
      break;

    default:
      output = labelOverlap;
      break;
  }

  return { ...output
  };
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/scaleCategories.js
 // Grouped by domain and range

const continuousToContinuousScaleTypes = [ScaleType.LINEAR, ScaleType.POW, ScaleType.SQRT, ScaleType.SYMLOG, ScaleType.LOG, ScaleType.TIME, ScaleType.UTC];
const continuousToContinuousScaleTypesSet = new Set(continuousToContinuousScaleTypes);
const continuousToDiscreteScaleTypes = [ScaleType.QUANTILE, ScaleType.QUANTIZE, ScaleType.THRESHOLD];
const continuousToDiscreteScaleTypesSet = new Set(continuousToDiscreteScaleTypes); // Grouped by Domain

const continuousDomainScaleTypes = continuousToContinuousScaleTypes.concat(continuousToDiscreteScaleTypes);
const continuousDomainScaleTypesSet = new Set(continuousDomainScaleTypes);
const discreteDomainScaleTypes = [ScaleType.ORDINAL, ScaleType.BIN_ORDINAL, ScaleType.POINT, ScaleType.BAND];
const discreteDomainScaleTypesSet = new Set(discreteDomainScaleTypes); // Three broad categories

const continuousScaleTypes = continuousToContinuousScaleTypes;
const continuousScaleTypesSet = continuousToContinuousScaleTypesSet;
const discreteScaleTypes = [ScaleType.BAND, ScaleType.POINT, ScaleType.ORDINAL];
const discreteScaleTypesSet = new Set(discreteScaleTypes);
const discretizingScaleTypes = [ScaleType.BIN_ORDINAL, ScaleType.QUANTILE, ScaleType.QUANTIZE, ScaleType.THRESHOLD];
const discretizingScaleTypesSet = new Set(discretizingScaleTypes); // Others

const timeScaleTypes = [ScaleType.TIME, ScaleType.UTC];
const scaleCategories_timeScaleTypesSet = new Set(timeScaleTypes);
const allScaleTypes = [ScaleType.LINEAR, ScaleType.LOG, ScaleType.POW, ScaleType.SQRT, ScaleType.SYMLOG, ScaleType.TIME, ScaleType.UTC, ScaleType.QUANTILE, ScaleType.QUANTIZE, ScaleType.THRESHOLD, ScaleType.BIN_ORDINAL, ScaleType.ORDINAL, ScaleType.POINT, ScaleType.BAND];
const allScaleTypesSet = new Set(allScaleTypes);
;// CONCATENATED MODULE: ./node_modules/encodable/esm/fillers/completeAxisConfig.js






function isChannelDefWithAxisSupport(channelType, channelDef) {
  return isTypedFieldDef(channelDef) && isXOrY(channelType);
}

function completeAxisConfig(channelType, channelDef) {
  if (isChannelDefWithAxisSupport(channelType, channelDef) && isEnabled(channelDef.axis)) {
    const axis = channelDef.axis === true || typeof channelDef.axis === 'undefined' ? {} : channelDef.axis;
    const isXChannel = isX(channelType);
    const {
      format = channelDef.format,
      formatType = channelDef.formatType,
      formatInLocalTime = channelDef.formatInLocalTime,
      labelAngle = 0,
      labelFlush,
      labelOverlap,
      labelPadding = 4,
      orient = isXChannel ? 'bottom' : 'left',
      tickCount = 5,
      ticks = true,
      title = channelDef.title,
      titlePadding = 4
    } = axis;
    const output = { ...axis,
      format,
      formatType,
      labelAngle,
      labelFlush: typeof labelFlush === 'undefined' ? channelDef.scale && typeof channelDef.scale.type !== 'undefined' && continuousToContinuousScaleTypesSet.has(channelDef.scale.type) : labelFlush,
      labelOverlap: expandLabelOverlapStrategy(channelType, labelOverlap),
      labelPadding,
      orient,
      tickCount,
      ticks,
      title,
      titlePadding
    };

    if (typeof formatInLocalTime !== 'undefined') {
      output.formatInLocalTime = formatInLocalTime;
    }

    return output;
  }

  return false;
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/fillers/completeFormatConfig.js
function completeFormatConfig(config) {
  const {
    formatType,
    formatInLocalTime,
    format,
    type,
    scaleType
  } = config;
  let resolvedFormatType;

  if (typeof formatType !== 'undefined') {
    resolvedFormatType = formatType;
  } else if (type === 'quantitative') {
    resolvedFormatType = 'number';
  } else if (type === 'temporal' || scaleType === 'time' || scaleType === 'utc') {
    resolvedFormatType = 'time';
  } else if (typeof format !== 'undefined' && format.length > 0) {
    resolvedFormatType = 'number';
  }

  if (resolvedFormatType === 'time') {
    return {
      formatType: 'time',
      formatInLocalTime: formatInLocalTime || typeof formatInLocalTime === 'undefined' && scaleType === 'time',
      format
    };
  }

  return {
    formatType: resolvedFormatType,
    format
  };
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/fillers/completeLegendConfig.js

function completeLegendConfig(channelType, channelDef) {
  if ('legend' in channelDef && channelDef.legend !== undefined) {
    return channelDef.legend;
  }

  return isXOrY(channelType) || channelType === 'Text' ? false : {};
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/fillers/inferScaleType.js

/**
 * Sometimes scale type is not specified but can be inferred
 * from other fields.
 * See https://vega.github.io/vega-lite/docs/scale.html
 * @param channelType type of the channel
 * @param fieldType type of the field
 * @param bin is value binned
 */

function inferScaleType(channelType, fieldType, bin = false) {
  if (fieldType === 'nominal' || fieldType === 'ordinal') {
    switch (channelType) {
      // For positional (x and y) ordinal and ordinal fields,
      // "point" is the default scale type for all marks
      // except bar and rect marks, which use "band" scales.
      // https://vega.github.io/vega-lite/docs/scale.html
      case 'XBand':
      case 'YBand':
        return ScaleType.BAND;

      case 'X':
      case 'Y':
      case 'Numeric':
        return ScaleType.POINT;

      case 'Color':
      case 'Category':
        return ScaleType.ORDINAL;

      default:
    }
  } else if (fieldType === 'quantitative') {
    switch (channelType) {
      case 'XBand':
      case 'YBand':
      case 'X':
      case 'Y':
      case 'Numeric':
        return ScaleType.LINEAR;

      case 'Color':
        return bin ? ScaleType.BIN_ORDINAL : ScaleType.LINEAR;

      default:
    }
  } else if (fieldType === 'temporal') {
    switch (channelType) {
      case 'XBand':
      case 'YBand':
      case 'X':
      case 'Y':
      case 'Numeric':
        return ScaleType.UTC;

      case 'Color':
        return ScaleType.LINEAR;

      default:
    }
  }

  return undefined;
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/isPropertySupportedByScaleType.js


const pointOrBand = [ScaleType.POINT, ScaleType.BAND];
const pointOrBandSet = new Set(pointOrBand);
const exceptPointOrBand = allScaleTypes.filter(type => !pointOrBandSet.has(type));
const exceptPointOrBandSet = new Set(exceptPointOrBand);
const continuousOrPointOrBandSet = new Set(continuousScaleTypes.concat(pointOrBand));
const zeroSet = new Set(continuousDomainScaleTypes); // log scale cannot have zero value

zeroSet.delete(ScaleType.LOG); // zero is not meaningful for time

zeroSet.delete(ScaleType.TIME);
zeroSet.delete(ScaleType.UTC); // threshold requires custom domain so zero does not matter

zeroSet.delete(ScaleType.THRESHOLD); // quantile depends on distribution so zero does not matter

zeroSet.delete(ScaleType.QUANTILE);
const supportedScaleTypes = {
  align: pointOrBandSet,
  base: new Set([ScaleType.LOG]),
  clamp: continuousScaleTypesSet,
  constant: new Set([ScaleType.SYMLOG]),
  domain: allScaleTypesSet,
  exponent: new Set([ScaleType.POW]),
  interpolate: exceptPointOrBandSet,
  nice: new Set(continuousScaleTypes.concat([ScaleType.QUANTIZE, ScaleType.THRESHOLD])),
  padding: continuousOrPointOrBandSet,
  paddingInner: new Set([ScaleType.BAND]),
  paddingOuter: pointOrBandSet,
  range: allScaleTypesSet,
  reverse: allScaleTypesSet,
  round: continuousOrPointOrBandSet,
  scheme: exceptPointOrBandSet,
  type: allScaleTypesSet,
  unknown: new Set([ScaleType.ORDINAL]),
  zero: zeroSet
};
function isPropertySupportedByScaleType(property, scaleType) {
  return supportedScaleTypes[property].has(scaleType);
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/typeGuards/ScaleConfig.js


function isContinuousScaleConfig(config) {
  return continuousScaleTypesSet.has(config.type);
}
function isDiscretizingScaleConfig(config) {
  return discretizingScaleTypesSet.has(config.type);
}
function isDiscreteScaleConfig(config) {
  return discreteScaleTypesSet.has(config.type);
}
function isScaleConfigWithZero(config) {
  return isPropertySupportedByScaleType('zero', config.type);
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/fillers/completeScaleConfig.js





function completeScaleConfig(channelType, channelDef) {
  if (isTypedFieldDef(channelDef) && isEnabled(channelDef.scale)) {
    const {
      scale = {},
      type,
      bin
    } = channelDef;
    const {
      type: scaleType = inferScaleType(channelType, type, bin)
    } = scale;

    if (typeof scaleType === 'undefined') {
      return false;
    } // eslint-disable-next-line @typescript-eslint/consistent-type-assertions


    const filledScale = { ...scale,
      type: scaleType
    };

    if (isContinuousScaleConfig(filledScale)) {
      if (typeof filledScale.nice === 'undefined') {
        filledScale.nice = !scaleCategories_timeScaleTypesSet.has(scaleType);
      }

      if (typeof filledScale.clamp === 'undefined') {
        filledScale.clamp = true;
      }
    }

    if (isScaleConfigWithZero(filledScale) && typeof filledScale.zero === 'undefined') {
      filledScale.zero = true;
    }

    return filledScale;
  }

  return false;
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/fillers/inferFieldType.js

const temporalFieldNames = new Set(['time', 'date', 'datetime', 'timestamp']);
function inferFieldType(channelType, field = '') {
  if (isXOrY(channelType) || channelType === 'Numeric') {
    return temporalFieldNames.has(field.toLowerCase()) ? 'temporal' : 'quantitative';
  }

  return 'nominal';
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/fillers/completeChannelDef.js






function completeChannelDef(channelType, channelDef) {
  var _channelDef$title;

  if (isValueDef(channelDef)) {
    return { ...channelDef,
      axis: false,
      legend: false,
      scale: false,
      title: ''
    };
  } // Fill top-level properties


  const copy = { ...channelDef,
    title: isFieldDef(channelDef) ? (_channelDef$title = channelDef.title) != null ? _channelDef$title : channelDef.field : '',
    type: isTypedFieldDef(channelDef) ? channelDef.type : inferFieldType(channelType, channelDef.field)
  }; // Scale needs the top-level properties to be filled.

  const scale = completeScaleConfig(channelType, copy); // Format needs scale.

  const format = completeFormatConfig({ ...channelDef,
    scaleType: scale ? scale.type : undefined
  });
  const copy2 = { ...copy,
    ...format,
    scale
  }; // These need scale and format

  const axis = completeAxisConfig(channelType, copy2);
  const legend = completeLegendConfig(channelType, copy2);
  return { ...copy2,
    axis,
    legend
  };
}
;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    let r0 = Math.round(start / step), r1 = Math.round(stop / step);
    if (r0 * step < start) ++r0;
    if (r1 * step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) * step;
  } else {
    step = -step;
    let r0 = Math.round(start * step), r1 = Math.round(stop * step);
    if (r0 / step < start) ++r0;
    if (r1 / step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
}

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-array/src/ascending.js
/* harmony default export */ function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-array/src/bisector.js


/* harmony default export */ function bisector(f) {
  let delta = f;
  let compare = f;

  if (f.length === 1) {
    delta = (d, x) => f(d) - x;
    compare = ascendingComparator(f);
  }

  function left(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function right(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) > 0) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }

  function center(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
}

function ascendingComparator(f) {
  return (d, x) => ascending(f(d), x);
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-array/src/number.js
/* harmony default export */ function number(x) {
  return x === null ? NaN : +x;
}

function* number_numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-array/src/bisect.js




const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = bisector(number).center;
/* harmony default export */ const bisect = (bisectRight);

// EXTERNAL MODULE: ./node_modules/d3-color/src/color.js
var src_color = __webpack_require__(16372);
;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ function src_basis(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/basisClosed.js


/* harmony default export */ function basisClosed(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/constant.js
/* harmony default export */ const constant = (x => () => x);

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/color.js


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant(isNaN(a) ? b : a);
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/rgb.js





/* harmony default export */ const rgb = ((function rgbGamma(y) {
  var color = gamma(y);

  function rgb(start, end) {
    var r = color((start = (0,src_color/* rgb */.B8)(start)).r, (end = (0,src_color/* rgb */.B8)(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = (0,src_color/* rgb */.B8)(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(src_basis);
var rgbBasisClosed = rgbSpline(basisClosed);

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/array.js



/* harmony default export */ function array(a, b) {
  return (isNumberArray(b) ? numberArray : genericArray)(a, b);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = value(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/date.js
/* harmony default export */ function date(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/number.js
/* harmony default export */ function src_number(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/object.js


/* harmony default export */ function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = value(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/string.js


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: src_number(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/numberArray.js
/* harmony default export */ function src_numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function numberArray_isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/value.js










/* harmony default export */ function value(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b)
      : (t === "number" ? src_number
      : t === "string" ? ((c = (0,src_color/* default */.ZP)(b)) ? (b = c, rgb) : string)
      : b instanceof src_color/* default */.ZP ? rgb
      : b instanceof Date ? date
      : numberArray_isNumberArray(b) ? src_numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : src_number)(a, b);
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/round.js
/* harmony default export */ function round(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/constant.js
function constants(x) {
  return function() {
    return x;
  };
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/number.js
function number_number(x) {
  return +x;
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/continuous.js





var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constants(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisect(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = value,
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), src_number)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number_number), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = round, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity, identity);
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/init.js
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}

// EXTERNAL MODULE: ./node_modules/d3-format/src/index.js + 15 modules
var src = __webpack_require__(16722);
;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/tickFormat.js



function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = (0,src/* formatSpecifier */.YQ)(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = (0,src/* precisionPrefix */.S5)(step, value))) specifier.precision = precision;
      return (0,src/* formatPrefix */.jH)(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = (0,src/* precisionRound */.F0)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = (0,src/* precisionFixed */.zB)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return (0,src/* format */.WU)(specifier);
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/linear.js





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start
        d[i1] = stop
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear_linear() {
  var scale = continuous();

  scale.copy = function() {
    return copy(scale, linear_linear());
  };

  initRange.apply(scale, arguments);

  return linearish(scale);
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/nice.js
function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/log.js






function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0) for (; i <= j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i <= j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      if (z.length * 2 < n) z = ticks(u, v, n);
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = (0,src/* format */.WU)(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(nice(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  return scale;
}

function log() {
  var scale = loggish(transformer()).domain([1, 10]);

  scale.copy = function() {
    return copy(scale, log()).base(scale.base());
  };

  initRange.apply(scale, arguments);

  return scale;
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/pow.js




function transformPow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(identity, identity),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(identity, identity)
        : exponent === 0.5 ? transform(transformSqrt, transformSquare)
        : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return linearish(scale);
}

function pow() {
  var scale = powish(transformer());

  scale.copy = function() {
    return copy(scale, pow()).exponent(scale.exponent());
  };

  initRange.apply(scale, arguments);

  return scale;
}

function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/duration.js
const durationSecond = 1000;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/interval.js
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = function(date) {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/millisecond.js


var millisecond = newInterval(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return newInterval(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ const src_millisecond = (millisecond);
var milliseconds = millisecond.range;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/second.js



var second = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds());
}, function(date, step) {
  date.setTime(+date + step * durationSecond);
}, function(start, end) {
  return (end - start) / durationSecond;
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ const src_second = (second);
var seconds = second.range;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/minute.js



var minute = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ const src_minute = (minute);
var minutes = minute.range;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/hour.js



var hour = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getHours();
});

/* harmony default export */ const src_hour = (hour);
var hours = hour.range;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/day.js



var day = newInterval(
  date => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  date => date.getDate() - 1
);

/* harmony default export */ const src_day = (day);
var days = day.range;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/week.js



function weekday(i) {
  return newInterval(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/month.js


var month = newInterval(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ const src_month = (month);
var months = month.range;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/year.js


var year = newInterval(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ const src_year = (year);
var years = year.range;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/utcMinute.js



var utcMinute = newInterval(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ const src_utcMinute = (utcMinute);
var utcMinutes = utcMinute.range;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/utcHour.js



var utcHour = newInterval(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ const src_utcHour = (utcHour);
var utcHours = utcHour.range;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/utcDay.js



var utcDay = newInterval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay;
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ const src_utcDay = (utcDay);
var utcDays = utcDay.range;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/utcWeek.js



function utcWeekday(i) {
  return newInterval(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / durationWeek;
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/utcMonth.js


var utcMonth = newInterval(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ const src_utcMonth = (utcMonth);
var utcMonths = utcMonth.range;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/utcYear.js


var utcYear = newInterval(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ const src_utcYear = (utcYear);
var utcYears = utcYear.range;

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-time/src/ticks.js

















function ticker(year, month, week, day, hour, minute) {

  const tickIntervals = [
    [src_second,  1,      durationSecond],
    [src_second,  5,  5 * durationSecond],
    [src_second, 15, 15 * durationSecond],
    [src_second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function ticks(start, stop, count) {
    const reverse = stop < start;
    if (reverse) [start, stop] = [stop, start];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
    return reverse ? ticks.reverse() : ticks;
  }

  function tickInterval(start, stop, count) {
    const target = Math.abs(stop - start) / count;
    const i = bisector(([,, step]) => step).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count));
    if (i === 0) return src_millisecond.every(Math.max(tickStep(start, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }

  return [ticks, tickInterval];
}

const [utcTicks, utcTickInterval] = ticker(src_utcYear, src_utcMonth, utcSunday, src_utcDay, src_utcHour, src_utcMinute);
const [timeTicks, timeTickInterval] = ticker(src_year, src_month, sunday, src_day, src_hour, src_minute);



// EXTERNAL MODULE: ./node_modules/d3-time-format/src/defaultLocale.js
var defaultLocale = __webpack_require__(90317);
;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/time.js






function time_date(t) {
  return new Date(t);
}

function time_number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
  var scale = continuous(),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, time_number)) : domain().map(time_date);
  };

  scale.ticks = function(interval) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };

  scale.copy = function() {
    return copy(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
  };

  return scale;
}

function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, src_year, src_month, sunday, src_day, src_hour, src_minute, src_second, defaultLocale/* timeFormat */.i$).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/utcTime.js





function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, src_utcYear, src_utcMonth, utcSunday, src_utcDay, src_utcHour, src_utcMinute, src_second, defaultLocale/* utcFormat */.g0).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-array/src/quantile.js





function quantile(values, p, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return min(values);
  if (p >= 1) return max(values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = max(quickselect(values, i0).subarray(0, i0 + 1)),
      value1 = min(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}

function quantileSorted(values, p, valueof = number) {
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/quantile.js



function quantile_quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = quantileSorted(domain, i / n);
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : range[bisect(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile_quantile()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(scale, arguments);
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/quantize.js




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x != null && x <= x ? range[bisect(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function() {
    return domain.slice();
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(linearish(scale), arguments);
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/threshold.js



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x != null && x <= x ? range[bisect(domain, x, 0, n)] : unknown;
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(scale, arguments);
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/ordinal.js


const implicit = Symbol("implicit");

function ordinal() {
  var index = new Map(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new Map();
    for (const value of _) {
      const key = value + "";
      if (index.has(key)) continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  initRange.apply(scale, arguments);

  return scale;
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-array/src/range.js
/* harmony default export */ function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/band.js




function band() {
  var scale = ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), [r0, r1])
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return initRange.apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-scale/src/symlog.js




function transformSymlog(c) {
  return function(x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function(x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return linearish(scale);
}

function symlog() {
  var scale = symlogish(transformer());

  scale.copy = function() {
    return copy(scale, symlog()).constant(scale.constant());
  };

  return initRange.apply(scale, arguments);
}

;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/createScaleFromScaleType.js


function createScaleFromScaleType(type) {
  switch (type) {
    case ScaleType.LINEAR:
      return linear_linear();

    case ScaleType.LOG:
      return log();

    case ScaleType.POW:
      return pow();

    case ScaleType.SQRT:
      return sqrt();

    case ScaleType.TIME:
      return time();

    case ScaleType.UTC:
      return utcTime();

    case ScaleType.QUANTILE:
      return quantile_quantile();

    case ScaleType.QUANTIZE:
      return quantize();

    case ScaleType.THRESHOLD:
      return threshold();

    case ScaleType.ORDINAL:
      return ordinal();

    case ScaleType.POINT:
      return point();

    case ScaleType.BAND:
      return band();

    case ScaleType.SYMLOG:
      return symlog();

    case ScaleType.BIN_ORDINAL:
      // TODO: Pending scale.bins implementation
      throw new Error("\"type = " + type + "\" is not supported yet.");

    default:
      return linear_linear();
  }
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/applyAlign.js
function applyAlign(config, scale) {
  if ('align' in config && typeof config.align !== 'undefined' && 'align' in scale) {
    scale.align(config.align);
  }
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/applyBase.js
function applyBase(config, scale) {
  if ('base' in config && typeof config.base !== 'undefined' && 'base' in scale) {
    scale.base(config.base);
  }
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/applyClamp.js
function applyClamp(config, scale) {
  if ('clamp' in config && config.clamp === true && 'clamp' in scale) {
    scale.clamp(config.clamp);
  }
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/applyExponent.js
function applyExponent(config, scale) {
  if ('exponent' in config && typeof config.exponent !== 'undefined' && 'exponent' in scale) {
    scale.exponent(config.exponent);
  }
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/applyNice.js


const localTimeIntervals = {
  day: src_day,
  hour: src_hour,
  minute: src_minute,
  month: src_month,
  second: src_second,
  week: sunday,
  year: src_year
};
const utcIntervals = {
  day: src_utcDay,
  hour: src_utcHour,
  minute: src_utcMinute,
  month: src_utcMonth,
  second: src_second,
  week: utcSunday,
  year: src_utcYear
};
function applyNice(config, scale) {
  if ('nice' in config && typeof config.nice !== 'undefined' && 'nice' in scale) {
    const {
      nice
    } = config;

    if (typeof nice === 'boolean') {
      if (nice) {
        scale.nice();
      }
    } else if (typeof nice === 'number') {
      scale.nice(nice);
    } else {
      const timeScale = scale;
      const {
        type
      } = config;

      if (typeof nice === 'string') {
        timeScale.nice(type === ScaleType.UTC ? utcIntervals[nice] : localTimeIntervals[nice]);
      } else {
        const {
          interval,
          step
        } = nice;
        const parsedInterval = (type === ScaleType.UTC ? utcIntervals[interval] : localTimeIntervals[interval]).every(step);

        if (parsedInterval !== null) {
          timeScale.nice(parsedInterval);
        }
      }
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/typeGuards/Scale.js

function isContinuousScale(scale, scaleType) {
  return scale && continuousScaleTypesSet.has(scaleType);
}
function isDiscretizingScale(scale, scaleType) {
  return scale && discretizingScaleTypesSet.has(scaleType);
}
function isDiscreteScale(scale, scaleType) {
  return scale && discreteScaleTypesSet.has(scaleType);
}
function isTimeScale(scale, scaleType) {
  return scale && timeScaleTypesSet.has(scaleType);
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/applyZero.js

function applyZero(config, scale) {
  if ('zero' in config && config.zero === true && isContinuousScale(scale, config.type)) {
    const domain = scale.domain();
    const [a, b] = domain;
    const isDescending = b < a;
    const [min, max] = isDescending ? [b, a] : [a, b];
    const domainWithZero = [Math.min(0, min), Math.max(0, max)];
    scale.domain(isDescending ? domainWithZero.reverse() : domainWithZero);
  }
}
// EXTERNAL MODULE: ./node_modules/d3-color/src/lab.js
var lab = __webpack_require__(80241);
;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/lab.js



function lab_lab(start, end) {
  var l = nogamma((start = (0,lab/* default */.ZP)(start)).l, (end = (0,lab/* default */.ZP)(end)).l),
      a = nogamma(start.a, end.a),
      b = nogamma(start.b, end.b),
      opacity = nogamma(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/hcl.js



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = (0,lab/* hcl */.Uc)(start)).h, (end = (0,lab/* hcl */.Uc)(end)).h),
        c = nogamma(start.c, end.c),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ const src_hcl = (hcl(hue));
var hclLong = hcl(nogamma);

;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/hsl.js



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = (0,src_color/* hsl */.Ym)(start)).h, (end = (0,src_color/* hsl */.Ym)(end)).h),
        s = nogamma(start.s, end.s),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ const src_hsl = (hsl(hue));
var hslLong = hsl(nogamma);

// EXTERNAL MODULE: ./node_modules/d3-color/src/cubehelix.js
var src_cubehelix = __webpack_require__(18218);
;// CONCATENATED MODULE: ./node_modules/encodable/node_modules/d3-interpolate/src/cubehelix.js



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = (0,src_cubehelix/* default */.Z)(start)).h, (end = (0,src_cubehelix/* default */.Z)(end)).h),
          s = nogamma(start.s, end.s),
          l = nogamma(start.l, end.l),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ const d3_interpolate_src_cubehelix = (cubehelix(hue));
var cubehelixLong = cubehelix(nogamma);

;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/createColorInterpolator.js

const interpolatorMap = {
  lab: lab_lab,
  hcl: src_hcl,
  'hcl-long': hclLong,
  hsl: src_hsl,
  'hsl-long': hslLong,
  cubehelix: d3_interpolate_src_cubehelix,
  'cubehelix-long': cubehelixLong,
  rgb: rgb
};
function createColorInterpolator(interpolate) {
  switch (interpolate) {
    case 'lab':
    case 'hcl':
    case 'hcl-long':
    case 'hsl':
    case 'hsl-long':
    case 'cubehelix':
    case 'cubehelix-long':
    case 'rgb':
      return interpolatorMap[interpolate];

    default:
  }

  const {
    type,
    gamma
  } = interpolate;
  const interpolator = interpolatorMap[type];
  return typeof gamma === 'undefined' ? interpolator : interpolator.gamma(gamma);
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/applyInterpolate.js

function applyInterpolate(config, scale) {
  if ('interpolate' in config && typeof config.interpolate !== 'undefined' && 'interpolate' in scale) {
    scale.interpolate(createColorInterpolator(config.interpolate));
  }
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/applyRound.js

function applyRound(config, scale) {
  if ('round' in config && config.round === true) {
    const roundableScale = scale;

    if ('round' in roundableScale) {
      roundableScale.round(config.round);
    } else {
      roundableScale.interpolate(round);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/domain/parseContinuousDomain.js

/**
 * Convert each element in the array into
 * - Date (for time scales)
 * - number (for other continuous scales)
 * @param domain
 * @param scaleType
 */

function parseContinuousDomain(domain, scaleType) {
  if (scaleCategories_timeScaleTypesSet.has(scaleType)) {
    return domain.filter(d => typeof d !== 'boolean').map(d => typeof d === 'string' || typeof d === 'number' ? new Date(d) : d);
  }

  return domain.map(d => typeof d === 'string' || typeof d === 'boolean' ? Number(d) : d);
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/domain/parseDiscreteDomain.js
/**
 * Discrete domains are converted into string[]
 * when using D3 scales
 * @param domain
 */
function parseDiscreteDomain(domain) {
  return domain.map(d => "" + d);
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/utils/combineCategories.js
/**
 * Combine two arrays into a unique list
 * by keeping the order the fixedCategories
 * and append new categories at the end.
 * @param fixedCategories
 * @param inputCategories
 */
function combineCategories(fixedCategories, inputCategories = []) {
  if (fixedCategories.length === 0) {
    return inputCategories;
  }

  const fixedSet = new Set(fixedCategories);
  return fixedCategories.concat(inputCategories.filter(d => !fixedSet.has(d)));
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/utils/combineContinuousDomains.js

/**
 * Combine two continuous domain and ensure that the output
 * does not go beyond fixedDomain
 * @param bounds
 * @param dataDomain
 */

function combineContinuousDomains(bounds, dataDomain) {
  if (bounds.length > 0 && isEveryElementDefined(bounds)) {
    return bounds;
  }

  if (bounds.length === 2 && dataDomain.length === 2 && bounds.filter(isDefined).length > 0) {
    const [boundMin, boundMax] = bounds;
    const [dataMin, dataMax] = dataDomain;
    let min = dataMin;

    if (isDefined(boundMin)) {
      min = boundMin.valueOf() > dataMin.valueOf() ? boundMin : dataMin;
    }

    let max = dataMax;

    if (isDefined(boundMax)) {
      max = boundMax.valueOf() < dataMax.valueOf() ? boundMax : dataMax;
    }

    return [min, max];
  }

  return dataDomain;
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/utils/removeUndefinedAndNull.js
function removeUndefinedAndNull(array) {
  return array.filter(x => typeof x !== 'undefined' && x !== null);
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/parseDateTimeIn.js


/**
 * Only parse elements that are DateTime to Date.
 * Leave the rest alone.
 * @param array
 */

function parseDateTimeIn(array) {
  return array.map(d => !(d instanceof Date) && isDateTime(d) ? parseDateTime(d) : d);
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/applyDomain.js









function createOrderFunction(reverse) {
  return reverse ? array => array.concat().reverse() : array => array;
}

function isCompleteDomain(domain) {
  return domain.length !== 2 || domain[0] != null && domain[1] != null;
}

function applyDomain(config, scale,
/** domain from dataset */
dataDomain) {
  const {
    reverse,
    type
  } = config;
  const order = createOrderFunction(reverse);

  if (isContinuousScale(scale, type) && isContinuousScaleConfig(config) || isDiscretizingScale(scale, type) && isDiscretizingScaleConfig(config)) {
    // For continuous and discretizing scales
    if (config.domain) {
      // If config.domain is specified
      if (isCompleteDomain(config.domain)) {
        // If the config.domain is completed
        // ignores the dataDomain
        scale.domain(order(parseDateTimeIn(config.domain)));
      } else if (dataDomain) {
        // If it is incompleted, then try to combine
        // with the dataDomain
        scale.domain(order(combineContinuousDomains(parseContinuousDomain(parseDateTimeIn(config.domain), type), parseContinuousDomain(removeUndefinedAndNull(dataDomain), type))));
      }
    } else if (dataDomain) {
      // If no config.domain then just use the dataDomain if any
      scale.domain(order(parseContinuousDomain(removeUndefinedAndNull(dataDomain), type)));
    }
  } else if (isDiscreteScale(scale, type) && isDiscreteScaleConfig(config)) {
    // For discrete scales
    if (config.domain) {
      const fixedDomain = parseDiscreteDomain(parseDateTimeIn(config.domain));
      scale.domain(order(dataDomain ? combineCategories(fixedDomain, parseDiscreteDomain(dataDomain)) : fixedDomain));
    } else if (dataDomain) {
      // If no config.domain then just use the dataDomain if any
      scale.domain(order(parseDiscreteDomain(dataDomain)));
    }
  }
}
// EXTERNAL MODULE: ./node_modules/@encodable/color/esm/scheme/wrappers/wrapColorScheme.js + 5 modules
var wrapColorScheme = __webpack_require__(6765);
;// CONCATENATED MODULE: ./node_modules/encodable/esm/typeGuards/SchemeParams.js
// eslint-disable-next-line import/prefer-default-export
function isSchemeParams(scheme) {
  return Object.prototype.toString.call(scheme) !== '[object String]';
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/applyRange.js




function applyRange(config, scale) {
  const {
    range,
    domain
  } = config;

  if (typeof range === 'undefined') {
    if ('scheme' in config && typeof config.scheme !== 'undefined') {
      const {
        scheme
      } = config;
      let name;
      let count;

      if (isContinuousScaleConfig(config) && domain) {
        count = domain.length;
      }

      let extent;

      if (isSchemeParams(scheme)) {
        name = scheme.name;

        if (scheme.count) {
          count = scheme.count;
        }

        extent = scheme.extent;
      } else {
        name = scheme;
      }

      const schemeObject = Encodable/* default.resolveColorScheme */.Z.resolveColorScheme({
        name,
        type: 'sequential'
      });

      if (typeof schemeObject !== 'undefined' && schemeObject.type === 'sequential') {
        const wrappedScheme = (0,wrapColorScheme/* default */.Z)(schemeObject);
        scale.range(wrappedScheme.getColors(count, extent));
      }
    }
  } else {
    // TODO: add type guard should fix this problem
    // @ts-ignore
    scale.range(range);
  }
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/applyPadding.js
function applyPadding(config, scale) {
  if ('padding' in config && typeof config.padding !== 'undefined' && 'padding' in scale) {
    scale.padding(config.padding);
  }

  if ('paddingInner' in config && typeof config.paddingInner !== 'undefined' && 'paddingInner' in scale) {
    scale.paddingInner(config.paddingInner);
  }

  if ('paddingOuter' in config && typeof config.paddingOuter !== 'undefined' && 'paddingOuter' in scale) {
    scale.paddingOuter(config.paddingOuter);
  }
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/updateScale.js











function updateScale(scale, config) {
  // domain and range apply to all scales
  applyDomain(config, scale);
  applyRange(config, scale); // Sort other properties alphabetically.

  applyAlign(config, scale);
  applyBase(config, scale);
  applyClamp(config, scale);
  applyExponent(config, scale);
  applyInterpolate(config, scale); // Nice depends on domain.

  applyNice(config, scale);
  applyPadding(config, scale);
  applyRound(config, scale); // Zero depends on domain and nice.

  applyZero(config, scale);
  return scale;
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/parsers/scale/createScale.js







function createScale(config) {
  const {
    range
  } = config; // Handle categorical color scales
  // An ordinal scale without specified range
  // is assumed to be a color scale.

  if (config.type === ScaleType.ORDINAL && typeof range === 'undefined') {
    const scheme = 'scheme' in config ? config.scheme : undefined;
    const resolve = Encodable/* default.getCategoricalColorScaleResolver */.Z.getCategoricalColorScaleResolver();
    let colorScale;

    if (typeof scheme === 'undefined') {
      colorScale = resolve({});
    } else if (isSchemeParams(scheme)) {
      colorScale = resolve(scheme);
    } else {
      colorScale = resolve({
        name: scheme
      });
    }

    const castedColorScale = colorScale;
    applyDomain(config, castedColorScale);
    return castedColorScale;
  }

  const scale = createScaleFromScaleType(config.type);
  return updateScale(scale, config);
}

/* harmony default export */ const scale_createScale = (createScale);
;// CONCATENATED MODULE: ./node_modules/encodable/esm/utils/identity.js
function identity_identity(x) {
  return x;
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/typeGuards/CompleteChannelDef.js
function isCompleteValueDef(def) {
  return 'value' in def;
}
function isCompleteFieldDef(def) {
  return 'field' in def;
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/encoders/ChannelEncoder.js
function ChannelEncoder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class ChannelEncoder {
  constructor({
    name,
    channelType,
    definition: originalDefinition
  }) {
    ChannelEncoder_defineProperty(this, "name", void 0);

    ChannelEncoder_defineProperty(this, "channelType", void 0);

    ChannelEncoder_defineProperty(this, "originalDefinition", void 0);

    ChannelEncoder_defineProperty(this, "definition", void 0);

    ChannelEncoder_defineProperty(this, "scale", void 0);

    ChannelEncoder_defineProperty(this, "axis", void 0);

    ChannelEncoder_defineProperty(this, "getValue", void 0);

    ChannelEncoder_defineProperty(this, "encodeFunc", void 0);

    ChannelEncoder_defineProperty(this, "formatValue", void 0);

    ChannelEncoder_defineProperty(this, "encodeValue", (value, otherwise) => {
      if (typeof otherwise !== 'undefined' && (value === null || typeof value === 'undefined')) {
        return otherwise;
      } // eslint-disable-next-line @typescript-eslint/no-explicit-any


      return this.encodeFunc(value);
    });

    ChannelEncoder_defineProperty(this, "encodeDatum", (datum, otherwise) => typeof otherwise === 'undefined' ? this.encodeValue(this.getValueFromDatum(datum)) : this.encodeValue(this.getValueFromDatum(datum), otherwise));

    ChannelEncoder_defineProperty(this, "formatDatum", datum => this.formatValue(this.getValueFromDatum(datum)));

    ChannelEncoder_defineProperty(this, "getValueFromDatum", (datum, otherwise) => {
      const value = this.getValue(datum);
      return otherwise !== undefined && (value === null || value === undefined) ? otherwise : value;
    });

    ChannelEncoder_defineProperty(this, "getDomainFromDataset", data => {
      if (isValueDef(this.definition)) {
        const {
          value
        } = this.definition;
        return [value];
      }

      const {
        type
      } = this.definition;

      if (type === 'nominal' || type === 'ordinal') {
        return Array.from(new Set(data.map(d => this.getValueFromDatum(d))));
      }

      if (type === 'quantitative') {
        // Quantile scale needs all items
        // because it treats domain as a discrete set of sample values
        // for computing the quantiles
        if (this.definition.scale && this.definition.scale.type === 'quantile') {
          return data.map(d => this.getValueFromDatum(d));
        }

        const extent = src_extent(data, d => this.getValueFromDatum(d));
        return typeof extent[0] === 'undefined' ? [0, 1] : extent;
      }

      if (type === 'temporal') {
        const extent = src_extent(data, d => this.getValueFromDatum(d));
        return typeof extent[0] === 'undefined' ? [0, 1] : extent;
      }

      return [];
    });

    this.name = name;
    this.channelType = channelType;
    this.originalDefinition = originalDefinition;
    this.definition = completeChannelDef(this.channelType, originalDefinition);
    this.getValue = createGetterFromChannelDef(this.definition);
    this.formatValue = isFieldDef(this.definition) ? createFormatter(this.definition) : fallbackFormatter;

    if (this.definition.scale) {
      const scale = scale_createScale(this.definition.scale); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      this.encodeFunc = value => scale(value);

      this.scale = scale;
    } else {
      const {
        definition
      } = this;
      this.encodeFunc = isCompleteValueDef(definition) ? () => definition.value : identity_identity;
    }

    if (this.definition.axis) {
      this.axis = new ChannelEncoderAxis(this);
    }
  }

  getDomain() {
    if (this.scale && 'domain' in this.scale) {
      return this.scale.domain();
    }

    return [];
  }

  setDomain(domain) {
    if (this.definition.scale !== false && this.scale && !this.hasCategoricalColorScale() && 'domain' in this.scale) {
      const config = this.definition.scale;
      applyDomain(config, this.scale, domain);
      applyRange(config, this.scale);
      applyZero(config, this.scale);
      applyNice(config, this.scale);
    }

    return this;
  }

  setDomainFromDataset(data) {
    return this.scale && 'domain' in this.scale ? this.setDomain(this.getDomainFromDataset(data)) : this;
  }

  getTitle() {
    return this.definition.title;
  }

  isGroupBy() {
    if (isTypedFieldDef(this.definition)) {
      const {
        type
      } = this.definition;
      return this.channelType === 'Category' || this.channelType === 'Text' || this.channelType === 'Color' && (type === 'nominal' || type === 'ordinal') || isXOrY(this.channelType) && (type === 'nominal' || type === 'ordinal');
    }

    return false;
  }

  isX() {
    return isX(this.channelType);
  }

  isXOrY() {
    return isXOrY(this.channelType);
  }

  isY() {
    return isY(this.channelType);
  }

  hasCategoricalColorScale() {
    const config = this.definition.scale; // Scale type is ordinal with not given range
    // (may have optional scheme)
    // will become a categorical scale
    // of named color scheme.
    // A color scale from named color scheme may be shared among multiple components
    // in the same namespace by default, so changing its domain affect all components.
    // (Sounds like a bad idea.)
    // This function is currently only being used to check
    // whether to apply domain from dataset or not.
    // An ordinal scale with user-specified color scheme as range array
    // will return false from this function and be excluded from it.

    return this.scale && config && config.type === ScaleType.ORDINAL && typeof config.range === 'undefined';
  }

  hasLegend() {
    return this.definition.legend !== false;
  }

  hasValueDefinition() {
    return isCompleteValueDef(this.definition);
  }

  hasFieldDefinition() {
    return isCompleteFieldDef(this.definition);
  }

}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/encoders/Encoder.js
function Encoder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Encoder {
  constructor({
    channelTypes,
    encoding
  }) {
    Encoder_defineProperty(this, "encoding", void 0);

    Encoder_defineProperty(this, "channelTypes", void 0);

    Encoder_defineProperty(this, "channels", void 0);

    Encoder_defineProperty(this, "legends", void 0);

    this.channelTypes = channelTypes;
    this.encoding = encoding;
    const channelNames = this.getChannelNames(); // Create channel encoders

    const channels = {};
    channelNames.forEach(name => {
      const channelEncoding = encoding[name];

      if (Array.isArray(channelEncoding)) {
        const definitions = channelEncoding;
        channels[name] = definitions.map((definition, i) => new ChannelEncoder({
          channelType: channelTypes[name],
          definition,
          name: name + "[" + i + "]"
        }));
      } else {
        const definition = channelEncoding;
        channels[name] = new ChannelEncoder({
          channelType: channelTypes[name],
          definition,
          name: name
        });
      }
    });
    this.channels = channels; // Group the channels that use the same field together
    // so they can share the same legend.

    this.legends = {};
    channelNames.map(name => this.channels[name]).forEach(c => {
      if (isNotArray(c) && c.hasLegend() && isTypedFieldDef(c.definition)) {
        const {
          field
        } = c.definition;
        const channelEncoder = c;

        if (this.legends[field]) {
          this.legends[field].push(channelEncoder);
        } else {
          this.legends[field] = [channelEncoder];
        }
      }
    });
  }

  getChannelNames() {
    return Object.keys(this.channelTypes);
  }

  getChannelEncoders() {
    return this.getChannelNames().flatMap(name => this.channels[name]);
  }

  getGroupBys() {
    const fields = this.getChannelEncoders().filter(c => c.isGroupBy()).map(c => c.definition.field);
    return Array.from(new Set(fields));
  }

  createLegendItemsFactory(field) {
    const channelEncoders = this.getChannelEncoders().filter(e => isNotArray(e) && isValueDef(e.definition)).flat().concat(this.legends[field]);
    return domain => domain.map(input => ({
      input,
      output: channelEncoders.reduce((prev, curr) => {
        const map = prev;
        map[curr.name] = curr.encodeValue(input);
        return map;
      }, {})
    }));
  }

  getLegendInformation(data = []) {
    return Object.keys(this.legends) // for each field that was encoded
    .map(field => {
      // get all the channels that use this field
      const channelEncoders = this.legends[field];
      const firstEncoder = channelEncoders[0];
      const definition = firstEncoder.definition;
      const createLegendItems = this.createLegendItemsFactory(field);

      if (definition.type === 'nominal') {
        return {
          channelEncoders,
          createLegendItems,
          field,
          items: createLegendItems(firstEncoder.getDomainFromDataset(data)),
          type: definition.type
        };
      }

      return {
        channelEncoders,
        createLegendItems,
        field,
        type: definition.type
      };
    });
  }

  setDomainFromDataset(data) {
    this.getChannelEncoders().forEach(channelEncoder => {
      channelEncoder.setDomainFromDataset(data);
    });
    return this;
  }

  hasLegend() {
    return Object.keys(this.legends).length > 0;
  }

}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/utils/mergeEncoding.js
function mergeEncoding(defaultEncoding, encoding) {
  return { ...defaultEncoding,
    ...encoding
  };
}
;// CONCATENATED MODULE: ./node_modules/encodable/esm/encoders/createEncoderFactory.js



function createEncoderFactory(params) {
  const {
    channelTypes
  } = params;
  const completeEncoding = 'defaultEncoding' in params ? encoding => mergeEncoding(params.defaultEncoding, encoding) : params.completeEncoding;

  const create = (encoding = {}) => new Encoder({
    channelTypes,
    encoding: completeEncoding(encoding)
  });

  return {
    channelTypes,
    create,
    createSelector: () => (0,es/* createSelector */.P1)(encoding => encoding, create),
    DEFAULT_ENCODING: completeEncoding({})
  };
}
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/random.js
var random = __webpack_require__(81335);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js + 2 modules
var emotion_element_99289b21_browser_esm = __webpack_require__(68135);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/plugin-chart-word-cloud/esm/chart/WordCloud.js


/*
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





const ROTATION = {
  flat: () => 0,
  // this calculates a random rotation between -90 and 90 degrees.
  random: () => Math.floor((0,random/* seedRandom */.b)() * 6 - 3) * 30,
  square: () => Math.floor((0,random/* seedRandom */.b)() * 2) * 90
};
const defaultProps = {
  encoding: {},
  rotation: 'flat'
};
const SCALE_FACTOR_STEP = 0.5;
const MAX_SCALE_FACTOR = 3; // Percentage of top results that will always be displayed.
// Needed to avoid clutter when shrinking a chart with many records.

const TOP_RESULTS_PERCENTAGE = 0.1;

class WordCloud extends react.PureComponent {
  // Cannot name it isMounted because of conflict
  // with React's component function name
  constructor(props) {
    super(props);
    this.isComponentMounted = false;
    this.wordCloudEncoderFactory = createEncoderFactory({
      channelTypes: {
        color: 'Color',
        fontFamily: 'Category',
        fontSize: 'Numeric',
        fontWeight: 'Category',
        text: 'Text'
      },
      defaultEncoding: {
        color: {
          value: 'black'
        },
        fontFamily: {
          value: this.props.theme.typography.families.sansSerif
        },
        fontSize: {
          value: 20
        },
        fontWeight: {
          value: 'bold'
        },
        text: {
          value: ''
        }
      }
    });
    this.createEncoder = this.wordCloudEncoderFactory.createSelector();
    this.state = {
      words: [],
      scaleFactor: 1
    };
    this.setWords = this.setWords.bind(this);
  }

  componentDidMount() {
    this.isComponentMounted = true;
    this.update();
  }

  componentDidUpdate(prevProps) {
    const {
      data,
      encoding,
      width,
      height,
      rotation
    } = this.props;

    if (prevProps.data !== data || prevProps.encoding !== encoding || prevProps.width !== width || prevProps.height !== height || prevProps.rotation !== rotation) {
      this.update();
    }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  setWords(words) {
    if (this.isComponentMounted) {
      this.setState({
        words
      });
    }
  }

  update() {
    const {
      data,
      encoding
    } = this.props;
    const encoder = this.createEncoder(encoding);
    encoder.setDomainFromDataset(data);
    const sortedData = [...data].sort((a, b) => encoder.channels.fontSize.encodeDatum(b, 0) - encoder.channels.fontSize.encodeDatum(a, 0));
    const topResultsCount = Math.max(sortedData.length * TOP_RESULTS_PERCENTAGE, 10);
    const topResults = sortedData.slice(0, topResultsCount); // Ensure top results are always included in the final word cloud by scaling chart down if needed

    this.generateCloud(encoder, 1, words => topResults.every(d => words.find(({
      text
    }) => encoder.channels.text.getValueFromDatum(d) === text)));
  }

  generateCloud(encoder, scaleFactor, isValid) {
    const {
      data,
      width,
      height,
      rotation
    } = this.props;
    d3_cloud_default()().size([width * scaleFactor, height * scaleFactor]) // clone the data because cloudLayout mutates input
    .words(data.map(d => ({ ...d
    }))).padding(5).rotate(ROTATION[rotation] || ROTATION.flat).text(d => encoder.channels.text.getValueFromDatum(d)).font(d => encoder.channels.fontFamily.encodeDatum(d, this.props.theme.typography.families.sansSerif)).fontWeight(d => encoder.channels.fontWeight.encodeDatum(d, 'normal')).fontSize(d => encoder.channels.fontSize.encodeDatum(d, 0)).on('end', words => {
      if (isValid(words) || scaleFactor > MAX_SCALE_FACTOR) {
        if (this.isComponentMounted) {
          this.setState({
            words,
            scaleFactor
          });
        }
      } else {
        this.generateCloud(encoder, scaleFactor + SCALE_FACTOR_STEP, isValid);
      }
    }).start();
  }

  render() {
    const {
      scaleFactor
    } = this.state;
    const {
      width,
      height,
      encoding
    } = this.props;
    const {
      words
    } = this.state;
    const encoder = this.createEncoder(encoding);
    encoder.channels.color.setDomainFromDataset(words);
    const viewBoxWidth = width * scaleFactor;
    const viewBoxHeight = height * scaleFactor;
    return (0,emotion_react_browser_esm.jsx)("svg", {
      width: width,
      height: height,
      viewBox: `-${viewBoxWidth / 2} -${viewBoxHeight / 2} ${viewBoxWidth} ${viewBoxHeight}`
    }, (0,emotion_react_browser_esm.jsx)("g", null, words.map(w => (0,emotion_react_browser_esm.jsx)("text", {
      key: w.text,
      fontSize: `${w.size}px`,
      fontWeight: w.weight,
      fontFamily: w.font,
      fill: encoder.channels.color.encodeDatum(w, ''),
      textAnchor: "middle",
      transform: `translate(${w.x}, ${w.y}) rotate(${w.rotate})`
    }, w.text))));
  }

}

WordCloud.propTypes = {
  rotation: (prop_types_default()).any,
  data: (prop_types_default()).array.isRequired,
  height: (prop_types_default()).number.isRequired,
  width: (prop_types_default()).number.isRequired
};
WordCloud.defaultProps = defaultProps;
/* harmony default export */ const chart_WordCloud = ((0,emotion_element_99289b21_browser_esm.b)(WordCloud));

/***/ }),

/***/ 76929:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Word cloud layout by Jason Davies, https://www.jasondavies.com/wordcloud/
// Algorithm due to Jonathan Feinberg, http://static.mrfeinberg.com/bv_ch03.pdf

var dispatch = __webpack_require__(74594)/* .dispatch */ .W;

var cloudRadians = Math.PI / 180,
    cw = 1 << 11 >> 5,
    ch = 1 << 11;

module.exports = function() {
  var size = [256, 256],
      text = cloudText,
      font = cloudFont,
      fontSize = cloudFontSize,
      fontStyle = cloudFontNormal,
      fontWeight = cloudFontNormal,
      rotate = cloudRotate,
      padding = cloudPadding,
      spiral = archimedeanSpiral,
      words = [],
      timeInterval = Infinity,
      event = dispatch("word", "end"),
      timer = null,
      random = Math.random,
      cloud = {},
      canvas = cloudCanvas;

  cloud.canvas = function(_) {
    return arguments.length ? (canvas = functor(_), cloud) : canvas;
  };

  cloud.start = function() {
    var contextAndRatio = getContext(canvas()),
        board = zeroArray((size[0] >> 5) * size[1]),
        bounds = null,
        n = words.length,
        i = -1,
        tags = [],
        data = words.map(function(d, i) {
          d.text = text.call(this, d, i);
          d.font = font.call(this, d, i);
          d.style = fontStyle.call(this, d, i);
          d.weight = fontWeight.call(this, d, i);
          d.rotate = rotate.call(this, d, i);
          d.size = ~~fontSize.call(this, d, i);
          d.padding = padding.call(this, d, i);
          return d;
        }).sort(function(a, b) { return b.size - a.size; });

    if (timer) clearInterval(timer);
    timer = setInterval(step, 0);
    step();

    return cloud;

    function step() {
      var start = Date.now();
      while (Date.now() - start < timeInterval && ++i < n && timer) {
        var d = data[i];
        d.x = (size[0] * (random() + .5)) >> 1;
        d.y = (size[1] * (random() + .5)) >> 1;
        cloudSprite(contextAndRatio, d, data, i);
        if (d.hasText && place(board, d, bounds)) {
          tags.push(d);
          event.call("word", cloud, d);
          if (bounds) cloudBounds(bounds, d);
          else bounds = [{x: d.x + d.x0, y: d.y + d.y0}, {x: d.x + d.x1, y: d.y + d.y1}];
          // Temporary hack
          d.x -= size[0] >> 1;
          d.y -= size[1] >> 1;
        }
      }
      if (i >= n) {
        cloud.stop();
        event.call("end", cloud, tags, bounds);
      }
    }
  }

  cloud.stop = function() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    return cloud;
  };

  function getContext(canvas) {
    canvas.width = canvas.height = 1;
    var ratio = Math.sqrt(canvas.getContext("2d").getImageData(0, 0, 1, 1).data.length >> 2);
    canvas.width = (cw << 5) / ratio;
    canvas.height = ch / ratio;

    var context = canvas.getContext("2d");
    context.fillStyle = context.strokeStyle = "red";
    context.textAlign = "center";

    return {context: context, ratio: ratio};
  }

  function place(board, tag, bounds) {
    var perimeter = [{x: 0, y: 0}, {x: size[0], y: size[1]}],
        startX = tag.x,
        startY = tag.y,
        maxDelta = Math.sqrt(size[0] * size[0] + size[1] * size[1]),
        s = spiral(size),
        dt = random() < .5 ? 1 : -1,
        t = -dt,
        dxdy,
        dx,
        dy;

    while (dxdy = s(t += dt)) {
      dx = ~~dxdy[0];
      dy = ~~dxdy[1];

      if (Math.min(Math.abs(dx), Math.abs(dy)) >= maxDelta) break;

      tag.x = startX + dx;
      tag.y = startY + dy;

      if (tag.x + tag.x0 < 0 || tag.y + tag.y0 < 0 ||
          tag.x + tag.x1 > size[0] || tag.y + tag.y1 > size[1]) continue;
      // TODO only check for collisions within current bounds.
      if (!bounds || !cloudCollide(tag, board, size[0])) {
        if (!bounds || collideRects(tag, bounds)) {
          var sprite = tag.sprite,
              w = tag.width >> 5,
              sw = size[0] >> 5,
              lx = tag.x - (w << 4),
              sx = lx & 0x7f,
              msx = 32 - sx,
              h = tag.y1 - tag.y0,
              x = (tag.y + tag.y0) * sw + (lx >> 5),
              last;
          for (var j = 0; j < h; j++) {
            last = 0;
            for (var i = 0; i <= w; i++) {
              board[x + i] |= (last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0);
            }
            x += sw;
          }
          delete tag.sprite;
          return true;
        }
      }
    }
    return false;
  }

  cloud.timeInterval = function(_) {
    return arguments.length ? (timeInterval = _ == null ? Infinity : _, cloud) : timeInterval;
  };

  cloud.words = function(_) {
    return arguments.length ? (words = _, cloud) : words;
  };

  cloud.size = function(_) {
    return arguments.length ? (size = [+_[0], +_[1]], cloud) : size;
  };

  cloud.font = function(_) {
    return arguments.length ? (font = functor(_), cloud) : font;
  };

  cloud.fontStyle = function(_) {
    return arguments.length ? (fontStyle = functor(_), cloud) : fontStyle;
  };

  cloud.fontWeight = function(_) {
    return arguments.length ? (fontWeight = functor(_), cloud) : fontWeight;
  };

  cloud.rotate = function(_) {
    return arguments.length ? (rotate = functor(_), cloud) : rotate;
  };

  cloud.text = function(_) {
    return arguments.length ? (text = functor(_), cloud) : text;
  };

  cloud.spiral = function(_) {
    return arguments.length ? (spiral = spirals[_] || _, cloud) : spiral;
  };

  cloud.fontSize = function(_) {
    return arguments.length ? (fontSize = functor(_), cloud) : fontSize;
  };

  cloud.padding = function(_) {
    return arguments.length ? (padding = functor(_), cloud) : padding;
  };

  cloud.random = function(_) {
    return arguments.length ? (random = _, cloud) : random;
  };

  cloud.on = function() {
    var value = event.on.apply(event, arguments);
    return value === event ? cloud : value;
  };

  return cloud;
};

function cloudText(d) {
  return d.text;
}

function cloudFont() {
  return "serif";
}

function cloudFontNormal() {
  return "normal";
}

function cloudFontSize(d) {
  return Math.sqrt(d.value);
}

function cloudRotate() {
  return (~~(Math.random() * 6) - 3) * 30;
}

function cloudPadding() {
  return 1;
}

// Fetches a monochrome sprite bitmap for the specified text.
// Load in batches for speed.
function cloudSprite(contextAndRatio, d, data, di) {
  if (d.sprite) return;
  var c = contextAndRatio.context,
      ratio = contextAndRatio.ratio;

  c.clearRect(0, 0, (cw << 5) / ratio, ch / ratio);
  var x = 0,
      y = 0,
      maxh = 0,
      n = data.length;
  --di;
  while (++di < n) {
    d = data[di];
    c.save();
    c.font = d.style + " " + d.weight + " " + ~~((d.size + 1) / ratio) + "px " + d.font;
    var w = c.measureText(d.text + "m").width * ratio,
        h = d.size << 1;
    if (d.rotate) {
      var sr = Math.sin(d.rotate * cloudRadians),
          cr = Math.cos(d.rotate * cloudRadians),
          wcr = w * cr,
          wsr = w * sr,
          hcr = h * cr,
          hsr = h * sr;
      w = (Math.max(Math.abs(wcr + hsr), Math.abs(wcr - hsr)) + 0x1f) >> 5 << 5;
      h = ~~Math.max(Math.abs(wsr + hcr), Math.abs(wsr - hcr));
    } else {
      w = (w + 0x1f) >> 5 << 5;
    }
    if (h > maxh) maxh = h;
    if (x + w >= (cw << 5)) {
      x = 0;
      y += maxh;
      maxh = 0;
    }
    if (y + h >= ch) break;
    c.translate((x + (w >> 1)) / ratio, (y + (h >> 1)) / ratio);
    if (d.rotate) c.rotate(d.rotate * cloudRadians);
    c.fillText(d.text, 0, 0);
    if (d.padding) c.lineWidth = 2 * d.padding, c.strokeText(d.text, 0, 0);
    c.restore();
    d.width = w;
    d.height = h;
    d.xoff = x;
    d.yoff = y;
    d.x1 = w >> 1;
    d.y1 = h >> 1;
    d.x0 = -d.x1;
    d.y0 = -d.y1;
    d.hasText = true;
    x += w;
  }
  var pixels = c.getImageData(0, 0, (cw << 5) / ratio, ch / ratio).data,
      sprite = [];
  while (--di >= 0) {
    d = data[di];
    if (!d.hasText) continue;
    var w = d.width,
        w32 = w >> 5,
        h = d.y1 - d.y0;
    // Zero the buffer
    for (var i = 0; i < h * w32; i++) sprite[i] = 0;
    x = d.xoff;
    if (x == null) return;
    y = d.yoff;
    var seen = 0,
        seenRow = -1;
    for (var j = 0; j < h; j++) {
      for (var i = 0; i < w; i++) {
        var k = w32 * j + (i >> 5),
            m = pixels[((y + j) * (cw << 5) + (x + i)) << 2] ? 1 << (31 - (i % 32)) : 0;
        sprite[k] |= m;
        seen |= m;
      }
      if (seen) seenRow = j;
      else {
        d.y0++;
        h--;
        j--;
        y++;
      }
    }
    d.y1 = d.y0 + seenRow;
    d.sprite = sprite.slice(0, (d.y1 - d.y0) * w32);
  }
}

// Use mask-based collision detection.
function cloudCollide(tag, board, sw) {
  sw >>= 5;
  var sprite = tag.sprite,
      w = tag.width >> 5,
      lx = tag.x - (w << 4),
      sx = lx & 0x7f,
      msx = 32 - sx,
      h = tag.y1 - tag.y0,
      x = (tag.y + tag.y0) * sw + (lx >> 5),
      last;
  for (var j = 0; j < h; j++) {
    last = 0;
    for (var i = 0; i <= w; i++) {
      if (((last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0))
          & board[x + i]) return true;
    }
    x += sw;
  }
  return false;
}

function cloudBounds(bounds, d) {
  var b0 = bounds[0],
      b1 = bounds[1];
  if (d.x + d.x0 < b0.x) b0.x = d.x + d.x0;
  if (d.y + d.y0 < b0.y) b0.y = d.y + d.y0;
  if (d.x + d.x1 > b1.x) b1.x = d.x + d.x1;
  if (d.y + d.y1 > b1.y) b1.y = d.y + d.y1;
}

function collideRects(a, b) {
  return a.x + a.x1 > b[0].x && a.x + a.x0 < b[1].x && a.y + a.y1 > b[0].y && a.y + a.y0 < b[1].y;
}

function archimedeanSpiral(size) {
  var e = size[0] / size[1];
  return function(t) {
    return [e * (t *= .1) * Math.cos(t), t * Math.sin(t)];
  };
}

function rectangularSpiral(size) {
  var dy = 4,
      dx = dy * size[0] / size[1],
      x = 0,
      y = 0;
  return function(t) {
    var sign = t < 0 ? -1 : 1;
    // See triangular numbers: T_n = n * (n + 1) / 2.
    switch ((Math.sqrt(1 + 4 * sign * t) - sign) & 3) {
      case 0:  x += dx; break;
      case 1:  y += dy; break;
      case 2:  x -= dx; break;
      default: y -= dy; break;
    }
    return [x, y];
  };
}

// TODO reuse arrays?
function zeroArray(n) {
  var a = [],
      i = -1;
  while (++i < n) a[i] = 0;
  return a;
}

function cloudCanvas() {
  return document.createElement("canvas");
}

function functor(d) {
  return typeof d === "function" ? d : function() { return d; };
}

var spirals = {
  archimedean: archimedeanSpiral,
  rectangular: rectangularSpiral
};


/***/ }),

/***/ 74594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* reexport */ src_dispatch)
});

;// CONCATENATED MODULE: ./node_modules/d3-dispatch/src/dispatch.js
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ const src_dispatch = (dispatch);

;// CONCATENATED MODULE: ./node_modules/d3-dispatch/src/index.js



/***/ })

}]);