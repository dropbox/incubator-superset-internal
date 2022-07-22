"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5656],{73995:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(67294),s=a(51995),l=a(31069),o=a(61988),i=a(15926),r=a.n(i),d=a(4715),c=a(37921),u=a(49238),m=a(40277),h=a(14114),p=a(11965);const b=s.iK.div`
  ${({theme:e})=>`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${e.gridUnit}px;\n      margin-top: ${5*e.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .select {\n      width: calc(100% - 30px - ${e.gridUnit}px);\n      flex: 1;\n    }\n\n    & > div {\n      margin-bottom: ${4*e.gridUnit}px;\n    }\n  `}
`,g=s.iK.div`
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
`,Z=({backend:e,databaseName:t})=>(0,p.tZ)(g,null,(0,p.tZ)(c.Z,{className:"backend"},e),(0,p.tZ)("span",{className:"name",title:t},t));function v({db:e,formMode:t=!1,getDbList:a,handleError:s,isDatabaseSelectEnabled:i=!0,onDbChange:c,onSchemaChange:g,onSchemasLoad:v,readOnly:f=!1,schema:y,sqlLabMode:w=!1}){const[S,x]=(0,n.useState)(!1),[_,C]=(0,n.useState)([]),[k,$]=(0,n.useState)(e?{label:(0,p.tZ)(Z,{backend:e.backend,databaseName:e.database_name}),value:e.id,...e}:void 0),[D,N]=(0,n.useState)(y?{label:y,value:y}:void 0),[T,E]=(0,n.useState)(0),{addSuccessToast:L}=(0,h.e1)(),z=(0,n.useMemo)((()=>async(e,n,i)=>{const d=`/api/v1/database/?q=${r().encode({order_columns:"database_name",order_direction:"asc",page:n,page_size:i,...t||!w?{filters:[{col:"database_name",opr:"ct",value:e}]}:{filters:[{col:"database_name",opr:"ct",value:e},{col:"expose_in_sqllab",opr:"eq",value:!0}]}})}`;return l.Z.get({endpoint:d}).then((({json:e})=>{const{result:t}=e;a&&a(t),0===t.length&&s((0,o.t)("It seems you don't have access to any database"));const n=t.map((e=>({label:(0,p.tZ)(Z,{backend:e.backend,databaseName:e.database_name}),value:e.id,id:e.id,database_name:e.database_name,backend:e.backend,allow_multi_schema_metadata_fetch:e.allow_multi_schema_metadata_fetch})));return{data:n,totalCount:n.length}}))}),[t,a,s,w]);function M(e,t){return(0,p.tZ)("div",{className:"section"},(0,p.tZ)("span",{className:"select"},e),(0,p.tZ)("span",{className:"refresh"},t))}return(0,n.useEffect)((()=>{if(k){x(!0);const e=r().encode({force:T>0}),t=`/api/v1/database/${k.value}/schemas/?q=${e}`;l.Z.get({endpoint:t}).then((({json:e})=>{const t=e.result.map((e=>({value:e,label:e,title:e})));v&&v(t),C(t),x(!1),T>0&&L("List refreshed")})).catch((()=>{x(!1),s((0,o.t)("There was an error loading the schemas"))}))}}),[k,v,T]),(0,p.tZ)(b,null,M((0,p.tZ)(d.Ph,{ariaLabel:(0,o.t)("Select database or type database name"),optionFilterProps:["database_name","value"],header:(0,p.tZ)(u.lX,null,(0,o.t)("Database")),lazyLoading:!1,onChange:function(e,t){$(t),N(void 0),c&&c(t),g&&g(void 0)},value:k,placeholder:(0,o.t)("Select database or type database name"),disabled:!i||f,options:z}),null),function(){const e=!t&&!f&&(0,p.tZ)(m.Z,{onClick:()=>E(T+1),tooltipContent:(0,o.t)("Force refresh schema list")});return M((0,p.tZ)(d.Ph,{ariaLabel:(0,o.t)("Select schema or type schema name"),disabled:f,header:(0,p.tZ)(u.lX,null,(0,o.t)("Schema")),labelInValue:!0,lazyLoading:!1,loading:S,name:"select-schema",placeholder:(0,o.t)("Select schema or type schema name"),onChange:e=>function(e){N(e),g&&g(e.value)}(e),options:_,showSearch:!0,value:D}),e)}())}},27989:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),s=a(51995),l=a(61988),o=a(35932),i=a(74069),r=a(4715),d=a(34858),c=a(11965);const u=s.iK.div`
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
`,h=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:s,addDangerToast:h,onModelImport:p,show:b,onHide:g,passwordFields:Z=[],setPasswordFields:v=(()=>{})})=>{const[f,y]=(0,n.useState)(!0),[w,S]=(0,n.useState)({}),[x,_]=(0,n.useState)(!1),[C,k]=(0,n.useState)(!1),[$,D]=(0,n.useState)([]),[N,T]=(0,n.useState)(!1),E=()=>{D([]),v([]),S({}),_(!1),k(!1),T(!1)},{state:{alreadyExists:L,passwordsNeeded:z},importResource:M}=(0,d.PW)(e,t,(e=>{E(),h(e)}));(0,n.useEffect)((()=>{v(z),z.length>0&&T(!1)}),[z,v]),(0,n.useEffect)((()=>{_(L.length>0),L.length>0&&T(!1)}),[L,_]);return f&&b&&y(!1),(0,c.tZ)(i.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===$.length||x&&!C||N,onHandledPrimaryAction:()=>{var e;(null==(e=$[0])?void 0:e.originFileObj)instanceof File&&(T(!0),M($[0].originFileObj,w,C).then((e=>{e&&(E(),p())})))},onHide:()=>{y(!0),g(),E()},primaryButtonName:x?(0,l.t)("Overwrite"):(0,l.t)("Import"),primaryButtonType:x?"danger":"primary",width:"750px",show:b,title:(0,c.tZ)("h4",null,(0,l.t)("Import %s",t))},(0,c.tZ)(m,null,(0,c.tZ)(r.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:$,onChange:e=>{D([{...e.file,status:"done"}])},onRemove:e=>(D($.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{}},(0,c.tZ)(o.Z,{loading:N},"Select file"))),0===Z.length?null:(0,c.tZ)(n.Fragment,null,(0,c.tZ)("h5",null,"Database passwords"),(0,c.tZ)(u,null,a),Z.map((e=>(0,c.tZ)(m,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},e,(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:w[e],onChange:t=>S({...w,[e]:t.target.value})}))))),x?(0,c.tZ)(n.Fragment,null,(0,c.tZ)(m,null,(0,c.tZ)("div",{className:"confirm-overwrite"},s),(0,c.tZ)("div",{className:"control-label"},(0,l.t)('Type "%s" to confirm',(0,l.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";k(n.toUpperCase()===(0,l.t)("OVERWRITE"))}}))):null)}},40277:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),s=a(58593),l=a(70163),o=a(11965);const i=({onClick:e,tooltipContent:t})=>{const a=(0,n.forwardRef)(((e,t)=>(0,o.tZ)(l.Z.Refresh,e)));return(0,o.tZ)(s.u,{title:t},(0,o.tZ)(a,{role:"button",onClick:e,css:e=>({cursor:"pointer",color:e.colors.grayscale.base,"&:hover":{color:e.colors.primary.base}})}))}},17982:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294),s=a(51995),l=a(31069),o=a(61988),i=a(4715),r=a(49238),d=a(70163),c=a(73995),u=a(40277),m=a(79789),h=a(86057),p=a(14114),b=a(11965);const g=s.iK.div`
  ${({theme:e})=>`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${e.gridUnit}px;\n      margin-top: ${5*e.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .divider {\n      border-bottom: 1px solid ${e.colors.secondary.light5};\n      margin: 15px 0;\n    }\n\n    .table-length {\n      color: ${e.colors.grayscale.light1};\n    }\n\n    .select {\n      flex: 1;\n    }\n  `}
