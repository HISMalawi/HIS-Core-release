System.register(["./index-legacy-DLdqxVnr.js","./HisStandardForm-legacy-D9LtBbE8.js","./useEncounter-legacy-BWIHzFlJ.js","./commons-legacy-Bc6uhvf5.js","./appointment_service-legacy-zPeRUqr6.js","./isEmpty-legacy-0aF-DGmx.js","./encounter_guidelines-legacy-Cn5GVi4r.js","./GuidelineEngine-legacy-KsvQuFdF.js"],(function(e,t){"use strict";var a,n,i,o,l,s,r,d,u,p,c,m,_,g,T,y,D,I,v,A,b,E,f,w,N;return{setters:[e=>{a=e.d,n=e.r,i=e.bH,o=e.bM,l=e.a9,s=e.a7,r=e.dU,d=e.aa,u=e.dQ,p=e.cZ,c=e.u,m=e.v,_=e.w,g=e.x,T=e.y,y=e.bL,D=e.bs,I=e.dR,v=e.O,A=e.dY,b=e.a5},e=>{E=e.H},e=>{f=e.u},e=>{w=e.r},e=>{N=e.A},null,null,null],execute:function(){e("default",a({__name:"Appointment",setup(e){const t=n([]),a=new i(-1,o.APPOINTMENT);let h=0;const{goToNextTask:P,patientDashboardUrl:j}=f(((e,n)=>{a.patientID=n,a.providerID=e,h=n,t.value=[(()=>{let e={},t=-1;const i={};return{id:"appointment",helpText:"Appointment booking",type:l.TT_DATE_PICKER,init:async()=>(t=await s.get(r.CLINIC_APPOINTMENT_LIMIT),e=await N.getJson(`programs/${a.programID}/patients/${n}/next_appointment_date`,{date:a.date}),!0),defaultValue:()=>e?.appointment_date,validation:e=>d.required(e),computedValue:t=>[{concept_id:u("APPOINTMENT_DATE"),value_datetime:t,obs_datetime:a.date},{concept_id:u("ESTIMATED_DATE"),value_datetime:e?.appointment_date,obs_datetime:a.date}],config:{minDate:()=>a.date,maxDate:()=>e?.drugs_run_out_date,supValue:e=>`${(i[e]||[]).length}`,infoItems:async n=>(i[n]||(i[n]=await N.getJson(`programs/${a.programID}/booked_appointments`,{date:n,paginate:!1})),[{label:"Medication Run out Date",value:p(e?.drugs_run_out_date||"Not available")},{label:"User set appointment date",value:p(n)},{label:"Appointments",value:(i[n]||[]).length},{label:"Appointment limit (per/day)",value:t||"N/A"}]),hiddenFooterBtns:["Clear"]}}})()]}));async function x(e,t){if(await a.createEncounter(),await a.saveObservationList(await w(t)),await y.shouldTransferToExternalFacility(a.patientID)){const e=new D(a.patientID);e.setStateDate(a.date),e.setStateId(I.TRANSFER_OUT);try{await e.updateState()}catch(n){v("Failed to transfer out patient, please do it manually for now."),console.error(n)}}await A(a.patientID),P()}return(e,a)=>(c(),m(T(b),null,{default:_((()=>[g(E,{cancelDestinationPath:T(j),onFinishAction:x,fields:t.value,skipSummary:!0},null,8,["cancelDestinationPath","fields"])])),_:1}))}}))}}}));