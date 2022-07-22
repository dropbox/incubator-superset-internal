"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8289],{98289:(e,t,a)=>{a.d(t,{p:()=>ie,Z:()=>le});var l,i,n=a(5872),r=a.n(n),o=a(51995),s=a(61988),d=a(67294),c=a(4715),u=a(29487);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},p.apply(this,arguments)}const g=function(e){return d.createElement("svg",p({width:119,height:76,viewBox:"0 0 119 76",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),l||(l=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M83.195 1.366L103 24v38a4 4 0 01-4 4H20a4 4 0 01-4-4V24L35.805 1.366A4 4 0 0138.815 0h41.37a4 4 0 013.01 1.366zM101 26v36a2 2 0 01-2 2H20a2 2 0 01-2-2V26h17.25A4.75 4.75 0 0140 30.75a6.75 6.75 0 006.75 6.75h25.5A6.75 6.75 0 0079 30.75 4.75 4.75 0 0183.75 26H101zm-.658-2L81.69 2.683A2 2 0 0080.185 2h-41.37a2 2 0 00-1.505.683L18.657 24H35.25A6.75 6.75 0 0142 30.75a4.75 4.75 0 004.75 4.75h25.5A4.75 4.75 0 0077 30.75 6.75 6.75 0 0183.75 24h16.592z",fill:"#D1D1D1"})),i||(i=d.createElement("path",{d:"M16 53.29C6.074 55.7 0 58.94 0 62.5 0 69.956 26.64 76 59.5 76S119 69.956 119 62.5c0-3.56-6.074-6.799-16-9.21V62a4 4 0 01-4 4H20a4 4 0 01-4-4v-8.71z",fill:"#F2F2F2"})))};var h=a(94184),m=a.n(h),v=a(35932),f=a(70163),b=a(49576),x=a(64158),y=a(97754),w=a(11965);const S=o.iK.div`
  ${({theme:e,showThumbnails:t})=>`\n    display: grid;\n    grid-gap: ${12*e.gridUnit}px ${4*e.gridUnit}px;\n    grid-template-columns: repeat(auto-fit, 300px);\n    margin-top: ${-6*e.gridUnit}px;\n    padding: ${t?`${8*e.gridUnit+3}px ${9*e.gridUnit}px`:`${8*e.gridUnit+1}px ${9*e.gridUnit}px`};\n  `}
`,Z=o.iK.div`
  border: 2px solid transparent;
  &.card-selected {
    border: 2px solid ${({theme:e})=>e.colors.primary.base};
  }
  &.bulk-select {
    cursor: pointer;
  }
`;function C({bulkSelectEnabled:e,loading:t,prepareRow:a,renderCard:l,rows:i,showThumbnails:n}){return l?(0,w.tZ)(S,{showThumbnails:n},t&&0===i.length&&[...new Array(25)].map(((e,a)=>(0,w.tZ)("div",{key:a},l({loading:t})))),i.length>0&&i.map((i=>l?(a(i),(0,w.tZ)(Z,{className:m()({"card-selected":e&&i.isSelected,"bulk-select":e}),key:i.id,onClick:t=>{return a=t,l=i.toggleRowSelected,void(e&&(a.preventDefault(),a.stopPropagation(),l()));var a,l},role:"none"},l({...i.original,loading:t}))):null))):null}var $=a(68135),k=a(18446),P=a.n(k),I=a(79521),F=a(35755),T=a(15926),M=a.n(T);const U={encode:e=>void 0===e?void 0:M().encode(e).replace(/%/g,"%25").replace(/&/g,"%26").replace(/\+/g,"%2B").replace(/#/g,"%23"),decode:e=>void 0===e||Array.isArray(e)?void 0:M().decode(e)};class A extends Error{constructor(...e){super(...e),this.name="ListViewError"}}function _(e,t){return e.map((({id:e,urlDisplay:a,operator:l})=>({id:e,urlDisplay:a,operator:l,value:t[a||e]})))}function R(e,t){const a=[],l={};return Object.keys(e).forEach((t=>{const i={id:t,value:e[t]};l[t]=i,a.push(i)})),t.forEach((e=>{const t=e.urlDisplay||e.id,a=l[t];a&&(a.operator=e.operator,a.id=e.id)})),a}var V=a(49238);const z=o.iK.div`
  width: ${200}px;
`,B=(0,o.iK)(f.Z.Search)`
  color: ${({theme:e})=>e.colors.grayscale.light1};
`,E=(0,o.iK)(c.oc)`
  border-radius: ${({theme:e})=>e.gridUnit}px;
`;function N({Header:e,name:t,initialValue:a,onSubmit:l}){const[i,n]=(0,d.useState)(a||""),r=()=>{i&&l(i.trim())};return(0,w.tZ)(z,null,(0,w.tZ)(V.lX,null,e),(0,w.tZ)(E,{allowClear:!0,placeholder:(0,s.t)("Type a value"),name:t,value:i,onChange:e=>{n(e.currentTarget.value),""===e.currentTarget.value&&l("")},onPressEnter:r,onBlur:r,prefix:(0,w.tZ)(B,{iconSize:"l"})}))}const O=o.iK.div`
  display: inline-flex;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  align-items: center;
  width: ${200}px;
`,D=function({Header:e,name:t,fetchSelects:a,initialValue:l,onSelect:i,selects:n=[]}){const[r,o]=(0,d.useState)(l),u=(0,d.useMemo)((()=>async(e,t,l)=>{if(a){const i=await a(e,t,l);return{data:i.data,totalCount:i.totalCount}}return{data:[],totalCount:0}}),[a]);return(0,w.tZ)(O,null,(0,w.tZ)(c.Ph,{allowClear:!0,ariaLabel:"string"==typeof e?e:t||(0,s.t)("Filter"),labelInValue:!0,header:(0,w.tZ)(V.lX,null,e),onChange:e=>{i(e?{label:e.label,value:e.value}:void 0),o(e)},onClear:()=>{i(void 0),o(void 0)},options:a?u:n,placeholder:(0,s.t)("Select or type a value"),showSearch:!0,value:r}))};var H=a(30381),K=a.n(H),L=a(62276);const j=o.iK.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 360px;
`;function q({Header:e,initialValue:t,onSubmit:a}){const[l,i]=(0,d.useState)(null!=t?t:null),n=(0,d.useMemo)((()=>!l||Array.isArray(l)&&!l.length?null:[K()(l[0]),K()(l[1])]),[l]);return(0,w.tZ)(j,null,(0,w.tZ)(V.lX,null,e),(0,w.tZ)(L.S,{showTime:!0,value:n,onChange:e=>{var t,l,n,r;if(!e)return i(null),void a([]);const o=[null!=(t=null==(l=e[0])?void 0:l.valueOf())?t:0,null!=(n=null==(r=e[1])?void 0:r.valueOf())?n:0];i(o),a(o)}}))}const G=(0,$.b)((function({filters:e,internalFilters:t=[],updateFilterValue:a}){return(0,w.tZ)(d.Fragment,null,e.map((({Header:e,fetchSelects:l,id:i,input:n,paginate:r,selects:o},s)=>{const d=t[s]&&t[s].value;return"select"===n?(0,w.tZ)(D,{Header:e,fetchSelects:l,initialValue:d,key:i,name:i,onSelect:e=>a(s,e),paginate:r,selects:o}):"search"===n&&"string"==typeof e?(0,w.tZ)(N,{Header:e,initialValue:d,key:i,name:i,onSubmit:e=>a(s,e)}):"datetime_range"===n?(0,w.tZ)(q,{Header:e,initialValue:d,key:i,name:i,onSubmit:e=>a(s,e)}):null})))})),W=o.iK.div`
  display: inline-flex;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  align-items: center;
  text-align: left;
  width: ${200}px;
`,X=({initialSort:e,onChange:t,options:a,pageIndex:l,pageSize:i})=>{const n=e&&a.find((({id:t})=>t===e[0].id))||a[0],[r,o]=(0,d.useState)({label:n.label,value:n.value}),u=(0,d.useMemo)((()=>a.map((e=>({label:e.label,value:e.value})))),[a]);return(0,w.tZ)(W,null,(0,w.tZ)(c.Ph,{ariaLabel:(0,s.t)("Sort"),header:(0,w.tZ)(V.lX,null,(0,s.t)("Sort")),labelInValue:!0,onChange:e=>(e=>{o(e);const n=a.find((({value:t})=>t===e.value));if(n){const e=[{id:n.id,desc:n.desc}];t({pageIndex:l,pageSize:i,sortBy:e,filters:[]})}})(e),options:u,showSearch:!0,value:r}))},Y=o.iK.div`
  text-align: center;

  .superset-list-view {
    text-align: left;
    border-radius: 4px 0;
    margin: 0 ${({theme:e})=>4*e.gridUnit}px;

    .header {
      display: flex;
      padding-bottom: ${({theme:e})=>4*e.gridUnit}px;

      & .controls {
        display: flex;
        flex-wrap: wrap;
        column-gap: ${({theme:e})=>6*e.gridUnit}px;
        row-gap: ${({theme:e})=>4*e.gridUnit}px;
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
`,J=(0,o.iK)(u.Z)`
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

  .ant-alert-close-icon {
    margin-top: ${({theme:e})=>1.5*e.gridUnit}px;
  }
`,Q={Cell:({row:e})=>(0,w.tZ)(b.Z,r()({},e.getToggleRowSelectedProps(),{id:e.id})),Header:({getToggleAllRowsSelectedProps:e})=>(0,w.tZ)(b.Z,r()({},e(),{id:"header-toggle-all"})),id:"selection",size:"sm"},ee=o.iK.div`
  padding-right: ${({theme:e})=>4*e.gridUnit}px;
  margin-top: ${({theme:e})=>5*e.gridUnit+1}px;
  white-space: nowrap;
  display: inline-block;

  .toggle-button {
    display: inline-block;
    border-radius: ${({theme:e})=>e.gridUnit/2}px;
    padding: ${({theme:e})=>e.gridUnit}px;
    padding-bottom: ${({theme:e})=>.5*e.gridUnit}px;

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
`,te=o.iK.div`
  padding: ${({theme:e})=>40*e.gridUnit}px 0;

  &.table {
    background: ${({theme:e})=>e.colors.grayscale.light5};
  }
`,ae=({mode:e,setMode:t})=>(0,w.tZ)(ee,null,(0,w.tZ)("div",{role:"button",tabIndex:0,onClick:e=>{e.currentTarget.blur(),t("card")},className:m()("toggle-button",{active:"card"===e})},(0,w.tZ)(f.Z.CardView,null)),(0,w.tZ)("div",{role:"button",tabIndex:0,onClick:e=>{e.currentTarget.blur(),t("table")},className:m()("toggle-button",{active:"table"===e})},(0,w.tZ)(f.Z.ListView,null))),le=function({columns:e,data:t,count:a,pageSize:l,fetchData:i,loading:n,initialSort:r=[],className:o="",filters:u=[],bulkActions:p=[],bulkSelectEnabled:h=!1,disableBulkSelect:m=(()=>{}),renderBulkSelectCopy:f=(e=>(0,s.t)("%s Selected",e.length)),renderCard:b,showThumbnails:S,cardSortSelectOptions:Z,defaultViewMode:$="card",highlightRowId:k,emptyState:T={}}){const{getTableProps:M,getTableBodyProps:V,headerGroups:z,rows:B,prepareRow:E,pageCount:N=1,gotoPage:O,applyFilterValue:D,selectedFlatRows:H,toggleAllRowsSelected:K,setViewMode:L,state:{pageIndex:j,pageSize:q,internalFilters:W,viewMode:ee}}=function({fetchData:e,columns:t,data:a,count:l,initialPageSize:i,initialFilters:n=[],initialSort:r=[],bulkSelectMode:o=!1,bulkSelectColumnConfig:s,renderCard:c=!1,defaultViewMode:u="card"}){const[p,g]=(0,F.Kx)({filters:U,pageIndex:F.yz,sortColumn:F.Zp,sortOrder:F.Zp,viewMode:F.Zp}),h=(0,d.useMemo)((()=>p.sortColumn&&p.sortOrder?[{id:p.sortColumn,desc:"desc"===p.sortOrder}]:r),[p.sortColumn,p.sortOrder]),m={filters:p.filters?R(p.filters,n):[],pageIndex:p.pageIndex||0,pageSize:i,sortBy:h},[v,f]=(0,d.useState)(p.viewMode||(c?u:"table")),b=(0,d.useMemo)((()=>{const e=t.map((e=>({...e,filter:"exact"})));return o?[s,...e]:e}),[o,t]),{getTableProps:x,getTableBodyProps:y,headerGroups:w,rows:S,prepareRow:Z,canPreviousPage:C,canNextPage:$,pageCount:k,gotoPage:T,setAllFilters:M,selectedFlatRows:A,toggleAllRowsSelected:V,state:{pageIndex:z,pageSize:B,sortBy:E,filters:N}}=(0,I.useTable)({columns:b,count:l,data:a,disableFilters:!0,disableSortRemove:!0,initialState:m,manualFilters:!0,manualPagination:!0,manualSortBy:!0,autoResetFilters:!1,pageCount:Math.ceil(l/i)},I.useFilters,I.useSortBy,I.usePagination,I.useRowState,I.useRowSelect),[O,D]=(0,d.useState)(p.filters&&n.length?_(n,p.filters):[]);return(0,d.useEffect)((()=>{n.length&&D(_(n,p.filters?p.filters:{}))}),[n]),(0,d.useEffect)((()=>{const t={};O.forEach((e=>{if(void 0!==e.value&&("string"!=typeof e.value||e.value.length>0)){const a=e.urlDisplay||e.id;t[a]=e.value}}));const a={filters:Object.keys(t).length?t:void 0,pageIndex:z};E[0]&&(a.sortColumn=E[0].id,a.sortOrder=E[0].desc?"desc":"asc"),c&&(a.viewMode=v);const l=void 0!==p.pageIndex&&a.pageIndex!==p.pageIndex?"push":"replace";g(a,l),e({pageIndex:z,pageSize:B,sortBy:E,filters:N})}),[e,z,B,E,N]),(0,d.useEffect)((()=>{P()(m.pageIndex,z)||T(m.pageIndex)}),[p]),{canNextPage:$,canPreviousPage:C,getTableBodyProps:y,getTableProps:x,gotoPage:T,headerGroups:w,pageCount:k,prepareRow:Z,rows:S,selectedFlatRows:A,setAllFilters:M,state:{pageIndex:z,pageSize:B,sortBy:E,filters:N,internalFilters:O,viewMode:v},toggleAllRowsSelected:V,applyFilterValue:(e,t)=>{D((a=>{if(a[e].value===t)return a;const l={...a[e],value:t},i=function(e,t,a){const l=e.find(((e,a)=>t===a));return[...e.slice(0,t),{...l,...a},...e.slice(t+1)]}(a,e,l);return M(i.filter((e=>!(void 0===e.value||Array.isArray(e.value)&&!e.value.length))).map((({value:e,operator:t,id:a})=>"between"===t&&Array.isArray(e)?[{value:e[0],operator:"gt",id:a},{value:e[1],operator:"lt",id:a}]:{value:e,operator:t,id:a})).flat()),T(0),i}))},setViewMode:f}}({bulkSelectColumnConfig:Q,bulkSelectMode:h&&Boolean(p.length),columns:e,count:a,data:t,fetchData:i,initialPageSize:l,initialSort:r,initialFilters:u,renderCard:Boolean(b),defaultViewMode:$}),le=Boolean(u.length);if(le){const t=e.reduce(((e,t)=>({...e,[t.id||t.accessor]:!0})),{});u.forEach((e=>{if(!t[e.id])throw new A(`Invalid filter config, ${e.id} is not present in columns`)}))}const ie=Boolean(b);return(0,d.useEffect)((()=>{h||K(!1)}),[h,K]),(0,w.tZ)(Y,null,(0,w.tZ)("div",{className:`superset-list-view ${o}`},(0,w.tZ)("div",{className:"header"},ie&&(0,w.tZ)(ae,{mode:ee,setMode:L}),(0,w.tZ)("div",{className:"controls"},le&&(0,w.tZ)(G,{filters:u,internalFilters:W,updateFilterValue:D}),"card"===ee&&Z&&(0,w.tZ)(X,{initialSort:r,onChange:i,options:Z,pageIndex:j,pageSize:q}))),(0,w.tZ)("div",{className:"body "+(0===B.length?"empty":"")},h&&(0,w.tZ)(J,{type:"info",closable:!0,showIcon:!1,onClose:m,message:(0,w.tZ)(d.Fragment,null,(0,w.tZ)("div",{className:"selectedCopy"},f(H)),Boolean(H.length)&&(0,w.tZ)(d.Fragment,null,(0,w.tZ)("span",{role:"button",tabIndex:0,className:"deselect-all",onClick:()=>K(!1)},(0,s.t)("Deselect all")),(0,w.tZ)("div",{className:"divider"}),p.map((e=>(0,w.tZ)(v.Z,{key:e.key,buttonStyle:e.type,cta:!0,onClick:()=>e.onSelect(H.map((e=>e.original)))},e.name)))))}),"card"===ee&&(0,w.tZ)(C,{bulkSelectEnabled:h,prepareRow:E,renderCard:b,rows:B,loading:n,showThumbnails:S}),"table"===ee&&(0,w.tZ)(y.Z,{getTableProps:M,getTableBodyProps:V,prepareRow:E,headerGroups:z,rows:B,columns:e,loading:n,highlightRowId:k}),!n&&0===B.length&&(0,w.tZ)(te,{className:ee},(0,w.tZ)(c.HY,{image:(0,w.tZ)(g,null),description:T.message||(0,s.t)("No Data")},T.slot||null)))),B.length>0&&(0,w.tZ)("div",{className:"pagination-container"},(0,w.tZ)(x.Z,{totalPages:N||0,currentPage:N?j+1:0,onChange:e=>O(e-1),hideFirstAndLastPageLinks:!0}),(0,w.tZ)("div",{className:"row-count-container"},!n&&(0,s.t)("%s-%s of %s",q*j+(B.length&&1),q*j+B.length,a))))};var ie;!function(e){e.startsWith="sw",e.endsWith="ew",e.contains="ct",e.equals="eq",e.notStartsWith="nsw",e.notEndsWith="new",e.notContains="nct",e.notEquals="neq",e.greaterThan="gt",e.lessThan="lt",e.relationManyMany="rel_m_m",e.relationOneMany="rel_o_m",e.titleOrSlug="title_or_slug",e.nameOrDescription="name_or_description",e.allText="all_text",e.chartAllText="chart_all_text",e.datasetIsNullOrEmpty="dataset_is_null_or_empty",e.between="between",e.dashboardIsFav="dashboard_is_favorite",e.chartIsFav="chart_is_favorite",e.chartIsCertified="chart_is_certified",e.dashboardIsCertified="dashboard_is_certified"}(ie||(ie={}))}}]);