`,Z=s.iK.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,v=({table:e})=>{const{label:t,type:a,extra:n}=e;return(0,b.tZ)(Z,{title:t},"view"===a?(0,b.tZ)(d.Z.Eye,{iconSize:"m"}):(0,b.tZ)(d.Z.Table,{iconSize:"m"}),(null==n?void 0:n.certification)&&(0,b.tZ)(m.Z,{certifiedBy:n.certification.certified_by,details:n.certification.details,size:"l"}),(null==n?void 0:n.warning_markdown)&&(0,b.tZ)(h.Z,{warningMarkdown:n.warning_markdown,size:"l"}),t)},f=({database:e,formMode:t=!1,getDbList:a,handleError:s,isDatabaseSelectEnabled:d=!0,onDbChange:m,onSchemaChange:h,onSchemasLoad:Z,onTableChange:f,onTablesLoad:y,readOnly:w=!1,schema:S,sqlLabMode:x=!0,tableName:_})=>{const[C,k]=(0,n.useState)(e),[$,D]=(0,n.useState)(S),[N,T]=(0,n.useState)(),[E,L]=(0,n.useState)(0),[z,M]=(0,n.useState)(0),[H,U]=(0,n.useState)(!1),[P,I]=(0,n.useState)([]),{addSuccessToast:q}=(0,p.e1)();(0,n.useEffect)((()=>{void 0===e&&(k(void 0),D(void 0),T(void 0))}),[e]),(0,n.useEffect)((()=>{if(C&&$){U(!0);const e=encodeURIComponent($),t=E!==z,a=encodeURI(`/superset/tables/${C.id}/${e}/undefined/${t}/`);z!==E&&M(E),l.Z.get({endpoint:a}).then((({json:e})=>{const a=[];let n;e.options.forEach((e=>{const t={value:e.value,label:(0,b.tZ)(v,{table:e}),text:e.label};a.push(t),e.label===_&&(n=t)})),null==y||y(e.options),I(a),T(n),U(!1),t&&q("List updated")})).catch((()=>{U(!1),s((0,o.t)("There was an error loading the tables"))}))}}),[C,$,y,E]);const A=e=>{T(e),f&&$&&f(null==e?void 0:e.value,$)},R=(0,n.useMemo)((()=>(e,t)=>{const a=e.trim().toLowerCase(),{text:n}=t;return n.toLowerCase().includes(a)}),[]);return(0,b.tZ)(g,null,(0,b.tZ)(c.Z,{key:null==C?void 0:C.id,db:C,formMode:t,getDbList:a,handleError:s,onDbChange:w?void 0:e=>{k(e),m&&m(e)},onSchemaChange:w?void 0:e=>{D(e),h&&h(e),A(void 0)},onSchemasLoad:Z,schema:$,sqlLabMode:x,isDatabaseSelectEnabled:d&&!w,readOnly:w}),x&&!t&&(0,b.tZ)("div",{className:"divider"}),function(){const a=$&&!t&&w||!$&&!(null!=e&&e.allow_multi_schema_metadata_fetch),n=x?(0,b.tZ)(r.lX,null,(0,o.t)("See table schema")):(0,b.tZ)(r.lX,null,(0,o.t)("Table"));return s=(0,b.tZ)(i.Ph,{ariaLabel:(0,o.t)("Select table or type table name"),disabled:a,filterOption:R,header:n,labelInValue:!0,lazyLoading:!1,loading:H,name:"select-table",onChange:e=>A(e),options:P,placeholder:(0,o.t)("Select table or type table name"),showSearch:!0,value:N}),l=!t&&!w&&(0,b.tZ)(u.Z,{onClick:()=>L(E+1),tooltipContent:(0,o.t)("Force refresh table list")}),(0,b.tZ)("div",{className:"section"},(0,b.tZ)("span",{className:"select"},s),(0,b.tZ)("span",{className:"refresh"},l));var s,l}())}},95413:(e,t,a)=>{a.d(t,{Y:()=>s});var n=a(61988);const s={name:(0,n.t)("Data"),tabs:[{name:"Databases",label:(0,n.t)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:(0,n.t)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:(0,n.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,n.t)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},97894:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var n=a(51995),s=a(61988),l=a(31069),o=a(67294),i=a(15926),r=a.n(i),d=a(40768),c=a(34858),u=a(19259),m=a(77775),h=a(17198),p=a(32228),b=a(98289),g=a(38703),Z=a(20755),v=a(95413),f=a(14114),y=a(58593),w=a(70163),S=a(34581),x=a(79789),_=a(8272),C=a(27989),k=a(91877),$=a(93185),D=a(86057),N=a(70695),T=a(74069),E=a(17982),L=a(11965);const z=n.iK.div`
  padding-bottom: 340px;
  width: 65%;
