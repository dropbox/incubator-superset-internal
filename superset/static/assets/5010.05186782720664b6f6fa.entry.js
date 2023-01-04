(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5010],{13433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(67294),o=n(45697),a=n.n(o),i=n(61988),s=n(58593),l=n(14114),d=n(10222),c=n(11965);const g={copyNode:a().node,getText:a().func,onCopyEnd:a().func,shouldShowText:a().bool,text:a().string,wrapped:a().bool,tooltipText:a().string,addDangerToast:a().func.isRequired,addSuccessToast:a().func.isRequired,hideTooltip:a().bool},u={copyNode:(0,c.tZ)("span",null,"Copy"),onCopyEnd:()=>{},shouldShowText:!0,wrapped:!0,tooltipText:(0,i.t)("Copy to clipboard"),hideTooltip:!1};var p={name:"8irbms",styles:"display:inline-flex;align-items:center"};class m extends r.Component{constructor(e){super(e),this.copyToClipboard=this.copyToClipboard.bind(this),this.onClick=this.onClick.bind(this)}onClick(){this.props.getText?this.props.getText((e=>{this.copyToClipboard(Promise.resolve(e))})):this.copyToClipboard(Promise.resolve(this.props.text))}getDecoratedCopyNode(){return r.cloneElement(this.props.copyNode,{style:{cursor:"pointer"},onClick:this.onClick})}copyToClipboard(e){(0,d.Z)((()=>e)).then((()=>{this.props.addSuccessToast((0,i.t)("Copied to clipboard!"))})).catch((()=>{this.props.addDangerToast((0,i.t)("Sorry, your browser does not support copying. Use Ctrl / Cmd + C!"))})).finally((()=>{this.props.onCopyEnd()}))}renderTooltip(e){return(0,c.tZ)(r.Fragment,null,this.props.hideTooltip?this.getDecoratedCopyNode():(0,c.tZ)(s.u,{id:"copy-to-clipboard-tooltip",placement:"topRight",style:{cursor:e},title:this.props.tooltipText,trigger:["hover"],arrowPointAtCenter:!0},this.getDecoratedCopyNode()))}renderNotWrapped(){return this.renderTooltip("pointer")}renderLink(){return(0,c.tZ)("span",{css:p},this.props.shouldShowText&&this.props.text&&(0,c.tZ)("span",{className:"m-r-5"},this.props.text),this.renderTooltip())}render(){const{wrapped:e}=this.props;return e?this.renderLink():this.renderNotWrapped()}}const h=(0,l.ZP)(m);m.propTypes=g,m.defaultProps=u},54076:(e,t,n)=>{"use strict";n.d(t,{li:()=>s,Tb:()=>l,jy:()=>d,G9:()=>g,lo:()=>u,Mv:()=>p,cD:()=>m,EI:()=>h,fV:()=>v,G6:()=>_,Rw:()=>b});var r=n(51115),o=n(42846),a=n(31069),i=n(55786);const s="<NULL>",l="TRUE",d="FALSE",c=(0,r.bt)(o.Z.DATABASE_DATETIME);function g(e){return a.Z.post({endpoint:"/kv/store/",postPayload:{data:e}}).then((e=>`${window.location.origin+window.location.pathname}?id=${e.json.id}`))}function u(e){return null===e?s:""===e?"<empty string>":!0===e?"<true>":!1===e?"<false>":"string"!=typeof e&&e.toString?e.toString():e}function p(e,t){let n="";for(let r=0;r<e.length;r+=1){const o={};for(let n=0;n<t.length;n+=1){const a=t[n].name||t[n];e[r][a]?o[n]=e[r][a]:o[n]=e[r][parseFloat(a)]}n+=`${Object.values(o).join("\t")}\n`}return n}function m(e,t){return e&&0!==e.length&&0!==(0,i.Z)(t).length?e.map((e=>({...e,...t.reduce(((t,n)=>(null!==e[n]&&void 0!==e[n]&&(t[n]=c(e[n])),t)),{})}))):e}const h=()=>{},v=()=>{const{appVersion:e}=navigator;return e.includes("Win")?"Windows":e.includes("Mac")?"MacOS":e.includes("X11")?"UNIX":e.includes("Linux")?"Linux":"Unknown OS"},_=()=>{const{userAgent:e}=navigator;return e&&/^((?!chrome|android).)*safari/i.test(e)},b=e=>null==e},55786:(e,t,n)=>{"use strict";function r(e){return null==e?[]:Array.isArray(e)?e:[e]}n.d(t,{Z:()=>r})},35932:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(5872),o=n.n(r),a=n(11965),i=n(21804),s=n.n(i),l=n(67294),d=n(84967),c=n(94184),g=n.n(c),u=n(4715),p=n(51995),m=n(58593);function h(e){const{tooltip:t,placement:n,disabled:r=!1,buttonSize:i,buttonStyle:c,className:h,cta:v,children:_,href:b,showMarginRight:R=!0,...f}=e,E=(0,p.Fg)(),{colors:y,transitionTiming:N,borderRadius:O,typography:C}=E,{primary:S,grayscale:T,success:x,warning:Z,error:w}=y;let A=32,I=18;"xsmall"===i?(A=22,I=5):"small"===i&&(A=30,I=10);let k=S.light4,D=(0,d.CD)(.1,S.base,S.light4),$=(0,d.CD)(.25,S.base,S.light4),U=T.light2,P=S.dark1,L=P,M=0,F="none",z="transparent",B="transparent",K="transparent";"primary"===c?(k=S.dark1,D=(0,d.CD)(.1,T.light5,S.dark1),$=(0,d.CD)(.2,T.dark2,S.dark1),P=T.light5,L=P):"tertiary"===c||"dashed"===c?(k=T.light5,D=T.light5,$=T.light5,U=T.light5,M=1,F="dashed"===c?"dashed":"solid",z=S.dark1,B=S.light1,K=T.light2):"danger"===c?(k=w.base,D=(0,d.CD)(.1,T.light5,w.base),$=(0,d.CD)(.2,T.dark2,w.base),P=T.light5,L=P):"warning"===c?(k=Z.base,D=(0,d.CD)(.1,T.dark2,Z.base),$=(0,d.CD)(.2,T.dark2,Z.base),P=T.light5,L=P):"success"===c?(k=x.base,D=(0,d.CD)(.1,T.light5,x.base),$=(0,d.CD)(.2,T.dark2,x.base),P=T.light5,L=P):"link"===c&&(k="transparent",D="transparent",$="transparent",L=S.base);const G=_;let W=[];W=G&&G.type===l.Fragment?l.Children.toArray(G.props.children):l.Children.toArray(_);const H=R&&W.length>1?2*E.gridUnit:0,Y=(0,a.tZ)(u.C0,o()({href:r?void 0:b,disabled:r,className:g()(h,"superset-button",{cta:!!v}),css:(0,a.iv)({display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:1.5715,fontSize:C.sizes.s,fontWeight:C.weights.bold,height:A,textTransform:"uppercase",padding:`0px ${I}px`,transition:`all ${N}s`,minWidth:v?36*E.gridUnit:void 0,minHeight:v?8*E.gridUnit:void 0,boxShadow:"none",borderWidth:M,borderStyle:F,borderColor:z,borderRadius:O,color:P,backgroundColor:k,"&:hover":{color:L,backgroundColor:D,borderColor:B},"&:active":{color:P,backgroundColor:$},"&:focus":{color:P,backgroundColor:k,borderColor:z},"&[disabled], &[disabled]:hover":{color:T.base,backgroundColor:"link"===c?"transparent":U,borderColor:"link"===c?"transparent":K,pointerEvents:"none"},marginLeft:0,"& + .superset-button":{marginLeft:2*E.gridUnit},"& > :first-of-type":{marginRight:H}},"","")},f),_);return t?(0,a.tZ)(m.u,{placement:n,id:`${s()(t)}-tooltip`,title:t},r?(0,a.tZ)("span",{css:(0,a.iv)({cursor:"not-allowed","& > .superset-button":{marginLeft:2*E.gridUnit}},"","")},Y):Y):Y}},91178:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(67294),o=n(51995),a=n(61988),i=n(54076),s=n(74069),l=n(35932),d=n(70163),c=n(13433),g=n(11965);const u=o.iK.div`
  align-items: center;
  background-color: ${({level:e,theme:t})=>t.colors[e].light2};
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({level:e,theme:t})=>t.colors[e].base};
  color: ${({level:e,theme:t})=>t.colors[e].dark2};
  padding: ${({theme:e})=>2*e.gridUnit}px;
  width: 100%;

  .top-row {
    display: flex;
    justify-content: space-between;
  }

  .error-body {
    padding-top: ${({theme:e})=>e.gridUnit}px;
    padding-left: ${({theme:e})=>8*e.gridUnit}px;
  }

  .icon {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
  }

  .link {
    color: ${({level:e,theme:t})=>t.colors[e].dark2};
    text-decoration: underline;
  }
`,p=(0,o.iK)(s.Z)`
  color: ${({level:e,theme:t})=>t.colors[e].dark2};
  overflow-wrap: break-word;

  .ant-modal-header {
    background-color: ${({level:e,theme:t})=>t.colors[e].light2};
    padding: ${({theme:e})=>4*e.gridUnit}px;
  }

  .icon {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
  }

  .header {
    display: flex;
    align-items: center;
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
  }
`,m=o.iK.div`
  align-items: center;
  display: flex;
`;function h({body:e,copyText:t,level:n="error",source:s="dashboard",subtitle:h,title:v}){const _=(0,o.Fg)(),[b,R]=(0,r.useState)(!1),[f,E]=(0,r.useState)(!1),y=["explore","sqllab"].includes(s),N=_.colors[n].base;return(0,g.tZ)(u,{level:n,role:"alert"},(0,g.tZ)("div",{className:"top-row"},(0,g.tZ)(m,null,"error"===n?(0,g.tZ)(d.Z.ErrorSolid,{className:"icon",iconColor:N}):(0,g.tZ)(d.Z.WarningSolid,{className:"icon",iconColor:N}),(0,g.tZ)("strong",null,v)),!y&&(0,g.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>R(!0)},(0,a.t)("See more"))),y?(0,g.tZ)("div",{className:"error-body"},(0,g.tZ)("p",null,h),e&&(0,g.tZ)(r.Fragment,null,!f&&(0,g.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>E(!0)},(0,a.t)("See more")),f&&(0,g.tZ)(r.Fragment,null,(0,g.tZ)("br",null),e,(0,g.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>E(!1)},(0,a.t)("See less"))))):(0,g.tZ)(p,{level:n,show:b,onHide:()=>R(!1),title:(0,g.tZ)("div",{className:"header"},"error"===n?(0,g.tZ)(d.Z.ErrorSolid,{className:"icon",iconColor:N}):(0,g.tZ)(d.Z.WarningSolid,{className:"icon",iconColor:N}),(0,g.tZ)("div",{className:"title"},v)),footer:(0,g.tZ)(r.Fragment,null,t&&(0,g.tZ)(c.Z,{text:t,shouldShowText:!1,wrapped:!1,copyNode:(0,g.tZ)(l.Z,{onClick:i.EI},(0,a.t)("Copy message"))}),(0,g.tZ)(l.Z,{cta:!0,buttonStyle:"primary",onClick:()=>R(!1)},(0,a.t)("Close")))},(0,g.tZ)(r.Fragment,null,(0,g.tZ)("p",null,h),(0,g.tZ)("br",null),e)))}},92869:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(90537),o=n(1875);class a extends r.Z{constructor(){super({name:"ErrorMessageComponent",overwritePolicy:r.r.ALLOW})}}const i=(0,o.Z)(a)},67663:(e,t,n)=>{"use strict";n.d(t,{C:()=>r});const r={FRONTEND_CSRF_ERROR:"FRONTEND_CSRF_ERROR",FRONTEND_NETWORK_ERROR:"FRONTEND_NETWORK_ERROR",FRONTEND_TIMEOUT_ERROR:"FRONTEND_TIMEOUT_ERROR",GENERIC_DB_ENGINE_ERROR:"GENERIC_DB_ENGINE_ERROR",COLUMN_DOES_NOT_EXIST_ERROR:"COLUMN_DOES_NOT_EXIST_ERROR",TABLE_DOES_NOT_EXIST_ERROR:"TABLE_DOES_NOT_EXIST_ERROR",SCHEMA_DOES_NOT_EXIST_ERROR:"SCHEMA_DOES_NOT_EXIST_ERROR",CONNECTION_INVALID_USERNAME_ERROR:"CONNECTION_INVALID_USERNAME_ERROR",CONNECTION_INVALID_PASSWORD_ERROR:"CONNECTION_INVALID_PASSWORD_ERROR",CONNECTION_INVALID_HOSTNAME_ERROR:"CONNECTION_INVALID_HOSTNAME_ERROR",CONNECTION_PORT_CLOSED_ERROR:"CONNECTION_PORT_CLOSED_ERROR",CONNECTION_INVALID_PORT_ERROR:"CONNECTION_INVALID_PORT_ERROR",CONNECTION_HOST_DOWN_ERROR:"CONNECTION_HOST_DOWN_ERROR",CONNECTION_ACCESS_DENIED_ERROR:"CONNECTION_ACCESS_DENIED_ERROR",CONNECTION_UNKNOWN_DATABASE_ERROR:"CONNECTION_UNKNOWN_DATABASE_ERROR",CONNECTION_DATABASE_PERMISSIONS_ERROR:"CONNECTION_DATABASE_PERMISSIONS_ERROR",CONNECTION_MISSING_PARAMETERS_ERRORS:"CONNECTION_MISSING_PARAMETERS_ERRORS",OBJECT_DOES_NOT_EXIST_ERROR:"OBJECT_DOES_NOT_EXIST_ERROR",SYNTAX_ERROR:"SYNTAX_ERROR",VIZ_GET_DF_ERROR:"VIZ_GET_DF_ERROR",UNKNOWN_DATASOURCE_TYPE_ERROR:"UNKNOWN_DATASOURCE_TYPE_ERROR",FAILED_FETCHING_DATASOURCE_INFO_ERROR:"FAILED_FETCHING_DATASOURCE_INFO_ERROR",TABLE_SECURITY_ACCESS_ERROR:"TABLE_SECURITY_ACCESS_ERROR",DATASOURCE_SECURITY_ACCESS_ERROR:"DATASOURCE_SECURITY_ACCESS_ERROR",DATABASE_SECURITY_ACCESS_ERROR:"DATABASE_SECURITY_ACCESS_ERROR",QUERY_SECURITY_ACCESS_ERROR:"QUERY_SECURITY_ACCESS_ERROR",MISSING_OWNERSHIP_ERROR:"MISSING_OWNERSHIP_ERROR",BACKEND_TIMEOUT_ERROR:"BACKEND_TIMEOUT_ERROR",DATABASE_NOT_FOUND_ERROR:"DATABASE_NOT_FOUND_ERROR",MISSING_TEMPLATE_PARAMS_ERROR:"MISSING_TEMPLATE_PARAMS_ERROR",INVALID_TEMPLATE_PARAMS_ERROR:"INVALID_TEMPLATE_PARAMS_ERROR",RESULTS_BACKEND_NOT_CONFIGURED_ERROR:"RESULTS_BACKEND_NOT_CONFIGURED_ERROR",DML_NOT_ALLOWED_ERROR:"DML_NOT_ALLOWED_ERROR",INVALID_CTAS_QUERY_ERROR:"INVALID_CTAS_QUERY_ERROR",INVALID_CVAS_QUERY_ERROR:"INVALID_CVAS_QUERY_ERROR",SQLLAB_TIMEOUT_ERROR:"SQLLAB_TIMEOUT_ERROR",RESULTS_BACKEND_ERROR:"RESULTS_BACKEND_ERROR",ASYNC_WORKERS_ERROR:"ASYNC_WORKERS_ERROR",GENERIC_COMMAND_ERROR:"GENERIC_COMMAND_ERROR",GENERIC_BACKEND_ERROR:"GENERIC_BACKEND_ERROR",INVALID_PAYLOAD_FORMAT_ERROR:"INVALID_PAYLOAD_FORMAT_ERROR",INVALID_PAYLOAD_SCHEMA_ERROR:"INVALID_PAYLOAD_SCHEMA_ERROR"}},70163:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(5872),o=n.n(r),a=n(18029),i=n.n(a),s=n(67294),l=n(62816),d=n(16165),c=n(51995);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}const u=function(e){return s.createElement("svg",g({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e))};var p=n(11965);const m=(0,c.iK)((({iconColor:e,iconSize:t,viewBox:n,...r})=>(0,p.tZ)(d.Z,o()({viewBox:n||"0 0 24 24"},r))))`
  ${({iconColor:e})=>e&&`color: ${e};`};
  font-size: ${({iconSize:e,theme:t})=>e?`${t.typography.sizes[e]||t.typography.sizes.m}px`:"24px"};
`,h=e=>{const{fileName:t,...r}=e,[,a]=(0,s.useState)(!1),i=(0,s.useRef)(),l=t.replace("_","-");return(0,s.useEffect)((()=>{let e=!1;return async function(){i.current=(await n(35782)(`./${t}.svg`)).default,e||a(!0)}(),()=>{e=!0}}),[t,i]),(0,p.tZ)(m,o()({component:i.current||u,"aria-label":l},r))},v=Object.keys(l).filter((e=>!e.includes("TwoTone"))).map((e=>({[e]:t=>(0,p.tZ)(m,o()({component:l[e]},t))}))).reduce(((e,t)=>({...e,...t}))),_={};["alert","alert_solid","alert_solid_small","area-chart-tile","bar-chart-tile","big-number-chart-tile","binoculars","bolt","bolt_small","bolt_small_run","calendar","cancel","cancel_solid","cancel-x","card_view","cards","cards_locked","caret_down","caret_left","caret_right","caret_up","certified","check","checkbox-half","checkbox-off","checkbox-on","circle_check","circle_check_solid","circle","clock","close","code","cog","collapse","color_palette","current-rendered-tile","components","copy","cursor_target","database","dataset_physical","dataset_virtual_greyscale","dataset_virtual","download","drag","edit_alt","edit","email","error","error_solid","error_solid_small","exclamation","expand","eye","eye_slash","favorite-selected","favorite_small_selected","favorite-unselected","field_abc","field_boolean","field_date","field_derived","field_num","field_struct","file","filter","filter_small","folder","full","function_x","gear","grid","image","import","info","info-solid","info_solid_small","join","keyboard","layers","lightbulb","line-chart-tile","link","list","list_view","location","lock_locked","lock_unlocked","map","message","minus","minus_solid","more_horiz","more_vert","move","nav_charts","nav_dashboard","nav_data","nav_explore","nav_home","nav_lab","note","offline","paperclip","pie-chart-tile","placeholder","plus","plus_large","plus_small","plus_solid","queued","refresh","running","save","sql","search","server","share","slack","sort_asc","sort_desc","sort","table","table-chart-tile","tag","trash","triangle_change","triangle_down","triangle_up","up-level","user","warning","warning_solid","x-large","x-small","tags","ballot","category","undo","redo"].forEach((e=>{const t=i()(e).replace(/ /g,"");_[t]=t=>(0,p.tZ)(h,o()({fileName:e},t))}));const b={...v,..._}},37921:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(5872),o=n.n(r),a=n(11965),i=(n(67294),n(4715)),s=n(51995);function l(e){const t=(0,s.Fg)(),{colors:n,transitionTiming:r}=t,{type:l="default",onClick:d,children:c,...g}=e,{alert:u,primary:p,secondary:m,grayscale:h,success:v,warning:_,error:b,info:R}=n;let f=h.light3,E=d?p.light2:h.light3,y=d?h.light2:"transparent",N=d?p.light1:"transparent",O=h.dark1;if("default"!==l){let e;O=h.light4,"alert"===l?(O=h.dark1,e=u):e="success"===l?v:"warning"===l?_:"danger"===l?b:"info"===l?R:"secondary"===l?m:p,f=e.base,E=d?e.dark1:e.base,y=d?e.dark1:"transparent",N=d?e.dark2:"transparent"}return(0,a.tZ)(i.Vp,o()({onClick:d},g,{css:(0,a.iv)({transition:`background-color ${r}s`,whiteSpace:"nowrap",cursor:d?"pointer":"default",overflow:"hidden",textOverflow:"ellipsis",backgroundColor:f,borderColor:y,borderRadius:21,padding:"0.35em 0.8em",lineHeight:1,color:O,maxWidth:"100%","&:hover":{backgroundColor:E,borderColor:N,opacity:1}},"","")}),c)}},38703:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l}),n(67294);var r=n(51995),o=n(94184),a=n.n(o),i=n(11965);const s=r.iK.img`
  z-index: 99;
  width: 50px;
  position: relative;
  margin: 10px;
  &.inline {
    margin: 0px;
    width: 30px;
  }
  &.inline-centered {
    margin: 0 auto;
    width: 30px;
    display: block;
  }
  &.floating {
    padding: 0;
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;function l({position:e="floating",image:t="/static/assets/images/loading.gif",className:n}){return(0,i.tZ)(s,{className:a()("loading",e,n),alt:"Loading...",src:t,role:"status","aria-live":"polite","aria-label":"Loading"})}},72570:(e,t,n)=>{"use strict";n.d(t,{h:()=>i,fz:()=>s,K7:()=>l,RS:()=>d,bM:()=>c,ws:()=>g,Dz:()=>u,Gb:()=>p,s2:()=>m});var r=n(14670),o=n.n(r),a=n(1927);const i="ADD_TOAST";function s({toastType:e,text:t,duration:n=8e3,noDuplicate:r=!1}){return{type:i,payload:{id:(a=e,`${a}-${o().generate()}`),toastType:e,text:t,duration:n,noDuplicate:r}};var a}const l="REMOVE_TOAST";function d(e){return{type:l,payload:{id:e}}}function c(e,t){return s({text:e,toastType:a.p.INFO,duration:4e3,...t})}function g(e,t){return s({text:e,toastType:a.p.SUCCESS,duration:4e3,...t})}function u(e,t){return s({text:e,toastType:a.p.WARNING,duration:6e3,...t})}function p(e,t){return s({text:e,toastType:a.p.DANGER,duration:8e3,...t})}const m={addInfoToast:c,addSuccessToast:g,addWarningToast:u,addDangerToast:p}},1927:(e,t,n)=>{"use strict";var r;n.d(t,{p:()=>r}),function(e){e.INFO="INFO_TOAST",e.SUCCESS="SUCCESS_TOAST",e.WARNING="WARNING_TOAST",e.DANGER="DANGER_TOAST"}(r||(r={}))},14114:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>l,e1:()=>d});var r=n(67294),o=n(14890),a=n(37703),i=n(72570);const s={addInfoToast:i.bM,addSuccessToast:i.ws,addWarningToast:i.Dz,addDangerToast:i.Gb};function l(e){return(0,a.$j)(null,(e=>(0,o.DE)(s,e)))(e)}function d(){const e=(0,a.I0)();return(0,r.useMemo)((()=>(0,o.DE)(s,e)),[e])}},74069:(e,t,n)=>{"use strict";n.d(t,{o:()=>v,Z:()=>b});var r=n(5872),o=n.n(r),a=n(14293),i=n.n(a),s=n(67294),l=n(51995),d=n(61988),c=n(11965),g=n(4715),u=n(35932),p=n(29119),m=n(61193),h=n.n(m);const v=(0,l.iK)((e=>(0,c.tZ)(g.xT,o()({},e,{maskTransitionName:""}))))`
  ${({theme:e,responsive:t,maxWidth:n})=>t&&(0,c.iv)("max-width:",null!=n?n:"900px",";padding-left:",3*e.gridUnit,"px;padding-right:",3*e.gridUnit,"px;padding-bottom:0;top:0;","")}

  .ant-modal-content {
    display: flex;
    flex-direction: column;
    max-height: ${({theme:e})=>`calc(100vh - ${8*e.gridUnit}px)`};
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
    margin-top: ${({theme:e})=>4*e.gridUnit}px;
  }

  .ant-modal-header {
    flex: 0 0 auto;
    background-color: ${({theme:e})=>e.colors.grayscale.light4};
    border-radius: ${({theme:e})=>e.borderRadius}px
      ${({theme:e})=>e.borderRadius}px 0 0;
    padding-left: ${({theme:e})=>4*e.gridUnit}px;
    padding-right: ${({theme:e})=>4*e.gridUnit}px;

    .ant-modal-title h4 {
      display: flex;
      margin: 0;
      align-items: center;
    }
  }

  .ant-modal-close-x {
    display: flex;
    align-items: center;

    .close {
      flex: 1 1 auto;
      margin-bottom: ${({theme:e})=>e.gridUnit}px;
      color: ${({theme:e})=>e.colors.secondary.dark1};
      font-size: 32px;
      font-weight: ${({theme:e})=>e.typography.weights.light};
    }
  }

  .ant-modal-body {
    flex: 0 1 auto;
    padding: ${({theme:e})=>4*e.gridUnit}px;
    overflow: auto;
    ${({resizable:e,height:t})=>!e&&t&&`height: ${t};`}
  }
  .ant-modal-footer {
    flex: 0 0 1;
    border-top: ${({theme:e})=>e.gridUnit/4}px solid
      ${({theme:e})=>e.colors.grayscale.light2};
    padding: ${({theme:e})=>4*e.gridUnit}px;

    .btn {
      font-size: 12px;
      text-transform: uppercase;
    }

    .btn + .btn {
      margin-left: ${({theme:e})=>2*e.gridUnit}px;
    }
  }

  // styling for Tabs component
  // Aaron note 20-11-19: this seems to be exclusively here for the Edit Database modal.
  // TODO: remove this as it is a special case.
  .ant-tabs-top {
    margin-top: -${({theme:e})=>4*e.gridUnit}px;
  }

  &.no-content-padding .ant-modal-body {
    padding: 0;
  }

  ${({draggable:e,theme:t})=>e&&`\n    .ant-modal-header {\n      padding: 0;\n      .draggable-trigger {\n          cursor: move;\n          padding: ${4*t.gridUnit}px;\n          width: 100%;\n        }\n    }\n  `};

  ${({resizable:e,hideFooter:t})=>e&&`\n    .resizable {\n      pointer-events: all;\n\n      .resizable-wrapper {\n        height: 100%;\n      }\n\n      .ant-modal-content {\n        height: 100%;\n\n        .ant-modal-body {\n          /* 100% - header height - footer height */\n          height: ${t?"calc(100% - 55px);":"calc(100% - 55px - 65px);"}\n        }\n      }\n    }\n  `}
