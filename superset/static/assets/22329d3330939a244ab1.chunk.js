(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{4891:function(t,e,n){"use strict";n.r(e);n(0);var r=n(887),a=n(48),o=n(2),s=n.n(o),c=n(192),i=n.n(c),u=n(167),l=n(898),f=n(335),d=function(){var t={},e=24,n=8,r=[1,1],a=[],o=[];function s(){function t(t,e){return t.source.y-e.source.y}function e(t,e){return t.target.y-e.target.y}a.forEach((function(n){n.sourceLinks.sort(e),n.targetLinks.sort(t)})),a.forEach((function(t){var e=0,n=0;t.sourceLinks.forEach((function(t){t.sy=e,e+=t.dy})),t.targetLinks.forEach((function(t){t.ty=n,n+=t.dy}))}))}function c(t){return t.y+t.dy/2}function i(t){return t.value}return t.nodeWidth=function(n){return arguments.length?(e=+n,t):e},t.nodePadding=function(e){return arguments.length?(n=+e,t):n},t.nodes=function(e){return arguments.length?(a=e,t):a},t.links=function(e){return arguments.length?(o=e,t):o},t.size=function(e){return arguments.length?(r=e,t):r},t.layout=function(f){return a.forEach((function(t){t.sourceLinks=[],t.targetLinks=[]})),o.forEach((function(t){var e=t.source,n=t.target;"number"==typeof e&&(e=t.source=a[t.source]),"number"==typeof n&&(n=t.target=a[t.target]),e.sourceLinks.push(t),n.targetLinks.push(t)})),a.forEach((function(t){t.value=Math.max(Object(u.sum)(t.sourceLinks,i),Object(u.sum)(t.targetLinks,i))})),function(){var t,n=a,o=0;for(;n.length;)t=[],n.forEach((function(n){n.x=o,n.dx=e,n.sourceLinks.forEach((function(e){t.indexOf(e.target)<0&&t.push(e.target)}))})),n=t,++o;(function(t){a.forEach((function(e){e.sourceLinks.length||(e.x=t-1)}))})(o),s=(r[0]-e)/(o-1),a.forEach((function(t){t.x*=s}));var s}(),function(t){var e=Object(l.b)().key((function(t){return t.x})).sortKeys(u.ascending).entries(a).map((function(t){return t.values}));s=Object(u.min)(e,(function(t){return(r[1]-(t.length-1)*n)/Object(u.sum)(t,i)})),e.forEach((function(t){t.forEach((function(t,e){t.y=e,t.dy=t.value*s}))})),o.forEach((function(t){t.dy=t.value*s})),y();var s;for(var f=1;t>0;--t)p(f*=.99),y(),d(f),y();function d(t){function n(t){return c(t.source)*t.value}e.forEach((function(e){e.forEach((function(e){if(e.targetLinks.length){var r=Object(u.sum)(e.targetLinks,n)/Object(u.sum)(e.targetLinks,i);e.y+=(r-c(e))*t}}))}))}function p(t){function n(t){return c(t.target)*t.value}e.slice().reverse().forEach((function(e){e.forEach((function(e){if(e.sourceLinks.length){var r=Object(u.sum)(e.sourceLinks,n)/Object(u.sum)(e.sourceLinks,i);e.y+=(r-c(e))*t}}))}))}function y(){e.forEach((function(t){var e,a,o,s=0,c=t.length;for(t.sort(h),o=0;o<c;++o)(a=s-(e=t[o]).y)>0&&(e.y+=a),s=e.y+e.dy+n;if((a=s-n-r[1])>0)for(s=e.y-=a,o=c-2;o>=0;--o)(a=(e=t[o]).y+e.dy+n-s)>0&&(e.y-=a),s=e.y}))}function h(t,e){return t.y-e.y}}(f),s(),t},t.relayout=function(){return s(),t},t.link=function(){var t=.5;function e(e){var n=e.source.x+e.source.dx,r=e.target.x,a=Object(f.a)(n,r),o=a(t),s=a(1-t),c=e.source.y+e.sy+e.dy/2,i=e.target.y+e.ty+e.dy/2;return"M"+n+","+c+"C"+o+","+c+" "+s+","+i+" "+r+","+i}return e.curvature=function(n){return arguments.length?(t=+n,e):t},e},t},p=n(237),y=n(107),h=n(892),g=n(900);const m={data:s.a.arrayOf(s.a.shape({source:s.a.string,target:s.a.string,value:s.a.number})),width:s.a.number,height:s.a.number,colorScheme:s.a.string},v=Object(p.c)(y.a.FLOAT);function k(t,e){const{data:n,width:r,height:a,colorScheme:o}=e,s=i.a.select(t);s.classed("superset-legacy-chart-sankey",!0);const c=5,u=5,l=5,f=5,p=r-f-u,y=a-c-l;s.selectAll("*").remove();const m=s.append("div").attr("class","sankey-tooltip").style("opacity",0),k=s.append("svg").attr("width",p+f+u).attr("height",y+c+l).append("g").attr("transform",`translate(${f},${c})`),b=h.b.getScale(o),x=d().nodeWidth(15).nodePadding(10).size([p,y]),E=x.link();let L={};const O=n.map(t=>{const e={...t};return e.source=L[e.source]||(L[e.source]={name:e.source}),e.target=L[e.target]||(L[e.target]={name:e.target}),e.value=Number(e.value),e});function j(t){m.html(()=>function(t){let e;if(t.sourceLinks)e=`${t.name} Value: <span class='emph'>${v(t.value)}</span>`;else{const n=v(t.value),r=i.a.round(t.value/t.source.value*100,1),a=i.a.round(t.value/t.target.value*100,1);e=["<div class=''>Path Value: <span class='emph'>",n,"</span></div>","<div class='percents'>","<span class='emph'>",Number.isFinite(r)?r:"100","%</span> of ",t.source.name,"<br/>",`<span class='emph'>${Number.isFinite(a)?a:"--"}%</span> of `,t.target.name,"</div>"].join("")}return e}(t)).transition().duration(200).style("left",`${i.a.event.offsetX+10}px`).style("top",`${i.a.event.offsetY+10}px`).style("position","absolute").style("opacity",.95)}function w(){m.transition().duration(100).style("opacity",0)}L=i.a.values(L),x.nodes(L).links(O).layout(32);const $=k.append("g").selectAll(".link").data(O).enter().append("path").attr("class","link").attr("d",E).style("stroke-width",t=>Math.max(1,t.dy)).sort((t,e)=>e.dy-t.dy).on("mouseover",j).on("mouseout",w);function N(){var t;const e=null!=(t=s.selectAll(".node")[0])?t:[],n=Object(g.b)(e);e.forEach(t=>{const e=t.getElementsByTagName("text")[0];e&&(n.includes(t)?e.classList.add("opacity-0"):e.classList.remove("opacity-0"))})}const z=k.append("g").selectAll(".node").data(L).enter().append("g").attr("class","node").attr("transform",t=>`translate(${t.x},${t.y})`).call(i.a.behavior.drag().origin(t=>t).on("dragstart",(function(){this.parentNode.append(this)})).on("drag",(function(t){i.a.select(this).attr("transform",`translate(${t.x},${t.y=Math.max(0,Math.min(a-t.dy,i.a.event.y))})`),x.relayout(),$.attr("d",E)})).on("dragend",N));z.append("rect").attr("height",t=>t.dy>5?t.dy:5).attr("width",x.nodeWidth()).style("fill",t=>{const e=t.name||"N/A";return t.color=b(e.replace(/ .*/,"")),t.color}).style("stroke",t=>i.a.rgb(t.color).darker(2)).on("mouseover",j).on("mouseout",w),z.append("text").attr("x",-6).attr("y",t=>t.dy/2).attr("dy",".35em").attr("text-anchor","end").attr("transform",null).text(t=>t.name).attr("class","opacity-0").filter(t=>t.x<p/2).attr("x",6+x.nodeWidth()).attr("text-anchor","start"),N()}k.displayName="Sankey",k.propTypes=m;var b=k,x=n(9);const E=Object(r.a)(b),L=({className:t,...e})=>Object(x.b)("div",{className:t},Object(x.b)(E,e));L.propTypes={className:s.a.string.isRequired};e.default=Object(a.d)(L)`
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