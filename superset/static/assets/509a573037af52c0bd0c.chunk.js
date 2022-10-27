"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9502],{9433:(e,t,a)=>{a.d(t,{CronPicker:()=>u});var l=a(5872),n=a.n(l),o=(a(67294),a(85631)),r=a(61988),i=a(51995),s=a(61247),c=a(11965);const d={everyText:(0,r.t)("every"),emptyMonths:(0,r.t)("every month"),emptyMonthDays:(0,r.t)("every day of the month"),emptyMonthDaysShort:(0,r.t)("day of the month"),emptyWeekDays:(0,r.t)("every day of the week"),emptyWeekDaysShort:(0,r.t)("day of the week"),emptyHours:(0,r.t)("every hour"),emptyMinutes:(0,r.t)("every minute"),emptyMinutesForHourPeriod:(0,r.t)("every"),yearOption:(0,r.t)("year"),monthOption:(0,r.t)("month"),weekOption:(0,r.t)("week"),dayOption:(0,r.t)("day"),hourOption:(0,r.t)("hour"),minuteOption:(0,r.t)("minute"),rebootOption:(0,r.t)("reboot"),prefixPeriod:(0,r.t)("Every"),prefixMonths:(0,r.t)("in"),prefixMonthDays:(0,r.t)("on"),prefixWeekDays:(0,r.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,r.t)("and"),prefixHours:(0,r.t)("at"),prefixMinutes:(0,r.t)(":"),prefixMinutesForHourPeriod:(0,r.t)("at"),suffixMinutesForHourPeriod:(0,r.t)("minute(s)"),errorInvalidCron:(0,r.t)("Invalid cron expression"),clearButtonText:(0,r.t)("Clear"),weekDays:[(0,r.t)("Sunday"),(0,r.t)("Monday"),(0,r.t)("Tuesday"),(0,r.t)("Wednesday"),(0,r.t)("Thursday"),(0,r.t)("Friday"),(0,r.t)("Saturday")],months:[(0,r.t)("January"),(0,r.t)("February"),(0,r.t)("March"),(0,r.t)("April"),(0,r.t)("May"),(0,r.t)("June"),(0,r.t)("July"),(0,r.t)("August"),(0,r.t)("September"),(0,r.t)("October"),(0,r.t)("November"),(0,r.t)("December")],altWeekDays:[(0,r.t)("SUN"),(0,r.t)("MON"),(0,r.t)("TUE"),(0,r.t)("WED"),(0,r.t)("THU"),(0,r.t)("FRI"),(0,r.t)("SAT")],altMonths:[(0,r.t)("JAN"),(0,r.t)("FEB"),(0,r.t)("MAR"),(0,r.t)("APR"),(0,r.t)("MAY"),(0,r.t)("JUN"),(0,r.t)("JUL"),(0,r.t)("AUG"),(0,r.t)("SEP"),(0,r.t)("OCT"),(0,r.t)("NOV"),(0,r.t)("DEC")]},u=(0,i.iK)((e=>(0,c.tZ)(o.ZP,{getPopupContainer:e=>e.parentElement},(0,c.tZ)(s.Z,n()({locale:d},e)))))`
  .react-js-cron-select:not(.react-js-cron-custom-select) > div:first-of-type,
  .react-js-cron-custom-select {
    border-radius: ${({theme:e})=>e.gridUnit}px;
    background-color: ${({theme:e})=>e.colors.grayscale.light4} !important;
  }
  .react-js-cron-custom-select > div:first-of-type {
    border-radius: ${({theme:e})=>e.gridUnit}px;
  }
