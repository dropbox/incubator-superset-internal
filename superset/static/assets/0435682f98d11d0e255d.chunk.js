"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9173],{54070:(e,t,a)=>{a.d(t,{w:()=>o}),a(67294);var r=a(58593),n=a(83379),l=a(61988),s=a(11965);const o=e=>{let{user:t,date:a}=e;const o=(0,s.tZ)("span",{className:"no-wrap"},a);if(t){const e=(0,n.Z)(t),a=(0,l.t)("Modified by: %s",e);return(0,s.tZ)(r.u,{title:a,placement:"bottom"},o)}return o}},27989:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(67294),n=a(51995),l=a(61988),s=a(35932),o=a(74069),i=a(4715),d=a(34858),u=a(60972),c=a(11965);const p=n.iK.div`
  display: block;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
`,h=n.iK.div`
  padding-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  padding-top: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;

  & > div {
    margin: ${e=>{let{theme:t}=e;return t.gridUnit}}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  .input-container {
    display: flex;
    align-items: center;

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

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${e=>{let{theme:t}=e;return 1.5*t.gridUnit}}px
      ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    border-style: none;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
    }
  }
`,m=e=>{let{resourceName:t,resourceLabel:a,passwordsNeededMessage:n,confirmOverwriteMessage:m,onModelImport:g,show:y,onHide:b,passwordFields:v=[],setPasswordFields:Z=(()=>{}),sshTunnelPasswordFields:f=[],setSSHTunnelPasswordFields:w=(()=>{}),sshTunnelPrivateKeyFields:S=[],setSSHTunnelPrivateKeyFields:x=(()=>{}),sshTunnelPrivateKeyPasswordFields:k=[],setSSHTunnelPrivateKeyPasswordFields:T=(()=>{})}=e;const[_,$]=(0,r.useState)(!0),[q,C]=(0,r.useState)({}),[P,N]=(0,r.useState)(!1),[D,E]=(0,r.useState)(!1),[F,H]=(0,r.useState)([]),[K,I]=(0,r.useState)(!1),[L,R]=(0,r.useState)(),[O,z]=(0,r.useState)({}),[A,U]=(0,r.useState)({}),[Q,M]=(0,r.useState)({}),B=()=>{H([]),Z([]),C({}),N(!1),E(!1),I(!1),R(""),w([]),x([]),T([]),z({}),U({}),M({})},{state:{alreadyExists:j,passwordsNeeded:Y,sshPasswordNeeded:G,sshPrivateKeyNeeded:V,sshPrivateKeyPasswordNeeded:W},importResource:X}=(0,d.PW)(t,a,(e=>{R(e)}));(0,r.useEffect)((()=>{Z(Y),Y.length>0&&I(!1)}),[Y,Z]),(0,r.useEffect)((()=>{N(j.length>0),j.length>0&&I(!1)}),[j,N]),(0,r.useEffect)((()=>{w(G),G.length>0&&I(!1)}),[G,w]),(0,r.useEffect)((()=>{x(V),V.length>0&&I(!1)}),[V,x]),(0,r.useEffect)((()=>{T(W),W.length>0&&I(!1)}),[W,T]);return _&&y&&$(!1),(0,c.tZ)(o.default,{name:"model",className:"import-model-modal",disablePrimaryButton:0===F.length||P&&!D||K,onHandledPrimaryAction:()=>{var e;(null==(e=F[0])?void 0:e.originFileObj)instanceof File&&(I(!0),X(F[0].originFileObj,q,O,A,Q,D).then((e=>{e&&(B(),g())})))},onHide:()=>{$(!0),b(),B()},primaryButtonName:P?(0,l.t)("Overwrite"):(0,l.t)("Import"),primaryButtonType:P?"danger":"primary",width:"750px",show:y,title:(0,c.tZ)("h4",null,(0,l.t)("Import %s",a))},(0,c.tZ)(h,null,(0,c.tZ)(i.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:F,onChange:e=>{H([{...e.file,status:"done"}])},onRemove:e=>(H(F.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:K},(0,c.tZ)(s.Z,{loading:K},(0,l.t)("Select file")))),L&&(0,c.tZ)(u.Z,{errorMessage:L,showDbInstallInstructions:v.length>0||f.length>0||S.length>0||k.length>0}),(()=>{if(0===v.length&&0===f.length&&0===S.length&&0===k.length)return null;const e=[...new Set([...v,...f,...S,...k])];return(0,c.tZ)(r.Fragment,null,(0,c.tZ)("h5",null,(0,l.t)("Database passwords")),(0,c.tZ)(p,null,n),e.map((e=>(0,c.tZ)(r.Fragment,null,(null==v?void 0:v.indexOf(e))>=0&&(0,c.tZ)(h,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,l.t)("%s PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:q[e],onChange:t=>C({...q,[e]:t.target.value})})),(null==f?void 0:f.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:O[e],onChange:t=>z({...O,[e]:t.target.value})})),(null==S?void 0:S.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_private_key-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:A[e],onChange:t=>U({...A,[e]:t.target.value})})),(null==k?void 0:k.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_private_key_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:Q[e],onChange:t=>M({...Q,[e]:t.target.value})}))))))})(),P?(0,c.tZ)(r.Fragment,null,(0,c.tZ)(h,null,(0,c.tZ)("div",{className:"confirm-overwrite"},m),(0,c.tZ)("div",{className:"control-label"},(0,l.t)('Type "%s" to confirm',(0,l.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(r.toUpperCase()===(0,l.t)("OVERWRITE"))}}))):null)}},29848:(e,t,a)=>{a.d(t,{Z:()=>d}),a(67294);var r=a(51995),n=a(58593),l=a(70707),s=a(11965);const o=r.iK.span`
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
`,i=r.iK.span`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`;function d(e){let{actions:t}=e;return(0,s.tZ)(o,{className:"actions"},t.map(((e,t)=>{const a=l.Z[e.icon];return e.tooltip?(0,s.tZ)(n.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,s.tZ)(i,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,s.tZ)(a,null))):(0,s.tZ)(i,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,s.tZ)(a,null))})))}},83556:(e,t,a)=>{a.d(t,{P:()=>c});var r=a(67294),n=a(51995),l=a(59361),s=a(58593),o=a(11965);const i=(0,n.iK)(l.Z)`
  ${e=>{let{theme:t}=e;return`\n  margin-top: ${t.gridUnit}px;\n  margin-bottom: ${t.gridUnit}px;\n  font-size: ${t.typography.sizes.s}px;\n  `}};
