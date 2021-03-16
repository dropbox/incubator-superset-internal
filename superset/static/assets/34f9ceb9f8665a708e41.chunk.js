(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{4918:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(808),s=n(51),c=n(2),i=n.n(c),u=n(179),l=n.n(u),f=n(167),d=n(819),p=n(185),y=function(){var t={},e=24,n=8,a=[1,1],r=[],o=[];function s(){function t(t,e){return t.source.y-e.source.y}function e(t,e){return t.target.y-e.target.y}r.forEach((function(n){n.sourceLinks.sort(e),n.targetLinks.sort(t)})),r.forEach((function(t){var e=0,n=0;t.sourceLinks.forEach((function(t){t.sy=e,e+=t.dy})),t.targetLinks.forEach((function(t){t.ty=n,n+=t.dy}))}))}function c(t){return t.y+t.dy/2}function i(t){return t.value}return t.nodeWidth=function(n){return arguments.length?(e=+n,t):e},t.nodePadding=function(e){return arguments.length?(n=+e,t):n},t.nodes=function(e){return arguments.length?(r=e,t):r},t.links=function(e){return arguments.length?(o=e,t):o},t.size=function(e){return arguments.length?(a=e,t):a},t.layout=function(u){return r.forEach((function(t){t.sourceLinks=[],t.targetLinks=[]})),o.forEach((function(t){var e=t.source,n=t.target;"number"==typeof e&&(e=t.source=r[t.source]),"number"==typeof n&&(n=t.target=r[t.target]),e.sourceLinks.push(t),n.targetLinks.push(t)})),r.forEach((function(t){t.value=Math.max(Object(f.sum)(t.sourceLinks,i),Object(f.sum)(t.targetLinks,i))})),function(){var t,n=r,o=0;for(;n.length;)t=[],n.forEach((function(n){n.x=o,n.dx=e,n.sourceLinks.forEach((function(e){t.indexOf(e.target)<0&&t.push(e.target)}))})),n=t,++o;(function(t){r.forEach((function(e){e.sourceLinks.length||(e.x=t-1)}))})(o),s=(a[0]-e)/(o-1),r.forEach((function(t){t.x*=s}));var s}(),function(t){var e=Object(d.b)().key((function(t){return t.x})).sortKeys(f.ascending).entries(r).map((function(t){return t.values}));s=Object(f.min)(e,(function(t){return(a[1]-(t.length-1)*n)/Object(f.sum)(t,i)})),e.forEach((function(t){t.forEach((function(t,e){t.y=e,t.dy=t.value*s}))})),o.forEach((function(t){t.dy=t.value*s})),y();var s;for(var u=1;t>0;--t)p(u*=.99),y(),l(u),y();function l(t){function n(t){return c(t.source)*t.value}e.forEach((function(e){e.forEach((function(e){if(e.targetLinks.length){var a=Object(f.sum)(e.targetLinks,n)/Object(f.sum)(e.targetLinks,i);e.y+=(a-c(e))*t}}))}))}function p(t){function n(t){return c(t.target)*t.value}e.slice().reverse().forEach((function(e){e.forEach((function(e){if(e.sourceLinks.length){var a=Object(f.sum)(e.sourceLinks,n)/Object(f.sum)(e.sourceLinks,i);e.y+=(a-c(e))*t}}))}))}function y(){e.forEach((function(t){var e,r,o,s=0,c=t.length;for(t.sort(h),o=0;o<c;++o)(r=s-(e=t[o]).y)>0&&(e.y+=r),s=e.y+e.dy+n;if((r=s-n-a[1])>0)for(s=e.y-=r,o=c-2;o>=0;--o)(r=(e=t[o]).y+e.dy+n-s)>0&&(e.y-=r),s=e.y}))}function h(t,e){return t.y-e.y}}(u),s(),t},t.relayout=function(){return s(),t},t.link=function(){var t=.5;function e(e){var n=e.source.x+e.source.dx,a=e.target.x,r=Object(p.c)(n,a),o=r(t),s=r(1-t),c=e.source.y+e.sy+e.dy/2,i=e.target.y+e.ty+e.dy/2;return"M"+n+","+c+"C"+o+","+c+" "+s+","+i+" "+a+","+i}return e.curvature=function(n){return arguments.length?(t=+n,e):t},e},t},h=n(223),g=n(107),m=n(813),v=n(821);const k={data:i.a.arrayOf(i.a.shape({source:i.a.string,target:i.a.string,value:i.a.number})),width:i.a.number,height:i.a.number,colorScheme:i.a.string},b=Object(h.c)(g.a.FLOAT);function x(t,e){const{data:n,width:a,height:r,colorScheme:o}=e,s=l.a.select(t);s.classed("superset-legacy-chart-sankey",!0);const c=5,i=5,u=5,f=5,d=a-f-i,p=r-c-u;s.selectAll("*").remove();const h=s.append("div").attr("class","sankey-tooltip").style("opacity",0),g=s.append("svg").attr("width",d+f+i).attr("height",p+c+u).append("g").attr("transform",`translate(${f},${c})`),k=m.b.getScale(o),x=y().nodeWidth(15).nodePadding(10).size([d,p]),E=x.link();let L={};const O=n.map(t=>{const e={...t};return e.source=L[e.source]||(L[e.source]={name:e.source}),e.target=L[e.target]||(L[e.target]={name:e.target}),e.value=Number(e.value),e});function j(t){h.html(()=>function(t){let e;if(t.sourceLinks)e=`${t.name} Value: <span class='emph'>${b(t.value)}</span>`;else{const n=b(t.value),a=l.a.round(t.value/t.source.value*100,1),r=l.a.round(t.value/t.target.value*100,1);e=["<div class=''>Path Value: <span class='emph'>",n,"</span></div>","<div class='percents'>","<span class='emph'>",Number.isFinite(a)?a:"100","%</span> of ",t.source.name,"<br/>",`<span class='emph'>${Number.isFinite(r)?r:"--"}%</span> of `,t.target.name,"</div>"].join("")}return e}(t)).transition().duration(200).style("left",`${l.a.event.offsetX+10}px`).style("top",`${l.a.event.offsetY+10}px`).style("position","absolute").style("opacity",.95)}function w(){h.transition().duration(100).style("opacity",0)}L=l.a.values(L),x.nodes(L).links(O).layout(32);const $=g.append("g").selectAll(".link").data(O).enter().append("path").attr("class","link").attr("d",E).style("stroke-width",t=>Math.max(1,t.dy)).sort((t,e)=>e.dy-t.dy).on("mouseover",j).on("mouseout",w);function N(){var t;const e=null!=(t=s.selectAll(".node")[0])?t:[],n=Object(v.b)(e);e.forEach(t=>{const e=t.getElementsByTagName("text")[0];e&&(n.includes(t)?e.classList.add("opacity-0"):e.classList.remove("opacity-0"))})}const z=g.append("g").selectAll(".node").data(L).enter().append("g").attr("class","node").attr("transform",t=>`translate(${t.x},${t.y})`).call(l.a.behavior.drag().origin(t=>t).on("dragstart",(function(){this.parentNode.append(this)})).on("drag",(function(t){l.a.select(this).attr("transform",`translate(${t.x},${t.y=Math.max(0,Math.min(r-t.dy,l.a.event.y))})`),x.relayout(),$.attr("d",E)})).on("dragend",N));z.append("rect").attr("height",t=>t.dy>5?t.dy:5).attr("width",x.nodeWidth()).style("fill",t=>{const e=t.name||"N/A";return t.color=k(e.replace(/ .*/,"")),t.color}).style("stroke",t=>l.a.rgb(t.color).darker(2)).on("mouseover",j).on("mouseout",w),z.append("text").attr("x",-6).attr("y",t=>t.dy/2).attr("dy",".35em").attr("text-anchor","end").attr("transform",null).text(t=>t.name).attr("class","opacity-0").filter(t=>t.x<d/2).attr("x",6+x.nodeWidth()).attr("text-anchor","start"),N()}x.displayName="Sankey",x.propTypes=k;var E=x;const L=Object(o.a)(E),O=({className:t,...e})=>r.a.createElement("div",{className:t},r.a.createElement(L,e));O.propTypes={className:i.a.string.isRequired};e.default=Object(s.c)(O)`
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