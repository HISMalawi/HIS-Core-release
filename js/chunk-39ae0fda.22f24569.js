(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39ae0fda"],{"3b8c":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("cc6f"),a=n("7957"),s=n("5a0c"),o=n.n(s),r=n("2ef0");class c extends i["a"]{constructor(t,e){super(t,53,e)}getFamilyPlanningMethods(){return["ORAL CONTRACEPTIVE PILLS","DEPO-PROVERA","INTRAUTERINE CONTRACEPTION","CONTRACEPTIVE IMPLANT","MALE CONDOMS","FEMALE CONDOMS","TUBAL LIGATION","NONE"]}async getTptTreatmentStatus(){return i["a"].getJson(`/patients/${this.patientID}/tpt_status`)}async patientHitMenopause(){const t=await a["a"].getFirstObs(this.patientID,"Why does the woman not use birth control");return!(!t||"string"!==typeof(null===t||void 0===t?void 0:t.value_text))&&(!!t.value_text.match(/menopause/i)&&i["a"].obsInValidPeriod(t))}async hasTreatmentHistoryObs(){const t=await a["a"].getFirstObs(this.patientID,"Previous TB treatment history");return t&&i["a"].obsInValidPeriod(t)}getDrugSideEffects(){return i["a"].getJson(`programs/${i["a"].getProgramID()}/patients/${this.patientID}/medication_side_effects`,{date:this.date})}getClient(){return i["a"].getFirstValueCoded(this.patientID,"Patient present")}async clientDueForCxCa(){const t=await i["a"].getJson("last_cxca_screening_details",{id:this.patientID,date:this.date});if(!Object(r["isEmpty"])(t)){const e=t["date_screened"],n=o()(this.date).diff(e,"years");return n>=1}return!0}async clientHasHadAHysterectomy(){const t=await i["a"].getFirstValueCoded(this.patientID,"Reason for NOT offering CxCa");if("Hysterectomy"===t)return!0;const e=await i["a"].getFirstValueText(this.patientID,"Treatment");return"Hysterectomy"===e}async getTLObs(){const t=t=>t&&"Tubal ligation"===t.value_coded&&i["a"].obsInValidPeriod(t),e=await i["a"].getFirstObs(this.patientID,"Family planning");if(t(e))return t(e);{const e=await i["a"].getFirstObs(this.patientID,"Method of family planning");return t(e)}}async getPreviousDrugs(){const t=await i["a"].getJson(`patients/${this.patientID}/drugs_received`);if(!t)return;const e={};return t.forEach(t=>{e[t.drug_inventory_id]=t}),e}familyPlanningMethods(t,e){const n={"ORAL CONTRACEPTIVE PILLS":{"DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","CONTRACEPTIVE IMPLANT":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"DEPO-PROVERA":{"ORAL CONTRACEPTIVE PILLS":"N","INTRAUTERINE CONTRACEPTION":"N","CONTRACEPTIVE IMPLANT":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"INTRAUTERINE CONTRACEPTION":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","CONTRACEPTIVE IMPLANT":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"CONTRACEPTIVE IMPLANT":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"MALE CONDOMS":{"ORAL CONTRACEPTIVE PILLS":"Y","DEPO-PROVERA":"Y","INTRAUTERINE CONTRACEPTION":"Y","CONTRACEPTIVE IMPLANT":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"Y","TUBAL LIGATION":"N",VASECTOMY:"Y"},"FEMALE CONDOMS":{"ORAL CONTRACEPTIVE PILLS":"Y","DEPO-PROVERA":"Y","INTRAUTERINE CONTRACEPTION":"Y","CONTRACEPTIVE IMPLANT":"Y","MALE CONDOMS":"Y","RYTHM METHOD":"Y","TUBAL LIGATION":"N",VASECTOMY:"Y"},"RYTHM METHOD":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","CONTRACEPTIVE IMPLANT":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"TUBAL LIGATION":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"N","FEMALE CONDOMS":"N","CONTRACEPTIVE IMPLANT":"N","RYTHM METHOD":"N",VASECTOMY:"N"},VASECTOMY:{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"Y","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"N","CONTRACEPTIVE IMPLANT":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N"},NONE:{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"N","FEMALE CONDOMS":"N","CONTRACEPTIVE IMPLANT":"N","RYTHM METHOD":"N","TUBAL LIGATION":"N"}},i=n[t];return e.map(t=>"N"===i[t.label]?{label:t.label,value:t.value,isChecked:!1,disabled:!0}:{label:t.label,value:t.value,isChecked:t.isChecked,disabled:!1})}}},7365:function(t,e,n){"use strict";n("14d9"),n("13d5");var i,a=n("7a23"),s=n("ad60"),o=n("2ef0"),r=n("0fa1"),c=n("7f35"),l=n("9283");(function(t){t["SET_PROVIDER"]="SET_PROVIDER",t["CHANGE_SESSION_DATE"]="change_session_date",t["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",t["CHANGE_PATIENT_OUTCOME"]="change_outcome",t["CONTINUE"]="continue",t["EXIT"]="exit"})(i||(i={}));const u=t=>l["b"].toStandardHisDisplayFormat(t),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:t})=>{const e=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+u(t),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===e?i.GO_TO_PATIENT_DASHBOARD:"Change outcome"===e?i.CHANGE_PATIENT_OUTCOME:i.CONTINUE}},conditions:{outcome(t){return"Patient died"===t},outcomeStartDate(t,{sessionDate:e}){return e>=t}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:t,sessionDate:e})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${u(e)} is less than birth date of ${u(t)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?i.CHANGE_SESSION_DATE:i.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(t,{sessionDate:e}){return e<t}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:t,encounterName:e,sessionDate:n,apiDate:a})=>{const s=await Object(c["c"])("Please select a provider for "+e,`BDE: ${u(n)} | Current: ${u(a)}`,t,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===s.action?{value:-1,flowState:i.GO_TO_PATIENT_DASHBOARD}:{value:s.selection,flowState:i.SET_PROVIDER}}},conditions:{isBdeMode(t){return t}}}};var O=n("c21d"),h=n("7920"),E=n("b5e4"),T=n("8e8b"),N=n("b432"),p=n("5a0c"),A=n.n(p),I=n("cc6f"),f=n("2ed9"),D=Object(a["defineComponent"])({components:{HisStandardForm:h["a"]},data:()=>({offlineID:null,patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{age:-1,gender:"",birthDate:"",sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,outcome:"",outcomeStartDate:"",village:"",district:"",currentTA:""},formLabel:"",ready:!1}),created(){this.$route.params.patient_id&&(this.offlineID=this.$route.params.patient_id,this.patientID=parseInt(""+this.$route.params.patient_id),this.goOffline()?this.initOfflineData():T["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(t=>{this.patient=t,Object(o["isEmpty"])(this.patient)||Object(N["a"])().cachePatient(this.patient),this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0}).catch(t=>console.log(t))}).catch(()=>{this.goOffline()&&this.initOfflineData()})}))},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{goOffline(){return!N["c"].value||N["b"].value},isOnline(){return N["c"].value},isOfflineMode(){return N["b"].value},initOfflineData(){var t;const e=Object(N["a"])().findByID(this.offlineID),n=null===e||void 0===e||null===(t=e.personParams)||void 0===t?void 0:t.person;n&&(this.facts.birthDate=n.birthdate,this.facts.age=A()(s["a"].getSessionDate()).diff(this.facts.birthDate,"years"),this.facts.district=n.current_district,this.facts.village=n.current_village,this.facts.currentTA=n.current_traditional_authority,this.facts.gender=n.gender,this.ready=!0)},async saveFormEncounterAndProceed(t={}){let e="Pending",n=!1,i=null;try{const e=await I["a"].buildValueText("Device",Object(f["f"])());i=[...await this.resolveObs(t.computedData),e]}catch(a){return console.error(""+a),Object(E["e"])("Unable to resolve observations")}if(!this.isOfflineMode()){try{const a=new I["a"](this.patientID,t.encounterTypeID,this.providerID);await a.createEncounter()&&await a.saveObservationList(i)&&(e="Success",n=!0),"function"===typeof t.callback&&await t.callback(a)}catch(a){n=!1,/NetworkError|Failed to fetch/i.test(""+a)?e="NetworkError":(e="Exception",console.error("Exception while saving an encounter: "+a))}if("Exception"===e)return Object(E["c"])("An error has occured!")}Object(N["a"])().saveObsOffline({observations:i,id:this.offlineID,uploadStatus:e,encounterName:this.$route.name,encounterTypeID:t.encounterTypeID,meta:t.formData,labOrders:t.labOrders,created:n}),t.skipNextTask||this.nextTask()},runflowState(t,e=null){const n={};if(n[i.SET_PROVIDER]=t=>{const[e]=t.split(" "),n=Object(o["find"])(this.providers,{username:e});return n&&(this.providerID=n.person_id),i.CONTINUE},n[i.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),i.EXIT),n[i.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),i.EXIT),n[i.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),i.EXIT),t in n)return n[t](e)},async checkEncounterGuidelines(){const t=Object(O["a"])(this.facts,d);for(const o in t){var e,n;const r=t[o];if(null!==r&&void 0!==r&&null!==(e=r.actions)&&void 0!==e&&e.alert){var a;const t=this.runflowState(await(null===r||void 0===r||null===(a=r.actions)||void 0===a?void 0:a.alert(this.facts)));if(t===i.EXIT)return}if(null!==r&&void 0!==r&&null!==(n=r.actions)&&void 0!==n&&n.selection){var s;const t=await(null===r||void 0===r||null===(s=r.actions)||void 0===s?void 0:s.selection(this.facts));this.runflowState(t.flowState,t.value)}}},async setEncounterFacts(){try{const t=await T["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=t.programID===s["a"].getProgramID(),this.facts.outcome=t.outcome,this.facts.outcomeStartDate=t.startDate}catch(t){console.error(t),Object(E["c"])(""+t)}this.facts.currentTA=this.patient.getCurrentTA(),this.facts.district=this.patient.getCurrentDistrict(),this.facts.village=this.patient.getCurrentVillage(),this.facts.sessionDate=s["a"].getSessionDate(),this.facts.apiDate=s["a"].getCachedApiDate(),this.facts.isBdeMode=s["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.age=this.patient.getAge(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",s["a"].isBDE()&&(this.providers=await T["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((t,e)=>{const n=t.username.toUpperCase(),i=e.username.toUpperCase();return n<i?-1:n>i?1:0}).map(t=>{var e;let n=""+t.username;if(!Object(o["isEmpty"])(null===t||void 0===t||null===(e=t.person)||void 0===e?void 0:e.names)){var i;const[e]=(null===(i=t.person)||void 0===i?void 0:i.names)||[];n+=` (${e.given_name} ${e.family_name})`}return n}))},toOption(t,e={}){return{label:t,value:t,other:e}},mapStrToOptions(t){return t.map(t=>"string"===typeof t||"number"===typeof t?{label:t,value:t}:t)},patientDashboardUrl(){return"/patient/dashboard/"+this.$route.params.patient_id},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){try{const t=this.offlineID||this.patientID;await Object(r["b"])(t,this.$router,this.$route)}catch(t){console.error("Workflow error "+t),this.gotoPatientDashboard()}},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(t,e={}){return{label:t,value:"",other:{...e,values:this.yesNoOptions()}}},mapOptions(t){return t.map(t=>({label:t,value:t}))},toConditionalOptions(t){const e=[];for(const n of t)("boolean"!==typeof n[1]||n[1])&&e.push(this.toOption(n[0]));return e},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(t,e=""){const n=Object.values(t).filter(t=>t&&(t.tag===e||""===e)).reduce((t,e)=>{const n=e.obs?e.obs:e;return Array.isArray(n)?t=t.concat(n):"function"===typeof n?t.push(n()):t.push(n),t},[]);return Promise.all(n)},inArray(t,e){try{return t.filter(t=>e(t)).length>0}catch(n){return!1}},validateSeries(t){try{for(const e in t){const n=t[e]();if(n)return n}}catch(e){return[e]}}}});const C=D;e["a"]=C},7920:function(t,e,n){"use strict";var i=n("7a23");function a(t,e,n,a,s,o){return Object(i["openBlock"])(),Object(i["createBlock"])(Object(i["resolveDynamicComponent"])(t.formType),{fields:t.fields,skipSummary:t.skipSummary,activeField:t.activeField,cancelDestinationPath:t.cancelDestinationPath,onOnFinish:t.onFinish,onFinish:t.onFinishAction,onOnIndex:t.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var s=n("9441"),o=Object(i["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:s["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(t,e){this.$emit("onFinish",t,e)},onIndex(t){this.$emit("onIndex",t)}}}),r=n("d959"),c=n.n(r);const l=c()(o,[["render",a]]);e["a"]=l},c21d:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("14d9");function i(t,e){const n=[],i=[-1,"",null,void 0];for(const a in e){if(!(a in t))continue;const s=t[a];i.includes(s)?n.push(!1):n.push(e[a](s,t))}return n.every(Boolean)}function a(t){return t.sort((t,e)=>t.priority&&e.priority&&t.priority<e.priority?-1:1)}function s(t){return t.sort((t,e)=>t.weight&&e.weight&&t.weight>e.weight?-1:1)}function o(t,e,n="",o="",r="priority"){const c=[];for(const a in e){const s=e[a],r=[s.target&&n&&s.target!=n,s.targetEvent&&o&&s.targetEvent!=o];r.some(Boolean)||i(t,s.conditions)&&(s.title=a,s.description&&(s.description.text=s.description.info(t)),c.push(s))}return"priority"===r?a(c):s(c)}},f7b2:function(t,e,n){"use strict";n.r(e);var i=n("7a23");function a(t,e,n,a,s,o){const r=Object(i["resolveComponent"])("his-standard-form");return Object(i["openBlock"])(),Object(i["createBlock"])(r,{fields:t.fields,skipSummary:!0,onFinishAction:t.onFinish},null,8,["fields","onFinishAction"])}var s=n("d95e"),o=n("7920"),r=n("2706"),c=n("7365"),l=n("3b8c"),u=n("b446"),d=n("7957"),O=Object(i["defineComponent"])({mixins:[c["a"]],components:{HisStandardForm:o["a"]},data:()=>({consultation:{}}),watch:{ready:{handler(t){t&&(this.consultation=new l["a"](this.patientID,this.providerID),this.fields=this.getFields())},immediate:!0}},methods:{async onFinish(t,e){await this.consultation.createEncounter();const n=await this.resolveObs(e);await this.consultation.saveObservationList(n),this.$router.back()},getFields(){return[{id:"has_hypertension",helpText:"Does the patient have hypertension",type:s["b"].TT_SELECT,options:()=>this.yesNoOptions(),validation:t=>r["a"].required(t),computedValue:t=>d["a"].buildValueCoded("Patient has hypertension",""+t.value)},...Object(u["b"])({condition:t=>"Yes"===t.has_hypertension.value,id:"hypertension_diagnosis",helpText:"Date the patient was diagnosed with hypertension",required:!0,estimation:{allowUnknown:!1},computeValue:t=>d["a"].buildValueDate("Hypertension diagnosis date",t)},l["a"].getSessionDate())]}}}),h=n("d959"),E=n.n(h);const T=E()(O,[["render",a]]);e["default"]=T}}]);
//# sourceMappingURL=chunk-39ae0fda.22f24569.js.map