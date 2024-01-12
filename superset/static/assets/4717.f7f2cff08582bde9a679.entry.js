"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4717],{79789:(e,t,i)=>{i.d(t,{Z:()=>c});var r=i(67294),l=i(51995),n=i(61988),a=i(70707),o=i(58593),s=i(11965);const c=function(e){let{certifiedBy:t,details:i,size:c="l"}=e;const d=(0,l.Fg)();return(0,s.tZ)(o.u,{id:"certified-details-tooltip",title:(0,s.tZ)(r.Fragment,null,t&&(0,s.tZ)("div",null,(0,s.tZ)("strong",null,(0,n.t)("Certified by %s",t))),(0,s.tZ)("div",null,i))},(0,s.tZ)(a.Z.Certified,{iconColor:d.colors.primary.base,iconSize:c}))}},17198:(e,t,i)=>{i.d(t,{Z:()=>p});var r=i(51995),l=i(61988),n=i(67294),a=i(9875),o=i(74069),s=i(49238),c=i(11965);const d=r.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    text-transform: uppercase;
  }
`,h=r.iK.div`
  line-height: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  padding-top: 16px;
`;function p(e){let{description:t,onConfirm:i,onHide:r,open:p,title:u}=e;const[m,f]=(0,n.useState)(!0),[g,b]=(0,n.useState)(""),v=()=>{b(""),i()};return(0,c.tZ)(o.default,{disablePrimaryButton:m,onHide:()=>{b(""),r()},onHandledPrimaryAction:v,primaryButtonName:(0,l.t)("delete"),primaryButtonType:"danger",show:p,title:u},(0,c.tZ)(h,null,t),(0,c.tZ)(d,null,(0,c.tZ)(s.lX,{htmlFor:"delete"},(0,l.t)('Type "%s" to confirm',(0,l.t)("DELETE"))),(0,c.tZ)(a.II,{type:"text",id:"delete",autoComplete:"off",value:g,onChange:e=>{var t;const i=null!=(t=e.target.value)?t:"";f(i.toUpperCase()!==(0,l.t)("DELETE")),b(i)},onPressEnter:()=>{m||v()}})))}},36674:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(67294),l=i(51995),n=i(11965),a=i(61988),o=i(58593),s=i(70707);const c=l.iK.a`
  ${e=>{let{theme:t}=e;return n.iv`
    font-size: ${t.typography.sizes.xl}px;
    display: flex;
    padding: 0 0 0 ${2*t.gridUnit}px;
  `}};
`,d=e=>{let{itemId:t,isStarred:i,showTooltip:l,saveFaveStar:d,fetchFaveStar:h}=e;(0,r.useEffect)((()=>{null==h||h(t)}),[h,t]);const p=(0,r.useCallback)((e=>{e.preventDefault(),d(t,!!i)}),[i,t,d]),u=(0,n.tZ)(c,{href:"#",onClick:p,className:"fave-unfave-icon",role:"button"},i?(0,n.tZ)(s.Z.FavoriteSelected,null):(0,n.tZ)(s.Z.FavoriteUnselected,null));return l?(0,n.tZ)(o.u,{id:"fave-unfave-tooltip",title:(0,a.t)("Click to favorite/unfavorite")},u):u}},4144:(e,t,i)=>{i.d(t,{Z:()=>c});var r=i(73126),l=i(67294),n=i(51995),a=i(68492),o=i(11965);const s=n.iK.div`
  background-image: url(${e=>{let{src:t}=e;return t}});
  background-size: cover;
  background-position: center ${e=>{let{position:t}=e;return t}};
  display: inline-block;
  height: calc(100% - 1px);
  width: calc(100% - 2px);
  margin: 1px 1px 0 1px;
`;function c(e){let{src:t,fallback:i,isLoading:n,position:c,...d}=e;const[h,p]=(0,l.useState)(i);return(0,l.useEffect)((()=>(t&&fetch(t).then((e=>e.blob())).then((e=>{if(/image/.test(e.type)){const t=URL.createObjectURL(e);p(t)}})).catch((e=>{a.Z.error(e),p(i)})),()=>{p(i)})),[t,i]),(0,o.tZ)(s,(0,r.Z)({src:n?i:h},d,{position:c}))}},60718:(e,t,i)=>{i.d(t,{m:()=>p});var r=i(31069),l=i(61988),n=i(15926),a=i.n(n),o=i(65108),s=i(98286);const c=new Map,d=(0,o.g)(r.Z.get,c,(e=>{let{endpoint:t}=e;return t||""})),h=e=>({value:e.name,label:e.name,key:e.id}),p=async(e,t,i)=>{const r="name",n=a().encode({filters:[{col:r,opr:"ct",value:e}],page:t,page_size:i,order_column:r,order_direction:"asc"});return d({endpoint:`/api/v1/tag/?q=${n}`}).then((e=>({data:e.json.result.filter((e=>1===e.type)).map(h),totalCount:e.json.count}))).catch((async e=>{const t=(e=>{let{error:t,message:i}=e,r=i||t||(0,l.t)("An error has occurred");return"Forbidden"===i&&(r=(0,l.t)("You do not have permission to read tags")),r})(await(0,s.O$)(e));throw new Error(t)}))}},20818:(e,t,i)=>{i.d(t,{Z:()=>q});var r=i(57557),l=i.n(r),n=i(67294),a=i(9875),o=i(49238),s=i(51127),c=i.n(s),d=i(35932),h=i(4715),p=i(15926),u=i.n(p),m=i(51995),f=i(61988),g=i(81545),b=i(31069),v=i(55786),y=i(78161),F=i(28062),x=i(93185),Z=i(74069),C=i(94670),S=i(45697),k=i.n(S),$=i(76787),w=i(11965);const N={onChange:k().func,labelMargin:k().number,colorScheme:k().string,hasCustomLabelColors:k().bool};class T extends n.PureComponent{constructor(e){super(e),this.state={hovered:!1},this.categoricalSchemeRegistry=(0,g.Z)(),this.choices=this.categoricalSchemeRegistry.keys().map((e=>[e,e])),this.schemes=this.categoricalSchemeRegistry.getMap()}setHover(e){this.setState({hovered:e})}render(){const{colorScheme:e,labelMargin:t=0,hasCustomLabelColors:i}=this.props;return(0,w.tZ)($.Z,{description:(0,f.t)("Any color palette selected here will override the colors applied to this dashboard's individual charts"),labelMargin:t,name:"color_scheme",onChange:this.props.onChange,value:e,choices:this.choices,clearable:!0,schemes:this.schemes,hovered:this.state.hovered,hasCustomLabelColors:i})}}T.propTypes=N,T.defaultProps={hasCustomLabelColors:!1,colorScheme:void 0,onChange:()=>{}};const I=T;var _=i(87999),j=i(98286),E=i(14114),O=i(48273),U=i(60718);const M=(0,m.iK)(o.xJ)`
  margin-bottom: 0;
