(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d8a9648"],{"4fc0":function(t,e,i){"use strict";i.r(e);var n=i("7a23");function r(t,e,i,r,s,a){const o=Object(n["resolveComponent"])("his-standard-form");return Object(n["openBlock"])(),Object(n["createBlock"])(o,{skipSummary:!0,cancelDestinationPath:t.cancelDestination,fields:t.fields},null,8,["cancelDestinationPath","fields"])}var s=i("d95e"),a=i("b5e4"),o=i("ade3"),c=i("cc6f"),d=i("71c3");class u extends c["a"]{constructor(t,e){super(t,54,e),Object(o["a"])(this,"drugHistory",void 0),Object(o["a"])(this,"currentDrugOrder",void 0),this.drugHistory=[],this.currentDrugOrder=[]}getDrugHistory(){return this.drugHistory}getCurrentOrder(){return this.currentDrugOrder}buildDispensations(t,e){return[{drug_order_id:t,date:this.date,quantity:e}]}saveDispensations(t){return c["a"].postJson("/dispensations",{dispensations:t,program_id:c["a"].getProgramID()})}async voidOrder(t){return c["a"].void("/dispensations/"+t,{})}async loadDrugHistory(){const t=await d["a"].getDrugOrderHistory(this.patientID);t&&(this.drugHistory=t)}async loadCurrentDrugOrder(){const t=await d["a"].getDrugOrders(this.patientID);t&&(this.currentDrugOrder=await Promise.all(t))}calcCompletePack(t,e){const i=t.barcodes.sort((function(t,e){return t.tabs-e.tabs}));if(0==i.length||0==e)return e;for(let s=0;s<=i.length-1;s++)if(parseInt(i[s].tabs)>=e)return i[s].tabs;const n=parseInt(i[0].tabs);let r=parseInt(i[i.length-1].tabs);while(r<e)r+=n;return r}}var l=i("7365"),h=i("9283"),p=Object(n["defineComponent"])({mixins:[l["a"]],data:()=>({dispensation:{}}),watch:{patient:{async handler(t){this.dispensation=new u(t.getID(),this.providerID),await this.dispensation.loadCurrentDrugOrder(),await this.dispensation.loadDrugHistory(),this.fields=this.getFields()},deep:!0}},methods:{saveDispensations(t){const e=this.buildDispensations(t);return this.dispensation.saveDispensations(e)},buildDispensations(t){return this.dispensation.buildDispensations(t.other.order_id,t.value)},buildMedicationHistory(){return this.dispensation.getDrugHistory().sort((t,e)=>{const i=new Date(t.order.start_date),n=new Date(e.order.start_date);return n-i}).map(t=>({medication:t.drug.name,date:h["b"].toStandardHisDisplayFormat(t.order.start_date),amount:t.quantity}))},buildOrderOptions(){return this.dispensation.getCurrentOrder().map(t=>({label:t.drug.name,value:t.quantity||0,other:{drug_id:t.drug.drug_id,order_id:t.order.order_id,amount_needed:this.calculateCompletePack(t)}}))},getPackSizesRows(t,e){const i=this.dispensation.getDrugPackSizes(t);return i.map(t=>{const i=e>0?e/t:"-";return[t,i,0,0]})},calculateCompletePack(t){const e=parseFloat(t.amount_needed)-(t.quantity||0),i=this.dispensation.calcCompletePack(t,e);return i<0?0:i},isDoneDispensing(t){return t.map(t=>0!=t.value).every(Boolean)},async isValidDispensation(t){let e=!0;const i=parseInt(t.value.toString()),n=t.other["amount_needed"],r=i/n*100;return r>110&&(e=await Object(a["a"])("Are you sure you want to dispense over 110% of the prescribed pill count?")),r<100&&(e=await Object(a["a"])("Are you sure you want to dispense less than 100% of the prescribe amount?")),e},getFields(){return[{id:"dispenses",helpText:"Dispensation",type:s["b"].TT_DRUG_DISPENSER,onValueUpdate:async(t,e)=>-1!=t.value&&this.isDoneDispensing(e)?this.gotoPatientDashboard():(t.other["amount_needed"]=0,await this.dispensation.loadCurrentDrugOrder(),this.buildOrderOptions()),onValue:async(t,e)=>{if(-1===t.value){const e=await this.dispensation.voidOrder(t.other.order_id);return!!e}if(!e){const e=await this.isValidDispensation(t);if(!e)return!1}const i=await this.saveDispensations(t);return!!i||(Object(a["e"])("Unable to save dispensation"),!1)},config:{medicationHistory:this.buildMedicationHistory(),toolbarInfo:[{label:"Name",value:this.patient.getFullName()},{label:"Gender",value:this.patient.getGender()},{label:"Date Of Birth",value:h["b"].toStandardHisDisplayFormat(this.patient.getBirthdate())}],hiddenFooterBtns:["Clear","Finish"]},options:()=>this.buildOrderOptions()}]}}}),g=i("d959"),f=i.n(g);const D=f()(p,[["render",r]]);e["default"]=D},"71c3":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("1c74");class r extends n["e"]{constructor(){super()}static create(t){return this.postJson("drug_orders",t)}static updateDispensationOrders(t){return this.postJson("dispensations",{program_id:this.getProgramID(),dispensations:t.map(t=>({date:this.getSessionDate(),drug_order_id:t["order_id"],quantity:t["quantity"]}))})}static getDrugOrderHistory(t){return this.getJson("drug_orders",{patient_id:t})}static getDrugOrders(t){return this.getJson("drug_orders",{patient_id:t,date:this.getSessionDate(),program_id:this.getProgramID()})}static getAllDrugOrders(t,e=1e3){return this.getJson("drug_orders",{patient_id:t,program_id:n["e"].getProgramID(),page_size:e})}static getLastDrugsReceived(t){return this.getJson(`patients/${t}/last_drugs_received`,{date:this.getSessionDate(),program_id:this.getProgramID()})}static getDrugDosages(t,e,i=this.getSessionDate()){const n={drug_id:e,date:i};return this.getJson(`programs/${this.getProgramID()}/patients/${t}/drug_doses`,n)}static getOrderByPatient(t,e){return this.getJson("/drug_orders",{patient_id:t,program_id:this.getProgramID(),...e})}}},7365:function(t,e,i){"use strict";i("14d9"),i("13d5");var n,r=i("7a23"),s=i("ad60"),a=i("2ef0"),o=i("0fa1"),c=i("7f35"),d=i("9283");(function(t){t["SET_PROVIDER"]="SET_PROVIDER",t["CHANGE_SESSION_DATE"]="change_session_date",t["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",t["CHANGE_PATIENT_OUTCOME"]="change_outcome",t["CONTINUE"]="continue",t["EXIT"]="exit"})(n||(n={}));const u=t=>d["b"].toStandardHisDisplayFormat(t),l={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:t})=>{const e=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+u(t),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===e?n.GO_TO_PATIENT_DASHBOARD:"Change outcome"===e?n.CHANGE_PATIENT_OUTCOME:n.CONTINUE}},conditions:{outcome(t){return"Patient died"===t},outcomeStartDate(t,{sessionDate:e}){return e>=t}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:t,sessionDate:e})=>{const i=await Object(c["a"])("Data integrity issue found","",`Session date ${u(e)} is less than birth date of ${u(t)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===i?n.CHANGE_SESSION_DATE:n.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(t,{sessionDate:e}){return e<t}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:t,encounterName:e,sessionDate:i,apiDate:r})=>{const s=await Object(c["c"])("Please select a provider for "+e,`BDE: ${u(i)} | Current: ${u(r)}`,t,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===s.action?{value:-1,flowState:n.GO_TO_PATIENT_DASHBOARD}:{value:s.selection,flowState:n.SET_PROVIDER}}},conditions:{isBdeMode(t){return t}}}};var h=i("c21d"),p=i("7920"),g=i("b5e4"),f=i("8e8b"),D=i("b432"),m=i("5a0c"),O=i.n(m),b=i("cc6f"),v=i("2ed9"),y=Object(r["defineComponent"])({components:{HisStandardForm:p["a"]},data:()=>({offlineID:null,patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{age:-1,gender:"",birthDate:"",sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,outcome:"",outcomeStartDate:"",village:"",district:"",currentTA:""},formLabel:"",ready:!1}),created(){this.$route.params.patient_id&&(this.offlineID=this.$route.params.patient_id,this.patientID=parseInt(""+this.$route.params.patient_id),this.goOffline()?this.initOfflineData():f["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(t=>{this.patient=t,Object(a["isEmpty"])(this.patient)||Object(D["a"])().cachePatient(this.patient),this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0}).catch(t=>console.log(t))}).catch(()=>{this.goOffline()&&this.initOfflineData()})}))},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{goOffline(){return!D["c"].value||D["b"].value},isOnline(){return D["c"].value},isOfflineMode(){return D["b"].value},initOfflineData(){var t;const e=Object(D["a"])().findByID(this.offlineID),i=null===e||void 0===e||null===(t=e.personParams)||void 0===t?void 0:t.person;i&&(this.facts.birthDate=i.birthdate,this.facts.age=O()(s["a"].getSessionDate()).diff(this.facts.birthDate,"years"),this.facts.district=i.current_district,this.facts.village=i.current_village,this.facts.currentTA=i.current_traditional_authority,this.facts.gender=i.gender,this.ready=!0)},async saveFormEncounterAndProceed(t={}){let e="Pending",i=!1,n=null;try{const e=await b["a"].buildValueText("Device",Object(v["f"])());n=[...await this.resolveObs(t.computedData),e]}catch(r){return console.error(""+r),Object(g["e"])("Unable to resolve observations")}if(!this.isOfflineMode()){try{const r=new b["a"](this.patientID,t.encounterTypeID,this.providerID);await r.createEncounter()&&await r.saveObservationList(n)&&(e="Success",i=!0),"function"===typeof t.callback&&await t.callback(r)}catch(r){i=!1,/NetworkError|Failed to fetch/i.test(""+r)?e="NetworkError":(e="Exception",console.error("Exception while saving an encounter: "+r))}if("Exception"===e)return Object(g["c"])("An error has occured!")}Object(D["a"])().saveObsOffline({observations:n,id:this.offlineID,uploadStatus:e,encounterName:this.$route.name,encounterTypeID:t.encounterTypeID,meta:t.formData,labOrders:t.labOrders,created:i}),t.skipNextTask||this.nextTask()},runflowState(t,e=null){const i={};if(i[n.SET_PROVIDER]=t=>{const[e]=t.split(" "),i=Object(a["find"])(this.providers,{username:e});return i&&(this.providerID=i.person_id),n.CONTINUE},i[n.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),n.EXIT),i[n.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),n.EXIT),i[n.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),n.EXIT),t in i)return i[t](e)},async checkEncounterGuidelines(){const t=Object(h["a"])(this.facts,l);for(const a in t){var e,i;const o=t[a];if(null!==o&&void 0!==o&&null!==(e=o.actions)&&void 0!==e&&e.alert){var r;const t=this.runflowState(await(null===o||void 0===o||null===(r=o.actions)||void 0===r?void 0:r.alert(this.facts)));if(t===n.EXIT)return}if(null!==o&&void 0!==o&&null!==(i=o.actions)&&void 0!==i&&i.selection){var s;const t=await(null===o||void 0===o||null===(s=o.actions)||void 0===s?void 0:s.selection(this.facts));this.runflowState(t.flowState,t.value)}}},async setEncounterFacts(){try{const t=await f["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=t.programID===s["a"].getProgramID(),this.facts.outcome=t.outcome,this.facts.outcomeStartDate=t.startDate}catch(t){console.error(t),Object(g["c"])(""+t)}this.facts.currentTA=this.patient.getCurrentTA(),this.facts.district=this.patient.getCurrentDistrict(),this.facts.village=this.patient.getCurrentVillage(),this.facts.sessionDate=s["a"].getSessionDate(),this.facts.apiDate=s["a"].getCachedApiDate(),this.facts.isBdeMode=s["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.age=this.patient.getAge(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",s["a"].isBDE()&&(this.providers=await f["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((t,e)=>{const i=t.username.toUpperCase(),n=e.username.toUpperCase();return i<n?-1:i>n?1:0}).map(t=>{var e;let i=""+t.username;if(!Object(a["isEmpty"])(null===t||void 0===t||null===(e=t.person)||void 0===e?void 0:e.names)){var n;const[e]=(null===(n=t.person)||void 0===n?void 0:n.names)||[];i+=` (${e.given_name} ${e.family_name})`}return i}))},toOption(t,e={}){return{label:t,value:t,other:e}},mapStrToOptions(t){return t.map(t=>"string"===typeof t||"number"===typeof t?{label:t,value:t}:t)},patientDashboardUrl(){return"/patient/dashboard/"+this.$route.params.patient_id},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){try{const t=this.offlineID||this.patientID;await Object(o["b"])(t,this.$router,this.$route)}catch(t){console.error("Workflow error "+t),this.gotoPatientDashboard()}},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(t,e={}){return{label:t,value:"",other:{...e,values:this.yesNoOptions()}}},mapOptions(t){return t.map(t=>({label:t,value:t}))},toConditionalOptions(t){const e=[];for(const i of t)("boolean"!==typeof i[1]||i[1])&&e.push(this.toOption(i[0]));return e},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(t,e=""){const i=Object.values(t).filter(t=>t&&(t.tag===e||""===e)).reduce((t,e)=>{const i=e.obs?e.obs:e;return Array.isArray(i)?t=t.concat(i):"function"===typeof i?t.push(i()):t.push(i),t},[]);return Promise.all(i)},inArray(t,e){try{return t.filter(t=>e(t)).length>0}catch(i){return!1}},validateSeries(t){try{for(const e in t){const i=t[e]();if(i)return i}}catch(e){return[e]}}}});const _=y;e["a"]=_},7920:function(t,e,i){"use strict";var n=i("7a23");function r(t,e,i,r,s,a){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(t.formType),{fields:t.fields,skipSummary:t.skipSummary,activeField:t.activeField,cancelDestinationPath:t.cancelDestinationPath,onOnFinish:t.onFinish,onFinish:t.onFinishAction,onOnIndex:t.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var s=i("9441"),a=Object(n["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:s["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(t,e){this.$emit("onFinish",t,e)},onIndex(t){this.$emit("onIndex",t)}}}),o=i("d959"),c=i.n(o);const d=c()(a,[["render",r]]);e["a"]=d},c21d:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i("14d9");function n(t,e){const i=[],n=[-1,"",null,void 0];for(const r in e){if(!(r in t))continue;const s=t[r];n.includes(s)?i.push(!1):i.push(e[r](s,t))}return i.every(Boolean)}function r(t){return t.sort((t,e)=>t.priority&&e.priority&&t.priority<e.priority?-1:1)}function s(t){return t.sort((t,e)=>t.weight&&e.weight&&t.weight>e.weight?-1:1)}function a(t,e,i="",a="",o="priority"){const c=[];for(const r in e){const s=e[r],o=[s.target&&i&&s.target!=i,s.targetEvent&&a&&s.targetEvent!=a];o.some(Boolean)||n(t,s.conditions)&&(s.title=r,s.description&&(s.description.text=s.description.info(t)),c.push(s))}return"priority"===o?r(c):s(c)}}}]);
//# sourceMappingURL=chunk-0d8a9648.d90b0c49.js.map