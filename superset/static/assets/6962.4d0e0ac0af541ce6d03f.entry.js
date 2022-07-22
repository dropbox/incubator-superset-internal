"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6962],{64158:(e,t,a)=>{a.d(t,{Z:()=>p}),a(67294);var o=a(51995),i=a(94184),l=a.n(i),n=a(11965);const r=o.iK.ul`
  display: inline-block;
  margin: 16px 0;
  padding: 0;

  li {
    display: inline;
    margin: 0 4px;

    span {
      padding: 8px 12px;
      text-decoration: none;
      background-color: ${({theme:e})=>e.colors.grayscale.light5};
      border-radius: ${({theme:e})=>e.borderRadius}px;

      &:hover,
      &:focus {
        z-index: 2;
        color: ${({theme:e})=>e.colors.grayscale.dark1};
        background-color: ${({theme:e})=>e.colors.grayscale.light3};
      }
    }

    &.disabled {
      span {
        background-color: transparent;
        cursor: default;

        &:focus {
          outline: none;
        }
      }
    }
    &.active {
      span {
        z-index: 3;
        color: ${({theme:e})=>e.colors.grayscale.light5};
        cursor: default;
        background-color: ${({theme:e})=>e.colors.primary.base};

        &:focus {
          outline: none;
        }
      }
    }
  }
`;function s({children:e}){return(0,n.tZ)(r,{role:"navigation"},e)}s.Next=function({disabled:e,onClick:t}){return(0,n.tZ)("li",{className:l()({disabled:e})},(0,n.tZ)("span",{role:"button",tabIndex:e?-1:0,onClick:a=>{a.preventDefault(),e||t(a)}},"»"))},s.Prev=function({disabled:e,onClick:t}){return(0,n.tZ)("li",{className:l()({disabled:e})},(0,n.tZ)("span",{role:"button",tabIndex:e?-1:0,onClick:a=>{a.preventDefault(),e||t(a)}},"«"))},s.Item=function({active:e,children:t,onClick:a}){return(0,n.tZ)("li",{className:l()({active:e})},(0,n.tZ)("span",{role:"button",tabIndex:e?-1:0,onClick:t=>{t.preventDefault(),e||a(t)}},t))},s.Ellipsis=function({disabled:e,onClick:t}){return(0,n.tZ)("li",{className:l()({disabled:e})},(0,n.tZ)("span",{role:"button",tabIndex:e?-1:0,onClick:a=>{a.preventDefault(),e||t(a)}},"…"))};const d=s;var c=a(52630);const p=(0,c.YM)({WrapperComponent:d,itemTypeToComponent:{[c.iB.PAGE]:({value:e,isActive:t,onClick:a})=>(0,n.tZ)(d.Item,{active:t,onClick:a},e),[c.iB.ELLIPSIS]:({isActive:e,onClick:t})=>(0,n.tZ)(d.Ellipsis,{disabled:e,onClick:t}),[c.iB.PREVIOUS_PAGE_LINK]:({isActive:e,onClick:t})=>(0,n.tZ)(d.Prev,{disabled:e,onClick:t}),[c.iB.NEXT_PAGE_LINK]:({isActive:e,onClick:t})=>(0,n.tZ)(d.Next,{disabled:e,onClick:t}),[c.iB.FIRST_PAGE_LINK]:()=>null,[c.iB.LAST_PAGE_LINK]:()=>null}})},97754:(e,t,a)=>{a.d(t,{Z:()=>g});var o=a(5872),i=a.n(o),l=a(67294),n=a(94184),r=a.n(n),s=a(51995),d=a(70163),c=a(11965);const p=s.iK.table`
  background-color: ${({theme:e})=>e.colors.grayscale.light5};
  border-collapse: separate;
  border-radius: ${({theme:e})=>e.borderRadius}px;

  thead > tr > th {
    border: 0;
  }

  tbody {
    tr:first-of-type > td {
      border-top: 0;
    }
  }
  th {
    background: ${({theme:e})=>e.colors.grayscale.light5};
    position: sticky;
    top: 0;

    &:first-of-type {
      padding-left: ${({theme:e})=>4*e.gridUnit}px;
    }

    &.xs {
      min-width: 25px;
    }
    &.sm {
      min-width: 50px;
    }
    &.md {
      min-width: 75px;
    }
    &.lg {
      min-width: 100px;
    }
    &.xl {
      min-width: 150px;
    }
    &.xxl {
      min-width: 200px;
    }

    span {
      white-space: nowrap;
      display: flex;
      align-items: center;
      line-height: 2;
    }

    svg {
      display: inline-block;
      position: relative;
    }
  }

  td {
    &.xs {
      width: 25px;
    }
    &.sm {
      width: 50px;
    }
    &.md {
      width: 75px;
    }
    &.lg {
      width: 100px;
    }
    &.xl {
      width: 150px;
    }
    &.xxl {
      width: 200px;
    }
  }

  .table-cell-loader {
    position: relative;

    .loading-bar {
      background-color: ${({theme:e})=>e.colors.secondary.light4};
      border-radius: 7px;

      span {
        visibility: hidden;
      }
    }

    .empty-loading-bar {
      display: inline-block;
      width: 100%;
      height: 1.2em;
    }

    &:after {
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      left: 0;
      content: '';
      display: block;
      width: 100%;
      height: 48px;
      background-image: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0) 80%
      );
      background-size: 200px 48px;
      background-position: -100px 0;
      background-repeat: no-repeat;
      animation: loading-shimmer 1s infinite;
    }
  }

  .actions {
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
  }

  .table-row {
    .actions {
      opacity: 0;
      font-size: ${({theme:e})=>e.typography.sizes.xl}px;
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.secondary.light5};

      .actions {
        opacity: 1;
        transition: opacity ease-in ${({theme:e})=>e.transitionTiming}s;
      }
    }
  }

  .table-row-selected {
    background-color: ${({theme:e})=>e.colors.secondary.light4};

    &:hover {
      background-color: ${({theme:e})=>e.colors.secondary.light4};
    }
  }

  .table-cell {
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 320px;
    line-height: 1;
    vertical-align: middle;
    &:first-of-type {
      padding-left: ${({theme:e})=>4*e.gridUnit}px;
    }
    &__wrap {
      white-space: normal;
    }
    &__nowrap {
      white-space: nowrap;
    }
  }

  @keyframes loading-shimmer {
    40% {
      background-position: 100% 0;
    }

    100% {
      background-position: 100% 0;
    }
  }
