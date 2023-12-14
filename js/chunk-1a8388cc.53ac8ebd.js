(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a8388cc"],{"2ad1":function(e,n,t){"use strict";t.r(n);var o=t("7a23"),i=t("7920"),a=t("d95e"),c=t("d867"),u=t("93c7"),r=t("e343"),l=t("cc6f");class s extends l["a"]{constructor(e,n){super(e,58,n)}}var d=t("13ea"),b=t.n(d),p=Object(o["defineComponent"])({__name:"ChronicConditions",setup(e){const n=Object(o["ref"])([]);let t;const{goToNextTask:l,patientDashboardUrl:d}=Object(u["a"])((e,o)=>{t=new s(o,e),n.value=[f(),h(),T(),O()]});async function p(e,n){await t.createEncounter();const o=await Object(r["d"])(n);await t.saveObservationList(o),l()}function f(){return{id:"conditions",helpText:"Condition",type:a["b"].TT_MULTIPLE_YES_NO,computedValue:e=>v(e),options:(e,n)=>Object(r["c"])(["Cancer","Diabetes","HIV","Chronic Heart condition","Chronic liver disease"],n,!0)}}function h(){return{id:"additional_conditions",helpText:"Condition continued...",type:a["b"].TT_MULTIPLE_YES_NO,options:(e,n)=>Object(r["c"])(["TB","Asthma","Epilepsy","Kidney Disease"],n,!0),computedValue:e=>v(e)}}function T(){return{id:"bmi",helpText:"Select BMI range",type:a["b"].TT_SELECT,computedValue:e=>({obs:t.buildValueText("BMI",e.label)}),options:()=>Object(r["b"])(["< 18.5","18.5 - 24.9","25 - 29.9",">= 30"])}}function O(){return{id:"other",helpText:"Other (Specify)",type:a["b"].TT_TEXT,computedValue:e=>b()(e)?null:{obs:t.buildValueText("Other (specify)",e.label)}}}function v(e){return b()(e)?null:{obs:e.map(async e=>({...await t.buildValueCoded("Condition",e.label),child:[await t.buildValueCoded(e.label,e.value)]}))}}return(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["unref"])(c["D"]),null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i["a"],{cancelDestinationPath:Object(o["unref"])(d),fields:n.value,onFinishAction:p,skipSummary:!0},null,8,["cancelDestinationPath","fields"])]),_:1}))}});const f=p;n["default"]=f},e343:function(e,n,t){"use strict";t.d(n,"d",(function(){return i})),t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return u})),t.d(n,"e",(function(){return r}));t("13d5"),t("14d9");var o=t("2ef0");function i(e,n=""){const t=Object.values(e).filter(e=>e&&(e.tag===n||""===n)).reduce((e,n)=>{const t=n.obs?n.obs:n;return Array.isArray(t)?e=e.concat(t):"function"===typeof t?e.push(t()):e.push(t),e},[]);return Promise.all(t)}function a(e){return e.map(e=>({label:e,value:e}))}function c(e,n="name",t="name"){return e.map(e=>({label:e[n],value:e[t],other:e}))}function u(e,n,t=!1){return e.map(e=>{var i;const a=Object(o["find"])(n,{label:e});return{label:e,value:null!==(i=null===a||void 0===a?void 0:a.value)&&void 0!==i?i:"",other:{values:t?r():l()}}})}function r(){return a(["Yes","No","Unknown"])}function l(){return a(["Yes","No"])}}}]);
//# sourceMappingURL=chunk-1a8388cc.53ac8ebd.js.map