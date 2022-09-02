(()=>{"use strict";var e,a,t,d,c,r,f,o,b={68160:(e,a,t)=>{var d,c=t(67294),r=t(90731),f=t(73727),o=t(5977),b=t(68492),n=t(61988),s=t(22102);!function(e){e.GET="get",e.REPLY="reply",e.EMIT="emit",e.ERROR="error"}(d||(d={}));class i{constructor({port:e,name:a="switchboard",debug:t=!1}){this.port=void 0,this.name=void 0,this.methods={},this.incrementor=1,this.debugMode=void 0,this.port=e,this.name=a,this.debugMode=t,e.addEventListener("message",(async e=>{this.log("message received",e);const a=e.data;if(function(e){return e.switchboardAction===d.GET}(a))this.port.postMessage(await this.getMethodResult(a));else if(function(e){return e.switchboardAction===d.EMIT}(a)){const{method:e,args:t}=a,d=this.methods[e];d&&d(t)}}))}async getMethodResult({messageId:e,method:a,args:t}){const c=this.methods[a];if(null==c)return{switchboardAction:d.ERROR,messageId:e,error:`[${this.name}] Method "${a}" is not defined`};try{const a=await c(t);return{switchboardAction:d.REPLY,messageId:e,result:a}}catch(t){return this.logError(t),{switchboardAction:d.ERROR,messageId:e,error:`[${this.name}] Method "${a}" threw an error`}}}defineMethod(e,a){this.methods[e]=a}get(e,a){return new Promise(((t,c)=>{const r=this.getNewMessageId(),f=e=>{const a=e.data;if(a.messageId===r)if(this.port.removeEventListener("message",f),function(e){return e.switchboardAction===d.REPLY}(a))t(a.result);else{const e=function(e){return e.switchboardAction===d.ERROR}(a)?a.error:"Unexpected response message";c(new Error(e))}};this.port.addEventListener("message",f),this.port.start();const o={switchboardAction:d.GET,method:e,messageId:r,args:a};this.port.postMessage(o)}))}emit(e,a){const t={switchboardAction:d.EMIT,method:e,args:a};this.port.postMessage(t)}start(){this.port.start()}log(...e){this.debugMode&&console.debug(`[${this.name}]`,...e)}logError(...e){console.error(`[${this.name}]`,...e)}getNewMessageId(){return`m_${this.name}_${this.incrementor++}`}}var l=t(85156),u=t(15501),h=t(68135),m=t(37703),p=t(35755),g=t(38626),y=t(57865),v=t(89474),w=t(14114),E=t(33626);const T={info:"addInfoToast",alert:"addDangerToast",danger:"addDangerToast",warning:"addWarningToast",success:"addSuccessToast"};function k({children:e,messages:a}){const t=(0,w.e1)();return(0,E.J)((()=>{a.forEach((e=>{const[a,d]=e,c=t[T[a]];c&&c(d)}))})),e}var j=t(29147),O=t(14278),Z=t(11965);const x={...l.b.common},A=({children:e})=>(0,Z.tZ)(h.a,{theme:l.r},(0,Z.tZ)(m.zt,{store:v.h},(0,Z.tZ)(g.W,{backend:y.PD},(0,Z.tZ)(k,{messages:x.flash_messages},(0,Z.tZ)(j.DG,null,(0,Z.tZ)(O.EM,null,(0,Z.tZ)(p.Fz,{ReactRouterRoute:o.AW,stringifyOptions:{encode:!1}},e)))))));var M=t(57902),R=t(38703),S=t(72570),_=t(14890),C=t(51995),$=t(94184),I=t.n($),N=t(13423),P=t(70163),L=t(1927);const D=C.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`,G=e=>Z.iv`
  min-width: ${5*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
`;function H({toast:e,onCloseToast:a}){const t=(0,c.useRef)(),[d,r]=(0,c.useState)(!1),f=()=>{r(!0)},o=(0,c.useCallback)((()=>{t.current&&clearTimeout(t.current),r((()=>(setTimeout((()=>{a(e.id)}),150),!1)))}),[a,e.id]);(0,c.useEffect)((()=>(setTimeout(f),e.duration>0&&(t.current=setTimeout(o,e.duration)),()=>{t.current&&clearTimeout(t.current)})),[o,e.duration]);let b="toast--success",n=(0,Z.tZ)(P.Z.CircleCheckSolid,{css:e=>G(e)});return e.toastType===L.p.WARNING?(n=(0,Z.tZ)(P.Z.WarningSolid,{css:G}),b="toast--warning"):e.toastType===L.p.DANGER?(n=(0,Z.tZ)(P.Z.ErrorSolid,{css:G}),b="toast--danger"):e.toastType===L.p.INFO&&(n=(0,Z.tZ)(P.Z.InfoSolid,{css:G}),b="toast--info"),(0,Z.tZ)(D,{className:I()("alert","toast",d&&"toast--visible",b),role:"alert"},n,(0,Z.tZ)(N.ZP,{content:e.text}),(0,Z.tZ)("i",{className:"fa fa-close pull-right pointer",role:"button",tabIndex:0,onClick:o,"aria-label":"Close"}))}const W=C.iK.div`
  max-width: 600px;
  position: fixed;
  ${({position:e})=>"bottom"===e?"bottom":"top"}: 0px;
  right: 0px;
  margin-right: 50px;
  margin-bottom: 50px;
  z-index: ${({theme:e})=>e.zIndex.max};
  word-break: break-word;

  .toast {
    background: ${({theme:e})=>e.colors.grayscale.dark1};
    border-radius: ${({theme:e})=>e.borderRadius};
    box-shadow: 0 2px 4px 0
      fade(
        ${({theme:e})=>e.colors.grayscale.dark2},
        ${({theme:e})=>e.opacity.mediumLight}
      );
    color: ${({theme:e})=>e.colors.grayscale.light5};
    opacity: 0;
    position: relative;
    transform: translateY(-100%);
    white-space: pre-line;
    will-change: transform, opacity;
    transition: transform ${({theme:e})=>e.transitionTiming}s,
      opacity ${({theme:e})=>e.transitionTiming}s;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
    }
  }

  .toast > button {
    color: ${({theme:e})=>e.colors.grayscale.light5};
    opacity: 1;
  }

  .toast--visible {
    opacity: 1;
    transform: translateY(0);
  }
`,z=(0,m.$j)((({messageToasts:e})=>({toasts:e})),(e=>(0,_.DE)({removeToast:S.RS},e)))((function({toasts:e,removeToast:a,position:t="bottom"}){return(0,Z.tZ)(c.Fragment,null,e.length>0&&(0,Z.tZ)(W,{id:"toast-presenter",position:t},e.map((e=>(0,Z.tZ)(H,{key:e.id,toast:e,onCloseToast:a})))))}));const F=(0,c.lazy)((()=>Promise.all([t.e(1216),t.e(504),t.e(2087),t.e(3807),t.e(5289),t.e(5175),t.e(9312),t.e(7936),t.e(5296)]).then(t.bind(t,37936)))),K=()=>(0,Z.tZ)(c.Suspense,{fallback:(0,Z.tZ)(R.Z,null)},(0,Z.tZ)(A,null,(0,Z.tZ)(M.Z,null,(0,Z.tZ)(F,{idOrSlug:l.b.embedded.dashboard_id})),(0,Z.tZ)(z,{position:"top"}))),U=()=>(0,Z.tZ)(f.VK,null,(0,Z.tZ)(o.AW,{path:"/dashboard/:idOrSlug/embedded/",component:K}),(0,Z.tZ)(o.AW,{path:"/embedded/:uuid/",component:K})),Y=document.getElementById("app");function B(e){Y.innerHTML=e}window.parent&&window.parent!==window||B("This page is intended to be embedded in an iframe, but it looks like that is not the case.");let q=!1;function J(){q||(q=!0,v.h.dispatch((0,S.Gb)((0,n.t)("This session has encountered an interruption, and some controls may not work as intended. If you are the developer of this app, please check that the guest token is being generated correctly."),{duration:-1,noDuplicate:!0})))}window.addEventListener("message",(function(e){var a;try{!function(e){if("object"!=typeof e.data||"__embedded_comms__"!==e.data.type)throw new Error("Message type does not match type used for embedded comms")}(e)}catch(e){return}const t=null==(a=e.ports)?void 0:a[0];if("port transfer"===e.data.handshake&&t){const e=new i({port:t,name:"superset",debug:!1});let a=!1;e.defineMethod("guestToken",(({guestToken:e})=>{!function(e){var a;(0,u.Z)({guestToken:e,guestTokenHeaderName:null==(a=l.b.config)?void 0:a.GUEST_TOKEN_HEADER_NAME,unauthorizedHandler:J})}(e),a||((0,s.Z)({method:"GET",endpoint:"/api/v1/me/roles/"})().then((({result:e})=>{l.b.user=e,v.h.dispatch({type:v.Cy,user:e}),r.render((0,Z.tZ)(U,null),Y)}),(e=>{b.Z.error(e),B("Something went wrong with embedded authentication. Check the dev console for details.")})),a=!0)})),e.defineMethod("getScrollSize",(()=>({width:document.body.scrollWidth,height:document.body.scrollHeight}))),e.start()}}))},33626:(e,a,t)=>{t.d(a,{J:()=>c});var d=t(67294);const c=e=>{(0,d.useEffect)(e,[])}}},n={};function s(e){var a=n[e];if(void 0!==a)return a.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,s),t.loaded=!0,t.exports}s.m=b,s.amdD=function(){throw new Error("define cannot be used indirect")},s.amdO={},e=[],s.O=(a,t,d,c)=>{if(!t){var r=1/0;for(n=0;n<e.length;n++){for(var[t,d,c]=e[n],f=!0,o=0;o<t.length;o++)(!1&c||r>=c)&&Object.keys(s.O).every((e=>s.O[e](t[o])))?t.splice(o--,1):(f=!1,c<r&&(r=c));if(f){e.splice(n--,1);var b=d();void 0!==b&&(a=b)}}return a}c=c||0;for(var n=e.length;n>0&&e[n-1][2]>c;n--)e[n]=e[n-1];e[n]=[t,d,c]},s.H={},s.G=e=>{Object.keys(s.H).map((a=>{s.H[a](e)}))},s.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return s.d(a,{a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var c=Object.create(null);s.r(c);var r={};a=a||[null,t({}),t([]),t(t)];for(var f=2&d&&e;"object"==typeof f&&!~a.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,s.d(c,r),c},s.d=(e,a)=>{for(var t in a)s.o(a,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((a,t)=>(s.f[t](e,a),a)),[])),s.u=e=>2087===e?"2087.54502ecca41051b1b6b3.entry.js":4593===e?"4593.d68c5ae37590aeca12f4.entry.js":5289===e?"5289.4ae2159e9d69e086aba6.entry.js":2671===e?"2671.4efbb61faace28861a36.entry.js":5175===e?"5175.f7a864daaf965949cd03.entry.js":8274===e?"8274.83609c2078ddfdb2c272.entry.js":504===e?"thumbnail.d6af9282687956aa15cb.entry.js":3807===e?"3807.594cebccbcc479250a61.entry.js":9312===e?"9312.fce5ac42d3817739f85a.entry.js":2441===e?"2441.9d43893841d3df512e51.entry.js":995===e?"995.f5b65c1094bd26ff177a.entry.js":876===e?"876.37176dbdd5e6ae3abd2e.entry.js":1139===e?"1139.515abfa50073eb735dc1.entry.js":4489===e?"4489.2ea83242b46dd2ffd987.entry.js":818===e?"818.fc6df9391f5306cc2677.entry.js":{57:"38f4b0c5b2c751f3029f",112:"0cceda87f254629c0f55",137:"2e4eee61fdab260331a3",158:"7af34d924b2b2e3aaaa7",177:"ca39eb74c4d49fd55005",183:"2d69e60dfe962c42eee9",215:"f6160a99b46b22e18caa",310:"e2c18a71d3a5c875a789",312:"90af13ee4a0d5e067aab",326:"7374ea8855c4c8c9dde6",336:"e5df42bc5a8ad6d9aed0",347:"3f1f3f38b6b3b9616e75",349:"0202ec1626f196ac9881",363:"e517ebae29a6c51c5e09",380:"b10c6bc15614f70674c7",440:"163404f983dce20259a1",444:"eebc4df9b567ec2657cd",452:"bc43a49c32355581b0bc",498:"04c19f92943ed9b4ddb9",597:"d08e416f0ccd4854221a",600:"d0d66aaabc04eac7f3a8",616:"a77417ca34a51fe13a7d",704:"56bff0d3ef19079ea66f",741:"ddfd188cfe976cc863f1",775:"3530fba743ac26563709",826:"3f59c315d2e5d8b15ff9",895:"2bf64696de38a5e5ed38",954:"96328cc7910404deebe6",992:"3972b8e3abebd6e63caf",999:"54febe7bb96630a3013d",1020:"b190f9aca679c03b62c3",1075:"529bc3f823e6fc60cd70",1095:"d9afdc3949f8b21a7820",1130:"110ae26061868bd68c17",1161:"3aa46fb33df2aab20c02",1174:"8849a375bcccf9df44ed",1185:"9ea89afc9bce89ad80ad",1221:"89aea5a154a8cfd8fbad",1256:"3479cded7646565257ab",1258:"604b6fdb6661c6e1205e",1261:"858915f2b7f5a9a59fc3",1263:"62048be321505812ff6a",1293:"825c8594d240fbf17f20",1351:"8f38137e5b4342d2da4f",1382:"4c5c4c09ba5f63220889",1398:"951f07c7c3e07b72cca4",1402:"308402927cb1af91614e",1493:"55bdc0586c89caac178c",1568:"40f6c6e7fe72a2bc1b13",1573:"2e576b04c9b82c938093",1605:"2f7a1d1a47b76ec8c5c1",1862:"f169edb4a2450c249757",1877:"7dd385c6e9090a1b2734",1899:"0502b5cdba557a6ff693",1948:"73ae58351a954a5c96f0",2079:"1506fd7de5b75c690b36",2089:"6762245ee484d3ffcb17",2105:"8146230ef7c416ab6cb3",2112:"bd47c3047ff30d422b26",2229:"92b5dd2bef5c7f4c0f0c",2264:"b12e914fd5684cf329c8",2267:"1665a22356999f7d09cb",2403:"a0d676c094e2f90b5f0a",2439:"7e0114c1e26108fed2fc",2549:"b939e874d4289ca1bb4f",2646:"22d6b0b1d527d046d260",2698:"75dfd37839ade6c35680",2713:"617726f17984c3192f46",2797:"6a8bfc332a16fd0f491c",2955:"21b0680368dea0bf61c5",2983:"b85bf5c0e81e6910fa04",3036:"ea33f16b56589e7fe331",3126:"4764f4f403630edad7c5",3141:"6db0cd2a326a62903532",3187:"6802e173609e0f6b30c1",3208:"1d1e22f6771cfd2e9ef1",3232:"88df3be221f938679450",3240:"78cb567a5b91a58f0c01",3265:"edc982d88e8d399830b7",3325:"46b72d4c661fb47189a2",3496:"bbde815936f983fdf562",3544:"78f16a06c10598e0b889",3558:"a1e4af25d87548162409",3567:"ccb341a117b2ee4d5e98",3588:"461c58b164a3fc1357b1",3606:"7621f705e25335f0121d",3711:"78a94e1e858a8721ed5f",3745:"19220130e12f15e5cce8",3749:"68f7a3e5d439a23f4d89",3831:"0a48200ca8cf0d470682",3871:"79cd11ca09fe747b1bfd",3955:"03c4e9c66c2c63d79acc",3985:"d51bceddde4bd627d6c2",4139:"21f4237f0879646a0d9c",4194:"89e3dd82524d881e7dd7",4237:"f3af87387b276d765b99",4266:"958a29639679b362fba3",4273:"827fb5197c686f0662c7",4421:"6290fd574418d5e32572",4458:"85219e9a6edf20621bea",4474:"b28a000dfeccbe1d81f3",4494:"4bf0f6b8a66ee921247f",4572:"49cd8f3d6d6f320ed729",4579:"8164718d6dabba184b88",4625:"7c5442bc1e5598e90822",4662:"712187ae25c83dce2174",4667:"47a4c2c13ccfb09d3757",4732:"d30d055df1b3b7e84dba",4757:"124ced191b8ef59a3e2c",4758:"8546effff2a679b01358",4790:"8546d26839292e046adb",4794:"fa2a3ad4d82d3d4459fd",4797:"be22f9be14d0445f0f87",4810:"82297ac94bca3b3859d2",4817:"259525e7b455b997848a",4832:"5a592d69bbd6eff5fd66",4851:"a9ccd9b9ba2b847b6417",4972:"132e72e310c461806395",5051:"86881151df595df4d35b",5094:"00b4fe4aafbe798dface",5123:"9d063c72a9891c56cbdc",5181:"26c317d9c3baa9529fe0",5201:"0c0d33390c8cfa65fbbd",5215:"20dcf5c795803b21389a",5224:"2137b5c272446c93f5b7",5226:"43d2d046df38601d76af",5249:"8c40bbdfb03d04b29d02",5264:"764ad1c6642ad40a50d2",5281:"8b441b46691123854b6b",5296:"bf2b78576e4d92d23330",5330:"c3630bd2c65829e4c7a1",5335:"cbdabbf1e2d3d7e254df",5350:"a4556551303ff93cd4bb",5359:"fe8715215a93c63953ec",5367:"12541bbb82603d7e2d66",5507:"c7cdf6f84afbcf502ddb",5566:"34d4af5592bdcfc9eb41",5580:"fa964e628191e708a48e",5592:"2e19c97690b06c32f1b4",5641:"207a4252758bcd4d3cbd",5707:"2b76605f1d6e11cf2df7",5771:"3acf2091ed043492ae76",5777:"58d0e720fba584974cbf",5802:"8caa85ec5eb98cb83343",5816:"3374bb9b8c7f89ae2da0",5832:"6641ca7ff6e2a41a1257",5838:"af5789397b8a13e08c38",5962:"ed92d26f4a929fbbc564",5972:"713e574a1d9b58a2135d",5998:"cb935545042c1ce92ecb",6061:"c9b07a9f1a9bae8552b2",6126:"62a79c1241ef166355de",6150:"6d17f8394d91a097eab6",6167:"ad4ff700d252caec8ce3",6207:"17d778c7ae36315bd979",6254:"15612e9a43534ba1a97d",6303:"b8e13b4773cab5f877ee",6357:"b70dcdf0427abc91ad57",6371:"150eda30c7d4d3f90b81",6377:"6f0f091efb5ecc18dde4",6420:"12131f944d05bfbc2b3d",6447:"bfa0e245c6ade68dd3de",6486:"9801caf1364f204340c9",6507:"f00932e24ce22bd1ca3b",6579:"59f16731ccd9acdd96b3",6668:"0062637c2e307e4a2536",6682:"bdf3637ab1584c67ae30",6693:"7859419c833807d8ecc8",6758:"fc3f2d7bb3a5b8f56817",6819:"1d34427183b1bc32acfd",6871:"ee6aaef556c2b3abedbf",6883:"369bb61eda9423d64359",6968:"626e60cd5099d84de454",6981:"68a6c50b90b0d58736ad",7003:"40ed9de7bc516276c805",7183:"e16648fac64644e729c7",7245:"68eaaf3112a48224bf50",7249:"b5e7e83ac26bf4ec5fbe",7405:"2bfae0bdc72a5900199c",7460:"140aaba41af8a7b3891b",7502:"e65433dae777c734f950",7521:"26996cc765c12c03e878",7584:"76c89f632c7a8315389e",7610:"69ae28e81db50e4eb6d7",7654:"2a756f12d13ca404a744",7716:"36cbf8b4562f9c80a2e0",7760:"7ab09485b0ef9d161fbf",7803:"7967d211212f85a80dde",7832:"fd7f701b105cdaddf11a",7850:"00845228665a5b4e5deb",7922:"034a466af79e5aec1e20",7936:"e3d58ea261a3cf40f59b",7974:"5056eeaeb6bace4afae6",7984:"aab98ca4cfcb982e0aca",7989:"e2c714d33a44d93648c0",8041:"b0b7ebae013a28bd3488",8312:"9b8eaa85fdf772d344ca",8349:"739a4da1e29881e55220",8398:"effe2e4690559c9dd638",8425:"d93b4ec64b1aced0c856",8463:"55fba49f8743cb008b18",8464:"fa6890448761f6eaa909",8491:"bc7fc77e4b9a26daf89a",8551:"ccccf6dc4ad567097d48",8623:"f3f0b0e4997f9dcf5264",8650:"0397d3d0734fd9230e1b",8656:"930c6a0cab67c68681cd",8682:"e55361dd9642ab2c6cce",8695:"794b59e83f2639bbd4f5",8701:"ac60e542441acfc7d1ff",8750:"a4875cd79305e6148ef1",8883:"7d0a7cd57a0e5306d21e",8924:"2b7dda01776b3d7cfd73",8970:"9662eb9aee235b45a0ba",9013:"2ae202ac00476dac5f77",9052:"bdc47b9882987a855bd3",9101:"d01b4b3b943752d35454",9109:"70032121a681b08c1ca9",9207:"5716fdaacba60c1b00fc",9305:"857144aa3240952e069c",9313:"f002dd41453444b5a5f0",9322:"4c640e97a929f739a3df",9325:"d2f1f08edbd1d07cd106",9393:"aa0534433005d1a82b09",9396:"0515a3d9012750847fd2",9483:"6d46e2bf0399b437ea4b",9510:"a1ded01332afd173d7e1",9558:"11464bec3d82809a0027",9622:"a6e817b0d68ef7cee2d4",9767:"9e8414a89898cf629e48",9794:"6c8b7483e1f99924e7f5",9811:"b3748ff012fc7ee520ef",9857:"169119af235c81fa0bc3",9873:"34c9f3b849b55ef12fa4",9877:"f6f5b18362ffb2b9362c"}[e]+".chunk.js",s.miniCssF=e=>(452===e?"DashboardContainer":e)+"."+{137:"2e4eee61fdab260331a3",380:"b10c6bc15614f70674c7",452:"bc43a49c32355581b0bc",1261:"858915f2b7f5a9a59fc3",1877:"7dd385c6e9090a1b2734",3036:"ea33f16b56589e7fe331",4194:"89e3dd82524d881e7dd7",4237:"f3af87387b276d765b99",4494:"4bf0f6b8a66ee921247f",5566:"34d4af5592bdcfc9eb41",6871:"ee6aaef556c2b3abedbf",8623:"f3f0b0e4997f9dcf5264",8650:"0397d3d0734fd9230e1b",9313:"f002dd41453444b5a5f0"}[e]+".chunk.css",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),s.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},c="superset:",s.l=(e,a,t,r)=>{if(d[e])d[e].push(a);else{var f,o;if(void 0!==t)for(var b=document.getElementsByTagName("script"),n=0;n<b.length;n++){var i=b[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==c+t){f=i;break}}f||(o=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.setAttribute("data-webpack",c+t),f.src=e),d[e]=[a];var l=(a,t)=>{f.onerror=f.onload=null,clearTimeout(u);var c=d[e];if(delete d[e],f.parentNode&&f.parentNode.removeChild(f),c&&c.forEach((e=>e(t))),a)return a(t)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),o&&document.head.appendChild(f)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),s.p="/static/assets/",r=e=>new Promise(((a,t)=>{var d=s.miniCssF(e),c=s.p+d;if(((e,a)=>{for(var t=document.getElementsByTagName("link"),d=0;d<t.length;d++){var c=(f=t[d]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(c===e||c===a))return f}var r=document.getElementsByTagName("style");for(d=0;d<r.length;d++){var f;if((c=(f=r[d]).getAttribute("data-href"))===e||c===a)return f}})(d,c))return a();((e,a,t,d)=>{var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onerror=c.onload=r=>{if(c.onerror=c.onload=null,"load"===r.type)t();else{var f=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||a,b=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");b.code="CSS_CHUNK_LOAD_FAILED",b.type=f,b.request=o,c.parentNode.removeChild(c),d(b)}},c.href=a,document.head.appendChild(c)})(e,c,a,t)})),f={8815:0},s.f.miniCss=(e,a)=>{f[e]?a.push(f[e]):0!==f[e]&&{137:1,380:1,452:1,1261:1,1877:1,3036:1,4194:1,4237:1,4494:1,5566:1,6871:1,8623:1,8650:1,9313:1}[e]&&a.push(f[e]=r(e).then((()=>{f[e]=0}),(a=>{throw delete f[e],a})))},(()=>{var e={8815:0};s.f.j=(a,t)=>{var d=s.o(e,a)?e[a]:void 0;if(0!==d)if(d)t.push(d[2]);else if(/^(126|687)1$/.test(a))e[a]=0;else{var c=new Promise(((t,c)=>d=e[a]=[t,c]));t.push(d[2]=c);var r=s.p+s.u(a),f=new Error;s.l(r,(t=>{if(s.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+a+" failed.\n("+c+": "+r+")",f.name="ChunkLoadError",f.type=c,f.request=r,d[1](f)}}),"chunk-"+a,a)}},s.H.j=a=>{if(!(s.o(e,a)&&void 0!==e[a]||/^(126|687)1$/.test(a))){e[a]=null;var t=document.createElement("link");t.charset="utf-8",s.nc&&t.setAttribute("nonce",s.nc),t.rel="preload",t.as="script",t.href=s.p+s.u(a),document.head.appendChild(t)}},s.O.j=a=>0===e[a];var a=(a,t)=>{var d,c,[r,f,o]=t,b=0;if(r.some((a=>0!==e[a]))){for(d in f)s.o(f,d)&&(s.m[d]=f[d]);if(o)var n=o(s)}for(a&&a(t);b<r.length;b++)c=r[b],s.o(e,c)&&e[c]&&e[c][0](),e[r[b]]=0;return s.O(n)},t=globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})(),o={5296:[1216,995,876,2671,1139,8274,4489,818,452]},s.f.preload=e=>{var a=o[e];Array.isArray(a)&&a.map(s.G)},s.O(void 0,[1216,7550,2102,789,6315,7167,9308,1844,3166,9602,9525,5010,4113,3389,9152],(()=>s(85156)));var i=s.O(void 0,[1216,7550,2102,789,6315,7167,9308,1844,3166,9602,9525,5010,4113,3389,9152],(()=>s(68160)));i=s.O(i)})();
//# sourceMappingURL=embedded.1830418ec448c3fd8e2c.entry.js.map