(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1fde"],{"7d94":function(e,t,i){"use strict";i.r(t);var n=i("7a23");function r(e,t,i,r,a,s){const o=Object(n["resolveComponent"])("his-standard-form");return Object(n["openBlock"])(),Object(n["createBlock"])(o,{skipSummary:!0,onOnIndex:t[0]||(t[0]=t=>e.fieldComponent=""),activeField:e.fieldComponent,cancelDestinationPath:e.cancelDestination,fields:e.fields,onFinishAction:e.onSubmit},null,8,["activeField","cancelDestinationPath","fields","onFinishAction"])}i("14d9");var a,s,o,c=i("d95e"),l=i("2706"),d=i("dac2"),g=i("b5e4"),u=i("9283"),h=i("c21d"),p=i("2ef0"),m=i("7365"),f=i("7f35");(function(e){e["ARV_REGIMENS"]="arv_regimens",e["INTERVAL_SELECTION"]="next_visit_interval"})(a||(a={})),function(e){e["EXIT"]="exit",e["CONTINUE"]="continue"}(s||(s={})),function(e){e["ON_VALUE"]="onValue",e["ON_BUILD"]="onBuild",e["BEFORE_NEXT"]="beforeNext"}(o||(o={}));const E={"Do not prescribe LPV regimens together with 3HP":{priority:1,actions:{alert:async({regimenName:e})=>(await Object(f["a"])("3HP - LPV/r conflict",e,"Regimens containing LPV/r <b>cannot</b> be prescribed together with 3HP",[{name:"Close",slot:"end",color:"danger"}],"his-danger-color"),s.EXIT)},target:a.ARV_REGIMENS,targetEvent:o.ON_VALUE,conditions:{regimenCode(e){return[7,8,9,10,11,12].includes(e)},medicationOrders(e){return e.filter(e=>!!(""+e).match(/3hp/i)).length>=1}}},"Check for any adverse effects or contraindications associated with the regimen":{priority:1,actions:{alert:async({regimenCodeStr:e,sideEffectsTable:t})=>{const{columns:i,rows:n}=t,r=await Object(f["d"])("Contraindications / Side effects for "+e,"",i,n,[{name:"Select other regimen",slot:"start"},{name:"Keep selected regimen",slot:"end",color:"danger"}],"his-danger-color");return"Select other regimen"===r?s.EXIT:s.CONTINUE}},target:a.ARV_REGIMENS,targetEvent:o.BEFORE_NEXT,conditions:{hasSideEffects(e){return e},lastSideEffectDate(e,{currentDate:t}){return e>=t}}},"Recommend 2nd line regimen to children under 3":{priority:1,actions:{alert:async()=>{const e=await Object(f["b"])("Recommendation","",["Children under 3 years often have a high viral load and may be infected with drug-resistant HIV from previous exposure to ARVs (mother's ART and/or infant nevirapine prophylaxis)","Therefore, children under <b>3 years</b> respond better when <b>started immediately on 2nd line regimen</b> (Regimen <b>11</b>)"],[{name:"Select another regimen",slot:"start"},{name:"Keep selected regimen",slot:"end",color:"danger"}],"his-warning-color");return"Select another regimen"===e?s.EXIT:s.CONTINUE}},target:a.ARV_REGIMENS,targetEvent:o.BEFORE_NEXT,conditions:{age(e){return e<3},regimenCode(e){return 11!=e}}},"Provide a reason for switching regimens when patient already has one":{priority:1,actions:{alert:async e=>{const t=await Object(f["c"])(`Are you sure you want to replace ${e.currentRegimenStr}?`,"Specify reason for switching regimen",["Policy change","Ease of administration (pill burden, swallowing)","Drug drug interaction","Pregnancy intention","Side effects","Treatment failure","Weight Change","Other"],[{name:"Cancel",slot:"start",color:"danger"},{name:"Continue",slot:"end",role:"action"}]);return t.selection&&"Cancel"!=t.action?(e.reasonForSwitch=t.selection,s.CONTINUE):s.EXIT}},target:a.ARV_REGIMENS,targetEvent:o.ON_VALUE,conditions:{regimenCode(e,{currentRegimenCode:t}){return-1!=t&&e!=t}}},"Provide 14 day starter pack for LPV regimens for children under 3 years old":{priority:3,actions:{alert:async e=>{const t=await Object(f["a"])("Starter pack needed for 14 days",""+e.treatmentInitiationState,""+e.regimenName,[{name:"Cancel",slot:"start",color:"danger"},{name:"Prescribe starter pack",slot:"end"}],"his-info-color");return"Prescribe starter pack"===t?(e.starterPackNeeded=!0,s.CONTINUE):s.EXIT}},target:a.ARV_REGIMENS,targetEvent:o.BEFORE_NEXT,conditions:{age(e){return e<3},regimenCode(e){return 11===e},treatmentInitiationState(e){return["Initiation","Re-initiation"].includes(e)}}},"Provide 14 day starter pack for NVP based regimens on newly initiated/re-initiation patients":{priority:3,actions:{alert:async e=>{const t=await Object(f["a"])("Starter pack needed for 14 days",""+e.treatmentInitiationState,""+e.regimenName,[{name:"Cancel",slot:"start",color:"danger"},{name:"Prescribe starter pack",slot:"end"}],"his-info-color");return"Prescribe starter pack"===t?(e.starterPackNeeded=!0,s.CONTINUE):s.EXIT}},target:a.ARV_REGIMENS,targetEvent:o.BEFORE_NEXT,conditions:{regimenCode(e){return[0,2,6].includes(e)},treatmentInitiationState(e){return["Initiation","Re-initiation"].includes(e)}}},"Ask to reuse hanging pills if any":{priority:5,actions:{alert:async e=>{const t=await Object(f["a"])("Hanging pills recommendation","Add hanging pills?","",[{name:"No",slot:"start",color:"warning"},{name:"Yes",slot:"end"}],"his-info-color");return e.hangingPillsStatus="Yes"===t?"Optimize - including hanging pills":"Exact - excluding hanging pills",s.CONTINUE}},target:a.INTERVAL_SELECTION,targetEvent:o.BEFORE_NEXT,conditions:{drugs(e,{hangingPills:t}){const i=e.map(e=>t.includes(e));return i.some(Boolean)}}},"Provide warning of use of DTG regimen to women of reproductive age":{priority:2,actions:{alert:async({regimenName:e})=>{const t=await Object(f["a"])("Use of DTG or EFV in women of reproductive age",e,["There is currently <u>no confirmation</u>","that <b>DTG</b> is safe in <u>very early pregnancy</u>","DTG-based regimens are therefore not used as standard 1st line regimens for","<u>girls and women</u> who may get pregnancy"].join(" "),[{name:"Select another regimen",slot:"start"},{name:"Continue with regimen",slot:"end",color:"danger"}],"his-danger-color");return"Select another regimen"===t?s.EXIT:s.CONTINUE}},target:a.ARV_REGIMENS,targetEvent:o.BEFORE_NEXT,conditions:{regimenCode(e){return e>=12},isChildBearing(e){return e}}},"Provide pallet options for LPV regimens for patient's whose weight is between 3 and 25 kgs":{priority:6,actions:{alert:async e=>{const t=await Object(f["a"])("Pellets (cups) / Tabs","","Prescribe LPV/r in <b>Pellets (cups)</b> or <b>Tablets</b>?",[{name:"Granules",slot:"start"},{name:"Pellets",slot:"end"},{name:"Tabs",slot:"end"}],"his-info-color");return e.lpvType=t.toLowerCase(),s.CONTINUE}},target:a.ARV_REGIMENS,targetEvent:o.BEFORE_NEXT,conditions:{weight(e){return e>=3&&e<=25},regimenCode(e){return 11===e||9===e}}},"Provide 14 day interval for NVP or LVP Regimen starter pack":{priority:1,data:{enabled:!1},target:a.INTERVAL_SELECTION,targetEvent:o.ON_BUILD,conditions:{prescriptionType(e){return"Regimen"===e},selectedInterval(e){return e>14},starterPackNeeded(e){return e},regimenCode(e){return[0,2,6,11].includes(e)}}},"Provide intervals upto 1 month, 2nd up to 2 months, and 3rd up to 6 months for Patients receiving TPT":{priority:2,data:{enabled:!1},target:a.INTERVAL_SELECTION,targetEvent:o.ON_BUILD,conditions:{prescriptionType(e){return"Regimen"===e},medicationOrders(e){return e.map(e=>!!(""+e).match(/3hp/i)).some(Boolean)},tptPrescriptionCount(e,{selectedInterval:t}){return Math.round(t/30)>e}}}},b={"Rifapentine or isoniazid should be taken weekly":{concept:"Weekly (QW)",priority:1,conditions:{drug(e){return(""+e).match(/Rifapentine|Isoniazid/i)}}},"Use daily frequency for any other drugs":{concept:"Daily (QOD)",priority:2,conditions:{drug(e){return!(""+e).match(/Rifapentine|Isoniazid/i)}}}};var T=i("32b3"),v=i("ad60"),y=i("9ceb"),I=i("8e8b"),S=i("3b8c");const w={style:{fontSize:"1.3rem !important",borderBottom:"solid 2px #ccc",color:"black",background:"white"}};var N=Object(n["defineComponent"])({mixins:[m["a"]],data:()=>({drugs:[],prescription:{},patientToolbar:[],fieldComponent:"",regimenExtras:[],programInfo:[],allDrugs:[],facts:{age:-1,gender:"",weight:-1,currentDate:"",isChildBearing:!1,prescriptionType:"",tptStatus:{},tptPrescriptionCount:0,currentRegimenCode:-1,currentRegimenStr:"",drug:"",drugs:[],contraindications:{},hasSideEffects:!1,sideEffectsTable:{},lastSideEffectDate:"",regimenCode:-1,regimenCodeStr:"",regimenName:"",regimenDrugs:[],hangingPills:[],reasonForSwitch:"",starterPackNeeded:!1,hangingPillsStatus:"",treatmentInitiationState:"",lpvType:"",medicationOrders:[],selectedInterval:0}}),watch:{ready:{async handler(e){if(!e)return;if(this.prescription=new d["a"](this.patientID,this.providerID),await this.prescription.loadMedicationOrders(),await this.prescription.loadFastTrackStatus(),!this.prescription.medicationOrdersAvailable()&&!this.prescription.isFastTrack())return Object(g["e"])("Patient is not eligible for treatment Today! Please check HIV Clinic Consultation"),this.gotoPatientDashboard();await I["a"].get("ASK_HANGING_PILLS")&&await this.prescription.loadHangingPills(),await this.prescription.loadRegimenExtras(),await this.prescription.loadTreatmentState(),await this.prescription.loadDrugInduced(),await this.prescription.loadContraindications(),await this.prescription.loadTptPrescriptionCount(),await this.initFacts(this.patient),this.prescription.shouldPrescribeExtras()&&(this.regimenExtras=this.prescription.getRegimenExtras());const t=this.resolveHtnDrugs();Object(p["isEmpty"])(t)||(this.regimenExtras=[...this.regimenExtras,...t]),this.prescription.isFastTrack()?(await this.prescription.loadFastTrackMedications(),this.drugs=this.prescription.getFastTrackMedications(),this.fieldComponent="next_visit_interval"):this.prescription.shouldPrescribeArvs()||Object(p["isEmpty"])(this.regimenExtras)||(this.drugs=this.regimenExtras),this.patientToolbar=await this.getPatientToolBar(),this.fields=this.getFields()},immediate:!0},drugs:{handler(e){this.facts.drugs=e.map(e=>e.drug_id)},immediate:!0,deep:!0}},methods:{async initFacts(e){this.programInfo=await v["a"].getProgramInformation(e.getID()),this.facts.age=e.getAge(),this.facts.gender=e.getGender(),this.facts.weight=await e.getRecentWeight(),this.facts.hangingPills=this.prescription.getHangingPills(),this.facts.treatmentInitiationState=this.prescription.getTreatmentState(),this.facts.currentRegimenStr=this.programInfo.current_regimen,this.facts.currentRegimenCode=this.extractRegimenCode(this.programInfo.current_regimen),this.facts.medicationOrders=this.prescription.getMedicationOrders(),this.facts.contraindications=this.prescription.getContraindications(),this.facts.tptPrescriptionCount=this.prescription.getTptPrescriptionCount(),this.facts.lastSideEffectDate=this.prescription.getLastSideEffectDate(),this.facts.currentDate=d["a"].getSessionDate(),this.facts.isChildBearing=e.isChildBearing(),this.facts.tptStatus=await new S["a"](this.patientID,this.providerID).getTptTreatmentStatus()},async onSubmit(e){const t=await this.prescription.createEncounter();this.prescription.setNextVisitInterval(e[a.INTERVAL_SELECTION].value);const i=this.mapOrder(this.drugs);if(!t)return Object(g["e"])("Unable to create treatment encounter");const n=await this.prescription.createDrugOrder(i);if(!n)return Object(g["e"])("Unable to create drug orders!");this.facts.reasonForSwitch&&await this.prescription.createRegimenSwitchObs(this.facts.reasonForSwitch),this.facts.hangingPillsStatus&&await this.prescription.createHangingPillsObs(this.facts.hangingPillsStatus),Object(g["d"])("Drug order has been created"),I["a"].invalidate("PATIENT_PROGRAM"),this.nextTask()},async onEvent(e,t){const i=Object(h["a"])(this.facts,E,e,t);for(const a in i){var n;const e=i[a];if(null!==e&&void 0!==e&&null!==(n=e.actions)&&void 0!==n&&n.alert){var r;const t=await(null===e||void 0===e||null===(r=e.actions)||void 0===r?void 0:r.alert(this.facts));if(t===s.EXIT)return!1}}return!0},onBuildOptions(e,t){const i=Object(h["a"])(this.facts,E,e,t);for(const n in i){const e=i[n];if(e.data)return e.data}return{}},async onRegimen({label:e,value:t,other:i}){this.facts.lpvType="",this.facts.hangingPillsStatus="",this.facts.starterPackNeeded=!1,this.facts.regimenName=`${t} (${e})`,this.facts.regimenCodeStr=t.toString(),this.facts.regimenCode=this.extractRegimenCode(t.toString()),this.facts.regimenDrugs=i.regimenDrugs,this.facts.drugs=i.regimenDrugs.map(e=>e.drug_id);const n=this.prescription.findAndGroupDrugSideEffects(this.facts.drugs);this.facts.hasSideEffects=!Object(p["isEmpty"])(n),this.facts.sideEffectsTable=this.buildSideEffectsTable(n)},async onBeforeRegimenNext(){const e=await this.onEvent(a.ARV_REGIMENS,o.BEFORE_NEXT);let t=[];return!!e&&(this.facts.lpvType?t=await this.getLpvDrugs():this.facts.starterPackNeeded?(t=await this.getStarterPackDrugs(),Object(p["isEmpty"])(t)&&(t=this.facts.regimenDrugs)):t=this.facts.regimenDrugs,this.drugs=[...this.regimenExtras,...t],!0)},getLpvDrugs(){return this.prescription.getLvpDrugsByType(this.facts.lpvType,this.facts.regimenCode)},resolveHtnDrugs(){try{const e=sessionStorage.getItem(T["b"].Prescription);if("string"===typeof e){const t=JSON.parse(e);if(Object(p["isPlainObject"])(t)&&t[this.patientID])return t[this.patientID]}}catch(e){console.warn(e)}return[]},getStarterPackDrugs(){return this.prescription.getRegimenStarterpack(this.facts.regimenCode,this.facts.weight)},setCustomDrugs(e){this.drugs=e.map(e=>e.other)},buildSideEffectsTable(e){const t=["Date","Contraindication(s)","Side effect(s)"],i=[];for(const n in e){const t=this.facts.contraindications[n]||[];i.push([u["b"].toStandardHisDisplayFormat(n),t.join(", "),e[n].join(", ")])}return{columns:t,rows:i}},async buildRegimenOptions(){const e=await this.prescription.getPatientRegimens(),t=[];for(const i in e){const n=e[i],r=n.map(e=>e.alternative_drug_name||e.concept_name).sort().join(" + ");t.push({label:r,value:i,other:{regimenDrugs:n}})}return t},buildIntervalOptions(){const e=[{label:"2 weeks",value:14},{label:"1 month",value:28},{label:"2 months",value:56},{label:"3 months",value:84},{label:"4 months",value:112},{label:"5 months",value:140},{label:"6 months",value:168},{label:"7 months",value:196},{label:"8 months",value:224},{label:"9 months",value:252},{label:"10 months",value:280},{label:"11 months",value:308},{label:"12 months",value:336}];return e.map(({label:e,value:t})=>{this.facts.selectedInterval=parseInt(t.toString());const i=this.onBuildOptions(a.INTERVAL_SELECTION,o.ON_BUILD);return{label:e,value:t,other:{...i,...this.getDrugEstimates(this.drugs,this.facts.selectedInterval)}}})},getDrugFrequency(e){this.facts.drug=e;const t=Object(h["a"])(this.facts,b);if(!Object(p["isEmpty"])(t))return t[0].concept},extractRegimenCode(e){try{return e.match(/n\/a/i)?-1:parseInt(e.substring(0,e.length))}catch(t){return console.warn(t),-1}},getDrugEstimates(e,t){this.prescription.setNextVisitInterval(t);const i=this.prescription.calculateDateFromInterval(),n=e.map(e=>{const t=this.prescription.getDrugPackSize(e),i=this.prescription.calculatePillsPerDay(e.am,e.noon,e.pm),n=this.prescription.estimatePackSize(i,t);return{label:e.alternative_drug_name||e.drug_name,value:n}});return{label:"Medication run-out date:",value:u["b"].toStandardHisDisplayFormat(i),other:{label:"Estimated packs/tins:",value:n}}},mapOrder(e){return e.map(e=>this.prescription.toOrderObj(e.drug_id,e.alternative_drug_name||e.drug_name,e.units,e.am,e.pm,e.frequency||this.getDrugFrequency(e.drug_name)))},async getPatientToolBar(){const e=await this.prescription.getReasonForRegimenSwitch();return[{label:"Age",value:this.patient.getAge()+" Year(s)"},{label:"Gender",value:this.patient.getGender()},{label:"Current Regimen",value:this.programInfo.current_regimen},{label:"Current weight",value:this.facts.weight+" kg(s)"||"Unknown"},{label:"Reason for change",value:e}]},getFields(){return[{id:a.ARV_REGIMENS,helpText:"ARV Regimen(s)",type:c["b"].TT_ART_REGIMEN_SELECTION,condition:()=>this.prescription.shouldPrescribeArvs(),validation:e=>l["a"].required(e),options:()=>this.buildRegimenOptions(),onload:()=>this.facts.prescriptionType="Regimen",onValue:e=>(this.onRegimen(e),this.onEvent(a.ARV_REGIMENS,o.ON_VALUE)),beforeNext:()=>this.onBeforeRegimenNext(),config:{toolbarInfo:this.patientToolbar,footerBtns:[{name:"Custom Regimen",slot:"end",onClick:()=>{this.fieldComponent="custom_regimen"}}]}},{id:"custom_regimen",helpText:"Custom prescription",type:c["b"].TT_MULTIPLE_SELECT,condition:()=>"Custom"===this.facts.prescriptionType,onload:()=>this.facts.prescriptionType="Custom",validation:e=>l["a"].required(e),beforeNext:async e=>{const t=e.map(e=>e.other.concept_id),i=this.regimenExtras.map(e=>e.concept_id).every(e=>t.includes(e));return!!i||await Object(g["a"])(`One or more required drugs in "${this.regimenExtras.map(e=>e.drug_name)}" is missing from your selection, do you want to proceed?`)},options:async()=>(Object(p["isEmpty"])(this.allDrugs)&&(this.allDrugs=await this.prescription.getCustomIngridients()),this.allDrugs.map(e=>{const t={label:e.name,value:e.drug_id,other:{...e}};if(null!=this.facts.tptStatus.tpt&&/INH|3HP|RIF|Isoniazid/i.test(e.name)){if(this.facts.tptStatus.tb_treatment)return{...t,disabled:!0,description:{color:"danger",show:"always",text:"Client on TB Treatment"}};if(this.facts.tptStatus.completed)return{...t,disabled:!0,description:{color:"danger",show:"always",text:"Client completed "+this.facts.tptStatus.tpt}};if(/IPT/i.test(this.facts.tptStatus.tpt)&&/3HP|RIF/i.test(e.name))return{...t,disabled:!0,description:{color:"danger",show:"always",text:"Client is on IPT"}}}return t})),config:{showKeyboard:!0,hiddenFooterBtns:["Back"],footerBtns:[{name:"Standard Regimen",size:"large",slot:"end",color:"primary",visible:!1,onClick:()=>{this.fieldComponent="arv_regimens"}}]}},{id:"custom_dosage",helpText:"Custom dose",type:c["b"].TT_DOSAGE_INPUT,condition:e=>!Object(p["isEmpty"])(e.custom_regimen),validation:e=>{if(l["a"].required(e))return["Drugs are not available"];const t=e.map(({other:e})=>e.am<=0&&e.pm<=0);return t.some(Boolean)?["Missing dosage configuration on some drugs"]:null},unload:e=>this.setCustomDrugs(e),summaryMapValue:({other:e})=>({label:"Dosages",value:this.prescription.getInstructions(e.drug_name,e.am,e.pm,e.units)}),options:e=>e.custom_regimen.map(e=>({label:e.label,value:e.value,other:{drug_id:e.other.drug_id,drug_name:e.label,barcodes:e.other.barcodes,units:e.other.units,am:0,noon:0,pm:0,frequency:this.getDrugFrequency(e.label)}}))},{id:"selected_meds",helpText:"Selected medication",type:c["b"].TT_DATA_TABLE,config:{toolbarInfo:this.patientToolbar,hiddenFooterBtns:["Clear"],dataTableConfig:{showIndex:!1},viewPortStyle:{height:"76vh"},columns:()=>[[y["a"].thTxt("Drug name",w),y["a"].thTxt("Units",w),y["a"].thTxt("AM",w),y["a"].thTxt("Noon",w),y["a"].thTxt("PM",w),y["a"].thTxt("Frequency",w)]],rows:()=>this.drugs.map(e=>{const t={style:{height:"6vh"},cssClass:(()=>{if(e.drug_name.match(/cotrimoxazole/i))return"adult-regimen-formulation";switch(e.regimen_category){case"A":return"adult-regimen-formulation";case"P":return"peads-regimen-formulation"}})()};return[y["a"].td(e.alternative_drug_name||e.drug_name,t),y["a"].td(e.units,t),y["a"].td(e.am,t),y["a"].td(e.noon,t),y["a"].td(e.pm,t),y["a"].td(e.frequency||this.getDrugFrequency(e.drug_name),t)]})}},{id:a.INTERVAL_SELECTION,helpText:"Interval to next visit",type:c["b"].TT_NEXT_VISIT_INTERVAL_SELECTION,validation:e=>l["a"].required(e),options:()=>this.buildIntervalOptions(),onValue:()=>this.onEvent(a.INTERVAL_SELECTION,o.ON_VALUE),beforeNext:()=>this.onEvent(a.INTERVAL_SELECTION,o.BEFORE_NEXT),config:{showRegimenCardTitle:!1}}]}}}),_=i("d959"),O=i.n(_);const C=O()(N,[["render",r]]);t["default"]=C}}]);
//# sourceMappingURL=chunk-2d0e1fde.46bff80c.js.map