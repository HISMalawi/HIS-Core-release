System.register(["./HisStandardForm-legacy-BmDNxnlt.js","./EncounterMixin.vue_vue_type_script_lang-legacy-B5DlZOon.js","./patient_diagnosis_service-legacy-BzeIkU9h.js","./index-legacy-DDADMnop.js","./encounter_guidelines-legacy-BkRGG_sA.js","./GuidelineEngine-legacy-KsvQuFdF.js"],(function(e,i){"use strict";var a,t,s,n,o,l,r,c,d,u,h,p,g,m,y;return{setters:[e=>{a=e.H},e=>{t=e._},e=>{s=e.P},e=>{n=e.bJ,o=e.d,l=e.bt,r=e.al,c=e.aL,d=e.af,u=e.ab,h=e.ac,p=e.a8,g=e.ad,m=e.u,y=e.v},null,null],execute:function(){class i extends n{constructor(e,i){super(e,105,i)}}const v=o({components:{HisStandardForm:a},mixins:[t],data:()=>({activeField:"",notesService:{},diagnosisService:{},malariaTestResult:"No"}),watch:{ready:{async handler(e){e&&(this.malariaTestResult=await l.getLatestMalariaTestResult(this.patientID),this.notesService=new i(this.patientID,this.providerID),this.diagnosisService=new s(this.patientID,this.providerID),this.fields=this.getFields())},immediate:!0,deep:!0}},methods:{async onSubmit(e,i){await this.diagnosisService.createEncounter();const a=await this.resolveObs({...i,obs_datetime:r.getSessionDate()},"diagnosis");await this.diagnosisService.saveObservationList(a);const t=await this.resolveObs({...i},"notes");c.isEmpty(t)||(await this.notesService.createEncounter(),await this.notesService.saveObservationList(t)),this.nextTask()},mapListToOptions:e=>c.isEmpty(e)?[]:e.map((e=>({label:e.name,value:e.name,other:e.concept_id,isChecked:!1}))).sort(((e,i)=>e.label<i.label?-1:e.label>i.label?1:0)),async checkMalariaResult(e){return!e.find((e=>"Malaria"===e.label))||"Positive"===this.malariaTestResult||await d(`Patient has ${this.malariaTestResult} malaria test result. Do you want to continue?`)},getFields(){return[{id:"primary_diagnosis",helpText:"Select primary diagnosis",type:u.TT_INFINITE_SCROLL_MULTIPLE_SELECT,validation:e=>h.required(e),options:async(e,i="",a=1,t=10)=>this.mapListToOptions(await s.getDiagnosis(i,a,t)),beforeNext:async e=>await this.checkMalariaResult(e),computedValue:e=>({tag:"diagnosis",obs:e.map((({other:e})=>this.diagnosisService.buildValueCodedFromConceptId("Primary diagnosis",e)))}),summaryMapValue:({value:e})=>({value:e,label:"Primary diagnosis"}),config:{isFilterDataViaApi:!0,showKeyboard:!0}},{id:"secondary_diagnosis",helpText:"Select secondary diagnosis",type:u.TT_INFINITE_SCROLL_MULTIPLE_SELECT,options:async(e,i="",a=1,t=10)=>this.mapListToOptions(await s.getDiagnosis(i,a,t)),beforeNext:async e=>await this.checkMalariaResult(e),computedValue:e=>!c.isEmpty(e)&&{tag:"diagnosis",obs:e.map((({other:e})=>this.diagnosisService.buildValueCodedFromConceptId("Secondary diagnosis",e)))},summaryMapValue:({value:e})=>({value:e,label:"Secondary diagnosis"}),config:{showKeyboard:!0,isFilterDataViaApi:!0}},{id:"clinical_notes",helpText:"Clinical notes",type:u.TT_TEXT,computedValue:e=>e&&{tag:"notes",obs:this.notesService.buildValueText("Clinical notes construct",e.value)}}]}}});e("default",p(v,[["render",function(e,i,a,t,s,n){const o=g("his-standard-form");return m(),y(o,{cancelDestinationPath:e.cancelDestination,fields:e.fields,onFinishAction:e.onSubmit},null,8,["cancelDestinationPath","fields","onFinishAction"])}]]))}}}));