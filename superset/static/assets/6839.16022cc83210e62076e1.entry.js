"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6839],{39991:e=>{e.exports=function(){function e(e,t,r,s,o){return e<t||r<t?e>r?r+1:e+1:s===o?t:t+1}return function(t,r){if(t===r)return 0;if(t.length>r.length){var s=t;t=r,r=s}for(var o=t.length,n=r.length;o>0&&t.charCodeAt(o-1)===r.charCodeAt(n-1);)o--,n--;for(var a=0;a<o&&t.charCodeAt(a)===r.charCodeAt(a);)a++;if(n-=a,0==(o-=a)||n<3)return n;var i,l,u,c,g,d,h,p,m,R,b,_,E=0,C=[];for(i=0;i<o;i++)C.push(i+1),C.push(t.charCodeAt(a+i));for(var O=C.length-1;E<n-3;)for(m=r.charCodeAt(a+(l=E)),R=r.charCodeAt(a+(u=E+1)),b=r.charCodeAt(a+(c=E+2)),_=r.charCodeAt(a+(g=E+3)),d=E+=4,i=0;i<O;i+=2)l=e(h=C[i],l,u,m,p=C[i+1]),u=e(l,u,c,R,p),c=e(u,c,g,b,p),d=e(c,g,d,_,p),C[i]=d,g=c,c=u,u=l,l=h;for(;E<n;)for(m=r.charCodeAt(a+(l=E)),d=++E,i=0;i<O;i+=2)h=C[i],C[i]=d=e(h,l,d,m,C[i+1]),l=h;return d}}()},31405:(e,t,r)=>{r.d(t,{n:()=>n}),r(67294);var s=r(11965),o=r(84967);const n=()=>(0,s.tZ)(s.xB,{styles:e=>s.iv`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      strong,
      th {
        font-weight: ${e.typography.weights.bold};
      }
      // TODO: Remove when on Ant Design 5.
      // Check src/components/Modal for more info.
      .modal-functions-ok-button {
        border-radius: ${e.borderRadius}px;
        background: ${e.colors.primary.base};
        border: none;
        text-transform: uppercase;
        color: ${e.colors.grayscale.light5};
        line-height: 1.5715;
        font-size: ${e.typography.sizes.s}px;
        font-weight: ${e.typography.weights.bold};
        &:hover {
          background: ${e.colors.primary.dark1};
        }
      }
      .modal-functions-cancel-button {
        border-radius: ${e.borderRadius}px;
        background: ${e.colors.primary.light4};
        border: none;
        text-transform: uppercase;
        color: ${e.colors.primary.dark1};
        line-height: 1.5715;
        font-size: ${e.typography.sizes.s}px;
        font-weight: ${e.typography.weights.bold};
        &:hover {
          background: ${(0,o.CD)(.1,e.colors.primary.base,e.colors.primary.light4)};
        }
      }
      .column-config-popover {
        & .ant-input-number {
          width: 100%;
        }
        && .btn-group svg {
          line-height: 0;
          top: 0;
        }
        & .btn-group > .btn {
          padding: 5px 10px 6px;
        }
        && .ant-tabs {
          margin-top: ${-3*e.gridUnit}px;
        }
        & .ant-tabs-nav {
          margin-left: ${-4*e.gridUnit}px;
          margin-right: ${-4*e.gridUnit}px;
          margin-bottom: ${2*e.gridUnit}px;
        }
        && .ant-tabs-tab {
          flex: 1;
          margin-right: 0;
        }
      }
    `})},50948:(e,t,r)=>{r.d(t,{Z:()=>h});var s=r(51995),o=r(11965),n=r(94184),a=r.n(n),i=r(7748),l=r(67294),u=r(70163),c=r(1927);const g=s.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`,d=e=>o.iv`
  min-width: ${5*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
`;function h(e){let{toast:t,onCloseToast:r}=e;const s=(0,l.useRef)(),[n,h]=(0,l.useState)(!1),p=()=>{h(!0)},m=(0,l.useCallback)((()=>{s.current&&clearTimeout(s.current),h((()=>(setTimeout((()=>{r(t.id)}),150),!1)))}),[r,t.id]);(0,l.useEffect)((()=>(setTimeout(p),t.duration>0&&(s.current=setTimeout(m,t.duration)),()=>{s.current&&clearTimeout(s.current)})),[m,t.duration]);let R="toast--success",b=(0,o.tZ)(u.Z.CircleCheckSolid,{css:e=>d(e)});return t.toastType===c.p.WARNING?(b=(0,o.tZ)(u.Z.WarningSolid,{css:d}),R="toast--warning"):t.toastType===c.p.DANGER?(b=(0,o.tZ)(u.Z.ErrorSolid,{css:d}),R="toast--danger"):t.toastType===c.p.INFO&&(b=(0,o.tZ)(u.Z.InfoSolid,{css:d}),R="toast--info"),(0,o.tZ)(g,{className:a()("alert","toast",n&&"toast--visible",R),role:"alert"},b,(0,o.tZ)(i.wZ,{content:t.text,noHtml:!t.allowHtml}),(0,o.tZ)("i",{className:"fa fa-close pull-right pointer",role:"button",tabIndex:0,onClick:m,"aria-label":"Close"}))}},5667:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(14890),o=r(28216),n=r(37355),a=r(72570);const i=(0,o.$j)((e=>{let{messageToasts:t}=e;return{toasts:t}}),(e=>(0,s.DE)({removeToast:a.RS},e)))(n.Z)},37355:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(67294),o=r(51995),n=r(50948),a=r(11965);const i=o.iK.div`
  max-width: 600px;
  position: fixed;
  ${e=>{let{position:t}=e;return"bottom"===t?"bottom":"top"}}: 0px;
  right: 0px;
  margin-right: 50px;
  margin-bottom: 50px;
  z-index: ${e=>{let{theme:t}=e;return t.zIndex.max}};
  word-break: break-word;

  .toast {
    background: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
    border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}};
    box-shadow: 0 2px 4px 0
      fade(
        ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}},
        ${e=>{let{theme:t}=e;return t.opacity.mediumLight}}
      );
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
    opacity: 0;
    position: relative;
    transform: translateY(-100%);
    white-space: pre-line;
    will-change: transform, opacity;
    transition: transform ${e=>{let{theme:t}=e;return t.transitionTiming}}s,
      opacity ${e=>{let{theme:t}=e;return t.transitionTiming}}s;

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
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
    opacity: 1;
  }

  .toast--visible {
    opacity: 1;
    transform: translateY(0);
  }
`;function l(e){let{toasts:t,removeToast:r,position:o="bottom"}=e;return(0,a.tZ)(s.Fragment,null,t.length>0&&(0,a.tZ)(i,{id:"toast-presenter",position:o},t.map((e=>(0,a.tZ)(n.Z,{key:e.id,toast:e,onCloseToast:r})))))}},38552:(e,t,r)=>{r.d(t,{Z:()=>N});var s=r(19755),o=r.n(s),n=r(31069),a=r(98286),i=r(92869),l=r(67663),u=r(78580),c=r.n(u),g=r(67294),d=r(55867),h=r(11965);function p(e){let{code:t,message:r}=e;return(0,h.tZ)(g.Fragment,null,r," ",(0,h.tZ)("a",{href:`https://superset.apache.org/docs/miscellaneous/issue-codes#issue-${t}`,rel:"noopener noreferrer",target:"_blank"},(0,h.tZ)("i",{className:"fa fa-external-link"})))}var m=r(91178);const R=function(e){var t;let{error:r,source:s}=e;const{extra:o,level:n}=r,a=c()(t=["dashboard","explore"]).call(t,s),i=a?(0,d.tn)("We’re having trouble loading this visualization. Queries are set to timeout after %s second.","We’re having trouble loading this visualization. Queries are set to timeout after %s seconds.",o.timeout,o.timeout):(0,d.tn)("We’re having trouble loading these results. Queries are set to timeout after %s second.","We’re having trouble loading these results. Queries are set to timeout after %s seconds.",o.timeout,o.timeout),l=(0,h.tZ)(g.Fragment,null,(0,h.tZ)("p",null,(0,d.t)("This may be triggered by:"),(0,h.tZ)("br",null),o.issue_codes.map((e=>(0,h.tZ)(p,e))).reduce(((e,t)=>[e,(0,h.tZ)("br",null),t]))),a&&o.owners&&(0,h.tZ)(g.Fragment,null,(0,h.tZ)("br",null),(0,h.tZ)("p",null,(0,d.tn)("Please reach out to the Chart Owner for assistance.","Please reach out to the Chart Owners for assistance.",o.owners.length)),(0,h.tZ)("p",null,(0,d.tn)("Chart Owner: %s","Chart Owners: %s",o.owners.length,o.owners.join(", "))))),u=(0,d.t)("%(subtitle)s\nThis may be triggered by:\n %(issue)s",{subtitle:i,issue:o.issue_codes.map((e=>e.message)).join("\n")});return(0,h.tZ)(m.Z,{title:(0,d.t)("Timeout error"),subtitle:i,level:n,source:s,copyText:u,body:l})};var b=r(5872),_=r.n(b);const E=function(e){var t;let{error:r,source:s="dashboard",subtitle:o}=e;const{extra:n,level:a,message:i}=r,l=c()(t=["dashboard","explore"]).call(t,s),u=n&&(0,h.tZ)(g.Fragment,null,(0,h.tZ)("p",null,(0,d.t)("This may be triggered by:"),(0,h.tZ)("br",null),n.issue_codes.map((e=>(0,h.tZ)(p,_()({},e,{key:e.code})))).reduce(((e,t)=>[e,(0,h.tZ)("br",null),t]))),l&&n.owners&&(0,h.tZ)(g.Fragment,null,(0,h.tZ)("br",null),(0,h.tZ)("p",null,(0,d.tn)("Please reach out to the Chart Owner for assistance.","Please reach out to the Chart Owners for assistance.",n.owners.length)),(0,h.tZ)("p",null,(0,d.tn)("Chart Owner: %s","Chart Owners: %s",n.owners.length,n.owners.join(", "))))),R=null!=n&&n.issue_codes?(0,d.t)("%(message)s\nThis may be triggered by: \n%(issues)s",{message:i,issues:n.issue_codes.map((e=>e.message)).join("\n")}):i;return(0,h.tZ)(m.Z,{title:(0,d.t)("%s Error",(null==n?void 0:n.engine_name)||(0,d.t)("DB engine")),subtitle:o,level:a,source:s,copyText:R,body:u})};var C=r(39991),O=r.n(C);const f=function(e){let{error:t,source:r="sqllab",subtitle:s}=e;const{extra:o={issue_codes:[]},level:n,message:a}=t,i=(0,d.tn)("This was triggered by:","This may be triggered by:",o.issue_codes.length),l=((e,t)=>{const r={};return e.forEach((e=>{t.forEach((t=>{O()(e,t)<=2&&(r[e]||(r[e]=[]),r[e].push(`"${t}"`))}))})),r})(o.undefined_parameters||[],Object.keys(o.template_parameters||{})),u=(0,h.tZ)(g.Fragment,null,(0,h.tZ)("p",null,Object.keys(l).length>0&&(0,h.tZ)(g.Fragment,null,(0,h.tZ)("p",null,(0,d.t)("Did you mean:")),(0,h.tZ)("ul",null,Object.entries(l).map((e=>{let[t,r]=e;return(0,h.tZ)("li",null,(0,d.tn)('%(suggestion)s instead of "%(undefinedParameter)s?"','%(firstSuggestions)s or %(lastSuggestion)s instead of "%(undefinedParameter)s"?',r.length,{suggestion:r.join(", "),firstSuggestions:r.slice(0,-1).join(", "),lastSuggestion:r[r.length-1],undefinedParameter:t}))}))),(0,h.tZ)("br",null)),i,(0,h.tZ)("br",null),o.issue_codes.length>0&&o.issue_codes.map((e=>(0,h.tZ)(p,e))).reduce(((e,t)=>[e,(0,h.tZ)("br",null),t])))),c=`${a}\n${i}\n${o.issue_codes.map((e=>e.message)).join("\n")}`;return(0,h.tZ)(m.Z,{title:(0,d.t)("Parameter error"),subtitle:s,level:n,source:r,copyText:c,body:u})},T=function(e){let{error:t,source:r="dashboard",subtitle:s}=e;const{level:o,message:n}=t;return(0,h.tZ)(m.Z,{title:(0,d.t)("Missing dataset"),subtitle:s,level:o,source:r,copyText:n,body:null})};function N(){o()(document).ready((function(){o()(":checkbox[data-checkbox-api-prefix]").change((function(){const e=o()(this);var t,r;t=e.data("checkbox-api-prefix"),r=`#${e.attr("id")}`,n.Z.get({endpoint:t+o()(r)[0].checked}).then((()=>{})).catch((e=>(0,a.O$)(e).then((e=>{null!=e&&e.message&&function(e){const t=e.severity||"info";o()('<div class="alert"> <button type="button" class="close" data-dismiss="alert">×</button> </div>').addClass(`alert-${t}`).append(e.message||"").appendTo(o()("#alert-container"))}(e)}))))})),o()("#language-picker a").click((function(e){e.preventDefault(),n.Z.get({url:e.currentTarget.href,parseMethod:null}).then((()=>{window.location.reload()}))}))})),window.$=o(),window.jQuery=o(),r(57915),function(){const e=(0,i.Z)();e.registerValue(l.C.FRONTEND_TIMEOUT_ERROR,R),e.registerValue(l.C.BACKEND_TIMEOUT_ERROR,R),e.registerValue(l.C.DATABASE_NOT_FOUND_ERROR,E),e.registerValue(l.C.GENERIC_DB_ENGINE_ERROR,E),e.registerValue(l.C.GENERIC_BACKEND_ERROR,E),e.registerValue(l.C.COLUMN_DOES_NOT_EXIST_ERROR,E),e.registerValue(l.C.TABLE_DOES_NOT_EXIST_ERROR,E),e.registerValue(l.C.MISSING_TEMPLATE_PARAMS_ERROR,f),e.registerValue(l.C.INVALID_TEMPLATE_PARAMS_ERROR,f),e.registerValue(l.C.RESULTS_BACKEND_NOT_CONFIGURED_ERROR,E),e.registerValue(l.C.DML_NOT_ALLOWED_ERROR,E),e.registerValue(l.C.INVALID_CTAS_QUERY_ERROR,E),e.registerValue(l.C.INVALID_CVAS_QUERY_ERROR,E),e.registerValue(l.C.QUERY_SECURITY_ACCESS_ERROR,E),e.registerValue(l.C.CONNECTION_INVALID_HOSTNAME_ERROR,E),e.registerValue(l.C.RESULTS_BACKEND_ERROR,E),e.registerValue(l.C.ASYNC_WORKERS_ERROR,E),e.registerValue(l.C.SQLLAB_TIMEOUT_ERROR,E),e.registerValue(l.C.CONNECTION_PORT_CLOSED_ERROR,E),e.registerValue(l.C.CONNECTION_HOST_DOWN_ERROR,E),e.registerValue(l.C.CONNECTION_INVALID_USERNAME_ERROR,E),e.registerValue(l.C.CONNECTION_INVALID_PASSWORD_ERROR,E),e.registerValue(l.C.CONNECTION_ACCESS_DENIED_ERROR,E),e.registerValue(l.C.CONNECTION_UNKNOWN_DATABASE_ERROR,E),e.registerValue(l.C.SCHEMA_DOES_NOT_EXIST_ERROR,E),e.registerValue(l.C.OBJECT_DOES_NOT_EXIST_ERROR,E),e.registerValue(l.C.SYNTAX_ERROR,E),e.registerValue(l.C.CONNECTION_DATABASE_PERMISSIONS_ERROR,E),e.registerValue(l.C.FAILED_FETCHING_DATASOURCE_INFO_ERROR,T)}()}},63431:(e,t,r)=>{function s(){}r.d(t,{Z:()=>s})}}]);
//# sourceMappingURL=6839.16022cc83210e62076e1.entry.js.map