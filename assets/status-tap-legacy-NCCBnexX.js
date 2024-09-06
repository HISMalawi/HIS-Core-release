System.register(["./index-legacy-iEOS67hm.js"],(function(e,t){"use strict";var n,r,s,o,i;return{setters:[e=>{n=e.cr,r=e.cs,s=e.ct,o=e.cu,i=e.cv}],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("startStatusTap",(()=>{const e=window;e.addEventListener("statusTap",(()=>{n((()=>{const t=e.innerWidth,n=e.innerHeight,c=document.elementFromPoint(t/2,n/2);if(!c)return;const a=r(c);a&&new Promise((e=>s(a,e))).then((()=>{o((async()=>{a.style.setProperty("--overflow","hidden"),await i(a,300),a.style.removeProperty("--overflow")}))}))}))}))}))}}}));
