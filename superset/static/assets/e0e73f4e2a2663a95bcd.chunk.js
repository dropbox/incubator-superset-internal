"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2229],{67869:(e,t,r)=>{r.d(t,{E8:()=>x,CW:()=>d.Z,kI:()=>n,A5:()=>i.Z,Gz:()=>u.Z,Ys:()=>m.Z,$5:()=>p.Z,Dg:()=>f.Z,XF:()=>g.Z,gE:()=>s.Z,yE:()=>y.Z,eL:()=>o.Z,zR:()=>h.Z,UM:()=>b.Z,Bs:()=>v.Z,T8:()=>c.Z,Xs:()=>w.X,B_:()=>a.Z,Qg:()=>Z.Q,j3:()=>l.Z,l:()=>w.Z});var n=r(28062),i=r(97466),s=r(15226),a=r(81545),o=r(58586),l=r(45511),c=r(2995),h=r(98195),d=r(27965),u=r(86698),m=r(69224),p=r(77781),f=r(64236),g=r(65445),y=r(36361),b=r(132),v=r(31225),Z=r(25130),w=r(78161);const x="#00A699"},25130:(e,t,r)=>{r.d(t,{Q:()=>i});const n=/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;function i(e,t=186){let r=0,i=0,s=0;if(e.length>7){const t=n.exec(e);if(!t)throw new Error(`Invalid color: ${e}`);r=parseInt(t[1],10),i=parseInt(t[2],10),s=parseInt(t[3],10)}else{let t=e;if(t.startsWith("#")&&(t=t.substring(1)),3===t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]].join("")),6!==t.length)throw new Error(`Invalid color: ${e}`);r=parseInt(t.slice(0,2),16),i=parseInt(t.slice(2,4),16),s=parseInt(t.slice(4,6),16)}return.299*r+.587*i+.114*s>t?"#000":"#FFF"}},8608:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(62761);function i(e,t,r){let n=e,i=t(n);for(;!r(i);)n-=1,i=t(n);return n}function s(e){const{idealFontSize:t,maxWidth:r,maxHeight:s,style:a,...o}=e;let l;if(null!=t)l=t;else{if(null==s)throw new Error("You must specify at least one of maxHeight or idealFontSize");l=Math.floor(s)}function c(e){return(0,n.Z)({...o,style:{...a,fontSize:`${e}px`}})}return null!=r&&(l=i(l,c,(e=>e.width<=r))),null!=s&&(l=i(l,c,(e=>e.height<=s))),l}},62761:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(10660),i=r(61888),s=r(91572);function a(e,t){const{text:r,className:a,style:o,container:l}=e;if(0===r.length)return{height:0,width:0};const c=s.Y.createInContainer(l),h=s.S.createInContainer(c);(0,n.Z)(h,{className:a,style:o,text:r});const d=(0,i.Z)(h,t);return setTimeout((()=>{s.S.removeFromContainer(c),s.Y.removeFromContainer(l)}),500),d}},4470:(e,t,r)=>{r.d(t,{Z:()=>n});class n{constructor(e){this.activeNodes=new Map,this.factoryFn=void 0,this.factoryFn=e}createInContainer(e=document.body){if(this.activeNodes.has(e)){const t=this.activeNodes.get(e);return t.counter+=1,t.node}const t=this.factoryFn();return e.append(t),this.activeNodes.set(e,{counter:1,node:t}),t}removeFromContainer(e=document.body){if(this.activeNodes.has(e)){const t=this.activeNodes.get(e);t.counter-=1,0===t.counter&&(e.removeChild(t.node),this.activeNodes.delete(e))}}}},48691:(e,t,r)=>{r.d(t,{h:()=>n});const n="http://www.w3.org/2000/svg"},24313:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(48691);function i(){const e=document.createElementNS(n.h,"svg");return e.style.position="absolute",e.style.top="-100%",e.style.left="-100%",e.style.width="0",e.style.height="0",e.style.opacity="0",e.style.pointerEvents="none",e}},48e3:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(48691);function i(){return document.createElementNS(n.h,"text")}},91572:(e,t,r)=>{r.d(t,{Y:()=>a,S:()=>o});var n=r(4470),i=r(24313),s=r(48e3);const a=new n.Z(i.Z),o=new n.Z(s.Z)},61888:(e,t,r)=>{r.d(t,{Z:()=>i});const n={height:20,width:100};function i(e,t=n){const{width:r,height:i}=e.getBBox?e.getBBox():t;return{height:Math.ceil(i),width:Math.ceil(r)}}},10660:(e,t,r)=>{r.d(t,{Z:()=>i});const n=["font","fontWeight","fontStyle","fontSize","fontFamily","letterSpacing"];function i(e,{className:t,style:r={},text:i}={}){const s=e;return s.textContent!==i&&(s.textContent=void 0===i?null:i),s.getAttribute("class")!==t&&s.setAttribute("class",null!=t?t:""),s.style.removeProperty("font"),s.style.removeProperty("font-weight"),s.style.removeProperty("font-style"),s.style.removeProperty("font-size"),s.style.removeProperty("font-family"),s.style.removeProperty("letter-spacing"),n.filter((e=>void 0!==r[e]&&null!==r[e])).forEach((e=>{s.style[e]=`${r[e]}`})),s}},32229:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(67294),i=r(67190),s=r(61988),a=r(8608),o=r(40962),l=r(67869),c=r(51995),h=r(63475),d=r(11965);const u=(0,i.JB)(),m=.3;class p extends n.PureComponent{getClassName(){const{className:e,showTrendLine:t,bigNumberFallback:r}=this.props,n=`superset-legacy-chart-big-number ${e} ${r?"is-fallback-value":""}`;return t?n:`${n} no-trendline`}createTemporaryContainer(){const e=document.createElement("div");return e.className=this.getClassName(),e.style.position="absolute",e.style.opacity="0",e}renderFallbackWarning(){const{bigNumberFallback:e,formatTime:t,showTimestamp:r}=this.props;return!e||r?null:(0,d.tZ)("span",{className:"alert alert-warning",role:"alert",title:(0,s.t)("Last available value seen on %s",t(e[0]))},(0,s.t)("Not up to date"))}renderKicker(e){const{timestamp:t,showTimestamp:r,formatTime:n,width:i}=this.props;if(!r)return null;const s=null===t?"":n(t),o=this.createTemporaryContainer();document.body.append(o);const l=(0,a.Z)({text:s,maxWidth:i,maxHeight:e,className:"kicker",container:o});return o.remove(),(0,d.tZ)("div",{className:"kicker",style:{fontSize:l,height:e}},s)}renderHeader(e){const{bigNumber:t,headerFormatter:r,width:n}=this.props,i=null===t?(0,s.t)("No data"):r(t),o=this.createTemporaryContainer();document.body.append(o);const l=(0,a.Z)({text:i,maxWidth:n,maxHeight:e,className:"header-line",container:o});return o.remove(),(0,d.tZ)("div",{className:"header-line",style:{fontSize:l,height:e}},i)}renderSubheader(e){const{bigNumber:t,subheader:r,width:n,bigNumberFallback:i}=this.props;let o=0;const l=(0,s.t)("No data after filtering or data is NULL for the latest time record"),c=(0,s.t)("Try applying different filters or ensuring your datasource has data");let h=r;if(null===t&&(h=i?c:l),h){const t=this.createTemporaryContainer();return document.body.append(t),o=(0,a.Z)({text:h,maxWidth:n,maxHeight:e,className:"subheader-line",container:t}),t.remove(),(0,d.tZ)("div",{className:"subheader-line",style:{fontSize:o,height:e}},h)}return null}renderTrendline(e){const{width:t,trendLineData:r,echartOptions:n}=this.props;return null!=r&&r.some((e=>null!==e[1]))?(0,d.tZ)(h.Z,{width:Math.floor(t),height:e,echartOptions:n}):null}render(){const{showTrendLine:e,height:t,kickerFontSize:r,headerFontSize:n,subheaderFontSize:i}=this.props,s=this.getClassName();if(e){const e=Math.floor(m*t),a=t-e;return(0,d.tZ)("div",{className:s},(0,d.tZ)("div",{className:"text-container",style:{height:a}},this.renderFallbackWarning(),this.renderKicker(Math.ceil(.7*r*t)),this.renderHeader(Math.ceil(.7*n*t)),this.renderSubheader(Math.ceil(.7*i*t))),this.renderTrendline(e))}return(0,d.tZ)("div",{className:s,style:{height:t}},this.renderFallbackWarning(),this.renderKicker(r*t),this.renderHeader(Math.ceil(n*t)),this.renderSubheader(Math.ceil(i*t)))}}p.defaultProps={className:"",headerFormatter:u,formatTime:o.Z,headerFontSize:.3,kickerFontSize:.1,mainColor:l.E8,showTimestamp:!1,showTrendLine:!1,startYAxisAtZero:!0,subheader:"",subheaderFontSize:.125,timeRangeFixed:!1};const f=(0,c.iK)(p)`
  font-family: ${({theme:e})=>e.typography.families.sansSerif};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.no-trendline .subheader-line {
    padding-bottom: 0.3em;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .alert {
      font-size: ${({theme:e})=>e.typography.sizes.s};
      margin: -0.5em 0 0.4em;
      line-height: 1;
      padding: 2px 4px 3px;
      border-radius: 3px;
    }
  }

  .kicker {
    line-height: 1em;
    padding-bottom: 2em;
  }

  .header-line {
    position: relative;
    line-height: 1em;
    span {
      position: absolute;
      bottom: 0;
    }
  }

  .subheader-line {
    line-height: 1em;
    padding-bottom: 0;
  }

  &.is-fallback-value {
    .kicker,
    .header-line,
    .subheader-line {
      opacity: 0.5;
    }
  }

  .superset-data-ui-tooltip {
    z-index: 1000;
    background: #000;
  }