`,_=({children:e,disablePrimaryButton:t=!1,primaryButtonLoading:n=!1,onHide:r,onHandledPrimaryAction:a,primaryButtonName:l=(0,d.t)("OK"),primaryButtonType:g="primary",show:m,name:_,title:b,width:R,maxWidth:f,responsive:E=!1,centered:y,footer:N,hideFooter:O,wrapProps:C,draggable:S=!1,resizable:T=!1,resizableConfig:x={maxHeight:"100vh",maxWidth:"100vw",minHeight:O?109:174,minWidth:"380px",enable:{bottom:!0,bottomLeft:!1,bottomRight:!0,left:!1,top:!1,topLeft:!1,topRight:!1,right:!0}},draggableConfig:Z,destroyOnClose:w,...A})=>{const I=(0,s.useRef)(null),[k,D]=(0,s.useState)(),[$,U]=(0,s.useState)(!0),P=i()(N)?[(0,c.tZ)(u.Z,{key:"back",onClick:r,cta:!0},(0,d.t)("Cancel")),(0,c.tZ)(u.Z,{key:"submit",buttonStyle:g,disabled:t,loading:n,onClick:a,cta:!0},l)]:N,L=R||(E?"100vw":"600px"),M=!(T||S);return(0,c.tZ)(v,o()({centered:!!y,onOk:a,onCancel:r,width:L,maxWidth:f,responsive:E,visible:m,title:(0,c.tZ)((()=>S?(0,c.tZ)("div",{className:"draggable-trigger",onMouseOver:()=>$&&U(!1),onMouseOut:()=>!$&&U(!0)},b):(0,c.tZ)(s.Fragment,null,b)),null),closeIcon:(0,c.tZ)("span",{className:"close","aria-hidden":"true"},"×"),footer:O?null:P,hideFooter:O,wrapProps:{"data-test":`${_||b}-modal`,...C},modalRender:e=>T||S?(0,c.tZ)(h(),o()({disabled:!S||$,bounds:k,onStart:(e,t)=>((e,t)=>{var n,r,o;const{clientWidth:a,clientHeight:i}=null==(n=window)||null==(r=n.document)?void 0:r.documentElement,s=null==I||null==(o=I.current)?void 0:o.getBoundingClientRect();s&&D({left:-(null==s?void 0:s.left)+(null==t?void 0:t.x),right:a-((null==s?void 0:s.right)-(null==t?void 0:t.x)),top:-(null==s?void 0:s.top)+(null==t?void 0:t.y),bottom:i-((null==s?void 0:s.bottom)-(null==t?void 0:t.y))})})(0,t)},Z),T?(0,c.tZ)(p.e,o()({className:"resizable"},x),(0,c.tZ)("div",{className:"resizable-wrapper",ref:I},e)):(0,c.tZ)("div",{ref:I},e)):e,mask:M,draggable:S,resizable:T,destroyOnClose:w},A),e)};_.displayName="Modal";const b=Object.assign(_,{error:g.xT.error,warning:g.xT.warning,confirm:g.xT.confirm,useModal:g.xT.useModal})},64158:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g}),n(67294);var r=n(51995),o=n(94184),a=n.n(o),i=n(11965);const s=r.iK.ul`
  display: inline-block;
  margin: 16px 0;
  padding: 0;

  li {
    display: inline;
    margin: 0 4px;

    span {
      padding: 8px 12px;
      text-decoration: none;
      background-color: ${({theme:e})=>e.colors.grayscale.light5};
      border-radius: ${({theme:e})=>e.borderRadius}px;

      &:hover,
      &:focus {
        z-index: 2;
        color: ${({theme:e})=>e.colors.grayscale.dark1};
        background-color: ${({theme:e})=>e.colors.grayscale.light3};
      }
    }

    &.disabled {
      span {
        background-color: transparent;
        cursor: default;

        &:focus {
          outline: none;
        }
      }
    }
    &.active {
      span {
        z-index: 3;
        color: ${({theme:e})=>e.colors.grayscale.light5};
        cursor: default;
        background-color: ${({theme:e})=>e.colors.primary.base};

        &:focus {
          outline: none;
        }
      }
    }
  }
