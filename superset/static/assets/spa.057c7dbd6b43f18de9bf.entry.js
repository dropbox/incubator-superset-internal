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
`,f=i.iK.div`
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
`,h=i.iK.span`
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
`,y={rows:1,width:150},w=e=>{let{to:t,children:a}=e;return(0,n.tZ)("a",{href:t},a)};function C(e){let{title:t,subtitle:a,url:c,linkComponent:C,titleRight:_,imgURL:x,imgFallbackURL:k,description:S,coverLeft:F,coverRight:T,actions:$,avatar:E,loading:I,imgPosition:N="top",cover:D,certifiedBy:P,certificationDetails:z}=e;const U=c&&C?C:w,R=(0,i.Fg)();return(0,n.tZ)(u,{cover:D||(0,n.tZ)(b,null,(0,n.tZ)(U,{to:c},(0,n.tZ)("div",{className:"gradient-container"},(0,n.tZ)(d.Z,{src:x||"",fallback:k||"",isLoading:I,position:N}))),(0,n.tZ)(p,{className:"cover-footer"},!I&&F&&(0,n.tZ)(g,null,F),!I&&T&&(0,n.tZ)(v,null,T)))},I&&(0,n.tZ)(l.Ak.Meta,{title:(0,n.tZ)(r.Fragment,null,(0,n.tZ)(f,null,(0,n.tZ)(l.Od.Input,{active:!0,size:"small",css:(0,n.iv)({width:Math.trunc(62.5*R.gridUnit)},"","")}),(0,n.tZ)("div",{className:"card-actions"},(0,n.tZ)(l.Od.Button,{active:!0,shape:"circle"})," ",(0,n.tZ)(l.Od.Button,{active:!0,css:(0,n.iv)({width:10*R.gridUnit},"","")})))),description:(0,n.tZ)(Z,{round:!0,active:!0,title:!1,paragraph:y})}),!I&&(0,n.tZ)(l.Ak.Meta,{title:(0,n.tZ)(f,null,a||null,(0,n.tZ)("div",{className:"titleRow"},(0,n.tZ)(o.u,{title:t},(0,n.tZ)(h,null,P&&(0,n.tZ)(r.Fragment,null,(0,n.tZ)(s.Z,{certifiedBy:P,details:z})," "),t)),_&&(0,n.tZ)(m,null,_),(0,n.tZ)("div",{className:"card-actions"},$))),description:S,avatar:E||null}))}C.Actions=c;const _=C},83673:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var n=a(67294),r=a(74069),i=a(9875),l=a(35932),o=a(4715),d=a(15926),s=a.n(d),c=a(51995),u=a(55867),b=a(31069),f=a(93185),h=a(98286),m=a(14114),p=a(60718),g=a(48273),v=a(11965);const Z=o.qz.Item,y=(0,c.iK)(o.qz.Item)`
  margin-bottom: 0;
`,w=c.iK.span`
  margin-bottom: 0;
