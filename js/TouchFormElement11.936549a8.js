(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement11","TouchFormElement38","TouchFormElement8"],{"04a0":function(e,t,n){},"0a79":function(e,t,n){"use strict";var o=n("7a23");function c(e,t,n,c,a,i){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{id:"view-port",class:Object(o["normalizeClass"])(e.showFull?"":"half")},[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)],2)}var a=Object(o["defineComponent"])({name:"ViewPort",props:{showFull:{type:Boolean,default:()=>!0}}}),i=(n("a4d3"),n("d959")),l=n.n(i);const r=l()(a,[["render",c],["__scopeId","data-v-7c293cad"]]);t["a"]=r},"10be":function(e,t,n){"use strict";var o=n("7a23");const c={class:"keypad"};function a(e,t,n,a,i,l){const r=Object(o["resolveComponent"])("ion-input"),s=Object(o["resolveComponent"])("ion-chip"),u=Object(o["resolveComponent"])("center"),d=Object(o["resolveComponent"])("base-keyboard"),b=Object(o["resolveComponent"])("ion-content");return Object(o["openBlock"])(),Object(o["createBlock"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(r,{value:e.value,disabled:!0,class:"keypad-input"},null,8,["value"]),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title||"keypad"),1)]),_:1})]),_:1}),Object(o["createVNode"])(d,{btnSize:"96px",layout:e.keypad,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])])]),_:1})}var i=n("c924"),l=n("3800"),r=n("2345"),s=n("fe70"),u=Object(o["defineComponent"])({components:{BaseKeyboard:i["a"]},props:{title:{type:String},preset:{type:String},onKeyPress:{type:Function,required:!0},strictNumbers:{type:Boolean,default:!1}},data:()=>({value:"0",keypad:l["d"]}),watch:{preset:{handler(e){e&&(this.value=e.toString())},immediate:!0}},methods:{async keypress(e){if(e.match(/done/i))await s["s"].dismiss(this.value);else if(this.strictNumbers){if(e.includes(".")&&this.value.includes("."))return;e.includes(".")||"0"!==this.value||(this.value=""),this.value=Object(r["a"])(e,this.value),this.value||(this.value="0"),""+parseInt(this.value)===this.value?this.onKeyPress(parseInt(this.value)):this.onKeyPress(this.value)}else this.value=Object(r["a"])(e,this.value),this.onKeyPress(this.value)}}}),d=(n("27f1"),n("d959")),b=n.n(d);const p=b()(u,[["render",a],["__scopeId","data-v-7454247c"]]);t["a"]=p},2345:function(e,t,n){"use strict";function o(e,t,n){let o=t;if(e.match(/enter/i))return o+"\r\n";if(e.match(/clear/i))return"";if(o=e.match(/delete|del/i)?o.match(/unknown/i)||o.match(/n\/a/i)?"":o.substring(0,o.length-1):e.match(/space/i)?t+" ":e.match(/unknown/i)?"Unknown":e.match(/n\/a/i)?"N/A":o.match(/unknown/i)||o.match(/n\/a/i)?e:`${t}${e}`,"string"===typeof o&&o)switch(n){case"lowercase":o=o.toLowerCase();break;case"uppercase":o=o.toUpperCase();break;default:o=o.charAt(0).toUpperCase()+o.slice(1);break}return o}n.d(t,"a",(function(){return o}))},"27f1":function(e,t,n){"use strict";n("3f97")},3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"l",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"k",(function(){return l})),n.d(t,"i",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"h",(function(){return p})),n.d(t,"f",(function(){return h}));const o=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],c=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],a=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],i=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],l=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],r=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],s=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],u=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],d=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],b=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],p=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],h=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"3f97":function(e,t,n){},"51c8":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=Object(o["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const a=c;t["default"]=a},"5bd4":function(e,t,n){},a4d3:function(e,t,n){"use strict";n("04a0")},aabb:function(e,t,n){"use strict";n("5bd4")},c924:function(e,t,n){"use strict";var o=n("7a23");function c(e,t,n,c,a,i){const l=Object(o["resolveComponent"])("ion-button");return Object(o["openBlock"])(),Object(o["createElementBlock"])("table",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.layout,(t,n)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:n},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(t,(t,n)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("td",{class:"his-keyboard-margin",key:"btn-"+n},[t?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,style:Object(o["normalizeStyle"])({width:e.btnSize}),class:"his-keyboard-btn",onClick:()=>e.keyPress(t)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t),1)]),_:2},1032,["style","onClick"])):Object(o["createCommentVNode"])("",!0)]))),128))]))),128))])}var a=n("d867"),i=Object(o["defineComponent"])({components:{IonButton:a["IonButton"]},props:{btnSize:{type:String,default:"90%"},layout:{type:Array,required:!0,default:()=>[]},onKeyPress:{type:Function,required:!0}},methods:{keyPress(e){this.onKeyPress(e)}}}),l=n("d959"),r=n.n(l);const s=r()(i,[["render",c]]);t["a"]=s},f2c3:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const c={class:"view-port-content"},a={class:"his-lg-text"},i={class:"his-lg-text"},l={class:"his-md-text his-card",style:{textAlign:"left"}};function r(e,t,n,r,s,u){const d=Object(o["resolveComponent"])("ion-col"),b=Object(o["resolveComponent"])("ion-row"),p=Object(o["resolveComponent"])("ion-input"),h=Object(o["resolveComponent"])("ion-grid"),j=Object(o["resolveComponent"])("view-port");return Object(o["openBlock"])(),Object(o["createBlock"])(j,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{size:"8"},{default:Object(o["withCtx"])(()=>{var t,n;return[Object(o["createElementVNode"])("b",a,Object(o["toDisplayString"])((null===(t=e.config)||void 0===t||null===(n=t.titles)||void 0===n?void 0:n.label)||"Medication"),1)]}),_:1}),Object(o["createVNode"])(d,{size:"4"},{default:Object(o["withCtx"])(()=>{var t,n;return[Object(o["createElementVNode"])("b",i,Object(o["toDisplayString"])((null===(t=e.config)||void 0===t||null===(n=t.titles)||void 0===n?void 0:n.value)||"Amount Remaining"),1)]}),_:1})]),_:1}),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.listData,(t,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])(b,{key:n},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{size:"8"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",l,Object(o["toDisplayString"])(t.label),1)]),_:2},1024),Object(o["createVNode"])(d,{size:"4"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{value:t.value,onClick:n=>e.launchKeyPad(t),class:"his-card his-md-text"},null,8,["value","onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1})}var s=n("0a79"),u=n("d867"),d=n("10be"),b=n("51c8"),p=Object(o["defineComponent"])({components:{ViewPort:s["a"],IonGrid:u["IonGrid"],IonCol:u["IonCol"],IonRow:u["IonRow"],IonInput:u["IonInput"]},mixins:[b["default"]],data:()=>({listData:[]}),watch:{clear:{handler(){this.listData=this.listData.filter(e=>(e.value="",!0))},immediate:!0},listData:{handler(){this.$emit("onValue",this.listData)},deep:!0,immediate:!0}},mounted(){this.init()},activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this),this.listData=await this.options(this.fdata,this.cdata,this.listData)},async launchKeyPad(e){const t=await u["modalController"].create({component:d["a"],backdropDismiss:!1,cssClass:"keypad-modal",componentProps:{title:e.label,preset:e.value,strictNumbers:!0,onKeyPress(t){e.value=t}}});t.present()}}}),h=(n("aabb"),n("d959")),j=n.n(h);const f=j()(p,[["render",r],["__scopeId","data-v-1803a4c0"]]);t["default"]=f}}]);
//# sourceMappingURL=TouchFormElement11.936549a8.js.map