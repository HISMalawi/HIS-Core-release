System.register(["./index-legacy-BClzHwRE.js","./HisStandardForm-legacy-I0WV5d_F.js","./EncounterMixin.vue_vue_type_script_lang-legacy-BWEO0snp.js","./encounter_guidelines-legacy-BDSzy3su.js","./GuidelineEngine-legacy-KsvQuFdF.js"],(function(e,t){"use strict";var i,a,n,r,s,u,o,p,l,c,d,h,v,b,m,f,g,y;return{setters:[e=>{i=e.bH,a=e.ar,n=e.bf,r=e.d,s=e.O,u=e.as,o=e.K,p=e.aJ,l=e.a9,c=e.aa,d=e.by,h=e.bg,v=e.a6,b=e.v,m=e.ab,f=e.u},e=>{g=e.H},e=>{y=e._},null,null],execute:function(){class t extends i{sitePrefix;constructor(e,t){super(e,51,t),this.sitePrefix=""}getSitePrefix(){return this.sitePrefix}async loadSitePrefix(){this.sitePrefix=await a.sitePrefix()}createArvNumber(e){return n.postJson("/patient_identifiers/",{patient_id:this.patientID,identifier_type:4,identifier:e})}buildArvNumber(e){return`${this.sitePrefix}-ARV-${e}`}}const _=r({mixins:[y],components:{HisStandardForm:g},data:()=>({reception:{},activeField:"",hasARVNumber:!0,suggestedNumber:"",patientType:{}}),watch:{ready:{handler(e){e&&(this.reception=new t(this.patientID,this.providerID),this.fields=this.getFields())},immediate:!0}},methods:{async onFinish(e,t){if(!(await this.reception.createEncounter()))return s("Unable to create encounter");const i=await this.resolveObs(t,"obs");if(!(await this.reception.saveObservationList(i)))return s("Unable to create Obs");if(e.capture_arv&&"Yes"===e.capture_arv.value){if(!(await this.reception.createArvNumber(t.arv_number)))return s("Unable to save Arv number");u.invalidate("ACTIVE_PATIENT")}if(o("Encounter created"),p.find(e.who_is_present,{value:"Yes",label:"Guardian present?"})&&p.isEmpty(await this.patient.getGuardian()))return this.$router.push(`/guardian/registration/${this.patientID}`);this.nextTask()},getFields(){return[{id:"who_is_present",helpText:"HIV reception",type:l.TT_MULTIPLE_YES_NO,validation:e=>c.required(e)||c.neitherOr(e)||c.anyEmpty(e),computedValue:e=>({tag:"obs",obs:e.map((({other:e,value:t})=>this.reception.buildValueCoded(e.concept,t)))}),onValueUpdate:async(e,t)=>e.map((e=>(t.label!=e.label&&"No"===t.value&&(e.value="Yes"),e))),options:e=>e.who_is_present?e.who_is_present:[{label:"Patient present?",value:"",other:{concept:"Patient Present",property:"patient_present",values:this.yesNoOptions()}},{label:"Guardian present?",value:"",other:{concept:"Guardian Present",property:"guardian_present",values:this.yesNoOptions()}}]},{id:"capture_arv",helpText:"Capture ARV Number?",type:l.TT_SELECT,requireNext:!0,init:async()=>(""===this.patient.getPatientIdentifier(4)&&(this.hasARVNumber=!1),this.patientType=new d(this.patientID,this.providerID),await this.patientType.loadPatientType(),!0),condition:()=>!this.hasARVNumber&&"New patient"===this.patientType.getType(),validation:e=>c.required(e),options:()=>this.yesNoOptions()},{id:"arv_number",helpText:"ART number",type:l.TT_TEXT,init:async()=>{if(await this.reception.loadSitePrefix(),!this.hasARVNumber){const e=await n.getNextSuggestedARVNumber();this.suggestedNumber=e.arv_number.replace(/^\D+|\s/g,"")}return!0},computedValue:({value:e})=>e,validation:e=>c.required(e),condition:e=>!this.hasARVNumber&&"Yes"===e.capture_arv.value,defaultValue:()=>this.suggestedNumber,config:{prependValue:()=>{const e=h.getActiveApp();return e&&e.programPatientIdentifiers?e.programPatientIdentifiers["ARV Number"].prefix():""}}}]}}});e("default",v(_,[["render",function(e,t,i,a,n,r){const s=m("his-standard-form");return f(),b(s,{fields:e.fields,activeField:e.activeField,onFinishAction:e.onFinish,skipSummary:!0,cancelDestinationPath:e.cancelDestination},null,8,["fields","activeField","onFinishAction","cancelDestinationPath"])}]]))}}}));