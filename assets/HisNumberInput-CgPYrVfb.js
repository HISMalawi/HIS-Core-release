import l from"./BaseTextInput-GZeTLgPx.js";import{d as u,aO as r,bN as d,e0 as s,eo as f,aR as c,a6 as h,ab as a,u as p,B as m,x as t,w as b,E as _}from"./index-ATRrruTT.js";import{_ as y}from"./FieldMixin.vue_vue_type_script_lang-Cq8VqPZ3.js";const k=u({components:{BaseInput:l,HisKeyboard:r,ViewPort:d},mixins:[y],data:()=>({value:"",keyboard:s}),activated(){this.init()},async mounted(){await this.init(),await this.setDefaultValue()},methods:{init(){this.$emit("onFieldActivated",this),typeof this.config.noChars=="boolean"?this.keyboard=this.config.noChars?s:f:this.config.keypad&&(this.keyboard=this.config.keypad)},async setDefaultValue(){if(typeof this.defaultValue=="function"){const e=await this.defaultValue(this.fdata,this.cdata);e&&(this.value="".concat(e))}},onKbValue(e){this.value=e},keypress(e){this.value=c(e,this.value)}},watch:{value(e){this.$emit("onValue",e?{label:e,value:e}:null)},clear(){this.value=""}}});function v(e,V,w,$,g,C){const o=a("base-input"),n=a("view-port"),i=a("his-keyboard");return p(),m(_,null,[t(n,null,{default:b(()=>[t(o,{value:e.value,onOnValue:e.onKbValue},null,8,["value","onOnValue"])]),_:1}),t(i,{kbConfig:e.keyboard,onKeyPress:e.keypress,disabled:!1},null,8,["kbConfig","onKeyPress"])],64)}const K=h(k,[["render",v]]);export{K as default};