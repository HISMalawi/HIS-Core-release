(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a6bc157"],{"1f9a":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var i=a("ade3"),n=a("1c74"),r=a("ad60"),o=a("d10e");class s extends n["e"]{constructor(){super()}static create(e){return super.postJson("/person_attributes",e)}}var l=a("4db7");class u extends n["e"]{constructor(){super(),Object(i["a"])(this,"personId",void 0),this.personId=0}getPersonID(){return this.personId}setPersonID(e){this.personId=e}async registerPatient(e,t){await this.createPerson(e),await this.createPersonAttributes(t);const a=await this.createPatient();return await this.printPatient(),a}async registerBasicPatient(e){return await this.createPerson(e),this.createPatient()}async registerGuardian(e){return this.createPerson(e)}updatePerson(e){return new o["a"](e).update(this.personId)}async createPerson(e){const t=await new o["a"](e).create();return this.personId=t.person_id,t}createPatient(){return r["a"].createPatient(this.personId)}async createPersonAttributes(e){for(const t in e)await s.create({...e[t],person_id:this.personId})}printPatient(){return new l["a"](this.personId).printNidLbl()}}},"4cf8":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("cc6f");class n extends i["a"]{constructor(e,t=-1){super(e,196,t)}}},"61ef":function(e,t,a){"use strict";a.r(t);var i=a("7a23");function n(e,t,a,n,r,o){const s=Object(i["resolveComponent"])("his-standard-form"),l=Object(i["resolveComponent"])("ion-page");return Object(i["openBlock"])(),Object(i["createBlock"])(l,null,{default:Object(i["withCtx"])(()=>[Object(i["createVNode"])(s,{formLabel:"Self Test Registration",fields:e.fields,onFinishAction:e.onFinish,cancelDestinationPath:"/"},null,8,["fields","onFinishAction"])]),_:1})}a("14d9");var r=a("7365"),o=a("d95e"),s=a("d867"),l=a("2ef0"),u=a("c731"),c=a("80b5"),d=a("5a0c"),p=a.n(d),h=a("1f9a"),m=a("23e6"),b=a("4cf8"),v=a("0011"),f=a("9283"),_=a("b5e4"),g=a("cd10"),T=Object(i["defineComponent"])({components:{IonPage:s["D"]},mixins:[r["a"]],data:()=>({service:{}}),watch:{ready:{handler(){this.service=new b["a"](-1),this.fields=[this.accessPointTypeField(),this.facilityAccessPointField(),this.communityAccessPoints(),this.genderField(),this.ageField(),this.pregnancyStatusField(),this.lastHivTestResultField(),this.lastTimeHIVTestedField(),this.itemsGivenToClientField(),this.selfTestsGivenToClientField(),this.hivTestKitDetailsField(),this.visitTypeField(),...this.patientDemographics()]},immediate:!0}},methods:{async onFinish(e,t){const a=await c["a"].resolvePerson(t),i=new h["a"];new m["a"](await i.registerBasicPatient(a)),this.service.patientID=i.getPersonID(),await this.service.createEncounter(),await this.service.saveObservationList(await this.resolveObs(t,"reg")),this.$router.push("/")},getSelfKitCount(e){var t;return(null===(t=Object(l["find"])(e.items_given_to_client||[],{label:"Self-Test Kit"}))||void 0===t?void 0:t.value)||0},accessPointTypeField(){return{id:"accesspoint_type",helpText:"Distribution point type",type:o["b"].TT_SELECT,isRequired:()=>!0,finalComputedValue:e=>({tag:"reg",obs:this.service.buildValueCoded("HTS Access Type",e.value)}),options:()=>this.mapStrToOptions(["Health Facility","Community"])}},facilityAccessPointField(){return{id:"facility_access_points",helpText:"Health facility distribution point",type:o["b"].TT_SELECT_GRID,isRequired:()=>!0,condition:e=>"Health Facility"===e.accesspoint_type.value,summaryMapValue:e=>e,finalComputedValue:e=>({tag:"reg",obs:this.service.buildValueText("Location where test took place",e.value.toString())}),config:{columnsPerRow:2},options:()=>[{label:"1 | VCT",value:"VCT"},{label:"2 | ANC",value:"ANC First Visit"},{label:"3 | Inpatient",value:"Inpatient"},{label:"4 | STI",value:"STI"},{label:"5 | PMTCT-Follow-up (ANC FUP, Mat, Post-nat, BF)",value:"PMTCT FUP"},{label:"6 | Index",value:"Index"},{label:"7 | Paediatric",value:"Paediatric"},{label:"8 | VMMC",value:"VMMC"},{label:"9 | Malnutrition",value:"Malnutrition"},{label:"10 | TB",value:"TB"},{label:"11 | OPD",value:"OPD"},{label:"12 | Other PITC (PrEP, dental e.t.c)",value:"Other"},{label:"18 | SNS (Social Network Strategies)",value:"SNS"}]}},communityAccessPoints(){return{id:"community_access_points",helpText:"Community distribution points",type:o["b"].TT_SELECT,condition:e=>"Community"===e.accesspoint_type.value,isRequired:()=>!0,finalComputedValue:e=>({tag:"reg",obs:this.service.buildValueText("Location where test took place",""+e.value)}),options:()=>[{label:"13 | VCT",value:"VCT"},{label:"14 | Index",value:"Index"},{label:"15 | VMMC",value:"VMMC"},{label:"16 | Other",value:"Other"},{label:"17 | SNS",value:"SNS"},{label:"19 | Mobile",value:"Mobile"}]}},genderField(){return{id:"gender",helpText:"Recipient's Sex",type:o["b"].TT_SELECT,isRequired:()=>!0,finalComputedValue:e=>({person:e.value}),options:()=>[{label:"Female",value:"F"},{label:"Male",value:"M"}]}},ageField(){return{id:"birthdate",helpText:"Recipient's age",type:o["b"].TT_NUMBER,isRequired:()=>!0,validation:e=>/unknown/i.test(""+e.value)?null:e.value<=10||e.value>=125||isNaN(e.value)?["Invalid Age"]:null,finalComputedValue:e=>({person:{birthdate:f["b"].estimateDateFromAge(e.value),birthdate_estimated:!0}})}},pregnancyStatusField(){return{id:"pregnancy_status",helpText:"Pregnancy Status",type:o["b"].TT_SELECT,isRequired:()=>!0,condition:e=>"F"===e.gender.value,finalComputedValue:e=>({tag:"reg",obs:this.service.buildValueCoded("Pregnancy status",e.value)}),options:()=>[{label:"Non-pregnant",value:"Not Pregnant / Breastfeeding"},{label:"Pregnant",value:"Pregnant woman"},{label:"Breastfeeding",value:"Breastfeeding"}]}},lastHivTestResultField(){return{id:"last_hiv_result",helpText:"Recipient's Last HIV Test Results",type:o["b"].TT_SELECT,isRequired:()=>!0,finalComputedValue:e=>({tag:"reg",obs:this.service.buildValueCoded("Previous HIV Test Results",e.value)}),options:()=>this.mapStrToOptions(["Never Tested","Negative","Positive NOT on ART","Positive on ART","Inconclusive"])}},lastTimeHIVTestedField(){return{id:"last_time_hiv_tested",helpText:"Time since last HIV test",type:o["b"].TT_AGE_INPUT,condition:e=>e.last_hiv_result.value&&"Never Tested"!=e.last_hiv_result.value,isRequired:()=>!0,validation:(e,t)=>{const a=90,i=12,n=24;return parseInt(""+e.other.value)<=0&&!/day/i.test(e.other.timeUnit)?[`Enter ${e.other.timeUnit} greater than zero`]:"Days"===e.other.timeUnit&&parseInt(""+e.other.value)>a?[`Enter ${e.other.timeUnit} less than ${a}, use Weeks Instead`]:"Weeks"===e.other.timeUnit&&parseInt(""+e.other.value)>i?[`Enter ${e.other.timeUnit} less than ${i}, use Months Instead`]:"Months"===e.other.timeUnit&&parseInt(""+e.other.value)>n?[`Enter ${e.other.timeUnit} less than ${n}, use Years Instead`]:"Years"===e.other.timeUnit&&parseInt(""+e.other.value)>parseInt(t.birthdate.value)?[`${e.label} is greater than client's age of ${t.birthdate.value} Years`]:e.other.value.length>1&&"0"===e.other.value[0]||e.other.value.length>1&&"0"===e.other.value[0]?[`Value ${e.other.value} is invalid!`]:null},finalComputedValue:e=>({tag:"reg",obs:this.service.buildObs("Time of HIV test",{value_datetime:e.other.date,value_text:e.value})}),config:{excludeUnits:["Hours"]}}},itemsGivenToClientField(){return{id:"items_given_to_client",helpText:"Items given to the client",type:o["b"].TT_ADHERENCE_INPUT,isRequired:()=>!0,summaryMapValue:e=>e,validation:e=>{if(e.every(e=>""===e.value))return["Values cannot be empty"];if(e.some(e=>/self-test/i.test(e.label)&&(!e.value||e.value<=0)))return["Please enter number of self kits to give client"];const t=3,a=30,i=30,n=5;return e.some(e=>/self-test/i.test(e.label)&&e.value>t)?[`Cannot distribute more than ${t} Self-test kits. Please adjust the number accordingly`]:e.some(e=>"Male condoms"==e.label&&e.value>a)?[`Cannot distribute more than ${a} Male Condoms. Please adjust the number accordingly`]:e.some(e=>"Female condoms"==e.label&&e.value>i)?[`Cannot distribute more than ${i} Female Condoms. Please adjust the number accordingly`]:e.some(e=>/frs/i.test(e.label.toLowerCase())&&e.value>n)?[`Cannot distribute more than ${n} FRS. Please adjust the number accordingly`]:null},options:e=>Object(l["isEmpty"])(e.items_given_to_client)?[{label:"Self-Test Kit",value:""},{label:"Male condoms",value:""},{label:"Female condoms",value:""},{label:"FRS",value:""}]:e.items_given_to_client,finalComputedValue:e=>({tag:"reg",obs:e.filter(e=>e.value).map(e=>this.service.buildValueNumber(e.label,parseInt(""+e.value)))}),config:{noFloat:!0,titles:{label:"Item",value:"Quantity"}}}},hivTestKitDetailsField(){const{initKits:e,getLotNo:t,getExpiryDate:a}=Object(g["b"])();return{id:"test_kit",helpText:"Kit information",type:o["b"].TT_INPUT_ARRAY,config:{columns:[{label:"Kit Name"},{label:"Kit Lot No."},{label:"Kit Expiry Date"}]},init:async()=>(await e(),!0),isRequired:()=>!0,summaryMapValue:e=>{var t;return null===e||void 0===e||null===(t=e.other)||void 0===t?void 0:t.fields},validation:e=>{const t=e.map(e=>e.other.fields).some(e=>e.some(e=>""===e.value));return t?["Some rows are missing data"]:null},condition:()=>!t(g["a"].HIV_SELF_KIT),defaultOutput:e=>{if(this.getSelfKitCount(e)>=1&&t(g["a"].HIV_SELF_KIT))return Array.from({length:this.getSelfKitCount(e)}).map(()=>({label:g["a"].HIV_SELF_KIT,value:t(g["a"].HIV_SELF_KIT),other:{fields:[{label:"Kit name",value:g["a"].HIV_SELF_KIT,other:{obs:()=>this.service.buildValueText("Kit name",g["a"].HIV_SELF_KIT)}},{label:"KitLot No.",value:t(g["a"].HIV_SELF_KIT),other:{obs:()=>this.service.buildValueText("Kit lot number",t(g["a"].HIV_SELF_KIT))}},{label:"Kit Expiry date",value:a(g["a"].HIV_SELF_KIT),other:{obs:()=>this.service.buildValueDate("kit expiry date",a(g["a"].HIV_SELF_KIT))}}]}}))},finalComputedValue:e=>{const t=e.map(e=>e.other.fields);return{obs:t.map(async e=>{const[t,...a]=e.filter(e=>"function"===typeof e.other.obs).map(e=>e.other.obs(e));return{...await t,child:await Promise.all(a)}})}},options:async e=>{if(null!=e.test_kit)return e.test_kit;const i=()=>({label:"Kit Name",value:g["a"].HIV_SELF_KIT,other:{obs:e=>this.service.buildValueText("Kit name",e.value),onclick:(e,t,a,i,n)=>{Object(u["b"])({id:"name",helpText:"Kit Name",type:o["b"].TT_TEXT,isRequired:()=>!0},t=>{e.value=t.value,0===a&&n.forEach(t=>{t.other.fields.forEach(t=>{/name/i.test(t.label)&&""===t.value&&(t.value=e.value)})})})}}}),n=()=>({label:"Kit Lot No.",value:t(g["a"].HIV_SELF_KIT),other:{obs:e=>this.service.buildValueNumber("Kit lot number",e.value),onclick:(e,t,a,i,n)=>{Object(u["b"])({id:"lot",helpText:"Enter Lot Number",type:o["b"].TT_TEXT,isRequired:()=>!0},t=>{e.value=t.value,0===a&&n.forEach(t=>{t.other.fields.forEach(t=>{/lot/i.test(t.label)&&""===t.value&&(t.value=e.value)})})})}}}),r=()=>({label:"Kit Expiry Date",value:a(g["a"].HIV_SELF_KIT),other:{obs:e=>this.service.buildValueDate("kit expiry date",e.value),onclick:(e,t,a,i,n)=>{Object(u["b"])({id:"end_user",helpText:"Kit Expiry Date",type:o["b"].TT_FULL_DATE,isRequired:()=>!0,validation:e=>{if(new Date(e.label)<new Date(this.service.date))return["Expiry date cannot be less than current date "+Object(v["e"])(this.service.date)];const t=p()(e.label).diff(this.service.date,"month");return t<=2?["It's not advisable to use a test kit that will expire in less than 2 months"]:null}},t=>{e.value=t.value,0===a&&n.forEach(t=>{t.other.fields.forEach(t=>{/expiry/i.test(t.label)&&""===t.value&&(t.value=e.value)})})})}}}),s=this.getSelfKitCount(e),l=(e=s)=>Array.from({length:e},()=>({label:"",value:"",other:{fields:[i(),n(),r()]}}));return Array.isArray(e.test_kit)?s<e.test_kit.length?e.test_kit.slice(0,s):s>e.test_kit.length?[...e.test_kit,...l(s-e.test_kit.length)]:e.test_kit:l()}}},selfTestsGivenToClientField(){return{id:"self_test_kits",helpText:"Self-test kit users",type:o["b"].TT_INPUT_ARRAY,isRequired:()=>!0,condition:e=>e.items_given_to_client.some(e=>/self-test/i.test(e.label)&&e.value>0),finalComputedValue:e=>({tag:"reg",obs:e.map(e=>e.other.fields).map(async e=>{const[t,...a]=e.filter(e=>"function"===typeof e.other.obs).map(e=>e.other.obs(e.value,e));return{...await t,child:await Promise.all(a)}})}),summaryMapValue:e=>e.other.fields.map(e=>{var t;const a={...e};return"Age"===a.label&&null!==a&&void 0!==a&&null!==(t=a.other)&&void 0!==t&&t.estimate&&(a.value=a.value+" (Estimated)"),a}),config:{columns:[{label:"End-User"},{label:"Sex"},{label:"Age"},{label:"Approach"},{label:"Result"}]},validation:e=>{const t=e.map(e=>e.other.fields),a=t.some(e=>{const t=e.filter(e=>""!=e.value).length;return t>0&&t<4});if(a)return["Some rows have incomplete data!"];const i=t.some(e=>e.some(e=>""===e.value));return i?["Some rows are missing data"]:null},options:e=>{const t=(e,t,a,i)=>{e.forEach(e=>{var n;if("function"===typeof(null===e||void 0===e||null===(n=e.other)||void 0===n?void 0:n.broadcastlistener)){const n=e.other.broadcastlistener(t,a,i);n&&(e.value=n.value,e.disabled=n.disabled)}})},a=()=>({label:"User",value:"",other:{obs:e=>this.service.buildValueCoded("Self-test end user",e),onclick:async(a,i,n,r,o)=>{const s=o.filter((e,t)=>t!=n),l=[];if(!/Self/.test(JSON.stringify(s))){var c;const t=null===(c=e.last_hiv_result)||void 0===c?void 0:c.value;/positive/.test(t.toLowerCase())||l.push("Self")}Object(u["d"])([...l,"Sexual partner","Other"],e=>{t(i,"User",e,a.value),a.value=e},{title:"Select End-User",preset:null!=a?a.value:"",size:"small-modal"})}}}),i=()=>({label:"Sex",value:"",other:{broadcastlistener:(t,a,i)=>{if("User"===t){if("Self"===a)return{value:e.gender.label,disabled:!0};if("Self"===i)return{value:"",disabled:!1}}},obs:e=>this.service.buildValueCoded("Gender of contact",e),onclick:e=>{Object(u["d"])(["Female","Male"],t=>e.value=t,{title:"Select sex",size:"small-modal",preset:null!=e?e.value:""})}}}),n=()=>({label:"Result",value:"N/A",other:{obs:e=>{if(e&&!/n\/a/i.test(""+e))return this.service.buildValueCoded("Test 1",e)},onclick:(e,a)=>{Object(u["d"])(["Negative","Positive","N/A"],i=>{t(a,"Result",i,e.value),e.value=i},{title:"Directly-assisted HIV Result"})}}}),r=()=>({label:"Age",value:"",other:{broadcastlistener:(t,a)=>{if("User"===t)return"Self"===a?{value:""+e.birthdate.value,disabled:!0}:{value:"",disabled:!1}},obs:(e,t)=>{var a;const i=parseInt(e);if(null!==t&&void 0!==t&&null!==(a=t.other)&&void 0!==a&&a.estimate)return this.service.buildNumericEstimate("Age of contact",i);{const e=f["b"].estimateDateFromAge(i);return this.service.buildObs("Age of contact",{value_datetime:e,value_numeric:i})}},onclick:e=>{Object(u["c"])((t,a)=>{if(t&&parseInt(""+t)>=125)return e.value="",Object(_["e"])("Age exceeds maximum human life expectancy of 124 years");e.value=t,e.other.estimate=a},{title:"Age",preset:" ",toggleButton:"Age is estimated?",noFloat:!0,strictNumbers:!0})}}}),o=()=>({label:"Approach",value:"",other:{broadcastlistener:(e,t)=>{if("User"===e)return"Self"!=t?{value:"Un-assisted",disabled:!0}:{value:"",disabled:!1}},obs:e=>this.service.buildValueCoded("Self-test approach",e),onclick:(e,a)=>{Object(u["d"])(["Directly-assisted","Un-assisted"],i=>{t(a,"Approach",i,e.value),e.value=i},{title:"Select approach",size:"small-modal",preset:null!=e?e.value:""})}}}),s=this.getSelfKitCount(e),l=(e=s)=>Array.from({length:e},()=>({label:"item",value:"N/A",other:{fields:[a(),i(),r(),o(),n()]}}));return Array.isArray(e.self_test_kits)?s<e.self_test_kits.length?e.self_test_kits.slice(0,s):s>e.self_test_kits.length?[...e.self_test_kits,...l(s-e.self_test_kits.length)]:e.self_test_kits:l()}}},visitTypeField(){return{id:"visit_type",helpText:"Visit Type",type:o["b"].TT_HIDDEN,isRequired:()=>!0,computedValue:e=>({tag:"reg",obs:this.service.buildValueCoded("Visit type","Self test distribution")})}},patientDemographics(){return[(()=>{const e=c["a"].getGivenNameField();return e.validation=()=>!0,e.type=o["b"].TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=c["a"].getFamilyNameField();return e.type=o["b"].TT_HIDDEN,e.validation=()=>!0,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=c["a"].getHomeDistrictField();return e.type=o["b"].TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=c["a"].getHomeTaField();return e.type=o["b"].TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=c["a"].getHomeVillageField();return e.type=o["b"].TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=c["a"].getCurrentDistrictField();return e.type=o["b"].TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=c["a"].getCurrentTAfield();return e.type=o["b"].TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=c["a"].getCurrentVillageField();return e.type=o["b"].TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=c["a"].getCellNumberField();return e.type=o["b"].TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})()]}}}),y=a("d959"),D=a.n(y);const E=D()(T,[["render",n]]);t["default"]=E},7365:function(e,t,a){"use strict";a("14d9"),a("13d5");var i,n=a("7a23"),r=a("ad60"),o=a("2ef0"),s=a("0fa1"),l=a("7f35"),u=a("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(i||(i={}));const c=e=>u["b"].toStandardHisDisplayFormat(e),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(l["a"])("Data Integrity Issue Found","Patient died on "+c(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?i.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?i.CHANGE_PATIENT_OUTCOME:i.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const a=await Object(l["a"])("Data integrity issue found","",`Session date ${c(t)} is less than birth date of ${c(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===a?i.CHANGE_SESSION_DATE:i.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:a,apiDate:n})=>{const r=await Object(l["c"])("Please select a provider for "+t,`BDE: ${c(a)} | Current: ${c(n)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===r.action?{value:-1,flowState:i.GO_TO_PATIENT_DASHBOARD}:{value:r.selection,flowState:i.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var p=a("c21d"),h=a("7920"),m=a("b5e4"),b=a("8e8b"),v=a("fe70"),f=Object(n["defineComponent"])({components:{HisStandardForm:h["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},formLabel:"",ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.formLabel=(""+e.name).toUpperCase(),this.patientID=parseInt(e.params.patient_id),b["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const a={};if(a[i.SET_PROVIDER]=e=>{const[t]=e.split(" "),a=Object(o["find"])(this.providers,{username:t});return a&&(this.providerID=a.person_id),i.CONTINUE},a[i.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),i.EXIT),a[i.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),i.EXIT),a[i.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),i.EXIT),e in a)return a[e](t)},async checkEncounterGuidelines(){const e=Object(p["a"])(this.facts,d);for(const o in e){var t,a;const s=e[o];if(null!==s&&void 0!==s&&null!==(t=s.actions)&&void 0!==t&&t.alert){var n;const e=this.runflowState(await(null===s||void 0===s||null===(n=s.actions)||void 0===n?void 0:n.alert(this.facts)));if(e===i.EXIT)return}if(null!==s&&void 0!==s&&null!==(a=s.actions)&&void 0!==a&&a.selection){var r;const e=await(null===s||void 0===s||null===(r=s.actions)||void 0===r?void 0:r.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await b["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=e.programID===r["a"].getProgramID(),this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(m["c"])(""+e)}this.facts.sessionDate=r["a"].getSessionDate(),this.facts.apiDate=r["a"].getCachedApiDate(),this.facts.isBdeMode=r["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",r["a"].isBDE()&&(this.providers=await b["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const a=e.username.toUpperCase(),i=t.username.toUpperCase();return a<i?-1:a>i?1:0}).map(e=>{var t;let a=""+e.username;if(!Object(o["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var i;const[t]=(null===(i=e.person)||void 0===i?void 0:i.names)||[];a+=` (${t.given_name} ${t.family_name})`}return a}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>"string"===typeof e||"number"===typeof e?{label:e,value:e}:e)},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){(await v["h"].create({backdropDismiss:!1,message:"Checking Next task.."})).present();try{await Object(s["b"])(this.patientID,this.$router,this.$route)}catch(e){console.error(e)}v["h"].getTop().then(e=>e&&v["h"].dismiss())},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},toConditionalOptions(e){const t=[];for(const a of e)("boolean"!==typeof a[1]||a[1])&&t.push(this.toOption(a[0]));return t},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const a=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const a=t.obs?t.obs:t;return Array.isArray(a)?e=e.concat(a):"function"===typeof a?e.push(a()):e.push(a),e},[]);return Promise.all(a)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(a){return!1}},validateSeries(e){try{for(const t in e){const a=e[t]();if(a)return a}}catch(t){return[t]}}}});const _=f;t["a"]=_},7920:function(e,t,a){"use strict";var i=a("7a23");function n(e,t,a,n,r,o){return Object(i["openBlock"])(),Object(i["createBlock"])(Object(i["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var r=a("9441"),o=Object(i["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:r["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=a("d959"),l=a.n(s);const u=l()(o,[["render",n]]);t["a"]=u},"80b5":function(e,t,a){"use strict";a("13d5");var i=a("e86e"),n=a("d95e"),r=a("2706"),o=a("d10e"),s=a("b446"),l=a("9283"),u=a("23e6"),c=a("2ef0"),d=a("b5e4"),p=a("5713"),h=a("1c74");function m(e){return e.map(e=>({label:e,value:e}))}t["a"]={resolvePerson(e){let t={};for(const a in e){const i=e[a];Object(c["isPlainObject"])(i)&&"person"in i&&(Object(c["isPlainObject"])(i.person)?t={...t,...i.person}:t[a]=i["person"])}return t},getGivenNameField(){return{id:"given_name",helpText:"First name",type:n["b"].TT_TEXT,computedValue:e=>({person:e.value}),validation:e=>r["a"].isName(e),options:async e=>{if(e.given_name){const t=await o["a"].searchGivenName(e.given_name.value);return m(t)}return[]}}},getFamilyNameField(){return{id:"family_name",helpText:"Last name",type:n["b"].TT_TEXT,computedValue:e=>({person:e.value}),validation:e=>r["a"].isName(e),options:async e=>{if(e.family_name){const t=await o["a"].searchFamilyName(e.family_name.value);return m(t)}return[]}}},getGenderField(e){return{id:"gender",helpText:"Sex",type:n["b"].TT_SELECT,computedValue:e=>({person:e.value}),validation:e=>r["a"].required(e),options:()=>Object(c["isEmpty"])(e)?[{label:"Female",value:"F"},{label:"Male",value:"M"}]:e}},getDobConfig(e=!0){return{id:"birth_date",summaryLabel:"Date of Birth",helpText:e?"Birth":"",required:!0,minDate:()=>l["b"].estimateDateFromAge(100),maxDate:()=>o["a"].getSessionDate(),estimation:{allowUnknown:!0,allowUnknownMonthDay:!0,estimationFieldType:s["a"].AGE_ESTIMATE_FIELD},computeValue:(e,t)=>({date:e,isEstimate:t,person:{birthdate:e,birthdate_estimated:t}})}},getHomeRegionField(){return{id:"home_region",helpText:"Region of origin",type:n["b"].TT_SELECT,group:"person",requireNext:!1,computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:()=>Object(i["e"])()}},getHomeDistrictField(){return{id:"home_district",helpText:"District of origin",type:n["b"].TT_SELECT,requireNext:!1,dynamicHelpText:e=>e.home_region&&e.home_region.label.match(/foreign/i)?"Home Country":"District of origin",computedValue:e=>({person:e.label}),options:e=>Object(i["a"])(e.home_region.value)}},addCustomLocationBtnForTAorVillage(e,t){return{name:"Add "+e,slot:"end",color:"success",onClick:async(a,i,n)=>{if("string"!=typeof n.filter||n.filter.length<3)return Object(d["e"])("Please enter a valid "+e);if(!Object(c["isEmpty"])(n.filtered))return Object(d["e"])("Can't add existing "+e);const r=await Object(d["a"])(`Do you want to add ${e} ${n.filter}?`);if(!r)return;const o=await p["a"].createAddress(e,n.filter,a[t].value);if(!o)return Object(d["e"])("Unable to add "+e);n.filter=n.filter.toUpperCase()}}},getHomeTaField(){return{id:"home_traditional_authority",helpText:"TA of origin",type:n["b"].TT_SELECT,requireNext:!1,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("TA","home_district")]},defaultOutput:()=>({label:"N/A",value:"N/A"}),defaultComputedOutput:e=>e.home_region&&e.home_region.label.match(/foreign/i)?{person:"Unknown"}:null,computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t)=>Object(i["g"])(e.home_district.value,t)}},getHomeVillageField(){return{id:"home_village",helpText:"Village of origin",type:n["b"].TT_SELECT,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("Village","home_traditional_authority")]},requireNext:!1,defaultOutput:()=>({label:"N/A",value:"N/A"}),defaultComputedOutput:e=>e.home_region&&e.home_region.label.match(/foreign/i)?{person:"Unknown"}:null,computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t)=>Object(i["h"])(e.home_traditional_authority.value,t)}},getCurrentRegionField(){return{id:"current_region",helpText:"Current Region of Residence",requireNext:!1,type:n["b"].TT_SELECT,computedValue:(e,t)=>/use home/i.test(""+e.value)?{person:{current_region:t.home_region.label,current_district:t.home_district.label,current_traditional_authority:t.home_traditional_authority.label,current_village:t.home_village.label}}:{person:e.label},validation:e=>r["a"].required(e),options:()=>Object(i["e"])(),config:{footerBtns:[{name:"Same as origin",slot:"end",onClickComponentEvents:{setValue:()=>"Use Home Address"},onClick:()=>"Use Home Address"}]}}},getCurrentDistrictField(){return{id:"current_district",helpText:"District",requireNext:!1,type:n["b"].TT_SELECT,dynamicHelpText:e=>e.current_region&&e.current_region.label.match(/foreign/i)?"Current Country":"Current District of Residence",computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:e=>Object(i["a"])(e.current_region.value)}},getCurrentTAfield(){return{id:"current_traditional_authority",helpText:"Current TA of Residence",requireNext:!1,type:n["b"].TT_SELECT,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("TA","current_district")]},defaultOutput:e=>{var t;if(!/use home/i.test(""+(null===(t=e.current_region)||void 0===t?void 0:t.label)))return{label:"N/A",value:"N/A"}},defaultComputedOutput:e=>e.current_region&&e.current_region.label.match(/foreign/i)?{person:"Unknown"}:null,computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t)=>Object(i["g"])(e.current_district.value,t)}},getCurrentVillageField(){return{id:"current_village",helpText:"Current Village of Residence",requireNext:!1,type:n["b"].TT_SELECT,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("Village","current_traditional_authority")]},defaultOutput:e=>{var t;if(!/use home/i.test(""+(null===(t=e.current_region)||void 0===t?void 0:t.label)))return{label:"N/A",value:"N/A"}},defaultComputedOutput:e=>e.current_region&&e.current_region.label.match(/foreign/i)?{person:"Unknown"}:null,computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t)=>Object(i["h"])(e.current_traditional_authority.value,t)}},getCellNumberField(){return{id:"cell_phone_number",helpText:"Cell phone number",group:"person",type:n["b"].TT_TEXT,computedValue:e=>({person:e.label}),validation:e=>{if(e){if(e.value.match(/Unknown|n\/a/i))return null;for(const t of(""+e.value).split("/"))if(r["a"].isMWPhoneNumber({label:t,value:t}))return[`"${t}" is not a valid phone number`];return null}return["Phone number cannot be empty"]},config:{customKeyboard:[[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],[["+265","/"],["Unknown","N/A"],["Delete"]]]}}},getLandmarkFields(){return[{id:"default_landmarks",proxyID:"landmark",helpText:"Closest Landmark or Plot Number",type:n["b"].TT_SELECT,appearInSummary:e=>"Other"!=e.default_landmarks.value,computedValue:e=>({person:e.value}),validation:e=>r["a"].required(e),options:()=>m(["Catholic Church","CCAP","Seventh Day","Mosque","Primary School","Borehole","Secondary School","College","Market","Football Ground","Other"])},{id:"other_landmark",proxyID:"landmark",helpText:"Closest Landmark or Plot Number",type:n["b"].TT_NOTE,appearInSummary:e=>"Other"===e.default_landmarks.value,condition:e=>"Other"===e.default_landmarks.value,computedValue:e=>({person:e.value}),validation:e=>r["a"].required(e)}]},getFacilityLocationField(){return{id:"location",helpText:"Please select facility name",type:n["b"].TT_SELECT,computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t="")=>Object(i["b"])(t),config:{showKeyboard:!0,isFilterDataViaApi:!0}}},getPersonNameFromPersonObj(e,t){return e.names.length?e.names[0][t]:""},getAttrFromPersonObj(e,t){return Array.isArray(e.person_attributes)&&e.person_attributes.length?e.person_attributes.reduce((e,a)=>a.type.name===t?a.value:e,""):""},getAddressFromPersonObj(e,t){if(Array.isArray(e.addresses)&&e.addresses.length){const a=e.addresses[0],i={home_district:"address2",home_village:"neighborhood_cell",home_traditional_authority:"county_district",current_village:"city_village",current_traditional_authority:"township_division",current_district:"state_province"};return a[i[t]]}return""},mapPersonData(e){const t=this.getPersonNameFromPersonObj(e,"given_name"),a=this.getPersonNameFromPersonObj(e,"family_name"),i=this.getAddressFromPersonObj(e,"home_district"),n=this.getAddressFromPersonObj(e,"home_village"),r=this.getAddressFromPersonObj(e,"home_traditional_authority");return{id:e.person_id,name:`${t} ${a}`,given_name:t,family_name:a,gender:e.gender,birth_date:e.birthdate,birthdate_estimated:e.birthdate_estimated,home_district:i,home_village:n,home_traditional_authority:r,home_address:`${i} ${n}`,current_district:this.getAddressFromPersonObj(e,"current_district"),current_traditional_authority:this.getAddressFromPersonObj(e,"current_traditional_authority"),cell_phone_number:this.getAttrFromPersonObj(e,"Cell Phone Number"),landmark:this.getAttrFromPersonObj(e,"Landmark Or Plot Number")}},getPersonAttributeOptions(e){const t=new u["a"](e),a=(e,t)=>t in e?e[t]():"-";return{label:t.getPatientInfoString(),value:t.getID()||t.getNationalID(),other:{npid:t.getNationalID(),person:e,options:[{label:"National ID",value:a(t,"getNationalID")},{label:"ARV Number",value:a(t,"getArvNumber"),other:{show:()=>"ART"===h["e"].getProgramName()}},{label:"Name",value:a(t,"getFullName")},{label:"Sex",value:a(t,"getGender")},{label:"Birthdate",value:a(t,"getBirthdate")},{label:"Home District",value:a(t,"getHomeDistrict")},{label:"Home Village",value:a(t,"getHomeVillage")},{label:"Current District",value:a(t,"getCurrentDistrict")},{label:"Current T/A",value:a(t,"getCurrentTA")},{label:"Cellphone",value:a(t,"getPhoneNumber")}]}}}}},c21d:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("14d9");function i(e,t){const a=[],i=[-1,"",null,void 0];for(const n in t){if(!(n in e))continue;const r=e[n];i.includes(r)?a.push(!1):a.push(t[n](r,e))}return a.every(Boolean)}function n(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function r(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function o(e,t,a="",o="",s="priority"){const l=[];for(const n in t){const r=t[n],s=[r.target&&a&&r.target!=a,r.targetEvent&&o&&r.targetEvent!=o];s.some(Boolean)||i(e,r.conditions)&&(r.title=n,r.description&&(r.description.text=r.description.info(e)),l.push(r))}return"priority"===s?n(l):r(l)}},cd10:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var i,n=a("1c74"),r=a("2ef0"),o=a("7a23");function s(){const e=Object(o["ref"])([]),t=async()=>{try{const e=await n["e"].getJson("user_properties",{property:"HTS_PROGRAMS"});return e.property_value.split(",").map(e=>e.trim())}catch(e){console.error(""+e)}},a=async()=>{const a=[{kitName:i.UNIGOLD,lotNo:"",expiryDate:"",testGroup:"profession_hiv_kit",visible:!0,userProp:"HIV Test"},{kitName:i.DETERMINE,lotNo:"",expiryDate:"",testGroup:"profession_hiv_kit",visible:!0,userProp:"HIV Test"},{kitName:i.BIOLINE,lotNo:"",expiryDate:"",testGroup:"profession_hiv_kit",visible:!0,userProp:"HIV Test"},{kitName:i.HIV_SELF_KIT,lotNo:"",expiryDate:"",visible:!0},{kitName:i.SYPHILIS,lotNo:"",expiryDate:"",visible:!0,userProp:"Syphilis Test"},{kitName:i.HEPATITIS,lotNo:"",expiryDate:"",visible:!0,userProp:"Hepatitis B Test"}];try{const o=await t(),s=await n["e"].getJson("user_properties",{property:i.TEST_KIT_USER_PROPERTY}),l=JSON.parse(s.property_value);a.forEach(e=>{e.userProp&&(e.visible=o.includes(e.userProp));const t=Object(r["find"])(l,{kitName:e.kitName});t&&(e.lotNo=t.lotNo,e.expiryDate=t.expiryDate)}),e.value=a.filter(e=>e.visible)}catch(o){e.value=a,console.error(""+o)}},s=t=>{const a=Object(r["find"])(e.value,{kitName:t});return a?new Date(a.expiryDate)<=new Date(n["e"].getSessionDate())?"":a.lotNo:""},l=t=>{const a=Object(r["find"])(e.value,{kitName:t});return a?new Date(a.expiryDate)<=new Date(n["e"].getSessionDate())?"":a.expiryDate:""},u=async()=>{const t=await n["e"].postJson("user_properties",{property:i.TEST_KIT_USER_PROPERTY,property_value:JSON.stringify(e.value)});return!!t};return{kits:e,initKits:a,saveKits:u,getLotNo:s,getExpiryDate:l}}(function(e){e["TEST_KIT_USER_PROPERTY"]="hts_user_assigned_kits",e["HIV_SELF_KIT"]="HIV self-kit",e["SYPHILIS"]="Syphilis",e["HEPATITIS"]="Hepatitis B",e["BIOLINE"]="Bioline",e["DETERMINE"]="Determine",e["UNIGOLD"]="Unigold"})(i||(i={}))},d10e:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var i=a("ade3"),n=a("1c74");class r extends n["e"]{constructor(e){super(),Object(i["a"])(this,"person",void 0),this.person=e}create(){return n["e"].postJson("/people",this.person)}update(e){return n["e"].putJson("people/"+e,{...this.person,program_id:n["e"].getProgramID()})}static searchFamilyName(e){return super.getJson("/search/family_name",{search_string:e})}static searchGivenName(e){return super.getJson("/search/given_name",{search_string:e})}static async getPersonFullName(e){const t=await super.getJson(`/people/${e}/names`);return t&&t.length?t[0].given_name+" "+t[0].family_name:""}}},e86e:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"f",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"a",(function(){return c})),a.d(t,"g",(function(){return d})),a.d(t,"h",(function(){return p}));var i=a("5713"),n=a("2ef0");async function r(e=""){const t=await i["a"].getFacilities({name:e});return t.filter(e=>!Object(n["isEmpty"])(e)&&""!=e.name.trim()).map(e=>({label:e.name,value:e.location_id,other:e}))}async function o(e=""){const t=await i["a"].getLabs({search_name:e});return t.map(e=>({label:e,value:e}))}async function s(e=""){const t=await i["a"].getFacilities({name:e,tag:"Facility adult sections"});return t.map(e=>({label:e.name,value:e.name,other:e}))}async function l(){const e=await i["a"].getSpecialistClinics();return e.map(e=>({label:e.name,value:e.name,other:e}))}async function u(){const e=await i["a"].getRegions();return e.map(e=>({label:e.name,value:e.region_id,other:e}))}async function c(e){const t=await i["a"].getDistricts(e);return t.map(e=>({label:e.name,value:e.district_id,other:e}))}async function d(e,t=""){const a=await i["a"].getTraditionalAuthorities(e,t);return a.map(e=>({label:e.name,value:e.traditional_authority_id,other:e}))}async function p(e,t=""){const a=await i["a"].getVillages(e,t);return a.map(e=>({label:e.name,value:e.village_id,other:e}))}}}]);
//# sourceMappingURL=chunk-5a6bc157.1865b53c.js.map