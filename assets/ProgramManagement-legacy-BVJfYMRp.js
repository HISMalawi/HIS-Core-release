System.register(["./index-legacy-DDADMnop.js","./HisStandardForm-legacy-BmDNxnlt.js","./VoidReason-legacy-Dwy54m55.js"],(function(t,e){"use strict";var a,r,o,i,n,s,l,m,d,g,p,c,h,u,P,_,f,S,y,F;return{setters:[t=>{a=t.d,r=t.bu,o=t.au,i=t.ai,n=t.bh,s=t.aL,l=t.M,m=t.J,d=t.aj,g=t.ab,p=t.ac,c=t.bR,h=t.aN,u=t.bS,P=t.a8,_=t.v,f=t.ad,S=t.u},t=>{y=t.H},t=>{F=t.p}],execute:function(){const e=a({components:{HisStandardForm:y},data:()=>({hisFormKey:0,patient:{},patientProgram:{},fields:[],fieldComponent:"",activeField:"",activeProgram:{},programSelectionFieldContext:{}}),watch:{fieldComponent(t){t&&(this.activeField=t)},activeField(t){"program_selection"===t&&(this.hisFormKey+=1)},$route:{async handler({params:t}){t&&t.patient_id&&(this.patient=t.patient_id,this.patientProgram=new r(this.patient),this.fields=[this.getProgramSelectionField(),this.getProgramEnrollmentField(),...this.getProgramOutcomeDateFields(),this.getProgramStateField(),this.getTransferOutFacilityFields(),...this.getTransferoutReasonFields(),this.getStateOutcomeDateFields()])},deep:!0,immediate:!0}},methods:{async onFinish(t){switch(this.activeField){case"program_enrollment":await this.onEnrollProgram();break;case"program_state":await this.onProgramState(t)}o.invalidate("PATIENT_PROGRAM")},async patientPrograms(){return(await this.patientProgram.getPrograms()).map((t=>({label:t.program.name,value:t.program.program_id,other:{...t,programStates:t.patient_states.map((t=>({name:t.name,startDate:i.toStandardHisDisplayFormat(t.start_date),endDate:t.end_date?i.toStandardHisDisplayFormat(t.end_date):"N/A",actions:this.getStateActions(t)})))}})))},async allPrograms(){const t=this.programSelectionFieldContext.listData;return(await n.getAllPrograms()).map((e=>({label:e.name,value:e.program_id,disabled:s.find(t,{value:e.program_id}),other:{...e}})))},async programWorkflows(){const t=await n.getProgramWorkflows(this.patientProgram.getProgramId());if(!s.isEmpty(t))return t[0].states.map((t=>({label:t.name,value:t.program_workflow_state_id,other:{...t}})))},getStateActions(t){const e=[{name:"Void",color:"danger",action:async(e,a)=>{await this.onVoidState(t.patient_state_id,e,a)}}];return"Patient transferred out"===t.name&&e.push({name:"Print",color:"primary",action:async()=>await this.patientProgram.printTransferout(t.start_date)}),e},onUpdateState(){if(-1===this.patientProgram.getProgramId())return l("Please select a program");this.fieldComponent="program_state"},async onProgramState(t){try{await this.patientProgram.updateState(),this.fieldComponent="program_selection",t.transfer_out_state&&await this.patientProgram.transferOutEncounter(t.transfer_out_state.other,t.reason_for_transferrout.value),m("State has been updated")}catch(e){d(`${e}`)}},async onEnrollProgram(){if(-1===this.patientProgram.getProgramId())return l("Please select a program");try{this.activeProgram=await this.patientProgram.enrollProgram(),this.fieldComponent="program_state",m("Patient has been enrolled!")}catch(t){this.activeProgram={},d(`${t}`)}},async onVoidState(t,e,a){await F((async r=>{try{this.patientProgram.setStateId(t),await this.patientProgram.voidState(r),this.patientProgram.setStateId(-1),e.other.programStates.splice(a,1),m("State has been voided")}catch(o){d(`${o}`)}}))},async onVoidProgram(){if(-1===this.patientProgram.getPatientProgramId())return l("Please select a program");await F((async t=>{try{await this.patientProgram.voidProgram(t);const e=this.programSelectionFieldContext,a=s.findIndex(e.listData,{value:this.patientProgram.getProgramId()});e.listData.splice(a,1),e.activeProgram={},this.patientProgram.setPatientProgramId(-1),this.patientProgram.setProgramId(-1),m("Program removed")}catch(e){console.error(e),d(`${e}`)}}))},getStateOutcomeDateFields(){return{id:"state_outcome_date",helpText:"Select Outcome date",type:g.TT_DATE_PICKER,defaultValue:()=>n.getSessionDate(),validation:t=>p.required(t),condition:t=>t.program_state,computedValue:t=>this.patientProgram.setStateDate(t),config:{minDate:()=>this.patientProgram.getProgramDate(),maxDate:()=>n.getSessionDate(),infoItems:t=>[{label:"Selected Outcome Date",value:i.toStandardHisDisplayFormat(t)}]}}},getTransferOutFacilityFields:()=>({id:"transfer_out_state",helpText:"Please Select facility name",type:g.TT_SELECT,validation:t=>p.required(t),condition:t=>"Patient transferred out"===t.program_state.label,options:(t,e="")=>c(e),config:{showKeyboard:!0,isFilterDataViaApi:!0}}),getTransferoutReasonFields:()=>[{id:"transferout_reasons",proxyID:"reason_for_transferrout",helpText:"Reason for Transferring out",type:g.TT_SELECT,validation:t=>p.required(t),condition:t=>"Patient transferred out"===t.program_state.label,options:()=>{const t=t=>({label:t,value:t});return[t("Workplace transfer/lost job-related reasons"),t("Relocation to another place/home village"),t("Transport due to long distance"),t("School"),t("Business"),t("Marriage"),t("Unknown"),t("Clinic not helping"),t("Other")]}},{id:"transferout_other",proxyID:"reason_for_transferrout",helpText:"Other Reason for Transferring out",type:g.TT_TEXT,condition:t=>"Other"===t.transferout_reasons.value,validation:t=>p.required(t)}],getProgramStateField(){return{id:"program_state",helpText:"State",type:g.TT_SELECT,validation:t=>p.required(t),options:()=>this.programWorkflows(),condition:()=>"program_state"===this.activeField,unload:t=>this.patientProgram.setStateId(t.value)}},getProgramEnrollmentField(){return{id:"program_enrollment",helpText:"Please select a programme",type:g.TT_SELECT,condition:()=>"program_enrollment"===this.activeField,unload:t=>this.patientProgram.setProgramId(t.value),options:()=>this.allPrograms(),validation:t=>p.required(t),config:{showKeyboard:!0}}},getProgramOutcomeDateFields(){return h({id:"program_outcome_date",helpText:"Outcome",required:!0,minDate:()=>i.estimateDateFromAge(100),maxDate:()=>n.getSessionDate(),condition:()=>"program_enrollment"===this.activeField,estimation:{allowUnknown:!0,estimationFieldType:u.MONTH_ESTIMATE_FIELD},computeValue:t=>this.patientProgram.setProgramDate(t)})},getProgramSelectionField(){const t=t=>!s.isEmpty(t.program_selection);return{id:"program_selection",helpText:"Programs",type:g.TT_PROGRAM_SELECTION,onload:t=>{this.activeField="program_selection",this.programSelectionFieldContext=t},onValue:t=>(t&&(this.activeProgram=t.other,this.patientProgram.setProgramId(t.value),this.patientProgram.setPatientProgramId(t.other.patient_program_id),this.patientProgram.setProgramDate(i.toStandardHisFormat(t.other.date_enrolled))),!0),validation:t=>p.required(t),options:()=>this.patientPrograms(),config:{onVoidState:this.onVoidState,hiddenFooterBtns:["Back","Next","Clear"],footerBtns:[{name:"Void Program",slot:"end",color:"danger",state:{visible:{default:(e,a)=>t(a),onValue:(e,a)=>t(a)}},onClick:async()=>{await this.onVoidProgram()}},{name:"Update state",slot:"end",state:{visible:{default:(e,a)=>t(a),onValue:(e,a)=>t(a)}},onClick:async()=>{await this.onUpdateState()}},{name:"Enroll",color:"success",slot:"end",onClick:()=>{this.fieldComponent="program_enrollment"}}]}}}}});t("default",P(e,[["render",function(t,e,a,r,o,i){const n=f("his-standard-form");return S(),_(n,{key:t.hisFormKey,activeField:t.fieldComponent,skipSummary:!0,fields:t.fields,onOnIndex:e[0]||(e[0]=e=>t.fieldComponent=""),onOnFinish:t.onFinish},null,8,["activeField","fields","onOnFinish"])}]]))}}}));