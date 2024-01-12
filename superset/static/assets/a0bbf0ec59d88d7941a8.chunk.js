"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[95],{9433:(e,t,a)=>{a.d(t,{CronPicker:()=>u});var n=a(73126),l=(a(67294),a(38179)),r=a(61988),i=a(51995),o=a(61247),s=a(11965);const d={everyText:(0,r.t)("every"),emptyMonths:(0,r.t)("every month"),emptyMonthDays:(0,r.t)("every day of the month"),emptyMonthDaysShort:(0,r.t)("day of the month"),emptyWeekDays:(0,r.t)("every day of the week"),emptyWeekDaysShort:(0,r.t)("day of the week"),emptyHours:(0,r.t)("every hour"),emptyMinutes:(0,r.t)("every minute"),emptyMinutesForHourPeriod:(0,r.t)("every"),yearOption:(0,r.t)("year"),monthOption:(0,r.t)("month"),weekOption:(0,r.t)("week"),dayOption:(0,r.t)("day"),hourOption:(0,r.t)("hour"),minuteOption:(0,r.t)("minute"),rebootOption:(0,r.t)("reboot"),prefixPeriod:(0,r.t)("Every"),prefixMonths:(0,r.t)("in"),prefixMonthDays:(0,r.t)("on"),prefixWeekDays:(0,r.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,r.t)("and"),prefixHours:(0,r.t)("at"),prefixMinutes:(0,r.t)(":"),prefixMinutesForHourPeriod:(0,r.t)("at"),suffixMinutesForHourPeriod:(0,r.t)("minute(s)"),errorInvalidCron:(0,r.t)("Invalid cron expression"),clearButtonText:(0,r.t)("Clear"),weekDays:[(0,r.t)("Sunday"),(0,r.t)("Monday"),(0,r.t)("Tuesday"),(0,r.t)("Wednesday"),(0,r.t)("Thursday"),(0,r.t)("Friday"),(0,r.t)("Saturday")],months:[(0,r.t)("January"),(0,r.t)("February"),(0,r.t)("March"),(0,r.t)("April"),(0,r.t)("May"),(0,r.t)("June"),(0,r.t)("July"),(0,r.t)("August"),(0,r.t)("September"),(0,r.t)("October"),(0,r.t)("November"),(0,r.t)("December")],altWeekDays:[(0,r.t)("SUN"),(0,r.t)("MON"),(0,r.t)("TUE"),(0,r.t)("WED"),(0,r.t)("THU"),(0,r.t)("FRI"),(0,r.t)("SAT")],altMonths:[(0,r.t)("JAN"),(0,r.t)("FEB"),(0,r.t)("MAR"),(0,r.t)("APR"),(0,r.t)("MAY"),(0,r.t)("JUN"),(0,r.t)("JUL"),(0,r.t)("AUG"),(0,r.t)("SEP"),(0,r.t)("OCT"),(0,r.t)("NOV"),(0,r.t)("DEC")]},u=(0,i.iK)((e=>(0,s.tZ)(l.ZP,{getPopupContainer:e=>e.parentElement},(0,s.tZ)(o.default,(0,n.Z)({locale:d},e)))))`
  .react-js-cron-field {
    margin-bottom: 0px;
  }
  .react-js-cron-select:not(.react-js-cron-custom-select) > div:first-of-type,
  .react-js-cron-custom-select {
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light4}} !important;
  }
  .react-js-cron-custom-select > div:first-of-type {
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
  .react-js-cron-custom-select .ant-select-selection-placeholder {
    flex: auto;
  }
  .react-js-cron-custom-select .ant-select-selection-overflow-item {
    align-self: center;
  }
`},12441:(e,t,a)=>{a.d(t,{r:()=>o}),a(67294);var n=a(51995),l=a(40987),r=a(11965);const i=(0,n.iK)(l.Z)`
  .ant-switch-checked {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  }
`,o=e=>(0,r.tZ)(i,e)},98978:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(11965),l=a(67294),r=a(80008),i=a.n(r),o=a(61988),s=a(4715);const d="GMT Standard Time",u="400px",c={"-300-240":["Eastern Standard Time","Eastern Daylight Time"],"-360-300":["Central Standard Time","Central Daylight Time"],"-420-360":["Mountain Standard Time","Mountain Daylight Time"],"-420-420":["Mountain Standard Time - Phoenix","Mountain Standard Time - Phoenix"],"-480-420":["Pacific Standard Time","Pacific Daylight Time"],"-540-480":["Alaska Standard Time","Alaska Daylight Time"],"-600-600":["Hawaii Standard Time","Hawaii Daylight Time"],60120:["Central European Time","Central European Daylight Time"],"00":[d,d],"060":["GMT Standard Time - London","British Summer Time"]},p=i()(),m=i()([2021,1]),T=i()([2021,7]),h=e=>m.tz(e).utcOffset().toString()+T.tz(e).utcOffset().toString(),v=e=>{var t,a;const n=h(e);return(p.tz(e).isDST()?null==(t=c[n])?void 0:t[1]:null==(a=c[n])?void 0:a[0])||e},E=i().tz.countries().map((e=>i().tz.zonesForCountry(e,!0))).flat(),_=[];E.forEach((e=>{_.find((t=>h(t.name)===h(e.name)))||_.push(e)}));const g=_.map((e=>({label:`GMT ${i().tz(p,e.name).format("Z")} (${v(e.name)})`,value:e.name,offsets:h(e.name),timezoneName:e.name}))),b=(e,t)=>i().tz(p,e.timezoneName).utcOffset()-i().tz(p,t.timezoneName).utcOffset();g.sort(b);const N=e=>{var t;return(null==(t=g.find((t=>t.offsets===h(e))))?void 0:t.value)||"Africa/Abidjan"};function f(e){let{onTimezoneChange:t,timezone:a,minWidth:r=u}=e;const d=(0,l.useMemo)((()=>N(a||i().tz.guess())),[a]);return(0,l.useEffect)((()=>{a!==d&&t(d)}),[d,t,a]),(0,n.tZ)(s.Ph,{ariaLabel:(0,o.t)("Timezone selector"),css:(0,n.iv)({minWidth:r},"",""),onChange:e=>t(e),value:d,options:g,sortComparator:b})}},20095:(e,t,a)=>{a.d(t,{j5:()=>H,KL:()=>W,ZP:()=>Y});var n=a(67294),l=a(61988),r=a(51995),i=a(11965),o=a(93185),s=a(31069),d=a(15926),u=a.n(d),c=a(34858),p=a(70707),m=a(9875),T=a(12441),h=a(74069),v=a(98978),E=a(87183),_=a(85633),g=a(14114),b=a(4715),N=a(42878),f=a(18451),Z=a(62948),y=a(9882),x=a(28216),S=a(9433);const O=e=>{let{value:t,onChange:a}=e;const o=(0,r.Fg)(),s=(0,n.useRef)(null),[d,u]=(0,n.useState)("picker"),c=(0,n.useCallback)((e=>u(e.target.value)),[]),p=(0,n.useCallback)((e=>{var t;a(e),null==(t=s.current)||t.setValue(e)}),[s,a]),T=(0,n.useCallback)((e=>{a(e.target.value)}),[a]),h=(0,n.useCallback)((()=>{var e;a((null==(e=s.current)?void 0:e.input.value)||"")}),[a]),[v,_]=(0,n.useState)();return(0,i.tZ)(n.Fragment,null,(0,i.tZ)(E.Y.Group,{onChange:c,value:d},(0,i.tZ)("div",{className:"inline-container add-margin"},(0,i.tZ)(E.Y,{value:"picker"}),(0,i.tZ)(S.CronPicker,{clearButton:!1,value:t,setValue:p,disabled:"picker"!==d,displayError:"picker"===d,onError:_})),(0,i.tZ)("div",{className:"inline-container add-margin"},(0,i.tZ)(E.Y,{value:"input"}),(0,i.tZ)("span",{className:"input-label"},(0,l.t)("CRON Schedule")),(0,i.tZ)(H,{className:"styled-input"},(0,i.tZ)("div",{className:"input-container"},(0,i.tZ)(m.II,{type:"text",name:"crontab",ref:s,style:v?{borderColor:o.colors.error.base}:{},placeholder:(0,l.t)("CRON expression"),disabled:"input"!==d,onBlur:T,onPressEnter:h}))))))},R=r.iK.div`
  margin-bottom: 10px;

  .input-container {
    textarea {
      height: auto;
    }
  }

  .inline-container {
    margin-bottom: 10px;

    .input-container {
      margin-left: 10px;
    }

    > div {
      margin: 0;
    }

    .delete-button {
      margin-left: 10px;
      padding-top: 3px;
    }
  }
`,A=e=>{let{setting:t=null,index:a,onUpdate:o,onRemove:s}=e;const{method:d,recipients:u,options:c}=t||{},[m,T]=(0,n.useState)(u||""),h=(0,r.Fg)();return t?(u&&m!==u&&T(u),(0,i.tZ)(R,null,(0,i.tZ)("div",{className:"inline-container"},(0,i.tZ)(H,null,(0,i.tZ)("div",{className:"input-container"},(0,i.tZ)(b.Ph,{ariaLabel:(0,l.t)("Delivery method"),onChange:e=>{if(T(""),o){const n={...t,method:e,recipients:""};o(a,n)}},placeholder:(0,l.t)("Select Delivery Method"),options:(c||[]).map((e=>({label:e,value:e}))),value:d}))),void 0!==d&&s?(0,i.tZ)("span",{role:"button",tabIndex:0,className:"delete-button",onClick:()=>s(a)},(0,i.tZ)(p.Z.Trash,{iconColor:h.colors.grayscale.base})):null),void 0!==d?(0,i.tZ)(H,null,(0,i.tZ)("div",{className:"control-label"},(0,l.t)(d)),(0,i.tZ)("div",{className:"input-container"},(0,i.tZ)("textarea",{name:"recipients",value:m,onChange:e=>{const{target:n}=e;if(T(n.value),o){const e={...t,recipients:n.value};o(a,e)}}})),(0,i.tZ)("div",{className:"helper"},(0,l.t)('Recipients are separated by "," or ";"'))):null)):null},C=["pivot_table_v2","table","paired_ttest"],D=["Email"],I="PNG",U=[{label:(0,l.t)("< (Smaller than)"),value:"<"},{label:(0,l.t)("> (Larger than)"),value:">"},{label:(0,l.t)("<= (Smaller or equal)"),value:"<="},{label:(0,l.t)(">= (Larger or equal)"),value:">="},{label:(0,l.t)("== (Is equal)"),value:"=="},{label:(0,l.t)("!= (Is not equal)"),value:"!="},{label:(0,l.t)("Not null"),value:"not null"}],$=[{label:(0,l.t)("None"),value:0},{label:(0,l.t)("30 days"),value:30},{label:(0,l.t)("60 days"),value:60},{label:(0,l.t)("90 days"),value:90}],X=(0,r.iK)(h.default)`
  max-width: 1200px;
  width: 100%;

  .ant-modal-body {
    overflow: initial;
  }
`,L=(0,r.iK)(y.V)`
  margin-left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,M=e=>i.iv`
  margin: auto ${2*e.gridUnit}px auto 0;
  color: ${e.colors.grayscale.base};
`,P=r.iK.div`
  display: flex;
  flex-direction: column;

  .control-label {
    margin-top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }

  .header-section {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    width: 100%;
    padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  }

  .column-section {
    display: flex;
    flex: 1 1 auto;

    .column {
      flex: 1 1 auto;
      min-width: calc(33.33% - ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px);
      padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;

      .async-select {
        margin: 10px 0 20px;
      }

      &.condition {
        border-right: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
      }

      &.message {
        border-left: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
      }
    }
  }

  .inline-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    &.wrap {
      flex-wrap: wrap;
    }

    > div {
      flex: 1 1 auto;
    }

    &.add-margin {
      margin-bottom: 5px;
    }

    .styled-input {
      margin: 0 0 0 10px;

      input {
        flex: 0 0 auto;
      }
    }
  }
`,k=r.iK.div`
  display: flex;
  align-items: center;
  margin: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px auto
    ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px auto;

  h4 {
    margin: 0;
  }

  .required {
    margin-left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
  }
`,w=r.iK.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  .switch-label {
    margin-left: 10px;
  }
`,H=r.iK.div`
  flex: 1;
  margin-top: 0;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  .helper {
    display: block;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    padding: ${e=>{let{theme:t}=e;return t.gridUnit}}px 0;
    text-align: left;
  }

  .required {
    margin-left: ${e=>{let{theme:t}=e;return t.gridUnit/2}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
  }

  .input-container {
    display: flex;
    align-items: center;

    > div {
      width: 100%;
    }

    label {
      display: flex;
      margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    }

    i {
      margin: 0 ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  input[disabled] {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  }

  textarea {
    height: 300px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${e=>{let{theme:t}=e;return t.gridUnit}}px
      ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    border-style: none;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;

    &[name='description'] {
      flex: 1 1 auto;
    }
  }

  .input-label {
    margin-left: 10px;
  }
`,z=(0,r.iK)(E.Y)`
  display: block;
  line-height: ${e=>{let{theme:t}=e;return 7*t.gridUnit}}px;
`,j=(0,r.iK)(E.Y.Group)`
  margin-left: ${e=>{let{theme:t}=e;return 5.5*t.gridUnit}}px;
`,G=(0,r.iK)(b.r4)`
  margin-top: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
`,q=r.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.primary.dark1}};
  cursor: pointer;

  i {
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  &.disabled {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
    cursor: default;
  }
`,K=r.iK.div`
  .inline-container .input-container {
    margin-left: 0;
  }
`,F=e=>i.iv`
  margin-right: ${3*e.gridUnit}px;
`,W={ADD_NOTIFICATION_METHOD_TEXT:(0,l.t)("Add notification method"),ADD_DELIVERY_METHOD_TEXT:(0,l.t)("Add delivery method"),SAVE_TEXT:(0,l.t)("Save"),ADD_TEXT:(0,l.t)("Add"),EDIT_REPORT_TEXT:(0,l.t)("Edit Report"),EDIT_ALERT_TEXT:(0,l.t)("Edit Alert"),ADD_REPORT_TEXT:(0,l.t)("Add Report"),ADD_ALERT_TEXT:(0,l.t)("Add Alert"),REPORT_NAME_TEXT:(0,l.t)("Report name"),ALERT_NAME_TEXT:(0,l.t)("Alert name"),OWNERS_TEXT:(0,l.t)("Owners"),DESCRIPTION_TEXT:(0,l.t)("Description"),ACTIVE_TEXT:(0,l.t)("Active"),ALERT_CONDITION_TEXT:(0,l.t)("Alert condition"),DATABASE_TEXT:(0,l.t)("Database"),SQL_QUERY_TEXT:(0,l.t)("SQL Query"),SQL_QUERY_TOOLTIP:(0,l.t)("The result of this query should be a numeric-esque value"),TRIGGER_ALERT_IF_TEXT:(0,l.t)("Trigger Alert If..."),CONDITION_TEXT:(0,l.t)("Condition"),VALUE_TEXT:(0,l.t)("Value"),REPORT_SCHEDULE_TEXT:(0,l.t)("Report schedule"),ALERT_CONDITION_SCHEDULE_TEXT:(0,l.t)("Alert condition schedule"),TIMEZONE_TEXT:(0,l.t)("Timezone"),SCHEDULE_SETTINGS_TEXT:(0,l.t)("Schedule settings"),LOG_RETENTION_TEXT:(0,l.t)("Log retention"),WORKING_TIMEOUT_TEXT:(0,l.t)("Working timeout"),TIME_IN_SECONDS_TEXT:(0,l.t)("Time in seconds"),SECONDS_TEXT:(0,l.t)("seconds"),GRACE_PERIOD_TEXT:(0,l.t)("Grace period"),MESSAGE_CONTENT_TEXT:(0,l.t)("Message content"),DASHBOARD_TEXT:(0,l.t)("Dashboard"),CHART_TEXT:(0,l.t)("Chart"),SEND_AS_PNG_TEXT:(0,l.t)("Send as PNG"),SEND_AS_CSV_TEXT:(0,l.t)("Send as CSV"),SEND_AS_TEXT:(0,l.t)("Send as text"),IGNORE_CACHE_TEXT:(0,l.t)("Ignore cache when generating report"),CUSTOM_SCREENSHOT_WIDTH_TEXT:(0,l.t)("Screenshot width"),CUSTOM_SCREENSHOT_WIDTH_PLACEHOLDER_TEXT:(0,l.t)("Input custom width in pixels"),NOTIFICATION_METHOD_TEXT:(0,l.t)("Notification method")},V=e=>{let{status:t="active",onClick:a}=e;return"hidden"===t?null:(0,i.tZ)(q,{className:t,onClick:()=>{"disabled"!==t&&a()}},(0,i.tZ)("i",{className:"fa fa-plus"})," ","active"===t?W.ADD_NOTIFICATION_METHOD_TEXT:W.ADD_DELIVERY_METHOD_TEXT)},Y=(0,g.ZP)((e=>{var t,a,r,d,h,g,y,S;let{addDangerToast:R,onAdd:q,onHide:Y,show:B,alert:Q=null,isReport:J=!1,addSuccessToast:ee}=e;const te=(0,x.v9)((e=>e.user)),ae=(0,f.c)(),ne=(null==ae?void 0:ae.ALERT_REPORTS_NOTIFICATION_METHODS)||D,[le,re]=(0,n.useState)(!0),[ie,oe]=(0,n.useState)(),[se,de]=(0,n.useState)(!0),[ue,ce]=(0,n.useState)("dashboard"),[pe,me]=(0,n.useState)(I),[Te,he]=(0,n.useState)(!1),[ve,Ee]=(0,n.useState)(!1);(0,n.useEffect)((()=>{Ee("dashboard"===ue||"chart"===ue&&"PNG"===pe)}),[ue,pe]);const[_e,ge]=(0,n.useState)(!1),[be,Ne]=(0,n.useState)([]),[fe,Ze]=(0,n.useState)([]),[ye,xe]=(0,n.useState)([]),[Se,Oe]=(0,n.useState)(""),Re=null!==Q,Ae="chart"===ue&&((0,o.cr)(o.TT.ALERTS_ATTACH_REPORTS)||J),[Ce,De]=(0,n.useState)("active"),[Ie,Ue]=(0,n.useState)([]),{ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT:$e,ALERT_REPORTS_DEFAULT_CRON_VALUE:Xe,ALERT_REPORTS_DEFAULT_RETENTION:Le}=(0,x.v9)((e=>{var t,a,n,l;const r=null==(t=e.common)?void 0:t.conf;return{ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT:null!=(a=null==r?void 0:r.ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT)?a:3600,ALERT_REPORTS_DEFAULT_CRON_VALUE:null!=(n=null==r?void 0:r.ALERT_REPORTS_DEFAULT_CRON_VALUE)?n:"0 * * * *",ALERT_REPORTS_DEFAULT_RETENTION:null!=(l=null==r?void 0:r.ALERT_REPORTS_DEFAULT_RETENTION)?l:90}})),Me={active:!0,creation_method:"alerts_reports",crontab:Xe,log_retention:Le,working_timeout:$e,name:"",owners:[],recipients:[],sql:"",validator_config_json:{},validator_type:"",force_screenshot:!1,grace_period:void 0},Pe=(e,t)=>{const a=Ie.slice();a[e]=t,Ue(a),void 0!==t.method&&"hidden"!==Ce&&De("active")},ke=e=>{const t=Ie.slice();t.splice(e,1),Ue(t),De("active")},{state:{loading:we,resource:He,error:ze},fetchResource:je,createResource:Ge,updateResource:qe,clearError:Ke}=(0,c.LE)("report",(0,l.t)("report"),R),Fe=()=>{Ke(),de(!0),Y(),Ue([]),oe({...Me}),De("active")},We=(0,n.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const n=u().encode({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/created_by?q=${n}`}).then((e=>({data:e.json.result.map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),Ve=(0,n.useCallback)((e=>{const t=e||(null==ie?void 0:ie.database);if(!t||t.label)return null;let a;return be.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a}),[null==ie?void 0:ie.database,be]),Ye=(e,t)=>{oe((a=>({...a,[e]:t})))},Be=(0,n.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const n=u().encode({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/database?q=${n}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return Ne(t),{data:t,totalCount:e.json.count}}))}),[]),Qe=(null==ie?void 0:ie.database)&&!ie.database.label;(0,n.useEffect)((()=>{Qe&&Ye("database",Ve())}),[Qe,Ve]);const Je=(0,n.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const n=u().encode_uri({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/dashboard?q=${n}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return Ze(t),{data:t,totalCount:e.json.count}}))}),[]),et=e=>{const t=e||(null==ie?void 0:ie.dashboard);if(!t||t.label)return null;let a;return fe.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a},tt=(0,n.useCallback)((e=>{const t=e||(null==ie?void 0:ie.chart);if(!t||t.label)return null;let a;return ye.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a}),[ye,null==ie?void 0:ie.chart]),at=(null==ie?void 0:ie.chart)&&!(null!=ie&&ie.chart.label);(0,n.useEffect)((()=>{at&&Ye("chart",tt())}),[tt,at]);const nt=(0,n.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const n=u().encode_uri({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/chart?q=${n}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return xe(t),{data:t,totalCount:e.json.count}}))}),[]),lt=e=>{const{target:{type:t,value:a,name:n}}=e,l="number"===t?parseInt(a,10)||null:a;Ye(n,l)},rt=e=>{const{target:t}=e,a=+t.value;Ye(t.name,0===a?null:a?Math.max(a,1):a)};(0,n.useEffect)((()=>{if(Re&&(null==ie||!ie.id||(null==Q?void 0:Q.id)!==ie.id||se&&B)){if(null!==(null==Q?void 0:Q.id)&&!we&&!ze){const e=Q.id||0;je(e)}}else!Re&&(!ie||ie.id||se&&B)&&(oe({...Me,owners:te?[{value:te.userId,label:`${te.firstName} ${te.lastName}`}]:[]}),Ue([]),De("active"))}),[Q]),(0,n.useEffect)((()=>{if(He){const e=(He.recipients||[]).map((e=>{const t="string"==typeof e.recipient_config_json?JSON.parse(e.recipient_config_json):{};return{method:e.type,recipients:t.target||e.recipient_config_json,options:ne}}));Ue(e),De(e.length===ne.length?"hidden":"active"),ce(He.chart?"chart":"dashboard"),me(He.chart&&He.report_format||I);const t="string"==typeof He.validator_config_json?JSON.parse(He.validator_config_json):He.validator_config_json;ge("not null"===He.validator_type),He.chart&&Oe(He.chart.viz_type),he(He.force_screenshot),oe({...He,chart:He.chart?tt(He.chart)||{value:He.chart.id,label:He.chart.slice_name}:void 0,dashboard:He.dashboard?et(He.dashboard)||{value:He.dashboard.id,label:He.dashboard.dashboard_title}:void 0,database:He.database?Ve(He.database)||{value:He.database.id,label:He.database.database_name}:void 0,owners:((null==Q?void 0:Q.owners)||[]).map((e=>({value:e.value||e.id,label:e.label||`${e.first_name} ${e.last_name}`}))),validator_config_json:"not null"===He.validator_type?{op:"not null"}:t})}}),[He]);const it=ie||{};return(0,n.useEffect)((()=>{var e,t,a,n,l,r;null!=ie&&null!=(e=ie.name)&&e.length&&null!=ie&&null!=(t=ie.owners)&&t.length&&null!=ie&&null!=(a=ie.crontab)&&a.length&&void 0!==(null==ie?void 0:ie.working_timeout)&&("dashboard"===ue&&null!=ie&&ie.dashboard||"chart"===ue&&null!=ie&&ie.chart)&&(()=>{if(!Ie.length)return!1;let e=!1;return Ie.forEach((t=>{var a;t.method&&null!=(a=t.recipients)&&a.length&&(e=!0)})),e})()&&(J||ie.database&&null!=(n=ie.sql)&&n.length&&(_e||null!=(l=ie.validator_config_json)&&l.op)&&(_e||void 0!==(null==(r=ie.validator_config_json)?void 0:r.threshold)))?re(!1):re(!0)}),[it.name,it.owners,it.database,it.sql,it.validator_config_json,it.crontab,it.working_timeout,it.dashboard,it.chart,ue,Ie,_e]),se&&B&&de(!1),(0,i.tZ)(X,{className:"no-content-padding",responsive:!0,disablePrimaryButton:le,onHandledPrimaryAction:()=>{var e,t,a;const n=[];Ie.forEach((e=>{e.method&&e.recipients.length&&n.push({recipient_config_json:{target:e.recipients},type:e.method})}));const r="chart"===ue&&!J,i={...ie,type:J?"Report":"Alert",force_screenshot:r||Te,validator_type:_e?"not null":"operator",validator_config_json:_e?{}:null==ie?void 0:ie.validator_config_json,chart:"chart"===ue?null==ie||null==(e=ie.chart)?void 0:e.value:null,dashboard:"dashboard"===ue?null==ie||null==(t=ie.dashboard)?void 0:t.value:null,database:null==ie||null==(a=ie.database)?void 0:a.value,owners:((null==ie?void 0:ie.owners)||[]).map((e=>e.value||e.id)),recipients:n,report_format:"dashboard"===ue?I:pe||I};if(i.recipients&&!i.recipients.length&&delete i.recipients,i.context_markdown="string",Re){if(null!=ie&&ie.id){const e=ie.id;delete i.id,delete i.created_by,delete i.last_eval_dttm,delete i.last_state,delete i.last_value,delete i.last_value_row_json,qe(e,i).then((e=>{e&&(ee((0,l.t)("%s updated",i.type)),q&&q(),Fe())}))}}else ie&&Ge(i).then((e=>{e&&(ee((0,l.t)("%s updated",i.type)),q&&q(e),Fe())}))},onHide:Fe,primaryButtonName:Re?W.SAVE_TEXT:W.ADD_TEXT,show:B,width:"100%",maxWidth:"1450px",title:(0,i.tZ)("h4",null,Re?(0,i.tZ)(p.Z.EditAlt,{css:M}):(0,i.tZ)(p.Z.PlusLarge,{css:M}),Re&&J?W.EDIT_REPORT_TEXT:Re?W.EDIT_ALERT_TEXT:J?W.ADD_REPORT_TEXT:W.ADD_ALERT_TEXT)},(0,i.tZ)(P,null,(0,i.tZ)("div",{className:"header-section"},(0,i.tZ)(H,null,(0,i.tZ)("div",{className:"control-label"},J?W.REPORT_NAME_TEXT:W.ALERT_NAME_TEXT,(0,i.tZ)("span",{className:"required"},"*")),(0,i.tZ)("div",{className:"input-container"},(0,i.tZ)("input",{type:"text",name:"name",value:ie?ie.name:"",placeholder:J?W.REPORT_NAME_TEXT:W.ALERT_NAME_TEXT,onChange:lt,css:F}))),(0,i.tZ)(H,null,(0,i.tZ)("div",{className:"control-label"},W.OWNERS_TEXT,(0,i.tZ)("span",{className:"required"},"*")),(0,i.tZ)("div",{className:"input-container"},(0,i.tZ)(b.qb,{ariaLabel:W.OWNERS_TEXT,allowClear:!0,name:"owners",mode:"multiple",value:(null==ie?void 0:ie.owners)||[],options:We,onChange:e=>{Ye("owners",e||[])},css:F}))),(0,i.tZ)(H,null,(0,i.tZ)("div",{className:"control-label"},W.DESCRIPTION_TEXT),(0,i.tZ)("div",{className:"input-container"},(0,i.tZ)("input",{type:"text",name:"description",value:ie&&ie.description||"",placeholder:W.DESCRIPTION_TEXT,onChange:lt,css:F}))),(0,i.tZ)(w,null,(0,i.tZ)(T.r,{onChange:e=>{Ye("active",e)},checked:!ie||ie.active}),(0,i.tZ)("div",{className:"switch-label"},W.ACTIVE_TEXT))),(0,i.tZ)("div",{className:"column-section"},!J&&(0,i.tZ)("div",{className:"column condition"},(0,i.tZ)(k,null,(0,i.tZ)("h4",null,W.ALERT_CONDITION_TEXT)),(0,i.tZ)(H,null,(0,i.tZ)("div",{className:"control-label"},W.DATABASE_TEXT,(0,i.tZ)("span",{className:"required"},"*")),(0,i.tZ)("div",{className:"input-container"},(0,i.tZ)(b.qb,{ariaLabel:W.DATABASE_TEXT,name:"source",value:null!=ie&&null!=(t=ie.database)&&t.label&&null!=ie&&null!=(a=ie.database)&&a.value?{value:ie.database.value,label:ie.database.label}:void 0,options:Be,onChange:e=>{Ye("database",e||[])}}))),(0,i.tZ)(H,null,(0,i.tZ)("div",{className:"control-label"},W.SQL_QUERY_TEXT,(0,i.tZ)(L,{tooltip:W.SQL_QUERY_TOOLTIP}),(0,i.tZ)("span",{className:"required"},"*")),(0,i.tZ)(N.Z,{name:"sql",language:"sql",offerEditInModal:!1,minLines:15,maxLines:15,onChange:e=>{Ye("sql",e||"")},readOnly:!1,initialValue:null==He?void 0:He.sql,key:null==ie?void 0:ie.id})),(0,i.tZ)("div",{className:"inline-container wrap"},(0,i.tZ)(H,null,(0,i.tZ)("div",{className:"control-label",css:F},W.TRIGGER_ALERT_IF_TEXT,(0,i.tZ)("span",{className:"required"},"*")),(0,i.tZ)("div",{className:"input-container"},(0,i.tZ)(b.Ph,{ariaLabel:W.CONDITION_TEXT,onChange:e=>{var t;ge("not null"===e);const a={op:e,threshold:ie?null==(t=ie.validator_config_json)?void 0:t.threshold:void 0};Ye("validator_config_json",a)},placeholder:"Condition",value:(null==ie||null==(r=ie.validator_config_json)?void 0:r.op)||void 0,options:U,css:F}))),(0,i.tZ)(H,null,(0,i.tZ)("div",{className:"control-label"},W.VALUE_TEXT,(0,i.tZ)("span",{className:"required"},"*")),(0,i.tZ)("div",{className:"input-container"},(0,i.tZ)("input",{type:"number",name:"threshold",disabled:_e,value:void 0!==(null==ie||null==(d=ie.validator_config_json)?void 0:d.threshold)?ie.validator_config_json.threshold:"",placeholder:W.VALUE_TEXT,onChange:e=>{var t;const{target:a}=e,n={op:ie?null==(t=ie.validator_config_json)?void 0:t.op:void 0,threshold:a.value};Ye("validator_config_json",n)}}))))),(0,i.tZ)("div",{className:"column schedule"},(0,i.tZ)(k,null,(0,i.tZ)("h4",null,J?W.REPORT_SCHEDULE_TEXT:W.ALERT_CONDITION_SCHEDULE_TEXT),(0,i.tZ)("span",{className:"required"},"*")),(0,i.tZ)(O,{value:(null==ie?void 0:ie.crontab)||Xe,onChange:e=>Ye("crontab",e)}),(0,i.tZ)("div",{className:"control-label"},W.TIMEZONE_TEXT),(0,i.tZ)("div",{className:"input-container",css:e=>(e=>i.iv`
  margin: ${3*e.gridUnit}px 0;
`)(e)},(0,i.tZ)(v.Z,{onTimezoneChange:e=>{Ye("timezone",e)},timezone:null==ie?void 0:ie.timezone,minWidth:"100%"})),(0,i.tZ)(k,null,(0,i.tZ)("h4",null,W.SCHEDULE_SETTINGS_TEXT)),(0,i.tZ)(H,null,(0,i.tZ)("div",{className:"control-label"},W.LOG_RETENTION_TEXT,(0,i.tZ)("span",{className:"required"},"*")),(0,i.tZ)("div",{className:"input-container"},(0,i.tZ)(b.Ph,{ariaLabel:W.LOG_RETENTION_TEXT,placeholder:W.LOG_RETENTION_TEXT,onChange:e=>{Ye("log_retention",e)},value:"number"==typeof(null==ie?void 0:ie.log_retention)?null==ie?void 0:ie.log_retention:Le,options:$,sortComparator:(0,_.mj)("value")}))),(0,i.tZ)(H,null,(0,i.tZ)("div",{className:"control-label"},W.WORKING_TIMEOUT_TEXT,(0,i.tZ)("span",{className:"required"},"*")),(0,i.tZ)("div",{className:"input-container"},(0,i.tZ)("input",{type:"number",min:"1",name:"working_timeout",value:(null==ie?void 0:ie.working_timeout)||"",placeholder:W.TIME_IN_SECONDS_TEXT,onChange:rt}),(0,i.tZ)("span",{className:"input-label"},W.SECONDS_TEXT))),!J&&(0,i.tZ)(H,null,(0,i.tZ)("div",{className:"control-label"},W.GRACE_PERIOD_TEXT),(0,i.tZ)("div",{className:"input-container"},(0,i.tZ)("input",{type:"number",min:"1",name:"grace_period",value:(null==ie?void 0:ie.grace_period)||"",placeholder:W.TIME_IN_SECONDS_TEXT,onChange:rt}),(0,i.tZ)("span",{className:"input-label"},W.SECONDS_TEXT)))),(0,i.tZ)("div",{className:"column message"},(0,i.tZ)(k,null,(0,i.tZ)("h4",null,W.MESSAGE_CONTENT_TEXT),(0,i.tZ)("span",{className:"required"},"*")),(0,i.tZ)(E.Y.Group,{onChange:e=>{const{target:t}=e;he(!1),setTimeout((()=>ce(t.value)),200)},value:ue},(0,i.tZ)(z,{value:"dashboard"},W.DASHBOARD_TEXT),(0,i.tZ)(z,{value:"chart"},W.CHART_TEXT)),"chart"===ue?(0,i.tZ)(b.qb,{ariaLabel:W.CHART_TEXT,name:"chart",value:null!=ie&&null!=(h=ie.chart)&&h.label&&null!=ie&&null!=(g=ie.chart)&&g.value?{value:ie.chart.value,label:ie.chart.label}:void 0,options:nt,onChange:e=>{(e=>{s.Z.get({endpoint:`/api/v1/chart/${e.value}`}).then((e=>Oe(e.json.result.viz_type)))})(e),Ye("chart",e||void 0),Ye("dashboard",null)}}):(0,i.tZ)(b.qb,{ariaLabel:W.DASHBOARD_TEXT,name:"dashboard",value:null!=ie&&null!=(y=ie.dashboard)&&y.label&&null!=ie&&null!=(S=ie.dashboard)&&S.value?{value:ie.dashboard.value,label:ie.dashboard.label}:void 0,options:Je,onChange:e=>{Ye("dashboard",e||void 0),Ye("chart",null)}}),Ae&&(0,i.tZ)(n.Fragment,null,(0,i.tZ)("div",{className:"inline-container"},(0,i.tZ)(j,{onChange:e=>{const{target:t}=e;me(t.value)},value:pe},(0,i.tZ)(z,{value:"PNG"},W.SEND_AS_PNG_TEXT),(0,i.tZ)(z,{value:"CSV"},W.SEND_AS_CSV_TEXT),C.includes(Se)&&(0,i.tZ)(z,{value:"TEXT"},W.SEND_AS_TEXT)))),ve&&(0,i.tZ)(H,null,(0,i.tZ)("div",{className:"control-label",css:Z.yk},W.CUSTOM_SCREENSHOT_WIDTH_TEXT),(0,i.tZ)("div",{className:"input-container"},(0,i.tZ)(m.II,{type:"number",name:"custom_width",value:(null==ie?void 0:ie.custom_width)||"",placeholder:W.CUSTOM_SCREENSHOT_WIDTH_PLACEHOLDER_TEXT,onChange:lt}))),(J||"dashboard"===ue)&&(0,i.tZ)("div",{className:"inline-container"},(0,i.tZ)(G,{className:"checkbox",checked:Te,onChange:e=>{he(e.target.checked)}},W.IGNORE_CACHE_TEXT)),(0,i.tZ)(k,null,(0,i.tZ)("h4",null,W.NOTIFICATION_METHOD_TEXT),(0,i.tZ)("span",{className:"required"},"*")),Ie.map(((e,t)=>(0,i.tZ)(K,null,(0,i.tZ)(A,{setting:e,index:t,key:`NotificationMethod-${t}`,onUpdate:Pe,onRemove:ke})))),(0,i.tZ)(V,{status:Ce,onClick:()=>{const e=Ie.slice();e.push({recipients:"",options:ne}),Ue(e),De(e.length===ne.length?"hidden":"disabled")}})))))}))},62948:(e,t,a)=>{a.d(t,{E5:()=>Z,G:()=>h,Ks:()=>f,Mv:()=>p,OD:()=>E,Su:()=>_,aQ:()=>N,gH:()=>y,gt:()=>v,kq:()=>b,nn:()=>c,oA:()=>d,oo:()=>m,xZ:()=>T,yk:()=>g,zV:()=>u});var n=a(51995),l=a(11965),r=a(74069),i=a(35932),o=a(87183),s=a(9433);const d=(0,n.iK)(r.default)`
  .ant-modal-body {
    padding: 0;
  }
`,u=n.iK.div`
  padding: ${e=>{let{theme:t}=e;return`${3*t.gridUnit}px ${4*t.gridUnit}px ${2*t.gridUnit}px`}};
  label {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }
`,c=n.iK.div`
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  padding: ${e=>{let{theme:t}=e;return`${4*t.gridUnit}px ${4*t.gridUnit}px ${6*t.gridUnit}px`}};
  .ant-select {
    width: 100%;
  }
  .control-label {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }
`,p=n.iK.span`
  span {
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
`,m=n.iK.div`
  margin-bottom: ${e=>{let{theme:t}=e;return 7*t.gridUnit}}px;

  h4 {
    margin-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  }
`,T=(0,n.iK)(s.CronPicker)`
  margin-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  width: ${e=>{let{theme:t}=e;return 120*t.gridUnit}}px;
`,h=n.iK.p`
  color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
`,v=l.iv`
  margin-bottom: 0;
`,E=(0,n.iK)(i.Z)`
  width: ${e=>{let{theme:t}=e;return 40*t.gridUnit}}px;
`,_=e=>l.iv`
  margin: ${3*e.gridUnit}px 0 ${2*e.gridUnit}px;
`,g=e=>l.iv`
  margin: ${3*e.gridUnit}px 0 ${2*e.gridUnit}px;
`,b=e=>l.iv`
  margin: ${3*e.gridUnit}px 0;
`,N=n.iK.div`
  margin: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px 0
    ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
`,f=(0,n.iK)(o.Y)`
  display: block;
  line-height: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
`,Z=(0,n.iK)(o.Y.Group)`
  margin-left: ${e=>{let{theme:t}=e;return.5*t.gridUnit}}px;
`,y=e=>l.iv`
  border: ${e.colors.error.base} 1px solid;
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px;
  margin-top: 0;
  color: ${e.colors.error.dark2};
  .ant-alert-message {
    font-size: ${e.typography.sizes.m}px;
    font-weight: bold;
  }
  .ant-alert-description {
    font-size: ${e.typography.sizes.m}px;
    line-height: ${4*e.gridUnit}px;
    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`}}]);
//# sourceMappingURL=a0bbf0ec59d88d7941a8.chunk.js.map