"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9885],{79885:(t,e,r)=>{r.r(e),r.d(e,{default:()=>g});var n=r(73834),s=r(15078),a=r.n(s),o=r(45697),l=r.n(o),i=r(50855),c=r(67542),p=r(84145);const d={data:l().arrayOf(l().shape({country_id:l().string,metric:l().number})),width:l().number,height:l().number,country:l().string,linearColorScheme:l().string,mapBaseUrl:l().string,numberFormat:l().string},u={};function f(t,e){const{data:r,width:n,height:s,country:o,linearColorScheme:l,numberFormat:d}=e,f=t,h=(0,i.JB)(d),g=(0,c.Z)().get(l).createLinearScale(function(t,e){let r,n;if(void 0===e)for(const e of t)null!=e&&(void 0===r?e>=e&&(r=n=e):(r>e&&(r=e),n<e&&(n=e)));else{let s=-1;for(let a of t)null!=(a=e(a,++s))&&(void 0===r?a>=a&&(r=n=a):(r>a&&(r=a),n<a&&(n=a)))}return[r,n]}(r,(t=>t.metric))),m={};r.forEach((t=>{m[t.country_id]=g(t.metric)}));const y=t=>m[t.properties.ISO]||"none",b=a().geo.path(),v=a().select(f);v.classed("superset-legacy-chart-country-map",!0),v.selectAll("*").remove(),f.style.height=`${s}px`,f.style.width=`${n}px`;const x=v.append("svg:svg").attr("width",n).attr("height",s).attr("preserveAspectRatio","xMidYMid meet"),$=x.append("rect").attr("class","background").attr("width",n).attr("height",s),k=x.append("g"),w=k.append("g").classed("map-layer",!0),C=k.append("g").classed("text-layer",!0).attr("transform",`translate(${n/2}, 45)`),S=C.append("text").classed("big-text",!0),_=C.append("text").classed("result-text",!0).attr("dy","1em");let A;const M=function(t){const e=t&&A!==t;let r,a,o;const l=n/2,i=s/2;if(e){const e=b.centroid(t);[r,a]=e,o=4,A=t}else r=l,a=i,o=1,A=null;k.transition().duration(750).attr("transform",`translate(${l},${i})scale(${o})translate(${-r},${-a})`),C.style("opacity",0).attr("transform",`translate(0,0)translate(${r},${e?a-5:45})`).transition().duration(750).style("opacity",1),S.transition().duration(750).style("font-size",e?6:16),_.transition().duration(750).style("font-size",e?16:24)};$.on("click",M);const O=function(t){let e=y(t);"none"!==e&&(e=a().rgb(e).darker().toString()),a().select(this).style("fill",e),function(t){let e="";t&&t.properties&&(e=t.properties.ID_2?t.properties.NAME_2:t.properties.NAME_1),S.text(e)}(t);const n=r.filter((e=>e.country_id===t.properties.ISO));var s;(s=n).length>0&&_.text(h(s[0].metric))},E=function(){a().select(this).style("fill",y),S.text(""),_.text("")};function I(t){const{features:e}=t,r=a().geo.centroid(t),o=a().geo.mercator().scale(100).center(r).translate([n/2,s/2]);b.projection(o);const l=b.bounds(t),i=100*n/(l[1][0]-l[0][0]),c=100*s/(l[1][1]-l[0][1]),p=i<c?i:c;o.scale(p);const d=b.bounds(t);o.translate([n-(d[0][0]+d[1][0])/2,s-(d[0][1]+d[1][1])/2]),w.selectAll("path").data(e).enter().append("path").attr("d",b).attr("class","region").attr("vector-effect","non-scaling-stroke").style("fill",y).on("mouseenter",O).on("mouseout",E).on("click",M)}const N=u[o];if(N)I(N);else{const e=p.ZP[o];a().json(e,((e,r)=>{if(e){var n;const e=(null==(n=p.O$.find((t=>t[0]===o)))?void 0:n[1])||o;a().select(t).html(`<div class="alert alert-danger">Could not load map data for ${e}</div>`)}else u[o]=r,I(r)}))}}f.displayName="CountryMap",f.propTypes=d;const h=f,g=(0,n.Z)(h)}}]);