System.register(["./index-legacy-BsbMrqEO.js"],(function(t,e){"use strict";var s,n;return{setters:[t=>{s=t.bI,n=t.bq}],execute:function(){class e extends s{constructor(t,e){super(t,122,e)}static async getComplaintsList(t,e=""){return n.getConceptSet(t,e)}async fetchLatestTriageEncounter(){return await e.getObs({concept_id:n.getConceptID("History of COVID-19 contact"),start_date:this.date,end_date:this.date,person_id:this.patientID})}}t("P",e)}}}));