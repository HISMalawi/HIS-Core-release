(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1abf667a"],{"331e":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("cc6f"),o=n("8158");class i extends a["a"]{constructor(e,t){super(e,122,t)}static async getComplaintsList(e,t=""){return o["a"].getConceptSet(e,t)}async fetchLatestTriageEncounter(){return await i.getObs({concept_id:o["a"].getConceptID("History of COVID-19 contact"),start_date:this.date,end_date:this.date,person_id:this.patientID})}}},"6dc9":function(e,t,n){"use strict";n("c17f")},7365:function(e,t,n){"use strict";n("13d5");var a,o=n("7a23"),i=n("ad60"),s=n("2ef0"),r=n("0fa1"),c=n("7f35"),l=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(a||(a={}));const d=e=>l["b"].toStandardHisDisplayFormat(e),u={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+d(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?a.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?a.CHANGE_PATIENT_OUTCOME:a.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${d(t)} is less than birth date of ${d(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?a.CHANGE_SESSION_DATE:a.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:o})=>{const i=await Object(c["c"])("Please select a provider for "+t,`BDE: ${d(n)} | Current: ${d(o)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===i.action?{value:-1,flowState:a.GO_TO_PATIENT_DASHBOARD}:{value:i.selection,flowState:a.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var p=n("c21d"),h=n("7920"),b=n("b5e4"),m=n("8e8b"),O=n("fe70"),f=Object(o["defineComponent"])({components:{HisStandardForm:h["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},formLabel:"",ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.formLabel=(""+e.name).toUpperCase(),this.patientID=parseInt(e.params.patient_id),m["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const n={};if(n[a.SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(s["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),a.CONTINUE},n[a.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),a.EXIT),n[a.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),a.EXIT),n[a.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),a.EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(p["a"])(this.facts,u);for(const s in e){var t,n;const r=e[s];if(null!==r&&void 0!==r&&null!==(t=r.actions)&&void 0!==t&&t.alert){var o;const e=this.runflowState(await(null===r||void 0===r||null===(o=r.actions)||void 0===o?void 0:o.alert(this.facts)));if(e===a.EXIT)return}if(null!==r&&void 0!==r&&null!==(n=r.actions)&&void 0!==n&&n.selection){var i;const e=await(null===r||void 0===r||null===(i=r.actions)||void 0===i?void 0:i.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await m["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=e.programID===i["a"].getProgramID(),this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(b["c"])(""+e)}this.facts.sessionDate=i["a"].getSessionDate(),this.facts.apiDate=i["a"].getCachedApiDate(),this.facts.isBdeMode=i["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",i["a"].isBDE()&&(this.providers=await m["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),a=t.username.toUpperCase();return n<a?-1:n>a?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(s["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var a;const[t]=(null===(a=e.person)||void 0===a?void 0:a.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>"string"===typeof e||"number"===typeof e?{label:e,value:e}:e)},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){(await O["d"].create({backdropDismiss:!1,message:"Checking Next task.."})).present();try{await Object(r["b"])(this.patientID,this.$router,this.$route)}catch(e){console.error(e)}O["d"].getTop().then(e=>e&&O["d"].dismiss())},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},toConditionalOptions(e){const t=[];for(const n of e)("boolean"!==typeof n[1]||n[1])&&t.push(this.toOption(n[0]));return t},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const v=f;t["a"]=v},7486:function(e,t,n){"use strict";n("ae47")},7920:function(e,t,n){"use strict";var a=n("7a23");function o(e,t,n,o,i,s){return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,8,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var i=n("9441"),s=Object(a["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:i["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),r=n("d959"),c=n.n(r);const l=c()(s,[["render",o]]);t["a"]=l},ae47:function(e,t,n){},c17f:function(e,t,n){},c21d:function(e,t,n){"use strict";function a(e,t){const n=[],a=[-1,"",null,void 0];for(const o in t){if(!(o in e))continue;const i=e[o];a.includes(i)?n.push(!1):n.push(t[o](i,e))}return n.every(Boolean)}function o(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function i(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function s(e,t,n="",s="",r="priority"){const c=[];for(const o in t){const i=t[o],r=[i.target&&n&&i.target!=n,i.targetEvent&&s&&i.targetEvent!=s];r.some(Boolean)||a(e,i.conditions)&&(i.title=o,i.description&&(i.description.text=i.description.info(e)),c.push(i))}return"priority"===r?o(c):i(c)}n.d(t,"a",(function(){return s}))},c4e4:function(e,t,n){"use strict";var a=n("7a23");const o=Object(a["withScopeId"])("data-v-9adaf5e2");Object(a["pushScopeId"])("data-v-9adaf5e2");const i=Object(a["createTextVNode"])("Lab orders"),s={class:"ion-margin-bottom"},r=Object(a["createVNode"])("div",{class:"his-md-text side-title"}," Select specimen ",-1),c=Object(a["createVNode"])("div",{class:"his-md-text side-title"}," Main test(s) reason ",-1),l={style:{background:"lightyellow",height:"34vh"}},d={class:"his-sm-text"},u=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",null,"Test"),Object(a["createVNode"])("th",null,"Specimen"),Object(a["createVNode"])("th",null,"Reason"),Object(a["createVNode"])("th",null,"Action")])],-1),p=Object(a["createTextVNode"])("X"),h=Object(a["createTextVNode"])(" Place orders "),b=Object(a["createTextVNode"])(" Close ");Object(a["popScopeId"])();const m=o((function(e,t,n,m,O,f){const v=Object(a["resolveComponent"])("ion-title"),g=Object(a["resolveComponent"])("ion-toolbar"),y=Object(a["resolveComponent"])("ion-header"),j=Object(a["resolveComponent"])("ion-label"),C=Object(a["resolveComponent"])("ion-checkbox"),T=Object(a["resolveComponent"])("ion-item"),I=Object(a["resolveComponent"])("ion-list"),S=Object(a["resolveComponent"])("ion-col"),N=Object(a["resolveComponent"])("ion-radio"),_=Object(a["resolveComponent"])("ion-radio-group"),w=Object(a["resolveComponent"])("ion-button"),D=Object(a["resolveComponent"])("ion-row"),E=Object(a["resolveComponent"])("ion-grid"),V=Object(a["resolveComponent"])("ion-content"),k=Object(a["resolveComponent"])("ion-footer");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(y,null,{default:o(()=>[Object(a["createVNode"])(g,null,{default:o(()=>[Object(a["createVNode"])(v,{class:"his-lg-text"},{default:o(()=>[i]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(V,{style:{overflow:"hidden",background:"grey",height:"70vh"}},{default:o(()=>[Object(a["createVNode"])(E,null,{default:o(()=>[Object(a["createVNode"])(D,null,{default:o(()=>[Object(a["createVNode"])(S,{size:"6"},{default:o(()=>[Object(a["createVNode"])(I,{style:{overflowY:"auto",height:"75vh"}},{default:o(()=>[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.testTypes,(t,n)=>(Object(a["openBlock"])(),Object(a["createBlock"])(T,{class:"his-sm-text",key:t,disabled:null!==e.activeIndex&&e.activeIndex!==n&&!e.isOrderComplete,detail:""},{default:o(()=>[Object(a["createVNode"])(j,{"text-wrap":""},{default:o(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.name),1)]),_:2},1024),Object(a["createVNode"])(C,{modelValue:t.isChecked,"onUpdate:modelValue":e=>t.isChecked=e,slot:"start",onIonChange:a=>e.onSelectTest(t.name,n,a)},null,8,["modelValue","onUpdate:modelValue","onIonChange"])]),_:2},1032,["disabled"]))),128))]),_:1})]),_:1}),null!=e.activeIndex&&e.selectedOrders.length>0?(Object(a["openBlock"])(),Object(a["createBlock"])(S,{key:0,style:{overflowY:"auto",height:"79vh"}},{default:o(()=>[Object(a["createVNode"])("div",s,[e.extendedLabsEnabled?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])(I,{key:0},{default:o(()=>[Object(a["createVNode"])(_,{modelValue:e.testTypes[e.activeIndex]["specimen"],"onUpdate:modelValue":t[1]||(t[1]=t=>e.testTypes[e.activeIndex]["specimen"]=t)},{default:o(()=>[r,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.specimens,t=>(Object(a["openBlock"])(),Object(a["createBlock"])(T,{key:t},{default:o(()=>[Object(a["createVNode"])(j,null,{default:o(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.name),1)]),_:2},1024),Object(a["createVNode"])(N,{slot:"start",value:t.name,onClick:n=>e.addSpecimen(t)},null,8,["value","onClick"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1})),Object(a["createVNode"])(_,{modelValue:e.testTypes[e.activeIndex]["reason"],"onUpdate:modelValue":t[2]||(t[2]=t=>e.testTypes[e.activeIndex]["reason"]=t)},{default:o(()=>[c,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.reasons,e=>(Object(a["openBlock"])(),Object(a["createBlock"])(T,{class:"his-sm-text",key:e},{default:o(()=>[Object(a["createVNode"])(j,null,{default:o(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e),1)]),_:2},1024),Object(a["createVNode"])(N,{slot:"start",value:e},null,8,["value"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),Object(a["createVNode"])("div",l,[Object(a["createVNode"])("table",d,[u,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.finalOrders,(t,n)=>(Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:n},[Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.name),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.specimen||"N/A"),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.reason),1),Object(a["createVNode"])("td",null,[Object(a["createVNode"])(w,{onClick:n=>e.removeOrder(t.currentIndex),slot:"end",color:"danger"},{default:o(()=>[p]),_:1},8,["onClick"])])]))),128))])])])]),_:1})):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(k,null,{default:o(()=>[Object(a["createVNode"])(g,null,{default:o(()=>[Object(a["createVNode"])(w,{onClick:e.postActivities,size:"large",slot:"end",disabled:0===e.finalOrders.length},{default:o(()=>[h]),_:1},8,["onClick","disabled"]),Object(a["createVNode"])(w,{onClick:t[3]||(t[3]=t=>e.closeModal([])),size:"large",slot:"start",color:"danger"},{default:o(()=>[b]),_:1})]),_:1})]),_:1})],64)}));var O=n("8a30"),f=n("b5e4"),v=n("9b7c"),g=n("cc6f");class y extends g["a"]{constructor(e,t){super(e,57,t)}}var j=n("b89f"),C=n("d1ca"),T=n("8e8b"),I=Object(a["defineComponent"])({name:"Modal",props:{activities:{type:Object,required:!0},testFilters:{type:Array},title:{type:String,default:""}},watch:{activities:{handler(e){e&&(this.appActivities=[...e],this.getActivities())},immediate:!0}},async created(){this.extendedLabsEnabled=await C["b"].extendedLabEnabled()},methods:{async onSelectTest(e,t,n){this.$nextTick(async()=>{this.testTypes[t]["isChecked"]=n.target.checked,this.testTypes[t]["isChecked"]?(this.specimens=await v["a"].getSpecimens(e),this.testTypes[t]["currentIndex"]=t,this.activeIndex=t):this.removeOrder(t)})},async getActivities(){const e=await v["a"].getTestTypes();this.testTypes=e.map((e,t)=>(e.index="HIV viral load"===e.name?e.index=0:e.index=t+1,e)).sort((e,t)=>e.index<t.index?0:1).filter(e=>!Array.isArray(this.testFilters)||this.testFilters.includes(e.name))},removeOrder(e){this.testTypes[e]["isChecked"]=!1,this.testTypes[e]["reason"]=null,this.testTypes[e]["specimen"]=null,this.testTypes[e]["specimenConcept"]=null,this.activeIndex=null,this.specimens=[]},addSpecimen(e){this.testTypes[this.activeIndex]["specimenConcept"]=e.concept_id},async postActivities(){const e=""+this.$route.params.patient_id,t=new y(parseInt(e),-1),n=await t.createEncounter();if(n){const e=await v["a"].buildLabOrders(n,this.finalOrders),t=await v["a"].saveOrdersArray(n.encounter_id,e);if(!t)return Object(f["e"])("Unable to save lab orders");T["a"].invalidate("PATIENT_LAB_ORDERS");const a=await Object(f["a"])("Lab orders and encounter created!, print out your last orders?",{confirmBtnLabel:"Yes",cancelBtnLabel:"No"});a?await this.printOrders(t):await this.closeModal(t)}},async closeModal(e){await O["Z"].dismiss(e)},async printOrders(e){const t=new j["a"];await e.forEach(async e=>{const n="lab/labels/order?order_id="+e.order_id;await t.printLbl(n)}),await O["Z"].dismiss(e)}},computed:{isOrderComplete(){return this.extendedLabsEnabled?!!this.testTypes[this.activeIndex]["reason"]:(this.testTypes[this.activeIndex]["specimenConcept"]||this.testTypes[this.activeIndex]["specimen"])&&this.testTypes[this.activeIndex]["reason"]},selectedOrders(){return this.testTypes.filter(e=>!0===e.isChecked)},finalOrders(){return this.selectedOrders.filter(e=>e.reason&&(e.specimen&&!this.extendedLabsEnabled||this.extendedLabsEnabled))}},mounted(){this.getActivities()},data(){return{content:"Content",extendedLabsEnabled:!1,appActivities:[],testTypes:[],specimens:[],reasons:["Routine","Targeted","Confirmatory","Stat","Repeat / Missing"],activeIndex:null}},components:{IonButton:O["d"],IonContent:O["n"],IonHeader:O["q"],IonTitle:O["R"],IonToolbar:O["S"],IonLabel:O["x"],IonList:O["y"],IonItem:O["w"],IonCheckbox:O["k"],IonRadioGroup:O["F"],IonRow:O["H"]}}),S=(n("6dc9"),n("d959")),N=n.n(S);const _=N()(I,[["render",m],["__scopeId","data-v-9adaf5e2"]]);t["a"]=_},fea9:function(e,t,n){"use strict";n.r(t);var a=n("7a23");function o(e,t,n,o,i,s){const r=Object(a["resolveComponent"])("his-standard-form"),c=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createBlock"])(c,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(r,{cancelDestinationPath:e.cancelDestination,fields:e.fields,onFinishAction:e.onSubmit,skipSummary:!0},null,8,["cancelDestinationPath","fields","onFinishAction"])]),_:1})}var i=n("9441"),s=n("7365"),r=n("331e"),c=n("c4e4");const l=Object(a["createTextVNode"])("Radiology Examination"),d=Object(a["createTextVNode"])(" Place orders "),u=Object(a["createTextVNode"])(" Close ");function p(e,t,n,o,i,s){const r=Object(a["resolveComponent"])("ion-title"),c=Object(a["resolveComponent"])("ion-toolbar"),p=Object(a["resolveComponent"])("ion-header"),h=Object(a["resolveComponent"])("his-radiology-picker"),b=Object(a["resolveComponent"])("ion-content"),m=Object(a["resolveComponent"])("ion-button"),O=Object(a["resolveComponent"])("ion-footer");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(p,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(c,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(r,{class:"his-lg-text"},{default:Object(a["withCtx"])(()=>[l]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(b,{style:{overflow:"hidden",background:"grey",height:"70vh"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,{onOnValue:e.onValue},null,8,["onOnValue"])]),_:1}),Object(a["createVNode"])(O,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(c,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{onClick:t[1]||(t[1]=t=>e.onSubmit()),size:"large",slot:"end",disabled:0===e.emitedSelectedOptions.length},{default:Object(a["withCtx"])(()=>[d]),_:1},8,["disabled"]),Object(a["createVNode"])(m,{onClick:t[2]||(t[2]=t=>e.closeModal()),size:"large",slot:"start",color:"danger"},{default:Object(a["withCtx"])(()=>[u]),_:1})]),_:1})]),_:1})],64)}var h=n("8a30"),b=n("97ed"),m=n("adc7"),O=n("66fd"),f=n("2ef0"),v=Object(a["defineComponent"])({name:"Modal",components:{IonButton:h["d"],IonContent:h["n"],IonHeader:h["q"],IonTitle:h["R"],IonToolbar:h["S"],IonFooter:h["o"],HisRadiologyPicker:m["default"]},mixins:[s["a"]],data:()=>({radiologyService:{},isPacsEnabled:!1,emitedSelectedOptions:{}}),watch:{ready:{async handler(e){e&&(this.radiologyService=new b["a"](this.patientID,this.providerID),this.isPacsEnabled=await O["b"].isPACsEnabled())},immediate:!0,deep:!0}},methods:{async onValue(e){this.emitedSelectedOptions=e},async getSelected(){return this.emitedSelectedOptions.map(async e=>({...await this.radiologyService.buildValueCoded("Radiology Orders",e.other.parent),child:[await this.radiologyService.buildValueCodedFromConceptId(e.other.parent,e.other.concept_id)]}))},async onSubmit(){if(!Object(f["isEmpty"])(this.emitedSelectedOptions)){this.closeModal();let t=await this.getSelected();t=await Promise.all(t),await this.radiologyService.createEncounter();const n=await this.radiologyService.obsObj(t),a=await this.radiologyService.saveObservationList(n);if(await this.radiologyService.printOrders(a,this.patient),this.isPacsEnabled)try{await this.radiologyService.submitToPacs(a,this.patient)}catch(e){console.log(e)}}},async closeModal(){await h["Z"].dismiss([])}}}),g=n("d959"),y=n.n(g);const j=y()(v,[["render",p]]);var C=j,T=n("2706"),I=n("d95e"),S=n("7957"),N=n("ec2a"),_=n("9283"),w=Object(a["defineComponent"])({components:{HisStandardForm:i["a"],IonPage:h["D"]},mixins:[s["a"]],data:()=>({complaintsService:{},todaysDate:S["a"].getSessionDate(),presentingComplaints:"",isPacsEnabled:!1,radiologyBtnName:"Radiology Order",hasTriageComplaints:!1}),watch:{ready:{async handler(e){e&&(this.complaintsService=new r["a"](this.patientID,this.providerID),this.isPacsEnabled=await O["b"].isPACsEnabled(),this.hasTriageComplaints=await this.getTriagePresentingComplaints(),this.fields=this.getFields())},immediate:!0,deep:!0}},methods:{async onSubmit(e,t){const n=await Promise.all(t.complaints);await this.complaintsService.createEncounter(),await this.complaintsService.saveObservationList(n),this.nextTask()},async launchOrderSelection(){const e=await h["Z"].create({component:c["a"],backdropDismiss:!1,cssClass:"large-modal"});e.present(),await e.onDidDismiss()},async launchRadiologyOrderSelection(){const e=await h["Z"].create({component:C,backdropDismiss:!1,cssClass:"large-modal"});e.present(),await e.onDidDismiss()},async getTriagePresentingComplaints(){const e=await this.complaintsService.fetchLatestTriageEncounter();if(!(e.length>0))return!1;const t=await N["a"].getEncounters(this.patientID,this.todaysDate),n=t.filter((function(e){return"TRIAGE PRESENTING COMPLAINTS"==e.type.name&&_["b"].toStandardHisFormat(e.encounter_datetime)==S["a"].getSessionDate()}));return n.length>0&&(this.presentingComplaints=n[0].observations,!0)},buildResults(){const e=["Group","Presenting complaints"];let t="",n=this.presentingComplaints.map(e=>{if(null!=e.obs_group_id)return[t,e.value_text];t=e.value_text});return n=n.filter(e=>void 0!=e),this.presentingComplaints=n,[{label:"",value:"",other:{columns:e,rows:n}}]},getFields(){return[{id:"triage_complaints",helpText:"Triaging Complaints",condition:()=>this.hasTriageComplaints,type:I["b"].TT_TABLE_VIEWER,options:e=>this.buildResults(),config:{hiddenFooterBtns:["Clear"]}},{id:"complaints",helpText:"Presenting Complaints",type:I["b"].TT_COMPLAINTS_PICKER,validation:e=>T["a"].required(e),computedValue:e=>e.map(async e=>({...await this.complaintsService.buildValueCoded("Presenting complaint",e.other.parent),child:[await this.complaintsService.buildValueCodedFromConceptId(e.other.parent,e.other.concept_id)]})),config:{hiddenFooterBtns:[this.showRadiologyOdersBtn(),this.disableBackBtn()],footerBtns:[{name:"Lab Order",size:"large",slot:"end",color:"primary",visible:!0,onClick:async()=>await this.launchOrderSelection(),visibleOnStateChange:e=>1===e.index},{name:this.radiologyBtnName,size:"large",slot:"end",color:"primary",visible:!0,onClick:async()=>await this.launchRadiologyOrderSelection(),visibleOnStateChange:e=>1===e.index}]}},{id:"all_presenting_complaints",helpText:"Summary",condition:()=>this.presentingComplaints.length>0,type:I["b"].TT_SUMMARY,options:(e,t)=>this.buildSummaryResults(e),config:{hiddenFooterBtns:["Clear"]}}]},showRadiologyOdersBtn(){return this.isPacsEnabled?"":this.radiologyBtnName},buildSummaryResults(e){const t=e.complaints.map(e=>({label:"OPD Complaints",value:e.label})),n=this.presentingComplaints.map(e=>({label:"Triaging Complaints",value:e[1]}));return t.concat(n)},disableBackBtn(){return this.hasTriageComplaints?"":"Back"}}});n("7486");const D=y()(w,[["render",o]]);t["default"]=D}}]);
//# sourceMappingURL=chunk-1abf667a.46504235.js.map