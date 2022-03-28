"use strict";

exports.__esModule = true;
exports.forecastIntervalControls = exports.FORECAST_DEFAULT_DATA = void 0;

var _core = require("@superset-ui/core");

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
const FORECAST_DEFAULT_DATA = {
  forecastEnabled: false,
  forecastInterval: 0.8,
  forecastPeriods: 10,
  forecastSeasonalityDaily: null,
  forecastSeasonalityWeekly: null,
  forecastSeasonalityYearly: null
};
exports.FORECAST_DEFAULT_DATA = FORECAST_DEFAULT_DATA;
const forecastIntervalControls = {
  label: (0, _core.t)('Predictive Analytics'),
  expanded: false,
  controlSetRows: [[{
    name: 'forecastEnabled',
    config: {
      type: 'CheckboxControl',
      label: (0, _core.t)('Enable forecast'),
      renderTrigger: false,
      default: FORECAST_DEFAULT_DATA.forecastEnabled,
      description: (0, _core.t)('Enable forecasting')
    }
  }], [{
    name: 'forecastPeriods',
    config: {
      type: 'TextControl',
      label: (0, _core.t)('Forecast periods'),
      validators: [_core.legacyValidateInteger],
      default: FORECAST_DEFAULT_DATA.forecastPeriods,
      description: (0, _core.t)('How many periods into the future do we want to predict')
    }
  }], [{
    name: 'forecastInterval',
    config: {
      type: 'TextControl',
      label: (0, _core.t)('Confidence interval'),
      validators: [_core.legacyValidateNumber],
      default: FORECAST_DEFAULT_DATA.forecastInterval,
      description: (0, _core.t)('Width of the confidence interval. Should be between 0 and 1')
    }
  }, {
    name: 'forecastSeasonalityYearly',
    config: {
      type: 'SelectControl',
      freeForm: true,
      label: 'Yearly seasonality',
      choices: [[null, 'default'], [true, 'Yes'], [false, 'No']],
      default: FORECAST_DEFAULT_DATA.forecastSeasonalityYearly,
      description: (0, _core.t)('Should yearly seasonality be applied. An integer value will specify Fourier order of seasonality.')
    }
  }], [{
    name: 'forecastSeasonalityWeekly',
    config: {
      type: 'SelectControl',
      freeForm: true,
      label: 'Weekly seasonality',
      choices: [[null, 'default'], [true, 'Yes'], [false, 'No']],
      default: FORECAST_DEFAULT_DATA.forecastSeasonalityWeekly,
      description: (0, _core.t)('Should weekly seasonality be applied. An integer value will specify Fourier order of seasonality.')
    }
  }, {
    name: 'forecastSeasonalityDaily',
    config: {
      type: 'SelectControl',
      freeForm: true,
      label: 'Daily seasonality',
      choices: [[null, 'default'], [true, 'Yes'], [false, 'No']],
      default: FORECAST_DEFAULT_DATA.forecastSeasonalityDaily,
      description: (0, _core.t)('Should daily seasonality be applied. An integer value will specify Fourier order of seasonality.')
    }
  }]]
};
exports.forecastIntervalControls = forecastIntervalControls;