System.register(["./index-legacy-CNrLGT3P.js"],(function(e,t){"use strict";var a,l,n,r,o,s,i,d,u,c,m,_,f,h,b,g,p,y,v,k,x,I,T,C,w,N,M,D,H,A,B,R,F,L,P;return{setters:[e=>{a=e.S,l=e.d,n=e.C,r=e.I,o=e.l,s=e.i,i=e.j,d=e.m,u=e.k,c=e.g,m=e.h,_=e.D,f=e.f,h=e.R,b=e.E,g=e.J,p=e.K,y=e.L,v=e.M,k=e.N,x=e.q,I=e.H,T=e.n,C=e._,w=e.r,N=e.o,M=e.c,D=e.w,H=e.b,A=e.u,B=e.v,R=e.A,F=e.x,L=e.y,P=e.B}],execute:function(){var t=document.createElement("style");t.textContent=".his-card[data-v-f5608659]{margin:auto!important;padding:.6em}\n",document.head.appendChild(t);class $ extends a{static getMergeHistory(e){return this.getJson("/rollback/merge_history",{identifier:e})}static rollback(e){return this.postJson("/rollback/rollback_patient",{patient_id:e,program_id:this.getProgramID()})}}const G=l({components:{IonText:n,IonPage:r,IonContent:o,IonToolbar:s,IonHeader:i,IonFooter:d,IonTitle:u,IonList:c,IonItem:m,IonLabel:_,IonButton:f,ReportTable:h},setup(){const e=b(),t=g(),a=p(-1),l=p([]),n=p([]),r=`${e.params.id}`.toUpperCase(),o=p("N/A"),s=p([{label:"Birthdate",value:"N/A"},{label:"Gender",value:"N/A"}]),i=[[y.thTxt("Merge type"),y.thTxt("Merge date"),y.thTxt("First Name"),y.thTxt("Last name"),y.thTxt("Birthdate"),y.thTxt("Gender")]],d=v((()=>n.value.length>0));return k((async()=>{if(r){try{n.value=await $.getMergeHistory(r)||[]}catch(e){x(`Merge history not found for ${r}`)}l.value=n.value.map((e=>(-1===a.value&&(a.value=e.secondary_id,o.value=`${e.secondary_first_name} ${e.secondary_surname}`,s.value=[{label:"Birthdate",value:I.toStandardHisDisplayFormat(e.secondary_birthdate)},{label:"Gender",value:e.secondary_gender}]),[y.td(e.merge_type),y.tdDate(e.merge_date),y.td(e.primary_first_name),y.td(e.primary_surname),y.tdDate(e.primary_birthdate),y.td(e.primary_gender)])))}else t.back()})),{cancel:function(){t.back()},holderName:o,isReversible:d,patientInfo:s,rollback:async function(){await T("Are you sure you want to merge transactions")&&(await $.rollback(a.value)?t.back():x("Failed to rollback"))},columns:i,rows:l,npid:r}}});e("default",C(G,[["render",function(e,t,a,l,n,r){const o=w("ion-text"),s=w("ion-title"),i=w("ion-toolbar"),d=w("ion-header"),u=w("ion-label"),c=w("ion-item"),m=w("ion-list"),_=w("report-table"),f=w("ion-content"),h=w("ion-button"),b=w("ion-footer"),g=w("ion-page");return N(),M(g,null,{default:D((()=>[H(d,null,{default:D((()=>[H(i,null,{default:D((()=>[H(s,{class:"his-lg-text"},{default:D((()=>[H(o,{color:"danger"},{default:D((()=>[A(B(e.npid),1)])),_:1}),A(" Merge history ")])),_:1})])),_:1})])),_:1}),H(f,null,{default:D((()=>[H(s,{class:"his-md-text his-card"},{default:D((()=>[A("NPID Holder: ")])),_:1}),H(m,null,{default:D((()=>[H(c,{lines:"none",class:"his-md-text"},{default:D((()=>[H(u,null,{default:D((()=>[A(" Person name ")])),_:1}),R("b",null,B(e.holderName),1)])),_:1}),(N(!0),F(P,null,L(e.patientInfo,((e,t)=>(N(),M(c,{lines:"none",class:"his-md-text",key:t},{default:D((()=>[H(u,null,{default:D((()=>[A(B(e.label)+": ",1)])),_:2},1024),R("b",null,B(e.value),1)])),_:2},1024)))),128))])),_:1}),H(s,{class:"his-md-text his-card"},{default:D((()=>[A("Transactions:")])),_:1}),H(_,{config:{tableCssTheme:"art-report-theme"},columns:e.columns,rows:e.rows},null,8,["columns","rows"])])),_:1}),H(b,null,{default:D((()=>[H(i,{color:"dark"},{default:D((()=>[H(h,{onClick:e.cancel,color:"danger",size:"large",slot:"start"},{default:D((()=>[A(" Cancel ")])),_:1},8,["onClick"]),H(h,{onClick:e.rollback,disabled:!e.isReversible,color:"success",size:"large",slot:"end"},{default:D((()=>[A(" Reverse ")])),_:1},8,["onClick","disabled"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-f5608659"]]))}}}));