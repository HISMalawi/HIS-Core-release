(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f08f350"],{7365:function(e,t,i){"use strict";i("14d9"),i("13d5");var a,n=i("7a23"),o=i("ad60"),s=i("2ef0"),r=i("0fa1"),c=i("7f35"),l=i("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(a||(a={}));const u=e=>l["c"].toStandardHisDisplayFormat(e),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+u(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?a.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?a.CHANGE_PATIENT_OUTCOME:a.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const i=await Object(c["a"])("Data integrity issue found","",`Session date ${u(t)} is less than birth date of ${u(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===i?a.CHANGE_SESSION_DATE:a.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:i,apiDate:n})=>{const o=await Object(c["c"])("Please select a provider for "+t,`BDE: ${u(i)} | Current: ${u(n)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===o.action?{value:-1,flowState:a.GO_TO_PATIENT_DASHBOARD}:{value:o.selection,flowState:a.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var p=i("c21d"),h=i("7920"),m=i("b5e4"),v=i("8e8b"),T=Object(n["defineComponent"])({components:{HisStandardForm:h["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.patientID=parseInt(e.params.patient_id),v["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const i={};if(i[a.SET_PROVIDER]=e=>{const[t]=e.split(" "),i=Object(s["find"])(this.providers,{username:t});return i&&(this.providerID=i.person_id),a.CONTINUE},i[a.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),a.EXIT),i[a.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),a.EXIT),i[a.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),a.EXIT),e in i)return i[e](t)},async checkEncounterGuidelines(){const e=Object(p["a"])(this.facts,d);for(const s in e){var t,i;const r=e[s];if(null!==r&&void 0!==r&&null!==(t=r.actions)&&void 0!==t&&t.alert){var n;const e=this.runflowState(await(null===r||void 0===r||null===(n=r.actions)||void 0===n?void 0:n.alert(this.facts)));if(e===a.EXIT)return}if(null!==r&&void 0!==r&&null!==(i=r.actions)&&void 0!==i&&i.selection){var o;const e=await(null===r||void 0===r||null===(o=r.actions)||void 0===o?void 0:o.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await v["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(m["c"])(""+e)}this.facts.sessionDate=o["a"].getSessionDate(),this.facts.apiDate=o["a"].getCachedApiDate(),this.facts.isBdeMode=o["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",o["a"].isBDE()&&(this.providers=await v["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const i=e.username.toUpperCase(),a=t.username.toUpperCase();return i<a?-1:i>a?1:0}).map(e=>{var t;let i=""+e.username;if(!Object(s["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var a;const[t]=(null===(a=e.person)||void 0===a?void 0:a.names)||[];i+=` (${t.given_name} ${t.family_name})`}return i}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>({label:e,value:e}))},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},nextTask(){return Object(r["b"])(this.patientID,this.$router)},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const i=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const i=t.obs?t.obs:t;return Array.isArray(i)?e=e.concat(i):"function"===typeof i?e.push(i()):e.push(i),e},[]);return Promise.all(i)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(i){return!1}},validateSeries(e){try{for(const t in e){const i=e[t]();if(i)return i}}catch(t){return[t]}}}});const b=T;t["a"]=b},c21d:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i("14d9");function a(e,t){const i=[],a=[-1,"",null,void 0];for(const n in t){if(!(n in e))continue;const o=e[n];a.includes(o)?i.push(!1):i.push(t[n](o,e))}return i.every(Boolean)}function n(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function o(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function s(e,t,i="",s="",r="priority"){const c=[];for(const n in t){const o=t[n],r=[o.target&&i&&o.target!=i,o.targetEvent&&s&&o.targetEvent!=s];r.some(Boolean)||a(e,o.conditions)&&(o.title=n,o.description&&(o.description.text=o.description.info(e)),c.push(o))}return"priority"===r?n(c):o(c)}},fabb:function(e,t,i){"use strict";i.r(t);var a=i("7a23");function n(e,t,i,n,o,s){const r=Object(a["resolveComponent"])("his-standard-form");return Object(a["openBlock"])(),Object(a["createBlock"])(r,{fields:e.fields,onFinishAction:e.onSubmit},null,8,["fields","onFinishAction"])}i("14d9");var o=i("d95e"),s=i("7365"),r=i("e86e"),c=i("2706"),l=i("9c73"),u=i("9b7c"),d=i("8158"),p=i("80b5"),h=Object(a["defineComponent"])({mixins:[s["a"]],data:()=>({patientID:-1,service:{},fields:[],activityType:""}),watch:{$route:{handler({query:e,params:t}){e&&t&&(this.patientID=t.patient_id,this.activityType=e.type,this.service=new l["a"](this.patientID),this.fields=[this.getClinianGivenNameField(),this.getClinianFamilyNameField(),this.getFacililityLocationField(),this.getReasonForTestField(),this.getTestSpecimensField(),this.getTestSelectionField(),this.getTestCombinationField()])},immediate:!0,deep:!0}},methods:{async onSubmit(e,t){const i=await this.service.placeOrder(t);i&&(await this.service.printSpecimenLabel(i[0].order_id),this.$router.push("/patient/dashboard/"+this.patientID))},getFacililityLocationField(){return{id:"target_lab",helpText:"Requesting location",type:o["b"].TT_SELECT,defaultValue:()=>l["a"].getLocationName(),validation:e=>c["a"].required(e),options:(e,t="")=>Object(r["b"])(t),computedValue:e=>e.label,config:{showKeyboard:!0,isFilterDataViaApi:!0}}},getClinianGivenNameField(){const e=p["a"].getGivenNameField();return e.helpText="Requesting clinician - First name",e.proxyID="requesting_clinician",e.condition=()=>"DRAW_SAMPLES"===this.activityType,e.appearInSummary=()=>!1,e},getClinianFamilyNameField(){const e=p["a"].getFamilyNameField();return e.helpText="Requesting clinician - Last name",e.proxyID="requesting_clinician",e.condition=()=>"DRAW_SAMPLES"===this.activityType,e.summaryMapValue=(e,t)=>({label:"Clinician name",value:`${t.given_name.value} ${e.value}`}),e.computedValue=(e,t)=>`${t.given_name.value} ${e.value}`,e},getReasonForTestField(){return{id:"reason_for_test_id",helpText:"Reason for test",type:o["b"].TT_SELECT,validation:e=>c["a"].required(e),computedValue:e=>d["a"].getCachedConceptID(e.value,!0),options:()=>[{label:"Routine",value:"Routine"},{label:"Targeted",value:"Targeted"},{label:"Confirmatory",value:"Confirmatory"},{label:"Repeat / Missing",value:"Repeat / Missing"},{label:"Stat",value:"Stat"}]}},getTestSpecimensField(){return{id:"specimen",helpText:"Select specimen",type:o["b"].TT_SELECT,condition:()=>"DRAW_SAMPLES"===this.activityType,validation:e=>c["a"].required(e),computedValue:e=>({concept_id:e.value}),options:async()=>{const e=await u["a"].getSpecimens("");return e.map(e=>({label:e.name,value:e.concept_id}))},config:{showKeyboard:!0}}},getTestSelectionField(){let e="";return{id:"tests",helpText:"Select tests",type:o["b"].TT_GRID_SELECTOR,validation:e=>c["a"].required(e),computedValue:e=>e.map(e=>({concept_id:e.value})),options:async(t,i,a)=>{if(t.specimen&&t.specimen.label!=e){e=t.specimen.label;const i=await u["a"].getTestTypesBySpecimen(t.specimen.label);return i.map(e=>({label:e.name,value:e.concept_id,isChecked:!1,other:e}))}return a}}},getTestCombinationField(){return{id:"combine_tests",helpText:"Combine test(s) in one order",type:o["b"].TT_SELECT,computedValue:e=>"Yes"===e.value,condition:e=>e.tests.length>1,validation:e=>c["a"].required(e),options:()=>this.yesNoOptions()}}}}),m=i("6b0d"),v=i.n(m);const T=v()(h,[["render",n]]);t["default"]=T}}]);
//# sourceMappingURL=chunk-2f08f350.cf9d1257.js.map