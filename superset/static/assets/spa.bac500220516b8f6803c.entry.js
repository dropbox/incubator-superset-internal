(()=>{var e,t,a,n,i,r,o,d,l={39991:e=>{"use strict";e.exports=function(){function e(e,t,a,n,i){return e<t||a<t?e>a?a+1:e+1:n===i?t:t+1}return function(t,a){if(t===a)return 0;if(t.length>a.length){var n=t;t=a,a=n}for(var i=t.length,r=a.length;i>0&&t.charCodeAt(i-1)===a.charCodeAt(r-1);)i--,r--;for(var o=0;o<i&&t.charCodeAt(o)===a.charCodeAt(o);)o++;if(r-=o,0==(i-=o)||r<3)return r;var d,l,s,c,u,b,f,h,m,p,g,v,Z=0,y=[];for(d=0;d<i;d++)y.push(d+1),y.push(t.charCodeAt(o+d));for(var _=y.length-1;Z<r-3;)for(m=a.charCodeAt(o+(l=Z)),p=a.charCodeAt(o+(s=Z+1)),g=a.charCodeAt(o+(c=Z+2)),v=a.charCodeAt(o+(u=Z+3)),b=Z+=4,d=0;d<_;d+=2)l=e(f=y[d],l,s,m,h=y[d+1]),s=e(l,s,c,p,h),c=e(s,c,u,g,h),b=e(c,u,b,v,h),y[d]=b,u=c,c=s,s=l,l=f;for(;Z<r;)for(m=a.charCodeAt(o+(l=Z)),b=++Z,d=0;d<_;d+=2)f=y[d],y[d]=b=e(f,l,b,m,y[d+1]),l=f;return b}}()},43063:(e,t,a)=>{var n=a(34963),i=a(80760),r=a(67206),o=a(1469),d=a(94885);e.exports=function(e,t){return(o(e)?n:i)(e,d(r(t,3)))}},79789:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(67294),i=a(51995),r=a(61988),o=a(70163),d=a(58593),l=a(11965);const s=function({certifiedBy:e,details:t,size:a="l"}){const s=(0,i.Fg)();return(0,l.tZ)(d.u,{id:"certified-details-tooltip",title:(0,l.tZ)(n.Fragment,null,e&&(0,l.tZ)("div",null,(0,l.tZ)("strong",null,(0,r.t)("Certified by %s",e))),(0,l.tZ)("div",null,t))},(0,l.tZ)(o.Z.Certified,{iconColor:s.colors.primary.base,iconSize:a}))}},19259:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(67294),i=a(17198),r=a(11965);function o({title:e,description:t,onConfirm:a,children:o}){const[d,l]=(0,n.useState)(!1),[s,c]=(0,n.useState)([]),u=()=>{l(!1),c([])};return(0,r.tZ)(n.Fragment,null,o&&o(((...e)=>{e.forEach((e=>{e&&("function"==typeof e.persist&&e.persist(),"function"==typeof e.preventDefault&&e.preventDefault(),"function"==typeof e.stopPropagation&&e.stopPropagation())})),l(!0),c(e)})),(0,r.tZ)(i.Z,{description:t,onConfirm:()=>{a(...s),u()},onHide:u,open:d,title:e}))}},17198:(e,t,a)=>{"use strict";a.d(t,{Z:()=>b});var n=a(51995),i=a(61988),r=a(67294),o=a(9875),d=a(74069),l=a(49238),s=a(11965);const c=n.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
  }
`,u=n.iK.div`
  line-height: 40px;
  padding-top: 16px;
`;function b({description:e,onConfirm:t,onHide:a,open:n,title:b}){const[f,h]=(0,r.useState)(!0),[m,p]=(0,r.useState)(""),g=()=>{p(""),t()};return(0,s.tZ)(d.Z,{disablePrimaryButton:f,onHide:()=>{p(""),a()},onHandledPrimaryAction:g,primaryButtonName:(0,i.t)("delete"),primaryButtonType:"danger",show:n,title:b},(0,s.tZ)(u,null,e),(0,s.tZ)(c,null,(0,s.tZ)(l.lX,{htmlFor:"delete"},(0,i.t)('Type "%s" to confirm',(0,i.t)("DELETE"))),(0,s.tZ)(o.II,{type:"text",id:"delete",autoComplete:"off",value:m,onChange:e=>{var t;const a=null!=(t=e.target.value)?t:"";h(a.toUpperCase()!==(0,i.t)("DELETE")),p(a)},onPressEnter:()=>{f||g()}})))}},36674:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(67294),i=a(51995),r=a(61988),o=a(58593),d=a(33626),l=a(70163),s=a(11965);const c=i.iK.a`
  font-size: ${({theme:e})=>e.typography.sizes.xl}px;
  display: flex;
  padding: 0 0 0 0.5em;
`,u=({itemId:e,isStarred:t,showTooltip:a,saveFaveStar:i,fetchFaveStar:u})=>{(0,d.J)((()=>{u&&u(e)}));const b=(0,n.useCallback)((a=>{a.preventDefault(),i(e,!!t)}),[t,e,i]),f=(0,s.tZ)(c,{href:"#",onClick:b,className:"fave-unfave-icon",role:"button"},t?(0,s.tZ)(l.Z.FavoriteSelected,{iconSize:"xxl"}):(0,s.tZ)(l.Z.FavoriteUnselected,{iconSize:"xxl"}));return a?(0,s.tZ)(o.u,{id:"fave-unfave-tooltip",title:(0,r.t)("Click to favorite/unfavorite")},f):f}},55467:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var n=a(11965),i=a(67294),r=a(51995),o=a(4715),d=a(58593),l=a(5872),s=a.n(l),c=a(68492);const u=r.iK.div`
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center ${({position:e})=>e};
  display: inline-block;
  height: calc(100% - 1px);
  width: calc(100% - 2px);
  margin: 1px 1px 0 1px;
`;function b({src:e,fallback:t,isLoading:a,position:r,...o}){const[d,l]=(0,i.useState)(t);return(0,i.useEffect)((()=>(e&&fetch(e).then((e=>e.blob())).then((e=>{if(/image/.test(e.type)){const t=URL.createObjectURL(e);l(t)}})).catch((e=>{c.Z.error(e),l(t)})),()=>{l(t)})),[e,t]),(0,n.tZ)(u,s()({src:a?t:d},o,{position:r}))}var f=a(79789);const h=r.iK.div`
  width: 64px;
  display: flex;
  justify-content: flex-end;
`,m=(0,r.iK)(o.Ak)`
  border: 1px solid #d9dbe4;
  border-radius: ${({theme:e})=>e.gridUnit}px;
  overflow: hidden;

  .ant-card-body {
    padding: ${({theme:e})=>4*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
  }
  .ant-card-meta-detail > div:not(:last-child) {
    margin-bottom: 0;
  }
  .gradient-container {
    position: relative;
    height: 100%;
  }
  &:hover {
    box-shadow: 8px 8px 28px 0px rgba(0, 0, 0, 0.24);
    transition: box-shadow ${({theme:e})=>e.transitionTiming}s ease-in-out;

    .gradient-container:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 47.83%,
        rgba(0, 0, 0, 0.219135) 79.64%,
        rgba(0, 0, 0, 0.5) 100%
      );

      transition: background ${({theme:e})=>e.transitionTiming}s
        ease-in-out;
    }

    .cover-footer {
      transform: translateY(0);
    }
  }
`,p=r.iK.div`
  height: 264px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  overflow: hidden;

  .cover-footer {
    transform: translateY(${({theme:e})=>9*e.gridUnit}px);
    transition: ${({theme:e})=>e.transitionTiming}s ease-out;
  }
`,g=r.iK.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

  .card-actions {
    margin-left: auto;
    align-self: flex-end;
    padding-left: ${({theme:e})=>e.gridUnit}px;
    span[role='img'] {
      display: flex;
      align-items: center;
    }
  }
`,v=r.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  & a {
    color: ${({theme:e})=>e.colors.grayscale.dark1} !important;
  }
`,Z=r.iK.span`
  position: absolute;
  right: -1px;
  bottom: ${({theme:e})=>e.gridUnit}px;
