(()=>{var e,t,a,r,o,n,s,i={90666:(e,t,a)=>{"use strict";var r={};a.r(r),a.d(r,{FETCH_DASHBOARDS_FAILED:()=>R,FETCH_DASHBOARDS_SUCCEEDED:()=>k,REMOVE_SAVE_MODAL_ALERT:()=>j,SAVE_SLICE_FAILED:()=>$,SAVE_SLICE_SUCCESS:()=>M,fetchDashboards:()=>I,fetchDashboardsFailed:()=>N,fetchDashboardsSucceeded:()=>O,removeSaveModalAlert:()=>L,saveSlice:()=>z,saveSliceFailed:()=>U,saveSliceSuccess:()=>F});var o={};a.r(o),a.d(o,{CREATE_NEW_SLICE:()=>ve,FETCH_DATASOURCES_STARTED:()=>ae,FETCH_DATASOURCES_SUCCEEDED:()=>oe,FETCH_DATASOURCE_SUCCEEDED:()=>ee,FETCH_FAVE_STAR:()=>ce,POST_DATASOURCE_STARTED:()=>X,SAVE_FAVE_STAR:()=>de,SET_DATASOURCE:()=>W,SET_DATASOURCES:()=>J,SET_DATASOURCE_TYPE:()=>B,SET_EXPLORE_CONTROLS:()=>pe,SET_FIELD_VALUE:()=>fe,SET_FORCE_QUERY:()=>we,SLICE_UPDATED:()=>Se,TOGGLE_FAVE_STAR:()=>se,UPDATE_CHART_TITLE:()=>me,createNewSlice:()=>ye,exploreActions:()=>Te,fetchDatasourceSucceeded:()=>te,fetchDatasourcesStarted:()=>re,fetchDatasourcesSucceeded:()=>ne,fetchFaveStar:()=>le,saveFaveStar:()=>ue,setControlValue:()=>he,setDatasource:()=>Y,setDatasourceType:()=>K,setDatasources:()=>G,setExploreControls:()=>be,setForceQuery:()=>Ee,sliceUpdated:()=>_e,toggleFaveStar:()=>ie,updateChartTitle:()=>ge});var n=a(67294),s=a(90731),i=a(14890),c=a(53894),l=a(14670),d=a.n(l),u=a(31069),f=a(9679),h=a(97381),p=a(3741),b=a(23279),m=a.n(b);const g=new class{constructor({callback:e=(()=>{}),sizeThreshold:t=1e3,delayThreshold:a=1e3}){this.queue=[],this.sizeThreshold=t,this.delayThrehold=a,this.trigger=m()(this.trigger.bind(this),this.delayThrehold),this.callback=e}append(e){this.queue.push(e),this.trigger()}trigger(){if(this.queue.length>0){const e=this.queue.splice(0,this.sizeThreshold);this.callback.call(null,e),this.queue.length>0&&this.trigger()}}}({callback:e=>{if(e.length<=0)return;let t="/superset/log/?explode=events";const{source:a,source_id:r}=e[0];if("dashboard"===a?t+=`&dashboard_id=${r}`:"slice"===a&&(t+=`&slice_id=${r}`),navigator.sendBeacon){const a=new FormData;a.append("events",(0,f.o)(e)),navigator.sendBeacon(t,a)}else u.Z.post({endpoint:t,postPayload:{events:e},parseMethod:null})},sizeThreshold:1024,delayThreshold:1e3});let v=0;var y=a(91877),S=a(99543),_=a(72570),w=a(1927);function E(e=[]){const t=[];return e.forEach((([e,a])=>{const r="danger"===e?w.p.DANGER:"success"===e&&w.p.SUCCESS||w.p.INFO,o=(0,_.fz)({text:a,toastType:r}).payload;t.push(o)})),t}var T=a(12515),x=a(35854),C=a(10331),Z=a(61358),A=a(37863),D=a(8868);const k="FETCH_DASHBOARDS_SUCCEEDED";function O(e){return{type:k,choices:e}}const R="FETCH_DASHBOARDS_FAILED";function N(e){return{type:R,userId:e}}function I(e){return function(t){return u.Z.get({endpoint:`/dashboardasync/api/read?_flt_0_owners=${e}`}).then((({json:e})=>{const a=e.pks.map(((t,a)=>({value:t,label:(e.result[a]||{}).dashboard_title})));return t(O(a))})).catch((()=>t(N(e))))}}const $="SAVE_SLICE_FAILED";function U(){return{type:$}}const M="SAVE_SLICE_SUCCESS";function F(e){return{type:M,data:e}}const j="REMOVE_SAVE_MODAL_ALERT";function L(){return{type:j}}function z(e,t){return a=>{const r=(0,T.H6)({formData:e,endpointType:"base",force:!1,curUrl:null,requestParams:t}),o=(0,T.u)({formData:e,force:!1,resultFormat:"json",resultType:"full"});return u.Z.post({url:r,postPayload:{form_data:e,query_context:o}}).then((e=>(a(F(e.json)),e.json))).catch((()=>a(U())))}}var P=a(55786),q=a(52256),H=a(69856),Q=a(61988);const V="/superset/favstar/slice",B="SET_DATASOURCE_TYPE";function K(e){return{type:B,datasourceType:e}}const W="SET_DATASOURCE";function Y(e){return{type:W,datasource:e}}const J="SET_DATASOURCES";function G(e){return{type:J,datasources:e}}const X="POST_DATASOURCE_STARTED",ee="FETCH_DATASOURCE_SUCCEEDED";function te(){return{type:ee}}const ae="FETCH_DATASOURCES_STARTED";function re(){return{type:ae}}const oe="FETCH_DATASOURCES_SUCCEEDED";function ne(){return{type:oe}}const se="TOGGLE_FAVE_STAR";function ie(e){return{type:se,isStarred:e}}const ce="FETCH_FAVE_STAR";function le(e){return function(t){u.Z.get({endpoint:`${V}/${e}/count/`}).then((({json:e})=>{e.count>0&&t(ie(!0))}))}}const de="SAVE_FAVE_STAR";function ue(e,t){return function(a){const r=t?"unselect":"select";u.Z.get({endpoint:`${V}/${e}/${r}/`}).then((()=>a(ie(!t)))).catch((()=>{a((0,_.Gb)((0,Q.t)("An error occurred while starring this chart")))}))}}const fe="SET_FIELD_VALUE";function he(e,t,a){return{type:fe,controlName:e,value:t,validationErrors:a}}const pe="UPDATE_EXPLORE_CONTROLS";function be(e){return{type:pe,formData:e}}const me="UPDATE_CHART_TITLE";function ge(e){return{type:me,sliceName:e}}const ve="CREATE_NEW_SLICE";function ye(e,t,a,r,o){return{type:ve,can_add:e,can_download:t,can_overwrite:a,slice:r,form_data:o}}const Se="SLICE_UPDATED";function _e(e){return{type:Se,slice:e}}const we="SET_FORCE_QUERY";function Ee(e){return{type:we,force:e}}const Te={..._.s2,setDatasourceType:K,setDatasource:Y,setDatasources:G,fetchDatasourcesStarted:re,fetchDatasourcesSucceeded:ne,toggleFaveStar:ie,fetchFaveStar:le,saveFaveStar:ue,setControlValue:he,setExploreControls:be,updateChartTitle:ge,createNewSlice:ye,sliceUpdated:_e,setForceQuery:Ee},xe=(0,i.UY)({charts:A.Z,saveModal:function(e={},t){const a={[k]:()=>({...e,dashboards:t.choices}),[R]:()=>({...e,saveModalAlert:`fetching dashboards failed for ${t.userId}`}),[$]:()=>({...e,saveModalAlert:"Failed to save slice"}),[M]:t=>({...e,data:t}),[j]:()=>({...e,saveModalAlert:null})};return t.type in a?a[t.type]():e},dataMask:D.Z,explore:function(e={},t){const a={[q.DYNAMIC_PLUGIN_CONTROLS_READY]:()=>({...e,controls:t.controlsState}),[se]:()=>({...e,isStarred:t.isStarred}),[X]:()=>({...e,isDatasourceMetaLoading:!0}),[W](){const a={...e.form_data};t.datasource.type!==e.datasource.type&&("table"===t.datasource.type?(a.granularity_sqla=t.datasource.granularity_sqla,a.time_grain_sqla=t.datasource.time_grain_sqla,delete a.druid_time_origin,delete a.granularity):(a.druid_time_origin=t.datasource.druid_time_origin,a.granularity=t.datasource.granularity,delete a.granularity_sqla,delete a.time_grain_sqla));const r={...e.controls},o=[];t.datasource.id===e.datasource.id&&t.datasource.type===e.datasource.type||(a.time_range=H.X5,Object.entries(r).forEach((([e,n])=>{("column_name"===n.valueKey||"savedMetrics"in n||"columns"in n||"options"in n&&!Array.isArray(n.options))&&(r[e]={...n},a[e]=(0,C.YY)(t.datasource,n,n.value),(0,P.Z)(a[e]).length>0&&a[e]!==r[e].default&&o.push(e))})));const n={...e,controls:r,datasource:t.datasource,datasource_id:t.datasource.id,datasource_type:t.datasource.type};return{...n,form_data:a,controls:(0,x.R3)(n,a),controlsTransferred:o}},[ae]:()=>({...e,isDatasourcesLoading:!0}),[J]:()=>({...e,datasources:t.datasources}),[fe](){const{controlName:a,value:r,validationErrors:o}=t;let n={...e.form_data,[a]:r};const s=e.form_data.metrics,i=e.form_data.column_config,c=n.viz_type;"metrics"===a&&s&&i&&(r.forEach(((e,t)=>{var a,r;(null==e?void 0:e.label)!==(null==(a=s[t])?void 0:a.label)&&i[null==(r=s[t])?void 0:r.label]&&(i[e.label]=i[s[t].label],delete i[s[t].label])})),n.column_config=i);const l=e.controls[t.controlName]||(0,C.Bx)(t.controlName,c)||{},d={...(0,C.vP)(l,e,t.value)},u={...e.controls.column_config,...i&&{value:i}},f={...e,controls:{...e.controls,[a]:d,..."metrics"===a&&{column_config:u}}},h={};Array.isArray(d.rerender)&&d.rerender.forEach((e=>{h[e]={...(0,C.vP)(f.controls[e],f,f.controls[e].value)}}));const p=d.validationErrors||[];(o||[]).forEach((e=>{p.includes(e)||p.push(e)}));const b=p&&p.length>0,m="viz_type"===t.controlName&&t.value!==e.controls.viz_type.value;let g=e.controls;if(m){const a=new C.os(e.form_data).transform(t.value,e);n=a.formData,g=a.controlsState}return{...e,form_data:n,triggerRender:d.renderTrigger&&!b,controls:{...g,[t.controlName]:{...d,validationErrors:p},...h}}},[pe]:()=>({...e,controls:(0,x.R3)(e,t.formData)}),[me]:()=>({...e,sliceName:t.sliceName}),[ve]:()=>({...e,slice:t.slice,controls:(0,x.R3)(e,t.form_data),can_add:t.can_add,can_download:t.can_download,can_overwrite:t.can_overwrite}),[Se](){var a,r;return{...e,slice:{...e.slice,...t.slice,owners:null!=(a=t.slice.owners)?a:null},sliceName:null!=(r=t.slice.slice_name)?r:e.sliceName}},[we]:()=>({...e,force:t.force})};return t.type in a?a[t.type]():e},impressionId:(e="")=>e,messageToasts:function(e=[],t){switch(t.type){case _.h:{const{payload:a}=t,r=e.slice();return a.noDuplicate&&r.find((e=>e.text===a.text))?e:[a,...e]}case _.K7:{const{payload:{id:a}}=t;return[...e].filter((e=>e.id!==a))}default:return e}},reports:function(e={},t){const a={[Z.jt](){var a,r;const{report:o,resourceId:n,creationMethod:s,filterField:i}=t,c=null==(a=o.result)?void 0:a.find((e=>e[i]===n));if(c)return{...e,[s]:{...e[s],[n]:c}};if(null!=e&&null!=(r=e[s])&&r[n]){const t={...e};return delete t[s][n],t}return{...e}},[Z.J8](){const{result:a,id:r}=t.json,o={...a,id:r},n=o.dashboard||o.chart;return{...e,[o.creation_method]:{...e[o.creation_method],[n]:o}}},[Z.Dr](){const a={...t.json.result,id:t.json.id},r=a.dashboard||a.chart;return{...e,[a.creation_method]:{...e[a.creation_method],[r]:a}}}};return t.type in a?a[t.type]():e}});var Ce=a(37703),Ze=a(38626),Ae=a(57865),De=a(68135),ke=a(31405),Oe=a(14278),Re=a(5667),Ne=a(38552),Ie=a(9312),$e=a(85156),Ue=a(11965),Me=a(5872),Fe=a.n(Me),je=a(78718),Le=a.n(je),ze=a(45697),Pe=a.n(ze),qe=a(51995),He=a(68492),Qe=a(29119),Ve=a(28615),Be=a(58593),Ke=a(60812),We=a(33626),Ye=a(70163),Je=a(61337),Ge=a(27600),Xe=a(23525),et=a(94184),tt=a.n(et),at=a(50810),rt=a(2275),ot=a(1510),nt=a(40219),st=a(6954),it=a(40323),ct=a(99612),lt=a(18239),dt=a(48251),ut=a(89555),ft=a(37921),ht=a(30381),pt=a.n(ht);const bt=({cachedTimestamp:e})=>{const t=e?(0,Ue.tZ)("span",null,(0,Q.t)("Loaded data cached"),(0,Ue.tZ)("b",null," ",pt().utc(e).fromNow())):(0,Q.t)("Loaded from cache");return(0,Ue.tZ)("span",null,t,". ",(0,Q.t)("Click to force-refresh"))},mt=({className:e,onClick:t,cachedTimestamp:a})=>{const[r,o]=(0,n.useState)(!1),s=r?"primary":"default";return(0,Ue.tZ)(Be.u,{title:(0,Ue.tZ)(bt,{cachedTimestamp:a}),id:"cache-desc-tooltip"},(0,Ue.tZ)(ft.Z,{className:`${e}`,type:s,onClick:t,onMouseOver:()=>o(!0),onMouseOut:()=>o(!1)},(0,Q.t)("Cached")," ",(0,Ue.tZ)("i",{className:"fa fa-refresh"})))};var gt=a(44814);const vt=(0,qe.iK)(ft.Z)`
  text-align: left;
`;function yt({endTime:e,isRunning:t,startTime:a,status:r="success"}){const[o,s]=(0,n.useState)("00:00:00.00"),i=(0,n.useRef)();return(0,n.useEffect)((()=>{const r=()=>{i.current&&(clearInterval(i.current),i.current=void 0)};return t&&(i.current=setInterval((()=>{if(a){const o=e||(0,gt.zO)();a<o&&s((0,gt.zQ)(a,o)),t||r()}}),30)),r}),[e,t,a]),(0,Ue.tZ)(vt,{type:r,role:"timer"},o)}var St;!function(e){e.failed="danger",e.loading="warning",e.success="success"}(St||(St={}));const _t=(0,n.forwardRef)((({queriesResponse:e,chartStatus:t,chartUpdateStartTime:a,chartUpdateEndTime:r,refreshCachedQuery:o,rowLimit:n},s)=>{const i="loading"===t,c=null==e?void 0:e[0];return(0,Ue.tZ)("div",{ref:s},(0,Ue.tZ)("div",{css:e=>Ue.iv`
            display: flex;
            justify-content: flex-end;
            padding-bottom: ${4*e.gridUnit}px;
            & .ant-tag:last-of-type {
              margin: 0;
            }
          `},!i&&c&&(0,Ue.tZ)(ut.Z,{rowcount:Number(c.rowcount)||0,limit:Number(n)||0}),!i&&(null==c?void 0:c.is_cached)&&(0,Ue.tZ)(mt,{onClick:o,cachedTimestamp:c.cached_dttm}),(0,Ue.tZ)(yt,{startTime:a,endTime:r,isRunning:i,status:St[t]})))}));var wt=a(35932);const Et=qe.iK.div`
  ${({theme:e})=>Ue.iv`
    margin: ${4*e.gridUnit}px;
    padding: ${4*e.gridUnit}px;

    border: 1px solid ${e.colors.info.base};
    background-color: ${e.colors.info.light2};
    border-radius: 2px;

    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;

    p {
      margin-bottom: ${e.gridUnit}px;
    }

    & a,
    & span[role='button'] {
      color: inherit;
      text-decoration: underline;
      &:hover {
        color: ${e.colors.info.dark1};
      }
    }

    &.alert-type-warning {
      border-color: ${e.colors.alert.base};
      background-color: ${e.colors.alert.light2};

      p {
        color: ${e.colors.alert.dark2};
      }

      & a:hover,
      & span[role='button']:hover {
        color: ${e.colors.alert.dark1};
      }
    }
  `}
`,Tt=qe.iK.div`
  display: flex;
  justify-content: flex-end;
  button {
    line-height: 1;
  }
`,xt=qe.iK.p`
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,Ct=(0,n.forwardRef)((({title:e,bodyText:t,primaryButtonAction:a,secondaryButtonAction:r,primaryButtonText:o,secondaryButtonText:n,type:s="info",className:i=""},c)=>(0,Ue.tZ)(Et,{className:`alert-type-${s} ${i}`,ref:c},(0,Ue.tZ)(xt,null,e),(0,Ue.tZ)("p",null,t),o&&a&&(0,Ue.tZ)(Tt,null,r&&n&&(0,Ue.tZ)(wt.Z,{buttonStyle:"link",buttonSize:"small",onClick:r},n),(0,Ue.tZ)(wt.Z,{buttonStyle:"warning"===s?"warning":"primary",buttonSize:"small",onClick:a},o)))));var Zt=a(75701);const At={actions:Pe().object.isRequired,onQuery:Pe().func,can_overwrite:Pe().bool.isRequired,can_download:Pe().bool.isRequired,datasource:Pe().object,dashboardId:Pe().number,column_formats:Pe().object,containerId:Pe().string.isRequired,isStarred:Pe().bool.isRequired,slice:Pe().object,sliceName:Pe().string,table_name:Pe().string,vizType:Pe().string.isRequired,form_data:Pe().object,ownState:Pe().object,standalone:Pe().number,force:Pe().bool,timeout:Pe().number,chartIsStale:Pe().bool,chart:rt.$6,errorMessage:Pe().node,triggerRender:Pe().bool},Dt=1.25,kt=[100,0],Ot=[300,65],Rt=qe.iK.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  overflow: auto;
  box-shadow: none;
  height: 100%;

  & > div {
    height: 100%;
  }

  .gutter {
    border-top: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-bottom: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    width: ${({theme:e})=>9*e.gridUnit}px;
    margin: ${({theme:e})=>e.gridUnit*Dt}px auto;
  }

  .gutter.gutter-vertical {
    cursor: row-resize;
  }

  .ant-collapse {
    .ant-tabs {
      height: 100%;
      .ant-tabs-nav {
        padding-left: ${({theme:e})=>5*e.gridUnit}px;
        margin: 0;
      }
      .ant-tabs-content-holder {
        overflow: hidden;
        .ant-tabs-content {
          height: 100%;
        }
      }
    }
  }
`,Nt=({chart:e,slice:t,vizType:a,ownState:r,triggerRender:o,force:s,datasource:i,errorMessage:c,form_data:l,onQuery:d,actions:f,timeout:h,standalone:p,chartIsStale:b,chartAlert:m})=>{const g=(0,qe.Fg)(),v=g.gridUnit*Dt,y=g.gridUnit*Dt,{width:S,height:_,ref:w}=(0,ct.NB)({refreshMode:"debounce",refreshRate:300}),[E,x]=(0,n.useState)((0,Je.rV)(Je.dR.chart_split_sizes,kt)),C=!m&&b&&"failed"!==e.chartStatus&&(0,P.Z)(e.queriesResponse).length>0,Z=(0,n.useCallback)((async function(){if(t&&null===t.query_context){const e=(0,T.u)({formData:t.form_data,force:s,resultFormat:"json",resultType:"full",setDataMask:null,ownState:null});await u.Z.put({endpoint:`/api/v1/chart/${t.slice_id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify({query_context:JSON.stringify(e),query_context_generation:!0})})}}),[t]);(0,n.useEffect)((()=>{Z()}),[Z]),(0,n.useEffect)((()=>{(0,Je.LS)(Je.dR.chart_split_sizes,E)}),[E]);const A=(0,n.useCallback)((e=>{x(e)}),[]),D=(0,n.useCallback)((()=>{f.setForceQuery(!0),f.postChartFormData(l,!0,h,e.id,void 0,r),f.updateQueryFormData(l,e.id)}),[f,e.id,l,r,h]),k=(0,n.useCallback)((e=>{let t;t=e?[60,40]:kt,x(t)}),[]),O=(0,n.useCallback)((()=>(0,Ue.tZ)("div",{css:Ue.iv`
          min-height: 0;
          flex: 1;
          overflow: auto;
        `,ref:w},S&&_&&(0,Ue.tZ)(lt.Z,{width:Math.floor(S),height:_,ownState:r,annotationData:e.annotationData,chartAlert:e.chartAlert,chartStackTrace:e.chartStackTrace,chartId:e.id,chartStatus:e.chartStatus,triggerRender:o,force:s,datasource:i,errorMessage:c,formData:l,latestQueryFormData:e.latestQueryFormData,onQuery:d,queriesResponse:e.queriesResponse,chartIsStale:b,setControlValue:f.setControlValue,timeout:h,triggerQuery:e.triggerQuery,vizType:a}))),[f.setControlValue,e.annotationData,e.chartAlert,e.chartStackTrace,e.chartStatus,e.id,e.latestQueryFormData,e.queriesResponse,e.triggerQuery,b,_,w,S,i,c,s,l,d,r,h,o,a]),R=(0,n.useMemo)((()=>(0,Ue.tZ)("div",{className:"panel-body",css:Ue.iv`
          display: flex;
          flex-direction: column;
        `},C&&(0,Ue.tZ)(Ct,{title:c?(0,Q.t)("Required control values have been removed"):(0,Q.t)("Your chart is not up to date"),bodyText:c?(0,Zt.J)(!1):(0,Ue.tZ)("span",null,(0,Q.t)('You updated the values in the control panel, but the chart was not updated automatically. Run the query by clicking on the "Update chart" button or')," ",(0,Ue.tZ)("span",{role:"button",tabIndex:0,onClick:d},(0,Q.t)("click here")),"."),type:"warning",css:e=>Ue.iv`
              margin: 0 0 ${4*e.gridUnit}px 0;
            `}),(0,Ue.tZ)(_t,{queriesResponse:e.queriesResponse,chartStatus:e.chartStatus,chartUpdateStartTime:e.chartUpdateStartTime,chartUpdateEndTime:e.chartUpdateEndTime,refreshCachedQuery:D,rowLimit:null==l?void 0:l.row_limit}),O())),[C,c,d,e.queriesResponse,e.chartStatus,e.chartUpdateStartTime,e.chartUpdateEndTime,D,null==l?void 0:l.row_limit,O]),N=(0,n.useMemo)((()=>O()),[O]),[I,$]=(0,n.useState)(e.latestQueryFormData);(0,n.useEffect)((()=>{o||$(e.latestQueryFormData)}),[e.latestQueryFormData]);const U=(0,n.useCallback)(((e,t,a)=>({[e]:`calc(${t}% - ${a+v}px)`})),[v]);if(p){const e="background-transparent";return document.body.className.split(" ").includes(e)||(document.body.className+=` ${e}`),N}return(0,Ue.tZ)(Rt,{className:"panel panel-default chart-container"},"filter_box"===a?R:(0,Ue.tZ)(it.Z,{sizes:E,minSize:Ot,direction:"vertical",gutterSize:y,onDragEnd:A,elementStyle:U,expandToMin:!0},R,(0,Ue.tZ)(dt.c9,{ownState:r,queryFormData:I,datasource:i,queryForce:s,onCollapseChange:k,chartStatus:e.chartStatus,errorMessage:c,actions:f})))};Nt.propTypes=At;const It=Nt;var $t=a(46078),Ut=a(37687),Mt=a(75289),Ft=a(9882),jt=a(43700),Lt=a(71262),zt=a(38703),Pt=a(49484),qt=a(61357),Ht=a(41030);const Qt=({loading:e,onQuery:t,onStop:a,errorMessage:r,isNewChart:o,canStopQuery:n,chartIsStale:s})=>e?(0,Ue.tZ)(wt.Z,{onClick:a,buttonStyle:"warning",disabled:!n},(0,Ue.tZ)("i",{className:"fa fa-stop-circle-o"})," ",(0,Q.t)("Stop")):(0,Ue.tZ)(wt.Z,{onClick:t,buttonStyle:s?"primary":"secondary",disabled:!!r},o?(0,Q.t)("Create chart"):(0,Q.t)("Update chart")),Vt=e=>Ue.iv`
  display: flex;
  position: sticky;
  bottom: 0;
  flex-direction: column;
  align-items: center;
  padding: ${4*e.gridUnit}px;
  z-index: 999;
  background: linear-gradient(
    ${(0,Pt.rgba)(e.colors.grayscale.light5,0)},
    ${e.colors.grayscale.light5} ${e.opacity.mediumLight}
  );

  & > button {
    min-width: 156px;
  }
`,Bt=qe.iK.div`
  position: relative;
  height: 100%;
  width: 100%;

  // Resizable add overflow-y: auto as a style to this div
  // To override it, we need to use !important
  overflow: visible !important;
  #controlSections {
    height: 100%;
    overflow: visible;
  }
  .nav-tabs {
    flex: 0 0 1;
  }
  .tab-content {
    overflow: auto;
    flex: 1 1 100%;
  }
  .Select__menu {
    max-width: 100%;
  }
  .type-label {
    margin-right: ${({theme:e})=>3*e.gridUnit}px;
    width: ${({theme:e})=>7*e.gridUnit}px;
    display: inline-block;
    text-align: center;
    font-weight: ${({theme:e})=>e.typography.weights.bold};
  }
`,Kt=(0,qe.iK)(Lt.ZP)`
  ${({theme:e,fullWidth:t})=>Ue.iv`
    height: 100%;
    overflow: visible;
    .ant-tabs-nav {
      margin-bottom: 0;
    }
    .ant-tabs-nav-list {
      width: ${t?"100%":"50%"};
    }
    .ant-tabs-tabpane {
      height: 100%;
    }
    .ant-tabs-content-holder {
      padding-top: ${4*e.gridUnit}px;
    }

    .ant-collapse-ghost > .ant-collapse-item {
      &:not(:last-child) {
        border-bottom: 1px solid ${e.colors.grayscale.light3};
      }

      & > .ant-collapse-header {
        font-size: ${e.typography.sizes.s}px;
      }

      & > .ant-collapse-content > .ant-collapse-content-box {
        padding-bottom: 0;
        font-size: ${e.typography.sizes.s}px;
      }
    }
  `}
`,Wt=(e,t)=>e.reduce(((e,a)=>!a.expanded||(e=>!!e.label&&(Mt.sections.legacyRegularTime.label===e.label||Mt.sections.legacyTimeseriesTime.label===e.label))(a)&&!(e=>{var t;return(null==e||null==(t=e.columns)?void 0:t.some((e=>e.is_dttm)))||e.type===$t.i9.Druid})(t)?e:[...e,String(a.label)]),[]),Yt=e=>{var t,a;const r=(0,n.useContext)(Oe.Zn),o=(0,Ke.D)(e.exploreState),s=(0,Ke.D)(e.exploreState.datasource),[i,c]=(0,n.useState)(!1),l=(0,n.useRef)(null);(0,n.useEffect)((()=>{var t,a,r;!s||(null==(t=e.exploreState.datasource)?void 0:t.id)===s.id&&(null==(a=e.exploreState.datasource)?void 0:a.type)===s.type||(c(!0),null==(r=l.current)||r.scrollTo(0,0))}),[null==(t=e.exploreState.datasource)?void 0:t.id,null==(a=e.exploreState.datasource)?void 0:a.type,s]);const{expandedQuerySections:d,expandedCustomizeSections:u,querySections:f,customizeSections:h}=(0,n.useMemo)((()=>function(e,t,a){const r=[],o=[];return(0,C.Bq)(e,a).forEach((e=>{"data"===e.tabOverride||e.controlSetRows.some((e=>e.some((e=>e&&"object"==typeof e&&"config"in e&&e.config&&(!e.config.renderTrigger||"data"===e.config.tabOverride)))))?r.push(e):o.push(e)})),{expandedQuerySections:Wt(r,t),expandedCustomizeSections:Wt(o,t),querySections:r,customizeSections:o}}(e.form_data.viz_type,e.exploreState.datasource,e.datasource_type)),[e.exploreState.datasource,e.form_data.viz_type,e.datasource_type]),p=(0,n.useCallback)((()=>{(0,P.Z)(e.exploreState.controlsTransferred).forEach((t=>e.actions.setControlValue(t,e.controls[t].default)))}),[e.actions,e.exploreState.controlsTransferred,e.controls]),b=(0,n.useCallback)((()=>{p(),c(!1)}),[p]),m=(0,n.useCallback)((()=>{c(!1)}),[]),g=({name:t,config:a})=>{const{controls:r,chart:n,exploreState:s}=e;return Boolean(null==a.shouldMapStateToProps?void 0:a.shouldMapStateToProps(o||s,s,r[t],n))},v=t=>{const{controls:a}=e,{label:r,description:o}=t,s=String(r),i=t.controlSetRows.some((e=>e.some((e=>{const t="string"==typeof e?e:e&&"name"in e?e.name:null;return t&&t in a&&a[t].validationErrors&&a[t].validationErrors.length>0}))));return(0,Ue.tZ)(jt.Z.Panel,{css:e=>Ue.iv`
          margin-bottom: 0;
          box-shadow: none;

          &:last-child {
            padding-bottom: ${16*e.gridUnit}px;
            border-bottom: 0;
          }

          .panel-body {
            margin-left: ${4*e.gridUnit}px;
            padding-bottom: 0;
          }

          span.label {
            display: inline-block;
          }
        `,header:(0,Ue.tZ)((()=>(0,Ue.tZ)("span",null,(0,Ue.tZ)("span",null,r)," ",o&&(0,Ue.tZ)(Ft.V,{label:s,tooltip:o}),i&&(0,Ue.tZ)(Ft.V,{label:"validation-errors",bsStyle:"danger",tooltip:"This section contains validation errors"}))),null),key:s},t.controlSetRows.map(((t,a)=>{const r=t.map((t=>t?n.isValidElement(t)?t:t.name&&t.config&&"datasource"!==t.name?(({name:t,config:a})=>{const{controls:r,chart:o,exploreState:n}=e,{visibility:s}=a,i={...a,...r[t],...g({name:t,config:a})?null==a||null==a.mapStateToProps?void 0:a.mapStateToProps(n,r[t],o):void 0,name:t},{validationErrors:c,...l}=i,d=s?s.call(a,e,i):void 0;return(0,Ue.tZ)(Ht.Z,Fe()({key:`control-${t}`,name:t,validationErrors:c,actions:e.actions,isVisible:d},l))})(t):null:null)).filter((e=>null!==e));return 0===r.length?null:(0,Ue.tZ)(qt.Z,{key:`controlsetrow-${a}`,controls:r})})))},y=(0,P.Z)(e.exploreState.controlsTransferred).length>0,S=(0,n.useCallback)((()=>y?(0,Ue.tZ)(Ct,{title:(0,Q.t)("Keep control settings?"),bodyText:(0,Q.t)("You've changed datasets. Any controls with data (columns, metrics) that match this new dataset have been retained."),primaryButtonAction:m,secondaryButtonAction:b,primaryButtonText:(0,Q.t)("Continue"),secondaryButtonText:(0,Q.t)("Clear form"),type:"info"}):(0,Ue.tZ)(Ct,{title:(0,Q.t)("No form settings were maintained"),bodyText:(0,Q.t)("We were unable to carry over any controls when switching to this new dataset."),primaryButtonAction:m,primaryButtonText:(0,Q.t)("Continue"),type:"warning"})),[b,m,y]),_=(0,n.useMemo)((()=>(0,Ue.tZ)(n.Fragment,null,(0,Ue.tZ)("span",null,(0,Q.t)("Data")),e.errorMessage&&(0,Ue.tZ)("span",{css:e=>Ue.iv`
              font-size: ${e.typography.sizes.xs}px;
              margin-left: ${2*e.gridUnit}px;
            `}," ",(0,Ue.tZ)(Be.u,{id:"query-error-tooltip",placement:"right",title:e.errorMessage},(0,Ue.tZ)("i",{className:"fa fa-exclamation-circle text-danger fa-lg"}))))),[e.errorMessage]);if(!(0,Ut.Z)().has(e.form_data.viz_type)&&r.loading)return(0,Ue.tZ)(zt.Z,null);const w=h.length>0;return(0,Ue.tZ)(Bt,{ref:l},(0,Ue.tZ)(Kt,{id:"controlSections",fullWidth:w,allowOverflow:!1},(0,Ue.tZ)(Lt.ZP.TabPane,{key:"query",tab:_},(0,Ue.tZ)(jt.Z,{defaultActiveKey:d,expandIconPosition:"right",ghost:!0},i&&(0,Ue.tZ)(S,null),f.map(v))),w&&(0,Ue.tZ)(Lt.ZP.TabPane,{key:"display",tab:(0,Q.t)("Customize")},(0,Ue.tZ)(jt.Z,{defaultActiveKey:u,expandIconPosition:"right",ghost:!0},h.map(v)))),(0,Ue.tZ)("div",{css:Vt},(0,Ue.tZ)(Qt,{onQuery:e.onQuery,onStop:e.onStop,errorMessage:e.errorMessage,loading:"loading"===e.chart.chartStatus,isNewChart:!e.chart.queriesResponse,canStopQuery:e.canStopQuery,chartIsStale:e.chartIsStale})))};var Jt=a(9875),Gt=a(49238),Xt=a(29487),ea=a(30724),ta=a.n(ea),aa=a(74069),ra=a(87183),oa=a(4715);const na="save_chart_recent_dashboard",sa=(0,Q.t)("**Select** a dashboard OR **create** a new one"),ia=(0,qe.iK)(aa.Z)`
  .ant-modal-body {
    overflow: visible;
  }
`;class ca extends n.Component{constructor(e){super(e),this.state={saveToDashboardId:null,newSliceName:e.sliceName,alert:null,action:this.canOverwriteSlice()?"overwrite":"saveas"},this.onDashboardSelectChange=this.onDashboardSelectChange.bind(this),this.onSliceNameChange=this.onSliceNameChange.bind(this),this.changeAction=this.changeAction.bind(this),this.saveOrOverwrite=this.saveOrOverwrite.bind(this),this.isNewDashboard=this.isNewDashboard.bind(this)}isNewDashboard(){return!(this.state.saveToDashboardId||!this.state.newDashboardName)}canOverwriteSlice(){var e,t,a;return(null==(e=this.props.slice)||null==(t=e.owners)?void 0:t.includes(this.props.userId))&&!(null!=(a=this.props.slice)&&a.is_managed_externally)}componentDidMount(){this.props.actions.fetchDashboards(this.props.userId).then((()=>{const e=this.props.dashboards.map((e=>e.value)),t=sessionStorage.getItem(na);let a=t&&parseInt(t,10);this.props.dashboardId&&(a=this.props.dashboardId),null!==a&&-1!==e.indexOf(a)&&this.setState({saveToDashboardId:a})}))}onSliceNameChange(e){this.setState({newSliceName:e.target.value})}onDashboardSelectChange(e){const t=e?String(e):void 0,a=e&&"number"==typeof e?e:null;this.setState({saveToDashboardId:a,newDashboardName:t})}changeAction(e){this.setState({action:e})}saveOrOverwrite(e){this.setState({alert:null}),this.props.actions.removeSaveModalAlert();const t={};if(this.props.slice&&this.props.slice.slice_id&&(t.slice_id=this.props.slice.slice_id),"saveas"===t.action&&""===this.state.newSliceName)return void this.setState({alert:(0,Q.t)("Please enter a chart name")});t.action=this.state.action,t.slice_name=this.state.newSliceName,t.save_to_dashboard_id=this.state.saveToDashboardId,t.new_dashboard_name=this.state.newDashboardName;const{url_params:a,...r}=this.props.form_data||{};this.props.actions.saveSlice(r,t).then((t=>{null===t.dashboard_id?sessionStorage.removeItem(na):sessionStorage.setItem(na,t.dashboard_id);let r=e?t.dashboard_url:t.slice.slice_url;if(a){const e=r.includes("?")?"&":"?";r=`${r}${e}${new URLSearchParams(a).toString()}`}window.location.assign(r)})),this.props.onHide()}removeAlert(){this.props.alert&&this.props.actions.removeSaveModalAlert(),this.setState({alert:null})}render(){const e=this.state.saveToDashboardId||this.state.newDashboardName;return(0,Ue.tZ)(ia,{show:!0,onHide:this.props.onHide,title:(0,Q.t)("Save chart"),footer:(0,Ue.tZ)("div",null,(0,Ue.tZ)(wt.Z,{id:"btn_cancel",buttonSize:"small",onClick:this.props.onHide},(0,Q.t)("Cancel")),(0,Ue.tZ)(wt.Z,{id:"btn_modal_save_goto_dash",buttonSize:"small",disabled:!this.state.newSliceName||!this.state.saveToDashboardId&&!this.state.newDashboardName,onClick:()=>this.saveOrOverwrite(!0)},this.isNewDashboard()?(0,Q.t)("Save & go to new dashboard"):(0,Q.t)("Save & go to dashboard")),(0,Ue.tZ)(wt.Z,{id:"btn_modal_save",buttonSize:"small",buttonStyle:"primary",onClick:()=>this.saveOrOverwrite(!1),disabled:!this.state.newSliceName},!this.canOverwriteSlice()&&this.props.slice?(0,Q.t)("Save as new chart"):this.isNewDashboard()?(0,Q.t)("Save to new dashboard"):(0,Q.t)("Save")))},(0,Ue.tZ)(Gt.l0,{layout:"vertical"},(this.state.alert||this.props.alert)&&(0,Ue.tZ)(Xt.Z,{type:"warning",message:(0,Ue.tZ)(n.Fragment,null,this.state.alert?this.state.alert:this.props.alert,(0,Ue.tZ)("i",{role:"button","aria-label":"Remove alert",tabIndex:0,className:"fa fa-close pull-right",onClick:this.removeAlert.bind(this),style:{cursor:"pointer"}}))}),(0,Ue.tZ)(Gt.xJ,null,(0,Ue.tZ)(ra.Y,{id:"overwrite-radio",disabled:!this.canOverwriteSlice(),checked:"overwrite"===this.state.action,onChange:()=>this.changeAction("overwrite")},(0,Q.t)("Save (Overwrite)")),(0,Ue.tZ)(ra.Y,{id:"saveas-radio",checked:"saveas"===this.state.action,onChange:()=>this.changeAction("saveas")},(0,Q.t)("Save as..."))),(0,Ue.tZ)("hr",null),(0,Ue.tZ)(Gt.xJ,{label:(0,Q.t)("Chart name"),required:!0},(0,Ue.tZ)(Jt.II,{name:"new_slice_name",type:"text",placeholder:"Name",value:this.state.newSliceName,onChange:this.onSliceNameChange})),(0,Ue.tZ)(Gt.xJ,{label:(0,Q.t)("Add to dashboard")},(0,Ue.tZ)(oa.Ph,{allowClear:!0,allowNewOptions:!0,ariaLabel:(0,Q.t)("Select a dashboard"),options:this.props.dashboards,onChange:this.onDashboardSelectChange,value:e||void 0,placeholder:(0,Ue.tZ)(ta(),{source:sa,renderers:{paragraph:"span"}})}))))}}const la=(0,Ce.$j)((function({explore:e,saveModal:t}){var a;return{datasource:e.datasource,slice:e.slice,userId:null==(a=e.user)?void 0:a.userId,dashboards:t.dashboards,alert:t.saveModalAlert}}),(()=>({})))(ca);var da=a(90233),ua=a(41331),fa=a(93185),ha=a(27034),pa=a(42753),ba=a(99963);const ma=qe.iK.div`
  ${({theme:e})=>Ue.iv`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${6*e.gridUnit}px;
    padding: 0 ${e.gridUnit}px;

    // hack to make the drag preview image corners rounded
    transform: translate(0, 0);
    background-color: inherit;
    border-radius: 4px;

    > div {
      min-width: 0;
      margin-right: ${2*e.gridUnit}px;
    }
  `}
`;function ga(e){const{labelRef:t,showTooltip:a,type:r,value:o}=e,[{isDragging:n},s]=(0,ha.c)({item:{value:e.value,type:e.type},collect:e=>({isDragging:e.isDragging()})}),i={labelRef:t,showTooltip:!n&&a,showType:!0};return(0,Ue.tZ)(ma,{ref:s},r===pa.g.Column?(0,Ue.tZ)(ba.l,Fe()({column:o},i)):(0,Ue.tZ)(ba.B,Fe()({metric:o},i)),(0,Ue.tZ)(Ye.Z.Drag,null))}const va=(0,y.cr)(fa.T.ENABLE_EXPLORE_DRAG_AND_DROP),ya=qe.iK.button`
  background: none;
  border: none;
  text-decoration: underline;
  color: ${({theme:e})=>e.colors.primary.dark1};
`,Sa=qe.iK.div`
  text-align: center;
  padding-top: 2px;
`,_a=qe.iK.div`
  ${({theme:e})=>Ue.iv`
    background-color: ${e.colors.grayscale.light5};
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    .ant-collapse {
      height: auto;
    }
    .field-selections {
      padding: 0 0 ${4*e.gridUnit}px;
      overflow: auto;
    }
    .field-length {
      margin-bottom: ${2*e.gridUnit}px;
      font-size: ${e.typography.sizes.s}px;
      color: ${e.colors.grayscale.light1};
    }
    .form-control.input-md {
      width: calc(100% - ${8*e.gridUnit}px);
      height: ${8*e.gridUnit}px;
      margin: ${2*e.gridUnit}px auto;
    }
    .type-label {
      font-size: ${e.typography.sizes.s}px;
      color: ${e.colors.grayscale.base};
    }
    .Control {
      padding-bottom: 0;
    }
  `};
`,wa=qe.iK.div`
  ${({theme:e})=>Ue.iv`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${e.typography.sizes.s}px;
    background-color: ${e.colors.grayscale.light4};
    margin: ${2*e.gridUnit}px 0;
    border-radius: 4px;
    padding: 0 ${e.gridUnit}px;

    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 0;
    }

    ${va&&Ue.iv`
      padding: 0;
      cursor: pointer;
      &:hover {
        background-color: ${e.colors.grayscale.light3};
      }
    `}

    & > span {
      white-space: nowrap;
    }

    .option-label {
      display: inline;
    }

    .metric-option {
      & > svg {
        min-width: ${4*e.gridUnit}px;
      }
      & > .option-label {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  `}
`,Ea=qe.iK.span`
  ${({theme:e})=>Ue.iv`
    font-size: ${e.typography.sizes.s}px;
  `}
`,Ta=qe.iK.div`
  ${({theme:e})=>Ue.iv`
    margin: 0 ${2.5*e.gridUnit}px;

    span {
      text-decoration: underline;
    }
  `}
`,xa=e=>{const t={labelRef:(0,n.useRef)(null)};return(0,Ue.tZ)(wa,{className:e.className},n.cloneElement(e.children,t))};function Ca({datasource:e,controls:{datasource:t},actions:a,shouldForceUpdate:r}){const{columns:o,metrics:s}=e,i=(0,n.useMemo)((()=>[...o].sort(((e,t)=>e.is_dttm&&!t.is_dttm?-1:t.is_dttm&&!e.is_dttm?1:0))),[o]),[c,l]=(0,n.useState)(!1),[d,u]=(0,n.useState)(""),[f,h]=(0,n.useState)({columns:i,metrics:s}),[p,b]=(0,n.useState)(!1),[g,v]=(0,n.useState)(!1),y=(0,n.useMemo)((()=>m()((e=>{h(""!==e?{columns:(0,da.Lu)(i,e,{keys:[{key:"verbose_name",threshold:da.tL.CONTAINS},{key:"column_name",threshold:da.tL.CONTAINS},{key:e=>[e.description,e.expression].map((e=>(null==e?void 0:e.replace(/[_\n\s]+/g," "))||"")),threshold:da.tL.CONTAINS,maxRanking:da.tL.CONTAINS}],keepDiacritics:!0}),metrics:(0,da.Lu)(s,e,{keys:[{key:"verbose_name",threshold:da.tL.CONTAINS},{key:"metric_name",threshold:da.tL.CONTAINS},{key:e=>[e.description,e.expression].map((e=>(null==e?void 0:e.replace(/[_\n\s]+/g," "))||"")),threshold:da.tL.CONTAINS,maxRanking:da.tL.CONTAINS}],keepDiacritics:!0,baseSort:(e,t)=>Number(t.item.is_certified)-Number(e.item.is_certified)||String(e.rankedValue).localeCompare(t.rankedValue)})}:{columns:i,metrics:s})}),Ge.oP)),[i,s]);(0,n.useEffect)((()=>{h({columns:i,metrics:s}),u("")}),[i,e,s]);const S=(0,n.useMemo)((()=>p?f.metrics:f.metrics.slice(0,50)),[f.metrics,p]),_=(0,n.useMemo)((()=>(g?f.columns:f.columns.slice(0,50)).sort(((e,t)=>t.is_certified-e.is_certified))),[f.columns,g]),w=(0,n.useMemo)((()=>(0,Ue.tZ)(n.Fragment,null,(0,Ue.tZ)(Jt.II,{allowClear:!0,onChange:e=>{u(e.target.value),y(e.target.value)},value:d,className:"form-control input-md",placeholder:(0,Q.t)("Search Metrics & Columns")}),(0,Ue.tZ)("div",{className:"field-selections"},e.type===$t.i9.Query&&"false"!==sessionStorage.getItem("showInfobox")&&(0,Ue.tZ)(Ta,null,(0,Ue.tZ)(Xt.Z,{closable:!0,onClose:()=>sessionStorage.setItem("showInfobox","false"),type:"info",message:"",description:(0,Ue.tZ)(n.Fragment,null,(0,Ue.tZ)("span",{role:"button",tabIndex:0,onClick:()=>l(!0),className:"add-dataset-alert-description"},(0,Q.t)("Create a dataset")),(0,Q.t)(" to edit or add columns and metrics."))})),(0,Ue.tZ)(jt.Z,{defaultActiveKey:["metrics","column"],expandIconPosition:"right",ghost:!0},(0,Ue.tZ)(jt.Z.Panel,{header:(0,Ue.tZ)(Ea,null,(0,Q.t)("Metrics")),key:"metrics"},(0,Ue.tZ)("div",{className:"field-length"},(0,Q.t)("Showing %s of %s",S.length,f.metrics.length)),S.map((e=>(0,Ue.tZ)(xa,{key:e.metric_name+String(r),className:"column"},va?(0,Ue.tZ)(ga,{value:e,type:pa.g.Metric}):(0,Ue.tZ)(ba.B,{metric:e,showType:!0})))),f.metrics.length>50?(0,Ue.tZ)(Sa,null,(0,Ue.tZ)(ya,{onClick:()=>b(!p)},p?(0,Q.t)("Show less..."):(0,Q.t)("Show all..."))):(0,Ue.tZ)(n.Fragment,null)),(0,Ue.tZ)(jt.Z.Panel,{header:(0,Ue.tZ)(Ea,null,(0,Q.t)("Columns")),key:"column"},(0,Ue.tZ)("div",{className:"field-length"},(0,Q.t)("Showing %s of %s",_.length,f.columns.length)),_.map((e=>(0,Ue.tZ)(xa,{key:e.column_name+String(r),className:"column"},va?(0,Ue.tZ)(ga,{value:e,type:pa.g.Column}):(0,Ue.tZ)(ba.l,{column:e,showType:!0})))),f.columns.length>50?(0,Ue.tZ)(Sa,null,(0,Ue.tZ)(ya,{onClick:()=>v(!g)},g?(0,Q.t)("Show Less..."):(0,Q.t)("Show all..."))):(0,Ue.tZ)(n.Fragment,null)))))),[_,d,f.columns.length,f.metrics.length,S,y,g,p,r]);return(0,Ue.tZ)(_a,null,(0,Ue.tZ)(ua.W,{visible:c,onHide:()=>l(!1),buttonTextOnSave:(0,Q.t)("Save"),buttonTextOnOverwrite:(0,Q.t)("Overwrite"),datasource:e}),(0,Ue.tZ)(Ht.Z,Fe()({},t,{name:"datasource",actions:a})),null!=e.id&&w)}var Za=a(28062),Aa=a(41609),Da=a.n(Aa),ka=a(18446),Oa=a.n(ka),Ra=a(88306),Na=a.n(Ra),Ia=a(38575),$a=a(92252);const Ua=Na()(((e,t)=>{const a={};return((null==t?void 0:t.controlPanelSections)||[]).filter(Ia.D_).forEach((e=>{e.controlSetRows.forEach((e=>{e.forEach((e=>{e&&("string"==typeof e?a[e]=$a.ai[e]:e.name&&e.config&&(a[e.name]=e.config))}))}))})),a}));var Ma=a(68073),Fa=a(76962);const ja={origFormData:Pe().object.isRequired,currentFormData:Pe().object.isRequired},La=qe.iK.span`
  ${({theme:e})=>`\n    font-size: ${e.typography.sizes.s}px;\n    color: ${e.colors.grayscale.dark1};\n    background-color: ${e.colors.alert.base};\n\n    &: hover {\n      background-color: ${e.colors.alert.dark1};\n    }\n  `}
`;function za(e){if(null==e||""===e)return null;if("object"==typeof e){if(Array.isArray(e)&&0===e.length)return null;const t=Object.keys(e);if(t&&0===t.length)return null}return e}class Pa extends n.Component{constructor(e){super(e);const t=this.getDiffs(e),a=(e=>{const t=(0,Ut.Z)().get(e);return Ua(e,t)})(this.props.origFormData.viz_type),r=this.getRowsFromDiffs(t,a);this.state={rows:r,hasDiffs:!Da()(t),controlsMap:a}}UNSAFE_componentWillReceiveProps(e){if(Oa()(this.props,e))return;const t=this.getDiffs(e);this.setState((e=>({rows:this.getRowsFromDiffs(t,e.controlsMap),hasDiffs:!Da()(t)})))}getRowsFromDiffs(e,t){return Object.entries(e).map((([e,a])=>({control:t[e]&&t[e].label||e,before:this.formatValue(a.before,e,t),after:this.formatValue(a.after,e,t)})))}getDiffs(e){const t=(0,nt.BR)(e.origFormData),a=(0,nt.BR)(e.currentFormData),r=Object.keys(a),o={};return r.forEach((e=>{(t[e]||a[e])&&(["filters","having","having_filters","where"].includes(e)||this.isEqualish(t[e],a[e])||(o[e]={before:t[e],after:a[e]}))})),o}isEqualish(e,t){return Oa()(za(e),za(t))}formatValue(e,t,a){var r,o,n,s;if(void 0===e)return"N/A";if(null===e)return"null";if("AdhocFilterControl"===(null==(r=a[t])?void 0:r.type))return e.length?e.map((e=>{const t=e.comparator&&e.comparator.constructor===Array?`[${e.comparator.join(", ")}]`:e.comparator;return`${e.subject} ${e.operator} ${t}`})).join(", "):"[]";if("BoundsControl"===(null==(o=a[t])?void 0:o.type))return`Min: ${e[0]}, Max: ${e[1]}`;if("CollectionControl"===(null==(n=a[t])?void 0:n.type))return e.map((e=>(0,f.o)(e))).join(", ");if("MetricsControl"===(null==(s=a[t])?void 0:s.type)&&e.constructor===Array){const t=e.map((e=>{var t;return null!=(t=null==e?void 0:e.label)?t:e}));return t.length?t.join(", "):"[]"}if("boolean"==typeof e)return e?"true":"false";if(e.constructor===Array){const t=e.map((e=>{var t;return null!=(t=null==e?void 0:e.label)?t:e}));return t.length?t.join(", "):"[]"}return"string"==typeof e||"number"==typeof e?e:(0,f.o)(e)}renderModalBody(){return(0,Ue.tZ)(Fa.Z,{columns:[{accessor:"control",Header:"Control"},{accessor:"before",Header:"Before"},{accessor:"after",Header:"After"}],data:this.state.rows,pageSize:50,className:"table-condensed",columnsForWrapText:["Control","Before","After"]})}renderTriggerNode(){return(0,Ue.tZ)(Be.u,{id:"difference-tooltip",title:(0,Q.t)("Click to see difference")},(0,Ue.tZ)(La,{className:"label"},(0,Q.t)("Altered")))}render(){return this.state.hasDiffs?(0,Ue.tZ)(Ma.Z,{triggerNode:this.renderTriggerNode(),modalTitle:(0,Q.t)("Chart changes"),modalBody:this.renderModalBody(),responsive:!0}):null}}Pa.propTypes=ja;var qa=a(83673),Ha=a(52564),Qa=a(94413);const Va={actions:Pe().object.isRequired,canOverwrite:Pe().bool.isRequired,canDownload:Pe().bool.isRequired,dashboardId:Pe().number,isStarred:Pe().bool.isRequired,slice:Pe().object,sliceName:Pe().string,table_name:Pe().string,formData:Pe().object,ownState:Pe().object,timeout:Pe().number,chart:rt.$6,saveDisabled:Pe().bool},Ba=e=>Ue.iv`
  color: ${e.colors.primary.dark2};
  & > span[role='img'] {
    margin-right: 0;
  }
`,Ka=({dashboardId:e,slice:t,actions:a,formData:r,ownState:o,chart:s,user:i,canOverwrite:c,canDownload:l,isStarred:d,sliceUpdated:f,sliceName:h,onSaveChart:p,saveDisabled:b})=>{const{latestQueryFormData:m,sliceFormData:g}=s,[v,y]=(0,n.useState)(!1);(0,n.useEffect)((()=>{e&&(async()=>{await u.Z.get({endpoint:`/api/v1/chart/${t.slice_id}`}).then((t=>{var a;const r=null==t||null==(a=t.json)?void 0:a.result;if(r&&r.dashboards&&r.dashboards.length){const{dashboards:t}=r,a=e&&t.length&&t.find((t=>t.id===e));if(a&&a.json_metadata){const e=JSON.parse(a.json_metadata),t={...e.shared_label_colors||{},...e.label_colors||{}},r=Za.getNamespace();Object.keys(t).forEach((a=>{r.setColor(a,t[a],e.color_scheme)}))}}})).catch((()=>{}))})()}),[]);const[S,_,w]=(0,Qa.gT)(m,l,t,a.redirectSQLLab,(()=>{y(!0)}),o),E=null==t?void 0:t.slice_name;return(0,Ue.tZ)(n.Fragment,null,(0,Ue.tZ)(Ha.u,{editableTitleProps:{title:h,canEdit:!t||c||((null==t?void 0:t.owners)||[]).includes(null==i?void 0:i.userId),onSave:a.updateChartTitle,placeholder:(0,Q.t)("Add the name of the chart"),label:(0,Q.t)("Chart title")},showTitlePanelItems:!!t,certificatiedBadgeProps:{certifiedBy:null==t?void 0:t.certified_by,details:null==t?void 0:t.certification_details},showFaveStar:!(null==i||!i.userId),faveStarProps:{itemId:null==t?void 0:t.slice_id,fetchFaveStar:a.fetchFaveStar,saveFaveStar:a.saveFaveStar,isStarred:d,showTooltip:!0},titlePanelAdditionalItems:g?(0,Ue.tZ)(Pa,{className:"altered",origFormData:{...g,chartTitle:E},currentFormData:{...r,chartTitle:h}}):null,rightPanelAdditionalItems:(0,Ue.tZ)(Be.u,{title:b?(0,Q.t)("Add required control values to save chart"):null},(0,Ue.tZ)("div",null,(0,Ue.tZ)(wt.Z,{buttonStyle:"secondary",onClick:p,disabled:b,css:Ba},(0,Ue.tZ)(Ye.Z.SaveOutlined,{iconSize:"l"}),(0,Q.t)("Save")))),additionalActionsMenu:S,menuDropdownProps:{visible:_,onVisibleChange:w}}),v&&(0,Ue.tZ)(qa.Z,{show:v,onHide:()=>{y(!1)},onSave:f,slice:t}))};Ka.propTypes=Va;const Wa=(0,Ce.$j)(null,(function(e){return(0,i.DE)({sliceUpdated:_e,toggleActive:Z.M,deleteActiveReport:Z.MZ},e)}))(Ka),Ya={...It.propTypes,actions:Pe().object.isRequired,datasource_type:Pe().string.isRequired,dashboardId:Pe().number,isDatasourceMetaLoading:Pe().bool.isRequired,chart:rt.$6.isRequired,slice:Pe().object,sliceName:Pe().string,controls:Pe().object.isRequired,forcedHeight:Pe().string,form_data:Pe().object.isRequired,standalone:Pe().number.isRequired,force:Pe().bool,timeout:Pe().number,impressionId:Pe().string,vizType:Pe().string},Ja=qe.iK.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,Ga=qe.iK.div`
  ${({theme:e})=>Ue.iv`
    background: ${e.colors.grayscale.light5};
    text-align: left;
    position: relative;
    width: 100%;
    max-height: 100%;
    min-height: 0;
    display: flex;
    flex: 1;
    flex-wrap: nowrap;
    border-top: 1px solid ${e.colors.grayscale.light2};
    .explore-column {
      display: flex;
      flex-direction: column;
      padding: ${2*e.gridUnit}px 0;
      max-height: 100%;
    }
    .data-source-selection {
      background-color: ${e.colors.grayscale.light5};
      padding: ${2*e.gridUnit}px 0;
      border-right: 1px solid ${e.colors.grayscale.light2};
    }
    .main-explore-content {
      flex: 1;
      min-width: ${128*e.gridUnit}px;
      border-left: 1px solid ${e.colors.grayscale.light2};
      padding: 0 ${4*e.gridUnit}px;
      .panel {
        margin-bottom: 0;
      }
    }
    .controls-column {
      align-self: flex-start;
      padding: 0;
    }
    .title-container {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: 0 ${4*e.gridUnit}px;
      justify-content: space-between;
      .horizontal-text {
        font-size: ${e.typography.sizes.s}px;
      }
    }
    .no-show {
      display: none;
    }
    .vertical-text {
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }
    .sidebar {
      height: 100%;
      background-color: ${e.colors.grayscale.light4};
      padding: ${2*e.gridUnit}px;
      width: ${8*e.gridUnit}px;
    }
    .callpase-icon > svg {
      color: ${e.colors.primary.base};
    }
  `};
`,Xa=m()((async(e,t,a,r,o,n,s,i)=>{const c={...e},l=e.slice_id,d={};l?d[Ge.KD.sliceId.name]=l:(d[Ge.KD.datasourceId.name]=t,d[Ge.KD.datasourceType.name]=a);const u=(null==c?void 0:c.url_params)||{};Object.entries(u).forEach((([e,t])=>{Ge.$O.includes(e)||(d[e]=t)}));try{let u,f;r?(u=await(0,nt.nv)(t,a,e,l,i),f="replaceState"):(u=(0,Xe.eY)(Ge.KD.formDataKey),await(0,nt.LW)(t,a,u,e,l,i),f="pushState");const h=(0,T.y8)(o?Ge.KD.standalone.name:null,{[Ge.KD.formDataKey.name]:u,...d},n);window.history[f](c,s,h)}catch(e){He.Z.warn("Failed at altering browser history",e)}}),1e3);function er(e){const t=(0,Oe.gp)().dynamicPlugins[e.vizType],a=t&&t.mounting,r=(0,Ke.D)(a),o=(0,Ke.D)(e.controls),[s,i]=(0,n.useState)(e.controls),[c,l]=(0,n.useState)(!1),[d,u]=(0,n.useState)(!1),[f,h]=(0,n.useState)(-1),b=(0,st.z)(),m=(0,qe.Fg)(),g={controls_width:320,datasource_width:300},v=(0,n.useCallback)((async({isReplace:t=!1,title:a}={})=>{const r=e.dashboardId?{...e.form_data,dashboardId:e.dashboardId}:e.form_data,{id:o,type:n}=e.datasource;Xa(r,o,n,t,e.standalone,e.force,a,b)}),[e.dashboardId,e.form_data,e.datasource.id,e.datasource.type,e.standalone,e.force,b]),y=(0,n.useCallback)((()=>{const t=window.history.state;t&&Object.keys(t).length&&(e.actions.setExploreControls(t),e.actions.postChartFormData(t,e.force,e.timeout,e.chart.id))}),[e.actions,e.chart.id,e.timeout]),_=(0,n.useCallback)((()=>{e.actions.setForceQuery(!1),e.actions.triggerQuery(!0,e.chart.id),v(),i(e.controls)}),[e.controls,v,e.actions,e.chart.id]),w=(0,n.useCallback)((t=>{if(t.ctrlKey||t.metaKey){const a="Enter"===t.key||13===t.keyCode,r="s"===t.key||83===t.keyCode;a?_():r&&e.slice&&e.actions.saveSlice(e.form_data,{action:"overwrite",slice_id:e.slice.slice_id,slice_name:e.slice.slice_name,add_to_dash:"noSave",goto_dash:!1}).then((({data:e})=>{window.location=e.slice.slice_url}))}}),[_,e.actions,e.form_data,e.slice]);function E(){l(!c)}function T(){u(!d)}(0,We.J)((()=>{e.actions.logEvent(p.$b)})),(0,Ve.S)(b,((e,t)=>{t&&v({isReplace:!0})}));const x=(0,Ke.D)(y);(0,n.useEffect)((()=>(x&&window.removeEventListener("popstate",x),window.addEventListener("popstate",y),()=>{window.removeEventListener("popstate",y)})),[y,x]);const Z=(0,Ke.D)(w);(0,n.useEffect)((()=>(Z&&window.removeEventListener("keydown",Z),document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)})),[w,Z]),(0,n.useEffect)((()=>{r&&!a&&e.actions.dynamicPluginControlsReady()}),[a]),(0,n.useEffect)((()=>{Object.values(e.controls).some((e=>e.validationErrors&&e.validationErrors.length>0))||e.actions.triggerQuery(!0,e.chart.id)}),[]);const A=(0,n.useCallback)((t=>{const a=t?{...e.chart.latestQueryFormData,...(0,C.Hu)(Le()(e.controls,t))}:(0,C.Hu)(e.controls);e.actions.updateQueryFormData(a,e.chart.id),e.actions.renderTriggered((new Date).getTime(),e.chart.id),v()}),[v,e.actions,e.chart.id,e.chart.latestQueryFormData,e.controls]);(0,n.useEffect)((()=>{if(o&&e.chart.latestQueryFormData.viz_type===e.controls.viz_type.value){!e.controls.datasource||null!=o.datasource&&e.controls.datasource.value===o.datasource.value||(0,at.QR)(e.form_data.datasource,!0);const t=Object.keys(e.controls).filter((t=>void 0!==o[t]&&!(0,S.JB)(e.controls[t].value,o[t].value))).filter((t=>e.controls[t].renderTrigger));t.length>0&&A(t)}}),[e.controls,e.ownState]);const D=(0,n.useMemo)((()=>!!s&&Object.keys(e.controls).filter((t=>void 0!==s[t]&&!(0,S.JB)(e.controls[t].value,s[t].value))).some((t=>!e.controls[t].renderTrigger&&!e.controls[t].dontRefreshOnChange))),[s,e.controls]);(0,n.useEffect)((()=>{void 0!==e.ownState&&(_(),A())}),[e.ownState]),D&&e.actions.logEvent(p.Ep);const k=(0,n.useMemo)((()=>{const t=Object.values(e.controls).filter((e=>e.validationErrors&&e.validationErrors.length>0));if(0===t.length)return null;const a=t.map((e=>e.validationErrors)),r=[...new Set(a.flat())].map((e=>[t.filter((t=>{var a;return null==(a=t.validationErrors)?void 0:a.includes(e)})).map((e=>e.label)),e])).map((([e,t])=>(0,Ue.tZ)("div",{key:t},e.length>1?(0,Q.t)("Controls labeled "):(0,Q.t)("Control labeled "),(0,Ue.tZ)("strong",null,` ${e.join(", ")}`),(0,Ue.tZ)("span",null,": ",t))));let o;return r.length>0&&(o=(0,Ue.tZ)("div",{style:{textAlign:"left"}},r)),o}),[e.controls]);function O(){return(0,Ue.tZ)(It,Fe()({},e,{errorMessage:k,chartIsStale:D,onQuery:_}))}function R(e){return(0,Je.rV)(e,g[e])}function N(e,t){const a=Number(R(e))+t.width;(0,Je.LS)(e,a)}return e.standalone?O():(0,Ue.tZ)(Ja,null,(0,Ue.tZ)(Wa,{actions:e.actions,canOverwrite:e.can_overwrite,canDownload:e.can_download,dashboardId:e.dashboardId,isStarred:e.isStarred,slice:e.slice,sliceName:e.sliceName,table_name:e.table_name,formData:e.form_data,chart:e.chart,ownState:e.ownState,user:e.user,reports:e.reports,onSaveChart:E,saveDisabled:k||"loading"===e.chart.chartStatus}),(0,Ue.tZ)(Ga,{id:"explore-container"},(0,Ue.tZ)(Ue.xB,{styles:Ue.iv`
            .navbar {
              margin-bottom: 0;
            }
            body {
              height: 100vh;
              max-height: 100vh;
              overflow: hidden;
            }
            #app-menu,
            #app {
              flex: 1 1 auto;
            }
            #app {
              flex-basis: 100%;
              overflow: hidden;
              height: 100%;
            }
            #app-menu {
              flex-shrink: 0;
            }
          `}),c&&(0,Ue.tZ)(la,{onHide:E,actions:e.actions,form_data:e.form_data,sliceName:e.sliceName,dashboardId:e.dashboardId}),(0,Ue.tZ)(Qe.e,{onResizeStop:(e,t,a,r)=>{h(null==r?void 0:r.width),N(Je.dR.datasource_width,r)},defaultSize:{width:R(Je.dR.datasource_width),height:"100%"},minWidth:g[Je.dR.datasource_width],maxWidth:"33%",enable:{right:!0},className:d?"no-show":"explore-column data-source-selection"},(0,Ue.tZ)("div",{className:"title-container"},(0,Ue.tZ)("span",{className:"horizontal-text"},(0,Q.t)("Dataset")),(0,Ue.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:T},(0,Ue.tZ)(Ye.Z.Expand,{className:"collapse-icon",iconColor:m.colors.primary.base,iconSize:"l"}))),(0,Ue.tZ)(Ca,{datasource:e.datasource,controls:e.controls,actions:e.actions,shouldForceUpdate:f,user:e.user})),d?(0,Ue.tZ)("div",{className:"sidebar",onClick:T,role:"button",tabIndex:0},(0,Ue.tZ)("span",{role:"button",tabIndex:0,className:"action-button"},(0,Ue.tZ)(Be.u,{title:(0,Q.t)("Open Datasource tab")},(0,Ue.tZ)(Ye.Z.Collapse,{className:"collapse-icon",iconColor:m.colors.primary.base,iconSize:"l"}))),(0,Ue.tZ)(Ye.Z.DatasetPhysical,{css:(0,Ue.iv)({marginTop:2*m.gridUnit},"",""),iconSize:"l",iconColor:m.colors.grayscale.base})):null,(0,Ue.tZ)(Qe.e,{onResizeStop:(e,t,a,r)=>N(Je.dR.controls_width,r),defaultSize:{width:R(Je.dR.controls_width),height:"100%"},minWidth:g[Je.dR.controls_width],maxWidth:"33%",enable:{right:!0},className:"col-sm-3 explore-column controls-column"},(0,Ue.tZ)(Yt,{exploreState:e.exploreState,actions:e.actions,form_data:e.form_data,controls:e.controls,chart:e.chart,datasource_type:e.datasource_type,isDatasourceMetaLoading:e.isDatasourceMetaLoading,onQuery:_,onStop:function(){e.chart&&e.chart.queryController&&e.chart.queryController.abort()},canStopQuery:e.can_add||e.can_overwrite,errorMessage:k,chartIsStale:D})),(0,Ue.tZ)("div",{className:tt()("main-explore-content",d?"col-sm-9":"col-sm-7")},O())))}er.propTypes=Ya;const tr=(0,Ce.$j)((function(e){var t,a,r,o,n;const{explore:s,charts:i,impressionId:c,dataMask:l,reports:d}=e,u=(0,C.Hu)(s.controls);u.extra_form_data=(0,ot.on)({...u.extra_form_data},{...null==(t=l[null!=(a=u.slice_id)?a:0])?void 0:t.ownState});const f=i[Object.keys(i)[0]];let h=Number(null==(r=s.form_data)?void 0:r.dashboardId);return Number.isNaN(h)&&(h=void 0),{isDatasourceMetaLoading:s.isDatasourceMetaLoading,datasource:s.datasource,datasource_type:s.datasource.type,datasourceId:s.datasource_id,dashboardId:h,controls:s.controls,can_overwrite:!!s.can_overwrite,can_add:!!s.can_add,can_download:!!s.can_download,column_formats:s.datasource?s.datasource.column_formats:null,containerId:s.slice?`slice-container-${s.slice.slice_id}`:"slice-container",isStarred:s.isStarred,slice:s.slice,sliceName:s.sliceName,triggerRender:s.triggerRender,form_data:u,table_name:u.datasource_name,vizType:u.viz_type,standalone:s.standalone,force:s.force,forcedHeight:s.forced_height,chart:f,timeout:s.common.conf.SUPERSET_WEBSERVER_TIMEOUT,ownState:null==(o=l[null!=(n=u.slice_id)?n:0])?void 0:o.ownState,impressionId:c,user:s.user,exploreState:s,reports:d}}),(function(e){const t={...o,...r,...q,...h};return{actions:(0,i.DE)(t,e)}}))(er);(0,Ne.Z)(),(0,Ie.Z)();const ar=document.getElementById("app"),rr=JSON.parse(ar.getAttribute("data-bootstrap"));(0,y.fG)(rr.common.feature_flags);const or=function(e){const{form_data:t}=e,{slice:a}=e,r=a?a.slice_name:null,o={...e,sliceName:r,common:{flash_messages:e.common.flash_messages,conf:e.common.conf},isDatasourceMetaLoading:!1,isStarred:!1,controls:(0,x.R3)(e,t),controlsTransferred:[]};Object.entries(o.controls).forEach((([e,t])=>{o.controls[e]=(0,C.RO)(t,o)}));const n=a?(0,C.Hu)((0,x.R3)(e,a.form_data)):null,s=(0,T.Jp)(e);return{charts:{[s]:{id:s,chartAlert:null,chartStatus:null,chartStackTrace:null,chartUpdateEndTime:null,chartUpdateStartTime:0,latestQueryFormData:(0,C.Hu)(o.controls),sliceFormData:n,queryController:null,queriesResponse:null,triggerQuery:!1,lastRendered:0}},saveModal:{dashboards:[],saveModalAlert:null},explore:o,impressionId:d().generate(),messageToasts:E((e.common||{}).flash_messages||[])}}(rr),nr=(0,i.MT)(xe,or,(0,i.qC)((0,i.md)(c.Z,(e=>t=>a=>{var r;if(a.type!==h.LOG_EVENT)return t(a);const{dashboardInfo:o,explore:n,impressionId:s,dashboardLayout:i}=e.getState();let c={impression_id:s,version:"v2"};o?c={source:"dashboard",source_id:o.id,...c}:n&&(c={source:"explore",source_id:n.slice?n.slice.slice_id:0,...c});const{eventName:l}=a.payload;let{eventData:u={}}=a.payload;if(u={...c,ts:(new Date).getTime(),event_name:l,...u},p.TY.has(l)?u={...u,event_type:"timing",trigger_event:v}:(v=d().generate(),u={...u,event_type:"user",event_id:v,visibility:document.visibilityState}),u.target_id&&null!=i&&null!=(r=i.present)&&r[u.target_id]){const{meta:e}=i.present[u.target_id];u.target_name=e.chartId?e.sliceName:e.text}return g.append(u),u})),(0,S.hU)(!1)));s.render((0,Ue.tZ)((({store:e})=>(0,Ue.tZ)(Ce.zt,{store:e},(0,Ue.tZ)(Ze.W,{backend:Ae.PD},(0,Ue.tZ)(De.a,{theme:$e.r},(0,Ue.tZ)(ke.n,null),(0,Ue.tZ)(Oe.EM,null,(0,Ue.tZ)(tr,null),(0,Ue.tZ)(Re.Z,null)))))),{store:nr}),document.getElementById("app"))},61358:(e,t,a)=>{"use strict";a.d(t,{jt:()=>c,Aw:()=>l,J8:()=>u,cq:()=>f,Dr:()=>h,Me:()=>p,M:()=>b,MZ:()=>m});var r=a(31069),o=a(61988),n=a(15926),s=a.n(n),i=a(72570);const c="SET_REPORT";function l({userId:e,filterField:t,creationMethod:a,resourceId:n}){const l=s().encode({filters:[{col:t,opr:"eq",value:n},{col:"creation_method",opr:"eq",value:a},{col:"created_by",opr:"rel_o_m",value:e}]});return function(e){return r.Z.get({endpoint:`/api/v1/report/?q=${l}`}).then((({json:r})=>{e(function(e,t,a,r){return{type:c,report:e,resourceId:t,creationMethod:a,filterField:r}}(r,n,a,t))})).catch((()=>e((0,i.Gb)((0,o.t)("There was an issue fetching reports attached to this dashboard.")))))}}const d=(e,t)=>{const a=t(),{user:r,dashboardInfo:o,charts:n,explore:s}=a;if(o)e(l({userId:r.userId,filterField:"dashboard_id",creationMethod:"dashboards",resourceId:o.id}));else{const[t]=Object.keys(n);e(l({userId:s.user.userId,filterField:"chart_id",creationMethod:"charts",resourceId:n[t].id}))}},u="ADD_REPORT",f=e=>t=>r.Z.post({endpoint:"/api/v1/report/",jsonPayload:e}).then((({json:e})=>{t({type:u,json:e}),t((0,i.ws)((0,o.t)("The report has been created")))})),h="EDIT_REPORT",p=(e,t)=>a=>r.Z.put({endpoint:`/api/v1/report/${e}`,jsonPayload:t}).then((({json:e})=>{a({type:h,json:e}),a((0,i.ws)((0,o.t)("Report updated")))}));function b(e,t){return function(a){return r.Z.put({endpoint:encodeURI(`/api/v1/report/${e.id}`),headers:{"Content-Type":"application/json"},body:JSON.stringify({active:t})}).catch((()=>{a((0,i.Gb)((0,o.t)("We were unable to active or deactivate this report.")))})).finally((()=>{a(d)}))}}function m(e){return function(t){return r.Z.delete({endpoint:encodeURI(`/api/v1/report/${e.id}`)}).catch((()=>{t((0,i.Gb)((0,o.t)("Your report could not be deleted")))})).finally((()=>{t(d),t((0,i.ws)((0,o.t)("Deleted: %s",e.name)))}))}}},90233:(e,t,a)=>{"use strict";a.d(t,{Lu:()=>c,tL:()=>s});var r=a(87462),o=a(76826),n=a.n(o),s={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};c.rankings=s;var i=function(e,t){return String(e.rankedValue).localeCompare(String(t.rankedValue))};function c(e,t,a){void 0===a&&(a={});var o=a,n=o.keys,c=o.threshold,d=void 0===c?s.MATCHES:c,f=o.baseSort,p=void 0===f?i:f,b=o.sorter,m=void 0===b?function(e){return e.sort((function(e,t){return function(e,t,a){var r=e.rank,o=e.keyIndex,n=t.rank,s=t.keyIndex;return r===n?o===s?a(e,t):o<s?-1:1:r>n?-1:1}(e,t,p)}))}:b,g=e.reduce((function(e,o,i){var c=function(e,t,a,r){return t?function(e,t){for(var a=[],r=0,o=t.length;r<o;r++)for(var n=t[r],s=h(n),i=u(e,n),c=0,l=i.length;c<l;c++)a.push({itemValue:i[c],attributes:s});return a}(e,t).reduce((function(e,t,o){var n=e.rank,i=e.rankedValue,c=e.keyIndex,d=e.keyThreshold,u=t.itemValue,f=t.attributes,h=l(u,a,r),p=i,b=f.minRanking,m=f.maxRanking,g=f.threshold;return h<b&&h>=s.MATCHES?h=b:h>m&&(h=m),h>n&&(n=h,c=o,d=g,p=u),{rankedValue:p,rank:n,keyIndex:c,keyThreshold:d}}),{rankedValue:e,rank:s.NO_MATCH,keyIndex:-1,keyThreshold:r.threshold}):{rankedValue:e,rank:l(e,a,r),keyIndex:-1,keyThreshold:r.threshold}}(o,n,t,a),f=c.rank,p=c.keyThreshold;return f>=(void 0===p?d:p)&&e.push((0,r.Z)({},c,{item:o,index:i})),e}),[]);return m(g).map((function(e){return e.item}))}function l(e,t,a){return e=d(e,a),(t=d(t,a)).length>e.length?s.NO_MATCH:e===t?s.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(t=t.toLowerCase())?s.EQUAL:e.startsWith(t)?s.STARTS_WITH:e.includes(" "+t)?s.WORD_STARTS_WITH:e.includes(t)?s.CONTAINS:1===t.length?s.NO_MATCH:(r=e,o="",r.split(" ").forEach((function(e){e.split("-").forEach((function(e){o+=e.substr(0,1)}))})),o).includes(t)?s.ACRONYM:function(e,t){var a=0,r=0;function o(e,t,r){for(var o=r,n=t.length;o<n;o++)if(t[o]===e)return a+=1,o+1;return-1}var n,i,c=o(t[0],e,0);if(c<0)return s.NO_MATCH;r=c;for(var l=1,d=t.length;l<d;l++)if(!((r=o(t[l],e,r))>-1))return s.NO_MATCH;return n=1/(r-c),i=a/t.length,s.MATCHES+i*n}(e,t);var r,o}function d(e,t){return e=""+e,t.keepDiacritics||(e=n()(e)),e}function u(e,t){var a;if("object"==typeof t&&(t=t.key),"function"==typeof t)a=t(e);else if(null==e)a=null;else if(Object.hasOwnProperty.call(e,t))a=e[t];else{if(t.includes("."))return function(e,t){for(var a=e.split("."),r=[t],o=0,n=a.length;o<n;o++){for(var s=a[o],i=[],c=0,l=r.length;c<l;c++){var d=r[c];if(null!=d)if(Object.hasOwnProperty.call(d,s)){var u=d[s];null!=u&&i.push(u)}else"*"===s&&(i=i.concat(d))}r=i}if(Array.isArray(r[0])){var f=[];return f.concat.apply(f,r)}return r}(t,e);a=null}return null==a?[]:Array.isArray(a)?a:[String(a)]}var f={maxRanking:1/0,minRanking:-1/0};function h(e){return"string"==typeof e?f:(0,r.Z)({},f,e)}},76826:e=>{var t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},a=Object.keys(t).join("|"),r=new RegExp(a,"g"),o=new RegExp(a,""),n=function(e){return e.replace(r,(function(e){return t[e]}))};e.exports=n,e.exports.has=function(e){return!!e.match(o)},e.exports.remove=n},54804:(e,t,a)=>{"use strict";a.d(t,{hb:()=>i,QU:()=>c,Es:()=>l,JL:()=>d});var r=a(42190),o=a(15926);function n({owners:e}){return e?e.map((e=>`${e.first_name} ${e.last_name}`)):null}const s=a.n(o)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function i(e){return(0,r.l6)((0,r.s_)(`/api/v1/chart/${e}?q=${s}`),n)}const c=e=>(0,r.l6)((0,r.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json)}))),l=e=>(0,r.s_)(`/api/v1/dashboard/${e}/charts`),d=e=>(0,r.s_)(`/api/v1/dashboard/${e}/datasets`)}},c={};function l(e){var t=c[e];if(void 0!==t)return t.exports;var a=c[e]={id:e,loaded:!1,exports:{}};return i[e].call(a.exports,a,a.exports,l),a.loaded=!0,a.exports}l.m=i,l.amdD=function(){throw new Error("define cannot be used indirect")},l.amdO={},e=[],l.O=(t,a,r,o)=>{if(!a){var n=1/0;for(d=0;d<e.length;d++){for(var[a,r,o]=e[d],s=!0,i=0;i<a.length;i++)(!1&o||n>=o)&&Object.keys(l.O).every((e=>l.O[e](a[i])))?a.splice(i--,1):(s=!1,o<n&&(n=o));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,r,o]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);l.r(o);var n={};t=t||[null,a({}),a([]),a(a)];for(var s=2&r&&e;"object"==typeof s&&!~t.indexOf(s);s=a(s))Object.getOwnPropertyNames(s).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,l.d(o,n),o},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,a)=>(l.f[a](e,t),t)),[])),l.u=e=>4593===e?"4593.d68c5ae37590aeca12f4.entry.js":2441===e?"2441.9d43893841d3df512e51.entry.js":{57:"38f4b0c5b2c751f3029f",112:"0cceda87f254629c0f55",137:"2e4eee61fdab260331a3",158:"7af34d924b2b2e3aaaa7",177:"ca39eb74c4d49fd55005",183:"2d69e60dfe962c42eee9",215:"f6160a99b46b22e18caa",310:"e2c18a71d3a5c875a789",312:"90af13ee4a0d5e067aab",326:"7374ea8855c4c8c9dde6",336:"e5df42bc5a8ad6d9aed0",347:"3f1f3f38b6b3b9616e75",349:"0202ec1626f196ac9881",363:"e517ebae29a6c51c5e09",380:"b10c6bc15614f70674c7",440:"163404f983dce20259a1",444:"eebc4df9b567ec2657cd",498:"04c19f92943ed9b4ddb9",597:"d08e416f0ccd4854221a",600:"d0d66aaabc04eac7f3a8",616:"a77417ca34a51fe13a7d",704:"56bff0d3ef19079ea66f",741:"ddfd188cfe976cc863f1",775:"3530fba743ac26563709",826:"3f59c315d2e5d8b15ff9",895:"2bf64696de38a5e5ed38",954:"96328cc7910404deebe6",992:"3972b8e3abebd6e63caf",999:"54febe7bb96630a3013d",1020:"b190f9aca679c03b62c3",1075:"529bc3f823e6fc60cd70",1095:"d9afdc3949f8b21a7820",1130:"110ae26061868bd68c17",1161:"3aa46fb33df2aab20c02",1174:"8849a375bcccf9df44ed",1185:"9ea89afc9bce89ad80ad",1221:"89aea5a154a8cfd8fbad",1256:"3479cded7646565257ab",1258:"604b6fdb6661c6e1205e",1261:"858915f2b7f5a9a59fc3",1263:"62048be321505812ff6a",1293:"825c8594d240fbf17f20",1351:"8f38137e5b4342d2da4f",1382:"4c5c4c09ba5f63220889",1398:"951f07c7c3e07b72cca4",1402:"308402927cb1af91614e",1493:"55bdc0586c89caac178c",1568:"40f6c6e7fe72a2bc1b13",1573:"2e576b04c9b82c938093",1605:"2f7a1d1a47b76ec8c5c1",1862:"f169edb4a2450c249757",1877:"7dd385c6e9090a1b2734",1899:"0502b5cdba557a6ff693",1948:"73ae58351a954a5c96f0",2079:"1506fd7de5b75c690b36",2089:"6762245ee484d3ffcb17",2105:"8146230ef7c416ab6cb3",2112:"bd47c3047ff30d422b26",2229:"92b5dd2bef5c7f4c0f0c",2264:"b12e914fd5684cf329c8",2267:"1665a22356999f7d09cb",2403:"a0d676c094e2f90b5f0a",2439:"7e0114c1e26108fed2fc",2549:"b939e874d4289ca1bb4f",2646:"22d6b0b1d527d046d260",2698:"75dfd37839ade6c35680",2713:"617726f17984c3192f46",2797:"6a8bfc332a16fd0f491c",2955:"21b0680368dea0bf61c5",2983:"b85bf5c0e81e6910fa04",3036:"ea33f16b56589e7fe331",3126:"4764f4f403630edad7c5",3141:"6db0cd2a326a62903532",3187:"6802e173609e0f6b30c1",3208:"1d1e22f6771cfd2e9ef1",3232:"88df3be221f938679450",3240:"78cb567a5b91a58f0c01",3265:"edc982d88e8d399830b7",3325:"46b72d4c661fb47189a2",3496:"bbde815936f983fdf562",3544:"78f16a06c10598e0b889",3558:"a1e4af25d87548162409",3567:"ccb341a117b2ee4d5e98",3588:"461c58b164a3fc1357b1",3606:"7621f705e25335f0121d",3711:"78a94e1e858a8721ed5f",3745:"19220130e12f15e5cce8",3749:"68f7a3e5d439a23f4d89",3831:"0a48200ca8cf0d470682",3871:"79cd11ca09fe747b1bfd",3955:"03c4e9c66c2c63d79acc",3985:"d51bceddde4bd627d6c2",4139:"21f4237f0879646a0d9c",4194:"89e3dd82524d881e7dd7",4237:"f3af87387b276d765b99",4266:"958a29639679b362fba3",4273:"827fb5197c686f0662c7",4421:"6290fd574418d5e32572",4458:"85219e9a6edf20621bea",4474:"b28a000dfeccbe1d81f3",4494:"4bf0f6b8a66ee921247f",4572:"49cd8f3d6d6f320ed729",4579:"8164718d6dabba184b88",4625:"7c5442bc1e5598e90822",4662:"712187ae25c83dce2174",4667:"47a4c2c13ccfb09d3757",4732:"d30d055df1b3b7e84dba",4757:"124ced191b8ef59a3e2c",4758:"8546effff2a679b01358",4790:"8546d26839292e046adb",4794:"fa2a3ad4d82d3d4459fd",4797:"be22f9be14d0445f0f87",4810:"82297ac94bca3b3859d2",4817:"259525e7b455b997848a",4832:"5a592d69bbd6eff5fd66",4851:"a9ccd9b9ba2b847b6417",4972:"132e72e310c461806395",5051:"86881151df595df4d35b",5094:"00b4fe4aafbe798dface",5123:"9d063c72a9891c56cbdc",5181:"26c317d9c3baa9529fe0",5201:"0c0d33390c8cfa65fbbd",5215:"20dcf5c795803b21389a",5224:"2137b5c272446c93f5b7",5226:"43d2d046df38601d76af",5249:"8c40bbdfb03d04b29d02",5264:"764ad1c6642ad40a50d2",5281:"8b441b46691123854b6b",5330:"c3630bd2c65829e4c7a1",5335:"cbdabbf1e2d3d7e254df",5350:"a4556551303ff93cd4bb",5359:"fe8715215a93c63953ec",5367:"12541bbb82603d7e2d66",5507:"c7cdf6f84afbcf502ddb",5566:"34d4af5592bdcfc9eb41",5580:"fa964e628191e708a48e",5592:"2e19c97690b06c32f1b4",5641:"207a4252758bcd4d3cbd",5707:"2b76605f1d6e11cf2df7",5771:"3acf2091ed043492ae76",5777:"58d0e720fba584974cbf",5802:"8caa85ec5eb98cb83343",5816:"3374bb9b8c7f89ae2da0",5832:"6641ca7ff6e2a41a1257",5838:"af5789397b8a13e08c38",5962:"ed92d26f4a929fbbc564",5972:"713e574a1d9b58a2135d",5998:"cb935545042c1ce92ecb",6061:"c9b07a9f1a9bae8552b2",6126:"62a79c1241ef166355de",6150:"6d17f8394d91a097eab6",6167:"ad4ff700d252caec8ce3",6207:"17d778c7ae36315bd979",6254:"15612e9a43534ba1a97d",6303:"b8e13b4773cab5f877ee",6357:"b70dcdf0427abc91ad57",6371:"150eda30c7d4d3f90b81",6377:"6f0f091efb5ecc18dde4",6420:"12131f944d05bfbc2b3d",6447:"bfa0e245c6ade68dd3de",6486:"9801caf1364f204340c9",6507:"f00932e24ce22bd1ca3b",6579:"59f16731ccd9acdd96b3",6668:"0062637c2e307e4a2536",6682:"bdf3637ab1584c67ae30",6693:"7859419c833807d8ecc8",6758:"fc3f2d7bb3a5b8f56817",6819:"1d34427183b1bc32acfd",6871:"ee6aaef556c2b3abedbf",6883:"369bb61eda9423d64359",6968:"626e60cd5099d84de454",6981:"68a6c50b90b0d58736ad",7003:"40ed9de7bc516276c805",7183:"e16648fac64644e729c7",7245:"68eaaf3112a48224bf50",7249:"b5e7e83ac26bf4ec5fbe",7405:"2bfae0bdc72a5900199c",7460:"140aaba41af8a7b3891b",7502:"e65433dae777c734f950",7521:"26996cc765c12c03e878",7584:"76c89f632c7a8315389e",7610:"69ae28e81db50e4eb6d7",7654:"2a756f12d13ca404a744",7716:"36cbf8b4562f9c80a2e0",7760:"7ab09485b0ef9d161fbf",7803:"7967d211212f85a80dde",7832:"fd7f701b105cdaddf11a",7850:"00845228665a5b4e5deb",7922:"034a466af79e5aec1e20",7974:"5056eeaeb6bace4afae6",7984:"aab98ca4cfcb982e0aca",7989:"e2c714d33a44d93648c0",8041:"b0b7ebae013a28bd3488",8312:"9b8eaa85fdf772d344ca",8349:"739a4da1e29881e55220",8398:"effe2e4690559c9dd638",8425:"d93b4ec64b1aced0c856",8463:"55fba49f8743cb008b18",8464:"fa6890448761f6eaa909",8491:"bc7fc77e4b9a26daf89a",8551:"ccccf6dc4ad567097d48",8623:"f3f0b0e4997f9dcf5264",8650:"0397d3d0734fd9230e1b",8656:"930c6a0cab67c68681cd",8682:"e55361dd9642ab2c6cce",8695:"794b59e83f2639bbd4f5",8701:"ac60e542441acfc7d1ff",8750:"a4875cd79305e6148ef1",8883:"7d0a7cd57a0e5306d21e",8924:"2b7dda01776b3d7cfd73",8970:"9662eb9aee235b45a0ba",9013:"2ae202ac00476dac5f77",9052:"bdc47b9882987a855bd3",9101:"d01b4b3b943752d35454",9109:"70032121a681b08c1ca9",9207:"5716fdaacba60c1b00fc",9305:"857144aa3240952e069c",9313:"f002dd41453444b5a5f0",9322:"4c640e97a929f739a3df",9325:"d2f1f08edbd1d07cd106",9393:"aa0534433005d1a82b09",9396:"0515a3d9012750847fd2",9483:"6d46e2bf0399b437ea4b",9510:"a1ded01332afd173d7e1",9558:"11464bec3d82809a0027",9622:"a6e817b0d68ef7cee2d4",9767:"9e8414a89898cf629e48",9794:"6c8b7483e1f99924e7f5",9811:"b3748ff012fc7ee520ef",9857:"169119af235c81fa0bc3",9873:"34c9f3b849b55ef12fa4",9877:"f6f5b18362ffb2b9362c"}[e]+".chunk.js",l.miniCssF=e=>e+"."+{137:"2e4eee61fdab260331a3",380:"b10c6bc15614f70674c7",1261:"858915f2b7f5a9a59fc3",1877:"7dd385c6e9090a1b2734",3036:"ea33f16b56589e7fe331",4194:"89e3dd82524d881e7dd7",4237:"f3af87387b276d765b99",4494:"4bf0f6b8a66ee921247f",5566:"34d4af5592bdcfc9eb41",6871:"ee6aaef556c2b3abedbf",8623:"f3f0b0e4997f9dcf5264",8650:"0397d3d0734fd9230e1b",9313:"f002dd41453444b5a5f0"}[e]+".chunk.css",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="superset:",l.l=(e,t,a,n)=>{if(r[e])r[e].push(t);else{var s,i;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+a){s=u;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.setAttribute("data-webpack",o+a),s.src=e),r[e]=[t];var f=(t,a)=>{s.onerror=s.onload=null,clearTimeout(h);var o=r[e];if(delete r[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(a))),t)return t(a)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),i&&document.head.appendChild(s)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),l.p="/static/assets/",n=e=>new Promise(((t,a)=>{var r=l.miniCssF(e),o=l.p+r;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var o=(s=a[r]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===e||o===t))return s}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){var s;if((o=(s=n[r]).getAttribute("data-href"))===e||o===t)return s}})(r,o))return t();((e,t,a,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=n=>{if(o.onerror=o.onload=null,"load"===n.type)a();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,o.parentNode.removeChild(o),r(c)}},o.href=t,document.head.appendChild(o)})(e,o,t,a)})),s={9782:0},l.f.miniCss=(e,t)=>{s[e]?t.push(s[e]):0!==s[e]&&{137:1,380:1,1261:1,1877:1,3036:1,4194:1,4237:1,4494:1,5566:1,6871:1,8623:1,8650:1,9313:1}[e]&&t.push(s[e]=n(e).then((()=>{s[e]=0}),(t=>{throw delete s[e],t})))},(()=>{var e={9782:0};l.f.j=(t,a)=>{var r=l.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(126|687)1$/.test(t))e[t]=0;else{var o=new Promise(((a,o)=>r=e[t]=[a,o]));a.push(r[2]=o);var n=l.p+l.u(t),s=new Error;l.l(n,(a=>{if(l.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",s.name="ChunkLoadError",s.type=o,s.request=n,r[1](s)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,[n,s,i]=a,c=0;if(n.some((t=>0!==e[t]))){for(r in s)l.o(s,r)&&(l.m[r]=s[r]);if(i)var d=i(l)}for(t&&t(a);c<n.length;c++)o=n[c],l.o(e,o)&&e[o]&&e[o][0](),e[n[c]]=0;return l.O(d)},a=globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),l.O(void 0,[1216,504,7550,2102,789,2087,6315,7167,3807,9308,1844,995,876,9602,2671,1139,5534,9525,5010,4113,5289,5175,9312,8868,2569,8274,4489,7649],(()=>l(85156)));var d=l.O(void 0,[1216,504,7550,2102,789,2087,6315,7167,3807,9308,1844,995,876,9602,2671,1139,5534,9525,5010,4113,5289,5175,9312,8868,2569,8274,4489,7649],(()=>l(90666)));d=l.O(d)})();
//# sourceMappingURL=explore.c66aae09c9bcb72d07e7.entry.js.map