"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4489],{18239:(e,t,r)=>{r.d(t,{Z:()=>J});var a=r(37703),n=r(14890),i=r(52256),o=r(97381),s=r(5872),l=r.n(s),d=r(45697),c=r.n(d),u=r(67294),p=r(61988),h=r(51995),m=r(68492),g=r(55786),b=r(91877),y=r(93185),f=r(9531),v=r(38703),Z=r(94301),S=r(57902),x=r(3741),C=r(27600),w=r(23525),T=r(42190),k=r(18446),$=r.n(k),R=r(11865),_=r.n(R),D=r(16355),I=r(88274),F=r(11965);const E={annotationData:c().object,actions:c().object,chartId:c().number.isRequired,datasource:c().object,initialValues:c().object,formData:c().object.isRequired,latestQueryFormData:c().object,labelColors:c().object,sharedLabelColors:c().object,height:c().number,width:c().number,setControlValue:c().func,vizType:c().string.isRequired,triggerRender:c().bool,chartAlert:c().string,chartStatus:c().string,queriesResponse:c().arrayOf(c().object),triggerQuery:c().bool,chartIsStale:c().bool,addFilter:c().func,setDataMask:c().func,onFilterMenuOpen:c().func,onFilterMenuClose:c().func,ownState:c().object,postTransformProps:c().func,source:c().oneOf(["dashboard","explore"])},M={},q=[D.cg.INTERACTIVE_CHART],z={addFilter:()=>M,onFilterMenuOpen:()=>M,onFilterMenuClose:()=>M,initialValues:M,setControlValue(){},triggerRender:!1};class U extends u.Component{constructor(e){super(e),this.hasQueryResponseChange=!1,this.handleAddFilter=this.handleAddFilter.bind(this),this.handleRenderSuccess=this.handleRenderSuccess.bind(this),this.handleRenderFailure=this.handleRenderFailure.bind(this),this.handleSetControlValue=this.handleSetControlValue.bind(this),this.hooks={onAddFilter:this.handleAddFilter,onError:this.handleRenderFailure,setControlValue:this.handleSetControlValue,onFilterMenuOpen:this.props.onFilterMenuOpen,onFilterMenuClose:this.props.onFilterMenuClose,setDataMask:e=>{var t;null==(t=this.props.actions)||t.updateDataMask(this.props.chartId,e)}}}shouldComponentUpdate(e){var t,r;return!(!(e.queriesResponse&&["success","rendered"].indexOf(e.chartStatus)>-1)||null!=(t=e.queriesResponse)&&null!=(r=t[0])&&r.error)&&(this.hasQueryResponseChange=e.queriesResponse!==this.props.queriesResponse,this.hasQueryResponseChange||!$()(e.datasource,this.props.datasource)||e.annotationData!==this.props.annotationData||e.ownState!==this.props.ownState||e.filterState!==this.props.filterState||e.height!==this.props.height||e.width!==this.props.width||e.triggerRender||e.labelColors!==this.props.labelColors||e.sharedLabelColors!==this.props.sharedLabelColors||e.formData.color_scheme!==this.props.formData.color_scheme||e.formData.stack!==this.props.formData.stack||e.cacheBusterProp!==this.props.cacheBusterProp)}handleAddFilter(e,t,r=!0,a=!0){this.props.addFilter(e,t,r,a)}handleRenderSuccess(){const{actions:e,chartStatus:t,chartId:r,vizType:a}=this.props;["loading","rendered"].indexOf(t)<0&&e.chartRenderingSucceeded(r),this.hasQueryResponseChange&&e.logEvent(x.aD,{slice_id:r,viz_type:a,start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}handleRenderFailure(e,t){const{actions:r,chartId:a}=this.props;m.Z.warn(e),r.chartRenderingFailed(e.toString(),a,t?t.componentStack:null),this.hasQueryResponseChange&&r.logEvent(x.aD,{slice_id:a,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}handleSetControlValue(...e){const{setControlValue:t}=this.props;t&&t(...e)}render(){const{chartAlert:e,chartStatus:t,chartId:r}=this.props;if("loading"===t||e||null===t)return null;this.renderStartTime=x.Yd.getTimestamp();const{width:a,height:n,datasource:i,annotationData:o,initialValues:s,ownState:l,filterState:d,chartIsStale:c,formData:u,latestQueryFormData:h,queriesResponse:m,postTransformProps:g}=this.props,b=c&&h?h:u,y=b.viz_type||this.props.vizType,f=_()(y),v="table"===y?`superset-chart-${f}`:f;let S;const C=(0,p.t)("No results were returned for this query"),w="explore"===this.props.source?(0,p.t)("Make sure that the controls are configured properly and the datasource contains data for the selected time range"):void 0,T="chart.svg";return S=a>300&&n>220?(0,F.tZ)(Z.XJ,{title:C,description:w,image:T}):(0,F.tZ)(Z.Tc,{title:C,image:T}),(0,F.tZ)(I.Z,{disableErrorBoundary:!0,key:`${r}`,id:`chart-id-${r}`,className:v,chartType:y,width:a,height:n,annotationData:o,datasource:i,initialValues:s,formData:b,ownState:l,filterState:d,hooks:this.hooks,behaviors:q,queriesData:m,onRenderSuccess:this.handleRenderSuccess,onRenderFailure:this.handleRenderFailure,noResults:S,postTransformProps:g})}}U.propTypes=E,U.defaultProps=z;const N=U;var O=r(54804),P=r(72875);const A=({chartId:e,error:t,...r})=>{const{result:a}=(0,O.hb)(e),n=t&&{...t,extra:{...t.extra,owners:a}};return(0,F.tZ)(P.Z,l()({},r,{error:n}))};var j=r(75701);const V={annotationData:c().object,actions:c().object,chartId:c().number.isRequired,datasource:c().object,dashboardId:c().number,initialValues:c().object,formData:c().object.isRequired,labelColors:c().object,sharedLabelColors:c().object,width:c().number,height:c().number,setControlValue:c().func,timeout:c().number,vizType:c().string.isRequired,triggerRender:c().bool,force:c().bool,isFiltersInitialized:c().bool,isDeactivatedViz:c().bool,chartAlert:c().string,chartStatus:c().string,chartStackTrace:c().string,queriesResponse:c().arrayOf(c().object),triggerQuery:c().bool,chartIsStale:c().bool,errorMessage:c().node,addFilter:c().func,onQuery:c().func,onFilterMenuOpen:c().func,onFilterMenuClose:c().func,ownState:c().object,postTransformProps:c().func,datasetsStatus:c().oneOf(["loading","error","complete"])},K={},L=(0,p.t)("The dataset associated with this chart no longer exists"),H={addFilter:()=>K,onFilterMenuOpen:()=>K,onFilterMenuClose:()=>K,initialValues:K,setControlValue(){},triggerRender:!1,dashboardId:null,chartStackTrace:null,isDeactivatedViz:!1,force:!1},B=h.iK.div`
  min-height: ${e=>e.height}px;
  position: relative;

  .chart-tooltip {
    opacity: 0.75;
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }

  .slice_container {
    height: ${e=>e.height}px;

    .pivot_table tbody tr {
      font-feature-settings: 'tnum' 1;
    }
  }
`,W=h.iK.div`
  font-family: ${({theme:e})=>e.typography.families.monospace};
  word-break: break-word;
  overflow-x: auto;
  white-space: pre-wrap;
