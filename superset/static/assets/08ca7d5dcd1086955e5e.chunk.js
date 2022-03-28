"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[5094],{

/***/ 25094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnnotationLayer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24198);
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35932);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38849);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(27211);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42621);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21173);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(60650);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(34042);
/* harmony import */ var src_explore_components_controls_SelectControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82199);
/* harmony import */ var src_explore_components_controls_TextControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79684);
/* harmony import */ var src_explore_components_controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79069);
/* harmony import */ var src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10945);
/* harmony import */ var src_components_PopoverSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83734);
/* harmony import */ var src_explore_components_ControlHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93011);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11965);
function _EMOTION_STRINGIFIED_CSS_ERROR__() {return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";} /**
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













const AUTOMATIC_COLOR = '';

const propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  annotationType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  sourceType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  opacity: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  showMarkers: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  hideLine: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  overrides: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  show: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  titleColumn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  descriptionColumns: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  timeColumn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  intervalEndColumn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  vizType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  error: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  colorScheme: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  addAnnotationLayer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  removeAnnotationLayer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  close: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func) };


const defaultProps = {
  name: '',
  annotationType: src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_ANNOTATION_TYPE */ .qy,
  sourceType: '',
  color: AUTOMATIC_COLOR,
  opacity: '',
  style: 'solid',
  width: 1,
  showMarkers: false,
  hideLine: false,
  overrides: {},
  colorScheme: 'd3Category10',
  show: true,
  titleColumn: '',
  descriptionColumns: [],
  timeColumn: '',
  intervalEndColumn: '',

  addAnnotationLayer: () => {},
  removeAnnotationLayer: () => {},
  close: () => {} };var _ref =  true ? { name: "1h52dri", styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap" } : 0;


class AnnotationLayer extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);
    const {
      name,
      annotationType,
      sourceType,
      color,
      opacity,
      style,
      width,
      showMarkers,
      hideLine,
      value,
      overrides,
      show,
      titleColumn,
      descriptionColumns,
      timeColumn,
      intervalEndColumn,
      vizType } =
    props;

    // Only allow override whole time_range
    if ('since' in overrides || 'until' in overrides) {
      overrides.time_range = null;
      delete overrides.since;
      delete overrides.until;
    }

    // Check if annotationType is supported by this chart
    const metadata = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)().get(vizType);
    const supportedAnnotationTypes = (metadata == null ? void 0 : metadata.supportedAnnotationTypes) || [];
    const validAnnotationType = supportedAnnotationTypes.includes(
    annotationType) ?

    annotationType :
    supportedAnnotationTypes[0];

    this.state = {
      // base
      name,
      annotationType: validAnnotationType,
      sourceType,
      value,
      overrides,
      show,
      // slice
      titleColumn,
      descriptionColumns,
      timeColumn,
      intervalEndColumn,
      // display
      color: color || AUTOMATIC_COLOR,
      opacity,
      style,
      width,
      showMarkers,
      hideLine,
      // refData
      isNew: !name,
      isLoadingOptions: true,
      valueOptions: [] };

    this.submitAnnotation = this.submitAnnotation.bind(this);
    this.deleteAnnotation = this.deleteAnnotation.bind(this);
    this.applyAnnotation = this.applyAnnotation.bind(this);
    this.fetchOptions = this.fetchOptions.bind(this);
    this.handleAnnotationType = this.handleAnnotationType.bind(this);
    this.handleAnnotationSourceType = this.handleAnnotationSourceType.bind(
    this);

    this.handleValue = this.handleValue.bind(this);
    this.isValidForm = this.isValidForm.bind(this);
  }

  componentDidMount() {
    const { annotationType, sourceType, isLoadingOptions } = this.state;
    this.fetchOptions(annotationType, sourceType, isLoadingOptions);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sourceType !== this.state.sourceType) {
      this.fetchOptions(this.state.annotationType, this.state.sourceType, true);
    }
  }

  getSupportedSourceTypes(annotationType) {var _ANNOTATION_TYPES_MET;
    // Get vis types that can be source.
    const sources = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)().
    entries().
    filter(({ value: chartMetadata }) =>
    chartMetadata.canBeAnnotationType(annotationType)).

    map(({ key, value: chartMetadata }) => ({
      value: key,
      label: chartMetadata.name }));

    // Prepend native source if applicable
    if ((_ANNOTATION_TYPES_MET = src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_TYPES_METADATA */ .J_[annotationType]) != null && _ANNOTATION_TYPES_MET.supportNativeSource) {
      sources.unshift(src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_SOURCE_TYPES_METADATA.NATIVE */ .dS.NATIVE);
    }
    return sources;
  }

  isValidFormulaAnnotation(expression, annotationType) {
    if (annotationType === src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_TYPES.FORMULA */ .DT.FORMULA) {
      return (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .isValidExpression */ .$)(expression);
    }
    return true;
  }

  isValidForm() {
    const {
      name,
      annotationType,
      sourceType,
      value,
      timeColumn,
      intervalEndColumn } =
    this.state;
    const errors = [
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(name),
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(annotationType),
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(value)];

    if (sourceType !== src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_SOURCE_TYPES.NATIVE */ .S4.NATIVE) {
      if (annotationType === src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_TYPES.EVENT */ .DT.EVENT) {
        errors.push((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(timeColumn));
      }
      if (annotationType === src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_TYPES.INTERVAL */ .DT.INTERVAL) {
        errors.push((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(timeColumn));
        errors.push((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(intervalEndColumn));
      }
    }
    errors.push(!this.isValidFormulaAnnotation(value, annotationType));
    return !errors.filter((x) => x).length;
  }

  handleAnnotationType(annotationType) {
    this.setState({
      annotationType,
      sourceType: null,
      value: null });

  }

  handleAnnotationSourceType(sourceType) {
    const { sourceType: prevSourceType } = this.state;

    if (prevSourceType !== sourceType) {
      this.setState({ sourceType, value: null, isLoadingOptions: true });
    }
  }

  handleValue(value) {
    this.setState({
      value,
      descriptionColumns: [],
      intervalEndColumn: null,
      timeColumn: null,
      titleColumn: null,
      overrides: { time_range: null } });

  }

  fetchOptions(annotationType, sourceType, isLoadingOptions) {
    if (isLoadingOptions) {
      if (sourceType === src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_SOURCE_TYPES.NATIVE */ .S4.NATIVE) {
        _superset_ui_core__WEBPACK_IMPORTED_MODULE_13__/* ["default"].get */ .Z.get({
          endpoint: '/annotationlayermodelview/api/read?' }).
        then(({ json }) => {
          const layers = json ?
          json.result.map((layer) => ({
            value: layer.id,
            label: layer.name })) :

          [];
          this.setState({
            isLoadingOptions: false,
            valueOptions: layers });

        });
      } else if ((0,src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .requiresQuery */ .m7)(sourceType)) {
        _superset_ui_core__WEBPACK_IMPORTED_MODULE_13__/* ["default"].get */ .Z.get({ endpoint: '/superset/user_slices' }).then(
        ({ json }) => {
          const registry = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
          this.setState({
            isLoadingOptions: false,
            valueOptions: json.
            filter((x) => {
              const metadata = registry.get(x.viz_type);
              return (
                metadata && metadata.canBeAnnotationType(annotationType));

            }).
            map((x) => ({ value: x.id, label: x.title, slice: x })) });

        });

      } else {
        this.setState({
          isLoadingOptions: false,
          valueOptions: [] });

      }
    }
  }

  deleteAnnotation() {
    this.props.removeAnnotationLayer();
    this.props.close();
  }

  applyAnnotation() {
    if (this.isValidForm()) {
      const annotationFields = [
      'name',
      'annotationType',
      'sourceType',
      'color',
      'opacity',
      'style',
      'width',
      'showMarkers',
      'hideLine',
      'value',
      'overrides',
      'show',
      'titleColumn',
      'descriptionColumns',
      'timeColumn',
      'intervalEndColumn'];

      const newAnnotation = {};
      annotationFields.forEach((field) => {
        if (this.state[field] !== null) {
          newAnnotation[field] = this.state[field];
        }
      });

      if (newAnnotation.color === AUTOMATIC_COLOR) {
        newAnnotation.color = null;
      }

      this.props.addAnnotationLayer(newAnnotation);
      this.setState({ isNew: false });
    }
  }

  submitAnnotation() {
    this.applyAnnotation();
    this.props.close();
  }

  renderOption(option) {
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
        css: _ref,




        title: option.label },

      option.label));


  }

  renderValueConfiguration() {
    const {
      annotationType,
      sourceType,
      value,
      valueOptions,
      isLoadingOptions } =
    this.state;
    let label = '';
    let description = '';
    if ((0,src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .requiresQuery */ .m7)(sourceType)) {
      if (sourceType === src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_SOURCE_TYPES.NATIVE */ .S4.NATIVE) {
        label = 'Annotation layer';
        description = 'Select the Annotation Layer you would like to use.';
      } else {
        label = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Chart');
        description = `Use a pre defined Superset Chart as a source for annotations and overlays.
        your chart must be one of these visualization types:
        [${this.getSupportedSourceTypes(annotationType).
        map((x) => x.label).
        join(', ')}]`;
      }
    } else if (annotationType === src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_TYPES.FORMULA */ .DT.FORMULA) {
      label = 'Formula';
      description = `Expects a formula with depending time parameter 'x'
        in milliseconds since epoch. mathjs is used to evaluate the formulas.
        Example: '2x+5'`;
    }
    if ((0,src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .requiresQuery */ .m7)(sourceType)) {
      return (
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_SelectControl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Annotation layer value'),
          name: "annotation-layer-value",
          showHeader: true,
          hovered: true,
          description: description,
          label: label,
          placeholder: "",
          options: valueOptions,
          isLoading: isLoadingOptions,
          value: value,
          onChange: this.handleValue,
          validationErrors: !value ? ['Mandatory'] : [],
          optionRenderer: this.renderOption }));


    }
    if (annotationType === src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_TYPES.FORMULA */ .DT.FORMULA) {
      return (
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_TextControl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          name: "annotation-layer-value",
          hovered: true,
          showHeader: true,
          description: description,
          label: label,
          placeholder: "",
          value: value,
          onChange: this.handleValue,
          validationErrors:
          !this.isValidFormulaAnnotation(value, annotationType) ?
          ['Bad formula.'] :
          [] }));



    }
    return '';
  }

  renderSliceConfiguration() {
    const {
      annotationType,
      sourceType,
      value,
      valueOptions,
      overrides,
      titleColumn,
      timeColumn,
      intervalEndColumn,
      descriptionColumns } =
    this.state;
    const { slice } = valueOptions.find((x) => x.value === value) || {};
    if (sourceType !== src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_SOURCE_TYPES.NATIVE */ .S4.NATIVE && slice) {
      const columns = (slice.data.groupby || []).
      concat(slice.data.all_columns || []).
      map((x) => ({ value: x, label: x }));
      const timeColumnOptions = slice.data.include_time ?
      [{ value: '__timestamp', label: '__timestamp' }].concat(columns) :
      columns;
      return (
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", { style: { marginRight: '2rem' } },
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_components_PopoverSection__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          isSelected: true,
          title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Annotation Slice Configuration'),
          info: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)(`This section allows you to configure how to use the slice
               to generate annotations.`) },

        (annotationType === src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_TYPES.EVENT */ .DT.EVENT ||
        annotationType === src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_TYPES.INTERVAL */ .DT.INTERVAL) &&
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_SelectControl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Annotation layer time column'),
          hovered: true,
          name: "annotation-layer-time-column",
          label:
          annotationType === src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_TYPES.INTERVAL */ .DT.INTERVAL ?
          (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Interval start column') :
          (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Event time column'),

          description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)(
          'This column must contain date/time information.'),

          validationErrors: !timeColumn ? ['Mandatory'] : [],
          clearable: false,
          options: timeColumnOptions,
          value: timeColumn,
          onChange: (v) => this.setState({ timeColumn: v }) }),


        annotationType === src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_TYPES.INTERVAL */ .DT.INTERVAL &&
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_SelectControl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Annotation layer interval end'),
          hovered: true,
          name: "annotation-layer-intervalEnd",
          label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Interval End column'),
          description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)(
          'This column must contain date/time information.'),

          validationErrors: !intervalEndColumn ? ['Mandatory'] : [],
          options: columns,
          value: intervalEndColumn,
          onChange: (value) => this.setState({ intervalEndColumn: value }) }),


        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_SelectControl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Annotation layer title column'),
          hovered: true,
          name: "annotation-layer-title",
          label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Title Column'),
          description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Pick a title for you annotation.'),
          options: [{ value: '', label: 'None' }].concat(columns),
          value: titleColumn,
          onChange: (value) => this.setState({ titleColumn: value }) }),

        annotationType !== src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_TYPES.TIME_SERIES */ .DT.TIME_SERIES &&
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_SelectControl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Annotation layer description columns'),
          hovered: true,
          name: "annotation-layer-title",
          label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Description Columns'),
          description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)(
          "Pick one or more columns that should be shown in the annotation. If you don't select a column all of them will be shown."),

          multi: true,
          options: columns,
          value: descriptionColumns,
          onChange: (value) => this.setState({ descriptionColumns: value }) }),


        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", { style: { marginTop: '1rem' } },
        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          hovered: true,
          name: "annotation-override-time_range",
          label: "Override time range",
          description: `This controls whether the "time_range" field from the current
                  view should be passed down to the chart containing the annotation data.`,
          value: 'time_range' in overrides,
          onChange: (v) => {
            delete overrides.time_range;
            if (v) {
              this.setState({
                overrides: { ...overrides, time_range: null } });

            } else {
              this.setState({ overrides: { ...overrides } });
            }
          } }),

        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          hovered: true,
          name: "annotation-override-timegrain",
          label: "Override time grain",
          description: `This controls whether the time grain field from the current
                  view should be passed down to the chart containing the annotation data.`,
          value: 'time_grain_sqla' in overrides,
          onChange: (v) => {
            delete overrides.time_grain_sqla;
            delete overrides.granularity;
            if (v) {
              this.setState({
                overrides: {
                  ...overrides,
                  time_grain_sqla: null,
                  granularity: null } });


            } else {
              this.setState({ overrides: { ...overrides } });
            }
          } }),

        (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_TextControl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          hovered: true,
          name: "annotation-layer-timeshift",
          label: "Time Shift",
          description: `Time delta in natural language
                  (example:  24 hours, 7 days, 56 weeks, 365 days)`,
          placeholder: "",
          value: overrides.time_shift,
          onChange: (v) =>
          this.setState({ overrides: { ...overrides, time_shift: v } }) })))));






    }
    return '';
  }

  renderDisplayConfiguration() {
    const {
      color,
      opacity,
      style,
      width,
      showMarkers,
      hideLine,
      annotationType } =
    this.state;
    const colorScheme = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)().
    get(this.props.colorScheme).
    colors.concat();
    if (
    color &&
    color !== AUTOMATIC_COLOR &&
    !colorScheme.find((x) => x.toLowerCase() === color.toLowerCase()))
    {
      colorScheme.push(color);
    }
    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_components_PopoverSection__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        isSelected: true,
        title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Display configuration'),
        info: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Configure your how you overlay is displayed here.') },

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_SelectControl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Annotation layer stroke'),
        name: "annotation-layer-stroke",
        label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Style')
        // see '../../../visualizations/nvd3_vis.css'
        , options: [
        { value: 'solid', label: 'Solid' },
        { value: 'dashed', label: 'Dashed' },
        { value: 'longDashed', label: 'Long dashed' },
        { value: 'dotted', label: 'Dotted' }],

        value: style,
        clearable: false,
        onChange: (v) => this.setState({ style: v }) }),

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_SelectControl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Annotation layer opacity'),
        name: "annotation-layer-opacity",
        label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Opacity')
        // see '../../../visualizations/nvd3_vis.css'
        , options: [
        { value: '', label: 'Solid' },
        { value: 'opacityLow', label: '0.2' },
        { value: 'opacityMedium', label: '0.5' },
        { value: 'opacityHigh', label: '0.8' }],

        value: opacity,
        onChange: (value) => this.setState({ opacity: value }) }),

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", null,
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_ControlHeader__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, { label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Color') }),
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", { style: { display: 'flex', flexDirection: 'column' } },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_color__WEBPACK_IMPORTED_MODULE_2__/* .CompactPicker */ .Ie, {
        color: color,
        colors: colorScheme,
        onChangeComplete: (v) => this.setState({ color: v.hex }) }),

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        style: { marginTop: '0.5rem', marginBottom: '0.5rem' },
        buttonStyle: color === AUTOMATIC_COLOR ? 'success' : 'default',
        buttonSize: "xsmall",
        onClick: () => this.setState({ color: AUTOMATIC_COLOR }) }, "Automatic Color"))),





      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_TextControl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        name: "annotation-layer-stroke-width",
        label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Line width'),
        isInt: true,
        value: width,
        onChange: (v) => this.setState({ width: v }) }),

      annotationType === src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_TYPES.TIME_SERIES */ .DT.TIME_SERIES &&
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        hovered: true,
        name: "annotation-layer-show-markers",
        label: "Show Markers",
        description: "Shows or hides markers for the time series",
        value: showMarkers,
        onChange: (v) => this.setState({ showMarkers: v }) }),


      annotationType === src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_TYPES.TIME_SERIES */ .DT.TIME_SERIES &&
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        hovered: true,
        name: "annotation-layer-hide-line",
        label: "Hide Line",
        description: "Hides the Line for the time series",
        value: hideLine,
        onChange: (v) => this.setState({ hideLine: v }) })));




  }

  render() {
    const { isNew, name, annotationType, sourceType, show } = this.state;
    const isValid = this.isValidForm();
    const metadata = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)().get(this.props.vizType);
    const supportedAnnotationTypes = metadata ?
    metadata.supportedAnnotationTypes.map(
    (type) => src_modules_AnnotationTypes__WEBPACK_IMPORTED_MODULE_7__/* .ANNOTATION_TYPES_METADATA */ .J_[type]) :

    [];
    const supportedSourceTypes = this.getSupportedSourceTypes(annotationType);

    return (
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
      this.props.error &&
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", { style: { color: 'red' } }, "ERROR: ", this.props.error),

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", { style: { display: 'flex', flexDirection: 'row' } },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", { style: { marginRight: '2rem' } },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_components_PopoverSection__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        isSelected: true,
        title: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Layer configuration'),
        info: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Configure the basics of your Annotation Layer.') },

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_TextControl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        name: "annotation-layer-name",
        label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Name'),
        placeholder: "",
        value: name,
        onChange: (v) => this.setState({ name: v }),
        validationErrors: !name ? [(0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Mandatory')] : [] }),

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        name: "annotation-layer-hide",
        label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Hide layer'),
        value: !show,
        onChange: (v) => this.setState({ show: !v }) }),

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_SelectControl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Annotation layer type'),
        hovered: true,
        description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Choose the annotation layer type'),
        label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Annotation layer type'),
        name: "annotation-layer-type",
        clearable: false,
        options: supportedAnnotationTypes,
        value: annotationType,
        onChange: this.handleAnnotationType }),

      supportedSourceTypes.length > 0 &&
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_explore_components_controls_SelectControl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ariaLabel: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Annotation source type'),
        hovered: true,
        description: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Choose the source of your annotations'),
        label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Annotation Source'),
        name: "annotation-source-type",
        options: supportedSourceTypes,
        value: sourceType,
        onChange: this.handleAnnotationSourceType,
        validationErrors: !sourceType ? [(0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Mandatory')] : [] }),


      this.renderValueConfiguration())),


      this.renderSliceConfiguration(),
      this.renderDisplayConfiguration()),

      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", { style: { display: 'flex', justifyContent: 'space-between' } },
      isNew ?
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, { buttonSize: "small", onClick: () => this.props.close() },
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Cancel')) :


      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, { buttonSize: "small", onClick: this.deleteAnnotation },
      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Remove')),


      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", null,
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        buttonSize: "small",
        disabled: !isValid,
        onClick: this.applyAnnotation },

      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('Apply')),


      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_14__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        buttonSize: "small",
        buttonStyle: "primary",
        disabled: !isValid,
        onClick: this.submitAnnotation },

      (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__.t)('OK'))))));





  }}


AnnotationLayer.propTypes = propTypes;
AnnotationLayer.defaultProps = defaultProps;

/***/ })

}]);