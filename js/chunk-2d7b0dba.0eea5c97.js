(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d7b0dba"],{7365:function(e,t,a){"use strict";a("13d5");var n,s=a("7a23"),i=a("ad60"),o=a("2ef0"),r=a("0fa1"),c=a("7f35"),u=a("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(n||(n={}));const l=e=>u["b"].toStandardHisDisplayFormat(e),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+l(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?n.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?n.CHANGE_PATIENT_OUTCOME:n.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const a=await Object(c["a"])("Data integrity issue found","",`Session date ${l(t)} is less than birth date of ${l(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===a?n.CHANGE_SESSION_DATE:n.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:a,apiDate:s})=>{const i=await Object(c["c"])("Please select a provider for "+t,`BDE: ${l(a)} | Current: ${l(s)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===i.action?{value:-1,flowState:n.GO_TO_PATIENT_DASHBOARD}:{value:i.selection,flowState:n.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var h=a("c21d"),p=a("7920"),m=a("b5e4"),v=a("8e8b"),b=a("fe70"),f=Object(s["defineComponent"])({components:{HisStandardForm:p["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},formLabel:"",ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.formLabel=(""+e.name).toUpperCase(),this.patientID=parseInt(e.params.patient_id),v["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const a={};if(a[n.SET_PROVIDER]=e=>{const[t]=e.split(" "),a=Object(o["find"])(this.providers,{username:t});return a&&(this.providerID=a.person_id),n.CONTINUE},a[n.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),n.EXIT),a[n.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),n.EXIT),a[n.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),n.EXIT),e in a)return a[e](t)},async checkEncounterGuidelines(){const e=Object(h["a"])(this.facts,d);for(const o in e){var t,a;const r=e[o];if(null!==r&&void 0!==r&&null!==(t=r.actions)&&void 0!==t&&t.alert){var s;const e=this.runflowState(await(null===r||void 0===r||null===(s=r.actions)||void 0===s?void 0:s.alert(this.facts)));if(e===n.EXIT)return}if(null!==r&&void 0!==r&&null!==(a=r.actions)&&void 0!==a&&a.selection){var i;const e=await(null===r||void 0===r||null===(i=r.actions)||void 0===i?void 0:i.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await v["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=e.programID===i["a"].getProgramID(),this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(m["c"])(""+e)}this.facts.sessionDate=i["a"].getSessionDate(),this.facts.apiDate=i["a"].getCachedApiDate(),this.facts.isBdeMode=i["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",i["a"].isBDE()&&(this.providers=await v["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const a=e.username.toUpperCase(),n=t.username.toUpperCase();return a<n?-1:a>n?1:0}).map(e=>{var t;let a=""+e.username;if(!Object(o["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var n;const[t]=(null===(n=e.person)||void 0===n?void 0:n.names)||[];a+=` (${t.given_name} ${t.family_name})`}return a}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>"string"===typeof e||"number"===typeof e?{label:e,value:e}:e)},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){(await b["d"].create({backdropDismiss:!1,message:"Checking Next task.."})).present();try{await Object(r["b"])(this.patientID,this.$router,this.$route)}catch(e){console.error(e)}b["d"].getTop().then(e=>e&&b["d"].dismiss())},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},toConditionalOptions(e){const t=[];for(const a of e)("boolean"!==typeof a[1]||a[1])&&t.push(this.toOption(a[0]));return t},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const a=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const a=t.obs?t.obs:t;return Array.isArray(a)?e=e.concat(a):"function"===typeof a?e.push(a()):e.push(a),e},[]);return Promise.all(a)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(a){return!1}},validateSeries(e){try{for(const t in e){const a=e[t]();if(a)return a}}catch(t){return[t]}}}});const C=f;t["a"]=C},7920:function(e,t,a){"use strict";var n=a("7a23");function s(e,t,a,s,i,o){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,8,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var i=a("9441"),o=Object(n["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:i["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),r=a("d959"),c=a.n(r);const u=c()(o,[["render",s]]);t["a"]=u},c21d:function(e,t,a){"use strict";function n(e,t){const a=[],n=[-1,"",null,void 0];for(const s in t){if(!(s in e))continue;const i=e[s];n.includes(i)?a.push(!1):a.push(t[s](i,e))}return a.every(Boolean)}function s(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function i(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function o(e,t,a="",o="",r="priority"){const c=[];for(const s in t){const i=t[s],r=[i.target&&a&&i.target!=a,i.targetEvent&&o&&i.targetEvent!=o];r.some(Boolean)||n(e,i.conditions)&&(i.title=s,i.description&&(i.description.text=i.description.info(e)),c.push(i))}return"priority"===r?s(c):i(c)}a.d(t,"a",(function(){return o}))},e7aa:function(e,t,a){"use strict";a.r(t);var n=a("7a23");function s(e,t,a,s,i,o){const r=Object(n["resolveComponent"])("his-standard-form");return Object(n["openBlock"])(),Object(n["createBlock"])(r,{fields:e.fields,onFinishAction:e.onFinish,skipSummary:!1,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])}var i=a("d95e"),o=a("7920"),r=a("2706"),c=a("7365"),u=a("cc6f");class l extends u["a"]{constructor(e,t){super(e,181,t),this.hivStatus="",this.artStatus="",this.arvNumber="",this.arvStartDate=""}getHivStatus(){return this.hivStatus}getArtStatus(){return this.artStatus}getArvNumber(){return this.arvNumber}getArvStartDate(){return this.arvStartDate}isHivPositive(){return!!this.hivStatus.match(/positive/i)}async loadArtStatus(){const e=await u["a"].getJson(`programs/12/patients/${this.patientID}/art_hiv_status`);e&&(this.hivStatus=e["hiv_status"]||this.hivStatus,this.artStatus=e["art_status"]||"",this.arvNumber=e["arv_number"]||"",this.arvStartDate=e["arv_start_date"]||"")}}var d=a("b5e4"),h=a("b446"),p=a("e86e"),m=a("8158"),v=Object(n["defineComponent"])({mixins:[c["a"]],components:{HisStandardForm:o["a"]},data:()=>({assessment:{},obs:[],showHIVQuestions:!0,offerCxCa:!1}),watch:{patient:{async handler(){this.assessment=new l(this.patientID,this.providerID),await this.assessment.loadArtStatus(),""!==this.assessment.getHivStatus()&&(this.showHIVQuestions=!1),await this.setOfferCxCa(),this.fields=await this.getFields()},deep:!0}},methods:{async onFinish(e,t){const a=await this.assessment.createEncounter();if(!a)return Object(d["e"])("Unable to create encounter");const n=[];Object.keys(t).forEach(e=>{n.push(t[e].obs)});const s=await Promise.all([...this.obs,...n]),i=await this.assessment.saveObservationList(s);if(!i)return Object(d["e"])("Unable to save patient observations");Object(d["d"])("Observations and encounter created!"),this.nextTask()},async setOfferCxCa(){const e=await this.assessment.getFirstValueCoded("Offer CxCa");return this.offerCxCa=e&&"Yes"===e,this.offerCxCa||this.obs.push(this.assessment.buildValueCoded("Ever had CxCa","No")),!0},hasHIVStatus(){return""!==this.assessment.getHivStatus},enterPreviousCxCaData(e){const t="Yes"===e.ever_had_cxca.value,a="Yes"===e.results_available.value;return t&&a},getFacilities(e=""){return Object(p["b"])(e)},getReasonsForNoCxcaOptions(){return m["a"].getConceptsByCategory("reason_for_no_cxca").map(e=>({label:e.name,value:e.name,other:{c:e}}))},getFields(){return[{id:"reason_for_visit",helpText:"Reason for visit",type:i["b"].TT_SELECT,validation:e=>r["a"].required(e),options:()=>[{label:"Initial screening",value:"Initial screening"},{label:"Postponed treatmment",value:"Postponed treatment"},{label:"One year subsequent check-up after treatment",value:"One year subsequent check-up after treatment"},{label:"Subsequent screening",value:"Subsequent screening"},{label:"Problem visit after treatment",value:"Problem visit after treatment"},{label:"Referral",value:"Referral"}],computedValue:e=>({obs:this.assessment.buildValueCoded("Reason for visit",e.value)})},{id:"hiv_status",helpText:"HIV status",type:i["b"].TT_SELECT,condition:()=>this.showHIVQuestions,validation:e=>r["a"].required(e),options:()=>[{label:"Positive on ART",value:"Positive on ART"},{label:"Positive Not on ART",value:"Positive Not on ART"},{label:"Negative",value:"Negative"},{label:"Never tested",value:"Never tested"},{label:"Prefers Not to disclose",value:"Undisclosed"}],computedValue:e=>({obs:this.assessment.buildValueCoded("HIV status",e.value)})},...Object(h["b"])({id:"hiv_test_date",helpText:"HIV test result date",required:!0,condition:e=>e.hiv_status.value.match(/Negative|ART/i),minDate:()=>this.patient.getBirthdate(),maxDate:()=>this.assessment.getDate(),estimation:{allowUnknown:!1},computeValue:(e,t)=>({date:e,tag:"cxca screening",isEstimate:t,obs:this.assessment.buildValueDate("HIV test date",e)})},this.assessment.getDate()),{id:"ever_had_cxca",helpText:"Ever had CxCa screening",type:i["b"].TT_SELECT,condition:e=>"Initial screening"!==e.reason_for_visit.value,options:()=>this.yesNoOptions(),validation:e=>r["a"].required(e),computedValue:e=>({obs:this.assessment.buildValueCoded("Ever had CxCa",e.value)})},{id:"results_available",helpText:"Results available?",type:i["b"].TT_SELECT,validation:e=>r["a"].required(e),condition:e=>"Initial screening"!==e.reason_for_visit.value&&"No"!==e.ever_had_cxca.value,options:()=>this.yesNoOptions(),computedValue:e=>({obs:this.assessment.buildValueCoded("CxCa test results",e.value)})},{id:"location",helpText:"CxCa screening location",type:i["b"].TT_SELECT,validation:e=>r["a"].required(e),options:(e,t="")=>this.getFacilities(t),config:{showKeyboard:!0,isFilterDataViaApi:!0},condition:e=>this.enterPreviousCxCaData(e),computedValue:e=>({obs:this.assessment.buildValueText("Previous CxCa location",e.value)})},...Object(h["b"])({id:"cxca_date",helpText:"Previous CxCa test",required:!0,minDate:()=>this.patient.getBirthdate(),maxDate:()=>this.assessment.getDate(),estimation:{allowUnknown:!1},condition:e=>this.enterPreviousCxCaData(e),computeValue:(e,t)=>({date:e,tag:"cxca screening",isEstimate:t,obs:this.assessment.buildValueDate("cxca test date",e)})},this.assessment.getDate()),{id:"previous_screening_method",helpText:"Previous screening method",type:i["b"].TT_SELECT,validation:e=>r["a"].required(e),condition:e=>this.enterPreviousCxCaData(e),options:()=>[{label:"VIA",value:"VIA"},{label:"PAP Smear",value:"PAP Smear"},{label:"HPV DNA",value:"HPV DNA"},{label:"Speculum Exam",value:"Speculum Exam"}],computedValue:e=>({obs:this.assessment.buildValueCoded("Previous CxCa screening method",e.value)})},{id:"offer_CxCa",helpText:"Offer CxCa screening today",type:i["b"].TT_SELECT,validation:e=>r["a"].required(e),options:()=>this.yesNoOptions(),computedValue:e=>({obs:this.assessment.buildValueCoded("Offer CxCa",e.value)})},{id:"screening_method",helpText:"Screening method being offered",type:i["b"].TT_SELECT,validation:e=>r["a"].required(e),condition:e=>"Yes"===e.offer_CxCa.value,options:()=>[{label:"VIA",value:"VIA"},{label:"PAP Smear",value:"PAP Smear"},{label:"HPV DNA",value:"HPV DNA"},{label:"Speculum Exam",value:"Speculum Exam"}],computedValue:e=>({obs:this.assessment.buildValueCoded("CxCa screening method",e.value)})},{id:"reason_for_no_cxca",helpText:"Reason for NOT offering CxCa screening",type:i["b"].TT_SELECT,validation:e=>r["a"].required(e),condition:e=>"No"===e.offer_CxCa.value,options:()=>this.getReasonsForNoCxcaOptions(),computedValue:e=>({obs:this.assessment.buildValueCoded("Reason for NOT offering CxCa",e.value)})}]}}}),b=a("d959"),f=a.n(b);const C=f()(v,[["render",s]]);t["default"]=C},e86e:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"f",(function(){return c})),a.d(t,"e",(function(){return u})),a.d(t,"a",(function(){return l})),a.d(t,"g",(function(){return d})),a.d(t,"h",(function(){return h}));var n=a("5713"),s=a("2ef0");async function i(e=""){const t=await n["a"].getFacilities({name:e});return t.filter(e=>!Object(s["isEmpty"])(e)&&""!=e.name.trim()).map(e=>({label:e.name,value:e.location_id,other:e}))}async function o(e=""){const t=await n["a"].getLabs({search_name:e});return t.map(e=>({label:e,value:e}))}async function r(e=""){const t=await n["a"].getFacilities({name:e,tag:"Facility adult sections"});return t.map(e=>({label:e.name,value:e.name,other:e}))}async function c(){const e=await n["a"].getSpecialistClinics();return e.map(e=>({label:e.name,value:e.name,other:e}))}async function u(){const e=await n["a"].getRegions();return e.map(e=>({label:e.name,value:e.region_id,other:e}))}async function l(e){const t=await n["a"].getDistricts(e);return t.map(e=>({label:e.name,value:e.district_id,other:e}))}async function d(e,t=""){const a=await n["a"].getTraditionalAuthorities(e,t);return a.map(e=>({label:e.name,value:e.traditional_authority_id,other:e}))}async function h(e,t=""){const a=await n["a"].getVillages(e,t);return a.map(e=>({label:e.name,value:e.village_id,other:e}))}}}]);
//# sourceMappingURL=chunk-2d7b0dba.0eea5c97.js.map