`;var C={name:"1blj7km",styles:"margin-top:1em"};const _=(0,m.ZP)((function(e){let{slice:t,onHide:a,onSave:d,show:c,addSuccessToast:m}=e;const[_,x]=(0,n.useState)(!1),[k]=o.qz.useForm(),[S,F]=(0,n.useState)(t.slice_name||""),[T,$]=(0,n.useState)(null),[E,I]=(0,n.useState)([]),N=(0,n.useMemo)((()=>E.map((e=>({value:e.name,label:e.name,key:e.name})))),[E.length]);function D(e){let{error:t,statusText:a,message:n}=e,i=t||a||(0,u.t)("An error has occurred");"Forbidden"===n&&(i=(0,u.t)("You do not have permission to edit this chart")),r.Z.error({title:(0,u.t)("Error"),content:i,okButtonProps:{danger:!0,className:"btn-danger"}})}const P=(0,n.useCallback)((async function(){try{var e;const a=(await b.Z.get({endpoint:`/api/v1/chart/${t.slice_id}`})).json.result;$(null==a||null==(e=a.owners)?void 0:e.map((e=>({value:e.id,label:`${e.first_name} ${e.last_name}`}))))}catch(e){D(await(0,h.O$)(e))}}),[t.slice_id]),z=(0,n.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const n=s().encode({filter:e,page:t,page_size:a});return b.Z.get({endpoint:`/api/v1/chart/related/owners?q=${n}`}).then((e=>({data:e.json.result.filter((e=>e.extra.active)).map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),U=(0,u.t)("Owners");return(0,n.useEffect)((()=>{P()}),[P]),(0,n.useEffect)((()=>{F(t.slice_name||"")}),[t.slice_name]),(0,n.useEffect)((()=>{if((0,f.cr)(f.TT.TAGGING_SYSTEM))try{(0,g.$3)({objectType:g.g.CHART,objectId:t.slice_id,includeTypes:!1},(e=>I(e)),(e=>{D(e)}))}catch(e){D(e)}}),[t.slice_id]),(0,v.tZ)(r.Z,{show:c,onHide:a,title:(0,u.t)("Edit Chart Properties"),footer:(0,v.tZ)(n.Fragment,null,(0,v.tZ)(l.Z,{htmlType:"button",buttonSize:"small",onClick:a,cta:!0},(0,u.t)("Cancel")),(0,v.tZ)(l.Z,{htmlType:"submit",buttonSize:"small",buttonStyle:"primary",onClick:k.submit,disabled:_||!S||t.is_managed_externally,tooltip:t.is_managed_externally?(0,u.t)("This chart is managed externally, and can't be edited in Superset"):"",cta:!0},(0,u.t)("Save"))),responsive:!0,wrapProps:{"data-test":"properties-edit-modal"}},(0,v.tZ)(o.qz,{form:k,onFinish:async e=>{x(!0);const{certified_by:n,certification_details:r,description:i,cache_timeout:l}=e,o={slice_name:S||null,description:i||null,cache_timeout:l||null,certified_by:n||null,certification_details:n&&r?r:null};if(T&&(o.owners=T.map((e=>e.value))),(0,f.cr)(f.TT.TAGGING_SYSTEM))try{(0,g.$3)({objectType:g.g.CHART,objectId:t.slice_id,includeTypes:!1},(e=>{return a=e,(n=E).map((e=>{a.some((t=>t.name===e.name))||(0,g._U)({objectType:g.g.CHART,objectId:t.slice_id,includeTypes:!1},e.name,(()=>{}),(()=>{}))})),void a.map((e=>{n.some((t=>t.name===e.name))||(0,g.OY)({objectType:g.g.CHART,objectId:t.slice_id},e,(()=>{}),(()=>{}))}));var a,n}),(e=>{D(e)}))}catch(e){D(e)}try{const e=await b.Z.put({endpoint:`/api/v1/chart/${t.slice_id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),n={...o,...e.json.result,tags:E,id:t.slice_id,owners:T};d(n),m((0,u.t)("Chart properties updated")),a()}catch(e){D(await(0,h.O$)(e))}x(!1)},layout:"vertical",initialValues:{name:t.slice_name||"",description:t.description||"",cache_timeout:null!=t.cache_timeout?t.cache_timeout:"",certified_by:t.certified_by||"",certification_details:t.certified_by&&t.certification_details?t.certification_details:""}},(0,v.tZ)(o.X2,{gutter:16},(0,v.tZ)(o.JX,{xs:24,md:12},(0,v.tZ)("h3",null,(0,u.t)("Basic information")),(0,v.tZ)(Z,{label:(0,u.t)("Name"),required:!0},(0,v.tZ)(i.II,{"aria-label":(0,u.t)("Name"),name:"name",type:"text",value:S,onChange:e=>{var t;return F(null!=(t=e.target.value)?t:"")}})),(0,v.tZ)(Z,null,(0,v.tZ)(y,{label:(0,u.t)("Description"),name:"description"},(0,v.tZ)(i.Kx,{rows:3,style:{maxWidth:"100%"}})),(0,v.tZ)(w,{className:"help-block"},(0,u.t)("The description can be displayed as widget headers in the dashboard view. Supports markdown."))),(0,v.tZ)("h3",null,(0,u.t)("Certification")),(0,v.tZ)(Z,null,(0,v.tZ)(y,{label:(0,u.t)("Certified by"),name:"certified_by"},(0,v.tZ)(i.II,{"aria-label":(0,u.t)("Certified by")})),(0,v.tZ)(w,{className:"help-block"},(0,u.t)("Person or group that has certified this chart."))),(0,v.tZ)(Z,null,(0,v.tZ)(y,{label:(0,u.t)("Certification details"),name:"certification_details"},(0,v.tZ)(i.II,{"aria-label":(0,u.t)("Certification details")})),(0,v.tZ)(w,{className:"help-block"},(0,u.t)("Any additional detail to show in the certification tooltip.")))),(0,v.tZ)(o.JX,{xs:24,md:12},(0,v.tZ)("h3",null,(0,u.t)("Configuration")),(0,v.tZ)(Z,null,(0,v.tZ)(y,{label:(0,u.t)("Cache timeout"),name:"cache_timeout"},(0,v.tZ)(i.II,{"aria-label":"Cache timeout"})),(0,v.tZ)(w,{className:"help-block"},(0,u.t)("Duration (in seconds) of the caching timeout for this chart. Set to -1 to bypass the cache. Note this defaults to the dataset's timeout if undefined."))),(0,v.tZ)("h3",{style:{marginTop:"1em"}},(0,u.t)("Access")),(0,v.tZ)(Z,{label:U},(0,v.tZ)(o.qb,{ariaLabel:U,mode:"multiple",name:"owners",value:T||[],onChange:$,options:z,disabled:!T,allowClear:!0}),(0,v.tZ)(w,{className:"help-block"},(0,u.t)("A list of users who can alter the chart. Searchable by name or username."))),(0,f.cr)(f.TT.TAGGING_SYSTEM)&&(0,v.tZ)("h3",{css:C},(0,u.t)("Tags")),(0,f.cr)(f.TT.TAGGING_SYSTEM)&&(0,v.tZ)(Z,null,(0,v.tZ)(o.qb,{ariaLabel:"Tags",mode:"multiple",allowNewOptions:!0,value:N,options:p.m,onChange:e=>{const t=[...new Set(e.map((e=>e.label)))];I([...t.map((e=>({name:e})))])},onClear:()=>{I([])},allowClear:!0}),(0,v.tZ)(w,{className:"help-block"},(0,u.t)("A list of tags that have been applied to this chart.")))))))}))},8494:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var n=a(67294),r=a(93185),i=a(51995),l=a(55867),o=a(16550),d=a(73727),s=a(19259),c=a(70163),u=a(21742),b=a(37921),f=a(4715),h=a(83862),m=a(36674),p=a(34581),g=a(40768),v=a(11965);function Z(e){let{chart:t,hasPerm:a,openChartEditModal:Z,bulkSelectEnabled:y,addDangerToast:w,addSuccessToast:C,refreshData:_,loading:x,showThumbnails:k,saveFavoriteStatus:S,favoriteStatus:F,chartFilter:T,userId:$,handleBulkChartExport:E}=e;const I=(0,o.k6)(),N=a("can_write"),D=a("can_write"),P=a("can_export")&&(0,r.cr)(r.TT.VERSIONED_EXPORT),z=(0,i.Fg)(),U=(0,v.tZ)(h.v,null,D&&(0,v.tZ)(h.v.Item,null,(0,v.tZ)(s.Z,{title:(0,l.t)("Please confirm"),description:(0,v.tZ)(n.Fragment,null,(0,l.t)("Are you sure you want to delete")," ",(0,v.tZ)("b",null,t.slice_name),"?"),onConfirm:()=>(0,g.Gm)(t,C,w,_,T,$)},(e=>(0,v.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,v.tZ)(c.Z.Trash,{iconSize:"l"})," ",(0,l.t)("Delete"))))),P&&(0,v.tZ)(h.v.Item,null,(0,v.tZ)("div",{role:"button",tabIndex:0,onClick:()=>E([t])},(0,v.tZ)(c.Z.Share,{iconSize:"l"})," ",(0,l.t)("Export"))),N&&(0,v.tZ)(h.v.Item,null,(0,v.tZ)("div",{role:"button",tabIndex:0,onClick:()=>Z(t)},(0,v.tZ)(c.Z.EditAlt,{iconSize:"l"})," ",(0,l.t)("Edit"))));return(0,v.tZ)(g.ZB,{onClick:()=>{!y&&t.url&&I.push(t.url)}},(0,v.tZ)(u.Z,{loading:x,title:t.slice_name,certifiedBy:t.certified_by,certificationDetails:t.certification_details,cover:(0,r.cr)(r.TT.THUMBNAILS)&&k?null:(0,v.tZ)(n.Fragment,null),url:y?void 0:t.url,imgURL:t.thumbnail_url||"",imgFallbackURL:"/static/assets/images/chart-card-fallback.svg",description:(0,l.t)("Modified %s",t.changed_on_delta_humanized),coverLeft:(0,v.tZ)(p.Z,{users:t.owners||[]}),coverRight:(0,v.tZ)(b.Z,{type:"secondary"},t.datasource_name_text),linkComponent:d.rU,actions:(0,v.tZ)(u.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},$&&(0,v.tZ)(m.Z,{itemId:t.id,saveFaveStar:S,isStarred:F}),(0,v.tZ)(f.Gj,{overlay:U},(0,v.tZ)(c.Z.MoreVert,{iconColor:z.colors.grayscale.base})))}))}},65043:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(67294),r=a(16550),i=a(73727),l=a(51995),o=a(55867),d=a(93185),s=a(40768),c=a(4715),u=a(83862),b=a(21742),f=a(70163),h=a(37921),m=a(34581),p=a(36674),g=a(11965);const v=function(e){let{dashboard:t,hasPerm:a,bulkSelectEnabled:v,userId:Z,openDashboardEditModal:y,favoriteStatus:w,saveFavoriteStatus:C,showThumbnails:_,handleBulkDashboardExport:x,onDelete:k}=e;const S=(0,r.k6)(),F=a("can_write"),T=a("can_write"),$=a("can_export"),E=(0,l.Fg)(),I=(0,g.tZ)(u.v,null,F&&y&&(0,g.tZ)(u.v.Item,null,(0,g.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:()=>null==y?void 0:y(t)},(0,g.tZ)(f.Z.EditAlt,{iconSize:"l"})," ",(0,o.t)("Edit"))),$&&(0,g.tZ)(u.v.Item,null,(0,g.tZ)("div",{role:"button",tabIndex:0,onClick:()=>x([t]),className:"action-button"},(0,g.tZ)(f.Z.Share,{iconSize:"l"})," ",(0,o.t)("Export"))),T&&(0,g.tZ)(u.v.Item,null,(0,g.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:()=>k(t)},(0,g.tZ)(f.Z.Trash,{iconSize:"l"})," ",(0,o.t)("Delete"))));return(0,g.tZ)(s.ZB,{onClick:()=>{v||S.push(t.url)}},(0,g.tZ)(b.Z,{loading:t.loading||!1,title:t.dashboard_title,certifiedBy:t.certified_by,certificationDetails:t.certification_details,titleRight:(0,g.tZ)(h.Z,null,t.published?(0,o.t)("published"):(0,o.t)("draft")),cover:(0,d.cr)(d.TT.THUMBNAILS)&&_?null:(0,g.tZ)(n.Fragment,null),url:v?void 0:t.url,linkComponent:i.rU,imgURL:t.thumbnail_url,imgFallbackURL:"/static/assets/images/dashboard-card-fallback.svg",description:(0,o.t)("Modified %s",t.changed_on_delta_humanized),coverLeft:(0,g.tZ)(m.Z,{users:t.owners||[]}),actions:(0,g.tZ)(b.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},Z&&(0,g.tZ)(p.Z,{itemId:t.id,saveFaveStar:C,isStarred:w}),(0,g.tZ)(c.Gj,{overlay:I},(0,g.tZ)(f.Z.MoreVert,{iconColor:E.colors.grayscale.base})))}))}},86074:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});var n=a(23279),r=a.n(n),i=a(67294),l=a(16550),o=a(73727),d=a(51995),s=a(11965),c=a(55867),u=a(94184),b=a.n(u),f=a(58593),h=a(4715),m=a(83862),p=a(35932),g=a(70163);const v=d.iK.div`
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
`,{SubMenu:y}=m.$,w=e=>{var t,a,n;const[d,u]=(0,i.useState)("horizontal"),[w,C]=(0,i.useState)("nav-right");let _=!0;try{(0,l.k6)()}catch(e){_=!1}return(0,i.useEffect)((()=>{function t(){window.innerWidth<=767?u("inline"):u("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?C("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&C("nav-right-collapse")}t();const a=r()(t,10);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}),[e.buttons]),(0,s.tZ)(v,null,(0,s.tZ)(h.X2,{className:"menu",role:"navigation"},e.name&&(0,s.tZ)("div",{className:"header"},e.name),(0,s.tZ)(m.v,{mode:d,style:{backgroundColor:"transparent"}},null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||_)&&t.usesRouter?(0,s.tZ)(m.v.Item,{key:t.label},(0,s.tZ)("div",{role:"tab",className:t.name===e.activeChild?"active":""},(0,s.tZ)("div",null,(0,s.tZ)(o.rU,{to:t.url||""},t.label)))):(0,s.tZ)(m.v.Item,{key:t.label},(0,s.tZ)("div",{className:b()("no-router",{active:t.name===e.activeChild}),role:"tab"},(0,s.tZ)("a",{href:t.url,onClick:t.onClick},t.label)))))),(0,s.tZ)("div",{className:w},(0,s.tZ)(m.v,{mode:"horizontal",triggerSubMenuAction:"click"},null==(a=e.dropDownLinks)?void 0:a.map(((e,t)=>{var a;return(0,s.tZ)(y,{key:t,title:e.label,icon:(0,s.tZ)(g.Z.TriangleDown,null),popupOffset:[10,20],className:"dropdown-menu-links"},null==(a=e.childs)?void 0:a.map((e=>"object"==typeof e?e.disable?(0,s.tZ)(m.$.Item,{key:e.label,css:Z},(0,s.tZ)(f.u,{placement:"top",title:(0,c.t)("Enable 'Allow file uploads to database' in any database's settings")},e.label)):(0,s.tZ)(m.$.Item,{key:e.label},(0,s.tZ)("a",{href:e.url},e.label)):null)))}))),null==(n=e.buttons)?void 0:n.map(((e,t)=>(0,s.tZ)(p.Z,{key:t,buttonStyle:e.buttonStyle,onClick:e.onClick},e.name))))),e.children)}},32228:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(89816),r=a(15926),i=a.n(r),l=a(14670),o=a.n(l);function d(e,t,a,r){void 0===r&&(r=200);const l=o().generate(),d=`/api/v1/${e}/export/?q=${i().encode(t)}&token=${l}`,s=document.createElement("iframe");s.style.display="none",s.src=d,document.body.appendChild(s);const c=window.setInterval((()=>{"done"===(0,n.Z)()[l]&&(window.clearInterval(c),document.body.removeChild(s),a())}),r)}},22562:(e,t,a)=>{"use strict";var n=a(67294),r=a(90731),i=a(5872),l=a.n(i),o=a(16550),d=a(73727),s=a(14890),c=a(31405),u=a(57902),b=a(38703),f=a(85198),h=a(20292),m=a(5667),p=a(38552),g=a(91263),v=a(93185),Z=a(43063),y=a.n(Z),w=a(75049),C=a(51995),_=a(55867),x=a(15926),k=a.n(x),S=a(43700),F=a(61337),T=a(21742),$=a(14114),E=a(40768),I=a(4715),N=a(12),D=a(86074),P=a(22318),z=a(78580),U=a.n(z),R=a(30381),A=a.n(R),O=a(70163),L=a(35932),M=a(39589),q=a(11965);const j={[M.g.Charts]:(0,_.t)("charts"),[M.g.Dashboards]:(0,_.t)("dashboards"),[M.g.Recents]:(0,_.t)("recents"),[M.g.SavedQueries]:(0,_.t)("saved queries")},B={[M.g.Charts]:(0,_.t)("No charts yet"),[M.g.Dashboards]:(0,_.t)("No dashboards yet"),[M.g.Recents]:(0,_.t)("No recents yet"),[M.g.SavedQueries]:(0,_.t)("No saved queries yet")},V={[M.g.Charts]:e=>(0,_.t)("%(other)s charts will appear here",{other:e}),[M.g.Dashboards]:e=>(0,_.t)("%(other)s dashboards will appear here",{other:e}),[M.g.Recents]:e=>(0,_.t)("%(other)s recents will appear here",{other:e}),[M.g.SavedQueries]:e=>(0,_.t)("%(other)s saved queries will appear here",{other:e})},H=C.iK.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`,K=C.iK.div`
  Button {
    svg {
      color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
    }
  }
`;function G(e){let{tableName:t,tab:a,otherTabTitle:n}=e;const r={[M.g.Charts]:"/chart/add",[M.g.Dashboards]:"/dashboard/new",[M.g.SavedQueries]:"/superset/sqllab?new=true"},i={[M.g.Charts]:"/chart/list",[M.g.Dashboards]:"/dashboard/list/",[M.g.SavedQueries]:"/savedqueryview/list/"},l={[M.g.Charts]:"empty-charts.svg",[M.g.Dashboards]:"empty-dashboard.svg",[M.g.Recents]:"union.svg",[M.g.SavedQueries]:"empty-queries.svg"},o=(0,q.tZ)("span",null,B[t]),d=(0,q.tZ)("span",{className:"no-recents"},(()=>{if(a===N.F.Viewed)return(0,_.t)("Recently viewed charts, dashboards, and saved queries will appear here");if(a===N.F.Created)return(0,_.t)("Recently created charts, dashboards, and saved queries will appear here");if(a===N.F.Other){const e=n||(0,_.t)("Other");return V[t](e)}return a===N.F.Edited?(0,_.t)("Recently edited charts, dashboards, and saved queries will appear here"):null})());return a===N.F.Mine||t===M.g.Recents||a===N.F.Other?(0,q.tZ)(H,null,(0,q.tZ)(I.HY,{image:`/static/assets/images/${l[t]}`,description:t===M.g.Recents||a===N.F.Other?d:o},t!==M.g.Recents&&(0,q.tZ)(K,null,(0,q.tZ)(L.Z,{buttonStyle:"primary",onClick:()=>{window.location.href=r[t]}},(0,q.tZ)("i",{className:"fa fa-plus"}),t===M.g.SavedQueries?(0,_.t)("SQL query"):t.split("").slice(0,t.length-1).join(""))))):(0,q.tZ)(H,null,(0,q.tZ)(I.HY,{image:"/static/assets/images/star-circle.svg",description:(0,q.tZ)("span",{className:"no-favorites"},(0,_.t)("You don't have any favorites yet!"))},(0,q.tZ)(L.Z,{buttonStyle:"primary",onClick:()=>{window.location.href=i[t]}},(0,_.t)("See all %(tableName)s",{tableName:t===M.g.SavedQueries?(0,_.t)("SQL Lab queries"):j[t]}))))}const Q=C.iK.div`
  .recentCards {
    max-height: none;
    grid-gap: ${e=>{let{theme:t}=e;return 4*t.gridUnit+"px"}};
  }
`,Y=(0,_.t)("[Untitled]"),W=(0,_.t)("Unknown"),J=e=>"dashboard_title"in e?e.dashboard_title||Y:"slice_name"in e?e.slice_name||Y:"label"in e?e.label||Y:e.item_title||Y,X=e=>{if("sql"in e)return(0,q.tZ)(O.Z.Sql,null);const t="item_url"in e?e.item_url:e.url;return null!=t&&U()(t).call(t,"dashboard")?(0,q.tZ)(O.Z.NavDashboard,null):null!=t&&U()(t).call(t,"explore")?(0,q.tZ)(O.Z.NavCharts,null):null};function ee(e){var t;let{activeChild:a,setActiveChild:r,activityData:i,user:l,isFetchingActivityData:o}=e;const[s,c]=(0,n.useState)(),[u,b]=(0,n.useState)(!1);(0,n.useEffect)((()=>{a===N.F.Edited&&(b(!0),(0,E.Ld)(l.userId).then((e=>{c([...e.editedChart,...e.editedDash]),b(!1)})))}),[a]);const f=[{name:N.F.Edited,label:(0,_.t)("Edited"),onClick:()=>{r(N.F.Edited),(0,F.LS)(F.dR.homepage_activity_filter,N.F.Edited)}},{name:N.F.Created,label:(0,_.t)("Created"),onClick:()=>{r(N.F.Created),(0,F.LS)(F.dR.homepage_activity_filter,N.F.Created)}}];return null!=i&&i[N.F.Viewed]&&f.unshift({name:N.F.Viewed,label:(0,_.t)("Viewed"),onClick:()=>{r(N.F.Viewed),(0,F.LS)(F.dR.homepage_activity_filter,N.F.Viewed)}}),u&&!s||o?(0,q.tZ)(Se,null):(0,q.tZ)(Q,null,(0,q.tZ)(D.Z,{activeChild:a,tabs:f}),(null==(t=i[a])?void 0:t.length)>0||a===N.F.Edited&&null!=s&&s.length?(0,q.tZ)(E._L,{className:"recentCards"},(a===N.F.Edited?s:i[a]).map((e=>{const t=(e=>"sql"in e?`/superset/sqllab?savedQueryId=${e.id}`:"url"in e?e.url:e.item_url)(e),a=(e=>{if("time"in e)return(0,_.t)("Viewed %s",A()(e.time).fromNow());let t;return"changed_on"in e&&(t=e.changed_on),"changed_on_utc"in e&&(t=e.changed_on_utc),(0,_.t)("Modified %s",null==t?W:A()(t).fromNow())})(e);return(0,q.tZ)(E.ZB,{key:t},(0,q.tZ)(d.rU,{to:t},(0,q.tZ)(T.Z,{cover:(0,q.tZ)(n.Fragment,null),url:t,title:J(e),description:a,avatar:X(e),actions:null})))}))):(0,q.tZ)(G,{tableName:M.g.Recents,tab:a}))}var te=a(63105),ae=a.n(te),ne=a(34858),re=a(83673),ie=a(8494),le=a(32228);const oe=(0,$.ZP)((function(e){let{user:t,addDangerToast:a,addSuccessToast:r,mine:i,showThumbnails:l,otherTabData:d,otherTabFilters:s,otherTabTitle:c}=e;const f=(0,o.k6)(),h=(0,F.rV)(F.dR.homepage_chart_filter,N.F.Other),m=ae()(d,(e=>"viz_type"in e)),{state:{loading:p,resourceCollection:g,bulkSelectEnabled:v},setResourceCollection:Z,hasPerm:y,refreshData:w,fetchData:C}=(0,ne.Yi)("chart",(0,_.t)("chart"),a,!0,h===N.F.Mine?i:m,[],!1),x=(0,n.useMemo)((()=>g.map((e=>e.id))),[g]),[k,S]=(0,ne.NE)("chart",x,a),{sliceCurrentlyEditing:T,openChartEditModal:$,handleChartUpdated:I,closeChartEditModal:P}=(0,ne.fF)(Z,g),[z,U]=(0,n.useState)(h),[R,A]=(0,n.useState)(!1),[O,L]=(0,n.useState)(!1);(0,n.useEffect)((()=>{var e;(O||z===N.F.Favorite)&&(e=z,C({pageIndex:0,pageSize:E.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:(0,E.if)(e,M.g.Charts,t,s)})),L(!0)}),[z]);const j=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,le.Z)("chart",t,(()=>{A(!1)})),A(!0)},B=[{name:N.F.Favorite,label:(0,_.t)("Favorite"),onClick:()=>{U(N.F.Favorite),(0,F.LS)(F.dR.homepage_chart_filter,N.F.Favorite)}},{name:N.F.Mine,label:(0,_.t)("Mine"),onClick:()=>{U(N.F.Mine),(0,F.LS)(F.dR.homepage_chart_filter,N.F.Mine)}}];return d&&B.push({name:N.F.Other,label:c,onClick:()=>{U(N.F.Other),(0,F.LS)(F.dR.homepage_chart_filter,N.F.Other)}}),p?(0,q.tZ)(Se,{cover:l}):(0,q.tZ)(u.Z,null,T&&(0,q.tZ)(re.Z,{onHide:P,onSave:I,show:!0,slice:T}),(0,q.tZ)(D.Z,{activeChild:z,tabs:B,buttons:[{name:(0,q.tZ)(n.Fragment,null,(0,q.tZ)("i",{className:"fa fa-plus"}),(0,_.t)("Chart")),buttonStyle:"tertiary",onClick:()=>{window.location.assign("/chart/add")}},{name:(0,_.t)("View All »"),buttonStyle:"link",onClick:()=>{const e=z===N.F.Favorite?`/chart/list/?filters=(favorite:(label:${(0,_.t)("Yes")},value:!t))`:"/chart/list/";f.push(e)}}]}),null!=g&&g.length?(0,q.tZ)(E._L,{showThumbnails:l},g.map((e=>(0,q.tZ)(ie.Z,{key:`${e.id}`,openChartEditModal:$,chartFilter:z,chart:e,userId:null==t?void 0:t.userId,hasPerm:y,showThumbnails:l,bulkSelectEnabled:v,refreshData:w,addDangerToast:a,addSuccessToast:r,favoriteStatus:S[e.id],saveFavoriteStatus:k,handleBulkChartExport:j})))):(0,q.tZ)(G,{tableName:M.g.Charts,tab:z,otherTabTitle:c}),R&&(0,q.tZ)(b.Z,null))}));var de=a(31069),se=a(42110),ce=a(33743),ue=a(120),be=a(83862),fe=a(17198);se.Z.registerLanguage("sql",ce.Z);const he=C.iK.div`
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
`,me=C.iK.div`
  svg {
    margin-left: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;
  }
  .query-title {
    padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit+2}}px;
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
  }
