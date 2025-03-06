System.register(["./index-legacy-sLIX6Wy9.js"],(function(t,e){"use strict";var n,r,c;return{setters:[t=>{n=t.cs,r=t.ct,c=t.cu}],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
t("createSwipeBackGesture",((t,e,s,i,o)=>{const a=t.ownerDocument.defaultView;let u=n(t);const l=t=>u?-t.deltaX:t.deltaX;return r({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:r=>(u=n(t),(t=>{const{startX:e}=t;return u?e>=a.innerWidth-50:e<=50})(r)&&e()),onStart:s,onMove:t=>{const e=l(t)/a.innerWidth;i(e)},onEnd:t=>{const e=l(t),n=a.innerWidth,r=e/n,s=(t=>u?-t.velocityX:t.velocityX)(t),i=s>=0&&(s>.2||e>n/2),d=(i?1-r:r)*n;let h=0;if(d>5){const t=d/Math.abs(s);h=Math.min(t,540)}o(i,r<=0?.01:c(0,r,.9999),h)}})}))}}}));
