(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-753a9bc9"],{7365:function(t,e,i){"use strict";i("14d9"),i("13d5");var n,a=i("7a23"),o=i("ad60"),r=i("2ef0"),s=i("0fa1"),c=i("7f35"),l=i("9283");(function(t){t["SET_PROVIDER"]="SET_PROVIDER",t["CHANGE_SESSION_DATE"]="change_session_date",t["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",t["CHANGE_PATIENT_OUTCOME"]="change_outcome",t["CONTINUE"]="continue",t["EXIT"]="exit"})(n||(n={}));const u=t=>l["b"].toStandardHisDisplayFormat(t),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:t})=>{const e=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+u(t),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===e?n.GO_TO_PATIENT_DASHBOARD:"Change outcome"===e?n.CHANGE_PATIENT_OUTCOME:n.CONTINUE}},conditions:{outcome(t){return"Patient died"===t},outcomeStartDate(t,{sessionDate:e}){return e>=t}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:t,sessionDate:e})=>{const i=await Object(c["a"])("Data integrity issue found","",`Session date ${u(e)} is less than birth date of ${u(t)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===i?n.CHANGE_SESSION_DATE:n.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(t,{sessionDate:e}){return e<t}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:t,encounterName:e,sessionDate:i,apiDate:a})=>{const o=await Object(c["c"])("Please select a provider for "+e,`BDE: ${u(i)} | Current: ${u(a)}`,t,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===o.action?{value:-1,flowState:n.GO_TO_PATIENT_DASHBOARD}:{value:o.selection,flowState:n.SET_PROVIDER}}},conditions:{isBdeMode(t){return t}}}};var h=i("c21d"),p=i("7920"),f=i("b5e4"),m=i("8e8b"),v=i("b432"),b=i("5a0c"),D=i.n(b),O=i("cc6f"),g=i("2ed9"),y=Object(a["defineComponent"])({components:{HisStandardForm:p["a"]},data:()=>({offlineID:null,patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{age:-1,gender:"",birthDate:"",sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,outcome:"",outcomeStartDate:"",village:"",district:"",currentTA:""},formLabel:"",ready:!1}),created(){this.$route.params.patient_id&&(this.offlineID=this.$route.params.patient_id,this.patientID=parseInt(""+this.$route.params.patient_id),this.goOffline()?this.initOfflineData():m["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(t=>{this.patient=t,Object(r["isEmpty"])(this.patient)||Object(v["a"])().cachePatient(this.patient),this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0}).catch(t=>console.log(t))}).catch(()=>{this.goOffline()&&this.initOfflineData()})}))},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{goOffline(){return!v["c"].value||v["b"].value},isOnline(){return v["c"].value},isOfflineMode(){return v["b"].value},initOfflineData(){var t;const e=Object(v["a"])().findByID(this.offlineID),i=null===e||void 0===e||null===(t=e.personParams)||void 0===t?void 0:t.person;i&&(this.facts.birthDate=i.birthdate,this.facts.age=D()(o["a"].getSessionDate()).diff(this.facts.birthDate,"years"),this.facts.district=i.current_district,this.facts.village=i.current_village,this.facts.currentTA=i.current_traditional_authority,this.facts.gender=i.gender,this.ready=!0)},async saveFormEncounterAndProceed(t={}){let e="Pending",i=!1,n=null;try{const e=await O["a"].buildValueText("Device",Object(g["f"])());n=[...await this.resolveObs(t.computedData),e]}catch(a){return console.error(""+a),Object(f["e"])("Unable to resolve observations")}if(!this.isOfflineMode()){try{const a=new O["a"](this.patientID,t.encounterTypeID,this.providerID);await a.createEncounter()&&await a.saveObservationList(n)&&(e="Success",i=!0),"function"===typeof t.callback&&await t.callback(a)}catch(a){i=!1,/NetworkError|Failed to fetch/i.test(""+a)?e="NetworkError":(e="Exception",console.error("Exception while saving an encounter: "+a))}if("Exception"===e)return Object(f["c"])("An error has occured!")}Object(v["a"])().saveObsOffline({observations:n,id:this.offlineID,uploadStatus:e,encounterName:this.$route.name,encounterTypeID:t.encounterTypeID,meta:t.formData,labOrders:t.labOrders,created:i}),t.skipNextTask||this.nextTask()},runflowState(t,e=null){const i={};if(i[n.SET_PROVIDER]=t=>{const[e]=t.split(" "),i=Object(r["find"])(this.providers,{username:e});return i&&(this.providerID=i.person_id),n.CONTINUE},i[n.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),n.EXIT),i[n.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),n.EXIT),i[n.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),n.EXIT),t in i)return i[t](e)},async checkEncounterGuidelines(){const t=Object(h["a"])(this.facts,d);for(const r in t){var e,i;const s=t[r];if(null!==s&&void 0!==s&&null!==(e=s.actions)&&void 0!==e&&e.alert){var a;const t=this.runflowState(await(null===s||void 0===s||null===(a=s.actions)||void 0===a?void 0:a.alert(this.facts)));if(t===n.EXIT)return}if(null!==s&&void 0!==s&&null!==(i=s.actions)&&void 0!==i&&i.selection){var o;const t=await(null===s||void 0===s||null===(o=s.actions)||void 0===o?void 0:o.selection(this.facts));this.runflowState(t.flowState,t.value)}}},async setEncounterFacts(){try{const t=await m["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=t.programID===o["a"].getProgramID(),this.facts.outcome=t.outcome,this.facts.outcomeStartDate=t.startDate}catch(t){console.error(t),Object(f["c"])(""+t)}this.facts.currentTA=this.patient.getCurrentTA(),this.facts.district=this.patient.getCurrentDistrict(),this.facts.village=this.patient.getCurrentVillage(),this.facts.sessionDate=o["a"].getSessionDate(),this.facts.apiDate=o["a"].getCachedApiDate(),this.facts.isBdeMode=o["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.age=this.patient.getAge(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",o["a"].isBDE()&&(this.providers=await m["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((t,e)=>{const i=t.username.toUpperCase(),n=e.username.toUpperCase();return i<n?-1:i>n?1:0}).map(t=>{var e;let i=""+t.username;if(!Object(r["isEmpty"])(null===t||void 0===t||null===(e=t.person)||void 0===e?void 0:e.names)){var n;const[e]=(null===(n=t.person)||void 0===n?void 0:n.names)||[];i+=` (${e.given_name} ${e.family_name})`}return i}))},toOption(t,e={}){return{label:t,value:t,other:e}},mapStrToOptions(t){return t.map(t=>"string"===typeof t||"number"===typeof t?{label:t,value:t}:t)},patientDashboardUrl(){return"/patient/dashboard/"+this.$route.params.patient_id},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){try{const t=this.offlineID||this.patientID;await Object(s["b"])(t,this.$router,this.$route)}catch(t){console.error("Workflow error "+t),this.gotoPatientDashboard()}},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(t,e={}){return{label:t,value:"",other:{...e,values:this.yesNoOptions()}}},mapOptions(t){return t.map(t=>({label:t,value:t}))},toConditionalOptions(t){const e=[];for(const i of t)("boolean"!==typeof i[1]||i[1])&&e.push(this.toOption(i[0]));return e},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(t,e=""){const i=Object.values(t).filter(t=>t&&(t.tag===e||""===e)).reduce((t,e)=>{const i=e.obs?e.obs:e;return Array.isArray(i)?t=t.concat(i):"function"===typeof i?t.push(i()):t.push(i),t},[]);return Promise.all(i)},inArray(t,e){try{return t.filter(t=>e(t)).length>0}catch(i){return!1}},validateSeries(t){try{for(const e in t){const i=t[e]();if(i)return i}}catch(e){return[e]}}}});const T=y;e["a"]=T},7920:function(t,e,i){"use strict";var n=i("7a23");function a(t,e,i,a,o,r){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(t.formType),{fields:t.fields,skipSummary:t.skipSummary,activeField:t.activeField,cancelDestinationPath:t.cancelDestinationPath,onOnFinish:t.onFinish,onFinish:t.onFinishAction,onOnIndex:t.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var o=i("9441"),r=Object(n["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:o["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(t,e){this.$emit("onFinish",t,e)},onIndex(t){this.$emit("onIndex",t)}}}),s=i("d959"),c=i.n(s);const l=c()(r,[["render",a]]);e["a"]=l},"80ff":function(t,e,i){"use strict";i.r(e);var n=i("7a23");function a(t,e,i,a,o,r){const s=Object(n["resolveComponent"])("his-standard-form");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{cancelDestinationPath:t.cancelDestination,fields:t.fields,onFinishAction:t.onSubmit},null,8,["cancelDestinationPath","fields","onFinishAction"])}var o=i("7920"),r=i("7365"),s=i("2706"),c=i("d95e"),l=i("e86e"),u=i("cc6f");class d extends u["a"]{constructor(t,e){super(t,114,e)}}class h extends u["a"]{constructor(t,e){super(t,42,e)}}var p=Object(n["defineComponent"])({components:{HisStandardForm:o["a"]},mixins:[r["a"]],data:()=>({referralService:{},admissionService:{}}),watch:{ready:{async handler(t){t&&(this.referralService=new d(this.patientID,this.providerID),this.admissionService=new h(this.patientID,this.providerID),this.fields=this.getFields())},immediate:!0,deep:!0}},methods:{async onSubmit(t,e){if("Admission"===t.opd_outcome.value){await this.admissionService.createEncounter();const t=await this.resolveObs({...e},"admission");await this.admissionService.saveObservationList(t)}else{await this.referralService.createEncounter();const t=await this.resolveObs({...e},"referral");await this.referralService.saveObservationList(t)}this.nextTask()},getFields(){return[{id:"opd_outcome",helpText:"Select outcome",type:c["b"].TT_SELECT,validation:t=>s["a"].required(t),options:()=>[{label:"Admit",value:"Admission"},{label:"Internal referral",value:"Internal referral"},{label:"Refer to another hospital/clinic",value:"External referral"}]},{id:"facility_name",helpText:"Select Facility name",type:c["b"].TT_SELECT,validation:t=>s["a"].required(t),computedValue:({value:t})=>({tag:"referral",obs:this.referralService.buildValueText("Referred",t)}),condition:t=>"External referral"===t.opd_outcome.value,options:(t,e="")=>Object(l["b"])(e),config:{showKeyboard:!0,isFilterDataViaApi:!0}},{id:"specialist_clinic",helpText:"Select clinic",type:c["b"].TT_SELECT,validation:t=>s["a"].required(t),computedValue:({other:t})=>({tag:"referral",obs:this.referralService.buildValueCodedFromConceptId("Specialist clinic",t.concept_id)}),condition:t=>"Internal referral"===t.opd_outcome.value,options:()=>Object(l["f"])(),config:{showKeyboard:!0}},{id:"wards",helpText:"Select ward",type:c["b"].TT_SELECT,condition:t=>"Admission"===t.opd_outcome.value,validation:t=>s["a"].required(t),computedValue:({value:t})=>({tag:"admission",obs:this.admissionService.buildValueText("Admit to ward",t)}),options:(t,e="")=>Object(l["c"])(e),config:{showKeyboard:!0,isFilterDataViaApi:!0}}]}}}),f=i("d959"),m=i.n(f);const v=m()(p,[["render",a]]);e["default"]=v},c21d:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("14d9");function n(t,e){const i=[],n=[-1,"",null,void 0];for(const a in e){if(!(a in t))continue;const o=t[a];n.includes(o)?i.push(!1):i.push(e[a](o,t))}return i.every(Boolean)}function a(t){return t.sort((t,e)=>t.priority&&e.priority&&t.priority<e.priority?-1:1)}function o(t){return t.sort((t,e)=>t.weight&&e.weight&&t.weight>e.weight?-1:1)}function r(t,e,i="",r="",s="priority"){const c=[];for(const a in e){const o=e[a],s=[o.target&&i&&o.target!=i,o.targetEvent&&r&&o.targetEvent!=r];s.some(Boolean)||n(t,o.conditions)&&(o.title=a,o.description&&(o.description.text=o.description.info(t)),c.push(o))}return"priority"===s?a(c):o(c)}},e86e:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"d",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"f",(function(){return c})),i.d(e,"e",(function(){return l})),i.d(e,"a",(function(){return u})),i.d(e,"g",(function(){return d})),i.d(e,"h",(function(){return h}));var n=i("5713"),a=i("2ef0");async function o(t=""){const e=await n["a"].getFacilities({name:t});return e.filter(t=>!Object(a["isEmpty"])(t)&&""!=t.name.trim()).map(t=>({label:t.name,value:t.location_id,other:t}))}async function r(t=""){const e=await n["a"].getLabs({search_name:t});return e.map(t=>({label:t,value:t}))}async function s(t=""){const e=await n["a"].getFacilities({name:t,tag:"Facility adult sections"});return e.map(t=>({label:t.name,value:t.name,other:t}))}async function c(){const t=await n["a"].getSpecialistClinics();return t.map(t=>({label:t.name,value:t.name,other:t}))}async function l(){const t=await n["a"].getRegions();return t.map(t=>({label:t.name,value:t.region_id,other:t}))}async function u(t){const e=await n["a"].getDistricts(t);return e.map(t=>({label:t.name,value:t.district_id,other:t}))}async function d(t,e=""){const i=await n["a"].getTraditionalAuthorities(t,e);return i.map(t=>({label:t.name,value:t.traditional_authority_id,other:t}))}async function h(t,e=""){const i=await n["a"].getVillages(t,e);return i.map(t=>({label:t.name,value:t.village_id,other:t}))}}}]);
//# sourceMappingURL=chunk-753a9bc9.7640df57.js.map