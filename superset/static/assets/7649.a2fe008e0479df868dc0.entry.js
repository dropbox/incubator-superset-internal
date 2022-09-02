"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7649,5296],{50948:(t,e,a)=>{a.d(e,{Z:()=>p});var i=a(51995),o=a(11965),s=a(94184),n=a.n(s),r=a(13423),l=a(67294),c=a(70163),d=a(1927);const u=i.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`,m=t=>o.iv`
  min-width: ${5*t.gridUnit}px;
  color: ${t.colors.grayscale.base};
`;function p({toast:t,onCloseToast:e}){const a=(0,l.useRef)(),[i,s]=(0,l.useState)(!1),p=()=>{s(!0)},h=(0,l.useCallback)((()=>{a.current&&clearTimeout(a.current),s((()=>(setTimeout((()=>{e(t.id)}),150),!1)))}),[e,t.id]);(0,l.useEffect)((()=>(setTimeout(p),t.duration>0&&(a.current=setTimeout(h,t.duration)),()=>{a.current&&clearTimeout(a.current)})),[h,t.duration]);let _="toast--success",b=(0,o.tZ)(c.Z.CircleCheckSolid,{css:t=>m(t)});return t.toastType===d.p.WARNING?(b=(0,o.tZ)(c.Z.WarningSolid,{css:m}),_="toast--warning"):t.toastType===d.p.DANGER?(b=(0,o.tZ)(c.Z.ErrorSolid,{css:m}),_="toast--danger"):t.toastType===d.p.INFO&&(b=(0,o.tZ)(c.Z.InfoSolid,{css:m}),_="toast--info"),(0,o.tZ)(u,{className:n()("alert","toast",i&&"toast--visible",_),role:"alert"},b,(0,o.tZ)(r.ZP,{content:t.text}),(0,o.tZ)("i",{className:"fa fa-close pull-right pointer",role:"button",tabIndex:0,onClick:h,"aria-label":"Close"}))}},5667:(t,e,a)=>{a.d(e,{Z:()=>r});var i=a(14890),o=a(37703),s=a(37355),n=a(72570);const r=(0,o.$j)((({messageToasts:t})=>({toasts:t})),(t=>(0,i.DE)({removeToast:n.RS},t)))(s.Z)},37355:(t,e,a)=>{a.d(e,{Z:()=>l});var i=a(67294),o=a(51995),s=a(50948),n=a(11965);const r=o.iK.div`
  max-width: 600px;
  position: fixed;
  ${({position:t})=>"bottom"===t?"bottom":"top"}: 0px;
  right: 0px;
  margin-right: 50px;
  margin-bottom: 50px;
  z-index: ${({theme:t})=>t.zIndex.max};
  word-break: break-word;

  .toast {
    background: ${({theme:t})=>t.colors.grayscale.dark1};
    border-radius: ${({theme:t})=>t.borderRadius};
    box-shadow: 0 2px 4px 0
      fade(
        ${({theme:t})=>t.colors.grayscale.dark2},
        ${({theme:t})=>t.opacity.mediumLight}
      );
    color: ${({theme:t})=>t.colors.grayscale.light5};
    opacity: 0;
    position: relative;
    transform: translateY(-100%);
    white-space: pre-line;
    will-change: transform, opacity;
    transition: transform ${({theme:t})=>t.transitionTiming}s,
      opacity ${({theme:t})=>t.transitionTiming}s;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
    }
  }

  .toast > button {
    color: ${({theme:t})=>t.colors.grayscale.light5};
    opacity: 1;
  }

  .toast--visible {
    opacity: 1;
    transform: translateY(0);
  }
`;function l({toasts:t,removeToast:e,position:a="bottom"}){return(0,n.tZ)(i.Fragment,null,t.length>0&&(0,n.tZ)(r,{id:"toast-presenter",position:a},t.map((t=>(0,n.tZ)(s.Z,{key:t.id,toast:t,onCloseToast:e})))))}},83673:(t,e,a)=>{a.d(e,{Z:()=>Z});var i=a(67294),o=a(74069),s=a(9875),n=a(35932),r=a(4715),l=a(15926),c=a.n(l),d=a(51995),u=a(61988),m=a(31069),p=a(98286),h=a(14114),_=a(11965);const b=r.qz.Item,f=(0,d.iK)(r.qz.Item)`
  margin-bottom: 0;
`,g=d.iK.span`
  margin-bottom: 0;
