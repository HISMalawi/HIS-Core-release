(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement16","TouchFormElement38","TouchFormElement5","TouchFormElement8"],{"0a79":function(e,t,n){"use strict";var o=n("7a23");function l(e,t,n,l,a,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{id:"view-port",class:Object(o["normalizeClass"])(e.showFull?"":"half")},[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)],2)}var a=Object(o["defineComponent"])({name:"ViewPort",props:{showFull:{type:Boolean,default:()=>!0}}}),c=(n("a4d3"),n("6b0d")),r=n.n(c);const i=r()(a,[["render",l],["__scopeId","data-v-7c293cad"]]);t["a"]=i},"36ad":function(e,t,n){"use strict";n.r(t);var o=n("7a23");function l(e,t,n,l,a,c){const r=Object(o["resolveComponent"])("ion-input");return Object(o["openBlock"])(),Object(o["createBlock"])(r,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t),type:e.type,disabled:e.disabled,readonly:e.readOnly,autocapitalize:"sentences"},null,8,["modelValue","type","disabled","readonly"])}var a=n("d867"),c=n("2ed9"),r=Object(o["defineComponent"])({name:"HisInput",components:{IonInput:a["IonInput"]},setup(){const{activePlatformProfile:e}=Object(c["e"])(),t=Object(o["computed"])(()=>"HIS_KEYBOARD_ONLY"===e.value.keyboard);return{readOnly:t}},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1}}}),i=(n("ba6e"),n("6b0d")),u=n.n(i);const d=u()(r,[["render",l],["__scopeId","data-v-64dded10"]]);t["default"]=d},3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"l",(function(){return l})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"k",(function(){return r})),n.d(t,"i",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"j",(function(){return s})),n.d(t,"c",(function(){return b})),n.d(t,"h",(function(){return p})),n.d(t,"f",(function(){return h}));const o=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],l=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],a=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],c=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],r=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],i=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],u=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],d=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],s=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],b=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],p=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],h=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"4f41":function(e,t,n){},"51c8":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),l=Object(o["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const a=l;t["default"]=a},5498:function(e,t,n){"use strict";n("4f41")},"5c0e":function(e,t,n){},a4d3:function(e,t,n){"use strict";n("a6f7")},a6f7:function(e,t,n){},ba6e:function(e,t,n){"use strict";n("5c0e")},e6e9:function(e,t,n){"use strict";var o=n("7a23");function l(e,t,n,l,a,c){const r=Object(o["resolveComponent"])("ion-title"),i=Object(o["resolveComponent"])("ion-toolbar"),u=Object(o["resolveComponent"])("ion-header"),d=Object(o["resolveComponent"])("ion-content"),s=Object(o["resolveComponent"])("ion-button"),b=Object(o["resolveComponent"])("ion-footer"),p=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{class:"his-lg-text ion-text-center"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.currentField.helpText),1)]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(),Object(o["createBlock"])(o["KeepAlive"],null,[(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.currentField.type),{key:e.currentField.id,currentFieldig:e.currentField.currentFieldig,options:e.currentField.options,preset:e.currentField.preset,clear:e.valueClearIndex,fdata:e.formData,config:e.currentField.config,cdata:e.computedFormData,activationState:e.state,onValue:e.currentField.onValue,defaultValue:e.currentField.defaultValue,onValueUpdate:e.currentField.onValueUpdate,onOnValue:e.onFieldValue},null,40,["currentFieldig","options","preset","clear","fdata","config","cdata","activationState","onValue","defaultValue","onValueUpdate","onOnValue"]))],1024))]),_:1}),Object(o["createVNode"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{color:"light"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{disabled:e.disableBtn,onClick:e.onClose,slot:"start",color:"danger",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Close ")]),_:1},8,["disabled","onClick"]),Object(o["createVNode"])(s,{disabled:e.disableBtn,onClick:e.onClear,slot:"end",color:"warning",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Clear ")]),_:1},8,["disabled","onClick"]),Object(o["createVNode"])(s,{disabled:e.disableBtn,onClick:e.onDone,slot:"end",color:"success",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Done ")]),_:1},8,["disabled","onClick"])]),_:1})]),_:1})]),_:1})}var a=n("b5e4"),c=n("d95e"),r=n("d867");function i(){const e={};return c["a"].forEach(t=>{e[t]=Object(o["defineAsyncComponent"])(()=>n("f159")(`./${t}.vue`))}),e}var u=Object(o["defineComponent"])({name:"SingleFieldTouchForm",components:{IonPage:r["IonPage"],IonContent:r["IonContent"],IonFooter:r["IonFooter"],IonToolbar:r["IonToolbar"],IonButton:r["IonButton"],IonHeader:r["IonHeader"],IonTitle:r["IonTitle"],...i()},props:{dismissType:{type:String},onFinish:{type:Function,required:!0},currentField:{type:Object,required:!0}},data:()=>({valueClearIndex:0,formData:{},computedFormData:{},state:"",value:null,disableBtn:!1}),methods:{onClose(){"modal"===this.dismissType?r["modalController"].dismiss():this.$router.back()},onClear(){this.valueClearIndex+=1,this.value=null},onFieldValue(e){this.value=e},onDone(){if(this.disableBtn=!0,this.currentField.validation){const e=this.currentField.validation(this.value);if(this.disableBtn=!1,e)return Object(a["e"])(e.join(", "),6e4)}try{this.onFinish(this.value)}catch(e){Object(a["c"])(""+e),console.error(e)}this.onClose(),this.disableBtn=!1}}}),d=n("6b0d"),s=n.n(d);const b=s()(u,[["render",l]]);t["a"]=b},f2ab:function(e,t,n){"use strict";n.r(t);var o=n("7a23");function l(e,t,n,l,a,c){const r=Object(o["resolveComponent"])("his-text-input"),i=Object(o["resolveComponent"])("ion-item"),u=Object(o["resolveComponent"])("ion-list"),d=Object(o["resolveComponent"])("ion-col"),s=Object(o["resolveComponent"])("ion-label"),b=Object(o["resolveComponent"])("ion-input"),p=Object(o["resolveComponent"])("ion-row"),h=Object(o["resolveComponent"])("ion-button"),j=Object(o["resolveComponent"])("ion-grid"),O=Object(o["resolveComponent"])("view-port");return Object(o["openBlock"])(),Object(o["createBlock"])(O,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{readonly:"",value:e.fullSelectedDrugName},null,8,["value"]),Object(o["createVNode"])(j,{style:{background:"white"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{size:"4",class:"border-right scroll-list"},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.drugs,(t,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])(u,{key:n},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{detail:"",color:n===e.selectedDrug?"secondary":"",onClick:t=>e.selectDrug(n)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(`${t.shortName} (${t.packSizes[0]})`),1)]),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:1}),Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[null!==e.selectedDrug?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:0,class:"scroll-list"},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.drugs[e.selectedDrug].entries,(t,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:n},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{position:"floating"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Product Code")]),_:1}),Object(o["createVNode"])(b,{readonly:"",placeholder:"e.g. ABC123",value:t.productCode,onClick:t=>e.enterProductCode(n)},null,8,["value","onClick"])]),_:2},1024)]),_:2},1024),Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{position:"floating"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Total Tins")]),_:1}),Object(o["createVNode"])(b,{readonly:"",placeholder:"0",value:e.fmtNumber(t.tins),onClick:t=>e.enterTins(n)},null,8,["value","onClick"])]),_:2},1024)]),_:2},1024),Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{position:"floating"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Expiry Date")]),_:1}),Object(o["createVNode"])(b,{readonly:"",placeholder:"DD/MM/YYYY",value:e.fmtDate(t.expiry),onClick:t=>e.enterExpiry(n)},null,8,["value","onClick"])]),_:2},1024)]),_:2},1024),Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{position:"floating"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Batch Number")]),_:1}),Object(o["createVNode"])(b,{readonly:"",placeholder:"e.g. 'ABC-123'",value:t.batchNumber,onClick:t=>e.enterBatch(n)},null,8,["value","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),Object(o["createVNode"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,{onClick:e.addRow,siz:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Add row")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1})}n("14d9");var a=n("0a79"),c=n("51c8"),r=n("d867"),i=n("2ef0"),u=n("e6e9"),d=n("d95e"),s=n("2706"),b=n("1c74"),p=n("36ad"),h=n("3800"),j=n("0011"),O=Object(o["defineComponent"])({components:{HisTextInput:p["default"],ViewPort:a["a"],IonInput:r["IonInput"],IonLabel:r["IonLabel"],IonList:r["IonList"],IonItem:r["IonItem"],IonGrid:r["IonGrid"],IonCol:r["IonCol"],IonRow:r["IonRow"],IonButton:r["IonButton"]},mixins:[c["default"]],data:()=>({drugs:[],allDrugsByName:[],selectedDrug:null}),mounted(){this.init()},async activated(){this.init()},methods:{fmtNumber(e){return Object(j["g"])(e)},fmtDate(e){return Object(j["e"])(e)},async init(){this.$emit("onFieldActivated",this),await this.setDefaultValue()},async setDefaultValue(){const e=await this.options();this.drugs=this.drugs.filter(t=>e.map(e=>e.label).includes(t.label)),e.forEach(e=>{const t={tabs:e.value.packSizes[0],tins:null,expiry:null,batchNumber:null,productCode:null},n={label:e.label,entries:[{...t},{...t},{...t}],...e.value},o=Object(i["find"])(this.drugs,{label:e.label});o||this.drugs.push(n)}),this.drugs.length>=1&&this.selectDrug(0)},getModalTitle(e){return`${e} (${this.drugs[this.selectedDrug].shortName})`},getDrugValue(e,t){return this.drugs[this.selectedDrug].entries[e][t]},setDrugValue(e,t,n){this.drugs[this.selectedDrug].entries[e][t]=n?n.value:""},enterTins(e){this.launchKeyPad({id:"tins",helpText:this.getModalTitle("Enter number of tins"),type:d["b"].TT_NUMBER,defaultValue:()=>this.getDrugValue(e,"tins"),validation:e=>!e||e&&!e.value?null:s["a"].validateSeries([()=>s["a"].isNumber(e),()=>e.value<=0?["Number of tins must be greater than 1"]:null])},t=>this.setDrugValue(e,"tins",t))},enterBatch(e){this.launchKeyPad({id:"batch",helpText:this.getModalTitle("Enter batch number"),type:d["b"].TT_TEXT,config:{customKeyboard:[h["c"],[["Delete"]]]},defaultValue:()=>this.getDrugValue(e,"batchNumber")},t=>{const n={...t},o=(""+n.value).toUpperCase();n.label=o,n.value=o,this.setDrugValue(e,"batchNumber",n)})},enterProductCode(e){this.launchKeyPad({id:"code",helpText:this.getModalTitle("Enter Product Code"),type:d["b"].TT_TEXT,config:{customKeyboard:[h["c"],[["Delete"]]]},defaultValue:()=>this.getDrugValue(e,"productCode")},t=>{const n={...t},o=(""+n.value).toUpperCase();n.label=o,n.value=o,this.setDrugValue(e,"productCode",n)})},enterExpiry(e){this.launchKeyPad({id:"expiry",helpText:this.getModalTitle("Enter expiry date"),type:d["b"].TT_FULL_DATE,defaultValue:()=>this.getDrugValue(e,"expiry"),validation:e=>{if(e&&e.value)return new Date(e.value)<new Date(b["e"].getSessionDate())?["You are not allowed to enter expired drugs"]:null}},t=>this.setDrugValue(e,"expiry",t))},async launchKeyPad(e,t){const n=await r["modalController"].create({component:u["a"],backdropDismiss:!1,cssClass:"full-modal",componentProps:{dismissType:"modal",currentField:e,onFinish:t}});n.present()},addRow(){this.drugs[this.selectedDrug].entries.push({tabs:this.drugs[this.selectedDrug].packSizes[0],tins:null,expiry:null,batchNumber:null,productCode:null})},selectDrug(e){this.selectedDrug=e},validateEntry(e){return!Object(i["isEmpty"])(e.tins)&&!Object(i["isEmpty"])(e.expiry)&&!Object(i["isEmpty"])(e.batchNumber)&&!Object(i["isEmpty"])(e.productCode)}},computed:{fullSelectedDrugName(){try{return this.drugs[this.selectedDrug].fullName}catch(e){return"N/A"}},enteredDrugs(){const e=[];return this.drugs.forEach(t=>{const n=t.entries.filter(e=>this.validateEntry(e));n.forEach(n=>{e.push({label:t.shortName,value:{...n,...t}})})}),e}},watch:{clear(){this.drugs=this.drugs.map(e=>(e.entries=e.entries.map(e=>(e.tins=null,e.expiry=null,e.batchNumber=null,e.productCode=null,e)),e))},drugs:{handler(){this.$emit("onValue",this.enteredDrugs)},immediate:!0,deep:!0}}}),f=(n("5498"),n("6b0d")),m=n.n(f);const C=m()(O,[["render",l],["__scopeId","data-v-0ab95172"]]);t["default"]=C}}]);
//# sourceMappingURL=TouchFormElement16.8e72c6fa.js.map