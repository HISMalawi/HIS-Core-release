System.register(["./HisStandardForm-legacy-BmDNxnlt.js","./index-legacy-DDADMnop.js","./useEncounter-legacy-DEwMQivU.js","./commons-legacy-Ck4BOAUF.js","./isEmpty-legacy-DyPdMuAa.js","./encounter_guidelines-legacy-BkRGG_sA.js","./GuidelineEngine-legacy-KsvQuFdF.js"],(function(e,t){"use strict";var a,n,s,i,o,l,c,u,r,d,g,y,p,m,b,v,w,T,_,f;return{setters:[e=>{a=e.H},e=>{n=e.bJ,s=e.br,i=e.d,o=e.r,l=e.bt,c=e.ab,u=e.ac,r=e.aL,d=e.u,g=e.v,y=e.w,p=e.x,m=e.y,b=e.a5,v=e.al,w=e.af},e=>{T=e.u},e=>{_=e.a,f=e.r},null,null,null],execute:function(){class t extends n{constructor(e,t){super(e,41,t)}static async getDiagnosis(e="",t=1,a=10){const i=s.getConceptID("Qech outpatient diagnosis list");return n.getJson("diagnosis",{id:i,name:e,page:t,page_size:a})}}class D extends n{constructor(e,t){super(e,105,t)}}e("default",i({__name:"Diagnosis",setup(e){let n,s;const i=o("No"),E=o([]),{goToNextTask:x,patientDashboardUrl:h}=T(((e,a)=>{l.getLatestMalariaTestResult(a).then((e=>i.value=e)),n=new D(a,e),s=new t(a,e),E.value=[j("Primary"),j("Secondary"),{id:"clinical_notes",helpText:"Clinical notes",type:c.TT_TEXT,computedValue:e=>r.isEmpty(e)?null:{tag:"notes",obs:n.buildValueText("Clinical notes construct",e.value)}}]}));async function L(e,t){await s.createEncounter();const a=await f({...t,obs_datetime:v.getSessionDate()},"diagnosis");await s.saveObservationList(a);const i=await f({...t},"notes");r.isEmpty(i)||(await n.createEncounter(),await n.saveObservationList(i)),x()}function j(e){return{id:`${e.toLowerCase()}_diagnosis`,helpText:`${e} Diagnosis`,type:c.TT_INFINITE_SCROLL_MULTIPLE_SELECT,validation:t=>"Primary"===e?u.required(t):null,options:async(e,a="",n=1,s=10)=>{const i=await t.getDiagnosis(a,n,s);return _(i,"name","concept_id")},beforeNext:async e=>await async function(e){return!e.some((({label:e})=>/Malaria/i.test(e)))||"Positive"===i.value||await w(`Patient has ${i.value} malaria test result. Do you want to continue?`)}(e),computedValue:t=>({tag:"diagnosis",obs:t.map((({value:t})=>s.buildValueCoded(`${e} Diagnosis`,t)))}),config:{isFilterDataViaApi:!0,showKeyboard:!0}}}return(e,t)=>(d(),g(m(b),null,{default:y((()=>[p(a,{cancelDestinationPath:m(h),fields:E.value,onFinishAction:L},null,8,["cancelDestinationPath","fields"])])),_:1}))}}))}}}));