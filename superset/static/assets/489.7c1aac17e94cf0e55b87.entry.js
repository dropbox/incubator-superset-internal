"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[489],{5951:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(14890),a=r(37703),n=r(37355),o=r(72570);const i=(0,a.$j)((({messageToasts:e})=>({toasts:e})),(e=>(0,s.DE)({removeToast:o.RS},e)))(n.Z)},61806:(e,t,r)=>{r.d(t,{Z:()=>a});var s=r(72570);function a(e=[],t){switch(t.type){case s.h:{const{payload:r}=t,s=e.slice();return r.noDuplicate&&s.find((e=>e.text===r.text))?e:[r,...e]}case s.K7:{const{payload:{id:r}}=t;return[...e].filter((e=>e.id!==r))}default:return e}}},25422:(e,t,r)=>{r.d(t,{Z:()=>c});var s=r(5872),a=r.n(s),n=r(67294),o=r(60650),i=r(58552),l=r(91178),u=r(11965);const c=function({error:e,source:t="dashboard",subtitle:r}){const{extra:s,level:c,message:d}=e,g=["dashboard","explore"].includes(t),R=s&&(0,u.tZ)(n.Fragment,null,(0,u.tZ)("p",null,(0,o.t)("This may be triggered by:"),(0,u.tZ)("br",null),s.issue_codes.map((e=>(0,u.tZ)(i.Z,a()({},e,{key:e.code})))).reduce(((e,t)=>[e,(0,u.tZ)("br",null),t]))),g&&s.owners&&(0,u.tZ)(n.Fragment,null,(0,u.tZ)("br",null),(0,u.tZ)("p",null,(0,o.tn)("Please reach out to the Chart Owner for assistance.","Please reach out to the Chart Owners for assistance.",s.owners.length)),(0,u.tZ)("p",null,(0,o.tn)("Chart Owner: %s","Chart Owners: %s",s.owners.length,s.owners.join(", "))))),Z=s&&s.issue_codes?`${d}\n${(0,o.t)("This may be triggered by:")}\n${s.issue_codes.map((e=>e.message)).join("\n")}`:d;return(0,u.tZ)(l.Z,{title:(0,o.t)("%s Error",s&&s.engine_name||(0,o.t)("DB engine")),subtitle:r,level:c,source:t,copyText:Z,body:R})}},41189:(e,t,r)=>{r.d(t,{Z:()=>o}),r(67294);var s=r(60650),a=r(91178),n=r(11965);const o=function({error:e,source:t="dashboard",subtitle:r}){const{level:o,message:i}=e;return(0,n.tZ)(a.Z,{title:(0,s.t)("Missing dataset"),subtitle:r,level:o,source:t,copyText:i,body:null})}},58552:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(67294),a=r(11965);function n({code:e,message:t}){return(0,a.tZ)(s.Fragment,null,t," ",(0,a.tZ)("a",{href:`https://superset.apache.org/docs/miscellaneous/issue-codes#issue-${e}`,rel:"noopener noreferrer",target:"_blank"},(0,a.tZ)("i",{className:"fa fa-external-link"})))}},15161:(e,t,r)=>{r.d(t,{Z:()=>c});var s=r(67294),a=r(60650),n=r(39991),o=r.n(n),i=r(58552),l=r(91178),u=r(11965);const c=function({error:e,source:t="sqllab",subtitle:r}){const{extra:n={issue_codes:[]},level:c,message:d}=e,g=(0,a.tn)("This was triggered by:","This may be triggered by:",n.issue_codes.length),R=((e,t)=>{const r={};return e.forEach((e=>{t.forEach((t=>{o()(e,t)<=2&&(r[e]||(r[e]=[]),r[e].push(`"${t}"`))}))})),r})(n.undefined_parameters||[],Object.keys(n.template_parameters||{})),Z=(0,u.tZ)(s.Fragment,null,(0,u.tZ)("p",null,Object.keys(R).length>0&&(0,u.tZ)(s.Fragment,null,(0,u.tZ)("p",null,(0,a.t)("Did you mean:")),(0,u.tZ)("ul",null,Object.entries(R).map((([e,t])=>(0,u.tZ)("li",null,(0,a.tn)('%(suggestion)s instead of "%(undefinedParameter)s?"','%(firstSuggestions)s or %(lastSuggestion)s instead of "%(undefinedParameter)s"?',t.length,{suggestion:t.join(", "),firstSuggestions:t.slice(0,-1).join(", "),lastSuggestion:t[t.length-1],undefinedParameter:e}))))),(0,u.tZ)("br",null)),g,(0,u.tZ)("br",null),n.issue_codes.length>0&&n.issue_codes.map((e=>(0,u.tZ)(i.Z,e))).reduce(((e,t)=>[e,(0,u.tZ)("br",null),t])))),_=`${d}\n${g}\n${n.issue_codes.map((e=>e.message)).join("\n")}`;return(0,u.tZ)(l.Z,{title:(0,a.t)("Parameter error"),subtitle:r,level:c,source:t,copyText:_,body:Z})}},18951:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(67294),a=r(60650),n=r(58552),o=r(91178),i=r(11965);const l=function({error:e,source:t}){const{extra:r,level:l}=e,u=["dashboard","explore"].includes(t),c=u?(0,a.tn)("We’re having trouble loading this visualization. Queries are set to timeout after %s second.","We’re having trouble loading this visualization. Queries are set to timeout after %s seconds.",r.timeout,r.timeout):(0,a.tn)("We’re having trouble loading these results. Queries are set to timeout after %s second.","We’re having trouble loading these results. Queries are set to timeout after %s seconds.",r.timeout,r.timeout),d=(0,i.tZ)(s.Fragment,null,(0,i.tZ)("p",null,(0,a.t)("This may be triggered by:"),(0,i.tZ)("br",null),r.issue_codes.map((e=>(0,i.tZ)(n.Z,e))).reduce(((e,t)=>[e,(0,i.tZ)("br",null),t]))),u&&r.owners&&(0,i.tZ)(s.Fragment,null,(0,i.tZ)("br",null),(0,i.tZ)("p",null,(0,a.tn)("Please reach out to the Chart Owner for assistance.","Please reach out to the Chart Owners for assistance.",r.owners.length)),(0,i.tZ)("p",null,(0,a.tn)("Chart Owner: %s","Chart Owners: %s",r.owners.length,r.owners.join(", "))))),g=`${c}\n${(0,a.t)("This may be triggered by:")}\n${r.issue_codes.map((e=>e.message)).join("\n")}`;return(0,i.tZ)(o.Z,{title:(0,a.t)("Timeout error"),subtitle:c,level:l,source:t,copyText:g,body:d})}},50948:(e,t,r)=>{r.d(t,{Z:()=>R});var s=r(37840),a=r(11965),n=r(94184),o=r.n(n),i=r(13423),l=r(67294),u=r(38097),c=r(8818);const d=s.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`,g=e=>a.iv`
  min-width: ${5*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
`;function R({toast:e,onCloseToast:t}){const r=(0,l.useRef)(),[s,n]=(0,l.useState)(!1),R=()=>{n(!0)},Z=(0,l.useCallback)((()=>{r.current&&clearTimeout(r.current),n((()=>(setTimeout((()=>{t(e.id)}),150),!1)))}),[t,e.id]);(0,l.useEffect)((()=>(setTimeout(R),e.duration>0&&(r.current=setTimeout(Z,e.duration)),()=>{r.current&&clearTimeout(r.current)})),[Z,e.duration]);let _="toast--success",E=(0,a.tZ)(u.Z.CircleCheckSolid,{css:e=>g(e)});return e.toastType===c.p.WARNING?(E=(0,a.tZ)(u.Z.WarningSolid,{css:g}),_="toast--warning"):e.toastType===c.p.DANGER?(E=(0,a.tZ)(u.Z.ErrorSolid,{css:g}),_="toast--danger"):e.toastType===c.p.INFO&&(E=(0,a.tZ)(u.Z.InfoSolid,{css:g}),_="toast--info"),(0,a.tZ)(d,{className:o()("alert","toast",s&&"toast--visible",_),role:"alert"},E,(0,a.tZ)(i.ZP,{content:e.text}),(0,a.tZ)("i",{className:"fa fa-close pull-right pointer",role:"button",tabIndex:0,onClick:Z,"aria-label":"Close"}))}},37355:(e,t,r)=>{r.d(t,{Z:()=>i}),r(67294);var s=r(37840),a=r(50948),n=r(11965);const o=s.iK.div`
  max-width: 600px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  margin-right: 50px;
  margin-bottom: 50px;
  z-index: ${({theme:e})=>e.zIndex.max};

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
`;function i({toasts:e,removeToast:t}){return e.length>0&&(0,n.tZ)(o,{id:"toast-presenter"},e.map((e=>(0,n.tZ)(a.Z,{key:e.id,toast:e,onCloseToast:t}))))}},65286:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(19755),a=r.n(s),n=r(21173),o=r(98286),i=r(78496);function l(){a()(document).ready((function(){a()(":checkbox[data-checkbox-api-prefix]").change((function(){const e=a()(this);var t,r;t=e.data("checkbox-api-prefix"),r=`#${e.attr("id")}`,n.Z.get({endpoint:t+a()(r)[0].checked}).then((()=>{})).catch((e=>(0,o.O)(e).then((e=>{e&&e.message&&function(e){const t=e.severity||"info";a()('<div class="alert"> <button type="button" class="close" data-dismiss="alert">×</button> </div>').addClass(`alert-${t}`).append(e.message||"").appendTo(a()("#alert-container"))}(e)}))))})),a()("#language-picker a").click((function(e){e.preventDefault(),n.Z.get({url:e.currentTarget.href,parseMethod:null}).then((()=>{window.location.reload()}))}))})),window.$=a(),window.jQuery=a(),r(57915),(0,i.Z)()}},78496:(e,t,r)=>{r.d(t,{Z:()=>c});var s=r(92869),a=r(67663),n=r(18951),o=r(25422),i=r(15161),l=r(41189),u=r(84412);function c(){const e=(0,s.Z)();e.registerValue(a.C.FRONTEND_TIMEOUT_ERROR,n.Z),e.registerValue(a.C.BACKEND_TIMEOUT_ERROR,n.Z),e.registerValue(a.C.DATABASE_NOT_FOUND_ERROR,o.Z),e.registerValue(a.C.GENERIC_DB_ENGINE_ERROR,o.Z),e.registerValue(a.C.GENERIC_BACKEND_ERROR,o.Z),e.registerValue(a.C.COLUMN_DOES_NOT_EXIST_ERROR,o.Z),e.registerValue(a.C.TABLE_DOES_NOT_EXIST_ERROR,o.Z),e.registerValue(a.C.MISSING_TEMPLATE_PARAMS_ERROR,i.Z),e.registerValue(a.C.INVALID_TEMPLATE_PARAMS_ERROR,i.Z),e.registerValue(a.C.RESULTS_BACKEND_NOT_CONFIGURED_ERROR,o.Z),e.registerValue(a.C.DML_NOT_ALLOWED_ERROR,o.Z),e.registerValue(a.C.INVALID_CTAS_QUERY_ERROR,o.Z),e.registerValue(a.C.INVALID_CVAS_QUERY_ERROR,o.Z),e.registerValue(a.C.QUERY_SECURITY_ACCESS_ERROR,o.Z),e.registerValue(a.C.CONNECTION_INVALID_HOSTNAME_ERROR,o.Z),e.registerValue(a.C.RESULTS_BACKEND_ERROR,o.Z),e.registerValue(a.C.ASYNC_WORKERS_ERROR,o.Z),e.registerValue(a.C.SQLLAB_TIMEOUT_ERROR,o.Z),e.registerValue(a.C.CONNECTION_PORT_CLOSED_ERROR,o.Z),e.registerValue(a.C.CONNECTION_HOST_DOWN_ERROR,o.Z),e.registerValue(a.C.CONNECTION_INVALID_USERNAME_ERROR,o.Z),e.registerValue(a.C.CONNECTION_INVALID_PASSWORD_ERROR,o.Z),e.registerValue(a.C.CONNECTION_ACCESS_DENIED_ERROR,o.Z),e.registerValue(a.C.CONNECTION_UNKNOWN_DATABASE_ERROR,o.Z),e.registerValue(a.C.SCHEMA_DOES_NOT_EXIST_ERROR,o.Z),e.registerValue(a.C.OBJECT_DOES_NOT_EXIST_ERROR,o.Z),e.registerValue(a.C.SYNTAX_ERROR,o.Z),e.registerValue(a.C.CONNECTION_DATABASE_PERMISSIONS_ERROR,o.Z),e.registerValue(a.C.FAILED_FETCHING_DATASOURCE_INFO_ERROR,l.Z),(0,u.Z)()}},84412:(e,t,r)=>{function s(){}r.d(t,{Z:()=>s})}}]);