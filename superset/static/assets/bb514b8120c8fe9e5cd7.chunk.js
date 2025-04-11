"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7001],{281788:(e,t,a)=>{a.d(t,{B8:()=>d,TZ:()=>r,mf:()=>l,u7:()=>o});var s=a(431069),n=a(68492);const i=(e,t,a)=>{let s=`api/v1/dashboard/${e}/filter_state`;return t&&(s=s.concat(`/${t}`)),a&&(s=s.concat(`?tab_id=${a}`)),s},r=(e,t,a,r)=>s.Z.put({endpoint:i(e,a,r),jsonPayload:{value:t}}).then((e=>e.json.message)).catch((e=>(n.Z.error(e),null))),o=(e,t,a)=>s.Z.post({endpoint:i(e,void 0,a),jsonPayload:{value:t}}).then((e=>e.json.key)).catch((e=>(n.Z.error(e),null))),d=(e,t)=>s.Z.get({endpoint:i(e,t)}).then((({json:e})=>JSON.parse(e.value))).catch((e=>(n.Z.error(e),null))),l=e=>s.Z.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then((({json:e})=>e)).catch((e=>(n.Z.error(e),null)))},257001:(e,t,a)=>{a.r(t),a.d(t,{DashboardPage:()=>oe,DashboardPageIdContext:()=>ne,default:()=>de});var s=a(667294),n=a(211965),i=a(616550),r=a(751995),o=a(61988),d=a(828216),l=a(414114),c=a(838703),u=a(708743),p=a(904305),h=a(550810),b=a(514505),g=a(961337),f=a(427600),m=a(23525),v=a(909467),y=a(281788),w=a(14890),x=a(45697),E=a.n(x),S=a(593185),_=a(514278),C=a(920292),D=a(81255);function $(e){return Object.values(e).reduce(((e,t)=>(t&&t.type===D.dW&&t.meta&&t.meta.chartId&&e.push(t.meta.chartId),e)),[])}var j=a(602275),I=a(203741),O=a(599543),U=a(156967);const k=[D.dW,D.xh,D.t];function R(e){return!Object.values(e).some((({type:e})=>e&&k.includes(e)))}var T=a(11794),F=a(135944);const q={actions:E().shape({addSliceToDashboard:E().func.isRequired,removeSliceFromDashboard:E().func.isRequired,triggerQuery:E().func.isRequired,logEvent:E().func.isRequired,clearDataMaskState:E().func.isRequired}).isRequired,dashboardInfo:j.$X.isRequired,dashboardState:j.DZ.isRequired,slices:E().objectOf(j.Rw).isRequired,activeFilters:E().object.isRequired,chartConfiguration:E().object,datasources:E().object.isRequired,ownDataCharts:E().object.isRequired,layout:E().object.isRequired,impressionId:E().string.isRequired,timeout:E().number,userId:E().string};class Z extends s.PureComponent{static onBeforeUnload(e){e?window.addEventListener("beforeunload",Z.unload):window.removeEventListener("beforeunload",Z.unload)}static unload(){const e=(0,o.t)("You have unsaved changes.");return window.event.returnValue=e,e}constructor(e){var t,a;super(e),this.appliedFilters=null!=(t=e.activeFilters)?t:{},this.appliedOwnDataCharts=null!=(a=e.ownDataCharts)?a:{},this.onVisibilityChange=this.onVisibilityChange.bind(this)}componentDidMount(){const e=(0,C.Z)(),{dashboardState:t,layout:a}=this.props,s={is_soft_navigation:I.Yd.timeOriginOffset>0,is_edit_mode:t.editMode,mount_duration:I.Yd.getTimestamp(),is_empty:R(a),is_published:t.isPublished,bootstrap_data_length:e.length},n=(0,U.Z)();n&&(s.target_id=n),this.props.actions.logEvent(I.Wl,s),"hidden"===document.visibilityState&&(this.visibilityEventData={start_offset:I.Yd.getTimestamp(),ts:(new Date).getTime()}),window.addEventListener("visibilitychange",this.onVisibilityChange),this.applyCharts()}componentDidUpdate(){this.applyCharts()}UNSAFE_componentWillReceiveProps(e){const t=$(this.props.layout),a=$(e.layout);this.props.dashboardInfo.id===e.dashboardInfo.id&&(t.length<a.length?a.filter((e=>-1===t.indexOf(e))).forEach((t=>{return this.props.actions.addSliceToDashboard(t,(a=e.layout,s=t,Object.values(a).find((e=>e&&e.type===D.dW&&e.meta&&e.meta.chartId===s))));var a,s})):t.length>a.length&&t.filter((e=>-1===a.indexOf(e))).forEach((e=>this.props.actions.removeSliceFromDashboard(e))))}applyCharts(){const{hasUnsavedChanges:e,editMode:t}=this.props.dashboardState,{appliedFilters:a,appliedOwnDataCharts:s}=this,{activeFilters:n,ownDataCharts:i,chartConfiguration:r}=this.props;(0,S.cr)(S.TT.DashboardCrossFilters)&&!r||(t||(0,O.JB)(s,i,{ignoreUndefined:!0})&&(0,O.JB)(a,n,{ignoreUndefined:!0})||this.applyFilters(),e?Z.onBeforeUnload(!0):Z.onBeforeUnload(!1))}componentWillUnmount(){window.removeEventListener("visibilitychange",this.onVisibilityChange),this.props.actions.clearDataMaskState()}onVisibilityChange(){if("hidden"===document.visibilityState)this.visibilityEventData={start_offset:I.Yd.getTimestamp(),ts:(new Date).getTime()};else if("visible"===document.visibilityState){const e=this.visibilityEventData.start_offset;this.props.actions.logEvent(I.Ev,{...this.visibilityEventData,duration:I.Yd.getTimestamp()-e})}}applyFilters(){const{appliedFilters:e}=this,{activeFilters:t,ownDataCharts:a,slices:s}=this.props,n=Object.keys(t),i=Object.keys(e),r=new Set(n.concat(i)),o=((e,t)=>{const a=Object.keys(e),s=Object.keys(t),n=(i=a,r=s,[...i.filter((e=>!r.includes(e))),...r.filter((e=>!i.includes(e)))]).filter((a=>e[a]||t[a]));var i,r;return new Set([...a,...s]).forEach((a=>{(0,O.JB)(e[a],t[a])||n.push(a)})),[...new Set(n)]})(a,this.appliedOwnDataCharts);[...r].forEach((a=>{if(!n.includes(a)&&i.includes(a))o.push(...(0,T.H)(a,e[a],s));else if(i.includes(a)){if((0,O.JB)(e[a].values,t[a].values,{ignoreUndefined:!0})||o.push(...(0,T.H)(a,t[a],s)),!(0,O.JB)(e[a].scope,t[a].scope)){const s=(t[a].scope||[]).concat(e[a].scope||[]);o.push(...s)}}else o.push(...(0,T.H)(a,t[a],s))})),this.refreshCharts([...new Set(o)]),this.appliedFilters=t,this.appliedOwnDataCharts=a}refreshCharts(e){e.forEach((e=>{this.props.actions.triggerQuery(!0,e)}))}render(){return this.context.loading?(0,F.tZ)(c.Z,{}):this.props.children}}Z.contextType=_.Zn,Z.propTypes=q,Z.defaultProps={timeout:60,userId:""};const L=Z;var M=a(452256),P=a(797381),B=a(643399),J=a(987915),N=a(174599);const Q=(0,d.$j)((function(e){var t,a,s,n;const{datasources:i,sliceEntities:r,dataMask:o,dashboardInfo:d,dashboardState:l,dashboardLayout:c,impressionId:u,nativeFilters:p}=e;return{timeout:null==(t=d.common)||null==(a=t.conf)?void 0:a.SUPERSET_WEBSERVER_TIMEOUT,userId:d.userId,dashboardInfo:d,dashboardState:l,datasources:i,activeFilters:{...(0,B.De)(),...(0,J.g)({chartConfiguration:null==(s=d.metadata)?void 0:s.chart_configuration,nativeFilters:p.filters,dataMask:o,allSliceIds:l.sliceIds})},chartConfiguration:null==(n=d.metadata)?void 0:n.chart_configuration,ownDataCharts:(0,J.U)(o,"ownState"),slices:r.slices,layout:c.present,impressionId:u}}),(function(e){return{actions:(0,w.DE)({setDatasources:h.Fy,clearDataMaskState:N.sh,addSliceToDashboard:v.Pi,removeSliceFromDashboard:v.rL,triggerQuery:M.triggerQuery,logEvent:P.logEvent},e)}}))(L);var Y=a(964296);const z=e=>n.iv`
  body {
    h1 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.xxl}px;
      letter-spacing: -0.2px;
      margin-top: ${3*e.gridUnit}px;
      margin-bottom: ${3*e.gridUnit}px;
    }

    h2 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.xl}px;
      margin-top: ${3*e.gridUnit}px;
      margin-bottom: ${2*e.gridUnit}px;
    }

    h3,
    h4,
    h5,
    h6 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.l}px;
      letter-spacing: 0.2px;
      margin-top: ${2*e.gridUnit}px;
      margin-bottom: ${e.gridUnit}px;
    }
  }
