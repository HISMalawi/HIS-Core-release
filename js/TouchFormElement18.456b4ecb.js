(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement18","TouchFormElement5","TouchFormElement8"],{"00fd":function(e,t,n){var o=n("9e69"),r=Object.prototype,c=r.hasOwnProperty,a=r.toString,i=o?o.toStringTag:void 0;function l(e){var t=c.call(e,i),n=e[i];try{e[i]=void 0;var o=!0}catch(l){}var r=a.call(e);return o&&(t?e[i]=n:delete e[i]),r}e.exports=l},"03dd":function(e,t,n){var o=n("eac5"),r=n("57a5"),c=Object.prototype,a=c.hasOwnProperty;function i(e){if(!o(e))return r(e);var t=[];for(var n in Object(e))a.call(e,n)&&"constructor"!=n&&t.push(n);return t}e.exports=i},"07c7":function(e,t){function n(){return!1}e.exports=n},"0b07":function(e,t,n){var o=n("34ac"),r=n("3698");function c(e,t){var n=r(e,t);return o(n)?n:void 0}e.exports=c},"0d24":function(e,t,n){(function(e){var o=n("2b3e"),r=n("07c7"),c=t&&!t.nodeType&&t,a=c&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===c,l=i?o.Buffer:void 0,u=l?l.isBuffer:void 0,s=u||r;e.exports=s}).call(this,n("62e4")(e))},"10be":function(e,t,n){"use strict";var o=n("7a23");const r={class:"keypad"};function c(e,t,n,c,a,i){const l=Object(o["resolveComponent"])("ion-input"),u=Object(o["resolveComponent"])("ion-chip"),s=Object(o["resolveComponent"])("center"),d=Object(o["resolveComponent"])("base-keyboard"),b=Object(o["resolveComponent"])("ion-content");return Object(o["openBlock"])(),Object(o["createBlock"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",r,[Object(o["createVNode"])(l,{value:e.value,disabled:!0,class:"keypad-input"},null,8,["value"]),Object(o["createVNode"])(s,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title||"keypad"),1)]),_:1})]),_:1}),Object(o["createVNode"])(d,{btnSize:"96px",layout:e.keypad,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])])]),_:1})}var a=n("c924"),i=n("3800"),l=n("2345"),u=n("fe70"),s=Object(o["defineComponent"])({components:{BaseKeyboard:a["a"]},props:{title:{type:String},preset:{type:String},onKeyPress:{type:Function,required:!0},strictNumbers:{type:Boolean,default:!1}},data:()=>({value:"0",keypad:i["d"]}),watch:{preset:{handler(e){e&&(this.value=e.toString())},immediate:!0}},methods:{async keypress(e){if(e.match(/done/i))await u["b"].dismiss(this.value);else if(this.strictNumbers){if(e.includes(".")&&this.value.includes("."))return;e.includes(".")||"0"!==this.value||(this.value=""),this.value=Object(l["a"])(e,this.value),this.value||(this.value="0"),""+parseInt(this.value)===this.value?this.onKeyPress(parseInt(this.value)):this.onKeyPress(this.value)}else this.value=Object(l["a"])(e,this.value),this.onKeyPress(this.value)}}}),d=(n("27f1"),n("6b0d")),b=n.n(d);const p=b()(s,[["render",c],["__scopeId","data-v-7454247c"]]);t["a"]=p},1310:function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},1368:function(e,t,n){var o=n("da03"),r=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function c(e){return!!r&&r in e}e.exports=c},"13ea":function(e,t,n){var o=n("03dd"),r=n("42a2"),c=n("d370"),a=n("6747"),i=n("30c9"),l=n("0d24"),u=n("eac5"),s=n("73ac"),d="[object Map]",b="[object Set]",p=Object.prototype,f=p.hasOwnProperty;function j(e){if(null==e)return!0;if(i(e)&&(a(e)||"string"==typeof e||"function"==typeof e.splice||l(e)||s(e)||c(e)))return!e.length;var t=r(e);if(t==d||t==b)return!e.size;if(u(e))return!o(e).length;for(var n in e)if(f.call(e,n))return!1;return!0}e.exports=j},"1a8c":function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},"1cec":function(e,t,n){var o=n("0b07"),r=n("2b3e"),c=o(r,"Promise");e.exports=c},2345:function(e,t,n){"use strict";function o(e,t,n){let o=t;if(e.match(/enter/i))return o+"\r\n";if(e.match(/clear/i))return"";if(o=e.match(/delete|del/i)?o.match(/unknown/i)||o.match(/n\/a/i)?"":o.substring(0,o.length-1):e.match(/space/i)?t+" ":e.match(/unknown/i)?"Unknown":e.match(/n\/a/i)?"N/A":o.match(/unknown/i)||o.match(/n\/a/i)?e:`${t}${e}`,"string"===typeof o&&o)switch(n){case"lowercase":o=o.toLowerCase();break;case"uppercase":o=o.toUpperCase();break;default:o=o.charAt(0).toUpperCase()+o.slice(1);break}return o}n.d(t,"a",(function(){return o}))},"253c":function(e,t,n){var o=n("3729"),r=n("1310"),c="[object Arguments]";function a(e){return r(e)&&o(e)==c}e.exports=a},"27f1":function(e,t,n){"use strict";n("a3fb")},"29f3":function(e,t){var n=Object.prototype,o=n.toString;function r(e){return o.call(e)}e.exports=r},"2b3e":function(e,t,n){var o=n("585a"),r="object"==typeof self&&self&&self.Object===Object&&self,c=o||r||Function("return this")();e.exports=c},"30c9":function(e,t,n){var o=n("9520"),r=n("b218");function c(e){return null!=e&&r(e.length)&&!o(e)}e.exports=c},"34ac":function(e,t,n){var o=n("9520"),r=n("1368"),c=n("1a8c"),a=n("dc57"),i=/[\\^$.*+?()[\]{}|]/g,l=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,d=u.toString,b=s.hasOwnProperty,p=RegExp("^"+d.call(b).replace(i,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function f(e){if(!c(e)||r(e))return!1;var t=o(e)?p:l;return t.test(a(e))}e.exports=f},3698:function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},"36ad":function(e,t,n){"use strict";n.r(t);var o=n("7a23");function r(e,t,n,r,c,a){const i=Object(o["resolveComponent"])("ion-input");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t),type:e.type,disabled:e.disabled,readonly:e.readOnly,autocapitalize:"sentences",placeholder:e.placeholder},null,8,["modelValue","type","disabled","readonly","placeholder"])}var c=n("d867"),a=n("2ed9"),i=Object(o["defineComponent"])({name:"HisInput",components:{IonInput:c["v"]},setup(){const{activePlatformProfile:e}=Object(a["e"])(),t=Object(o["computed"])(()=>"HIS_KEYBOARD_ONLY"===e.value.keyboard);return{readOnly:t}},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1},placeholder:{type:String,default:()=>""}}}),l=(n("86f4"),n("6b0d")),u=n.n(l);const s=u()(i,[["render",r],["__scopeId","data-v-04472bbc"]]);t["default"]=s},3729:function(e,t,n){var o=n("9e69"),r=n("00fd"),c=n("29f3"),a="[object Null]",i="[object Undefined]",l=o?o.toStringTag:void 0;function u(e){return null==e?void 0===e?i:a:l&&l in Object(e)?r(e):c(e)}e.exports=u},3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"l",(function(){return r})),n.d(t,"f",(function(){return c})),n.d(t,"o",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"n",(function(){return u})),n.d(t,"k",(function(){return s})),n.d(t,"j",(function(){return d})),n.d(t,"h",(function(){return b})),n.d(t,"a",(function(){return p})),n.d(t,"m",(function(){return f})),n.d(t,"c",(function(){return j})),n.d(t,"i",(function(){return h})),n.d(t,"g",(function(){return v}));const o=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],r=[["1","2","3"],["4","5","6"],["7","8","9"],["Del","0","."],["Unknown","",""]],c=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0",""]],a=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],i=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],l=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],u=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],s=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],d=[["1","2","3"],["4","5","6"],["7","8","9"],["←","0","→"]],b=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],p=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],f=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],j=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],h=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],v=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"39ff":function(e,t,n){var o=n("0b07"),r=n("2b3e"),c=o(r,"WeakMap");e.exports=c},"42a2":function(e,t,n){var o=n("b5a7"),r=n("79bc"),c=n("1cec"),a=n("c869"),i=n("39ff"),l=n("3729"),u=n("dc57"),s="[object Map]",d="[object Object]",b="[object Promise]",p="[object Set]",f="[object WeakMap]",j="[object DataView]",h=u(o),v=u(r),O=u(c),y=u(a),m=u(i),g=l;(o&&g(new o(new ArrayBuffer(1)))!=j||r&&g(new r)!=s||c&&g(c.resolve())!=b||a&&g(new a)!=p||i&&g(new i)!=f)&&(g=function(e){var t=l(e),n=t==d?e.constructor:void 0,o=n?u(n):"";if(o)switch(o){case h:return j;case v:return s;case O:return b;case y:return p;case m:return f}return t}),e.exports=g},4910:function(e,t,n){},"51c8":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r=Object(o["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const c=r;t["default"]=c},"57a5":function(e,t,n){var o=n("91e9"),r=o(Object.keys,Object);e.exports=r},"585a":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("c8ba"))},6747:function(e,t){var n=Array.isArray;e.exports=n},"73ac":function(e,t,n){var o=n("743f"),r=n("b047"),c=n("99d3"),a=c&&c.isTypedArray,i=a?r(a):o;e.exports=i},"743f":function(e,t,n){var o=n("3729"),r=n("b218"),c=n("1310"),a="[object Arguments]",i="[object Array]",l="[object Boolean]",u="[object Date]",s="[object Error]",d="[object Function]",b="[object Map]",p="[object Number]",f="[object Object]",j="[object RegExp]",h="[object Set]",v="[object String]",O="[object WeakMap]",y="[object ArrayBuffer]",m="[object DataView]",g="[object Float32Array]",C="[object Float64Array]",x="[object Int8Array]",k="[object Int16Array]",w="[object Int32Array]",V="[object Uint8Array]",_="[object Uint8ClampedArray]",N="[object Uint16Array]",B="[object Uint32Array]",F={};function T(e){return c(e)&&r(e.length)&&!!F[o(e)]}F[g]=F[C]=F[x]=F[k]=F[w]=F[V]=F[_]=F[N]=F[B]=!0,F[a]=F[i]=F[y]=F[l]=F[m]=F[u]=F[s]=F[d]=F[b]=F[p]=F[f]=F[j]=F[h]=F[v]=F[O]=!1,e.exports=T},"79bc":function(e,t,n){var o=n("0b07"),r=n("2b3e"),c=o(r,"Map");e.exports=c},"7b0f":function(e,t,n){"use strict";n.r(t);var o=n("7a23");function r(e,t,n,r,c,a){const i=Object(o["resolveComponent"])("his-text-input"),l=Object(o["resolveComponent"])("ion-item"),u=Object(o["resolveComponent"])("ion-list"),s=Object(o["resolveComponent"])("ion-col"),d=Object(o["resolveComponent"])("ion-label"),b=Object(o["resolveComponent"])("ion-input"),p=Object(o["resolveComponent"])("ion-icon"),f=Object(o["resolveComponent"])("ion-row"),j=Object(o["resolveComponent"])("ion-grid"),h=Object(o["resolveComponent"])("view-port");return Object(o["openBlock"])(),Object(o["createBlock"])(h,null,{default:Object(o["withCtx"])(()=>{var t;return[Object(o["createVNode"])(i,{readonly:"",value:(null===(t=e.drugs[e.selectedDrug])||void 0===t?void 0:t.label)||""},null,8,["value"]),Object(o["createVNode"])(j,{style:{background:"white"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{size:"4",class:"border-right scroll-list"},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.drugs,(t,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])(u,{key:n},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{detail:"",color:n===e.selectedDrug?"lightblue":"",onClick:t=>e.selectDrug(n)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.label),1)]),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:1}),Object(o["createVNode"])(s,{size:"8",class:"scroll-list"},{default:Object(o["withCtx"])(()=>{var t;return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])((null===(t=e.drugs[e.selectedDrug])||void 0===t?void 0:t.other)||[],(t,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])(f,{key:n},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{size:"12"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h4",null,"Batch Number: "+Object(o["toDisplayString"])(t.batch_number)+" ("+Object(o["toDisplayString"])(t.pack_size)+"/tin) ",1)]),_:2},1024),Object(o["createVNode"])(s,{"size-md":"4"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{position:"floating"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Available Tins")]),_:1}),Object(o["createVNode"])(b,{readonly:"",placeholder:"0",value:e.fmtNumber(t.original_quantity)},null,8,["value"])]),_:2},1024)]),_:2},1024),Object(o["createVNode"])(s,{"size-md":"4"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{position:"floating"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Verified Tins")]),_:1}),Object(o["createVNode"])(b,{readonly:"",placeholder:"0",value:e.fmtNumber(t.current_quantity),color:t.current_quantity!=t.original_quantity?"danger":"success",onClick:t=>e.enterAmount(n)},null,8,["value","color","onClick"])]),_:2},1024)]),_:2},1024),Object(o["createVNode"])(s,{"size-md":"4"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,null,{default:Object(o["withCtx"])(()=>{var r;return[Object(o["createVNode"])(d,{position:"floating"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Reason")]),_:1}),Object(o["createVNode"])(b,{disabled:t.current_quantity==t.original_quantity,placeholder:"0",value:null!==(r=t.reason)&&void 0!==r?r:"N/A",onClick:t=>e.selectReason(n)},null,8,["disabled","value","onClick"]),Object(o["createVNode"])(p,{icon:e.chevronDown,slot:"end",class:"ion-padding-top",onClick:t=>e.selectReason(n)},null,8,["icon","onClick"])]}),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]}),_:1})]),_:1})]),_:1})]}),_:1})}n("14d9");var c=n("d867"),a=n("0a79"),i=n("51c8"),l=n("2706"),u=n("d95e"),s=n("36ad"),d=n("13ea"),b=n.n(d),p=n("0011"),f=n("ff79"),j=n("c731"),h=Object(o["defineComponent"])({components:{ViewPort:a["a"],HisTextInput:s["default"],IonGrid:c["p"],IonCol:c["m"],IonRow:c["H"],IonIcon:c["r"],IonList:c["y"],IonItem:c["w"],IonLabel:c["x"],IonInput:c["v"]},mixins:[i["default"]],data:()=>({drugs:[],selectedDrug:null,chevronDown:f["m"],previousTinCount:0,newTinCount:0}),mounted(){this.init()},activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this),b()(this.drugs)&&(this.drugs=await this.options())},disableReasonsOptions(e,t){const n=["Theft","Took out for training","Accidents","Flooding","Natural disaster"];return t.map(t=>({...t,disabled:e?t.disabled||n.includes(t.label):!n.includes(t.label)}))},fmtNumber(e){return Object(p["i"])(e)},getModalTitle(e){return`${e} (${this.drugs[this.selectedDrug].label})`},getDrugValue(e,t){return this.drugs[this.selectedDrug].other[e][t]},setDrugValue(e,t,n){this.drugs[this.selectedDrug].other[e][t]=n?n.value:""},async enterAmount(e){const t=this.getDrugValue(e,"batch_number");Object(j["b"])({id:"tins",helpText:this.getModalTitle("Enter number of tins for Batch "+t),type:u["b"].TT_NUMBER,defaultValue:()=>(this.previousTinCount=this.getDrugValue(e,"current_quantity"),this.previousTinCount),validation:e=>!e||e&&!e.value?null:l["a"].validateSeries([()=>l["a"].isNumber(e),()=>e.value<0?["Number of tins must be greater than 1"]:null])},t=>(this.newTinCount=t.value,this.setDrugValue(e,"current_quantity",t)))},async selectReason(e){const t=this.getDrugValue(e,"batch_number");Object(j["b"])({id:"reason",helpText:this.getModalTitle(`Select reason for Batch ${t} modification`),type:u["b"].TT_SELECT,defaultValue:()=>this.getDrugValue(e,"reason"),validation:e=>l["a"].required(e),options:()=>{const e=[{label:"Theft",value:"Theft"},{label:"Took out for training",value:"Took out for training"},{label:"Accidents",value:"Accidents"},{label:"Flooding",value:"Flooding"},{label:"Natural disaster",value:"Natural disaster"},{label:"Misplaced stock",value:"Misplaced stock"},{label:"Incorrect entry",value:"Incorrect entry"}];return this.disableReasonsOptions(this.newTinCount>this.previousTinCount,e)}},t=>{this.setDrugValue(e,"reason",t)})},async selectDrug(e){this.selectedDrug=e},isBatchUpdated(e){return e.current_quantity!==e.original_quantity&&!!e.reason},isModificationComplete(){return this.drugs.every(e=>{var t;return null===(t=e.other)||void 0===t?void 0:t.every(e=>e.current_quantity===e.original_quantity||!!e.reason)})},getUpdatedDrugs(){const e=[];return this.drugs.forEach(t=>{var n;const o=null===(n=t.other)||void 0===n?void 0:n.filter(e=>this.isBatchUpdated(e));e.push(...o)}),e}},watch:{clear(){this.drugs=this.drugs.map(e=>e.other?(e.other=e.other.map(e=>(e["current_quantity"]=e.original_quantity,e)),e):e)},drugs:{async handler(){if(this.isModificationComplete())return this.$emit("onValue",this.getUpdatedDrugs());this.$emit("onValue",null)},immediate:!0,deep:!0}}}),v=(n("c47a"),n("6b0d")),O=n.n(v);const y=O()(h,[["render",r],["__scopeId","data-v-56f0f510"]]);t["default"]=y},"86f4":function(e,t,n){"use strict";n("4910")},"91e9":function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},9520:function(e,t,n){var o=n("3729"),r=n("1a8c"),c="[object AsyncFunction]",a="[object Function]",i="[object GeneratorFunction]",l="[object Proxy]";function u(e){if(!r(e))return!1;var t=o(e);return t==a||t==i||t==c||t==l}e.exports=u},"99d3":function(e,t,n){(function(e){var o=n("585a"),r=t&&!t.nodeType&&t,c=r&&"object"==typeof e&&e&&!e.nodeType&&e,a=c&&c.exports===r,i=a&&o.process,l=function(){try{var e=c&&c.require&&c.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(t){}}();e.exports=l}).call(this,n("62e4")(e))},"9e69":function(e,t,n){var o=n("2b3e"),r=o.Symbol;e.exports=r},a3fb:function(e,t,n){},b047:function(e,t){function n(e){return function(t){return e(t)}}e.exports=n},b218:function(e,t){var n=9007199254740991;function o(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}e.exports=o},b5a7:function(e,t,n){var o=n("0b07"),r=n("2b3e"),c=o(r,"DataView");e.exports=c},c47a:function(e,t,n){"use strict";n("f8b6")},c731:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u}));var o=n("d867"),r=n("e6e9"),c=n("9441"),a=n("10be");async function i(e,t,n=null){(await o["X"].create({component:c["a"],backdropDismiss:!1,cssClass:"full-modal",componentProps:{onFinish:t,fields:e,skipSummary:!0,disableAutoModalDismiss:!0,cancelAction:()=>{"function"===typeof n&&n(),o["X"].dismiss()}}})).present()}async function l(e,t={}){const n="boolean"!==typeof(null===t||void 0===t?void 0:t.strictNumbers)||(null===t||void 0===t?void 0:t.strictNumbers),r=await o["X"].create({component:a["a"],backdropDismiss:!1,cssClass:"keypad-modal custom-modal-backdrop",componentProps:{title:(null===t||void 0===t?void 0:t.title)||"",preset:(null===t||void 0===t?void 0:t.preset)||"",toggleButton:null===t||void 0===t?void 0:t.toggleButton,strictNumbers:n,customKeyboard:null===t||void 0===t?void 0:t.customKeyboard,noFloat:"boolean"===typeof(null===t||void 0===t?void 0:t.noFloat)&&t.noFloat,onKeyPress(t,o){e(n?parseInt(t):t,o)}}});r.present()}async function u(e,t){(await o["X"].create({component:r["a"],backdropDismiss:!1,cssClass:"full-modal",componentProps:{dismissType:"modal",currentField:e,onFinish:t}})).present()}},c869:function(e,t,n){var o=n("0b07"),r=n("2b3e"),c=o(r,"Set");e.exports=c},c924:function(e,t,n){"use strict";var o=n("7a23");function r(e,t,n,r,c,a){const i=Object(o["resolveComponent"])("ion-button");return Object(o["openBlock"])(),Object(o["createElementBlock"])("table",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.layout,(t,n)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:n},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(t,(n,r)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("td",{class:"his-keyboard-margin",key:"btn-"+r},[n?(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:0,style:Object(o["normalizeStyle"])({width:e.btnSize}),class:Object(o["normalizeClass"])(`his-keyboard-btn btn-${n}-${e.dynamicClass(t)}`),onClick:()=>e.keyPress(n)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(n),1)]),_:2},1032,["style","class","onClick"])):Object(o["createCommentVNode"])("",!0)]))),128))]))),128))])}var c=n("d867"),a=Object(o["defineComponent"])({components:{IonButton:c["d"]},props:{btnSize:{type:String,default:"90%"},layout:{type:Array,required:!0,default:()=>[]},onKeyPress:{type:Function,required:!0}},methods:{keyPress(e){this.onKeyPress(e)},dynamicClass(e){return 3==e.length&&"Unknown"==e[0]?"Keypad":e[0]}}}),i=n("6b0d"),l=n.n(i);const u=l()(a,[["render",r]]);t["a"]=u},d370:function(e,t,n){var o=n("253c"),r=n("1310"),c=Object.prototype,a=c.hasOwnProperty,i=c.propertyIsEnumerable,l=o(function(){return arguments}())?o:function(e){return r(e)&&a.call(e,"callee")&&!i.call(e,"callee")};e.exports=l},da03:function(e,t,n){var o=n("2b3e"),r=o["__core-js_shared__"];e.exports=r},dc57:function(e,t){var n=Function.prototype,o=n.toString;function r(e){if(null!=e){try{return o.call(e)}catch(t){}try{return e+""}catch(t){}}return""}e.exports=r},e6e9:function(e,t,n){"use strict";var o=n("7a23");function r(e,t,n,r,c,a){const i=Object(o["resolveComponent"])("ion-title"),l=Object(o["resolveComponent"])("ion-toolbar"),u=Object(o["resolveComponent"])("ion-header"),s=Object(o["resolveComponent"])("ion-content"),d=Object(o["resolveComponent"])("ion-button"),b=Object(o["resolveComponent"])("ion-footer"),p=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{class:"his-lg-text ion-text-center"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.currentField.helpText),1)]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(s,null,{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(),Object(o["createBlock"])(o["KeepAlive"],null,[(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.currentField.type),{key:e.currentField.id,options:e.currentField.options,preset:e.currentField.preset,clear:e.valueClearIndex,fdata:e.formData,config:e.currentField.config,cdata:e.computedFormData,activationState:e.state,onValue:e.currentField.onValue,defaultValue:e.currentField.defaultValue,onValueUpdate:e.currentField.onValueUpdate,onOnValue:e.onFieldValue},null,40,["options","preset","clear","fdata","config","cdata","activationState","onValue","defaultValue","onValueUpdate","onOnValue"]))],1024))]),_:1}),Object(o["createVNode"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{color:"light"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{disabled:e.disableBtn,onClick:e.onClose,slot:"start",color:"danger",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Close ")]),_:1},8,["disabled","onClick"]),Object(o["createVNode"])(d,{disabled:e.disableBtn,onClick:e.onClear,slot:"end",color:"warning",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Clear ")]),_:1},8,["disabled","onClick"]),Object(o["createVNode"])(d,{disabled:e.disableBtn,onClick:e.onDone,slot:"end",color:"success",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Done ")]),_:1},8,["disabled","onClick"])]),_:1})]),_:1})]),_:1})}var c=n("b5e4"),a=n("d95e"),i=n("d867");function l(){const e={};return a["a"].forEach(t=>{e[t]=Object(o["defineAsyncComponent"])(()=>n("f159")(`./${t}.vue`))}),e}var u=Object(o["defineComponent"])({name:"SingleFieldTouchForm",components:{IonPage:i["D"],IonContent:i["n"],IonFooter:i["o"],IonToolbar:i["S"],IonButton:i["d"],IonHeader:i["q"],IonTitle:i["R"],...l()},props:{dismissType:{type:String},onFinish:{type:Function,required:!0},currentField:{type:Object,required:!0}},data:()=>({valueClearIndex:0,formData:{},computedFormData:{},state:"",value:null,disableBtn:!1}),methods:{onClose(){"modal"===this.dismissType?i["X"].dismiss():this.$router.back()},onClear(){this.valueClearIndex+=1,this.value=null},onFieldValue(e){this.value=e},onDone(){if(this.disableBtn=!0,this.currentField.validation){const e=this.currentField.validation(this.value);if(this.disableBtn=!1,e)return Object(c["e"])(e.join(", "),6e4)}try{this.onFinish(this.value)}catch(e){Object(c["c"])(""+e),console.error(e)}this.onClose(),this.disableBtn=!1}}}),s=n("6b0d"),d=n.n(s);const b=d()(u,[["render",r]]);t["a"]=b},eac5:function(e,t){var n=Object.prototype;function o(e){var t=e&&e.constructor,o="function"==typeof t&&t.prototype||n;return e===o}e.exports=o},f8b6:function(e,t,n){}}]);
//# sourceMappingURL=TouchFormElement18.456b4ecb.js.map