"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9502],{9433:(e,t,a)=>{a.d(t,{CronPicker:()=>u});var l=a(5872),n=a.n(l),o=(a(67294),a(79409)),r=a(61988),i=a(51995),s=a(61247),c=a(11965);const d={everyText:(0,r.t)("every"),emptyMonths:(0,r.t)("every month"),emptyMonthDays:(0,r.t)("every day of the month"),emptyMonthDaysShort:(0,r.t)("day of the month"),emptyWeekDays:(0,r.t)("every day of the week"),emptyWeekDaysShort:(0,r.t)("day of the week"),emptyHours:(0,r.t)("every hour"),emptyMinutes:(0,r.t)("every minute"),emptyMinutesForHourPeriod:(0,r.t)("every"),yearOption:(0,r.t)("year"),monthOption:(0,r.t)("month"),weekOption:(0,r.t)("week"),dayOption:(0,r.t)("day"),hourOption:(0,r.t)("hour"),minuteOption:(0,r.t)("minute"),rebootOption:(0,r.t)("reboot"),prefixPeriod:(0,r.t)("Every"),prefixMonths:(0,r.t)("in"),prefixMonthDays:(0,r.t)("on"),prefixWeekDays:(0,r.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,r.t)("and"),prefixHours:(0,r.t)("at"),prefixMinutes:(0,r.t)(":"),prefixMinutesForHourPeriod:(0,r.t)("at"),suffixMinutesForHourPeriod:(0,r.t)("minute(s)"),errorInvalidCron:(0,r.t)("Invalid cron expression"),clearButtonText:(0,r.t)("Clear"),weekDays:[(0,r.t)("Sunday"),(0,r.t)("Monday"),(0,r.t)("Tuesday"),(0,r.t)("Wednesday"),(0,r.t)("Thursday"),(0,r.t)("Friday"),(0,r.t)("Saturday")],months:[(0,r.t)("January"),(0,r.t)("February"),(0,r.t)("March"),(0,r.t)("April"),(0,r.t)("May"),(0,r.t)("June"),(0,r.t)("July"),(0,r.t)("August"),(0,r.t)("September"),(0,r.t)("October"),(0,r.t)("November"),(0,r.t)("December")],altWeekDays:[(0,r.t)("SUN"),(0,r.t)("MON"),(0,r.t)("TUE"),(0,r.t)("WED"),(0,r.t)("THU"),(0,r.t)("FRI"),(0,r.t)("SAT")],altMonths:[(0,r.t)("JAN"),(0,r.t)("FEB"),(0,r.t)("MAR"),(0,r.t)("APR"),(0,r.t)("MAY"),(0,r.t)("JUN"),(0,r.t)("JUL"),(0,r.t)("AUG"),(0,r.t)("SEP"),(0,r.t)("OCT"),(0,r.t)("NOV"),(0,r.t)("DEC")]},u=(0,i.iK)((e=>(0,c.tZ)(o.ZP,{getPopupContainer:e=>e.parentElement},(0,c.tZ)(s.Z,n()({locale:d},e)))))`
  .react-js-cron-select:not(.react-js-cron-custom-select) > div:first-of-type,
  .react-js-cron-custom-select {
    border-radius: ${({theme:e})=>e.gridUnit}px;
    background-color: ${({theme:e})=>e.colors.grayscale.light4} !important;
  }
  .react-js-cron-custom-select > div:first-of-type {
    border-radius: ${({theme:e})=>e.gridUnit}px;
  }
