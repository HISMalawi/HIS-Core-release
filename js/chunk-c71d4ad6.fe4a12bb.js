(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c71d4ad6"],{"5b71":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("ade3"),a=n("9b7c"),s=n("cc6f");class r extends s["a"]{constructor(t){super(t,57),Object(i["a"])(this,"patientID",void 0),Object(i["a"])(this,"testTypeID",void 0),Object(i["a"])(this,"resultDate",void 0),Object(i["a"])(this,"testID",void 0),this.patientID=t,this.testTypeID=-1,this.resultDate="",this.testID=-1}createLabResult(t){return s["a"].postJson(`lab/tests/${this.testID}/results`,{encounter_id:this.encounterID,date:this.resultDate,measures:t})}getTestID(){return this.testID}getTestTypeID(){return this.testTypeID}setTestTypeID(t){this.testTypeID=t}setResultDate(t){this.resultDate=t}setTestID(t){this.testID=t}getTestsWithoutResults(){return a["a"].getOrders(this.patientID,{status:"drawn"})}getTestIndicators(){return a["a"].getJson("lab/test_result_indicators",{test_type_id:this.testTypeID})}}},7365:function(t,e,n){"use strict";n("14d9"),n("13d5");var i,a=n("7a23"),s=n("ad60"),r=n("2ef0"),o=n("0fa1"),c=n("7f35"),l=n("9283");(function(t){t["SET_PROVIDER"]="SET_PROVIDER",t["CHANGE_SESSION_DATE"]="change_session_date",t["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",t["CHANGE_PATIENT_OUTCOME"]="change_outcome",t["CONTINUE"]="continue",t["EXIT"]="exit"})(i||(i={}));const u=t=>l["b"].toStandardHisDisplayFormat(t),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:t})=>{const e=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+u(t),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===e?i.GO_TO_PATIENT_DASHBOARD:"Change outcome"===e?i.CHANGE_PATIENT_OUTCOME:i.CONTINUE}},conditions:{outcome(t){return"Patient died"===t},outcomeStartDate(t,{sessionDate:e}){return e>=t}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:t,sessionDate:e})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${u(e)} is less than birth date of ${u(t)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?i.CHANGE_SESSION_DATE:i.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(t,{sessionDate:e}){return e<t}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:t,encounterName:e,sessionDate:n,apiDate:a})=>{const s=await Object(c["c"])("Please select a provider for "+e,`BDE: ${u(n)} | Current: ${u(a)}`,t,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===s.action?{value:-1,flowState:i.GO_TO_PATIENT_DASHBOARD}:{value:s.selection,flowState:i.SET_PROVIDER}}},conditions:{isBdeMode(t){return t}}}};var h=n("c21d"),p=n("7920"),f=n("b5e4"),D=n("8e8b"),m=n("b432"),b=n("5a0c"),v=n.n(b),O=n("cc6f"),I=n("2ed9"),T=Object(a["defineComponent"])({components:{HisStandardForm:p["a"]},data:()=>({offlineID:null,patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{age:-1,gender:"",birthDate:"",sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,outcome:"",outcomeStartDate:"",village:"",district:"",currentTA:""},formLabel:"",ready:!1}),created(){this.$route.params.patient_id&&(this.offlineID=this.$route.params.patient_id,this.patientID=parseInt(""+this.$route.params.patient_id),this.goOffline()?this.initOfflineData():D["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(t=>{this.patient=t,Object(r["isEmpty"])(this.patient)||Object(m["a"])().cachePatient(this.patient),this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0}).catch(t=>console.log(t))}).catch(()=>{this.goOffline()&&this.initOfflineData()})}))},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{goOffline(){return!m["c"].value||m["b"].value},isOnline(){return m["c"].value},isOfflineMode(){return m["b"].value},initOfflineData(){var t;const e=Object(m["a"])().findByID(this.offlineID),n=null===e||void 0===e||null===(t=e.personParams)||void 0===t?void 0:t.person;n&&(this.facts.birthDate=n.birthdate,this.facts.age=v()(s["a"].getSessionDate()).diff(this.facts.birthDate,"years"),this.facts.district=n.current_district,this.facts.village=n.current_village,this.facts.currentTA=n.current_traditional_authority,this.facts.gender=n.gender,this.ready=!0)},async saveFormEncounterAndProceed(t={}){let e="Pending",n=!1,i=null;try{const e=await O["a"].buildValueText("Device",Object(I["f"])());i=[...await this.resolveObs(t.computedData),e]}catch(a){return console.error(""+a),Object(f["e"])("Unable to resolve observations")}if(!this.isOfflineMode()){try{const a=new O["a"](this.patientID,t.encounterTypeID,this.providerID);await a.createEncounter()&&await a.saveObservationList(i)&&(e="Success",n=!0),"function"===typeof t.callback&&await t.callback(a)}catch(a){n=!1,/NetworkError|Failed to fetch/i.test(""+a)?e="NetworkError":(e="Exception",console.error("Exception while saving an encounter: "+a))}if("Exception"===e)return Object(f["c"])("An error has occured!")}Object(m["a"])().saveObsOffline({observations:i,id:this.offlineID,uploadStatus:e,encounterName:this.$route.name,encounterTypeID:t.encounterTypeID,meta:t.formData,labOrders:t.labOrders,created:n}),t.skipNextTask||this.nextTask()},runflowState(t,e=null){const n={};if(n[i.SET_PROVIDER]=t=>{const[e]=t.split(" "),n=Object(r["find"])(this.providers,{username:e});return n&&(this.providerID=n.person_id),i.CONTINUE},n[i.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),i.EXIT),n[i.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),i.EXIT),n[i.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),i.EXIT),t in n)return n[t](e)},async checkEncounterGuidelines(){const t=Object(h["a"])(this.facts,d);for(const r in t){var e,n;const o=t[r];if(null!==o&&void 0!==o&&null!==(e=o.actions)&&void 0!==e&&e.alert){var a;const t=this.runflowState(await(null===o||void 0===o||null===(a=o.actions)||void 0===a?void 0:a.alert(this.facts)));if(t===i.EXIT)return}if(null!==o&&void 0!==o&&null!==(n=o.actions)&&void 0!==n&&n.selection){var s;const t=await(null===o||void 0===o||null===(s=o.actions)||void 0===s?void 0:s.selection(this.facts));this.runflowState(t.flowState,t.value)}}},async setEncounterFacts(){try{const t=await D["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=t.programID===s["a"].getProgramID(),this.facts.outcome=t.outcome,this.facts.outcomeStartDate=t.startDate}catch(t){console.error(t),Object(f["c"])(""+t)}this.facts.currentTA=this.patient.getCurrentTA(),this.facts.district=this.patient.getCurrentDistrict(),this.facts.village=this.patient.getCurrentVillage(),this.facts.sessionDate=s["a"].getSessionDate(),this.facts.apiDate=s["a"].getCachedApiDate(),this.facts.isBdeMode=s["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.age=this.patient.getAge(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",s["a"].isBDE()&&(this.providers=await D["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((t,e)=>{const n=t.username.toUpperCase(),i=e.username.toUpperCase();return n<i?-1:n>i?1:0}).map(t=>{var e;let n=""+t.username;if(!Object(r["isEmpty"])(null===t||void 0===t||null===(e=t.person)||void 0===e?void 0:e.names)){var i;const[e]=(null===(i=t.person)||void 0===i?void 0:i.names)||[];n+=` (${e.given_name} ${e.family_name})`}return n}))},toOption(t,e={}){return{label:t,value:t,other:e}},mapStrToOptions(t){return t.map(t=>"string"===typeof t||"number"===typeof t?{label:t,value:t}:t)},patientDashboardUrl(){return"/patient/dashboard/"+this.$route.params.patient_id},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){try{const t=this.offlineID||this.patientID;await Object(o["b"])(t,this.$router,this.$route)}catch(t){console.error("Workflow error "+t),this.gotoPatientDashboard()}},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(t,e={}){return{label:t,value:"",other:{...e,values:this.yesNoOptions()}}},mapOptions(t){return t.map(t=>({label:t,value:t}))},toConditionalOptions(t){const e=[];for(const n of t)("boolean"!==typeof n[1]||n[1])&&e.push(this.toOption(n[0]));return e},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(t,e=""){const n=Object.values(t).filter(t=>t&&(t.tag===e||""===e)).reduce((t,e)=>{const n=e.obs?e.obs:e;return Array.isArray(n)?t=t.concat(n):"function"===typeof n?t.push(n()):t.push(n),t},[]);return Promise.all(n)},inArray(t,e){try{return t.filter(t=>e(t)).length>0}catch(n){return!1}},validateSeries(t){try{for(const e in t){const n=t[e]();if(n)return n}}catch(e){return[e]}}}});const y=T;e["a"]=y},7920:function(t,e,n){"use strict";var i=n("7a23");function a(t,e,n,a,s,r){return Object(i["openBlock"])(),Object(i["createBlock"])(Object(i["resolveDynamicComponent"])(t.formType),{fields:t.fields,skipSummary:t.skipSummary,activeField:t.activeField,cancelDestinationPath:t.cancelDestinationPath,onOnFinish:t.onFinish,onFinish:t.onFinishAction,onOnIndex:t.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var s=n("9441"),r=Object(i["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:s["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(t,e){this.$emit("onFinish",t,e)},onIndex(t){this.$emit("onIndex",t)}}}),o=n("d959"),c=n.n(o);const l=c()(r,[["render",a]]);e["a"]=l},bb8a:function(t,e,n){"use strict";n.r(e);var i=n("7a23");function a(t,e,n,a,s,r){const o=Object(i["resolveComponent"])("his-standard-form"),c=Object(i["resolveComponent"])("ion-page");return Object(i["openBlock"])(),Object(i["createBlock"])(c,null,{default:Object(i["withCtx"])(()=>[Object(i["createVNode"])(o,{formLabel:"DBS Result",fields:t.fields,onFinishAction:t.onFinish,cancelDestinationPath:t.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}var s=n("7365"),r=n("9283"),o=n("d95e"),c=n("d867"),l=n("5b71"),u=n("0011"),d=n("b5e4"),h=n("2ef0"),p=n("5a0c"),f=n.n(p),D=Object(i["defineComponent"])({components:{IonPage:c["D"]},mixins:[s["a"]],data:()=>({lab:{}}),watch:{ready:{handler(t){t&&(this.lab=new l["a"](this.patientID),this.fields=[this.ordersWithoutResultsField(),this.resultField(),this.resultDateField()])},immediate:!0}},methods:{async onFinish(t,e){this.lab.setTestID(e.result.testID),this.lab.setResultDate(t.result_date.label),await this.lab.createEncounter(),await this.lab.createLabResult([e.result.measures]),this.nextTask()},ordersWithoutResultsField(){let t=[];return{id:"orders",helpText:"Select DBS Order",type:o["b"].TT_SELECT,init:async()=>(t=(await this.lab.getTestsWithoutResults()).filter(t=>/dbs/i.test(t.specimen.name)&&t.tests.some(t=>/viral load/i.test(t.name)&&null===t.result)),!0),isRequired:()=>!0,options:e=>null!=e.orders?e.orders:t.map(t=>{const e=Object(h["find"])(t.tests,{name:"HIV viral load"});return{label:`#${t.accession_number} ${Object(u["g"])(t.order_date)}`,value:e.concept_id,other:{testID:e.id}}})}},resultDateField(){return{id:"result_date",helpText:"Result date",type:o["b"].TT_FULL_DATE,isRequired:()=>!0,condition:t=>t.orders.value,validation:(t,e)=>{const n=f()(e.orders.other.order_date).format(r["a"]);return new Date(t.label)>new Date(n)?[`Result date ${t.label} cannot be greater than order date of ${n}`]:null}}},resultField(){return{id:"result",helpText:"Viral load result",type:o["b"].TT_TEXT,isRequired:()=>!0,config:{customKeyboard:[[["1","2","3"],["4","5","6","=","<",">"],["7","8","9","."],["","0",""]],[["Delete"]]]},condition:t=>t.orders.value,onValue:t=>!!/^(=|<|>)([0-9]*)$/m.test(""+t.value)||(Object(d["e"])("You must enter a modifer and numbers only. i.e =90 / >19 / < 750"),!1),finalComputedValue:(t,e)=>({testID:e.orders.other.testID,measures:{indicator:{concept_id:e.orders.value},value:parseInt((""+t.value).substring(1)),value_modifier:(""+t.value).charAt(0),value_type:"numeric"}})}}}}),m=n("d959"),b=n.n(m);const v=b()(D,[["render",a]]);e["default"]=v},c21d:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("14d9");function i(t,e){const n=[],i=[-1,"",null,void 0];for(const a in e){if(!(a in t))continue;const s=t[a];i.includes(s)?n.push(!1):n.push(e[a](s,t))}return n.every(Boolean)}function a(t){return t.sort((t,e)=>t.priority&&e.priority&&t.priority<e.priority?-1:1)}function s(t){return t.sort((t,e)=>t.weight&&e.weight&&t.weight>e.weight?-1:1)}function r(t,e,n="",r="",o="priority"){const c=[];for(const a in e){const s=e[a],o=[s.target&&n&&s.target!=n,s.targetEvent&&r&&s.targetEvent!=r];o.some(Boolean)||i(t,s.conditions)&&(s.title=a,s.description&&(s.description.text=s.description.info(t)),c.push(s))}return"priority"===o?a(c):s(c)}}}]);
//# sourceMappingURL=chunk-c71d4ad6.fe4a12bb.js.map