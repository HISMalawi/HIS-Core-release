(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fe92ce6"],{3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"l",(function(){return a})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"k",(function(){return o})),n.d(t,"i",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"h",(function(){return p})),n.d(t,"f",(function(){return T}));var r=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],a=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],u=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],i=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],o=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],c=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],s=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],l=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],d=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],f=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],p=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],T=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"3b8c":function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var r=n("1da1"),a=n("d4ec"),u=n("bee2"),i=n("262e"),o=n("2caf"),c=(n("d3b7"),n("b0c0"),n("ac1f"),n("466d"),n("99af"),n("159b"),n("d81d"),n("96cf"),n("cc6f")),s=n("7957"),l=n("5a0c"),d=n.n(l),f=n("2ef0"),p=n("71c3"),T=function(e){Object(i["a"])(n,e);var t=Object(o["a"])(n);function n(e,r){return Object(a["a"])(this,n),t.call(this,e,53,r)}return Object(u["a"])(n,[{key:"getFamilyPlanningMethods",value:function(){return["ORAL CONTRACEPTIVE PILLS","DEPO-PROVERA","INTRAUTERINE CONTRACEPTION","CONTRACEPTIVE IMPLANT","MALE CONDOMS","FEMALE CONDOMS","TUBAL LIGATION","NONE"]}},{key:"getTptTreatmentStatus",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",c["a"].getJson("/patients/".concat(this.patientID,"/tpt_status")));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"hasCompleteTptDispensations",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p["a"].getAllDrugOrders(this.patientID);case 3:return t=e.sent,n=t.reduce((function(e,t){var n=t.drug.name;return n.match(/Isoniazid/i)&&(e["isoniazid"]+=t.quantity),n.match(/Rifapentine/i)&&(e["rifapentine"]+=t.quantity),e}),{rifapentine:0,isoniazid:0}),r=n.rifapentine,a=n.isoniazid,e.abrupt("return",a>=168||a>=36&&r>=72);case 8:return e.prev=8,e.t0=e["catch"](0),console.error(e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"patientHitMenopause",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].getFirstObs(this.patientID,"Why does the woman not use birth control");case 2:return t=e.sent,e.abrupt("return",!(!t||"string"!==typeof(null===t||void 0===t?void 0:t.value_text))&&(!!t.value_text.match(/menopause/i)&&c["a"].obsInValidPeriod(t)));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"hasTreatmentHistoryObs",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].getFirstObs(this.patientID,"Previous TB treatment history");case 2:return t=e.sent,e.abrupt("return",t&&c["a"].obsInValidPeriod(t));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"patientCompleted3HP",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].getFirstObs(this.patientID,"Previous TB treatment history");case 2:return t=e.sent,e.abrupt("return",!!(t&&"string"===typeof t.value_text&&c["a"].obsInValidPeriod(t)&&t.value_text.match(/complete/i)));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getDrugSideEffects",value:function(){return c["a"].getJson("programs/".concat(c["a"].getProgramID(),"/patients/").concat(this.patientID,"/medication_side_effects"),{date:this.date})}},{key:"getClient",value:function(){return c["a"].getFirstValueCoded(this.patientID,"Patient present")}},{key:"clientDueForCxCa",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].getJson("last_cxca_screening_details",{id:this.patientID,date:this.date});case 2:if(t=e.sent,Object(f["isEmpty"])(t)){e.next=7;break}return n=t["date_screened"],r=d()(this.date).diff(n,"years"),e.abrupt("return",r>=1);case 7:return e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"clientHasHadAHysterectomy",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].getFirstValueCoded(this.patientID,"Reason for NOT offering CxCa");case 2:if(t=e.sent,"Hysterectomy"!==t){e.next=5;break}return e.abrupt("return",!0);case 5:return e.next=7,c["a"].getFirstValueText(this.patientID,"Treatment");case 7:if(n=e.sent,"Hysterectomy"!==n){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getTLObs",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=function(e){return e&&"Tubal ligation"===e.value_coded&&c["a"].obsInValidPeriod(e)},e.next=3,c["a"].getFirstObs(this.patientID,"Family planning");case 3:if(n=e.sent,!t(n)){e.next=8;break}return e.abrupt("return",t(n));case 8:return e.next=10,c["a"].getFirstObs(this.patientID,"Method of family planning");case 10:return r=e.sent,e.abrupt("return",t(r));case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getPreviousDrugs",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].getJson("patients/".concat(this.patientID,"/drugs_received"));case 2:if(t=e.sent,t){e.next=5;break}return e.abrupt("return");case 5:return n={},t.forEach((function(e){n[e.drug_inventory_id]=e})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"familyPlanningMethods",value:function(e,t){var n={"ORAL CONTRACEPTIVE PILLS":{"DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","CONTRACEPTIVE IMPLANT":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"DEPO-PROVERA":{"ORAL CONTRACEPTIVE PILLS":"N","INTRAUTERINE CONTRACEPTION":"N","CONTRACEPTIVE IMPLANT":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"INTRAUTERINE CONTRACEPTION":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","CONTRACEPTIVE IMPLANT":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"CONTRACEPTIVE IMPLANT":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"MALE CONDOMS":{"ORAL CONTRACEPTIVE PILLS":"Y","DEPO-PROVERA":"Y","INTRAUTERINE CONTRACEPTION":"Y","CONTRACEPTIVE IMPLANT":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"Y","TUBAL LIGATION":"N",VASECTOMY:"Y"},"FEMALE CONDOMS":{"ORAL CONTRACEPTIVE PILLS":"Y","DEPO-PROVERA":"Y","INTRAUTERINE CONTRACEPTION":"Y","CONTRACEPTIVE IMPLANT":"Y","MALE CONDOMS":"Y","RYTHM METHOD":"Y","TUBAL LIGATION":"N",VASECTOMY:"Y"},"RYTHM METHOD":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","CONTRACEPTIVE IMPLANT":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"TUBAL LIGATION":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"N","FEMALE CONDOMS":"N","CONTRACEPTIVE IMPLANT":"N","RYTHM METHOD":"N",VASECTOMY:"N"},VASECTOMY:{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"Y","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"N","CONTRACEPTIVE IMPLANT":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N"},NONE:{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"N","FEMALE CONDOMS":"N","CONTRACEPTIVE IMPLANT":"N","RYTHM METHOD":"N","TUBAL LIGATION":"N"}},r=n[e];return t.map((function(e){return"N"===r[e.label]?{label:e.label,value:e.value,isChecked:!1,disabled:!0}:{label:e.label,value:e.value,isChecked:e.isChecked,disabled:!1}}))}}]),n}(c["a"])},"6be2":function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"h",(function(){return f})),n.d(t,"a",(function(){return p}));var r=n("3800"),a=[r["k"],[["","Delete"]]],u=[r["i"],[["Delete"]]],i=[r["i"],[["Delete","Unknown"]]],o=[r["i"],[["N/A"],["Delete","Unknown"]]],c=[r["i"],[["Delete"]]],s=[r["i"],[["Unknown","Delete"],["Qwerty","A-Z"]]],l=[r["g"],[["Unknown"]]],d=[r["a"],[["0-9","Delete"],["Qwerty","Unknown"],["","Space"]]],f=[r["j"],[["","Delete"],["?123","0-9"],["Space","Unknown"]]],p=[{btn:"0-9",keyboard:s},{btn:"?123",keyboard:a},{btn:"A-Z",keyboard:d},{btn:"Qwerty",keyboard:f}]},"71c3":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("5530"),a=n("d4ec"),u=n("bee2"),i=n("262e"),o=n("2caf"),c=(n("d81d"),n("99af"),n("1c74")),s=function(e){Object(i["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(a["a"])(this,n),t.call(this)}return Object(u["a"])(n,null,[{key:"create",value:function(e){return this.postJson("drug_orders",e)}},{key:"updateDispensationOrders",value:function(e){var t=this;return this.postJson("dispensations",{program_id:this.getProgramID(),dispensations:e.map((function(e){return{date:t.getSessionDate(),drug_order_id:e["order_id"],quantity:e["quantity"]}}))})}},{key:"getDrugOrderHistory",value:function(e){return this.getJson("drug_orders",{patient_id:e})}},{key:"getDrugOrders",value:function(e){return this.getJson("drug_orders",{patient_id:e,date:this.getSessionDate(),program_id:this.getProgramID()})}},{key:"getAllDrugOrders",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return this.getJson("drug_orders",{patient_id:e,program_id:c["e"].getProgramID(),page_size:t})}},{key:"getLastDrugsReceived",value:function(e){return this.getJson("patients/".concat(e,"/last_drugs_received"),{date:this.getSessionDate(),program_id:this.getProgramID()})}},{key:"getDrugDosages",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.getSessionDate(),r={drug_id:t,date:n};return this.getJson("programs/".concat(this.getProgramID(),"/patients/").concat(e,"/drug_doses"),r)}},{key:"getOrderByPatient",value:function(e,t){return this.getJson("/drug_orders",Object(r["a"])({patient_id:e,program_id:this.getProgramID()},t))}}]),n}(c["e"])},b446:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return R}));var r,a=n("2909"),u=n("3835"),i=n("5530"),o=n("1da1"),c=(n("96cf"),n("99af"),n("caad"),n("a15b"),n("d3b7"),n("25f0"),n("ac1f"),n("466d"),n("1276"),n("d95e")),s=[{label:"Jan",value:1},{label:"Feb",value:2},{label:"Mar",value:3},{label:"Apr",value:4},{label:"May",value:5},{label:"Jun",value:6},{label:"Jul",value:7},{label:"Aug",value:8},{label:"Sep",value:9},{label:"Oct",value:10},{label:"Nov",value:11},{label:"Dec",value:12}],l=n("9283"),d=n("2706"),f=n("3800"),p=n("6be2"),T=n("5a0c"),O=n.n(T),N=n("1c74");function E(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=[];return n&&r.push("UNKNOWN"),{id:e,helpText:"".concat(t," Year"),appearInSummary:function(){return!1},type:c["b"].TT_TEXT,config:{customKeyboard:[f["i"],[r,["DELETE"]]]}}}function v(e,t){return{id:e,helpText:"".concat(t," Month"),appearInSummary:function(){return!1},type:c["b"].TT_SELECT,options:function(){return s}}}function m(e,t){return{id:e,helpText:"".concat(t," Day"),type:c["b"].TT_MONTHLY_DAYS,appearInSummary:function(){return!1}}}function h(e,t){return{id:e,helpText:"".concat(t," Estimated period"),type:c["b"].TT_SELECT,appearInSummary:function(){return!1},options:function(){return[{label:"6 months ago",value:180},{label:"12 months ago",value:365},{label:"18 months ago",value:540},{label:"24 months ago",value:730},{label:"Over 2 years ago",value:730}]}}}function b(e,t){return{id:e,helpText:"".concat(t," Age Estimate"),type:c["b"].TT_NUMBER,appearInSummary:function(){return!1},config:{keypad:p["e"]}}}function g(e){return parseInt(e)<10?"0".concat(e):e}function A(e,t,n){return I.apply(this,arguments)}function I(){return I=Object(o["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,i,o,c,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.defaultValue){e.next=12;break}return e.next=3,n.defaultValue(t);case 3:if(a=e.sent,!a){e.next=12;break}i=a.split("-"),o=Object(u["a"])(i,3),c=o[0],s=o[1],l=o[2],e.t0=r,e.next="Year"===e.t0?9:"Month"===e.t0?10:"Day"===e.t0?11:12;break;case 9:return e.abrupt("return",c||"");case 10:return e.abrupt("return",parseInt(s)||"");case 11:return e.abrupt("return",parseInt(l)||"");case 12:return e.abrupt("return","");case 13:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function D(e){return l["b"].toStandardHisDisplayFormat(e)}function y(e,t,n,r){if(t.minDate){var a=t.minDate(n,r);if(new Date(e)<new Date(a))return["".concat(D(e)," is less than minimum date of ").concat(D(a))]}if(t.maxDate){var u=t.maxDate(n,r);if(u&&new Date(e)>new Date(u))return["".concat(D(e)," is greater than max date of  ").concat(D(u))]}}function R(e){var t="",n="",o="",c="",f=!1,p="year_".concat(e.id),T="month_".concat(e.id),I="day_".concat(e.id),R="age_estimate_".concat(e.id),C="duration_estimate_".concat(e.id),M=E(p,e.helpText,e.estimation.allowUnknown),L=v(T,e.helpText),P=m(I,e.helpText),k=b(R,e.helpText),x=h(C,e.helpText),w="boolean"===typeof e.estimation.allowUnknownMonthDay&&e.estimation.allowUnknownMonthDay,S=function(t){return!(t[p]&&t[p].value&&["Unknown"].includes(t[p].value))&&(!e.condition||e.condition(t))},V=function(e,t){var r=[{type:"year",value:n,default:"YYYY"},{type:"month",value:o,default:"MM"},{type:"day",value:c,default:"DD"}];return r.reduce((function(n,r){var a=[null,void 0,"Unknown",""];return t===r.type?a.includes(e)?n.push(r.default):n.push(e):a.includes(r.value)?n.push(r.default):n.push(r.value),n}),[]).join("-")};"function"===typeof e.init&&(M.init=e.init),M.updateHelpTextOnValue=function(e){return"".concat(M.helpText," (").concat(V(null===e||void 0===e?void 0:e.label,"year"),")")},M.proxyID=e.id,M.unload=function(e){return n=e.value.toString()},M.config=Object(i["a"])(Object(i["a"])({},M.config),e.config),M.defaultValue=function(t){return A(t,e,"Year")},M.condition=function(t){return!e.condition||e.condition(t)},M.validation=function(t,n,r){if(e.required&&d["a"].required(t))return["Year cannot be empty"];var a=t?t.value:"";if(!e.estimation.allowUnknown&&a.toString().match(/unknown/i))return["Value unknown is not permitted"];if(a&&!["Unknown"].includes(a)&&isNaN(a)||a<1900)return["Invalid Year"];if(a&&"function"===typeof e.minDate){var u=l["b"].getYear(e.minDate(n,r));if(parseInt(a)<u)return["Year of ".concat(a," is less than Minimum year of ").concat(u)]}if(a&&"function"===typeof e.maxDate){var i=e.maxDate(n,r);if(i&&a>l["b"].getYear(i))return["Year of ".concat(a," exceeds Maximum year of ").concat(l["b"].getYear(i))]}return null},M.summaryMapValue=function(){return{label:e.summaryLabel||e.helpText,value:t?D(t):"Unknown"}},M.appearInSummary=function(t,n){return n===e.id},M.computedValue=function(n){if(t){var r=t.split("-"),a=Object(u["a"])(r,3),i=(a[0],a[1]),o=a[2];return t="".concat(n.value,"-").concat(i,"-").concat(o),e.computeValue(t,!1)}if(n&&"Unknown"===n.value)return t="",e.computeValue("Unknown",!1)},L.updateHelpTextOnValue=function(e){return"".concat(L.helpText," (").concat(V(null===e||void 0===e?void 0:e.label,"month"),")")},L.proxyID=e.id,L.unload=function(e){return o=g(e.value.toString())},L.condition=function(e){return S(e)},L.validation=function(e){return d["a"].required(e)},L.defaultValue=function(t){return A(t,e,"Month")},w&&(L.options=function(){return[].concat(Object(a["a"])(s),[{label:"Unknown",value:"Unknown"}])}),L.computedValue=function(n,r){if("".concat(n.value).match(/unknown/i))return t="".concat(r[p].value,"-07-15"),e.computeValue(t,!0);if(t){var a=t.split("-"),i=Object(u["a"])(a,3),o=i[0],c=(i[1],i[2]),s=g("".concat(n.value));return t="".concat(o,"-").concat(s,"-").concat(c),e.computeValue(t,!1)}},P.proxyID=e.id,P.updateHelpTextOnValue=function(e){return"".concat(P.helpText," (").concat(V(null===e||void 0===e?void 0:e.label,"day"),")")},P.condition=function(e){return!"".concat(e[T].value).match(/unknown/i)&&S(e)},P.validation=function(r,a,u){return d["a"].required(r)?["Day is required for date"]:(f=!!"".concat(r.value).match(/unknown/i),c=f?"15":g("".concat(r.value)),t="".concat(n,"-").concat(o,"-").concat(c),y(t,e,a,u))},P.defaultValue=function(t){return A(t,e,"Day")},P.computedValue=function(){return e.computeValue(t,f)},P.unload=function(t,n,r,a){e.unload&&e.unload(t,n,r,a)},P.beforeNext=function(n,r){return!e.beforeNext||e.beforeNext(t,r)},P.config={year:function(e){return e[p].value},month:function(e){return e[T].value}},w||(P.config.keyboardActions=[]);var Y=function(t,n){var r=["Unknown"===t[p].value,!e.condition||e.condition(t),e.estimation.estimationFieldType===n];return r.every(Boolean)};return k.proxyID=e.id,k.validation=function(n,r,a){if(n&&n.value>300)return["Age estimate is too high and exceeding hard limit of 300"];if(isNaN(parseInt(n.value.toString())))return["Please enter a valid number"];var u=/^(12[0-7]|1[01][0-9]|[1-9]?[0-9])$/;if(!n.value.toString().match(u))return["Not a valid age estimate"];var i=O()(N["e"].getSessionDate()).subtract(n.value,"years").year();return t="".concat(i,"-07-15"),y(t,e,r,a)},k.condition=function(e){return Y(e,r.AGE_ESTIMATE_FIELD)},k.computedValue=function(){return e.computeValue(t,!0)},k.beforeNext=function(n,r){return!e.beforeNext||e.beforeNext(t,r)},x.proxyID=e.id,x.validation=function(n,r,a){return d["a"].required(n)?["Please select an estimate"]:(t=O()(N["e"].getSessionDate()).subtract(n.value,"day").format(l["a"]),y(t,e,r,a))},x.condition=function(e){return Y(e,r.MONTH_ESTIMATE_FIELD)},x.computedValue=function(){return e.computeValue(t,!0)},x.beforeNext=function(n,r){return!e.beforeNext||e.beforeNext(t,r)},[M,L,P,k,x]}(function(e){e["AGE_ESTIMATE_FIELD"]="age-estimate-field",e["MONTH_ESTIMATE_FIELD"]="month-period-estimate-field"})(r||(r={}))}}]);
//# sourceMappingURL=chunk-5fe92ce6.f88f0fcd.js.map