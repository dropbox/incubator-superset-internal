"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[232],{81788:(e,t,r)=>{r.d(t,{B8:()=>d,TZ:()=>o,mf:()=>l,u7:()=>i});var n=r(31069),a=r(68492);const s=(e,t,r)=>{let n=`api/v1/dashboard/${e}/filter_state`;return t&&(n=n.concat(`/${t}`)),r&&(n=n.concat(`?tab_id=${r}`)),n},o=(e,t,r,o)=>n.Z.put({endpoint:s(e,r,o),jsonPayload:{value:t}}).then((e=>e.json.message)).catch((e=>(a.Z.error(e),null))),i=(e,t,r)=>n.Z.post({endpoint:s(e,void 0,r),jsonPayload:{value:t}}).then((e=>e.json.key)).catch((e=>(a.Z.error(e),null))),d=(e,t)=>n.Z.get({endpoint:s(e,t)}).then((e=>{let{json:t}=e;return JSON.parse(t.value)})).catch((e=>(a.Z.error(e),null))),l=e=>n.Z.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then((e=>{let{json:t}=e;return t})).catch((e=>(a.Z.error(e),null)))},50232:(e,t,r)=>{r.r(t),r.d(t,{DashboardPage:()=>q,DashboardPageIdContext:()=>C,default:()=>P});var n=r(67294),a=r(11965),s=r(16550),o=r(51995),i=r(93185),d=r(78161),l=r(28062),c=r(55867),u=r(78718),p=r.n(u),h=r(28216),f=r(14114),m=r(38703),g=r(42582),b=r(4305),v=r(50810),y=r(14505),x=r(56242),_=r(61337),$=r(27600),E=r(23525),w=r(52794),S=r(9467),I=r(81788),Z=r(14670),R=r.n(Z),T=r(43399);const k=e=>a.iv`
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
`,j=e=>a.iv`
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
`,U=e=>a.iv`
  .ant-dropdown-menu.chart-context-menu {
    min-width: ${43*e.gridUnit}px;
  }
  .ant-dropdown-menu-submenu.chart-context-submenu {
    max-width: ${60*e.gridUnit}px;
    min-width: ${40*e.gridUnit}px;
  }