`;class Q extends u.PureComponent{constructor(e){super(e),this.handleRenderContainerFailure=this.handleRenderContainerFailure.bind(this)}componentDidMount(){this.props.triggerQuery&&"UNDECIDED"!==this.props.filterboxMigrationState&&this.runQuery()}componentDidUpdate(){if(this.props.triggerQuery&&"UNDECIDED"!==this.props.filterboxMigrationState){if(this.props.isDeactivatedViz&&this.props.queriesResponse)return;this.runQuery()}}runQuery(){this.props.chartId>0&&(0,b.cr)(y.T.CLIENT_CACHE)?this.props.actions.getSavedChart(this.props.formData,this.props.force||(0,w.eY)(C.KD.force),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState):this.props.actions.postChartFormData(this.props.formData,this.props.force||(0,w.eY)(C.KD.force),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState)}handleRenderContainerFailure(e,t){const{actions:r,chartId:a}=this.props;m.Z.warn(e),r.chartRenderingFailed(e.toString(),a,t?t.componentStack:null),r.logEvent(x.aD,{slice_id:a,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}renderErrorMessage(e){var t;const{chartId:r,chartAlert:a,chartStackTrace:n,datasource:i,dashboardId:o,height:s,datasetsStatus:l}=this.props,d=null==e||null==(t=e.errors)?void 0:t[0],c=a||(null==e?void 0:e.message);return void 0!==a&&a!==L&&i===f.tw&&l!==T.ni.ERROR?(0,F.tZ)(B,{key:r,"data-ui-anchor":"chart",className:"chart-container",height:s},(0,F.tZ)(v.Z,null)):(0,F.tZ)(A,{key:r,chartId:r,error:d,subtitle:(0,F.tZ)(W,null,c),copyText:c,link:e?e.link:null,source:o?"dashboard":"explore",stackTrace:n})}render(){const{height:e,chartAlert:t,chartStatus:r,errorMessage:a,chartIsStale:n,queriesResponse:i=[],isDeactivatedViz:o=!1,width:s}=this.props,d="loading"===r;return this.renderContainerStartTime=x.Yd.getTimestamp(),"failed"===r?i.map((e=>this.renderErrorMessage(e))):a&&0===(0,g.Z)(i).length?(0,F.tZ)(Z.XJ,{title:(0,p.t)("Add required control values to preview chart"),description:(0,j.J)(!0),image:"chart.svg"}):d||t||a||!n||0!==(0,g.Z)(i).length?(0,F.tZ)(S.Z,{onError:this.handleRenderContainerFailure,showMessage:!1},(0,F.tZ)(B,{"data-ui-anchor":"chart",className:"chart-container",height:e,width:s},(0,F.tZ)("div",{className:"slice_container"},(0,F.tZ)(N,l()({},this.props,{source:this.props.dashboardId?"dashboard":"explore"}))),d&&!o&&(0,F.tZ)(v.Z,null))):(0,F.tZ)(Z.XJ,{title:(0,p.t)("Your chart is ready to go!"),description:(0,F.tZ)("span",null,(0,p.t)('Click on "Create chart" button in the control panel on the left to preview a visualization or')," ",(0,F.tZ)("span",{role:"button",tabIndex:0,onClick:this.props.onQuery},(0,p.t)("click here")),"."),image:"chart.svg"})}}Q.propTypes=V,Q.defaultProps=H;const G=Q;var Y=r(74599);const J=(0,a.$j)(null,(function(e){return{actions:(0,n.DE)({...i,updateDataMask:Y.eG,logEvent:o.logEvent},e)}}))(G)},2275:(e,t,r)=>{r.d(t,{cP:()=>l,$6:()=>d,Rw:()=>c,Er:()=>u,DZ:()=>p,$X:()=>h,ck:()=>y});var a=r(45697),n=r.n(a),i=r(81255),o=r(713),s=r(79271);const l=n().shape({id:n().string.isRequired,type:n().oneOf(Object.values(i.ZP)).isRequired,parents:n().arrayOf(n().string),children:n().arrayOf(n().string),meta:n().shape({width:n().number,height:n().number,headerSize:n().oneOf(s.Z.map((e=>e.value))),background:n().oneOf(o.Z.map((e=>e.value))),chartId:n().number})}),d=n().shape({id:n().number.isRequired,chartAlert:n().string,chartStatus:n().string,chartUpdateEndTime:n().number,chartUpdateStartTime:n().number,latestQueryFormData:n().object,queryController:n().shape({abort:n().func}),queriesResponse:n().arrayOf(n().object),triggerQuery:n().bool,lastRendered:n().number}),c=n().shape({slice_id:n().number.isRequired,slice_url:n().string.isRequired,slice_name:n().string.isRequired,datasource:n().string,datasource_name:n().string,datasource_link:n().string,changed_on:n().number.isRequired,modified:n().string.isRequired,viz_type:n().string.isRequired,description:n().string,description_markeddown:n().string,owners:n().arrayOf(n().string)}),u=n().shape({chartId:n().number.isRequired,componentId:n().string.isRequired,filterName:n().string.isRequired,datasourceId:n().string.isRequired,directPathToFilter:n().arrayOf(n().string).isRequired,isDateFilter:n().bool.isRequired,isInstantFilter:n().bool.isRequired,columns:n().object,labels:n().object,scopes:n().object}),p=n().shape({sliceIds:n().arrayOf(n().number).isRequired,expandedSlices:n().object,editMode:n().bool,isPublished:n().bool.isRequired,colorNamespace:n().string,colorScheme:n().string,updatedColorScheme:n().bool,hasUnsavedChanges:n().bool}),h=n().shape({id:n().number.isRequired,metadata:n().object,slug:n().string,dash_edit_perm:n().bool.isRequired,dash_save_perm:n().bool.isRequired,common:n().object,userId:n().string.isRequired}),m=n().shape({value:n().oneOfType([n().number,n().string]).isRequired,label:n().string.isRequired}),g={value:n().oneOfType([n().number,n().string]).isRequired,label:n().string.isRequired,children:n().arrayOf(n().oneOfType([n().shape((b=()=>g,()=>b().apply(void 0,arguments))),m]))};var b;const y=n().oneOfType([n().shape(g),m])},94413:(e,t,r)=>{r.d(t,{ZN:()=>U,gT:()=>N});var a=r(67294),n=r(37703),i=r(86504),o=r(53587),s=r(51995),l=r(11965),d=r(61988),c=r(83862),u=r(68073),p=r(35932),h=r(14114),m=r(12515),g=r(56727),b=r(23525),y=r(10222),f=r(97634),v=r(15423),Z=r(9875),S=r(13433),x=r(27600),C=r(50909);const w=(0,s.iK)(C.qi)`
  && {
    margin: 0 0 ${({theme:e})=>e.gridUnit}px;
  }
`,T=({formData:e,addDangerToast:t})=>{const[r,n]=(0,a.useState)("400"),[i,o]=(0,a.useState)("600"),[s,c]=(0,a.useState)(""),[u,p]=(0,a.useState)(""),h=(0,a.useCallback)((e=>{const{value:t,name:r}=e.currentTarget;"width"===r&&o(t),"height"===r&&n(t)}),[]),m=(0,a.useCallback)((()=>{c(""),(0,b.YE)(e).then((e=>{c(e),p("")})).catch((()=>{p((0,d.t)("Error")),t((0,d.t)("Sorry, something went wrong. Try again later."))}))}),[t,e]);(0,a.useEffect)((()=>{m()}),[]);const g=(0,a.useMemo)((()=>{if(!s)return"";const e=`${s}?${x.KD.standalone.name}=1&height=${r}`;return`<iframe\n  width="${i}"\n  height="${r}"\n  seamless\n  frameBorder="0"\n  scrolling="no"\n  src="${e}"\n>\n</iframe>`}),[r,s,i]),y=u||g||(0,d.t)("Generating link, please wait..");return(0,l.tZ)("div",{id:"embed-code-popover"},(0,l.tZ)("div",{css:l.iv`
          display: flex;
          flex-direction: column;
        `},(0,l.tZ)(S.Z,{shouldShowText:!1,text:g,copyNode:(0,l.tZ)(w,{buttonSize:"xsmall"},(0,l.tZ)("i",{className:"fa fa-clipboard"}))}),(0,l.tZ)(Z.Kx,{name:"embedCode",disabled:!g,value:y,rows:"4",readOnly:!0,css:e=>l.iv`
            resize: vertical;
            padding: ${2*e.gridUnit}px;
            font-size: ${e.typography.sizes.s}px;
            border-radius: 4px;
            background-color: ${e.colors.secondary.light5};
          `})),(0,l.tZ)("div",{css:e=>l.iv`
          display: flex;
          margin-top: ${4*e.gridUnit}px;
          & > div {
            margin-right: ${2*e.gridUnit}px;
          }
          & > div:last-of-type {
            margin-right: 0;
            margin-left: ${2*e.gridUnit}px;
          }
        `},(0,l.tZ)("div",null,(0,l.tZ)("label",{htmlFor:"embed-height"},(0,d.t)("Chart height")),(0,l.tZ)(Z.II,{type:"text",defaultValue:r,name:"height",onChange:h})),(0,l.tZ)("div",null,(0,l.tZ)("label",{htmlFor:"embed-width"},(0,d.t)("Chart width")),(0,l.tZ)(Z.II,{type:"text",defaultValue:i,name:"width",onChange:h,id:"embed-width"}))))},k="edit_properties",$="export_to_csv",R="export_to_csv_pivoted",_="export_to_json",D="download_as_image",I="copy_permalink",F="embed_code",E="share_by_email",M="view_query",q="run_in_sql_lab",z=["pivot_table","pivot_table_v2"],U=s.iK.div`
  ${({theme:e})=>l.iv`
    display: flex;
    align-items: center;

    & svg {
      width: ${3*e.gridUnit}px;
      height: ${3*e.gridUnit}px;
    }

    & span[role='checkbox'] {
      display: inline-flex;
      margin-right: ${e.gridUnit}px;
    }
  `}
`,N=((0,s.iK)(p.Z)`
  ${({theme:e})=>l.iv`
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
  `}
