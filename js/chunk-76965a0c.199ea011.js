(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76965a0c"],{"313e":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const r=e=>(Object(a["pushScopeId"])("data-v-7217b18a"),e=e(),Object(a["popScopeId"])(),e),o=r(()=>Object(a["createElementVNode"])("label",{class:"his-title"}," Prescribe BP drugs ",-1)),i={key:0,class:"view-port-content"},s={id:"main-table",style:{width:"100%"}},c=r(()=>Object(a["createElementVNode"])("th",null," ",-1)),l=r(()=>Object(a["createElementVNode"])("td",{class:"td-remaining td-title"},[Object(a["createElementVNode"])("span",null,"New/Current")],-1)),d=r(()=>Object(a["createElementVNode"])("td",{class:"td-remaining td-title"},[Object(a["createElementVNode"])("span",null," ")],-1)),u=r(()=>Object(a["createElementVNode"])("p",null,null,-1)),p={id:"table-notes",style:{width:"100%"}},h=r(()=>Object(a["createElementVNode"])("caption",{style:{"font-size":"1.2em"}}," Notes ",-1)),m=r(()=>Object(a["createElementVNode"])("p",null,null,-1)),b={class:"table-inner-notes",id:"notes-HCZ"},g={class:"date-td today-td"},O={class:"date-td today-td"};function f(e,t,n,r,f,j){const D=Object(a["resolveComponent"])("ion-col"),y=Object(a["resolveComponent"])("ion-row"),N=Object(a["resolveComponent"])("ion-toolbar"),v=Object(a["resolveComponent"])("ion-header"),E=Object(a["resolveComponent"])("ion-checkbox"),C=Object(a["resolveComponent"])("ion-button"),_=Object(a["resolveComponent"])("view-port"),I=Object(a["resolveComponent"])("ion-content"),k=Object(a["resolveComponent"])("ion-footer"),w=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createBlock"])(w,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(v,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(N,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(y,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(D,null,{default:Object(a["withCtx"])(()=>[o]),_:1})]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(I,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(_,null,{default:Object(a["withCtx"])(()=>[e.drugs?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",i,[Object(a["createElementVNode"])("table",s,[Object(a["createElementVNode"])("tr",null,[c,(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.drugs,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("th",{key:t},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t)+" ",1),Object(a["createVNode"])(y,null,{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.drugs,(e,t)=>(Object(a["openBlock"])(),Object(a["createBlock"])(D,{class:"col-borders",key:t},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.amount||"0mg"),1)]),_:2},1024))),128))]),_:2},1024)]))),128))]),Object(a["createElementVNode"])("tr",null,[l,(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.drugs,(t,n)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("td",{key:n,class:"td-current td-value"},[Object(a["createVNode"])(y,null,{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(t.drugs,(t,r)=>(Object(a["openBlock"])(),Object(a["createBlock"])(D,{key:r},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(E,{checked:t.selected,onIonChange:t=>e.selectDrug(n,r,t)},null,8,["checked","onIonChange"])]),_:2},1024))),128))]),_:2},1024)]))),128))]),Object(a["createElementVNode"])("tr",null,[d,(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(Object.keys(e.drugs),(t,n)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("td",{class:"td-remaining td-value",key:n},[Object(a["createVNode"])(y,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(D,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(C,{onClick:n=>e.launchNotePad(t),color:"warning"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" Add notes ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]))),128))])]),u,Object(a["createElementVNode"])("table",p,[h,m,Object(a["createElementVNode"])("tr",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.drugs,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("th",{style:{width:"25%"},key:t},[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(t),1)]))),128))]),Object(a["createElementVNode"])("tr",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(Object.keys(e.drugs),(t,n)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("td",{id:"HCZ",style:{"padding-top":"2px !important"},valign:"top",key:n},[Object(a["createElementVNode"])("table",b,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.drugs[t].notes,(n,r)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",{key:r},[Object(a["createElementVNode"])("td",g,Object(a["toDisplayString"])(n.date),1),Object(a["createElementVNode"])("td",O,Object(a["toDisplayString"])(n.description),1),Object(a["createElementVNode"])("td",null,[n.isNewNote?(Object(a["openBlock"])(),Object(a["createBlock"])(C,{key:0,color:"danger",onClick:n=>e.removeNote(t,r)},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" X ")]),_:2},1032,["onClick"])):Object(a["createCommentVNode"])("",!0)])]))),128))])]))),128))])])])):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1}),Object(a["createVNode"])(k,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(N,{color:"dark"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(C,{size:"large",color:"danger",slot:"start",onClick:e.gotoPatientDashboard},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" cancel ")]),_:1},8,["onClick"]),e.canClearHtnSessionPrescription?(Object(a["openBlock"])(),Object(a["createBlock"])(C,{key:0,size:"large",color:"warning",slot:"end",onClick:e.clearPrescriptionInSession},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" Clear Session Prescription ")]),_:1},8,["onClick"])):Object(a["createCommentVNode"])("",!0),e.selectedDrugs&&e.selectedDrugs.length>0?(Object(a["openBlock"])(),Object(a["createBlock"])(C,{key:1,size:"large",color:"success",slot:"end",onClick:e.onFinish},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" Continue ")]),_:1},8,["onClick"])):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})}n("14d9"),n("13d5");var j=n("0a79"),D=n("d95e"),y=n("e6e9"),N=n("d867"),v=n("7365"),E=n("32b3"),C=n("ad60"),_=n("b5e4"),I=n("2ef0"),k=Object(a["defineComponent"])({mixins:[v["a"]],components:{ViewPort:j["a"],IonToolbar:N["T"],IonHeader:N["q"],IonContent:N["n"],IonRow:N["I"],IonButton:N["d"],IonCol:N["m"],IonFooter:N["o"],IonPage:N["D"],IonCheckbox:N["k"]},watch:{ready:{async handler(e){if(e){this.HTN=new E["a"](this.patientID,this.providerID),this.drugs=this.HTN.getDrugs();const{drugs:e,notes:t}=await this.HTN.getCurrentDrugs();this.setPreviousBpDrugs(e),this.setPreviousBpNotes(t),this.canClearHtnSessionPrescription=this.patientHasHtnSessionKey()}},immediate:!0}},data:()=>({HTN:{},drugs:null,canClearHtnSessionPrescription:!1}),methods:{clearPrescriptionInSession(){sessionStorage.removeItem(E["b"].Prescription),this.canClearHtnSessionPrescription=!1},patientHasHtnSessionKey(){try{const e=sessionStorage.getItem(E["b"].Prescription);if(e){const t=JSON.parse(e);return t[this.patientID]}}catch(e){console.warn(e)}return!1},removeNote(e,t,n){this.drugs[e].notes.splice(n,1)},launchNotePad(e){this.showModal({id:"note",helpText:"Add notes for "+e,type:D["b"].TT_TEXT},t=>{t&&this.drugs[e].notes.push({date:C["a"].getSessionDate(),description:t.value||"",drugID:this.drugs[e].drugs[0].drugID,isNewNote:!0})})},async onFinish(){const e=Object.values(this.drugs).filter(e=>!Object(I["isEmpty"])(e.notes)).map(e=>e.notes).reduce((e,t)=>e.concat(t),[]).filter(e=>e.isNewNote).map(e=>this.HTN.buildObs("Clinician notes",{value_text:e.description,value_drug:e.drugID}));if(!Object(I["isEmpty"])(e))try{await this.HTN.createEncounter(),await this.HTN.saveObservationList(await Promise.all(e))}catch(t){return Object(_["e"])("Unable to save notes "+t)}this.gotoTreatment()},gotoTreatment(){const e=this.selectedDrugs.map(e=>Object(I["find"])(E["a"].htnDrugReferences(),{drug_id:e.drugID})),t={};t[this.patientID]=e,sessionStorage.setItem(E["b"].Prescription,JSON.stringify(t)),this.$router.push("/art/encounters/prescriptions/"+this.patientID)},async showModal(e,t){const n=await N["ab"].create({component:y["a"],backdropDismiss:!1,cssClass:"full-modal",componentProps:{dismissType:"modal",currentField:e,onFinish:t}});n.present()},setPreviousBpNotes(e){for(const t in e)this.drugs[t].notes=Object.keys(e[t]).map(n=>e[t][n].map(e=>({date:n,description:e,isNewNote:!1}))).reduce((e,t)=>e.concat(t),[])},setPreviousBpDrugs(e){e.forEach(e=>{for(const t in this.drugs)this.drugs[t].drugs.forEach((n,a)=>{e.drug_id===n.drugID&&(this.drugs[t].drugs[a].current=!0,this.drugs[t].drugs[a].selected=!0,this.drugs[t].selected=e.drug_id)})})},selectDrug(e,t,n){this.drugs[e].drugs.forEach((t,n)=>{this.drugs[e].drugs[n].selected=!1}),this.drugs[e].drugs[t].selected=n.detail.checked}},computed:{selectedDrugs(){return this.drugs?Object.values(this.drugs).map(e=>e.drugs).reduce((e,t)=>e.concat(t),[]).filter(e=>e.selected):[]}}}),w=(n("c2f2"),n("6b0d")),T=n.n(w);const S=T()(k,[["render",f],["__scopeId","data-v-7217b18a"]]);t["default"]=S},"32b3":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var a,r=n("cc6f"),o=n("7957");(function(e){e["Prescription"]="htnPrescription"})(a||(a={}));class i extends r["a"]{constructor(e,t){super(e,48,t)}static getBpGrade(e,t){return e<140&&t<90?"normal":e>=140&&e<160||t>=100&&t<110?"grade 1":e>=180&&t>110||e>=180?"grade 3":e>=160&&e<180||t>=110?"grade 2":"N/A"}static isBpNormotensive(e){const[t,n]=Object.values(e).sort((e,t)=>e.date<t.date?1:0).map(e=>this.getBpGrade(e.sbp,e.dbp));return"normal"===t&&"normal"===n}getSystolicBp(){return o["a"].getFirstValueNumber(this.patientID,"Systolic blood pressure")}getDiastolicBp(){return o["a"].getFirstValueNumber(this.patientID,"Diastolic blood pressure")}async onBpDrugs(){const e=await o["a"].getFirstValueCoded(this.patientID,"Treatment status");return!!e&&"Yes"===e}async getBPTrail(){return await r["a"].getJson(`/patients/${this.patientID}/bp_trail`)}async getCurrentDrugs(){return await r["a"].getJson(`/patients/${this.patientID}/current_bp_drugs`)}async getLastDrugs(){return await r["a"].getJson(`/patients/${this.patientID}/last_bp_drugs_dispensation`)}async getAdherence(e,t){return await r["a"].postJson(`/patients/${this.patientID}/remaining_bp_drugs`,{drug_id:e,pills:t})}async enrollPatient(e){return await r["a"].postJson(`/patients/${this.patientID}/update_or_create_htn_state`,e)}static htnDrugReferences(){return[{drug_id:275,drug_name:"HCZ (25mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:942,drug_name:"Enalapril (5mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:943,drug_name:"Enalapril (10mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:558,drug_name:"Amlodipine (5mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:559,drug_name:"Amlodipine (10mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:117,drug_name:"Atenolol (50mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:11,drug_name:"Atenolol(100mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"}]}getDrugs(){return{HCZ:{drugs:[{drugName:"HCZ (25mg tablet)",drugID:275,amount:"25mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null}],selected:null,notes:[]},Enalapril:{drugs:[{drugName:"Enalapril (5mg tablet)",drugID:942,amount:"5mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Enalapril (10mg tablet)",drugID:943,amount:"10mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]},Amlodipine:{drugs:[{drugName:"Amlodipine (5mg tablet)",drugID:558,amount:"5mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Amlodipine (10mg tablet)",drugID:559,amount:"10mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]},Atenolol:{drugs:[{drugName:"Atenolol (50mg tablet)",drugID:117,amount:"50mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Atenolol(100mg tablet)",drugID:11,amount:"100mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]}}}}},4582:function(e,t,n){},7365:function(e,t,n){"use strict";n("14d9"),n("13d5");var a,r=n("7a23"),o=n("ad60"),i=n("2ef0"),s=n("0fa1"),c=n("7f35"),l=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(a||(a={}));const d=e=>l["b"].toStandardHisDisplayFormat(e),u={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(c["a"])("Data Integrity Issue Found","Patient died on "+d(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?a.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?a.CHANGE_PATIENT_OUTCOME:a.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(c["a"])("Data integrity issue found","",`Session date ${d(t)} is less than birth date of ${d(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?a.CHANGE_SESSION_DATE:a.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:r})=>{const o=await Object(c["c"])("Please select a provider for "+t,`BDE: ${d(n)} | Current: ${d(r)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===o.action?{value:-1,flowState:a.GO_TO_PATIENT_DASHBOARD}:{value:o.selection,flowState:a.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var p=n("c21d"),h=n("7920"),m=n("b5e4"),b=n("8e8b"),g=n("b432"),O=n("5a0c"),f=n.n(O),j=n("cc6f"),D=n("2ed9"),y=Object(r["defineComponent"])({components:{HisStandardForm:h["a"]},data:()=>({offlineID:null,patient:{},fields:[],patientID:"",providerID:-1,providers:[],encounterStartTime:null,facts:{age:-1,gender:"",birthDate:"",sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,outcome:"",outcomeStartDate:"",village:"",district:"",currentTA:""},formLabel:"",ready:!1}),created(){this.$route.params.patient_id&&(this.offlineID=this.$route.params.patient_id,this.patientID=parseInt(""+this.$route.params.patient_id),this.goOffline()?this.initOfflineData():b["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,Object(i["isEmpty"])(this.patient)||Object(g["a"])().cachePatient(this.patient),this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0,this.setStartTime()}).catch(e=>console.log(e))}).catch(()=>{this.goOffline()&&this.initOfflineData()})}))},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{setStartTime(){this.encounterStartTime=(new Date).getTime()},goOffline(){return!g["c"].value||g["b"].value},isOnline(){return g["c"].value},isOfflineMode(){return g["b"].value},initOfflineData(){var e;const t=Object(g["a"])().findByID(this.offlineID),n=null===t||void 0===t||null===(e=t.personParams)||void 0===e?void 0:e.person;n&&(this.facts.birthDate=n.birthdate,this.facts.age=f()(o["a"].getSessionDate()).diff(this.facts.birthDate,"years"),this.facts.district=n.current_district,this.facts.village=n.current_village,this.facts.currentTA=n.current_traditional_authority,this.facts.gender=n.gender,this.ready=!0,this.setStartTime())},async saveFormEncounterAndProceed(e={}){let t="Pending",n=!1,a=null;const r=(new Date).getTime(),o=(r-this.encounterStartTime)/1e3,i=o/60;try{const t=await j["a"].buildValueText("Device",Object(D["f"])()),n=await j["a"].buildValueNumber("Review Time",i);a=[...await this.resolveObs(e.computedData),t,n]}catch(s){return console.error(""+s),Object(m["e"])("Unable to resolve observations")}if(!this.isOfflineMode()){try{const r=new j["a"](this.patientID,e.encounterTypeID,this.providerID);await r.createEncounter()&&await r.saveObservationList(a)&&(t="Success"),"function"===typeof e.callback&&await e.callback(r),n=!0}catch(s){n=!1,/NetworkError|Failed to fetch/i.test(""+s)?t="NetworkError":(t="Exception",console.error("Exception while saving an encounter: "+s))}if("Exception"===t)return Object(m["c"])("An error has occured!")}Object(g["a"])().saveObsOffline({observations:a,id:this.offlineID,uploadStatus:t,encounterName:this.$route.name,encounterTypeID:e.encounterTypeID,meta:e.formData,labOrders:e.labOrders,created:n},n),e.skipNextTask||this.nextTask()},runflowState(e,t=null){const n={};if(n[a.SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(i["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),a.CONTINUE},n[a.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),a.EXIT),n[a.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),a.EXIT),n[a.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),a.EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(p["a"])(this.facts,u);for(const i in e){var t,n;const s=e[i];if(null!==s&&void 0!==s&&null!==(t=s.actions)&&void 0!==t&&t.alert){var r;const e=this.runflowState(await(null===s||void 0===s||null===(r=s.actions)||void 0===r?void 0:r.alert(this.facts)));if(e===a.EXIT)return}if(null!==s&&void 0!==s&&null!==(n=s.actions)&&void 0!==n&&n.selection){var o;const e=await(null===s||void 0===s||null===(o=s.actions)||void 0===o?void 0:o.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await b["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=e.programID===o["a"].getProgramID(),this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(m["c"])(""+e)}this.facts.currentTA=this.patient.getCurrentTA(),this.facts.district=this.patient.getCurrentDistrict(),this.facts.village=this.patient.getCurrentVillage(),this.facts.sessionDate=o["a"].getSessionDate(),this.facts.apiDate=o["a"].getCachedApiDate(),this.facts.isBdeMode=o["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.age=this.patient.getAge(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",o["a"].isBDE()&&(this.providers=await b["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),a=t.username.toUpperCase();return n<a?-1:n>a?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(i["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var a;const[t]=(null===(a=e.person)||void 0===a?void 0:a.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>"string"===typeof e||"number"===typeof e?{label:e,value:e}:e)},patientDashboardUrl(){return"/patient/dashboard/"+this.$route.params.patient_id},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){try{const e=this.offlineID||this.patientID;await Object(s["b"])(e,this.$router,this.$route)}catch(e){console.error("Workflow error "+e),this.gotoPatientDashboard()}},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},toConditionalOptions(e){const t=[];for(const n of e)("boolean"!==typeof n[1]||n[1])&&t.push(this.toOption(n[0]));return t},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const N=y;t["a"]=N},7920:function(e,t,n){"use strict";var a=n("7a23");function r(e,t,n,r,o,i){return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var o=n("9441"),i=Object(a["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:o["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=n("6b0d"),c=n.n(s);const l=c()(i,[["render",r]]);t["a"]=l},c21d:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("14d9");function a(e,t){const n=[],a=[-1,"",null,void 0];for(const r in t){if(!(r in e))continue;const o=e[r];a.includes(o)?n.push(!1):n.push(t[r](o,e))}return n.every(Boolean)}function r(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function o(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function i(e,t,n="",i="",s="priority"){const c=[];for(const r in t){const o=t[r],s=[o.target&&n&&o.target!=n,o.targetEvent&&i&&o.targetEvent!=i];s.some(Boolean)||a(e,o.conditions)&&(o.title=r,o.description&&(o.description.text=o.description.info(e)),c.push(o))}return"priority"===s?r(c):o(c)}},c2f2:function(e,t,n){"use strict";n("4582")}}]);
//# sourceMappingURL=chunk-76965a0c.199ea011.js.map