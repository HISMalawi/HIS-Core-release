(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement36","TouchFormElement5","TouchFormElement53","TouchFormElement8"],{"0f12":function(e,t,i){},"2b75":function(e,t,i){"use strict";i("f13e")},3126:function(e,t,i){"use strict";i.r(t);var n=i("7a23");const o={class:"view-port-content"},l={class:"his-md-text"},c={class:"his-md-text"};function a(e,t,i,a,s,r){const d=Object(n["resolveComponent"])("interval-card"),b=Object(n["resolveComponent"])("ion-col"),h=Object(n["resolveComponent"])("ion-row"),u=Object(n["resolveComponent"])("ion-label"),f=Object(n["resolveComponent"])("ion-item"),p=Object(n["resolveComponent"])("ion-chip"),O=Object(n["resolveComponent"])("ion-list"),j=Object(n["resolveComponent"])("ion-card-content"),m=Object(n["resolveComponent"])("ion-card"),v=Object(n["resolveComponent"])("ion-grid"),y=Object(n["resolveComponent"])("view-port");return Object(n["openBlock"])(),Object(n["createBlock"])(y,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",o,[Object(n["createVNode"])(v,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(h,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{size:"4"},{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.listData,(t,i)=>(Object(n["openBlock"])(),Object(n["createBlock"])(h,{key:i},{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(t,i)=>(Object(n["openBlock"])(),Object(n["createBlock"])(b,{"size-md":"6","size-sm":"12",key:i},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(d,{showTitle:e.config.showRegimenCardTitle,label:t.label,onOnclick:i=>e.onselect(t),enabled:t.other.enabled,color:t.label===e.selected?"active-card-color":"inactive-card-color"},null,8,["showTitle","label","onOnclick","enabled","color"])]),_:2},1024))),128))]),_:2},1024))),128))]),_:1}),Object(n["createVNode"])(b,{size:"8"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(m,{style:{height:"65vh"}},{default:Object(n["withCtx"])(()=>[e.active.label?(Object(n["openBlock"])(),Object(n["createBlock"])(j,{key:0},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("span",l,Object(n["toDisplayString"])(e.active.other.label),1),Object(n["createVNode"])(f,{class:"his-sm-text"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.active.other.value),1)]),_:1})]),_:1}),Object(n["createElementVNode"])("span",c,Object(n["toDisplayString"])(e.active.other.other.label),1),Object(n["createVNode"])(O,null,{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.active.other.other.value,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(f,{class:"his-sm-text",key:t},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.label),1)]),_:2},1024),Object(n["createVNode"])(p,{class:"his-md-text",color:"primary",slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.value),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):Object(n["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})}const s={key:0},r={key:1,class:"his-md-text"};function d(e,t,i,o,l,c){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:Object(n["normalizeClass"])("his-card "+e.state),onClick:t[0]||(t[0]=()=>e.enabled?e.$emit("onclick"):null)},[e.enabled?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("s",s,Object(n["toDisplayString"])(e.label),1)),e.enabled?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,Object(n["toDisplayString"])(e.label),1)):Object(n["createCommentVNode"])("",!0)],2)}var b=Object(n["defineComponent"])({props:{color:{type:String},enabled:{type:Boolean,default:!0},label:{type:String,required:!0}},computed:{state(){return this.enabled?"clickable "+this.color:"disabled-card-color"}}}),h=(i("2b75"),i("d959")),u=i.n(h);const f=u()(b,[["render",d],["__scopeId","data-v-875731ee"]]);var p=f,O=i("0a79"),j=i("82a9"),m=i("7e73"),v=i("d867"),y=Object(n["defineComponent"])({components:{IntervalCard:p,ViewPort:O["a"],IonGrid:v["p"],IonCard:v["f"],IonCardContent:v["g"]},mixins:[j["default"]],data:()=>({active:{}}),activated(){this.init()},mounted(){this.init()},methods:{clearValue(){this.active={},this.clearSelection()},async init(){this.$emit("onFieldActivated",this),"next"===this.activationState&&(this.active={},this.clearSelection());const e=await this.options(this.fdata);this.listData=m["a"].convertArrayToTurples(e)},onselect(e){this.selected=e.label,this.active=e,this.$emit("onValue",e)}}});i("6b2f");const k=u()(y,[["render",a],["__scopeId","data-v-4e80c748"]]);t["default"]=k},"347b":function(e,t,i){"use strict";i("c122")},"36ad":function(e,t,i){"use strict";i.r(t);var n=i("7a23");function o(e,t,i,o,l,c){const a=Object(n["resolveComponent"])("ion-input");return Object(n["openBlock"])(),Object(n["createBlock"])(a,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t),type:e.type,disabled:e.disabled,readonly:e.readOnly,autocapitalize:"sentences",placeholder:e.placeholder},null,8,["modelValue","type","disabled","readonly","placeholder"])}var l=i("d867"),c=i("2ed9"),a=Object(n["defineComponent"])({name:"HisInput",components:{IonInput:l["v"]},setup(){const{activePlatformProfile:e}=Object(c["e"])(),t=Object(n["computed"])(()=>"HIS_KEYBOARD_ONLY"===e.value.keyboard);return{readOnly:t}},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1},placeholder:{type:String,default:()=>""}}}),s=(i("86f4"),i("d959")),r=i.n(s);const d=r()(a,[["render",o],["__scopeId","data-v-04472bbc"]]);t["default"]=d},"51c8":function(e,t,i){"use strict";i.r(t);var n=i("7a23"),o=Object(n["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const l=o;t["default"]=l},"6b2f":function(e,t,i){"use strict";i("0f12")},"82a9":function(e,t,i){"use strict";i.r(t);i("14d9");var n=i("7a23"),o=i("db10"),l=i("2345"),c=i("36ad"),a=i("6be2"),s=i("0a79"),r=i("51c8"),d=i("d867"),b=i("2ef0"),h=Object(n["defineComponent"])({components:{IonList:d["y"],IonItem:d["w"],IonLabel:d["x"],HisTextInput:c["default"],HisKeyboard:o["a"],ViewPort:s["a"],IonGrid:d["p"],IonRow:d["I"],IonCol:d["m"],IonInfiniteScroll:d["t"],IonInfiniteScrollContent:d["u"],IonContent:d["n"]},mixins:[r["default"]],data:()=>({showKeyboard:!1,selected:"",filter:"",filtered:[],keyboard:a["h"],listData:[],infiniteScroll:{enabled:!1,page:1,limit:10,threshold:"100px",handler:async(e,t,i)=>[]}}),created(){var e,t,i,n,o,l,c,a,s,r,d;this.showKeyboard=!0===(null===(e=this.config)||void 0===e?void 0:e.showKeyboard),this.infiniteScroll.enabled=!0===(null===(t=this.config)||void 0===t||null===(i=t.infiniteScroll)||void 0===i?void 0:i.enabled),this.infiniteScroll.page=(null===(n=this.config)||void 0===n||null===(o=n.infiniteScroll)||void 0===o?void 0:o.page)||1,this.infiniteScroll.limit=(null===(l=this.config)||void 0===l||null===(c=l.infiniteScroll)||void 0===c?void 0:c.limit)||10,this.infiniteScroll.threshold=(null===(a=this.config)||void 0===a||null===(s=a.infiniteScroll)||void 0===s?void 0:s.threshold)||"100px",this.infiniteScroll.handler=null===(r=this.config)||void 0===r||null===(d=r.infiniteScroll)||void 0===d?void 0:d.handler},watch:{footerButtonEvent:{handler(e){if(Object(b["isPlainObject"])(e.onClickComponentEvents)){const t=(null===e||void 0===e?void 0:e.onClickComponentEvents)||{};if(t&&"function"===typeof t.setValue){const i=t.setValue(e);"string"===typeof i&&(this.filter=i,this.selected=i,this.$emit("onValue",{label:i,value:i}))}}},deep:!0},listData:{handler(e){e&&(this.filtered=e)},deep:!0,immediate:!0},filter:{async handler(e){var t;if(e)if(null!==(t=this.config)&&void 0!==t&&t.isFilterDataViaApi){if(this.filtered=await this.options(this.fdata,e),this.selected===this.filter){const e=Object(b["find"])(this.filtered,{label:this.filter});e&&this.$emit("onValue",e)}}else this.infiniteScroll.enabled&&(this.infiniteScroll.page=1),this.filtered=this.listData.filter(e=>this.isMatch(e.label,this.filter));else this.filtered=this.listData},immediate:!0}},methods:{onTTsetValueComponentEvent(e){"string"===typeof e&&(this.filter=e,this.selected=e,this.$emit("onValue",{label:e,value:e}))},isMatch(e,t){return e.match(new RegExp(t,"i"))},clearSelection(){this.filter="",this.selected=""},onKbValue(e,t=!0){t&&this.selected!==e&&(this.filter=e,this.selected=this.filter)},keypress(e){this.filter||(this.selected=""),this.filter=Object(l["a"])(e,this.selected),this.selected=this.filter},async pushData(e){if(this.infiniteScroll.enabled&&"function"===typeof this.infiniteScroll.handler){this.infiniteScroll.page++;const e=await this.infiniteScroll.handler(this.filter,this.infiniteScroll.page,this.infiniteScroll.limit);this.listData.push(...e)}e.target.complete()}}}),u=(i("347b"),i("d959")),f=i.n(u);const p=f()(h,[["__scopeId","data-v-f5aee92a"]]);t["default"]=p},"86f4":function(e,t,i){"use strict";i("89a0")},"89a0":function(e,t,i){},c122:function(e,t,i){},db10:function(e,t,i){"use strict";var n=i("7a23");const o={class:"his-floating-keyboard"},l={class:"his-floating-keyboard-content"};function c(e,t,i,c,a,s){const r=Object(n["resolveComponent"])("base-keyboard");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("div",l,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.activeLayout,(t,i)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:i},[Object(n["createVNode"])(r,{layout:t,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])]))),128))])])}var a=i("6be2"),s=i("c924"),r=Object(n["defineComponent"])({components:{BaseKeyboard:s["a"]},props:{initalKeyboardName:{type:String},kbConfig:{type:Array,required:!0},onKeyPress:{type:Function,required:!0}},data:()=>({activeLayout:{}}),watch:{initalKeyboardName:{handler(e){e&&this.$nextTick(()=>this.switchKeyboard(e))},immediate:!0},kbConfig:{handler(e){e&&(this.activeLayout=e)},deep:!0,immediate:!0}},methods:{keypress(e){this.isFunctionKey(e)||this.onKeyPress(e)},isFunctionKey(e){return!!this.switchKeyboard(e)},switchKeyboard(e){const t=a["a"].map(e=>e.btn).indexOf(e);return t>=0&&(this.activeLayout=a["a"][t].keyboard,!0)}}}),d=i("d959"),b=i.n(d);const h=b()(r,[["render",c]]);t["a"]=h},f13e:function(e,t,i){}}]);
//# sourceMappingURL=TouchFormElement36.23915c27.js.map