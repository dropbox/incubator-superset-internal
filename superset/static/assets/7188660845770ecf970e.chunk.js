"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[232],{81788:(e,t,r)=>{r.d(t,{B8:()=>i,TZ:()=>o,mf:()=>l,u7:()=>d});var n=r(31069),a=r(68492);const s=(e,t,r)=>{let n=`api/v1/dashboard/${e}/filter_state`;return t&&(n=n.concat(`/${t}`)),r&&(n=n.concat(`?tab_id=${r}`)),n},o=(e,t,r,o)=>n.Z.put({endpoint:s(e,r,o),jsonPayload:{value:t}}).then((e=>e.json.message)).catch((e=>(a.Z.error(e),null))),d=(e,t,r)=>n.Z.post({endpoint:s(e,void 0,r),jsonPayload:{value:t}}).then((e=>e.json.key)).catch((e=>(a.Z.error(e),null))),i=(e,t)=>n.Z.get({endpoint:s(e,t)}).then((e=>{let{json:t}=e;return JSON.parse(t.value)})).catch((e=>(a.Z.error(e),null))),l=e=>n.Z.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then((e=>{let{json:t}=e;return t})).catch((e=>(a.Z.error(e),null)))},50232:(e,t,r)=>{r.r(t),r.d(t,{DashboardPage:()=>z,DashboardPageIdContext:()=>U,default:()=>D});var n=r(67294),a=r(11965),s=r(16550),o=r(51995),d=r(93185),i=r(78161),l=r(28062),c=r(55867),u=r(78718),p=r.n(u),h=r(28216),m=r(14114),b=r(38703),f=r(67417),g=r(4305),y=r(50810),v=r(14505),x=r(91263),$=r(61337),_=r(27600),E=r(23525),I=r(52794),S=r(9467),R=r(81788),w=r(14670),T=r.n(w),Z=r(43399);const j=e=>a.iv`
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
`,C=e=>a.iv`
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
`,q=e=>a.iv`
  .ant-dropdown-menu.chart-context-menu {
    min-width: ${43*e.gridUnit}px;
  }
  .ant-dropdown-menu-submenu.chart-context-submenu {
    max-width: ${60*e.gridUnit}px;
    min-width: ${40*e.gridUnit}px;
  }
