(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63a64b0a"],{"5ca2":function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var a=i("cc6f"),n=i("b89f");class r extends a["a"]{constructor(e,t){super(e,121,t)}static getListOfRadiologyTests(e){return super.getJson("radiology_set",{id:e})}getPatientExaminations(){return a["a"].getJson("radiology/examinations",{patient_id:this.patientID})}createOrder(e){return a["a"].postJson("orders/radiology",e)}printExamination(e){const t=new n["a"];return t.printLbl("orders/radiology?accession_number="+e)}}},7365:function(e,t,i){"use strict";i("14d9"),i("13d5");var a,n=i("7a23"),r=i("ad60"),o=i("2ef0"),s=i("0fa1"),l=i("7f35"),u=i("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(a||(a={}));const d=e=>u["b"].toStandardHisDisplayFormat(e),c={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(l["a"])("Data Integrity Issue Found","Patient died on "+d(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?a.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?a.CHANGE_PATIENT_OUTCOME:a.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const i=await Object(l["a"])("Data integrity issue found","",`Session date ${d(t)} is less than birth date of ${d(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===i?a.CHANGE_SESSION_DATE:a.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:i,apiDate:n})=>{const r=await Object(l["c"])("Please select a provider for "+t,`BDE: ${d(i)} | Current: ${d(n)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===r.action?{value:-1,flowState:a.GO_TO_PATIENT_DASHBOARD}:{value:r.selection,flowState:a.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var p=i("c21d"),m=i("7920"),h=i("b5e4"),b=i("8e8b"),f=i("fe70"),v=Object(n["defineComponent"])({components:{HisStandardForm:m["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",isEnrolledInProgam:!1,encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},formLabel:"",ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.formLabel=(""+e.name).toUpperCase(),this.patientID=parseInt(e.params.patient_id),b["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const i={};if(i[a.SET_PROVIDER]=e=>{const[t]=e.split(" "),i=Object(o["find"])(this.providers,{username:t});return i&&(this.providerID=i.person_id),a.CONTINUE},i[a.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),a.EXIT),i[a.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),a.EXIT),i[a.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),a.EXIT),e in i)return i[e](t)},async checkEncounterGuidelines(){const e=Object(p["a"])(this.facts,c);for(const o in e){var t,i;const s=e[o];if(null!==s&&void 0!==s&&null!==(t=s.actions)&&void 0!==t&&t.alert){var n;const e=this.runflowState(await(null===s||void 0===s||null===(n=s.actions)||void 0===n?void 0:n.alert(this.facts)));if(e===a.EXIT)return}if(null!==s&&void 0!==s&&null!==(i=s.actions)&&void 0!==i&&i.selection){var r;const e=await(null===s||void 0===s||null===(r=s.actions)||void 0===r?void 0:r.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await b["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.isEnrolledInProgam=e.programID===r["a"].getProgramID(),this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(h["c"])(""+e)}this.facts.sessionDate=r["a"].getSessionDate(),this.facts.apiDate=r["a"].getCachedApiDate(),this.facts.isBdeMode=r["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",r["a"].isBDE()&&(this.providers=await b["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const i=e.username.toUpperCase(),a=t.username.toUpperCase();return i<a?-1:i>a?1:0}).map(e=>{var t;let i=""+e.username;if(!Object(o["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var a;const[t]=(null===(a=e.person)||void 0===a?void 0:a.names)||[];i+=` (${t.given_name} ${t.family_name})`}return i}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>"string"===typeof e||"number"===typeof e?{label:e,value:e}:e)},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},async nextTask(){(await f["h"].create({backdropDismiss:!1,message:"Checking Next task.."})).present();try{await Object(s["b"])(this.patientID,this.$router,this.$route)}catch(e){console.error(e)}f["h"].getTop().then(e=>e&&f["h"].dismiss())},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},toConditionalOptions(e){const t=[];for(const i of e)("boolean"!==typeof i[1]||i[1])&&t.push(this.toOption(i[0]));return t},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const i=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const i=t.obs?t.obs:t;return Array.isArray(i)?e=e.concat(i):"function"===typeof i?e.push(i()):e.push(i),e},[]);return Promise.all(i)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(i){return!1}},validateSeries(e){try{for(const t in e){const i=e[t]();if(i)return i}}catch(t){return[t]}}}});const g=v;t["a"]=g},7920:function(e,t,i){"use strict";var a=i("7a23");function n(e,t,i,n,r,o){return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var r=i("9441"),o=Object(a["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:r["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=i("d959"),l=i.n(s);const u=l()(o,[["render",n]]);t["a"]=u},"80b5":function(e,t,i){"use strict";i("13d5");var a=i("e86e"),n=i("d95e"),r=i("2706"),o=i("d10e"),s=i("b446"),l=i("9283"),u=i("23e6"),d=i("2ef0"),c=i("b5e4"),p=i("5713"),m=i("1c74");function h(e){return e.map(e=>({label:e,value:e}))}t["a"]={resolvePerson(e){let t={};for(const i in e){const a=e[i];Object(d["isPlainObject"])(a)&&"person"in a&&(Object(d["isPlainObject"])(a.person)?t={...t,...a.person}:t[i]=a["person"])}return t},getGivenNameField(){return{id:"given_name",helpText:"First name",type:n["b"].TT_TEXT,computedValue:e=>({person:e.value}),validation:e=>r["a"].isName(e),options:async e=>{if(e.given_name){const t=await o["a"].searchGivenName(e.given_name.value);return h(t)}return[]}}},getFamilyNameField(){return{id:"family_name",helpText:"Last name",type:n["b"].TT_TEXT,computedValue:e=>({person:e.value}),validation:e=>r["a"].isName(e),options:async e=>{if(e.family_name){const t=await o["a"].searchFamilyName(e.family_name.value);return h(t)}return[]}}},getGenderField(e){return{id:"gender",helpText:"Sex",type:n["b"].TT_SELECT,computedValue:e=>({person:e.value}),validation:e=>r["a"].required(e),options:()=>Object(d["isEmpty"])(e)?[{label:"Female",value:"F"},{label:"Male",value:"M"}]:e}},getDobConfig(e=!0){return{id:"birth_date",summaryLabel:"Date of Birth",helpText:e?"Birth":"",required:!0,minDate:()=>l["b"].estimateDateFromAge(100),maxDate:()=>o["a"].getSessionDate(),estimation:{allowUnknown:!0,allowUnknownMonthDay:!0,estimationFieldType:s["a"].AGE_ESTIMATE_FIELD},computeValue:(e,t)=>({date:e,isEstimate:t,person:{birthdate:e,birthdate_estimated:t}})}},getHomeRegionField(){return{id:"home_region",helpText:"Region of origin",type:n["b"].TT_SELECT,group:"person",requireNext:!1,computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:()=>Object(a["e"])()}},getHomeDistrictField(){return{id:"home_district",helpText:"District of origin",type:n["b"].TT_SELECT,requireNext:!1,dynamicHelpText:e=>e.home_region&&e.home_region.label.match(/foreign/i)?"Home Country":"District of origin",computedValue:e=>({person:e.label}),options:e=>Object(a["a"])(e.home_region.value)}},addCustomLocationBtnForTAorVillage(e,t){return{name:"Add "+e,slot:"end",color:"success",onClick:async(i,a,n)=>{if("string"!=typeof n.filter||n.filter.length<3)return Object(c["e"])("Please enter a valid "+e);if(!Object(d["isEmpty"])(n.filtered))return Object(c["e"])("Can't add existing "+e);const r=await Object(c["a"])(`Do you want to add ${e} ${n.filter}?`);if(!r)return;const o=await p["a"].createAddress(e,n.filter,i[t].value);if(!o)return Object(c["e"])("Unable to add "+e);n.filter=n.filter.toUpperCase()}}},getHomeTaField(){return{id:"home_traditional_authority",helpText:"TA of origin",type:n["b"].TT_SELECT,requireNext:!1,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("TA","home_district")]},defaultOutput:()=>({label:"N/A",value:"N/A"}),defaultComputedOutput:e=>e.home_region&&e.home_region.label.match(/foreign/i)?{person:"Unknown"}:null,computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t)=>Object(a["g"])(e.home_district.value,t)}},getHomeVillageField(){return{id:"home_village",helpText:"Village of origin",type:n["b"].TT_SELECT,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("Village","home_traditional_authority")]},requireNext:!1,defaultOutput:()=>({label:"N/A",value:"N/A"}),defaultComputedOutput:e=>e.home_region&&e.home_region.label.match(/foreign/i)?{person:"Unknown"}:null,computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t)=>Object(a["h"])(e.home_traditional_authority.value,t)}},getCurrentRegionField(){return{id:"current_region",helpText:"Current Region of Residence",requireNext:!1,type:n["b"].TT_SELECT,computedValue:(e,t)=>/use home/i.test(""+e.value)?{person:{current_region:t.home_region.label,current_district:t.home_district.label,current_traditional_authority:t.home_traditional_authority.label,current_village:t.home_village.label}}:{person:e.label},validation:e=>r["a"].required(e),options:()=>Object(a["e"])(),config:{footerBtns:[{name:"Same as origin",slot:"end",onClickComponentEvents:{setValue:()=>"Use Home Address"},onClick:()=>"Use Home Address"}]}}},getCurrentDistrictField(){return{id:"current_district",helpText:"District",requireNext:!1,type:n["b"].TT_SELECT,dynamicHelpText:e=>e.current_region&&e.current_region.label.match(/foreign/i)?"Current Country":"Current District of Residence",computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:e=>Object(a["a"])(e.current_region.value)}},getCurrentTAfield(){return{id:"current_traditional_authority",helpText:"Current TA of Residence",requireNext:!1,type:n["b"].TT_SELECT,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("TA","current_district")]},defaultOutput:e=>{var t;if(!/use home/i.test(""+(null===(t=e.current_region)||void 0===t?void 0:t.label)))return{label:"N/A",value:"N/A"}},defaultComputedOutput:e=>e.current_region&&e.current_region.label.match(/foreign/i)?{person:"Unknown"}:null,computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t)=>Object(a["g"])(e.current_district.value,t)}},getCurrentVillageField(){return{id:"current_village",helpText:"Current Village of Residence",requireNext:!1,type:n["b"].TT_SELECT,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("Village","current_traditional_authority")]},defaultOutput:e=>{var t;if(!/use home/i.test(""+(null===(t=e.current_region)||void 0===t?void 0:t.label)))return{label:"N/A",value:"N/A"}},defaultComputedOutput:e=>e.current_region&&e.current_region.label.match(/foreign/i)?{person:"Unknown"}:null,computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t)=>Object(a["h"])(e.current_traditional_authority.value,t)}},getCellNumberField(){return{id:"cell_phone_number",helpText:"Cell phone number",group:"person",type:n["b"].TT_TEXT,computedValue:e=>({person:e.label}),validation:e=>{if(e){if(e.value.match(/Unknown|n\/a/i))return null;for(const t of(""+e.value).split("/"))if(r["a"].isMWPhoneNumber({label:t,value:t}))return[`"${t}" is not a valid phone number`];return null}return["Phone number cannot be empty"]},config:{customKeyboard:[[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],[["+265","/"],["Unknown","N/A"],["Delete"]]]}}},getLandmarkFields(){return[{id:"default_landmarks",proxyID:"landmark",helpText:"Closest Landmark or Plot Number",type:n["b"].TT_SELECT,appearInSummary:e=>"Other"!=e.default_landmarks.value,computedValue:e=>({person:e.value}),validation:e=>r["a"].required(e),options:()=>h(["Catholic Church","CCAP","Seventh Day","Mosque","Primary School","Borehole","Secondary School","College","Market","Football Ground","Other"])},{id:"other_landmark",proxyID:"landmark",helpText:"Closest Landmark or Plot Number",type:n["b"].TT_NOTE,appearInSummary:e=>"Other"===e.default_landmarks.value,condition:e=>"Other"===e.default_landmarks.value,computedValue:e=>({person:e.value}),validation:e=>r["a"].required(e)}]},getFacilityLocationField(){return{id:"location",helpText:"Please select facility name",type:n["b"].TT_SELECT,computedValue:e=>({person:e.label}),validation:e=>r["a"].required(e),options:(e,t="")=>Object(a["b"])(t),config:{showKeyboard:!0,isFilterDataViaApi:!0}}},getPersonNameFromPersonObj(e,t){return e.names.length?e.names[0][t]:""},getAttrFromPersonObj(e,t){return Array.isArray(e.person_attributes)&&e.person_attributes.length?e.person_attributes.reduce((e,i)=>i.type.name===t?i.value:e,""):""},getAddressFromPersonObj(e,t){if(Array.isArray(e.addresses)&&e.addresses.length){const i=e.addresses[0],a={home_district:"address2",home_village:"neighborhood_cell",home_traditional_authority:"county_district",current_village:"city_village",current_traditional_authority:"township_division",current_district:"state_province"};return i[a[t]]}return""},mapPersonData(e){const t=this.getPersonNameFromPersonObj(e,"given_name"),i=this.getPersonNameFromPersonObj(e,"family_name"),a=this.getAddressFromPersonObj(e,"home_district"),n=this.getAddressFromPersonObj(e,"home_village"),r=this.getAddressFromPersonObj(e,"home_traditional_authority");return{id:e.person_id,name:`${t} ${i}`,given_name:t,family_name:i,gender:e.gender,birth_date:e.birthdate,birthdate_estimated:e.birthdate_estimated,home_district:a,home_village:n,home_traditional_authority:r,home_address:`${a} ${n}`,current_district:this.getAddressFromPersonObj(e,"current_district"),current_traditional_authority:this.getAddressFromPersonObj(e,"current_traditional_authority"),cell_phone_number:this.getAttrFromPersonObj(e,"Cell Phone Number"),landmark:this.getAttrFromPersonObj(e,"Landmark Or Plot Number")}},getPersonAttributeOptions(e){const t=new u["a"](e),i=(e,t)=>t in e?e[t]():"-";return{label:t.getPatientInfoString(),value:t.getID()||t.getNationalID(),other:{npid:t.getNationalID(),person:e,options:[{label:"National ID",value:i(t,"getNationalID")},{label:"ARV Number",value:i(t,"getArvNumber"),other:{show:()=>"ART"===m["e"].getProgramName()}},{label:"Name",value:i(t,"getFullName")},{label:"Sex",value:i(t,"getGender")},{label:"Birthdate",value:i(t,"getBirthdate")},{label:"Home District",value:i(t,"getHomeDistrict")},{label:"Home Village",value:i(t,"getHomeVillage")},{label:"Current District",value:i(t,"getCurrentDistrict")},{label:"Current T/A",value:i(t,"getCurrentTA")},{label:"Cellphone",value:i(t,"getPhoneNumber")}]}}}}},b14f:function(e,t,i){"use strict";i.r(t);var a=i("7a23");function n(e,t,i,n,r,o){const s=Object(a["resolveComponent"])("his-standard-form"),l=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createBlock"])(l,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{fields:e.fields,onFinishAction:e.onFinish,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}i("14d9");var r=i("7365"),o=i("7920"),s=i("d867"),l=i("d95e"),u=i("2706"),d=i("5ca2"),c=i("1c74");class p extends c["e"]{constructor(){super()}static getInternalSections(){return super.getJson("internal_sections")}static createInternalSection(e){return super.postJson("internal_sections",{name:e})}}var m=i("2ef0"),h=i("b5e4"),b=i("80b5"),f=i("f149"),v=Object(a["defineComponent"])({mixins:[r["a"]],components:{IonPage:s["D"],HisStandardForm:o["a"]},data:()=>({service:{},examinationOptions:[],defaultExternalLocation:"",detailedExaminationOptions:[]}),watch:{ready:{handler(e){e&&(this.service=new d["a"](this.patientID,this.providerID),this.fields.push(this.listOfRadiologyTestsField()),this.fields.push(this.examinationField()),this.fields.push(this.detailedExaminationField()),this.fields.push(this.referralTypeField()),this.fields.push(this.internalReferralField()),this.fields.push(this.externalReferralField()),this.fields.push(this.payingField()),this.fields.push(this.paymentTypeField()),this.fields.push(this.receiptField()),this.fields.push(this.paymentAmountField()),this.fields.push(this.invoiceField()),this.fields.push(this.invoiceAmountField()))},immediate:!0}},methods:{async getTestsOptions(e){return(await d["a"].getListOfRadiologyTests(e)).map(e=>({label:e.name,value:e.concept_id}))},validateAmount(e){return e.match(/([0-9]+\\.[0-9])|Unknown$/i)?["You must enter a decimal number"]:null},async onFinish(e,t){await this.service.createEncounter(),await this.service.saveObservationList(await this.resolveObs(t));for(const i of Object.values(t))if("function"===typeof i.order){const e=await this.service.createOrder(i.order(this.service.getEncounterID()));"object"===typeof e&&e.accession_number&&this.service.printExamination(e.accession_number)}this.gotoPatientDashboard()},listOfRadiologyTestsField(){let e=[],t=-1;return{id:"list_of_radiology_test",helpText:"Please select the type of examination",type:l["b"].TT_SELECT,validation:e=>u["a"].required(e),computedValue:e=>({obs:this.service.buildValueCoded("RADIOLOGY TEST",e.value),order:t=>{const i={encounter_id:t,concept_id:e.value};return-1!=this.providerID&&(i["provider_id"]=this.providerID),i}}),beforeNext:async e=>(t!=e.value&&(t=e.value,this.examinationOptions=await this.getTestsOptions(e.value)),!0),options:async()=>(Object(m["isEmpty"])(e)&&(e=await this.getTestsOptions("LIST OF RADIOLOGY TESTS")),e)}},examinationField(){let e=-1;return{id:"examination",helpText:"Please select the examination",type:l["b"].TT_SELECT,validation:e=>u["a"].required(e),computedValue:e=>({obs:this.service.buildValueCoded("Examination",e.value)}),condition:()=>!Object(m["isEmpty"])(this.examinationOptions),beforeNext:async(t,i)=>(e!=i.list_of_radiology_test.value&&(e=t.value,this.detailedExaminationOptions=await this.getTestsOptions(e)),!0),options:()=>this.examinationOptions}},detailedExaminationField(){return{id:"detailed_examination",helpText:"Please select the detailed examination",type:l["b"].TT_SELECT,condition:()=>!Object(m["isEmpty"])(this.detailedExaminationOptions),computedValue:e=>({obs:this.service.buildValueCoded("Detailed examination",e.value)}),validation:e=>u["a"].required(e),options:()=>this.detailedExaminationOptions}},referralTypeField(){return{id:"referral_type",helpText:"Please select the referral type",type:l["b"].TT_SELECT,validation:e=>u["a"].required(e),computedValue:e=>({obs:this.service.buildValueText("Source of referral",e.label)}),options:()=>this.mapStrToOptions(["External","Internal"])}},externalReferralField(){const e=b["a"].getFacilityLocationField();return e.id="external_referral",e.init=async()=>(this.defaultExternalLocation=await f["b"].defaultReferralLocation(),!0),e.defaultValue=()=>this.defaultExternalLocation,e.condition=e=>"External"===e.referral_type.value,e.computedValue=e=>({obs:this.service.buildValueText("REFERRED FROM",e.label)}),e},internalReferralField(){let e=[];return{id:"referred_by",helpText:"Referred from",type:l["b"].TT_SELECT,validation:e=>u["a"].required(e),condition:e=>"Internal"===e.referral_type.value,computedValue:e=>({obs:this.service.buildValueText("REFERRED FROM",e.label)}),options:async()=>(Object(m["isEmpty"])(e)&&(e=(await p.getInternalSections()).map(e=>({value:e.id,label:(""+(null===e||void 0===e?void 0:e.name)).toUpperCase()}))),e),config:{showKeyboard:!0,footerBtns:[{name:"Add Referral",slot:"end",color:"success",onClick:async(e,t,i)=>{if("string"!=typeof i.filter||i.filter.length<3)return Object(h["e"])("Please enter a valid name");if(i.filtered.some(e=>e.label.toLowerCase()===i.filter.toLowerCase()))return Object(h["e"])("Can't add already existing referral location");if(await Object(h["a"])("Do you want to add referral location?")){const e=await p.createInternalSection(i.filter.toUpperCase());e?(i.filter=e.name,i.listData=[{label:e.name,value:e.id},...i.listData]):Object(h["c"])("Unable to add "+i.filter)}}}]}}},payingField(){return{id:"paying",helpText:"Is this a paying patient?",type:l["b"].TT_SELECT,computedValue:e=>({obs:this.service.buildValueCoded("PAYING",e.value)}),validation:e=>u["a"].required(e),options:()=>this.yesNoOptions()}},paymentTypeField(){return{id:"payment_type",helpText:"Select payment method",type:l["b"].TT_SELECT,validation:e=>u["a"].required(e),condition:e=>"Yes"===e.paying.value,computedValue:e=>({obs:this.service.buildValueCoded("PAYMENT TYPE",e.value)}),options:()=>this.mapStrToOptions(["Cash","Invoice"])}},receiptField(){return{id:"receipt_number",helpText:"Enter receipt number",type:l["b"].TT_TEXT,condition:e=>"Cash"===e.payment_type.value,computedValue:e=>({obs:this.service.buildValueText("RECEIPT NUMBER",e.value)}),validation:e=>u["a"].validateSeries([()=>u["a"].required(e),()=>this.validateAmount(""+e.value)])}},invoiceField(){return{id:"invoice_number",helpText:"Enter invoice number",type:l["b"].TT_TEXT,computedValue:e=>({obs:this.service.buildValueText("INVOICE NUMBER",e.value)}),condition:e=>"Invoice"===e.payment_type.value,validation:e=>u["a"].required(e)}},paymentAmountField(){return{id:"payment_amount",helpText:"Enter payment amount",type:l["b"].TT_NUMBER,condition:e=>e.receipt_number.value,computedValue:e=>({obs:this.service.buildValueNumber("PAYMENT AMOUNT",e.value)}),validation:e=>u["a"].validateSeries([()=>u["a"].required(e),()=>this.validateAmount(""+e.value)])}},invoiceAmountField(){return{id:"invoice_amount",helpText:"Enter invoice amount",type:l["b"].TT_NUMBER,condition:e=>e.invoice_number.value,computedValue:e=>({obs:this.service.buildValueNumber("INVOICE AMOUNT",e.value)}),validation:e=>u["a"].validateSeries([()=>u["a"].required(e),()=>this.validateAmount(""+e.value)])}}}}),g=i("d959"),_=i.n(g);const y=_()(v,[["render",n]]);t["default"]=y},c21d:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i("14d9");function a(e,t){const i=[],a=[-1,"",null,void 0];for(const n in t){if(!(n in e))continue;const r=e[n];a.includes(r)?i.push(!1):i.push(t[n](r,e))}return i.every(Boolean)}function n(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function r(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function o(e,t,i="",o="",s="priority"){const l=[];for(const n in t){const r=t[n],s=[r.target&&i&&r.target!=i,r.targetEvent&&o&&r.targetEvent!=o];s.some(Boolean)||a(e,r.conditions)&&(r.title=n,r.description&&(r.description.text=r.description.info(e)),l.push(r))}return"priority"===s?n(l):r(l)}},d10e:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var a=i("ade3"),n=i("1c74");class r extends n["e"]{constructor(e){super(),Object(a["a"])(this,"person",void 0),this.person=e}create(){return n["e"].postJson("/people",this.person)}update(e){return n["e"].putJson("people/"+e,{...this.person,program_id:n["e"].getProgramID()})}static searchFamilyName(e){return super.getJson("/search/family_name",{search_string:e})}static searchGivenName(e){return super.getJson("/search/given_name",{search_string:e})}static async getPersonFullName(e){const t=await super.getJson(`/people/${e}/names`);return t&&t.length?t[0].given_name+" "+t[0].family_name:""}}},e86e:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"d",(function(){return o})),i.d(t,"c",(function(){return s})),i.d(t,"f",(function(){return l})),i.d(t,"e",(function(){return u})),i.d(t,"a",(function(){return d})),i.d(t,"g",(function(){return c})),i.d(t,"h",(function(){return p}));var a=i("5713"),n=i("2ef0");async function r(e=""){const t=await a["a"].getFacilities({name:e});return t.filter(e=>!Object(n["isEmpty"])(e)&&""!=e.name.trim()).map(e=>({label:e.name,value:e.location_id,other:e}))}async function o(e=""){const t=await a["a"].getLabs({search_name:e});return t.map(e=>({label:e,value:e}))}async function s(e=""){const t=await a["a"].getFacilities({name:e,tag:"Facility adult sections"});return t.map(e=>({label:e.name,value:e.name,other:e}))}async function l(){const e=await a["a"].getSpecialistClinics();return e.map(e=>({label:e.name,value:e.name,other:e}))}async function u(){const e=await a["a"].getRegions();return e.map(e=>({label:e.name,value:e.region_id,other:e}))}async function d(e){const t=await a["a"].getDistricts(e);return t.map(e=>({label:e.name,value:e.district_id,other:e}))}async function c(e,t=""){const i=await a["a"].getTraditionalAuthorities(e,t);return i.map(e=>({label:e.name,value:e.traditional_authority_id,other:e}))}async function p(e,t=""){const i=await a["a"].getVillages(e,t);return i.map(e=>({label:e.name,value:e.village_id,other:e}))}},f149:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var a,n=i("ad49");(function(e){e["DEFAULT_REFERRAL_LOCATION"]="default.referral.location"})(a||(a={})),t["b"]={defaultReferralLocation:()=>n["a"].get(a.DEFAULT_REFERRAL_LOCATION)}}}]);
//# sourceMappingURL=chunk-63a64b0a.972d0e0f.js.map