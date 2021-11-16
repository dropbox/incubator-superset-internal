"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3880],{16737:(e,t,i)=>{function r(e){return e.map((e=>[e,e.toString()]))}function n(e,t){return`${e}__${t}`}i.d(t,{mG:()=>r,n_:()=>n})},14278:(e,t,i)=>{i.d(t,{Zn:()=>h,gp:()=>y,EM:()=>b});var r=i(14176),n=i.n(r),a=i(67294),l=i(38849),o=i(85639),s=i(17390),c=i(23099),d=i(91877),u=i(46415),g=i(11965);const p=(0,l.Z)(),m={loading:!0,dynamicPlugins:{},keys:[],mountedPluginMetadata:{},fetchAll:()=>{}},h=a.createContext(m),y=()=>(0,a.useContext)(h);function f(){return{keys:p.keys(),mountedPluginMetadata:n()(p.getMap(),(e=>void 0===e))}}function v(e,t){switch(t.type){case"begin":{const i={...e.dynamicPlugins};return t.keys.forEach((e=>{i[e]={key:e,error:null,mounting:!0}})),{...e,loading:t.keys.length>0,dynamicPlugins:i}}case"complete":return{...e,loading:Object.values(e.dynamicPlugins).some((e=>e.mounting&&e.key!==t.key)),dynamicPlugins:{...e.dynamicPlugins,[t.key]:{key:t.key,mounting:!1,error:t.error}}};case"changed keys":return{...e,...f()};default:return e}}const _=(0,o.Z)({method:"GET",endpoint:"/dynamic-plugins/api/read"}),x={react:()=>Promise.resolve().then(i.t.bind(i,67294,19)),lodash:()=>Promise.resolve().then(i.t.bind(i,96486,23)),"react-dom":()=>Promise.resolve().then(i.t.bind(i,9060,19)),"@superset-ui/chart-controls":()=>Promise.all([i.e(1216),i.e(7211),i.e(7017),i.e(8483),i.e(5042)]).then(i.bind(i,88483)),"@superset-ui/core":()=>Promise.all([i.e(1216),i.e(7211),i.e(7017),i.e(6439)]).then(i.bind(i,67017))},b=({children:e})=>{const[t,i]=(0,a.useReducer)(v,m,(e=>({...e,...f(),fetchAll:r,loading:(0,d.cr)(u.T.DYNAMIC_PLUGINS)})));async function r(){try{await(0,s.YW)(x);const{result:e}=await _({});i({type:"begin",keys:e.map((e=>e.key))}),await Promise.all(e.map((async e=>{let t=null;try{await import(e.bundle_url)}catch(i){c.Z.error(`Failed to load plugin ${e.key} with the following error:`,i.stack),t=i}i({type:"complete",key:e.key,error:t})})))}catch(e){c.Z.error("Failed to load dynamic plugins",e.stack||e)}}return(0,a.useEffect)((()=>{(0,d.cr)(u.T.DYNAMIC_PLUGINS)&&r();const e=()=>{i({type:"changed keys"})};return p.addListener(e),()=>{p.removeListener(e)}}),[]),(0,g.tZ)(h.Provider,{value:t},e)}},1510:(e,t,i)=>{i.d(t,{zi:()=>d,on:()=>u,vk:()=>g,X3:()=>p,Rz:()=>y});var r=i(92134),n=i(52686),a=i(46415),l=i(70400),o=i(91877),s=i(81255),c=i(80621);const d=({datasetId:e,cascadingFilters:t={},groupby:i,inputRef:r,defaultDataMask:n,controlValues:a,filterType:o,sortMetric:s,adhoc_filters:c,time_range:d,granularity_sqla:u,type:g})=>{var p;const m={};return e&&(m.datasource=`${e}__table`),i&&(m.groupby=[i]),s&&(m.sortMetric=s),{...a,...m,adhoc_filters:null!=c?c:[],extra_filters:[],extra_form_data:t,granularity_sqla:u,metrics:["count"],row_limit:1e3,showSearch:!0,defaultValue:null==n||null==(p=n.filterState)?void 0:p.value,time_range:d,time_range_endpoints:["inclusive","exclusive"],url_params:(0,l.Z)("regular"),inView:!0,viz_type:o,inputRef:r,type:g}};function u(e={},t={}){const i={};return r.Ci.forEach((r=>{const n=[...e[r]||[],...t[r]||[]];n.length&&(i[r]=n)})),r.Ay.forEach((r=>{const n=e[r];void 0!==n&&(i[r]=n);const a=t[r];void 0!==a&&(i[r]=a)})),i}function g(e,t,i){let r={};return i.forEach((t=>{var i,n;r=u(r,null!=(i=null==(n=e[t])?void 0:n.extraFormData)?i:{})})),r}function p(e){return!e.includes(n.cg.NATIVE_FILTER)||(0,o.cr)(a.T.DASHBOARD_FILTERS_EXPERIMENTAL)&&(0,o.cr)(a.T.DASHBOARD_CROSS_FILTERS)&&e.includes(n.cg.INTERACTIVE_CHART)}const m=(e,t)=>e[t].type===s.gn,h=(e,t,i,r,n)=>{e[i].type===s.dW&&t.includes(e[i].meta.chartId)&&r.forEach(n.add,n),0===e[i].children.length||m(e,i)&&n.has(i)||e[i].children.forEach((i=>h(e,t,i,m(e,i)?[...r,i]:r,n)))},y=(e,t)=>{const i=e[c._4].children[0],r=i!==c.PV,n=new Set;var a;return r?null==(a=e[i].children)||a.forEach((i=>h(e,t,i,[i],n))):Object.values(e).filter((e=>e.type===s.gn)).forEach((i=>h(e,t,i.id,[i.id],n))),n}},81255:(e,t,i)=>{i.d(t,{dW:()=>r,BA:()=>n,Vl:()=>a,BG:()=>l,U0:()=>o,hE:()=>s,Nc:()=>c,xh:()=>d,F0:()=>u,Os:()=>g,yR:()=>p,gn:()=>m,ZP:()=>h});const r="CHART",n="COLUMN",a="HEADER",l="GRID",o="ROOT",s="DIVIDER",c="HEADER",d="MARKDOWN",u="NEW_COMPONENT_SOURCE",g="ROW",p="TABS",m="TAB",h={CHART_TYPE:r,COLUMN_TYPE:n,DASHBOARD_HEADER_TYPE:a,DASHBOARD_GRID_TYPE:l,DASHBOARD_ROOT_TYPE:o,DIVIDER_TYPE:s,HEADER_TYPE:c,MARKDOWN_TYPE:d,NEW_COMPONENT_SOURCE_TYPE:u,ROW_TYPE:g,TABS_TYPE:p,TAB_TYPE:m}},70400:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(17563);const n=new Set(["standalone","edit"]);function a(e){const t=r.parse(window.location.search);return Object.entries(t).reduce(((t,[i,r])=>"regular"===e&&n.has(i)||"reserved"===e&&!n.has(i)?t:Array.isArray(r)?{...t,[i]:r[0]}:{...t,[i]:r}),{})}},13284:(e,t,i)=>{i.d(t,{UB:()=>b,ZP:()=>H});var r,n=i(5872),a=i.n(n),l=i(67294),o=i(74221),s=i(94184),c=i.n(s),d=i(60650),u=i(37840),g=i(11965),p=i(82191),m=i(37921),h=i(14278),y=i(38097),f=i(1510),v=i(64239);!function(e){e.ALL_CHARTS="ALL_CHARTS",e.CATEGORY="CATEGORY",e.TAGS="TAGS",e.RECOMMENDED_TAGS="RECOMMENDED_TAGS"}(r||(r={}));const _=["line","big_number","big_number_total","table","pivot_table_v2","echarts_timeseries_line","echarts_area","echarts_timeseries_bar","echarts_timeseries_scatter","pie","mixed_timeseries","filter_box","dist_bar","area","bar","deck_polygon","time_table","histogram","deck_scatter","deck_hex","time_pivot","deck_arc","heatmap","deck_grid","dual_line","deck_screengrid","line_multi","treemap","box_plot","sunburst","sankey","word_cloud","mapbox","kepler","cal_heatmap","rose","bubble","deck_geojson","horizon","deck_multi","compare","partition","event_flow","deck_path","graph_chart","world_map","paired_ttest","para","country_map"],x=new Set(_),b=1090,E=(0,d.t)("Other"),k=(0,d.t)("All charts"),A=[(0,d.t)("Popular"),(0,d.t)("ECharts"),(0,d.t)("Advanced-Analytics")],T=u.iK.div`
  ${({isSelectedVizMetadata:e})=>`\n    display: grid;\n    grid-template-rows: ${e?"auto minmax(100px, 1fr) minmax(200px, 35%)":"auto minmax(100px, 1fr)"};\n    // em is used here because the sidebar should be sized to fit the longest standard tag\n    grid-template-columns: minmax(14em, auto) 5fr;\n    grid-template-areas:\n      'sidebar search'\n      'sidebar main'\n      'details details';\n    height: 70vh;\n    overflow: auto;\n  `}