`,A=(0,m.iK)(C.Ad)`
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondary.light2}};
`;var R={name:"1blj7km",styles:"margin-top:1em"};const q=(0,E.ZP)((e=>{let{addSuccessToast:t,addDangerToast:i,colorScheme:r,dashboardId:s,dashboardInfo:p,dashboardTitle:m,onHide:S=(()=>{}),onlyApply:k=!1,onSubmit:$=(()=>{}),show:N=!1}=e;const[T]=h.qz.useForm(),[E,q]=(0,n.useState)(!1),[D,J]=(0,n.useState)(!1),[L,X]=(0,n.useState)(r),[z,B]=(0,n.useState)(""),[K,P]=(0,n.useState)(),[H,G]=(0,n.useState)([]),[Y,V]=(0,n.useState)([]),W=k?(0,f.t)("Apply"):(0,f.t)("Save"),[Q,ee]=(0,n.useState)([]),te=(0,g.Z)(),ie=(0,n.useMemo)((()=>Q.map((e=>({value:e.name,label:e.name,key:e.name})))),[Q.length]),re=async e=>{const{error:t,statusText:i,message:r}=await(0,j.O$)(e);let l=t||i||(0,f.t)("An error has occurred");"object"==typeof r&&"json_metadata"in r?l=r.json_metadata:"string"==typeof r&&(l=r,"Forbidden"===r&&(l=(0,f.t)("You do not have permission to edit this dashboard"))),Z.default.error({title:(0,f.t)("Error"),content:l,okButtonProps:{danger:!0,className:"btn-danger"}})},le=(0,n.useCallback)((function(e,t,i,r){void 0===e&&(e="owners"),void 0===t&&(t="");const l=u().encode({filter:t,page:i,page_size:r});return b.Z.get({endpoint:`/api/v1/dashboard/related/${e}?q=${l}`}).then((e=>({data:e.json.result.filter((e=>void 0===e.extra.active||e.extra.active)).map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),ne=(0,n.useCallback)((e=>{const{id:t,dashboard_title:i,slug:r,certified_by:n,certification_details:a,owners:o,roles:s,metadata:d,is_managed_externally:h}=e,p={id:t,title:i,slug:r||"",certifiedBy:n||"",certificationDetails:a||"",isManagedExternally:h||!1};T.setFieldsValue(p),P(p),G(o),V(s),X(d.color_scheme);const u=l()(d,["positions","shared_label_colors","color_scheme_domain"]);B(u?c()(u):"")}),[T]),ae=(0,n.useCallback)((()=>{q(!0),b.Z.get({endpoint:`/api/v1/dashboard/${s}`}).then((e=>{var t;const i=e.json.result,r=null!=(t=i.json_metadata)&&t.length?JSON.parse(i.json_metadata):{};ne({...i,metadata:r}),q(!1)}),re)}),[s,ne]),oe=()=>{try{return null!=z&&z.length?JSON.parse(z):{}}catch(e){return{}}},se=e=>{const t=(0,v.Z)(e).map((e=>({id:e.value,full_name:e.label})));G(t)},ce=e=>{const t=(0,v.Z)(e).map((e=>({id:e.value,name:e.label})));V(t)},de=()=>(H||[]).map((e=>({value:e.id,label:e.full_name||`${e.first_name} ${e.last_name}`}))),he=function(e,t){void 0===e&&(e="");let{updateMetadata:i=!0}=void 0===t?{}:t;const r=te.keys(),l=oe();if(e&&!r.includes(e))throw Z.default.error({title:(0,f.t)("Error"),content:(0,f.t)("A valid color scheme is required"),okButtonProps:{danger:!0,className:"btn-danger"}}),new Error("A valid color scheme is required");i&&(l.color_scheme=e,l.label_colors=l.label_colors||{},B(c()(l))),X(e)};return(0,n.useEffect)((()=>{N&&(p?ne(p):ae()),C.Ad.preload()}),[p,ae,ne,N]),(0,n.useEffect)((()=>{m&&K&&K.title!==m&&T.setFieldsValue({...K,title:m})}),[K,m,T]),(0,n.useEffect)((()=>{if((0,x.cr)(x.TT.TAGGING_SYSTEM))try{(0,O.$3)({objectType:O.g.DASHBOARD,objectId:s,includeTypes:!1},(e=>ee(e)),(e=>{i(`Error fetching tags: ${e.text}`)}))}catch(e){re(e)}}),[s]),(0,w.tZ)(Z.default,{show:N,onHide:S,title:(0,f.t)("Dashboard properties"),footer:(0,w.tZ)(n.Fragment,null,(0,w.tZ)(d.Z,{htmlType:"button",buttonSize:"small",onClick:S,cta:!0},(0,f.t)("Cancel")),(0,w.tZ)(d.Z,{onClick:T.submit,buttonSize:"small",buttonStyle:"primary",className:"m-r-5",cta:!0,disabled:null==K?void 0:K.isManagedExternally,tooltip:null!=K&&K.isManagedExternally?(0,f.t)("This dashboard is managed externally, and can't be edited in Superset"):""},W)),responsive:!0},(0,w.tZ)(h.qz,{form:T,onFinish:()=>{var e,r,l,n;const{title:a,slug:o,certifiedBy:d,certificationDetails:h}=T.getFieldsValue();let p,u=L,m="",g=z;try{if(!g.startsWith("{")||!g.endsWith("}"))throw new Error;p=JSON.parse(g)}catch(e){return void i((0,f.t)("JSON metadata is invalid!"))}u=(null==(e=p)?void 0:e.color_scheme)||L,m=null==(r=p)?void 0:r.color_namespace,null!=(l=p)&&l.shared_label_colors&&delete p.shared_label_colors,null!=(n=p)&&n.color_scheme_domain&&delete p.color_scheme_domain;const v=(0,y.ZP)();var Z;if(F.getNamespace(m).resetColors(),u?(v.updateColorMap(m,u),p.shared_label_colors=Object.fromEntries(v.getColorMap()),p.color_scheme_domain=(null==(Z=te.get(L))?void 0:Z.colors)||[]):(v.reset(),p.shared_label_colors={},p.color_scheme_domain=[]),g=c()(p),he(u,{updateMetadata:!1}),(0,x.cr)(x.TT.TAGGING_SYSTEM))try{(0,O.$3)({objectType:O.g.DASHBOARD,objectId:s,includeTypes:!1},(e=>{return t=e,(i=Q).map((e=>{t.some((t=>t.name===e.name))||(0,O._U)({objectType:O.g.DASHBOARD,objectId:s,includeTypes:!1},e.name,(()=>{}),(()=>{}))})),void t.map((e=>{i.some((t=>t.name===e.name))||(0,O.OY)({objectType:O.g.DASHBOARD,objectId:s},e,(()=>{}),(()=>{}))}));var t,i}),(e=>{re(e)}))}catch(e){re(e)}const C={},w={};(0,x.cr)(x.TT.DASHBOARD_RBAC)&&(C.roles=Y,w.roles=(Y||[]).map((e=>e.id)));const N={id:s,title:a,slug:o,jsonMetadata:g,owners:H,colorScheme:u,colorNamespace:m,certifiedBy:d,certificationDetails:h,...C};k?($(N),S(),t((0,f.t)("Dashboard properties updated"))):b.Z.put({endpoint:`/api/v1/dashboard/${s}`,headers:{"Content-Type":"application/json"},body:JSON.stringify({dashboard_title:a,slug:o||null,json_metadata:g||null,owners:(H||[]).map((e=>e.id)),certified_by:d||null,certification_details:d&&h?h:null,...w})}).then((()=>{$(N),S(),t((0,f.t)("The dashboard has been saved"))}),re)},layout:"vertical",initialValues:K},(0,w.tZ)(h.X2,null,(0,w.tZ)(h.JX,{xs:24,md:24},(0,w.tZ)("h3",null,(0,f.t)("Basic information")))),(0,w.tZ)(h.X2,{gutter:16},(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(o.xJ,{label:(0,f.t)("Name"),name:"title"},(0,w.tZ)(a.II,{type:"text",disabled:E}))),(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(M,{label:(0,f.t)("URL slug"),name:"slug"},(0,w.tZ)(a.II,{type:"text",disabled:E})),(0,w.tZ)("p",{className:"help-block"},(0,f.t)("A readable URL for your dashboard")))),(0,x.cr)(x.TT.DASHBOARD_RBAC)?(()=>{const e=oe(),t=!!Object.keys((null==e?void 0:e.label_colors)||{}).length;return(0,w.tZ)(n.Fragment,null,(0,w.tZ)(h.X2,null,(0,w.tZ)(h.JX,{xs:24,md:24},(0,w.tZ)("h3",{style:{marginTop:"1em"}},(0,f.t)("Access")))),(0,w.tZ)(h.X2,{gutter:16},(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(M,{label:(0,f.t)("Owners")},(0,w.tZ)(h.qb,{allowClear:!0,allowNewOptions:!0,ariaLabel:(0,f.t)("Owners"),disabled:E,mode:"multiple",onChange:se,options:(e,t,i)=>le("owners",e,t,i),value:de()})),(0,w.tZ)("p",{className:"help-block"},(0,f.t)("Owners is a list of users who can alter the dashboard. Searchable by name or username."))),(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(M,{label:(0,f.t)("Roles")},(0,w.tZ)(h.qb,{allowClear:!0,ariaLabel:(0,f.t)("Roles"),disabled:E,mode:"multiple",onChange:ce,options:(e,t,i)=>le("roles",e,t,i),value:(Y||[]).map((e=>({value:e.id,label:`${e.name}`})))})),(0,w.tZ)("p",{className:"help-block"},(0,f.t)("Roles is a list which defines access to the dashboard. Granting a role access to a dashboard will bypass dataset level checks. If no roles are defined, regular access permissions apply.")))),(0,w.tZ)(h.X2,null,(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(I,{hasCustomLabelColors:t,onChange:he,colorScheme:L,labelMargin:4}))))})():(()=>{const e=oe(),t=!!Object.keys((null==e?void 0:e.label_colors)||{}).length;return(0,w.tZ)(h.X2,{gutter:16},(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)("h3",{style:{marginTop:"1em"}},(0,f.t)("Access")),(0,w.tZ)(M,{label:(0,f.t)("Owners")},(0,w.tZ)(h.qb,{allowClear:!0,ariaLabel:(0,f.t)("Owners"),disabled:E,mode:"multiple",onChange:se,options:(e,t,i)=>le("owners",e,t,i),value:de()})),(0,w.tZ)("p",{className:"help-block"},(0,f.t)("Owners is a list of users who can alter the dashboard. Searchable by name or username."))),(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)("h3",{style:{marginTop:"1em"}},(0,f.t)("Colors")),(0,w.tZ)(I,{hasCustomLabelColors:t,onChange:he,colorScheme:L,labelMargin:4})))})(),(0,w.tZ)(h.X2,null,(0,w.tZ)(h.JX,{xs:24,md:24},(0,w.tZ)("h3",null,(0,f.t)("Certification")))),(0,w.tZ)(h.X2,{gutter:16},(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(M,{label:(0,f.t)("Certified by"),name:"certifiedBy"},(0,w.tZ)(a.II,{type:"text",disabled:E})),(0,w.tZ)("p",{className:"help-block"},(0,f.t)("Person or group that has certified this dashboard."))),(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(M,{label:(0,f.t)("Certification details"),name:"certificationDetails"},(0,w.tZ)(a.II,{type:"text",disabled:E})),(0,w.tZ)("p",{className:"help-block"},(0,f.t)("Any additional detail to show in the certification tooltip.")))),(0,x.cr)(x.TT.TAGGING_SYSTEM)?(0,w.tZ)(h.X2,{gutter:16},(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)("h3",{css:R},(0,f.t)("Tags")))):null,(0,x.cr)(x.TT.TAGGING_SYSTEM)?(0,w.tZ)(h.X2,{gutter:16},(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(M,null,(0,w.tZ)(h.qb,{ariaLabel:"Tags",mode:"multiple",value:ie,options:U.m,onChange:e=>{const t=[...new Set(e.map((e=>e.label)))];ee([...t.map((e=>({name:e})))])},allowClear:!0})),(0,w.tZ)("p",{className:"help-block"},(0,f.t)("A list of tags that have been applied to this chart.")))):null,(0,w.tZ)(h.X2,null,(0,w.tZ)(h.JX,{xs:24,md:24},(0,w.tZ)("h3",{style:{marginTop:"1em"}},(0,w.tZ)(d.Z,{buttonStyle:"link",onClick:()=>J(!D)},(0,w.tZ)("i",{className:"fa fa-angle-"+(D?"down":"right"),style:{minWidth:"1em"}}),(0,f.t)("Advanced"))),D&&(0,w.tZ)(n.Fragment,null,(0,w.tZ)(M,{label:(0,f.t)("JSON metadata")},(0,w.tZ)(A,{showLoadingForImport:!0,name:"json_metadata",value:z,onChange:B,tabSize:2,width:"100%",height:"200px",wrapEnabled:!0})),(0,w.tZ)("p",{className:"help-block"},(0,f.t)("This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter specific parameters."),k&&(0,w.tZ)(n.Fragment,null," ",(0,f.t)('Please DO NOT overwrite the "filter_scopes" key.')," ",(0,w.tZ)(_.Z,{triggerNode:(0,w.tZ)("span",{className:"alert-link"},(0,f.t)('Use "%(menuName)s" menu instead.',{menuName:(0,f.t)("Set filter mapping")}))}))))))))}))},87999:(e,t,i)=>{i.d(t,{Z:()=>fe});var r=i(67294),l=i(51995),n=i(1304),a=i(28216),o=i(14890),s=i(81395),c=i(9467),d=i(45697),h=i.n(d),p=i(94184),u=i.n(p),m=i(35932),f=i(11965),g=i(61988),b=i(41609),v=i.n(b),y=i(80621),F=i(81255);const x=[F.gn,F.U0];function Z(e){let{currentNode:t={},components:i={},filterFields:r=[],selectedChartId:l}=e;if(!t)return null;const{type:n}=t;if(F.dW===n&&t&&t.meta&&t.meta.chartId){const e={value:t.meta.chartId,label:t.meta.sliceName||`${n} ${t.meta.chartId}`,type:n,showCheckbox:l!==t.meta.chartId};return{...e,children:r.map((i=>({value:`${t.meta.chartId}:${i}`,label:`${e.label}`,type:"filter_box",showCheckbox:!1})))}}let a=[];if(t.children&&t.children.length&&t.children.forEach((e=>{const t=Z({currentNode:i[e],components:i,filterFields:r,selectedChartId:l}),n=i[e].type;x.includes(n)?a.push(t):a=a.concat(t)})),x.includes(n)){let e=null;return e=n===F.U0?(0,g.t)("All charts"):t.meta&&t.meta.text?t.meta.text:`${n} ${t.id}`,{value:t.id,label:e,type:n,children:a}}return a}function C(e){let{components:t={},filterFields:i=[],selectedChartId:r}=e;return v()(t)?[]:[{...Z({currentNode:t[y._4],components:t,filterFields:i,selectedChartId:r})}]}function S(e,t){void 0===e&&(e=[]),void 0===t&&(t=-1);const i=[],r=(e,l)=>{e&&e.children&&(-1===t||l<t)&&(i.push(e.value),e.children.forEach((e=>r(e,l+1))))};return e.length>0&&e.forEach((e=>{r(e,0)})),i}var k=i(9679);function $(e){let{activeFilterField:t,checkedFilterFields:i}=e;return(0,k.o)(t?[t]:i)}var w=i(20194);function N(e){let{activeFilterField:t,checkedFilterFields:i}=e;if(t)return(0,w._)(t).chartId;if(i.length){const{chartId:e}=(0,w._)(i[0]);return i.some((t=>(0,w._)(t).chartId!==e))?null:e}return null}function T(e){let{checkedFilterFields:t=[],activeFilterField:i,filterScopeMap:r={},layout:l={}}=e;const n=$({checkedFilterFields:t,activeFilterField:i}),a=i?[i]:t,o=C({components:l,filterFields:a,selectedChartId:N({checkedFilterFields:t,activeFilterField:i})}),s=new Set;a.forEach((e=>{(r[e].checked||[]).forEach((t=>{s.add(`${t}:${e}`)}))}));const c=[...s],d=r[n]?r[n].expanded:S(o,1);return{[n]:{nodes:o,nodesFiltered:[...o],checked:c,expanded:d}}}var I=i(94654),_=i.n(I),j=i(83927),E=i.n(j),O=i(58809),U=i.n(O),M=i(8816),A=i.n(M);function R(e){let{tabScopes:t,parentNodeValue:i,forceAggregate:r=!1,hasChartSiblings:l=!1,tabChildren:n=[],immuneChartSiblings:a=[]}=e;if(r||!l&&Object.entries(t).every((e=>{let[t,{scope:i}]=e;return i&&i.length&&t===i[0]}))){const e=function(e){let{tabs:t=[],tabsInScope:i=[]}=e;const r=[];return t.forEach((e=>{let{value:t,children:l}=e;l&&!i.includes(t)&&l.forEach((e=>{let{value:t,children:l}=e;l&&!i.includes(t)&&r.push(...l.filter((e=>{let{type:t}=e;return t===F.dW})))}))})),r.map((e=>{let{value:t}=e;return t}))}({tabs:n,tabsInScope:_()(t,(e=>{let{scope:t}=e;return t}))}),r=_()(Object.values(t),(e=>{let{immune:t}=e;return t}));return{scope:[i],immune:[...new Set([...e,...r])]}}const o=Object.values(t).filter((e=>{let{scope:t}=e;return t&&t.length}));return{scope:_()(o,(e=>{let{scope:t}=e;return t})),immune:o.length?_()(o,(e=>{let{immune:t}=e;return t})):_()(Object.values(t),(e=>{let{immune:t}=e;return t})).concat(a)}}function q(e){let{currentNode:t={},filterId:i,checkedChartIds:r=[]}=e;if(!t)return{};const{value:l,children:n}=t,a=n.filter((e=>{let{type:t}=e;return t===F.dW})),o=n.filter((e=>{let{type:t}=e;return t===F.gn})),s=a.filter((e=>{let{value:t}=e;return i!==t&&!r.includes(t)})).map((e=>{let{value:t}=e;return t})),c=A()(U()((e=>e.value)),E()((e=>q({currentNode:e,filterId:i,checkedChartIds:r}))))(o);if(!v()(a)&&a.some((e=>{let{value:t}=e;return r.includes(t)}))){if(v()(o))return{scope:[l],immune:s};const{scope:e,immune:t}=R({tabScopes:c,parentNodeValue:l,forceAggregate:!0,tabChildren:o});return{scope:e,immune:s.concat(t)}}return o.length?R({tabScopes:c,parentNodeValue:l,hasChartSiblings:!v()(a),tabChildren:o,immuneChartSiblings:s}):{scope:[],immune:s}}function D(e){let{filterKey:t,nodes:i=[],checkedChartIds:r=[]}=e;if(i.length){const{chartId:e}=(0,w._)(t);return q({currentNode:i[0],filterId:e,checkedChartIds:r})}return{}}var J=i(43399),L=i(2275),X=i(28388),z=i.n(X),B=i(70707);const K=(0,l.iK)(B.Z.BarChartOutlined)`
  ${e=>{let{theme:t}=e;return`\n    position: relative;\n    top: ${t.gridUnit-1}px;\n    color: ${t.colors.primary.base};\n    margin-right: ${2*t.gridUnit}px;\n  `}}
