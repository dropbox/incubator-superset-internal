"use strict";

exports.__esModule = true;
exports.default = createD3NumberFormatter;

var _d3Format = require("d3-format");

var _utils = require("../../utils");

var _NumberFormatter = _interopRequireDefault(require("../NumberFormatter"));

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
function createD3NumberFormatter(config) {
  const {
    description,
    formatString = (0, _utils.isRequired)('config.formatString'),
    label,
    locale
  } = config;
  let formatFunc;
  let isInvalid = false;

  try {
    formatFunc = typeof locale === 'undefined' ? (0, _d3Format.format)(formatString) : (0, _d3Format.formatLocale)(locale).format(formatString);
  } catch (error) {
    formatFunc = value => `${value} (Invalid format: ${formatString})`;

    isInvalid = true;
  }

  return new _NumberFormatter.default({
    description,
    formatFunc,
    id: formatString,
    isInvalid,
    label
  });
}