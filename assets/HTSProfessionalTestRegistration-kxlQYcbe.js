import{H as m}from"./HisStandardForm-DO3sZVdL.js";import{d as c,I as f,K as T,F as t,aV as a,dF as _,_ as h,r as p,o as D,c as g,w as y,b as H}from"./index-BFVcutZq.js";import{P as n}from"./PersonFieldHelper-ByV868UO.js";import"./LocationFieldOptions-C8xpWQA4.js";import"./storage-DBvOSj8j.js";const F=c({components:{IonPage:f,HisStandardForm:m},setup(){const i=T([{...n.getGenderField(),requireNext:!1},{id:"birth_date",helpText:"Client's age (Years or Months)",type:t.TT_AGE_INPUT,isRequired:()=>!0,validation:o=>{const e=parseInt("".concat(o.value));if(!e||typeof e!="number")return["Invalid Age entered!"];if(o.other.timeUnit==="Months"&&(e<=0||e>12))return["Invalid month entered! Minimum month is 1 and maximum is 12"];if(o.other.timeUnit==="Years"&&(e<=0||e>125))return["Invalid year entered! Minimum year is 1 and maximum is 125 years"]},finalComputedValue:o=>{const[e]="".concat(o.other.date).split("-");return{person:{birthdate:"".concat(e,"-07-15"),birthdate_estimated:!0}}},config:{defaultUnit:"Years",excludeUnits:["Hours","Weeks","Days"]}},{...n.getGivenNameField(),type:t.TT_HIDDEN,computedValue:()=>({person:"Unknown"})},{...n.getFamilyNameField(),type:t.TT_HIDDEN,computedValue:()=>({person:"Unknown"})},{...n.getHomeDistrictField(),type:t.TT_HIDDEN,computedValue:()=>({person:"Unknown"})},{...n.getHomeTaField(),type:t.TT_HIDDEN,computedValue:()=>({person:"Unknown"})},{...n.getHomeVillageField(),type:t.TT_HIDDEN,computedValue:()=>({person:"Unknown"})},{...n.getCurrentDistrictField(),type:t.TT_HIDDEN,computedValue:()=>({person:"Unknown"})},{...n.getCurrentTAfield(),type:t.TT_HIDDEN,computedValue:()=>({person:"Unknown"})},{...n.getCurrentVillageField(),type:t.TT_HIDDEN,computedValue:()=>({person:"Unknown"})},{...n.getCellNumberField(),type:t.TT_HIDDEN,computedValue:()=>({person:"Unknown"})}]);function l(o,e){const d=n.resolvePerson(e),s=a().savePersonOffline("Professional test registration",d,[]);_({visitID:s}).nextTask(),a().synchronizeRecord(s).then(r=>a().saveOffline(r))}return{fields:i,onFinish:l}}});function I(i,l,o,e,d,s){const r=p("his-standard-form"),u=p("ion-page");return D(),g(u,null,{default:y(()=>[H(r,{formLabel:"Professional-Test Registration","cancel-destination-path":"/","on-finish-action":i.onFinish,"skip-summary":!0,fields:i.fields},null,8,["on-finish-action","fields"])]),_:1})}const E=h(F,[["render",I]]);export{E as default};