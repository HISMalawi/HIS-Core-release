System.register(["./HisStandardForm-legacy-OekRIZB_.js","./EncounterMixin.vue_vue_type_script_lang-legacy-B7zjV7nz.js","./index-legacy-CNrLGT3P.js","./LabOrderModal-legacy-CEHIuq40.js","./patient_radiology_service-legacy-Bbt50KUJ.js","./HisRadiologyPicker-legacy-BlOVsJxa.js","./encounter_guidelines-legacy-BxkBj-oZ.js","./GuidelineEngine-legacy-KsvQuFdF.js","./HisKeyboard-legacy-DlfcKdJX.js","./fuse-legacy-CQoBB3MK.js","./SelectMixin-legacy-BxGuqmao.js","./BaseTextInput-legacy-B0M1JZ-n.js","./FieldMixin.vue_vue_type_script_lang-legacy-B1v8-yn1.js","./patient_radiology_service-legacy-BeFFhRft.js"],(function(e,t){"use strict";var i,a,n,s,o,l,r,c,d,u,h,p,g,m,y,b,S,C,v,_,f,w,O,T,P,E,I,x,D,R,B,k;return{setters:[e=>{i=e.H},e=>{a=e._},e=>{n=e.bk,s=e.b3,o=e.d,l=e.f,r=e.l,c=e.j,d=e.k,u=e.i,h=e.m,p=e.dC,g=e.ah,m=e.O,y=e._,b=e.r,S=e.o,C=e.x,v=e.b,_=e.w,f=e.u,w=e.B,O=e.I,T=e.b4,P=e.aX,E=e.H,I=e.F,x=e.V,D=e.c},e=>{R=e.L},e=>{B=e.P},e=>{k=e.default},null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".his-table tr{height:50px}\n",document.head.appendChild(t);class j extends n{constructor(e,t){super(e,122,t)}static async getComplaintsList(e,t=""){return s.getConceptSet(e,t)}async fetchLatestTriageEncounter(){return await j.getObs({concept_id:s.getConceptID("History of COVID-19 contact"),start_date:this.date,end_date:this.date,person_id:this.patientID})}}const F=o({name:"Modal",components:{IonButton:l,IonContent:r,IonHeader:c,IonTitle:d,IonToolbar:u,IonFooter:h,HisRadiologyPicker:k},mixins:[a],data:()=>({radiologyService:{},isPacsEnabled:!1,emitedSelectedOptions:{}}),watch:{ready:{async handler(e){e&&(this.radiologyService=new B(this.patientID,this.providerID),this.isPacsEnabled=await p.isPACsEnabled())},immediate:!0,deep:!0}},methods:{async onValue(e){this.emitedSelectedOptions=e},async getSelected(){return this.emitedSelectedOptions.map((async e=>({...await this.radiologyService.buildValueCoded("Radiology Orders",e.other.parent),child:[await this.radiologyService.buildValueCodedFromConceptId(e.other.parent,e.other.concept_id)]})))},async onSubmit(){if(!g.isEmpty(this.emitedSelectedOptions)){this.closeModal();let t=await this.getSelected();t=await Promise.all(t),await this.radiologyService.createEncounter();const i=await this.radiologyService.obsObj(t),a=await this.radiologyService.saveObservationList(i);if(await this.radiologyService.printOrders(a,this.patient),this.isPacsEnabled)try{await this.radiologyService.submitToPacs(a,this.patient)}catch(e){console.log(e)}}},async closeModal(){await m.dismiss([])}}}),M=y(F,[["render",function(e,t,i,a,n,s){const o=b("ion-title"),l=b("ion-toolbar"),r=b("ion-header"),c=b("his-radiology-picker"),d=b("ion-content"),u=b("ion-button"),h=b("ion-footer");return S(),C(w,null,[v(r,null,{default:_((()=>[v(l,null,{default:_((()=>[v(o,{class:"his-lg-text"},{default:_((()=>[f("Radiology Examination")])),_:1})])),_:1})])),_:1}),v(d,{style:{overflow:"hidden",background:"grey",height:"70vh"}},{default:_((()=>[v(c,{onOnValue:e.onValue},null,8,["onOnValue"])])),_:1}),v(h,null,{default:_((()=>[v(l,null,{default:_((()=>[v(u,{onClick:t[0]||(t[0]=t=>e.onSubmit()),size:"large",slot:"end",disabled:0===e.emitedSelectedOptions.length},{default:_((()=>[f(" Place orders ")])),_:1},8,["disabled"]),v(u,{onClick:t[1]||(t[1]=t=>e.closeModal()),size:"large",slot:"start",color:"danger"},{default:_((()=>[f(" Close ")])),_:1})])),_:1})])),_:1})],64)}]]),V=o({components:{HisStandardForm:i,IonPage:O},mixins:[a],data:()=>({complaintsService:{},todaysDate:T.getSessionDate(),presentingComplaints:"",isPacsEnabled:!1,radiologyBtnName:"Radiology Order",hasTriageComplaints:!1}),watch:{ready:{async handler(e){e&&(this.complaintsService=new j(this.patientID,this.providerID),this.isPacsEnabled=await p.isPACsEnabled(),this.hasTriageComplaints=await this.getTriagePresentingComplaints(),this.fields=this.getFields())},immediate:!0,deep:!0}},methods:{async onSubmit(e,t){const i=await Promise.all(t.complaints);await this.complaintsService.createEncounter(),await this.complaintsService.saveObservationList(i),this.nextTask()},async launchOrderSelection(){const e=await m.create({component:R,backdropDismiss:!1,cssClass:"large-modal"});e.present(),await e.onDidDismiss()},async launchRadiologyOrderSelection(){const e=await m.create({component:M,backdropDismiss:!1,cssClass:"large-modal"});e.present(),await e.onDidDismiss()},async getTriagePresentingComplaints(){if(!((await this.complaintsService.fetchLatestTriageEncounter()).length>0))return!1;const e=(await P.getEncounters(this.patientID,this.todaysDate)).filter((function(e){return"TRIAGE PRESENTING COMPLAINTS"==e.type.name&&E.toStandardHisFormat(e.encounter_datetime)==T.getSessionDate()}));return e.length>0&&(this.presentingComplaints=e[0].observations,!0)},buildResults(){let e="",t=this.presentingComplaints.map((t=>{if(null!=t.obs_group_id)return[e,t.value_text];e=t.value_text}));return t=t.filter((e=>null!=e)),this.presentingComplaints=t,[{label:"",value:"",other:{columns:["Group","Presenting complaints"],rows:t}}]},getFields(){return[{id:"triage_complaints",helpText:"Triaging Complaints",condition:()=>this.hasTriageComplaints,type:I.TT_TABLE_VIEWER,options:()=>this.buildResults(),config:{hiddenFooterBtns:["Clear"]}},{id:"complaints",helpText:"Presenting Complaints",type:I.TT_COMPLAINTS_PICKER,validation:e=>x.required(e),computedValue:e=>e.map((async e=>({...await this.complaintsService.buildValueCoded("Presenting complaint",e.other.parent),child:[await this.complaintsService.buildValueCodedFromConceptId(e.other.parent,e.other.concept_id)]}))),config:{hiddenFooterBtns:[this.showRadiologyOdersBtn(),this.disableBackBtn()],footerBtns:[{name:"Lab Order",size:"large",slot:"end",color:"primary",visible:!0,onClick:async()=>await this.launchOrderSelection(),visibleOnStateChange:e=>1===e.index},{name:this.radiologyBtnName,size:"large",slot:"end",color:"primary",visible:!0,onClick:async()=>await this.launchRadiologyOrderSelection(),visibleOnStateChange:e=>1===e.index}]}},{id:"all_presenting_complaints",helpText:"Summary",condition:()=>this.presentingComplaints.length>0,type:I.TT_SUMMARY,options:e=>this.buildSummaryResults(e),config:{hiddenFooterBtns:["Clear"]}}]},showRadiologyOdersBtn(){return this.isPacsEnabled?"":this.radiologyBtnName},buildSummaryResults(e){const t=e.complaints.map((e=>({label:"OPD Complaints",value:e.label}))),i=this.presentingComplaints.map((e=>({label:"Triaging Complaints",value:e[1]})));return t.concat(i)},disableBackBtn(){return this.hasTriageComplaints?"":"Back"}}});e("default",y(V,[["render",function(e,t,i,a,n,s){const o=b("his-standard-form"),l=b("ion-page");return S(),D(l,null,{default:_((()=>[v(o,{cancelDestinationPath:e.cancelDestination,fields:e.fields,onFinishAction:e.onSubmit,skipSummary:!0},null,8,["cancelDestinationPath","fields","onFinishAction"])])),_:1})}]]))}}}));