System.register(["./index-legacy-BsbMrqEO.js","./drug_order_service-legacy-D2en5Kls.js","./EncounterMixin.vue_vue_type_script_lang-legacy-CZm53a_o.js","./encounter_guidelines-legacy-o_0qujSe.js","./GuidelineEngine-legacy-KsvQuFdF.js","./HisStandardForm-legacy-BbU4Bs9R.js"],(function(t,e){"use strict";var s,i,r,n,a,o,d,u,l,p,c,g;return{setters:[t=>{s=t.bI,i=t.d,r=t.ai,n=t.af,a=t.ab,o=t.Q,d=t.a8,u=t.ad,l=t.u,p=t.v},t=>{c=t.D},t=>{g=t._},null,null,null],execute:function(){class e extends s{drugHistory;currentDrugOrder;constructor(t,e){super(t,54,e),this.drugHistory=[],this.currentDrugOrder=[]}getDrugHistory(){return this.drugHistory}getCurrentOrder(){return this.currentDrugOrder}buildDispensations(t,e){return[{drug_order_id:t,date:this.date,quantity:e}]}saveDispensations(t){return s.postJson("/dispensations",{dispensations:t,program_id:s.getProgramID()})}async voidOrder(t){return s.void(`/dispensations/${t}`,{})}async loadDrugHistory(){const t=await c.getDrugOrderHistory(this.patientID);t&&(this.drugHistory=t)}async loadCurrentDrugOrder(){const t=await c.getDrugOrders(this.patientID);t&&(this.currentDrugOrder=await Promise.all(t))}calcCompletePack(t,e){const s=t.barcodes.sort((function(t,e){return t.tabs-e.tabs}));if(0==s.length||0==e)return e;for(let n=0;n<=s.length-1;n++)if(parseInt(s[n].tabs)>=e)return s[n].tabs;const i=parseInt(s[0].tabs);let r=parseInt(s[s.length-1].tabs);for(;r<e;)r+=i;return r}}const h=i({mixins:[g],data:()=>({dispensation:{}}),watch:{patient:{async handler(t){this.dispensation=new e(t.getID(),this.providerID),await this.dispensation.loadCurrentDrugOrder(),await this.dispensation.loadDrugHistory(),this.fields=this.getFields()},deep:!0}},methods:{saveDispensations(t){const e=this.buildDispensations(t);return this.dispensation.saveDispensations(e)},buildDispensations(t){return this.dispensation.buildDispensations(t.other.order_id,t.value)},buildMedicationHistory(){return this.dispensation.getDrugHistory().sort(((t,e)=>{const s=new Date(t.order.start_date);return new Date(e.order.start_date)-s})).map((t=>({medication:t.drug.name,date:r.toStandardHisDisplayFormat(t.order.start_date),amount:t.quantity})))},buildOrderOptions(){return this.dispensation.getCurrentOrder().map((t=>({label:t.drug.name,value:t.quantity||0,other:{drug_id:t.drug.drug_id,order_id:t.order.order_id,amount_needed:this.calculateCompletePack(t)}})))},getPackSizesRows(t,e){return this.dispensation.getDrugPackSizes(t).map((t=>[t,e>0?e/t:"-",0,0]))},calculateCompletePack(t){const e=parseFloat(t.amount_needed)-(t.quantity||0),s=this.dispensation.calcCompletePack(t,e);return s<0?0:s},isDoneDispensing:t=>t.map((t=>0!=t.value)).every(Boolean),async isValidDispensation(t){let e=!0;const s=parseInt(t.value.toString())/t.other.amount_needed*100;return s>110&&(e=await n("Are you sure you want to dispense over 110% of the prescribed pill count?")),s<100&&(e=await n("Are you sure you want to dispense less than 100% of the prescribe amount?")),e},getFields(){return[{id:"dispenses",helpText:"Dispensation",type:a.TT_DRUG_DISPENSER,onValueUpdate:async(t,e)=>-1!=t.value&&this.isDoneDispensing(e)?this.gotoPatientDashboard():(t.other.amount_needed=0,await this.dispensation.loadCurrentDrugOrder(),this.buildOrderOptions()),onValue:async(t,e)=>-1===t.value?!!(await this.dispensation.voidOrder(t.other.order_id)):!(!e&&!(await this.isValidDispensation(t)))&&(!!(await this.saveDispensations(t))||(o("Unable to save dispensation"),!1)),config:{medicationHistory:this.buildMedicationHistory(),toolbarInfo:[{label:"Name",value:this.patient.getFullName()},{label:"Gender",value:this.patient.getGender()},{label:"Date Of Birth",value:r.toStandardHisDisplayFormat(this.patient.getBirthdate())}],hiddenFooterBtns:["Clear","Finish"]},options:()=>this.buildOrderOptions()}]}}});t("default",d(h,[["render",function(t,e,s,i,r,n){const a=u("his-standard-form");return l(),p(a,{skipSummary:!0,cancelDestinationPath:t.cancelDestination,fields:t.fields},null,8,["cancelDestinationPath","fields"])}]]))}}}));