`;p.displayName="table";const g=l.memo((({getTableProps:e,getTableBodyProps:t,prepareRow:a,headerGroups:o,columns:l,rows:n,loading:s,highlightRowId:g,columnsForWrapText:u})=>(0,c.tZ)(p,i()({},e(),{className:"table table-hover"}),(0,c.tZ)("thead",null,o.map((e=>(0,c.tZ)("tr",e.getHeaderGroupProps(),e.headers.map((e=>{let t=(0,c.tZ)(d.Z.Sort,null);return e.isSorted&&e.isSortedDesc?t=(0,c.tZ)(d.Z.SortDesc,null):e.isSorted&&!e.isSortedDesc&&(t=(0,c.tZ)(d.Z.SortAsc,null)),e.hidden?null:(0,c.tZ)("th",i()({},e.getHeaderProps(e.canSort?e.getSortByToggleProps():{}),{className:r()({[e.size||""]:e.size})}),(0,c.tZ)("span",null,e.render("Header"),e.canSort&&t))})))))),(0,c.tZ)("tbody",t(),s&&0===n.length&&[...new Array(12)].map(((e,t)=>(0,c.tZ)("tr",{key:t},l.map(((e,t)=>e.hidden?null:(0,c.tZ)("td",{key:t,className:r()("table-cell",{"table-cell-loader":s})},(0,c.tZ)("span",{className:"loading-bar empty-loading-bar",role:"progressbar","aria-label":"loading"}))))))),n.length>0&&n.map((e=>{a(e);const t=e.original.id;return(0,c.tZ)("tr",i()({},e.getRowProps(),{className:r()("table-row",{"table-row-selected":e.isSelected||void 0!==t&&t===g})}),e.cells.map((e=>{if(e.column.hidden)return null;const t=e.column.cellProps||{},a=u&&u.includes(e.column.Header);return(0,c.tZ)("td",i()({className:r()("table-cell table-cell__"+(a?"wrap":"nowrap"),{"table-cell-loader":s,[e.column.size||""]:e.column.size})},e.getCellProps(),t),(0,c.tZ)("span",{className:r()({"loading-bar":s}),role:s?"progressbar":void 0},(0,c.tZ)("span",null,e.render("Cell"))))})))}))))))},46977:(e,t,a)=>{a.d(t,{u:()=>o,Z:()=>y});var o,i=a(67294),l=a(18446),n=a.n(l),r=a(51995),s=a(61988),d=a(79521),c=a(4715),p=a(64158),g=a(97754),u=a(11965);!function(e){e.Default="Default",e.Small="Small"}(o||(o={}));const m=r.iK.div`
  margin: ${({theme:e})=>40*e.gridUnit}px 0;