`,M=(0,f.ZP)((({addDangerToast:e,addSuccessToast:t,onDatasetAdd:a,onHide:n,show:l})=>{const[i,r]=(0,o.useState)(),[d,u]=(0,o.useState)(""),[m,h]=(0,o.useState)(""),[p,b]=(0,o.useState)(!0),{createResource:g}=(0,c.LE)("dataset",(0,s.t)("dataset"),e);(0,o.useEffect)((()=>{b(void 0===i||""===m)}),[m,i]);const Z=()=>{u(""),h(""),r(void 0),b(!0),n()};return(0,L.tZ)(T.Z,{disablePrimaryButton:p,onHandledPrimaryAction:()=>{if(void 0===i)return;const e={database:i.id,...d?{schema:d}:{},table_name:m};g(e).then((e=>{e&&(a&&a({id:e.id,...e}),t((0,s.t)("The dataset has been saved")),Z())}))},onHide:Z,primaryButtonName:(0,s.t)("Add"),show:l,title:(0,s.t)("Add dataset")},(0,L.tZ)(z,null,(0,L.tZ)(E.Z,{clearable:!1,formMode:!0,database:i,schema:d,tableName:m,onDbChange:e=>{r(e)},onSchemaChange:e=>{u(e)},onTableChange:e=>{h(e)},handleError:e})))}));var H=a(52389);const U=n.iK.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,P=n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};

  .disabled {
    svg,
    i {
      &:hover {
        path {
          fill: ${({theme:e})=>e.colors.grayscale.light1};
        }
      }
    }
    color: ${({theme:e})=>e.colors.grayscale.light1};
    .ant-menu-item:hover {
      color: ${({theme:e})=>e.colors.grayscale.light1};
      cursor: default;
    }
    &::after {
      color: ${({theme:e})=>e.colors.grayscale.light1};
    }
  }
`,I=(0,f.ZP)((({addDangerToast:e,addSuccessToast:t,user:a})=>{const{state:{loading:n,resourceCount:i,resourceCollection:f,bulkSelectEnabled:T},hasPerm:E,fetchData:z,toggleBulkSelect:I,refreshData:q}=(0,c.Yi)("dataset",(0,s.t)("dataset"),e),[A,R]=(0,o.useState)(!1),[O,B]=(0,o.useState)(null),[F,j]=(0,o.useState)(null),[V,K]=(0,o.useState)(!1),[X,Y]=(0,o.useState)([]),[W,J]=(0,o.useState)(!1),Q=E("can_write"),G=E("can_write"),ee=E("can_write"),te=E("can_export"),ae=H.dY,ne=(0,o.useCallback)((({id:t})=>{l.Z.get({endpoint:`/api/v1/dataset/${t}`}).then((({json:e={}})=>{const t=e.result.columns.map((e=>{const{certification:{details:t="",certified_by:a=""}={}}=JSON.parse(e.extra||"{}")||{};return{...e,certification_details:t||"",certified_by:a||"",is_certified:t||a}}));e.result.columns=[...t],j(e.result)})).catch((()=>{e((0,s.t)("An error occurred while fetching dataset related data"))}))}),[e]),se=(0,o.useMemo)((()=>[{Cell:({row:{original:{kind:e}}})=>"physical"===e?(0,L.tZ)(y.u,{id:"physical-dataset-tooltip",title:(0,s.t)("Physical dataset")},(0,L.tZ)(w.Z.DatasetPhysical,null)):(0,L.tZ)(y.u,{id:"virtual-dataset-tooltip",title:(0,s.t)("Virtual dataset")},(0,L.tZ)(w.Z.DatasetVirtual,null)),accessor:"kind_icon",disableSortBy:!0,size:"xs"},{Cell:({row:{original:{extra:e,table_name:t,description:a,explore_url:n}}})=>{const s=(0,L.tZ)("a",{href:n},t);try{const t=JSON.parse(e);return(0,L.tZ)(U,null,(null==t?void 0:t.certification)&&(0,L.tZ)(x.Z,{certifiedBy:t.certification.certified_by,details:t.certification.details,size:"l"}),(null==t?void 0:t.warning_markdown)&&(0,L.tZ)(D.Z,{warningMarkdown:t.warning_markdown,size:"l"}),s,a&&(0,L.tZ)(_.Z,{tooltip:a,viewBox:"0 -1 24 24"}))}catch{return s}},Header:(0,s.t)("Name"),accessor:"table_name"},{Cell:({row:{original:{kind:e}}})=>{var t;return(null==(t=e[0])?void 0:t.toUpperCase())+e.slice(1)},Header:(0,s.t)("Type"),accessor:"kind",disableSortBy:!0,size:"md"},{Header:(0,s.t)("Database"),accessor:"database.database_name",size:"lg"},{Header:(0,s.t)("Schema"),accessor:"schema",size:"lg"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>(0,L.tZ)("span",{className:"no-wrap"},e),Header:(0,s.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:{changed_by_name:e}}})=>e,Header:(0,s.t)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{accessor:"database",disableSortBy:!0,hidden:!0},{Cell:({row:{original:{owners:e=[]}}})=>(0,L.tZ)(S.Z,{users:e}),Header:(0,s.t)("Owners"),id:"owners",disableSortBy:!0,size:"lg"},{accessor:"sql",hidden:!0,disableSortBy:!0},{Cell:({row:{original:e}})=>{const t=e.owners.map((e=>e.id)).includes(a.userId)||(0,N.i5)(a);return Q||G||te?(0,L.tZ)(P,{className:"actions"},G&&(0,L.tZ)(y.u,{id:"delete-action-tooltip",title:(0,s.t)("Delete"),placement:"bottom"},(0,L.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,l.Z.get({endpoint:`/api/v1/dataset/${t.id}/related_objects`}).then((({json:e={}})=>{B({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count})})).catch((0,d.v$)((e=>(0,s.t)("An error occurred while fetching dataset related data: %s",e))));var t}},(0,L.tZ)(w.Z.Trash,null))),te&&(0,L.tZ)(y.u,{id:"export-action-tooltip",title:(0,s.t)("Export"),placement:"bottom"},(0,L.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>re([e])},(0,L.tZ)(w.Z.Share,null))),Q&&(0,L.tZ)(y.u,{id:"edit-action-tooltip",title:t?(0,s.t)("Edit"):(0,s.t)("You must be a dataset owner in order to edit. Please reach out to a dataset owner to request modifications or edit access."),placement:"bottomRight"},(0,L.tZ)("span",{role:"button",tabIndex:0,className:t?"action-button":"disabled",onClick:t?()=>ne(e):void 0},(0,L.tZ)(w.Z.EditAlt,null)))):null},Header:(0,s.t)("Actions"),id:"actions",hidden:!Q&&!G,disableSortBy:!0}]),[Q,G,te,ne]),le=(0,o.useMemo)((()=>[{Header:(0,s.t)("Owner"),id:"owners",input:"select",operator:b.p.relationManyMany,unfilteredLabel:"All",fetchSelects:(0,d.tm)("dataset","owners",(0,d.v$)((e=>(0,s.t)("An error occurred while fetching dataset owner values: %s",e))),a),paginate:!0},{Header:(0,s.t)("Database"),id:"database",input:"select",operator:b.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,d.tm)("dataset","database",(0,d.v$)((e=>(0,s.t)("An error occurred while fetching datasets: %s",e)))),paginate:!0},{Header:(0,s.t)("Schema"),id:"schema",input:"select",operator:b.p.equals,unfilteredLabel:"All",fetchSelects:(0,d.wk)("dataset","schema",(0,d.v$)((e=>(0,s.t)("An error occurred while fetching schema values: %s",e)))),paginate:!0},{Header:(0,s.t)("Type"),id:"sql",input:"select",operator:b.p.datasetIsNullOrEmpty,unfilteredLabel:"All",selects:[{label:"Virtual",value:!1},{label:"Physical",value:!0}]},{Header:(0,s.t)("Search"),id:"table_name",input:"search",operator:b.p.contains}]),[]),oe={activeChild:"Datasets",...v.Y},ie=[];(G||te)&&ie.push({name:(0,s.t)("Bulk select"),onClick:I,buttonStyle:"secondary"}),ee&&(ie.push({name:(0,L.tZ)(o.Fragment,null,(0,L.tZ)("i",{className:"fa fa-plus"})," ",(0,s.t)("Dataset")," "),onClick:()=>R(!0),buttonStyle:"primary"}),(0,k.cr)($.T.VERSIONED_EXPORT)&&ie.push({name:(0,L.tZ)(y.u,{id:"import-tooltip",title:(0,s.t)("Import datasets"),placement:"bottomRight"},(0,L.tZ)(w.Z.Import,null)),buttonStyle:"link",onClick:()=>{K(!0)}})),oe.buttons=ie;const re=e=>{const t=e.map((({id:e})=>e));(0,p.Z)("dataset",t,(()=>{J(!1)})),J(!0)};return(0,L.tZ)(o.Fragment,null,(0,L.tZ)(Z.Z,oe),(0,L.tZ)(M,{show:A,onHide:()=>R(!1),onDatasetAdd:q}),O&&(0,L.tZ)(h.Z,{description:(0,s.t)("The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.",O.table_name,O.chart_count,O.dashboard_count),onConfirm:()=>{O&&(({id:a,table_name:n})=>{l.Z.delete({endpoint:`/api/v1/dataset/${a}`}).then((()=>{q(),B(null),t((0,s.t)("Deleted: %s",n))}),(0,d.v$)((t=>e((0,s.t)("There was an issue deleting %s: %s",n,t)))))})(O)},onHide:()=>{B(null)},open:!0,title:(0,s.t)("Delete Dataset?")}),F&&(0,L.tZ)(m.W,{datasource:F,onDatasourceSave:q,onHide:()=>{j(null)},show:!0}),(0,L.tZ)(u.Z,{title:(0,s.t)("Please confirm"),description:(0,s.t)("Are you sure you want to delete the selected datasets?"),onConfirm:a=>{l.Z.delete({endpoint:`/api/v1/dataset/?q=${r().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{q(),t(e.message)}),(0,d.v$)((t=>e((0,s.t)("There was an issue deleting the selected datasets: %s",t)))))}},(e=>{const t=[];return G&&t.push({key:"delete",name:(0,s.t)("Delete"),onSelect:e,type:"danger"}),te&&t.push({key:"export",name:(0,s.t)("Export"),type:"primary",onSelect:re}),(0,L.tZ)(b.Z,{className:"dataset-list-view",columns:se,data:f,count:i,pageSize:H.IV,fetchData:z,filters:le,loading:n,initialSort:ae,bulkActions:t,bulkSelectEnabled:T,disableBulkSelect:I,renderBulkSelectCopy:e=>{const{virtualCount:t,physicalCount:a}=e.reduce(((e,t)=>("physical"===t.original.kind?e.physicalCount+=1:"virtual"===t.original.kind&&(e.virtualCount+=1),e)),{virtualCount:0,physicalCount:0});return e.length?t&&!a?(0,s.t)("%s Selected (Virtual)",e.length,t):a&&!t?(0,s.t)("%s Selected (Physical)",e.length,a):(0,s.t)("%s Selected (%s Physical, %s Virtual)",e.length,a,t):(0,s.t)("0 Selected")}})})),(0,L.tZ)(C.Z,{resourceName:"dataset",resourceLabel:(0,s.t)("dataset"),passwordsNeededMessage:H.iX,confirmOverwriteMessage:H.mI,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{K(!1),q(),t((0,s.t)("Dataset imported"))},show:V,onHide:()=>{K(!1)},passwordFields:X,setPasswordFields:Y}),W&&(0,L.tZ)(g.Z,null))}))}}]);