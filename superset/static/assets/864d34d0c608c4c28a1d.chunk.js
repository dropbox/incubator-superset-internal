(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{4904:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(796),s=n(51),c=n(2),u=n.n(c),i=n(177),l=n.n(i),f=n(165),d=n(808),h=n(184),p=function(){var t={},e=24,n=8,r=[1,1],a=[],o=[];function s(){function t(t,e){return t.source.y-e.source.y}function e(t,e){return t.target.y-e.target.y}a.forEach((function(n){n.sourceLinks.sort(e),n.targetLinks.sort(t)})),a.forEach((function(t){var e=0,n=0;t.sourceLinks.forEach((function(t){t.sy=e,e+=t.dy})),t.targetLinks.forEach((function(t){t.ty=n,n+=t.dy}))}))}function c(t){return t.y+t.dy/2}function u(t){return t.value}return t.nodeWidth=function(n){return arguments.length?(e=+n,t):e},t.nodePadding=function(e){return arguments.length?(n=+e,t):n},t.nodes=function(e){return arguments.length?(a=e,t):a},t.links=function(e){return arguments.length?(o=e,t):o},t.size=function(e){return arguments.length?(r=e,t):r},t.layout=function(i){return a.forEach((function(t){t.sourceLinks=[],t.targetLinks=[]})),o.forEach((function(t){var e=t.source,n=t.target;"number"==typeof e&&(e=t.source=a[t.source]),"number"==typeof n&&(n=t.target=a[t.target]),e.sourceLinks.push(t),n.targetLinks.push(t)})),a.forEach((function(t){t.value=Math.max(Object(f.sum)(t.sourceLinks,u),Object(f.sum)(t.targetLinks,u))})),function(){var t,n=a,o=0;for(;n.length;)t=[],n.forEach((function(n){n.x=o,n.dx=e,n.sourceLinks.forEach((function(e){t.indexOf(e.target)<0&&t.push(e.target)}))})),n=t,++o;(function(t){a.forEach((function(e){e.sourceLinks.length||(e.x=t-1)}))})(o),s=(r[0]-e)/(o-1),a.forEach((function(t){t.x*=s}));var s}(),function(t){var e=Object(d.b)().key((function(t){return t.x})).sortKeys(f.ascending).entries(a).map((function(t){return t.values}));s=Object(f.min)(e,(function(t){return(r[1]-(t.length-1)*n)/Object(f.sum)(t,u)})),e.forEach((function(t){t.forEach((function(t,e){t.y=e,t.dy=t.value*s}))})),o.forEach((function(t){t.dy=t.value*s})),p();var s;for(var i=1;t>0;--t)h(i*=.99),p(),l(i),p();function l(t){function n(t){return c(t.source)*t.value}e.forEach((function(e){e.forEach((function(e){if(e.targetLinks.length){var r=Object(f.sum)(e.targetLinks,n)/Object(f.sum)(e.targetLinks,u);e.y+=(r-c(e))*t}}))}))}function h(t){function n(t){return c(t.target)*t.value}e.slice().reverse().forEach((function(e){e.forEach((function(e){if(e.sourceLinks.length){var r=Object(f.sum)(e.sourceLinks,n)/Object(f.sum)(e.sourceLinks,u);e.y+=(r-c(e))*t}}))}))}function p(){e.forEach((function(t){var e,a,o,s=0,c=t.length;for(t.sort(y),o=0;o<c;++o)(a=s-(e=t[o]).y)>0&&(e.y+=a),s=e.y+e.dy+n;if((a=s-n-r[1])>0)for(s=e.y-=a,o=c-2;o>=0;--o)(a=(e=t[o]).y+e.dy+n-s)>0&&(e.y-=a),s=e.y}))}function y(t,e){return t.y-e.y}}(i),s(),t},t.relayout=function(){return s(),t},t.link=function(){var t=.5;function e(e){var n=e.source.x+e.source.dx,r=e.target.x,a=Object(h.c)(n,r),o=a(t),s=a(1-t),c=e.source.y+e.sy+e.dy/2,u=e.target.y+e.ty+e.dy/2;return"M"+n+","+c+"C"+o+","+c+" "+s+","+u+" "+r+","+u}return e.curvature=function(n){return arguments.length?(t=+n,e):t},e},t},y=n(221),g=n(106),m=n(800);const v={data:u.a.arrayOf(u.a.shape({source:u.a.string,target:u.a.string,value:u.a.number})),width:u.a.number,height:u.a.number,colorScheme:u.a.string},k=Object(y.c)(g.a.FLOAT);function b(t,e){const{data:n,width:r,height:a,colorScheme:o}=e,s=l.a.select(t);s.classed("superset-legacy-chart-sankey",!0);const c=5,u=5,i=5,f=5,d=r-f-u,h=a-c-i;s.selectAll("*").remove();const y=s.append("svg").attr("width",d+f+u).attr("height",h+c+i).append("g").attr("transform",`translate(${f},${c})`),g=s.append("div").attr("class","sankey-tooltip").style("opacity",0),v=m.b.getScale(o),b=p().nodeWidth(15).nodePadding(10).size([d,h]),x=b.link();let E={};const L=n.map(t=>{const e={...t};return e.source=E[e.source]||(E[e.source]={name:e.source}),e.target=E[e.target]||(E[e.target]={name:e.target}),e.value=Number(e.value),e});function O(t){g.html(()=>function(t){let e;if(t.sourceLinks)e=`${t.name} Value: <span class='emph'>${k(t.value)}</span>`;else{const n=k(t.value),r=l.a.round(t.value/t.source.value*100,1),a=l.a.round(t.value/t.target.value*100,1);e=["<div class=''>Path Value: <span class='emph'>",n,"</span></div>","<div class='percents'>","<span class='emph'>",Number.isFinite(r)?r:"100","%</span> of ",t.source.name,"<br/>",`<span class='emph'>${Number.isFinite(a)?a:"--"}%</span> of `,t.target.name,"</div>"].join("")}return e}(t)).transition().duration(200).style("left",`${l.a.event.offsetX+10}px`).style("top",`${l.a.event.offsetY+10}px`).style("opacity",.95)}function w(){g.transition().duration(100).style("opacity",0)}E=l.a.values(E),b.nodes(E).links(L).layout(32);const j=y.append("g").selectAll(".link").data(L).enter().append("path").attr("class","link").attr("d",x).style("stroke-width",t=>Math.max(1,t.dy)).sort((t,e)=>e.dy-t.dy).on("mouseover",O).on("mouseout",w);const $=y.append("g").selectAll(".node").data(E).enter().append("g").attr("class","node").attr("transform",t=>`translate(${t.x},${t.y})`).call(l.a.behavior.drag().origin(t=>t).on("dragstart",(function(){this.parentNode.append(this)})).on("drag",(function(t){l.a.select(this).attr("transform",`translate(${t.x},${t.y=Math.max(0,Math.min(a-t.dy,l.a.event.y))})`),b.relayout(),j.attr("d",x)})));$.append("rect").attr("height",t=>t.dy>5?t.dy:5).attr("width",b.nodeWidth()).style("fill",t=>{const e=t.name||"N/A";return t.color=v(e.replace(/ .*/,"")),t.color}).style("stroke",t=>l.a.rgb(t.color).darker(2)).on("mouseover",O).on("mouseout",w),$.append("text").attr("x",-6).attr("y",t=>t.dy/2).attr("dy",".35em").attr("text-anchor","end").attr("transform",null).text(t=>t.name).filter(t=>t.x<d/2).attr("x",6+b.nodeWidth()).attr("text-anchor","start")}b.displayName="Sankey",b.propTypes=v;var x=b;const E=Object(o.a)(x),L=({className:t,...e})=>a.a.createElement("div",{className:t},a.a.createElement(E,e));L.propTypes={className:u.a.string.isRequired};e.default=Object(s.c)(L)`
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
  }
  .superset-legacy-chart-sankey-tooltip {
    position: absolute;
    width: auto;
    background: #ddd;
    padding: 10px;
    font-size: ${({theme:t})=>t.typography.sizes.s};
    font-weight: ${({theme:t})=>t.typography.weights.light};
    color: #333;
    border: 1px solid #fff;
    text-align: center;
    pointer-events: none;
  }
`}}]);