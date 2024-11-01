System.register(["./index-legacy-DfH-8HCh.js"],(function(e,t){"use strict";var n,r,s,o,i;return{setters:[e=>{n=e.cu,r=e.cv,s=e.cw,o=e.cx,i=e.cy}],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("startStatusTap",(()=>{const e=window;e.addEventListener("statusTap",(()=>{n((()=>{const t=e.innerWidth,n=e.innerHeight,c=document.elementFromPoint(t/2,n/2);if(!c)return;const a=r(c);a&&new Promise((e=>s(a,e))).then((()=>{o((async()=>{a.style.setProperty("--overflow","hidden"),await i(a,300),a.style.removeProperty("--overflow")}))}))}))}))}))}}}));
