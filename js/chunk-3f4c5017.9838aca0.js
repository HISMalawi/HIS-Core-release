(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f4c5017"],{"0cb1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("cc6f");class i extends o["a"]{constructor(e,t){super(e,57,t)}}},"331e":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("cc6f"),i=n("8158");class a extends o["a"]{constructor(e,t){super(e,122,t)}static async getComplaintsList(e,t=""){return i["a"].getConceptSet(e,t)}async fetchLatestTriageEncounter(){return await a.getObs({concept_id:i["a"].getConceptID("History of COVID-19 contact"),start_date:this.date,end_date:this.date,person_id:this.patientID})}}},"440c":function(e,t,n){"use strict";n("6e53")},"6e53":function(e,t,n){},7365:function(e,t,n){"use strict";n("14d9"),n("13d5");var o,i=n("7a23"),a=n("ad60"),s=n("2ef0"),r=n("0fa1"),c=n("7f35"),l=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(o||(o={}));const d=e=>l["c"].toStandardHisDisplayFormat(e),u={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+d(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?o.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?o.CHANGE_PATIENT_OUTCOME:o.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${d(t)} is less than birth date of ${d(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?o.CHANGE_SESSION_DATE:o.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:i})=>{const a=await Object(c["c"])("Please select a provider for "+t,`BDE: ${d(n)} | Current: ${d(i)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===a.action?{value:-1,flowState:o.GO_TO_PATIENT_DASHBOARD}:{value:a.selection,flowState:o.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var T=n("c21d"),m=n("7920"),h=n("b5e4"),p=n("8e8b"),b=Object(i["defineComponent"])({components:{HisStandardForm:m["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.patientID=parseInt(e.params.patient_id),p["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const n={};if(n[o.SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(s["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),o.CONTINUE},n[o.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),o.EXIT),n[o.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),o.EXIT),n[o.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),o.EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(T["a"])(this.facts,u);for(const s in e){var t,n;const r=e[s];if(null!==r&&void 0!==r&&null!==(t=r.actions)&&void 0!==t&&t.alert){var i;const e=this.runflowState(await(null===r||void 0===r||null===(i=r.actions)||void 0===i?void 0:i.alert(this.facts)));if(e===o.EXIT)return}if(null!==r&&void 0!==r&&null!==(n=r.actions)&&void 0!==n&&n.selection){var a;const e=await(null===r||void 0===r||null===(a=r.actions)||void 0===a?void 0:a.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await p["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(h["c"])(""+e)}this.facts.sessionDate=a["a"].getSessionDate(),this.facts.apiDate=a["a"].getCachedApiDate(),this.facts.isBdeMode=a["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",a["a"].isBDE()&&(this.providers=await p["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),o=t.username.toUpperCase();return n<o?-1:n>o?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(s["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var o;const[t]=(null===(o=e.person)||void 0===o?void 0:o.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>({label:e,value:e}))},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},nextTask(){return Object(r["b"])(this.patientID,this.$router)},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const O=b;t["a"]=O},7920:function(e,t,n){"use strict";var o=n("7a23");function i(e,t,n,i,a,s){return Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var a=n("9441"),s=Object(o["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:a["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),r=n("d959"),c=n.n(r);const l=c()(s,[["render",i]]);t["a"]=l},"8d10":function(e,t,n){},c21d:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("14d9");function o(e,t){const n=[],o=[-1,"",null,void 0];for(const i in t){if(!(i in e))continue;const a=e[i];o.includes(a)?n.push(!1):n.push(t[i](a,e))}return n.every(Boolean)}function i(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function a(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function s(e,t,n="",s="",r="priority"){const c=[];for(const i in t){const a=t[i],r=[a.target&&n&&a.target!=n,a.targetEvent&&s&&a.targetEvent!=s];r.some(Boolean)||o(e,a.conditions)&&(a.title=i,a.description&&(a.description.text=a.description.info(e)),c.push(a))}return"priority"===r?i(c):a(c)}},c4e4:function(e,t,n){"use strict";var o=n("7a23");const i=e=>(Object(o["pushScopeId"])("data-v-bc9313da"),e=e(),Object(o["popScopeId"])(),e),a={class:"ion-margin-bottom"},s={key:0},r={class:"his-md-text side-title"},c=i(()=>Object(o["createElementVNode"])("div",{class:"his-md-text side-title"}," Select specimen ",-1)),l=i(()=>Object(o["createElementVNode"])("div",{class:"his-md-text side-title"}," Main test(s) reason ",-1)),d={style:{background:"lightyellow",height:"34vh"}},u={class:"his-sm-text"},T=i(()=>Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",null,"Test"),Object(o["createElementVNode"])("th",null,"Specimen"),Object(o["createElementVNode"])("th",null,"Reason"),Object(o["createElementVNode"])("th",null,"Action")])],-1));function m(e,t,n,i,m,h){const p=Object(o["resolveComponent"])("ion-title"),b=Object(o["resolveComponent"])("ion-toolbar"),O=Object(o["resolveComponent"])("ion-header"),_=Object(o["resolveComponent"])("ion-label"),E=Object(o["resolveComponent"])("ion-checkbox"),I=Object(o["resolveComponent"])("ion-item"),v=Object(o["resolveComponent"])("ion-list"),C=Object(o["resolveComponent"])("ion-col"),N=Object(o["resolveComponent"])("ion-text"),S=Object(o["resolveComponent"])("BarcodeInput"),f=Object(o["resolveComponent"])("ion-radio"),g=Object(o["resolveComponent"])("ion-radio-group"),y=Object(o["resolveComponent"])("ion-button"),j=Object(o["resolveComponent"])("ion-row"),A=Object(o["resolveComponent"])("ion-grid"),D=Object(o["resolveComponent"])("ion-content"),R=Object(o["resolveComponent"])("ion-footer");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(O,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{class:"his-lg-text"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Lab orders")]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(D,{style:{overflow:"hidden",background:"grey",height:"70vh"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(A,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(C,{size:"6"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{style:{overflowY:"auto",height:"75vh"}},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.testTypes,(t,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])(I,{class:"his-sm-text",key:t,disabled:null!==e.activeIndex&&e.activeIndex!==n&&!e.isOrderComplete,detail:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(_,{"text-wrap":""},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.name),1)]),_:2},1024),Object(o["createVNode"])(E,{modelValue:t.isChecked,"onUpdate:modelValue":e=>t.isChecked=e,slot:"start",onIonChange:o=>e.onSelectTest(t.name,n,o)},null,8,["modelValue","onUpdate:modelValue","onIonChange"])]),_:2},1032,["disabled"]))),128))]),_:1})]),_:1}),null!=e.activeIndex&&e.selectedOrders.length>0?(Object(o["openBlock"])(),Object(o["createBlock"])(C,{key:0,style:{overflowY:"auto",height:"79vh"}},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",a,[/hiv viral load/i.test(e.testTypes[e.activeIndex].name)?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",s,[Object(o["createElementVNode"])("div",r,[Object(o["createTextVNode"])(" Barcode ID: "),Object(o["createVNode"])(N,{color:e.testTypes[e.activeIndex].accessionNumber?"success":"dark"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(e.testTypes[e.activeIndex].accessionNumber||"None"),1)]),_:1},8,["color"])]),Object(o["createVNode"])(S,{size:"small",onOnScan:t[0]||(t[0]=t=>e.onScanEIDbarcode(t))})])):Object(o["createCommentVNode"])("",!0),e.extendedLabsEnabled?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(v,{key:1},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(g,{modelValue:e.testTypes[e.activeIndex]["specimen"],"onUpdate:modelValue":t[1]||(t[1]=t=>e.testTypes[e.activeIndex]["specimen"]=t)},{default:Object(o["withCtx"])(()=>[c,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.specimens,t=>(Object(o["openBlock"])(),Object(o["createBlock"])(I,{key:t},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(_,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.name),1)]),_:2},1024),Object(o["createVNode"])(f,{slot:"start",value:t.name,onClick:n=>e.addSpecimen(t)},null,8,["value","onClick"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1})),Object(o["createVNode"])(g,{modelValue:e.testTypes[e.activeIndex]["reason"],"onUpdate:modelValue":t[2]||(t[2]=t=>e.testTypes[e.activeIndex]["reason"]=t)},{default:Object(o["withCtx"])(()=>[l,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.testReasons,e=>(Object(o["openBlock"])(),Object(o["createBlock"])(I,{class:"his-sm-text",key:e},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(_,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e),1)]),_:2},1024),Object(o["createVNode"])(f,{slot:"start",value:e},null,8,["value"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("table",u,[T,Object(o["createElementVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.finalOrders,(t,n)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:n},[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.name),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.specimen||"N/A"),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.reason),1),Object(o["createElementVNode"])("td",null,[Object(o["createVNode"])(y,{onClick:n=>e.removeOrder(t.currentIndex),slot:"end",color:"danger"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("X")]),_:2},1032,["onClick"])])]))),128))])])])]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(R,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(y,{onClick:e.postActivities,size:"large",slot:"end",disabled:0===e.finalOrders.length},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Place orders ")]),_:1},8,["onClick","disabled"]),Object(o["createVNode"])(y,{onClick:t[3]||(t[3]=t=>e.closeModal([])),size:"large",slot:"start",color:"danger"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Close ")]),_:1})]),_:1})]),_:1})],64)}var h=n("d867"),p=n("b5e4"),b=n("9b7c"),O=n("0cb1"),_=n("b89f"),E=n("d1ca"),I=n("8e8b"),v=n("2ef0"),C=n("efaf"),N=Object(o["defineComponent"])({name:"Modal",props:{activities:{type:Object,required:!0},testFilters:{type:Array},title:{type:String,default:""}},watch:{activities:{handler(e){e&&(this.appActivities=[...e],this.getActivities())},immediate:!0}},async created(){this.extendedLabsEnabled=await E["b"].extendedLabEnabled()},methods:{async onScanEIDbarcode(e){if(this.verifyingBarcode=!this.verifyingBarcode,this.verifyingBarcode)return;(await h["loadingController"].create({message:"Checking "+e})).present(),this.testTypes[this.activeIndex]["accessionNumber"]=null;const t=/^([A-Z]{1})?[0-9]{7,8}$/i.test((""+e).trim());if(!t)return Object(p["e"])("Invalid Barcode"),this.verifyingBarcode=!1,void h["loadingController"].getTop().then(e=>e&&h["loadingController"].dismiss());try{await b["a"].accessionNumExists(e)?Object(p["e"])(`Barcode ${e} was already used`):this.testTypes[this.activeIndex]["accessionNumber"]=e}catch(n){Object(p["c"])("Failed to confirm barcode "+e+", Please try again later",8e3)}this.verifyingBarcode=!1,h["loadingController"].getTop().then(e=>e&&h["loadingController"].dismiss())},async onSelectTest(e,t,n){this.$nextTick(async()=>{this.testTypes[t]["isChecked"]=n.target.checked,this.testTypes[t]["isChecked"]?(this.specimens=await b["a"].getSpecimens(e),this.testTypes[t]["currentIndex"]=t,this.activeIndex=t):this.removeOrder(t)})},async getActivities(){const e=await b["a"].getTestTypes(),t=Object(v["findIndex"])(e,{name:"HIV viral load"}),n=-1!==t?e.splice(t,1):null,o=e.sort((e,t)=>(""+e.name).toUpperCase()>(""+t.name).toUpperCase()?1:-1).filter(e=>!Array.isArray(this.testFilters)||this.testFilters.includes(e.name));this.testTypes=n?[...n,...o]:o},removeOrder(e){this.testTypes[e]["isChecked"]=!1,this.testTypes[e]["reason"]=null,this.testTypes[e]["specimen"]=null,this.testTypes[e]["specimenConcept"]=null,this.testTypes[e]["accessionNumber"]=null,this.activeIndex=null,this.specimens=[]},addSpecimen(e){this.testTypes[this.activeIndex]["specimenConcept"]=e.concept_id},async postActivities(){const e=""+this.$route.params.patient_id,t=new O["a"](parseInt(e),-1),n=await t.createEncounter();if(n){const e=await b["a"].buildLabOrders(n,this.finalOrders),t=await b["a"].saveOrdersArray(n.encounter_id,e);if(!t)return Object(p["e"])("Unable to save lab orders");I["a"].invalidate("PATIENT_LAB_ORDERS");const o=await Object(p["a"])("Lab orders and encounter created!, print out your last orders?",{confirmBtnLabel:"Yes",cancelBtnLabel:"No"});o?await this.printOrders(t):await this.closeModal(t)}},async closeModal(e){await h["modalController"].dismiss(e)},async printOrders(e){const t=new _["a"];await e.forEach(async e=>{const n="lab/labels/order?order_id="+e.order_id;await t.printLbl(n)}),await h["modalController"].dismiss(e)}},computed:{isOrderComplete(){return"number"==typeof this.activeIndex&&(!(/hiv viral load/i.test(this.testTypes[this.activeIndex]["name"])&&!this.testTypes[this.activeIndex]["accessionNumber"])&&(this.extendedLabsEnabled?!!this.testTypes[this.activeIndex]["reason"]:(this.testTypes[this.activeIndex]["specimenConcept"]||this.testTypes[this.activeIndex]["specimen"])&&this.testTypes[this.activeIndex]["reason"]))},selectedOrders(){return this.testTypes.filter(e=>!0===e.isChecked)},finalOrders(){return this.selectedOrders.filter(e=>!(/hiv viral load/i.test(e.name)&&!e.accessionNumber)&&(e.reason&&(e.specimen&&!this.extendedLabsEnabled||this.extendedLabsEnabled)))},testReasons(){return this.testTypes[this.activeIndex].name.match(/Viral load/i)?this.reasons.concat(["Follow up after Low Level Viremia","Follow up after High Viral Load"]):this.reasons}},mounted(){this.getActivities()},data(){return{verifyingBarcode:!1,content:"Content",extendedLabsEnabled:!1,appActivities:[],testTypes:[],specimens:[],reasons:["Routine","Targeted","Confirmatory","Stat","Repeat / Missing"],activeIndex:null}},components:{IonButton:h["IonButton"],IonContent:h["IonContent"],IonHeader:h["IonHeader"],IonTitle:h["IonTitle"],IonToolbar:h["IonToolbar"],IonLabel:h["IonLabel"],IonList:h["IonList"],IonItem:h["IonItem"],BarcodeInput:C["a"],IonCheckbox:h["IonCheckbox"],IonRadioGroup:h["IonRadioGroup"],IonRow:h["IonRow"]}}),S=(n("440c"),n("d959")),f=n.n(S);const g=f()(N,[["render",m],["__scopeId","data-v-bc9313da"]]);t["a"]=g},d95e:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),function(e){e["TT_MULTI_SELECT_GRID"]="HisMultiSelectGrid",e["TT_AGE_INPUT"]="HisAgeInput",e["TT_GROUP_SELECTOR"]="HisGroupSelector",e["TT_DATA_TABLE"]="HisDataTable",e["TT_GRID_SELECTOR"]="HisGridSelector",e["TT_NOTE"]="HisNote",e["TT_BARCODE"]="HisBarcodeInput",e["TT_MONTHLY_DAYS"]="HisMonthlyDays",e["TT_TEXT"]="HisTextInput",e["TT_NUMBER"]="HisNumberInput",e["TT_DATETIME"]="datetime",e["TT_SELECT"]="HisSelect",e["TT_MULTIPLE_SELECT"]="HisMultipleSelect",e["TT_ART_REGIMEN_SELECTION"]="HisArtRegimenSelection",e["TT_NEXT_VISIT_INTERVAL_SELECTION"]="HisNextVisitInterval",e["TT_TABLE_VIEWER"]="HisTableViewer",e["TT_DOSAGE_INPUT"]="HisDosageInput",e["TT_YES_NO"]="YesNoSelect",e["TT_MULTIPLE_YES_NO"]="MultiYesNoSelect",e["TT_SUMMARY"]="HisSummary",e["TT_WEIGHT_CHART"]="HisWeightChart",e["TT_VITALS_ENTRY"]="HisVitalsEntry",e["TT_ADHERENCE_INPUT"]="HisAdherenceInput",e["TT_ART_STAGING_SUMMARY"]="ArtStagingSummary",e["TT_LAB_ORDERS"]="HisLabOrders",e["TT_APPOINTMENTS_ENTRY"]="HisAppointments",e["TT_DISPENSATION_INPUT"]="DrugDispensationSelection",e["TT_PROGRAM_SELECTION"]="ProgramSelection",e["TT_DATE_PICKER"]="HisDatePicker",e["TT_PERSON_RESULT_VIEW"]="PersonSearchView",e["TT_RELATION_SELECTION"]="RelationsSelection",e["TT_FILING_NUMBER_VIEW"]="FilingNumberView",e["TT_CARD_SELECTOR"]="HisCardSelector",e["TT_PERSON_MATCH_VIEW"]="PersonMatchView",e["TT_FULL_DATE"]="HisDateInput",e["TT_BATCH_ENTRY"]="HisBatchEntry",e["TT_BATCH_VERIFICATION"]="HisBatchVerification",e["TT_BATCH_MOVEMENT"]="HisBatchMovement",e["TT_COMPLAINTS_PICKER"]="HisComplaintsPicker",e["TT_RADIOLOGY_PICKER"]="HisRadiologyPicker",e["TT_IP_ADDRESS"]="HisIPAddress",e["TT_TEXT_BANNER"]="HisTextBanner",e["TT_DRUG_DISPENSER"]="GeneralDrugDispenser",e["TT_CLINIC_HOLIDAY_PICKER"]="HisClinicHolidayPicker",e["TT_ANC_PREGNANCY_INPUT_CONFIG"]="AncPregnancyInfoConfig",e["TT_ANC_PREGNANCY_DETAILS_INPUT"]="AncPregnancyDetailsInput",e["TT_ANC_LMP_DATE_INPUT"]="AncLmpDateInput",e["TT_ANC_DRUGSET_INPUT"]="AncDrugSetInput",e["TT_DRUG_TRANSFER_IN"]="DrugTransferInput",e["TT_PRESCRIPTION_INPUT"]="HisPrescriptionInput",e["TT_INFINITE_SCROLL_MULTIPLE_SELECT"]="HisInfiniteScrollMultipleSelect"}(o||(o={}));const i=[o.TT_MULTI_SELECT_GRID,o.TT_AGE_INPUT,o.TT_BARCODE,o.TT_NOTE,o.TT_SELECT,o.TT_CARD_SELECTOR,o.TT_MULTIPLE_SELECT,o.TT_TEXT,o.TT_NUMBER,o.TT_MONTHLY_DAYS,o.TT_ART_REGIMEN_SELECTION,o.TT_NEXT_VISIT_INTERVAL_SELECTION,o.TT_TABLE_VIEWER,o.TT_DOSAGE_INPUT,o.TT_YES_NO,o.TT_MULTIPLE_YES_NO,o.TT_WEIGHT_CHART,o.TT_VITALS_ENTRY,o.TT_APPOINTMENTS_ENTRY,o.TT_COMPLAINTS_PICKER,o.TT_CLINIC_HOLIDAY_PICKER,o.TT_SUMMARY,o.TT_ART_STAGING_SUMMARY,o.TT_ADHERENCE_INPUT,o.TT_LAB_ORDERS,o.TT_PERSON_RESULT_VIEW,o.TT_PROGRAM_SELECTION,o.TT_DATE_PICKER,o.TT_RELATION_SELECTION,o.TT_FILING_NUMBER_VIEW,o.TT_PERSON_MATCH_VIEW,o.TT_FULL_DATE,o.TT_BATCH_ENTRY,o.TT_BATCH_VERIFICATION,o.TT_BATCH_MOVEMENT,o.TT_IP_ADDRESS,o.TT_TEXT_BANNER,o.TT_DISPENSATION_INPUT,o.TT_DATA_TABLE,o.TT_GROUP_SELECTOR,o.TT_ANC_PREGNANCY_INPUT_CONFIG,o.TT_ANC_PREGNANCY_DETAILS_INPUT,o.TT_ANC_LMP_DATE_INPUT,o.TT_DRUG_TRANSFER_IN,o.TT_GRID_SELECTOR,o.TT_ANC_DRUGSET_INPUT,o.TT_RADIOLOGY_PICKER,o.TT_PRESCRIPTION_INPUT,o.TT_INFINITE_SCROLL_MULTIPLE_SELECT,o.TT_DRUG_DISPENSER]},e16d:function(e,t,n){"use strict";n("8d10")},f159:function(e,t,n){var o={"./AncDrugSetInput.vue":["c99f","TouchFormElement0"],"./AncLmpDateInput.vue":["101a","TouchFormElement1"],"./AncPregnancyDetailsInput.vue":["b043","TouchFormElement2"],"./AncPregnancyInfoConfig.vue":["262e","TouchFormElement3"],"./ArtStagingSummary.vue":["43db","TouchFormElement4"],"./BaseTextInput.vue":["36ad","TouchFormElement5"],"./DrugDispensationSelection.vue":["05d5","TouchFormElement6"],"./DrugTransferInput.vue":["de42","TouchFormElement7"],"./FieldMixin.vue":["51c8","TouchFormElement8"],"./FilingNumberView.vue":["c650","TouchFormElement9"],"./GeneralDrugDispenser.vue":["7737","TouchFormElement10"],"./HisAdherenceInput.vue":["f2c3","TouchFormElement11"],"./HisAgeInput.vue":["c05f","TouchFormElement12"],"./HisAppointments.vue":["b2eb","chunk-366b6f0a","TouchFormElement13"],"./HisArtRegimenSelection.vue":["47b9","TouchFormElement14"],"./HisBarcodeInput.vue":["dd65","TouchFormElement15"],"./HisBatchEntry.vue":["f2ab","chunk-fb7a1668","TouchFormElement16"],"./HisBatchMovement.vue":["5148","chunk-fb7a1668","TouchFormElement17"],"./HisBatchVerification.vue":["7b0f","chunk-fb7a1668","TouchFormElement18"],"./HisCardSelector.vue":["0734","TouchFormElement19"],"./HisClinicHolidayPicker.vue":["4030","chunk-366b6f0a","TouchFormElement20"],"./HisComplaintsPicker.vue":["82d1","TouchFormElement21"],"./HisDataTable.vue":["a6ba","TouchFormElement22"],"./HisDateInput.vue":["374c","TouchFormElement23"],"./HisDatePicker.vue":["9b30","chunk-366b6f0a","TouchFormElement24"],"./HisDosageInput.vue":["b34c","TouchFormElement25"],"./HisGridSelector.vue":["112a","TouchFormElement26"],"./HisGroupSelector.vue":["81cf","TouchFormElement27"],"./HisIPAddress.vue":["2a82","TouchFormElement28"],"./HisInfiniteScrollMultipleSelect.vue":["52a3","TouchFormElement29"],"./HisLabOrders.vue":["e614","TouchFormElement30"],"./HisMonthlyDays.vue":["69cf","TouchFormElement31"],"./HisMultiSelectGrid.vue":["0fa3","TouchFormElement32"],"./HisMultipleSelect.vue":["2fd5","chunk-8a3b8db0","TouchFormElement33"],"./HisNextVisitInterval.vue":["3126","TouchFormElement34"],"./HisNote.vue":["c927","TouchFormElement35"],"./HisNumberInput.vue":["5e75","TouchFormElement36"],"./HisPrescriptionInput.vue":["87e5","TouchFormElement37"],"./HisRadiologyPicker.vue":["adc7","chunk-3c642140","TouchFormElement38"],"./HisSelect.vue":["d11f","TouchFormElement39"],"./HisSummary.vue":["e0bd","TouchFormElement40"],"./HisTableViewer.vue":["8904","TouchFormElement41"],"./HisTextBanner.vue":["952c","TouchFormElement42"],"./HisTextInput.vue":["6ef9","TouchFormElement43"],"./HisVitalsEntry.vue":["e333","TouchFormElement44"],"./HisWeightChart.vue":["26a1","TouchFormElement45"],"./MultiYesNoSelect.vue":["5fd1","TouchFormElement46"],"./PersonMatchView.vue":["6591","TouchFormElement47"],"./PersonSearchView.vue":["28b2","TouchFormElement48"],"./ProgramSelection.vue":["e3b4","TouchFormElement49"],"./RelationsSelection.vue":["0e57","TouchFormElement50"],"./SelectMixin.vue":["82a9","TouchFormElement51"],"./YesNoSelect.vue":["71f2","TouchFormElement52"]};function i(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(o)},i.id="f159",e.exports=i},fea9:function(e,t,n){"use strict";n.r(t);var o=n("7a23");function i(e,t,n,i,a,s){const r=Object(o["resolveComponent"])("his-standard-form"),c=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(c,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{cancelDestinationPath:e.cancelDestination,fields:e.fields,onFinishAction:e.onSubmit,skipSummary:!0},null,8,["cancelDestinationPath","fields","onFinishAction"])]),_:1})}var a=n("7920"),s=n("7365"),r=n("331e"),c=n("c4e4");function l(e,t,n,i,a,s){const r=Object(o["resolveComponent"])("ion-title"),c=Object(o["resolveComponent"])("ion-toolbar"),l=Object(o["resolveComponent"])("ion-header"),d=Object(o["resolveComponent"])("his-radiology-picker"),u=Object(o["resolveComponent"])("ion-content"),T=Object(o["resolveComponent"])("ion-button"),m=Object(o["resolveComponent"])("ion-footer");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(l,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{class:"his-lg-text"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Radiology Examination")]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(u,{style:{overflow:"hidden",background:"grey",height:"70vh"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{onOnValue:e.onValue},null,8,["onOnValue"])]),_:1}),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(T,{onClick:t[0]||(t[0]=t=>e.onSubmit()),size:"large",slot:"end",disabled:0===e.emitedSelectedOptions.length},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Place orders ")]),_:1},8,["disabled"]),Object(o["createVNode"])(T,{onClick:t[1]||(t[1]=t=>e.closeModal()),size:"large",slot:"start",color:"danger"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Close ")]),_:1})]),_:1})]),_:1})],64)}var d=n("d867"),u=n("97ed"),T=n("adc7"),m=n("66fd"),h=n("2ef0"),p=Object(o["defineComponent"])({name:"Modal",components:{IonButton:d["IonButton"],IonContent:d["IonContent"],IonHeader:d["IonHeader"],IonTitle:d["IonTitle"],IonToolbar:d["IonToolbar"],IonFooter:d["IonFooter"],HisRadiologyPicker:T["default"]},mixins:[s["a"]],data:()=>({radiologyService:{},isPacsEnabled:!1,emitedSelectedOptions:{}}),watch:{ready:{async handler(e){e&&(this.radiologyService=new u["a"](this.patientID,this.providerID),this.isPacsEnabled=await m["b"].isPACsEnabled())},immediate:!0,deep:!0}},methods:{async onValue(e){this.emitedSelectedOptions=e},async getSelected(){return this.emitedSelectedOptions.map(async e=>({...await this.radiologyService.buildValueCoded("Radiology Orders",e.other.parent),child:[await this.radiologyService.buildValueCodedFromConceptId(e.other.parent,e.other.concept_id)]}))},async onSubmit(){if(!Object(h["isEmpty"])(this.emitedSelectedOptions)){this.closeModal();let t=await this.getSelected();t=await Promise.all(t),await this.radiologyService.createEncounter();const n=await this.radiologyService.obsObj(t),o=await this.radiologyService.saveObservationList(n);if(await this.radiologyService.printOrders(o,this.patient),this.isPacsEnabled)try{await this.radiologyService.submitToPacs(o,this.patient)}catch(e){console.log(e)}}},async closeModal(){await d["modalController"].dismiss([])}}}),b=n("d959"),O=n.n(b);const _=O()(p,[["render",l]]);var E=_,I=n("2706"),v=n("d95e"),C=n("7957"),N=n("ec2a"),S=n("9283"),f=Object(o["defineComponent"])({components:{HisStandardForm:a["a"],IonPage:d["IonPage"]},mixins:[s["a"]],data:()=>({complaintsService:{},todaysDate:C["a"].getSessionDate(),presentingComplaints:"",isPacsEnabled:!1,radiologyBtnName:"Radiology Order",hasTriageComplaints:!1}),watch:{ready:{async handler(e){e&&(this.complaintsService=new r["a"](this.patientID,this.providerID),this.isPacsEnabled=await m["b"].isPACsEnabled(),this.hasTriageComplaints=await this.getTriagePresentingComplaints(),this.fields=this.getFields())},immediate:!0,deep:!0}},methods:{async onSubmit(e,t){const n=await Promise.all(t.complaints);await this.complaintsService.createEncounter(),await this.complaintsService.saveObservationList(n),this.nextTask()},async launchOrderSelection(){const e=await d["modalController"].create({component:c["a"],backdropDismiss:!1,cssClass:"large-modal"});e.present(),await e.onDidDismiss()},async launchRadiologyOrderSelection(){const e=await d["modalController"].create({component:E,backdropDismiss:!1,cssClass:"large-modal"});e.present(),await e.onDidDismiss()},async getTriagePresentingComplaints(){const e=await this.complaintsService.fetchLatestTriageEncounter();if(!(e.length>0))return!1;const t=await N["a"].getEncounters(this.patientID,this.todaysDate),n=t.filter((function(e){return"TRIAGE PRESENTING COMPLAINTS"==e.type.name&&S["c"].toStandardHisFormat(e.encounter_datetime)==C["a"].getSessionDate()}));return n.length>0&&(this.presentingComplaints=n[0].observations,!0)},buildResults(){const e=["Group","Presenting complaints"];let t="",n=this.presentingComplaints.map(e=>{if(null!=e.obs_group_id)return[t,e.value_text];t=e.value_text});return n=n.filter(e=>void 0!=e),this.presentingComplaints=n,[{label:"",value:"",other:{columns:e,rows:n}}]},getFields(){return[{id:"triage_complaints",helpText:"Triaging Complaints",condition:()=>this.hasTriageComplaints,type:v["b"].TT_TABLE_VIEWER,options:e=>this.buildResults(),config:{hiddenFooterBtns:["Clear"]}},{id:"complaints",helpText:"Presenting Complaints",type:v["b"].TT_COMPLAINTS_PICKER,validation:e=>I["a"].required(e),computedValue:e=>e.map(async e=>({...await this.complaintsService.buildValueCoded("Presenting complaint",e.other.parent),child:[await this.complaintsService.buildValueCodedFromConceptId(e.other.parent,e.other.concept_id)]})),config:{hiddenFooterBtns:[this.showRadiologyOdersBtn(),this.disableBackBtn()],footerBtns:[{name:"Lab Order",size:"large",slot:"end",color:"primary",visible:!0,onClick:async()=>await this.launchOrderSelection(),visibleOnStateChange:e=>1===e.index},{name:this.radiologyBtnName,size:"large",slot:"end",color:"primary",visible:!0,onClick:async()=>await this.launchRadiologyOrderSelection(),visibleOnStateChange:e=>1===e.index}]}},{id:"all_presenting_complaints",helpText:"Summary",condition:()=>this.presentingComplaints.length>0,type:v["b"].TT_SUMMARY,options:(e,t)=>this.buildSummaryResults(e),config:{hiddenFooterBtns:["Clear"]}}]},showRadiologyOdersBtn(){return this.isPacsEnabled?"":this.radiologyBtnName},buildSummaryResults(e){const t=e.complaints.map(e=>({label:"OPD Complaints",value:e.label})),n=this.presentingComplaints.map(e=>({label:"Triaging Complaints",value:e[1]}));return t.concat(n)},disableBackBtn(){return this.hasTriageComplaints?"":"Back"}}});n("e16d");const g=O()(f,[["render",i]]);t["default"]=g}}]);
//# sourceMappingURL=chunk-3f4c5017.9838aca0.js.map