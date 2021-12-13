"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9540],{40730:(e,t,n)=>{n.d(t,{Z:()=>Le});var a,r=n(28216),i=n(14890),o=n(52256),l=n(97381),s=n(5872),d=n.n(s),c=n(45697),u=n.n(c),p=n(67294),h=n(55867),m=n(51995),g=n(93185),v=n(68492),f=n(55786),b=n(91877),y=n(9531),Z=n(38703),x=n(94301),S=n(57902),C=n(3741),w=n(27600),T=n(23525),k=n(71894);!function(e){e.Explore="explore",e.Dashboard="dashboard"}(a||(a={}));var $,D=n(42190),_=n(50361),M=n.n(_),I=n(18446),F=n.n(I),E=n(42933),R=n.n(E),O=n(16355),A=n(11064),N=n(88274),U=n(11965),z=n(78580),P=n.n(z),L=n(90731),B=n(12617),j=n(83862),q=n(4715),V=n(74599),H=n(41814),K=n(69175),W=n(15856),G=n(70163),Q=n(9875),Y=n(14114),J=n(6412),X=n(37731),ee=n(73727),te=n(74069),ne=n(35932),ae=n(50232),re=n(40219),ie=n(99232),oe=n(53579),le=n(29487);function se(e){let{formData:t,result:n,dataset:a,onContextMenu:r,inContextMenu:i}=e;const o=(0,p.useMemo)((()=>({onContextMenu:r})),[r]);return(0,U.tZ)("div",{css:U.iv`
        width: 100%;
        height: 100%;
        min-height: 0;
      `},(0,U.tZ)(N.Z,{disableErrorBoundary:!0,chartType:t.viz_type,enableNoResults:!0,datasource:a,formData:t,queriesData:n,hooks:o,inContextMenu:i,height:"100%",width:"100%"}))}!function(e){e[e.Chart=0]="Chart",e[e.Table=1]="Table"}($||($={}));var de=n(87183),ce=n(54076);const ue=(0,m.iK)(q.O5.Item)`
  ${e=>{let{theme:t,isClickable:n}=e;return U.iv`
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
`;var pe=n(5462),he=n(71262);const me=m.iK.div`
  ${e=>{let{theme:t}=e;return U.iv`
    & .pagination-container {
      bottom: ${4*-t.gridUnit}px;
    }
  `}}
`,ge="adhoc_filters",ve=e=>{let{formData:t,closeModal:n}=e;const a=(0,r.I0)(),{addDangerToast:i}=(0,Y.e1)(),[o,s]=(0,p.useState)(""),d=(0,p.useContext)(ae.DashboardPageIdContext),c=(0,p.useCallback)((()=>{a((0,l.logEvent)(C.qL,{slice_id:t.slice_id}))}),[a,t.slice_id]),[u,m]=t.datasource.split("__");return(0,p.useEffect)((()=>{(0,re.nv)(Number(u),m,t,0).then((e=>{s(`/explore/?form_data_key=${e}&dashboard_page_id=${d}`)})).catch((()=>{i((0,h.t)("Failed to generate chart edit URL"))}))}),[i,d,u,m,t]),(0,U.tZ)(p.Fragment,null,(0,U.tZ)(ne.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:c,disabled:!o},(0,U.tZ)(ee.rU,{css:U.iv`
            &:hover {
              text-decoration: none;
            }
          `,to:o},(0,h.t)("Edit chart"))),(0,U.tZ)(ne.Z,{buttonStyle:"primary",buttonSize:"small",onClick:n},(0,h.t)("Close")))};function fe(e){let{column:t,dataset:n,drillByConfig:a,formData:i,onHideModal:s}=e;const d=(0,r.I0)(),c=(0,m.Fg)(),{addDangerToast:u}=(0,Y.e1)(),[g,v]=(0,p.useState)(!0),[b,y]=(0,p.useState)([{...a,column:t}]);(0,p.useEffect)((()=>{d((0,l.logEvent)(C.zf,{slice_id:i.slice_id}))}),[d,i.slice_id]);const{column:x,groupbyFieldName:S=a.groupbyFieldName}=b[b.length-1]||{},w=(0,p.useMemo)((()=>(0,f.Z)(i[S]).map((e=>{var t;return null==(t=n.columns)?void 0:t.find((t=>t.column_name===e))})).filter(X.Z)),[n.columns,i,S]),{displayModeToggle:T,drillByDisplayMode:k}=(()=>{const[e,t]=(0,p.useState)($.Chart);return{displayModeToggle:(0,p.useMemo)((()=>(0,U.tZ)("div",{css:e=>U.iv`
          margin-bottom: ${6*e.gridUnit}px;
          .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
            box-shadow: none;
          }
        `},(0,U.tZ)(de.Y.Group,{onChange:e=>{let{target:{value:n}}=e;t(n)},defaultValue:$.Chart},(0,U.tZ)(de.Y.Button,{value:$.Chart},(0,h.t)("Chart")),(0,U.tZ)(de.Y.Button,{value:$.Table},(0,h.t)("Table"))))),[]),drillByDisplayMode:e}})(),[D,_]=(0,p.useState)(),M=((e,t)=>(0,X.Z)(e)?1===e.length?(0,U.tZ)(me,null,(0,U.tZ)(pe.T,{colnames:e[0].colnames,coltypes:e[0].coltypes,data:e[0].data,dataSize:15,datasourceId:t,isVisible:!0})):(0,U.tZ)(he.ZP,{fullWidth:!1},e.map(((e,n)=>(0,U.tZ)(he.ZP.TabPane,{tab:(0,h.t)("Results %s",n+1),key:n},(0,U.tZ)(me,null,(0,U.tZ)(pe.T,{colnames:e.colnames,coltypes:e.coltypes,data:e.data,dataSize:15,datasourceId:t,isVisible:!0})))))):(0,U.tZ)("div",null))(D,i.datasource),[I,F]=(0,p.useState)(i),[E,R]=(0,p.useState)([...w,t].filter(X.Z)),[O,A]=(0,p.useState)([{groupby:w,filters:a.filters},{groupby:t||[]}]),N=(0,p.useCallback)((function(e,t){return void 0===t&&(t=S),Array.isArray(i[t])?[e.column_name]:e.column_name}),[i,S]),z=(0,p.useCallback)((e=>e.reduce(((e,t)=>{null!=t&&t.groupbyFieldName&&t.column&&(e.formData[t.groupbyFieldName]=N(t.column,t.groupbyFieldName),e.overridenGroupbyFields.add(t.groupbyFieldName));const n=(null==t?void 0:t.adhocFilterFieldName)||ge;return e.formData[n]=[...(0,f.Z)(e[n]),...(0,f.Z)(t.filters).map((e=>(0,ie.f)(e)))],e.overridenAdhocFilterFields.add(n),e}),{formData:{},overridenGroupbyFields:new Set,overridenAdhocFilterFields:new Set})),[N]),P=(0,p.useCallback)((()=>b.reduce(((e,t)=>{const n=t.adhocFilterFieldName||ge;return e[n]=[...e[n]||[],...t.filters.map((e=>(0,ie.f)(e)))],e}),{})),[b]),L=function(e,t){return void 0===t&&(t=ce.EI),(0,p.useMemo)((()=>{const n=t=>t<e.length-1;return(0,U.tZ)(q.O5,{css:e=>U.iv`
          margin: ${2*e.gridUnit}px 0 ${4*e.gridUnit}px;
        `},e.map(((e,a)=>(0,U.tZ)(ue,{key:a,isClickable:n(a),onClick:n(a)?()=>t(e,a):ce.EI},(e=>`${(0,f.Z)(e.groupby).map((e=>e.verbose_name||e.column_name)).join(", ")} ${e.filters?`(${e.filters.map((e=>e.formattedVal||e.val)).join(", ")})`:""}`)(e)))))}),[e,t])}(O,(0,p.useCallback)(((e,t)=>{d((0,l.logEvent)(C.TG,{slice_id:i.slice_id})),y((e=>e.slice(0,t))),A((e=>{const n=e.slice(0,t+1);return delete n[n.length-1].filters,n})),R((e=>e.slice(0,t))),F((()=>{if(0===t)return i;const{formData:e,overridenAdhocFilterFields:n}=z(b.slice(0,t)),a={...i,...e};return n.forEach((t=>({...a,[t]:[...i[t],...e[t]]}))),a}))}),[d,b,i,z])),B=(0,p.useMemo)((()=>{let e={...I};x&&S&&(e[S]=N(x));const t=P();return Object.keys(t).forEach((n=>{e={...e,[n]:[...(0,f.Z)(i[n]),...t[n]]}})),e.slice_id=0,delete e.slice_name,delete e.dashboards,e}),[I,x,S,P,N,i]);(0,p.useEffect)((()=>{R((e=>!x||e.some((e=>e.column_name===x.column_name))?e:[...e,x]))}),[x]);const j=(0,p.useCallback)(((e,t)=>{d((0,l.logEvent)(C.g3,{drill_depth:b.length+1,slice_id:i.slice_id})),F(B),y((n=>[...n,{...t,column:e}])),A((n=>{const a=[...n,{groupby:e}];return a[a.length-2].filters=t.filters,a}))}),[d,b.length,B,i.slice_id]),V=(0,p.useMemo)((()=>({drillBy:{excludedColumns:E,openNewModal:!1}})),[E]),{contextMenu:H,inContextMenu:K,onContextMenu:W}=((e,t,n,a,r)=>{const i=(0,p.useRef)(null),[o,l]=(0,p.useState)(!1),s=(0,p.useCallback)((function(){l(!1);for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null==n||n(...t)}),[n]),d=(0,p.useCallback)((()=>{l(!1)}),[]);return{contextMenu:(0,p.useMemo)((()=>(0,U.tZ)(Se,{ref:i,id:0,formData:t,onSelection:s,onClose:d,displayedItems:a,additionalConfig:r})),[r,0,a,t,d,s]),inContextMenu:o,onContextMenu:(e,t,n)=>{var a;null==(a=i.current)||a.open(e,t,n),l(!0)}}})(0,I,j,Ze.DrillBy,V),G=(0,r.v9)((e=>{const t=Object.values(e.dashboardLayout.present).find((e=>{var t;return(null==(t=e.meta)?void 0:t.chartId)===i.slice_id}));return(null==t?void 0:t.meta.sliceNameOverride)||(null==t?void 0:t.meta.sliceName)}));(0,p.useEffect)((()=>{B&&(v(!0),_(void 0),(0,o.getChartDataRequest)({formData:B}).then((e=>{let{json:t}=e;_(t.result)})).catch((()=>{u((0,h.t)("Failed to load chart data."))})).finally((()=>{v(!1)})))}),[u,B]);const{metadataBar:Q}=(0,oe.S)({dataset:n});return(0,U.tZ)(te.Z,{css:U.iv`
        .ant-modal-footer {
          border-top: none;
        }
      `,show:!0,onHide:null!=s?s:()=>null,title:(0,h.t)("Drill by: %s",G),footer:(0,U.tZ)(ve,{formData:B}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*c.gridUnit,minWidth:128*c.gridUnit,defaultSize:{width:"auto",height:"80vh"}},draggable:!0,destroyOnClose:!0,maskClosable:!1},(0,U.tZ)("div",{css:U.iv`
          display: flex;
          flex-direction: column;
          height: 100%;
        `},Q,L,T,g&&(0,U.tZ)(Z.Z,null),!g&&!D&&(0,U.tZ)(le.Z,{type:"error",message:(0,h.t)("There was an error loading the chart data")}),k===$.Chart&&D&&(0,U.tZ)(se,{dataset:n,formData:B,result:D,onContextMenu:W,inContextMenu:K}),k===$.Table&&D&&M,H))}var be=n(46219);const ye=e=>{let{drillByConfig:t,formData:n,contextMenuY:a=0,submenuIndex:r=0,onSelection:i=(()=>{}),onClick:o=(()=>{}),excludedColumns:l,openNewModal:s=!0,...c}=e;const u=(0,m.Fg)(),{addDangerToast:g}=(0,Y.e1)(),[v,b]=(0,p.useState)(!0),[y,x]=(0,p.useState)(""),[S,C]=(0,p.useState)(),[w,T]=(0,p.useState)([]),[k,$]=(0,p.useState)(!1),[D,_]=(0,p.useState)(),M=(0,p.useCallback)(((e,n)=>{o(e),i(n,t),_(n),s&&$(!0)}),[t,o,i,s]),I=(0,p.useCallback)((()=>{$(!1)}),[]);(0,p.useEffect)((()=>{x("")}),[w.length]);const F=(0,f.Z)(null==t?void 0:t.filters).length&&(null==t?void 0:t.groupbyFieldName),E=(0,p.useMemo)((()=>{var e;return null==(e=(0,A.Z)().get(n.viz_type))?void 0:e.behaviors.find((e=>e===O.cg.DRILL_BY))}),[n.viz_type]),R=(e=>{const t={};return(0,f.Z)(null==e?void 0:e.columns).forEach((e=>{t[e.column_name]=e.verbose_name||e.column_name})),(0,f.Z)(null==e?void 0:e.metrics).forEach((e=>{t[e.metric_name]=e.verbose_name||e.metric_name})),t})(S);(0,p.useEffect)((()=>{if(E&&F){const e=n.datasource.split("__")[0];(0,J.e)({endpoint:`/api/v1/dataset/${e}`}).then((e=>{let{json:{result:a}}=e;C(a),T((0,f.Z)(a.columns).filter((e=>e.groupby)).filter((e=>{var a,r,i;return!P()(a=(0,f.Z)(n[null!=(r=t.groupbyFieldName)?r:""])).call(a,e.column_name)&&e.column_name!==n.x_axis&&(null==(i=(0,f.Z)(l))?void 0:i.every((t=>t.column_name!==e.column_name)))})))})).catch((()=>{J.f.delete(`/api/v1/dataset/${e}`),g((0,h.t)("Failed to load dimensions for drill by"))})).finally((()=>{b(!1)}))}}),[g,l,n,null==t?void 0:t.groupbyFieldName,E,F]);const N=(0,p.useCallback)((e=>{var t;e.stopPropagation();const n=null==e||null==(t=e.target)?void 0:t.value;x(n)}),[]),z=(0,p.useMemo)((()=>w.filter((e=>{var t;return P()(t=(e.verbose_name||e.column_name).toLowerCase()).call(t,y.toLowerCase())}))),[w,y]),L=(0,p.useMemo)((()=>(0,K.th)(a,z.length||1,r,200,w.length>10?48:0)),[a,z.length,r,w.length]);let B;return E?F||(B=(0,h.t)("Drill by is not available for this data point")):B=(0,h.t)("Drill by is not yet supported for this chart type"),E&&F?(0,U.tZ)(p.Fragment,null,(0,U.tZ)(j.v.SubMenu,d()({title:(0,h.t)("Drill by"),key:"drill-by-submenu",popupClassName:"chart-context-submenu",popupOffset:[0,L]},c),(0,U.tZ)("div",null,w.length>10&&(0,U.tZ)(Q.II,{prefix:(0,U.tZ)(G.Z.Search,{iconSize:"l",iconColor:u.colors.grayscale.light1}),onChange:N,placeholder:(0,h.t)("Search columns"),value:y,onClick:e=>{e.nativeEvent.stopImmediatePropagation()},allowClear:!0,css:U.iv`
                width: auto;
                max-width: 100%;
                margin: ${2*u.gridUnit}px ${3*u.gridUnit}px;
                box-shadow: none;
              `}),v?(0,U.tZ)("div",{css:U.iv`
                padding: ${3*u.gridUnit}px 0;
              `},(0,U.tZ)(Z.Z,{position:"inline-centered"})):z.length?(0,U.tZ)("div",{css:U.iv`
                max-height: ${200}px;
                overflow: auto;
              `},z.map((e=>(0,U.tZ)(be.i,d()({key:`drill-by-item-${e.column_name}`,tooltipText:e.verbose_name||e.column_name},c,{onClick:t=>M(t,e)}),e.verbose_name||e.column_name)))):(0,U.tZ)(j.v.Item,d()({disabled:!0,key:"no-drill-by-columns-found"},c),(0,h.t)("No columns found")))),k&&(0,U.tZ)(fe,{column:D,drillByConfig:t,formData:n,onHideModal:I,dataset:{...S,verbose_map:R}})):(0,U.tZ)(j.v.Item,d()({key:"drill-by-disabled",disabled:!0},c),(0,U.tZ)("div",null,(0,h.t)("Drill by"),(0,U.tZ)(W.j,{title:B})))};var Ze;!function(e){e[e.CrossFilter=0]="CrossFilter",e[e.DrillToDetail=1]="DrillToDetail",e[e.DrillBy=2]="DrillBy",e[e.All=3]="All"}(Ze||(Ze={}));const xe=(e,t)=>{var n,a;let{id:i,formData:o,onSelection:l,onClose:s,displayedItems:c=Ze.All,additionalConfig:u}=e;const v=(0,m.Fg)(),b=(0,r.I0)(),y=(0,r.v9)((e=>{var t;return(0,B.R)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)})),Z=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.crossFiltersEnabled})),x=e=>{var t;return c===Ze.All||P()(t=(0,f.Z)(c)).call(t,e)},[{filters:S,clientX:C,clientY:w},T]=(0,p.useState)({clientX:0,clientY:0}),k=[],$=(0,g.c)(g.T.DRILL_TO_DETAIL)&&y&&x(Ze.DrillToDetail),D=(0,g.c)(g.T.DRILL_BY)&&y&&x(Ze.DrillBy),_=(0,g.c)(g.T.DASHBOARD_CROSS_FILTERS)&&x(Ze.CrossFilter),M=null==(n=(0,A.Z)().get(o.viz_type))||null==(a=n.behaviors)?void 0:P()(a).call(a,O.cg.INTERACTIVE_CHART);let I=0;if(_&&(I+=1),$&&(I+=2),D&&(I+=1),0===I&&(I=1),_){var F;const e=!M||!Z||!(null!=S&&S.crossFilter);let t=null;e?Z?M?null!=S&&S.crossFilter||(t=(0,U.tZ)(p.Fragment,null,(0,U.tZ)("div",null,(0,h.t)("You can't apply cross-filter on this data point.")))):t=(0,U.tZ)(p.Fragment,null,(0,U.tZ)("div",null,(0,h.t)("This visualization type does not support cross-filtering."))):t=(0,U.tZ)(p.Fragment,null,(0,U.tZ)("div",null,(0,h.t)("Cross-filtering is not enabled for this dashboard."))):t=(0,U.tZ)(p.Fragment,null,(0,U.tZ)("div",null,(0,h.t)("Cross-filter will be applied to all of the charts that use this dataset.")),(0,U.tZ)("div",null,(0,h.t)("You can also just click on the chart to apply cross-filter."))),k.push((0,U.tZ)(p.Fragment,null,(0,U.tZ)(j.v.Item,{key:"cross-filtering-menu-item",disabled:e,onClick:()=>{null!=S&&S.crossFilter&&b((0,V.eG)(i,S.crossFilter.dataMask))}},null!=S&&null!=(F=S.crossFilter)&&F.isCurrentValueSelected?(0,h.t)("Remove cross-filter"):(0,U.tZ)("div",null,(0,h.t)("Add cross-filter"),(0,U.tZ)(W.j,{title:t,color:e?void 0:v.colors.grayscale.base}))),I>1&&(0,U.tZ)(j.v.Divider,null)))}if($&&k.push((0,U.tZ)(H.p,d()({chartId:i,formData:o,filters:null==S?void 0:S.drillToDetail,isContextMenu:!0,contextMenuY:w,onSelection:l,submenuIndex:_?2:1},(null==u?void 0:u.drillToDetail)||{}))),D){let e=0;_&&(e+=1),$&&(e+=2),k.push((0,U.tZ)(ye,d()({drillByConfig:null==S?void 0:S.drillBy,onSelection:l,formData:o,contextMenuY:w,submenuIndex:e},(null==u?void 0:u.drillBy)||{})))}const E=(0,p.useCallback)(((e,t,n)=>{var a;const r=(0,K.$t)(t,I);T({clientX:e,clientY:r,filters:n}),null==(a=document.getElementById(`hidden-span-${i}`))||a.click()}),[i,I]);return(0,p.useImperativeHandle)(t,(()=>({open:E})),[E]),L.createPortal((0,U.tZ)(q.Gj,{overlay:(0,U.tZ)(j.v,{className:"chart-context-menu"},k.length?k:(0,U.tZ)(j.v.Item,{disabled:!0},"No actions")),trigger:["click"],onVisibleChange:e=>!e&&s()},(0,U.tZ)("span",{id:`hidden-span-${i}`,css:(0,U.iv)({visibility:"hidden",position:"fixed",top:w,left:C,width:1,height:1},"","")})),document.body)},Se=(0,p.forwardRef)(xe),Ce={annotationData:u().object,actions:u().object,chartId:u().number.isRequired,datasource:u().object,initialValues:u().object,formData:u().object.isRequired,latestQueryFormData:u().object,labelColors:u().object,sharedLabelColors:u().object,height:u().number,width:u().number,setControlValue:u().func,vizType:u().string.isRequired,triggerRender:u().bool,chartAlert:u().string,chartStatus:u().string,queriesResponse:u().arrayOf(u().object),triggerQuery:u().bool,chartIsStale:u().bool,addFilter:u().func,setDataMask:u().func,onFilterMenuOpen:u().func,onFilterMenuClose:u().func,ownState:u().object,postTransformProps:u().func,source:u().oneOf([a.Dashboard,a.Explore]),emitCrossFilters:u().bool},we={},Te=[O.cg.INTERACTIVE_CHART],ke={addFilter:()=>we,onFilterMenuOpen:()=>we,onFilterMenuClose:()=>we,initialValues:we,setControlValue(){},triggerRender:!1};class $e extends p.Component{constructor(e){super(e),this.state={showContextMenu:e.source===a.Dashboard&&((0,g.c)(g.T.DRILL_TO_DETAIL)||(0,g.c)(g.T.DASHBOARD_CROSS_FILTERS)),inContextMenu:!1},this.hasQueryResponseChange=!1,this.contextMenuRef=p.createRef(),this.handleAddFilter=this.handleAddFilter.bind(this),this.handleRenderSuccess=this.handleRenderSuccess.bind(this),this.handleRenderFailure=this.handleRenderFailure.bind(this),this.handleSetControlValue=this.handleSetControlValue.bind(this),this.handleOnContextMenu=this.handleOnContextMenu.bind(this),this.handleContextMenuSelected=this.handleContextMenuSelected.bind(this),this.handleContextMenuClosed=this.handleContextMenuClosed.bind(this),this.onContextMenuFallback=this.onContextMenuFallback.bind(this),this.hooks={onAddFilter:this.handleAddFilter,onContextMenu:this.state.showContextMenu?this.handleOnContextMenu:void 0,onError:this.handleRenderFailure,setControlValue:this.handleSetControlValue,onFilterMenuOpen:this.props.onFilterMenuOpen,onFilterMenuClose:this.props.onFilterMenuClose,setDataMask:e=>{var t;null==(t=this.props.actions)||t.updateDataMask(this.props.chartId,e)}},this.mutableQueriesResponse=M()(this.props.queriesResponse)}shouldComponentUpdate(e,t){var n,a;return!(!(e.queriesResponse&&["success","rendered"].indexOf(e.chartStatus)>-1)||null!=(n=e.queriesResponse)&&null!=(a=n[0])&&a.error)&&(!F()(this.state,t)||(this.hasQueryResponseChange=e.queriesResponse!==this.props.queriesResponse,this.hasQueryResponseChange&&(this.mutableQueriesResponse=M()(e.queriesResponse)),this.hasQueryResponseChange||!F()(e.datasource,this.props.datasource)||e.annotationData!==this.props.annotationData||e.ownState!==this.props.ownState||e.filterState!==this.props.filterState||e.height!==this.props.height||e.width!==this.props.width||e.triggerRender||e.labelColors!==this.props.labelColors||e.sharedLabelColors!==this.props.sharedLabelColors||e.formData.color_scheme!==this.props.formData.color_scheme||e.formData.stack!==this.props.formData.stack||e.cacheBusterProp!==this.props.cacheBusterProp||e.emitCrossFilters!==this.props.emitCrossFilters))}handleAddFilter(e,t,n,a){void 0===n&&(n=!0),void 0===a&&(a=!0),this.props.addFilter(e,t,n,a)}handleRenderSuccess(){const{actions:e,chartStatus:t,chartId:n,vizType:a}=this.props;["loading","rendered"].indexOf(t)<0&&e.chartRenderingSucceeded(n),this.hasQueryResponseChange&&e.logEvent(C.aD,{slice_id:n,viz_type:a,start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:C.Yd.getTimestamp()-this.renderStartTime})}handleRenderFailure(e,t){const{actions:n,chartId:a}=this.props;v.Z.warn(e),n.chartRenderingFailed(e.toString(),a,t?t.componentStack:null),this.hasQueryResponseChange&&n.logEvent(C.aD,{slice_id:a,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:C.Yd.getTimestamp()-this.renderStartTime})}handleSetControlValue(){const{setControlValue:e}=this.props;e&&e(...arguments)}handleOnContextMenu(e,t,n){this.contextMenuRef.current.open(e,t,n),this.setState({inContextMenu:!0})}handleContextMenuSelected(){this.setState({inContextMenu:!1})}handleContextMenuClosed(){this.setState({inContextMenu:!1})}onContextMenuFallback(e){this.state.inContextMenu||(e.preventDefault(),this.handleOnContextMenu(e.clientX,e.clientY))}render(){var e;const{chartAlert:t,chartStatus:n,chartId:r,emitCrossFilters:i}=this.props;if("loading"===n||t||null===n)return null;this.renderStartTime=C.Yd.getTimestamp();const{width:o,height:l,datasource:s,annotationData:c,initialValues:u,ownState:m,filterState:g,chartIsStale:v,formData:f,latestQueryFormData:b,postTransformProps:y}=this.props,Z=v&&b?b:f,S=Z.viz_type||this.props.vizType,w=R()(S),T="table"===S?`superset-chart-${w}`:w;let k;const $=(0,h.t)("No results were returned for this query"),D=this.props.source===a.Explore?(0,h.t)("Make sure that the controls are configured properly and the datasource contains data for the selected time range"):void 0,_="chart.svg";k=o>300&&l>220?(0,U.tZ)(x.XJ,{title:$,description:D,image:_}):(0,U.tZ)(x.Tc,{title:$,image:_});const M=null!=(e=(0,A.Z)().get(f.viz_type))&&e.behaviors.find((e=>e===O.cg.DRILL_TO_DETAIL))?{inContextMenu:this.state.inContextMenu}:{};return(0,U.tZ)(p.Fragment,null,this.state.showContextMenu&&(0,U.tZ)(Se,{ref:this.contextMenuRef,id:r,formData:Z,onSelection:this.handleContextMenuSelected,onClose:this.handleContextMenuClosed}),(0,U.tZ)("div",{onContextMenu:this.state.showContextMenu?this.onContextMenuFallback:void 0},(0,U.tZ)(N.Z,d()({disableErrorBoundary:!0,key:`${r}`,id:`chart-id-${r}`,className:T,chartType:S,width:o,height:l,annotationData:c,datasource:s,initialValues:u,formData:Z,ownState:m,filterState:g,hooks:this.hooks,behaviors:Te,queriesData:this.mutableQueriesResponse,onRenderSuccess:this.handleRenderSuccess,onRenderFailure:this.handleRenderFailure,noResults:k,postTransformProps:y,emitCrossFilters:i},M))))}}$e.propTypes=Ce,$e.defaultProps=ke;const De=$e;var _e=n(42582),Me=n(72875);const Ie=e=>{let{chartId:t,error:n,...a}=e;const{result:r}=(0,_e.hb)(t),i=n&&{...n,extra:{...n.extra,owners:r}};return(0,U.tZ)(Me.Z,d()({},a,{error:i}))};var Fe=n(75701);const Ee={annotationData:u().object,actions:u().object,chartId:u().number.isRequired,datasource:u().object,dashboardId:u().number,initialValues:u().object,formData:u().object.isRequired,labelColors:u().object,sharedLabelColors:u().object,width:u().number,height:u().number,setControlValue:u().func,timeout:u().number,vizType:u().string.isRequired,triggerRender:u().bool,force:u().bool,isFiltersInitialized:u().bool,chartAlert:u().string,chartStatus:u().string,chartStackTrace:u().string,queriesResponse:u().arrayOf(u().object),triggerQuery:u().bool,chartIsStale:u().bool,errorMessage:u().node,addFilter:u().func,onQuery:u().func,onFilterMenuOpen:u().func,onFilterMenuClose:u().func,ownState:u().object,postTransformProps:u().func,datasetsStatus:u().oneOf(["loading","error","complete"]),isInView:u().bool,emitCrossFilters:u().bool},Re={},Oe=(0,h.t)("The dataset associated with this chart no longer exists"),Ae={addFilter:()=>Re,onFilterMenuOpen:()=>Re,onFilterMenuClose:()=>Re,initialValues:Re,setControlValue(){},triggerRender:!1,dashboardId:null,chartStackTrace:null,force:!1,isInView:!0},Ne=m.iK.div`
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
`,Ue=m.iK.div`
  font-family: ${e=>{let{theme:t}=e;return t.typography.families.monospace}};
  word-break: break-word;
  overflow-x: auto;
  white-space: pre-wrap;
`;class ze extends p.PureComponent{constructor(e){super(e),this.handleRenderContainerFailure=this.handleRenderContainerFailure.bind(this)}componentDidMount(){this.props.triggerQuery&&this.runQuery()}componentDidUpdate(){this.props.triggerQuery&&this.runQuery()}runQuery(){this.props.chartId>0&&(0,b.c)(g.T.CLIENT_CACHE)?this.props.actions.getSavedChart(this.props.formData,this.props.force||(0,T.eY)(w.KD.force),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState):this.props.actions.postChartFormData(this.props.formData,this.props.force||(0,T.eY)(w.KD.force),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState)}handleRenderContainerFailure(e,t){const{actions:n,chartId:a}=this.props;v.Z.warn(e),n.chartRenderingFailed(e.toString(),a,t?t.componentStack:null),n.logEvent(C.aD,{slice_id:a,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:C.Yd.getTimestamp()-this.renderStartTime})}renderErrorMessage(e){var t;const{chartId:n,chartAlert:r,chartStackTrace:i,datasource:o,dashboardId:l,height:s,datasetsStatus:d}=this.props,c=null==e||null==(t=e.errors)?void 0:t[0],u=r||(null==e?void 0:e.message);return void 0!==r&&r!==Oe&&o===y.tw&&d!==D.ni.ERROR?(0,U.tZ)(Ne,{key:n,"data-ui-anchor":"chart",className:"chart-container",height:s},(0,U.tZ)(Z.Z,null)):(0,U.tZ)(Ie,{key:n,chartId:n,error:c,subtitle:(0,U.tZ)(Ue,null,u),copyText:u,link:e?e.link:null,source:l?a.Dashboard:a.Explore,stackTrace:i})}render(){const{height:e,chartAlert:t,chartStatus:n,errorMessage:a,chartIsStale:r,queriesResponse:i=[],width:o}=this.props,l="loading"===n;return this.renderContainerStartTime=C.Yd.getTimestamp(),"failed"===n?i.map((e=>this.renderErrorMessage(e))):a&&0===(0,f.Z)(i).length?(0,U.tZ)(x.XJ,{title:(0,h.t)("Add required control values to preview chart"),description:(0,Fe.J)(!0),image:"chart.svg"}):l||t||a||!r||0!==(0,f.Z)(i).length?(0,U.tZ)(S.Z,{onError:this.handleRenderContainerFailure,showMessage:!1},(0,U.tZ)(Ne,{"data-ui-anchor":"chart",className:"chart-container",height:e,width:o},(0,U.tZ)("div",{className:"slice_container"},this.props.isInView||!(0,b.c)(g.T.DASHBOARD_VIRTUALIZATION)||(0,k.b)()?(0,U.tZ)(De,d()({},this.props,{source:this.props.dashboardId?"dashboard":"explore"})):(0,U.tZ)(Z.Z,null)),l&&(0,U.tZ)(Z.Z,null))):(0,U.tZ)(x.XJ,{title:(0,h.t)("Your chart is ready to go!"),description:(0,U.tZ)("span",null,(0,h.t)('Click on "Create chart" button in the control panel on the left to preview a visualization or')," ",(0,U.tZ)("span",{role:"button",tabIndex:0,onClick:this.props.onQuery},(0,h.t)("click here")),"."),image:"chart.svg"})}}ze.propTypes=Ee,ze.defaultProps=Ae;const Pe=ze,Le=(0,r.$j)(null,(function(e){return{actions:(0,i.DE)({...o,updateDataMask:V.eG,logEvent:l.logEvent},e)}}))(Pe)},96022:(e,t,n)=>{n.d(t,{ZN:()=>V,gT:()=>K});var a=n(78580),r=n.n(a),i=n(67294),o=n(28216),l=n(51995),s=n(11965),d=n(55867),c=n(93185),u=n(70163),p=n(83862),h=n(1304),m=n(35932),g=n(14114),v=n(12515),f=n(56727),b=n(23525),y=n(10222),Z=n(7070),x=n(91877),S=n(15423),C=n(9875),w=n(13433),T=n(27600),k=n(50909);const $=(0,l.iK)(k.qi)`
  && {
    margin: 0 0 ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,D=e=>{let{formData:t,addDangerToast:n}=e;const[a,r]=(0,i.useState)("400"),[o,l]=(0,i.useState)("600"),[c,u]=(0,i.useState)(""),[p,h]=(0,i.useState)(""),m=(0,i.useCallback)((e=>{const{value:t,name:n}=e.currentTarget;"width"===n&&l(t),"height"===n&&r(t)}),[]),g=(0,i.useCallback)((()=>{u(""),(0,b.YE)(t).then((e=>{u(e),h("")})).catch((()=>{h((0,d.t)("Error")),n((0,d.t)("Sorry, something went wrong. Try again later."))}))}),[n,t]);(0,i.useEffect)((()=>{g()}),[]);const v=(0,i.useMemo)((()=>{if(!c)return"";const e=`${c}?${T.KD.standalone.name}=1&height=${a}`;return`<iframe\n  width="${o}"\n  height="${a}"\n  seamless\n  frameBorder="0"\n  scrolling="no"\n  src="${e}"\n>\n</iframe>`}),[a,c,o]),f=p||v||(0,d.t)("Generating link, please wait..");return(0,s.tZ)("div",{id:"embed-code-popover"},(0,s.tZ)("div",{css:s.iv`
          display: flex;
          flex-direction: column;
        `},(0,s.tZ)(w.Z,{shouldShowText:!1,text:v,copyNode:(0,s.tZ)($,{buttonSize:"xsmall"},(0,s.tZ)("i",{className:"fa fa-clipboard"}))}),(0,s.tZ)(C.Kx,{name:"embedCode",disabled:!v,value:f,rows:"4",readOnly:!0,css:e=>s.iv`
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
        `},(0,s.tZ)("div",null,(0,s.tZ)("label",{htmlFor:"embed-height"},(0,d.t)("Chart height")),(0,s.tZ)(C.II,{type:"text",defaultValue:a,name:"height",onChange:m})),(0,s.tZ)("div",null,(0,s.tZ)("label",{htmlFor:"embed-width"},(0,d.t)("Chart width")),(0,s.tZ)(C.II,{type:"text",defaultValue:o,name:"width",onChange:m,id:"embed-width"}))))};var _=n(5872),M=n.n(_),I=n(73727);const F=e=>{let{chartId:t,dashboards:n=[],...a}=e;const o=(0,l.Fg)(),[c,h]=(0,i.useState)(),[m,g]=(0,i.useState)(),v=n.length>10,f=n.filter((e=>{var t;return!c||r()(t=e.dashboard_title.toLowerCase()).call(t,c.toLowerCase())})),b=0===n.length,y=c&&0===f.length,Z=t?`?focused_chart=${t}`:"";return(0,s.tZ)(i.Fragment,null,v&&(0,s.tZ)(C.II,{allowClear:!0,placeholder:(0,d.t)("Search"),prefix:(0,s.tZ)(u.Z.Search,{iconSize:"l"}),css:s.iv`
            width: ${220}px;
            margin: ${2*o.gridUnit}px ${3*o.gridUnit}px;
          `,value:c,onChange:e=>h(e.currentTarget.value)}),(0,s.tZ)("div",{css:s.iv`
          max-height: ${300}px;
          overflow: auto;
        `},f.map((e=>(0,s.tZ)(p.v.Item,M()({key:String(e.id),onMouseEnter:()=>g(e.id),onMouseLeave:()=>{m===e.id&&g(null)}},a),(0,s.tZ)(I.rU,{target:"_blank",rel:"noreferer noopener",to:`/superset/dashboard/${e.id}${Z}`},(0,s.tZ)("div",{css:s.iv`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  max-width: ${220}px;
                `},(0,s.tZ)("div",{css:s.iv`
                    white-space: normal;
                  `},e.dashboard_title),(0,s.tZ)(u.Z.Full,{iconSize:"l",iconColor:o.colors.grayscale.base,css:s.iv`
                    margin-left: ${2*o.gridUnit}px;
                    visibility: ${m===e.id?"visible":"hidden"};
                  `})))))),y&&(0,s.tZ)("div",{css:s.iv`
              margin-left: ${3*o.gridUnit}px;
              margin-bottom: ${o.gridUnit}px;
            `},(0,d.t)("No results found")),b&&(0,s.tZ)(p.v.Item,M()({disabled:!0,css:s.iv`
              min-width: ${220}px;
            `},a),(0,d.t)("None"))))},E="edit_properties",R="export_to_csv",O="export_to_csv_pivoted",A="export_to_json",N="export_to_xlsx",U="download_as_image",z="copy_permalink",P="embed_code",L="share_by_email",B="view_query",j="run_in_sql_lab",q=["pivot_table","pivot_table_v2"],V=l.iK.div`
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
`,H=((0,l.iK)(m.Z)`
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
`),K=(e,t,n,a,m,C,w)=>{const T=(0,l.Fg)(),{addDangerToast:k,addSuccessToast:$}=(0,g.e1)(),[_,M]=(0,i.useState)(null),[I,V]=(0,i.useState)(!1),[K,W]=(0,i.useState)([]),G=(0,o.v9)((e=>{var t;return null==(t=e.charts)?void 0:t[(0,v.Jp)(e.explore)]})),{datasource:Q}=e,Y=(0,i.useCallback)((async()=>{try{const t=(0,d.t)("Superset Chart"),n=await(0,b.YE)(e),a=encodeURIComponent((0,d.t)("%s%s","Check out this chart: ",n));window.location.href=`mailto:?Subject=${t}%20&Body=${a}`}catch(e){k((0,d.t)("Sorry, something went wrong. Try again later."))}}),[k,e]),J=(0,i.useCallback)((()=>t?(0,v.pe)({formData:e,ownState:C,resultType:"full",resultFormat:"csv"}):null),[t,e]),X=(0,i.useCallback)((()=>t?(0,v.pe)({formData:e,resultType:"post_processed",resultFormat:"csv"}):null),[t,e]),ee=(0,i.useCallback)((()=>(0,v.pe)({formData:e,resultType:"results",resultFormat:"json"})),[e]),te=(0,i.useCallback)((()=>(0,v.pe)({formData:e,resultType:"results",resultFormat:"xlsx"})),[e]),ne=(0,i.useCallback)((async()=>{try{if(!e)throw new Error;await(0,y.Z)((()=>(0,b.YE)(e))),$((0,d.t)("Copied to clipboard!"))}catch(e){k((0,d.t)("Sorry, something went wrong. Try again later."))}}),[k,$,e]),ae=(0,i.useCallback)((t=>{var r;let{key:i,domEvent:o}=t;switch(i){case E:m(),V(!1);break;case R:J(),V(!1),W([]);break;case O:X(),V(!1),W([]);break;case A:ee(),V(!1),W([]);break;case N:te(),V(!1),W([]);break;case U:(0,f.Z)(".panel-body .chart-container",null!=(r=null==n?void 0:n.slice_name)?r:(0,d.t)("New chart"),!0)(o),V(!1),W([]);break;case z:ne(),V(!1),W([]);break;case P:V(!1),W([]);break;case L:Y(),V(!1),W([]);break;case B:V(!1);break;case j:a(e),V(!1)}}),[ne,J,X,ee,e,a,m,Y,null==n?void 0:n.slice_name]);return[(0,i.useMemo)((()=>(0,s.tZ)(p.v,{onClick:ae,selectable:!1,openKeys:K,onOpenChange:W},(0,s.tZ)(i.Fragment,null,n&&(0,s.tZ)(p.v.Item,{key:E},(0,d.t)("Edit chart properties")),(0,s.tZ)(p.v.SubMenu,{title:(0,d.t)("Dashboards added to"),key:"dashboards_added_to"},(0,s.tZ)(F,{chartId:null==n?void 0:n.slice_id,dashboards:w})),(0,s.tZ)(p.v.Divider,null)),(0,s.tZ)(p.v.SubMenu,{title:(0,d.t)("Download"),key:"download_submenu"},r()(q).call(q,e.viz_type)?(0,s.tZ)(i.Fragment,null,(0,s.tZ)(p.v.Item,{key:R,icon:(0,s.tZ)(u.Z.FileOutlined,{css:H}),disabled:!t},(0,d.t)("Export to original .CSV")),(0,s.tZ)(p.v.Item,{key:O,icon:(0,s.tZ)(u.Z.FileOutlined,{css:H}),disabled:!t},(0,d.t)("Export to pivoted .CSV"))):(0,s.tZ)(p.v.Item,{key:R,icon:(0,s.tZ)(u.Z.FileOutlined,{css:H}),disabled:!t},(0,d.t)("Export to .CSV")),(0,s.tZ)(p.v.Item,{key:A,icon:(0,s.tZ)(u.Z.FileOutlined,{css:H})},(0,d.t)("Export to .JSON")),(0,s.tZ)(p.v.Item,{key:U,icon:(0,s.tZ)(u.Z.FileImageOutlined,{css:H})},(0,d.t)("Download as image")),(0,s.tZ)(p.v.Item,{key:N,icon:(0,s.tZ)(u.Z.FileOutlined,{css:H})},(0,d.t)("Export to Excel"))),(0,s.tZ)(p.v.SubMenu,{title:(0,d.t)("Share"),key:"share_submenu"},(0,s.tZ)(p.v.Item,{key:z},(0,d.t)("Copy permalink to clipboard")),(0,s.tZ)(p.v.Item,{key:L},(0,d.t)("Share chart by email")),(0,x.c)(c.T.EMBEDDABLE_CHARTS)?(0,s.tZ)(p.v.Item,{key:P},(0,s.tZ)(h.Z,{triggerNode:(0,s.tZ)("span",null,(0,d.t)("Embed code")),modalTitle:(0,d.t)("Embed code"),modalBody:(0,s.tZ)(D,{formData:e,addDangerToast:k}),maxWidth:100*T.gridUnit+"px",destroyOnClose:!0,responsive:!0})):null),(0,s.tZ)(p.v.Divider,null),_?(0,s.tZ)(i.Fragment,null,(0,s.tZ)(p.v.SubMenu,{title:(0,d.t)("Manage email report")},(0,s.tZ)(Z.Z,{chart:G,setShowReportSubMenu:M,showReportSubMenu:_,setIsDropdownVisible:V,isDropdownVisible:I,useTextMenu:!0})),(0,s.tZ)(p.v.Divider,null)):(0,s.tZ)(p.v,null,(0,s.tZ)(Z.Z,{chart:G,setShowReportSubMenu:M,setIsDropdownVisible:V,isDropdownVisible:I,useTextMenu:!0})),(0,s.tZ)(p.v.Item,{key:B},(0,s.tZ)(h.Z,{triggerNode:(0,s.tZ)("span",null,(0,d.t)("View query")),modalTitle:(0,d.t)("View query"),modalBody:(0,s.tZ)(S.Z,{latestQueryFormData:e}),draggable:!0,resizable:!0,responsive:!0})),Q&&(0,s.tZ)(p.v.Item,{key:j},(0,d.t)("Run in SQL Lab")))),[k,t,G,w,ae,I,e,K,_,n,T.gridUnit]),I,V]}},15856:(e,t,n)=>{n.d(t,{j:()=>o}),n(67294);var a=n(11965),r=n(70163),i=n(58593);const o=e=>{let{title:t,color:n}=e;return(0,a.tZ)(i.u,{title:t,placement:"top"},(0,a.tZ)(r.Z.InfoCircleOutlined,{css:e=>a.iv`
        color: ${n||e.colors.text.label};
        margin-left: ${2*e.gridUnit}px;
        &.anticon {
          font-size: unset;
          .anticon {
            line-height: unset;
            vertical-align: unset;
          }
        }
      `}))}},41814:(e,t,n)=>{n.d(t,{p:()=>ie});var a=n(5872),r=n.n(a),i=n(41609),o=n.n(i),l=n(67294),s=n(55867),d=n(11965),c=n(51995),u=n(11064),p=n(16355),h=n(69363),m=n(83862),g=n(16550),v=n(74069),f=n(35932),b=n(28216),y=n(50232),Z=n(88889),x=n(55786),S=n(99612),C=n(38703),w=n(27600);const T=function(e){let{value:t}=e;return(0,d.tZ)("span",null,t?w.Ly:w.gz)},k=function(){return(0,d.tZ)("span",{css:e=>d.iv`
        color: ${e.colors.grayscale.light1};
      `},w.Wq)};var $=n(42846),D=n(51115);const _=function(e){let{format:t=$.Z.DATABASE_DATETIME,value:n}=e;return n?(0,d.tZ)("span",null,(0,D.bt)(t).format(n)):(0,d.tZ)(k,null)};var M=n(94301),I=n(52256),F=n(93197),E=n(87183),R=n(4715),O=n(70163),A=n(76697);const N=function(e){const{headerTitle:t,groupTitle:n,groupOptions:a,value:r,onChange:i}=e,o=(0,c.Fg)(),[s,u]=(0,l.useState)(!1);return(0,d.tZ)("div",{css:d.iv`
        display: flex;
        align-items: center;
      `},(0,d.tZ)(A.ZP,{trigger:"click",visible:s,content:(0,d.tZ)("div",null,(0,d.tZ)("div",{css:d.iv`
                font-weight: ${o.typography.weights.bold};
                margin-bottom: ${o.gridUnit}px;
              `},n),(0,d.tZ)(E.Y.Group,{value:r,onChange:e=>{i(e.target.value),u(!1)}},(0,d.tZ)(R.T,{direction:"vertical"},a.map((e=>(0,d.tZ)(E.Y,{key:e.value,value:e.value},e.label)))))),placement:"bottomLeft",arrowPointAtCenter:!0},(0,d.tZ)(O.Z.SettingOutlined,{iconSize:"m",iconColor:o.colors.grayscale.light1,css:d.iv`
            margin-top: 3px; // we need exactly 3px to align the icon
            margin-right: ${o.gridUnit}px;
          `,onClick:()=>u(!0)})),t)};var U=n(42190),z=n(53579),P=n(60331),L=n(72813),B=n(89555);function j(e){let{filters:t,setFilters:n,totalCount:a,loading:r,onReload:i}=e;const o=(0,c.Fg)(),u=(0,l.useMemo)((()=>Object.assign({},...t.map((e=>({[(0,L.GA)(e.col)?e.col.label:e.col]:e}))))),[t]),p=(0,l.useCallback)((e=>{const t={...u};delete t[e],n([...Object.values(t)])}),[u,n]),h=(0,l.useMemo)((()=>Object.entries(u).map((e=>{let[t,{val:n,formattedVal:a}]=e;return{colName:t,val:null!=a?a:n}})).sort(((e,t)=>e.colName.localeCompare(t.colName)))),[u]);return(0,d.tZ)("div",{css:d.iv`
        display: flex;
        justify-content: space-between;
        padding: ${o.gridUnit/2}px 0;
        margin-bottom: ${2*o.gridUnit}px;
      `},(0,d.tZ)("div",{css:d.iv`
          display: flex;
          flex-wrap: wrap;
          margin-bottom: -${4*o.gridUnit}px;
        `},h.map((e=>{let{colName:t,val:n}=e;return(0,d.tZ)(P.Z,{closable:!0,onClose:p.bind(null,t),key:t,css:d.iv`
              height: ${6*o.gridUnit}px;
              display: flex;
              align-items: center;
              padding: ${o.gridUnit/2}px ${2*o.gridUnit}px;
              margin-right: ${4*o.gridUnit}px;
              margin-bottom: ${4*o.gridUnit}px;
              line-height: 1.2;
            `},(0,d.tZ)("span",{css:d.iv`
                margin-right: ${o.gridUnit}px;
              `},t),(0,d.tZ)("strong",null,n))}))),(0,d.tZ)("div",{css:d.iv`
          display: flex;
          align-items: center;
          height: min-content;
        `},(0,d.tZ)(B.Z,{loading:r&&!a,rowcount:a}),(0,d.tZ)(O.Z.ReloadOutlined,{iconColor:o.colors.grayscale.light1,iconSize:"l","aria-label":(0,s.t)("Reload"),role:"button",onClick:i})))}var q,V=n(57557),H=n.n(V),K=n(65946),W={name:"82a6rk",styles:"flex:1"};function G(e){let{children:t}=e;const{ref:n,height:a}=(0,S.NB)();return(0,d.tZ)("div",{ref:n,css:W},l.cloneElement(t,{height:a}))}function Q(e){let{formData:t,initialFilters:n}=e;const a=(0,c.Fg)(),[r,i]=(0,l.useState)(0),o=(0,l.useRef)(r),[u,p]=(0,l.useState)(n),[h,m]=(0,l.useState)(!1),[g,v]=(0,l.useState)(""),[f,y]=(0,l.useState)(new Map),[S,w]=(0,l.useState)({}),$=(0,b.v9)((e=>e.common.conf.SAMPLES_ROW_LIMIT)),[D,E]=(0,l.useMemo)((()=>t.datasource.split("__")),[t.datasource]),{metadataBar:R,status:O}=(0,z.S)({datasetId:D}),A=(0,l.useMemo)((()=>{const e=f.get(r);return e?(o.current=r,e):f.get(o.current)}),[r,f]),P=(0,l.useMemo)((()=>(null==A?void 0:A.colNames.map(((e,t)=>({key:e,dataIndex:e,title:(null==A?void 0:A.colTypes[t])===Z.Z.TEMPORAL?(0,d.tZ)(N,{headerTitle:e,groupTitle:(0,s.t)("Formatting"),groupOptions:[{label:(0,s.t)("Original value"),value:q.Original},{label:(0,s.t)("Formatted value"),value:q.Formatted}],value:S[e]===q.Original?q.Original:q.Formatted,onChange:t=>w((n=>({...n,[e]:t})))}):e,render:n=>!0===n||!1===n?(0,d.tZ)(T,{value:n}):null===n?(0,d.tZ)(k,null):(null==A?void 0:A.colTypes[t])===Z.Z.TEMPORAL&&S[e]!==q.Original&&("number"==typeof n||n instanceof Date)?(0,d.tZ)(_,{value:n}):String(n),width:150}))))||[]),[null==A?void 0:A.colNames,null==A?void 0:A.colTypes,S]),L=(0,l.useMemo)((()=>(null==A?void 0:A.data.map(((e,t)=>null==A?void 0:A.colNames.reduce(((t,n)=>({...t,[n]:e[n]})),{key:t}))))||[]),[null==A?void 0:A.colNames,null==A?void 0:A.data]),B=(0,l.useCallback)((()=>{v(""),y(new Map),i(0)}),[]);(0,l.useEffect)((()=>{v(""),y(new Map),i(0)}),[u]),(0,l.useEffect)((()=>{if(f.has(r)&&[...f.keys()].at(-1)!==r){const e=new Map(f);e.delete(r),y(e.set(r,f.get(r)))}}),[r,f]),(0,l.useEffect)((()=>{if(!g&&!h&&!f.has(r)){var e;m(!0);const n=null!=(e=function(e,t){if(!e)return;const n=(0,K.Z)(e),a=H()(n.extras,"having"),r=[...(0,x.Z)(n.filters),...(0,x.Z)(t).map((e=>H()(e,"formattedVal")))];return{granularity:n.granularity,time_range:n.time_range,filters:r,extras:a}}(t,u))?e:{},a=Math.ceil($/50);(0,I.getDatasourceSamples)(E,D,!1,n,50,r+1).then((e=>{y(new Map([...[...f.entries()].slice(1-a),[r,{total:e.total_count,data:e.data,colNames:(0,x.Z)(e.colnames),colTypes:(0,x.Z)(e.coltypes)}]])),v("")})).catch((e=>{v(`${e.name}: ${e.message}`)})).finally((()=>{m(!1)}))}}),[$,D,E,u,t,h,r,g,f]);const V=!g&&!f.size||O===U.ni.LOADING;let W=null;if(g)W=(0,d.tZ)("pre",{css:d.iv`
          margin-top: ${4*a.gridUnit}px;
        `},g);else if(V)W=(0,d.tZ)(C.Z,null);else if(0===(null==A?void 0:A.total)){const e=(0,s.t)("No rows were returned for this dataset");W=(0,d.tZ)(M.x3,{image:"document.svg",title:e})}else W=(0,d.tZ)(G,null,(0,d.tZ)(F.ZP,{data:L,columns:P,size:F.ex.SMALL,defaultPageSize:50,recordCount:null==A?void 0:A.total,usePagination:!0,loading:h,onChange:e=>i(e.current?e.current-1:0),resizable:!0,virtualize:!0}));return(0,d.tZ)(l.Fragment,null,!V&&R,!V&&(0,d.tZ)(j,{filters:u,setFilters:p,totalCount:null==A?void 0:A.total,loading:h,onReload:B}),W)}!function(e){e[e.Original=0]="Original",e[e.Formatted=1]="Formatted"}(q||(q={}));const Y=e=>{let{exploreChart:t,closeModal:n}=e;return(0,d.tZ)(l.Fragment,null,(0,d.tZ)(f.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:t},(0,s.t)("Edit chart")),(0,d.tZ)(f.Z,{buttonStyle:"primary",buttonSize:"small",onClick:n},(0,s.t)("Close")))};function J(e){let{chartId:t,formData:n,initialFilters:a,showModal:r,onHideModal:i}=e;const o=(0,c.Fg)(),u=(0,g.k6)(),p=(0,l.useContext)(y.DashboardPageIdContext),{slice_name:h}=(0,b.v9)((e=>e.sliceEntities.slices[t])),m=(0,l.useMemo)((()=>`/explore/?dashboard_page_id=${p}&slice_id=${t}`),[t,p]),f=(0,l.useCallback)((()=>{u.push(m)}),[m,u]);return(0,d.tZ)(v.Z,{show:r,onHide:null!=i?i:()=>null,css:d.iv`
        .ant-modal-body {
          display: flex;
          flex-direction: column;
        }
      `,title:(0,s.t)("Drill to detail: %s",h),footer:(0,d.tZ)(Y,{exploreChart:f}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*o.gridUnit,minWidth:128*o.gridUnit,defaultSize:{width:"auto",height:"75vh"}},draggable:!0,destroyOnClose:!0,maskClosable:!1},(0,d.tZ)(Q,{formData:n,initialFilters:a}))}var X=n(69175),ee=n(15856),te=n(46219);const ne=(0,s.t)("Drill to detail by"),ae=e=>{let{children:t,...n}=e;return(0,d.tZ)(m.v.Item,r()({disabled:!0},n),(0,d.tZ)("div",{css:d.iv`
        white-space: normal;
        max-width: 160px;
      `},t))},re=c.iK.span`
  ${e=>{let{theme:t}=e;return`\n     font-weight: ${t.typography.weights.bold};\n     color: ${t.colors.primary.base};\n   `}}
`,ie=e=>{let{chartId:t,formData:n,filters:a=[],isContextMenu:i=!1,contextMenuY:c=0,onSelection:g=(()=>null),onClick:v=(()=>null),submenuIndex:f=0,...b}=e;const[y,Z]=(0,l.useState)([]),[x,S]=(0,l.useState)(!1),C=(0,l.useCallback)(((e,t)=>{v(t),g(),Z(e),S(!0)}),[v,g]),w=(0,l.useCallback)((()=>{S(!1)}),[]),T=(0,l.useMemo)((()=>{var e;return null==(e=(0,u.Z)().get(n.viz_type))?void 0:e.behaviors.find((e=>e===p.cg.DRILL_TO_DETAIL))}),[n.viz_type]),k=(0,l.useMemo)((()=>{const{metrics:e}=(0,h.Z)(n);return o()(e)}),[n]);let $,D;$=T&&k?(0,d.tZ)(ae,r()({},b,{key:"drill-detail-no-aggregations"}),(0,s.t)("Drill to detail"),(0,d.tZ)(ee.j,{title:(0,s.t)("Drill to detail is disabled because this chart does not group data by dimension value.")})):(0,d.tZ)(m.v.Item,r()({},b,{key:"drill-detail-no-filters",onClick:C.bind(null,[])}),(0,s.t)("Drill to detail")),T||(D=(0,d.tZ)(ae,r()({},b,{key:"drill-detail-by-chart-not-supported"}),ne,(0,d.tZ)(ee.j,{title:(0,s.t)("Drill to detail by value is not yet supported for this chart type.")}))),T&&k&&(D=(0,d.tZ)(ae,r()({},b,{key:"drill-detail-by-no-aggregations"}),ne));const _=(0,l.useMemo)((()=>(0,X.th)(c,a.length>1?a.length+1:a.length,f)),[c,a.length,f]);return T&&!k&&null!=a&&a.length&&(D=(0,d.tZ)(m.v.SubMenu,r()({},b,{popupOffset:[0,_],popupClassName:"chart-context-submenu",title:ne}),(0,d.tZ)("div",null,a.map(((e,t)=>(0,d.tZ)(te.i,r()({},b,{tooltipText:`${ne} ${e.formattedVal}`,key:`drill-detail-filter-${t}`,onClick:C.bind(null,[e])}),`${ne} `,(0,d.tZ)(re,null,e.formattedVal)))),a.length>1&&(0,d.tZ)(m.v.Item,r()({},b,{key:"drill-detail-filter-all",onClick:C.bind(null,a)}),(0,d.tZ)("div",null,`${ne} `,(0,d.tZ)(re,null,(0,s.t)("all"))))))),!T||k||null!=a&&a.length||(D=(0,d.tZ)(ae,r()({},b,{key:"drill-detail-by-select-aggregation"}),ne,(0,d.tZ)(ee.j,{title:(0,s.t)("Right-click on a dimension value to drill to detail by that value.")}))),(0,d.tZ)(l.Fragment,null,$,i&&D,(0,d.tZ)(J,{chartId:t,formData:n,initialFilters:y,showModal:x,onHideModal:w}))}},46219:(e,t,n)=>{n.d(t,{i:()=>d});var a=n(5872),r=n.n(a),i=(n(67294),n(3297)),o=n(11965),l=n(83862),s=n(58593);const d=e=>{let{tooltipText:t,children:n,...a}=e;const[d,c]=(0,i.Z)();return(0,o.tZ)(l.v.Item,r()({css:o.iv`
        display: flex;
      `},a),(0,o.tZ)(s.u,{title:c?t:null},(0,o.tZ)("div",{ref:d,css:o.iv`
            max-width: 100%;
            ${i.B};
          `},n)))}},69175:(e,t,n)=>{n.d(t,{$t:()=>a,th:()=>r});const a=function(e,t,n,a){void 0===n&&(n=Number.MAX_SAFE_INTEGER),void 0===a&&(a=0);const r=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),i=Math.min(32*t,n)+32+a;return r-e<i?r-i:e},r=function(e,t,n,r,i){void 0===n&&(n=0),void 0===r&&(r=Number.MAX_SAFE_INTEGER),void 0===i&&(i=0);const o=e+4+32*n+4;return a(o,t,r,i)-o}},9433:(e,t,n)=>{n.d(t,{CronPicker:()=>u});var a=n(5872),r=n.n(a),i=(n(67294),n(38179)),o=n(55867),l=n(51995),s=n(61247),d=n(11965);const c={everyText:(0,o.t)("every"),emptyMonths:(0,o.t)("every month"),emptyMonthDays:(0,o.t)("every day of the month"),emptyMonthDaysShort:(0,o.t)("day of the month"),emptyWeekDays:(0,o.t)("every day of the week"),emptyWeekDaysShort:(0,o.t)("day of the week"),emptyHours:(0,o.t)("every hour"),emptyMinutes:(0,o.t)("every minute"),emptyMinutesForHourPeriod:(0,o.t)("every"),yearOption:(0,o.t)("year"),monthOption:(0,o.t)("month"),weekOption:(0,o.t)("week"),dayOption:(0,o.t)("day"),hourOption:(0,o.t)("hour"),minuteOption:(0,o.t)("minute"),rebootOption:(0,o.t)("reboot"),prefixPeriod:(0,o.t)("Every"),prefixMonths:(0,o.t)("in"),prefixMonthDays:(0,o.t)("on"),prefixWeekDays:(0,o.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,o.t)("and"),prefixHours:(0,o.t)("at"),prefixMinutes:(0,o.t)(":"),prefixMinutesForHourPeriod:(0,o.t)("at"),suffixMinutesForHourPeriod:(0,o.t)("minute(s)"),errorInvalidCron:(0,o.t)("Invalid cron expression"),clearButtonText:(0,o.t)("Clear"),weekDays:[(0,o.t)("Sunday"),(0,o.t)("Monday"),(0,o.t)("Tuesday"),(0,o.t)("Wednesday"),(0,o.t)("Thursday"),(0,o.t)("Friday"),(0,o.t)("Saturday")],months:[(0,o.t)("January"),(0,o.t)("February"),(0,o.t)("March"),(0,o.t)("April"),(0,o.t)("May"),(0,o.t)("June"),(0,o.t)("July"),(0,o.t)("August"),(0,o.t)("September"),(0,o.t)("October"),(0,o.t)("November"),(0,o.t)("December")],altWeekDays:[(0,o.t)("SUN"),(0,o.t)("MON"),(0,o.t)("TUE"),(0,o.t)("WED"),(0,o.t)("THU"),(0,o.t)("FRI"),(0,o.t)("SAT")],altMonths:[(0,o.t)("JAN"),(0,o.t)("FEB"),(0,o.t)("MAR"),(0,o.t)("APR"),(0,o.t)("MAY"),(0,o.t)("JUN"),(0,o.t)("JUL"),(0,o.t)("AUG"),(0,o.t)("SEP"),(0,o.t)("OCT"),(0,o.t)("NOV"),(0,o.t)("DEC")]},u=(0,l.iK)((e=>(0,d.tZ)(i.ZP,{getPopupContainer:e=>e.parentElement},(0,d.tZ)(s.default,r()({locale:c},e)))))`
  .react-js-cron-field {
    margin-bottom: 0px;
  }
  .react-js-cron-select:not(.react-js-cron-custom-select) > div:first-of-type,
  .react-js-cron-custom-select {
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light4}} !important;
  }
  .react-js-cron-custom-select > div:first-of-type {
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
  .react-js-cron-custom-select .ant-select-selection-placeholder {
    flex: auto;
  }
  .react-js-cron-custom-select .ant-select-selection-overflow-item {
    align-self: center;
  }
`},88694:(e,t,n)=>{n.d(t,{$i:()=>h,Lt:()=>p});var a=n(5872),r=n.n(a),i=(n(67294),n(4715)),o=n(51995),l=n(70163),s=n(11965);const d=o.iK.div`
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
`,c=o.iK.div`
  display: flex;
  align-items: center;
  padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  padding-left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`;var u;!function(e){e.VERTICAL="vertical",e.HORIZONTAL="horizontal"}(u||(u={}));const p=e=>{let{overlay:t,iconOrientation:n=u.VERTICAL,...a}=e;return(0,s.tZ)(i.Gj,r()({overlay:t},a),(0,s.tZ)(c,null,function(e){return void 0===e&&(e=u.VERTICAL),e===u.HORIZONTAL?(0,s.tZ)(l.Z.MoreHoriz,{iconSize:"xl"}):(0,s.tZ)(d,null)}(n)))},h=e=>(0,s.tZ)(i.Gj,r()({overlayStyle:{zIndex:99,animationDuration:"0s"}},e))},32871:(e,t,n)=>{var a;n.d(t,{p:()=>a}),function(e){e.DASHBOARDS="dashboards",e.DESCRIPTION="description",e.LAST_MODIFIED="lastModified",e.OWNER="owner",e.ROWS="rows",e.SQL="sql",e.TABLE="table",e.TAGS="tags"}(a||(a={}))},67697:(e,t,n)=>{n.d(t,{pG:()=>x.p,ZP:()=>S});var a=n(87185),r=n.n(a),i=n(67294),o=n(99612),l=n(51995),s=n(58593),d=n(55786),c=n(55867),u=n(70163),p=n(11965);const h=l.iK.div`
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
`,m=e=>{let{text:t,header:n}=e;const a=(0,d.Z)(t);return(0,p.tZ)(i.Fragment,null,n&&(0,p.tZ)(h,null,n),a.map((e=>(0,p.tZ)("div",{key:e},e))))},g=16,v={dashboards:0,table:1,sql:2,rows:3,tags:4,description:5,owner:6,lastModified:7},f=l.iK.div`
  ${e=>{let{theme:t,count:n}=e;return`\n    display: flex;\n    align-items: center;\n    padding: 8px 12px;\n    background-color: ${t.colors.grayscale.light4};\n    color: ${t.colors.grayscale.base};\n    font-size: ${t.typography.sizes.s}px;\n    min-width: ${24+32*n-g}px;\n    border-radius: ${t.borderRadius}px;\n    line-height: 1;\n  `}}
`,b=l.iK.div`
  ${e=>{let{theme:t,collapsed:n,last:a,onClick:r}=e;return`\n    display: flex;\n    align-items: center;\n    max-width: ${174+(a?0:g)}px;\n    min-width: ${n?16+(a?0:g):94+(a?0:g)}px;\n    padding-right: ${a?0:g}px;\n    cursor: ${r?"pointer":"default"};\n    & .metadata-icon {\n      color: ${r&&n?t.colors.primary.base:t.colors.grayscale.base};\n      padding-right: ${n?0:8}px;\n      & .anticon {\n        line-height: 0;\n      }\n    }\n    & .metadata-text {\n      min-width: 70px;\n      overflow: hidden;\n      text-overflow: ${n?"unset":"ellipsis"};\n      white-space: nowrap;\n      text-decoration: ${r?"underline":"none"};\n    }\n  `}}
`,y=l.iK.div`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,Z=e=>{let{barWidth:t,contentType:n,collapsed:a,last:r=!1,tooltipPlacement:o}=e;const{icon:l,title:d,tooltip:h=d}=(e=>{const{type:t}=e;switch(t){case x.p.DASHBOARDS:return{icon:u.Z.FundProjectionScreenOutlined,title:e.title,tooltip:e.description?(0,p.tZ)("div",null,(0,p.tZ)(m,{header:e.title,text:e.description})):void 0};case x.p.DESCRIPTION:return{icon:u.Z.BookOutlined,title:e.value};case x.p.LAST_MODIFIED:return{icon:u.Z.EditOutlined,title:e.value,tooltip:(0,p.tZ)("div",null,(0,p.tZ)(m,{header:(0,c.t)("Last modified"),text:e.value}),(0,p.tZ)(m,{header:(0,c.t)("Modified by"),text:e.modifiedBy}))};case x.p.OWNER:return{icon:u.Z.UserOutlined,title:e.createdBy,tooltip:(0,p.tZ)("div",null,(0,p.tZ)(m,{header:(0,c.t)("Created by"),text:e.createdBy}),(0,p.tZ)(m,{header:(0,c.t)("Owners"),text:e.owners}),(0,p.tZ)(m,{header:(0,c.t)("Created on"),text:e.createdOn}))};case x.p.ROWS:return{icon:u.Z.InsertRowBelowOutlined,title:e.title,tooltip:e.title};case x.p.SQL:return{icon:u.Z.ConsoleSqlOutlined,title:e.title,tooltip:e.title};case x.p.TABLE:return{icon:u.Z.Table,title:e.title,tooltip:e.title};case x.p.TAGS:return{icon:u.Z.TagsOutlined,title:e.values.join(", "),tooltip:(0,p.tZ)("div",null,(0,p.tZ)(m,{header:(0,c.t)("Tags"),text:e.values}))};default:throw Error(`Invalid type provided: ${t}`)}})(n),[g,v]=(0,i.useState)(!1),f=(0,i.useRef)(null),Z=l,{type:S,onClick:C}=n;(0,i.useEffect)((()=>{v(!!f.current&&f.current.scrollWidth>f.current.clientWidth)}),[t,v,n]);const w=(0,p.tZ)(b,{collapsed:a,last:r,onClick:C?()=>C(S):void 0},(0,p.tZ)(Z,{iconSize:"l",className:"metadata-icon"}),!a&&(0,p.tZ)("span",{ref:f,className:"metadata-text"},d));return g||a||h&&h!==d?(0,p.tZ)(s.u,{placement:o,title:(0,p.tZ)(y,null,h)},w):w};var x=n(32871);const S=e=>{let{items:t,tooltipPlacement:n="top"}=e;const[a,l]=(0,i.useState)(),[s,d]=(0,i.useState)(!1),c=r()(t,((e,t)=>e.type===t.type)).sort(((e,t)=>v[e.type]-v[t.type])),u=c.length;if(u<2)throw Error("The minimum number of items for the metadata bar is 2.");if(u>6)throw Error("The maximum number of items for the metadata bar is 6.");const h=(0,i.useCallback)((e=>{const t=110*u-g;l(e),d(Boolean(e&&e<t))}),[u]),{ref:m}=(0,o.NB)({onResize:h});return(0,p.tZ)(f,{ref:m,count:u},c.map(((e,t)=>(0,p.tZ)(Z,{barWidth:a,key:t,contentType:e,collapsed:s,last:t===u-1,tooltipPlacement:n}))))}},52564:(e,t,n)=>{n.d(t,{u:()=>S});var a=n(5872),r=n.n(a),i=n(67294),o=n(11965),l=n(51995),s=n(55867),d=n(4715),c=n(58593),u=n(99612);const p=e=>o.iv`
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
`,h=e=>{let{title:t,placeholder:n,onSave:a,canEdit:r,label:l}=e;const[d,h]=(0,i.useState)(!1),[m,g]=(0,i.useState)(t||""),v=(0,i.useRef)(null),[f,b]=(0,i.useState)(!1),{width:y,ref:Z}=(0,u.NB)(),{width:x,ref:S}=(0,u.NB)({refreshMode:"debounce"});(0,i.useEffect)((()=>{g(t)}),[t]),(0,i.useEffect)((()=>{if(d&&null!=v&&v.current&&(v.current.focus(),v.current.setSelectionRange)){const{length:e}=v.current.value;v.current.setSelectionRange(e,e),v.current.scrollLeft=v.current.scrollWidth}}),[d]),(0,i.useLayoutEffect)((()=>{null!=Z&&Z.current&&(Z.current.innerHTML=(m||n).replace(/\s/g,"&nbsp;"))}),[m,n,Z]),(0,i.useEffect)((()=>{v.current&&v.current.scrollWidth>v.current.clientWidth?b(!0):b(!1)}),[y,x]);const C=(0,i.useCallback)((()=>{r&&!d&&h(!0)}),[r,d]),w=(0,i.useCallback)((()=>{if(!r)return;const e=m.trim();g(e),t!==e&&a(e),h(!1)}),[r,m,a,t]),T=(0,i.useCallback)((e=>{r&&d&&g(e.target.value)}),[r,d]),k=(0,i.useCallback)((e=>{var t;r&&"Enter"===e.key&&(e.preventDefault(),null==(t=v.current)||t.blur())}),[r]);return(0,o.tZ)("div",{css:p,ref:S},(0,o.tZ)(c.u,{id:"title-tooltip",title:f&&m&&!d?m:null},r?(0,o.tZ)("input",{className:"dynamic-title-input","aria-label":null!=l?l:(0,s.t)("Title"),ref:v,onChange:T,onBlur:w,onClick:C,onKeyPress:k,placeholder:n,value:m,css:o.iv`
              cursor: ${d?"text":"pointer"};

              ${y&&y>0&&o.iv`
                width: ${y+1}px;
              `}
            `}):(0,o.tZ)("span",{className:"dynamic-title","aria-label":null!=l?l:(0,s.t)("Title"),ref:v},m)),(0,o.tZ)("span",{ref:Z,className:"input-sizer","aria-hidden":!0,tabIndex:-1}))};var m=n(79789),g=n(36674),v=n(70163),f=n(35932);const b=e=>o.iv`
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
`,y=e=>o.iv`
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
`,Z=e=>o.iv`
  display: flex;
  align-items: center;
  padding-left: ${2*e.gridUnit}px;

  & .fave-unfave-icon {
    padding: 0 ${e.gridUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,x=e=>o.iv`
  margin-left: ${2*e.gridUnit}px;
`,S=e=>{let{editableTitleProps:t,showTitlePanelItems:n,certificatiedBadgeProps:a,showFaveStar:i,faveStarProps:c,titlePanelAdditionalItems:u,rightPanelAdditionalItems:p,additionalActionsMenu:S,menuDropdownProps:C,tooltipProps:w}=e;const T=(0,l.Fg)();return(0,o.tZ)("div",{css:y,className:"header-with-actions"},(0,o.tZ)("div",{className:"title-panel"},(0,o.tZ)(h,t),n&&(0,o.tZ)("div",{css:Z},(null==a?void 0:a.certifiedBy)&&(0,o.tZ)(m.Z,a),i&&(0,o.tZ)(g.Z,c),u)),(0,o.tZ)("div",{className:"right-button-panel"},p,(0,o.tZ)("div",{css:x},(0,o.tZ)(d.Gj,r()({trigger:["click"],overlay:S},C),(0,o.tZ)(f.Z,{css:b,buttonStyle:"tertiary","aria-label":(0,s.t)("Menu actions trigger"),tooltip:null==w?void 0:w.text,placement:null==w?void 0:w.placement},(0,o.tZ)(v.Z.MoreHoriz,{iconColor:T.colors.primary.dark2,iconSize:"l"}))))))}},7070:(e,t,n)=>{n.d(t,{x:()=>j,Z:()=>K});var a,r,i=n(11965),o=n(41609),l=n.n(o),s=n(67294),d=n(28216),c=n(75049),u=n(51995),p=n(93185),h=n(85716),m=n(55867),g=n(70163),v=n(73192),f=n(83862),b=n(87253),y=n(54076),Z=n(88694),x=n(17198),S=n(78580),C=n.n(S),w=n(98286),T=n(61358),k=n(29487),$=n(98978),D=n(87858),_=n(14114);!function(e){e.DASHBOARDS="dashboards",e.CHARTS="charts"}(a||(a={})),function(e){e.TEXT="TEXT",e.PNG="PNG",e.CSV="CSV"}(r||(r={}));var M=n(34858),I=n(67852);const F=["pivot_table","pivot_table_v2","table","paired_ttest"],E={crontab:"0 12 * * 1"},R={},O=(0,_.ZP)((function(e){var t;let{onHide:n,show:a=!1,dashboardId:o,chart:l,userId:c,userEmail:u,creationMethod:p,dashboardName:h,chartName:v}=e;const f=null==l||null==(t=l.sliceFormData)?void 0:t.viz_type,b=!!l,y=b&&f&&C()(F).call(F,f),Z=y?r.TEXT:r.PNG,x=h||v,S=(0,s.useMemo)((()=>({...E,name:x?(0,m.t)("Weekly Report for %s",x):(0,m.t)("Weekly Report")})),[x]),_=(0,s.useCallback)(((e,t)=>"reset"===t?S:{...e,...t}),[S]),[O,A]=(0,s.useReducer)(_,S),[N,U]=(0,s.useState)(),z=(0,d.I0)(),P=(0,d.v9)((e=>{const t=o?j.DASHBOARDS:j.CHARTS;return(0,M._l)(e,t,o||(null==l?void 0:l.id))||R})),L=P&&Object.keys(P).length;(0,s.useEffect)((()=>{A(L?P:"reset")}),[L,P]);const B=(0,i.tZ)(I.Mv,null,(0,i.tZ)(g.Z.Calendar,null),(0,i.tZ)("span",{className:"text"},L?(0,m.t)("Edit email report"):(0,m.t)("Schedule a new email report"))),q=(0,i.tZ)(s.Fragment,null,(0,i.tZ)(I.OD,{key:"back",onClick:n},(0,m.t)("Cancel")),(0,i.tZ)(I.OD,{key:"submit",buttonStyle:"primary",onClick:async()=>{const e={type:"Report",active:!0,force_screenshot:!1,creation_method:p,dashboard:o,chart:null==l?void 0:l.id,owners:[c],recipients:[{recipient_config_json:{target:u},type:"Email"}],name:O.name,description:O.description,crontab:O.crontab,report_format:O.report_format||Z,timezone:O.timezone};A({isSubmitting:!0,error:void 0});try{L?await z((0,T.Me)(O.id,e)):await z((0,T.cq)(e)),n()}catch(e){const{error:t}=await(0,w.O$)(e);A({error:t})}A({isSubmitting:!1})},disabled:!O.name,loading:O.isSubmitting},L?(0,m.t)("Save"):(0,m.t)("Add"))),V=(0,i.tZ)(s.Fragment,null,(0,i.tZ)(I.aQ,null,(0,i.tZ)("h4",null,(0,m.t)("Message content"))),(0,i.tZ)("div",{className:"inline-container"},(0,i.tZ)(I.E5,{onChange:e=>{A({report_format:e.target.value})},value:O.report_format||Z},y&&(0,i.tZ)(I.Ks,{value:r.TEXT},(0,m.t)("Text embedded in email")),(0,i.tZ)(I.Ks,{value:r.PNG},(0,m.t)("Image (PNG) embedded in email")),(0,i.tZ)(I.Ks,{value:r.CSV},(0,m.t)("Formatted CSV attached in email")))));return(0,i.tZ)(I.oA,{show:a,onHide:n,title:B,footer:q,width:"432",centered:!0},(0,i.tZ)(I.zV,null,(0,i.tZ)(D.Z,{id:"name",name:"name",value:O.name||"",placeholder:S.name,required:!0,validationMethods:{onChange:e=>{let{target:t}=e;return A({name:t.value})}},label:(0,m.t)("Report Name")}),(0,i.tZ)(D.Z,{id:"description",name:"description",value:(null==O?void 0:O.description)||"",validationMethods:{onChange:e=>{let{target:t}=e;A({description:t.value})}},label:(0,m.t)("Description"),placeholder:(0,m.t)("Include a description that will be sent with your report"),css:I.gt})),(0,i.tZ)(I.nn,null,(0,i.tZ)(I.oo,null,(0,i.tZ)("h4",{css:e=>(0,I.kq)(e)},(0,m.t)("Schedule")),(0,i.tZ)("p",null,(0,m.t)("A screenshot of the dashboard will be sent to your email at"))),(0,i.tZ)(I.xZ,{clearButton:!1,value:O.crontab||"0 12 * * 1",setValue:e=>{A({crontab:e})},onError:U}),(0,i.tZ)(I.G,null,N),(0,i.tZ)("div",{className:"control-label",css:e=>(0,I.Su)(e)},(0,m.t)("Timezone")),(0,i.tZ)($.Z,{timezone:O.timezone,onTimezoneChange:e=>{A({timezone:e})}}),b&&V),O.error&&(0,i.tZ)(k.Z,{type:"error",css:e=>(0,I.gH)(e),message:L?(0,m.t)("Failed to update report"):(0,m.t)("Failed to create report"),description:O.error}))}));var A=n(96022);const N=(0,c.I)(),U=e=>i.iv`
  color: ${e.colors.error.base};
`,z=e=>i.iv`
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
`,P=e=>i.iv`
  &:hover {
    color: ${e.colors.grayscale.dark1};
    background-color: ${e.colors.secondary.light5};
  }
`,L=u.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > *:first-child {
    margin-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,B=N.get("report-modal.dropdown.item.icon");var j;!function(e){e.CHARTS="charts",e.DASHBOARDS="dashboards"}(j||(j={}));const q={};var V={name:"1e1ncky",styles:"border:none"},H={name:"833hqy",styles:"width:200px"};function K(e){let{dashboardId:t,chart:n,useTextMenu:a=!1,setShowReportSubMenu:r,setIsDropdownVisible:o,isDropdownVisible:c}=e;const S=(0,d.I0)(),C=(0,d.v9)((e=>{const a=t?j.DASHBOARDS:j.CHARTS;return(0,M._l)(e,a,t||(null==n?void 0:n.id))||q})),w=(null==C?void 0:C.active)||!1,k=(0,d.v9)((e=>e.user)),$=()=>!!(0,p.c)(p.T.ALERT_REPORTS)&&(!(null==k||!k.userId)&&(!!(t||null!=n&&n.id)&&Object.keys(k.roles||[]).map((e=>k.roles[e].filter((e=>"menu_access"===e[0]&&"Manage"===e[1])))).some((e=>e.length>0)))),[D,_]=(0,s.useState)(null),I=(0,u.Fg)(),F=(0,h.D)(t),[E,R]=(0,s.useState)(!1),N=async(e,t)=>{null!=e&&e.id&&S((0,T.M)(e,t))},K=$()&&!!(t&&F!==t||null!=n&&n.id);(0,s.useEffect)((()=>{K&&S((0,T.Aw)({userId:k.userId,filterField:t?"dashboard_id":"chart_id",creationMethod:t?"dashboards":"charts",resourceId:t||(null==n?void 0:n.id)}))}),[]);const W=C&&r&&$();(0,s.useEffect)((()=>{W?r(!0):!C&&r&&r(!1)}),[C]);const G=()=>{o&&(o(!1),R(!0))};return(0,i.tZ)(s.Fragment,null,$()&&(0,i.tZ)(s.Fragment,null,(0,i.tZ)(O,{userId:k.userId,show:E,onHide:()=>R(!1),userEmail:k.email,dashboardId:t,chart:n,creationMethod:t?j.DASHBOARDS:j.CHARTS}),a?l()(C)?(0,i.tZ)(f.v,{selectable:!1,css:z},(0,i.tZ)(f.v.Item,{onClick:G},B?(0,i.tZ)(L,null,(0,i.tZ)("div",null,(0,m.t)("Set up an email report")),(0,i.tZ)(B,null)):(0,m.t)("Set up an email report")),(0,i.tZ)(f.v.Divider,null)):c&&(0,i.tZ)(f.v,{selectable:!1,css:V},(0,i.tZ)(f.v.Item,{css:P,onClick:()=>N(C,!w)},(0,i.tZ)(A.ZN,null,(0,i.tZ)(b.ZP,{checked:w,onChange:y.EI}),(0,m.t)("Email reports active"))),(0,i.tZ)(f.v.Item,{css:P,onClick:G},(0,m.t)("Edit email report")),(0,i.tZ)(f.v.Item,{css:P,onClick:()=>{o&&(o(!1),_(C))}},(0,m.t)("Delete email report"))):l()(C)?(0,i.tZ)("span",{role:"button",title:(0,m.t)("Schedule email report"),tabIndex:0,className:"action-button action-schedule-report",onClick:()=>R(!0)},(0,i.tZ)(g.Z.Calendar,null)):(0,i.tZ)(s.Fragment,null,(0,i.tZ)(Z.$i,{overlay:(0,i.tZ)(f.v,{selectable:!1,css:H},(0,i.tZ)(f.v.Item,null,(0,m.t)("Email reports active"),(0,i.tZ)(v.r,{checked:w,onClick:e=>N(C,e),size:"small",css:(0,i.iv)({marginLeft:2*I.gridUnit},"","")})),(0,i.tZ)(f.v.Item,{onClick:()=>R(!0)},(0,m.t)("Edit email report")),(0,i.tZ)(f.v.Item,{onClick:()=>_(C),css:U},(0,m.t)("Delete email report"))),trigger:["click"],getPopupContainer:e=>e.closest(".action-button")},(0,i.tZ)("span",{role:"button",className:"action-button action-schedule-report",tabIndex:0},(0,i.tZ)(g.Z.Calendar,null)))),D&&(0,i.tZ)(x.Z,{description:(0,m.t)("This action will permanently delete %s.",null==D?void 0:D.name),onConfirm:()=>{D&&(async e=>{await S((0,T.MZ)(e)),_(null)})(D)},onHide:()=>_(null),open:!0,title:(0,m.t)("Delete Report?")})))}},67852:(e,t,n)=>{n.d(t,{E5:()=>S,G:()=>g,Ks:()=>x,Mv:()=>p,OD:()=>f,Su:()=>b,aQ:()=>Z,gH:()=>C,gt:()=>v,kq:()=>y,nn:()=>u,oA:()=>d,oo:()=>h,xZ:()=>m,zV:()=>c});var a=n(51995),r=n(11965),i=n(74069),o=n(35932),l=n(87183),s=n(9433);const d=(0,a.iK)(i.Z)`
  .ant-modal-body {
    padding: 0;
  }
`,c=a.iK.div`
  padding: ${e=>{let{theme:t}=e;return`${3*t.gridUnit}px ${4*t.gridUnit}px ${2*t.gridUnit}px`}};
  label {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }
`,u=a.iK.div`
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  padding: ${e=>{let{theme:t}=e;return`${4*t.gridUnit}px ${4*t.gridUnit}px ${6*t.gridUnit}px`}};
  .ant-select {
    width: 100%;
  }
  .control-label {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }
`,p=a.iK.span`
  span {
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
`,h=a.iK.div`
  margin-bottom: ${e=>{let{theme:t}=e;return 7*t.gridUnit}}px;

  h4 {
    margin-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  }
`,m=(0,a.iK)(s.CronPicker)`
  margin-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  width: ${e=>{let{theme:t}=e;return 120*t.gridUnit}}px;
`,g=a.iK.p`
  color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
`,v=r.iv`
  margin-bottom: 0;
`,f=(0,a.iK)(o.Z)`
  width: ${e=>{let{theme:t}=e;return 40*t.gridUnit}}px;
`,b=e=>r.iv`
  margin: ${3*e.gridUnit}px 0 ${2*e.gridUnit}px;
`,y=e=>r.iv`
  margin: ${3*e.gridUnit}px 0;
`,Z=a.iK.div`
  margin: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px 0
    ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
`,x=(0,a.iK)(l.Y)`
  display: block;
  line-height: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
`,S=(0,a.iK)(l.Y.Group)`
  margin-left: ${e=>{let{theme:t}=e;return.5*t.gridUnit}}px;
`,C=e=>r.iv`
  border: ${e.colors.error.base} 1px solid;
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px;
  margin-top: 0;
  color: ${e.colors.error.dark2};
  .ant-alert-message {
    font-size: ${e.typography.sizes.m}px;
    font-weight: bold;
  }
  .ant-alert-description {
    font-size: ${e.typography.sizes.m}px;
    line-height: ${4*e.gridUnit}px;
    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`},73192:(e,t,n)=>{n.d(t,{r:()=>l}),n(67294);var a=n(51995),r=n(40987),i=n(11965);const o=(0,a.iK)(r.Z)`
  .ant-switch-checked {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  }
`,l=e=>(0,i.tZ)(o,e)},98978:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(11965),r=n(67294),i=n(80008),o=n.n(i),l=n(55867),s=n(4715);const d="GMT Standard Time",c="400px",u={"-300-240":["Eastern Standard Time","Eastern Daylight Time"],"-360-300":["Central Standard Time","Central Daylight Time"],"-420-360":["Mountain Standard Time","Mountain Daylight Time"],"-420-420":["Mountain Standard Time - Phoenix","Mountain Standard Time - Phoenix"],"-480-420":["Pacific Standard Time","Pacific Daylight Time"],"-540-480":["Alaska Standard Time","Alaska Daylight Time"],"-600-600":["Hawaii Standard Time","Hawaii Daylight Time"],60120:["Central European Time","Central European Daylight Time"],"00":[d,d],"060":["GMT Standard Time - London","British Summer Time"]},p=o()(),h=o()([2021,1]),m=o()([2021,7]),g=e=>h.tz(e).utcOffset().toString()+m.tz(e).utcOffset().toString(),v=e=>{var t,n;const a=g(e);return(p.tz(e).isDST()?null==(t=u[a])?void 0:t[1]:null==(n=u[a])?void 0:n[0])||e},f=o().tz.countries().map((e=>o().tz.zonesForCountry(e,!0))).flat(),b=[];f.forEach((e=>{b.find((t=>g(t.name)===g(e.name)))||b.push(e)}));const y=b.map((e=>({label:`GMT ${o().tz(p,e.name).format("Z")} (${v(e.name)})`,value:e.name,offsets:g(e.name),timezoneName:e.name}))),Z=(e,t)=>o().tz(p,e.timezoneName).utcOffset()-o().tz(p,t.timezoneName).utcOffset();function x(e){let{onTimezoneChange:t,timezone:n,minWidth:i=c}=e;const d=(0,r.useMemo)((()=>(e=>{var t;return(null==(t=y.find((t=>t.offsets===g(e))))?void 0:t.value)||"Africa/Abidjan"})(n||o().tz.guess())),[n]);return(0,r.useEffect)((()=>{n!==d&&t(d)}),[d,t,n]),(0,a.tZ)(s.Ph,{ariaLabel:(0,l.t)("Timezone selector"),css:(0,a.iv)({minWidth:i},"",""),onChange:e=>t(e),value:d,options:y,sortComparator:Z})}y.sort(Z)},87915:(e,t,n)=>{n.d(t,{U:()=>a,g:()=>r});const a=(e,t)=>Object.values(e).filter((e=>e[t])).reduce(((e,n)=>({...e,[n.id]:t?n[t]:n})),{}),r=e=>{let{chartConfiguration:t,nativeFilters:n,dataMask:a,allSliceIds:r}=e;const i={};return Object.values(a).forEach((e=>{var a,o,l,s,d,c;let{id:u,extraFormData:p}=e;const h=null!=(a=null!=(o=null!=(l=null==n||null==(s=n[u])?void 0:s.chartsInScope)?l:null==t||null==(d=t[u])||null==(c=d.crossFilters)?void 0:c.chartsInScope)?o:r)?a:[];i[u]={scope:h,values:p}})),i}},91914:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(78580),r=n.n(a),i=n(1510),o=n(99543);function l(e){return Object.entries(e).map((e=>{let[t,n]=e;return{col:t,op:Array.isArray(n)?"IN":"==",val:n}})).filter((e=>null!==e.val))}var s=n(87915);const d={},c={};function u(e){let{chart:t,filters:n,nativeFilters:a,chartConfiguration:u,colorScheme:p,colorNamespace:h,sliceId:m,dataMask:g,extraControls:v,labelColors:f,sharedLabelColors:b,allSliceIds:y}=e;const Z=c[m];if(d[m]===n&&(0,o.JB)(null==Z?void 0:Z.color_scheme,p,{ignoreUndefined:!0})&&(0,o.JB)(null==Z?void 0:Z.color_namespace,h,{ignoreUndefined:!0})&&(0,o.JB)(null==Z?void 0:Z.label_colors,f,{ignoreUndefined:!0})&&(0,o.JB)(null==Z?void 0:Z.shared_label_colors,b,{ignoreUndefined:!0})&&Z&&(0,o.JB)(null==Z?void 0:Z.dataMask,g,{ignoreUndefined:!0})&&(0,o.JB)(null==Z?void 0:Z.extraControls,v,{ignoreUndefined:!0}))return Z;let x={};const S=(0,s.g)({chartConfiguration:u,dataMask:g,nativeFilters:a,allSliceIds:y}),C=Object.entries(S).filter((e=>{let[,{scope:n}]=e;return r()(n).call(n,t.id)})).map((e=>{let[t]=e;return t}));C.length&&(x={extra_form_data:(0,i.vk)(g,C)});const w={...t.form_data,label_colors:f,shared_label_colors:b,...p&&{color_scheme:p},extra_filters:l(n),...x,...v};return d[m]=n,c[m]={...w,dataMask:g,extraControls:v},w}},66124:(e,t,n)=>{n.d(t,{X:()=>m,c:()=>g});var a=n(4788),r=n.n(a),i=n(78580),o=n.n(i),l=n(67294),s=n(51995),d=n(88889),c=n(11965),u=n(50909),p=n(54076),h=n(61587);const m=s.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: ${2*t.gridUnit}px;\n\n    span {\n      flex-shrink: 0;\n    }\n  `}}
`,g=e=>{let{data:t,datasourceId:n,onInputChange:a,columnNames:i,columnTypes:s,isLoading:g}=e;const v=(0,h.W)(n),f=r()(i,s).filter((e=>{let[t,n]=e;return n===d.Z.TEMPORAL&&t&&!o()(v).call(v,t)})).map((e=>{let[t]=e;return t})),b=(0,l.useMemo)((()=>(0,p.cD)(t,f)),[t,f]);return(0,c.tZ)(m,null,(0,c.tZ)(u.HS,{onChangeHandler:a}),(0,c.tZ)("div",{css:c.iv`
          display: flex;
          align-items: center;
        `},(0,c.tZ)(u.uy,{data:t,loading:g}),(0,c.tZ)(u.m,{data:b,columns:i})))}},5462:(e,t,n)=>{n.d(t,{T:()=>d});var a=n(67294),r=n(55867),i=n(76962),o=n(50909),l=n(66124),s=n(11965);const d=e=>{let{data:t,colnames:n,coltypes:d,datasourceId:c,dataSize:u=50,isVisible:p}=e;const[h,m]=(0,a.useState)(""),g=(0,o._q)(n,d,t,c,p),v=(0,o.C4)(h,t);return(0,s.tZ)(a.Fragment,null,(0,s.tZ)(l.c,{data:v,columnNames:n,columnTypes:d,datasourceId:c,onInputChange:e=>m(e),isLoading:!1}),(0,s.tZ)(i.Z,{columns:g,data:v,pageSize:u,noDataText:(0,r.t)("No results"),emptyWrapperType:i.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0}))}},21496:(e,t,n)=>{n.d(t,{c9:()=>F,Tg:()=>T});var a,r=n(67294),i=n(51995),o=n(93185),l=n(55867),s=n(70163),d=n(71262),c=n(91877),u=n(61337);!function(e){e.Results="results",e.Samples="samples"}(a||(a={}));var p=n(11064),h=n(55786),m=n(38703),g=n(94301),v=n(52256),f=n(98286),b=n(5462),y=n(66124),Z=n(11965);const x=i.iK.pre`
  margin-top: ${e=>{let{theme:t}=e;return 4*t.gridUnit+"px"}};
`,S=new WeakMap,C=e=>{var t;let{isRequest:n,queryFormData:a,queryForce:i,ownState:o,errorMessage:s,actions:d,isVisible:c,dataSize:u=50}=e;const C=(0,p.Z)().get((null==a?void 0:a.viz_type)||(null==a?void 0:a.vizType)),[w,T]=(0,r.useState)([]),[k,$]=(0,r.useState)(!0),[D,_]=(0,r.useState)(""),M=null!=(t=null==C?void 0:C.queryObjectCount)?t:1;if((0,r.useEffect)((()=>{s||(n&&S.has(a)&&(T((0,h.Z)(S.get(a))),_(""),i&&d&&d.setForceQuery(!1),$(!1)),n&&!S.has(a)&&($(!0),(0,v.getChartDataRequest)({formData:a,force:i,resultFormat:"json",resultType:"results",ownState:o}).then((e=>{let{json:t}=e;T((0,h.Z)(t.result)),_(""),S.set(a,t.result),i&&d&&d.setForceQuery(!1)})).catch((e=>{(0,f.O$)(e).then((e=>{let{error:t,message:n}=e;_(t||n||(0,l.t)("Sorry, an error occurred"))}))})).finally((()=>{$(!1)}))))}),[a,n]),(0,r.useEffect)((()=>{s&&$(!1)}),[s]),k)return Array(M).fill((0,Z.tZ)(m.Z,null));if(s){const e=(0,l.t)("Run a query to display results");return Array(M).fill((0,Z.tZ)(g.x3,{image:"document.svg",title:e}))}if(D){const e=(0,Z.tZ)(r.Fragment,null,(0,Z.tZ)(y.c,{data:[],columnNames:[],columnTypes:[],datasourceId:a.datasource,onInputChange:()=>{},isLoading:!1}),(0,Z.tZ)(x,null,D));return Array(M).fill(e)}if(0===w.length){const e=(0,l.t)("No results were returned for this query");return Array(M).fill((0,Z.tZ)(g.x3,{image:"document.svg",title:e}))}return w.slice(0,M).map(((e,t)=>(0,Z.tZ)(b.T,{data:e.data,colnames:e.colnames,coltypes:e.coltypes,dataSize:u,datasourceId:a.datasource,key:t,isVisible:c})))},w=i.iK.div`
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
`,T=e=>{let{isRequest:t,queryFormData:n,queryForce:r,ownState:i,errorMessage:o,actions:s,isVisible:c,dataSize:u=50}=e;const p=C({errorMessage:o,queryFormData:n,queryForce:r,ownState:i,isRequest:t,actions:s,dataSize:u,isVisible:c});if(1===p.length)return(0,Z.tZ)(w,null,p[0]);const h=p.map(((e,t)=>0===t?(0,Z.tZ)(d.ZP.TabPane,{tab:(0,l.t)("Results"),key:a.Results},e):(0,Z.tZ)(d.ZP.TabPane,{tab:(0,l.t)("Results %s",t+1),key:`${a.Results} ${t+1}`},e)));return(0,Z.tZ)(w,null,(0,Z.tZ)(d.ZP,{fullWidth:!1},h))};var k=n(76962),$=n(50909);const D=i.iK.pre`
  margin-top: ${e=>{let{theme:t}=e;return 4*t.gridUnit+"px"}};
`,_=new WeakSet,M=e=>{let{isRequest:t,datasource:n,queryForce:a,actions:i,dataSize:o=50,isVisible:s}=e;const[d,c]=(0,r.useState)(""),[u,p]=(0,r.useState)([]),[f,b]=(0,r.useState)([]),[x,S]=(0,r.useState)([]),[C,w]=(0,r.useState)(!1),[T,M]=(0,r.useState)(""),I=(0,r.useMemo)((()=>`${n.id}__${n.type}`),[n]);(0,r.useEffect)((()=>{t&&a&&_.delete(n),t&&!_.has(n)&&(w(!0),(0,v.getDatasourceSamples)(n.type,n.id,a,{}).then((e=>{p((0,h.Z)(e.data)),b((0,h.Z)(e.colnames)),S((0,h.Z)(e.coltypes)),M(""),_.add(n),a&&i&&i.setForceQuery(!1)})).catch((e=>{p([]),b([]),S([]),M(`${e.name}: ${e.message}`)})).finally((()=>{w(!1)})))}),[n,t,a]);const F=(0,$._q)(f,x,u,I,s),E=(0,$.C4)(d,u);if(C)return(0,Z.tZ)(m.Z,null);if(T)return(0,Z.tZ)(r.Fragment,null,(0,Z.tZ)(y.c,{data:E,columnNames:f,columnTypes:x,datasourceId:I,onInputChange:e=>c(e),isLoading:C}),(0,Z.tZ)(D,null,T));if(0===u.length){const e=(0,l.t)("No samples were returned for this dataset");return(0,Z.tZ)(g.x3,{image:"document.svg",title:e})}return(0,Z.tZ)(r.Fragment,null,(0,Z.tZ)(y.c,{data:E,columnNames:f,columnTypes:x,datasourceId:I,onInputChange:e=>c(e),isLoading:C}),(0,Z.tZ)(k.Z,{columns:F,data:E,pageSize:o,noDataText:(0,l.t)("No results"),emptyWrapperType:k.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0}))},I=i.iK.div`
  ${e=>{let{theme:t}=e;return`\n    position: relative;\n    background-color: ${t.colors.grayscale.light5};\n    z-index: 5;\n    overflow: hidden;\n\n    .ant-tabs {\n      height: 100%;\n    }\n\n    .ant-tabs-content-holder {\n      height: 100%;\n    }\n\n    .ant-tabs-content {\n      height: 100%;\n    }\n\n    .ant-tabs-tabpane {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n\n      .table-condensed {\n        height: 100%;\n        overflow: auto;\n        margin-bottom: ${4*t.gridUnit}px;\n\n        .table {\n          margin-bottom: ${2*t.gridUnit}px;\n        }\n      }\n\n      .pagination-container > ul[role='navigation'] {\n        margin-top: 0;\n      }\n    }\n  `}}
`,F=e=>{let{queryFormData:t,datasource:n,queryForce:p,onCollapseChange:h,chartStatus:m,ownState:g,errorMessage:v,actions:f}=e;const b=(0,i.Fg)(),[x,S]=(0,r.useState)(a.Results),[w,T]=(0,r.useState)({results:!1,samples:!1}),[k,$]=(0,r.useState)(!(0,c.c)(o.T.DATAPANEL_CLOSED_BY_DEFAULT)&&(0,u.rV)(u.dR.is_datapanel_open,!1));(0,r.useEffect)((()=>{(0,c.c)(o.T.DATAPANEL_CLOSED_BY_DEFAULT)||(0,u.LS)(u.dR.is_datapanel_open,k)}),[k]),(0,r.useEffect)((()=>{k||T({results:!1,samples:!1}),k&&x.startsWith(a.Results)&&"rendered"===m&&T({results:!0,samples:!1}),k&&x===a.Samples&&T({results:!1,samples:!0})}),[k,x,m]);const D=(0,r.useCallback)((e=>{h(e),$(e)}),[h]),_=(0,r.useCallback)(((e,t)=>{k?e===x&&(t.preventDefault(),D(!1)):D(!0),S(e)}),[x,D,k]),F=(0,r.useMemo)((()=>{const e=k?(0,Z.tZ)(s.Z.CaretUp,{iconColor:b.colors.grayscale.base,"aria-label":(0,l.t)("Collapse data panel")}):(0,Z.tZ)(s.Z.CaretDown,{iconColor:b.colors.grayscale.base,"aria-label":(0,l.t)("Expand data panel")});return(0,Z.tZ)(y.X,null,k?(0,Z.tZ)("span",{role:"button",tabIndex:0,onClick:()=>D(!1)},e):(0,Z.tZ)("span",{role:"button",tabIndex:0,onClick:()=>D(!0)},e))}),[D,k,b.colors.grayscale.base]),E=C({errorMessage:v,queryFormData:t,queryForce:p,ownState:g,isRequest:w.results,actions:f,isVisible:a.Results===x}).map(((e,t)=>0===t?(0,Z.tZ)(d.ZP.TabPane,{tab:(0,l.t)("Results"),key:a.Results},e):t>0?(0,Z.tZ)(d.ZP.TabPane,{tab:(0,l.t)("Results %s",t+1),key:`${a.Results} ${t+1}`},e):null));return(0,Z.tZ)(I,null,(0,Z.tZ)(d.ZP,{fullWidth:!1,tabBarExtraContent:F,activeKey:k?x:"",onTabClick:_},E,(0,Z.tZ)(d.ZP.TabPane,{tab:(0,l.t)("Samples"),key:a.Samples},(0,Z.tZ)(M,{datasource:n,queryForce:p,isRequest:w.samples,actions:f,isVisible:a.Samples===x}))))}},15423:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(67294),r=n(51995),i=n(55786),o=n(55867),l=n(38703),s=n(98286),d=n(52256),c=n(85626),u=n(11965);const p=r.iK.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,h=e=>{const[t,n]=(0,a.useState)([]),[r,h]=(0,a.useState)(!1),[m,g]=(0,a.useState)(null);return(0,a.useEffect)((()=>{h(!0),(0,d.getChartDataRequest)({formData:e.latestQueryFormData,resultFormat:"json",resultType:"query"}).then((e=>{let{json:t}=e;n((0,i.Z)(t.result)),h(!1),g(null)})).catch((e=>{(0,s.O$)(e).then((t=>{let{error:n,message:a}=t;g(n||a||e.statusText||(0,o.t)("Sorry, An error occurred")),h(!1)}))}))}),[JSON.stringify(e.latestQueryFormData)]),r?(0,u.tZ)(l.Z,null):m?(0,u.tZ)("pre",null,m):(0,u.tZ)(p,null,t.map((e=>e.query?(0,u.tZ)(c.Z,{sql:e.query,language:e.language||void 0}):null)))}},53579:(e,t,n)=>{n.d(t,{S:()=>p});var a=n(67294),r=n(51995),i=n(55867),o=n(11965),l=n(29487),s=n(67697),d=n(32871),c=n(42190),u=n(6412);const p=e=>{let{dataset:t,datasetId:n}=e;const p=(0,r.Fg)(),[h,m]=(0,a.useState)(),[g,v]=(0,a.useState)(t?c.ni.COMPLETE:c.ni.LOADING);return(0,a.useEffect)((()=>{!t&&n&&(0,u.e)({endpoint:`/api/v1/dataset/${n}`}).then((e=>{let{json:{result:t}}=e;m(t),v(c.ni.COMPLETE)})).catch((()=>{v(c.ni.ERROR)}))}),[n,t]),{metadataBar:(0,a.useMemo)((()=>{const e=[],n=t||h;if(n){var a,r;const{changed_on_humanized:t,created_on_humanized:o,description:l,table_name:s,changed_by:c,created_by:u,owners:p}=n,h=(0,i.t)("Not available"),m=`${null!=(a=null==u?void 0:u.first_name)?a:""} ${null!=(r=null==u?void 0:u.last_name)?r:""}`.trim()||h,g=c?`${c.first_name} ${c.last_name}`:h,v=(null==p?void 0:p.length)>0?p.map((e=>`${e.first_name} ${e.last_name}`)):[h];e.push({type:d.p.TABLE,title:s}),e.push({type:d.p.LAST_MODIFIED,value:t,modifiedBy:g}),e.push({type:d.p.OWNER,createdBy:m,owners:v,createdOn:o}),l&&e.push({type:d.p.DESCRIPTION,value:l})}return(0,o.tZ)("div",{css:o.iv`
          display: flex;
          margin-bottom: ${4*p.gridUnit}px;
        `},g===c.ni.COMPLETE&&(0,o.tZ)(s.ZP,{items:e,tooltipPlacement:"bottom"}),g===c.ni.ERROR&&(0,o.tZ)(l.Z,{type:"error",message:(0,i.t)("There was an error loading the dataset metadata")}))}),[t,h,g,p.gridUnit]),status:g}}},6954:(e,t,n)=>{n.d(t,{z:()=>l});var a=n(67294),r=n(14670),i=n.n(r);const o=new(n(11133).g0)("tab_id_channel");function l(){const[e,t]=(0,a.useState)();return(0,a.useEffect)((()=>{if(!function(){try{return window.localStorage&&window.sessionStorage}catch(e){return!1}}())return void(e||t(i().generate()));const n=()=>{const e=window.localStorage.getItem("last_tab_id"),n=String(e?Number.parseInt(e,10)+1:1);window.sessionStorage.setItem("tab_id",n),window.localStorage.setItem("last_tab_id",n),t(n)},a=window.sessionStorage.getItem("tab_id");a?(o.postMessage({type:"REQUESTING_TAB_ID",tabId:a}),t(a)):n(),o.onmessage=t=>{if(t.tabId===e)if("REQUESTING_TAB_ID"===t.type){const e={type:"TAB_ID_DENIED",tabId:t.tabId};o.postMessage(e)}else"TAB_ID_DENIED"===t.type&&n()}}),[e]),e}},6412:(e,t,n)=>{n.d(t,{e:()=>o,f:()=>i});var a=n(31069),r=n(65108);const i=new Map,o=(0,r.g)(a.Z.get,i,(e=>{let{endpoint:t}=e;return t||""}))},56727:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(78580),r=n.n(a),i=n(46926),o=n.n(i),l=n(21804),s=n.n(l),d=n(55867),c=n(51995),u=n(72570);function p(e,t,n){return void 0===n&&(n=!1),a=>{const i=n?document.querySelector(e):a.currentTarget.closest(e);return i?o().toJpeg(i,{quality:.95,bgcolor:c.K6.colors.grayscale.light4,filter:e=>{var t;return"string"!=typeof e.className||"mapboxgl-control-container"!==e.className&&!r()(t=e.className).call(t,"ant-dropdown")}}).then((e=>{const n=document.createElement("a");n.download=`${function(e,t){return void 0===t&&(t=new Date),`${s()(e)}-${t.toISOString().replace(/[: ]/g,"-")}`}(t)}.jpg`,n.href=e,n.click()})).catch((e=>{console.error("Creating image failed",e)})):(0,u.Dz)((0,d.t)("Image download failed, please refresh and try again."))}}},75701:(e,t,n)=>{n.d(t,{J:()=>o});var a=n(55867);const r=(0,a.t)("Create chart"),i=(0,a.t)("Update chart"),o=e=>(0,a.t)("Select values in highlighted field(s) in the control panel. Then run the query by clicking on the %s button.",`"${e?r:i}"`)},71894:(e,t,n)=>{n.d(t,{b:()=>a});const a=()=>{var e,t;return null==(e=window)||null==(t=e.navigator)?void 0:t.webdriver}},99232:(e,t,n)=>{n.d(t,{f:()=>l});var a=n(72813),r=n(61641),i=n(69856),o=n(56565);const l=function(e,t){let n;var l;return void 0===t&&(t=r.P.WHERE),n=(0,a.GA)(e.col)?{expressionType:"SQL",clause:t,sqlExpression:(0,o.c)({expressionType:r.v.SIMPLE,subject:`(${e.col.sqlExpression})`,operator:e.op,comparator:"val"in e?e.val:void 0})}:{expressionType:"SIMPLE",clause:t,operator:e.op,operatorId:null==(l=Object.entries(i.LT).find((t=>t[1].operation===e.op)))?void 0:l[0],subject:e.col,comparator:"val"in e?e.val:void 0},e.isExtra&&Object.assign(n,{isExtra:!0,filterOptionName:`filter_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}),n}}}]);
//# sourceMappingURL=aaacfdfd56f0fcbae6b8.chunk.js.map