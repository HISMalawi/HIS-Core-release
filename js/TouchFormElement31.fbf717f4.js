(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement31","TouchFormElement38","TouchFormElement5","TouchFormElement8"],{"04a0":function(e,t,n){},"0a79":function(e,t,n){"use strict";var o=n("7a23");const a=Object(o["withScopeId"])("data-v-7c293cad"),r=a((function(e,t,n,a,r,i){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{id:"view-port",class:e.showFull?"":"half"},[Object(o["renderSlot"])(e.$slots,"default")],2)}));var i=Object(o["defineComponent"])({name:"ViewPort",props:{showFull:{type:Boolean,default:()=>!0}}}),c=(n("a4d3"),n("d959")),s=n.n(c);const u=s()(i,[["render",r],["__scopeId","data-v-7c293cad"]]);t["a"]=u},2345:function(e,t,n){"use strict";function o(e,t,n){let o=t;if(e.match(/enter/i))return o+"\r\n";if(e.match(/clear/i))return"";if(o=e.match(/delete|del/i)?o.match(/unknown/i)||o.match(/n\/a/i)?"":o.substring(0,o.length-1):e.match(/space/i)?t+" ":e.match(/unknown/i)?"Unknown":e.match(/n\/a/i)?"N/A":o.match(/unknown/i)||o.match(/n\/a/i)?e:`${t}${e}`,"string"===typeof o&&o)switch(n){case"lowercase":o=o.toLowerCase();break;case"uppercase":o=o.toUpperCase();break;default:o=o.charAt(0).toUpperCase()+o.slice(1);break}return o}n.d(t,"a",(function(){return o}))},"36ad":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const a=Object(o["withScopeId"])("data-v-64dded10"),r=a((function(e,t,n,a,r,i){const c=Object(o["resolveComponent"])("ion-input");return Object(o["openBlock"])(),Object(o["createBlock"])(c,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[1]||(t[1]=t=>e.text=t),type:e.type,disabled:e.disabled,readonly:e.readOnly,autocapitalize:"sentences"},null,8,["modelValue","type","disabled","readonly"])}));var i=n("8a30"),c=n("2ed9"),s=Object(o["defineComponent"])({name:"HisInput",components:{IonInput:i["IonInput"]},setup(){const{activePlatformProfile:e}=Object(c["e"])(),t=Object(o["computed"])(()=>"HIS_KEYBOARD_ONLY"===e.value.keyboard);return{readOnly:t}},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1}}}),u=(n("ba6e"),n("d959")),l=n.n(u);const d=l()(s,[["render",r],["__scopeId","data-v-64dded10"]]);t["default"]=d},3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"l",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"i",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"h",(function(){return p})),n.d(t,"f",(function(){return y}));const o=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],a=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],r=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],i=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],c=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],s=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],u=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],l=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],d=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],b=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],p=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],y=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"51c8":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a=Object(o["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const r=a;t["default"]=r},"69cf":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const a={key:0,style:{color:"red","font-weight":"bold"}};function r(e,t,n,r,i,c){const s=Object(o["resolveComponent"])("base-input"),u=Object(o["resolveComponent"])("view-port"),l=Object(o["resolveComponent"])("his-keyboard");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{value:e.value,onOnValue:e.onKbValue},null,8,["value","onOnValue"]),e.errors?(Object(o["openBlock"])(),Object(o["createBlock"])("span",a," **"+Object(o["toDisplayString"])(e.errors)+"** ",1)):Object(o["createCommentVNode"])("",!0)]),_:1}),Object(o["createVNode"])(l,{kbConfig:e.keyboard,onKeyPress:e.keypress,disabled:!1},null,8,["kbConfig","onKeyPress"])],64)}var i=n("36ad"),c=n("db10"),s=n("2345"),u=n("6be2"),l=n("0a79"),d=n("3800"),b=n("51c8"),p=Object(o["defineComponent"])({components:{BaseInput:i["default"],HisKeyboard:c["a"],ViewPort:l["a"]},mixins:[b["default"]],data:()=>({value:"",errors:"",minDays:1,maxDays:30,keyboard:[]}),mounted(){this.init()},activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this);let e=d["g"];this.config?(this.config.year&&this.config.month&&(e=this.generateKeypad(this.config.year(this.fdata),this.config.month(this.fdata))),this.config.keyboardActions?this.keyboard=[e,this.config.keyboardActions]:this.keyboard=[e,[["Unknown"]]]):this.keyboard=u["b"],await this.setDefaultValue()},onKbValue(e){this.value=e,this.emitValue()},keypress(e){this.value=Object(s["a"])(e,""),this.emitValue()},emitValue(){this.errors="";let e=this.value;if(e)if(e.toString().match(/unknown/i))this.$emit("onValue",{label:"Unknown",value:"Unknown"});else{if(isNaN(e))return this.errors="Invalid number",void this.$emit("onValue",null);e=parseInt(e),e<this.minDays||e>this.maxDays?(this.errors="Value number is out of range",this.$emit("onValue",null)):this.$emit("onValue",{label:e,value:e})}else this.$emit("onValue",null)},generateKeypad(e,t){const n=[[]];this.maxDays=new Date(e,t,0).getDate();let o=0,a=0;for(let r=0;r<this.maxDays;++r)a>7&&(++o,n[o]=[],a=0),n[o].push(""+(r+1)),++a;return n},async setDefaultValue(){if(this.defaultValue&&!this.value){const e=await this.defaultValue(this.fdata,this.cdata);e&&(this.value=e,this.emitValue())}}},watch:{clear(){this.value=""}}}),y=n("d959"),f=n.n(y);const h=f()(p,[["render",r]]);t["default"]=h},"6be2":function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"h",(function(){return b})),n.d(t,"a",(function(){return p}));var o=n("3800");const a=[o["k"],[["","Delete"]]],r=[o["i"],[["Delete"]]],i=[o["i"],[["Delete","Unknown"]]],c=[o["i"],[["N/A"],["Delete","Unknown"]]],s=[o["i"],[["Delete"]]],u=[o["i"],[["Unknown","Delete"],["Qwerty","A-Z"]]],l=[o["g"],[["Unknown"]]],d=[o["a"],[["0-9","Delete"],["Qwerty","Unknown"],["","Space"]]],b=[o["j"],[["","Delete"],["?123","0-9"],["Space","Unknown"]]],p=[{btn:"0-9",keyboard:u},{btn:"?123",keyboard:a},{btn:"A-Z",keyboard:d},{btn:"Qwerty",keyboard:b}]},7989:function(e,t,n){},a4d3:function(e,t,n){"use strict";n("04a0")},ba6e:function(e,t,n){"use strict";n("7989")},c924:function(e,t,n){"use strict";var o=n("7a23");function a(e,t,n,a,r,i){const c=Object(o["resolveComponent"])("ion-button");return Object(o["openBlock"])(),Object(o["createBlock"])("table",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.layout,(t,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:n},[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(t,(t,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])("td",{class:"his-keyboard-margin",key:"btn-"+n},[t?(Object(o["openBlock"])(),Object(o["createBlock"])(c,{key:0,style:{width:e.btnSize},class:"his-keyboard-btn",onClick:()=>e.keyPress(t)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t),1)]),_:2},1032,["style","onClick"])):Object(o["createCommentVNode"])("",!0)]))),128))]))),128))])}var r=n("8a30"),i=Object(o["defineComponent"])({components:{IonButton:r["IonButton"]},props:{btnSize:{type:String,default:"90%"},layout:{type:Array,required:!0,default:()=>[]},onKeyPress:{type:Function,required:!0}},methods:{keyPress(e){this.onKeyPress(e)}}}),c=n("d959"),s=n.n(c);const u=s()(i,[["render",a]]);t["a"]=u},db10:function(e,t,n){"use strict";var o=n("7a23");const a={class:"his-floating-keyboard"},r={class:"his-floating-keyboard-content"};function i(e,t,n,i,c,s){const u=Object(o["resolveComponent"])("base-keyboard");return Object(o["openBlock"])(),Object(o["createBlock"])("div",a,[Object(o["createVNode"])("div",r,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.activeLayout,(t,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:n},[Object(o["createVNode"])(u,{layout:t,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])]))),128))])])}var c=n("6be2"),s=n("c924"),u=Object(o["defineComponent"])({components:{BaseKeyboard:s["a"]},props:{initalKeyboardName:{type:String},kbConfig:{type:Array,required:!0},onKeyPress:{type:Function,required:!0}},data:()=>({activeLayout:{}}),watch:{initalKeyboardName:{handler(e){e&&this.$nextTick(()=>this.switchKeyboard(e))},immediate:!0},kbConfig:{handler(e){e&&(this.activeLayout=e)},deep:!0,immediate:!0}},methods:{keypress(e){this.isFunctionKey(e)||this.onKeyPress(e)},isFunctionKey(e){return!!this.switchKeyboard(e)},switchKeyboard(e){const t=c["a"].map(e=>e.btn).indexOf(e);return t>=0&&(this.activeLayout=c["a"][t].keyboard,!0)}}}),l=n("d959"),d=n.n(l);const b=d()(u,[["render",i]]);t["a"]=b}}]);
//# sourceMappingURL=TouchFormElement31.fbf717f4.js.map