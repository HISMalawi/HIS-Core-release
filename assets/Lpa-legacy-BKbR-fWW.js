System.register(["./index-legacy-BsbMrqEO.js","./HisStandardForm-legacy-BbU4Bs9R.js","./useEncounter-legacy-D64YFiIH.js","./commons-legacy-Chic3QOO.js","./util-legacy-CjANJSja.js","./isEmpty-legacy-B5ngE3CS.js","./encounter_guidelines-legacy-o_0qujSe.js","./GuidelineEngine-legacy-KsvQuFdF.js"],(function(e,t){"use strict";var a,i,n,s,o,l,c,d,r,u,p,m,_,T,g,v,R,b,E,h,y,f,I;return{setters:[e=>{a=e.d,i=e.r,n=e.bI,s=e.dP,o=e.ao,l=e.ab,c=e.al,d=e.ac,r=e.u,u=e.v,p=e.w,m=e.x,_=e.y,T=e.dR,g=e.dS,v=e.aN,R=e.a5,b=e.aR},e=>{E=e.H},e=>{h=e.u},e=>{y=e.r},e=>{f=e.g,I=e.a},null,null,null],execute:function(){e("default",a({__name:"Lpa",setup(e){const t=i([]),a=new n(-1,s.LAB_RESULTS),D=i(),S=o(),{goToNextTask:L,patientDashboardUrl:C,facts:N}=h(((e,i,n)=>{a.patientID=i,a.providerID=e,D.value=n,t.value=[{id:"sampleResult",helpText:"Sample Result:",type:l.TT_SELECT,computedValue:e=>[{concept_id:f("Lab test result"),value_coded:f(`${e.value}`),obs_datetime:a.date},{concept_id:f("TB_STATUS"),value_coded:f(e.other),obs_datetime:a.date},{concept_id:f("BACTERIOLOGICALLY_DIAGNOSED"),value_coded:f("YES_ANSWER"),obs_datetime:a.date},{concept_id:f("PROCEDURE_TYPE"),value_coded:f("LPA"),obs_datetime:a.date},..."POSITIVE"===e.other?[{concept_id:f("TB_TYPE"),value_coded:f("PULMONARY_TB"),obs_datetime:a.date}]:[]],options:()=>[{value:"MTB_NOT_DETECTED",label:"MTB not detected",other:"NEGATIVE"},{value:"MTB_DETECTED",label:"MTB detected",other:"POSITIVE"},{value:"MTB_INVALID",label:"Invalid",other:"NEGATIVE"}]},{id:"treatmentType",helpText:"Select treatment drugs:",type:l.TT_SELECT,condition:e=>"MTB_DETECTED"===e.sampleResult.value,options:()=>[{value:"FIRST_LINE",label:"Firstline Drugs"},{value:"SECOND_LINE",label:"DR TB Drugs"}]},{id:"sampleResistance",helpText:"MTB Resistance:",type:l.TT_MULTIPLE_SELECT,condition:e=>"FIRST_LINE"===e.treatmentType.value,onValueUpdate:(e,t)=>e.map((e=>{if(t.isChecked){if(/no resistance/i.test(`${t.label}`)&&e.label!=t.label)return e.isChecked=!1,e;/no resistance/i.test(`${t.label}`)||/no resistance/i.test(`${e.label}`)&&(e.isChecked=!1)}return e})),computedValue:e=>{const t=[];return 1===e.length?t.push({concept_id:f("Resistance classification"),value_coded:f("Mono drug resistant"),obs_datetime:a.date}):e.length>1&&t.push({concept_id:f("Resistance classification"),value_coded:f("Multi drug resistant"),obs_datetime:a.date}),e.some((e=>/rif/i.test(e.label)))&&t.push({concept_id:f("Rifampicin resistance confirmed"),value_coded:f("YES_ANSWER"),obs_datetime:a.date}),[...t,...e.filter((e=>!/no resistance/i.test(`${e.value}`))).map((e=>({concept_id:f("TB_DRUG_RESISTANT"),value_coded:I(`${e.value}`),obs_datetime:a.date})))]},options:()=>[{value:"Rifampicin (300mg)",label:"Rifampicin Resistant"},{value:"Isoniazid (300mg)",label:"Isoniazid Resistant"},{value:"No Resistance",label:"No Resistance"}]},(()=>{const e=[];return{id:"sampleSecondlineDrugs",helpText:"MTB Resistance:",type:l.TT_MULTIPLE_SELECT,init:async()=>{try{const t=[];(await c.getJson(`programs/${a.programID}/tb_regimen_group`,{patient:i,regimen_group:"second-line-concepts"})).forEach((a=>{t.includes(a.concept_id)||/none|other non-coded/i.test(a.name)||(t.push(a.concept_id),e.push({label:a.name,value:a.concept_id}))}))}catch(t){return!1}return!0},onValueUpdate:(e,t)=>e.map((e=>{if(t.isChecked){if(/no resistance/i.test(`${t.label}`)&&e.label!=t.label)return e.isChecked=!1,e;/no resistance/i.test(`${t.label}`)||/no resistance/i.test(`${e.label}`)&&(e.isChecked=!1)}return e})),computedValue:e=>{const t=[];return 1===e.length?t.push({concept_id:f("Resistance classification"),value_coded:f("Mono drug resistant"),obs_datetime:a.date}):e.length>1&&t.push({concept_id:f("Resistance classification"),value_coded:f("Multi drug resistant"),obs_datetime:a.date}),[...t,...e.filter((e=>!/no resistance/i.test(`${e.value}`))).map((e=>({concept_id:f("TB_DRUG_RESISTANT"),value_coded:e.value,obs_datetime:a.date})))]},options:()=>[...e,{value:"No Resistance",label:"No Resistance"}],condition:e=>"SECOND_LINE"===e.treatmentType.value}})(),{id:"sampleResultDate",helpText:"Sample Result Date:",type:l.TT_FULL_DATE,validation:e=>d.validateSeries([()=>d.required(e),()=>d.dateRangeOf(e,`${S.query.date}`,a.date)]),computedValue:e=>({concept_id:f("RESULT_DATE"),value_datetime:e.value,obs_datetime:a.date})}]}));async function A(e,t){await a.createEncounter(),await a.saveObservationList(await y(t));const i={sampleIsInvalid:"MTB_INVALID"===e.sampleResult?.value,tbPositive:"POSITIVE"===e.sampleResult?.value,onTreatment:T.isOnTreatment(N.outcome),tptEligible:!T.isOnTreatment(N.outcome)&&D.value.getAge()>=0&&D.value.getAge()<g,inhResistance:(e.sampleResistance||[]).some((e=>"Isoniazid Resistant"===e.label)),rrResistance:(e.sampleResistance||[]).some((e=>"Rifampicin Resistant"===e.label))},n={"suggest to order another LPA test if sample is invalid":{title:"Results are invalid",message:"Do you want to order another LPA test?",yes:()=>b.push(`/tb/lab/${a.patientID}?test=LPA`),no:()=>b.push(`/tb/examination/${a.patientID}`),mandatoryCondition:{sampleIsInvalid:e=>e}},"try a different examination when negative result":{title:"Negative patient",message:"Do you want to try a different examination?",yes:()=>b.push(`/tb/lab/${a.patientID}`),no:()=>b.push(C.value),mandatoryCondition:{tbPositive:e=>!e,onTreatment:e=>!e,tptEligble:e=>!e}},"go to other encounters if no drug resistance was found":{action:()=>L(),mandatoryCondition:{inhResistance:e=>!e,rrResistance:e=>!e}},"enroll in MDR program if drug resistance is found":{title:"Start drug resistance program",message:"Drug resistance has been detected, do you want to enroll patient is Drug Resistance program?",yes:async()=>{await T.enrollMDR(a.patientID),L()},no:()=>L(),eitherConditionMatch:{inhResistance:e=>e,rrResistance:e=>e}}};for(const a of Object.keys(n)){const e=n[a];let t=!0,s=!0;if(e.mandatoryCondition&&(s=Object.keys(e.mandatoryCondition).every((t=>e.mandatoryCondition[t](i[t])))),e.eitherConditionMatch&&(t=Object.keys(e.eitherConditionMatch||{}).some((t=>e.eitherConditionMatch[t](i[t])))),t&&s){if("function"==typeof e.yes&&"function"==typeof e.no)return"Yes"===await v(e.title,"",e.message,[{name:"Yes",slot:"start",color:"success"},{name:"No",slot:"start",color:"primary"}])?e.yes():e.no();if("function"==typeof e.action)return e.action()}}L()}return(e,a)=>(r(),u(_(R),null,{default:p((()=>[m(E,{cancelDestinationPath:_(C),onFinishAction:A,fields:t.value,skipSummary:!0},null,8,["cancelDestinationPath","fields"])])),_:1}))}}))}}}));