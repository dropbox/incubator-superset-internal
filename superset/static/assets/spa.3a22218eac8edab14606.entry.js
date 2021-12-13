(()=>{var e,t,a,n,r,i,l,o,d={80760:(e,t,a)=>{var n=a(89881);e.exports=function(e,t){var a=[];return n(e,(function(e,n,r){t(e,n,r)&&a.push(e)})),a}},63105:(e,t,a)=>{var n=a(34963),r=a(80760),i=a(67206),l=a(1469);e.exports=function(e,t){return(l(e)?n:r)(e,i(t,3))}},43063:(e,t,a)=>{var n=a(34963),r=a(80760),i=a(67206),l=a(1469),o=a(94885);e.exports=function(e,t){return(l(e)?n:r)(e,o(i(t,3)))}},4756:(e,t,a)=>{"use strict";a.d(t,{J:()=>r});var n=a(67294);const r=e=>{(0,n.useEffect)(e,[])}},19259:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(67294),r=a(17198),i=a(11965);function l(e){let{title:t,description:a,onConfirm:l,children:o}=e;const[d,s]=(0,n.useState)(!1),[c,u]=(0,n.useState)([]),b=()=>{s(!1),u([])};return(0,i.tZ)(n.Fragment,null,null==o?void 0:o((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t.forEach((e=>{e&&("function"==typeof e.persist&&e.persist(),"function"==typeof e.preventDefault&&e.preventDefault(),"function"==typeof e.stopPropagation&&e.stopPropagation())})),s(!0),u(t)})),(0,i.tZ)(r.Z,{description:a,onConfirm:()=>{l(...c),b()},onHide:b,open:d,title:t}))}},21742:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var n=a(11965),r=a(67294),i=a(51995),l=a(4715),o=a(58593),d=a(4144),s=a(79789);const c=i.iK.div`
  width: 64px;
  display: flex;
  justify-content: flex-end;
`,u=(0,i.iK)(l.Ak)`
  ${e=>{let{theme:t}=e;return`\n    border: 1px solid ${t.colors.grayscale.light2};\n    border-radius: ${t.gridUnit}px;\n    overflow: hidden;\n\n    .ant-card-body {\n      padding: ${4*t.gridUnit}px\n        ${2*t.gridUnit}px;\n    }\n    .ant-card-meta-detail > div:not(:last-child) {\n      margin-bottom: 0;\n    }\n    .gradient-container {\n      position: relative;\n      height: 100%;\n    }\n    &:hover {\n      box-shadow: 8px 8px 28px 0px ${t.colors.grayscale.light1};\n      transition: box-shadow ${t.transitionTiming}s ease-in-out;\n\n      .cover-footer {\n        transform: translateY(0);\n      }\n    }\n  `}}
`,b=i.iK.div`
  height: 264px;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  overflow: hidden;

  .cover-footer {
    transform: translateY(${e=>{let{theme:t}=e;return 9*t.gridUnit}}px);
    transition: ${e=>{let{theme:t}=e;return t.transitionTiming}}s ease-out;
  }
`,h=i.iK.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .card-actions {
    margin-left: auto;
    align-self: flex-end;
    padding-left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    span[role='img'] {
      display: flex;
      align-items: center;
    }
  }

  .titleRow {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
  }
`,f=i.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  & a {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}} !important;
  }
`,m=i.iK.span`
  position: absolute;
  right: -1px;
  bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,p=i.iK.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  top: -${e=>{let{theme:t}=e;return 9*t.gridUnit}}px;
  padding: 0 8px;
`,g=i.iK.div`
  flex: 1;
  overflow: hidden;
`,v=i.iK.div`
  align-self: flex-end;
  margin-left: auto;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`,Z=(0,i.iK)(l.Od)`
  h3 {
    margin: ${e=>{let{theme:t}=e;return t.gridUnit}}px 0;
  }

  ul {
    margin-bottom: 0;
  }
`,y={rows:1,width:150},w=e=>{let{to:t,children:a}=e;return(0,n.tZ)("a",{href:t},a)};function C(e){let{title:t,subtitle:a,url:c,linkComponent:C,titleRight:_,imgURL:x,imgFallbackURL:k,description:S,coverLeft:F,coverRight:T,actions:$,avatar:E,loading:I,imgPosition:N="top",cover:D,certifiedBy:P,certificationDetails:z}=e;const U=c&&C?C:w,R=(0,i.Fg)();return(0,n.tZ)(u,{cover:D||(0,n.tZ)(b,null,(0,n.tZ)(U,{to:c},(0,n.tZ)("div",{className:"gradient-container"},(0,n.tZ)(d.Z,{src:x||"",fallback:k||"",isLoading:I,position:N}))),(0,n.tZ)(p,{className:"cover-footer"},!I&&F&&(0,n.tZ)(g,null,F),!I&&T&&(0,n.tZ)(v,null,T)))},I&&(0,n.tZ)(l.Ak.Meta,{title:(0,n.tZ)(r.Fragment,null,(0,n.tZ)(h,null,(0,n.tZ)(l.Od.Input,{active:!0,size:"small",css:(0,n.iv)({width:Math.trunc(62.5*R.gridUnit)},"","")}),(0,n.tZ)("div",{className:"card-actions"},(0,n.tZ)(l.Od.Button,{active:!0,shape:"circle"})," ",(0,n.tZ)(l.Od.Button,{active:!0,css:(0,n.iv)({width:10*R.gridUnit},"","")})))),description:(0,n.tZ)(Z,{round:!0,active:!0,title:!1,paragraph:y})}),!I&&(0,n.tZ)(l.Ak.Meta,{title:(0,n.tZ)(h,null,a||null,(0,n.tZ)("div",{className:"titleRow"},(0,n.tZ)(o.u,{title:t},(0,n.tZ)(f,null,P&&(0,n.tZ)(r.Fragment,null,(0,n.tZ)(s.Z,{certifiedBy:P,details:z})," "),t)),_&&(0,n.tZ)(m,null,_),(0,n.tZ)("div",{className:"card-actions"},$))),description:S,avatar:E||null}))}C.Actions=c;const _=C},83673:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var n=a(67294),r=a(74069),i=a(9875),l=a(35932),o=a(4715),d=a(15926),s=a.n(d),c=a(51995),u=a(55867),b=a(31069),h=a(93185),f=a(98286),m=a(14114),p=a(60718),g=a(48273),v=a(11965);const Z=o.qz.Item,y=(0,c.iK)(o.qz.Item)`
  margin-bottom: 0;
`,w=c.iK.span`
  margin-bottom: 0;
`;var C={name:"1blj7km",styles:"margin-top:1em"};const _=(0,m.ZP)((function(e){let{slice:t,onHide:a,onSave:d,show:c,addSuccessToast:m}=e;const[_,x]=(0,n.useState)(!1),[k]=o.qz.useForm(),[S,F]=(0,n.useState)(t.slice_name||""),[T,$]=(0,n.useState)(null),[E,I]=(0,n.useState)([]),N=(0,n.useMemo)((()=>E.map((e=>({value:e.name,label:e.name,key:e.name})))),[E.length]);function D(e){let{error:t,statusText:a,message:n}=e,i=t||a||(0,u.t)("An error has occurred");"Forbidden"===n&&(i=(0,u.t)("You do not have permission to edit this chart")),r.Z.error({title:(0,u.t)("Error"),content:i,okButtonProps:{danger:!0,className:"btn-danger"}})}const P=(0,n.useCallback)((async function(){try{var e;const a=(await b.Z.get({endpoint:`/api/v1/chart/${t.slice_id}`})).json.result;$(null==a||null==(e=a.owners)?void 0:e.map((e=>({value:e.id,label:`${e.first_name} ${e.last_name}`}))))}catch(e){D(await(0,f.O$)(e))}}),[t.slice_id]),z=(0,n.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const n=s().encode({filter:e,page:t,page_size:a});return b.Z.get({endpoint:`/api/v1/chart/related/owners?q=${n}`}).then((e=>({data:e.json.result.filter((e=>e.extra.active)).map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),U=(0,u.t)("Owners");return(0,n.useEffect)((()=>{P()}),[P]),(0,n.useEffect)((()=>{F(t.slice_name||"")}),[t.slice_name]),(0,n.useEffect)((()=>{if((0,h.c)(h.T.TAGGING_SYSTEM))try{(0,g.$3)({objectType:g.g.CHART,objectId:t.slice_id,includeTypes:!1},(e=>I(e)),(e=>{D(e)}))}catch(e){D(e)}}),[t.slice_id]),(0,v.tZ)(r.Z,{show:c,onHide:a,title:(0,u.t)("Edit Chart Properties"),footer:(0,v.tZ)(n.Fragment,null,(0,v.tZ)(l.Z,{htmlType:"button",buttonSize:"small",onClick:a,cta:!0},(0,u.t)("Cancel")),(0,v.tZ)(l.Z,{htmlType:"submit",buttonSize:"small",buttonStyle:"primary",onClick:k.submit,disabled:_||!S||t.is_managed_externally,tooltip:t.is_managed_externally?(0,u.t)("This chart is managed externally, and can't be edited in Superset"):"",cta:!0},(0,u.t)("Save"))),responsive:!0,wrapProps:{"data-test":"properties-edit-modal"}},(0,v.tZ)(o.qz,{form:k,onFinish:async e=>{x(!0);const{certified_by:n,certification_details:r,description:i,cache_timeout:l}=e,o={slice_name:S||null,description:i||null,cache_timeout:l||null,certified_by:n||null,certification_details:n&&r?r:null};if(T&&(o.owners=T.map((e=>e.value))),(0,h.c)(h.T.TAGGING_SYSTEM))try{(0,g.$3)({objectType:g.g.CHART,objectId:t.slice_id,includeTypes:!1},(e=>{return a=e,(n=E).map((e=>{a.some((t=>t.name===e.name))||(0,g._U)({objectType:g.g.CHART,objectId:t.slice_id,includeTypes:!1},e.name,(()=>{}),(()=>{}))})),void a.map((e=>{n.some((t=>t.name===e.name))||(0,g.OY)({objectType:g.g.CHART,objectId:t.slice_id},e,(()=>{}),(()=>{}))}));var a,n}),(e=>{D(e)}))}catch(e){D(e)}try{const e=await b.Z.put({endpoint:`/api/v1/chart/${t.slice_id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),n={...o,...e.json.result,tags:E,id:t.slice_id,owners:T};d(n),m((0,u.t)("Chart properties updated")),a()}catch(e){D(await(0,f.O$)(e))}x(!1)},layout:"vertical",initialValues:{name:t.slice_name||"",description:t.description||"",cache_timeout:null!=t.cache_timeout?t.cache_timeout:"",certified_by:t.certified_by||"",certification_details:t.certified_by&&t.certification_details?t.certification_details:""}},(0,v.tZ)(o.X2,{gutter:16},(0,v.tZ)(o.JX,{xs:24,md:12},(0,v.tZ)("h3",null,(0,u.t)("Basic information")),(0,v.tZ)(Z,{label:(0,u.t)("Name"),required:!0},(0,v.tZ)(i.II,{"aria-label":(0,u.t)("Name"),name:"name",type:"text",value:S,onChange:e=>{var t;return F(null!=(t=e.target.value)?t:"")}})),(0,v.tZ)(Z,null,(0,v.tZ)(y,{label:(0,u.t)("Description"),name:"description"},(0,v.tZ)(i.Kx,{rows:3,style:{maxWidth:"100%"}})),(0,v.tZ)(w,{className:"help-block"},(0,u.t)("The description can be displayed as widget headers in the dashboard view. Supports markdown."))),(0,v.tZ)("h3",null,(0,u.t)("Certification")),(0,v.tZ)(Z,null,(0,v.tZ)(y,{label:(0,u.t)("Certified by"),name:"certified_by"},(0,v.tZ)(i.II,{"aria-label":(0,u.t)("Certified by")})),(0,v.tZ)(w,{className:"help-block"},(0,u.t)("Person or group that has certified this chart."))),(0,v.tZ)(Z,null,(0,v.tZ)(y,{label:(0,u.t)("Certification details"),name:"certification_details"},(0,v.tZ)(i.II,{"aria-label":(0,u.t)("Certification details")})),(0,v.tZ)(w,{className:"help-block"},(0,u.t)("Any additional detail to show in the certification tooltip.")))),(0,v.tZ)(o.JX,{xs:24,md:12},(0,v.tZ)("h3",null,(0,u.t)("Configuration")),(0,v.tZ)(Z,null,(0,v.tZ)(y,{label:(0,u.t)("Cache timeout"),name:"cache_timeout"},(0,v.tZ)(i.II,{"aria-label":"Cache timeout"})),(0,v.tZ)(w,{className:"help-block"},(0,u.t)("Duration (in seconds) of the caching timeout for this chart. Set to -1 to bypass the cache. Note this defaults to the dataset's timeout if undefined."))),(0,v.tZ)("h3",{style:{marginTop:"1em"}},(0,u.t)("Access")),(0,v.tZ)(Z,{label:U},(0,v.tZ)(o.qb,{ariaLabel:U,mode:"multiple",name:"owners",value:T||[],onChange:$,options:z,disabled:!T,allowClear:!0}),(0,v.tZ)(w,{className:"help-block"},(0,u.t)("A list of users who can alter the chart. Searchable by name or username."))),(0,h.c)(h.T.TAGGING_SYSTEM)&&(0,v.tZ)("h3",{css:C},(0,u.t)("Tags")),(0,h.c)(h.T.TAGGING_SYSTEM)&&(0,v.tZ)(Z,null,(0,v.tZ)(o.qb,{ariaLabel:"Tags",mode:"multiple",allowNewOptions:!0,value:N,options:p.m,onChange:e=>{const t=[...new Set(e.map((e=>e.label)))];I([...t.map((e=>({name:e})))])},onClear:()=>{I([])},allowClear:!0}),(0,v.tZ)(w,{className:"help-block"},(0,u.t)("A list of tags that have been applied to this chart.")))))))}))},8494:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(67294),r=a(93185),i=a(51995),l=a(55867),o=a(16550),d=a(73727),s=a(91877),c=a(19259),u=a(70163),b=a(21742),h=a(37921),f=a(4715),m=a(83862),p=a(36674),g=a(34581),v=a(40768),Z=a(11965);function y(e){let{chart:t,hasPerm:a,openChartEditModal:y,bulkSelectEnabled:w,addDangerToast:C,addSuccessToast:_,refreshData:x,loading:k,showThumbnails:S,saveFavoriteStatus:F,favoriteStatus:T,chartFilter:$,userId:E,handleBulkChartExport:I}=e;const N=(0,o.k6)(),D=a("can_write"),P=a("can_write"),z=a("can_export")&&(0,s.c)(r.T.VERSIONED_EXPORT),U=(0,i.Fg)(),R=(0,Z.tZ)(m.v,null,P&&(0,Z.tZ)(m.v.Item,null,(0,Z.tZ)(c.Z,{title:(0,l.t)("Please confirm"),description:(0,Z.tZ)(n.Fragment,null,(0,l.t)("Are you sure you want to delete")," ",(0,Z.tZ)("b",null,t.slice_name),"?"),onConfirm:()=>(0,v.Gm)(t,_,C,x,$,E)},(e=>(0,Z.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,Z.tZ)(u.Z.Trash,{iconSize:"l"})," ",(0,l.t)("Delete"))))),z&&(0,Z.tZ)(m.v.Item,null,(0,Z.tZ)("div",{role:"button",tabIndex:0,onClick:()=>I([t])},(0,Z.tZ)(u.Z.Share,{iconSize:"l"})," ",(0,l.t)("Export"))),D&&(0,Z.tZ)(m.v.Item,null,(0,Z.tZ)("div",{role:"button",tabIndex:0,onClick:()=>y(t)},(0,Z.tZ)(u.Z.EditAlt,{iconSize:"l"})," ",(0,l.t)("Edit"))));return(0,Z.tZ)(v.ZB,{onClick:()=>{!w&&t.url&&N.push(t.url)}},(0,Z.tZ)(b.Z,{loading:k,title:t.slice_name,certifiedBy:t.certified_by,certificationDetails:t.certification_details,cover:(0,s.c)(r.T.THUMBNAILS)&&S?null:(0,Z.tZ)(n.Fragment,null),url:w?void 0:t.url,imgURL:t.thumbnail_url||"",imgFallbackURL:"/static/assets/images/chart-card-fallback.svg",description:(0,l.t)("Modified %s",t.changed_on_delta_humanized),coverLeft:(0,Z.tZ)(g.Z,{users:t.owners||[]}),coverRight:(0,Z.tZ)(h.Z,{type:"secondary"},t.datasource_name_text),linkComponent:d.rU,actions:(0,Z.tZ)(b.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},E&&(0,Z.tZ)(p.Z,{itemId:t.id,saveFaveStar:F,isStarred:T}),(0,Z.tZ)(f.Gj,{overlay:R},(0,Z.tZ)(u.Z.MoreVert,{iconColor:U.colors.grayscale.base})))}))}},65043:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var n=a(67294),r=a(16550),i=a(73727),l=a(51995),o=a(55867),d=a(93185),s=a(91877),c=a(40768),u=a(4715),b=a(83862),h=a(21742),f=a(70163),m=a(37921),p=a(34581),g=a(36674),v=a(11965);const Z=function(e){let{dashboard:t,hasPerm:a,bulkSelectEnabled:Z,userId:y,openDashboardEditModal:w,favoriteStatus:C,saveFavoriteStatus:_,showThumbnails:x,handleBulkDashboardExport:k,onDelete:S}=e;const F=(0,r.k6)(),T=a("can_write"),$=a("can_write"),E=a("can_export"),I=(0,l.Fg)(),N=(0,v.tZ)(b.v,null,T&&w&&(0,v.tZ)(b.v.Item,null,(0,v.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:()=>null==w?void 0:w(t)},(0,v.tZ)(f.Z.EditAlt,{iconSize:"l"})," ",(0,o.t)("Edit"))),E&&(0,v.tZ)(b.v.Item,null,(0,v.tZ)("div",{role:"button",tabIndex:0,onClick:()=>k([t]),className:"action-button"},(0,v.tZ)(f.Z.Share,{iconSize:"l"})," ",(0,o.t)("Export"))),$&&(0,v.tZ)(b.v.Item,null,(0,v.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:()=>S(t)},(0,v.tZ)(f.Z.Trash,{iconSize:"l"})," ",(0,o.t)("Delete"))));return(0,v.tZ)(c.ZB,{onClick:()=>{Z||F.push(t.url)}},(0,v.tZ)(h.Z,{loading:t.loading||!1,title:t.dashboard_title,certifiedBy:t.certified_by,certificationDetails:t.certification_details,titleRight:(0,v.tZ)(m.Z,null,t.published?(0,o.t)("published"):(0,o.t)("draft")),cover:(0,s.c)(d.T.THUMBNAILS)&&x?null:(0,v.tZ)(n.Fragment,null),url:Z?void 0:t.url,linkComponent:i.rU,imgURL:t.thumbnail_url,imgFallbackURL:"/static/assets/images/dashboard-card-fallback.svg",description:(0,o.t)("Modified %s",t.changed_on_delta_humanized),coverLeft:(0,v.tZ)(p.Z,{users:t.owners||[]}),actions:(0,v.tZ)(h.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},y&&(0,v.tZ)(g.Z,{itemId:t.id,saveFaveStar:_,isStarred:C}),(0,v.tZ)(u.Gj,{overlay:N},(0,v.tZ)(f.Z.MoreVert,{iconColor:I.colors.grayscale.base})))}))}},86074:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});var n=a(23279),r=a.n(n),i=a(67294),l=a(16550),o=a(73727),d=a(51995),s=a(11965),c=a(55867),u=a(94184),b=a.n(u),h=a(58593),f=a(4715),m=a(83862),p=a(35932),g=a(70163);const v=d.iK.div`
  margin-bottom: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  .header {
    font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
    margin-right: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
    text-align: left;
    font-size: 18px;
    padding: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
    display: inline-block;
    line-height: ${e=>{let{theme:t}=e;return 9*t.gridUnit}}px;
  }
  .nav-right {
    display: flex;
    align-items: center;
    padding: ${e=>{let{theme:t}=e;return 3.5*t.gridUnit}}px 0;
    margin-right: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
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
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
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
      padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px 0px;
    }
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0 ${e=>{let{theme:t}=e;return t.gridUnit+1}}px;
  }

  .menu .ant-menu-item {
    li,
    div {
      a,
      div {
        font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
        color: ${e=>{let{theme:t}=e;return t.colors.secondary.dark1}};

        a {
          margin: 0;
          padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px
            ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
          line-height: ${e=>{let{theme:t}=e;return 5*t.gridUnit}}px;

          &:hover {
            text-decoration: none;
          }
        }
      }

      &.no-router a {
        padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px
          ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
      }

      &.active a {
        background: ${e=>{let{theme:t}=e;return t.colors.secondary.light4}};
        border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
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
      background: ${e=>{let{theme:t}=e;return t.colors.secondary.light4}};
      border-bottom: none;
      border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
      margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
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
      margin-left: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    }
  }
  .ant-menu-submenu {
    span[role='img'] {
      position: absolute;
      right: ${e=>{let{theme:t}=e;return-t.gridUnit-2}}px;
      top: ${e=>{let{theme:t}=e;return t.gridUnit+1}}px !important;
    }
  }
  .dropdown-menu-links > div.ant-menu-submenu-title,
  .ant-menu-submenu-open.ant-menu-submenu-active > div.ant-menu-submenu-title {
    color: ${e=>{let{theme:t}=e;return t.colors.primary.dark1}};
  }
`,Z=e=>s.iv`
  color: ${e.colors.grayscale.light1};

  .ant-menu-item-active {
    color: ${e.colors.grayscale.light1};
    cursor: default;
  }
`,{SubMenu:y}=m.$,w=e=>{var t,a,n;const[d,u]=(0,i.useState)("horizontal"),[w,C]=(0,i.useState)("nav-right");let _=!0;try{(0,l.k6)()}catch(e){_=!1}return(0,i.useEffect)((()=>{function t(){window.innerWidth<=767?u("inline"):u("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?C("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&C("nav-right-collapse")}t();const a=r()(t,10);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}),[e.buttons]),(0,s.tZ)(v,null,(0,s.tZ)(f.X2,{className:"menu",role:"navigation"},e.name&&(0,s.tZ)("div",{className:"header"},e.name),(0,s.tZ)(m.v,{mode:d,style:{backgroundColor:"transparent"}},null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||_)&&t.usesRouter?(0,s.tZ)(m.v.Item,{key:t.label},(0,s.tZ)("div",{role:"tab",className:t.name===e.activeChild?"active":""},(0,s.tZ)("div",null,(0,s.tZ)(o.rU,{to:t.url||""},t.label)))):(0,s.tZ)(m.v.Item,{key:t.label},(0,s.tZ)("div",{className:b()("no-router",{active:t.name===e.activeChild}),role:"tab"},(0,s.tZ)("a",{href:t.url,onClick:t.onClick},t.label)))))),(0,s.tZ)("div",{className:w},(0,s.tZ)(m.v,{mode:"horizontal",triggerSubMenuAction:"click"},null==(a=e.dropDownLinks)?void 0:a.map(((e,t)=>{var a;return(0,s.tZ)(y,{key:t,title:e.label,icon:(0,s.tZ)(g.Z.TriangleDown,null),popupOffset:[10,20],className:"dropdown-menu-links"},null==(a=e.childs)?void 0:a.map((e=>"object"==typeof e?e.disable?(0,s.tZ)(m.$.Item,{key:e.label,css:Z},(0,s.tZ)(h.u,{placement:"top",title:(0,c.t)("Enable 'Allow file uploads to database' in any database's settings")},e.label)):(0,s.tZ)(m.$.Item,{key:e.label},(0,s.tZ)("a",{href:e.url},e.label)):null)))}))),null==(n=e.buttons)?void 0:n.map(((e,t)=>(0,s.tZ)(p.Z,{key:t,buttonStyle:e.buttonStyle,onClick:e.onClick},e.name))))),e.children)}},32228:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(89816),r=a(15926),i=a.n(r),l=a(14670),o=a.n(l);function d(e,t,a,r){void 0===r&&(r=200);const l=o().generate(),d=`/api/v1/${e}/export/?q=${i().encode(t)}&token=${l}`,s=document.createElement("iframe");s.style.display="none",s.src=d,document.body.appendChild(s);const c=window.setInterval((()=>{"done"===(0,n.Z)()[l]&&(window.clearInterval(c),document.body.removeChild(s),a())}),r)}},22562:(e,t,a)=>{"use strict";var n=a(67294),r=a(90731),i=a(5872),l=a.n(i),o=a(16550),d=a(73727),s=a(14890),c=a(31405),u=a(57902),b=a(38703),h=a(85198),f=a(20292),m=a(5667),p=a(38552),g=a(56242),v=a(93185),Z=a(43063),y=a.n(Z),w=a(75049),C=a(51995),_=a(55867),x=a(15926),k=a.n(x),S=a(43700),F=a(61337),T=a(21742),$=a(14114),E=a(40768),I=a(91877),N=a(4715),D=a(12),P=a(86074),z=a(22318),U=a(78580),R=a.n(U),A=a(30381),O=a.n(A),L=a(70163),M=a(35932),q=a(39589),j=a(11965);const B={[q.g.Charts]:(0,_.t)("charts"),[q.g.Dashboards]:(0,_.t)("dashboards"),[q.g.Recents]:(0,_.t)("recents"),[q.g.SavedQueries]:(0,_.t)("saved queries")},V={[q.g.Charts]:(0,_.t)("No charts yet"),[q.g.Dashboards]:(0,_.t)("No dashboards yet"),[q.g.Recents]:(0,_.t)("No recents yet"),[q.g.SavedQueries]:(0,_.t)("No saved queries yet")},H={[q.g.Charts]:e=>(0,_.t)("%(other)s charts will appear here",{other:e}),[q.g.Dashboards]:e=>(0,_.t)("%(other)s dashboards will appear here",{other:e}),[q.g.Recents]:e=>(0,_.t)("%(other)s recents will appear here",{other:e}),[q.g.SavedQueries]:e=>(0,_.t)("%(other)s saved queries will appear here",{other:e})},K=C.iK.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`,G=C.iK.div`
  Button {
    svg {
      color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
    }
  }
`;function Q(e){let{tableName:t,tab:a,otherTabTitle:n}=e;const r={[q.g.Charts]:"/chart/add",[q.g.Dashboards]:"/dashboard/new",[q.g.SavedQueries]:"/superset/sqllab?new=true"},i={[q.g.Charts]:"/chart/list",[q.g.Dashboards]:"/dashboard/list/",[q.g.SavedQueries]:"/savedqueryview/list/"},l={[q.g.Charts]:"empty-charts.svg",[q.g.Dashboards]:"empty-dashboard.svg",[q.g.Recents]:"union.svg",[q.g.SavedQueries]:"empty-queries.svg"},o=(0,j.tZ)("span",null,V[t]),d=(0,j.tZ)("span",{className:"no-recents"},(()=>{if(a===D.F.Viewed)return(0,_.t)("Recently viewed charts, dashboards, and saved queries will appear here");if(a===D.F.Created)return(0,_.t)("Recently created charts, dashboards, and saved queries will appear here");if(a===D.F.Other){const e=n||(0,_.t)("Other");return H[t](e)}return a===D.F.Edited?(0,_.t)("Recently edited charts, dashboards, and saved queries will appear here"):null})());return a===D.F.Mine||t===q.g.Recents||a===D.F.Other?(0,j.tZ)(K,null,(0,j.tZ)(N.HY,{image:`/static/assets/images/${l[t]}`,description:t===q.g.Recents||a===D.F.Other?d:o},t!==q.g.Recents&&(0,j.tZ)(G,null,(0,j.tZ)(M.Z,{buttonStyle:"primary",onClick:()=>{window.location.href=r[t]}},(0,j.tZ)("i",{className:"fa fa-plus"}),t===q.g.SavedQueries?(0,_.t)("SQL query"):t.split("").slice(0,t.length-1).join(""))))):(0,j.tZ)(K,null,(0,j.tZ)(N.HY,{image:"/static/assets/images/star-circle.svg",description:(0,j.tZ)("span",{className:"no-favorites"},(0,_.t)("You don't have any favorites yet!"))},(0,j.tZ)(M.Z,{buttonStyle:"primary",onClick:()=>{window.location.href=i[t]}},(0,_.t)("See all %(tableName)s",{tableName:t===q.g.SavedQueries?(0,_.t)("SQL Lab queries"):B[t]}))))}const Y=C.iK.div`
  .recentCards {
    max-height: none;
    grid-gap: ${e=>{let{theme:t}=e;return 4*t.gridUnit+"px"}};
  }
`,W=(0,_.t)("[Untitled]"),J=(0,_.t)("Unknown"),X=e=>"dashboard_title"in e?e.dashboard_title||W:"slice_name"in e?e.slice_name||W:"label"in e?e.label||W:e.item_title||W,ee=e=>{if("sql"in e)return(0,j.tZ)(L.Z.Sql,null);const t="item_url"in e?e.item_url:e.url;return null!=t&&R()(t).call(t,"dashboard")?(0,j.tZ)(L.Z.NavDashboard,null):null!=t&&R()(t).call(t,"explore")?(0,j.tZ)(L.Z.NavCharts,null):null};function te(e){var t;let{activeChild:a,setActiveChild:r,activityData:i,user:l,isFetchingActivityData:o}=e;const[s,c]=(0,n.useState)(),[u,b]=(0,n.useState)(!1);(0,n.useEffect)((()=>{a===D.F.Edited&&(b(!0),(0,E.Ld)(l.userId).then((e=>{c([...e.editedChart,...e.editedDash]),b(!1)})))}),[a]);const h=[{name:D.F.Edited,label:(0,_.t)("Edited"),onClick:()=>{r(D.F.Edited),(0,F.LS)(F.dR.homepage_activity_filter,D.F.Edited)}},{name:D.F.Created,label:(0,_.t)("Created"),onClick:()=>{r(D.F.Created),(0,F.LS)(F.dR.homepage_activity_filter,D.F.Created)}}];return null!=i&&i[D.F.Viewed]&&h.unshift({name:D.F.Viewed,label:(0,_.t)("Viewed"),onClick:()=>{r(D.F.Viewed),(0,F.LS)(F.dR.homepage_activity_filter,D.F.Viewed)}}),u&&!s||o?(0,j.tZ)(Fe,null):(0,j.tZ)(Y,null,(0,j.tZ)(P.Z,{activeChild:a,tabs:h}),(null==(t=i[a])?void 0:t.length)>0||a===D.F.Edited&&null!=s&&s.length?(0,j.tZ)(E._L,{className:"recentCards"},(a===D.F.Edited?s:i[a]).map((e=>{const t=(e=>"sql"in e?`/superset/sqllab?savedQueryId=${e.id}`:"url"in e?e.url:e.item_url)(e),a=(e=>{if("time"in e)return(0,_.t)("Viewed %s",O()(e.time).fromNow());let t;return"changed_on"in e&&(t=e.changed_on),"changed_on_utc"in e&&(t=e.changed_on_utc),(0,_.t)("Modified %s",null==t?J:O()(t).fromNow())})(e);return(0,j.tZ)(E.ZB,{key:t},(0,j.tZ)(d.rU,{to:t},(0,j.tZ)(T.Z,{cover:(0,j.tZ)(n.Fragment,null),url:t,title:X(e),description:a,avatar:ee(e),actions:null})))}))):(0,j.tZ)(Q,{tableName:q.g.Recents,tab:a}))}var ae=a(63105),ne=a.n(ae),re=a(34858),ie=a(83673),le=a(8494),oe=a(32228);const de=(0,$.ZP)((function(e){let{user:t,addDangerToast:a,addSuccessToast:r,mine:i,showThumbnails:l,otherTabData:d,otherTabFilters:s,otherTabTitle:c}=e;const h=(0,o.k6)(),f=(0,F.rV)(F.dR.homepage_chart_filter,D.F.Other),m=ne()(d,(e=>"viz_type"in e)),{state:{loading:p,resourceCollection:g,bulkSelectEnabled:v},setResourceCollection:Z,hasPerm:y,refreshData:w,fetchData:C}=(0,re.Yi)("chart",(0,_.t)("chart"),a,!0,f===D.F.Mine?i:m,[],!1),x=(0,n.useMemo)((()=>g.map((e=>e.id))),[g]),[k,S]=(0,re.NE)("chart",x,a),{sliceCurrentlyEditing:T,openChartEditModal:$,handleChartUpdated:I,closeChartEditModal:N}=(0,re.fF)(Z,g),[z,U]=(0,n.useState)(f),[R,A]=(0,n.useState)(!1),[O,L]=(0,n.useState)(!1);(0,n.useEffect)((()=>{var e;(O||z===D.F.Favorite)&&(e=z,C({pageIndex:0,pageSize:E.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:(0,E.if)(e,q.g.Charts,t,s)})),L(!0)}),[z]);const M=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,oe.Z)("chart",t,(()=>{A(!1)})),A(!0)},B=[{name:D.F.Favorite,label:(0,_.t)("Favorite"),onClick:()=>{U(D.F.Favorite),(0,F.LS)(F.dR.homepage_chart_filter,D.F.Favorite)}},{name:D.F.Mine,label:(0,_.t)("Mine"),onClick:()=>{U(D.F.Mine),(0,F.LS)(F.dR.homepage_chart_filter,D.F.Mine)}}];return d&&B.push({name:D.F.Other,label:c,onClick:()=>{U(D.F.Other),(0,F.LS)(F.dR.homepage_chart_filter,D.F.Other)}}),p?(0,j.tZ)(Fe,{cover:l}):(0,j.tZ)(u.Z,null,T&&(0,j.tZ)(ie.Z,{onHide:N,onSave:I,show:!0,slice:T}),(0,j.tZ)(P.Z,{activeChild:z,tabs:B,buttons:[{name:(0,j.tZ)(n.Fragment,null,(0,j.tZ)("i",{className:"fa fa-plus"}),(0,_.t)("Chart")),buttonStyle:"tertiary",onClick:()=>{window.location.assign("/chart/add")}},{name:(0,_.t)("View All »"),buttonStyle:"link",onClick:()=>{const e=z===D.F.Favorite?`/chart/list/?filters=(favorite:(label:${(0,_.t)("Yes")},value:!t))`:"/chart/list/";h.push(e)}}]}),null!=g&&g.length?(0,j.tZ)(E._L,{showThumbnails:l},g.map((e=>(0,j.tZ)(le.Z,{key:`${e.id}`,openChartEditModal:$,chartFilter:z,chart:e,userId:null==t?void 0:t.userId,hasPerm:y,showThumbnails:l,bulkSelectEnabled:v,refreshData:w,addDangerToast:a,addSuccessToast:r,favoriteStatus:S[e.id],saveFavoriteStatus:k,handleBulkChartExport:M})))):(0,j.tZ)(Q,{tableName:q.g.Charts,tab:z,otherTabTitle:c}),R&&(0,j.tZ)(b.Z,null))}));var se=a(31069),ce=a(42110),ue=a(33743),be=a(120),he=a(83862),fe=a(17198);ce.Z.registerLanguage("sql",ue.Z);const me=C.iK.div`
  cursor: pointer;
  a {
    text-decoration: none;
  }
  .ant-card-cover {
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    & > div {
      height: 171px;
    }
  }
  .gradient-container > div {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${e=>{let{theme:t}=e;return t.colors.secondary.light3}};
    display: inline-block;
    width: 100%;
    height: 179px;
    background-repeat: no-repeat;
    vertical-align: middle;
  }
`,pe=C.iK.div`
  svg {
    margin-left: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;
  }
  .query-title {
    padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit+2}}px;
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
  }
`,ge=C.iK.div`
  pre {
    height: ${e=>{let{theme:t}=e;return 40*t.gridUnit}}px;
    border: none !important;
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}} !important;
    overflow: hidden;
    padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px !important;
  }
`,ve=(0,$.ZP)((e=>{let{user:t,addDangerToast:a,addSuccessToast:r,mine:i,showThumbnails:l,featureFlag:o}=e;const{state:{loading:d,resourceCollection:s},hasPerm:c,fetchData:u,refreshData:b}=(0,re.Yi)("saved_query",(0,_.t)("query"),a,!0,i,[],!1),[h,f]=(0,n.useState)(D.F.Mine),[m,p]=(0,n.useState)(!1),[g,v]=(0,n.useState)({}),[Z,y]=(0,n.useState)(!0),w=c("can_edit"),x=c("can_delete"),k=(0,C.Fg)();return d?(0,j.tZ)(Fe,{cover:l}):(0,j.tZ)(n.Fragment,null,m&&(0,j.tZ)(fe.Z,{description:(0,_.t)("This action will permanently delete the saved query."),onConfirm:()=>{m&&(e=>{let{id:n,label:i}=e;se.Z.delete({endpoint:`/api/v1/saved_query/${n}`}).then((()=>{const e={filters:(0,E.if)(D.F.Created,q.g.SavedQueries,t),pageSize:E.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],pageIndex:0};b(Z?e:void 0),y(!1),p(!1),r((0,_.t)("Deleted: %s",i))}),(0,E.v$)((e=>a((0,_.t)("There was an issue deleting %s: %s",i,e)))))})(g)},onHide:()=>{p(!1)},open:!0,title:(0,_.t)("Delete Query?")}),(0,j.tZ)(P.Z,{activeChild:h,tabs:[{name:D.F.Mine,label:(0,_.t)("Mine"),onClick:()=>{return(e=D.F.Mine,u({pageIndex:0,pageSize:E.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:(0,E.if)(e,q.g.SavedQueries,t)})).then((()=>f(D.F.Mine)));var e}}],buttons:[{name:(0,j.tZ)(n.Fragment,null,(0,j.tZ)("i",{className:"fa fa-plus"}),(0,_.t)("SQL Query")),buttonStyle:"tertiary",onClick:()=>{window.location.href="/superset/sqllab?new=true"}},{name:(0,_.t)("View All »"),buttonStyle:"link",onClick:()=>{window.location.href="/savedqueryview/list"}}]}),s.length>0?(0,j.tZ)(E._L,{showThumbnails:l},s.map((e=>{var t,i,d;return(0,j.tZ)(me,{onClick:()=>{window.location.href=`/superset/sqllab?savedQueryId=${e.id}`},key:e.id},(0,j.tZ)(T.Z,{imgURL:"",url:`/superset/sqllab?savedQueryId=${e.id}`,title:e.label,imgFallbackURL:"/static/assets/images/empty-query.svg",description:(0,_.t)("Ran %s",e.changed_on_delta_humanized),cover:null!=e&&null!=(t=e.sql)&&t.length&&l&&o?(0,j.tZ)(ge,null,(0,j.tZ)(ce.Z,{language:"sql",lineProps:{style:{color:k.colors.grayscale.dark2,wordBreak:"break-all",whiteSpace:"pre-wrap"}},style:be.Z,wrapLines:!0,lineNumberStyle:{display:"none"},showLineNumbers:!1},(0,E.IB)(e.sql,25))):!(l&&(null==e||null==(i=e.sql)||!i.length))&&(0,j.tZ)(n.Fragment,null),actions:(0,j.tZ)(pe,null,(0,j.tZ)(T.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},(0,j.tZ)(N.Gj,{overlay:(d=e,(0,j.tZ)(he.v,null,w&&(0,j.tZ)(he.v.Item,{onClick:()=>{window.location.href=`/superset/sqllab?savedQueryId=${d.id}`}},(0,_.t)("Edit")),(0,j.tZ)(he.v.Item,{onClick:()=>{d.id&&(0,re.bR)(d.id,a,r)}},(0,_.t)("Share")),x&&(0,j.tZ)(he.v.Item,{onClick:()=>{p(!0),v(d)}},(0,_.t)("Delete"))))},(0,j.tZ)(L.Z.MoreVert,{iconColor:k.colors.grayscale.base}))))}))}))):(0,j.tZ)(Q,{tableName:q.g.SavedQueries,tab:h}))}));var Ze=a(20818),ye=a(65043);const we=(0,$.ZP)((function(e){let{user:t,addDangerToast:a,addSuccessToast:r,mine:i,showThumbnails:l,otherTabData:d,otherTabFilters:s,otherTabTitle:c}=e;const u=(0,o.k6)(),h=(0,F.rV)(F.dR.homepage_dashboard_filter,D.F.Other),f=ne()(d,(e=>!("viz_type"in e))),{state:{loading:m,resourceCollection:p},setResourceCollection:g,hasPerm:v,refreshData:Z,fetchData:y}=(0,re.Yi)("dashboard",(0,_.t)("dashboard"),a,!0,h===D.F.Mine?i:f,[],!1),w=(0,n.useMemo)((()=>p.map((e=>e.id))),[p]),[C,x]=(0,re.NE)("dashboard",w,a),[k,S]=(0,n.useState)(),[T,$]=(0,n.useState)(h),[I,N]=(0,n.useState)(!1),[z,U]=(0,n.useState)(!1),[R,A]=(0,n.useState)(null);(0,n.useEffect)((()=>{var e;(z||T===D.F.Favorite)&&(e=T,y({pageIndex:0,pageSize:E.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:(0,E.if)(e,q.g.Dashboards,t,s)})),U(!0)}),[T]);const O=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,oe.Z)("dashboard",t,(()=>{N(!1)})),N(!0)},L=[{name:D.F.Favorite,label:(0,_.t)("Favorite"),onClick:()=>{$(D.F.Favorite),(0,F.LS)(F.dR.homepage_dashboard_filter,D.F.Favorite)}},{name:D.F.Mine,label:(0,_.t)("Mine"),onClick:()=>{$(D.F.Mine),(0,F.LS)(F.dR.homepage_dashboard_filter,D.F.Mine)}}];return d&&L.push({name:D.F.Other,label:c,onClick:()=>{$(D.F.Other),(0,F.LS)(F.dR.homepage_dashboard_filter,D.F.Other)}}),m?(0,j.tZ)(Fe,{cover:l}):(0,j.tZ)(n.Fragment,null,(0,j.tZ)(P.Z,{activeChild:T,tabs:L,buttons:[{name:(0,j.tZ)(n.Fragment,null,(0,j.tZ)("i",{className:"fa fa-plus"}),(0,_.t)("Dashboard")),buttonStyle:"tertiary",onClick:()=>{window.location.assign("/dashboard/new")}},{name:(0,_.t)("View All »"),buttonStyle:"link",onClick:()=>{const e=T===D.F.Favorite?`/dashboard/list/?filters=(favorite:(label:${(0,_.t)("Yes")},value:!t))`:"/dashboard/list/";u.push(e)}}]}),k&&(0,j.tZ)(Ze.Z,{dashboardId:null==k?void 0:k.id,show:!0,onHide:()=>S(void 0),onSubmit:e=>se.Z.get({endpoint:`/api/v1/dashboard/${e.id}`}).then((e=>{let{json:t={}}=e;g(p.map((e=>e.id===t.id?t.result:e)))}),(0,E.v$)((e=>a((0,_.t)("An error occurred while fetching dashboards: %s",e)))))}),R&&(0,j.tZ)(fe.Z,{description:(0,j.tZ)(n.Fragment,null,(0,_.t)("Are you sure you want to delete")," ",(0,j.tZ)("b",null,R.dashboard_title),"?"),onConfirm:()=>{(0,E.Iu)(R,Z,r,a,T,null==t?void 0:t.userId),A(null)},onHide:()=>A(null),open:!!R,title:(0,_.t)("Please confirm")}),p.length>0&&(0,j.tZ)(E._L,{showThumbnails:l},p.map((e=>(0,j.tZ)(ye.Z,{key:e.id,dashboard:e,hasPerm:v,bulkSelectEnabled:!1,showThumbnails:l,userId:null==t?void 0:t.userId,loading:m,openDashboardEditModal:e=>S(e),saveFavoriteStatus:C,favoriteStatus:x[e.id],handleBulkDashboardExport:O,onDelete:e=>A(e)})))),0===p.length&&(0,j.tZ)(Q,{tableName:q.g.Dashboards,tab:T}),I&&(0,j.tZ)(b.Z,null))})),Ce=(0,w.I)(),_e=["2","3"],xe=C.iK.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light4}};
  .ant-row.menu {
    margin-top: -15px;
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light4}};
    &:after {
      content: '';
      display: block;
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
      margin: 0px ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
      position: relative;
      width: 100%;
      ${E.mq[1]} {
        margin-top: 5px;
        margin: 0px 2px;
      }
    }
    .ant-menu.ant-menu-light.ant-menu-root.ant-menu-horizontal {
      padding-left: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
    }
    button {
      padding: 3px 21px;
    }
  }
  .ant-card-meta-description {
    margin-top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
  .ant-card.ant-card-bordered {
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  }
  .ant-collapse-item .ant-collapse-content {
    margin-bottom: ${e=>{let{theme:t}=e;return-6*t.gridUnit}}px;
  }
  div.ant-collapse-item:last-child.ant-collapse-item-active
    .ant-collapse-header {
    padding-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  }
  div.ant-collapse-item:last-child .ant-collapse-header {
    padding-bottom: ${e=>{let{theme:t}=e;return 9*t.gridUnit}}px;
  }
  .loading-cards {
    margin-top: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
    .ant-card-cover > div {
      height: 168px;
    }
  }
`,ke=C.iK.div`
  ${e=>{let{theme:t}=e;return`\n    .switch {\n      display: flex;\n      flex-direction: row;\n      margin: ${4*t.gridUnit}px;\n      span {\n        display: block;\n        margin: ${t.gridUnit}px;\n        line-height: ${3.5*t.gridUnit}px;\n      }\n    }\n  `}}
`,Se=(0,f.Z)(),Fe=e=>{let{cover:t}=e;return(0,j.tZ)(E._L,{showThumbnails:t,className:"loading-cards"},[...new Array(E.iv)].map(((e,a)=>(0,j.tZ)(T.Z,{key:a,cover:!t&&(0,j.tZ)(n.Fragment,null),description:"",loading:!0}))))},Te=(0,$.ZP)((function(e){let{user:t,addDangerToast:a}=e;const r=(0,z.yI)(t),i=t.userId.toString(),l=k().encode({page_size:6}),o=`/api/v1/log/recent_activity/${t.userId}/?q=${l}`,[d,s]=(0,n.useState)("Loading"),c=(0,F.OH)(i,null);let u=!1;const b=(0,I.c)(v.T.THUMBNAILS);b&&(u=void 0===(null==c?void 0:c.thumbnails)||(null==c?void 0:c.thumbnails));const[h,f]=(0,n.useState)(u),[m,p]=(0,n.useState)(null),[g,Z]=(0,n.useState)(null),[w,C]=(0,n.useState)(null),[x,T]=(0,n.useState)(null),[$,U]=(0,n.useState)(!0),R=(0,F.rV)(F.dR.homepage_collapse_state,[]),[A,O]=(0,n.useState)(R),L=Ce.get("welcome.message"),M=Ce.get("welcome.banner"),q=Ce.get("welcome.main.replacement"),[B,V]=(0,n.useMemo)((()=>{var e;const t=null==(e=Se.common)?void 0:e.conf.WELCOME_PAGE_LAST_TAB,[a,n]=Array.isArray(t)?t:[void 0,void 0];return a&&n?[(0,_.t)(a),n]:"all"===t?[(0,_.t)("All"),[]]:[(0,_.t)("Examples"),[{col:"created_by",opr:"rel_o_m",value:0}]]}),[]);(0,n.useEffect)((()=>{if(!V)return;const e=(0,F.rV)(F.dR.homepage_activity_filter,null);O(R.length>0?R:_e),(0,E.xF)(t.userId,o,a,V).then((t=>{const a={};if(a[D.F.Other]=t.other,t.viewed){const n=y()(t.viewed,["item_url",null]).map((e=>e));a[D.F.Viewed]=n,!e&&a[D.F.Viewed]?s(D.F.Viewed):e||a[D.F.Viewed]?s(e||D.F.Created):s(D.F.Created)}else s(e||D.F.Created);p((e=>({...e,...a})))})).catch((0,E.v$)((e=>{p((e=>({...e,[D.F.Viewed]:[]}))),a((0,_.t)("There was an issue fetching your recent activity: %s",e))})));const n=[{col:"created_by",opr:"rel_o_m",value:`${i}`}];Promise.all([(0,E.B1)(i,"dashboard").then((e=>(T(e),Promise.resolve()))).catch((e=>(T([]),a((0,_.t)("There was an issue fetching your dashboards: %s",e)),Promise.resolve()))),(0,E.B1)(i,"chart").then((e=>(Z(e),Promise.resolve()))).catch((e=>(Z([]),a((0,_.t)("There was an issue fetching your chart: %s",e)),Promise.resolve()))),r?(0,E.B1)(i,"saved_query",n).then((e=>(C(e),Promise.resolve()))).catch((e=>(C([]),a((0,_.t)("There was an issue fetching your saved queries: %s",e)),Promise.resolve()))):Promise.resolve()]).then((()=>{U(!1)}))}),[V]);const H=()=>{f(!h),(0,F.I_)(i,{thumbnails:!h})};(0,n.useEffect)((()=>{!R&&null!=w&&w.length&&O((e=>[...e,"4"])),p((e=>({...e,Created:[...(null==g?void 0:g.slice(0,3))||[],...(null==x?void 0:x.slice(0,3))||[],...(null==w?void 0:w.slice(0,3))||[]]})))}),[g,w,x]),(0,n.useEffect)((()=>{var e;!R&&null!=m&&null!=(e=m[D.F.Viewed])&&e.length&&O((e=>["1",...e]))}),[m]);const K=!(null!=m&&m[D.F.Other]||null!=m&&m[D.F.Viewed]),G={activeChild:"Home",name:(0,_.t)("Home")};return b&&(G.buttons=[{name:(0,j.tZ)(ke,null,(0,j.tZ)("div",{className:"switch"},(0,j.tZ)(N.KU,{checked:h,onClick:H}),(0,j.tZ)("span",null,(0,_.t)("Thumbnails")))),onClick:H,buttonStyle:"link"}]),(0,j.tZ)(n.Fragment,null,(0,j.tZ)(P.Z,G),(0,j.tZ)(xe,null,L&&(0,j.tZ)(L,null),M&&(0,j.tZ)(M,null),q&&(0,j.tZ)(q,null),(!M||!q)&&(0,j.tZ)(n.Fragment,null,(0,j.tZ)(S.Z,{activeKey:A,onChange:e=>{O(e),(0,F.LS)(F.dR.homepage_collapse_state,e)},ghost:!0,bigger:!0},(0,j.tZ)(S.Z.Panel,{header:(0,_.t)("Recents"),key:"1"},m&&(m[D.F.Viewed]||m[D.F.Other]||m[D.F.Created])&&"Loading"!==d?(0,j.tZ)(te,{user:{userId:t.userId},activeChild:d,setActiveChild:s,activityData:m,isFetchingActivityData:$}):(0,j.tZ)(Fe,null)),(0,j.tZ)(S.Z.Panel,{header:(0,_.t)("Dashboards"),key:"2"},!x||K?(0,j.tZ)(Fe,{cover:h}):(0,j.tZ)(we,{user:t,mine:x,showThumbnails:h,otherTabData:null==m?void 0:m[D.F.Other],otherTabFilters:V,otherTabTitle:B})),(0,j.tZ)(S.Z.Panel,{header:(0,_.t)("Charts"),key:"3"},!g||K?(0,j.tZ)(Fe,{cover:h}):(0,j.tZ)(de,{showThumbnails:h,user:t,mine:g,otherTabData:null==m?void 0:m[D.F.Other],otherTabFilters:V,otherTabTitle:B})),r&&(0,j.tZ)(S.Z.Panel,{header:(0,_.t)("Saved queries"),key:"4"},w?(0,j.tZ)(ve,{showThumbnails:h,user:t,mine:w,featureFlag:b}):(0,j.tZ)(Fe,{cover:h}))))))})),$e=(0,n.lazy)((()=>a.e(4109).then(a.bind(a,76499)))),Ee=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(906)]).then(a.bind(a,78768)))),Ie=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(1247),a.e(8),a.e(8782),a.e(9563)]).then(a.bind(a,2226)))),Ne=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(1611)]).then(a.bind(a,98217)))),De=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(8782),a.e(665)]).then(a.bind(a,33320)))),Pe=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(4085)]).then(a.bind(a,36942)))),ze=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(8782),a.e(8774)]).then(a.bind(a,18510)))),Ue=(0,n.lazy)((()=>Promise.all([a.e(232),a.e(6362)]).then(a.bind(a,90170)))),Re=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(4502)]).then(a.bind(a,95731)))),Ae=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(5656)]).then(a.bind(a,52438)))),Oe=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(527),a.e(8782),a.e(3197),a.e(6217),a.e(8438)]).then(a.bind(a,58298)))),Le=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(5336)]).then(a.bind(a,58883)))),Me=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(527),a.e(1247),a.e(8),a.e(981),a.e(5207),a.e(3347),a.e(3197),a.e(232),a.e(868),a.e(9540),a.e(1128)]).then(a.bind(a,4189)))),qe=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(6284)]).then(a.bind(a,36444)))),je=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(8782),a.e(9173)]).then(a.bind(a,7742)))),Be=(0,n.lazy)((()=>a.e(7637).then(a.bind(a,7628)))),Ve=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(373)]).then(a.bind(a,87827)))),He=[{path:"/superset/welcome/",Component:Te},{path:"/dashboard/list/",Component:ze},{path:"/superset/dashboard/:idOrSlug/",Component:Ue},{path:"/chart/add",Component:$e},{path:"/chart/list/",Component:De},{path:"/tablemodelview/list/",Component:Ae},{path:"/databaseview/list/",Component:Re},{path:"/savedqueryview/list/",Component:je},{path:"/csstemplatemodelview/list/",Component:Pe},{path:"/annotationlayer/list/",Component:Ee},{path:"/annotationlayer/:annotationLayerId/annotation/",Component:Ne},{path:"/superset/sqllab/history/",Component:qe},{path:"/alert/list/",Component:Ie},{path:"/report/list/",Component:Ie,props:{isReportEnabled:!0}},{path:"/alert/:alertId/log/",Component:Le},{path:"/report/:alertId/log/",Component:Le,props:{isReportEnabled:!0}},{path:"/explore/",Component:Me},{path:"/superset/explore/p",Component:Me},{path:"/dataset/add/",Component:Oe},{path:"/dataset/:datasetId",Component:Oe},{path:"/rowlevelsecurity/list",Component:(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(1247),a.e(8782),a.e(7177)]).then(a.bind(a,6065))))}];(0,v.c)(v.T.TAGGING_SYSTEM)&&(He.push({path:"/superset/all_entities/",Component:Be}),He.push({path:"/superset/tags/",Component:Ve}));const Ke=He.map((e=>e.path)).reduce(((e,t)=>({...e,[t]:!0})),{});function Ge(e){if(e){const t=e.split(/[?#]/)[0];return!!Ke[t]}return!1}var Qe=a(3741),Ye=a(63431),We=a(97381),Je=a(71255),Xe=a(68135),et=a(28216),tt=a(35755),at=a(38626),nt=a(57865),rt=a(4756);const it={info:"addInfoToast",alert:"addDangerToast",danger:"addDangerToast",warning:"addWarningToast",success:"addSuccessToast"};function lt(e){let{children:t,messages:a}=e;const n=(0,$.e1)();return(0,rt.J)((()=>{a.forEach((e=>{const[t,a]=e,r=n[it[t]];r&&r(a)}))})),t}var ot=a(25076),dt=a(29147),st=a(14278);const{common:ct}=(0,f.Z)(),ut=(0,w.I)(),bt=e=>{let{children:t}=e;const a=ut.get("root.context.provider");return(0,j.tZ)(Xe.a,{theme:ot.r},(0,j.tZ)(et.zt,{store:Je.h},(0,j.tZ)(at.W,{backend:nt.PD},(0,j.tZ)(lt,{messages:ct.flash_messages},(0,j.tZ)(dt.DG,null,(0,j.tZ)(st.EM,null,(0,j.tZ)(tt.Fz,{ReactRouterRoute:o.AW,stringifyOptions:{encode:!1}},a?(0,j.tZ)(a,null,t):t)))))))},ht=()=>{const{pathname:e}=(0,o.TH)();return(0,n.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null};(0,p.Z)(),(0,g.Z)(),(0,Ye.Z)();const ft=(0,f.Z)();let mt;const pt=(0,s.DE)({logEvent:We.logEvent},Je.h.dispatch),gt=()=>{const e=(0,o.TH)();return(0,n.useEffect)((()=>{pt.logEvent(Qe.kV,{path:e.pathname}),mt&&mt!==e.pathname&&Qe.Yd.markTimeOrigin(),mt=e.pathname}),[e.pathname]),(0,j.tZ)(n.Fragment,null)};r.render((0,j.tZ)((()=>(0,j.tZ)(d.VK,null,(0,j.tZ)(ht,null),(0,j.tZ)(gt,null),(0,j.tZ)(bt,null,(0,j.tZ)(c.n,null),(0,j.tZ)(h.Z,{data:ft.common.menu_data,isFrontendRoute:Ge}),(0,j.tZ)(o.rs,null,He.map((e=>{let{path:t,Component:a,props:r={},Fallback:i=b.Z}=e;return(0,j.tZ)(o.AW,{path:t,key:t},(0,j.tZ)(n.Suspense,{fallback:(0,j.tZ)(i,null)},(0,j.tZ)(u.Z,null,(0,j.tZ)(a,l()({user:ft.user},r)))))}))),(0,j.tZ)(m.Z,null)))),null),document.getElementById("app"))}},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={id:e,loaded:!1,exports:{}};return d[e].call(a.exports,a,a.exports,c),a.loaded=!0,a.exports}c.m=d,c.amdD=function(){throw new Error("define cannot be used indirect")},c.amdO={},e=[],c.O=(t,a,n,r)=>{if(!a){var i=1/0;for(s=0;s<e.length;s++){for(var[a,n,r]=e[s],l=!0,o=0;o<a.length;o++)(!1&r||i>=r)&&Object.keys(c.O).every((e=>c.O[e](a[o])))?a.splice(o--,1):(l=!1,r<i&&(i=r));if(l){e.splice(s--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[a,n,r]},c.H={},c.G=e=>{Object.keys(c.H).map((t=>{c.H[t](e)}))},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);c.r(r);var i={};t=t||[null,a({}),a([]),a(a)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=a(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,c.d(r,i),r},c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,a)=>(c.f[a](e,t),t)),[])),c.u=e=>6217===e?"6217.8dd82c21fb6b2f8b196d.entry.js":2441===e?"2441.84a87e1b904333670286.entry.js":527===e?"527.c0e551182a264e2f7148.entry.js":3197===e?"3197.bbe68bb6573ca1903451.entry.js":3347===e?"3347.17d379025da2c9801e27.entry.js":{8:"dca67f420947a30366cc",57:"6a8edc9301437b97a880",112:"ea34548959147c99db4f",137:"b87da57903aa9410028d",158:"7c6c5a6298756fb2e368",177:"71504ef4c581b2281125",183:"b8a6d32010639756fd5a",215:"2eb952af30b72fbaca47",232:"5d0a1163600185926f88",310:"1b6d3d5fb379f4ffba0c",312:"de243f762dd3dae25a71",326:"46cac07b8c797ba1e0a2",336:"ee514f13799d75351117",347:"01e75abc64cbda8b33ab",349:"91b3f93bbea659454ebe",357:"b45d9baa85989a83d267",363:"7d5517b5ba77ac664f31",373:"268c371418ce55ed5a06",440:"f8e2127f15ad8052eb06",444:"592f57bcd84a2e73b7ea",452:"12101bf695385a5cc839",597:"4a61352083b112ee09cf",600:"202c01791d6b0888d41f",616:"65c42a4c46bebe8fe259",665:"8d974424db80e22653a9",704:"07bb4378a13f7e1a10b9",741:"fb1021ca22e56391512a",775:"36193ac8c20e79861eab",783:"0fb241b92d4f6fe00a1b",826:"e4564149bcdcfe49a5b2",868:"9ed7699998399a4483ee",906:"c7fcb3743ea67327c333",954:"296c1383fa71efe1ecc8",981:"8e5330a6c04a3c75cd9c",992:"3bb28bf9de5cfb3a31ea",999:"66d4521869b231631f62",1020:"2aea0eece8228816fbc8",1075:"7686aaddcaaafe1fc65c",1128:"ad4d25c3710f23f3a9d7",1130:"f94f8bd9251398afb0ee",1161:"cf65419445f9e1b593ad",1174:"30bc5e225c6a879478e8",1185:"51c76e5148ce3638cf4d",1221:"e7c18da35561edd7407c",1247:"519fcdece5fe12d2a370",1256:"e47da8a47ce8421a6c35",1258:"84ffa13048dcd63abcbf",1263:"e3d24b7d629f0c9caa0f",1293:"7ae2db4047e52c1955d1",1351:"315f984040a2731d6cbf",1382:"e2d86ccce3024d1eaeda",1398:"0e8062e0e7e11f86214c",1402:"ef71db83f410e2d77610",1441:"3c51abc9ce0adcb269e5",1458:"b09ea5e1028006cabb5d",1493:"c395f7575cfa71b30738",1568:"ade06aa262190c3f47b4",1573:"1e467de27bd3dba441fd",1605:"09f2d740509950089383",1611:"942327a1d17b93a94f3d",1877:"3926ef13daefbca43225",1899:"42582cd7f6f09fd108b8",1948:"ff5684143fd91d3b8a80",2028:"78860446fc3d77e535bc",2079:"73fc3ae216623170b69a",2089:"833e1a633dab60aa1e82",2105:"d5553e1dcb0d56e914e2",2112:"fbeea1159ce35af31257",2197:"3a346af7192863c93490",2229:"05ab4cf751282ea6378b",2264:"8dca48a562851e445715",2267:"1d613dba270d05e66fd6",2403:"6b0855f12416f000070b",2439:"8379ca70bb023fd2cd2d",2549:"a89b67984e1a91e7bcb7",2646:"c7c6eae3a837335173db",2698:"106e182a75dbf3b70282",2713:"cfb5fefa4663bcc52a9d",2797:"e7d896401450124f316c",2955:"6295f45e8d82a3fd81ce",2983:"77022e8536c5f48eb27d",3036:"daa84f83e7596026c91d",3126:"b42b26214dd5f00db770",3141:"1a3ad71ca8414b1aff4c",3187:"177dfb79b42eb73d7866",3195:"4e16fabfe666f0f5ce49",3208:"48ce4cffe1e01e20fe1f",3240:"18d808107a08c1b56d69",3265:"b70b50f3b438cae549d4",3325:"c74aeba305c67f0de7fc",3496:"bb3a5b5b7e8a8770aace",3544:"7911faad16e31278af77",3558:"836419fc91f20475e280",3567:"d95b5cd0f543a0fa7fcd",3588:"3b7ca92d40664402b992",3606:"54aec15887e18dcf4d6e",3711:"2ab317ff786dae667619",3745:"0f8ce4b8379fc91a95f0",3749:"a8fed202e88865a3c129",3831:"6c76e7ff81d847693bf3",3871:"2ab5d182a330ff8dc633",3955:"ae1e5967d8e165d4c383",3985:"e0db3b71272b791f29f3",4085:"6777571e7ec8d43bac51",4109:"45eed513672d73fccc36",4139:"c27e96fb57f180a5fea0",4194:"d43102798930e7d3ec9e",4237:"80662e64bf8863b48037",4266:"7b50c83b0b6b87ccd33c",4273:"e50674c10f226bc56c96",4421:"f2885780359216344d5f",4434:"cc1e56fc27059fab78d8",4458:"b91e10e355934543f970",4474:"9c4d23562042acc4eab2",4494:"60e55d23e81b8abb6801",4502:"d28ab6363db05264b0a9",4572:"237ebbb7008e5a538ac0",4579:"03d7163328e8d555df63",4625:"3321aa0059456f094615",4662:"dea8bc3bbe5cae7135cd",4667:"0fda52175c59292cafb9",4672:"ccf213c8a0828ebb7f45",4732:"2a9aac4aa4178ef96636",4757:"53bd0bbe26f32495e698",4758:"225a2cf803122d531ac1",4790:"3f447ffc6375085e6b0a",4794:"77b2d851251414066907",4797:"06a8550688aa97522575",4810:"13d8a4a65f2fa69630df",4817:"e5ec7f93c7b83dbc8e10",4832:"a65fafcbf585f484da44",4851:"e3a5a687922d1f1f61c4",4936:"31dba9d54004fd0b4f6b",4972:"e1d7d70ebc1e8e374eb1",5051:"0dcd3d2742d28267914b",5094:"ae7fc828bb5ca82832f5",5123:"42114fa32b185e95acdf",5181:"bca6b18da2230334fc4a",5201:"b410f0b9661764777ae1",5207:"1b166f826e97b201ae04",5224:"6801df583a7baa6f38df",5226:"164f0157f65b94ac86ea",5249:"960fa56954a3390a45d0",5264:"cfd910d048817219d524",5281:"71fb054b1d5a4969f94e",5330:"6a3f757875b50336fa52",5335:"ffcda709454ee8e00875",5336:"2f6c64524a473c3147c2",5350:"7c476e1bcd37583d1ad2",5359:"b948569636c2e25cf87e",5367:"4eecb7542f1d0f20e390",5378:"97d3f65161ee31afe88b",5422:"4c7b29775067e1b09212",5507:"f9862baff82efddcfed6",5566:"8cb7ec34e1a5d5cdc0e9",5580:"a6fffc2d36e02dfdd558",5592:"34f938a1511d7766860c",5641:"03cee1d1e1120dca640f",5656:"447f857a1b2eb4b4cc6f",5707:"ee1bae94981497a1099b",5771:"e6bd7d04c59062204af7",5772:"5d2c10c1ae63f298a73f",5777:"bd047178347cf48818b5",5802:"10c562415702931e090a",5816:"09a58c174324a1095068",5832:"b4253794b4e4f614fdad",5838:"03b4e5235c29124ba82b",5906:"0816e0f97502443c7233",5962:"8e22959b6677bb2c904e",5972:"e2b002c74e3f3f64bd8b",5998:"3acb25873e499325f00e",6061:"c0d72749bdfdbe1f0675",6126:"b1e9e54700dc790f535e",6150:"2b84bc490340c9762ce6",6167:"a1a753704b31b1574914",6207:"77c62667b74526939ac1",6254:"d679cfabbe67c893078a",6284:"3945ff0c57338ab8e1b9",6303:"5c84e2437e0384ee0b13",6357:"626803432b2589c8f303",6362:"99dc56c30a15877e130c",6371:"8b3a79bdcffc8199f2ce",6377:"68d56cb0512e7003eacd",6420:"c0bab80e31e3cb9d7370",6447:"4982ddd1a2cfc3462d35",6486:"b4e2ce371cfa18faee67",6507:"662e962171154f1f9157",6579:"4cce8d7020bcf7659ede",6668:"c9ce3d6771f6b266aa3f",6682:"8d7f828696799beb97ed",6693:"013203f323d83eede53c",6758:"75f6753a49fe647bc674",6819:"bc3027bcb33a6f068f74",6883:"3725a5f79aad6bf56dbd",6968:"8df7149db63507d2d7d6",6981:"37a59d45844d993b5526",7003:"7e2cbc04372fc91eb049",7177:"8d205b0e325cd790b0d9",7183:"7ef924adae1d79c59a30",7245:"2a73969bbe5e6343090a",7249:"26389e9e4698c17823e1",7253:"8a75acf1e0c84ed9baaa",7405:"ed30936869c11b67b644",7460:"269bcab302a8d01e4b71",7521:"242bdf27d30cce14bd16",7584:"2a0efbe0d8bbb1942c39",7610:"cd111d14a239de6cbf67",7637:"88ba4ff6104dbef7533c",7654:"5793f861d77f06466d6f",7716:"53ac5c1205f6e1e6e616",7760:"2ac2524484cd50006129",7803:"716853494168af0ba3a9",7832:"a73f25739f350c7e9872",7850:"2e1b1dd1c6ac18288e18",7922:"557ae239cc7e3f8ccead",7984:"d5704e54bf74dfb88424",7989:"f4a6c401a92c88bca1b2",8041:"4697dd9418c10110c66f",8312:"037d8fbe29610cde8fed",8349:"6602c65d3c4cec8b27b2",8398:"ea0e18eecdbcd98ba60b",8425:"216064963022a7599339",8438:"8fdbb09c7c6fec0387cb",8463:"3626549b23225a6e2c95",8464:"5c6a86ce1ce8831458ee",8491:"553928348feb33e7dcbf",8551:"686aa4e31fc514f286e0",8623:"0dfe5fdeff8c56bcee19",8650:"c3a0164f1ecb2490e87c",8656:"a0536d45eaee4b70ae6b",8682:"e123504ae9bdae42d7c6",8695:"f5f9d5fad83cad0b90ea",8701:"019d34d64d2c469922ab",8750:"0b72ee1a02623f83e0ca",8774:"242caf9f9bfc4314c4ed",8782:"2537a5410ac6e521ff21",8883:"8ba088da5c466b5829ba",8924:"9923a71b5adcce78501d",8970:"bb1ed3f0e87a0bc74792",8971:"1f51ccb0a3dee1492d37",9013:"8f7d3503973d9608c3f6",9052:"b9ce77b76d5488a36355",9101:"402ea28e6248b9349288",9109:"ef04744c9e66d5a22e11",9173:"0aa8ddbb0bae9ca85005",9207:"bda2f64f1dbce6ae7d7d",9305:"1d76f1f9c53ccf34e596",9322:"8622b05fed2ed11cfb55",9325:"c5562d7456f59804ae5d",9393:"1e925598ffe216e24710",9396:"dbd8d78e8e000c257257",9483:"01cfddf850e70ca35a4f",9510:"d3a9f49bff7461a62ef6",9540:"aaacfdfd56f0fcbae6b8",9558:"faf680e140cfca20867e",9563:"a8081c8ca2998894cb7f",9622:"442e335838b6579b00c4",9681:"f0a94e8143bf49878ad7",9767:"afafa15398ea7165cb04",9794:"4e85b8dbced27ec7a2bc",9811:"3c24ba556c37f0468945",9857:"40e39f4283bce96d857f",9873:"634e2618746831f36034",9877:"8988693a046a18f3dbdf"}[e]+".chunk.js",c.miniCssF=e=>(({452:"DashboardContainer",1128:"Chart",7177:"RowLevelSecurityList",9563:"AlertReportList"}[e]||e)+"."+{137:"b87da57903aa9410028d",452:"12101bf695385a5cc839",1128:"ad4d25c3710f23f3a9d7",1441:"3c51abc9ce0adcb269e5",1877:"3926ef13daefbca43225",3036:"daa84f83e7596026c91d",4194:"d43102798930e7d3ec9e",4237:"80662e64bf8863b48037",4494:"60e55d23e81b8abb6801",4936:"31dba9d54004fd0b4f6b",5378:"97d3f65161ee31afe88b",5422:"4c7b29775067e1b09212",5566:"8cb7ec34e1a5d5cdc0e9",5772:"5d2c10c1ae63f298a73f",7177:"8d205b0e325cd790b0d9",8623:"0dfe5fdeff8c56bcee19",8650:"c3a0164f1ecb2490e87c",9563:"a8081c8ca2998894cb7f"}[e]+".chunk.css"),c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},r="superset:",c.l=(e,t,a,i)=>{if(n[e])n[e].push(t);else{var l,o;if(void 0!==a)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var u=d[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+a){l=u;break}}l||(o=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.setAttribute("data-webpack",r+a),l.src=e),n[e]=[t];var b=(t,a)=>{l.onerror=l.onload=null,clearTimeout(h);var r=n[e];if(delete n[e],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((e=>e(a))),t)return t(a)},h=setTimeout(b.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=b.bind(null,l.onerror),l.onload=b.bind(null,l.onload),o&&document.head.appendChild(l)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),c.p="/static/assets/",i=e=>new Promise(((t,a)=>{var n=c.miniCssF(e),r=c.p+n;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=(l=a[n]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(r===e||r===t))return l}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var l;if((r=(l=i[n]).getAttribute("data-href"))===e||r===t)return l}})(n,r))return t();((e,t,a,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=i=>{if(r.onerror=r.onload=null,"load"===i.type)a();else{var l=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=l,d.request=o,r.parentNode.removeChild(r),n(d)}},r.href=t,document.head.appendChild(r)})(e,r,t,a)})),l={7103:0},c.f.miniCss=(e,t)=>{l[e]?t.push(l[e]):0!==l[e]&&{137:1,452:1,1128:1,1441:1,1877:1,3036:1,4194:1,4237:1,4494:1,4936:1,5378:1,5422:1,5566:1,5772:1,7177:1,8623:1,8650:1,9563:1}[e]&&t.push(l[e]=i(e).then((()=>{l[e]=0}),(t=>{throw delete l[e],t})))},(()=>{var e={7103:0};c.f.j=(t,a)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var r=new Promise(((a,r)=>n=e[t]=[a,r]));a.push(n[2]=r);var i=c.p+c.u(t),l=new Error;c.l(i,(a=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}}),"chunk-"+t,t)}},c.H.j=t=>{if(!c.o(e,t)||void 0===e[t]){e[t]=null;var a=document.createElement("link");a.charset="utf-8",c.nc&&a.setAttribute("nonce",c.nc),a.rel="preload",a.as="script",a.href=c.p+c.u(t),document.head.appendChild(a)}},c.O.j=t=>0===e[t];var t=(t,a)=>{var n,r,[i,l,o]=a,d=0;if(i.some((t=>0!==e[t]))){for(n in l)c.o(l,n)&&(c.m[n]=l[n]);if(o)var s=o(c)}for(t&&t(a);d<i.length;d++)r=i[d],c.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return c.O(s)},a=globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),o={1128:[1216,527,1247,8,981,5207,5640,3197,868,9540,4717,452],6362:[1216,527,1247,8,981,5207,5640,3197,868,9540,4717,452]},c.f.preload=e=>{var t=o[e];Array.isArray(t)&&t.map(c.G)},c.O(void 0,[1216,504,2450,2318,5429,9176,3727,7748,2087,5755,845,5640,9602,8047,6209,1255,8989,6839,5857,8347,5198,4717],(()=>c(25076)));var u=c.O(void 0,[1216,504,2450,2318,5429,9176,3727,7748,2087,5755,845,5640,9602,8047,6209,1255,8989,6839,5857,8347,5198,4717],(()=>c(22562)));u=c.O(u)})();
//# sourceMappingURL=spa.3a22218eac8edab14606.entry.js.map