`},29848:(e,t,a)=>{a.d(t,{Z:()=>c}),a(67294);var l=a(51995),n=a(58593),o=a(38097),r=a(11965);const i=l.iK.span`
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
`,i=e=>(0,o.tZ)(r,e)},98978:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(11965),n=a(67294),o=a(80008),r=a.n(o),i=a(61988),s=a(4715);const c="GMT Standard Time",d="Africa/Abidjan",u={"-300-240":["Eastern Standard Time","Eastern Daylight Time"],"-360-300":["Central Standard Time","Central Daylight Time"],"-420-360":["Mountain Standard Time","Mountain Daylight Time"],"-420-420":["Mountain Standard Time - Phoenix","Mountain Standard Time - Phoenix"],"-480-420":["Pacific Standard Time","Pacific Daylight Time"],"-540-480":["Alaska Standard Time","Alaska Daylight Time"],"-600-600":["Hawaii Standard Time","Hawaii Daylight Time"],60120:["Central European Time","Central European Daylight Time"],"00":[c,c],"060":["GMT Standard Time - London","British Summer Time"]},p=r()(),m=r()([2021,1]),h=r()([2021,7]),v=e=>m.tz(e).utcOffset().toString()+h.tz(e).utcOffset().toString(),g=e=>{var t,a;const l=v(e);return(p.tz(e).isDST()?null==(t=u[l])?void 0:t[1]:null==(a=u[l])?void 0:a[0])||e},b=r().tz.countries().map((e=>r().tz.zonesForCountry(e,!0))).flat(),Z=[];b.forEach((e=>{Z.find((t=>v(t.name)===v(e.name)))||Z.push(e)}));const f=Z.map((e=>({label:`GMT ${r().tz(p,e.name).format("Z")} (${g(e.name)})`,value:e.name,offsets:v(e.name),timezoneName:e.name}))),y=({onTimezoneChange:e,timezone:t})=>{const a=(0,n.useRef)(t),o=(0,n.useCallback)((t=>{a.current=t,e(t)}),[e]);return(0,n.useEffect)((()=>{const e=(e=>{var t;return(null==(t=f.find((t=>t.offsets===v(e))))?void 0:t.value)||d})(t||r().tz.guess());a.current!==e&&o(e)}),[t,o]),(0,l.tZ)(s.P,{ariaLabel:(0,i.t)("Timezone selector"),css:(0,l.iv)({minWidth:"400px"},"",""),onChange:e,value:t||d,options:f,sortComparator:(e,t)=>r().tz(p,e.timezoneName).utcOffset()-r().tz(p,t.timezoneName).utcOffset()})}},63082:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ge});var l=a(67294),n=a(5977),o=a(61988),r=a(22102),i=a(51995),s=a(31069),c=a(30381),d=a.n(c),u=a(29848),p=a(35932),m=a(34581),h=a(58593),v=a(9678),g=a(62753),b=a(12441),Z=a(27600),f=a(14114),y=a(46714),x=a(11965),_=a(38097),S=a(28745);const N=e=>x.iv`
  color: ${e.colors.grayscale.light1};
  margin-right: ${2*e.gridUnit}px;
`;function k({type:e}){const t={icon:null,label:""};switch(e){case S.u.Email:t.icon=(0,x.tZ)(_.Z.Email,{css:N}),t.label=S.u.Email;break;case S.u.Slack:t.icon=(0,x.tZ)(_.Z.Slack,{css:N}),t.label=S.u.Slack;break;default:t.icon=null,t.label=""}return t.icon?(0,x.tZ)(h.u,{title:t.label,placement:"bottom"},t.icon):null}var C=a(19259),w=a(17198);d().updateLocale("en",{calendar:{lastDay:"[Yesterday at] LTS",sameDay:"[Today at] LTS",nextDay:"[Tomorrow at] LTS",lastWeek:"[last] dddd [at] LTS",nextWeek:"dddd [at] LTS",sameElse:"L"}});const T=i.iK.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,E=(0,i.iK)(_.Z.Refresh)`
  color: ${({theme:e})=>e.colors.primary.base};
  width: auto;
  height: ${({theme:e})=>5*e.gridUnit}px;
  position: relative;
  top: ${({theme:e})=>e.gridUnit}px;
  left: ${({theme:e})=>e.gridUnit}px;
  cursor: pointer;