`,U=n.createContext("");(0,x.Z)();const k=n.lazy((()=>Promise.all([r.e(1216),r.e(527),r.e(1247),r.e(8),r.e(981),r.e(5207),r.e(5640),r.e(3197),r.e(95),r.e(868),r.e(9540),r.e(4717),r.e(452)]).then(r.bind(r,31487)))),A=document.title,Q=()=>{const e=(0,$.rV)($.dR.dashboard__explore_context,{});return Object.fromEntries(Object.entries(e).filter((e=>{let[,t]=e;return!t.isRedundant})))},L=(e,t)=>{const r=Q();(0,$.LS)($.dR.dashboard__explore_context,{...r,[e]:t})},z=e=>{let{idOrSlug:t}=e;const r=(0,o.Fg)(),u=(0,h.I0)(),x=(0,s.k6)(),w=(()=>{const e=(0,n.useMemo)((()=>T().generate()),[]),t=(0,h.v9)((t=>{var r,n,a;let{dashboardInfo:s,dashboardState:o,nativeFilters:d,dataMask:i}=t;return{labelColors:(null==(r=s.metadata)?void 0:r.label_colors)||{},sharedLabelColors:(null==(n=s.metadata)?void 0:n.shared_label_colors)||{},colorScheme:null==o?void 0:o.colorScheme,chartConfiguration:(null==(a=s.metadata)?void 0:a.chart_configuration)||{},nativeFilters:Object.entries(d.filters).reduce(((e,t)=>{let[r,n]=t;return{...e,[r]:p()(n,["chartsInScope"])}}),{}),dataMask:i,dashboardId:s.id,filterBoxFilters:(0,Z.De)(),dashboardPageId:e}}));return(0,n.useEffect)((()=>(L(e,t),()=>{L(e,{...t,isRedundant:!0})})),[t,e]),e})(),{addDangerToast:z}=(0,m.e1)(),{result:D,error:F}=(0,f.QU)(t),{result:M,error:N}=(0,f.Es)(t),{result:O,error:P,status:J}=(0,f.JL)(t),B=(0,n.useRef)(!1),K=F||N,Y=Boolean(D&&M),{dashboard_title:V,css:X,metadata:H,id:G=0}=D||{},W=(0,d.c)(d.T.DASHBOARD_NATIVE_FILTERS_SET)&&(0,d.c)(d.T.DASHBOARD_NATIVE_FILTERS);if((0,n.useEffect)((()=>{const e=()=>{const e=Q();(0,$.LS)($.dR.dashboard__explore_context,{...e,[w]:{...e[w],isRedundant:!0}})};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[w]),(0,n.useEffect)((()=>{u((0,S.sL)(J))}),[u,J]),(0,n.useEffect)((()=>{G&&async function(){const e=(0,E.eY)(_.KD.permalinkKey),t=(0,E.eY)(_.KD.nativeFiltersKey),r=(0,E.eY)(_.KD.nativeFilters);let n,a=t||{};if(e){const t=await(0,R.mf)(e);t&&({dataMask:a,activeTabs:n}=t.state)}else t&&(a=await(0,R.B8)(G,t));r&&(a=r),Y&&(B.current||(B.current=!0,W&&u((0,I.pi)(G))),u((0,g.Y)({history:x,dashboard:D,charts:M,activeTabs:n,dataMask:a})))}()}),[Y]),(0,n.useEffect)((()=>(V&&(document.title=V),()=>{document.title=A})),[V]),(0,n.useEffect)((()=>"string"==typeof X?(0,v.Z)(X):()=>{}),[X]),(0,n.useEffect)((()=>{const e=(0,i.ZP)();return e.source=i.Ag.dashboard,()=>{l.getNamespace(null==H?void 0:H.color_namespace).resetColors(),e.clear()}}),[null==H?void 0:H.color_namespace]),(0,n.useEffect)((()=>{P?z((0,c.t)("Error loading chart datasources. Filters may not work correctly.")):u((0,y.Fy)(O))}),[z,O,P,u]),K)throw K;return Y&&B.current?(0,a.tZ)(n.Fragment,null,(0,a.tZ)(a.xB,{styles:[C(r),j(r),q(r),"",""]}),(0,a.tZ)(U.Provider,{value:w},(0,a.tZ)(k,null))):(0,a.tZ)(b.Z,null)},D=z},14505:(e,t,r)=>{function n(e){const t="CssEditor-css",r=document.head||document.getElementsByTagName("head")[0],n=document.querySelector(`.${t}`)||function(e){const t=document.createElement("style");return t.className="CssEditor-css",t.type="text/css",t}();return"styleSheet"in n?n.styleSheet.cssText=e:n.innerHTML=e,r.appendChild(n),function(){n.remove()}}r.d(t,{Z:()=>n})},67417:(e,t,r)=>{r.d(t,{Kt:()=>h.Kt,CN:()=>n.CN,QD:()=>p.QD,hb:()=>i,QU:()=>l,Es:()=>c,JL:()=>u,L8:()=>b,Xx:()=>h.Xx,SJ:()=>p.SJ,uY:()=>p.uY,zA:()=>p.zA});var n=r(45673),a=r(42190),s=r(15926);function o(e){let{owners:t}=e;return t?t.map((e=>`${e.first_name} ${e.last_name}`)):null}const d=r.n(s)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function i(e){return(0,a.l6)((0,a.s_)(`/api/v1/chart/${e}?q=${d}`),o)}const l=e=>(0,a.l6)((0,a.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json)}))),c=e=>(0,a.s_)(`/api/v1/dashboard/${e}/charts`),u=e=>(0,a.s_)(`/api/v1/dashboard/${e}/datasets`);var p=r(23936),h=r(69279);const m=r(10362).h.injectEndpoints({endpoints:e=>({queryValidations:e.query({providesTags:["QueryValidations"],query:e=>{let{dbId:t,schema:r,sql:n,templateParams:a}=e,s=a;try{s=JSON.parse(a||"")}catch(e){s=void 0}const o={schema:r,sql:n,...s&&{template_params:s}};return{method:"post",endpoint:`/api/v1/database/${t}/validate_sql/`,headers:{"Content-Type":"application/json"},body:JSON.stringify(o),transformResponse:e=>{let{json:t}=e;return t.result}}}})})}),{useQueryValidationsQuery:b}=m},69279:(e,t,r)=>{r.d(t,{Kt:()=>i,Xx:()=>u});var n=r(67294),a=r(38325);const s=r(10362).h.injectEndpoints({endpoints:e=>({schemas:e.query({providesTags:[{type:"Schemas",id:"LIST"}],query:e=>{let{dbId:t,forceRefresh:r}=e;return{endpoint:`/api/v1/database/${t}/schemas/`,urlParams:{force:r},transformResponse:e=>{let{json:t}=e;return t.result.map((e=>({value:e,label:e,title:e})))}}},serializeQueryArgs:e=>{let{queryArgs:{dbId:t}}=e;return{dbId:t}}})})}),{useLazySchemasQuery:o,useSchemasQuery:d,endpoints:i,util:l}=s,c=[];function u(e){const t=(0,n.useRef)(!1),{dbId:r,onSuccess:s,onError:i}=e||{},[l]=o(),u=d({dbId:r,forceRefresh:!1},{skip:!r}),p=(0,a.Z)(((e,t)=>{null==s||s(e,t)})),h=(0,a.Z)((()=>{null==i||i()})),m=(0,n.useCallback)((()=>{r&&l({dbId:r,forceRefresh:!0}).then((e=>{let{isSuccess:t,isError:r,data:n}=e;t&&p(n||c,!0),r&&h()}))}),[r,h,p,l]);return(0,n.useEffect)((()=>{if(t.current){const{requestId:e,isSuccess:t,isError:r,isFetching:n,data:a,originalArgs:s}=u;null!=s&&s.forceRefresh||!e||n||(t&&p(a||c,!1),r&&h())}else t.current=!0}),[u,p,h]),{...u,refetch:m}}},23936:(e,t,r)=>{r.d(t,{$K:()=>h,QD:()=>p,SJ:()=>u,uY:()=>c,zA:()=>m});var n=r(67294),a=r(38325),s=r(10362),o=r(69279);const d=s.h.injectEndpoints({endpoints:e=>({tables:e.query({providesTags:["Tables"],query:e=>{let{dbId:t,schema:r,forceRefresh:n}=e;return{endpoint:`/api/v1/database/${null!=t?t:"undefined"}/tables/`,urlParams:{force:n,schema_name:r?encodeURIComponent(r):""},transformResponse:e=>{let{json:t}=e;return{options:t.result,hasMore:t.count>t.result.length}}}},serializeQueryArgs:e=>{let{queryArgs:{dbId:t,schema:r}}=e;return{dbId:t,schema:r}}}),tableMetadata:e.query({query:e=>{let{dbId:t,schema:r,table:n}=e;return{endpoint:`/api/v1/database/${t}/table/${encodeURIComponent(n)}/${encodeURIComponent(r)}/`,transformResponse:e=>{let{json:t}=e;return t}}}}),tableExtendedMetadata:e.query({query:e=>{let{dbId:t,schema:r,table:n}=e;return{endpoint:`/api/v1/database/${t}/table_extra/${encodeURIComponent(n)}/${encodeURIComponent(r)}/`,transformResponse:e=>{let{json:t}=e;return t}}}})})}),{useLazyTablesQuery:i,useTablesQuery:l,useTableMetadataQuery:c,useTableExtendedMetadataQuery:u,endpoints:p,util:h}=d;function m(e){const t=(0,n.useRef)(!1),{data:r,isFetching:s}=(0,o.Xx)({dbId:e.dbId}),d=(0,n.useMemo)((()=>new Set(null==r?void 0:r.map((e=>{let{value:t}=e;return t})))),[r]),{dbId:c,schema:u,onSuccess:p,onError:h}=e||{},m=Boolean(c&&u&&!s&&d.has(u)),b=l({dbId:c,schema:u,forceRefresh:!1},{skip:!m}),[f]=i(),g=(0,a.Z)(((e,t)=>{null==p||p(e,t)})),y=(0,a.Z)((e=>{null==h||h(e)})),v=(0,n.useCallback)((()=>{m&&f({dbId:c,schema:u,forceRefresh:!0}).then((e=>{let{isSuccess:t,isError:r,data:n,error:a}=e;t&&n&&g(n,!0),r&&y(a)}))}),[c,u,m,g,y,f]);return(0,n.useEffect)((()=>{if(t.current){const{requestId:e,isSuccess:t,isError:r,isFetching:n,data:a,error:s,originalArgs:o}=b;null!=o&&o.forceRefresh||!e||n||(t&&a&&g(a,!1),r&&y(s))}else t.current=!0}),[b,g,y]),{...b,refetch:v}}}}]);
//# sourceMappingURL=7188660845770ecf970e.chunk.js.map