System.register(["./index-legacy-DLdqxVnr.js"],(function(e,t){"use strict";var n,a,o,s,i,r,c,d,l,u,p,f,v,m,g,b,w;return{setters:[e=>{n=e.d,a=e.a3,o=e.r,s=e.av,i=e.aq,r=e.cj,c=e.bg,d=e.a6,l=e.ab,u=e.u,p=e.B,f=e.z,v=e.Z,m=e.G,g=e.x,b=e.w,w=e.H}],execute:function(){var t=document.createElement("style");t.textContent="#update-notification[data-v-a71ddc4f]{opacity:.95;position:absolute;font-weight:700;background:#e1fef2;color:#000;width:100vw;margin:auto;padding:1.6em;font-size:1.8rem;top:10%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:40}\n/*$vite$:1*/",document.head.appendChild(t);const h=n({components:{IonButton:a},props:{checkInterval:{type:Number,default:3e4}},setup(e){const t=o(!1),n=o(""),a=new s;return setInterval((async()=>{if(!t.value){const e=a.getHeadVersion(),o=a.getActiveCoreVersion();"-"!=e&&e!=o&&(n.value=e,t.value=!0)}}),e.checkInterval),{onVersionUpdate:async function(){(await i.create({component:r,backdropDismiss:!0,cssClass:"large-modal",componentProps:{app:c.getActiveApp(),onCloseAction:()=>{a.setActiveVersion(n.value),location.reload(),i.dismiss()}}})).present()},newVersion:n,hasUpdate:t}}}),y={key:0,id:"update-notification"};e("default",d(h,[["render",function(e,t,n,a,o,s){const i=l("ion-button");return e.hasUpdate?(u(),p("div",y,[f(v(e.newVersion)+" ",1),t[1]||(t[1]=m("br",null,null,-1)),t[2]||(t[2]=f(" New Updates and fixes are available ")),t[3]||(t[3]=m("br",null,null,-1)),g(i,{onClick:e.onVersionUpdate,color:"success",size:"large"},{default:b((()=>t[0]||(t[0]=[f(" Update Now!! ")]))),_:1},8,["onClick"])])):w("",!0)}],["__scopeId","data-v-a71ddc4f"]]))}}}));