`,d=e=>{let{name:t,id:a,index:n,onDelete:l,editable:d=!1,onClick:u,toolTipTitle:c=t}=e;const p=(0,r.useMemo)((()=>t.length>20),[t])?`${t.slice(0,20)}...`:t;return(0,o.tZ)(r.Fragment,null,d?(0,o.tZ)(s.u,{title:c,key:c},(0,o.tZ)(i,{key:a,closable:d,onClose:()=>n?null==l?void 0:l(n):null,color:"blue"},p)):(0,o.tZ)(s.u,{title:c,key:c},(0,o.tZ)(i,{role:"link",key:a,onClick:u},a?(0,o.tZ)("a",{href:`/superset/all_entities/?id=${a}`,target:"_blank",rel:"noreferrer"},p):p)))},u=n.iK.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,c=e=>{let{tags:t,editable:a=!1,onDelete:n,maxTags:l}=e;const[s,i]=(0,r.useState)(l),c=e=>{null==n||n(e)},p=(0,r.useMemo)((()=>s?t.length>s:null),[t.length,s]),h=(0,r.useMemo)((()=>"number"==typeof s?t.length-s+1:null),[p,t.length,s]);return(0,o.tZ)(u,{className:"tag-list"},p&&"number"==typeof s?(0,o.tZ)(r.Fragment,null,t.slice(0,s-1).map(((e,t)=>(0,o.tZ)(d,{id:e.id,key:e.id,name:e.name,index:t,onDelete:c,editable:a}))),t.length>s?(0,o.tZ)(d,{name:`+${h}...`,onClick:()=>i(void 0),toolTipTitle:t.map((e=>e.name)).join(", ")}):null):(0,o.tZ)(r.Fragment,null,t.map(((e,t)=>(0,o.tZ)(d,{id:e.id,key:e.id,name:e.name,index:t,onDelete:c,editable:a}))),l&&t.length>l?(0,o.tZ)(d,{name:"...",onClick:()=>i(l)}):null))}},33726:(e,t,a)=>{a.d(t,{Y:()=>n});var r=a(61988);const n={name:(0,r.t)("SQL"),tabs:[{name:"Saved queries",label:(0,r.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,r.t)("Query history"),url:"/sqllab/history/",usesRouter:!0}]}},6189:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(73126),n=(a(67294),a(51995)),l=a(61988),s=a(33743),o=a(49889),i=a(53459),d=a(22489),u=a(120),c=a(42110),p=a(70707),h=a(10222),m=a(11965);c.Z.registerLanguage("sql",s.Z),c.Z.registerLanguage("markdown",i.Z),c.Z.registerLanguage("html",o.Z),c.Z.registerLanguage("json",d.Z);const g=n.iK.div`
  margin-top: -24px;

  &:hover {
    svg {
      visibility: visible;
    }
  }

  svg {
    position: relative;
    top: 40px;
    left: 512px;
    visibility: hidden;
    margin: -4px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  }
