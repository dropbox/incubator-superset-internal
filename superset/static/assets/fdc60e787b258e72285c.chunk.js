"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7177],{9433:(e,t,r)=>{r.d(t,{CronPicker:()=>c});var l=r(5872),a=r.n(l),i=(r(67294),r(38179)),n=r(55867),o=r(51995),s=r(61247),u=r(11965);const d={everyText:(0,n.t)("every"),emptyMonths:(0,n.t)("every month"),emptyMonthDays:(0,n.t)("every day of the month"),emptyMonthDaysShort:(0,n.t)("day of the month"),emptyWeekDays:(0,n.t)("every day of the week"),emptyWeekDaysShort:(0,n.t)("day of the week"),emptyHours:(0,n.t)("every hour"),emptyMinutes:(0,n.t)("every minute"),emptyMinutesForHourPeriod:(0,n.t)("every"),yearOption:(0,n.t)("year"),monthOption:(0,n.t)("month"),weekOption:(0,n.t)("week"),dayOption:(0,n.t)("day"),hourOption:(0,n.t)("hour"),minuteOption:(0,n.t)("minute"),rebootOption:(0,n.t)("reboot"),prefixPeriod:(0,n.t)("Every"),prefixMonths:(0,n.t)("in"),prefixMonthDays:(0,n.t)("on"),prefixWeekDays:(0,n.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,n.t)("and"),prefixHours:(0,n.t)("at"),prefixMinutes:(0,n.t)(":"),prefixMinutesForHourPeriod:(0,n.t)("at"),suffixMinutesForHourPeriod:(0,n.t)("minute(s)"),errorInvalidCron:(0,n.t)("Invalid cron expression"),clearButtonText:(0,n.t)("Clear"),weekDays:[(0,n.t)("Sunday"),(0,n.t)("Monday"),(0,n.t)("Tuesday"),(0,n.t)("Wednesday"),(0,n.t)("Thursday"),(0,n.t)("Friday"),(0,n.t)("Saturday")],months:[(0,n.t)("January"),(0,n.t)("February"),(0,n.t)("March"),(0,n.t)("April"),(0,n.t)("May"),(0,n.t)("June"),(0,n.t)("July"),(0,n.t)("August"),(0,n.t)("September"),(0,n.t)("October"),(0,n.t)("November"),(0,n.t)("December")],altWeekDays:[(0,n.t)("SUN"),(0,n.t)("MON"),(0,n.t)("TUE"),(0,n.t)("WED"),(0,n.t)("THU"),(0,n.t)("FRI"),(0,n.t)("SAT")],altMonths:[(0,n.t)("JAN"),(0,n.t)("FEB"),(0,n.t)("MAR"),(0,n.t)("APR"),(0,n.t)("MAY"),(0,n.t)("JUN"),(0,n.t)("JUL"),(0,n.t)("AUG"),(0,n.t)("SEP"),(0,n.t)("OCT"),(0,n.t)("NOV"),(0,n.t)("DEC")]},c=(0,o.iK)((e=>(0,u.tZ)(i.ZP,{getPopupContainer:e=>e.parentElement},(0,u.tZ)(s.default,a()({locale:d},e)))))`
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
`},67852:(e,t,r)=>{r.d(t,{E5:()=>$,G:()=>g,Ks:()=>Z,Mv:()=>p,OD:()=>f,Su:()=>b,aQ:()=>x,gH:()=>w,gt:()=>y,kq:()=>v,nn:()=>c,oA:()=>u,oo:()=>h,xZ:()=>m,zV:()=>d});var l=r(51995),a=r(11965),i=r(74069),n=r(35932),o=r(87183),s=r(9433);const u=(0,l.iK)(i.Z)`
  .ant-modal-body {
    padding: 0;
  }
`,d=l.iK.div`
  padding: ${e=>{let{theme:t}=e;return`${3*t.gridUnit}px ${4*t.gridUnit}px ${2*t.gridUnit}px`}};
  label {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }
