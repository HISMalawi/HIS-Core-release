System.register(["./index-legacy-BsbMrqEO.js","./HisStandardForm-legacy-BbU4Bs9R.js","./useEncounter-legacy-D64YFiIH.js","./VoidReason-legacy-Cv1WDbvf.js","./isEmpty-legacy-B5ngE3CS.js","./encounter_guidelines-legacy-o_0qujSe.js","./GuidelineEngine-legacy-KsvQuFdF.js"],(function(e,i){"use strict";var t,n,a,s,r,d,o,l,c,u,f,p,y,g,_,m,h;return{setters:[e=>{t=e.d,n=e.r,a=e.bh,s=e.ab,r=e.cW,d=e.af,o=e.dV,l=e.au,c=e.u,u=e.v,f=e.w,p=e.x,y=e.y,g=e.a5},e=>{_=e.H},e=>{m=e.u},e=>{h=e.p},null,null,null],execute:function(){e("default",t({__name:"Identifiers",setup(e){const i=n([]),t=a.getActiveApp(),{patientDashboardUrl:T,goToNextTask:A}=m(((e,n,a)=>{i.value=[(()=>{let e={};const i=[];return{id:"ids",helpText:"Patient Identifiers",type:s.TT_TABLE_VIEWER,onload:i=>e=i,init:async()=>{for(const e in t.programPatientIdentifiers){const s=t.programPatientIdentifiers[e];a.patient.patient_identifiers.forEach((t=>{t.type.patient_identifier_type_id===s.id&&i.push({type:e,idName:t.identifier,created:r(t.date_created),id:t.patient_identifier_id,reassign:async()=>{"function"==typeof s.reassignAction&&await d(`Are you sure you want to modify ${e} ${t.identifier}`)&&s.reassignAction(n,t.patient_identifier_id,t.identifier,e)}})}))}return!0},options:()=>[{label:"",value:"",other:{columns:["Identifier","Type","Date Created","Void","Reassign"],rows:i.map((i=>[i.type,i.idName,i.created,{name:"Void",type:"button",color:"danger",action:()=>h((async t=>{await o.voidIdentifier(i.id,t),l.invalidate("ACTIVE_PATIENT"),e.rows=e.rows.filter((e=>e[e.length-1].id!=i.id))}))},{id:i.id,name:"Reassign",type:"button",action:()=>i.reassign()}]))}}]}})()]}));function E(){A()}return(e,t)=>(c(),u(y(g),null,{default:f((()=>[p(_,{cancelDestinationPath:y(T),onFinishAction:E,fields:i.value,skipSummary:!0},null,8,["cancelDestinationPath","fields"])])),_:1}))}}))}}}));