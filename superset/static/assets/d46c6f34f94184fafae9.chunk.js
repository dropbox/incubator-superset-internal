"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5656],{83268:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),s=a(60650),l=a(37840),i=a(38097),o=a(58593),r=a(11965);const d=function({certifiedBy:e,details:t,size:a="l"}){return(0,r.tZ)(o.u,{id:"certified-details-tooltip",title:(0,r.tZ)(n.Fragment,null,e&&(0,r.tZ)("div",null,(0,r.tZ)("strong",null,(0,s.t)("Certified by %s",e))),(0,r.tZ)("div",null,t))},(0,r.tZ)(i.Z.Certified,{iconColor:l.K6.colors.primary.base,iconSize:a}))}},73995:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(67294),s=a(37840),l=a(21173),i=a(60650),o=a(15926),r=a.n(o),d=a(4715),c=a(37921),u=a(49238),m=a(40277),p=a(11965);const h=s.iK.div`
  ${({theme:e})=>`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${e.gridUnit}px;\n      margin-top: ${5*e.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .select {\n      width: calc(100% - 30px - ${e.gridUnit}px);\n      flex: 1;\n    }\n\n    & > div {\n      margin-bottom: ${4*e.gridUnit}px;\n    }\n  `}
`,b=s.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${({theme:e})=>e.gridUnit-2}px;

  .backend {
    overflow: visible;
  }

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,g=({backend:e,databaseName:t})=>(0,p.tZ)(b,null,(0,p.tZ)(c.Z,{className:"backend"},e),(0,p.tZ)("span",{className:"name",title:t},t));function Z({db:e,formMode:t=!1,getDbList:a,handleError:s,isDatabaseSelectEnabled:o=!0,onDbChange:c,onSchemaChange:b,onSchemasLoad:Z,readOnly:f=!1,schema:v,sqlLabMode:y=!1}){const[w,S]=(0,n.useState)(!1),[x,_]=(0,n.useState)([]),[C,k]=(0,n.useState)(e?{label:(0,p.tZ)(g,{backend:e.backend,databaseName:e.database_name}),value:e.id,...e}:void 0),[$,D]=(0,n.useState)(v?{label:v,value:v}:void 0),[N,T]=(0,n.useState)(0),E=(0,n.useMemo)((()=>async(e,n,o)=>{const d=`/api/v1/database/?q=${r().encode({order_columns:"database_name",order_direction:"asc",page:n,page_size:o,...t||!y?{filters:[{col:"database_name",opr:"ct",value:e}]}:{filters:[{col:"database_name",opr:"ct",value:e},{col:"expose_in_sqllab",opr:"eq",value:!0}]}})}`;return l.Z.get({endpoint:d}).then((({json:e})=>{const{result:t}=e;a&&a(t),0===t.length&&s((0,i.t)("It seems you don't have access to any database"));const n=t.map((e=>({label:(0,p.tZ)(g,{backend:e.backend,databaseName:e.database_name}),value:e.id,id:e.id,database_name:e.database_name,backend:e.backend,allow_multi_schema_metadata_fetch:e.allow_multi_schema_metadata_fetch})));return{data:n,totalCount:n.length}}))}),[t,a,s,y]);function z(e,t){return(0,p.tZ)("div",{className:"section"},(0,p.tZ)("span",{className:"select"},e),(0,p.tZ)("span",{className:"refresh"},t))}return(0,n.useEffect)((()=>{if(C){S(!0);const e=r().encode({force:N>0}),t=`/api/v1/database/${C.value}/schemas/?q=${e}`;l.Z.get({endpoint:t}).then((({json:e})=>{const t=e.result.map((e=>({value:e,label:e,title:e})));Z&&Z(t),_(t),S(!1)})).catch((()=>{S(!1),s((0,i.t)("There was an error loading the schemas"))}))}}),[C,Z,N]),(0,p.tZ)(h,null,z((0,p.tZ)(d.P,{ariaLabel:(0,i.t)("Select database or type database name"),optionFilterProps:["database_name","value"],header:(0,p.tZ)(u.lX,null,(0,i.t)("Database")),lazyLoading:!1,onChange:function(e,t){k(t),D(void 0),c&&c(t),b&&b(void 0)},value:C,placeholder:(0,i.t)("Select database or type database name"),disabled:!o||f,options:E}),null),function(){const e=!t&&!f&&(0,p.tZ)(m.Z,{onClick:()=>T(N+1),tooltipContent:(0,i.t)("Force refresh schema list")});return z((0,p.tZ)(d.P,{ariaLabel:(0,i.t)("Select schema or type schema name"),disabled:f,header:(0,p.tZ)(u.lX,null,(0,i.t)("Schema")),labelInValue:!0,lazyLoading:!1,loading:w,name:"select-schema",placeholder:(0,i.t)("Select schema or type schema name"),onChange:e=>function(e){D(e),b&&b(e.value)}(e),options:x,showSearch:!0,value:$}),e)}())}},27989:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),s=a(37840),l=a(60650),i=a(35932),o=a(74069),r=a(82191),d=a(34858),c=a(11965);const u=s.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,m=s.iK.div`
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
`,p=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:s,addDangerToast:p,addSuccessToast:h,onModelImport:b,show:g,onHide:Z,passwordFields:f=[],setPasswordFields:v=(()=>{})})=>{const[y,w]=(0,n.useState)(!0),[S,x]=(0,n.useState)({}),[_,C]=(0,n.useState)(!1),[k,$]=(0,n.useState)(!1),[D,N]=(0,n.useState)([]),[T,E]=(0,n.useState)(!1),z=()=>{N([]),v([]),x({}),C(!1),$(!1),E(!1)},{state:{alreadyExists:L,passwordsNeeded:M},importResource:H}=(0,d.PW)(e,t,(e=>{z(),p(e)}));(0,n.useEffect)((()=>{v(M),M.length>0&&E(!1)}),[M,v]),(0,n.useEffect)((()=>{C(L.length>0),L.length>0&&E(!1)}),[L,C]);return y&&g&&w(!1),(0,c.tZ)(o.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===D.length||_&&!k||T,onHandledPrimaryAction:()=>{var e;(null==(e=D[0])?void 0:e.originFileObj)instanceof File&&(E(!0),H(D[0].originFileObj,S,k).then((e=>{e&&(h((0,l.t)("The import was successful")),z(),b())})))},onHide:()=>{w(!0),Z(),z()},primaryButtonName:_?(0,l.t)("Overwrite"):(0,l.t)("Import"),primaryButtonType:_?"danger":"primary",width:"750px",show:g,title:(0,c.tZ)("h4",null,(0,l.t)("Import %s",t))},(0,c.tZ)(m,null,(0,c.tZ)(r.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:D,onChange:e=>{N([{...e.file,status:"done"}])},onRemove:e=>(N(D.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{}},(0,c.tZ)(i.Z,{loading:T},"Select file"))),0===f.length?null:(0,c.tZ)(n.Fragment,null,(0,c.tZ)("h5",null,"Database passwords"),(0,c.tZ)(u,null,a),f.map((e=>(0,c.tZ)(m,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},e,(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:S[e],onChange:t=>x({...S,[e]:t.target.value})}))))),_?(0,c.tZ)(n.Fragment,null,(0,c.tZ)(m,null,(0,c.tZ)("div",{className:"confirm-overwrite"},s),(0,c.tZ)("div",{className:"control-label"},(0,l.t)('Type "%s" to confirm',(0,l.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";$(n.toUpperCase()===(0,l.t)("OVERWRITE"))}}))):null)}},40277:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),s=a(58593),l=a(38097),i=a(11965);const o=({onClick:e,tooltipContent:t})=>{const a=n.forwardRef(((e,t)=>(0,i.tZ)(l.Z.Refresh,e)));return(0,i.tZ)(s.u,{title:t},(0,i.tZ)(a,{role:"button",onClick:e,css:e=>({cursor:"pointer",color:e.colors.grayscale.base,"&:hover":{color:e.colors.primary.base}})}))}},17982:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294),s=a(37840),l=a(21173),i=a(60650),o=a(4715),r=a(49238),d=a(38097),c=a(73995),u=a(40277),m=a(83268),p=a(86057),h=a(11965);const b=s.iK.div`
  ${({theme:e})=>`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${e.gridUnit}px;\n      margin-top: ${5*e.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .divider {\n      border-bottom: 1px solid ${e.colors.secondary.light5};\n      margin: 15px 0;\n    }\n\n    .table-length {\n      color: ${e.colors.grayscale.light1};\n    }\n\n    .select {\n      flex: 1;\n    }\n  `}
