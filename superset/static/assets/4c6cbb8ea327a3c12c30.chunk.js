"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9540],{40730:(e,t,n)=>{n.d(t,{Z:()=>ze});var a,r=n(28216),l=n(14890),i=n(52256),o=n(97381),s=n(5872),d=n.n(s),c=n(45697),u=n.n(c),h=n(67294),p=n(55867),m=n(51995),g=n(93185),v=n(68492),b=n(55786),f=n(9531),Z=n(38703),y=n(94301),S=n(57902),x=n(3741),C=n(27600),w=n(23525),T=n(71894);!function(e){e.Explore="explore",e.Dashboard="dashboard"}(a||(a={}));var _,k=n(42190),I=n(50361),D=n.n(I),M=n(18446),$=n.n(M),E=n(42933),F=n.n(E),R=n(16355),O=n(11064),N=n(88274),A=n(11965),L=n(78580),U=n.n(L),z=n(90731),P=n(12617),B=n(83862),j=n(4715),q=n(74599),V=n(41814),H=n(69175),K=n(15856),Q=n(70163),W=n(9875),Y=n(14114),G=n(6412),X=n(37731),J=n(73727),ee=n(74069),te=n(35932),ne=n(50232),ae=n(40219),re=n(99232),le=n(53579),ie=n(29487);function oe(e){let{formData:t,result:n,dataset:a,onContextMenu:r,inContextMenu:l}=e;const i=(0,h.useMemo)((()=>({onContextMenu:r})),[r]);return(0,A.tZ)("div",{css:A.iv`
        width: 100%;
        height: 100%;
        min-height: 0;
      `},(0,A.tZ)(N.Z,{disableErrorBoundary:!0,chartType:t.viz_type,enableNoResults:!0,datasource:a,formData:t,queriesData:n,hooks:i,inContextMenu:l,height:"100%",width:"100%"}))}!function(e){e[e.Chart=0]="Chart",e[e.Table=1]="Table"}(_||(_={}));var se=n(87183),de=n(54076);const ce=(0,m.iK)(j.O5.Item)`
  ${e=>{let{theme:t,isClickable:n}=e;return A.iv`
    cursor: ${n?"pointer":"auto"};
    color: ${t.colors.grayscale.light1};
    transition: color ease-in ${t.transitionTiming}s;
    .ant-breadcrumb > span:last-child > & {
      color: ${t.colors.grayscale.dark1};
    }
    &:hover {
      color: ${n?t.colors.grayscale.dark1:"inherit"};
    }
  `}}
`;var ue=n(5462),he=n(71262);const pe=m.iK.div`
  ${e=>{let{theme:t}=e;return A.iv`
    & .pagination-container {
      bottom: ${4*-t.gridUnit}px;
    }
  `}}
