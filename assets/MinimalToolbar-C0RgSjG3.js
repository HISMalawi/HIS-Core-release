import{d as T,S as $,U as M,$ as v,R as S,ep as L,cL as N,eq as V,b$ as q,Q as w,O as A,a0 as E,aJ as P,er as x,a8 as z,ad as t,u as a,B as f,x as n,w as e,z as l,Y as s,E as D,C as F,v as H,a1 as J}from"./index-CG6KEPsv.js";const O=T({name:"App",emits:["onClickMenuItem"],props:{title:String,menuTitle:String,menuItems:{type:Array,default:()=>[]},appIcon:{type:String,required:!0}},components:{IonContent:$,IonItem:M,IonList:v,IonTitle:S,IonMenu:L,IonButtons:N,IonMenuButton:V,IonThumbnail:q,IonToolbar:w,IonHeader:A,IonLabel:E},setup(o,i){function u(c){x.close("app-menu"),i.emit("onClickMenuItem",c)}return{onClickItem:u,appIconPath:P(o.appIcon)}}}),Q=["src"];function R(o,i,u,c,U,Y){const r=t("ion-title"),_=t("ion-toolbar"),m=t("ion-header"),I=t("ion-label"),b=t("ion-item"),C=t("ion-list"),h=t("ion-content"),k=t("ion-menu"),g=t("ion-menu-button"),p=t("ion-buttons"),y=t("ion-thumbnail");return a(),f("div",null,[n(k,{"menu-id":"app-menu","content-id":"main-content",type:"overlay"},{default:e(()=>[n(m,null,{default:e(()=>[n(_,null,{default:e(()=>[n(r,null,{default:e(()=>[l(s(o.menuTitle),1)]),_:1})]),_:1})]),_:1}),n(h,null,{default:e(()=>[n(C,null,{default:e(()=>[(a(!0),f(D,null,F(o.menuItems,(d,B)=>(a(),H(b,{key:B,detail:"true",class:"hydrated",onClick:j=>o.onClickItem(d)},{default:e(()=>[n(I,null,{default:e(()=>[l(s(d.label),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1}),n(m,null,{default:e(()=>[n(_,null,{default:e(()=>[n(p,{slot:"start"},{default:e(()=>[n(g),n(r,null,{default:e(()=>[l(s(o.title),1)]),_:1})]),_:1}),n(p,{slot:"end"},{default:e(()=>[n(y,null,{default:e(()=>[J("img",{src:o.appIconPath,class:"logo",alt:"Master card logo"},null,8,Q)]),_:1})]),_:1})]),_:1})]),_:1})])}const K=z(O,[["render",R]]);export{K as default};