`,g=s.iK.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,Z=({table:e})=>{const{label:t,type:a,extra:n}=e;return(0,h.tZ)(g,{title:t},"view"===a?(0,h.tZ)(d.Z.Eye,{iconSize:"m"}):(0,h.tZ)(d.Z.Table,{iconSize:"m"}),(null==n?void 0:n.certification)&&(0,h.tZ)(m.Z,{certifiedBy:n.certification.certified_by,details:n.certification.details,size:"l"}),(null==n?void 0:n.warning_markdown)&&(0,h.tZ)(p.Z,{warningMarkdown:n.warning_markdown,size:"l"}),t)},f=({database:e,formMode:t=!1,getDbList:a,handleError:s,isDatabaseSelectEnabled:d=!0,onDbChange:m,onSchemaChange:p,onSchemasLoad:g,onTableChange:f,onTablesLoad:v,readOnly:y=!1,schema:w,sqlLabMode:S=!0,tableName:x})=>{const[_,C]=(0,n.useState)(e),[k,$]=(0,n.useState)(w),[D,N]=(0,n.useState)(),[T,E]=(0,n.useState)(0),[z,L]=(0,n.useState)(0),[M,H]=(0,n.useState)(!1),[U,A]=(0,n.useState)([]);(0,n.useEffect)((()=>{void 0===e&&(C(void 0),$(void 0),N(void 0))}),[e]),(0,n.useEffect)((()=>{if(_&&k){H(!0);const e=encodeURIComponent(k),t=T!==z,a=encodeURI(`/superset/tables/${_.id}/${e}/undefined/${t}/`);z!==T&&L(T),l.Z.get({endpoint:a}).then((({json:e})=>{const t=[];let a;e.options.forEach((e=>{const n={value:e.value,label:(0,h.tZ)(Z,{table:e}),text:e.label};t.push(n),e.label===x&&(a=n)})),v&&v(e.options),A(t),N(a),H(!1)})).catch((e=>{H(!1),s((0,i.t)("There was an error loading the tables"))}))}}),[_,k,v,T]);const I=e=>{N(e),f&&k&&f(null==e?void 0:e.value,k)},q=(0,n.useMemo)((()=>(e,t)=>{const a=e.trim().toLowerCase(),{text:n}=t;return n.toLowerCase().includes(a)}),[]);return(0,h.tZ)(b,null,(0,h.tZ)(c.Z,{key:null==_?void 0:_.id,db:_,formMode:t,getDbList:a,handleError:s,onDbChange:y?void 0:e=>{C(e),m&&m(e)},onSchemaChange:y?void 0:e=>{$(e),p&&p(e),I(void 0)},onSchemasLoad:g,schema:k,sqlLabMode:S,isDatabaseSelectEnabled:d&&!y,readOnly:y}),S&&!t&&(0,h.tZ)("div",{className:"divider"}),function(){const a=k&&!t&&y||!k&&!(null!=e&&e.allow_multi_schema_metadata_fetch),n=S?(0,h.tZ)(r.lX,null,(0,i.t)("See table schema")):(0,h.tZ)(r.lX,null,(0,i.t)("Table"));return s=(0,h.tZ)(o.P,{ariaLabel:(0,i.t)("Select table or type table name"),disabled:a,filterOption:q,header:n,labelInValue:!0,lazyLoading:!1,loading:M,name:"select-table",onChange:e=>I(e),options:U,placeholder:(0,i.t)("Select table or type table name"),showSearch:!0,value:D}),l=!t&&!y&&(0,h.tZ)(u.Z,{onClick:()=>E(T+1),tooltipContent:(0,i.t)("Force refresh table list")}),(0,h.tZ)("div",{className:"section"},(0,h.tZ)("span",{className:"select"},s),(0,h.tZ)("span",{className:"refresh"},l));var s,l}())}},95413:(e,t,a)=>{a.d(t,{Y:()=>s});var n=a(60650);const s={name:(0,n.t)("Data"),tabs:[{name:"Databases",label:(0,n.t)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:(0,n.t)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:(0,n.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,n.t)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},97894:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(37840),s=a(60650),l=a(21173),i=a(67294),o=a(15926),r=a.n(o),d=a(40768),c=a(34858),u=a(19259),m=a(77775),p=a(17198),h=a(32228),b=a(9678),g=a(38703),Z=a(62753),f=a(95413),v=a(14114),y=a(58593),w=a(38097),S=a(34581),x=a(83268),_=a(8272),C=a(27989),k=a(91877),$=a(46415),D=a(86057),N=a(74069),T=a(17982),E=a(11965);const z=n.iK.div`
  padding-bottom: 340px;
  width: 65%;