`,me="adhoc_filters",ge=e=>{let{formData:t,closeModal:n}=e;const a=(0,r.I0)(),{addDangerToast:l}=(0,Y.e1)(),[i,s]=(0,h.useState)(""),d=(0,h.useContext)(ne.DashboardPageIdContext),c=(0,h.useCallback)((()=>{a((0,o.logEvent)(x.qL,{slice_id:t.slice_id}))}),[a,t.slice_id]),[u,m]=t.datasource.split("__");return(0,h.useEffect)((()=>{(0,ae.nv)(Number(u),m,t,0).then((e=>{s(`/explore/?form_data_key=${e}&dashboard_page_id=${d}`)})).catch((()=>{l((0,p.t)("Failed to generate chart edit URL"))}))}),[l,d,u,m,t]),(0,A.tZ)(h.Fragment,null,(0,A.tZ)(te.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:c,disabled:!i},(0,A.tZ)(J.rU,{css:A.iv`
            &:hover {
              text-decoration: none;
            }
          `,to:i},(0,p.t)("Edit chart"))),(0,A.tZ)(te.Z,{buttonStyle:"primary",buttonSize:"small",onClick:n},(0,p.t)("Close")))};function ve(e){let{column:t,dataset:n,drillByConfig:a,formData:l,onHideModal:s}=e;const d=(0,r.I0)(),c=(0,m.Fg)(),{addDangerToast:u}=(0,Y.e1)(),[g,v]=(0,h.useState)(!0),[f,y]=(0,h.useState)([{...a,column:t}]);(0,h.useEffect)((()=>{d((0,o.logEvent)(x.zf,{slice_id:l.slice_id}))}),[d,l.slice_id]);const{column:S,groupbyFieldName:C=a.groupbyFieldName}=f[f.length-1]||{},w=(0,h.useMemo)((()=>(0,b.Z)(l[C]).map((e=>{var t;return null==(t=n.columns)?void 0:t.find((t=>t.column_name===e))})).filter(X.Z)),[n.columns,l,C]),{displayModeToggle:T,drillByDisplayMode:k}=(()=>{const[e,t]=(0,h.useState)(_.Chart);return{displayModeToggle:(0,h.useMemo)((()=>(0,A.tZ)("div",{css:e=>A.iv`
          margin-bottom: ${6*e.gridUnit}px;
          .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
            box-shadow: none;
          }
        `},(0,A.tZ)(se.Y.Group,{onChange:e=>{let{target:{value:n}}=e;t(n)},defaultValue:_.Chart},(0,A.tZ)(se.Y.Button,{value:_.Chart},(0,p.t)("Chart")),(0,A.tZ)(se.Y.Button,{value:_.Table},(0,p.t)("Table"))))),[]),drillByDisplayMode:e}})(),[I,D]=(0,h.useState)(),M=((e,t)=>(0,X.Z)(e)?1===e.length?(0,A.tZ)(pe,null,(0,A.tZ)(ue.T,{colnames:e[0].colnames,coltypes:e[0].coltypes,data:e[0].data,dataSize:15,datasourceId:t,isVisible:!0})):(0,A.tZ)(he.ZP,{fullWidth:!1},e.map(((e,n)=>(0,A.tZ)(he.ZP.TabPane,{tab:(0,p.t)("Results %s",n+1),key:n},(0,A.tZ)(pe,null,(0,A.tZ)(ue.T,{colnames:e.colnames,coltypes:e.coltypes,data:e.data,dataSize:15,datasourceId:t,isVisible:!0})))))):(0,A.tZ)("div",null))(I,l.datasource),[$,E]=(0,h.useState)(l),[F,R]=(0,h.useState)([...w,t].filter(X.Z)),[O,N]=(0,h.useState)([{groupby:w,filters:a.filters},{groupby:t||[]}]),L=(0,h.useCallback)((function(e,t){return void 0===t&&(t=C),Array.isArray(l[t])?[e.column_name]:e.column_name}),[l,C]),U=(0,h.useCallback)((e=>e.reduce(((e,t)=>{null!=t&&t.groupbyFieldName&&t.column&&(e.formData[t.groupbyFieldName]=L(t.column,t.groupbyFieldName),e.overridenGroupbyFields.add(t.groupbyFieldName));const n=(null==t?void 0:t.adhocFilterFieldName)||me;return e.formData[n]=[...(0,b.Z)(e[n]),...(0,b.Z)(t.filters).map((e=>(0,re.f)(e)))],e.overridenAdhocFilterFields.add(n),e}),{formData:{},overridenGroupbyFields:new Set,overridenAdhocFilterFields:new Set})),[L]),z=(0,h.useCallback)((()=>f.reduce(((e,t)=>{const n=t.adhocFilterFieldName||me;return e[n]=[...e[n]||[],...t.filters.map((e=>(0,re.f)(e)))],e}),{})),[f]),P=function(e,t){return void 0===t&&(t=de.EI),(0,h.useMemo)((()=>{const n=t=>t<e.length-1;return(0,A.tZ)(j.O5,{css:e=>A.iv`
          margin: ${2*e.gridUnit}px 0 ${4*e.gridUnit}px;
        `},e.map(((e,a)=>(0,A.tZ)(ce,{key:a,isClickable:n(a),onClick:n(a)?()=>t(e,a):de.EI},(e=>`${(0,b.Z)(e.groupby).map((e=>e.verbose_name||e.column_name)).join(", ")} ${e.filters?`(${e.filters.map((e=>e.formattedVal||e.val)).join(", ")})`:""}`)(e)))))}),[e,t])}(O,(0,h.useCallback)(((e,t)=>{d((0,o.logEvent)(x.TG,{slice_id:l.slice_id})),y((e=>e.slice(0,t))),N((e=>{const n=e.slice(0,t+1);return delete n[n.length-1].filters,n})),R((e=>e.slice(0,t))),E((()=>{if(0===t)return l;const{formData:e,overridenAdhocFilterFields:n}=U(f.slice(0,t)),a={...l,...e};return n.forEach((t=>({...a,[t]:[...l[t],...e[t]]}))),a}))}),[d,f,l,U])),B=(0,h.useMemo)((()=>{let e={...$};S&&C&&(e[C]=L(S));const t=z();return Object.keys(t).forEach((n=>{e={...e,[n]:[...(0,b.Z)(l[n]),...t[n]]}})),e.slice_id=0,delete e.slice_name,delete e.dashboards,e}),[$,S,C,z,L,l]);(0,h.useEffect)((()=>{R((e=>!S||e.some((e=>e.column_name===S.column_name))?e:[...e,S]))}),[S]);const q=(0,h.useCallback)(((e,t)=>{d((0,o.logEvent)(x.g3,{drill_depth:f.length+1,slice_id:l.slice_id})),E(B),y((n=>[...n,{...t,column:e}])),N((n=>{const a=[...n,{groupby:e}];return a[a.length-2].filters=t.filters,a}))}),[d,f.length,B,l.slice_id]),V=(0,h.useMemo)((()=>({drillBy:{excludedColumns:F,openNewModal:!1}})),[F]),{contextMenu:H,inContextMenu:K,onContextMenu:Q}=((e,t,n,a,r)=>{const l=(0,h.useRef)(null),[i,o]=(0,h.useState)(!1),s=(0,h.useCallback)((function(){o(!1);for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null==n||n(...t)}),[n]),d=(0,h.useCallback)((()=>{o(!1)}),[]);return{contextMenu:(0,h.useMemo)((()=>(0,A.tZ)(Se,{ref:l,id:0,formData:t,onSelection:s,onClose:d,displayedItems:a,additionalConfig:r})),[r,0,a,t,d,s]),inContextMenu:i,onContextMenu:(e,t,n)=>{var a;null==(a=l.current)||a.open(e,t,n),o(!0)}}})(0,$,q,Ze.DrillBy,V),W=(0,r.v9)((e=>{const t=Object.values(e.dashboardLayout.present).find((e=>{var t;return(null==(t=e.meta)?void 0:t.chartId)===l.slice_id}));return(null==t?void 0:t.meta.sliceNameOverride)||(null==t?void 0:t.meta.sliceName)}));(0,h.useEffect)((()=>{B&&(v(!0),D(void 0),(0,i.getChartDataRequest)({formData:B}).then((e=>{let{json:t}=e;D(t.result)})).catch((()=>{u((0,p.t)("Failed to load chart data."))})).finally((()=>{v(!1)})))}),[u,B]);const{metadataBar:G}=(0,le.S)({dataset:n});return(0,A.tZ)(ee.Z,{css:A.iv`
        .ant-modal-footer {
          border-top: none;
        }
      `,show:!0,onHide:null!=s?s:()=>null,title:(0,p.t)("Drill by: %s",W),footer:(0,A.tZ)(ge,{formData:B}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*c.gridUnit,minWidth:128*c.gridUnit,defaultSize:{width:"auto",height:"80vh"}},draggable:!0,destroyOnClose:!0,maskClosable:!1},(0,A.tZ)("div",{css:A.iv`
          display: flex;
          flex-direction: column;
          height: 100%;
        `},G,P,T,g&&(0,A.tZ)(Z.Z,null),!g&&!I&&(0,A.tZ)(ie.Z,{type:"error",message:(0,p.t)("There was an error loading the chart data")}),k===_.Chart&&I&&(0,A.tZ)(oe,{dataset:n,formData:B,result:I,onContextMenu:Q,inContextMenu:K}),k===_.Table&&I&&M,H))}var be=n(46219);const fe=e=>{let{drillByConfig:t,formData:n,contextMenuY:a=0,submenuIndex:r=0,onSelection:l=(()=>{}),onClick:i=(()=>{}),excludedColumns:o,openNewModal:s=!0,...c}=e;const u=(0,m.Fg)(),{addDangerToast:g}=(0,Y.e1)(),[v,f]=(0,h.useState)(!0),[y,S]=(0,h.useState)(""),[x,C]=(0,h.useState)(),[w,T]=(0,h.useState)([]),[_,k]=(0,h.useState)(!1),[I,D]=(0,h.useState)(),M=(0,h.useCallback)(((e,n)=>{i(e),l(n,t),D(n),s&&k(!0)}),[t,i,l,s]),$=(0,h.useCallback)((()=>{k(!1)}),[]);(0,h.useEffect)((()=>{S("")}),[w.length]);const E=(0,b.Z)(null==t?void 0:t.filters).length&&(null==t?void 0:t.groupbyFieldName),F=(0,h.useMemo)((()=>{var e;return null==(e=(0,O.Z)().get(n.viz_type))?void 0:e.behaviors.find((e=>e===R.cg.DRILL_BY))}),[n.viz_type]),N=(e=>{const t={};return(0,b.Z)(null==e?void 0:e.columns).forEach((e=>{t[e.column_name]=e.verbose_name||e.column_name})),(0,b.Z)(null==e?void 0:e.metrics).forEach((e=>{t[e.metric_name]=e.verbose_name||e.metric_name})),t})(x);(0,h.useEffect)((()=>{if(F&&E){const e=n.datasource.split("__")[0];(0,G.e)({endpoint:`/api/v1/dataset/${e}`}).then((e=>{let{json:{result:a}}=e;C(a),T((0,b.Z)(a.columns).filter((e=>e.groupby)).filter((e=>{var a,r,l;return!U()(a=(0,b.Z)(n[null!=(r=t.groupbyFieldName)?r:""])).call(a,e.column_name)&&e.column_name!==n.x_axis&&(null==(l=(0,b.Z)(o))?void 0:l.every((t=>t.column_name!==e.column_name)))})))})).catch((()=>{G.f.delete(`/api/v1/dataset/${e}`),g((0,p.t)("Failed to load dimensions for drill by"))})).finally((()=>{f(!1)}))}}),[g,o,n,null==t?void 0:t.groupbyFieldName,F,E]);const L=(0,h.useCallback)((e=>{var t;e.stopPropagation();const n=null==e||null==(t=e.target)?void 0:t.value;S(n)}),[]),z=(0,h.useMemo)((()=>w.filter((e=>{var t;return U()(t=(e.verbose_name||e.column_name).toLowerCase()).call(t,y.toLowerCase())}))),[w,y]),P=(0,h.useMemo)((()=>(0,H.th)(a,z.length||1,r,200,w.length>10?48:0)),[a,z.length,r,w.length]);let j;return F?E||(j=(0,p.t)("Drill by is not available for this data point")):j=(0,p.t)("Drill by is not yet supported for this chart type"),F&&E?(0,A.tZ)(h.Fragment,null,(0,A.tZ)(B.v.SubMenu,d()({title:(0,p.t)("Drill by"),key:"drill-by-submenu",popupClassName:"chart-context-submenu",popupOffset:[0,P]},c),(0,A.tZ)("div",null,w.length>10&&(0,A.tZ)(W.II,{prefix:(0,A.tZ)(Q.Z.Search,{iconSize:"l",iconColor:u.colors.grayscale.light1}),onChange:L,placeholder:(0,p.t)("Search columns"),value:y,onClick:e=>{e.nativeEvent.stopImmediatePropagation()},allowClear:!0,css:A.iv`
                width: auto;
                max-width: 100%;
                margin: ${2*u.gridUnit}px ${3*u.gridUnit}px;
                box-shadow: none;
              `}),v?(0,A.tZ)("div",{css:A.iv`
                padding: ${3*u.gridUnit}px 0;
              `},(0,A.tZ)(Z.Z,{position:"inline-centered"})):z.length?(0,A.tZ)("div",{css:A.iv`
                max-height: ${200}px;
                overflow: auto;
              `},z.map((e=>(0,A.tZ)(be.i,d()({key:`drill-by-item-${e.column_name}`,tooltipText:e.verbose_name||e.column_name},c,{onClick:t=>M(t,e)}),e.verbose_name||e.column_name)))):(0,A.tZ)(B.v.Item,d()({disabled:!0,key:"no-drill-by-columns-found"},c),(0,p.t)("No columns found")))),_&&(0,A.tZ)(ve,{column:I,drillByConfig:t,formData:n,onHideModal:$,dataset:{...x,verbose_map:N}})):(0,A.tZ)(B.v.Item,d()({key:"drill-by-disabled",disabled:!0},c),(0,A.tZ)("div",null,(0,p.t)("Drill by"),(0,A.tZ)(K.j,{title:j})))};var Ze;!function(e){e[e.CrossFilter=0]="CrossFilter",e[e.DrillToDetail=1]="DrillToDetail",e[e.DrillBy=2]="DrillBy",e[e.All=3]="All"}(Ze||(Ze={}));const ye=(e,t)=>{var n,a;let{id:l,formData:i,onSelection:o,onClose:s,displayedItems:c=Ze.All,additionalConfig:u}=e;const v=(0,m.Fg)(),f=(0,r.I0)(),Z=(0,r.v9)((e=>{var t;return(0,P.R)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)})),y=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.crossFiltersEnabled})),S=e=>{var t;return c===Ze.All||U()(t=(0,b.Z)(c)).call(t,e)},[{filters:x,clientX:C,clientY:w},T]=(0,h.useState)({clientX:0,clientY:0}),_=[],k=(0,g.cr)(g.TT.DRILL_TO_DETAIL)&&Z&&S(Ze.DrillToDetail),I=(0,g.cr)(g.TT.DRILL_BY)&&Z&&S(Ze.DrillBy),D=(0,g.cr)(g.TT.DASHBOARD_CROSS_FILTERS)&&S(Ze.CrossFilter),M=null==(n=(0,O.Z)().get(i.viz_type))||null==(a=n.behaviors)?void 0:U()(a).call(a,R.cg.INTERACTIVE_CHART);let $=0;if(D&&($+=1),k&&($+=2),I&&($+=1),0===$&&($=1),D){var E;const e=!M||!y||!(null!=x&&x.crossFilter);let t=null;e?y?M?null!=x&&x.crossFilter||(t=(0,A.tZ)(h.Fragment,null,(0,A.tZ)("div",null,(0,p.t)("You can't apply cross-filter on this data point.")))):t=(0,A.tZ)(h.Fragment,null,(0,A.tZ)("div",null,(0,p.t)("This visualization type does not support cross-filtering."))):t=(0,A.tZ)(h.Fragment,null,(0,A.tZ)("div",null,(0,p.t)("Cross-filtering is not enabled for this dashboard."))):t=(0,A.tZ)(h.Fragment,null,(0,A.tZ)("div",null,(0,p.t)("Cross-filter will be applied to all of the charts that use this dataset.")),(0,A.tZ)("div",null,(0,p.t)("You can also just click on the chart to apply cross-filter."))),_.push((0,A.tZ)(h.Fragment,null,(0,A.tZ)(B.v.Item,{key:"cross-filtering-menu-item",disabled:e,onClick:()=>{null!=x&&x.crossFilter&&f((0,q.eG)(l,x.crossFilter.dataMask))}},null!=x&&null!=(E=x.crossFilter)&&E.isCurrentValueSelected?(0,p.t)("Remove cross-filter"):(0,A.tZ)("div",null,(0,p.t)("Add cross-filter"),(0,A.tZ)(K.j,{title:t,color:e?void 0:v.colors.grayscale.base}))),$>1&&(0,A.tZ)(B.v.Divider,null)))}if(k&&_.push((0,A.tZ)(V.p,d()({chartId:l,formData:i,filters:null==x?void 0:x.drillToDetail,isContextMenu:!0,contextMenuY:w,onSelection:o,submenuIndex:D?2:1},(null==u?void 0:u.drillToDetail)||{}))),I){let e=0;D&&(e+=1),k&&(e+=2),_.push((0,A.tZ)(fe,d()({drillByConfig:null==x?void 0:x.drillBy,onSelection:o,formData:i,contextMenuY:w,submenuIndex:e},(null==u?void 0:u.drillBy)||{})))}const F=(0,h.useCallback)(((e,t,n)=>{var a;const r=(0,H.$t)(t,$);T({clientX:e,clientY:r,filters:n}),null==(a=document.getElementById(`hidden-span-${l}`))||a.click()}),[l,$]);return(0,h.useImperativeHandle)(t,(()=>({open:F})),[F]),z.createPortal((0,A.tZ)(j.Gj,{overlay:(0,A.tZ)(B.v,{className:"chart-context-menu"},_.length?_:(0,A.tZ)(B.v.Item,{disabled:!0},"No actions")),trigger:["click"],onVisibleChange:e=>!e&&s()},(0,A.tZ)("span",{id:`hidden-span-${l}`,css:(0,A.iv)({visibility:"hidden",position:"fixed",top:w,left:C,width:1,height:1},"","")})),document.body)},Se=(0,h.forwardRef)(ye),xe={annotationData:u().object,actions:u().object,chartId:u().number.isRequired,datasource:u().object,initialValues:u().object,formData:u().object.isRequired,latestQueryFormData:u().object,labelColors:u().object,sharedLabelColors:u().object,height:u().number,width:u().number,setControlValue:u().func,vizType:u().string.isRequired,triggerRender:u().bool,chartAlert:u().string,chartStatus:u().string,queriesResponse:u().arrayOf(u().object),triggerQuery:u().bool,chartIsStale:u().bool,addFilter:u().func,setDataMask:u().func,onFilterMenuOpen:u().func,onFilterMenuClose:u().func,ownState:u().object,postTransformProps:u().func,source:u().oneOf([a.Dashboard,a.Explore]),emitCrossFilters:u().bool},Ce={},we=[R.cg.INTERACTIVE_CHART],Te={addFilter:()=>Ce,onFilterMenuOpen:()=>Ce,onFilterMenuClose:()=>Ce,initialValues:Ce,setControlValue(){},triggerRender:!1};class _e extends h.Component{constructor(e){super(e),this.state={showContextMenu:e.source===a.Dashboard&&((0,g.cr)(g.TT.DRILL_TO_DETAIL)||(0,g.cr)(g.TT.DASHBOARD_CROSS_FILTERS)),inContextMenu:!1,legendState:void 0},this.hasQueryResponseChange=!1,this.contextMenuRef=h.createRef(),this.handleAddFilter=this.handleAddFilter.bind(this),this.handleRenderSuccess=this.handleRenderSuccess.bind(this),this.handleRenderFailure=this.handleRenderFailure.bind(this),this.handleSetControlValue=this.handleSetControlValue.bind(this),this.handleOnContextMenu=this.handleOnContextMenu.bind(this),this.handleContextMenuSelected=this.handleContextMenuSelected.bind(this),this.handleContextMenuClosed=this.handleContextMenuClosed.bind(this),this.handleLegendStateChanged=this.handleLegendStateChanged.bind(this),this.onContextMenuFallback=this.onContextMenuFallback.bind(this),this.hooks={onAddFilter:this.handleAddFilter,onContextMenu:this.state.showContextMenu?this.handleOnContextMenu:void 0,onError:this.handleRenderFailure,setControlValue:this.handleSetControlValue,onFilterMenuOpen:this.props.onFilterMenuOpen,onFilterMenuClose:this.props.onFilterMenuClose,onLegendStateChanged:this.handleLegendStateChanged,setDataMask:e=>{var t;null==(t=this.props.actions)||t.updateDataMask(this.props.chartId,e)}},this.mutableQueriesResponse=D()(this.props.queriesResponse)}shouldComponentUpdate(e,t){var n,a;return!(!(e.queriesResponse&&["success","rendered"].indexOf(e.chartStatus)>-1)||null!=(n=e.queriesResponse)&&null!=(a=n[0])&&a.error)&&(!$()(this.state,t)||(this.hasQueryResponseChange=e.queriesResponse!==this.props.queriesResponse,this.hasQueryResponseChange&&(this.mutableQueriesResponse=D()(e.queriesResponse)),this.hasQueryResponseChange||!$()(e.datasource,this.props.datasource)||e.annotationData!==this.props.annotationData||e.ownState!==this.props.ownState||e.filterState!==this.props.filterState||e.height!==this.props.height||e.width!==this.props.width||e.triggerRender||e.labelColors!==this.props.labelColors||e.sharedLabelColors!==this.props.sharedLabelColors||e.formData.color_scheme!==this.props.formData.color_scheme||e.formData.stack!==this.props.formData.stack||e.cacheBusterProp!==this.props.cacheBusterProp||e.emitCrossFilters!==this.props.emitCrossFilters))}handleAddFilter(e,t,n,a){void 0===n&&(n=!0),void 0===a&&(a=!0),this.props.addFilter(e,t,n,a)}handleRenderSuccess(){const{actions:e,chartStatus:t,chartId:n,vizType:a}=this.props;["loading","rendered"].indexOf(t)<0&&e.chartRenderingSucceeded(n),this.hasQueryResponseChange&&e.logEvent(x.aD,{slice_id:n,viz_type:a,start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}handleRenderFailure(e,t){const{actions:n,chartId:a}=this.props;v.Z.warn(e),n.chartRenderingFailed(e.toString(),a,t?t.componentStack:null),this.hasQueryResponseChange&&n.logEvent(x.aD,{slice_id:a,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}handleSetControlValue(){const{setControlValue:e}=this.props;e&&e(...arguments)}handleOnContextMenu(e,t,n){this.contextMenuRef.current.open(e,t,n),this.setState({inContextMenu:!0})}handleContextMenuSelected(){this.setState({inContextMenu:!1})}handleContextMenuClosed(){this.setState({inContextMenu:!1})}handleLegendStateChanged(e){this.setState({legendState:e})}onContextMenuFallback(e){this.state.inContextMenu||(e.preventDefault(),this.handleOnContextMenu(e.clientX,e.clientY))}render(){var e;const{chartAlert:t,chartStatus:n,chartId:r,emitCrossFilters:l}=this.props;if("loading"===n||t||null===n)return null;this.renderStartTime=x.Yd.getTimestamp();const{width:i,height:o,datasource:s,annotationData:c,initialValues:u,ownState:m,filterState:g,chartIsStale:v,formData:b,latestQueryFormData:f,postTransformProps:Z}=this.props,S=v&&f?f:b,C=S.viz_type||this.props.vizType,w=F()(C),T="table"===C?`superset-chart-${w}`:w;let _;const k=(0,p.t)("No results were returned for this query"),I=this.props.source===a.Explore?(0,p.t)("Make sure that the controls are configured properly and the datasource contains data for the selected time range"):void 0,D="chart.svg";_=i>300&&o>220?(0,A.tZ)(y.XJ,{title:k,description:I,image:D}):(0,A.tZ)(y.Tc,{title:k,image:D});const M=null!=(e=(0,O.Z)().get(b.viz_type))&&e.behaviors.find((e=>e===R.cg.DRILL_TO_DETAIL))?{inContextMenu:this.state.inContextMenu}:{};return(0,A.tZ)(h.Fragment,null,this.state.showContextMenu&&(0,A.tZ)(Se,{ref:this.contextMenuRef,id:r,formData:S,onSelection:this.handleContextMenuSelected,onClose:this.handleContextMenuClosed}),(0,A.tZ)("div",{onContextMenu:this.state.showContextMenu?this.onContextMenuFallback:void 0},(0,A.tZ)(N.Z,d()({disableErrorBoundary:!0,key:`${r}`,id:`chart-id-${r}`,className:T,chartType:C,width:i,height:o,annotationData:c,datasource:s,initialValues:u,formData:S,ownState:m,filterState:g,hooks:this.hooks,behaviors:we,queriesData:this.mutableQueriesResponse,onRenderSuccess:this.handleRenderSuccess,onRenderFailure:this.handleRenderFailure,noResults:_,postTransformProps:Z,emitCrossFilters:l,legendState:this.state.legendState},M))))}}_e.propTypes=xe,_e.defaultProps=Te;const ke=_e;var Ie=n(67417),De=n(72875);const Me=e=>{let{chartId:t,error:n,...a}=e;const{result:r}=(0,Ie.hb)(t),l=n&&{...n,extra:{...n.extra,owners:r}};return(0,A.tZ)(De.Z,d()({},a,{error:l}))};var $e=n(75701);const Ee={annotationData:u().object,actions:u().object,chartId:u().number.isRequired,datasource:u().object,dashboardId:u().number,initialValues:u().object,formData:u().object.isRequired,labelColors:u().object,sharedLabelColors:u().object,width:u().number,height:u().number,setControlValue:u().func,timeout:u().number,vizType:u().string.isRequired,triggerRender:u().bool,force:u().bool,isFiltersInitialized:u().bool,chartAlert:u().string,chartStatus:u().string,chartStackTrace:u().string,queriesResponse:u().arrayOf(u().object),triggerQuery:u().bool,chartIsStale:u().bool,errorMessage:u().node,addFilter:u().func,onQuery:u().func,onFilterMenuOpen:u().func,onFilterMenuClose:u().func,ownState:u().object,postTransformProps:u().func,datasetsStatus:u().oneOf(["loading","error","complete"]),isInView:u().bool,emitCrossFilters:u().bool},Fe={},Re=(0,p.t)("The dataset associated with this chart no longer exists"),Oe={addFilter:()=>Fe,onFilterMenuOpen:()=>Fe,onFilterMenuClose:()=>Fe,initialValues:Fe,setControlValue(){},triggerRender:!1,dashboardId:null,chartStackTrace:null,force:!1,isInView:!0},Ne=m.iK.div`
  min-height: ${e=>e.height}px;
  position: relative;

  .chart-tooltip {
    opacity: 0.75;
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  }

  .slice_container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: ${e=>e.height}px;

    .pivot_table tbody tr {
      font-feature-settings: 'tnum' 1;
    }

    .alert {
      margin: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    }
  }
