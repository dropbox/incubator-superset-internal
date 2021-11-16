"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5859],{65859:(t,e,n)=>{n.r(e),n.d(e,{default:()=>b}),n(67294);var r=n(73834),o=n(37840),a=n(45697),s=n.n(a),i=n(15078),c=n.n(i),u=n(4065),l=n(31654),f=n(73626);var d=n(50855),h=n(63758),p=n(83527),y=n(84874);const g={data:s().arrayOf(s().shape({source:s().string,target:s().string,value:s().number})),width:s().number,height:s().number,colorScheme:s().string},m=(0,d.JB)(h.Z.FLOAT);function v(t,e){const{data:n,width:r,height:o,colorScheme:a}=e,s=c().select(t);s.classed("superset-legacy-chart-sankey",!0);const i=r-5-5,d=o-5-5;s.selectAll("*").remove();const h=s.append("div").attr("class","sankey-tooltip").style("opacity",0),g=s.append("svg").attr("width",i+5+5).attr("height",d+5+5).append("g").attr("transform","translate(5,5)"),v=p.getScale(a),k=function(){var t={},e=24,n=8,r=[1,1],o=[],a=[];function s(){function t(t,e){return t.source.y-e.source.y}function e(t,e){return t.target.y-e.target.y}o.forEach((function(n){n.sourceLinks.sort(e),n.targetLinks.sort(t)})),o.forEach((function(t){var e=0,n=0;t.sourceLinks.forEach((function(t){t.sy=e,e+=t.dy})),t.targetLinks.forEach((function(t){t.ty=n,n+=t.dy}))}))}function i(t){return t.y+t.dy/2}function c(t){return t.value}return t.nodeWidth=function(n){return arguments.length?(e=+n,t):e},t.nodePadding=function(e){return arguments.length?(n=+e,t):n},t.nodes=function(e){return arguments.length?(o=e,t):o},t.links=function(e){return arguments.length?(a=e,t):a},t.size=function(e){return arguments.length?(r=e,t):r},t.layout=function(f){return o.forEach((function(t){t.sourceLinks=[],t.targetLinks=[]})),a.forEach((function(t){var e=t.source,n=t.target;"number"==typeof e&&(e=t.source=o[t.source]),"number"==typeof n&&(n=t.target=o[t.target]),e.sourceLinks.push(t),n.targetLinks.push(t)})),o.forEach((function(t){t.value=Math.max((0,u.sum)(t.sourceLinks,c),(0,u.sum)(t.targetLinks,c))})),function(){for(var t,n,a=o,s=0;a.length;)t=[],a.forEach((function(n){n.x=s,n.dx=e,n.sourceLinks.forEach((function(e){t.indexOf(e.target)<0&&t.push(e.target)}))})),a=t,++s;(function(t){o.forEach((function(e){e.sourceLinks.length||(e.x=t-1)}))})(s),n=(r[0]-e)/(s-1),o.forEach((function(t){t.x*=n}))}(),function(t){var e,s=(0,l.b1)().key((function(t){return t.x})).sortKeys(u.ascending).entries(o).map((function(t){return t.values}));e=(0,u.min)(s,(function(t){return(r[1]-(t.length-1)*n)/(0,u.sum)(t,c)})),s.forEach((function(t){t.forEach((function(t,n){t.y=n,t.dy=t.value*e}))})),a.forEach((function(t){t.dy=t.value*e})),p();for(var f=1;t>0;--t)h(f*=.99),p(),d(f),p();function d(t){function e(t){return i(t.source)*t.value}s.forEach((function(n){n.forEach((function(n){if(n.targetLinks.length){var r=(0,u.sum)(n.targetLinks,e)/(0,u.sum)(n.targetLinks,c);n.y+=(r-i(n))*t}}))}))}function h(t){function e(t){return i(t.target)*t.value}s.slice().reverse().forEach((function(n){n.forEach((function(n){if(n.sourceLinks.length){var r=(0,u.sum)(n.sourceLinks,e)/(0,u.sum)(n.sourceLinks,c);n.y+=(r-i(n))*t}}))}))}function p(){s.forEach((function(t){var e,o,a,s=0,i=t.length;for(t.sort(y),a=0;a<i;++a)(o=s-(e=t[a]).y)>0&&(e.y+=o),s=e.y+e.dy+n;if((o=s-n-r[1])>0)for(s=e.y-=o,a=i-2;a>=0;--a)(o=(e=t[a]).y+e.dy+n-s)>0&&(e.y-=o),s=e.y}))}function y(t,e){return t.y-e.y}}(f),s(),t},t.relayout=function(){return s(),t},t.link=function(){var t=.5;function e(e){var n=e.source.x+e.source.dx,r=e.target.x,o=(0,f.Z)(n,r),a=o(t),s=o(1-t),i=e.source.y+e.sy+e.dy/2,c=e.target.y+e.ty+e.dy/2;return"M"+n+","+i+"C"+a+","+i+" "+s+","+c+" "+r+","+c}return e.curvature=function(n){return arguments.length?(t=+n,e):t},e},t}().nodeWidth(15).nodePadding(10).size([i,d]),x=k.link();let E={};const L=n.map((t=>{const e={...t};return e.source=E[e.source]||(E[e.source]={name:e.source}),e.target=E[e.target]||(E[e.target]={name:e.target}),e.value=Number(e.value),e}));function b(t){h.html((()=>function(t){let e;if(t.sourceLinks)e=`${t.name} Value: <span class='emph'>${m(t.value)}</span>`;else{const n=m(t.value),r=c().round(t.value/t.source.value*100,1),o=c().round(t.value/t.target.value*100,1);e=["<div class=''>Path Value: <span class='emph'>",n,"</span></div>","<div class='percents'>","<span class='emph'>",Number.isFinite(r)?r:"100","%</span> of ",t.source.name,"<br/>",`<span class='emph'>${Number.isFinite(o)?o:"--"}%</span> of `,t.target.name,"</div>"].join("")}return e}(t))).transition().duration(200);const{height:e,width:n}=h.node().getBoundingClientRect();h.style("left",`${Math.min(c().event.offsetX+10,r-n)}px`).style("top",`${Math.min(c().event.offsetY+10,o-e)}px`).style("position","absolute").style("opacity",.95)}function w(){h.transition().duration(100).style("opacity",0)}E=c().values(E),k.nodes(E).links(L).layout(32);const $=g.append("g").selectAll(".link").data(L).enter().append("path").attr("class","link").attr("d",x).style("stroke-width",(t=>Math.max(1,t.dy))).sort(((t,e)=>e.dy-t.dy)).on("mouseover",b).on("mouseout",w);function N(){const t=s.selectAll(".node")[0]??[],e=(0,y.Ce)(t);t.forEach((t=>{const n=t.getElementsByTagName("text")[0];n&&(e.includes(t)?n.classList.add("opacity-0"):n.classList.remove("opacity-0"))}))}const M=g.append("g").selectAll(".node").data(E).enter().append("g").attr("class","node").attr("transform",(t=>`translate(${t.x},${t.y})`)).call(c().behavior.drag().origin((t=>t)).on("dragstart",(function(){this.parentNode.append(this)})).on("drag",(function(t){c().select(this).attr("transform",`translate(${t.x},${t.y=Math.max(0,Math.min(o-t.dy,c().event.y))})`),k.relayout(),$.attr("d",x)})).on("dragend",N));M.append("rect").attr("height",(t=>t.dy>5?t.dy:5)).attr("width",k.nodeWidth()).style("fill",(t=>{const e=t.name||"N/A";return t.color=v(e.replace(/ .*/,"")),t.color})).style("stroke",(t=>c().rgb(t.color).darker(2))).on("mouseover",b).on("mouseout",w),M.append("text").attr("x",-6).attr("y",(t=>t.dy/2)).attr("dy",".35em").attr("text-anchor","end").attr("transform",null).text((t=>t.name)).attr("class","opacity-0").filter((t=>t.x<i/2)).attr("x",6+k.nodeWidth()).attr("text-anchor","start"),N()}v.displayName="Sankey",v.propTypes=g;const k=v;var x=n(11965);const E=(0,r.Z)(k),L=({className:t,...e})=>(0,x.tZ)("div",{className:t},(0,x.tZ)(E,e));L.propTypes={className:s().string.isRequired};const b=(0,o.iK)(L)`
  .superset-legacy-chart-sankey {
    .node {
      rect {
        cursor: move;
        fill-opacity: 0.9;
        shape-rendering: crispEdges;
      }
      text {
        pointer-events: none;
        text-shadow: 0 1px 0 #fff;
        font-size: ${({fontSize:t})=>t}em;
      }
    }
    .link {
      fill: none;
      stroke: #000;
      stroke-opacity: 0.2;
      &:hover {
        stroke-opacity: 0.5;
      }
    }
    .opacity-0 {
      opacity: 0;
    }
  }
  .sankey-tooltip {
    position: absolute;
    width: auto;
    background: #ddd;
    padding: 10px;
    font-size: ${({fontSize:t})=>t}em;
    font-weight: ${({theme:t})=>t.typography.weights.light};
    color: #000;
    border: 1px solid #fff;
    text-align: center;
    pointer-events: none;
  }
`}}]);