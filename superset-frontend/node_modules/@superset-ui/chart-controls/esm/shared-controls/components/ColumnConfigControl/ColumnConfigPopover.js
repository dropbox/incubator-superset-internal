import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import React from 'react';
import { GenericDataType } from '@superset-ui/core';
import ControlForm, { ControlFormRow, ControlFormItem } from '../../../components/ControlForm';
import { SHARED_COLUMN_CONFIG_PROPS } from './constants';
import { jsx as ___EmotionJSX } from "@emotion/react";
export default function ColumnConfigPopover({
  column,
  configFormLayout,
  onChange
}) {
  return ___EmotionJSX(ControlForm, {
    onChange: onChange,
    value: column.config
  }, configFormLayout[column.type === undefined ? GenericDataType.STRING : column.type].map((row, i) => ___EmotionJSX(ControlFormRow, {
    key: i
  }, row.map(meta => {
    const key = typeof meta === 'string' ? meta : meta.name;
    const override = typeof meta === 'string' ? {} : 'override' in meta ? meta.override : meta.config;
    const props = { ...(key in SHARED_COLUMN_CONFIG_PROPS ? SHARED_COLUMN_CONFIG_PROPS[key] : undefined),
      ...override
    };
    return ___EmotionJSX(ControlFormItem, _extends({
      key: key,
      name: key
    }, props));
  }))));
}
ColumnConfigPopover.propTypes = {
  onChange: _pt.func.isRequired
};