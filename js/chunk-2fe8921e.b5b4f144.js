(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fe8921e"],{7365:function(e,t,a){"use strict";a("14d9"),a("13d5");var n,i=a("7a23"),o=a("ad60"),r=a("2ef0"),s=a("0fa1"),c=a("7f35"),l=a("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(n||(n={}));const u=e=>l["b"].toStandardHisDisplayFormat(e),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+u(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?n.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?n.CHANGE_PATIENT_OUTCOME:n.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const a=await Object(c["a"])("Data integrity issue found","",`Session date ${u(t)} is less than birth date of ${u(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===a?n.CHANGE_SESSION_DATE:n.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:a,apiDate:i})=>{const o=await Object(c["c"])("Please select a provider for "+t,`BDE: ${u(a)} | Current: ${u(i)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===o.action?{value:-1,flowState:n.GO_TO_PATIENT_DASHBOARD}:{value:o.selection,flowState:n.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var h=a("c21d"),_=a("7920"),p=a("b5e4"),m=a("8e8b"),f=a("b432"),v=a("5a0c"),b=a.n(v),D=a("cc6f"),g=a("2ed9"),O=Object(i["defineComponent"])({components:{HisStandardForm:_["a"]},data:()=>({offlineID:null,patient:{},fields:[],patientID:"",providerID:-1,providers:[],encounterStartTime:null,facts:{age:-1,gender:"",birthDate:"",sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,outcome:"",outcomeStartDate:"",village:"",district:"",currentTA:""},formLabel:"",ready:!1}),created(){this.$route.params.patient_id&&(this.offlineID=this.$route.params.patient_id,this.patientID=parseInt(""+this.$route.params.patient_id),this.goOffline()?this.initOfflineData():m["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,Object(r["isEmpty"])(this.patient)||Object(f["a"])().cachePatient(this.patient),this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0,this.setStartTime()}).catch(e=>console.log(e))}).catch(()=>{this.goOffline()&&this.initOfflineData()})}))},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{setStartTime(){this.encounterStartTime=(new Date).getTime()},goOffline(){return!f["c"].value||f["b"].value},isOnline(){return f["c"].value},isOfflineMode(){return f["b"].value},initOfflineData(){var e;const t=Object(f["a"])().findByID(this.offlineID),a=null===t||void 0===t||null===(e=t.personParams)||void 0===e?void 0:e.person;a&&(this.facts.birthDate=a.birthdate,this.facts.age=b()(o["a"].getSessionDate()).diff(this.facts.birthDate,"years"),this.facts.district=a.current_district,this.facts.village=a.current_village,this.facts.currentTA=a.current_traditional_authority,this.facts.gender=a.gender,this.ready=!0,this.setStartTime())},async saveFormEncounterAndProceed(e={}){let t="Pending",a=!1,n=null;const i=(new Date).getTime(),o=(i-this.encounterStartTime)/1e3,r=o/60;try{const t=await D["a"].buildValueText("Device",Object(g["f"])()),a=await D["a"].buildValueNumber("Review Time",r);n=[...await this.resolveObs(e.computedData),t,a]}catch(s){return console.error(""+s),Object(p["e"])("Unable to resolve observations")}if(!this.isOfflineMode()){try{const i=new D["a"](this.patientID,e.encounterTypeID,this.providerID);await i.createEncounter()&&await i.saveObservationList(n)&&(t="Success"),"function"===typeof e.callback&&await e.callback(i),a=!0}catch(s){a=!1,/NetworkError|Failed to fetch/i.test(""+s)?t="NetworkError":(t="Exception",console.error("Exception while saving an encounter: "+s))}if("Exception"===t)return Object(p["c"])("An error has occured!")}Object(f["a"])().saveObsOffline({observations:n,id:this.offlineID,uploadStatus:t,encounterName:this.$route.name,encounterTypeID:e.encounterTypeID,meta:e.formData,labOrders:e.labOrders,created:a},a),e.skipNextTask||this.nextTask()},runflowState(e,t=null){const a={};if(a[n.SET_PROVIDER]=e=>{const[t]=e.split(" "),a=Object(r["find"])(this.providers,{username:t});return a&&(this.providerID=a.person_id),n.CONTINUE},a[n.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),n.EXIT),a[n.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),n.EXIT),a[n.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),n.EXIT),e in a)return a[e](t)},async checkEncounterGuidelines(){const e=Object(h["a"])(this.facts,d);for(const r in e){var t,a;const s=e[r];if(null!==s&&void 0!==s&&null!==(t=s.actions)&&void 0!==t&&t.alert){var i;const e=this.runflowState(await(null===s||void 0===s||null===(i=s.actions)||void 0===i?void 0:i.alert(this.facts)));if(e===n.EXIT)return}if(null!==s&&void 0!==s&&null!==(a=s.actions)&&void 0!==a&&a.selection){var o;const e=await(null===s||void 0===s||null===(o=s.actions)||void 0===o?void 0:o.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await m["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=e.programID===o["a"].getProgramID(),this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(p["c"])(""+e)}this.facts.currentTA=this.patient.getCurrentTA(),this.facts.district=this.patient.getCurrentDistrict(),this.facts.village=this.patient.getCurrentVillage(),this.facts.sessionDate=o["a"].getSessionDate(),this.facts.apiDate=o["a"].getCachedApiDate(),this.facts.isBdeMode=o["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.age=this.patient.getAge(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",o["a"].isBDE()&&(this.providers=await m["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const a=e.username.toUpperCase(),n=t.username.toUpperCase();return a<n?-1:a>n?1:0}).map(e=>{var t;let a=""+e.username;if(!Object(r["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var n;const[t]=(null===(n=e.person)||void 0===n?void 0:n.names)||[];a+=` (${t.given_name} ${t.family_name})`}return a}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>"string"===typeof e||"number"===typeof e?{label:e,value:e}:e)},patientDashboardUrl(){return"/patient/dashboard/"+this.$route.params.patient_id},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){try{const e=this.offlineID||this.patientID;await Object(s["b"])(e,this.$router,this.$route)}catch(e){console.error("Workflow error "+e),this.gotoPatientDashboard()}},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},toConditionalOptions(e){const t=[];for(const a of e)("boolean"!==typeof a[1]||a[1])&&t.push(this.toOption(a[0]));return t},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const a=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const a=t.obs?t.obs:t;return Array.isArray(a)?e=e.concat(a):"function"===typeof a?e.push(a()):e.push(a),e},[]);return Promise.all(a)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(a){return!1}},validateSeries(e){try{for(const t in e){const a=e[t]();if(a)return a}}catch(t){return[t]}}}});const E=O;t["a"]=E},7920:function(e,t,a){"use strict";var n=a("7a23");function i(e,t,a,i,o,r){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var o=a("9441"),r=Object(n["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:o["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=a("6b0d"),c=a.n(s);const l=c()(r,[["render",i]]);t["a"]=l},8652:function(e,t,a){"use strict";a.r(t);var n=a("7a23");function i(e,t,a,i,o,r){const s=Object(n["resolveComponent"])("his-standard-form");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{cancelDestinationPath:e.cancelDestination,fields:e.fields,onFinishAction:e.onSubmit},null,8,["cancelDestinationPath","fields","onFinishAction"])}var o=a("7920"),r=a("7365"),s=a("2706"),c=a("d95e"),l=a("e86e"),u=a("b446"),d=a("b5e4"),h=a("cc6f");class _ extends h["a"]{constructor(e,t){super(e,39,t)}}var p=Object(n["defineComponent"])({components:{HisStandardForm:o["a"]},mixins:[r["a"]],data:()=>({hivService:{}}),watch:{ready:{async handler(e){e&&(this.hivService=new _(this.patient.getID(),this.providerID),this.fields=this.getFields())},immediate:!0,deep:!0}},methods:{async onSubmit(e,t){const a=await this.hivService.createEncounter();if(!a)return Object(d["e"])("Unable to create encounter");const n=await this.resolveObs({...t}),i=await this.hivService.saveObservationList(n);if(!i)return Object(d["e"])("Unable to save observations");this.nextTask()},buildDateObs(e,t,a){let n={};return n=t.match(/unknown/i)?this.hivService.buildValueText(e,"Unknown"):a?this.hivService.buildValueDateEstimated(e,t):this.hivService.buildValueDate(e,t),n},getFields(){return[{id:"hiv_status",helpText:"HIV status",type:c["b"].TT_SELECT,validation:e=>s["a"].required(e),computedValue:({value:e})=>({obs:this.hivService.buildValueText("HIV status",e)}),options:()=>[{label:"Positive not ART",value:"Positive not ART"},{label:"Posititve on ART",value:"Positive on ART"},{label:"Previous negative",value:"Previous negative"},{label:"New positive",value:"New positive"},{label:"New negative",value:"New negative"},{label:"Never tested",value:"Never tested"}]},...Object(u["b"])({id:"hiv_test_date",helpText:"HIV Test",required:!0,minDate:()=>this.patient.getBirthdate(),maxDate:()=>_.getSessionDate(),condition:e=>"Never tested"!==e.hiv_status.value,summaryLabel:"HIV test date",estimation:{allowUnknown:!0,estimationFieldType:u["a"].MONTH_ESTIMATE_FIELD},computeValue:(e,t)=>this.buildDateObs("HIV test date",e,t)},this.hivService.getDate()),{id:"test_location",helpText:"HIV test location",type:c["b"].TT_SELECT,validation:e=>s["a"].required(e),defaultValue:()=>_.getLocationName(),computedValue:({label:e})=>({obs:this.hivService.buildValueText("HIV test location",e)}),condition:e=>"Never tested"!==e.hiv_status.value,options:(e,t="")=>Object(l["b"])(t),config:{showKeyboard:!0,isFilterDataViaApi:!0}}]}}}),m=a("6b0d"),f=a.n(m);const v=f()(p,[["render",i]]);t["default"]=v},"8e3d":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return storageFactory}));var _home_andrew_dev_Projects_HIS_Core_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ade3"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2ef0"),lodash__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);const INDEX_STORE="openmrs",DB_NAME="offline_db",storageFactory=(storageName="IndexedDBStorage")=>eval(`new ${storageName}()`);class LocalStorage{existsinStorage(e){const t=localStorage.getItem(e);return t?Promise.resolve(!0):Promise.resolve(!1)}getFromStorage(e){return new Promise((t,a)=>{const n=localStorage.getItem(e);if(n)return t(JSON.parse(n));t([])})}deleteFromStorage(e){return localStorage.removeItem(e),!0}saveToStorage(e,t){return localStorage.setItem(e,JSON.stringify(t)),!0}}class IndexedDBStorage{constructor(){Object(_home_andrew_dev_Projects_HIS_Core_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this,"db",void 0);const e=indexedDB.open(DB_NAME,1);e.onupgradeneeded=function(){e.result.createObjectStore(INDEX_STORE)},e.onsuccess=()=>{this.db=e.result}}existsinStorage(e){return new Promise((t,a)=>{const n=this.db.transaction(INDEX_STORE).objectStore(INDEX_STORE).get(e);n.onsuccess=()=>{t(n.result)},n.onerror=()=>{a(n.error)}})}getFromStorage(e,t){return new Promise((a,n)=>{const i=this.db.transaction(INDEX_STORE).objectStore(INDEX_STORE).openCursor();i.onsuccess=()=>{const n=i.result;n?(n.key===e&&a(t?filteredData(n,t):n.value.data),n.continue()):a([])},i.onerror=()=>{n("error")}})}saveToStorage(e,t){return this.db.transaction(INDEX_STORE,"readwrite").objectStore(INDEX_STORE).put(t,e),!0}deleteFromStorage(e){return this.db.transaction(INDEX_STORE,"readwrite").objectStore(INDEX_STORE).delete(e),!0}}function filteredData(e,t){return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(e.value,e=>Object.entries(t).every(([t,a])=>Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isInteger"])(e[t])?!a||e[t]===a:!a||Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toLower"])(e[t]).includes(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toLower"])(a))))}},c21d:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("14d9");function n(e,t){const a=[],n=[-1,"",null,void 0];for(const i in t){if(!(i in e))continue;const o=e[i];n.includes(o)?a.push(!1):a.push(t[i](o,e))}return a.every(Boolean)}function i(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function o(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function r(e,t,a="",r="",s="priority"){const c=[];for(const i in t){const o=t[i],s=[o.target&&a&&o.target!=a,o.targetEvent&&r&&o.targetEvent!=r];s.some(Boolean)||n(e,o.conditions)&&(o.title=i,o.description&&(o.description.text=o.description.info(e)),c.push(o))}return"priority"===s?i(c):o(c)}},e86e:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"f",(function(){return d})),a.d(t,"e",(function(){return h})),a.d(t,"a",(function(){return _})),a.d(t,"g",(function(){return p})),a.d(t,"h",(function(){return m}));var n=a("5713"),i=a("8e3d"),o=a("13ea"),r=a.n(o);const s=Object(i["a"])();async function c(e=""){let t=await s.getFromStorage("locations",{name:e});return r()(t)&&(t=await n["a"].getFacilities({name:e})),t.filter(e=>!r()(e)&&""!=e.name.trim()).map(e=>({label:e.name,value:e.location_id,other:e}))}async function l(e=""){const t=await n["a"].getLabs({search_name:e});return t.map(e=>({label:e,value:e}))}async function u(e=""){const t=await n["a"].getFacilities({name:e,tag:"Facility adult sections"});return t.map(e=>({label:e.name,value:e.name,other:e}))}async function d(){const e=await n["a"].getSpecialistClinics();return e.map(e=>({label:e.name,value:e.name,other:e}))}async function h(){let e=await s.getFromStorage("regions",[]);return r()(e)&&(e=await n["a"].getRegions()),e.map(e=>({label:e.name,value:e.region_id,other:e}))}async function _(e){let t=await s.getFromStorage("districts",{region_id:e});return r()(t)&&(t=await n["a"].getDistricts(e)),t.map(e=>({label:e.name,value:e.district_id,other:e}))}async function p(e,t=""){let a=await s.getFromStorage("traditional_authorities",{district_id:e,name:t});return r()(a)&&(a=await n["a"].getTraditionalAuthorities(e,t)),a.map(e=>({label:e.name,value:e.traditional_authority_id,other:e}))}async function m(e,t=""){let a=await s.getFromStorage("villages",{traditional_authority_id:e,name:t});return r()(a)&&(a=await n["a"].getVillages(e,t)),a.map(e=>({label:e.name,value:e.village_id,other:e}))}}}]);
//# sourceMappingURL=chunk-2fe8921e.b5b4f144.js.map