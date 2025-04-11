"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4194],{244194:(e,t,a)=>{a.r(t),a.d(t,{default:()=>X});var s=a(943323),i=a(751995),o=a(45697),r=a.n(o),n=a(823493),l=a.n(n),c=a(121804),h=a.n(c),m=a(615078),p=a.n(m),d=a(730381),u=a.n(d),y=a(728041),x=a.n(y),b=a(751115),g=a(740962),f=a(328062),v=a(767190),k=a(61988),w=a(645636),A=a(237731),L=a(760524),M=a(195963),C=a(383937),T=a(880221);const $=r().oneOfType([r().number,r().oneOf(["auto"])]),N=r().oneOfType([r().string,r().shape({label:r().string})]),F=r().shape({r:r().number.isRequired,g:r().number.isRequired,b:r().number.isRequired}),O=r().shape({x:r().number,y:r().number}),D=r().shape({x:r().string,y:r().number}),E=r().shape({outliers:r().arrayOf(r().number),Q1:r().number,Q2:r().number,Q3:r().number,whisker_high:r().number,whisker_low:r().number}),S=r().shape({markerLabels:r().arrayOf(r().string),markerLineLabels:r().arrayOf(r().string),markerLines:r().arrayOf(r().number),markers:r().arrayOf(r().number),measures:r().arrayOf(r().number),rangeLabels:r().arrayOf(r().string),ranges:r().arrayOf(r().number)}),_=r().shape({annotationType:r().oneOf(Object.keys(M.DT)),color:r().string,hideLine:r().bool,name:r().string,opacity:r().string,show:r().bool,showMarkers:r().bool,sourceType:r().string,style:r().string,value:r().oneOfType([r().number,r().string]),width:r().number}),B=[{text:"No data",dy:"-.75em",class:"header"},{text:"Adjust filters or check the Datasource.",dy:".75em",class:"body"}],z=(0,b.bt)(g.K);x().utils.noData=function(e,t){const a=e.options().margin(),s=x().utils.availableHeight(null,t,a),i=x().utils.availableWidth(null,t,a),o=a.left+i/2,r=a.top+s/2;t.selectAll("g").remove();const n=t.selectAll(".nv-noData").data(B);n.enter().append("text").attr("class",(e=>`nvd3 nv-noData ${e.class}`)).attr("dy",(e=>e.dy)).style("text-anchor","middle"),n.attr("x",o).attr("y",r).text((e=>e.text))};const{getColor:R,getScale:I}=f,G=["line","area","compare","bar","time_pivot"],P={data:r().oneOfType([r().arrayOf(r().oneOfType([D,r().shape({key:r().string,values:r().arrayOf(D)}),r().shape({key:r().arrayOf(r().string),values:r().arrayOf(O)}),r().shape({classed:r().string,key:r().string,type:r().string,values:r().arrayOf(O),yAxis:r().number}),r().shape({label:r().string,values:r().arrayOf(E)}),r().shape({key:r().string,values:r().arrayOf(r().object)})])),S]),width:r().number,height:r().number,annotationData:r().object,annotationLayers:r().arrayOf(_),bottomMargin:$,colorScheme:r().string,comparisonType:r().string,contribution:r().bool,leftMargin:$,onError:r().func,showLegend:r().bool,showMarkers:r().bool,useRichTooltip:r().bool,vizType:r().oneOf(["area","bar","box_plot","bubble","bullet","compare","column","dist_bar","line","time_pivot","pie"]),xAxisFormat:r().string,numberFormat:r().string,xAxisLabel:r().string,xAxisShowMinMax:r().bool,xIsLogScale:r().bool,xTicksLayout:r().oneOf(["auto","staggered","45°"]),yAxisFormat:r().string,yAxisBounds:r().arrayOf(r().number),yAxisLabel:r().string,yAxisShowMinMax:r().bool,yIsLogScale:r().bool,orderBars:r().bool,isBarStacked:r().bool,showBarValue:r().bool,reduceXTicks:r().bool,showControls:r().bool,showBrush:r().oneOf([!0,"yes",!1,"no","auto"]),onBrushEnd:r().func,yAxis2Format:r().string,lineInterpolation:r().string,isDonut:r().bool,isPieLabelOutside:r().bool,pieLabelType:r().oneOf(["key","value","percent","key_value","key_percent","key_value_percent"]),showLabels:r().bool,areaStackedStyle:r().string,entity:r().string,maxBubbleSize:r().number,xField:N,yField:N,sizeField:N,baseColor:F},U=()=>{},Z=(0,v.JB)();function V(e,t){const{data:a,width:s,height:i,annotationData:o,annotationLayers:r=[],areaStackedStyle:n,baseColor:c,bottomMargin:m,colorScheme:d,comparisonType:y,contribution:g,entity:f,isBarStacked:$,isDonut:N,isPieLabelOutside:F,leftMargin:O,lineInterpolation:D="linear",markerLabels:E,markerLines:S,markerLineLabels:_,markers:B,maxBubbleSize:P,onBrushEnd:V=U,onError:W=U,orderBars:H,pieLabelType:q,rangeLabels:j,ranges:X,reduceXTicks:J=!1,showBarValue:K,showBrush:Q,showControls:Y,showLabels:ee,showLegend:te,showMarkers:ae,sizeField:se,useRichTooltip:ie,vizType:oe,xAxisFormat:re,numberFormat:ne,xAxisLabel:le,xAxisShowMinMax:ce=!1,xField:he,xIsLogScale:me,xTicksLayout:pe,yAxisFormat:de,yAxisBounds:ue,yAxisLabel:ye,yAxisShowMinMax:xe=!1,yAxis2ShowMinMax:be=!1,yField:ge,yIsLogScale:fe,sliceId:ve}=t,ke=null!==document.querySelector("#explorer-container"),we=e;we.innerHTML="";const Ae=r.filter((e=>e.show));let Le,Me=we,Ce=null;for(;Me.parentElement;){if(Me.parentElement.id.startsWith("chart-id-")){Ce=Me.parentElement.id;break}Me=Me.parentElement}let Te=s,$e="key";function Ne(e){return e.includes(oe)}we.style.width=`${s}px`,we.style.height=`${i}px`,Ce?(0,T.o2)(Ce):(0,T.Vl)(!0),x().addGraph((function(){const t=p().select(e);t.classed("superset-legacy-chart-nvd3",!0),t.classed(`superset-legacy-chart-nvd3-${h()(oe)}`,!0);let r=t.select("svg");r.empty()&&(r=t.append("svg"));const we="bullet"===oe?Math.min(i,50):i,Me=Ne(G),Fe="staggered"===pe,Oe="auto"===pe&&Ne(["column","dist_bar"])||"45°"===pe?45:0;if(45===Oe&&(0,C.Z)(Q))return W((0,k.t)("You cannot use 45° tick layout along with the time range filter")),null;const De=(0,C.Z)(Q)||"auto"===Q&&i>=480&&"45°"!==pe,Ee=(0,v.JB)(ne);switch(oe){case"line":De?(Le=x().models.lineWithFocusChart(),Fe&&(Le.focus.margin({bottom:40}),Le.focusHeight(80)),Le.focus.xScale(p().time.scale.utc())):Le=x().models.lineChart(),Le.xScale(p().time.scale.utc()),Le.interpolate(D),Le.clipEdge(!1);break;case"time_pivot":Le=x().models.lineChart(),Le.xScale(p().time.scale.utc()),Le.interpolate(D);break;case"bar":Le=x().models.multiBarChart().showControls(Y).groupSpacing(.1),J||(Te=(0,T.UG)(a,$,s)),Le.width(Te),Le.xAxis.showMaxMin(!1),Le.stacked($);break;case"dist_bar":Le=x().models.multiBarChart().showControls(Y).reduceXTicks(J).groupSpacing(.1),Le.xAxis.showMaxMin(!1),Le.stacked($),H&&a.forEach((e=>{const t=[...e.values];e.values=t.sort(((e,t)=>(0,T.Hy)(e.x)<(0,T.Hy)(t.x)?-1:1))})),J||(Te=(0,T.UG)(a,$,s)),Le.width(Te);break;case"pie":if(Le=x().models.pieChart(),$e="x",Le.valueFormat(Ee),N&&Le.donut(!0),Le.showLabels(ee),Le.labelsOutside(F),Le.labelThreshold(.05),Le.cornerRadius(!0),["key","value","percent"].includes(q))Le.labelType(q);else if("key_value"===q)Le.labelType((e=>`${e.data.x}: ${Ee(e.data.y)}`));else{const e=p().sum(a,(e=>e.y)),t=(0,v.JB)(w.default.PERCENT_2_POINT);"key_percent"===q?(Le.tooltip.valueFormatter((e=>t(e))),Le.labelType((a=>`${a.data.x}: ${t(a.data.y/e)}`))):(Le.tooltip.valueFormatter((a=>`${Ee(a)} (${t(a/e)})`)),Le.labelType((a=>`${a.data.x}: ${Ee(a.data.y)} (${t(a.data.y/e)})`)))}Le.margin({top:0});break;case"column":Le=x().models.multiBarChart().reduceXTicks(!1);break;case"compare":Le=x().models.cumulativeLineChart(),Le.xScale(p().time.scale.utc()),Le.useInteractiveGuideline(!0),Le.xAxis.showMaxMin(!1);break;case"bubble":Le=x().models.scatterChart(),Le.showDistX(!1),Le.showDistY(!1),Le.tooltip.contentGenerator((e=>(0,T.zK)({point:e.point,entity:f,xField:he,yField:ge,sizeField:se,xFormatter:(0,T.fF)(re),yFormatter:(0,T.fF)(de),sizeFormatter:Z}))),Le.pointRange([5,P**2]),Le.pointDomain([0,p().max(a,(e=>p().max(e.values,(e=>e.size))))]);break;case"area":Le=x().models.stackedAreaChart(),Le.showControls(Y),Le.style(n),Le.xScale(p().time.scale.utc());break;case"box_plot":$e="label",Le=x().models.boxPlotChart(),Le.x((e=>e.label)),Le.maxBoxWidth(75);break;case"bullet":Le=x().models.bulletChart(),a.rangeLabels=j,a.ranges=X,a.markerLabels=E,a.markerLines=S,a.markerLineLabels=_,a.markers=B;break;default:throw new Error(`Unrecognized visualization for nvd3${oe}`)}let Se;Le.margin({left:0,bottom:0}),K&&((0,T.Ad)(r,a,$,de),Le.dispatch.on("stateChange.drawBarValues",(()=>{(0,T.Ad)(r,a,$,de)}))),De&&V!==U&&Le.focus&&Le.focus.dispatch.on("brush",(e=>{const t=(0,T.z_)(e.extent);t&&e.brush.on("brushend",(()=>{V(t)}))})),Le.xAxis&&Le.xAxis.staggerLabels&&Le.xAxis.staggerLabels(Fe),Le.xAxis&&Le.xAxis.rotateLabels&&Le.xAxis.rotateLabels(Oe),Le.x2Axis&&Le.x2Axis.staggerLabels&&Le.x2Axis.staggerLabels(Fe),Le.x2Axis&&Le.x2Axis.rotateLabels&&Le.x2Axis.rotateLabels(Oe),"showLegend"in Le&&void 0!==te&&(Te<340&&"pie"!==oe?Le.showLegend(!1):Le.showLegend(te)),fe&&Le.yScale(p().scale.log()),me&&Le.xScale(p().scale.log()),Me?(Se=(0,b.bt)(re),Le.interactiveLayer.tooltip.headerFormatter(z)):Se=(0,T.fF)(re),Le.x2Axis&&Le.x2Axis.tickFormat&&Le.x2Axis.tickFormat(Se),Le.xAxis&&Le.xAxis.tickFormat&&(Ne(["dist_bar","box_plot"])?Le.xAxis.tickFormat((e=>e.length>40?`${e.slice(0,Math.max(0,40))}…`:e)):Le.xAxis.tickFormat(Se));let _e=(0,T.fF)(de);if(Le.yAxis&&Le.yAxis.tickFormat&&(!g&&"percentage"!==y||de&&de!==w.default.SMART_NUMBER&&de!==w.default.SMART_NUMBER_SIGNED||(_e=(0,v.JB)(w.default.PERCENT_1_POINT)),Le.yAxis.tickFormat(_e)),Le.y2Axis&&Le.y2Axis.tickFormat&&Le.y2Axis.tickFormat(_e),Le.yAxis&&Le.yAxis.ticks(5),Le.y2Axis&&Le.y2Axis.ticks(5),(0,T.Ml)(Le.xAxis,ce),(0,T.Ml)(Le.x2Axis,ce),(0,T.Ml)(Le.yAxis,xe),(0,T.Ml)(Le.y2Axis,be||xe),"time_pivot"===oe){if(c){const{r:e,g:t,b:a}=c;Le.color((s=>{const i=s.rank>0?.5*s.perc:1;return`rgba(${e}, ${t}, ${a}, ${i})`}))}Le.useInteractiveGuideline(!0),Le.interactiveLayer.tooltip.contentGenerator((e=>(0,T.RO)(e,Se,_e)))}else if("bullet"!==oe){const e=I(d);Le.color((t=>t.color||e((0,T.gO)(t[$e]),ve)))}Ne(["line","area","bar","dist_bar"])&&ie&&(Le.useInteractiveGuideline(!0),"line"===oe||"bar"===oe?Le.interactiveLayer.tooltip.contentGenerator((e=>(0,T.Gx)(e,z,_e))):"dist_bar"===oe?Le.interactiveLayer.tooltip.contentGenerator((e=>(0,T.yy)(e,_e))):Le.interactiveLayer.tooltip.contentGenerator((e=>(0,T.n4)(e,z,_e,Le)))),Ne(["compare"])&&Le.interactiveLayer.tooltip.contentGenerator((e=>(0,T.yy)(e,_e))),Le.width(Te),Le.height(we),r.datum(a).transition().duration(500).attr("height",we).attr("width",Te).call(Le),fe&&Le.yAxis.tickFormat((e=>0!==e&&Math.log10(e)%1==0?_e(e):"")),Oe>0&&r.select(".nv-x.nv-axis > g").selectAll("g").selectAll("text").attr("dx",-6.5);const Be=()=>{if(Le.yDomain&&Array.isArray(ue)&&2===ue.length){const[e,t]=ue,s=(0,A.Z)(e)&&!Number.isNaN(e),i=(0,A.Z)(t)&&!Number.isNaN(t);if((s||i)&&"area"===oe&&"expand"===Le.style())Le.yDomain([0,1]);else if((s||i)&&"area"===oe&&"stream"===Le.style())Le.yDomain((0,T.po)(a));else if(s&&i)Le.yDomain([e,t]),Le.clipEdge(!0);else if(s||i){let[o,r]=[0,1];"area"===oe||Ne(["bar","dist_bar"])&&Le.stacked()?[o,r]=(0,T.po)(a):[o,r]=(0,T.tH)(a);const n=s?e:o,l=i?t:r;Le.yDomain([n,l]),Le.clipEdge(!0)}}};if(Be(),Le.dispatch&&Le.dispatch.stateChange&&Le.dispatch.on("stateChange.applyYAxisBounds",Be),ae&&(r.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1),Le.dispatch.on("stateChange.showMarkers",(()=>{setTimeout((()=>{r.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1)}),10)}))),void 0!==Le.yAxis||void 0!==Le.yAxis2){const t=Math.ceil(Math.min(s*(ke?.01:.03),30)),i=Le.margin();Le.xAxis&&(i.bottom=28);const n=(0,T.GF)(r,Le.yAxis2?"nv-y1":"nv-y"),c=(0,T.GF)(r,"nv-x");if(i.left=n+t,ye&&""!==ye&&(i.left+=25),K&&(i.top+=24),ce&&(i.right=Math.max(20,c/2)+t),45===Oe?(i.bottom=c*Math.sin(Math.PI*Oe/180)+t+30,i.right=c*Math.cos(Math.PI*Oe/180)+t):Fe&&(i.bottom=40),m&&"auto"!==m&&(i.bottom=parseInt(m,10)),O&&"auto"!==O&&(i.left=O),le&&""!==le&&Le.xAxis){i.bottom+=25;let e=0;i.bottom&&!Number.isNaN(i.bottom)&&(e=i.bottom-45),Le.xAxis.axisLabel(le).axisLabelDistance(e)}if(ye&&""!==ye&&Le.yAxis){let e=0;i.left&&!Number.isNaN(i.left)&&(e=i.left-70),Le.yAxis.axisLabel(ye).axisLabelDistance(e)}if(Me&&o&&Ae.length>0){const e=Ae.filter((e=>e.annotationType===M.ZP.TIME_SERIES)).reduce(((e,t)=>e.concat((o[t.name]||[]).map((e=>{if(!e)return{};const a=Array.isArray(e.key)?`${t.name}, ${e.key.join(", ")}`:`${t.name}, ${e.key}`;return{...e,key:a,color:t.color,strokeWidth:t.width,classed:`${t.opacity} ${t.style} nv-timeseries-annotation-layer showMarkers${t.showMarkers} hideLine${t.hideLine}`}})))),[]);a.push(...e)}if(Ce&&(Le&&Le.interactiveLayer&&Le.interactiveLayer.tooltip&&Le.interactiveLayer.tooltip.classes([(0,T.T7)(Ce)]),Le&&Le.tooltip&&Le.tooltip.classes([(0,T.T7)(Ce)])),Le.margin(i),r.datum(a).transition().duration(500).attr("width",Te).attr("height",we).call(Le),window.addEventListener("scroll",l()((()=>(0,T.Vl)(!1)),250)),Me&&Ae.length>0){const t=Ae.filter((e=>e.annotationType===M.ZP.FORMULA));let s,i,n;if("bar"===oe?(i=p().min(a[0].values,(e=>e.x)),s=p().max(a[0].values,(e=>e.x)),n=p().scale.quantile().domain([i,s]).range(Le.xAxis.range())):(i=Le.xAxis.scale().domain()[0].valueOf(),s=Le.xAxis.scale().domain()[1].valueOf(),n=Le.xScale?Le.xScale():Le.xAxis.scale?Le.xAxis.scale():p().scale.linear()),n&&n.clamp&&n.clamp(!0),t.length>0){const e=[];if("bar"===oe){const t=a.reduce(((e,t)=>(t.values.forEach((t=>e.add(t.x))),e)),new Set);e.push(...t.values()),e.sort()}else{let t=Math.min(...a.map((e=>Math.min(...e.values.slice(1).map(((t,a)=>t.x-e.values[a].x))))));const o=(s-i)/(t||1);t=o<100?(s-i)/100:t,t=o>500?(s-i)/500:t,e.push(i);for(let a=i;a<s;a+=t)e.push(a);e.push(s)}const o=t.map((t=>{const{value:a}=t;return{key:t.name,values:e.map((e=>({x:e,y:(0,L.f)(a,e)}))),color:t.color,strokeWidth:t.width,classed:`${t.opacity} ${t.style}`}}));a.push(...o)}const l=Le.xAxis1?Le.xAxis1:Le.xAxis,c=Le.yAxis1?Le.yAxis1:Le.yAxis,h=l.scale().range()[1],m=c.scale().range()[0];o&&(Ae.filter((e=>e.annotationType===M.ZP.EVENT&&o&&o[e.name])).forEach(((t,a)=>{const s=(0,M.yb)(t),i=p().select(e).select(".nv-wrap").append("g").attr("class",`nv-event-annotation-layer-${a}`),r=s.color||R((0,T.gO)(s.name),d),l=(0,T.Gr)({...s,annotationTipClass:`arrow-down nv-event-annotation-layer-${t.sourceType}`}),c=(o[s.name].records||[]).map((e=>{const t=new Date(u().utc(e[s.timeColumn]));return{...e,[s.timeColumn]:t}})).filter((e=>!Number.isNaN(e[s.timeColumn].getMilliseconds())));c.length>0&&i.selectAll("line").data(c).enter().append("line").attr({x1:e=>n(new Date(e[s.timeColumn])),y1:0,x2:e=>n(new Date(e[s.timeColumn])),y2:m}).attr("class",`${s.opacity} ${s.style}`).style("stroke",r).style("stroke-width",s.width).on("mouseover",l.show).on("mouseout",l.hide).call(l),Le.focus&&Le.focus.dispatch.on("onBrush.event-annotation",(()=>{i.selectAll("line").data(c).attr({x1:e=>n(new Date(e[s.timeColumn])),y1:0,x2:e=>n(new Date(e[s.timeColumn])),y2:m,opacity:e=>{const t=n(new Date(e[s.timeColumn]));return t>0&&t<h?1:0}})}))})),Ae.filter((e=>e.annotationType===M.ZP.INTERVAL&&o&&o[e.name])).forEach(((t,a)=>{const s=(0,M.yb)(t),i=p().select(e).select(".nv-wrap").append("g").attr("class",`nv-interval-annotation-layer-${a}`),r=s.color||R((0,T.gO)(s.name),d),l=(0,T.Gr)(s),c=(o[s.name].records||[]).map((e=>{const t=new Date(u().utc(e[s.timeColumn])),a=new Date(u().utc(e[s.intervalEndColumn]));return{...e,[s.timeColumn]:t,[s.intervalEndColumn]:a}})).filter((e=>!Number.isNaN(e[s.timeColumn].getMilliseconds())&&!Number.isNaN(e[s.intervalEndColumn].getMilliseconds())));c.length>0&&i.selectAll("rect").data(c).enter().append("rect").attr({x:e=>Math.min(n(new Date(e[s.timeColumn])),n(new Date(e[s.intervalEndColumn]))),y:0,width:e=>Math.max(Math.abs(n(new Date(e[s.intervalEndColumn]))-n(new Date(e[s.timeColumn]))),1),height:m}).attr("class",`${s.opacity} ${s.style}`).style("stroke-width",s.width).style("stroke",r).style("fill",r).style("fill-opacity",.2).on("mouseover",l.show).on("mouseout",l.hide).call(l),Le.focus&&Le.focus.dispatch.on("onBrush.interval-annotation",(()=>{i.selectAll("rect").data(c).attr({x:e=>n(new Date(e[s.timeColumn])),width:e=>{const t=n(new Date(e[s.timeColumn]));return n(new Date(e[s.intervalEndColumn]))-t}})}))}))),r.datum(a).attr("height",we).attr("width",Te).call(Le),Le.dispatch.on("renderEnd.timeseries-annotation",(()=>{p().selectAll(".slice_container .nv-timeseries-annotation-layer.showMarkerstrue .nv-point").style("stroke-opacity",1).style("fill-opacity",1),p().selectAll(".slice_container .nv-timeseries-annotation-layer.hideLinetrue").style("stroke-width",0)}))}}return(0,T.Aw)(Le),Le}))}V.displayName="NVD3",V.propTypes=P;const W=V;var H=a(135944);const q=(0,s.Z)(W,{componentWillUnmount:function(){const{id:e}=this.props;null!=e?(0,T.o2)(e):(0,T.Vl)(!0)}}),j=({className:e,...t})=>(0,H.tZ)("div",{className:e,children:(0,H.tZ)(q,{...t})});j.propTypes={className:r().string.isRequired};const X=(0,i.iK)(j)`
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
    tbody tr:not(.tooltip-header) td:nth-of-type(2) {
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
`},943323:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(667294),i=a(135944);function o(e,t){class a extends s.Component{constructor(e){super(e),this.container=void 0,this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,null!=t&&t.componentWillUnmount&&t.componentWillUnmount.bind(this)()}setContainerRef(e){this.container=e}execute(){this.container&&e(this.container,this.props)}render(){const{id:e,className:t}=this.props;return(0,i.tZ)("div",{ref:this.setContainerRef,id:e,className:t})}}const o=a;return e.displayName&&(o.displayName=e.displayName),e.propTypes&&(o.propTypes={...o.propTypes,...e.propTypes}),e.defaultProps&&(o.defaultProps=e.defaultProps),a}}}]);
//# sourceMappingURL=b874e933be00ba631d46.chunk.js.map