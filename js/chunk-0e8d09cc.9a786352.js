(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e8d09cc"],{7365:function(t,e,n){"use strict";n("14d9"),n("13d5");var a,i=n("7a23"),s=n("ad60"),o=n("2ef0"),r=n("0fa1"),c=n("7f35"),l=n("9283");(function(t){t["SET_PROVIDER"]="SET_PROVIDER",t["CHANGE_SESSION_DATE"]="change_session_date",t["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",t["CHANGE_PATIENT_OUTCOME"]="change_outcome",t["CONTINUE"]="continue",t["EXIT"]="exit"})(a||(a={}));const u=t=>l["b"].toStandardHisDisplayFormat(t),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:t})=>{const e=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+u(t),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===e?a.GO_TO_PATIENT_DASHBOARD:"Change outcome"===e?a.CHANGE_PATIENT_OUTCOME:a.CONTINUE}},conditions:{outcome(t){return"Patient died"===t},outcomeStartDate(t,{sessionDate:e}){return e>=t}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:t,sessionDate:e})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${u(e)} is less than birth date of ${u(t)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?a.CHANGE_SESSION_DATE:a.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(t,{sessionDate:e}){return e<t}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:t,encounterName:e,sessionDate:n,apiDate:i})=>{const s=await Object(c["c"])("Please select a provider for "+e,`BDE: ${u(n)} | Current: ${u(i)}`,t,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===s.action?{value:-1,flowState:a.GO_TO_PATIENT_DASHBOARD}:{value:s.selection,flowState:a.SET_PROVIDER}}},conditions:{isBdeMode(t){return t}}}};var h=n("c21d"),p=n("7920"),f=n("b5e4"),m=n("8e8b"),b=n("b432"),v=n("5a0c"),D=n.n(v),O=n("cc6f"),T=n("2ed9"),g=Object(i["defineComponent"])({components:{HisStandardForm:p["a"]},data:()=>({offlineID:null,patient:{},fields:[],patientID:"",providerID:-1,providers:[],encounterStartTime:null,facts:{age:-1,gender:"",birthDate:"",sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,outcome:"",outcomeStartDate:"",village:"",district:"",currentTA:""},formLabel:"",ready:!1}),created(){this.$route.params.patient_id&&(this.offlineID=this.$route.params.patient_id,this.patientID=parseInt(""+this.$route.params.patient_id),this.goOffline()?this.initOfflineData():m["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(t=>{this.patient=t,Object(o["isEmpty"])(this.patient)||Object(b["a"])().cachePatient(this.patient),this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0,this.setStartTime()}).catch(t=>console.log(t))}).catch(()=>{this.goOffline()&&this.initOfflineData()})}))},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{setStartTime(){this.encounterStartTime=(new Date).getTime()},goOffline(){return!b["c"].value||b["b"].value},isOnline(){return b["c"].value},isOfflineMode(){return b["b"].value},initOfflineData(){var t;const e=Object(b["a"])().findByID(this.offlineID),n=null===e||void 0===e||null===(t=e.personParams)||void 0===t?void 0:t.person;n&&(this.facts.birthDate=n.birthdate,this.facts.age=D()(s["a"].getSessionDate()).diff(this.facts.birthDate,"years"),this.facts.district=n.current_district,this.facts.village=n.current_village,this.facts.currentTA=n.current_traditional_authority,this.facts.gender=n.gender,this.ready=!0,this.setStartTime())},async saveFormEncounterAndProceed(t={}){let e="Pending",n=!1,a=null;const i=(new Date).getTime(),s=(i-this.encounterStartTime)/1e3,o=s/60;try{const e=await O["a"].buildValueText("Device",Object(T["f"])()),n=await O["a"].buildValueNumber("Review Time",o);a=[...await this.resolveObs(t.computedData),e,n]}catch(r){return console.error(""+r),Object(f["e"])("Unable to resolve observations")}if(!this.isOfflineMode()){try{const i=new O["a"](this.patientID,t.encounterTypeID,this.providerID);await i.createEncounter()&&await i.saveObservationList(a)&&(e="Success"),"function"===typeof t.callback&&await t.callback(i),n=!0}catch(r){n=!1,/NetworkError|Failed to fetch/i.test(""+r)?e="NetworkError":(e="Exception",console.error("Exception while saving an encounter: "+r))}if("Exception"===e)return Object(f["c"])("An error has occured!")}Object(b["a"])().saveObsOffline({observations:a,id:this.offlineID,uploadStatus:e,encounterName:this.$route.name,encounterTypeID:t.encounterTypeID,meta:t.formData,labOrders:t.labOrders,created:n},n),t.skipNextTask||this.nextTask()},runflowState(t,e=null){const n={};if(n[a.SET_PROVIDER]=t=>{const[e]=t.split(" "),n=Object(o["find"])(this.providers,{username:e});return n&&(this.providerID=n.person_id),a.CONTINUE},n[a.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),a.EXIT),n[a.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),a.EXIT),n[a.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),a.EXIT),t in n)return n[t](e)},async checkEncounterGuidelines(){const t=Object(h["a"])(this.facts,d);for(const o in t){var e,n;const r=t[o];if(null!==r&&void 0!==r&&null!==(e=r.actions)&&void 0!==e&&e.alert){var i;const t=this.runflowState(await(null===r||void 0===r||null===(i=r.actions)||void 0===i?void 0:i.alert(this.facts)));if(t===a.EXIT)return}if(null!==r&&void 0!==r&&null!==(n=r.actions)&&void 0!==n&&n.selection){var s;const t=await(null===r||void 0===r||null===(s=r.actions)||void 0===s?void 0:s.selection(this.facts));this.runflowState(t.flowState,t.value)}}},async setEncounterFacts(){try{const t=await m["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=t.programID===s["a"].getProgramID(),this.facts.outcome=t.outcome,this.facts.outcomeStartDate=t.startDate}catch(t){console.error(t),Object(f["c"])(""+t)}this.facts.currentTA=this.patient.getCurrentTA(),this.facts.district=this.patient.getCurrentDistrict(),this.facts.village=this.patient.getCurrentVillage(),this.facts.sessionDate=s["a"].getSessionDate(),this.facts.apiDate=s["a"].getCachedApiDate(),this.facts.isBdeMode=s["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.age=this.patient.getAge(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",s["a"].isBDE()&&(this.providers=await m["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((t,e)=>{const n=t.username.toUpperCase(),a=e.username.toUpperCase();return n<a?-1:n>a?1:0}).map(t=>{var e;let n=""+t.username;if(!Object(o["isEmpty"])(null===t||void 0===t||null===(e=t.person)||void 0===e?void 0:e.names)){var a;const[e]=(null===(a=t.person)||void 0===a?void 0:a.names)||[];n+=` (${e.given_name} ${e.family_name})`}return n}))},toOption(t,e={}){return{label:t,value:t,other:e}},mapStrToOptions(t){return t.map(t=>"string"===typeof t||"number"===typeof t?{label:t,value:t}:t)},patientDashboardUrl(){return"/patient/dashboard/"+this.$route.params.patient_id},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){try{const t=this.offlineID||this.patientID;await Object(r["b"])(t,this.$router,this.$route)}catch(t){console.error("Workflow error "+t),this.gotoPatientDashboard()}},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(t,e={}){return{label:t,value:"",other:{...e,values:this.yesNoOptions()}}},mapOptions(t){return t.map(t=>({label:t,value:t}))},toConditionalOptions(t){const e=[];for(const n of t)("boolean"!==typeof n[1]||n[1])&&e.push(this.toOption(n[0]));return e},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(t,e=""){const n=Object.values(t).filter(t=>t&&(t.tag===e||""===e)).reduce((t,e)=>{const n=e.obs?e.obs:e;return Array.isArray(n)?t=t.concat(n):"function"===typeof n?t.push(n()):t.push(n),t},[]);return Promise.all(n)},inArray(t,e){try{return t.filter(t=>e(t)).length>0}catch(n){return!1}},validateSeries(t){try{for(const e in t){const n=t[e]();if(n)return n}}catch(e){return[e]}}}});const y=g;e["a"]=y},7920:function(t,e,n){"use strict";var a=n("7a23");function i(t,e,n,i,s,o){return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(t.formType),{fields:t.fields,skipSummary:t.skipSummary,activeField:t.activeField,cancelDestinationPath:t.cancelDestinationPath,onOnFinish:t.onFinish,onFinish:t.onFinishAction,onOnIndex:t.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var s=n("9441"),o=Object(a["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:s["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(t,e){this.$emit("onFinish",t,e)},onIndex(t){this.$emit("onIndex",t)}}}),r=n("6b0d"),c=n.n(r);const l=c()(o,[["render",i]]);e["a"]=l},c21d:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("14d9");function a(t,e){const n=[],a=[-1,"",null,void 0];for(const i in e){if(!(i in t))continue;const s=t[i];a.includes(s)?n.push(!1):n.push(e[i](s,t))}return n.every(Boolean)}function i(t){return t.sort((t,e)=>t.priority&&e.priority&&t.priority<e.priority?-1:1)}function s(t){return t.sort((t,e)=>t.weight&&e.weight&&t.weight>e.weight?-1:1)}function o(t,e,n="",o="",r="priority"){const c=[];for(const i in e){const s=e[i],r=[s.target&&n&&s.target!=n,s.targetEvent&&o&&s.targetEvent!=o];r.some(Boolean)||a(t,s.conditions)&&(s.title=i,s.description&&(s.description.text=s.description.info(t)),c.push(s))}return"priority"===r?i(c):s(c)}},d1b9:function(t,e,n){"use strict";n.r(e);var a=n("7a23");function i(t,e,n,i,s,o){const r=Object(a["resolveComponent"])("his-standard-form");return Object(a["openBlock"])(),Object(a["createBlock"])(r,{fields:t.fields,onFinishAction:t.onFinish,skipSummary:!0,cancelDestinationPath:t.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])}n("14d9");var s=n("d95e"),o=n("7920"),r=n("2706"),c=n("7365"),l=n("cc6f");class u extends l["a"]{constructor(t,e){super(t,156,e)}getAssessmentValues(){return l["a"].getConceptsByCategory("fast_track")}}var d=n("b5e4"),h=Object(a["defineComponent"])({mixins:[c["a"]],components:{HisStandardForm:o["a"]},data:()=>({fields:[],fastTrack:{},options:[],values:[],gender:null}),watch:{ready:{async handler(t){t&&this.init(this.patient)},immediate:!0}},methods:{async onFinish(t){const e=await this.fastTrack.createEncounter();if(!e)return Object(d["e"])("Unable to create fast track encounter");{const e=await this.buildObs(t),n=await this.fastTrack.saveObservationList(e);if(!n)return Object(d["e"])("Unable to save patient observations");Object(d["d"])("Observations and encounter created!"),this.nextTask()}},async init(t){this.gender=t.getGender(),this.fastTrack=new u(t.getID(),this.providerID),this.values=await this.getYesNo(),this.options=await this.getOptions(),this.fields=this.getFields()},async buildObs(t){const e=[];return e.push(await this.fastTrack.buildValueCoded("Assess for fast track",t.ft_assessment.value)),t.ft_questions&&(await t.ft_questions.forEach(async t=>{e.push(await this.fastTrack.buildValueCoded(t.label,t.value))}),e.push(await this.fastTrack.buildValueCoded("Fast track",t.book_client.value))),e},async getOptions(){const t=this.getYesNo(),e=await this.fastTrack.getAssessmentValues("fast_track").map(e=>({label:e.name,value:"",other:{values:t}}));return"M"===this.gender?e.filter(t=>!t.label.match(/Pregnant/i)):e},getYesNo(){return[{label:"yes",value:"Yes"},{label:"no",value:"No"}]},getFields(){return[{id:"ft_assessment",helpText:"Assess client for FT",type:s["b"].TT_SELECT,validation:t=>r["a"].required(t),options:()=>this.getYesNo()},{id:"ft_questions",helpText:"Assess client for FT",type:s["b"].TT_MULTIPLE_YES_NO,condition(t){return"Yes"===t.ft_assessment.value},validation:t=>r["a"].anyEmpty(t),options:()=>this.options},{id:"book_client",helpText:"Select type of visit to book",type:s["b"].TT_SELECT,condition(t){return"Yes"===t.ft_assessment.value},validation:t=>r["a"].required(t),options:()=>[{label:"Fast track",value:"No"},{label:"Normal visit",value:"No"}]}]}}}),p=n("6b0d"),f=n.n(p);const m=f()(h,[["render",i]]);e["default"]=m}}]);
//# sourceMappingURL=chunk-0e8d09cc.9a786352.js.map