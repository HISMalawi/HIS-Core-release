(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement1","TouchFormElement23","TouchFormElement8"],{"101a":function(e,t,o){"use strict";o.r(t);var n=o("7a23");const a=Object(n["createTextVNode"])(" Expected Date Of Delivery: "),c=Object(n["createTextVNode"])(" Gestation Weeks: "),i=Object(n["createTextVNode"])("(Abnormal)");function l(e,t,o,l,s,d){const r=Object(n["resolveComponent"])("ion-label"),u=Object(n["resolveComponent"])("ion-item"),b=Object(n["resolveComponent"])("ion-text"),O=Object(n["resolveComponent"])("ion-list"),h=Object(n["resolveComponent"])("his-date-input"),j=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(j,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(h,{config:e.config,options:e.options,clear:e.clear,fdata:e.formData,cdata:e.computedFormData,activationState:e.state,onValue:e.onValue,onOnValue:e.onNewValue,defaultValue:e.defaultValue},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(O,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,{class:"his-md-text",lines:"none"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(r,{slot:"start"},{default:Object(n["withCtx"])(()=>[a]),_:1}),Object(n["createVNode"])(r,{slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.delieveryDate),1)]),_:1})]),_:1}),Object(n["createVNode"])(u,{class:"his-md-text",lines:"none"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(r,{slot:"start"},{default:Object(n["withCtx"])(()=>[c]),_:1}),Object(n["createVNode"])(r,{color:e.lmpIsAbnormal?"danger":"success",slot:"end"},{default:Object(n["withCtx"])(()=>[e.lmpIsAbnormal?(Object(n["openBlock"])(),Object(n["createBlock"])(b,{key:0},{default:Object(n["withCtx"])(()=>[i]),_:1})):Object(n["createCommentVNode"])("",!0),Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(e.gestationWeeks),1)]),_:1},8,["color"])]),_:1})]),_:1})]),_:1},8,["config","options","clear","fdata","cdata","activationState","onValue","onOnValue","defaultValue"])]),_:1})}var s=o("51c8"),d=o("374c"),r=o("8a30"),u=Object(n["defineComponent"])({components:{HisDateInput:d["default"],IonText:r["O"],IonPage:r["D"],IonItem:r["w"],IonLabel:r["x"],IonList:r["y"]},mixins:[s["default"]],data:()=>({delieveryDate:"N/A",gestationWeeks:"N/A",minGestationWeeks:0,maxGestationWeeks:42}),activated(){this.$emit("onFieldActivated",this)},mounted(){var e,t;this.$emit("onFieldActivated",this),this.minGestationWeeks=(null===(e=this.config)||void 0===e?void 0:e.minGestationWeeks)||0,this.maxGestationWeeks=(null===(t=this.config)||void 0===t?void 0:t.maxGestationWeeks)||42},computed:{lmpIsAbnormal(){const e=parseInt(this.gestationWeeks);return e<this.minGestationWeeks||e>this.maxGestationWeeks}},methods:{onNewValue(e){e&&"Unknown"!=e.label?("function"===typeof this.config.calculateDelieveryDate&&(this.delieveryDate=this.config.calculateDelieveryDate(e.value)),"function"===typeof this.config.calculateGestationWeeks&&(this.gestationWeeks=this.config.calculateGestationWeeks(e.value))):(this.delieveryDate="N/A",this.gestationWeeks="N/A"),this.$emit("onValue",{...e,other:this.gestationWeeks})}}}),b=o("d959"),O=o.n(b);const h=O()(u,[["render",l]]);t["default"]=h},"374c":function(e,t,o){"use strict";o.r(t);var n=o("7a23");const a=Object(n["createVNode"])("b",null,"TODAY",-1),c=Object(n["createVNode"])("b",null,"Unknown",-1);function i(e,t,o,i,l,s){const d=Object(n["resolveComponent"])("ion-input"),r=Object(n["resolveComponent"])("view-port"),u=Object(n["resolveComponent"])("picker-selector"),b=Object(n["resolveComponent"])("ion-col"),O=Object(n["resolveComponent"])("ion-row"),h=Object(n["resolveComponent"])("ion-button"),j=Object(n["resolveComponent"])("ion-grid");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])(r,{showFull:!1},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(d,{class:"input_display",readonly:!0,value:e.value},null,8,["value"]),Object(n["renderSlot"])(e.$slots,"default",{date:e.value})]),_:3}),Object(n["createVNode"])(j,{class:"his-floating-keyboard"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(O,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{"sm-size":"12"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,{value:e.getYear,onOnIncrement:t[1]||(t[1]=t=>e.add("year")),onOnDecrement:t[2]||(t[2]=t=>e.subtract("year"))},null,8,["value"])]),_:1}),Object(n["createVNode"])(b,{"sm-size":"12"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,{value:e.getMonth,onOnIncrement:t[3]||(t[3]=t=>e.add("month")),onOnDecrement:t[4]||(t[4]=t=>e.subtract("month"))},null,8,["value"])]),_:1}),Object(n["createVNode"])(b,{"sm-size":"12"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,{value:e.getDay,onOnIncrement:t[5]||(t[5]=t=>e.add("day")),onOnDecrement:t[6]||(t[6]=t=>e.subtract("day"))},null,8,["value"])]),_:1})]),_:1}),Object(n["createVNode"])(O,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{class:"ion-text-center"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(h,{color:"success",style:{width:"100%",height:"6vh"},onClick:e.today},{default:Object(n["withCtx"])(()=>[a]),_:1},8,["onClick"])]),_:1}),Object(n["createVNode"])(b,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(h,{disabled:!e.config.allowUnknown,color:"warning",style:{width:"100%",height:"6vh"},onClick:t[7]||(t[7]=t=>e.value="Unknown")},{default:Object(n["withCtx"])(()=>[c]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})],64)}var l=o("0a79"),s=o("51c8"),d=o("9283"),r=o("1c74");const u=Object(n["withScopeId"])("data-v-0a5e8d79");Object(n["pushScopeId"])("data-v-0a5e8d79");const b=Object(n["createTextVNode"])(" + "),O=Object(n["createTextVNode"])(" - ");Object(n["popScopeId"])();const h=u((function(e,t,o,a,c,i){const l=Object(n["resolveComponent"])("ion-button"),s=Object(n["resolveComponent"])("ion-col"),d=Object(n["resolveComponent"])("ion-row"),r=Object(n["resolveComponent"])("ion-grid");return Object(n["openBlock"])(),Object(n["createBlock"])(r,{class:"his-card"},{default:u(()=>[Object(n["createVNode"])(d,null,{default:u(()=>[Object(n["createVNode"])(s,{size:"12"},{default:u(()=>[Object(n["createVNode"])(l,{onClick:e.onIncrement,color:"light",class:"w-button"},{default:u(()=>[b]),_:1},8,["onClick"])]),_:1})]),_:1}),Object(n["createVNode"])(d,null,{default:u(()=>[Object(n["createVNode"])(s,{class:"ion-text-center ion-margin-vertical large-text"},{default:u(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.value),1)]),_:1})]),_:1}),Object(n["createVNode"])(d,null,{default:u(()=>[Object(n["createVNode"])(s,{size:"12"},{default:u(()=>[Object(n["createVNode"])(l,{onClick:e.onDecrement,color:"light",class:"w-button"},{default:u(()=>[O]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}));var j=o("8a30"),m=Object(n["defineComponent"])({components:{IonGrid:j["p"],IonRow:j["H"],IonCol:j["m"],IonButton:j["d"]},props:{value:{type:String,required:!0}},emits:["onIncrement","onDecrement"],setup(e,t){const o=()=>t.emit("onIncrement"),n=()=>t.emit("onDecrement");return{onIncrement:o,onDecrement:n}}}),f=(o("5b4a"),o("d959")),p=o.n(f);const v=p()(m,[["render",h],["__scopeId","data-v-0a5e8d79"]]);var V=v,w=Object(n["defineComponent"])({components:{PickerSelector:V,IonInput:j["v"],ViewPort:l["a"],IonGrid:j["p"],IonCol:j["m"],IonRow:j["H"],IonButton:j["d"]},mixins:[s["default"]],data:()=>({value:"",date:"",isInit:!0}),mounted(){this.init()},activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this),"function"===typeof this.config.initialDate?this.date=new Date(this.config.initialDate()):this.date||(this.date=new Date),await this.setDefaultValue(),this.isInit=!1},async setDefaultValue(){if(this.defaultValue&&!this.value){const e=await this.defaultValue(this.fdata,this.cdata);e&&(this.isInit=!1,this.date=new Date(e))}},add(e){this.date=d["b"].add(this.fmt(this.date),e,1)},subtract(e){this.date=d["b"].subtract(this.fmt(this.date),e,1)},today(){this.date=new Date(r["e"].getSessionDate())},fmt(e){return d["b"].toStandardHisFormat(e)}},computed:{getYear(){return d["b"].getYear(this.fmt(this.date))},getMonth(){return d["b"].getMonth(this.fmt(this.date))},getDay(){return d["b"].getDay(this.fmt(this.date))}},watch:{date(e){this.isInit||(this.value=d["b"].toStandardHisFormat(e))},value(e){e?this.$emit("onValue",{label:e,value:this.value}):this.$emit("onValue",null)},clear(){this.value=""}}});const C=p()(w,[["render",i]]);t["default"]=C},"51c8":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),a=Object(n["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const c=a;t["default"]=c},"5b4a":function(e,t,o){"use strict";o("9a5e1")},"9a5e1":function(e,t,o){}}]);
//# sourceMappingURL=TouchFormElement1.0ab1f433.js.map