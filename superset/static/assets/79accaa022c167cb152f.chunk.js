"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4194],{44194:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j}),a(67294);var s=a(43323),i=a(51995),r=a(45697),o=a.n(r),n=a(23493),l=a.n(n),c=a(21804),h=a.n(c),m=a(15078),u=a.n(m),p=a(30381),d=a.n(p),y=a(28041),x=a.n(y),b=a(28062),g=a(67190),f=a(61988),v=a(45636),k=a(51115),w=a(40962),A=a(37731),L=a(60524),M=a(95963),C=a(87124),T=a(80221);const $=o().oneOfType([o().number,o().oneOf(["auto"])]),N=o().oneOfType([o().string,o().shape({label:o().string})]),F=o().shape({r:o().number.isRequired,g:o().number.isRequired,b:o().number.isRequired}),O=o().shape({x:o().number,y:o().number}),D=o().shape({x:o().string,y:o().number}),E=o().shape({outliers:o().arrayOf(o().number),Q1:o().number,Q2:o().number,Q3:o().number,whisker_high:o().number,whisker_low:o().number}),S=o().shape({markerLabels:o().arrayOf(o().string),markerLineLabels:o().arrayOf(o().string),markerLines:o().arrayOf(o().number),markers:o().arrayOf(o().number),measures:o().arrayOf(o().number),rangeLabels:o().arrayOf(o().string),ranges:o().arrayOf(o().number)}),_=o().shape({annotationType:o().oneOf(Object.keys(M.DT)),color:o().string,hideLine:o().bool,name:o().string,opacity:o().string,show:o().bool,showMarkers:o().bool,sourceType:o().string,style:o().string,value:o().oneOfType([o().number,o().string]),width:o().number}),B=[{text:"No data",dy:"-.75em",class:"header"},{text:"Adjust filters or check the Datasource.",dy:".75em",class:"body"}];x().utils.noData=function(e,t){const a=e.options().margin(),s=x().utils.availableHeight(null,t,a),i=x().utils.availableWidth(null,t,a),r=a.left+i/2,o=a.top+s/2;t.selectAll("g").remove();const n=t.selectAll(".nv-noData").data(B);n.enter().append("text").attr("class",(e=>`nvd3 nv-noData ${e.class}`)).attr("dy",(e=>e.dy)).style("text-anchor","middle"),n.attr("x",r).attr("y",o).text((e=>e.text))};const{getColor:z,getScale:R}=b,I=["line","area","compare","bar","time_pivot"],G={data:o().oneOfType([o().arrayOf(o().oneOfType([D,o().shape({key:o().string,values:o().arrayOf(D)}),o().shape({key:o().arrayOf(o().string),values:o().arrayOf(O)}),o().shape({classed:o().string,key:o().string,type:o().string,values:o().arrayOf(O),yAxis:o().number}),o().shape({label:o().string,values:o().arrayOf(E)}),o().shape({key:o().string,values:o().arrayOf(o().object)})])),S]),width:o().number,height:o().number,annotationData:o().object,annotationLayers:o().arrayOf(_),bottomMargin:$,colorScheme:o().string,comparisonType:o().string,contribution:o().bool,leftMargin:$,onError:o().func,showLegend:o().bool,showMarkers:o().bool,useRichTooltip:o().bool,vizType:o().oneOf(["area","bar","box_plot","bubble","bullet","compare","column","dist_bar","line","time_pivot","pie"]),xAxisFormat:o().string,numberFormat:o().string,xAxisLabel:o().string,xAxisShowMinMax:o().bool,xIsLogScale:o().bool,xTicksLayout:o().oneOf(["auto","staggered","45°"]),yAxisFormat:o().string,yAxisBounds:o().arrayOf(o().number),yAxisLabel:o().string,yAxisShowMinMax:o().bool,yIsLogScale:o().bool,orderBars:o().bool,isBarStacked:o().bool,showBarValue:o().bool,reduceXTicks:o().bool,showControls:o().bool,showBrush:o().oneOf([!0,"yes",!1,"no","auto"]),onBrushEnd:o().func,yAxis2Format:o().string,lineInterpolation:o().string,isDonut:o().bool,isPieLabelOutside:o().bool,pieLabelType:o().oneOf(["key","value","percent","key_value","key_percent","key_value_percent"]),showLabels:o().bool,areaStackedStyle:o().string,entity:o().string,maxBubbleSize:o().number,xField:N,yField:N,sizeField:N,baseColor:F},P=()=>{},Z=(0,g.JB)();function U(e,t){const{data:a,width:s,height:i,annotationData:r,annotationLayers:o=[],areaStackedStyle:n,baseColor:c,bottomMargin:m,colorScheme:p,comparisonType:y,contribution:b,entity:$,isBarStacked:N,isDonut:F,isPieLabelOutside:O,leftMargin:D,lineInterpolation:E="linear",markerLabels:S,markerLines:_,markerLineLabels:B,markers:G,maxBubbleSize:U,onBrushEnd:V=P,onError:W=P,orderBars:H,pieLabelType:q,rangeLabels:j,ranges:X,reduceXTicks:J=!1,showBarValue:Q,showBrush:Y,showControls:K,showLabels:ee,showLegend:te,showMarkers:ae,sizeField:se,useRichTooltip:ie,vizType:re,xAxisFormat:oe,numberFormat:ne,xAxisLabel:le,xAxisShowMinMax:ce=!1,xField:he,xIsLogScale:me,xTicksLayout:ue,yAxisFormat:pe,yAxisBounds:de,yAxisLabel:ye,yAxisShowMinMax:xe=!1,yAxis2ShowMinMax:be=!1,yField:ge,yIsLogScale:fe,sliceId:ve}=t,ke=null!==document.querySelector("#explorer-container"),we=e;we.innerHTML="";const Ae=o.filter((e=>e.show));let Le,Me=we,Ce=null;for(;Me.parentElement;){if(Me.parentElement.id.startsWith("chart-id-")){Ce=Me.parentElement.id;break}Me=Me.parentElement}let Te=s,$e="key";function Ne(e){return e.includes(re)}we.style.width=`${s}px`,we.style.height=`${i}px`,Ce?(0,T.o2)(Ce):(0,T.Vl)(!0),x().addGraph((function(){const t=u().select(e);t.classed("superset-legacy-chart-nvd3",!0),t.classed(`superset-legacy-chart-nvd3-${h()(re)}`,!0);let o=t.select("svg");o.empty()&&(o=t.append("svg"));const we="bullet"===re?Math.min(i,50):i,Me=Ne(I),Fe="staggered"===ue,Oe="auto"===ue&&Ne(["column","dist_bar"])||"45°"===ue?45:0;if(45===Oe&&(0,C.Z)(Y))return W((0,f.t)("You cannot use 45° tick layout along with the time range filter")),null;const De=(0,C.Z)(Y)||"auto"===Y&&i>=480&&"45°"!==ue,Ee=(0,g.JB)(ne);switch(re){case"line":De?(Le=x().models.lineWithFocusChart(),Fe&&(Le.focus.margin({bottom:40}),Le.focusHeight(80)),Le.focus.xScale(u().time.scale.utc())):Le=x().models.lineChart(),Le.xScale(u().time.scale.utc()),Le.interpolate(E),Le.clipEdge(!1);break;case"time_pivot":Le=x().models.lineChart(),Le.xScale(u().time.scale.utc()),Le.interpolate(E);break;case"bar":Le=x().models.multiBarChart().showControls(K).groupSpacing(.1),J||(Te=(0,T.UG)(a,N,s)),Le.width(Te),Le.xAxis.showMaxMin(!1),Le.stacked(N);break;case"dist_bar":Le=x().models.multiBarChart().showControls(K).reduceXTicks(J).groupSpacing(.1),Le.xAxis.showMaxMin(!1),Le.stacked(N),H&&a.forEach((e=>{const t=[...e.values];e.values=t.sort(((e,t)=>(0,T.Hy)(e.x)<(0,T.Hy)(t.x)?-1:1))})),J||(Te=(0,T.UG)(a,N,s)),Le.width(Te);break;case"pie":if(Le=x().models.pieChart(),$e="x",Le.valueFormat(Ee),F&&Le.donut(!0),Le.showLabels(ee),Le.labelsOutside(O),Le.labelThreshold(.05),Le.cornerRadius(!0),["key","value","percent"].includes(q))Le.labelType(q);else if("key_value"===q)Le.labelType((e=>`${e.data.x}: ${Ee(e.data.y)}`));else{const e=u().sum(a,(e=>e.y)),t=(0,g.JB)(v.default.PERCENT_2_POINT);"key_percent"===q?(Le.tooltip.valueFormatter((e=>t(e))),Le.labelType((a=>`${a.data.x}: ${t(a.data.y/e)}`))):(Le.tooltip.valueFormatter((a=>`${Ee(a)} (${t(a/e)})`)),Le.labelType((a=>`${a.data.x}: ${Ee(a.data.y)} (${t(a.data.y/e)})`)))}Le.margin({top:0});break;case"column":Le=x().models.multiBarChart().reduceXTicks(!1);break;case"compare":Le=x().models.cumulativeLineChart(),Le.xScale(u().time.scale.utc()),Le.useInteractiveGuideline(!0),Le.xAxis.showMaxMin(!1);break;case"bubble":Le=x().models.scatterChart(),Le.showDistX(!1),Le.showDistY(!1),Le.tooltip.contentGenerator((e=>(0,T.zK)({point:e.point,entity:$,xField:he,yField:ge,sizeField:se,xFormatter:(0,T.fF)(oe),yFormatter:(0,T.fF)(pe),sizeFormatter:Z}))),Le.pointRange([5,U**2]),Le.pointDomain([0,u().max(a,(e=>u().max(e.values,(e=>e.size))))]);break;case"area":Le=x().models.stackedAreaChart(),Le.showControls(K),Le.style(n),Le.xScale(u().time.scale.utc());break;case"box_plot":$e="label",Le=x().models.boxPlotChart(),Le.x((e=>e.label)),Le.maxBoxWidth(75);break;case"bullet":Le=x().models.bulletChart(),a.rangeLabels=j,a.ranges=X,a.markerLabels=S,a.markerLines=_,a.markerLineLabels=B,a.markers=G;break;default:throw new Error(`Unrecognized visualization for nvd3${re}`)}let Se;Le.margin({left:0,bottom:0}),Q&&((0,T.Ad)(o,a,N,pe),Le.dispatch.on("stateChange.drawBarValues",(()=>{(0,T.Ad)(o,a,N,pe)}))),De&&V!==P&&Le.focus&&Le.focus.dispatch.on("brush",(e=>{const t=(0,T.z_)(e.extent);t&&e.brush.on("brushend",(()=>{V(t)}))})),Le.xAxis&&Le.xAxis.staggerLabels&&Le.xAxis.staggerLabels(Fe),Le.xAxis&&Le.xAxis.rotateLabels&&Le.xAxis.rotateLabels(Oe),Le.x2Axis&&Le.x2Axis.staggerLabels&&Le.x2Axis.staggerLabels(Fe),Le.x2Axis&&Le.x2Axis.rotateLabels&&Le.x2Axis.rotateLabels(Oe),"showLegend"in Le&&void 0!==te&&(Te<340&&"pie"!==re?Le.showLegend(!1):Le.showLegend(te)),fe&&Le.yScale(u().scale.log()),me&&Le.xScale(u().scale.log()),Me?(Se=(0,k.bt)(oe),Le.interactiveLayer.tooltip.headerFormatter(w.Z)):Se=(0,T.fF)(oe),Le.x2Axis&&Le.x2Axis.tickFormat&&Le.x2Axis.tickFormat(Se),Le.xAxis&&Le.xAxis.tickFormat&&(Ne(["dist_bar","box_plot"])?Le.xAxis.tickFormat((e=>e.length>40?`${e.slice(0,Math.max(0,40))}…`:e)):Le.xAxis.tickFormat(Se));let _e=(0,T.fF)(pe);if(Le.yAxis&&Le.yAxis.tickFormat&&(!b&&"percentage"!==y||pe&&pe!==v.default.SMART_NUMBER&&pe!==v.default.SMART_NUMBER_SIGNED||(_e=(0,g.JB)(v.default.PERCENT_1_POINT)),Le.yAxis.tickFormat(_e)),Le.y2Axis&&Le.y2Axis.tickFormat&&Le.y2Axis.tickFormat(_e),Le.yAxis&&Le.yAxis.ticks(5),Le.y2Axis&&Le.y2Axis.ticks(5),(0,T.Ml)(Le.xAxis,ce),(0,T.Ml)(Le.x2Axis,ce),(0,T.Ml)(Le.yAxis,xe),(0,T.Ml)(Le.y2Axis,be||xe),"time_pivot"===re){if(c){const{r:e,g:t,b:a}=c;Le.color((s=>{const i=s.rank>0?.5*s.perc:1;return`rgba(${e}, ${t}, ${a}, ${i})`}))}Le.useInteractiveGuideline(!0),Le.interactiveLayer.tooltip.contentGenerator((e=>(0,T.RO)(e,Se,_e)))}else if("bullet"!==re){const e=R(p);Le.color((t=>t.color||e((0,T.gO)(t[$e]),ve)))}Ne(["line","area","bar","dist_bar"])&&ie&&(Le.useInteractiveGuideline(!0),"line"===re||"bar"===re?Le.interactiveLayer.tooltip.contentGenerator((e=>(0,T.Gx)(e,w.Z,_e))):"dist_bar"===re?Le.interactiveLayer.tooltip.contentGenerator((e=>(0,T.yy)(e,_e))):Le.interactiveLayer.tooltip.contentGenerator((e=>(0,T.n4)(e,w.Z,_e,Le)))),Ne(["compare"])&&Le.interactiveLayer.tooltip.contentGenerator((e=>(0,T.yy)(e,_e))),Le.width(Te),Le.height(we),o.datum(a).transition().duration(500).attr("height",we).attr("width",Te).call(Le),fe&&Le.yAxis.tickFormat((e=>0!==e&&Math.log10(e)%1==0?_e(e):"")),Oe>0&&o.select(".nv-x.nv-axis > g").selectAll("g").selectAll("text").attr("dx",-6.5);const Be=()=>{if(Le.yDomain&&Array.isArray(de)&&2===de.length){const[e,t]=de,s=(0,A.Z)(e)&&!Number.isNaN(e),i=(0,A.Z)(t)&&!Number.isNaN(t);if((s||i)&&"area"===re&&"expand"===Le.style())Le.yDomain([0,1]);else if((s||i)&&"area"===re&&"stream"===Le.style())Le.yDomain((0,T.po)(a));else if(s&&i)Le.yDomain([e,t]),Le.clipEdge(!0);else if(s||i){let[r,o]=[0,1];"area"===re||Ne(["bar","dist_bar"])&&Le.stacked()?[r,o]=(0,T.po)(a):[r,o]=(0,T.tH)(a);const n=s?e:r,l=i?t:o;Le.yDomain([n,l]),Le.clipEdge(!0)}}};if(Be(),Le.dispatch&&Le.dispatch.stateChange&&Le.dispatch.on("stateChange.applyYAxisBounds",Be),ae&&(o.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1),Le.dispatch.on("stateChange.showMarkers",(()=>{setTimeout((()=>{o.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1)}),10)}))),void 0!==Le.yAxis||void 0!==Le.yAxis2){const t=Math.ceil(Math.min(s*(ke?.01:.03),30)),i=Le.margin();Le.xAxis&&(i.bottom=28);const n=(0,T.GF)(o,Le.yAxis2?"nv-y1":"nv-y"),c=(0,T.GF)(o,"nv-x");if(i.left=n+t,ye&&""!==ye&&(i.left+=25),Q&&(i.top+=24),ce&&(i.right=Math.max(20,c/2)+t),45===Oe?(i.bottom=c*Math.sin(Math.PI*Oe/180)+t+30,i.right=c*Math.cos(Math.PI*Oe/180)+t):Fe&&(i.bottom=40),m&&"auto"!==m&&(i.bottom=parseInt(m,10)),D&&"auto"!==D&&(i.left=D),le&&""!==le&&Le.xAxis){i.bottom+=25;let e=0;i.bottom&&!Number.isNaN(i.bottom)&&(e=i.bottom-45),Le.xAxis.axisLabel(le).axisLabelDistance(e)}if(ye&&""!==ye&&Le.yAxis){let e=0;i.left&&!Number.isNaN(i.left)&&(e=i.left-70),Le.yAxis.axisLabel(ye).axisLabelDistance(e)}if(Me&&r&&Ae.length>0){const e=Ae.filter((e=>e.annotationType===M.ZP.TIME_SERIES)).reduce(((e,t)=>e.concat((r[t.name]||[]).map((e=>{if(!e)return{};const a=Array.isArray(e.key)?`${t.name}, ${e.key.join(", ")}`:`${t.name}, ${e.key}`;return{...e,key:a,color:t.color,strokeWidth:t.width,classed:`${t.opacity} ${t.style} nv-timeseries-annotation-layer showMarkers${t.showMarkers} hideLine${t.hideLine}`}})))),[]);a.push(...e)}if(Ce&&(Le&&Le.interactiveLayer&&Le.interactiveLayer.tooltip&&Le.interactiveLayer.tooltip.classes([(0,T.T7)(Ce)]),Le&&Le.tooltip&&Le.tooltip.classes([(0,T.T7)(Ce)])),Le.margin(i),o.datum(a).transition().duration(500).attr("width",Te).attr("height",we).call(Le),window.addEventListener("scroll",l()((()=>(0,T.Vl)(!1)),250)),Me&&Ae.length>0){const t=Ae.filter((e=>e.annotationType===M.ZP.FORMULA));let s,i,n;if("bar"===re?(i=u().min(a[0].values,(e=>e.x)),s=u().max(a[0].values,(e=>e.x)),n=u().scale.quantile().domain([i,s]).range(Le.xAxis.range())):(i=Le.xAxis.scale().domain()[0].valueOf(),s=Le.xAxis.scale().domain()[1].valueOf(),n=Le.xScale?Le.xScale():Le.xAxis.scale?Le.xAxis.scale():u().scale.linear()),n&&n.clamp&&n.clamp(!0),t.length>0){const e=[];if("bar"===re){const t=a.reduce(((e,t)=>(t.values.forEach((t=>e.add(t.x))),e)),new Set);e.push(...t.values()),e.sort()}else{let t=Math.min(...a.map((e=>Math.min(...e.values.slice(1).map(((t,a)=>t.x-e.values[a].x))))));const r=(s-i)/(t||1);t=r<100?(s-i)/100:t,t=r>500?(s-i)/500:t,e.push(i);for(let a=i;a<s;a+=t)e.push(a);e.push(s)}const r=t.map((t=>{const{value:a}=t;return{key:t.name,values:e.map((e=>({x:e,y:(0,L.f)(a,e)}))),color:t.color,strokeWidth:t.width,classed:`${t.opacity} ${t.style}`}}));a.push(...r)}const l=Le.xAxis1?Le.xAxis1:Le.xAxis,c=Le.yAxis1?Le.yAxis1:Le.yAxis,h=l.scale().range()[1],m=c.scale().range()[0];r&&(Ae.filter((e=>e.annotationType===M.ZP.EVENT&&r&&r[e.name])).forEach(((t,a)=>{const s=(0,M.yb)(t),i=u().select(e).select(".nv-wrap").append("g").attr("class",`nv-event-annotation-layer-${a}`),o=s.color||z((0,T.gO)(s.name),p),l=(0,T.Gr)({...s,annotationTipClass:`arrow-down nv-event-annotation-layer-${t.sourceType}`}),c=(r[s.name].records||[]).map((e=>{const t=new Date(d().utc(e[s.timeColumn]));return{...e,[s.timeColumn]:t}})).filter((e=>!Number.isNaN(e[s.timeColumn].getMilliseconds())));c.length>0&&i.selectAll("line").data(c).enter().append("line").attr({x1:e=>n(new Date(e[s.timeColumn])),y1:0,x2:e=>n(new Date(e[s.timeColumn])),y2:m}).attr("class",`${s.opacity} ${s.style}`).style("stroke",o).style("stroke-width",s.width).on("mouseover",l.show).on("mouseout",l.hide).call(l),Le.focus&&Le.focus.dispatch.on("onBrush.event-annotation",(()=>{i.selectAll("line").data(c).attr({x1:e=>n(new Date(e[s.timeColumn])),y1:0,x2:e=>n(new Date(e[s.timeColumn])),y2:m,opacity:e=>{const t=n(new Date(e[s.timeColumn]));return t>0&&t<h?1:0}})}))})),Ae.filter((e=>e.annotationType===M.ZP.INTERVAL&&r&&r[e.name])).forEach(((t,a)=>{const s=(0,M.yb)(t),i=u().select(e).select(".nv-wrap").append("g").attr("class",`nv-interval-annotation-layer-${a}`),o=s.color||z((0,T.gO)(s.name),p),l=(0,T.Gr)(s),c=(r[s.name].records||[]).map((e=>{const t=new Date(d().utc(e[s.timeColumn])),a=new Date(d().utc(e[s.intervalEndColumn]));return{...e,[s.timeColumn]:t,[s.intervalEndColumn]:a}})).filter((e=>!Number.isNaN(e[s.timeColumn].getMilliseconds())&&!Number.isNaN(e[s.intervalEndColumn].getMilliseconds())));c.length>0&&i.selectAll("rect").data(c).enter().append("rect").attr({x:e=>Math.min(n(new Date(e[s.timeColumn])),n(new Date(e[s.intervalEndColumn]))),y:0,width:e=>Math.max(Math.abs(n(new Date(e[s.intervalEndColumn]))-n(new Date(e[s.timeColumn]))),1),height:m}).attr("class",`${s.opacity} ${s.style}`).style("stroke-width",s.width).style("stroke",o).style("fill",o).style("fill-opacity",.2).on("mouseover",l.show).on("mouseout",l.hide).call(l),Le.focus&&Le.focus.dispatch.on("onBrush.interval-annotation",(()=>{i.selectAll("rect").data(c).attr({x:e=>n(new Date(e[s.timeColumn])),width:e=>{const t=n(new Date(e[s.timeColumn]));return n(new Date(e[s.intervalEndColumn]))-t}})}))}))),o.datum(a).attr("height",we).attr("width",Te).call(Le),Le.dispatch.on("renderEnd.timeseries-annotation",(()=>{u().selectAll(".slice_container .nv-timeseries-annotation-layer.showMarkerstrue .nv-point").style("stroke-opacity",1).style("fill-opacity",1),u().selectAll(".slice_container .nv-timeseries-annotation-layer.hideLinetrue").style("stroke-width",0)}))}}return(0,T.Aw)(Le),Le}))}U.displayName="NVD3",U.propTypes=G;const V=U;var W=a(11965);const H=(0,s.Z)(V,{componentWillUnmount:function(){const{id:e}=this.props;null!=e?(0,T.o2)(e):(0,T.Vl)(!0)}}),q=e=>{let{className:t,...a}=e;return(0,W.tZ)("div",{className:t},(0,W.tZ)(H,a))};q.propTypes={className:o().string.isRequired};const j=(0,i.iK)(q)`
  .superset-legacy-chart-nvd3-dist-bar,
  .superset-legacy-chart-nvd3-bar {
    overflow-x: auto !important;
    svg {
      &.nvd3-svg {
        width: auto;
        font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}};
      }
    }
  }
  .superset-legacy-chart-nvd3 {
    nv-x text {
      font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}};
    }
    g.superset path {
      stroke-dasharray: 5, 5;
    }
    .nvtooltip tr.highlight td {
      font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
      font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}}px !important;
    }
    text.nv-axislabel {
      font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}} !important;
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
      font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}};
      font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.normal}};
    }
  }
  .superset-legacy-chart-nvd3-tr-highlight {
    border-top: 1px solid;
    border-bottom: 1px solid;
    font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
  }
  .superset-legacy-chart-nvd3-tr-total {
    font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
  }
  .nvtooltip {
    .tooltip-header {
      white-space: nowrap;
      font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
    }
    tbody tr:not(.tooltip-header) td:nth-of-type(2) {
      word-break: break-word;
    }
  }
  .d3-tip.nv-event-annotation-layer-table,
  .d3-tip.nv-event-annotation-layer-NATIVE {
    width: 200px;
    border-radius: 2px;
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    fill-opacity: 0.6;
    margin: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
    &:after {
      content: '\\25BC';
      font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}};
      color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
      position: absolute;
      bottom: -14px;
      left: 94px;
    }
  }
`},43323:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(67294),i=a(11965);function r(e,t){class a extends s.Component{constructor(e){super(e),this.container=void 0,this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,null!=t&&t.componentWillUnmount&&t.componentWillUnmount.bind(this)()}setContainerRef(e){this.container=e}execute(){this.container&&e(this.container,this.props)}render(){const{id:e,className:t}=this.props;return(0,i.tZ)("div",{ref:this.setContainerRef,id:e,className:t})}}const r=a;return e.displayName&&(r.displayName=e.displayName),e.propTypes&&(r.propTypes={...r.propTypes,...e.propTypes}),e.defaultProps&&(r.defaultProps=e.defaultProps),a}}}]);
//# sourceMappingURL=79accaa022c167cb152f.chunk.js.map