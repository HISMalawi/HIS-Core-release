System.register(["./HisStandardForm-legacy-OekRIZB_.js","./EncounterMixin.vue_vue_type_script_lang-legacy-B7zjV7nz.js","./index-legacy-CNrLGT3P.js","./LocationFieldOptions-legacy-DJYLOgCp.js","./encounter_guidelines-legacy-BxkBj-oZ.js","./GuidelineEngine-legacy-KsvQuFdF.js","./storage-legacy-uuFjVbAf.js"],(function(e,i){"use strict";var t,a,r,s,n,o,l,c,d,u,h,p,m;return{setters:[e=>{t=e.H},e=>{a=e._},e=>{r=e.bk,s=e.d,n=e.F,o=e.V,l=e._,c=e.r,d=e.o,u=e.c},e=>{h=e.g,p=e.f,m=e.h},null,null,null],execute:function(){class i extends r{constructor(e,i){super(e,114,i)}}class v extends r{constructor(e,i){super(e,42,i)}}const f=s({components:{HisStandardForm:t},mixins:[a],data:()=>({referralService:{},admissionService:{}}),watch:{ready:{async handler(e){e&&(this.referralService=new i(this.patientID,this.providerID),this.admissionService=new v(this.patientID,this.providerID),this.fields=this.getFields())},immediate:!0,deep:!0}},methods:{async onSubmit(e,i){if("Admission"===e.opd_outcome.value){await this.admissionService.createEncounter();const e=await this.resolveObs({...i},"admission");await this.admissionService.saveObservationList(e)}else{await this.referralService.createEncounter();const e=await this.resolveObs({...i},"referral");await this.referralService.saveObservationList(e)}this.nextTask()},getFields(){return[{id:"opd_outcome",helpText:"Select outcome",type:n.TT_SELECT,validation:e=>o.required(e),options:()=>[{label:"Admit",value:"Admission"},{label:"Internal referral",value:"Internal referral"},{label:"Refer to another hospital/clinic",value:"External referral"}]},{id:"facility_name",helpText:"Select Facility name",type:n.TT_SELECT,validation:e=>o.required(e),computedValue:({value:e})=>({tag:"referral",obs:this.referralService.buildValueText("Referred",e)}),condition:e=>"External referral"===e.opd_outcome.value,options:(e,i="")=>h(i),config:{showKeyboard:!0,isFilterDataViaApi:!0}},{id:"specialist_clinic",helpText:"Select clinic",type:n.TT_SELECT,validation:e=>o.required(e),computedValue:({other:e})=>({tag:"referral",obs:this.referralService.buildValueCodedFromConceptId("Specialist clinic",e.concept_id)}),condition:e=>"Internal referral"===e.opd_outcome.value,options:()=>p(),config:{showKeyboard:!0}},{id:"wards",helpText:"Select ward",type:n.TT_SELECT,condition:e=>"Admission"===e.opd_outcome.value,validation:e=>o.required(e),computedValue:({value:e})=>({tag:"admission",obs:this.admissionService.buildValueText("Admit to ward",e)}),options:(e,i="")=>m(i),config:{showKeyboard:!0,isFilterDataViaApi:!0}}]}}});e("default",l(f,[["render",function(e,i,t,a,r,s){const n=c("his-standard-form");return d(),u(n,{cancelDestinationPath:e.cancelDestination,fields:e.fields,onFinishAction:e.onSubmit},null,8,["cancelDestinationPath","fields","onFinishAction"])}]]))}}}));