"use strict";

exports.__esModule = true;
exports.timeCompareOperator = void 0;

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
const timeCompareOperator = (formData, queryObject) => {
  const comparisonType = formData.comparison_type;
  const metricOffsetMap = (0, _utils.getMetricOffsetsMap)(formData, queryObject);

  if ((0, _utils.isValidTimeCompare)(formData, queryObject) && comparisonType !== _core.ComparisionType.Values) {
    return {
      operation: 'compare',
      options: {
        source_columns: Array.from(metricOffsetMap.values()),
        compare_columns: Array.from(metricOffsetMap.keys()),
        compare_type: comparisonType,
        drop_original_columns: true
      }
    };
  }

  return undefined;
};

exports.timeCompareOperator = timeCompareOperator;