var u=Object.defineProperty;var _=(s,r,t)=>r in s?u(s,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[r]=t;var o=(s,r,t)=>_(s,typeof r!="symbol"?r+"":r,t);import{cc as n,d3 as l}from"./index-ATRrruTT.js";class f extends n{constructor(){super();o(this,"org");o(this,"initializeArvRefillReportTables");this.org="pepfar",this.initializeArvRefillReportTables=!0}initArvRefillPeriod(t){this.initializeArvRefillReportTables=t}setOrg(t){this.org=t}getClinicTxRtt(){return this.getReport("programs/".concat(this.programID,"/reports/clinic_tx_rtt"))}getTxMMDClientLevelData(t){const e=l.parameterizeObjToString({start_date:this.startDate,end_date:this.endDate,program_id:this.programID,date:this.date,org:this.org}),a="tx_mmd_client_level_data?".concat(e);return n.postJson(a,{patient_ids:t})}remapTxClientLevelData(t){return t.map(e=>{let a=null;const p=[];for(const g in e)Object.values(e[g]).forEach(d=>{for(const c in d){const i=d[c];a||(a={id:i.arv_number,dob:i.birthdate,dispenseDate:i.start_date,artStartDate:i.art_start_date}),p.push({name:i.drug_name,quantity:i.quantity,dose:i.dose_per_day})}});return{...a,drugs:p}})}getTxCurrMMDReport(t=!1,e="pepfar"){return this.getReport("programs/".concat(this.programID,"/reports/tx_curr_mmd"),{definition:e,rebuild:t})}getTxMlReport(t=!1){return this.getReport("tx_ml",{rebuild:t})}getTxNewReport(t){return this.getReport("programs/".concat(this.programID,"/reports/tx_new"),{rebuild:"".concat(t)})}getTxRttReport(t=!1){return this.getReport("tx_rtt",{rebuild:t})}getMaternalStatus(t){const e={start_date:this.startDate,end_date:this.endDate,date:this.date,program_id:this.programID,report_definition:"pepfar"};this.occupation&&(e.occupation=this.occupation);const a=l.parameterizeObjToString(e);return n.postJson("vl_maternal_status?".concat(a),{patient_ids:t})}}export{f as T};