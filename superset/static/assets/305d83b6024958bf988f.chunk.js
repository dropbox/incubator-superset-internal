"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9173],{26996:(e,t,a)=>{a.d(t,{Z:()=>b});var o=a(67294),r=a(51995),i=a(61988),n=a(35932),s=a(74069),l=a(4715),d=a(34858),c=a(29487),p=a(11965);const u=(0,d.z)(),m=u?u.support:"https://superset.apache.org/docs/databases/installing-database-drivers",h=({errorMessage:e,showDbInstallInstructions:t})=>(0,p.tZ)(c.Z,{closable:!1,css:e=>(e=>p.iv`
  border: 1px solid ${e.colors.warning.light1};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;
  color: ${e.colors.warning.dark2};

  .ant-alert-message {
    margin: 0;
  }

  .ant-alert-description {
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),type:"error",showIcon:!0,message:e,description:t?(0,p.tZ)(o.Fragment,null,(0,p.tZ)("br",null),(0,i.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions:"),(0,p.tZ)("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,i.t)("here")),"."):""}),g=r.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,y=r.iK.div`
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
`,b=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:r,onModelImport:c,show:u,onHide:m,passwordFields:b=[],setPasswordFields:Z=(()=>{})})=>{const[w,v]=(0,o.useState)(!0),[f,x]=(0,o.useState)({}),[$,S]=(0,o.useState)(!1),[k,q]=(0,o.useState)(!1),[C,_]=(0,o.useState)([]),[T,D]=(0,o.useState)(!1),[z,N]=(0,o.useState)(),I=()=>{_([]),Z([]),x({}),S(!1),q(!1),D(!1),N("")},{state:{alreadyExists:E,passwordsNeeded:H},importResource:U}=(0,d.PW)(e,t,(e=>{N(e)}));(0,o.useEffect)((()=>{Z(H),H.length>0&&D(!1)}),[H,Z]),(0,o.useEffect)((()=>{S(E.length>0),E.length>0&&D(!1)}),[E,S]);return w&&u&&v(!1),(0,p.tZ)(s.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===C.length||$&&!k||T,onHandledPrimaryAction:()=>{var e;(null==(e=C[0])?void 0:e.originFileObj)instanceof File&&(D(!0),U(C[0].originFileObj,f,k).then((e=>{e&&(I(),c())})))},onHide:()=>{v(!0),m(),I()},primaryButtonName:$?(0,i.t)("Overwrite"):(0,i.t)("Import"),primaryButtonType:$?"danger":"primary",width:"750px",show:u,title:(0,p.tZ)("h4",null,(0,i.t)("Import %s",t))},(0,p.tZ)(y,null,(0,p.tZ)(l.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:C,onChange:e=>{_([{...e.file,status:"done"}])},onRemove:e=>(_(C.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:T},(0,p.tZ)(n.Z,{loading:T},"Select file"))),z&&(0,p.tZ)(h,{errorMessage:z,showDbInstallInstructions:b.length>0}),0===b.length?null:(0,p.tZ)(o.Fragment,null,(0,p.tZ)("h5",null,"Database passwords"),(0,p.tZ)(g,null,a),b.map((e=>(0,p.tZ)(y,{key:`password-for-${e}`},(0,p.tZ)("div",{className:"control-label"},e,(0,p.tZ)("span",{className:"required"},"*")),(0,p.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:f[e],onChange:t=>x({...f,[e]:t.target.value})}))))),$?(0,p.tZ)(o.Fragment,null,(0,p.tZ)(y,null,(0,p.tZ)("div",{className:"confirm-overwrite"},r),(0,p.tZ)("div",{className:"control-label"},(0,i.t)('Type "%s" to confirm',(0,i.t)("OVERWRITE"))),(0,p.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const o=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";q(o.toUpperCase()===(0,i.t)("OVERWRITE"))}}))):null)}},29848:(e,t,a)=>{a.d(t,{Z:()=>d}),a(67294);var o=a(51995),r=a(58593),i=a(70163),n=a(11965);const s=o.iK.span`
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
`,l=o.iK.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function d({actions:e}){return(0,n.tZ)(s,{className:"actions"},e.map(((e,t)=>{const a=i.Z[e.icon];return e.tooltip?(0,n.tZ)(r.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,n.tZ)(l,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,n.tZ)(a,null))):(0,n.tZ)(l,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,n.tZ)(a,null))})))}},49588:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var o=a(61988),r=a(51995),i=a(31069),n=a(67294),s=a(15926),l=a.n(s),d=a(30381),c=a.n(d),p=a(40768),u=a(76697),m=a(14114),h=a(34858),g=a(19259),y=a(32228),b=a(20755),Z=a(18782),w=a(38703),v=a(17198),f=a(29848),x=a(58593),$=a(95413),S=a(10222),k=a(91877),q=a(93185),C=a(26996),_=a(70163),T=a(74069),D=a(35932),z=a(31673),N=a(14025),I=a(11965);const E=r.iK.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,H=r.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: 4px 0 16px 0;
`,U=(0,r.iK)(T.Z)`
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
`,P=(0,m.ZP)((({fetchData:e,onHide:t,openInSqlLab:a,queries:r,savedQuery:i,show:n,addDangerToast:s,addSuccessToast:l})=>{const{handleKeyPress:d,handleDataChange:c,disablePrevious:p,disableNext:u}=(0,N.C)({queries:r,currentQueryId:i.id,fetchData:e});return(0,I.tZ)("div",{role:"none",onKeyUp:d},(0,I.tZ)(U,{onHide:t,show:n,title:(0,o.t)("Query preview"),footer:[(0,I.tZ)(D.Z,{key:"previous-saved-query",disabled:p,onClick:()=>c(!0)},(0,o.t)("Previous")),(0,I.tZ)(D.Z,{key:"next-saved-query",disabled:u,onClick:()=>c(!1)},(0,o.t)("Next")),(0,I.tZ)(D.Z,{key:"open-in-sql-lab",buttonStyle:"primary",onClick:()=>a(i.id)},(0,o.t)("Open in SQL Lab"))]},(0,I.tZ)(E,null,(0,o.t)("Query name")),(0,I.tZ)(H,null,i.label),(0,I.tZ)(z.Z,{language:"sql",addDangerToast:s,addSuccessToast:l},i.sql||"")))})),F=(0,o.t)('The passwords for the databases below are needed in order to import them together with the saved queries. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),M=(0,o.t)("You are importing one or more saved queries that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),O=r.iK.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,R=r.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,L=(0,m.ZP)((function({addDangerToast:e,addSuccessToast:t}){const{state:{loading:a,resourceCount:r,resourceCollection:s,bulkSelectEnabled:d},hasPerm:m,fetchData:T,toggleBulkSelect:D,refreshData:z}=(0,h.Yi)("saved_query",(0,o.t)("Saved queries"),e),[N,E]=(0,n.useState)(null),[H,U]=(0,n.useState)(null),[L,Q]=(0,n.useState)(!1),[B,K]=(0,n.useState)([]),[A,j]=(0,n.useState)(!1),V=m("can_write"),Y=m("can_write"),W=m("can_write"),X=m("can_export")&&(0,k.cr)(q.T.VERSIONED_EXPORT),G=(0,n.useCallback)((t=>{i.Z.get({endpoint:`/api/v1/saved_query/${t}`}).then((({json:e={}})=>{U({...e.result})}),(0,p.v$)((t=>e((0,o.t)("There was an issue previewing the selected query %s",t)))))}),[e]),J={activeChild:"Saved queries",...$.Y},ee=[];W&&ee.push({name:(0,o.t)("Bulk select"),onClick:D,buttonStyle:"secondary"}),ee.push({name:(0,I.tZ)(n.Fragment,null,(0,I.tZ)("i",{className:"fa fa-plus"})," ",(0,o.t)("Query")),onClick:()=>{window.open(`${window.location.origin}/superset/sqllab?new=true`)},buttonStyle:"primary"}),V&&(0,k.cr)(q.T.VERSIONED_EXPORT)&&ee.push({name:(0,I.tZ)(x.u,{id:"import-tooltip",title:(0,o.t)("Import queries"),placement:"bottomRight"},(0,I.tZ)(_.Z.Import,null)),buttonStyle:"link",onClick:()=>{Q(!0)},"data-test":"import-button"}),J.buttons=ee;const te=e=>{window.open(`${window.location.origin}/superset/sqllab?savedQueryId=${e}`)},ae=(0,n.useCallback)((a=>{(0,S.Z)((()=>Promise.resolve(`${window.location.origin}/superset/sqllab?savedQueryId=${a}`))).then((()=>{t((0,o.t)("Link Copied!"))})).catch((()=>{e((0,o.t)("Sorry, your browser does not support copying."))}))}),[e,t]),oe=e=>{const t=e.map((({id:e})=>e));(0,y.Z)("saved_query",t,(()=>{j(!1)})),j(!0)},re=[{id:"changed_on_delta_humanized",desc:!0}],ie=(0,n.useMemo)((()=>[{accessor:"label",Header:(0,o.t)("Name")},{accessor:"database.database_name",Header:(0,o.t)("Database"),size:"xl"},{accessor:"database",hidden:!0,disableSortBy:!0},{accessor:"schema",Header:(0,o.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),a=(null==t?void 0:t.shift())||"";return t.length?(0,I.tZ)(O,null,(0,I.tZ)("span",null,a),(0,I.tZ)(u.ZP,{placement:"right",title:(0,o.t)("TABLES"),trigger:"click",content:(0,I.tZ)(n.Fragment,null,t.map((e=>(0,I.tZ)(R,{key:e},e))))},(0,I.tZ)("span",{className:"count"},"(+",t.length,")"))):a},accessor:"sql_tables",Header:(0,o.t)("Tables"),size:"xl",disableSortBy:!0},{Cell:({row:{original:{created_on:e}}})=>{const t=new Date(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return c()(a).fromNow()},Header:(0,o.t)("Created on"),accessor:"created_on",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>e,Header:(0,o.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>{const t=[{label:"preview-action",tooltip:(0,o.t)("Query preview"),placement:"bottom",icon:"Binoculars",onClick:()=>{G(e.id)}},Y&&{label:"edit-action",tooltip:(0,o.t)("Edit query"),placement:"bottom",icon:"Edit",onClick:()=>te(e.id)},{label:"copy-action",tooltip:(0,o.t)("Copy query URL"),placement:"bottom",icon:"Copy",onClick:()=>ae(e.id)},X&&{label:"export-action",tooltip:(0,o.t)("Export query"),placement:"bottom",icon:"Share",onClick:()=>oe([e])},W&&{label:"delete-action",tooltip:(0,o.t)("Delete query"),placement:"bottom",icon:"Trash",onClick:()=>E(e)}].filter((e=>!!e));return(0,I.tZ)(f.Z,{actions:t})},Header:(0,o.t)("Actions"),id:"actions",disableSortBy:!0}]),[W,Y,X,ae,G]),ne=(0,n.useMemo)((()=>[{Header:(0,o.t)("Database"),id:"database",input:"select",operator:Z.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,p.tm)("saved_query","database",(0,p.v$)((t=>e((0,o.t)("An error occurred while fetching dataset datasource values: %s",t))))),paginate:!0},{Header:(0,o.t)("Schema"),id:"schema",input:"select",operator:Z.p.equals,unfilteredLabel:"All",fetchSelects:(0,p.wk)("saved_query","schema",(0,p.v$)((t=>e((0,o.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},{Header:(0,o.t)("Search"),id:"label",input:"search",operator:Z.p.allText}]),[e]);return(0,I.tZ)(n.Fragment,null,(0,I.tZ)(b.Z,J),N&&(0,I.tZ)(v.Z,{description:(0,o.t)("This action will permanently delete the saved query."),onConfirm:()=>{N&&(({id:a,label:r})=>{i.Z.delete({endpoint:`/api/v1/saved_query/${a}`}).then((()=>{z(),E(null),t((0,o.t)("Deleted: %s",r))}),(0,p.v$)((t=>e((0,o.t)("There was an issue deleting %s: %s",r,t)))))})(N)},onHide:()=>E(null),open:!0,title:(0,o.t)("Delete Query?")}),H&&(0,I.tZ)(P,{fetchData:G,onHide:()=>U(null),savedQuery:H,queries:s,openInSqlLab:te,show:!0}),(0,I.tZ)(g.Z,{title:(0,o.t)("Please confirm"),description:(0,o.t)("Are you sure you want to delete the selected queries?"),onConfirm:a=>{i.Z.delete({endpoint:`/api/v1/saved_query/?q=${l().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{z(),t(e.message)}),(0,p.v$)((t=>e((0,o.t)("There was an issue deleting the selected queries: %s",t)))))}},(e=>{const t=[];return W&&t.push({key:"delete",name:(0,o.t)("Delete"),onSelect:e,type:"danger"}),X&&t.push({key:"export",name:(0,o.t)("Export"),type:"primary",onSelect:oe}),(0,I.tZ)(Z.Z,{className:"saved_query-list-view",columns:ie,count:r,data:s,fetchData:T,filters:ne,initialSort:re,loading:a,pageSize:25,bulkActions:t,bulkSelectEnabled:d,disableBulkSelect:D,highlightRowId:null==H?void 0:H.id})})),(0,I.tZ)(C.Z,{resourceName:"saved_query",resourceLabel:(0,o.t)("queries"),passwordsNeededMessage:F,confirmOverwriteMessage:M,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{Q(!1),z(),t((0,o.t)("Query imported"))},show:L,onHide:()=>{Q(!1)},passwordFields:B,setPasswordFields:K}),A&&(0,I.tZ)(w.Z,null))}))}}]);
//# sourceMappingURL=305d83b6024958bf988f.chunk.js.map