`,Z=(0,h.ZP)((function({slice:t,onHide:e,onSave:a,show:l,addSuccessToast:d}){const[h,Z]=(0,i.useState)(!1),[y]=r.qz.useForm(),[v,w]=(0,i.useState)(t.slice_name||""),[x,C]=(0,i.useState)(null);function T({error:t,statusText:e,message:a}){let i=t||e||(0,u.t)("An error has occurred");"Forbidden"===a&&(i=(0,u.t)("You do not have permission to edit this chart")),o.Z.error({title:"Error",content:i,okButtonProps:{danger:!0,className:"btn-danger"}})}const S=(0,i.useCallback)((async function(){try{var e;const a=(await m.Z.get({endpoint:`/api/v1/chart/${t.slice_id}`})).json.result;C(null==a||null==(e=a.owners)?void 0:e.map((t=>({value:t.id,label:`${t.first_name} ${t.last_name}`}))))}catch(t){T(await(0,p.O)(t))}}),[t.slice_id]),k=(0,i.useMemo)((()=>(t="",e,a)=>{const i=c().encode({filter:t,page:e,page_size:a});return m.Z.get({endpoint:`/api/v1/chart/related/owners?q=${i}`}).then((t=>({data:t.json.result.map((t=>({value:t.value,label:t.text}))),totalCount:t.json.count})))}),[]),I=(0,u.t)("Owners");return(0,i.useEffect)((()=>{S()}),[S]),(0,i.useEffect)((()=>{w(t.slice_name||"")}),[t.slice_name]),(0,_.tZ)(o.Z,{show:l,onHide:e,title:"Edit Chart Properties",footer:(0,_.tZ)(i.Fragment,null,(0,_.tZ)(n.Z,{htmlType:"button",buttonSize:"small",onClick:e,cta:!0},(0,u.t)("Cancel")),(0,_.tZ)(n.Z,{htmlType:"submit",buttonSize:"small",buttonStyle:"primary",onClick:y.submit,disabled:h||!v||t.is_managed_externally,tooltip:t.is_managed_externally?(0,u.t)("This chart is managed externally, and can't be edited in Superset"):"",cta:!0},(0,u.t)("Save"))),responsive:!0,wrapProps:{"data-test":"properties-edit-modal"}},(0,_.tZ)(r.qz,{form:y,onFinish:async i=>{Z(!0);const{certified_by:o,certification_details:s,description:n,cache_timeout:r}=i,l={slice_name:v||null,description:n||null,cache_timeout:r||null,certified_by:o||null,certification_details:o&&s?s:null};x&&(l.owners=x.map((t=>t.value)));try{const i=await m.Z.put({endpoint:`/api/v1/chart/${t.slice_id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),o={...l,...i.json.result,id:t.slice_id};a(o),d((0,u.t)("Chart properties updated")),e()}catch(t){T(await(0,p.O)(t))}Z(!1)},layout:"vertical",initialValues:{name:t.slice_name||"",description:t.description||"",cache_timeout:null!=t.cache_timeout?t.cache_timeout:"",certified_by:t.certified_by||"",certification_details:t.certified_by&&t.certification_details?t.certification_details:""}},(0,_.tZ)(r.X2,{gutter:16},(0,_.tZ)(r.JX,{xs:24,md:12},(0,_.tZ)("h3",null,(0,u.t)("Basic information")),(0,_.tZ)(b,{label:(0,u.t)("Name"),required:!0},(0,_.tZ)(s.II,{"aria-label":(0,u.t)("Name"),name:"name",type:"text",value:v,onChange:t=>{var e;return w(null!=(e=t.target.value)?e:"")}})),(0,_.tZ)(b,null,(0,_.tZ)(f,{label:(0,u.t)("Description"),name:"description"},(0,_.tZ)(s.Kx,{rows:3,style:{maxWidth:"100%"}})),(0,_.tZ)(g,{className:"help-block"},(0,u.t)("The description can be displayed as widget headers in the dashboard view. Supports markdown."))),(0,_.tZ)("h3",null,(0,u.t)("Certification")),(0,_.tZ)(b,null,(0,_.tZ)(f,{label:(0,u.t)("Certified by"),name:"certified_by"},(0,_.tZ)(s.II,{"aria-label":(0,u.t)("Certified by")})),(0,_.tZ)(g,{className:"help-block"},(0,u.t)("Person or group that has certified this chart."))),(0,_.tZ)(b,null,(0,_.tZ)(f,{label:(0,u.t)("Certification details"),name:"certification_details"},(0,_.tZ)(s.II,{"aria-label":(0,u.t)("Certification details")})),(0,_.tZ)(g,{className:"help-block"},(0,u.t)("Any additional detail to show in the certification tooltip.")))),(0,_.tZ)(r.JX,{xs:24,md:12},(0,_.tZ)("h3",null,(0,u.t)("Configuration")),(0,_.tZ)(b,null,(0,_.tZ)(f,{label:(0,u.t)("Cache timeout"),name:"cache_timeout"},(0,_.tZ)(s.II,{"aria-label":"Cache timeout"})),(0,_.tZ)(g,{className:"help-block"},(0,u.t)("Duration (in seconds) of the caching timeout for this chart. Note this defaults to the dataset's timeout if undefined."))),(0,_.tZ)("h3",{style:{marginTop:"1em"}},(0,u.t)("Access")),(0,_.tZ)(b,{label:I},(0,_.tZ)(r.Ph,{ariaLabel:I,mode:"multiple",name:"owners",value:x||[],onChange:C,options:k,disabled:!x,allowClear:!0}),(0,_.tZ)(g,{className:"help-block"},(0,u.t)("A list of users who can alter the chart. Searchable by name or username.")))))))}))},33626:(t,e,a)=>{a.d(e,{J:()=>o});var i=a(67294);const o=t=>{(0,i.useEffect)(t,[])}},61337:(t,e,a)=>{var i;function o(t,e){try{const a=localStorage.getItem(t);return null===a?e:JSON.parse(a)}catch{return e}}function s(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}function n(t,e){return o(t,e)}function r(t,e){s(t,e)}a.d(e,{dR:()=>i,OH:()=>o,I_:()=>s,rV:()=>n,LS:()=>r}),function(t){t.filter_box_transition_snoozed_at="filter_box_transition_snoozed_at",t.chart_split_sizes="chart_split_sizes",t.controls_width="controls_width",t.datasource_width="datasource_width",t.is_datapanel_open="is_datapanel_open",t.homepage_chart_filter="homepage_chart_filter",t.homepage_dashboard_filter="homepage_dashboard_filter",t.homepage_collapse_state="homepage_collapse_state",t.homepage_activity_filter="homepage_activity_filter",t.sqllab__is_autocomplete_enabled="sqllab__is_autocomplete_enabled",t.explore__data_table_original_formatted_time_columns="explore__data_table_original_formatted_time_columns"}(i||(i={}))}}]);
//# sourceMappingURL=7649.a2fe008e0479df868dc0.entry.js.map