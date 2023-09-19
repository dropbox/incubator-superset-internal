"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9173],{27989:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(67294),r=a(51995),l=a(55867),s=a(35932),o=a(74069),i=a(4715),d=a(34858),u=a(60972),c=a(11965);const p=r.iK.div`
  display: block;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
`,h=r.iK.div`
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
`,m=e=>{let{resourceName:t,resourceLabel:a,passwordsNeededMessage:r,confirmOverwriteMessage:m,onModelImport:g,show:y,onHide:v,passwordFields:b=[],setPasswordFields:Z=(()=>{}),sshTunnelPasswordFields:w=[],setSSHTunnelPasswordFields:f=(()=>{}),sshTunnelPrivateKeyFields:S=[],setSSHTunnelPrivateKeyFields:x=(()=>{}),sshTunnelPrivateKeyPasswordFields:k=[],setSSHTunnelPrivateKeyPasswordFields:$=(()=>{})}=e;const[_,T]=(0,n.useState)(!0),[C,q]=(0,n.useState)({}),[P,N]=(0,n.useState)(!1),[D,E]=(0,n.useState)(!1),[F,H]=(0,n.useState)([]),[K,I]=(0,n.useState)(!1),[z,L]=(0,n.useState)(),[O,R]=(0,n.useState)({}),[U,A]=(0,n.useState)({}),[M,Q]=(0,n.useState)({}),B=()=>{H([]),Z([]),q({}),N(!1),E(!1),I(!1),L(""),f([]),x([]),$([]),R({}),A({}),Q({})},{state:{alreadyExists:Y,passwordsNeeded:j,sshPasswordNeeded:V,sshPrivateKeyNeeded:W,sshPrivateKeyPasswordNeeded:G},importResource:X}=(0,d.PW)(t,a,(e=>{L(e)}));(0,n.useEffect)((()=>{Z(j),j.length>0&&I(!1)}),[j,Z]),(0,n.useEffect)((()=>{N(Y.length>0),Y.length>0&&I(!1)}),[Y,N]),(0,n.useEffect)((()=>{f(V),V.length>0&&I(!1)}),[V,f]),(0,n.useEffect)((()=>{x(W),W.length>0&&I(!1)}),[W,x]),(0,n.useEffect)((()=>{$(G),G.length>0&&I(!1)}),[G,$]);return _&&y&&T(!1),(0,c.tZ)(o.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===F.length||P&&!D||K,onHandledPrimaryAction:()=>{var e;(null==(e=F[0])?void 0:e.originFileObj)instanceof File&&(I(!0),X(F[0].originFileObj,C,O,U,M,D).then((e=>{e&&(B(),g())})))},onHide:()=>{T(!0),v(),B()},primaryButtonName:P?(0,l.t)("Overwrite"):(0,l.t)("Import"),primaryButtonType:P?"danger":"primary",width:"750px",show:y,title:(0,c.tZ)("h4",null,(0,l.t)("Import %s",a))},(0,c.tZ)(h,null,(0,c.tZ)(i.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:F,onChange:e=>{H([{...e.file,status:"done"}])},onRemove:e=>(H(F.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:K},(0,c.tZ)(s.Z,{loading:K},(0,l.t)("Select file")))),z&&(0,c.tZ)(u.Z,{errorMessage:z,showDbInstallInstructions:b.length>0||w.length>0||S.length>0||k.length>0}),(()=>{if(0===b.length&&0===w.length&&0===S.length&&0===k.length)return null;const e=[...new Set([...b,...w,...S,...k])];return(0,c.tZ)(n.Fragment,null,(0,c.tZ)("h5",null,(0,l.t)("Database passwords")),(0,c.tZ)(p,null,r),e.map((e=>(0,c.tZ)(n.Fragment,null,(null==b?void 0:b.indexOf(e))>=0&&(0,c.tZ)(h,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,l.t)("%s PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:C[e],onChange:t=>q({...C,[e]:t.target.value})})),(null==w?void 0:w.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:O[e],onChange:t=>R({...O,[e]:t.target.value})})),(null==S?void 0:S.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_private_key-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:U[e],onChange:t=>A({...U,[e]:t.target.value})})),(null==k?void 0:k.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_private_key_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:M[e],onChange:t=>Q({...M,[e]:t.target.value})}))))))})(),P?(0,c.tZ)(n.Fragment,null,(0,c.tZ)(h,null,(0,c.tZ)("div",{className:"confirm-overwrite"},m),(0,c.tZ)("div",{className:"control-label"},(0,l.t)('Type "%s" to confirm',(0,l.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(n.toUpperCase()===(0,l.t)("OVERWRITE"))}}))):null)}},29848:(e,t,a)=>{a.d(t,{Z:()=>d}),a(67294);var n=a(51995),r=a(58593),l=a(70163),s=a(11965);const o=n.iK.span`
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
`,i=n.iK.span`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`;function d(e){let{actions:t}=e;return(0,s.tZ)(o,{className:"actions"},t.map(((e,t)=>{const a=l.Z[e.icon];return e.tooltip?(0,s.tZ)(r.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,s.tZ)(i,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,s.tZ)(a,null))):(0,s.tZ)(i,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,s.tZ)(a,null))})))}},83556:(e,t,a)=>{a.d(t,{P:()=>c});var n=a(67294),r=a(51995),l=a(59361),s=a(58593),o=a(11965);const i=(0,r.iK)(l.Z)`
  ${e=>{let{theme:t}=e;return`\n  margin-top: ${t.gridUnit}px;\n  margin-bottom: ${t.gridUnit}px;\n  font-size: ${t.typography.sizes.s}px;\n  `}};
