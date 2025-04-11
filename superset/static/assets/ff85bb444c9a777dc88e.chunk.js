"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9173],{554070:(e,t,a)=>{a.d(t,{w:()=>l});var s=a(358593),r=a(83379),n=a(61988),i=a(135944);const l=({user:e,date:t})=>{const a=(0,i.tZ)("span",{className:"no-wrap",children:t});if(e){const t=(0,r.Z)(e),l=(0,n.t)("Modified by: %s",t);return(0,i.tZ)(s.u,{title:l,placement:"bottom",children:a})}return a}},727989:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(667294),r=a(751995),n=a(61988),i=a(835932),l=a(774069),o=a(104715),d=a(34858),c=a(762921),u=a(135944);const h=r.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,p=r.iK.div`
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
  padding-top: ${({theme:e})=>2*e.gridUnit}px;

  & > div {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .input-container {
    display: flex;
    align-items: center;

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

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border-style: none;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${({theme:e})=>3*e.gridUnit}px;
    }
  }
`,m=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:r,onModelImport:m,show:g,onHide:y,passwordFields:v=[],setPasswordFields:b=(()=>{}),sshTunnelPasswordFields:f=[],setSSHTunnelPasswordFields:w=(()=>{}),sshTunnelPrivateKeyFields:Z=[],setSSHTunnelPrivateKeyFields:S=(()=>{}),sshTunnelPrivateKeyPasswordFields:x=[],setSSHTunnelPrivateKeyPasswordFields:T=(()=>{})})=>{const[_,k]=(0,s.useState)(!0),[q,$]=(0,s.useState)({}),[C,P]=(0,s.useState)(!1),[N,B]=(0,s.useState)(!1),[H,D]=(0,s.useState)([]),[E,K]=(0,s.useState)(!1),[I,L]=(0,s.useState)(),[F,R]=(0,s.useState)({}),[A,z]=(0,s.useState)({}),[Q,X]=(0,s.useState)({}),O=()=>{D([]),b([]),$({}),P(!1),B(!1),K(!1),L(""),w([]),S([]),T([]),R({}),z({}),X({})},{state:{alreadyExists:U,passwordsNeeded:M,sshPasswordNeeded:Y,sshPrivateKeyNeeded:j,sshPrivateKeyPasswordNeeded:W},importResource:V}=(0,d.PW)(e,t,(e=>{L(e)}));(0,s.useEffect)((()=>{b(M),M.length>0&&K(!1)}),[M,b]),(0,s.useEffect)((()=>{P(U.length>0),U.length>0&&K(!1)}),[U,P]),(0,s.useEffect)((()=>{w(Y),Y.length>0&&K(!1)}),[Y,w]),(0,s.useEffect)((()=>{S(j),j.length>0&&K(!1)}),[j,S]),(0,s.useEffect)((()=>{T(W),W.length>0&&K(!1)}),[W,T]);return _&&g&&k(!1),(0,u.BX)(l.default,{name:"model",className:"import-model-modal",disablePrimaryButton:0===H.length||C&&!N||E,onHandledPrimaryAction:()=>{var e;(null==(e=H[0])?void 0:e.originFileObj)instanceof File&&(K(!0),V(H[0].originFileObj,q,F,A,Q,N).then((e=>{e&&(O(),m())})))},onHide:()=>{k(!0),y(),O()},primaryButtonName:C?(0,n.t)("Overwrite"):(0,n.t)("Import"),primaryButtonType:C?"danger":"primary",width:"750px",show:g,title:(0,u.tZ)("h4",{children:(0,n.t)("Import %s",t)}),children:[(0,u.tZ)(p,{children:(0,u.tZ)(o.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:H,onChange:e=>{D([{...e.file,status:"done"}])},onRemove:e=>(D(H.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:E,children:(0,u.tZ)(i.Z,{loading:E,children:(0,n.t)("Select file")})})}),I&&(0,u.tZ)(c.Z,{errorMessage:I,showDbInstallInstructions:v.length>0||f.length>0||Z.length>0||x.length>0}),(()=>{if(0===v.length&&0===f.length&&0===Z.length&&0===x.length)return null;const e=[...new Set([...v,...f,...Z,...x])];return(0,u.BX)(u.HY,{children:[(0,u.tZ)("h5",{children:(0,n.t)("Database passwords")}),(0,u.tZ)(h,{children:a}),e.map((e=>(0,u.BX)(u.HY,{children:[(null==v?void 0:v.indexOf(e))>=0&&(0,u.BX)(p,{children:[(0,u.BX)("div",{className:"control-label",children:[(0,n.t)("%s PASSWORD",e.slice(10)),(0,u.tZ)("span",{className:"required",children:"*"})]}),(0,u.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:q[e],onChange:t=>$({...q,[e]:t.target.value})})]},`password-for-${e}`),(null==f?void 0:f.indexOf(e))>=0&&(0,u.BX)(p,{children:[(0,u.BX)("div",{className:"control-label",children:[(0,n.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,u.tZ)("span",{className:"required",children:"*"})]}),(0,u.tZ)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:F[e],onChange:t=>R({...F,[e]:t.target.value})})]},`ssh_tunnel_password-for-${e}`),(null==Z?void 0:Z.indexOf(e))>=0&&(0,u.BX)(p,{children:[(0,u.BX)("div",{className:"control-label",children:[(0,n.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,u.tZ)("span",{className:"required",children:"*"})]}),(0,u.tZ)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:A[e],onChange:t=>z({...A,[e]:t.target.value})})]},`ssh_tunnel_private_key-for-${e}`),(null==x?void 0:x.indexOf(e))>=0&&(0,u.BX)(p,{children:[(0,u.BX)("div",{className:"control-label",children:[(0,n.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,u.tZ)("span",{className:"required",children:"*"})]}),(0,u.tZ)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:Q[e],onChange:t=>X({...Q,[e]:t.target.value})})]},`ssh_tunnel_private_key_password-for-${e}`)]})))]})})(),C?(0,u.tZ)(u.HY,{children:(0,u.BX)(p,{children:[(0,u.tZ)("div",{className:"confirm-overwrite",children:r}),(0,u.tZ)("div",{className:"control-label",children:(0,n.t)('Type "%s" to confirm',(0,n.t)("OVERWRITE"))}),(0,u.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const s=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";B(s.toUpperCase()===(0,n.t)("OVERWRITE"))}})]})}):null]})}},129848:(e,t,a)=>{a.d(t,{Z:()=>d});var s=a(751995),r=a(358593),n=a(313322),i=a(135944);const l=s.iK.span`
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
`,o=s.iK.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function d({actions:e}){return(0,i.tZ)(l,{className:"actions",children:e.map(((e,t)=>{const a=n.Z[e.icon];return e.tooltip?(0,i.tZ)(r.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,children:(0,i.tZ)(o,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,children:(0,i.tZ)(a,{})})},t):(0,i.tZ)(o,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,children:(0,i.tZ)(a,{})},t)}))})}},999075:(e,t,a)=>{a.d(t,{J:()=>n});var s=a(219181),r=a(135944);const n=e=>(0,r.tZ)(s.Z,{...e})},25772:(e,t,a)=>{a.d(t,{P:()=>s.Z});var s=a(465477);a(908420)},933726:(e,t,a)=>{a.d(t,{Y:()=>r});var s=a(61988);const r={name:(0,s.t)("SQL"),tabs:[{name:"Saved queries",label:(0,s.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,s.t)("Query history"),url:"/sqllab/history/",usesRouter:!0}]}},106189:(e,t,a)=>{a.d(t,{Z:()=>g});var s=a(751995),r=a(61988),n=a(833743),i=a(849889),l=a(453459),o=a(622489),d=a(600120),c=a(242110),u=a(313322),h=a(710222),p=a(135944);c.Z.registerLanguage("sql",n.Z),c.Z.registerLanguage("markdown",l.Z),c.Z.registerLanguage("html",i.Z),c.Z.registerLanguage("json",o.Z);const m=s.iK.div`
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
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`;function g({addDangerToast:e,addSuccessToast:t,children:a,...s}){return(0,p.BX)(m,{children:[(0,p.tZ)(u.Z.Copy,{tabIndex:0,role:"button",onClick:s=>{var n;s.preventDefault(),s.currentTarget.blur(),n=a,(0,h.Z)((()=>Promise.resolve(n))).then((()=>{t&&t((0,r.t)("SQL Copied!"))})).catch((()=>{e&&e((0,r.t)("Sorry, your browser does not support copying."))}))}}),(0,p.tZ)(c.Z,{style:d.Z,...s,children:a})]})}},286185:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(667294);function r({queries:e,fetchData:t,currentQueryId:a}){const r=e.findIndex((e=>e.id===a)),[n,i]=(0,s.useState)(r),[l,o]=(0,s.useState)(!1),[d,c]=(0,s.useState)(!1);function u(){o(0===n),c(n===e.length-1)}function h(a){const s=n+(a?-1:1);s>=0&&s<e.length&&(t(e[s].id),i(s),u())}return(0,s.useEffect)((()=>{u()})),{handleKeyPress:function(t){n>=0&&n<e.length&&("ArrowDown"===t.key||"k"===t.key?(t.preventDefault(),h(!1)):"ArrowUp"!==t.key&&"j"!==t.key||(t.preventDefault(),h(!0)))},handleDataChange:h,disablePrevious:l,disableNext:d}}},7742:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var s=a(61988),r=a(751995),n=a(431069),i=a(593185),l=a(667294),o=a(616550),d=a(473727),c=a(115926),u=a.n(c),h=a(440768),p=a(828216),m=a(999075),g=a(414114),y=a(34858),v=a(419259),b=a(232228),f=a(586074),w=a(593139),Z=a(838703),S=a(217198),x=a(129848),T=a(25772),_=a(358593),k=a(933726),q=a(400012),$=a(710222),C=a(727989),P=a(554070),N=a(860718),B=a(313322),H=a(774069),D=a(835932),E=a(106189),K=a(286185),I=a(135944);const L=r.iK.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,F=r.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: 4px 0 16px 0;
`,R=(0,r.iK)(H.default)`
  .ant-modal-content {
  }

  .ant-modal-body {
    padding: 24px;
  }

  pre {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
    font-weight: ${({theme:e})=>e.typography.weights.normal};
    line-height: ${({theme:e})=>e.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`,A=(0,g.ZP)((({fetchData:e,onHide:t,openInSqlLab:a,queries:r,savedQuery:n,show:i,addDangerToast:l,addSuccessToast:o})=>{const{handleKeyPress:d,handleDataChange:c,disablePrevious:u,disableNext:h}=(0,K.Z)({queries:r,currentQueryId:n.id,fetchData:e});return(0,I.tZ)("div",{role:"none",onKeyUp:d,children:(0,I.BX)(R,{onHide:t,show:i,title:(0,s.t)("Query preview"),footer:(0,I.BX)(I.HY,{children:[(0,I.tZ)(D.Z,{disabled:u,onClick:()=>c(!0),children:(0,s.t)("Previous")},"previous-saved-query"),(0,I.tZ)(D.Z,{disabled:h,onClick:()=>c(!1),children:(0,s.t)("Next")},"next-saved-query"),(0,I.tZ)(D.Z,{buttonStyle:"primary",onClick:({metaKey:e})=>a(n.id,Boolean(e)),children:(0,s.t)("Open in SQL Lab")},"open-in-sql-lab")]}),children:[(0,I.tZ)(L,{children:(0,s.t)("Query name")}),(0,I.tZ)(F,{children:n.label}),(0,I.tZ)(E.Z,{language:"sql",addDangerToast:l,addSuccessToast:o,children:n.sql||""})]})})}));var z=a(212617);const Q=(0,s.t)('The passwords for the databases below are needed in order to import them together with the saved queries. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),X=(0,s.t)("You are importing one or more saved queries that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),O=r.iK.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,U=r.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,M=(0,g.ZP)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:r,resourceCount:c,resourceCollection:g,bulkSelectEnabled:H},hasPerm:D,fetchData:E,toggleBulkSelect:K,refreshData:L}=(0,y.Yi)("saved_query",(0,s.t)("Saved queries"),e),{roles:F}=(0,p.v9)((e=>e.user)),R=(0,z.R)("can_read","Tag",F),[M,Y]=(0,l.useState)(null),[j,W]=(0,l.useState)(null),[V,J]=(0,l.useState)(!1),[G,ee]=(0,l.useState)([]),[te,ae]=(0,l.useState)(!1),[se,re]=(0,l.useState)([]),[ne,ie]=(0,l.useState)([]),[le,oe]=(0,l.useState)([]),de=(0,o.k6)(),ce=D("can_write"),ue=D("can_write"),he=D("can_write"),pe=D("can_export"),me=(0,l.useCallback)((t=>{n.Z.get({endpoint:`/api/v1/saved_query/${t}`}).then((({json:e={}})=>{W({...e.result})}),(0,h.v$)((t=>e((0,s.t)("There was an issue previewing the selected query %s",t)))))}),[e]),ge={activeChild:"Saved queries",...k.Y},ye=[];he&&ye.push({name:(0,s.t)("Bulk select"),onClick:K,buttonStyle:"secondary"}),ye.push({name:(0,I.BX)(d.rU,{to:"/sqllab?new=true",children:[(0,I.tZ)("i",{className:"fa fa-plus"})," ",(0,s.t)("Query")]}),buttonStyle:"primary"}),ce&&ye.push({name:(0,I.tZ)(_.u,{id:"import-tooltip",title:(0,s.t)("Import queries"),placement:"bottomRight",children:(0,I.tZ)(B.Z.Import,{})}),buttonStyle:"link",onClick:()=>{J(!0)}}),ge.buttons=ye;const ve=(e,t)=>{t?window.open(`/sqllab?savedQueryId=${e}`):de.push(`/sqllab?savedQueryId=${e}`)},be=(0,l.useCallback)((a=>{(0,$.Z)((()=>Promise.resolve(`${window.location.origin}/sqllab?savedQueryId=${a}`))).then((()=>{t((0,s.t)("Link Copied!"))})).catch((()=>{e((0,s.t)("Sorry, your browser does not support copying."))}))}),[e,t]),fe=e=>{const t=e.map((({id:e})=>e));(0,b.Z)("saved_query",t,(()=>{ae(!1)})),ae(!0)},we=[{id:"changed_on_delta_humanized",desc:!0}],Ze=(0,l.useMemo)((()=>[{accessor:"label",Header:(0,s.t)("Name")},{accessor:"description",Header:(0,s.t)("Description")},{accessor:"database.database_name",Header:(0,s.t)("Database"),size:"xl"},{accessor:"database",hidden:!0,disableSortBy:!0},{accessor:"schema",Header:(0,s.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),a=(null==t?void 0:t.shift())||"";return t.length?(0,I.BX)(O,{children:[(0,I.tZ)("span",{children:a}),(0,I.tZ)(m.J,{placement:"right",title:(0,s.t)("TABLES"),trigger:"click",content:(0,I.tZ)(I.HY,{children:t.map((e=>(0,I.tZ)(U,{children:e},e)))}),children:(0,I.BX)("span",{className:"count",children:["(+",t.length,")"]})})]}):a},accessor:"sql_tables",Header:(0,s.t)("Tables"),size:"xl",disableSortBy:!0},{Cell:({row:{original:{tags:e=[]}}})=>(0,I.tZ)(T.P,{tags:e.filter((e=>1===e.type))}),Header:(0,s.t)("Tags"),accessor:"tags",disableSortBy:!0,hidden:!(0,i.cr)(i.TT.TaggingSystem)},{Cell:({row:{original:{changed_by:e,changed_on_delta_humanized:t}}})=>(0,I.tZ)(P.w,{user:e,date:t}),Header:(0,s.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>{const t=[{label:"preview-action",tooltip:(0,s.t)("Query preview"),placement:"bottom",icon:"Binoculars",onClick:()=>{me(e.id)}},ue&&{label:"edit-action",tooltip:(0,s.t)("Edit query"),placement:"bottom",icon:"Edit",onClick:({metaKey:t})=>ve(e.id,Boolean(t))},{label:"copy-action",tooltip:(0,s.t)("Copy query URL"),placement:"bottom",icon:"Copy",onClick:()=>be(e.id)},pe&&{label:"export-action",tooltip:(0,s.t)("Export query"),placement:"bottom",icon:"Share",onClick:()=>fe([e])},he&&{label:"delete-action",tooltip:(0,s.t)("Delete query"),placement:"bottom",icon:"Trash",onClick:()=>Y(e)}].filter((e=>!!e));return(0,I.tZ)(x.Z,{actions:t})},Header:(0,s.t)("Actions"),id:"actions",disableSortBy:!0},{accessor:q.J.ChangedBy,hidden:!0}]),[he,ue,pe,be,me]),Se=(0,l.useMemo)((()=>[{Header:(0,s.t)("Search"),id:"label",key:"search",input:"search",operator:w.p.AllText,toolTipDescription:"Searches all text fields: Name, Description, Database & Schema"},{Header:(0,s.t)("Database"),key:"database",id:"database",input:"select",operator:w.p.RelationOneMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:(0,h.tm)("saved_query","database",(0,h.v$)((t=>e((0,s.t)("An error occurred while fetching dataset datasource values: %s",t))))),paginate:!0},{Header:(0,s.t)("Schema"),id:"schema",key:"schema",input:"select",operator:w.p.Equals,unfilteredLabel:"All",fetchSelects:(0,h.wk)("saved_query","schema",(0,h.v$)((t=>e((0,s.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},...(0,i.cr)(i.TT.TaggingSystem)&&R?[{Header:(0,s.t)("Tag"),id:"tags",key:"tags",input:"select",operator:w.p.SavedQueryTagById,fetchSelects:N.m}]:[],{Header:(0,s.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:w.p.RelationOneMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:(0,h.tm)("saved_query","changed_by",(0,h.v$)((e=>(0,s.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[e]);return(0,I.BX)(I.HY,{children:[(0,I.tZ)(f.Z,{...ge}),M&&(0,I.tZ)(S.Z,{description:(0,s.t)("This action will permanently delete the saved query."),onConfirm:()=>{M&&(({id:a,label:r})=>{n.Z.delete({endpoint:`/api/v1/saved_query/${a}`}).then((()=>{L(),Y(null),t((0,s.t)("Deleted: %s",r))}),(0,h.v$)((t=>e((0,s.t)("There was an issue deleting %s: %s",r,t)))))})(M)},onHide:()=>Y(null),open:!0,title:(0,s.t)("Delete Query?")}),j&&(0,I.tZ)(A,{fetchData:me,onHide:()=>W(null),savedQuery:j,queries:g,openInSqlLab:ve,show:!0}),(0,I.tZ)(v.Z,{title:(0,s.t)("Please confirm"),description:(0,s.t)("Are you sure you want to delete the selected queries?"),onConfirm:a=>{n.Z.delete({endpoint:`/api/v1/saved_query/?q=${u().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{L(),t(e.message)}),(0,h.v$)((t=>e((0,s.t)("There was an issue deleting the selected queries: %s",t)))))},children:a=>{const n=[];return he&&n.push({key:"delete",name:(0,s.t)("Delete"),onSelect:a,type:"danger"}),pe&&n.push({key:"export",name:(0,s.t)("Export"),type:"primary",onSelect:fe}),(0,I.tZ)(w.Z,{className:"saved_query-list-view",columns:Ze,count:c,data:g,fetchData:E,filters:Se,initialSort:we,loading:r,pageSize:25,bulkActions:n,addSuccessToast:t,addDangerToast:e,bulkSelectEnabled:H,disableBulkSelect:K,highlightRowId:null==j?void 0:j.id,enableBulkTag:!0,bulkTagResourceName:"query",refreshData:L})}}),(0,I.tZ)(C.Z,{resourceName:"saved_query",resourceLabel:(0,s.t)("queries"),passwordsNeededMessage:Q,confirmOverwriteMessage:X,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{J(!1),L(),t((0,s.t)("Query imported"))},show:V,onHide:()=>{J(!1)},passwordFields:G,setPasswordFields:ee,sshTunnelPasswordFields:se,setSSHTunnelPasswordFields:re,sshTunnelPrivateKeyFields:ne,setSSHTunnelPrivateKeyFields:ie,sshTunnelPrivateKeyPasswordFields:le,setSSHTunnelPrivateKeyPasswordFields:oe}),te&&(0,I.tZ)(Z.Z,{})]})}))}}]);
//# sourceMappingURL=ff85bb444c9a777dc88e.chunk.js.map