(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a19e2a2"],{"68cb":function(e,t,n){"use strict";n.r(t);var i=n("7a23");function a(e,t,n,a,s,o){const r=Object(i["resolveComponent"])("his-standard-form"),c=Object(i["resolveComponent"])("ion-page");return Object(i["openBlock"])(),Object(i["createBlock"])(c,null,{default:Object(i["withCtx"])(()=>[Object(i["createVNode"])(r,{formLabel:"DBS Order",fields:e.fields,onFinishAction:e.onFinish,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}var s=n("7365"),o=n("d95e"),r=n("d867"),c=n("0cb1"),l=n("9b7c"),d=n("cc6f");class u extends d["a"]{constructor(e,t=-1){super(e,199,t)}}var h=n("7957"),p=n("9283"),f=Object(i["defineComponent"])({components:{IonPage:r["D"]},mixins:[s["a"]],data:()=>({service:{},hivGroup:null}),watch:{ready:{async handler(e){e&&(this.service=new u(this.patientID,this.providerID),this.hivGroup=await h["a"].getFirstObsValue(this.patientID,"HIV group","value_coded"),this.fields=[this.isDBSsampleCollected(),this.dbsSpecimenID()])},immediate:!0}},methods:{onFinish(e,t){let n=void 0;"Yes"===e.dbs_sample_collection&&(n=this.buildDBSOrder(e.dbs_specimen_id)),this.saveFormEncounterAndProceed({encounterTypeID:this.service.encounterTypeID,formData:e,computedData:t,labOrders:n,callback:async()=>{n&&await this.createDBSOrder(e.dbs_specimen_id)}})},buildDBSOrder(e){const t=p["b"].getAgeInYears(this.facts.birthDate);let n;return n=t<1||"Inconclusive Re-test"==this.hivGroup?844:u.getCachedConceptID("HIV viral load"),[{concept_id:n,specimenConcept:u.getCachedConceptID("DBS (Free drop to DBS card)",!0),accessionNumber:e,reason:"Routine"}]},async createDBSOrder(e){const t=new c["a"](this.patientID,this.providerID),n=await t.createEncounter();if(n){const t=l["a"].buildLabOrders(n,this.buildDBSOrder(e));await l["a"].saveOrdersArray(null===n||void 0===n?void 0:n.encounter_id,t)}},isDBSsampleCollected(){let e="DBS Sample";const t=p["b"].getAgeInYears(this.facts.birthDate);return"Inconclusive Re-test"==this.hivGroup&&(e="DBS Sample for Incoclusive Re-test"),t<1&&(e="DBS Sample (EID)"),t<1&&(e="DBS Sample (EID)"),{id:"dbs_sample_collection",helpText:e,type:o["b"].TT_YES_NO,isRequired:()=>!0,finalComputedValue:e=>({obs:this.service.buildValueCoded("Is DBS Sample Collected",e)}),options:()=>[{label:"Is DBS Sample Collected?",value:"",values:this.yesNoOptions()}]}},dbsSpecimenID(){return{id:"dbs_specimen_id",helpText:"DBS Specimen ID",type:o["b"].TT_BARCODE,requireNext:!1,condition:e=>/yes/i.test(""+e.dbs_sample_collection),finalComputedValue:e=>({obs:this.service.buildValueText("DBS Specimen ID",""+e)}),config:{hiddenFooterBtns:["Clear"]},isRequired:()=>!0}}}}),m=n("6b0d"),D=n.n(m);const b=D()(f,[["render",a]]);t["default"]=b},7365:function(e,t,n){"use strict";n("14d9"),n("13d5");var i,a=n("7a23"),s=n("ad60"),o=n("2ef0"),r=n("0fa1"),c=n("7f35"),l=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(i||(i={}));const d=e=>l["b"].toStandardHisDisplayFormat(e),u={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+d(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?i.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?i.CHANGE_PATIENT_OUTCOME:i.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${d(t)} is less than birth date of ${d(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?i.CHANGE_SESSION_DATE:i.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:a})=>{const s=await Object(c["c"])("Please select a provider for "+t,`BDE: ${d(n)} | Current: ${d(a)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===s.action?{value:-1,flowState:i.GO_TO_PATIENT_DASHBOARD}:{value:s.selection,flowState:i.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var h=n("c21d"),p=n("7920"),f=n("b5e4"),m=n("8e8b"),D=n("b432"),b=n("5a0c"),v=n.n(b),O=n("cc6f"),I=n("2ed9"),S=Object(a["defineComponent"])({components:{HisStandardForm:p["a"]},data:()=>({offlineID:null,patient:{},fields:[],patientID:"",providerID:-1,providers:[],encounterStartTime:null,facts:{age:-1,gender:"",birthDate:"",sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,outcome:"",outcomeStartDate:"",village:"",district:"",currentTA:""},formLabel:"",ready:!1}),created(){this.$route.params.patient_id&&(this.offlineID=this.$route.params.patient_id,this.patientID=parseInt(""+this.$route.params.patient_id),this.goOffline()?this.initOfflineData():m["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,Object(o["isEmpty"])(this.patient)||Object(D["a"])().cachePatient(this.patient),this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0,this.setStartTime()}).catch(e=>console.log(e))}).catch(()=>{this.goOffline()&&this.initOfflineData()})}))},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{setStartTime(){this.encounterStartTime=(new Date).getTime()},goOffline(){return!D["c"].value||D["b"].value},isOnline(){return D["c"].value},isOfflineMode(){return D["b"].value},initOfflineData(){var e;const t=Object(D["a"])().findByID(this.offlineID),n=null===t||void 0===t||null===(e=t.personParams)||void 0===e?void 0:e.person;n&&(this.facts.birthDate=n.birthdate,this.facts.age=v()(s["a"].getSessionDate()).diff(this.facts.birthDate,"years"),this.facts.district=n.current_district,this.facts.village=n.current_village,this.facts.currentTA=n.current_traditional_authority,this.facts.gender=n.gender,this.ready=!0,this.setStartTime())},async saveFormEncounterAndProceed(e={}){let t="Pending",n=!1,i=null;const a=(new Date).getTime(),s=(a-this.encounterStartTime)/1e3,o=s/60;try{const t=await O["a"].buildValueText("Device",Object(I["f"])()),n=await O["a"].buildValueNumber("Review Time",o);i=[...await this.resolveObs(e.computedData),t,n]}catch(r){return console.error(""+r),Object(f["e"])("Unable to resolve observations")}if(!this.isOfflineMode()){try{const a=new O["a"](this.patientID,e.encounterTypeID,this.providerID);await a.createEncounter()&&await a.saveObservationList(i)&&(t="Success"),"function"===typeof e.callback&&await e.callback(a),n=!0}catch(r){n=!1,/NetworkError|Failed to fetch/i.test(""+r)?t="NetworkError":(t="Exception",console.error("Exception while saving an encounter: "+r))}if("Exception"===t)return Object(f["c"])("An error has occured!")}Object(D["a"])().saveObsOffline({observations:i,id:this.offlineID,uploadStatus:t,encounterName:this.$route.name,encounterTypeID:e.encounterTypeID,meta:e.formData,labOrders:e.labOrders,created:n},n),e.skipNextTask||this.nextTask()},runflowState(e,t=null){const n={};if(n[i.SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(o["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),i.CONTINUE},n[i.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),i.EXIT),n[i.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),i.EXIT),n[i.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),i.EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(h["a"])(this.facts,u);for(const o in e){var t,n;const r=e[o];if(null!==r&&void 0!==r&&null!==(t=r.actions)&&void 0!==t&&t.alert){var a;const e=this.runflowState(await(null===r||void 0===r||null===(a=r.actions)||void 0===a?void 0:a.alert(this.facts)));if(e===i.EXIT)return}if(null!==r&&void 0!==r&&null!==(n=r.actions)&&void 0!==n&&n.selection){var s;const e=await(null===r||void 0===r||null===(s=r.actions)||void 0===s?void 0:s.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await m["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=e.programID===s["a"].getProgramID(),this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(f["c"])(""+e)}this.facts.currentTA=this.patient.getCurrentTA(),this.facts.district=this.patient.getCurrentDistrict(),this.facts.village=this.patient.getCurrentVillage(),this.facts.sessionDate=s["a"].getSessionDate(),this.facts.apiDate=s["a"].getCachedApiDate(),this.facts.isBdeMode=s["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.age=this.patient.getAge(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",s["a"].isBDE()&&(this.providers=await m["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),i=t.username.toUpperCase();return n<i?-1:n>i?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(o["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var i;const[t]=(null===(i=e.person)||void 0===i?void 0:i.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>"string"===typeof e||"number"===typeof e?{label:e,value:e}:e)},patientDashboardUrl(){return"/patient/dashboard/"+this.$route.params.patient_id},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){try{const e=this.offlineID||this.patientID;await Object(r["b"])(e,this.$router,this.$route)}catch(e){console.error("Workflow error "+e),this.gotoPatientDashboard()}},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},toConditionalOptions(e){const t=[];for(const n of e)("boolean"!==typeof n[1]||n[1])&&t.push(this.toOption(n[0]));return t},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const g=S;t["a"]=g},7920:function(e,t,n){"use strict";var i=n("7a23");function a(e,t,n,a,s,o){return Object(i["openBlock"])(),Object(i["createBlock"])(Object(i["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var s=n("9441"),o=Object(i["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:s["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),r=n("6b0d"),c=n.n(r);const l=c()(o,[["render",a]]);t["a"]=l},c21d:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("14d9");function i(e,t){const n=[],i=[-1,"",null,void 0];for(const a in t){if(!(a in e))continue;const s=e[a];i.includes(s)?n.push(!1):n.push(t[a](s,e))}return n.every(Boolean)}function a(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function s(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function o(e,t,n="",o="",r="priority"){const c=[];for(const a in t){const s=t[a],r=[s.target&&n&&s.target!=n,s.targetEvent&&o&&s.targetEvent!=o];r.some(Boolean)||i(e,s.conditions)&&(s.title=a,s.description&&(s.description.text=s.description.info(e)),c.push(s))}return"priority"===r?a(c):s(c)}}}]);
//# sourceMappingURL=chunk-2a19e2a2.9a229b0a.js.map