`;function l({children:e}){return(0,i.tZ)(s,{role:"navigation"},e)}l.Next=function({disabled:e,onClick:t}){return(0,i.tZ)("li",{className:a()({disabled:e})},(0,i.tZ)("span",{role:"button",tabIndex:e?-1:0,onClick:n=>{n.preventDefault(),e||t(n)}},"»"))},l.Prev=function({disabled:e,onClick:t}){return(0,i.tZ)("li",{className:a()({disabled:e})},(0,i.tZ)("span",{role:"button",tabIndex:e?-1:0,onClick:n=>{n.preventDefault(),e||t(n)}},"«"))},l.Item=function({active:e,children:t,onClick:n}){return(0,i.tZ)("li",{className:a()({active:e})},(0,i.tZ)("span",{role:"button",tabIndex:e?-1:0,onClick:t=>{t.preventDefault(),e||n(t)}},t))},l.Ellipsis=function({disabled:e,onClick:t}){return(0,i.tZ)("li",{className:a()({disabled:e})},(0,i.tZ)("span",{role:"button",tabIndex:e?-1:0,onClick:n=>{n.preventDefault(),e||t(n)}},"…"))};const d=l;var c=n(52630);const g=(0,c.YM)({WrapperComponent:d,itemTypeToComponent:{[c.iB.PAGE]:({value:e,isActive:t,onClick:n})=>(0,i.tZ)(d.Item,{active:t,onClick:n},e),[c.iB.ELLIPSIS]:({isActive:e,onClick:t})=>(0,i.tZ)(d.Ellipsis,{disabled:e,onClick:t}),[c.iB.PREVIOUS_PAGE_LINK]:({isActive:e,onClick:t})=>(0,i.tZ)(d.Prev,{disabled:e,onClick:t}),[c.iB.NEXT_PAGE_LINK]:({isActive:e,onClick:t})=>(0,i.tZ)(d.Next,{disabled:e,onClick:t}),[c.iB.FIRST_PAGE_LINK]:()=>null,[c.iB.LAST_PAGE_LINK]:()=>null}})},24554:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>L,mj:()=>$});var r=n(5872),o=n.n(r),a=n(18446),i=n.n(a),s=n(67294),l=n(51995),d=n(61988),c=n(55786),g=n(64749),u=n(76570),p=n(57254),m=n(11382),h=n(23279),v=n.n(h),_=n(70163),b=n(98286),R=n(27600),f=n(55083),E=n(11965);const{Option:y}=g.Z,N=l.iK.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,O=(0,l.iK)(g.Z)`
  ${({theme:e})=>`\n    && .ant-select-selector {\n      border-radius: ${e.gridUnit}px;\n    }\n    // Open the dropdown when clicking on the suffix\n    // This is fixed in version 4.16\n    .ant-select-arrow .anticon:not(.ant-select-suffix) {\n      pointer-events: none;\n    }\n  `}