`,V=e=>n.iv`
  .header-title a {
    margin: ${e.gridUnit/2}px;
    padding: ${e.gridUnit/2}px;
  }
  .header-controls {
    &,
    &:hover {
      margin-top: ${e.gridUnit}px;
    }
  }
`,A=e=>n.iv`
  .filter-card-popover {
    width: 240px;
    padding: 0;
    border-radius: 4px;

    &.ant-popover-placement-bottom {
      padding-top: ${e.gridUnit}px;
    }

    &.ant-popover-placement-left {
      padding-right: ${3*e.gridUnit}px;
    }

    .ant-popover-inner {
      box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    }

    .ant-popover-inner-content {
      padding: ${4*e.gridUnit}px;
    }

    .ant-popover-arrow {
      display: none;
    }
  }

  .filter-card-tooltip {
    &.ant-tooltip-placement-bottom {
      padding-top: 0;
      & .ant-tooltip-arrow {
        top: -13px;
      }
    }
  }
`,K=e=>n.iv`
  .ant-dropdown-menu.chart-context-menu {
    min-width: ${43*e.gridUnit}px;
  }
  .ant-dropdown-menu-submenu.chart-context-submenu {
    max-width: ${60*e.gridUnit}px;
    min-width: ${40*e.gridUnit}px;
  }
