System.register(["./index-legacy-CNrLGT3P.js","./EncounterMixin.vue_vue_type_script_lang-legacy-B7zjV7nz.js","./htn_service-legacy-BVHUkPGj.js","./encounter_guidelines-legacy-BxkBj-oZ.js","./GuidelineEngine-legacy-KsvQuFdF.js","./HisStandardForm-legacy-OekRIZB_.js"],(function(t,e){"use strict";var n,s,a,o,r,i,d,l,c,u,g,p,h,f,b,m,v,y,x,k,w,_,C,I,N,D,P,H,T,S,j,z,E,O,B;return{setters:[t=>{n=t.d,s=t.br,a=t.i,o=t.j,r=t.l,i=t.ar,d=t.f,l=t.as,c=t.m,u=t.I,g=t.e,p=t.F,h=t.aT,f=t.ah,b=t.t,m=t.O,v=t.cT,y=t._,x=t.r,k=t.o,w=t.c,_=t.w,C=t.b,I=t.x,N=t.A,D=t.B,P=t.y,H=t.u,T=t.v,S=t.z,j=t.a8,z=t.a9},t=>{E=t._},t=>{O=t.B,B=t.H},null,null,null],execute:function(){var e=document.createElement("style");e.textContent="ion-checkbox[data-v-cb76923f]{--size: 30px}.col-borders[data-v-cb76923f]{border:1px dotted lightgray;border-radius:3px}#main-table[data-v-cb76923f],#table-notes[data-v-cb76923f]{width:95%;margin:auto}#main-table th[data-v-cb76923f],#table-notes th[data-v-cb76923f]{font-size:20px;background-color:#b22222;color:#fff}#main-table th[data-v-cb76923f],#main-table td[data-v-cb76923f]{text-align:center;padding:10px}.td-title[data-v-cb76923f]{font-size:22px;text-shadow:2px 2px white}.td-title[data-v-cb76923f],.td-current[data-v-cb76923f],.td-remaining[data-v-cb76923f]{padding:2px!important}.td-current[data-v-cb76923f]{background-color:#eed5d2;text-shadow:2px 2px white;height:40px!important}.td-remaining[data-v-cb76923f]{background-color:#ffe5e5;text-shadow:2px 2px white}.td-value[data-v-cb76923f]{font-size:22px}caption[data-v-cb76923f]{font-weight:700;font-size:26px;color:rgba(0,0,0,.8)}#table-notes td[data-v-cb76923f]{background:rgba(210,220,240,.5);border-radius:5px}.table-inner-notes[data-v-cb76923f]{width:100%}#table-notes th[data-v-cb76923f]{background:#d3d3d3;color:rgba(0,0,0,.8)}#table-notes td[data-v-cb76923f]{padding-left:1px}.date-td[data-v-cb76923f]{padding-left:4px!important;text-shadow:0 1px 1px rgba(0,0,0,.2);font-size:1em;background:rgba(235,235,240,.5)!important;color:rgba(0,0,0,.9)}.note-td[data-v-cb76923f]{padding-left:20px!important;color:rgba(0,0,0,.8);text-shadow:2px 2px 3px rgba(255,255,255,.1)}.notes-scroll[data-v-cb76923f]{height:265px!important;overflow:auto}.today-tr[data-v-cb76923f]{font-style:italic;font-weight:700;border-radius:10px!important}\n",document.head.appendChild(e);const F=n({mixins:[E],components:{ViewPort:s,IonToolbar:a,IonHeader:o,IonContent:r,IonRow:i,IonButton:d,IonCol:l,IonFooter:c,IonPage:u,IonCheckbox:g},watch:{ready:{async handler(t){if(t){this.HTN=new O(this.patientID,this.providerID),this.drugs=this.HTN.getDrugs();const{drugs:t,notes:e}=await this.HTN.getCurrentDrugs();this.setPreviousBpDrugs(t),this.setPreviousBpNotes(e),this.canClearHtnSessionPrescription=this.patientHasHtnSessionKey()}},immediate:!0}},data:()=>({HTN:{},drugs:null,canClearHtnSessionPrescription:!1}),methods:{clearPrescriptionInSession(){sessionStorage.removeItem(B.Prescription),this.canClearHtnSessionPrescription=!1},patientHasHtnSessionKey(){try{const t=sessionStorage.getItem(B.Prescription);if(t)return JSON.parse(t)[this.patientID]}catch(t){console.warn(t)}return!1},removeNote(t,e){this.drugs[t].notes.splice(e,1)},launchNotePad(t){this.showModal({id:"note",helpText:`Add notes for ${t}`,type:p.TT_TEXT},(e=>{e&&this.drugs[t].notes.push({date:h.getSessionDate(),description:e.value||"",drugID:this.drugs[t].drugs[0].drugID,isNewNote:!0})}))},async onFinish(){const t=Object.values(this.drugs).filter((t=>!f.isEmpty(t.notes))).map((t=>t.notes)).reduce(((t,e)=>t.concat(e)),[]).filter((t=>t.isNewNote)).map((t=>this.HTN.buildObs("Clinician notes",{value_text:t.description,value_drug:t.drugID})));if(!f.isEmpty(t))try{await this.HTN.createEncounter(),await this.HTN.saveObservationList(await Promise.all(t))}catch(e){return b(`Unable to save notes ${e}`)}this.gotoTreatment()},gotoTreatment(){const t=this.selectedDrugs.map((t=>f.find(O.htnDrugReferences(),{drug_id:t.drugID}))),e={};e[this.patientID]=t,sessionStorage.setItem(B.Prescription,JSON.stringify(e)),this.$router.push(`/art/encounters/prescriptions/${this.patientID}`)},async showModal(t,e){(await m.create({component:v,backdropDismiss:!1,cssClass:"full-modal",componentProps:{dismissType:"modal",currentField:t,onFinish:e}})).present()},setPreviousBpNotes(t){for(const e in t)this.drugs[e].notes=Object.keys(t[e]).map((n=>t[e][n].map((t=>({date:n,description:t,isNewNote:!1}))))).reduce(((t,e)=>t.concat(e)),[])},setPreviousBpDrugs(t){t.forEach((t=>{for(const e in this.drugs)this.drugs[e].drugs.forEach(((n,s)=>{t.drug_id===n.drugID&&(this.drugs[e].drugs[s].current=!0,this.drugs[e].drugs[s].selected=!0,this.drugs[e].selected=t.drug_id)}))}))},selectDrug(t,e,n){this.drugs[t].drugs.forEach(((e,n)=>{this.drugs[t].drugs[n].selected=!1})),this.drugs[t].drugs[e].selected=n.detail.checked}},computed:{selectedDrugs(){return this.drugs?Object.values(this.drugs).map((t=>t.drugs)).reduce(((t,e)=>t.concat(e)),[]).filter((t=>t.selected)):[]}}}),$=t=>(j("data-v-cb76923f"),t=t(),z(),t),A=$((()=>N("label",{class:"his-title"}," Prescribe BP drugs ",-1))),M={key:0,class:"view-port-content"},J={id:"main-table",style:{width:"100%"}},K=$((()=>N("th",null," ",-1))),R=$((()=>N("td",{class:"td-remaining td-title"},[N("span",null,"New/Current")],-1))),X=$((()=>N("td",{class:"td-remaining td-title"},[N("span",null," ")],-1))),Z=$((()=>N("p",null,null,-1))),G={id:"table-notes",style:{width:"100%"}},L=$((()=>N("caption",{style:{"font-size":"1.2em"}}," Notes ",-1))),U=$((()=>N("p",null,null,-1))),V={class:"table-inner-notes",id:"notes-HCZ"},q={class:"date-td today-td"},Q={class:"date-td today-td"};t("default",y(F,[["render",function(t,e,n,s,a,o){const r=x("ion-col"),i=x("ion-row"),d=x("ion-toolbar"),l=x("ion-header"),c=x("ion-checkbox"),u=x("ion-button"),g=x("view-port"),p=x("ion-content"),h=x("ion-footer"),f=x("ion-page");return k(),w(f,null,{default:_((()=>[C(l,null,{default:_((()=>[C(d,null,{default:_((()=>[C(i,null,{default:_((()=>[C(r,null,{default:_((()=>[A])),_:1})])),_:1})])),_:1})])),_:1}),C(p,null,{default:_((()=>[C(g,null,{default:_((()=>[t.drugs?(k(),I("div",M,[N("table",J,[N("tr",null,[K,(k(!0),I(D,null,P(t.drugs,((t,e)=>(k(),I("th",{key:e},[H(T(e)+" ",1),C(i,null,{default:_((()=>[(k(!0),I(D,null,P(t.drugs,((t,e)=>(k(),w(r,{class:"col-borders",key:e},{default:_((()=>[H(T(t.amount||"0mg"),1)])),_:2},1024)))),128))])),_:2},1024)])))),128))]),N("tr",null,[R,(k(!0),I(D,null,P(t.drugs,((e,n)=>(k(),I("td",{key:n,class:"td-current td-value"},[C(i,null,{default:_((()=>[(k(!0),I(D,null,P(e.drugs,((e,s)=>(k(),w(r,{key:s},{default:_((()=>[C(c,{checked:e.selected,onIonChange:e=>t.selectDrug(n,s,e)},null,8,["checked","onIonChange"])])),_:2},1024)))),128))])),_:2},1024)])))),128))]),N("tr",null,[X,(k(!0),I(D,null,P(Object.keys(t.drugs),((e,n)=>(k(),I("td",{class:"td-remaining td-value",key:n},[C(i,null,{default:_((()=>[C(r,null,{default:_((()=>[C(u,{onClick:n=>t.launchNotePad(e),color:"warning"},{default:_((()=>[H(" Add notes ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])))),128))])]),Z,N("table",G,[L,U,N("tr",null,[(k(!0),I(D,null,P(t.drugs,((t,e)=>(k(),I("th",{style:{width:"25%"},key:e},[N("span",null,T(e),1)])))),128))]),N("tr",null,[(k(!0),I(D,null,P(Object.keys(t.drugs),((e,n)=>(k(),I("td",{id:"HCZ",style:{"padding-top":"2px !important"},valign:"top",key:n},[N("table",V,[(k(!0),I(D,null,P(t.drugs[e].notes,((n,s)=>(k(),I("tr",{key:s},[N("td",q,T(n.date),1),N("td",Q,T(n.description),1),N("td",null,[n.isNewNote?(k(),w(u,{key:0,color:"danger",onClick:n=>t.removeNote(e,s)},{default:_((()=>[H(" X ")])),_:2},1032,["onClick"])):S("",!0)])])))),128))])])))),128))])])])):S("",!0)])),_:1})])),_:1}),C(h,null,{default:_((()=>[C(d,{color:"dark"},{default:_((()=>[C(u,{size:"large",color:"danger",slot:"start",onClick:t.gotoPatientDashboard},{default:_((()=>[H(" cancel ")])),_:1},8,["onClick"]),t.canClearHtnSessionPrescription?(k(),w(u,{key:0,size:"large",color:"warning",slot:"end",onClick:t.clearPrescriptionInSession},{default:_((()=>[H(" Clear Session Prescription ")])),_:1},8,["onClick"])):S("",!0),t.selectedDrugs&&t.selectedDrugs.length>0?(k(),w(u,{key:1,size:"large",color:"success",slot:"end",onClick:t.onFinish},{default:_((()=>[H(" Continue ")])),_:1},8,["onClick"])):S("",!0)])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-cb76923f"]]))}}}));