(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-177a3565"],{3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"l",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"k",(function(){return s})),n.d(t,"i",(function(){return u})),n.d(t,"g",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"j",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"h",(function(){return T})),n.d(t,"f",(function(){return E}));const a=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],i=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],o=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],r=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],s=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],u=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],l=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],c=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],d=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],p=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],T=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],E=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"3b8c":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("cc6f"),i=n("7957"),o=n("5a0c"),r=n.n(o),s=n("2ef0");class u extends a["a"]{constructor(e,t){super(e,53,t)}getFamilyPlanningMethods(){return["ORAL CONTRACEPTIVE PILLS","DEPO-PROVERA","INTRAUTERINE CONTRACEPTION","CONTRACEPTIVE IMPLANT","MALE CONDOMS","FEMALE CONDOMS","TUBAL LIGATION","NONE"]}async getTptTreatmentStatus(){return a["a"].getJson(`/patients/${this.patientID}/tpt_status`)}async patientHitMenopause(){const e=await i["a"].getFirstObs(this.patientID,"Why does the woman not use birth control");return!(!e||"string"!==typeof(null===e||void 0===e?void 0:e.value_text))&&(!!e.value_text.match(/menopause/i)&&a["a"].obsInValidPeriod(e))}async hasTreatmentHistoryObs(){const e=await i["a"].getFirstObs(this.patientID,"Previous TB treatment history");return e&&a["a"].obsInValidPeriod(e)}getDrugSideEffects(){return a["a"].getJson(`programs/${a["a"].getProgramID()}/patients/${this.patientID}/medication_side_effects`,{date:this.date})}getClient(){return a["a"].getFirstValueCoded(this.patientID,"Patient present")}async clientDueForCxCa(){const e=await a["a"].getJson("last_cxca_screening_details",{id:this.patientID,date:this.date});if(!Object(s["isEmpty"])(e)){const t=e["date_screened"],n=r()(this.date).diff(t,"years");return n>=1}return!0}async clientHasHadAHysterectomy(){const e=await a["a"].getFirstValueCoded(this.patientID,"Reason for NOT offering CxCa");if("Hysterectomy"===e)return!0;const t=await a["a"].getFirstValueText(this.patientID,"Treatment");return"Hysterectomy"===t}async getTLObs(){const e=e=>e&&"Tubal ligation"===e.value_coded&&a["a"].obsInValidPeriod(e),t=await a["a"].getFirstObs(this.patientID,"Family planning");if(e(t))return e(t);{const t=await a["a"].getFirstObs(this.patientID,"Method of family planning");return e(t)}}async getPreviousDrugs(){const e=await a["a"].getJson(`patients/${this.patientID}/drugs_received`);if(!e)return;const t={};return e.forEach(e=>{t[e.drug_inventory_id]=e}),t}familyPlanningMethods(e,t){const n={"ORAL CONTRACEPTIVE PILLS":{"DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","CONTRACEPTIVE IMPLANT":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"DEPO-PROVERA":{"ORAL CONTRACEPTIVE PILLS":"N","INTRAUTERINE CONTRACEPTION":"N","CONTRACEPTIVE IMPLANT":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"INTRAUTERINE CONTRACEPTION":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","CONTRACEPTIVE IMPLANT":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"CONTRACEPTIVE IMPLANT":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"MALE CONDOMS":{"ORAL CONTRACEPTIVE PILLS":"Y","DEPO-PROVERA":"Y","INTRAUTERINE CONTRACEPTION":"Y","CONTRACEPTIVE IMPLANT":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"Y","TUBAL LIGATION":"N",VASECTOMY:"Y"},"FEMALE CONDOMS":{"ORAL CONTRACEPTIVE PILLS":"Y","DEPO-PROVERA":"Y","INTRAUTERINE CONTRACEPTION":"Y","CONTRACEPTIVE IMPLANT":"Y","MALE CONDOMS":"Y","RYTHM METHOD":"Y","TUBAL LIGATION":"N",VASECTOMY:"Y"},"RYTHM METHOD":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","CONTRACEPTIVE IMPLANT":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"TUBAL LIGATION":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"N","FEMALE CONDOMS":"N","CONTRACEPTIVE IMPLANT":"N","RYTHM METHOD":"N",VASECTOMY:"N"},VASECTOMY:{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"Y","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"N","CONTRACEPTIVE IMPLANT":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N"},NONE:{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"N","FEMALE CONDOMS":"N","CONTRACEPTIVE IMPLANT":"N","RYTHM METHOD":"N","TUBAL LIGATION":"N"}},a=n[e];return t.map(e=>"N"===a[e.label]?{label:e.label,value:e.value,isChecked:!1,disabled:!0}:{label:e.label,value:e.value,isChecked:e.isChecked,disabled:!1})}}},"6be2":function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return r})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return p})),n.d(t,"a",(function(){return T}));var a=n("3800");const i=[a["k"],[["","Delete"]]],o=[a["i"],[["Delete"]]],r=[a["i"],[["Delete","Unknown"]]],s=[a["i"],[["N/A"],["Delete","Unknown"]]],u=[a["i"],[["Delete"]]],l=[a["i"],[["Unknown","Delete"],["Qwerty","A-Z"]]],c=[a["g"],[["Unknown"]]],d=[a["a"],[["0-9","Delete"],["Qwerty","Unknown"],["","Space"]]],p=[a["j"],[["","Delete"],["?123","0-9"],["Space","Unknown"]]],T=[{btn:"0-9",keyboard:l},{btn:"?123",keyboard:i},{btn:"A-Z",keyboard:d},{btn:"Qwerty",keyboard:p}]},7365:function(e,t,n){"use strict";n("14d9"),n("13d5");var a,i=n("7a23"),o=n("ad60"),r=n("2ef0"),s=n("0fa1"),u=n("7f35"),l=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(a||(a={}));const c=e=>l["c"].toStandardHisDisplayFormat(e),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(u["a"])("Data Integrity Issue Found","Patient died on "+c(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?a.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?a.CHANGE_PATIENT_OUTCOME:a.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(u["a"])("Data integrity issue found","",`Session date ${c(t)} is less than birth date of ${c(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?a.CHANGE_SESSION_DATE:a.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:i})=>{const o=await Object(u["c"])("Please select a provider for "+t,`BDE: ${c(n)} | Current: ${c(i)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===o.action?{value:-1,flowState:a.GO_TO_PATIENT_DASHBOARD}:{value:o.selection,flowState:a.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var p=n("c21d"),T=n("7920"),E=n("b5e4"),O=n("8e8b"),N=Object(i["defineComponent"])({components:{HisStandardForm:T["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.patientID=parseInt(e.params.patient_id),O["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const n={};if(n[a.SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(r["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),a.CONTINUE},n[a.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),a.EXIT),n[a.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),a.EXIT),n[a.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),a.EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(p["a"])(this.facts,d);for(const r in e){var t,n;const s=e[r];if(null!==s&&void 0!==s&&null!==(t=s.actions)&&void 0!==t&&t.alert){var i;const e=this.runflowState(await(null===s||void 0===s||null===(i=s.actions)||void 0===i?void 0:i.alert(this.facts)));if(e===a.EXIT)return}if(null!==s&&void 0!==s&&null!==(n=s.actions)&&void 0!==n&&n.selection){var o;const e=await(null===s||void 0===s||null===(o=s.actions)||void 0===o?void 0:o.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await O["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(E["c"])(""+e)}this.facts.sessionDate=o["a"].getSessionDate(),this.facts.apiDate=o["a"].getCachedApiDate(),this.facts.isBdeMode=o["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",o["a"].isBDE()&&(this.providers=await O["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),a=t.username.toUpperCase();return n<a?-1:n>a?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(r["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var a;const[t]=(null===(a=e.person)||void 0===a?void 0:a.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>({label:e,value:e}))},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},nextTask(){return Object(s["b"])(this.patientID,this.$router)},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const h=N;t["a"]=h},7920:function(e,t,n){"use strict";var a=n("7a23");function i(e,t,n,i,o,r){return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var o=n("9441"),r=Object(a["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:o["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=n("6b0d"),u=n.n(s);const l=u()(r,[["render",i]]);t["a"]=l},b446:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return D}));n("14d9"),n("13d5");var a,i=n("d95e"),o=[{label:"Jan",value:1},{label:"Feb",value:2},{label:"Mar",value:3},{label:"Apr",value:4},{label:"May",value:5},{label:"Jun",value:6},{label:"Jul",value:7},{label:"Aug",value:8},{label:"Sep",value:9},{label:"Oct",value:10},{label:"Nov",value:11},{label:"Dec",value:12}],r=n("9283"),s=n("2706"),u=n("3800"),l=n("6be2"),c=n("5a0c"),d=n.n(c),p=n("1c74");function T(e,t,n=!0){const a=[];return n&&a.push("UNKNOWN"),{id:e,helpText:t+" Year",appearInSummary:()=>!1,type:i["b"].TT_TEXT,config:{customKeyboard:[u["i"],[a,["DELETE"]]]}}}function E(e,t){return{id:e,helpText:t+" Month",appearInSummary:()=>!1,type:i["b"].TT_SELECT,options:()=>o}}function O(e,t){return{id:e,helpText:t+" Day",type:i["b"].TT_MONTHLY_DAYS,appearInSummary:()=>!1}}function N(e,t){return{id:e,helpText:t+" Estimated period",type:i["b"].TT_SELECT,appearInSummary:()=>!1,options:()=>[{label:"6 months ago",value:180},{label:"12 months ago",value:365},{label:"18 months ago",value:540},{label:"24 months ago",value:730},{label:"Over 2 years ago",value:730}]}}function h(e,t){return{id:e,helpText:t+" Age Estimate",type:i["b"].TT_NUMBER,appearInSummary:()=>!1,config:{keypad:l["e"]}}}function f(e){return parseInt(e)<10?"0"+e:e}async function m(e,t,n){if(t.defaultValue){const a=await t.defaultValue(e);if(a){const[e,t,i]=a.split("-");switch(n){case"Year":return e||"";case"Month":return parseInt(t)||"";case"Day":return parseInt(i)||""}}}return""}function A(e){return r["c"].toStandardHisDisplayFormat(e)}function I(e,t,n,a){if(t.minDate){const i=t.minDate(n,a);if(new Date(e)<new Date(i))return[`${A(e)} is less than minimum date of ${A(i)}`]}if(t.maxDate){const i=t.maxDate(n,a);if(i&&new Date(e)>new Date(i))return[`${A(e)} is greater than max date of  ${A(i)}`]}}function D(e,t=""){let n="",i="",u="",l="",c=!1;const D="year_"+e.id,v="month_"+e.id,y="day_"+e.id,b="age_estimate_"+e.id,C="duration_estimate_"+e.id,S=T(D,e.helpText,e.estimation.allowUnknown),R=E(v,e.helpText),g=O(y,e.helpText),P=h(b,e.helpText),M=N(C,e.helpText),L="boolean"===typeof e.estimation.allowUnknownMonthDay&&e.estimation.allowUnknownMonthDay,w=t=>!(t[D]&&t[D].value&&["Unknown"].includes(t[D].value))&&(!e.condition||e.condition(t)),_=(e,t)=>{const n=[{type:"year",value:i,default:"YYYY"},{type:"month",value:u,default:"MM"},{type:"day",value:l,default:"DD"}];return n.reduce((n,a)=>{const i=[null,void 0,"Unknown",""];return t===a.type?i.includes(e)?n.push(a.default):n.push(e):i.includes(a.value)?n.push(a.default):n.push(a.value),n},[]).join("-")};"function"===typeof e.init&&(S.init=e.init),S.updateHelpTextOnValue=e=>`${S.helpText} (${_(null===e||void 0===e?void 0:e.label,"year")})`,S.proxyID=e.id,S.unload=e=>i=e.value.toString(),S.config={...S.config,...e.config},S.defaultValue=t=>m(t,e,"Year"),S.condition=t=>!e.condition||e.condition(t),S.validation=(t,n,a)=>{if(e.required&&s["a"].required(t))return["Year cannot be empty"];const i=t?t.value:"";if(!e.estimation.allowUnknown&&i.toString().match(/unknown/i))return["Value unknown is not permitted"];if(i&&!["Unknown"].includes(i)&&isNaN(i)||i<1900)return["Invalid Year"];if(i&&"function"===typeof e.minDate){const t=r["c"].getYear(e.minDate(n,a));if(parseInt(i)<t)return[`Year of ${i} is less than Minimum year of ${t}`]}if(i&&"function"===typeof e.maxDate){const t=e.maxDate(n,a);if(t&&i>r["c"].getYear(t))return[`Year of ${i} exceeds Maximum year of ${r["c"].getYear(t)}`]}return null},S.summaryMapValue=()=>({label:e.summaryLabel||e.helpText,value:n?A(n):"Unknown"}),S.appearInSummary=(t,n)=>n===e.id,S.computedValue=t=>{if(n){const[a,i,o]=n.split("-");return n=`${t.value}-${i}-${o}`,e.computeValue(n,!1)}if(t&&"Unknown"===t.value)return n="",e.computeValue("Unknown",!1)},R.updateHelpTextOnValue=e=>`${R.helpText} (${_(null===e||void 0===e?void 0:e.label,"month")})`,R.proxyID=e.id,R.unload=e=>u=f(e.value.toString()),R.condition=e=>w(e),R.validation=e=>s["a"].required(e),R.defaultValue=t=>m(t,e,"Month"),L&&(R.options=()=>[...o,{label:"Unknown",value:"Unknown"}]),R.computedValue=(t,a)=>{if((""+t.value).match(/unknown/i))return n=a[D].value+"-07-15",e.computeValue(n,!0);if(n){const[a,i,o]=n.split("-"),r=f(""+t.value);return n=`${a}-${r}-${o}`,e.computeValue(n,!1)}},g.proxyID=e.id,g.updateHelpTextOnValue=e=>`${g.helpText} (${_(null===e||void 0===e?void 0:e.label,"day")})`,g.condition=e=>!(""+e[v].value).match(/unknown/i)&&w(e),g.validation=(t,a,o)=>s["a"].required(t)?["Day is required for date"]:(c=!!(""+t.value).match(/unknown/i),l=c?"15":f(""+t.value),n=`${i}-${u}-${l}`,I(n,e,a,o)),g.defaultValue=t=>m(t,e,"Day"),g.computedValue=()=>e.computeValue(n,c),g.unload=(t,n,a,i)=>{e.unload&&e.unload(t,n,a,i)},g.beforeNext=(t,a)=>!e.beforeNext||e.beforeNext(n,a),g.config={year:e=>e[D].value,month:e=>e[v].value},L||(g.config.keyboardActions=[]);const V=(t,n)=>{const a=["Unknown"===t[D].value,!e.condition||e.condition(t),e.estimation.estimationFieldType===n];return a.every(Boolean)};return P.proxyID=e.id,P.validation=(t,a,i)=>{if(t&&t.value>300)return["Age estimate is too high and exceeding hard limit of 300"];if(isNaN(parseInt(t.value.toString())))return["Please enter a valid number"];const o=/^(12[0-7]|1[01][0-9]|[1-9]?[0-9])$/;if(!t.value.toString().match(o))return["Not a valid age estimate"];const r=d()(p["e"].getSessionDate()).subtract(t.value,"years").year();return n=r+"-07-15",I(n,e,a,i)},P.condition=e=>V(e,a.AGE_ESTIMATE_FIELD),P.computedValue=()=>e.computeValue(n,!0),P.beforeNext=(t,a)=>!e.beforeNext||e.beforeNext(n,a),M.proxyID=e.id,M.validation=(t,a,i)=>s["a"].required(t)?["Please select an estimate"]:(n=d()(p["e"].getSessionDate()).subtract(t.value,"day").format(r["b"]),I(n,e,a,i)),M.condition=e=>V(e,a.MONTH_ESTIMATE_FIELD),M.computedValue=()=>e.computeValue(n,!0),M.beforeNext=(t,a)=>!e.beforeNext||e.beforeNext(n,a),[S,R,g,P,M]}(function(e){e["AGE_ESTIMATE_FIELD"]="age-estimate-field",e["MONTH_ESTIMATE_FIELD"]="month-period-estimate-field"})(a||(a={}))},c21d:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("14d9");function a(e,t){const n=[],a=[-1,"",null,void 0];for(const i in t){if(!(i in e))continue;const o=e[i];a.includes(o)?n.push(!1):n.push(t[i](o,e))}return n.every(Boolean)}function i(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function o(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function r(e,t,n="",r="",s="priority"){const u=[];for(const i in t){const o=t[i],s=[o.target&&n&&o.target!=n,o.targetEvent&&r&&o.targetEvent!=r];s.some(Boolean)||a(e,o.conditions)&&(o.title=i,o.description&&(o.description.text=o.description.info(e)),u.push(o))}return"priority"===s?i(u):o(u)}},f7b2:function(e,t,n){"use strict";n.r(t);var a=n("7a23");function i(e,t,n,i,o,r){const s=Object(a["resolveComponent"])("his-standard-form");return Object(a["openBlock"])(),Object(a["createBlock"])(s,{fields:e.fields,skipSummary:!0,onFinishAction:e.onFinish},null,8,["fields","onFinishAction"])}var o=n("d95e"),r=n("7920"),s=n("2706"),u=n("7365"),l=n("3b8c"),c=n("b446"),d=n("7957"),p=Object(a["defineComponent"])({mixins:[u["a"]],components:{HisStandardForm:r["a"]},data:()=>({consultation:{}}),watch:{ready:{handler(e){e&&(this.consultation=new l["a"](this.patientID,this.providerID),this.fields=this.getFields())},immediate:!0}},methods:{async onFinish(e,t){await this.consultation.createEncounter();const n=await this.resolveObs(t);await this.consultation.saveObservationList(n),this.$router.back()},getFields(){return[{id:"has_hypertension",helpText:"Does the patient have hypertension",type:o["b"].TT_SELECT,options:()=>this.yesNoOptions(),validation:e=>s["a"].required(e),computedValue:e=>d["a"].buildValueCoded("Patient has hypertension",""+e.value)},...Object(c["b"])({condition:e=>"Yes"===e.has_hypertension.value,id:"hypertension_diagnosis",helpText:"Date the patient was diagnosed with hypertension",required:!0,estimation:{allowUnknown:!1},computeValue:e=>d["a"].buildValueDate("Hypertension diagnosis date",e)},l["a"].getSessionDate())]}}}),T=n("6b0d"),E=n.n(T);const O=E()(p,[["render",i]]);t["default"]=O}}]);
//# sourceMappingURL=chunk-177a3565.c119bce1.js.map