`,(e,t,r,p,Z,S)=>{const x=(0,s.Fg)(),{addDangerToast:C,addSuccessToast:w}=(0,h.e1)(),[U,N]=(0,a.useState)(null),[O,P]=(0,a.useState)(!1),[A,j]=(0,a.useState)([]),V=(0,n.v9)((e=>e.charts)),K=(0,a.useMemo)((()=>{if(!V)return;const e=Object.values(V);return e.length>0?e[0]:void 0}),[V]),{datasource:L}=e,H=L&&"table"===L.split("__")[1],B=(0,a.useCallback)((async()=>{try{const t=(0,d.t)("Superset Chart"),r=await(0,b.YE)(e),a=encodeURIComponent((0,d.t)("%s%s","Check out this chart: ",r));window.location.href=`mailto:?Subject=${t}%20&Body=${a}`}catch(e){C((0,d.t)("Sorry, something went wrong. Try again later."))}}),[C,e]),W=(0,a.useCallback)((()=>t?(0,m.pe)({formData:e,ownState:S,resultType:"full",resultFormat:"csv"}):null),[t,e]),Q=(0,a.useCallback)((()=>t?(0,m.pe)({formData:e,resultType:"post_processed",resultFormat:"csv"}):null),[t,e]),G=(0,a.useCallback)((()=>(0,m.pe)({formData:e,resultType:"results",resultFormat:"json"})),[e]),Y=(0,a.useCallback)((async()=>{try{if(!e)throw new Error;await(0,y.Z)((()=>(0,b.YE)(e))),w((0,d.t)("Copied to clipboard!"))}catch(e){C((0,d.t)("Sorry, something went wrong. Try again later."))}}),[C,w,e]),J=(0,a.useCallback)((({key:t,domEvent:a})=>{var n;switch(t){case k:Z(),P(!1);break;case $:W(),P(!1),j([]);break;case R:Q(),P(!1),j([]);break;case _:G(),P(!1),j([]);break;case D:(0,g.Z)(".panel-body .chart-container",null!=(n=null==r?void 0:r.slice_name)?n:(0,d.t)("New chart"),!0)(a),P(!1),j([]);break;case I:Y(),P(!1),j([]);break;case F:P(!1),j([]);break;case E:B(),P(!1),j([]);break;case M:P(!1);break;case q:p(e),P(!1)}}),[Y,W,Q,G,e,p,Z,B,null==r?void 0:r.slice_name]);return[(0,a.useMemo)((()=>(0,l.tZ)(c.v,{onClick:J,selectable:!1,openKeys:A,onOpenChange:j},r&&(0,l.tZ)(a.Fragment,null,(0,l.tZ)(c.v.Item,{key:k},(0,d.t)("Edit chart properties")),(0,l.tZ)(c.v.Divider,null)),(0,l.tZ)(c.v.SubMenu,{title:(0,d.t)("Download"),key:"download_submenu"},z.includes(e.viz_type)?(0,l.tZ)(a.Fragment,null,(0,l.tZ)(c.v.Item,{key:$,icon:(0,l.tZ)(i.Z,null),disabled:!t},(0,d.t)("Export to original .CSV")),(0,l.tZ)(c.v.Item,{key:R,icon:(0,l.tZ)(i.Z,null),disabled:!t},(0,d.t)("Export to pivoted .CSV"))):(0,l.tZ)(c.v.Item,{key:$,icon:(0,l.tZ)(i.Z,null),disabled:!t},(0,d.t)("Export to .CSV")),(0,l.tZ)(c.v.Item,{key:_,icon:(0,l.tZ)(i.Z,null)},(0,d.t)("Export to .JSON")),(0,l.tZ)(c.v.Item,{key:D,icon:(0,l.tZ)(o.Z,null)},(0,d.t)("Download as image"))),(0,l.tZ)(c.v.SubMenu,{title:(0,d.t)("Share"),key:"share_submenu"},(0,l.tZ)(c.v.Item,{key:I},(0,d.t)("Copy permalink to clipboard")),(0,l.tZ)(c.v.Item,{key:E},(0,d.t)("Share chart by email")),(0,l.tZ)(c.v.Item,{key:F},(0,l.tZ)(u.Z,{triggerNode:(0,l.tZ)("span",null,(0,d.t)("Embed code")),modalTitle:(0,d.t)("Embed code"),modalBody:(0,l.tZ)(T,{formData:e,addDangerToast:C}),maxWidth:100*x.gridUnit+"px",destroyOnClose:!0,responsive:!0}))),(0,l.tZ)(c.v.Divider,null),U?(0,l.tZ)(a.Fragment,null,(0,l.tZ)(c.v.SubMenu,{title:(0,d.t)("Manage email report")},(0,l.tZ)(f.Z,{chart:K,setShowReportSubMenu:N,showReportSubMenu:U,setIsDropdownVisible:P,isDropdownVisible:O,useTextMenu:!0})),(0,l.tZ)(c.v.Divider,null)):(0,l.tZ)(c.v,null,(0,l.tZ)(f.Z,{chart:K,setShowReportSubMenu:N,setIsDropdownVisible:P,isDropdownVisible:O,useTextMenu:!0})),(0,l.tZ)(c.v.Item,{key:M},(0,l.tZ)(u.Z,{triggerNode:(0,l.tZ)("span",null,(0,d.t)("View query")),modalTitle:(0,d.t)("View query"),modalBody:(0,l.tZ)(v.Z,{latestQueryFormData:e}),draggable:!0,resizable:!0,responsive:!0})),H&&(0,l.tZ)(c.v.Item,{key:q},(0,d.t)("Run in SQL Lab")))),[C,t,K,J,O,e,A,U,r,H,x.gridUnit]),O,P]})},79789:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(67294),n=r(51995),i=r(61988),o=r(70163),s=r(58593),l=r(11965);const d=function({certifiedBy:e,details:t,size:r="l"}){const d=(0,n.Fg)();return(0,l.tZ)(s.u,{id:"certified-details-tooltip",title:(0,l.tZ)(a.Fragment,null,e&&(0,l.tZ)("div",null,(0,l.tZ)("strong",null,(0,i.t)("Certified by %s",e))),(0,l.tZ)("div",null,t))},(0,l.tZ)(o.Z.Certified,{iconColor:d.colors.primary.base,iconSize:r}))}},9433:(e,t,r)=>{r.d(t,{CronPicker:()=>u});var a=r(5872),n=r.n(a),i=(r(67294),r(85631)),o=r(61988),s=r(51995),l=r(61247),d=r(11965);const c={everyText:(0,o.t)("every"),emptyMonths:(0,o.t)("every month"),emptyMonthDays:(0,o.t)("every day of the month"),emptyMonthDaysShort:(0,o.t)("day of the month"),emptyWeekDays:(0,o.t)("every day of the week"),emptyWeekDaysShort:(0,o.t)("day of the week"),emptyHours:(0,o.t)("every hour"),emptyMinutes:(0,o.t)("every minute"),emptyMinutesForHourPeriod:(0,o.t)("every"),yearOption:(0,o.t)("year"),monthOption:(0,o.t)("month"),weekOption:(0,o.t)("week"),dayOption:(0,o.t)("day"),hourOption:(0,o.t)("hour"),minuteOption:(0,o.t)("minute"),rebootOption:(0,o.t)("reboot"),prefixPeriod:(0,o.t)("Every"),prefixMonths:(0,o.t)("in"),prefixMonthDays:(0,o.t)("on"),prefixWeekDays:(0,o.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,o.t)("and"),prefixHours:(0,o.t)("at"),prefixMinutes:(0,o.t)(":"),prefixMinutesForHourPeriod:(0,o.t)("at"),suffixMinutesForHourPeriod:(0,o.t)("minute(s)"),errorInvalidCron:(0,o.t)("Invalid cron expression"),clearButtonText:(0,o.t)("Clear"),weekDays:[(0,o.t)("Sunday"),(0,o.t)("Monday"),(0,o.t)("Tuesday"),(0,o.t)("Wednesday"),(0,o.t)("Thursday"),(0,o.t)("Friday"),(0,o.t)("Saturday")],months:[(0,o.t)("January"),(0,o.t)("February"),(0,o.t)("March"),(0,o.t)("April"),(0,o.t)("May"),(0,o.t)("June"),(0,o.t)("July"),(0,o.t)("August"),(0,o.t)("September"),(0,o.t)("October"),(0,o.t)("November"),(0,o.t)("December")],altWeekDays:[(0,o.t)("SUN"),(0,o.t)("MON"),(0,o.t)("TUE"),(0,o.t)("WED"),(0,o.t)("THU"),(0,o.t)("FRI"),(0,o.t)("SAT")],altMonths:[(0,o.t)("JAN"),(0,o.t)("FEB"),(0,o.t)("MAR"),(0,o.t)("APR"),(0,o.t)("MAY"),(0,o.t)("JUN"),(0,o.t)("JUL"),(0,o.t)("AUG"),(0,o.t)("SEP"),(0,o.t)("OCT"),(0,o.t)("NOV"),(0,o.t)("DEC")]},u=(0,s.iK)((e=>(0,d.tZ)(i.ZP,{getPopupContainer:e=>e.parentElement},(0,d.tZ)(l.Z,n()({locale:c},e)))))`
  .react-js-cron-select:not(.react-js-cron-custom-select) > div:first-of-type,
  .react-js-cron-custom-select {
    border-radius: ${({theme:e})=>e.gridUnit}px;
    background-color: ${({theme:e})=>e.colors.grayscale.light4} !important;
  }
  .react-js-cron-custom-select > div:first-of-type {
    border-radius: ${({theme:e})=>e.gridUnit}px;
  }
