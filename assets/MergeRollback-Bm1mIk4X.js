import{aj as $,d as H,ak as F,a5 as S,U as A,R as G,Q as L,a4 as P,S as z,a0 as V,W as E,a1 as J,a3 as U,al as j,am as Q,an as W,r as c,ao as n,ap as Z,t as q,ah as x,ag as K,ad as O,a6 as X,v as C,w as t,ab as s,u as k,x as o,z as l,Z as g,G as T,B as Y,C as ee,E as te}from"./index-ATRrruTT.js";class w extends ${static getMergeHistory(e){return this.getJson("/rollback/merge_history",{identifier:e})}static rollback(e){return this.postJson("/rollback/rollback_patient",{patient_id:e,program_id:this.getProgramID()})}}const oe=H({components:{IonText:F,IonPage:S,IonContent:A,IonToolbar:G,IonHeader:L,IonFooter:P,IonTitle:z,IonList:V,IonItem:E,IonLabel:J,IonButton:U,ReportTable:j},setup(){const r=Q(),e=W(),u=c(-1),y=c([]),_=c([]),d="".concat(r.params.id).toUpperCase(),p=c("N/A"),i=c([{label:"Birthdate",value:"N/A"},{label:"Gender",value:"N/A"}]),m=[[n.thTxt("Merge type"),n.thTxt("Merge date"),n.thTxt("First Name"),n.thTxt("Last name"),n.thTxt("Birthdate"),n.thTxt("Gender")]],h=Z(()=>_.value.length>0);q(async()=>{if(!d){e.back();return}try{_.value=await w.getMergeHistory(d)||[]}catch(a){x("Merge history not found for ".concat(d))}y.value=_.value.map(a=>(u.value===-1&&(u.value=a.secondary_id,p.value="".concat(a.secondary_first_name," ").concat(a.secondary_surname),i.value=[{label:"Birthdate",value:K.toStandardHisDisplayFormat(a.secondary_birthdate)},{label:"Gender",value:a.secondary_gender}]),[n.td(a.merge_type),n.tdDate(a.merge_date),n.td(a.primary_first_name),n.td(a.primary_surname),n.tdDate(a.primary_birthdate),n.td(a.primary_gender)]))});function f(){e.back()}async function b(){await O("Are you sure you want to merge transactions")&&(await w.rollback(u.value)?e.back():x("Failed to rollback"))}return{cancel:f,holderName:p,isReversible:h,patientInfo:i,rollback:b,columns:m,rows:y,npid:d}}});function ae(r,e,u,y,_,d){const p=s("ion-text"),i=s("ion-title"),m=s("ion-toolbar"),h=s("ion-header"),f=s("ion-label"),b=s("ion-item"),a=s("ion-list"),N=s("report-table"),B=s("ion-content"),v=s("ion-button"),D=s("ion-footer"),M=s("ion-page");return k(),C(M,null,{default:t(()=>[o(h,null,{default:t(()=>[o(m,null,{default:t(()=>[o(i,{class:"his-lg-text"},{default:t(()=>[o(p,{color:"danger"},{default:t(()=>[l(g(r.npid),1)]),_:1}),e[0]||(e[0]=l(" Merge history "))]),_:1})]),_:1})]),_:1}),o(B,null,{default:t(()=>[o(i,{class:"his-md-text his-card"},{default:t(()=>e[1]||(e[1]=[l("NPID Holder: ")])),_:1}),o(a,null,{default:t(()=>[o(b,{lines:"none",class:"his-md-text"},{default:t(()=>[o(f,null,{default:t(()=>e[2]||(e[2]=[l(" Person name ")])),_:1}),T("b",null,g(r.holderName),1)]),_:1}),(k(!0),Y(te,null,ee(r.patientInfo,(I,R)=>(k(),C(b,{lines:"none",class:"his-md-text",key:R},{default:t(()=>[o(f,null,{default:t(()=>[l(g(I.label)+": ",1)]),_:2},1024),T("b",null,g(I.value),1)]),_:2},1024))),128))]),_:1}),o(i,{class:"his-md-text his-card"},{default:t(()=>e[3]||(e[3]=[l("Transactions:")])),_:1}),o(N,{config:{tableCssTheme:"art-report-theme"},columns:r.columns,rows:r.rows},null,8,["columns","rows"])]),_:1}),o(D,null,{default:t(()=>[o(m,{color:"dark"},{default:t(()=>[o(v,{onClick:r.cancel,color:"danger",size:"large",slot:"start"},{default:t(()=>e[4]||(e[4]=[l(" Cancel ")])),_:1},8,["onClick"]),o(v,{onClick:r.rollback,disabled:!r.isReversible,color:"success",size:"large",slot:"end"},{default:t(()=>e[5]||(e[5]=[l(" Reverse ")])),_:1},8,["onClick","disabled"])]),_:1})]),_:1})]),_:1})}const se=X(oe,[["render",ae],["__scopeId","data-v-f5608659"]]);export{se as default};