`,Ae=m.iK.div`
  font-family: ${e=>{let{theme:t}=e;return t.typography.families.monospace}};
  word-break: break-word;
  overflow-x: auto;
  white-space: pre-wrap;
`;class Le extends h.PureComponent{constructor(e){super(e),this.handleRenderContainerFailure=this.handleRenderContainerFailure.bind(this)}componentDidMount(){this.props.triggerQuery&&this.runQuery()}componentDidUpdate(){this.props.triggerQuery&&this.runQuery()}runQuery(){this.props.chartId>0&&(0,g.cr)(g.TT.CLIENT_CACHE)?this.props.actions.getSavedChart(this.props.formData,this.props.force||(0,w.eY)(C.KD.force),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState):this.props.actions.postChartFormData(this.props.formData,this.props.force||(0,w.eY)(C.KD.force),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState)}handleRenderContainerFailure(e,t){const{actions:n,chartId:a}=this.props;v.Z.warn(e),n.chartRenderingFailed(e.toString(),a,t?t.componentStack:null),n.logEvent(x.aD,{slice_id:a,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}renderErrorMessage(e){var t;const{chartId:n,chartAlert:r,chartStackTrace:l,datasource:i,dashboardId:o,height:s,datasetsStatus:d}=this.props,c=null==e||null==(t=e.errors)?void 0:t[0],u=r||(null==e?void 0:e.message);return void 0!==r&&r!==Re&&i===f.tw&&d!==k.ni.ERROR?(0,A.tZ)(Ne,{key:n,"data-ui-anchor":"chart",className:"chart-container",height:s},(0,A.tZ)(Z.Z,null)):(0,A.tZ)(Me,{key:n,chartId:n,error:c,subtitle:(0,A.tZ)(Ae,null,u),copyText:u,link:e?e.link:null,source:o?a.Dashboard:a.Explore,stackTrace:l})}render(){const{height:e,chartAlert:t,chartStatus:n,errorMessage:a,chartIsStale:r,queriesResponse:l=[],width:i}=this.props,o="loading"===n;return this.renderContainerStartTime=x.Yd.getTimestamp(),"failed"===n?l.map((e=>this.renderErrorMessage(e))):a&&0===(0,b.Z)(l).length?(0,A.tZ)(y.XJ,{title:(0,p.t)("Add required control values to preview chart"),description:(0,$e.J)(!0),image:"chart.svg"}):o||t||a||!r||0!==(0,b.Z)(l).length?(0,A.tZ)(S.Z,{onError:this.handleRenderContainerFailure,showMessage:!1},(0,A.tZ)(Ne,{"data-ui-anchor":"chart",className:"chart-container",height:e,width:i},(0,A.tZ)("div",{className:"slice_container"},this.props.isInView||!(0,g.cr)(g.TT.DASHBOARD_VIRTUALIZATION)||(0,T.b)()?(0,A.tZ)(ke,d()({},this.props,{source:this.props.dashboardId?"dashboard":"explore"})):(0,A.tZ)(Z.Z,null)),o&&(0,A.tZ)(Z.Z,null))):(0,A.tZ)(y.XJ,{title:(0,p.t)("Your chart is ready to go!"),description:(0,A.tZ)("span",null,(0,p.t)('Click on "Create chart" button in the control panel on the left to preview a visualization or')," ",(0,A.tZ)("span",{role:"button",tabIndex:0,onClick:this.props.onQuery},(0,p.t)("click here")),"."),image:"chart.svg"})}}Le.propTypes=Ee,Le.defaultProps=Oe;const Ue=Le,ze=(0,r.$j)(null,(function(e){return{actions:(0,l.DE)({...i,updateDataMask:q.eG,logEvent:o.logEvent},e)}}))(Ue)},96022:(e,t,n)=>{n.d(t,{ZN:()=>q,gT:()=>H});var a=n(78580),r=n.n(a),l=n(67294),i=n(28216),o=n(51995),s=n(11965),d=n(55867),c=n(93185),u=n(70163),h=n(83862),p=n(1304),m=n(35932),g=n(14114),v=n(12515),b=n(56727),f=n(23525),Z=n(10222),y=n(7070),S=n(15423),x=n(9875),C=n(13433),w=n(27600),T=n(50909);const _=(0,o.iK)(T.qi)`
  && {
    margin: 0 0 ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,k=e=>{let{formData:t,addDangerToast:n}=e;const[a,r]=(0,l.useState)("400"),[i,o]=(0,l.useState)("600"),[c,u]=(0,l.useState)(""),[h,p]=(0,l.useState)(""),m=(0,l.useCallback)((e=>{const{value:t,name:n}=e.currentTarget;"width"===n&&o(t),"height"===n&&r(t)}),[]),g=(0,l.useCallback)((()=>{u(""),(0,f.YE)(t).then((e=>{u(e),p("")})).catch((()=>{p((0,d.t)("Error")),n((0,d.t)("Sorry, something went wrong. Try again later."))}))}),[n,t]);(0,l.useEffect)((()=>{g()}),[]);const v=(0,l.useMemo)((()=>{if(!c)return"";const e=`${c}?${w.KD.standalone.name}=1&height=${a}`;return`<iframe\n  width="${i}"\n  height="${a}"\n  seamless\n  frameBorder="0"\n  scrolling="no"\n  src="${e}"\n>\n</iframe>`}),[a,c,i]),b=h||v||(0,d.t)("Generating link, please wait..");return(0,s.tZ)("div",{id:"embed-code-popover"},(0,s.tZ)("div",{css:s.iv`
          display: flex;
          flex-direction: column;
        `},(0,s.tZ)(C.Z,{shouldShowText:!1,text:v,copyNode:(0,s.tZ)(_,{buttonSize:"xsmall"},(0,s.tZ)("i",{className:"fa fa-clipboard"}))}),(0,s.tZ)(x.Kx,{name:"embedCode",disabled:!v,value:b,rows:"4",readOnly:!0,css:e=>s.iv`
            resize: vertical;
            padding: ${2*e.gridUnit}px;
            font-size: ${e.typography.sizes.s}px;
            border-radius: 4px;
            background-color: ${e.colors.secondary.light5};
          `})),(0,s.tZ)("div",{css:e=>s.iv`
          display: flex;
          margin-top: ${4*e.gridUnit}px;
          & > div {
            margin-right: ${2*e.gridUnit}px;
          }
          & > div:last-of-type {
            margin-right: 0;
            margin-left: ${2*e.gridUnit}px;
          }
        `},(0,s.tZ)("div",null,(0,s.tZ)("label",{htmlFor:"embed-height"},(0,d.t)("Chart height")),(0,s.tZ)(x.II,{type:"text",defaultValue:a,name:"height",onChange:m})),(0,s.tZ)("div",null,(0,s.tZ)("label",{htmlFor:"embed-width"},(0,d.t)("Chart width")),(0,s.tZ)(x.II,{type:"text",defaultValue:i,name:"width",onChange:m,id:"embed-width"}))))};var I=n(5872),D=n.n(I),M=n(73727);const $=e=>{let{chartId:t,dashboards:n=[],...a}=e;const i=(0,o.Fg)(),[c,p]=(0,l.useState)(),[m,g]=(0,l.useState)(),v=n.length>10,b=n.filter((e=>{var t;return!c||r()(t=e.dashboard_title.toLowerCase()).call(t,c.toLowerCase())})),f=0===n.length,Z=c&&0===b.length,y=t?`?focused_chart=${t}`:"";return(0,s.tZ)(l.Fragment,null,v&&(0,s.tZ)(x.II,{allowClear:!0,placeholder:(0,d.t)("Search"),prefix:(0,s.tZ)(u.Z.Search,{iconSize:"l"}),css:s.iv`
            width: ${220}px;
            margin: ${2*i.gridUnit}px ${3*i.gridUnit}px;
          `,value:c,onChange:e=>p(e.currentTarget.value)}),(0,s.tZ)("div",{css:s.iv`
          max-height: ${300}px;
          overflow: auto;
        `},b.map((e=>(0,s.tZ)(h.v.Item,D()({key:String(e.id),onMouseEnter:()=>g(e.id),onMouseLeave:()=>{m===e.id&&g(null)}},a),(0,s.tZ)(M.rU,{target:"_blank",rel:"noreferer noopener",to:`/superset/dashboard/${e.id}${y}`},(0,s.tZ)("div",{css:s.iv`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  max-width: ${220}px;
                `},(0,s.tZ)("div",{css:s.iv`
                    white-space: normal;
                  `},e.dashboard_title),(0,s.tZ)(u.Z.Full,{iconSize:"l",iconColor:i.colors.grayscale.base,css:s.iv`
                    margin-left: ${2*i.gridUnit}px;
                    visibility: ${m===e.id?"visible":"hidden"};
                  `})))))),Z&&(0,s.tZ)("div",{css:s.iv`
              margin-left: ${3*i.gridUnit}px;
              margin-bottom: ${i.gridUnit}px;
            `},(0,d.t)("No results found")),f&&(0,s.tZ)(h.v.Item,D()({disabled:!0,css:s.iv`
              min-width: ${220}px;
            `},a),(0,d.t)("None"))))},E="edit_properties",F="export_to_csv",R="export_to_csv_pivoted",O="export_to_json",N="export_to_xlsx",A="download_as_image",L="copy_permalink",U="embed_code",z="share_by_email",P="view_query",B="run_in_sql_lab",j=["pivot_table_v2"],q=o.iK.div`
  ${e=>{let{theme:t}=e;return s.iv`
    display: flex;
    align-items: center;

    & svg {
      width: ${3*t.gridUnit}px;
      height: ${3*t.gridUnit}px;
    }

    & span[role='checkbox'] {
      display: inline-flex;
      margin-right: ${t.gridUnit}px;
    }
  `}}
`,V=((0,o.iK)(m.Z)`
  ${e=>{let{theme:t}=e;return s.iv`
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
  `}}
`,s.iv`
  .ant-dropdown-menu-item > & > .anticon:first-child {
    margin-right: 0;
    vertical-align: 0;
  }
`),H=(e,t,n,a,m,x,C)=>{const w=(0,o.Fg)(),{addDangerToast:T,addSuccessToast:_}=(0,g.e1)(),[I,D]=(0,l.useState)(null),[M,q]=(0,l.useState)(!1),[H,K]=(0,l.useState)([]),Q=(0,i.v9)((e=>{var t;return null==(t=e.charts)?void 0:t[(0,v.Jp)(e.explore)]})),{datasource:W}=e,Y=(0,l.useCallback)((async()=>{try{const t=(0,d.t)("Superset Chart"),n=await(0,f.YE)(e),a=encodeURIComponent((0,d.t)("%s%s","Check out this chart: ",n));window.location.href=`mailto:?Subject=${t}%20&Body=${a}`}catch(e){T((0,d.t)("Sorry, something went wrong. Try again later."))}}),[T,e]),G=(0,l.useCallback)((()=>t?(0,v.pe)({formData:e,ownState:x,resultType:"full",resultFormat:"csv"}):null),[t,e]),X=(0,l.useCallback)((()=>t?(0,v.pe)({formData:e,resultType:"post_processed",resultFormat:"csv"}):null),[t,e]),J=(0,l.useCallback)((()=>(0,v.pe)({formData:e,resultType:"results",resultFormat:"json"})),[e]),ee=(0,l.useCallback)((()=>(0,v.pe)({formData:e,resultType:"results",resultFormat:"xlsx"})),[e]),te=(0,l.useCallback)((async()=>{try{if(!e)throw new Error;await(0,Z.Z)((()=>(0,f.YE)(e))),_((0,d.t)("Copied to clipboard!"))}catch(e){T((0,d.t)("Sorry, something went wrong. Try again later."))}}),[T,_,e]),ne=(0,l.useCallback)((t=>{var r;let{key:l,domEvent:i}=t;switch(l){case E:m(),q(!1);break;case F:G(),q(!1),K([]);break;case R:X(),q(!1),K([]);break;case O:J(),q(!1),K([]);break;case N:ee(),q(!1),K([]);break;case A:(0,b.Z)(".panel-body .chart-container",null!=(r=null==n?void 0:n.slice_name)?r:(0,d.t)("New chart"),!0)(i),q(!1),K([]);break;case L:te(),q(!1),K([]);break;case U:q(!1),K([]);break;case z:Y(),q(!1),K([]);break;case P:q(!1);break;case B:a(e),q(!1)}}),[te,G,X,J,e,a,m,Y,null==n?void 0:n.slice_name]);return[(0,l.useMemo)((()=>(0,s.tZ)(h.v,{onClick:ne,selectable:!1,openKeys:H,onOpenChange:K},(0,s.tZ)(l.Fragment,null,n&&(0,s.tZ)(h.v.Item,{key:E},(0,d.t)("Edit chart properties")),(0,s.tZ)(h.v.SubMenu,{title:(0,d.t)("Dashboards added to"),key:"dashboards_added_to"},(0,s.tZ)($,{chartId:null==n?void 0:n.slice_id,dashboards:C})),(0,s.tZ)(h.v.Divider,null)),(0,s.tZ)(h.v.SubMenu,{title:(0,d.t)("Download"),key:"download_submenu"},r()(j).call(j,e.viz_type)?(0,s.tZ)(l.Fragment,null,(0,s.tZ)(h.v.Item,{key:F,icon:(0,s.tZ)(u.Z.FileOutlined,{css:V}),disabled:!t},(0,d.t)("Export to original .CSV")),(0,s.tZ)(h.v.Item,{key:R,icon:(0,s.tZ)(u.Z.FileOutlined,{css:V}),disabled:!t},(0,d.t)("Export to pivoted .CSV"))):(0,s.tZ)(h.v.Item,{key:F,icon:(0,s.tZ)(u.Z.FileOutlined,{css:V}),disabled:!t},(0,d.t)("Export to .CSV")),(0,s.tZ)(h.v.Item,{key:O,icon:(0,s.tZ)(u.Z.FileOutlined,{css:V})},(0,d.t)("Export to .JSON")),(0,s.tZ)(h.v.Item,{key:A,icon:(0,s.tZ)(u.Z.FileImageOutlined,{css:V})},(0,d.t)("Download as image")),(0,s.tZ)(h.v.Item,{key:N,icon:(0,s.tZ)(u.Z.FileOutlined,{css:V})},(0,d.t)("Export to Excel"))),(0,s.tZ)(h.v.SubMenu,{title:(0,d.t)("Share"),key:"share_submenu"},(0,s.tZ)(h.v.Item,{key:L},(0,d.t)("Copy permalink to clipboard")),(0,s.tZ)(h.v.Item,{key:z},(0,d.t)("Share chart by email")),(0,c.cr)(c.TT.EMBEDDABLE_CHARTS)?(0,s.tZ)(h.v.Item,{key:U},(0,s.tZ)(p.Z,{triggerNode:(0,s.tZ)("span",null,(0,d.t)("Embed code")),modalTitle:(0,d.t)("Embed code"),modalBody:(0,s.tZ)(k,{formData:e,addDangerToast:T}),maxWidth:100*w.gridUnit+"px",destroyOnClose:!0,responsive:!0})):null),(0,s.tZ)(h.v.Divider,null),I?(0,s.tZ)(l.Fragment,null,(0,s.tZ)(h.v.SubMenu,{title:(0,d.t)("Manage email report")},(0,s.tZ)(y.Z,{chart:Q,setShowReportSubMenu:D,showReportSubMenu:I,setIsDropdownVisible:q,isDropdownVisible:M,useTextMenu:!0})),(0,s.tZ)(h.v.Divider,null)):(0,s.tZ)(h.v,null,(0,s.tZ)(y.Z,{chart:Q,setShowReportSubMenu:D,setIsDropdownVisible:q,isDropdownVisible:M,useTextMenu:!0})),(0,s.tZ)(h.v.Item,{key:P},(0,s.tZ)(p.Z,{triggerNode:(0,s.tZ)("span",null,(0,d.t)("View query")),modalTitle:(0,d.t)("View query"),modalBody:(0,s.tZ)(S.Z,{latestQueryFormData:e}),draggable:!0,resizable:!0,responsive:!0})),W&&(0,s.tZ)(h.v.Item,{key:B},(0,d.t)("Run in SQL Lab")))),[T,t,Q,C,ne,M,e,H,I,n,w.gridUnit]),M,q]}},15856:(e,t,n)=>{n.d(t,{j:()=>i}),n(67294);var a=n(11965),r=n(70163),l=n(58593);const i=e=>{let{title:t,color:n}=e;return(0,a.tZ)(l.u,{title:t,placement:"top"},(0,a.tZ)(r.Z.InfoCircleOutlined,{css:e=>a.iv`
        color: ${n||e.colors.text.label};
        margin-left: ${2*e.gridUnit}px;
        &.anticon {
          font-size: unset;
          .anticon {
            line-height: unset;
            vertical-align: unset;
          }
        }
      `}))}},41814:(e,t,n)=>{n.d(t,{p:()=>ie});var a=n(5872),r=n.n(a),l=n(41609),i=n.n(l),o=n(67294),s=n(55867),d=n(11965),c=n(32103),u=n(51995),h=n(11064),p=n(16355),m=n(69363),g=n(83862),v=n(16550),b=n(74069),f=n(35932),Z=n(28216),y=n(50232),S=n(88889),x=n(55786),C=n(99612),w=n(38703),T=n(27600);const _=function(e){let{value:t}=e;return(0,d.tZ)("span",null,t?T.Ly:T.gz)},k=function(){return(0,d.tZ)("span",{css:e=>d.iv`
        color: ${e.colors.grayscale.light1};
      `},T.Wq)};var I=n(42846),D=n(51115);const M=function(e){let{format:t=I.Z.DATABASE_DATETIME,value:n}=e;return n?(0,d.tZ)("span",null,(0,D.bt)(t).format(n)):(0,d.tZ)(k,null)};var $=n(94301),E=n(52256),F=n(93197),R=n(87183),O=n(4715),N=n(70163),A=n(99299);const L=function(e){const{headerTitle:t,groupTitle:n,groupOptions:a,value:r,onChange:l}=e,i=(0,u.Fg)(),[s,c]=(0,o.useState)(!1);return(0,d.tZ)("div",{css:d.iv`
        display: flex;
        align-items: center;
      `},(0,d.tZ)(A.Z,{trigger:"click",visible:s,content:(0,d.tZ)("div",null,(0,d.tZ)("div",{css:d.iv`
                font-weight: ${i.typography.weights.bold};
                margin-bottom: ${i.gridUnit}px;
              `},n),(0,d.tZ)(R.Y.Group,{value:r,onChange:e=>{l(e.target.value),c(!1)}},(0,d.tZ)(O.T,{direction:"vertical"},a.map((e=>(0,d.tZ)(R.Y,{key:e.value,value:e.value},e.label)))))),placement:"bottomLeft",arrowPointAtCenter:!0},(0,d.tZ)(N.Z.SettingOutlined,{iconSize:"m",iconColor:i.colors.grayscale.light1,css:d.iv`
            margin-top: 3px; // we need exactly 3px to align the icon
            margin-right: ${i.gridUnit}px;
          `,onClick:()=>c(!0)})),t)};var U=n(42190),z=n(53579),P=n(60331),B=n(72813),j=n(89555);function q(e){let{filters:t,setFilters:n,totalCount:a,loading:r,onReload:l}=e;const i=(0,u.Fg)(),c=(0,o.useMemo)((()=>Object.assign({},...t.map((e=>({[(0,B.GA)(e.col)?e.col.label:e.col]:e}))))),[t]),h=(0,o.useCallback)((e=>{const t={...c};delete t[e],n([...Object.values(t)])}),[c,n]),p=(0,o.useMemo)((()=>Object.entries(c).map((e=>{let[t,{val:n,formattedVal:a}]=e;return{colName:t,val:null!=a?a:n}})).sort(((e,t)=>e.colName.localeCompare(t.colName)))),[c]);return(0,d.tZ)("div",{css:d.iv`
        display: flex;
        justify-content: space-between;
        padding: ${i.gridUnit/2}px 0;
        margin-bottom: ${2*i.gridUnit}px;
      `},(0,d.tZ)("div",{css:d.iv`
          display: flex;
          flex-wrap: wrap;
          margin-bottom: -${4*i.gridUnit}px;
        `},p.map((e=>{let{colName:t,val:n}=e;return(0,d.tZ)(P.Z,{closable:!0,onClose:h.bind(null,t),key:t,css:d.iv`
              height: ${6*i.gridUnit}px;
              display: flex;
              align-items: center;
              padding: ${i.gridUnit/2}px ${2*i.gridUnit}px;
              margin-right: ${4*i.gridUnit}px;
              margin-bottom: ${4*i.gridUnit}px;
              line-height: 1.2;
            `},(0,d.tZ)("span",{css:d.iv`
                margin-right: ${i.gridUnit}px;
              `},t),(0,d.tZ)("strong",null,n))}))),(0,d.tZ)("div",{css:d.iv`
          display: flex;
          align-items: center;
          height: min-content;
        `},(0,d.tZ)(j.Z,{loading:r&&!a,rowcount:a}),(0,d.tZ)(N.Z.ReloadOutlined,{iconColor:i.colors.grayscale.light1,iconSize:"l","aria-label":(0,s.t)("Reload"),role:"button",onClick:l})))}var V,H=n(57557),K=n.n(H),Q=n(65946),W={name:"82a6rk",styles:"flex:1"};function Y(e){let{children:t}=e;const{ref:n,height:a}=(0,C.NB)();return(0,d.tZ)("div",{ref:n,css:W},o.cloneElement(t,{height:a}))}function G(e){let{formData:t,initialFilters:n}=e;const a=(0,u.Fg)(),[r,l]=(0,o.useState)(0),i=(0,o.useRef)(r),[c,h]=(0,o.useState)(n),[p,m]=(0,o.useState)(!1),[g,v]=(0,o.useState)(""),[b,f]=(0,o.useState)(new Map),[y,C]=(0,o.useState)({}),T=(0,Z.v9)((e=>e.common.conf.SAMPLES_ROW_LIMIT)),[I,D]=(0,o.useMemo)((()=>t.datasource.split("__")),[t.datasource]),{metadataBar:R,status:O}=(0,z.S)({datasetId:I}),N=(0,o.useMemo)((()=>{const e=b.get(r);return e?(i.current=r,e):b.get(i.current)}),[r,b]),A=(0,o.useMemo)((()=>(null==N?void 0:N.colNames.map(((e,t)=>({key:e,dataIndex:e,title:(null==N?void 0:N.colTypes[t])===S.Z.TEMPORAL?(0,d.tZ)(L,{headerTitle:e,groupTitle:(0,s.t)("Formatting"),groupOptions:[{label:(0,s.t)("Original value"),value:V.Original},{label:(0,s.t)("Formatted value"),value:V.Formatted}],value:y[e]===V.Original?V.Original:V.Formatted,onChange:t=>C((n=>({...n,[e]:t})))}):e,render:n=>!0===n||!1===n?(0,d.tZ)(_,{value:n}):null===n?(0,d.tZ)(k,null):(null==N?void 0:N.colTypes[t])===S.Z.TEMPORAL&&y[e]!==V.Original&&("number"==typeof n||n instanceof Date)?(0,d.tZ)(M,{value:n}):String(n),width:150}))))||[]),[null==N?void 0:N.colNames,null==N?void 0:N.colTypes,y]),P=(0,o.useMemo)((()=>(null==N?void 0:N.data.map(((e,t)=>null==N?void 0:N.colNames.reduce(((t,n)=>({...t,[n]:e[n]})),{key:t}))))||[]),[null==N?void 0:N.colNames,null==N?void 0:N.data]),B=(0,o.useCallback)((()=>{v(""),f(new Map),l(0)}),[]);(0,o.useEffect)((()=>{v(""),f(new Map),l(0)}),[c]),(0,o.useEffect)((()=>{if(b.has(r)&&[...b.keys()].at(-1)!==r){const e=new Map(b);e.delete(r),f(e.set(r,b.get(r)))}}),[r,b]),(0,o.useEffect)((()=>{if(!g&&!p&&!b.has(r)){var e;m(!0);const n=null!=(e=function(e,t){if(!e)return;const n=(0,Q.Z)(e),a=K()(n.extras,"having"),r=[...(0,x.Z)(n.filters),...(0,x.Z)(t).map((e=>K()(e,"formattedVal")))];return{granularity:n.granularity,time_range:n.time_range,filters:r,extras:a}}(t,c))?e:{},a=Math.ceil(T/50);(0,E.getDatasourceSamples)(D,I,!1,n,50,r+1).then((e=>{f(new Map([...[...b.entries()].slice(1-a),[r,{total:e.total_count,data:e.data,colNames:(0,x.Z)(e.colnames),colTypes:(0,x.Z)(e.coltypes)}]])),v("")})).catch((e=>{v(`${e.name}: ${e.message}`)})).finally((()=>{m(!1)}))}}),[T,I,D,c,t,p,r,g,b]);const j=!g&&!b.size||O===U.ni.LOADING;let H=null;if(g)H=(0,d.tZ)("pre",{css:d.iv`
          margin-top: ${4*a.gridUnit}px;
        `},g);else if(j)H=(0,d.tZ)(w.Z,null);else if(0===(null==N?void 0:N.total)){const e=(0,s.t)("No rows were returned for this dataset");H=(0,d.tZ)($.x3,{image:"document.svg",title:e})}else H=(0,d.tZ)(Y,null,(0,d.tZ)(F.ZP,{data:P,columns:A,size:F.ex.SMALL,defaultPageSize:50,recordCount:null==N?void 0:N.total,usePagination:!0,loading:p,onChange:e=>l(e.current?e.current-1:0),resizable:!0,virtualize:!0,allowHTML:!0}));return(0,d.tZ)(o.Fragment,null,!j&&R,!j&&(0,d.tZ)(q,{filters:c,setFilters:h,totalCount:null==N?void 0:N.total,loading:p,onReload:B}),H)}!function(e){e[e.Original=0]="Original",e[e.Formatted=1]="Formatted"}(V||(V={}));const X=e=>{let{exploreChart:t,closeModal:n}=e;return(0,d.tZ)(o.Fragment,null,(0,d.tZ)(f.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:t},(0,s.t)("Edit chart")),(0,d.tZ)(f.Z,{buttonStyle:"primary",buttonSize:"small",onClick:n},(0,s.t)("Close")))};function J(e){let{chartId:t,formData:n,initialFilters:a,showModal:r,onHideModal:l}=e;const i=(0,u.Fg)(),c=(0,v.k6)(),h=(0,o.useContext)(y.DashboardPageIdContext),{slice_name:p}=(0,Z.v9)((e=>e.sliceEntities.slices[t])),m=(0,o.useMemo)((()=>`/explore/?dashboard_page_id=${h}&slice_id=${t}`),[t,h]),g=(0,o.useCallback)((()=>{c.push(m)}),[m,c]);return(0,d.tZ)(b.Z,{show:r,onHide:null!=l?l:()=>null,css:d.iv`
        .ant-modal-body {
          display: flex;
          flex-direction: column;
        }
      `,title:(0,s.t)("Drill to detail: %s",p),footer:(0,d.tZ)(X,{exploreChart:g}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*i.gridUnit,minWidth:128*i.gridUnit,defaultSize:{width:"auto",height:"75vh"}},draggable:!0,destroyOnClose:!0,maskClosable:!1},(0,d.tZ)(G,{formData:n,initialFilters:a}))}var ee=n(69175),te=n(15856),ne=n(46219);const ae=(0,s.t)("Drill to detail by"),re=e=>{let{children:t,...n}=e;return(0,d.tZ)(g.v.Item,r()({disabled:!0},n),(0,d.tZ)("div",{css:d.iv`
        white-space: normal;
        max-width: 160px;
      `},t))},le=(0,u.iK)((e=>{let{children:t,stripHTML:n=!1}=e;const a=n&&"string"==typeof t?(0,c.ZU)(t):t;return(0,d.tZ)("span",null,a)}))`
  ${e=>{let{theme:t}=e;return`\n     font-weight: ${t.typography.weights.bold};\n     color: ${t.colors.primary.base};\n   `}}
`,ie=e=>{let{chartId:t,formData:n,filters:a=[],isContextMenu:l=!1,contextMenuY:c=0,onSelection:u=(()=>null),onClick:v=(()=>null),submenuIndex:b=0,...f}=e;const[Z,y]=(0,o.useState)([]),[S,x]=(0,o.useState)(!1),C=(0,o.useCallback)(((e,t)=>{v(t),u(),y(e),x(!0)}),[v,u]),w=(0,o.useCallback)((()=>{x(!1)}),[]),T=(0,o.useMemo)((()=>{var e;return null==(e=(0,h.Z)().get(n.viz_type))?void 0:e.behaviors.find((e=>e===p.cg.DRILL_TO_DETAIL))}),[n.viz_type]),_=(0,o.useMemo)((()=>{const{metrics:e}=(0,m.Z)(n);return i()(e)}),[n]);let k,I;k=T&&_?(0,d.tZ)(re,r()({},f,{key:"drill-detail-no-aggregations"}),(0,s.t)("Drill to detail"),(0,d.tZ)(te.j,{title:(0,s.t)("Drill to detail is disabled because this chart does not group data by dimension value.")})):(0,d.tZ)(g.v.Item,r()({},f,{key:"drill-detail-no-filters",onClick:C.bind(null,[])}),(0,s.t)("Drill to detail")),T||(I=(0,d.tZ)(re,r()({},f,{key:"drill-detail-by-chart-not-supported"}),ae,(0,d.tZ)(te.j,{title:(0,s.t)("Drill to detail by value is not yet supported for this chart type.")}))),T&&_&&(I=(0,d.tZ)(re,r()({},f,{key:"drill-detail-by-no-aggregations"}),ae));const D=(0,o.useMemo)((()=>(0,ee.th)(c,a.length>1?a.length+1:a.length,b)),[c,a.length,b]);return T&&!_&&null!=a&&a.length&&(I=(0,d.tZ)(g.v.SubMenu,r()({},f,{popupOffset:[0,D],popupClassName:"chart-context-submenu",title:ae}),(0,d.tZ)("div",null,a.map(((e,t)=>(0,d.tZ)(ne.i,r()({},f,{tooltipText:`${ae} ${e.formattedVal}`,key:`drill-detail-filter-${t}`,onClick:C.bind(null,[e])}),`${ae} `,(0,d.tZ)(le,{stripHTML:!0},e.formattedVal)))),a.length>1&&(0,d.tZ)(g.v.Item,r()({},f,{key:"drill-detail-filter-all",onClick:C.bind(null,a)}),(0,d.tZ)("div",null,`${ae} `,(0,d.tZ)(le,{stripHTML:!1},(0,s.t)("all"))))))),!T||_||null!=a&&a.length||(I=(0,d.tZ)(re,r()({},f,{key:"drill-detail-by-select-aggregation"}),ae,(0,d.tZ)(te.j,{title:(0,s.t)("Right-click on a dimension value to drill to detail by that value.")}))),(0,d.tZ)(o.Fragment,null,k,l&&I,(0,d.tZ)(J,{chartId:t,formData:n,initialFilters:Z,showModal:S,onHideModal:w}))}},46219:(e,t,n)=>{n.d(t,{i:()=>d});var a=n(5872),r=n.n(a),l=(n(67294),n(3297)),i=n(11965),o=n(83862),s=n(58593);const d=e=>{let{tooltipText:t,children:n,...a}=e;const[d,c]=(0,l.Z)();return(0,i.tZ)(o.v.Item,r()({css:i.iv`
        display: flex;
      `},a),(0,i.tZ)(s.u,{title:c?t:null},(0,i.tZ)("div",{ref:d,css:i.iv`
            max-width: 100%;
            ${l.B};
          `},n)))}},69175:(e,t,n)=>{n.d(t,{$t:()=>a,th:()=>r});const a=function(e,t,n,a){void 0===n&&(n=Number.MAX_SAFE_INTEGER),void 0===a&&(a=0);const r=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),l=Math.min(32*t,n)+32+a;return r-e<l?r-l:e},r=function(e,t,n,r,l){void 0===n&&(n=0),void 0===r&&(r=Number.MAX_SAFE_INTEGER),void 0===l&&(l=0);const i=e+4+32*n+4;return a(i,t,r,l)-i}},88694:(e,t,n)=>{n.d(t,{$i:()=>p,Lt:()=>h});var a=n(5872),r=n.n(a),l=(n(67294),n(4715)),i=n(51995),o=n(70163),s=n(11965);const d=i.iK.div`
  width: ${e=>{let{theme:t}=e;return.75*t.gridUnit}}px;
  height: ${e=>{let{theme:t}=e;return.75*t.gridUnit}}px;
  border-radius: 50%;
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};

  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.normal}};
  display: inline-flex;
  position: relative;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};

    &::before,
    &::after {
      background-color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: ' ';
    width: ${e=>{let{theme:t}=e;return.75*t.gridUnit}}px;
    height: ${e=>{let{theme:t}=e;return.75*t.gridUnit}}px;
    border-radius: 50%;
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }

  &::before {
    top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }

  &::after {
    bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,c=i.iK.div`
  display: flex;
  align-items: center;
  padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  padding-left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`;var u;!function(e){e.VERTICAL="vertical",e.HORIZONTAL="horizontal"}(u||(u={}));const h=e=>{let{overlay:t,iconOrientation:n=u.VERTICAL,...a}=e;return(0,s.tZ)(l.Gj,r()({overlay:t},a),(0,s.tZ)(c,null,function(e){return void 0===e&&(e=u.VERTICAL),e===u.HORIZONTAL?(0,s.tZ)(o.Z.MoreHoriz,{iconSize:"xl"}):(0,s.tZ)(d,null)}(n)))},p=e=>(0,s.tZ)(l.Gj,r()({overlayStyle:{zIndex:99,animationDuration:"0s"}},e))},32871:(e,t,n)=>{var a;n.d(t,{p:()=>a}),function(e){e.DASHBOARDS="dashboards",e.DESCRIPTION="description",e.LAST_MODIFIED="lastModified",e.OWNER="owner",e.ROWS="rows",e.SQL="sql",e.TABLE="table",e.TAGS="tags"}(a||(a={}))},67697:(e,t,n)=>{n.d(t,{pG:()=>S.p,ZP:()=>x});var a=n(87185),r=n.n(a),l=n(67294),i=n(99612),o=n(51995),s=n(58593),d=n(55786),c=n(55867),u=n(70163),h=n(11965);const p=o.iK.div`
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
`,m=e=>{let{text:t,header:n}=e;const a=(0,d.Z)(t);return(0,h.tZ)(l.Fragment,null,n&&(0,h.tZ)(p,null,n),a.map((e=>(0,h.tZ)("div",{key:e},e))))},g=16,v={dashboards:0,table:1,sql:2,rows:3,tags:4,description:5,owner:6,lastModified:7},b=o.iK.div`
  ${e=>{let{theme:t,count:n}=e;return`\n    display: flex;\n    align-items: center;\n    padding: 8px 12px;\n    background-color: ${t.colors.grayscale.light4};\n    color: ${t.colors.grayscale.base};\n    font-size: ${t.typography.sizes.s}px;\n    min-width: ${24+32*n-g}px;\n    border-radius: ${t.borderRadius}px;\n    line-height: 1;\n  `}}
`,f=o.iK.div`
  ${e=>{let{theme:t,collapsed:n,last:a,onClick:r}=e;return`\n    display: flex;\n    align-items: center;\n    max-width: ${174+(a?0:g)}px;\n    min-width: ${n?16+(a?0:g):94+(a?0:g)}px;\n    padding-right: ${a?0:g}px;\n    cursor: ${r?"pointer":"default"};\n    & .metadata-icon {\n      color: ${r&&n?t.colors.primary.base:t.colors.grayscale.base};\n      padding-right: ${n?0:8}px;\n      & .anticon {\n        line-height: 0;\n      }\n    }\n    & .metadata-text {\n      min-width: 70px;\n      overflow: hidden;\n      text-overflow: ${n?"unset":"ellipsis"};\n      white-space: nowrap;\n      text-decoration: ${r?"underline":"none"};\n    }\n  `}}
`,Z=o.iK.div`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,y=e=>{let{barWidth:t,contentType:n,collapsed:a,last:r=!1,tooltipPlacement:i}=e;const{icon:o,title:d,tooltip:p=d}=(e=>{const{type:t}=e;switch(t){case S.p.DASHBOARDS:return{icon:u.Z.FundProjectionScreenOutlined,title:e.title,tooltip:e.description?(0,h.tZ)("div",null,(0,h.tZ)(m,{header:e.title,text:e.description})):void 0};case S.p.DESCRIPTION:return{icon:u.Z.BookOutlined,title:e.value};case S.p.LAST_MODIFIED:return{icon:u.Z.EditOutlined,title:e.value,tooltip:(0,h.tZ)("div",null,(0,h.tZ)(m,{header:(0,c.t)("Last modified"),text:e.value}),(0,h.tZ)(m,{header:(0,c.t)("Modified by"),text:e.modifiedBy}))};case S.p.OWNER:return{icon:u.Z.UserOutlined,title:e.createdBy,tooltip:(0,h.tZ)("div",null,(0,h.tZ)(m,{header:(0,c.t)("Created by"),text:e.createdBy}),(0,h.tZ)(m,{header:(0,c.t)("Owners"),text:e.owners}),(0,h.tZ)(m,{header:(0,c.t)("Created on"),text:e.createdOn}))};case S.p.ROWS:return{icon:u.Z.InsertRowBelowOutlined,title:e.title,tooltip:e.title};case S.p.SQL:return{icon:u.Z.ConsoleSqlOutlined,title:e.title,tooltip:e.title};case S.p.TABLE:return{icon:u.Z.Table,title:e.title,tooltip:e.title};case S.p.TAGS:return{icon:u.Z.TagsOutlined,title:e.values.join(", "),tooltip:(0,h.tZ)("div",null,(0,h.tZ)(m,{header:(0,c.t)("Tags"),text:e.values}))};default:throw Error(`Invalid type provided: ${t}`)}})(n),[g,v]=(0,l.useState)(!1),b=(0,l.useRef)(null),y=o,{type:x,onClick:C}=n;(0,l.useEffect)((()=>{v(!!b.current&&b.current.scrollWidth>b.current.clientWidth)}),[t,v,n]);const w=(0,h.tZ)(f,{collapsed:a,last:r,onClick:C?()=>C(x):void 0},(0,h.tZ)(y,{iconSize:"l",className:"metadata-icon"}),!a&&(0,h.tZ)("span",{ref:b,className:"metadata-text"},d));return g||a||p&&p!==d?(0,h.tZ)(s.u,{placement:i,title:(0,h.tZ)(Z,null,p)},w):w};var S=n(32871);const x=e=>{let{items:t,tooltipPlacement:n="top"}=e;const[a,o]=(0,l.useState)(),[s,d]=(0,l.useState)(!1),c=r()(t,((e,t)=>e.type===t.type)).sort(((e,t)=>v[e.type]-v[t.type])),u=c.length;if(u<2)throw Error("The minimum number of items for the metadata bar is 2.");if(u>6)throw Error("The maximum number of items for the metadata bar is 6.");const p=(0,l.useCallback)((e=>{const t=110*u-g;o(e),d(Boolean(e&&e<t))}),[u]),{ref:m}=(0,i.NB)({onResize:p});return(0,h.tZ)(b,{ref:m,count:u},c.map(((e,t)=>(0,h.tZ)(y,{barWidth:a,key:t,contentType:e,collapsed:s,last:t===u-1,tooltipPlacement:n}))))}},52564:(e,t,n)=>{n.d(t,{u:()=>x});var a=n(5872),r=n.n(a),l=n(67294),i=n(11965),o=n(51995),s=n(55867),d=n(4715),c=n(58593),u=n(99612);const h=e=>i.iv`
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
  }
`,p=e=>{let{title:t,placeholder:n,onSave:a,canEdit:r,label:o}=e;const[d,p]=(0,l.useState)(!1),[m,g]=(0,l.useState)(t||""),v=(0,l.useRef)(null),[b,f]=(0,l.useState)(!1),{width:Z,ref:y}=(0,u.NB)(),{width:S,ref:x}=(0,u.NB)({refreshMode:"debounce"});(0,l.useEffect)((()=>{g(t)}),[t]),(0,l.useEffect)((()=>{if(d&&null!=v&&v.current&&(v.current.focus(),v.current.setSelectionRange)){const{length:e}=v.current.value;v.current.setSelectionRange(e,e),v.current.scrollLeft=v.current.scrollWidth}}),[d]),(0,l.useLayoutEffect)((()=>{null!=y&&y.current&&(y.current.innerHTML=(m||n).replace(/\s/g,"&nbsp;"))}),[m,n,y]),(0,l.useEffect)((()=>{v.current&&v.current.scrollWidth>v.current.clientWidth?f(!0):f(!1)}),[Z,S]);const C=(0,l.useCallback)((()=>{r&&!d&&p(!0)}),[r,d]),w=(0,l.useCallback)((()=>{if(!r)return;const e=m.trim();g(e),t!==e&&a(e),p(!1)}),[r,m,a,t]),T=(0,l.useCallback)((e=>{r&&d&&g(e.target.value)}),[r,d]),_=(0,l.useCallback)((e=>{var t;r&&"Enter"===e.key&&(e.preventDefault(),null==(t=v.current)||t.blur())}),[r]);return(0,i.tZ)("div",{css:h,ref:x},(0,i.tZ)(c.u,{id:"title-tooltip",title:b&&m&&!d?m:null},r?(0,i.tZ)("input",{className:"dynamic-title-input","aria-label":null!=o?o:(0,s.t)("Title"),ref:v,onChange:T,onBlur:w,onClick:C,onKeyPress:_,placeholder:n,value:m,css:i.iv`
              cursor: ${d?"text":"pointer"};

              ${Z&&Z>0&&i.iv`
                width: ${Z+1}px;
              `}
            `}):(0,i.tZ)("span",{className:"dynamic-title","aria-label":null!=o?o:(0,s.t)("Title"),ref:v},m)),(0,i.tZ)("span",{ref:y,className:"input-sizer","aria-hidden":!0,tabIndex:-1}))};var m=n(79789),g=n(36674),v=n(70163),b=n(35932);const f=e=>i.iv`
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
`,Z=e=>i.iv`
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
`,y=e=>i.iv`
  display: flex;
  align-items: center;
  padding-left: ${2*e.gridUnit}px;

  & .fave-unfave-icon {
    padding: 0 ${e.gridUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,S=e=>i.iv`
  margin-left: ${2*e.gridUnit}px;
`,x=e=>{let{editableTitleProps:t,showTitlePanelItems:n,certificatiedBadgeProps:a,showFaveStar:l,faveStarProps:c,titlePanelAdditionalItems:u,rightPanelAdditionalItems:h,additionalActionsMenu:x,menuDropdownProps:C,tooltipProps:w}=e;const T=(0,o.Fg)();return(0,i.tZ)("div",{css:Z,className:"header-with-actions"},(0,i.tZ)("div",{className:"title-panel"},(0,i.tZ)(p,t),n&&(0,i.tZ)("div",{css:y},(null==a?void 0:a.certifiedBy)&&(0,i.tZ)(m.Z,a),l&&(0,i.tZ)(g.Z,c),u)),(0,i.tZ)("div",{className:"right-button-panel"},h,(0,i.tZ)("div",{css:S},(0,i.tZ)(d.Gj,r()({trigger:["click"],overlay:x},C),(0,i.tZ)(b.Z,{css:f,buttonStyle:"tertiary","aria-label":(0,s.t)("Menu actions trigger"),tooltip:null==w?void 0:w.text,placement:null==w?void 0:w.placement},(0,i.tZ)(v.Z.MoreHoriz,{iconColor:T.colors.primary.dark2,iconSize:"l"}))))))}},7070:(e,t,n)=>{n.d(t,{x:()=>V,Z:()=>W});var a,r,l=n(11965),i=n(41609),o=n.n(i),s=n(67294),d=n(28216),c=n(75049),u=n(51995),h=n(93185),p=n(85716),m=n(55867),g=n(70163),v=n(73192),b=n(83862),f=n(87253),Z=n(54076),y=n(88694),S=n(17198),x=n(78580),C=n.n(x),w=n(98286),T=n(61358),_=n(29487),k=n(98978),I=n(87858),D=n(9875),M=n(14114);!function(e){e.DASHBOARDS="dashboards",e.CHARTS="charts"}(a||(a={})),function(e){e.TEXT="TEXT",e.PNG="PNG",e.CSV="CSV"}(r||(r={}));var $=n(34858),E=n(20095),F=n(67852);const R=["pivot_table_v2","table","paired_ttest"],O={crontab:"0 12 * * 1"},N={},A=(0,M.ZP)((function(e){var t;let{onHide:n,show:a=!1,dashboardId:i,chart:o,userId:c,userEmail:u,creationMethod:h,dashboardName:p,chartName:v}=e;const b=null==o||null==(t=o.sliceFormData)?void 0:t.viz_type,f=!!o,Z=f&&b&&C()(R).call(R,b),y=Z?r.TEXT:r.PNG,S=p||v,x=(0,s.useMemo)((()=>({...O,name:S?(0,m.t)("Weekly Report for %s",S):(0,m.t)("Weekly Report")})),[S]),M=(0,s.useCallback)(((e,t)=>"reset"===t?x:{...e,...t}),[x]),[A,L]=(0,s.useReducer)(M,x),[U,z]=(0,s.useState)(),P=(0,d.I0)(),B=(0,d.v9)((e=>{const t=i?V.DASHBOARDS:V.CHARTS;return(0,$._l)(e,t,i||(null==o?void 0:o.id))||N})),j=B&&Object.keys(B).length;(0,s.useEffect)((()=>{L(j?B:"reset")}),[j,B]);const q=(0,l.tZ)(F.Mv,null,(0,l.tZ)(g.Z.Calendar,null),(0,l.tZ)("span",{className:"text"},j?(0,m.t)("Edit email report"):(0,m.t)("Schedule a new email report"))),H=(0,l.tZ)(s.Fragment,null,(0,l.tZ)(F.OD,{key:"back",onClick:n},(0,m.t)("Cancel")),(0,l.tZ)(F.OD,{key:"submit",buttonStyle:"primary",onClick:async()=>{const e={type:"Report",active:!0,force_screenshot:!1,custom_width:A.custom_width,creation_method:h,dashboard:i,chart:null==o?void 0:o.id,owners:[c],recipients:[{recipient_config_json:{target:u},type:"Email"}],name:A.name,description:A.description,crontab:A.crontab,report_format:A.report_format||y,timezone:A.timezone};L({isSubmitting:!0,error:void 0});try{j?await P((0,T.Me)(A.id,e)):await P((0,T.cq)(e)),n()}catch(e){const{error:t}=await(0,w.O$)(e);L({error:t})}L({isSubmitting:!1})},disabled:!A.name,loading:A.isSubmitting},j?(0,m.t)("Save"):(0,m.t)("Add"))),K=(0,l.tZ)(s.Fragment,null,(0,l.tZ)(F.aQ,null,(0,l.tZ)("h4",null,(0,m.t)("Message content"))),(0,l.tZ)("div",{className:"inline-container"},(0,l.tZ)(F.E5,{onChange:e=>{L({report_format:e.target.value})},value:A.report_format||y},Z&&(0,l.tZ)(F.Ks,{value:r.TEXT},(0,m.t)("Text embedded in email")),(0,l.tZ)(F.Ks,{value:r.PNG},(0,m.t)("Image (PNG) embedded in email")),(0,l.tZ)(F.Ks,{value:r.CSV},(0,m.t)("Formatted CSV attached in email"))))),Q=(0,l.tZ)(E.j5,null,(0,l.tZ)("div",{className:"control-label",css:F.yk},E.KL.CUSTOM_SCREENSHOT_WIDTH_TEXT),(0,l.tZ)("div",{className:"input-container"},(0,l.tZ)(D.II,{type:"number",name:"custom_width",value:(null==A?void 0:A.custom_width)||"",placeholder:E.KL.CUSTOM_SCREENSHOT_WIDTH_PLACEHOLDER_TEXT,onChange:e=>{L({custom_width:parseInt(e.target.value,10)||null})}})));return(0,l.tZ)(F.oA,{show:a,onHide:n,title:q,footer:H,width:"432",centered:!0},(0,l.tZ)(F.zV,null,(0,l.tZ)(I.Z,{id:"name",name:"name",value:A.name||"",placeholder:x.name,required:!0,validationMethods:{onChange:e=>{let{target:t}=e;return L({name:t.value})}},label:(0,m.t)("Report Name")}),(0,l.tZ)(I.Z,{id:"description",name:"description",value:(null==A?void 0:A.description)||"",validationMethods:{onChange:e=>{let{target:t}=e;L({description:t.value})}},label:(0,m.t)("Description"),placeholder:(0,m.t)("Include a description that will be sent with your report"),css:F.gt})),(0,l.tZ)(F.nn,null,(0,l.tZ)(F.oo,null,(0,l.tZ)("h4",{css:e=>(0,F.kq)(e)},(0,m.t)("Schedule")),(0,l.tZ)("p",null,(0,m.t)("A screenshot of the dashboard will be sent to your email at"))),(0,l.tZ)(F.xZ,{clearButton:!1,value:A.crontab||"0 12 * * 1",setValue:e=>{L({crontab:e})},onError:z}),(0,l.tZ)(F.G,null,U),(0,l.tZ)("div",{className:"control-label",css:e=>(0,F.Su)(e)},(0,m.t)("Timezone")),(0,l.tZ)(k.Z,{timezone:A.timezone,onTimezoneChange:e=>{L({timezone:e})}}),f&&K,(!f||!Z)&&Q),A.error&&(0,l.tZ)(_.Z,{type:"error",css:e=>(0,F.gH)(e),message:j?(0,m.t)("Failed to update report"):(0,m.t)("Failed to create report"),description:A.error}))}));var L=n(96022);const U=(0,c.I)(),z=e=>l.iv`
  color: ${e.colors.error.base};
`,P=e=>l.iv`
  & .ant-menu-item {
    padding: 5px 12px;
    margin-top: 0px;
    margin-bottom: 4px;
    :hover {
      color: ${e.colors.grayscale.dark1};
    }
  }
  :hover {
    background-color: ${e.colors.secondary.light5};
  }
`,B=e=>l.iv`
  &:hover {
    color: ${e.colors.grayscale.dark1};
    background-color: ${e.colors.secondary.light5};
  }
`,j=u.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > *:first-child {
    margin-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,q=U.get("report-modal.dropdown.item.icon");var V;!function(e){e.CHARTS="charts",e.DASHBOARDS="dashboards"}(V||(V={}));const H={};var K={name:"1e1ncky",styles:"border:none"},Q={name:"833hqy",styles:"width:200px"};function W(e){let{dashboardId:t,chart:n,useTextMenu:a=!1,setShowReportSubMenu:r,setIsDropdownVisible:i,isDropdownVisible:c}=e;const x=(0,d.I0)(),C=(0,d.v9)((e=>{const a=t?V.DASHBOARDS:V.CHARTS;return(0,$._l)(e,a,t||(null==n?void 0:n.id))||H})),w=(null==C?void 0:C.active)||!1,_=(0,d.v9)((e=>e.user)),k=()=>!!(0,h.cr)(h.TT.ALERT_REPORTS)&&(!(null==_||!_.userId)&&(!!(t||null!=n&&n.id)&&Object.keys(_.roles||[]).map((e=>_.roles[e].filter((e=>"menu_access"===e[0]&&"Manage"===e[1])))).some((e=>e.length>0)))),[I,D]=(0,s.useState)(null),M=(0,u.Fg)(),E=(0,p.D)(t),[F,R]=(0,s.useState)(!1),O=async(e,t)=>{null!=e&&e.id&&x((0,T.M)(e,t))},N=k()&&!!(t&&E!==t||null!=n&&n.id);(0,s.useEffect)((()=>{N&&x((0,T.Aw)({userId:_.userId,filterField:t?"dashboard_id":"chart_id",creationMethod:t?"dashboards":"charts",resourceId:t||(null==n?void 0:n.id)}))}),[]);const U=C&&r&&k();(0,s.useEffect)((()=>{U?r(!0):!C&&r&&r(!1)}),[C]);const W=()=>{i&&(i(!1),R(!0))};return(0,l.tZ)(s.Fragment,null,k()&&(0,l.tZ)(s.Fragment,null,(0,l.tZ)(A,{userId:_.userId,show:F,onHide:()=>R(!1),userEmail:_.email,dashboardId:t,chart:n,creationMethod:t?V.DASHBOARDS:V.CHARTS}),a?o()(C)?(0,l.tZ)(b.v,{selectable:!1,css:P},(0,l.tZ)(b.v.Item,{onClick:W},q?(0,l.tZ)(j,null,(0,l.tZ)("div",null,(0,m.t)("Set up an email report")),(0,l.tZ)(q,null)):(0,m.t)("Set up an email report")),(0,l.tZ)(b.v.Divider,null)):c&&(0,l.tZ)(b.v,{selectable:!1,css:K},(0,l.tZ)(b.v.Item,{css:B,onClick:()=>O(C,!w)},(0,l.tZ)(L.ZN,null,(0,l.tZ)(f.ZP,{checked:w,onChange:Z.EI}),(0,m.t)("Email reports active"))),(0,l.tZ)(b.v.Item,{css:B,onClick:W},(0,m.t)("Edit email report")),(0,l.tZ)(b.v.Item,{css:B,onClick:()=>{i&&(i(!1),D(C))}},(0,m.t)("Delete email report"))):o()(C)?(0,l.tZ)("span",{role:"button",title:(0,m.t)("Schedule email report"),tabIndex:0,className:"action-button action-schedule-report",onClick:()=>R(!0)},(0,l.tZ)(g.Z.Calendar,null)):(0,l.tZ)(s.Fragment,null,(0,l.tZ)(y.$i,{overlay:(0,l.tZ)(b.v,{selectable:!1,css:Q},(0,l.tZ)(b.v.Item,null,(0,m.t)("Email reports active"),(0,l.tZ)(v.r,{checked:w,onClick:e=>O(C,e),size:"small",css:(0,l.iv)({marginLeft:2*M.gridUnit},"","")})),(0,l.tZ)(b.v.Item,{onClick:()=>R(!0)},(0,m.t)("Edit email report")),(0,l.tZ)(b.v.Item,{onClick:()=>D(C),css:z},(0,m.t)("Delete email report"))),trigger:["click"],getPopupContainer:e=>e.closest(".action-button")},(0,l.tZ)("span",{role:"button",className:"action-button action-schedule-report",tabIndex:0},(0,l.tZ)(g.Z.Calendar,null)))),I&&(0,l.tZ)(S.Z,{description:(0,m.t)("This action will permanently delete %s.",null==I?void 0:I.name),onConfirm:()=>{I&&(async e=>{await x((0,T.MZ)(e)),D(null)})(I)},onHide:()=>D(null),open:!0,title:(0,m.t)("Delete Report?")})))}},87915:(e,t,n)=>{n.d(t,{U:()=>a,g:()=>r});const a=(e,t)=>Object.values(e).filter((e=>e[t])).reduce(((e,n)=>({...e,[n.id]:t?n[t]:n})),{}),r=e=>{let{chartConfiguration:t,nativeFilters:n,dataMask:a,allSliceIds:r}=e;const l={};return Object.values(a).forEach((e=>{var a,i,o,s,d,c;let{id:u,extraFormData:h}=e;const p=null!=(a=null!=(i=null!=(o=null==n||null==(s=n[u])?void 0:s.chartsInScope)?o:null==t||null==(d=t[u])||null==(c=d.crossFilters)?void 0:c.chartsInScope)?i:r)?a:[];l[u]={scope:p,values:h}})),l}},91914:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(78580),r=n.n(a),l=n(1510),i=n(99543);function o(e){return Object.entries(e).map((e=>{let[t,n]=e;return{col:t,op:Array.isArray(n)?"IN":"==",val:n}})).filter((e=>null!==e.val))}var s=n(87915);const d={},c={};function u(e){let{chart:t,filters:n,nativeFilters:a,chartConfiguration:u,colorScheme:h,colorNamespace:p,sliceId:m,dataMask:g,extraControls:v,labelColors:b,sharedLabelColors:f,allSliceIds:Z}=e;const y=c[m];if(d[m]===n&&(0,i.JB)(null==y?void 0:y.color_scheme,h,{ignoreUndefined:!0})&&(0,i.JB)(null==y?void 0:y.color_namespace,p,{ignoreUndefined:!0})&&(0,i.JB)(null==y?void 0:y.label_colors,b,{ignoreUndefined:!0})&&(0,i.JB)(null==y?void 0:y.shared_label_colors,f,{ignoreUndefined:!0})&&y&&(0,i.JB)(null==y?void 0:y.dataMask,g,{ignoreUndefined:!0})&&(0,i.JB)(null==y?void 0:y.extraControls,v,{ignoreUndefined:!0}))return y;let S={};const x=(0,s.g)({chartConfiguration:u,dataMask:g,nativeFilters:a,allSliceIds:Z}),C=Object.entries(x).filter((e=>{let[,{scope:n}]=e;return r()(n).call(n,t.id)})).map((e=>{let[t]=e;return t}));C.length&&(S={extra_form_data:(0,l.vk)(g,C)});const w={...t.form_data,label_colors:b,shared_label_colors:f,...h&&{color_scheme:h},extra_filters:o(n),...S,...v};return d[m]=n,c[m]={...w,dataMask:g,extraControls:v},w}},66124:(e,t,n)=>{n.d(t,{X:()=>m,c:()=>g});var a=n(4788),r=n.n(a),l=n(78580),i=n.n(l),o=n(67294),s=n(51995),d=n(88889),c=n(11965),u=n(50909),h=n(54076),p=n(61587);const m=s.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: ${2*t.gridUnit}px;\n\n    span {\n      flex-shrink: 0;\n    }\n  `}}
