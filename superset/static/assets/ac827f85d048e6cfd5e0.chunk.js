"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8782],{18782:(e,t,a)=>{a.d(t,{p:()=>ie,Z:()=>re});var l=a(5872),r=a.n(l),i=a(51995),n=a(61988),o=a(67294),s=a(29487),d=a(94184),c=a.n(d),u=a(35932),g=a(70163),p=a(49576),h=a(64158),m=a(97754),f=a(11965);const v=i.iK.div`
  ${({theme:e,showThumbnails:t})=>`\n    display: grid;\n    grid-gap: ${12*e.gridUnit}px ${4*e.gridUnit}px;\n    grid-template-columns: repeat(auto-fit, 300px);\n    margin-top: ${-6*e.gridUnit}px;\n    padding: ${t?`${8*e.gridUnit+3}px ${9*e.gridUnit}px`:`${8*e.gridUnit+1}px ${9*e.gridUnit}px`};\n  `}
`,b=i.iK.div`
  border: 2px solid transparent;
  &.card-selected {
    border: 2px solid ${({theme:e})=>e.colors.primary.base};
  }
  &.bulk-select {
    cursor: pointer;
  }
`;function y({bulkSelectEnabled:e,loading:t,prepareRow:a,renderCard:l,rows:r,showThumbnails:i}){return l?(0,f.tZ)(v,{showThumbnails:i},t&&0===r.length&&[...new Array(25)].map(((e,a)=>(0,f.tZ)("div",{key:a},l({loading:t})))),r.length>0&&r.map((r=>l?(a(r),(0,f.tZ)(b,{className:c()({"card-selected":e&&r.isSelected,"bulk-select":e}),key:r.id,onClick:t=>{return a=t,l=r.toggleRowSelected,void(e&&(a.preventDefault(),a.stopPropagation(),l()));var a,l},role:"none"},l({...r.original,loading:t}))):null))):null}var x=a(68135),w=a(4715),S=a(18446),Z=a.n(S),C=a(79521),$=a(35755),k=a(15926),I=a.n(k);const F={encode:e=>void 0===e?void 0:I().encode(e).replace(/%/g,"%25").replace(/&/g,"%26").replace(/\+/g,"%2B").replace(/#/g,"%23"),decode:e=>void 0===e||Array.isArray(e)?void 0:I().decode(e)};class P extends Error{constructor(...e){super(...e),this.name="ListViewError"}}function T(e,t){return e.map((({id:e,urlDisplay:a,operator:l})=>({id:e,urlDisplay:a,operator:l,value:t[a||e]})))}function U(e,t){const a=[],l={};return Object.keys(e).forEach((t=>{const r={id:t,value:e[t]};l[t]=r,a.push(r)})),t.forEach((e=>{const t=e.urlDisplay||e.id,a=l[t];a&&(a.operator=e.operator,a.id=e.id)})),a}var R=a(49238);const _=i.iK.div`
  width: ${200}px;
`,M=(0,i.iK)(g.Z.Search)`
  color: ${({theme:e})=>e.colors.grayscale.light1};
`,A=(0,i.iK)(w.oc)`
  border-radius: ${({theme:e})=>e.gridUnit}px;
`;function B({Header:e,name:t,initialValue:a,onSubmit:l},r){const[i,s]=(0,o.useState)(a||""),d=()=>{i&&l(i.trim())};return(0,o.useImperativeHandle)(r,(()=>({clearFilter:()=>{s(""),l("")}}))),(0,f.tZ)(_,null,(0,f.tZ)(R.lX,null,e),(0,f.tZ)(A,{allowClear:!0,placeholder:(0,n.t)("Type a value"),name:t,value:i,onChange:e=>{s(e.currentTarget.value),""===e.currentTarget.value&&l("")},onPressEnter:d,onBlur:d,prefix:(0,f.tZ)(M,{iconSize:"l"})}))}const V=(0,o.forwardRef)(B),N=i.iK.div`
  display: inline-flex;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  align-items: center;
  width: ${200}px;
