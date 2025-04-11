"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3284],{13284:(e,t,i)=>{i.d(t,{UB:()=>$,ZP:()=>P});var n,r=i(667294),a=i(869386),l=i(693967),o=i.n(l),s=i(61988),d=i(751995),c=i(211965),g=i(616355),p=i(104715),m=i(358593),h=i(9875),u=i(737921),x=i(514278),v=i(313322),b=i(301510),y=i(690161),f=i(135944);!function(e){e.AllCharts="ALL_CHARTS",e.Featured="FEATURED",e.Category="CATEGORY",e.Tags="TAGS"}(n||(n={}));const $=1090,Z=(0,s.t)("Other"),U=(0,s.t)("All charts"),C=(0,s.t)("Featured"),k=[C,(0,s.t)("ECharts"),(0,s.t)("Advanced-Analytics")],w=d.iK.div`
  ${({isSelectedVizMetadata:e})=>`\n    display: grid;\n    grid-template-rows: ${e?"auto minmax(100px, 1fr) minmax(200px, 35%)":"auto minmax(100px, 1fr)"};\n    // em is used here because the sidebar should be sized to fit the longest standard tag\n    grid-template-columns: minmax(14em, auto) 5fr;\n    grid-template-areas:\n      'sidebar search'\n      'sidebar main'\n      'details details';\n    height: 70vh;\n    overflow: auto;\n  `}
`,z=d.iK.h3`
  margin-top: 0;
  margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: ${({theme:e})=>e.typography.weights.bold};
  line-height: ${({theme:e})=>6*e.gridUnit}px;
`,S=d.iK.div`
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
`,K=d.iK.div`
  grid-area: main;
  overflow-y: auto;
`,M=d.iK.div`
  ${({theme:e})=>`\n    grid-area: search;\n    margin-top: ${3*e.gridUnit}px;\n    margin-bottom: ${e.gridUnit}px;\n    margin-left: ${3*e.gridUnit}px;\n    margin-right: ${3*e.gridUnit}px;\n    .ant-input-affix-wrapper {\n      padding-left: ${2*e.gridUnit}px;\n    }\n  `}
`,A=d.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colors.grayscale.base};
`,E=d.iK.button`
  ${({theme:e})=>`\n    all: unset; // remove default button styles\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    margin: ${e.gridUnit}px 0;\n    padding: 0 ${e.gridUnit}px;\n    border-radius: ${e.borderRadius}px;\n    line-height: 2em;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    position: relative;\n\n    &:focus {\n      outline: initial;\n    }\n\n    &.selected {\n      background-color: ${e.colors.primary.base};\n      color: ${e.colors.primary.light5};\n\n      svg {\n        color: ${e.colors.primary.light5};\n      }\n\n      &:hover {\n        .cancel {\n          visibility: visible;\n        }\n      }\n    }\n\n    & > span[role="img"] {\n      margin-right: ${2*e.gridUnit}px;\n    }\n\n    .cancel {\n      visibility: hidden;\n    }\n  `}
`,T=d.iK.div`
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
`,O=e=>c.iv`
  grid-area: details;
  border-top: 1px solid ${e.colors.grayscale.light2};
`,F=e=>c.iv`
  padding: ${4*e.gridUnit}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'viz-name examples-header'
    'viz-tags examples'
    'description examples';
`,B=d.iK.div`
  grid-area: viz-tags;
  width: ${({theme:e})=>120*e.gridUnit}px;
  padding-right: ${({theme:e})=>14*e.gridUnit}px;
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
`,N=d.iK.p`
  grid-area: description;
  overflow: auto;
  padding-right: ${({theme:e})=>14*e.gridUnit}px;
  margin: 0;
`,I=d.iK.div`
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
`,X=e=>c.iv`
  cursor: pointer;
  width: ${24*e.gridUnit}px;
  position: relative;

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
`,j=d.iK.div`
  ${({theme:e})=>`\n    border: 1px solid ${e.colors.primary.dark1};\n    box-sizing: border-box;\n    border-radius: ${e.gridUnit}px;\n    background: ${e.colors.grayscale.light5};\n    line-height: ${2.5*e.gridUnit}px;\n    color: ${e.colors.primary.dark1};\n    font-size: ${e.typography.sizes.s}px;\n    font-weight: ${e.typography.weights.bold};\n    text-align: center;\n    padding: ${.5*e.gridUnit}px ${e.gridUnit}px;\n    text-transform: uppercase;\n    cursor: pointer;\n\n    div {\n      transform: scale(0.83,0.83);\n    }\n  `}
