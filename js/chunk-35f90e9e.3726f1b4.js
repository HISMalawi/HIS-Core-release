(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35f90e9e"],{3383:function(e,t,n){"use strict";n.r(t);var i=n("7a23");function a(e,t,n,a,r,o){const s=Object(i["resolveComponent"])("his-standard-form"),c=Object(i["resolveComponent"])("ion-page");return Object(i["openBlock"])(),Object(i["createBlock"])(c,null,{default:Object(i["withCtx"])(()=>[Object(i["createVNode"])(s,{formLabel:"ART (Re-) Initiation",fields:e.fields,onFinishAction:e.onFinish,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}var r=n("7365"),o=n("d95e"),s=n("d867"),c=n("c39b"),l=n("e86e"),u=n("0011"),d=n("2ef0"),h=Object(i["defineComponent"])({components:{IonPage:s["D"]},mixins:[r["a"]],data:()=>({service:{}}),watch:{ready:{handler(e){e&&(this.service=new c["a"](this.patientID,this.providerID),this.fields=[this.referralForArtInitiation(),this.intendedArtSiteField(),this.artAppointmentDataField(),this.htsLinkageCodeField(),this.hiddenArtReferralOutcomeStatusField()])},immediate:!0}},methods:{onFinish(e,t){this.saveFormEncounterAndProceed({encounterTypeID:this.service.encounterTypeID,formData:e,computedData:t})},referralForArtInitiation(){return{id:"is_referral",helpText:"Referral for ART (Re-)Initiation",type:o["b"].TT_YES_NO,isRequired:()=>!0,finalComputedValue:e=>({obs:this.service.buildValueText("ART referral",e)}),options:()=>[{label:"Do you want to refer client?",value:"",values:this.yesNoOptions()}]}},intendedArtSiteField(){return{id:"art_site",helpText:"Intended Site for ART",type:o["b"].TT_SELECT,isRequired:()=>!0,finalComputedValue:({label:e})=>({obs:this.service.buildValueText("Referral location",e)}),options:(e,t="")=>Object(l["b"])(t),condition:e=>"Yes"===e.is_referral,defaultValue:()=>c["a"].getLocationName(),config:{footerBtns:[{name:"Here",slot:"end",onClickComponentEvents:{setValue:()=>c["a"].getLocationName()},onClick:()=>null}],showKeyboard:!0,isFilterDataViaApi:!0}}},artAppointmentDataField(){return{id:"art_appointment_date",helpText:"Appointment Date for ART Referral",type:o["b"].TT_DATE_PICKER,isRequired:()=>!0,defaultValue:()=>this.service.date,condition:e=>"Yes"===e.is_referral,finalComputedValue:e=>({obs:this.service.buildValueDate("Appointment date",""+e.value)}),config:{minDate:()=>this.service.date,infoItems:e=>[{label:"Set appointment date",value:Object(u["g"])(e)}],hiddenFooterBtns:["Clear"]}}},htsLinkageCodeField(){let e=[];return{id:"linkage_code",helpText:"LINKAGE CODE",type:o["b"].TT_LINKAGE_CODE,isRequired:()=>!0,validation:t=>{var n;return null!==t&&void 0!==t&&null!==(n=t.other)&&void 0!==n&&n.isValidLinkageCode?null:(e=Object(d["uniq"])(e.concat(""+t.value)),["Invalid Scanform linkage code"])},condition:e=>"Yes"===e.is_referral,finalComputedValue:t=>({obs:[this.service.buildValueText("HTC Serial number",""+t.value),...e.map(e=>this.service.buildValueText("Invalid",e))]})}},hiddenArtReferralOutcomeStatusField(){return{id:"art_outcome_field",helpText:"Art outcome",type:o["b"].TT_HIDDEN,defaultValue:()=>this.toOption("Unknown"),finalComputedValue:e=>({obs:this.service.buildValueCoded("Antiretroviral status or outcome",e.value)})}}}}),p=n("6b0d"),_=n.n(p);const f=_()(h,[["render",a]]);t["default"]=f},7365:function(e,t,n){"use strict";n("14d9"),n("13d5");var i,a=n("7a23"),r=n("ad60"),o=n("2ef0"),s=n("0fa1"),c=n("7f35"),l=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(i||(i={}));const u=e=>l["b"].toStandardHisDisplayFormat(e),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+u(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?i.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?i.CHANGE_PATIENT_OUTCOME:i.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${u(t)} is less than birth date of ${u(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?i.CHANGE_SESSION_DATE:i.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:a})=>{const r=await Object(c["c"])("Please select a provider for "+t,`BDE: ${u(n)} | Current: ${u(a)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===r.action?{value:-1,flowState:i.GO_TO_PATIENT_DASHBOARD}:{value:r.selection,flowState:i.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var h=n("c21d"),p=n("7920"),_=n("b5e4"),f=n("8e8b"),m=n("b432"),b=n("5a0c"),D=n.n(b),g=n("cc6f"),v=n("2ed9"),O=Object(a["defineComponent"])({components:{HisStandardForm:p["a"]},data:()=>({offlineID:null,patient:{},fields:[],patientID:"",providerID:-1,providers:[],encounterStartTime:null,facts:{age:-1,gender:"",birthDate:"",sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,outcome:"",outcomeStartDate:"",village:"",district:"",currentTA:""},formLabel:"",ready:!1}),created(){this.$route.params.patient_id&&(this.offlineID=this.$route.params.patient_id,this.patientID=parseInt(""+this.$route.params.patient_id),this.goOffline()?this.initOfflineData():f["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,Object(o["isEmpty"])(this.patient)||Object(m["a"])().cachePatient(this.patient),this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0,this.setStartTime()}).catch(e=>console.log(e))}).catch(()=>{this.goOffline()&&this.initOfflineData()})}))},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{setStartTime(){this.encounterStartTime=(new Date).getTime()},goOffline(){return!m["c"].value||m["b"].value},isOnline(){return m["c"].value},isOfflineMode(){return m["b"].value},initOfflineData(){var e;const t=Object(m["a"])().findByID(this.offlineID),n=null===t||void 0===t||null===(e=t.personParams)||void 0===e?void 0:e.person;n&&(this.facts.birthDate=n.birthdate,this.facts.age=D()(r["a"].getSessionDate()).diff(this.facts.birthDate,"years"),this.facts.district=n.current_district,this.facts.village=n.current_village,this.facts.currentTA=n.current_traditional_authority,this.facts.gender=n.gender,this.ready=!0,this.setStartTime())},async saveFormEncounterAndProceed(e={}){let t="Pending",n=!1,i=null;const a=(new Date).getTime(),r=(a-this.encounterStartTime)/1e3,o=r/60;try{const t=await g["a"].buildValueText("Device",Object(v["f"])()),n=await g["a"].buildValueNumber("Review Time",o);i=[...await this.resolveObs(e.computedData),t,n]}catch(s){return console.error(""+s),Object(_["e"])("Unable to resolve observations")}if(!this.isOfflineMode()){try{const a=new g["a"](this.patientID,e.encounterTypeID,this.providerID);await a.createEncounter()&&await a.saveObservationList(i)&&(t="Success"),"function"===typeof e.callback&&await e.callback(a),n=!0}catch(s){n=!1,/NetworkError|Failed to fetch/i.test(""+s)?t="NetworkError":(t="Exception",console.error("Exception while saving an encounter: "+s))}if("Exception"===t)return Object(_["c"])("An error has occured!")}Object(m["a"])().saveObsOffline({observations:i,id:this.offlineID,uploadStatus:t,encounterName:this.$route.name,encounterTypeID:e.encounterTypeID,meta:e.formData,labOrders:e.labOrders,created:n},n),e.skipNextTask||this.nextTask()},runflowState(e,t=null){const n={};if(n[i.SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(o["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),i.CONTINUE},n[i.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),i.EXIT),n[i.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),i.EXIT),n[i.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),i.EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(h["a"])(this.facts,d);for(const o in e){var t,n;const s=e[o];if(null!==s&&void 0!==s&&null!==(t=s.actions)&&void 0!==t&&t.alert){var a;const e=this.runflowState(await(null===s||void 0===s||null===(a=s.actions)||void 0===a?void 0:a.alert(this.facts)));if(e===i.EXIT)return}if(null!==s&&void 0!==s&&null!==(n=s.actions)&&void 0!==n&&n.selection){var r;const e=await(null===s||void 0===s||null===(r=s.actions)||void 0===r?void 0:r.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await f["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=e.programID===r["a"].getProgramID(),this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(_["c"])(""+e)}this.facts.currentTA=this.patient.getCurrentTA(),this.facts.district=this.patient.getCurrentDistrict(),this.facts.village=this.patient.getCurrentVillage(),this.facts.sessionDate=r["a"].getSessionDate(),this.facts.apiDate=r["a"].getCachedApiDate(),this.facts.isBdeMode=r["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.age=this.patient.getAge(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",r["a"].isBDE()&&(this.providers=await f["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),i=t.username.toUpperCase();return n<i?-1:n>i?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(o["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var i;const[t]=(null===(i=e.person)||void 0===i?void 0:i.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>"string"===typeof e||"number"===typeof e?{label:e,value:e}:e)},patientDashboardUrl(){return"/patient/dashboard/"+this.$route.params.patient_id},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){try{const e=this.offlineID||this.patientID;await Object(s["b"])(e,this.$router,this.$route)}catch(e){console.error("Workflow error "+e),this.gotoPatientDashboard()}},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},toConditionalOptions(e){const t=[];for(const n of e)("boolean"!==typeof n[1]||n[1])&&t.push(this.toOption(n[0]));return t},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const E=O;t["a"]=E},7920:function(e,t,n){"use strict";var i=n("7a23");function a(e,t,n,a,r,o){return Object(i["openBlock"])(),Object(i["createBlock"])(Object(i["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var r=n("9441"),o=Object(i["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:r["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=n("6b0d"),c=n.n(s);const l=c()(o,[["render",a]]);t["a"]=l},"8e3d":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return storageFactory}));var _home_andrew_dev_Projects_HIS_Core_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ade3"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2ef0"),lodash__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);const INDEX_STORE="openmrs",DB_NAME="offline_db",storageFactory=(storageName="IndexedDBStorage")=>eval(`new ${storageName}()`);class LocalStorage{existsinStorage(e){const t=localStorage.getItem(e);return t?Promise.resolve(!0):Promise.resolve(!1)}getFromStorage(e){return new Promise((t,n)=>{const i=localStorage.getItem(e);if(i)return t(JSON.parse(i));t([])})}deleteFromStorage(e){return localStorage.removeItem(e),!0}saveToStorage(e,t){return localStorage.setItem(e,JSON.stringify(t)),!0}}class IndexedDBStorage{constructor(){Object(_home_andrew_dev_Projects_HIS_Core_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this,"db",void 0);const e=indexedDB.open(DB_NAME,1);e.onupgradeneeded=function(){e.result.createObjectStore(INDEX_STORE)},e.onsuccess=()=>{this.db=e.result}}existsinStorage(e){return new Promise((t,n)=>{const i=this.db.transaction(INDEX_STORE).objectStore(INDEX_STORE).get(e);i.onsuccess=()=>{t(i.result)},i.onerror=()=>{n(i.error)}})}getFromStorage(e,t){return new Promise((n,i)=>{const a=this.db.transaction(INDEX_STORE).objectStore(INDEX_STORE).openCursor();a.onsuccess=()=>{const i=a.result;i?(i.key===e&&n(t?filteredData(i,t):i.value.data),i.continue()):n([])},a.onerror=()=>{i("error")}})}saveToStorage(e,t){return this.db.transaction(INDEX_STORE,"readwrite").objectStore(INDEX_STORE).put(t,e),!0}deleteFromStorage(e){return this.db.transaction(INDEX_STORE,"readwrite").objectStore(INDEX_STORE).delete(e),!0}}function filteredData(e,t){return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(e.value,e=>Object.entries(t).every(([t,n])=>Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isInteger"])(e[t])?!n||e[t]===n:!n||Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toLower"])(e[t]).includes(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toLower"])(n))))}},c21d:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("14d9");function i(e,t){const n=[],i=[-1,"",null,void 0];for(const a in t){if(!(a in e))continue;const r=e[a];i.includes(r)?n.push(!1):n.push(t[a](r,e))}return n.every(Boolean)}function a(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function r(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function o(e,t,n="",o="",s="priority"){const c=[];for(const a in t){const r=t[a],s=[r.target&&n&&r.target!=n,r.targetEvent&&o&&r.targetEvent!=o];s.some(Boolean)||i(e,r.conditions)&&(r.title=a,r.description&&(r.description.text=r.description.info(e)),c.push(r))}return"priority"===s?a(c):r(c)}},c39b:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("ade3"),a=n("cc6f"),r=n("b89f");class o extends a["a"]{constructor(e,t=-1){super(e,79,t),Object(i["a"])(this,"patientID",void 0),Object(i["a"])(this,"printoutService",new r["a"]),this.patientID=e}async printHtsLinkageId(e){await this.printoutService.printLbl(`/patients/${this.patientID}/labels/print_hts_linkage_code/${e}`)}async getHtsCode(){return await this.getFirstValueText("HTC serial number")||"Un-assigned"}validLinkID(e){const t={A:0,C:1,H:2,K:3,L:4,N:5,P:6,W:7,X:8,Y:9},n=/^(\d{1,4})-(\d{1,3})-(\d{1,2})-([A-CE-HK-NP-Y])$/,i=n.exec(e);if(!i)return["Invalid LinkID format"];const a=parseInt(i[1],10),r=parseInt(i[2],10),o=parseInt(i[3],10),s=i[4];return i[1].length!==a.toString().length||i[3].length!==o.toString().length||i[2].length!==r.toString().length?["Invalid LinkID, book number and row number should not have leading zeros"]:isNaN(a)||isNaN(r)||isNaN(o)||a<1||a>9999||r<1||r>999||o<1||o>99?["Invalid LinkID format on book, page, or row number"]:t.hasOwnProperty(s)?null:["Invalid check digit"]}}},e86e:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return h})),n.d(t,"a",(function(){return p})),n.d(t,"g",(function(){return _})),n.d(t,"h",(function(){return f}));var i=n("5713"),a=n("8e3d"),r=n("13ea"),o=n.n(r);const s=Object(a["a"])();async function c(e=""){let t=await s.getFromStorage("locations",{name:e});return o()(t)&&(t=await i["a"].getFacilities({name:e})),t.filter(e=>!o()(e)&&""!=e.name.trim()).map(e=>({label:e.name,value:e.location_id,other:e}))}async function l(e=""){const t=await i["a"].getLabs({search_name:e});return t.map(e=>({label:e,value:e}))}async function u(e=""){const t=await i["a"].getFacilities({name:e,tag:"Facility adult sections"});return t.map(e=>({label:e.name,value:e.name,other:e}))}async function d(){const e=await i["a"].getSpecialistClinics();return e.map(e=>({label:e.name,value:e.name,other:e}))}async function h(){let e=await s.getFromStorage("regions",[]);return o()(e)&&(e=await i["a"].getRegions()),e.map(e=>({label:e.name,value:e.region_id,other:e}))}async function p(e){let t=await s.getFromStorage("districts",{region_id:e});return o()(t)&&(t=await i["a"].getDistricts(e)),t.map(e=>({label:e.name,value:e.district_id,other:e}))}async function _(e,t=""){let n=await s.getFromStorage("traditional_authorities",{district_id:e,name:t});return o()(n)&&(n=await i["a"].getTraditionalAuthorities(e,t)),n.map(e=>({label:e.name,value:e.traditional_authority_id,other:e}))}async function f(e,t=""){let n=await s.getFromStorage("villages",{traditional_authority_id:e,name:t});return o()(n)&&(n=await i["a"].getVillages(e,t)),n.map(e=>({label:e.name,value:e.village_id,other:e}))}}}]);
//# sourceMappingURL=chunk-35f90e9e.3726f1b4.js.map