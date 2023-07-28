(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74d31e01"],{7365:function(t,e,i){"use strict";i("14d9"),i("13d5");var a,n=i("7a23"),s=i("ad60"),o=i("2ef0"),r=i("0fa1"),c=i("7f35"),l=i("9283");(function(t){t["SET_PROVIDER"]="SET_PROVIDER",t["CHANGE_SESSION_DATE"]="change_session_date",t["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",t["CHANGE_PATIENT_OUTCOME"]="change_outcome",t["CONTINUE"]="continue",t["EXIT"]="exit"})(a||(a={}));const u=t=>l["b"].toStandardHisDisplayFormat(t),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:t})=>{const e=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+u(t),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===e?a.GO_TO_PATIENT_DASHBOARD:"Change outcome"===e?a.CHANGE_PATIENT_OUTCOME:a.CONTINUE}},conditions:{outcome(t){return"Patient died"===t},outcomeStartDate(t,{sessionDate:e}){return e>=t}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:t,sessionDate:e})=>{const i=await Object(c["a"])("Data integrity issue found","",`Session date ${u(e)} is less than birth date of ${u(t)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===i?a.CHANGE_SESSION_DATE:a.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(t,{sessionDate:e}){return e<t}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:t,encounterName:e,sessionDate:i,apiDate:n})=>{const s=await Object(c["c"])("Please select a provider for "+e,`BDE: ${u(i)} | Current: ${u(n)}`,t,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===s.action?{value:-1,flowState:a.GO_TO_PATIENT_DASHBOARD}:{value:s.selection,flowState:a.SET_PROVIDER}}},conditions:{isBdeMode(t){return t}}}};var h=i("c21d"),p=i("7920"),m=i("b5e4"),f=i("8e8b"),b=i("b432"),v=i("5a0c"),D=i.n(v),g=i("cc6f"),O=i("2ed9"),y=Object(n["defineComponent"])({components:{HisStandardForm:p["a"]},data:()=>({offlineID:null,patient:{},fields:[],patientID:"",providerID:-1,providers:[],encounterStartTime:null,facts:{age:-1,gender:"",birthDate:"",sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,outcome:"",outcomeStartDate:"",village:"",district:"",currentTA:""},formLabel:"",ready:!1}),created(){this.$route.params.patient_id&&(this.offlineID=this.$route.params.patient_id,this.patientID=parseInt(""+this.$route.params.patient_id),this.goOffline()?this.initOfflineData():f["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(t=>{this.patient=t,Object(o["isEmpty"])(this.patient)||Object(b["a"])().cachePatient(this.patient),this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0,this.setStartTime()}).catch(t=>console.log(t))}).catch(()=>{this.goOffline()&&this.initOfflineData()})}))},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{setStartTime(){this.encounterStartTime=(new Date).getTime()},goOffline(){return!b["c"].value||b["b"].value},isOnline(){return b["c"].value},isOfflineMode(){return b["b"].value},initOfflineData(){var t;const e=Object(b["a"])().findByID(this.offlineID),i=null===e||void 0===e||null===(t=e.personParams)||void 0===t?void 0:t.person;i&&(this.facts.birthDate=i.birthdate,this.facts.age=D()(s["a"].getSessionDate()).diff(this.facts.birthDate,"years"),this.facts.district=i.current_district,this.facts.village=i.current_village,this.facts.currentTA=i.current_traditional_authority,this.facts.gender=i.gender,this.ready=!0,this.setStartTime())},async saveFormEncounterAndProceed(t={}){let e="Pending",i=!1,a=null;const n=(new Date).getTime(),s=(n-this.encounterStartTime)/1e3,o=s/60;try{const e=await g["a"].buildValueText("Device",Object(O["f"])()),i=await g["a"].buildValueNumber("Review Time",o);a=[...await this.resolveObs(t.computedData),e,i]}catch(r){return console.error(""+r),Object(m["e"])("Unable to resolve observations")}if(!this.isOfflineMode()){try{const n=new g["a"](this.patientID,t.encounterTypeID,this.providerID);await n.createEncounter()&&await n.saveObservationList(a)&&(e="Success"),"function"===typeof t.callback&&await t.callback(n),i=!0}catch(r){i=!1,/NetworkError|Failed to fetch/i.test(""+r)?e="NetworkError":(e="Exception",console.error("Exception while saving an encounter: "+r))}if("Exception"===e)return Object(m["c"])("An error has occured!")}Object(b["a"])().saveObsOffline({observations:a,id:this.offlineID,uploadStatus:e,encounterName:this.$route.name,encounterTypeID:t.encounterTypeID,meta:t.formData,labOrders:t.labOrders,created:i},i),t.skipNextTask||this.nextTask()},runflowState(t,e=null){const i={};if(i[a.SET_PROVIDER]=t=>{const[e]=t.split(" "),i=Object(o["find"])(this.providers,{username:e});return i&&(this.providerID=i.person_id),a.CONTINUE},i[a.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),a.EXIT),i[a.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),a.EXIT),i[a.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),a.EXIT),t in i)return i[t](e)},async checkEncounterGuidelines(){const t=Object(h["a"])(this.facts,d);for(const o in t){var e,i;const r=t[o];if(null!==r&&void 0!==r&&null!==(e=r.actions)&&void 0!==e&&e.alert){var n;const t=this.runflowState(await(null===r||void 0===r||null===(n=r.actions)||void 0===n?void 0:n.alert(this.facts)));if(t===a.EXIT)return}if(null!==r&&void 0!==r&&null!==(i=r.actions)&&void 0!==i&&i.selection){var s;const t=await(null===r||void 0===r||null===(s=r.actions)||void 0===s?void 0:s.selection(this.facts));this.runflowState(t.flowState,t.value)}}},async setEncounterFacts(){try{const t=await f["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=t.programID===s["a"].getProgramID(),this.facts.outcome=t.outcome,this.facts.outcomeStartDate=t.startDate}catch(t){console.error(t),Object(m["c"])(""+t)}this.facts.currentTA=this.patient.getCurrentTA(),this.facts.district=this.patient.getCurrentDistrict(),this.facts.village=this.patient.getCurrentVillage(),this.facts.sessionDate=s["a"].getSessionDate(),this.facts.apiDate=s["a"].getCachedApiDate(),this.facts.isBdeMode=s["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.age=this.patient.getAge(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",s["a"].isBDE()&&(this.providers=await f["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((t,e)=>{const i=t.username.toUpperCase(),a=e.username.toUpperCase();return i<a?-1:i>a?1:0}).map(t=>{var e;let i=""+t.username;if(!Object(o["isEmpty"])(null===t||void 0===t||null===(e=t.person)||void 0===e?void 0:e.names)){var a;const[e]=(null===(a=t.person)||void 0===a?void 0:a.names)||[];i+=` (${e.given_name} ${e.family_name})`}return i}))},toOption(t,e={}){return{label:t,value:t,other:e}},mapStrToOptions(t){return t.map(t=>"string"===typeof t||"number"===typeof t?{label:t,value:t}:t)},patientDashboardUrl(){return"/patient/dashboard/"+this.$route.params.patient_id},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){try{const t=this.offlineID||this.patientID;await Object(r["b"])(t,this.$router,this.$route)}catch(t){console.error("Workflow error "+t),this.gotoPatientDashboard()}},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(t,e={}){return{label:t,value:"",other:{...e,values:this.yesNoOptions()}}},mapOptions(t){return t.map(t=>({label:t,value:t}))},toConditionalOptions(t){const e=[];for(const i of t)("boolean"!==typeof i[1]||i[1])&&e.push(this.toOption(i[0]));return e},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(t,e=""){const i=Object.values(t).filter(t=>t&&(t.tag===e||""===e)).reduce((t,e)=>{const i=e.obs?e.obs:e;return Array.isArray(i)?t=t.concat(i):"function"===typeof i?t.push(i()):t.push(i),t},[]);return Promise.all(i)},inArray(t,e){try{return t.filter(t=>e(t)).length>0}catch(i){return!1}},validateSeries(t){try{for(const e in t){const i=t[e]();if(i)return i}}catch(e){return[e]}}}});const T=y;e["a"]=T},7920:function(t,e,i){"use strict";var a=i("7a23");function n(t,e,i,n,s,o){return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(t.formType),{fields:t.fields,skipSummary:t.skipSummary,activeField:t.activeField,cancelDestinationPath:t.cancelDestinationPath,onOnFinish:t.onFinish,onFinish:t.onFinishAction,onOnIndex:t.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var s=i("9441"),o=Object(a["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:s["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(t,e){this.$emit("onFinish",t,e)},onIndex(t){this.$emit("onIndex",t)}}}),r=i("6b0d"),c=i.n(r);const l=c()(o,[["render",n]]);e["a"]=l},a16a6:function(t,e,i){"use strict";i.r(e);var a=i("7a23");function n(t,e,i,n,s,o){const r=Object(a["resolveComponent"])("his-standard-form");return Object(a["openBlock"])(),Object(a["createBlock"])(r,{cancelDestinationPath:t.cancelDestination,fields:t.fields,onFinishAction:t.onSubmit},null,8,["cancelDestinationPath","fields","onFinishAction"])}var s=i("7920"),o=i("7365"),r=i("cc6f"),c=i("8158");class l extends r["a"]{constructor(t,e){super(t,8,e)}static async getDiagnosis(t="",e=1,i=10){const a=c["a"].getConceptID("Qech outpatient diagnosis list");return r["a"].getJson("diagnosis",{id:a,name:t,page:e,page_size:i})}}class u extends r["a"]{constructor(t,e){super(t,105,e)}}var d=i("2706"),h=i("d95e"),p=i("2ef0"),m=i("9b7c"),f=i("b5e4"),b=i("1c74"),v=Object(a["defineComponent"])({components:{HisStandardForm:s["a"]},mixins:[o["a"]],data:()=>({activeField:"",notesService:{},diagnosisService:{},malariaTestResult:"No"}),watch:{ready:{async handler(t){t&&(this.malariaTestResult=await m["a"].getLatestMalariaTestResult(this.patientID),this.notesService=new u(this.patientID,this.providerID),this.diagnosisService=new l(this.patientID,this.providerID),this.fields=this.getFields())},immediate:!0,deep:!0}},methods:{async onSubmit(t,e){await this.diagnosisService.createEncounter();const i=await this.resolveObs({...e,obs_datetime:b["e"].getSessionDate()},"diagnosis");await this.diagnosisService.saveObservationList(i);const a=await this.resolveObs({...e},"notes");Object(p["isEmpty"])(a)||(await this.notesService.createEncounter(),await this.notesService.saveObservationList(a)),this.nextTask()},mapListToOptions(t){return Object(p["isEmpty"])(t)?[]:t.map(t=>({label:t.name,value:t.name,other:t.concept_id,isChecked:!1})).sort((t,e)=>t.label<e.label?-1:t.label>e.label?1:0)},async checkMalariaResult(t){const e=t.find(t=>"Malaria"===t.label);return!e||("Positive"===this.malariaTestResult||await Object(f["a"])(`Patient has ${this.malariaTestResult} malaria test result. Do you want to continue?`))},getFields(){return[{id:"primary_diagnosis",helpText:"Select primary diagnosis",type:h["b"].TT_INFINITE_SCROLL_MULTIPLE_SELECT,validation:t=>d["a"].required(t),options:async(t,e="",i=1,a=10)=>this.mapListToOptions(await l.getDiagnosis(e,i,a)),beforeNext:async t=>await this.checkMalariaResult(t),computedValue:t=>({tag:"diagnosis",obs:t.map(({other:t})=>this.diagnosisService.buildValueCodedFromConceptId("Primary diagnosis",t))}),summaryMapValue:({value:t})=>({value:t,label:"Primary diagnosis"}),config:{isFilterDataViaApi:!0,showKeyboard:!0}},{id:"secondary_diagnosis",helpText:"Select secondary diagnosis",type:h["b"].TT_INFINITE_SCROLL_MULTIPLE_SELECT,options:async(t,e="",i=1,a=10)=>this.mapListToOptions(await l.getDiagnosis(e,i,a)),beforeNext:async t=>await this.checkMalariaResult(t),computedValue:t=>!Object(p["isEmpty"])(t)&&{tag:"diagnosis",obs:t.map(({other:t})=>this.diagnosisService.buildValueCodedFromConceptId("Secondary diagnosis",t))},summaryMapValue:({value:t})=>({value:t,label:"Secondary diagnosis"}),config:{showKeyboard:!0,isFilterDataViaApi:!0}},{id:"clinical_notes",helpText:"Clinical notes",type:h["b"].TT_TEXT,computedValue:t=>t&&{tag:"notes",obs:this.notesService.buildValueText("Clinical notes construct",t.value)}}]}}}),D=i("6b0d"),g=i.n(D);const O=g()(v,[["render",n]]);e["default"]=O},c21d:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i("14d9");function a(t,e){const i=[],a=[-1,"",null,void 0];for(const n in e){if(!(n in t))continue;const s=t[n];a.includes(s)?i.push(!1):i.push(e[n](s,t))}return i.every(Boolean)}function n(t){return t.sort((t,e)=>t.priority&&e.priority&&t.priority<e.priority?-1:1)}function s(t){return t.sort((t,e)=>t.weight&&e.weight&&t.weight>e.weight?-1:1)}function o(t,e,i="",o="",r="priority"){const c=[];for(const n in e){const s=e[n],r=[s.target&&i&&s.target!=i,s.targetEvent&&o&&s.targetEvent!=o];r.some(Boolean)||a(t,s.conditions)&&(s.title=n,s.description&&(s.description.text=s.description.info(t)),c.push(s))}return"priority"===r?n(c):s(c)}}}]);
//# sourceMappingURL=chunk-74d31e01.a367eec3.js.map