`,C=n.createContext("");(0,x.Z)();const F=n.lazy((()=>Promise.all([r.e(1216),r.e(527),r.e(1247),r.e(8),r.e(981),r.e(5207),r.e(5640),r.e(3197),r.e(868),r.e(9540),r.e(4717),r.e(452)]).then(r.bind(r,31487)))),L=document.title,z=()=>{const e=(0,_.rV)(_.dR.dashboard__explore_context,{});return Object.fromEntries(Object.entries(e).filter((e=>{let[,t]=e;return!t.isRedundant})))},A=(e,t)=>{const r=z();(0,_.LS)(_.dR.dashboard__explore_context,{...r,[e]:t})},q=e=>{let{idOrSlug:t}=e;const r=(0,o.Fg)(),u=(0,h.I0)(),x=(0,s.k6)(),Z=(()=>{const e=(0,n.useMemo)((()=>R().generate()),[]),t=(0,h.v9)((t=>{var r,n,a;let{dashboardInfo:s,dashboardState:o,nativeFilters:i,dataMask:d}=t;return{labelColors:(null==(r=s.metadata)?void 0:r.label_colors)||{},sharedLabelColors:(null==(n=s.metadata)?void 0:n.shared_label_colors)||{},colorScheme:null==o?void 0:o.colorScheme,chartConfiguration:(null==(a=s.metadata)?void 0:a.chart_configuration)||{},nativeFilters:Object.entries(i.filters).reduce(((e,t)=>{let[r,n]=t;return{...e,[r]:p()(n,["chartsInScope"])}}),{}),dataMask:d,dashboardId:s.id,filterBoxFilters:(0,T.De)(),dashboardPageId:e}}));return(0,n.useEffect)((()=>(A(e,t),()=>{A(e,{...t,isRedundant:!0})})),[t,e]),e})(),{addDangerToast:q}=(0,f.e1)(),{result:P,error:D}=(0,g.QU)(t),{result:B,error:M}=(0,g.Es)(t),{result:O,error:Q,status:N}=(0,g.JL)(t),J=(0,n.useRef)(!1),K=D||M,Y=Boolean(P&&B),{dashboard_title:H,css:V,metadata:X,id:G=0}=P||{};if((0,n.useEffect)((()=>{const e=()=>{const e=z();(0,_.LS)(_.dR.dashboard__explore_context,{...e,[Z]:{...e[Z],isRedundant:!0}})};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[Z]),(0,n.useEffect)((()=>{u((0,S.sL)(N))}),[u,N]),(0,n.useEffect)((()=>{G&&async function(){const e=(0,E.eY)($.KD.permalinkKey),t=(0,E.eY)($.KD.nativeFiltersKey),r=(0,E.eY)($.KD.nativeFilters);let n,a=t||{};if(e){const t=await(0,I.mf)(e);t&&({dataMask:a,activeTabs:n}=t.state)}else t&&(a=await(0,I.B8)(G,t));r&&(a=r),Y&&(J.current||(J.current=!0,(0,i.c)(i.T.DASHBOARD_NATIVE_FILTERS_SET)&&u((0,w.pi)(G))),u((0,b.Y)({history:x,dashboard:P,charts:B,activeTabs:n,dataMask:a})))}()}),[Y]),(0,n.useEffect)((()=>(H&&(document.title=H),()=>{document.title=L})),[H]),(0,n.useEffect)((()=>"string"==typeof V?(0,y.Z)(V):()=>{}),[V]),(0,n.useEffect)((()=>{const e=(0,d.ZP)();return e.source=d.Ag.dashboard,()=>{l.getNamespace(null==X?void 0:X.color_namespace).resetColors(),e.clear()}}),[null==X?void 0:X.color_namespace]),(0,n.useEffect)((()=>{Q?q((0,c.t)("Error loading chart datasources. Filters may not work correctly.")):u((0,v.Fy)(O))}),[q,O,Q,u]),K)throw K;return Y&&J.current?(0,a.tZ)(n.Fragment,null,(0,a.tZ)(a.xB,{styles:[j(r),k(r),U(r),"",""]}),(0,a.tZ)(C.Provider,{value:Z},(0,a.tZ)(F,null))):(0,a.tZ)(m.Z,null)},P=q},14505:(e,t,r)=>{function n(e){const t="CssEditor-css",r=document.head||document.getElementsByTagName("head")[0],n=document.querySelector(`.${t}`)||function(e){const t=document.createElement("style");return t.className="CssEditor-css",t.type="text/css",t}();return"styleSheet"in n?n.styleSheet.cssText=e:n.innerHTML=e,r.appendChild(n),function(){n.remove()}}r.d(t,{Z:()=>n})},42582:(e,t,r)=>{r.d(t,{hb:()=>i,QU:()=>d,Es:()=>l,JL:()=>c,Xx:()=>v,zA:()=>$});var n=r(42190),a=r(15926);function s(e){let{owners:t}=e;return t?t.map((e=>`${e.first_name} ${e.last_name}`)):null}const o=r.n(a)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function i(e){return(0,n.l6)((0,n.s_)(`/api/v1/chart/${e}?q=${o}`),s)}const d=e=>(0,n.l6)((0,n.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json)}))),l=e=>(0,n.s_)(`/api/v1/dashboard/${e}/charts`),c=e=>(0,n.s_)(`/api/v1/dashboard/${e}/datasets`);var u=r(67294),p=r(38325),h=r(10362);const f=h.hi.injectEndpoints({endpoints:e=>({schemas:e.query({providesTags:[{type:"Schemas",id:"LIST"}],query:e=>{let{dbId:t,forceRefresh:r}=e;return{endpoint:`/api/v1/database/${t}/schemas/`,urlParams:{force:r},transformResponse:e=>{let{json:t}=e;return t.result.map((e=>({value:e,label:e,title:e})))}}},serializeQueryArgs:e=>{let{queryArgs:{dbId:t}}=e;return{dbId:t}}})})}),{useLazySchemasQuery:m,useSchemasQuery:g}=f,b=[];function v(e){const t=(0,u.useRef)(!1),{dbId:r,onSuccess:n,onError:a}=e||{},[s]=m(),o=g({dbId:r,forceRefresh:!1},{skip:!r}),i=(0,p.Z)(((e,t)=>{null==n||n(e,t)})),d=(0,p.Z)((()=>{null==a||a()})),l=(0,u.useCallback)((()=>{r&&s({dbId:r,forceRefresh:!0}).then((e=>{let{isSuccess:t,isError:r,data:n}=e;t&&i(n||b,!0),r&&d()}))}),[r,d,i,s]);return(0,u.useEffect)((()=>{if(t.current){const{requestId:e,isSuccess:t,isError:r,isFetching:n,data:a,originalArgs:s}=o;null!=s&&s.forceRefresh||!e||n||(t&&i(a||b,!1),r&&d())}else t.current=!0}),[o,i,d]),{...o,refetch:l}}const y=h.hi.injectEndpoints({endpoints:e=>({tables:e.query({providesTags:["Tables"],query:e=>{let{dbId:t,schema:r,forceRefresh:n}=e;return{endpoint:`/api/v1/database/${null!=t?t:"undefined"}/tables/`,urlParams:{force:n,schema_name:r?encodeURIComponent(r):""},transformResponse:e=>{let{json:t}=e;return{options:t.result,hasMore:t.count>t.result.length}}}},serializeQueryArgs:e=>{let{queryArgs:{dbId:t,schema:r}}=e;return{dbId:t,schema:r}}})})}),{useLazyTablesQuery:x,useTablesQuery:_}=y;function $(e){const t=(0,u.useRef)(!1),{data:r,isFetching:n}=v({dbId:e.dbId}),a=(0,u.useMemo)((()=>new Set(null==r?void 0:r.map((e=>{let{value:t}=e;return t})))),[r]),{dbId:s,schema:o,onSuccess:i,onError:d}=e||{},l=Boolean(s&&o&&!n&&a.has(o)),c=_({dbId:s,schema:o,forceRefresh:!1},{skip:!l}),[h]=x(),f=(0,p.Z)(((e,t)=>{null==i||i(e,t)})),m=(0,p.Z)((e=>{null==d||d(e)})),g=(0,u.useCallback)((()=>{l&&h({dbId:s,schema:o,forceRefresh:!0}).then((e=>{let{isSuccess:t,isError:r,data:n,error:a}=e;t&&n&&f(n,!0),r&&m(a)}))}),[s,o,l,f,m,h]);return(0,u.useEffect)((()=>{if(t.current){const{requestId:e,isSuccess:t,isError:r,isFetching:n,data:a,error:s,originalArgs:o}=c;null!=o&&o.forceRefresh||!e||n||(t&&a&&f(a,!1),r&&m(s))}else t.current=!0}),[c,f,m]),{...c,refetch:g}}},38325:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(97654);function a(e){return(0,n.Z)(e)}}}]);
//# sourceMappingURL=5d0a1163600185926f88.chunk.js.map