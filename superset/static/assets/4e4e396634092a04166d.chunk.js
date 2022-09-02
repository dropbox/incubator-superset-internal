"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5656],{73995:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(67294),s=a(51995),l=a(31069),i=a(61988),o=a(15926),r=a.n(o),d=a(4715),c=a(37921),u=a(49238),p=a(40277),m=a(14114),h=a(11965);const g=s.iK.div`
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
`,f=({backend:e,databaseName:t})=>(0,h.tZ)(b,null,(0,h.tZ)(c.Z,{className:"backend"},e),(0,h.tZ)("span",{className:"name",title:t},t));function Z({db:e,formMode:t=!1,emptyState:a,getDbList:s,handleError:o,isDatabaseSelectEnabled:c=!0,onDbChange:b,onEmptyResults:Z,onSchemaChange:v,onSchemasLoad:y,readOnly:w=!1,schema:S,sqlLabMode:x=!1}){const[_,C]=(0,n.useState)(!1),[$,k]=(0,n.useState)([]),[D,N]=(0,n.useState)(e?{label:(0,h.tZ)(f,{backend:e.backend,databaseName:e.database_name}),value:e.id,...e}:void 0),[E,T]=(0,n.useState)(S?{label:S,value:S}:void 0),[L,z]=(0,n.useState)(0),{addSuccessToast:M}=(0,m.e1)(),U=(0,n.useMemo)((()=>async(e,a,n)=>{const i=`/api/v1/database/?q=${r().encode({order_columns:"database_name",order_direction:"asc",page:a,page_size:n,...t||!x?{filters:[{col:"database_name",opr:"ct",value:e}]}:{filters:[{col:"database_name",opr:"ct",value:e},{col:"expose_in_sqllab",opr:"eq",value:!0}]}})}`;return l.Z.get({endpoint:i}).then((({json:t})=>{const{result:a}=t;s&&s(a),0===a.length&&Z&&Z(e);const n=a.map((e=>({label:(0,h.tZ)(f,{backend:e.backend,databaseName:e.database_name}),value:e.id,id:e.id,database_name:e.database_name,backend:e.backend,allow_multi_schema_metadata_fetch:e.allow_multi_schema_metadata_fetch})));return{data:n,totalCount:n.length}}))}),[t,s,x]);function I(e,t){return(0,h.tZ)("div",{className:"section"},(0,h.tZ)("span",{className:"select"},e),(0,h.tZ)("span",{className:"refresh"},t))}return(0,n.useEffect)((()=>{if(D){C(!0);const e=r().encode({force:L>0}),t=`/api/v1/database/${D.value}/schemas/?q=${e}`;l.Z.get({endpoint:t}).then((({json:e})=>{const t=e.result.map((e=>({value:e,label:e,title:e})));y&&y(t),k(t),C(!1),L>0&&M("List refreshed")})).catch((()=>{C(!1),o((0,i.t)("There was an error loading the schemas"))}))}}),[D,y,L]),(0,h.tZ)(g,null,I((0,h.tZ)(d.Ph,{ariaLabel:(0,i.t)("Select database or type database name"),optionFilterProps:["database_name","value"],header:(0,h.tZ)(u.lX,null,(0,i.t)("Database")),lazyLoading:!1,notFoundContent:a,onChange:function(e,t){N(t),T(void 0),b&&b(t),v&&v(void 0)},value:D,placeholder:(0,i.t)("Select database or type database name"),disabled:!c||w,options:U}),null),function(){const e=!t&&!w&&(0,h.tZ)(p.Z,{onClick:()=>z(L+1),tooltipContent:(0,i.t)("Force refresh schema list")});return I((0,h.tZ)(d.Ph,{ariaLabel:(0,i.t)("Select schema or type schema name"),disabled:!D||w,header:(0,h.tZ)(u.lX,null,(0,i.t)("Schema")),labelInValue:!0,lazyLoading:!1,loading:_,name:"select-schema",placeholder:(0,i.t)("Select schema or type schema name"),onChange:e=>function(e){T(e),v&&v(e.value)}(e),options:$,showSearch:!0,value:E}),e)}())}},26996:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294),s=a(51995),l=a(61988),i=a(35932),o=a(74069),r=a(4715),d=a(34858),c=a(29487),u=a(11965);const p=(0,d.z)(),m=p?p.support:"https://superset.apache.org/docs/databases/installing-database-drivers",h=({errorMessage:e,showDbInstallInstructions:t})=>(0,u.tZ)(c.Z,{closable:!1,css:e=>(e=>u.iv`
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
`)(e),type:"error",showIcon:!0,message:e,description:t?(0,u.tZ)(n.Fragment,null,(0,u.tZ)("br",null),(0,l.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions:"),(0,u.tZ)("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,l.t)("here")),"."):""}),g=s.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,b=s.iK.div`
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
`,f=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:s,onModelImport:c,show:p,onHide:m,passwordFields:f=[],setPasswordFields:Z=(()=>{})})=>{const[v,y]=(0,n.useState)(!0),[w,S]=(0,n.useState)({}),[x,_]=(0,n.useState)(!1),[C,$]=(0,n.useState)(!1),[k,D]=(0,n.useState)([]),[N,E]=(0,n.useState)(!1),[T,L]=(0,n.useState)(),z=()=>{D([]),Z([]),S({}),_(!1),$(!1),E(!1),L("")},{state:{alreadyExists:M,passwordsNeeded:U},importResource:I}=(0,d.PW)(e,t,(e=>{L(e)}));(0,n.useEffect)((()=>{Z(U),U.length>0&&E(!1)}),[U,Z]),(0,n.useEffect)((()=>{_(M.length>0),M.length>0&&E(!1)}),[M,_]);return v&&p&&y(!1),(0,u.tZ)(o.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===k.length||x&&!C||N,onHandledPrimaryAction:()=>{var e;(null==(e=k[0])?void 0:e.originFileObj)instanceof File&&(E(!0),I(k[0].originFileObj,w,C).then((e=>{e&&(z(),c())})))},onHide:()=>{y(!0),m(),z()},primaryButtonName:x?(0,l.t)("Overwrite"):(0,l.t)("Import"),primaryButtonType:x?"danger":"primary",width:"750px",show:p,title:(0,u.tZ)("h4",null,(0,l.t)("Import %s",t))},(0,u.tZ)(b,null,(0,u.tZ)(r.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:k,onChange:e=>{D([{...e.file,status:"done"}])},onRemove:e=>(D(k.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:N},(0,u.tZ)(i.Z,{loading:N},"Select file"))),T&&(0,u.tZ)(h,{errorMessage:T,showDbInstallInstructions:f.length>0}),0===f.length?null:(0,u.tZ)(n.Fragment,null,(0,u.tZ)("h5",null,"Database passwords"),(0,u.tZ)(g,null,a),f.map((e=>(0,u.tZ)(b,{key:`password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},e,(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:w[e],onChange:t=>S({...w,[e]:t.target.value})}))))),x?(0,u.tZ)(n.Fragment,null,(0,u.tZ)(b,null,(0,u.tZ)("div",{className:"confirm-overwrite"},s),(0,u.tZ)("div",{className:"control-label"},(0,l.t)('Type "%s" to confirm',(0,l.t)("OVERWRITE"))),(0,u.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";$(n.toUpperCase()===(0,l.t)("OVERWRITE"))}}))):null)}},40277:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),s=a(58593),l=a(70163),i=a(11965);const o=({onClick:e,tooltipContent:t})=>{const a=(0,n.forwardRef)(((e,t)=>(0,i.tZ)(l.Z.Refresh,e)));return(0,i.tZ)(s.u,{title:t},(0,i.tZ)(a,{role:"button",onClick:e,css:e=>({cursor:"pointer",color:e.colors.grayscale.base,"&:hover":{color:e.colors.primary.base}})}))}},17982:(e,t,a)=>{a.d(t,{P:()=>S,Z:()=>x});var n=a(5872),s=a.n(n),l=a(67294),i=a(51995),o=a(31069),r=a(61988),d=a(4715),c=a(49238),u=a(70163),p=a(73995),m=a(40277),h=a(79789),g=a(86057),b=a(14114),f=a(11965);const Z=i.iK.div`
  ${({theme:e})=>`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${e.gridUnit}px;\n      margin-top: ${5*e.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .divider {\n      border-bottom: 1px solid ${e.colors.secondary.light5};\n      margin: 15px 0;\n    }\n\n    .table-length {\n      color: ${e.colors.grayscale.light1};\n    }\n\n    .select {\n      flex: 1;\n    }\n  `}
`,v=i.iK.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,y=({table:e})=>{const{label:t,type:a,extra:n}=e;return(0,f.tZ)(v,{title:t},"view"===a?(0,f.tZ)(u.Z.Eye,{iconSize:"m"}):(0,f.tZ)(u.Z.Table,{iconSize:"m"}),(null==n?void 0:n.certification)&&(0,f.tZ)(h.Z,{certifiedBy:n.certification.certified_by,details:n.certification.details,size:"l"}),(null==n?void 0:n.warning_markdown)&&(0,f.tZ)(g.Z,{warningMarkdown:n.warning_markdown,size:"l"}),t)},w=({database:e,emptyState:t,formMode:a=!1,getDbList:n,handleError:s,isDatabaseSelectEnabled:i=!0,onDbChange:u,onSchemaChange:h,onSchemasLoad:g,onTablesLoad:v,readOnly:w=!1,onEmptyResults:S,schema:x,sqlLabMode:_=!0,tableSelectMode:C="single",tableValue:$,onTableSelectChange:k})=>{const[D,N]=(0,l.useState)(e),[E,T]=(0,l.useState)(x),[L,z]=(0,l.useState)([]),[M,U]=(0,l.useState)(void 0),[I,R]=(0,l.useState)(0),[H,P]=(0,l.useState)(0),[A,O]=(0,l.useState)(!1),{addSuccessToast:q}=(0,b.e1)();(0,l.useEffect)((()=>{void 0===e&&(N(void 0),T(void 0),U(void 0))}),[e,C]),(0,l.useEffect)((()=>{U("single"===C?L.find((e=>e.value===$)):(null==L?void 0:L.filter((e=>e&&(null==$?void 0:$.includes(e.value)))))||[])}),[L,$,C]),(0,l.useEffect)((()=>{if(D&&E){O(!0);const e=encodeURIComponent(E),t=I!==H,a=encodeURI(`/superset/tables/${D.id}/${e}/undefined/${t}/`);H!==I&&P(I),o.Z.get({endpoint:a}).then((({json:e})=>{const a=e.options.map((e=>({value:e.value,label:(0,f.tZ)(y,{table:e}),text:e.label})));null==v||v(e.options),z(a),O(!1),t&&q("List updated")})).catch((()=>{O(!1),s((0,r.t)("There was an error loading the tables"))}))}}),[D,E,v,z,I]);const B=e=>{E?null==k||k(Array.isArray(e)?e.map((e=>null==e?void 0:e.value)):null==e?void 0:e.value,E):U(e)},F=(0,l.useMemo)((()=>(e,t)=>{const a=e.trim().toLowerCase(),{text:n}=t;return n.toLowerCase().includes(a)}),[]);return(0,f.tZ)(Z,null,(0,f.tZ)(p.Z,{key:null==D?void 0:D.id,db:D,emptyState:t,formMode:a,getDbList:n,handleError:s,onDbChange:w?void 0:e=>{N(e),u&&u(e)},onEmptyResults:S,onSchemaChange:w?void 0:e=>{T(e),h&&h(e),B(void 0)},onSchemasLoad:g,schema:E,sqlLabMode:_,isDatabaseSelectEnabled:i&&!w,readOnly:w}),_&&!a&&(0,f.tZ)("div",{className:"divider"}),function(){const t=E&&!a&&w||!E&&!(null!=e&&e.allow_multi_schema_metadata_fetch),n=_?(0,f.tZ)(c.lX,null,(0,r.t)("See table schema")):(0,f.tZ)(c.lX,null,(0,r.t)("Table"));return s=(0,f.tZ)(d.Ph,{ariaLabel:(0,r.t)("Select table or type table name"),disabled:t,filterOption:F,header:n,labelInValue:!0,lazyLoading:!1,loading:A,name:"select-table",onChange:e=>B(e),options:L,placeholder:(0,r.t)("Select table or type table name"),showSearch:!0,mode:C,value:M,allowClear:"multiple"===C}),l=!a&&!w&&(0,f.tZ)(m.Z,{onClick:()=>R(I+1),tooltipContent:(0,r.t)("Force refresh table list")}),(0,f.tZ)("div",{className:"section"},(0,f.tZ)("span",{className:"select"},s),(0,f.tZ)("span",{className:"refresh"},l));var s,l}())},S=e=>(0,f.tZ)(w,s()({tableSelectMode:"multiple"},e)),x=w},95413:(e,t,a)=>{a.d(t,{Y:()=>s});var n=a(61988);const s={name:(0,n.t)("Data"),tabs:[{name:"Databases",label:(0,n.t)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:(0,n.t)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:(0,n.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,n.t)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},97894:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var n=a(51995),s=a(61988),l=a(31069),i=a(67294),o=a(15926),r=a.n(o),d=a(40768),c=a(34858),u=a(19259),p=a(77775),m=a(17198),h=a(32228),g=a(18782),b=a(38703),f=a(20755),Z=a(95413),v=a(14114),y=a(58593),w=a(70163),S=a(34581),x=a(79789),_=a(8272),C=a(26996),$=a(91877),k=a(93185),D=a(86057),N=a(70695),E=a(74069),T=a(17982),L=a(11965);const z=n.iK.div`
  padding-bottom: 340px;
  width: 65%;
`,M=(0,v.ZP)((({addDangerToast:e,addSuccessToast:t,onDatasetAdd:a,onHide:n,show:l})=>{const[o,r]=(0,i.useState)(),[d,u]=(0,i.useState)(""),[p,m]=(0,i.useState)(""),[h,g]=(0,i.useState)(!0),{createResource:b,state:{loading:f}}=(0,c.LE)("dataset",(0,s.t)("dataset"),e);(0,i.useEffect)((()=>{g(void 0===o||""===p)}),[p,o]);const Z=()=>{u(""),m(""),r(void 0),g(!0),n()};return(0,L.tZ)(E.Z,{disablePrimaryButton:h,primaryButtonLoading:f,onHandledPrimaryAction:()=>{if(void 0===o)return;const e={database:o.id,...d?{schema:d}:{},table_name:p};b(e).then((e=>{e&&(a&&a({id:e.id,...e}),t((0,s.t)("The dataset has been saved")),Z())}))},onHide:Z,primaryButtonName:(0,s.t)("Add"),show:l,title:(0,s.t)("Add dataset")},(0,L.tZ)(z,null,(0,L.tZ)(T.Z,{clearable:!1,formMode:!0,database:o,schema:d,tableValue:p,onDbChange:e=>{r(e)},onSchemaChange:e=>{u(e)},onTableSelectChange:e=>{m(e)},handleError:e})))}));var U=a(52389);const I=n.iK.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,R=n.iK.div`
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
`,H=(0,v.ZP)((({addDangerToast:e,addSuccessToast:t,user:a})=>{const{state:{loading:n,resourceCount:o,resourceCollection:v,bulkSelectEnabled:E},hasPerm:T,fetchData:z,toggleBulkSelect:H,refreshData:P}=(0,c.Yi)("dataset",(0,s.t)("dataset"),e),[A,O]=(0,i.useState)(!1),[q,B]=(0,i.useState)(null),[F,V]=(0,i.useState)(null),[j,K]=(0,i.useState)(!1),[X,Y]=(0,i.useState)([]),[W,J]=(0,i.useState)(!1),Q=T("can_write"),G=T("can_write"),ee=T("can_write"),te=T("can_export")&&(0,$.cr)(k.T.VERSIONED_EXPORT),ae=U.dY,ne=(0,i.useCallback)((({id:t})=>{l.Z.get({endpoint:`/api/v1/dataset/${t}`}).then((({json:e={}})=>{const t=e.result.columns.map((e=>{const{certification:{details:t="",certified_by:a=""}={}}=JSON.parse(e.extra||"{}")||{};return{...e,certification_details:t||"",certified_by:a||"",is_certified:t||a}}));e.result.columns=[...t],V(e.result)})).catch((()=>{e((0,s.t)("An error occurred while fetching dataset related data"))}))}),[e]),se=e=>{const t=e.map((({id:e})=>e));(0,h.Z)("dataset",t,(()=>{J(!1)})),J(!0)},le=(0,i.useMemo)((()=>[{Cell:({row:{original:{kind:e}}})=>"physical"===e?(0,L.tZ)(y.u,{id:"physical-dataset-tooltip",title:(0,s.t)("Physical dataset")},(0,L.tZ)(w.Z.DatasetPhysical,null)):(0,L.tZ)(y.u,{id:"virtual-dataset-tooltip",title:(0,s.t)("Virtual dataset")},(0,L.tZ)(w.Z.DatasetVirtual,null)),accessor:"kind_icon",disableSortBy:!0,size:"xs",id:"id"},{Cell:({row:{original:{extra:e,table_name:t,description:a,explore_url:n}}})=>{const s=(0,L.tZ)("a",{href:n},t);try{const t=JSON.parse(e);return(0,L.tZ)(I,null,(null==t?void 0:t.certification)&&(0,L.tZ)(x.Z,{certifiedBy:t.certification.certified_by,details:t.certification.details,size:"l"}),(null==t?void 0:t.warning_markdown)&&(0,L.tZ)(D.Z,{warningMarkdown:t.warning_markdown,size:"l"}),s,a&&(0,L.tZ)(_.Z,{tooltip:a,viewBox:"0 -1 24 24"}))}catch{return s}},Header:(0,s.t)("Name"),accessor:"table_name"},{Cell:({row:{original:{kind:e}}})=>{var t;return(null==(t=e[0])?void 0:t.toUpperCase())+e.slice(1)},Header:(0,s.t)("Type"),accessor:"kind",disableSortBy:!0,size:"md"},{Header:(0,s.t)("Database"),accessor:"database.database_name",size:"lg"},{Header:(0,s.t)("Schema"),accessor:"schema",size:"lg"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>(0,L.tZ)("span",{className:"no-wrap"},e),Header:(0,s.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:{changed_by_name:e}}})=>e,Header:(0,s.t)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{accessor:"database",disableSortBy:!0,hidden:!0},{Cell:({row:{original:{owners:e=[]}}})=>(0,L.tZ)(S.Z,{users:e}),Header:(0,s.t)("Owners"),id:"owners",disableSortBy:!0,size:"lg"},{accessor:"sql",hidden:!0,disableSortBy:!0},{Cell:({row:{original:e}})=>{const t=e.owners.map((e=>e.id)).includes(a.userId)||(0,N.i5)(a);return Q||G||te?(0,L.tZ)(R,{className:"actions"},G&&(0,L.tZ)(y.u,{id:"delete-action-tooltip",title:(0,s.t)("Delete"),placement:"bottom"},(0,L.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,l.Z.get({endpoint:`/api/v1/dataset/${t.id}/related_objects`}).then((({json:e={}})=>{B({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count})})).catch((0,d.v$)((e=>(0,s.t)("An error occurred while fetching dataset related data: %s",e))));var t}},(0,L.tZ)(w.Z.Trash,null))),te&&(0,L.tZ)(y.u,{id:"export-action-tooltip",title:(0,s.t)("Export"),placement:"bottom"},(0,L.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>se([e])},(0,L.tZ)(w.Z.Share,null))),Q&&(0,L.tZ)(y.u,{id:"edit-action-tooltip",title:t?(0,s.t)("Edit"):(0,s.t)("You must be a dataset owner in order to edit. Please reach out to a dataset owner to request modifications or edit access."),placement:"bottomRight"},(0,L.tZ)("span",{role:"button",tabIndex:0,className:t?"action-button":"disabled",onClick:t?()=>ne(e):void 0},(0,L.tZ)(w.Z.EditAlt,null)))):null},Header:(0,s.t)("Actions"),id:"actions",hidden:!Q&&!G,disableSortBy:!0}]),[Q,G,te,ne]),ie=(0,i.useMemo)((()=>[{Header:(0,s.t)("Owner"),id:"owners",input:"select",operator:g.p.relationManyMany,unfilteredLabel:"All",fetchSelects:(0,d.tm)("dataset","owners",(0,d.v$)((e=>(0,s.t)("An error occurred while fetching dataset owner values: %s",e))),a),paginate:!0},{Header:(0,s.t)("Database"),id:"database",input:"select",operator:g.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,d.tm)("dataset","database",(0,d.v$)((e=>(0,s.t)("An error occurred while fetching datasets: %s",e)))),paginate:!0},{Header:(0,s.t)("Schema"),id:"schema",input:"select",operator:g.p.equals,unfilteredLabel:"All",fetchSelects:(0,d.wk)("dataset","schema",(0,d.v$)((e=>(0,s.t)("An error occurred while fetching schema values: %s",e)))),paginate:!0},{Header:(0,s.t)("Type"),id:"sql",input:"select",operator:g.p.datasetIsNullOrEmpty,unfilteredLabel:"All",selects:[{label:"Virtual",value:!1},{label:"Physical",value:!0}]},{Header:(0,s.t)("Certified"),id:"id",urlDisplay:"certified",input:"select",operator:g.p.datasetIsCertified,unfilteredLabel:(0,s.t)("Any"),selects:[{label:(0,s.t)("Yes"),value:!0},{label:(0,s.t)("No"),value:!1}]},{Header:(0,s.t)("Search"),id:"table_name",input:"search",operator:g.p.contains}]),[]),oe={activeChild:"Datasets",...Z.Y},re=[];return(G||te)&&re.push({name:(0,s.t)("Bulk select"),onClick:H,buttonStyle:"secondary"}),ee&&(re.push({name:(0,L.tZ)(i.Fragment,null,(0,L.tZ)("i",{className:"fa fa-plus"})," ",(0,s.t)("Dataset")," "),onClick:()=>O(!0),buttonStyle:"primary"}),(0,$.cr)(k.T.VERSIONED_EXPORT)&&re.push({name:(0,L.tZ)(y.u,{id:"import-tooltip",title:(0,s.t)("Import datasets"),placement:"bottomRight"},(0,L.tZ)(w.Z.Import,null)),buttonStyle:"link",onClick:()=>{K(!0)}})),oe.buttons=re,(0,L.tZ)(i.Fragment,null,(0,L.tZ)(f.Z,oe),(0,L.tZ)(M,{show:A,onHide:()=>O(!1),onDatasetAdd:P}),q&&(0,L.tZ)(m.Z,{description:(0,s.t)("The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.",q.table_name,q.chart_count,q.dashboard_count),onConfirm:()=>{q&&(({id:a,table_name:n})=>{l.Z.delete({endpoint:`/api/v1/dataset/${a}`}).then((()=>{P(),B(null),t((0,s.t)("Deleted: %s",n))}),(0,d.v$)((t=>e((0,s.t)("There was an issue deleting %s: %s",n,t)))))})(q)},onHide:()=>{B(null)},open:!0,title:(0,s.t)("Delete Dataset?")}),F&&(0,L.tZ)(p.W,{datasource:F,onDatasourceSave:P,onHide:()=>{V(null)},show:!0}),(0,L.tZ)(u.Z,{title:(0,s.t)("Please confirm"),description:(0,s.t)("Are you sure you want to delete the selected datasets?"),onConfirm:a=>{l.Z.delete({endpoint:`/api/v1/dataset/?q=${r().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{P(),t(e.message)}),(0,d.v$)((t=>e((0,s.t)("There was an issue deleting the selected datasets: %s",t)))))}},(e=>{const t=[];return G&&t.push({key:"delete",name:(0,s.t)("Delete"),onSelect:e,type:"danger"}),te&&t.push({key:"export",name:(0,s.t)("Export"),type:"primary",onSelect:se}),(0,L.tZ)(g.Z,{className:"dataset-list-view",columns:le,data:v,count:o,pageSize:U.IV,fetchData:z,filters:ie,loading:n,initialSort:ae,bulkActions:t,bulkSelectEnabled:E,disableBulkSelect:H,renderBulkSelectCopy:e=>{const{virtualCount:t,physicalCount:a}=e.reduce(((e,t)=>("physical"===t.original.kind?e.physicalCount+=1:"virtual"===t.original.kind&&(e.virtualCount+=1),e)),{virtualCount:0,physicalCount:0});return e.length?t&&!a?(0,s.t)("%s Selected (Virtual)",e.length,t):a&&!t?(0,s.t)("%s Selected (Physical)",e.length,a):(0,s.t)("%s Selected (%s Physical, %s Virtual)",e.length,a,t):(0,s.t)("0 Selected")}})})),(0,L.tZ)(C.Z,{resourceName:"dataset",resourceLabel:(0,s.t)("dataset"),passwordsNeededMessage:U.iX,confirmOverwriteMessage:U.mI,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{K(!1),P(),t((0,s.t)("Dataset imported"))},show:j,onHide:()=>{K(!1)},passwordFields:X,setPasswordFields:Y}),W&&(0,L.tZ)(b.Z,null))}))}}]);
//# sourceMappingURL=4e4e396634092a04166d.chunk.js.map