`;function z({Header:e,name:t,fetchSelects:a,initialValue:l,onSelect:r,selects:i=[]},s){const[d,c]=(0,o.useState)(l),u=()=>{r(void 0),c(void 0)};(0,o.useImperativeHandle)(s,(()=>({clearFilter:()=>{u()}})));const g=(0,o.useMemo)((()=>async(e,t,l)=>{if(a){const r=await a(e,t,l);return{data:r.data,totalCount:r.totalCount}}return{data:[],totalCount:0}}),[a]);return(0,f.tZ)(N,null,(0,f.tZ)(w.Ph,{allowClear:!0,ariaLabel:"string"==typeof e?e:t||(0,n.t)("Filter"),labelInValue:!0,header:(0,f.tZ)(R.lX,null,e),onChange:e=>{r(e?{label:e.label,value:e.value}:void 0),c(e)},onClear:u,options:a?g:i,placeholder:(0,n.t)("Select or type a value"),showSearch:!0,value:d}))}const E=(0,o.forwardRef)(z);var O=a(30381),K=a.n(O),H=a(62276);const D=i.iK.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 360px;
`;function q({Header:e,initialValue:t,onSubmit:a},l){const[r,i]=(0,o.useState)(null!=t?t:null),n=(0,o.useMemo)((()=>!r||Array.isArray(r)&&!r.length?null:[K()(r[0]),K()(r[1])]),[r]);return(0,o.useImperativeHandle)(l,(()=>({clearFilter:()=>{i(null),a([])}}))),(0,f.tZ)(D,null,(0,f.tZ)(R.lX,null,e),(0,f.tZ)(H.S,{showTime:!0,value:n,onChange:e=>{var t,l,r,n;if(!e)return i(null),void a([]);const o=[null!=(t=null==(l=e[0])?void 0:l.valueOf())?t:0,null!=(r=null==(n=e[1])?void 0:n.valueOf())?r:0];i(o),a(o)}}))}const L=(0,o.forwardRef)(q);function X({filters:e,internalFilters:t=[],updateFilterValue:a},l){const r=(0,o.useMemo)((()=>Array.from({length:e.length},(()=>(0,o.createRef)()))),[e.length]);return(0,o.useImperativeHandle)(l,(()=>({clearFilters:()=>{r.forEach((e=>{var t;null==(t=e.current)||null==t.clearFilter||t.clearFilter()}))}}))),(0,f.tZ)(o.Fragment,null,e.map((({Header:e,fetchSelects:l,id:i,input:n,paginate:o,selects:s},d)=>{const c=t[d]&&t[d].value;return"select"===n?(0,f.tZ)(E,{ref:r[d],Header:e,fetchSelects:l,initialValue:c,key:i,name:i,onSelect:e=>a(d,e),paginate:o,selects:s}):"search"===n&&"string"==typeof e?(0,f.tZ)(V,{ref:r[d],Header:e,initialValue:c,key:i,name:i,onSubmit:e=>a(d,e)}):"datetime_range"===n?(0,f.tZ)(L,{ref:r[d],Header:e,initialValue:c,key:i,name:i,onSubmit:e=>a(d,e)}):null})))}const j=(0,x.b)((0,o.forwardRef)(X)),G=i.iK.div`
  display: inline-flex;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  align-items: center;
  text-align: left;
  width: ${200}px;
`,W=({initialSort:e,onChange:t,options:a,pageIndex:l,pageSize:r})=>{const i=e&&a.find((({id:t})=>t===e[0].id))||a[0],[s,d]=(0,o.useState)({label:i.label,value:i.value}),c=(0,o.useMemo)((()=>a.map((e=>({label:e.label,value:e.value})))),[a]);return(0,f.tZ)(G,null,(0,f.tZ)(w.Ph,{ariaLabel:(0,n.t)("Sort"),header:(0,f.tZ)(R.lX,null,(0,n.t)("Sort")),labelInValue:!0,onChange:e=>(e=>{d(e);const i=a.find((({value:t})=>t===e.value));if(i){const e=[{id:i.id,desc:i.desc}];t({pageIndex:l,pageSize:r,sortBy:e,filters:[]})}})(e),options:c,showSearch:!0,value:s}))};var J=a(94301);const Q=i.iK.div`
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
`,Y=(0,i.iK)(s.Z)`
  ${({theme:e})=>`\n    border-radius: 0;\n    margin-bottom: 0;\n    color: ${e.colors.grayscale.dark1};\n    background-color: ${e.colors.primary.light4};\n\n    .selectedCopy {\n      display: inline-block;\n      padding: ${2*e.gridUnit}px 0;\n    }\n\n    .deselect-all {\n      color: ${e.colors.primary.base};\n      margin-left: ${4*e.gridUnit}px;\n    }\n\n    .divider {\n      margin: ${2*-e.gridUnit}px 0 ${2*-e.gridUnit}px ${4*e.gridUnit}px;\n      width: 1px;\n      height: ${8*e.gridUnit}px;\n      box-shadow: inset -1px 0px 0px ${e.colors.grayscale.light2};\n      display: inline-flex;\n      vertical-align: middle;\n      position: relative;\n    }\n\n    .ant-alert-close-icon {\n      margin-top: ${1.5*e.gridUnit}px;\n    }\n  `}
`,ee={Cell:({row:e})=>(0,f.tZ)(p.Z,r()({},e.getToggleRowSelectedProps(),{id:e.id})),Header:({getToggleAllRowsSelectedProps:e})=>(0,f.tZ)(p.Z,r()({},e(),{id:"header-toggle-all"})),id:"selection",size:"sm"},te=i.iK.div`
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
`,ae=i.iK.div`
  padding: ${({theme:e})=>40*e.gridUnit}px 0;

  &.table {
    background: ${({theme:e})=>e.colors.grayscale.light5};
  }
`,le=({mode:e,setMode:t})=>(0,f.tZ)(te,null,(0,f.tZ)("div",{role:"button",tabIndex:0,onClick:e=>{e.currentTarget.blur(),t("card")},className:c()("toggle-button",{active:"card"===e})},(0,f.tZ)(g.Z.CardView,null)),(0,f.tZ)("div",{role:"button",tabIndex:0,onClick:e=>{e.currentTarget.blur(),t("table")},className:c()("toggle-button",{active:"table"===e})},(0,f.tZ)(g.Z.ListView,null))),re=function({columns:e,data:t,count:a,pageSize:l,fetchData:i,loading:s,initialSort:d=[],className:c="",filters:g=[],bulkActions:p=[],bulkSelectEnabled:v=!1,disableBulkSelect:b=(()=>{}),renderBulkSelectCopy:x=(e=>(0,n.t)("%s Selected",e.length)),renderCard:w,showThumbnails:S,cardSortSelectOptions:k,defaultViewMode:I="card",highlightRowId:R,emptyState:_}){const{getTableProps:M,getTableBodyProps:A,headerGroups:B,rows:V,prepareRow:N,pageCount:z=1,gotoPage:E,applyFilterValue:O,selectedFlatRows:K,toggleAllRowsSelected:H,setViewMode:D,state:{pageIndex:q,pageSize:L,internalFilters:X,viewMode:G},query:te}=function({fetchData:e,columns:t,data:a,count:l,initialPageSize:r,initialFilters:i=[],initialSort:n=[],bulkSelectMode:s=!1,bulkSelectColumnConfig:d,renderCard:c=!1,defaultViewMode:u="card"}){const[g,p]=(0,$.Kx)({filters:F,pageIndex:$.yz,sortColumn:$.Zp,sortOrder:$.Zp,viewMode:$.Zp}),h=(0,o.useMemo)((()=>g.sortColumn&&g.sortOrder?[{id:g.sortColumn,desc:"desc"===g.sortOrder}]:n),[g.sortColumn,g.sortOrder]),m={filters:g.filters?U(g.filters,i):[],pageIndex:g.pageIndex||0,pageSize:r,sortBy:h},[f,v]=(0,o.useState)(g.viewMode||(c?u:"table")),b=(0,o.useMemo)((()=>{const e=t.map((e=>({...e,filter:"exact"})));return s?[d,...e]:e}),[s,t]),{getTableProps:y,getTableBodyProps:x,headerGroups:w,rows:S,prepareRow:k,canPreviousPage:I,canNextPage:P,pageCount:R,gotoPage:_,setAllFilters:M,selectedFlatRows:A,toggleAllRowsSelected:B,state:{pageIndex:V,pageSize:N,sortBy:z,filters:E}}=(0,C.useTable)({columns:b,count:l,data:a,disableFilters:!0,disableSortRemove:!0,initialState:m,manualFilters:!0,manualPagination:!0,manualSortBy:!0,autoResetFilters:!1,pageCount:Math.ceil(l/r)},C.useFilters,C.useSortBy,C.usePagination,C.useRowState,C.useRowSelect),[O,K]=(0,o.useState)(g.filters&&i.length?T(i,g.filters):[]);return(0,o.useEffect)((()=>{i.length&&K(T(i,g.filters?g.filters:{}))}),[i]),(0,o.useEffect)((()=>{const t={};O.forEach((e=>{if(void 0!==e.value&&("string"!=typeof e.value||e.value.length>0)){const a=e.urlDisplay||e.id;t[a]=e.value}}));const a={filters:Object.keys(t).length?t:void 0,pageIndex:V};z[0]&&(a.sortColumn=z[0].id,a.sortOrder=z[0].desc?"desc":"asc"),c&&(a.viewMode=f);const l=void 0!==g.pageIndex&&a.pageIndex!==g.pageIndex?"push":"replace";p(a,l),e({pageIndex:V,pageSize:N,sortBy:z,filters:E})}),[e,V,N,z,E]),(0,o.useEffect)((()=>{Z()(m.pageIndex,V)||_(m.pageIndex)}),[g]),{canNextPage:P,canPreviousPage:I,getTableBodyProps:x,getTableProps:y,gotoPage:_,headerGroups:w,pageCount:R,prepareRow:k,rows:S,selectedFlatRows:A,setAllFilters:M,state:{pageIndex:V,pageSize:N,sortBy:z,filters:E,internalFilters:O,viewMode:f},toggleAllRowsSelected:B,applyFilterValue:(e,t)=>{K((a=>{if(a[e].value===t)return a;const l={...a[e],value:t},r=function(e,t,a){const l=e.find(((e,a)=>t===a));return[...e.slice(0,t),{...l,...a},...e.slice(t+1)]}(a,e,l);return M(r.filter((e=>!(void 0===e.value||Array.isArray(e.value)&&!e.value.length))).map((({value:e,operator:t,id:a})=>"between"===t&&Array.isArray(e)?[{value:e[0],operator:"gt",id:a},{value:e[1],operator:"lt",id:a}]:{value:e,operator:t,id:a})).flat()),_(0),r}))},setViewMode:v,query:g}}({bulkSelectColumnConfig:ee,bulkSelectMode:v&&Boolean(p.length),columns:e,count:a,data:t,fetchData:i,initialPageSize:l,initialSort:d,initialFilters:g,renderCard:Boolean(w),defaultViewMode:I}),re=Boolean(g.length);if(re){const t=e.reduce(((e,t)=>({...e,[t.id||t.accessor]:!0})),{});g.forEach((e=>{if(!t[e.id])throw new P(`Invalid filter config, ${e.id} is not present in columns`)}))}const ie=(0,o.useRef)(null),ne=(0,o.useCallback)((()=>{var e;te.filters&&(null==(e=ie.current)||e.clearFilters())}),[te.filters]),oe=Boolean(w);return(0,o.useEffect)((()=>{v||H(!1)}),[v,H]),(0,f.tZ)(Q,null,(0,f.tZ)("div",{className:`superset-list-view ${c}`},(0,f.tZ)("div",{className:"header"},oe&&(0,f.tZ)(le,{mode:G,setMode:D}),(0,f.tZ)("div",{className:"controls"},re&&(0,f.tZ)(j,{ref:ie,filters:g,internalFilters:X,updateFilterValue:O}),"card"===G&&k&&(0,f.tZ)(W,{initialSort:d,onChange:i,options:k,pageIndex:q,pageSize:L}))),(0,f.tZ)("div",{className:"body "+(0===V.length?"empty":"")},v&&(0,f.tZ)(Y,{type:"info",closable:!0,showIcon:!1,onClose:b,message:(0,f.tZ)(o.Fragment,null,(0,f.tZ)("div",{className:"selectedCopy"},x(K)),Boolean(K.length)&&(0,f.tZ)(o.Fragment,null,(0,f.tZ)("span",{role:"button",tabIndex:0,className:"deselect-all",onClick:()=>H(!1)},(0,n.t)("Deselect all")),(0,f.tZ)("div",{className:"divider"}),p.map((e=>(0,f.tZ)(u.Z,{key:e.key,buttonStyle:e.type,cta:!0,onClick:()=>e.onSelect(K.map((e=>e.original)))},e.name)))))}),"card"===G&&(0,f.tZ)(y,{bulkSelectEnabled:v,prepareRow:N,renderCard:w,rows:V,loading:s,showThumbnails:S}),"table"===G&&(0,f.tZ)(m.Z,{getTableProps:M,getTableBodyProps:A,prepareRow:N,headerGroups:B,rows:V,columns:e,loading:s,highlightRowId:R}),!s&&0===V.length&&(0,f.tZ)(ae,{className:G},te.filters?(0,f.tZ)(J.XJ,{title:(0,n.t)("No results match your filter criteria"),description:(0,n.t)("Try different criteria to display results."),image:"filter-results.svg",buttonAction:()=>ne(),buttonText:(0,n.t)("clear all filters")}):(0,f.tZ)(J.XJ,r()({},_,{title:(null==_?void 0:_.title)||(0,n.t)("No Data"),image:(null==_?void 0:_.image)||"filter-results.svg"}))))),V.length>0&&(0,f.tZ)("div",{className:"pagination-container"},(0,f.tZ)(h.Z,{totalPages:z||0,currentPage:z?q+1:0,onChange:e=>E(e-1),hideFirstAndLastPageLinks:!0}),(0,f.tZ)("div",{className:"row-count-container"},!s&&(0,n.t)("%s-%s of %s",L*q+(V.length&&1),L*q+V.length,a))))};var ie;!function(e){e.startsWith="sw",e.endsWith="ew",e.contains="ct",e.equals="eq",e.notStartsWith="nsw",e.notEndsWith="new",e.notContains="nct",e.notEquals="neq",e.greaterThan="gt",e.lessThan="lt",e.relationManyMany="rel_m_m",e.relationOneMany="rel_o_m",e.titleOrSlug="title_or_slug",e.nameOrDescription="name_or_description",e.allText="all_text",e.chartAllText="chart_all_text",e.datasetIsNullOrEmpty="dataset_is_null_or_empty",e.between="between",e.dashboardIsFav="dashboard_is_favorite",e.chartIsFav="chart_is_favorite",e.chartIsCertified="chart_is_certified",e.dashboardIsCertified="dashboard_is_certified",e.datasetIsCertified="dataset_is_certified"}(ie||(ie={}))}}]);
//# sourceMappingURL=ac827f85d048e6cfd5e0.chunk.js.map