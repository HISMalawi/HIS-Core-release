import{bk as b,d as g,t as d,aT as t,U as w,F as p,V as h,_ as C,r as S,o as D,c as T}from"./index-BFVcutZq.js";import{H as O}from"./HisStandardForm-DO3sZVdL.js";import{_ as F}from"./EncounterMixin.vue_vue_type_script_lang-BjcFUOZj.js";import"./encounter_guidelines-fEzG7yyD.js";import"./GuidelineEngine-D6V1_Znr.js";class k extends b{constructor(o,a){super(o,184,a)}}const x=g({mixins:[F],components:{HisStandardForm:O},data:()=>({outcome:{}}),watch:{patient:{async handler(){this.outcome=new k(this.patientID,this.providerID),this.fields=this.getFields()},deep:!0}},methods:{async onFinish(e){if(!await this.outcome.createEncounter())return d("Unable to create encounter");const a=t.getProgramID(),c=await t.getProgramWorkflows(t.getProgramID()),i=e.select_referral_outcome.value,n={};c.forEach(s=>{s.states.forEach(m=>{const _=m.program_workflow_state_id,v=m.concept.concept_names[0].name;n[v]=_})});const r={location_id:t.getLocationName(),state:n[i],date:t.getSessionDate()};if(!await t.createState(this.patientID,a,r))return d("Unable to update state");const f=e.select_referral_outcome.value,l=e.select_cancer_treatment.value,u=[await this.outcome.buildValueCoded("Outcome",f)];if(l.match(/cancer/)){const s=await this.outcome.buildValueCoded("Cancer treatment",l);u.push(s)}await this.outcome.saveObservationList(u),w("Observations and encounter created!"),this.nextTask()},getFields(){return[{id:"select_referral_outcome",helpText:"Referral outcome",type:p.TT_SELECT,validation:e=>h.required(e),options:()=>[{label:"Cancer of cervix",value:"Cancer of cervix"},{label:"Continue follow-up",value:"Continue follow-up"},{label:"Discharged uninfected",value:"Discharged uninfected"},{label:"Treatment complete",value:"Treatment complete"}]},{id:"select_cancer_treatment",helpText:"Select cancer treatment",type:p.TT_SELECT,validation:e=>h.required(e),options:()=>[{label:"Surgery",value:"Surgery"},{label:"Palliative Care",value:"Palliative Care"},{label:"Discharged",value:"Discharged"},{label:"Other",value:"Other"}]}]}}});function y(e,o,a,c,i,n){const r=S("his-standard-form");return D(),T(r,{fields:e.fields,onFinishAction:e.onFinish,skipSummary:!0,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])}const U=C(x,[["render",y]]);export{U as default};