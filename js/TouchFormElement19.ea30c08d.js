(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement19","TouchFormElement5","TouchFormElement51","TouchFormElement8"],{"0498":function(e,t,i){},"0734":function(e,t,i){"use strict";i.r(t);var n=i("7a23");const o=Object(n["withScopeId"])("data-v-1ed70ed4"),a=o((function(e,t,i,a,l,c){const s=Object(n["resolveComponent"])("ion-label"),r=Object(n["resolveComponent"])("ion-item"),d=Object(n["resolveComponent"])("ion-list"),u=Object(n["resolveComponent"])("ion-col"),h=Object(n["resolveComponent"])("ion-row"),b=Object(n["resolveComponent"])("ion-grid"),f=Object(n["resolveComponent"])("view-port");return Object(n["openBlock"])(),Object(n["createBlock"])(f,null,{default:o(()=>[Object(n["createVNode"])(d,{class:"view-port-content"},{default:o(()=>[Object(n["createVNode"])(b,null,{default:o(()=>[Object(n["createVNode"])(h,null,{default:o(()=>[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.filtered,(t,i)=>(Object(n["openBlock"])(),Object(n["createBlock"])(u,{size:"4",key:i},{default:o(()=>[Object(n["createVNode"])("div",{class:["his-card clickable",{"active-card-color":e.selected===t.label}],onClick:i=>e.onselect(t)},[Object(n["createVNode"])(d,null,{default:o(()=>[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t.other.list,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(r,{key:t},{default:o(()=>[Object(n["createVNode"])(s,null,{default:o(()=>[Object(n["createVNode"])("b",null,Object(n["toDisplayString"])(e.label),1)]),_:2},1024),Object(n["createVNode"])("span",{style:e.style||{}},Object(n["toDisplayString"])(e.value),5)]),_:2},1024))),128))]),_:2},1024)],10,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})}));var l=i("82a9"),c=i("2ef0"),s=Object(n["defineComponent"])({name:"HisSelect",mixins:[l["default"]],watch:{clear(){this.clearSelection()}},mounted(){this.init()},activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this),this.listData=await this.options(this.fdata),await this.setDefaultValue()},async setDefaultValue(){if(this.defaultValue){const e=await this.defaultValue(this.fdata,this.cdata,this.selected);if(e){const t=Object(c["find"])(this.listData,{label:e})||Object(c["find"])(this.listData,{value:e});t&&this.onselect(t)}}},async onselect(e){if(this.selected=e.label,this.onValue){const t=await this.onValue(e,this);if(!t)return void(this.selected="")}this.onValueUpdate&&(this.listData=await this.onValueUpdate(e,this.listData)),this.$emit("onValue",e)}}}),r=(i("9aa4"),i("d959")),d=i.n(r);const u=d()(s,[["render",a],["__scopeId","data-v-1ed70ed4"]]);t["default"]=u},2345:function(e,t,i){"use strict";function n(e,t,i){let n=t;if(e.match(/enter/i))return n+"\r\n";if(e.match(/clear/i))return"";if(n=e.match(/delete|del/i)?n.match(/unknown/i)||n.match(/n\/a/i)?"":n.substring(0,n.length-1):e.match(/space/i)?t+" ":e.match(/unknown/i)?"Unknown":e.match(/n\/a/i)?"N/A":n.match(/unknown/i)||n.match(/n\/a/i)?e:`${t}${e}`,"string"===typeof n&&n)switch(i){case"lowercase":n=n.toLowerCase();break;case"uppercase":n=n.toUpperCase();break;default:n=n.charAt(0).toUpperCase()+n.slice(1);break}return n}i.d(t,"a",(function(){return n}))},"36ad":function(e,t,i){"use strict";i.r(t);var n=i("7a23");const o=Object(n["withScopeId"])("data-v-64dded10"),a=o((function(e,t,i,o,a,l){const c=Object(n["resolveComponent"])("ion-input");return Object(n["openBlock"])(),Object(n["createBlock"])(c,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[1]||(t[1]=t=>e.text=t),type:e.type,disabled:e.disabled,readonly:e.readOnly,autocapitalize:"sentences"},null,8,["modelValue","type","disabled","readonly"])}));var l=i("8a30"),c=i("2ed9"),s=Object(n["defineComponent"])({name:"HisInput",components:{IonInput:l["v"]},setup(){const{activePlatformProfile:e}=Object(c["e"])(),t=Object(n["computed"])(()=>"HIS_KEYBOARD_ONLY"===e.value.keyboard);return{readOnly:t}},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1}}}),r=(i("ba6e"),i("d959")),d=i.n(r);const u=d()(s,[["render",a],["__scopeId","data-v-64dded10"]]);t["default"]=u},"51c8":function(e,t,i){"use strict";i.r(t);var n=i("7a23"),o=Object(n["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const a=o;t["default"]=a},7989:function(e,t,i){},"82a9":function(e,t,i){"use strict";i.r(t);var n=i("7a23"),o=i("db10"),a=i("2345"),l=i("36ad"),c=i("6be2"),s=i("0a79"),r=i("51c8"),d=i("8a30"),u=i("2ef0"),h=Object(n["defineComponent"])({components:{IonList:d["y"],IonItem:d["w"],IonLabel:d["x"],HisTextInput:l["default"],HisKeyboard:o["a"],ViewPort:s["a"],IonGrid:d["p"],IonRow:d["H"],IonCol:d["m"],IonInfiniteScroll:d["t"],IonInfiniteScrollContent:d["u"],IonContent:d["n"]},mixins:[r["default"]],data:()=>({showKeyboard:!1,selected:"",filter:"",filtered:[],keyboard:c["h"],listData:[],infiniteScroll:{enabled:!1,page:1,limit:10,threshold:"100px",handler:async(e,t,i)=>[]}}),created(){var e,t,i,n,o,a,l,c,s,r,d;this.showKeyboard=!0===(null===(e=this.config)||void 0===e?void 0:e.showKeyboard),this.infiniteScroll.enabled=!0===(null===(t=this.config)||void 0===t||null===(i=t.infiniteScroll)||void 0===i?void 0:i.enabled),this.infiniteScroll.page=(null===(n=this.config)||void 0===n||null===(o=n.infiniteScroll)||void 0===o?void 0:o.page)||1,this.infiniteScroll.limit=(null===(a=this.config)||void 0===a||null===(l=a.infiniteScroll)||void 0===l?void 0:l.limit)||10,this.infiniteScroll.threshold=(null===(c=this.config)||void 0===c||null===(s=c.infiniteScroll)||void 0===s?void 0:s.threshold)||"100px",this.infiniteScroll.handler=null===(r=this.config)||void 0===r||null===(d=r.infiniteScroll)||void 0===d?void 0:d.handler},watch:{footerButtonEvent:{handler(e){if(Object(u["isPlainObject"])(e.onClickComponentEvents)){const t=(null===e||void 0===e?void 0:e.onClickComponentEvents)||{};if(t&&"function"===typeof t.setValue){const i=t.setValue(e);"string"===typeof i&&(this.filter=i,this.selected=i,this.$emit("onValue",{label:i,value:i}))}}},deep:!0},listData:{handler(e){e&&(this.filtered=e)},deep:!0,immediate:!0},filter:{async handler(e){var t;if(e)if(null!==(t=this.config)&&void 0!==t&&t.isFilterDataViaApi){if(this.filtered=await this.options(this.fdata,e),this.selected===this.filter){const e=Object(u["find"])(this.filtered,{label:this.filter});e&&this.$emit("onValue",e)}}else this.infiniteScroll.enabled&&(this.infiniteScroll.page=1),this.filtered=this.listData.filter(e=>this.isMatch(e.label,this.filter));else this.filtered=this.listData},immediate:!0}},methods:{isMatch(e,t){return e.match(new RegExp(t,"i"))},clearSelection(){this.filter="",this.selected=""},onKbValue(e,t=!0){t&&this.selected!==e&&(this.filter=e,this.selected=this.filter)},keypress(e){this.filter||(this.selected=""),this.filter=Object(a["a"])(e,this.selected),this.selected=this.filter},async pushData(e){if(this.infiniteScroll.enabled&&"function"===typeof this.infiniteScroll.handler){this.infiniteScroll.page++;const e=await this.infiniteScroll.handler(this.filter,this.infiniteScroll.page,this.infiniteScroll.limit);this.listData.push(...e)}e.target.complete()}}}),b=(i("a5b4"),i("d959")),f=i.n(b);const p=f()(h,[["__scopeId","data-v-1443418d"]]);t["default"]=p},"9aa4":function(e,t,i){"use strict";i("f48e")},a5b4:function(e,t,i){"use strict";i("0498")},ba6e:function(e,t,i){"use strict";i("7989")},c924:function(e,t,i){"use strict";var n=i("7a23");function o(e,t,i,o,a,l){const c=Object(n["resolveComponent"])("ion-button");return Object(n["openBlock"])(),Object(n["createBlock"])("table",null,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.layout,(t,i)=>(Object(n["openBlock"])(),Object(n["createBlock"])("tr",{key:i},[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(t,i)=>(Object(n["openBlock"])(),Object(n["createBlock"])("td",{class:"his-keyboard-margin",key:"btn-"+i},[t?(Object(n["openBlock"])(),Object(n["createBlock"])(c,{key:0,style:{width:e.btnSize},class:"his-keyboard-btn",onClick:()=>e.keyPress(t)},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t),1)]),_:2},1032,["style","onClick"])):Object(n["createCommentVNode"])("",!0)]))),128))]))),128))])}var a=i("8a30"),l=Object(n["defineComponent"])({components:{IonButton:a["d"]},props:{btnSize:{type:String,default:"90%"},layout:{type:Array,required:!0,default:()=>[]},onKeyPress:{type:Function,required:!0}},methods:{keyPress(e){this.onKeyPress(e)}}}),c=i("d959"),s=i.n(c);const r=s()(l,[["render",o]]);t["a"]=r},db10:function(e,t,i){"use strict";var n=i("7a23");const o={class:"his-floating-keyboard"},a={class:"his-floating-keyboard-content"};function l(e,t,i,l,c,s){const r=Object(n["resolveComponent"])("base-keyboard");return Object(n["openBlock"])(),Object(n["createBlock"])("div",o,[Object(n["createVNode"])("div",a,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.activeLayout,(t,i)=>(Object(n["openBlock"])(),Object(n["createBlock"])("div",{key:i},[Object(n["createVNode"])(r,{layout:t,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])]))),128))])])}var c=i("6be2"),s=i("c924"),r=Object(n["defineComponent"])({components:{BaseKeyboard:s["a"]},props:{initalKeyboardName:{type:String},kbConfig:{type:Array,required:!0},onKeyPress:{type:Function,required:!0}},data:()=>({activeLayout:{}}),watch:{initalKeyboardName:{handler(e){e&&this.$nextTick(()=>this.switchKeyboard(e))},immediate:!0},kbConfig:{handler(e){e&&(this.activeLayout=e)},deep:!0,immediate:!0}},methods:{keypress(e){this.isFunctionKey(e)||this.onKeyPress(e)},isFunctionKey(e){return!!this.switchKeyboard(e)},switchKeyboard(e){const t=c["a"].map(e=>e.btn).indexOf(e);return t>=0&&(this.activeLayout=c["a"][t].keyboard,!0)}}}),d=i("d959"),u=i.n(d);const h=u()(r,[["render",l]]);t["a"]=h},f48e:function(e,t,i){}}]);
//# sourceMappingURL=TouchFormElement19.ea30c08d.js.map