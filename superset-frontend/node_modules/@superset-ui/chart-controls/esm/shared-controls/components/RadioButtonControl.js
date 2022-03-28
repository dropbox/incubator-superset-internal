import { css as _css } from "@emotion/react";
import _pt from "prop-types";

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
import { useTheme } from '@superset-ui/core';
import ControlHeader from '../../components/ControlHeader'; // [value, label]

import { jsx as ___EmotionJSX } from "@emotion/react";
export default function RadioButtonControl({
  value: initialValue,
  options,
  onChange,
  ...props
}) {
  const currentValue = initialValue || options[0][0];
  const theme = useTheme();
  return ___EmotionJSX("div", {
    css: /*#__PURE__*/_css({
      '.btn svg': {
        position: 'relative',
        top: '0.2em'
      },
      '.btn:focus': {
        outline: 'none'
      },
      '.control-label + .btn-group': {
        marginTop: 1
      },
      '.btn-group .btn.active': {
        background: theme.colors.secondary.light5,
        fontWeight: theme.typography.weights.bold,
        boxShadow: 'none'
      }
    }, process.env.NODE_ENV === "production" ? "" : ";label:RadioButtonControl;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQtY29udHJvbHMvY29tcG9uZW50cy9SYWRpb0J1dHRvbkNvbnRyb2wudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDTSIsImZpbGUiOiIuLi8uLi8uLi9zcmMvc2hhcmVkLWNvbnRyb2xzL2NvbXBvbmVudHMvUmFkaW9CdXR0b25Db250cm9sLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBKc29uVmFsdWUsIHVzZVRoZW1lIH0gZnJvbSAnQHN1cGVyc2V0LXVpL2NvcmUnO1xuaW1wb3J0IENvbnRyb2xIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250cm9sSGVhZGVyJztcblxuLy8gW3ZhbHVlLCBsYWJlbF1cbmV4cG9ydCB0eXBlIFJhZGlvQnV0dG9uT3B0aW9uID0gW0pzb25WYWx1ZSwgRXhjbHVkZTxSZWFjdE5vZGUsIG51bGwgfCB1bmRlZmluZWQgfCBib29sZWFuPl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFkaW9CdXR0b25Db250cm9sUHJvcHMge1xuICBsYWJlbD86IFJlYWN0Tm9kZTtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIG9wdGlvbnM6IFJhZGlvQnV0dG9uT3B0aW9uW107XG4gIGhvdmVyZWQ/OiBib29sZWFuO1xuICB2YWx1ZT86IHN0cmluZztcbiAgb25DaGFuZ2U6IChvcHQ6IFJhZGlvQnV0dG9uT3B0aW9uWzBdKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYWRpb0J1dHRvbkNvbnRyb2woe1xuICB2YWx1ZTogaW5pdGlhbFZhbHVlLFxuICBvcHRpb25zLFxuICBvbkNoYW5nZSxcbiAgLi4ucHJvcHNcbn06IFJhZGlvQnV0dG9uQ29udHJvbFByb3BzKSB7XG4gIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGluaXRpYWxWYWx1ZSB8fCBvcHRpb25zWzBdWzBdO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgICcuYnRuIHN2Zyc6IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICB0b3A6ICcwLjJlbScsXG4gICAgICAgIH0sXG4gICAgICAgICcuYnRuOmZvY3VzJzoge1xuICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgfSxcbiAgICAgICAgJy5jb250cm9sLWxhYmVsICsgLmJ0bi1ncm91cCc6IHtcbiAgICAgICAgICBtYXJnaW5Ub3A6IDEsXG4gICAgICAgIH0sXG4gICAgICAgICcuYnRuLWdyb3VwIC5idG4uYWN0aXZlJzoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnkubGlnaHQ1LFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkud2VpZ2h0cy5ib2xkLFxuICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29udHJvbEhlYWRlciB7Li4ucHJvcHN9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBidG4tZ3JvdXAtc21cIj5cbiAgICAgICAge29wdGlvbnMubWFwKChbdmFsLCBsYWJlbF0pID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e0pTT04uc3RyaW5naWZ5KHZhbCl9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tZGVmYXVsdCAke3ZhbCA9PT0gY3VycmVudFZhbHVlID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkNoYW5nZSh2YWwpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */")
  }, ___EmotionJSX(ControlHeader, props), ___EmotionJSX("div", {
    className: "btn-group btn-group-sm"
  }, options.map(([val, label]) => ___EmotionJSX("button", {
    key: JSON.stringify(val),
    type: "button",
    className: `btn btn-default ${val === currentValue ? 'active' : ''}`,
    onClick: () => {
      onChange(val);
    }
  }, label))));
}
RadioButtonControl.propTypes = {
  label: _pt.node,
  description: _pt.string,
  options: _pt.array.isRequired,
  hovered: _pt.bool,
  value: _pt.string,
  onChange: _pt.func.isRequired
};