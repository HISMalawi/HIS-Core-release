(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46397160"],{7920:function(e,t,n){"use strict";var o=n("7a23");function i(e,t,n,i,s,a){return Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var s=n("9441"),a=Object(o["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:s["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),r=n("d959"),c=n.n(r);const l=c()(a,[["render",i]]);t["a"]=l},f49b:function(e,t,n){"use strict";n.r(t);var o=n("7a23");function i(e,t,n,i,s,a){const r=Object(o["resolveComponent"])("his-standard-form");return Object(o["openBlock"])(),Object(o["createBlock"])(r,{fields:e.fields,onFinishAction:e.onFinish,skipSummary:!0},null,8,["fields","onFinishAction"])}var s=n("d95e"),a=n("7920"),r=n("2706"),c=n("3800"),l=n("156d"),d=n("7f35"),u=n("b5e4"),p=n("d867"),h=Object(o["defineComponent"])({components:{HisStandardForm:a["a"]},methods:{async onFinish(e){const t=e.protocol.value,n=e.ip_address.value,o=e.port.value;l["b"].setLocalStorage(t,n,o);const i=await p["X"].create({message:"Please wait...",backdropDismiss:!1});await i.present();const s=await l["b"].healthCheck();p["X"].dismiss(),s&&200===s.status&&s?this.$router.back():(Object(u["e"])(`\n          Unable to connect to: ${t}://${n}: ${o}\n        `),this.clearLocalStorage())},getFields(){this.fields=[{id:"protocol",helpText:"Select Protocol",type:s["b"].TT_SELECT,requireNext:!1,validation:e=>r["a"].required(e),options:()=>[{label:"HTTP",value:"http"},{label:"HTTPS",value:"https"}]},{id:"ip_address",helpText:"Enter IP Address",type:s["b"].TT_IP_ADDRESS,validation:e=>r["a"].required(e)||r["a"].isIPAddress(e)},{id:"port",helpText:"Enter Port",validation:e=>r["a"].required(e),type:s["b"].TT_TEXT,config:{customKeyboard:[c["i"],[["Delete"]]]}}]},async showConfigNotice(){if(this.isUsingLocalStorage()){const e=await Object(d["a"])("Config notice","The system is currently using user specified configurations.                 Do you wish to reset back to server configurations?","",[{name:"Reset configurations",slot:"start",color:"success"},{name:"New configurations",slot:"end"}]);"Reset configurations"===e&&(this.clearLocalStorage(),this.$router.back())}},isUsingLocalStorage(){return"true"===localStorage.getItem("useLocalStorage")},clearLocalStorage(){const e=["useLocalStorage","apiURL","apiPort","apiProtocol"];l["b"].removeOnly(e)}},data(){return{fields:[]}},async mounted(){await this.showConfigNotice(),this.getFields()}}),m=n("d959"),f=n.n(m);const b=f()(h,[["render",i]]);t["default"]=b}}]);
//# sourceMappingURL=chunk-46397160.0e573652.js.map