(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77bfe871"],{7365:function(e,t,n){"use strict";n("14d9"),n("13d5");var a,i=n("7a23"),r=n("ad60"),o=n("2ef0"),s=n("0fa1"),c=n("7f35"),l=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(a||(a={}));const u=e=>l["b"].toStandardHisDisplayFormat(e),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+u(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?a.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?a.CHANGE_PATIENT_OUTCOME:a.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${u(t)} is less than birth date of ${u(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?a.CHANGE_SESSION_DATE:a.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:i})=>{const r=await Object(c["c"])("Please select a provider for "+t,`BDE: ${u(n)} | Current: ${u(i)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===r.action?{value:-1,flowState:a.GO_TO_PATIENT_DASHBOARD}:{value:r.selection,flowState:a.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var h=n("c21d"),p=n("7920"),_=n("b5e4"),f=n("8e8b"),m=n("b432"),b=n("5a0c"),v=n.n(b),D=n("cc6f"),g=n("2ed9"),O=Object(i["defineComponent"])({components:{HisStandardForm:p["a"]},data:()=>({offlineID:null,patient:{},fields:[],patientID:"",providerID:-1,providers:[],encounterStartTime:null,facts:{npid:"",givenName:"",familyName:"",age:-1,gender:"",birthDate:"",birthEstimated:!1,sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,outcome:"",outcomeStartDate:"",village:"",district:"",currentTA:""},formLabel:"",ready:!1}),created(){this.$route.params.patient_id&&(this.offlineID=this.$route.params.patient_id,this.patientID=parseInt(""+this.$route.params.patient_id),this.goOffline()?this.initOfflineData():f["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,Object(o["isEmpty"])(this.patient)||Object(m["a"])().cachePatient(this.patient),this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0,this.setStartTime()}).catch(e=>console.log(e))}).catch(()=>{this.goOffline()&&this.initOfflineData()})}))},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{setStartTime(){this.encounterStartTime=(new Date).getTime()},goOffline(){return!m["c"].value||m["b"].value},isOnline(){return m["c"].value},isOfflineMode(){return m["b"].value},initOfflineData(){var e,t,n;const a=Object(m["a"])().findByID(this.offlineID),i=null===a||void 0===a||null===(e=a.personParams)||void 0===e?void 0:e.person;i&&(this.facts.birthDate=i.birthdate,this.facts.age=v()(r["a"].getSessionDate()).diff(this.facts.birthDate,"years"),this.facts.birthEstimated=(null===a||void 0===a||null===(t=a.personParams)||void 0===t?void 0:t.person.birthdate_estimated)||!1,this.facts.npid=null===a||void 0===a||null===(n=a.personParams)||void 0===n?void 0:n.npid,this.facts.givenName=i.given_name,this.facts.familyName=i.family_name,this.facts.district=i.current_district,this.facts.village=i.current_village,this.facts.currentTA=i.current_traditional_authority,this.facts.gender=i.gender,this.ready=!0,this.setStartTime())},async saveFormEncounterAndProceed(e={}){let t="Pending",n=!1,a=null;const i=(new Date).getTime(),r=(i-this.encounterStartTime)/1e3,o=r/60;try{const i=await D["a"].buildValueText("Device",Object(g["f"])()),r=await D["a"].buildValueNumber("Review Time",o);a=[...await this.resolveObs(e.computedData),i,r],Object(m["a"])().saveObsOffline({observations:a,id:this.offlineID,uploadStatus:t,encounterName:this.$route.name,encounterTypeID:e.encounterTypeID,meta:e.formData,labOrders:e.labOrders,created:n},n),Object(m["a"])().synchronizeRecord(this.offlineID),e.skipNextTask||this.nextOfflineFlow()}catch(s){return console.error(""+s),Object(_["e"])("Unable to resolve observations")}},runflowState(e,t=null){const n={};if(n[a.SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(o["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),a.CONTINUE},n[a.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),a.EXIT),n[a.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),a.EXIT),n[a.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),a.EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(h["a"])(this.facts,d);for(const o in e){var t,n;const s=e[o];if(null!==s&&void 0!==s&&null!==(t=s.actions)&&void 0!==t&&t.alert){var i;const e=this.runflowState(await(null===s||void 0===s||null===(i=s.actions)||void 0===i?void 0:i.alert(this.facts)));if(e===a.EXIT)return}if(null!==s&&void 0!==s&&null!==(n=s.actions)&&void 0!==n&&n.selection){var r;const e=await(null===s||void 0===s||null===(r=s.actions)||void 0===r?void 0:r.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await f["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=e.programID===r["a"].getProgramID(),this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(_["c"])(""+e)}this.facts.npid=this.patient.getNationalID(),this.facts.givenName=this.patient.getGivenName(),this.facts.familyName=this.patient.getFamilyName(),this.facts.currentTA=this.patient.getCurrentTA(),this.facts.district=this.patient.getCurrentDistrict(),this.facts.village=this.patient.getCurrentVillage(),this.facts.sessionDate=r["a"].getSessionDate(),this.facts.apiDate=r["a"].getCachedApiDate(),this.facts.isBdeMode=r["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.age=this.patient.getAge(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",r["a"].isBDE()&&(this.providers=await f["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),a=t.username.toUpperCase();return n<a?-1:n>a?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(o["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var a;const[t]=(null===(a=e.person)||void 0===a?void 0:a.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>"string"===typeof e||"number"===typeof e?{label:e,value:e}:e)},patientDashboardUrl(){return"/patient/dashboard/"+this.$route.params.patient_id},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},nextOfflineFlow(){const e=Object(m["a"])().nextPatientWorkflowActivity(this.patientID);return e&&e.patientUrl?this.$router.push(`${e.patientUrl}/${this.patientID}`):this.$router.push("/patient/dashboard/"+this.patientID)},async nextTask(){try{const e=this.offlineID||this.patientID;await Object(s["b"])(e,this.$router,this.$route)}catch(e){console.error("Workflow error "+e),this.gotoPatientDashboard()}},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},toConditionalOptions(e){const t=[];for(const n of e)("boolean"!==typeof n[1]||n[1])&&t.push(this.toOption(n[0]));return t},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const E=O;t["a"]=E},7920:function(e,t,n){"use strict";var a=n("7a23");function i(e,t,n,i,r,o){return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var r=n("9441"),o=Object(a["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:r["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=n("6b0d"),c=n.n(s);const l=c()(o,[["render",i]]);t["a"]=l},"8e3d":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return storageFactory}));var _home_andrew_dev_Projects_HIS_Core_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ade3"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2ef0"),lodash__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);const INDEX_STORE="openmrs",DB_NAME="offline_db",storageFactory=(storageName="IndexedDBStorage")=>eval(`new ${storageName}()`);class LocalStorage{existsinStorage(e){const t=localStorage.getItem(e);return t?Promise.resolve(!0):Promise.resolve(!1)}getFromStorage(e){return new Promise((t,n)=>{const a=localStorage.getItem(e);if(a)return t(JSON.parse(a));t([])})}deleteFromStorage(e){return localStorage.removeItem(e),!0}saveToStorage(e,t){return localStorage.setItem(e,JSON.stringify(t)),!0}}class IndexedDBStorage{constructor(){Object(_home_andrew_dev_Projects_HIS_Core_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this,"db",void 0);const e=indexedDB.open(DB_NAME,1);e.onupgradeneeded=function(){e.result.createObjectStore(INDEX_STORE)},e.onsuccess=()=>{this.db=e.result}}existsinStorage(e){return new Promise((t,n)=>{const a=this.db.transaction(INDEX_STORE).objectStore(INDEX_STORE).get(e);a.onsuccess=()=>{t(a.result)},a.onerror=()=>{n(a.error)}})}getFromStorage(e,t){return new Promise((n,a)=>{const i=this.db.transaction(INDEX_STORE).objectStore(INDEX_STORE).openCursor();i.onsuccess=()=>{const a=i.result;a?(a.key===e&&n(t?filteredData(a,t):a.value.data),a.continue()):n([])},i.onerror=()=>{a("error")}})}saveToStorage(e,t){return this.db.transaction(INDEX_STORE,"readwrite").objectStore(INDEX_STORE).put(t,e),!0}deleteFromStorage(e){return this.db.transaction(INDEX_STORE,"readwrite").objectStore(INDEX_STORE).delete(e),!0}}function filteredData(e,t){return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(e.value,e=>Object.entries(t).every(([t,n])=>Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isInteger"])(e[t])?!n||e[t]===n:!n||Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toLower"])(e[t]).includes(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toLower"])(n))))}},b805:function(e,t,n){"use strict";n.r(t);var a=n("7a23");function i(e,t,n,i,r,o){const s=Object(a["resolveComponent"])("his-standard-form");return Object(a["openBlock"])(),Object(a["createBlock"])(s,{cancelDestinationPath:e.cancelDestination,fields:e.fields,onFinishAction:e.onSubmit},null,8,["cancelDestinationPath","fields","onFinishAction"])}n("14d9");var r=n("7920"),o=n("7365"),s=n("cc6f");class c extends s["a"]{constructor(e,t){super(e,80,t)}}var l=n("2706"),u=n("d95e"),d=n("e86e"),h=n("b5e4"),p=Object(a["defineComponent"])({components:{HisStandardForm:r["a"]},mixins:[o["a"]],data:()=>({receptionService:{}}),watch:{ready:{async handler(e){e&&(this.receptionService=new c(this.patient.getID(),this.providerID),this.fields=this.getFields())},immediate:!0,deep:!0}},methods:{async onSubmit(e,t){const n=await this.receptionService.createEncounter();if(!n)return Object(h["e"])("Unable to create registration encounter");const a=await this.resolveObs({...t}),i=await this.receptionService.saveObservationList(a);if(!i)return Object(h["e"])("Unable to save observations");this.$router.push("/registration/encounters/patient_services/"+this.patientID)},getFields(){return[{id:"referral",helpText:"Is the Patient a Referral Case From Another Health Facility?",type:u["b"].TT_SELECT,validation:e=>l["a"].required(e),computedValue:e=>({obs:this.receptionService.buildValueCoded("Is patient referred?",e.value)}),options:()=>[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},{id:"referring_facility_name",helpText:"Referred from",type:u["b"].TT_SELECT,validation:e=>l["a"].required(e),computedValue:({label:e})=>({obs:this.receptionService.buildValueText("Referred from",e)}),condition:e=>"Yes"===e.referral.value,options:(e,t="")=>Object(d["b"])(t),config:{showKeyboard:!0,isFilterDataViaApi:!0}}]}}}),_=n("6b0d"),f=n.n(_);const m=f()(p,[["render",i]]);t["default"]=m},c21d:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("14d9");function a(e,t){const n=[],a=[-1,"",null,void 0];for(const i in t){if(!(i in e))continue;const r=e[i];a.includes(r)?n.push(!1):n.push(t[i](r,e))}return n.every(Boolean)}function i(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function r(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function o(e,t,n="",o="",s="priority"){const c=[];for(const i in t){const r=t[i],s=[r.target&&n&&r.target!=n,r.targetEvent&&o&&r.targetEvent!=o];s.some(Boolean)||a(e,r.conditions)&&(r.title=i,r.description&&(r.description.text=r.description.info(e)),c.push(r))}return"priority"===s?i(c):r(c)}},e86e:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return h})),n.d(t,"a",(function(){return p})),n.d(t,"g",(function(){return _})),n.d(t,"h",(function(){return f}));var a=n("5713"),i=n("8e3d"),r=n("13ea"),o=n.n(r);const s=Object(i["a"])();async function c(e=""){let t=await s.getFromStorage("locations",{name:e});return o()(t)&&(t=await a["a"].getFacilities({name:e})),t.filter(e=>!o()(e)&&""!=e.name.trim()).map(e=>({label:e.name,value:e.location_id,other:e}))}async function l(e=""){const t=await a["a"].getLabs({search_name:e});return t.map(e=>({label:e,value:e}))}async function u(e=""){const t=await a["a"].getFacilities({name:e,tag:"Facility adult sections"});return t.map(e=>({label:e.name,value:e.name,other:e}))}async function d(){const e=await a["a"].getSpecialistClinics();return e.map(e=>({label:e.name,value:e.name,other:e}))}async function h(){let e=await s.getFromStorage("regions",[]);return o()(e)&&(e=await a["a"].getRegions()),e.map(e=>({label:e.name,value:e.region_id,other:e}))}async function p(e){let t=await s.getFromStorage("districts",{region_id:e});return o()(t)&&(t=await a["a"].getDistricts(e)),t.map(e=>({label:e.name,value:e.district_id,other:e}))}async function _(e,t=""){let n=await s.getFromStorage("traditional_authorities",{district_id:e,name:t});return o()(n)&&(n=await a["a"].getTraditionalAuthorities(e,t)),n.map(e=>({label:e.name,value:e.traditional_authority_id,other:e}))}async function f(e,t=""){let n=await s.getFromStorage("villages",{traditional_authority_id:e,name:t});return o()(n)&&(n=await a["a"].getVillages(e,t)),n.map(e=>({label:e.name,value:e.village_id,other:e}))}}}]);
//# sourceMappingURL=chunk-77bfe871.3e18bcd3.js.map