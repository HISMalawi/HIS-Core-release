(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5edbc3a2"],{7365:function(t,e,i){"use strict";i("14d9"),i("13d5");var n,a=i("7a23"),r=i("ad60"),s=i("2ef0"),o=i("0fa1"),c=i("7f35"),u=i("9283");(function(t){t["SET_PROVIDER"]="SET_PROVIDER",t["CHANGE_SESSION_DATE"]="change_session_date",t["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",t["CHANGE_PATIENT_OUTCOME"]="change_outcome",t["CONTINUE"]="continue",t["EXIT"]="exit"})(n||(n={}));const l=t=>u["b"].toStandardHisDisplayFormat(t),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:t})=>{const e=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+l(t),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===e?n.GO_TO_PATIENT_DASHBOARD:"Change outcome"===e?n.CHANGE_PATIENT_OUTCOME:n.CONTINUE}},conditions:{outcome(t){return"Patient died"===t},outcomeStartDate(t,{sessionDate:e}){return e>=t}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:t,sessionDate:e})=>{const i=await Object(c["a"])("Data integrity issue found","",`Session date ${l(e)} is less than birth date of ${l(t)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===i?n.CHANGE_SESSION_DATE:n.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(t,{sessionDate:e}){return e<t}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:t,encounterName:e,sessionDate:i,apiDate:a})=>{const r=await Object(c["c"])("Please select a provider for "+e,`BDE: ${l(i)} | Current: ${l(a)}`,t,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===r.action?{value:-1,flowState:n.GO_TO_PATIENT_DASHBOARD}:{value:r.selection,flowState:n.SET_PROVIDER}}},conditions:{isBdeMode(t){return t}}}};var p=i("c21d"),h=i("7920"),f=i("b5e4"),m=i("8e8b"),b=i("b432"),v=i("5a0c"),O=i.n(v),D=i("cc6f"),g=i("2ed9"),y=Object(a["defineComponent"])({components:{HisStandardForm:h["a"]},data:()=>({offlineID:null,patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{age:-1,gender:"",birthDate:"",sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,outcome:"",outcomeStartDate:"",village:"",district:"",currentTA:""},formLabel:"",ready:!1}),created(){this.$route.params.patient_id&&(this.offlineID=this.$route.params.patient_id,this.patientID=parseInt(""+this.$route.params.patient_id),this.goOffline()?this.initOfflineData():m["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(t=>{this.patient=t,Object(s["isEmpty"])(this.patient)||Object(b["a"])().cachePatient(this.patient),this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0}).catch(t=>console.log(t))}).catch(()=>{this.goOffline()&&this.initOfflineData()})}))},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{goOffline(){return!b["c"].value||b["b"].value},isOnline(){return b["c"].value},isOfflineMode(){return b["b"].value},initOfflineData(){var t;const e=Object(b["a"])().findByID(this.offlineID),i=null===e||void 0===e||null===(t=e.personParams)||void 0===t?void 0:t.person;i&&(this.facts.birthDate=i.birthdate,this.facts.age=O()(r["a"].getSessionDate()).diff(this.facts.birthDate,"years"),this.facts.district=i.current_district,this.facts.village=i.current_village,this.facts.currentTA=i.current_traditional_authority,this.facts.gender=i.gender,this.ready=!0)},async saveFormEncounterAndProceed(t={}){let e="Pending",i=!1,n=null;try{const e=await D["a"].buildValueText("Device",Object(g["f"])());n=[...await this.resolveObs(t.computedData),e]}catch(a){return console.error(""+a),Object(f["e"])("Unable to resolve observations")}if(!this.isOfflineMode()){try{const a=new D["a"](this.patientID,t.encounterTypeID,this.providerID);await a.createEncounter()&&await a.saveObservationList(n)&&(e="Success",i=!0),"function"===typeof t.callback&&await t.callback(a)}catch(a){i=!1,/NetworkError|Failed to fetch/i.test(""+a)?e="NetworkError":(e="Exception",console.error("Exception while saving an encounter: "+a))}if("Exception"===e)return Object(f["c"])("An error has occured!")}Object(b["a"])().saveObsOffline({observations:n,id:this.offlineID,uploadStatus:e,encounterName:this.$route.name,encounterTypeID:t.encounterTypeID,meta:t.formData,labOrders:t.labOrders,created:i}),t.skipNextTask||this.nextTask()},runflowState(t,e=null){const i={};if(i[n.SET_PROVIDER]=t=>{const[e]=t.split(" "),i=Object(s["find"])(this.providers,{username:e});return i&&(this.providerID=i.person_id),n.CONTINUE},i[n.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),n.EXIT),i[n.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),n.EXIT),i[n.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),n.EXIT),t in i)return i[t](e)},async checkEncounterGuidelines(){const t=Object(p["a"])(this.facts,d);for(const s in t){var e,i;const o=t[s];if(null!==o&&void 0!==o&&null!==(e=o.actions)&&void 0!==e&&e.alert){var a;const t=this.runflowState(await(null===o||void 0===o||null===(a=o.actions)||void 0===a?void 0:a.alert(this.facts)));if(t===n.EXIT)return}if(null!==o&&void 0!==o&&null!==(i=o.actions)&&void 0!==i&&i.selection){var r;const t=await(null===o||void 0===o||null===(r=o.actions)||void 0===r?void 0:r.selection(this.facts));this.runflowState(t.flowState,t.value)}}},async setEncounterFacts(){try{const t=await m["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=t.programID===r["a"].getProgramID(),this.facts.outcome=t.outcome,this.facts.outcomeStartDate=t.startDate}catch(t){console.error(t),Object(f["c"])(""+t)}this.facts.currentTA=this.patient.getCurrentTA(),this.facts.district=this.patient.getCurrentDistrict(),this.facts.village=this.patient.getCurrentVillage(),this.facts.sessionDate=r["a"].getSessionDate(),this.facts.apiDate=r["a"].getCachedApiDate(),this.facts.isBdeMode=r["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.age=this.patient.getAge(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",r["a"].isBDE()&&(this.providers=await m["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((t,e)=>{const i=t.username.toUpperCase(),n=e.username.toUpperCase();return i<n?-1:i>n?1:0}).map(t=>{var e;let i=""+t.username;if(!Object(s["isEmpty"])(null===t||void 0===t||null===(e=t.person)||void 0===e?void 0:e.names)){var n;const[e]=(null===(n=t.person)||void 0===n?void 0:n.names)||[];i+=` (${e.given_name} ${e.family_name})`}return i}))},toOption(t,e={}){return{label:t,value:t,other:e}},mapStrToOptions(t){return t.map(t=>"string"===typeof t||"number"===typeof t?{label:t,value:t}:t)},patientDashboardUrl(){return"/patient/dashboard/"+this.$route.params.patient_id},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){try{const t=this.offlineID||this.patientID;await Object(o["b"])(t,this.$router,this.$route)}catch(t){console.error("Workflow error "+t),this.gotoPatientDashboard()}},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(t,e={}){return{label:t,value:"",other:{...e,values:this.yesNoOptions()}}},mapOptions(t){return t.map(t=>({label:t,value:t}))},toConditionalOptions(t){const e=[];for(const i of t)("boolean"!==typeof i[1]||i[1])&&e.push(this.toOption(i[0]));return e},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(t,e=""){const i=Object.values(t).filter(t=>t&&(t.tag===e||""===e)).reduce((t,e)=>{const i=e.obs?e.obs:e;return Array.isArray(i)?t=t.concat(i):"function"===typeof i?t.push(i()):t.push(i),t},[]);return Promise.all(i)},inArray(t,e){try{return t.filter(t=>e(t)).length>0}catch(i){return!1}},validateSeries(t){try{for(const e in t){const i=t[e]();if(i)return i}}catch(e){return[e]}}}});const T=y;e["a"]=T},"754d":function(t,e,i){"use strict";i.r(e);var n=i("7a23");function a(t,e,i,a,r,s){const o=Object(n["resolveComponent"])("his-standard-form");return Object(n["openBlock"])(),Object(n["createBlock"])(o,{fields:t.fields,activeField:t.activeField,onFinishAction:t.onFinish,skipSummary:!0,cancelDestinationPath:t.cancelDestination},null,8,["fields","activeField","onFinishAction","cancelDestinationPath"])}i("14d9");var r=i("d95e"),s=i("7920"),o=i("2706"),c=i("ade3"),u=i("cc6f"),l=i("ad60"),d=i("cc74");class p extends u["a"]{constructor(t,e){super(t,51,e),Object(c["a"])(this,"sitePrefix",void 0),this.sitePrefix=""}getSitePrefix(){return this.sitePrefix}async loadSitePrefix(){this.sitePrefix=await d["b"].sitePrefix()}createArvNumber(t){return l["a"].postJson("/patient_identifiers/",{patient_id:this.patientID,identifier_type:4,identifier:t})}buildArvNumber(t){return`${this.sitePrefix}-ARV-${t}`}}var h=i("8df6"),f=i("b5e4"),m=i("7365"),b=i("3e53"),v=i("2ef0"),O=i("8e8b"),D=Object(n["defineComponent"])({mixins:[m["a"]],components:{HisStandardForm:s["a"]},data:()=>({reception:{},activeField:"",hasARVNumber:!0,suggestedNumber:"",patientType:{}}),watch:{ready:{handler(t){t&&(this.reception=new p(this.patientID,this.providerID),this.fields=this.getFields())},immediate:!0}},methods:{async onFinish(t,e){const i=await this.reception.createEncounter();if(!i)return Object(f["e"])("Unable to create encounter");const n=await this.resolveObs(e,"obs"),a=await this.reception.saveObservationList(n);if(!a)return Object(f["e"])("Unable to create Obs");if(t.capture_arv&&"Yes"===t.capture_arv.value){const t=await this.reception.createArvNumber(e.arv_number);if(!t)return Object(f["e"])("Unable to save Arv number");O["a"].invalidate("ACTIVE_PATIENT")}Object(f["d"])("Encounter created");const r=Object(v["find"])(t.who_is_present,{value:"Yes",label:"Guardian present?"});if(r&&Object(v["isEmpty"])(await this.patient.getGuardian()))return this.$router.push("/guardian/registration/"+this.patientID);this.nextTask()},getFields(){return[{id:"who_is_present",helpText:"HIV reception",type:r["b"].TT_MULTIPLE_YES_NO,validation:t=>o["a"].required(t)||o["a"].neitherOr(t)||o["a"].anyEmpty(t),computedValue:t=>({tag:"obs",obs:t.map(({other:t,value:e})=>this.reception.buildValueCoded(t.concept,e))}),onValueUpdate:async(t,e)=>t.map(t=>(e.label!=t.label&&"No"===e.value&&(t.value="Yes"),t)),options:t=>t.who_is_present?t.who_is_present:[{label:"Patient present?",value:"",other:{concept:"Patient Present",property:"patient_present",values:this.yesNoOptions()}},{label:"Guardian present?",value:"",other:{concept:"Guardian Present",property:"guardian_present",values:this.yesNoOptions()}}]},{id:"capture_arv",helpText:"Capture ARV Number?",type:r["b"].TT_SELECT,requireNext:!0,init:async()=>{const t=this.patient.getPatientIdentifier(4);return""===t&&(this.hasARVNumber=!1),this.patientType=new h["a"](this.patientID,this.providerID),await this.patientType.loadPatientType(),!0},condition:()=>!this.hasARVNumber&&"New patient"===this.patientType.getType(),validation:t=>o["a"].required(t),options:()=>this.yesNoOptions()},{id:"arv_number",helpText:"ART number",type:r["b"].TT_TEXT,init:async()=>{if(await this.reception.loadSitePrefix(),!this.hasARVNumber){const t=await l["a"].getNextSuggestedARVNumber();this.suggestedNumber=t.arv_number.replace(/^\D+|\s/g,"")}return!0},computedValue:({value:t})=>t,validation:t=>o["a"].required(t),condition:t=>!this.hasARVNumber&&"Yes"===t.capture_arv.value,defaultValue:()=>this.suggestedNumber,config:{prependValue:()=>{const t=b["a"].getActiveApp();if(t&&t.programPatientIdentifiers){const e=t.programPatientIdentifiers["ARV Number"];return e.prefix()}return""}}}]}}}),g=i("d959"),y=i.n(g);const T=y()(D,[["render",a]]);e["default"]=T},7920:function(t,e,i){"use strict";var n=i("7a23");function a(t,e,i,a,r,s){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(t.formType),{fields:t.fields,skipSummary:t.skipSummary,activeField:t.activeField,cancelDestinationPath:t.cancelDestinationPath,onOnFinish:t.onFinish,onFinish:t.onFinishAction,onOnIndex:t.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var r=i("9441"),s=Object(n["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:r["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(t,e){this.$emit("onFinish",t,e)},onIndex(t){this.$emit("onIndex",t)}}}),o=i("d959"),c=i.n(o);const u=c()(s,[["render",a]]);e["a"]=u},c21d:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i("14d9");function n(t,e){const i=[],n=[-1,"",null,void 0];for(const a in e){if(!(a in t))continue;const r=t[a];n.includes(r)?i.push(!1):i.push(e[a](r,t))}return i.every(Boolean)}function a(t){return t.sort((t,e)=>t.priority&&e.priority&&t.priority<e.priority?-1:1)}function r(t){return t.sort((t,e)=>t.weight&&e.weight&&t.weight>e.weight?-1:1)}function s(t,e,i="",s="",o="priority"){const c=[];for(const a in e){const r=e[a],o=[r.target&&i&&r.target!=i,r.targetEvent&&s&&r.targetEvent!=s];o.some(Boolean)||n(t,r.conditions)&&(r.title=a,r.description&&(r.description.text=r.description.info(t)),c.push(r))}return"priority"===o?a(c):r(c)}}}]);
//# sourceMappingURL=chunk-5edbc3a2.1ed4885c.js.map