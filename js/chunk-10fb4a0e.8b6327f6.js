(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10fb4a0e"],{7365:function(t,e,n){"use strict";n("14d9"),n("13d5");var a,i=n("7a23"),o=n("ad60"),r=n("2ef0"),s=n("0fa1"),c=n("7f35"),l=n("9283");(function(t){t["SET_PROVIDER"]="SET_PROVIDER",t["CHANGE_SESSION_DATE"]="change_session_date",t["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",t["CHANGE_PATIENT_OUTCOME"]="change_outcome",t["CONTINUE"]="continue",t["EXIT"]="exit"})(a||(a={}));const u=t=>l["b"].toStandardHisDisplayFormat(t),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:t})=>{const e=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+u(t),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===e?a.GO_TO_PATIENT_DASHBOARD:"Change outcome"===e?a.CHANGE_PATIENT_OUTCOME:a.CONTINUE}},conditions:{outcome(t){return"Patient died"===t},outcomeStartDate(t,{sessionDate:e}){return e>=t}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:t,sessionDate:e})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${u(e)} is less than birth date of ${u(t)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?a.CHANGE_SESSION_DATE:a.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(t,{sessionDate:e}){return e<t}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:t,encounterName:e,sessionDate:n,apiDate:i})=>{const o=await Object(c["c"])("Please select a provider for "+e,`BDE: ${u(n)} | Current: ${u(i)}`,t,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===o.action?{value:-1,flowState:a.GO_TO_PATIENT_DASHBOARD}:{value:o.selection,flowState:a.SET_PROVIDER}}},conditions:{isBdeMode(t){return t}}}};var p=n("c21d"),h=n("7920"),m=n("b5e4"),f=n("8e8b"),v=n("fe70"),b=Object(i["defineComponent"])({components:{HisStandardForm:h["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},formLabel:"",ready:!1}),watch:{$route:{handler(t){t.params.patient_id&&this.patientID!=t.params.patient_id&&(this.formLabel=(""+t.name).toUpperCase(),this.patientID=parseInt(t.params.patient_id),f["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(t=>{this.patient=t,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(t,e=null){const n={};if(n[a.SET_PROVIDER]=t=>{const[e]=t.split(" "),n=Object(r["find"])(this.providers,{username:e});return n&&(this.providerID=n.person_id),a.CONTINUE},n[a.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),a.EXIT),n[a.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),a.EXIT),n[a.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),a.EXIT),t in n)return n[t](e)},async checkEncounterGuidelines(){const t=Object(p["a"])(this.facts,d);for(const r in t){var e,n;const s=t[r];if(null!==s&&void 0!==s&&null!==(e=s.actions)&&void 0!==e&&e.alert){var i;const t=this.runflowState(await(null===s||void 0===s||null===(i=s.actions)||void 0===i?void 0:i.alert(this.facts)));if(t===a.EXIT)return}if(null!==s&&void 0!==s&&null!==(n=s.actions)&&void 0!==n&&n.selection){var o;const t=await(null===s||void 0===s||null===(o=s.actions)||void 0===o?void 0:o.selection(this.facts));this.runflowState(t.flowState,t.value)}}},async setEncounterFacts(){try{const t=await f["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=t.programID===o["a"].getProgramID(),this.facts.outcome=t.outcome,this.facts.outcomeStartDate=t.startDate}catch(t){console.error(t),Object(m["c"])(""+t)}this.facts.sessionDate=o["a"].getSessionDate(),this.facts.apiDate=o["a"].getCachedApiDate(),this.facts.isBdeMode=o["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",o["a"].isBDE()&&(this.providers=await f["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((t,e)=>{const n=t.username.toUpperCase(),a=e.username.toUpperCase();return n<a?-1:n>a?1:0}).map(t=>{var e;let n=""+t.username;if(!Object(r["isEmpty"])(null===t||void 0===t||null===(e=t.person)||void 0===e?void 0:e.names)){var a;const[e]=(null===(a=t.person)||void 0===a?void 0:a.names)||[];n+=` (${e.given_name} ${e.family_name})`}return n}))},toOption(t,e={}){return{label:t,value:t,other:e}},mapStrToOptions(t){return t.map(t=>"string"===typeof t||"number"===typeof t?{label:t,value:t}:t)},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){(await v["h"].create({backdropDismiss:!1,message:"Checking Next task.."})).present();try{await Object(s["b"])(this.patientID,this.$router,this.$route)}catch(t){console.error(t)}v["h"].getTop().then(t=>t&&v["h"].dismiss())},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(t,e={}){return{label:t,value:"",other:{...e,values:this.yesNoOptions()}}},mapOptions(t){return t.map(t=>({label:t,value:t}))},toConditionalOptions(t){const e=[];for(const n of t)("boolean"!==typeof n[1]||n[1])&&e.push(this.toOption(n[0]));return e},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(t,e=""){const n=Object.values(t).filter(t=>t&&(t.tag===e||""===e)).reduce((t,e)=>{const n=e.obs?e.obs:e;return Array.isArray(n)?t=t.concat(n):"function"===typeof n?t.push(n()):t.push(n),t},[]);return Promise.all(n)},inArray(t,e){try{return t.filter(t=>e(t)).length>0}catch(n){return!1}},validateSeries(t){try{for(const e in t){const n=t[e]();if(n)return n}}catch(e){return[e]}}}});const D=b;e["a"]=D},7920:function(t,e,n){"use strict";var a=n("7a23");function i(t,e,n,i,o,r){return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(t.formType),{fields:t.fields,skipSummary:t.skipSummary,activeField:t.activeField,cancelDestinationPath:t.cancelDestinationPath,onOnFinish:t.onFinish,onFinish:t.onFinishAction,onOnIndex:t.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var o=n("9441"),r=Object(a["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:o["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(t,e){this.$emit("onFinish",t,e)},onIndex(t){this.$emit("onIndex",t)}}}),s=n("d959"),c=n.n(s);const l=c()(r,[["render",i]]);e["a"]=l},"8dd5":function(t,e,n){"use strict";n.r(e);var a=n("7a23");function i(t,e,n,i,o,r){const s=Object(a["resolveComponent"])("his-standard-form"),c=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createBlock"])(c,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{formLabel:"Appointment",fields:t.fields,onFinishAction:t.onFinish,cancelDestinationPath:t.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}var o=n("7365"),r=n("d95e"),s=n("d867"),c=n("cc6f");class l extends c["a"]{constructor(t,e=-1){super(t,7,e)}nextAppointment(){return c["a"].getJson(`/programs/${this.programID}/patients/${this.patientID}/next_appointment_date`,{date:this.date})}}var u=n("e86e"),d=n("5a0c"),p=n.n(d),h=n("0011"),m=Object(a["defineComponent"])({components:{IonPage:s["D"]},mixins:[o["a"]],data:()=>({service:{}}),watch:{ready:{handler(t){t&&(this.service=new l(this.patientID,this.providerID),this.fields=[this.referralField(),this.referralLocationField(),this.appointmentDataField()])},immediate:!0}},methods:{async onFinish(t,e){const n=await this.resolveObs(e);await this.service.createEncounter(),await this.service.saveObservationList(n),this.nextTask()},referralLocationField(){return{id:"referral_location",helpText:"Intended site for retesting",type:r["b"].TT_SELECT,isRequired:()=>!0,finalComputedValue:({label:t})=>({obs:this.service.buildValueText("Referral location",t)}),defaultValue:()=>l.getLocationName(),condition:t=>"Not done"!=t.re_test.value,options:(t,e="")=>Object(u["b"])(e),config:{footerBtns:[{name:"Here",slot:"end",onClickComponentEvents:{setValue:()=>l.getLocationName()},onClick:()=>null}],showKeyboard:!0,isFilterDataViaApi:!0}}},referralField(){let t=null;return{id:"re_test",helpText:"Referral for Re-Testing",type:r["b"].TT_TEXT_BANNER,init:async()=>{const e=new l(this.patientID,this.providerID),n=await e.getFirstValueCoded("client risk category")||"N/A",a=await e.getFirstValueCoded("HIV Status")||"N/A";return t=/refer client to HIV Clinic/i.test(a)?{label:"Confirmatory test is needed for Positive result",value:"Confirmatory HIV test"}:/high risk|High risk event|on-going/i.test(""+n)?{label:`Retesting is required due to "${n}"`,value:"Re-test"}:{label:"No re-test required",value:"Not done"},!0},defaultValue:()=>this.toOption(t.value),condition:()=>null!=t,finalComputedValue:t=>({obs:this.service.buildValueCoded("Referral for Re-Testing",t.value)}),options:()=>[this.toOption(t.label)]}},appointmentDataField(){let t=p()(this.service.date).add(1,"day").format("YYYY-MM-DD");return{id:"set_appointment",helpText:"Select Appointment Date for Re-testing",type:r["b"].TT_DATE_PICKER,init:async()=>{try{const e=await this.service.nextAppointment();e&&(t=e)}catch(e){}return!0},isRequired:()=>!0,condition:t=>t.referral_location.value,defaultValue:()=>t,finalComputedValue:t=>({obs:this.service.buildValueDate("Appointment date",t.value)}),config:{minDate:()=>t,maxDate:()=>p()().add(15,"day").format("YYYY-MM-DD"),infoItems:e=>[{label:"System set appointment",value:Object(h["e"])(t)},{label:"User set appointment",value:Object(h["e"])(e)}],hiddenFooterBtns:["Clear"]}}}}}),f=n("d959"),v=n.n(f);const b=v()(m,[["render",i]]);e["default"]=b},c21d:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("14d9");function a(t,e){const n=[],a=[-1,"",null,void 0];for(const i in e){if(!(i in t))continue;const o=t[i];a.includes(o)?n.push(!1):n.push(e[i](o,t))}return n.every(Boolean)}function i(t){return t.sort((t,e)=>t.priority&&e.priority&&t.priority<e.priority?-1:1)}function o(t){return t.sort((t,e)=>t.weight&&e.weight&&t.weight>e.weight?-1:1)}function r(t,e,n="",r="",s="priority"){const c=[];for(const i in e){const o=e[i],s=[o.target&&n&&o.target!=n,o.targetEvent&&r&&o.targetEvent!=r];s.some(Boolean)||a(t,o.conditions)&&(o.title=i,o.description&&(o.description.text=o.description.info(t)),c.push(o))}return"priority"===s?i(c):o(c)}},e86e:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"g",(function(){return d})),n.d(e,"h",(function(){return p}));var a=n("5713"),i=n("2ef0");async function o(t=""){const e=await a["a"].getFacilities({name:t});return e.filter(t=>!Object(i["isEmpty"])(t)&&""!=t.name.trim()).map(t=>({label:t.name,value:t.location_id,other:t}))}async function r(t=""){const e=await a["a"].getLabs({search_name:t});return e.map(t=>({label:t,value:t}))}async function s(t=""){const e=await a["a"].getFacilities({name:t,tag:"Facility adult sections"});return e.map(t=>({label:t.name,value:t.name,other:t}))}async function c(){const t=await a["a"].getSpecialistClinics();return t.map(t=>({label:t.name,value:t.name,other:t}))}async function l(){const t=await a["a"].getRegions();return t.map(t=>({label:t.name,value:t.region_id,other:t}))}async function u(t){const e=await a["a"].getDistricts(t);return e.map(t=>({label:t.name,value:t.district_id,other:t}))}async function d(t,e=""){const n=await a["a"].getTraditionalAuthorities(t,e);return n.map(t=>({label:t.name,value:t.traditional_authority_id,other:t}))}async function p(t,e=""){const n=await a["a"].getVillages(t,e);return n.map(t=>({label:t.name,value:t.village_id,other:t}))}}}]);
//# sourceMappingURL=chunk-10fb4a0e.8b6327f6.js.map