(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7709102e"],{"32b3":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a,o=n("cc6f"),i=n("7957");(function(e){e["Prescription"]="htnPrescription"})(a||(a={}));class r extends o["a"]{constructor(e,t){super(e,48,t)}static getBpGrade(e,t){return e<140&&t<90?"normal":e>=140&&e<160||t>=100&&t<110?"grade 1":e>=180&&t>110||e>=180?"grade 3":e>=160&&e<180||t>=110?"grade 2":"N/A"}static isBpNormotensive(e){const[t,n]=Object.values(e).sort((e,t)=>e.date<t.date?1:0).map(e=>this.getBpGrade(e.sbp,e.dbp));return"normal"===t&&"normal"===n}getSystolicBp(){return i["a"].getFirstValueNumber(this.patientID,"Systolic blood pressure")}getDiastolicBp(){return i["a"].getFirstValueNumber(this.patientID,"Diastolic blood pressure")}async onBpDrugs(){const e=await i["a"].getFirstValueCoded(this.patientID,"Treatment status");return!!e&&"Yes"===e}async getBPTrail(){return await o["a"].getJson(`/patients/${this.patientID}/bp_trail`)}async getCurrentDrugs(){return await o["a"].getJson(`/patients/${this.patientID}/current_bp_drugs`)}async getLastDrugs(){return await o["a"].getJson(`/patients/${this.patientID}/last_bp_drugs_dispensation`)}async getAdherence(e,t){return await o["a"].postJson(`/patients/${this.patientID}/remaining_bp_drugs`,{drug_id:e,pills:t})}async enrollPatient(e){return await o["a"].postJson(`/patients/${this.patientID}/update_or_create_htn_state`,e)}static htnDrugReferences(){return[{drug_id:275,drug_name:"HCZ (25mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:942,drug_name:"Enalapril (5mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:943,drug_name:"Enalapril (10mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:558,drug_name:"Amlodipine (5mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:559,drug_name:"Amlodipine (10mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:117,drug_name:"Atenolol (50mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:11,drug_name:"Atenolol(100mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"}]}getDrugs(){return{HCZ:{drugs:[{drugName:"HCZ (25mg tablet)",drugID:275,amount:"25mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null}],selected:null,notes:[]},Enalapril:{drugs:[{drugName:"Enalapril (5mg tablet)",drugID:942,amount:"5mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Enalapril (10mg tablet)",drugID:943,amount:"10mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]},Amlodipine:{drugs:[{drugName:"Amlodipine (5mg tablet)",drugID:558,amount:"5mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Amlodipine (10mg tablet)",drugID:559,amount:"10mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]},Atenolol:{drugs:[{drugName:"Atenolol (50mg tablet)",drugID:117,amount:"50mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Atenolol(100mg tablet)",drugID:11,amount:"100mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]}}}}},7365:function(e,t,n){"use strict";n("13d5");var a,o=n("7a23"),i=n("ad60"),r=n("2ef0"),s=n("0fa1"),c=n("7f35"),l=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(a||(a={}));const d=e=>l["b"].toStandardHisDisplayFormat(e),u={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+d(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?a.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?a.CHANGE_PATIENT_OUTCOME:a.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${d(t)} is less than birth date of ${d(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?a.CHANGE_SESSION_DATE:a.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:o})=>{const i=await Object(c["c"])("Please select a provider for "+t,`BDE: ${d(n)} | Current: ${d(o)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===i.action?{value:-1,flowState:a.GO_TO_PATIENT_DASHBOARD}:{value:i.selection,flowState:a.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var p=n("c21d"),m=n("7920"),h=n("b5e4"),g=n("8e8b"),b=n("fe70"),f=Object(o["defineComponent"])({components:{HisStandardForm:m["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},formLabel:"",ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.formLabel=(""+e.name).toUpperCase(),this.patientID=parseInt(e.params.patient_id),g["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const n={};if(n[a.SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(r["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),a.CONTINUE},n[a.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),a.EXIT),n[a.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),a.EXIT),n[a.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),a.EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(p["a"])(this.facts,u);for(const r in e){var t,n;const s=e[r];if(null!==s&&void 0!==s&&null!==(t=s.actions)&&void 0!==t&&t.alert){var o;const e=this.runflowState(await(null===s||void 0===s||null===(o=s.actions)||void 0===o?void 0:o.alert(this.facts)));if(e===a.EXIT)return}if(null!==s&&void 0!==s&&null!==(n=s.actions)&&void 0!==n&&n.selection){var i;const e=await(null===s||void 0===s||null===(i=s.actions)||void 0===i?void 0:i.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await g["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=e.programID===i["a"].getProgramID(),this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(h["c"])(""+e)}this.facts.sessionDate=i["a"].getSessionDate(),this.facts.apiDate=i["a"].getCachedApiDate(),this.facts.isBdeMode=i["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",i["a"].isBDE()&&(this.providers=await g["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),a=t.username.toUpperCase();return n<a?-1:n>a?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(r["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var a;const[t]=(null===(a=e.person)||void 0===a?void 0:a.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>"string"===typeof e||"number"===typeof e?{label:e,value:e}:e)},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){(await b["d"].create({backdropDismiss:!1,message:"Checking Next task.."})).present();try{await Object(s["b"])(this.patientID,this.$router,this.$route)}catch(e){console.error(e)}b["d"].getTop().then(e=>e&&b["d"].dismiss())},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},toConditionalOptions(e){const t=[];for(const n of e)("boolean"!==typeof n[1]||n[1])&&t.push(this.toOption(n[0]));return t},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const D=f;t["a"]=D},"77fd":function(e,t,n){"use strict";var a=n("7a23");const o=Object(a["withScopeId"])("data-v-1b2b2db4");Object(a["pushScopeId"])("data-v-1b2b2db4");const i=Object(a["createTextVNode"])("Risk Factors"),r=Object(a["createTextVNode"])(" Close "),s=Object(a["createTextVNode"])(" Manage BP "),c=Object(a["createTextVNode"])(" Save ");Object(a["popScopeId"])();const l=o((function(e,t,n,l,d,u){const p=Object(a["resolveComponent"])("ion-title"),m=Object(a["resolveComponent"])("ion-toolbar"),h=Object(a["resolveComponent"])("ion-header"),g=Object(a["resolveComponent"])("ion-label"),b=Object(a["resolveComponent"])("ion-checkbox"),f=Object(a["resolveComponent"])("ion-item"),D=Object(a["resolveComponent"])("ion-list"),O=Object(a["resolveComponent"])("ion-col"),_=Object(a["resolveComponent"])("ion-row"),I=Object(a["resolveComponent"])("ion-grid"),v=Object(a["resolveComponent"])("ion-content"),y=Object(a["resolveComponent"])("ion-button"),C=Object(a["resolveComponent"])("ion-footer");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(h,null,{default:o(()=>[Object(a["createVNode"])(m,null,{default:o(()=>[Object(a["createVNode"])(p,null,{default:o(()=>[i]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(v,{style:{overflowY:"hidden",background:"grey"}},{default:o(()=>[Object(a["createVNode"])(I,null,{default:o(()=>[Object(a["createVNode"])(_,null,{default:o(()=>[Object(a["createVNode"])(O,null,{default:o(()=>[Object(a["createVNode"])(D,{style:{overflowY:"auto",height:"78vh"}},{default:o(()=>[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.riskFactors,e=>(Object(a["openBlock"])(),Object(a["createBlock"])(f,{key:e},{default:o(()=>[Object(a["createVNode"])(g,null,{default:o(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.name),1)]),_:2},1024),Object(a["createVNode"])(b,{modelValue:e.isChecked,"onUpdate:modelValue":t=>e.isChecked=t,slot:"start"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(C,null,{default:o(()=>[Object(a["createVNode"])(m,null,{default:o(()=>[Object(a["createVNode"])(y,{size:"large",onClick:e.exit,slot:"start",color:"danger"},{default:o(()=>[r]),_:1},8,["onClick"]),e.showManageBPButton?(Object(a["openBlock"])(),Object(a["createBlock"])(y,{key:0,size:"large",onClick:e.manageBP,slot:"start"},{default:o(()=>[s]),_:1},8,["onClick"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(y,{size:"large",color:"success",onClick:e.postActivities,slot:"end"},{default:o(()=>[c]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}));var d=n("8a30"),u=n("cc6f");class p extends u["a"]{constructor(e,t){super(e,30,t)}}var m=n("8158"),h=Object(a["defineComponent"])({name:"Modal",props:{factors:{type:Object,required:!0},title:{type:String,default:""}},computed:{showManageBPButton(){return"bp_management"!=this.$route.name}},created(){this.patientID=parseInt(""+this.$route.params.patient_id)},methods:{async postActivities(){const e=new p(this.patientID,-1),t=await e.createEncounter();if(t){const t=await this.buildObs();await e.saveObservationList(t),await this.closeModal()}},manageBP(){this.$router.push("/art/encounters/bp_management/"+this.patientID)},exit(){d["Z"].dismiss([])},async closeModal(){await d["Z"].dismiss(this.riskFactors)},async buildObs(){return this.riskFactors.map(e=>{const t=!0===e.isChecked?"Yes":"No",n=m["a"].getConceptID(t,!0),a=m["a"].getConceptID(e.concept,!0);return{concept_id:a,value_coded:n}})}},data(){return{patientID:-1,riskFactors:[{name:"Diabetes",isChecked:!1,concept:"Diabetes"},{name:"Cronic kidney disease",isChecked:!1,concept:"CKD"},{name:"Past history of IHD or CVD",isChecked:!1,concept:"history of CVD"},{name:"First degree relative with IHD or CVD <65",isChecked:!1,concept:"relative with CVD"},{name:"Patient currently smokes",isChecked:!1,concept:"patient smokes"}]}},mounted(){this.factors.forEach(e=>{if("Yes"===e.value){const t=this.riskFactors.findIndex(t=>t.concept===e.concept);this.riskFactors[t].isChecked=!0}})},components:{IonButton:d["d"],IonContent:d["n"],IonHeader:d["q"],IonTitle:d["R"],IonToolbar:d["S"],IonLabel:d["x"],IonList:d["y"],IonItem:d["w"],IonCheckbox:d["k"],IonRow:d["H"],IonFooter:d["o"],IonGrid:d["p"],IonCol:d["m"]}}),g=(n("9719"),n("d959")),b=n.n(g);const f=b()(h,[["render",l],["__scopeId","data-v-1b2b2db4"]]);t["a"]=f},7920:function(e,t,n){"use strict";var a=n("7a23");function o(e,t,n,o,i,r){return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,8,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var i=n("9441"),r=Object(a["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:i["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=n("d959"),c=n.n(s);const l=c()(r,[["render",o]]);t["a"]=l},9719:function(e,t,n){"use strict";n("9e0d")},"9e0d":function(e,t,n){},c21d:function(e,t,n){"use strict";function a(e,t){const n=[],a=[-1,"",null,void 0];for(const o in t){if(!(o in e))continue;const i=e[o];a.includes(i)?n.push(!1):n.push(t[o](i,e))}return n.every(Boolean)}function o(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function i(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function r(e,t,n="",r="",s="priority"){const c=[];for(const o in t){const i=t[o],s=[i.target&&n&&i.target!=n,i.targetEvent&&r&&i.targetEvent!=r];s.some(Boolean)||a(e,i.conditions)&&(i.title=o,i.description&&(i.description.text=i.description.info(e)),c.push(i))}return"priority"===s?o(c):i(c)}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=chunk-7709102e.87bd570a.js.map