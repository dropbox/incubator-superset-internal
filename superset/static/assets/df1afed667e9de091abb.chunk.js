"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4502],{27989:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),o=a(51995),s=a(61988),n=a(35932),r=a(74069),i=a(4715),d=a(34858),u=a(11965);const c=o.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,p=o.iK.div`
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
`,m=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:o,addDangerToast:m,onModelImport:b,show:h,onHide:g,passwordFields:Z=[],setPasswordFields:w=(()=>{})})=>{const[y,f]=(0,l.useState)(!0),[v,_]=(0,l.useState)({}),[x,S]=(0,l.useState)(!1),[C,E]=(0,l.useState)(!1),[N,D]=(0,l.useState)([]),[$,T]=(0,l.useState)(!1),k=()=>{D([]),w([]),_({}),S(!1),E(!1),T(!1)},{state:{alreadyExists:U,passwordsNeeded:O},importResource:q}=(0,d.PW)(e,t,(e=>{k(),m(e)}));(0,l.useEffect)((()=>{w(O),O.length>0&&T(!1)}),[O,w]),(0,l.useEffect)((()=>{S(U.length>0),U.length>0&&T(!1)}),[U,S]);return y&&h&&f(!1),(0,u.tZ)(r.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===N.length||x&&!C||$,onHandledPrimaryAction:()=>{var e;(null==(e=N[0])?void 0:e.originFileObj)instanceof File&&(T(!0),q(N[0].originFileObj,v,C).then((e=>{e&&(k(),b())})))},onHide:()=>{f(!0),g(),k()},primaryButtonName:x?(0,s.t)("Overwrite"):(0,s.t)("Import"),primaryButtonType:x?"danger":"primary",width:"750px",show:h,title:(0,u.tZ)("h4",null,(0,s.t)("Import %s",t))},(0,u.tZ)(p,null,(0,u.tZ)(i.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:N,onChange:e=>{D([{...e.file,status:"done"}])},onRemove:e=>(D(N.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{}},(0,u.tZ)(n.Z,{loading:$},"Select file"))),0===Z.length?null:(0,u.tZ)(l.Fragment,null,(0,u.tZ)("h5",null,"Database passwords"),(0,u.tZ)(c,null,a),Z.map((e=>(0,u.tZ)(p,{key:`password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},e,(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:v[e],onChange:t=>_({...v,[e]:t.target.value})}))))),x?(0,u.tZ)(l.Fragment,null,(0,u.tZ)(p,null,(0,u.tZ)("div",{className:"confirm-overwrite"},o),(0,u.tZ)("div",{className:"control-label"},(0,s.t)('Type "%s" to confirm',(0,s.t)("OVERWRITE"))),(0,u.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const l=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(l.toUpperCase()===(0,s.t)("OVERWRITE"))}}))):null)}},95413:(e,t,a)=>{a.d(t,{Y:()=>o});var l=a(61988);const o={name:(0,l.t)("Data"),tabs:[{name:"Databases",label:(0,l.t)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:(0,l.t)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:(0,l.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,l.t)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},30075:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var l=a(61988),o=a(51995),s=a(31069),n=a(67294),r=a(37703),i=a(38703),d=a(91877),u=a(93185),c=a(34858),p=a(40768),m=a(14114),b=a(20755),h=a(17198),g=a(58593),Z=a(70163),w=a(98289),y=a(95413),f=a(27989),v=a(32228),_=a(6238),x=a(11965);const S=(0,l.t)('The passwords for the databases below are needed in order to import them. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),C=(0,l.t)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),E=(0,o.iK)(Z.Z.Check)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
`,N=(0,o.iK)(Z.Z.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
`,D=o.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};

  .action-button {
    display: inline-block;
    height: 100%;
  }
`;function $({value:e}){return e?(0,x.tZ)(E,null):(0,x.tZ)(N,null)}const T=(0,m.ZP)((function({addDangerToast:e,addSuccessToast:t}){const{state:{loading:a,resourceCount:o,resourceCollection:m},hasPerm:E,fetchData:N,refreshData:T}=(0,c.Yi)("database",(0,l.t)("database"),e),[k,U]=(0,n.useState)(!1),[O,q]=(0,n.useState)(null),[H,I]=(0,n.useState)(null),[L,R]=(0,n.useState)(!1),[A,z]=(0,n.useState)([]),[F,M]=(0,n.useState)(!1),{roles:P}=(0,r.v9)((e=>e.user)),{CSV_EXTENSIONS:V,COLUMNAR_EXTENSIONS:X,EXCEL_EXTENSIONS:B,ALLOWED_EXTENSIONS:Q}=(0,r.v9)((e=>e.common.conf));function j({database:e=null,modalOpen:t=!1}={}){I(e),U(t)}const Y=E("can_write"),K=E("can_write"),W=E("can_write"),G=E("can_export")&&(0,d.cr)(u.T.VERSIONED_EXPORT),{canUploadCSV:J,canUploadColumnar:ee,canUploadExcel:te}=(0,p.Mc)(P,V,X,B,Q),ae={activeChild:"Databases",dropDownLinks:[{label:(0,l.t)("Upload file to database"),childs:[{label:(0,l.t)("Upload CSV"),name:"Upload CSV file",url:"/csvtodatabaseview/form",perm:J},{label:(0,l.t)("Upload columnar file"),name:"Upload columnar file",url:"/columnartodatabaseview/form",perm:ee},{label:(0,l.t)("Upload Excel file"),name:"Upload Excel file",url:"/exceltodatabaseview/form",perm:te}]}].map((e=>(e.childs=e.childs.filter((e=>e.perm)),e))),...y.Y};Y&&(ae.buttons=[{"data-test":"btn-create-database",name:(0,x.tZ)(n.Fragment,null,(0,x.tZ)("i",{className:"fa fa-plus"})," ",(0,l.t)("Database")," "),buttonStyle:"primary",onClick:()=>{j({modalOpen:!0})}}],(0,d.cr)(u.T.VERSIONED_EXPORT)&&ae.buttons.push({name:(0,x.tZ)(g.u,{id:"import-tooltip",title:(0,l.t)("Import databases"),placement:"bottomRight"},(0,x.tZ)(Z.Z.Import,null)),buttonStyle:"link",onClick:()=>{R(!0)}}));const le=(0,n.useMemo)((()=>[{accessor:"database_name",Header:(0,l.t)("Database")},{accessor:"backend",Header:(0,l.t)("Backend"),size:"lg",disableSortBy:!0},{accessor:"allow_run_async",Header:(0,x.tZ)(g.u,{id:"allow-run-async-header-tooltip",title:(0,l.t)("Asynchronous query execution"),placement:"top"},(0,x.tZ)("span",null,(0,l.t)("AQE"))),Cell:({row:{original:{allow_run_async:e}}})=>(0,x.tZ)($,{value:e}),size:"sm"},{accessor:"allow_dml",Header:(0,x.tZ)(g.u,{id:"allow-dml-header-tooltip",title:(0,l.t)("Allow data manipulation language"),placement:"top"},(0,x.tZ)("span",null,(0,l.t)("DML"))),Cell:({row:{original:{allow_dml:e}}})=>(0,x.tZ)($,{value:e}),size:"sm"},{accessor:"allow_file_upload",Header:(0,l.t)("CSV upload"),Cell:({row:{original:{allow_file_upload:e}}})=>(0,x.tZ)($,{value:e}),size:"md"},{accessor:"expose_in_sqllab",Header:(0,l.t)("Expose in SQL Lab"),Cell:({row:{original:{expose_in_sqllab:e}}})=>(0,x.tZ)($,{value:e}),size:"md"},{accessor:"created_by",disableSortBy:!0,Header:(0,l.t)("Created by"),Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>e,Header:(0,l.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>K||W||G?(0,x.tZ)(D,{className:"actions"},W&&(0,x.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,s.Z.get({endpoint:`/api/v1/database/${t.id}/related_objects/`}).then((({json:e={}})=>{q({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count,sqllab_tab_count:e.sqllab_tab_states.count})})).catch((0,p.v$)((e=>(0,l.t)("An error occurred while fetching database related data: %s",e))));var t}},(0,x.tZ)(g.u,{id:"delete-action-tooltip",title:(0,l.t)("Delete database"),placement:"bottom"},(0,x.tZ)(Z.Z.Trash,null))),G&&(0,x.tZ)(g.u,{id:"export-action-tooltip",title:(0,l.t)("Export"),placement:"bottom"},(0,x.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{var t;void 0!==(t=e).id&&((0,v.Z)("database",[t.id],(()=>{M(!1)})),M(!0))}},(0,x.tZ)(Z.Z.Share,null))),K&&(0,x.tZ)(g.u,{id:"edit-action-tooltip",title:(0,l.t)("Edit"),placement:"bottom"},(0,x.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>j({database:e,modalOpen:!0})},(0,x.tZ)(Z.Z.EditAlt,null)))):null,Header:(0,l.t)("Actions"),id:"actions",hidden:!K&&!W,disableSortBy:!0}]),[W,K,G]),oe=(0,n.useMemo)((()=>[{Header:(0,l.t)("Expose in SQL Lab"),id:"expose_in_sqllab",input:"select",operator:w.p.equals,unfilteredLabel:"All",selects:[{label:"Yes",value:!0},{label:"No",value:!1}]},{Header:(0,x.tZ)(g.u,{id:"allow-run-async-filter-header-tooltip",title:(0,l.t)("Asynchronous query execution"),placement:"top"},(0,x.tZ)("span",null,(0,l.t)("AQE"))),id:"allow_run_async",input:"select",operator:w.p.equals,unfilteredLabel:"All",selects:[{label:"Yes",value:!0},{label:"No",value:!1}]},{Header:(0,l.t)("Search"),id:"database_name",input:"search",operator:w.p.contains}]),[]);return(0,x.tZ)(n.Fragment,null,(0,x.tZ)(b.Z,ae),(0,x.tZ)(_.Z,{databaseId:null==H?void 0:H.id,show:k,onHide:j,onDatabaseAdd:()=>{T()}}),O&&(0,x.tZ)(h.Z,{description:(0,l.t)("The database %s is linked to %s charts that appear on %s dashboards and users have %s SQL Lab tabs using this database open. Are you sure you want to continue? Deleting the database will break those objects.",O.database_name,O.chart_count,O.dashboard_count,O.sqllab_tab_count),onConfirm:()=>{O&&function({id:a,database_name:o}){s.Z.delete({endpoint:`/api/v1/database/${a}`}).then((()=>{T(),t((0,l.t)("Deleted: %s",o)),q(null)}),(0,p.v$)((t=>e((0,l.t)("There was an issue deleting %s: %s",o,t)))))}(O)},onHide:()=>q(null),open:!0,title:(0,l.t)("Delete Database?")}),(0,x.tZ)(w.Z,{className:"database-list-view",columns:le,count:o,data:m,fetchData:N,filters:oe,initialSort:[{id:"changed_on_delta_humanized",desc:!0}],loading:a,pageSize:25}),(0,x.tZ)(f.Z,{resourceName:"database",resourceLabel:(0,l.t)("database"),passwordsNeededMessage:S,confirmOverwriteMessage:C,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{R(!1),T(),t((0,l.t)("Database imported"))},show:L,onHide:()=>{R(!1)},passwordFields:A,setPasswordFields:z}),F&&(0,x.tZ)(i.Z,null))}))}}]);