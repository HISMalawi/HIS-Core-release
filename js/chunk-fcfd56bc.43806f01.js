(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fcfd56bc"],{"209b":function(e,n,t){"use strict";t.r(n);var i=t("7a23");function o(e,n,t,o,a,s){const c=Object(i["resolveComponent"])("his-standard-form"),r=Object(i["resolveComponent"])("ion-page");return Object(i["openBlock"])(),Object(i["createBlock"])(r,null,{default:Object(i["withCtx"])(()=>[Object(i["createVNode"])(c,{formLabel:"Pregnancy status",fields:e.fields,onFinishAction:e.onFinish,skipSummary:!0,cancelDestinationPath:e.patientDashboardUrl()},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}var a=t("d95e"),s=t("d867"),c=t("cc6f");class r extends c["a"]{constructor(e,n=-1){super(e,111,n)}}var l=t("7920"),d=t("e9be"),u=Object(i["defineComponent"])({components:{IonPage:s["D"],HisStandardForm:l["a"]},setup(){const e=Object(i["ref"])([]),n=new r(-1),{saveEncounter:t,patientDashboardUrl:o}=Object(d["a"])({onInitVisit:()=>{e.value=[{id:"hts_female_pregnant",helpText:"Select pregnancy status",type:a["b"].TT_SELECT,isRequired:()=>!0,finalComputedValue:e=>{const t="Pregnancy status";return{offlineMeta:{[t]:e.value},obs:n.buildValueCoded(t,e.value)}},options:()=>[{label:"Non-pregnant",value:"Not Pregnant / Breastfeeding"},{label:"Pregnant",value:"Pregnant woman"},{label:"Breastfeeding",value:"Breastfeeding"}]}]}});function s(e,i){t({encounterName:"PREGNANCY STATUS",encounterTypeID:n.encounterTypeID,computedData:i})}return{patientDashboardUrl:o,onFinish:s,fields:e}}}),p=t("6b0d"),m=t.n(p);const f=m()(u,[["render",o]]);n["default"]=f},7920:function(e,n,t){"use strict";var i=t("7a23");function o(e,n,t,o,a,s){return Object(i["openBlock"])(),Object(i["createBlock"])(Object(i["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var a=t("9441"),s=Object(i["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:a["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,n){this.$emit("onFinish",e,n)},onIndex(e){this.$emit("onIndex",e)}}}),c=t("6b0d"),r=t.n(c);const l=r()(s,[["render",o]]);n["a"]=l}}]);
//# sourceMappingURL=chunk-fcfd56bc.43806f01.js.map