import{bI as n,bq as s}from"./index-DrPQ21-i.js";class a extends n{constructor(t,e){super(t,122,e)}static async getComplaintsList(t,e=""){return s.getConceptSet(t,e)}async fetchLatestTriageEncounter(){return await a.getObs({concept_id:s.getConceptID("History of COVID-19 contact"),start_date:this.date,end_date:this.date,person_id:this.patientID})}}export{a as P};