`,V=d.iK.div`
  position: absolute;
  right: ${({theme:e})=>e.gridUnit}px;
  top: ${({theme:e})=>19*e.gridUnit}px;
`,H=d.iK.div`
  display: inline-block !important;
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
`,R=({entry:e,selectedViz:t,setSelectedViz:i,onDoubleClick:n})=>{const r=(0,d.Fg)(),{key:a,value:l}=e,o=t===e.key;return(0,f.BX)("div",{role:"button",css:X(r),tabIndex:0,className:o?"selected":"",onClick:()=>i(a),onDoubleClick:n,children:[(0,f.tZ)("img",{alt:l.name,width:"100%",className:"viztype-selector "+(o?"selected":""),src:l.thumbnail}),(0,f.tZ)("div",{className:"viztype-label",children:l.name}),l.label&&(0,f.tZ)(V,{children:(0,f.tZ)(j,{children:(0,f.tZ)("div",{children:(0,s.t)(l.label)})})})]})},D=({vizEntries:e,...t})=>(0,f.tZ)(T,{children:e.map((e=>(0,f.tZ)(R,{...t,entry:e},e.key)))}),L=({selector:e,sectionId:t,icon:i,isSelected:n,onClick:a,className:l})=>{const s=(0,r.useRef)(null);return(0,r.useEffect)((()=>{n&&queueMicrotask((()=>(0,y.Z)(s.current,{behavior:"smooth",scrollMode:"if-needed"})))}),[]),(0,f.BX)(E,{ref:s,name:e,className:o()(l,n&&"selected"),onClick:()=>a(e,t),children:[i,e]},e)},G=(e,t)=>t===e.category||t===Z&&null==e.category||(e.tags||[]).indexOf(t)>-1;function P(e){var t,i;const{selectedViz:l,onChange:o,onDoubleClick:d,className:y,denyList:$}=e,{mountedPluginMetadata:E}=(0,x.gp)(),T=(0,r.useRef)(),[X,V]=(0,r.useState)(""),[R,P]=(0,r.useState)(!0),Y=R&&!!X,q=l?E[l]:null,W=(0,r.useMemo)((()=>Object.entries(E).map((([e,t])=>({key:e,value:t}))).filter((({key:e})=>!$.includes(e))).filter((({value:e})=>(0,b.X3)(e.behaviors||[])&&!e.deprecated)).sort(((e,t)=>e.value.name.localeCompare(t.value.name)))),[E,$]),_=(0,r.useMemo)((()=>{const e={};return W.forEach((t=>{const i=t.value.category||Z;e[i]||(e[i]=[]),e[i].push(t)})),e}),[W]),J=(0,r.useMemo)((()=>Object.keys(_).sort(((e,t)=>e===Z?1:t===Z?-1:e.localeCompare(t)))),[_]),Q=(0,r.useMemo)((()=>{const e={};return W.forEach((t=>{(t.value.tags||[]).forEach((i=>{e[i]||(e[i]=[]),e[i].push(t)}))})),e}),[W]),ee=(0,r.useMemo)((()=>Object.keys(Q).sort(((e,t)=>e.localeCompare(t))).filter((e=>-1===k.indexOf(e)))),[Q]),te=(0,r.useMemo)((()=>W.sort(((e,t)=>e.value.name.localeCompare(t.value.name)))),[W]),[ie,ne]=(0,r.useState)((()=>(null==q?void 0:q.category)||C)),[re,ae]=(0,r.useState)((()=>null!=q&&q.category?n.Category:n.Featured)),le=(0,r.useMemo)((()=>new a.Z(W,{ignoreLocation:!0,threshold:.3,keys:[{name:"value.name",weight:4},{name:"value.tags",weight:2},"value.description"]})),[W]),oe=(0,r.useMemo)((()=>""===X.trim()?[]:le.search(X).map((e=>e.item)).sort(((e,t)=>{var i,n;const r=null==(i=e.value)?void 0:i.label,a=null==(n=t.value)?void 0:n.label,l=r&&g.eH[r]?g.eH[r].weight:0;return(a&&g.eH[a]?g.eH[a].weight:0)-l}))),[X,le]),se=(0,r.useCallback)((()=>{P(!0)}),[]),de=(0,r.useCallback)((e=>V(e.target.value)),[]),ce=(0,r.useCallback)((()=>{P(!1),V(""),T.current.blur()}),[]),ge=(0,r.useCallback)(((e,t)=>{R&&ce(),ne(e),ae(t);const i=q&&G(q,e);e===ie||i||o(null)}),[ce,R,ie,q,o]),pe=(0,r.useMemo)((()=>({[n.Category]:{title:(0,s.t)("Category"),icon:(0,f.tZ)(v.Z.Category,{iconSize:"m"}),selectors:J},[n.Tags]:{title:(0,s.t)("Tags"),icon:(0,f.tZ)(v.Z.Tags,{iconSize:"m"}),selectors:ee}})),[J,ee]);return(0,f.BX)(w,{className:y,isSelectedVizMetadata:Boolean(q),children:[(0,f.BX)(S,{children:[(0,f.tZ)(L,{css:({gridUnit:e})=>c.iv`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:n.AllCharts,selector:U,icon:(0,f.tZ)(v.Z.Ballot,{iconSize:"m"}),isSelected:!Y&&U===ie&&n.AllCharts===re,onClick:ge}),(0,f.tZ)(L,{css:({gridUnit:e})=>c.iv`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:n.Featured,selector:C,icon:(0,f.tZ)(v.Z.FireOutlined,{iconSize:"m"}),isSelected:!Y&&C===ie&&n.Featured===re,onClick:ge}),(0,f.tZ)(p.Ol,{expandIconPosition:"right",ghost:!0,defaultActiveKey:n.Category,children:Object.keys(pe).map((e=>{const t=pe[e];return(0,f.tZ)(p.Ol.Panel,{header:(0,f.tZ)("span",{className:"header",children:t.title}),children:t.selectors.map((i=>(0,f.tZ)(L,{selector:i,sectionId:e,icon:t.icon,isSelected:!Y&&i===ie&&e===re,onClick:ge},i)))},e)}))})]}),(0,f.tZ)(M,{children:(0,f.tZ)(h.II,{type:"text",ref:T,value:X,placeholder:(0,s.t)("Search all charts"),onChange:de,onFocus:se,prefix:(0,f.tZ)(A,{children:(0,f.tZ)(v.Z.Search,{iconSize:"m"})}),suffix:(0,f.tZ)(A,{children:X&&(0,f.tZ)(v.Z.XLarge,{iconSize:"m",onClick:ce})})})}),(0,f.tZ)(K,{children:(0,f.tZ)(D,{vizEntries:Y?oe:ie===U&&re===n.AllCharts?te:ie===C&&re===n.Featured&&Q[C]?Q[C]:re===n.Category&&_[ie]?_[ie]:re===n.Tags&&Q[ie]?Q[ie]:[],selectedViz:l,setSelectedViz:o,onDoubleClick:d})}),q?(0,f.tZ)("div",{css:e=>[O(e),F(e)],children:(0,f.BX)(f.HY,{children:[(0,f.BX)(z,{css:c.iv`
                grid-area: viz-name;
                position: relative;
              `,children:[null==q?void 0:q.name,(null==q?void 0:q.label)&&(0,f.tZ)(m.u,{id:"viz-badge-tooltip",placement:"top",title:null!=(t=q.labelExplanation)?t:g.t$[q.label],children:(0,f.tZ)(H,{children:(0,f.tZ)(j,{children:(0,f.tZ)("div",{children:(0,s.t)(q.label)})})})})]}),(0,f.tZ)(B,{children:null==q?void 0:q.tags.map((e=>(0,f.tZ)(u.Z,{children:e},e)))}),(0,f.tZ)(N,{children:(null==q?void 0:q.description)||(0,s.t)("No description available.")}),(0,f.tZ)(z,{css:c.iv`
                grid-area: examples-header;
              `,children:(0,s.t)("Examples")}),(0,f.tZ)(I,{children:(null!=q&&null!=(i=q.exampleGallery)&&i.length?q.exampleGallery:[{url:null==q?void 0:q.thumbnail,caption:null==q?void 0:q.name}]).map((e=>(0,f.tZ)("img",{src:e.url,alt:e.caption,title:e.caption},e.url)))})]})}):null]})}}}]);
//# sourceMappingURL=ee0d89d312133c32b15f.chunk.js.map