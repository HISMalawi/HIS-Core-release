(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c93bec2"],{3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"l",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"k",(function(){return o})),n.d(t,"i",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"a",(function(){return p})),n.d(t,"j",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"h",(function(){return f})),n.d(t,"f",(function(){return m}));var r=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],i=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],a=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],u=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],o=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],c=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],s=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],p=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],d=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],l=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],f=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],m=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"4d5a":function(e,t,n){"use strict";n.r(t);var r=n("7a23");function i(e,t,n,i,a,u){var o=Object(r["resolveComponent"])("his-standard-form");return Object(r["openBlock"])(),Object(r["createBlock"])(o,{fields:e.fields,onFinishAction:e.onFinish,skipSummary:!0,activeField:e.fieldComponent},null,8,["fields","onFinishAction","activeField"])}var a=n("1da1"),u=(n("96cf"),n("07ac"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("4de4"),n("b0c0"),n("25f0"),n("ac1f"),n("5319"),n("d95e")),o=n("7920"),c=n("23e6"),s=n("b5e4"),p=n("2706"),d=n("3e53"),l=n("2ef0"),f=n("9ceb"),m=n("ad60"),h=n("fe70"),b=n("ad49"),g=n("3800"),v=Object(r["defineComponent"])({components:{HisStandardForm:o["a"]},data:function(){return{app:{},fields:[],fieldComponent:"",people:[],patient:{},assignNewARVNumber:!1,suggestedARVNumber:""}},created:function(){this.setApp(),this.fields=[this.getIdSelectionField(),this.getIdSearchField(),this.getARVDuplicatesField(),this.getReassignARVNumberField()]},methods:{getIdSelectionField:function(){var e=this;return{id:"identifier_type",helpText:"Select identifier type",type:u["b"].TT_SELECT,requireNext:!1,validation:function(e){return p["a"].required(e)},options:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.app.programPatientIdentifiers?Object.values(e.app.programPatientIdentifiers):[],t.next=3,Promise.all(n.map(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof t.visible){e.next=4;break}return e.next=3,t.visible();case 3:return e.abrupt("return",e.sent);case 4:if(!t.globalPropertySetting){e.next=8;break}return e.next=7,b["a"].isProp(t.globalPropertySetting);case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return r=t.sent,t.abrupt("return",n.filter((function(e,t){return e.useForSearch&&r[t]})).map((function(e){return{label:e.name,value:e.id,other:e}})));case 5:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()}},getIdSearchField:function(){var e;return{id:"identifier",helpText:"Identifier",dynamicHelpText:function(e){return"Search by ".concat(e.identifier_type.label)},type:u["b"].TT_TEXT,validation:function(t){return p["a"].validateSeries([function(){return p["a"].required(t)},function(){return"function"===typeof e.validation?e.validation(t):null}])},config:{casing:"uppercase",customKeyboard:[g["c"],[["Delete"]]],prependValue:function(t){return e=t.identifier_type.other,e.prefix()}}}},getARVDuplicatesField:function(){var e=this;return{id:"arv_duplicates",helpText:"Duplicates",dynamicHelpText:function(e){return"Duplicate patients with identifer ".concat(e.identifier.value)},type:u["b"].TT_DATA_TABLE,requireNext:!1,condition:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.hasDuplicates(n);case 2:if(t.t0=t.sent,!t.t0){t.next=5;break}t.t0="ARV Number"===n.identifier_type.label;case 5:return t.abrupt("return",t.t0);case 6:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}(),config:{hiddenFooterBtns:["Clear","Finish"],columns:function(){return[[f["a"].thTxt("First Name"),f["a"].thTxt("Family Name"),f["a"].thTxt("Gender"),f["a"].thDate("Birthdate"),f["a"].thTxt("Current Village"),f["a"].thTxt("Actions",{colspan:2})]]},rows:function(){return e.people.map((function(t){var n=new c["a"](t);return[f["a"].td(n.getGivenName()),f["a"].td(n.getFamilyName()),f["a"].td(n.getGender()),f["a"].tdDate(n.getBirthdate().toString()),f["a"].td(n.getCurrentVillage()),f["a"].tdBtn("Select patient",(function(){return e.selectPatient(n.getID())}),{style:{fontSize:"12px",textTransform:"none"}},"warning"),f["a"].tdBtn("Re-assign identifier",(function(){return e.reassignARVNumber(n)}),{style:{fontSize:"12px",textTransform:"none"}},"danger")]}))}}}},getReassignARVNumberField:function(){var e=this;return{id:"arv_number",helpText:"ART number",type:u["b"].TT_TEXT,computedValue:function(e){var t=e.value;return t},validation:function(e){return p["a"].required(e)},condition:function(t){return"arv_number"===e.fieldComponent&&e.assignNewARVNumber},defaultValue:function(){return e.suggestedARVNumber},config:{initialKb:"0-9",prependValue:function(e){return e.identifier_type.other.prefix()}}}},setApp:function(){var e=d["a"].getActiveApp();e&&(this.app=e)},hasDuplicates:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c["a"].findByOtherID(e.identifier_type.value,e.identifier.value);case 2:return t.people=n.sent,n.abrupt("return",t.people.length>1);case 4:case"end":return n.stop()}}),n)})))()},selectPatient:function(e){this.$router.push("/patients/confirm?person_id=".concat(e))},reassignARVNumber:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,h["e"].create({});case 2:return r=n.sent,r.present(),n.next=6,m["a"].getNextSuggestedARVNumber();case 6:i=n.sent,t.suggestedARVNumber=i.arv_number.replace(/^\D+|\s/g,""),t.patient=e,t.assignNewARVNumber=!0,t.fieldComponent="arv_number",r.dismiss();case 11:case"end":return n.stop()}}),n)})))()},onFinish:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!Object(l["isEmpty"])(t.people)){n.next=4;break}Object(s["e"])("Client not found"),n.next=18;break;case 4:if(!t.assignNewARVNumber||Object(l["isEmpty"])(t.patient)){n.next=16;break}return n.prev=5,n.next=8,t.patient.updateARVNumber(e.arv_number.value);case 8:t.selectPatient(t.patient.getID()),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](5),Object(s["e"])("".concat(n.t0));case 14:n.next=18;break;case 16:r=new c["a"](t.people[0]),t.selectPatient(r.getID());case 18:case"end":return n.stop()}}),n,null,[[5,11]])})))()}}}),x=n("6b0d"),y=n.n(x);const w=y()(v,[["render",i]]);t["default"]=w},7920:function(e,t,n){"use strict";var r=n("7a23");function i(e,t,n,i,a,u){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,8,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var a=n("9441"),u=Object(r["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:a["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),o=n("6b0d"),c=n.n(o);const s=c()(u,[["render",i]]);t["a"]=s}}]);
//# sourceMappingURL=chunk-3c93bec2.4c8f051a.js.map