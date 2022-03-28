"use strict";

exports.__esModule = true;
exports.default = isEqualColumns;

var _isEqualArray = _interopRequireDefault(require("./isEqualArray"));

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
function isEqualColumns(propsA, propsB) {
  var _a$queriesData, _a$queriesData$, _b$queriesData, _b$queriesData$, _a$queriesData2, _a$queriesData2$, _b$queriesData2, _b$queriesData2$;

  const a = propsA[0];
  const b = propsB[0];
  return a.datasource.columnFormats === b.datasource.columnFormats && a.datasource.verboseMap === b.datasource.verboseMap && a.formData.tableTimestampFormat === b.formData.tableTimestampFormat && a.formData.timeGrainSqla === b.formData.timeGrainSqla && JSON.stringify(a.formData.columnConfig || null) === JSON.stringify(b.formData.columnConfig || null) && (0, _isEqualArray.default)(a.formData.metrics, b.formData.metrics) && (0, _isEqualArray.default)((_a$queriesData = a.queriesData) == null ? void 0 : (_a$queriesData$ = _a$queriesData[0]) == null ? void 0 : _a$queriesData$.colnames, (_b$queriesData = b.queriesData) == null ? void 0 : (_b$queriesData$ = _b$queriesData[0]) == null ? void 0 : _b$queriesData$.colnames) && (0, _isEqualArray.default)((_a$queriesData2 = a.queriesData) == null ? void 0 : (_a$queriesData2$ = _a$queriesData2[0]) == null ? void 0 : _a$queriesData2$.coltypes, (_b$queriesData2 = b.queriesData) == null ? void 0 : (_b$queriesData2$ = _b$queriesData2[0]) == null ? void 0 : _b$queriesData2$.coltypes) && JSON.stringify(a.formData.extraFilters || null) === JSON.stringify(b.formData.extraFilters || null) && JSON.stringify(a.formData.extraFormData || null) === JSON.stringify(b.formData.extraFormData || null);
}