System.register(["./index-legacy-DLdqxVnr.js","./HisStandardForm-legacy-D9LtBbE8.js","./useEncounter-legacy-BWIHzFlJ.js","./isEmpty-legacy-0aF-DGmx.js","./encounter_guidelines-legacy-Cn5GVi4r.js","./GuidelineEngine-legacy-KsvQuFdF.js"],(function(e,t){"use strict";var i,a,n,o,s,r,l,u,c,d,p,m,v,g,_,h,b,y,f,w;return{setters:[e=>{i=e.d,a=e.r,n=e.bH,o=e.a9,s=e.aQ,r=e.d_,l=e.cZ,u=e.aJ,c=e.ad,d=e.aa,p=e.u,m=e.v,v=e.w,g=e.x,_=e.y,h=e.O,b=e.aM,y=e.a5},e=>{f=e.H},e=>{w=e.u},null,null,null],execute:function(){var t=(e=>(e.CONFIRM="confirm",e.SELECTION="select",e.INFO="info",e.WARN="warn",e))(t||{});e("default",i({__name:"DrRegimen",setup(e){const i=a([]),N=new n(-1,-1),D=a({}),x=a(""),T=a({});async function I(e){await n.getJson("mdr/regimen/create",{patient_id:N.patientID,program_id:N.programID,regimen:e,date:N.date}),location.reload()}async function C(){T.value=await n.getJson("mdr/regimen/types",{patient_id:N.patientID,program_id:N.programID,date:N.date})}const{goToNextTask:O,patientDashboardUrl:E}=w(((e,a)=>{N.patientID=a,N.providerID=e,i.value=[{id:"regimenData",helpText:"DR regimen:",type:o.TT_SUMMARY,init:async()=>{D.value=await n.getJson("mdr/regimen/status",{patient_id:N.patientID,program_id:N.programID,date:N.date});const e=D.value,i={"Eligible for mdr?":{action:()=>s.push(`/patient/dashboard/${a}`),title:"Exiting",subtitle:"Patient is not eligible for DR treatment!",type:t.INFO,break:!0,conditions:{mdr_status:e=>!e}},"On MDR but current regimen has issues and no alternative is available?":{action:()=>x.value="regimentTypes",title:"Alert",subtitle:`Issues with active regimen: ${e.issues}`,type:t.INFO,break:!0,conditions:{regimen_title:e=>!/individual/i.test(e),fail_state_phase:e=>!e,issues:e=>e.length>0}},"On MDR and current regimen has issues and an alternative is available?":{title:`${e.regimen_title} Alert!`,subtitle:`${e.issues}. Try ${r(e.fail_state_phase)}?`,type:t.CONFIRM,action:async t=>t&&await I(e.fail_state_phase),break:!0,conditions:{regimen_title:e=>!/individual/i.test(e),fail_state_phase:e=>!!e,issues:e=>e.length}},"Custom regimen has issues, formulate another one?":{action:()=>x.value="custom_regimen_duration",type:t.CONFIRM,title:`${e.issues}. Do you want to create another custom regimen?`,break:!0,conditions:{regimen_title:e=>/individual/i.test(e),issues:e=>e.length}},"Conversion has been successful in this phase, proceed to next phase?":{action:async t=>t&&await I(e.next_phase),title:`${e.regimen_title} Complete`,subtitle:`Do you want to proceed to ${r(e.next_phase)}?`,type:t.CONFIRM,break:!0,conditions:{end_of_phase:e=>e,conversion_status:e=>e,next_phase:e=>e}},"Treatment complete, update outcome?":{action:()=>s.push(`/patient/programs/${N.programID}`),title:"Treatment complete!",subtitle:"Do you want to update the patient's outcome?",type:t.CONFIRM,break:!0,conditions:{end_of_phase:e=>e,conversion_status:e=>e,next_phase:e=>!e}},"Conversion was not successful on this regimen, either proceed to the next phase or try an alternative":{action:I,title:"Phase complete! previous consecutive results were Positive and Negative respectively. Choose which regimen to proceed with",subtitle:`Do you want to proceed to ${r(e.next_phase)} or go for ${r(e.fail_state_phase)}?`,type:t.SELECTION,options:{Continue:e.next_phase,"Next phase":e.fail_state_phase},break:!0,conditions:{next_phase:e=>!!e,fail_state_phase:e=>!!e,issues:e=>e.length<=0,end_of_phase:e=>e,conversion_status:e=>!e}},"Conversion was not successful, either update outcome or switch regimens":{action:e=>"function"==typeof e?e():e,title:"Treatment complete! Previous consecutive results were Positive and Negative respectively",subtitle:"Do you want to update treatment outcome or switch regimen?",type:t.SELECTION,options:{Outcome:()=>s.push(`/patient/programs/${N.programID}`),"New regimen":()=>x.value="regimentTypes"},break:!0,conditions:{issues:e=>e.length<=0,end_of_phase:e=>e,conversion_status:e=>!e}},"Update individualised drugs if non are found":{action:()=>x.value="custom_regimen_duration",break:!0,conditions:{regimen_title:e=>/individual/i.test(e),regimen_drugs:e=>e.length<=0}},"Warn if overdue for examination":{title:"Patient is overdue for a Lab test",subtitle:"Do you want to order a test now?",type:t.CONFIRM,conditions:{overdue_examination:e=>e},action:e=>e&&s.push(`/tb/lab/${a}`)}};return await async function(e){for(const i in e){const a=e[i],n=Object.keys(a.conditions).every((e=>e in D.value&&a.conditions[e](D.value[e])));if(n){switch(a.type||""){case t.CONFIRM:a.action&&await a.action(await c(a.subtitle||a.title||"No message",{header:a.title||"Alert"}));break;case t.INFO:await b("Information",a.title||"",a.subtitle||a.title||"No information",[{name:"Ok",slot:"start",color:"primary"}]),a.action&&await a.action();break;case t.SELECTION:if(a.options){const e=await b("Action needed!",a.title||"",a.subtitle||a.title||"No information",Object.keys(a.options||{}).map((e=>({name:e,slot:"start",color:"primary"}))));a.action&&await a.action(a.options[e])}break;case t.WARN:(a.title||a.subtitle)&&(h(a.title||a.subtitle||""),a.action&&await a.action());break;default:a.action&&await a.action()}if(n===a.break)break}}}(i),!0},condition:()=>Object.keys(D.value).length>1,dynamicHelpText:()=>`${D.value.regimen_title}`,config:{hiddenFooterBtns:["Clear"],overrideDefaultFooterBtns:{nextBtn:{name:"Finish",onClick:()=>O()}},footerBtns:[{name:"Switch",size:"large",slot:"end",color:"primary",visible:!0,onClick:async()=>{await C(),x.value="regimentTypes"}}]},options:()=>{const e=(e,t="#007bff")=>`<span style='padding:3px;color: white; background:${t}'> ${e} </span>`;return[{label:"Composition",value:D.value?.regimen_composition?e(D.value?.regimen_composition):e("N/A")},{label:"Required duration",value:`${D.value?.duration_in_months} Month(s)`},{label:"Current duration",value:`${D.value?.months_on_regimen} Month(s)`},{label:"Date enrolled",value:`${l(D.value?.enrolled_on)}`},{label:"Next phase",value:D.value?.next_phase?e(r(D.value?.next_phase)):e("N/A")},{label:"Sputum conversion",value:D.value?.conversion_status?e("DONE","#5cb85c"):e("NOT DONE","#d9534f")},{label:"Conversion status date",value:D.value?.conversion_date?l(D.value?.conversion_date):e("N/A","#d9534f")},{label:"Examination Overdue",value:D.value?.overdue_examination?e("Yes","#d9534f"):e("No","#5cb85c")},{label:"Issues",value:!D.value?.issues||u.isEmpty(D.value?.issues)?e("NONE","#5cb85c"):(e=>{const t=[];return e.forEach((e=>t.push(`<li>${""!=e?e:"NONE"}</li>`))),`<ul>${t.join("")}</ul>`})(D.value?.issues)},{label:"Classification",value:D.value?.resistance_classification},{label:"Failure risk",value:D.value?.not_risk?e("Yes","#d9534f"):e("No","#5cb85c")},{label:"Pregnant",value:D.value?.pregnant?e("Yes","#d9534f"):e("No","#5cb85c")},{label:"Extrapulmonarly TB",value:D.value?.eptb?e("Yes","#d9534f"):e("No","#5cb85c")},{label:"End of phase",value:D.value?.end_of_phase?e("Yes","#5cb85c"):e("No","#d9534f")}]}},{id:"regimentTypes",helpText:"Select regimen type:",type:o.TT_SELECT,init:async()=>(u.isEmpty(T.value)&&await C(),!0),beforeNext:async e=>{if(/individual/i.test(D.value.regimen_title)&&"individualised_regimen"===e.value){if(!(await c(`Do you want to replace custom regimen composition of ${D.value.regimen_composition}?`)))return!1}else if(D.value.next_phase!==e.value||D.value.end_of_phase){if(!(await c(`Are you sure you want to prescribe ${e.label} (${e.other.regimen_composition||"N/A"})`)))return!1}else if(!(await c(`${D.value.regimen_title} is not complete, do you want to proceed to ${e.label}`)))return!1;return!0},computedValue:e=>e.value,options:()=>Object.keys(T.value).map((e=>{const t=T.value[e],i={label:t.title,value:e,other:{...t,sort:0},description:{color:"light",text:`${t.regimen_composition||"Unknown regimen composition"}`}};return t.title===D.value.regimen_title?{...i,other:{...t,sort:-1},disabled:!/individual/i.test(t.title),description:{text:"<b style='color:green;'>Currently on this regimen</b>"}}:t.primary?{...i,other:{...t,sort:1},description:{text:`${t.regimen_composition} <br/> <i style='font-weight:bold;color: green;'>Patient meets criteria for this regimen</i>`}}:t.issues.length?{...i,disabled:!0,other:{...t,sort:-1},description:{text:`<i style='font-weight: bold;'>${t.issues.join(", ")}</i>`}}:i})).sort(((e,t)=>t.other.sort>e.other.sort?1:-1)),validation:e=>d.required(e)},{id:"custom_regimen_duration",helpText:"Custom Duration in months",type:o.TT_SELECT,proxyID:"regimen_period",computedValue:e=>e.value,validation:e=>d.required(e),condition:e=>"individualised_regimen"===e.regimentTypes.value,options:()=>[{label:"2 Months",value:2},{label:"4 Months",value:4},{label:"6 Months",value:6},{label:"8 Months",value:8},{label:"12 Months",value:12},{label:"20 Months",value:20},{label:"Custom Duration",value:"other"}]},{id:"other_duration",helpText:"Custom Duration in months",type:o.TT_NUMBER,proxyID:"regimen_period",computedValue:e=>e.value,validation:e=>d.required(e),condition:e=>"other"===e.custom_regimen_duration.value},function(){const e=[];return{id:"custom_regimen_formulation",helpText:"Custom DR Regimen",type:o.TT_DR_REGIMEN_INPUT,init:async()=>{const t=await n.getJson("mdr/regimen/custom/options",{program_id:n.getProgramID(),date:n.getSessionDate(),patient_id:a});return t&&Object.keys(t).forEach((i=>e.push({label:t[i].title,value:t[i].description,other:t[i]}))),!0},options:()=>e,computedValue:e=>({drugs:e.map((e=>e.value)),code:e[0].other}),condition:e=>e.regimen_period.value,validation:e=>d.validateSeries([()=>d.required(e),()=>e[0].other.split("-").length<4?["Create a regimen of atleast 4 or more drugs"]:null])}}()]}));async function k(e,t){return e?.custom_regimen_formulation?.length?(await n.postJson("mdr/regimen/create",{patient_id:N.patientID,program_id:N.programID,date:N.date,duration:t.regimen_period,drugs:t.custom_regimen_formulation.drugs,code:t.custom_regimen_formulation.code}),location.reload()):e.regimentTypes?.value?I(e.regimentTypes?.value):void O()}return(e,t)=>(p(),m(_(y),null,{default:v((()=>[g(f,{cancelDestinationPath:_(E),onOnIndex:t[0]||(t[0]=e=>x.value=""),activeField:x.value,onFinishAction:k,fields:i.value,skipSummary:!0},null,8,["cancelDestinationPath","activeField","fields"])])),_:1}))}}))}}}));