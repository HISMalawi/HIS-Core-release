import{d as T,l as M,h as v,g as $,k as S,ei as A,ci as L,ej as N,bJ as V,i as j,j as w,D,af as P,ek as q,_ as x,r as t,o as a,x as f,b as n,w as e,u as l,v as s,B as E,y as F,c as H,A as J}from"./index-BFVcutZq.js";const z=T({name:"App",emits:["onClickMenuItem"],props:{title:String,menuTitle:String,menuItems:{type:Array,default:()=>[]},appIcon:{type:String,required:!0}},components:{IonContent:M,IonItem:v,IonList:$,IonTitle:S,IonMenu:A,IonButtons:L,IonMenuButton:N,IonThumbnail:V,IonToolbar:j,IonHeader:w,IonLabel:D},setup(o,i){function u(c){q.close("app-menu"),i.emit("onClickMenuItem",c)}return{onClickItem:u,appIconPath:P(o.appIcon)}}}),G=["src"];function K(o,i,u,c,O,Q){const _=t("ion-title"),r=t("ion-toolbar"),m=t("ion-header"),I=t("ion-label"),b=t("ion-item"),h=t("ion-list"),k=t("ion-content"),C=t("ion-menu"),g=t("ion-menu-button"),p=t("ion-buttons"),y=t("ion-thumbnail");return a(),f("div",null,[n(C,{"menu-id":"app-menu","content-id":"main-content",type:"overlay"},{default:e(()=>[n(m,null,{default:e(()=>[n(r,null,{default:e(()=>[n(_,null,{default:e(()=>[l(s(o.menuTitle),1)]),_:1})]),_:1})]),_:1}),n(k,null,{default:e(()=>[n(h,null,{default:e(()=>[(a(!0),f(E,null,F(o.menuItems,(d,B)=>(a(),H(b,{key:B,detail:"true",class:"hydrated",onClick:R=>o.onClickItem(d)},{default:e(()=>[n(I,null,{default:e(()=>[l(s(d.label),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1}),n(m,null,{default:e(()=>[n(r,null,{default:e(()=>[n(p,{slot:"start"},{default:e(()=>[n(g),n(_,null,{default:e(()=>[l(s(o.title),1)]),_:1})]),_:1}),n(p,{slot:"end"},{default:e(()=>[n(y,null,{default:e(()=>[J("img",{src:o.appIconPath,class:"logo",alt:"Master card logo"},null,8,G)]),_:1})]),_:1})]),_:1})]),_:1})])}const W=x(z,[["render",K]]);export{W as default};