(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement35","TouchFormElement38","TouchFormElement8"],{"0a79":function(e,t,n){"use strict";var a=n("7a23");function c(e,t,n,c,o,i){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{id:"view-port",class:Object(a["normalizeClass"])(e.showFull?"":"half")},[Object(a["renderSlot"])(e.$slots,"default",{},void 0,!0)],2)}var o=Object(a["defineComponent"])({name:"ViewPort",props:{showFull:{type:Boolean,default:()=>!0}}}),i=(n("a4d3"),n("6b0d")),l=n.n(i);const r=l()(o,[["render",c],["__scopeId","data-v-7c293cad"]]);t["a"]=r},1162:function(e,t,n){"use strict";n("7843")},2345:function(e,t,n){"use strict";function a(e,t,n){let a=t;if(e.match(/enter/i))return a+"\r\n";if(e.match(/clear/i))return"";if(a=e.match(/delete|del/i)?a.match(/unknown/i)||a.match(/n\/a/i)?"":a.substring(0,a.length-1):e.match(/space/i)?t+" ":e.match(/unknown/i)?"Unknown":e.match(/n\/a/i)?"N/A":a.match(/unknown/i)||a.match(/n\/a/i)?e:`${t}${e}`,"string"===typeof a&&a)switch(n){case"lowercase":a=a.toLowerCase();break;case"uppercase":a=a.toUpperCase();break;default:a=a.charAt(0).toUpperCase()+a.slice(1);break}return a}n.d(t,"a",(function(){return a}))},3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"l",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"k",(function(){return l})),n.d(t,"i",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"h",(function(){return b})),n.d(t,"f",(function(){return f}));const a=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],c=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],o=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],i=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],l=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],r=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],s=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],u=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],d=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],p=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],b=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],f=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"51c8":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=Object(a["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const o=c;t["default"]=o},7843:function(e,t,n){},a4d3:function(e,t,n){"use strict";n("a6f7")},a6f7:function(e,t,n){},c927:function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c={class:"his-floating-keyboard"},o={class:"his-floating-keyboard-content"},i={style:{width:"99.9%"}};function l(e,t,n,l,r,s){const u=Object(a["resolveComponent"])("ion-textarea"),d=Object(a["resolveComponent"])("view-port"),p=Object(a["resolveComponent"])("ion-button");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(d,{showFull:!1},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,{rows:"6",cols:"20",readonly:"",value:e.value,placeholder:"Start typing....",class:"input_display"},null,8,["value"])]),_:1}),Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("table",i,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.layout,(t,n)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",{key:n},[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(t,(t,n)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("td",{key:n},[Object(a["createVNode"])(p,{style:{"text-transform":"none"},strong:"",onClick:n=>e.keypress(t),class:Object(a["normalizeClass"])(`key__button ${t.toLowerCase()}_btn`)},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t),1)]),_:2},1032,["onClick","class"])]))),128))]))),128))])]),Object(a["createVNode"])(p,{onClick:t[0]||(t[0]=t=>e.keypress("space")),strong:"",style:{width:"100%"},shape:"round",size:"large"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" Space ")]),_:1})])],64)}var r=n("2345"),s=n("0a79"),u=n("51c8"),d=n("2ef0"),p=n("3800"),b=n("d867"),f=Object(a["defineComponent"])({components:{ViewPort:s["a"],IonButton:b["IonButton"],IonTextarea:b["IonTextarea"]},mixins:[u["default"]],data:()=>({value:"",capsOn:!1,layout:p["h"]}),mounted(){this.init()},activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this),await this.setDefaultValue()},async setDefaultValue(){if(this.defaultValue&&!this.value){const e=await this.defaultValue(this.fdata,this.cdata);e&&(Object(d["isPlainObject"])(e)?(this.emitValue(e),this.value=e.value.toString()):(this.value=e,this.emitValue({label:e,value:e})))}},updateKeyboardCaps(e=!1){this.layout=this.layout.map(t=>t.map(t=>e?t.toUpperCase():t.toLowerCase()))},async emitValue(e){if(this.onValue){const t=await this.onValue(e);if(!t)return}this.value=e.label,this.$emit("onValue",e)},async onKbValue(e){await this.emitValue({label:e,value:e})},async keypress(e){const t=Object(r["a"])(this.capsOn?e.toUpperCase():e.toLowerCase(),this.value);if(t.match(/caps/i))return this.capsOn=!this.capsOn,void this.updateKeyboardCaps(this.capsOn);await this.emitValue({label:t,value:t})}},watch:{clear(){this.value=""}}}),h=(n("1162"),n("6b0d")),m=n.n(h);const j=m()(f,[["render",l],["__scopeId","data-v-6c8c3b02"]]);t["default"]=j}}]);
//# sourceMappingURL=TouchFormElement35.f24948b1.js.map