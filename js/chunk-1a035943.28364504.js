(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a035943"],{7365:function(e,t,i){"use strict";i("14d9"),i("13d5");var o,n=i("7a23"),a=i("ad60"),s=i("2ef0"),r=i("0fa1"),l=i("7f35"),c=i("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(o||(o={}));const u=e=>c["b"].toStandardHisDisplayFormat(e),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(l["a"])("Data Integrity Issue Found","Patient died on "+u(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?o.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?o.CHANGE_PATIENT_OUTCOME:o.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const i=await Object(l["a"])("Data integrity issue found","",`Session date ${u(t)} is less than birth date of ${u(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===i?o.CHANGE_SESSION_DATE:o.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:i,apiDate:n})=>{const a=await Object(l["c"])("Please select a provider for "+t,`BDE: ${u(i)} | Current: ${u(n)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===a.action?{value:-1,flowState:o.GO_TO_PATIENT_DASHBOARD}:{value:a.selection,flowState:o.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var h=i("c21d"),p=i("7920"),m=i("b5e4"),y=i("8e8b"),b=i("fe70"),v=Object(n["defineComponent"])({components:{HisStandardForm:p["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},formLabel:"",ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.formLabel=(""+e.name).toUpperCase(),this.patientID=parseInt(e.params.patient_id),y["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const i={};if(i[o.SET_PROVIDER]=e=>{const[t]=e.split(" "),i=Object(s["find"])(this.providers,{username:t});return i&&(this.providerID=i.person_id),o.CONTINUE},i[o.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),o.EXIT),i[o.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),o.EXIT),i[o.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),o.EXIT),e in i)return i[e](t)},async checkEncounterGuidelines(){const e=Object(h["a"])(this.facts,d);for(const s in e){var t,i;const r=e[s];if(null!==r&&void 0!==r&&null!==(t=r.actions)&&void 0!==t&&t.alert){var n;const e=this.runflowState(await(null===r||void 0===r||null===(n=r.actions)||void 0===n?void 0:n.alert(this.facts)));if(e===o.EXIT)return}if(null!==r&&void 0!==r&&null!==(i=r.actions)&&void 0!==i&&i.selection){var a;const e=await(null===r||void 0===r||null===(a=r.actions)||void 0===a?void 0:a.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await y["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=e.programID===a["a"].getProgramID(),this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(m["c"])(""+e)}this.facts.sessionDate=a["a"].getSessionDate(),this.facts.apiDate=a["a"].getCachedApiDate(),this.facts.isBdeMode=a["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",a["a"].isBDE()&&(this.providers=await y["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const i=e.username.toUpperCase(),o=t.username.toUpperCase();return i<o?-1:i>o?1:0}).map(e=>{var t;let i=""+e.username;if(!Object(s["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var o;const[t]=(null===(o=e.person)||void 0===o?void 0:o.names)||[];i+=` (${t.given_name} ${t.family_name})`}return i}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>"string"===typeof e||"number"===typeof e?{label:e,value:e}:e)},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){(await b["h"].create({backdropDismiss:!1,message:"Checking Next task.."})).present();try{await Object(r["b"])(this.patientID,this.$router,this.$route)}catch(e){console.error(e)}b["h"].getTop().then(e=>e&&b["h"].dismiss())},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},toConditionalOptions(e){const t=[];for(const i of e)("boolean"!==typeof i[1]||i[1])&&t.push(this.toOption(i[0]));return t},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const i=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const i=t.obs?t.obs:t;return Array.isArray(i)?e=e.concat(i):"function"===typeof i?e.push(i()):e.push(i),e},[]);return Promise.all(i)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(i){return!1}},validateSeries(e){try{for(const t in e){const i=e[t]();if(i)return i}}catch(t){return[t]}}}});const f=v;t["a"]=f},"75fa":function(e,t,i){"use strict";i.r(t);var o=i("7a23");function n(e,t,i,n,a,s){const r=Object(o["resolveComponent"])("his-standard-form");return Object(o["openBlock"])(),Object(o["createBlock"])(r,{fields:e.fields,onFinishAction:e.onFinish,skipSummary:!1,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])}i("14d9");var a=i("d95e"),s=i("7920"),r=i("2706"),l=i("7365"),c=i("fde0"),u=i("b5e4"),d=Object(o["defineComponent"])({mixins:[l["a"]],components:{HisStandardForm:s["a"]},data:()=>({socialHistory:{},obs:[]}),watch:{ready:{async handler(e){e&&(this.socialHistory=new c["a"](this.patientID,this.providerID),this.fields=await this.getFields())},immediate:!0}},methods:{async onFinish(e){const t=await this.socialHistory.createEncounter();if(!t)return Object(u["e"])("Unable to create encounter");const i=await Promise.all([...this.obs]),o=await this.socialHistory.saveObservationList(i);if(!o)return Object(u["e"])("Unable to save patient observations");Object(u["d"])("Observations and encounter created!"),this.nextTask()},getFields(){return[{id:"smoking_history",helpText:"Have you ever smoked cigarettes?",type:a["b"].TT_SELECT,validation:e=>r["a"].required(e),options:()=>[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],unload:async e=>{this.obs.push(this.socialHistory.buildValueCoded("SMOKE_HIS",e.value))}},{id:"number_of_cigarettes",helpText:"Number of cigarettes smoked per day",type:a["b"].TT_NUMBER,validation:e=>r["a"].rangeOf(e,1,90),condition(e){return"Yes"===e.smoking_history.value},unload:async e=>{this.obs.push(this.socialHistory.buildValueNumber("Number of cigarettes smoked per day",e.value))}},{id:"smoking_duration",helpText:"How long have you been smoking?",type:a["b"].TT_SELECT,validation:e=>r["a"].required(e),condition(e){return"Yes"===e.smoking_history.value},options:()=>[{label:"Less than five years",value:"Less than five years"},{label:"Five years or more",value:"Five years or more"}],unload:async e=>{this.obs.push(this.socialHistory.buildValueText("Smoking duration",e.value))}},{id:"current_smoker",helpText:"Do you still smoke?",type:a["b"].TT_SELECT,validation:e=>r["a"].required(e),condition(e){return"Yes"===e.smoking_history.value},options:()=>[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],unload:async e=>{this.obs.push(this.socialHistory.buildValueCoded("Current smoker",e.value))}},{id:"alcohol_history",helpText:"Do you drink alcohol?",type:a["b"].TT_SELECT,validation:e=>r["a"].required(e),options:()=>[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],unload:async e=>{this.obs.push(this.socialHistory.buildValueCoded("Does the patient drink alcohol?",e.value))}},{id:"number_of_drinks",helpText:"How many alcoholic drinks do you have per day?",type:a["b"].TT_NUMBER,validation:e=>r["a"].required(e),condition(e){return"Yes"===e.alcohol_history.value},unload:async e=>{this.obs.push(this.socialHistory.buildValueNumber("Alcoholic drinks per day",e.value))}},{id:"number_of_days_drank",helpText:"Number of days per week alcohol is used?",type:a["b"].TT_NUMBER,validation:e=>r["a"].rangeOf(e,1,7),condition(e){return"Yes"===e.alcohol_history.value},unload:async e=>{this.obs.push(this.socialHistory.buildValueNumber("Number of days per week alcohol is used",e.value))}},{id:"exercise",helpText:"Do you do any physical exercise?",type:a["b"].TT_SELECT,validation:e=>r["a"].required(e),options:()=>[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],unload:async e=>{this.obs.push(this.socialHistory.buildValueCoded("Physical Exercises",e.value))}},{id:"employment",helpText:"Type of employment?",type:a["b"].TT_SELECT,validation:e=>r["a"].required(e),options:()=>[{label:"Active",value:"Active"},{label:"Sedentary",value:"Sedentary"}],unload:async e=>{this.obs.push(this.socialHistory.buildValueText("Type of employment",e.value))}}]}}}),h=i("d959"),p=i.n(h);const m=p()(d,[["render",n]]);t["default"]=m},7920:function(e,t,i){"use strict";var o=i("7a23");function n(e,t,i,n,a,s){return Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var a=i("9441"),s=Object(o["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:a["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),r=i("d959"),l=i.n(r);const c=l()(s,[["render",n]]);t["a"]=c},c21d:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i("14d9");function o(e,t){const i=[],o=[-1,"",null,void 0];for(const n in t){if(!(n in e))continue;const a=e[n];o.includes(a)?i.push(!1):i.push(t[n](a,e))}return i.every(Boolean)}function n(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function a(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function s(e,t,i="",s="",r="priority"){const l=[];for(const n in t){const a=t[n],r=[a.target&&i&&a.target!=i,a.targetEvent&&s&&a.targetEvent!=s];r.some(Boolean)||o(e,a.conditions)&&(a.title=n,a.description&&(a.description.text=a.description.info(e)),l.push(a))}return"priority"===r?n(l):a(l)}},fde0:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var o=i("cc6f");class n extends o["a"]{constructor(e,t){super(e,84,t)}}}}]);
//# sourceMappingURL=chunk-1a035943.28364504.js.map