`,W=e=>n.iv`
  a,
  .ant-tabs-tabpane,
  .ant-tabs-tab-btn,
  .superset-button,
  .superset-button.ant-dropdown-trigger,
  .header-controls span {
    &:focus-visible {
      box-shadow: 0 0 0 2px ${e.colors.primary.dark1};
      border-radius: ${e.gridUnit/2}px;
      outline: none;
      text-decoration: none;
    }
    &:not(
        .superset-button,
        .ant-menu-item,
        a,
        .fave-unfave-icon,
        .ant-tabs-tabpane,
        .header-controls span
      ) {
      &:focus-visible {
        padding: ${e.gridUnit/2}px;
      }
    }
  }
`;var H=a(478718),X=a.n(H),G=a(999547);const ee={},te=()=>{const e=(0,g.rV)(g.dR.DashboardExploreContext,{});return Object.fromEntries(Object.entries(e).filter((([,e])=>!e.isRedundant)))},ae=(e,t)=>{const a=te();(0,g.LS)(g.dR.DashboardExploreContext,{...a,[e]:t})},se=({dashboardPageId:e})=>{const t=(0,d.v9)((({dashboardInfo:t,dashboardState:a,nativeFilters:s,dataMask:n})=>{var i,r,o,d;return{labelsColor:(null==(i=t.metadata)?void 0:i.label_colors)||ee,labelsColorMap:(null==(r=t.metadata)?void 0:r.map_label_colors)||ee,sharedLabelsColors:(0,G.fy)(null==(o=t.metadata)?void 0:o.shared_label_colors),colorScheme:null==a?void 0:a.colorScheme,chartConfiguration:(null==(d=t.metadata)?void 0:d.chart_configuration)||ee,nativeFilters:Object.entries(s.filters).reduce(((e,[t,a])=>({...e,[t]:X()(a,["chartsInScope"])})),{}),dataMask:n,dashboardId:t.id,filterBoxFilters:(0,B.De)(),dashboardPageId:e}}),d.wU);return(0,s.useEffect)((()=>(ae(e,t),()=>{ae(e,{...t,isRedundant:!0})})),[t,e]),null},ne=(0,s.createContext)(""),ie=(0,s.lazy)((()=>Promise.all([a.e(1216),a.e(6658),a.e(1323),a.e(7802),a.e(8573),a.e(876),a.e(981),a.e(9484),a.e(8109),a.e(1108),a.e(9820),a.e(3197),a.e(7317),a.e(8003),a.e(1090),a.e(9818),a.e(868),a.e(1006),a.e(4717),a.e(452)]).then(a.bind(a,358286)))),re=document.title,oe=({idOrSlug:e})=>{const t=(0,r.Fg)(),a=(0,d.I0)(),w=(0,i.k6)(),x=(0,s.useMemo)((()=>(0,Y.x0)()),[]),E=(0,d.v9)((({dashboardInfo:e})=>e&&Object.keys(e).length>0)),{addDangerToast:S}=(0,l.e1)(),{result:_,error:C}=(0,u.QU)(e),{result:D,error:$}=(0,u.Es)(e),{result:j,error:I,status:O}=(0,u.JL)(e),U=(0,s.useRef)(!1),k=C||$,R=Boolean(_&&D),{dashboard_title:T,css:q,id:Z=0}=_||{};if((0,s.useEffect)((()=>{const e=()=>{const e=te();(0,g.LS)(g.dR.DashboardExploreContext,{...e,[x]:{...e[x],isRedundant:!0}})};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[x]),(0,s.useEffect)((()=>{a((0,v.sL)(O))}),[a,O]),(0,s.useEffect)((()=>{Z&&async function(){const e=(0,m.eY)(f.KD.permalinkKey),t=(0,m.eY)(f.KD.nativeFiltersKey),s=(0,m.eY)(f.KD.nativeFilters);let n,i=t||{};if(e){const t=await(0,y.mf)(e);t&&({dataMask:i,activeTabs:n}=t.state)}else t&&(i=await(0,y.B8)(Z,t));s&&(i=s),R&&(U.current||(U.current=!0),a((0,p.Y)({history:w,dashboard:_,charts:D,activeTabs:n,dataMask:i})))}()}),[R]),(0,s.useEffect)((()=>(T&&(document.title=T),()=>{document.title=re})),[T]),(0,s.useEffect)((()=>"string"==typeof q?(0,b.Z)(q):()=>{}),[q]),(0,s.useEffect)((()=>{I?S((0,o.t)("Error loading chart datasources. Filters may not work correctly.")):a((0,h.Fy)(j))}),[S,j,I,a]),k)throw k;return R&&E?(0,F.BX)(F.HY,{children:[(0,F.tZ)(n.xB,{styles:[A(t),z(t),K(t),W(t),V(t),"",""]}),(0,F.tZ)(se,{dashboardPageId:x}),(0,F.tZ)(ne.Provider,{value:x,children:(0,F.tZ)(Q,{children:(0,F.tZ)(ie,{})})})]}):(0,F.tZ)(c.Z,{})},de=oe},987915:(e,t,a)=>{a.d(t,{U:()=>s,g:()=>n});const s=(e,t)=>Object.values(e).filter((e=>e[t])).reduce(((e,a)=>({...e,[a.id]:t?a[t]:a})),{}),n=({chartConfiguration:e,nativeFilters:t,dataMask:a,allSliceIds:s})=>{const n={};return Object.values(a).forEach((({id:a,extraFormData:i})=>{var r,o,d,l,c,u,p,h,b;const g=null!=(r=null!=(o=null!=(d=null==t||null==(l=t[a])?void 0:l.chartsInScope)?d:null==e||null==(c=e[a])||null==(u=c.crossFilters)?void 0:u.chartsInScope)?o:s)?r:[],f=null==t||null==(p=t[a])?void 0:p.filterType,m=null!=(h=null==t||null==(b=t[a])?void 0:b.targets)?h:g;n[a]={scope:g,filterType:f,targets:m,values:i}})),n}},11794:(e,t,a)=>{a.d(t,{H:()=>i});var s=a(10916);function n(e,t){return e.length===Object.keys(t).length}function i(e,t,a){var i;let r=[];const o=Object.keys(a).includes(e)&&(0,s.w0)(t),d=Array.isArray(t.scope)?t.scope:null!=(i=t.chartsInScope)?i:[];o&&(r=function(e,t,a){if(!t[e])return[];const s=[...a.filter((t=>String(t)!==e)),Number(e)],i=new Set(a);return Object.values(t).reduce(((a,r)=>r.slice_id===Number(e)?a:n(s,t)?(a.push(r.slice_id),a):(i.has(r.slice_id)&&a.push(r.slice_id),a)),[])}(e,a,d));const l=t;return(!o||(0,s.A8)(l)||(0,s.kI)(l))&&(r=function(e,t){if(n(t,e))return Object.keys(e).map(Number);const a=new Set(t);return Object.values(e).reduce(((e,t)=>(a.has(t.slice_id)&&e.push(t.slice_id),e)),[])}(a,d)),r}},514505:(e,t,a)=>{function s(e){const t="CssEditor-css",a=document.head||document.getElementsByTagName("head")[0],s=document.querySelector(`.${t}`)||function(e){const t=document.createElement("style");return t.className=e,t.type="text/css",t}(t);return"styleSheet"in s?s.styleSheet.cssText=e:s.innerHTML=e,a.appendChild(s),function(){s.remove()}}a.d(t,{Z:()=>s})},708743:(e,t,a)=>{a.d(t,{schemaEndpoints:()=>S.Kt,CN:()=>s.CN,$K:()=>E.$K,tableEndpoints:()=>E.QD,$O:()=>b,hb:()=>v,QU:()=>y,Es:()=>w,JL:()=>x,L8:()=>C,Xx:()=>S.Xx,SJ:()=>E.SJ,uY:()=>E.uY,zA:()=>E.zA});var s=a(845673),n=a(242190),i=a(667294),r=a(938325),o=a(610362);const d=o.h.injectEndpoints({endpoints:e=>({catalogs:e.query({providesTags:[{type:"Catalogs",id:"LIST"}],query:({dbId:e,forceRefresh:t})=>({endpoint:`/api/v1/database/${e}/catalogs/`,urlParams:{force:t},transformResponse:({json:e})=>e.result.sort().map((e=>({value:e,label:e,title:e})))}),serializeQueryArgs:({queryArgs:{dbId:e}})=>({dbId:e})})})}),{useLazyCatalogsQuery:l,useCatalogsQuery:c,endpoints:u,util:p}=d,h=[];function b(e){const{dbId:t,onSuccess:a,onError:s}=e||{},[n]=l(),o=c({dbId:t,forceRefresh:!1},{skip:!t}),d=(0,r.Z)(((e,t=!1)=>{!e||o.currentData&&!t||n({dbId:e,forceRefresh:t}).then((({isSuccess:e,isError:n,data:i})=>{e&&(null==a||a(i||h,t)),n&&(null==s||s())}))})),u=(0,i.useCallback)((()=>{d(t,!0)}),[t,d]);return(0,i.useEffect)((()=>{d(t,!1)}),[t,d]),{...o,refetch:u}}var g=a(115926);function f({owners:e}){return e?e.map((e=>`${e.first_name} ${e.last_name}`)):null}const m=a.n(g)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function v(e){return(0,n.l6)((0,n.s_)(`/api/v1/chart/${e}?q=${m}`),f)}const y=e=>(0,n.l6)((0,n.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json),owners:e.owners||[]}))),w=e=>(0,n.s_)(`/api/v1/dashboard/${e}/charts`),x=e=>(0,n.s_)(`/api/v1/dashboard/${e}/datasets`);var E=a(123936),S=a(469279);const _=o.h.injectEndpoints({endpoints:e=>({queryValidations:e.query({providesTags:["QueryValidations"],query:({dbId:e,catalog:t,schema:a,sql:s,templateParams:n})=>{let i=n;try{i=JSON.parse(n||"")}catch(e){i=void 0}const r={catalog:t,schema:a,sql:s,...i&&{template_params:i}};return{method:"post",endpoint:`/api/v1/database/${e}/validate_sql/`,headers:{"Content-Type":"application/json"},body:JSON.stringify(r),transformResponse:({json:e})=>e.result}}})})}),{useQueryValidationsQuery:C}=_}}]);
//# sourceMappingURL=bb514b8120c8fe9e5cd7.chunk.js.map