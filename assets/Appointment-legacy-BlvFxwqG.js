System.register(["./index-legacy-DDADMnop.js","./HisStandardForm-legacy-BmDNxnlt.js","./EncounterMixin.vue_vue_type_script_lang-legacy-B5DlZOon.js","./appointment_service-legacy-9FGJeBF3.js","./encounter_guidelines-legacy-BkRGG_sA.js","./GuidelineEngine-legacy-KsvQuFdF.js"],(function(t,e){"use strict";var a,i,n,o,s,l,p,d,r,c,u,m,y,h,g,w,A,v;return{setters:[t=>{a=t.d,i=t.bi,n=t.l,o=t.ab,s=t.bz,l=t.af,p=t.d9,d=t.aL,r=t.bw,c=t.ac,u=t.ai,m=t.a8,y=t.v,h=t.ad,g=t.u},t=>{w=t.H},t=>{A=t._},t=>{v=t.A},null,null],execute:function(){const e=a({mixins:[A],components:{HisStandardForm:w},data:()=>({appointment:{}}),watch:{ready:{handler(t){console.log("The Current App calling this encounter  ",i.getActiveApp()?.applicationName),t&&(this.appointment=new v(this.patientID,this.providerID),this.fields=[this.getAppointmentField()])},immediate:!0}},methods:{async onFinish(t,e){await this.appointment.createEncounter(),await this.appointment.saveObservationList(await this.resolveObs(e)),["CxCa","ANC"].includes(`${i.getActiveApp()?.applicationName}`)||await n(this.patientID),this.nextTask()},getAppointmentField(){const t=t=>u.toStandardHisDisplayFormat(t),e=(t,e)=>new RegExp(t,"i").test(`${e}`);let a="",n="",m=-1,y=this.appointment.date,h=null;const g={},w=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return{id:"set_appointment",helpText:"Appointments booking",type:o.TT_DATE_PICKER,init:async()=>{try{const t=await this.appointment.getNextAppointment();y=t.appointment_date,h=t.drugs_run_out_date}catch(e){if(console.warn(e),await s(400),!(await l("Next appointment/drug-runout date is not available, do you want to proceed anyway?")))return this.gotoPatientDashboard(),!0}const t=await p.appointmentLimit();return m=t?parseInt(t):0,!0},onValue:async i=>{if(console.log(this.appointment),void 0===g[i]){const t=await v.getDailiyAppointments(i);g[i]=Array.isArray(t)?t.length:0}return!(m>=1&&g[i]>=m&&await l(`${g[i]} clients were booked on ${t(i)}`,{header:`APPOINTMENT LIMIT (${m}) REACHED`,cancelBtnLabel:"Proceed",confirmBtnLabel:"New date"})||(d.isEmpty(n)&&(n=await p.clinicHolidays()),e(i,n)&&!(await l(`${t(i)} is a clinic holiday, do you want to set an appointment?`))||(d.isEmpty(a)&&(a=this.patient.getAge()>=18?await p.adultClinicDays():await p.peadsClinicDays()),!e(w[r(i).day()],a)&&!(await l(`${t(i)} is not a clinic day. Do you want to proceed with this date?`)))))},validation:t=>c.required(t),defaultValue:()=>y,computedValue:t=>[this.appointment.buildValueDate("Appointment date",t),this.appointment.buildValueDate("Estimated date",y)],config:{hiddenFooterBtns:["Clear"],minDate:()=>this.appointment.date,maxDate:()=>h,supValue:t=>`${g[t]}`,infoItems:e=>"CxCa"===i.getActiveApp()?.applicationName?[{label:"User set appointment date",value:t(e)},{label:"Appointments",value:g[e]},{label:"Appointment limit (per/day)",value:m}]:[{label:"Medication Run out Date",value:h?t(h):"Not available"},{label:"User set appointment date",value:t(e)},{label:"Appointments",value:g[e]},{label:"Appointment limit (per/day)",value:m}]}}}}});t("default",m(e,[["render",function(t,e,a,i,n,o){const s=h("his-standard-form");return g(),y(s,{fields:t.fields,onFinishAction:t.onFinish,skipSummary:!0,cancelDestinationPath:t.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])}]]))}}}));