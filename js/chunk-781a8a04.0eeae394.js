(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-781a8a04"],{"313e":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const a=e=>(Object(o["pushScopeId"])("data-v-7217b18a"),e=e(),Object(o["popScopeId"])(),e),r=a(()=>Object(o["createElementVNode"])("label",{class:"his-title"}," Prescribe BP drugs ",-1)),i={key:0,class:"view-port-content"},s={id:"main-table",style:{width:"100%"}},c=a(()=>Object(o["createElementVNode"])("th",null," ",-1)),l=a(()=>Object(o["createElementVNode"])("td",{class:"td-remaining td-title"},[Object(o["createElementVNode"])("span",null,"New/Current")],-1)),d=a(()=>Object(o["createElementVNode"])("td",{class:"td-remaining td-title"},[Object(o["createElementVNode"])("span",null," ")],-1)),u=a(()=>Object(o["createElementVNode"])("p",null,null,-1)),p={id:"table-notes",style:{width:"100%"}},b=a(()=>Object(o["createElementVNode"])("caption",{style:{"font-size":"1.2em"}}," Notes ",-1)),m=a(()=>Object(o["createElementVNode"])("p",null,null,-1)),h={class:"table-inner-notes",id:"notes-HCZ"},O={class:"date-td today-td"},g={class:"date-td today-td"};function j(e,t,n,a,j,f){const C=Object(o["resolveComponent"])("ion-col"),D=Object(o["resolveComponent"])("ion-row"),N=Object(o["resolveComponent"])("ion-toolbar"),v=Object(o["resolveComponent"])("ion-header"),y=Object(o["resolveComponent"])("ion-checkbox"),I=Object(o["resolveComponent"])("ion-button"),_=Object(o["resolveComponent"])("view-port"),k=Object(o["resolveComponent"])("ion-content"),E=Object(o["resolveComponent"])("ion-footer"),w=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(w,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(N,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(D,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(C,null,{default:Object(o["withCtx"])(()=>[r]),_:1})]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(k,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(_,null,{default:Object(o["withCtx"])(()=>[e.drugs?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createElementVNode"])("table",s,[Object(o["createElementVNode"])("tr",null,[c,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.drugs,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("th",{key:t},[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t)+" ",1),Object(o["createVNode"])(D,null,{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.drugs,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(C,{class:"col-borders",key:t},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.amount||"0mg"),1)]),_:2},1024))),128))]),_:2},1024)]))),128))]),Object(o["createElementVNode"])("tr",null,[l,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.drugs,(t,n)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("td",{key:n,class:"td-current td-value"},[Object(o["createVNode"])(D,null,{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(t.drugs,(t,a)=>(Object(o["openBlock"])(),Object(o["createBlock"])(C,{key:a},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(y,{checked:t.selected,onIonChange:t=>e.selectDrug(n,a,t)},null,8,["checked","onIonChange"])]),_:2},1024))),128))]),_:2},1024)]))),128))]),Object(o["createElementVNode"])("tr",null,[d,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(Object.keys(e.drugs),(t,n)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("td",{class:"td-remaining td-value",key:n},[Object(o["createVNode"])(D,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(C,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(I,{onClick:n=>e.launchNotePad(t),color:"warning"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Add notes ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]))),128))])]),u,Object(o["createElementVNode"])("table",p,[b,m,Object(o["createElementVNode"])("tr",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.drugs,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("th",{style:{width:"25%"},key:t},[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(t),1)]))),128))]),Object(o["createElementVNode"])("tr",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(Object.keys(e.drugs),(t,n)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("td",{id:"HCZ",style:{"padding-top":"2px !important"},valign:"top",key:n},[Object(o["createElementVNode"])("table",h,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.drugs[t].notes,(n,a)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:a},[Object(o["createElementVNode"])("td",O,Object(o["toDisplayString"])(n.date),1),Object(o["createElementVNode"])("td",g,Object(o["toDisplayString"])(n.description),1),Object(o["createElementVNode"])("td",null,[n.isNewNote?(Object(o["openBlock"])(),Object(o["createBlock"])(I,{key:0,color:"danger",onClick:n=>e.removeNote(t,a)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" X ")]),_:2},1032,["onClick"])):Object(o["createCommentVNode"])("",!0)])]))),128))])]))),128))])])])):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1}),Object(o["createVNode"])(E,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(N,{color:"dark"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(I,{size:"large",color:"danger",slot:"start",onClick:e.gotoPatientDashboard},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" cancel ")]),_:1},8,["onClick"]),e.canClearHtnSessionPrescription?(Object(o["openBlock"])(),Object(o["createBlock"])(I,{key:0,size:"large",color:"warning",slot:"end",onClick:e.clearPrescriptionInSession},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Clear Session Prescription ")]),_:1},8,["onClick"])):Object(o["createCommentVNode"])("",!0),e.selectedDrugs&&e.selectedDrugs.length>0?(Object(o["openBlock"])(),Object(o["createBlock"])(I,{key:1,size:"large",color:"success",slot:"end",onClick:e.onFinish},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Continue ")]),_:1},8,["onClick"])):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})}n("14d9"),n("13d5");var f=n("0a79"),C=n("d95e"),D=n("e6e9"),N=n("d867"),v=n("7365"),y=n("32b3"),I=n("ad60"),_=n("b5e4"),k=n("2ef0"),E=Object(o["defineComponent"])({mixins:[v["a"]],components:{ViewPort:f["a"],IonToolbar:N["IonToolbar"],IonHeader:N["IonHeader"],IonContent:N["IonContent"],IonRow:N["IonRow"],IonButton:N["IonButton"],IonCol:N["IonCol"],IonFooter:N["IonFooter"],IonPage:N["IonPage"],IonCheckbox:N["IonCheckbox"]},watch:{ready:{async handler(e){if(e){this.HTN=new y["a"](this.patientID,this.providerID),this.drugs=this.HTN.getDrugs();const{drugs:e,notes:t}=await this.HTN.getCurrentDrugs();this.setPreviousBpDrugs(e),this.setPreviousBpNotes(t),this.canClearHtnSessionPrescription=this.patientHasHtnSessionKey()}},immediate:!0}},data:()=>({HTN:{},drugs:null,canClearHtnSessionPrescription:!1}),methods:{clearPrescriptionInSession(){sessionStorage.removeItem(y["b"].Prescription),this.canClearHtnSessionPrescription=!1},patientHasHtnSessionKey(){try{const e=sessionStorage.getItem(y["b"].Prescription);if(e){const t=JSON.parse(e);return t[this.patientID]}}catch(e){console.warn(e)}return!1},removeNote(e,t,n){this.drugs[e].notes.splice(n,1)},launchNotePad(e){this.showModal({id:"note",helpText:"Add notes for "+e,type:C["b"].TT_TEXT},t=>{t&&this.drugs[e].notes.push({date:I["a"].getSessionDate(),description:t.value||"",drugID:this.drugs[e].drugs[0].drugID,isNewNote:!0})})},async onFinish(){const e=Object.values(this.drugs).filter(e=>!Object(k["isEmpty"])(e.notes)).map(e=>e.notes).reduce((e,t)=>e.concat(t),[]).filter(e=>e.isNewNote).map(e=>this.HTN.buildObs("Clinician notes",{value_text:e.description,value_drug:e.drugID}));if(!Object(k["isEmpty"])(e))try{await this.HTN.createEncounter(),await this.HTN.saveObservationList(await Promise.all(e))}catch(t){return Object(_["e"])("Unable to save notes "+t)}this.gotoTreatment()},gotoTreatment(){const e=this.selectedDrugs.map(e=>Object(k["find"])(y["a"].htnDrugReferences(),{drug_id:e.drugID})),t={};t[this.patientID]=e,sessionStorage.setItem(y["b"].Prescription,JSON.stringify(t)),this.$router.push("/art/encounters/prescriptions/"+this.patientID)},async showModal(e,t){const n=await N["modalController"].create({component:D["a"],backdropDismiss:!1,cssClass:"full-modal",componentProps:{dismissType:"modal",currentField:e,onFinish:t}});n.present()},setPreviousBpNotes(e){for(const t in e)this.drugs[t].notes=Object.keys(e[t]).map(n=>e[t][n].map(e=>({date:n,description:e,isNewNote:!1}))).reduce((e,t)=>e.concat(t),[])},setPreviousBpDrugs(e){e.forEach(e=>{for(const t in this.drugs)this.drugs[t].drugs.forEach((n,o)=>{e.drug_id===n.drugID&&(this.drugs[t].drugs[o].current=!0,this.drugs[t].drugs[o].selected=!0,this.drugs[t].selected=e.drug_id)})})},selectDrug(e,t,n){this.drugs[e].drugs.forEach((t,n)=>{this.drugs[e].drugs[n].selected=!1}),this.drugs[e].drugs[t].selected=n.detail.checked}},computed:{selectedDrugs(){return this.drugs?Object.values(this.drugs).map(e=>e.drugs).reduce((e,t)=>e.concat(t),[]).filter(e=>e.selected):[]}}}),w=(n("c2f2"),n("6b0d")),B=n.n(w);const T=B()(E,[["render",j],["__scopeId","data-v-7217b18a"]]);t["default"]=T},"32b3":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var o,a=n("cc6f"),r=n("7957");(function(e){e["Prescription"]="htnPrescription"})(o||(o={}));class i extends a["a"]{constructor(e,t){super(e,48,t)}static getBpGrade(e,t){return e<140&&t<90?"normal":e>=140&&e<160||t>=100&&t<110?"grade 1":e>=180&&t>110||e>=180?"grade 3":e>=160&&e<180||t>=110?"grade 2":"N/A"}static isBpNormotensive(e){const[t,n]=Object.values(e).sort((e,t)=>e.date<t.date?1:0).map(e=>this.getBpGrade(e.sbp,e.dbp));return"normal"===t&&"normal"===n}getSystolicBp(){return r["a"].getFirstValueNumber(this.patientID,"Systolic blood pressure")}getDiastolicBp(){return r["a"].getFirstValueNumber(this.patientID,"Diastolic blood pressure")}async onBpDrugs(){const e=await r["a"].getFirstValueCoded(this.patientID,"Treatment status");return!!e&&"Yes"===e}async getBPTrail(){return await a["a"].getJson(`/patients/${this.patientID}/bp_trail`)}async getCurrentDrugs(){return await a["a"].getJson(`/patients/${this.patientID}/current_bp_drugs`)}async getLastDrugs(){return await a["a"].getJson(`/patients/${this.patientID}/last_bp_drugs_dispensation`)}async getAdherence(e,t){return await a["a"].postJson(`/patients/${this.patientID}/remaining_bp_drugs`,{drug_id:e,pills:t})}async enrollPatient(e){return await a["a"].postJson(`/patients/${this.patientID}/update_or_create_htn_state`,e)}static htnDrugReferences(){return[{drug_id:275,drug_name:"HCZ (25mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:942,drug_name:"Enalapril (5mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:943,drug_name:"Enalapril (10mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:558,drug_name:"Amlodipine (5mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:559,drug_name:"Amlodipine (10mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:117,drug_name:"Atenolol (50mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:11,drug_name:"Atenolol(100mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"}]}getDrugs(){return{HCZ:{drugs:[{drugName:"HCZ (25mg tablet)",drugID:275,amount:"25mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null}],selected:null,notes:[]},Enalapril:{drugs:[{drugName:"Enalapril (5mg tablet)",drugID:942,amount:"5mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Enalapril (10mg tablet)",drugID:943,amount:"10mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]},Amlodipine:{drugs:[{drugName:"Amlodipine (5mg tablet)",drugID:558,amount:"5mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Amlodipine (10mg tablet)",drugID:559,amount:"10mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]},Atenolol:{drugs:[{drugName:"Atenolol (50mg tablet)",drugID:117,amount:"50mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Atenolol(100mg tablet)",drugID:11,amount:"100mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]}}}}},4582:function(e,t,n){},7365:function(e,t,n){"use strict";n("14d9"),n("13d5");var o,a=n("7a23"),r=n("ad60"),i=n("2ef0"),s=n("0fa1"),c=n("7f35"),l=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(o||(o={}));const d=e=>l["c"].toStandardHisDisplayFormat(e),u={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+d(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?o.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?o.CHANGE_PATIENT_OUTCOME:o.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${d(t)} is less than birth date of ${d(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?o.CHANGE_SESSION_DATE:o.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:a})=>{const r=await Object(c["c"])("Please select a provider for "+t,`BDE: ${d(n)} | Current: ${d(a)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===r.action?{value:-1,flowState:o.GO_TO_PATIENT_DASHBOARD}:{value:r.selection,flowState:o.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var p=n("c21d"),b=n("7920"),m=n("b5e4"),h=n("8e8b"),O=Object(a["defineComponent"])({components:{HisStandardForm:b["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.patientID=parseInt(e.params.patient_id),h["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const n={};if(n[o.SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(i["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),o.CONTINUE},n[o.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),o.EXIT),n[o.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),o.EXIT),n[o.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),o.EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(p["a"])(this.facts,u);for(const i in e){var t,n;const s=e[i];if(null!==s&&void 0!==s&&null!==(t=s.actions)&&void 0!==t&&t.alert){var a;const e=this.runflowState(await(null===s||void 0===s||null===(a=s.actions)||void 0===a?void 0:a.alert(this.facts)));if(e===o.EXIT)return}if(null!==s&&void 0!==s&&null!==(n=s.actions)&&void 0!==n&&n.selection){var r;const e=await(null===s||void 0===s||null===(r=s.actions)||void 0===r?void 0:r.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await h["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(m["c"])(""+e)}this.facts.sessionDate=r["a"].getSessionDate(),this.facts.apiDate=r["a"].getCachedApiDate(),this.facts.isBdeMode=r["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",r["a"].isBDE()&&(this.providers=await h["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),o=t.username.toUpperCase();return n<o?-1:n>o?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(i["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var o;const[t]=(null===(o=e.person)||void 0===o?void 0:o.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>({label:e,value:e}))},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},nextTask(){return Object(s["b"])(this.patientID,this.$router)},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const g=O;t["a"]=g},7920:function(e,t,n){"use strict";var o=n("7a23");function a(e,t,n,a,r,i){return Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var r=n("9441"),i=Object(o["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:r["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=n("6b0d"),c=n.n(s);const l=c()(i,[["render",a]]);t["a"]=l},c21d:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("14d9");function o(e,t){const n=[],o=[-1,"",null,void 0];for(const a in t){if(!(a in e))continue;const r=e[a];o.includes(r)?n.push(!1):n.push(t[a](r,e))}return n.every(Boolean)}function a(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function r(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function i(e,t,n="",i="",s="priority"){const c=[];for(const a in t){const r=t[a],s=[r.target&&n&&r.target!=n,r.targetEvent&&i&&r.targetEvent!=i];s.some(Boolean)||o(e,r.conditions)&&(r.title=a,r.description&&(r.description.text=r.description.info(e)),c.push(r))}return"priority"===s?a(c):r(c)}},c2f2:function(e,t,n){"use strict";n("4582")},e6e9:function(e,t,n){"use strict";var o=n("7a23");function a(e,t,n,a,r,i){const s=Object(o["resolveComponent"])("ion-title"),c=Object(o["resolveComponent"])("ion-toolbar"),l=Object(o["resolveComponent"])("ion-header"),d=Object(o["resolveComponent"])("ion-content"),u=Object(o["resolveComponent"])("ion-button"),p=Object(o["resolveComponent"])("ion-footer"),b=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{class:"his-lg-text ion-text-center"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.currentField.helpText),1)]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(),Object(o["createBlock"])(o["KeepAlive"],null,[(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.currentField.type),{key:e.currentField.id,currentFieldig:e.currentField.currentFieldig,options:e.currentField.options,preset:e.currentField.preset,clear:e.valueClearIndex,fdata:e.formData,config:e.currentField.config,cdata:e.computedFormData,activationState:e.state,onValue:e.currentField.onValue,defaultValue:e.currentField.defaultValue,onValueUpdate:e.currentField.onValueUpdate,onOnValue:e.onFieldValue},null,40,["currentFieldig","options","preset","clear","fdata","config","cdata","activationState","onValue","defaultValue","onValueUpdate","onOnValue"]))],1024))]),_:1}),Object(o["createVNode"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{color:"light"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,{disabled:e.disableBtn,onClick:e.onClose,slot:"start",color:"danger",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Close ")]),_:1},8,["disabled","onClick"]),Object(o["createVNode"])(u,{disabled:e.disableBtn,onClick:e.onClear,slot:"end",color:"warning",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Clear ")]),_:1},8,["disabled","onClick"]),Object(o["createVNode"])(u,{disabled:e.disableBtn,onClick:e.onDone,slot:"end",color:"success",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Done ")]),_:1},8,["disabled","onClick"])]),_:1})]),_:1})]),_:1})}var r=n("b5e4"),i=n("d95e"),s=n("d867");function c(){const e={};return i["a"].forEach(t=>{e[t]=Object(o["defineAsyncComponent"])(()=>n("f159")(`./${t}.vue`))}),e}var l=Object(o["defineComponent"])({name:"SingleFieldTouchForm",components:{IonPage:s["IonPage"],IonContent:s["IonContent"],IonFooter:s["IonFooter"],IonToolbar:s["IonToolbar"],IonButton:s["IonButton"],IonHeader:s["IonHeader"],IonTitle:s["IonTitle"],...c()},props:{dismissType:{type:String},onFinish:{type:Function,required:!0},currentField:{type:Object,required:!0}},data:()=>({valueClearIndex:0,formData:{},computedFormData:{},state:"",value:null,disableBtn:!1}),methods:{onClose(){"modal"===this.dismissType?s["modalController"].dismiss():this.$router.back()},onClear(){this.valueClearIndex+=1,this.value=null},onFieldValue(e){this.value=e},onDone(){if(this.disableBtn=!0,this.currentField.validation){const e=this.currentField.validation(this.value);if(this.disableBtn=!1,e)return Object(r["e"])(e.join(", "),6e4)}try{this.onFinish(this.value)}catch(e){Object(r["c"])(""+e),console.error(e)}this.onClose(),this.disableBtn=!1}}}),d=n("6b0d"),u=n.n(d);const p=u()(l,[["render",a]]);t["a"]=p}}]);
//# sourceMappingURL=chunk-781a8a04.0eeae394.js.map