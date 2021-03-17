(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{195:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(31),l=a.n(n),o=a(118),i=(a(0),a(25)),r=a(51),c=a(45),s=a(1);function d(e){const{type:t="info",description:a,showIcon:n=!0,closable:d=!0,children:u}=e,g=Object(r.e)(),{colors:p,typography:b}=g,{alert:f,error:h,info:m,success:v}=p;let O=m,x="info-solid";return"error"===t?(O=h,x="error-solid"):"warning"===t?(O=f,x="alert-solid"):"success"===t&&(O=v,x="circle-check-solid"),Object(s.f)(i.a,l()({role:"alert",showIcon:n,icon:Object(s.f)(c.a,{name:x,"aria-label":`${t} icon`}),closeText:d&&Object(s.f)(c.a,{name:"x-small","aria-label":"close icon"}),css:Object(o.a)({padding:"6px 10px",alignItems:"flex-start",border:0,backgroundColor:O.light2,"& .ant-alert-icon":{marginRight:10},"& .ant-alert-message":{color:O.dark2,fontSize:b.sizes.m,fontWeight:a?b.weights.bold:b.weights.normal},"& .ant-alert-description":{color:O.dark2,fontSize:b.sizes.m}},";label:Alert;")},e),u)}},4529:function(e,t,a){"use strict";a.d(t,"a",(function(){return Fe})),a.d(t,"b",(function(){return Pe}));var n=a(11),l=a.n(n),o=a(29),i=a.n(o),r=a(56),c=a.n(r),s=a(31),d=a.n(s),u=a(51),g=a(15),p=a(0),b=a.n(p),f=a(25),h=a(195);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var v=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M83.195 1.366L103 24v38a4 4 0 01-4 4H20a4 4 0 01-4-4V24L35.805 1.366A4 4 0 0138.815 0h41.37a4 4 0 013.01 1.366zM101 26v36a2 2 0 01-2 2H20a2 2 0 01-2-2V26h17.25A4.75 4.75 0 0140 30.75a6.75 6.75 0 006.75 6.75h25.5A6.75 6.75 0 0079 30.75 4.75 4.75 0 0183.75 26H101zm-.658-2L81.69 2.683A2 2 0 0080.185 2h-41.37a2 2 0 00-1.505.683L18.657 24H35.25A6.75 6.75 0 0142 30.75a4.75 4.75 0 004.75 4.75h25.5A4.75 4.75 0 0077 30.75 6.75 6.75 0 0183.75 24h16.592z",fill:"#D1D1D1"}),O=p.createElement("path",{d:"M16 53.29C6.074 55.7 0 58.94 0 62.5 0 69.956 26.64 76 59.5 76S119 69.956 119 62.5c0-3.56-6.074-6.799-16-9.21V62a4 4 0 01-4 4H20a4 4 0 01-4-4v-8.71z",fill:"#F2F2F2"});function x(e){return p.createElement("svg",m({width:119,height:76,fill:"none"},e),v,O)}a.p;var j=a(5),y=a.n(j),w=a(42),S=a(45),C=a(4691),k=a(706),$=(a(39),a(1));const I=u.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(459px, 1fr));
  grid-gap: ${({theme:e})=>8*e.gridUnit}px;
`,R=u.c.div`
  border: 2px solid transparent;
  &.card-selected {
    border: 2px solid ${({theme:e})=>e.colors.primary.base};
  }
  &.bulk-select {
    cursor: pointer;
  }
`;function z({bulkSelectEnabled:e,loading:t,prepareRow:a,renderCard:n,rows:o}){var i;return n?Object($.f)(I,null,t&&0===o.length&&l()(i=[...new Array(25)]).call(i,(e,a)=>Object($.f)("div",{key:a},n({loading:t}))),o.length>0&&l()(o).call(o,l=>n?(a(l),Object($.f)(R,{className:y()({"card-selected":e&&l.isSelected,"bulk-select":e}),key:l.id,onClick:t=>{return a=t,n=l.toggleRowSelected,void(e&&(a.preventDefault(),a.stopPropagation(),n()));var a,n},role:"none"},n({...l.original,loading:t}))):null)):null}var F=a(160);const P=u.c.div`
  position: relative;
`,E=u.c.input`
  width: 200px;
  height: ${({theme:e})=>8*e.gridUnit}px;
  background-image: none;
  border: 1px solid ${({theme:e})=>e.colors.secondary.light2};
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  padding: 4px 28px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: none;
  }
`,M="\n  position: absolute;\n  z-index: 2;\n  display: block;\n  cursor: pointer;\n",_=Object(u.c)(S.a)`
  ${M};
  top: 4px;
  left: 2px;
`,T=Object(u.c)(S.a)`
  ${M};
  right: 0px;
  top: 4px;
`;function V({onChange:e,onClear:t,onSubmit:a,placeholder:n="Search",name:l,value:o}){return Object($.f)(P,null,Object($.f)(_,{role:"button",name:"search",onClick:()=>a()}),Object($.f)(E,{onKeyDown:e=>{"Enter"===e.key&&a()},onBlur:()=>a(),placeholder:n,onChange:e,value:o,name:l}),o&&Object($.f)(T,{role:"button",name:"cancel-x",onClick:()=>t()}))}const A=u.c.div`
  display: inline-flex;
  margin-right: 2em;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  align-items: center;
`,N=u.c.label`
  font-weight: bold;
  margin: 0 0.4em 0 0;
`;function U({Header:e,name:t,initialValue:a,onSubmit:n}){const[l,o]=Object(p.useState)(a||"");return Object($.f)(A,null,Object($.f)(V,{placeholder:e,name:t,value:l,onChange:e=>{o(e.currentTarget.value)},onSubmit:()=>{l&&n(l)},onClear:()=>{o(""),n("")}}))}var B=a(60),L=a.n(B),D=a(76),H=a(43),W=a.n(H),q=a(1289),G=a.n(q),J=a(48),K=a.n(J),X=a(34),Q=a.n(X),Y=a(55),Z=a.n(Y),ee=a(287),te=a.n(ee),ae=a(348),ne=a(2068),le=a(104),oe=a.n(le);const ie={encode:e=>void 0===e?void 0:oe.a.encode(e),decode:e=>void 0===e||Z()(e)?void 0:oe.a.decode(e)};class re extends Error{constructor(){super(...arguments),this.name="ListViewError"}}function ce(e,t){return l()(e).call(e,({id:e,urlDisplay:a,operator:n})=>({id:e,urlDisplay:a,operator:n,value:t[a||e]}))}function se(e,t){var a;const n=[],l={};return i()(a=W()(e)).call(a,t=>{const a={id:t,value:e[t]};l[t]=a,n.push(a)}),i()(t).call(t,e=>{const t=e.urlDisplay||e.id,a=l[t];a&&(a.operator=e.operator,a.id=e.id)}),n}function de({fetchData:e,columns:t,data:a,count:n,initialPageSize:o,initialFilters:r=[],initialSort:c=[],bulkSelectMode:s=!1,bulkSelectColumnConfig:d,renderCard:u=!1,defaultViewMode:g="card"}){const[b,f]=Object(ne.d)({filters:ie,pageIndex:ne.a,sortColumn:ne.c,sortOrder:ne.c,viewMode:ne.c}),h=Object(p.useMemo)(()=>b.sortColumn&&b.sortOrder?[{id:b.sortColumn,desc:"desc"===b.sortOrder}]:c,[b.sortColumn,b.sortOrder]),m={filters:b.filters?se(b.filters,r):[],pageIndex:b.pageIndex||0,pageSize:o,sortBy:h},[v,O]=Object(p.useState)(b.viewMode||(u?g:"table")),x=Object(p.useMemo)(()=>{const e=l()(t).call(t,e=>({...e,filter:"exact"}));return s?[d,...e]:e},[s,t]),{getTableProps:j,getTableBodyProps:y,headerGroups:w,rows:S,prepareRow:C,canPreviousPage:k,canNextPage:$,pageCount:I,gotoPage:R,setAllFilters:z,selectedFlatRows:F,toggleAllRowsSelected:P,state:{pageIndex:E,pageSize:M,sortBy:_,filters:T}}=Object(ae.useTable)({columns:x,count:n,data:a,disableFilters:!0,disableSortRemove:!0,initialState:m,manualFilters:!0,manualPagination:!0,manualSortBy:!0,autoResetFilters:!1,pageCount:Math.ceil(n/o)},ae.useFilters,ae.useSortBy,ae.usePagination,ae.useRowState,ae.useRowSelect),[V,A]=Object(p.useState)(b.filters&&r.length?ce(r,b.filters):[]);Object(p.useEffect)(()=>{r.length&&A(ce(r,b.filters?b.filters:{}))},[r]),Object(p.useEffect)(()=>{const t={};i()(V).call(V,e=>{if(void 0!==e.value&&("string"!=typeof e.value||e.value.length>0)){const a=e.urlDisplay||e.id;t[a]=e.value}});const a={filters:W()(t).length?t:void 0,pageIndex:E};_[0]&&(a.sortColumn=_[0].id,a.sortOrder=_[0].desc?"desc":"asc"),u&&(a.viewMode=v);const n=void 0!==b.pageIndex&&a.pageIndex!==b.pageIndex?"push":"replace";f(a,n),e({pageIndex:E,pageSize:M,sortBy:_,filters:T})},[e,E,M,_,T]),Object(p.useEffect)(()=>{te()(m.pageIndex,E)||R(m.pageIndex)},[b]);return{canNextPage:$,canPreviousPage:k,getTableBodyProps:y,getTableProps:j,gotoPage:R,headerGroups:w,pageCount:I,prepareRow:C,rows:S,selectedFlatRows:F,setAllFilters:z,state:{pageIndex:E,pageSize:M,sortBy:_,filters:T,internalFilters:V,viewMode:v},toggleAllRowsSelected:P,applyFilterValue:(e,t)=>{A(a=>{if(a[e].value===t)return a;const n={...a[e],value:t},o=function(e,t,a){const n=L()(e).call(e,(e,a)=>t===a);return[...K()(e).call(e,0,t),{...n,...a},...K()(e).call(e,t+1)]}(a,e,n);var i,r,c;return z((i=o,G()(r=l()(c=Q()(i).call(i,e=>!(void 0===e.value||Z()(e.value)&&!e.value.length))).call(c,({value:e,operator:t,id:a})=>"between"===t&&Z()(e)?[{value:e[0],operator:"gt",id:a},{value:e[1],operator:"lt",id:a}]:{value:e,operator:t,id:a})).call(r))),R(0),o})},setViewMode:O}}const ue={container:(e,{getValue:t})=>({...e,minWidth:`${Math.min(12,Math.max(5,3+t()[0].label.length/2))}em`}),control:e=>({...e,borderWidth:0,boxShadow:"none",cursor:"pointer",backgroundColor:"transparent"})};var ge=Object(F.c)((function({Header:e,emptyLabel:t="None",fetchSelects:a,initialValue:n,onSelect:l,paginate:o=!1,selects:i=[],theme:r}){const c={spacing:{baseUnit:2,fontSize:r.typography.sizes.s,minWidth:"5em"}},s={label:t,value:"CLEAR_SELECT_FILTER_VALUE"},d=[s,...i];let u=s;if(!a){const e=L()(d).call(d,e=>e.value===n);e&&(u=e)}const[g,b]=Object(p.useState)(u),f=e=>{null!==e&&(l("CLEAR_SELECT_FILTER_VALUE"===e.value?void 0:e.value),b(e))};return Object($.f)(A,null,Object($.f)(N,null,e,":"),a?Object($.f)(D.e,{defaultOptions:!0,themeConfig:c,stylesConfig:ue,value:g,onChange:f,loadOptions:async(e,t,{page:l})=>{let i=e||l>0?[]:[s],r=o;if(a){const t=await a(e,l);t.length||(r=!1),i=[...i,...t];const o=L()(i).call(i,e=>e.value===n);o&&b(o)}return{options:i,hasMore:r,additional:{page:l+1}}},placeholder:t,clearable:!1,additional:{page:0}}):Object($.f)(D.f,{themeConfig:c,stylesConfig:ue,value:g,options:d,onChange:f,clearable:!1}))})),pe=a(35),be=a.n(pe),fe=a(4692);const he=Object(u.c)(fe.a)`
  padding: 0 11px;
  transform: translateX(-7px);
`,me=Object(u.c)(A)`
  margin-right: 1em;
`;function ve({Header:e,initialValue:t,onSubmit:a}){const[n,l]=Object(p.useState)(null!=t?t:null),o=Object(p.useMemo)(()=>!n||Z()(n)&&!n.length?null:[be()(n[0]),be()(n[1])],[n]);return Object($.f)(me,null,Object($.f)(N,null,e,":"),Object($.f)(he,{showTime:!0,bordered:!1,value:o,onChange:e=>{var t,n,o,i;if(!e)return l(null),void a([]);const r=[null!=(t=null==(n=e[0])?void 0:n.valueOf())?t:0,null!=(o=null==(i=e[1])?void 0:i.valueOf())?o:0];l(r),a(r)}}))}const Oe=u.c.div`
  display: inline-block;
`;var xe=Object(F.c)((function({filters:e,internalFilters:t=[],updateFilterValue:a}){return Object($.f)(Oe,null,l()(e).call(e,({Header:e,fetchSelects:n,id:l,input:o,paginate:i,selects:r,unfilteredLabel:c},s)=>{const d=t[s]&&t[s].value;return"select"===o?Object($.f)(ge,{Header:e,emptyLabel:c,fetchSelects:n,initialValue:d,key:l,name:l,onSelect:e=>a(s,e),paginate:i,selects:r}):"search"===o&&"string"==typeof e?Object($.f)(U,{Header:e,initialValue:d,key:l,name:l,onSubmit:e=>a(s,e)}):"datetime_range"===o?Object($.f)(ve,{Header:e,initialValue:d,key:l,name:l,onSubmit:e=>a(s,e)}):null}))}));const je=u.c.label`
  font-weight: bold;
  line-height: 27px;
  margin: 0 0.4em 0 0;
`,ye=u.c.div`
  display: inline-flex;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  padding-top: ${({theme:e})=>e.gridUnit}px;
  text-align: left;
`;const we=Object(F.c)((function({onChange:e,options:t,selectStyles:a,theme:n,value:l}){const o={spacing:{baseUnit:1,fontSize:n.typography.sizes.s,minWidth:"5em"}};return Object($.f)(D.f,{clearable:!1,onChange:e,options:t,stylesConfig:a,themeConfig:o,value:l})})),Se=({initialSort:e,onChange:t,options:a,pageIndex:n,pageSize:l})=>{const o=e&&L()(a).call(a,({id:t})=>t===e[0].id),[i,r]=Object(p.useState)(o||a[0]);return Object($.f)(ye,null,Object($.f)(je,null,Object(g.e)("Sort:")),Object($.f)(we,{onChange:e=>(e=>{r(e);const a=[{id:e.id,desc:e.desc}];t({pageIndex:n,pageSize:l,sortBy:a,filters:[]})})(e),options:a,selectStyles:ue,value:i}))},Ce=u.c.div`
  text-align: center;

  .superset-list-view {
    text-align: left;
    border-radius: 4px 0;
    margin: 0 ${({theme:e})=>4*e.gridUnit}px;

    .header {
      display: flex;
      padding-bottom: ${({theme:e})=>4*e.gridUnit}px;

      .header-left {
        display: flex;
        flex: 5;
      }
      .header-right {
        flex: 1;
        text-align: right;
      }
    }

    .body.empty table {
      margin-bottom: 0;
    }

    .body {
      overflow-x: auto;
    }

    .ant-empty {
      .ant-empty-image {
        height: auto;
      }
    }
  }

  .pagination-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  }

  .row-count-container {
    margin-top: ${({theme:e})=>2*e.gridUnit}px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`,ke=Object(u.c)(h.a)`
  border-radius: 0;
  margin-bottom: 0;
  color: #3d3d3d;
  background-color: ${({theme:e})=>e.colors.primary.light4};

  .selectedCopy {
    display: inline-block;
    padding: ${({theme:e})=>2*e.gridUnit}px 0;
  }

  .deselect-all {
    color: #1985a0;
    margin-left: ${({theme:e})=>4*e.gridUnit}px;
  }

  .divider {
    margin: ${({theme:{gridUnit:e}})=>`${2*-e}px 0 ${2*-e}px ${4*e}px`};
    width: 1px;
    height: ${({theme:e})=>8*e.gridUnit}px;
    box-shadow: inset -1px 0px 0px #dadada;
    display: inline-flex;
    vertical-align: middle;
    position: relative;
  }
`,$e={Cell:({row:e})=>Object($.f)(C.a,d()({},e.getToggleRowSelectedProps(),{id:e.id})),Header:({getToggleAllRowsSelectedProps:e})=>Object($.f)(C.a,d()({},e(),{id:"header-toggle-all"})),id:"selection",size:"sm"},Ie=u.c.div`
  padding-right: ${({theme:e})=>4*e.gridUnit}px;
  display: inline-block;

  .toggle-button {
    display: inline-block;
    border-radius: ${({theme:e})=>e.gridUnit/2}px;
    padding: ${({theme:e})=>e.gridUnit}px;
    padding-bottom: 0;

    &:first-of-type {
      margin-right: ${({theme:e})=>2*e.gridUnit}px;
    }
  }

  .active {
    background-color: ${({theme:e})=>e.colors.grayscale.base};
    svg {
      color: ${({theme:e})=>e.colors.grayscale.light5};
    }
  }
`,Re=u.c.div`
  padding: ${({theme:e})=>40*e.gridUnit}px 0;

  &.table {
    background: ${({theme:e})=>e.colors.grayscale.light5};
  }
`,ze=({mode:e,setMode:t})=>Object($.f)(Ie,null,Object($.f)("div",{role:"button",tabIndex:0,onClick:e=>{e.currentTarget.blur(),t("card")},className:y()("toggle-button",{active:"card"===e})},Object($.f)(S.a,{name:"card-view"})),Object($.f)("div",{role:"button",tabIndex:0,onClick:e=>{e.currentTarget.blur(),t("table")},className:y()("toggle-button",{active:"table"===e})},Object($.f)(S.a,{name:"list-view"})));var Fe,Pe=function({columns:e,data:t,count:a,pageSize:n,fetchData:o,loading:r,initialSort:s=[],className:d="",filters:u=[],bulkActions:h=[],bulkSelectEnabled:m=!1,disableBulkSelect:v=(()=>{}),renderBulkSelectCopy:O=(e=>Object(g.e)("%s Selected",e.length)),renderCard:j,cardSortSelectOptions:y,defaultViewMode:S="card",highlightRowId:C,emptyState:I={}}){const{getTableProps:R,getTableBodyProps:F,headerGroups:P,rows:E,prepareRow:M,pageCount:_=1,gotoPage:T,applyFilterValue:V,selectedFlatRows:A,toggleAllRowsSelected:N,setViewMode:U,state:{pageIndex:B,pageSize:L,internalFilters:D,viewMode:H}}=de({bulkSelectColumnConfig:$e,bulkSelectMode:m&&Boolean(h.length),columns:e,count:a,data:t,fetchData:o,initialPageSize:n,initialSort:s,initialFilters:u,renderCard:Boolean(j),defaultViewMode:S}),W=Boolean(u.length);if(W){const t=c()(e).call(e,(e,t)=>({...e,[t.id||t.accessor]:!0}),{});i()(u).call(u,e=>{if(!t[e.id])throw new re(`Invalid filter config, ${e.id} is not present in columns`)})}const q=Boolean(j);return Object(p.useEffect)(()=>{m||N(!1)},[m,N]),Object($.f)(Ce,null,Object($.f)("div",{className:`superset-list-view ${d}`},Object($.f)("div",{className:"header"},Object($.f)("div",{className:"header-left"},q&&Object($.f)(ze,{mode:H,setMode:U}),W&&Object($.f)(xe,{filters:u,internalFilters:D,updateFilterValue:V})),Object($.f)("div",{className:"header-right"},"card"===H&&y&&Object($.f)(Se,{initialSort:s,onChange:o,options:y,pageIndex:B,pageSize:L}))),Object($.f)("div",{className:`body ${0===E.length?"empty":""}`},m&&Object($.f)(ke,{type:"info",closable:!0,showIcon:!1,onClose:v,message:Object($.f)(b.a.Fragment,null,Object($.f)("div",{className:"selectedCopy"},O(A)),Boolean(A.length)&&Object($.f)(b.a.Fragment,null,Object($.f)("span",{role:"button",tabIndex:0,className:"deselect-all",onClick:()=>N(!1)},Object(g.e)("Deselect all")),Object($.f)("div",{className:"divider"}),l()(h).call(h,e=>Object($.f)(w.a,{key:e.key,buttonStyle:e.type,cta:!0,onClick:()=>e.onSelect(l()(A).call(A,e=>e.original))},e.name))))}),"card"===H&&Object($.f)(z,{bulkSelectEnabled:m,prepareRow:M,renderCard:j,rows:E,loading:r}),"table"===H&&Object($.f)(k.b,{getTableProps:R,getTableBodyProps:F,prepareRow:M,headerGroups:P,rows:E,columns:e,loading:r,highlightRowId:C}),!r&&0===E.length&&Object($.f)(Re,{className:H},Object($.f)(f.k,{image:Object($.f)(x,null),description:I.message||Object(g.e)("No Data")},I.slot||null)))),E.length>0&&Object($.f)("div",{className:"pagination-container"},Object($.f)(k.a,{totalPages:_||0,currentPage:_?B+1:0,onChange:e=>T(e-1),hideFirstAndLastPageLinks:!0}),Object($.f)("div",{className:"row-count-container"},!r&&Object(g.e)("%s-%s of %s",L*B+(E.length&&1),L*B+E.length,a))))};!function(e){e.startsWith="sw",e.endsWith="ew",e.contains="ct",e.equals="eq",e.notStartsWith="nsw",e.notEndsWith="new",e.notContains="nct",e.notEquals="neq",e.greaterThan="gt",e.lessThan="lt",e.relationManyMany="rel_m_m",e.relationOneMany="rel_o_m",e.titleOrSlug="title_or_slug",e.nameOrDescription="name_or_description",e.allText="all_text",e.chartAllText="chart_all_text",e.datasetIsNullOrEmpty="dataset_is_null_or_empty",e.between="between",e.dashboardIsFav="dashboard_is_favorite",e.chartIsFav="chart_is_favorite"}(Fe||(Fe={}))},4691:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(51),i=a(45),r=a(1);const c=o.c.label`
  cursor: pointer;
  margin-bottom: 0;
`,s=Object(o.c)(i.a)`
  color: ${({theme:e})=>e.colors.primary.dark1};
`,d=o.c.input`
  visibility: none;
`,u=l.a.forwardRef(({indeterminate:e,id:t,checked:a,onChange:n,title:o=""},u)=>{const g=l.a.useRef(),p=u||g;return l.a.useEffect(()=>{p.current.indeterminate=e},[p,e]),Object(r.f)(c,{title:o},e&&Object(r.f)(s,{name:"checkbox-half"}),!e&&a&&Object(r.f)(s,{name:"checkbox-on"}),!e&&!a&&Object(r.f)(i.a,{name:"checkbox-off"}),Object(r.f)(d,{className:"hidden",name:t,id:t,type:"checkbox",ref:p,checked:a,onChange:n}))});t.a=u},4692:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(25);const{RangePicker:l}=n.h;n.h}}]);