`,L=(0,v.Z)((({addDangerToast:e,addSuccessToast:t,onDatasetAdd:a,onHide:n,show:l})=>{const[o,r]=(0,i.useState)(),[d,u]=(0,i.useState)(""),[m,p]=(0,i.useState)(""),[h,b]=(0,i.useState)(!0),{createResource:g}=(0,c.LE)("dataset",(0,s.t)("dataset"),e);(0,i.useEffect)((()=>{b(void 0===o||""===m)}),[m,o]);const Z=()=>{u(""),p(""),r(void 0),b(!0),n()};return(0,E.tZ)(N.Z,{disablePrimaryButton:h,onHandledPrimaryAction:()=>{if(void 0===o)return;const e={database:o.id,...d?{schema:d}:{},table_name:m};g(e).then((e=>{e&&(a&&a({id:e.id,...e}),t((0,s.t)("The dataset has been saved")),Z())}))},onHide:Z,primaryButtonName:(0,s.t)("Add"),show:l,title:(0,s.t)("Add dataset")},(0,E.tZ)(z,null,(0,E.tZ)(T.Z,{clearable:!1,formMode:!0,database:o,schema:d,tableName:m,onDbChange:e=>{r(e)},onSchemaChange:e=>{u(e)},onTableChange:e=>{p(e)},handleError:e})))}));var M=a(52389);const H=n.iK.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,U=n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,A=(0,v.Z)((({addDangerToast:e,addSuccessToast:t,user:a})=>{const{state:{loading:n,resourceCount:o,resourceCollection:v,bulkSelectEnabled:N},hasPerm:T,fetchData:z,toggleBulkSelect:A,refreshData:I}=(0,c.Yi)("dataset",(0,s.t)("dataset"),e),[q,B]=(0,i.useState)(!1),[O,P]=(0,i.useState)(null),[R,F]=(0,i.useState)(null),[j,V]=(0,i.useState)(!1),[K,X]=(0,i.useState)([]),[W,Y]=(0,i.useState)(!1),J=T("can_write"),Q=T("can_write"),G=T("can_write"),ee=T("can_read"),te=M.dY,ae=(0,i.useCallback)((({id:t})=>{l.Z.get({endpoint:`/api/v1/dataset/${t}`}).then((({json:e={}})=>{const t=e.result.columns.map((e=>{const{certification:{details:t="",certified_by:a=""}={}}=JSON.parse(e.extra||"{}")||{};return{...e,certification_details:t||"",certified_by:a||"",is_certified:t||a}}));e.result.columns=[...t],F(e.result)})).catch((()=>{e((0,s.t)("An error occurred while fetching dataset related data"))}))}),[e]),ne=(0,i.useMemo)((()=>[{Cell:({row:{original:{kind:e}}})=>"physical"===e?(0,E.tZ)(y.u,{id:"physical-dataset-tooltip",title:(0,s.t)("Physical dataset")},(0,E.tZ)(w.Z.DatasetPhysical,null)):(0,E.tZ)(y.u,{id:"virtual-dataset-tooltip",title:(0,s.t)("Virtual dataset")},(0,E.tZ)(w.Z.DatasetVirtual,null)),accessor:"kind_icon",disableSortBy:!0,size:"xs"},{Cell:({row:{original:{extra:e,table_name:t,description:a,explore_url:n}}})=>{const s=(0,E.tZ)("a",{href:n},t);try{const t=JSON.parse(e);return(0,E.tZ)(H,null,(null==t?void 0:t.certification)&&(0,E.tZ)(x.Z,{certifiedBy:t.certification.certified_by,details:t.certification.details,size:"l"}),(null==t?void 0:t.warning_markdown)&&(0,E.tZ)(D.Z,{warningMarkdown:t.warning_markdown,size:"l"}),s,a&&(0,E.tZ)(_.Z,{tooltip:a,viewBox:"0 -1 24 24"}))}catch{return s}},Header:(0,s.t)("Name"),accessor:"table_name"},{Cell:({row:{original:{kind:e}}})=>{var t;return(null==(t=e[0])?void 0:t.toUpperCase())+e.slice(1)},Header:(0,s.t)("Type"),accessor:"kind",disableSortBy:!0,size:"md"},{Header:(0,s.t)("Database"),accessor:"database.database_name",size:"lg"},{Header:(0,s.t)("Schema"),accessor:"schema",size:"lg"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>(0,E.tZ)("span",{className:"no-wrap"},e),Header:(0,s.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:{changed_by_name:e}}})=>e,Header:(0,s.t)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{accessor:"database",disableSortBy:!0,hidden:!0},{Cell:({row:{original:{owners:e=[]}}})=>(0,E.tZ)(S.Z,{users:e}),Header:(0,s.t)("Owners"),id:"owners",disableSortBy:!0,size:"lg"},{accessor:"sql",hidden:!0,disableSortBy:!0},{Cell:({row:{original:e}})=>J||Q||ee?(0,E.tZ)(U,{className:"actions"},Q&&(0,E.tZ)(y.u,{id:"delete-action-tooltip",title:(0,s.t)("Delete"),placement:"bottom"},(0,E.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,l.Z.get({endpoint:`/api/v1/dataset/${t.id}/related_objects`}).then((({json:e={}})=>{P({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count})})).catch((0,d.v$)((e=>(0,s.t)("An error occurred while fetching dataset related data: %s",e))));var t}},(0,E.tZ)(w.Z.Trash,null))),ee&&(0,E.tZ)(y.u,{id:"export-action-tooltip",title:(0,s.t)("Export"),placement:"bottom"},(0,E.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>oe([e])},(0,E.tZ)(w.Z.Share,null))),J&&(0,E.tZ)(y.u,{id:"edit-action-tooltip",title:(0,s.t)("Edit"),placement:"bottom"},(0,E.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>ae(e)},(0,E.tZ)(w.Z.EditAlt,null)))):null,Header:(0,s.t)("Actions"),id:"actions",hidden:!J&&!Q,disableSortBy:!0}]),[J,Q,ee,ae]),se=(0,i.useMemo)((()=>[{Header:(0,s.t)("Owner"),id:"owners",input:"select",operator:b.p.relationManyMany,unfilteredLabel:"All",fetchSelects:(0,d.tm)("dataset","owners",(0,d.v$)((e=>(0,s.t)("An error occurred while fetching dataset owner values: %s",e))),a),paginate:!0},{Header:(0,s.t)("Database"),id:"database",input:"select",operator:b.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,d.tm)("dataset","database",(0,d.v$)((e=>(0,s.t)("An error occurred while fetching datasets: %s",e)))),paginate:!0},{Header:(0,s.t)("Schema"),id:"schema",input:"select",operator:b.p.equals,unfilteredLabel:"All",fetchSelects:(0,d.wk)("dataset","schema",(0,d.v$)((e=>(0,s.t)("An error occurred while fetching schema values: %s",e)))),paginate:!0},{Header:(0,s.t)("Type"),id:"sql",input:"select",operator:b.p.datasetIsNullOrEmpty,unfilteredLabel:"All",selects:[{label:"Virtual",value:!1},{label:"Physical",value:!0}]},{Header:(0,s.t)("Search"),id:"table_name",input:"search",operator:b.p.contains}]),[]),le={activeChild:"Datasets",...f.Y},ie=[];(Q||ee)&&ie.push({name:(0,s.t)("Bulk select"),onClick:A,buttonStyle:"secondary"}),G&&(ie.push({name:(0,E.tZ)(i.Fragment,null,(0,E.tZ)("i",{className:"fa fa-plus"})," ",(0,s.t)("Dataset")," "),onClick:()=>B(!0),buttonStyle:"primary"}),(0,k.cr)($.T.VERSIONED_EXPORT)&&ie.push({name:(0,E.tZ)(y.u,{id:"import-tooltip",title:(0,s.t)("Import datasets"),placement:"bottomRight"},(0,E.tZ)(w.Z.Import,null)),buttonStyle:"link",onClick:()=>{V(!0)}})),le.buttons=ie;const oe=e=>{const t=e.map((({id:e})=>e));(0,h.Z)("dataset",t,(()=>{Y(!1)})),Y(!0)};return(0,E.tZ)(i.Fragment,null,(0,E.tZ)(Z.Z,le),(0,E.tZ)(L,{show:q,onHide:()=>B(!1),onDatasetAdd:I}),O&&(0,E.tZ)(p.Z,{description:(0,s.t)("The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.",O.table_name,O.chart_count,O.dashboard_count),onConfirm:()=>{O&&(({id:a,table_name:n})=>{l.Z.delete({endpoint:`/api/v1/dataset/${a}`}).then((()=>{I(),P(null),t((0,s.t)("Deleted: %s",n))}),(0,d.v$)((t=>e((0,s.t)("There was an issue deleting %s: %s",n,t)))))})(O)},onHide:()=>{P(null)},open:!0,title:(0,s.t)("Delete Dataset?")}),R&&(0,E.tZ)(m.W,{datasource:R,onDatasourceSave:I,onHide:()=>{F(null)},show:!0}),(0,E.tZ)(u.Z,{title:(0,s.t)("Please confirm"),description:(0,s.t)("Are you sure you want to delete the selected datasets?"),onConfirm:a=>{l.Z.delete({endpoint:`/api/v1/dataset/?q=${r().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{I(),t(e.message)}),(0,d.v$)((t=>e((0,s.t)("There was an issue deleting the selected datasets: %s",t)))))}},(e=>{const t=[];return Q&&t.push({key:"delete",name:(0,s.t)("Delete"),onSelect:e,type:"danger"}),ee&&t.push({key:"export",name:(0,s.t)("Export"),type:"primary",onSelect:oe}),(0,E.tZ)(b.Z,{className:"dataset-list-view",columns:ne,data:v,count:o,pageSize:M.IV,fetchData:z,filters:se,loading:n,initialSort:te,bulkActions:t,bulkSelectEnabled:N,disableBulkSelect:A,renderBulkSelectCopy:e=>{const{virtualCount:t,physicalCount:a}=e.reduce(((e,t)=>("physical"===t.original.kind?e.physicalCount+=1:"virtual"===t.original.kind&&(e.virtualCount+=1),e)),{virtualCount:0,physicalCount:0});return e.length?t&&!a?(0,s.t)("%s Selected (Virtual)",e.length,t):a&&!t?(0,s.t)("%s Selected (Physical)",e.length,a):(0,s.t)("%s Selected (%s Physical, %s Virtual)",e.length,a,t):(0,s.t)("0 Selected")}})})),(0,E.tZ)(C.Z,{resourceName:"dataset",resourceLabel:(0,s.t)("dataset"),passwordsNeededMessage:M.iX,confirmOverwriteMessage:M.mI,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{V(!1),I()},show:j,onHide:()=>{V(!1)},passwordFields:K,setPasswordFields:X}),W&&(0,E.tZ)(g.Z,null))}))}}]);