`;function y(e){let{addDangerToast:t,addSuccessToast:a,children:n,...s}=e;return(0,m.tZ)(g,null,(0,m.tZ)(p.Z.Copy,{tabIndex:0,role:"button",onClick:e=>{var r;e.preventDefault(),e.currentTarget.blur(),r=n,(0,h.Z)((()=>Promise.resolve(r))).then((()=>{a&&a((0,l.t)("SQL Copied!"))})).catch((()=>{t&&t((0,l.t)("Sorry, your browser does not support copying."))}))}}),(0,m.tZ)(c.Z,(0,r.Z)({style:u.Z},s),n))}},86185:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);function n(e){let{queries:t,fetchData:a,currentQueryId:n}=e;const l=t.findIndex((e=>e.id===n)),[s,o]=(0,r.useState)(l),[i,d]=(0,r.useState)(!1),[u,c]=(0,r.useState)(!1);function p(){d(0===s),c(s===t.length-1)}function h(e){const r=s+(e?-1:1);r>=0&&r<t.length&&(a(t[r].id),o(r),p())}return(0,r.useEffect)((()=>{p()})),{handleKeyPress:function(e){s>=0&&s<t.length&&("ArrowDown"===e.key||"k"===e.key?(e.preventDefault(),h(!1)):"ArrowUp"!==e.key&&"j"!==e.key||(e.preventDefault(),h(!0)))},handleDataChange:h,disablePrevious:i,disableNext:u}}},7742:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var r=a(61988),n=a(51995),l=a(93185),s=a(31069),o=a(67294),i=a(16550),d=a(73727),u=a(15926),c=a.n(u),p=a(40768),h=a(28216),m=a(99299),g=a(14114),y=a(34858),b=a(19259),v=a(32228),Z=a(86074),f=a(93139),w=a(38703),S=a(17198),x=a(29848),k=a(83556),T=a(58593),_=a(33726),$=a(12),q=a(10222),C=a(27989),P=a(54070),N=a(60718),D=a(70707),E=a(74069),F=a(35932),H=a(6189),K=a(86185),I=a(11965);const L=n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.secondary.light2}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,R=n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}}px;
  padding: 4px 0 16px 0;
`,O=(0,n.iK)(E.default)`
  .ant-modal-content {
  }

  .ant-modal-body {
    padding: 24px;
  }

  pre {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.xs}}px;
    font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.normal}};
    line-height: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
    height: 375px;
    border: none;
  }
`,z=(0,g.ZP)((e=>{let{fetchData:t,onHide:a,openInSqlLab:n,queries:l,savedQuery:s,show:i,addDangerToast:d,addSuccessToast:u}=e;const{handleKeyPress:c,handleDataChange:p,disablePrevious:h,disableNext:m}=(0,K.Z)({queries:l,currentQueryId:s.id,fetchData:t});return(0,I.tZ)("div",{role:"none",onKeyUp:c},(0,I.tZ)(O,{onHide:a,show:i,title:(0,r.t)("Query preview"),footer:(0,I.tZ)(o.Fragment,null,(0,I.tZ)(F.Z,{key:"previous-saved-query",disabled:h,onClick:()=>p(!0)},(0,r.t)("Previous")),(0,I.tZ)(F.Z,{key:"next-saved-query",disabled:m,onClick:()=>p(!1)},(0,r.t)("Next")),(0,I.tZ)(F.Z,{key:"open-in-sql-lab",buttonStyle:"primary",onClick:e=>{let{metaKey:t}=e;return n(s.id,Boolean(t))}},(0,r.t)("Open in SQL Lab")))},(0,I.tZ)(L,null,(0,r.t)("Query name")),(0,I.tZ)(R,null,s.label),(0,I.tZ)(H.Z,{language:"sql",addDangerToast:d,addSuccessToast:u},s.sql||"")))}));var A=a(12617);const U=(0,r.t)('The passwords for the databases below are needed in order to import them together with the saved queries. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),Q=(0,r.t)("You are importing one or more saved queries that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),M=n.iK.div`
  .count {
    margin-left: 5px;
    color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
    text-decoration: underline;
    cursor: pointer;
  }
`,B=n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
`,j=(0,g.ZP)((function(e){let{addDangerToast:t,addSuccessToast:a,user:n}=e;const{state:{loading:u,resourceCount:g,resourceCollection:E,bulkSelectEnabled:F},hasPerm:H,fetchData:K,toggleBulkSelect:L,refreshData:R}=(0,y.Yi)("saved_query",(0,r.t)("Saved queries"),t),{roles:O}=(0,h.v9)((e=>e.user)),j=(0,A.R)("can_read","Tag",O),[Y,G]=(0,o.useState)(null),[V,W]=(0,o.useState)(null),[X,J]=(0,o.useState)(!1),[ee,te]=(0,o.useState)([]),[ae,re]=(0,o.useState)(!1),[ne,le]=(0,o.useState)([]),[se,oe]=(0,o.useState)([]),[ie,de]=(0,o.useState)([]),ue=(0,i.k6)(),ce=H("can_write"),pe=H("can_write"),he=H("can_write"),me=H("can_export")&&(0,l.cr)(l.TT.VERSIONED_EXPORT),ge=(0,o.useCallback)((e=>{s.Z.get({endpoint:`/api/v1/saved_query/${e}`}).then((e=>{let{json:t={}}=e;W({...t.result})}),(0,p.v$)((e=>t((0,r.t)("There was an issue previewing the selected query %s",e)))))}),[t]),ye={activeChild:"Saved queries",..._.Y},be=[];he&&be.push({name:(0,r.t)("Bulk select"),onClick:L,buttonStyle:"secondary"}),be.push({name:(0,I.tZ)(d.rU,{to:"/sqllab?new=true"},(0,I.tZ)("i",{className:"fa fa-plus"})," ",(0,r.t)("Query")),buttonStyle:"primary"}),ce&&(0,l.cr)(l.TT.VERSIONED_EXPORT)&&be.push({name:(0,I.tZ)(T.u,{id:"import-tooltip",title:(0,r.t)("Import queries"),placement:"bottomRight"},(0,I.tZ)(D.Z.Import,null)),buttonStyle:"link",onClick:()=>{J(!0)},"data-test":"import-button"}),ye.buttons=be;const ve=(e,t)=>{t?window.open(`/sqllab?savedQueryId=${e}`):ue.push(`/sqllab?savedQueryId=${e}`)},Ze=(0,o.useCallback)((e=>{(0,q.Z)((()=>Promise.resolve(`${window.location.origin}/sqllab?savedQueryId=${e}`))).then((()=>{a((0,r.t)("Link Copied!"))})).catch((()=>{t((0,r.t)("Sorry, your browser does not support copying."))}))}),[t,a]),fe=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,v.Z)("saved_query",t,(()=>{re(!1)})),re(!0)},we=[{id:"changed_on_delta_humanized",desc:!0}],Se=(0,o.useMemo)((()=>[{accessor:"label",Header:(0,r.t)("Name")},{accessor:"database.database_name",Header:(0,r.t)("Database"),size:"xl"},{accessor:"database",hidden:!0,disableSortBy:!0},{accessor:"schema",Header:(0,r.t)("Schema"),size:"xl"},{Cell:e=>{let{row:{original:{sql_tables:t=[]}}}=e;const a=t.map((e=>e.table)),n=(null==a?void 0:a.shift())||"";return a.length?(0,I.tZ)(M,null,(0,I.tZ)("span",null,n),(0,I.tZ)(m.Z,{placement:"right",title:(0,r.t)("TABLES"),trigger:"click",content:(0,I.tZ)(o.Fragment,null,a.map((e=>(0,I.tZ)(B,{key:e},e))))},(0,I.tZ)("span",{className:"count"},"(+",a.length,")"))):n},accessor:"sql_tables",Header:(0,r.t)("Tables"),size:"xl",disableSortBy:!0},{Cell:e=>{let{row:{original:{tags:t=[]}}}=e;return(0,I.tZ)(k.P,{tags:t.filter((e=>1===e.type))})},Header:(0,r.t)("Tags"),accessor:"tags",disableSortBy:!0,hidden:!(0,l.cr)(l.TT.TAGGING_SYSTEM)},{Cell:e=>{let{row:{original:{changed_by:t,changed_on_delta_humanized:a}}}=e;return(0,I.tZ)(P.w,{user:t,date:a})},Header:(0,r.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:e=>{let{row:{original:t}}=e;const a=[{label:"preview-action",tooltip:(0,r.t)("Query preview"),placement:"bottom",icon:"Binoculars",onClick:()=>{ge(t.id)}},pe&&{label:"edit-action",tooltip:(0,r.t)("Edit query"),placement:"bottom",icon:"Edit",onClick:e=>{let{metaKey:a}=e;return ve(t.id,Boolean(a))}},{label:"copy-action",tooltip:(0,r.t)("Copy query URL"),placement:"bottom",icon:"Copy",onClick:()=>Ze(t.id)},me&&{label:"export-action",tooltip:(0,r.t)("Export query"),placement:"bottom",icon:"Share",onClick:()=>fe([t])},he&&{label:"delete-action",tooltip:(0,r.t)("Delete query"),placement:"bottom",icon:"Trash",onClick:()=>G(t)}].filter((e=>!!e));return(0,I.tZ)(x.Z,{actions:a})},Header:(0,r.t)("Actions"),id:"actions",disableSortBy:!0},{accessor:$.J.changed_by,hidden:!0}]),[he,pe,me,Ze,ge]),xe=(0,o.useMemo)((()=>[{Header:(0,r.t)("Name"),id:"label",key:"search",input:"search",operator:f.p.allText},{Header:(0,r.t)("Database"),key:"database",id:"database",input:"select",operator:f.p.relationOneMany,unfilteredLabel:(0,r.t)("All"),fetchSelects:(0,p.tm)("saved_query","database",(0,p.v$)((e=>t((0,r.t)("An error occurred while fetching dataset datasource values: %s",e))))),paginate:!0},{Header:(0,r.t)("Schema"),id:"schema",key:"schema",input:"select",operator:f.p.equals,unfilteredLabel:"All",fetchSelects:(0,p.wk)("saved_query","schema",(0,p.v$)((e=>t((0,r.t)("An error occurred while fetching schema values: %s",e))))),paginate:!0},...(0,l.cr)(l.TT.TAGGING_SYSTEM)&&j?[{Header:(0,r.t)("Tag"),id:"tags",key:"tags",input:"select",operator:f.p.savedQueryTags,fetchSelects:N.m}]:[],{Header:(0,r.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:f.p.relationOneMany,unfilteredLabel:(0,r.t)("All"),fetchSelects:(0,p.tm)("saved_query","changed_by",(0,p.v$)((e=>(0,r.t)("An error occurred while fetching dataset datasource values: %s",e))),n),paginate:!0}]),[t]);return(0,I.tZ)(o.Fragment,null,(0,I.tZ)(Z.Z,ye),Y&&(0,I.tZ)(S.Z,{description:(0,r.t)("This action will permanently delete the saved query."),onConfirm:()=>{Y&&(e=>{let{id:n,label:l}=e;s.Z.delete({endpoint:`/api/v1/saved_query/${n}`}).then((()=>{R(),G(null),a((0,r.t)("Deleted: %s",l))}),(0,p.v$)((e=>t((0,r.t)("There was an issue deleting %s: %s",l,e)))))})(Y)},onHide:()=>G(null),open:!0,title:(0,r.t)("Delete Query?")}),V&&(0,I.tZ)(z,{fetchData:ge,onHide:()=>W(null),savedQuery:V,queries:E,openInSqlLab:ve,show:!0}),(0,I.tZ)(b.Z,{title:(0,r.t)("Please confirm"),description:(0,r.t)("Are you sure you want to delete the selected queries?"),onConfirm:e=>{s.Z.delete({endpoint:`/api/v1/saved_query/?q=${c().encode(e.map((e=>{let{id:t}=e;return t})))}`}).then((e=>{let{json:t={}}=e;R(),a(t.message)}),(0,p.v$)((e=>t((0,r.t)("There was an issue deleting the selected queries: %s",e)))))}},(e=>{const n=[];return he&&n.push({key:"delete",name:(0,r.t)("Delete"),onSelect:e,type:"danger"}),me&&n.push({key:"export",name:(0,r.t)("Export"),type:"primary",onSelect:fe}),(0,I.tZ)(f.Z,{className:"saved_query-list-view",columns:Se,count:g,data:E,fetchData:K,filters:xe,initialSort:we,loading:u,pageSize:25,bulkActions:n,addSuccessToast:a,addDangerToast:t,bulkSelectEnabled:F,disableBulkSelect:L,highlightRowId:null==V?void 0:V.id,enableBulkTag:!0,bulkTagResourceName:"query",refreshData:R})})),(0,I.tZ)(C.Z,{resourceName:"saved_query",resourceLabel:(0,r.t)("queries"),passwordsNeededMessage:U,confirmOverwriteMessage:Q,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{J(!1),R(),a((0,r.t)("Query imported"))},show:X,onHide:()=>{J(!1)},passwordFields:ee,setPasswordFields:te,sshTunnelPasswordFields:ne,setSSHTunnelPasswordFields:le,sshTunnelPrivateKeyFields:se,setSSHTunnelPrivateKeyFields:oe,sshTunnelPrivateKeyPasswordFields:ie,setSSHTunnelPrivateKeyPasswordFields:de}),ae&&(0,I.tZ)(w.Z,null))}))},83379:(e,t,a)=>{function r(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=0435682f98d11d0e255d.chunk.js.map