`,h=r.iK.div`
  ${({scrollTable:e,theme:t})=>e&&`\n    flex: 1 1 auto;\n    margin-bottom: ${4*t.gridUnit}px;\n    overflow: auto;\n  `}

  .table-row {
    ${({theme:e,small:t})=>!t&&`height: ${11*e.gridUnit-1}px;`}

    .table-cell {
      ${({theme:e,small:t})=>t&&`\n        padding-top: ${e.gridUnit+1}px;\n        padding-bottom: ${e.gridUnit+1}px;\n        line-height: 1.45;\n      `}
    }
  }

  th[role='columnheader'] {
    z-index: 1;
    border-bottom: ${({theme:e})=>`${e.gridUnit-2}px solid ${e.colors.grayscale.light2}`};
    ${({small:e})=>e&&"padding-bottom: 0;"}
  }
`,b=r.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};

  ${({isPaginationSticky:e})=>e&&"\n        position: sticky;\n        bottom: 0;\n        left: 0;\n    "};

  .row-count-container {
    margin-top: ${({theme:e})=>2*e.gridUnit}px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`,x=({columns:e,data:t,pageSize:a,totalCount:l=t.length,initialPageIndex:r,initialSortBy:x=[],loading:y=!1,withPagination:k=!0,emptyWrapperType:w=o.Default,noDataText:f,showRowCount:Z=!0,serverPagination:v=!1,columnsForWrapText:P,onServerPagination:S=(()=>{}),...$})=>{const C={pageSize:null!=a?a:10,pageIndex:null!=r?r:0,sortBy:x},{getTableProps:I,getTableBodyProps:T,headerGroups:N,page:E,rows:_,prepareRow:B,pageCount:A,gotoPage:z,state:{pageIndex:D,pageSize:R,sortBy:G}}=(0,d.useTable)({columns:e,data:t,initialState:C,manualPagination:v,manualSortBy:v,pageCount:Math.ceil(l/C.pageSize)},d.useFilters,d.useSortBy,d.usePagination);(0,i.useEffect)((()=>{v&&D!==C.pageIndex&&S({pageIndex:D})}),[D]),(0,i.useEffect)((()=>{v&&!n()(G,C.sortBy)&&S({pageIndex:0,sortBy:G})}),[G]);const L=k?E:_;let U;switch(w){case o.Small:U=({children:e})=>(0,u.tZ)(i.Fragment,null,e);break;case o.Default:default:U=({children:e})=>(0,u.tZ)(m,null,e)}const K=!y&&0===L.length,F=A>1&&k;return(0,u.tZ)(i.Fragment,null,(0,u.tZ)(h,$,(0,u.tZ)(g.Z,{getTableProps:I,getTableBodyProps:T,prepareRow:B,headerGroups:N,rows:L,columns:e,loading:y,columnsForWrapText:P}),K&&(0,u.tZ)(U,null,f?(0,u.tZ)(c.HY,{image:c.HY.PRESENTED_IMAGE_SIMPLE,description:f}):(0,u.tZ)(c.HY,{image:c.HY.PRESENTED_IMAGE_SIMPLE}))),F&&(0,u.tZ)(b,{className:"pagination-container",isPaginationSticky:$.isPaginationSticky},(0,u.tZ)(p.Z,{totalPages:A||0,currentPage:A?D+1:0,onChange:e=>z(e-1),hideFirstAndLastPageLinks:!0}),Z&&(0,u.tZ)("div",{className:"row-count-container"},!y&&(0,s.t)("%s-%s of %s",R*D+(E.length&&1),R*D+E.length,l))))},y=i.memo(x)},76962:(e,t,a)=>{a.d(t,{u:()=>o.u,Z:()=>o.Z});var o=a(46977)}}]);