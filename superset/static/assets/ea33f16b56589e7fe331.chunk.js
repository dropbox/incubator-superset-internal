"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3036,6871,1261],{81221:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var o=r(18446),a=r.n(o),i=r(67294),n=r(45697),s=r.n(n),l=r(31069),c=r(84502),u=r(54998),d=r.n(u);function p(e,t,r=!0,o={}){if(!e.datasource)return null;const a=new(d())("/"),i=function(e,t="base"){let r="/superset/explore/";return["json","csv","query","results","samples"].includes(t)&&(r="/superset/explore_json/"),r}(0,t),n=a.search(!0);Object.keys(o).forEach((e=>{n[e]=o[e]})),n.form_data=function(e){const t=new Set;return JSON.stringify(e,((e,r)=>{if("object"==typeof r&&null!==r){if(t.has(r))try{return JSON.parse(JSON.stringify(r))}catch(e){return}t.add(r)}return r}))}(e),"standalone"===t&&(n.standalone="true");const s=a.directory(i).search(n).toString();return!r&&s.length>8e3?p({datasource:e.datasource,viz_type:e.viz_type},t,!1,{URL_IS_TOO_LONG_TO_SHARE:null}):s}var g=r(94828),h=r(31221),f=r(14228),m=r(33452),y=r(54448),v=r(3251),_=r(21382),b=r(10357);const x={deck_grid:g.getLayer,deck_screengrid:h.getLayer,deck_path:f.getLayer,deck_hex:m.getLayer,deck_scatter:y.getLayer,deck_geojson:v.getLayer,deck_arc:_.getLayer,deck_polygon:b.getLayer};var C=r(11965);const S={formData:s().object.isRequired,payload:s().object.isRequired,setControlValue:s().func.isRequired,viewport:s().object.isRequired,onAddFilter:s().func,onSelect:s().func},L={onAddFilter(){},onSelect(){}};class w extends i.PureComponent{constructor(e){super(e),this.containerRef=i.createRef(),this.setTooltip=e=>{const{current:t}=this.containerRef;t&&t.setTooltip(e)},this.state={subSlicesLayers:{}},this.onViewportChange=this.onViewportChange.bind(this)}componentDidMount(){const{formData:e,payload:t}=this.props;this.loadLayers(e,t)}UNSAFE_componentWillReceiveProps(e){const{formData:t,payload:r}=e;!a()(this.props.formData.deck_slices,e.formData.deck_slices)&&this.loadLayers(t,r)}onViewportChange(e){this.setState({viewport:e})}loadLayers(e,t,r){this.setState({subSlicesLayers:{},viewport:r}),t.data.slices.forEach((t=>{const r=[...t.form_data.filters||[],...e.filters||[],...e.extra_filters||[]],o={...t,form_data:{...t.form_data,filters:r}};l.Z.get({endpoint:p(o.form_data,"json")}).then((({json:e})=>{const t=x[o.form_data.viz_type](o.form_data,e,this.props.onAddFilter,this.setTooltip,[],this.props.onSelect);this.setState({subSlicesLayers:{...this.state.subSlicesLayers,[o.slice_id]:t}})})).catch((()=>{}))}))}render(){const{payload:e,formData:t,setControlValue:r,height:o,width:a}=this.props,{subSlicesLayers:i}=this.state,n=Object.values(i);return(0,C.tZ)(c.F,{ref:this.containerRef,mapboxApiAccessToken:e.data.mapboxApiKey,viewport:this.state.viewport||this.props.viewport,layers:n,mapStyle:t.mapbox_style,setControlValue:r,onViewportChange:this.onViewportChange,height:o,width:a})}}w.propTypes=S,w.defaultProps=L;const k=w},3251:(e,t,r)=>{r.r(t),r.d(t,{getLayer:()=>S,default:()=>j});var o=r(67294),a=r(45697),i=r.n(a),n=r(21497),s=r(29319),l=r.n(s),c=r(84502),u=r(64106),d=r(21207),p=r(52154),g=r(1740),h=r(40461),f=r(11965);const m={fillColor:"fillColor",color:"fillColor",fill:"fillColor","fill-color":"fillColor",strokeColor:"strokeColor","stroke-color":"strokeColor","stroke-width":"strokeWidth"},y=(e,t)=>{const r={};return Object.keys(e).forEach((t=>{t in m?r[m[t]]=e[t]:r[t]=e[t]})),"string"==typeof e.fillColor&&(r.fillColor=(0,u.hexToRGB)(e.fillColor)),"string"==typeof e.strokeColor&&(r.strokeColor=(0,u.hexToRGB)(e.strokeColor)),{...r,...t}};let v;const _=(e,t,r)=>{if(e&&e.features&&e.features.forEach((o=>{_(o,t,e.extraProps||r)})),e&&e.geometry){const o={...e,properties:y(e.properties,t)};o.extraProps||(o.extraProps=r),v.push(o)}};function b(e){return e.object.extraProps&&(0,f.tZ)("div",{className:"deckgl-tooltip"},Object.keys(e.object.extraProps).map(((t,r)=>(0,f.tZ)(g.Z,{key:`prop-${r}`,label:`${t}: `,value:`${e.object.extraProps[t]}`}))))}const x=e=>{var t;return null==e||null==(t=e.properties)?void 0:t.fillColor},C=e=>{var t;return null==e||null==(t=e.properties)?void 0:t.strokeColor};function S(e,t,r,o){const a=e,i=a.fill_color_picker,s=a.stroke_color_picker,l=[i.r,i.g,i.b,255*i.a],c=[s.r,s.g,s.b,255*s.a],u={};let g;return l[3]>0&&(u.fillColor=l),c[3]>0&&(u.strokeColor=c),v=[],_(t.data,u),a.js_data_mutator&&(g=(0,d.Z)(a.js_data_mutator),v=g(v)),new n.Z({id:`geojson-layer-${a.slice_id}`,filled:a.filled,data:v,stroked:a.stroked,extruded:a.extruded,pointRadiusScale:a.point_radius_scale,getFillColor:x,getLineWidth:a.line_width||1,getLineColor:C,...(0,p.N)(a,o,b)})}const L={formData:i().object.isRequired,payload:i().object.isRequired,setControlValue:i().func.isRequired,viewport:i().object.isRequired,onAddFilter:i().func},w={onAddFilter(){}};class k extends o.Component{constructor(...e){super(...e),this.containerRef=o.createRef(),this.setTooltip=e=>{const{current:t}=this.containerRef;t&&t.setTooltip(e)}}render(){const{formData:e,payload:t,setControlValue:r,onAddFilter:o,height:a,width:i}=this.props;let{viewport:n}=this.props;if(e.autozoom){var s,u;const e=(null==t||null==(s=t.data)||null==(u=s.features)||null==u.reduce?void 0:u.reduce(((e,t)=>{const r=l()(t);return r?[...e,[r[0],r[1]],[r[2],r[3]]]:e}),[]))||[];e.length&&(n=(0,h.Z)(n,{width:i,height:a,points:e}))}const d=S(e,t,0,this.setTooltip);return(0,f.tZ)(c.F,{ref:this.containerRef,mapboxApiAccessToken:t.data.mapboxApiKey,viewport:n,layers:[d],mapStyle:e.mapbox_style,setControlValue:r,height:a,width:i})}}k.propTypes=L,k.defaultProps=w;const j=k},94828:(e,t,r)=>{r.r(t),r.d(t,{getLayer:()=>d,default:()=>p});var o=r(99396),a=(r(67294),r(61988)),i=r(52154),n=r(21207),s=r(26331),l=r(1740),c=r(11965);function u(e){return(0,c.tZ)("div",{className:"deckgl-tooltip"},(0,c.tZ)(l.Z,{label:`${(0,a.t)("Longitude and Latitude")}: `,value:`${e.coordinate[0]}, ${e.coordinate[1]}`}),(0,c.tZ)(l.Z,{label:`${(0,a.t)("Height")}: `,value:`${e.object.elevationValue}`}))}function d(e,t,r,a){const s=e,l=s.color_picker;let c=t.data.features.map((e=>({...e,color:[l.r,l.g,l.b,255*l.a]})));s.js_data_mutator&&(c=(0,n.Z)(s.js_data_mutator)(c));const d=(0,i.Z)(s.js_agg_function,(e=>e.weight));return new o.Z({id:`grid-layer-${s.slice_id}`,data:c,pickable:!0,cellSize:s.grid_size,minColor:[0,0,0,0],extruded:s.extruded,maxColor:[l.r,l.g,l.b,255*l.a],outline:!1,getElevationValue:d,getColorValue:d,...(0,i.N)(s,a,u)})}const p=(0,s.G)(d,(function(e){return e.map((e=>e.position))}))},33452:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L,getLayer:()=>S});var o=r(80744),a=r(15103),i=r(4516),n=Math.PI/3,s=[0,n,2*n,3*n,4*n,5*n];function l(e){return e[0]}function c(e){return e[1]}var u=r(38550),d=r(73728),p=r(63295);function g(){}const h={colorDomain:null,colorRange:i.K,getColorValue:{type:"accessor",value:null},getColorWeight:{type:"accessor",value:1},colorAggregation:"SUM",lowerPercentile:{type:"number",value:0,min:0,max:100},upperPercentile:{type:"number",value:100,min:0,max:100},colorScaleType:"quantize",onSetColorDomain:g,elevationDomain:null,elevationRange:[0,1e3],getElevationValue:{type:"accessor",value:null},getElevationWeight:{type:"accessor",value:1},elevationAggregation:"SUM",elevationLowerPercentile:{type:"number",value:0,min:0,max:100},elevationUpperPercentile:{type:"number",value:100,min:0,max:100},elevationScale:{type:"number",min:0,value:1},elevationScaleType:"linear",onSetElevationDomain:g,radius:{type:"number",value:1e3,min:1},coverage:{type:"number",min:0,max:1,value:1},extruded:!1,hexagonAggregator:function(e,t){const{data:r,radius:a}=e,{viewport:i,attributes:d}=t,p=r.length?function(e,t){const{attributes:r}=t,o=r.positions.value,{size:a}=r.positions.getAccessor();let i,n=1/0,s=1/0,l=-1/0,c=-1/0;for(i=0;i<a*e.length;i+=a){const e=o[i],t=o[i+1];Number.isFinite(e)&&Number.isFinite(t)&&(n=Math.min(e,n),l=Math.max(e,l),s=Math.min(t,s),c=Math.max(t,c))}return[n,s,l,c].every(Number.isFinite)?[(n+l)/2,(s+c)/2]:null}(r,t):null,g=function(e,t,r){const{unitsPerMeter:o}=t.getDistanceScales(r);return e*o[0]}(a,i,p),h=[],{iterable:f,objectInfo:m}=(0,u.jB)(r),y=d.positions.value,{size:v}=d.positions.getAccessor();for(const e of f){m.index++;const t=m.index*v,r=[y[t],y[t+1]];Number.isFinite(r[0])&&Number.isFinite(r[1])?h.push({screenCoord:i.projectFlat(r),source:e,index:m.index}):o.Z.warn("HexagonLayer: invalid position")()}const _=function(){var e,t,r,o=0,a=0,i=1,u=1,d=l,p=c;function g(e){var o,a={},i=[],n=e.length;for(o=0;o<n;++o)if(!isNaN(l=+d.call(null,s=e[o],o,e))&&!isNaN(c=+p.call(null,s,o,e))){var s,l,c,u=Math.round(c/=r),g=Math.round(l=l/t-(1&u)/2),h=c-u;if(3*Math.abs(h)>1){var f=l-g,m=g+(l<g?-1:1)/2,y=u+(c<u?-1:1),v=l-m,_=c-y;f*f+h*h>v*v+_*_&&(g=m+(1&u?1:-1)/2,u=y)}var b=g+"-"+u,x=a[b];x?x.push(s):(i.push(x=a[b]=[s]),x.x=(g+(1&u)/2)*t,x.y=u*r)}return i}function h(e){var t=0,r=0;return s.map((function(o){var a=Math.sin(o)*e,i=-Math.cos(o)*e,n=a-t,s=i-r;return t=a,r=i,[n,s]}))}return g.hexagon=function(t){return"m"+h(null==t?e:+t).join("l")+"z"},g.centers=function(){for(var n=[],s=Math.round(a/r),l=Math.round(o/t),c=s*r;c<u+e;c+=r,++s)for(var d=l*t+(1&s)*t/2;d<i+t/2;d+=t)n.push([d,c]);return n},g.mesh=function(){var t=h(e).slice(0,4).join("l");return g.centers().map((function(e){return"M"+e+"m"+t})).join("")},g.x=function(e){return arguments.length?(d=e,g):d},g.y=function(e){return arguments.length?(p=e,g):p},g.radius=function(o){return arguments.length?(t=2*(e=+o)*Math.sin(n),r=1.5*e,g):e},g.size=function(e){return arguments.length?(o=a=0,i=+e[0],u=+e[1],g):[i-o,u-a]},g.extent=function(e){return arguments.length?(o=+e[0][0],a=+e[0][1],i=+e[1][0],u=+e[1][1],g):[[o,a],[i,u]]},g.radius(1)}().radius(g).x((e=>e.screenCoord[0])).y((e=>e.screenCoord[1]));return{hexagons:_(h).map(((e,t)=>({position:i.unprojectFlat([e.x,e.y]),points:e,index:t}))),radiusCommon:g}},getPosition:{type:"accessor",value:e=>e.position},material:!0,_filterData:{type:"function",value:null,optional:!0}};class f extends p.Z{shouldUpdateState({changeFlags:e}){return e.somethingChanged}initializeState(){const e=new d.Z({getAggregator:e=>e.hexagonAggregator,getCellSize:e=>e.radius});this.state={cpuAggregator:e,aggregatorState:e.state,hexagonVertices:null},this.getAttributeManager().add({positions:{size:3,accessor:"getPosition"}})}updateState(e){super.updateState(e);const{cpuAggregator:t,hexagonVertices:r}=this.state;e.changeFlags.propsOrDataChanged&&this.setState({aggregatorState:t.updateState(e,{viewport:this.context.viewport,attributes:this.getAttributes()})});const{hexagonVertices:o}=t.state.layerData||{};if(o&&r!==o){const e=this.convertLatLngToMeterOffset(o);e&&this.setState({hexagonVertices:o,vertices:e})}else this.updateRadiusAngle()}updateRadiusAngle(e){const{viewport:t}=this.context,{unitsPerMeter:r}=t.getDistanceScales(),{cpuAggregator:o}=this.state;if(o.state.layerData&&o.state.layerData.radiusCommon){const{radiusCommon:e}=o.state.layerData,t=e/r[0];this.setState({angle:90,radius:t})}}convertLatLngToMeterOffset(e){const{viewport:t}=this.context;if(Array.isArray(e)&&6===e.length){const r=e[0],o=e[3],a=[(r[0]+o[0])/2,(r[1]+o[1])/2],i=t.projectFlat(a),{metersPerUnit:n}=t.getDistanceScales(a);return e.map((e=>{const r=t.projectFlat(e);return[(r[0]-i[0])*n[0],(r[1]-i[1])*n[1]]}))}return o.Z.error("HexagonLayer: hexagonVertices needs to be an array of 6 points")(),null}getPickingInfo({info:e}){return this.state.cpuAggregator.getPickingInfo({info:e})}_onGetSublayerColor(e){return this.state.cpuAggregator.getAccessor("fillColor")(e)}_onGetSublayerElevation(e){return this.state.cpuAggregator.getAccessor("elevation")(e)}_getSublayerUpdateTriggers(){return this.state.cpuAggregator.getUpdateTriggers(this.props)}renderLayers(){const{elevationScale:e,extruded:t,coverage:r,material:o,transitions:i}=this.props,{angle:n,radius:s,cpuAggregator:l,vertices:c}=this.state,u=this.getSubLayerClass("hexagon-cell",a.Z),d=this._getSublayerUpdateTriggers();return new u({...c&&c.length?{vertices:c,radius:1}:{radius:s,angle:n},diskResolution:6,elevationScale:e,extruded:t,coverage:r,material:o,getFillColor:this._onGetSublayerColor.bind(this),getElevation:this._onGetSublayerElevation.bind(this),transitions:i&&{getFillColor:i.getColorValue||i.getColorWeight,getElevation:i.getElevationValue||i.getElevationWeight}},this.getSubLayerProps({id:"hexagon-cell",updateTriggers:d}),{data:l.state.layerData.data})}}f.layerName="HexagonLayer",f.defaultProps=h,r(67294);var m=r(61988),y=r(52154),v=r(21207),_=r(26331),b=r(1740),x=r(11965);function C(e){return(0,x.tZ)("div",{className:"deckgl-tooltip"},(0,x.tZ)(b.Z,{label:`${(0,m.t)("Centroid (Longitude and Latitude)")}: `,value:`(${e.coordinate[0]}, ${e.coordinate[1]})`}),(0,x.tZ)(b.Z,{label:`${(0,m.t)("Height")}: `,value:`${e.object.elevationValue}`}))}function S(e,t,r,o){const a=e,i=a.color_picker;let n=t.data.features.map((e=>({...e,color:[i.r,i.g,i.b,255*i.a]})));a.js_data_mutator&&(n=(0,v.Z)(a.js_data_mutator)(n));const s=(0,y.Z)(a.js_agg_function,(e=>e.weight));return new f({id:`hex-layer-${a.slice_id}`,data:n,pickable:!0,radius:a.grid_size,minColor:[0,0,0,0],extruded:a.extruded,maxColor:[i.r,i.g,i.b,255*i.a],outline:!1,getElevationValue:s,getColorValue:s,...(0,y.N)(a,o,C)})}const L=(0,_.G)(S,(function(e){return e.map((e=>e.position))}))},14228:(e,t,r)=>{r.r(t),r.d(t,{getLayer:()=>u,default:()=>d});var o=r(62112),a=(r(67294),r(52154)),i=r(21207),n=r(26331),s=r(1740),l=r(11965);function c(e){return e.object.extraProps&&(0,l.tZ)("div",{className:"deckgl-tooltip"},Object.keys(e.object.extraProps).map(((t,r)=>(0,l.tZ)(s.Z,{key:`prop-${r}`,label:`${t}: `,value:`${e.object.extraProps[t]}`}))))}function u(e,t,r,n){const s=e,l=s.color_picker,u=[l.r,l.g,l.b,255*l.a];let d=t.data.features.map((e=>({...e,path:e.path,width:s.line_width,color:u})));return s.js_data_mutator&&(d=(0,i.Z)(s.js_data_mutator)(d)),new o.Z({id:`path-layer-${s.slice_id}`,getColor:e=>e.color,getPath:e=>e.path,getWidth:e=>e.width,data:d,rounded:!0,widthScale:1,...(0,a.N)(s,n,c)})}const d=(0,n.G)(u,(function(e){let t=[];return e.forEach((e=>{t=t.concat(e.path)})),t}))},10357:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V,getLayer:()=>R});var o=r(67294),a=r(45697),i=r.n(a),n=r(78918),s=r(80744),l=r(38550),c=r(71435),u=r(62112),d=r(99890),p=r(98452);const g=[0,0,0,255],h={stroked:!0,filled:!0,extruded:!1,elevationScale:1,wireframe:!1,_normalize:!0,_windingOrder:"CW",lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,lineJointRounded:!1,lineMiterLimit:4,getPolygon:{type:"accessor",value:e=>e.polygon},getFillColor:{type:"accessor",value:[0,0,0,255]},getLineColor:{type:"accessor",value:g},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0};class f extends n.Z{initializeState(){this.state={paths:[]},this.props.getLineDashArray&&s.Z.removed("getLineDashArray","PathStyleExtension")()}updateState({oldProps:e,props:t,changeFlags:r}){const o=r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getPolygon);if(o&&Array.isArray(r.dataChanged)){const e=this.state.paths.slice(),t=r.dataChanged.map((t=>(0,p.b)({data:e,getIndex:e=>e.__source.index,dataRange:t,replace:this._getPaths(t)})));this.setState({paths:e,pathsDiff:t})}else o&&this.setState({paths:this._getPaths(),pathsDiff:null})}_getPaths(e={}){const{data:t,getPolygon:r,positionFormat:o,_normalize:a}=this.props,i=[],n="XY"===o?2:3,{startRow:s,endRow:c}=e,{iterable:u,objectInfo:p}=(0,l.jB)(t,s,c);for(const e of u){p.index++;let t=r(e,p);a&&(t=d.F(t,n));const{holeIndices:o}=t,s=t.positions||t;if(o)for(let t=0;t<=o.length;t++){const r=s.slice(o[t-1]||0,o[t]||s.length);i.push(this.getSubLayerRow({path:r},e,p.index))}else i.push(this.getSubLayerRow({path:s},e,p.index))}return i}renderLayers(){const{data:e,_dataDiff:t,stroked:r,filled:o,extruded:a,wireframe:i,_normalize:n,_windingOrder:s,elevationScale:l,transitions:d,positionFormat:p}=this.props,{lineWidthUnits:h,lineWidthScale:f,lineWidthMinPixels:m,lineWidthMaxPixels:y,lineJointRounded:v,lineMiterLimit:_,lineDashJustified:b}=this.props,{getFillColor:x,getLineColor:C,getLineWidth:S,getLineDashArray:L,getElevation:w,getPolygon:k,updateTriggers:j,material:Z}=this.props,{paths:P,pathsDiff:A}=this.state,F=this.getSubLayerClass("fill",c.Z),R=this.getSubLayerClass("stroke",u.Z),D=this.shouldRenderSubLayer("fill",P)&&new F({_dataDiff:t,extruded:a,elevationScale:l,filled:o,wireframe:i,_normalize:n,_windingOrder:s,getElevation:w,getFillColor:x,getLineColor:a&&i?C:g,material:Z,transitions:d},this.getSubLayerProps({id:"fill",updateTriggers:{getPolygon:j.getPolygon,getElevation:j.getElevation,getFillColor:j.getFillColor,lineColors:a&&i,getLineColor:j.getLineColor}}),{data:e,positionFormat:p,getPolygon:k});return[!a&&D,!a&&r&&this.shouldRenderSubLayer("stroke",P)&&new R({_dataDiff:A&&(()=>A),widthUnits:h,widthScale:f,widthMinPixels:m,widthMaxPixels:y,jointRounded:v,miterLimit:_,dashJustified:b,_pathType:"loop",transitions:d&&{getWidth:d.getLineWidth,getColor:d.getLineColor,getPath:d.getPolygon},getColor:this.getSubLayerAccessor(C),getWidth:this.getSubLayerAccessor(S),getDashArray:this.getSubLayerAccessor(L)},this.getSubLayerProps({id:"stroke",updateTriggers:{getWidth:j.getLineWidth,getColor:j.getLineColor,getDashArray:j.getLineDashArray}}),{data:P,positionFormat:p,getPath:e=>e.path}),a&&D]}}f.layerName="PolygonLayer",f.defaultProps=h;var m=r(85531),y=r(36665),v=r(1740),_=r(4065),b=r(39828),x=r(2995),C=r(45511),S=r(64106);function L({break_points:e,num_buckets:t},r,o){if(!r)return[];if(void 0===e||0===e.length){const e=t?parseInt(t,10):10,[a,i]=(0,_.extent)(r,o);if(void 0===a)return[];const n=(i-a)/e,s=0===n?0:Math.max(0,Math.ceil(Math.log10(1/n))),l=i>i.toFixed(s)?1:0,c=a<a.toFixed(s)?a-1:a;return new Array(e+1+l).fill().map(((e,t)=>(c+t*n).toFixed(s)))}return e.sort(((e,t)=>parseFloat(e)-parseFloat(t)))}function w({break_points:e,num_buckets:t,linear_color_scheme:r,opacity:o},a,i){const n=e||t?L({break_points:e,num_buckets:t},a,i):null,s=Array.isArray(r)?new x.Z({colors:r,id:"custom"}):(0,C.Z)().get(r);let l,c;if(null!==n){const e=n.length-1,t=e>1?s.getColors(e):[s.colors[s.colors.length-1]],r=t[0],o=t[t.length-1];t.unshift(r),t.push(o);const a=n.map((e=>parseFloat(e)));l=(0,b.Z)().domain(a).range(t),c=t=>t>n[e]||t<n[0]}else l=s.createLinearScale((0,_.extent)(a,i)),c=()=>!1;return e=>{const t=i(e),r=(0,S.hexToRGB)(l(t));return c(t)?r[3]=0:r[3]=o/100*255,r}}var k=r(52154),j=r(66911),Z=r(21207);function P(e){return"geometry"in e.polygon?e.polygon.geometry.coordinates[0]:e.polygon}var A=r(40461),F=r(11965);function R(e,t,r,o,a,i,n){const s=e,l=s.fill_color_picker,c=s.stroke_color_picker;let u=[...t.data.features];if(null!=n&&n.forEach((e=>{u=u.filter((t=>e(t)))})),s.js_data_mutator){const e=(0,Z.Z)(s.js_data_mutator);u=e(u)}const d=s.metric?s.metric.label||s.metric:null,p=null===s.metric?()=>[l.r,l.g,l.b,255*l.a]:w(s,u,(e=>e[d])),g=e=>{const t=p(e);return a.length>0&&!a.includes(e[s.line_column])&&(t[3]/=2),t},h=s.line_column&&s.metric&&["json","geohash","zipcode"].includes(s.line_type)?function(e){return t=>{const r=e.metric.label||e.metric;return(0,F.tZ)("div",{className:"deckgl-tooltip"},t.object.name&&(0,F.tZ)(v.Z,{label:"name: ",value:`${t.object.name}`}),t.object[e.line_column]&&(0,F.tZ)(v.Z,{label:`${e.line_column}: `,value:`${t.object[e.line_column]}`}),e.metric&&(0,F.tZ)(v.Z,{label:`${r}: `,value:`${t.object[r]}`}))}}(s):void 0;return new f({id:`path-layer-${s.slice_id}`,data:u,pickable:!0,filled:s.filled,stroked:s.stroked,getPolygon:P,getFillColor:g,getLineColor:[c.r,c.g,c.b,255*c.a],getLineWidth:s.line_width,extruded:s.extruded,getElevation:e=>function(e,t){return 0===t(e)[3]?0:e.elevation}(e,g),elevationScale:s.multiplier,fp64:!0,...(0,k.N)(s,o,h,i)})}const D={formData:i().object.isRequired,payload:i().object.isRequired,setControlValue:i().func.isRequired,viewport:i().object.isRequired,onAddFilter:i().func,width:i().number.isRequired,height:i().number.isRequired},M={onAddFilter(){}};class T extends o.Component{constructor(e){super(e),this.containerRef=o.createRef(),this.setTooltip=e=>{const{current:t}=this.containerRef;t&&t.setTooltip(e)},this.state=T.getDerivedStateFromProps(e),this.getLayers=this.getLayers.bind(this),this.onSelect=this.onSelect.bind(this),this.onValuesChange=this.onValuesChange.bind(this)}static getDerivedStateFromProps(e,t){const{width:r,height:o,formData:a,payload:i}=e;if(t&&i.form_data===t.formData)return null;const n=i.data.features||[],s=n.map((e=>e.__timestamp)),l=i.form_data.time_grain_sqla||i.form_data.granularity||"P1D",{start:c,end:u,getStep:d,values:p,disabled:g}=(0,j.g)(s,l);let{viewport:h}=e;return a.autozoom&&(h=(0,A.Z)(h,{width:r,height:o,points:n.flatMap(P)})),{start:c,end:u,getStep:d,values:p,disabled:g,viewport:h,selected:[],lastClick:0,formData:i.form_data}}onSelect(e){const{formData:t,onAddFilter:r}=this.props,o=new Date,a=o-this.state.lastClick<=250,i=[...this.state.selected];if(a)i.splice(0,i.length,e);else if(t.toggle_polygons){const t=i.indexOf(e);-1===t?i.push(e):i.splice(t,1)}else i.splice(0,1,e);this.setState({selected:i,lastClick:o}),t.table_filter&&r(t.line_column,i,!1,!0)}onValuesChange(e){this.setState({values:Array.isArray(e)?e:[e,e+this.state.getStep(e)]})}getLayers(e){if(void 0===this.props.payload.data.features)return[];const t=[];return e[0]===e[1]||e[1]===this.end?t.push((t=>t.__timestamp>=e[0]&&t.__timestamp<=e[1])):t.push((t=>t.__timestamp>=e[0]&&t.__timestamp<e[1])),[R(this.props.formData,this.props.payload,this.props.onAddFilter,this.setTooltip,this.state.selected,this.onSelect,t)]}render(){const{payload:e,formData:t,setControlValue:r}=this.props,{start:o,end:a,getStep:i,values:n,disabled:s,viewport:l}=this.state,c=t,u=c.metric?c.metric.label||c.metric:null,d=function(e,t,r){const o=L(e,t,r),a=w(e,t,r),i={};return o.slice(1).forEach(((t,r)=>{const n=`${o[r]} - ${o[r+1]}`,s=.5*(parseFloat(o[r])+parseFloat(o[r+1])),l=e.metric?e.metric.label||e.metric:null;i[n]={color:a({[l||e.metric]:s}),enabled:!0}})),i}(t,e.data.features,(e=>e[u]));return(0,F.tZ)("div",{style:{position:"relative"}},(0,F.tZ)(m.Z,{ref:this.containerRef,aggregation:!0,getLayers:this.getLayers,start:o,end:a,getStep:i,values:n,disabled:s,viewport:l,width:this.props.width,height:this.props.height,mapboxApiAccessToken:e.data.mapboxApiKey,mapStyle:t.mapbox_style,setControlValue:r,onValuesChange:this.onValuesChange,onViewportChange:this.onViewportChange},null!==t.metric&&(0,F.tZ)(y.Z,{categories:d,position:t.legend_position,format:t.legend_format})))}}T.propTypes=D,T.defaultProps=M;const V=T},54448:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g,getLayer:()=>p});var o=r(28569),a=(r(67294),r(56652)),i=r(61988),n=r(52154),s=r(26331),l=r(1740);const c=1609.34;var u=r(11965);function d(e,t){return r=>{var o;const n=(null==t?void 0:t[e.point_radius_fixed.value])||(0,a.Z)(null==(o=e.point_radius_fixed)?void 0:o.value);return(0,u.tZ)("div",{className:"deckgl-tooltip"},(0,u.tZ)(l.Z,{label:`${(0,i.t)("Longitude and Latitude")}: `,value:`${r.object.position[0]}, ${r.object.position[1]}`}),r.object.cat_color&&(0,u.tZ)(l.Z,{label:`${(0,i.t)("Category")}: `,value:`${r.object.cat_color}`}),r.object.metric&&(0,u.tZ)(l.Z,{label:`${n}: `,value:`${r.object.metric}`}))}}function p(e,t,r,a,i){const s=e,l=t.data.features.map((e=>{let t=(r=s.point_unit,o=e.radius,("square_m"===r?Math.sqrt(o/Math.PI):"radius_m"===r?o:"radius_km"===r?1e3*o:"radius_miles"===r?o*c:"square_km"===r?1e3*Math.sqrt(o/Math.PI):"square_miles"===r?Math.sqrt(o/Math.PI)*c:null)||10);var r,o;if(s.multiplier&&(t*=s.multiplier),e.color)return{...e,radius:t};const a=s.color_picker||{r:0,g:0,b:0,a:1},i=[a.r,a.g,a.b,255*a.a];return{...e,radius:t,color:i}}));return new o.Z({id:`scatter-layer-${s.slice_id}`,data:l,fp64:!0,getFillColor:e=>e.color,getRadius:e=>e.radius,radiusMinPixels:s.min_radius||null,radiusMaxPixels:s.max_radius||null,stroked:!1,...(0,n.N)(s,a,d(s,null==i?void 0:i.verboseMap))})}const g=(0,s.B)(p,(function(e){return e.map((e=>e.position))}))}}]);
//# sourceMappingURL=ea33f16b56589e7fe331.chunk.js.map