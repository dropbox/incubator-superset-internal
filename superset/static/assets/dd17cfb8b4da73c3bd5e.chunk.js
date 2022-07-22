"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9173],{27989:(e,t,a)=>{a.d(t,{Z:()=>m});var o=a(67294),r=a(51995),n=a(61988),i=a(35932),s=a(74069),l=a(4715),d=a(34858),c=a(11965);const u=r.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
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
`,m=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:r,addDangerToast:m,onModelImport:h,show:g,onHide:y,passwordFields:b=[],setPasswordFields:w=(()=>{})})=>{const[Z,v]=(0,o.useState)(!0),[f,x]=(0,o.useState)({}),[S,k]=(0,o.useState)(!1),[q,$]=(0,o.useState)(!1),[C,T]=(0,o.useState)([]),[_,D]=(0,o.useState)(!1),N=()=>{T([]),w([]),x({}),k(!1),$(!1),D(!1)},{state:{alreadyExists:E,passwordsNeeded:z},importResource:H}=(0,d.PW)(e,t,(e=>{N(),m(e)}));(0,o.useEffect)((()=>{w(z),z.length>0&&D(!1)}),[z,w]),(0,o.useEffect)((()=>{k(E.length>0),E.length>0&&D(!1)}),[E,k]);return Z&&g&&v(!1),(0,c.tZ)(s.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===C.length||S&&!q||_,onHandledPrimaryAction:()=>{var e;(null==(e=C[0])?void 0:e.originFileObj)instanceof File&&(D(!0),H(C[0].originFileObj,f,q).then((e=>{e&&(N(),h())})))},onHide:()=>{v(!0),y(),N()},primaryButtonName:S?(0,n.t)("Overwrite"):(0,n.t)("Import"),primaryButtonType:S?"danger":"primary",width:"750px",show:g,title:(0,c.tZ)("h4",null,(0,n.t)("Import %s",t))},(0,c.tZ)(p,null,(0,c.tZ)(l.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:C,onChange:e=>{T([{...e.file,status:"done"}])},onRemove:e=>(T(C.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{}},(0,c.tZ)(i.Z,{loading:_},"Select file"))),0===b.length?null:(0,c.tZ)(o.Fragment,null,(0,c.tZ)("h5",null,"Database passwords"),(0,c.tZ)(u,null,a),b.map((e=>(0,c.tZ)(p,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},e,(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:f[e],onChange:t=>x({...f,[e]:t.target.value})}))))),S?(0,c.tZ)(o.Fragment,null,(0,c.tZ)(p,null,(0,c.tZ)("div",{className:"confirm-overwrite"},r),(0,c.tZ)("div",{className:"control-label"},(0,n.t)('Type "%s" to confirm',(0,n.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const o=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";$(o.toUpperCase()===(0,n.t)("OVERWRITE"))}}))):null)}},29848:(e,t,a)=>{a.d(t,{Z:()=>d}),a(67294);var o=a(51995),r=a(58593),n=a(70163),i=a(11965);const s=o.iK.span`
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
`;function d({actions:e}){return(0,i.tZ)(s,{className:"actions"},e.map(((e,t)=>{const a=n.Z[e.icon];return e.tooltip?(0,i.tZ)(r.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,i.tZ)(l,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,i.tZ)(a,null))):(0,i.tZ)(l,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,i.tZ)(a,null))})))}},49588:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var o=a(61988),r=a(51995),n=a(31069),i=a(67294),s=a(15926),l=a.n(s),d=a(30381),c=a.n(d),u=a(40768),p=a(76697),m=a(14114),h=a(34858),g=a(19259),y=a(32228),b=a(20755),w=a(98289),Z=a(38703),v=a(17198),f=a(29848),x=a(58593),S=a(95413),k=a(10222),q=a(91877),$=a(93185),C=a(27989),T=a(70163),_=a(74069),D=a(35932),N=a(31673),E=a(14025),z=a(11965);const H=r.iK.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,I=r.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m-1}px;
  padding: 4px 0 16px 0;
`,P=(0,r.iK)(_.Z)`
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
`,F=(0,m.ZP)((({fetchData:e,onHide:t,openInSqlLab:a,queries:r,savedQuery:n,show:i,addDangerToast:s,addSuccessToast:l})=>{const{handleKeyPress:d,handleDataChange:c,disablePrevious:u,disableNext:p}=(0,E.C)({queries:r,currentQueryId:n.id,fetchData:e});return(0,z.tZ)("div",{role:"none",onKeyUp:d},(0,z.tZ)(P,{onHide:t,show:i,title:(0,o.t)("Query preview"),footer:[(0,z.tZ)(D.Z,{key:"previous-saved-query",disabled:u,onClick:()=>c(!0)},(0,o.t)("Previous")),(0,z.tZ)(D.Z,{key:"next-saved-query",disabled:p,onClick:()=>c(!1)},(0,o.t)("Next")),(0,z.tZ)(D.Z,{key:"open-in-sql-lab",buttonStyle:"primary",onClick:()=>a(n.id)},(0,o.t)("Open in SQL Lab"))]},(0,z.tZ)(H,null,(0,o.t)("Query name")),(0,z.tZ)(I,null,n.label),(0,z.tZ)(N.Z,{language:"sql",addDangerToast:s,addSuccessToast:l},n.sql||"")))})),O=(0,o.t)('The passwords for the databases below are needed in order to import them together with the saved queries. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),R=(0,o.t)("You are importing one or more saved queries that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),U=r.iK.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,M=r.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,L=(0,m.ZP)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:r,resourceCount:s,resourceCollection:d,bulkSelectEnabled:m},hasPerm:_,fetchData:D,toggleBulkSelect:N,refreshData:E}=(0,h.Yi)("saved_query",(0,o.t)("Saved queries"),e),[H,I]=(0,i.useState)(null),[P,L]=(0,i.useState)(null),[Q,B]=(0,i.useState)(!1),[K,A]=(0,i.useState)([]),[j,V]=(0,i.useState)(!1),Y=_("can_write"),W=_("can_write"),X=_("can_write"),G=_("can_export")&&(0,q.cr)($.T.VERSIONED_EXPORT),J=(0,i.useCallback)((t=>{n.Z.get({endpoint:`/api/v1/saved_query/${t}`}).then((({json:e={}})=>{L({...e.result})}),(0,u.v$)((t=>e((0,o.t)("There was an issue previewing the selected query %s",t)))))}),[e]),ee={activeChild:"Saved queries",...S.Y},te=[];X&&te.push({name:(0,o.t)("Bulk select"),onClick:N,buttonStyle:"secondary"}),te.push({name:(0,z.tZ)(i.Fragment,null,(0,z.tZ)("i",{className:"fa fa-plus"})," ",(0,o.t)("Query")),onClick:()=>{window.open(`${window.location.origin}/superset/sqllab?new=true`)},buttonStyle:"primary"}),Y&&(0,q.cr)($.T.VERSIONED_EXPORT)&&te.push({name:(0,z.tZ)(x.u,{id:"import-tooltip",title:(0,o.t)("Import queries"),placement:"bottomRight"},(0,z.tZ)(T.Z.Import,null)),buttonStyle:"link",onClick:()=>{B(!0)},"data-test":"import-button"}),ee.buttons=te;const ae=e=>{window.open(`${window.location.origin}/superset/sqllab?savedQueryId=${e}`)},oe=(0,i.useCallback)((a=>{(0,k.Z)(`${window.location.origin}/superset/sqllab?savedQueryId=${a}`).then((()=>{t((0,o.t)("Link Copied!"))})).catch((()=>{e((0,o.t)("Sorry, your browser does not support copying."))}))}),[e,t]),re=e=>{const t=e.map((({id:e})=>e));(0,y.Z)("saved_query",t,(()=>{V(!1)})),V(!0)},ne=[{id:"changed_on_delta_humanized",desc:!0}],ie=(0,i.useMemo)((()=>[{accessor:"label",Header:(0,o.t)("Name")},{accessor:"database.database_name",Header:(0,o.t)("Database"),size:"xl"},{accessor:"database",hidden:!0,disableSortBy:!0},{accessor:"schema",Header:(0,o.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),a=(null==t?void 0:t.shift())||"";return t.length?(0,z.tZ)(U,null,(0,z.tZ)("span",null,a),(0,z.tZ)(p.ZP,{placement:"right",title:(0,o.t)("TABLES"),trigger:"click",content:(0,z.tZ)(i.Fragment,null,t.map((e=>(0,z.tZ)(M,{key:e},e))))},(0,z.tZ)("span",{className:"count"},"(+",t.length,")"))):a},accessor:"sql_tables",Header:(0,o.t)("Tables"),size:"xl",disableSortBy:!0},{Cell:({row:{original:{created_on:e}}})=>{const t=new Date(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return c()(a).fromNow()},Header:(0,o.t)("Created on"),accessor:"created_on",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>e,Header:(0,o.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>{const t=[{label:"preview-action",tooltip:(0,o.t)("Query preview"),placement:"bottom",icon:"Binoculars",onClick:()=>{J(e.id)}},W&&{label:"edit-action",tooltip:(0,o.t)("Edit query"),placement:"bottom",icon:"Edit",onClick:()=>ae(e.id)},{label:"copy-action",tooltip:(0,o.t)("Copy query URL"),placement:"bottom",icon:"Copy",onClick:()=>oe(e.id)},G&&{label:"export-action",tooltip:(0,o.t)("Export query"),placement:"bottom",icon:"Share",onClick:()=>re([e])},X&&{label:"delete-action",tooltip:(0,o.t)("Delete query"),placement:"bottom",icon:"Trash",onClick:()=>I(e)}].filter((e=>!!e));return(0,z.tZ)(f.Z,{actions:t})},Header:(0,o.t)("Actions"),id:"actions",disableSortBy:!0}]),[X,W,G,oe,J]),se=(0,i.useMemo)((()=>[{Header:(0,o.t)("Database"),id:"database",input:"select",operator:w.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,u.tm)("saved_query","database",(0,u.v$)((t=>e((0,o.t)("An error occurred while fetching dataset datasource values: %s",t))))),paginate:!0},{Header:(0,o.t)("Schema"),id:"schema",input:"select",operator:w.p.equals,unfilteredLabel:"All",fetchSelects:(0,u.wk)("saved_query","schema",(0,u.v$)((t=>e((0,o.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},{Header:(0,o.t)("Search"),id:"label",input:"search",operator:w.p.allText}]),[e]);return(0,z.tZ)(i.Fragment,null,(0,z.tZ)(b.Z,ee),H&&(0,z.tZ)(v.Z,{description:(0,o.t)("This action will permanently delete the saved query."),onConfirm:()=>{H&&(({id:a,label:r})=>{n.Z.delete({endpoint:`/api/v1/saved_query/${a}`}).then((()=>{E(),I(null),t((0,o.t)("Deleted: %s",r))}),(0,u.v$)((t=>e((0,o.t)("There was an issue deleting %s: %s",r,t)))))})(H)},onHide:()=>I(null),open:!0,title:(0,o.t)("Delete Query?")}),P&&(0,z.tZ)(F,{fetchData:J,onHide:()=>L(null),savedQuery:P,queries:d,openInSqlLab:ae,show:!0}),(0,z.tZ)(g.Z,{title:(0,o.t)("Please confirm"),description:(0,o.t)("Are you sure you want to delete the selected queries?"),onConfirm:a=>{n.Z.delete({endpoint:`/api/v1/saved_query/?q=${l().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{E(),t(e.message)}),(0,u.v$)((t=>e((0,o.t)("There was an issue deleting the selected queries: %s",t)))))}},(e=>{const t=[];return X&&t.push({key:"delete",name:(0,o.t)("Delete"),onSelect:e,type:"danger"}),G&&t.push({key:"export",name:(0,o.t)("Export"),type:"primary",onSelect:re}),(0,z.tZ)(w.Z,{className:"saved_query-list-view",columns:ie,count:s,data:d,fetchData:D,filters:se,initialSort:ne,loading:r,pageSize:25,bulkActions:t,bulkSelectEnabled:m,disableBulkSelect:N,highlightRowId:null==P?void 0:P.id})})),(0,z.tZ)(C.Z,{resourceName:"saved_query",resourceLabel:(0,o.t)("queries"),passwordsNeededMessage:O,confirmOverwriteMessage:R,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{B(!1),E(),t((0,o.t)("Query imported"))},show:Q,onHide:()=>{B(!1)},passwordFields:K,setPasswordFields:A}),j&&(0,z.tZ)(Z.Z,null))}))}}]);