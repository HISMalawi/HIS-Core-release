import{H as l}from"./HisStandardForm-rh8Trs2q.js";import{_ as c}from"./EncounterMixin.vue_vue_type_script_lang-_NQuqjHg.js";import{P as t}from"./patient_diagnosis_service-CwNMDd7Y.js";import{bI as d,d as p,bs as u,al as m,aK as o,af as h,ab as n,ac as g,a8 as f,ad as v,u as _,v as y}from"./index-DrPQ21-i.js";import"./encounter_guidelines-D8L0Wl1z.js";import"./GuidelineEngine-D6V1_Znr.js";class S extends d{constructor(a,i){super(a,105,i)}}const T=p({components:{HisStandardForm:l},mixins:[c],data:()=>({activeField:"",notesService:{},diagnosisService:{},malariaTestResult:"No"}),watch:{ready:{async handler(e){e&&(this.malariaTestResult=await u.getLatestMalariaTestResult(this.patientID),this.notesService=new S(this.patientID,this.providerID),this.diagnosisService=new t(this.patientID,this.providerID),this.fields=this.getFields())},immediate:!0,deep:!0}},methods:{async onSubmit(e,a){await this.diagnosisService.createEncounter();const i=await this.resolveObs({...a,obs_datetime:m.getSessionDate()},"diagnosis");await this.diagnosisService.saveObservationList(i);const s=await this.resolveObs({...a},"notes");o.isEmpty(s)||(await this.notesService.createEncounter(),await this.notesService.saveObservationList(s)),this.nextTask()},mapListToOptions(e){return o.isEmpty(e)?[]:e.map(a=>({label:a.name,value:a.name,other:a.concept_id,isChecked:!1})).sort((a,i)=>a.label<i.label?-1:a.label>i.label?1:0)},async checkMalariaResult(e){return e.find(i=>i.label==="Malaria")?this.malariaTestResult==="Positive"?!0:await h("Patient has ".concat(this.malariaTestResult," malaria test result. Do you want to continue?")):!0},getFields(){return[{id:"primary_diagnosis",helpText:"Select primary diagnosis",type:n.TT_INFINITE_SCROLL_MULTIPLE_SELECT,validation:e=>g.required(e),options:async(e,a="",i=1,s=10)=>this.mapListToOptions(await t.getDiagnosis(a,i,s)),beforeNext:async e=>await this.checkMalariaResult(e),computedValue:e=>({tag:"diagnosis",obs:e.map(({other:a})=>this.diagnosisService.buildValueCodedFromConceptId("Primary diagnosis",a))}),summaryMapValue:({value:e})=>({value:e,label:"Primary diagnosis"}),config:{isFilterDataViaApi:!0,showKeyboard:!0}},{id:"secondary_diagnosis",helpText:"Select secondary diagnosis",type:n.TT_INFINITE_SCROLL_MULTIPLE_SELECT,options:async(e,a="",i=1,s=10)=>this.mapListToOptions(await t.getDiagnosis(a,i,s)),beforeNext:async e=>await this.checkMalariaResult(e),computedValue:e=>!o.isEmpty(e)&&{tag:"diagnosis",obs:e.map(({other:a})=>this.diagnosisService.buildValueCodedFromConceptId("Secondary diagnosis",a))},summaryMapValue:({value:e})=>({value:e,label:"Secondary diagnosis"}),config:{showKeyboard:!0,isFilterDataViaApi:!0}},{id:"clinical_notes",helpText:"Clinical notes",type:n.TT_TEXT,computedValue:e=>e&&{tag:"notes",obs:this.notesService.buildValueText("Clinical notes construct",e.value)}}]}}});function b(e,a,i,s,w,D){const r=v("his-standard-form");return _(),y(r,{cancelDestinationPath:e.cancelDestination,fields:e.fields,onFinishAction:e.onSubmit},null,8,["cancelDestinationPath","fields","onFinishAction"])}const x=f(T,[["render",b]]);export{x as default};