`},29848:(e,t,a)=>{a.d(t,{Z:()=>c}),a(67294);var l=a(51995),n=a(58593),o=a(70163),r=a(11965);const i=l.iK.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({theme:e})=>e.colors.primary.base};
      }
    }
  }
`,s=l.iK.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function c({actions:e}){return(0,r.tZ)(i,{className:"actions"},e.map(((e,t)=>{const a=o.Z[e.icon];return e.tooltip?(0,r.tZ)(n.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,r.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,r.tZ)(a,null))):(0,r.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,r.tZ)(a,null))})))}},12441:(e,t,a)=>{a.d(t,{r:()=>i}),a(67294);var l=a(51995),n=a(40987),o=a(11965);const r=(0,l.iK)(n.Z)`
  .ant-switch-checked {
    background-color: ${({theme:e})=>e.colors.primary.base};
  }
`,i=e=>(0,o.tZ)(r,e)},98978:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(11965),n=a(67294),o=a(80008),r=a.n(o),i=a(61988),s=a(4715);const c="GMT Standard Time",d={"-300-240":["Eastern Standard Time","Eastern Daylight Time"],"-360-300":["Central Standard Time","Central Daylight Time"],"-420-360":["Mountain Standard Time","Mountain Daylight Time"],"-420-420":["Mountain Standard Time - Phoenix","Mountain Standard Time - Phoenix"],"-480-420":["Pacific Standard Time","Pacific Daylight Time"],"-540-480":["Alaska Standard Time","Alaska Daylight Time"],"-600-600":["Hawaii Standard Time","Hawaii Daylight Time"],60120:["Central European Time","Central European Daylight Time"],"00":[c,c],"060":["GMT Standard Time - London","British Summer Time"]},u=r()(),p=r()([2021,1]),m=r()([2021,7]),h=e=>p.tz(e).utcOffset().toString()+m.tz(e).utcOffset().toString(),v=e=>{var t,a;const l=h(e);return(u.tz(e).isDST()?null==(t=d[l])?void 0:t[1]:null==(a=d[l])?void 0:a[0])||e},g=r().tz.countries().map((e=>r().tz.zonesForCountry(e,!0))).flat(),b=[];g.forEach((e=>{b.find((t=>h(t.name)===h(e.name)))||b.push(e)}));const Z=b.map((e=>({label:`GMT ${r().tz(u,e.name).format("Z")} (${v(e.name)})`,value:e.name,offsets:h(e.name),timezoneName:e.name}))),f=(e,t)=>r().tz(u,e.timezoneName).utcOffset()-r().tz(u,t.timezoneName).utcOffset();function y({onTimezoneChange:e,timezone:t,minWidth:a="400px"}){const o=(0,n.useMemo)((()=>(e=>{var t;return(null==(t=Z.find((t=>t.offsets===h(e))))?void 0:t.value)||"Africa/Abidjan"})(t||r().tz.guess())),[t]);return(0,n.useEffect)((()=>{t!==o&&e(o)}),[o,e,t]),(0,l.tZ)(s.Ph,{ariaLabel:(0,i.t)("Timezone selector"),css:(0,l.iv)({minWidth:a},"",""),onChange:t=>e(t),value:o,options:Z,sortComparator:f})}Z.sort(f)},63082:(e,t,a)=>{a.r(t),a.d(t,{default:()=>be});var l=a(67294),n=a(5977),o=a(61988),r=a(22102),i=a(51995),s=a(31069),c=a(30381),d=a.n(c),u=a(29848),p=a(34581),m=a(58593),h=a(18782),v=a(20755),g=a(12441),b=a(27600),Z=a(14114),f=a(46714),y=a(11965),x=a(70163),_=a(28745);const S=e=>y.iv`
  color: ${e.colors.grayscale.light1};
  margin-right: ${2*e.gridUnit}px;
`;function k({type:e}){const t={icon:null,label:""};switch(e){case _.u.Email:t.icon=(0,y.tZ)(x.Z.Email,{css:S}),t.label=_.u.Email;break;case _.u.Slack:t.icon=(0,y.tZ)(x.Z.Slack,{css:S}),t.label=_.u.Slack;break;default:t.icon=null,t.label=""}return t.icon?(0,y.tZ)(m.u,{title:t.label,placement:"bottom"},t.icon):null}var N=a(19259),C=a(17198);d().updateLocale("en",{calendar:{lastDay:"[Yesterday at] LTS",sameDay:"[Today at] LTS",nextDay:"[Tomorrow at] LTS",lastWeek:"[last] dddd [at] LTS",nextWeek:"dddd [at] LTS",sameElse:"L"}});const w=i.iK.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,T=(0,i.iK)(x.Z.Refresh)`
  color: ${({theme:e})=>e.colors.primary.base};
  width: auto;
  height: ${({theme:e})=>5*e.gridUnit}px;
  position: relative;
  top: ${({theme:e})=>e.gridUnit}px;
  left: ${({theme:e})=>e.gridUnit}px;
  cursor: pointer;
`,$=({updatedAt:e,update:t})=>{const[a,n]=(0,l.useState)(d()(e));return(0,l.useEffect)((()=>{n((()=>d()(e)));const t=setInterval((()=>{n((()=>d()(e)))}),6e4);return()=>clearInterval(t)}),[e]),(0,y.tZ)(w,null,(0,o.t)("Last Updated %s",a.isValid()?a.calendar():"--"),t&&(0,y.tZ)(T,{onClick:t}))};var E=a(34858),A=a(40768),z=a(15926),D=a.n(z),M=a(74069),R=a(98978),L=a(87183),j=a(24554),P=a(91877),U=a(93185),O=a(4715),q=a(42878),H=a(1483),W=a(9882),G=a(9875),F=a(9433);const I=({value:e,onChange:t})=>{const a=(0,i.Fg)(),n=(0,l.useRef)(null),[r,s]=(0,l.useState)("picker"),c=(0,l.useCallback)((e=>s(e.target.value)),[]),d=(0,l.useCallback)((e=>{var a;t(e),null==(a=n.current)||a.setValue(e)}),[n,t]),u=(0,l.useCallback)((e=>{t(e.target.value)}),[t]),p=(0,l.useCallback)((()=>{var e;t((null==(e=n.current)?void 0:e.input.value)||"")}),[t]),[m,h]=(0,l.useState)();return(0,y.tZ)(l.Fragment,null,(0,y.tZ)(L.Y.Group,{onChange:c,value:r},(0,y.tZ)("div",{className:"inline-container add-margin"},(0,y.tZ)(L.Y,{value:"picker"}),(0,y.tZ)(F.CronPicker,{clearButton:!1,value:e,setValue:d,disabled:"picker"!==r,displayError:"picker"===r,onError:h})),(0,y.tZ)("div",{className:"inline-container add-margin"},(0,y.tZ)(L.Y,{value:"input"}),(0,y.tZ)("span",{className:"input-label"},"CRON Schedule"),(0,y.tZ)(ie,{className:"styled-input"},(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(G.II,{type:"text",name:"crontab",ref:n,style:m?{borderColor:a.colors.error.base}:{},placeholder:(0,o.t)("CRON expression"),disabled:"input"!==r,onBlur:u,onPressEnter:p}))))))},K=i.iK.div`
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
`,B=({setting:e=null,index:t,onUpdate:a,onRemove:n})=>{const{method:r,recipients:s,options:c}=e||{},[d,u]=(0,l.useState)(s||""),p=(0,i.Fg)();return e?(s&&d!==s&&u(s),(0,y.tZ)(K,null,(0,y.tZ)("div",{className:"inline-container"},(0,y.tZ)(ie,null,(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(O.Ph,{ariaLabel:(0,o.t)("Delivery method"),onChange:l=>{if(u(""),a){const n={...e,method:l,recipients:""};a(t,n)}},placeholder:(0,o.t)("Select Delivery Method"),options:(c||[]).map((e=>({label:e,value:e}))),value:r}))),void 0!==r&&n?(0,y.tZ)("span",{role:"button",tabIndex:0,className:"delete-button",onClick:()=>n(t)},(0,y.tZ)(x.Z.Trash,{iconColor:p.colors.grayscale.base})):null),void 0!==r?(0,y.tZ)(ie,null,(0,y.tZ)("div",{className:"control-label"},(0,o.t)(r)),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)("textarea",{name:"recipients",value:d,onChange:l=>{const{target:n}=l;if(u(n.value),a){const l={...e,recipients:n.value};a(t,l)}}})),(0,y.tZ)("div",{className:"helper"},(0,o.t)('Recipients are separated by "," or ";"'))):null)):null},V=["pivot_table","pivot_table_v2","table","paired_ttest"],Y=["Email"],J="PNG",Q=[{label:(0,o.t)("< (Smaller than)"),value:"<"},{label:(0,o.t)("> (Larger than)"),value:">"},{label:(0,o.t)("<= (Smaller or equal)"),value:"<="},{label:(0,o.t)(">= (Larger or equal)"),value:">="},{label:(0,o.t)("== (Is equal)"),value:"=="},{label:(0,o.t)("!= (Is not equal)"),value:"!="},{label:(0,o.t)("Not null"),value:"not null"}],X=[{label:(0,o.t)("None"),value:0},{label:(0,o.t)("30 days"),value:30},{label:(0,o.t)("60 days"),value:60},{label:(0,o.t)("90 days"),value:90}],ee="0 * * * *",te={active:!0,creation_method:"alerts_reports",crontab:ee,log_retention:90,working_timeout:3600,name:"",owners:[],recipients:[],sql:"",validator_config_json:{},validator_type:"",force_screenshot:!1,grace_period:void 0},ae=(0,i.iK)(M.Z)`
  max-width: 1200px;
  width: 100%;

  .ant-modal-body {
    overflow: initial;
  }
`,le=e=>y.iv`
  margin: auto ${2*e.gridUnit}px auto 0;
  color: ${e.colors.grayscale.base};
`,ne=i.iK.div`
  display: flex;
  flex-direction: column;

  .header-section {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    width: 100%;
    padding: ${({theme:e})=>4*e.gridUnit}px;
    border-bottom: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  }

  .column-section {
    display: flex;
    flex: 1 1 auto;

    .column {
      flex: 1 1 auto;
      min-width: calc(33.33% - ${({theme:e})=>8*e.gridUnit}px);
      padding: ${({theme:e})=>4*e.gridUnit}px;

      .async-select {
        margin: 10px 0 20px;
      }

      &.condition {
        border-right: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
      }

      &.message {
        border-left: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
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
`,oe=i.iK.div`
  display: flex;
  align-items: center;
  margin: ${({theme:e})=>2*e.gridUnit}px auto
    ${({theme:e})=>4*e.gridUnit}px auto;

  h4 {
    margin: 0;
  }

  .required {
    margin-left: ${({theme:e})=>e.gridUnit}px;
    color: ${({theme:e})=>e.colors.error.base};
  }
`,re=i.iK.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  .switch-label {
    margin-left: 10px;
  }
