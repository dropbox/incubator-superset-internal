"use strict";

exports.__esModule = true;
exports.default = void 0;

var _models = require("../models");

var _createD3NumberFormatter = _interopRequireDefault(require("./factories/createD3NumberFormatter"));

var _createSmartNumberFormatter = _interopRequireDefault(require("./factories/createSmartNumberFormatter"));

var _NumberFormats = _interopRequireDefault(require("./NumberFormats"));

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
class NumberFormatterRegistry extends _models.RegistryWithDefaultKey {
  constructor() {
    super({
      name: 'NumberFormatter',
      overwritePolicy: _models.OverwritePolicy.WARN
    });
    this.registerValue(_NumberFormats.default.SMART_NUMBER, (0, _createSmartNumberFormatter.default)());
    this.registerValue(_NumberFormats.default.SMART_NUMBER_SIGNED, (0, _createSmartNumberFormatter.default)({
      signed: true
    }));
    this.setDefaultKey(_NumberFormats.default.SMART_NUMBER);
  }

  get(formatterId) {
    const targetFormat = `${formatterId === null || typeof formatterId === 'undefined' || formatterId === '' ? this.defaultKey : formatterId}`.trim();

    if (this.has(targetFormat)) {
      return super.get(targetFormat);
    } // Create new formatter if does not exist


    const formatter = (0, _createD3NumberFormatter.default)({
      formatString: targetFormat
    });
    this.registerValue(targetFormat, formatter);
    return formatter;
  }

  format(formatterId, value) {
    return this.get(formatterId)(value);
  }

}

exports.default = NumberFormatterRegistry;