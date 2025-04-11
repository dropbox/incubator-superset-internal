"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9818],{232871:(e,t,i)=>{var n;i.d(t,{p:()=>n}),function(e){e.Dashboards="dashboards",e.Description="description",e.LastModified="lastModified",e.Owner="owner",e.Rows="rows",e.Sql="sql",e.Table="table",e.Tags="tags"}(n||(n={}))},767697:(e,t,i)=>{i.d(t,{pG:()=>v.p,ZP:()=>Z});var n=i(187185),l=i.n(n),a=i(667294),r=i(899612),o=i(751995),s=i(358593),d=i(355786),c=i(61988),p=i(313322),u=i(135944);const h=o.iK.div`
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,g=({text:e,header:t})=>{const i=(0,d.Z)(e);return(0,u.BX)(u.HY,{children:[t&&(0,u.tZ)(h,{children:t}),i.map((e=>(0,u.tZ)("div",{children:e},e)))]})},m=16,f={dashboards:0,table:1,sql:2,rows:3,tags:4,description:5,owner:6,lastModified:7},b=o.iK.div`
  ${({theme:e,count:t})=>`\n    display: flex;\n    align-items: center;\n    padding: 8px 12px;\n    background-color: ${e.colors.grayscale.light4};\n    color: ${e.colors.grayscale.base};\n    font-size: ${e.typography.sizes.s}px;\n    min-width: ${24+32*t-m}px;\n    border-radius: ${e.borderRadius}px;\n    line-height: 1;\n  `}
`,x=o.iK.div`
  ${({theme:e,collapsed:t,last:i,onClick:n})=>`\n    display: flex;\n    align-items: center;\n    max-width: ${174+(i?0:m)}px;\n    min-width: ${t?16+(i?0:m):94+(i?0:m)}px;\n    padding-right: ${i?0:m}px;\n    cursor: ${n?"pointer":"default"};\n    & .metadata-icon {\n      color: ${n&&t?e.colors.primary.base:e.colors.grayscale.base};\n      padding-right: ${t?0:8}px;\n      & .anticon {\n        line-height: 0;\n      }\n    }\n    & .metadata-text {\n      min-width: 70px;\n      overflow: hidden;\n      text-overflow: ${t?"unset":"ellipsis"};\n      white-space: nowrap;\n      text-decoration: ${n?"underline":"none"};\n      line-height: 1.4;\n    }\n  `}
`,w=o.iK.div`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,y=({barWidth:e,contentType:t,collapsed:i,last:n=!1,tooltipPlacement:l})=>{const{icon:r,title:o,tooltip:d=o}=(e=>{const{type:t}=e;switch(t){case v.p.Dashboards:return{icon:p.Z.FundProjectionScreenOutlined,title:e.title,tooltip:e.description?(0,u.tZ)("div",{children:(0,u.tZ)(g,{header:e.title,text:e.description})}):void 0};case v.p.Description:return{icon:p.Z.BookOutlined,title:e.value};case v.p.LastModified:return{icon:p.Z.EditOutlined,title:e.value,tooltip:(0,u.BX)("div",{children:[(0,u.tZ)(g,{header:(0,c.t)("Last modified"),text:e.value}),(0,u.tZ)(g,{header:(0,c.t)("Modified by"),text:e.modifiedBy})]})};case v.p.Owner:return{icon:p.Z.UserOutlined,title:e.createdBy,tooltip:(0,u.BX)("div",{children:[(0,u.tZ)(g,{header:(0,c.t)("Created by"),text:e.createdBy}),!!e.owners&&(0,u.tZ)(g,{header:(0,c.t)("Owners"),text:e.owners}),(0,u.tZ)(g,{header:(0,c.t)("Created on"),text:e.createdOn})]})};case v.p.Rows:return{icon:p.Z.InsertRowBelowOutlined,title:e.title,tooltip:e.title};case v.p.Sql:return{icon:p.Z.ConsoleSqlOutlined,title:e.title,tooltip:e.title};case v.p.Table:return{icon:p.Z.Table,title:e.title,tooltip:e.title};case v.p.Tags:return{icon:p.Z.TagsOutlined,title:e.values.join(", "),tooltip:(0,u.tZ)("div",{children:(0,u.tZ)(g,{header:(0,c.t)("Tags"),text:e.values})})};default:throw Error(`Invalid type provided: ${t}`)}})(t),[h,m]=(0,a.useState)(!1),f=(0,a.useRef)(null),b=r,{type:y,onClick:Z}=t;(0,a.useEffect)((()=>{m(!!f.current&&f.current.scrollWidth>f.current.clientWidth)}),[e,m,t]);const $=(0,u.BX)(x,{collapsed:i,last:n,onClick:Z?()=>Z(y):void 0,role:Z?"button":void 0,children:[(0,u.tZ)(b,{iconSize:"l",className:"metadata-icon"}),!i&&(0,u.tZ)("span",{ref:f,className:"metadata-text",children:o})]});return h||i||d&&d!==o?(0,u.tZ)(s.u,{placement:l,title:(0,u.tZ)(w,{children:d}),children:$}):$};var v=i(232871);const Z=({items:e,tooltipPlacement:t="top"})=>{const[i,n]=(0,a.useState)(),[o,s]=(0,a.useState)(!1),d=l()(e,((e,t)=>e.type===t.type)).sort(((e,t)=>f[e.type]-f[t.type])),c=d.length;if(c<2)throw Error("The minimum number of items for the metadata bar is 2.");if(c>6)throw Error("The maximum number of items for the metadata bar is 6.");const p=(0,a.useCallback)((e=>{const t=110*c-m;n(e),s(Boolean(e&&e<t))}),[c]),{ref:h}=(0,r.NB)({onResize:p});return(0,u.tZ)(b,{ref:h,count:c,children:d.map(((e,n)=>(0,u.tZ)(y,{barWidth:i,contentType:e,collapsed:o,last:n===c-1,tooltipPlacement:t},n)))})}},852564:(e,t,i)=>{i.d(t,{u:()=>v});var n=i(211965),l=i(751995),a=i(61988),r=i(104715),o=i(667294),s=i(358593),d=i(899612),c=i(135944);const p=e=>n.iv`
  display: flex;
  font-size: ${e.typography.sizes.xl}px;
  font-weight: ${e.typography.weights.bold};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & .dynamic-title,
  & .dynamic-title-input {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & .dynamic-title {
    cursor: default;
  }
  & .dynamic-title-input {
    border: none;
    padding: 0;
    outline: none;

    &::placeholder {
      color: ${e.colors.grayscale.light1};
    }
  }

  & .input-sizer {
    position: absolute;
    left: -9999px;
    display: inline-block;
    white-space: pre;
  }
`,u=(0,o.memo)((({title:e,placeholder:t,onSave:i,canEdit:l,label:r})=>{const[u,h]=(0,o.useState)(!1),[g,m]=(0,o.useState)(e||""),f=(0,o.useRef)(null),[b,x]=(0,o.useState)(!1),{width:w,ref:y}=(0,d.NB)(),{width:v,ref:Z}=(0,d.NB)({refreshMode:"debounce"});(0,o.useEffect)((()=>{m(e)}),[e]),(0,o.useEffect)((()=>{if(u&&null!=f&&f.current&&(f.current.focus(),f.current.setSelectionRange)){const{length:e}=f.current.value;f.current.setSelectionRange(e,e),f.current.scrollLeft=f.current.scrollWidth}}),[u]),(0,o.useLayoutEffect)((()=>{null!=y&&y.current&&(y.current.textContent=g||t)}),[g,t,y]),(0,o.useEffect)((()=>{f.current&&f.current.scrollWidth>f.current.clientWidth?x(!0):x(!1)}),[w,v]);const $=(0,o.useCallback)((()=>{l&&!u&&h(!0)}),[l,u]),S=(0,o.useCallback)((()=>{if(!l)return;const t=g.trim();m(t),e!==t&&i(t),h(!1)}),[l,g,i,e]),P=(0,o.useCallback)((e=>{l&&u&&m(e.target.value)}),[l,u]),k=(0,o.useCallback)((e=>{var t;l&&"Enter"===e.key&&(e.preventDefault(),null==(t=f.current)||t.blur())}),[l]);return(0,c.BX)("div",{css:p,ref:Z,children:[(0,c.tZ)(s.u,{id:"title-tooltip",title:b&&g&&!u?g:null,children:l?(0,c.tZ)("input",{className:"dynamic-title-input","aria-label":null!=r?r:(0,a.t)("Title"),ref:f,onChange:P,onBlur:S,onClick:$,onKeyPress:k,placeholder:t,value:g,css:n.iv`
                cursor: ${u?"text":"pointer"};

                ${w&&w>0&&n.iv`
                  width: ${w+1}px;
                `}
              `}):(0,c.tZ)("span",{className:"dynamic-title","aria-label":null!=r?r:(0,a.t)("Title"),ref:f,children:g})}),(0,c.tZ)("span",{ref:y,className:"input-sizer","aria-hidden":!0,tabIndex:-1})]})}));var h=i(679789),g=i(236674),m=i(313322),f=i(835932);const b=e=>n.iv`
  width: ${8*e.gridUnit}px;
  height: ${8*e.gridUnit}px;
  padding: 0;
  border: 1px solid ${e.colors.primary.dark2};

  &.ant-btn > span.anticon {
    line-height: 0;
    transition: inherit;
  }

  &:hover:not(:focus) > span.anticon {
    color: ${e.colors.primary.light1};
  }
  &:focus-visible {
    outline: 2px solid ${e.colors.primary.dark2};
  }
`,x=e=>n.iv`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${e.colors.grayscale.light5};
  height: ${16*e.gridUnit}px;
  padding: 0 ${4*e.gridUnit}px;

  .editable-title {
    overflow: hidden;

    & > input[type='button'],
    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      white-space: nowrap;
    }
  }

  span[role='button'] {
    display: flex;
    height: 100%;
  }

  .title-panel {
    display: flex;
    align-items: center;
    min-width: 0;
    margin-right: ${12*e.gridUnit}px;
  }

  .right-button-panel {
    display: flex;
    align-items: center;
  }