`,ie=i.iK.div`
  flex: 1;
  margin: ${({theme:e})=>2*e.gridUnit}px;
  margin-top: 0;

  .helper {
    display: block;
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    padding: ${({theme:e})=>e.gridUnit}px 0;
    text-align: left;
  }

  .required {
    margin-left: ${({theme:e})=>e.gridUnit/2}px;
    color: ${({theme:e})=>e.colors.error.base};
  }

  .input-container {
    display: flex;
    align-items: center;

    > div {
      width: 100%;
    }

    label {
      display: flex;
      margin-right: ${({theme:e})=>2*e.gridUnit}px;
    }

    i {
      margin: 0 ${({theme:e})=>e.gridUnit}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  input[disabled] {
    color: ${({theme:e})=>e.colors.grayscale.base};
  }

  textarea {
    height: 300px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({theme:e})=>e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border-style: none;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;

    &[name='description'] {
      flex: 1 1 auto;
    }
  }

  .input-label {
    margin-left: 10px;
  }
`,se=(0,i.iK)(L.Y)`
  display: block;
  line-height: ${({theme:e})=>7*e.gridUnit}px;
`,ce=(0,i.iK)(L.Y.Group)`
  margin-left: ${({theme:e})=>5.5*e.gridUnit}px;
`,de=(0,i.iK)(O.r4)`
  margin-left: ${({theme:e})=>5.5*e.gridUnit}px;
`,ue=i.iK.div`
  color: ${({theme:e})=>e.colors.primary.dark1};
  cursor: pointer;

  i {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
  }

  &.disabled {
    color: ${({theme:e})=>e.colors.grayscale.light1};
    cursor: default;
  }
`,pe=({status:e="active",onClick:t})=>"hidden"===e?null:(0,y.tZ)(ue,{className:e,onClick:()=>{"disabled"!==e&&t()}},(0,y.tZ)("i",{className:"fa fa-plus"})," ","active"===e?(0,o.t)("Add notification method"):(0,o.t)("Add delivery method")),me=(0,Z.ZP)((({addDangerToast:e,onAdd:t,onHide:a,show:n,alert:r=null,isReport:i=!1,addSuccessToast:c})=>{var d,u,p,m,h,v,b;const Z=(0,H.c)(),f=(null==Z?void 0:Z.ALERT_REPORTS_NOTIFICATION_METHODS)||Y,[_,S]=(0,l.useState)(!0),[k,N]=(0,l.useState)(),[C,w]=(0,l.useState)(!0),[T,$]=(0,l.useState)("dashboard"),[A,z]=(0,l.useState)(J),[M,O]=(0,l.useState)(!1),[G,F]=(0,l.useState)(!1),[K,ue]=(0,l.useState)([]),[me,he]=(0,l.useState)([]),[ve,ge]=(0,l.useState)([]),[be,Ze]=(0,l.useState)(""),fe=null!==r,ye="chart"===T&&((0,P.cr)(U.T.ALERTS_ATTACH_REPORTS)||i),[xe,_e]=(0,l.useState)("active"),[Se,ke]=(0,l.useState)([]),Ne=(e,t)=>{const a=Se.slice();a[e]=t,ke(a),void 0!==t.method&&"hidden"!==xe&&_e("active")},Ce=e=>{const t=Se.slice();t.splice(e,1),ke(t),_e("active")},{state:{loading:we,resource:Te,error:$e},fetchResource:Ee,createResource:Ae,updateResource:ze,clearError:De}=(0,E.LE)("report",(0,o.t)("report"),e),Me=()=>{De(),w(!0),a(),ke([]),N({...te}),_e("active")},Re=(0,l.useMemo)((()=>(e="",t,a)=>{const l=D().encode({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/created_by?q=${l}`}).then((e=>({data:e.json.result.map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),Le=(0,l.useCallback)((e=>{const t=e||(null==k?void 0:k.database);if(!t||t.label)return null;let a;return K.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a}),[null==k?void 0:k.database,K]),je=(e,t)=>{N((a=>({...a,[e]:t})))},Pe=(0,l.useMemo)((()=>(e="",t,a)=>{const l=D().encode({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/database?q=${l}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return ue(t),{data:t,totalCount:e.json.count}}))}),[]),Ue=k&&k.database&&!k.database.label;(0,l.useEffect)((()=>{Ue&&je("database",Le())}),[Ue,Le]);const Oe=(0,l.useMemo)((()=>(e="",t,a)=>{const l=D().encode_uri({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/dashboard?q=${l}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return he(t),{data:t,totalCount:e.json.count}}))}),[]),qe=e=>{const t=e||(null==k?void 0:k.dashboard);if(!t||t.label)return null;let a;return me.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a},He=(0,l.useCallback)((e=>{const t=e||(null==k?void 0:k.chart);if(!t||t.label)return null;let a;return ve.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a}),[ve,null==k?void 0:k.chart]),We=k&&k.chart&&!k.chart.label;(0,l.useEffect)((()=>{We&&je("chart",He())}),[He,We]);const Ge=(0,l.useMemo)((()=>(e="",t,a)=>{const l=D().encode_uri({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/chart?q=${l}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return ge(t),{data:t,totalCount:e.json.count}}))}),[]),Fe=e=>{const{target:t}=e;je(t.name,t.value)},Ie=e=>{const{target:t}=e,a=+t.value;je(t.name,0===a?null:a?Math.max(a,1):a)};(0,l.useEffect)((()=>{if(fe&&(null==k||!k.id||(null==r?void 0:r.id)!==k.id||C&&n)){if(r&&null!==r.id&&!we&&!$e){const e=r.id||0;Ee(e)}}else!fe&&(!k||k.id||C&&n)&&(N({...te}),ke([]),_e("active"))}),[r]),(0,l.useEffect)((()=>{if(Te){const e=(Te.recipients||[]).map((e=>{const t="string"==typeof e.recipient_config_json?JSON.parse(e.recipient_config_json):{};return{method:e.type,recipients:t.target||e.recipient_config_json,options:f}}));ke(e),_e(e.length===f.length?"hidden":"active"),$(Te.chart?"chart":"dashboard"),z(Te.chart&&Te.report_format||J);const t="string"==typeof Te.validator_config_json?JSON.parse(Te.validator_config_json):Te.validator_config_json;F("not null"===Te.validator_type),Te.chart&&Ze(Te.chart.viz_type),O(Te.force_screenshot),N({...Te,chart:Te.chart?He(Te.chart)||{value:Te.chart.id,label:Te.chart.slice_name}:void 0,dashboard:Te.dashboard?qe(Te.dashboard)||{value:Te.dashboard.id,label:Te.dashboard.dashboard_title}:void 0,database:Te.database?Le(Te.database)||{value:Te.database.id,label:Te.database.database_name}:void 0,owners:((null==r?void 0:r.owners)||[]).map((e=>({value:e.value||e.id,label:e.label||`${e.first_name} ${e.last_name}`}))),validator_config_json:"not null"===Te.validator_type?{op:"not null"}:t})}}),[Te]);const Ke=k||{};return(0,l.useEffect)((()=>{var e,t,a,l,n,o;k&&null!=(e=k.name)&&e.length&&null!=(t=k.owners)&&t.length&&null!=(a=k.crontab)&&a.length&&void 0!==k.working_timeout&&("dashboard"===T&&k.dashboard||"chart"===T&&k.chart)&&(()=>{if(!Se.length)return!1;let e=!1;return Se.forEach((t=>{var a;t.method&&null!=(a=t.recipients)&&a.length&&(e=!0)})),e})()&&(i||k.database&&null!=(l=k.sql)&&l.length&&(G||null!=(n=k.validator_config_json)&&n.op)&&(G||void 0!==(null==(o=k.validator_config_json)?void 0:o.threshold)))?S(!1):S(!0)}),[Ke.name,Ke.owners,Ke.database,Ke.sql,Ke.validator_config_json,Ke.crontab,Ke.working_timeout,Ke.dashboard,Ke.chart,T,Se,G]),C&&n&&w(!1),(0,y.tZ)(ae,{className:"no-content-padding",responsive:!0,disablePrimaryButton:_,onHandledPrimaryAction:()=>{var e,a,l;const n=[];Se.forEach((e=>{e.method&&e.recipients.length&&n.push({recipient_config_json:{target:e.recipients},type:e.method})}));const r="chart"===T&&!i,s={...k,type:i?"Report":"Alert",force_screenshot:r||M,validator_type:G?"not null":"operator",validator_config_json:G?{}:null==k?void 0:k.validator_config_json,chart:"chart"===T?null==k||null==(e=k.chart)?void 0:e.value:null,dashboard:"dashboard"===T?null==k||null==(a=k.dashboard)?void 0:a.value:null,database:null==k||null==(l=k.database)?void 0:l.value,owners:((null==k?void 0:k.owners)||[]).map((e=>e.value||e.id)),recipients:n,report_format:"dashboard"===T?J:A||J};if(s.recipients&&!s.recipients.length&&delete s.recipients,s.context_markdown="string",fe){if(k&&k.id){const e=k.id;delete s.id,delete s.created_by,delete s.last_eval_dttm,delete s.last_state,delete s.last_value,delete s.last_value_row_json,ze(e,s).then((e=>{e&&(c((0,o.t)("%s updated",s.type)),t&&t(),Me())}))}}else k&&Ae(s).then((e=>{e&&(c((0,o.t)("%s updated",s.type)),t&&t(e),Me())}))},onHide:Me,primaryButtonName:fe?(0,o.t)("Save"):(0,o.t)("Add"),show:n,width:"100%",maxWidth:"1450px",title:(0,y.tZ)("h4",null,fe?(0,y.tZ)(x.Z.EditAlt,{css:le}):(0,y.tZ)(x.Z.PlusLarge,{css:le}),fe&&i?(0,o.t)("Edit Report"):fe?(0,o.t)("Edit Alert"):i?(0,o.t)("Add Report"):(0,o.t)("Add Alert"))},(0,y.tZ)(ne,null,(0,y.tZ)("div",{className:"header-section"},(0,y.tZ)(ie,null,(0,y.tZ)("div",{className:"control-label"},i?(0,o.t)("Report name"):(0,o.t)("Alert name"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)("input",{type:"text",name:"name",value:k?k.name:"",placeholder:i?(0,o.t)("Report name"):(0,o.t)("Alert name"),onChange:Fe}))),(0,y.tZ)(ie,null,(0,y.tZ)("div",{className:"control-label"},(0,o.t)("Owners"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(j.ZP,{ariaLabel:(0,o.t)("Owners"),allowClear:!0,name:"owners",mode:"multiple",value:(null==k?void 0:k.owners)||[],options:Re,onChange:e=>{je("owners",e||[])}}))),(0,y.tZ)(ie,null,(0,y.tZ)("div",{className:"control-label"},(0,o.t)("Description")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)("input",{type:"text",name:"description",value:k&&k.description||"",placeholder:(0,o.t)("Description"),onChange:Fe}))),(0,y.tZ)(re,null,(0,y.tZ)(g.r,{onChange:e=>{je("active",e)},checked:!k||k.active}),(0,y.tZ)("div",{className:"switch-label"},"Active"))),(0,y.tZ)("div",{className:"column-section"},!i&&(0,y.tZ)("div",{className:"column condition"},(0,y.tZ)(oe,null,(0,y.tZ)("h4",null,(0,o.t)("Alert condition"))),(0,y.tZ)(ie,null,(0,y.tZ)("div",{className:"control-label"},(0,o.t)("Database"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(j.ZP,{ariaLabel:(0,o.t)("Database"),name:"source",value:null!=k&&null!=(d=k.database)&&d.label&&null!=k&&null!=(u=k.database)&&u.value?{value:k.database.value,label:k.database.label}:void 0,options:Pe,onChange:e=>{je("database",e||[])}}))),(0,y.tZ)(ie,null,(0,y.tZ)("div",{className:"control-label"},(0,o.t)("SQL Query"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)(q.Z,{name:"sql",language:"sql",offerEditInModal:!1,minLines:15,maxLines:15,onChange:e=>{je("sql",e||"")},readOnly:!1,initialValue:null==Te?void 0:Te.sql,key:null==k?void 0:k.id})),(0,y.tZ)("div",{className:"inline-container wrap"},(0,y.tZ)(ie,null,(0,y.tZ)("div",{className:"control-label"},(0,o.t)("Trigger Alert If..."),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(j.ZP,{ariaLabel:(0,o.t)("Condition"),onChange:e=>{var t;F("not null"===e);const a={op:e,threshold:k?null==(t=k.validator_config_json)?void 0:t.threshold:void 0};je("validator_config_json",a)},placeholder:"Condition",value:(null==k||null==(p=k.validator_config_json)?void 0:p.op)||void 0,options:Q}))),(0,y.tZ)(ie,null,(0,y.tZ)("div",{className:"control-label"},(0,o.t)("Value")," ",(0,y.tZ)(W.V,{tooltip:(0,o.t)("Threshold value should be double precision number")}),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)("input",{type:"number",name:"threshold",disabled:G,value:k&&k.validator_config_json&&void 0!==k.validator_config_json.threshold?k.validator_config_json.threshold:"",placeholder:(0,o.t)("Value"),onChange:e=>{var t;const{target:a}=e,l={op:k?null==(t=k.validator_config_json)?void 0:t.op:void 0,threshold:a.value};je("validator_config_json",l)}}))))),(0,y.tZ)("div",{className:"column schedule"},(0,y.tZ)(oe,null,(0,y.tZ)("h4",null,i?(0,o.t)("Report schedule"):(0,o.t)("Alert condition schedule")),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)(I,{value:(null==k?void 0:k.crontab)||ee,onChange:e=>je("crontab",e)}),(0,y.tZ)("div",{className:"control-label"},(0,o.t)("Timezone")),(0,y.tZ)("div",{className:"input-container",css:e=>(e=>y.iv`
  margin: ${3*e.gridUnit}px 0;
`)(e)},(0,y.tZ)(R.Z,{onTimezoneChange:e=>{je("timezone",e)},timezone:null==k?void 0:k.timezone,minWidth:"100%"})),(0,y.tZ)(oe,null,(0,y.tZ)("h4",null,(0,o.t)("Schedule settings"))),(0,y.tZ)(ie,null,(0,y.tZ)("div",{className:"control-label"},(0,o.t)("Log retention"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(j.ZP,{ariaLabel:(0,o.t)("Log retention"),placeholder:(0,o.t)("Log retention"),onChange:e=>{je("log_retention",e)},value:"number"==typeof(null==k?void 0:k.log_retention)?null==k?void 0:k.log_retention:90,options:X,sortComparator:(0,j.mj)("value")}))),(0,y.tZ)(ie,null,(0,y.tZ)("div",{className:"control-label"},(0,o.t)("Working timeout"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)("input",{type:"number",min:"1",name:"working_timeout",value:(null==k?void 0:k.working_timeout)||"",placeholder:(0,o.t)("Time in seconds"),onChange:Ie}),(0,y.tZ)("span",{className:"input-label"},"seconds"))),!i&&(0,y.tZ)(ie,null,(0,y.tZ)("div",{className:"control-label"},(0,o.t)("Grace period")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)("input",{type:"number",min:"1",name:"grace_period",value:(null==k?void 0:k.grace_period)||"",placeholder:(0,o.t)("Time in seconds"),onChange:Ie}),(0,y.tZ)("span",{className:"input-label"},"seconds")))),(0,y.tZ)("div",{className:"column message"},(0,y.tZ)(oe,null,(0,y.tZ)("h4",null,(0,o.t)("Message content")),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)(L.Y.Group,{onChange:e=>{const{target:t}=e;O(!1),setTimeout((()=>$(t.value)),200)},value:T},(0,y.tZ)(se,{value:"dashboard"},(0,o.t)("Dashboard")),(0,y.tZ)(se,{value:"chart"},(0,o.t)("Chart"))),(0,y.tZ)(j.ZP,{ariaLabel:(0,o.t)("Chart"),css:(0,y.iv)({display:"chart"===T?"inline":"none"},"",""),name:"chart",value:null!=k&&null!=(m=k.chart)&&m.label&&null!=k&&null!=(h=k.chart)&&h.value?{value:k.chart.value,label:k.chart.label}:void 0,options:Ge,onChange:e=>{(e=>{s.Z.get({endpoint:`/api/v1/chart/${e.value}`}).then((e=>Ze(e.json.result.viz_type)))})(e),je("chart",e||void 0),je("dashboard",null)}}),(0,y.tZ)(j.ZP,{ariaLabel:(0,o.t)("Dashboard"),css:(0,y.iv)({display:"dashboard"===T?"inline":"none"},"",""),name:"dashboard",value:null!=k&&null!=(v=k.dashboard)&&v.label&&null!=k&&null!=(b=k.dashboard)&&b.value?{value:k.dashboard.value,label:k.dashboard.label}:void 0,options:Oe,onChange:e=>{je("dashboard",e||void 0),je("chart",null)}}),ye&&(0,y.tZ)(l.Fragment,null,(0,y.tZ)("div",{className:"inline-container"},(0,y.tZ)(ce,{onChange:e=>{const{target:t}=e;z(t.value)},value:A},(0,y.tZ)(se,{value:"PNG"},(0,o.t)("Send as PNG")),(0,y.tZ)(se,{value:"CSV"},(0,o.t)("Send as CSV")),V.includes(be)&&(0,y.tZ)(se,{value:"TEXT"},(0,o.t)("Send as text"))))),(i||"dashboard"===T)&&(0,y.tZ)("div",{className:"inline-container"},(0,y.tZ)(de,{className:"checkbox",checked:M,onChange:e=>{O(e.target.checked)}},"Ignore cache when generating screenshot")),(0,y.tZ)(oe,null,(0,y.tZ)("h4",null,(0,o.t)("Notification method")),(0,y.tZ)("span",{className:"required"},"*")),Se.map(((e,t)=>(0,y.tZ)(B,{setting:e,index:t,key:`NotificationMethod-${t}`,onUpdate:Ne,onRemove:Ce}))),(0,y.tZ)(pe,{status:xe,onClick:()=>{const e=Se.slice();e.push({recipients:"",options:f}),ke(e),_e(e.length===f.length?"hidden":"disabled")}})))))})),he={[_.Z.Success]:(0,o.t)("Success"),[_.Z.Working]:(0,o.t)("Working"),[_.Z.Error]:(0,o.t)("Error"),[_.Z.Noop]:(0,o.t)("Not triggered"),[_.Z.Grace]:(0,o.t)("On Grace")},ve=(0,r.Z)({requestType:"rison",method:"DELETE",endpoint:"/api/v1/report/"}),ge=i.iK.div`
  width: 100%;
  padding: 0 ${({theme:e})=>4*e.gridUnit}px
    ${({theme:e})=>3*e.gridUnit}px;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};
`,be=(0,Z.ZP)((function({addDangerToast:e,isReportEnabled:t=!1,user:a,addSuccessToast:r}){const i=t?(0,o.t)("report"):(0,o.t)("alert"),c=t?(0,o.t)("reports"):(0,o.t)("alerts"),Z=t?"Reports":"Alerts",x=(0,l.useMemo)((()=>[{id:"type",operator:h.p.equals,value:t?"Report":"Alert"}]),[t]),{state:{loading:S,resourceCount:w,resourceCollection:T,bulkSelectEnabled:z,lastFetched:D},hasPerm:M,fetchData:R,setResourceCollection:L,refreshData:j,toggleBulkSelect:P}=(0,E.Yi)("report",(0,o.t)("reports"),e,!0,void 0,x),{updateResource:U}=(0,E.LE)("report",(0,o.t)("reports"),e),[O,q]=(0,l.useState)(!1),[H,W]=(0,l.useState)(null),[G,F]=(0,l.useState)(null);function I(e){W(e),q(!0)}const K=M("can_write"),B=M("can_write"),V=M("can_write");(0,l.useEffect)((()=>{z&&B&&P()}),[t]);const Y=[{id:"name",desc:!0}],J=(0,l.useCallback)(((e,t)=>{if(e&&e.id){const a=e.id,l=[...T];L(l.map((a=>(null==a?void 0:a.id)===e.id?{...a,active:t}:a))),U(a,{active:t},!1,!1).then().catch((()=>L(l)))}}),[T,L,U]),Q=(0,l.useMemo)((()=>[{Cell:({row:{original:{last_state:e}}})=>(0,y.tZ)(f.Z,{state:e,isReportEnabled:t}),accessor:"last_state",size:"xs",disableSortBy:!0},{Cell:({row:{original:{last_eval_dttm:e}}})=>e?d().utc(e).local().format(b.v2):"",accessor:"last_eval_dttm",Header:(0,o.t)("Last run"),size:"lg"},{accessor:"name",Header:(0,o.t)("Name"),size:"xl"},{Header:(0,o.t)("Schedule"),accessor:"crontab_humanized",size:"xl",Cell:({row:{original:{crontab_humanized:e="",timezone:t}}})=>(0,y.tZ)(m.u,{title:`${e} (${t})`,placement:"topLeft"},(0,y.tZ)("span",null,`${e} (${t})`))},{Cell:({row:{original:{recipients:e}}})=>e.map((e=>(0,y.tZ)(k,{key:e.id,type:e.type}))),accessor:"recipients",Header:(0,o.t)("Notification method"),disableSortBy:!0,size:"xl"},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:(0,o.t)("Created by"),id:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{owners:e=[]}}})=>(0,y.tZ)(p.Z,{users:e}),Header:(0,o.t)("Owners"),id:"owners",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>(0,y.tZ)("span",{className:"no-wrap"},e),Header:(0,o.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>(0,y.tZ)(g.r,{checked:e.active,onClick:t=>J(e,t),size:"small"}),Header:(0,o.t)("Active"),accessor:"active",id:"active",size:"xl"},{Cell:({row:{original:e}})=>{const t=(0,n.k6)(),a=[K?{label:"execution-log-action",tooltip:(0,o.t)("Execution log"),placement:"bottom",icon:"Note",onClick:()=>t.push(`/${e.type.toLowerCase()}/${e.id}/log`)}:null,K?{label:"edit-action",tooltip:(0,o.t)("Edit"),placement:"bottom",icon:"Edit",onClick:()=>I(e)}:null,B?{label:"delete-action",tooltip:(0,o.t)("Delete"),placement:"bottom",icon:"Trash",onClick:()=>F(e)}:null].filter((e=>null!==e));return(0,y.tZ)(u.Z,{actions:a})},Header:(0,o.t)("Actions"),id:"actions",hidden:!K&&!B,disableSortBy:!0,size:"xl"}]),[B,K,t,J]),X=[];V&&X.push({name:(0,y.tZ)(l.Fragment,null,(0,y.tZ)("i",{className:"fa fa-plus"})," ",i),buttonStyle:"primary",onClick:()=>{I(null)}}),B&&X.push({name:(0,o.t)("Bulk select"),onClick:P,buttonStyle:"secondary","data-test":"bulk-select-toggle"});const ee={title:(0,o.t)("No %s yet",c),image:"filter-results.svg",buttonAction:()=>I(null),buttonText:V?(0,y.tZ)(l.Fragment,null,(0,y.tZ)("i",{className:"fa fa-plus"})," ",i," "):null},te=(0,l.useMemo)((()=>[{Header:(0,o.t)("Owner"),id:"owners",input:"select",operator:h.p.relationManyMany,unfilteredLabel:"All",fetchSelects:(0,A.tm)("report","owners",(0,A.v$)((e=>(0,o.t)("An error occurred while fetching owners values: %s",e))),a),paginate:!0},{Header:(0,o.t)("Created by"),id:"created_by",input:"select",operator:h.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,A.tm)("report","created_by",(0,A.v$)((e=>(0,o.t)("An error occurred while fetching created by values: %s",e))),a),paginate:!0},{Header:(0,o.t)("Status"),id:"last_state",input:"select",operator:h.p.equals,unfilteredLabel:"Any",selects:[{label:he[_.Z.Success],value:_.Z.Success},{label:he[_.Z.Working],value:_.Z.Working},{label:he[_.Z.Error],value:_.Z.Error},{label:he[_.Z.Noop],value:_.Z.Noop},{label:he[_.Z.Grace],value:_.Z.Grace}]},{Header:(0,o.t)("Search"),id:"name",input:"search",operator:h.p.contains}]),[]);return(0,y.tZ)(l.Fragment,null,(0,y.tZ)(v.Z,{activeChild:Z,name:(0,o.t)("Alerts & reports"),tabs:[{name:"Alerts",label:(0,o.t)("Alerts"),url:"/alert/list/",usesRouter:!0,"data-test":"alert-list"},{name:"Reports",label:(0,o.t)("Reports"),url:"/report/list/",usesRouter:!0,"data-test":"report-list"}],buttons:X},(0,y.tZ)(ge,null,(0,y.tZ)($,{updatedAt:D,update:()=>j()}))),(0,y.tZ)(me,{alert:H,addDangerToast:e,layer:H,onHide:()=>{q(!1),W(null),j()},show:O,isReport:t,key:(null==H?void 0:H.id)||`${(new Date).getTime()}`}),G&&(0,y.tZ)(C.Z,{description:(0,o.t)("This action will permanently delete %s.",G.name),onConfirm:()=>{G&&(({id:t,name:a})=>{s.Z.delete({endpoint:`/api/v1/report/${t}`}).then((()=>{j(),F(null),r((0,o.t)("Deleted: %s",a))}),(0,A.v$)((t=>e((0,o.t)("There was an issue deleting %s: %s",a,t)))))})(G)},onHide:()=>F(null),open:!0,title:(0,o.t)("Delete %s?",i)}),(0,y.tZ)(N.Z,{title:(0,o.t)("Please confirm"),description:(0,o.t)("Are you sure you want to delete the selected %s?",c),onConfirm:async t=>{try{const{message:e}=await ve(t.map((({id:e})=>e)));j(),r(e)}catch(t){(0,A.v$)((t=>e((0,o.t)("There was an issue deleting the selected %s: %s",c,t))))(t)}}},(e=>{const t=B?[{key:"delete",name:(0,o.t)("Delete"),onSelect:e,type:"danger"}]:[];return(0,y.tZ)(h.Z,{className:"alerts-list-view",columns:Q,count:w,data:T,emptyState:ee,fetchData:R,filters:te,initialSort:Y,loading:S,bulkActions:t,bulkSelectEnabled:z,disableBulkSelect:P,pageSize:25})})))}))},46714:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(51995),n=a(61988),o=(a(67294),a(58593)),r=a(70163),i=a(28745),s=a(11965);function c(e,t,a){switch(e){case i.Z.Working:return a.colors.primary.base;case i.Z.Error:return a.colors.error.base;case i.Z.Success:return t?a.colors.success.base:a.colors.alert.base;case i.Z.Noop:return a.colors.success.base;case i.Z.Grace:return a.colors.alert.base;default:return a.colors.grayscale.base}}function d({state:e,isReportEnabled:t=!1}){const a=(0,l.Fg)(),d={icon:r.Z.Check,label:"",status:""};switch(e){case i.Z.Success:d.icon=t?r.Z.Check:r.Z.AlertSolidSmall,d.label=t?(0,n.t)("Report sent"):(0,n.t)("Alert triggered, notification sent"),d.status=i.Z.Success;break;case i.Z.Working:d.icon=r.Z.Running,d.label=t?(0,n.t)("Report sending"):(0,n.t)("Alert running"),d.status=i.Z.Working;break;case i.Z.Error:d.icon=r.Z.XSmall,d.label=t?(0,n.t)("Report failed"):(0,n.t)("Alert failed"),d.status=i.Z.Error;break;case i.Z.Noop:d.icon=r.Z.Check,d.label=(0,n.t)("Nothing triggered"),d.status=i.Z.Noop;break;case i.Z.Grace:d.icon=r.Z.AlertSolidSmall,d.label=(0,n.t)("Alert Triggered, In Grace Period"),d.status=i.Z.Grace;break;default:d.icon=r.Z.Check,d.label=(0,n.t)("Nothing triggered"),d.status=i.Z.Noop}const u=d.icon;return(0,s.tZ)(o.u,{title:d.label,placement:"bottomLeft"},(0,s.tZ)(u,{iconColor:c(d.status,t,a)}))}},28745:(e,t,a)=>{var l,n;a.d(t,{Z:()=>l,u:()=>n}),function(e){e.Success="Success",e.Working="Working",e.Error="Error",e.Noop="Not triggered",e.Grace="On Grace"}(l||(l={})),function(e){e.Email="Email",e.Slack="Slack"}(n||(n={}))}}]);
//# sourceMappingURL=509a573037af52c0bd0c.chunk.js.map