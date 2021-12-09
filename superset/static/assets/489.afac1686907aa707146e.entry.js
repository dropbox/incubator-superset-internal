"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[489],{5951:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(14890),a=s(37703),n=s(37355),o=s(72570);const i=(0,a.$j)((({messageToasts:e})=>({toasts:e})),(e=>(0,r.DE)({removeToast:o.RS},e)))(n.Z)},61806:(e,t,s)=>{s.d(t,{Z:()=>a});var r=s(72570);function a(e=[],t){switch(t.type){case r.h:{const{payload:s}=t,r=e.slice();return s.noDuplicate&&r.find((e=>e.text===s.text))?e:[s,...e]}case r.K7:{const{payload:{id:s}}=t;return[...e].filter((e=>e.id!==s))}default:return e}}},25422:(e,t,s)=>{s.d(t,{Z:()=>c});var r=s(5872),a=s.n(r),n=s(67294),o=s(61988),i=s(58552),l=s(91178),u=s(11965);const c=function({error:e,source:t="dashboard",subtitle:s}){const{extra:r,level:c,message:d}=e,g=["dashboard","explore"].includes(t),R=r&&(0,u.tZ)(n.Fragment,null,(0,u.tZ)("p",null,(0,o.t)("This may be triggered by:"),(0,u.tZ)("br",null),r.issue_codes.map((e=>(0,u.tZ)(i.Z,a()({},e,{key:e.code})))).reduce(((e,t)=>[e,(0,u.tZ)("br",null),t]))),g&&r.owners&&(0,u.tZ)(n.Fragment,null,(0,u.tZ)("br",null),(0,u.tZ)("p",null,(0,o.tn)("Please reach out to the Chart Owner for assistance.","Please reach out to the Chart Owners for assistance.",r.owners.length)),(0,u.tZ)("p",null,(0,o.tn)("Chart Owner: %s","Chart Owners: %s",r.owners.length,r.owners.join(", "))))),Z=r&&r.issue_codes?(0,o.t)("%(message)s\nThis may be triggered by: \n%(issues)s",{message:d,issues:r.issue_codes.map((e=>e.message)).join("\n")}):d;return(0,u.tZ)(l.Z,{title:(0,o.t)("%s Error",r&&r.engine_name||(0,o.t)("DB engine")),subtitle:s,level:c,source:t,copyText:Z,body:R})}},41189:(e,t,s)=>{s.d(t,{Z:()=>o}),s(67294);var r=s(61988),a=s(91178),n=s(11965);const o=function({error:e,source:t="dashboard",subtitle:s}){const{level:o,message:i}=e;return(0,n.tZ)(a.Z,{title:(0,r.t)("Missing dataset"),subtitle:s,level:o,source:t,copyText:i,body:null})}},58552:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(67294),a=s(11965);function n({code:e,message:t}){return(0,a.tZ)(r.Fragment,null,t," ",(0,a.tZ)("a",{href:`https://superset.apache.org/docs/miscellaneous/issue-codes#issue-${e}`,rel:"noopener noreferrer",target:"_blank"},(0,a.tZ)("i",{className:"fa fa-external-link"})))}},15161:(e,t,s)=>{s.d(t,{Z:()=>c});var r=s(67294),a=s(61988),n=s(39991),o=s.n(n),i=s(58552),l=s(91178),u=s(11965);const c=function({error:e,source:t="sqllab",subtitle:s}){const{extra:n={issue_codes:[]},level:c,message:d}=e,g=(0,a.tn)("This was triggered by:","This may be triggered by:",n.issue_codes.length),R=((e,t)=>{const s={};return e.forEach((e=>{t.forEach((t=>{o()(e,t)<=2&&(s[e]||(s[e]=[]),s[e].push(`"${t}"`))}))})),s})(n.undefined_parameters||[],Object.keys(n.template_parameters||{})),Z=(0,u.tZ)(r.Fragment,null,(0,u.tZ)("p",null,Object.keys(R).length>0&&(0,u.tZ)(r.Fragment,null,(0,u.tZ)("p",null,(0,a.t)("Did you mean:")),(0,u.tZ)("ul",null,Object.entries(R).map((([e,t])=>(0,u.tZ)("li",null,(0,a.tn)('%(suggestion)s instead of "%(undefinedParameter)s?"','%(firstSuggestions)s or %(lastSuggestion)s instead of "%(undefinedParameter)s"?',t.length,{suggestion:t.join(", "),firstSuggestions:t.slice(0,-1).join(", "),lastSuggestion:t[t.length-1],undefinedParameter:e}))))),(0,u.tZ)("br",null)),g,(0,u.tZ)("br",null),n.issue_codes.length>0&&n.issue_codes.map((e=>(0,u.tZ)(i.Z,e))).reduce(((e,t)=>[e,(0,u.tZ)("br",null),t])))),_=`${d}\n${g}\n${n.issue_codes.map((e=>e.message)).join("\n")}`;return(0,u.tZ)(l.Z,{title:(0,a.t)("Parameter error"),subtitle:s,level:c,source:t,copyText:_,body:Z})}},18951:(e,t,s)=>{s.d(t,{Z:()=>l});var r=s(67294),a=s(61988),n=s(58552),o=s(91178),i=s(11965);const l=function({error:e,source:t}){const{extra:s,level:l}=e,u=["dashboard","explore"].includes(t),c=u?(0,a.tn)("We’re having trouble loading this visualization. Queries are set to timeout after %s second.","We’re having trouble loading this visualization. Queries are set to timeout after %s seconds.",s.timeout,s.timeout):(0,a.tn)("We’re having trouble loading these results. Queries are set to timeout after %s second.","We’re having trouble loading these results. Queries are set to timeout after %s seconds.",s.timeout,s.timeout),d=(0,i.tZ)(r.Fragment,null,(0,i.tZ)("p",null,(0,a.t)("This may be triggered by:"),(0,i.tZ)("br",null),s.issue_codes.map((e=>(0,i.tZ)(n.Z,e))).reduce(((e,t)=>[e,(0,i.tZ)("br",null),t]))),u&&s.owners&&(0,i.tZ)(r.Fragment,null,(0,i.tZ)("br",null),(0,i.tZ)("p",null,(0,a.tn)("Please reach out to the Chart Owner for assistance.","Please reach out to the Chart Owners for assistance.",s.owners.length)),(0,i.tZ)("p",null,(0,a.tn)("Chart Owner: %s","Chart Owners: %s",s.owners.length,s.owners.join(", "))))),g=(0,a.t)("%(subtitle)s\nThis may be triggered by:\n %(issue)s",{subtitle:c,issue:s.issue_codes.map((e=>e.message)).join("\n")});return(0,i.tZ)(o.Z,{title:(0,a.t)("Timeout error"),subtitle:c,level:l,source:t,copyText:g,body:d})}},50948:(e,t,s)=>{s.d(t,{Z:()=>R});var r=s(51995),a=s(11965),n=s(94184),o=s.n(n),i=s(13423),l=s(67294),u=s(38097),c=s(8818);const d=r.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`,g=e=>a.iv`
  min-width: ${5*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
`;function R({toast:e,onCloseToast:t}){const s=(0,l.useRef)(),[r,n]=(0,l.useState)(!1),R=()=>{n(!0)},Z=(0,l.useCallback)((()=>{s.current&&clearTimeout(s.current),n((()=>(setTimeout((()=>{t(e.id)}),150),!1)))}),[t,e.id]);(0,l.useEffect)((()=>(setTimeout(R),e.duration>0&&(s.current=setTimeout(Z,e.duration)),()=>{s.current&&clearTimeout(s.current)})),[Z,e.duration]);let _="toast--success",E=(0,a.tZ)(u.Z.CircleCheckSolid,{css:e=>g(e)});return e.toastType===c.p.WARNING?(E=(0,a.tZ)(u.Z.WarningSolid,{css:g}),_="toast--warning"):e.toastType===c.p.DANGER?(E=(0,a.tZ)(u.Z.ErrorSolid,{css:g}),_="toast--danger"):e.toastType===c.p.INFO&&(E=(0,a.tZ)(u.Z.InfoSolid,{css:g}),_="toast--info"),(0,a.tZ)(d,{className:o()("alert","toast",r&&"toast--visible",_),role:"alert"},E,(0,a.tZ)(i.ZP,{content:e.text}),(0,a.tZ)("i",{className:"fa fa-close pull-right pointer",role:"button",tabIndex:0,onClick:Z,"aria-label":"Close"}))}},37355:(e,t,s)=>{s.d(t,{Z:()=>i}),s(67294);var r=s(51995),a=s(50948),n=s(11965);const o=r.iK.div`
  max-width: 600px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  margin-right: 50px;
  margin-bottom: 50px;
  z-index: ${({theme:e})=>e.zIndex.max};
  word-break: break-word;

  .toast {
    background: ${({theme:e})=>e.colors.grayscale.dark1};
    border-radius: ${({theme:e})=>e.borderRadius};
    box-shadow: 0 2px 4px 0
      fade(
        ${({theme:e})=>e.colors.grayscale.dark2},
        ${({theme:e})=>e.opacity.mediumLight}
      );
    color: ${({theme:e})=>e.colors.grayscale.light5};
    opacity: 0;
    position: relative;
    transform: translateY(-100%);
    white-space: pre-line;
    will-change: transform, opacity;
    transition: transform ${({theme:e})=>e.transitionTiming}s,
      opacity ${({theme:e})=>e.transitionTiming}s;

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
    color: ${({theme:e})=>e.colors.grayscale.light5};
    opacity: 1;
  }

  .toast--visible {
    opacity: 1;
    transform: translateY(0);
  }
`;function i({toasts:e,removeToast:t}){return e.length>0&&(0,n.tZ)(o,{id:"toast-presenter"},e.map((e=>(0,n.tZ)(a.Z,{key:e.id,toast:e,onCloseToast:t}))))}},65286:(e,t,s)=>{s.d(t,{Z:()=>l});var r=s(19755),a=s.n(r),n=s(31069),o=s(98286),i=s(78496);function l(){a()(document).ready((function(){a()(":checkbox[data-checkbox-api-prefix]").change((function(){const e=a()(this);var t,s;t=e.data("checkbox-api-prefix"),s=`#${e.attr("id")}`,n.Z.get({endpoint:t+a()(s)[0].checked}).then((()=>{})).catch((e=>(0,o.O)(e).then((e=>{e&&e.message&&function(e){const t=e.severity||"info";a()('<div class="alert"> <button type="button" class="close" data-dismiss="alert">×</button> </div>').addClass(`alert-${t}`).append(e.message||"").appendTo(a()("#alert-container"))}(e)}))))})),a()("#language-picker a").click((function(e){e.preventDefault(),n.Z.get({url:e.currentTarget.href,parseMethod:null}).then((()=>{window.location.reload()}))}))})),window.$=a(),window.jQuery=a(),s(57915),(0,i.Z)()}},78496:(e,t,s)=>{s.d(t,{Z:()=>c});var r=s(92869),a=s(67663),n=s(18951),o=s(25422),i=s(15161),l=s(41189),u=s(84412);function c(){const e=(0,r.Z)();e.registerValue(a.C.FRONTEND_TIMEOUT_ERROR,n.Z),e.registerValue(a.C.BACKEND_TIMEOUT_ERROR,n.Z),e.registerValue(a.C.DATABASE_NOT_FOUND_ERROR,o.Z),e.registerValue(a.C.GENERIC_DB_ENGINE_ERROR,o.Z),e.registerValue(a.C.GENERIC_BACKEND_ERROR,o.Z),e.registerValue(a.C.COLUMN_DOES_NOT_EXIST_ERROR,o.Z),e.registerValue(a.C.TABLE_DOES_NOT_EXIST_ERROR,o.Z),e.registerValue(a.C.MISSING_TEMPLATE_PARAMS_ERROR,i.Z),e.registerValue(a.C.INVALID_TEMPLATE_PARAMS_ERROR,i.Z),e.registerValue(a.C.RESULTS_BACKEND_NOT_CONFIGURED_ERROR,o.Z),e.registerValue(a.C.DML_NOT_ALLOWED_ERROR,o.Z),e.registerValue(a.C.INVALID_CTAS_QUERY_ERROR,o.Z),e.registerValue(a.C.INVALID_CVAS_QUERY_ERROR,o.Z),e.registerValue(a.C.QUERY_SECURITY_ACCESS_ERROR,o.Z),e.registerValue(a.C.CONNECTION_INVALID_HOSTNAME_ERROR,o.Z),e.registerValue(a.C.RESULTS_BACKEND_ERROR,o.Z),e.registerValue(a.C.ASYNC_WORKERS_ERROR,o.Z),e.registerValue(a.C.SQLLAB_TIMEOUT_ERROR,o.Z),e.registerValue(a.C.CONNECTION_PORT_CLOSED_ERROR,o.Z),e.registerValue(a.C.CONNECTION_HOST_DOWN_ERROR,o.Z),e.registerValue(a.C.CONNECTION_INVALID_USERNAME_ERROR,o.Z),e.registerValue(a.C.CONNECTION_INVALID_PASSWORD_ERROR,o.Z),e.registerValue(a.C.CONNECTION_ACCESS_DENIED_ERROR,o.Z),e.registerValue(a.C.CONNECTION_UNKNOWN_DATABASE_ERROR,o.Z),e.registerValue(a.C.SCHEMA_DOES_NOT_EXIST_ERROR,o.Z),e.registerValue(a.C.OBJECT_DOES_NOT_EXIST_ERROR,o.Z),e.registerValue(a.C.SYNTAX_ERROR,o.Z),e.registerValue(a.C.CONNECTION_DATABASE_PERMISSIONS_ERROR,o.Z),e.registerValue(a.C.FAILED_FETCHING_DATASOURCE_INFO_ERROR,l.Z),(0,u.Z)()}},84412:(e,t,s)=>{function r(){}s.d(t,{Z:()=>r})}}]);