`,$=({updatedAt:e,update:t})=>{const[a,n]=(0,l.useState)(d()(e));return(0,l.useEffect)((()=>{n((()=>d()(e)));const t=setInterval((()=>{n((()=>d()(e)))}),6e4);return()=>clearInterval(t)}),[e]),(0,x.tZ)(T,null,(0,o.t)("Last Updated %s",a.isValid()?a.calendar():"--"),t&&(0,x.tZ)(E,{onClick:t}))};var A=a(34858),D=a(40768),z=a(15926),R=a.n(z),M=a(74069),L=a(98978),j=a(87183),U=a(81315),q=a(91877),O=a(93185),P=a(42878),H=a(1483),G=a(82191),W=a(9433);const I=({value:e,onChange:t})=>{const a=(0,i.Fg)(),n=(0,l.useRef)(null),[r,s]=(0,l.useState)("picker"),c=(0,l.useCallback)((e=>{var a;t(e),null==(a=n.current)||a.setValue(e)}),[n,t]),[d,u]=(0,l.useState)();return(0,x.tZ)(l.Fragment,null,(0,x.tZ)(j.Y.Group,{onChange:e=>s(e.target.value),value:r},(0,x.tZ)("div",{className:"inline-container add-margin"},(0,x.tZ)(j.Y,{value:"picker"}),(0,x.tZ)(W.CronPicker,{clearButton:!1,value:e,setValue:c,disabled:"picker"!==r,displayError:"picker"===r,onError:u})),(0,x.tZ)("div",{className:"inline-container add-margin"},(0,x.tZ)(j.Y,{value:"input"}),(0,x.tZ)("span",{className:"input-label"},"CRON Schedule"),(0,x.tZ)(ie,{className:"styled-input"},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(G.II,{type:"text",name:"crontab",ref:n,style:d?{borderColor:a.colors.error.base}:{},placeholder:(0,o.t)("CRON expression"),disabled:"input"!==r,onBlur:e=>{t(e.target.value)},onPressEnter:()=>{var e;t((null==(e=n.current)?void 0:e.input.value)||"")}}))))))};var F=a(4715);const K=i.iK.div`
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
`,B=({setting:e=null,index:t,onUpdate:a,onRemove:n})=>{const{method:r,recipients:s,options:c}=e||{},[d,u]=(0,l.useState)(s||""),p=(0,i.Fg)();return e?(s&&d!==s&&u(s),(0,x.tZ)(K,null,(0,x.tZ)("div",{className:"inline-container"},(0,x.tZ)(ie,null,(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(F.P,{ariaLabel:(0,o.t)("Delivery method"),onChange:l=>{if(u(""),a){const n={...e,method:l,recipients:""};a(t,n)}},placeholder:(0,o.t)("Select Delivery Method"),options:(c||[]).map((e=>({label:e,value:e}))),value:r}))),void 0!==r&&n?(0,x.tZ)("span",{role:"button",tabIndex:0,className:"delete-button",onClick:()=>n(t)},(0,x.tZ)(_.Z.Trash,{iconColor:p.colors.grayscale.base})):null),void 0!==r?(0,x.tZ)(ie,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)(r)),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("textarea",{name:"recipients",value:d,onChange:l=>{const{target:n}=l;if(u(n.value),a){const l={...e,recipients:n.value};a(t,l)}}})),(0,x.tZ)("div",{className:"helper"},(0,o.t)('Recipients are separated by "," or ";"'))):null)):null},Y=["pivot_table","pivot_table_v2","table","paired_ttest"],V=["Email"],J="PNG",Q=[{label:(0,o.t)("< (Smaller than)"),value:"<",order:0},{label:(0,o.t)("> (Larger than)"),value:">",order:1},{label:(0,o.t)("<= (Smaller or equal)"),value:"<=",order:2},{label:(0,o.t)(">= (Larger or equal)"),value:">=",order:3},{label:(0,o.t)("== (Is equal)"),value:"==",order:4},{label:(0,o.t)("!= (Is not equal)"),value:"!=",order:5},{label:(0,o.t)("Not null"),value:"not null",order:6}],X=[{label:(0,o.t)("None"),value:0},{label:(0,o.t)("30 days"),value:30},{label:(0,o.t)("60 days"),value:60},{label:(0,o.t)("90 days"),value:90}],ee="0 * * * *",te={active:!0,creation_method:"alerts_reports",crontab:ee,log_retention:90,working_timeout:3600,name:"",owners:[],recipients:[],sql:"",validator_config_json:{},validator_type:"",grace_period:void 0},ae=(0,i.iK)(M.Z)`
  .ant-modal-body {
    overflow: initial;
  }
`,le=e=>x.iv`
  margin: auto ${2*e.gridUnit}px auto 0;
  color: ${e.colors.grayscale.base};
`,ne=i.iK.div`
  display: flex;
  min-width: 1000px;
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
    font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
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
`,se=(0,i.iK)(j.Y)`
  display: block;
  line-height: ${({theme:e})=>7*e.gridUnit}px;
`,ce=(0,i.iK)(j.Y.Group)`
  margin-left: ${({theme:e})=>5.5*e.gridUnit}px;
`,de=i.iK.div`
  color: ${({theme:e})=>e.colors.primary.dark1};
  cursor: pointer;

  i {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
  }

  &.disabled {
    color: ${({theme:e})=>e.colors.grayscale.light1};
    cursor: default;
  }
