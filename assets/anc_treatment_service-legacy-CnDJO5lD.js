System.register(["./index-legacy-CNrLGT3P.js","./drug_order_service-legacy-Cx7S9WWK.js"],(function(e,t){"use strict";var r,a,n,i;return{setters:[e=>{r=e.bk,a=e.ah,n=e.H},e=>{i=e.D}],execute:function(){const t=e("D",{"Once a day (OD)":1,"Twice a day (BD)":2,"Three a day (TDS)":3,"Four times a day (QID)":4,"Five times a day (5X/D)":5,"Six times a day (Q4HRS)":6,"In the morning (QAM)":.5,"Once a week (QWK)":.14,"Once a month":.03,"Twice a month":.071});e("A",class extends r{constructor(e,t){super(e,25,t)}vaccinationDrugObj(){return{drug_inventory_id:609,dose:.5,equivalent_daily_dose:.5,frequency:"Once a day (od)",start_date:this.date,auto_expire_date:this.date,instructions:"Once a day",units:"ml"}}async updateVaccinationOrder(){const e=await this.dispenseVaccinationDrug();if(!a.isEmpty(e)){const t=e[0].order_id;return i.updateDispensationOrders([{order_id:t,quantity:1}])}throw"Unable to dispense"}dispenseVaccinationDrug(){return this.createOrders([this.vaccinationDrugObj()])}createOrders(e){return i.create({drug_orders:e,encounter_id:this.getEncounterID()})}async submitTreatment(e){await this.createEncounter();const a=await this.createOrders(e.map((e=>this.buildDrugOrderObj(e)))),n=new r(this.patientID,54,this.providerID);await n.createEncounter(),e.forEach((e=>{const r=t[e.frequency]*e.duration;a.forEach((t=>{t.drug_inventory_id===e.id&&(t.quantity=r)}))})),await i.updateDispensationOrders(a)}buildDrugOrderObj(e){const r=new Date(this.date),a=r.setDate(r.getDate()+parseInt(`${e.duration}`)),i=e.dose||t[e.frequency],s=parseFloat(i)*t[e.frequency];return{drug_inventory_id:e.id,dose:i,equivalent_daily_dose:s,frequency:e.frequency,start_date:this.date,auto_expire_date:n.toStandardHisFormat(new Date(a)),instructions:e.drug_name+":"+e.dose+" "+e.units+" "+e.frequency+"days",units:e.units}}})}}}));