`,C=(0,l.iK)(_.Z.StopOutlined)`
  vertical-align: 0;
`,S=(0,l.iK)(_.Z.CheckOutlined)`
  vertical-align: 0;
`,T=l.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    width: 100%;\n    padding: ${2*e.gridUnit}px;\n    color: ${e.colors.error.base};\n    & svg {\n      margin-right: ${2*e.gridUnit}px;\n    }\n  `}
`,x=l.iK.div`
  overflow: hidden;
  text-overflow: ellipsis;
`,Z=(0,l.iK)(m.Z)`
  margin-top: ${({theme:e})=>-e.gridUnit}px;
`,w=l.iK.div`
  ${({theme:e})=>`\n    margin-left: ${3*e.gridUnit}px;\n    line-height: ${8*e.gridUnit}px;\n    color: ${e.colors.grayscale.light1};\n  `}
`,A=[",","\n","\t",";"],I=[],k=({error:e})=>(0,E.tZ)(T,null,(0,E.tZ)(_.Z.ErrorSolid,null)," ",(0,E.tZ)(x,null,e)),D=(e,t,n)=>{let r,o;return"string"==typeof e.label&&"string"==typeof t.label?(r=e.label,o=t.label):"string"==typeof e.value&&"string"==typeof t.value&&(r=e.value,o=t.value),"string"==typeof r&&"string"==typeof o?n?function(e,t,n){const r=e.toLowerCase()||"",o=t.toLowerCase()||"",a=n.toLowerCase()||"";return n&&(Number(t===n)-Number(e===n)||Number(t.startsWith(n))-Number(e.startsWith(n))||Number(o===a)-Number(r===a)||Number(o.startsWith(a))-Number(r.startsWith(a))||Number(t.includes(n))-Number(e.includes(n))||Number(o.includes(a))-Number(e.includes(a)))||e.localeCompare(t)}(r,o,n):r.localeCompare(o):e.value-t.value},$=e=>(t,n)=>"string"==typeof t[e]&&"string"==typeof n[e]?t[e].localeCompare(n[e]):t[e]-n[e],U=(e,t,n)=>`${e};${t};${n}`,P=({allowClear:e,allowNewOptions:t=!1,ariaLabel:n,fetchOnlyOnSearch:r,filterOption:a=!0,header:l=null,invertSelection:g=!1,labelInValue:m=!1,lazyLoading:h=!0,loading:_,mode:T="single",name:x,notFoundContent:$,onError:P,onChange:L,onClear:M,onDropdownVisibleChange:F,optionFilterProps:z=["label","value"],options:B,pageSize:K=100,placeholder:G=(0,d.t)("Select ..."),showSearch:W=!0,sortComparator:H=D,tokenSeparators:Y,value:V,...j},q)=>{const X="function"==typeof B,Q="single"===T,J=!(!X&&!t)||W,[ee,te]=(0,s.useState)(V),[ne,re]=(0,s.useState)(""),[oe,ae]=(0,s.useState)(_),[ie,se]=(0,s.useState)(""),[le,de]=(0,s.useState)(!1),[ce,ge]=(0,s.useState)(0),[ue,pe]=(0,s.useState)(0),[me,he]=(0,s.useState)(!h),[ve,_e]=(0,s.useState)(!1),be=(0,s.useRef)(new Map),Re=Q?void 0:t?"tags":"multiple",fe=!r||ne,Ee=(0,s.useCallback)(((e,t)=>ee&&void 0!==e.value&&void 0!==t.value?Number((0,f.Gq)(t.value,ee))-Number((0,f.Gq)(e.value,ee)):0),[ee]),ye=(0,s.useCallback)(((e,t)=>Ee(e,t)||H(e,t,ne)),[ne,H,Ee]),Ne=(0,s.useCallback)(((e,t)=>Ee(e,t)||(X?H(e,t,""):0)),[X,H,Ee]),Oe=(0,s.useMemo)((()=>B&&Array.isArray(B)?B.slice():I),[B]),Ce=(0,s.useMemo)((()=>Oe.slice().sort(Ne)),[Oe,Ne]),[Se,Te]=(0,s.useState)(Ce),xe=(0,s.useMemo)((()=>{const e=(0,c.Z)(ee).filter((e=>!(0,f.Gq)((0,f.NA)(e),Se))).map((e=>(0,f.nq)(e)?e:{value:e,label:String(e)}));return e.length>0?e.concat(Se):Se}),[Se,ee]),Ze=xe.some((e=>!(null==e||!e.customLabel))),we=(0,s.useCallback)((e=>(0,b.O)(e).then((e=>{const{error:t}=e;se(t),P&&P(t)}))),[P]),Ae=(0,s.useCallback)((e=>{let t=[];if(e&&Array.isArray(e)&&e.length){const n=new Set(e.map((e=>e.value)));Te((r=>(t=r.filter((e=>!n.has(e.value))).concat(e).sort(Ne),t)))}return t}),[Ne]),Ie=(0,s.useMemo)((()=>(e,t)=>{if(ge(t),ve)return void ae(!1);const n=U(e,t,K),o=be.current.get(n);if(void 0!==o)return pe(o),void ae(!1);ae(!0),B(e,t,K).then((({data:e,totalCount:t})=>{const o=Ae(e);be.current.set(n,t),pe(t),!r&&""===V&&o.length>=t&&_e(!0)})).catch(we).finally((()=>{ae(!1)}))}),[ve,r,Ae,we,B,K,V]),ke=(0,s.useMemo)((()=>v()(Ie,R.M$)),[Ie]);return(0,s.useEffect)((()=>{be.current.clear(),_e(!1),Te(Oe)}),[Oe]),(0,s.useEffect)((()=>{te(V)}),[V]),(0,s.useEffect)((()=>()=>{ke.cancel()}),[ke]),(0,s.useEffect)((()=>{X&&me&&fe&&(ne?ke(ne,0):Ie("",0))}),[X,me,Ie,fe,ne,ke]),(0,s.useEffect)((()=>{void 0!==_&&_!==oe&&ae(_)}),[oe,_]),(0,E.tZ)(N,null,l,(0,E.tZ)(O,o()({allowClear:!oe&&e,"aria-label":n||x,dropdownRender:e=>{var t,n;return le||null==(t=e.ref)||null==(n=t.current)||n.scrollTo({top:0}),oe&&0===xe.length?(0,E.tZ)(w,null,(0,d.t)("Loading...")):ie?(0,E.tZ)(k,{error:ie}):e},filterOption:(e,t)=>{if("function"==typeof a)return a(e,t);if(a){const n=e.trim().toLowerCase();if(z&&z.length)return z.some((e=>(null!=t&&t[e]?String(t[e]).trim().toLowerCase():"").includes(n)))}return!1},filterSort:ye,getPopupContainer:e=>e.parentNode,labelInValue:X||m,maxTagCount:4,mode:Re,notFoundContent:oe?(0,d.t)("Loading..."):$,onDeselect:e=>{Array.isArray(ee)&&((0,f.nq)(e)?te(ee.filter((t=>t.value!==e.value))):te(ee.filter((t=>t!==e)))),re("")},onDropdownVisibleChange:e=>{if(de(e),X&&(me!==e&&he(e),!e&&oe&&setTimeout((()=>{ae(!1)}),250)),e&&!ne&&Se.length>1){const e=X?Se.slice().sort(Ne):Ce;i()(e,Se)||Te(e)}F&&F(e)},onPopupScroll:X?e=>{const t=e.currentTarget,n=t.scrollTop>.7*(t.scrollHeight-t.offsetHeight);!oe&&X&&ce*K+K<ue&&n&&Ie(ne,ce+1)}:void 0,onSearch:J?e=>{const n=e.trim();if(t&&Q){const e=n&&!(0,f.Gq)(n,xe,!0)&&{label:n,value:n,isNewOption:!0},t=xe.filter((e=>!e.isNewOption||(0,f.Gq)(e.value,ee))),r=e?[e,...t]:t;Te(r)}X&&!ve&&me&&!be.current.has(U(n,0,K))&&ae(!(r&&!n)),re(e)}:void 0,onSelect:e=>{te(Q?e:t=>{const n=(0,c.Z)(t),r=(0,f.NA)(e);if(!(0,f.Gq)(r,n)){const t=[...n,e];return(0,f.nq)(e),t}return t}),re("")},onClear:()=>{te(void 0),M&&M()},onChange:L,options:Ze?void 0:xe,placeholder:G,showSearch:J,showArrow:!0,tokenSeparators:Y||A,value:ee,suffixIcon:oe?(0,E.tZ)(Z,{size:"small"}):J&&le?(0,E.tZ)(u.Z,null):(0,E.tZ)(p.Z,null),menuItemSelectedIcon:g?(0,E.tZ)(C,{iconSize:"m"}):(0,E.tZ)(S,{iconSize:"m"}),ref:q},j),Ze&&xe.map((e=>{const t="object"==typeof e,n=t?(null==e?void 0:e.label)||e.value:e,r=t?e.value:e,{customLabel:a,...i}=e;return(0,E.tZ)(y,o()({},i,{key:r,label:n,value:r}),t&&a?a:n)}))))},L=(0,s.forwardRef)(P)},55083:(e,t,n)=>{"use strict";n.d(t,{dG:()=>a,nq:()=>i,NA:()=>s,Gq:()=>l});var r=n(55786);function o(e){return null!==e&&"object"==typeof e&&!1===Array.isArray(e)}function a(e,t=[],n="value"){if(null==e||""===e)return[];const r=Array.isArray((t[0]||{}).options)?t.flatMap((e=>e.options||[])):t;return(Array.isArray(e)?e:[e]).map((t=>{const o=(e||{}).hasOwnProperty(n)?t[n]:t;return r.find((e=>e===o||e[n]===o))||t}))}function i(e){return o(e)&&"value"in e&&"label"in e}function s(e){return i(e)?e.value:e}function l(e,t,n=!1){return void 0!==(0,r.Z)(t).find((t=>t===e||o(t)&&("value"in t&&t.value===e||n&&"label"in t&&t.label===e)))}},97754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(5872),o=n.n(r),a=n(67294),i=n(94184),s=n.n(i),l=n(51995),d=n(70163),c=n(11965);const g=l.iK.table`
  ${({theme:e})=>`\n    background-color: ${e.colors.grayscale.light5};\n    border-collapse: separate;\n    border-radius: ${e.borderRadius}px;\n\n    thead > tr > th {\n      border: 0;\n    }\n\n    tbody {\n      tr:first-of-type > td {\n        border-top: 0;\n      }\n    }\n    th {\n      background: ${e.colors.grayscale.light5};\n      position: sticky;\n      top: 0;\n\n      &:first-of-type {\n        padding-left: ${4*e.gridUnit}px;\n      }\n\n      &.xs {\n        min-width: 25px;\n      }\n      &.sm {\n        min-width: 50px;\n      }\n      &.md {\n        min-width: 75px;\n      }\n      &.lg {\n        min-width: 100px;\n      }\n      &.xl {\n        min-width: 150px;\n      }\n      &.xxl {\n        min-width: 200px;\n      }\n\n      span {\n        white-space: nowrap;\n        display: flex;\n        align-items: center;\n        line-height: 2;\n      }\n\n      svg {\n        display: inline-block;\n        position: relative;\n      }\n    }\n\n    td {\n      &.xs {\n        width: 25px;\n      }\n      &.sm {\n        width: 50px;\n      }\n      &.md {\n        width: 75px;\n      }\n      &.lg {\n        width: 100px;\n      }\n      &.xl {\n        width: 150px;\n      }\n      &.xxl {\n        width: 200px;\n      }\n    }\n\n    .table-cell-loader {\n      position: relative;\n\n      .loading-bar {\n        background-color: ${e.colors.secondary.light4};\n        border-radius: 7px;\n\n        span {\n          visibility: hidden;\n        }\n      }\n\n      .empty-loading-bar {\n        display: inline-block;\n        width: 100%;\n        height: 1.2em;\n      }\n    }\n\n    .actions {\n      white-space: nowrap;\n      min-width: 100px;\n\n      svg,\n      i {\n        margin-right: 8px;\n\n        &:hover {\n          path {\n            fill: ${e.colors.primary.base};\n          }\n        }\n      }\n    }\n\n    .table-row {\n      .actions {\n        opacity: 0;\n        font-size: ${e.typography.sizes.xl}px;\n        display: flex;\n      }\n\n      &:hover {\n        background-color: ${e.colors.secondary.light5};\n\n        .actions {\n          opacity: 1;\n          transition: opacity ease-in ${e.transitionTiming}s;\n        }\n      }\n    }\n\n    .table-row-selected {\n      background-color: ${e.colors.secondary.light4};\n\n      &:hover {\n        background-color: ${e.colors.secondary.light4};\n      }\n    }\n\n    .table-cell {\n      font-feature-settings: 'tnum' 1;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: 320px;\n      line-height: 1;\n      vertical-align: middle;\n      &:first-of-type {\n        padding-left: ${4*e.gridUnit}px;\n      }\n      &__wrap {\n        white-space: normal;\n      }\n      &__nowrap {\n        white-space: nowrap;\n      }\n    }\n\n    @keyframes loading-shimmer {\n      40% {\n        background-position: 100% 0;\n      }\n\n      100% {\n        background-position: 100% 0;\n      }\n    }\n  `}
