import{D as l}from"./data_cleaning_report_service-uZxJD4ya.js";import{d as m,a5 as c,ab as t,ac as n,by as o,a8 as p,v as u,w as _,ad as s,u as f,x as h}from"./index-CG6KEPsv.js";import{_ as v}from"./EncounterMixin.vue_vue_type_script_lang-iYCFdq6R.js";import"./encounter_guidelines-fPxboxGG.js";import"./GuidelineEngine-D6V1_Znr.js";import"./HisStandardForm-CWpBcokh.js";const T=m({mixins:[v],components:{IonPage:c},created(){this.fields=[{id:"data_cleaning_datetime",helpText:"Date data cleaning done",type:t.TT_FULL_DATE,computedValue:e=>e.value,validation:e=>n.required(e)},(()=>{const e=o.getGivenNameField();return e.helpText="Verifier's First name",e.proxyID="supervisors",e})(),(()=>{const e=o.getFamilyNameField();return e.helpText="Verifier's Last name",e.proxyID="supervisors",e.computedValue=(a,i)=>"".concat(i.given_name.value," ").concat(a.value),e})(),{id:"has_comment",helpText:"Any comments or notes to add?",type:t.TT_SELECT,validation:e=>n.required(e),options:this.yesNoOptions},{id:"comments",helpText:"Comments",type:t.TT_NOTE,validation:e=>n.required(e),computedValue:e=>e.value,condition:e=>e.has_comment.value==="Yes"}]},methods:{async onFinish(e,a){await new l().saveDataCleaningVerification(a)&&this.$router.back()}}});function y(e,a,i,g,x,F){const r=s("his-standard-form"),d=s("ion-page");return f(),u(d,null,{default:_(()=>[h(r,{fields:e.fields,onFinishAction:e.onFinish,skipSummary:!0,cancelDestinationPath:"/"},null,8,["fields","onFinishAction"])]),_:1})}const w=p(T,[["render",y]]);export{w as default};