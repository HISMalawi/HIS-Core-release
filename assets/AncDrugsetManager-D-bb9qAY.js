import{d as N,a5 as V,an as q,a0 as x,X as F,a1 as L,bM as M,a3 as G,W as H,R as P,aU as U,_ as W,$ as K,U as Q,a4 as X,S as j,ap as J,r as S,aq as r,ar as k,t as O,aK as v,af as Y,Q as Z,a8 as ee,ad as t,u as _,v as C,w as e,x as o,z as c,B as oe,G as te,C as ne,E as ae,H as se}from"./index-DrPQ21-i.js";import{A as y}from"./anc_drug_set-Cxz2IuG2.js";const le=N({components:{IonPage:V,ReportDataTable:q,IonList:x,IonItem:F,IonLabel:L,ViewPort:M,IonButton:G,IonContent:H,IonHeader:P,IonGrid:U,IonRow:W,IonCol:K,IonTitle:Q,IonFooter:X,IonToolbar:j},setup(){const n=J(),s=S({}),a=S([]),D=[[r.thTxt("Drug"),r.thTxt("Duration in days"),r.thTxt("Frequency")]],b=k(()=>!v.isEmpty(a.value)),h=k(()=>{var l,d;return((d=(l=s.value)==null?void 0:l.drugs)==null?void 0:d.map(u=>[r.td(u.drug_name||"N/A"),r.td(u.duration||"N/A"),r.td(u.frequency)]))||[]});O(async()=>{a.value=await y.getDrugSets(),v.isEmpty(a.value)||(s.value=a.value[0])});function p(){n.back()}function i(){n.push({name:"add anc drugset"})}async function m(){if(await Y("Are you sure you want to void this drug set?"))try{await y.voidDrugSet(s.value.id||-1),a.value=a.value.filter(l=>l.id!=s.value.id),v.isEmpty(a.value)?s.value={}:s.value=a.value[0]}catch(l){Z("e")}}return{cancel:p,addDrugset:i,voidDrugset:m,drugSets:a,hasSelectedDrugSet:b,selectedDrugSet:s,drugSetColumns:D,drugSetRows:h}}});function re(n,s,a,D,b,h){const p=t("ion-title"),i=t("ion-toolbar"),m=t("ion-header"),l=t("ion-label"),d=t("ion-item"),u=t("ion-list"),w=t("ion-col"),I=t("report-data-table"),T=t("ion-row"),A=t("ion-grid"),R=t("view-port"),z=t("ion-content"),g=t("ion-button"),E=t("ion-footer"),$=t("ion-page");return _(),C($,null,{default:e(()=>[o(m,null,{default:e(()=>[o(i,null,{default:e(()=>[o(p,{class:"his-lg-text"},{default:e(()=>[c(" Drug Set ")]),_:1})]),_:1})]),_:1}),o(z,null,{default:e(()=>[o(R,null,{default:e(()=>[o(A,{style:{"background-color":"white"},class:"view-port-content"},{default:e(()=>[o(T,null,{default:e(()=>[o(w,{size:"4"},{default:e(()=>[o(u,null,{default:e(()=>[(_(!0),oe(te,null,ne(n.drugSets,(f,B)=>(_(),C(d,{class:"his-sm-text",button:"",detail:"",color:n.selectedDrugSet.id===f.id?"lightblue":"",onClick:ue=>n.selectedDrugSet=f,key:B},{default:e(()=>[o(l,null,{default:e(()=>[c(ae(f.name),1)]),_:2},1024)]),_:2},1032,["color","onClick"]))),128))]),_:1})]),_:1}),o(w,{size:"8"},{default:e(()=>[o(I,{columns:n.drugSetColumns,rows:n.drugSetRows,config:{tableCssTheme:"art-report-theme"}},null,8,["columns","rows"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(E,null,{default:e(()=>[o(i,{color:"dark"},{default:e(()=>[o(g,{onClick:n.cancel,slot:"start",color:"danger",size:"large"},{default:e(()=>[c(" Cancel ")]),_:1},8,["onClick"]),n.hasSelectedDrugSet?(_(),C(g,{key:0,onClick:n.voidDrugset,slot:"end",color:"danger",size:"large"},{default:e(()=>[c(" Void Drug Set ")]),_:1},8,["onClick"])):se("",!0),o(g,{onClick:n.addDrugset,slot:"end",color:"success",size:"large"},{default:e(()=>[c(" Add Drug Set ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}const de=ee(le,[["render",re],["__scopeId","data-v-fe2c217d"]]);export{de as default};