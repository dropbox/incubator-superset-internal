"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4214],{84214:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x}),r(67294);var a=r(73834),s=r(37840),o=r(45697),c=r.n(o),n=r(15078),d=r.n(n),i=r(50855),l=r(83527);const p={data:c().shape({matrix:c().arrayOf(c().arrayOf(c().number)),nodes:c().arrayOf(c().string)}),width:c().number,height:c().number,colorScheme:c().string,numberFormat:c().string};function h(e,t){const{data:r,width:a,height:s,numberFormat:o,colorScheme:c}=t;e.innerHTML="";const n=d().select(e);n.classed("superset-legacy-chart-chord",!0);const{nodes:p,matrix:h}=r,u=(0,i.JB)(o),g=l.getScale(c),m=Math.min(a,s)/2-10,f=m-24;let x;const v=d().svg.arc().innerRadius(f).outerRadius(m),y=d().layout.chord().padding(.04).sortSubgroups(d().descending).sortChords(d().descending),$=d().svg.chord().radius(f),b=n.append("svg").attr("width",a).attr("height",s).on("mouseout",(()=>x.classed("fade",!1))).append("g").attr("id","circle").attr("transform",`translate(${a/2}, ${s/2})`);b.append("circle").attr("r",m),y.matrix(h);const k=b.selectAll(".group").data(y.groups).enter().append("g").attr("class","group").on("mouseover",((e,t)=>{x.classed("fade",(e=>e.source.index!==t&&e.target.index!==t))}));k.append("title").text(((e,t)=>`${p[t]}: ${u(e.value)}`));const T=k.append("path").attr("id",((e,t)=>`group${t}`)).attr("d",v).style("fill",((e,t)=>g(p[t]))),w=k.append("text").attr("x",6).attr("dy",15);w.append("textPath").attr("xlink:href",((e,t)=>`#group${t}`)).text(((e,t)=>p[t])),w.filter((function(e,t){return T[0][t].getTotalLength()/2-16<this.getComputedTextLength()})).remove(),x=b.selectAll(".chord").data(y.chords).enter().append("path").attr("class","chord").on("mouseover",(e=>{x.classed("fade",(t=>t!==e))})).style("fill",(e=>g(p[e.source.index]))).attr("d",$),x.append("title").text((e=>`${p[e.source.index]} → ${p[e.target.index]}: ${u(e.source.value)}\n${p[e.target.index]} → ${p[e.source.index]}: ${u(e.target.value)}`))}h.displayName="Chord",h.propTypes=p;const u=h;var g=r(11965);const m=(0,a.Z)(u),f=({className:e,...t})=>(0,g.tZ)("div",{className:e},(0,g.tZ)(m,t));f.defaultProps={otherProps:{}},f.propTypes={className:c().string.isRequired,otherProps:c().objectOf(c().any)};const x=(0,s.iK)(f)`
  .superset-legacy-chart-chord svg #circle circle {
    fill: none;
    pointer-events: all;
  }
  .superset-legacy-chart-chord svg .group path {
    fill-opacity: 0.6;
  }
  .superset-legacy-chart-chord svg path.chord {
    stroke: #000;
    stroke-width: 0.25px;
  }
  .superset-legacy-chart-chord svg #circle:hover path.fade {
    opacity: 0.2;
  }
`}}]);