`;g.displayName="table";const u=a.memo((({getTableProps:e,getTableBodyProps:t,prepareRow:n,headerGroups:r,columns:a,rows:i,loading:l,highlightRowId:u,columnsForWrapText:p})=>(0,c.tZ)(g,o()({},e(),{className:"table table-hover"}),(0,c.tZ)("thead",null,r.map((e=>(0,c.tZ)("tr",e.getHeaderGroupProps(),e.headers.map((e=>{let t=(0,c.tZ)(d.Z.Sort,null);return e.isSorted&&e.isSortedDesc?t=(0,c.tZ)(d.Z.SortDesc,null):e.isSorted&&!e.isSortedDesc&&(t=(0,c.tZ)(d.Z.SortAsc,null)),e.hidden?null:(0,c.tZ)("th",o()({},e.getHeaderProps(e.canSort?e.getSortByToggleProps():{}),{className:s()({[e.size||""]:e.size})}),(0,c.tZ)("span",null,e.render("Header"),e.canSort&&t))})))))),(0,c.tZ)("tbody",t(),l&&0===i.length&&[...new Array(12)].map(((e,t)=>(0,c.tZ)("tr",{key:t},a.map(((e,t)=>e.hidden?null:(0,c.tZ)("td",{key:t,className:s()("table-cell",{"table-cell-loader":l})},(0,c.tZ)("span",{className:"loading-bar empty-loading-bar",role:"progressbar","aria-label":"loading"}))))))),i.length>0&&i.map((e=>{n(e);const t=e.original.id;return(0,c.tZ)("tr",o()({},e.getRowProps(),{className:s()("table-row",{"table-row-selected":e.isSelected||void 0!==t&&t===u})}),e.cells.map((e=>{if(e.column.hidden)return null;const t=e.column.cellProps||{},n=p&&p.includes(e.column.Header);return(0,c.tZ)("td",o()({className:s()("table-cell table-cell__"+(n?"wrap":"nowrap"),{"table-cell-loader":l,[e.column.size||""]:e.column.size})},e.getCellProps(),t),(0,c.tZ)("span",{className:s()({"loading-bar":l}),role:l?"progressbar":void 0},(0,c.tZ)("span",null,e.render("Cell"))))})))}))))))},46977:(e,t,n)=>{"use strict";n.d(t,{u:()=>r,Z:()=>b});var r,o=n(67294),a=n(18446),i=n.n(a),s=n(51995),l=n(61988),d=n(79521),c=n(4715),g=n(64158),u=n(97754),p=n(11965);!function(e){e.Default="Default",e.Small="Small"}(r||(r={}));const m=s.iK.div`
  margin: ${({theme:e})=>40*e.gridUnit}px 0;
