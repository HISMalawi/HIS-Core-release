(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bb71f0e"],{"78a8":function(e,t,i){"use strict";i.r(t);var a=i("7a23");function o(e,t,i,o,l,s){const n=Object(a["resolveComponent"])("his-standard-form"),r=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createBlock"])(r,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(n,{formLabel:"Testing",fields:e.fields,onFinishAction:e.onFinish,cancelDestinationPath:e.patientDashboardUrl()},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}i("13d5"),i("14d9");var l=i("d95e"),s=i("d867"),n=i("cc6f");class r extends n["a"]{constructor(e,t=-1){super(e,197,t)}getRecentAccesspoint(){return this.getFirstValueCoded("HTS Access Type")}}var u=i("7f35"),c=i("c731"),d=i("2ef0"),v=i("0011"),p=i("cd10"),b=i("85d6"),h=i("b5e4"),f=i("7920"),_=i("e9be"),m=Object(a["defineComponent"])({components:{IonPage:s["D"],HisStandardForm:f["a"]},setup(){const e=Object(a["ref"])([]),t=new r(-1),{htsClient:i,toOption:o,saveEncounter:s,toYesNoOption:n,mapStrToOptions:f,patientDashboardUrl:m,toConditionalOptions:T}=Object(_["a"])({onInitVisit:()=>{e.value=[V(),E(),D(),x(),O(),k(),S(),C(),H(),R(),w(),M(),A(),L(),F(),j()]}});function y(e,i){s({encounterName:"Testing",encounterTypeID:t.encounterTypeID,computedData:i})}function I(e){let t=!1,i=!1;for(const o of e){var a;"test_1"===o.other.id&&"Positive"===o.value?t=!0:/test_2|test_1_repeat|test_3/i.test(""+(null===o||void 0===o||null===(a=o.other)||void 0===a?void 0:a.id))&&""===o.value&&!o.disabled&&(i=!0)}return t&&i}function N(e){const t=90,a=12,o=24;return parseInt(""+e.other.value)<=0&&!/day/i.test(e.other.timeUnit)?[`Enter ${e.other.timeUnit} greater than zero`]:"Days"===e.other.timeUnit&&parseInt(""+e.other.value)>t?[`Enter ${e.other.timeUnit} less than ${t}, use Weeks Instead`]:"Weeks"===e.other.timeUnit&&parseInt(""+e.other.value)>a?[`Enter ${e.other.timeUnit} less than ${a}, use Months Instead`]:"Months"===e.other.timeUnit&&parseInt(""+e.other.value)>o?[`Enter ${e.other.timeUnit} less than ${o}, use Years Instead`]:e.other.value.length>1&&"0"===e.other.value[0]?[`Value ${e.other.value} is invalid!`]:new Date(e.other.date)<new Date(i.birthDate)?[`${e.label} is greater than client's age of ${i.age} Years`]:null}function P(){return Object(u["a"])("Reschedule test","","HIV result is inconclusive, schedule another test in 2 weeks",[{name:"Ok",slot:"start"}])}function g(e,t){return e.tests_offered.some(e=>e.value===t)}function V(){return{id:"accesspoint_type",helpText:"Access point type",type:l["b"].TT_SELECT,isRequired:()=>!0,finalComputedValue:e=>{const i="HTS Access Type";return{offlineMeta:{[i]:e.value},obs:t.buildValueCoded(i,e.value)}},options:()=>[{label:"Health Facility",value:"Health Facility"},{label:"Community",value:"Community"},{label:"Facility Referred from Community",value:"Health Facility"}]}}function E(){return{id:"facility_access_points",helpText:"Health facility access points",type:l["b"].TT_SELECT_GRID,isRequired:()=>!0,condition:e=>"Health Facility"===e.accesspoint_type.value,finalComputedValue:e=>({obs:t.buildValueText("Location where test took place",""+e.value)}),config:{columnsPerRow:2},options:()=>[{label:"1 | VCT",value:"VCT"},{label:"2 | ANC",value:"ANC First Visit"},{label:"3 | Inpatient",value:"Inpatient"},{label:"4 | STI",value:"STI"},{label:"5 | PMTCT-Follow-up (ANC FUP, Mat, Post-nat, BF)",value:"PMTCT FUP"},{label:"6 | Index",value:"Index"},{label:"7 | Paediatric",value:"Paediatric"},{label:"8 | VMMC",value:"VMMC"},{label:"9 | Malnutrition",value:"Malnutrition"},{label:"10 | TB",value:"TB"},{label:"11 | OPD",value:"OPD"},{label:"12 | Other PITC (PrEP, dental e.t.c)",value:"Other"},{label:"18 | SNS (Social Network Strategies)",value:"SNS"}]}}function D(){return{id:"community_access_points",helpText:"Community access points",type:l["b"].TT_SELECT,condition:e=>"Community"===e.accesspoint_type.value,isRequired:()=>!0,finalComputedValue:e=>({obs:t.buildValueText("Location where test took place",""+e.value)}),options:()=>[{label:"13 | VCT",value:"VCT"},{label:"14 | Index",value:"Index"},{label:"15 | VMMC",value:"VMMC"},{label:"16 | Other",value:"Other"},{label:"17 | SNS",value:"SNS"},{label:"19 | Mobile",value:"Mobile"}]}}function x(){let e=["HIV","Syphilis","Hepatitis B"];return{id:"tests_offered",helpText:"Tests to be offered today?",type:l["b"].TT_MULTIPLE_SELECT,init:async()=>{try{const{getUserProp:t}=Object(b["a"])(),i=await t("HTS_PROGRAMS"),a=i.split(",").filter(e=>/HIV|syphilis|hepatitis/i.test(e)).map(e=>e.replace(/test/i,"").trim());a.length>=1&&(e=a)}catch(t){return console.error(t),!1}return!0},isRequired:()=>!0,condition:()=>e.length>1,defaultOutput:()=>f(e),options:()=>f(e),config:{buildOptionsOnce:!0}}}function O(){return{id:"last_hiv_result",helpText:"Last HIV Test",type:l["b"].TT_SELECT,isRequired:()=>!0,finalComputedValue:e=>{const i="Previous HIV Test Results";return{offlineMeta:{[i]:e.value},obs:t.buildValueCoded(i,e.value)}},options:()=>T([["Never Tested"],["Negative"],["Positive"],["Exposed infant"],["Invalid or inconclusive"]])}}function k(){return{id:"last_hiv_perfomed",helpText:"Last HIV test performed",type:l["b"].TT_SELECT,isRequired:()=>!0,condition:e=>!["Never Tested","Exposed infant"].includes(e.last_hiv_result.value),finalComputedValue:e=>{const i="Previous HIV test done";return{offlineMeta:{[i]:e.value},obs:t.buildValueCoded(i,e.value)}},defaultOutput:e=>{if(/exposed infant/i.test(e.last_hiv_result.value))return o("Professional")},options:e=>T([["Self"],["Initial professional",!/Negative|Inconclusive/i.test(e.last_hiv_result.value)],["Professional"]])}}function S(){return{id:"last_time_hiv_tested",helpText:"Time since last HIV test",type:l["b"].TT_AGE_INPUT,condition:e=>e.last_hiv_result.value&&"Never Tested"!=e.last_hiv_result.value,isRequired:()=>!0,beforeNext:async(e,t)=>(e.other.monthsAgoInt>=12&&!g(t,"HIV")&&await Object(u["a"])("Recommendation Alert","","Please consider testing client for HIV",[{name:"Ok",slot:"start",color:"primary"}]),!0),validation:e=>N(e),finalComputedValue:e=>{const i="Time of HIV test";return{offlineMeta:{[i]:e.value},obs:t.buildObs(i,{value_datetime:e.other.date,value_text:e.value})}},config:{excludeUnits:["Hours"]}}}function C(){return{id:"last_taken_drugs",helpText:"Ever taken the following drugs?",type:l["b"].TT_MULTIPLE_YES_NO,isRequired:()=>!0,finalComputedValue:e=>({obs:e.map(e=>t.buildValueCoded(e.other.concept,e.value))}),options:e=>e.last_taken_drugs?e.last_taken_drugs:[n("PrEP or infant NVP",{concept:"Taken Prep before"}),...(t=>""+(null===(t=e.last_hiv_result)||void 0===t?void 0:t.value)!="Negative"?[n("ART",{concept:"Taken ARV Before"})]:[])(),n("PEP",{concept:"Taken PEP before"})]}}function H(){return{id:"drug_taken",helpText:"Most recent drug taken",type:l["b"].TT_SELECT,isRequired:()=>!0,condition:e=>{let t=0;for(const i of e.last_taken_drugs){if("ART"===i.label&&"Yes"===i.value)return!1;"Yes"===i.value&&++t}return t>1},defaultOutput:e=>{const t=e.last_taken_drugs.find(e=>"ART"===e.label);if("Yes"===(null===t||void 0===t?void 0:t.value))return o("ART")},finalComputedValue:e=>{const i="Most recent drug taken";return{offlineMeta:{[i]:e.value},obs:t.buildValueCoded(i,e.value)}},options:e=>e.last_taken_drugs.filter(e=>"Yes"===e.value).map(e=>o(e.label))}}function R(){return{id:"most_recent_drug",helpText:"Most recent drug",type:l["b"].TT_HIDDEN,condition:e=>1===e.last_taken_drugs.filter(e=>"Yes"===e.value).length,defaultValue:e=>Object(d["find"])(e.last_taken_drugs,{value:"Yes"}),finalComputedValue:e=>({obs:t.buildValueCoded("Most recent drug taken",e.value)})}}function w(){return{id:"time_since_last_drug_taken",helpText:"Time since last taken medication",type:l["b"].TT_AGE_INPUT,condition:e=>e.last_taken_drugs.some(e=>"Yes"===e.value),finalComputedValue:e=>{const i="Time since last taken medication";return{offlineMeta:{[i]:e.value},obs:t.buildObs(i,{value_text:e.value+" ago",value_datetime:e.other.date})}},validation:e=>N(e),isRequired:()=>!0,config:{excludeUnits:["Hours"]}}}function M(){return{id:"client_risk_category",helpText:"Client Risk Category",type:l["b"].TT_SELECT,isRequired:()=>!0,finalComputedValue:e=>{const i="client risk category";return{offlineMeta:{[i]:e.value},obs:t.buildValueCoded(i,e.value)}},options:()=>f(["Low risk","On-going risk","High risk event in last 3 months","Risk assessment not done"])}}function L(){return{id:"test_kit",helpText:"Kit information",type:l["b"].TT_INPUT_ARRAY,condition:e=>e.test_results.filter(e=>""!=e.value).some(e=>!(e.other.expiryDate&&e.other.lotNo)),config:{columns:[{label:"Kit Name"},{label:"Kit Lot No."},{label:"Kit Expiry Date"}]},summaryMapValue:e=>({label:"Kit: "+e.label,value:"Lot No: "+(e.value||e.other.fields[1].value)}),validation:e=>{const t=e.map(e=>e.other.fields),i=t.some(e=>{const t=e.filter(e=>""!=e.value).length;return t>0&&t<3});if(i)return["Some rows have incomplete data!"];const a=t.some(e=>e.some(e=>""===e.value));return a?["Some rows are missing data"]:null},finalComputedValue:e=>({obs:e.map(e=>e.other.fields).map(async e=>{const[t,...i]=e.filter(e=>"function"===typeof e.other.obs).map(e=>e.other.obs(e));return{...await t,child:await Promise.all(i)}})}),defaultOutput:e=>{const i=e.test_results.filter(e=>""!=e.value);if(i.every(e=>e.other.expiryDate&&e.other.lotNo))return i.map(e=>({label:e.label,value:e.other.lotNo,other:{fields:[{label:"Kit name",value:e.label,other:{obs:()=>t.buildValueText("Kit name",e.label)}},{label:"Kit Lot No",value:e.other.lotNo,other:{obs:()=>t.buildValueText("Kit lot number",e.other.lotNo)}},{label:"Kit expiry date",value:e.other.expiryDate,other:{obs:()=>t.buildValueDate("kit expiry date",e.other.expiryDate)}}]}}))},options:async e=>{const i=Array.isArray(e.test_results)?e.test_results:[],a=e=>({label:"Kit Name",value:e,clearable:!1,other:{usefontBold:!0,obs:e=>t.buildValueText("Kit name",e.label)}}),o=e=>({label:"Kit Lot No.",value:e,other:{obs:e=>t.buildValueText("Kit lot number",e.value),onclick:e=>{Object(c["b"])({id:"lot",helpText:"Enter Lot Number",type:l["b"].TT_TEXT,isRequired:()=>!0},t=>{e.value=t.value})}}}),s=e=>({label:"Kit Expiry Date",value:e,other:{obs:e=>t.buildValueDate("kit expiry date",e.value),onclick:e=>{Object(c["b"])({id:"end_user",helpText:"Kit Expiry Date",type:l["b"].TT_FULL_DATE,isRequired:()=>!0,validation:e=>new Date(e.label)<new Date(t.date)?["Expiry date cannot be less than current date "+Object(v["g"])(t.date)]:null},t=>{e.value=t.value})}}}),n=null===e.test_kit?[]:e.test_kit;return i.filter(e=>""!=e.value).map(e=>{const t=Object(d["find"])(n,{label:e.label});return t||{label:e.label,value:"",other:{fields:[a(e.other.shortName),o(e.other.lotNo),s(e.other.expiryDate)]}}})}}}function A(){const{getLotNo:e,getExpiryDate:a,initKits:o}=Object(p["b"])(),s=(e,t,i)=>!!Object(d["find"])(e,{value:i,other:{id:t}});return{id:"test_results",helpText:"Test results",type:l["b"].TT_MULTIPLE_YES_NO,config:{requireAllValues:!1},summaryMapValue:e=>{const t={Positive:"Reactive",Negative:"Non-reactive"};if(""!=e.value)return{label:e.label,value:t[e.value]||e.value}},beforeNext:async(e,t)=>{const a=s(e,"test_2","Negative")&&s(e,"test_1_repeat","Positive")||s(e,"test_2","Positive")&&s(e,"test_3","Negative");if(/inconclusive/i.test(t.last_hiv_result.value)&&a)return await Object(u["a"])("Inconclusive Re-Test Result","","Please collect DBS sample.",[{name:"Ok",slot:"start"}]),!0;if(a)return await P(),!0;const o=s(e,"test_1","Positive")&&s(e,"test_2","Positive")&&s(e,"test_3","Positive");return o&&i.age<=0&&await Object(u["a"])("<12 months old all HIV tests reactive","","Please collect DBS sample for EID",[{name:"Ok",slot:"start"}]),!("Community"!=t.accesspoint_type.value&&I(e)&&!await Object(h["a"])("Are you sure you want to save incomplete HIV results?",{header:"Incomplete HIV results!"}))},onValueUpdate:(e,t,i)=>{if(g(i,"HIV")&&"Health Facility"===i.accesspoint_type.value){const t=[...e],i=s(t,"test_1","Positive"),a=s(t,"test_2","Positive"),o=(e,i)=>{t.forEach(t=>{t.other.id===e&&(t.disabled=i,i&&(t.value=""))})};return i?(o("test_2",!1),i&&a?(o("test_3",!1),o("test_1_repeat",!0),t):(i&&!a&&e.some(e=>"test_2"===e.other.id&&""!=e.value)&&(o("test_1_repeat",!1),o("test_3",!0)),t)):(o("test_2",!0),o("test_3",!0),o("test_1_repeat",!0),t)}return e},validation:e=>!e||e.some(e=>{var t;return/syphilis|hepatitis|test_1/i.test(""+(null===e||void 0===e||null===(t=e.other)||void 0===t?void 0:t.id))&&""===e.value&&!e.disabled})?["Result entry incomplete!"]:null,finalComputedValue:e=>({offlineMeta:e.filter(e=>e.value).reduce((e,t)=>({...e,[t.other.concept]:t.value}),{}),obs:e.filter(e=>e.value&&"function"===typeof e.other.obs).map(e=>e.other.obs(e))}),init:async()=>(await o(),!0),condition:e=>e.tests_offered.length,options:i=>{const o=(e={})=>({label:e.name,value:"",disabled:"boolean"===typeof(null===e||void 0===e?void 0:e.disabled)&&e.disabled,other:{id:(null===e||void 0===e?void 0:e.id)||"",concept:(null===e||void 0===e?void 0:e.concept)||"",shortName:(null===e||void 0===e?void 0:e.shortName)||"",category:(null===e||void 0===e?void 0:e.category)||"",expiryDate:(null===e||void 0===e?void 0:e.expiryDate)||"",lotNo:(null===e||void 0===e?void 0:e.lotNo)||"",obs:"function"===typeof(null===e||void 0===e?void 0:e.obs)?e.obs:void 0,accessPoint:(null===e||void 0===e?void 0:e.accessPoint)||"*",values:[{label:"Reactive",value:"Positive"},{label:"Non-reactive",value:"Negative"}]}}),l=[o({id:"test_1",name:"HIV Test 1 (Determine)",category:"HIV",shortName:"Determine",lotNo:e(p["a"].DETERMINE),expiryDate:a(p["a"].DETERMINE),concept:"Test 1",obs:e=>t.buildValueCoded(e.other.concept,e.value)}),o({id:"test_2",name:"HIV Test 2 (Unigold)",category:"HIV",disabled:!0,accessPoint:"Health Facility",shortName:"Unigold",concept:"Test 2",lotNo:e(p["a"].UNIGOLD),expiryDate:a(p["a"].UNIGOLD),obs:e=>t.buildValueCoded(e.other.concept,e.value)}),o({id:"test_1_repeat",name:"HIV Test 1 (Determine) Repeat",category:"HIV",disabled:!0,shortName:"Determine (Repeat)",accessPoint:"Health Facility",concept:"Immediate Repeat Test 1 Result",lotNo:e(p["a"].DETERMINE),expiryDate:a(p["a"].DETERMINE),obs:e=>t.buildValueCoded(e.other.concept,e.value)}),o({id:"test_3",name:"HIV Test 3 (Bioline)",category:"HIV",disabled:!0,shortName:"Bioline",accessPoint:"Health Facility",concept:"Test 3",lotNo:e(p["a"].BIOLINE),expiryDate:a(p["a"].BIOLINE),obs:e=>t.buildValueCoded(e.other.concept,e.value)}),o({id:"syphilis",name:"Syphilis Test Result",category:"Syphilis",shortName:"Syphilis",concept:"Syphilis Test Result",lotNo:e(p["a"].SYPHILIS),expiryDate:a(p["a"].SYPHILIS),obs:e=>t.buildValueCoded(e.other.concept,e.value)}),o({id:"hepatitis",name:"Hepatitis B Test Result",category:"Hepatitis B",shortName:"Hepatitis B",concept:"Hepatitis B Test Result",lotNo:e(p["a"].HEPATITIS),expiryDate:a(p["a"].HEPATITIS),obs:e=>t.buildValueCoded(e.other.concept,e.value)})],s=i.accesspoint_type.value,n=Array.isArray(i.test_results)?i.test_results:[],r=l.reduce((e,t)=>{const i=Object(d["find"])(n,{label:t.label});return i?("*"!=i.other.accessPoint&&i.other.accessPoint!=s&&(i.value=""),e.push(i)):e.push(t),e},[]);return i.tests_offered.reduce((e,t)=>{const i=r.filter(e=>e.other.category===t.value&&(e.other.accessPoint===s||"*"===e.other.accessPoint));return i.length?e.concat(i):e},[])}}}function F(){let e="";return{id:"hiv_result",helpText:"HIV Result",type:l["b"].TT_HIDDEN,appearInSummary:()=>!1,condition:e=>g(e,"HIV"),onload:t=>{let i=null!=t.last_hiv_perfomed,a=null!=t.last_hiv_result,o="",l="",s="",n="";const r=t.test_results||[],u="Community"===t.accesspoint_type.value,c=()=>{var e;return null===(e=t.last_hiv_result)||void 0===e?void 0:e.value},d=()=>{var e;return null===(e=t.last_hiv_perfomed)||void 0===e?void 0:e.value};r.forEach(e=>{switch(e.other.id){case"test_1":o=e.value;break;case"test_2":l=e.value;break;case"test_3":s=e.value;break;case"test_1_repeat":n=e.value;break}});const v=()=>a&&i&&"Positive"===c()&&"Professional"===d()&&("Negative"===o||"Negative"===l||"Negative"===s),p={Incomplete:()=>["Community"!=t.accesspoint_type.value,I(r)],Negative:()=>[!v(),"Negative"===o||"Negative"===l||"Negative"===s||"Negative"===n],Positive:()=>[!u,"Positive"===s],Inconclusive:()=>[!u,v()||"Negative"===l&&"Positive"===n||"Positive"===l&&"Negative"===s],"Positive Initial Professional":()=>[u,"Positive"===o]};e=Object.keys(p).reduce((e,t)=>p[t]().every(Boolean)?t:e,"Not indicated")},defaultValue:()=>{if(e)return o(e)},finalComputedValue:()=>{if(e){const i="HIV status";return{offlineMeta:{[i]:e},obs:t.buildValueCoded(i,e)}}}}}function j(){let e="N/A";return{id:"patient_category",helpText:"Result given to client",type:l["b"].TT_HIDDEN,onload:t=>{if(!t.hiv_result)return;const a=t.hiv_result.value,o=i.age,l=t.last_hiv_result.value,s=null!=t.last_hiv_perfomed?t.last_hiv_perfomed.value:"",n=null!=t.last_time_hiv_tested?t.last_time_hiv_tested.other.monthsAgoInt:-1,r={"New Positive":["Positive"===a,/never tested|negative|exposed|inconclusive/i.test(l)||"Positive"===l&&/initial professional|self/i.test(s)&&n<=12],"New exposed infant":[o<=0,"Positive"===a],"Positive Re-test":["Positive"===a,"Positive"===l,"Professional"===s],"Inconclusive Re-test":["Positive"===l,"Inconclusive"===a,"Professional"===s],"New Negative":["Negative"===a],"New Inconclusive":["Inconclusive"===a,/self/i.test(s)&&/invalid/i.test(l)||/never tested|negative|exposed infant/i.test(l)||"Positive"===l&&/self|initial professional/i.test(s)]};e=Object.keys(r).reduce((e,t)=>r[t].every(Boolean)?t:e,"N/A")},defaultValue:()=>{if("N/A"!=e)return o(e)},finalComputedValue:()=>{if("N/A"!=e){const i="HIV group";return{offlineMeta:{[i]:e},obs:t.buildValueCoded(i,e)}}},condition:e=>e.hiv_result.value}}return{fields:e,onFinish:y,patientDashboardUrl:m}}}),T=i("6b0d"),y=i.n(T);const I=y()(m,[["render",o]]);t["default"]=I},7920:function(e,t,i){"use strict";var a=i("7a23");function o(e,t,i,o,l,s){return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var l=i("9441"),s=Object(a["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:l["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),n=i("6b0d"),r=i.n(n);const u=r()(s,[["render",o]]);t["a"]=u},cd10:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return r}));var a,o=i("1c74"),l=i("2ef0"),s=i("7a23"),n=i("85d6");function r(){const e=Object(s["ref"])([]),{getUserProp:t,setUserProp:i}=Object(n["a"])(),r=async()=>{try{const e=await t("HTS_PROGRAMS");return(""+(e||"")).split(",").map(e=>e.trim())}catch(e){console.error(""+e)}return[]},u=async()=>{const i=[{kitName:a.UNIGOLD,lotNo:"",expiryDate:"",testGroup:"profession_hiv_kit",visible:!0,userProp:"HIV Test"},{kitName:a.DETERMINE,lotNo:"",expiryDate:"",testGroup:"profession_hiv_kit",visible:!0,userProp:"HIV Test"},{kitName:a.BIOLINE,lotNo:"",expiryDate:"",testGroup:"profession_hiv_kit",visible:!0,userProp:"HIV Test"},{kitName:a.HIV_SELF_KIT,lotNo:"",expiryDate:"",visible:!0},{kitName:a.SYPHILIS,lotNo:"",expiryDate:"",visible:!0,userProp:"Syphilis Test"},{kitName:a.HEPATITIS,lotNo:"",expiryDate:"",visible:!0,userProp:"Hepatitis B Test"}];try{const o=await r(),s=await t(a.TEST_KIT_USER_PROPERTY),n=JSON.parse(s||"");i.forEach(e=>{e.userProp&&!Object(l["isEmpty"])(o)&&(e.visible=o.includes(e.userProp));const t=Object(l["find"])(n,{kitName:e.kitName});t&&(e.lotNo=t.lotNo,e.expiryDate=t.expiryDate)}),e.value=i.filter(e=>e.visible)}catch(o){e.value=i,console.error(""+o)}},c=t=>{const i=Object(l["find"])(e.value,{kitName:t});return i?new Date(i.expiryDate)<=new Date(o["e"].getSessionDate())?"":i.lotNo:""},d=t=>{const i=Object(l["find"])(e.value,{kitName:t});return i?new Date(i.expiryDate)<=new Date(o["e"].getSessionDate())?"":i.expiryDate:""},v=()=>i(a.TEST_KIT_USER_PROPERTY,JSON.stringify(e.value));return{kits:e,initKits:u,saveKits:v,getLotNo:c,getExpiryDate:d}}(function(e){e["TEST_KIT_USER_PROPERTY"]="hts_user_assigned_kits",e["HIV_SELF_KIT"]="HIV self-kit",e["SYPHILIS"]="Syphilis",e["HEPATITIS"]="Hepatitis B",e["BIOLINE"]="Bioline",e["DETERMINE"]="Determine",e["UNIGOLD"]="Unigold"})(a||(a={}))}}]);
//# sourceMappingURL=chunk-5bb71f0e.9a2eeeae.js.map