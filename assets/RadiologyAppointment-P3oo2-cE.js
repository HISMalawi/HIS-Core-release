import{d as a,aW as o,F as s,V as p,_ as r,r as m,o as d,c as h}from"./index-BFVcutZq.js";import{H as c}from"./HisStandardForm-DO3sZVdL.js";import{_ as l}from"./EncounterMixin.vue_vue_type_script_lang-BjcFUOZj.js";import{A as i}from"./appointment_service-CTd_W2sH.js";import"./encounter_guidelines-fEzG7yyD.js";import"./GuidelineEngine-D6V1_Znr.js";const u=a({mixins:[l],components:{HisStandardForm:c},data:()=>({appointmentDate:"",maxAppointmentDate:"",appointment:{}}),watch:{ready:{async handler(t){t&&(this.appointment=new i(this.patientID,this.providerID),this.init())},immediate:!0}},methods:{async onFinish(t,e){await this.appointment.createEncounter(),await this.appointment.saveObservationList(await this.resolveObs(e,"obs")),this.gotoPatientDashboard()},init(){this.appointmentDate=i.getSessionDate(),this.maxAppointmentDate=o(this.appointmentDate).add(100,"year").format("YYYY-MM-DD"),this.fields=this.getFields()},getFields(){return[{id:"set_appointment",helpText:"Appointments booking",type:s.TT_APPOINTMENTS_ENTRY,validation:t=>p.required(t),computedValue:t=>({tag:"obs",obs:[this.appointment.buildValueDate("Appointment date",t.value)]}),config:{patientAge:this.patient.getAge(),hideRunoutDate:!0,hiddenFooterBtns:["Clear"]},options:()=>[{label:"",value:"",other:{runOutDate:this.maxAppointmentDate,appointmentDate:this.appointmentDate}}]}]}}});function f(t,e,D,_,A,g){const n=m("his-standard-form");return d(),h(n,{fields:t.fields,onFinishAction:t.onFinish,skipSummary:!0,cancelDestinationPath:t.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])}const x=r(u,[["render",f]]);export{x as default};