`,R=u.iK.h3`
  margin-top: 0;
  margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: ${({theme:e})=>e.typography.weights.bold};
  line-height: ${({theme:e})=>6*e.gridUnit}px;
`,$=u.iK.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  overflow: auto;

  .ant-collapse .ant-collapse-item {
    .ant-collapse-header {
      font-size: ${({theme:e})=>e.typography.sizes.s}px;
      color: ${({theme:e})=>e.colors.grayscale.base};
      padding-left: ${({theme:e})=>2*e.gridUnit}px;
      padding-bottom: ${({theme:e})=>e.gridUnit}px;
    }
    .ant-collapse-content .ant-collapse-content-box {
      display: flex;
      flex-direction: column;
      padding: 0 ${({theme:e})=>2*e.gridUnit}px;
    }
  }
`,Z=u.iK.div`
  grid-area: main;
  overflow-y: auto;
`,C=u.iK.div`
  ${({theme:e})=>`\n    grid-area: search;\n    margin-top: ${3*e.gridUnit}px;\n    margin-bottom: ${e.gridUnit}px;\n    margin-left: ${3*e.gridUnit}px;\n    margin-right: ${3*e.gridUnit}px;\n    .ant-input-affix-wrapper {\n      padding-left: ${2*e.gridUnit}px;\n    }\n  `}
`,S=u.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colors.grayscale.base};
`,O=u.iK.button`
  ${({theme:e})=>`\n    all: unset; // remove default button styles\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    margin: ${e.gridUnit}px 0;\n    padding: 0 ${e.gridUnit}px;\n    border-radius: ${e.borderRadius}px;\n    line-height: 2em;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    position: relative;\n\n    &:focus {\n      outline: initial;\n    }\n\n    &.selected {\n      background-color: ${e.colors.primary.dark1};\n      color: ${e.colors.primary.light5};\n\n      svg {\n        color: ${e.colors.primary.light5};\n      }\n\n      &:hover {\n        .cancel {\n          visibility: visible;\n        }\n      }\n    }\n\n    & span:first-of-type svg {\n      margin-top: ${1.5*e.gridUnit}px;\n    }\n\n    .cancel {\n      visibility: hidden;\n    }\n  `}