`,ue=({status:e="active",onClick:t})=>"hidden"===e?null:(0,x.tZ)(de,{className:e,onClick:()=>{"disabled"!==e&&t()}},(0,x.tZ)("i",{className:"fa fa-plus"})," ","active"===e?(0,o.t)("Add notification method"):(0,o.t)("Add delivery method")),pe=(0,f.Z)((({addDangerToast:e,onAdd:t,onHide:a,show:n,alert:r=null,isReport:i=!1})=>{var c,d,u,p,m,h,v;const g=(0,H.c)(),Z=(null==g?void 0:g.ALERT_REPORTS_NOTIFICATION_METHODS)||V,[f,y]=(0,l.useState)(!0),[S,N]=(0,l.useState)(),[k,C]=(0,l.useState)(!0),[w,T]=(0,l.useState)("dashboard"),[E,$]=(0,l.useState)(J),[D,z]=(0,l.useState)(!1),[M,G]=(0,l.useState)([]),[W,F]=(0,l.useState)([]),[K,de]=(0,l.useState)([]),[pe,me]=(0,l.useState)(""),he=null!==r,ve="chart"===w&&((0,q.cr)(O.T.ALERTS_ATTACH_REPORTS)||i),[ge,be]=(0,l.useState)("active"),[Ze,fe]=(0,l.useState)([]),ye=(e,t)=>{const a=Ze.slice();a[e]=t,fe(a),void 0!==t.method&&"hidden"!==ge&&be("active")},xe=e=>{const t=Ze.slice();t.splice(e,1),fe(t),be("active")},{state:{loading:_e,resource:Se,error:Ne},fetchResource:ke,createResource:Ce,updateResource:we,clearError:Te}=(0,A.LE)("report",(0,o.t)("report"),e),Ee=()=>{Te(),C(!0),a(),fe([]),N({...te}),be("active")},$e=(0,l.useMemo)((()=>(e="",t,a)=>{const l=R().encode({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/owners?q=${l}`}).then((e=>({data:e.json.result.map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),Ae=(0,l.useCallback)((e=>{const t=e||(null==S?void 0:S.database);if(!t||t.label)return null;let a;return M.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a}),[null==S?void 0:S.database,M]),De=(e,t)=>{N((a=>({...a,[e]:t})))},ze=(0,l.useMemo)((()=>(e="",t,a)=>{const l=R().encode({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/database?q=${l}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return G(t),{data:t,totalCount:e.json.count}}))}),[]),Re=S&&S.database&&!S.database.label;(0,l.useEffect)((()=>{Re&&De("database",Ae())}),[Re,Ae]);const Me=(0,l.useMemo)((()=>(e="",t,a)=>{const l=R().encode({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/dashboard?q=${l}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return F(t),{data:t,totalCount:e.json.count}}))}),[]),Le=e=>{const t=e||(null==S?void 0:S.dashboard);if(!t||t.label)return null;let a;return W.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a},je=(0,l.useCallback)((e=>{const t=e||(null==S?void 0:S.chart);if(!t||t.label)return null;let a;return K.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a}),[K,null==S?void 0:S.chart]),Ue=S&&S.chart&&!S.chart.label;(0,l.useEffect)((()=>{Ue&&De("chart",je())}),[je,Ue]);const qe=(0,l.useMemo)((()=>(e="",t,a)=>{const l=R().encode({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/chart?q=${l}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return de(t),{data:t,totalCount:e.json.count}}))}),[]),Oe=e=>{const{target:t}=e;De(t.name,t.value)},Pe=e=>{const{target:t}=e,a=+t.value;De(t.name,0===a?null:a?Math.max(a,1):a)};(0,l.useEffect)((()=>{if(he&&(null==S||!S.id||(null==r?void 0:r.id)!==S.id||k&&n)){if(r&&null!==r.id&&!_e&&!Ne){const e=r.id||0;ke(e)}}else!he&&(!S||S.id||k&&n)&&(N({...te}),fe([]),be("active"))}),[r]),(0,l.useEffect)((()=>{if(Se){const e=(Se.recipients||[]).map((e=>{const t="string"==typeof e.recipient_config_json?JSON.parse(e.recipient_config_json):{};return{method:e.type,recipients:t.target||e.recipient_config_json,options:Z}}));fe(e),be(e.length===Z.length?"hidden":"active"),T(Se.chart?"chart":"dashboard"),$(Se.chart&&Se.report_format||J);const t="string"==typeof Se.validator_config_json?JSON.parse(Se.validator_config_json):Se.validator_config_json;z("not null"===Se.validator_type),Se.chart&&me(Se.chart.viz_type),N({...Se,chart:Se.chart?je(Se.chart)||{value:Se.chart.id,label:Se.chart.slice_name}:void 0,dashboard:Se.dashboard?Le(Se.dashboard)||{value:Se.dashboard.id,label:Se.dashboard.dashboard_title}:void 0,database:Se.database?Ae(Se.database)||{value:Se.database.id,label:Se.database.database_name}:void 0,owners:((null==r?void 0:r.owners)||[]).map((e=>({value:e.value||e.id,label:e.label||`${e.first_name} ${e.last_name}`}))),validator_config_json:"not null"===Se.validator_type?{op:"not null"}:t})}}),[Se]);const He=S||{};return(0,l.useEffect)((()=>{var e,t,a,l,n,o;S&&null!=(e=S.name)&&e.length&&null!=(t=S.owners)&&t.length&&null!=(a=S.crontab)&&a.length&&void 0!==S.working_timeout&&("dashboard"===w&&S.dashboard||"chart"===w&&S.chart)&&(()=>{if(!Ze.length)return!1;let e=!1;return Ze.forEach((t=>{var a;t.method&&null!=(a=t.recipients)&&a.length&&(e=!0)})),e})()&&(i||S.database&&null!=(l=S.sql)&&l.length&&(D||null!=(n=S.validator_config_json)&&n.op)&&(D||void 0!==(null==(o=S.validator_config_json)?void 0:o.threshold)))?y(!1):y(!0)}),[He.name,He.owners,He.database,He.sql,He.validator_config_json,He.crontab,He.working_timeout,He.dashboard,He.chart,w,Ze,D]),k&&n&&C(!1),(0,x.tZ)(ae,{className:"no-content-padding",responsive:!0,disablePrimaryButton:f,onHandledPrimaryAction:()=>{var e,a,l;const n=[];Ze.forEach((e=>{e.method&&e.recipients.length&&n.push({recipient_config_json:{target:e.recipients},type:e.method})}));const o={...S,type:i?"Report":"Alert",validator_type:D?"not null":"operator",validator_config_json:D?{}:null==S?void 0:S.validator_config_json,chart:"chart"===w?null==S||null==(e=S.chart)?void 0:e.value:null,dashboard:"dashboard"===w?null==S||null==(a=S.dashboard)?void 0:a.value:null,database:null==S||null==(l=S.database)?void 0:l.value,owners:((null==S?void 0:S.owners)||[]).map((e=>e.value||e.id)),recipients:n,report_format:"dashboard"===w?J:E||J};if(o.recipients&&!o.recipients.length&&delete o.recipients,o.context_markdown="string",he){if(S&&S.id){const e=S.id;delete o.id,delete o.created_by,delete o.last_eval_dttm,delete o.last_state,delete o.last_value,delete o.last_value_row_json,we(e,o).then((e=>{e&&(t&&t(),Ee())}))}}else S&&Ce(o).then((e=>{e&&(t&&t(e),Ee())}))},onHide:Ee,primaryButtonName:he?(0,o.t)("Save"):(0,o.t)("Add"),show:n,width:"100%",maxWidth:"1450px",title:(0,x.tZ)("h4",null,he?(0,x.tZ)(_.Z.EditAlt,{css:le}):(0,x.tZ)(_.Z.PlusLarge,{css:le}),he&&i?(0,o.t)("Edit Report"):he?(0,o.t)("Edit Alert"):i?(0,o.t)("Add Report"):(0,o.t)("Add Alert"))},(0,x.tZ)(ne,null,(0,x.tZ)("div",{className:"header-section"},(0,x.tZ)(ie,null,(0,x.tZ)("div",{className:"control-label"},i?(0,o.t)("Report name"):(0,o.t)("Alert name"),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"text",name:"name",value:S?S.name:"",placeholder:i?(0,o.t)("Report name"):(0,o.t)("Alert name"),onChange:Oe}))),(0,x.tZ)(ie,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Owners"),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(U.Z,{ariaLabel:(0,o.t)("Owners"),allowClear:!0,name:"owners",mode:"multiple",value:(null==S?void 0:S.owners)||[],options:$e,onChange:e=>{De("owners",e||[])}}))),(0,x.tZ)(ie,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Description")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"text",name:"description",value:S&&S.description||"",placeholder:(0,o.t)("Description"),onChange:Oe}))),(0,x.tZ)(re,null,(0,x.tZ)(b.r,{onChange:e=>{De("active",e)},checked:!S||S.active}),(0,x.tZ)("div",{className:"switch-label"},"Active"))),(0,x.tZ)("div",{className:"column-section"},!i&&(0,x.tZ)("div",{className:"column condition"},(0,x.tZ)(oe,null,(0,x.tZ)("h4",null,(0,o.t)("Alert condition"))),(0,x.tZ)(ie,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Database"),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(U.Z,{ariaLabel:(0,o.t)("Database"),name:"source",value:null!=S&&null!=(c=S.database)&&c.label&&null!=S&&null!=(d=S.database)&&d.value?{value:S.database.value,label:S.database.label}:void 0,options:ze,onChange:e=>{De("database",e||[])}}))),(0,x.tZ)(ie,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("SQL Query"),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)(P.Z,{name:"sql",language:"sql",offerEditInModal:!1,minLines:15,maxLines:15,onChange:e=>{De("sql",e||"")},readOnly:!1,initialValue:null==Se?void 0:Se.sql,key:null==S?void 0:S.id})),(0,x.tZ)("div",{className:"inline-container wrap"},(0,x.tZ)(ie,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Trigger Alert If..."),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(U.Z,{ariaLabel:(0,o.t)("Condition"),onChange:e=>{var t;z("not null"===e);const a={op:e,threshold:S?null==(t=S.validator_config_json)?void 0:t.threshold:void 0};De("validator_config_json",a)},placeholder:"Condition",value:(null==S||null==(u=S.validator_config_json)?void 0:u.op)||void 0,options:Q,sortComparator:(0,U.m)("order")}))),(0,x.tZ)(ie,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Value"),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"number",name:"threshold",disabled:D,value:S&&S.validator_config_json&&void 0!==S.validator_config_json.threshold?S.validator_config_json.threshold:"",placeholder:(0,o.t)("Value"),onChange:e=>{var t;const{target:a}=e,l={op:S?null==(t=S.validator_config_json)?void 0:t.op:void 0,threshold:a.value};De("validator_config_json",l)}}))))),(0,x.tZ)("div",{className:"column schedule"},(0,x.tZ)(oe,null,(0,x.tZ)("h4",null,i?(0,o.t)("Report schedule"):(0,o.t)("Alert condition schedule")),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)(I,{value:(null==S?void 0:S.crontab)||ee,onChange:e=>De("crontab",e)}),(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Timezone")),(0,x.tZ)("div",{className:"input-container",css:e=>(e=>x.iv`
  margin: ${3*e.gridUnit}px 0;
`)(e)},(0,x.tZ)(L.Z,{onTimezoneChange:e=>{De("timezone",e)},timezone:null==S?void 0:S.timezone})),(0,x.tZ)(oe,null,(0,x.tZ)("h4",null,(0,o.t)("Schedule settings"))),(0,x.tZ)(ie,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Log retention"),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(U.Z,{ariaLabel:(0,o.t)("Log retention"),placeholder:(0,o.t)("Log retention"),onChange:e=>{De("log_retention",e)},value:"number"==typeof(null==S?void 0:S.log_retention)?null==S?void 0:S.log_retention:90,options:X,sortComparator:(0,U.m)("value")}))),(0,x.tZ)(ie,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Working timeout"),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"number",min:"1",name:"working_timeout",value:(null==S?void 0:S.working_timeout)||"",placeholder:(0,o.t)("Time in seconds"),onChange:Pe}),(0,x.tZ)("span",{className:"input-label"},"seconds"))),!i&&(0,x.tZ)(ie,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Grace period")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"number",min:"1",name:"grace_period",value:(null==S?void 0:S.grace_period)||"",placeholder:(0,o.t)("Time in seconds"),onChange:Pe}),(0,x.tZ)("span",{className:"input-label"},"seconds")))),(0,x.tZ)("div",{className:"column message"},(0,x.tZ)(oe,null,(0,x.tZ)("h4",null,(0,o.t)("Message content")),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)(j.Y.Group,{onChange:e=>{const{target:t}=e;setTimeout((()=>T(t.value)),200)},value:w},(0,x.tZ)(se,{value:"dashboard"},(0,o.t)("Dashboard")),(0,x.tZ)(se,{value:"chart"},(0,o.t)("Chart"))),(0,x.tZ)(U.Z,{ariaLabel:(0,o.t)("Chart"),css:(0,x.iv)({display:"chart"===w?"inline":"none"},"",""),name:"chart",value:null!=S&&null!=(p=S.chart)&&p.label&&null!=S&&null!=(m=S.chart)&&m.value?{value:S.chart.value,label:S.chart.label}:void 0,options:qe,onChange:e=>{(e=>{s.Z.get({endpoint:`/api/v1/chart/${e.value}`}).then((e=>me(e.json.result.viz_type)))})(e),De("chart",e||void 0),De("dashboard",null)}}),(0,x.tZ)(U.Z,{ariaLabel:(0,o.t)("Dashboard"),css:(0,x.iv)({display:"dashboard"===w?"inline":"none"},"",""),name:"dashboard",value:null!=S&&null!=(h=S.dashboard)&&h.label&&null!=S&&null!=(v=S.dashboard)&&v.value?{value:S.dashboard.value,label:S.dashboard.label}:void 0,options:Me,onChange:e=>{De("dashboard",e||void 0),De("chart",null)}}),ve&&(0,x.tZ)("div",{className:"inline-container"},(0,x.tZ)(ce,{onChange:e=>{const{target:t}=e;$(t.value)},value:E},(0,x.tZ)(se,{value:"PNG"},(0,o.t)("Send as PNG")),(0,x.tZ)(se,{value:"CSV"},(0,o.t)("Send as CSV")),Y.includes(pe)&&(0,x.tZ)(se,{value:"TEXT"},(0,o.t)("Send as text")))),(0,x.tZ)(oe,null,(0,x.tZ)("h4",null,(0,o.t)("Notification method")),(0,x.tZ)("span",{className:"required"},"*")),Ze.map(((e,t)=>(0,x.tZ)(B,{setting:e,index:t,key:`NotificationMethod-${t}`,onUpdate:ye,onRemove:xe}))),(0,x.tZ)(ue,{status:ge,onClick:()=>{const e=Ze.slice();e.push({recipients:"",options:Z}),fe(e),be(e.length===Z.length?"hidden":"disabled")}})))))})),me={[S.Z.Success]:(0,o.t)("Success"),[S.Z.Working]:(0,o.t)("Working"),[S.Z.Error]:(0,o.t)("Error"),[S.Z.Noop]:(0,o.t)("Not triggered"),[S.Z.Grace]:(0,o.t)("On Grace")},he=(0,r.Z)({requestType:"rison",method:"DELETE",endpoint:"/api/v1/report/"}),ve=i.iK.div`
  width: 100%;
  padding: 0 ${({theme:e})=>4*e.gridUnit}px
    ${({theme:e})=>3*e.gridUnit}px;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};
