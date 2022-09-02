"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7936],{81788:(e,t,o)=>{o.d(t,{TZ:()=>i,u7:()=>s,B8:()=>l,mf:()=>d});var n=o(31069),a=o(68492);const r=(e,t,o)=>{let n=`api/v1/dashboard/${e}/filter_state`;return t&&(n=n.concat(`/${t}`)),o&&(n=n.concat(`?tab_id=${o}`)),n},i=(e,t,o,i)=>n.Z.put({endpoint:r(e,o,i),jsonPayload:{value:t}}).then((e=>e.json.message)).catch((e=>(a.Z.error(e),null))),s=(e,t,o)=>n.Z.post({endpoint:r(e,void 0,o),jsonPayload:{value:t}}).then((e=>e.json.key)).catch((e=>(a.Z.error(e),null))),l=(e,t)=>n.Z.get({endpoint:r(e,t)}).then((({json:e})=>JSON.parse(e.value))).catch((e=>(a.Z.error(e),null))),d=e=>n.Z.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then((({json:e})=>e)).catch((e=>(a.Z.error(e),null)))},37936:(e,t,o)=>{o.r(t),o.d(t,{DashboardPage:()=>$,MigrationContext:()=>k,default:()=>I});var n=o(67294),a=o(51995),r=o(93185),i=o(61988),s=o(28062),l=o(78161),d=o(37703),c=o(11965),u=o(14114),p=o(38703),f=o(74069),m=o(35932);const h=(0,a.iK)(f.Z)`
  .modal-content {
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .modal-header {
    flex: 0 1 auto;
  }

  .modal-body {
    flex: 1 1 auto;
    overflow: auto;
  }

  .modal-footer {
    flex: 0 1 auto;
  }

  .ant-modal-body {
    overflow: auto;
  }
`,_=({onClickReview:e,onClickSnooze:t,onHide:o,show:a,hideFooter:r=!1})=>(0,c.tZ)(h,{show:a,onHide:o,title:(0,i.t)("Ready to review filters in this dashboard?"),hideFooter:r,footer:(0,c.tZ)(n.Fragment,null,(0,c.tZ)(m.Z,{buttonSize:"small",onClick:t},(0,i.t)("Remind me in 24 hours")),(0,c.tZ)(m.Z,{buttonSize:"small",onClick:o},(0,i.t)("Cancel")),(0,c.tZ)(m.Z,{buttonSize:"small",buttonStyle:"primary",onClick:e},(0,i.t)("Start Review"))),responsive:!0},(0,c.tZ)("div",null,(0,i.t)("filter_box will be deprecated in a future version of Superset. Please replace filter_box by dashboard filter components.")));var v=o(54804),b=o(63389),E=o(50810),Z=o(14505),y=o(9312),S=o(72570),g=o(61337),w=o(69856),x=o(27600),D=o(23525),O=o(70695),N=o(52794),C=o(31758),T=o(81788);const R=e=>c.iv`
  .filter-card-popover {
    width: 240px;
    padding: 0;
    border-radius: 4px;

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
`,k=n.createContext(w.Qi.NOOP);(0,y.Z)();const F=n.lazy((()=>Promise.all([o.e(1216),o.e(995),o.e(876),o.e(2671),o.e(1139),o.e(8274),o.e(4489),o.e(818),o.e(452)]).then(o.bind(o,40317)))),Q=document.title,$=({idOrSlug:e})=>{const t=(0,d.I0)(),o=(0,a.Fg)(),f=(0,d.v9)((e=>e.user)),{addDangerToast:m}=(0,u.e1)(),{result:h,error:y}=(0,v.QU)(e),{result:$,error:I}=(0,v.Es)(e),{result:j,error:z,status:P}=(0,v.JL)(e),B=(0,n.useRef)(!1),L=y||I,A=Boolean(h&&$),K=(0,D.eY)(x.KD.migrationState),H=(0,r.c)(r.T.ENABLE_FILTER_BOX_MIGRATION),{dashboard_title:V,css:Y,metadata:J,id:U=0}=h||{},[M,q]=(0,n.useState)(K||w.Qi.NOOP);if((0,n.useEffect)((()=>{t((0,C.sL)(P))}),[t,P]),(0,n.useEffect)((()=>{const e=$&&$.some((e=>{var t;return"filter_box"===(null==(t=e.form_data)?void 0:t.viz_type)}));if(h&&(0,O.Ms)(h,f)){if(null!=J&&J.native_filter_configuration)return void q(H?w.Qi.CONVERTED:w.Qi.NOOP);if(e)if(H){if(K&&Object.values(w.Qi).includes(K))return void q(K);const e=(0,g.rV)(g.dR.filter_box_transition_snoozed_at,{});if(Date.now()-(e[U]||0)<w.Yd)return void q(w.Qi.SNOOZED);q(w.Qi.UNDECIDED)}else(0,r.c)(r.T.DASHBOARD_NATIVE_FILTERS)&&t((0,S.Dz)((0,i.t)("filter_box will be deprecated in a future version of Superset. Please replace filter_box by dashboard filter components.")))}}),[A]),(0,n.useEffect)((()=>{U&&async function(){const e=(0,D.eY)(x.KD.permalinkKey),o=(0,D.eY)(x.KD.nativeFiltersKey);let n=o||{};const a=(0,D.eY)(x.KD.nativeFilters);if(e){const t=await(0,T.mf)(e);t&&(n=t.state.filterState)}else o&&(n=await(0,T.B8)(U,o));a&&(n=a),A&&(B.current||(B.current=!0,(0,r.c)(r.T.DASHBOARD_NATIVE_FILTERS_SET)&&t((0,N.pi)(U))),t((0,b.Y)(h,$,M,n)))}()}),[A,M]),(0,n.useEffect)((()=>(V&&(document.title=V),()=>{document.title=Q})),[V]),(0,n.useEffect)((()=>"string"==typeof Y?(0,Z.Z)(Y):()=>{}),[Y]),(0,n.useEffect)((()=>()=>{s.getNamespace(null==J?void 0:J.color_namespace).resetColors(),(0,l.Z)().clear()}),[null==J?void 0:J.color_namespace]),(0,n.useEffect)((()=>{z?m((0,i.t)("Error loading chart datasources. Filters may not work correctly.")):t((0,E.Fy)(j))}),[m,j,z,t]),L)throw L;return A?(0,c.tZ)(n.Fragment,null,(0,c.tZ)(c.xB,{styles:R(o)}),(0,c.tZ)(_,{show:M===w.Qi.UNDECIDED,hideFooter:!H,onHide:()=>{q(w.Qi.SNOOZED)},onClickReview:()=>{q(w.Qi.REVIEWING)},onClickSnooze:()=>{const e=(0,g.rV)(g.dR.filter_box_transition_snoozed_at,{});(0,g.LS)(g.dR.filter_box_transition_snoozed_at,{...e,[U]:Date.now()}),q(w.Qi.SNOOZED)}}),(0,c.tZ)(k.Provider,{value:M},(0,c.tZ)(F,null))):(0,c.tZ)(p.Z,null)},I=$},14505:(e,t,o)=>{function n(e){const t="CssEditor-css",o=document.head||document.getElementsByTagName("head")[0],n=document.querySelector(`.${t}`)||function(e){const t=document.createElement("style");return t.className="CssEditor-css",t.type="text/css",t}();return"styleSheet"in n?n.styleSheet.cssText=e:n.innerHTML=e,o.appendChild(n),function(){n.remove()}}o.d(t,{Z:()=>n})},54804:(e,t,o)=>{o.d(t,{hb:()=>s,QU:()=>l,Es:()=>d,JL:()=>c});var n=o(42190),a=o(15926);function r({owners:e}){return e?e.map((e=>`${e.first_name} ${e.last_name}`)):null}const i=o.n(a)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function s(e){return(0,n.l6)((0,n.s_)(`/api/v1/chart/${e}?q=${i}`),r)}const l=e=>(0,n.l6)((0,n.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json)}))),d=e=>(0,n.s_)(`/api/v1/dashboard/${e}/charts`),c=e=>(0,n.s_)(`/api/v1/dashboard/${e}/datasets`)}}]);
//# sourceMappingURL=e3d58ea261a3cf40f59b.chunk.js.map