System.register(["./index-legacy-BsbMrqEO.js"],(function(a,e){"use strict";var n,o,t,l,c,r,i,u,s,d,f,v,b,y,g,p,C,k,x,h,m,S,_,I,T,K,V,P,w;return{setters:[a=>{n=a.d,o=a.aO,t=a.W,l=a.R,c=a.a5,r=a.U,i=a.S,u=a.a3,s=a.a4,d=a.aP,f=a.aG,v=a.r,b=a.ar,y=a.aQ,g=a.al,p=a.aK,C=a.Q,k=a.aC,x=a.aR,h=a.aS,m=a.aT,S=a.a8,_=a.ad,I=a.u,T=a.v,K=a.w,V=a.x,P=a.z,w=a.H}],execute:function(){var e=document.createElement("style");e.textContent=".his-floating-keyboard[data-v-3f50a6e8]{bottom:70px!important}.his-card[data-v-3f50a6e8]{margin:auto;width:95%}\n",document.head.appendChild(e);const E=n({name:"HC location",components:{BarcodeInput:o,IonContent:t,IonHeader:l,IonPage:c,IonTitle:r,IonToolbar:i,IonButton:u,IonFooter:s,HisKeyboard:d},setup(){const{activePlatformProfile:a}=f(),e=v(""),n=v("");async function o(){e.value.includes("$")||(e.value+="$");const a=await g.getJson(`locations/${e.value}`);if(p.isEmpty(a))C("Invalid location");else{const e=a;sessionStorage.userLocation=e.name;try{await k().setLocation()}catch(o){return C("Unable to set facility UUID. Please try again!")}x.push("/")}n.value=e.value,e.value=""}return{onbarcodeText:function(a){e.value=a},onScan:async function(a){e.value=a,await o()},onKbClick:function(a){e.value=h(a,e.value),console.log("barcode",e.value)},searchLocation:o,useVirtualKeyboard:b((()=>a.value.scanner===m.CAMERA_SCANNER)),clearValue:n,barcodeText:e,NUMBERS:y}}});a("default",S(E,[["render",function(a,e,n,o,t,l){const c=_("ion-title"),r=_("ion-toolbar"),i=_("ion-header"),u=_("barcode-input"),s=_("ion-content"),d=_("his-keyboard"),f=_("ion-button"),v=_("ion-footer"),b=_("ion-page");return I(),T(b,null,{default:K((()=>[V(i,{translucent:!0},{default:K((()=>[V(r,null,{default:K((()=>[V(c,null,{default:K((()=>[P("Scan work-station location")])),_:1})])),_:1})])),_:1}),V(s,{class:"ion-padding-top"},{default:K((()=>[V(u,{class:"his-card",clearValue:a.clearValue,virtualText:a.barcodeText,onOnValue:a.onbarcodeText,onOnScan:a.onScan},null,8,["clearValue","virtualText","onOnValue","onOnScan"])])),_:1}),a.useVirtualKeyboard?(I(),T(d,{key:0,kbConfig:a.NUMBERS,onKeyPress:a.onKbClick},null,8,["kbConfig","onKeyPress"])):w("",!0),V(v,null,{default:K((()=>[V(r,{color:"dark"},{default:K((()=>[V(f,{color:"danger",size:"large","router-link":"/login"},{default:K((()=>[P(" Cancel ")])),_:1}),a.barcodeText?(I(),T(f,{key:0,slot:"end",color:"success",size:"large",onClick:a.searchLocation},{default:K((()=>[P(" Next ")])),_:1},8,["onClick"])):w("",!0)])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-3f50a6e8"]]))}}}));