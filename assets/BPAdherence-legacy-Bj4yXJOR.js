System.register(["./index-legacy-BClzHwRE.js","./EncounterMixin.vue_vue_type_script_lang-legacy-BWEO0snp.js","./htn_service-legacy-Cl0mGvqG.js","./encounter_guidelines-legacy-BDSzy3su.js","./GuidelineEngine-legacy-KsvQuFdF.js","./HisStandardForm-legacy-I0WV5d_F.js"],(function(e,t){"use strict";var n,a,r,d,s,i,o,l,u,c,g,p,h,m,b,f,x,y,v,w,k,_,C,D,I,P,N,T,z,B,H,j;return{setters:[e=>{n=e.d,a=e.bN,r=e.R,d=e.Q,s=e.U,i=e._,o=e.a2,l=e.a3,u=e.$,c=e.a4,g=e.a5,p=e.ac,h=e.aJ,m=e.aI,b=e.aq,f=e.db,x=e.a6,y=e.v,v=e.w,w=e.ab,k=e.u,_=e.x,C=e.G,D=e.B,I=e.E,P=e.C,N=e.H,T=e.z,z=e.Z},e=>{B=e._},e=>{H=e.B,j=e.H},null,null,null],execute:function(){var t=document.createElement("style");t.textContent="ion-checkbox[data-v-2e3ec445]{--size: 30px}ion-input[data-v-2e3ec445]{border-radius:9px;background-color:#f7f8c6;border:solid 2px rgb(117,117,117)}.col-borders[data-v-2e3ec445]{border:1px dotted lightgray;border-radius:3px;padding:.3em}.holder[data-v-2e3ec445]{width:99%;padding:1.5%}.dispensation-row[data-v-2e3ec445]{text-align:center;font-size:1.6em}#main-table[data-v-2e3ec445],#table-notes[data-v-2e3ec445]{width:95%;margin:auto}#main-table th[data-v-2e3ec445],#table-notes th[data-v-2e3ec445]{font-size:20px;background-color:#b22222;color:#fff}#main-table th[data-v-2e3ec445],#main-table td[data-v-2e3ec445]{text-align:center;padding:10px}.td-title[data-v-2e3ec445]{font-size:22px;text-shadow:2px 2px white}.td-title[data-v-2e3ec445],.td-current[data-v-2e3ec445],.td-remaining[data-v-2e3ec445]{padding:2px!important}.td-current[data-v-2e3ec445]{background-color:#eed5d2;text-shadow:2px 2px white;height:40px!important}.td-remaining[data-v-2e3ec445]{background-color:#ffe5e5;text-shadow:2px 2px white}.td-value[data-v-2e3ec445]{font-size:22px}#table-notes td[data-v-2e3ec445]{background:rgba(210,220,240,.5);border-radius:5px}#table-notes th[data-v-2e3ec445]{background:#d3d3d3;color:rgba(0,0,0,.8)}#table-notes td[data-v-2e3ec445]{padding-left:1px}.date-td[data-v-2e3ec445]{padding-left:4px!important;text-shadow:0 1px 1px rgba(0,0,0,.2);font-size:1em;background:rgba(235,235,240,.5)!important;color:rgba(0,0,0,.9);text-align:center}.note-td[data-v-2e3ec445]{padding-left:20px!important;color:rgba(0,0,0,.8);text-shadow:2px 2px 3px rgba(255,255,255,.1)}.today-tr[data-v-2e3ec445]{font-style:italic;font-weight:700;border-radius:10px!important}\n/*$vite$:1*/",document.head.appendChild(t);const $=n({mixins:[B],components:{ViewPort:a,IonToolbar:r,IonHeader:d,IonContent:s,IonRow:i,IonInput:o,IonButton:l,IonCol:u,IonFooter:c,IonPage:g,IonCheckbox:p},watch:{ready:{async handler(e){e&&(this.HTN=new H(this.patientID,this.providerID),this.drugs=this.HTN.getDrugs(),await this.getCurrentDrugs())},immediate:!0}},data:()=>({HTN:{},drugs:null}),methods:{onFinish(){this.selectNextAction()},goToPrescription(){this.$router.push(`/art/encounters/bp_prescription/${this.patientID}`)},gotoTreatment(){const e=this.selectedDrugs.map((e=>h.find(H.htnDrugReferences(),{drug_id:e.drugID}))),t={};t[this.patientID]=e,sessionStorage.setItem(j.Prescription,JSON.stringify(t)),this.$router.push(`/art/encounters/prescriptions/${this.patientID}`)},async selectNextAction(){const e=await m("Action confirmation","Please specify how to proceed with patient",["Continue with current BP Drugs","Continue without BP Drugs","Change BP drugs"],[{name:"Cancel",color:"danger",slot:"start"},{name:"Confirm",color:"primary",slot:"end",role:"action"}]);if(e.selection&&"Cancel"!=e.action)switch(e.selection){case"Continue without BP Drugs":return sessionStorage.removeItem(j.Prescription),this.nextTask();case"Continue with current BP Drugs":return this.gotoTreatment();case"Change BP drugs":this.goToPrescription()}},async getCurrentDrugs(){const e=await this.HTN.getCurrentDrugs(),t=await this.HTN.getLastDrugs();e.drugs.forEach((e=>{for(const n in this.drugs)this.drugs[n].drugs.forEach(((a,r)=>{e.drug_id===a.drugID&&(this.drugs[n].drugs[r].current=!0,this.drugs[n].drugs[r].selected=!0,this.drugs[n].selected=e.drug_id);const d=this.drugs[n].drugs[r].drugName;Object.prototype.hasOwnProperty.call(t,d)&&(this.drugs[n].drugs[r].expectedRemaining=t[d].remaining,this.drugs[n].drugs[r].dispensed=t[d].value_numeric)}))}))},async launchKeyPad(e,t){(await b.create({component:f,backdropDismiss:!1,cssClass:"keypad-modal",componentProps:{strictNumbers:!0,onKeyPress:async n=>{const a=await this.HTN.getAdherence(this.drugs[e].drugs[t].drugID,n);this.drugs[e].drugs[t].adherence=a.adherence,this.drugs[e].drugs[t].remaining=n}}})).present()}},computed:{selectedDrugs(){return Object.values(this.drugs).map((e=>e.drugs)).reduce(((e,t)=>e.concat(t)),[]).filter((e=>e.dispensed))}}}),E={key:0,class:"view-port-content"},A={id:"main-table",style:{width:"100%"}},R={id:"table-notes",style:{width:"100%"}},S={class:"date-td today-td"},V={class:"date-td today-td"},F={class:"date-td today-td"},K={class:"date-td today-td"};e("default",x($,[["render",function(e,t,n,a,r,d){const s=w("ion-col"),i=w("ion-row"),o=w("ion-toolbar"),l=w("ion-header"),u=w("ion-checkbox"),c=w("ion-input"),g=w("view-port"),p=w("ion-content"),h=w("ion-button"),m=w("ion-footer"),b=w("ion-page");return k(),y(b,null,{default:v((()=>[_(l,null,{default:v((()=>[_(o,null,{default:v((()=>[_(i,null,{default:v((()=>[_(s,null,{default:v((()=>t[0]||(t[0]=[C("label",{class:"his-title"}," BP Drug management ",-1)]))),_:1})])),_:1})])),_:1})])),_:1}),_(p,null,{default:v((()=>[_(g,null,{default:v((()=>[e.drugs?(k(),D("div",E,[C("table",A,[C("tr",null,[t[1]||(t[1]=C("th",null," ",-1)),(k(!0),D(I,null,P(e.drugs,((e,t)=>(k(),D("th",{key:t},[T(z(t)+" ",1),_(i,null,{default:v((()=>[(k(!0),D(I,null,P(e.drugs,((e,t)=>(k(),y(s,{class:"col-borders",key:t},{default:v((()=>[T(z(e.amount||"0mg"),1)])),_:2},1024)))),128))])),_:2},1024)])))),128))]),C("tr",null,[t[2]||(t[2]=C("td",{class:"td-current td-title"},[C("span",null,"Current")],-1)),(k(!0),D(I,null,P(e.drugs,((e,t)=>(k(),D("td",{class:"td-current td-value",key:t},[_(i,null,{default:v((()=>[(k(!0),D(I,null,P(e.drugs,((e,t)=>(k(),y(s,{key:t},{default:v((()=>[e.current?(k(),y(u,{key:0,checked:e.current,disabled:""},null,8,["checked"])):N("",!0)])),_:2},1024)))),128))])),_:2},1024)])))),128))]),C("tr",null,[t[3]||(t[3]=C("td",{class:"td-remaining td-title"},[C("span",null,"Pills remaining")],-1)),(k(!0),D(I,null,P(e.drugs,((t,n)=>(k(),D("td",{key:n,class:"td-current td-value"},[_(i,null,{default:v((()=>[(k(!0),D(I,null,P(t.drugs,((t,a)=>(k(),y(s,{key:a},{default:v((()=>[t.dispensed?(k(),y(c,{key:0,type:"number",modelValue:t.remaining,"onUpdate:modelValue":e=>t.remaining=e,onClick:t=>e.launchKeyPad(n,a)},null,8,["modelValue","onUpdate:modelValue","onClick"])):N("",!0)])),_:2},1024)))),128))])),_:2},1024)])))),128))])]),t[7]||(t[7]=C("p",null,null,-1)),C("table",R,[t[4]||(t[4]=C("caption",{style:{"font-size":"1.4em"}}," Adherence summary ",-1)),t[5]||(t[5]=C("p",null,null,-1)),t[6]||(t[6]=C("tr",null,[C("th",{style:{width:"25%"}},[C("span",null,"Drug")]),C("th",{style:{width:"25%"}},[C("span",null,"Pills dispensed during last visit")]),C("th",{style:{width:"25%"}},[C("span",null,"Expected pills remaining")]),C("th",{style:{width:"25%"}},[C("span",null,"Adherence for drug")])],-1)),(k(!0),D(I,null,P(e.selectedDrugs,((e,t)=>(k(),D("tr",{key:t,class:"dispensation-row"},[C("td",S,z(e.drugName),1),C("td",V,z(e.dispensed),1),C("td",F,z(e.expectedRemaining),1),C("td",K,z(e.adherence?`${e.adherence} %`:"?"),1)])))),128))])])):N("",!0)])),_:1})])),_:1}),_(m,null,{default:v((()=>[_(o,{color:"dark"},{default:v((()=>[_(h,{size:"large",color:"danger",slot:"start",onClick:e.gotoPatientDashboard},{default:v((()=>t[8]||(t[8]=[T(" cancel ")]))),_:1},8,["onClick"]),_(h,{size:"large",color:"primary",slot:"end",onClick:e.goToPrescription},{default:v((()=>t[9]||(t[9]=[T(" Change drugs ")]))),_:1},8,["onClick"]),_(h,{size:"large",color:"success",slot:"end",onClick:e.onFinish},{default:v((()=>t[10]||(t[10]=[T(" Continue ")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-2e3ec445"]]))}}}));