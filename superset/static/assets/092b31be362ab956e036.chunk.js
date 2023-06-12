"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9563],{9433:(e,t,a)=>{a.d(t,{CronPicker:()=>d});var l=a(5872),n=a.n(l),r=(a(67294),a(38179)),o=a(55867),i=a(51995),s=a(61247),c=a(11965);const u={everyText:(0,o.t)("every"),emptyMonths:(0,o.t)("every month"),emptyMonthDays:(0,o.t)("every day of the month"),emptyMonthDaysShort:(0,o.t)("day of the month"),emptyWeekDays:(0,o.t)("every day of the week"),emptyWeekDaysShort:(0,o.t)("day of the week"),emptyHours:(0,o.t)("every hour"),emptyMinutes:(0,o.t)("every minute"),emptyMinutesForHourPeriod:(0,o.t)("every"),yearOption:(0,o.t)("year"),monthOption:(0,o.t)("month"),weekOption:(0,o.t)("week"),dayOption:(0,o.t)("day"),hourOption:(0,o.t)("hour"),minuteOption:(0,o.t)("minute"),rebootOption:(0,o.t)("reboot"),prefixPeriod:(0,o.t)("Every"),prefixMonths:(0,o.t)("in"),prefixMonthDays:(0,o.t)("on"),prefixWeekDays:(0,o.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,o.t)("and"),prefixHours:(0,o.t)("at"),prefixMinutes:(0,o.t)(":"),prefixMinutesForHourPeriod:(0,o.t)("at"),suffixMinutesForHourPeriod:(0,o.t)("minute(s)"),errorInvalidCron:(0,o.t)("Invalid cron expression"),clearButtonText:(0,o.t)("Clear"),weekDays:[(0,o.t)("Sunday"),(0,o.t)("Monday"),(0,o.t)("Tuesday"),(0,o.t)("Wednesday"),(0,o.t)("Thursday"),(0,o.t)("Friday"),(0,o.t)("Saturday")],months:[(0,o.t)("January"),(0,o.t)("February"),(0,o.t)("March"),(0,o.t)("April"),(0,o.t)("May"),(0,o.t)("June"),(0,o.t)("July"),(0,o.t)("August"),(0,o.t)("September"),(0,o.t)("October"),(0,o.t)("November"),(0,o.t)("December")],altWeekDays:[(0,o.t)("SUN"),(0,o.t)("MON"),(0,o.t)("TUE"),(0,o.t)("WED"),(0,o.t)("THU"),(0,o.t)("FRI"),(0,o.t)("SAT")],altMonths:[(0,o.t)("JAN"),(0,o.t)("FEB"),(0,o.t)("MAR"),(0,o.t)("APR"),(0,o.t)("MAY"),(0,o.t)("JUN"),(0,o.t)("JUL"),(0,o.t)("AUG"),(0,o.t)("SEP"),(0,o.t)("OCT"),(0,o.t)("NOV"),(0,o.t)("DEC")]},d=(0,i.iK)((e=>(0,c.tZ)(r.ZP,{getPopupContainer:e=>e.parentElement},(0,c.tZ)(s.default,n()({locale:u},e)))))`
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
`},29848:(e,t,a)=>{a.d(t,{Z:()=>c}),a(67294);var l=a(51995),n=a(58593),r=a(70163),o=a(11965);const i=l.iK.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
      }
    }
  }
`,s=l.iK.span`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`;function c(e){let{actions:t}=e;return(0,o.tZ)(i,{className:"actions"},t.map(((e,t)=>{const a=r.Z[e.icon];return e.tooltip?(0,o.tZ)(n.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,o.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,o.tZ)(a,null))):(0,o.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,o.tZ)(a,null))})))}},73192:(e,t,a)=>{a.d(t,{r:()=>i}),a(67294);var l=a(51995),n=a(40987),r=a(11965);const o=(0,l.iK)(n.Z)`
  .ant-switch-checked {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  }
`,i=e=>(0,r.tZ)(o,e)},98978:(e,t,a)=>{a.d(t,{Z:()=>Z});var l=a(11965),n=a(67294),r=a(80008),o=a.n(r),i=a(55867),s=a(4715);const c="GMT Standard Time",u="400px",d={"-300-240":["Eastern Standard Time","Eastern Daylight Time"],"-360-300":["Central Standard Time","Central Daylight Time"],"-420-360":["Mountain Standard Time","Mountain Daylight Time"],"-420-420":["Mountain Standard Time - Phoenix","Mountain Standard Time - Phoenix"],"-480-420":["Pacific Standard Time","Pacific Daylight Time"],"-540-480":["Alaska Standard Time","Alaska Daylight Time"],"-600-600":["Hawaii Standard Time","Hawaii Daylight Time"],60120:["Central European Time","Central European Daylight Time"],"00":[c,c],"060":["GMT Standard Time - London","British Summer Time"]},p=o()(),m=o()([2021,1]),h=o()([2021,7]),T=e=>m.tz(e).utcOffset().toString()+h.tz(e).utcOffset().toString(),v=e=>{var t,a;const l=T(e);return(p.tz(e).isDST()?null==(t=d[l])?void 0:t[1]:null==(a=d[l])?void 0:a[0])||e},g=o().tz.countries().map((e=>o().tz.zonesForCountry(e,!0))).flat(),E=[];g.forEach((e=>{E.find((t=>T(t.name)===T(e.name)))||E.push(e)}));const _=E.map((e=>({label:`GMT ${o().tz(p,e.name).format("Z")} (${v(e.name)})`,value:e.name,offsets:T(e.name),timezoneName:e.name}))),b=(e,t)=>o().tz(p,e.timezoneName).utcOffset()-o().tz(p,t.timezoneName).utcOffset();function Z(e){let{onTimezoneChange:t,timezone:a,minWidth:r=u}=e;const c=(0,n.useMemo)((()=>(e=>{var t;return(null==(t=_.find((t=>t.offsets===T(e))))?void 0:t.value)||"Africa/Abidjan"})(a||o().tz.guess())),[a]);return(0,n.useEffect)((()=>{a!==c&&t(c)}),[c,t,a]),(0,l.tZ)(s.Ph,{ariaLabel:(0,i.t)("Timezone selector"),css:(0,l.iv)({minWidth:r},"",""),onChange:e=>t(e),value:c,options:_,sortComparator:b})}_.sort(b)},94222:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(51995),n=a(55867),r=(a(67294),a(58593)),o=a(70163),i=a(90335),s=a(11965);function c(e,t,a){switch(e){case i.Z.Working:return a.colors.primary.base;case i.Z.Error:return a.colors.error.base;case i.Z.Success:return t?a.colors.success.base:a.colors.alert.base;case i.Z.Noop:return a.colors.success.base;case i.Z.Grace:return a.colors.alert.base;default:return a.colors.grayscale.base}}function u(e){let{state:t,isReportEnabled:a=!1}=e;const u=(0,l.Fg)(),d={icon:o.Z.Check,label:"",status:""};switch(t){case i.Z.Success:d.icon=a?o.Z.Check:o.Z.AlertSolidSmall,d.label=a?(0,n.t)("Report sent"):(0,n.t)("Alert triggered, notification sent"),d.status=i.Z.Success;break;case i.Z.Working:d.icon=o.Z.Running,d.label=a?(0,n.t)("Report sending"):(0,n.t)("Alert running"),d.status=i.Z.Working;break;case i.Z.Error:d.icon=o.Z.XSmall,d.label=a?(0,n.t)("Report failed"):(0,n.t)("Alert failed"),d.status=i.Z.Error;break;case i.Z.Noop:d.icon=o.Z.Check,d.label=(0,n.t)("Nothing triggered"),d.status=i.Z.Noop;break;case i.Z.Grace:d.icon=o.Z.AlertSolidSmall,d.label=(0,n.t)("Alert Triggered, In Grace Period"),d.status=i.Z.Grace;break;default:d.icon=o.Z.Check,d.label=(0,n.t)("Nothing triggered"),d.status=i.Z.Noop}const p=d.icon;return(0,s.tZ)(r.u,{title:d.label,placement:"bottomLeft"},(0,s.tZ)(p,{iconColor:c(d.status,a,u)}))}},90335:(e,t,a)=>{var l,n;a.d(t,{Z:()=>l,u:()=>n}),function(e){e.Success="Success",e.Working="Working",e.Error="Error",e.Noop="Not triggered",e.Grace="On Grace"}(l||(l={})),function(e){e.Email="Email",e.Slack="Slack"}(n||(n={}))},2226:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ae});var l=a(78580),n=a.n(l),r=a(67294),o=a(16550),i=a(75049),s=a(55867),c=a(22102),u=a(51995),d=a(31069),p=a(30381),m=a.n(p),h=a(29848),T=a(34581),v=a(58593),g=a(18782),E=a(86074),_=a(73192),b=a(27600),Z=a(14114),f=a(94222),N=a(11965),y=a(70163),S=a(90335);const A=e=>N.iv`
  color: ${e.colors.grayscale.light1};
  margin-right: ${2*e.gridUnit}px;
`;function C(e){let{type:t}=e;const a={icon:null,label:""};switch(t){case S.u.Email:a.icon=(0,N.tZ)(y.Z.Email,{css:A}),a.label=S.u.Email;break;case S.u.Slack:a.icon=(0,N.tZ)(y.Z.Slack,{css:A}),a.label=S.u.Slack;break;default:a.icon=null,a.label=""}return a.icon?(0,N.tZ)(v.u,{title:a.label,placement:"bottom"},a.icon):null}var R=a(19259),x=a(17198);m().updateLocale("en",{calendar:{lastDay:"[Yesterday at] LTS",sameDay:"[Today at] LTS",nextDay:"[Tomorrow at] LTS",lastWeek:"[last] dddd [at] LTS",nextWeek:"dddd [at] LTS",sameElse:"L"}});const O=u.iK.span`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`,D=(0,u.iK)(y.Z.Refresh)`
  color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  width: auto;
  height: ${e=>{let{theme:t}=e;return 5*t.gridUnit}}px;
  position: relative;
  top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  cursor: pointer;
`,k=e=>{let{updatedAt:t,update:a}=e;const[l,n]=(0,r.useState)(m()(t));return(0,r.useEffect)((()=>{n((()=>m()(t)));const e=setInterval((()=>{n((()=>m()(t)))}),6e4);return()=>clearInterval(e)}),[t]),(0,N.tZ)(O,null,(0,s.t)("Last Updated %s",l.isValid()?l.calendar():"--"),a&&(0,N.tZ)(D,{onClick:a}))};var I=a(34858),w=a(40768),L=a(22318),X=a(93185),$=a(15926),U=a.n($),M=a(74069),P=a(98978),H=a(87183),z=a(85633),G=a(91877),j=a(4715),q=a(42878),F=a(18451),W=a(9882),V=a(28216),K=a(9875),B=a(9433);const Y=e=>{let{value:t,onChange:a}=e;const l=(0,u.Fg)(),n=(0,r.useRef)(null),[o,i]=(0,r.useState)("picker"),c=(0,r.useCallback)((e=>i(e.target.value)),[]),d=(0,r.useCallback)((e=>{var t;a(e),null==(t=n.current)||t.setValue(e)}),[n,a]),p=(0,r.useCallback)((e=>{a(e.target.value)}),[a]),m=(0,r.useCallback)((()=>{var e;a((null==(e=n.current)?void 0:e.input.value)||"")}),[a]),[h,T]=(0,r.useState)();return(0,N.tZ)(r.Fragment,null,(0,N.tZ)(H.Y.Group,{onChange:c,value:o},(0,N.tZ)("div",{className:"inline-container add-margin"},(0,N.tZ)(H.Y,{value:"picker"}),(0,N.tZ)(B.CronPicker,{clearButton:!1,value:t,setValue:d,disabled:"picker"!==o,displayError:"picker"===o,onError:T})),(0,N.tZ)("div",{className:"inline-container add-margin"},(0,N.tZ)(H.Y,{value:"input"}),(0,N.tZ)("span",{className:"input-label"},(0,s.t)("CRON Schedule")),(0,N.tZ)(ue,{className:"styled-input"},(0,N.tZ)("div",{className:"input-container"},(0,N.tZ)(K.II,{type:"text",name:"crontab",ref:n,style:h?{borderColor:l.colors.error.base}:{},placeholder:(0,s.t)("CRON expression"),disabled:"input"!==o,onBlur:p,onPressEnter:m}))))))},J=u.iK.div`
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
`,Q=e=>{let{setting:t=null,index:a,onUpdate:l,onRemove:n}=e;const{method:o,recipients:i,options:c}=t||{},[d,p]=(0,r.useState)(i||""),m=(0,u.Fg)();return t?(i&&d!==i&&p(i),(0,N.tZ)(J,null,(0,N.tZ)("div",{className:"inline-container"},(0,N.tZ)(ue,null,(0,N.tZ)("div",{className:"input-container"},(0,N.tZ)(j.Ph,{ariaLabel:(0,s.t)("Delivery method"),onChange:e=>{if(p(""),l){const n={...t,method:e,recipients:""};l(a,n)}},placeholder:(0,s.t)("Select Delivery Method"),options:(c||[]).map((e=>({label:e,value:e}))),value:o}))),void 0!==o&&n?(0,N.tZ)("span",{role:"button",tabIndex:0,className:"delete-button",onClick:()=>n(a)},(0,N.tZ)(y.Z.Trash,{iconColor:m.colors.grayscale.base})):null),void 0!==o?(0,N.tZ)(ue,null,(0,N.tZ)("div",{className:"control-label"},(0,s.t)(o)),(0,N.tZ)("div",{className:"input-container"},(0,N.tZ)("textarea",{name:"recipients",value:d,onChange:e=>{const{target:n}=e;if(p(n.value),l){const e={...t,recipients:n.value};l(a,e)}}})),(0,N.tZ)("div",{className:"helper"},(0,s.t)('Recipients are separated by "," or ";"'))):null)):null},ee=["pivot_table","pivot_table_v2","table","paired_ttest"],te=["Email"],ae="PNG",le=[{label:(0,s.t)("< (Smaller than)"),value:"<"},{label:(0,s.t)("> (Larger than)"),value:">"},{label:(0,s.t)("<= (Smaller or equal)"),value:"<="},{label:(0,s.t)(">= (Larger or equal)"),value:">="},{label:(0,s.t)("== (Is equal)"),value:"=="},{label:(0,s.t)("!= (Is not equal)"),value:"!="},{label:(0,s.t)("Not null"),value:"not null"}],ne=[{label:(0,s.t)("None"),value:0},{label:(0,s.t)("30 days"),value:30},{label:(0,s.t)("60 days"),value:60},{label:(0,s.t)("90 days"),value:90}],re=(0,u.iK)(M.Z)`
  max-width: 1200px;
  width: 100%;

  .ant-modal-body {
    overflow: initial;
  }
`,oe=e=>N.iv`
  margin: auto ${2*e.gridUnit}px auto 0;
  color: ${e.colors.grayscale.base};
`,ie=u.iK.div`
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
`,se=u.iK.div`
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
`,ce=u.iK.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  .switch-label {
    margin-left: 10px;
  }
