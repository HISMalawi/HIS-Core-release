System.register(["./index-legacy-BClzHwRE.js"],(function(e,s){"use strict";var a,o,n,i,t,d,l,m,r,u,c,p;return{setters:[e=>{a=e.d,o=e.bV,n=e.b2,i=e.bt,t=e.r,d=e.aG,l=e.a6,m=e.ab,r=e.u,u=e.v,c=e.w,p=e.I}],execute:function(){const v=a({components:{IonModal:o,ZebraModal:n((()=>i((()=>s.import("./ZebraPrinterImage-legacy-BglFiYea.js")),void 0)))},emits:["modalDismissed"],props:{modalName:{type:String}},setup(e,{emit:s}){const a=t(!1),o=t("");return d(e,(({modalName:e})=>{e?(o.value=e,a.value=!0):a.value=!1}),{deep:!0}),{dismissModal:function(){a.value=!1,s("modalDismissed")},modalIsOpen:a,activeModal:o}}});e("default",l(v,[["render",function(e,s,a,o,n,i){const t=m("ion-modal");return r(),u(t,{"is-open":e.modalIsOpen},{default:c((()=>[(r(),u(p(e.activeModal),{onOnDismissModal:e.dismissModal},null,40,["onOnDismissModal"]))])),_:1},8,["is-open"])}]]))}}}));