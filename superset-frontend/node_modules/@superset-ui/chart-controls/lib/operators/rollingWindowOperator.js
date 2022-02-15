"use strict";

exports.__esModule = true;
exports.rollingWindowOperator = void 0;

var _core = require("@superset-ui/core");

var _utils = require("./utils");

/* eslint-disable camelcase */

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
 * specific language governing permissions and limitationsxw
 * under the License.
 */
const rollingWindowOperator = (formData, queryObject) => {
  let columns;

  if ((0, _utils.isValidTimeCompare)(formData, queryObject)) {
    const metricsMap = (0, _utils.getMetricOffsetsMap)(formData, queryObject);
    const comparisonType = formData.comparison_type;

    if (comparisonType === _core.ComparisionType.Values) {
      // time compare type: actual values
      columns = [...Array.from(metricsMap.values()), ...Array.from(metricsMap.keys())];
    } else {
      // time compare type: difference / percentage / ratio
      columns = Array.from(metricsMap.entries()).map(([offset, metric]) => [comparisonType, metric, offset].join(_utils.TIME_COMPARISON_SEPARATOR));
    }
  } else {
    columns = (0, _core.ensureIsArray)(queryObject.metrics).map(metric => {
      if (typeof metric === 'string') {
        return metric;
      }

      return metric.label;
    });
  }

  const columnsMap = Object.fromEntries(columns.map(col => [col, col]));

  if (formData.rolling_type === _core.RollingType.Cumsum) {
    return {
      operation: 'cum',
      options: {
        operator: 'sum',
        columns: columnsMap,
        is_pivot_df: true
      }
    };
  }

  if ([_core.RollingType.Sum, _core.RollingType.Mean, _core.RollingType.Std].includes(formData.rolling_type)) {
    return {
      operation: 'rolling',
      options: {
        rolling_type: formData.rolling_type,
        window: (0, _core.ensureIsInt)(formData.rolling_periods, 1),
        min_periods: (0, _core.ensureIsInt)(formData.min_periods, 0),
        columns: columnsMap,
        is_pivot_df: true
      }
    };
  }

  return undefined;
};

exports.rollingWindowOperator = rollingWindowOperator;