System.register(["./index-legacy-BsbMrqEO.js","./HisStandardForm-legacy-BbU4Bs9R.js","./EncounterMixin.vue_vue_type_script_lang-legacy-CZm53a_o.js","./encounter_guidelines-legacy-o_0qujSe.js","./GuidelineEngine-legacy-KsvQuFdF.js"],(function(e,t){"use strict";var i,n,s,a,o,r,d,l,u,c,h,p;return{setters:[e=>{i=e.d,n=e.dc,s=e.ab,a=e.ac,o=e.br,r=e.aM,d=e.a8,l=e.ad,u=e.u,c=e.v},e=>{h=e.H},e=>{p=e._},null,null],execute:function(){const t=i({mixins:[p],components:{HisStandardForm:h},data:()=>({consultation:{}}),watch:{ready:{handler(e){e&&(this.consultation=new n(this.patientID,this.providerID),this.fields=this.getFields())},immediate:!0}},methods:{async onFinish(e,t){await this.consultation.createEncounter();const i=await this.resolveObs(t);await this.consultation.saveObservationList(i),this.$router.back()},getFields(){return[{id:"has_hypertension",helpText:"Does the patient have hypertension",type:s.TT_SELECT,options:()=>this.yesNoOptions(),validation:e=>a.required(e),computedValue:e=>o.buildValueCoded("Patient has hypertension",`${e.value}`)},...r({condition:e=>"Yes"===e.has_hypertension.value,id:"hypertension_diagnosis",helpText:"Date the patient was diagnosed with hypertension",required:!0,estimation:{allowUnknown:!1},computeValue:e=>o.buildValueDate("Hypertension diagnosis date",e)})]}}});e("default",d(t,[["render",function(e,t,i,n,s,a){const o=l("his-standard-form");return u(),c(o,{fields:e.fields,skipSummary:!0,onFinishAction:e.onFinish},null,8,["fields","onFinishAction"])}]]))}}}));