(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81c5cc30"],{"32b3":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var o,i=n("cc6f"),r=n("7957");(function(e){e["Prescription"]="htnPrescription"})(o||(o={}));class a extends i["a"]{constructor(e,t){super(e,48,t)}static getBpGrade(e,t){return e<140&&t<90?"normal":e>=140&&e<160||t>=100&&t<110?"grade 1":e>=180&&t>110||e>=180?"grade 3":e>=160&&e<180||t>=110?"grade 2":"N/A"}static isBpNormotensive(e){const[t,n]=Object.values(e).sort((e,t)=>e.date<t.date?1:0).map(e=>this.getBpGrade(e.sbp,e.dbp));return"normal"===t&&"normal"===n}getSystolicBp(){return r["a"].getFirstValueNumber(this.patientID,"Systolic blood pressure")}getDiastolicBp(){return r["a"].getFirstValueNumber(this.patientID,"Diastolic blood pressure")}async onBpDrugs(){const e=await r["a"].getFirstValueCoded(this.patientID,"Treatment status");return!!e&&"Yes"===e}async getBPTrail(){return await i["a"].getJson(`/patients/${this.patientID}/bp_trail`)}async getCurrentDrugs(){return await i["a"].getJson(`/patients/${this.patientID}/current_bp_drugs`)}async getLastDrugs(){return await i["a"].getJson(`/patients/${this.patientID}/last_bp_drugs_dispensation`)}async getAdherence(e,t){return await i["a"].postJson(`/patients/${this.patientID}/remaining_bp_drugs`,{drug_id:e,pills:t})}async enrollPatient(e){return await i["a"].postJson(`/patients/${this.patientID}/update_or_create_htn_state`,e)}static htnDrugReferences(){return[{drug_id:275,drug_name:"HCZ (25mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:942,drug_name:"Enalapril (5mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:943,drug_name:"Enalapril (10mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:558,drug_name:"Amlodipine (5mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:559,drug_name:"Amlodipine (10mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:117,drug_name:"Atenolol (50mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:11,drug_name:"Atenolol(100mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"}]}getDrugs(){return{HCZ:{drugs:[{drugName:"HCZ (25mg tablet)",drugID:275,amount:"25mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null}],selected:null,notes:[]},Enalapril:{drugs:[{drugName:"Enalapril (5mg tablet)",drugID:942,amount:"5mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Enalapril (10mg tablet)",drugID:943,amount:"10mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]},Amlodipine:{drugs:[{drugName:"Amlodipine (5mg tablet)",drugID:558,amount:"5mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Amlodipine (10mg tablet)",drugID:559,amount:"10mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]},Atenolol:{drugs:[{drugName:"Atenolol (50mg tablet)",drugID:117,amount:"50mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Atenolol(100mg tablet)",drugID:11,amount:"100mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]}}}}},7365:function(e,t,n){"use strict";n("14d9"),n("13d5");var o=n("7a23"),i=n("ad60"),r=n("2ef0"),a=n("0fa1"),s=n("b3b1"),c=n("c21d"),u=n("7920"),l=n("b5e4"),T=n("8e8b"),d=Object(o["defineComponent"])({components:{HisStandardForm:u["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.patientID=parseInt(e.params.patient_id),T["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const n={};if(n[s["b"].SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(r["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),s["b"].CONTINUE},n[s["b"].CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),s["b"].EXIT),n[s["b"].CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),s["b"].EXIT),n[s["b"].GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),s["b"].EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(c["a"])(this.facts,s["a"]);for(const r in e){var t,n;const a=e[r];if(null!==a&&void 0!==a&&null!==(t=a.actions)&&void 0!==t&&t.alert){var o;const e=this.runflowState(await(null===a||void 0===a||null===(o=a.actions)||void 0===o?void 0:o.alert(this.facts)));if(e===s["b"].EXIT)return}if(null!==a&&void 0!==a&&null!==(n=a.actions)&&void 0!==n&&n.selection){var i;const e=await(null===a||void 0===a||null===(i=a.actions)||void 0===i?void 0:i.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await T["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(l["c"])(""+e)}this.facts.sessionDate=i["a"].getSessionDate(),this.facts.apiDate=i["a"].getCachedApiDate(),this.facts.isBdeMode=i["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",i["a"].isBDE()&&(this.providers=await T["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),o=t.username.toUpperCase();return n<o?-1:n>o?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(r["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var o;const[t]=(null===(o=e.person)||void 0===o?void 0:o.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>({label:e,value:e}))},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},nextTask(){return Object(a["b"])(this.patientID,this.$router)},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const m=d;t["a"]=m},"77fd":function(e,t,n){"use strict";var o=n("7a23");function i(e,t,n,i,r,a){const s=Object(o["resolveComponent"])("ion-title"),c=Object(o["resolveComponent"])("ion-toolbar"),u=Object(o["resolveComponent"])("ion-header"),l=Object(o["resolveComponent"])("ion-label"),T=Object(o["resolveComponent"])("ion-checkbox"),d=Object(o["resolveComponent"])("ion-item"),m=Object(o["resolveComponent"])("ion-list"),_=Object(o["resolveComponent"])("ion-col"),E=Object(o["resolveComponent"])("ion-row"),h=Object(o["resolveComponent"])("ion-grid"),p=Object(o["resolveComponent"])("ion-content"),I=Object(o["resolveComponent"])("ion-button"),b=Object(o["resolveComponent"])("ion-footer");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Risk Factors")]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(p,{style:{overflowY:"hidden",background:"grey"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(E,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(_,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,{style:{overflowY:"auto",height:"78vh"}},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.riskFactors,e=>(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:e},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.name),1)]),_:2},1024),Object(o["createVNode"])(T,{modelValue:e.isChecked,"onUpdate:modelValue":t=>e.isChecked=t,slot:"start"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(I,{size:"large",onClick:e.exit,slot:"start",color:"danger"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Close ")]),_:1},8,["onClick"]),e.showManageBPButton?(Object(o["openBlock"])(),Object(o["createBlock"])(I,{key:0,size:"large",onClick:e.manageBP,slot:"start"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Manage BP ")]),_:1},8,["onClick"])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(I,{size:"large",color:"success",onClick:e.postActivities,slot:"end"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Save ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}n("14d9");var r=n("d867"),a=n("cc6f");class s extends a["a"]{constructor(e,t){super(e,30,t)}}var c=n("8158"),u=Object(o["defineComponent"])({name:"Modal",props:{factors:{type:Object,required:!0},title:{type:String,default:""}},computed:{showManageBPButton(){return"bp_management"!=this.$route.name}},created(){this.patientID=parseInt(""+this.$route.params.patient_id)},methods:{async postActivities(){const e=new s(this.patientID,-1),t=await e.createEncounter();if(t){const t=await this.buildObs();await e.saveObservationList(t),await this.closeModal()}},manageBP(){this.$router.push("/art/encounters/bp_management/"+this.patientID)},exit(){r["X"].dismiss([])},async closeModal(){await r["X"].dismiss(this.riskFactors)},async buildObs(){return this.riskFactors.map(e=>{const t=!0===e.isChecked?"Yes":"No",n=c["a"].getConceptID(t,!0),o=c["a"].getConceptID(e.concept,!0);return{concept_id:o,value_coded:n}})}},data(){return{patientID:-1,riskFactors:[{name:"Diabetes",isChecked:!1,concept:"Diabetes"},{name:"Cronic kidney disease",isChecked:!1,concept:"CKD"},{name:"Past history of IHD or CVD",isChecked:!1,concept:"history of CVD"},{name:"First degree relative with IHD or CVD <65",isChecked:!1,concept:"relative with CVD"},{name:"Patient currently smokes",isChecked:!1,concept:"patient smokes"}]}},mounted(){this.factors.forEach(e=>{if("Yes"===e.value){const t=this.riskFactors.findIndex(t=>t.concept===e.concept);this.riskFactors[t].isChecked=!0}})},components:{IonButton:r["d"],IonContent:r["n"],IonHeader:r["q"],IonTitle:r["R"],IonToolbar:r["S"],IonLabel:r["x"],IonList:r["y"],IonItem:r["w"],IonCheckbox:r["k"],IonRow:r["H"],IonFooter:r["o"],IonGrid:r["p"],IonCol:r["m"]}}),l=(n("a6c9"),n("6b0d")),T=n.n(l);const d=T()(u,[["render",i],["__scopeId","data-v-4bf3490a"]]);t["a"]=d},7920:function(e,t,n){"use strict";var o=n("7a23");function i(e,t,n,i,r,a){return Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var r=n("9441"),a=Object(o["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:r["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=n("6b0d"),c=n.n(s);const u=c()(a,[["render",i]]);t["a"]=u},"9dc2":function(e,t,n){},a6c9:function(e,t,n){"use strict";n("9dc2")},b3b1:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var o,i=n("7f35"),r=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(o||(o={}));const a=e=>r["b"].toStandardHisDisplayFormat(e),s={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(i["a"])("Data Integrity Issue Found","Patient died on "+a(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?o.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?o.CHANGE_PATIENT_OUTCOME:o.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(i["a"])("Data integrity issue found","",`Session date ${a(t)} is less than birth date of ${a(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?o.CHANGE_SESSION_DATE:o.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:r})=>{const s=await Object(i["c"])("Please select a provider for "+t,`BDE: ${a(n)} | Current: ${a(r)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===s.action?{value:-1,flowState:o.GO_TO_PATIENT_DASHBOARD}:{value:s.selection,flowState:o.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}}},c21d:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("14d9");function o(e,t){const n=[],o=[-1,"",null,void 0];for(const i in t){if(!(i in e))continue;const r=e[i];o.includes(r)?n.push(!1):n.push(t[i](r,e))}return n.every(Boolean)}function i(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function r(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function a(e,t,n="",a="",s="priority"){const c=[];for(const i in t){const r=t[i],s=[r.target&&n&&r.target!=n,r.targetEvent&&a&&r.targetEvent!=a];s.some(Boolean)||o(e,r.conditions)&&(r.title=i,r.description&&(r.description.text=r.description.info(e)),c.push(r))}return"priority"===s?i(c):r(c)}},d95e:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),function(e){e["TT_ASYNC_MULTI_SELECT"]="AsyncMultiSelect",e["TT_LINKAGE_CODE"]="LinkageCodeInput",e["TT_MULTI_SELECT_GRID"]="HisMultiSelectGrid",e["TT_AGE_INPUT"]="HisAgeInput",e["TT_GROUP_SELECTOR"]="HisGroupSelector",e["TT_DATA_TABLE"]="HisDataTable",e["TT_GRID_SELECTOR"]="HisGridSelector",e["TT_NOTE"]="HisNote",e["TT_BARCODE"]="HisBarcodeInput",e["TT_MONTHLY_DAYS"]="HisMonthlyDays",e["TT_TEXT"]="HisTextInput",e["TT_NUMBER"]="HisNumberInput",e["TT_DATETIME"]="datetime",e["TT_SELECT"]="HisSelect",e["TT_MULTIPLE_SELECT"]="HisMultipleSelect",e["TT_ART_REGIMEN_SELECTION"]="HisArtRegimenSelection",e["TT_NEXT_VISIT_INTERVAL_SELECTION"]="HisNextVisitInterval",e["TT_TABLE_VIEWER"]="HisTableViewer",e["TT_DOSAGE_INPUT"]="HisDosageInput",e["TT_YES_NO"]="YesNoSelect",e["TT_MULTIPLE_YES_NO"]="MultiYesNoSelect",e["TT_SUMMARY"]="HisSummary",e["TT_WEIGHT_CHART"]="HisWeightChart",e["TT_VITALS_ENTRY"]="HisVitalsEntry",e["TT_ADHERENCE_INPUT"]="HisAdherenceInput",e["TT_ART_STAGING_SUMMARY"]="ArtStagingSummary",e["TT_LAB_ORDERS"]="HisLabOrders",e["TT_APPOINTMENTS_ENTRY"]="HisAppointments",e["TT_DISPENSATION_INPUT"]="DrugDispensationSelection",e["TT_PROGRAM_SELECTION"]="ProgramSelection",e["TT_DATE_PICKER"]="HisDatePicker",e["TT_PERSON_RESULT_VIEW"]="PersonSearchView",e["TT_RELATION_SELECTION"]="RelationsSelection",e["TT_FILING_NUMBER_VIEW"]="FilingNumberView",e["TT_CARD_SELECTOR"]="HisCardSelector",e["TT_PERSON_MATCH_VIEW"]="PersonMatchView",e["TT_FULL_DATE"]="HisDateInput",e["TT_BATCH_ENTRY"]="HisBatchEntry",e["TT_BATCH_VERIFICATION"]="HisBatchVerification",e["TT_BATCH_MOVEMENT"]="HisBatchMovement",e["TT_COMPLAINTS_PICKER"]="HisComplaintsPicker",e["TT_RADIOLOGY_PICKER"]="HisRadiologyPicker",e["TT_IP_ADDRESS"]="HisIPAddress",e["TT_TEXT_BANNER"]="HisTextBanner",e["TT_DRUG_DISPENSER"]="GeneralDrugDispenser",e["TT_CLINIC_HOLIDAY_PICKER"]="HisClinicHolidayPicker",e["TT_ANC_PREGNANCY_INPUT_CONFIG"]="AncPregnancyInfoConfig",e["TT_ANC_PREGNANCY_DETAILS_INPUT"]="AncPregnancyDetailsInput",e["TT_ANC_DRUGSET_INPUT"]="AncDrugSetInput",e["TT_DRUG_TRANSFER_IN"]="DrugTransferInput",e["TT_PRESCRIPTION_INPUT"]="HisPrescriptionInput",e["TT_INFINITE_SCROLL_MULTIPLE_SELECT"]="HisInfiniteScrollMultipleSelect"}(o||(o={}));const i=[o.TT_ASYNC_MULTI_SELECT,o.TT_LINKAGE_CODE,o.TT_MULTI_SELECT_GRID,o.TT_AGE_INPUT,o.TT_BARCODE,o.TT_NOTE,o.TT_SELECT,o.TT_CARD_SELECTOR,o.TT_MULTIPLE_SELECT,o.TT_TEXT,o.TT_NUMBER,o.TT_MONTHLY_DAYS,o.TT_ART_REGIMEN_SELECTION,o.TT_NEXT_VISIT_INTERVAL_SELECTION,o.TT_TABLE_VIEWER,o.TT_DOSAGE_INPUT,o.TT_YES_NO,o.TT_MULTIPLE_YES_NO,o.TT_WEIGHT_CHART,o.TT_VITALS_ENTRY,o.TT_APPOINTMENTS_ENTRY,o.TT_COMPLAINTS_PICKER,o.TT_CLINIC_HOLIDAY_PICKER,o.TT_SUMMARY,o.TT_ART_STAGING_SUMMARY,o.TT_ADHERENCE_INPUT,o.TT_LAB_ORDERS,o.TT_PERSON_RESULT_VIEW,o.TT_PROGRAM_SELECTION,o.TT_DATE_PICKER,o.TT_RELATION_SELECTION,o.TT_FILING_NUMBER_VIEW,o.TT_PERSON_MATCH_VIEW,o.TT_FULL_DATE,o.TT_BATCH_ENTRY,o.TT_BATCH_VERIFICATION,o.TT_BATCH_MOVEMENT,o.TT_IP_ADDRESS,o.TT_TEXT_BANNER,o.TT_DISPENSATION_INPUT,o.TT_DATA_TABLE,o.TT_GROUP_SELECTOR,o.TT_ANC_PREGNANCY_INPUT_CONFIG,o.TT_ANC_PREGNANCY_DETAILS_INPUT,o.TT_DRUG_TRANSFER_IN,o.TT_GRID_SELECTOR,o.TT_ANC_DRUGSET_INPUT,o.TT_RADIOLOGY_PICKER,o.TT_PRESCRIPTION_INPUT,o.TT_INFINITE_SCROLL_MULTIPLE_SELECT,o.TT_DRUG_DISPENSER]},f159:function(e,t,n){var o={"./AncDrugSetInput.vue":["c99f","TouchFormElement0"],"./AncPregnancyDetailsInput.vue":["b043","TouchFormElement1"],"./AncPregnancyInfoConfig.vue":["262e","TouchFormElement2"],"./ArtStagingSummary.vue":["43db","TouchFormElement3"],"./AsyncMultiSelect.vue":["5de2","chunk-03993608","TouchFormElement4"],"./BaseTextInput.vue":["36ad","TouchFormElement5"],"./DrugDispensationSelection.vue":["05d5","TouchFormElement6"],"./DrugTransferInput.vue":["de42","chunk-337918c0","TouchFormElement7"],"./FieldMixin.vue":["51c8","TouchFormElement8"],"./FilingNumberView.vue":["c650","TouchFormElement9"],"./GeneralDrugDispenser.vue":["7737","TouchFormElement10"],"./HisAdherenceInput.vue":["f2c3","chunk-337918c0","TouchFormElement11"],"./HisAgeInput.vue":["c05f","TouchFormElement12"],"./HisAppointments.vue":["b2eb","TouchFormElement13~TouchFormElement20~TouchFormElement24","TouchFormElement13"],"./HisArtRegimenSelection.vue":["47b9","TouchFormElement14"],"./HisBarcodeInput.vue":["dd65","TouchFormElement15"],"./HisBatchEntry.vue":["f2ab","chunk-182277b5","chunk-337918c0","TouchFormElement16"],"./HisBatchMovement.vue":["5148","chunk-182277b5","chunk-337918c0","TouchFormElement17"],"./HisBatchVerification.vue":["7b0f","chunk-182277b5","chunk-337918c0","TouchFormElement18"],"./HisCardSelector.vue":["0734","TouchFormElement19"],"./HisClinicHolidayPicker.vue":["4030","TouchFormElement13~TouchFormElement20~TouchFormElement24","TouchFormElement20"],"./HisComplaintsPicker.vue":["82d1","TouchFormElement21"],"./HisDataTable.vue":["a6ba","TouchFormElement22"],"./HisDateInput.vue":["374c","TouchFormElement23"],"./HisDatePicker.vue":["9b30","TouchFormElement13~TouchFormElement20~TouchFormElement24","TouchFormElement24"],"./HisDosageInput.vue":["b34c","chunk-337918c0","TouchFormElement25"],"./HisGridSelector.vue":["112a","TouchFormElement26"],"./HisGroupSelector.vue":["81cf","TouchFormElement27"],"./HisIPAddress.vue":["2a82","TouchFormElement28"],"./HisInfiniteScrollMultipleSelect.vue":["52a3","TouchFormElement29"],"./HisLabOrders.vue":["e614","chunk-03993608","TouchFormElement30"],"./HisMonthlyDays.vue":["69cf","TouchFormElement31"],"./HisMultiSelectGrid.vue":["0fa3","TouchFormElement32"],"./HisMultipleSelect.vue":["2fd5","chunk-03993608","TouchFormElement33"],"./HisNextVisitInterval.vue":["3126","TouchFormElement34"],"./HisNote.vue":["c927","TouchFormElement35"],"./HisNumberInput.vue":["5e75","TouchFormElement36"],"./HisPrescriptionInput.vue":["87e5","chunk-337918c0","TouchFormElement37"],"./HisRadiologyPicker.vue":["adc7","TouchFormElement38"],"./HisSelect.vue":["d11f","TouchFormElement39"],"./HisSummary.vue":["e0bd","TouchFormElement40"],"./HisTableViewer.vue":["8904","TouchFormElement41"],"./HisTextBanner.vue":["952c","TouchFormElement42"],"./HisTextInput.vue":["6ef9","TouchFormElement43"],"./HisVitalsEntry.vue":["e333","TouchFormElement44"],"./HisWeightChart.vue":["26a1","TouchFormElement45"],"./LinkageCodeInput.vue":["ac86","TouchFormElement46"],"./MultiYesNoSelect.vue":["5fd1","TouchFormElement47"],"./PersonMatchView.vue":["6591","TouchFormElement48"],"./PersonSearchView.vue":["28b2","TouchFormElement49"],"./ProgramSelection.vue":["e3b4","TouchFormElement50"],"./RelationsSelection.vue":["0e57","TouchFormElement51"],"./SelectMixin.vue":["82a9","TouchFormElement52"],"./YesNoSelect.vue":["71f2","TouchFormElement53"]};function i(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(o)},i.id="f159",e.exports=i}}]);
//# sourceMappingURL=chunk-81c5cc30.ff1e3477.js.map