`,g=e=>{let{data:t,datasourceId:n,onInputChange:a,columnNames:l,columnTypes:s,isLoading:g}=e;const v=(0,p.W)(n),b=r()(l,s).filter((e=>{let[t,n]=e;return n===d.Z.TEMPORAL&&t&&!i()(v).call(v,t)})).map((e=>{let[t]=e;return t})),f=(0,o.useMemo)((()=>(0,h.cD)(t,b)),[t,b]);return(0,c.tZ)(m,null,(0,c.tZ)(u.HS,{onChangeHandler:a}),(0,c.tZ)("div",{css:c.iv`
          display: flex;
          align-items: center;
        `},(0,c.tZ)(u.uy,{data:t,loading:g}),(0,c.tZ)(u.m,{data:f,columns:l})))}},5462:(e,t,n)=>{n.d(t,{T:()=>d});var a=n(67294),r=n(55867),l=n(76962),i=n(50909),o=n(66124),s=n(11965);const d=e=>{let{data:t,colnames:n,coltypes:d,datasourceId:c,dataSize:u=50,isVisible:h}=e;const[p,m]=(0,a.useState)(""),g=(0,i._q)(n,d,t,c,h,{},!0),v=(0,i.C4)(p,t);return(0,s.tZ)(a.Fragment,null,(0,s.tZ)(o.c,{data:v,columnNames:n,columnTypes:d,datasourceId:c,onInputChange:e=>m(e),isLoading:!1}),(0,s.tZ)(l.Z,{columns:g,data:v,pageSize:u,noDataText:(0,r.t)("No results"),emptyWrapperType:l.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0}))}},21496:(e,t,n)=>{n.d(t,{c9:()=>$,Tg:()=>w});var a,r=n(67294),l=n(51995),i=n(93185),o=n(55867),s=n(70163),d=n(71262),c=n(61337);!function(e){e.Results="results",e.Samples="samples"}(a||(a={}));var u=n(11064),h=n(55786),p=n(38703),m=n(94301),g=n(52256),v=n(98286),b=n(5462),f=n(66124),Z=n(11965);const y=l.iK.pre`
  margin-top: ${e=>{let{theme:t}=e;return 4*t.gridUnit+"px"}};
