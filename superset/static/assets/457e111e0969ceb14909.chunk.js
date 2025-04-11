"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8438],{751794:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(667294);const i=()=>{const[e,t]=(0,a.useState)(0),[n,i]=(0,a.useState)(!1),l=(0,a.useRef)(null),r=(0,a.useRef)(null);return(0,a.useLayoutEffect)((()=>{var e;const n=()=>{const e=l.current;if(!e)return;const n=r.current,{scrollWidth:a,clientWidth:o,childNodes:s}=e;if(a>o){const e=6,a=(null==n?void 0:n.offsetWidth)||0,l=o-e,r=s.length;let d=0,c=0;for(let e=0;e<r;e+=1)l-d-a<=0&&(c+=1),d+=s[e].offsetWidth;r>1&&c?(i(!0),t(c)):(i(!1),t(1))}else i(!1),t(0)},a=new ResizeObserver(n),o=null==(e=l.current)?void 0:e.parentElement;return o&&a.observe(o),n(),()=>{a.disconnect()}}),[r.current]),[l,r,e,n]}},852564:(e,t,n)=>{n.d(t,{u:()=>$});var a=n(211965),i=n(751995),l=n(61988),r=n(104715),o=n(667294),s=n(358593),d=n(899612),c=n(135944);const h=e=>a.iv`
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
`,u=(0,o.memo)((({title:e,placeholder:t,onSave:n,canEdit:i,label:r})=>{const[u,p]=(0,o.useState)(!1),[g,m]=(0,o.useState)(e||""),b=(0,o.useRef)(null),[f,v]=(0,o.useState)(!1),{width:y,ref:x}=(0,d.NB)(),{width:$,ref:w}=(0,d.NB)({refreshMode:"debounce"});(0,o.useEffect)((()=>{m(e)}),[e]),(0,o.useEffect)((()=>{if(u&&null!=b&&b.current&&(b.current.focus(),b.current.setSelectionRange)){const{length:e}=b.current.value;b.current.setSelectionRange(e,e),b.current.scrollLeft=b.current.scrollWidth}}),[u]),(0,o.useLayoutEffect)((()=>{null!=x&&x.current&&(x.current.textContent=g||t)}),[g,t,x]),(0,o.useEffect)((()=>{b.current&&b.current.scrollWidth>b.current.clientWidth?v(!0):v(!1)}),[y,$]);const Z=(0,o.useCallback)((()=>{i&&!u&&p(!0)}),[i,u]),U=(0,o.useCallback)((()=>{if(!i)return;const t=g.trim();m(t),e!==t&&n(t),p(!1)}),[i,g,n,e]),S=(0,o.useCallback)((e=>{i&&u&&m(e.target.value)}),[i,u]),z=(0,o.useCallback)((e=>{var t;i&&"Enter"===e.key&&(e.preventDefault(),null==(t=b.current)||t.blur())}),[i]);return(0,c.BX)("div",{css:h,ref:w,children:[(0,c.tZ)(s.u,{id:"title-tooltip",title:f&&g&&!u?g:null,children:i?(0,c.tZ)("input",{className:"dynamic-title-input","aria-label":null!=r?r:(0,l.t)("Title"),ref:b,onChange:S,onBlur:U,onClick:Z,onKeyPress:z,placeholder:t,value:g,css:a.iv`
                cursor: ${u?"text":"pointer"};

                ${y&&y>0&&a.iv`
                  width: ${y+1}px;
                `}
              `}):(0,c.tZ)("span",{className:"dynamic-title","aria-label":null!=r?r:(0,l.t)("Title"),ref:b,children:g})}),(0,c.tZ)("span",{ref:x,className:"input-sizer","aria-hidden":!0,tabIndex:-1})]})}));var p=n(679789),g=n(236674),m=n(313322),b=n(835932);const f=e=>a.iv`
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
`,v=e=>a.iv`
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
`,y=e=>a.iv`
  display: flex;
  align-items: center;
  padding-left: ${2*e.gridUnit}px;

  & .fave-unfave-icon {
    padding: 0 ${e.gridUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,x=e=>a.iv`
  margin-left: ${2*e.gridUnit}px;
`,$=({editableTitleProps:e,showTitlePanelItems:t,certificatiedBadgeProps:n,showFaveStar:a,faveStarProps:o,titlePanelAdditionalItems:s,rightPanelAdditionalItems:d,additionalActionsMenu:h,menuDropdownProps:$,showMenuDropdown:w=!0,tooltipProps:Z})=>{const U=(0,i.Fg)();return(0,c.BX)("div",{css:v,className:"header-with-actions",children:[(0,c.BX)("div",{className:"title-panel",children:[(0,c.tZ)(u,{...e}),t&&(0,c.BX)("div",{css:y,children:[(null==n?void 0:n.certifiedBy)&&(0,c.tZ)(p.Z,{...n}),a&&(0,c.tZ)(g.Z,{...o}),s]})]}),(0,c.BX)("div",{className:"right-button-panel",children:[d,(0,c.tZ)("div",{css:x,children:w&&(0,c.tZ)(r.Gj,{trigger:["click"],overlay:h,...$,children:(0,c.tZ)(b.Z,{css:f,buttonStyle:"tertiary","aria-label":(0,l.t)("Menu actions trigger"),tooltip:null==Z?void 0:Z.text,placement:null==Z?void 0:Z.placement,children:(0,c.tZ)(m.Z.MoreHoriz,{iconColor:U.colors.primary.dark2,iconSize:"l"})})})})]})]})}},280663:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(929119),i=n(751995),l=n(667294),r=n(961337),o=n(135944);const s=i.iK.div`
  position: absolute;
  height: 100%;

  :hover .sidebar-resizer::after {
    background-color: ${({theme:e})=>e.colors.primary.base};
  }

  .sidebar-resizer {
    // @z-index-above-sticky-header (100) + 1 = 101
    z-index: 101;
  }

  .sidebar-resizer::after {
    display: block;
    content: '';
    width: 1px;
    height: 100%;
    margin: 0 auto;
  }
`,d=({id:e,initialWidth:t,minWidth:n,maxWidth:i,enable:d,children:c})=>{const[h,u]=function(e,t){const n=(0,l.useRef)(),[a,i]=(0,l.useState)(t);return(0,l.useEffect)((()=>{var t;n.current=null!=(t=n.current)?t:(0,r.rV)(r.dR.CommonResizableSidebarWidths,{}),n.current[e]&&i(n.current[e])}),[e]),[a,function(t){i(t),(0,r.LS)(r.dR.CommonResizableSidebarWidths,{...n.current,[e]:t})}]}(e,t);return(0,o.BX)(o.HY,{children:[(0,o.tZ)(s,{children:(0,o.tZ)(a.e,{enable:{right:d},handleClasses:{right:"sidebar-resizer"},size:{width:h,height:"100%"},minWidth:n,maxWidth:i,onResizeStop:(e,t,n,a)=>u(h+a.width)})}),c(h)]})}},486057:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(211965),i=n(751995),l=n(178186),r=n(313322),o=n(358593),s=n(135944);const d=function({warningMarkdown:e,size:t,marginRight:n}){const d=(0,i.Fg)();return(0,s.tZ)(o.u,{id:"warning-tooltip",title:(0,s.tZ)(l.Z,{source:e}),children:(0,s.tZ)(r.Z.AlertSolid,{iconColor:d.colors.alert.base,iconSize:t,css:(0,a.iv)({marginRight:null!=n?n:2*d.gridUnit},"","")})})}},903720:(e,t,n)=>{n.r(t),n.d(t,{datasetReducer:()=>ht,default:()=>pt});var a=n(667294),i=n(616550),l=n(431069),r=n(61988),o=n(68492),s=n(115926),d=n.n(s),c=n(672570);const h=(e,t)=>{const[n,i]=(0,a.useState)([]),s=t?encodeURIComponent(t):void 0,h=(0,a.useCallback)((async e=>{let t,n=[],a=0;for(;void 0===t||n.length<t;){const i=d().encode_uri({filters:e,page:a});try{const e=await l.Z.get({endpoint:`/api/v1/dataset/?q=${i}`});({count:t}=e.json);const{json:{result:r}}=e;n=[...n,...r],a+=1}catch(e){(0,c.Gb)((0,r.t)("There was an error fetching dataset")),o.Z.error((0,r.t)("There was an error fetching dataset"),e)}}i(n)}),[]);(0,a.useEffect)((()=>{const n=[{col:"database",opr:"rel_o_m",value:null==e?void 0:e.id},{col:"schema",opr:"eq",value:s},{col:"sql",opr:"dataset_is_null_or_empty",value:!0}];t&&h(n)}),[null==e?void 0:e.id,t,s,h]);const u=(0,a.useMemo)((()=>null==n?void 0:n.map((e=>e.table_name))),[n]);return{datasets:n,datasetNames:u}};var u,p=n(852564),g=n(835932),m=n(313322),b=n(683862);!function(e){e[e.SelectDatabase=0]="SelectDatabase",e[e.SelectCatalog=1]="SelectCatalog",e[e.SelectSchema=2]="SelectSchema",e[e.SelectTable=3]="SelectTable",e[e.ChangeDataset=4]="ChangeDataset"}(u||(u={}));var f=n(751995),v=n(211965);const y=f.iK.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};
`,x=f.iK.div`
  width: ${({theme:e,width:t})=>null!=t?t:80*e.gridUnit}px;
  max-width: ${({theme:e,width:t})=>null!=t?t:80*e.gridUnit}px;
  flex-direction: column;
  flex: 1 0 auto;
