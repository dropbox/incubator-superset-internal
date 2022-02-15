"use strict";

exports.__esModule = true;
exports.default = createD3TimeFormatter;

var _d3TimeFormat = require("d3-time-format");

var _utils = require("../../utils");

var _TimeFormatter = _interopRequireDefault(require("../TimeFormatter"));

var _TimeFormats = require("../TimeFormats");

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
function createD3TimeFormatter(config) {
  const {
    description,
    formatString = (0, _utils.isRequired)('formatString'),
    label,
    locale,
    useLocalTime = false
  } = config;
  const id = useLocalTime ? `${_TimeFormats.LOCAL_PREFIX}${formatString}` : formatString;
  let formatFunc;

  if (typeof locale === 'undefined') {
    const format = useLocalTime ? _d3TimeFormat.timeFormat : _d3TimeFormat.utcFormat;
    formatFunc = format(formatString);
  } else {
    const localeObject = (0, _d3TimeFormat.timeFormatLocale)(locale);
    formatFunc = useLocalTime ? localeObject.format(formatString) : localeObject.utcFormat(formatString);
  }

  return new _TimeFormatter.default({
    description,
    formatFunc,
    id,
    label,
    useLocalTime
  });
}