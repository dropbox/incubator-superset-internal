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
import { DEFAULT_LEGEND_FORM_DATA, LegendOrientation, LegendType } from '../types';
export let EchartsPieLabelType;

(function (EchartsPieLabelType) {
  EchartsPieLabelType["Key"] = "key";
  EchartsPieLabelType["Value"] = "value";
  EchartsPieLabelType["Percent"] = "percent";
  EchartsPieLabelType["KeyValue"] = "key_value";
  EchartsPieLabelType["KeyPercent"] = "key_percent";
  EchartsPieLabelType["KeyValuePercent"] = "key_value_percent";
})(EchartsPieLabelType || (EchartsPieLabelType = {}));

// @ts-ignore
export const DEFAULT_FORM_DATA = { ...DEFAULT_LEGEND_FORM_DATA,
  donut: false,
  groupby: [],
  innerRadius: 30,
  labelLine: false,
  labelType: EchartsPieLabelType.Key,
  legendOrientation: LegendOrientation.Top,
  legendType: LegendType.Scroll,
  numberFormat: 'SMART_NUMBER',
  outerRadius: 70,
  showLabels: true,
  labelsOutside: true,
  showLabelsThreshold: 5,
  emitFilter: false,
  dateFormat: 'smart_date'
};