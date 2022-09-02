"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4194],{44194:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J}),a(67294);var i=a(43323),s=a(51995),o=a(45697),n=a.n(o),r=a(23493),l=a.n(r),c=a(21804),h=a.n(c),m=a(15078),u=a.n(m),d=a(30381),p=a.n(d),y=a(28041),x=a.n(y),g=a(28062),b=a(67190),f=a(61988),k=a(45636),v=a(51115),A=a(40962),w=a(37731),L=a(60524),M=a(95963),C=a(83937),T=a(80221);const $=n().oneOfType([n().number,n().oneOf(["auto"])]),F=n().oneOfType([n().string,n().shape({label:n().string})]),_=n().shape({r:n().number.isRequired,g:n().number.isRequired,b:n().number.isRequired}),D=n().shape({x:n().number,y:n().number}),N=n().shape({x:n().string,y:n().number}),O=n().shape({outliers:n().arrayOf(n().number),Q1:n().number,Q2:n().number,Q3:n().number,whisker_high:n().number,whisker_low:n().number}),S=n().shape({markerLabels:n().arrayOf(n().string),markerLineLabels:n().arrayOf(n().string),markerLines:n().arrayOf(n().number),markers:n().arrayOf(n().number),measures:n().arrayOf(n().number),rangeLabels:n().arrayOf(n().string),ranges:n().arrayOf(n().number)}),E=n().shape({annotationType:n().oneOf(Object.keys(M.DT)),color:n().string,hideLine:n().bool,name:n().string,opacity:n().string,show:n().bool,showMarkers:n().bool,sourceType:n().string,style:n().string,value:n().oneOfType([n().number,n().string]),width:n().number}),B=[{text:"No data",dy:"-.75em",class:"header"},{text:"Adjust filters or check the Datasource.",dy:".75em",class:"body"}];x().utils.noData=function(e,t){const a=e.options().margin(),i=x().utils.availableHeight(null,t,a),s=x().utils.availableWidth(null,t,a),o=a.left+s/2,n=a.top+i/2;t.selectAll("g").remove();const r=t.selectAll(".nv-noData").data(B);r.enter().append("text").attr("class",(e=>`nvd3 nv-noData ${e.class}`)).attr("dy",(e=>e.dy)).style("text-anchor","middle"),r.attr("x",o).attr("y",n).text((e=>e.text))};const{getColor:z,getScale:R}=g,G=["line","dual_line","line_multi","area","compare","bar","time_pivot"],I={data:n().oneOfType([n().arrayOf(n().oneOfType([N,n().shape({key:n().string,values:n().arrayOf(N)}),n().shape({key:n().arrayOf(n().string),values:n().arrayOf(D)}),n().shape({classed:n().string,key:n().string,type:n().string,values:n().arrayOf(D),yAxis:n().number}),n().shape({label:n().string,values:n().arrayOf(O)}),n().shape({key:n().string,values:n().arrayOf(n().object)})])),S]),width:n().number,height:n().number,annotationData:n().object,annotationLayers:n().arrayOf(E),bottomMargin:$,colorScheme:n().string,comparisonType:n().string,contribution:n().bool,leftMargin:$,onError:n().func,showLegend:n().bool,showMarkers:n().bool,useRichTooltip:n().bool,vizType:n().oneOf(["area","bar","box_plot","bubble","bullet","compare","column","dist_bar","line","line_multi","time_pivot","pie","dual_line"]),xAxisFormat:n().string,numberFormat:n().string,xAxisLabel:n().string,xAxisShowMinMax:n().bool,xIsLogScale:n().bool,xTicksLayout:n().oneOf(["auto","staggered","45°"]),yAxisFormat:n().string,yAxisBounds:n().arrayOf(n().number),yAxisLabel:n().string,yAxisShowMinMax:n().bool,yIsLogScale:n().bool,orderBars:n().bool,isBarStacked:n().bool,showBarValue:n().bool,reduceXTicks:n().bool,showControls:n().bool,showBrush:n().oneOf([!0,"yes",!1,"no","auto"]),onBrushEnd:n().func,yAxis2Format:n().string,lineInterpolation:n().string,isDonut:n().bool,isPieLabelOutside:n().bool,pieLabelType:n().oneOf(["key","value","percent","key_value","key_percent","key_value_percent"]),showLabels:n().bool,areaStackedStyle:n().string,entity:n().string,maxBubbleSize:n().number,xField:F,yField:F,sizeField:F,baseColor:_},Z=()=>{},P=(0,b.JB)();function U(e,t){const{data:a,width:i,height:s,annotationData:o,annotationLayers:n=[],areaStackedStyle:r,baseColor:c,bottomMargin:m,colorScheme:d,comparisonType:y,contribution:g,entity:$,isBarStacked:F,isDonut:_,isPieLabelOutside:D,leftMargin:N,lineInterpolation:O="linear",markerLabels:S,markerLines:E,markerLineLabels:B,markers:I,maxBubbleSize:U,onBrushEnd:V=Z,onError:W=Z,orderBars:H,pieLabelType:q,rangeLabels:J,ranges:j,reduceXTicks:X=!1,showBarValue:Q,showBrush:Y,showControls:K,showLabels:ee,showLegend:te,showMarkers:ae,sizeField:ie,useRichTooltip:se,vizType:oe,xAxisFormat:ne,numberFormat:re,xAxisLabel:le,xAxisShowMinMax:ce=!1,xField:he,xIsLogScale:me,xTicksLayout:ue,yAxisFormat:de,yAxis2Format:pe,yAxisBounds:ye,yAxis2Bounds:xe,yAxisLabel:ge,yAxisShowMinMax:be=!1,yAxis2ShowMinMax:fe=!1,yField:ke,yIsLogScale:ve,sliceId:Ae}=t,we=null!==document.querySelector("#explorer-container"),Le=e;Le.innerHTML="";const Me=n.filter((e=>e.show));let Ce,Te=Le,$e=null;for(;Te.parentElement;){if(Te.parentElement.id.startsWith("chart-id-")){$e=Te.parentElement.id;break}Te=Te.parentElement}let Fe=i,_e="key";function De(e){return e.includes(oe)}Le.style.width=`${i}px`,Le.style.height=`${s}px`,$e?(0,T.o2)($e):(0,T.Vl)(!0),x().addGraph((function(){const t=u().select(e);t.classed("superset-legacy-chart-nvd3",!0),t.classed(`superset-legacy-chart-nvd3-${h()(oe)}`,!0);let n=t.select("svg");n.empty()&&(n=t.append("svg"));const Le="bullet"===oe?Math.min(s,50):s,Te=De(G),Ne="staggered"===ue,Oe="auto"===ue&&De(["column","dist_bar"])||"45°"===ue?45:0;if(45===Oe&&(0,C.Z)(Y))return W((0,f.t)("You cannot use 45° tick layout along with the time range filter")),null;const Se=(0,C.Z)(Y)||"auto"===Y&&s>=480&&"45°"!==ue,Ee=(0,b.JB)(re);switch(oe){case"line":Se?(Ce=x().models.lineWithFocusChart(),Ne&&(Ce.focus.margin({bottom:40}),Ce.focusHeight(80)),Ce.focus.xScale(u().time.scale.utc())):Ce=x().models.lineChart(),Ce.xScale(u().time.scale.utc()),Ce.interpolate(O),Ce.clipEdge(!1);break;case"time_pivot":Ce=x().models.lineChart(),Ce.xScale(u().time.scale.utc()),Ce.interpolate(O);break;case"dual_line":case"line_multi":Ce=x().models.multiChart(),Ce.interpolate(O),Ce.xScale(u().time.scale.utc());break;case"bar":Ce=x().models.multiBarChart().showControls(K).groupSpacing(.1),X||(Fe=(0,T.UG)(a,F,i)),Ce.width(Fe),Ce.xAxis.showMaxMin(!1),Ce.stacked(F);break;case"dist_bar":Ce=x().models.multiBarChart().showControls(K).reduceXTicks(X).groupSpacing(.1),Ce.xAxis.showMaxMin(!1),Ce.stacked(F),H&&a.forEach((e=>{const t=[...e.values];e.values=t.sort(((e,t)=>(0,T.Hy)(e.x)<(0,T.Hy)(t.x)?-1:1))})),X||(Fe=(0,T.UG)(a,F,i)),Ce.width(Fe);break;case"pie":if(Ce=x().models.pieChart(),_e="x",Ce.valueFormat(Ee),_&&Ce.donut(!0),Ce.showLabels(ee),Ce.labelsOutside(D),Ce.labelThreshold(.05),Ce.cornerRadius(!0),["key","value","percent"].includes(q))Ce.labelType(q);else if("key_value"===q)Ce.labelType((e=>`${e.data.x}: ${Ee(e.data.y)}`));else{const e=u().sum(a,(e=>e.y)),t=(0,b.JB)(k.Z.PERCENT_2_POINT);"key_percent"===q?(Ce.tooltip.valueFormatter((e=>t(e))),Ce.labelType((a=>`${a.data.x}: ${t(a.data.y/e)}`))):(Ce.tooltip.valueFormatter((a=>`${Ee(a)} (${t(a/e)})`)),Ce.labelType((a=>`${a.data.x}: ${Ee(a.data.y)} (${t(a.data.y/e)})`)))}Ce.margin({top:0});break;case"column":Ce=x().models.multiBarChart().reduceXTicks(!1);break;case"compare":Ce=x().models.cumulativeLineChart(),Ce.xScale(u().time.scale.utc()),Ce.useInteractiveGuideline(!0),Ce.xAxis.showMaxMin(!1);break;case"bubble":Ce=x().models.scatterChart(),Ce.showDistX(!1),Ce.showDistY(!1),Ce.tooltip.contentGenerator((e=>(0,T.zK)({point:e.point,entity:$,xField:he,yField:ke,sizeField:ie,xFormatter:(0,T.fF)(ne),yFormatter:(0,T.fF)(de),sizeFormatter:P}))),Ce.pointRange([5,U**2]),Ce.pointDomain([0,u().max(a,(e=>u().max(e.values,(e=>e.size))))]);break;case"area":Ce=x().models.stackedAreaChart(),Ce.showControls(K),Ce.style(r),Ce.xScale(u().time.scale.utc());break;case"box_plot":_e="label",Ce=x().models.boxPlotChart(),Ce.x((e=>e.label)),Ce.maxBoxWidth(75);break;case"bullet":Ce=x().models.bulletChart(),a.rangeLabels=J,a.ranges=j,a.markerLabels=S,a.markerLines=E,a.markerLineLabels=B,a.markers=I;break;default:throw new Error(`Unrecognized visualization for nvd3${oe}`)}let Be;Ce.margin({left:0,bottom:0}),Q&&((0,T.Ad)(n,a,F,de),Ce.dispatch.on("stateChange.drawBarValues",(()=>{(0,T.Ad)(n,a,F,de)}))),Se&&V!==Z&&Ce.focus&&Ce.focus.dispatch.on("brush",(e=>{const t=(0,T.z_)(e.extent);t&&e.brush.on("brushend",(()=>{V(t)}))})),Ce.xAxis&&Ce.xAxis.staggerLabels&&Ce.xAxis.staggerLabels(Ne),Ce.xAxis&&Ce.xAxis.rotateLabels&&Ce.xAxis.rotateLabels(Oe),Ce.x2Axis&&Ce.x2Axis.staggerLabels&&Ce.x2Axis.staggerLabels(Ne),Ce.x2Axis&&Ce.x2Axis.rotateLabels&&Ce.x2Axis.rotateLabels(Oe),"showLegend"in Ce&&void 0!==te&&(Fe<340&&"pie"!==oe?Ce.showLegend(!1):Ce.showLegend(te)),ve&&Ce.yScale(u().scale.log()),me&&Ce.xScale(u().scale.log()),Te?(Be=(0,v.bt)(ne),Ce.interactiveLayer.tooltip.headerFormatter(A.Z)):Be=(0,T.fF)(ne),Ce.x2Axis&&Ce.x2Axis.tickFormat&&Ce.x2Axis.tickFormat(Be),Ce.xAxis&&Ce.xAxis.tickFormat&&(De(["dist_bar","box_plot"])?Ce.xAxis.tickFormat((e=>e.length>40?`${e.slice(0,Math.max(0,40))}…`:e)):Ce.xAxis.tickFormat(Be));let ze=(0,T.fF)(de);if(Ce.yAxis&&Ce.yAxis.tickFormat&&(!g&&"percentage"!==y||de&&de!==k.Z.SMART_NUMBER&&de!==k.Z.SMART_NUMBER_SIGNED||(ze=(0,b.JB)(k.Z.PERCENT_1_POINT)),Ce.yAxis.tickFormat(ze)),Ce.y2Axis&&Ce.y2Axis.tickFormat&&Ce.y2Axis.tickFormat(ze),Ce.yAxis&&Ce.yAxis.ticks(5),Ce.y2Axis&&Ce.y2Axis.ticks(5),(0,T.Ml)(Ce.xAxis,ce),(0,T.Ml)(Ce.x2Axis,ce),(0,T.Ml)(Ce.yAxis,be),(0,T.Ml)(Ce.y2Axis,fe||be),"time_pivot"===oe){if(c){const{r:e,g:t,b:a}=c;Ce.color((i=>{const s=i.rank>0?.5*i.perc:1;return`rgba(${e}, ${t}, ${a}, ${s})`}))}Ce.useInteractiveGuideline(!0),Ce.interactiveLayer.tooltip.contentGenerator((e=>(0,T.RO)(e,Be,ze)))}else if("bullet"!==oe){const e=R(d);Ce.color((t=>t.color||e((0,T.gO)(t[_e]),Ae)))}if(De(["line","area","bar","dist_bar"])&&se&&(Ce.useInteractiveGuideline(!0),"line"===oe||"bar"===oe?Ce.interactiveLayer.tooltip.contentGenerator((e=>(0,T.Gx)(e,A.Z,ze))):"dist_bar"===oe?Ce.interactiveLayer.tooltip.contentGenerator((e=>(0,T.yy)(e,ze))):Ce.interactiveLayer.tooltip.contentGenerator((e=>(0,T.n4)(e,A.Z,ze,Ce)))),De(["compare"])&&Ce.interactiveLayer.tooltip.contentGenerator((e=>(0,T.yy)(e,ze))),De(["dual_line","line_multi"])){const e=(0,b.JB)(de),t=(0,b.JB)(pe);Ce.yAxis1.tickFormat(e),Ce.yAxis2.tickFormat(t);const i=a.map((a=>1===a.yAxis?e:t));Ce.useInteractiveGuideline(!0),Ce.interactiveLayer.tooltip.contentGenerator((e=>(0,T.HO)(e,Be,i)))}Ce.width(Fe),Ce.height(Le),n.datum(a).transition().duration(500).attr("height",Le).attr("width",Fe).call(Ce),ve&&Ce.yAxis.tickFormat((e=>0!==e&&Math.log10(e)%1==0?ze(e):"")),Oe>0&&n.select(".nv-x.nv-axis > g").selectAll("g").selectAll("text").attr("dx",-6.5);const Re=()=>{if(Ce.yDomain&&Array.isArray(ye)&&2===ye.length){const[e,t]=ye,i=(0,w.Z)(e)&&!Number.isNaN(e),s=(0,w.Z)(t)&&!Number.isNaN(t);if((i||s)&&"area"===oe&&"expand"===Ce.style())Ce.yDomain([0,1]);else if((i||s)&&"area"===oe&&"stream"===Ce.style())Ce.yDomain((0,T.po)(a));else if(i&&s)Ce.yDomain([e,t]),Ce.clipEdge(!0);else if(i||s){let[o,n]=[0,1];"area"===oe||De(["bar","dist_bar"])&&Ce.stacked()?[o,n]=(0,T.po)(a):[o,n]=(0,T.tH)(a);const r=i?e:o,l=s?t:n;Ce.yDomain([r,l]),Ce.clipEdge(!0)}}};if(Re(),Ce.dispatch&&Ce.dispatch.stateChange&&Ce.dispatch.on("stateChange.applyYAxisBounds",Re),De(["dual_line","line_multi"])){const e=Ce.yAxis1.ticks(),t=Ce.yAxis1.scale().domain(Ce.yAxis1.domain()).nice(e).ticks(e),a=Ce.yAxis2.scale().domain(Ce.yAxis2.domain()).nice(e).ticks(e),i=t.length-a.length;if(t.length>0&&a.length>0&&0!==i){const e=i<0?t:a,s=e[1]-e[0];for(let t=0;t<Math.abs(i);t+=1)t%2==0?e.unshift(e[0]-s):e.push(e[e.length-1]+s);Ce.yDomain1([t[0],t[t.length-1]]),Ce.yDomain2([a[0],a[a.length-1]]),Ce.yAxis1.tickValues(t),Ce.yAxis2.tickValues(a)}Ce.yDomain1([ye[0]||t[0],ye[1]||t[t.length-1]]),Ce.yDomain2([xe[0]||a[0],xe[1]||a[a.length-1]])}if(ae&&(n.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1),Ce.dispatch.on("stateChange.showMarkers",(()=>{setTimeout((()=>{n.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1)}),10)}))),void 0!==Ce.yAxis||void 0!==Ce.yAxis2){const t=Math.ceil(Math.min(i*(we?.01:.03),30)),s=Ce.margin();Ce.xAxis&&(s.bottom=28);const r=(0,T.GF)(n,Ce.yAxis2?"nv-y1":"nv-y"),c=(0,T.GF)(n,"nv-x");if(s.left=r+t,ge&&""!==ge&&(s.left+=25),Q&&(s.top+=24),ce&&(s.right=Math.max(20,c/2)+t),45===Oe?(s.bottom=c*Math.sin(Math.PI*Oe/180)+t+30,s.right=c*Math.cos(Math.PI*Oe/180)+t):Ne&&(s.bottom=40),De(["dual_line","line_multi"])){const e=(0,T.GF)(n,"nv-y2");s.right=e+t}if(m&&"auto"!==m&&(s.bottom=parseInt(m,10)),N&&"auto"!==N&&(s.left=N),le&&""!==le&&Ce.xAxis){s.bottom+=25;let e=0;s.bottom&&!Number.isNaN(s.bottom)&&(e=s.bottom-45),Ce.xAxis.axisLabel(le).axisLabelDistance(e)}if(ge&&""!==ge&&Ce.yAxis){let e=0;s.left&&!Number.isNaN(s.left)&&(e=s.left-70),Ce.yAxis.axisLabel(ge).axisLabelDistance(e)}if(Te&&o&&Me.length>0){const e=Me.filter((e=>e.annotationType===M.ZP.TIME_SERIES)).reduce(((e,t)=>e.concat((o[t.name]||[]).map((e=>{if(!e)return{};const a=Array.isArray(e.key)?`${t.name}, ${e.key.join(", ")}`:`${t.name}, ${e.key}`;return{...e,key:a,color:t.color,strokeWidth:t.width,classed:`${t.opacity} ${t.style} nv-timeseries-annotation-layer showMarkers${t.showMarkers} hideLine${t.hideLine}`}})))),[]);a.push(...e)}if($e&&(Ce&&Ce.interactiveLayer&&Ce.interactiveLayer.tooltip&&Ce.interactiveLayer.tooltip.classes([(0,T.T7)($e)]),Ce&&Ce.tooltip&&Ce.tooltip.classes([(0,T.T7)($e)])),Ce.margin(s),n.datum(a).transition().duration(500).attr("width",Fe).attr("height",Le).call(Ce),window.addEventListener("scroll",l()((()=>(0,T.Vl)(!1)),250)),Te&&Me.length>0){const t=Me.filter((e=>e.annotationType===M.ZP.FORMULA));let i,s,r;if("bar"===oe?(s=u().min(a[0].values,(e=>e.x)),i=u().max(a[0].values,(e=>e.x)),r=u().scale.quantile().domain([s,i]).range(Ce.xAxis.range())):(s=Ce.xAxis.scale().domain()[0].valueOf(),i=Ce.xAxis.scale().domain()[1].valueOf(),r=Ce.xScale?Ce.xScale():Ce.xAxis.scale?Ce.xAxis.scale():u().scale.linear()),r&&r.clamp&&r.clamp(!0),t.length>0){const e=[];if("bar"===oe){const t=a.reduce(((e,t)=>(t.values.forEach((t=>e.add(t.x))),e)),new Set);e.push(...t.values()),e.sort()}else{let t=Math.min(...a.map((e=>Math.min(...e.values.slice(1).map(((t,a)=>t.x-e.values[a].x))))));const o=(i-s)/(t||1);t=o<100?(i-s)/100:t,t=o>500?(i-s)/500:t,e.push(s);for(let a=s;a<i;a+=t)e.push(a);e.push(i)}const o=t.map((t=>{const{value:a}=t;return{key:t.name,values:e.map((e=>({x:e,y:(0,L.f)(a,e)}))),color:t.color,strokeWidth:t.width,classed:`${t.opacity} ${t.style}`}}));a.push(...o)}const l=Ce.xAxis1?Ce.xAxis1:Ce.xAxis,c=Ce.yAxis1?Ce.yAxis1:Ce.yAxis,h=l.scale().range()[1],m=c.scale().range()[0];o&&(Me.filter((e=>e.annotationType===M.ZP.EVENT&&o&&o[e.name])).forEach(((t,a)=>{const i=(0,M.yb)(t),s=u().select(e).select(".nv-wrap").append("g").attr("class",`nv-event-annotation-layer-${a}`),n=i.color||z((0,T.gO)(i.name),d),l=(0,T.Gr)({...i,annotationTipClass:`arrow-down nv-event-annotation-layer-${t.sourceType}`}),c=(o[i.name].records||[]).map((e=>{const t=new Date(p().utc(e[i.timeColumn]));return{...e,[i.timeColumn]:t}})).filter((e=>!Number.isNaN(e[i.timeColumn].getMilliseconds())));c.length>0&&s.selectAll("line").data(c).enter().append("line").attr({x1:e=>r(new Date(e[i.timeColumn])),y1:0,x2:e=>r(new Date(e[i.timeColumn])),y2:m}).attr("class",`${i.opacity} ${i.style}`).style("stroke",n).style("stroke-width",i.width).on("mouseover",l.show).on("mouseout",l.hide).call(l),Ce.focus&&Ce.focus.dispatch.on("onBrush.event-annotation",(()=>{s.selectAll("line").data(c).attr({x1:e=>r(new Date(e[i.timeColumn])),y1:0,x2:e=>r(new Date(e[i.timeColumn])),y2:m,opacity:e=>{const t=r(new Date(e[i.timeColumn]));return t>0&&t<h?1:0}})}))})),Me.filter((e=>e.annotationType===M.ZP.INTERVAL&&o&&o[e.name])).forEach(((t,a)=>{const i=(0,M.yb)(t),s=u().select(e).select(".nv-wrap").append("g").attr("class",`nv-interval-annotation-layer-${a}`),n=i.color||z((0,T.gO)(i.name),d),l=(0,T.Gr)(i),c=(o[i.name].records||[]).map((e=>{const t=new Date(p().utc(e[i.timeColumn])),a=new Date(p().utc(e[i.intervalEndColumn]));return{...e,[i.timeColumn]:t,[i.intervalEndColumn]:a}})).filter((e=>!Number.isNaN(e[i.timeColumn].getMilliseconds())&&!Number.isNaN(e[i.intervalEndColumn].getMilliseconds())));c.length>0&&s.selectAll("rect").data(c).enter().append("rect").attr({x:e=>Math.min(r(new Date(e[i.timeColumn])),r(new Date(e[i.intervalEndColumn]))),y:0,width:e=>Math.max(Math.abs(r(new Date(e[i.intervalEndColumn]))-r(new Date(e[i.timeColumn]))),1),height:m}).attr("class",`${i.opacity} ${i.style}`).style("stroke-width",i.width).style("stroke",n).style("fill",n).style("fill-opacity",.2).on("mouseover",l.show).on("mouseout",l.hide).call(l),Ce.focus&&Ce.focus.dispatch.on("onBrush.interval-annotation",(()=>{s.selectAll("rect").data(c).attr({x:e=>r(new Date(e[i.timeColumn])),width:e=>{const t=r(new Date(e[i.timeColumn]));return r(new Date(e[i.intervalEndColumn]))-t}})}))}))),n.datum(a).attr("height",Le).attr("width",Fe).call(Ce),Ce.dispatch.on("renderEnd.timeseries-annotation",(()=>{u().selectAll(".slice_container .nv-timeseries-annotation-layer.showMarkerstrue .nv-point").style("stroke-opacity",1).style("fill-opacity",1),u().selectAll(".slice_container .nv-timeseries-annotation-layer.hideLinetrue").style("stroke-width",0)}))}}return(0,T.Aw)(Ce),Ce}))}U.displayName="NVD3",U.propTypes=I;const V=U;var W=a(11965);const H=(0,i.Z)(V,{componentWillUnmount:function(){const{id:e}=this.props;null!=e?(0,T.o2)(e):(0,T.Vl)(!0)}}),q=({className:e,...t})=>(0,W.tZ)("div",{className:e},(0,W.tZ)(H,t));q.propTypes={className:n().string.isRequired};const J=(0,s.iK)(q)`
  .superset-legacy-chart-nvd3-dist-bar,
  .superset-legacy-chart-nvd3-bar {
    overflow-x: auto !important;
    svg {
      &.nvd3-svg {
        width: auto;
        font-size: ${({theme:e})=>e.typography.sizes.m};
      }
    }
  }
  .superset-legacy-chart-nvd3 {
    nv-x text {
      font-size: ${({theme:e})=>e.typography.sizes.m};
    }
    g.superset path {
      stroke-dasharray: 5, 5;
    }
    .nvtooltip tr.highlight td {
      font-weight: ${({theme:e})=>e.typography.weights.bold};
      font-size: ${({theme:e})=>e.typography.sizes.m}px !important;
    }
    text.nv-axislabel {
      font-size: ${({theme:e})=>e.typography.sizes.m} !important;
    }
    g.solid path,
    line.solid {
      stroke-dasharray: unset;
    }
    g.dashed path,
    line.dashed {
      stroke-dasharray: 5, 5;
    }
    g.longDashed path,
    line.dotted {
      stroke-dasharray: 1, 1;
    }

    g.opacityLow path,
    line.opacityLow {
      stroke-opacity: 0.2;
    }

    g.opacityMedium path,
    line.opacityMedium {
      stroke-opacity: 0.5;
    }
    g.opacityHigh path,
    line.opacityHigh {
      stroke-opacity: 0.8;
    }
    g.time-shift-0 path,
    line.time-shift-0 {
      stroke-dasharray: 5, 5;
    }
    g.time-shift-1 path,
    line.time-shift-1 {
      stroke-dasharray: 1, 5;
    }
    g.time-shift-2 path,
    line.time-shift-3 {
      stroke-dasharray: 5, 1;
    }
    g.time-shift-3 path,
    line.time-shift-3 {
      stroke-dasharray: 5, 1;
    }
    g.time-shift-4 path,
    line.time-shift-4 {
      stroke-dasharray: 5, 10;
    }
    g.time-shift-5 path,
    line.time-shift-5 {
      stroke-dasharray: 0.9;
    }
    g.time-shift-6 path,
    line.time-shift-6 {
      stroke-dasharray: 15, 10, 5;
    }
    g.time-shift-7 path,
    line.time-shift-7 {
      stroke-dasharray: 15, 10, 5, 10;
    }
    g.time-shift-8 path,
    line.time-shift-8 {
      stroke-dasharray: 15, 10, 5, 10, 15;
    }
    g.time-shift-9 path,
    line.time-shift-9 {
      stroke-dasharray: 5, 5, 1, 5;
    }
    .nv-noData.body {
      font-size: ${({theme:e})=>e.typography.sizes.m};
      font-weight: ${({theme:e})=>e.typography.weights.normal};
    }
  }
  .superset-legacy-chart-nvd3-tr-highlight {
    border-top: 1px solid;
    border-bottom: 1px solid;
    font-weight: ${({theme:e})=>e.typography.weights.bold};
  }
  .superset-legacy-chart-nvd3-tr-total {
    font-weight: ${({theme:e})=>e.typography.weights.bold};
  }
  .nvtooltip {
    .tooltip-header {
      white-space: nowrap;
      font-weight: ${({theme:e})=>e.typography.weights.bold};
    }
    tbody tr:not(.tooltip-header) td:nth-child(2) {
      word-break: break-word;
    }
  }
  .d3-tip.nv-event-annotation-layer-table,
  .d3-tip.nv-event-annotation-layer-NATIVE {
    width: 200px;
    border-radius: 2px;
    background-color: ${({theme:e})=>e.colors.grayscale.base};
    fill-opacity: 0.6;
    margin: ${({theme:e})=>2*e.gridUnit}px;
    padding: ${({theme:e})=>2*e.gridUnit}px;
    color: ${({theme:e})=>e.colors.grayscale.light5};
    &:after {
      content: '\\25BC';
      font-size: ${({theme:e})=>e.typography.sizes.m};
      color: ${({theme:e})=>e.colors.grayscale.base};
      position: absolute;
      bottom: -14px;
      left: 94px;
    }
  }
`},43323:(e,t,a)=>{a.d(t,{Z:()=>o});var i=a(67294),s=a(11965);function o(e,t){class a extends i.Component{constructor(e){super(e),this.container=void 0,this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,null!=t&&t.componentWillUnmount&&t.componentWillUnmount.bind(this)()}setContainerRef(e){this.container=e}execute(){this.container&&e(this.container,this.props)}render(){const{id:e,className:t}=this.props;return(0,s.tZ)("div",{ref:this.setContainerRef,id:e,className:t})}}const o=a;return e.displayName&&(o.displayName=e.displayName),e.propTypes&&(o.propTypes={...o.propTypes,...e.propTypes}),e.defaultProps&&(o.defaultProps=e.defaultProps),a}},37731:(e,t,a)=>{function i(e){return null!=e}a.d(t,{Z:()=>i})}}]);
//# sourceMappingURL=89e3dd82524d881e7dd7.chunk.js.map