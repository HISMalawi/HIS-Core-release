(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-169b062e"],{"5ca2":function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var a=i("cc6f"),n=i("b89f");class r extends a["a"]{constructor(e,t){super(e,121,t)}static getListOfRadiologyTests(e){return super.getJson("radiology_set",{id:e})}getPatientExaminations(){return a["a"].getJson("radiology/examinations",{patient_id:this.patientID})}createOrder(e){return a["a"].postJson("orders/radiology",e)}printExamination(e){const t=new n["a"];return t.printLbl("orders/radiology?accession_number="+e)}}},7365:function(e,t,i){"use strict";i("14d9"),i("13d5");var a,n=i("7a23"),r=i("ad60"),o=i("2ef0"),s=i("0fa1"),l=i("7f35"),u=i("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(a||(a={}));const c=e=>u["b"].toStandardHisDisplayFormat(e),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(l["a"])("Data Integrity Issue Found","Patient died on "+c(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?a.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?a.CHANGE_PATIENT_OUTCOME:a.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const i=await Object(l["a"])("Data integrity issue found","",`Session date ${c(t)} is less than birth date of ${c(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===i?a.CHANGE_SESSION_DATE:a.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:i,apiDate:n})=>{const r=await Object(l["c"])("Please select a provider for "+t,`BDE: ${c(i)} | Current: ${c(n)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===r.action?{value:-1,flowState:a.GO_TO_PATIENT_DASHBOARD}:{value:r.selection,flowState:a.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var p=i("c21d"),h=i("7920"),m=i("b5e4"),f=i("8e8b"),b=i("b432"),v=i("5a0c"),g=i.n(v),_=i("cc6f"),y=i("2ed9"),T=Object(n["defineComponent"])({components:{HisStandardForm:h["a"]},data:()=>({offlineID:null,patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{age:-1,gender:"",birthDate:"",sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,outcome:"",outcomeStartDate:"",village:"",district:"",currentTA:""},formLabel:"",ready:!1}),created(){this.$route.params.patient_id&&(this.offlineID=this.$route.params.patient_id,this.patientID=parseInt(""+this.$route.params.patient_id),this.goOffline()?this.initOfflineData():f["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,Object(o["isEmpty"])(this.patient)||Object(b["a"])().cachePatient(this.patient),this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0}).catch(e=>console.log(e))}).catch(()=>{this.goOffline()&&this.initOfflineData()})}))},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{goOffline(){return!b["c"].value||b["b"].value},isOnline(){return b["c"].value},isOfflineMode(){return b["b"].value},initOfflineData(){var e;const t=Object(b["a"])().findByID(this.offlineID),i=null===t||void 0===t||null===(e=t.personParams)||void 0===e?void 0:e.person;i&&(this.facts.birthDate=i.birthdate,this.facts.age=g()(r["a"].getSessionDate()).diff(this.facts.birthDate,"years"),this.facts.district=i.current_district,this.facts.village=i.current_village,this.facts.currentTA=i.current_traditional_authority,this.facts.gender=i.gender,this.ready=!0)},async saveFormEncounterAndProceed(e={}){let t="Pending",i=!1,a=null;try{const t=await _["a"].buildValueText("Device",Object(y["f"])());a=[...await this.resolveObs(e.computedData),t]}catch(n){return console.error(""+n),Object(m["e"])("Unable to resolve observations")}if(!this.isOfflineMode()){try{const n=new _["a"](this.patientID,e.encounterTypeID,this.providerID);await n.createEncounter()&&await n.saveObservationList(a)&&(t="Success",i=!0),"function"===typeof e.callback&&await e.callback(n)}catch(n){i=!1,/NetworkError|Failed to fetch/i.test(""+n)?t="NetworkError":(t="Exception",console.error("Exception while saving an encounter: "+n))}if("Exception"===t)return Object(m["c"])("An error has occured!")}Object(b["a"])().saveObsOffline({observations:a,id:this.offlineID,uploadStatus:t,encounterName:this.$route.name,encounterTypeID:e.encounterTypeID,meta:e.formData,labOrders:e.labOrders,created:i}),e.skipNextTask||this.nextTask()},runflowState(e,t=null){const i={};if(i[a.SET_PROVIDER]=e=>{const[t]=e.split(" "),i=Object(o["find"])(this.providers,{username:t});return i&&(this.providerID=i.person_id),a.CONTINUE},i[a.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),a.EXIT),i[a.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),a.EXIT),i[a.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),a.EXIT),e in i)return i[e](t)},async checkEncounterGuidelines(){const e=Object(p["a"])(this.facts,d);for(const o in e){var t,i;const s=e[o];if(null!==s&&void 0!==s&&null!==(t=s.actions)&&void 0!==t&&t.alert){var n;const e=this.runflowState(await(null===s||void 0===s||null===(n=s.actions)||void 0===n?void 0:n.alert(this.facts)));if(e===a.EXIT)return}if(null!==s&&void 0!==s&&null!==(i=s.actions)&&void 0!==i&&i.selection){var r;const e=await(null===s||void 0===s||null===(r=s.actions)||void 0===r?void 0:r.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await f["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=e.programID===r["a"].getProgramID(),this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(m["c"])(""+e)}this.facts.currentTA=this.patient.getCurrentTA(),this.facts.district=this.patient.getCurrentDistrict(),this.facts.village=this.patient.getCurrentVillage(),this.facts.sessionDate=r["a"].getSessionDate(),this.facts.apiDate=r["a"].getCachedApiDate(),this.facts.isBdeMode=r["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.age=this.patient.getAge(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",r["a"].isBDE()&&(this.providers=await f["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const i=e.username.toUpperCase(),a=t.username.toUpperCase();return i<a?-1:i>a?1:0}).map(e=>{var t;let i=""+e.username;if(!Object(o["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var a;const[t]=(null===(a=e.person)||void 0===a?void 0:a.names)||[];i+=` (${t.given_name} ${t.family_name})`}return i}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>"string"===typeof e||"number"===typeof e?{label:e,value:e}:e)},patientDashboardUrl(){return"/patient/dashboard/"+this.$route.params.patient_id},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){try{const e=this.offlineID||this.patientID;await Object(s["b"])(e,this.$router,this.$route)}catch(e){console.error("Workflow error "+e),this.gotoPatientDashboard()}},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},toConditionalOptions(e){const t=[];for(const i of e)("boolean"!==typeof i[1]||i[1])&&t.push(this.toOption(i[0]));return t},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const i=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const i=t.obs?t.obs:t;return Array.isArray(i)?e=e.concat(i):"function"===typeof i?e.push(i()):e.push(i),e},[]);return Promise.all(i)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(i){return!1}},validateSeries(e){try{for(const t in e){const i=e[t]();if(i)return i}}catch(t){return[t]}}}});const O=T;t["a"]=O},7920:function(e,t,i){"use strict";var a=i("7a23");function n(e,t,i,n,r,o){return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var r=i("9441"),o=Object(a["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:r["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=i("d959"),l=i.n(s);const u=l()(o,[["render",n]]);t["a"]=u},"80b5":function(e,t,i){"use strict";i("13d5");var a=i("e86e"),n=i("d95e"),r=i("2706"),o=i("d10e"),s=i("b446"),l=i("9283"),u=i("23e6"),c=i("2ef0"),d=i("b5e4"),p=i("5713"),h=i("1c74");function m(e){return e.map(e=>({label:e,value:e}))}t["a"]={resolvePerson(e){let t={};for(const i in e){const a=e[i];Object(c["isPlainObject"])(a)&&"person"in a&&(Object(c["isPlainObject"])(a.person)?t={...t,...a.person}:t[i]=a["person"])}return t},getGivenNameField(){return{id:"given_name",helpText:"First name",type:n["b"].TT_TEXT,computedValue:e=>({person:e.value}),validation:e=>r["a"].isName(e),options:async e=>{if(e.given_name){const t=await o["a"].searchGivenName(e.given_name.value);return m(t)}return[]}}},getFamilyNameField(){return{id:"family_name",helpText:"Last name",type:n["b"].TT_TEXT,computedValue:e=>({person:e.value}),validation:e=>r["a"].isName(e),options:async e=>{if(e.family_name){const t=await o["a"].searchFamilyName(e.family_name.value);return m(t)}return[]}}},getGenderField(e){return{id:"gender",helpText:"Sex",type:n["b"].TT_SELECT,computedValue:e=>({person:e.value}),validation:e=>r["a"].required(e),options:()=>Object(c["isEmpty"])(e)?[{label:"Female",value:"F"},{label:"Male",value:"M"}]:e}},getDobConfig(e=!0){return{id:"birth_date",summaryLabel:"Date of Birth",helpText:e?"Birth":"",required:!0,minDate:()=>l["b"].estimateDateFromAge(100),maxDate:()=>o["a"].getSessionDate(),estimation:{allowUnknown:!0,allowUnknownMonthDay:!0,estimationFieldType:s["a"].AGE_ESTIMATE_FIELD},computeValue:(e,t)=>({date:e,isEstimate:t,person:{birthdate:e,birthdate_estimated:t}})}},getHomeRegionField(){return{id:"home_region",helpText:"Region of origin",type:n["b"].TT_SELECT,group:"person",requireNext:!1,computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:()=>Object(a["e"])()}},getHomeDistrictField(){return{id:"home_district",helpText:"District of origin",type:n["b"].TT_SELECT,requireNext:!1,summaryMapValue:(e,t)=>{var i;return{label:/foreign/i.test(""+(null===t||void 0===t||null===(i=t.home_region)||void 0===i?void 0:i.label))?"Home Country":"District of origin",value:e.label}},dynamicHelpText:e=>{var t;return/foreign/i.test(""+(null===e||void 0===e||null===(t=e.home_region)||void 0===t?void 0:t.label))?"Home Country":"District of origin"},computedValue:e=>({person:e.label}),options:e=>Object(a["a"])(e.home_region.value)}},addCustomLocationBtnForTAorVillage(e,t){return{name:"Add "+e,slot:"end",color:"success",onClick:async(i,a,n)=>{if("string"!=typeof n.filter||n.filter.length<3)return Object(d["e"])("Please enter a valid "+e);if(!Object(c["isEmpty"])(n.filtered))return Object(d["e"])("Can't add existing "+e);const r=await Object(d["a"])(`Do you want to add ${e} ${n.filter}?`);if(!r)return;const o=await p["a"].createAddress(e,n.filter,i[t].value);if(!o)return Object(d["e"])("Unable to add "+e);n.filter=n.filter.toUpperCase()}}},getHomeTaField(){return{id:"home_traditional_authority",helpText:"TA of origin",type:n["b"].TT_SELECT,requireNext:!1,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("TA","home_district")]},defaultOutput:()=>({label:"N/A",value:"N/A"}),computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t)=>Object(a["g"])(e.home_district.value,t)}},getHomeVillageField(){return{id:"home_village",helpText:"Village of origin",type:n["b"].TT_SELECT,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("Village","home_traditional_authority")]},requireNext:!1,defaultOutput:()=>({label:"N/A",value:"N/A"}),computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t)=>Object(a["h"])(e.home_traditional_authority.value,t)}},getCurrentRegionField(){return{id:"current_region",helpText:"Region of current residence",requireNext:!1,type:n["b"].TT_SELECT,computedValue:(e,t)=>/use home/i.test(""+e.value)?{person:{current_region:t.home_region.label,current_district:t.home_district.label,current_traditional_authority:t.home_traditional_authority.label,current_village:t.home_village.label}}:{person:e.label},validation:e=>r["a"].required(e),options:()=>Object(a["e"])(),config:{footerBtns:[{name:"Same as origin",slot:"end",onClickComponentEvents:{setValue:()=>"Use Home Address"},onClick:()=>"Use Home Address"}]}}},getCurrentDistrictField(){return{id:"current_district",helpText:"District",requireNext:!1,type:n["b"].TT_SELECT,summaryMapValue:(e,t)=>{var i;return{label:/foreign/i.test(""+(null===t||void 0===t||null===(i=t.home_region)||void 0===i?void 0:i.label))?"Current Country":"District of current residence",value:e.label}},dynamicHelpText:e=>e.current_region&&e.current_region.label.match(/foreign/i)?"Current Country":"District of current residence",computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:e=>Object(a["a"])(e.current_region.value)}},getCurrentTAfield(){return{id:"current_traditional_authority",helpText:"TA of current residence",requireNext:!1,type:n["b"].TT_SELECT,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("TA","current_district")]},defaultOutput:e=>{var t;if(!/use home/i.test(""+(null===(t=e.current_region)||void 0===t?void 0:t.label)))return{label:"N/A",value:"N/A"}},computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t)=>Object(a["g"])(e.current_district.value,t)}},getCurrentVillageField(){return{id:"current_village",helpText:"Village of current residence",requireNext:!1,type:n["b"].TT_SELECT,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("Village","current_traditional_authority")]},defaultOutput:e=>{var t;if(!/use home/i.test(""+(null===(t=e.current_region)||void 0===t?void 0:t.label)))return{label:"N/A",value:"N/A"}},computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t)=>Object(a["h"])(e.current_traditional_authority.value,t)}},getCellNumberField(){return{id:"cell_phone_number",helpText:"Cell phone number",group:"person",type:n["b"].TT_TEXT,computedValue:e=>({person:e.label}),validation:e=>{if(e){if(e.value.match(/Unknown|n\/a/i))return null;for(const t of(""+e.value).split("/"))if(r["a"].isMWPhoneNumber({label:t,value:t}))return[`"${t}" is not a valid phone number`];return null}return["Phone number cannot be empty"]},config:{customKeyboard:[[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],[["+265","/"],["Unknown","N/A"],["Delete"]]]}}},getLandmarkFields(){return[{id:"default_landmarks",proxyID:"landmark",helpText:"Closest Landmark or Plot Number",type:n["b"].TT_SELECT,appearInSummary:e=>"Other"!=e.default_landmarks.value,computedValue:e=>({person:e.value}),validation:e=>r["a"].required(e),options:()=>m(["Catholic Church","CCAP","Seventh Day","Mosque","Primary School","Borehole","Secondary School","College","Market","Football Ground","Other"])},{id:"other_landmark",proxyID:"landmark",helpText:"Closest Landmark or Plot Number",type:n["b"].TT_NOTE,appearInSummary:e=>"Other"===e.default_landmarks.value,condition:e=>"Other"===e.default_landmarks.value,computedValue:e=>({person:e.value}),validation:e=>r["a"].required(e)}]},getFacilityLocationField(){return{id:"location",helpText:"Please select facility name",type:n["b"].TT_SELECT,computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t="")=>Object(a["b"])(t),config:{showKeyboard:!0,isFilterDataViaApi:!0}}},getPersonNameFromPersonObj(e,t){return e.names.length?e.names[0][t]:""},getAttrFromPersonObj(e,t){return Array.isArray(e.person_attributes)&&e.person_attributes.length?e.person_attributes.reduce((e,i)=>i.type.name===t?i.value:e,""):""},getAddressFromPersonObj(e,t){if(Array.isArray(e.addresses)&&e.addresses.length){const i=e.addresses[0],a={home_district:"address2",home_village:"neighborhood_cell",home_traditional_authority:"county_district",current_village:"city_village",current_traditional_authority:"township_division",current_district:"state_province"};return i[a[t]]}return""},mapPersonData(e){const t=this.getPersonNameFromPersonObj(e,"given_name"),i=this.getPersonNameFromPersonObj(e,"family_name"),a=this.getAddressFromPersonObj(e,"home_district"),n=this.getAddressFromPersonObj(e,"home_village"),r=this.getAddressFromPersonObj(e,"home_traditional_authority");return{id:e.person_id,name:`${t} ${i}`,given_name:t,family_name:i,gender:e.gender,birth_date:e.birthdate,birthdate_estimated:e.birthdate_estimated,home_district:a,home_village:n,home_traditional_authority:r,home_address:`${a} ${n}`,current_district:this.getAddressFromPersonObj(e,"current_district"),current_traditional_authority:this.getAddressFromPersonObj(e,"current_traditional_authority"),cell_phone_number:this.getAttrFromPersonObj(e,"Cell Phone Number"),landmark:this.getAttrFromPersonObj(e,"Landmark Or Plot Number")}},getPersonAttributeOptions(e){const t=new u["a"](e),i=(e,t)=>t in e?e[t]():"-";return{label:t.getPatientInfoString(),value:t.getID()||t.getNationalID(),other:{patientID:t.getID(),npid:t.getNationalID(),person:e,options:[{label:"National ID",value:i(t,"getNationalID")},{label:"ARV Number",value:i(t,"getArvNumber"),other:{show:()=>"ART"===h["e"].getProgramName()}},{label:"Name",value:i(t,"getFullName")},{label:"Sex",value:i(t,"getGender")},{label:"Birthdate",value:i(t,"getBirthdate")},{label:"Home District",value:i(t,"getHomeDistrict")},{label:"Home Village",value:i(t,"getHomeVillage")},{label:"Current District",value:i(t,"getCurrentDistrict")},{label:"Current T/A",value:i(t,"getCurrentTA")},{label:"Cellphone",value:i(t,"getPhoneNumber")}]}}}}},b14f:function(e,t,i){"use strict";i.r(t);var a=i("7a23");function n(e,t,i,n,r,o){const s=Object(a["resolveComponent"])("his-standard-form"),l=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createBlock"])(l,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{fields:e.fields,onFinishAction:e.onFinish,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}i("14d9");var r=i("7365"),o=i("7920"),s=i("d867"),l=i("d95e"),u=i("2706"),c=i("5ca2"),d=i("1c74");class p extends d["e"]{constructor(){super()}static getInternalSections(){return super.getJson("internal_sections")}static createInternalSection(e){return super.postJson("internal_sections",{name:e})}}var h=i("2ef0"),m=i("b5e4"),f=i("80b5"),b=i("f149"),v=Object(a["defineComponent"])({mixins:[r["a"]],components:{IonPage:s["D"],HisStandardForm:o["a"]},data:()=>({service:{},examinationOptions:[],defaultExternalLocation:"",detailedExaminationOptions:[]}),watch:{ready:{handler(e){e&&(this.service=new c["a"](this.patientID,this.providerID),this.fields.push(this.listOfRadiologyTestsField()),this.fields.push(this.examinationField()),this.fields.push(this.detailedExaminationField()),this.fields.push(this.referralTypeField()),this.fields.push(this.internalReferralField()),this.fields.push(this.externalReferralField()),this.fields.push(this.payingField()),this.fields.push(this.paymentTypeField()),this.fields.push(this.receiptField()),this.fields.push(this.paymentAmountField()),this.fields.push(this.invoiceField()),this.fields.push(this.invoiceAmountField()))},immediate:!0}},methods:{async getTestsOptions(e){return(await c["a"].getListOfRadiologyTests(e)).map(e=>({label:e.name,value:e.concept_id}))},validateAmount(e){return e.match(/([0-9]+\\.[0-9])|Unknown$/i)?["You must enter a decimal number"]:null},async onFinish(e,t){await this.service.createEncounter();const i=await this.service.createOrder({concept_id:t["list_of_radiology_test"]["concept"],encounter_id:this.service.encounterID,provider_id:this.providerID}),a=(await this.resolveObs(t)).map(e=>(e["order_id"]=i.order_id,e));await this.service.saveObservationList(a),this.service.printExamination(i.accession_number),this.gotoPatientDashboard()},listOfRadiologyTestsField(){let e=[],t=-1;return{id:"list_of_radiology_test",helpText:"Please select the type of examination",type:l["b"].TT_SELECT,validation:e=>u["a"].required(e),computedValue:e=>({concept:e.value,obs:this.service.buildValueCoded("RADIOLOGY TEST",e.value)}),beforeNext:async e=>(t!=e.value&&(t=e.value,this.examinationOptions=await this.getTestsOptions(e.value)),!0),options:async()=>(Object(h["isEmpty"])(e)&&(e=await this.getTestsOptions("LIST OF RADIOLOGY TESTS")),e)}},examinationField(){let e=-1;return{id:"examination",helpText:"Please select the examination",type:l["b"].TT_SELECT,validation:e=>u["a"].required(e),computedValue:e=>({obs:this.service.buildValueCoded("Examination",e.value)}),condition:()=>!Object(h["isEmpty"])(this.examinationOptions),beforeNext:async(t,i)=>(e!=i.list_of_radiology_test.value&&(e=t.value,this.detailedExaminationOptions=await this.getTestsOptions(e)),!0),options:()=>this.examinationOptions}},detailedExaminationField(){return{id:"detailed_examination",helpText:"Please select the detailed examination",type:l["b"].TT_SELECT,condition:()=>!Object(h["isEmpty"])(this.detailedExaminationOptions),computedValue:e=>({obs:this.service.buildValueCoded("Detailed examination",e.value)}),validation:e=>u["a"].required(e),options:()=>this.detailedExaminationOptions}},referralTypeField(){return{id:"referral_type",helpText:"Please select the referral type",type:l["b"].TT_SELECT,validation:e=>u["a"].required(e),computedValue:e=>({obs:this.service.buildValueText("Source of referral",e.label)}),options:()=>this.mapStrToOptions(["External","Internal"])}},externalReferralField(){const e=f["a"].getFacilityLocationField();return e.id="external_referral",e.init=async()=>(this.defaultExternalLocation=await b["b"].defaultReferralLocation(),!0),e.defaultValue=()=>this.defaultExternalLocation,e.condition=e=>"External"===e.referral_type.value,e.computedValue=e=>({obs:this.service.buildValueText("REFERRED FROM",e.label)}),e},internalReferralField(){let e=[];return{id:"referred_by",helpText:"Referred from",type:l["b"].TT_SELECT,validation:e=>u["a"].required(e),condition:e=>"Internal"===e.referral_type.value,computedValue:e=>({obs:this.service.buildValueText("REFERRED FROM",e.label)}),options:async()=>(Object(h["isEmpty"])(e)&&(e=(await p.getInternalSections()).map(e=>({value:e.id,label:(""+(null===e||void 0===e?void 0:e.name)).toUpperCase()}))),e),config:{showKeyboard:!0,footerBtns:[{name:"Add Referral",slot:"end",color:"success",onClick:async(e,t,i)=>{if("string"!=typeof i.filter||i.filter.length<3)return Object(m["e"])("Please enter a valid name");if(i.filtered.some(e=>e.label.toLowerCase()===i.filter.toLowerCase()))return Object(m["e"])("Can't add already existing referral location");if(await Object(m["a"])("Do you want to add referral location?")){const e=await p.createInternalSection(i.filter.toUpperCase());e?(i.filter=e.name,i.listData=[{label:e.name,value:e.id},...i.listData]):Object(m["c"])("Unable to add "+i.filter)}}}]}}},payingField(){return{id:"paying",helpText:"Is this a paying patient?",type:l["b"].TT_SELECT,computedValue:e=>({obs:this.service.buildValueCoded("PAYING",e.value)}),validation:e=>u["a"].required(e),options:()=>this.yesNoOptions()}},paymentTypeField(){return{id:"payment_type",helpText:"Select payment method",type:l["b"].TT_SELECT,validation:e=>u["a"].required(e),condition:e=>"Yes"===e.paying.value,computedValue:e=>({obs:this.service.buildValueCoded("PAYMENT TYPE",e.value)}),options:()=>this.mapStrToOptions(["Cash","Invoice"])}},receiptField(){return{id:"receipt_number",helpText:"Enter receipt number",type:l["b"].TT_TEXT,condition:e=>"Cash"===e.payment_type.value,computedValue:e=>({obs:this.service.buildValueText("RECEIPT NUMBER",e.value)}),validation:e=>u["a"].validateSeries([()=>u["a"].required(e),()=>this.validateAmount(""+e.value)])}},invoiceField(){return{id:"invoice_number",helpText:"Enter invoice number",type:l["b"].TT_TEXT,computedValue:e=>({obs:this.service.buildValueText("INVOICE NUMBER",e.value)}),condition:e=>"Invoice"===e.payment_type.value,validation:e=>u["a"].required(e)}},paymentAmountField(){return{id:"payment_amount",helpText:"Enter payment amount",type:l["b"].TT_NUMBER,condition:e=>e.receipt_number.value,computedValue:e=>({obs:this.service.buildValueNumber("PAYMENT AMOUNT",e.value)}),validation:e=>u["a"].validateSeries([()=>u["a"].required(e),()=>this.validateAmount(""+e.value)])}},invoiceAmountField(){return{id:"invoice_amount",helpText:"Enter invoice amount",type:l["b"].TT_NUMBER,condition:e=>e.invoice_number.value,computedValue:e=>({obs:this.service.buildValueNumber("INVOICE AMOUNT",e.value)}),validation:e=>u["a"].validateSeries([()=>u["a"].required(e),()=>this.validateAmount(""+e.value)])}}}}),g=i("d959"),_=i.n(g);const y=_()(v,[["render",n]]);t["default"]=y},c21d:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i("14d9");function a(e,t){const i=[],a=[-1,"",null,void 0];for(const n in t){if(!(n in e))continue;const r=e[n];a.includes(r)?i.push(!1):i.push(t[n](r,e))}return i.every(Boolean)}function n(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function r(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function o(e,t,i="",o="",s="priority"){const l=[];for(const n in t){const r=t[n],s=[r.target&&i&&r.target!=i,r.targetEvent&&o&&r.targetEvent!=o];s.some(Boolean)||a(e,r.conditions)&&(r.title=n,r.description&&(r.description.text=r.description.info(e)),l.push(r))}return"priority"===s?n(l):r(l)}},e86e:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"d",(function(){return o})),i.d(t,"c",(function(){return s})),i.d(t,"f",(function(){return l})),i.d(t,"e",(function(){return u})),i.d(t,"a",(function(){return c})),i.d(t,"g",(function(){return d})),i.d(t,"h",(function(){return p}));var a=i("5713"),n=i("2ef0");async function r(e=""){const t=await a["a"].getFacilities({name:e});return t.filter(e=>!Object(n["isEmpty"])(e)&&""!=e.name.trim()).map(e=>({label:e.name,value:e.location_id,other:e}))}async function o(e=""){const t=await a["a"].getLabs({search_name:e});return t.map(e=>({label:e,value:e}))}async function s(e=""){const t=await a["a"].getFacilities({name:e,tag:"Facility adult sections"});return t.map(e=>({label:e.name,value:e.name,other:e}))}async function l(){const e=await a["a"].getSpecialistClinics();return e.map(e=>({label:e.name,value:e.name,other:e}))}async function u(){const e=await a["a"].getRegions();return e.map(e=>({label:e.name,value:e.region_id,other:e}))}async function c(e){const t=await a["a"].getDistricts(e);return t.map(e=>({label:e.name,value:e.district_id,other:e}))}async function d(e,t=""){const i=await a["a"].getTraditionalAuthorities(e,t);return i.map(e=>({label:e.name,value:e.traditional_authority_id,other:e}))}async function p(e,t=""){const i=await a["a"].getVillages(e,t);return i.map(e=>({label:e.name,value:e.village_id,other:e}))}},f149:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var a,n=i("ad49");(function(e){e["DEFAULT_REFERRAL_LOCATION"]="default.referral.location"})(a||(a={})),t["b"]={defaultReferralLocation:()=>n["a"].get(a.DEFAULT_REFERRAL_LOCATION)}}}]);
//# sourceMappingURL=chunk-169b062e.e7ee93f1.js.map