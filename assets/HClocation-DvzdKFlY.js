import{d as T,aP as I,S as V,O as N,a5 as P,R as K,Q as $,a3 as w,a4 as x,aQ as B,aH as E,r as y,ar as H,aR as R,al as U,aL as L,M as k,aD as O,aS as M,aT as z,aU as A,a8 as D,v as d,w as n,ad as t,u as _,x as s,z as p,G as C}from"./index-CG6KEPsv.js";const F=T({name:"HC location",components:{BarcodeInput:I,IonContent:V,IonHeader:N,IonPage:P,IonTitle:K,IonToolbar:$,IonButton:w,IonFooter:x,HisKeyboard:B},setup(){const{activePlatformProfile:a}=E(),o=y(""),l=y(""),f=H(()=>a.value.scanner===A.CAMERA_SCANNER);async function r(){o.value.includes("$")||(o.value+="$");const e=await U.getJson("locations/".concat(o.value));if(L.isEmpty(e))k("Invalid location");else{const u=e;sessionStorage.userLocation=u.name;try{await O().setLocation()}catch(m){return k("Unable to set facility UUID. Please try again!")}M.push("/")}l.value=o.value,o.value=""}function b(e){o.value=e}function i(e){o.value=z(e,o.value),console.log("barcode",o.value)}async function c(e){o.value=e,await r()}return{onbarcodeText:b,onScan:c,onKbClick:i,searchLocation:r,useVirtualKeyboard:f,clearValue:l,barcodeText:o,NUMBERS:R}}});function Q(a,o,l,f,r,b){const i=t("ion-title"),c=t("ion-toolbar"),e=t("ion-header"),u=t("barcode-input"),m=t("ion-content"),g=t("his-keyboard"),v=t("ion-button"),S=t("ion-footer"),h=t("ion-page");return _(),d(h,null,{default:n(()=>[s(e,{translucent:!0},{default:n(()=>[s(c,null,{default:n(()=>[s(i,null,{default:n(()=>[p("Scan work-station location")]),_:1})]),_:1})]),_:1}),s(m,{class:"ion-padding-top"},{default:n(()=>[s(u,{class:"his-card",clearValue:a.clearValue,virtualText:a.barcodeText,onOnValue:a.onbarcodeText,onOnScan:a.onScan},null,8,["clearValue","virtualText","onOnValue","onOnScan"])]),_:1}),a.useVirtualKeyboard?(_(),d(g,{key:0,kbConfig:a.NUMBERS,onKeyPress:a.onKbClick},null,8,["kbConfig","onKeyPress"])):C("",!0),s(S,null,{default:n(()=>[s(c,{color:"dark"},{default:n(()=>[s(v,{color:"danger",size:"large","router-link":"/login"},{default:n(()=>[p(" Cancel ")]),_:1}),a.barcodeText?(_(),d(v,{key:0,slot:"end",color:"success",size:"large",onClick:a.searchLocation},{default:n(()=>[p(" Next ")]),_:1},8,["onClick"])):C("",!0)]),_:1})]),_:1})]),_:1})}const J=D(F,[["render",Q],["__scopeId","data-v-3f50a6e8"]]);export{J as default};