`;function P(e){let{currentNode:t={},selectedChartId:i}=e;if(!t)return null;const{label:r,value:l,type:n,children:a}=t;if(a&&a.length){const e=a.map((e=>P({currentNode:e,selectedChartId:i})));return{...t,label:(0,f.tZ)("span",{className:u()(`filter-scope-type ${n.toLowerCase()}`,{"selected-filter":i===l})},n===F.dW&&(0,f.tZ)(K,null),r),children:e}}return{...t,label:(0,f.tZ)("span",{className:u()(`filter-scope-type ${n.toLowerCase()}`,{"selected-filter":i===l})},r)}}function H(e){let{nodes:t,selectedChartId:i}=e;return t?t.map((e=>P({currentNode:e,selectedChartId:i}))):[]}var G=i(13842);const Y={check:(0,f.tZ)(G.lU,null),uncheck:(0,f.tZ)(G.zq,null),halfCheck:(0,f.tZ)(G.dc,null),expandClose:(0,f.tZ)("span",{className:"rct-icon rct-icon-expand-close"}),expandOpen:(0,f.tZ)("span",{className:"rct-icon rct-icon-expand-open"}),expandAll:(0,f.tZ)("span",{className:"rct-icon rct-icon-expand-all"},(0,g.t)("Expand all")),collapseAll:(0,f.tZ)("span",{className:"rct-icon rct-icon-collapse-all"},(0,g.t)("Collapse all")),parentClose:(0,f.tZ)("span",{className:"rct-icon rct-icon-parent-close"}),parentOpen:(0,f.tZ)("span",{className:"rct-icon rct-icon-parent-open"}),leaf:(0,f.tZ)("span",{className:"rct-icon rct-icon-leaf"})},V={nodes:h().arrayOf(L.ck).isRequired,checked:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,expanded:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,onCheck:h().func.isRequired,onExpand:h().func.isRequired,selectedChartId:h().number},W=()=>{};function Q(e){let{nodes:t=[],checked:i=[],expanded:r=[],onCheck:l,onExpand:n,selectedChartId:a}=e;return(0,f.tZ)(z(),{showExpandAll:!0,expandOnClick:!0,showNodeIcon:!1,nodes:H({nodes:t,selectedChartId:a}),checked:i,expanded:r,onCheck:l,onExpand:n,onClick:W,icons:Y})}Q.propTypes=V,Q.defaultProps={selectedChartId:null};var ee=i(49238);const te={label:h().string.isRequired,isSelected:h().bool.isRequired};function ie(e){let{label:t,isSelected:i}=e;return(0,f.tZ)("span",{className:u()("filter-field-item filter-container",{"is-selected":i})},(0,f.tZ)(ee.lX,{htmlFor:t},t))}function re(e){let{nodes:t,activeKey:i}=e;if(!t)return[];const r=t[0],l=r.children.map((e=>({...e,children:e.children.map((e=>{const{label:t,value:r}=e;return{...e,label:(0,f.tZ)(ie,{isSelected:r===i,label:t})}}))})));return[{...r,label:(0,f.tZ)("span",{className:"root"},r.label),children:l}]}ie.propTypes=te;const le={activeKey:h().string,nodes:h().arrayOf(L.ck).isRequired,checked:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,expanded:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,onCheck:h().func.isRequired,onExpand:h().func.isRequired,onClick:h().func.isRequired};function ne(e){let{activeKey:t,nodes:i=[],checked:r=[],expanded:l=[],onClick:n,onCheck:a,onExpand:o}=e;return(0,f.tZ)(z(),{showExpandAll:!0,showNodeIcon:!1,expandOnClick:!0,nodes:re({nodes:i,activeKey:t}),checked:r,expanded:l,onClick:n,onCheck:a,onExpand:o,icons:Y})}ne.propTypes=le,ne.defaultProps={activeKey:null};const ae={dashboardFilters:h().objectOf(L.Er).isRequired,layout:h().object.isRequired,updateDashboardFiltersScope:h().func.isRequired,setUnsavedChanges:h().func.isRequired,onCloseModal:h().func.isRequired},oe=l.iK.div`
  ${e=>{let{theme:t}=e;return f.iv`
    display: flex;
    flex-direction: column;
    height: 80%;
    margin-right: ${-6*t.gridUnit}px;
    font-size: ${t.typography.sizes.m}px;

    & .nav.nav-tabs {
      border: none;
    }

    & .filter-scope-body {
      flex: 1;
      max-height: calc(100% - ${32*t.gridUnit}px);

      .filter-field-pane,
      .filter-scope-pane {
        overflow-y: auto;
      }
    }

    & .warning-message {
      padding: ${6*t.gridUnit}px;
    }
  `}}