`,pe=C.iK.div`
  pre {
    height: ${e=>{let{theme:t}=e;return 40*t.gridUnit}}px;
    border: none !important;
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}} !important;
    overflow: hidden;
    padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px !important;
  }
`,ge=(0,$.ZP)((e=>{let{user:t,addDangerToast:a,addSuccessToast:r,mine:i,showThumbnails:l,featureFlag:o}=e;const{state:{loading:d,resourceCollection:s},hasPerm:c,fetchData:u,refreshData:b}=(0,ne.Yi)("saved_query",(0,_.t)("query"),a,!0,i,[],!1),[f,h]=(0,n.useState)(N.F.Mine),[m,p]=(0,n.useState)(!1),[g,v]=(0,n.useState)({}),[Z,y]=(0,n.useState)(!0),w=c("can_edit"),x=c("can_delete"),k=(0,C.Fg)();return d?(0,q.tZ)(Se,{cover:l}):(0,q.tZ)(n.Fragment,null,m&&(0,q.tZ)(fe.Z,{description:(0,_.t)("This action will permanently delete the saved query."),onConfirm:()=>{m&&(e=>{let{id:n,label:i}=e;de.Z.delete({endpoint:`/api/v1/saved_query/${n}`}).then((()=>{const e={filters:(0,E.if)(N.F.Created,M.g.SavedQueries,t),pageSize:E.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],pageIndex:0};b(Z?e:void 0),y(!1),p(!1),r((0,_.t)("Deleted: %s",i))}),(0,E.v$)((e=>a((0,_.t)("There was an issue deleting %s: %s",i,e)))))})(g)},onHide:()=>{p(!1)},open:!0,title:(0,_.t)("Delete Query?")}),(0,q.tZ)(D.Z,{activeChild:f,tabs:[{name:N.F.Mine,label:(0,_.t)("Mine"),onClick:()=>{return(e=N.F.Mine,u({pageIndex:0,pageSize:E.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:(0,E.if)(e,M.g.SavedQueries,t)})).then((()=>h(N.F.Mine)));var e}}],buttons:[{name:(0,q.tZ)(n.Fragment,null,(0,q.tZ)("i",{className:"fa fa-plus"}),(0,_.t)("SQL Query")),buttonStyle:"tertiary",onClick:()=>{window.location.href="/superset/sqllab?new=true"}},{name:(0,_.t)("View All »"),buttonStyle:"link",onClick:()=>{window.location.href="/savedqueryview/list"}}]}),s.length>0?(0,q.tZ)(E._L,{showThumbnails:l},s.map((e=>{var t,i,d;return(0,q.tZ)(he,{onClick:()=>{window.location.href=`/superset/sqllab?savedQueryId=${e.id}`},key:e.id},(0,q.tZ)(T.Z,{imgURL:"",url:`/superset/sqllab?savedQueryId=${e.id}`,title:e.label,imgFallbackURL:"/static/assets/images/empty-query.svg",description:(0,_.t)("Ran %s",e.changed_on_delta_humanized),cover:null!=e&&null!=(t=e.sql)&&t.length&&l&&o?(0,q.tZ)(pe,null,(0,q.tZ)(se.Z,{language:"sql",lineProps:{style:{color:k.colors.grayscale.dark2,wordBreak:"break-all",whiteSpace:"pre-wrap"}},style:ue.Z,wrapLines:!0,lineNumberStyle:{display:"none"},showLineNumbers:!1},(0,E.IB)(e.sql,25))):!(l&&(null==e||null==(i=e.sql)||!i.length))&&(0,q.tZ)(n.Fragment,null),actions:(0,q.tZ)(me,null,(0,q.tZ)(T.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},(0,q.tZ)(I.Gj,{overlay:(d=e,(0,q.tZ)(be.v,null,w&&(0,q.tZ)(be.v.Item,{onClick:()=>{window.location.href=`/superset/sqllab?savedQueryId=${d.id}`}},(0,_.t)("Edit")),(0,q.tZ)(be.v.Item,{onClick:()=>{d.id&&(0,ne.bR)(d.id,a,r)}},(0,_.t)("Share")),x&&(0,q.tZ)(be.v.Item,{onClick:()=>{p(!0),v(d)}},(0,_.t)("Delete"))))},(0,q.tZ)(O.Z.MoreVert,{iconColor:k.colors.grayscale.base}))))}))}))):(0,q.tZ)(G,{tableName:M.g.SavedQueries,tab:f}))}));var ve=a(20818),Ze=a(65043);const ye=(0,$.ZP)((function(e){let{user:t,addDangerToast:a,addSuccessToast:r,mine:i,showThumbnails:l,otherTabData:d,otherTabFilters:s,otherTabTitle:c}=e;const u=(0,o.k6)(),f=(0,F.rV)(F.dR.homepage_dashboard_filter,N.F.Other),h=ae()(d,(e=>!("viz_type"in e))),{state:{loading:m,resourceCollection:p},setResourceCollection:g,hasPerm:v,refreshData:Z,fetchData:y}=(0,ne.Yi)("dashboard",(0,_.t)("dashboard"),a,!0,f===N.F.Mine?i:h,[],!1),w=(0,n.useMemo)((()=>p.map((e=>e.id))),[p]),[C,x]=(0,ne.NE)("dashboard",w,a),[k,S]=(0,n.useState)(),[T,$]=(0,n.useState)(f),[I,P]=(0,n.useState)(!1),[z,U]=(0,n.useState)(!1),[R,A]=(0,n.useState)(null);(0,n.useEffect)((()=>{var e;(z||T===N.F.Favorite)&&(e=T,y({pageIndex:0,pageSize:E.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:(0,E.if)(e,M.g.Dashboards,t,s)})),U(!0)}),[T]);const O=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,le.Z)("dashboard",t,(()=>{P(!1)})),P(!0)},L=[{name:N.F.Favorite,label:(0,_.t)("Favorite"),onClick:()=>{$(N.F.Favorite),(0,F.LS)(F.dR.homepage_dashboard_filter,N.F.Favorite)}},{name:N.F.Mine,label:(0,_.t)("Mine"),onClick:()=>{$(N.F.Mine),(0,F.LS)(F.dR.homepage_dashboard_filter,N.F.Mine)}}];return d&&L.push({name:N.F.Other,label:c,onClick:()=>{$(N.F.Other),(0,F.LS)(F.dR.homepage_dashboard_filter,N.F.Other)}}),m?(0,q.tZ)(Se,{cover:l}):(0,q.tZ)(n.Fragment,null,(0,q.tZ)(D.Z,{activeChild:T,tabs:L,buttons:[{name:(0,q.tZ)(n.Fragment,null,(0,q.tZ)("i",{className:"fa fa-plus"}),(0,_.t)("Dashboard")),buttonStyle:"tertiary",onClick:()=>{window.location.assign("/dashboard/new")}},{name:(0,_.t)("View All »"),buttonStyle:"link",onClick:()=>{const e=T===N.F.Favorite?`/dashboard/list/?filters=(favorite:(label:${(0,_.t)("Yes")},value:!t))`:"/dashboard/list/";u.push(e)}}]}),k&&(0,q.tZ)(ve.Z,{dashboardId:null==k?void 0:k.id,show:!0,onHide:()=>S(void 0),onSubmit:e=>de.Z.get({endpoint:`/api/v1/dashboard/${e.id}`}).then((e=>{let{json:t={}}=e;g(p.map((e=>e.id===t.id?t.result:e)))}),(0,E.v$)((e=>a((0,_.t)("An error occurred while fetching dashboards: %s",e)))))}),R&&(0,q.tZ)(fe.Z,{description:(0,q.tZ)(n.Fragment,null,(0,_.t)("Are you sure you want to delete")," ",(0,q.tZ)("b",null,R.dashboard_title),"?"),onConfirm:()=>{(0,E.Iu)(R,Z,r,a,T,null==t?void 0:t.userId),A(null)},onHide:()=>A(null),open:!!R,title:(0,_.t)("Please confirm")}),p.length>0&&(0,q.tZ)(E._L,{showThumbnails:l},p.map((e=>(0,q.tZ)(Ze.Z,{key:e.id,dashboard:e,hasPerm:v,bulkSelectEnabled:!1,showThumbnails:l,userId:null==t?void 0:t.userId,loading:m,openDashboardEditModal:e=>S(e),saveFavoriteStatus:C,favoriteStatus:x[e.id],handleBulkDashboardExport:O,onDelete:e=>A(e)})))),0===p.length&&(0,q.tZ)(G,{tableName:M.g.Dashboards,tab:T}),I&&(0,q.tZ)(b.Z,null))})),we=(0,w.I)(),Ce=["2","3"],_e=C.iK.div`
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
`,xe=C.iK.div`
  ${e=>{let{theme:t}=e;return`\n    .switch {\n      display: flex;\n      flex-direction: row;\n      margin: ${4*t.gridUnit}px;\n      span {\n        display: block;\n        margin: ${t.gridUnit}px;\n        line-height: ${3.5*t.gridUnit}px;\n      }\n    }\n  `}}
