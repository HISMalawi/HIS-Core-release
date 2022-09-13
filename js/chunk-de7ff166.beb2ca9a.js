(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de7ff166"],{2819:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function a(e,t,n,a,o,i){var u=Object(r["resolveComponent"])("his-standard-form"),c=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createBlock"])(c,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{fields:e.fields,skipSummary:!0,onFinishAction:e.onFinish,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])]})),_:1})}var o=n("5530"),i=n("2909"),u=n("1da1"),c=(n("d81d"),n("99af"),n("b0c0"),n("ac1f"),n("466d"),n("caad"),n("2532"),n("96cf"),n("7365")),s=n("d95e"),l=n("d4ec"),d=n("bee2"),p=n("262e"),f=n("2caf"),v=n("cc6f"),h=n("ff01"),m={12:13,13:14,14:16,15:17,16:18,17:19,18:20,19:21,20:22,21:24,22:25,23:25,24:27,25:28,26:29,27:30,28:32,29:33,30:34,31:35,32:36,33:37,34:38,35:39,36:40,37:42},b=function(e){Object(p["a"])(n,e);var t=Object(f["a"])(n);function n(e,r){var a;return Object(l["a"])(this,n),a=t.call(this,e,98,r),a.gestationWeeks=0,a}return Object(d["a"])(n,[{key:"expectedFundalHeightForGestationWeeks",value:function(){return this.getEquivalentFundalHeight(this.gestationWeeks)}},{key:"loadPregnancyStatus",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v["a"].getJson("programs/".concat(this.programID,"/patients/").concat(this.patientID));case 2:t=e.sent,t&&(n=t["date_of_lnmp"],n&&(r=new h["a"](this.patientID,this.providerID),this.gestationWeeks=parseInt(r.calculateWeekOfFirstVisit(t["date_of_lnmp"]))));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getEquivalentFundalWeeks",value:function(e){return e<12?m["12"]:e>37?m["37"]:m[e]}},{key:"getEquivalentFundalHeight",value:function(e){for(var t in m){var n=m[t];if(e<=n)return parseInt(t)}return e>42?37:e<13?12:0}}]),n}(v["a"]),O=n("2706"),g=n("8a30"),T=n("8158"),D=n("2ef0"),k=n("b5e4"),y=n("6be2"),w=Object(r["defineComponent"])({components:{IonPage:g["D"]},mixins:[c["a"]],data:function(){return{service:{}}},watch:{ready:{handler:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e){n.next=5;break}return t.service=new b(t.patientID,t.providerID),n.next=4,t.service.loadPregnancyStatus();case 4:t.fields=t.getFields();case 5:case"end":return n.stop()}}),n)})))()},immediate:!0}},methods:{onFinish:function(e,t){var n=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.service.createEncounter();case 2:return e.t0=n.service,e.next=5,n.resolveObs(t);case 5:return e.t1=e.sent,e.next=8,e.t0.saveObservationList.call(e.t0,e.t1);case 8:n.nextTask();case 9:case"end":return e.stop()}}),e)})))()},diagnosisOptions:function(e){var t=this;return[].concat(Object(i["a"])(T["a"].getConceptsByCategory("anc_diagnosis")),[{name:"None"}]).map((function(n){return e(Object(o["a"])(Object(o["a"])({},t.toOption(n.name)),{},{isChecked:!1}))}))},getFields:function(){var e=this;return[{id:"ultrasound",helpText:"Ultrasound scan results available",type:s["b"].TT_SELECT,validation:function(e){return O["a"].required(e)},computedValue:function(t){return e.service.buildValueCoded("Ultrasound",t.value)},options:function(){return e.yesNoOptions()}},{id:"multiple_gestation",helpText:"Number of fetuses",type:s["b"].TT_SELECT,validation:function(e){return O["a"].required(e)},computedValue:function(t){return e.service.buildValueText("Multiple gestation",t.value)},condition:function(e){return"Yes"===e.ultrasound.value},options:function(){return[{label:"One",value:1},{label:"Two",value:2},{label:"Three",value:3},{label:"Four",value:4},{label:"Unknown",value:"Unknown"}]}},{id:"liquor",helpText:"Liquor",type:s["b"].TT_SELECT,validation:function(e){return O["a"].required(e)},computedValue:function(t){return e.service.buildValueText("LIQUOR",t.value)},condition:function(e){return"Yes"===e.ultrasound.value},options:function(){return e.mapStrToOptions(["Adequate","Not adequate","Unknown"])}},{id:"lie",helpText:"Lie",type:s["b"].TT_SELECT,validation:function(e){return O["a"].required(e)},computedValue:function(t){return e.service.buildValueText("Lie",t.value)},condition:function(e){return"Yes"===e.ultrasound.value},options:function(){return e.mapStrToOptions(["Longitudinal","Transverse","Unknown"])}},{id:"fetal_heart_movement_seen",helpText:"Fetal heart movement seen",type:s["b"].TT_SELECT,validation:function(e){return O["a"].required(e)},computedValue:function(t){return e.service.buildValueCoded("Fetal heart movement seen",t.value)},condition:function(e){return"Yes"===e.ultrasound.value},options:function(){return e.yesNoOptions()}},{id:"presentation",helpText:"Presentation",type:s["b"].TT_GROUP_SELECTOR,validation:function(t){return e.validateSeries([function(){return O["a"].required(t)},function(){return t&&!t.value?["Presentation cannot be Empty!"]:null},function(){var e,n,r;return t&&null!==t&&void 0!==t&&null!==(e=t.other)&&void 0!==e&&e.subGroupOptions&&Object(D["isEmpty"])(null===t||void 0===t||null===(n=t.other)||void 0===n?void 0:n.subGroupOptionValue)?["".concat((null===t||void 0===t||null===(r=t.other)||void 0===r?void 0:r.subgroupTitle)||"Subgroup"," has no value selected")]:null},function(){var e,n,r,a,o,i,u,c;return!t||Object(D["isEmpty"])(null===t||void 0===t||null===(e=t.other)||void 0===e?void 0:e.subGroupOptionValue)||Object(D["isEmpty"])(null===t||void 0===t||null===(n=t.other)||void 0===n||null===(r=n.subGroupOptionValue)||void 0===r||null===(a=r.other)||void 0===a?void 0:a.options)||null!==t&&void 0!==t&&null!==(o=t.other)&&void 0!==o&&null!==(i=o.subGroupOptionValue)&&void 0!==i&&i.value?null:["".concat(null===t||void 0===t||null===(u=t.other)||void 0===u||null===(c=u.subGroupOptionValue)||void 0===c?void 0:c.label,"'s value isnt selected")]}])},computedValue:function(t){var n,r,a,o,i=[e.service.buildValueText("Presentation",t.label)];null!==t&&void 0!==t&&null!==(n=t.other)&&void 0!==n&&null!==(r=n.subGroupOptionValue)&&void 0!==r&&r.value&&i.push(e.service.buildValueText("Position",null===t||void 0===t||null===(a=t.other)||void 0===a||null===(o=a.subGroupOptionValue)||void 0===o?void 0:o.value));return i},options:function(t){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{label:e,value:t,other:n}},r=[n("Vertex","",{options:e.mapStrToOptions(["Left Occipito Anterior","Left Occipito Transverse","Left Occipito Posterior","Right Occipito Anterior","Right Occipito Transverse","Right Occipito Posterior","Unknown"])}),e.toOption("Oblique"),e.toOption("Transverse"),e.toOption("Breech",{options:e.mapStrToOptions(["Left Sacro Anterior","Left Sacro Transverse","Left Sacro Posterior","Right Sacro Anterior","Right Sacro Transverse","Right Sacro Posterior","Unknown"])}),n("Face","",{concept:"Position",options:e.mapStrToOptions(["Left Mento Anterior","Left Mento Transverse","Left Mento Posterior","Right Mento Anterior","Right Mento Transverse","Right Mento Posterior","Unknown"])}),n("Shoulder","",{options:e.mapStrToOptions(["Left Acromion Dorsal Anterior","Left Acromion Dorsal Transverse","Left Acromion Dorsal Posterior","Right Acromion Dorsal Anterior","Right Acromion Dorsal Transverse","Right Acromion Dorsal Posterior","Unknown"])})];return t.presentation?t.presentation:[n("Cephalic","",{subGroupOptions:r,subgroupTitle:"Cephalic Position",options:e.mapStrToOptions(["Right Occipito Anterior","Left Occipito Anterior","Unknown"])}),n("Breech","",{subGroupOptions:r,subgroupTitle:"Breech Position",options:e.mapStrToOptions(["Right Sacro Anterior","Left Sacro Anterior","Unknown"])}),e.toOption("Ball"),e.toOption("Nil palpable")]}},{id:"enter_fundal_height",helpText:"Fundal height (cm)",type:s["b"].TT_NUMBER,dynamicHelpText:function(){var t="Fundal height (cm)";return e.service.gestationWeeks?"".concat(t," (").concat(e.service.gestationWeeks,"wks/").concat(e.service.getEquivalentFundalHeight(e.service.gestationWeeks)," cm)"):t},beforeNext:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n,r){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n||!"".concat(n.value).match(/unknown/i)||["Nil palpable","Ball"].includes(r.presentation.value)){t.next=9;break}return t.next=3,Object(k["a"])("Do you want to proceed with Unknown Fundal height?");case 3:if(!t.sent){t.next=7;break}t.t0=!0,t.next=8;break;case 7:t.t0=!1;case 8:return t.abrupt("return",t.t0);case 9:if(a=e.service.expectedFundalHeightForGestationWeeks(),o=n?parseInt(n.value):-1,!(e.service.gestationWeeks&&n&&"number"===typeof o&&(o<a||o>a))){t.next=20;break}return t.next=14,Object(k["a"])("\n                        Fundal height is not equal to expected ".concat(a," cm from gestation weeks of ").concat(e.service.gestationWeeks," .\n                        Are you sure about this value?"));case 14:if(!t.sent){t.next=18;break}t.t1=!0,t.next=19;break;case 18:t.t1=!1;case 19:return t.abrupt("return",t.t1);case 20:return t.abrupt("return",!0);case 21:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}(),validation:function(t){return e.validateSeries([function(){return O["a"].required(t)},function(){return t&&!"".concat(t.value).match(/unknown/i)?O["a"].rangeOf(t,10,45):null}])},computedValue:function(t){return"Unknown"!=t.value?e.service.buildValueNumber("Fundus",t.value):e.service.buildObs("Fundus",{value_coded:t.value,value_numeric:0})},config:{keypad:y["g"]}},{id:"fetal_heart_beat",helpText:"Fetal heart beat",type:s["b"].TT_SELECT,validation:function(e){return O["a"].required(e)},computedValue:function(t){return e.service.buildValueText("Fetal Heart Beat",t.value)},options:function(){return e.mapStrToOptions(["Heard","Not heard"])}},{id:"fetal_heart_rate",helpText:"Fetal heart rate",type:s["b"].TT_NUMBER,validation:function(e){return O["a"].required(e)},beforeNext:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=120,r=140,a=t?parseInt(t.value):-1,!t||"number"!==typeof a){e.next=9;break}if(!(a<n||a>r)){e.next=9;break}return e.next=7,Object(k["a"])("\n                            The value is out of Range of ".concat(n," - ").concat(r,".\n                            Are you sure about this value?"));case 7:return o=e.sent,e.abrupt("return",!!o);case 9:return e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),condition:function(e){return"Heard"===e.fetal_heart_beat.value},computedValue:function(t){return"Unknown"!=t.value?e.service.buildValueNumber("Fetal heart movement seen","".concat(t.value)):e.service.buildObs("Fetal heart movement seen",{value_numeric:0,value_coded:t.value})},config:{keypad:y["g"]}},{id:"enter_fetal_movement",helpText:"Fetal movement heard",type:s["b"].TT_SELECT,validation:function(e){return O["a"].required(e)},computedValue:function(t){return e.service.buildValueCoded("Fetal movement heard","".concat(t.value))},options:function(){return e.yesNoOptions()}},{id:"fetal_movement_felt",helpText:"Fetal movement felt",type:s["b"].TT_SELECT,validation:function(e){return O["a"].required(e)},condition:function(e){return!["Ball","Nil palpable"].includes(e.presentation.label)},computedValue:function(t){return e.service.buildValueCoded("Fetal movement felt","".concat(t.value))},options:function(){return e.yesNoOptions()}},{id:"last_fmf",helpText:"Last fetal movement felt (in Weeks)",type:s["b"].TT_NUMBER,validation:function(e){return O["a"].required(e)},condition:function(e){return"Unknown"!=e.fetal_movement_felt.value},computedValue:function(t){return"Unknown"!=t.value?e.service.buildValueNumber("Last Fetal movement felt",t.value):e.service.buildObs("Last Fetal movement felt",{value_numeric:0,value_coded:t.value})},options:function(){return e.yesNoUnknownOptions()}},{id:"diagnosis",helpText:"Diagnosis",type:s["b"].TT_MULTIPLE_SELECT,validation:function(e){return O["a"].required(e)},computedValue:function(t){return t&&t.map((function(e){return e.value})).includes("None")?[]:t.map((function(t){return e.service.buildValueCoded(t.label,"Yes")}))},onValueUpdate:function(e,t){return e.map((function(e){return"None"===t.value&&"None"!=e.value&&(e.isChecked=!1),"None"!=t.value&&t.isChecked&&"None"===e.value&&(e.isChecked=!1),e}))},options:function(){return e.diagnosisOptions((function(e){return e}))},config:{footerBtns:[{name:"None",slot:"end",onClickComponentEvents:{refreshOptions:function(){return e.diagnosisOptions((function(e){return e.isChecked="None"===e.label,e}))}},onClick:function(){return"None"}}]}}]}}}),_=n("6b0d"),E=n.n(_);const x=E()(w,[["render",a]]);t["default"]=x},3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"l",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"k",(function(){return u})),n.d(t,"i",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"h",(function(){return f})),n.d(t,"f",(function(){return v}));var r=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],a=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],o=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],i=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],u=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],c=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],s=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],l=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],d=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],p=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],f=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],v=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"6be2":function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"h",(function(){return p})),n.d(t,"a",(function(){return f}));var r=n("3800"),a=[r["k"],[["","Delete"]]],o=[r["i"],[["Delete"]]],i=[r["i"],[["Delete","Unknown"]]],u=[r["i"],[["N/A"],["Delete","Unknown"]]],c=[r["i"],[["Delete"]]],s=[r["i"],[["Unknown","Delete"],["Qwerty","A-Z"]]],l=[r["g"],[["Unknown"]]],d=[r["a"],[["0-9","Delete"],["Qwerty","Unknown"],["","Space"]]],p=[r["j"],[["","Delete"],["?123","0-9"],["Space","Unknown"]]],f=[{btn:"0-9",keyboard:s},{btn:"?123",keyboard:a},{btn:"A-Z",keyboard:d},{btn:"Qwerty",keyboard:p}]},7365:function(e,t,n){"use strict";var r,a=n("5530"),o=n("1da1"),i=n("3835"),u=(n("96cf"),n("ac1f"),n("1276"),n("d3b7"),n("ddb0"),n("b0c0"),n("25f0"),n("d81d"),n("4e82"),n("99af"),n("4de4"),n("07ac"),n("3ca3"),n("7a23")),c=n("ad60"),s=n("2ef0"),l=n("0fa1"),d=n("7f35"),p=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(r||(r={}));var f=function(e){return p["b"].toStandardHisDisplayFormat(e)},v={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.outcomeStartDate,e.next=3,Object(d["a"])("Data Integrity Issue Found","Patient died on ".concat(f(n)),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);case 3:return a=e.sent,e.abrupt("return","Cancel"===a?r.GO_TO_PATIENT_DASHBOARD:"Change outcome"===a?r.CHANGE_PATIENT_OUTCOME:r.CONTINUE);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},conditions:{outcome:function(e){return"Patient died"===e},outcomeStartDate:function(e,t){var n=t.sessionDate;return n>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.birthDate,a=t.sessionDate,e.next=3,Object(d["a"])("Data integrity issue found","","Session date ".concat(f(a)," is less than birth date of ").concat(f(n)),[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);case 3:return o=e.sent,e.abrupt("return","Change session date"===o?r.CHANGE_SESSION_DATE:r.GO_TO_PATIENT_DASHBOARD);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},conditions:{birthDate:function(e,t){var n=t.sessionDate;return n<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,a,o,i,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.providers,a=t.encounterName,o=t.sessionDate,i=t.apiDate,e.next=3,Object(d["c"])("Please select a provider for ".concat(a),"BDE: ".concat(f(o)," | Current: ").concat(f(i)),n,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);case 3:return u=e.sent,e.abrupt("return","Cancel"===u.action?{value:-1,flowState:r.GO_TO_PATIENT_DASHBOARD}:{value:u.selection,flowState:r.SET_PROVIDER});case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},conditions:{isBdeMode:function(e){return e}}}},h=n("c21d"),m=n("7920"),b=n("b5e4"),O=n("8e8b"),g=Object(u["defineComponent"])({components:{HisStandardForm:m["a"]},data:function(){return{patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},ready:!1}},watch:{$route:{handler:function(e){var t=this;e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.patientID=parseInt(e.params.patient_id),O["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then((function(e){t.patient=e,t.setEncounterFacts().then((function(){t.checkEncounterGuidelines().then((function(){t.ready=!0}))}))})))},immediate:!0,deep:!0}},computed:{cancelDestination:function(){return this.patientDashboardUrl()}},methods:{runflowState:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a={};if(a[r.SET_PROVIDER]=function(e){var n=e.split(" "),a=Object(i["a"])(n,1),o=a[0],u=Object(s["find"])(t.providers,{username:o});return u&&(t.providerID=u.person_id),r.CONTINUE},a[r.CHANGE_SESSION_DATE]=function(){return t.$router.push("/session/date?patient_dashboard_redirection_id=".concat(t.patientID)),r.EXIT},a[r.CHANGE_PATIENT_OUTCOME]=function(){return t.$router.push("/patient/programs/".concat(t.patientID)),r.EXIT},a[r.GO_TO_PATIENT_DASHBOARD]=function(){return t.gotoPatientDashboard(),r.EXIT},e in a)return a[e](n)},checkEncounterGuidelines:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,o,i,u,c,s,l,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=Object(h["a"])(e.facts,v),t.t0=regeneratorRuntime.keys(n);case 2:if((t.t1=t.t0()).done){t.next=20;break}if(a=t.t1.value,u=n[a],null===u||void 0===u||null===(o=u.actions)||void 0===o||!o.alert){t.next=13;break}return t.t2=e,t.next=9,null===u||void 0===u||null===(c=u.actions)||void 0===c?void 0:c.alert(e.facts);case 9:if(t.t3=t.sent,s=t.t2.runflowState.call(t.t2,t.t3),s!==r.EXIT){t.next=13;break}return t.abrupt("return");case 13:if(null===u||void 0===u||null===(i=u.actions)||void 0===i||!i.selection){t.next=18;break}return t.next=16,null===u||void 0===u||null===(l=u.actions)||void 0===l?void 0:l.selection(e.facts);case 16:d=t.sent,e.runflowState(d.flowState,d.value);case 18:t.next=2;break;case 20:case"end":return t.stop()}}),t)})))()},setEncounterFacts:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O["a"].get("PATIENT_PROGRAM",{patientID:e.patientID});case 3:n=t.sent,e.facts.outcome=n.outcome,e.facts.outcomeStartDate=n.startDate,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0),Object(b["c"])("".concat(t.t0));case 12:if(e.facts.sessionDate=c["a"].getSessionDate(),e.facts.apiDate=c["a"].getCachedApiDate(),e.facts.isBdeMode=c["a"].isBDE(),e.facts.birthDate=e.patient.getBirthdate(),e.facts.encounterName=e.$route.name?e.$route.name.toString().toUpperCase():"N/A",!c["a"].isBDE()){t.next=22;break}return t.next=20,O["a"].get("PROVIDERS");case 20:e.providers=t.sent,e.facts.providers=e.providers.sort((function(e,t){var n=e.username.toUpperCase(),r=t.username.toUpperCase();return n<r?-1:n>r?1:0})).map((function(e){var t,n="".concat(e.username);if(!Object(s["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var r,a=(null===(r=e.person)||void 0===r?void 0:r.names)||[],o=Object(i["a"])(a,1),u=o[0];n+=" (".concat(u.given_name," ").concat(u.family_name,")")}return n}));case 22:case"end":return t.stop()}}),t,null,[[0,8]])})))()},toOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{label:e,value:e,other:t}},mapStrToOptions:function(e){return e.map((function(e){return{label:e,value:e}}))},patientDashboardUrl:function(){return"/patient/dashboard/".concat(this.patientID)},gotoPatientDashboard:function(){return this.$router.push({path:this.patientDashboardUrl()})},nextTask:function(){return Object(l["b"])(this.patientID,this.$router)},yesNoOptions:function(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{label:e,value:"",other:Object(a["a"])(Object(a["a"])({},t),{},{values:this.yesNoOptions()})}},mapOptions:function(e){return e.map((function(e){return{label:e,value:e}}))},yesNoUnknownOptions:function(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object.values(e).filter((function(e){return e&&(e.tag===t||""===t)})).reduce((function(e,t){var n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e}),[]);return Promise.all(n)},inArray:function(e,t){try{return e.filter((function(e){return t(e)})).length>0}catch(n){return!1}},validateSeries:function(e){try{for(var t in e){var n=e[t]();if(n)return n}}catch(r){return[r]}}}});const T=g;t["a"]=T},7920:function(e,t,n){"use strict";var r=n("7a23");function a(e,t,n,a,o,i){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,8,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var o=n("9441"),i=Object(r["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:o["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),u=n("6b0d"),c=n.n(u);const s=c()(i,[["render",a]]);t["a"]=s},ff01:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("1da1"),a=n("d4ec"),o=n("bee2"),i=n("262e"),u=n("2caf"),c=(n("99af"),n("96cf"),n("cc6f")),s=n("74f4"),l=n("5a0c"),d=n.n(l),p=n("0011"),f=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(e,r){return Object(a["a"])(this,n),t.call(this,e,81,r)}return Object(o["a"])(n,[{key:"enrollPatient",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new s["a"](this.patientID),e.next=3,t.enrollProgram();case 3:return t.setStateDate(this.date),t.setStateId(118),e.next=7,t.updateState();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"calculateWeekOfFirstVisit",value:function(e){var t=new Date(e);t.setDate(t.getDate()+7);var n=new Date(this.getDate()),r=n-t;return String(Math.floor(r/6048e5))}},{key:"calculateGestationDateFromPeriod",value:function(e){return d()(this.date).subtract(e,"months").endOf("month").format("YYYY-MM-DD")}},{key:"estimateDelieveryDate",value:function(e){var t=new Date(e);t.setDate(t.getDate()+7),t.setMonth(t.getMonth()+9);var n=Object(p["a"])(t.getMonth()+1),r=Object(p["a"])(t.getDate());return"".concat(t.getFullYear(),"-").concat(n,"-").concat(r)}}]),n}(c["a"])}}]);
//# sourceMappingURL=chunk-de7ff166.beb2ca9a.js.map