`,se=l.iK.div`
  ${e=>{let{theme:t}=e;return f.iv`
    &.filter-scope-body {
      flex: 1;
      max-height: calc(100% - ${32*t.gridUnit}px);

      .filter-field-pane,
      .filter-scope-pane {
        overflow-y: auto;
      }
    }
  `}}
`,ce=l.iK.div`
  ${e=>{let{theme:t}=e;return f.iv`
    height: ${16*t.gridUnit}px;
    border-bottom: 1px solid ${t.colors.grayscale.light2};
    padding-left: ${6*t.gridUnit}px;
    margin-left: ${-6*t.gridUnit}px;

    h4 {
      margin-top: 0;
    }

    .selected-fields {
      margin: ${3*t.gridUnit}px 0 ${4*t.gridUnit}px;
      visibility: hidden;

      &.multi-edit-mode {
        visibility: visible;
      }

      .selected-scopes {
        padding-left: ${t.gridUnit}px;
      }
    }
  `}}
`,de=l.iK.div`
  ${e=>{let{theme:t}=e;return f.iv`
    &.filters-scope-selector {
      display: flex;
      flex-direction: row;
      position: relative;
      height: 100%;

      a,
      a:active,
      a:hover {
        color: inherit;
        text-decoration: none;
      }

      .react-checkbox-tree .rct-icon.rct-icon-expand-all,
      .react-checkbox-tree .rct-icon.rct-icon-collapse-all {
        font-family: ${t.typography.families.sansSerif};
        font-size: ${t.typography.sizes.m}px;
        color: ${t.colors.primary.base};

        &::before {
          content: '';
        }

        &:hover {
          text-decoration: underline;
        }

        &:focus {
          outline: none;
        }
      }

      .filter-field-pane {
        position: relative;
        width: 40%;
        padding: ${4*t.gridUnit}px;
        padding-left: 0;
        border-right: 1px solid ${t.colors.grayscale.light2};

        .filter-container label {
          font-weight: ${t.typography.weights.normal};
          margin: 0 0 0 ${4*t.gridUnit}px;
          word-break: break-all;
        }

        .filter-field-item {
          height: ${9*t.gridUnit}px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 ${6*t.gridUnit}px;
          margin-left: ${-6*t.gridUnit}px;

          &.is-selected {
            border: 1px solid ${t.colors.text.label};
            border-radius: ${t.borderRadius}px;
            background-color: ${t.colors.grayscale.light4};
            margin-left: ${-6*t.gridUnit}px;
          }
        }

        .react-checkbox-tree {
          .rct-title .root {
            font-weight: ${t.typography.weights.bold};
          }

          .rct-text {
            height: ${10*t.gridUnit}px;
          }
        }
      }

      .filter-scope-pane {
        position: relative;
        flex: 1;
        padding: ${4*t.gridUnit}px;
        padding-right: ${6*t.gridUnit}px;
      }

      .react-checkbox-tree {
        flex-direction: column;
        color: ${t.colors.grayscale.dark1};
        font-size: ${t.typography.sizes.m}px;

        .filter-scope-type {
          padding: ${2*t.gridUnit}px 0;
          display: flex;
          align-items: center;

          &.chart {
            font-weight: ${t.typography.weights.normal};
          }

          &.selected-filter {
            padding-left: ${7*t.gridUnit}px;
            position: relative;
            color: ${t.colors.text.label};

            &::before {
              content: ' ';
              position: absolute;
              left: 0;
              top: 50%;
              width: ${4*t.gridUnit}px;
              height: ${4*t.gridUnit}px;
              border-radius: ${t.borderRadius}px;
              margin-top: ${-2*t.gridUnit}px;
              box-shadow: inset 0 0 0 2px ${t.colors.grayscale.light2};
              background: ${t.colors.grayscale.light3};
            }
          }

          &.root {
            font-weight: ${t.typography.weights.bold};
          }
        }

        .rct-checkbox {
          svg {
            position: relative;
            top: 3px;
            width: ${4.5*t.gridUnit}px;
          }
        }

        .rct-node-leaf {
          .rct-bare-label {
            &::before {
              padding-left: ${t.gridUnit}px;
            }
          }
        }

        .rct-options {
          text-align: left;
          margin-left: 0;
          margin-bottom: ${2*t.gridUnit}px;
        }

        .rct-text {
          margin: 0;
          display: flex;
        }

        .rct-title {
          display: block;
        }

        // disable style from react-checkbox-trees.css
        .rct-node-clickable:hover,
        .rct-node-clickable:focus,
        label:hover,
        label:active {
          background: none !important;
        }
      }

      .multi-edit-mode {
        &.filter-scope-pane {
          .rct-node.rct-node-leaf .filter-scope-type.filter_box {
            display: none;
          }
        }

        .filter-field-item {
          padding: 0 ${4*t.gridUnit}px 0 ${12*t.gridUnit}px;
          margin-left: ${-12*t.gridUnit}px;

          &.is-selected {
            margin-left: ${-13*t.gridUnit}px;
          }
        }
      }

      .scope-search {
        position: absolute;
        right: ${4*t.gridUnit}px;
        top: ${4*t.gridUnit}px;
        border-radius: ${t.borderRadius}px;
        border: 1px solid ${t.colors.grayscale.light2};
        padding: ${t.gridUnit}px ${2*t.gridUnit}px;
        font-size: ${t.typography.sizes.m}px;
        outline: none;

        &:focus {
          border: 1px solid ${t.colors.primary.base};
        }
      }
    }
  `}}
