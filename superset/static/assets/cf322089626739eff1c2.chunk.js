(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1154:function(e,t,a){"use strict";a(39);var n=a(11),s=a.n(n),c=a(85),o=a.n(c),l=a(0),r=a.n(l),i=a(195),d=a(42),b=a(51),u=a(68),h=a(15),p=a(100),m=a(352),f=a(41),O=a(71),j=a(121),g=a(1);const y=Object(m.a)(()=>Promise.all([a.e(0),a.e(14),a.e(55)]).then(a.bind(null,2113))),v=Object(b.c)(p.b)`
  .modal-content {
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .modal-header {
    flex: 0 1 auto;
  }
  .modal-body {
    flex: 1 1 auto;
    overflow: auto;
  }

  .modal-footer {
    flex: 0 1 auto;
  }
`;function w(e){var t,a;return null!=e&&e.certified_by||null!=e&&e.certification_details?o()({certification:{certified_by:null!=(t=null==e?void 0:e.certified_by)?t:null,details:null!=(a=null==e?void 0:e.certification_details)?a:null}}):null}t.a=Object(j.a)(({addSuccessToast:e,datasource:t,onDatasourceSave:a,onHide:n,show:c})=>{const[o,b]=Object(l.useState)(t),[m,j]=Object(l.useState)([]),[S,x]=Object(l.useState)(!1),C=Object(l.useRef)(null),[_,N]=p.b.useModal(),$=()=>{var t,c,l;const r=(null==(t=o.tableSelector)?void 0:t.schema)||(null==(c=o.databaseSelector)?void 0:c.schema)||o.schema;x(!0),u.a.post({endpoint:"/datasource/save/",postPayload:{data:{...o,schema:r,metrics:null==o?void 0:null==(l=o.metrics)?void 0:s()(l).call(l,e=>({...e,extra:w(e)})),type:o.type||o.datasource_type}}}).then(({json:t})=>{e(Object(h.e)("The dataset has been saved")),a(t),n()}).catch(e=>{x(!1),Object(O.a)(e).then(({error:e})=>{_.error({title:"Error",content:e||Object(h.e)("An error has occurred"),okButtonProps:{danger:!0,className:"btn-danger"}})})})};return Object(g.f)(v,{show:c,onHide:n,title:Object(g.f)("span",null,Object(h.e)("Edit Dataset "),Object(g.f)("strong",null,o.table_name)),footer:Object(g.f)(r.a.Fragment,null,Object(f.c)(f.a.ENABLE_REACT_CRUD_VIEWS)&&Object(g.f)(d.a,{buttonSize:"small",buttonStyle:"default",className:"m-r-5",onClick:()=>{window.location.href=o.edit_url||o.url}},Object(h.e)("Use legacy datasource editor")),Object(g.f)(d.a,{buttonSize:"small",className:"m-r-5",onClick:n},Object(h.e)("Cancel")),Object(g.f)(d.a,{buttonSize:"small",buttonStyle:"primary",onClick:()=>{C.current=_.confirm({title:Object(h.e)("Confirm save"),content:Object(g.f)("div",null,Object(g.f)(i.a,{css:e=>({marginTop:4*e.gridUnit,marginBottom:4*e.gridUnit}),type:"warning",showIcon:!0,message:Object(h.e)("The dataset configuration exposed here\n                affects all the charts using this dataset.\n                Be mindful that changing settings\n                here may affect other charts\n                in undesirable ways.")}),Object(h.e)("Are you sure you want to save and apply changes?")),onOk:$,icon:null})},disabled:S||m.length>0},Object(h.e)("Save"))),responsive:!0},Object(g.f)(y,{showLoadingForImport:!0,height:500,datasource:o,onChange:(e,t)=>{var a;b({...e,metrics:null==e?void 0:s()(a=e.metrics).call(a,e=>({...e,is_certified:(null==e?void 0:e.certified_by)||(null==e?void 0:e.certification_details)}))}),j(t)}}),N)})},1257:function(e,t,a){"use strict";var n=a(0),s=a.n(n),c=a(53),o=a(45),l=a(1);t.a=({onClick:e,tooltipContent:t})=>{const a=s.a.forwardRef((e,t)=>Object(l.f)(o.a,e));return Object(l.f)(c.a,{title:t},Object(l.f)(a,{role:"button",onClick:e,name:"refresh",css:e=>({cursor:"pointer",color:e.colors.grayscale.base,"&:hover":{color:e.colors.primary.base}})}))}},1707:function(e,t,a){"use strict";var n=a(0),s=a.n(n),c=a(15),o=a(51),l=a(45),r=a(53),i=a(1);t.a=function({certifiedBy:e,details:t,size:a=24}){return Object(i.f)(r.a,{id:"certified-details-tooltip",title:Object(i.f)(s.a.Fragment,null,e&&Object(i.f)("div",null,Object(c.e)("Certified by %s",e)),Object(i.f)("div",null,t))},Object(i.f)(l.a,{color:o.d.colors.primary.base,height:a,width:a,name:"certified"}))}},1708:function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));a(39);var n=a(34),s=a.n(n),c=a(63),o=a.n(c),l=a(11),r=a.n(l),i=a(0),d=a(51),b=a(68),u=a(15),h=a(104),p=a.n(h),m=a(76),f=a(126),O=a(1257),j=a(810),g=a(1);const y=d.c.p`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
`,v=d.c.div`
  .fa-refresh {
    padding-left: 9px;
  }

  .refresh-col {
    display: flex;
    align-items: center;
    width: 30px;
    margin-left: ${({theme:e})=>e.gridUnit}px;
  }

  .section {
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
  }

  .select {
    flex-grow: 1;
  }
`,w=d.c.span`
  display: inline-flex;
  align-items: center;
`;function S({dbId:e,formMode:t=!1,getDbList:a,getTableList:n,handleError:c,isDatabaseSelectEnabled:l=!0,onChange:d,onDbChange:h,onSchemaChange:S,onSchemasLoad:x,readOnly:C=!1,schema:_,sqlLabMode:N=!1}){const[$,D]=Object(i.useState)(e),[E,k]=Object(i.useState)(_),[T,I]=Object(i.useState)(!1),[R,A]=Object(i.useState)([]);function z(t,a=!1){const n=t||e;if(n){I(!0);const e=`/api/v1/database/${n}/schemas/?q=${p.a.encode({force:Boolean(a)})}`;return b.a.get({endpoint:e}).then(({json:e})=>{var t;const a=r()(t=e.result).call(t,e=>({value:e,label:e,title:e}));A(a),I(!1),x&&x(a)}).catch(()=>{A([]),I(!1),c(Object(u.e)("Error while fetching schema list"))})}return o.a.resolve()}function L({dbId:e,schema:t}){D(e),k(t),d&&d({dbId:e,schema:t,tableName:void 0})}function U(e){var t;return a&&a(e.result),0===e.result.length&&c(Object(u.e)("It seems you don't have access to any database")),r()(t=e.result).call(t,e=>({...e,label:`${e.backend} ${e.database_name}`}))}function H(e,t=!1){const a=e?e.id:null;A([]),S&&S(null),h&&h(e),z(a,t),L({dbId:a,schema:void 0})}function B(e){return Object(g.f)(w,{title:e.database_name},Object(g.f)(f.a,{type:"default"},e.backend)," ",e.database_name)}function q(e,t){return Object(g.f)("div",{className:"section"},Object(g.f)("span",{className:"select"},e),Object(g.f)("span",{className:"refresh-col"},t))}return Object(i.useEffect)(()=>{$&&z($)},[$]),Object(g.f)(v,null,t&&Object(g.f)(y,null,Object(u.e)("datasource")),function(){const e=p.a.encode({order_columns:"database_name",order_direction:"asc",page:0,page_size:-1,...t||!N?{}:{filters:[{col:"expose_in_sqllab",opr:"eq",value:!0}]}});return q(Object(g.f)(j.a,{dataEndpoint:`/api/v1/database/?q=${e}`,onChange:e=>H(e),onAsyncError:()=>c(Object(u.e)("Error while fetching database list")),clearable:!1,value:$,valueKey:"id",valueRenderer:e=>Object(g.f)("div",null,Object(g.f)("span",{className:"text-muted m-r-5"},Object(u.e)("Database:")),B(e)),optionRenderer:B,mutator:U,placeholder:Object(u.e)("Select a database"),autoSelect:!0,isDisabled:!l||C}),null)}(),t&&Object(g.f)(y,null,Object(u.e)("schema")),function(){const a=s()(R).call(R,({value:e})=>E===e),c=!t&&!C&&Object(g.f)(O.a,{onClick:()=>H({id:e},!0),tooltipContent:Object(u.e)("Force refresh schema list")});return q(Object(g.f)(m.f,{name:"select-schema",placeholder:Object(u.e)("Select a schema (%s)",R.length),options:R,value:a,valueRenderer:e=>Object(g.f)("div",null,Object(g.f)("span",{className:"text-muted"},Object(u.e)("Schema:"))," ",e.label),isLoading:T,autosize:!1,onChange:e=>function(e,t=!1){const a=e?e.value:null;S&&S(a),k(a),L({dbId:$,schema:a}),n&&n($,a,t)}(e),isDisabled:C}),c)}())}},1712:function(e,t,a){"use strict";a(39);var n=a(63),s=a.n(n),c=a(11),o=a.n(c),l=a(0),r=a(51),i=a(68),d=a(15),b=a(76),u=a(95),h=a(1708),p=a(1257),m=a(1707),f=a(1);const O=r.c.p`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
`,j=r.c.div`
  .fa-refresh {
    padding-left: 9px;
  }

  .refresh-col {
    display: flex;
    align-items: center;
    width: 30px;
    margin-left: ${({theme:e})=>e.gridUnit}px;
  }

  .section {
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
  }

  .select {
    flex-grow: 1;
  }

  .divider {
    border-bottom: 1px solid ${({theme:e})=>e.colors.secondary.light5};
    margin: 15px 0;
  }
`,g=r.c.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  > svg,
  > small {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`;t.a=({database:e,dbId:t,formMode:a=!1,getDbList:n,handleError:c,isDatabaseSelectEnabled:r=!0,onChange:y,onDbChange:v,onSchemaChange:w,onSchemasLoad:S,onTableChange:x,onTablesLoad:C,readOnly:_=!1,schema:N,sqlLabMode:$=!0,tableName:D,tableNameSticky:E=!0})=>{const[k,T]=Object(l.useState)(N),[I,R]=Object(l.useState)(D),[A,z]=Object(l.useState)(!1),[L,U]=Object(l.useState)([]);function H(e,a,n=!1,l="undefined"){const r=a||k,b=e||t;if(b&&r){const e=encodeURIComponent(r),t=encodeURIComponent(l);z(!0),U([]);const a=encodeURI(`/superset/tables/${b}/${e}/${t}/${!!n}/`);return i.a.get({endpoint:a}).then(({json:e})=>{var t;const a=o()(t=e.options).call(t,e=>({value:e.value,schema:e.schema,label:e.label,title:e.title,type:e.type,extra:null==e?void 0:e.extra}));z(!1),U(a),C&&C(e.options)}).catch(()=>{z(!1),U([]),c(Object(d.e)("Error while fetching table list"))})}return z(!1),U([]),s.a.resolve()}function B({dbId:e,schema:t,tableName:a}){R(a),T(t),y&&y({dbId:e,schema:t,tableName:a})}function q(e="undefined"){if(!t||!e){const e=[];return s.a.resolve({options:e})}const a=encodeURIComponent(N||""),n=encodeURIComponent(e);return i.a.get({endpoint:encodeURI(`/superset/tables/${t}/${a}/${n}`)}).then(({json:e})=>{var t;return{options:o()(t=e.options).call(t,e=>({value:e.value,schema:e.schema,label:e.label,title:e.title,type:e.type}))}})}function P(e){if(!e)return void R("");const a=e.schema,n=e.value;E&&B({dbId:t,schema:a,tableName:n}),x&&x(n,a)}function F(e){var t;return Object(f.f)(g,{title:e.label},Object(f.f)("small",{className:"text-muted"},Object(f.f)("i",{className:`fa fa-${"view"===e.type?"eye":"table"}`})),(null==(t=e.extra)?void 0:t.certification)&&Object(f.f)(m.a,{certifiedBy:e.extra.certification.certified_by,details:e.extra.certification.details,size:20}),e.label)}return Object(l.useEffect)(()=>{t&&N&&H()},[t,N]),Object(f.f)(j,null,Object(f.f)(h.a,{dbId:t,formMode:a,getDbList:n,getTableList:H,handleError:c,onChange:B,onDbChange:_?void 0:v,onSchemaChange:_?void 0:w,onSchemasLoad:S,schema:k,sqlLabMode:$,isDatabaseSelectEnabled:r&&!_,readOnly:_}),!a&&Object(f.f)("div",{className:"divider"}),$&&Object(f.f)("div",{className:"section"},Object(f.f)(u.a,null,Object(d.e)("See table schema")," ",N&&Object(f.f)("small",null,L.length," in",Object(f.f)("i",null,N)))),a&&Object(f.f)(O,null,Object(d.e)("Table")),function(){const n=L;let s=null;if(k&&!a)s=Object(f.f)(b.f,{name:"select-table",isLoading:A,ignoreAccents:!1,placeholder:Object(d.e)("Select table or type table name"),autosize:!1,onChange:P,options:n,value:I,optionRenderer:F,valueRenderer:F,isDisabled:_});else if(a)s=Object(f.f)(b.c,{name:"select-table",isLoading:A,ignoreAccents:!1,placeholder:Object(d.e)("Select table or type table name"),autosize:!1,onChange:P,options:n,value:I,optionRenderer:F});else{let t,a=!1;e&&e.allow_multi_schema_metadata_fetch?t=Object(d.e)("Type to search ..."):(t=Object(d.e)("Select table "),a=!0),s=Object(f.f)(b.b,{name:"async-select-table",placeholder:t,isDisabled:a,autosize:!1,onChange:P,value:I,loadOptions:q,optionRenderer:F})}return function(e,t){return Object(f.f)("div",{className:"section"},Object(f.f)("span",{className:"select"},e),Object(f.f)("span",{className:"refresh-col"},t))}(s,!a&&!_&&Object(f.f)(p.a,{onClick:()=>function(e,a=!1){const n=e?e.value:null;w&&w(n),B({dbId:t,schema:n,tableName:void 0}),H(t,k,a)}({value:N},!0),tooltipContent:Object(d.e)("Force refresh table list")}))}())}},4544:function(e,t,a){"use strict";a(39);var n=a(11),s=a.n(n),c=a(0),o=a.n(c),l=a(51),r=a(15),i=a(45),d=a(100),b=a(518),u=a(1);Object(l.c)(i.a)`
  margin: auto ${({theme:e})=>2*e.gridUnit}px auto 0;
`;const h=l.c.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,p=l.c.div`
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
`;t.a=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:n,addDangerToast:l,addSuccessToast:i,onModelImport:m,show:f,onHide:O,passwordFields:j=[],setPasswordFields:g=(()=>{})})=>{const[y,v]=Object(c.useState)(!0),[w,S]=Object(c.useState)(null),[x,C]=Object(c.useState)({}),[_,N]=Object(c.useState)(!1),[$,D]=Object(c.useState)(!1),E=Object(c.useRef)(null),k=()=>{S(null),g([]),C({}),N(!1),D(!1),E&&E.current&&(E.current.value="")},{state:{alreadyExists:T,passwordsNeeded:I},importResource:R}=Object(b.d)(e,t,e=>{k(),l(e)});Object(c.useEffect)(()=>{g(I)},[I,g]),Object(c.useEffect)(()=>{N(T.length>0)},[T,N]);const A=e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";D(n.toUpperCase()===Object(r.e)("OVERWRITE"))};return y&&f&&v(!1),Object(u.f)(d.b,{name:"model",className:"import-model-modal",disablePrimaryButton:null===w||_&&!$,onHandledPrimaryAction:()=>{null!==w&&R(w,x,$).then(e=>{e&&(i(Object(r.e)("The import was successful")),k(),m())})},onHide:()=>{v(!0),O(),k()},primaryButtonName:_?Object(r.e)("Overwrite"):Object(r.e)("Import"),primaryButtonType:_?"danger":"primary",width:"750px",show:f,title:Object(u.f)("h4",null,Object(r.e)("Import %s",t))},Object(u.f)(p,null,Object(u.f)("div",{className:"control-label"},Object(u.f)("label",{htmlFor:"modelFile"},Object(r.e)("File"),Object(u.f)("span",{className:"required"},"*"))),Object(u.f)("input",{ref:E,name:"modelFile",id:"modelFile",type:"file",accept:".yaml,.json,.yml,.zip",onChange:e=>{const{files:t}=e.target;S(t&&t[0]||null)}})),0===j.length?null:Object(u.f)(o.a.Fragment,null,Object(u.f)("h5",null,"Database passwords"),Object(u.f)(h,null,a),s()(j).call(j,e=>Object(u.f)(p,{key:`password-for-${e}`},Object(u.f)("div",{className:"control-label"},e,Object(u.f)("span",{className:"required"},"*")),Object(u.f)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:x[e],onChange:t=>C({...x,[e]:t.target.value})})))),_?Object(u.f)(o.a.Fragment,null,Object(u.f)(p,null,Object(u.f)("div",{className:"confirm-overwrite"},n),Object(u.f)("div",{className:"control-label"},Object(r.e)('Type "%s" to confirm',Object(r.e)("OVERWRITE"))),Object(u.f)("input",{id:"overwrite",type:"text",onChange:A}))):null)}},4545:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(15);const s={name:Object(n.e)("Data"),tabs:[{name:"Databases",label:Object(n.e)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:Object(n.e)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:Object(n.e)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:Object(n.e)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},4932:function(e,t,a){"use strict";a.r(t);a(39);var n=a(56),s=a.n(n),c=a(48),o=a.n(c),l=a(11),r=a.n(l),i=a(15),d=a(51),b=a(68),u=a(0),h=a.n(u),p=a(104),m=a.n(p),f=a(140),O=a(518),j=a(1254),g=a(1154),y=a(1256),v=a(4529),w=a(902),S=a(4545),x=a(121),C=a(53),_=a(868),N=a(1258),$=a(1707),D=a(4544),E=a(41),k=a(85),T=a.n(k),I=a(770),R=a.n(I),A=a(486),z=a.n(A),L=a(45),U=a(100),H=a(1712),B=a(1);const q=Object(d.c)(L.a)`
  margin: auto ${({theme:e})=>2*e.gridUnit}px auto 0;
`,P=d.c.div`
  padding-bottom: 340px;
  width: 65%;
`;var F=Object(x.a)(({addDangerToast:e,addSuccessToast:t,onDatasetAdd:a,onHide:n,show:s})=>{const[c,o]=Object(u.useState)(""),[l,r]=Object(u.useState)(""),[d,p]=Object(u.useState)(0),[m,O]=Object(u.useState)(!0);return Object(B.f)(U.b,{disablePrimaryButton:m,onHandledPrimaryAction:()=>{b.a.post({endpoint:"/api/v1/dataset/",body:T()({database:d,...c?{schema:c}:{},table_name:l}),headers:{"Content-Type":"application/json"}}).then(({json:e={}})=>{a&&a({id:e.id,...e.result}),t(Object(i.e)("The dataset has been saved")),n()}).catch(Object(f.c)(t=>e(Object(i.e)("Error while saving dataset: %s",t.table_name))))},onHide:n,primaryButtonName:Object(i.e)("Add"),show:s,title:Object(B.f)(h.a.Fragment,null,Object(B.f)(q,{name:"warning-solid"}),Object(i.e)("Add dataset"))},Object(B.f)(P,null,Object(B.f)(H.a,{clearable:!1,dbId:d,formMode:!0,handleError:e,onChange:({dbId:e,schema:t,tableName:a})=>{p(e),O(R()(e)||z()(a)),o(t),r(a)},schema:c,tableName:l})))});const M=Object(i.e)('The passwords for the databases below are needed in order to import them together with the datasets. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),V=Object(i.e)("You are importing one or more datasets that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),J=d.c.div`
  align-items: center;
  display: flex;

  > svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,W=d.c.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;t.default=Object(x.a)(({addDangerToast:e,addSuccessToast:t,user:a})=>{const{state:{loading:n,resourceCount:c,resourceCollection:l,bulkSelectEnabled:d},hasPerm:p,fetchData:x,toggleBulkSelect:k,refreshData:T}=Object(O.e)("dataset",Object(i.e)("dataset"),e),[I,R]=Object(u.useState)(!1),[A,z]=Object(u.useState)(null),[L,U]=Object(u.useState)(null),[H,q]=Object(u.useState)(!1),[P,Q]=Object(u.useState)([]),K=()=>{q(!0)},X=p("can_write"),Y=p("can_write"),G=p("can_write"),Z=p("can_read"),ee=[{id:"changed_on_delta_humanized",desc:!0}],te=Object(u.useCallback)(({id:t})=>{b.a.get({endpoint:`/api/v1/dataset/${t}`}).then(({json:e={}})=>{var t;const a=r()(t=e.result.owners).call(t,e=>e.id);U({...e.result,owners:a})}).catch(()=>{e(Object(i.e)("An error occurred while fetching dataset related data"))})},[e]),ae=Object(u.useMemo)(()=>[{Cell:({row:{original:{kind:e}}})=>"physical"===e?Object(B.f)(C.a,{id:"physical-dataset-tooltip",title:Object(i.e)("Physical dataset")},Object(B.f)(_.a.DatasetPhysical,null)):Object(B.f)(C.a,{id:"virtual-dataset-tooltip",title:Object(i.e)("Virtual dataset")},Object(B.f)(_.a.DatasetVirtual,null)),accessor:"kind_icon",disableSortBy:!0,size:"xs"},{Cell:({row:{original:{extra:e,table_name:t,explore_url:a}}})=>{const n=Object(B.f)("a",{href:a},t);try{const t=JSON.parse(e);return null!=t&&t.certification?Object(B.f)(J,null,Object(B.f)($.a,{certifiedBy:t.certification.certified_by,details:t.certification.details}),n):n}catch{return n}},Header:Object(i.e)("Name"),accessor:"table_name"},{Cell:({row:{original:{kind:e}}})=>{var t;return(null==(t=e[0])?void 0:t.toUpperCase())+o()(e).call(e,1)},Header:Object(i.e)("Type"),accessor:"kind",disableSortBy:!0,size:"md"},{Header:Object(i.e)("Source"),accessor:"database.database_name",size:"lg"},{Header:Object(i.e)("Schema"),accessor:"schema",size:"lg"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>Object(B.f)("span",{className:"no-wrap"},e),Header:Object(i.e)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:{changed_by_name:e}}})=>e,Header:Object(i.e)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{accessor:"database",disableSortBy:!0,hidden:!0},{Cell:({row:{original:{owners:e=[],table_name:t}}})=>Object(B.f)(N.a,{users:e}),Header:Object(i.e)("Owners"),id:"owners",disableSortBy:!0,size:"lg"},{accessor:"sql",hidden:!0,disableSortBy:!0},{Cell:({row:{original:e}})=>X||Y||Z?Object(B.f)(W,{className:"actions"},Y&&Object(B.f)(C.a,{id:"delete-action-tooltip",title:Object(i.e)("Delete"),placement:"bottom"},Object(B.f)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,b.a.get({endpoint:`/api/v1/dataset/${t.id}/related_objects`}).then(({json:e={}})=>{z({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count})}).catch(Object(f.c)(e=>Object(i.e)("An error occurred while fetching dataset related data: %s",e)));var t}},Object(B.f)(_.a.Trash,null))),Z&&Object(B.f)(C.a,{id:"export-action-tooltip",title:Object(i.e)("Export"),placement:"bottom"},Object(B.f)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>oe([e])},Object(B.f)(_.a.Share,null))),X&&Object(B.f)(C.a,{id:"edit-action-tooltip",title:Object(i.e)("Edit"),placement:"bottom"},Object(B.f)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>te(e)},Object(B.f)(_.a.EditAlt,null)))):null,Header:Object(i.e)("Actions"),id:"actions",hidden:!X&&!Y,disableSortBy:!0}],[X,Y,Z,te]),ne=Object(u.useMemo)(()=>[{Header:Object(i.e)("Owner"),id:"owners",input:"select",operator:"rel_m_m",unfilteredLabel:"All",fetchSelects:Object(f.e)("dataset","owners",Object(f.c)(e=>Object(i.e)("An error occurred while fetching dataset owner values: %s",e)),a.userId),paginate:!0},{Header:Object(i.e)("Database"),id:"database",input:"select",operator:"rel_o_m",unfilteredLabel:"All",fetchSelects:Object(f.e)("dataset","database",Object(f.c)(e=>Object(i.e)("An error occurred while fetching datasets: %s",e))),paginate:!0},{Header:Object(i.e)("Schema"),id:"schema",input:"select",operator:"eq",unfilteredLabel:"All",fetchSelects:Object(f.d)("dataset","schema",Object(f.c)(e=>Object(i.e)("An error occurred while fetching schema values: %s",e))),paginate:!0},{Header:Object(i.e)("Type"),id:"sql",input:"select",operator:"dataset_is_null_or_empty",unfilteredLabel:"All",selects:[{label:"Virtual",value:!1},{label:"Physical",value:!0}]},{Header:Object(i.e)("Search"),id:"table_name",input:"search",operator:"ct"}],[]),se={activeChild:"Datasets",...S.a},ce=[];(Y||Z)&&ce.push({name:Object(i.e)("Bulk select"),onClick:k,buttonStyle:"secondary"}),G&&ce.push({name:Object(B.f)(h.a.Fragment,null,Object(B.f)("i",{className:"fa fa-plus"})," ",Object(i.e)("Dataset")," "),onClick:()=>R(!0),buttonStyle:"primary"}),Object(E.c)(E.a.VERSIONED_EXPORT)&&ce.push({name:Object(B.f)(_.a.Import,null),buttonStyle:"link",onClick:K}),se.buttons=ce;const oe=e=>window.location.assign(`/api/v1/dataset/export/?q=${m.a.encode(r()(e).call(e,({id:e})=>e))}`);return Object(B.f)(h.a.Fragment,null,Object(B.f)(w.a,se),Object(B.f)(F,{show:I,onHide:()=>R(!1),onDatasetAdd:T}),A&&Object(B.f)(y.a,{description:Object(i.e)("The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.",A.table_name,A.chart_count,A.dashboard_count),onConfirm:()=>{A&&(({id:a,table_name:n})=>{b.a.delete({endpoint:`/api/v1/dataset/${a}`}).then(()=>{T(),z(null),t(Object(i.e)("Deleted: %s",n))},Object(f.c)(t=>e(Object(i.e)("There was an issue deleting %s: %s",n,t))))})(A)},onHide:()=>{z(null)},open:!0,title:Object(i.e)("Delete Dataset?")}),L&&Object(B.f)(g.a,{datasource:L,onDatasourceSave:T,onHide:()=>{U(null)},show:!0}),Object(B.f)(j.a,{title:Object(i.e)("Please confirm"),description:Object(i.e)("Are you sure you want to delete the selected datasets?"),onConfirm:a=>{b.a.delete({endpoint:`/api/v1/dataset/?q=${m.a.encode(r()(a).call(a,({id:e})=>e))}`}).then(({json:e={}})=>{T(),t(e.message)},Object(f.c)(t=>e(Object(i.e)("There was an issue deleting the selected datasets: %s",t))))}},e=>{const t=[];return Y&&t.push({key:"delete",name:Object(i.e)("Delete"),onSelect:e,type:"danger"}),Z&&t.push({key:"export",name:Object(i.e)("Export"),type:"primary",onSelect:oe}),Object(B.f)(v.b,{className:"dataset-list-view",columns:ae,data:l,count:c,pageSize:25,fetchData:x,filters:ne,loading:n,initialSort:ee,bulkActions:t,bulkSelectEnabled:d,disableBulkSelect:k,renderBulkSelectCopy:e=>{const{virtualCount:t,physicalCount:a}=s()(e).call(e,(e,t)=>("physical"===t.original.kind?e.physicalCount+=1:"virtual"===t.original.kind&&(e.virtualCount+=1),e),{virtualCount:0,physicalCount:0});return e.length?t&&!a?Object(i.e)("%s Selected (Virtual)",e.length,t):a&&!t?Object(i.e)("%s Selected (Physical)",e.length,a):Object(i.e)("%s Selected (%s Physical, %s Virtual)",e.length,a,t):Object(i.e)("0 Selected")}})}),Object(B.f)(D.a,{resourceName:"dataset",resourceLabel:Object(i.e)("dataset"),passwordsNeededMessage:M,confirmOverwriteMessage:V,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{q(!1),T()},show:H,onHide:()=>{q(!1)},passwordFields:P,setPasswordFields:Q}))})},810:function(e,t,a){"use strict";var n=a(31),s=a.n(n),c=a(12),o=a.n(c),l=a(0),r=a.n(l),i=a(2),d=a.n(i),b=a(76),u=a(15),h=a(68),p=a(71),m=a(1);const f={dataEndpoint:d.a.string.isRequired,onChange:d.a.func.isRequired,mutator:d.a.func.isRequired,onAsyncError:d.a.func,value:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),valueRenderer:d.a.func,placeholder:d.a.string,autoSelect:d.a.bool},O={placeholder:Object(u.e)("Select ..."),onAsyncError:()=>{}};class j extends r.a.PureComponent{constructor(e){var t;super(e),this.state={isLoading:!1,options:[]},this.onChange=o()(t=this.onChange).call(t,this)}componentDidMount(){this.fetchOptions()}onChange(e){this.props.onChange(e)}fetchOptions(){this.setState({isLoading:!0});const{mutator:e,dataEndpoint:t}=this.props;return h.a.get({endpoint:t}).then(({json:t})=>{const a=e?e(t):t;this.setState({options:a,isLoading:!1}),!this.props.value&&this.props.autoSelect&&a.length>0&&this.onChange(a[0])}).catch(e=>Object(p.a)(e).then(e=>{this.props.onAsyncError(e.error||e.statusText||e),this.setState({isLoading:!1})}))}render(){return Object(m.f)(b.f,s()({placeholder:this.props.placeholder,options:this.state.options,value:this.props.value,isLoading:this.state.isLoading,onChange:this.onChange,valueRenderer:this.props.valueRenderer},this.props))}}j.propTypes=f,j.defaultProps=O,t.a=j}}]);