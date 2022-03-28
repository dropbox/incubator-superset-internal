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
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Types for the final QueryContext sent to /api/v1/chart/data.
 */

/**
 * Metric definition/reference in query object.
 */

/**
 * Column selects in query object (used as dimensions in both groupby or raw
 * query mode). Only support referring existing columns.
 */

/**
 * Order query results by columns.
 * Format: [metric/column, is_ascending].
 */
export let QueryMode;
/**
 * Query form fields related to SQL query and data outputs.
 */

(function (QueryMode) {
  QueryMode["aggregate"] = "aggregate";
  QueryMode["raw"] = "raw";
})(QueryMode || (QueryMode = {}));

//---------------------------------------------------
// Type guards
//---------------------------------------------------
export function isDruidFormData(formData) {
  return 'granularity' in formData;
}
export default {};