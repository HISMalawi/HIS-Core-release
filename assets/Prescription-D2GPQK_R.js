import{aj as d,bi as _,cM as w,ag as I,d as P,t as f,T as b,ah as c,aT as C,cN as D,U as N,H as y,F as u,V as h,n as R,L as a,_ as x,r as O,o as k,c as A}from"./index-BFVcutZq.js";import{P as E}from"./prescription_service-cekpg6h4.js";import{m as v}from"./GuidelineEngine-D6V1_Znr.js";import{_ as L}from"./EncounterMixin.vue_vue_type_script_lang-BjcFUOZj.js";import{H as V}from"./htn_service-BeX8CXdB.js";import"./drug_order_service-ColPpc1E.js";import"./encounter_guidelines-fEzG7yyD.js";import"./HisStandardForm-DO3sZVdL.js";var o=(t=>(t.ARV_REGIMENS="arv_regimens",t.INTERVAL_SELECTION="next_visit_interval",t))(o||{}),S=(t=>(t.EXIT="exit",t.CONTINUE="continue",t))(S||{}),p=(t=>(t.ON_VALUE="onValue",t.ON_BUILD="onBuild",t.BEFORE_NEXT="beforeNext",t))(p||{});const T={"Do not prescribe LPV regimens together with 3HP":{priority:1,actions:{alert:async({regimenName:t})=>(await d("3HP - LPV/r conflict",t,"Regimens containing LPV/r <b>cannot</b> be prescribed together with 3HP",[{name:"Close",slot:"end",color:"danger"}],"his-danger-color"),"exit")},target:"arv_regimens",targetEvent:"onValue",conditions:{regimenCode(t){return[7,8,9,10,11,12].includes(t)},medicationOrders(t){return t.filter(e=>!!"".concat(e).match(/3hp/i)).length>=1}}},"Check for any adverse effects or contraindications associated with the regimen":{priority:1,actions:{alert:async({regimenCodeStr:t,sideEffectsTable:e})=>{const{columns:n,rows:i}=e;return await _("Contraindications / Side effects for ".concat(t),"",n,i,[{name:"Select other regimen",slot:"start"},{name:"Keep selected regimen",slot:"end",color:"danger"}],"his-danger-color")==="Select other regimen"?"exit":"continue"}},target:"arv_regimens",targetEvent:"beforeNext",conditions:{hasSideEffects(t){return t},lastSideEffectDate(t,{currentDate:e}){return t>=e}}},"Recommend 2nd line regimen to children under 3":{priority:1,actions:{alert:async()=>await w("Recommendation","",["Children under 3 years often have a high viral load and may be infected with drug-resistant HIV from previous exposure to ARVs (mother's ART and/or infant nevirapine prophylaxis)","Therefore, children under <b>3 years</b> respond better when <b>started immediately on 2nd line regimen</b> (Regimen <b>11</b>)"],[{name:"Select another regimen",slot:"start"},{name:"Keep selected regimen",slot:"end",color:"danger"}],"his-warning-color")==="Select another regimen"?"exit":"continue"},target:"arv_regimens",targetEvent:"beforeNext",conditions:{age(t){return t<3},regimenCode(t){return t!=11}}},"Provide a reason for switching regimens when patient already has one":{priority:1,actions:{alert:async t=>{const e=await I("Are you sure you want to replace ".concat(t.currentRegimenStr,"?"),"Specify reason for switching regimen",["Policy change","Ease of administration (pill burden, swallowing)","Drug drug interaction","Pregnancy intention","Side effects","Treatment failure","Weight Change","Other"],[{name:"Cancel",slot:"start",color:"danger"},{name:"Continue",slot:"end",role:"action"}]);return e.selection&&e.action!="Cancel"?(t.reasonForSwitch=e.selection,"continue"):"exit"}},target:"arv_regimens",targetEvent:"onValue",conditions:{regimenCode(t,{currentRegimenCode:e}){return e!=-1&&t!=e}}},"Provide 14 day starter pack for LPV regimens for children under 3 years old":{priority:3,actions:{alert:async t=>await d("Starter pack needed for 14 days","".concat(t.treatmentInitiationState),"".concat(t.regimenName),[{name:"Cancel",slot:"start",color:"danger"},{name:"Prescribe starter pack",slot:"end"}],"his-info-color")==="Prescribe starter pack"?(t.starterPackNeeded=!0,"continue"):"exit"},target:"arv_regimens",targetEvent:"beforeNext",conditions:{age(t){return t<3},regimenCode(t){return t===11},treatmentInitiationState(t){return["Initiation","Re-initiation"].includes(t)}}},"Provide 14 day starter pack for NVP based regimens on newly initiated/re-initiation patients":{priority:3,actions:{alert:async t=>await d("Starter pack needed for 14 days","".concat(t.treatmentInitiationState),"".concat(t.regimenName),[{name:"Cancel",slot:"start",color:"danger"},{name:"Prescribe starter pack",slot:"end"}],"his-info-color")==="Prescribe starter pack"?(t.starterPackNeeded=!0,"continue"):"exit"},target:"arv_regimens",targetEvent:"beforeNext",conditions:{regimenCode(t){return[0,2,6].includes(t)},treatmentInitiationState(t){return["Initiation","Re-initiation"].includes(t)}}},"Ask to reuse hanging pills if any":{priority:5,actions:{alert:async t=>(await d("Hanging pills recommendation","Add hanging pills?","",[{name:"No",slot:"start",color:"warning"},{name:"Yes",slot:"end"}],"his-info-color")==="Yes"?t.hangingPillsStatus="Optimize - including hanging pills":t.hangingPillsStatus="Exact - excluding hanging pills","continue")},target:"next_visit_interval",targetEvent:"beforeNext",conditions:{drugs(t,{hangingPills:e}){return t.map(i=>e.includes(i)).some(Boolean)}}},"Provide warning of use of DTG regimen to women of reproductive age":{priority:2,actions:{alert:async({regimenName:t})=>await d("Use of DTG or EFV in women of reproductive age",t,["There is currently <u>no confirmation</u>","that <b>DTG</b> is safe in <u>very early pregnancy</u>","DTG-based regimens are therefore not used as standard 1st line regimens for","<u>girls and women</u> who may get pregnancy"].join(" "),[{name:"Select another regimen",slot:"start"},{name:"Continue with regimen",slot:"end",color:"danger"}],"his-danger-color")==="Select another regimen"?"exit":"continue"},target:"arv_regimens",targetEvent:"beforeNext",conditions:{regimenCode(t){return t>=12},isChildBearing(t){return t}}},"Provide pallet options for LPV regimens for patient's whose weight is between 3 and 25 kgs":{priority:6,actions:{alert:async t=>{const e=await d("Pellets (cups) / Tabs","","Prescribe LPV/r in <b>Pellets (cups)</b> or <b>Tablets</b>?",[{name:"Granules",slot:"start"},{name:"Pellets",slot:"end"},{name:"Tabs",slot:"end"}],"his-info-color");return t.lpvType=e.toLowerCase(),"continue"}},target:"arv_regimens",targetEvent:"beforeNext",conditions:{weight(t){return t>=3&&t<=25},regimenCode(t){return t===11||t===9}}},"Provide 14 day interval for NVP or LVP Regimen starter pack":{priority:1,data:{enabled:!1},target:"next_visit_interval",targetEvent:"onBuild",conditions:{prescriptionType(t){return t==="Regimen"},selectedInterval(t){return t>14},starterPackNeeded(t){return t},regimenCode(t){return[0,2,6,11].includes(t)}}},"Provide intervals upto 1 month, 2nd up to 2 months, and 3rd up to 6 months for Patients receiving TPT":{priority:2,data:{enabled:!1},target:"next_visit_interval",targetEvent:"onBuild",conditions:{prescriptionType(t){return t==="Regimen"},medicationOrders(t){return t.map(e=>!!"".concat(e).match(/3hp/i)).some(Boolean)},tptPrescriptionCount(t,{selectedInterval:e}){return Math.round(e/30)>t}}}},F={"Rifapentine or isoniazid should be taken weekly":{concept:"Weekly (QW)",priority:1,conditions:{drug(t){return"".concat(t).match(/Rifapentine|Isoniazid/i)}}},"Use daily frequency for any other drugs":{concept:"Daily (QOD)",priority:2,conditions:{drug(t){return!"".concat(t).match(/Rifapentine|Isoniazid/i)}}}},g={style:{fontSize:"1.3rem !important",borderBottom:"solid 2px #ccc",color:"black",background:"white"}},B=P({mixins:[L],data:()=>({drugs:[],prescription:{},patientToolbar:[],fieldComponent:"",regimenExtras:[],programInfo:[],allDrugs:[],facts:{age:-1,gender:"",weight:-1,currentDate:"",isChildBearing:!1,prescriptionType:"",tptStatus:{},tptPrescriptionCount:0,currentRegimenCode:-1,currentRegimenStr:"",drug:"",drugs:[],contraindications:{},hasSideEffects:!1,sideEffectsTable:{},lastSideEffectDate:"",regimenCode:-1,regimenCodeStr:"",regimenName:"",regimenDrugs:[],hangingPills:[],reasonForSwitch:"",starterPackNeeded:!1,hangingPillsStatus:"",treatmentInitiationState:"",lpvType:"",medicationOrders:[],selectedInterval:0}}),watch:{ready:{async handler(t){if(!t)return;if(this.prescription=new E(this.patientID,this.providerID),await this.prescription.loadMedicationOrders(),await this.prescription.loadFastTrackStatus(),!this.prescription.medicationOrdersAvailable()&&!this.prescription.isFastTrack())return f("Patient is not eligible for treatment Today! Please check HIV Clinic Consultation"),this.gotoPatientDashboard();await b.get("ASK_HANGING_PILLS")&&await this.prescription.loadHangingPills(),await this.prescription.loadRegimenExtras(),await this.prescription.loadTreatmentState(),await this.prescription.loadDrugInduced(),await this.prescription.loadContraindications(),await this.prescription.loadTptPrescriptionCount(),await this.initFacts(this.patient),this.prescription.shouldPrescribeExtras()&&(this.regimenExtras=this.prescription.getRegimenExtras());const e=this.resolveHtnDrugs();c.isEmpty(e)||(this.regimenExtras=[...this.regimenExtras,...e]),this.prescription.isFastTrack()?(await this.prescription.loadFastTrackMedications(),this.drugs=this.prescription.getFastTrackMedications(),this.fieldComponent="next_visit_interval"):!this.prescription.shouldPrescribeArvs()&&!c.isEmpty(this.regimenExtras)&&(this.drugs=this.regimenExtras),this.patientToolbar=await this.getPatientToolBar(),this.fields=this.getFields()},immediate:!0},drugs:{handler(t){this.facts.drugs=t.map(e=>e.drug_id)},immediate:!0,deep:!0}},methods:{async initFacts(t){this.programInfo=await C.getProgramInformation(t.getID()),this.facts.age=t.getAge(),this.facts.gender=t.getGender(),this.facts.weight=await t.getRecentWeight(),this.facts.hangingPills=this.prescription.getHangingPills(),this.facts.treatmentInitiationState=this.prescription.getTreatmentState(),this.facts.currentRegimenStr=this.programInfo.current_regimen,this.facts.currentRegimenCode=this.extractRegimenCode(this.programInfo.current_regimen),this.facts.medicationOrders=this.prescription.getMedicationOrders(),this.facts.contraindications=this.prescription.getContraindications(),this.facts.tptPrescriptionCount=this.prescription.getTptPrescriptionCount(),this.facts.lastSideEffectDate=this.prescription.getLastSideEffectDate(),this.facts.currentDate=E.getSessionDate(),this.facts.isChildBearing=t.isChildBearing(),this.facts.tptStatus=await new D(this.patientID,this.providerID).getTptTreatmentStatus()},async onSubmit(t,e){const n=await this.prescription.createEncounter();this.prescription.setNextVisitInterval(t[o.INTERVAL_SELECTION].value);const i=this.mapOrder(this.drugs);if(!n)return f("Unable to create treatment encounter");if(!await this.prescription.createDrugOrder(i))return f("Unable to create drug orders!");this.facts.reasonForSwitch&&await this.prescription.createRegimenSwitchObs(this.facts.reasonForSwitch),this.facts.hangingPillsStatus&&await this.prescription.createHangingPillsObs(this.facts.hangingPillsStatus),Object.keys(e).length&&await this.prescription.saveObservationList(await this.resolveObs(e)),N("Drug order has been created"),b.invalidate("PATIENT_PROGRAM"),this.nextTask()},async onEvent(t,e){var i,r;const n=v(this.facts,T,t,e);for(const l in n){const s=n[l];if((i=s==null?void 0:s.actions)!=null&&i.alert&&await((r=s==null?void 0:s.actions)==null?void 0:r.alert(this.facts))===S.EXIT)return!1}return!0},onBuildOptions(t,e){const n=v(this.facts,T,t,e);for(const i in n){const r=n[i];if(r.data)return r.data}return{}},async onRegimen({label:t,value:e,other:n}){this.facts.lpvType="",this.facts.hangingPillsStatus="",this.facts.starterPackNeeded=!1,this.facts.regimenName="".concat(e," (").concat(t,")"),this.facts.regimenCodeStr=e.toString(),this.facts.regimenCode=this.extractRegimenCode(e.toString()),this.facts.regimenDrugs=n.regimenDrugs,this.facts.drugs=n.regimenDrugs.map(r=>r.drug_id);const i=this.prescription.findAndGroupDrugSideEffects(this.facts.drugs);this.facts.hasSideEffects=!c.isEmpty(i),this.facts.sideEffectsTable=this.buildSideEffectsTable(i)},async onBeforeRegimenNext(){const t=await this.onEvent(o.ARV_REGIMENS,p.BEFORE_NEXT);let e=[];return t?(this.facts.lpvType?e=await this.getLpvDrugs():this.facts.starterPackNeeded?(e=await this.getStarterPackDrugs(),c.isEmpty(e)&&(e=this.facts.regimenDrugs)):e=this.facts.regimenDrugs,this.drugs=[...this.regimenExtras,...e],!0):!1},getLpvDrugs(){return this.prescription.getLvpDrugsByType(this.facts.lpvType,this.facts.regimenCode)},resolveHtnDrugs(){try{const t=sessionStorage.getItem(V.Prescription);if(typeof t=="string"){const e=JSON.parse(t);if(c.isPlainObject(e)&&e[this.patientID])return e[this.patientID]}}catch(t){console.warn(t)}return[]},getStarterPackDrugs(){return this.prescription.getRegimenStarterpack(this.facts.regimenCode,this.facts.weight)},setCustomDrugs(t){this.drugs=t.map(e=>e.other)},buildSideEffectsTable(t){const e=["Date","Contraindication(s)","Side effect(s)"],n=[];for(const i in t){const r=this.facts.contraindications[i]||[];n.push([y.toStandardHisDisplayFormat(i),r.join(", "),t[i].join(", ")])}return{columns:e,rows:n}},async buildRegimenOptions(){const t=await this.prescription.getPatientRegimens(),e=[];for(const n in t){const i=t[n],r=i.map(l=>l.alternative_drug_name||l.concept_name).sort().join(" + ");e.push({label:r,value:n,other:{regimenDrugs:i}})}return e},buildIntervalOptions(){return[{label:"2 weeks",value:14},{label:"1 month",value:28},{label:"2 months",value:56},{label:"3 months",value:84},{label:"4 months",value:112},{label:"5 months",value:140},{label:"6 months",value:168},{label:"7 months",value:196},{label:"8 months",value:224},{label:"9 months",value:252},{label:"10 months",value:280},{label:"11 months",value:308},{label:"12 months",value:336}].map(({label:e,value:n})=>{this.facts.selectedInterval=parseInt(n.toString());const i=this.onBuildOptions(o.INTERVAL_SELECTION,p.ON_BUILD);return{label:e,value:n,other:{...i,...this.getDrugEstimates(this.drugs,this.facts.selectedInterval)}}})},getDrugFrequency(t){this.facts.drug=t;const e=v(this.facts,F);if(!c.isEmpty(e))return e[0].concept},extractRegimenCode(t){try{return t.match(/n\/a/i)?-1:parseInt(t.substring(0,t.length))}catch(e){return console.warn(e),-1}},getDrugEstimates(t,e){this.prescription.setNextVisitInterval(e);const n=this.prescription.calculateDateFromInterval(),i=t.map(r=>{const l=this.prescription.getDrugPackSize(r),s=this.prescription.calculatePillsPerDay(r.am,r.noon,r.pm),m=this.prescription.estimatePackSize(s,l);return{label:r.alternative_drug_name||r.drug_name,value:m}});return{label:"Medication run-out date:",value:y.toStandardHisDisplayFormat(n),other:{label:"Estimated packs/tins:",value:i}}},mapOrder(t){return t.map(e=>this.prescription.toOrderObj(e.drug_id,e.alternative_drug_name||e.drug_name,e.units,e.am,e.pm,e.frequency||this.getDrugFrequency(e.drug_name)))},async getPatientToolBar(){const t=await this.prescription.getReasonForRegimenSwitch();return[{label:"Age",value:"".concat(this.patient.getAge()," Year(s)")},{label:"Gender",value:this.patient.getGender()},{label:"Current Regimen",value:this.programInfo.current_regimen},{label:"Current weight",value:"".concat(this.facts.weight," kg(s)")||"Unknown"},{label:"Reason for change",value:t}]},getFields(){return[{id:o.ARV_REGIMENS,helpText:"ARV Regimen(s)",type:u.TT_ART_REGIMEN_SELECTION,condition:()=>this.prescription.shouldPrescribeArvs(),validation:t=>h.required(t),options:()=>this.buildRegimenOptions(),onload:()=>this.facts.prescriptionType="Regimen",onValue:t=>(this.onRegimen(t),this.onEvent(o.ARV_REGIMENS,p.ON_VALUE)),beforeNext:()=>this.onBeforeRegimenNext(),config:{toolbarInfo:this.patientToolbar,footerBtns:[{name:"Custom Regimen",slot:"end",onClick:()=>{this.fieldComponent="custom_regimen"}}]}},{id:"custom_regimen",helpText:"Custom prescription",type:u.TT_MULTIPLE_SELECT,condition:()=>this.facts.prescriptionType==="Custom",onload:()=>this.facts.prescriptionType="Custom",validation:t=>h.required(t),beforeNext:async t=>{const e=t.map(i=>i.other.concept_id);return this.regimenExtras.map(i=>i.concept_id).every(i=>e.includes(i))?!0:await R('One or more required drugs in "'.concat(this.regimenExtras.map(i=>i.drug_name),'" is missing from your selection, do you want to proceed?'))},options:async()=>(c.isEmpty(this.allDrugs)&&(this.allDrugs=await this.prescription.getCustomIngridients()),this.allDrugs.map(t=>{const e={label:t.name,value:t.drug_id,other:{...t}};if(this.facts.tptStatus.tpt!=null&&/INH|3HP|RIF|Isoniazid/i.test(t.name)){if(this.facts.tptStatus.tb_treatment)return{...e,disabled:!0,description:{color:"danger",show:"always",text:"Client on TB Treatment"}};if(this.facts.tptStatus.completed)return{...e,disabled:!0,description:{color:"danger",show:"always",text:"Client completed "+this.facts.tptStatus.tpt}};if(/IPT/i.test(this.facts.tptStatus.tpt)&&/3HP|RIF/i.test(t.name))return{...e,disabled:!0,description:{color:"danger",show:"always",text:"Client is on IPT"}}}return e})),config:{showKeyboard:!0,hiddenFooterBtns:["Back"],footerBtns:[{name:"Standard Regimen",size:"large",slot:"end",color:"primary",visible:!1,onClick:()=>{this.fieldComponent="arv_regimens"}}]}},{id:"custom_dosage",helpText:"Custom dose",type:u.TT_DOSAGE_INPUT,condition:t=>!c.isEmpty(t.custom_regimen),validation:t=>h.required(t)?["Drugs are not available"]:t.map(({other:n})=>n.am<=0&&n.pm<=0).some(Boolean)?["Missing dosage configuration on some drugs"]:null,unload:t=>this.setCustomDrugs(t),summaryMapValue:({other:t})=>({label:"Dosages",value:this.prescription.getInstructions(t.drug_name,t.am,t.pm,t.units)}),options:t=>t.custom_regimen.map(e=>({label:e.label,value:e.value,other:{drug_id:e.other.drug_id,drug_name:e.label,barcodes:e.other.barcodes,units:e.other.units,am:0,noon:0,pm:0,frequency:this.getDrugFrequency(e.label)}}))},{id:"selected_meds",helpText:"Selected medication",type:u.TT_DATA_TABLE,config:{toolbarInfo:this.patientToolbar,hiddenFooterBtns:["Clear"],dataTableConfig:{showIndex:!1},viewPortStyle:{height:"76vh"},columns:()=>[[a.thTxt("Drug name",g),a.thTxt("Units",g),a.thTxt("AM",g),a.thTxt("Noon",g),a.thTxt("PM",g),a.thTxt("Frequency",g)]],rows:()=>this.drugs.map(t=>{const e={style:{height:"6vh"},cssClass:(()=>{if(t.drug_name.match(/cotrimoxazole/i))return"adult-regimen-formulation";switch(t.regimen_category){case"A":return"adult-regimen-formulation";case"P":return"peads-regimen-formulation"}})()};return[a.td(t.alternative_drug_name||t.drug_name,e),a.td(t.units,e),a.td(t.am,e),a.td(t.noon,e),a.td(t.pm,e),a.td(t.frequency||this.getDrugFrequency(t.drug_name),e)]})}},{id:o.INTERVAL_SELECTION,helpText:"Interval to next visit",type:u.TT_NEXT_VISIT_INTERVAL_SELECTION,validation:t=>h.required(t),options:()=>this.buildIntervalOptions(),onValue:()=>this.onEvent(o.INTERVAL_SELECTION,p.ON_VALUE),beforeNext:()=>this.onEvent(o.INTERVAL_SELECTION,p.BEFORE_NEXT),config:{showRegimenCardTitle:!1}},{id:"reason_for_longer_duration",helpText:"Specify reason for prescribing medication over 6 months",type:u.TT_NOTE,condition:t=>t[o.INTERVAL_SELECTION].value>168,validation:t=>h.required(t),computedValue:t=>({obs:this.prescription.buildValueText("Why prescribe medication for more than 6 months?","".concat(t.value))})}]}}});function G(t,e,n,i,r,l){const s=O("his-standard-form");return k(),A(s,{skipSummary:!0,onOnIndex:e[0]||(e[0]=m=>t.fieldComponent=""),activeField:t.fieldComponent,cancelDestinationPath:t.cancelDestination,fields:t.fields,onFinishAction:t.onSubmit},null,8,["activeField","cancelDestinationPath","fields","onFinishAction"])}const X=x(B,[["render",G]]);export{X as default};