import{d as p,r as d,bH as u,bM as m,a9 as f,aa as _,dQ as n,u as v,v as E,w as T,x as b,y as s,a5 as h}from"./index-ATRrruTT.js";import{H as D}from"./HisStandardForm-7DlnDJZP.js";import{u as C}from"./useEncounter-DD-d41Xj.js";import{r as I}from"./commons-C_qhrxz8.js";import"./isEmpty-DB6b62pN.js";import"./encounter_guidelines-BqqB3D2c.js";import"./GuidelineEngine-D6V1_Znr.js";const P=p({__name:"Examination",setup(x){const i=d([]),e=new u(-1,m.EXAMINATION),{goToNextTask:r,patientDashboardUrl:c}=C((t,a)=>{e.patientID=a,e.providerID=t,i.value=[{id:"diagnosisType",helpText:"Method of Diagnosis:",type:f.TT_SELECT,validation:o=>_.required(o),computedValue:o=>({concept_id:n("PROCEDURE_TYPE"),value_coded:n("".concat(o.value)),obs_datetime:e.date}),options:()=>[{value:"LAB_ORDER",label:"Lab Order"},{value:"CLINICAL",label:"Clinical"}]}]});async function l(t,a){await e.createEncounter(),await e.saveObservationList(await I(a)),r()}return(t,a)=>(v(),E(s(h),null,{default:T(()=>[b(D,{cancelDestinationPath:s(c),onFinishAction:l,fields:i.value,skipSummary:!0},null,8,["cancelDestinationPath","fields"])]),_:1}))}});export{P as default};