`,h=s.iK.div`
  ${({scrollTable:e,theme:t})=>e&&`\n    flex: 1 1 auto;\n    margin-bottom: ${4*t.gridUnit}px;\n    overflow: auto;\n  `}

  .table-row {
    ${({theme:e,small:t})=>!t&&`height: ${11*e.gridUnit-1}px;`}

    .table-cell {
      ${({theme:e,small:t})=>t&&`\n        padding-top: ${e.gridUnit+1}px;\n        padding-bottom: ${e.gridUnit+1}px;\n        line-height: 1.45;\n      `}
    }
  }

  th[role='columnheader'] {
    z-index: 1;
    border-bottom: ${({theme:e})=>`${e.gridUnit-2}px solid ${e.colors.grayscale.light2}`};
    ${({small:e})=>e&&"padding-bottom: 0;"}
  }
`,v=s.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};

  ${({isPaginationSticky:e})=>e&&"\n        position: sticky;\n        bottom: 0;\n        left: 0;\n    "};

  .row-count-container {
    margin-top: ${({theme:e})=>2*e.gridUnit}px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`,_=({columns:e,data:t,pageSize:n,totalCount:a=t.length,initialPageIndex:s,initialSortBy:_=[],loading:b=!1,withPagination:R=!0,emptyWrapperType:f=r.Default,noDataText:E,showRowCount:y=!0,serverPagination:N=!1,columnsForWrapText:O,onServerPagination:C=(()=>{}),...S})=>{const T={pageSize:null!=n?n:10,pageIndex:null!=s?s:0,sortBy:_},{getTableProps:x,getTableBodyProps:Z,headerGroups:w,page:A,rows:I,prepareRow:k,pageCount:D,gotoPage:$,state:{pageIndex:U,pageSize:P,sortBy:L}}=(0,d.useTable)({columns:e,data:t,initialState:T,manualPagination:N,manualSortBy:N,pageCount:Math.ceil(a/T.pageSize)},d.useFilters,d.useSortBy,d.usePagination);(0,o.useEffect)((()=>{N&&U!==T.pageIndex&&C({pageIndex:U})}),[U]),(0,o.useEffect)((()=>{N&&!i()(L,T.sortBy)&&C({pageIndex:0,sortBy:L})}),[L]);const M=R?A:I;let F;switch(f){case r.Small:F=({children:e})=>(0,p.tZ)(o.Fragment,null,e);break;case r.Default:default:F=({children:e})=>(0,p.tZ)(m,null,e)}const z=!b&&0===M.length,B=D>1&&R;return(0,p.tZ)(o.Fragment,null,(0,p.tZ)(h,S,(0,p.tZ)(u.Z,{getTableProps:x,getTableBodyProps:Z,prepareRow:k,headerGroups:w,rows:M,columns:e,loading:b,columnsForWrapText:O}),z&&(0,p.tZ)(F,null,E?(0,p.tZ)(c.HY,{image:c.HY.PRESENTED_IMAGE_SIMPLE,description:E}):(0,p.tZ)(c.HY,{image:c.HY.PRESENTED_IMAGE_SIMPLE}))),B&&(0,p.tZ)(v,{className:"pagination-container",isPaginationSticky:S.isPaginationSticky},(0,p.tZ)(g.Z,{totalPages:D||0,currentPage:D?U+1:0,onChange:e=>$(e-1),hideFirstAndLastPageLinks:!0}),y&&(0,p.tZ)("div",{className:"row-count-container"},!b&&(0,l.t)("%s-%s of %s",P*U+(A.length&&1),P*U+A.length,a))))},b=o.memo(_)},76962:(e,t,n)=>{"use strict";n.d(t,{u:()=>r.u,Z:()=>r.Z});var r=n(46977)},71262:(e,t,n)=>{"use strict";n.d(t,{Xv:()=>m,cl:()=>v,ZP:()=>_});var r=n(5872),o=n.n(r),a=(n(67294),n(11965)),i=n(51995),s=n(1350),l=n(70163);const d=({animated:e=!1,fullWidth:t=!0,allowOverflow:n=!0,...r})=>(0,a.tZ)(s.default,o()({animated:e},r,{css:e=>a.iv`
      overflow: ${n?"visible":"hidden"};

      .ant-tabs-content-holder {
        overflow: ${n?"visible":"auto"};
      }
      .ant-tabs-tab {
        flex: 1 1 auto;
        &.ant-tabs-tab-active .ant-tabs-tab-btn {
          color: inherit;
        }
        &:hover {
          .anchor-link-container {
            cursor: pointer;
            .fa.fa-link {
              visibility: visible;
            }
          }
        }
        .short-link-trigger.btn {
          padding: 0 ${e.gridUnit}px;
          & > .fa.fa-link {
            top: 0;
          }
        }
      }
      ${t&&a.iv`
        .ant-tabs-nav-list {
          width: 100%;
        }
      `};

      .ant-tabs-tab-btn {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        font-size: ${e.typography.sizes.s}px;
        text-align: center;
        text-transform: uppercase;
        user-select: none;
        .required {
          margin-left: ${e.gridUnit/2}px;
          color: ${e.colors.error.base};
        }
      }
      .ant-tabs-ink-bar {
        background: ${e.colors.secondary.base};
      }
    `})),c=(0,i.iK)(s.default.TabPane)``,g=Object.assign(d,{TabPane:c}),u=(0,i.iK)(d)`
  ${({theme:e,fullWidth:t})=>`\n    .ant-tabs-content-holder {\n      background: ${e.colors.grayscale.light5};\n    }\n\n    & > .ant-tabs-nav {\n      margin-bottom: 0;\n    }\n\n    .ant-tabs-tab-remove {\n      padding-top: 0;\n      padding-bottom: 0;\n      height: ${6*e.gridUnit}px;\n    }\n\n    ${t?a.iv`
            .ant-tabs-nav-list {
              width: 100%;
            }
          `:""}\n  `}
`,p=(0,i.iK)(l.Z.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,m=Object.assign(u,{TabPane:c});m.defaultProps={type:"editable-card",fullWidth:!1,animated:{inkBar:!0,tabPane:!1}},m.TabPane.defaultProps={closeIcon:(0,a.tZ)(p,{role:"button",tabIndex:0})};const h=(0,i.iK)(m)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${({theme:e})=>4*e.gridUnit}px;
    padding: ${({theme:e})=>`${3*e.gridUnit}px ${e.gridUnit}px`};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
  }

  .ant-tabs-tab-remove {
    margin-left: 0;
    padding-right: 0;
  }

  .ant-tabs-nav-add {
    min-width: unset !important;
    background: transparent !important;
    border: none !important;
  }
`,v=Object.assign(h,{TabPane:c}),_=g},58593:(e,t,n)=>{"use strict";n.d(t,{u:()=>d});var r=n(5872),o=n.n(r),a=n(67294),i=n(51995),s=n(11965),l=n(31097);const d=e=>{const t=(0,i.Fg)();return(0,s.tZ)(a.Fragment,null,(0,s.tZ)(s.xB,{styles:s.iv`
          .ant-tooltip-open {
            display: inline-block;
            &::after {
              content: '';
              display: block;
            }
          }
        `}),(0,s.tZ)(l.Z,o()({overlayStyle:{fontSize:t.typography.sizes.s,lineHeight:"1.6"},color:`${t.colors.grayscale.dark2}e6`},e)))}},4715:(e,t,n)=>{"use strict";n.d(t,{Ph:()=>r.ZP,Qc:()=>o.Z,qE:()=>a.C,JX:()=>i.Z,iz:()=>s.Z,HY:()=>l.Z,rj:()=>d.ZP,aV:()=>c.ZP,X2:()=>g.Z,Od:()=>u.Z,T:()=>p.Z,Rg:()=>m.Z,Vp:()=>h.Z,mp:()=>v.Z,ZT:()=>_.Z,gq:()=>b.Z,C0:()=>R.Z,Ak:()=>f.Z,r4:()=>E.Z,Ol:()=>y.Z,Gj:()=>N.Z,qz:()=>O.Z,oc:()=>C.Z,xT:()=>S.Z,IZ:()=>T.Z,rb:()=>x.Z,KU:()=>Z.Z,D6:()=>w.Z,_e:()=>A.Z});var r=n(24554),o=n(49288),a=n(51890),i=n(15746),s=n(27049),l=n(14277),d=n(75302),c=n(77799),g=n(71230),u=n(33860),p=n(19650),m=n(27220),h=n(60331),v=n(31183),_=n(59118),b=n(76310),R=n(71577),f=n(39144),E=n(9676),y=n(46445),N=n(16114),O=n(7646),C=n(4107),S=n(57016),T=n(8834),x=n(31955),Z=n(59314),w=n(88108),A=n(31097)},27600:(e,t,n)=>{"use strict";n.d(t,{v2:()=>r,n2:()=>o,Ly:()=>a,gz:()=>i,KD:()=>s,$O:()=>l,Rv:()=>d,oP:()=>c,M$:()=>g,Wq:()=>u});const r="YYYY-MM-DD HH:mm:ssZ",o="HH:mm:ss.SSS",a="True",i="False",s={migrationState:{name:"migration_state",type:"string"},standalone:{name:"standalone",type:"number"},uiConfig:{name:"uiConfig",type:"number"},preselectFilters:{name:"preselect_filters",type:"object"},nativeFilters:{name:"native_filters",type:"rison"},nativeFiltersKey:{name:"native_filters_key",type:"string"},filterSet:{name:"filter_set",type:"string"},showFilters:{name:"show_filters",type:"boolean"},expandFilters:{name:"expand_filters",type:"boolean"},formDataKey:{name:"form_data_key",type:"string"},sliceId:{name:"slice_id",type:"string"},datasourceId:{name:"datasource_id",type:"string"},datasetId:{name:"dataset_id",type:"string"},datasourceType:{name:"datasource_type",type:"string"},dashboardId:{name:"dashboard_id",type:"string"},force:{name:"force",type:"boolean"},permalinkKey:{name:"permalink_key",type:"string"}},l=[s.formDataKey.name,s.sliceId.name,s.datasourceId.name,s.datasourceType.name,s.datasetId.name],d=[s.nativeFilters.name,s.nativeFiltersKey.name,s.permalinkKey.name,s.preselectFilters.name],c=250,g=500,u="N/A"},99543:(e,t,n)=>{"use strict";n.d(t,{SJ:()=>v,wK:()=>_,gf:()=>b,gP:()=>R,p1:()=>f,_0:()=>E,zd:()=>y,hU:()=>N,E8:()=>O,JB:()=>C});var r=n(45220),o=n.n(r),a=n(52353),i=n.n(a),s=n(14176),l=n.n(s),d=n(18446),c=n.n(d),g=n(14670),u=n.n(g),p=n(14890),m=n(64417),h=n.n(m);function v(e,t,n){const r={...e[t]},o={...n};return o.id||(o.id=u().generate()),r[o.id]=o,{...e,[t]:r}}function _(e,t,n,r){const o={...e[t]};return o[n.id]={...o[n.id],...r},{...e,[t]:o}}function b(e,t,n,r,o="id"){const a=[];return e[t].forEach((e=>{n[o]===e[o]?a.push({...e,...r}):a.push(e)})),{...e,[t]:a}}function R(e,t,n,r="id"){const o=[];return e[t].forEach((e=>{n[r]!==e[r]&&o.push(e)})),{...e,[t]:o}}function f(e,t){let n;return e.forEach((e=>{e.id===t&&(n=e)})),n}function E(e,t,n,r=!1){const o={...n};o.id||(o.id=u().generate());const a={};return a[t]=r?[o,...e[t]]:[...e[t],o],{...e,...a}}function y(e,t,n,r=!1){const o=[...n];o.forEach((e=>{e.id||(e.id=u().generate())}));const a={};return a[t]=r?[...o,...e[t]]:[...e[t],...o],{...e,...a}}function N(e=!0,t={}){const{paths:n,config:r}=t,o=p.qC;return e?o(h()(n,r)):o()}function O(e,t){if(!e||!t)return!1;if(e.length!==t.length)return!1;const{length:n}=e;for(let r=0;r<n;r+=1)if(e[r]!==t[r])return!1;return!0}function C(e,t,n={ignoreUndefined:!1,ignoreNull:!1}){let r=e,a=t;return n.ignoreUndefined&&(r=l()(r,i()),a=l()(a,i())),n.ignoreNull&&(r=l()(r,o()),a=l()(a,o())),c()(r,a)}},10222:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(54076);const o=e=>(async e=>{if((0,r.G6)())try{const t=new ClipboardItem({"text/plain":e()});await navigator.clipboard.write([t])}catch{const t=await e();await navigator.clipboard.writeText(t)}else{const t=await e();await navigator.clipboard.writeText(t)}})(e).catch((()=>e().then((e=>new Promise(((t,n)=>{const r=document.getSelection();if(r){r.removeAllRanges();const t=document.createRange(),o=document.createElement("span");o.textContent=e,o.style.position="fixed",o.style.top="0",o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",document.body.appendChild(o),t.selectNode(o),r.addRange(t);try{document.execCommand("copy")||n()}catch(e){n()}document.body.removeChild(o),r.removeRange?r.removeRange(t):r.removeAllRanges()}t()}))))))},66785:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={SESSION_TIMED_OUT:"Your session timed out, please refresh your page and try again."}},98286:(e,t,n)=>{"use strict";n.d(t,{M:()=>i,O:()=>s});var r=n(61988),o=n(67663),a=n(66785);function i(e){let t={...e};var n,o,i;return t.errors&&t.errors.length>0&&(t.error=t.description=t.errors[0].message,t.link=null==(n=t.errors[0])||null==(o=n.extra)?void 0:o.link),t.message&&"object"==typeof t.message&&!t.error&&(t.error=(null==(i=Object.values(t.message)[0])?void 0:i[0])||(0,r.t)("Invalid input")),t.stack?t={...t,error:(0,r.t)("Unexpected error: ")+(t.description||(0,r.t)("(no description, click to see stack trace)")),stacktrace:t.stack}:t.responseText&&t.responseText.indexOf("CSRF")>=0&&(t={...t,error:(0,r.t)(a.Z.SESSION_TIMED_OUT)}),{...t,error:t.error}}function s(e){return new Promise((t=>{if("string"==typeof e)return void t({error:e});if(e instanceof TypeError&&"Failed to fetch"===e.message)return void t({error:(0,r.t)("Network error")});if("timeout"in e&&"statusText"in e&&"timeout"===e.statusText)return void t({...e,error:(0,r.t)("Request timed out"),errors:[{error_type:o.C.FRONTEND_TIMEOUT_ERROR,extra:{timeout:e.timeout/1e3,issue_codes:[{code:1e3,message:(0,r.t)("Issue 1000 - The dataset is too large to query.")},{code:1001,message:(0,r.t)("Issue 1001 - The database is under an unusual load.")}]},level:"error",message:"Request timed out"}]});const n=e instanceof Response?e:e.response;if(n&&!n.bodyUsed)return void n.clone().json().then((e=>{const r={...n,...e};t(i(r))})).catch((()=>{n.text().then((e=>{t({...n,error:e})}))}));let a=e.statusText||e.message;a||(console.error("non-standard error:",e),a=(0,r.t)("An error occurred")),t({...n,error:a})}))}},35782:(e,t,n)=>{var r={"./alert.svg":[57249,7249],"./alert_solid.svg":[52797,2797],"./alert_solid_small.svg":[71256,1256],"./area-chart-tile.svg":[37989,7989],"./ballot.svg":[87760,7760],"./bar-chart-tile.svg":[72122,3187],"./big-number-chart-tile.svg":[1402,1402],"./binoculars.svg":[38970,8970],"./bolt.svg":[4794,4794],"./bolt_small.svg":[49510,9510],"./bolt_small_run.svg":[36883,6883],"./calendar.svg":[65816,5816],"./cancel-x.svg":[77654,7654],"./cancel.svg":[14757,4757],"./cancel_solid.svg":[55777,5777],"./card_view.svg":[25838,5838],"./cards.svg":[81293,1293],"./cards_locked.svg":[69052,9052],"./caret_down.svg":[48820,7832],"./caret_left.svg":[80310,310],"./caret_right.svg":[64817,4817],"./caret_up.svg":[6011,9811],"./category.svg":[24851,4851],"./certified.svg":[88695,8695],"./check.svg":[83544,3544],"./checkbox-half.svg":[57405,7405],"./checkbox-off.svg":[75281,5281],"./checkbox-on.svg":[99013,9013],"./circle.svg":[60183,183],"./circle_check.svg":[93558,3558],"./circle_check_solid.svg":[70992,992],"./clock.svg":[50597,597],"./close.svg":[50999,999],"./code.svg":[16981,6981],"./cog.svg":[45962,5962],"./collapse.svg":[24266,4266],"./color_palette.svg":[65580,5580],"./components.svg":[80312,312],"./copy.svg":[23141,3141],"./cross-filter-badge.svg":[64625,4625],"./current-rendered-tile.svg":[82955,2955],"./cursor_target.svg":[96758,6758],"./database.svg":[15249,5249],"./dataset_physical.svg":[8312,8312],"./dataset_virtual.svg":[77156,5330],"./dataset_virtual_greyscale.svg":[84810,4810],"./default_db_image.svg":[51398,1398],"./download.svg":[112,112],"./drag.svg":[86507,6507],"./edit.svg":[93871,3871],"./edit_alt.svg":[86167,6167],"./email.svg":[50504,6668],"./error.svg":[67584,7584],"./error_solid.svg":[25641,5641],"./error_solid_small.svg":[92561,2983],"./error_solid_small_red.svg":[4273,4273],"./exclamation.svg":[35771,5771],"./expand.svg":[47922,7922],"./eye.svg":[11493,1493],"./eye_slash.svg":[45014,9109],"./favorite-selected.svg":[51568,1568],"./favorite-unselected.svg":[86682,6682],"./favorite_small_selected.svg":[1351,1351],"./field_abc.svg":[70215,215],"./field_boolean.svg":[87405,5507],"./field_date.svg":[65226,5226],"./field_derived.svg":[37404,4732],"./field_num.svg":[35201,5201],"./field_struct.svg":[91899,1899],"./file.svg":[20057,57],"./filter.svg":[19305,9305],"./filter_small.svg":[54474,4474],"./folder.svg":[86420,6420],"./full.svg":[23985,3985],"./function_x.svg":[44662,4662],"./gear.svg":[7610,7610],"./grid.svg":[68425,8425],"./image.svg":[92264,2264],"./import.svg":[42698,2698],"./info-solid.svg":[71605,1605],"./info.svg":[2713,2713],"./info_solid_small.svg":[33606,3606],"./join.svg":[85998,5998],"./keyboard.svg":[87850,7850],"./layers.svg":[85832,5832],"./lightbulb.svg":[54797,4797],"./line-chart-tile.svg":[88491,8491],"./link.svg":[99558,9558],"./list.svg":[45707,5707],"./list_view.svg":[38682,8682],"./location.svg":[61174,1174],"./lock_locked.svg":[55359,5359],"./lock_unlocked.svg":[6207,6207],"./map.svg":[18463,8463],"./message.svg":[64458,4458],"./minus.svg":[97183,7183],"./minus_solid.svg":[6371,6371],"./more_horiz.svg":[39325,9325],"./more_vert.svg":[91185,1185],"./move.svg":[74139,4139],"./nav_charts.svg":[75350,5350],"./nav_dashboard.svg":[66303,6303],"./nav_data.svg":[2267,2267],"./nav_explore.svg":[83749,3749],"./nav_home.svg":[44667,4667],"./nav_lab.svg":[43567,3567],"./note.svg":[46597,6126],"./offline.svg":[53265,3265],"./paperclip.svg":[22079,2079],"./pie-chart-tile.svg":[9873,9873],"./placeholder.svg":[18349,8349],"./plus.svg":[17460,7460],"./plus_large.svg":[66150,6150],"./plus_small.svg":[96447,6447],"./plus_solid.svg":[70600,600],"./queued.svg":[63240,3240],"./redo.svg":[99207,9207],"./refresh.svg":[25367,5367],"./running.svg":[5224,5224],"./save.svg":[36254,6254],"./search.svg":[30177,177],"./server.svg":[11075,1075],"./share.svg":[11263,1263],"./slack.svg":[42439,2439],"./sort.svg":[20336,336],"./sort_asc.svg":[79393,9393],"./sort_desc.svg":[32646,2646],"./sql.svg":[13325,3325],"./table-chart-tile.svg":[4421,4421],"./table.svg":[72403,2403],"./tag.svg":[30158,158],"./tags.svg":[90363,363],"./transparent.svg":[87803,7803],"./trash.svg":[62105,2105],"./triangle_change.svg":[98398,8398],"./triangle_down.svg":[40826,826],"./triangle_up.svg":[36819,6819],"./undo.svg":[39622,9622],"./up-level.svg":[65972,5972],"./user.svg":[99767,9767],"./warning.svg":[4758,4758],"./warning_solid.svg":[75224,5592],"./x-large.svg":[63955,3955],"./x-small.svg":[7716,7716]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=35782,e.exports=o}}]);
//# sourceMappingURL=5010.05186782720664b6f6fa.entry.js.map