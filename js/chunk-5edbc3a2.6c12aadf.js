(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5edbc3a2"],{7365:function(e,t,n){"use strict";n("14d9"),n("13d5");var i,a=n("7a23"),r=n("ad60"),s=n("2ef0"),o=n("0fa1"),c=n("7f35"),u=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(i||(i={}));const d=e=>u["b"].toStandardHisDisplayFormat(e),p={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+d(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?i.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?i.CHANGE_PATIENT_OUTCOME:i.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${d(t)} is less than birth date of ${d(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?i.CHANGE_SESSION_DATE:i.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:a})=>{const r=await Object(c["c"])("Please select a provider for "+t,`BDE: ${d(n)} | Current: ${d(a)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===r.action?{value:-1,flowState:i.GO_TO_PATIENT_DASHBOARD}:{value:r.selection,flowState:i.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var l=n("c21d"),h=n("7920"),m=n("b5e4"),f=n("8e8b"),b=n("fe70"),v=Object(a["defineComponent"])({components:{HisStandardForm:h["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},formLabel:"",ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.formLabel=(""+e.name).toUpperCase(),this.patientID=parseInt(e.params.patient_id),f["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const n={};if(n[i.SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(s["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),i.CONTINUE},n[i.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),i.EXIT),n[i.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),i.EXIT),n[i.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),i.EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(l["a"])(this.facts,p);for(const s in e){var t,n;const o=e[s];if(null!==o&&void 0!==o&&null!==(t=o.actions)&&void 0!==t&&t.alert){var a;const e=this.runflowState(await(null===o||void 0===o||null===(a=o.actions)||void 0===a?void 0:a.alert(this.facts)));if(e===i.EXIT)return}if(null!==o&&void 0!==o&&null!==(n=o.actions)&&void 0!==n&&n.selection){var r;const e=await(null===o||void 0===o||null===(r=o.actions)||void 0===r?void 0:r.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await f["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=e.programID===r["a"].getProgramID(),this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(m["c"])(""+e)}this.facts.sessionDate=r["a"].getSessionDate(),this.facts.apiDate=r["a"].getCachedApiDate(),this.facts.isBdeMode=r["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",r["a"].isBDE()&&(this.providers=await f["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),i=t.username.toUpperCase();return n<i?-1:n>i?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(s["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var i;const[t]=(null===(i=e.person)||void 0===i?void 0:i.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>"string"===typeof e||"number"===typeof e?{label:e,value:e}:e)},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){(await b["h"].create({backdropDismiss:!1,message:"Checking Next task.."})).present();try{await Object(o["b"])(this.patientID,this.$router,this.$route)}catch(e){console.error(e)}b["h"].getTop().then(e=>e&&b["h"].dismiss())},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},toConditionalOptions(e){const t=[];for(const n of e)("boolean"!==typeof n[1]||n[1])&&t.push(this.toOption(n[0]));return t},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const D=v;t["a"]=D},"754d":function(e,t,n){"use strict";n.r(t);var i=n("7a23");function a(e,t,n,a,r,s){const o=Object(i["resolveComponent"])("his-standard-form");return Object(i["openBlock"])(),Object(i["createBlock"])(o,{fields:e.fields,activeField:e.activeField,onFinishAction:e.onFinish,skipSummary:!0,cancelDestinationPath:e.cancelDestination},null,8,["fields","activeField","onFinishAction","cancelDestinationPath"])}n("14d9");var r=n("d95e"),s=n("7920"),o=n("2706"),c=n("ade3"),u=n("cc6f"),d=n("ad60"),p=n("cc74");class l extends u["a"]{constructor(e,t){super(e,51,t),Object(c["a"])(this,"sitePrefix",void 0),this.sitePrefix=""}getSitePrefix(){return this.sitePrefix}async loadSitePrefix(){this.sitePrefix=await p["b"].sitePrefix()}createArvNumber(e){return d["a"].postJson("/patient_identifiers/",{patient_id:this.patientID,identifier_type:4,identifier:e})}buildArvNumber(e){return`${this.sitePrefix}-ARV-${e}`}}var h=n("8df6"),m=n("b5e4"),f=n("7365"),b=n("3e53"),v=n("2ef0"),D=n("8e8b"),O=Object(i["defineComponent"])({mixins:[f["a"]],components:{HisStandardForm:s["a"]},data:()=>({reception:{},activeField:"",hasARVNumber:!0,suggestedNumber:"",patientType:{}}),watch:{ready:{handler(e){e&&(this.reception=new l(this.patientID,this.providerID),this.fields=this.getFields())},immediate:!0}},methods:{async onFinish(e,t){const n=await this.reception.createEncounter();if(!n)return Object(m["e"])("Unable to create encounter");const i=await this.resolveObs(t,"obs"),a=await this.reception.saveObservationList(i);if(!a)return Object(m["e"])("Unable to create Obs");if(e.capture_arv&&"Yes"===e.capture_arv.value){const e=await this.reception.createArvNumber(t.arv_number);if(!e)return Object(m["e"])("Unable to save Arv number");D["a"].invalidate("ACTIVE_PATIENT")}Object(m["d"])("Encounter created");const r=Object(v["find"])(e.who_is_present,{value:"Yes",label:"Guardian present?"});if(r&&Object(v["isEmpty"])(await this.patient.getGuardian()))return this.$router.push("/guardian/registration/"+this.patientID);this.nextTask()},getFields(){return[{id:"who_is_present",helpText:"HIV reception",type:r["b"].TT_MULTIPLE_YES_NO,validation:e=>o["a"].required(e)||o["a"].neitherOr(e)||o["a"].anyEmpty(e),computedValue:e=>({tag:"obs",obs:e.map(({other:e,value:t})=>this.reception.buildValueCoded(e.concept,t))}),onValueUpdate:async(e,t)=>e.map(e=>(t.label!=e.label&&"No"===t.value&&(e.value="Yes"),e)),options:e=>e.who_is_present?e.who_is_present:[{label:"Patient present?",value:"",other:{concept:"Patient Present",property:"patient_present",values:this.yesNoOptions()}},{label:"Guardian present?",value:"",other:{concept:"Guardian Present",property:"guardian_present",values:this.yesNoOptions()}}]},{id:"capture_arv",helpText:"Capture ARV Number?",type:r["b"].TT_SELECT,requireNext:!0,init:async()=>{const e=this.patient.getPatientIdentifier(4);return""===e&&(this.hasARVNumber=!1),this.patientType=new h["a"](this.patientID,this.providerID),await this.patientType.loadPatientType(),!0},condition:()=>!this.hasARVNumber&&"New patient"===this.patientType.getType(),validation:e=>o["a"].required(e),options:()=>this.yesNoOptions()},{id:"arv_number",helpText:"ART number",type:r["b"].TT_TEXT,init:async()=>{if(await this.reception.loadSitePrefix(),!this.hasARVNumber){const e=await d["a"].getNextSuggestedARVNumber();this.suggestedNumber=e.arv_number.replace(/^\D+|\s/g,"")}return!0},computedValue:({value:e})=>e,validation:e=>o["a"].required(e),condition:e=>!this.hasARVNumber&&"Yes"===e.capture_arv.value,defaultValue:()=>this.suggestedNumber,config:{prependValue:()=>{const e=b["a"].getActiveApp();if(e&&e.programPatientIdentifiers){const t=e.programPatientIdentifiers["ARV Number"];return t.prefix()}return""}}}]}}}),y=n("d959"),T=n.n(y);const _=T()(O,[["render",a]]);t["default"]=_},7920:function(e,t,n){"use strict";var i=n("7a23");function a(e,t,n,a,r,s){return Object(i["openBlock"])(),Object(i["createBlock"])(Object(i["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var r=n("9441"),s=Object(i["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:r["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),o=n("d959"),c=n.n(o);const u=c()(s,[["render",a]]);t["a"]=u},c21d:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("14d9");function i(e,t){const n=[],i=[-1,"",null,void 0];for(const a in t){if(!(a in e))continue;const r=e[a];i.includes(r)?n.push(!1):n.push(t[a](r,e))}return n.every(Boolean)}function a(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function r(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function s(e,t,n="",s="",o="priority"){const c=[];for(const a in t){const r=t[a],o=[r.target&&n&&r.target!=n,r.targetEvent&&s&&r.targetEvent!=s];o.some(Boolean)||i(e,r.conditions)&&(r.title=a,r.description&&(r.description.text=r.description.info(e)),c.push(r))}return"priority"===o?a(c):r(c)}}}]);
//# sourceMappingURL=chunk-5edbc3a2.6c12aadf.js.map