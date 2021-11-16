(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3853,6898],{13433:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var s=r(67294),o=r(45697),n=r.n(o),a=r(60650),i=r(58593),l=r(14114),d=r(10222),c=r(11965);const g={copyNode:n().node,getText:n().func,onCopyEnd:n().func,shouldShowText:n().bool,text:n().string,wrapped:n().bool,tooltipText:n().string,addDangerToast:n().func.isRequired,addSuccessToast:n().func.isRequired},u={copyNode:(0,c.tZ)("span",null,"Copy"),onCopyEnd:()=>{},shouldShowText:!0,wrapped:!0,tooltipText:(0,a.t)("Copy to clipboard")};var p={name:"8irbms",styles:"display:inline-flex;align-items:center"};class m extends s.Component{constructor(e){super(e),this.copyToClipboard=this.copyToClipboard.bind(this),this.onClick=this.onClick.bind(this)}onClick(){this.props.getText?this.props.getText((e=>{this.copyToClipboard(e)})):this.copyToClipboard(this.props.text)}getDecoratedCopyNode(){return s.cloneElement(this.props.copyNode,{style:{cursor:"pointer"},onClick:this.onClick})}copyToClipboard(e){(0,d.Z)(e).then((()=>{this.props.addSuccessToast((0,a.t)("Copied to clipboard!"))})).catch((()=>{this.props.addDangerToast((0,a.t)("Sorry, your browser does not support copying. Use Ctrl / Cmd + C!"))})).finally((()=>{this.props.onCopyEnd()}))}renderNotWrapped(){return(0,c.tZ)(i.u,{id:"copy-to-clipboard-tooltip",placement:"top",style:{cursor:"pointer"},title:this.props.tooltipText,trigger:["hover"]},this.getDecoratedCopyNode())}renderLink(){return(0,c.tZ)("span",{css:p},this.props.shouldShowText&&this.props.text&&(0,c.tZ)("span",{className:"m-r-5"},this.props.text),(0,c.tZ)(i.u,{id:"copy-to-clipboard-tooltip",placement:"top",title:this.props.tooltipText,trigger:["hover"]},this.getDecoratedCopyNode()))}render(){const{wrapped:e}=this.props;return e?this.renderLink():this.renderNotWrapped()}}const _=(0,l.Z)(m);m.propTypes=g,m.defaultProps=u},54076:(e,t,r)=>{"use strict";r.d(t,{li:()=>a,Tb:()=>i,jy:()=>l,G9:()=>c,Mv:()=>g,cD:()=>u,EI:()=>p,fV:()=>m});var s=r(14826),o=r(76187),n=r(21173);const a="<NULL>",i="TRUE",l="FALSE",d=(0,s.bt)(o.Z.DATABASE_DATETIME);function c(e){return n.Z.post({endpoint:"/kv/store/",postPayload:{data:e}}).then((e=>`${window.location.origin+window.location.pathname}?id=${e.json.id}`))}function g(e,t){let r="";for(let s=0;s<e.length;s+=1){const o={};for(let r=0;r<t.length;r+=1){const n=t[r].name||t[r];e[s][n]?o[r]=e[s][n]:o[r]=e[s][parseFloat(n)]}r+=`${Object.values(o).join("\t")}\n`}return r}function u(e){return e&&0!==e.length&&"__timestamp"in e[0]?e.map((e=>({...e,__timestamp:0===e.__timestamp||e.__timestamp?d(new Date(e.__timestamp)):e.__timestamp}))):e}const p=()=>{},m=()=>{const{appVersion:e}=navigator;return e.includes("Win")?"Windows":e.includes("Mac")?"MacOS":e.includes("X11")?"UNIX":e.includes("Linux")?"Linux":"Unknown OS"}},46700:(e,t,r)=>{var s={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function o(e){var t=n(e);return r(t)}function n(e){if(!r.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=n,e.exports=o,o.id=46700},82191:(e,t,r)=>{"use strict";r.d(t,{Qc:()=>u.Z,qE:()=>p.C,zx:()=>m.Z,XZ:()=>_.Z,JX:()=>h.Z,iz:()=>R.Z,Lt:()=>d.Z,l0:()=>v.Z,HY:()=>E.Z,ZT:()=>b.Z,mp:()=>O.Z,iR:()=>f.Z,X2:()=>N.Z,Od:()=>c.Z,Rg:()=>T.Z,rs:()=>y.Z,Vp:()=>C.Z,mQ:()=>S.Z,u:()=>x.Z,gq:()=>k.Z,oc:()=>i.Z,Ak:()=>j.Z,u_:()=>A.Z,bZ:()=>Z.default,Ph:()=>I.default,aV:()=>D.default,UO:()=>w.Z,v2:()=>L,$t:()=>M,II:()=>V,Rn:()=>z,Kx:()=>F,$i:()=>P,yX:()=>W});var s=r(5872),o=r.n(s),n=(r(67294),r(37840)),a=r(43865),i=r(4107),l=r(21888),d=r(16114),c=r(33860),g=r(11965),u=r(49288),p=r(51890),m=r(60404),_=r(9676),h=r(15746),R=r(27049),v=r(7646),E=r(14277),b=r(59118),O=r(31183),f=r(31955),N=r(71230),T=r(27220),y=r(59314),C=r(60331),S=r(88108),x=r(31097),k=r(76310),j=r(39144),A=r(56697),Z=r(4863),I=r(64749),D=r(56590),w=r(43700);r(82607),r(57011),r(67135);const $=(0,n.iK)(a.Z.Item)`
  > a {
    text-decoration: none;
  }

  &.ant-menu-item {
    height: ${({theme:e})=>7*e.gridUnit}px;
    line-height: ${({theme:e})=>7*e.gridUnit}px;
    a {
      border-bottom: none;
      transition: background-color ${({theme:e})=>e.transitionTiming}s;
      &:after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        width: 0;
        height: 3px;
        opacity: 0;
        transform: translateX(-50%);
        transition: all ${({theme:e})=>e.transitionTiming}s;
        background-color: ${({theme:e})=>e.colors.primary.base};
      }
      &:focus {
        border-bottom: none;
        background-color: transparent;
        @media (max-width: 767px) {
          background-color: ${({theme:e})=>e.colors.primary.light5};
        }
      }
    }
  }

  &.ant-menu-item,
  &.ant-dropdown-menu-item {
    span[role='button'] {
      display: inline-block;
      width: 100%;
    }
    transition-duration: 0s;
  }
`,U=(0,n.iK)(a.Z)`
  line-height: 51px;
  border: none;

  & > .ant-menu-item,
  & > .ant-menu-submenu {
    vertical-align: inherit;
    &:hover {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    &:hover {
      border-bottom: none;
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0px;
  }

  & > .ant-menu-item > a {
    padding: ${({theme:e})=>4*e.gridUnit}px;
  }
`,B=(0,n.iK)(a.Z.SubMenu)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  border-bottom: none;
  .ant-menu-submenu-open,
  .ant-menu-submenu-active {
    background-color: ${({theme:e})=>e.colors.primary.light5};
    .ant-menu-submenu-title {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
      background-color: ${({theme:e})=>e.colors.primary.light5};
      border-bottom: none;
      margin: 0;
      &:after {
        opacity: 1;
        width: calc(100% - 1);
      }
    }
  }
  .ant-menu-submenu-title {
    position: relative;
    top: ${({theme:e})=>-e.gridUnit-3}px;
    &:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 50%;
      width: 0;
      height: 3px;
      opacity: 0;
      transform: translateX(-50%);
      transition: all ${({theme:e})=>e.transitionTiming}s;
      background-color: ${({theme:e})=>e.colors.primary.base};
    }
  }
  .ant-menu-submenu-arrow {
    top: 67%;
  }
  & > .ant-menu-submenu-title {
    padding: 0 ${({theme:e})=>6*e.gridUnit}px 0
      ${({theme:e})=>3*e.gridUnit}px !important;
    span[role='img'] {
      position: absolute;
      right: ${({theme:e})=>-e.gridUnit-2}px;
      top: ${({theme:e})=>5.25*e.gridUnit}px;
      svg {
        font-size: ${({theme:e})=>6*e.gridUnit}px;
        color: ${({theme:e})=>e.colors.grayscale.base};
      }
    }
    & > span {
      position: relative;
      top: 7px;
    }
    &:hover {
      color: ${({theme:e})=>e.colors.primary.base};
    }
  }
`,L=Object.assign(a.Z,{Item:$}),M=Object.assign(U,{Item:$,SubMenu:B,Divider:a.Z.Divider,ItemGroup:a.Z.ItemGroup}),V=(0,n.iK)(i.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,z=(0,n.iK)(l.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,F=(0,n.iK)(i.Z.TextArea)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,P=e=>(0,g.tZ)(d.Z,o()({overlayStyle:{zIndex:99,animationDuration:"0s"}},e)),W=(0,n.iK)(c.Z)`
  h3 {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  ul {
    margin-bottom: 0;
  }
`},82607:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a}),r(67294);var s=r(37840),o=r(62529),n=r(11965);const a=(0,s.iK)((({textColor:e,...t})=>(0,n.tZ)(o.Z,t)))`
  & > sup {
    padding: 0 ${({theme:e})=>2*e.gridUnit}px;
    background: ${({theme:e,color:t})=>t||e.colors.primary.base};
    color: ${({theme:e,textColor:t})=>t||e.colors.grayscale.light5};
  }
`},35932:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var s=r(5872),o=r.n(s),n=r(11965),a=r(21804),i=r.n(a),l=r(67294),d=r(84967),c=r(94184),g=r.n(c),u=r(60404),p=r(37840),m=r(58593);function _(e){const{tooltip:t,placement:r,disabled:s=!1,buttonSize:a,buttonStyle:c,className:_,cta:h,children:R,href:v,showMarginRight:E=!0,...b}=e,O=(0,p.Fg)(),{colors:f,transitionTiming:N,borderRadius:T,typography:y}=O,{primary:C,grayscale:S,success:x,warning:k,error:j}=f;let A=32,Z=18;"xsmall"===a?(A=22,Z=5):"small"===a&&(A=30,Z=10);let I=C.light4,D=(0,d.CD)(.1,C.base,C.light4),w=(0,d.CD)(.25,C.base,C.light4),$=S.light2,U=C.dark1,B=U,L=0,M="none",V="transparent",z="transparent",F="transparent";"primary"===c?(I=C.dark1,D=(0,d.CD)(.1,S.light5,C.dark1),w=(0,d.CD)(.2,S.dark2,C.dark1),U=S.light5,B=U):"tertiary"===c||"dashed"===c?(I=S.light5,D=S.light5,w=S.light5,$=S.light5,L=1,M="dashed"===c?"dashed":"solid",V=C.dark1,z=C.light1,F=S.light2):"danger"===c?(I=j.base,D=(0,d.CD)(.1,S.light5,j.base),w=(0,d.CD)(.2,S.dark2,j.base),U=S.light5,B=U):"warning"===c?(I=k.base,D=(0,d.CD)(.1,S.dark2,k.base),w=(0,d.CD)(.2,S.dark2,k.base),U=S.light5,B=U):"success"===c?(I=x.base,D=(0,d.CD)(.1,S.light5,x.base),w=(0,d.CD)(.2,S.dark2,x.base),U=S.light5,B=U):"link"===c&&(I="transparent",D="transparent",w="transparent",B=C.base);const P=R;let W=[];W=P&&P.type===l.Fragment?l.Children.toArray(P.props.children):l.Children.toArray(R);const K=E&&W.length>1?2*O.gridUnit:0,J=(0,n.tZ)(u.Z,o()({href:s?void 0:v,disabled:s,className:g()(_,"superset-button",{cta:!!h}),css:(0,n.iv)({display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:1.5715,fontSize:y.sizes.s,fontWeight:y.weights.bold,height:A,textTransform:"uppercase",padding:`0px ${Z}px`,transition:`all ${N}s`,minWidth:h?36*O.gridUnit:void 0,minHeight:h?8*O.gridUnit:void 0,boxShadow:"none",borderWidth:L,borderStyle:M,borderColor:V,borderRadius:T,color:U,backgroundColor:I,"&:hover":{color:B,backgroundColor:D,borderColor:z},"&:active":{color:U,backgroundColor:w},"&:focus":{color:U,backgroundColor:I,borderColor:V},"&[disabled], &[disabled]:hover":{color:S.base,backgroundColor:$,borderColor:F},marginLeft:0,"& + .superset-button":{marginLeft:2*O.gridUnit},"& :first-of-type":{marginRight:K}},"","")},b),R);return t?(0,n.tZ)(m.u,{placement:r,id:`${i()(t)}-tooltip`,title:t},s?(0,n.tZ)("span",null,J):J):J}},57011:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(5872),o=r.n(s),n=(r(67294),r(70302)),a=r(11965);const i=({padded:e,...t})=>(0,a.tZ)(n.Z,o()({},t,{css:t=>({backgroundColor:t.colors.grayscale.light4,borderRadius:t.borderRadius,".ant-card-body":{padding:e?4*t.gridUnit:t.gridUnit}})}))},43700:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a}),r(67294);var s=r(37840),o=r(46445),n=r(11965);const a=Object.assign((0,s.iK)((({light:e,bigger:t,bold:r,animateArrows:s,...a})=>(0,n.tZ)(o.Z,a)))`
    .ant-collapse-item {
      .ant-collapse-header {
        font-weight: ${({bold:e,theme:t})=>e?t.typography.weights.bold:t.typography.weights.normal};
        font-size: ${({bigger:e,theme:t})=>e?4*t.gridUnit+"px":"inherit"};

        .ant-collapse-arrow svg {
          transition: ${({animateArrows:e})=>e?"transform 0.24s":"none"};
        }

        ${({expandIconPosition:e})=>e&&"right"===e&&"\n            .anticon.anticon-right.ant-collapse-arrow > svg {\n              transform: rotate(90deg) !important;\n            }\n          "}

        ${({light:e,theme:t})=>e&&`\n            color: ${t.colors.grayscale.light4};\n            .ant-collapse-arrow svg {\n              color: ${t.colors.grayscale.light4};\n            }\n          `}

        ${({ghost:e,bordered:t,theme:r})=>e&&t&&`\n            border-bottom: 1px solid ${r.colors.grayscale.light3};\n          `}
      }
      .ant-collapse-content {
        .ant-collapse-content-box {
          .loading.inline {
            margin: ${({theme:e})=>12*e.gridUnit}px auto;
            display: block;
          }
        }
      }
    }
    .ant-collapse-item-active {
      .ant-collapse-header {
        ${({expandIconPosition:e})=>e&&"right"===e&&"\n            .anticon.anticon-right.ant-collapse-arrow > svg {\n              transform: rotate(-90deg) !important;\n            }\n          "}
      }
    }
  `,{Panel:o.Z.Panel})},91178:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var s=r(67294),o=r(37840),n=r(60650),a=r(54076),i=r(74069),l=r(35932),d=r(38097),c=r(13433),g=r(11965);const u=o.iK.div`
  align-items: center;
  background-color: ${({level:e,theme:t})=>t.colors[e].light2};
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({level:e,theme:t})=>t.colors[e].base};
  color: ${({level:e,theme:t})=>t.colors[e].dark2};
  padding: ${({theme:e})=>2*e.gridUnit}px;
  width: 100%;

  .top-row {
    display: flex;
    justify-content: space-between;
  }

  .error-body {
    padding-top: ${({theme:e})=>e.gridUnit}px;
    padding-left: ${({theme:e})=>8*e.gridUnit}px;
  }

  .icon {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
  }

  .link {
    color: ${({level:e,theme:t})=>t.colors[e].dark2};
    text-decoration: underline;
  }
`,p=(0,o.iK)(i.Z)`
  color: ${({level:e,theme:t})=>t.colors[e].dark2};
  overflow-wrap: break-word;

  .ant-modal-header {
    background-color: ${({level:e,theme:t})=>t.colors[e].light2};
    padding: ${({theme:e})=>4*e.gridUnit}px;
  }

  .icon {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
  }

  .header {
    display: flex;
    align-items: center;
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
  }
`,m=o.iK.div`
  align-items: center;
  display: flex;
`;function _({body:e,copyText:t,level:r="error",source:i="dashboard",subtitle:_,title:h}){const R=(0,o.Fg)(),[v,E]=(0,s.useState)(!1),[b,O]=(0,s.useState)(!1),f=["explore","sqllab"].includes(i),N=R.colors[r].base;return(0,g.tZ)(u,{level:r,role:"alert"},(0,g.tZ)("div",{className:"top-row"},(0,g.tZ)(m,null,"error"===r?(0,g.tZ)(d.Z.ErrorSolid,{className:"icon",iconColor:N}):(0,g.tZ)(d.Z.WarningSolid,{className:"icon",iconColor:N}),(0,g.tZ)("strong",null,h)),!f&&(0,g.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>E(!0)},(0,n.t)("See more"))),f?(0,g.tZ)("div",{className:"error-body"},(0,g.tZ)("p",null,_),e&&(0,g.tZ)(s.Fragment,null,!b&&(0,g.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>O(!0)},(0,n.t)("See more")),b&&(0,g.tZ)(s.Fragment,null,(0,g.tZ)("br",null),e,(0,g.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>O(!1)},(0,n.t)("See less"))))):(0,g.tZ)(p,{level:r,show:v,onHide:()=>E(!1),title:(0,g.tZ)("div",{className:"header"},"error"===r?(0,g.tZ)(d.Z.ErrorSolid,{className:"icon",iconColor:N}):(0,g.tZ)(d.Z.WarningSolid,{className:"icon",iconColor:N}),(0,g.tZ)("div",{className:"title"},h)),footer:(0,g.tZ)(s.Fragment,null,t&&(0,g.tZ)(c.Z,{text:t,shouldShowText:!1,wrapped:!1,copyNode:(0,g.tZ)(l.Z,{onClick:a.EI},(0,n.t)("Copy message"))}),(0,g.tZ)(l.Z,{cta:!0,buttonStyle:"primary",onClick:()=>E(!1)},(0,n.t)("Close")))},(0,g.tZ)(s.Fragment,null,(0,g.tZ)("p",null,_),(0,g.tZ)("br",null),e)))}},92869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(8018),o=r(23630);class n extends s.Z{constructor(){super({name:"ErrorMessageComponent",overwritePolicy:s.r.ALLOW})}}const a=(0,o.Z)(n)},67663:(e,t,r)=>{"use strict";r.d(t,{C:()=>s});const s={FRONTEND_CSRF_ERROR:"FRONTEND_CSRF_ERROR",FRONTEND_NETWORK_ERROR:"FRONTEND_NETWORK_ERROR",FRONTEND_TIMEOUT_ERROR:"FRONTEND_TIMEOUT_ERROR",GENERIC_DB_ENGINE_ERROR:"GENERIC_DB_ENGINE_ERROR",COLUMN_DOES_NOT_EXIST_ERROR:"COLUMN_DOES_NOT_EXIST_ERROR",TABLE_DOES_NOT_EXIST_ERROR:"TABLE_DOES_NOT_EXIST_ERROR",SCHEMA_DOES_NOT_EXIST_ERROR:"SCHEMA_DOES_NOT_EXIST_ERROR",CONNECTION_INVALID_USERNAME_ERROR:"CONNECTION_INVALID_USERNAME_ERROR",CONNECTION_INVALID_PASSWORD_ERROR:"CONNECTION_INVALID_PASSWORD_ERROR",CONNECTION_INVALID_HOSTNAME_ERROR:"CONNECTION_INVALID_HOSTNAME_ERROR",CONNECTION_PORT_CLOSED_ERROR:"CONNECTION_PORT_CLOSED_ERROR",CONNECTION_INVALID_PORT_ERROR:"CONNECTION_INVALID_PORT_ERROR",CONNECTION_HOST_DOWN_ERROR:"CONNECTION_HOST_DOWN_ERROR",CONNECTION_ACCESS_DENIED_ERROR:"CONNECTION_ACCESS_DENIED_ERROR",CONNECTION_UNKNOWN_DATABASE_ERROR:"CONNECTION_UNKNOWN_DATABASE_ERROR",CONNECTION_DATABASE_PERMISSIONS_ERROR:"CONNECTION_DATABASE_PERMISSIONS_ERROR",CONNECTION_MISSING_PARAMETERS_ERRORS:"CONNECTION_MISSING_PARAMETERS_ERRORS",OBJECT_DOES_NOT_EXIST_ERROR:"OBJECT_DOES_NOT_EXIST_ERROR",SYNTAX_ERROR:"SYNTAX_ERROR",VIZ_GET_DF_ERROR:"VIZ_GET_DF_ERROR",UNKNOWN_DATASOURCE_TYPE_ERROR:"UNKNOWN_DATASOURCE_TYPE_ERROR",FAILED_FETCHING_DATASOURCE_INFO_ERROR:"FAILED_FETCHING_DATASOURCE_INFO_ERROR",TABLE_SECURITY_ACCESS_ERROR:"TABLE_SECURITY_ACCESS_ERROR",DATASOURCE_SECURITY_ACCESS_ERROR:"DATASOURCE_SECURITY_ACCESS_ERROR",DATABASE_SECURITY_ACCESS_ERROR:"DATABASE_SECURITY_ACCESS_ERROR",QUERY_SECURITY_ACCESS_ERROR:"QUERY_SECURITY_ACCESS_ERROR",MISSING_OWNERSHIP_ERROR:"MISSING_OWNERSHIP_ERROR",BACKEND_TIMEOUT_ERROR:"BACKEND_TIMEOUT_ERROR",DATABASE_NOT_FOUND_ERROR:"DATABASE_NOT_FOUND_ERROR",MISSING_TEMPLATE_PARAMS_ERROR:"MISSING_TEMPLATE_PARAMS_ERROR",INVALID_TEMPLATE_PARAMS_ERROR:"INVALID_TEMPLATE_PARAMS_ERROR",RESULTS_BACKEND_NOT_CONFIGURED_ERROR:"RESULTS_BACKEND_NOT_CONFIGURED_ERROR",DML_NOT_ALLOWED_ERROR:"DML_NOT_ALLOWED_ERROR",INVALID_CTAS_QUERY_ERROR:"INVALID_CTAS_QUERY_ERROR",INVALID_CVAS_QUERY_ERROR:"INVALID_CVAS_QUERY_ERROR",SQLLAB_TIMEOUT_ERROR:"SQLLAB_TIMEOUT_ERROR",RESULTS_BACKEND_ERROR:"RESULTS_BACKEND_ERROR",ASYNC_WORKERS_ERROR:"ASYNC_WORKERS_ERROR",GENERIC_COMMAND_ERROR:"GENERIC_COMMAND_ERROR",GENERIC_BACKEND_ERROR:"GENERIC_BACKEND_ERROR",INVALID_PAYLOAD_FORMAT_ERROR:"INVALID_PAYLOAD_FORMAT_ERROR",INVALID_PAYLOAD_SCHEMA_ERROR:"INVALID_PAYLOAD_SCHEMA_ERROR"}},38097:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var s=r(5872),o=r.n(s),n=r(18029),a=r.n(n),i=(r(15306),r(67294)),l=r(62816),d=r(16165),c=r(37840);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},g.apply(this,arguments)}const u=function(e){return i.createElement("svg",g({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e))};var p=r(11965);const m=(0,c.iK)((({iconColor:e,iconSize:t,viewBox:r,...s})=>(0,p.tZ)(d.Z,o()({viewBox:r||"0 0 24 24"},s))))`
  ${({iconColor:e})=>e&&`color: ${e};`};
  font-size: ${({iconSize:e,theme:t})=>e?`${t.typography.sizes[e]||t.typography.sizes.m}px`:"24px"};
`,_=e=>{const{fileName:t,...s}=e,[,n]=(0,i.useState)(!1),a=(0,i.useRef)(),l=t.replace("_","-");return(0,i.useEffect)((()=>{let e=!1;return async function(){a.current=(await r(35782)(`./${t}.svg`)).default,e||n(!0)}(),()=>{e=!0}}),[t,a]),(0,p.tZ)(m,o()({component:a.current||u,"aria-label":l},s))},h=Object.keys(l).map((e=>({[e]:t=>(0,p.tZ)(m,o()({component:l[e]},t))}))).reduce(((e,t)=>({...e,...t}))),R={};["alert","alert_solid","alert_solid_small","binoculars","bolt","bolt_small","bolt_small_run","calendar","cancel","cancel_solid","cancel-x","card_view","cards","cards_locked","caret_down","caret_left","caret_right","caret_up","certified","check","checkbox-half","checkbox-off","checkbox-on","circle_check","circle_check_solid","circle","clock","close","code","cog","collapse","color_palette","components","copy","cursor_target","database","dataset_physical","dataset_virtual_greyscale","dataset_virtual","download","drag","edit_alt","edit","email","error","error_solid","error_solid_small","exclamation","expand","eye","eye_slash","favorite-selected","favorite_small_selected","favorite-unselected","field_abc","field_boolean","field_date","field_derived","field_num","field_struct","file","filter","filter_small","folder","full","function_x","gear","grid","image","import","info","info-solid","info_solid_small","join","keyboard","layers","lightbulb","link","list","list_view","location","lock_locked","lock_unlocked","map","message","minus","minus_solid","more_horiz","more_vert","move","nav_charts","nav_dashboard","nav_data","nav_explore","nav_home","nav_lab","note","offline","paperclip","placeholder","plus","plus_large","plus_small","plus_solid","queued","refresh","running","save","sql","search","server","share","slack","sort_asc","sort_desc","sort","table","tag","trash","triangle_change","triangle_down","triangle_up","up-level","user","warning","warning_solid","x-large","x-small","tags","ballot","category"].forEach((e=>{const t=a()(e).replace(/ /g,"");R[t]=t=>(0,p.tZ)(_,o()({fileName:e},t))}));const v={...h,...R}},37921:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(5872),o=r.n(s),n=r(11965),a=(r(67294),r(82191)),i=r(37840);function l(e){const t=(0,i.Fg)(),{colors:r,transitionTiming:s}=t,{type:l,onClick:d,children:c,...g}=e,{primary:u,secondary:p,grayscale:m,success:_,warning:h,error:R,info:v}=r;let E=m.light3,b=d?u.light2:m.light3,O=d?m.light2:"transparent",f=d?u.light1:"transparent",N=m.dark1;if(l&&"default"!==l){let e;N=m.light4,e="success"===l?_:"warning"===l?h:"danger"===l?R:"info"===l?v:"secondary"===l?p:u,E=e.base,b=d?e.dark1:e.base,O=d?e.dark1:"transparent",f=d?e.dark2:"transparent"}return(0,n.tZ)(a.Vp,o()({onClick:d},g,{css:(0,n.iv)({transition:`background-color ${s}s`,whiteSpace:"nowrap",cursor:d?"pointer":"default",overflow:"hidden",textOverflow:"ellipsis",backgroundColor:E,borderColor:O,borderRadius:21,padding:"0.35em 0.8em",lineHeight:1,color:N,maxWidth:"100%","&:hover":{backgroundColor:b,borderColor:f,opacity:1}},"","")}),c)}},72570:(e,t,r)=>{"use strict";r.d(t,{h:()=>a,fz:()=>i,K7:()=>l,RS:()=>d,bM:()=>c,ws:()=>g,Dz:()=>u,Gb:()=>p,s2:()=>m});var s=r(14670),o=r.n(s),n=r(8818);const a="ADD_TOAST";function i({toastType:e,text:t,duration:r=8e3,noDuplicate:s=!1}){return{type:a,payload:{id:(n=e,`${n}-${o().generate()}`),toastType:e,text:t,duration:r,noDuplicate:s}};var n}const l="REMOVE_TOAST";function d(e){return{type:l,payload:{id:e}}}function c(e,t){return i({text:e,toastType:n.p.INFO,duration:4e3,...t})}function g(e,t){return i({text:e,toastType:n.p.SUCCESS,duration:4e3,...t})}function u(e,t){return i({text:e,toastType:n.p.WARNING,duration:6e3,...t})}function p(e,t){return i({text:e,toastType:n.p.DANGER,duration:8e3,...t})}const m={addInfoToast:c,addSuccessToast:g,addWarningToast:u,addDangerToast:p}},8818:(e,t,r)=>{"use strict";var s;r.d(t,{p:()=>s}),function(e){e.INFO="INFO_TOAST",e.SUCCESS="SUCCESS_TOAST",e.WARNING="WARNING_TOAST",e.DANGER="DANGER_TOAST"}(s||(s={}))},14114:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l,e:()=>d});var s=r(67294),o=r(14890),n=r(37703),a=r(72570);const i={addInfoToast:a.bM,addSuccessToast:a.ws,addWarningToast:a.Dz,addDangerToast:a.Gb};function l(e){return(0,n.$j)(null,(e=>(0,o.DE)(i,e)))(e)}function d(){const e=(0,n.I0)();return(0,s.useMemo)((()=>(0,o.DE)(i,e)),[e])}},74069:(e,t,r)=>{"use strict";r.d(t,{o:()=>h,Z:()=>v});var s=r(5872),o=r.n(s),n=r(14293),a=r.n(n),i=r(67294),l=r(37840),d=r(60650),c=r(11965),g=r(82191),u=r(35932),p=r(29119),m=r(61193),_=r.n(m);const h=(0,l.iK)((e=>(0,c.tZ)(g.u_,o()({},e,{maskTransitionName:""}))))`
  ${({theme:e,responsive:t,maxWidth:r})=>t&&(0,c.iv)("max-width:",null!=r?r:"900px",";padding-left:",3*e.gridUnit,"px;padding-right:",3*e.gridUnit,"px;","")}

  .ant-modal-header {
    background-color: ${({theme:e})=>e.colors.grayscale.light4};
    border-radius: ${({theme:e})=>e.borderRadius}px
      ${({theme:e})=>e.borderRadius}px 0 0;
    padding-left: ${({theme:e})=>4*e.gridUnit}px;
    padding-right: ${({theme:e})=>4*e.gridUnit}px;

    .ant-modal-title h4 {
      display: flex;
      margin: 0;
      align-items: center;
    }
  }

  .ant-modal-close-x {
    display: flex;
    align-items: center;

    .close {
      flex: 1 1 auto;
      margin-bottom: ${({theme:e})=>e.gridUnit}px;
      color: ${({theme:e})=>e.colors.secondary.dark1};
      font-size: 32px;
      font-weight: ${({theme:e})=>e.typography.weights.light};
    }
  }

  .ant-modal-body {
    padding: ${({theme:e})=>4*e.gridUnit}px;
    overflow: auto;
    ${({resizable:e,height:t})=>!e&&t&&`height: ${t};`}
  }
  .ant-modal-footer {
    border-top: ${({theme:e})=>e.gridUnit/4}px solid
      ${({theme:e})=>e.colors.grayscale.light2};
    padding: ${({theme:e})=>4*e.gridUnit}px;

    .btn {
      font-size: 12px;
      text-transform: uppercase;
    }

    .btn + .btn {
      margin-left: ${({theme:e})=>2*e.gridUnit}px;
    }
  }

  // styling for Tabs component
  // Aaron note 20-11-19: this seems to be exclusively here for the Edit Database modal.
  // TODO: remove this as it is a special case.
  .ant-tabs-top {
    margin-top: -${({theme:e})=>4*e.gridUnit}px;
  }

  &.no-content-padding .ant-modal-body {
    padding: 0;
  }

  ${({draggable:e,theme:t})=>e&&`\n    .ant-modal-header {\n      padding: 0;\n      .draggable-trigger {\n          cursor: move;\n          padding: ${4*t.gridUnit}px;\n          width: 100%;\n        }\n    }\n  `};

  ${({resizable:e,hideFooter:t})=>e&&`\n    .resizable {\n      pointer-events: all;\n\n      .resizable-wrapper {\n        height: 100%;\n      }\n\n      .ant-modal-content {\n        height: 100%;\n\n        .ant-modal-body {\n          /* 100% - header height - footer height */\n          height: ${t?"calc(100% - 55px);":"calc(100% - 55px - 65px);"}\n        }\n      }\n    }\n  `}
`,R=({children:e,disablePrimaryButton:t=!1,onHide:r,onHandledPrimaryAction:s,primaryButtonName:n=(0,d.t)("OK"),primaryButtonType:l="primary",show:g,name:m,title:R,width:v,maxWidth:E,responsive:b=!1,centered:O,footer:f,hideFooter:N,wrapProps:T,draggable:y=!1,resizable:C=!1,resizableConfig:S={maxHeight:"100vh",maxWidth:"100vw",minHeight:N?109:174,minWidth:"380px",enable:{bottom:!0,bottomLeft:!1,bottomRight:!0,left:!1,top:!1,topLeft:!1,topRight:!1,right:!0}},draggableConfig:x,destroyOnClose:k,...j})=>{const A=(0,i.useRef)(null),[Z,I]=(0,i.useState)(),[D,w]=(0,i.useState)(!0),$=a()(f)?[(0,c.tZ)(u.Z,{key:"back",onClick:r,cta:!0},(0,d.t)("Cancel")),(0,c.tZ)(u.Z,{key:"submit",buttonStyle:l,disabled:t,onClick:s,cta:!0},n)]:f,U=v||(b?"100vw":"600px"),B=!(C||y);return(0,c.tZ)(h,o()({centered:!!O,onOk:s,onCancel:r,width:U,maxWidth:E,responsive:b,visible:g,title:(0,c.tZ)((()=>y?(0,c.tZ)("div",{className:"draggable-trigger",onMouseOver:()=>D&&w(!1),onMouseOut:()=>!D&&w(!0)},R):(0,c.tZ)(i.Fragment,null,R)),null),closeIcon:(0,c.tZ)("span",{className:"close","aria-hidden":"true"},"×"),footer:N?null:$,hideFooter:N,wrapProps:{"data-test":`${m||R}-modal`,...T},modalRender:e=>C||y?(0,c.tZ)(_(),o()({disabled:!y||D,bounds:Z,onStart:(e,t)=>((e,t)=>{var r,s,o;const{clientWidth:n,clientHeight:a}=null==(r=window)||null==(s=r.document)?void 0:s.documentElement,i=null==A||null==(o=A.current)?void 0:o.getBoundingClientRect();i&&I({left:-(null==i?void 0:i.left)+(null==t?void 0:t.x),right:n-((null==i?void 0:i.right)-(null==t?void 0:t.x)),top:-(null==i?void 0:i.top)+(null==t?void 0:t.y),bottom:a-((null==i?void 0:i.bottom)-(null==t?void 0:t.y))})})(0,t)},x),C?(0,c.tZ)(p.e,o()({className:"resizable"},S),(0,c.tZ)("div",{className:"resizable-wrapper",ref:A},e)):(0,c.tZ)("div",{ref:A},e)):e,mask:B,draggable:y,resizable:C,destroyOnClose:k||C||y},j),e)};R.displayName="Modal";const v=Object.assign(R,{error:g.u_.error,warning:g.u_.warning,confirm:g.u_.confirm,useModal:g.u_.useModal})},67135:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a}),r(67294);var s=r(37840),o=r(82833),n=r(11965);const a=(0,s.iK)((({striped:e,...t})=>(0,n.tZ)(o.Z,t)))`
  line-height: 0;
  position: static;
  .ant-progress-inner {
    position: static;
  }
  .ant-progress-outer {
    ${({percent:e})=>!e&&"display: none;"}
  }
  .ant-progress-text {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }
  .ant-progress-bg {
    position: static;
    ${({striped:e})=>e&&"\n        background-image: linear-gradient(45deg,\n            rgba(255, 255, 255, 0.15) 25%,\n            transparent 25%, transparent 50%,\n            rgba(255, 255, 255, 0.15) 50%,\n            rgba(255, 255, 255, 0.15) 75%,\n            transparent 75%, transparent) !important;\n        background-size: 1rem 1rem !important;\n        "};
  }
`},58593:(e,t,r)=>{"use strict";r.d(t,{u:()=>d});var s=r(5872),o=r.n(s),n=r(67294),a=r(37840),i=r(11965),l=r(31097);const d=e=>{const t=(0,a.Fg)();return(0,i.tZ)(n.Fragment,null,(0,i.tZ)(i.xB,{styles:i.iv`
          .ant-tooltip-open {
            display: inline-block;
            &::after {
              content: '';
              display: block;
            }
          }
        `}),(0,i.tZ)(l.Z,o()({overlayStyle:{fontSize:t.typography.sizes.s,lineHeight:"1.6"},color:`${t.colors.grayscale.dark2}e6`},e)))}},26009:(e,t,r)=>{"use strict";r.d(t,{r:()=>B});var s=r(82492),o=r.n(s),n=(r(36486),r(30381)),a=r.n(n),i=r(60650),l=r(37840),d=r(21173),c=r(23099),g=r(89816),u=r(34042),p=r(47779),m=r(62234),_=r(69841),h=r(29233),R=r(95289),v=r(57546),E=r(72814),b=r(67542),O=r(18835),f=r(72410);function N(e,t,r){var s;t.forEach((t=>{e.registerValue(t.id,t)}));const o=(null==(s=t.find((e=>e.isDefault)))?void 0:s.id)||r;e.setDefaultKey(o)}var T,y,C,S,x,k,j,A=r(50855),Z=r(63758),I=r(75908),D=r(14826),w=r(11304),$=r(47447);let U;if("undefined"!=typeof window){const e=document.getElementById("app");if(U=e?JSON.parse(e.getAttribute("data-bootstrap")||"{}"):{},U.common&&U.common.language_pack){const e=U.common.language_pack;(0,i.jQ)({languagePack:e}),a().locale(U.common.locale)}else(0,i.jQ)()}else(0,i.jQ)();!function(){var e,t,r,s;const o=document.querySelector("#csrf_token"),n=null==o?void 0:o.value,a=(0,g.Z)().csrf_access_token||"";d.Z.configure({protocol:["http:","https:"].includes(null==(e=window)||null==(t=e.location)?void 0:t.protocol)?null==(r=window)||null==(s=r.location)?void 0:s.protocol:void 0,host:window.location&&window.location.host||"",csrfToken:n||a}).init().catch((e=>{c.Z.warn("Error initializing SupersetClient",e)}))}(),function(e=[],t=[]){N((0,u.Z)(),[...p.Z,...m.Z,..._.Z,...h.Z,...R.Z,...v.Z,...E.Z,...e],"supersetColors"),N((0,b.Z)(),[...O.Z,...f.Z,...t],"superset_seq_1")}(null==(T=U)||null==(y=T.common)?void 0:y.extra_categorical_color_schemes,null==(C=U)||null==(S=C.common)?void 0:S.extra_sequential_color_schemes),(0,A.ZP)().registerValue(",0",(0,A.JB)(",.4~f")).registerValue("null",(0,A.JB)(",.4~f")).registerValue("%",(0,A.JB)(".0%")).registerValue(".",(0,A.JB)(".4~f")).registerValue(",f",(0,A.JB)(",d")).registerValue(",r",(0,A.JB)(",.4f")).registerValue("0f",(0,A.JB)(",d")).registerValue(",#",(0,A.JB)(",.4~f")).registerValue("$,f",(0,A.JB)("$,d")).registerValue("0%",(0,A.JB)(".0%")).registerValue("f",(0,A.JB)(",d")).registerValue(",.",(0,A.JB)(",.4~f")).registerValue(".1%f",(0,A.JB)(".1%")).registerValue("1%",(0,A.JB)(".0%")).registerValue("3%",(0,A.JB)(".0%")).registerValue(",%",(0,A.JB)(",.0%")).registerValue(".r",(0,A.JB)(".4~f")).registerValue("$,.0",(0,A.JB)("$,d")).registerValue("$,.1",(0,A.JB)("$,.1~f")).registerValue(",0s",(0,A.JB)(",.4~f")).registerValue("%%%",(0,A.JB)(".0%")).registerValue(",0f",(0,A.JB)(",d")).registerValue("+,%",(0,A.JB)("+,.0%")).registerValue("$f",(0,A.JB)("$,d")).registerValue("+,",(0,A.JB)(Z.Z.INTEGER_SIGNED)).registerValue(",2f",(0,A.JB)(",.4~f")).registerValue(",g",(0,A.JB)(",.4~f")).registerValue("int",(0,A.JB)(Z.Z.INTEGER)).registerValue(".0%f",(0,A.JB)(".1%")).registerValue("$,0",(0,A.JB)("$,.4f")).registerValue("$,0f",(0,A.JB)("$,.4f")).registerValue("$,.f",(0,A.JB)("$,.4f")).registerValue("DURATION",(0,I.Z)()).registerValue("DURATION_SUB",(0,I.Z)({formatSubMilliseconds:!0})),(0,D.ZP)().registerValue("smart_date",w.Z).registerValue("smart_date_verbose",$.Z).setDefaultKey("smart_date");const B=o()(l.K6,null!=(x=null==(k=U)||null==(j=k.common)?void 0:j.theme_overrides)?x:{})},10222:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const s=async e=>new Promise(((t,r)=>{const s=document.getSelection();if(s){s.removeAllRanges();const t=document.createRange(),o=document.createElement("span");o.textContent=e,o.style.position="fixed",o.style.top="0",o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",document.body.appendChild(o),t.selectNode(o),s.addRange(t);try{document.execCommand("copy")||r()}catch(e){r()}document.body.removeChild(o),s.removeRange?s.removeRange(t):s.removeAllRanges()}t()}))},66785:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const s={SESSION_TIMED_OUT:"Your session timed out, please refresh your page and try again."}},98286:(e,t,r)=>{"use strict";r.d(t,{M:()=>a,O:()=>i});var s=r(60650),o=r(67663),n=r(66785);function a(e){let t={...e};var r,o;return t.errors&&t.errors.length>0&&(t.error=t.description=t.errors[0].message,t.link=null==(r=t.errors[0])||null==(o=r.extra)?void 0:o.link),t.stack?t={...t,error:(0,s.t)("Unexpected error: ")+(t.description||(0,s.t)("(no description, click to see stack trace)")),stacktrace:t.stack}:t.responseText&&t.responseText.indexOf("CSRF")>=0&&(t={...t,error:(0,s.t)(n.Z.SESSION_TIMED_OUT)}),{...t,error:t.error}}function i(e){return new Promise((t=>{if("string"==typeof e)t({error:e});else{const r=e instanceof Response?e:e.response;if(r&&!r.bodyUsed)r.clone().json().then((e=>{const s={...r,...e};t(a(s))})).catch((()=>{r.text().then((e=>{t({...r,error:e})}))}));else if("statusText"in e&&"timeout"===e.statusText&&"timeout"in e)t({...r,error:"Request timed out",errors:[{error_type:o.C.FRONTEND_TIMEOUT_ERROR,extra:{timeout:e.timeout/1e3,issue_codes:[{code:1e3,message:(0,s.t)("Issue 1000 - The dataset is too large to query.")},{code:1001,message:(0,s.t)("Issue 1001 - The database is under an unusual load.")}]},level:"error",message:"Request timed out"}]});else{let o=e.statusText||e.message;o||(console.error("non-standard error:",e),o=(0,s.t)("An error occurred")),t({...r,error:o})}}}))}},89816:(e,t,r)=>{"use strict";function s(e=document.cookie){return Object.fromEntries(e.split("; ").filter((e=>e)).map((e=>e.split("="))))}r.d(t,{Z:()=>s})},35782:(e,t,r)=>{var s={"./alert.svg":[57249,7249],"./alert_solid.svg":[52797,2797],"./alert_solid_small.svg":[71256,1256],"./ballot.svg":[87760,7760],"./binoculars.svg":[38970,8970],"./bolt.svg":[4794,4794],"./bolt_small.svg":[49510,9510],"./bolt_small_run.svg":[36883,6883],"./calendar.svg":[65816,5816],"./cancel-x.svg":[77654,7654],"./cancel.svg":[14757,4757],"./cancel_solid.svg":[55777,5777],"./card_view.svg":[25838,5838],"./cards.svg":[81293,1293],"./cards_locked.svg":[69052,9052],"./caret_down.svg":[87832,7832],"./caret_left.svg":[80310,310],"./caret_right.svg":[64817,4817],"./caret_up.svg":[39811,9811],"./category.svg":[24851,4851],"./certified.svg":[88695,8695],"./check.svg":[83544,3544],"./checkbox-half.svg":[57405,7405],"./checkbox-off.svg":[75281,5281],"./checkbox-on.svg":[99013,9013],"./circle.svg":[60183,183],"./circle_check.svg":[93558,3558],"./circle_check_solid.svg":[70992,992],"./clock.svg":[50597,597],"./close.svg":[50999,999],"./code.svg":[16981,6981],"./cog.svg":[45962,5962],"./collapse.svg":[24266,4266],"./color_palette.svg":[65580,5580],"./components.svg":[80312,312],"./copy.svg":[23141,3141],"./cross-filter-badge.svg":[64625,4625],"./cursor_target.svg":[96758,6758],"./database.svg":[15249,5249],"./dataset_physical.svg":[8312,8312],"./dataset_virtual.svg":[77156,5330],"./dataset_virtual_greyscale.svg":[84810,4810],"./default_db_image.svg":[51398,1398],"./download.svg":[112,112],"./drag.svg":[86507,6507],"./edit.svg":[93871,3871],"./edit_alt.svg":[86167,6167],"./email.svg":[50504,6668],"./error.svg":[67584,7584],"./error_solid.svg":[25641,5641],"./error_solid_small.svg":[92561,2983],"./error_solid_small_red.svg":[4273,4273],"./exclamation.svg":[35771,5771],"./expand.svg":[47922,7922],"./eye.svg":[11493,1493],"./eye_slash.svg":[45014,9109],"./favorite-selected.svg":[51568,1568],"./favorite-unselected.svg":[86682,6682],"./favorite_small_selected.svg":[1351,1351],"./field_abc.svg":[70215,215],"./field_boolean.svg":[87405,5507],"./field_date.svg":[65226,5226],"./field_derived.svg":[37404,4732],"./field_num.svg":[35201,5201],"./field_struct.svg":[91899,1899],"./file.svg":[20057,57],"./filter.svg":[19305,9305],"./filter_small.svg":[54474,4474],"./folder.svg":[86420,6420],"./full.svg":[23985,3985],"./function_x.svg":[44662,4662],"./gear.svg":[7610,7610],"./grid.svg":[68425,8425],"./image.svg":[92264,2264],"./import.svg":[42698,2698],"./info-solid.svg":[71605,1605],"./info.svg":[2713,2713],"./info_solid_small.svg":[33606,3606],"./join.svg":[85998,5998],"./keyboard.svg":[87850,7850],"./layers.svg":[85832,5832],"./lightbulb.svg":[54797,4797],"./link.svg":[99558,9558],"./list.svg":[45707,5707],"./list_view.svg":[38682,8682],"./location.svg":[61174,1174],"./lock_locked.svg":[55359,5359],"./lock_unlocked.svg":[6207,6207],"./map.svg":[18463,8463],"./message.svg":[64458,4458],"./minus.svg":[97183,7183],"./minus_solid.svg":[6371,6371],"./more_horiz.svg":[39325,9325],"./more_vert.svg":[91185,1185],"./move.svg":[74139,4139],"./nav_charts.svg":[75350,5350],"./nav_dashboard.svg":[66303,6303],"./nav_data.svg":[2267,2267],"./nav_explore.svg":[83749,3749],"./nav_home.svg":[44667,4667],"./nav_lab.svg":[43567,3567],"./note.svg":[46597,6126],"./offline.svg":[53265,3265],"./paperclip.svg":[22079,2079],"./placeholder.svg":[18349,8349],"./plus.svg":[17460,7460],"./plus_large.svg":[66150,6150],"./plus_small.svg":[96447,6447],"./plus_solid.svg":[70600,600],"./queued.svg":[63240,3240],"./refresh.svg":[25367,5367],"./running.svg":[5224,5224],"./save.svg":[36254,6254],"./search.svg":[30177,177],"./server.svg":[11075,1075],"./share.svg":[11263,1263],"./slack.svg":[42439,2439],"./sort.svg":[20336,336],"./sort_asc.svg":[79393,9393],"./sort_desc.svg":[32646,2646],"./sql.svg":[13325,3325],"./table.svg":[72403,2403],"./tag.svg":[30158,158],"./tags.svg":[90363,363],"./transparent.svg":[87803,7803],"./trash.svg":[62105,2105],"./triangle_change.svg":[98398,8398],"./triangle_down.svg":[40826,826],"./triangle_up.svg":[36819,6819],"./up-level.svg":[65972,5972],"./user.svg":[99767,9767],"./warning.svg":[4758,4758],"./warning_solid.svg":[75224,5592],"./x-large.svg":[89290,3955],"./x-small.svg":[7716,7716]};function o(e){if(!r.o(s,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],o=t[0];return r.e(t[1]).then((()=>r(o)))}o.keys=()=>Object.keys(s),o.id=35782,e.exports=o}}]);