`,w=u.iK.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${({theme:e})=>24*e.gridUnit}px
  );
  grid-auto-rows: max-content;
  justify-content: space-evenly;
  grid-gap: ${({theme:e})=>2*e.gridUnit}px;
  justify-items: center;
  // for some reason this padding doesn't seem to apply at the bottom of the container. Why is a mystery.
  padding: ${({theme:e})=>2*e.gridUnit}px;
`,M=e=>g.iv`
  grid-area: details;
  border-top: 1px solid ${e.colors.grayscale.light2};
`,P=e=>g.iv`
  padding: ${4*e.gridUnit}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'viz-name examples-header'
    'viz-tags examples'
    'description examples';
`,U=u.iK.div`
  grid-area: viz-tags;
  width: ${({theme:e})=>120*e.gridUnit}px;
  padding-right: ${({theme:e})=>14*e.gridUnit}px;
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
`,D=u.iK.p`
  grid-area: description;
  overflow: auto;
  padding-right: ${({theme:e})=>14*e.gridUnit}px;
  margin: 0;
`,N=u.iK.div`
  grid-area: examples;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  gap: ${({theme:e})=>4*e.gridUnit}px;

  img {
    height: 100%;
    border-radius: ${({theme:e})=>e.gridUnit}px;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  }
`,z=e=>g.iv`
  cursor: pointer;
  width: ${24*e.gridUnit}px;

  img {
    min-width: ${24*e.gridUnit}px;
    min-height: ${24*e.gridUnit}px;
    border: 1px solid ${e.colors.grayscale.light2};
    border-radius: ${e.gridUnit}px;
    transition: border-color ${e.transitionTiming};
  }

  &.selected img {
    border: 2px solid ${e.colors.primary.light2};
  }

  &:hover:not(.selected) img {
    border: 1px solid ${e.colors.grayscale.light1};
  }

  .viztype-label {
    margin-top: ${2*e.gridUnit}px;
    text-align: center;
  }
`;function I(e){return x.has(e.key)?_.indexOf(e.key):_.length}const G=({entry:e,selectedViz:t,setSelectedViz:i})=>{const r=(0,u.Fg)(),{key:n,value:a}=e,l=t===e.key;return(0,g.tZ)("div",{role:"button",css:z(r),tabIndex:0,className:l?"selected":"",onClick:()=>i(n)},(0,g.tZ)("img",{alt:a.name,width:"100%",className:"viztype-selector "+(l?"selected":""),src:a.thumbnail}),(0,g.tZ)("div",{className:"viztype-label"},a.name))},L=({vizEntries:e,...t})=>(0,g.tZ)(w,null,e.map((e=>(0,g.tZ)(G,a()({key:e.key},t,{entry:e}))))),Y=({selector:e,sectionId:t,icon:i,isSelected:r,onClick:n,className:a})=>{const o=(0,l.useRef)(null);return(0,l.useEffect)((()=>{r&&queueMicrotask((()=>(0,v.default)(o.current,{behavior:"smooth",scrollMode:"if-needed"})))}),[]),(0,g.tZ)(O,{ref:o,key:e,name:e,className:c()(a,r&&"selected"),onClick:()=>n(e,t)},i,e)};function H(e){var t;const{selectedViz:i,onChange:n,className:a}=e,{mountedPluginMetadata:s}=(0,h.gp)(),c=(0,l.useRef)(),[u,v]=(0,l.useState)(""),[_,x]=(0,l.useState)(!0),b=_&&!!u,O=i?s[i]:null,w=(0,l.useMemo)((()=>{const e=Object.entries(s).map((([e,t])=>({key:e,value:t}))).filter((({value:e})=>(0,f.X3)(e.behaviors||[])&&!e.deprecated));return e.sort(((e,t)=>I(e)-I(t))),e}),[s]),z=(0,l.useMemo)((()=>{const e={};return w.forEach((t=>{const i=t.value.category||E;e[i]||(e[i]=[]),e[i].push(t)})),e}),[w]),G=(0,l.useMemo)((()=>Object.keys(z).sort(((e,t)=>e===E?1:t===E?-1:e.localeCompare(t)))),[z]),H=(0,l.useMemo)((()=>{const e={};return w.forEach((t=>{(t.value.tags||[]).forEach((i=>{e[i]||(e[i]=[]),e[i].push(t)}))})),e}),[w]),V=(0,l.useMemo)((()=>Object.keys(H).sort(((e,t)=>e.localeCompare(t))).filter((e=>-1===A.indexOf(e)))),[H]),B=(0,l.useMemo)((()=>w.sort(((e,t)=>e.key.localeCompare(t.key)))),[w]),[K,j]=(0,l.useState)((()=>(null==O?void 0:O.category)||A[0])),[F,W]=(0,l.useState)((()=>null!=O&&O.category?r.CATEGORY:r.RECOMMENDED_TAGS)),X=(0,l.useMemo)((()=>new o.Z(w,{ignoreLocation:!0,threshold:.3,keys:["value.name","value.tags","value.description"]})),[w]),q=(0,l.useMemo)((()=>""===u.trim()?[]:X.search(u).map((e=>e.item))),[u,X]),J=(0,l.useCallback)((()=>{x(!0)}),[]),Q=(0,l.useCallback)((e=>v(e.target.value)),[]),ee=(0,l.useCallback)((()=>{x(!1),v(""),c.current.blur()}),[]),te=(0,l.useCallback)(((e,t)=>{_&&ee(),j(e),W(t);const i=O&&((e,t)=>t===e.category||t===E&&null==e.category||(e.tags||[]).indexOf(t)>-1)(O,e);e===K||i||n(null)}),[ee,_,K,O,n]),ie=(0,l.useMemo)((()=>({[r.RECOMMENDED_TAGS]:{title:(0,d.t)("Recommended tags"),icon:(0,g.tZ)(y.Z.Tags,null),selectors:A},[r.CATEGORY]:{title:(0,d.t)("Category"),icon:(0,g.tZ)(y.Z.Category,null),selectors:G},[r.TAGS]:{title:(0,d.t)("Tags"),icon:(0,g.tZ)(y.Z.Tags,null),selectors:V}})),[G,V]);return(0,g.tZ)(T,{className:a,isSelectedVizMetadata:Boolean(O)},(0,g.tZ)($,null,(0,g.tZ)(Y,{css:({gridUnit:e})=>g.iv`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:r.ALL_CHARTS,selector:k,icon:(0,g.tZ)(y.Z.Ballot,null),isSelected:!b&&k===K&&r.ALL_CHARTS===F,onClick:te}),(0,g.tZ)(p.UO,{expandIconPosition:"right",ghost:!0,defaultActiveKey:Object.keys(ie)},Object.keys(ie).map((e=>{const t=ie[e];return(0,g.tZ)(p.UO.Panel,{header:(0,g.tZ)("span",{className:"header"},t.title),key:e},t.selectors.map((i=>(0,g.tZ)(Y,{key:i,selector:i,sectionId:e,icon:t.icon,isSelected:!b&&i===K&&e===F,onClick:te}))))})))),(0,g.tZ)(C,null,(0,g.tZ)(p.II,{type:"text",ref:c,value:u,placeholder:(0,d.t)("Search all charts"),onChange:Q,onFocus:J,prefix:(0,g.tZ)(S,null,(0,g.tZ)(y.Z.Search,{iconSize:"m"})),suffix:(0,g.tZ)(S,null,u&&(0,g.tZ)(y.Z.XLarge,{iconSize:"m",onClick:ee}))})),(0,g.tZ)(Z,null,(0,g.tZ)(L,{vizEntries:b?q:K===k&&F===r.ALL_CHARTS?B:F===r.CATEGORY&&z[K]?z[K]:F!==r.TAGS&&F!==r.RECOMMENDED_TAGS||!H[K]?[]:H[K],selectedViz:i,setSelectedViz:n})),O?(0,g.tZ)("div",{css:e=>[M(e),P(e)]},(0,g.tZ)(l.Fragment,null,(0,g.tZ)(R,{css:g.iv`
                grid-area: viz-name;
              `},null==O?void 0:O.name),(0,g.tZ)(U,null,null==O?void 0:O.tags.map((e=>(0,g.tZ)(m.Z,{key:e},e)))),(0,g.tZ)(D,null,(null==O?void 0:O.description)||(0,d.t)("No description available.")),(0,g.tZ)(R,{css:g.iv`
                grid-area: examples-header;
              `},!(null==O||null==(t=O.exampleGallery)||!t.length)&&(0,d.t)("Examples")),(0,g.tZ)(N,null,((null==O?void 0:O.exampleGallery)||[]).map((e=>(0,g.tZ)("img",{src:e.url,alt:e.caption,title:e.caption})))))):null)}}}]);