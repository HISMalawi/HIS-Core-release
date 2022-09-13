(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a23b2b1"],{7365:function(e,t,n){"use strict";var r,a=n("5530"),i=n("1da1"),o=n("3835"),u=(n("96cf"),n("ac1f"),n("1276"),n("d3b7"),n("ddb0"),n("b0c0"),n("25f0"),n("d81d"),n("4e82"),n("99af"),n("4de4"),n("07ac"),n("3ca3"),n("7a23")),c=n("ad60"),s=n("2ef0"),l=n("0fa1"),d=n("7f35"),p=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(r||(r={}));var f=function(e){return p["b"].toStandardHisDisplayFormat(e)},m={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.outcomeStartDate,e.next=3,Object(d["a"])("Data Integrity Issue Found","Patient died on ".concat(f(n)),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);case 3:return a=e.sent,e.abrupt("return","Cancel"===a?r.GO_TO_PATIENT_DASHBOARD:"Change outcome"===a?r.CHANGE_PATIENT_OUTCOME:r.CONTINUE);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},conditions:{outcome:function(e){return"Patient died"===e},outcomeStartDate:function(e,t){var n=t.sessionDate;return n>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.birthDate,a=t.sessionDate,e.next=3,Object(d["a"])("Data integrity issue found","","Session date ".concat(f(a)," is less than birth date of ").concat(f(n)),[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);case 3:return i=e.sent,e.abrupt("return","Change session date"===i?r.CHANGE_SESSION_DATE:r.GO_TO_PATIENT_DASHBOARD);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},conditions:{birthDate:function(e,t){var n=t.sessionDate;return n<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,a,i,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.providers,a=t.encounterName,i=t.sessionDate,o=t.apiDate,e.next=3,Object(d["c"])("Please select a provider for ".concat(a),"BDE: ".concat(f(i)," | Current: ").concat(f(o)),n,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);case 3:return u=e.sent,e.abrupt("return","Cancel"===u.action?{value:-1,flowState:r.GO_TO_PATIENT_DASHBOARD}:{value:u.selection,flowState:r.SET_PROVIDER});case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},conditions:{isBdeMode:function(e){return e}}}},h=n("c21d"),v=n("7920"),b=n("b5e4"),g=n("8e8b"),O=Object(u["defineComponent"])({components:{HisStandardForm:v["a"]},data:function(){return{patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},ready:!1}},watch:{$route:{handler:function(e){var t=this;e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.patientID=parseInt(e.params.patient_id),g["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then((function(e){t.patient=e,t.setEncounterFacts().then((function(){t.checkEncounterGuidelines().then((function(){t.ready=!0}))}))})))},immediate:!0,deep:!0}},computed:{cancelDestination:function(){return this.patientDashboardUrl()}},methods:{runflowState:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a={};if(a[r.SET_PROVIDER]=function(e){var n=e.split(" "),a=Object(o["a"])(n,1),i=a[0],u=Object(s["find"])(t.providers,{username:i});return u&&(t.providerID=u.person_id),r.CONTINUE},a[r.CHANGE_SESSION_DATE]=function(){return t.$router.push("/session/date?patient_dashboard_redirection_id=".concat(t.patientID)),r.EXIT},a[r.CHANGE_PATIENT_OUTCOME]=function(){return t.$router.push("/patient/programs/".concat(t.patientID)),r.EXIT},a[r.GO_TO_PATIENT_DASHBOARD]=function(){return t.gotoPatientDashboard(),r.EXIT},e in a)return a[e](n)},checkEncounterGuidelines:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,i,o,u,c,s,l,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=Object(h["a"])(e.facts,m),t.t0=regeneratorRuntime.keys(n);case 2:if((t.t1=t.t0()).done){t.next=20;break}if(a=t.t1.value,u=n[a],null===u||void 0===u||null===(i=u.actions)||void 0===i||!i.alert){t.next=13;break}return t.t2=e,t.next=9,null===u||void 0===u||null===(c=u.actions)||void 0===c?void 0:c.alert(e.facts);case 9:if(t.t3=t.sent,s=t.t2.runflowState.call(t.t2,t.t3),s!==r.EXIT){t.next=13;break}return t.abrupt("return");case 13:if(null===u||void 0===u||null===(o=u.actions)||void 0===o||!o.selection){t.next=18;break}return t.next=16,null===u||void 0===u||null===(l=u.actions)||void 0===l?void 0:l.selection(e.facts);case 16:d=t.sent,e.runflowState(d.flowState,d.value);case 18:t.next=2;break;case 20:case"end":return t.stop()}}),t)})))()},setEncounterFacts:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g["a"].get("PATIENT_PROGRAM",{patientID:e.patientID});case 3:n=t.sent,e.facts.outcome=n.outcome,e.facts.outcomeStartDate=n.startDate,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0),Object(b["c"])("".concat(t.t0));case 12:if(e.facts.sessionDate=c["a"].getSessionDate(),e.facts.apiDate=c["a"].getCachedApiDate(),e.facts.isBdeMode=c["a"].isBDE(),e.facts.birthDate=e.patient.getBirthdate(),e.facts.encounterName=e.$route.name?e.$route.name.toString().toUpperCase():"N/A",!c["a"].isBDE()){t.next=22;break}return t.next=20,g["a"].get("PROVIDERS");case 20:e.providers=t.sent,e.facts.providers=e.providers.sort((function(e,t){var n=e.username.toUpperCase(),r=t.username.toUpperCase();return n<r?-1:n>r?1:0})).map((function(e){var t,n="".concat(e.username);if(!Object(s["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var r,a=(null===(r=e.person)||void 0===r?void 0:r.names)||[],i=Object(o["a"])(a,1),u=i[0];n+=" (".concat(u.given_name," ").concat(u.family_name,")")}return n}));case 22:case"end":return t.stop()}}),t,null,[[0,8]])})))()},toOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{label:e,value:e,other:t}},mapStrToOptions:function(e){return e.map((function(e){return{label:e,value:e}}))},patientDashboardUrl:function(){return"/patient/dashboard/".concat(this.patientID)},gotoPatientDashboard:function(){return this.$router.push({path:this.patientDashboardUrl()})},nextTask:function(){return Object(l["b"])(this.patientID,this.$router)},yesNoOptions:function(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{label:e,value:"",other:Object(a["a"])(Object(a["a"])({},t),{},{values:this.yesNoOptions()})}},mapOptions:function(e){return e.map((function(e){return{label:e,value:e}}))},yesNoUnknownOptions:function(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object.values(e).filter((function(e){return e&&(e.tag===t||""===t)})).reduce((function(e,t){var n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e}),[]);return Promise.all(n)},inArray:function(e,t){try{return e.filter((function(e){return t(e)})).length>0}catch(n){return!1}},validateSeries:function(e){try{for(var t in e){var n=e[t]();if(n)return n}}catch(r){return[r]}}}});const T=O;t["a"]=T},7920:function(e,t,n){"use strict";var r=n("7a23");function a(e,t,n,a,i,o){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,8,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var i=n("9441"),o=Object(r["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:i["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),u=n("6b0d"),c=n.n(u);const s=c()(o,[["render",a]]);t["a"]=s},d66c:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function a(e,t,n,a,i,o){var u=Object(r["resolveComponent"])("his-standard-form");return Object(r["openBlock"])(),Object(r["createBlock"])(u,{fields:e.fields,onFinishAction:e.onFinish,skipSummary:!1,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])}var i=n("2909"),o=n("1da1"),u=(n("d3b7"),n("159b"),n("b64b"),n("3ca3"),n("ddb0"),n("99af"),n("ac1f"),n("466d"),n("caad"),n("96cf"),n("d95e")),c=n("7920"),s=n("2706"),l=n("7365"),d=n("bee2"),p=n("d4ec"),f=n("262e"),m=n("2caf"),h=n("cc6f"),v=function(e){Object(f["a"])(n,e);var t=Object(m["a"])(n);function n(e,r){return Object(p["a"])(this,n),t.call(this,e,186,r)}return Object(d["a"])(n)}(h["a"]),b=n("b5e4"),g=n("e86e"),O=Object(r["defineComponent"])({mixins:[l["a"]],components:{HisStandardForm:c["a"]},data:function(){return{screeningResult:{},obs:[],currentMethod:""}},watch:{patient:{handler:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.screeningResult=new v(e.patientID,e.providerID),t.next=3,e.getTreatmentOptions();case 3:e.currentMethod=t.sent,e.fields=e.getFields();case 5:case"end":return t.stop()}}),t)})))()},deep:!0}},methods:{onFinish:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,o,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.screeningResult.createEncounter();case 2:if(a=r.sent,a){r.next=5;break}return r.abrupt("return",Object(b["e"])("Unable to create encounter"));case 5:return e.treatment_option&&"Referral"===e.treatment_option.value&&n.obs.push(n.screeningResult.buildValueText("Referral location",e["location"].label)),o=[],Object.keys(t).forEach((function(e){o.push(t[e].obs)})),r.next=10,Promise.all([].concat(Object(i["a"])(n.obs),o));case 10:return u=r.sent,r.next=13,n.screeningResult.saveObservationList(u);case 13:Object(b["d"])("Observations and encounter created!"),n.nextTask();case 15:case"end":return r.stop()}}),r)})))()},getFacilities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(g["b"])(e)},getTreatmentOptions:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.screeningResult.getFirstValueCoded("CxCa screening method");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},getOptions:function(e){return e||(Object(b["e"])("No screening methods have been selected"),this.gotoPatientDashboard()),e.match(/via/i)?["VIA Negative","VIA Positive","Suspect Cancer"]:e.match(/smear/i)?["PAP Smear Normal","PAP Smear Abnormal"]:e.match(/HPV DNA/i)?["HPV positive","HPV negative"]:e.match(/Speculum/i)?["Visible Lesion","No visible Lesion","Suspect Cancer","Other Gynae"]:[]},getFields:function(){var e=this;return[{id:"results_available",helpText:"Screening result available",type:u["b"].TT_SELECT,validation:function(e){return s["a"].required(e)},options:function(){return e.yesNoOptions()},computedValue:function(t){return{obs:e.screeningResult.buildValueCoded("Screening results available",t.value)}}},{id:"screening_result",helpText:"Screening Result",type:u["b"].TT_SELECT,validation:function(e){return s["a"].required(e)},options:function(){return e.mapOptions(Object(i["a"])(e.getOptions(e.currentMethod)))},condition:function(e){return"Yes"===e.results_available.value},computedValue:function(t){return{obs:e.screeningResult.buildValueCoded("Screening results",t.value)}}},{id:"gynae_options",helpText:"Other Gynae treatment",type:u["b"].TT_SELECT,validation:function(e){return s["a"].required(e)},options:function(){return e.mapOptions(["STI","Cervicitis"])},condition:function(e){return"Other Gynae"===e.screening_result.value},computedValue:function(t){return{obs:e.screeningResult.buildValueCoded("Screening results",t.value)}}},{id:"offer_via",helpText:"Offer VIA",type:u["b"].TT_SELECT,validation:function(e){return s["a"].required(e)},options:function(){return e.yesNoOptions()},condition:function(e){return"HPV positive"===e.screening_result.value},computedValue:function(t){return{obs:e.screeningResult.buildValueCoded("Patient went for VIA?",t.value)}}},{id:"via_screening_results",helpText:"VIA screening results",type:u["b"].TT_SELECT,validation:function(e){return s["a"].required(e)},options:function(){return e.mapOptions(["VIA negative","VIA positive","Suspect cancer"])},condition:function(e){return"Yes"===e.offer_via.value},computedValue:function(t){return{obs:e.screeningResult.buildValueCoded("VIA Results",t.value)}}},{id:"reason_for_not_offering_via",helpText:"Reason for NOT offering VIA",type:u["b"].TT_SELECT,validation:function(e){return s["a"].required(e)},options:function(){return e.mapOptions(["Client NOT ready","Treatment not available","Other conditions"])},condition:function(e){return"No"===e.offer_via.value},computedValue:function(t){return{obs:e.screeningResult.buildValueCoded("Other reason for not seeking services",t.value)}}},{id:"treatment_option",helpText:"Enter treatment option",type:u["b"].TT_SELECT,validation:function(e){return s["a"].required(e)},options:function(){return e.mapOptions(["Same day treatment","Postponed treatment","Referral"])},condition:function(e){return!["VIA Negative","No visible Lesion","PAP Smear Abnormal","HPV negative"].includes(e.screening_result.value)},computedValue:function(t){return{obs:e.screeningResult.buildValueCoded("Directly observed treatment option",t.value)}}},{id:"postponed_reason",helpText:"Select reason for postponing treatment",type:u["b"].TT_SELECT,validation:function(e){return s["a"].required(e)},options:function(){return e.mapOptions(["Client not ready","Treatment not available","Other conditions"])},condition:function(e){return"Postponed treatment"===e.treatment_option.value},computedValue:function(t){return{obs:e.screeningResult.buildValueCoded("Postponed reason",t.value)}}},{id:"referral_rreason",helpText:"Referral reason",type:u["b"].TT_SELECT,validation:function(e){return s["a"].required(e)},options:function(){return e.mapOptions(["Further Investigation and Management","Large Lesion (Greater than 75 percent)","Unable to treat client","Suspect Cancer","Treatment not available","Other conditions"])},condition:function(e){return"Referral"===e.treatment_option.value},computedValue:function(t){return{obs:e.screeningResult.buildValueCoded("Referral reason",t.value)}}},{id:"location",helpText:"Location reffered from",type:u["b"].TT_SELECT,validation:function(e){return s["a"].required(e)},options:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.getFacilities(n)},config:{showKeyboard:!0,isFilterDataViaApi:!0},condition:function(e){return"Referral"===e.treatment_option.value},computedValue:function(t){return{obs:e.screeningResult.buildValueText("Referral location",t.label)}}}]}}}),T=n("6b0d"),_=n.n(T);const y=_()(O,[["render",a]]);t["default"]=y},e86e:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"a",(function(){return v})),n.d(t,"g",(function(){return g})),n.d(t,"h",(function(){return T}));var r=n("1da1"),a=(n("96cf"),n("d81d"),n("4de4"),n("d3b7"),n("b0c0"),n("5713")),i=n("2ef0");function o(){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,a["a"].getFacilities({name:t});case 3:return n=e.sent,e.abrupt("return",n.filter((function(e){return!Object(i["isEmpty"])(e)})).map((function(e){return{label:e.name,value:e.location_id,other:e}})));case 5:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function c(){return s.apply(this,arguments)}function s(){return s=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,a["a"].getLabs({search_name:t});case 3:return n=e.sent,e.abrupt("return",n.map((function(e){return{label:e,value:e}})));case 5:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function l(){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,a["a"].getFacilities({name:t,tag:"Facility adult sections"});case 3:return n=e.sent,e.abrupt("return",n.map((function(e){return{label:e.name,value:e.name,other:e}})));case 5:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return f=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].getSpecialistClinics();case 2:return t=e.sent,e.abrupt("return",t.map((function(e){return{label:e.name,value:e.name,other:e}})));case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function m(){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].getRegions();case 2:return t=e.sent,e.abrupt("return",t.map((function(e){return{label:e.name,value:e.region_id,other:e}})));case 4:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function v(e){return b.apply(this,arguments)}function b(){return b=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].getDistricts(t);case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return{label:e.name,value:e.district_id,other:e}})));case 4:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function g(e){return O.apply(this,arguments)}function O(){return O=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"",e.next=3,a["a"].getTraditionalAuthorities(t,n);case 3:return r=e.sent,e.abrupt("return",r.map((function(e){return{label:e.name,value:e.traditional_authority_id,other:e}})));case 5:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function T(e){return _.apply(this,arguments)}function _(){return _=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"",e.next=3,a["a"].getVillages(t,n);case 3:return r=e.sent,e.abrupt("return",r.map((function(e){return{label:e.name,value:e.village_id,other:e}})));case 5:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}}}]);
//# sourceMappingURL=chunk-0a23b2b1.213c1c9a.js.map