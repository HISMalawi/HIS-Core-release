(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement18","TouchFormElement5","TouchFormElement8"],{"0547":function(e,t,a){},"36ad":function(e,t,a){"use strict";a.r(t);var n=a("7a23");function o(e,t,a,o,c,l){const r=Object(n["resolveComponent"])("ion-input");return Object(n["openBlock"])(),Object(n["createBlock"])(r,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t),type:e.type,disabled:e.disabled,readonly:e.readOnly,autocapitalize:"sentences",placeholder:e.placeholder},null,8,["modelValue","type","disabled","readonly","placeholder"])}var c=a("d867"),l=a("2ed9"),r=Object(n["defineComponent"])({name:"HisInput",components:{IonInput:c["v"]},setup(){const{activePlatformProfile:e}=Object(l["e"])(),t=Object(n["computed"])(()=>"HIS_KEYBOARD_ONLY"===e.value.keyboard);return{readOnly:t}},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1},placeholder:{type:String,default:()=>""}}}),i=(a("86f4"),a("d959")),u=a.n(i);const s=u()(r,[["render",o],["__scopeId","data-v-04472bbc"]]);t["default"]=s},"51c8":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o=Object(n["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const c=o;t["default"]=c},"7b0f":function(e,t,a){"use strict";a.r(t);var n=a("7a23");const o={key:0,class:"his-card"};function c(e,t,a,c,l,r){const i=Object(n["resolveComponent"])("his-text-input"),u=Object(n["resolveComponent"])("ion-item"),s=Object(n["resolveComponent"])("ion-list"),d=Object(n["resolveComponent"])("ion-col"),b=Object(n["resolveComponent"])("ion-label"),p=Object(n["resolveComponent"])("ion-input"),h=Object(n["resolveComponent"])("ion-icon"),f=Object(n["resolveComponent"])("ion-row"),O=Object(n["resolveComponent"])("ion-grid"),j=Object(n["resolveComponent"])("view-port");return Object(n["openBlock"])(),Object(n["createBlock"])(j,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(i,{readonly:"",value:e.fullSelectedDrugName},null,8,["value"]),Object(n["createVNode"])(O,{style:{background:"white"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(d,{size:"4",class:"border-right scroll-list"},{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.drugs,(t,a)=>(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:a},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,{detail:"",color:a===e.selectedDrug?"secondary":"",onClick:t=>e.selectDrug(a)},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(`${t.shortName} (${t.packSizes[0]})`),1)]),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:1}),Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])(()=>[null!==e.selectedDrug?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:0,class:"scroll-list"},{default:Object(n["withCtx"])(()=>[e.noStockForDrug?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h3",o," No stock information available for drug")):Object(n["createCommentVNode"])("",!0),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.drugs[e.selectedDrug].entries,(t,a)=>(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:a},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(d,{"size-md":"4"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{position:"floating"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("Expiry Date")]),_:1}),Object(n["createVNode"])(p,{readonly:"",value:e.fmtDate(t.expiry_date)},null,8,["value"])]),_:2},1024)]),_:2},1024),Object(n["createVNode"])(d,{"size-md":"4"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{position:"floating"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("Available Tins")]),_:1}),Object(n["createVNode"])(p,{readonly:"",placeholder:"0",value:e.fmtNumber(t.originalQuantity)},null,8,["value"])]),_:2},1024)]),_:2},1024),Object(n["createVNode"])(d,{"size-md":"4"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{position:"floating"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("Verified Stock")]),_:1}),Object(n["createVNode"])(p,{readonly:"",placeholder:"0",value:e.fmtNumber(t.current_quantity),color:t.current_quantity!=t.originalQuantity?"danger":"success",onClick:t=>e.enterAmount(a)},null,8,["value","color","onClick"])]),_:2},1024)]),_:2},1024),t.current_quantity!=t.originalQuantity?(Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:0,"size-md":"12",class:"ion-margin-top"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{position:"floating"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("Reason for stock modification")]),_:1}),Object(n["createVNode"])(p,{readonly:"",placeholder:"0",color:"primary",value:t.reason,onClick:t=>e.selectReason(a)},null,8,["value","onClick"]),Object(n["createVNode"])(h,{icon:e.chevronDown,slot:"end",class:"ion-padding-top"},null,8,["icon"])]),_:2},1024)]),_:2},1024)):Object(n["createCommentVNode"])("",!0)]),_:2},1024))),128))]),_:1})):Object(n["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1})}a("14d9");var l=a("d867"),r=a("3d6c"),i=a("0a79"),u=a("51c8"),s=a("e6e9"),d=a("2706"),b=a("d95e"),p=a("36ad"),h=a("2ef0"),f=a("0011"),O=a("ff79"),j=Object(n["defineComponent"])({components:{ViewPort:i["a"],HisTextInput:p["default"],IonGrid:l["p"],IonCol:l["m"],IonRow:l["I"],IonIcon:l["r"]},mixins:[u["default"]],data:()=>({drugs:[],selectedDrug:null,stockService:{},chevronDown:O["o"]}),mounted(){this.init()},activated(){this.init()},methods:{clearValue(){this.drugs=this.drugs.map(e=>e.entries?(e.entries=e.entries.map(e=>(e["current_quantity"]=e.originalQuantity,e)),e):e)},async init(){this.$emit("onFieldActivated",this),this.stockService=new r["a"],await this.setDefaultValue()},fmtNumber(e){return Object(f["h"])(e)},fmtDate(e){return Object(f["g"])(e)},async setDefaultValue(){if(!Object(h["isEmpty"])(this.drugs))return;const e=await this.options();this.drugs=[],e.forEach(e=>{this.drugs.push({...e.value})})},getModalTitle(e){return`${e} (${this.drugs[this.selectedDrug].fullName})`},getDrugValue(e,t){return this.drugs[this.selectedDrug].entries[e][t]},setDrugValue(e,t,a){this.drugs[this.selectedDrug].entries[e][t]=a?a.value:""},async enterAmount(e){const t=this.getDrugValue(e,"batch_number");this.launchKeyPad({id:"tins",helpText:this.getModalTitle("Enter number of tins for Batch "+t),type:b["b"].TT_NUMBER,defaultValue:()=>this.getDrugValue(e,"current_quantity"),validation:e=>!e||e&&!e.value?null:d["a"].validateSeries([()=>d["a"].isNumber(e),()=>e.value<0?["Number of tins must be greater than 1"]:null])},t=>{this.setDrugValue(e,"current_quantity",t)})},async selectReason(e){const t=this.getDrugValue(e,"batch_number");this.launchKeyPad({id:"reason",helpText:this.getModalTitle(`Select reason for Batch ${t} modification`),type:b["b"].TT_SELECT,defaultValue:()=>this.getDrugValue(e,"reason"),validation:e=>d["a"].required(e),options:()=>[{label:"theft",value:"theft"},{label:"took out for training",value:"took out for training"},{label:"accidents",value:"accidents"},{label:"flooding or natural disaster",value:"flooding or natural disaster"}]},t=>{this.setDrugValue(e,"reason",t)})},async launchKeyPad(e,t){const a=await l["ab"].create({component:s["a"],backdropDismiss:!1,cssClass:"full-modal",componentProps:{dismissType:"modal",currentField:e,onFinish:t}});a.present()},async selectDrug(e){if(this.selectedDrug=e,!("entries"in this.drugs[e])){const t=await this.stockService.getItem(this.drugs[this.selectedDrug].drugID);this.drugs[e]["entries"]=t.map(e=>(e.pack_size||(e.pack_size=r["a"].getPackSize(e.getPackSize)),e.originalQuantity=e["current_quantity"]/(e.pack_size||1),e.current_quantity=e.originalQuantity,e))}}},computed:{noStockForDrug(){try{return!this.drugs[this.selectedDrug].entries||this.drugs[this.selectedDrug].entries.length<=0}catch(e){return!1}},fullSelectedDrugName(){try{return this.drugs[this.selectedDrug].fullName}catch(e){return"N/A"}},enteredDrugs(){const e=[];return this.drugs.forEach(t=>{if(t.entries){const a=t.entries.filter(e=>e.current_quantity!=e.originalQuantity);a.forEach(a=>{e.push({label:t.shortname,value:{...a,...t}})})}}),e}},watch:{drugs:{async handler(){this.$emit("onValue",this.enteredDrugs)},immediate:!0,deep:!0}}}),m=(a("c8f4"),a("d959")),g=a.n(m);const y=g()(j,[["render",c],["__scopeId","data-v-62b3a827"]]);t["default"]=y},"86f4":function(e,t,a){"use strict";a("89a0")},"89a0":function(e,t,a){},c8f4:function(e,t,a){"use strict";a("0547")}}]);
//# sourceMappingURL=TouchFormElement18.aed56a46.js.map