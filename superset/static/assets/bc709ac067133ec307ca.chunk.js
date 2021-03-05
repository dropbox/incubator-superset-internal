(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1246:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(2),s=a.n(l),o=a(54),i=(a(2105),a(1));const r={onClick:s.a.func,tooltipContent:s.a.string.isRequired};class d extends c.a.PureComponent{render(){return Object(i.f)(o.a,{title:this.props.tooltipContent,id:"cache-desc-tooltip"},Object(i.f)("i",{"aria-label":"Icon",role:"button",tabIndex:0,className:"RefreshLabel fa fa-refresh pointer",onClick:this.props.onClick}))}}d.propTypes=r,t.a=d},1699:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(16),s=a(51),o=a(46),i=a(54),r=a(1);t.a=function({certifiedBy:e,details:t,size:a=24}){return Object(r.f)(i.a,{id:"certified-details-tooltip",title:Object(r.f)(c.a.Fragment,null,e&&Object(r.f)("div",null,Object(l.e)("Certified by %s",e)),Object(r.f)("div",null,t))},Object(r.f)(o.a,{color:s.d.colors.primary.base,height:a,width:a,name:"certified"}))}},1700:function(e,t,a){"use strict";a(40);var n=a(66),c=a.n(n),l=a(11),s=a.n(l),o=a(0),i=a(51),r=a(68),d=a(16),b=a(75),f=a(94),u=a(1701),p=a(1246),h=a(1699),m=a(1);const O=i.c.p`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
`,j=i.c.div`
  .fa-refresh {
    padding-left: 9px;
  }

  .refresh-col {
    display: flex;
    align-items: center;
    width: 30px;
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
`,g=i.c.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  > svg,
  > small {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`;t.a=({database:e,dbId:t,formMode:a=!1,getDbList:n,handleError:l,isDatabaseSelectEnabled:i=!0,onChange:v,onDbChange:x,onSchemaChange:y,onSchemasLoad:C,onTableChange:S,onTablesLoad:w,readOnly:I=!1,schema:N,sqlLabMode:$=!0,tableName:L,tableNameSticky:R=!0})=>{const[D,_]=Object(o.useState)(N),[E,z]=Object(o.useState)(L),[k,q]=Object(o.useState)(!1),[T,U]=Object(o.useState)([]);function M(e,a,n=!1,o="undefined"){const i=a||D,b=e||t;if(b&&i){const e=encodeURIComponent(i),t=encodeURIComponent(o);q(!0),U([]);const a=encodeURI(`/superset/tables/${b}/${e}/${t}/${!!n}/`);return r.a.get({endpoint:a}).then(({json:e})=>{var t;const a=s()(t=e.options).call(t,e=>({value:e.value,schema:e.schema,label:e.label,title:e.title,type:e.type,extra:null==e?void 0:e.extra}));q(!1),U(a),w&&w(e.options)}).catch(()=>{q(!1),U([]),l(Object(d.e)("Error while fetching table list"))})}return q(!1),U([]),c.a.resolve()}function A({dbId:e,schema:t,tableName:a}){z(a),_(t),v&&v({dbId:e,schema:t,tableName:a})}function B(e="undefined"){if(!t||!e){const e=[];return c.a.resolve({options:e})}const a=encodeURIComponent(N||""),n=encodeURIComponent(e);return r.a.get({endpoint:encodeURI(`/superset/tables/${t}/${a}/${n}`)}).then(({json:e})=>{var t;return{options:s()(t=e.options).call(t,e=>({value:e.value,schema:e.schema,label:e.label,title:e.title,type:e.type}))}})}function F(e){if(!e)return void z("");const a=e.schema,n=e.value;R&&A({dbId:t,schema:a,tableName:n}),S&&S(n,a)}function J(e){var t;return Object(m.f)(g,{title:e.label},Object(m.f)("small",{className:"text-muted"},Object(m.f)("i",{className:`fa fa-${"view"===e.type?"eye":"table"}`})),(null==(t=e.extra)?void 0:t.certification)&&Object(m.f)(h.a,{certifiedBy:e.extra.certification.certified_by,details:e.extra.certification.details,size:20}),e.label)}return Object(o.useEffect)(()=>{t&&N&&M()},[t,N]),Object(m.f)(j,null,Object(m.f)(u.a,{dbId:t,formMode:a,getDbList:n,getTableList:M,handleError:l,onChange:A,onDbChange:I?void 0:x,onSchemaChange:I?void 0:y,onSchemasLoad:C,schema:D,sqlLabMode:$,isDatabaseSelectEnabled:i&&!I,readOnly:I}),!a&&Object(m.f)("div",{className:"divider"}),$&&Object(m.f)("div",{className:"section"},Object(m.f)(f.a,null,Object(d.e)("See table schema")," ",N&&Object(m.f)("small",null,T.length," in",Object(m.f)("i",null,N)))),a&&Object(m.f)(O,null,Object(d.e)("Table")),function(){const n=T;let c=null;if(D&&!a)c=Object(m.f)(b.f,{name:"select-table",isLoading:k,ignoreAccents:!1,placeholder:Object(d.e)("Select table or type table name"),autosize:!1,onChange:F,options:n,value:E,optionRenderer:J,valueRenderer:J,isDisabled:I});else if(a)c=Object(m.f)(b.c,{name:"select-table",isLoading:k,ignoreAccents:!1,placeholder:Object(d.e)("Select table or type table name"),autosize:!1,onChange:F,options:n,value:E,optionRenderer:J});else{let t,a=!1;e&&e.allow_multi_schema_metadata_fetch?t=Object(d.e)("Type to search ..."):(t=Object(d.e)("Select table "),a=!0),c=Object(m.f)(b.b,{name:"async-select-table",placeholder:t,isDisabled:a,autosize:!1,onChange:F,value:E,loadOptions:B,optionRenderer:J})}return function(e,t){return Object(m.f)("div",{className:"section"},Object(m.f)("span",{className:"select"},e),Object(m.f)("span",{className:"refresh-col"},t))}(c,!a&&!I&&Object(m.f)(p.a,{onClick:()=>function(e,a=!1){const n=e?e.value:null;y&&y(n),A({dbId:t,schema:n,tableName:void 0}),M(t,D,a)}({value:N},!0),tooltipContent:Object(d.e)("Force refresh table list")}))}())}},1701:function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));a(40);var n=a(34),c=a.n(n),l=a(66),s=a.n(l),o=a(11),i=a.n(o),r=a(0),d=a(51),b=a(68),f=a(16),u=a(96),p=a.n(u),h=a(75),m=a(124),O=a(803),j=a(1246),g=a(1);const v=d.c.p`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
`,x=d.c.div`
  .fa-refresh {
    padding-left: 9px;
  }

  .refresh-col {
    display: flex;
    align-items: center;
    width: 30px;
  }

  .section {
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
  }

  .select {
    flex-grow: 1;
  }
`,y=d.c.span`
  display: inline-flex;
  align-items: center;
`;function C({dbId:e,formMode:t=!1,getDbList:a,getTableList:n,handleError:l,isDatabaseSelectEnabled:o=!0,onChange:d,onDbChange:u,onSchemaChange:C,onSchemasLoad:S,readOnly:w=!1,schema:I,sqlLabMode:N=!1}){const[$,L]=Object(r.useState)(e),[R,D]=Object(r.useState)(I),[_,E]=Object(r.useState)(!1),[z,k]=Object(r.useState)([]);function q(t,a=!1){const n=t||e;if(n){E(!0);const e=`/api/v1/database/${n}/schemas/?q=${p.a.encode({force:Boolean(a)})}`;return b.a.get({endpoint:e}).then(({json:e})=>{var t;const a=i()(t=e.result).call(t,e=>({value:e,label:e,title:e}));k(a),E(!1),S&&S(a)}).catch(()=>{k([]),E(!1),l(Object(f.e)("Error while fetching schema list"))})}return s.a.resolve()}function T({dbId:e,schema:t}){L(e),D(t),d&&d({dbId:e,schema:t,tableName:void 0})}function U(e){var t;return a&&a(e.result),0===e.result.length&&l(Object(f.e)("It seems you don't have access to any database")),i()(t=e.result).call(t,e=>({...e,label:`${e.backend} ${e.database_name}`}))}function M(e,t=!1){const a=e?e.id:null;k([]),C&&C(null),u&&u(e),q(a,t),T({dbId:a,schema:void 0})}function A(e){return Object(g.f)(y,{title:e.database_name},Object(g.f)(m.a,{type:"default"},e.backend)," ",e.database_name)}function B(e,t){return Object(g.f)("div",{className:"section"},Object(g.f)("span",{className:"select"},e),Object(g.f)("span",{className:"refresh-col"},t))}return Object(r.useEffect)(()=>{$&&q($)},[$]),Object(g.f)(x,null,t&&Object(g.f)(v,null,Object(f.e)("datasource")),function(){const e=p.a.encode({order_columns:"database_name",order_direction:"asc",page:0,page_size:-1,...t||!N?{}:{filters:[{col:"expose_in_sqllab",opr:"eq",value:!0}]}});return B(Object(g.f)(O.a,{dataEndpoint:`/api/v1/database/?q=${e}`,onChange:e=>M(e),onAsyncError:()=>l(Object(f.e)("Error while fetching database list")),clearable:!1,value:$,valueKey:"id",valueRenderer:e=>Object(g.f)("div",null,Object(g.f)("span",{className:"text-muted m-r-5"},Object(f.e)("Database:")),A(e)),optionRenderer:A,mutator:U,placeholder:Object(f.e)("Select a database"),autoSelect:!0,isDisabled:!o||w}),null)}(),t&&Object(g.f)(v,null,Object(f.e)("schema")),function(){const a=c()(z).call(z,({value:e})=>R===e),l=!t&&!w&&Object(g.f)(j.a,{onClick:()=>M({id:e},!0),tooltipContent:Object(f.e)("Force refresh schema list")});return B(Object(g.f)(h.f,{name:"select-schema",placeholder:Object(f.e)("Select a schema (%s)",z.length),options:z,value:a,valueRenderer:e=>Object(g.f)("div",null,Object(g.f)("span",{className:"text-muted"},Object(f.e)("Schema:"))," ",e.label),isLoading:_,autosize:!1,onChange:e=>function(e,t=!1){const a=e?e.value:null;C&&C(a),D(a),T({dbId:$,schema:a}),n&&n($,a,t)}(e),isDisabled:w}),l)}())}},2105:function(e,t,a){}}]);