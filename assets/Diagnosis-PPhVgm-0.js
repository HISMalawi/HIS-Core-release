import{d as P,r as R,bH as I,bM as f,a9 as r,aa as l,dQ as t,dS as g,u as O,v as h,w as Y,x as B,y as m,bs as U,aM as v,dR as M,bL as y,dT as C,aQ as D,a5 as X}from"./index-ATRrruTT.js";import{H as w}from"./HisStandardForm-7DlnDJZP.js";import{u as x}from"./useEncounter-DD-d41Xj.js";import{r as V}from"./commons-C_qhrxz8.js";import"./isEmpty-DB6b62pN.js";import"./encounter_guidelines-BqqB3D2c.js";import"./GuidelineEngine-D6V1_Znr.js";const Q=P({__name:"Diagnosis",setup(F){const _=R([]),a=new I(-1,f.DIAGNOSIS),E=R(),{goToNextTask:b,patientDashboardUrl:S,facts:N}=x((o,c,T)=>{a.patientID=c,a.providerID=o,E.value=T;const u=()=>{const e=[["Infiltration","PULMONARY_TB"],["Tuberculosis Miliary","PULMONARY_TB"],["Opacification","PULMONARY_TB"],["Consolidation","PULMONARY_TB"],["Cavitation","PULMONARY_TB"],["Hilar Lymphadenopathy","EXTRA_PULMONARY_TB"],["Tuberculosis Meningitis","EXTRA_PULMONARY_TB"],["Lymphadenitis","EXTRA_PULMONARY_TB"],["Osteoarticular","EXTRA_PULMONARY_TB"],["Gastrointestinal","EXTRA_PULMONARY_TB"],["Pleural Effusion","EXTRA_PULMONARY_TB"],["Tuberculosis Spine","EXTRA_PULMONARY_TB"]];return{id:"procedureType",helpText:"Procedure Type:",requireNext:!1,type:r.TT_SELECT,validation:i=>l.required(i),computedValue:i=>[{concept_id:t("PROCEDURE_TYPE"),value_coded:t("".concat(i.value)),obs_datetime:a.date},{concept_id:t("CLINICALLY_DIAGNOSED"),value_coded:t("YES_ANSWER"),obs_datetime:a.date}],options:()=>[{value:"ULTRASOUND",label:"Ultrasound Scanning",other:{procedures:[["Pleural Effusion","EXTRA_PULMONARY_TB"],["Pericardial Effusion","EXTRA_PULMONARY_TB"],["Abdominal Tuberculosis","EXTRA_PULMONARY_TB"],["Tuberculosis Ascites","EXTRA_PULMONARY_TB"]]}},{value:"X_RAY",label:"X-Ray",other:{procedures:e}},{value:"CLINICAL",label:"Clinical",other:{procedures:e}}]}},d=()=>({id:"tbStatus",helpText:"TB Present?",type:r.TT_SELECT,computedValue:e=>({concept_id:t("TB_STATUS"),value_coded:t(e.value),obs_datetime:a.date}),validation:e=>l.required(e),options:()=>[{value:"POSITIVE",label:"Yes"},{value:"NEGATIVE",label:"No"}],requireNext:!1}),s=()=>({id:"tbStrain",helpText:"Type of TB:",type:r.TT_MULTIPLE_SELECT,computedValue:e=>[...e.map(n=>({concept_id:t("TUBERCULOSIS_CLASS"),value_coded:t("".concat(n.label)),obs_datetime:a.date})),{concept_id:t("TB_TYPE"),value_coded:t("".concat(e[0].value)),obs_datetime:a.date}],validation:e=>l.required(e),condition:e=>e.tbStatus.value==="POSITIVE"&&e.procedureType.other.procedures.length,options:e=>e.procedureType.other.procedures.map(([i,n])=>({label:i,value:n}))}),A=()=>({id:"drugResistance",helpText:"Clinically enroll patient for:",type:r.TT_SELECT,validation:e=>l.required(e),condition:e=>e.tbStatus.value==="POSITIVE",options:()=>[{value:"NO_ANSWER",label:"Firstline treatment"},{value:"YES_ANSWER",label:"DR TB treatment"}]}),p=()=>({id:"resistantTo",helpText:"Suspected drug resistance to:",type:r.TT_MULTIPLE_SELECT,computedValue:e=>{const i=e.map(n=>({concept_id:t("TB_DRUG_RESISTANT"),value_coded:g("".concat(n.value)),obs_datetime:a.date}));return i.length>1?i.push({concept_id:t("Resistance classification"),value_coded:t("Multi drug resistant"),obs_datetime:a.date}):i.length===1&&i.push({concept_id:t("Resistance classification"),value_coded:t("Mono drug resistant"),obs_datetime:a.date}),i},validation:e=>l.required(e),condition:e=>e.drugResistance.value==="YES_ANSWER",options:()=>[{value:"Rifampicin",label:"Rifampicin"},{value:"Isoniazid",label:"Isoniazid"}]});_.value=[u(),d(),s(),A(),p()]});async function L(o,c){var u,d;if(((u=o==null?void 0:o.drugResistance)==null?void 0:u.value)=="YES_ANSWER"){const s=new U(a.patientID);if(await v("Drug resistance detected","Client is resistant to one or more standard TB drugs","Do you want to enroll client in the Drug resistance program?",[{name:"Yes",slot:"start",color:"success"},{name:"No",slot:"end",color:"danger"}])==="Yes"){try{await s.enrollProgram()}catch(p){console.warn("".concat(p))}s.setStateDate(a.date),s.setStateId(M.MDR),await s.updateState()}}const T=await V(c);if(await a.createEncounter(),await a.saveObservationList(T),((d=o.tbStatus)==null?void 0:d.value)==="NEGATIVE"&&!y.isOnTreatment(N.outcome)&&E.value.getAge()>C)return await v("Notice","Client is TB Negative!","Would you like to retest client?",[{name:"Yes",slot:"start",color:"success"},{name:"No",slot:"end",color:"danger"}])==="No"?D.push(S.value):location.reload();b()}return(o,c)=>(O(),h(m(X),null,{default:Y(()=>[B(w,{cancelDestinationPath:m(S),onFinishAction:L,fields:_.value,skipSummary:!0},null,8,["cancelDestinationPath","fields"])]),_:1}))}});export{Q as default};