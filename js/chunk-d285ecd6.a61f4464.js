(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d285ecd6","TouchFormElement6","TouchFormElement9"],{"083a":function(e,t,n){"use strict";var r=n("0d51"),o=TypeError;e.exports=function(e,t){if(!delete e[t])throw o("Cannot delete property "+r(t)+" of "+r(e))}},2345:function(e,t,n){"use strict";function r(e,t,n){let r=t;if(e.match(/enter/i))return r+"\r\n";if(e.match(/clear/i))return"";if(r=e.match(/delete|del/i)?r.match(/unknown/i)||r.match(/n\/a/i)?"":r.substring(0,r.length-1):e.match(/space/i)?t+" ":e.match(/unknown/i)?"Unknown":e.match(/n\/a/i)?"N/A":r.match(/unknown/i)||r.match(/n\/a/i)?e:`${t}${e}`,"string"===typeof r&&r)switch(n){case"lowercase":r=r.toLowerCase();break;case"uppercase":r=r.toUpperCase();break;default:r=r.charAt(0).toUpperCase()+r.slice(1);break}return r}n.d(t,"a",(function(){return r}))},"36ad":function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t,n,o,i,a){const s=Object(r["resolveComponent"])("ion-input");return Object(r["openBlock"])(),Object(r["createBlock"])(s,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t),type:e.type,disabled:e.disabled,readonly:e.readOnly,autocapitalize:"sentences",placeholder:e.placeholder},null,8,["modelValue","type","disabled","readonly","placeholder"])}var i=n("d867"),a=n("2ed9"),s=Object(r["defineComponent"])({name:"HisInput",components:{IonInput:i["IonInput"]},setup(){const{activePlatformProfile:e}=Object(a["e"])(),t=Object(r["computed"])(()=>"HIS_KEYBOARD_ONLY"===e.value.keyboard);return{readOnly:t}},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1},placeholder:{type:String,default:()=>""}}}),c=(n("86f4"),n("6b0d")),u=n.n(c);const T=u()(s,[["render",o],["__scopeId","data-v-04472bbc"]]);t["default"]=T},3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"l",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"o",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"n",(function(){return u})),n.d(t,"k",(function(){return T})),n.d(t,"j",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"a",(function(){return _})),n.d(t,"m",(function(){return E})),n.d(t,"c",(function(){return m})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return h}));const r=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],o=[["1","2","3"],["4","5","6"],["7","8","9"],["Del","0","."],["Unknown","",""]],i=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0",""]],a=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],s=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],c=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],u=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],T=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],l=[["1","2","3"],["4","5","6"],["7","8","9"],["←","0","→"]],d=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],_=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],E=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],m=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],p=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],h=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"3c65":function(e,t,n){"use strict";var r=n("23e7"),o=n("7b0b"),i=n("07fa"),a=n("3a34"),s=n("083a"),c=n("3511"),u=1!==[].unshift(0),T=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},l=u||!T();r({target:"Array",proto:!0,arity:1,forced:l},{unshift:function(e){var t=o(this),n=i(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var T=u+r;u in t?t[T]=t[u]:s(t,T)}for(var l=0;l<r;l++)t[l]=arguments[l]}return a(t,n+r)}})},4910:function(e,t,n){},"51c8":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=Object(r["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const i=o;t["default"]=i},"6be2":function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return T})),n.d(t,"h",(function(){return d})),n.d(t,"a",(function(){return _}));var r=n("3800");const o=[r["n"],[["","Delete"]]],i=[r["k"],[["Delete"]]],a=[r["k"],[["Delete","Unknown"]]],s=[r["k"],[["N/A"],["Delete","Unknown"]]],c=[r["k"],[["Delete"]]],u=[r["k"],[["Unknown","Delete"],["Qwerty","A-Z"]]],T=[r["h"],[["Unknown"]]],l=[r["a"],[["0-9","Delete"],["Qwerty","Unknown"],["","Space"]]],d=[r["m"],[["","Delete"],["?123","0-9"],["Space","Unknown"]]],_=[{btn:"0-9",keyboard:u},{btn:"?123",keyboard:o},{btn:"A-Z",keyboard:l},{btn:"Qwerty",keyboard:d}]},"71c3":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("1c74");class o extends r["e"]{constructor(){super()}static create(e){return this.postJson("drug_orders",e)}static updateDispensationOrders(e){return this.postJson("dispensations",{program_id:this.getProgramID(),dispensations:e.map(e=>({date:this.getSessionDate(),drug_order_id:e["order_id"],quantity:e["quantity"]}))})}static getDrugOrderHistory(e){return this.getJson("drug_orders",{patient_id:e})}static getDrugOrders(e){return this.getJson("drug_orders",{patient_id:e,date:this.getSessionDate(),program_id:this.getProgramID()})}static getAllDrugOrders(e,t=1e3){return this.getJson("drug_orders",{patient_id:e,program_id:r["e"].getProgramID(),page_size:t})}static getLastDrugsReceived(e){return this.getJson(`patients/${e}/last_drugs_received`,{date:this.getSessionDate(),program_id:this.getProgramID()})}static getDrugDosages(e,t,n=this.getSessionDate()){const r={drug_id:t,date:n};return this.getJson(`programs/${this.getProgramID()}/patients/${e}/drug_doses`,r)}static getOrderByPatient(e,t){return this.getJson("/drug_orders",{patient_id:e,program_id:this.getProgramID(),...t})}}},7365:function(e,t,n){"use strict";n("14d9"),n("13d5");var r=n("7a23"),o=n("ad60"),i=n("2ef0"),a=n("0fa1"),s=n("b3b1"),c=n("c21d"),u=n("7920"),T=n("b5e4"),l=n("8e8b"),d=Object(r["defineComponent"])({components:{HisStandardForm:u["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.patientID=parseInt(e.params.patient_id),l["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const n={};if(n[s["b"].SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(i["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),s["b"].CONTINUE},n[s["b"].CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),s["b"].EXIT),n[s["b"].CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),s["b"].EXIT),n[s["b"].GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),s["b"].EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(c["a"])(this.facts,s["a"]);for(const i in e){var t,n;const a=e[i];if(null!==a&&void 0!==a&&null!==(t=a.actions)&&void 0!==t&&t.alert){var r;const e=this.runflowState(await(null===a||void 0===a||null===(r=a.actions)||void 0===r?void 0:r.alert(this.facts)));if(e===s["b"].EXIT)return}if(null!==a&&void 0!==a&&null!==(n=a.actions)&&void 0!==n&&n.selection){var o;const e=await(null===a||void 0===a||null===(o=a.actions)||void 0===o?void 0:o.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await l["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(T["c"])(""+e)}this.facts.sessionDate=o["a"].getSessionDate(),this.facts.apiDate=o["a"].getCachedApiDate(),this.facts.isBdeMode=o["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",o["a"].isBDE()&&(this.providers=await l["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),r=t.username.toUpperCase();return n<r?-1:n>r?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(i["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var r;const[t]=(null===(r=e.person)||void 0===r?void 0:r.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>({label:e,value:e}))},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},nextTask(){return Object(a["b"])(this.patientID,this.$router)},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const _=d;t["a"]=_},"76f1":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("1c74");class o extends r["e"]{constructor(){super()}static getDrugs(e={}){return super.getJson("/drugs",e)}static getOPDDrugs(e={}){return super.getJson("OPD_drugslist",e)}}},7920:function(e,t,n){"use strict";var r=n("7a23");function o(e,t,n,o,i,a){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var i=n("9441"),a=Object(r["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:i["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=n("6b0d"),c=n.n(s);const u=c()(a,[["render",o]]);t["a"]=u},"86f4":function(e,t,n){"use strict";n("4910")},b3b1:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var r,o=n("7f35"),i=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(r||(r={}));const a=e=>i["c"].toStandardHisDisplayFormat(e),s={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(o["a"])("Data Integrity Issue Found","Patient died on "+a(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?r.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?r.CHANGE_PATIENT_OUTCOME:r.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(o["a"])("Data integrity issue found","",`Session date ${a(t)} is less than birth date of ${a(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?r.CHANGE_SESSION_DATE:r.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:i})=>{const s=await Object(o["c"])("Please select a provider for "+t,`BDE: ${a(n)} | Current: ${a(i)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===s.action?{value:-1,flowState:r.GO_TO_PATIENT_DASHBOARD}:{value:s.selection,flowState:r.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}}},c21d:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("14d9");function r(e,t){const n=[],r=[-1,"",null,void 0];for(const o in t){if(!(o in e))continue;const i=e[o];r.includes(i)?n.push(!1):n.push(t[o](i,e))}return n.every(Boolean)}function o(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function i(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function a(e,t,n="",a="",s="priority"){const c=[];for(const o in t){const i=t[o],s=[i.target&&n&&i.target!=n,i.targetEvent&&a&&i.targetEvent!=a];s.some(Boolean)||r(e,i.conditions)&&(i.title=o,i.description&&(i.description.text=i.description.info(e)),c.push(i))}return"priority"===s?o(c):i(c)}},c924:function(e,t,n){"use strict";var r=n("7a23");function o(e,t,n,o,i,a){const s=Object(r["resolveComponent"])("ion-button");return Object(r["openBlock"])(),Object(r["createElementBlock"])("table",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.layout,(t,n)=>(Object(r["openBlock"])(),Object(r["createElementBlock"])("tr",{key:n},[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(t,(n,o)=>(Object(r["openBlock"])(),Object(r["createElementBlock"])("td",{class:"his-keyboard-margin",key:"btn-"+o},[n?(Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:0,style:Object(r["normalizeStyle"])({width:e.btnSize}),class:Object(r["normalizeClass"])(`his-keyboard-btn btn-${n}-${e.dynamicClass(t)}`),onClick:()=>e.keyPress(n)},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(n),1)]),_:2},1032,["style","class","onClick"])):Object(r["createCommentVNode"])("",!0)]))),128))]))),128))])}var i=n("d867"),a=Object(r["defineComponent"])({components:{IonButton:i["IonButton"]},props:{btnSize:{type:String,default:"90%"},layout:{type:Array,required:!0,default:()=>[]},onKeyPress:{type:Function,required:!0}},methods:{keyPress(e){this.onKeyPress(e)},dynamicClass(e){return 3==e.length&&"Unknown"==e[0]?"Keypad":e[0]}}}),s=n("6b0d"),c=n.n(s);const u=c()(a,[["render",o]]);t["a"]=u},d95e:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),function(e){e["TT_ASYNC_MULTI_SELECT"]="AsyncMultiSelect",e["TT_LINKAGE_CODE"]="LinkageCodeInput",e["TT_MULTI_SELECT_GRID"]="HisMultiSelectGrid",e["TT_AGE_INPUT"]="HisAgeInput",e["TT_GROUP_SELECTOR"]="HisGroupSelector",e["TT_DATA_TABLE"]="HisDataTable",e["TT_GRID_SELECTOR"]="HisGridSelector",e["TT_NOTE"]="HisNote",e["TT_BARCODE"]="HisBarcodeInput",e["TT_MONTHLY_DAYS"]="HisMonthlyDays",e["TT_TEXT"]="HisTextInput",e["TT_NUMBER"]="HisNumberInput",e["TT_DATETIME"]="datetime",e["TT_SELECT"]="HisSelect",e["TT_MULTIPLE_SELECT"]="HisMultipleSelect",e["TT_ART_REGIMEN_SELECTION"]="HisArtRegimenSelection",e["TT_NEXT_VISIT_INTERVAL_SELECTION"]="HisNextVisitInterval",e["TT_TABLE_VIEWER"]="HisTableViewer",e["TT_DOSAGE_INPUT"]="HisDosageInput",e["TT_YES_NO"]="YesNoSelect",e["TT_MULTIPLE_YES_NO"]="MultiYesNoSelect",e["TT_SUMMARY"]="HisSummary",e["TT_WEIGHT_CHART"]="HisWeightChart",e["TT_VITALS_ENTRY"]="HisVitalsEntry",e["TT_ADHERENCE_INPUT"]="HisAdherenceInput",e["TT_ART_STAGING_SUMMARY"]="ArtStagingSummary",e["TT_LAB_ORDERS"]="HisLabOrders",e["TT_APPOINTMENTS_ENTRY"]="HisAppointments",e["TT_DISPENSATION_INPUT"]="DrugDispensationSelection",e["TT_PROGRAM_SELECTION"]="ProgramSelection",e["TT_DATE_PICKER"]="HisDatePicker",e["TT_PERSON_RESULT_VIEW"]="PersonSearchView",e["TT_RELATION_SELECTION"]="RelationsSelection",e["TT_FILING_NUMBER_VIEW"]="FilingNumberView",e["TT_CARD_SELECTOR"]="HisCardSelector",e["TT_PERSON_MATCH_VIEW"]="PersonMatchView",e["TT_FULL_DATE"]="HisDateInput",e["TT_BATCH_ENTRY"]="HisBatchEntry",e["TT_BATCH_VERIFICATION"]="HisBatchVerification",e["TT_BATCH_MOVEMENT"]="HisBatchMovement",e["TT_COMPLAINTS_PICKER"]="HisComplaintsPicker",e["TT_RADIOLOGY_PICKER"]="HisRadiologyPicker",e["TT_IP_ADDRESS"]="HisIPAddress",e["TT_TEXT_BANNER"]="HisTextBanner",e["TT_DRUG_DISPENSER"]="GeneralDrugDispenser",e["TT_CLINIC_HOLIDAY_PICKER"]="HisClinicHolidayPicker",e["TT_ANC_PREGNANCY_INPUT_CONFIG"]="AncPregnancyInfoConfig",e["TT_ANC_PREGNANCY_DETAILS_INPUT"]="AncPregnancyDetailsInput",e["TT_ANC_LMP_DATE_INPUT"]="AncLmpDateInput",e["TT_ANC_DRUGSET_INPUT"]="AncDrugSetInput",e["TT_DRUG_TRANSFER_IN"]="DrugTransferInput",e["TT_PRESCRIPTION_INPUT"]="HisPrescriptionInput",e["TT_INFINITE_SCROLL_MULTIPLE_SELECT"]="HisInfiniteScrollMultipleSelect"}(r||(r={}));const o=[r.TT_ASYNC_MULTI_SELECT,r.TT_LINKAGE_CODE,r.TT_MULTI_SELECT_GRID,r.TT_AGE_INPUT,r.TT_BARCODE,r.TT_NOTE,r.TT_SELECT,r.TT_CARD_SELECTOR,r.TT_MULTIPLE_SELECT,r.TT_TEXT,r.TT_NUMBER,r.TT_MONTHLY_DAYS,r.TT_ART_REGIMEN_SELECTION,r.TT_NEXT_VISIT_INTERVAL_SELECTION,r.TT_TABLE_VIEWER,r.TT_DOSAGE_INPUT,r.TT_YES_NO,r.TT_MULTIPLE_YES_NO,r.TT_WEIGHT_CHART,r.TT_VITALS_ENTRY,r.TT_APPOINTMENTS_ENTRY,r.TT_COMPLAINTS_PICKER,r.TT_CLINIC_HOLIDAY_PICKER,r.TT_SUMMARY,r.TT_ART_STAGING_SUMMARY,r.TT_ADHERENCE_INPUT,r.TT_LAB_ORDERS,r.TT_PERSON_RESULT_VIEW,r.TT_PROGRAM_SELECTION,r.TT_DATE_PICKER,r.TT_RELATION_SELECTION,r.TT_FILING_NUMBER_VIEW,r.TT_PERSON_MATCH_VIEW,r.TT_FULL_DATE,r.TT_BATCH_ENTRY,r.TT_BATCH_VERIFICATION,r.TT_BATCH_MOVEMENT,r.TT_IP_ADDRESS,r.TT_TEXT_BANNER,r.TT_DISPENSATION_INPUT,r.TT_DATA_TABLE,r.TT_GROUP_SELECTOR,r.TT_ANC_PREGNANCY_INPUT_CONFIG,r.TT_ANC_PREGNANCY_DETAILS_INPUT,r.TT_ANC_LMP_DATE_INPUT,r.TT_DRUG_TRANSFER_IN,r.TT_GRID_SELECTOR,r.TT_ANC_DRUGSET_INPUT,r.TT_RADIOLOGY_PICKER,r.TT_PRESCRIPTION_INPUT,r.TT_INFINITE_SCROLL_MULTIPLE_SELECT,r.TT_DRUG_DISPENSER]},db10:function(e,t,n){"use strict";var r=n("7a23");const o={class:"his-floating-keyboard"},i={class:"his-floating-keyboard-content"};function a(e,t,n,a,s,c){const u=Object(r["resolveComponent"])("base-keyboard");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createElementVNode"])("div",i,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.activeLayout,(t,n)=>(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:n},[Object(r["createVNode"])(u,{layout:t,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])]))),128))])])}var s=n("6be2"),c=n("c924"),u=Object(r["defineComponent"])({components:{BaseKeyboard:c["a"]},props:{initalKeyboardName:{type:String},kbConfig:{type:Array,required:!0},onKeyPress:{type:Function,required:!0}},data:()=>({activeLayout:{}}),watch:{initalKeyboardName:{handler(e){e&&this.$nextTick(()=>this.switchKeyboard(e))},immediate:!0},kbConfig:{handler(e){e&&(this.activeLayout=e)},deep:!0,immediate:!0}},methods:{keypress(e){this.isFunctionKey(e)||this.onKeyPress(e)},isFunctionKey(e){return!!this.switchKeyboard(e)},switchKeyboard(e){const t=s["a"].map(e=>e.btn).indexOf(e);return t>=0&&(this.activeLayout=s["a"][t].keyboard,!0)}}}),T=n("6b0d"),l=n.n(T);const d=l()(u,[["render",a]]);t["a"]=d},f159:function(e,t,n){var r={"./AncDrugSetInput.vue":["c99f","TouchFormElement0"],"./AncLmpDateInput.vue":["101a","TouchFormElement1"],"./AncPregnancyDetailsInput.vue":["b043","TouchFormElement2"],"./AncPregnancyInfoConfig.vue":["262e","TouchFormElement3"],"./ArtStagingSummary.vue":["43db","TouchFormElement4"],"./AsyncMultiSelect.vue":["5de2","chunk-03993608","TouchFormElement5"],"./BaseTextInput.vue":["36ad","TouchFormElement6"],"./DrugDispensationSelection.vue":["05d5","TouchFormElement7"],"./DrugTransferInput.vue":["de42","chunk-337918c0","TouchFormElement8"],"./FieldMixin.vue":["51c8","TouchFormElement9"],"./FilingNumberView.vue":["c650","TouchFormElement10"],"./GeneralDrugDispenser.vue":["7737","TouchFormElement11"],"./HisAdherenceInput.vue":["f2c3","chunk-337918c0","TouchFormElement12"],"./HisAgeInput.vue":["c05f","TouchFormElement13"],"./HisAppointments.vue":["b2eb","chunk-366b6f0a","TouchFormElement14"],"./HisArtRegimenSelection.vue":["47b9","TouchFormElement15"],"./HisBarcodeInput.vue":["dd65","TouchFormElement16"],"./HisBatchEntry.vue":["f2ab","chunk-182277b5","chunk-337918c0","TouchFormElement17"],"./HisBatchMovement.vue":["5148","chunk-182277b5","chunk-337918c0","TouchFormElement18"],"./HisBatchVerification.vue":["7b0f","chunk-182277b5","chunk-337918c0","TouchFormElement19"],"./HisCardSelector.vue":["0734","TouchFormElement20"],"./HisClinicHolidayPicker.vue":["4030","chunk-366b6f0a","TouchFormElement21"],"./HisComplaintsPicker.vue":["82d1","TouchFormElement22"],"./HisDataTable.vue":["a6ba","TouchFormElement23"],"./HisDateInput.vue":["374c","TouchFormElement24"],"./HisDatePicker.vue":["9b30","chunk-366b6f0a","TouchFormElement25"],"./HisDosageInput.vue":["b34c","chunk-337918c0","TouchFormElement26"],"./HisGridSelector.vue":["112a","TouchFormElement27"],"./HisGroupSelector.vue":["81cf","TouchFormElement28"],"./HisIPAddress.vue":["2a82","TouchFormElement29"],"./HisInfiniteScrollMultipleSelect.vue":["52a3","TouchFormElement30"],"./HisLabOrders.vue":["e614","chunk-03993608","TouchFormElement31"],"./HisMonthlyDays.vue":["69cf","TouchFormElement32"],"./HisMultiSelectGrid.vue":["0fa3","TouchFormElement33"],"./HisMultipleSelect.vue":["2fd5","chunk-03993608","TouchFormElement34"],"./HisNextVisitInterval.vue":["3126","TouchFormElement35"],"./HisNote.vue":["c927","TouchFormElement36"],"./HisNumberInput.vue":["5e75","TouchFormElement37"],"./HisPrescriptionInput.vue":["87e5","chunk-337918c0","TouchFormElement38"],"./HisRadiologyPicker.vue":["adc7","TouchFormElement39"],"./HisSelect.vue":["d11f","TouchFormElement40"],"./HisSummary.vue":["e0bd","TouchFormElement41"],"./HisTableViewer.vue":["8904","TouchFormElement42"],"./HisTextBanner.vue":["952c","TouchFormElement43"],"./HisTextInput.vue":["6ef9","TouchFormElement44"],"./HisVitalsEntry.vue":["e333","TouchFormElement45"],"./HisWeightChart.vue":["26a1","TouchFormElement46"],"./LinkageCodeInput.vue":["ac86","TouchFormElement47"],"./MultiYesNoSelect.vue":["5fd1","TouchFormElement48"],"./PersonMatchView.vue":["6591","TouchFormElement49"],"./PersonSearchView.vue":["28b2","TouchFormElement50"],"./ProgramSelection.vue":["e3b4","TouchFormElement51"],"./RelationsSelection.vue":["0e57","TouchFormElement52"],"./SelectMixin.vue":["82a9","TouchFormElement53"],"./YesNoSelect.vue":["71f2","TouchFormElement54"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="f159",e.exports=o}}]);
//# sourceMappingURL=chunk-d285ecd6.a61f4464.js.map