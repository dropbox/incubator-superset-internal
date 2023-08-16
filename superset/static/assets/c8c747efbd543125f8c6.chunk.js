"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8438],{51794:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(67294);const l=(t,e)=>{var n,l;const[i,r]=(0,a.useState)(0),[o,s]=(0,a.useState)(!1),d=(0,a.useRef)({scrollWidth:0,parentElementWidth:0,plusRefWidth:0});return(0,a.useLayoutEffect)((()=>{var n;const a=t.current,l=null==e?void 0:e.current;if(!a)return;const{scrollWidth:i,clientWidth:o,childNodes:c}=a,u=d.current,h=(null==(n=a.parentElement)?void 0:n.clientWidth)||0,p=(null==l?void 0:l.offsetWidth)||0;if(d.current={scrollWidth:i,parentElementWidth:h,plusRefWidth:p},u.parentElementWidth!==h||u.scrollWidth!==i||u.plusRefWidth!==p)if(i>o){const t=6,e=(null==l?void 0:l.offsetWidth)||0,n=o-t,a=c.length;let i=0,d=0;for(let l=0;l<a;l+=1){const a=c[l].offsetWidth;n-t-i-e<=0&&(d+=1),i+=a}a>1&&d?(s(!0),r(d)):(s(!1),r(1))}else s(!1),r(0)}),[null==(n=t.current)?void 0:n.offsetWidth,null==(l=t.current)?void 0:l.clientWidth,t]),[i,o]}},52564:(t,e,n)=>{n.d(e,{u:()=>Z});var a=n(5872),l=n.n(a),i=n(67294),r=n(11965),o=n(51995),s=n(55867),d=n(4715),c=n(58593),u=n(99612);const h=t=>r.iv`
  display: flex;
  font-size: ${t.typography.sizes.xl}px;
  font-weight: ${t.typography.weights.bold};
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
      color: ${t.colors.grayscale.light1};
    }
  }

  & .input-sizer {
    position: absolute;
    left: -9999px;
    display: inline-block;
  }
`,p=t=>{let{title:e,placeholder:n,onSave:a,canEdit:l,label:o}=t;const[d,p]=(0,i.useState)(!1),[g,m]=(0,i.useState)(e||""),b=(0,i.useRef)(null),[v,f]=(0,i.useState)(!1),{width:y,ref:x}=(0,u.NB)(),{width:$,ref:Z}=(0,u.NB)({refreshMode:"debounce"});(0,i.useEffect)((()=>{m(e)}),[e]),(0,i.useEffect)((()=>{if(d&&null!=b&&b.current&&(b.current.focus(),b.current.setSelectionRange)){const{length:t}=b.current.value;b.current.setSelectionRange(t,t),b.current.scrollLeft=b.current.scrollWidth}}),[d]),(0,i.useLayoutEffect)((()=>{null!=x&&x.current&&(x.current.innerHTML=(g||n).replace(/\s/g,"&nbsp;"))}),[g,n,x]),(0,i.useEffect)((()=>{b.current&&b.current.scrollWidth>b.current.clientWidth?f(!0):f(!1)}),[y,$]);const w=(0,i.useCallback)((()=>{l&&!d&&p(!0)}),[l,d]),U=(0,i.useCallback)((()=>{if(!l)return;const t=g.trim();m(t),e!==t&&a(t),p(!1)}),[l,g,a,e]),z=(0,i.useCallback)((t=>{l&&d&&m(t.target.value)}),[l,d]),_=(0,i.useCallback)((t=>{var e;l&&"Enter"===t.key&&(t.preventDefault(),null==(e=b.current)||e.blur())}),[l]);return(0,r.tZ)("div",{css:h,ref:Z},(0,r.tZ)(c.u,{id:"title-tooltip",title:v&&g&&!d?g:null},l?(0,r.tZ)("input",{className:"dynamic-title-input","aria-label":null!=o?o:(0,s.t)("Title"),ref:b,onChange:z,onBlur:U,onClick:w,onKeyPress:_,placeholder:n,value:g,css:r.iv`
              cursor: ${d?"text":"pointer"};

              ${y&&y>0&&r.iv`
                width: ${y+1}px;
              `}
            `}):(0,r.tZ)("span",{className:"dynamic-title","aria-label":null!=o?o:(0,s.t)("Title"),ref:b},g)),(0,r.tZ)("span",{ref:x,className:"input-sizer","aria-hidden":!0,tabIndex:-1}))};var g=n(79789),m=n(36674),b=n(70163),v=n(35932);const f=t=>r.iv`
  width: ${8*t.gridUnit}px;
  height: ${8*t.gridUnit}px;
  padding: 0;
  border: 1px solid ${t.colors.primary.dark2};

  &.ant-btn > span.anticon {
    line-height: 0;
    transition: inherit;
  }

  &:hover:not(:focus) > span.anticon {
    color: ${t.colors.primary.light1};
  }
`,y=t=>r.iv`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${t.colors.grayscale.light5};
  height: ${16*t.gridUnit}px;
  padding: 0 ${4*t.gridUnit}px;

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
    margin-right: ${12*t.gridUnit}px;
  }

  .right-button-panel {
    display: flex;
    align-items: center;
  }