`,y=r.iK.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  top: -${({theme:e})=>9*e.gridUnit}px;
  padding: 0 8px;
`,_=r.iK.div`
  flex: 1;
  overflow: hidden;
`,x=r.iK.div`
  align-self: flex-end;
  margin-left: auto;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`,w=(0,r.iK)(o.Od)`
  h3 {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  ul {
    margin-bottom: 0;
  }
`,C={rows:1,width:150},S=({to:e,children:t})=>(0,n.tZ)("a",{href:e},t);function k({title:e,url:t,linkComponent:a,titleRight:l,imgURL:s,imgFallbackURL:c,description:u,coverLeft:h,coverRight:k,actions:E,avatar:T,loading:$,imgPosition:I="top",cover:N,certifiedBy:A,certificationDetails:D}){const R=t&&a?a:S,F=(0,r.Fg)();return(0,n.tZ)(m,{cover:N||(0,n.tZ)(p,null,(0,n.tZ)(R,{to:t},(0,n.tZ)("div",{className:"gradient-container"},(0,n.tZ)(b,{src:s||"",fallback:c||"",isLoading:$,position:I}))),(0,n.tZ)(y,{className:"cover-footer"},!$&&h&&(0,n.tZ)(_,null,h),!$&&k&&(0,n.tZ)(x,null,k)))},$&&(0,n.tZ)(o.Ak.Meta,{title:(0,n.tZ)(i.Fragment,null,(0,n.tZ)(g,null,(0,n.tZ)(o.Od.Input,{active:!0,size:"small",css:(0,n.iv)({width:Math.trunc(62.5*F.gridUnit)},"","")}),(0,n.tZ)("div",{className:"card-actions"},(0,n.tZ)(o.Od.Button,{active:!0,shape:"circle"})," ",(0,n.tZ)(o.Od.Button,{active:!0,css:(0,n.iv)({width:10*F.gridUnit},"","")})))),description:(0,n.tZ)(w,{round:!0,active:!0,title:!1,paragraph:C})}),!$&&(0,n.tZ)(o.Ak.Meta,{title:(0,n.tZ)(g,null,(0,n.tZ)(d.u,{title:e},(0,n.tZ)(v,null,(0,n.tZ)(R,{to:t},A&&(0,n.tZ)(i.Fragment,null,(0,n.tZ)(f.Z,{certifiedBy:A,details:D})," "),e))),l&&(0,n.tZ)(Z,null,l),(0,n.tZ)("div",{className:"card-actions"},E)),description:u,avatar:T||null}))}k.Actions=h;const E=k},83673:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var n=a(67294),i=a(74069),r=a(9875),o=a(35932),d=a(4715),l=a(15926),s=a.n(l),c=a(51995),u=a(61988),b=a(31069),f=a(98286),h=a(14114),m=a(11965);const p=d.qz.Item,g=(0,c.iK)(d.qz.Item)`
  margin-bottom: 0;
`,v=c.iK.span`
  margin-bottom: 0;
`,Z=(0,h.ZP)((function({slice:e,onHide:t,onSave:a,show:l,addSuccessToast:c}){const[h,Z]=(0,n.useState)(!1),[y]=d.qz.useForm(),[_,x]=(0,n.useState)(e.slice_name||""),[w,C]=(0,n.useState)(null);function S({error:e,statusText:t,message:a}){let n=e||t||(0,u.t)("An error has occurred");"Forbidden"===a&&(n=(0,u.t)("You do not have permission to edit this chart")),i.Z.error({title:"Error",content:n,okButtonProps:{danger:!0,className:"btn-danger"}})}const k=(0,n.useCallback)((async function(){try{const t=(await b.Z.get({endpoint:`/api/v1/chart/${e.slice_id}`})).json.result;C(t.owners.map((e=>({value:e.id,label:`${e.first_name} ${e.last_name}`}))))}catch(e){S(await(0,f.O)(e))}}),[e.slice_id]),E=(0,n.useMemo)((()=>(e="",t,a)=>{const n=s().encode({filter:e,page:t,page_size:a});return b.Z.get({endpoint:`/api/v1/chart/related/owners?q=${n}`}).then((e=>({data:e.json.result.map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),T=(0,u.t)("Owners");return(0,n.useEffect)((()=>{k()}),[k]),(0,n.useEffect)((()=>{x(e.slice_name||"")}),[e.slice_name]),(0,m.tZ)(i.Z,{show:l,onHide:t,title:"Edit Chart Properties",footer:(0,m.tZ)(n.Fragment,null,(0,m.tZ)(o.Z,{htmlType:"button",buttonSize:"small",onClick:t,cta:!0},(0,u.t)("Cancel")),(0,m.tZ)(o.Z,{htmlType:"submit",buttonSize:"small",buttonStyle:"primary",onClick:y.submit,disabled:h||!_||e.is_managed_externally,tooltip:e.is_managed_externally?(0,u.t)("This chart is managed externally, and can't be edited in Superset"):"",cta:!0},(0,u.t)("Save"))),responsive:!0,wrapProps:{"data-test":"properties-edit-modal"}},(0,m.tZ)(d.qz,{form:y,onFinish:async n=>{Z(!0);const{certified_by:i,certification_details:r,description:o,cache_timeout:d}=n,l={slice_name:_||null,description:o||null,cache_timeout:d||null,certified_by:i||null,certification_details:i&&r?r:null};w&&(l.owners=w.map((e=>e.value)));try{const n=await b.Z.put({endpoint:`/api/v1/chart/${e.slice_id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),i={...l,...n.json.result,id:e.slice_id};a(i),c((0,u.t)("Chart properties updated")),t()}catch(e){S(await(0,f.O)(e))}Z(!1)},layout:"vertical",initialValues:{name:e.slice_name||"",description:e.description||"",cache_timeout:null!=e.cache_timeout?e.cache_timeout:"",certified_by:e.certified_by||"",certification_details:e.certified_by&&e.certification_details?e.certification_details:""}},(0,m.tZ)(d.X2,{gutter:16},(0,m.tZ)(d.JX,{xs:24,md:12},(0,m.tZ)("h3",null,(0,u.t)("Basic information")),(0,m.tZ)(p,{label:(0,u.t)("Name"),required:!0},(0,m.tZ)(r.II,{"aria-label":(0,u.t)("Name"),name:"name",type:"text",value:_,onChange:e=>{var t;return x(null!=(t=e.target.value)?t:"")}})),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Description"),name:"description"},(0,m.tZ)(r.Kx,{rows:3,style:{maxWidth:"100%"}})),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("The description can be displayed as widget headers in the dashboard view. Supports markdown."))),(0,m.tZ)("h3",null,(0,u.t)("Certification")),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Certified by"),name:"certified_by"},(0,m.tZ)(r.II,{"aria-label":(0,u.t)("Certified by")})),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("Person or group that has certified this chart."))),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Certification details"),name:"certification_details"},(0,m.tZ)(r.II,{"aria-label":(0,u.t)("Certification details")})),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("Any additional detail to show in the certification tooltip.")))),(0,m.tZ)(d.JX,{xs:24,md:12},(0,m.tZ)("h3",null,(0,u.t)("Configuration")),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Cache timeout"),name:"cache_timeout"},(0,m.tZ)(r.II,{"aria-label":"Cache timeout"})),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("Duration (in seconds) of the caching timeout for this chart. Note this defaults to the dataset's timeout if undefined."))),(0,m.tZ)("h3",{style:{marginTop:"1em"}},(0,u.t)("Access")),(0,m.tZ)(p,{label:T},(0,m.tZ)(d.Ph,{ariaLabel:T,mode:"multiple",name:"owners",value:w||[],onChange:C,options:E,disabled:!w,allowClear:!0}),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("A list of users who can alter the chart. Searchable by name or username.")))))))}))},33626:(e,t,a)=>{"use strict";a.d(t,{J:()=>i});var n=a(67294);const i=e=>{(0,n.useEffect)(e,[])}},32228:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(89816),i=a(15926),r=a.n(i),o=a(14670),d=a.n(o);function l(e,t,a,i=200){const o=d().generate(),l=`/api/v1/${e}/export/?q=${r().encode(t)}&token=${o}`,s=document.createElement("iframe");s.style.display="none",s.src=l,document.body.appendChild(s);const c=window.setInterval((()=>{"done"===(0,n.Z)()[o]&&(window.clearInterval(c),document.body.removeChild(s),a())}),i)}},61337:(e,t,a)=>{"use strict";var n;function i(e,t){return o(e,t)}function r(e,t){d(e,t)}function o(e,t){try{const a=localStorage.getItem(e);return null===a?t:JSON.parse(a)}catch{return t}}function d(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}a.d(t,{dR:()=>n,rV:()=>i,LS:()=>r,OH:()=>o,I_:()=>d}),function(e){e.filter_box_transition_snoozed_at="filter_box_transition_snoozed_at",e.chart_split_sizes="chart_split_sizes",e.controls_width="controls_width",e.datasource_width="datasource_width",e.is_datapanel_open="is_datapanel_open",e.homepage_chart_filter="homepage_chart_filter",e.homepage_dashboard_filter="homepage_dashboard_filter",e.homepage_collapse_state="homepage_collapse_state",e.homepage_activity_filter="homepage_activity_filter",e.sqllab__is_autocomplete_enabled="sqllab__is_autocomplete_enabled",e.explore__data_table_time_formatted_columns="explore__data_table_time_formatted_columns"}(n||(n={}))},34024:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(67294),i=a(51995),r=a(61988),o=a(91877),d=a(93185),l=a(19259),s=a(70163),c=a(55467),u=a(37921),b=a(4715),f=a(83862),h=a(36674),m=a(34581),p=a(40768),g=a(11965);function v({chart:e,hasPerm:t,openChartEditModal:a,bulkSelectEnabled:v,addDangerToast:Z,addSuccessToast:y,refreshData:_,loading:x,showThumbnails:w,saveFavoriteStatus:C,favoriteStatus:S,chartFilter:k,userId:E,handleBulkChartExport:T}){const $=t("can_write"),I=t("can_write"),N=t("can_export")&&(0,o.cr)(d.T.VERSIONED_EXPORT),A=(0,i.Fg)(),D=(0,g.tZ)(f.v,null,I&&(0,g.tZ)(f.v.Item,null,(0,g.tZ)(l.Z,{title:(0,r.t)("Please confirm"),description:(0,g.tZ)(n.Fragment,null,(0,r.t)("Are you sure you want to delete")," ",(0,g.tZ)("b",null,e.slice_name),"?"),onConfirm:()=>(0,p.Gm)(e,y,Z,_,k,E)},(e=>(0,g.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,g.tZ)(s.Z.Trash,{iconSize:"l"})," ",(0,r.t)("Delete"))))),N&&(0,g.tZ)(f.v.Item,null,(0,g.tZ)("div",{role:"button",tabIndex:0,onClick:()=>T([e])},(0,g.tZ)(s.Z.Share,{iconSize:"l"})," ",(0,r.t)("Export"))),$&&(0,g.tZ)(f.v.Item,null,(0,g.tZ)("div",{role:"button",tabIndex:0,onClick:()=>a(e)},(0,g.tZ)(s.Z.EditAlt,{iconSize:"l"})," ",(0,r.t)("Edit"))));return(0,g.tZ)(p.ZB,{onClick:()=>{!v&&e.url&&(window.location.href=e.url)}},(0,g.tZ)(c.Z,{loading:x,title:e.slice_name,certifiedBy:e.certified_by,certificationDetails:e.certification_details,cover:(0,o.cr)(d.T.THUMBNAILS)&&w?null:(0,g.tZ)(n.Fragment,null),url:v?void 0:e.url,imgURL:e.thumbnail_url||"",imgFallbackURL:"/static/assets/images/chart-card-fallback.svg",description:(0,r.t)("Modified %s",e.changed_on_delta_humanized),coverLeft:(0,g.tZ)(m.Z,{users:e.owners||[]}),coverRight:(0,g.tZ)(u.Z,{type:"secondary"},e.datasource_name_text),actions:(0,g.tZ)(c.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},(0,g.tZ)(h.Z,{itemId:e.id,saveFaveStar:C,isStarred:S}),(0,g.tZ)(b.Gj,{overlay:D},(0,g.tZ)(s.Z.MoreVert,{iconColor:A.colors.grayscale.base})))}))}},99415:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(67294),i=a(5977),r=a(73727),o=a(51995),d=a(61988),l=a(40768),s=a(91877),c=a(93185),u=a(4715),b=a(83862),f=a(19259),h=a(55467),m=a(70163),p=a(37921),g=a(34581),v=a(36674),Z=a(11965);const y=function({dashboard:e,hasPerm:t,bulkSelectEnabled:a,dashboardFilter:y,refreshData:_,userId:x,addDangerToast:w,addSuccessToast:C,openDashboardEditModal:S,favoriteStatus:k,saveFavoriteStatus:E,showThumbnails:T,handleBulkDashboardExport:$}){const I=(0,i.k6)(),N=t("can_write"),A=t("can_write"),D=t("can_export"),R=(0,o.Fg)(),F=(0,Z.tZ)(b.v,null,N&&S&&(0,Z.tZ)(b.v.Item,null,(0,Z.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:()=>S&&S(e)},(0,Z.tZ)(m.Z.EditAlt,{iconSize:"l"})," ",(0,d.t)("Edit"))),D&&(0,Z.tZ)(b.v.Item,null,(0,Z.tZ)("div",{role:"button",tabIndex:0,onClick:()=>$([e]),className:"action-button"},(0,Z.tZ)(m.Z.Share,{iconSize:"l"})," ",(0,d.t)("Export"))),A&&(0,Z.tZ)(b.v.Item,null,(0,Z.tZ)(f.Z,{title:(0,d.t)("Please confirm"),description:(0,Z.tZ)(n.Fragment,null,(0,d.t)("Are you sure you want to delete")," ",(0,Z.tZ)("b",null,e.dashboard_title),"?"),onConfirm:()=>(0,l.Iu)(e,_,C,w,y,x)},(e=>(0,Z.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,Z.tZ)(m.Z.Trash,{iconSize:"l"})," ",(0,d.t)("Delete"))))));return(0,Z.tZ)(l.ZB,{onClick:()=>{a||I.push(e.url)}},(0,Z.tZ)(h.Z,{loading:e.loading||!1,title:e.dashboard_title,certifiedBy:e.certified_by,certificationDetails:e.certification_details,titleRight:(0,Z.tZ)(p.Z,null,e.published?(0,d.t)("published"):(0,d.t)("draft")),cover:(0,s.cr)(c.T.THUMBNAILS)&&T?null:(0,Z.tZ)(n.Fragment,null),url:a?void 0:e.url,linkComponent:r.rU,imgURL:e.thumbnail_url,imgFallbackURL:"/static/assets/images/dashboard-card-fallback.svg",description:(0,d.t)("Modified %s",e.changed_on_delta_humanized),coverLeft:(0,Z.tZ)(g.Z,{users:e.owners||[]}),actions:(0,Z.tZ)(h.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},x&&(0,Z.tZ)(v.Z,{itemId:e.id,saveFaveStar:E,isStarred:k}),(0,Z.tZ)(u.Gj,{overlay:F},(0,Z.tZ)(m.Z.MoreVert,{iconColor:R.colors.grayscale.base})))}))}},12:(e,t,a)=>{"use strict";var n,i;a.d(t,{s:()=>n,J:()=>i}),function(e){e.FAVORITE="Favorite",e.MINE="Mine",e.EXAMPLES="Examples"}(n||(n={})),function(e){e.id="id",e.changed_on="changed_on",e.database="database",e.database_name="database.database_name",e.schema="schema",e.sql="sql",e.executed_sql="exceuted_sql",e.sql_tables="sql_tables",e.status="status",e.tab_name="tab_name",e.user="user",e.user_first_name="user.first_name",e.start_time="start_time",e.end_time="end_time",e.rows="rows",e.tmp_table_name="tmp_table_name",e.tracking_url="tracking_url"}(i||(i={}))},20755:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(23279),i=a.n(n),r=a(67294),o=a(5977),d=a(73727),l=a(51995),s=a(94184),c=a.n(s),u=a(4715),b=a(83862),f=a(35932),h=a(70163),m=a(11965);const p=l.iK.div`
  margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  .header {
    font-weight: ${({theme:e})=>e.typography.weights.bold};
    margin-right: ${({theme:e})=>3*e.gridUnit}px;
    text-align: left;
    font-size: 18px;
    padding: ${({theme:e})=>3*e.gridUnit}px;
    display: inline-block;
    line-height: ${({theme:e})=>9*e.gridUnit}px;
  }
  .nav-right {
    display: flex;
    align-items: center;
    padding: ${({theme:e})=>3.5*e.gridUnit}px 0;
    margin-right: ${({theme:e})=>3*e.gridUnit}px;
    float: right;
    position: absolute;
    right: 0;
    ul.ant-menu-root {
      padding: 0px;
    }
    li[role='menuitem'] {
      border: 0;
      border-bottom: none;
      &:hover {
        border-bottom: transparent;
      }
    }
  }
  .nav-right-collapse {
    display: flex;
    align-items: center;
    padding: 14px 0;
    margin-right: 0;
    float: left;
    padding-left: 10px;
  }
  .menu {
    background-color: white;
    .ant-menu-horizontal {
      line-height: inherit;
      .ant-menu-item {
        border-bottom: none;
        &:hover {
          border-bottom: none;
          text-decoration: none;
        }
      }
    }
    .ant-menu {
      padding: ${({theme:e})=>4*e.gridUnit}px 0px;
    }
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0 ${({theme:e})=>e.gridUnit+1}px;
  }

  .menu .ant-menu-item {
    li {
      a,
      div {
        font-size: ${({theme:e})=>e.typography.sizes.s}px;
        color: ${({theme:e})=>e.colors.secondary.dark1};

        a {
          margin: 0;
          padding: ${({theme:e})=>4*e.gridUnit}px;
          line-height: ${({theme:e})=>5*e.gridUnit}px;
        }
      }

      &.no-router a {
        padding: ${({theme:e})=>2*e.gridUnit}px
          ${({theme:e})=>4*e.gridUnit}px;
      }
    }
    li.active > a,
    li.active > div,
    li > a:hover,
    li > a:focus,
    li > div:hover {
      background: ${({theme:e})=>e.colors.secondary.light4};
      border-bottom: none;
      border-radius: ${({theme:e})=>e.borderRadius}px;
      margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
      text-decoration: none;
    }
  }

  .btn-link {
    padding: 10px 0;
  }
  .ant-menu-horizontal {
    border: none;
  }
  @media (max-width: 767px) {
    .header,
    .nav-right {
      position: relative;
      margin-left: ${({theme:e})=>2*e.gridUnit}px;
    }
  }
  .ant-menu-submenu {
    span[role='img'] {
      position: absolute;
      right: ${({theme:e})=>-e.gridUnit-2}px;
      top: ${({theme:e})=>e.gridUnit+1}px !important;
    }
  }
  .dropdown-menu-links > div.ant-menu-submenu-title,
  .ant-menu-submenu-open.ant-menu-submenu-active > div.ant-menu-submenu-title {
    color: ${({theme:e})=>e.colors.primary.dark1};
  }
`,{SubMenu:g}=b.$,v=e=>{var t,a,n;const[l,s]=(0,r.useState)("horizontal"),[v,Z]=(0,r.useState)("nav-right");let y=!0;try{(0,o.k6)()}catch(e){y=!1}return(0,r.useEffect)((()=>{function t(){window.innerWidth<=767?s("inline"):s("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?Z("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&Z("nav-right-collapse")}t();const a=i()(t,10);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}),[e.buttons]),(0,m.tZ)(p,null,(0,m.tZ)(u.X2,{className:"menu",role:"navigation"},e.name&&(0,m.tZ)("div",{className:"header"},e.name),(0,m.tZ)(b.v,{mode:l,style:{backgroundColor:"transparent"}},null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||y)&&t.usesRouter?(0,m.tZ)(b.v.Item,{key:t.label},(0,m.tZ)("li",{role:"tab",className:t.name===e.activeChild?"active":""},(0,m.tZ)("div",null,(0,m.tZ)(d.rU,{to:t.url||""},t.label)))):(0,m.tZ)(b.v.Item,{key:t.label},(0,m.tZ)("li",{className:c()("no-router",{active:t.name===e.activeChild}),role:"tab"},(0,m.tZ)("a",{href:t.url,onClick:t.onClick},t.label)))))),(0,m.tZ)("div",{className:v},(0,m.tZ)(b.v,{mode:"horizontal",triggerSubMenuAction:"click"},null==(a=e.dropDownLinks)?void 0:a.map(((e,t)=>{var a;return(0,m.tZ)(g,{key:t,title:e.label,icon:(0,m.tZ)(h.Z.TriangleDown,null),popupOffset:[10,20],className:"dropdown-menu-links"},null==(a=e.childs)?void 0:a.map((e=>"object"==typeof e?(0,m.tZ)(b.$.Item,{key:e.label},(0,m.tZ)("a",{href:e.url},e.label)):null)))}))),null==(n=e.buttons)?void 0:n.map(((e,t)=>(0,m.tZ)(f.Z,{key:t,buttonStyle:e.buttonStyle,onClick:e.onClick},e.name))))),e.children)}},71644:(e,t,a)=>{"use strict";var n=a(67294),i=a(90731),r=a(5872),o=a.n(r),d=a(73727),l=a(5977),s=a(31405),c=a(91877),u=a(57902),b=a(38703),f=a(56052),h=a(85156),m=a(14890),p=a(37703),g=a(51995),v=a(11965),Z=a(94184),y=a.n(Z),_=a(13423),x=a(70163),w=a(1927);const C=g.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`,S=e=>v.iv`
  min-width: ${5*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
`;function k({toast:e,onCloseToast:t}){const a=(0,n.useRef)(),[i,r]=(0,n.useState)(!1),o=()=>{r(!0)},d=(0,n.useCallback)((()=>{a.current&&clearTimeout(a.current),r((()=>(setTimeout((()=>{t(e.id)}),150),!1)))}),[t,e.id]);(0,n.useEffect)((()=>(setTimeout(o),e.duration>0&&(a.current=setTimeout(d,e.duration)),()=>{a.current&&clearTimeout(a.current)})),[d,e.duration]);let l="toast--success",s=(0,v.tZ)(x.Z.CircleCheckSolid,{css:e=>S(e)});return e.toastType===w.p.WARNING?(s=(0,v.tZ)(x.Z.WarningSolid,{css:S}),l="toast--warning"):e.toastType===w.p.DANGER?(s=(0,v.tZ)(x.Z.ErrorSolid,{css:S}),l="toast--danger"):e.toastType===w.p.INFO&&(s=(0,v.tZ)(x.Z.InfoSolid,{css:S}),l="toast--info"),(0,v.tZ)(C,{className:y()("alert","toast",i&&"toast--visible",l),role:"alert"},s,(0,v.tZ)(_.ZP,{content:e.text}),(0,v.tZ)("i",{className:"fa fa-close pull-right pointer",role:"button",tabIndex:0,onClick:d,"aria-label":"Close"}))}const E=g.iK.div`
  max-width: 600px;
  position: fixed;
  ${({position:e})=>"bottom"===e?"bottom":"top"}: 0px;
  right: 0px;
  margin-right: 50px;
  margin-bottom: 50px;
  z-index: ${({theme:e})=>e.zIndex.max};
  word-break: break-word;

  .toast {
    background: ${({theme:e})=>e.colors.grayscale.dark1};
    border-radius: ${({theme:e})=>e.borderRadius};
    box-shadow: 0 2px 4px 0
      fade(
        ${({theme:e})=>e.colors.grayscale.dark2},
        ${({theme:e})=>e.opacity.mediumLight}
      );
    color: ${({theme:e})=>e.colors.grayscale.light5};
    opacity: 0;
    position: relative;
    transform: translateY(-100%);
    white-space: pre-line;
    will-change: transform, opacity;
    transition: transform ${({theme:e})=>e.transitionTiming}s,
      opacity ${({theme:e})=>e.transitionTiming}s;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
    }
  }

  .toast > button {
    color: ${({theme:e})=>e.colors.grayscale.light5};
    opacity: 1;
  }

  .toast--visible {
    opacity: 1;
    transform: translateY(0);
  }
`;var T=a(72570);const $=(0,p.$j)((({messageToasts:e})=>({toasts:e})),(e=>(0,m.DE)({removeToast:T.RS},e)))((function({toasts:e,removeToast:t,position:a="bottom"}){return(0,v.tZ)(n.Fragment,null,e.length>0&&(0,v.tZ)(E,{id:"toast-presenter",position:a},e.map((e=>(0,v.tZ)(k,{key:e.id,toast:e,onCloseToast:t})))))}));var I,N=a(65286),A=a(93185),D=a(43063),R=a.n(D),F=a(61988),U=a(43700),L=a(61337),z=a(55467),P=a(14114),M=a(40768),O=a(4715),q=a(30381),j=a.n(q),V=a(20755),B=a(35932);!function(e){e.Charts="CHARTS",e.Dashboards="DASHBOARDS",e.Recents="RECENTS",e.SavedQueries="SAVED_QUERIES"}(I||(I={}));const K={[I.Charts]:(0,F.t)("charts"),[I.Dashboards]:(0,F.t)("dashboards"),[I.Recents]:(0,F.t)("recents"),[I.SavedQueries]:(0,F.t)("saved queries")},H=g.iK.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`,Q=g.iK.div`
  Button {
    svg {
      color: ${({theme:e})=>e.colors.grayscale.light5};
    }
  }
`;function X({tableName:e,tab:t}){const a={[I.Charts]:"/chart/add",[I.Dashboards]:"/dashboard/new",[I.SavedQueries]:"/superset/sqllab?new=true"},n={[I.Charts]:"/chart/list",[I.Dashboards]:"/dashboard/list/",[I.SavedQueries]:"/savedqueryview/list/"},i={[I.Charts]:"empty-charts.svg",[I.Dashboards]:"empty-dashboard.svg",[I.Recents]:"union.svg",[I.SavedQueries]:"empty-queries.svg"},r=(0,v.tZ)("span",null,(0,F.t)("No %(tableName)s yet",{tableName:K[e]})),o=(0,v.tZ)("span",{className:"no-recents"},"Viewed"===t?(0,F.t)("Recently viewed charts, dashboards, and saved queries will appear here"):"Created"===t?(0,F.t)("Recently created charts, dashboards, and saved queries will appear here"):"Examples"===t?(0,F.t)("Example %(tableName)s will appear here",{tableName:e.toLowerCase()}):"Edited"===t?(0,F.t)("Recently edited charts, dashboards, and saved queries will appear here"):null);return"Mine"===t||"RECENTS"===e||"Examples"===t?(0,v.tZ)(H,null,(0,v.tZ)(O.HY,{image:`/static/assets/images/${i[e]}`,description:"RECENTS"===e||"Examples"===t?o:r},"RECENTS"!==e&&(0,v.tZ)(Q,null,(0,v.tZ)(B.Z,{buttonStyle:"primary",onClick:()=>{window.location.href=a[e]}},(0,v.tZ)("i",{className:"fa fa-plus"}),"SAVED_QUERIES"===e?(0,F.t)("SQL query"):(0,F.t)(`${e.split("").slice(0,e.length-1).join("")}\n                    `))))):(0,v.tZ)(H,null,(0,v.tZ)(O.HY,{image:"/static/assets/images/star-circle.svg",description:(0,v.tZ)("span",{className:"no-favorites"},(0,F.t)("You don't have any favorites yet!"))},(0,v.tZ)(B.Z,{buttonStyle:"primary",onClick:()=>{window.location.href=n[e]}},(0,F.t)("See all %(tableName)s",{tableName:"SAVED_QUERIES"===e?(0,F.t)("SQL Lab queries"):K[e]}))))}var Y;!function(e){e.EDITED="Edited",e.CREATED="Created",e.VIEWED="Viewed",e.EXAMPLE="Examples"}(Y||(Y={}));const W=g.iK.div`
  .recentCards {
    max-height: none;
    grid-gap: ${({theme:e})=>4*e.gridUnit+"px"};
  }
`,G=(0,F.t)("[Untitled]"),J=(0,F.t)("Unknown"),ee=e=>"dashboard_title"in e?e.dashboard_title||G:"slice_name"in e?e.slice_name||G:"label"in e?e.label||G:e.item_title||G,te=e=>{if("sql"in e)return(0,v.tZ)(x.Z.Sql,null);const t="item_url"in e?e.item_url:e.url;return null!=t&&t.includes("dashboard")?(0,v.tZ)(x.Z.NavDashboard,null):null!=t&&t.includes("explore")?(0,v.tZ)(x.Z.NavCharts,null):null};function ae({activeChild:e,setActiveChild:t,activityData:a,user:i,loadedCount:r}){var o;const[d,l]=(0,n.useState)(),[s,c]=(0,n.useState)(!1);(0,n.useEffect)((()=>{"Edited"===e&&(c(!0),c(!0),(0,M.Ld)(i.userId).then((e=>{l([...e.editedChart,...e.editedDash]),c(!1)})))}),[e]);const u=[{name:"Edited",label:(0,F.t)("Edited"),onClick:()=>{t("Edited"),(0,L.LS)(L.dR.homepage_activity_filter,Y.EDITED)}},{name:"Created",label:(0,F.t)("Created"),onClick:()=>{t("Created"),(0,L.LS)(L.dR.homepage_activity_filter,Y.CREATED)}}];return null!=a&&a.Viewed&&u.unshift({name:"Viewed",label:(0,F.t)("Viewed"),onClick:()=>{t("Viewed"),(0,L.LS)(L.dR.homepage_activity_filter,Y.VIEWED)}}),s&&!d||r<3?(0,v.tZ)(Ee,null):(0,v.tZ)(W,null,(0,v.tZ)(V.Z,{activeChild:e,tabs:u}),(null==(o=a[e])?void 0:o.length)>0||"Edited"===e&&d&&d.length>0?(0,v.tZ)(M._L,{className:"recentCards"},("Edited"!==e?a[e]:d).map((e=>{const t=(e=>"sql"in e?`/superset/sqllab?savedQueryId=${e.id}`:"url"in e?e.url:e.item_url)(e),a=(e=>{if("time"in e)return(0,F.t)("Viewed %s",j()(e.time).fromNow());let t;return"changed_on"in e&&(t=e.changed_on),"changed_on_utc"in e&&(t=e.changed_on_utc),(0,F.t)("Modified %s",null==t?J:j()(t).fromNow())})(e);return(0,v.tZ)(M.ZB,{onClick:()=>{window.location.href=t},key:t},(0,v.tZ)(z.Z,{cover:(0,v.tZ)(n.Fragment,null),url:t,title:ee(e),description:a,avatar:te(e),actions:null}))}))):(0,v.tZ)(X,{tableName:I.Recents,tab:e}))}var ne=a(63105),ie=a.n(ne),re=a(34858),oe=a(12),de=a(83673),le=a(34024),se=a(32228);const ce=(0,P.ZP)((function({user:e,addDangerToast:t,addSuccessToast:a,mine:i,showThumbnails:r,examples:o}){const d=(0,l.k6)(),s=(0,L.rV)(L.dR.homepage_chart_filter,oe.s.EXAMPLES),c=ie()(o,(e=>"viz_type"in e)),{state:{loading:f,resourceCollection:h,bulkSelectEnabled:m},setResourceCollection:p,hasPerm:g,refreshData:Z,fetchData:y}=(0,re.Yi)("chart",(0,F.t)("chart"),t,!0,"Mine"===s?i:c,[],!1),_=(0,n.useMemo)((()=>h.map((e=>e.id))),[h]),[x,w]=(0,re.NE)("chart",_,t),{sliceCurrentlyEditing:C,openChartEditModal:S,handleChartUpdated:k,closeChartEditModal:E}=(0,re.fF)(p,h),[T,$]=(0,n.useState)(s),[N,A]=(0,n.useState)(!1),[D,R]=(0,n.useState)(!1);(0,n.useEffect)((()=>{(D||"Favorite"===T)&&P(T),R(!0)}),[T]);const U=e=>{const t=e.map((({id:e})=>e));(0,se.Z)("chart",t,(()=>{A(!1)})),A(!0)},z=t=>{const a=[];return"Mine"===t?a.push({id:"owners",operator:"rel_m_m",value:`${null==e?void 0:e.userId}`}):"Favorite"===t?a.push({id:"id",operator:"chart_is_favorite",value:!0}):"Examples"===t&&a.push({id:"created_by",operator:"rel_o_m",value:0}),a},P=e=>y({pageIndex:0,pageSize:M.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:z(e)}),O=[{name:"Favorite",label:(0,F.t)("Favorite"),onClick:()=>{$(oe.s.FAVORITE),(0,L.LS)(L.dR.homepage_chart_filter,oe.s.FAVORITE)}},{name:"Mine",label:(0,F.t)("Mine"),onClick:()=>{$(oe.s.MINE),(0,L.LS)(L.dR.homepage_chart_filter,oe.s.MINE)}}];return o&&O.push({name:"Examples",label:(0,F.t)("Examples"),onClick:()=>{$(oe.s.EXAMPLES),(0,L.LS)(L.dR.homepage_chart_filter,oe.s.EXAMPLES)}}),f?(0,v.tZ)(Ee,{cover:r}):(0,v.tZ)(u.Z,null,C&&(0,v.tZ)(de.Z,{onHide:E,onSave:k,show:!0,slice:C}),(0,v.tZ)(V.Z,{activeChild:T,tabs:O,buttons:[{name:(0,v.tZ)(n.Fragment,null,(0,v.tZ)("i",{className:"fa fa-plus"}),(0,F.t)("Chart")),buttonStyle:"tertiary",onClick:()=>{window.location.assign("/chart/add")}},{name:(0,F.t)("View All »"),buttonStyle:"link",onClick:()=>{const e="Favorite"===T?`/chart/list/?filters=(favorite:(label:${(0,F.t)("Yes")},value:!t))`:"/chart/list/";d.push(e)}}]}),null!=h&&h.length?(0,v.tZ)(M._L,{showThumbnails:r},h.map((n=>(0,v.tZ)(le.Z,{key:`${n.id}`,openChartEditModal:S,chartFilter:T,chart:n,userId:null==e?void 0:e.userId,hasPerm:g,showThumbnails:r,bulkSelectEnabled:m,refreshData:Z,addDangerToast:t,addSuccessToast:a,favoriteStatus:w[n.id],saveFavoriteStatus:x,handleBulkChartExport:U})))):(0,v.tZ)(X,{tableName:I.Charts,tab:T}),N&&(0,v.tZ)(b.Z,null))}));var ue=a(31069),be=a(42110),fe=a(33743),he=a(120),me=a(83862),pe=a(17198);be.Z.registerLanguage("sql",fe.Z);const ge=g.iK.div`
  cursor: pointer;
  a {
    text-decoration: none;
  }
  .ant-card-cover {
    border-bottom: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    & > div {
      height: 171px;
    }
  }
  .gradient-container > div {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${({theme:e})=>e.colors.secondary.light3};
    display: inline-block;
    width: 100%;
    height: 179px;
    background-repeat: no-repeat;
    vertical-align: middle;
  }
`,ve=g.iK.div`
  svg {
    margin-left: ${({theme:e})=>10*e.gridUnit}px;
  }
  .query-title {
    padding: ${({theme:e})=>2*e.gridUnit+2}px;
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
  }
`,Ze=g.iK.div`
  pre {
    height: ${({theme:e})=>40*e.gridUnit}px;
    border: none !important;
    background-color: ${({theme:e})=>e.colors.grayscale.light5} !important;
    overflow: hidden;
    padding: ${({theme:e})=>4*e.gridUnit}px !important;
  }
`,ye=(0,P.ZP)((({user:e,addDangerToast:t,addSuccessToast:a,mine:i,showThumbnails:r,featureFlag:o})=>{const{state:{loading:d,resourceCollection:l},hasPerm:s,fetchData:c,refreshData:u}=(0,re.Yi)("saved_query",(0,F.t)("query"),t,!0,i,[],!1),[b,f]=(0,n.useState)("Mine"),[h,m]=(0,n.useState)(!1),[p,Z]=(0,n.useState)({}),[y,_]=(0,n.useState)(!0),w=s("can_edit"),C=s("can_delete"),S=(0,g.Fg)(),k=t=>{const a=[];return"Mine"===t?a.push({id:"created_by",operator:"rel_o_m",value:`${null==e?void 0:e.userId}`}):a.push({id:"id",operator:"saved_query_is_fav",value:!0}),a};return d?(0,v.tZ)(Ee,{cover:r}):(0,v.tZ)(n.Fragment,null,h&&(0,v.tZ)(pe.Z,{description:(0,F.t)("This action will permanently delete the saved query."),onConfirm:()=>{h&&(({id:n,label:i})=>{ue.Z.delete({endpoint:`/api/v1/saved_query/${n}`}).then((()=>{const t={filters:[{id:"created_by",operator:"rel_o_m",value:`${null==e?void 0:e.userId}`}],pageSize:M.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],pageIndex:0};u(y?t:void 0),_(!1),m(!1),a((0,F.t)("Deleted: %s",i))}),(0,M.v$)((e=>t((0,F.t)("There was an issue deleting %s: %s",i,e)))))})(p)},onHide:()=>{m(!1)},open:!0,title:(0,F.t)("Delete Query?")}),(0,v.tZ)(V.Z,{activeChild:b,tabs:[{name:"Mine",label:(0,F.t)("Mine"),onClick:()=>c({pageIndex:0,pageSize:M.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:k("Mine")}).then((()=>f("Mine")))}],buttons:[{name:(0,v.tZ)(n.Fragment,null,(0,v.tZ)("i",{className:"fa fa-plus"}),(0,F.t)("SQL Query")),buttonStyle:"tertiary",onClick:()=>{window.location.href="/superset/sqllab?new=true"}},{name:(0,F.t)("View All »"),buttonStyle:"link",onClick:()=>{window.location.href="/savedqueryview/list"}}]}),l.length>0?(0,v.tZ)(M._L,{showThumbnails:r},l.map((e=>{var i,d,l;return(0,v.tZ)(ge,{onClick:()=>{window.location.href=`/superset/sqllab?savedQueryId=${e.id}`},key:e.id},(0,v.tZ)(z.Z,{imgURL:"",url:`/superset/sqllab?savedQueryId=${e.id}`,title:e.label,imgFallbackURL:"/static/assets/images/empty-query.svg",description:(0,F.t)("Ran %s",e.changed_on_delta_humanized),cover:null!=e&&null!=(i=e.sql)&&i.length&&r&&o?(0,v.tZ)(Ze,null,(0,v.tZ)(be.Z,{language:"sql",lineProps:{style:{color:"black",wordBreak:"break-all",whiteSpace:"pre-wrap"}},style:he.Z,wrapLines:!0,lineNumberStyle:{display:"none"},showLineNumbers:!1},(0,M.IB)(e.sql,25))):!(r&&(null==e||null==(d=e.sql)||!d.length))&&(0,v.tZ)(n.Fragment,null),actions:(0,v.tZ)(ve,null,(0,v.tZ)(z.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},(0,v.tZ)(O.Gj,{overlay:(l=e,(0,v.tZ)(me.v,null,w&&(0,v.tZ)(me.v.Item,{onClick:()=>{window.location.href=`/superset/sqllab?savedQueryId=${l.id}`}},(0,F.t)("Edit")),(0,v.tZ)(me.v.Item,{onClick:()=>{l.id&&(0,re.bR)(l.id,t,a)}},(0,F.t)("Share")),C&&(0,v.tZ)(me.v.Item,{onClick:()=>{m(!0),Z(l)}},(0,F.t)("Delete"))))},(0,v.tZ)(x.Z.MoreVert,{iconColor:S.colors.grayscale.base}))))}))}))):(0,v.tZ)(X,{tableName:I.SavedQueries,tab:b}))}));var _e=a(20818),xe=a(99415);const we=(0,P.ZP)((function({user:e,addDangerToast:t,addSuccessToast:a,mine:i,showThumbnails:r,examples:o}){const d=(0,l.k6)(),s=(0,L.rV)(L.dR.homepage_dashboard_filter,oe.s.EXAMPLES),c=ie()(o,(e=>!("viz_type"in e))),{state:{loading:u,resourceCollection:f},setResourceCollection:h,hasPerm:m,refreshData:p,fetchData:g}=(0,re.Yi)("dashboard",(0,F.t)("dashboard"),t,!0,"Mine"===s?i:c,[],!1),Z=(0,n.useMemo)((()=>f.map((e=>e.id))),[f]),[y,_]=(0,re.NE)("dashboard",Z,t),[x,w]=(0,n.useState)(),[C,S]=(0,n.useState)(s),[k,E]=(0,n.useState)(!1),[T,$]=(0,n.useState)(!1);(0,n.useEffect)((()=>{(T||"Favorite"===C)&&R(C),$(!0)}),[C]);const N=e=>{const t=e.map((({id:e})=>e));(0,se.Z)("dashboard",t,(()=>{E(!1)})),E(!0)},A=t=>{const a=[];return"Mine"===t?a.push({id:"owners",operator:"rel_m_m",value:`${null==e?void 0:e.userId}`}):"Favorite"===t?a.push({id:"id",operator:"dashboard_is_favorite",value:!0}):"Examples"===t&&a.push({id:"created_by",operator:"rel_o_m",value:0}),a},D=[{name:"Favorite",label:(0,F.t)("Favorite"),onClick:()=>{S(oe.s.FAVORITE),(0,L.LS)(L.dR.homepage_dashboard_filter,oe.s.FAVORITE)}},{name:"Mine",label:(0,F.t)("Mine"),onClick:()=>{S(oe.s.MINE),(0,L.LS)(L.dR.homepage_dashboard_filter,oe.s.MINE)}}];o&&D.push({name:"Examples",label:(0,F.t)("Examples"),onClick:()=>{S(oe.s.EXAMPLES),(0,L.LS)(L.dR.homepage_dashboard_filter,oe.s.EXAMPLES)}});const R=e=>g({pageIndex:0,pageSize:M.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:A(e)});return u?(0,v.tZ)(Ee,{cover:r}):(0,v.tZ)(n.Fragment,null,(0,v.tZ)(V.Z,{activeChild:C,tabs:D,buttons:[{name:(0,v.tZ)(n.Fragment,null,(0,v.tZ)("i",{className:"fa fa-plus"}),(0,F.t)("Dashboard")),buttonStyle:"tertiary",onClick:()=>{window.location.assign("/dashboard/new")}},{name:(0,F.t)("View All »"),buttonStyle:"link",onClick:()=>{const e="Favorite"===C?`/dashboard/list/?filters=(favorite:(label:${(0,F.t)("Yes")},value:!t))`:"/dashboard/list/";d.push(e)}}]}),x&&(0,v.tZ)(_e.Z,{dashboardId:null==x?void 0:x.id,show:!0,onHide:()=>w(void 0),onSubmit:e=>ue.Z.get({endpoint:`/api/v1/dashboard/${e.id}`}).then((({json:e={}})=>{h(f.map((t=>t.id===e.id?e.result:t)))}),(0,M.v$)((e=>t((0,F.t)("An error occurred while fetching dashboards: %s",e)))))}),f.length>0&&(0,v.tZ)(M._L,{showThumbnails:r},f.map((n=>(0,v.tZ)(xe.Z,{key:n.id,dashboard:n,hasPerm:m,bulkSelectEnabled:!1,showThumbnails:r,dashboardFilter:C,refreshData:p,addDangerToast:t,addSuccessToast:a,userId:null==e?void 0:e.userId,loading:u,openDashboardEditModal:e=>w(e),saveFavoriteStatus:y,favoriteStatus:_[n.id],handleBulkDashboardExport:N})))),0===f.length&&(0,v.tZ)(X,{tableName:I.Dashboards,tab:C}),k&&(0,v.tZ)(b.Z,null))})),Ce=["2","3"],Se=g.iK.div`
  background-color: ${({theme:e})=>e.colors.grayscale.light4};
  .ant-row.menu {
    margin-top: -15px;
    background-color: ${({theme:e})=>e.colors.grayscale.light4};
    &:after {
      content: '';
      display: block;
      border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
      margin: 0px ${({theme:e})=>6*e.gridUnit}px;
      position: relative;
      width: 100%;
      ${M.mq[1]} {
        margin-top: 5px;
        margin: 0px 2px;
      }
    }
    .ant-menu.ant-menu-light.ant-menu-root.ant-menu-horizontal {
      padding-left: ${({theme:e})=>8*e.gridUnit}px;
    }
    button {
      padding: 3px 21px;
    }
  }
  .ant-card-meta-description {
    margin-top: ${({theme:e})=>e.gridUnit}px;
  }
  .ant-card.ant-card-bordered {
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  }
  .ant-collapse-item .ant-collapse-content {
    margin-bottom: ${({theme:e})=>-6*e.gridUnit}px;
  }
  div.ant-collapse-item:last-child.ant-collapse-item-active
    .ant-collapse-header {
    padding-bottom: ${({theme:e})=>3*e.gridUnit}px;
  }
  div.ant-collapse-item:last-child .ant-collapse-header {
    padding-bottom: ${({theme:e})=>9*e.gridUnit}px;
  }
  .loading-cards {
    margin-top: ${({theme:e})=>8*e.gridUnit}px;
    .ant-card-cover > div {
      height: 168px;
    }
  }
`,ke=g.iK.div`
  height: 50px;
  background-color: white;
  .navbar-brand {
    margin-left: ${({theme:e})=>2*e.gridUnit}px;
    font-weight: ${({theme:e})=>e.typography.weights.bold};
  }
  .switch {
    float: right;
    margin: ${({theme:e})=>5*e.gridUnit}px;
    display: flex;
    flex-direction: row;
    span {
      display: block;
      margin: ${({theme:e})=>1*e.gridUnit}px;
      line-height: 1;
    }
  }
`,Ee=({cover:e})=>(0,v.tZ)(M._L,{showThumbnails:e,className:"loading-cards"},[...new Array(M.iv)].map(((t,a)=>(0,v.tZ)(z.Z,{key:a,cover:!e&&(0,v.tZ)(n.Fragment,null),description:"",loading:!0})))),Te=(0,P.ZP)((function({user:e,addDangerToast:t}){const a=e.userId.toString(),i=`/superset/recent_activity/${e.userId}/?limit=6`,[r,o]=(0,n.useState)("Loading"),d=(0,L.OH)(a,null);let l=!1;(0,c.cr)(A.T.THUMBNAILS)&&(l=void 0===(null==d?void 0:d.thumbnails)||(null==d?void 0:d.thumbnails));const[s,u]=(0,n.useState)(l),[b,f]=(0,n.useState)(null),[h,m]=(0,n.useState)(null),[p,g]=(0,n.useState)(null),[Z,y]=(0,n.useState)(null),[_,x]=(0,n.useState)(0),w=(0,L.rV)(L.dR.homepage_collapse_state,[]),[C,S]=(0,n.useState)(w);(0,n.useEffect)((()=>{const n=(0,L.rV)(L.dR.homepage_activity_filter,null);S(w.length>0?w:Ce),(0,M.Hn)(e.userId,i,t).then((e=>{const t={};if(t.Examples=e.examples,e.viewed){const a=R()(e.viewed,["item_url",null]).map((e=>e));t.Viewed=a,!n&&t.Viewed?o("Viewed"):n||t.Viewed?o(n||"Created"):o("Created")}else o(n||"Created");f((e=>({...e,...t})))})).catch((0,M.v$)((e=>{f((e=>({...e,Viewed:[]}))),t((0,F.t)("There was an issue fetching your recent activity: %s",e))})));const r=[{col:"created_by",opr:"rel_o_m",value:`${a}`}];(0,M.B1)(a,"dashboard").then((e=>{y(e),x((e=>e+1))})).catch((e=>{y([]),x((e=>e+1)),t((0,F.t)("There was an issue fetching your dashboards: %s",e))})),(0,M.B1)(a,"chart").then((e=>{m(e),x((e=>e+1))})).catch((e=>{m([]),x((e=>e+1)),t((0,F.t)("There was an issue fetching your chart: %s",e))})),(0,M.B1)(a,"saved_query",r).then((e=>{g(e),x((e=>e+1))})).catch((e=>{g([]),x((e=>e+1)),t((0,F.t)("There was an issues fetching your saved queries: %s",e))}))}),[]),(0,n.useEffect)((()=>{!w&&null!=p&&p.length&&S((e=>[...e,"4"])),f((e=>({...e,Created:[...(null==h?void 0:h.slice(0,3))||[],...(null==Z?void 0:Z.slice(0,3))||[],...(null==p?void 0:p.slice(0,3))||[]]})))}),[h,p,Z]),(0,n.useEffect)((()=>{var e;!w&&null!=b&&null!=(e=b.Viewed)&&e.length&&S((e=>["1",...e]))}),[b]);const k=!(null!=b&&b.Examples||null!=b&&b.Viewed);return(0,v.tZ)(Se,null,(0,v.tZ)(ke,null,(0,v.tZ)("span",{className:"navbar-brand"},"Home"),(0,c.cr)(A.T.THUMBNAILS)?(0,v.tZ)("div",{className:"switch"},(0,v.tZ)(O.KU,{checked:s,onChange:()=>{u(!s),(0,L.I_)(a,{thumbnails:!s})}}),(0,v.tZ)("span",null,"Thumbnails")):null),(0,v.tZ)(U.Z,{activeKey:C,onChange:e=>{S(e),(0,L.LS)(L.dR.homepage_collapse_state,e)},ghost:!0,bigger:!0},(0,v.tZ)(U.Z.Panel,{header:(0,F.t)("Recents"),key:"1"},b&&(b.Viewed||b.Examples||b.Created)&&"Loading"!==r?(0,v.tZ)(ae,{user:e,activeChild:r,setActiveChild:o,activityData:b,loadedCount:_}):(0,v.tZ)(Ee,null)),(0,v.tZ)(U.Z.Panel,{header:(0,F.t)("Dashboards"),key:"2"},!Z||k?(0,v.tZ)(Ee,{cover:s}):(0,v.tZ)(we,{user:e,mine:Z,showThumbnails:s,examples:null==b?void 0:b.Examples})),(0,v.tZ)(U.Z.Panel,{header:(0,F.t)("Charts"),key:"3"},!h||k?(0,v.tZ)(Ee,{cover:s}):(0,v.tZ)(ce,{showThumbnails:s,user:e,mine:h,examples:null==b?void 0:b.Examples})),(0,v.tZ)(U.Z.Panel,{header:(0,F.t)("Saved queries"),key:"4"},p?(0,v.tZ)(ye,{showThumbnails:s,user:e,mine:p,featureFlag:(0,c.cr)(A.T.THUMBNAILS)}):(0,v.tZ)(Ee,{cover:s}))))})),$e=(0,n.lazy)((()=>Promise.all([a.e(8289),a.e(4787)]).then(a.bind(a,28999)))),Ie=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(876),a.e(8289),a.e(9502)]).then(a.bind(a,63082)))),Ne=(0,n.lazy)((()=>Promise.all([a.e(8289),a.e(1611)]).then(a.bind(a,35276)))),Ae=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(504),a.e(2087),a.e(3212),a.e(8289),a.e(5289),a.e(5175),a.e(1629),a.e(665)]).then(a.bind(a,13434)))),De=(0,n.lazy)((()=>Promise.all([a.e(8289),a.e(9452)]).then(a.bind(a,69053)))),Re=(0,n.lazy)((()=>Promise.all([a.e(193),a.e(8289),a.e(8774)]).then(a.bind(a,23767)))),Fe=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(504),a.e(2087),a.e(3212),a.e(5289),a.e(5175),a.e(1629),a.e(7936),a.e(468)]).then(a.bind(a,82343)))),Ue=(0,n.lazy)((()=>Promise.all([a.e(8289),a.e(4502)]).then(a.bind(a,30075)))),Le=(0,n.lazy)((()=>Promise.all([a.e(8289),a.e(5656)]).then(a.bind(a,97894)))),ze=(0,n.lazy)((()=>Promise.all([a.e(8289),a.e(9137)]).then(a.bind(a,25163)))),Pe=(0,n.lazy)((()=>Promise.all([a.e(8289),a.e(4173),a.e(7633)]).then(a.bind(a,82842)))),Me=[{path:"/superset/welcome/",Component:Te},{path:"/dashboard/list/",Component:Re},{path:"/superset/dashboard/:idOrSlug/",Component:Fe},{path:"/chart/list/",Component:Ae},{path:"/tablemodelview/list/",Component:Le},{path:"/databaseview/list/",Component:Ue},{path:"/savedqueryview/list/",Component:(0,n.lazy)((()=>Promise.all([a.e(8289),a.e(4173),a.e(9173)]).then(a.bind(a,49588))))},{path:"/csstemplatemodelview/list/",Component:De},{path:"/annotationlayermodelview/list/",Component:$e},{path:"/annotationmodelview/:annotationLayerId/annotation/",Component:Ne},{path:"/superset/sqllab/history/",Component:Pe},{path:"/alert/list/",Component:Ie},{path:"/report/list/",Component:Ie,props:{isReportEnabled:!0}},{path:"/alert/:alertId/log/",Component:ze},{path:"/report/:alertId/log/",Component:ze,props:{isReportEnabled:!0}}],Oe=Me.map((e=>e.path)).reduce(((e,t)=>({...e,[t]:!0})),{});function qe(e){if(!(0,c.cr)(A.T.ENABLE_REACT_CRUD_VIEWS))return!1;if(e){const t=e.split(/[?#]/)[0];return!!Oe[t]}return!1}var je=a(3741),Ve=a(68135),Be=a(35755),Ke=a(38626),He=a(57865),Qe=a(89474),Xe=a(33626);const Ye={info:"addInfoToast",alert:"addDangerToast",danger:"addDangerToast",warning:"addWarningToast",success:"addSuccessToast"};function We({children:e,messages:t}){const a=(0,P.e1)();return(0,Xe.J)((()=>{t.forEach((e=>{const[t,n]=e,i=a[Ye[t]];i&&i(n)}))})),e}var Ge=a(29147),Je=a(14278);const et={...h.b.common},tt=({children:e})=>(0,v.tZ)(Ve.a,{theme:h.r},(0,v.tZ)(p.zt,{store:Qe.h},(0,v.tZ)(Ke.W,{backend:He.PD},(0,v.tZ)(We,{messages:et.flash_messages},(0,v.tZ)(Ge.DG,null,(0,v.tZ)(Je.EM,null,(0,v.tZ)(Be.Fz,{ReactRouterRoute:l.AW,stringifyOptions:{encode:!1}},e)))))));(0,N.Z)();const at={...h.b.user},nt={...h.b.common.menu_data};let it;(0,c.fG)(h.b.common.feature_flags);const rt=()=>{const e=(0,l.TH)();return(0,n.useEffect)((()=>{it&&it!==e.pathname&&je.Yd.markTimeOrigin(),it=e.pathname}),[e.pathname]),(0,v.tZ)(n.Fragment,null)};i.render((0,v.tZ)((()=>(0,v.tZ)(d.VK,null,(0,v.tZ)(rt,null),(0,v.tZ)(tt,null,(0,v.tZ)(s.n,null),(0,v.tZ)(f.Z,{data:nt,isFrontendRoute:qe}),(0,v.tZ)(l.rs,null,Me.map((({path:e,Component:t,props:a={},Fallback:i=b.Z})=>(0,v.tZ)(l.AW,{path:e,key:e},(0,v.tZ)(n.Suspense,{fallback:(0,v.tZ)(i,null)},(0,v.tZ)(u.Z,null,(0,v.tZ)(t,o()({user:at},a)))))))),(0,v.tZ)($,null)))),null),document.getElementById("app"))}},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={id:e,loaded:!1,exports:{}};return l[e].call(a.exports,a,a.exports,c),a.loaded=!0,a.exports}c.m=l,c.amdD=function(){throw new Error("define cannot be used indirect")},c.amdO={},e=[],c.O=(t,a,n,i)=>{if(!a){var r=1/0;for(s=0;s<e.length;s++){for(var[a,n,i]=e[s],o=!0,d=0;d<a.length;d++)(!1&i||r>=i)&&Object.keys(c.O).every((e=>c.O[e](a[d])))?a.splice(d--,1):(o=!1,i<r&&(r=i));if(o){e.splice(s--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[a,n,i]},c.H={},c.G=e=>{Object.keys(c.H).map((t=>{c.H[t](e)}))},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var i=Object.create(null);c.r(i);var r={};t=t||[null,a({}),a([]),a(a)];for(var o=2&n&&e;"object"==typeof o&&!~t.indexOf(o);o=a(o))Object.getOwnPropertyNames(o).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,c.d(i,r),i},c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,a)=>(c.f[a](e,t),t)),[])),c.u=e=>2087===e?"2087.c57929e84c0056c13f96.entry.js":4593===e?"4593.27dc563de3a052312764.entry.js":5289===e?"5289.2c1efa5d69dc1984c4b7.entry.js":2671===e?"2671.1b219d63906984859ee6.entry.js":5175===e?"5175.81a291621c0a600b8c23.entry.js":876===e?"876.7e7648363c67248b070b.entry.js":504===e?"thumbnail.d421499737462f4dd598.entry.js":3212===e?"3212.c6d287e5e82d10b3e5a2.entry.js":1629===e?"1629.598f766817ec5ef30c7c.entry.js":2441===e?"2441.cf2d2dd99eca21c7005d.entry.js":1163===e?"1163.bb2e8b62ec4fe3b9f038.entry.js":4443===e?"4443.cd85e4c1eb5f21b624bd.entry.js":{57:"3eef258f00447ab2ba56",112:"881dd2510f19ed31e172",158:"488593bc94ab7caa58e0",177:"4b03c272091be7836683",183:"3f0101a74920ebdf5721",193:"71f8844c3013f9106381",215:"abe0f2a4a3f69594f00c",310:"77d6d4c65a4250a67f54",312:"ba5d653bdbc1bcc11798",326:"7f70cded66eafbdda58b",336:"f4bdd4f606d6d7592f7e",347:"5c3072822b5d502ad29e",349:"31b11e55a94ab02f4dfe",363:"210381fc4c2bbae6d099",380:"78b7b6dc715440560460",435:"86f766c5ac090386e4c0",440:"515662946aea2cdc4413",444:"92427de2a6588357f3ac",452:"621efcc56d307b3117f8",468:"62706772485ecdd1c92e",597:"20b87c137727ff9aaf87",600:"044558ce92babe1fa2db",616:"1dd1ec932ddf52008657",665:"ac02519df7aeff1df7c2",704:"ea4830f53c7e29617097",775:"8b50482b2ca8f4987b2a",826:"0e2f19bbb57b5a8aff83",895:"3b322472d16e1074d523",954:"60c8e389f3d779b44283",992:"d71578d87db841083c93",999:"ce189cf323818358d600",1020:"30f3cc0e7f5bb0d10cce",1075:"2572ea51a4adfc4ff9a4",1095:"b533f258ca6b1a324379",1130:"fa987d26b147137ea4a2",1174:"1033573182d374214540",1185:"63e33afadbeb6e51d8dd",1221:"b9936995d898af34e03c",1256:"035f322d4ce964f73de1",1258:"6381160c0229525565fd",1263:"cfe95e8e20298feb874e",1293:"14b3a7ee4cc17de5c441",1351:"2eb1a9ba1648eb7a8193",1382:"26f843bc495f9db4b73d",1398:"0c371615e0996614785c",1493:"0c0664678b66d74ba38f",1497:"f64aaa6444c4f5d90950",1568:"b2bb81324e29ed5bce61",1573:"c893b7f636a2ab701c65",1605:"d6a140bf5e3bef201212",1611:"03bcff5f87f337ffb502",1862:"7685c7131a3cb691a612",1877:"e33515e5bd6542b94f77",1899:"e1eb313fc03e90fa0d70",1948:"e8e04804b69cd452fcc9",2045:"6c8b8b7ef6c5b4a3af29",2079:"579cd7268aa39862c290",2089:"13db7039a066b543f45a",2105:"02df5ff9f97c181f9de4",2112:"1d1b4aaac5752d48445e",2229:"e0e73f4e2a2663a95bcd",2264:"5a90b87bf6c82cddd60f",2267:"58a5465f711b4c6b0f0c",2403:"ff967bce10197be4d6e0",2439:"92ff10820007284a3594",2646:"3dcaf7b2edc6b26550ba",2698:"e7b7a6eeb3966de7d0c1",2713:"a68c27cd1e12e64ffed4",2797:"5db241c8af5a71f0f30d",2983:"8afbd45ac5fc6d8b4b6d",3126:"e56804b562b6480ecb4f",3141:"494a0ca0a1bb39f625bd",3208:"2afd52e561441bd5beb3",3232:"da20088427ef3c3faab7",3240:"e7218edd46dedf7e1dda",3265:"1671e36958a7bf6f4cfc",3325:"9295baeedc623870f610",3496:"31f39cd73e24732b2940",3501:"83cbc49a823099eaea97",3544:"0fb4e4d961165cd76e18",3558:"e2f6e711a397fa768c21",3567:"d77d0432d12254aeeded",3606:"0b65905a659b39cd6909",3711:"0f0dbeed171be7ec0dee",3745:"03ab023678c0223d3569",3749:"9d45482bb7e08b4be181",3811:"dd0d3e1829322848d982",3871:"b94982d813b3a1874fe0",3955:"afc2c2846692569a5718",3985:"f293395f2172b1317b51",3986:"b65058c809eb4184aab8",4139:"285945130a72bfc46e1d",4173:"a9c03588da6793bd9e1b",4194:"c7e5be6437dbec1ac843",4266:"5b30930400b0988390e0",4273:"7ddbd55189a7899df93c",4458:"4309988c3c4fa37de107",4474:"b598fc6c061ecd9e6b0d",4502:"df1afed667e9de091abb",4572:"4bb1960b110d195d1658",4579:"16ca3c26d224ec2bea51",4625:"51252df40a568e9858e9",4662:"b32dd6447e5fae270c83",4667:"48c3843ffce6d71edad4",4732:"40416b4ab4e61de326ae",4757:"93d740911bd493adf140",4758:"139bfe0e5a3d55b967f5",4787:"be1d7e61810d24e2f0de",4790:"03d4f572c0e1a241ad52",4794:"604a01412367c61f28d1",4797:"ec310aed295dd6ac6d3e",4810:"c9e88f8bb26309aea9a3",4817:"c6d5f79ba80cd01dc865",4832:"ef14aea5648058059b49",4851:"ddfa921c0ae9aa3cc18b",4972:"c5b4433dc989f0536983",4981:"a591e398113e3a68af10",5094:"3a7f07e18dc58384f496",5181:"a22da851b4e7c7c43c9b",5201:"3ec18a3a291224aa9108",5215:"d96d8f48f1ace1189109",5224:"c47e9d538010833596c1",5226:"6827078f00442327de34",5249:"666b274dce41432ba44f",5264:"cc02ab1fc06e9d0ec1a4",5281:"bee09c165592668d3f89",5330:"599272faeb108b72e7f9",5335:"8aa0878ebf5d4ad6ce59",5350:"074a558227a6662abcb5",5359:"2b8c50de5d5c4b38aca0",5367:"21ae5e3e001039f857b3",5507:"f70d497b4e7632b6cc22",5580:"24915749e40e9d761a9c",5592:"e87311d9b096af643f33",5605:"9891a79fc24dfb63fce8",5641:"38809faee0024a508b21",5656:"85eb49224b1a51e01c8e",5707:"147d8ca4332836cd578d",5771:"1052f585ff4ae106bee8",5777:"554d568382eb31588d65",5802:"6cc12bb8302843f1d8f2",5816:"280673beea0b5f2fd1e1",5832:"0c735281dd62de64b370",5838:"dbba442e12c14d0a2a2e",5962:"72dc9794359fb77a60d2",5972:"19c7fc52abf01d211d54",5998:"1ee3b4651923335492d5",6061:"55bf4311a87981b3e733",6126:"91fa0738674c868ec8cc",6150:"dc68c567fc3c38729c6e",6167:"d6258818427262c45fa8",6172:"2d2ae3a66a111f064bb2",6207:"6910f3c4f0be2cfcd7f9",6254:"fb638befd53ef04822fc",6277:"a9e66da1f2654c0de813",6303:"ad52f9efd303183abf5e",6357:"aa1403959dc49316f7ff",6371:"83c9e45ceb3fbb5ac155",6377:"0cf4434a790b254858ca",6420:"c893ff2534f9ec304fc8",6447:"ae65f54f868cf08677c1",6486:"40ed2ed019bff637c535",6507:"45af87d3e964f08e8a6b",6668:"55647a5d1bc9e3c671d6",6682:"9becee958a13c31f4d51",6693:"a82d5d3b4ae002cead01",6758:"6fcf8c53e0a66334e5b5",6819:"e5d97b6c04bdd4635620",6839:"e28294d51df437cc6b53",6883:"520bd0ef8bbe299a89fd",6961:"a3622c9108edb8da5725",6977:"d2b3c9ce6ad0030f20e0",6981:"a398d4d79a48e5730885",7183:"5a6c8f84f8386ea3c3ed",7245:"a070413424484b817265",7249:"4073992e83966234ebec",7275:"7c3b58f1d8197ca0f5d1",7405:"108895750399ba59f40d",7460:"6a739700fefd3a4fbac2",7521:"17853734126a038a2576",7584:"f1a7f6c3be667fceb4de",7610:"fe88065240ff7a6e5504",7633:"e5fce347340e2526c547",7654:"1cc0055d2d390c30d171",7716:"26ccebd94ddb1fb178f8",7760:"df6139586bc8db9f4686",7803:"fa5606e48db6b49a7a94",7832:"741031b8b31f62237cd5",7850:"daed96c9f6d33ebc1f7c",7922:"5d8ea477355f17a5b790",7929:"278820dd70f564f26754",7936:"e6c7c65a6bb138efc982",7974:"7f06c47d9821e0634a48",7979:"1b0e35c8c94aabd6d46a",7984:"2fd74e80a2219d56b104",8041:"f11390e201c64075fd20",8146:"023f5a9d20413b6c62d8",8289:"36b4c99e42d78476eb2b",8312:"65a7d4d9a4760d7a5210",8349:"7aa90fbe18ad73a1b95a",8371:"5f4cc87324b00cef7cab",8398:"602f4d50559d187c1db8",8425:"d4ab2b8d82b74d62566e",8463:"44ea1565bba7d3f2c8f7",8464:"882d97a886a01f301481",8549:"888f46166d0046ea6196",8616:"dee76665d36ed3374636",8623:"553364f335b53f0d7c1e",8650:"67b7db5dd364cb97ebc5",8656:"72b579f454e73d8cf7ac",8682:"689daa7df9dd2c6fa4fd",8695:"01d9bc6edddbf539b1b7",8701:"dc881152d46536521640",8750:"dc92e0e945b83ec1e05f",8774:"00f4764a2513a56f6a98",8859:"a39f564a8bc48018f32c",8883:"a09378804d20733f3763",8924:"1622880c6fb5e4f1cfe3",8970:"cc02d84919fe9ecd9cde",9013:"a4b833b1258c7c9a94fd",9049:"39f4f9e42196fe741875",9052:"02f43b9abb68bfc5f39c",9109:"276f36aed8996da1df63",9137:"8217010751f484871d7c",9173:"dd17cfb8b4da73c3bd5e",9305:"34d5c67b5c79995f8a60",9322:"b26e9b6b0c073f28a102",9325:"1defe50332e08632f07f",9393:"442f478da05ba19070c4",9396:"516ebbc17daf1bbf9ee6",9452:"11dea3a267112ddd4a69",9483:"066597e323eb134fe27e",9502:"4e2c690e5198a024cc69",9510:"c5c3e89e58541aa7825b",9558:"d2eaa19757d176a93ab7",9767:"ad438ca70361b5e69126",9783:"9cfa5eed0483c15d9aba",9794:"c13a738c3f6b2ba76ca9",9811:"21a7c18f6923c4c737b9",9835:"2ae69e7cc7d63355340e",9857:"6a190c6f42d0d89b5004",9911:"8dd0d84bc48a0f50dd48"}[e]+".chunk.js",c.miniCssF=e=>(({452:"DashboardContainer",9502:"AlertList"}[e]||e)+"."+{380:"78b7b6dc715440560460",452:"621efcc56d307b3117f8",1862:"7685c7131a3cb691a612",1877:"e33515e5bd6542b94f77",2045:"6c8b8b7ef6c5b4a3af29",3501:"83cbc49a823099eaea97",3745:"03ab023678c0223d3569",3986:"b65058c809eb4184aab8",4194:"c7e5be6437dbec1ac843",5605:"9891a79fc24dfb63fce8",6172:"2d2ae3a66a111f064bb2",6277:"a9e66da1f2654c0de813",6839:"e28294d51df437cc6b53",6961:"a3622c9108edb8da5725",7275:"7c3b58f1d8197ca0f5d1",7929:"278820dd70f564f26754",7979:"1b0e35c8c94aabd6d46a",8146:"023f5a9d20413b6c62d8",8549:"888f46166d0046ea6196",8623:"553364f335b53f0d7c1e",8650:"67b7db5dd364cb97ebc5",8859:"a39f564a8bc48018f32c",9049:"39f4f9e42196fe741875",9502:"4e2c690e5198a024cc69",9783:"9cfa5eed0483c15d9aba",9835:"2ae69e7cc7d63355340e",9911:"8dd0d84bc48a0f50dd48"}[e]+".chunk.css"),c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},i="superset:",c.l=(e,t,a,r)=>{if(n[e])n[e].push(t);else{var o,d;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var u=l[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==i+a){o=u;break}}o||(d=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.setAttribute("data-webpack",i+a),o.src=e),n[e]=[t];var b=(t,a)=>{o.onerror=o.onload=null,clearTimeout(f);var i=n[e];if(delete n[e],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((e=>e(a))),t)return t(a)},f=setTimeout(b.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=b.bind(null,o.onerror),o.onload=b.bind(null,o.onload),d&&document.head.appendChild(o)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),c.p="/static/assets/",r=e=>new Promise(((t,a)=>{var n=c.miniCssF(e),i=c.p+n;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var i=(o=a[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){var o;if((i=(o=r[n]).getAttribute("data-href"))===e||i===t)return o}})(n,i))return t();((e,t,a,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=r=>{if(i.onerror=i.onload=null,"load"===r.type)a();else{var o=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=d,i.parentNode.removeChild(i),n(l)}},i.href=t,document.head.appendChild(i)})(e,i,t,a)})),o={7103:0,5296:0,9783:0},c.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{380:1,452:1,1862:1,1877:1,2045:1,3501:1,3745:1,3986:1,4194:1,5605:1,6172:1,6277:1,6839:1,6961:1,7275:1,7929:1,7979:1,8146:1,8549:1,8623:1,8650:1,8859:1,9049:1,9502:1,9783:1,9835:1,9911:1}[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={7103:0,5296:0,9783:0};c.f.j=(t,a)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else if(/^(7275|8146|9783)$/.test(t))e[t]=0;else{var i=new Promise(((a,i)=>n=e[t]=[a,i]));a.push(n[2]=i);var r=c.p+c.u(t),o=new Error;c.l(r,(a=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",o.name="ChunkLoadError",o.type=i,o.request=r,n[1](o)}}),"chunk-"+t,t)}},c.H.j=t=>{if(!(c.o(e,t)&&void 0!==e[t]||/^(7275|8146|9783)$/.test(t))){e[t]=null;var a=document.createElement("link");a.charset="utf-8",c.nc&&a.setAttribute("nonce",c.nc),a.rel="preload",a.as="script",a.href=c.p+c.u(t),document.head.appendChild(a)}},c.O.j=t=>0===e[t];var t=(t,a)=>{var n,i,[r,o,d]=a,l=0;if(r.some((t=>0!==e[t]))){for(n in o)c.o(o,n)&&(c.m[n]=o[n]);if(d)var s=d(c)}for(t&&t(a);l<r.length;l++)i=r[l],c.o(e,i)&&e[i]&&e[i][0](),e[r[l]]=0;return c.O(s)},a=globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),d={468:[1216,995,876,2671,1163,193,4443,818,452]},c.f.preload=e=>{var t=d[e];Array.isArray(t)&&t.map(c.G)},c.O(void 0,[1216,7550,4998,2102,905,1334,9356,2717,741,5473,1844,995,571,9602,5755,9525,6962,5806,7843,1603,3375,7727,3389,3193,1406,9152,6052,818],(()=>c(85156)));var u=c.O(void 0,[1216,7550,4998,2102,905,1334,9356,2717,741,5473,1844,995,571,9602,5755,9525,6962,5806,7843,1603,3375,7727,3389,3193,1406,9152,6052,818],(()=>c(71644)));u=c.O(u)})();