`},17198:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(51995),n=r(61988),i=r(67294),o=r(9875),s=r(74069),l=r(49238),d=r(11965);const c=a.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
  }
`,u=a.iK.div`
  line-height: 40px;
  padding-top: 16px;
`;function p({description:e,onConfirm:t,onHide:r,open:a,title:p}){const[h,m]=(0,i.useState)(!0),[g,b]=(0,i.useState)(""),y=()=>{b(""),t()};return(0,d.tZ)(s.Z,{disablePrimaryButton:h,onHide:()=>{b(""),r()},onHandledPrimaryAction:y,primaryButtonName:(0,n.t)("delete"),primaryButtonType:"danger",show:a,title:p},(0,d.tZ)(u,null,e),(0,d.tZ)(c,null,(0,d.tZ)(l.lX,{htmlFor:"delete"},(0,n.t)('Type "%s" to confirm',(0,n.t)("DELETE"))),(0,d.tZ)(o.II,{type:"text",id:"delete",autoComplete:"off",value:g,onChange:e=>{var t;const r=null!=(t=e.target.value)?t:"";m(r.toUpperCase()!==(0,n.t)("DELETE")),b(r)},onPressEnter:()=>{h||y()}})))}},88694:(e,t,r)=>{r.d(t,{L:()=>c,$:()=>u});var a=r(5872),n=r.n(a),i=(r(67294),r(4715)),o=r(51995),s=r(11965);const l=o.iK.div`
  width: ${({theme:e})=>.75*e.gridUnit}px;
  height: ${({theme:e})=>.75*e.gridUnit}px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.grayscale.light1};

  font-weight: ${({theme:e})=>e.typography.weights.normal};
  display: inline-flex;
  position: relative;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary.base};

    &::before,
    &::after {
      background-color: ${({theme:e})=>e.colors.primary.base};
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: ' ';
    width: ${({theme:e})=>.75*e.gridUnit}px;
    height: ${({theme:e})=>.75*e.gridUnit}px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  &::before {
    top: ${({theme:e})=>e.gridUnit}px;
  }

  &::after {
    bottom: ${({theme:e})=>e.gridUnit}px;
  }
`,d=o.iK.div`
  display: flex;
  align-items: center;
  padding: ${({theme:e})=>2*e.gridUnit}px;
  padding-left: ${({theme:e})=>e.gridUnit}px;
`,c=({overlay:e,...t})=>(0,s.tZ)(i.Gj,n()({overlay:e},t),(0,s.tZ)(d,null,(0,s.tZ)(l,null))),u=e=>(0,s.tZ)(i.Gj,n()({overlayStyle:{zIndex:99,animationDuration:"0s"}},e))},36674:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(67294),n=r(51995),i=r(11965),o=r(61988),s=r(58593),l=r(33626),d=r(70163);const c=n.iK.a`
  ${({theme:e})=>i.iv`
    font-size: ${e.typography.sizes.xl}px;
    display: flex;
    padding: 0 0 0 ${2*e.gridUnit}px;
  `};
`,u=({itemId:e,isStarred:t,showTooltip:r,saveFaveStar:n,fetchFaveStar:u})=>{(0,l.J)((()=>{u&&u(e)}));const p=(0,a.useCallback)((r=>{r.preventDefault(),n(e,!!t)}),[t,e,n]),h=(0,i.tZ)(c,{href:"#",onClick:p,className:"fave-unfave-icon",role:"button"},t?(0,i.tZ)(d.Z.FavoriteSelected,null):(0,i.tZ)(d.Z.FavoriteUnselected,null));return r?(0,i.tZ)(s.u,{id:"fave-unfave-tooltip",title:(0,o.t)("Click to favorite/unfavorite")},h):h}},52564:(e,t,r)=>{r.d(t,{u:()=>x});var a=r(5872),n=r.n(a),i=r(67294),o=r(11965),s=r(51995),l=r(61988),d=r(4715),c=r(58593),u=r(99612);const p=e=>o.iv`
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
`,h=({title:e,placeholder:t,onSave:r,canEdit:a,label:n})=>{const[s,d]=(0,i.useState)(!1),[h,m]=(0,i.useState)(e||""),g=(0,i.useRef)(null),[b,y]=(0,i.useState)(!1),{width:f,ref:v}=(0,u.NB)(),{width:Z,ref:S}=(0,u.NB)({refreshMode:"debounce"});(0,i.useEffect)((()=>{m(e)}),[e]),(0,i.useEffect)((()=>{if(s&&null!=g&&g.current&&(g.current.focus(),g.current.setSelectionRange)){const{length:e}=g.current.value;g.current.setSelectionRange(e,e),g.current.scrollLeft=g.current.scrollWidth}}),[s]),(0,i.useLayoutEffect)((()=>{null!=v&&v.current&&(v.current.innerHTML=(h||t).replace(/\s/g,"&nbsp;"))}),[h,t,v]),(0,i.useEffect)((()=>{g.current&&g.current.scrollWidth>g.current.clientWidth?y(!0):y(!1)}),[f,Z]);const x=(0,i.useCallback)((()=>{a&&!s&&d(!0)}),[a,s]),C=(0,i.useCallback)((()=>{if(!a)return;const t=h.trim();m(t),e!==t&&r(t),d(!1)}),[a,h,r,e]),w=(0,i.useCallback)((e=>{a&&s&&m(e.target.value)}),[a,s]),T=(0,i.useCallback)((e=>{var t;a&&"Enter"===e.key&&(e.preventDefault(),null==(t=g.current)||t.blur())}),[a]);return(0,o.tZ)("div",{css:p,ref:S},(0,o.tZ)(c.u,{id:"title-tooltip",title:b&&h&&!s?h:null},a?(0,o.tZ)("input",{className:"dynamic-title-input","aria-label":null!=n?n:(0,l.t)("Title"),ref:g,onChange:w,onBlur:C,onClick:x,onKeyPress:T,placeholder:t,value:h,css:o.iv`
              cursor: ${s?"text":"pointer"};

              ${f&&f>0&&o.iv`
                width: ${f}px;
              `}
            `}):(0,o.tZ)("span",{className:"dynamic-title","aria-label":null!=n?n:(0,l.t)("Title"),ref:g},h)),(0,o.tZ)("span",{ref:v,className:"input-sizer","aria-hidden":!0,tabIndex:-1}))};var m=r(79789),g=r(36674),b=r(70163),y=r(35932);const f=e=>o.iv`
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
`,v=e=>o.iv`
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

    &:first-child {
      padding-left: 0;
    }
  }
`,S=e=>o.iv`
  margin-left: ${2*e.gridUnit}px;
`,x=({editableTitleProps:e,showTitlePanelItems:t,certificatiedBadgeProps:r,showFaveStar:a,faveStarProps:i,titlePanelAdditionalItems:c,rightPanelAdditionalItems:u,additionalActionsMenu:p,menuDropdownProps:x})=>{const C=(0,s.Fg)();return(0,o.tZ)("div",{css:v,className:"header-with-actions"},(0,o.tZ)("div",{className:"title-panel"},(0,o.tZ)(h,e),t&&(0,o.tZ)("div",{css:Z},(null==r?void 0:r.certifiedBy)&&(0,o.tZ)(m.Z,r),a&&(0,o.tZ)(g.Z,i),c)),(0,o.tZ)("div",{className:"right-button-panel"},u,(0,o.tZ)("div",{css:S},(0,o.tZ)(d.Gj,n()({trigger:["click"],overlay:p},x),(0,o.tZ)(y.Z,{css:f,buttonStyle:"tertiary","aria-label":(0,l.t)("Menu actions trigger")},(0,o.tZ)(b.Z.MoreHoriz,{iconColor:C.colors.primary.dark2,iconSize:"l"}))))))}},97634:(e,t,r)=>{r.d(t,{x:()=>Q,Z:()=>J});var a,n,i=r(11965),o=r(67294),s=r(60812),l=r(37703),d=r(93185),c=r(51995),u=r(61988),p=r(70163),h=r(12441),m=r(83862),g=r(87253),b=r(54076),y=r(88694),f=r(17198),v=r(98286),Z=r(61358),S=r(29487),x=r(98978),C=r(87858),w=r(14114);!function(e){e.DASHBOARDS="dashboards",e.CHARTS="charts"}(a||(a={})),function(e){e.TEXT="TEXT",e.PNG="PNG",e.CSV="CSV"}(n||(n={}));var T=r(34858),k=r(74069),$=r(35932),R=r(87183),_=r(9433);const D=(0,c.iK)(k.Z)`
  .ant-modal-body {
    padding: 0;
  }
`,I=c.iK.div`
  padding: ${({theme:e})=>`${3*e.gridUnit}px ${4*e.gridUnit}px ${2*e.gridUnit}px`};
  label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,F=c.iK.div`
  border-top: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  padding: ${({theme:e})=>`${4*e.gridUnit}px ${4*e.gridUnit}px ${6*e.gridUnit}px`};
  .ant-select {
    width: 100%;
  }
  .control-label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,E=c.iK.span`
  span {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
`,M=c.iK.div`
  margin-bottom: ${({theme:e})=>7*e.gridUnit}px;

  h4 {
    margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  }
`,q=(0,c.iK)(_.CronPicker)`
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  width: ${({theme:e})=>120*e.gridUnit}px;
`,z=c.iK.p`
  color: ${({theme:e})=>e.colors.error.base};
`,U=i.iv`
  margin-bottom: 0;
`,N=(0,c.iK)($.Z)`
  width: ${({theme:e})=>40*e.gridUnit}px;
`,O=c.iK.div`
  margin: ${({theme:e})=>8*e.gridUnit}px 0
    ${({theme:e})=>4*e.gridUnit}px;
`,P=(0,c.iK)(R.Y)`
  display: block;
  line-height: ${({theme:e})=>8*e.gridUnit}px;
`,A=(0,c.iK)(R.Y.Group)`
  margin-left: ${({theme:e})=>.5*e.gridUnit}px;
`,j=["pivot_table","pivot_table_v2","table","paired_ttest"],V={crontab:"0 12 * * 1"},K=(0,w.ZP)((function({onHide:e,show:t=!1,dashboardId:r,chart:a,userId:s,userEmail:d,creationMethod:c,dashboardName:h,chartName:m}){var g;const b=null==a||null==(g=a.sliceFormData)?void 0:g.viz_type,y=!!a,f=y&&b&&j.includes(b),w=f?n.TEXT:n.PNG,k=h||m,$=(0,o.useMemo)((()=>({...V,name:k?(0,u.t)("Weekly Report for %s",k):(0,u.t)("Weekly Report")})),[k]),R=(0,o.useCallback)(((e,t)=>"reset"===t?$:{...e,...t}),[$]),[_,K]=(0,o.useReducer)(R,$),[L,H]=(0,o.useState)(),B=(0,l.I0)(),W=(0,l.v9)((e=>{const t=r?Q.DASHBOARDS:Q.CHARTS;return(0,T._l)(e,t,r||(null==a?void 0:a.id))})),G=W&&Object.keys(W).length;(0,o.useEffect)((()=>{K(G?W:"reset")}),[G,W]);const Y=(0,i.tZ)(E,null,(0,i.tZ)(p.Z.Calendar,null),(0,i.tZ)("span",{className:"text"},G?(0,u.t)("Edit email report"):(0,u.t)("Schedule a new email report"))),J=(0,i.tZ)(o.Fragment,null,(0,i.tZ)(N,{key:"back",onClick:e},(0,u.t)("Cancel")),(0,i.tZ)(N,{key:"submit",buttonStyle:"primary",onClick:async()=>{const t={type:"Report",active:!0,force_screenshot:!1,creation_method:c,dashboard:r,chart:null==a?void 0:a.id,owners:[s],recipients:[{recipient_config_json:{target:d},type:"Email"}],name:_.name,description:_.description,crontab:_.crontab,report_format:_.report_format||w,timezone:_.timezone};K({isSubmitting:!0,error:void 0});try{G?await B((0,Z.Me)(_.id,t)):await B((0,Z.cq)(t)),e()}catch(e){const{error:t}=await(0,v.O)(e);K({error:t})}K({isSubmitting:!1})},disabled:!_.name,loading:_.isSubmitting},G?(0,u.t)("Save"):(0,u.t)("Add"))),X=(0,i.tZ)(o.Fragment,null,(0,i.tZ)(O,null,(0,i.tZ)("h4",null,(0,u.t)("Message content"))),(0,i.tZ)("div",{className:"inline-container"},(0,i.tZ)(A,{onChange:e=>{K({report_format:e.target.value})},value:_.report_format||w},f&&(0,i.tZ)(P,{value:n.TEXT},(0,u.t)("Text embedded in email")),(0,i.tZ)(P,{value:n.PNG},(0,u.t)("Image (PNG) embedded in email")),(0,i.tZ)(P,{value:n.CSV},(0,u.t)("Formatted CSV attached in email")))));return(0,i.tZ)(D,{show:t,onHide:e,title:Y,footer:J,width:"432",centered:!0},(0,i.tZ)(I,null,(0,i.tZ)(C.Z,{id:"name",name:"name",value:_.name||"",placeholder:$.name,required:!0,validationMethods:{onChange:({target:e})=>K({name:e.value})},label:"Report Name"}),(0,i.tZ)(C.Z,{id:"description",name:"description",value:(null==_?void 0:_.description)||"",validationMethods:{onChange:({target:e})=>{K({description:e.value})}},label:(0,u.t)("Description"),placeholder:(0,u.t)("Include a description that will be sent with your report"),css:U})),(0,i.tZ)(F,null,(0,i.tZ)(M,null,(0,i.tZ)("h4",{css:e=>(e=>i.iv`
  margin: ${3*e.gridUnit}px 0;
`)(e)},(0,u.t)("Schedule")),(0,i.tZ)("p",null,(0,u.t)("A screenshot of the dashboard will be sent to your email at"))),(0,i.tZ)(q,{clearButton:!1,value:_.crontab||"0 12 * * 1",setValue:e=>{K({crontab:e})},onError:H}),(0,i.tZ)(z,null,L),(0,i.tZ)("div",{className:"control-label",css:e=>(e=>i.iv`
  margin: ${3*e.gridUnit}px 0 ${2*e.gridUnit}px;
`)(e)},(0,u.t)("Timezone")),(0,i.tZ)(x.Z,{timezone:_.timezone,onTimezoneChange:e=>{K({timezone:e})}}),y&&X),_.error&&(0,i.tZ)(S.Z,{type:"error",css:e=>(e=>i.iv`
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
`)(e),message:G?(0,u.t)("Failed to update report"):(0,u.t)("Failed to create report"),description:_.error}))}));var L=r(94413);const H=e=>i.iv`
  color: ${e.colors.error.base};
`,B=e=>i.iv`
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
`,W=e=>i.iv`
  &:hover {
    color: ${e.colors.grayscale.dark1};
    background-color: ${e.colors.secondary.light5};
  }
`;var Q;!function(e){e.CHARTS="charts",e.DASHBOARDS="dashboards"}(Q||(Q={}));var G={name:"1e1ncky",styles:"border:none"},Y={name:"833hqy",styles:"width:200px"};function J({dashboardId:e,chart:t,useTextMenu:r=!1,setShowReportSubMenu:a,setIsDropdownVisible:n,isDropdownVisible:v}){const S=(0,l.I0)(),x=(0,l.v9)((r=>{const a=e?Q.DASHBOARDS:Q.CHARTS;return(0,T._l)(r,a,e||(null==t?void 0:t.id))})),C=(null==x?void 0:x.active)||!1,w=(0,l.v9)((e=>{var t;return e.user||(null==(t=e.explore)?void 0:t.user)})),k=()=>!!(0,d.c)(d.T.ALERT_REPORTS)&&(!(null==w||!w.userId)&&Object.keys(w.roles||[]).map((e=>w.roles[e].filter((e=>"menu_access"===e[0]&&"Manage"===e[1]))))[0].length>0),[$,R]=(0,o.useState)(null),_=(0,c.Fg)(),D=(0,s.D)(e),[I,F]=(0,o.useState)(!1),E=async(e,t)=>{null!=e&&e.id&&S((0,Z.M)(e,t))},M=k()&&!!(e&&D!==e||null!=t&&t.id);(0,o.useEffect)((()=>{M&&S((0,Z.Aw)({userId:w.userId,filterField:e?"dashboard_id":"chart_id",creationMethod:e?"dashboards":"charts",resourceId:e||(null==t?void 0:t.id)}))}),[]);const q=x&&a&&k();(0,o.useEffect)((()=>{q?a(!0):!x&&a&&a(!1)}),[x]);const z=()=>{n&&(n(!1),F(!0))};return(0,i.tZ)(o.Fragment,null,k()&&(0,i.tZ)(o.Fragment,null,(0,i.tZ)(K,{userId:w.userId,show:I,onHide:()=>F(!1),userEmail:w.email,dashboardId:e,chart:t,creationMethod:e?Q.DASHBOARDS:Q.CHARTS}),r?x?v&&(0,i.tZ)(m.v,{selectable:!1,css:G},(0,i.tZ)(m.v.Item,{css:W,onClick:()=>E(x,!C)},(0,i.tZ)(L.ZN,null,(0,i.tZ)(g.ZP,{checked:C,onChange:b.EI}),(0,u.t)("Email reports active"))),(0,i.tZ)(m.v.Item,{css:W,onClick:z},(0,u.t)("Edit email report")),(0,i.tZ)(m.v.Item,{css:W,onClick:()=>{n&&(n(!1),R(x))}},(0,u.t)("Delete email report"))):(0,i.tZ)(m.v,{selectable:!1,css:B},(0,i.tZ)(m.v.Item,{onClick:z},(0,u.t)("Set up an email report")),(0,i.tZ)(m.v.Divider,null)):x?(0,i.tZ)(o.Fragment,null,(0,i.tZ)(y.$,{overlay:(0,i.tZ)(m.v,{selectable:!1,css:Y},(0,i.tZ)(m.v.Item,null,(0,u.t)("Email reports active"),(0,i.tZ)(h.r,{checked:C,onClick:e=>E(x,e),size:"small",css:(0,i.iv)({marginLeft:2*_.gridUnit},"","")})),(0,i.tZ)(m.v.Item,{onClick:()=>F(!0)},(0,u.t)("Edit email report")),(0,i.tZ)(m.v.Item,{onClick:()=>R(x),css:H},(0,u.t)("Delete email report"))),trigger:["click"],getPopupContainer:e=>e.closest(".action-button")},(0,i.tZ)("span",{role:"button",className:"action-button action-schedule-report",tabIndex:0},(0,i.tZ)(p.Z.Calendar,null)))):(0,i.tZ)("span",{role:"button",title:(0,u.t)("Schedule email report"),tabIndex:0,className:"action-button action-schedule-report",onClick:()=>F(!0)},(0,i.tZ)(p.Z.Calendar,null)),$&&(0,i.tZ)(f.Z,{description:(0,u.t)("This action will permanently delete %s.",null==$?void 0:$.name),onConfirm:()=>{$&&(async e=>{await S((0,Z.MZ)(e)),R(null)})($)},onHide:()=>R(null),open:!0,title:(0,u.t)("Delete Report?")})))}},12441:(e,t,r)=>{r.d(t,{r:()=>s}),r(67294);var a=r(51995),n=r(40987),i=r(11965);const o=(0,a.iK)(n.Z)`
  .ant-switch-checked {
    background-color: ${({theme:e})=>e.colors.primary.base};
  }
`,s=e=>(0,i.tZ)(o,e)},98978:(e,t,r)=>{r.d(t,{Z:()=>Z});var a=r(11965),n=r(67294),i=r(80008),o=r.n(i),s=r(61988),l=r(4715);const d="GMT Standard Time",c={"-300-240":["Eastern Standard Time","Eastern Daylight Time"],"-360-300":["Central Standard Time","Central Daylight Time"],"-420-360":["Mountain Standard Time","Mountain Daylight Time"],"-420-420":["Mountain Standard Time - Phoenix","Mountain Standard Time - Phoenix"],"-480-420":["Pacific Standard Time","Pacific Daylight Time"],"-540-480":["Alaska Standard Time","Alaska Daylight Time"],"-600-600":["Hawaii Standard Time","Hawaii Daylight Time"],60120:["Central European Time","Central European Daylight Time"],"00":[d,d],"060":["GMT Standard Time - London","British Summer Time"]},u=o()(),p=o()([2021,1]),h=o()([2021,7]),m=e=>p.tz(e).utcOffset().toString()+h.tz(e).utcOffset().toString(),g=e=>{var t,r;const a=m(e);return(u.tz(e).isDST()?null==(t=c[a])?void 0:t[1]:null==(r=c[a])?void 0:r[0])||e},b=o().tz.countries().map((e=>o().tz.zonesForCountry(e,!0))).flat(),y=[];b.forEach((e=>{y.find((t=>m(t.name)===m(e.name)))||y.push(e)}));const f=y.map((e=>({label:`GMT ${o().tz(u,e.name).format("Z")} (${g(e.name)})`,value:e.name,offsets:m(e.name),timezoneName:e.name}))),v=(e,t)=>o().tz(u,e.timezoneName).utcOffset()-o().tz(u,t.timezoneName).utcOffset();function Z({onTimezoneChange:e,timezone:t,minWidth:r="400px"}){const i=(0,n.useMemo)((()=>(e=>{var t;return(null==(t=f.find((t=>t.offsets===m(e))))?void 0:t.value)||"Africa/Abidjan"})(t||o().tz.guess())),[t]);return(0,n.useEffect)((()=>{t!==i&&e(i)}),[i,e,t]),(0,a.tZ)(l.Ph,{ariaLabel:(0,s.t)("Timezone selector"),css:(0,a.iv)({minWidth:r},"",""),onChange:t=>e(t),value:i,options:f,sortComparator:v})}f.sort(v)},9531:(e,t,r)=>{r.d(t,{tw:()=>a,Ky:()=>n,gz:()=>i,I6:()=>o,UN:()=>s,a7:()=>l,XX:()=>d});const a={id:0,type:r(46078).i9.Table,uid:"_placeholder_",datasource_name:"",table_name:"",columns:[],column_types:[],metrics:[],column_format:{},verbose_map:{},main_dttm_col:"",description:""},n=53,i=32,o=260,s=80,l=46,d=374},713:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(61988),n=r(80621);const i=[{value:n.HE,label:(0,a.t)("Transparent"),className:"background--transparent"},{value:n.b5,label:(0,a.t)("White"),className:"background--white"}]},79271:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(61988),n=r(80621);const i=[{value:n.u_,label:(0,a.t)("Small"),className:"header-style-option header-small"},{value:n.OE,label:(0,a.t)("Medium"),className:"header-style-option header-medium"},{value:n.pQ,label:(0,a.t)("Large"),className:"header-style-option header-large"}]},50909:(e,t,r)=>{r.d(t,{qi:()=>w,m:()=>T,HS:()=>k,uy:()=>$,C4:()=>E,_q:()=>q});var a=r(11965),n=r(67294),i=r(51995),o=r(61988),s=r(51115),l=r(42846),d=r(88889),c=r(23279),u=r.n(c),p=r(4715),h=r(9875),m=r(27600),g=r(87183),b=r(70163),y=r(35932),f=r(76697),v=r(54076),Z=r(13433),S=r(89555),x=r(61587);const C=(0,i.iK)("span")`
  color: ${({theme:e})=>e.colors.grayscale.light1};
`,w=(0,i.iK)(y.Z)`
  font-size: ${({theme:e})=>e.typography.sizes.s}px;

  // needed to override button's first-of-type margin: 0
  && {
    margin: 0 ${({theme:e})=>2*e.gridUnit}px;
  }

  i {
    padding: 0 ${({theme:e})=>e.gridUnit}px;
  }
`,T=({data:e,columns:t})=>{const r=(0,i.Fg)();return(0,a.tZ)(Z.Z,{text:e&&t?(0,v.Mv)(e,t):"",wrapped:!1,copyNode:(0,a.tZ)(b.Z.CopyOutlined,{iconColor:r.colors.grayscale.base,iconSize:"l","aria-label":(0,o.t)("Copy"),role:"button",css:a.iv`
            &.anticon > * {
              line-height: 0;
            }
          `})})},k=({onChangeHandler:e})=>{const t=(0,i.Fg)(),r=u()(e,m.M$);return(0,a.tZ)(h.II,{prefix:(0,a.tZ)(b.Z.Search,{iconColor:t.colors.grayscale.base}),placeholder:(0,o.t)("Search"),onChange:e=>{const t=e.target.value;r(t)},css:a.iv`
        width: 200px;
        margin-right: ${2*t.gridUnit}px;
      `})},$=({data:e,loading:t})=>{var r;return(0,a.tZ)(S.Z,{rowcount:null!=(r=null==e?void 0:e.length)?r:0,loading:t})};var R;!function(e){e.Formatted="formatted",e.Original="original"}(R||(R={}));const _=({onChange:e,value:t})=>(0,a.tZ)(g.Y.Group,{value:t,onChange:e},(0,a.tZ)(p.T,{direction:"vertical"},(0,a.tZ)(g.Y,{value:R.Formatted},(0,o.t)("Formatted date")),(0,a.tZ)(g.Y,{value:R.Original},(0,o.t)("Original value")))),D=i.iK.div`
  display: flex;
  flex-direction: column;

  padding: ${({theme:e})=>4*e.gridUnit+"px"};
`,I=i.iK.span`
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  text-transform: uppercase;
`,F=({columnName:e,onTimeColumnChange:t,datasourceId:r,isOriginalTimeColumn:s})=>{const l=(0,i.Fg)(),d=r=>{t(e,r.target.value)},c=(0,n.useMemo)((()=>r?(0,a.tZ)(D,{onClick:e=>e.stopPropagation()},(0,a.tZ)(a.xB,{styles:a.iv`
              .column-formatting-popover .ant-popover-inner-content {
                padding: 0;
              }
            `}),(0,a.tZ)(I,null,(0,o.t)("Column Formatting")),(0,a.tZ)(_,{onChange:d,value:s?R.Original:R.Formatted})):null),[r,s]);return r?(0,a.tZ)("span",null,(0,a.tZ)(f.ZP,{overlayClassName:"column-formatting-popover",trigger:"click",content:c,placement:"bottomLeft",arrowPointAtCenter:!0},(0,a.tZ)(b.Z.SettingOutlined,{iconSize:"m",iconColor:l.colors.grayscale.light1,css:(0,a.iv)({marginRight:`${l.gridUnit}px`},"",""),onClick:e=>e.stopPropagation()})),e):(0,a.tZ)("span",null,e)},E=(e,t)=>{const r=(0,n.useMemo)((()=>{var e;return null!=(e=null==t?void 0:t.map((e=>Object.values(e).map((e=>e?e.toString().toLowerCase():(0,o.t)("N/A"))))))?e:[]}),[t]);return(0,n.useMemo)((()=>null!=t&&t.length?t.filter(((t,a)=>r[a].some((t=>null==t?void 0:t.includes(e.toLowerCase()))))):[]),[t,e,r])},M=(0,s.bt)(l.Z.DATABASE_DATETIME),q=(e,t,r,i,o,s)=>{const[l,c]=(0,n.useState)((0,x.W)(i)),u=(e,t)=>{if(i)if(t!==R.Original||l.includes(e)){if(t===R.Formatted&&l.includes(e)){const t=(0,x.W)(i);t.splice(t.indexOf(e),1),(0,x.e)(i,t),c(t)}}else{const t=(0,x.W)(i);t.push(e),(0,x.e)(i,t),c(t)}};return(0,n.useEffect)((()=>{o&&c((0,x.W)(i))}),[i,o]),(0,n.useMemo)((()=>e&&null!=r&&r.length?e.filter((e=>Object.keys(r[0]).includes(e))).map(((e,n)=>{const o=null==t?void 0:t[n],c=r[0][e],p=o===d.Z.TEMPORAL?l.indexOf(e):-1,h=l.includes(e);return{id:e||n,accessor:t=>t[e],Header:o===d.Z.TEMPORAL&&"string"!=typeof c?(0,a.tZ)(F,{columnName:e,datasourceId:i,onTimeColumnChange:u,isOriginalTimeColumn:h}):e,Cell:({value:e})=>!0===e?m.Ly:!1===e?m.gz:null===e?(0,a.tZ)(C,null,m.Wq):o===d.Z.TEMPORAL&&-1===p&&"number"==typeof e?M(e):String(e),...null==s?void 0:s[e]}})):[]),[e,r,t,i,s,l])}},61587:(e,t,r)=>{r.d(t,{W:()=>i,e:()=>o});var a=r(55786),n=r(61337);const i=e=>{const t=(0,n.rV)(n.dR.explore__data_table_original_formatted_time_columns,{});return void 0===e?[]:(0,a.Z)(t[e])},o=(e,t)=>{const r=(0,n.rV)(n.dR.explore__data_table_original_formatted_time_columns,{});(0,n.LS)(n.dR.explore__data_table_original_formatted_time_columns,{...r,[e]:t})}},48251:(e,t,r)=>{r.d(t,{c9:()=>q,Tg:()=>D});var a,n=r(67294),i=r(51995),o=r(61988),s=r(70163),l=r(71262),d=r(61337);!function(e){e.Results="results",e.Samples="samples"}(a||(a={}));var c=r(55786),u=r(38703),p=r(94301),h=r(52256),m=r(98286);const g={mixed_timeseries:2};var b=r(76962),y=r(50909),f=r(4788),v=r.n(f),Z=r(88889),S=r(11965),x=r(54076),C=r(61587);const w=i.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: ${2*e.gridUnit}px;\n\n    span {\n      flex-shrink: 0;\n    }\n  `}
`,T=({data:e,datasourceId:t,onInputChange:r,columnNames:a,columnTypes:i,isLoading:o})=>{const s=(0,C.W)(t),l=v()(a,i).filter((([e,t])=>t===Z.Z.TEMPORAL&&e&&!s.includes(e))).map((([e])=>e)),d=(0,n.useMemo)((()=>(0,x.cD)(e,l)),[e,l]);return(0,S.tZ)(w,null,(0,S.tZ)(y.HS,{onChangeHandler:r}),(0,S.tZ)("div",{css:S.iv`
          display: flex;
          align-items: center;
        `},(0,S.tZ)(y.uy,{data:e,loading:o}),(0,S.tZ)(y.m,{data:d,columns:a})))},k=({data:e,colnames:t,coltypes:r,datasourceId:a,dataSize:i=50,isVisible:s})=>{const[l,d]=(0,n.useState)(""),c=(0,y._q)(t,r,e,a,s),u=(0,y.C4)(l,e);return(0,S.tZ)(n.Fragment,null,(0,S.tZ)(T,{data:u,columnNames:t,columnTypes:r,datasourceId:a,onInputChange:e=>d(e),isLoading:!1}),(0,S.tZ)(b.Z,{columns:c,data:u,pageSize:i,noDataText:(0,o.t)("No results"),emptyWrapperType:b.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0}))},$=i.iK.pre`
  margin-top: ${({theme:e})=>4*e.gridUnit+"px"};
`,R=new WeakSet,_=({isRequest:e,queryFormData:t,queryForce:r,ownState:a,errorMessage:i,actions:s,isVisible:l,dataSize:d=50})=>{const[b,y]=(0,n.useState)([]),[f,v]=(0,n.useState)(!0),[Z,x]=(0,n.useState)(""),C=(w=(null==t?void 0:t.viz_type)||(null==t?void 0:t.vizType),(null==g?void 0:g[w])||1);var w;if((0,n.useEffect)((()=>{i||e&&!R.has(t)&&(v(!0),(0,h.getChartDataRequest)({formData:t,force:r,resultFormat:"json",resultType:"results",ownState:a}).then((({json:e})=>{y((0,c.Z)(e.result)),x(""),R.add(t),r&&s&&s.setForceQuery(!1)})).catch((e=>{(0,m.O)(e).then((({error:e,message:t})=>{x(e||t||(0,o.t)("Sorry, an error occurred"))}))})).finally((()=>{v(!1)})))}),[t,e]),(0,n.useEffect)((()=>{i&&v(!1)}),[i]),f)return Array(C).fill((0,S.tZ)(u.Z,null));if(i){const e=(0,o.t)("Run a query to display results");return Array(C).fill((0,S.tZ)(p.x3,{image:"document.svg",title:e}))}if(Z){const e=(0,S.tZ)(n.Fragment,null,(0,S.tZ)(T,{data:[],columnNames:[],columnTypes:[],datasourceId:t.datasource,onInputChange:()=>{},isLoading:!1}),(0,S.tZ)($,null,Z));return Array(C).fill(e)}if(0===b.length){const e=(0,o.t)("No results were returned for this query");return Array(C).fill((0,S.tZ)(p.x3,{image:"document.svg",title:e}))}return b.map(((e,r)=>(0,S.tZ)(k,{data:e.data,colnames:e.colnames,coltypes:e.coltypes,dataSize:d,datasourceId:t.datasource,key:r,isVisible:l})))},D=({isRequest:e,queryFormData:t,queryForce:r,ownState:n,errorMessage:i,actions:s,isVisible:d,dataSize:c=50})=>{const u=_({errorMessage:i,queryFormData:t,queryForce:r,ownState:n,isRequest:e,actions:s,dataSize:c,isVisible:d});if(1===u.length)return u[0];const p=u.map(((e,t)=>0===t?(0,S.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Results"),key:a.Results},e):(0,S.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Results %s",t+1),key:`${a.Results} ${t+1}`},e)));return(0,S.tZ)(l.ZP,{fullWidth:!1}," ",p," ")},I=i.iK.pre`
  margin-top: ${({theme:e})=>4*e.gridUnit+"px"};
`,F=new WeakSet,E=({isRequest:e,datasource:t,queryForce:r,actions:a,dataSize:i=50,isVisible:s})=>{const[l,d]=(0,n.useState)(""),[m,g]=(0,n.useState)([]),[f,v]=(0,n.useState)([]),[Z,x]=(0,n.useState)([]),[C,w]=(0,n.useState)(!1),[k,$]=(0,n.useState)(""),R=(0,n.useMemo)((()=>`${t.id}__${t.type}`),[t]);(0,n.useEffect)((()=>{e&&r&&F.delete(t),e&&!F.has(t)&&(w(!0),(0,h.getDatasetSamples)(t.id,r).then((e=>{g((0,c.Z)(e.data)),v((0,c.Z)(e.colnames)),x((0,c.Z)(e.coltypes)),$(""),F.add(t),r&&a&&a.setForceQuery(!1)})).catch((e=>{g([]),v([]),x([]),$(`${e.name}: ${e.message}`)})).finally((()=>{w(!1)})))}),[t,e,r]);const _=(0,y._q)(f,Z,m,R,s),D=(0,y.C4)(l,m);if(C)return(0,S.tZ)(u.Z,null);if(k)return(0,S.tZ)(n.Fragment,null,(0,S.tZ)(T,{data:D,columnNames:f,columnTypes:Z,datasourceId:R,onInputChange:e=>d(e),isLoading:C}),(0,S.tZ)(I,null,k));if(0===m.length){const e=(0,o.t)("No samples were returned for this dataset");return(0,S.tZ)(p.x3,{image:"document.svg",title:e})}return(0,S.tZ)(n.Fragment,null,(0,S.tZ)(T,{data:D,columnNames:f,columnTypes:Z,datasourceId:R,onInputChange:e=>d(e),isLoading:C}),(0,S.tZ)(b.Z,{columns:_,data:D,pageSize:i,noDataText:(0,o.t)("No results"),emptyWrapperType:b.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0}))},M=i.iK.div`
  ${({theme:e})=>`\n    position: relative;\n    background-color: ${e.colors.grayscale.light5};\n    z-index: 5;\n    overflow: hidden;\n\n    .ant-tabs {\n      height: 100%;\n    }\n\n    .ant-tabs-content-holder {\n      height: 100%;\n    }\n\n    .ant-tabs-content {\n      height: 100%;\n    }\n\n    .ant-tabs-tabpane {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n\n      .table-condensed {\n        height: 100%;\n        overflow: auto;\n        margin-bottom: ${4*e.gridUnit}px;\n\n        .table {\n          margin-bottom: ${2*e.gridUnit}px;\n        }\n      }\n\n      .pagination-container > ul[role='navigation'] {\n        margin-top: 0;\n      }\n    }\n  `}
`,q=({queryFormData:e,datasource:t,queryForce:r,onCollapseChange:c,chartStatus:u,ownState:p,errorMessage:h,actions:m})=>{const g=(0,i.Fg)(),[b,y]=(0,n.useState)(a.Results),[f,v]=(0,n.useState)({results:!1,samples:!1}),[Z,x]=(0,n.useState)((0,d.rV)(d.dR.is_datapanel_open,!1));(0,n.useEffect)((()=>{(0,d.LS)(d.dR.is_datapanel_open,Z)}),[Z]),(0,n.useEffect)((()=>{Z||v({results:!1,samples:!1}),Z&&b.startsWith(a.Results)&&"rendered"===u&&v({results:!0,samples:!1}),Z&&b===a.Samples&&v({results:!1,samples:!0})}),[Z,b,u]);const C=(0,n.useCallback)((e=>{c(e),x(e)}),[c]),T=(0,n.useCallback)(((e,t)=>{Z?e===b&&(t.preventDefault(),C(!1)):C(!0),y(e)}),[b,C,Z]),k=(0,n.useMemo)((()=>{const e=Z?(0,S.tZ)(s.Z.CaretUp,{iconColor:g.colors.grayscale.base,"aria-label":(0,o.t)("Collapse data panel")}):(0,S.tZ)(s.Z.CaretDown,{iconColor:g.colors.grayscale.base,"aria-label":(0,o.t)("Expand data panel")});return(0,S.tZ)(w,null,Z?(0,S.tZ)("span",{role:"button",tabIndex:0,onClick:()=>C(!1)},e):(0,S.tZ)("span",{role:"button",tabIndex:0,onClick:()=>C(!0)},e))}),[C,Z,g.colors.grayscale.base]),$=_({errorMessage:h,queryFormData:e,queryForce:r,ownState:p,isRequest:f.results,actions:m,isVisible:a.Results===b}).map(((e,t)=>0===t?(0,S.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Results"),key:a.Results},e):t>0?(0,S.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Results %s",t+1),key:`${a.Results} ${t+1}`},e):null));return(0,S.tZ)(M,null,(0,S.tZ)(l.ZP,{fullWidth:!1,tabBarExtraContent:k,activeKey:Z?b:"",onTabClick:T},$,(0,S.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Samples"),key:a.Samples},(0,S.tZ)(E,{datasource:t,queryForce:r,isRequest:f.samples,actions:m,isVisible:a.Samples===b}))))}},89555:(e,t,r)=>{r.d(t,{Z:()=>l}),r(67294);var a=r(67190),n=r(61988),i=r(37921),o=r(58593),s=r(11965);function l(e){const{rowcount:t=0,limit:r,loading:l}=e,d=t===r,c=d||0===t&&!l?"danger":"default",u=(0,a.JB)()(t),p=(0,s.tZ)(i.Z,{type:c},l?(0,n.t)("Loading..."):(0,n.tn)("%s row","%s rows",t,u));return d?(0,s.tZ)(o.u,{id:"tt-rowcount-tooltip",title:(0,s.tZ)("span",null,(0,n.t)("Limit reached"))},p):p}},15423:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(67294),n=r(51995),i=r(55786),o=r(61988),s=r(42110),l=r(120),d=r(13433),c=r(38703),u=r(50909),p=r(98286),h=r(52256),m=r(53459),g=r(49889),b=r(33743),y=r(22489),f=r(11965);const v=(0,n.iK)(u.qi)`
  && {
    margin: 0 0 ${({theme:e})=>e.gridUnit}px;
  }
`;s.Z.registerLanguage("markdown",m.Z),s.Z.registerLanguage("html",g.Z),s.Z.registerLanguage("sql",b.Z),s.Z.registerLanguage("json",y.Z);const Z=n.iK.div`
  height: 100%;
`,S=(0,n.iK)(s.Z)`
  height: calc(100% - 26px); // 100% - clipboard height
`,x=e=>{const[t,r]=(0,a.useState)([]),[n,s]=(0,a.useState)(!1),[u,m]=(0,a.useState)(null);return(0,a.useEffect)((()=>{s(!0),(0,h.getChartDataRequest)({formData:e.latestQueryFormData,resultFormat:"json",resultType:"query"}).then((({json:e})=>{r((0,i.Z)(e.result)),s(!1),m(null)})).catch((e=>{(0,p.O)(e).then((({error:t,message:r})=>{m(t||r||e.statusText||(0,o.t)("Sorry, An error occurred")),s(!1)}))}))}),[JSON.stringify(e.latestQueryFormData)]),n?(0,f.tZ)(c.Z,null):u?(0,f.tZ)("pre",null,u):(0,f.tZ)(a.Fragment,null,t.map((e=>e.query?(0,f.tZ)(Z,{key:e.query},(0,f.tZ)(d.Z,{text:e.query,shouldShowText:!1,copyNode:(0,f.tZ)(v,{buttonSize:"xsmall"},(0,f.tZ)("i",{className:"fa fa-clipboard"}))}),(0,f.tZ)(S,{language:e.language||void 0,style:l.Z},e.query)):null)))}},40219:(e,t,r)=>{r.d(t,{BR:()=>s,nv:()=>c,LW:()=>u});var a=r(57557),n=r.n(a),i=r(31069);const o=["url_params"],s=e=>n()(e,o),l=(e,t)=>{let r="api/v1/explore/form_data";return e&&(r=r.concat(`/${e}`)),t&&(r=r.concat(`?tab_id=${t}`)),r},d=(e,t,r,a)=>{const n={datasource_id:e,datasource_type:t,form_data:JSON.stringify(s(r))};return a&&(n.chart_id=a),n},c=(e,t,r,a,n)=>i.Z.post({endpoint:l(void 0,n),jsonPayload:d(e,t,r,a)}).then((e=>e.json.key)),u=(e,t,r,a,n,o)=>i.Z.put({endpoint:l(r,o),jsonPayload:d(e,t,a,n)}).then((e=>e.json.message))},28615:(e,t,r)=>{r.d(t,{S:()=>i});var a=r(67294),n=r(60812);function i(e,t){const r=(0,n.D)(e);(0,a.useEffect)((()=>{e!==r&&t(r,e)}),[e,r,t])}},6954:(e,t,r)=>{r.d(t,{z:()=>i});var a=r(67294);const n=new(r(11133).g0)("tab_id_channel");function i(){const[e,t]=(0,a.useState)();return(0,a.useEffect)((()=>{const r=()=>{const e=window.localStorage.getItem("last_tab_id"),r=String(e?Number.parseInt(e,10)+1:1);window.sessionStorage.setItem("tab_id",r),window.localStorage.setItem("last_tab_id",r),t(r)},a=window.sessionStorage.getItem("tab_id");a?(n.postMessage({type:"REQUESTING_TAB_ID",tabId:a}),t(a)):r(),n.onmessage=t=>{if(t.tabId===e)if("REQUESTING_TAB_ID"===t.type){const e={type:"TAB_ID_DENIED",tabId:t.tabId};n.postMessage(e)}else"TAB_ID_DENIED"===t.type&&r()}}),[e]),e}},56727:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(46926),n=r.n(a),i=r(21804),o=r.n(i),s=r(61988),l=r(72570);function d(e,t,r=!1){return a=>{const i=r?document.querySelector(e):a.currentTarget.closest(e);return i?n().toJpeg(i,{quality:.95,bgcolor:"#F5F5F5",filter:e=>"string"!=typeof e.className||"mapboxgl-control-container"!==e.className&&!e.className.includes("ant-dropdown")}).then((e=>{const r=document.createElement("a");r.download=`${((e,t=new Date)=>`${o()(e)}-${t.toISOString().replace(/[: ]/g,"-")}`)(t)}.jpg`,r.href=e,r.click()})).catch((e=>{console.error("Creating image failed",e)})):(0,l.Dz)((0,s.t)("Image download failed, please refresh and try again."))}}},75701:(e,t,r)=>{r.d(t,{J:()=>n});var a=r(61988);const n=e=>(0,a.t)("Select values in highlighted field(s) in the control panel. Then run the query by clicking on the %s button.",e?'"Create chart"':'"Update chart"')}}]);
//# sourceMappingURL=4489.4c99d8e446280fada3fc.entry.js.map