(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{3412:function(t,n,e){var r=e(3420).dispatch,a=Math.PI/180;function o(t){return t.text}function i(){return"serif"}function l(){return"normal"}function u(t){return Math.sqrt(t.value)}function f(){return 30*(~~(6*Math.random())-3)}function s(){return 1}function c(t,n,e,r){if(!n.sprite){var o=t.context,i=t.ratio;o.clearRect(0,0,2048/i,2048/i);var l=0,u=0,f=0,s=e.length;for(--r;++r<s;){n=e[r],o.save(),o.font=n.style+" "+n.weight+" "+~~((n.size+1)/i)+"px "+n.font;var c=o.measureText(n.text+"m").width*i,h=n.size<<1;if(n.rotate){var y=Math.sin(n.rotate*a),x=Math.cos(n.rotate*a),d=c*x,p=c*y,g=h*x,v=h*y;c=Math.max(Math.abs(d+v),Math.abs(d-v))+31>>5<<5,h=~~Math.max(Math.abs(p+g),Math.abs(p-g))}else c=c+31>>5<<5;if(h>f&&(f=h),l+c>=2048&&(l=0,u+=f,f=0),u+h>=2048)break;o.translate((l+(c>>1))/i,(u+(h>>1))/i),n.rotate&&o.rotate(n.rotate*a),o.fillText(n.text,0,0),n.padding&&(o.lineWidth=2*n.padding,o.strokeText(n.text,0,0)),o.restore(),n.width=c,n.height=h,n.xoff=l,n.yoff=u,n.x1=c>>1,n.y1=h>>1,n.x0=-n.x1,n.y0=-n.y1,n.hasText=!0,l+=c}for(var w=o.getImageData(0,0,2048/i,2048/i).data,m=[];--r>=0;)if((n=e[r]).hasText){for(var M=(c=n.width)>>5,b=(h=n.y1-n.y0,0);b<h*M;b++)m[b]=0;if(null==(l=n.xoff))return;u=n.yoff;for(var z=0,k=-1,S=0;S<h;S++){for(b=0;b<c;b++){var I=M*S+(b>>5),O=w[2048*(u+S)+(l+b)<<2]?1<<31-b%32:0;m[I]|=O,z|=O}z?k=S:(n.y0++,h--,S--,u++)}n.y1=n.y0+k,n.sprite=m.slice(0,(n.y1-n.y0)*M)}}}function h(t,n,e){e>>=5;for(var r,a=t.sprite,o=t.width>>5,i=t.x-(o<<4),l=127&i,u=32-l,f=t.y1-t.y0,s=(t.y+t.y0)*e+(i>>5),c=0;c<f;c++){r=0;for(var h=0;h<=o;h++)if((r<<u|(h<o?(r=a[c*o+h])>>>l:0))&n[s+h])return!0;s+=e}return!1}function y(t,n){var e=t[0],r=t[1];n.x+n.x0<e.x&&(e.x=n.x+n.x0),n.y+n.y0<e.y&&(e.y=n.y+n.y0),n.x+n.x1>r.x&&(r.x=n.x+n.x1),n.y+n.y1>r.y&&(r.y=n.y+n.y1)}function x(t){var n=t[0]/t[1];return function(t){return[n*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function d(){return document.createElement("canvas")}function p(t){return"function"==typeof t?t:function(){return t}}t.exports=function(){var t=[256,256],n=o,e=i,a=u,v=l,w=l,m=f,M=s,b=x,z=[],k=1/0,S=r("word","end"),I=null,O=Math.random,T={},_=d;function E(n,e,r){t[0],t[1];for(var a,o,i,l,u,f=e.x,s=e.y,c=Math.sqrt(t[0]*t[0]+t[1]*t[1]),y=b(t),x=O()<.5?1:-1,d=-x;(a=y(d+=x))&&(o=~~a[0],i=~~a[1],!(Math.min(Math.abs(o),Math.abs(i))>=c));)if(e.x=f+o,e.y=s+i,!(e.x+e.x0<0||e.y+e.y0<0||e.x+e.x1>t[0]||e.y+e.y1>t[1]||r&&h(e,n,t[0])||r&&(u=r,!((l=e).x+l.x1>u[0].x&&l.x+l.x0<u[1].x&&l.y+l.y1>u[0].y&&l.y+l.y0<u[1].y)))){for(var p,g=e.sprite,v=e.width>>5,w=t[0]>>5,m=e.x-(v<<4),M=127&m,z=32-M,k=e.y1-e.y0,S=(e.y+e.y0)*w+(m>>5),I=0;I<k;I++){p=0;for(var T=0;T<=v;T++)n[S+T]|=p<<z|(T<v?(p=g[I*v+T])>>>M:0);S+=w}return delete e.sprite,!0}return!1}return T.canvas=function(t){return arguments.length?(_=p(t),T):_},T.start=function(){var r=function(t){t.width=t.height=1;var n=Math.sqrt(t.getContext("2d").getImageData(0,0,1,1).data.length>>2);t.width=2048/n,t.height=2048/n;var e=t.getContext("2d");return e.fillStyle=e.strokeStyle="red",e.textAlign="center",{context:e,ratio:n}}(_()),o=function(t){var n=[],e=-1;for(;++e<t;)n[e]=0;return n}((t[0]>>5)*t[1]),i=null,l=z.length,u=-1,f=[],s=z.map((function(t,r){return t.text=n.call(this,t,r),t.font=e.call(this,t,r),t.style=v.call(this,t,r),t.weight=w.call(this,t,r),t.rotate=m.call(this,t,r),t.size=~~a.call(this,t,r),t.padding=M.call(this,t,r),t})).sort((function(t,n){return n.size-t.size}));return I&&clearInterval(I),I=setInterval(h,0),h(),T;function h(){for(var n=Date.now();Date.now()-n<k&&++u<l&&I;){var e=s[u];e.x=t[0]*(O()+.5)>>1,e.y=t[1]*(O()+.5)>>1,c(r,e,s,u),e.hasText&&E(o,e,i)&&(f.push(e),S.call("word",T,e),i?y(i,e):i=[{x:e.x+e.x0,y:e.y+e.y0},{x:e.x+e.x1,y:e.y+e.y1}],e.x-=t[0]>>1,e.y-=t[1]>>1)}u>=l&&(T.stop(),S.call("end",T,f,i))}},T.stop=function(){return I&&(clearInterval(I),I=null),T},T.timeInterval=function(t){return arguments.length?(k=null==t?1/0:t,T):k},T.words=function(t){return arguments.length?(z=t,T):z},T.size=function(n){return arguments.length?(t=[+n[0],+n[1]],T):t},T.font=function(t){return arguments.length?(e=p(t),T):e},T.fontStyle=function(t){return arguments.length?(v=p(t),T):v},T.fontWeight=function(t){return arguments.length?(w=p(t),T):w},T.rotate=function(t){return arguments.length?(m=p(t),T):m},T.text=function(t){return arguments.length?(n=p(t),T):n},T.spiral=function(t){return arguments.length?(b=g[t]||t,T):b},T.fontSize=function(t){return arguments.length?(a=p(t),T):a},T.padding=function(t){return arguments.length?(M=p(t),T):M},T.random=function(t){return arguments.length?(O=t,T):O},T.on=function(){var t=S.on.apply(S,arguments);return t===S?T:t},T};var g={archimedean:x,rectangular:function(t){var n=4*t[0]/t[1],e=0,r=0;return function(t){var a=t<0?-1:1;switch(Math.sqrt(1+4*a*t)-a&3){case 0:e+=n;break;case 1:r+=4;break;case 2:e-=n;break;default:r-=4}return[e,r]}}}},3420:function(t,n,e){"use strict";e.r(n),e.d(n,"dispatch",(function(){return f}));var r={value:function(){}};function a(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new o(r)}function o(t){this._=t}function i(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function l(t,n){for(var e,r=0,a=t.length;r<a;++r)if((e=t[r]).name===n)return e.value}function u(t,n,e){for(var a=0,o=t.length;a<o;++a)if(t[a].name===n){t[a]=r,t=t.slice(0,a).concat(t.slice(a+1));break}return null!=e&&t.push({name:n,value:e}),t}o.prototype=a.prototype={constructor:o,on:function(t,n){var e,r=this._,a=i(t+"",r),o=-1,f=a.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<f;)if(e=(t=a[o]).type)r[e]=u(r[e],t.name,n);else if(null==n)for(e in r)r[e]=u(r[e],t.name,null);return this}for(;++o<f;)if((e=(t=a[o]).type)&&(e=l(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new o(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,a=new Array(e),o=0;o<e;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,a)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],a=0,o=r.length;a<o;++a)r[a].value.apply(n,e)}};var f=a},3459:function(t,n,e){"use strict";e.r(n);var r=e(947),a=e(233),o=e.n(a),i=e(0),l=e.n(i),u=e(3412),f=e.n(u),s=e(226);const c={square:()=>90*Math.floor(2*Math.random()),flat:()=>0,random:()=>30*Math.floor(6*Math.random()-3)},h={data:l.a.arrayOf(l.a.shape({size:l.a.number,text:l.a.string})),width:l.a.number,height:l.a.number,rotation:l.a.string,sizeRange:l.a.arrayOf(l.a.number),colorScheme:l.a.string};function y(t,n){const{data:e,width:r,height:a,rotation:i,sizeRange:l,colorScheme:u}=n,h=o.a.select(t);h.classed("superset-legacy-chart-word-cloud",!0);const y=[r,a],x=c[i]||c.flat,d=o.a.scale.linear().range(l).domain(o.a.extent(e,t=>t.size)),p=f()().size(y).words(e).padding(5).rotate(x).font("Helvetica").fontWeight("bold").fontSize(t=>d(t.size)),g=s.CategoricalColorNamespace.getScale(u);p.on("end",(function(t){h.selectAll("*").remove();const[n,e]=p.size();h.append("svg").attr("width",n).attr("height",e).append("g").attr("transform","translate("+n/2+","+e/2+")").selectAll("text").data(t).enter().append("text").style("font-size",t=>t.size+"px").style("font-weight","bold").style("font-family","Helvetica").style("fill",t=>g(t.text)).attr("text-anchor","middle").attr("transform",t=>"translate("+t.x+", "+t.y+") rotate("+t.rotate+")").text(t=>t.text)})).start()}y.displayName="WordCloud",y.propTypes=h;var x=y;n.default=Object(r.a)(x)}}]);