`,c=l.iK.div`
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  padding: ${e=>{let{theme:t}=e;return`${4*t.gridUnit}px ${4*t.gridUnit}px ${6*t.gridUnit}px`}};
  .ant-select {
    width: 100%;
  }
  .control-label {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }
`,p=l.iK.span`
  span {
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
`,h=l.iK.div`
  margin-bottom: ${e=>{let{theme:t}=e;return 7*t.gridUnit}}px;

  h4 {
    margin-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  }
`,m=(0,l.iK)(s.CronPicker)`
  margin-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  width: ${e=>{let{theme:t}=e;return 120*t.gridUnit}}px;
`,g=l.iK.p`
  color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
`,y=a.iv`
  margin-bottom: 0;
`,f=(0,l.iK)(n.Z)`
  width: ${e=>{let{theme:t}=e;return 40*t.gridUnit}}px;
`,b=e=>a.iv`
  margin: ${3*e.gridUnit}px 0 ${2*e.gridUnit}px;
`,v=e=>a.iv`
  margin: ${3*e.gridUnit}px 0;
`,x=l.iK.div`
  margin: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px 0
    ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
`,Z=(0,l.iK)(o.Y)`
  display: block;
  line-height: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
`,$=(0,l.iK)(o.Y.Group)`
  margin-left: ${e=>{let{theme:t}=e;return.5*t.gridUnit}}px;
`,w=e=>a.iv`
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
`},6065:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var l=r(51995),a=r(55867),i=r(31069),n=r(67294),o=r(19259),s=r(70163),u=r(18782),d=r(14114),c=r(58593),p=r(86074),h=r(15926),m=r.n(h),g=r(34858),y=r(11965),f=r(74069),b=r(81315),v=r(84101),x=r(49238),Z=r(67852),$=r(8272);const w=[{label:(0,a.t)("Regular"),value:"Regular"},{label:(0,a.t)("Base"),value:"Base"}];var k;!function(e){e.REGULAR="Regular",e.BASE="Base"}(k||(k={}));const U=(0,l.iK)(f.Z)`
  max-width: 1200px;
  width: 100%;
  .ant-modal-body {
    overflow: initial;
  }
`,S=e=>y.iv`
  margin: auto ${2*e.gridUnit}px auto 0;
  color: ${e.colors.grayscale.base};
`,T=l.iK.div`
  display: flex;
  flex-direction: column;
  padding: ${e=>{let{theme:t}=e;return`${3*t.gridUnit}px ${4*t.gridUnit}px ${2*t.gridUnit}px`}};

  label {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }
`,N=l.iK.div`
  display: flex;
  flex-direction: column;
  margin: ${e=>{let{theme:t}=e;return t.gridUnit}}px;

  margin-bottom: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;

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
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 100px;
    resize: none;
  }

  .required {
    margin-left: ${e=>{let{theme:t}=e;return t.gridUnit/2}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
  }
`,E={name:"",filter_type:k.REGULAR,tables:[],roles:[],clause:"",group_key:"",description:""},R=function(e){const{rule:t,addDangerToast:r,addSuccessToast:l,onHide:o,show:u}=e,[d,c]=(0,n.useState)({...E}),[p,h]=(0,n.useState)(!0),f=null!==t,{state:{loading:R,resource:A,error:C},fetchResource:_,createResource:M,updateResource:D,clearError:F}=(0,g.LE)("rowlevelsecurity",(0,a.t)("rowlevelsecurity"),r);(0,n.useEffect)((()=>{f?null===(null==t?void 0:t.id)||R||C||_(t.id):c({...E})}),[t]),(0,n.useEffect)((()=>{if(A){c({...A,id:null==t?void 0:t.id});const e=z();K("tables",(null==e?void 0:e.tables)||[]),K("roles",(null==e?void 0:e.roles)||[])}}),[A]);const z=(0,n.useCallback)((()=>{var e,t;if(!A)return null;const r=[],l=[];return null==(e=A.tables)||e.forEach((e=>{r.push({key:e.id,label:e.schema?`${e.schema}.${e.table_name}`:e.table_name,value:e.id})})),null==(t=A.roles)||t.forEach((e=>{l.push({key:e.id,label:e.name,value:e.id})})),{tables:r,roles:l}}),[null==A?void 0:A.tables,null==A?void 0:A.roles]),H=d||{};(0,n.useEffect)((()=>{q()}),[H.name,H.clause,null==H?void 0:H.tables]);const K=(e,t)=>{c((r=>({...r,[e]:t})))},P=e=>{K(e.name,e.value)},O=()=>{F(),c({...E}),o()},B=(0,n.useMemo)((()=>function(e,t,r){void 0===e&&(e="");const l=m().encode({filter:e,page:t,page_size:r});return i.Z.get({endpoint:`/api/v1/rowlevelsecurity/related/tables?q=${l}`}).then((e=>({data:e.json.result.map((e=>({label:e.text,value:e.value}))),totalCount:e.json.count})))}),[]),L=(0,n.useMemo)((()=>function(e,t,r){void 0===e&&(e="");const l=m().encode({filter:e,page:t,page_size:r});return i.Z.get({endpoint:`/api/v1/rowlevelsecurity/related/roles?q=${l}`}).then((e=>({data:e.json.result.map((e=>({label:e.text,value:e.value}))),totalCount:e.json.count})))}),[]),q=()=>{var e;null!=d&&d.name&&null!=d&&d.clause&&null!=(e=d.tables)&&e.length?h(!1):h(!0)};return(0,y.tZ)(U,{className:"no-content-padding",responsive:!0,show:u,onHide:O,primaryButtonName:f?(0,a.t)("Save"):(0,a.t)("Add"),disablePrimaryButton:p,onHandledPrimaryAction:()=>{var e,t;const r=[],i=[];null==(e=d.tables)||e.forEach((e=>r.push(e.key))),null==(t=d.roles)||t.forEach((e=>i.push(e.key)));const n={...d,tables:r,roles:i};if(f&&d.id){const e=d.id;delete n.id,D(e,n).then((e=>{e&&(l("Rule updated"),O())}))}else d&&M(n).then((e=>{e&&(l((0,a.t)("Rule added")),O())}))},width:"30%",maxWidth:"1450px",title:(0,y.tZ)("h4",null,f?(0,y.tZ)(s.Z.EditAlt,{css:S}):(0,y.tZ)(s.Z.PlusLarge,{css:S}),f?(0,a.t)("Edit Rule"):(0,a.t)("Add Rule"))},(0,y.tZ)(T,null,(0,y.tZ)("div",{className:"main-section"},(0,y.tZ)(N,null,(0,y.tZ)(x.QA,{id:"name",name:"name",className:"labeled-input",value:d?d.name:"",required:!0,validationMethods:{onChange:e=>{let{target:t}=e;return P(t)}},css:Z.gt,label:(0,a.t)("Rule Name")})),(0,y.tZ)(N,null,(0,y.tZ)("div",{className:"control-label"},(0,a.t)("Filter Type")," ",(0,y.tZ)($.Z,{tooltip:(0,a.t)("Regular filters add where clauses to queries if a user belongs to a role referenced in the filter, base filters apply filters to all queries except the roles defined in the filter, and can be used to define what users can see if no RLS filters within a filter group apply to them.")})),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(b.Z,{name:"filter_type",ariaLabel:(0,a.t)("Filter Type"),placeholder:(0,a.t)("Filter Type"),onChange:e=>{K("filter_type",e)},value:null==d?void 0:d.filter_type,options:w}))),(0,y.tZ)(N,null,(0,y.tZ)("div",{className:"control-label"},(0,a.t)("Tables")," ",(0,y.tZ)("span",{className:"required"},"*"),(0,y.tZ)($.Z,{tooltip:(0,a.t)("These are the tables this filter will be applied to.")})),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(v.Z,{ariaLabel:(0,a.t)("Tables"),mode:"multiple",onChange:e=>{K("tables",e||[])},value:(null==d?void 0:d.tables)||[],options:B}))),(0,y.tZ)(N,null,(0,y.tZ)("div",{className:"control-label"},d.filter_type===k.BASE?(0,a.t)("Excluded roles"):(0,a.t)("Roles")," ",(0,y.tZ)($.Z,{tooltip:(0,a.t)("For regular filters, these are the roles this filter will be applied to. For base filters, these are the roles that the filter DOES NOT apply to, e.g. Admin if admin should see all data.")})),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(v.Z,{ariaLabel:(0,a.t)("Roles"),mode:"multiple",onChange:e=>{K("roles",e||[])},value:(null==d?void 0:d.roles)||[],options:L}))),(0,y.tZ)(N,null,(0,y.tZ)(x.QA,{id:"group_key",name:"group_key",value:d?d.group_key:"",validationMethods:{onChange:e=>{let{target:t}=e;return P(t)}},css:Z.gt,label:(0,a.t)("Group Key"),hasTooltip:!0,tooltipText:(0,a.t)("Filters with the same group key will be ORed together within the group, while different filter groups will be ANDed together. Undefined group keys are treated as unique groups, i.e. are not grouped together. For example, if a table has three filters, of which two are for departments Finance and Marketing (group key = 'department'), and one refers to the region Europe (group key = 'region'), the filter clause would apply the filter (department = 'Finance' OR department = 'Marketing') AND (region = 'Europe').")})),(0,y.tZ)(N,null,(0,y.tZ)("div",{className:"control-label"},(0,y.tZ)(x.QA,{id:"clause",name:"clause",value:d?d.clause:"",required:!0,validationMethods:{onChange:e=>{let{target:t}=e;return P(t)}},css:Z.gt,label:(0,a.t)("Clause"),hasTooltip:!0,tooltipText:(0,a.t)("This is the condition that will be added to the WHERE clause. For example, to only return rows for a particular client, you might define a regular filter with the clause `client_id = 9`. To display no rows unless a user belongs to a RLS filter role, a base filter can be created with the clause `1 = 0` (always false).")}))),(0,y.tZ)(N,null,(0,y.tZ)("div",{className:"control-label"},(0,a.t)("Description")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)("textarea",{name:"description",value:d?d.description:"",onChange:e=>P(e.target)}))))))};var A=r(40768);const C=l.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`,_=(0,d.ZP)((function(e){const{addDangerToast:t,addSuccessToast:r,user:l}=e,[d,h]=(0,n.useState)(!1),[f,b]=(0,n.useState)(null),{state:{loading:v,resourceCount:x,resourceCollection:Z,bulkSelectEnabled:$},hasPerm:w,fetchData:k,refreshData:U,toggleBulkSelect:S}=(0,g.Yi)("rowlevelsecurity",(0,a.t)("Row Level Security"),t,!0,void 0,void 0,!0);function T(e){b(e),h(!0)}function N(){b(null),h(!1),U()}const E=w("can_write"),_=w("can_write"),M=w("can_export"),D=(0,n.useMemo)((()=>[{accessor:"name",Header:(0,a.t)("Name")},{accessor:"filter_type",Header:(0,a.t)("Filter Type"),size:"xl"},{accessor:"group_key",Header:(0,a.t)("Group Key"),size:"xl"},{accessor:"clause",Header:(0,a.t)("Clause")},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:t}}}=e;return(0,y.tZ)("span",{className:"no-wrap"},t)},Header:(0,a.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:e=>{let{row:{original:l}}=e;return(0,y.tZ)(C,{className:"actions"},E&&(0,y.tZ)(o.Z,{title:(0,a.t)("Please confirm"),description:(0,y.tZ)(n.Fragment,null,(0,a.t)("Are you sure you want to delete")," ",(0,y.tZ)("b",null,l.name)),onConfirm:()=>function(e,t,r,l){let{id:n,name:o}=e;return i.Z.delete({endpoint:`/api/v1/rowlevelsecurity/${n}`}).then((()=>{t(),r((0,a.t)("Deleted %s",o))}),(0,A.v$)((e=>l((0,a.t)("There was an issue deleting %s: %s",o,e)))))}(l,U,r,t)},(e=>(0,y.tZ)(c.u,{id:"delete-action-tooltip",title:(0,a.t)("Delete"),placement:"bottom"},(0,y.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,y.tZ)(s.Z.Trash,null))))),_&&(0,y.tZ)(c.u,{id:"edit-action-tooltip",title:(0,a.t)("Edit"),placement:"bottom"},(0,y.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>T(l)},(0,y.tZ)(s.Z.EditAlt,null))))},Header:(0,a.t)("Actions"),id:"actions",hidden:!_&&!E&&!M,disableSortBy:!0}]),[l.userId,_,E,M,w,U,t,r]),F={title:(0,a.t)("No Rules yet"),image:"filter-results.svg",buttonAction:()=>T(null),buttonText:_?(0,y.tZ)(n.Fragment,null,(0,y.tZ)("i",{className:"fa fa-plus"})," ","Rule"," "):null},z=(0,n.useMemo)((()=>[{Header:(0,a.t)("Name"),key:"search",id:"name",input:"search",operator:u.p.startsWith},{Header:(0,a.t)("Filter Type"),key:"filter_type",id:"filter_type",input:"select",operator:u.p.equals,unfilteredLabel:(0,a.t)("Any"),selects:[{label:(0,a.t)("Regular"),value:"Regular"},{label:(0,a.t)("Base"),value:"Base"}]},{Header:(0,a.t)("Group Key"),key:"search",id:"group_key",input:"search",operator:u.p.startsWith}]),[l]),H=[{id:"changed_on_delta_humanized",desc:!0}],K=[];return E&&(K.push({name:(0,y.tZ)(n.Fragment,null,(0,y.tZ)("i",{className:"fa fa-plus"})," ",(0,a.t)("Rule")),buttonStyle:"primary",onClick:()=>T(null)}),K.push({name:(0,a.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:S})),(0,y.tZ)(n.Fragment,null,(0,y.tZ)(p.Z,{name:(0,a.t)("Row Level Security"),buttons:K}),(0,y.tZ)(o.Z,{title:(0,a.t)("Please confirm"),description:(0,a.t)("Are you sure you want to delete the selected rules?"),onConfirm:function(e){const l=e.map((e=>{let{id:t}=e;return t}));return i.Z.delete({endpoint:`/api/v1/rowlevelsecurity/?q=${m().encode(l)}`}).then((()=>{U(),r((0,a.t)("Deleted"))}),(0,A.v$)((e=>t((0,a.t)("There was an issue deleting rules: %s",e)))))}},(e=>{const l=[];return E&&l.push({key:"delete",name:(0,a.t)("Delete"),type:"danger",onSelect:e}),(0,y.tZ)(n.Fragment,null,(0,y.tZ)(R,{rule:f,addDangerToast:t,onHide:N,addSuccessToast:r,show:d}),(0,y.tZ)(u.Z,{className:"rls-list-view",bulkActions:l,bulkSelectEnabled:$,disableBulkSelect:S,columns:D,count:x,data:Z,emptyState:F,fetchData:k,filters:z,initialSort:H,loading:v,pageSize:25}))})))}))}}]);
//# sourceMappingURL=fdc60e787b258e72285c.chunk.js.map