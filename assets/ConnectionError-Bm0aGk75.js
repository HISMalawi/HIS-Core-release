import{d as v,f as I,bB as y,aw as O,bC as M,bD as B,bE as $,bF as E,K as N,M as S,aS as C,ae as x,bG as z,$ as w,Y as L,n as T,U as V,_ as H,r as t,o as s,x as P,c as r,w as e,b as n,u as a,z as l}from"./index-BFVcutZq.js";const A=v({components:{IonButton:I,IonCard:y,IonIcon:O,IonCardHeader:M,IonCardContent:B,IonCardTitle:$,IonCardSubtitle:E},setup(){const o=new L,i=N(!1),d=()=>location.reload(),u=S(()=>C.value),f=()=>{T("This mode provides limited features of the application, are you sure you want to activate?").then(_=>{_&&(w.value=!0,V("Offline mode activated"))})};return x(C,()=>i.value=o.isLoggedIn(),{immediate:!0}),{warning:z,online:u,isLoggedIn:i,isOfflineMode:w,switchOffline:f,refresh:d}}});function D(o,i,d,u,f,_){const p=t("ion-icon"),m=t("ion-card-title"),h=t("ion-card-header"),g=t("ion-card"),b=t("ion-card-subtitle"),c=t("ion-button"),k=t("ion-card-content");return s(),P("div",null,[o.isOfflineMode?(s(),r(g,{key:0,color:"light",style:{"pointer-events":"none",opacity:"0.3",width:"30vw",bottom:"300px"},id:"center-space"},{default:e(()=>[n(h,null,{default:e(()=>[n(p,{size:"large",icon:o.warning},null,8,["icon"]),n(m,{class:"his-lg-text"},{default:e(()=>[a("Offline Mode")]),_:1})]),_:1})]),_:1})):l("",!0),!o.isOfflineMode&&!o.online?(s(),r(g,{key:1,id:"center-space",color:"light"},{default:e(()=>[n(h,null,{default:e(()=>[n(p,{style:{margin:"0px auto"},size:"large",color:"danger",icon:o.warning},null,8,["icon"]),n(m,{class:"his-lg-text"},{default:e(()=>[a("Network Error")]),_:1}),n(b,{class:"his-md-text"},{default:e(()=>[a("Please contact your local administrator for assistance / click the following options to resolve the issue:")]),_:1})]),_:1}),n(k,null,{default:e(()=>[o.isLoggedIn?(s(),r(c,{key:0,onClick:o.switchOffline},{default:e(()=>[a(" Offline Mode ")]),_:1},8,["onClick"])):l("",!0),n(c,{"router-link":"/settings/host"},{default:e(()=>[a(" Change Host ")]),_:1}),n(c,{onClick:o.refresh},{default:e(()=>[a(" Refresh Page ")]),_:1},8,["onClick"])]),_:1})]),_:1})):l("",!0)])}const G=H(A,[["render",D],["__scopeId","data-v-c7489f5f"]]);export{G as default};