`,$=f.iK.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,w=f.iK.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`,Z=(0,f.iK)(w)`
  flex: 1 0 auto;
  position: relative;
`,U=(0,f.iK)(w)`
  flex: 1 0 auto;
  height: auto;
`,S=(0,f.iK)(w)`
  flex: 0 0 auto;
  height: ${({theme:e})=>16*e.gridUnit}px;
  z-index: 0;
`,z=f.iK.div`
  ${({theme:e})=>`\n  flex: 0 0 auto;\n  height: ${16*e.gridUnit}px;\n  border-bottom: 2px solid ${e.colors.grayscale.light2};\n\n  .header-with-actions {\n    height: ${15.5*e.gridUnit}px;\n  }\n  `}
`,C=f.iK.div`
  ${({theme:e})=>`\n  margin: ${4*e.gridUnit}px;\n  font-size: ${e.typography.sizes.xl}px;\n  font-weight: ${e.typography.weights.bold};\n  `}
`,_=f.iK.div`
  ${({theme:e})=>`\n  height: 100%;\n  border-right: 1px solid ${e.colors.grayscale.light2};\n  `}
`,T=f.iK.div`
  width: 100%;
  position: relative;
`,k=f.iK.div`
  ${({theme:e})=>`\n  border-left: 1px solid ${e.colors.grayscale.light2};\n  color: ${e.colors.success.base};\n  `}
`,E=f.iK.div`
  ${({theme:e})=>`\n  height: ${16*e.gridUnit}px;\n  width: 100%;\n  border-top: 1px solid ${e.colors.grayscale.light2};\n  border-bottom: 1px solid ${e.colors.grayscale.light2};\n  color: ${e.colors.info.base};\n  border-top: ${e.gridUnit/4}px solid\n    ${e.colors.grayscale.light2};\n  padding: ${4*e.gridUnit}px;\n  display: flex;\n  justify-content: flex-end;\n  background-color: ${e.colors.grayscale.light5};\n  z-index: ${e.zIndex.max}\n  `}
`,I=f.iK.div`
  .ant-btn {
    span {
      margin-right: 0;
    }

    &:disabled {
      svg {
        color: ${({theme:e})=>e.colors.grayscale.light1};
      }
    }
  }
`,P=e=>v.iv`
  width: ${21.5*e.gridUnit}px;

  &:disabled {
    background-color: ${e.colors.grayscale.light3};
    color: ${e.colors.grayscale.light1};
  }
`;var K=n(135944);const B=(0,r.t)("New dataset"),X={text:(0,r.t)("Select a database table and create dataset"),placement:"bottomRight"},D=()=>(0,K.BX)(g.Z,{buttonStyle:"primary",tooltip:null==X?void 0:X.text,placement:null==X?void 0:X.placement,disabled:!0,css:P,children:[(0,K.tZ)(m.Z.Save,{iconSize:"m"}),(0,r.t)("Save")]}),M=()=>(0,K.BX)(b.Menu,{children:[(0,K.tZ)(b.Menu.Item,{children:(0,r.t)("Settings")}),(0,K.tZ)(b.Menu.Item,{children:(0,r.t)("Delete")})]});function N({setDataset:e,title:t=B,editing:n=!1}){const a={title:null!=t?t:B,placeholder:B,onSave:t=>{e({type:u.ChangeDataset,payload:{name:"dataset_name",value:t}})},canEdit:!1,label:(0,r.t)("dataset name")};return(0,K.tZ)(I,{children:n?(0,K.tZ)(p.u,{editableTitleProps:a,showTitlePanelItems:!1,showFaveStar:!1,faveStarProps:{itemId:1,saveFaveStar:()=>{}},titlePanelAdditionalItems:(0,K.tZ)(K.HY,{}),rightPanelAdditionalItems:D(),additionalActionsMenu:M(),menuDropdownProps:{disabled:!0},tooltipProps:X}):(0,K.tZ)(C,{children:t||B})})}var R,V,A=n(782607),H=n(171262),L=n(473727),j=n(355786),O=n(493197),W=n(94301);function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Y.apply(null,arguments)}const F=({title:e,titleId:t,...n},i)=>a.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",width:160,height:166,fill:"none",ref:i,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,R||(R=a.createElement("path",{fill:"#FAFAFA",fillRule:"evenodd",d:"M123.638 8a.5.5 0 0 0-.5.5V158h28.758V8.5a.5.5 0 0 0-.5-.5zM84.793 40.643a.5.5 0 0 1 .5-.5h27.759a.5.5 0 0 1 .5.5V158H84.793zM46.95 72.285a.5.5 0 0 0-.5.5V158h28.758V72.785a.5.5 0 0 0-.5-.5zM8.604 93.715a.5.5 0 0 0-.5.5V158h28.758V94.215a.5.5 0 0 0-.5-.5z",clipRule:"evenodd"})),V||(V=a.createElement("path",{fill:"#D9D9D9",d:"M123.138 158h-.5v.5h.5zm28.758 0v.5h.5v-.5zm-38.344 0v.5h.5v-.5zm-28.759 0h-.5v.5h.5zm-38.344-.001h-.5v.5h.5zm28.758 0v.5h.5v-.5zM8.104 158h-.5v.5h.5zm28.758 0v.5h.5v-.5zM123.639 8.5v-1a1 1 0 0 0-1 1zm0 149.5V8.5h-1V158zm28.258-.5h-28.758v1h28.758zm-.5-149V158h1V8.5zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1h-27.758zM85.293 39.643a1 1 0 0 0-1 1h1zm27.759 0H85.293v1h27.759zm1 1a1 1 0 0 0-1-1v1zm0 117.357V40.643h-1V158zm-29.259.5h28.759v-1H84.793zm-.5-117.857V158h1V40.643zM46.95 72.785v-1a1 1 0 0 0-1 1zm0 85.214V72.785h-1V158zm28.258-.5H46.45v1h28.758zm-.5-84.714V158h1V72.785zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1H46.95zM8.604 94.215v-1a1 1 0 0 0-1 1zm0 63.785V94.215h-1V158zm28.258-.5H8.104v1h28.758zm-.5-63.285V158h1V94.215zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1H8.604z"}))),q=(0,a.forwardRef)(F);var G=n(414114),Q=n(34858),J=n(593139),ee=n(730381),te=n.n(ee),ne=n(751794),ae=n(358593);const ie=f.iK.div`
  & > span {
    width: 100%;
    display: flex;

    .ant-tooltip-open {
      display: inline;
    }
  }