`,d=e=>{let{name:t,id:a,index:r,onDelete:l,editable:d=!1,onClick:u}=e;const c=(0,n.useMemo)((()=>t.length>20),[t]),p=(0,o.tZ)(n.Fragment,null,d?(0,o.tZ)(i,{key:a,closable:d,onClose:()=>r?null==l?void 0:l(r):null,color:"blue"},c?`${t.slice(0,20)}...`:t):(0,o.tZ)(i,{role:"link",key:a,onClick:u},a?(0,o.tZ)("a",{href:`/superset/all_entities/?tags=${t}`,target:"_blank",rel:"noreferrer"},c?`${t.slice(0,20)}...`:t):c?`${t.slice(0,20)}...`:t));return c?(0,o.tZ)(s.u,{title:t,key:t},p):p},u=r.iK.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,c=e=>{let{tags:t,editable:a=!1,onDelete:r,maxTags:l}=e;const[s,i]=(0,n.useState)(l),c=e=>{null==r||r(e)},p=(0,n.useMemo)((()=>s?t.length>s:null),[t.length,s]),h=(0,n.useMemo)((()=>"number"==typeof s?t.length-s+1:null),[p,t.length,s]);return(0,o.tZ)(u,{className:"tag-list"},p&&"number"==typeof s?(0,o.tZ)(n.Fragment,null,t.slice(0,s-1).map(((e,t)=>(0,o.tZ)(d,{id:e.id,key:e.id,name:e.name,index:t,onDelete:c,editable:a}))),t.length>s?(0,o.tZ)(d,{name:`+${h}...`,onClick:()=>i(void 0)}):null):(0,o.tZ)(n.Fragment,null,t.map(((e,t)=>(0,o.tZ)(d,{id:e.id,key:e.id,name:e.name,index:t,onDelete:c,editable:a}))),l&&t.length>l?(0,o.tZ)(d,{name:"...",onClick:()=>i(l)}):null))}},33726:(e,t,a)=>{a.d(t,{Y:()=>r});var n=a(55867);const r={name:(0,n.t)("SQL"),tabs:[{name:"Saved queries",label:(0,n.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,n.t)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},6189:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(5872),r=a.n(n),l=(a(67294),a(51995)),s=a(55867),o=a(33743),i=a(49889),d=a(53459),u=a(22489),c=a(120),p=a(42110),h=a(70163),m=a(10222),g=a(11965);p.Z.registerLanguage("sql",o.Z),p.Z.registerLanguage("markdown",d.Z),p.Z.registerLanguage("html",i.Z),p.Z.registerLanguage("json",u.Z);const y=l.iK.div`
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
`;function v(e){let{addDangerToast:t,addSuccessToast:a,children:n,...l}=e;return(0,g.tZ)(y,null,(0,g.tZ)(h.Z.Copy,{tabIndex:0,role:"button",onClick:e=>{var r;e.preventDefault(),e.currentTarget.blur(),r=n,(0,m.Z)((()=>Promise.resolve(r))).then((()=>{a&&a((0,s.t)("SQL Copied!"))})).catch((()=>{t&&t((0,s.t)("Sorry, your browser does not support copying."))}))}}),(0,g.tZ)(p.Z,r()({style:c.Z},l),n))}},86185:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);function r(e){let{queries:t,fetchData:a,currentQueryId:r}=e;const l=t.findIndex((e=>e.id===r)),[s,o]=(0,n.useState)(l),[i,d]=(0,n.useState)(!1),[u,c]=(0,n.useState)(!1);function p(){d(0===s),c(s===t.length-1)}function h(e){const n=s+(e?-1:1);n>=0&&n<t.length&&(a(t[n].id),o(n),p())}return(0,n.useEffect)((()=>{p()})),{handleKeyPress:function(e){s>=0&&s<t.length&&("ArrowDown"===e.key||"k"===e.key?(e.preventDefault(),h(!1)):"ArrowUp"!==e.key&&"j"!==e.key||(e.preventDefault(),h(!0)))},handleDataChange:h,disablePrevious:i,disableNext:u}}},7742:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var n=a(55867),r=a(51995),l=a(93185),s=a(31069),o=a(67294),i=a(15926),d=a.n(i),u=a(30381),c=a.n(u),p=a(40768),h=a(99299),m=a(14114),g=a(34858),y=a(19259),v=a(32228),b=a(86074),Z=a(18782),w=a(38703),f=a(17198),S=a(29848),x=a(83556),k=a(58593),$=a(33726),_=a(10222),T=a(27989),C=a(70163),q=a(74069),P=a(35932),N=a(6189),D=a(86185),E=a(11965);const F=r.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.secondary.light2}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,H=r.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}}px;
  padding: 4px 0 16px 0;
`,K=(0,r.iK)(q.Z)`
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
`,I=(0,m.ZP)((e=>{let{fetchData:t,onHide:a,openInSqlLab:r,queries:l,savedQuery:s,show:i,addDangerToast:d,addSuccessToast:u}=e;const{handleKeyPress:c,handleDataChange:p,disablePrevious:h,disableNext:m}=(0,D.Z)({queries:l,currentQueryId:s.id,fetchData:t});return(0,E.tZ)("div",{role:"none",onKeyUp:c},(0,E.tZ)(K,{onHide:a,show:i,title:(0,n.t)("Query preview"),footer:(0,E.tZ)(o.Fragment,null,(0,E.tZ)(P.Z,{key:"previous-saved-query",disabled:h,onClick:()=>p(!0)},(0,n.t)("Previous")),(0,E.tZ)(P.Z,{key:"next-saved-query",disabled:m,onClick:()=>p(!1)},(0,n.t)("Next")),(0,E.tZ)(P.Z,{key:"open-in-sql-lab",buttonStyle:"primary",onClick:()=>r(s.id)},(0,n.t)("Open in SQL Lab")))},(0,E.tZ)(F,null,(0,n.t)("Query name")),(0,E.tZ)(H,null,s.label),(0,E.tZ)(N.Z,{language:"sql",addDangerToast:d,addSuccessToast:u},s.sql||"")))})),z=(0,n.t)('The passwords for the databases below are needed in order to import them together with the saved queries. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),L=(0,n.t)("You are importing one or more saved queries that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),O=r.iK.div`
  .count {
    margin-left: 5px;
    color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
    text-decoration: underline;
    cursor: pointer;
  }
`,R=r.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
`,U=(0,m.ZP)((function(e){let{addDangerToast:t,addSuccessToast:a}=e;const{state:{loading:r,resourceCount:i,resourceCollection:u,bulkSelectEnabled:m},hasPerm:q,fetchData:P,toggleBulkSelect:N,refreshData:D}=(0,g.Yi)("saved_query",(0,n.t)("Saved queries"),t),[F,H]=(0,o.useState)(null),[K,U]=(0,o.useState)(null),[A,M]=(0,o.useState)(!1),[Q,B]=(0,o.useState)([]),[Y,j]=(0,o.useState)(!1),[V,W]=(0,o.useState)([]),[G,X]=(0,o.useState)([]),[J,ee]=(0,o.useState)([]),te=q("can_write"),ae=q("can_write"),ne=q("can_write"),re=q("can_export")&&(0,l.cr)(l.TT.VERSIONED_EXPORT),le=(0,o.useCallback)((e=>{s.Z.get({endpoint:`/api/v1/saved_query/${e}`}).then((e=>{let{json:t={}}=e;U({...t.result})}),(0,p.v$)((e=>t((0,n.t)("There was an issue previewing the selected query %s",e)))))}),[t]),se={activeChild:"Saved queries",...$.Y},oe=[];ne&&oe.push({name:(0,n.t)("Bulk select"),onClick:N,buttonStyle:"secondary"}),oe.push({name:(0,E.tZ)(o.Fragment,null,(0,E.tZ)("i",{className:"fa fa-plus"})," ",(0,n.t)("Query")),onClick:()=>{window.open(`${window.location.origin}/superset/sqllab?new=true`)},buttonStyle:"primary"}),te&&(0,l.cr)(l.TT.VERSIONED_EXPORT)&&oe.push({name:(0,E.tZ)(k.u,{id:"import-tooltip",title:(0,n.t)("Import queries"),placement:"bottomRight"},(0,E.tZ)(C.Z.Import,null)),buttonStyle:"link",onClick:()=>{M(!0)},"data-test":"import-button"}),se.buttons=oe;const ie=e=>{window.open(`${window.location.origin}/superset/sqllab?savedQueryId=${e}`)},de=(0,o.useCallback)((e=>{(0,_.Z)((()=>Promise.resolve(`${window.location.origin}/superset/sqllab?savedQueryId=${e}`))).then((()=>{a((0,n.t)("Link Copied!"))})).catch((()=>{t((0,n.t)("Sorry, your browser does not support copying."))}))}),[t,a]),ue=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,v.Z)("saved_query",t,(()=>{j(!1)})),j(!0)},ce=[{id:"changed_on_delta_humanized",desc:!0}],pe=(0,o.useMemo)((()=>[{accessor:"label",Header:(0,n.t)("Name")},{accessor:"database.database_name",Header:(0,n.t)("Database"),size:"xl"},{accessor:"database",hidden:!0,disableSortBy:!0},{accessor:"schema",Header:(0,n.t)("Schema"),size:"xl"},{Cell:e=>{let{row:{original:{sql_tables:t=[]}}}=e;const a=t.map((e=>e.table)),r=(null==a?void 0:a.shift())||"";return a.length?(0,E.tZ)(O,null,(0,E.tZ)("span",null,r),(0,E.tZ)(h.Z,{placement:"right",title:(0,n.t)("TABLES"),trigger:"click",content:(0,E.tZ)(o.Fragment,null,a.map((e=>(0,E.tZ)(R,{key:e},e))))},(0,E.tZ)("span",{className:"count"},"(+",a.length,")"))):r},accessor:"sql_tables",Header:(0,n.t)("Tables"),size:"xl",disableSortBy:!0},{Cell:e=>{let{row:{original:{created_on:t}}}=e;const a=new Date(t),n=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return c()(n).fromNow()},Header:(0,n.t)("Created on"),accessor:"created_on",size:"xl"},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:t}}}=e;return t},Header:(0,n.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:e=>{let{row:{original:{tags:t=[]}}}=e;return(0,E.tZ)(x.P,{tags:t.filter((e=>1===e.type))})},Header:(0,n.t)("Tags"),accessor:"tags",disableSortBy:!0,hidden:!(0,l.cr)(l.TT.TAGGING_SYSTEM)},{Cell:e=>{let{row:{original:t}}=e;const a=[{label:"preview-action",tooltip:(0,n.t)("Query preview"),placement:"bottom",icon:"Binoculars",onClick:()=>{le(t.id)}},ae&&{label:"edit-action",tooltip:(0,n.t)("Edit query"),placement:"bottom",icon:"Edit",onClick:()=>ie(t.id)},{label:"copy-action",tooltip:(0,n.t)("Copy query URL"),placement:"bottom",icon:"Copy",onClick:()=>de(t.id)},re&&{label:"export-action",tooltip:(0,n.t)("Export query"),placement:"bottom",icon:"Share",onClick:()=>ue([t])},ne&&{label:"delete-action",tooltip:(0,n.t)("Delete query"),placement:"bottom",icon:"Trash",onClick:()=>H(t)}].filter((e=>!!e));return(0,E.tZ)(S.Z,{actions:a})},Header:(0,n.t)("Actions"),id:"actions",disableSortBy:!0}]),[ne,ae,re,de,le]),he=(0,o.useMemo)((()=>[{Header:(0,n.t)("Database"),key:"database",id:"database",input:"select",operator:Z.p.relationOneMany,unfilteredLabel:(0,n.t)("All"),fetchSelects:(0,p.tm)("saved_query","database",(0,p.v$)((e=>t((0,n.t)("An error occurred while fetching dataset datasource values: %s",e))))),paginate:!0},{Header:(0,n.t)("Schema"),id:"schema",key:"schema",input:"select",operator:Z.p.equals,unfilteredLabel:"All",fetchSelects:(0,p.wk)("saved_query","schema",(0,p.v$)((e=>t((0,n.t)("An error occurred while fetching schema values: %s",e))))),paginate:!0},{Header:(0,n.t)("Tags"),id:"tags",key:"tags",input:"search",operator:Z.p.savedQueryTags},{Header:(0,n.t)("Search"),id:"label",key:"search",input:"search",operator:Z.p.allText}]),[t]);return(0,E.tZ)(o.Fragment,null,(0,E.tZ)(b.Z,se),F&&(0,E.tZ)(f.Z,{description:(0,n.t)("This action will permanently delete the saved query."),onConfirm:()=>{F&&(e=>{let{id:r,label:l}=e;s.Z.delete({endpoint:`/api/v1/saved_query/${r}`}).then((()=>{D(),H(null),a((0,n.t)("Deleted: %s",l))}),(0,p.v$)((e=>t((0,n.t)("There was an issue deleting %s: %s",l,e)))))})(F)},onHide:()=>H(null),open:!0,title:(0,n.t)("Delete Query?")}),K&&(0,E.tZ)(I,{fetchData:le,onHide:()=>U(null),savedQuery:K,queries:u,openInSqlLab:ie,show:!0}),(0,E.tZ)(y.Z,{title:(0,n.t)("Please confirm"),description:(0,n.t)("Are you sure you want to delete the selected queries?"),onConfirm:e=>{s.Z.delete({endpoint:`/api/v1/saved_query/?q=${d().encode(e.map((e=>{let{id:t}=e;return t})))}`}).then((e=>{let{json:t={}}=e;D(),a(t.message)}),(0,p.v$)((e=>t((0,n.t)("There was an issue deleting the selected queries: %s",e)))))}},(e=>{const t=[];return ne&&t.push({key:"delete",name:(0,n.t)("Delete"),onSelect:e,type:"danger"}),re&&t.push({key:"export",name:(0,n.t)("Export"),type:"primary",onSelect:ue}),(0,E.tZ)(Z.Z,{className:"saved_query-list-view",columns:pe,count:i,data:u,fetchData:P,filters:he,initialSort:ce,loading:r,pageSize:25,bulkActions:t,bulkSelectEnabled:m,disableBulkSelect:N,highlightRowId:null==K?void 0:K.id})})),(0,E.tZ)(T.Z,{resourceName:"saved_query",resourceLabel:(0,n.t)("queries"),passwordsNeededMessage:z,confirmOverwriteMessage:L,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{M(!1),D(),a((0,n.t)("Query imported"))},show:A,onHide:()=>{M(!1)},passwordFields:Q,setPasswordFields:B,sshTunnelPasswordFields:V,setSSHTunnelPasswordFields:W,sshTunnelPrivateKeyFields:G,setSSHTunnelPrivateKeyFields:X,sshTunnelPrivateKeyPasswordFields:J,setSSHTunnelPrivateKeyPasswordFields:ee}),Y&&(0,E.tZ)(w.Z,null))}))}}]);
//# sourceMappingURL=baeaa233d878ce48044d.chunk.js.map