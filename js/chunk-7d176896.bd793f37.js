(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d176896"],{3800:function(e,n,t){"use strict";t.d(n,"d",(function(){return a})),t.d(n,"l",(function(){return i})),t.d(n,"f",(function(){return r})),t.d(n,"o",(function(){return o})),t.d(n,"e",(function(){return u})),t.d(n,"b",(function(){return l})),t.d(n,"n",(function(){return c})),t.d(n,"k",(function(){return s})),t.d(n,"j",(function(){return d})),t.d(n,"h",(function(){return f})),t.d(n,"a",(function(){return b})),t.d(n,"m",(function(){return p})),t.d(n,"c",(function(){return v})),t.d(n,"i",(function(){return m})),t.d(n,"g",(function(){return h}));const a=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],i=[["1","2","3"],["4","5","6"],["7","8","9"],["Del","0","."],["Unknown","",""]],r=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0",""]],o=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],u=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],l=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],c=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],s=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],d=[["1","2","3"],["4","5","6"],["7","8","9"],["←","0","→"]],f=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],b=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],p=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],v=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],m=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],h=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"38ec":function(e,n,t){"use strict";t.r(n);var a=t("7a23"),i=t("7920"),r=t("cc6f");class o extends r["a"]{constructor(e,n){super(e,104,n)}}var u=t("2706"),l=t("d95e"),c=t("e86e"),s=t("b5e4"),d=t("23e6"),f=t("8f12"),b=t("3800"),p=t("93c7"),v=t("e343"),m=t("8e8b"),h=Object(a["defineComponent"])({__name:"Registration",setup(e){let n,t;const r=Object(a["ref"])([]),{goToNextTask:h,patientDashboardUrl:y}=Object(p["a"])((e,a,i)=>{t=i,n=new o(a,e),r.value=[_(),j(),D(),C(),O()]});async function g(e,t){await w(e);const a=await n.createEncounter();if(!a)return Object(s["e"])("Unable to create registration encounter");const i=await Object(v["d"])({...t}),r=await n.saveObservationList(i);if(!r)return Object(s["e"])("Unable to save observations");h()}async function w(e){const n=e["national_id_available"],a=e["national_id"];n&&"Yes"===n.value&&(await t.updateMWNationalId(a.value),m["a"].invalidate("ACTIVE_PATIENT"))}async function T(e){if(!e)return!1;const n=await d["a"].findByOtherID(f["d"],e);return n.length>0}function _(){return{id:"visit_type",helpText:"Type of visit",type:l["b"].TT_SELECT,validation:e=>u["a"].required(e),computedValue:e=>({obs:n.buildValueCoded("Type of visit",e.value)}),options:()=>[{label:"New",value:"New patient"},{label:"Referral",value:"Referral"},{label:"Re-visiting",value:"Re-visiting"}]}}function j(){return{id:"referring_facility_name",helpText:"Referred from",type:l["b"].TT_SELECT,validation:e=>u["a"].required(e),computedValue:({label:e})=>({obs:n.buildValueText("Referred from",e)}),condition:e=>"Referral"===e.visit_type.value,options:(e,n="")=>Object(c["b"])(n),config:{showKeyboard:!0,isFilterDataViaApi:!0}}}function D(){return{id:"national_id_available",helpText:"National ID Available",type:l["b"].TT_SELECT,validation:e=>u["a"].required(e),condition:()=>"Unknown"===t.getMWNationalID(),options:()=>Object(v["e"])(),appearInSummary:()=>!1}}function C(){return{id:"national_id",helpText:"Enter National ID",type:l["b"].TT_TEXT,validation:e=>u["a"].isMWNationalID(e),condition:e=>"Yes"===e.national_id_available.value,beforeNext:async e=>!e.value||!await T(e.value.toString())||(Object(s["e"])("National ID already exists"),!1),summaryMapValue:({value:e})=>({value:e,label:"National ID"}),config:{casing:"uppercase",customKeyboard:[b["c"],[["Delete"]]]}}}function O(){return{id:"patient_pregnant",helpText:"Patient pregnant",type:l["b"].TT_SELECT,validation:e=>u["a"].required(e),computedValue:({value:e})=>({obs:n.buildValueCoded("PATIENT PREGNANT",e)}),condition:()=>t.isChildBearing(),options:()=>Object(v["e"])()}}return(e,n)=>(Object(a["openBlock"])(),Object(a["createBlock"])(i["a"],{cancelDestinationPath:Object(a["unref"])(y),fields:r.value,onFinishAction:g},null,8,["cancelDestinationPath","fields"]))}});const y=h;n["default"]=y},e343:function(e,n,t){"use strict";t.d(n,"d",(function(){return i})),t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"e",(function(){return l}));t("13d5"),t("14d9");var a=t("2ef0");function i(e,n=""){const t=Object.values(e).filter(e=>e&&(e.tag===n||""===n)).reduce((e,n)=>{const t=n.obs?n.obs:n;return Array.isArray(t)?e=e.concat(t):"function"===typeof t?e.push(t()):e.push(t),e},[]);return Promise.all(t)}function r(e){return e.map(e=>({label:e,value:e}))}function o(e,n="name",t="name"){return e.map(e=>({label:e[n],value:e[t],other:e}))}function u(e,n,t=!1){return e.map(e=>{var i;const r=Object(a["find"])(n,{label:e});return{label:e,value:null!==(i=null===r||void 0===r?void 0:r.value)&&void 0!==i?i:"",other:{values:t?l():c()}}})}function l(){return r(["Yes","No","Unknown"])}function c(){return r(["Yes","No"])}},e86e:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"d",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"g",(function(){return l})),t.d(n,"f",(function(){return c})),t.d(n,"a",(function(){return s})),t.d(n,"h",(function(){return d})),t.d(n,"i",(function(){return f})),t.d(n,"j",(function(){return b})),t.d(n,"e",(function(){return p}));var a=t("5713"),i=t("2ef0");async function r(e=""){const n=await a["a"].getFacilities({name:e});return n.filter(e=>!Object(i["isEmpty"])(e)&&""!=e.name.trim()).map(e=>({label:e.name,value:e.location_id,other:e}))}async function o(e=""){const n=await a["a"].getLabs({search_name:e});return n.map(e=>({label:e,value:e}))}async function u(e=""){const n=await a["a"].getFacilities({name:e,tag:"Facility adult sections"});return n.map(e=>({label:e.name,value:e.name,other:e}))}async function l(){const e=await a["a"].getSpecialistClinics();return e.map(e=>({label:e.name,value:e.name,other:e}))}async function c(){const e=await a["a"].getRegions();return e.map(e=>({label:e.name,value:e.region_id,other:e}))}async function s(e){const n=await a["a"].getDistricts(e);return n.map(e=>({label:e.name,value:e.district_id,other:e}))}async function d(e,n=""){const t=await a["a"].getTraditionalAuthorities(e,n);return t.map(e=>({label:e.name,value:e.traditional_authority_id,other:e}))}async function f(e,n=""){const t=await a["a"].getVillages(e,n);return t.map(e=>({label:e.name,value:e.village_id,other:e}))}async function b(e="a",n=1){const t=await a["a"].getVillagesByName(e,n);return t.map(e=>({label:e.name,value:e.village_id,other:e}))}function p(){const e=["Catholic Church","CCAP","Seventh Day","Mosque","Primary School","Borehole","Secondary School","College","Market","Football Ground","Other"];return e.map(e=>({label:e,value:e,other:{code:e}}))}}}]);
//# sourceMappingURL=chunk-7d176896.bd793f37.js.map