System.register(["./HisStandardForm-legacy-D9LtBbE8.js","./EncounterMixin.vue_vue_type_script_lang-legacy-BqyQ5ujl.js","./index-legacy-DLdqxVnr.js","./encounter_guidelines-legacy-Cn5GVi4r.js","./GuidelineEngine-legacy-KsvQuFdF.js"],(function(e,i){"use strict";var t,a,r,s,n,o,l,c,d,u,p,h,v;return{setters:[e=>{t=e.H},e=>{a=e._},e=>{r=e.bH,s=e.d,n=e.a9,o=e.aa,l=e.bP,c=e.ds,d=e.dt,u=e.a6,p=e.ab,h=e.u,v=e.v},null,null],execute:function(){class i extends r{constructor(e,i){super(e,114,i)}}class m extends r{constructor(e,i){super(e,42,i)}}const f=s({components:{HisStandardForm:t},mixins:[a],data:()=>({referralService:{},admissionService:{}}),watch:{ready:{async handler(e){e&&(this.referralService=new i(this.patientID,this.providerID),this.admissionService=new m(this.patientID,this.providerID),this.fields=this.getFields())},immediate:!0,deep:!0}},methods:{async onSubmit(e,i){if("Admission"===e.opd_outcome.value){await this.admissionService.createEncounter();const e=await this.resolveObs({...i},"admission");await this.admissionService.saveObservationList(e)}else{await this.referralService.createEncounter();const e=await this.resolveObs({...i},"referral");await this.referralService.saveObservationList(e)}this.nextTask()},getFields(){return[{id:"opd_outcome",helpText:"Select outcome",type:n.TT_SELECT,validation:e=>o.required(e),options:()=>[{label:"Admit",value:"Admission"},{label:"Internal referral",value:"Internal referral"},{label:"Refer to another hospital/clinic",value:"External referral"}]},{id:"facility_name",helpText:"Select Facility name",type:n.TT_SELECT,validation:e=>o.required(e),computedValue:({value:e})=>({tag:"referral",obs:this.referralService.buildValueText("Referred",e)}),condition:e=>"External referral"===e.opd_outcome.value,options:(e,i="")=>l(i),config:{showKeyboard:!0,isFilterDataViaApi:!0}},{id:"specialist_clinic",helpText:"Select clinic",type:n.TT_SELECT,validation:e=>o.required(e),computedValue:({other:e})=>({tag:"referral",obs:this.referralService.buildValueCodedFromConceptId("Specialist clinic",e.concept_id)}),condition:e=>"Internal referral"===e.opd_outcome.value,options:()=>c(),config:{showKeyboard:!0}},{id:"wards",helpText:"Select ward",type:n.TT_SELECT,condition:e=>"Admission"===e.opd_outcome.value,validation:e=>o.required(e),computedValue:({value:e})=>({tag:"admission",obs:this.admissionService.buildValueText("Admit to ward",e)}),options:(e,i="")=>d(i),config:{showKeyboard:!0,isFilterDataViaApi:!0}}]}}});e("default",u(f,[["render",function(e,i,t,a,r,s){const n=p("his-standard-form");return h(),v(n,{cancelDestinationPath:e.cancelDestination,fields:e.fields,onFinishAction:e.onSubmit},null,8,["cancelDestinationPath","fields","onFinishAction"])}]]))}}}));