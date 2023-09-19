"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4194],{44194:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J}),a(67294);var s=a(43323),i=a(51995),r=a(45697),o=a.n(r),n=a(23493),l=a.n(n),c=a(21804),h=a.n(c),m=a(78580),p=a.n(m),u=a(15078),d=a.n(u),y=a(30381),x=a.n(y),b=a(28041),g=a.n(b),f=a(28062),v=a(67190),k=a(55867),w=a(45636),A=a(51115),L=a(40962),M=a(37731),C=a(60524),T=a(95963),$=a(83937),N=a(80221);const F=o().oneOfType([o().number,o().oneOf(["auto"])]),O=o().oneOfType([o().string,o().shape({label:o().string})]),D=o().shape({r:o().number.isRequired,g:o().number.isRequired,b:o().number.isRequired}),E=o().shape({x:o().number,y:o().number}),S=o().shape({x:o().string,y:o().number}),_=o().shape({outliers:o().arrayOf(o().number),Q1:o().number,Q2:o().number,Q3:o().number,whisker_high:o().number,whisker_low:o().number}),B=o().shape({markerLabels:o().arrayOf(o().string),markerLineLabels:o().arrayOf(o().string),markerLines:o().arrayOf(o().number),markers:o().arrayOf(o().number),measures:o().arrayOf(o().number),rangeLabels:o().arrayOf(o().string),ranges:o().arrayOf(o().number)}),z=o().shape({annotationType:o().oneOf(Object.keys(T.DT)),color:o().string,hideLine:o().bool,name:o().string,opacity:o().string,show:o().bool,showMarkers:o().bool,sourceType:o().string,style:o().string,value:o().oneOfType([o().number,o().string]),width:o().number}),R=[{text:"No data",dy:"-.75em",class:"header"},{text:"Adjust filters or check the Datasource.",dy:".75em",class:"body"}];g().utils.noData=function(e,t){const a=e.options().margin(),s=g().utils.availableHeight(null,t,a),i=g().utils.availableWidth(null,t,a),r=a.left+i/2,o=a.top+s/2;t.selectAll("g").remove();const n=t.selectAll(".nv-noData").data(R);n.enter().append("text").attr("class",(e=>`nvd3 nv-noData ${e.class}`)).attr("dy",(e=>e.dy)).style("text-anchor","middle"),n.attr("x",r).attr("y",o).text((e=>e.text))};const{getColor:I,getScale:Z}=f,G=["line","area","compare","bar","time_pivot"],P={data:o().oneOfType([o().arrayOf(o().oneOfType([S,o().shape({key:o().string,values:o().arrayOf(S)}),o().shape({key:o().arrayOf(o().string),values:o().arrayOf(E)}),o().shape({classed:o().string,key:o().string,type:o().string,values:o().arrayOf(E),yAxis:o().number}),o().shape({label:o().string,values:o().arrayOf(_)}),o().shape({key:o().string,values:o().arrayOf(o().object)})])),B]),width:o().number,height:o().number,annotationData:o().object,annotationLayers:o().arrayOf(z),bottomMargin:F,colorScheme:o().string,comparisonType:o().string,contribution:o().bool,leftMargin:F,onError:o().func,showLegend:o().bool,showMarkers:o().bool,useRichTooltip:o().bool,vizType:o().oneOf(["area","bar","box_plot","bubble","bullet","compare","column","dist_bar","line","time_pivot","pie"]),xAxisFormat:o().string,numberFormat:o().string,xAxisLabel:o().string,xAxisShowMinMax:o().bool,xIsLogScale:o().bool,xTicksLayout:o().oneOf(["auto","staggered","45°"]),yAxisFormat:o().string,yAxisBounds:o().arrayOf(o().number),yAxisLabel:o().string,yAxisShowMinMax:o().bool,yIsLogScale:o().bool,orderBars:o().bool,isBarStacked:o().bool,showBarValue:o().bool,reduceXTicks:o().bool,showControls:o().bool,showBrush:o().oneOf([!0,"yes",!1,"no","auto"]),onBrushEnd:o().func,yAxis2Format:o().string,lineInterpolation:o().string,isDonut:o().bool,isPieLabelOutside:o().bool,pieLabelType:o().oneOf(["key","value","percent","key_value","key_percent","key_value_percent"]),showLabels:o().bool,areaStackedStyle:o().string,entity:o().string,maxBubbleSize:o().number,xField:O,yField:O,sizeField:O,baseColor:D},U=()=>{},V=(0,v.JB)();function W(e,t){const{data:a,width:s,height:i,annotationData:r,annotationLayers:o=[],areaStackedStyle:n,baseColor:c,bottomMargin:m,colorScheme:u,comparisonType:y,contribution:b,entity:f,isBarStacked:F,isDonut:O,isPieLabelOutside:D,leftMargin:E,lineInterpolation:S="linear",markerLabels:_,markerLines:B,markerLineLabels:z,markers:R,maxBubbleSize:P,onBrushEnd:W=U,onError:H=U,orderBars:q,pieLabelType:j,rangeLabels:X,ranges:J,reduceXTicks:Q=!1,showBarValue:Y,showBrush:K,showControls:ee,showLabels:te,showLegend:ae,showMarkers:se,sizeField:ie,useRichTooltip:re,vizType:oe,xAxisFormat:ne,numberFormat:le,xAxisLabel:ce,xAxisShowMinMax:he=!1,xField:me,xIsLogScale:pe,xTicksLayout:ue,yAxisFormat:de,yAxisBounds:ye,yAxisLabel:xe,yAxisShowMinMax:be=!1,yAxis2ShowMinMax:ge=!1,yField:fe,yIsLogScale:ve,sliceId:ke}=t,we=null!==document.querySelector("#explorer-container"),Ae=e;Ae.innerHTML="";const Le=o.filter((e=>e.show));let Me,Ce=Ae,Te=null;for(;Ce.parentElement;){if(Ce.parentElement.id.startsWith("chart-id-")){Te=Ce.parentElement.id;break}Ce=Ce.parentElement}let $e=s,Ne="key";function Fe(e){return p()(e).call(e,oe)}Ae.style.width=`${s}px`,Ae.style.height=`${i}px`,Te?(0,N.o2)(Te):(0,N.Vl)(!0),g().addGraph((function(){var t;const o=d().select(e);o.classed("superset-legacy-chart-nvd3",!0),o.classed(`superset-legacy-chart-nvd3-${h()(oe)}`,!0);let Ae=o.select("svg");Ae.empty()&&(Ae=o.append("svg"));const Ce="bullet"===oe?Math.min(i,50):i,Oe=Fe(G),De="staggered"===ue,Ee="auto"===ue&&Fe(["column","dist_bar"])||"45°"===ue?45:0;if(45===Ee&&(0,$.Z)(K))return H((0,k.t)("You cannot use 45° tick layout along with the time range filter")),null;const Se=(0,$.Z)(K)||"auto"===K&&i>=480&&"45°"!==ue,_e=(0,v.JB)(le);switch(oe){case"line":Se?(Me=g().models.lineWithFocusChart(),De&&(Me.focus.margin({bottom:40}),Me.focusHeight(80)),Me.focus.xScale(d().time.scale.utc())):Me=g().models.lineChart(),Me.xScale(d().time.scale.utc()),Me.interpolate(S),Me.clipEdge(!1);break;case"time_pivot":Me=g().models.lineChart(),Me.xScale(d().time.scale.utc()),Me.interpolate(S);break;case"bar":Me=g().models.multiBarChart().showControls(ee).groupSpacing(.1),Q||($e=(0,N.UG)(a,F,s)),Me.width($e),Me.xAxis.showMaxMin(!1),Me.stacked(F);break;case"dist_bar":Me=g().models.multiBarChart().showControls(ee).reduceXTicks(Q).groupSpacing(.1),Me.xAxis.showMaxMin(!1),Me.stacked(F),q&&a.forEach((e=>{const t=[...e.values];e.values=t.sort(((e,t)=>(0,N.Hy)(e.x)<(0,N.Hy)(t.x)?-1:1))})),Q||($e=(0,N.UG)(a,F,s)),Me.width($e);break;case"pie":if(Me=g().models.pieChart(),Ne="x",Me.valueFormat(_e),O&&Me.donut(!0),Me.showLabels(te),Me.labelsOutside(D),Me.labelThreshold(.05),Me.cornerRadius(!0),p()(t=["key","value","percent"]).call(t,j))Me.labelType(j);else if("key_value"===j)Me.labelType((e=>`${e.data.x}: ${_e(e.data.y)}`));else{const e=d().sum(a,(e=>e.y)),t=(0,v.JB)(w.Z.PERCENT_2_POINT);"key_percent"===j?(Me.tooltip.valueFormatter((e=>t(e))),Me.labelType((a=>`${a.data.x}: ${t(a.data.y/e)}`))):(Me.tooltip.valueFormatter((a=>`${_e(a)} (${t(a/e)})`)),Me.labelType((a=>`${a.data.x}: ${_e(a.data.y)} (${t(a.data.y/e)})`)))}Me.margin({top:0});break;case"column":Me=g().models.multiBarChart().reduceXTicks(!1);break;case"compare":Me=g().models.cumulativeLineChart(),Me.xScale(d().time.scale.utc()),Me.useInteractiveGuideline(!0),Me.xAxis.showMaxMin(!1);break;case"bubble":Me=g().models.scatterChart(),Me.showDistX(!1),Me.showDistY(!1),Me.tooltip.contentGenerator((e=>(0,N.zK)({point:e.point,entity:f,xField:me,yField:fe,sizeField:ie,xFormatter:(0,N.fF)(ne),yFormatter:(0,N.fF)(de),sizeFormatter:V}))),Me.pointRange([5,P**2]),Me.pointDomain([0,d().max(a,(e=>d().max(e.values,(e=>e.size))))]);break;case"area":Me=g().models.stackedAreaChart(),Me.showControls(ee),Me.style(n),Me.xScale(d().time.scale.utc());break;case"box_plot":Ne="label",Me=g().models.boxPlotChart(),Me.x((e=>e.label)),Me.maxBoxWidth(75);break;case"bullet":Me=g().models.bulletChart(),a.rangeLabels=X,a.ranges=J,a.markerLabels=_,a.markerLines=B,a.markerLineLabels=z,a.markers=R;break;default:throw new Error(`Unrecognized visualization for nvd3${oe}`)}let Be;Me.margin({left:0,bottom:0}),Y&&((0,N.Ad)(Ae,a,F,de),Me.dispatch.on("stateChange.drawBarValues",(()=>{(0,N.Ad)(Ae,a,F,de)}))),Se&&W!==U&&Me.focus&&Me.focus.dispatch.on("brush",(e=>{const t=(0,N.z_)(e.extent);t&&e.brush.on("brushend",(()=>{W(t)}))})),Me.xAxis&&Me.xAxis.staggerLabels&&Me.xAxis.staggerLabels(De),Me.xAxis&&Me.xAxis.rotateLabels&&Me.xAxis.rotateLabels(Ee),Me.x2Axis&&Me.x2Axis.staggerLabels&&Me.x2Axis.staggerLabels(De),Me.x2Axis&&Me.x2Axis.rotateLabels&&Me.x2Axis.rotateLabels(Ee),"showLegend"in Me&&void 0!==ae&&($e<340&&"pie"!==oe?Me.showLegend(!1):Me.showLegend(ae)),ve&&Me.yScale(d().scale.log()),pe&&Me.xScale(d().scale.log()),Oe?(Be=(0,A.bt)(ne),Me.interactiveLayer.tooltip.headerFormatter(L.Z)):Be=(0,N.fF)(ne),Me.x2Axis&&Me.x2Axis.tickFormat&&Me.x2Axis.tickFormat(Be),Me.xAxis&&Me.xAxis.tickFormat&&(Fe(["dist_bar","box_plot"])?Me.xAxis.tickFormat((e=>e.length>40?`${e.slice(0,Math.max(0,40))}…`:e)):Me.xAxis.tickFormat(Be));let ze=(0,N.fF)(de);if(Me.yAxis&&Me.yAxis.tickFormat&&(!b&&"percentage"!==y||de&&de!==w.Z.SMART_NUMBER&&de!==w.Z.SMART_NUMBER_SIGNED||(ze=(0,v.JB)(w.Z.PERCENT_1_POINT)),Me.yAxis.tickFormat(ze)),Me.y2Axis&&Me.y2Axis.tickFormat&&Me.y2Axis.tickFormat(ze),Me.yAxis&&Me.yAxis.ticks(5),Me.y2Axis&&Me.y2Axis.ticks(5),(0,N.Ml)(Me.xAxis,he),(0,N.Ml)(Me.x2Axis,he),(0,N.Ml)(Me.yAxis,be),(0,N.Ml)(Me.y2Axis,ge||be),"time_pivot"===oe){if(c){const{r:e,g:t,b:a}=c;Me.color((s=>{const i=s.rank>0?.5*s.perc:1;return`rgba(${e}, ${t}, ${a}, ${i})`}))}Me.useInteractiveGuideline(!0),Me.interactiveLayer.tooltip.contentGenerator((e=>(0,N.RO)(e,Be,ze)))}else if("bullet"!==oe){const e=Z(u);Me.color((t=>t.color||e((0,N.gO)(t[Ne]),ke)))}Fe(["line","area","bar","dist_bar"])&&re&&(Me.useInteractiveGuideline(!0),"line"===oe||"bar"===oe?Me.interactiveLayer.tooltip.contentGenerator((e=>(0,N.Gx)(e,L.Z,ze))):"dist_bar"===oe?Me.interactiveLayer.tooltip.contentGenerator((e=>(0,N.yy)(e,ze))):Me.interactiveLayer.tooltip.contentGenerator((e=>(0,N.n4)(e,L.Z,ze,Me)))),Fe(["compare"])&&Me.interactiveLayer.tooltip.contentGenerator((e=>(0,N.yy)(e,ze))),Me.width($e),Me.height(Ce),Ae.datum(a).transition().duration(500).attr("height",Ce).attr("width",$e).call(Me),ve&&Me.yAxis.tickFormat((e=>0!==e&&Math.log10(e)%1==0?ze(e):"")),Ee>0&&Ae.select(".nv-x.nv-axis > g").selectAll("g").selectAll("text").attr("dx",-6.5);const Re=()=>{if(Me.yDomain&&Array.isArray(ye)&&2===ye.length){const[e,t]=ye,s=(0,M.Z)(e)&&!Number.isNaN(e),i=(0,M.Z)(t)&&!Number.isNaN(t);if((s||i)&&"area"===oe&&"expand"===Me.style())Me.yDomain([0,1]);else if((s||i)&&"area"===oe&&"stream"===Me.style())Me.yDomain((0,N.po)(a));else if(s&&i)Me.yDomain([e,t]),Me.clipEdge(!0);else if(s||i){let[r,o]=[0,1];"area"===oe||Fe(["bar","dist_bar"])&&Me.stacked()?[r,o]=(0,N.po)(a):[r,o]=(0,N.tH)(a);const n=s?e:r,l=i?t:o;Me.yDomain([n,l]),Me.clipEdge(!0)}}};if(Re(),Me.dispatch&&Me.dispatch.stateChange&&Me.dispatch.on("stateChange.applyYAxisBounds",Re),se&&(Ae.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1),Me.dispatch.on("stateChange.showMarkers",(()=>{setTimeout((()=>{Ae.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1)}),10)}))),void 0!==Me.yAxis||void 0!==Me.yAxis2){const t=Math.ceil(Math.min(s*(we?.01:.03),30)),i=Me.margin();Me.xAxis&&(i.bottom=28);const o=(0,N.GF)(Ae,Me.yAxis2?"nv-y1":"nv-y"),n=(0,N.GF)(Ae,"nv-x");if(i.left=o+t,xe&&""!==xe&&(i.left+=25),Y&&(i.top+=24),he&&(i.right=Math.max(20,n/2)+t),45===Ee?(i.bottom=n*Math.sin(Math.PI*Ee/180)+t+30,i.right=n*Math.cos(Math.PI*Ee/180)+t):De&&(i.bottom=40),m&&"auto"!==m&&(i.bottom=parseInt(m,10)),E&&"auto"!==E&&(i.left=E),ce&&""!==ce&&Me.xAxis){i.bottom+=25;let e=0;i.bottom&&!Number.isNaN(i.bottom)&&(e=i.bottom-45),Me.xAxis.axisLabel(ce).axisLabelDistance(e)}if(xe&&""!==xe&&Me.yAxis){let e=0;i.left&&!Number.isNaN(i.left)&&(e=i.left-70),Me.yAxis.axisLabel(xe).axisLabelDistance(e)}if(Oe&&r&&Le.length>0){const e=Le.filter((e=>e.annotationType===T.ZP.TIME_SERIES)).reduce(((e,t)=>e.concat((r[t.name]||[]).map((e=>{if(!e)return{};const a=Array.isArray(e.key)?`${t.name}, ${e.key.join(", ")}`:`${t.name}, ${e.key}`;return{...e,key:a,color:t.color,strokeWidth:t.width,classed:`${t.opacity} ${t.style} nv-timeseries-annotation-layer showMarkers${t.showMarkers} hideLine${t.hideLine}`}})))),[]);a.push(...e)}if(Te&&(Me&&Me.interactiveLayer&&Me.interactiveLayer.tooltip&&Me.interactiveLayer.tooltip.classes([(0,N.T7)(Te)]),Me&&Me.tooltip&&Me.tooltip.classes([(0,N.T7)(Te)])),Me.margin(i),Ae.datum(a).transition().duration(500).attr("width",$e).attr("height",Ce).call(Me),window.addEventListener("scroll",l()((()=>(0,N.Vl)(!1)),250)),Oe&&Le.length>0){const t=Le.filter((e=>e.annotationType===T.ZP.FORMULA));let s,i,o;if("bar"===oe?(i=d().min(a[0].values,(e=>e.x)),s=d().max(a[0].values,(e=>e.x)),o=d().scale.quantile().domain([i,s]).range(Me.xAxis.range())):(i=Me.xAxis.scale().domain()[0].valueOf(),s=Me.xAxis.scale().domain()[1].valueOf(),o=Me.xScale?Me.xScale():Me.xAxis.scale?Me.xAxis.scale():d().scale.linear()),o&&o.clamp&&o.clamp(!0),t.length>0){const e=[];if("bar"===oe){const t=a.reduce(((e,t)=>(t.values.forEach((t=>e.add(t.x))),e)),new Set);e.push(...t.values()),e.sort()}else{let t=Math.min(...a.map((e=>Math.min(...e.values.slice(1).map(((t,a)=>t.x-e.values[a].x))))));const r=(s-i)/(t||1);t=r<100?(s-i)/100:t,t=r>500?(s-i)/500:t,e.push(i);for(let a=i;a<s;a+=t)e.push(a);e.push(s)}const r=t.map((t=>{const{value:a}=t;return{key:t.name,values:e.map((e=>({x:e,y:(0,C.f)(a,e)}))),color:t.color,strokeWidth:t.width,classed:`${t.opacity} ${t.style}`}}));a.push(...r)}const n=Me.xAxis1?Me.xAxis1:Me.xAxis,l=Me.yAxis1?Me.yAxis1:Me.yAxis,c=n.scale().range()[1],h=l.scale().range()[0];r&&(Le.filter((e=>e.annotationType===T.ZP.EVENT&&r&&r[e.name])).forEach(((t,a)=>{const s=(0,T.yb)(t),i=d().select(e).select(".nv-wrap").append("g").attr("class",`nv-event-annotation-layer-${a}`),n=s.color||I((0,N.gO)(s.name),u),l=(0,N.Gr)({...s,annotationTipClass:`arrow-down nv-event-annotation-layer-${t.sourceType}`}),m=(r[s.name].records||[]).map((e=>{const t=new Date(x().utc(e[s.timeColumn]));return{...e,[s.timeColumn]:t}})).filter((e=>!Number.isNaN(e[s.timeColumn].getMilliseconds())));m.length>0&&i.selectAll("line").data(m).enter().append("line").attr({x1:e=>o(new Date(e[s.timeColumn])),y1:0,x2:e=>o(new Date(e[s.timeColumn])),y2:h}).attr("class",`${s.opacity} ${s.style}`).style("stroke",n).style("stroke-width",s.width).on("mouseover",l.show).on("mouseout",l.hide).call(l),Me.focus&&Me.focus.dispatch.on("onBrush.event-annotation",(()=>{i.selectAll("line").data(m).attr({x1:e=>o(new Date(e[s.timeColumn])),y1:0,x2:e=>o(new Date(e[s.timeColumn])),y2:h,opacity:e=>{const t=o(new Date(e[s.timeColumn]));return t>0&&t<c?1:0}})}))})),Le.filter((e=>e.annotationType===T.ZP.INTERVAL&&r&&r[e.name])).forEach(((t,a)=>{const s=(0,T.yb)(t),i=d().select(e).select(".nv-wrap").append("g").attr("class",`nv-interval-annotation-layer-${a}`),n=s.color||I((0,N.gO)(s.name),u),l=(0,N.Gr)(s),c=(r[s.name].records||[]).map((e=>{const t=new Date(x().utc(e[s.timeColumn])),a=new Date(x().utc(e[s.intervalEndColumn]));return{...e,[s.timeColumn]:t,[s.intervalEndColumn]:a}})).filter((e=>!Number.isNaN(e[s.timeColumn].getMilliseconds())&&!Number.isNaN(e[s.intervalEndColumn].getMilliseconds())));c.length>0&&i.selectAll("rect").data(c).enter().append("rect").attr({x:e=>Math.min(o(new Date(e[s.timeColumn])),o(new Date(e[s.intervalEndColumn]))),y:0,width:e=>Math.max(Math.abs(o(new Date(e[s.intervalEndColumn]))-o(new Date(e[s.timeColumn]))),1),height:h}).attr("class",`${s.opacity} ${s.style}`).style("stroke-width",s.width).style("stroke",n).style("fill",n).style("fill-opacity",.2).on("mouseover",l.show).on("mouseout",l.hide).call(l),Me.focus&&Me.focus.dispatch.on("onBrush.interval-annotation",(()=>{i.selectAll("rect").data(c).attr({x:e=>o(new Date(e[s.timeColumn])),width:e=>{const t=o(new Date(e[s.timeColumn]));return o(new Date(e[s.intervalEndColumn]))-t}})}))}))),Ae.datum(a).attr("height",Ce).attr("width",$e).call(Me),Me.dispatch.on("renderEnd.timeseries-annotation",(()=>{d().selectAll(".slice_container .nv-timeseries-annotation-layer.showMarkerstrue .nv-point").style("stroke-opacity",1).style("fill-opacity",1),d().selectAll(".slice_container .nv-timeseries-annotation-layer.hideLinetrue").style("stroke-width",0)}))}}return(0,N.Aw)(Me),Me}))}W.displayName="NVD3",W.propTypes=P;const H=W;var q=a(11965);const j=(0,s.Z)(H,{componentWillUnmount:function(){const{id:e}=this.props;null!=e?(0,N.o2)(e):(0,N.Vl)(!0)}}),X=e=>{let{className:t,...a}=e;return(0,q.tZ)("div",{className:t},(0,q.tZ)(j,a))};X.propTypes={className:o().string.isRequired};const J=(0,i.iK)(X)`
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
    tbody tr:not(.tooltip-header) td:nth-child(2) {
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
//# sourceMappingURL=df8caffe35dc7408592b.chunk.js.map