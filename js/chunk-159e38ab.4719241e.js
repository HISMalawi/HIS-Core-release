(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-159e38ab"],{1226:function(e,t,n){"use strict";n.r(t);var i=n("7a23");function o(e,t,n,o,a,s){const r=Object(i["resolveComponent"])("his-standard-form"),c=Object(i["resolveComponent"])("ion-page");return Object(i["openBlock"])(),Object(i["createBlock"])(c,null,{default:Object(i["withCtx"])(()=>[Object(i["createVNode"])(r,{fields:e.formFields,skipSummary:!0,onFinishAction:e.onFinish,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}var a=n("7365"),s=n("d95e"),r=n("cc6f"),c=n("8158");class l extends r["a"]{constructor(e,t){super(e,83,t)}static surgicalHistoryOptions(){return c["a"].getConceptsByCategory("anc_surgical_history").sort((e,t)=>e.name>t.name?1:-1)}}var d=n("2706"),u=n("d867"),p=n("2ef0"),h=Object(i["defineComponent"])({components:{IonPage:u["D"]},mixins:[a["a"]],data:()=>({formFields:[],service:{}}),watch:{ready:{handler(e){e&&(this.formFields=this.getFields())},immediate:!0}},methods:{async onFinish(e,t){const n=await this.resolveObs(t),i=new l(this.patientID,this.providerID);await i.createEncounter(),await i.saveObservationList(n),this.nextTask()},surgeryOptions(e){return[...l.surgicalHistoryOptions(),{name:"None"}].map(t=>e({label:t.name,value:"Yes",isChecked:!1}))},getFields(){return[{id:"history",helpText:"Previous Surgical Procedure(s) Done",type:s["b"].TT_MULTIPLE_SELECT,validation:e=>d["a"].required(e),onValueUpdate:(e,t)=>{if("None"===t.label&&t.isChecked)return e.map(e=>("None"!=e.label&&(e.isChecked=!1),e));if("None"!=t.label&&t.isChecked){const t=Object(p["findIndex"])(e,{label:"None"});e[t].isChecked=!1}return e},computedValue:e=>Object(p["find"])(e,{label:"None"})?l.buildValueText("Procedure done","None"):e.map(e=>l.buildValueCoded(e.label,""+e.value)),options:()=>this.surgeryOptions(e=>e),config:{footerBtns:[{name:"None",slot:"end",onClickComponentEvents:{refreshOptions:()=>this.surgeryOptions(e=>(e.isChecked="None"===e.label,e))},onClick:()=>"None"}]}}]}}}),m=n("6b0d"),f=n.n(m);const O=f()(h,[["render",o]]);t["default"]=O},7365:function(e,t,n){"use strict";n("14d9"),n("13d5");var i,o=n("7a23"),a=n("ad60"),s=n("2ef0"),r=n("0fa1"),c=n("7f35"),l=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(i||(i={}));const d=e=>l["b"].toStandardHisDisplayFormat(e),u={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+d(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?i.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?i.CHANGE_PATIENT_OUTCOME:i.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${d(t)} is less than birth date of ${d(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?i.CHANGE_SESSION_DATE:i.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:o})=>{const a=await Object(c["c"])("Please select a provider for "+t,`BDE: ${d(n)} | Current: ${d(o)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===a.action?{value:-1,flowState:i.GO_TO_PATIENT_DASHBOARD}:{value:a.selection,flowState:i.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var p=n("c21d"),h=n("7920"),m=n("b5e4"),f=n("8e8b"),O=Object(o["defineComponent"])({components:{HisStandardForm:h["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.patientID=parseInt(e.params.patient_id),f["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const n={};if(n[i.SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(s["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),i.CONTINUE},n[i.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),i.EXIT),n[i.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),i.EXIT),n[i.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),i.EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(p["a"])(this.facts,u);for(const s in e){var t,n;const r=e[s];if(null!==r&&void 0!==r&&null!==(t=r.actions)&&void 0!==t&&t.alert){var o;const e=this.runflowState(await(null===r||void 0===r||null===(o=r.actions)||void 0===o?void 0:o.alert(this.facts)));if(e===i.EXIT)return}if(null!==r&&void 0!==r&&null!==(n=r.actions)&&void 0!==n&&n.selection){var a;const e=await(null===r||void 0===r||null===(a=r.actions)||void 0===a?void 0:a.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await f["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(m["c"])(""+e)}this.facts.sessionDate=a["a"].getSessionDate(),this.facts.apiDate=a["a"].getCachedApiDate(),this.facts.isBdeMode=a["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",a["a"].isBDE()&&(this.providers=await f["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),i=t.username.toUpperCase();return n<i?-1:n>i?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(s["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var i;const[t]=(null===(i=e.person)||void 0===i?void 0:i.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>({label:e,value:e}))},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},nextTask(){return Object(r["b"])(this.patientID,this.$router)},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const v=O;t["a"]=v},7920:function(e,t,n){"use strict";var i=n("7a23");function o(e,t,n,o,a,s){return Object(i["openBlock"])(),Object(i["createBlock"])(Object(i["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var a=n("9441"),s=Object(i["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:a["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),r=n("6b0d"),c=n.n(r);const l=c()(s,[["render",o]]);t["a"]=l},c21d:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("14d9");function i(e,t){const n=[],i=[-1,"",null,void 0];for(const o in t){if(!(o in e))continue;const a=e[o];i.includes(a)?n.push(!1):n.push(t[o](a,e))}return n.every(Boolean)}function o(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function a(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function s(e,t,n="",s="",r="priority"){const c=[];for(const o in t){const a=t[o],r=[a.target&&n&&a.target!=n,a.targetEvent&&s&&a.targetEvent!=s];r.some(Boolean)||i(e,a.conditions)&&(a.title=o,a.description&&(a.description.text=a.description.info(e)),c.push(a))}return"priority"===r?o(c):a(c)}}}]);
//# sourceMappingURL=chunk-159e38ab.4719241e.js.map