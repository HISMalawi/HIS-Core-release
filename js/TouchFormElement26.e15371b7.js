(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement26","TouchFormElement9"],{"0056":function(e,t,n){},"0a79":function(e,t,n){"use strict";var c=n("7a23");function o(e,t,n,o,a,l){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{id:"view-port",class:Object(c["normalizeClass"])(e.showFull?"":"half")},[Object(c["renderSlot"])(e.$slots,"default",{},void 0,!0)],2)}var a=Object(c["defineComponent"])({name:"ViewPort",props:{showFull:{type:Boolean,default:()=>!0}}}),l=(n("a4d3"),n("6b0d")),r=n.n(l);const i=r()(a,[["render",o],["__scopeId","data-v-7c293cad"]]);t["a"]=i},"10be":function(e,t,n){"use strict";var c=n("7a23");const o={class:"keypad"};function a(e,t,n,a,l,r){const i=Object(c["resolveComponent"])("ion-input"),s=Object(c["resolveComponent"])("ion-chip"),u=Object(c["resolveComponent"])("center"),d=Object(c["resolveComponent"])("base-keyboard"),b=Object(c["resolveComponent"])("ion-content");return Object(c["openBlock"])(),Object(c["createBlock"])(b,null,{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",o,[Object(c["createVNode"])(i,{value:e.value,disabled:!0,class:"keypad-input"},null,8,["value"]),Object(c["createVNode"])(u,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(s,null,{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.title||"keypad"),1)]),_:1})]),_:1}),Object(c["createVNode"])(d,{btnSize:"96px",layout:e.keypad,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])])]),_:1})}var l=n("c924"),r=n("3800"),i=n("2345"),s=n("fe70"),u=Object(c["defineComponent"])({components:{BaseKeyboard:l["a"]},props:{title:{type:String},preset:{type:String},onKeyPress:{type:Function,required:!0},strictNumbers:{type:Boolean,default:!1}},data:()=>({value:"0",keypad:r["d"]}),watch:{preset:{handler(e){e&&(this.value=e.toString())},immediate:!0}},methods:{async keypress(e){if(e.match(/done/i))await s["b"].dismiss(this.value);else if(this.strictNumbers){if(e.includes(".")&&this.value.includes("."))return;e.includes(".")||"0"!==this.value||(this.value=""),this.value=Object(i["a"])(e,this.value),this.value||(this.value="0"),""+parseInt(this.value)===this.value?this.onKeyPress(parseInt(this.value)):this.onKeyPress(this.value)}else this.value=Object(i["a"])(e,this.value),this.onKeyPress(this.value)}}}),d=(n("27f1"),n("6b0d")),b=n.n(d);const p=b()(u,[["render",a],["__scopeId","data-v-7454247c"]]);t["a"]=p},2345:function(e,t,n){"use strict";function c(e,t,n){let c=t;if(e.match(/enter/i))return c+"\r\n";if(e.match(/clear/i))return"";if(c=e.match(/delete|del/i)?c.match(/unknown/i)||c.match(/n\/a/i)?"":c.substring(0,c.length-1):e.match(/space/i)?t+" ":e.match(/unknown/i)?"Unknown":e.match(/n\/a/i)?"N/A":c.match(/unknown/i)||c.match(/n\/a/i)?e:`${t}${e}`,"string"===typeof c&&c)switch(n){case"lowercase":c=c.toLowerCase();break;case"uppercase":c=c.toUpperCase();break;default:c=c.charAt(0).toUpperCase()+c.slice(1);break}return c}n.d(t,"a",(function(){return c}))},"27f1":function(e,t,n){"use strict";n("a3fb")},3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"l",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"o",(function(){return l})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"n",(function(){return s})),n.d(t,"k",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"h",(function(){return b})),n.d(t,"a",(function(){return p})),n.d(t,"m",(function(){return m})),n.d(t,"c",(function(){return j})),n.d(t,"i",(function(){return h})),n.d(t,"g",(function(){return O}));const c=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],o=[["1","2","3"],["4","5","6"],["7","8","9"],["Del","0","."],["Unknown","",""]],a=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0",""]],l=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],r=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],i=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],s=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],u=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],d=[["1","2","3"],["4","5","6"],["7","8","9"],["←","0","→"]],b=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],p=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],m=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],j=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],h=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],O=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"51c8":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=Object(c["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const a=o;t["default"]=a},a3fb:function(e,t,n){},a4d3:function(e,t,n){"use strict";n("a6f7")},a6f7:function(e,t,n){},b34c:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const o=e=>(Object(c["pushScopeId"])("data-v-37d26e29"),e=e(),Object(c["popScopeId"])(),e),a={class:"view-port-content"},l={class:"his-table"},r=o(()=>Object(c["createElementVNode"])("th",null," Medication",-1)),i=["onUpdate:modelValue"],s=o(()=>Object(c["createElementVNode"])("option",{value:"Weekly (QW)"}," Weekly ",-1)),u=o(()=>Object(c["createElementVNode"])("option",{value:"Daily (QOD)"}," Daily ",-1)),d=[s,u];function b(e,t,n,o,s,u){const b=Object(c["resolveComponent"])("ion-img"),p=Object(c["resolveComponent"])("ion-input"),m=Object(c["resolveComponent"])("view-port");return Object(c["openBlock"])(),Object(c["createBlock"])(m,null,{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",a,[Object(c["createElementVNode"])("table",l,[Object(c["createElementVNode"])("tr",null,[r,Object(c["createElementVNode"])("th",null,[Object(c["createVNode"])(b,{class:"ico",src:e.img("morning")},null,8,["src"]),Object(c["createTextVNode"])(" Morning ")]),Object(c["createElementVNode"])("th",null,[Object(c["createVNode"])(b,{class:"ico",src:e.img("noon")},null,8,["src"]),Object(c["createTextVNode"])(" Noon ")]),Object(c["createElementVNode"])("th",null,[Object(c["createVNode"])(b,{class:"ico",src:e.img("evening")},null,8,["src"]),Object(c["createTextVNode"])(" Evening ")]),Object(c["createElementVNode"])("th",null,[Object(c["createVNode"])(b,{class:"ico",src:e.img("frequency")},null,8,["src"]),Object(c["createTextVNode"])(" Frequency ")])]),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.listData,(t,n)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:n},[Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(t.label),1),Object(c["createElementVNode"])("td",null,[Object(c["createVNode"])(p,{value:t.other.am,onClick:n=>e.launchKeyPad(t,"am"),class:"dosage-input"},null,8,["value","onClick"])]),Object(c["createElementVNode"])("td",null,[Object(c["createVNode"])(p,{value:t.other.noon,onClick:n=>e.launchKeyPad(t,"noon"),class:"dosage-input"},null,8,["value","onClick"])]),Object(c["createElementVNode"])("td",null,[Object(c["createVNode"])(p,{value:t.other.pm,onClick:n=>e.launchKeyPad(t,"pm"),class:"dosage-input"},null,8,["value","onClick"])]),Object(c["createElementVNode"])("td",null,[Object(c["withDirectives"])(Object(c["createElementVNode"])("select",{"onUpdate:modelValue":e=>t.other.frequency=e,class:"custom-med-frequency"},d,8,i),[[c["vModelSelect"],t.other.frequency]])])]))),128))])])]),_:1})}var p=n("0a79"),m=n("d867"),j=n("10be"),h=n("2ef0"),O=n("51c8"),f=Object(c["defineComponent"])({components:{ViewPort:p["a"],IonImg:m["IonImg"],IonInput:m["IonInput"]},mixins:[O["default"]],data:()=>({listData:[]}),watch:{clear:{handler(){this.listData=this.listData.filter(e=>(e.other.am=0,e.other.noon=0,e.other.pm=0,e.other.frequency="Daily (QOD)",!0))},immediate:!0},listData:{handler(){this.$emit("onValue",this.listData)},deep:!0,immediate:!0}},mounted(){this.init()},activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this);const e=await this.options(this.fdata);this.updateListData(e)},img(e){return`assets/images/prescription/${e}.png`},updateListData(e){this.listData=e.map(e=>{const t=Object(h["find"])(this.listData,{label:e.label,value:e.value});return t||(t||e)})},async launchKeyPad(e,t){(await m["modalController"].create({component:j["a"],backdropDismiss:!1,cssClass:"keypad-modal",componentProps:{title:e.label,preset:e.other[t],strictNumbers:!0,onKeyPress(n){e.other[t]=n}}})).present()}}}),y=(n("e749"),n("6b0d")),v=n.n(y);const k=v()(f,[["render",b],["__scopeId","data-v-37d26e29"]]);t["default"]=k},c924:function(e,t,n){"use strict";var c=n("7a23");function o(e,t,n,o,a,l){const r=Object(c["resolveComponent"])("ion-button");return Object(c["openBlock"])(),Object(c["createElementBlock"])("table",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.layout,(t,n)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:n},[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t,(n,o)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("td",{class:"his-keyboard-margin",key:"btn-"+o},[n?(Object(c["openBlock"])(),Object(c["createBlock"])(r,{key:0,style:Object(c["normalizeStyle"])({width:e.btnSize}),class:Object(c["normalizeClass"])(`his-keyboard-btn btn-${n}-${e.dynamicClass(t)}`),onClick:()=>e.keyPress(n)},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(n),1)]),_:2},1032,["style","class","onClick"])):Object(c["createCommentVNode"])("",!0)]))),128))]))),128))])}var a=n("d867"),l=Object(c["defineComponent"])({components:{IonButton:a["IonButton"]},props:{btnSize:{type:String,default:"90%"},layout:{type:Array,required:!0,default:()=>[]},onKeyPress:{type:Function,required:!0}},methods:{keyPress(e){this.onKeyPress(e)},dynamicClass(e){return 3==e.length&&"Unknown"==e[0]?"Keypad":e[0]}}}),r=n("6b0d"),i=n.n(r);const s=i()(l,[["render",o]]);t["a"]=s},e749:function(e,t,n){"use strict";n("0056")}}]);
//# sourceMappingURL=TouchFormElement26.e15371b7.js.map