`,w=e=>n.iv`
  display: flex;
  align-items: center;
  padding-left: ${2*e.gridUnit}px;

  & .fave-unfave-icon {
    padding: 0 ${e.gridUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,y=e=>n.iv`
  margin-left: ${2*e.gridUnit}px;
`,v=({editableTitleProps:e,showTitlePanelItems:t,certificatiedBadgeProps:i,showFaveStar:n,faveStarProps:o,titlePanelAdditionalItems:s,rightPanelAdditionalItems:d,additionalActionsMenu:p,menuDropdownProps:v,showMenuDropdown:Z=!0,tooltipProps:$})=>{const S=(0,l.Fg)();return(0,c.BX)("div",{css:x,className:"header-with-actions",children:[(0,c.BX)("div",{className:"title-panel",children:[(0,c.tZ)(u,{...e}),t&&(0,c.BX)("div",{css:w,children:[(null==i?void 0:i.certifiedBy)&&(0,c.tZ)(h.Z,{...i}),n&&(0,c.tZ)(g.Z,{...o}),s]})]}),(0,c.BX)("div",{className:"right-button-panel",children:[d,(0,c.tZ)("div",{css:y,children:Z&&(0,c.tZ)(r.Gj,{trigger:["click"],overlay:p,...v,children:(0,c.tZ)(f.Z,{css:b,buttonStyle:"tertiary","aria-label":(0,a.t)("Menu actions trigger"),tooltip:null==$?void 0:$.text,placement:null==$?void 0:$.placement,children:(0,c.tZ)(m.Z.MoreHoriz,{iconColor:S.colors.primary.dark2,iconSize:"l"})})})})]})]})}},946977:(e,t,i)=>{i.d(t,{Z:()=>x,u:()=>n});var n,l=i(618446),a=i.n(l),r=i(667294),o=i(751995),s=i(61988),d=i(379521),c=i(104715),p=i(64158),u=i(397754),h=i(135944);!function(e){e.Default="Default",e.Small="Small"}(n||(n={}));const g=o.iK.div`
  margin: ${({theme:e})=>40*e.gridUnit}px 0;
`,m=o.iK.div`
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
`,f=o.iK.div`
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
`,b=({columns:e,data:t,pageSize:i,totalCount:l=t.length,initialPageIndex:o,initialSortBy:b=[],loading:x=!1,withPagination:w=!0,emptyWrapperType:y=n.Default,noDataText:v,showRowCount:Z=!0,serverPagination:$=!1,columnsForWrapText:S,onServerPagination:P=(()=>{}),scrollTopOnPagination:k=!1,...B})=>{const T={pageSize:null!=i?i:10,pageIndex:null!=o?o:0,sortBy:b},{getTableProps:E,getTableBodyProps:C,headerGroups:I,page:U,rows:z,prepareRow:M,pageCount:N,gotoPage:R,state:{pageIndex:D,pageSize:O,sortBy:X}}=(0,d.useTable)({columns:e,data:t,initialState:T,manualPagination:$,manualSortBy:$,pageCount:Math.ceil(l/T.pageSize)},d.useFilters,d.useSortBy,d.usePagination),W=w?U:z;let L;switch(y){case n.Small:L=({children:e})=>(0,h.tZ)(h.HY,{children:e});break;case n.Default:default:L=({children:e})=>(0,h.tZ)(g,{children:e})}const H=!x&&0===W.length,K=N>1&&w,F=(0,r.useRef)(null);return(0,r.useEffect)((()=>{$&&D!==T.pageIndex&&P({pageIndex:D})}),[D]),(0,r.useEffect)((()=>{$&&!a()(X,T.sortBy)&&P({pageIndex:0,sortBy:X})}),[X]),(0,h.BX)(h.HY,{children:[(0,h.BX)(m,{...B,ref:F,children:[(0,h.tZ)(u.Z,{getTableProps:E,getTableBodyProps:C,prepareRow:M,headerGroups:I,rows:W,columns:e,loading:x,columnsForWrapText:S}),H&&(0,h.tZ)(L,{children:v?(0,h.tZ)(c.HY,{image:c.HY.PRESENTED_IMAGE_SIMPLE,description:v}):(0,h.tZ)(c.HY,{image:c.HY.PRESENTED_IMAGE_SIMPLE})})]}),K&&(0,h.BX)(f,{className:"pagination-container",isPaginationSticky:B.isPaginationSticky,children:[(0,h.tZ)(p.Z,{totalPages:N||0,currentPage:N?D+1:0,onChange:e=>(e=>{var t;k&&(null==F||null==(t=F.current)||t.scroll(0,0)),R(e)})(e-1),hideFirstAndLastPageLinks:!0}),Z&&(0,h.tZ)("div",{className:"row-count-container",children:!x&&(0,s.t)("%s-%s of %s",O*D+(U.length&&1),O*D+U.length,l)})]})]})},x=(0,r.memo)(b)},676962:(e,t,i)=>{i.d(t,{Z:()=>n.Z,u:()=>n.u});var n=i(946977)}}]);
//# sourceMappingURL=f71111a4285d49e5fcff.chunk.js.map