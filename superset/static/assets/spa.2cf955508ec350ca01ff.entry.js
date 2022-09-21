(()=>{var e,t,a,n,i,r,d,o,l={39991:e=>{"use strict";e.exports=function(){function e(e,t,a,n,i){return e<t||a<t?e>a?a+1:e+1:n===i?t:t+1}return function(t,a){if(t===a)return 0;if(t.length>a.length){var n=t;t=a,a=n}for(var i=t.length,r=a.length;i>0&&t.charCodeAt(i-1)===a.charCodeAt(r-1);)i--,r--;for(var d=0;d<i&&t.charCodeAt(d)===a.charCodeAt(d);)d++;if(r-=d,0==(i-=d)||r<3)return r;var o,l,s,c,u,b,f,h,m,p,g,v,Z=0,y=[];for(o=0;o<i;o++)y.push(o+1),y.push(t.charCodeAt(d+o));for(var x=y.length-1;Z<r-3;)for(m=a.charCodeAt(d+(l=Z)),p=a.charCodeAt(d+(s=Z+1)),g=a.charCodeAt(d+(c=Z+2)),v=a.charCodeAt(d+(u=Z+3)),b=Z+=4,o=0;o<x;o+=2)l=e(f=y[o],l,s,m,h=y[o+1]),s=e(l,s,c,p,h),c=e(s,c,u,g,h),b=e(c,u,b,v,h),y[o]=b,u=c,c=s,s=l,l=f;for(;Z<r;)for(m=a.charCodeAt(d+(l=Z)),b=++Z,o=0;o<x;o+=2)f=y[o],y[o]=b=e(f,l,b,m,y[o+1]),l=f;return b}}()},43063:(e,t,a)=>{var n=a(34963),i=a(80760),r=a(67206),d=a(1469),o=a(94885);e.exports=function(e,t){return(d(e)?n:i)(e,o(r(t,3)))}},79789:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(67294),i=a(51995),r=a(61988),d=a(70163),o=a(58593),l=a(11965);const s=function({certifiedBy:e,details:t,size:a="l"}){const s=(0,i.Fg)();return(0,l.tZ)(o.u,{id:"certified-details-tooltip",title:(0,l.tZ)(n.Fragment,null,e&&(0,l.tZ)("div",null,(0,l.tZ)("strong",null,(0,r.t)("Certified by %s",e))),(0,l.tZ)("div",null,t))},(0,l.tZ)(d.Z.Certified,{iconColor:s.colors.primary.base,iconSize:a}))}},19259:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(67294),i=a(17198),r=a(11965);function d({title:e,description:t,onConfirm:a,children:d}){const[o,l]=(0,n.useState)(!1),[s,c]=(0,n.useState)([]),u=()=>{l(!1),c([])};return(0,r.tZ)(n.Fragment,null,d&&d(((...e)=>{e.forEach((e=>{e&&("function"==typeof e.persist&&e.persist(),"function"==typeof e.preventDefault&&e.preventDefault(),"function"==typeof e.stopPropagation&&e.stopPropagation())})),l(!0),c(e)})),(0,r.tZ)(i.Z,{description:t,onConfirm:()=>{a(...s),u()},onHide:u,open:o,title:e}))}},17198:(e,t,a)=>{"use strict";a.d(t,{Z:()=>b});var n=a(51995),i=a(61988),r=a(67294),d=a(9875),o=a(74069),l=a(49238),s=a(11965);const c=n.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
  }
`,u=n.iK.div`
  line-height: 40px;
  padding-top: 16px;
`;function b({description:e,onConfirm:t,onHide:a,open:n,title:b}){const[f,h]=(0,r.useState)(!0),[m,p]=(0,r.useState)(""),g=()=>{p(""),t()};return(0,s.tZ)(o.Z,{disablePrimaryButton:f,onHide:()=>{p(""),a()},onHandledPrimaryAction:g,primaryButtonName:(0,i.t)("delete"),primaryButtonType:"danger",show:n,title:b},(0,s.tZ)(u,null,e),(0,s.tZ)(c,null,(0,s.tZ)(l.lX,{htmlFor:"delete"},(0,i.t)('Type "%s" to confirm',(0,i.t)("DELETE"))),(0,s.tZ)(d.II,{type:"text",id:"delete",autoComplete:"off",value:m,onChange:e=>{var t;const a=null!=(t=e.target.value)?t:"";h(a.toUpperCase()!==(0,i.t)("DELETE")),p(a)},onPressEnter:()=>{f||g()}})))}},36674:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(67294),i=a(51995),r=a(11965),d=a(61988),o=a(58593),l=a(33626),s=a(70163);const c=i.iK.a`
  ${({theme:e})=>r.iv`
    font-size: ${e.typography.sizes.xl}px;
    display: flex;
    padding: 0 0 0 ${2*e.gridUnit}px;
  `};
`,u=({itemId:e,isStarred:t,showTooltip:a,saveFaveStar:i,fetchFaveStar:u})=>{(0,l.J)((()=>{u&&u(e)}));const b=(0,n.useCallback)((a=>{a.preventDefault(),i(e,!!t)}),[t,e,i]),f=(0,r.tZ)(c,{href:"#",onClick:b,className:"fave-unfave-icon",role:"button"},t?(0,r.tZ)(s.Z.FavoriteSelected,null):(0,r.tZ)(s.Z.FavoriteUnselected,null));return a?(0,r.tZ)(o.u,{id:"fave-unfave-tooltip",title:(0,d.t)("Click to favorite/unfavorite")},f):f}},55467:(e,t,a)=>{"use strict";a.d(t,{Z:()=>k});var n=a(11965),i=a(67294),r=a(51995),d=a(4715),o=a(58593),l=a(5872),s=a.n(l),c=a(68492);const u=r.iK.div`
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center ${({position:e})=>e};
  display: inline-block;
  height: calc(100% - 1px);
  width: calc(100% - 2px);
  margin: 1px 1px 0 1px;
`;function b({src:e,fallback:t,isLoading:a,position:r,...d}){const[o,l]=(0,i.useState)(t);return(0,i.useEffect)((()=>(e&&fetch(e).then((e=>e.blob())).then((e=>{if(/image/.test(e.type)){const t=URL.createObjectURL(e);l(t)}})).catch((e=>{c.Z.error(e),l(t)})),()=>{l(t)})),[e,t]),(0,n.tZ)(u,s()({src:a?t:o},d,{position:r}))}var f=a(79789);const h=r.iK.div`
  width: 64px;
  display: flex;
  justify-content: flex-end;
`,m=(0,r.iK)(d.Ak)`
  ${({theme:e})=>`\n    border: 1px solid ${e.colors.grayscale.light2};\n    border-radius: ${e.gridUnit}px;\n    overflow: hidden;\n\n    .ant-card-body {\n      padding: ${4*e.gridUnit}px\n        ${2*e.gridUnit}px;\n    }\n    .ant-card-meta-detail > div:not(:last-child) {\n      margin-bottom: 0;\n    }\n    .gradient-container {\n      position: relative;\n      height: 100%;\n    }\n    &:hover {\n      box-shadow: 8px 8px 28px 0px ${e.colors.grayscale.light1};\n      transition: box-shadow ${e.transitionTiming}s ease-in-out;\n\n      .cover-footer {\n        transform: translateY(0);\n      }\n    }\n  `}
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
`,x=r.iK.div`
  flex: 1;
  overflow: hidden;
`,w=r.iK.div`
  align-self: flex-end;
  margin-left: auto;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`,_=(0,r.iK)(d.Od)`
  h3 {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  ul {
    margin-bottom: 0;
  }
`,C={rows:1,width:150},E=({to:e,children:t})=>(0,n.tZ)("a",{href:e},t);function S({title:e,url:t,linkComponent:a,titleRight:l,imgURL:s,imgFallbackURL:c,description:u,coverLeft:h,coverRight:S,actions:k,avatar:$,loading:T,imgPosition:I="top",cover:D,certifiedBy:U,certificationDetails:A}){const N=t&&a?a:E,R=(0,r.Fg)();return(0,n.tZ)(m,{cover:D||(0,n.tZ)(p,null,(0,n.tZ)(N,{to:t},(0,n.tZ)("div",{className:"gradient-container"},(0,n.tZ)(b,{src:s||"",fallback:c||"",isLoading:T,position:I}))),(0,n.tZ)(y,{className:"cover-footer"},!T&&h&&(0,n.tZ)(x,null,h),!T&&S&&(0,n.tZ)(w,null,S)))},T&&(0,n.tZ)(d.Ak.Meta,{title:(0,n.tZ)(i.Fragment,null,(0,n.tZ)(g,null,(0,n.tZ)(d.Od.Input,{active:!0,size:"small",css:(0,n.iv)({width:Math.trunc(62.5*R.gridUnit)},"","")}),(0,n.tZ)("div",{className:"card-actions"},(0,n.tZ)(d.Od.Button,{active:!0,shape:"circle"})," ",(0,n.tZ)(d.Od.Button,{active:!0,css:(0,n.iv)({width:10*R.gridUnit},"","")})))),description:(0,n.tZ)(_,{round:!0,active:!0,title:!1,paragraph:C})}),!T&&(0,n.tZ)(d.Ak.Meta,{title:(0,n.tZ)(g,null,(0,n.tZ)(o.u,{title:e},(0,n.tZ)(v,null,(0,n.tZ)(N,{to:t},U&&(0,n.tZ)(i.Fragment,null,(0,n.tZ)(f.Z,{certifiedBy:U,details:A})," "),e))),l&&(0,n.tZ)(Z,null,l),(0,n.tZ)("div",{className:"card-actions"},k)),description:u,avatar:$||null}))}S.Actions=h;const k=S},32228:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(89816),i=a(15926),r=a.n(i),d=a(14670),o=a.n(d);function l(e,t,a,i=200){const d=o().generate(),l=`/api/v1/${e}/export/?q=${r().encode(t)}&token=${d}`,s=document.createElement("iframe");s.style.display="none",s.src=l,document.body.appendChild(s);const c=window.setInterval((()=>{"done"===(0,n.Z)()[d]&&(window.clearInterval(c),document.body.removeChild(s),a())}),i)}},34024:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(67294),i=a(51995),r=a(61988),d=a(91877),o=a(93185),l=a(19259),s=a(70163),c=a(55467),u=a(37921),b=a(4715),f=a(83862),h=a(36674),m=a(34581),p=a(40768),g=a(11965);function v({chart:e,hasPerm:t,openChartEditModal:a,bulkSelectEnabled:v,addDangerToast:Z,addSuccessToast:y,refreshData:x,loading:w,showThumbnails:_,saveFavoriteStatus:C,favoriteStatus:E,chartFilter:S,userId:k,handleBulkChartExport:$}){const T=t("can_write"),I=t("can_write"),D=t("can_export")&&(0,d.cr)(o.T.VERSIONED_EXPORT),U=(0,i.Fg)(),A=(0,g.tZ)(f.v,null,I&&(0,g.tZ)(f.v.Item,null,(0,g.tZ)(l.Z,{title:(0,r.t)("Please confirm"),description:(0,g.tZ)(n.Fragment,null,(0,r.t)("Are you sure you want to delete")," ",(0,g.tZ)("b",null,e.slice_name),"?"),onConfirm:()=>(0,p.Gm)(e,y,Z,x,S,k)},(e=>(0,g.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,g.tZ)(s.Z.Trash,{iconSize:"l"})," ",(0,r.t)("Delete"))))),D&&(0,g.tZ)(f.v.Item,null,(0,g.tZ)("div",{role:"button",tabIndex:0,onClick:()=>$([e])},(0,g.tZ)(s.Z.Share,{iconSize:"l"})," ",(0,r.t)("Export"))),T&&(0,g.tZ)(f.v.Item,null,(0,g.tZ)("div",{role:"button",tabIndex:0,onClick:()=>a(e)},(0,g.tZ)(s.Z.EditAlt,{iconSize:"l"})," ",(0,r.t)("Edit"))));return(0,g.tZ)(p.ZB,{onClick:()=>{!v&&e.url&&(window.location.href=e.url)}},(0,g.tZ)(c.Z,{loading:w,title:e.slice_name,certifiedBy:e.certified_by,certificationDetails:e.certification_details,cover:(0,d.cr)(o.T.THUMBNAILS)&&_?null:(0,g.tZ)(n.Fragment,null),url:v?void 0:e.url,imgURL:e.thumbnail_url||"",imgFallbackURL:"/static/assets/images/chart-card-fallback.svg",description:(0,r.t)("Modified %s",e.changed_on_delta_humanized),coverLeft:(0,g.tZ)(m.Z,{users:e.owners||[]}),coverRight:(0,g.tZ)(u.Z,{type:"secondary"},e.datasource_name_text),actions:(0,g.tZ)(c.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},k&&(0,g.tZ)(h.Z,{itemId:e.id,saveFaveStar:C,isStarred:E}),(0,g.tZ)(b.Gj,{overlay:A},(0,g.tZ)(s.Z.MoreVert,{iconColor:U.colors.grayscale.base})))}))}},99415:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(67294),i=a(5977),r=a(73727),d=a(51995),o=a(61988),l=a(40768),s=a(91877),c=a(93185),u=a(4715),b=a(83862),f=a(19259),h=a(55467),m=a(70163),p=a(37921),g=a(34581),v=a(36674),Z=a(11965);const y=function({dashboard:e,hasPerm:t,bulkSelectEnabled:a,dashboardFilter:y,refreshData:x,userId:w,addDangerToast:_,addSuccessToast:C,openDashboardEditModal:E,favoriteStatus:S,saveFavoriteStatus:k,showThumbnails:$,handleBulkDashboardExport:T}){const I=(0,i.k6)(),D=t("can_write"),U=t("can_write"),A=t("can_export"),N=(0,d.Fg)(),R=(0,Z.tZ)(b.v,null,D&&E&&(0,Z.tZ)(b.v.Item,null,(0,Z.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:()=>E&&E(e)},(0,Z.tZ)(m.Z.EditAlt,{iconSize:"l"})," ",(0,o.t)("Edit"))),A&&(0,Z.tZ)(b.v.Item,null,(0,Z.tZ)("div",{role:"button",tabIndex:0,onClick:()=>T([e]),className:"action-button"},(0,Z.tZ)(m.Z.Share,{iconSize:"l"})," ",(0,o.t)("Export"))),U&&(0,Z.tZ)(b.v.Item,null,(0,Z.tZ)(f.Z,{title:(0,o.t)("Please confirm"),description:(0,Z.tZ)(n.Fragment,null,(0,o.t)("Are you sure you want to delete")," ",(0,Z.tZ)("b",null,e.dashboard_title),"?"),onConfirm:()=>(0,l.Iu)(e,x,C,_,y,w)},(e=>(0,Z.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,Z.tZ)(m.Z.Trash,{iconSize:"l"})," ",(0,o.t)("Delete"))))));return(0,Z.tZ)(l.ZB,{onClick:()=>{a||I.push(e.url)}},(0,Z.tZ)(h.Z,{loading:e.loading||!1,title:e.dashboard_title,certifiedBy:e.certified_by,certificationDetails:e.certification_details,titleRight:(0,Z.tZ)(p.Z,null,e.published?(0,o.t)("published"):(0,o.t)("draft")),cover:(0,s.cr)(c.T.THUMBNAILS)&&$?null:(0,Z.tZ)(n.Fragment,null),url:a?void 0:e.url,linkComponent:r.rU,imgURL:e.thumbnail_url,imgFallbackURL:"/static/assets/images/dashboard-card-fallback.svg",description:(0,o.t)("Modified %s",e.changed_on_delta_humanized),coverLeft:(0,Z.tZ)(g.Z,{users:e.owners||[]}),actions:(0,Z.tZ)(h.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},w&&(0,Z.tZ)(v.Z,{itemId:e.id,saveFaveStar:k,isStarred:S}),(0,Z.tZ)(u.Gj,{overlay:R},(0,Z.tZ)(m.Z.MoreVert,{iconColor:N.colors.grayscale.base})))}))}},12:(e,t,a)=>{"use strict";var n,i;a.d(t,{s:()=>n,J:()=>i}),function(e){e.FAVORITE="Favorite",e.MINE="Mine",e.EXAMPLES="Examples"}(n||(n={})),function(e){e.id="id",e.changed_on="changed_on",e.database="database",e.database_name="database.database_name",e.schema="schema",e.sql="sql",e.executed_sql="exceuted_sql",e.sql_tables="sql_tables",e.status="status",e.tab_name="tab_name",e.user="user",e.user_first_name="user.first_name",e.start_time="start_time",e.end_time="end_time",e.rows="rows",e.tmp_table_name="tmp_table_name",e.tracking_url="tracking_url"}(i||(i={}))},20755:(e,t,a)=>{"use strict";a.d(t,{Z:()=>x});var n=a(23279),i=a.n(n),r=a(67294),d=a(5977),o=a(73727),l=a(51995),s=a(11965),c=a(61988),u=a(94184),b=a.n(u),f=a(58593),h=a(4715),m=a(83862),p=a(35932),g=a(70163);const v=l.iK.div`
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
    background-color: ${({theme:e})=>e.colors.grayscale.light5};
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
    li,
    div {
      a,
      div {
        font-size: ${({theme:e})=>e.typography.sizes.s}px;
        color: ${({theme:e})=>e.colors.secondary.dark1};

        a {
          margin: 0;
          padding: ${({theme:e})=>2*e.gridUnit}px
            ${({theme:e})=>4*e.gridUnit}px;
          line-height: ${({theme:e})=>5*e.gridUnit}px;

          &:hover {
            text-decoration: none;
          }
        }
      }

      &.no-router a {
        padding: ${({theme:e})=>2*e.gridUnit}px
          ${({theme:e})=>4*e.gridUnit}px;
      }

      &.active a {
        background: ${({theme:e})=>e.colors.secondary.light4};
        border-radius: ${({theme:e})=>e.borderRadius}px;
      }
    }

    li.active > a,
    li.active > div,
    div.active > div,
    li > a:hover,
    li > a:focus,
    li > div:hover,
    div > div:hover,
    div > a:hover {
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
`,Z=e=>s.iv`
  color: ${e.colors.grayscale.base};
  backgroundColor: ${e.colors.grayscale.light2}};

  .ant-menu-item:hover {
    color: ${e.colors.grayscale.base};
    cursor: default;
  }
`,{SubMenu:y}=m.$,x=e=>{var t,a,n;const[l,u]=(0,r.useState)("horizontal"),[x,w]=(0,r.useState)("nav-right");let _=!0;try{(0,d.k6)()}catch(e){_=!1}return(0,r.useEffect)((()=>{function t(){window.innerWidth<=767?u("inline"):u("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?w("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&w("nav-right-collapse")}t();const a=i()(t,10);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}),[e.buttons]),(0,s.tZ)(v,null,(0,s.tZ)(h.X2,{className:"menu",role:"navigation"},e.name&&(0,s.tZ)("div",{className:"header"},e.name),(0,s.tZ)(m.v,{mode:l,style:{backgroundColor:"transparent"}},null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||_)&&t.usesRouter?(0,s.tZ)(m.v.Item,{key:t.label},(0,s.tZ)("div",{role:"tab",className:t.name===e.activeChild?"active":""},(0,s.tZ)("div",null,(0,s.tZ)(o.rU,{to:t.url||""},t.label)))):(0,s.tZ)(m.v.Item,{key:t.label},(0,s.tZ)("div",{className:b()("no-router",{active:t.name===e.activeChild}),role:"tab"},(0,s.tZ)("a",{href:t.url,onClick:t.onClick},t.label)))))),(0,s.tZ)("div",{className:x},(0,s.tZ)(m.v,{mode:"horizontal",triggerSubMenuAction:"click"},null==(a=e.dropDownLinks)?void 0:a.map(((e,t)=>{var a;return(0,s.tZ)(y,{key:t,title:e.label,icon:(0,s.tZ)(g.Z.TriangleDown,null),popupOffset:[10,20],className:"dropdown-menu-links"},null==(a=e.childs)?void 0:a.map((e=>"object"==typeof e?e.disable?(0,s.tZ)(m.$.Item,{key:e.label,css:Z},(0,s.tZ)(f.u,{placement:"top",title:(0,c.t)("Enable 'Allow data upload' in any database's settings")},e.label)):(0,s.tZ)(m.$.Item,{key:e.label},(0,s.tZ)("a",{href:e.url},e.label)):null)))}))),null==(n=e.buttons)?void 0:n.map(((e,t)=>(0,s.tZ)(p.Z,{key:t,buttonStyle:e.buttonStyle,onClick:e.onClick},e.name))))),e.children)}},40164:(e,t,a)=>{"use strict";var n,i=a(67294),r=a(90731),d=a(5872),o=a.n(d),l=a(73727),s=a(5977),c=a(31405),u=a(91877),b=a(57902),f=a(38703),h=a(56052),m=a(85156),p=a(5667),g=a(38552),v=a(43063),Z=a.n(v),y=a(51995),x=a(61988),w=a(43700),_=a(61337),C=a(55467),E=a(14114),S=a(40768),k=a(93185),$=a(4715),T=a(30381),I=a.n(T),D=a(20755),U=a(70163),A=a(35932);!function(e){e.Charts="CHARTS",e.Dashboards="DASHBOARDS",e.Recents="RECENTS",e.SavedQueries="SAVED_QUERIES"}(n||(n={}));var N=a(11965);const R={[n.Charts]:(0,x.t)("charts"),[n.Dashboards]:(0,x.t)("dashboards"),[n.Recents]:(0,x.t)("recents"),[n.SavedQueries]:(0,x.t)("saved queries")},F=y.iK.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`,L=y.iK.div`
  Button {
    svg {
      color: ${({theme:e})=>e.colors.grayscale.light5};
    }
  }
`;function M({tableName:e,tab:t}){const a={[n.Charts]:"/chart/add",[n.Dashboards]:"/dashboard/new",[n.SavedQueries]:"/superset/sqllab?new=true"},i={[n.Charts]:"/chart/list",[n.Dashboards]:"/dashboard/list/",[n.SavedQueries]:"/savedqueryview/list/"},r={[n.Charts]:"empty-charts.svg",[n.Dashboards]:"empty-dashboard.svg",[n.Recents]:"union.svg",[n.SavedQueries]:"empty-queries.svg"},d=(0,N.tZ)("span",null,(0,x.t)("No %(tableName)s yet",{tableName:R[e]})),o=(0,N.tZ)("span",{className:"no-recents"},"Viewed"===t?(0,x.t)("Recently viewed charts, dashboards, and saved queries will appear here"):"Created"===t?(0,x.t)("Recently created charts, dashboards, and saved queries will appear here"):"Examples"===t?(0,x.t)("Example %(tableName)s will appear here",{tableName:e.toLowerCase()}):"Edited"===t?(0,x.t)("Recently edited charts, dashboards, and saved queries will appear here"):null);return"Mine"===t||"RECENTS"===e||"Examples"===t?(0,N.tZ)(F,null,(0,N.tZ)($.HY,{image:`/static/assets/images/${r[e]}`,description:"RECENTS"===e||"Examples"===t?o:d},"RECENTS"!==e&&(0,N.tZ)(L,null,(0,N.tZ)(A.Z,{buttonStyle:"primary",onClick:()=>{window.location.href=a[e]}},(0,N.tZ)("i",{className:"fa fa-plus"}),"SAVED_QUERIES"===e?(0,x.t)("SQL query"):e.split("").slice(0,e.length-1).join(""))))):(0,N.tZ)(F,null,(0,N.tZ)($.HY,{image:"/static/assets/images/star-circle.svg",description:(0,N.tZ)("span",{className:"no-favorites"},(0,x.t)("You don't have any favorites yet!"))},(0,N.tZ)(A.Z,{buttonStyle:"primary",onClick:()=>{window.location.href=i[e]}},(0,x.t)("See all %(tableName)s",{tableName:"SAVED_QUERIES"===e?(0,x.t)("SQL Lab queries"):R[e]}))))}var P;!function(e){e.EDITED="Edited",e.CREATED="Created",e.VIEWED="Viewed",e.EXAMPLE="Examples"}(P||(P={}));const z=y.iK.div`
  .recentCards {
    max-height: none;
    grid-gap: ${({theme:e})=>4*e.gridUnit+"px"};
  }
`,O=(0,x.t)("[Untitled]"),j=(0,x.t)("Unknown"),q=e=>"dashboard_title"in e?e.dashboard_title||O:"slice_name"in e?e.slice_name||O:"label"in e?e.label||O:e.item_title||O,V=e=>{if("sql"in e)return(0,N.tZ)(U.Z.Sql,null);const t="item_url"in e?e.item_url:e.url;return null!=t&&t.includes("dashboard")?(0,N.tZ)(U.Z.NavDashboard,null):null!=t&&t.includes("explore")?(0,N.tZ)(U.Z.NavCharts,null):null};function B({activeChild:e,setActiveChild:t,activityData:a,user:r,loadedCount:d}){var o;const[l,s]=(0,i.useState)(),[c,u]=(0,i.useState)(!1);(0,i.useEffect)((()=>{"Edited"===e&&(u(!0),u(!0),(0,S.Ld)(r.userId).then((e=>{s([...e.editedChart,...e.editedDash]),u(!1)})))}),[e]);const b=[{name:"Edited",label:(0,x.t)("Edited"),onClick:()=>{t("Edited"),(0,_.LS)(_.dR.homepage_activity_filter,P.EDITED)}},{name:"Created",label:(0,x.t)("Created"),onClick:()=>{t("Created"),(0,_.LS)(_.dR.homepage_activity_filter,P.CREATED)}}];return null!=a&&a.Viewed&&b.unshift({name:"Viewed",label:(0,x.t)("Viewed"),onClick:()=>{t("Viewed"),(0,_.LS)(_.dR.homepage_activity_filter,P.VIEWED)}}),c&&!l||d<3?(0,N.tZ)(pe,null):(0,N.tZ)(z,null,(0,N.tZ)(D.Z,{activeChild:e,tabs:b}),(null==(o=a[e])?void 0:o.length)>0||"Edited"===e&&l&&l.length>0?(0,N.tZ)(S._L,{className:"recentCards"},("Edited"!==e?a[e]:l).map((e=>{const t=(e=>"sql"in e?`/superset/sqllab?savedQueryId=${e.id}`:"url"in e?e.url:e.item_url)(e),a=(e=>{if("time"in e)return(0,x.t)("Viewed %s",I()(e.time).fromNow());let t;return"changed_on"in e&&(t=e.changed_on),"changed_on_utc"in e&&(t=e.changed_on_utc),(0,x.t)("Modified %s",null==t?j:I()(t).fromNow())})(e);return(0,N.tZ)(S.ZB,{onClick:()=>{window.location.href=t},key:t},(0,N.tZ)(C.Z,{cover:(0,N.tZ)(i.Fragment,null),url:t,title:q(e),description:a,avatar:V(e),actions:null}))}))):(0,N.tZ)(M,{tableName:n.Recents,tab:e}))}var K=a(63105),H=a.n(K),Q=a(34858),X=a(12),Y=a(83673),W=a(34024),G=a(32228);const J=(0,E.ZP)((function({user:e,addDangerToast:t,addSuccessToast:a,mine:r,showThumbnails:d,examples:o}){const l=(0,s.k6)(),c=(0,_.rV)(_.dR.homepage_chart_filter,X.s.EXAMPLES),u=H()(o,(e=>"viz_type"in e)),{state:{loading:h,resourceCollection:m,bulkSelectEnabled:p},setResourceCollection:g,hasPerm:v,refreshData:Z,fetchData:y}=(0,Q.Yi)("chart",(0,x.t)("chart"),t,!0,"Mine"===c?r:u,[],!1),w=(0,i.useMemo)((()=>m.map((e=>e.id))),[m]),[C,E]=(0,Q.NE)("chart",w,t),{sliceCurrentlyEditing:k,openChartEditModal:$,handleChartUpdated:T,closeChartEditModal:I}=(0,Q.fF)(g,m),[U,A]=(0,i.useState)(c),[R,F]=(0,i.useState)(!1),[L,P]=(0,i.useState)(!1),z=t=>{const a=[];return"Mine"===t?a.push({id:"owners",operator:"rel_m_m",value:`${null==e?void 0:e.userId}`}):"Favorite"===t?a.push({id:"id",operator:"chart_is_favorite",value:!0}):"Examples"===t&&a.push({id:"created_by",operator:"rel_o_m",value:0}),a};(0,i.useEffect)((()=>{(L||"Favorite"===U)&&(e=>{y({pageIndex:0,pageSize:S.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:z(e)})})(U),P(!0)}),[U]);const O=e=>{const t=e.map((({id:e})=>e));(0,G.Z)("chart",t,(()=>{F(!1)})),F(!0)},j=[{name:"Favorite",label:(0,x.t)("Favorite"),onClick:()=>{A(X.s.FAVORITE),(0,_.LS)(_.dR.homepage_chart_filter,X.s.FAVORITE)}},{name:"Mine",label:(0,x.t)("Mine"),onClick:()=>{A(X.s.MINE),(0,_.LS)(_.dR.homepage_chart_filter,X.s.MINE)}}];return o&&j.push({name:"Examples",label:(0,x.t)("Examples"),onClick:()=>{A(X.s.EXAMPLES),(0,_.LS)(_.dR.homepage_chart_filter,X.s.EXAMPLES)}}),h?(0,N.tZ)(pe,{cover:d}):(0,N.tZ)(b.Z,null,k&&(0,N.tZ)(Y.Z,{onHide:I,onSave:T,show:!0,slice:k}),(0,N.tZ)(D.Z,{activeChild:U,tabs:j,buttons:[{name:(0,N.tZ)(i.Fragment,null,(0,N.tZ)("i",{className:"fa fa-plus"}),(0,x.t)("Chart")),buttonStyle:"tertiary",onClick:()=>{window.location.assign("/chart/add")}},{name:(0,x.t)("View All »"),buttonStyle:"link",onClick:()=>{const e="Favorite"===U?`/chart/list/?filters=(favorite:(label:${(0,x.t)("Yes")},value:!t))`:"/chart/list/";l.push(e)}}]}),null!=m&&m.length?(0,N.tZ)(S._L,{showThumbnails:d},m.map((n=>(0,N.tZ)(W.Z,{key:`${n.id}`,openChartEditModal:$,chartFilter:U,chart:n,userId:null==e?void 0:e.userId,hasPerm:v,showThumbnails:d,bulkSelectEnabled:p,refreshData:Z,addDangerToast:t,addSuccessToast:a,favoriteStatus:E[n.id],saveFavoriteStatus:C,handleBulkChartExport:O})))):(0,N.tZ)(M,{tableName:n.Charts,tab:U}),R&&(0,N.tZ)(f.Z,null))}));var ee=a(31069),te=a(42110),ae=a(33743),ne=a(120),ie=a(83862),re=a(17198);te.Z.registerLanguage("sql",ae.Z);const de=y.iK.div`
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
`,oe=y.iK.div`
  svg {
    margin-left: ${({theme:e})=>10*e.gridUnit}px;
  }
  .query-title {
    padding: ${({theme:e})=>2*e.gridUnit+2}px;
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
  }
`,le=y.iK.div`
  pre {
    height: ${({theme:e})=>40*e.gridUnit}px;
    border: none !important;
    background-color: ${({theme:e})=>e.colors.grayscale.light5} !important;
    overflow: hidden;
    padding: ${({theme:e})=>4*e.gridUnit}px !important;
  }
`,se=(0,E.ZP)((({user:e,addDangerToast:t,addSuccessToast:a,mine:r,showThumbnails:d,featureFlag:o})=>{const{state:{loading:l,resourceCollection:s},hasPerm:c,fetchData:u,refreshData:b}=(0,Q.Yi)("saved_query",(0,x.t)("query"),t,!0,r,[],!1),[f,h]=(0,i.useState)("Mine"),[m,p]=(0,i.useState)(!1),[g,v]=(0,i.useState)({}),[Z,w]=(0,i.useState)(!0),_=c("can_edit"),E=c("can_delete"),k=(0,y.Fg)(),T=t=>{const a=[];return"Mine"===t?a.push({id:"created_by",operator:"rel_o_m",value:`${null==e?void 0:e.userId}`}):a.push({id:"id",operator:"saved_query_is_fav",value:!0}),a};return l?(0,N.tZ)(pe,{cover:d}):(0,N.tZ)(i.Fragment,null,m&&(0,N.tZ)(re.Z,{description:(0,x.t)("This action will permanently delete the saved query."),onConfirm:()=>{m&&(({id:n,label:i})=>{ee.Z.delete({endpoint:`/api/v1/saved_query/${n}`}).then((()=>{const t={filters:[{id:"created_by",operator:"rel_o_m",value:`${null==e?void 0:e.userId}`}],pageSize:S.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],pageIndex:0};b(Z?t:void 0),w(!1),p(!1),a((0,x.t)("Deleted: %s",i))}),(0,S.v$)((e=>t((0,x.t)("There was an issue deleting %s: %s",i,e)))))})(g)},onHide:()=>{p(!1)},open:!0,title:(0,x.t)("Delete Query?")}),(0,N.tZ)(D.Z,{activeChild:f,tabs:[{name:"Mine",label:(0,x.t)("Mine"),onClick:()=>u({pageIndex:0,pageSize:S.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:T("Mine")}).then((()=>h("Mine")))}],buttons:[{name:(0,N.tZ)(i.Fragment,null,(0,N.tZ)("i",{className:"fa fa-plus"}),(0,x.t)("SQL Query")),buttonStyle:"tertiary",onClick:()=>{window.location.href="/superset/sqllab?new=true"}},{name:(0,x.t)("View All »"),buttonStyle:"link",onClick:()=>{window.location.href="/savedqueryview/list"}}]}),s.length>0?(0,N.tZ)(S._L,{showThumbnails:d},s.map((e=>{var n,r,l;return(0,N.tZ)(de,{onClick:()=>{window.location.href=`/superset/sqllab?savedQueryId=${e.id}`},key:e.id},(0,N.tZ)(C.Z,{imgURL:"",url:`/superset/sqllab?savedQueryId=${e.id}`,title:e.label,imgFallbackURL:"/static/assets/images/empty-query.svg",description:(0,x.t)("Ran %s",e.changed_on_delta_humanized),cover:null!=e&&null!=(n=e.sql)&&n.length&&d&&o?(0,N.tZ)(le,null,(0,N.tZ)(te.Z,{language:"sql",lineProps:{style:{color:k.colors.grayscale.dark2,wordBreak:"break-all",whiteSpace:"pre-wrap"}},style:ne.Z,wrapLines:!0,lineNumberStyle:{display:"none"},showLineNumbers:!1},(0,S.IB)(e.sql,25))):!(d&&(null==e||null==(r=e.sql)||!r.length))&&(0,N.tZ)(i.Fragment,null),actions:(0,N.tZ)(oe,null,(0,N.tZ)(C.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},(0,N.tZ)($.Gj,{overlay:(l=e,(0,N.tZ)(ie.v,null,_&&(0,N.tZ)(ie.v.Item,{onClick:()=>{window.location.href=`/superset/sqllab?savedQueryId=${l.id}`}},(0,x.t)("Edit")),(0,N.tZ)(ie.v.Item,{onClick:()=>{l.id&&(0,Q.bR)(l.id,t,a)}},(0,x.t)("Share")),E&&(0,N.tZ)(ie.v.Item,{onClick:()=>{p(!0),v(l)}},(0,x.t)("Delete"))))},(0,N.tZ)(U.Z.MoreVert,{iconColor:k.colors.grayscale.base}))))}))}))):(0,N.tZ)(M,{tableName:n.SavedQueries,tab:f}))}));var ce=a(20818),ue=a(99415);const be=(0,E.ZP)((function({user:e,addDangerToast:t,addSuccessToast:a,mine:r,showThumbnails:d,examples:o}){const l=(0,s.k6)(),c=(0,_.rV)(_.dR.homepage_dashboard_filter,X.s.EXAMPLES),u=H()(o,(e=>!("viz_type"in e))),{state:{loading:b,resourceCollection:h},setResourceCollection:m,hasPerm:p,refreshData:g,fetchData:v}=(0,Q.Yi)("dashboard",(0,x.t)("dashboard"),t,!0,"Mine"===c?r:u,[],!1),Z=(0,i.useMemo)((()=>h.map((e=>e.id))),[h]),[y,w]=(0,Q.NE)("dashboard",Z,t),[C,E]=(0,i.useState)(),[k,$]=(0,i.useState)(c),[T,I]=(0,i.useState)(!1),[U,A]=(0,i.useState)(!1),R=t=>{const a=[];return"Mine"===t?a.push({id:"owners",operator:"rel_m_m",value:`${null==e?void 0:e.userId}`}):"Favorite"===t?a.push({id:"id",operator:"dashboard_is_favorite",value:!0}):"Examples"===t&&a.push({id:"created_by",operator:"rel_o_m",value:0}),a};(0,i.useEffect)((()=>{(U||"Favorite"===k)&&(e=>{v({pageIndex:0,pageSize:S.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:R(e)})})(k),A(!0)}),[k]);const F=e=>{const t=e.map((({id:e})=>e));(0,G.Z)("dashboard",t,(()=>{I(!1)})),I(!0)},L=[{name:"Favorite",label:(0,x.t)("Favorite"),onClick:()=>{$(X.s.FAVORITE),(0,_.LS)(_.dR.homepage_dashboard_filter,X.s.FAVORITE)}},{name:"Mine",label:(0,x.t)("Mine"),onClick:()=>{$(X.s.MINE),(0,_.LS)(_.dR.homepage_dashboard_filter,X.s.MINE)}}];return o&&L.push({name:"Examples",label:(0,x.t)("Examples"),onClick:()=>{$(X.s.EXAMPLES),(0,_.LS)(_.dR.homepage_dashboard_filter,X.s.EXAMPLES)}}),b?(0,N.tZ)(pe,{cover:d}):(0,N.tZ)(i.Fragment,null,(0,N.tZ)(D.Z,{activeChild:k,tabs:L,buttons:[{name:(0,N.tZ)(i.Fragment,null,(0,N.tZ)("i",{className:"fa fa-plus"}),(0,x.t)("Dashboard")),buttonStyle:"tertiary",onClick:()=>{window.location.assign("/dashboard/new")}},{name:(0,x.t)("View All »"),buttonStyle:"link",onClick:()=>{const e="Favorite"===k?`/dashboard/list/?filters=(favorite:(label:${(0,x.t)("Yes")},value:!t))`:"/dashboard/list/";l.push(e)}}]}),C&&(0,N.tZ)(ce.Z,{dashboardId:null==C?void 0:C.id,show:!0,onHide:()=>E(void 0),onSubmit:e=>ee.Z.get({endpoint:`/api/v1/dashboard/${e.id}`}).then((({json:e={}})=>{m(h.map((t=>t.id===e.id?e.result:t)))}),(0,S.v$)((e=>t((0,x.t)("An error occurred while fetching dashboards: %s",e)))))}),h.length>0&&(0,N.tZ)(S._L,{showThumbnails:d},h.map((n=>(0,N.tZ)(ue.Z,{key:n.id,dashboard:n,hasPerm:p,bulkSelectEnabled:!1,showThumbnails:d,dashboardFilter:k,refreshData:g,addDangerToast:t,addSuccessToast:a,userId:null==e?void 0:e.userId,loading:b,openDashboardEditModal:e=>E(e),saveFavoriteStatus:y,favoriteStatus:w[n.id],handleBulkDashboardExport:F})))),0===h.length&&(0,N.tZ)(M,{tableName:n.Dashboards,tab:k}),T&&(0,N.tZ)(f.Z,null))})),fe=["2","3"],he=y.iK.div`
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
      ${S.mq[1]} {
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
`,me=y.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    justify-content: space-between;\n    height: 50px;\n    background-color: ${e.colors.grayscale.light5};\n    .welcome-header {\n      font-size: ${e.typography.sizes.l}px;\n      padding: ${4*e.gridUnit}px ${2*e.gridUnit+2}px;\n      margin: 0 ${2*e.gridUnit}px;\n    }\n    .switch {\n      display: flex;\n      flex-direction: row;\n      margin: ${4*e.gridUnit}px;\n      span {\n        display: block;\n        margin: ${1*e.gridUnit}px;\n        line-height: 1;\n      }\n    }\n  `}
`,pe=({cover:e})=>(0,N.tZ)(S._L,{showThumbnails:e,className:"loading-cards"},[...new Array(S.iv)].map(((t,a)=>(0,N.tZ)(C.Z,{key:a,cover:!e&&(0,N.tZ)(i.Fragment,null),description:"",loading:!0})))),ge=(0,E.ZP)((function({user:e,addDangerToast:t}){const a=e.userId.toString(),n=`/superset/recent_activity/${e.userId}/?limit=6`,[r,d]=(0,i.useState)("Loading"),o=(0,_.OH)(a,null);let l=!1;(0,u.cr)(k.T.THUMBNAILS)&&(l=void 0===(null==o?void 0:o.thumbnails)||(null==o?void 0:o.thumbnails));const[s,c]=(0,i.useState)(l),[b,f]=(0,i.useState)(null),[h,m]=(0,i.useState)(null),[p,g]=(0,i.useState)(null),[v,y]=(0,i.useState)(null),[C,E]=(0,i.useState)(0),T=(0,_.rV)(_.dR.homepage_collapse_state,[]),[I,D]=(0,i.useState)(T);(0,i.useEffect)((()=>{const i=(0,_.rV)(_.dR.homepage_activity_filter,null);D(T.length>0?T:fe),(0,S.Hn)(e.userId,n,t).then((e=>{const t={};if(t.Examples=e.examples,e.viewed){const a=Z()(e.viewed,["item_url",null]).map((e=>e));t.Viewed=a,!i&&t.Viewed?d("Viewed"):i||t.Viewed?d(i||"Created"):d("Created")}else d(i||"Created");f((e=>({...e,...t})))})).catch((0,S.v$)((e=>{f((e=>({...e,Viewed:[]}))),t((0,x.t)("There was an issue fetching your recent activity: %s",e))})));const r=[{col:"created_by",opr:"rel_o_m",value:`${a}`}];(0,S.B1)(a,"dashboard").then((e=>{y(e),E((e=>e+1))})).catch((e=>{y([]),E((e=>e+1)),t((0,x.t)("There was an issue fetching your dashboards: %s",e))})),(0,S.B1)(a,"chart").then((e=>{m(e),E((e=>e+1))})).catch((e=>{m([]),E((e=>e+1)),t((0,x.t)("There was an issue fetching your chart: %s",e))})),(0,S.B1)(a,"saved_query",r).then((e=>{g(e),E((e=>e+1))})).catch((e=>{g([]),E((e=>e+1)),t((0,x.t)("There was an issues fetching your saved queries: %s",e))}))}),[]),(0,i.useEffect)((()=>{!T&&null!=p&&p.length&&D((e=>[...e,"4"])),f((e=>({...e,Created:[...(null==h?void 0:h.slice(0,3))||[],...(null==v?void 0:v.slice(0,3))||[],...(null==p?void 0:p.slice(0,3))||[]]})))}),[h,p,v]),(0,i.useEffect)((()=>{var e;!T&&null!=b&&null!=(e=b.Viewed)&&e.length&&D((e=>["1",...e]))}),[b]);const U=!(null!=b&&b.Examples||null!=b&&b.Viewed);return(0,N.tZ)(he,null,(0,N.tZ)(me,null,(0,N.tZ)("h1",{className:"welcome-header"},"Home"),(0,u.cr)(k.T.THUMBNAILS)?(0,N.tZ)("div",{className:"switch"},(0,N.tZ)($.KU,{checked:s,onChange:()=>{c(!s),(0,_.I_)(a,{thumbnails:!s})}}),(0,N.tZ)("span",null,"Thumbnails")):null),(0,N.tZ)(w.Z,{activeKey:I,onChange:e=>{D(e),(0,_.LS)(_.dR.homepage_collapse_state,e)},ghost:!0,bigger:!0},(0,N.tZ)(w.Z.Panel,{header:(0,x.t)("Recents"),key:"1"},b&&(b.Viewed||b.Examples||b.Created)&&"Loading"!==r?(0,N.tZ)(B,{user:{userId:e.userId},activeChild:r,setActiveChild:d,activityData:b,loadedCount:C}):(0,N.tZ)(pe,null)),(0,N.tZ)(w.Z.Panel,{header:(0,x.t)("Dashboards"),key:"2"},!v||U?(0,N.tZ)(pe,{cover:s}):(0,N.tZ)(be,{user:e,mine:v,showThumbnails:s,examples:null==b?void 0:b.Examples})),(0,N.tZ)(w.Z.Panel,{header:(0,x.t)("Charts"),key:"3"},!h||U?(0,N.tZ)(pe,{cover:s}):(0,N.tZ)(J,{showThumbnails:s,user:e,mine:h,examples:null==b?void 0:b.Examples})),(0,N.tZ)(w.Z.Panel,{header:(0,x.t)("Saved queries"),key:"4"},p?(0,N.tZ)(se,{showThumbnails:s,user:e,mine:p,featureFlag:(0,u.cr)(k.T.THUMBNAILS)}):(0,N.tZ)(pe,{cover:s}))))})),ve=(0,i.lazy)((()=>Promise.all([a.e(8782),a.e(4787)]).then(a.bind(a,28999)))),Ze=(0,i.lazy)((()=>Promise.all([a.e(1216),a.e(876),a.e(8782),a.e(9502)]).then(a.bind(a,63082)))),ye=(0,i.lazy)((()=>Promise.all([a.e(8782),a.e(1611)]).then(a.bind(a,35276)))),xe=(0,i.lazy)((()=>Promise.all([a.e(1216),a.e(504),a.e(2087),a.e(3807),a.e(8782),a.e(5289),a.e(5175),a.e(9312),a.e(665)]).then(a.bind(a,13434)))),we=(0,i.lazy)((()=>Promise.all([a.e(8782),a.e(9452)]).then(a.bind(a,69053)))),_e=(0,i.lazy)((()=>Promise.all([a.e(8782),a.e(8774)]).then(a.bind(a,23767)))),Ce=(0,i.lazy)((()=>Promise.all([a.e(1216),a.e(504),a.e(2087),a.e(3807),a.e(5289),a.e(5175),a.e(9312),a.e(7936),a.e(468)]).then(a.bind(a,82343)))),Ee=(0,i.lazy)((()=>Promise.all([a.e(8782),a.e(4502)]).then(a.bind(a,30075)))),Se=(0,i.lazy)((()=>Promise.all([a.e(8782),a.e(5656)]).then(a.bind(a,97894)))),ke=(0,i.lazy)((()=>Promise.all([a.e(8782),a.e(9137)]).then(a.bind(a,25163)))),$e=(0,i.lazy)((()=>Promise.all([a.e(8782),a.e(4173),a.e(7633)]).then(a.bind(a,82842)))),Te=[{path:"/superset/welcome/",Component:ge},{path:"/dashboard/list/",Component:_e},{path:"/superset/dashboard/:idOrSlug/",Component:Ce},{path:"/chart/list/",Component:xe},{path:"/tablemodelview/list/",Component:Se},{path:"/databaseview/list/",Component:Ee},{path:"/savedqueryview/list/",Component:(0,i.lazy)((()=>Promise.all([a.e(8782),a.e(4173),a.e(9173)]).then(a.bind(a,49588))))},{path:"/csstemplatemodelview/list/",Component:we},{path:"/annotationlayermodelview/list/",Component:ve},{path:"/annotationmodelview/:annotationLayerId/annotation/",Component:ye},{path:"/superset/sqllab/history/",Component:$e},{path:"/alert/list/",Component:Ze},{path:"/report/list/",Component:Ze,props:{isReportEnabled:!0}},{path:"/alert/:alertId/log/",Component:ke},{path:"/report/:alertId/log/",Component:ke,props:{isReportEnabled:!0}}],Ie=Te.map((e=>e.path)).reduce(((e,t)=>({...e,[t]:!0})),{});function De(e){if(e){const t=e.split(/[?#]/)[0];return!!Ie[t]}return!1}var Ue=a(3741),Ae=a(68135),Ne=a(37703),Re=a(35755),Fe=a(38626),Le=a(57865),Me=a(89474),Pe=a(33626);const ze={info:"addInfoToast",alert:"addDangerToast",danger:"addDangerToast",warning:"addWarningToast",success:"addSuccessToast"};function Oe({children:e,messages:t}){const a=(0,E.e1)();return(0,Pe.J)((()=>{t.forEach((e=>{const[t,n]=e,i=a[ze[t]];i&&i(n)}))})),e}var je=a(29147),qe=a(14278);const Ve={...m.b.common},Be=({children:e})=>(0,N.tZ)(Ae.a,{theme:m.r},(0,N.tZ)(Ne.zt,{store:Me.h},(0,N.tZ)(Fe.W,{backend:Le.PD},(0,N.tZ)(Oe,{messages:Ve.flash_messages},(0,N.tZ)(je.DG,null,(0,N.tZ)(qe.EM,null,(0,N.tZ)(Re.Fz,{ReactRouterRoute:s.AW,stringifyOptions:{encode:!1}},e)))))));(0,g.Z)();const Ke={...m.b.user},He={...m.b.common.menu_data};let Qe;(0,u.fG)(m.b.common.feature_flags);const Xe=()=>{const e=(0,s.TH)();return(0,i.useEffect)((()=>{Qe&&Qe!==e.pathname&&Ue.Yd.markTimeOrigin(),Qe=e.pathname}),[e.pathname]),(0,N.tZ)(i.Fragment,null)};r.render((0,N.tZ)((()=>(0,N.tZ)(l.VK,null,(0,N.tZ)(Xe,null),(0,N.tZ)(Be,null,(0,N.tZ)(c.n,null),(0,N.tZ)(h.Z,{data:He,isFrontendRoute:De}),(0,N.tZ)(s.rs,null,Te.map((({path:e,Component:t,props:a={},Fallback:n=f.Z})=>(0,N.tZ)(s.AW,{path:e,key:e},(0,N.tZ)(i.Suspense,{fallback:(0,N.tZ)(n,null)},(0,N.tZ)(b.Z,null,(0,N.tZ)(t,o()({user:Ke},a)))))))),(0,N.tZ)(p.Z,null)))),null),document.getElementById("app"))}},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={id:e,loaded:!1,exports:{}};return l[e].call(a.exports,a,a.exports,c),a.loaded=!0,a.exports}c.m=l,c.amdD=function(){throw new Error("define cannot be used indirect")},c.amdO={},e=[],c.O=(t,a,n,i)=>{if(!a){var r=1/0;for(s=0;s<e.length;s++){for(var[a,n,i]=e[s],d=!0,o=0;o<a.length;o++)(!1&i||r>=i)&&Object.keys(c.O).every((e=>c.O[e](a[o])))?a.splice(o--,1):(d=!1,i<r&&(r=i));if(d){e.splice(s--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[a,n,i]},c.H={},c.G=e=>{Object.keys(c.H).map((t=>{c.H[t](e)}))},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var i=Object.create(null);c.r(i);var r={};t=t||[null,a({}),a([]),a(a)];for(var d=2&n&&e;"object"==typeof d&&!~t.indexOf(d);d=a(d))Object.getOwnPropertyNames(d).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,c.d(i,r),i},c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,a)=>(c.f[a](e,t),t)),[])),c.u=e=>2087===e?"2087.54502ecca41051b1b6b3.entry.js":4593===e?"4593.d68c5ae37590aeca12f4.entry.js":5289===e?"5289.6395071e11edbe293ec3.entry.js":2671===e?"2671.4efbb61faace28861a36.entry.js":5175===e?"5175.74e277ef8f6dfb0fff9f.entry.js":8274===e?"8274.83609c2078ddfdb2c272.entry.js":876===e?"876.37176dbdd5e6ae3abd2e.entry.js":504===e?"thumbnail.d6af9282687956aa15cb.entry.js":3807===e?"3807.594cebccbcc479250a61.entry.js":9312===e?"9312.7bf125479f63d0d8d515.entry.js":2441===e?"2441.9d43893841d3df512e51.entry.js":1139===e?"1139.515abfa50073eb735dc1.entry.js":4489===e?"4489.2ea83242b46dd2ffd987.entry.js":{57:"38f4b0c5b2c751f3029f",112:"0cceda87f254629c0f55",137:"2e4eee61fdab260331a3",158:"7af34d924b2b2e3aaaa7",177:"ca39eb74c4d49fd55005",183:"2d69e60dfe962c42eee9",215:"f6160a99b46b22e18caa",310:"e2c18a71d3a5c875a789",312:"90af13ee4a0d5e067aab",326:"7374ea8855c4c8c9dde6",336:"e5df42bc5a8ad6d9aed0",347:"3f1f3f38b6b3b9616e75",349:"0202ec1626f196ac9881",363:"e517ebae29a6c51c5e09",380:"b10c6bc15614f70674c7",440:"163404f983dce20259a1",444:"eebc4df9b567ec2657cd",452:"bc43a49c32355581b0bc",468:"888a98756f07304f3ed9",498:"04c19f92943ed9b4ddb9",597:"d08e416f0ccd4854221a",600:"d0d66aaabc04eac7f3a8",616:"a77417ca34a51fe13a7d",665:"a331ef321611ffbb3e89",704:"56bff0d3ef19079ea66f",741:"ddfd188cfe976cc863f1",775:"3530fba743ac26563709",826:"3f59c315d2e5d8b15ff9",895:"2bf64696de38a5e5ed38",954:"96328cc7910404deebe6",992:"3972b8e3abebd6e63caf",999:"54febe7bb96630a3013d",1020:"b190f9aca679c03b62c3",1075:"529bc3f823e6fc60cd70",1095:"d9afdc3949f8b21a7820",1130:"110ae26061868bd68c17",1161:"3aa46fb33df2aab20c02",1174:"8849a375bcccf9df44ed",1185:"9ea89afc9bce89ad80ad",1221:"89aea5a154a8cfd8fbad",1256:"3479cded7646565257ab",1258:"604b6fdb6661c6e1205e",1261:"858915f2b7f5a9a59fc3",1263:"62048be321505812ff6a",1293:"825c8594d240fbf17f20",1351:"8f38137e5b4342d2da4f",1382:"4c5c4c09ba5f63220889",1398:"951f07c7c3e07b72cca4",1402:"308402927cb1af91614e",1493:"55bdc0586c89caac178c",1568:"40f6c6e7fe72a2bc1b13",1573:"2e576b04c9b82c938093",1605:"2f7a1d1a47b76ec8c5c1",1611:"ed08f2ba8017545878d5",1862:"f169edb4a2450c249757",1877:"7dd385c6e9090a1b2734",1899:"0502b5cdba557a6ff693",1948:"73ae58351a954a5c96f0",2079:"1506fd7de5b75c690b36",2089:"6762245ee484d3ffcb17",2105:"8146230ef7c416ab6cb3",2112:"bd47c3047ff30d422b26",2229:"92b5dd2bef5c7f4c0f0c",2264:"b12e914fd5684cf329c8",2267:"1665a22356999f7d09cb",2403:"a0d676c094e2f90b5f0a",2439:"7e0114c1e26108fed2fc",2549:"b939e874d4289ca1bb4f",2646:"22d6b0b1d527d046d260",2698:"75dfd37839ade6c35680",2713:"617726f17984c3192f46",2797:"6a8bfc332a16fd0f491c",2955:"21b0680368dea0bf61c5",2983:"b85bf5c0e81e6910fa04",3036:"ea33f16b56589e7fe331",3126:"4764f4f403630edad7c5",3141:"6db0cd2a326a62903532",3187:"6802e173609e0f6b30c1",3208:"1d1e22f6771cfd2e9ef1",3232:"88df3be221f938679450",3240:"78cb567a5b91a58f0c01",3265:"edc982d88e8d399830b7",3325:"46b72d4c661fb47189a2",3496:"bbde815936f983fdf562",3544:"78f16a06c10598e0b889",3558:"a1e4af25d87548162409",3567:"ccb341a117b2ee4d5e98",3588:"461c58b164a3fc1357b1",3606:"7621f705e25335f0121d",3711:"78a94e1e858a8721ed5f",3745:"19220130e12f15e5cce8",3749:"68f7a3e5d439a23f4d89",3831:"0a48200ca8cf0d470682",3871:"79cd11ca09fe747b1bfd",3955:"03c4e9c66c2c63d79acc",3985:"d51bceddde4bd627d6c2",4139:"21f4237f0879646a0d9c",4173:"b1f037e72ea7b4cc93c6",4194:"89e3dd82524d881e7dd7",4237:"f3af87387b276d765b99",4266:"958a29639679b362fba3",4273:"827fb5197c686f0662c7",4421:"6290fd574418d5e32572",4458:"85219e9a6edf20621bea",4474:"b28a000dfeccbe1d81f3",4494:"4bf0f6b8a66ee921247f",4502:"ac0e45c6984fd9c3ac00",4572:"49cd8f3d6d6f320ed729",4579:"8164718d6dabba184b88",4625:"7c5442bc1e5598e90822",4662:"712187ae25c83dce2174",4667:"47a4c2c13ccfb09d3757",4732:"d30d055df1b3b7e84dba",4757:"124ced191b8ef59a3e2c",4758:"8546effff2a679b01358",4787:"44b90fa361a868a68471",4790:"8546d26839292e046adb",4794:"fa2a3ad4d82d3d4459fd",4797:"be22f9be14d0445f0f87",4810:"82297ac94bca3b3859d2",4817:"259525e7b455b997848a",4832:"5a592d69bbd6eff5fd66",4851:"a9ccd9b9ba2b847b6417",4972:"132e72e310c461806395",5051:"86881151df595df4d35b",5094:"00b4fe4aafbe798dface",5123:"9d063c72a9891c56cbdc",5181:"26c317d9c3baa9529fe0",5201:"0c0d33390c8cfa65fbbd",5215:"20dcf5c795803b21389a",5224:"2137b5c272446c93f5b7",5226:"43d2d046df38601d76af",5249:"8c40bbdfb03d04b29d02",5264:"764ad1c6642ad40a50d2",5281:"8b441b46691123854b6b",5330:"c3630bd2c65829e4c7a1",5335:"cbdabbf1e2d3d7e254df",5350:"a4556551303ff93cd4bb",5359:"fe8715215a93c63953ec",5367:"12541bbb82603d7e2d66",5507:"c7cdf6f84afbcf502ddb",5566:"34d4af5592bdcfc9eb41",5580:"fa964e628191e708a48e",5592:"2e19c97690b06c32f1b4",5641:"207a4252758bcd4d3cbd",5656:"4e4e396634092a04166d",5707:"2b76605f1d6e11cf2df7",5771:"3acf2091ed043492ae76",5777:"58d0e720fba584974cbf",5802:"8caa85ec5eb98cb83343",5816:"3374bb9b8c7f89ae2da0",5832:"6641ca7ff6e2a41a1257",5838:"af5789397b8a13e08c38",5962:"ed92d26f4a929fbbc564",5972:"713e574a1d9b58a2135d",5998:"cb935545042c1ce92ecb",6061:"c9b07a9f1a9bae8552b2",6126:"62a79c1241ef166355de",6150:"6d17f8394d91a097eab6",6167:"ad4ff700d252caec8ce3",6207:"17d778c7ae36315bd979",6254:"15612e9a43534ba1a97d",6303:"b8e13b4773cab5f877ee",6357:"b70dcdf0427abc91ad57",6371:"150eda30c7d4d3f90b81",6377:"6f0f091efb5ecc18dde4",6420:"12131f944d05bfbc2b3d",6447:"bfa0e245c6ade68dd3de",6486:"9801caf1364f204340c9",6507:"f00932e24ce22bd1ca3b",6579:"59f16731ccd9acdd96b3",6668:"0062637c2e307e4a2536",6682:"bdf3637ab1584c67ae30",6693:"7859419c833807d8ecc8",6758:"fc3f2d7bb3a5b8f56817",6819:"1d34427183b1bc32acfd",6871:"ee6aaef556c2b3abedbf",6883:"369bb61eda9423d64359",6968:"626e60cd5099d84de454",6981:"68a6c50b90b0d58736ad",7003:"40ed9de7bc516276c805",7183:"e16648fac64644e729c7",7245:"68eaaf3112a48224bf50",7249:"b5e7e83ac26bf4ec5fbe",7405:"2bfae0bdc72a5900199c",7460:"140aaba41af8a7b3891b",7502:"e65433dae777c734f950",7521:"26996cc765c12c03e878",7584:"76c89f632c7a8315389e",7610:"69ae28e81db50e4eb6d7",7633:"bffd99140052d0d27b12",7654:"2a756f12d13ca404a744",7716:"36cbf8b4562f9c80a2e0",7760:"7ab09485b0ef9d161fbf",7803:"7967d211212f85a80dde",7832:"fd7f701b105cdaddf11a",7850:"00845228665a5b4e5deb",7922:"034a466af79e5aec1e20",7936:"e3d58ea261a3cf40f59b",7974:"5056eeaeb6bace4afae6",7984:"aab98ca4cfcb982e0aca",7989:"e2c714d33a44d93648c0",8041:"b0b7ebae013a28bd3488",8312:"9b8eaa85fdf772d344ca",8349:"739a4da1e29881e55220",8398:"effe2e4690559c9dd638",8425:"d93b4ec64b1aced0c856",8463:"55fba49f8743cb008b18",8464:"fa6890448761f6eaa909",8491:"bc7fc77e4b9a26daf89a",8551:"ccccf6dc4ad567097d48",8623:"f3f0b0e4997f9dcf5264",8650:"0397d3d0734fd9230e1b",8656:"930c6a0cab67c68681cd",8682:"e55361dd9642ab2c6cce",8695:"794b59e83f2639bbd4f5",8701:"ac60e542441acfc7d1ff",8750:"a4875cd79305e6148ef1",8774:"bb5802cdce8676dc344e",8782:"ac827f85d048e6cfd5e0",8883:"7d0a7cd57a0e5306d21e",8924:"2b7dda01776b3d7cfd73",8970:"9662eb9aee235b45a0ba",9013:"2ae202ac00476dac5f77",9052:"bdc47b9882987a855bd3",9101:"d01b4b3b943752d35454",9109:"70032121a681b08c1ca9",9137:"a45dd8dddbbcff9eda83",9173:"305d83b6024958bf988f",9207:"5716fdaacba60c1b00fc",9305:"857144aa3240952e069c",9313:"f002dd41453444b5a5f0",9322:"4c640e97a929f739a3df",9325:"d2f1f08edbd1d07cd106",9393:"aa0534433005d1a82b09",9396:"0515a3d9012750847fd2",9452:"696071056066e32f9196",9483:"6d46e2bf0399b437ea4b",9502:"2043d9621c16783002a4",9510:"a1ded01332afd173d7e1",9558:"11464bec3d82809a0027",9622:"a6e817b0d68ef7cee2d4",9767:"9e8414a89898cf629e48",9794:"6c8b7483e1f99924e7f5",9811:"b3748ff012fc7ee520ef",9857:"169119af235c81fa0bc3",9873:"34c9f3b849b55ef12fa4",9877:"f6f5b18362ffb2b9362c"}[e]+".chunk.js",c.miniCssF=e=>(({452:"DashboardContainer",9502:"AlertList"}[e]||e)+"."+{137:"2e4eee61fdab260331a3",380:"b10c6bc15614f70674c7",452:"bc43a49c32355581b0bc",1261:"858915f2b7f5a9a59fc3",1877:"7dd385c6e9090a1b2734",3036:"ea33f16b56589e7fe331",4194:"89e3dd82524d881e7dd7",4237:"f3af87387b276d765b99",4494:"4bf0f6b8a66ee921247f",5566:"34d4af5592bdcfc9eb41",6871:"ee6aaef556c2b3abedbf",8623:"f3f0b0e4997f9dcf5264",8650:"0397d3d0734fd9230e1b",9313:"f002dd41453444b5a5f0",9502:"2043d9621c16783002a4"}[e]+".chunk.css"),c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},i="superset:",c.l=(e,t,a,r)=>{if(n[e])n[e].push(t);else{var d,o;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var u=l[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==i+a){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.setAttribute("data-webpack",i+a),d.src=e),n[e]=[t];var b=(t,a)=>{d.onerror=d.onload=null,clearTimeout(f);var i=n[e];if(delete n[e],d.parentNode&&d.parentNode.removeChild(d),i&&i.forEach((e=>e(a))),t)return t(a)},f=setTimeout(b.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=b.bind(null,d.onerror),d.onload=b.bind(null,d.onload),o&&document.head.appendChild(d)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),c.p="/static/assets/",r=e=>new Promise(((t,a)=>{var n=c.miniCssF(e),i=c.p+n;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var i=(d=a[n]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(i===e||i===t))return d}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){var d;if((i=(d=r[n]).getAttribute("data-href"))===e||i===t)return d}})(n,i))return t();((e,t,a,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=r=>{if(i.onerror=i.onload=null,"load"===r.type)a();else{var d=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=d,l.request=o,i.parentNode.removeChild(i),n(l)}},i.href=t,document.head.appendChild(i)})(e,i,t,a)})),d={7103:0},c.f.miniCss=(e,t)=>{d[e]?t.push(d[e]):0!==d[e]&&{137:1,380:1,452:1,1261:1,1877:1,3036:1,4194:1,4237:1,4494:1,5566:1,6871:1,8623:1,8650:1,9313:1,9502:1}[e]&&t.push(d[e]=r(e).then((()=>{d[e]=0}),(t=>{throw delete d[e],t})))},(()=>{var e={7103:0};c.f.j=(t,a)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else if(/^(126|687)1$/.test(t))e[t]=0;else{var i=new Promise(((a,i)=>n=e[t]=[a,i]));a.push(n[2]=i);var r=c.p+c.u(t),d=new Error;c.l(r,(a=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,n[1](d)}}),"chunk-"+t,t)}},c.H.j=t=>{if(!(c.o(e,t)&&void 0!==e[t]||/^(126|687)1$/.test(t))){e[t]=null;var a=document.createElement("link");a.charset="utf-8",c.nc&&a.setAttribute("nonce",c.nc),a.rel="preload",a.as="script",a.href=c.p+c.u(t),document.head.appendChild(a)}},c.O.j=t=>0===e[t];var t=(t,a)=>{var n,i,[r,d,o]=a,l=0;if(r.some((t=>0!==e[t]))){for(n in d)c.o(d,n)&&(c.m[n]=d[n]);if(o)var s=o(c)}for(t&&t(a);l<r.length;l++)i=r[l],c.o(e,i)&&e[i]&&e[i][0](),e[r[l]]=0;return c.O(s)},a=globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),o={468:[1216,995,876,2671,1139,8274,4489,818,452]},c.f.preload=e=>{var t=o[e];Array.isArray(t)&&t.map(c.G)},c.O(void 0,[1216,7550,2102,789,6315,7167,9308,1844,995,3166,9602,9525,5010,4113,3389,2569,9152,6052,818,7649],(()=>c(85156)));var u=c.O(void 0,[1216,7550,2102,789,6315,7167,9308,1844,995,3166,9602,9525,5010,4113,3389,2569,9152,6052,818,7649],(()=>c(40164)));u=c.O(u)})();
//# sourceMappingURL=spa.2cf955508ec350ca01ff.entry.js.map