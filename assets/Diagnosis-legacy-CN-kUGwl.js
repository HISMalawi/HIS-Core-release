System.register(["./HisStandardForm-legacy-D9LtBbE8.js","./EncounterMixin.vue_vue_type_script_lang-legacy-BqyQ5ujl.js","./index-legacy-DLdqxVnr.js","./encounter_guidelines-legacy-Cn5GVi4r.js","./GuidelineEngine-legacy-KsvQuFdF.js"],(function(e,i){"use strict";var a,t,s,n,o,r,l,c,d,u,p,h,g,m,y;return{setters:[e=>{a=e.H},e=>{t=e._},e=>{s=e.bH,n=e.bp,o=e.d,r=e.br,l=e.aj,c=e.aJ,d=e.ad,u=e.a9,p=e.aa,h=e.a6,g=e.v,m=e.ab,y=e.u},null,null],execute:function(){class i extends s{constructor(e,i){super(e,8,i)}static async getDiagnosis(e="",i=1,a=10){const t=n.getConceptID("Qech outpatient diagnosis list");return s.getJson("diagnosis",{id:t,name:e,page:i,page_size:a})}}class v extends s{constructor(e,i){super(e,105,i)}}const b=o({components:{HisStandardForm:a},mixins:[t],data:()=>({activeField:"",notesService:{},diagnosisService:{},malariaTestResult:"No"}),watch:{ready:{async handler(e){e&&(this.malariaTestResult=await r.getLatestMalariaTestResult(this.patientID),this.notesService=new v(this.patientID,this.providerID),this.diagnosisService=new i(this.patientID,this.providerID),this.fields=this.getFields())},immediate:!0,deep:!0}},methods:{async onSubmit(e,i){await this.diagnosisService.createEncounter();const a=await this.resolveObs({...i,obs_datetime:l.getSessionDate()},"diagnosis");await this.diagnosisService.saveObservationList(a);const t=await this.resolveObs({...i},"notes");c.isEmpty(t)||(await this.notesService.createEncounter(),await this.notesService.saveObservationList(t)),this.nextTask()},mapListToOptions:e=>c.isEmpty(e)?[]:e.map((e=>({label:e.name,value:e.name,other:e.concept_id,isChecked:!1}))).sort(((e,i)=>e.label<i.label?-1:e.label>i.label?1:0)),async checkMalariaResult(e){return!e.find((e=>"Malaria"===e.label))||"Positive"===this.malariaTestResult||await d(`Patient has ${this.malariaTestResult} malaria test result. Do you want to continue?`)},getFields(){return[{id:"primary_diagnosis",helpText:"Select primary diagnosis",type:u.TT_INFINITE_SCROLL_MULTIPLE_SELECT,validation:e=>p.required(e),options:async(e,a="",t=1,s=10)=>this.mapListToOptions(await i.getDiagnosis(a,t,s)),beforeNext:async e=>await this.checkMalariaResult(e),computedValue:e=>({tag:"diagnosis",obs:e.map((({other:e})=>this.diagnosisService.buildValueCodedFromConceptId("Primary diagnosis",e)))}),summaryMapValue:({value:e})=>({value:e,label:"Primary diagnosis"}),config:{isFilterDataViaApi:!0,showKeyboard:!0}},{id:"secondary_diagnosis",helpText:"Select secondary diagnosis",type:u.TT_INFINITE_SCROLL_MULTIPLE_SELECT,options:async(e,a="",t=1,s=10)=>this.mapListToOptions(await i.getDiagnosis(a,t,s)),beforeNext:async e=>await this.checkMalariaResult(e),computedValue:e=>!c.isEmpty(e)&&{tag:"diagnosis",obs:e.map((({other:e})=>this.diagnosisService.buildValueCodedFromConceptId("Secondary diagnosis",e)))},summaryMapValue:({value:e})=>({value:e,label:"Secondary diagnosis"}),config:{showKeyboard:!0,isFilterDataViaApi:!0}},{id:"clinical_notes",helpText:"Clinical notes",type:u.TT_NOTE,computedValue:e=>e&&{tag:"notes",obs:this.notesService.buildValueText("Clinical notes construct",e.value)}}]}}});e("default",h(b,[["render",function(e,i,a,t,s,n){const o=m("his-standard-form");return y(),g(o,{cancelDestinationPath:e.cancelDestination,fields:e.fields,onFinishAction:e.onSubmit},null,8,["cancelDestinationPath","fields","onFinishAction"])}]]))}}}));