`,ue=u.iK.div`
  flex: 1;
  margin-top: 0;

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
`,de=(0,u.iK)(H.Y)`
  display: block;
  line-height: ${e=>{let{theme:t}=e;return 7*t.gridUnit}}px;
`,pe=(0,u.iK)(H.Y.Group)`
  margin-left: ${e=>{let{theme:t}=e;return 5.5*t.gridUnit}}px;
`,me=(0,u.iK)(j.r4)`
  margin-left: ${e=>{let{theme:t}=e;return 5.5*t.gridUnit}}px;
  margin-top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,he=u.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.primary.dark1}};
  cursor: pointer;

  i {
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  &.disabled {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
    cursor: default;
  }
`,Te=u.iK.div`
  .inline-container .input-container {
    margin-left: 0;
  }
`,ve=e=>N.iv`
  margin-right: ${3*e.gridUnit}px;
`,ge={ADD_NOTIFICATION_METHOD_TEXT:(0,s.t)("Add notification method"),ADD_DELIVERY_METHOD_TEXT:(0,s.t)("Add delivery method"),SAVE_TEXT:(0,s.t)("Save"),ADD_TEXT:(0,s.t)("Add"),EDIT_REPORT_TEXT:(0,s.t)("Edit Report"),EDIT_ALERT_TEXT:(0,s.t)("Edit Alert"),ADD_REPORT_TEXT:(0,s.t)("Add Report"),ADD_ALERT_TEXT:(0,s.t)("Add Alert"),REPORT_NAME_TEXT:(0,s.t)("Report name"),ALERT_NAME_TEXT:(0,s.t)("Alert name"),OWNERS_TEXT:(0,s.t)("Owners"),DESCRIPTION_TEXT:(0,s.t)("Description"),ACTIVE_TEXT:(0,s.t)("Active"),ALERT_CONDITION_TEXT:(0,s.t)("Alert condition"),DATABASE_TEXT:(0,s.t)("Database"),SQL_QUERY_TEXT:(0,s.t)("SQL Query"),TRIGGER_ALERT_IF_TEXT:(0,s.t)("Trigger Alert If..."),CONDITION_TEXT:(0,s.t)("Condition"),VALUE_TEXT:(0,s.t)("Value"),VALUE_TOOLTIP:(0,s.t)("Threshold value should be double precision number"),REPORT_SCHEDULE_TEXT:(0,s.t)("Report schedule"),ALERT_CONDITION_SCHEDULE_TEXT:(0,s.t)("Alert condition schedule"),TIMEZONE_TEXT:(0,s.t)("Timezone"),SCHEDULE_SETTINGS_TEXT:(0,s.t)("Schedule settings"),LOG_RETENTION_TEXT:(0,s.t)("Log retention"),WORKING_TIMEOUT_TEXT:(0,s.t)("Working timeout"),TIME_IN_SECONDS_TEXT:(0,s.t)("Time in seconds"),SECONDS_TEXT:(0,s.t)("seconds"),GRACE_PERIOD_TEXT:(0,s.t)("Grace period"),MESSAGE_CONTENT_TEXT:(0,s.t)("Message content"),DASHBOARD_TEXT:(0,s.t)("Dashboard"),CHART_TEXT:(0,s.t)("Chart"),SEND_AS_PNG_TEXT:(0,s.t)("Send as PNG"),SEND_AS_CSV_TEXT:(0,s.t)("Send as CSV"),SEND_AS_TEXT:(0,s.t)("Send as text"),IGNORE_CACHE_TEXT:(0,s.t)("Ignore cache when generating screenshot"),NOTIFICATION_METHOD_TEXT:(0,s.t)("Notification method")},Ee=e=>{let{status:t="active",onClick:a}=e;return"hidden"===t?null:(0,N.tZ)(he,{className:t,onClick:()=>{"disabled"!==t&&a()}},(0,N.tZ)("i",{className:"fa fa-plus"})," ","active"===t?ge.ADD_NOTIFICATION_METHOD_TEXT:ge.ADD_DELIVERY_METHOD_TEXT)},_e=(0,Z.ZP)((e=>{var t,a,l,o,i,c,u,p;let{addDangerToast:m,onAdd:h,onHide:T,show:v,alert:g=null,isReport:E=!1,addSuccessToast:b}=e;const Z=(0,V.v9)((e=>e.user)),f=(0,F.c)(),S=(null==f?void 0:f.ALERT_REPORTS_NOTIFICATION_METHODS)||te,[A,C]=(0,r.useState)(!0),[R,x]=(0,r.useState)(),[O,D]=(0,r.useState)(!0),[k,w]=(0,r.useState)("dashboard"),[L,$]=(0,r.useState)(ae),[M,K]=(0,r.useState)(!1),[B,J]=(0,r.useState)(!1),[he,_e]=(0,r.useState)([]),[be,Ze]=(0,r.useState)([]),[fe,Ne]=(0,r.useState)([]),[ye,Se]=(0,r.useState)(""),Ae=null!==g,Ce="chart"===k&&((0,G.c)(X.T.ALERTS_ATTACH_REPORTS)||E),[Re,xe]=(0,r.useState)("active"),[Oe,De]=(0,r.useState)([]),{ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT:ke,ALERT_REPORTS_DEFAULT_CRON_VALUE:Ie,ALERT_REPORTS_DEFAULT_RETENTION:we}=(0,V.v9)((e=>{var t,a,l,n;const r=null==(t=e.common)?void 0:t.conf;return{ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT:null!=(a=null==r?void 0:r.ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT)?a:3600,ALERT_REPORTS_DEFAULT_CRON_VALUE:null!=(l=null==r?void 0:r.ALERT_REPORTS_DEFAULT_CRON_VALUE)?l:"0 * * * *",ALERT_REPORTS_DEFAULT_RETENTION:null!=(n=null==r?void 0:r.ALERT_REPORTS_DEFAULT_RETENTION)?n:90}})),Le={active:!0,creation_method:"alerts_reports",crontab:Ie,log_retention:we,working_timeout:ke,name:"",owners:[],recipients:[],sql:"",validator_config_json:{},validator_type:"",force_screenshot:!1,grace_period:void 0},Xe=(e,t)=>{const a=Oe.slice();a[e]=t,De(a),void 0!==t.method&&"hidden"!==Re&&xe("active")},$e=e=>{const t=Oe.slice();t.splice(e,1),De(t),xe("active")},{state:{loading:Ue,resource:Me,error:Pe},fetchResource:He,createResource:ze,updateResource:Ge,clearError:je}=(0,I.LE)("report",(0,s.t)("report"),m),qe=()=>{je(),D(!0),T(),De([]),x({...Le}),xe("active")},Fe=(0,r.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const l=U().encode({filter:e,page:t,page_size:a});return d.Z.get({endpoint:`/api/v1/report/related/created_by?q=${l}`}).then((e=>({data:e.json.result.map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),We=(0,r.useCallback)((e=>{const t=e||(null==R?void 0:R.database);if(!t||t.label)return null;let a;return he.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a}),[null==R?void 0:R.database,he]),Ve=(e,t)=>{x((a=>({...a,[e]:t})))},Ke=(0,r.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const l=U().encode({filter:e,page:t,page_size:a});return d.Z.get({endpoint:`/api/v1/report/related/database?q=${l}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return _e(t),{data:t,totalCount:e.json.count}}))}),[]),Be=(null==R?void 0:R.database)&&!R.database.label;(0,r.useEffect)((()=>{Be&&Ve("database",We())}),[Be,We]);const Ye=(0,r.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const l=U().encode_uri({filter:e,page:t,page_size:a});return d.Z.get({endpoint:`/api/v1/report/related/dashboard?q=${l}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return Ze(t),{data:t,totalCount:e.json.count}}))}),[]),Je=e=>{const t=e||(null==R?void 0:R.dashboard);if(!t||t.label)return null;let a;return be.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a},Qe=(0,r.useCallback)((e=>{const t=e||(null==R?void 0:R.chart);if(!t||t.label)return null;let a;return fe.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a}),[fe,null==R?void 0:R.chart]),et=(null==R?void 0:R.chart)&&!(null!=R&&R.chart.label);(0,r.useEffect)((()=>{et&&Ve("chart",Qe())}),[Qe,et]);const tt=(0,r.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const l=U().encode_uri({filter:e,page:t,page_size:a});return d.Z.get({endpoint:`/api/v1/report/related/chart?q=${l}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return Ne(t),{data:t,totalCount:e.json.count}}))}),[]),at=e=>{const{target:t}=e;Ve(t.name,t.value)},lt=e=>{const{target:t}=e,a=+t.value;Ve(t.name,0===a?null:a?Math.max(a,1):a)};(0,r.useEffect)((()=>{if(Ae&&(null==R||!R.id||(null==g?void 0:g.id)!==R.id||O&&v)){if(null!==(null==g?void 0:g.id)&&!Ue&&!Pe){const e=g.id||0;He(e)}}else!Ae&&(!R||R.id||O&&v)&&(x({...Le,owners:Z?[{value:Z.userId,label:`${Z.firstName} ${Z.lastName}`}]:[]}),De([]),xe("active"))}),[g]),(0,r.useEffect)((()=>{if(Me){const e=(Me.recipients||[]).map((e=>{const t="string"==typeof e.recipient_config_json?JSON.parse(e.recipient_config_json):{};return{method:e.type,recipients:t.target||e.recipient_config_json,options:S}}));De(e),xe(e.length===S.length?"hidden":"active"),w(Me.chart?"chart":"dashboard"),$(Me.chart&&Me.report_format||ae);const t="string"==typeof Me.validator_config_json?JSON.parse(Me.validator_config_json):Me.validator_config_json;J("not null"===Me.validator_type),Me.chart&&Se(Me.chart.viz_type),K(Me.force_screenshot),x({...Me,chart:Me.chart?Qe(Me.chart)||{value:Me.chart.id,label:Me.chart.slice_name}:void 0,dashboard:Me.dashboard?Je(Me.dashboard)||{value:Me.dashboard.id,label:Me.dashboard.dashboard_title}:void 0,database:Me.database?We(Me.database)||{value:Me.database.id,label:Me.database.database_name}:void 0,owners:((null==g?void 0:g.owners)||[]).map((e=>({value:e.value||e.id,label:e.label||`${e.first_name} ${e.last_name}`}))),validator_config_json:"not null"===Me.validator_type?{op:"not null"}:t})}}),[Me]);const nt=R||{};return(0,r.useEffect)((()=>{var e,t,a,l,n,r;null!=R&&null!=(e=R.name)&&e.length&&null!=R&&null!=(t=R.owners)&&t.length&&null!=R&&null!=(a=R.crontab)&&a.length&&void 0!==(null==R?void 0:R.working_timeout)&&("dashboard"===k&&null!=R&&R.dashboard||"chart"===k&&null!=R&&R.chart)&&(()=>{if(!Oe.length)return!1;let e=!1;return Oe.forEach((t=>{var a;t.method&&null!=(a=t.recipients)&&a.length&&(e=!0)})),e})()&&(E||R.database&&null!=(l=R.sql)&&l.length&&(B||null!=(n=R.validator_config_json)&&n.op)&&(B||void 0!==(null==(r=R.validator_config_json)?void 0:r.threshold)))?C(!1):C(!0)}),[nt.name,nt.owners,nt.database,nt.sql,nt.validator_config_json,nt.crontab,nt.working_timeout,nt.dashboard,nt.chart,k,Oe,B]),O&&v&&D(!1),(0,N.tZ)(re,{className:"no-content-padding",responsive:!0,disablePrimaryButton:A,onHandledPrimaryAction:()=>{var e,t,a;const l=[];Oe.forEach((e=>{e.method&&e.recipients.length&&l.push({recipient_config_json:{target:e.recipients},type:e.method})}));const n="chart"===k&&!E,r={...R,type:E?"Report":"Alert",force_screenshot:n||M,validator_type:B?"not null":"operator",validator_config_json:B?{}:null==R?void 0:R.validator_config_json,chart:"chart"===k?null==R||null==(e=R.chart)?void 0:e.value:null,dashboard:"dashboard"===k?null==R||null==(t=R.dashboard)?void 0:t.value:null,database:null==R||null==(a=R.database)?void 0:a.value,owners:((null==R?void 0:R.owners)||[]).map((e=>e.value||e.id)),recipients:l,report_format:"dashboard"===k?ae:L||ae};if(r.recipients&&!r.recipients.length&&delete r.recipients,r.context_markdown="string",Ae){if(null!=R&&R.id){const e=R.id;delete r.id,delete r.created_by,delete r.last_eval_dttm,delete r.last_state,delete r.last_value,delete r.last_value_row_json,Ge(e,r).then((e=>{e&&(b((0,s.t)("%s updated",r.type)),h&&h(),qe())}))}}else R&&ze(r).then((e=>{e&&(b((0,s.t)("%s updated",r.type)),h&&h(e),qe())}))},onHide:qe,primaryButtonName:Ae?ge.SAVE_TEXT:ge.ADD_TEXT,show:v,width:"100%",maxWidth:"1450px",title:(0,N.tZ)("h4",null,Ae?(0,N.tZ)(y.Z.EditAlt,{css:oe}):(0,N.tZ)(y.Z.PlusLarge,{css:oe}),Ae&&E?ge.EDIT_REPORT_TEXT:Ae?ge.EDIT_ALERT_TEXT:E?ge.ADD_REPORT_TEXT:ge.ADD_ALERT_TEXT)},(0,N.tZ)(ie,null,(0,N.tZ)("div",{className:"header-section"},(0,N.tZ)(ue,null,(0,N.tZ)("div",{className:"control-label"},E?ge.REPORT_NAME_TEXT:ge.ALERT_NAME_TEXT,(0,N.tZ)("span",{className:"required"},"*")),(0,N.tZ)("div",{className:"input-container"},(0,N.tZ)("input",{type:"text",name:"name",value:R?R.name:"",placeholder:E?ge.REPORT_NAME_TEXT:ge.ALERT_NAME_TEXT,onChange:at,css:ve}))),(0,N.tZ)(ue,null,(0,N.tZ)("div",{className:"control-label"},ge.OWNERS_TEXT,(0,N.tZ)("span",{className:"required"},"*")),(0,N.tZ)("div",{className:"input-container"},(0,N.tZ)(j.qb,{ariaLabel:ge.OWNERS_TEXT,allowClear:!0,name:"owners",mode:"multiple",value:(null==R?void 0:R.owners)||[],options:Fe,onChange:e=>{Ve("owners",e||[])},css:ve}))),(0,N.tZ)(ue,null,(0,N.tZ)("div",{className:"control-label"},ge.DESCRIPTION_TEXT),(0,N.tZ)("div",{className:"input-container"},(0,N.tZ)("input",{type:"text",name:"description",value:R&&R.description||"",placeholder:ge.DESCRIPTION_TEXT,onChange:at,css:ve}))),(0,N.tZ)(ce,null,(0,N.tZ)(_.r,{onChange:e=>{Ve("active",e)},checked:!R||R.active}),(0,N.tZ)("div",{className:"switch-label"},ge.ACTIVE_TEXT))),(0,N.tZ)("div",{className:"column-section"},!E&&(0,N.tZ)("div",{className:"column condition"},(0,N.tZ)(se,null,(0,N.tZ)("h4",null,ge.ALERT_CONDITION_TEXT)),(0,N.tZ)(ue,null,(0,N.tZ)("div",{className:"control-label"},ge.DATABASE_TEXT,(0,N.tZ)("span",{className:"required"},"*")),(0,N.tZ)("div",{className:"input-container"},(0,N.tZ)(j.qb,{ariaLabel:ge.DATABASE_TEXT,name:"source",value:null!=R&&null!=(t=R.database)&&t.label&&null!=R&&null!=(a=R.database)&&a.value?{value:R.database.value,label:R.database.label}:void 0,options:Ke,onChange:e=>{Ve("database",e||[])}}))),(0,N.tZ)(ue,null,(0,N.tZ)("div",{className:"control-label"},ge.SQL_QUERY_TEXT,(0,N.tZ)("span",{className:"required"},"*")),(0,N.tZ)(q.Z,{name:"sql",language:"sql",offerEditInModal:!1,minLines:15,maxLines:15,onChange:e=>{Ve("sql",e||"")},readOnly:!1,initialValue:null==Me?void 0:Me.sql,key:null==R?void 0:R.id})),(0,N.tZ)("div",{className:"inline-container wrap"},(0,N.tZ)(ue,null,(0,N.tZ)("div",{className:"control-label",css:ve},ge.TRIGGER_ALERT_IF_TEXT,(0,N.tZ)("span",{className:"required"},"*")),(0,N.tZ)("div",{className:"input-container"},(0,N.tZ)(j.Ph,{ariaLabel:ge.CONDITION_TEXT,onChange:e=>{var t;J("not null"===e);const a={op:e,threshold:R?null==(t=R.validator_config_json)?void 0:t.threshold:void 0};Ve("validator_config_json",a)},placeholder:"Condition",value:(null==R||null==(l=R.validator_config_json)?void 0:l.op)||void 0,options:le,css:ve}))),(0,N.tZ)(ue,null,(0,N.tZ)("div",{className:"control-label"},ge.VALUE_TEXT," ",(0,N.tZ)(W.V,{tooltip:ge.VALUE_TOOLTIP}),(0,N.tZ)("span",{className:"required"},"*")),(0,N.tZ)("div",{className:"input-container"},(0,N.tZ)("input",{type:"number",name:"threshold",disabled:B,value:void 0!==(null==R||null==(o=R.validator_config_json)?void 0:o.threshold)?R.validator_config_json.threshold:"",placeholder:ge.VALUE_TEXT,onChange:e=>{var t;const{target:a}=e,l={op:R?null==(t=R.validator_config_json)?void 0:t.op:void 0,threshold:a.value};Ve("validator_config_json",l)}}))))),(0,N.tZ)("div",{className:"column schedule"},(0,N.tZ)(se,null,(0,N.tZ)("h4",null,E?ge.REPORT_SCHEDULE_TEXT:ge.ALERT_CONDITION_SCHEDULE_TEXT),(0,N.tZ)("span",{className:"required"},"*")),(0,N.tZ)(Y,{value:(null==R?void 0:R.crontab)||Ie,onChange:e=>Ve("crontab",e)}),(0,N.tZ)("div",{className:"control-label"},ge.TIMEZONE_TEXT),(0,N.tZ)("div",{className:"input-container",css:e=>(e=>N.iv`
  margin: ${3*e.gridUnit}px 0;
`)(e)},(0,N.tZ)(P.Z,{onTimezoneChange:e=>{Ve("timezone",e)},timezone:null==R?void 0:R.timezone,minWidth:"100%"})),(0,N.tZ)(se,null,(0,N.tZ)("h4",null,ge.SCHEDULE_SETTINGS_TEXT)),(0,N.tZ)(ue,null,(0,N.tZ)("div",{className:"control-label"},ge.LOG_RETENTION_TEXT,(0,N.tZ)("span",{className:"required"},"*")),(0,N.tZ)("div",{className:"input-container"},(0,N.tZ)(j.Ph,{ariaLabel:ge.LOG_RETENTION_TEXT,placeholder:ge.LOG_RETENTION_TEXT,onChange:e=>{Ve("log_retention",e)},value:"number"==typeof(null==R?void 0:R.log_retention)?null==R?void 0:R.log_retention:we,options:ne,sortComparator:(0,z.mj)("value")}))),(0,N.tZ)(ue,null,(0,N.tZ)("div",{className:"control-label"},ge.WORKING_TIMEOUT_TEXT,(0,N.tZ)("span",{className:"required"},"*")),(0,N.tZ)("div",{className:"input-container"},(0,N.tZ)("input",{type:"number",min:"1",name:"working_timeout",value:(null==R?void 0:R.working_timeout)||"",placeholder:ge.TIME_IN_SECONDS_TEXT,onChange:lt}),(0,N.tZ)("span",{className:"input-label"},ge.SECONDS_TEXT))),!E&&(0,N.tZ)(ue,null,(0,N.tZ)("div",{className:"control-label"},ge.GRACE_PERIOD_TEXT),(0,N.tZ)("div",{className:"input-container"},(0,N.tZ)("input",{type:"number",min:"1",name:"grace_period",value:(null==R?void 0:R.grace_period)||"",placeholder:ge.TIME_IN_SECONDS_TEXT,onChange:lt}),(0,N.tZ)("span",{className:"input-label"},ge.SECONDS_TEXT)))),(0,N.tZ)("div",{className:"column message"},(0,N.tZ)(se,null,(0,N.tZ)("h4",null,ge.MESSAGE_CONTENT_TEXT),(0,N.tZ)("span",{className:"required"},"*")),(0,N.tZ)(H.Y.Group,{onChange:e=>{const{target:t}=e;K(!1),setTimeout((()=>w(t.value)),200)},value:k},(0,N.tZ)(de,{value:"dashboard"},ge.DASHBOARD_TEXT),(0,N.tZ)(de,{value:"chart"},ge.CHART_TEXT)),"chart"===k?(0,N.tZ)(j.qb,{ariaLabel:ge.CHART_TEXT,name:"chart",value:null!=R&&null!=(i=R.chart)&&i.label&&null!=R&&null!=(c=R.chart)&&c.value?{value:R.chart.value,label:R.chart.label}:void 0,options:tt,onChange:e=>{(e=>{d.Z.get({endpoint:`/api/v1/chart/${e.value}`}).then((e=>Se(e.json.result.viz_type)))})(e),Ve("chart",e||void 0),Ve("dashboard",null)}}):(0,N.tZ)(j.qb,{ariaLabel:ge.DASHBOARD_TEXT,name:"dashboard",value:null!=R&&null!=(u=R.dashboard)&&u.label&&null!=R&&null!=(p=R.dashboard)&&p.value?{value:R.dashboard.value,label:R.dashboard.label}:void 0,options:Ye,onChange:e=>{Ve("dashboard",e||void 0),Ve("chart",null)}}),Ce&&(0,N.tZ)(r.Fragment,null,(0,N.tZ)("div",{className:"inline-container"},(0,N.tZ)(pe,{onChange:e=>{const{target:t}=e;$(t.value)},value:L},(0,N.tZ)(de,{value:"PNG"},ge.SEND_AS_PNG_TEXT),(0,N.tZ)(de,{value:"CSV"},ge.SEND_AS_CSV_TEXT),n()(ee).call(ee,ye)&&(0,N.tZ)(de,{value:"TEXT"},ge.SEND_AS_TEXT)))),(E||"dashboard"===k)&&(0,N.tZ)("div",{className:"inline-container"},(0,N.tZ)(me,{className:"checkbox",checked:M,onChange:e=>{K(e.target.checked)}},ge.IGNORE_CACHE_TEXT)),(0,N.tZ)(se,null,(0,N.tZ)("h4",null,ge.NOTIFICATION_METHOD_TEXT),(0,N.tZ)("span",{className:"required"},"*")),Oe.map(((e,t)=>(0,N.tZ)(Te,null,(0,N.tZ)(Q,{setting:e,index:t,key:`NotificationMethod-${t}`,onUpdate:Xe,onRemove:$e})))),(0,N.tZ)(Ee,{status:Re,onClick:()=>{const e=Oe.slice();e.push({recipients:"",options:S}),De(e),xe(e.length===S.length?"hidden":"disabled")}})))))})),be=(0,i.I)(),Ze={[S.Z.Success]:(0,s.t)("Success"),[S.Z.Working]:(0,s.t)("Working"),[S.Z.Error]:(0,s.t)("Error"),[S.Z.Noop]:(0,s.t)("Not triggered"),[S.Z.Grace]:(0,s.t)("On Grace")},fe=(0,c.Z)({requestType:"rison",method:"DELETE",endpoint:"/api/v1/report/"}),Ne=u.iK.div`
  width: 100%;
  padding: 0 ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px
    ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
`,ye=u.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > *:first-child {
    margin-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,Se=be.get("alertsreports.header.icon"),Ae=(0,Z.ZP)((function(e){let{addDangerToast:t,isReportEnabled:a=!1,user:l,addSuccessToast:i}=e;const c=a?(0,s.t)("report"):(0,s.t)("alert"),u=a?(0,s.t)("reports"):(0,s.t)("alerts"),p=a?"Reports":"Alerts",Z=(0,r.useMemo)((()=>[{id:"type",operator:g.p.equals,value:a?"Report":"Alert"}]),[a]),{state:{loading:y,resourceCount:A,resourceCollection:O,bulkSelectEnabled:D,lastFetched:X},hasPerm:$,fetchData:U,setResourceCollection:M,refreshData:P,toggleBulkSelect:H}=(0,I.Yi)("report",(0,s.t)("reports"),t,!0,void 0,Z),{updateResource:z}=(0,I.LE)("report",(0,s.t)("reports"),t),[G,j]=(0,r.useState)(!1),[q,F]=(0,r.useState)(null),[W,V]=(0,r.useState)(null);function K(e){F(e),j(!0)}const B=$("can_write"),Y=$("can_write"),J=$("can_write");(0,r.useEffect)((()=>{D&&Y&&H()}),[a]);const Q=[{id:"name",desc:!0}],ee=(0,r.useCallback)(((e,t)=>{if(null!=e&&e.id){const a=e.id,l=[...O];M(l.map((a=>(null==a?void 0:a.id)===e.id?{...a,active:t}:a))),z(a,{active:t},!1,!1).then().catch((()=>M(l)))}}),[O,M,z]),te=(0,r.useMemo)((()=>[{Cell:e=>{let{row:{original:{last_state:t}}}=e;return(0,N.tZ)(f.Z,{state:t,isReportEnabled:a})},accessor:"last_state",size:"xs",disableSortBy:!0},{Cell:e=>{let{row:{original:{last_eval_dttm:t}}}=e;return t?m().utc(t).local().format(b.v2):""},accessor:"last_eval_dttm",Header:(0,s.t)("Last run"),size:"lg"},{accessor:"name",Header:(0,s.t)("Name"),size:"xl"},{Header:(0,s.t)("Schedule"),accessor:"crontab_humanized",size:"xl",Cell:e=>{let{row:{original:{crontab_humanized:t="",timezone:a}}}=e;return(0,N.tZ)(v.u,{title:`${t} (${a})`,placement:"topLeft"},(0,N.tZ)("span",null,`${t} (${a})`))}},{Cell:e=>{let{row:{original:{recipients:t}}}=e;return t.map((e=>(0,N.tZ)(C,{key:e.id,type:e.type})))},accessor:"recipients",Header:(0,s.t)("Notification method"),disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:{created_by:t}}}=e;return t?`${t.first_name} ${t.last_name}`:""},Header:(0,s.t)("Created by"),id:"created_by",disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:{owners:t=[]}}}=e;return(0,N.tZ)(T.Z,{users:t})},Header:(0,s.t)("Owners"),id:"owners",disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:t}}}=e;return(0,N.tZ)("span",{className:"no-wrap"},t)},Header:(0,s.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:e=>{var t;let{row:{original:a}}=e;const r=n()(t=a.owners.map((e=>e.id))).call(t,l.userId)||(0,L.i5)(l);return(0,N.tZ)(_.r,{disabled:!r,checked:a.active,onClick:e=>ee(a,e),size:"small"})},Header:(0,s.t)("Active"),accessor:"active",id:"active",size:"xl"},{Cell:e=>{var t;let{row:{original:a}}=e;const r=(0,o.k6)(),i=n()(t=a.owners.map((e=>e.id))).call(t,l.userId)||(0,L.i5)(l),c=[B?{label:"execution-log-action",tooltip:(0,s.t)("Execution log"),placement:"bottom",icon:"Note",onClick:()=>r.push(`/${a.type.toLowerCase()}/${a.id}/log`)}:null,B?{label:i?"edit-action":"preview-action",tooltip:i?(0,s.t)("Edit"):(0,s.t)("View"),placement:"bottom",icon:i?"Edit":"Binoculars",onClick:()=>K(a)}:null,i&&Y?{label:"delete-action",tooltip:(0,s.t)("Delete"),placement:"bottom",icon:"Trash",onClick:()=>V(a)}:null].filter((e=>null!==e));return(0,N.tZ)(h.Z,{actions:c})},Header:(0,s.t)("Actions"),id:"actions",hidden:!B&&!Y,disableSortBy:!0,size:"xl"}]),[Y,B,a,ee]),ae=[];J&&ae.push({name:(0,N.tZ)(r.Fragment,null,(0,N.tZ)("i",{className:"fa fa-plus"})," ",c),buttonStyle:"primary",onClick:()=>{K(null)}}),Y&&ae.push({name:(0,s.t)("Bulk select"),onClick:H,buttonStyle:"secondary","data-test":"bulk-select-toggle"});const le={title:(0,s.t)("No %s yet",u),image:"filter-results.svg",buttonAction:()=>K(null),buttonText:J?(0,N.tZ)(r.Fragment,null,(0,N.tZ)("i",{className:"fa fa-plus"})," ",c," "):null},ne=(0,r.useMemo)((()=>[{Header:(0,s.t)("Owner"),key:"owner",id:"owners",input:"select",operator:g.p.relationManyMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:(0,w.tm)("report","owners",(0,w.v$)((e=>(0,s.t)("An error occurred while fetching owners values: %s",e))),l),paginate:!0},{Header:(0,s.t)("Created by"),key:"created_by",id:"created_by",input:"select",operator:g.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,w.tm)("report","created_by",(0,w.v$)((e=>(0,s.t)("An error occurred while fetching created by values: %s",e))),l),paginate:!0},{Header:(0,s.t)("Status"),key:"status",id:"last_state",input:"select",operator:g.p.equals,unfilteredLabel:"Any",selects:[{label:Ze[S.Z.Success],value:S.Z.Success},{label:Ze[S.Z.Working],value:S.Z.Working},{label:Ze[S.Z.Error],value:S.Z.Error},{label:Ze[S.Z.Noop],value:S.Z.Noop},{label:Ze[S.Z.Grace],value:S.Z.Grace}]},{Header:(0,s.t)("Search"),key:"search",id:"name",input:"search",operator:g.p.contains}]),[]),re=Se?(0,N.tZ)(ye,null,(0,N.tZ)("div",null,(0,s.t)("Alerts & reports")),(0,N.tZ)(Se,null)):(0,s.t)("Alerts & reports");return(0,N.tZ)(r.Fragment,null,(0,N.tZ)(E.Z,{activeChild:p,name:re,tabs:[{name:"Alerts",label:(0,s.t)("Alerts"),url:"/alert/list/",usesRouter:!0,"data-test":"alert-list"},{name:"Reports",label:(0,s.t)("Reports"),url:"/report/list/",usesRouter:!0,"data-test":"report-list"}],buttons:ae},(0,N.tZ)(Ne,null,(0,N.tZ)(k,{updatedAt:X,update:()=>P()}))),(0,N.tZ)(_e,{alert:q,addDangerToast:t,layer:q,onHide:()=>{j(!1),F(null),P()},show:G,isReport:a,key:(null==q?void 0:q.id)||`${(new Date).getTime()}`}),W&&(0,N.tZ)(x.Z,{description:(0,s.t)("This action will permanently delete %s.",W.name),onConfirm:()=>{W&&(e=>{let{id:a,name:l}=e;d.Z.delete({endpoint:`/api/v1/report/${a}`}).then((()=>{P(),V(null),i((0,s.t)("Deleted: %s",l))}),(0,w.v$)((e=>t((0,s.t)("There was an issue deleting %s: %s",l,e)))))})(W)},onHide:()=>V(null),open:!0,title:(0,s.t)("Delete %s?",c)}),(0,N.tZ)(R.Z,{title:(0,s.t)("Please confirm"),description:(0,s.t)("Are you sure you want to delete the selected %s?",u),onConfirm:async e=>{try{const{message:t}=await fe(e.map((e=>{let{id:t}=e;return t})));P(),i(t)}catch(e){(0,w.v$)((e=>t((0,s.t)("There was an issue deleting the selected %s: %s",u,e))))(e)}}},(e=>{const t=Y?[{key:"delete",name:(0,s.t)("Delete"),onSelect:e,type:"danger"}]:[];return(0,N.tZ)(g.Z,{className:"alerts-list-view",columns:te,count:A,data:O,emptyState:le,fetchData:U,filters:ne,initialSort:Q,loading:y,bulkActions:t,bulkSelectEnabled:D,disableBulkSelect:H,pageSize:25})})))}))}}]);
//# sourceMappingURL=092b31be362ab956e036.chunk.js.map