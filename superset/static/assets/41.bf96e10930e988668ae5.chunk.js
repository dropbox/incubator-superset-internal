(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{3401:function(e,t,n){},3402:function(e,t,n){},3447:function(e,t,n){"use strict";n.r(t);var r=n(947),i=n(233),a=n.n(i),o=n(0),s=n.n(o),l=n(610),u=function(e){var t={data:[],highlighted:[],dimensions:[],dimensionTitles:{},dimensionTitleRotation:0,types:{},brushed:!1,brushedColor:null,alphaOnBrushed:0,mode:"default",rate:20,width:600,height:300,margin:{top:24,right:0,bottom:12,left:0},nullValueSeparator:"undefined",nullValueSeparatorPadding:{top:8,right:0,bottom:8,left:0},color:"#069",composite:"source-over",alpha:.7,bundlingStrength:.5,bundleDimension:null,smoothness:0,showControlPoints:!1,hideAxis:[]};!function(e,t){for(var n in t)e[n]=t[n]}(t,e);var n,r=function e(n){return n=e.selection=d3.select(n),t.width=n[0][0].clientWidth,t.height=n[0][0].clientHeight,["marks","foreground","brushed","highlight"].forEach((function(e){f[e]=n.append("canvas").attr("class",e)[0][0],h[e]=f[e].getContext("2d")})),e.svg=n.append("svg").attr("width",t.width).attr("height",t.height).append("svg:g").attr("transform","translate("+t.margin.left+","+t.margin.top+")"),e},i=d3.dispatch.apply(this,["render","resize","highlight","brush","brushend","axesreorder"].concat(d3.keys(t))),a=function(){return t.width-t.margin.right-t.margin.left},o=function(){return t.height-t.margin.top-t.margin.bottom},s={brushable:!1,reorderable:!1,axes:!1,interactive:!1,debug:!1},l=d3.scale.ordinal(),u={},c={},d=(d3.svg.line(),d3.svg.axis().orient("left").ticks(5)),h={},f={},m=d3.dispatch.apply(this,d3.keys(t)).on("composite",(function(e){h.foreground.globalCompositeOperation=e.value,h.brushed.globalCompositeOperation=e.value})).on("alpha",(function(e){h.foreground.globalAlpha=e.value,h.brushed.globalAlpha=e.value})).on("brushedColor",(function(e){h.brushed.strokeStyle=e.value})).on("width",(function(e){r.resize()})).on("height",(function(e){r.resize()})).on("margin",(function(e){r.resize()})).on("rate",(function(e){b.rate(e.value),v.rate(e.value)})).on("dimensions",(function(e){l.domain(t.dimensions),s.interactive&&r.render().updateAxes()})).on("bundleDimension",(function(e){t.dimensions.length||r.detectDimensions(),t.dimensions[0]in u||r.autoscale(),"number"==typeof e.value?e.value<t.dimensions.length?t.bundleDimension=t.dimensions[e.value]:e.value<t.hideAxis.length&&(t.bundleDimension=t.hideAxis[e.value]):t.bundleDimension=e.value,t.clusterCentroids=function(e){var n=d3.map(),r=d3.map();return t.data.forEach((function(t){var n=u[e](t[e]);r.has(n)||r.set(n,0);var i=r.get(n);r.set(n,i+1)})),t.data.forEach((function(i){t.dimensions.map((function(t,a){var o=u[e](i[e]);if(!n.has(o)){var s=d3.map();n.set(o,s)}n.get(o).has(t)||n.get(o).set(t,0);var l=n.get(o).get(t);l+=u[t](i[t])/r.get(o),n.get(o).set(t,l)}))})),n}(t.bundleDimension)})).on("hideAxis",(function(e){var n,i;t.dimensions.length||r.detectDimensions(),r.dimensions((n=t.dimensions,i=e.value,n.filter((function(e){return-1===i.indexOf(e)}))))}));function g(){return"bottom"==t.nullValueSeparator?[o()+1-t.nullValueSeparatorPadding.bottom-t.nullValueSeparatorPadding.top,1]:"top"==t.nullValueSeparator?[o()+1,1+t.nullValueSeparatorPadding.bottom+t.nullValueSeparatorPadding.top]:[o()+1,1]}function p(){if(t.brushed&&t.brushed.length!==t.data.length)return!0;var e=O.currentMode().brushState();for(var n in e)if(e.hasOwnProperty(n))return!0;return!1}r.state=t,r.flags=s,function(e,t,n){d3.keys(t).forEach((function(i){e[i]=function(a){if(!arguments.length)return t[i];var o=t[i];return t[i]=a,m[i].call(r,{value:a,previous:o}),n[i].call(r,{value:a,previous:o}),e}}))}(r,t,i),d3.rebind(r,i,"on"),r.autoscale=function(){var e={date:function(e){var n=d3.extent(t.data,(function(t){return t[e]?t[e].getTime():null}));return n[0]===n[1]?d3.scale.ordinal().domain([n[0]]).rangePoints(g()):d3.time.scale().domain(n).range(g())},number:function(e){var n=d3.extent(t.data,(function(t){return+t[e]}));return n[0]===n[1]?d3.scale.ordinal().domain([n[0]]).rangePoints(g()):d3.scale.linear().domain(n).range(g())},string:function(e){var n,r={};return t.data.map((function(n){void 0===n[e]&&"undefined"!==t.nullValueSeparator||(void 0===r[n[e]]?r[n[e]]=1:r[n[e]]=r[n[e]]+1)})),n=Object.getOwnPropertyNames(r).sort((function(e,t){return r[e]-r[t]})),d3.scale.ordinal().domain(n).rangePoints(g())}};return t.dimensions.forEach((function(n){u[n]=e[t.types[n]](n)})),t.hideAxis.forEach((function(n){u[n]=e[t.types[n]](n)})),l.rangePoints([0,a()],1),r.selection.selectAll("canvas").style("margin-top",t.margin.top+"px").style("margin-left",t.margin.left+"px").attr("width",a()+2).attr("height",o()+2),h.foreground.strokeStyle=t.color,h.foreground.lineWidth=1.4,h.foreground.globalCompositeOperation=t.composite,h.foreground.globalAlpha=t.alpha,h.brushed.strokeStyle=t.brushedColor,h.brushed.lineWidth=1.4,h.brushed.globalCompositeOperation=t.composite,h.brushed.globalAlpha=t.alpha,h.highlight.lineWidth=3,this},r.scale=function(e,t){return u[e].domain(t),this},r.flip=function(e){return u[e].domain(u[e].domain().reverse()),this},r.commonScale=function(e,n){var i=n||"number";void 0===e&&(e=!0);var a=t.dimensions.concat(t.hideAxis).filter((function(e){return t.types[e]==i}));if(e){var o=d3.extent(a.map((function(e,t){return u[e].domain()})).reduce((function(e,t){return e.concat(t)})));a.forEach((function(e){u[e].domain(o)}))}else a.forEach((function(e){u[e].domain(d3.extent(t.data,(function(t){return+t[e]})))}));return null!==t.bundleDimension&&r.bundleDimension(t.bundleDimension),this},r.detectDimensions=function(){return r.types(r.detectDimensionTypes(t.data)),r.dimensions(d3.keys(r.types())),this},r.toType=function(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()},r.toTypeCoerceNumbers=function(e){return parseFloat(e)==e&&null!=e?"number":r.toType(e)},r.detectDimensionTypes=function(e){var t={};return d3.keys(e[0]).forEach((function(n){t[n]=r.toTypeCoerceNumbers(e[0][n])})),t},r.render=function(){return t.dimensions.length||r.detectDimensions(),t.dimensions[0]in u||r.autoscale(),r.render[t.mode](),i.render.call(this),this},r.renderBrushed=function(){return t.dimensions.length||r.detectDimensions(),t.dimensions[0]in u||r.autoscale(),r.renderBrushed[t.mode](),i.render.call(this),this},r.render.default=function(){r.clear("foreground"),r.clear("highlight"),r.renderBrushed.default(),t.data.forEach(P)};var v=d3.renderQueue(P).rate(50).clear((function(){r.clear("foreground"),r.clear("highlight")}));r.render.queue=function(){r.renderBrushed.queue(),v(t.data)},r.renderBrushed.default=function(){r.clear("brushed"),p()&&t.brushed.forEach(M)};var b=d3.renderQueue(M).rate(50).clear((function(){r.clear("brushed")}));function x(e,n){var r=function(e){var n=e.length,r=t.smoothness,i=[];i.push(e[0]),i.push($V([e[0].e(1)+2*r*(e[1].e(1)-e[0].e(1)),e[0].e(2)]));for(var a=1;a<n-1;++a){var o=e[a],s=e[a-1],l=e[a+1],u=s.subtract(l);i.push(o.add(u.x(r))),i.push(o),i.push(o.subtract(u.x(r)))}return i.push($V([e[n-1].e(1)+2*r*(e[n-2].e(1)-e[n-1].e(1)),e[n-1].e(2)])),i.push(e[n-1]),i}(function(e){for(var n=[],r=t.dimensions,i=r.length,a=0;a<i;++a){var o=R(r[a]),s=u[r[a]](e[r[a]]);if(n.push($V([o,s])),a<i-1){var l=o+.5*(R(r[a+1])-o),c=s+.5*(u[r[a+1]](e[r[a+1]])-s);if(null!==t.bundleDimension){var d=.5*(t.clusterCentroids.get(u[t.bundleDimension](e[t.bundleDimension])).get(r[a])+t.clusterCentroids.get(u[t.bundleDimension](e[t.bundleDimension])).get(r[a+1]));c=d+(1-t.bundlingStrength)*(c-d)}n.push($V([l,c]))}}return n}(e));n.moveTo(r[0].e(1),r[0].e(2));for(var i=1;i<r.length;i+=3){if(t.showControlPoints)for(var a=0;a<3;a++)n.fillRect(r[i+a].e(1),r[i+a].e(2),2,2);n.bezierCurveTo(r[i].e(1),r[i].e(2),r[i+1].e(1),r[i+1].e(2),r[i+2].e(1),r[i+2].e(2))}}function y(e,n){n.beginPath(),null!==t.bundleDimension&&t.bundlingStrength>0||t.smoothness>0?x(e,n):w(e,n),n.stroke()}function A(){return"bottom"==t.nullValueSeparator?o()+1:"top"==t.nullValueSeparator?1:(console.log("A value is NULL, but nullValueSeparator is not set; set it to 'bottom' or 'top'."),o()+1)}function w(e,n){t.dimensions.map((function(t,r){0==r?n.moveTo(R(t),void 0===e[t]?A():u[t](e[t])):n.lineTo(R(t),void 0===e[t]?A():u[t](e[t]))}))}function M(e,n){return null!==t.brushedColor?h.brushed.strokeStyle=d3.functor(t.brushedColor)(e,n):h.brushed.strokeStyle=d3.functor(t.color)(e,n),y(e,h.brushed)}function P(e,n){return h.foreground.strokeStyle=d3.functor(t.color)(e,n),y(e,h.foreground)}function S(e,n){return h.highlight.strokeStyle=d3.functor(t.color)(e,n),y(e,h.highlight)}function k(e){r.svg.selectAll(".dimension");r.flip(e),d3.select(this.parentElement).transition().duration(1100).call(d.scale(u[e])),r.render()}function D(){var e=d3.event.deltaY;e=(e=e<0?-5:e)>0?5:e,t.dimensionTitleRotation+=e,r.svg.selectAll("text.label").attr("transform","translate(0,-5) rotate("+t.dimensionTitleRotation+")"),d3.event.preventDefault()}function N(e){return e in t.dimensionTitles?t.dimensionTitles[e]:e}r.renderBrushed.queue=function(){p()?b(t.brushed):b([])},r.shadows=function(){return s.shadows=!0,r.alphaOnBrushed(.1),r.render(),this},r.axisDots=function(e){e=e||.1;var n=r.ctx.marks,i=2*Math.PI;return n.globalAlpha=d3.min([1/Math.pow(t.data.length,.5),1]),t.data.forEach((function(r){t.dimensions.map((function(t,a){n.beginPath(),n.arc(R(t),u[t](r[t]),e,0,i),n.stroke(),n.fill()}))})),this},r.clear=function(e){return h[e].clearRect(0,0,a()+2,o()+2),"brushed"===e&&p()&&(h.brushed.fillStyle=r.selection.style("background-color"),h.brushed.globalAlpha=1-t.alphaOnBrushed,h.brushed.fillRect(0,0,a()+2,o()+2),h.brushed.globalAlpha=t.alpha),this},d3.rebind(r,d,"ticks","orient","tickValues","tickSubdivide","tickSize","tickPadding","tickFormat"),r.createAxes=function(){return n&&r.removeAxes(),(n=r.svg.selectAll(".dimension").data(t.dimensions,(function(e){return e})).enter().append("svg:g").attr("class","dimension").attr("transform",(function(e){return"translate("+l(e)+")"}))).append("svg:g").attr("class","axis").attr("transform","translate(0,0)").each((function(e){d3.select(this).call(d.scale(u[e]))})).append("svg:text").attr({"text-anchor":"middle",y:0,transform:"translate(0,-5) rotate("+t.dimensionTitleRotation+")",x:0,class:"label"}).text(N).on("dblclick",k).on("wheel",D),"top"==t.nullValueSeparator?r.svg.append("line").attr("x1",0).attr("y1",1+t.nullValueSeparatorPadding.top).attr("x2",a()).attr("y2",1+t.nullValueSeparatorPadding.top).attr("stroke-width",1).attr("stroke","#777").attr("fill","none").attr("shape-rendering","crispEdges"):"bottom"==t.nullValueSeparator&&r.svg.append("line").attr("x1",0).attr("y1",o()+1-t.nullValueSeparatorPadding.bottom).attr("x2",a()).attr("y2",o()+1-t.nullValueSeparatorPadding.bottom).attr("stroke-width",1).attr("stroke","#777").attr("fill","none").attr("shape-rendering","crispEdges"),s.axes=!0,this},r.removeAxes=function(){return n.remove(),this},r.updateAxes=function(){var e=r.svg.selectAll(".dimension").data(t.dimensions);if(e.enter().append("svg:g").attr("class","dimension").attr("transform",(function(e){return"translate("+R(e)+")"})).style("opacity",0).append("svg:g").attr("class","axis").attr("transform","translate(0,0)").each((function(e){d3.select(this).call(d.scale(u[e]))})).append("svg:text").attr({"text-anchor":"middle",y:0,transform:"translate(0,-5) rotate("+t.dimensionTitleRotation+")",x:0,class:"label"}).text(N).on("dblclick",k).on("wheel",D),e.attr("opacity",0),e.select(".axis").transition().duration(1100).each((function(e){d3.select(this).call(d.scale(u[e]))})),e.select(".label").transition().duration(1100).text(N).attr("transform","translate(0,-5) rotate("+t.dimensionTitleRotation+")"),e.exit().remove(),(n=r.svg.selectAll(".dimension")).transition().duration(1100).attr("transform",(function(e){return"translate("+R(e)+")"})).style("opacity",1),r.svg.selectAll(".axis").transition().duration(1100).each((function(e){d3.select(this).call(d.scale(u[e]))})),s.brushable&&r.brushable(),s.reorderable&&r.reorderable(),"None"!==r.brushMode()){var i=r.brushMode();r.brushMode("None"),r.brushMode(i)}return this},r.reorderable=function(){return n||r.createAxes(),n.style("cursor","move").call(d3.behavior.drag().on("dragstart",(function(e){c[e]=this.__origin__=l(e)})).on("drag",(function(e){c[e]=Math.min(a(),Math.max(0,this.__origin__+=d3.event.dx)),t.dimensions.sort((function(e,t){return R(e)-R(t)})),l.domain(t.dimensions),r.render(),n.attr("transform",(function(e){return"translate("+R(e)+")"}))})).on("dragend",(function(e){for(var n=0,a=t.dimensions.indexOf(e),o=this,s=this.parentElement;null!=(o=o.previousElementSibling);)++n;n!==a&&(i.axesreorder.call(r,t.dimensions),n>a?s.insertBefore(this,s.children[a-1]):a+1<s.children.length?s.insertBefore(this,s.children[a+1]):s.appendChild(this)),delete this.__origin__,delete c[e],d3.select(this).transition().attr("transform","translate("+l(e)+")"),r.render()}))),s.reorderable=!0,this},r.reorder=function(e){var i=t.dimensions.slice(0);t.dimensions.sort((function(t,n){var r=u[t](e[t])-u[n](e[n]);return 0===r?t.localeCompare(n):r}));var a=!1;if(i.some((function(e,n){return a=e!==t.dimensions[n]})),a){l.domain(t.dimensions);var o=t.highlighted.slice(0);r.unhighlight(),n.transition().duration(1500).attr("transform",(function(e){return"translate("+l(e)+")"})),r.render(),0!==o.length&&r.highlight(o)}},r.adjacent_pairs=function(e){for(var t=[],n=0;n<e.length-1;n++)t.push([e[n],e[n+1]]);return t};var O={modes:{None:{install:function(e){},uninstall:function(e){},selected:function(){return[]},brushState:function(){return{}}}},mode:"None",predicate:"AND",currentMode:function(){return this.modes[this.mode]}};function E(e){t.brushed=e,i.brush.call(r,t.brushed),r.renderBrushed()}function C(e){if(!arguments.length)return O.predicate;if("AND"!==(e=String(e).toUpperCase())&&"OR"!==e)throw"Invalid predicate "+e;return O.predicate=e,t.brushed=O.currentMode().selected(),r.renderBrushed(),r}function R(e){var t=c[e];return null==t?l(e):t}return r.brushModes=function(){return Object.getOwnPropertyNames(O.modes)},r.brushMode=function(e){if(0===arguments.length)return O.mode;if(-1===r.brushModes().indexOf(e))throw"pc.brushmode: Unsupported brush mode: "+e;return e!==O.mode&&("None"!==O.mode&&r.brushReset(),O.modes[O.mode].uninstall(r),O.mode=e,O.modes[O.mode].install(),"None"===e?delete r.brushPredicate:r.brushPredicate=C),r},function(){var e={};function a(t){return!e[t].empty()}function o(){var n=t.dimensions.filter(a),r=n.map((function(t){return e[t].extent()}));if(0===n.length)return t.data;var i={date:function(e,t,n){return"function"==typeof u[t].rangePoints?r[n][0]<=u[t](e[t])&&u[t](e[t])<=r[n][1]:r[n][0]<=e[t]&&e[t]<=r[n][1]},number:function(e,t,n){return"function"==typeof u[t].rangePoints?r[n][0]<=u[t](e[t])&&u[t](e[t])<=r[n][1]:r[n][0]<=e[t]&&e[t]<=r[n][1]},string:function(e,t,n){return r[n][0]<=u[t](e[t])&&u[t](e[t])<=r[n][1]}};return t.data.filter((function(e){switch(O.predicate){case"AND":return n.every((function(n,r){return i[t.types[n]](e,n,r)}));case"OR":return n.some((function(n,r){return i[t.types[n]](e,n,r)}));default:throw"Unknown brush predicate "+t.brushPredicate}}))}function s(i){if(void 0===i){i={};return t.dimensions.forEach((function(t){var n=e[t];if(void 0!==n&&!n.empty()){var r=n.extent();r.sort(d3.ascending),i[t]=r}})),i}var a={};n.selectAll(".brush").each((function(e){a[e]=d3.select(this)})),t.dimensions.forEach((function(t){if(void 0!==i[t]){var n=e[t];void 0!==n&&(n.extent(i[t]),n(a[t]),n.event(a[t]))}})),r.renderBrushed()}function l(i){return t.brushed=!1,n&&(n.selectAll(".brush").each((function(t){d3.select(this).call(e[t].clear())})),r.renderBrushed()),this}O.modes["1D-axes"]={install:function(){return n||r.createAxes(),n.append("svg:g").attr("class","brush").each((function(n){d3.select(this).call(function(n){var a=d3.svg.brush();return a.y(u[n]).on("brushstart",(function(){null!==d3.event.sourceEvent&&d3.event.sourceEvent.stopPropagation()})).on("brush",(function(){E(o())})).on("brushend",(function(){i.brushend.call(r,t.brushed)})),e[n]=a,a}(n))})).selectAll("rect").style("visibility",null).attr("x",-15).attr("width",30),r.brushExtents=s,r.brushReset=l,r},uninstall:function(){n.selectAll(".brush").remove(),e={},delete r.brushExtents,delete r.brushReset},selected:o,brushState:s}}(),function(){var e,n={};function s(){return function(){var r,i,a=d3.mouse(e[0][0]);a[0]=a[0]-t.margin.left,a[1]=a[1]-t.margin.top,i={p1:a,dims:r=function(e){var n={i:-1,left:void 0,right:void 0};return t.dimensions.some((function(r,i){if(l(r)<e[0]){var a=t.dimensions[i+1];return n.i=i,n.left=r,n.right=a,!1}return!0})),void 0===n.left?(n.i=0,n.left=t.dimensions[0],n.right=t.dimensions[1]):void 0===n.right&&(n.i=t.dimensions.length-1,n.right=n.left,n.left=t.dimensions[t.dimensions.length-2]),n}(a),minX:l(r.left),maxX:l(r.right),minY:0,maxY:o()},n[r.i]=i,n.active=r.i,i.p1[0]=Math.min(Math.max(i.minX,a[0]),i.maxX),i.p2=i.p1.slice()}}function c(){return function(){var e=d3.event,i=n[n.active];i.p2[0]=Math.min(Math.max(i.minX+1,e.x-t.margin.left),i.maxX),i.p2[1]=Math.min(Math.max(i.minY,e.y-t.margin.top),i.maxY),function e(t,n){var i=r.selection.select("svg").select("g#strums"),a=t.dims.i,o=[t.p1,t.p2],s=i.selectAll("line#strum-"+a).data([t]),l=i.selectAll("circle#strum-"+a).data(o),u=d3.behavior.drag();s.enter().append("line").attr("id","strum-"+a).attr("class","strum"),s.attr("x1",(function(e){return e.p1[0]})).attr("y1",(function(e){return e.p1[1]})).attr("x2",(function(e){return e.p2[0]})).attr("y2",(function(e){return e.p2[1]})).attr("stroke","black").attr("stroke-width",2),u.on("drag",(function(n,r){var i=d3.event;t["p"+(r+=1)][0]=Math.min(Math.max(t.minX+1,i.x),t.maxX),t["p"+r][1]=Math.min(Math.max(t.minY,i.y),t.maxY),e(t,r-1)})).on("dragend",f()),l.enter().append("circle").attr("id","strum-"+a).attr("class","strum"),l.attr("cx",(function(e){return e[0]})).attr("cy",(function(e){return e[1]})).attr("r",5).style("opacity",(function(e,t){return void 0!==n&&t===n?.8:0})).on("mouseover",(function(){d3.select(this).style("opacity",.8)})).on("mouseout",(function(){d3.select(this).style("opacity",0)})).call(u)}(i,1)}}function d(){var e=Object.getOwnPropertyNames(n),r=t.data;function i(e,t){var r=n[t],i=function(e,t){var n=[e.p1[0]-e.minX,e.p1[1]-e.minX],r=[e.p2[0]-e.minX,e.p2[1]-e.minX],i=1-t/n[0],a=n[1]*(1-i),o=1-t/r[0],s=r[1]*(1-o);return function(e){var t=e[0],n=e[1],r=i*t+a,l=o*t+s;return n>Math.min(r,l)&&n<Math.max(r,l)}}(r,n.width(t)),a=r.dims.left,o=r.dims.right,s=u[a],l=u[o];return i([s(e[a])-r.minX,l(e[o])-r.minX])}return 0===(e=e.filter((function(e){return!isNaN(e)}))).length?r:r.filter((function(n){switch(O.predicate){case"AND":return e.every((function(e){return i(n,e)}));case"OR":return e.some((function(e){return i(n,e)}));default:throw"Unknown brush predicate "+t.brushPredicate}}))}function h(){var e=n[n.active],t=r.selection.select("svg").select("g#strums");delete n[n.active],n.active=void 0,t.selectAll("line#strum-"+e.dims.i).remove(),t.selectAll("circle#strum-"+e.dims.i).remove()}function f(){return function(){var e=t.data,a=n[n.active];a&&a.p1[0]===a.p2[0]&&a.p1[1]===a.p2[1]&&h(),e=d(),n.active=void 0,t.brushed=e,r.renderBrushed(),i.brushend.call(r,t.brushed)}}O.modes["2D-strums"]={install:function(){var i=d3.behavior.drag();n.active=void 0,n.width=function(e){var t=n[e];if(void 0!==t)return t.maxX-t.minX},r.on("axesreorder.strums",(function(){var e=Object.getOwnPropertyNames(n).filter((function(e){return!isNaN(e)}));e.length>0&&(e.forEach((function(e){var r,i,a,o=n[e].dims;n.active=e,r=o.left,i=o.right,a=t.dimensions.length,t.dimensions.some((function(e,n){return e===r&&n+n<a&&t.dimensions[n+1]===i}))||h()})),f()())})),r.selection.select("svg").append("g").attr("id","strums").attr("transform","translate("+t.margin.left+","+t.margin.top+")"),r.brushReset=function(e){return function(){Object.getOwnPropertyNames(e).filter((function(e){return!isNaN(e)})).forEach((function(t){e.active=t,h()})),f()()}}(n),i.on("dragstart",s()).on("drag",c()).on("dragend",f()),e=r.selection.select("svg").insert("rect","g#strums").attr("id","strum-events").attr("x",t.margin.left).attr("y",t.margin.top).attr("width",a()).attr("height",o()+2).style("opacity",0).call(i)},uninstall:function(){r.selection.select("svg").select("g#strums").remove(),r.selection.select("svg").select("rect#strum-events").remove(),r.on("axesreorder.strums",void 0),delete r.brushReset,e=void 0},selected:d,brushState:function(){return n}}}(),function(){if("function"==typeof d3.svg.multibrush){var e={};O.modes["1D-axes-multi"]={install:function(){return n||r.createAxes(),n.append("svg:g").attr("class","brush").each((function(n){d3.select(this).call(function(n){var a=d3.svg.multibrush();return a.y(u[n]).on("brushstart",(function(){null!==d3.event.sourceEvent&&d3.event.sourceEvent.stopPropagation()})).on("brush",(function(){E(o())})).on("brushend",(function(){E(o()),i.brushend.call(r,t.brushed)})).extentAdaption((function(e){e.style("visibility",null).attr("x",-15).attr("width",30)})).resizeAdaption((function(e){e.selectAll("rect").attr("x",-15).attr("width",30)})),e[n]=a,a}(n))})).selectAll("rect").style("visibility",null).attr("x",-15).attr("width",30),r.brushExtents=s,r.brushReset=l,r},uninstall:function(){n.selectAll(".brush").remove(),e={},delete r.brushExtents,delete r.brushReset},selected:o,brushState:s}}function a(t){return!e[t].empty()}function o(){var n=t.dimensions.filter(a),r=n.map((function(t){return e[t].extent()}));if(0===n.length)return t.data;var i={date:function(e,t,n,r){return"function"==typeof u[t].rangePoints?r[0]<=u[t](e[t])&&u[t](e[t])<=r[1]:r[0]<=e[t]&&e[t]<=r[1]},number:function(e,t,n,r){return"function"==typeof u[t].rangePoints?r[0]<=u[t](e[t])&&u[t](e[t])<=r[1]:r[0]<=e[t]&&e[t]<=r[1]},string:function(e,t,n,r){return r[0]<=u[t](e[t])&&u[t](e[t])<=r[1]}};return t.data.filter((function(e){switch(O.predicate){case"AND":return n.every((function(n,a){return r[a].some((function(r){return i[t.types[n]](e,n,a,r)}))}));case"OR":return n.some((function(n,a){return r[a].some((function(r){return i[t.types[n]](e,n,a,r)}))}));default:throw"Unknown brush predicate "+t.brushPredicate}}))}function s(){var n={};return t.dimensions.forEach((function(t){var r=e[t];if(void 0!==r&&!r.empty()){var i=r.extent();n[t]=i}})),n}function l(i){return t.brushed=!1,n&&(n.selectAll(".brush").each((function(t){d3.select(this).call(e[t].clear())})),r.renderBrushed()),this}}(),function(){var e,n={};function s(){return function(){var r,i,a=d3.mouse(e[0][0]);a[0]=a[0]-t.margin.left,a[1]=a[1]-t.margin.top,i={p1:a,dims:r=function(e){var n={i:-1,left:void 0,right:void 0};return t.dimensions.some((function(r,i){if(l(r)<e[0]){var a=t.dimensions[i+1];return n.i=i,n.left=r,n.right=a,!1}return!0})),void 0===n.left?(n.i=0,n.left=t.dimensions[0],n.right=t.dimensions[1]):void 0===n.right&&(n.i=t.dimensions.length-1,n.right=n.left,n.left=t.dimensions[t.dimensions.length-2]),n}(a),minX:l(r.left),maxX:l(r.right),minY:0,maxY:o(),startAngle:void 0,endAngle:void 0,arc:d3.svg.arc().innerRadius(0)},n[r.i]=i,n.active=r.i,i.p1[0]=Math.min(Math.max(i.minX,a[0]),i.maxX),i.p2=i.p1.slice(),i.p3=i.p1.slice()}}function c(){return function(){var e=d3.event,i=n[n.active];i.p2[0]=Math.min(Math.max(i.minX+1,e.x-t.margin.left),i.maxX),i.p2[1]=Math.min(Math.max(i.minY,e.y-t.margin.top),i.maxY),i.p3=i.p2.slice(),function e(t,i){var a=r.selection.select("svg").select("g#arcs"),o=t.dims.i,s=[t.p2,t.p3],l=a.selectAll("line#arc-"+o).data([{p1:t.p1,p2:t.p2},{p1:t.p1,p2:t.p3}]),u=a.selectAll("circle#arc-"+o).data(s),c=d3.behavior.drag(),d=a.selectAll("path#arc-"+o).data([t]);d.enter().append("path").attr("id","arc-"+o).attr("class","arc").style("fill","orange").style("opacity",.5),d.attr("d",t.arc).attr("transform","translate("+t.p1[0]+","+t.p1[1]+")"),l.enter().append("line").attr("id","arc-"+o).attr("class","arc"),l.attr("x1",(function(e){return e.p1[0]})).attr("y1",(function(e){return e.p1[1]})).attr("x2",(function(e){return e.p2[0]})).attr("y2",(function(e){return e.p2[1]})).attr("stroke","black").attr("stroke-width",2),c.on("drag",(function(r,i){var a,s=d3.event;t["p"+(i+=2)][0]=Math.min(Math.max(t.minX+1,s.x),t.maxX),t["p"+i][1]=Math.min(Math.max(t.minY,s.y),t.maxY),a=3===i?n.startAngle(o):n.endAngle(o),(t.startAngle<Math.PI&&t.endAngle<Math.PI&&a<Math.PI||t.startAngle>=Math.PI&&t.endAngle>=Math.PI&&a>=Math.PI)&&(2===i?(t.endAngle=a,t.arc.endAngle(a)):3===i&&(t.startAngle=a,t.arc.startAngle(a))),e(t,i-2)})).on("dragend",p()),u.enter().append("circle").attr("id","arc-"+o).attr("class","arc"),u.attr("cx",(function(e){return e[0]})).attr("cy",(function(e){return e[1]})).attr("r",5).style("opacity",(function(e,t){return void 0!==i&&t===i?.8:0})).on("mouseover",(function(){d3.select(this).style("opacity",.8)})).on("mouseout",(function(){d3.select(this).style("opacity",0)})).call(c)}(i,1)}}function d(e,t){return Math.sqrt(e*e+t*t)}h=Math.PI/180,function(){var e=180/Math.PI}();var h,f=function(e){var t=e;return e>Math.PI?(t=e-1.5*Math.PI,t=e-1.5*Math.PI):(t=e-.5*Math.PI,t=e-.5*Math.PI),-t};function m(){var e=Object.getOwnPropertyNames(n),r=t.data;function i(e,t){var r=n[t],i=function(e){var t=f(e.startAngle),n=f(e.endAngle);if(t>n){var r=t;t=n,n=r}return function(e){return e>=t&&e<=n}}(r),a=r.dims.left,o=r.dims.right,s=u[a],l=u[o],c=n.width(t),h=s(e[a])-l(e[o]),m=d(c,h);return i(Math.asin(h/m))}return 0===(e=e.filter((function(e){return!isNaN(e)}))).length?r:r.filter((function(n){switch(O.predicate){case"AND":return e.every((function(e){return i(n,e)}));case"OR":return e.some((function(e){return i(n,e)}));default:throw"Unknown brush predicate "+t.brushPredicate}}))}function g(){var e=n[n.active],t=r.selection.select("svg").select("g#arcs");delete n[n.active],n.active=void 0,t.selectAll("line#arc-"+e.dims.i).remove(),t.selectAll("circle#arc-"+e.dims.i).remove(),t.selectAll("path#arc-"+e.dims.i).remove()}function p(){return function(){var e=t.data,a=n[n.active];if(a&&a.p1[0]===a.p2[0]&&a.p1[1]===a.p2[1]&&g(),a){var o=n.startAngle(n.active);a.startAngle=o,a.endAngle=o,a.arc.outerRadius(n.length(n.active)).startAngle(o).endAngle(o)}e=m(),n.active=void 0,t.brushed=e,r.renderBrushed(),i.brushend.call(r,t.brushed)}}O.modes.angular={install:function(){var i=d3.behavior.drag();n.active=void 0,n.width=function(e){var t=n[e];if(void 0!==t)return t.maxX-t.minX},angle=function(e,t){var n=e[0]-t[0],r=e[1]-t[1],i=d(n,r);return Math.asin(r/i)},n.endAngle=function(e){var t=n[e];if(void 0!==t){var r=-angle(t.p1,t.p2)+Math.PI/2;return t.p1[0]>t.p2[0]&&(r=2*Math.PI-r),r}},n.startAngle=function(e){var t=n[e];if(void 0!==t){var r=-angle(t.p1,t.p3)+Math.PI/2;return t.p1[0]>t.p3[0]&&(r=2*Math.PI-r),r}},n.length=function(e){var t=n[e];if(void 0!==t)return d(t.p1[0]-t.p2[0],t.p1[1]-t.p2[1])},r.on("axesreorder.arcs",(function(){var e=Object.getOwnPropertyNames(n).filter((function(e){return!isNaN(e)}));e.length>0&&(e.forEach((function(e){var r,i,a,o=n[e].dims;n.active=e,r=o.left,i=o.right,a=t.dimensions.length,t.dimensions.some((function(e,n){return e===r&&n+n<a&&t.dimensions[n+1]===i}))||g()})),p()())})),r.selection.select("svg").append("g").attr("id","arcs").attr("transform","translate("+t.margin.left+","+t.margin.top+")"),r.brushReset=function(e){return function(){Object.getOwnPropertyNames(e).filter((function(e){return!isNaN(e)})).forEach((function(t){e.active=t,g()})),p()()}}(n),i.on("dragstart",s()).on("drag",c()).on("dragend",p()),e=r.selection.select("svg").insert("rect","g#arcs").attr("id","arc-events").attr("x",t.margin.left).attr("y",t.margin.top).attr("width",a()).attr("height",o()+2).style("opacity",0).call(i)},uninstall:function(){r.selection.select("svg").select("g#arcs").remove(),r.selection.select("svg").select("rect#arc-events").remove(),r.on("axesreorder.arcs",void 0),delete r.brushReset,e=void 0},selected:m,brushState:function(){return n}}}(),r.interactive=function(){return s.interactive=!0,this},r.xscale=l,r.yscale=u,r.ctx=h,r.canvas=f,r.g=function(){return n},r.resize=function(){return r.selection.select("svg").attr("width",t.width).attr("height",t.height),r.svg.attr("transform","translate("+t.margin.left+","+t.margin.top+")"),s.brushable&&r.brushReset(),r.autoscale(),n&&r.createAxes(),s.brushable&&r.brushable(),s.reorderable&&r.reorderable(),i.resize.call(this,{width:t.width,height:t.height,margin:t.margin}),this},r.highlight=function(e){return 0===arguments.length?t.highlighted:(t.highlighted=e,r.clear("highlight"),d3.selectAll([f.foreground,f.brushed]).classed("faded",!0),e.forEach(S),i.highlight.call(this,e),this)},r.unhighlight=function(){return t.highlighted=[],r.clear("highlight"),d3.selectAll([f.foreground,f.brushed]).classed("faded",!1),this},r.intersection=function(e,t,n,r){return{x:((e.x*t.y-e.y*t.x)*(n.x-r.x)-(e.x-t.x)*(n.x*r.y-n.y*r.x))/((e.x-t.x)*(n.y-r.y)-(e.y-t.y)*(n.x-r.x)),y:((e.x*t.y-e.y*t.x)*(n.y-r.y)-(e.y-t.y)*(n.x*r.y-n.y*r.x))/((e.x-t.x)*(n.y-r.y)-(e.y-t.y)*(n.x-r.x))}},r.version="0.7.0",r.toString=function(){return"Parallel Coordinates: "+t.dimensions.length+" dimensions ("+d3.keys(t.data[0]).length+" total) , "+t.data.length+" rows"},r};d3.renderQueue=function(e){var t=[],n=10,r=function(){},i=0,a=function e(t){t&&e.data(t),e.invalidate(),r(),e.render()};return a.render=function(){i=0;var r=!0;a.invalidate=function(){r=!1},d3.timer((function(){if(!r)return!0;if(i>t.length)return!0;for(var a=Math.min(i+n,t.length),o=i;o<a;o++)e(t[o],o);i+=n}))},a.data=function(e){return a.invalidate(),t=e.slice(0),a},a.rate=function(e){return arguments.length?(n=e,a):n},a.remaining=function(){return t.length-i},a.clear=function(e){return arguments.length?(r=e,a):(r(),a)},a.invalidate=function(){},a};n(3401),n(3402);const c={data:s.a.arrayOf(s.a.object),width:s.a.number,height:s.a.number,colorMetric:s.a.string,includeSeries:s.a.bool,linearColorScheme:s.a.string,metrics:s.a.arrayOf(s.a.string),series:s.a.string,showDatatable:s.a.bool};function d(e,t){const{data:n,width:r,height:i,colorMetric:o,includeSeries:s,linearColorScheme:c,metrics:d,series:h,showDatatable:f}=t,m=s?[h].concat(d):d,g={};g[h]="string",d.forEach(e=>{g[e]="number"});const p=o?Object(l.a)().get(c).createLinearScale(a.a.extent(n,e=>e[o])):()=>"grey",v=a.a.select(e).classed("superset-legacy-chart-parallel-coordinates",!0);v.selectAll("*").remove();const b=f?i/2:i,x=v.append("div").style("height",b+"px").classed("parcoords",!0),y=u()(x.node()).width(r).color(e=>p(e[o])).alpha(.5).composite("darken").height(b).data(n).dimensions(m).types(g).render().createAxes().shadows().reorderable().brushMode("1D-axes");if(f){const e=(A=[],(w=function e(t){0==A.length&&(A=d3.keys(t.data()[0][0])),t.selectAll(".header").data([!0]).enter().append("div").attr("class","header");var n=t.select(".header").selectAll(".cell").data(A);n.enter().append("div").attr("class",(function(e,t){return"col-"+t})).classed("cell",!0),t.selectAll(".header .cell").text((function(e){return e})),n.exit().remove();var r=t.selectAll(".row").data((function(e){return e}));r.enter().append("div").attr("class","row"),r.exit().remove();var i=t.selectAll(".row").selectAll(".cell").data((function(e){return A.map((function(t){return e[t]}))}));return i.enter().append("div").attr("class",(function(e,t){return"col-"+t})).classed("cell",!0),i.exit().remove(),t.selectAll(".cell").text((function(e){return e})),e}).columns=function(e){return arguments.length?(A=e,this):A},w);v.append("div").style("height",b+"px").datum(n).call(e).classed("parcoords grid",!0).selectAll(".row").on({mouseover(e){y.highlight([e])},mouseout:y.unhighlight}),y.on("brush",t=>{a.a.select(".grid").datum(t).call(e).selectAll(".row").on({mouseover(e){y.highlight([e])},mouseout:y.unhighlight})})}var A,w}d.displayName="ParallelCoordinates",d.propTypes=c;var h=d;t.default=Object(r.a)(h)}}]);