`},63475:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(67294),i=r(51995),s=r(29027),a=r(11965);const o=i.iK.div`
  height: ${({height:e})=>e};
  width: ${({width:e})=>e};
`;function l({width:e,height:t,echartOptions:r,eventHandlers:i,zrEventHandlers:l,selectedValues:c={}},h){const d=(0,n.useRef)(null),u=(0,n.useRef)(),m=(0,n.useMemo)((()=>Object.keys(c)||[]),[c]),p=(0,n.useRef)([]);return(0,n.useImperativeHandle)(h,(()=>({getEchartInstance:()=>u.current}))),(0,n.useEffect)((()=>{d.current&&(u.current||(u.current=(0,s.S1)(d.current)),Object.entries(i||{}).forEach((([e,t])=>{var r,n;null==(r=u.current)||r.off(e),null==(n=u.current)||n.on(e,t)})),Object.entries(l||{}).forEach((([e,t])=>{var r,n;null==(r=u.current)||r.getZr().off(e),null==(n=u.current)||n.getZr().on(e,t)})),u.current.setOption(r,!0))}),[r,i,l]),(0,n.useEffect)((()=>{u.current&&(u.current.dispatchAction({type:"downplay",dataIndex:p.current.filter((e=>!m.includes(e)))}),m.length&&u.current.dispatchAction({type:"highlight",dataIndex:m}),p.current=m)}),[m]),(0,n.useEffect)((()=>{u.current&&u.current.resize({width:e,height:t})}),[e,t]),(0,a.tZ)(o,{ref:d,height:t,width:e})}const c=(0,n.forwardRef)(l)}}]);