`,S=new WeakMap,x=e=>{var t;let{isRequest:n,queryFormData:a,queryForce:l,ownState:i,errorMessage:s,actions:d,isVisible:c,dataSize:x=50}=e;const C=(0,u.Z)().get((null==a?void 0:a.viz_type)||(null==a?void 0:a.vizType)),[w,T]=(0,r.useState)([]),[_,k]=(0,r.useState)(!0),[I,D]=(0,r.useState)(""),M=null!=(t=null==C?void 0:C.queryObjectCount)?t:1;if((0,r.useEffect)((()=>{s||(n&&S.has(a)&&(T((0,h.Z)(S.get(a))),D(""),l&&d&&d.setForceQuery(!1),k(!1)),n&&!S.has(a)&&(k(!0),(0,g.getChartDataRequest)({formData:a,force:l,resultFormat:"json",resultType:"results",ownState:i}).then((e=>{let{json:t}=e;T((0,h.Z)(t.result)),D(""),S.set(a,t.result),l&&d&&d.setForceQuery(!1)})).catch((e=>{(0,v.O$)(e).then((e=>{let{error:t,message:n}=e;D(t||n||(0,o.t)("Sorry, an error occurred"))}))})).finally((()=>{k(!1)}))))}),[a,n]),(0,r.useEffect)((()=>{s&&k(!1)}),[s]),_)return Array(M).fill((0,Z.tZ)(p.Z,null));if(s){const e=(0,o.t)("Run a query to display results");return Array(M).fill((0,Z.tZ)(m.x3,{image:"document.svg",title:e}))}if(I){const e=(0,Z.tZ)(r.Fragment,null,(0,Z.tZ)(f.c,{data:[],columnNames:[],columnTypes:[],datasourceId:a.datasource,onInputChange:()=>{},isLoading:!1}),(0,Z.tZ)(y,null,I));return Array(M).fill(e)}if(0===w.length){const e=(0,o.t)("No results were returned for this query");return Array(M).fill((0,Z.tZ)(m.x3,{image:"document.svg",title:e}))}return w.slice(0,M).map(((e,t)=>(0,Z.tZ)(b.T,{data:e.data,colnames:e.colnames,coltypes:e.coltypes,dataSize:x,datasourceId:a.datasource,key:t,isVisible:c})))},C=l.iK.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .ant-tabs {
    height: 100%;
  }

  .ant-tabs-content {
    height: 100%;
  }

  .ant-tabs-tabpane {
    display: flex;
    flex-direction: column;
  }

  .table-condensed {
    overflow: auto;
  }
`,w=e=>{let{isRequest:t,queryFormData:n,queryForce:r,ownState:l,errorMessage:i,actions:s,isVisible:c,dataSize:u=50}=e;const h=x({errorMessage:i,queryFormData:n,queryForce:r,ownState:l,isRequest:t,actions:s,dataSize:u,isVisible:c});if(1===h.length)return(0,Z.tZ)(C,null,h[0]);const p=h.map(((e,t)=>0===t?(0,Z.tZ)(d.ZP.TabPane,{tab:(0,o.t)("Results"),key:a.Results},e):(0,Z.tZ)(d.ZP.TabPane,{tab:(0,o.t)("Results %s",t+1),key:`${a.Results} ${t+1}`},e)));return(0,Z.tZ)(C,null,(0,Z.tZ)(d.ZP,{fullWidth:!1},p))};var T=n(76962),_=n(50909);const k=l.iK.pre`
  margin-top: ${e=>{let{theme:t}=e;return 4*t.gridUnit+"px"}};
`,I=new WeakSet,D=e=>{let{isRequest:t,datasource:n,queryForce:a,actions:l,dataSize:i=50,isVisible:s}=e;const[d,c]=(0,r.useState)(""),[u,v]=(0,r.useState)([]),[b,y]=(0,r.useState)([]),[S,x]=(0,r.useState)([]),[C,w]=(0,r.useState)(!1),[D,M]=(0,r.useState)(""),$=(0,r.useMemo)((()=>`${n.id}__${n.type}`),[n]);(0,r.useEffect)((()=>{t&&a&&I.delete(n),t&&!I.has(n)&&(w(!0),(0,g.getDatasourceSamples)(n.type,n.id,a,{}).then((e=>{v((0,h.Z)(e.data)),y((0,h.Z)(e.colnames)),x((0,h.Z)(e.coltypes)),M(""),I.add(n),a&&l&&l.setForceQuery(!1)})).catch((e=>{v([]),y([]),x([]),M(`${e.name}: ${e.message}`)})).finally((()=>{w(!1)})))}),[n,t,a]);const E=(0,_._q)(b,S,u,$,s,{},!0),F=(0,_.C4)(d,u);if(C)return(0,Z.tZ)(p.Z,null);if(D)return(0,Z.tZ)(r.Fragment,null,(0,Z.tZ)(f.c,{data:F,columnNames:b,columnTypes:S,datasourceId:$,onInputChange:e=>c(e),isLoading:C}),(0,Z.tZ)(k,null,D));if(0===u.length){const e=(0,o.t)("No samples were returned for this dataset");return(0,Z.tZ)(m.x3,{image:"document.svg",title:e})}return(0,Z.tZ)(r.Fragment,null,(0,Z.tZ)(f.c,{data:F,columnNames:b,columnTypes:S,datasourceId:$,onInputChange:e=>c(e),isLoading:C}),(0,Z.tZ)(T.Z,{columns:E,data:F,pageSize:i,noDataText:(0,o.t)("No results"),emptyWrapperType:T.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0}))},M=l.iK.div`
  ${e=>{let{theme:t}=e;return`\n    position: relative;\n    background-color: ${t.colors.grayscale.light5};\n    z-index: 5;\n    overflow: hidden;\n\n    .ant-tabs {\n      height: 100%;\n    }\n\n    .ant-tabs-content-holder {\n      height: 100%;\n    }\n\n    .ant-tabs-content {\n      height: 100%;\n    }\n\n    .ant-tabs-tabpane {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n\n      .table-condensed {\n        height: 100%;\n        overflow: auto;\n        margin-bottom: ${4*t.gridUnit}px;\n\n        .table {\n          margin-bottom: ${2*t.gridUnit}px;\n        }\n      }\n\n      .pagination-container > ul[role='navigation'] {\n        margin-top: 0;\n      }\n    }\n  `}}
`,$=e=>{let{queryFormData:t,datasource:n,queryForce:u,onCollapseChange:h,chartStatus:p,ownState:m,errorMessage:g,actions:v}=e;const b=(0,l.Fg)(),[y,S]=(0,r.useState)(a.Results),[C,w]=(0,r.useState)({results:!1,samples:!1}),[T,_]=(0,r.useState)(!(0,i.cr)(i.TT.DATAPANEL_CLOSED_BY_DEFAULT)&&(0,c.rV)(c.dR.is_datapanel_open,!1));(0,r.useEffect)((()=>{(0,i.cr)(i.TT.DATAPANEL_CLOSED_BY_DEFAULT)||(0,c.LS)(c.dR.is_datapanel_open,T)}),[T]),(0,r.useEffect)((()=>{T||w({results:!1,samples:!1}),T&&y.startsWith(a.Results)&&"rendered"===p&&w({results:!0,samples:!1}),T&&y===a.Samples&&w({results:!1,samples:!0})}),[T,y,p]);const k=(0,r.useCallback)((e=>{h(e),_(e)}),[h]),I=(0,r.useCallback)(((e,t)=>{T?e===y&&(t.preventDefault(),k(!1)):k(!0),S(e)}),[y,k,T]),$=(0,r.useMemo)((()=>{const e=T?(0,Z.tZ)(s.Z.CaretUp,{iconColor:b.colors.grayscale.base,"aria-label":(0,o.t)("Collapse data panel")}):(0,Z.tZ)(s.Z.CaretDown,{iconColor:b.colors.grayscale.base,"aria-label":(0,o.t)("Expand data panel")});return(0,Z.tZ)(f.X,null,T?(0,Z.tZ)("span",{role:"button",tabIndex:0,onClick:()=>k(!1)},e):(0,Z.tZ)("span",{role:"button",tabIndex:0,onClick:()=>k(!0)},e))}),[k,T,b.colors.grayscale.base]),E=x({errorMessage:g,queryFormData:t,queryForce:u,ownState:m,isRequest:C.results,actions:v,isVisible:a.Results===y}).map(((e,t)=>0===t?(0,Z.tZ)(d.ZP.TabPane,{tab:(0,o.t)("Results"),key:a.Results},e):t>0?(0,Z.tZ)(d.ZP.TabPane,{tab:(0,o.t)("Results %s",t+1),key:`${a.Results} ${t+1}`},e):null));return(0,Z.tZ)(M,null,(0,Z.tZ)(d.ZP,{fullWidth:!1,tabBarExtraContent:$,activeKey:T?y:"",onTabClick:I},E,(0,Z.tZ)(d.ZP.TabPane,{tab:(0,o.t)("Samples"),key:a.Samples},(0,Z.tZ)(D,{datasource:n,queryForce:u,isRequest:C.samples,actions:v,isVisible:a.Samples===y}))))}},15423:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),r=n(51995),l=n(55786),i=n(55867),o=n(38703),s=n(98286),d=n(52256),c=n(85626),u=n(11965);const h=r.iK.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,p=e=>{const[t,n]=(0,a.useState)([]),[r,p]=(0,a.useState)(!1),[m,g]=(0,a.useState)(null);return(0,a.useEffect)((()=>{p(!0),(0,d.getChartDataRequest)({formData:e.latestQueryFormData,resultFormat:"json",resultType:"query"}).then((e=>{let{json:t}=e;n((0,l.Z)(t.result)),p(!1),g(null)})).catch((e=>{(0,s.O$)(e).then((t=>{let{error:n,message:a}=t;g(n||a||e.statusText||(0,i.t)("Sorry, An error occurred")),p(!1)}))}))}),[JSON.stringify(e.latestQueryFormData)]),r?(0,u.tZ)(o.Z,null):m?(0,u.tZ)("pre",null,m):(0,u.tZ)(h,null,t.map((e=>e.query?(0,u.tZ)(c.Z,{sql:e.query,language:e.language||void 0}):null)))}},53579:(e,t,n)=>{n.d(t,{S:()=>h});var a=n(67294),r=n(51995),l=n(55867),i=n(11965),o=n(29487),s=n(67697),d=n(32871),c=n(42190),u=n(6412);const h=e=>{let{dataset:t,datasetId:n}=e;const h=(0,r.Fg)(),[p,m]=(0,a.useState)(),[g,v]=(0,a.useState)(t?c.ni.COMPLETE:c.ni.LOADING);return(0,a.useEffect)((()=>{!t&&n&&(0,u.e)({endpoint:`/api/v1/dataset/${n}`}).then((e=>{let{json:{result:t}}=e;m(t),v(c.ni.COMPLETE)})).catch((()=>{v(c.ni.ERROR)}))}),[n,t]),{metadataBar:(0,a.useMemo)((()=>{const e=[],n=t||p;if(n){var a,r;const{changed_on_humanized:t,created_on_humanized:i,description:o,table_name:s,changed_by:c,created_by:u,owners:h}=n,p=(0,l.t)("Not available"),m=`${null!=(a=null==u?void 0:u.first_name)?a:""} ${null!=(r=null==u?void 0:u.last_name)?r:""}`.trim()||p,g=c?`${c.first_name} ${c.last_name}`:p,v=(null==h?void 0:h.length)>0?h.map((e=>`${e.first_name} ${e.last_name}`)):[p];e.push({type:d.p.TABLE,title:s}),e.push({type:d.p.LAST_MODIFIED,value:t,modifiedBy:g}),e.push({type:d.p.OWNER,createdBy:m,owners:v,createdOn:i}),o&&e.push({type:d.p.DESCRIPTION,value:o})}return(0,i.tZ)("div",{css:i.iv`
          display: flex;
          margin-bottom: ${4*h.gridUnit}px;
        `},g===c.ni.COMPLETE&&(0,i.tZ)(s.ZP,{items:e,tooltipPlacement:"bottom"}),g===c.ni.ERROR&&(0,i.tZ)(o.Z,{type:"error",message:(0,l.t)("There was an error loading the dataset metadata")}))}),[t,p,g,h.gridUnit]),status:g}}},6954:(e,t,n)=>{n.d(t,{z:()=>o});var a=n(67294),r=n(14670),l=n.n(r);const i=new(n(11133).g0)("tab_id_channel");function o(){const[e,t]=(0,a.useState)();return(0,a.useEffect)((()=>{if(!function(){try{return window.localStorage&&window.sessionStorage}catch(e){return!1}}())return void(e||t(l().generate()));const n=()=>{const e=window.localStorage.getItem("last_tab_id"),n=String(e?Number.parseInt(e,10)+1:1);window.sessionStorage.setItem("tab_id",n),window.localStorage.setItem("last_tab_id",n),t(n)},a=window.sessionStorage.getItem("tab_id");a?(i.postMessage({type:"REQUESTING_TAB_ID",tabId:a}),t(a)):n(),i.onmessage=t=>{if(t.tabId===e)if("REQUESTING_TAB_ID"===t.type){const e={type:"TAB_ID_DENIED",tabId:t.tabId};i.postMessage(e)}else"TAB_ID_DENIED"===t.type&&n()}}),[e]),e}},6412:(e,t,n)=>{n.d(t,{e:()=>i,f:()=>l});var a=n(31069),r=n(65108);const l=new Map,i=(0,r.g)(a.Z.get,l,(e=>{let{endpoint:t}=e;return t||""}))},56727:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(78580),r=n.n(a),l=n(46926),i=n.n(l),o=n(21804),s=n.n(o),d=n(55867),c=n(51995),u=n(72570);function h(e,t,n){return void 0===n&&(n=!1),a=>{const l=n?document.querySelector(e):a.currentTarget.closest(e);return l?i().toJpeg(l,{quality:.95,bgcolor:c.K6.colors.grayscale.light4,filter:e=>{var t;return"string"!=typeof e.className||"mapboxgl-control-container"!==e.className&&!r()(t=e.className).call(t,"ant-dropdown")}}).then((e=>{const n=document.createElement("a");n.download=`${function(e,t){return void 0===t&&(t=new Date),`${s()(e)}-${t.toISOString().replace(/[: ]/g,"-")}`}(t)}.jpg`,n.href=e,n.click()})).catch((e=>{console.error("Creating image failed",e)})):(0,u.Dz)((0,d.t)("Image download failed, please refresh and try again."))}}},75701:(e,t,n)=>{n.d(t,{J:()=>i});var a=n(55867);const r=(0,a.t)("Create chart"),l=(0,a.t)("Update chart"),i=e=>(0,a.t)("Select values in highlighted field(s) in the control panel. Then run the query by clicking on the %s button.",`"${e?r:l}"`)},71894:(e,t,n)=>{n.d(t,{b:()=>a});const a=()=>{var e,t;return null==(e=window)||null==(t=e.navigator)?void 0:t.webdriver}},99232:(e,t,n)=>{n.d(t,{f:()=>o});var a=n(72813),r=n(61641),l=n(69856),i=n(56565);const o=function(e,t){let n;var o;return void 0===t&&(t=r.P.WHERE),n=(0,a.GA)(e.col)?{expressionType:"SQL",clause:t,sqlExpression:(0,i.c)({expressionType:r.v.SIMPLE,subject:`(${e.col.sqlExpression})`,operator:e.op,comparator:"val"in e?e.val:void 0})}:{expressionType:"SIMPLE",clause:t,operator:e.op,operatorId:null==(o=Object.entries(l.LT).find((t=>t[1].operation===e.op)))?void 0:o[0],subject:e.col,comparator:"val"in e?e.val:void 0},e.isExtra&&Object.assign(n,{isExtra:!0,filterOptionName:`filter_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}),n}}}]);
//# sourceMappingURL=4c6cbb8ea327a3c12c30.chunk.js.map