`,x=t=>r.iv`
  display: flex;
  align-items: center;
  padding-left: ${2*t.gridUnit}px;

  & .fave-unfave-icon {
    padding: 0 ${t.gridUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,$=t=>r.iv`
  margin-left: ${2*t.gridUnit}px;
`,Z=t=>{let{editableTitleProps:e,showTitlePanelItems:n,certificatiedBadgeProps:a,showFaveStar:i,faveStarProps:c,titlePanelAdditionalItems:u,rightPanelAdditionalItems:h,additionalActionsMenu:Z,menuDropdownProps:w,tooltipProps:U}=t;const z=(0,o.Fg)();return(0,r.tZ)("div",{css:y,className:"header-with-actions"},(0,r.tZ)("div",{className:"title-panel"},(0,r.tZ)(p,e),n&&(0,r.tZ)("div",{css:x},(null==a?void 0:a.certifiedBy)&&(0,r.tZ)(g.Z,a),i&&(0,r.tZ)(m.Z,c),u)),(0,r.tZ)("div",{className:"right-button-panel"},h,(0,r.tZ)("div",{css:$},(0,r.tZ)(d.Gj,l()({trigger:["click"],overlay:Z},w),(0,r.tZ)(v.Z,{css:f,buttonStyle:"tertiary","aria-label":(0,s.t)("Menu actions trigger"),tooltip:null==U?void 0:U.text,placement:null==U?void 0:U.placement},(0,r.tZ)(b.Z.MoreHoriz,{iconColor:z.colors.primary.dark2,iconSize:"l"}))))))}},58298:(t,e,n)=>{n.r(e),n.d(e,{datasetReducer:()=>ce,default:()=>ue});var a=n(67294),l=n(16550),i=n(31069),r=n(55867),o=n(68492),s=n(15926),d=n.n(s),c=n(72570);var u,h=n(52564),p=n(35932),g=n(70163),m=n(83862);!function(t){t[t.selectDatabase=0]="selectDatabase",t[t.selectSchema=1]="selectSchema",t[t.selectTable=2]="selectTable",t[t.changeDataset=3]="changeDataset"}(u||(u={}));var b=n(51995),v=n(11965);const f=b.iK.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${t=>{let{theme:e}=t;return e.colors.grayscale.light5}};
`,y=b.iK.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
`,x=(0,b.iK)(y)`
  width: ${t=>{let{theme:e}=t;return 80*e.gridUnit}}px;
  height: auto;
`,$=(0,b.iK)(y)`
  height: auto;
  display: flex;
  flex: 1 0 auto;
  width: calc(100% - ${t=>{let{theme:e}=t;return 80*e.gridUnit}}px);
`,Z=b.iK.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`,w=(0,b.iK)(Z)`
  flex: 1 0 auto;
`,U=(0,b.iK)(Z)`
  flex: 1 0 auto;
  height: auto;
`,z=(0,b.iK)(Z)`
  flex: 0 0 auto;
  height: ${t=>{let{theme:e}=t;return 16*e.gridUnit}}px;
  z-index: 0;
`,_=b.iK.div`
  ${t=>{let{theme:e}=t;return`\n  flex: 0 0 auto;\n  height: ${16*e.gridUnit}px;\n  border-bottom: 2px solid ${e.colors.grayscale.light2};\n\n  .header-with-actions {\n    height: ${15.5*e.gridUnit}px;\n  }\n  `}}
`,T=b.iK.div`
  ${t=>{let{theme:e}=t;return`\n  margin: ${4*e.gridUnit}px;\n  font-size: ${e.typography.sizes.xl}px;\n  font-weight: ${e.typography.weights.bold};\n  `}}
`,S=b.iK.div`
  ${t=>{let{theme:e}=t;return`\n  width: ${80*e.gridUnit}px;\n  height: 100%;\n  border-right: 1px solid ${e.colors.grayscale.light2};\n  `}}
`,k=b.iK.div`
  width: 100%;
  position: relative;
`,C=b.iK.div`
  ${t=>{let{theme:e}=t;return`\n  border-left: 1px solid ${e.colors.grayscale.light2};\n  color: ${e.colors.success.base};\n  `}}
`,E=b.iK.div`
  ${t=>{let{theme:e}=t;return`\n  height: ${16*e.gridUnit}px;\n  width: 100%;\n  border-top: 1px solid ${e.colors.grayscale.light2};\n  border-bottom: 1px solid ${e.colors.grayscale.light2};\n  color: ${e.colors.info.base};\n  border-top: ${e.gridUnit/4}px solid\n    ${e.colors.grayscale.light2};\n  padding: ${4*e.gridUnit}px;\n  display: flex;\n  justify-content: flex-end;\n  background-color: ${e.colors.grayscale.light5};\n  z-index: ${e.zIndex.max}\n  `}}
`,I=b.iK.div`
  .ant-btn {
    span {
      margin-right: 0;
    }

    &:disabled {
      svg {
        color: ${t=>{let{theme:e}=t;return e.colors.grayscale.light1}};
      }
    }
  }
`,P=t=>v.iv`
  width: ${21.5*t.gridUnit}px;

  &:disabled {
    background-color: ${t.colors.grayscale.light3};
    color: ${t.colors.grayscale.light1};
  }
`,K=(0,r.t)("New dataset"),D={text:(0,r.t)("Select a database table and create dataset"),placement:"bottomRight"};function N(t){let{setDataset:e,title:n=K,editing:l=!1}=t;const i={title:null!=n?n:K,placeholder:K,onSave:t=>{e({type:u.changeDataset,payload:{name:"dataset_name",value:t}})},canEdit:!1,label:(0,r.t)("dataset name")};return(0,v.tZ)(I,null,l?(0,v.tZ)(h.u,{editableTitleProps:i,showTitlePanelItems:!1,showFaveStar:!1,faveStarProps:{itemId:1,saveFaveStar:()=>{}},titlePanelAdditionalItems:(0,v.tZ)(a.Fragment,null),rightPanelAdditionalItems:(0,v.tZ)(p.Z,{buttonStyle:"primary",tooltip:null==D?void 0:D.text,placement:null==D?void 0:D.placement,disabled:!0,css:P},(0,v.tZ)(g.Z.Save,{iconSize:"m"}),(0,r.t)("Save")),additionalActionsMenu:(0,v.tZ)(m.v,null,(0,v.tZ)(m.v.Item,null,(0,r.t)("Settings")),(0,v.tZ)(m.v.Item,null,(0,r.t)("Delete"))),menuDropdownProps:{disabled:!0},tooltipProps:D}):(0,v.tZ)(T,null,n||K))}var M,V,R=n(82607),L=n(71262),A=n(5872),j=n.n(A),F=n(73727),W=n(55786),O=n(93197),H=n(94301);function q(){return q=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},q.apply(this,arguments)}function B(t,e){let{title:n,titleId:l,...i}=t;return a.createElement("svg",q({width:160,height:166,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":l},i),n?a.createElement("title",{id:l},n):null,M||(M=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M123.638 8a.5.5 0 00-.5.5V158h28.758V8.5a.5.5 0 00-.5-.5h-27.758zM84.793 40.643a.5.5 0 01.5-.5h27.759a.5.5 0 01.5.5V158H84.793V40.643zM46.95 72.285a.5.5 0 00-.5.5V158h28.758V72.785a.5.5 0 00-.5-.5H46.95zM8.604 93.715a.5.5 0 00-.5.5V158h28.758V94.215a.5.5 0 00-.5-.5H8.604z",fill:"#FAFAFA"})),V||(V=a.createElement("path",{d:"M123.138 158h-.5v.5h.5v-.5zm28.758 0v.5h.5v-.5h-.5zm-38.344 0v.5h.5v-.5h-.5zm-28.759 0h-.5v.5h.5v-.5zm-38.344-.001h-.5v.5h.5v-.5zm28.758 0v.5h.5v-.5h-.5zM8.104 158h-.5v.5h.5v-.5zm28.758 0v.5h.5v-.5h-.5zM123.638 8.5v-1a1 1 0 00-1 1h1zm0 149.5V8.5h-1V158h1zm28.258-.5h-28.758v1h28.758v-1zm-.5-149V158h1V8.5h-1zm0 0h1a1 1 0 00-1-1v1zm-27.758 0h27.758v-1h-27.758v1zM85.293 39.643a1 1 0 00-1 1h1v-1zm27.759 0H85.293v1h27.759v-1zm1 1a1 1 0 00-1-1v1h1zm0 117.357V40.643h-1V158h1zm-29.259.5h28.759v-1H84.793v1zm-.5-117.857V158h1V40.643h-1zM46.95 72.785v-1a1 1 0 00-1 1h1zm0 85.214V72.785h-1V158h1zm28.258-.5H46.45v1h28.758v-1zm-.5-84.714V158h1V72.785h-1zm0 0h1a1 1 0 00-1-1v1zm-27.758 0h27.758v-1H46.95v1zM8.604 94.215v-1a1 1 0 00-1 1h1zm0 63.785V94.215h-1V158h1zm28.258-.5H8.104v1h28.758v-1zm-.5-63.285V158h1V94.215h-1zm0 0h1a1 1 0 00-1-1v1zm-27.758 0h27.758v-1H8.604v1z",fill:"#D9D9D9"})))}const X=a.forwardRef(B);var G=n(14114),Q=n(34858),Y=n(18782),J=n(30381),tt=n.n(J),et=n(51794),nt=n(58593);const at=b.iK.div`
  & > span {
    width: 100%;
    display: flex;

    .ant-tooltip-open {
      display: inline;
    }
  }
`,lt=b.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
`,it=b.iK.span`
  &:not(:last-child)::after {
    content: ', ';
  }
`,rt=b.iK.div`
  .link {
    color: ${t=>{let{theme:e}=t;return e.colors.grayscale.light5}};
    display: block;
    text-decoration: underline;
  }
`,ot=b.iK.span`
  ${t=>{let{theme:e}=t;return`\n  cursor: pointer;\n  color: ${e.colors.primary.dark1};\n  font-weight: ${e.typography.weights.normal};\n  `}}
`;function st(t){let{items:e,renderVisibleItem:n=(t=>t),renderTooltipItem:l=(t=>t),getKey:i=(t=>t),maxLinks:o=20}=t;const s=(0,a.useRef)(null),d=(0,a.useRef)(null),[c,u]=(0,et.Z)(s,d),h=(0,a.useMemo)((()=>e.length>o?e.length-o:void 0),[e,o]),p=(0,a.useMemo)((()=>(0,v.tZ)(lt,{ref:s},e.map((t=>(0,v.tZ)(it,{key:i(t)},n(t)))))),[i,e,n]),g=(0,a.useMemo)((()=>e.slice(0,o).map((t=>(0,v.tZ)(rt,{key:i(t)},l(t))))),[i,e,o,l]);return(0,v.tZ)(at,null,(0,v.tZ)(nt.u,{placement:"top",title:c?(0,v.tZ)(a.Fragment,null,g,h&&(0,v.tZ)("span",null,(0,r.t)("+ %s more",h))):null},p,u&&(0,v.tZ)(ot,{ref:d},"+",c)))}const dt=t=>({key:t.id,to:`/superset/dashboard/${t.id}`,target:"_blank",rel:"noreferer noopener",children:t.dashboard_title}),ct=t=>v.iv`
  color: ${t.colors.grayscale.light5};
  text-decoration: underline;
  &:hover {
    color: inherit;
  }
`,ut=[{key:"slice_name",title:(0,r.t)("Chart"),width:"320px",sorter:!0,render:(t,e)=>(0,v.tZ)(F.rU,{to:e.url},e.slice_name)},{key:"owners",title:(0,r.t)("Chart owners"),width:"242px",render:(t,e)=>{var n,a;return(0,v.tZ)(st,{items:null!=(n=null==(a=e.owners)?void 0:a.map((t=>`${t.first_name} ${t.last_name}`)))?n:[]})}},{key:"last_saved_at",title:(0,r.t)("Chart last modified"),width:"209px",sorter:!0,defaultSortOrder:"descend",render:(t,e)=>e.last_saved_at?tt().utc(e.last_saved_at).fromNow():null},{key:"last_saved_by.first_name",title:(0,r.t)("Chart last modified by"),width:"216px",sorter:!0,render:(t,e)=>e.last_saved_by?`${e.last_saved_by.first_name} ${e.last_saved_by.last_name}`:null},{key:"dashboards",title:(0,r.t)("Dashboard usage"),width:"420px",render:(t,e)=>(0,v.tZ)(st,{items:e.dashboards,renderVisibleItem:t=>(0,v.tZ)(F.rU,dt(t)),renderTooltipItem:t=>(0,v.tZ)(F.rU,j()({},dt(t),{css:ct})),getKey:t=>t.id})}],ht=t=>v.iv`
  && th.ant-table-cell {
    color: ${t.colors.grayscale.light1};
  }

  .ant-table-placeholder {
    display: none;
  }
`,pt=(0,v.tZ)(a.Fragment,null,(0,v.tZ)(g.Z.PlusOutlined,{iconSize:"m",css:v.iv`
        & > .anticon {
          line-height: 0;
        }
      `}),(0,r.t)("Create chart with dataset")),gt=(0,b.iK)(H.XJ)`
  margin: ${t=>{let{theme:e}=t;return 13*e.gridUnit}}px 0;
`,mt=t=>{let{datasetId:e}=t;const{loading:n,recordCount:l,data:i,onChange:o}=(t=>{const{addDangerToast:e}=(0,G.e1)(),n=(0,a.useMemo)((()=>[{id:"datasource_id",operator:Y.p.equals,value:t}]),[t]),{state:{loading:l,resourceCount:i,resourceCollection:o},fetchData:s}=(0,Q.Yi)("chart",(0,r.t)("chart"),e,!0,[],n),d=(0,a.useMemo)((()=>o.map((t=>({...t,key:t.id})))),[o]),c=(0,a.useCallback)(((t,e,n)=>{var a,l;const i=(null!=(a=t.current)?a:1)-1,r=null!=(l=t.pageSize)?l:0,o=(0,W.Z)(n).filter((t=>{let{columnKey:e}=t;return"string"==typeof e})).map((t=>{let{columnKey:e,order:n}=t;return{id:e,desc:"descend"===n}}));s({pageIndex:i,pageSize:r,sortBy:o,filters:[]})}),[s]);return(0,a.useEffect)((()=>{s({pageIndex:0,pageSize:25,sortBy:[{id:"last_saved_at",desc:!0}],filters:[]})}),[s]),{loading:l,recordCount:i,data:d,onChange:c}})(e),s=(0,a.useCallback)((()=>window.open(`/explore/?dataset_type=table&dataset_id=${e}`,"_blank")),[e]);return(0,v.tZ)("div",{css:i.length?null:ht},(0,v.tZ)(O.ZP,{columns:ut,data:i,size:O.ex.MIDDLE,defaultPageSize:25,recordCount:l,loading:n,onChange:o}),i.length||n?null:(0,v.tZ)(gt,{image:(0,v.tZ)(X,null),title:(0,r.t)("No charts"),description:(0,r.t)("This dataset is not used to power any charts."),buttonText:pt,buttonAction:s}))},bt=(0,b.iK)(L.ZP)`
  ${t=>{let{theme:e}=t;return`\n  margin-top: ${8.5*e.gridUnit}px;\n  padding-left: ${4*e.gridUnit}px;\n  padding-right: ${4*e.gridUnit}px;\n\n  .ant-tabs-top > .ant-tabs-nav::before {\n    width: ${50*e.gridUnit}px;\n  }\n  `}}
`,vt=b.iK.div`
  ${t=>{let{theme:e}=t;return`\n  .ant-badge {\n    width: ${8*e.gridUnit}px;\n    margin-left: ${2.5*e.gridUnit}px;\n  }\n  `}}
`,ft={USAGE_TEXT:(0,r.t)("Usage"),COLUMNS_TEXT:(0,r.t)("Columns"),METRICS_TEXT:(0,r.t)("Metrics")},yt=t=>{let{id:e}=t;const{usageCount:n}=(t=>{const[e,n]=(0,a.useState)(0),l=(0,a.useCallback)((()=>i.Z.get({endpoint:`/api/v1/dataset/${t}/related_objects`}).then((t=>{let{json:e}=t;n(null==e?void 0:e.charts.count)})).catch((t=>{(0,c.Gb)((0,r.t)("There was an error fetching dataset's related objects")),o.Z.error(t)}))),[t]);return(0,a.useEffect)((()=>{t&&l()}),[t,l]),{usageCount:e}})(e),l=(0,v.tZ)(vt,null,(0,v.tZ)("span",null,ft.USAGE_TEXT),n>0&&(0,v.tZ)(R.Z,{count:n}));return(0,v.tZ)(bt,{moreIcon:null,fullWidth:!1},(0,v.tZ)(L.ZP.TabPane,{tab:ft.COLUMNS_TEXT,key:"1"}),(0,v.tZ)(L.ZP.TabPane,{tab:ft.METRICS_TEXT,key:"2"}),(0,v.tZ)(L.ZP.TabPane,{tab:l,key:"3"},(0,v.tZ)(mt,{datasetId:e})))};var xt=n(78580),$t=n.n(xt),Zt=n(29487);const wt=(t,e,n)=>{var a;return null==e||null==(a=e[t])||null==a.localeCompare?void 0:a.localeCompare(null==n?void 0:n[t])};var Ut=n(89419);const zt=b.iK.div`
  padding: ${t=>{let{theme:e}=t;return 8*e.gridUnit}}px
    ${t=>{let{theme:e}=t;return 6*e.gridUnit}}px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`,_t=(0,b.iK)(H.XJ)`
  max-width: 50%;

  p {
    width: ${t=>{let{theme:e}=t;return 115*e.gridUnit}}px;
  }
`,Tt=(0,r.t)("Datasets can be created from database tables or SQL queries. Select a database table to the left or "),St=(0,r.t)("create dataset from SQL query"),kt=(0,r.t)(" to open SQL Lab. From there you can save the query as a dataset."),Ct=(0,r.t)("Select dataset source"),Et=(0,r.t)("No table columns"),It=(0,r.t)("This database table does not contain any data. Please select a different table."),Pt=(0,r.t)("An Error Occurred"),Kt=(0,r.t)("Unable to load columns for the selected table. Please select a different table."),Dt=t=>{const{hasError:e,tableName:n,hasColumns:l}=t;let i="empty-dataset.svg",r=Ct,o=(0,v.tZ)(a.Fragment,null,Tt,(0,v.tZ)("span",{role:"button",onClick:()=>{window.location.href="/superset/sqllab"},tabIndex:0},St),kt);return e?(r=Pt,o=(0,v.tZ)(a.Fragment,null,Kt),i=void 0):n&&!l&&(i="no-columns.svg",r=Et,o=(0,v.tZ)(a.Fragment,null,It)),(0,v.tZ)(zt,null,(0,v.tZ)(_t,{image:i,title:r,description:o}))};var Nt;!function(t){t.ABSOLUTE="absolute",t.RELATIVE="relative"}(Nt||(Nt={}));const Mt=b.iK.div`
  ${t=>{let{theme:e,position:n}=t;return`\n  position: ${n};\n  margin: ${4*e.gridUnit}px\n    ${3*e.gridUnit}px\n    ${3*e.gridUnit}px\n    ${6*e.gridUnit}px;\n  font-size: ${6*e.gridUnit}px;\n  font-weight: ${e.typography.weights.medium};\n  padding-bottom: ${3*e.gridUnit}px;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  .anticon:first-of-type {\n    margin-right: ${4*e.gridUnit}px;\n  }\n\n  .anticon:nth-of-type(2) {\n    margin-left: ${4*e.gridUnit}px;\n  `}}
`,Vt=b.iK.div`
  ${t=>{let{theme:e}=t;return`\n  margin-left: ${6*e.gridUnit}px;\n  margin-bottom: ${3*e.gridUnit}px;\n  font-weight: ${e.typography.weights.bold};\n  `}}
`,Rt=b.iK.div`
  ${t=>{let{theme:e}=t;return`\n  padding: ${8*e.gridUnit}px\n    ${6*e.gridUnit}px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  `}}
`,Lt=b.iK.div`
  ${t=>{let{theme:e}=t;return`\n  max-width: 50%;\n  width: 200px;\n\n  img {\n    width: 120px;\n    margin-left: 40px;\n  }\n\n  div {\n    width: 100%;\n    margin-top: ${3*e.gridUnit}px;\n    text-align: center;\n    font-weight: ${e.typography.weights.normal};\n    font-size: ${e.typography.sizes.l}px;\n    color: ${e.colors.grayscale.light1};\n  }\n  `}}
`,At=b.iK.div`
  ${t=>{let{theme:e}=t;return`\n  position: relative;\n  margin: ${3*e.gridUnit}px;\n  margin-left: ${6*e.gridUnit}px;\n  height: calc(100% - ${60*e.gridUnit}px);\n  overflow: auto;\n  `}}
`,jt=b.iK.div`
  ${t=>{let{theme:e}=t;return`\n  position: relative;\n  margin: ${3*e.gridUnit}px;\n  margin-left: ${6*e.gridUnit}px;\n  height: calc(100% - ${30*e.gridUnit}px);\n  overflow: auto;\n  `}}
`,Ft=b.iK.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`,Wt=(0,b.iK)(Zt.Z)`
  ${t=>{let{theme:e}=t;return`\n  border: 1px solid ${e.colors.info.base};\n  padding: ${4*e.gridUnit}px;\n  margin: ${6*e.gridUnit}px ${6*e.gridUnit}px\n    ${8*e.gridUnit}px;\n  .view-dataset-button {\n    position: absolute;\n    top: ${4*e.gridUnit}px;\n    right: ${4*e.gridUnit}px;\n    font-weight: ${e.typography.weights.normal};\n\n    &:hover {\n      color: ${e.colors.secondary.dark3};\n      text-decoration: underline;\n    }\n  }\n  `}}
`,Ot=(0,r.t)("Refreshing columns"),Ht=(0,r.t)("Table columns"),qt=(0,r.t)("Loading"),Bt=["5","10","15","25"],Xt=[{title:"Column Name",dataIndex:"name",key:"name",sorter:(t,e)=>wt("name",t,e)},{title:"Datatype",dataIndex:"type",key:"type",width:"100px",sorter:(t,e)=>wt("type",t,e)}],Gt=(0,r.t)("This table already has a dataset associated with it. You can only associate one dataset with a table.\n"),Qt=(0,r.t)("View Dataset"),Yt=t=>{var e;let{tableName:n,columnList:l,loading:i,hasError:o,datasets:s}=t;const d=(0,b.Fg)(),c=null!=(e=(null==l?void 0:l.length)>0)&&e,u=null==s?void 0:s.map((t=>t.table_name)),h=null==s?void 0:s.find((t=>t.table_name===n));let p,m;return i&&(m=(0,v.tZ)(Rt,null,(0,v.tZ)(Lt,null,(0,v.tZ)("img",{alt:qt,src:Ut}),(0,v.tZ)("div",null,Ot)))),i||(p=!i&&n&&c&&!o?(0,v.tZ)(a.Fragment,null,(0,v.tZ)(Vt,null,Ht),h?(0,v.tZ)(At,null,(0,v.tZ)(Ft,null,(0,v.tZ)(O.ZP,{loading:i,size:O.ex.SMALL,columns:Xt,data:l,pageSizeOptions:Bt,defaultPageSize:25}))):(0,v.tZ)(jt,null,(0,v.tZ)(Ft,null,(0,v.tZ)(O.ZP,{loading:i,size:O.ex.SMALL,columns:Xt,data:l,pageSizeOptions:Bt,defaultPageSize:25})))):(0,v.tZ)(Dt,{hasColumns:c,hasError:o,tableName:n})),(0,v.tZ)(a.Fragment,null,n&&(0,v.tZ)(a.Fragment,null,(null==u?void 0:$t()(u).call(u,n))&&(f=h,(0,v.tZ)(Wt,{closable:!1,type:"info",showIcon:!0,message:(0,r.t)("This table already has a dataset"),description:(0,v.tZ)(a.Fragment,null,Gt,(0,v.tZ)("span",{role:"button",onClick:()=>{window.open(null==f?void 0:f.explore_url,"_blank","noreferrer noopener popup=false")},tabIndex:0,className:"view-dataset-button"},Qt))})),(0,v.tZ)(Mt,{position:!i&&c?Nt.RELATIVE:Nt.ABSOLUTE,title:n||""},n&&(0,v.tZ)(g.Z.Table,{iconColor:d.colors.grayscale.base}),n)),p,m);var f},Jt=t=>{let{tableName:e,dbId:n,schema:l,setHasColumns:s,datasets:d}=t;const[u,h]=(0,a.useState)([]),[p,g]=(0,a.useState)(!1),[m,b]=(0,a.useState)(!1),f=(0,a.useRef)(e);return(0,a.useEffect)((()=>{f.current=e,e&&l&&n&&(async t=>{const{dbId:e,tableName:n,schema:a}=t;g(!0),null==s||s(!1);const l=`/api/v1/database/${e}/table/${n}/${a}/`;try{const t=await i.Z.get({endpoint:l});if((t=>{let e=!0;if("string"!=typeof(null==t?void 0:t.name)&&(e=!1),e&&!Array.isArray(t.columns)&&(e=!1),e&&t.columns.length>0){const n=t.columns.some(((t,e)=>{const n=(t=>{let e=!0;const n="The object provided to isITableColumn does match the interface.";return"string"!=typeof(null==t?void 0:t.name)&&(e=!1,console.error(`${n} The property 'name' is required and must be a string`)),e&&"string"!=typeof(null==t?void 0:t.type)&&(e=!1,console.error(`${n} The property 'type' is required and must be a string`)),e})(t);return n||console.error(`The provided object does not match the IDatabaseTable interface. columns[${e}] is invalid and does not match the ITableColumn interface`),!n}));e=!n}return e})(null==t?void 0:t.json)){const e=t.json;e.name===f.current&&(h(e.columns),null==s||s(e.columns.length>0),b(!1))}else h([]),null==s||s(!1),b(!0),(0,c.Gb)((0,r.t)("The API response from %s does not match the IDatabaseTable interface.",l)),o.Z.error((0,r.t)("The API response from %s does not match the IDatabaseTable interface.",l))}catch(t){h([]),null==s||s(!1),b(!0)}finally{g(!1)}})({tableName:e,dbId:n,schema:l})}),[e,n,l]),(0,v.tZ)(Yt,{columnList:u,hasError:m,loading:p,tableName:e,datasets:d})};var te=n(17982),ee=n(61337);const ne=b.iK.div`
  ${t=>{let{theme:e}=t;return`\n    max-width: ${87.5*e.gridUnit}px;\n    padding: ${4*e.gridUnit}px;\n    height: 100%;\n    background-color: ${e.colors.grayscale.light5};\n    position: relative;\n    .emptystate {\n      height: auto;\n      margin-top: ${17.5*e.gridUnit}px;\n    }\n    .section-title {\n      margin-top: ${5.5*e.gridUnit}px;\n      margin-bottom: ${11*e.gridUnit}px;\n      font-weight: ${e.typography.weights.bold};\n    }\n    .table-title {\n      margin-top: ${11*e.gridUnit}px;\n      margin-bottom: ${6*e.gridUnit}px;\n      font-weight: ${e.typography.weights.bold};\n    }\n    .options-list {\n      overflow: auto;\n      position: absolute;\n      bottom: 0;\n      top: ${92.25*e.gridUnit}px;\n      left: ${3.25*e.gridUnit}px;\n      right: 0;\n\n      .no-scrollbar {\n        margin-right: ${4*e.gridUnit}px;\n      }\n\n      .options {\n        cursor: pointer;\n        padding: ${1.75*e.gridUnit}px;\n        border-radius: ${e.borderRadius}px;\n        :hover {\n          background-color: ${e.colors.grayscale.light4}\n        }\n      }\n\n      .options-highlighted {\n        cursor: pointer;\n        padding: ${1.75*e.gridUnit}px;\n        border-radius: ${e.borderRadius}px;\n        background-color: ${e.colors.primary.dark1};\n        color: ${e.colors.grayscale.light5};\n      }\n\n      .options, .options-highlighted {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n    }\n    form > span[aria-label="refresh"] {\n      position: absolute;\n      top: ${69*e.gridUnit}px;\n      left: ${42.75*e.gridUnit}px;\n      font-size: ${4.25*e.gridUnit}px;\n    }\n    .table-form {\n      margin-bottom: ${8*e.gridUnit}px;\n    }\n    .loading-container {\n      position: absolute;\n      top: ${89.75*e.gridUnit}px;\n      left: 0;\n      right: 0;\n      text-align: center;\n      img {\n        width: ${20*e.gridUnit}px;\n        margin-bottom: ${2.5*e.gridUnit}px;\n      }\n      p {\n        color: ${e.colors.grayscale.light1};\n      }\n    }\n`}}
`;function ae(t){let{setDataset:e,dataset:n,datasetNames:l}=t;const{addDangerToast:i}=(0,G.e1)(),o=(0,a.useCallback)((t=>{e({type:u.selectDatabase,payload:{db:t}})}),[e]);(0,a.useEffect)((()=>{const t=(0,ee.rV)(ee.dR.db,null);t&&o(t)}),[o]);const s=(0,a.useCallback)((t=>(0,v.tZ)(te.ez,{table:null!=l&&$t()(l).call(l,t.value)?{...t,extra:{warning_markdown:(0,r.t)("This table already has a dataset")}}:t})),[l]);return(0,v.tZ)(ne,null,(0,v.tZ)(te.ZP,j()({database:null==n?void 0:n.db,handleError:i,emptyState:(0,H.UX)(!1),onDbChange:o,onSchemaChange:t=>{t&&e({type:u.selectSchema,payload:{name:"schema",value:t}})},onTableSelectChange:t=>{e({type:u.selectTable,payload:{name:"table_name",value:t}})},sqlLabMode:!1,customTableOptionLabelRenderer:s},(null==n?void 0:n.schema)&&{schema:n.schema})))}var le=n(97381),ie=n(3741);const re=["db","schema","table_name"],oe=[ie.Ph,ie.FY,ie.Eh,ie.TA],se=(0,G.ZP)((function(t){let{datasetObject:e,addDangerToast:n,hasColumns:i=!1,datasets:o}=t;const s=(0,l.k6)(),{createResource:d}=(0,Q.LE)("dataset",(0,r.t)("dataset"),n),c=(0,r.t)("Select a database table."),u=(0,r.t)("Create dataset and create chart"),h=!(null!=e&&e.table_name)||!i||(null==o?void 0:$t()(o).call(o,null==e?void 0:e.table_name));return(0,v.tZ)(a.Fragment,null,(0,v.tZ)(p.Z,{onClick:()=>{if(e){const t=(t=>{let e=0;const n=Object.keys(t).reduce(((n,a)=>($t()(re).call(re,a)&&t[a]&&(e+=1),e)),0);return oe[n]})(e);(0,le.logEvent)(t,e)}else(0,le.logEvent)(ie.Ph,{});s.goBack()}},(0,r.t)("Cancel")),(0,v.tZ)(p.Z,{buttonStyle:"primary",disabled:h,tooltip:null!=e&&e.table_name?void 0:c,onClick:()=>{if(e){var t;const n={database:null==(t=e.db)?void 0:t.id,schema:e.schema,table_name:e.table_name};d(n).then((t=>{t&&"number"==typeof t&&((0,le.logEvent)(ie.P$,e),s.push(`/chart/add/?dataset=${e.table_name}`))}))}}},u))}));function de(t){let{header:e,leftPanel:n,datasetPanel:a,rightPanel:l,footer:i}=t;return(0,v.tZ)(f,null,e&&(0,v.tZ)(_,null,e),(0,v.tZ)(w,null,n&&(0,v.tZ)(x,null,(0,v.tZ)(S,null,n)),(0,v.tZ)($,null,(0,v.tZ)(U,null,a&&(0,v.tZ)(k,null,a),l&&(0,v.tZ)(C,null,l)),(0,v.tZ)(z,null,i&&(0,v.tZ)(E,null,i)))))}function ce(t,e){const n={...t||{}};switch(e.type){case u.selectDatabase:return{...n,...e.payload,schema:null,table_name:null};case u.selectSchema:return{...n,[e.payload.name]:e.payload.value,table_name:null};case u.selectTable:return{...n,[e.payload.name]:e.payload.value};case u.changeDataset:return{...n,[e.payload.name]:e.payload.value};default:return null}}function ue(){const[t,e]=(0,a.useReducer)(ce,null),[n,s]=(0,a.useState)(!1),[u,h]=(0,a.useState)(!1),{datasets:p,datasetNames:g}=((t,e)=>{const[n,l]=(0,a.useState)([]),s=e?encodeURIComponent(e):void 0,u=(0,a.useCallback)((async t=>{let e,n=[],a=0;for(;void 0===e||n.length<e;){const l=d().encode_uri({filters:t,page:a});try{const t=await i.Z.get({endpoint:`/api/v1/dataset/?q=${l}`});({count:e}=t.json);const{json:{result:r}}=t;n=[...n,...r],a+=1}catch(t){(0,c.Gb)((0,r.t)("There was an error fetching dataset")),o.Z.error((0,r.t)("There was an error fetching dataset"),t)}}l(n)}),[]);(0,a.useEffect)((()=>{const n=[{col:"database",opr:"rel_o_m",value:null==t?void 0:t.id},{col:"schema",opr:"eq",value:s},{col:"sql",opr:"dataset_is_null_or_empty",value:!0}];e&&u(n)}),[null==t?void 0:t.id,e,s,u]);const h=(0,a.useMemo)((()=>null==n?void 0:n.map((t=>t.table_name))),[n]);return{datasets:n,datasetNames:h}})(null==t?void 0:t.db,null==t?void 0:t.schema),{datasetId:m}=(0,l.UO)();return(0,a.useEffect)((()=>{Number.isNaN(parseInt(m,10))||h(!0)}),[m]),(0,v.tZ)(de,{header:(0,v.tZ)(N,{setDataset:e,title:null==t?void 0:t.table_name}),leftPanel:u?null:(0,v.tZ)(ae,{setDataset:e,dataset:t,datasetNames:g}),datasetPanel:u?(0,v.tZ)(yt,{id:m}):(0,v.tZ)(Jt,{tableName:null==t?void 0:t.table_name,dbId:null==t||null==(b=t.db)?void 0:b.id,schema:null==t?void 0:t.schema,setHasColumns:s,datasets:p}),footer:(0,v.tZ)(se,{url:"/tablemodelview/list/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc",datasetObject:t,hasColumns:n,datasets:g})});var b}}}]);
//# sourceMappingURL=c8c747efbd543125f8c6.chunk.js.map