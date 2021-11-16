"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[347],{63295:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(78918),s=n(71761),i=n(83518),o=n(39450);function a(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}class u extends r.Z{initializeState(t){super.initializeState(),this.setState({ignoreProps:a(this.constructor._propTypes,t.data.props),dimensions:t})}updateState(t){super.updateState(t);const{changeFlags:e}=t;if(e.extensionsChanged){const t=this.getShaders({});t&&t.defines&&(t.defines.NON_INSTANCED_MODEL=1),this.updateShaders(t)}this._updateAttributes(t.props)}updateAttributes(t){this.setState({changedAttributes:t})}getAttributes(){return this.getAttributeManager().getShaderAttributes()}getModuleSettings(){const{viewport:t,mousePosition:e,gl:n}=this.context;return Object.assign(Object.create(this.props),{viewport:t,mousePosition:e,pickingActive:0,devicePixelRatio:(0,o.w)(n)})}updateShaders(t){}isAggregationDirty(t,e={}){const{props:n,oldProps:r,changeFlags:i}=t,{compareAll:o=!1,dimension:a}=e,{ignoreProps:u}=this.state,{props:c,accessors:l=[]}=a,{updateTriggersChanged:g}=i;if(i.dataChanged)return!0;if(g){if(g.all)return!0;for(const t of l)if(g[t])return!0}if(o)return!!i.extensionsChanged||(0,s.tg)({oldProps:r,newProps:n,ignoreProps:u,propTypes:this.constructor._propTypes});for(const t of c)if(n[t]!==r[t])return!0;return!1}isAttributeChanged(t){const{changedAttributes:e}=this.state;return t?e&&void 0!==e[t]:!function(t){let e=!0;for(const n in t){e=!1;break}return e}(e)}_getAttributeManager(){return new i.Z(this.context.gl,{id:this.props.id,stats:this.context.stats})}}u.layerName="AggregationLayer"},15614:(t,e,n)=>{n.d(e,{KM:()=>r,_D:()=>a,q5:()=>u});const r={SUM:1,MEAN:2,MIN:3,MAX:4};function s(t,e){return t+e}function i(t,e){return e>t?e:t}function o(t,e){return e<t?e:t}function a(t,e,n){const a=r[t]||r.SUM;switch(e=function(t,e={}){return Number.isFinite(t)?t:n=>(e.index=n.index,t(n.source,e))}(e,n),a){case r.MIN:return t=>function(t,e){if(Number.isFinite(e))return t.length?e:null;const n=t.map(e).filter(Number.isFinite);return n.length?n.reduce(o,1/0):null}(t,e);case r.SUM:return t=>function(t,e){if(Number.isFinite(e))return t.length?t.length*e:null;const n=t.map(e).filter(Number.isFinite);return n.length?n.reduce(s,0):null}(t,e);case r.MEAN:return t=>function(t,e){if(Number.isFinite(e))return t.length?e:null;const n=t.map(e).filter(Number.isFinite);return n.length?n.reduce(s,0)/n.length:null}(t,e);case r.MAX:return t=>function(t,e){if(Number.isFinite(e))return t.length?e:null;const n=t.map(e).filter(Number.isFinite);return n.length?n.reduce(i,-1/0):null}(t,e);default:return null}}function u(t,e={}){return n=>(e.indices=n.map((t=>t.index)),t(n.map((t=>t.source)),e))}},98014:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(25660);const s=t=>t.length,i=t=>t.points,o=t=>t.index,a=(t,e)=>t<e?-1:t>e?1:t>=e?0:NaN,u={getValue:s,getPoints:i,getIndex:o,filterData:null};class c{constructor(t=[],e=u){this.aggregatedBins=this.getAggregatedBins(t,e),this._updateMinMaxValues(),this.binMap=this.getBinMap()}getAggregatedBins(t,e){const{getValue:n=s,getPoints:r=i,getIndex:a=o,filterData:u}=e,c="function"==typeof u,l=t.length,g=[];let h=0;for(let e=0;e<l;e++){const s=t[e],i=r(s),o=a(s),l=c?i.filter(u):i;s.filteredPoints=c?l:null;const d=l.length?n(l):null;null!=d&&(g[h]={i:Number.isFinite(o)?o:e,value:d,counts:l.length},h++)}return g}_percentileToIndex(t){const e=this.sortedBins.length;if(e<2)return[0,0];const[n,s]=t.map((t=>(0,r.uZ)(t,0,100)));return[Math.ceil(n/100*(e-1)),Math.floor(s/100*(e-1))]}getBinMap(){const t={};for(const e of this.aggregatedBins)t[e.i]=e;return t}_updateMinMaxValues(){let t=0,e=0,n=3402823466e29,r=0;for(const s of this.aggregatedBins)t=t>s.counts?t:s.counts,e=e>s.value?e:s.value,n=n<s.value?n:s.value,r+=s.counts;this.maxCount=t,this.maxValue=e,this.minValue=n,this.totalCount=r}getValueRange(t){if(this.sortedBins||(this.sortedBins=this.aggregatedBins.sort(((t,e)=>a(t.value,e.value)))),!this.sortedBins.length)return[];let e=0,n=this.sortedBins.length-1;if(Array.isArray(t)){const r=this._percentileToIndex(t);e=r[0],n=r[1]}return[this.sortedBins[e].value,this.sortedBins[n].value]}getValueDomainByScale(t,[e=0,n=100]=[]){if(this.sortedBins||(this.sortedBins=this.aggregatedBins.sort(((t,e)=>a(t.value,e.value)))),!this.sortedBins.length)return[];const r=this._percentileToIndex([e,n]);return this._getScaleDomain(t,r)}_getScaleDomain(t,[e,n]){const s=this.sortedBins;switch(t){case"quantize":case"linear":return[s[e].value,s[n].value];case"quantile":return(0,r.N4)(s.slice(e,n+1),(t=>t.value));case"ordinal":return(0,r.Rr)(s,(t=>t.value));default:return[s[e].value,s[n].value]}}}},4516:(t,e,n)=>{n.d(e,{K:()=>r,P:()=>s});const r=[[255,255,178],[254,217,118],[254,178,76],[253,141,60],[240,59,32],[189,0,38]];function s(t,e=!1,n=Float32Array){let r;if(Number.isFinite(t[0]))r=new n(t);else{r=new n(4*t.length);let e=0;for(let n=0;n<t.length;n++){const s=t[n];r[e++]=s[0],r[e++]=s[1],r[e++]=s[2],r[e++]=Number.isFinite(s[3])?s[3]:255}}if(e)for(let t=0;t<r.length;t++)r[t]/=255;return r}},25660:(t,e,n)=>{n.d(e,{N4:()=>d,Rr:()=>p,uZ:()=>f,ge:()=>b});var r=n(80744);function s(t,e,n){const r=n;return r.domain=()=>t,r.range=()=>e,r}function i(t,e){return s(t,e,(n=>function(t,e,n){const s=t[1]-t[0];if(s<=0)return r.Z.warn("quantizeScale: invalid domain, returning range[0]")(),e[0];const i=s/e.length,o=Math.floor((n-t[0])/i);return e[Math.max(Math.min(o,e.length-1),0)]}(t,e,n)))}function o(t,e){return s(t,e,(n=>function(t,e,n){return(n-t[0])/(t[1]-t[0])*(e[1]-e[0])+e[0]}(t,e,n)))}function a(t,e){const n=t.sort(u);let r=0;const i=Math.max(1,e.length),o=new Array(i-1);for(;++r<i;)o[r-1]=c(n,r/i);const a=t=>function(t,e,n){return e[function(t,e){let n=0,r=t.length;for(;n<r;){const s=n+r>>>1;u(t[s],e)>0?r=s:n=s+1}return n}(t,n)]}(o,e,t);return a.thresholds=()=>o,s(t,e,a)}function u(t,e){return t-e}function c(t,e){const n=t.length;if(e<=0||n<2)return t[0];if(e>=1)return t[n-1];const r=(n-1)*e,s=Math.floor(r),i=t[s];return i+(t[s+1]-i)*(r-s)}function l(t,e){const n=new Map,r=[];for(const e of t){const t="".concat(e);n.has(t)||n.set(t,r.push(e))}return s(t,e,(t=>function(t,e,n,r){const s="".concat(r);let i=e.get(s);return void 0===i&&(i=t.push(r),e.set(s,i)),n[(i-1)%n.length]}(r,n,e,t)))}function g(t){return null!=t}function h(t,e){return("function"==typeof e?t.map(e):t).filter(g)}function d(t,e){return h(t,e)}function p(t,e){return function(t){const e=[];return t.forEach((t=>{!e.includes(t)&&g(t)&&e.push(t)})),e}(h(t,e))}function f(t,e,n){return Math.max(e,Math.min(n,t))}function b(t){switch(t){case"quantize":return i;case"linear":return o;case"quantile":return a;case"ordinal":return l;default:return i}}},78918:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(95772),s=n(63803),i=n(61855);class o extends r.Z{get isComposite(){return!0}get isLoaded(){return super.isLoaded&&this.getSubLayers().every((t=>t.isLoaded))}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(){}setState(t){super.setState(t),this.setNeedsUpdate()}getPickingInfo({info:t}){const{object:e}=t;return e&&e.__source&&e.__source.parent&&e.__source.parent.id===this.id?(t.object=e.__source.object,t.index=e.__source.index,t):t}renderLayers(){return null}filterSubLayer(t){return!0}shouldRenderSubLayer(t,e){const{_subLayerProps:n}=this.props;return e&&e.length||n&&n[t]}getSubLayerClass(t,e){const{_subLayerProps:n}=this.props;return n&&n[t]&&n[t].type||e}getSubLayerRow(t,e,n){return t.__source={parent:this,object:e,index:n},t}getSubLayerAccessor(t){if("function"==typeof t){const e={data:this.props.data,target:[]};return(n,r)=>n&&n.__source?(e.index=n.__source.index,t(n.__source.object,e)):t(n,r)}return t}getSubLayerProps(t={}){const{opacity:e,pickable:n,visible:r,parameters:s,getPolygonOffset:i,highlightedObjectIndex:o,autoHighlight:a,highlightColor:u,coordinateSystem:c,coordinateOrigin:l,wrapLongitude:g,positionFormat:h,modelMatrix:d,extensions:p,fetch:f,_subLayerProps:b}=this.props,y={opacity:e,pickable:n,visible:r,parameters:s,getPolygonOffset:i,highlightedObjectIndex:o,autoHighlight:a,highlightColor:u,coordinateSystem:c,coordinateOrigin:l,wrapLongitude:g,positionFormat:h,modelMatrix:d,extensions:p,fetch:f},m=b&&b[t.id],_=m&&m.updateTriggers,S=t.id||"sublayer";if(m){const e=this.constructor._propTypes,n=t.type?t.type._propTypes:{};for(const t in m){const r=n[t]||e[t];r&&"accessor"===r.type&&(m[t]=this.getSubLayerAccessor(m[t]))}}Object.assign(y,t,m),y.id="".concat(this.props.id,"-").concat(S),y.updateTriggers={all:this.props.updateTriggers.all,...t.updateTriggers,..._};for(const t of p){const e=t.getSubLayerProps.call(this,t);e&&Object.assign(y,e,{updateTriggers:Object.assign(y.updateTriggers,e.updateTriggers)})}return y}_updateAutoHighlight(t){for(const e of this.getSubLayers())e.updateAutoHighlight(t)}_getAttributeManager(){return null}_renderLayers(){let{subLayers:t}=this.internalState;const e=!t||this.needsUpdate();e&&(t=this.renderLayers(),t=(0,i.x)(t,Boolean),this.internalState.subLayers=t),(0,s.Z)("compositeLayer.renderLayers",this,e,t);for(const e of t)e.parent=this}}o.layerName="CompositeLayer"}}]);