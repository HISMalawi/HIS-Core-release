(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab2c7"],{"13c2":function(e,t,a){"use strict";a.r(t);var r=a("7a23");function i(e,t,a,i,s,o){const n=Object(r["resolveComponent"])("his-standard-form");return Object(r["openBlock"])(),Object(r["createBlock"])(n,{cancelDestinationPath:e.cancelDestination,fields:e.fields,activeField:e.activeField,onFinishAction:e.onSubmit,skipSummary:!0},null,8,["cancelDestinationPath","fields","activeField","onFinishAction"])}var s=a("9441"),o=a("7365"),n=a("2706"),d=a("d95e"),c=a("2ef0"),l=a("996c"),u=a("9283"),h=a("b5e4"),p=Object(r["defineComponent"])({components:{HisStandardForm:s["a"]},mixins:[o["a"]],data:()=>({activeField:"",prescriptionService:{},showMalariaDrugs:!1,hasMalaria:!1}),watch:{ready:{async handler(e){e&&(this.prescriptionService=new l["c"](this.patientID,this.providerID),this.hasMalaria=await this.prescriptionService.hasMalaria(),this.fields=this.getFields())},immediate:!0,deep:!0}},methods:{async onSubmit(e){const t=this.mapToOrders(e["drugs_details"]),a=await this.prescriptionService.createEncounter();if(!a)return Object(h["e"])("Unable to create treatment encounter");const r=await this.prescriptionService.createDrugOrder(t);if(!r)return Object(h["e"])("Unable to create drug orders!");Object(h["d"])("Drug order has been created"),this.nextTask()},calculateExpireDate(e,t){const a=new Date(e);return a.setDate(a.getDate()+t),u["b"].toStandardHisFormat(a)},mapToOrders(e){return e.map(e=>{const t=l["c"].getSessionDate(),a=l["b"].find(t=>t.label===e.other.frequency);return{drug_inventory_id:e.other.drug_id,equivalent_daily_dose:e.other.dosage*a.value,start_date:t,auto_expire_date:this.calculateExpireDate(t,e.other.duration),units:e.other.units,instructions:`${e.label}: ${a.value} ${a.code} for ${e.other.duration}`,dose:e.other.dosage,frequency:a.code}})},isOrderComplete(e){return e.every(e=>e.other.frequency&&e.other.duration&&e.other.dosage)},getFields(){return[{id:"malaria_drugs",helpText:"select Malaria Drugs",validation:e=>n["a"].required(e),type:d["b"].TT_SELECT,condition:()=>"malaria_drugs"===this.activeField&&this.showMalariaDrugs,unload:()=>{this.showMalariaDrugs=!1,this.activeField="drugs_details"},options:()=>l["a"].map(e=>({label:`${e.name}, ${e.frequency} time(s) a day, for ${e.duration} days`,value:e.name,other:e}))},{id:"drugs",helpText:"Select drugs",type:d["b"].TT_INFINITE_SCROLL_MULTIPLE_SELECT,validation:e=>n["a"].required(e),options:async(e,t="",a=1,r=10)=>await this.prescriptionService.loadDrugs(t,a,r),onload:()=>this.activeField="",config:{showKeyboard:!0,hiddenFooterBtns:["Back"],footerBtns:[{name:"Predefined Malaria Drugs",color:"primary",size:"large",visible:!1,slot:"end",onClick:async()=>{(this.hasMalaria||await Object(h["a"])("Patient has no malaria. Do you still want to prescribe anti malaria drugs?"))&&(this.activeField="malaria_drugs",this.showMalariaDrugs=!0)}}]}},{id:"drugs_details",helpText:"Complete prescribed drug details",type:d["b"].TT_PRESCRIPTION_INPUT,validation:e=>n["a"].required(e),options:e=>[...e.drugs,...e.malaria_drugs?[e.malaria_drugs]:[]],beforeNext:e=>!Object(c["isEmpty"])(e)&&(!!this.isOrderComplete(e)||(Object(h["e"])("Please complete all fields"),!1))},{id:"summary",helpText:"Summary",type:d["b"].TT_TABLE_VIEWER,options:e=>{const t=e["drugs_details"],a=["Drug Name","Frequency","Dosage","Duration"],r=t.map(e=>[e.other.name,e.other.frequency,`${e.other.dosage} ${e.other.units}`,e.other.duration+" days"]);return[{label:"",value:"",other:{columns:a,rows:r}}]}}]}}}),m=a("6b0d"),g=a.n(m);const b=g()(p,[["render",i]]);t["default"]=b}}]);
//# sourceMappingURL=chunk-2d0ab2c7.92fee47c.js.map