`,he=l.iK.div`
  ${e=>{let{theme:t}=e;return`\n    height: ${16*t.gridUnit}px;\n\n    border-top: ${t.gridUnit/4}px solid ${t.colors.primary.light3};\n    padding: ${6*t.gridUnit}px;\n    margin: 0 0 0 ${6*-t.gridUnit}px;\n    text-align: right;\n\n    .btn {\n      margin-right: ${4*t.gridUnit}px;\n\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  `}}
`;class pe extends r.PureComponent{constructor(e){super(e);const{dashboardFilters:t,layout:i}=e;if(Object.keys(t).length>0){const e=function(e){let{dashboardFilters:t={}}=e;const i=Object.values(t).map((e=>{const{chartId:t,filterName:i,columns:r,labels:l}=e,n=Object.keys(r).map((e=>({value:(0,w.w)({chartId:t,column:e}),label:l[e]||e})));return{value:t,label:i,children:n,showCheckbox:!0}}));return[{value:y.dU,type:F.U0,label:(0,g.t)("All filters"),children:i}]}({dashboardFilters:t}),r=e[0].children;this.allfilterFields=[],r.forEach((e=>{let{children:t}=e;t.forEach((e=>{this.allfilterFields.push(e.value)}))})),this.defaultFilterKey=r[0].children[0].value;const l=Object.values(t).reduce(((e,r)=>{let{chartId:l,columns:n}=r;return{...e,...Object.keys(n).reduce(((e,r)=>{const n=(0,w.w)({chartId:l,column:r}),a=C({components:i,filterFields:[n],selectedChartId:l}),o=S(a,1),s=((0,J.up)({filterScope:t[l].scopes[r]})||[]).filter((e=>e!==l));return{...e,[n]:{nodes:a,nodesFiltered:[...a],checked:s,expanded:o}}}),{})}}),{}),{chartId:n}=(0,w._)(this.defaultFilterKey),a=[],o=this.defaultFilterKey,s=[y.dU].concat(n),c=T({checkedFilterFields:a,activeFilterField:o,filterScopeMap:l,layout:i});this.state={showSelector:!0,activeFilterField:o,searchText:"",filterScopeMap:{...l,...c},filterFieldNodes:e,checkedFilterFields:a,expandedFilterIds:s}}else this.state={showSelector:!1};this.filterNodes=this.filterNodes.bind(this),this.onChangeFilterField=this.onChangeFilterField.bind(this),this.onCheckFilterScope=this.onCheckFilterScope.bind(this),this.onExpandFilterScope=this.onExpandFilterScope.bind(this),this.onSearchInputChange=this.onSearchInputChange.bind(this),this.onCheckFilterField=this.onCheckFilterField.bind(this),this.onExpandFilterField=this.onExpandFilterField.bind(this),this.onClose=this.onClose.bind(this),this.onSave=this.onSave.bind(this)}onCheckFilterScope(e){void 0===e&&(e=[]);const{activeFilterField:t,filterScopeMap:i,checkedFilterFields:r}=this.state,l=$({activeFilterField:t,checkedFilterFields:r}),n=t?[t]:r,a={...i[l],checked:e},o=function(e){let{checked:t=[],filterFields:i=[],filterScopeMap:r={}}=e;const l=t.reduce(((e,t)=>{const[i,r]=t.split(":");return{...e,[r]:(e[r]||[]).concat(parseInt(i,10))}}),{});return i.reduce(((e,t)=>{const{chartId:i}=(0,w._)(t),n=(l[t]||[]).filter((e=>e!==i));return{...e,[t]:{...r[t],checked:n}}}),{})}({checked:e,filterFields:n,filterScopeMap:i});this.setState((()=>({filterScopeMap:{...i,...o,[l]:a}})))}onExpandFilterScope(e){void 0===e&&(e=[]);const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:r}=this.state,l=$({activeFilterField:t,checkedFilterFields:i}),n={...r[l],expanded:e};this.setState((()=>({filterScopeMap:{...r,[l]:n}})))}onCheckFilterField(e){void 0===e&&(e=[]);const{layout:t}=this.props,{filterScopeMap:i}=this.state,r=T({checkedFilterFields:e,activeFilterField:null,filterScopeMap:i,layout:t});this.setState((()=>({activeFilterField:null,checkedFilterFields:e,filterScopeMap:{...i,...r}})))}onExpandFilterField(e){void 0===e&&(e=[]),this.setState((()=>({expandedFilterIds:e})))}onChangeFilterField(e){void 0===e&&(e={});const{layout:t}=this.props,i=e.value,{activeFilterField:r,checkedFilterFields:l,filterScopeMap:n}=this.state;if(i===r){const e=T({checkedFilterFields:l,activeFilterField:null,filterScopeMap:n,layout:t});this.setState({activeFilterField:null,filterScopeMap:{...n,...e}})}else if(this.allfilterFields.includes(i)){const e=T({checkedFilterFields:l,activeFilterField:i,filterScopeMap:n,layout:t});this.setState({activeFilterField:i,filterScopeMap:{...n,...e}})}}onSearchInputChange(e){this.setState({searchText:e.target.value},this.filterTree)}onClose(){this.props.onCloseModal()}onSave(){const{filterScopeMap:e}=this.state,t=this.allfilterFields.reduce(((t,i)=>{const{nodes:r}=e[i];return{...t,[i]:D({filterKey:i,nodes:r,checkedChartIds:e[i].checked})}}),{});this.props.updateDashboardFiltersScope(t),this.props.setUnsavedChanges(!0),this.props.onCloseModal()}filterTree(){if(this.state.searchText){const e=e=>{const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:r}=e,l=$({activeFilterField:t,checkedFilterFields:i}),n=r[l].nodes.reduce(this.filterNodes,[]),a=S([...n]),o={...r[l],nodesFiltered:n,expanded:a};return{filterScopeMap:{...r,[l]:o}}};this.setState(e)}else this.setState((e=>{const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:r}=e,l=$({activeFilterField:t,checkedFilterFields:i}),n={...r[l],nodesFiltered:r[l].nodes};return{filterScopeMap:{...r,[l]:n}}}))}filterNodes(e,t){void 0===e&&(e=[]),void 0===t&&(t={});const{searchText:i}=this.state,r=(t.children||[]).reduce(this.filterNodes,[]);return(t.label.toLocaleLowerCase().indexOf(i.toLocaleLowerCase())>-1||r.length)&&e.push({...t,children:r}),e}renderFilterFieldList(){const{activeFilterField:e,filterFieldNodes:t,checkedFilterFields:i,expandedFilterIds:r}=this.state;return(0,f.tZ)(ne,{activeKey:e,nodes:t,checked:i,expanded:r,onClick:this.onChangeFilterField,onCheck:this.onCheckFilterField,onExpand:this.onExpandFilterField})}renderFilterScopeTree(){const{filterScopeMap:e,activeFilterField:t,checkedFilterFields:i,searchText:l}=this.state,n=$({activeFilterField:t,checkedFilterFields:i}),a=N({activeFilterField:t,checkedFilterFields:i});return(0,f.tZ)(r.Fragment,null,(0,f.tZ)("input",{className:"filter-text scope-search multi-edit-mode",placeholder:(0,g.t)("Search..."),type:"text",value:l,onChange:this.onSearchInputChange}),(0,f.tZ)(Q,{nodes:e[n].nodesFiltered,checked:e[n].checked,expanded:e[n].expanded,onCheck:this.onCheckFilterScope,onExpand:this.onExpandFilterScope,selectedChartId:a}))}renderEditingFiltersName(){const{dashboardFilters:e}=this.props,{activeFilterField:t,checkedFilterFields:i}=this.state,r=[].concat(t||i).map((t=>{const{chartId:i,column:r}=(0,w._)(t);return e[i].labels[r]||r}));return(0,f.tZ)("div",{className:"selected-fields multi-edit-mode"},0===r.length&&(0,g.t)("No filter is selected."),1===r.length&&(0,g.t)("Editing 1 filter:"),r.length>1&&(0,g.t)("Batch editing %d filters:",r.length),(0,f.tZ)("span",{className:"selected-scopes"},r.join(", ")))}render(){const{showSelector:e}=this.state;return(0,f.tZ)(oe,null,(0,f.tZ)(ce,null,(0,f.tZ)("h4",null,(0,g.t)("Configure filter scopes")),e&&this.renderEditingFiltersName()),(0,f.tZ)(se,{className:"filter-scope-body"},e?(0,f.tZ)(de,{className:"filters-scope-selector"},(0,f.tZ)("div",{className:u()("filter-field-pane multi-edit-mode")},this.renderFilterFieldList()),(0,f.tZ)("div",{className:"filter-scope-pane multi-edit-mode"},this.renderFilterScopeTree())):(0,f.tZ)("div",{className:"warning-message"},(0,g.t)("There are no filters in this dashboard."))),(0,f.tZ)(he,null,(0,f.tZ)(m.Z,{buttonSize:"small",onClick:this.onClose},(0,g.t)("Close")),e&&(0,f.tZ)(m.Z,{buttonSize:"small",buttonStyle:"primary",onClick:this.onSave},(0,g.t)("Save"))))}}pe.propTypes=ae;const ue=(0,a.$j)((function(e){let{dashboardLayout:t,dashboardFilters:i}=e;return{dashboardFilters:i,layout:t.present}}),(function(e){return(0,o.DE)({updateDashboardFiltersScope:s.l6,setUnsavedChanges:c.if},e)}))(pe),me=l.iK.div((e=>{let{theme:{gridUnit:t}}=e;return{padding:2*t,paddingBottom:3*t}}));class fe extends r.PureComponent{constructor(e){super(e),this.modal=void 0,this.modal=r.createRef(),this.handleCloseModal=this.handleCloseModal.bind(this)}handleCloseModal(){var e,t;null==this||null==(e=this.modal)||null==(t=e.current)||null==t.close||t.close()}render(){const e={onCloseModal:this.handleCloseModal};return(0,f.tZ)(n.Z,{ref:this.modal,triggerNode:this.props.triggerNode,modalBody:(0,f.tZ)(me,null,(0,f.tZ)(ue,e)),width:"80%"})}}},48273:(e,t,i)=>{i.d(t,{$3:()=>h,AN:()=>f,LS:()=>d,OY:()=>p,Qz:()=>u,_U:()=>m,g:()=>o});var r=i(31069),l=i(15926),n=i.n(l);const a=Object.freeze(["dashboard","chart","saved_query"]),o=Object.freeze({DASHBOARD:"dashboard",CHART:"chart",QUERY:"saved_query"}),s={saved_query:1,chart:2,dashboard:3},c=e=>{if(!a.includes(e))throw new Error(`objectType ${e} is invalid`);return s[e]};function d(e,t,i){r.Z.get({endpoint:`/api/v1/tag/${e}`}).then((e=>{let{json:i}=e;return t(i.result)})).catch((e=>i(e)))}function h(e,t,i){let{objectType:l,objectId:n,includeTypes:o=!1}=e;if(void 0===l||void 0===n)throw new Error("Need to specify objectType and objectId");if(!a.includes(l))throw new Error(`objectType ${l} is invalid`);r.Z.get({endpoint:`/api/v1/${l}/${n}`}).then((e=>{let{json:i}=e;return t(i.result.tags.filter((e=>-1===e.name.indexOf(":")||o)))})).catch((e=>i(e)))}function p(e,t,i,l){let{objectType:n,objectId:o}=e;if(void 0===n||void 0===o)throw new Error("Need to specify objectType and objectId");if(!a.includes(n))throw new Error(`objectType ${n} is invalid`);r.Z.delete({endpoint:`/api/v1/tag/${c(n)}/${o}/${t.name}`}).then((e=>{let{json:t}=e;return i(t?JSON.stringify(t):"Successfully Deleted Tagged Objects")})).catch((e=>{const t=e.message;return l(t||"Error Deleting Tagged Objects")}))}function u(e,t,i){const l=e.map((e=>e.name));r.Z.delete({endpoint:`/api/v1/tag/?q=${n().encode(l)}`}).then((e=>{let{json:i}=e;return i.message?t(i.message):t("Successfully Deleted Tag")})).catch((e=>{const t=e.message;return i(t||"Error Deleting Tag")}))}function m(e,t,i,l){let{objectType:n,objectId:a,includeTypes:o=!1}=e;if(void 0===n||void 0===a)throw new Error("Need to specify objectType and objectId");if(-1!==t.indexOf(":")&&!o)return;const s=c(n);r.Z.post({endpoint:`/api/v1/tag/${s}/${a}/`,body:JSON.stringify({properties:{tags:[t]}}),parseMethod:"json",headers:{"Content-Type":"application/json"}}).then((e=>{let{json:t}=e;return i(JSON.stringify(t))})).catch((e=>l(e)))}function f(e,t,i){let{tagIds:l=[],types:n}=e,a=`/api/v1/tag/get_objects/?tagIds=${l}`;n&&(a+=`&types=${n}`),r.Z.get({endpoint:a}).then((e=>{let{json:i}=e;return t(i.result)})).catch((e=>i(e)))}},65108:(e,t,i)=>{i.d(t,{g:()=>r});const r=function(e,t,i){return void 0===i&&(i=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return JSON.stringify([...t])}),function(){const r=i(...arguments);if(t.has(r))return t.get(r);const l=e(...arguments);return t.set(r,l),l}}}}]);
//# sourceMappingURL=4717.f7f2cff08582bde9a679.entry.js.map