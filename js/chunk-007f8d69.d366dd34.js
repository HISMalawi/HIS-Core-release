(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-007f8d69"],{"32b3":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var i,r=n("cc6f"),a=n("7957");(function(t){t["Prescription"]="htnPrescription"})(i||(i={}));class s extends r["a"]{constructor(t,e){super(t,48,e)}static getBpGrade(t,e){return t<140&&e<90?"normal":t>=140&&t<160||e>=100&&e<110?"grade 1":t>=180&&e>110||t>=180?"grade 3":t>=160&&t<180||e>=110?"grade 2":"N/A"}static isBpNormotensive(t){const[e,n]=Object.values(t).sort((t,e)=>t.date<e.date?1:0).map(t=>this.getBpGrade(t.sbp,t.dbp));return"normal"===e&&"normal"===n}getSystolicBp(){return a["a"].getFirstValueNumber(this.patientID,"Systolic blood pressure")}getDiastolicBp(){return a["a"].getFirstValueNumber(this.patientID,"Diastolic blood pressure")}async onBpDrugs(){const t=await a["a"].getFirstValueCoded(this.patientID,"Treatment status");return!!t&&"Yes"===t}async getBPTrail(){return await r["a"].getJson(`/patients/${this.patientID}/bp_trail`)}async getCurrentDrugs(){return await r["a"].getJson(`/patients/${this.patientID}/current_bp_drugs`)}async getLastDrugs(){return await r["a"].getJson(`/patients/${this.patientID}/last_bp_drugs_dispensation`)}async getAdherence(t,e){return await r["a"].postJson(`/patients/${this.patientID}/remaining_bp_drugs`,{drug_id:t,pills:e})}async enrollPatient(t){return await r["a"].postJson(`/patients/${this.patientID}/update_or_create_htn_state`,t)}static htnDrugReferences(){return[{drug_id:275,drug_name:"HCZ (25mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:942,drug_name:"Enalapril (5mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:943,drug_name:"Enalapril (10mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:558,drug_name:"Amlodipine (5mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:559,drug_name:"Amlodipine (10mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:117,drug_name:"Atenolol (50mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:11,drug_name:"Atenolol(100mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"}]}getDrugs(){return{HCZ:{drugs:[{drugName:"HCZ (25mg tablet)",drugID:275,amount:"25mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null}],selected:null,notes:[]},Enalapril:{drugs:[{drugName:"Enalapril (5mg tablet)",drugID:942,amount:"5mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Enalapril (10mg tablet)",drugID:943,amount:"10mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]},Amlodipine:{drugs:[{drugName:"Amlodipine (5mg tablet)",drugID:558,amount:"5mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Amlodipine (10mg tablet)",drugID:559,amount:"10mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]},Atenolol:{drugs:[{drugName:"Atenolol (50mg tablet)",drugID:117,amount:"50mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Atenolol(100mg tablet)",drugID:11,amount:"100mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]}}}}},"6d32":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("1c74");class r extends i["e"]{constructor(){super()}static getAllArvRegimens(){return this.getJson(`programs/${this.getProgramID()}/all_arv_regimens`)}static getRegimens(t){return this.getJson(`programs/${this.getProgramID()}/regimens`,{patient_id:t})}static getRegimensByWeight(t,e=!1){return this.getJson(`programs/${this.getProgramID()}/regimens`,{weight:t,tb_dosage:e})}static getCustomIngridients(){return this.getJson(`programs/${this.getProgramID()}/custom_regimen_ingredients`)}static getCurrentRegimen(t,e=this.getSessionDate()){return this.getJson(`programs/${this.getProgramID()}/${t}`,{date:e})}static getRegimenExtras(t,e){return this.getJson(`programs/${this.getProgramID()}/regimen_extras`,{name:t,weight:e})}}},"71c3":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("1c74");class r extends i["e"]{constructor(){super()}static create(t){return this.postJson("drug_orders",t)}static updateDispensationOrders(t){return this.postJson("dispensations",{program_id:this.getProgramID(),dispensations:t.map(t=>({date:this.getSessionDate(),drug_order_id:t["order_id"],quantity:t["quantity"]}))})}static getDrugOrderHistory(t){return this.getJson("drug_orders",{patient_id:t})}static getDrugOrders(t){return this.getJson("drug_orders",{patient_id:t,date:this.getSessionDate(),program_id:this.getProgramID()})}static getAllDrugOrders(t,e=1e3){return this.getJson("drug_orders",{patient_id:t,program_id:i["e"].getProgramID(),page_size:e})}static getLastDrugsReceived(t){return this.getJson(`patients/${t}/last_drugs_received`,{date:this.getSessionDate(),program_id:this.getProgramID()})}static getDrugDosages(t,e,n=this.getSessionDate()){const i={drug_id:e,date:n};return this.getJson(`programs/${this.getProgramID()}/patients/${t}/drug_doses`,i)}static getOrderByPatient(t,e){return this.getJson("/drug_orders",{patient_id:t,program_id:this.getProgramID(),...e})}}},7365:function(t,e,n){"use strict";n("13d5");var i,r=n("7a23"),a=n("ad60"),s=n("2ef0"),o=n("0fa1"),c=n("7f35"),d=n("9283");(function(t){t["SET_PROVIDER"]="SET_PROVIDER",t["CHANGE_SESSION_DATE"]="change_session_date",t["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",t["CHANGE_PATIENT_OUTCOME"]="change_outcome",t["CONTINUE"]="continue",t["EXIT"]="exit"})(i||(i={}));const l=t=>d["c"].toStandardHisDisplayFormat(t),u={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:t})=>{const e=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+l(t),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===e?i.GO_TO_PATIENT_DASHBOARD:"Change outcome"===e?i.CHANGE_PATIENT_OUTCOME:i.CONTINUE}},conditions:{outcome(t){return"Patient died"===t},outcomeStartDate(t,{sessionDate:e}){return e>=t}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:t,sessionDate:e})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${l(e)} is less than birth date of ${l(t)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?i.CHANGE_SESSION_DATE:i.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(t,{sessionDate:e}){return e<t}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:t,encounterName:e,sessionDate:n,apiDate:r})=>{const a=await Object(c["c"])("Please select a provider for "+e,`BDE: ${l(n)} | Current: ${l(r)}`,t,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===a.action?{value:-1,flowState:i.GO_TO_PATIENT_DASHBOARD}:{value:a.selection,flowState:i.SET_PROVIDER}}},conditions:{isBdeMode(t){return t}}}};var g=n("c21d"),h=n("7920"),p=n("b5e4"),m=n("8e8b"),f=Object(r["defineComponent"])({components:{HisStandardForm:h["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},ready:!1}),watch:{$route:{handler(t){t.params.patient_id&&this.patientID!=t.params.patient_id&&(this.patientID=parseInt(t.params.patient_id),m["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(t=>{this.patient=t,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(t,e=null){const n={};if(n[i.SET_PROVIDER]=t=>{const[e]=t.split(" "),n=Object(s["find"])(this.providers,{username:e});return n&&(this.providerID=n.person_id),i.CONTINUE},n[i.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),i.EXIT),n[i.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),i.EXIT),n[i.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),i.EXIT),t in n)return n[t](e)},async checkEncounterGuidelines(){const t=Object(g["a"])(this.facts,u);for(const s in t){var e,n;const o=t[s];if(null!==o&&void 0!==o&&null!==(e=o.actions)&&void 0!==e&&e.alert){var r;const t=this.runflowState(await(null===o||void 0===o||null===(r=o.actions)||void 0===r?void 0:r.alert(this.facts)));if(t===i.EXIT)return}if(null!==o&&void 0!==o&&null!==(n=o.actions)&&void 0!==n&&n.selection){var a;const t=await(null===o||void 0===o||null===(a=o.actions)||void 0===a?void 0:a.selection(this.facts));this.runflowState(t.flowState,t.value)}}},async setEncounterFacts(){try{const t=await m["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.outcome=t.outcome,this.facts.outcomeStartDate=t.startDate}catch(t){console.error(t),Object(p["c"])(""+t)}this.facts.sessionDate=a["a"].getSessionDate(),this.facts.apiDate=a["a"].getCachedApiDate(),this.facts.isBdeMode=a["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",a["a"].isBDE()&&(this.providers=await m["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((t,e)=>{const n=t.username.toUpperCase(),i=e.username.toUpperCase();return n<i?-1:n>i?1:0}).map(t=>{var e;let n=""+t.username;if(!Object(s["isEmpty"])(null===t||void 0===t||null===(e=t.person)||void 0===e?void 0:e.names)){var i;const[e]=(null===(i=t.person)||void 0===i?void 0:i.names)||[];n+=` (${e.given_name} ${e.family_name})`}return n}))},toOption(t,e={}){return{label:t,value:t,other:e}},mapStrToOptions(t){return t.map(t=>({label:t,value:t}))},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},nextTask(){return Object(o["b"])(this.patientID,this.$router)},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(t,e={}){return{label:t,value:"",other:{...e,values:this.yesNoOptions()}}},mapOptions(t){return t.map(t=>({label:t,value:t}))},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(t,e=""){const n=Object.values(t).filter(t=>t&&(t.tag===e||""===e)).reduce((t,e)=>{const n=e.obs?e.obs:e;return Array.isArray(n)?t=t.concat(n):"function"===typeof n?t.push(n()):t.push(n),t},[]);return Promise.all(n)},inArray(t,e){try{return t.filter(t=>e(t)).length>0}catch(n){return!1}},validateSeries(t){try{for(const e in t){const n=t[e]();if(n)return n}}catch(e){return[e]}}}});const E=f;e["a"]=E},7920:function(t,e,n){"use strict";var i=n("7a23");function r(t,e,n,r,a,s){return Object(i["openBlock"])(),Object(i["createBlock"])(Object(i["resolveDynamicComponent"])(t.formType),{fields:t.fields,skipSummary:t.skipSummary,activeField:t.activeField,cancelDestinationPath:t.cancelDestinationPath,onOnFinish:t.onFinish,onFinish:t.onFinishAction,onOnIndex:t.onIndex},null,8,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var a=n("9441"),s=Object(i["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:a["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(t,e){this.$emit("onFinish",t,e)},onIndex(t){this.$emit("onIndex",t)}}}),o=n("d959"),c=n.n(o);const d=c()(s,[["render",r]]);e["a"]=d},"7d94":function(t,e,n){"use strict";n.r(e);var i=n("7a23");function r(t,e,n,r,a,s){const o=Object(i["resolveComponent"])("his-standard-form");return Object(i["openBlock"])(),Object(i["createBlock"])(o,{skipSummary:!0,onOnIndex:e[1]||(e[1]=e=>t.fieldComponent=""),activeField:t.fieldComponent,cancelDestinationPath:t.cancelDestination,fields:t.fields,onFinishAction:t.onSubmit},null,8,["activeField","cancelDestinationPath","fields","onFinishAction"])}var a,s,o,c=n("d95e"),d=n("2706"),l=n("dac2"),u=n("b5e4"),g=n("9283"),h=n("c21d"),p=n("2ef0"),m=n("7365"),f=n("7f35");(function(t){t["ARV_REGIMENS"]="arv_regimens",t["INTERVAL_SELECTION"]="next_visit_interval"})(a||(a={})),function(t){t["EXIT"]="exit",t["CONTINUE"]="continue"}(s||(s={})),function(t){t["ON_VALUE"]="onValue",t["ON_BUILD"]="onBuild",t["BEFORE_NEXT"]="beforeNext"}(o||(o={}));const E={"Do not prescribe LPV regimens together with 3HP":{priority:1,actions:{alert:async({regimenName:t})=>(await Object(f["a"])("3HP - LPV/r conflict",t,"Regimens containing LPV/r <b>cannot</b> be prescribed together with 3HP",[{name:"Close",slot:"end",color:"danger"}],"his-danger-color"),s.EXIT)},target:a.ARV_REGIMENS,targetEvent:o.ON_VALUE,conditions:{regimenCode(t){return[7,8,9,10,11,12].includes(t)},medicationOrders(t){return t.filter(t=>!!(""+t).match(/3hp/i)).length>=1}}},"Check for any adverse effects or contraindications associated with the regimen":{priority:1,actions:{alert:async({regimenCodeStr:t,sideEffectsTable:e})=>{const{columns:n,rows:i}=e,r=await Object(f["d"])("Contraindications / Side effects for "+t,"",n,i,[{name:"Select other regimen",slot:"start"},{name:"Keep selected regimen",slot:"end",color:"danger"}],"his-danger-color");return"Select other regimen"===r?s.EXIT:s.CONTINUE}},target:a.ARV_REGIMENS,targetEvent:o.BEFORE_NEXT,conditions:{hasSideEffects(t){return t},lastSideEffectDate(t,{currentDate:e}){return t>=e}}},"Recommend 2nd line regimen to children under 3":{priority:1,actions:{alert:async()=>{const t=await Object(f["b"])("Recommendation","",["Children under 3 years often have a high viral load and may be infected with drug-resistant HIV from previous exposure to ARVs (mother's ART and/or infant nevirapine prophylaxis)","Therefore, children under <b>3 years</b> respond better when <b>started immediately on 2nd line regimen</b> (Regimen <b>11</b>)"],[{name:"Select another regimen",slot:"start"},{name:"Keep selected regimen",slot:"end",color:"danger"}],"his-warning-color");return"Select another regimen"===t?s.EXIT:s.CONTINUE}},target:a.ARV_REGIMENS,targetEvent:o.BEFORE_NEXT,conditions:{age(t){return t<3},regimenCode(t){return 11!=t}}},"Provide a reason for switching regimens when patient already has one":{priority:1,actions:{alert:async t=>{const e=await Object(f["c"])(`Are you sure you want to replace ${t.currentRegimenStr}?`,"Specify reason for switching regimen",["Policy change","Ease of administration (pill burden, swallowing)","Drug drug interaction","Pregnancy intention","Side effects","Treatment failure","Weight Change","Other"],[{name:"Cancel",slot:"start",color:"danger"},{name:"Continue",slot:"end",role:"action"}]);return e.selection&&"Cancel"!=e.action?(t.reasonForSwitch=e.selection,s.CONTINUE):s.EXIT}},target:a.ARV_REGIMENS,targetEvent:o.ON_VALUE,conditions:{regimenCode(t,{currentRegimenCode:e}){return-1!=e&&t!=e}}},"Provide 14 day starter pack for LPV regimens for children under 3 years old":{priority:3,actions:{alert:async t=>{const e=await Object(f["a"])("Starter pack needed for 14 days",""+t.treatmentInitiationState,""+t.regimenName,[{name:"Cancel",slot:"start",color:"danger"},{name:"Prescribe starter pack",slot:"end"}],"his-info-color");return"Prescribe starter pack"===e?(t.starterPackNeeded=!0,s.CONTINUE):s.EXIT}},target:a.ARV_REGIMENS,targetEvent:o.BEFORE_NEXT,conditions:{age(t){return t<3},regimenCode(t){return 11===t},treatmentInitiationState(t){return["Initiation","Re-initiation"].includes(t)}}},"Provide 14 day starter pack for NVP based regimens on newly initiated/re-initiation patients":{priority:3,actions:{alert:async t=>{const e=await Object(f["a"])("Starter pack needed for 14 days",""+t.treatmentInitiationState,""+t.regimenName,[{name:"Cancel",slot:"start",color:"danger"},{name:"Prescribe starter pack",slot:"end"}],"his-info-color");return"Prescribe starter pack"===e?(t.starterPackNeeded=!0,s.CONTINUE):s.EXIT}},target:a.ARV_REGIMENS,targetEvent:o.BEFORE_NEXT,conditions:{regimenCode(t){return[0,2,6].includes(t)},treatmentInitiationState(t){return["Initiation","Re-initiation"].includes(t)}}},"Ask to reuse hanging pills if any":{priority:5,actions:{alert:async t=>{const e=await Object(f["a"])("Hanging pills recommendation","Add hanging pills?","",[{name:"No",slot:"start",color:"warning"},{name:"Yes",slot:"end"}],"his-info-color");return t.hangingPillsStatus="Yes"===e?"Optimize - including hanging pills":"Exact - excluding hanging pills",s.CONTINUE}},target:a.INTERVAL_SELECTION,targetEvent:o.BEFORE_NEXT,conditions:{drugs(t,{hangingPills:e}){const n=t.map(t=>e.includes(t));return n.some(Boolean)}}},"Provide warning of use of DTG regimen to women of reproductive age":{priority:2,actions:{alert:async({regimenName:t})=>{const e=await Object(f["a"])("Use of DTG or EFV in women of reproductive age",t,["There is currently <u>no confirmation</u>","that <b>DTG</b> is safe in <u>very early pregnancy</u>","DTG-based regimens are therefore not used as standard 1st line regimens for","<u>girls and women</u> who may get pregnancy"].join(" "),[{name:"Select another regimen",slot:"start"},{name:"Continue with regimen",slot:"end",color:"danger"}],"his-danger-color");return"Select another regimen"===e?s.EXIT:s.CONTINUE}},target:a.ARV_REGIMENS,targetEvent:o.BEFORE_NEXT,conditions:{regimenCode(t){return t>=12},isChildBearing(t){return t}}},"Provide pallet options for LPV regimens for patient's whose weight is between 3 and 25 kgs":{priority:6,actions:{alert:async t=>{const e=await Object(f["a"])("Pellets (cups) / Tabs","","Prescribe LPV/r in <b>Pellets (cups)</b> or <b>Tablets</b>?",[{name:"Granules",slot:"start"},{name:"Pellets",slot:"end"},{name:"Tabs",slot:"end"}],"his-info-color");return t.lpvType=e.toLowerCase(),s.CONTINUE}},target:a.ARV_REGIMENS,targetEvent:o.BEFORE_NEXT,conditions:{weight(t){return t>=3&&t<=25},regimenCode(t){return 11===t||9===t}}},"Provide 14 day interval for NVP or LVP Regimen starter pack":{priority:1,data:{enabled:!1},target:a.INTERVAL_SELECTION,targetEvent:o.ON_BUILD,conditions:{prescriptionType(t){return"Regimen"===t},selectedInterval(t){return t>14},starterPackNeeded(t){return t},regimenCode(t){return[0,2,6,11].includes(t)}}},"Provide intervals upto 1 month, 2nd up to 2 months, and 3rd up to 6 months for Patients receiving TPT":{priority:2,data:{enabled:!1},target:a.INTERVAL_SELECTION,targetEvent:o.ON_BUILD,conditions:{prescriptionType(t){return"Regimen"===t},medicationOrders(t){return t.map(t=>!!(""+t).match(/3hp/i)).some(Boolean)},tptPrescriptionCount(t,{selectedInterval:e}){return Math.round(e/30)>t}}}},b={"Rifapentine or isoniazid should be taken weekly":{concept:"Weekly (QW)",priority:1,conditions:{drug(t){return(""+t).match(/Rifapentine|Isoniazid/i)}}},"Use daily frequency for any other drugs":{concept:"Daily (QOD)",priority:2,conditions:{drug(t){return!(""+t).match(/Rifapentine|Isoniazid/i)}}}};var _=n("32b3"),D=n("ad60"),v=n("9ceb"),I=n("8e8b");const y={style:{fontSize:"1.3rem !important",borderBottom:"solid 2px #ccc",color:"black",background:"white"}};var T=Object(i["defineComponent"])({mixins:[m["a"]],data:()=>({drugs:[],prescription:{},patientToolbar:[],fieldComponent:"",regimenExtras:[],programInfo:[],facts:{age:-1,gender:"",weight:-1,currentDate:"",isChildBearing:!1,prescriptionType:"",tptPrescriptionCount:0,currentRegimenCode:-1,currentRegimenStr:"",drug:"",drugs:[],contraindications:{},hasSideEffects:!1,sideEffectsTable:{},lastSideEffectDate:"",regimenCode:-1,regimenCodeStr:"",regimenName:"",regimenDrugs:[],hangingPills:[],reasonForSwitch:"",starterPackNeeded:!1,hangingPillsStatus:"",treatmentInitiationState:"",lpvType:"",medicationOrders:[],selectedInterval:0}}),watch:{ready:{async handler(t){if(!t)return;if(this.prescription=new l["a"](this.patientID,this.providerID),await this.prescription.loadMedicationOrders(),await this.prescription.loadFastTrackStatus(),!this.prescription.medicationOrdersAvailable()&&!this.prescription.isFastTrack())return Object(u["e"])("Patient is not eligible for treatment Today! Please check HIV Clinic Consultation"),this.gotoPatientDashboard();await this.prescription.loadHangingPills(),await this.prescription.loadRegimenExtras(),await this.prescription.loadTreatmentState(),await this.prescription.loadDrugInduced(),await this.prescription.loadContraindications(),await this.prescription.loadTptPrescriptionCount(),await this.initFacts(this.patient),this.prescription.shouldPrescribeExtras()&&(this.regimenExtras=this.prescription.getRegimenExtras());const e=this.resolveHtnDrugs();Object(p["isEmpty"])(e)||(this.regimenExtras=[...this.regimenExtras,...e]),this.prescription.isFastTrack()?(await this.prescription.loadFastTrackMedications(),this.drugs=this.prescription.getFastTrackMedications(),this.fieldComponent="next_visit_interval"):this.prescription.shouldPrescribeArvs()||Object(p["isEmpty"])(this.regimenExtras)||(this.drugs=this.regimenExtras),this.patientToolbar=await this.getPatientToolBar(),this.fields=this.getFields()},immediate:!0},drugs:{handler(t){this.facts.drugs=t.map(t=>t.drug_id)},immediate:!0,deep:!0}},methods:{async initFacts(t){this.programInfo=await D["a"].getProgramInformation(t.getID()),this.facts.age=t.getAge(),this.facts.gender=t.getGender(),this.facts.weight=await t.getRecentWeight(),this.facts.hangingPills=this.prescription.getHangingPills(),this.facts.treatmentInitiationState=this.prescription.getTreatmentState(),this.facts.currentRegimenStr=this.programInfo.current_regimen,this.facts.currentRegimenCode=this.extractRegimenCode(this.programInfo.current_regimen),this.facts.medicationOrders=this.prescription.getMedicationOrders(),this.facts.contraindications=this.prescription.getContraindications(),this.facts.tptPrescriptionCount=this.prescription.getTptPrescriptionCount(),this.facts.lastSideEffectDate=this.prescription.getLastSideEffectDate(),this.facts.currentDate=l["a"].getSessionDate(),this.facts.isChildBearing=t.isChildBearing()},async onSubmit(t){const e=await this.prescription.createEncounter();this.prescription.setNextVisitInterval(t[a.INTERVAL_SELECTION].value);const n=this.mapOrder(this.drugs);if(!e)return Object(u["e"])("Unable to create treatment encounter");const i=await this.prescription.createDrugOrder(n);if(!i)return Object(u["e"])("Unable to create drug orders!");this.facts.reasonForSwitch&&await this.prescription.createRegimenSwitchObs(this.facts.reasonForSwitch),this.facts.hangingPillsStatus&&await this.prescription.createHangingPillsObs(this.facts.hangingPillsStatus),Object(u["d"])("Drug order has been created"),I["a"].invalidate("PATIENT_PROGRAM"),this.nextTask()},async onEvent(t,e){const n=Object(h["a"])(this.facts,E,t,e);for(const a in n){var i;const t=n[a];if(null!==t&&void 0!==t&&null!==(i=t.actions)&&void 0!==i&&i.alert){var r;const e=await(null===t||void 0===t||null===(r=t.actions)||void 0===r?void 0:r.alert(this.facts));if(e===s.EXIT)return!1}}return!0},onBuildOptions(t,e){const n=Object(h["a"])(this.facts,E,t,e);for(const i in n){const t=n[i];if(t.data)return t.data}return{}},async onRegimen({label:t,value:e,other:n}){this.facts.lpvType="",this.facts.hangingPillsStatus="",this.facts.starterPackNeeded=!1,this.facts.regimenName=`${e} (${t})`,this.facts.regimenCodeStr=e.toString(),this.facts.regimenCode=this.extractRegimenCode(e.toString()),this.facts.regimenDrugs=n.regimenDrugs,this.facts.drugs=n.regimenDrugs.map(t=>t.drug_id);const i=this.prescription.findAndGroupDrugSideEffects(this.facts.drugs);this.facts.hasSideEffects=!Object(p["isEmpty"])(i),this.facts.sideEffectsTable=this.buildSideEffectsTable(i)},async onBeforeRegimenNext(){const t=await this.onEvent(a.ARV_REGIMENS,o.BEFORE_NEXT);let e=[];return!!t&&(this.facts.lpvType?e=await this.getLpvDrugs():this.facts.starterPackNeeded?(e=await this.getStarterPackDrugs(),Object(p["isEmpty"])(e)&&(e=this.facts.regimenDrugs)):e=this.facts.regimenDrugs,this.drugs=[...this.regimenExtras,...e],!0)},getLpvDrugs(){return this.prescription.getLvpDrugsByType(this.facts.lpvType,this.facts.regimenCode)},resolveHtnDrugs(){try{const t=sessionStorage.getItem(_["b"].Prescription);if("string"===typeof t){const e=JSON.parse(t);if(Object(p["isPlainObject"])(e)&&e[this.patientID])return e[this.patientID]}}catch(t){console.warn(t)}return[]},getStarterPackDrugs(){return this.prescription.getRegimenStarterpack(this.facts.regimenCode,this.facts.weight)},setCustomDrugs(t){this.drugs=t.map(t=>t.other)},buildSideEffectsTable(t){const e=["Date","Contraindication(s)","Side effect(s)"],n=[];for(const i in t){const e=this.facts.contraindications[i]||[];n.push([g["c"].toStandardHisDisplayFormat(i),e.join(", "),t[i].join(", ")])}return{columns:e,rows:n}},async buildRegimenOptions(){const t=await this.prescription.getPatientRegimens(),e=[];for(const n in t){const i=t[n],r=i.map(t=>t.alternative_drug_name||t.concept_name).sort().join(" + ");e.push({label:r,value:n,other:{regimenDrugs:i}})}return e},buildIntervalOptions(){const t=[{label:"2 weeks",value:14},{label:"1 month",value:28},{label:"2 months",value:56},{label:"3 months",value:84},{label:"4 months",value:112},{label:"5 months",value:140},{label:"6 months",value:168},{label:"7 months",value:196},{label:"8 months",value:224},{label:"9 months",value:252},{label:"10 months",value:280},{label:"11 months",value:308},{label:"12 months",value:336}];return t.map(({label:t,value:e})=>{this.facts.selectedInterval=parseInt(e.toString());const n=this.onBuildOptions(a.INTERVAL_SELECTION,o.ON_BUILD);return{label:t,value:e,other:{...n,...this.getDrugEstimates(this.drugs,this.facts.selectedInterval)}}})},getDrugFrequency(t){this.facts.drug=t;const e=Object(h["a"])(this.facts,b);if(!Object(p["isEmpty"])(e))return e[0].concept},extractRegimenCode(t){try{return t.match(/n\/a/i)?-1:parseInt(t.substring(0,t.length))}catch(e){return console.warn(e),-1}},getDrugEstimates(t,e){this.prescription.setNextVisitInterval(e);const n=this.prescription.calculateDateFromInterval(),i=t.map(t=>{const e=this.prescription.getDrugPackSize(t),n=this.prescription.calculatePillsPerDay(t.am,t.noon,t.pm),i=this.prescription.estimatePackSize(n,e);return{label:t.alternative_drug_name||t.drug_name,value:i}});return{label:"Medication run-out date:",value:g["c"].toStandardHisDisplayFormat(n),other:{label:"Estimated packs/tins:",value:i}}},mapOrder(t){return t.map(t=>this.prescription.toOrderObj(t.drug_id,t.alternative_drug_name||t.drug_name,t.units,t.am,t.pm,t.frequency||this.getDrugFrequency(t.drug_name)))},async getPatientToolBar(){const t=await this.prescription.getReasonForRegimenSwitch();return[{label:"Age",value:this.patient.getAge()+" Year(s)"},{label:"Gender",value:this.patient.getGender()},{label:"Current Regimen",value:this.programInfo.current_regimen},{label:"Current weight",value:this.facts.weight+" kg(s)"||"Unknown"},{label:"Reason for change",value:t}]},getFields(){return[{id:a.ARV_REGIMENS,helpText:"ARV Regimen(s)",type:c["b"].TT_ART_REGIMEN_SELECTION,condition:()=>this.prescription.shouldPrescribeArvs(),validation:t=>d["a"].required(t),options:()=>this.buildRegimenOptions(),onload:()=>this.facts.prescriptionType="Regimen",onValue:t=>(this.onRegimen(t),this.onEvent(a.ARV_REGIMENS,o.ON_VALUE)),beforeNext:()=>this.onBeforeRegimenNext(),config:{toolbarInfo:this.patientToolbar,footerBtns:[{name:"Custom Regimen",slot:"end",onClick:()=>{this.fieldComponent="custom_regimen"}}]}},{id:"custom_regimen",helpText:"Custom prescription",type:c["b"].TT_MULTIPLE_SELECT,condition:()=>"Custom"===this.facts.prescriptionType,onload:()=>this.facts.prescriptionType="Custom",validation:t=>d["a"].required(t),options:async()=>{const t=await this.prescription.getCustomIngridients();return t.map(t=>({label:t.name,value:t.drug_id,other:{...t}}))},config:{showKeyboard:!0,hiddenFooterBtns:["Back"],footerBtns:[{name:"Standard Regimen",size:"large",slot:"end",color:"primary",visible:!1,visibleOnStateChange:t=>1===t.index,onClick:()=>{this.fieldComponent="arv_regimens"}}]}},{id:"custom_dosage",helpText:"Custom dose",type:c["b"].TT_DOSAGE_INPUT,condition:t=>!Object(p["isEmpty"])(t.custom_regimen),validation:t=>{if(d["a"].required(t))return["Drugs are not available"];const e=t.map(({other:t})=>t.am<=0&&t.pm<=0);return e.some(Boolean)?["Missing dosage configuration on some drugs"]:null},unload:t=>this.setCustomDrugs(t),summaryMapValue:({other:t})=>({label:"Dosages",value:this.prescription.getInstructions(t.drug_name,t.am,t.pm,t.units)}),options:t=>t.custom_regimen.map(t=>({label:t.label,value:t.value,other:{drug_id:t.other.drug_id,drug_name:t.label,barcodes:t.other.barcodes,units:t.other.units,am:0,noon:0,pm:0,frequency:this.getDrugFrequency(t.label)}}))},{id:"selected_meds",helpText:"Selected medication",type:c["b"].TT_DATA_TABLE,config:{toolbarInfo:this.patientToolbar,hiddenFooterBtns:["Clear"],dataTableConfig:{showIndex:!1},viewPortStyle:{height:"76vh"},columns:()=>[[v["a"].thTxt("Drug name",y),v["a"].thTxt("Units",y),v["a"].thTxt("AM",y),v["a"].thTxt("Noon",y),v["a"].thTxt("PM",y),v["a"].thTxt("Frequency",y)]],rows:()=>this.drugs.map(t=>{const e={style:{height:"6vh"},cssClass:(()=>{if(t.drug_name.match(/cotrimoxazole/i))return"adult-regimen-formulation";switch(t.regimen_category){case"A":return"adult-regimen-formulation";case"P":return"peads-regimen-formulation"}})()};return[v["a"].td(t.alternative_drug_name||t.drug_name,e),v["a"].td(t.units,e),v["a"].td(t.am,e),v["a"].td(t.noon,e),v["a"].td(t.pm,e),v["a"].td(t.frequency||this.getDrugFrequency(t.drug_name),e)]})}},{id:a.INTERVAL_SELECTION,helpText:"Interval to next visit",type:c["b"].TT_NEXT_VISIT_INTERVAL_SELECTION,validation:t=>d["a"].required(t),options:()=>this.buildIntervalOptions(),onValue:()=>this.onEvent(a.INTERVAL_SELECTION,o.ON_VALUE),beforeNext:()=>this.onEvent(a.INTERVAL_SELECTION,o.BEFORE_NEXT),config:{showRegimenCardTitle:!1}}]}}}),O=n("d959"),S=n.n(O);const C=S()(T,[["render",r]]);e["default"]=C},c21d:function(t,e,n){"use strict";function i(t,e){const n=[],i=[-1,"",null,void 0];for(const r in e){if(!(r in t))continue;const a=t[r];i.includes(a)?n.push(!1):n.push(e[r](a,t))}return n.every(Boolean)}function r(t){return t.sort((t,e)=>t.priority&&e.priority&&t.priority<e.priority?-1:1)}function a(t){return t.sort((t,e)=>t.weight&&e.weight&&t.weight>e.weight?-1:1)}function s(t,e,n="",s="",o="priority"){const c=[];for(const r in e){const a=e[r],o=[a.target&&n&&a.target!=n,a.targetEvent&&s&&a.targetEvent!=s];o.some(Boolean)||i(t,a.conditions)&&(a.title=r,a.description&&(a.description.text=a.description.info(t)),c.push(a))}return"priority"===o?r(c):a(c)}n.d(e,"a",(function(){return s}))},dac2:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i,r=n("71c3"),a=n("9283"),s=n("6d32"),o=n("2ef0"),c=n("cc6f");(function(t){t["CONTRAINDICATION"]="contraindication",t["SIDE_EFFECT"]="side_effect"})(i||(i={}));class d extends c["a"]{constructor(t,e){super(t,25,e),this.nextVisitInterval=0,this.fastTrack=!1,this.regimenExtras=[],this.fastTrackMedications=[],this.hangingPills=[],this.medicationOrders=[],this.treatmentState="",this.contraindications={},this.sideEffects={},this.tptPrescriptionCount=0,this.lastSideEffectDate=""}setNextVisitInterval(t){this.nextVisitInterval=t}getHangingPills(){return this.hangingPills}getMedicationOrders(){return this.medicationOrders.map(t=>c["a"].getCachedConceptName(t))}getTptPrescriptionCount(){return this.tptPrescriptionCount}getLastSideEffectDate(){return this.lastSideEffectDate}getContraindications(){return this.contraindications}getSideEffects(){return this.sideEffects}getRegimenExtras(){return this.regimenExtras}getPatientRegimens(){return s["a"].getRegimens(this.patientID)}getARVs(){return s["a"].getJson("arv_drugs")}getCustomIngridients(){return s["a"].getCustomIngridients()}getFastTrackMedications(){return this.fastTrackMedications}getTreatmentState(){return this.treatmentState}isFastTrack(){return this.fastTrack}medicationOrdersAvailable(){return!Object(o["isEmpty"])(this.medicationOrders)}shouldPrescribeArvs(){const t=c["a"].getCachedConceptID("Antiretroviral drugs");return this.medicationOrders.includes(t)}shouldPrescribeExtras(){const t=c["a"].getConceptsByCategory("art_extra_medication_order"),e=t.map(t=>this.medicationOrders.includes(t.concept_id));return e.some(Boolean)}getRegimenStarterpack(t,e){const n={weight:e,regimen:t};return c["a"].getJson(`programs/${c["a"].getProgramID()}/regimen_starter_packs`,n)}async getLvpDrugsByType(t,e){return c["a"].getJson(`programs/${c["a"].getProgramID()}/regimens/${e}`,{patient_id:this.patientID,lpv_drug_type:t})}async loadContraindications(){const t=await c["a"].getConceptID("Contraindications"),e=await c["a"].getObs({concept_id:t,person_id:this.patientID});e.forEach(t=>{const e=a["c"].toStandardHisFormat(t.obs_datetime);this.contraindications[e]||(this.contraindications[e]=[]);const n=c["a"].getCachedConceptName(t.value_coded);this.contraindications[e].push(n)})}async loadDrugInduced(){const t=await c["a"].getConceptID("Drug induced"),e=await c["a"].getObs({concept_id:t,person_id:this.patientID});e&&e.forEach(t=>{const e=a["c"].toStandardHisFormat(t.obs_datetime);if(this.lastSideEffectDate||(this.lastSideEffectDate=e),!t.value_drug||!t.value_coded)return;this.sideEffects[e]||(this.sideEffects[e]={}),this.sideEffects[e][t.value_drug]||(this.sideEffects[e][t.value_drug]=[]);const n=c["a"].getCachedConceptName(t.value_coded);this.sideEffects[e][t.value_drug].push(n)})}async loadTptPrescriptionCount(){const t=await c["a"].getJson("tpt_prescription_count",{patient_id:this.patientID,date:this.date});if(t){const e=t.count+1;this.tptPrescriptionCount=e>3?3:e}}async loadFastTrackStatus(){const t=await c["a"].getFirstValueCoded(this.patientID,"Fast track"),e=await c["a"].getConceptID("yes");t&&(this.fastTrack=t===e)}async loadRegimenExtras(t=this.date){const e=await s["a"].getJson(`programs/${s["a"].getProgramID()}/patients/${this.patientID}/dosages`,{date:t});e&&(this.regimenExtras=Object.values(e))}async loadMedicationOrders(){const t=await c["a"].getConceptID("Medication orders"),e=await c["a"].getObs({concept_id:t,date:this.date,person_id:this.patientID,page_size:5});this.medicationOrders=e.map(t=>t.value_coded)}async loadHangingPills(){const t=await c["a"].getAll(this.patientID,"Pills brought");t&&(this.hangingPills=t.filter(t=>t.value_numeric>=1&&t.order).map(t=>t.order.drug_order.drug_inventory_id))}async loadFastTrackMedications(){const t=await r["a"].getLastDrugsReceived(this.patientID),e=t.map(async t=>{const{drug:e}=t,n=await r["a"].getDrugDosages(this.patientID,e.drug_id);return{drug_id:e.drug_id,drug_name:e.name,units:e.units,am:n.am,noon:n.noon,pm:n.pm,frequency:t.frequency}});this.fastTrackMedications=await Promise.all(e)}async loadTreatmentState(){const t={date:this.date},e=await c["a"].getJson(`programs/${c["a"].getProgramID()}/patients/${this.patientID}/status`,t);e&&(this.treatmentState=e["status"])}findAndGroupDrugSideEffects(t){const e={};for(const n in this.sideEffects){const i=this.sideEffects[n];for(const r in i)t.includes(parseInt(r))&&(e[n]||(e[n]=[]),e[n]=[...e[n],...i[r]])}return e}calculatePillsPerDay(t,e,n){return parseFloat(t.toString())+e+n}estimatePackSize(t,e=0){const n=t*this.nextVisitInterval/e;let i=Math.round(n);return i<=0&&(i+=1),i}calculateDosage(t,e){let n=0;return 0===e&&(n=t),0==t&&(n=e),t>0&&e>0&&(n=(t+e)/2),n}calculateEquivalentDosage(t,e){return t+e}calculateDateFromInterval(){const t=new Date(this.date);return t.setDate(t.getDate()+this.nextVisitInterval),a["c"].toStandardHisFormat(t)}getDrugPackSize(t){if(t.pack_size)return t.pack_size;try{return t.barcodes[0].tabs}catch(e){return 30}}getInstructions(t,e,n,i){return`${t} :- Morning: ${e} ${i}, Evening: ${n} ${i}`}toOrderObj(t,e,n,i=0,r=0,a=""){return{drug_inventory_id:t,equivalent_daily_dose:this.calculateEquivalentDosage(i,r),start_date:this.date,auto_expire_date:this.calculateDateFromInterval(),units:n,instructions:this.getInstructions(e,i,r,n),dose:this.calculateDosage(i,r),frequency:a}}async getReasonForRegimenSwitch(){const t=await c["a"].getFirstValueText(this.patientID,"Reason for ARV switch");return t||"N/A"}async createDrugOrder(t){return r["a"].create({encounter_id:this.encounterID,drug_orders:t})}async createHangingPillsObs(t){return this.saveValueTextObs("appointment type",t)}async createRegimenSwitchObs(t){return this.saveValueTextObs("Reason for ARV switch",t)}}}}]);
//# sourceMappingURL=chunk-007f8d69.d366dd34.js.map