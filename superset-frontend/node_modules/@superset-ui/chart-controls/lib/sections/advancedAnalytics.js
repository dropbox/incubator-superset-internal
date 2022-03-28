"use strict";

exports.__esModule = true;
exports.advancedAnalyticsControls = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@superset-ui/core");

var _utils = require("../utils");

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const advancedAnalyticsControls = {
  label: (0, _core.t)('Advanced analytics'),
  tabOverride: 'data',
  description: (0, _core.t)('This section contains options ' + 'that allow for advanced analytical post processing ' + 'of query results'),
  controlSetRows: [[(0, _react2.jsx)("h1", {
    className: "section-header"
  }, (0, _core.t)('Rolling window'))], [{
    name: 'rolling_type',
    config: {
      type: 'SelectControl',
      label: (0, _core.t)('Rolling function'),
      default: null,
      choices: [[null, (0, _core.t)('None')]].concat((0, _utils.formatSelectOptions)(Object.values(_core.RollingType))),
      description: (0, _core.t)('Defines a rolling window function to apply, works along ' + 'with the [Periods] text box')
    }
  }], [{
    name: 'rolling_periods',
    config: {
      type: 'TextControl',
      label: (0, _core.t)('Periods'),
      isInt: true,
      description: (0, _core.t)('Defines the size of the rolling window function, ' + 'relative to the time granularity selected'),
      visibility: ({
        controls
      }) => {
        var _controls$rolling_typ;

        return Boolean(controls == null ? void 0 : (_controls$rolling_typ = controls.rolling_type) == null ? void 0 : _controls$rolling_typ.value) && controls.rolling_type.value !== _core.RollingType.Cumsum;
      }
    }
  }], [{
    name: 'min_periods',
    config: {
      type: 'TextControl',
      label: (0, _core.t)('Min periods'),
      isInt: true,
      description: (0, _core.t)('The minimum number of rolling periods required to show ' + 'a value. For instance if you do a cumulative sum on 7 days ' + 'you may want your "Min Period" to be 7, so that all data points ' + 'shown are the total of 7 periods. This will hide the "ramp up" ' + 'taking place over the first 7 periods'),
      visibility: ({
        controls
      }) => {
        var _controls$rolling_typ2;

        return Boolean(controls == null ? void 0 : (_controls$rolling_typ2 = controls.rolling_type) == null ? void 0 : _controls$rolling_typ2.value) && controls.rolling_type.value !== _core.RollingType.Cumsum;
      }
    }
  }], [(0, _react2.jsx)("h1", {
    className: "section-header"
  }, (0, _core.t)('Time comparison'))], [{
    name: 'time_compare',
    config: {
      type: 'SelectControl',
      multi: true,
      freeForm: true,
      label: (0, _core.t)('Time shift'),
      choices: (0, _utils.formatSelectOptions)(['1 day ago', '1 week ago', '28 days ago', '30 days ago', '52 weeks ago', '1 year ago', '104 weeks ago', '2 years ago']),
      description: (0, _core.t)('Overlay one or more timeseries from a ' + 'relative time period. Expects relative time deltas ' + 'in natural language (example:  24 hours, 7 days, ' + '52 weeks, 365 days). Free text is supported.')
    }
  }], [{
    name: 'comparison_type',
    config: {
      type: 'SelectControl',
      label: (0, _core.t)('Calculation type'),
      default: 'values',
      choices: [[_core.ComparisionType.Values, 'Actual values'], [_core.ComparisionType.Difference, 'Difference'], [_core.ComparisionType.Percentage, 'Percentage change'], [_core.ComparisionType.Ratio, 'Ratio']],
      description: (0, _core.t)('How to display time shifts: as individual lines; as the ' + 'difference between the main time series and each time shift; ' + 'as the percentage change; or as the ratio between series and time shifts.')
    }
  }], [(0, _react2.jsx)("h1", {
    className: "section-header"
  }, (0, _core.t)('Resample'))], [{
    name: 'resample_rule',
    config: {
      type: 'SelectControl',
      freeForm: true,
      label: (0, _core.t)('Rule'),
      default: null,
      choices: [['1T', '1 minutely frequency'], ['1H', '1 hourly frequency'], ['1D', '1 calendar day frequency'], ['7D', '7 calendar day frequency'], ['1MS', '1 month start frequency'], ['1M', '1 month end frequency'], ['1AS', '1 year start frequency'], ['1A', '1 year end frequency']],
      description: (0, _core.t)('Pandas resample rule')
    }
  }], [{
    name: 'resample_method',
    config: {
      type: 'SelectControl',
      freeForm: true,
      label: (0, _core.t)('Fill method'),
      default: null,
      choices: [['asfreq', 'Null imputation'], ['zerofill', 'Zero imputation'], ['ffill', 'Forward values'], ['bfill', 'Backward values'], ['median', 'Median values'], ['mean', 'Mean values'], ['sum', 'Sum values']],
      description: (0, _core.t)('Pandas resample method')
    }
  }]]
};
exports.advancedAnalyticsControls = advancedAnalyticsControls;