`,ke=(0,h.Z)(),Se=e=>{let{cover:t}=e;return(0,q.tZ)(E._L,{showThumbnails:t,className:"loading-cards"},[...new Array(E.iv)].map(((e,a)=>(0,q.tZ)(T.Z,{key:a,cover:!t&&(0,q.tZ)(n.Fragment,null),description:"",loading:!0}))))},Fe=(0,$.ZP)((function(e){let{user:t,addDangerToast:a}=e;const r=(0,P.N$)(t,"SavedQuery","can_read"),i=t.userId.toString(),l=`/api/v1/log/recent_activity/?q=${k().encode({page_size:6})}`,[o,d]=(0,n.useState)("Loading"),s=(0,F.OH)(i,null);let c=!1;const u=(0,v.cr)(v.TT.THUMBNAILS);u&&(c=void 0===(null==s?void 0:s.thumbnails)||(null==s?void 0:s.thumbnails));const[b,f]=(0,n.useState)(c),[h,m]=(0,n.useState)(null),[p,g]=(0,n.useState)(null),[Z,w]=(0,n.useState)(null),[C,x]=(0,n.useState)(null),[T,$]=(0,n.useState)(!0),z=(0,F.rV)(F.dR.homepage_collapse_state,[]),[U,R]=(0,n.useState)(z),A=we.get("welcome.message"),O=we.get("welcome.banner"),L=we.get("welcome.main.replacement"),[M,j]=(0,n.useMemo)((()=>{var e;const t=null==(e=ke.common)?void 0:e.conf.WELCOME_PAGE_LAST_TAB,[a,n]=Array.isArray(t)?t:[void 0,void 0];return a&&n?[(0,_.t)(a),n]:"all"===t?[(0,_.t)("All"),[]]:[(0,_.t)("Examples"),[{col:"created_by",opr:"rel_o_m",value:0}]]}),[]);(0,n.useEffect)((()=>{if(!j)return;const e=(0,F.rV)(F.dR.homepage_activity_filter,null);R(z.length>0?z:Ce),(0,E.xF)(t.userId,l,a,j).then((t=>{const a={};if(a[N.F.Other]=t.other,t.viewed){const n=y()(t.viewed,["item_url",null]).map((e=>e));a[N.F.Viewed]=n,!e&&a[N.F.Viewed]?d(N.F.Viewed):e||a[N.F.Viewed]?d(e||N.F.Created):d(N.F.Created)}else d(e||N.F.Created);m((e=>({...e,...a})))})).catch((0,E.v$)((e=>{m((e=>({...e,[N.F.Viewed]:[]}))),a((0,_.t)("There was an issue fetching your recent activity: %s",e))})));const n=[{col:"created_by",opr:"rel_o_m",value:`${i}`}];Promise.all([(0,E.B1)(i,"dashboard").then((e=>(x(e),Promise.resolve()))).catch((e=>(x([]),a((0,_.t)("There was an issue fetching your dashboards: %s",e)),Promise.resolve()))),(0,E.B1)(i,"chart").then((e=>(g(e),Promise.resolve()))).catch((e=>(g([]),a((0,_.t)("There was an issue fetching your chart: %s",e)),Promise.resolve()))),r?(0,E.B1)(i,"saved_query",n).then((e=>(w(e),Promise.resolve()))).catch((e=>(w([]),a((0,_.t)("There was an issue fetching your saved queries: %s",e)),Promise.resolve()))):Promise.resolve()]).then((()=>{$(!1)}))}),[j]);const B=()=>{f(!b),(0,F.I_)(i,{thumbnails:!b})};(0,n.useEffect)((()=>{!z&&null!=Z&&Z.length&&R((e=>[...e,"4"])),m((e=>({...e,Created:[...(null==p?void 0:p.slice(0,3))||[],...(null==C?void 0:C.slice(0,3))||[],...(null==Z?void 0:Z.slice(0,3))||[]]})))}),[p,Z,C]),(0,n.useEffect)((()=>{var e;!z&&null!=h&&null!=(e=h[N.F.Viewed])&&e.length&&R((e=>["1",...e]))}),[h]);const V=!(null!=h&&h[N.F.Other]||null!=h&&h[N.F.Viewed]),H={activeChild:"Home",name:(0,_.t)("Home")};return u&&(H.buttons=[{name:(0,q.tZ)(xe,null,(0,q.tZ)("div",{className:"switch"},(0,q.tZ)(I.KU,{checked:b,onClick:B}),(0,q.tZ)("span",null,(0,_.t)("Thumbnails")))),onClick:B,buttonStyle:"link"}]),(0,q.tZ)(n.Fragment,null,(0,q.tZ)(D.Z,H),(0,q.tZ)(_e,null,A&&(0,q.tZ)(A,null),O&&(0,q.tZ)(O,null),L&&(0,q.tZ)(L,null),(!O||!L)&&(0,q.tZ)(n.Fragment,null,(0,q.tZ)(S.Z,{activeKey:U,onChange:e=>{R(e),(0,F.LS)(F.dR.homepage_collapse_state,e)},ghost:!0,bigger:!0},(0,q.tZ)(S.Z.Panel,{header:(0,_.t)("Recents"),key:"1"},h&&(h[N.F.Viewed]||h[N.F.Other]||h[N.F.Created])&&"Loading"!==o?(0,q.tZ)(ee,{user:{userId:t.userId},activeChild:o,setActiveChild:d,activityData:h,isFetchingActivityData:T}):(0,q.tZ)(Se,null)),(0,q.tZ)(S.Z.Panel,{header:(0,_.t)("Dashboards"),key:"2"},!C||V?(0,q.tZ)(Se,{cover:b}):(0,q.tZ)(ye,{user:t,mine:C,showThumbnails:b,otherTabData:null==h?void 0:h[N.F.Other],otherTabFilters:j,otherTabTitle:M})),(0,q.tZ)(S.Z.Panel,{header:(0,_.t)("Charts"),key:"3"},!p||V?(0,q.tZ)(Se,{cover:b}):(0,q.tZ)(oe,{showThumbnails:b,user:t,mine:p,otherTabData:null==h?void 0:h[N.F.Other],otherTabFilters:j,otherTabTitle:M})),r&&(0,q.tZ)(S.Z.Panel,{header:(0,_.t)("Saved queries"),key:"4"},Z?(0,q.tZ)(ge,{showThumbnails:b,user:t,mine:Z,featureFlag:u}):(0,q.tZ)(Se,{cover:b}))))))})),Te=(0,n.lazy)((()=>a.e(4109).then(a.bind(a,76499)))),$e=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(906)]).then(a.bind(a,78768)))),Ee=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(1247),a.e(8),a.e(8782),a.e(95),a.e(9563)]).then(a.bind(a,32635)))),Ie=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(1611)]).then(a.bind(a,98217)))),Ne=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(8782),a.e(665)]).then(a.bind(a,33320)))),De=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(4085)]).then(a.bind(a,36942)))),Pe=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(8782),a.e(8774)]).then(a.bind(a,18510)))),ze=(0,n.lazy)((()=>Promise.all([a.e(232),a.e(6362)]).then(a.bind(a,90170)))),Ue=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(4502)]).then(a.bind(a,95731)))),Re=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(5656)]).then(a.bind(a,52438)))),Ae=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(527),a.e(8782),a.e(3197),a.e(6217),a.e(8438)]).then(a.bind(a,58298)))),Oe=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(5336)]).then(a.bind(a,58883)))),Le=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(527),a.e(1247),a.e(8),a.e(981),a.e(5207),a.e(323),a.e(3197),a.e(95),a.e(232),a.e(868),a.e(9540),a.e(1128)]).then(a.bind(a,4189)))),Me=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(6284)]).then(a.bind(a,36444)))),qe=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(8782),a.e(9173)]).then(a.bind(a,7742)))),je=(0,n.lazy)((()=>a.e(7637).then(a.bind(a,7628)))),Be=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(373)]).then(a.bind(a,87827)))),Ve=[{path:"/superset/welcome/",Component:Fe},{path:"/dashboard/list/",Component:Pe},{path:"/superset/dashboard/:idOrSlug/",Component:ze},{path:"/chart/add",Component:Te},{path:"/chart/list/",Component:Ne},{path:"/tablemodelview/list/",Component:Re},{path:"/databaseview/list/",Component:Ue},{path:"/savedqueryview/list/",Component:qe},{path:"/csstemplatemodelview/list/",Component:De},{path:"/annotationlayer/list/",Component:$e},{path:"/annotationlayer/:annotationLayerId/annotation/",Component:Ie},{path:"/superset/sqllab/history/",Component:Me},{path:"/alert/list/",Component:Ee},{path:"/report/list/",Component:Ee,props:{isReportEnabled:!0}},{path:"/alert/:alertId/log/",Component:Oe},{path:"/report/:alertId/log/",Component:Oe,props:{isReportEnabled:!0}},{path:"/explore/",Component:Le},{path:"/superset/explore/p",Component:Le},{path:"/dataset/add/",Component:Ae},{path:"/dataset/:datasetId",Component:Ae},{path:"/rowlevelsecurity/list",Component:(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(1247),a.e(8782),a.e(7177)]).then(a.bind(a,6065))))}];(0,v.cr)(v.TT.TAGGING_SYSTEM)&&(Ve.push({path:"/superset/all_entities/",Component:je}),Ve.push({path:"/superset/tags/",Component:Be}));const He=Ve.map((e=>e.path)).reduce(((e,t)=>({...e,[t]:!0})),{});function Ke(e){if(e){const t=e.split(/[?#]/)[0];return!!He[t]}return!1}var Ge=a(3741),Qe=a(63431),Ye=a(97381),We=a(71255),Je=a(68135),Xe=a(28216),et=a(35755),tt=a(38626),at=a(57865),nt=a(4756);const rt={info:"addInfoToast",alert:"addDangerToast",danger:"addDangerToast",warning:"addWarningToast",success:"addSuccessToast"};function it(e){let{children:t,messages:a}=e;const n=(0,$.e1)();return(0,nt.J)((()=>{a.forEach((e=>{const[t,a]=e,r=n[rt[t]];r&&r(a)}))})),t}var lt=a(25076),ot=a(29147),dt=a(14278);const{common:st}=(0,h.Z)(),ct=(0,w.I)(),ut=e=>{let{children:t}=e;const a=ct.get("root.context.provider");return(0,q.tZ)(Je.a,{theme:lt.r},(0,q.tZ)(Xe.zt,{store:We.h},(0,q.tZ)(tt.W,{backend:at.PD},(0,q.tZ)(it,{messages:st.flash_messages},(0,q.tZ)(ot.DG,null,(0,q.tZ)(dt.EM,null,(0,q.tZ)(et.Fz,{ReactRouterRoute:o.AW,stringifyOptions:{encode:!1}},a?(0,q.tZ)(a,null,t):t)))))))},bt=()=>{const{pathname:e}=(0,o.TH)();return(0,n.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null};(0,p.Z)(),(0,g.Z)(),(0,Qe.Z)();const ft=(0,h.Z)();let ht;const mt=(0,s.DE)({logEvent:Ye.logEvent},We.h.dispatch),pt=()=>{const e=(0,o.TH)();return(0,n.useEffect)((()=>{mt.logEvent(Ge.kV,{path:e.pathname}),ht&&ht!==e.pathname&&Ge.Yd.markTimeOrigin(),ht=e.pathname}),[e.pathname]),(0,q.tZ)(n.Fragment,null)};r.render((0,q.tZ)((()=>(0,q.tZ)(d.VK,null,(0,q.tZ)(bt,null),(0,q.tZ)(pt,null),(0,q.tZ)(ut,null,(0,q.tZ)(c.n,null),(0,q.tZ)(f.Z,{data:ft.common.menu_data,isFrontendRoute:Ke}),(0,q.tZ)(o.rs,null,Ve.map((e=>{let{path:t,Component:a,props:r={},Fallback:i=b.Z}=e;return(0,q.tZ)(o.AW,{path:t,key:t},(0,q.tZ)(n.Suspense,{fallback:(0,q.tZ)(i,null)},(0,q.tZ)(u.Z,null,(0,q.tZ)(a,l()({user:ft.user},r)))))}))),(0,q.tZ)(m.Z,null)))),null),document.getElementById("app"))}},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={id:e,loaded:!1,exports:{}};return d[e].call(a.exports,a,a.exports,c),a.loaded=!0,a.exports}c.m=d,c.amdD=function(){throw new Error("define cannot be used indirect")},c.amdO={},e=[],c.O=(t,a,n,r)=>{if(!a){var i=1/0;for(s=0;s<e.length;s++){for(var[a,n,r]=e[s],l=!0,o=0;o<a.length;o++)(!1&r||i>=r)&&Object.keys(c.O).every((e=>c.O[e](a[o])))?a.splice(o--,1):(l=!1,r<i&&(i=r));if(l){e.splice(s--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[a,n,r]},c.H={},c.G=e=>{Object.keys(c.H).map((t=>{c.H[t](e)}))},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);c.r(r);var i={};t=t||[null,a({}),a([]),a(a)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=a(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,c.d(r,i),r},c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,a)=>(c.f[a](e,t),t)),[])),c.u=e=>6217===e?"6217.cedbe769159374064376.entry.js":2441===e?"2441.84a87e1b904333670286.entry.js":527===e?"527.c0e551182a264e2f7148.entry.js":3197===e?"3197.8071e0eec861b3c6e269.entry.js":323===e?"323.323ae901ba7565bddc59.entry.js":{8:"dca67f420947a30366cc",57:"6a8edc9301437b97a880",95:"59be23df387b52c0b80d",112:"ea34548959147c99db4f",137:"b0843f200ea3df4acae9",158:"7c6c5a6298756fb2e368",177:"854e72ce009097dea6ef",183:"b8a6d32010639756fd5a",215:"2eb952af30b72fbaca47",232:"25deea022c4664b50e80",310:"1b6d3d5fb379f4ffba0c",312:"de243f762dd3dae25a71",326:"a3e9b316555fd79ea74d",336:"ee514f13799d75351117",347:"01e75abc64cbda8b33ab",349:"91b3f93bbea659454ebe",357:"1244ba16b891fa206cad",363:"7d5517b5ba77ac664f31",373:"cdf79ec133c460ebf576",440:"f8e2127f15ad8052eb06",444:"48d289a9acfddad31c4c",452:"c050658411ee58e879e2",597:"4a61352083b112ee09cf",600:"202c01791d6b0888d41f",616:"64cd09891b02fed34751",665:"21ce0ee60db97048f795",704:"97cc4200b81ed4cc36a5",741:"fb1021ca22e56391512a",775:"bd4756a7ecfdd85c317f",783:"ade84b09c6861701a5ad",826:"e4564149bcdcfe49a5b2",868:"68d3817faf986cabcaef",906:"30817e62f07f1abf294f",954:"296c1383fa71efe1ecc8",981:"8e5330a6c04a3c75cd9c",992:"3bb28bf9de5cfb3a31ea",999:"66d4521869b231631f62",1020:"65e85181c3af20adfaf3",1075:"7686aaddcaaafe1fc65c",1128:"b6aaef7b271854c39449",1130:"b75504e12fde2bff1937",1161:"0b8a8ab752bb79536d65",1174:"30bc5e225c6a879478e8",1185:"51c76e5148ce3638cf4d",1221:"e7c18da35561edd7407c",1247:"519fcdece5fe12d2a370",1256:"e47da8a47ce8421a6c35",1258:"84ffa13048dcd63abcbf",1263:"e3d24b7d629f0c9caa0f",1293:"7ae2db4047e52c1955d1",1351:"315f984040a2731d6cbf",1382:"f123e37edc0f45dcca77",1398:"0e8062e0e7e11f86214c",1402:"ef71db83f410e2d77610",1441:"3c51abc9ce0adcb269e5",1458:"b09ea5e1028006cabb5d",1493:"c395f7575cfa71b30738",1568:"ade06aa262190c3f47b4",1573:"1e467de27bd3dba441fd",1605:"09f2d740509950089383",1611:"3b4e34066289dee1857f",1862:"fa980053970bb764ee3a",1877:"3926ef13daefbca43225",1899:"42582cd7f6f09fd108b8",1948:"b182c5e82e668045261c",2079:"73fc3ae216623170b69a",2089:"833e1a633dab60aa1e82",2105:"d5553e1dcb0d56e914e2",2112:"fbeea1159ce35af31257",2197:"0f7d6d8255609dd39297",2229:"d2aa4dae9437b14a7384",2264:"8dca48a562851e445715",2267:"1d613dba270d05e66fd6",2403:"6b0855f12416f000070b",2439:"8379ca70bb023fd2cd2d",2549:"a89b67984e1a91e7bcb7",2646:"c7c6eae3a837335173db",2698:"106e182a75dbf3b70282",2713:"cfb5fefa4663bcc52a9d",2797:"e7d896401450124f316c",2955:"6295f45e8d82a3fd81ce",2983:"77022e8536c5f48eb27d",3036:"ca1ad58a2cb6edbea045",3126:"3ae07b9dda23f4e68545",3141:"1a3ad71ca8414b1aff4c",3187:"177dfb79b42eb73d7866",3195:"a4a97536966b6564c993",3208:"48ce4cffe1e01e20fe1f",3240:"18d808107a08c1b56d69",3265:"b70b50f3b438cae549d4",3325:"c74aeba305c67f0de7fc",3496:"a7f658e4e58767ad6b1e",3544:"7911faad16e31278af77",3558:"836419fc91f20475e280",3567:"d95b5cd0f543a0fa7fcd",3588:"3b7ca92d40664402b992",3606:"54aec15887e18dcf4d6e",3711:"7fd940ff150a975bedb4",3745:"e091779c9460fb41d825",3749:"a8fed202e88865a3c129",3831:"6c76e7ff81d847693bf3",3871:"2ab5d182a330ff8dc633",3955:"ae1e5967d8e165d4c383",3985:"e0db3b71272b791f29f3",4085:"62aab99bb2c5c13f6bd0",4109:"035f7392bcf26e318c4b",4139:"c27e96fb57f180a5fea0",4194:"df8caffe35dc7408592b",4237:"241d0166439bb88825a6",4266:"7b50c83b0b6b87ccd33c",4273:"e50674c10f226bc56c96",4421:"f2885780359216344d5f",4458:"b91e10e355934543f970",4474:"9c4d23562042acc4eab2",4494:"ade2e878221f2034ef77",4502:"316cfa73cf024a783196",4572:"f5bf26556da04f30ff22",4579:"03d7163328e8d555df63",4625:"3321aa0059456f094615",4662:"dea8bc3bbe5cae7135cd",4667:"0fda52175c59292cafb9",4672:"ccf213c8a0828ebb7f45",4732:"2a9aac4aa4178ef96636",4757:"53bd0bbe26f32495e698",4758:"225a2cf803122d531ac1",4790:"8e31d8153c0ca38564a8",4794:"77b2d851251414066907",4797:"06a8550688aa97522575",4810:"13d8a4a65f2fa69630df",4817:"e5ec7f93c7b83dbc8e10",4832:"a65fafcbf585f484da44",4851:"e3a5a687922d1f1f61c4",4854:"aeafd73b3efefad89176",4936:"31dba9d54004fd0b4f6b",4972:"e1d7d70ebc1e8e374eb1",5094:"0a1ac89ea445b07b5a72",5123:"42114fa32b185e95acdf",5181:"6156794f275b521bfeab",5201:"b410f0b9661764777ae1",5207:"1b166f826e97b201ae04",5224:"6801df583a7baa6f38df",5226:"164f0157f65b94ac86ea",5249:"960fa56954a3390a45d0",5264:"cfd910d048817219d524",5281:"71fb054b1d5a4969f94e",5330:"6a3f757875b50336fa52",5335:"ffcda709454ee8e00875",5336:"de4ae23774f8ad67b971",5350:"7c476e1bcd37583d1ad2",5359:"b948569636c2e25cf87e",5367:"4eecb7542f1d0f20e390",5378:"97d3f65161ee31afe88b",5422:"4c7b29775067e1b09212",5507:"f9862baff82efddcfed6",5566:"e46f978889c1aef862ad",5580:"a6fffc2d36e02dfdd558",5592:"34f938a1511d7766860c",5641:"03cee1d1e1120dca640f",5656:"f16df6feb28c2885d3ea",5707:"ee1bae94981497a1099b",5771:"e6bd7d04c59062204af7",5772:"bae14b9b959866da03ba",5777:"bd047178347cf48818b5",5802:"10c562415702931e090a",5816:"09a58c174324a1095068",5832:"b4253794b4e4f614fdad",5838:"03b4e5235c29124ba82b",5906:"0816e0f97502443c7233",5962:"8e22959b6677bb2c904e",5972:"e2b002c74e3f3f64bd8b",5998:"3acb25873e499325f00e",6061:"c0d72749bdfdbe1f0675",6126:"b1e9e54700dc790f535e",6150:"2b84bc490340c9762ce6",6167:"a1a753704b31b1574914",6207:"77c62667b74526939ac1",6254:"d679cfabbe67c893078a",6284:"aa0e63d64ff4d5ea9dc3",6303:"5c84e2437e0384ee0b13",6357:"57f7615e3a9ef917ca82",6362:"977cb591e862cb4d1f88",6371:"8b3a79bdcffc8199f2ce",6377:"68d56cb0512e7003eacd",6420:"c0bab80e31e3cb9d7370",6447:"4982ddd1a2cfc3462d35",6486:"b4e2ce371cfa18faee67",6507:"662e962171154f1f9157",6668:"c9ce3d6771f6b266aa3f",6682:"8d7f828696799beb97ed",6693:"2bf5bddd2e83e07f6763",6758:"75f6753a49fe647bc674",6819:"bc3027bcb33a6f068f74",6883:"3725a5f79aad6bf56dbd",6981:"37a59d45844d993b5526",7003:"7e2cbc04372fc91eb049",7156:"2dd1002db8b996ecacc5",7177:"cb4bb5d0f04020af5d24",7183:"7ef924adae1d79c59a30",7245:"7919f5dfe4abd96372c7",7249:"26389e9e4698c17823e1",7253:"cf9e4c87e6bac89b1d12",7405:"ed30936869c11b67b644",7460:"269bcab302a8d01e4b71",7521:"cb1360d4eb90446f3738",7584:"2a0efbe0d8bbb1942c39",7610:"cd111d14a239de6cbf67",7637:"ffa3342484cc118b32f1",7654:"7781029cd7874c62c004",7716:"53ac5c1205f6e1e6e616",7760:"2ac2524484cd50006129",7803:"716853494168af0ba3a9",7832:"2478a72a59cd4d05fdc5",7850:"2e1b1dd1c6ac18288e18",7922:"557ae239cc7e3f8ccead",7984:"d5704e54bf74dfb88424",7989:"f4a6c401a92c88bca1b2",8041:"4697dd9418c10110c66f",8312:"037d8fbe29610cde8fed",8349:"6602c65d3c4cec8b27b2",8370:"16a5bf7a5abd35871cfe",8398:"ea0e18eecdbcd98ba60b",8425:"216064963022a7599339",8438:"53adce99108db3b56278",8463:"3626549b23225a6e2c95",8464:"9c7781291a8e0460eef9",8491:"553928348feb33e7dcbf",8551:"ef6e4851f173b6534a9d",8623:"0dfe5fdeff8c56bcee19",8656:"a0536d45eaee4b70ae6b",8682:"e123504ae9bdae42d7c6",8695:"f5f9d5fad83cad0b90ea",8701:"019d34d64d2c469922ab",8750:"0b72ee1a02623f83e0ca",8774:"d55eac2f6a0d4d7177a6",8782:"97454301d31f890f5a70",8883:"8ba088da5c466b5829ba",8970:"bb1ed3f0e87a0bc74792",8971:"1f51ccb0a3dee1492d37",9013:"8f7d3503973d9608c3f6",9052:"b9ce77b76d5488a36355",9101:"6c6fe31a4c16027c453e",9109:"ef04744c9e66d5a22e11",9173:"baeaa233d878ce48044d",9207:"bda2f64f1dbce6ae7d7d",9305:"1d76f1f9c53ccf34e596",9322:"8622b05fed2ed11cfb55",9325:"c5562d7456f59804ae5d",9393:"1e925598ffe216e24710",9396:"dbd8d78e8e000c257257",9483:"3be07711d91ef63ba980",9510:"d3a9f49bff7461a62ef6",9540:"67d5d49c7f1c95288115",9558:"faf680e140cfca20867e",9563:"d6e79a30ac772ea01149",9622:"442e335838b6579b00c4",9681:"de2757c9960ff08f92b9",9767:"afafa15398ea7165cb04",9794:"4e85b8dbced27ec7a2bc",9811:"3c24ba556c37f0468945",9857:"40e39f4283bce96d857f",9873:"634e2618746831f36034",9877:"8988693a046a18f3dbdf"}[e]+".chunk.js",c.miniCssF=e=>(({452:"DashboardContainer",1128:"Chart",7177:"RowLevelSecurityList",9563:"AlertReportList"}[e]||e)+"."+{137:"b0843f200ea3df4acae9",452:"c050658411ee58e879e2",1128:"b6aaef7b271854c39449",1441:"3c51abc9ce0adcb269e5",1877:"3926ef13daefbca43225",3036:"ca1ad58a2cb6edbea045",4194:"df8caffe35dc7408592b",4237:"241d0166439bb88825a6",4494:"ade2e878221f2034ef77",4936:"31dba9d54004fd0b4f6b",5378:"97d3f65161ee31afe88b",5422:"4c7b29775067e1b09212",5566:"e46f978889c1aef862ad",5772:"bae14b9b959866da03ba",7177:"cb4bb5d0f04020af5d24",8623:"0dfe5fdeff8c56bcee19",9563:"d6e79a30ac772ea01149"}[e]+".chunk.css"),c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},r="superset:",c.l=(e,t,a,i)=>{if(n[e])n[e].push(t);else{var l,o;if(void 0!==a)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var u=d[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+a){l=u;break}}l||(o=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.setAttribute("data-webpack",r+a),l.src=e),n[e]=[t];var b=(t,a)=>{l.onerror=l.onload=null,clearTimeout(f);var r=n[e];if(delete n[e],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((e=>e(a))),t)return t(a)},f=setTimeout(b.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=b.bind(null,l.onerror),l.onload=b.bind(null,l.onload),o&&document.head.appendChild(l)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),c.p="/static/assets/",i=e=>new Promise(((t,a)=>{var n=c.miniCssF(e),r=c.p+n;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=(l=a[n]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(r===e||r===t))return l}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var l;if((r=(l=i[n]).getAttribute("data-href"))===e||r===t)return l}})(n,r))return t();((e,t,a,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=i=>{if(r.onerror=r.onload=null,"load"===i.type)a();else{var l=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=l,d.request=o,r.parentNode.removeChild(r),n(d)}},r.href=t,document.head.appendChild(r)})(e,r,t,a)})),l={7103:0},c.f.miniCss=(e,t)=>{l[e]?t.push(l[e]):0!==l[e]&&{137:1,452:1,1128:1,1441:1,1877:1,3036:1,4194:1,4237:1,4494:1,4936:1,5378:1,5422:1,5566:1,5772:1,7177:1,8623:1,9563:1}[e]&&t.push(l[e]=i(e).then((()=>{l[e]=0}),(t=>{throw delete l[e],t})))},(()=>{var e={7103:0};c.f.j=(t,a)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var r=new Promise(((a,r)=>n=e[t]=[a,r]));a.push(n[2]=r);var i=c.p+c.u(t),l=new Error;c.l(i,(a=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}}),"chunk-"+t,t)}},c.H.j=t=>{if(!c.o(e,t)||void 0===e[t]){e[t]=null;var a=document.createElement("link");a.charset="utf-8",c.nc&&a.setAttribute("nonce",c.nc),a.rel="preload",a.as="script",a.href=c.p+c.u(t),document.head.appendChild(a)}},c.O.j=t=>0===e[t];var t=(t,a)=>{var n,r,[i,l,o]=a,d=0;if(i.some((t=>0!==e[t]))){for(n in l)c.o(l,n)&&(c.m[n]=l[n]);if(o)var s=o(c)}for(t&&t(a);d<i.length;d++)r=i[d],c.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return c.O(s)},a=globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),o={1128:[1216,527,1247,8,981,5207,5640,3197,95,868,9540,4717,452],6362:[1216,527,1247,8,981,5207,5640,3197,95,868,9540,4717,452]},c.f.preload=e=>{var t=o[e];Array.isArray(t)&&t.map(c.G)},c.O(void 0,[1216,504,2450,2318,5429,8532,3727,7748,2087,5755,845,5640,9602,8047,6209,6579,8989,6839,8795,5296,5198,4717],(()=>c(25076)));var u=c.O(void 0,[1216,504,2450,2318,5429,8532,3727,7748,2087,5755,845,5640,9602,8047,6209,6579,8989,6839,8795,5296,5198,4717],(()=>c(22562)));u=c.O(u)})();
//# sourceMappingURL=spa.057c7dbd6b43f18de9bf.entry.js.map