`,ge=(0,f.Z)((function({addDangerToast:e,isReportEnabled:t=!1,user:a,addSuccessToast:r}){const i=t?(0,o.t)("report"):(0,o.t)("alert"),c=t?(0,o.t)("reports"):(0,o.t)("alerts"),f=t?"Reports":"Alerts",_=(0,l.useMemo)((()=>[{id:"type",operator:v.p.equals,value:t?"Report":"Alert"}]),[t]),{state:{loading:N,resourceCount:T,resourceCollection:E,bulkSelectEnabled:z,lastFetched:R},hasPerm:M,fetchData:L,refreshData:j,toggleBulkSelect:U}=(0,A.Yi)("report",(0,o.t)("reports"),e,!0,void 0,_),{updateResource:q}=(0,A.LE)("report",(0,o.t)("reports"),e),[O,P]=(0,l.useState)(!1),[H,G]=(0,l.useState)(null),[W,I]=(0,l.useState)(null);function F(e){G(e),P(!0)}const K=M("can_write"),B=M("can_write"),Y=M("can_write");(0,l.useEffect)((()=>{z&&B&&U()}),[t]);const V=[{id:"name",desc:!0}],J=(0,l.useMemo)((()=>[{Cell:({row:{original:{last_state:e}}})=>(0,x.tZ)(y.Z,{state:e,isReportEnabled:t}),accessor:"last_state",size:"xs",disableSortBy:!0},{Cell:({row:{original:{last_eval_dttm:e}}})=>e?d().utc(e).local().format(Z.v2):"",accessor:"last_eval_dttm",Header:(0,o.t)("Last run"),size:"lg"},{accessor:"name",Header:(0,o.t)("Name"),size:"xl"},{Header:(0,o.t)("Schedule"),accessor:"crontab_humanized",size:"xl",Cell:({row:{original:{crontab_humanized:e=""}}})=>(0,x.tZ)(h.u,{title:e,placement:"topLeft"},(0,x.tZ)("span",null,e))},{Cell:({row:{original:{recipients:e}}})=>e.map((e=>(0,x.tZ)(k,{key:e.id,type:e.type}))),accessor:"recipients",Header:(0,o.t)("Notification method"),disableSortBy:!0,size:"xl"},{accessor:"created_by",disableSortBy:!0,hidden:!0,size:"xl"},{Cell:({row:{original:{owners:e=[]}}})=>(0,x.tZ)(m.Z,{users:e}),Header:(0,o.t)("Owners"),id:"owners",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>(0,x.tZ)(b.r,{checked:e.active,onClick:t=>((e,t)=>{if(e&&e.id){const a=e.id;q(a,{active:t}).then((()=>{j()}))}})(e,t),size:"small"}),Header:(0,o.t)("Active"),accessor:"active",id:"active",size:"xl"},{Cell:({row:{original:e}})=>{const t=(0,n.k6)(),a=[K?{label:"execution-log-action",tooltip:(0,o.t)("Execution log"),placement:"bottom",icon:"Note",onClick:()=>t.push(`/${e.type.toLowerCase()}/${e.id}/log`)}:null,K?{label:"edit-action",tooltip:(0,o.t)("Edit"),placement:"bottom",icon:"Edit",onClick:()=>F(e)}:null,B?{label:"delete-action",tooltip:(0,o.t)("Delete"),placement:"bottom",icon:"Trash",onClick:()=>I(e)}:null].filter((e=>null!==e));return(0,x.tZ)(u.Z,{actions:a})},Header:(0,o.t)("Actions"),id:"actions",hidden:!K&&!B,disableSortBy:!0,size:"xl"}]),[B,K,t]),Q=[];Y&&Q.push({name:(0,x.tZ)(l.Fragment,null,(0,x.tZ)("i",{className:"fa fa-plus"})," ",i),buttonStyle:"primary",onClick:()=>{F(null)}}),B&&Q.push({name:(0,o.t)("Bulk select"),onClick:U,buttonStyle:"secondary","data-test":"bulk-select-toggle"});const X=(0,x.tZ)(p.Z,{buttonStyle:"primary",onClick:()=>F(null)},(0,x.tZ)("i",{className:"fa fa-plus"})," ",i),ee={message:(0,o.t)("No %s yet",c),slot:Y?X:null},te=(0,l.useMemo)((()=>[{Header:(0,o.t)("Created by"),id:"created_by",input:"select",operator:v.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,D.tm)("report","created_by",(0,D.v$)((e=>(0,o.t)("An error occurred while fetching created by values: %s",e))),a),paginate:!0},{Header:(0,o.t)("Status"),id:"last_state",input:"select",operator:v.p.equals,unfilteredLabel:"Any",selects:[{label:me[S.Z.Success],value:S.Z.Success},{label:me[S.Z.Working],value:S.Z.Working},{label:me[S.Z.Error],value:S.Z.Error},{label:me[S.Z.Noop],value:S.Z.Noop},{label:me[S.Z.Grace],value:S.Z.Grace}]},{Header:(0,o.t)("Search"),id:"name",input:"search",operator:v.p.contains}]),[]);return(0,x.tZ)(l.Fragment,null,(0,x.tZ)(g.Z,{activeChild:f,name:(0,o.t)("Alerts & reports"),tabs:[{name:"Alerts",label:(0,o.t)("Alerts"),url:"/alert/list/",usesRouter:!0,"data-test":"alert-list"},{name:"Reports",label:(0,o.t)("Reports"),url:"/report/list/",usesRouter:!0,"data-test":"report-list"}],buttons:Q},(0,x.tZ)(ve,null,(0,x.tZ)($,{updatedAt:R,update:()=>j()}))),(0,x.tZ)(pe,{alert:H,addDangerToast:e,layer:H,onHide:()=>{P(!1),G(null),j()},show:O,isReport:t,key:(null==H?void 0:H.id)||`${(new Date).getTime()}`}),W&&(0,x.tZ)(w.Z,{description:(0,o.t)("This action will permanently delete %s.",W.name),onConfirm:()=>{W&&(({id:t,name:a})=>{s.Z.delete({endpoint:`/api/v1/report/${t}`}).then((()=>{j(),I(null),r((0,o.t)("Deleted: %s",a))}),(0,D.v$)((t=>e((0,o.t)("There was an issue deleting %s: %s",a,t)))))})(W)},onHide:()=>I(null),open:!0,title:(0,o.t)("Delete %s?",i)}),(0,x.tZ)(C.Z,{title:(0,o.t)("Please confirm"),description:(0,o.t)("Are you sure you want to delete the selected %s?",c),onConfirm:async t=>{try{const{message:e}=await he(t.map((({id:e})=>e)));j(),r(e)}catch(t){(0,D.v$)((t=>e((0,o.t)("There was an issue deleting the selected %s: %s",c,t))))(t)}}},(e=>{const t=B?[{key:"delete",name:(0,o.t)("Delete"),onSelect:e,type:"danger"}]:[];return(0,x.tZ)(v.Z,{className:"alerts-list-view",columns:J,count:T,data:E,emptyState:ee,fetchData:L,filters:te,initialSort:V,loading:N,bulkActions:t,bulkSelectEnabled:z,disableBulkSelect:U,pageSize:25})})))}))},46714:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(51995),n=a(61988),o=(a(67294),a(58593)),r=a(38097),i=a(28745),s=a(11965);function c(e,t,a){switch(e){case i.Z.Working:return a.colors.primary.base;case i.Z.Error:return a.colors.error.base;case i.Z.Success:return t?a.colors.success.base:a.colors.alert.base;case i.Z.Noop:return a.colors.success.base;case i.Z.Grace:return a.colors.alert.base;default:return a.colors.grayscale.base}}function d({state:e,isReportEnabled:t=!1}){const a=(0,l.Fg)(),d={icon:r.Z.Check,label:"",status:""};switch(e){case i.Z.Success:d.icon=t?r.Z.Check:r.Z.AlertSolidSmall,d.label=t?(0,n.t)("Report sent"):(0,n.t)("Alert triggered, notification sent"),d.status=i.Z.Success;break;case i.Z.Working:d.icon=r.Z.Running,d.label=t?(0,n.t)("Report sending"):(0,n.t)("Alert running"),d.status=i.Z.Working;break;case i.Z.Error:d.icon=r.Z.XSmall,d.label=t?(0,n.t)("Report failed"):(0,n.t)("Alert failed"),d.status=i.Z.Error;break;case i.Z.Noop:d.icon=r.Z.Check,d.label=(0,n.t)("Nothing triggered"),d.status=i.Z.Noop;break;case i.Z.Grace:d.icon=r.Z.AlertSolidSmall,d.label=(0,n.t)("Alert Triggered, In Grace Period"),d.status=i.Z.Grace;break;default:d.icon=r.Z.Check,d.label=(0,n.t)("Nothing triggered"),d.status=i.Z.Noop}const u=d.icon;return(0,s.tZ)(o.u,{title:d.label,placement:"bottomLeft"},(0,s.tZ)(u,{iconColor:c(d.status,t,a)}))}},28745:(e,t,a)=>{var l,n;a.d(t,{Z:()=>l,u:()=>n}),function(e){e.Success="Success",e.Working="Working",e.Error="Error",e.Noop="Not triggered",e.Grace="On Grace"}(l||(l={})),function(e){e.Email="Email",e.Slack="Slack"}(n||(n={}))},1483:(e,t,a)=>{a.d(t,{c:()=>n});var l=a(37703);function n(){return(0,l.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}}}]);