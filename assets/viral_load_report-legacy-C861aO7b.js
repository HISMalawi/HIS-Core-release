System.register(["./index-legacy-DDADMnop.js"],(function(t,e){"use strict";var r,s;return{setters:[t=>{r=t.ce,s=t.d5}],execute:function(){t("V",class extends r{constructor(){super()}getVlCollection(){return this.getReport(`programs/${this.programID}/reports/vl_collection`)}getVLCoverage(t=!1){return this.getReport(`programs/${this.programID}/reports/viral_load_coverage`,{rebuild_outcomes:t})}getMaternalStatus(t){const e={start_date:this.startDate,end_date:this.endDate,date:this.date,program_id:this.programID,report_definition:"pepfar"};this.occupation&&(e.occupation=this.occupation);const o=s.parameterizeObjToString(e);return r.postJson(`vl_maternal_status?${o}`,{patient_ids:t})}})}}}));