`,le=f.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
`,re=f.iK.span`
  &:not(:last-child)::after {
    content: ', ';
  }
`,oe=f.iK.div`
  .link {
    color: ${({theme:e})=>e.colors.grayscale.light5};
    display: block;
    text-decoration: underline;
  }
`,se=f.iK.span`
  ${({theme:e})=>`\n  cursor: pointer;\n  color: ${e.colors.primary.dark1};\n  font-weight: ${e.typography.weights.normal};\n  `}
`;function de({items:e,renderVisibleItem:t=(e=>e),renderTooltipItem:n=(e=>e),getKey:i=(e=>e),maxLinks:l=20}){const[o,s,d,c]=(0,ne.Z)(),h=(0,a.useMemo)((()=>e.length>l?e.length-l:void 0),[e,l]),u=(0,a.useMemo)((()=>(0,K.tZ)(le,{ref:o,children:e.map((e=>(0,K.tZ)(re,{children:t(e)},i(e))))})),[i,e,t]),p=(0,a.useMemo)((()=>e.slice(0,l).map((e=>(0,K.tZ)(oe,{children:n(e)},i(e))))),[i,e,l,n]);return(0,K.tZ)(ie,{children:(0,K.BX)(ae.u,{placement:"top",title:d?(0,K.BX)(K.HY,{children:[p,h&&(0,K.tZ)("span",{children:(0,r.t)("+ %s more",h)})]}):null,children:[u,c&&(0,K.BX)(se,{ref:s,children:["+",d]})]})})}const ce=e=>({key:e.id,to:`/superset/dashboard/${e.id}`,target:"_blank",rel:"noreferer noopener",children:e.dashboard_title}),he=e=>v.iv`
  color: ${e.colors.grayscale.light5};
  text-decoration: underline;
  &:hover {
    color: inherit;
  }
`,ue=[{key:"slice_name",title:(0,r.t)("Chart"),width:"320px",sorter:!0,render:(e,t)=>(0,K.tZ)(L.rU,{to:t.url,children:t.slice_name})},{key:"owners",title:(0,r.t)("Chart owners"),width:"242px",render:(e,t)=>{var n,a;return(0,K.tZ)(de,{items:null!=(n=null==(a=t.owners)?void 0:a.map((e=>`${e.first_name} ${e.last_name}`)))?n:[]})}},{key:"last_saved_at",title:(0,r.t)("Chart last modified"),width:"209px",sorter:!0,defaultSortOrder:"descend",render:(e,t)=>t.last_saved_at?te().utc(t.last_saved_at).fromNow():null},{key:"last_saved_by.first_name",title:(0,r.t)("Chart last modified by"),width:"216px",sorter:!0,render:(e,t)=>t.last_saved_by?`${t.last_saved_by.first_name} ${t.last_saved_by.last_name}`:null},{key:"dashboards",title:(0,r.t)("Dashboard usage"),width:"420px",render:(e,t)=>(0,K.tZ)(de,{items:t.dashboards,renderVisibleItem:e=>(0,K.tZ)(L.rU,{...ce(e)}),renderTooltipItem:e=>(0,K.tZ)(L.rU,{...ce(e),css:he}),getKey:e=>e.id})}],pe=e=>v.iv`
  && th.ant-table-cell {
    color: ${e.colors.grayscale.light1};
  }

  .ant-table-placeholder {
    display: none;
  }
`,ge=(0,K.BX)(K.HY,{children:[(0,K.tZ)(m.Z.PlusOutlined,{iconSize:"m",css:v.iv`
        & > .anticon {
          line-height: 0;
        }
      `}),(0,r.t)("Create chart with dataset")]}),me=(0,f.iK)(W.XJ)`
  margin: ${({theme:e})=>13*e.gridUnit}px 0;
`,be=({datasetId:e})=>{const{loading:t,recordCount:n,data:i,onChange:l}=(e=>{const{addDangerToast:t}=(0,G.e1)(),n=(0,a.useMemo)((()=>[{id:"datasource_id",operator:J.p.Equals,value:e}]),[e]),{state:{loading:i,resourceCount:l,resourceCollection:o},fetchData:s}=(0,Q.Yi)("chart",(0,r.t)("chart"),t,!0,[],n),d=(0,a.useMemo)((()=>o.map((e=>({...e,key:e.id})))),[o]),c=(0,a.useCallback)(((e,t,n)=>{var a,i;const l=(null!=(a=e.current)?a:1)-1,r=null!=(i=e.pageSize)?i:0,o=(0,j.Z)(n).filter((({columnKey:e})=>"string"==typeof e)).map((({columnKey:e,order:t})=>({id:e,desc:"descend"===t})));s({pageIndex:l,pageSize:r,sortBy:o,filters:[]})}),[s]);return(0,a.useEffect)((()=>{s({pageIndex:0,pageSize:25,sortBy:[{id:"last_saved_at",desc:!0}],filters:[]})}),[s]),{loading:i,recordCount:l,data:d,onChange:c}})(e),o=(0,a.useCallback)((()=>window.open(`/explore/?dataset_type=table&dataset_id=${e}`,"_blank")),[e]);return(0,K.BX)("div",{css:i.length?null:pe,children:[(0,K.tZ)(O.ZP,{columns:ue,data:i,size:O.ex.Middle,defaultPageSize:25,recordCount:n,loading:t,onChange:l}),i.length||t?null:(0,K.tZ)(me,{image:(0,K.tZ)(q,{}),title:(0,r.t)("No charts"),description:(0,r.t)("This dataset is not used to power any charts."),buttonText:ge,buttonAction:o})]})},fe=(0,f.iK)(H.ZP)`
  ${({theme:e})=>`\n  margin-top: ${8.5*e.gridUnit}px;\n  padding-left: ${4*e.gridUnit}px;\n  padding-right: ${4*e.gridUnit}px;\n\n  .ant-tabs-top > .ant-tabs-nav::before {\n    width: ${50*e.gridUnit}px;\n  }\n  `}
`,ve=f.iK.div`
  ${({theme:e})=>`\n  .ant-badge {\n    width: ${8*e.gridUnit}px;\n    margin-left: ${2.5*e.gridUnit}px;\n  }\n  `}
`,ye={USAGE_TEXT:(0,r.t)("Usage"),COLUMNS_TEXT:(0,r.t)("Columns"),METRICS_TEXT:(0,r.t)("Metrics")},xe=({id:e})=>{const{usageCount:t}=(e=>{const[t,n]=(0,a.useState)(0),i=(0,a.useCallback)((()=>l.Z.get({endpoint:`/api/v1/dataset/${e}/related_objects`}).then((({json:e})=>{n(null==e?void 0:e.charts.count)})).catch((e=>{(0,c.Gb)((0,r.t)("There was an error fetching dataset's related objects")),o.Z.error(e)}))),[e]);return(0,a.useEffect)((()=>{e&&i()}),[e,i]),{usageCount:t}})(e),n=(0,K.BX)(ve,{children:[(0,K.tZ)("span",{children:ye.USAGE_TEXT}),t>0&&(0,K.tZ)(A.Z,{count:t})]});return(0,K.BX)(fe,{moreIcon:null,fullWidth:!1,children:[(0,K.tZ)(H.ZP.TabPane,{tab:ye.COLUMNS_TEXT},"1"),(0,K.tZ)(H.ZP.TabPane,{tab:ye.METRICS_TEXT},"2"),(0,K.tZ)(H.ZP.TabPane,{tab:n,children:(0,K.tZ)(be,{datasetId:e})},"3")]})};var $e=n(23525),we=n(229487);const Ze=(e,t,n)=>{var a;return null==t||null==(a=t[e])||null==a.localeCompare?void 0:a.localeCompare(null==n?void 0:n[e])};var Ue=n(289419);const Se=f.iK.div`
  padding: ${({theme:e})=>8*e.gridUnit}px
    ${({theme:e})=>6*e.gridUnit}px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`,ze=(0,f.iK)(W.XJ)`
  max-width: 50%;

  p {
    width: ${({theme:e})=>115*e.gridUnit}px;
  }
`,Ce=(0,r.t)("Datasets can be created from database tables or SQL queries. Select a database table to the left or "),_e=(0,r.t)("create dataset from SQL query"),Te=(0,r.t)(" to open SQL Lab. From there you can save the query as a dataset."),ke=(0,r.t)("Select dataset source"),Ee=(0,r.t)("No table columns"),Ie=(0,r.t)("This database table does not contain any data. Please select a different table."),Pe=(0,r.t)("An Error Occurred"),Ke=(0,r.t)("Unable to load columns for the selected table. Please select a different table."),Be=e=>{const{hasError:t,tableName:n,hasColumns:a}=e;let i="empty-dataset.svg",l=ke,r=(0,K.BX)(K.HY,{children:[Ce,(0,K.tZ)(L.rU,{to:"/sqllab",children:(0,K.tZ)("span",{role:"button",tabIndex:0,children:_e})}),Te]});return t?(l=Pe,r=(0,K.tZ)(K.HY,{children:Ke}),i=void 0):n&&!a&&(i="no-columns.svg",l=Ee,r=(0,K.tZ)(K.HY,{children:Ie})),(0,K.tZ)(Se,{children:(0,K.tZ)(ze,{image:i,title:l,description:r})})};var Xe;!function(e){e.ABSOLUTE="absolute",e.RELATIVE="relative"}(Xe||(Xe={}));const De=f.iK.div`
  ${({theme:e,position:t})=>`\n  position: ${t};\n  margin: ${4*e.gridUnit}px\n    ${3*e.gridUnit}px\n    ${3*e.gridUnit}px\n    ${6*e.gridUnit}px;\n  font-size: ${6*e.gridUnit}px;\n  font-weight: ${e.typography.weights.medium};\n  padding-bottom: ${3*e.gridUnit}px;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  .anticon:first-of-type {\n    margin-right: ${4*e.gridUnit}px;\n  }\n\n  .anticon:nth-of-type(2) {\n    margin-left: ${4*e.gridUnit}px;\n  `}
`,Me=f.iK.div`
  ${({theme:e})=>`\n  margin-left: ${6*e.gridUnit}px;\n  margin-bottom: ${3*e.gridUnit}px;\n  font-weight: ${e.typography.weights.bold};\n  `}
`,Ne=f.iK.div`
  ${({theme:e})=>`\n  padding: ${8*e.gridUnit}px\n    ${6*e.gridUnit}px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  `}
`,Re=f.iK.div`
  ${({theme:e})=>`\n  max-width: 50%;\n  width: 200px;\n\n  img {\n    width: 120px;\n    margin-left: 40px;\n  }\n\n  div {\n    width: 100%;\n    margin-top: ${3*e.gridUnit}px;\n    text-align: center;\n    font-weight: ${e.typography.weights.normal};\n    font-size: ${e.typography.sizes.l}px;\n    color: ${e.colors.grayscale.light1};\n  }\n  `}
`,Ve=f.iK.div`
  ${({theme:e})=>`\n  position: relative;\n  margin: ${3*e.gridUnit}px;\n  margin-left: ${6*e.gridUnit}px;\n  height: calc(100% - ${60*e.gridUnit}px);\n  overflow: auto;\n  `}
`,Ae=f.iK.div`
  ${({theme:e})=>`\n  position: relative;\n  margin: ${3*e.gridUnit}px;\n  margin-left: ${6*e.gridUnit}px;\n  height: calc(100% - ${30*e.gridUnit}px);\n  overflow: auto;\n  `}
`,He=f.iK.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`,Le=(0,f.iK)(we.Z)`
  ${({theme:e})=>`\n  border: 1px solid ${e.colors.info.base};\n  padding: ${4*e.gridUnit}px;\n  margin: ${6*e.gridUnit}px ${6*e.gridUnit}px\n    ${8*e.gridUnit}px;\n  .view-dataset-button {\n    position: absolute;\n    top: ${4*e.gridUnit}px;\n    right: ${4*e.gridUnit}px;\n    font-weight: ${e.typography.weights.normal};\n\n    &:hover {\n      color: ${e.colors.secondary.dark3};\n      text-decoration: underline;\n    }\n  }\n  `}
`,je=(0,r.t)("Refreshing columns"),Oe=(0,r.t)("Table columns"),We=(0,r.t)("Loading"),Ye=["5","10","15","25"],Fe=[{title:"Column Name",dataIndex:"name",key:"name",sorter:(e,t)=>Ze("name",e,t)},{title:"Datatype",dataIndex:"type",key:"type",width:"100px",sorter:(e,t)=>Ze("type",e,t)}],qe=(0,r.t)("This table already has a dataset associated with it. You can only associate one dataset with a table.\n"),Ge=(0,r.t)("View Dataset"),Qe=({tableName:e,columnList:t,loading:n,hasError:a,datasets:i})=>{var l;const o=(0,f.Fg)(),s=null!=(l=(null==t?void 0:t.length)>0)&&l,d=null==i?void 0:i.map((e=>e.table_name)),c=null==i?void 0:i.find((t=>t.table_name===e));let h,u;return n&&(u=(0,K.tZ)(Ne,{children:(0,K.BX)(Re,{children:[(0,K.tZ)("img",{alt:We,src:Ue}),(0,K.tZ)("div",{children:je})]})})),n||(h=!n&&e&&s&&!a?(0,K.BX)(K.HY,{children:[(0,K.tZ)(Me,{children:Oe}),c?(0,K.tZ)(Ve,{children:(0,K.tZ)(He,{children:(0,K.tZ)(O.ZP,{loading:n,size:O.ex.Small,columns:Fe,data:t,pageSizeOptions:Ye,defaultPageSize:25})})}):(0,K.tZ)(Ae,{children:(0,K.tZ)(He,{children:(0,K.tZ)(O.ZP,{loading:n,size:O.ex.Small,columns:Fe,data:t,pageSizeOptions:Ye,defaultPageSize:25})})})]}):(0,K.tZ)(Be,{hasColumns:s,hasError:a,tableName:e})),(0,K.BX)(K.HY,{children:[e&&(0,K.BX)(K.HY,{children:[(null==d?void 0:d.includes(e))&&(p=c,(0,K.tZ)(Le,{closable:!1,type:"info",showIcon:!0,message:(0,r.t)("This table already has a dataset"),description:(0,K.BX)(K.HY,{children:[qe,(0,K.tZ)("span",{role:"button",onClick:()=>{window.open(null==p?void 0:p.explore_url,"_blank","noreferrer noopener popup=false")},tabIndex:0,className:"view-dataset-button",children:Ge})]})})),(0,K.BX)(De,{position:!n&&s?Xe.RELATIVE:Xe.ABSOLUTE,title:e||"",children:[e&&(0,K.tZ)(m.Z.Table,{iconColor:o.colors.grayscale.base}),e]})]}),h,u]});var p},Je=({tableName:e,dbId:t,catalog:n,schema:i,setHasColumns:s,datasets:d})=>{const[h,u]=(0,a.useState)([]),[p,g]=(0,a.useState)(!1),[m,b]=(0,a.useState)(!1),f=(0,a.useRef)(e);return(0,a.useEffect)((()=>{f.current=e,e&&i&&t&&(async e=>{const{dbId:t,tableName:a,schema:i}=e;g(!0),null==s||s(!1);const d=`/api/v1/database/${t}/table_metadata/${(0,$e.UK)({name:a,catalog:n,schema:i})}`;try{const e=await l.Z.get({endpoint:d});if((e=>{let t=!0;if("string"!=typeof(null==e?void 0:e.name)&&(t=!1),t&&!Array.isArray(e.columns)&&(t=!1),t&&e.columns.length>0){const n=e.columns.some(((e,t)=>{const n=(e=>{let t=!0;const n="The object provided to isITableColumn does match the interface.";return"string"!=typeof(null==e?void 0:e.name)&&(t=!1,console.error(`${n} The property 'name' is required and must be a string`)),t&&"string"!=typeof(null==e?void 0:e.type)&&(t=!1,console.error(`${n} The property 'type' is required and must be a string`)),t})(e);return n||console.error(`The provided object does not match the IDatabaseTable interface. columns[${t}] is invalid and does not match the ITableColumn interface`),!n}));t=!n}return t})(null==e?void 0:e.json)){const t=e.json;t.name===f.current&&(u(t.columns),null==s||s(t.columns.length>0),b(!1))}else u([]),null==s||s(!1),b(!0),(0,c.Gb)((0,r.t)("The API response from %s does not match the IDatabaseTable interface.",d)),o.Z.error((0,r.t)("The API response from %s does not match the IDatabaseTable interface.",d))}catch(e){u([]),null==s||s(!1),b(!0)}finally{g(!1)}})({tableName:e,dbId:t,schema:i})}),[e,t,i]),(0,K.tZ)(Qe,{columnList:h,hasError:m,loading:p,tableName:e,datasets:d})};var et=n(517982),tt=n(961337);const nt=f.iK.div`
  ${({theme:e})=>`\n    padding: ${4*e.gridUnit}px;\n    height: 100%;\n    background-color: ${e.colors.grayscale.light5};\n    position: relative;\n    .emptystate {\n      height: auto;\n      margin-top: ${17.5*e.gridUnit}px;\n    }\n    .section-title {\n      margin-top: ${5.5*e.gridUnit}px;\n      margin-bottom: ${11*e.gridUnit}px;\n      font-weight: ${e.typography.weights.bold};\n    }\n    .table-title {\n      margin-top: ${11*e.gridUnit}px;\n      margin-bottom: ${6*e.gridUnit}px;\n      font-weight: ${e.typography.weights.bold};\n    }\n    .options-list {\n      overflow: auto;\n      position: absolute;\n      bottom: 0;\n      top: ${92.25*e.gridUnit}px;\n      left: ${3.25*e.gridUnit}px;\n      right: 0;\n\n      .no-scrollbar {\n        margin-right: ${4*e.gridUnit}px;\n      }\n\n      .options {\n        cursor: pointer;\n        padding: ${1.75*e.gridUnit}px;\n        border-radius: ${e.borderRadius}px;\n        :hover {\n          background-color: ${e.colors.grayscale.light4}\n        }\n      }\n\n      .options-highlighted {\n        cursor: pointer;\n        padding: ${1.75*e.gridUnit}px;\n        border-radius: ${e.borderRadius}px;\n        background-color: ${e.colors.primary.dark1};\n        color: ${e.colors.grayscale.light5};\n      }\n\n      .options, .options-highlighted {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n    }\n    form > span[aria-label="refresh"] {\n      position: absolute;\n      top: ${69*e.gridUnit}px;\n      left: ${42.75*e.gridUnit}px;\n      font-size: ${4.25*e.gridUnit}px;\n    }\n    .table-form {\n      margin-bottom: ${8*e.gridUnit}px;\n    }\n    .loading-container {\n      position: absolute;\n      top: ${89.75*e.gridUnit}px;\n      left: 0;\n      right: 0;\n      text-align: center;\n      img {\n        width: ${20*e.gridUnit}px;\n        margin-bottom: ${2.5*e.gridUnit}px;\n      }\n      p {\n        color: ${e.colors.grayscale.light1};\n      }\n    }\n`}
`;function at({setDataset:e,dataset:t,datasetNames:n}){const{addDangerToast:i}=(0,G.e1)(),l=(0,a.useCallback)((t=>{e({type:u.SelectDatabase,payload:{db:t}})}),[e]);(0,a.useEffect)((()=>{const e=(0,tt.rV)(tt.dR.Database,null);e&&l(e)}),[l]);const o=(0,a.useCallback)((e=>(0,K.tZ)(et.ez,{table:null!=n&&n.includes(e.value)?{...e,extra:{warning_markdown:(0,r.t)("This table already has a dataset")}}:e})),[n]);return(0,K.tZ)(nt,{children:(0,K.tZ)(et.ZP,{database:null==t?void 0:t.db,handleError:i,emptyState:(0,W.UX)(!1),onDbChange:l,onCatalogChange:t=>{t&&e({type:u.SelectCatalog,payload:{name:"catalog",value:t}})},onSchemaChange:t=>{t&&e({type:u.SelectSchema,payload:{name:"schema",value:t}})},onTableSelectChange:t=>{e({type:u.SelectTable,payload:{name:"table_name",value:t}})},sqlLabMode:!1,customTableOptionLabelRenderer:o,...(null==t?void 0:t.catalog)&&{catalog:t.catalog},...(null==t?void 0:t.schema)&&{schema:t.schema}})})}var it=n(797381),lt=n(203741);const rt=["db","schema","table_name"],ot=[lt.Ph,lt.FY,lt.Eh,lt.TA],st=(0,G.ZP)((function({datasetObject:e,addDangerToast:t,hasColumns:n=!1,datasets:a}){const l=(0,i.k6)(),{createResource:o}=(0,Q.LE)("dataset",(0,r.t)("dataset"),t),s=(0,r.t)("Select a database table."),d=(0,r.t)("Create dataset and create chart"),c=!(null!=e&&e.table_name)||!n||(null==a?void 0:a.includes(null==e?void 0:e.table_name));return(0,K.BX)(K.HY,{children:[(0,K.tZ)(g.Z,{onClick:()=>{if(e){const t=(e=>{let t=0;const n=Object.keys(e).reduce(((n,a)=>(rt.includes(a)&&e[a]&&(t+=1),t)),0);return ot[n]})(e);(0,it.logEvent)(t,e)}else(0,it.logEvent)(lt.Ph,{});l.goBack()},children:(0,r.t)("Cancel")}),(0,K.tZ)(g.Z,{buttonStyle:"primary",disabled:c,tooltip:null!=e&&e.table_name?void 0:s,onClick:()=>{if(e){var t;const n={database:null==(t=e.db)?void 0:t.id,catalog:e.catalog,schema:e.schema,table_name:e.table_name};o(n).then((t=>{t&&"number"==typeof t&&((0,it.logEvent)(lt.P$,e),l.push(`/chart/add/?dataset=${e.table_name}`))}))}},children:d})]})}));var dt=n(280663);function ct({header:e,leftPanel:t,datasetPanel:n,rightPanel:a,footer:i}){const l=(0,f.Fg)();return(0,K.BX)(y,{children:[e&&(0,K.tZ)(z,{children:e}),(0,K.BX)(Z,{children:[t&&(0,K.tZ)(dt.Z,{id:"dataset",initialWidth:80*l.gridUnit,minWidth:80*l.gridUnit,enable:!0,children:e=>(0,K.tZ)(x,{width:e,children:(0,K.tZ)(_,{children:t})})}),(0,K.BX)($,{children:[(0,K.BX)(U,{children:[n&&(0,K.tZ)(T,{children:n}),a&&(0,K.tZ)(k,{children:a})]}),(0,K.tZ)(S,{children:i&&(0,K.tZ)(E,{children:i})})]})]})]})}function ht(e,t){const n={...e||{}};switch(t.type){case u.SelectDatabase:return{...n,...t.payload,catalog:null,schema:null,table_name:null};case u.SelectCatalog:return{...n,[t.payload.name]:t.payload.value,schema:null,table_name:null};case u.SelectSchema:return{...n,[t.payload.name]:t.payload.value,table_name:null};case u.SelectTable:return{...n,[t.payload.name]:t.payload.value};case u.ChangeDataset:return{...n,[t.payload.name]:t.payload.value};default:return null}}const ut="/tablemodelview/list/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc";function pt(){const[e,t]=(0,a.useReducer)(ht,null),[n,l]=(0,a.useState)(!1),[r,o]=(0,a.useState)(!1),{datasets:s,datasetNames:d}=h(null==e?void 0:e.db,null==e?void 0:e.schema),{datasetId:c}=(0,i.UO)();return(0,a.useEffect)((()=>{Number.isNaN(parseInt(c,10))||o(!0)}),[c]),(0,K.tZ)(ct,{header:(0,K.tZ)(N,{setDataset:t,title:null==e?void 0:e.table_name}),leftPanel:r?null:(0,K.tZ)(at,{setDataset:t,dataset:e,datasetNames:d}),datasetPanel:r?(0,K.tZ)(xe,{id:c}):(0,K.tZ)(Je,{tableName:null==e?void 0:e.table_name,dbId:null==e||null==(u=e.db)?void 0:u.id,catalog:null==e?void 0:e.catalog,schema:null==e?void 0:e.schema,setHasColumns:l,datasets:s}),footer:(0,K.tZ)(st,{url:ut,datasetObject:e,hasColumns:n,datasets:d})});var u}}}]);
//# sourceMappingURL=457e111e0969ceb14909.chunk.js.map