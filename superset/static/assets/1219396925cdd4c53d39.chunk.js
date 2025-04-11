"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9820],{94301:(n,e,i)=>{i.d(e,{Tc:()=>A,UX:()=>T,XJ:()=>f,x3:()=>$});var t,r=i(751995),l=i(211965),o=i(61988),a=i(104715),s=i(835932),c=i(135944);!function(n){n[n.Small=0]="Small",n[n.Medium=1]="Medium",n[n.Big=2]="Big"}(t||(t={}));const d=r.iK.div`
  ${({theme:n})=>l.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: ${4*n.gridUnit}px;
    text-align: center;

    & .ant-empty-image svg {
      width: auto;
    }

    & a,
    & span[role='button'] {
      color: inherit;
      text-decoration: underline;
      &:hover {
        color: ${n.colors.grayscale.base};
      }
    }
  `}
`,p=r.iK.div``,h=r.iK.p`
  ${({theme:n})=>l.iv`
    font-size: ${n.typography.sizes.m}px;
    color: ${n.colors.grayscale.light1};
    margin: ${2*n.gridUnit}px 0 0 0;
    font-weight: ${n.typography.weights.bold};
  `}
`,g=(0,r.iK)(h)`
  ${({theme:n})=>l.iv`
    font-size: ${n.typography.sizes.l}px;
    color: ${n.colors.grayscale.light1};
    margin-top: ${4*n.gridUnit}px;
  `}
`,m=r.iK.p`
  ${({theme:n})=>l.iv`
    font-size: ${n.typography.sizes.s}px;
    color: ${n.colors.grayscale.light1};
    margin: ${2*n.gridUnit}px 0 0 0;
  `}
`,u=(0,r.iK)(m)`
  ${({theme:n})=>l.iv`
    font-size: ${n.typography.sizes.m}px;
  `}
`,b=(0,r.iK)(m)`
  ${({theme:n})=>l.iv`
    margin-top: ${n.gridUnit}px;
    line-height: 1.2;
  `}
`,x=(0,r.iK)(s.Z)`
  ${({theme:n})=>l.iv`
    margin-top: ${4*n.gridUnit}px;
    z-index: 1;
  `}
`,y=n=>"string"==typeof n?`/static/assets/images/${n}`:n,v=n=>{switch(n){case t.Small:return{height:"50px"};case t.Medium:return{height:"80px"};case t.Big:return{height:"150px"};default:return{height:"50px"}}},w=({image:n,size:e})=>(0,c.tZ)(a.HY,{description:!1,image:y(n),imageStyle:v(e)}),Z=n=>{n.preventDefault(),n.stopPropagation()},f=({title:n,image:e,description:i,buttonAction:r,buttonText:o,className:a})=>(0,c.BX)(d,{className:a,children:[e&&(0,c.tZ)(w,{image:e,size:t.Big}),(0,c.BX)(p,{css:n=>l.iv`
        max-width: ${150*n.gridUnit}px;
      `,children:[(0,c.tZ)(g,{children:n}),i&&(0,c.tZ)(u,{children:i}),r&&o&&(0,c.tZ)(x,{buttonStyle:"primary",onClick:r,onMouseDown:Z,children:o})]})]}),$=({title:n,image:e,description:i,buttonAction:r,buttonText:o})=>(0,c.BX)(d,{children:[e&&(0,c.tZ)(w,{image:e,size:t.Medium}),(0,c.BX)(p,{css:n=>l.iv`
        max-width: ${100*n.gridUnit}px;
      `,children:[(0,c.tZ)(h,{children:n}),i&&(0,c.tZ)(m,{children:i}),o&&r&&(0,c.tZ)(x,{buttonStyle:"primary",onClick:r,onMouseDown:Z,children:o})]})]}),A=({title:n,image:e,description:i})=>(0,c.BX)(d,{children:[e&&(0,c.tZ)(w,{image:e,size:t.Small}),(0,c.BX)(p,{css:n=>l.iv`
        max-width: ${75*n.gridUnit}px;
      `,children:[(0,c.tZ)(h,{children:n}),i&&(0,c.tZ)(b,{children:i})]})]}),k={NO_DATABASES_MATCH_TITLE:(0,o.t)("No databases match your search"),NO_DATABASES_AVAILABLE_TITLE:(0,o.t)("There are no databases available"),MANAGE_YOUR_DATABASES_TEXT:(0,o.t)("Manage your databases"),HERE_TEXT:(0,o.t)("here")},T=n=>(0,c.tZ)(A,{image:"empty.svg",title:n?k.NO_DATABASES_MATCH_TITLE:k.NO_DATABASES_AVAILABLE_TITLE,description:(0,c.BX)("p",{children:[k.MANAGE_YOUR_DATABASES_TEXT," ",(0,c.tZ)("a",{href:"/databaseview/list",children:k.HERE_TEXT})]})})},64158:(n,e,i)=>{i.d(e,{Z:()=>p});var t=i(751995),r=i(693967),l=i.n(r),o=i(135944);const a=t.iK.ul`
  display: inline-block;
  margin: 16px 0;
  padding: 0;

  li {
    display: inline;
    margin: 0 4px;

    span {
      padding: 8px 12px;
      text-decoration: none;
      background-color: ${({theme:n})=>n.colors.grayscale.light5};
      border-radius: ${({theme:n})=>n.borderRadius}px;

      &:hover,
      &:focus {
        z-index: 2;
        color: ${({theme:n})=>n.colors.grayscale.dark1};
        background-color: ${({theme:n})=>n.colors.grayscale.light3};
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
        color: ${({theme:n})=>n.colors.grayscale.light5};
        cursor: default;
        background-color: ${({theme:n})=>n.colors.primary.base};

        &:focus {
          outline: none;
        }
      }
    }
  }
`;function s({children:n}){return(0,o.tZ)(a,{role:"navigation",children:n})}s.Next=function({disabled:n,onClick:e}){return(0,o.tZ)("li",{className:l()({disabled:n}),children:(0,o.tZ)("span",{role:"button",tabIndex:n?-1:0,onClick:i=>{i.preventDefault(),n||e(i)},children:"»"})})},s.Prev=function({disabled:n,onClick:e}){return(0,o.tZ)("li",{className:l()({disabled:n}),children:(0,o.tZ)("span",{role:"button",tabIndex:n?-1:0,onClick:i=>{i.preventDefault(),n||e(i)},children:"«"})})},s.Item=function({active:n,children:e,onClick:i}){return(0,o.tZ)("li",{className:l()({active:n}),children:(0,o.tZ)("span",{role:"button",tabIndex:n?-1:0,onClick:e=>{e.preventDefault(),n||i(e)},children:e})})},s.Ellipsis=function({disabled:n,onClick:e}){return(0,o.tZ)("li",{className:l()({disabled:n}),children:(0,o.tZ)("span",{role:"button",tabIndex:n?-1:0,onClick:i=>{i.preventDefault(),n||e(i)},children:"…"})})};const c=s;var d=i(452630);const p=(0,d.YM)({WrapperComponent:c,itemTypeToComponent:{[d.iB.PAGE]:({value:n,isActive:e,onClick:i})=>(0,o.tZ)(c.Item,{active:e,onClick:i,children:n}),[d.iB.ELLIPSIS]:({isActive:n,onClick:e})=>(0,o.tZ)(c.Ellipsis,{disabled:n,onClick:e}),[d.iB.PREVIOUS_PAGE_LINK]:({isActive:n,onClick:e})=>(0,o.tZ)(c.Prev,{disabled:n,onClick:e}),[d.iB.NEXT_PAGE_LINK]:({isActive:n,onClick:e})=>(0,o.tZ)(c.Next,{disabled:n,onClick:e}),[d.iB.FIRST_PAGE_LINK]:()=>null,[d.iB.LAST_PAGE_LINK]:()=>null}})},397754:(n,e,i)=>{i.d(e,{Z:()=>d});var t=i(667294),r=i(693967),l=i.n(r),o=i(751995),a=i(313322),s=i(135944);const c=o.iK.table`
  ${({theme:n})=>`\n    background-color: ${n.colors.grayscale.light5};\n    border-collapse: separate;\n    border-radius: ${n.borderRadius}px;\n\n    thead > tr > th {\n      border: 0;\n    }\n\n    tbody {\n      tr:first-of-type > td {\n        border-top: 0;\n      }\n    }\n    th {\n      background: ${n.colors.grayscale.light5};\n      position: sticky;\n      top: 0;\n\n      &:first-of-type {\n        padding-left: ${4*n.gridUnit}px;\n      }\n\n      &.xs {\n        min-width: 25px;\n      }\n      &.sm {\n        min-width: 50px;\n      }\n      &.md {\n        min-width: 75px;\n      }\n      &.lg {\n        min-width: 100px;\n      }\n      &.xl {\n        min-width: 150px;\n      }\n      &.xxl {\n        min-width: 200px;\n      }\n\n      span {\n        white-space: nowrap;\n        display: flex;\n        align-items: center;\n        line-height: 2;\n      }\n\n      svg {\n        display: inline-block;\n        position: relative;\n      }\n    }\n\n    td {\n      &.xs {\n        width: 25px;\n      }\n      &.sm {\n        width: 50px;\n      }\n      &.md {\n        width: 75px;\n      }\n      &.lg {\n        width: 100px;\n      }\n      &.xl {\n        width: 150px;\n      }\n      &.xxl {\n        width: 200px;\n      }\n    }\n\n    .table-cell-loader {\n      position: relative;\n\n      .loading-bar {\n        background-color: ${n.colors.secondary.light4};\n        border-radius: 7px;\n\n        span {\n          visibility: hidden;\n        }\n      }\n\n      .empty-loading-bar {\n        display: inline-block;\n        width: 100%;\n        height: 1.2em;\n      }\n    }\n\n    .actions {\n      white-space: nowrap;\n      min-width: 100px;\n\n      svg,\n      i {\n        margin-right: 8px;\n\n        &:hover {\n          path {\n            fill: ${n.colors.primary.base};\n          }\n        }\n      }\n    }\n\n    .table-row {\n      .actions {\n        opacity: 0;\n        font-size: ${n.typography.sizes.xl}px;\n        display: flex;\n      }\n\n      &:hover {\n        background-color: ${n.colors.secondary.light5};\n\n        .actions {\n          opacity: 1;\n          transition: opacity ease-in ${n.transitionTiming}s;\n        }\n      }\n    }\n\n    .table-row-selected {\n      background-color: ${n.colors.secondary.light4};\n\n      &:hover {\n        background-color: ${n.colors.secondary.light4};\n      }\n    }\n\n    .table-cell {\n      font-feature-settings: 'tnum' 1;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: 320px;\n      line-height: 1;\n      vertical-align: middle;\n      &:first-of-type {\n        padding-left: ${4*n.gridUnit}px;\n      }\n      &__wrap {\n        white-space: normal;\n      }\n      &__nowrap {\n        white-space: nowrap;\n      }\n    }\n\n    @keyframes loading-shimmer {\n      40% {\n        background-position: 100% 0;\n      }\n\n      100% {\n        background-position: 100% 0;\n      }\n    }\n  `}
`;c.displayName="table";const d=(0,t.memo)((({getTableProps:n,getTableBodyProps:e,prepareRow:i,headerGroups:t,columns:r,rows:o,loading:d,highlightRowId:p,columnsForWrapText:h})=>(0,s.BX)(c,{...n(),className:"table table-hover",children:[(0,s.tZ)("thead",{children:t.map((n=>(0,s.tZ)("tr",{...n.getHeaderGroupProps(),children:n.headers.map((n=>{let e=(0,s.tZ)(a.Z.Sort,{});return n.isSorted&&n.isSortedDesc?e=(0,s.tZ)(a.Z.SortDesc,{}):n.isSorted&&!n.isSortedDesc&&(e=(0,s.tZ)(a.Z.SortAsc,{})),n.hidden?null:(0,s.tZ)("th",{...n.getHeaderProps(n.canSort?n.getSortByToggleProps():{}),className:l()({[n.size||""]:n.size}),children:(0,s.BX)("span",{children:[n.render("Header"),n.canSort&&e]})})}))})))}),(0,s.BX)("tbody",{...e(),children:[d&&0===o.length&&[...new Array(12)].map(((n,e)=>(0,s.tZ)("tr",{children:r.map(((n,e)=>n.hidden?null:(0,s.tZ)("td",{className:l()("table-cell",{"table-cell-loader":d}),children:(0,s.tZ)("span",{className:"loading-bar empty-loading-bar",role:"progressbar","aria-label":"loading"})},e)))},e))),o.length>0&&o.map((n=>{i(n);const e=n.original.id;return(0,s.tZ)("tr",{...n.getRowProps(),className:l()("table-row",{"table-row-selected":n.isSelected||void 0!==e&&e===p}),children:n.cells.map((n=>{if(n.column.hidden)return null;const e=n.column.cellProps||{},i=null==h?void 0:h.includes(n.column.Header);return(0,s.tZ)("td",{className:l()("table-cell table-cell__"+(i?"wrap":"nowrap"),{"table-cell-loader":d,[n.column.size||""]:n.column.size}),...n.getCellProps(),...e,children:(0,s.tZ)("span",{className:l()({"loading-bar":d}),role:d?"progressbar":void 0,children:(0,s.tZ)("span",{children:n.render("Cell")})})})}))})}))]})]})))}}]);
//# sourceMappingURL=1219396925cdd4c53d39.chunk.js.map