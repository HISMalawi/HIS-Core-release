(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement18","TouchFormElement5","TouchFormElement8"],{"36ad":function(e,t,c){"use strict";c.r(t);var o=c("7a23");function a(e,t,c,a,n,l){const r=Object(o["resolveComponent"])("ion-input");return Object(o["openBlock"])(),Object(o["createBlock"])(r,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t),type:e.type,disabled:e.disabled,readonly:e.readOnly,autocapitalize:"sentences",placeholder:e.placeholder},null,8,["modelValue","type","disabled","readonly","placeholder"])}var n=c("d867"),l=c("2ed9"),r=Object(o["defineComponent"])({name:"HisInput",components:{IonInput:n["v"]},setup(){const{activePlatformProfile:e}=Object(l["e"])(),t=Object(o["computed"])(()=>"HIS_KEYBOARD_ONLY"===e.value.keyboard);return{readOnly:t}},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1},placeholder:{type:String,default:()=>""}}}),i=(c("86f4"),c("6b0d")),u=c.n(i);const s=u()(r,[["render",a],["__scopeId","data-v-04472bbc"]]);t["default"]=s},4910:function(e,t,c){},"51c8":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a=Object(o["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const n=a;t["default"]=n},"7b0f":function(e,t,c){"use strict";c.r(t);var o=c("7a23");const a={key:0,class:"his-card"};function n(e,t,c,n,l,r){const i=Object(o["resolveComponent"])("his-text-input"),u=Object(o["resolveComponent"])("ion-item"),s=Object(o["resolveComponent"])("ion-list"),d=Object(o["resolveComponent"])("ion-col"),b=Object(o["resolveComponent"])("ion-label"),p=Object(o["resolveComponent"])("ion-input"),h=Object(o["resolveComponent"])("ion-icon"),O=Object(o["resolveComponent"])("ion-row"),f=Object(o["resolveComponent"])("ion-grid"),j=Object(o["resolveComponent"])("view-port");return Object(o["openBlock"])(),Object(o["createBlock"])(j,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{readonly:"",value:e.fullSelectedDrugName},null,8,["value"]),Object(o["createVNode"])(f,{style:{background:"white"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{size:"4",class:"border-right scroll-list"},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.drugs,(t,c)=>(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:c},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,{detail:"",color:c===e.selectedDrug?"lightblue":"",onClick:t=>e.selectDrug(c)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(`${(null===t||void 0===t?void 0:t.drug_name)||(null===t||void 0===t?void 0:t.drug_legacy_name)||"N/A"} (${t.product_code})`),1)]),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:1}),Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[null!==e.selectedDrug?(Object(o["openBlock"])(),Object(o["createBlock"])(f,{key:0,class:"scroll-list"},{default:Object(o["withCtx"])(()=>[e.noStockForDrug?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h3",a," No stock information available for drug")):Object(o["createCommentVNode"])("",!0),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.drugs[e.selectedDrug].entries,(t,c)=>(Object(o["openBlock"])(),Object(o["createBlock"])(O,{key:c},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{"size-md":"4"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{position:"floating"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Expiry Date")]),_:1}),Object(o["createVNode"])(p,{readonly:"",value:e.fmtDate(t.expiry_date)},null,8,["value"])]),_:2},1024)]),_:2},1024),Object(o["createVNode"])(d,{"size-md":"4"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{position:"floating"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Available Tins")]),_:1}),Object(o["createVNode"])(p,{readonly:"",placeholder:"0",value:e.fmtNumber(t.originalQuantity)},null,8,["value"])]),_:2},1024)]),_:2},1024),Object(o["createVNode"])(d,{"size-md":"4"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{position:"floating"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Verified Stock")]),_:1}),Object(o["createVNode"])(p,{readonly:"",placeholder:"0",value:e.fmtNumber(t.current_quantity),color:t.current_quantity!=t.originalQuantity?"danger":"success",onClick:t=>e.enterAmount(c)},null,8,["value","color","onClick"])]),_:2},1024)]),_:2},1024),t.current_quantity!=t.originalQuantity?(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:0,"size-md":"12",class:"ion-margin-top"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{position:"floating"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Reason for stock modification")]),_:1}),Object(o["createVNode"])(p,{readonly:"",placeholder:"0",color:"primary",value:t.reason,onClick:t=>e.selectReason(c)},null,8,["value","onClick"]),Object(o["createVNode"])(h,{icon:e.chevronDown,slot:"end",class:"ion-padding-top"},null,8,["icon"])]),_:2},1024)]),_:2},1024)):Object(o["createCommentVNode"])("",!0)]),_:2},1024))),128))]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1})}c("14d9");var l=c("d867"),r=c("3d6c"),i=c("0a79"),u=c("51c8"),s=c("2706"),d=c("d95e"),b=c("36ad"),p=c("2ef0"),h=c("0011"),O=c("ff79"),f=c("c731"),j=Object(o["defineComponent"])({components:{ViewPort:i["a"],HisTextInput:b["default"],IonGrid:l["p"],IonCol:l["m"],IonRow:l["I"],IonIcon:l["r"]},mixins:[u["default"]],data:()=>({drugs:[],selectedDrug:null,stockService:{},chevronDown:O["o"]}),mounted(){this.init()},activated(){this.init()},methods:{clearValue(){this.drugs=this.drugs.map(e=>e.entries?(e.entries=e.entries.map(e=>(e["current_quantity"]=e.originalQuantity,e)),e):e)},async init(){this.$emit("onFieldActivated",this),this.stockService=new r["a"],await this.setDefaultValue()},fmtNumber(e){return Object(h["h"])(e)},fmtDate(e){return Object(h["g"])(e)},async setDefaultValue(){if(!Object(p["isEmpty"])(this.drugs))return;const e=await this.options();this.drugs=[],e.forEach(e=>{this.drugs.push({...e.value})})},getModalTitle(e){return`${e} (${this.drugs[this.selectedDrug].fullName})`},getDrugValue(e,t){return this.drugs[this.selectedDrug].entries[e][t]},setDrugValue(e,t,c){this.drugs[this.selectedDrug].entries[e][t]=c?c.value:""},async enterAmount(e){const t=this.getDrugValue(e,"batch_number");Object(f["b"])({id:"tins",helpText:this.getModalTitle("Enter number of tins for Batch "+t),type:d["b"].TT_NUMBER,defaultValue:()=>this.getDrugValue(e,"current_quantity"),validation:e=>!e||e&&!e.value?null:s["a"].validateSeries([()=>s["a"].isNumber(e),()=>e.value<0?["Number of tins must be greater than 1"]:null])},t=>{this.setDrugValue(e,"current_quantity",t)})},async selectReason(e){const t=this.getDrugValue(e,"batch_number");Object(f["b"])({id:"reason",helpText:this.getModalTitle(`Select reason for Batch ${t} modification`),type:d["b"].TT_SELECT,defaultValue:()=>this.getDrugValue(e,"reason"),validation:e=>s["a"].required(e),options:()=>[{label:"Theft",value:"Theft"},{label:"Took out for training",value:"Took out for training"},{label:"Accidents",value:"Accidents"},{label:"Flooding",value:"Flooding"},{label:"Natural disaster",value:"Natural disaster"}]},t=>{this.setDrugValue(e,"reason",t)})},async selectDrug(e){if(this.selectedDrug=e,!("entries"in this.drugs[e])){const t=await this.stockService.getItem(this.drugs[e].drug_id);this.drugs[e]["entries"]=t.map(e=>(e.pack_size||(e.pack_size=r["a"].getPackSize(e.getPackSize)),e.originalQuantity=e["current_quantity"]/(e.pack_size||1),e.current_quantity=e.originalQuantity,e))}}},computed:{noStockForDrug(){try{return!this.drugs[this.selectedDrug].entries||this.drugs[this.selectedDrug].entries.length<=0}catch(e){return!1}},fullSelectedDrugName(){try{return this.drugs[this.selectedDrug].fullName}catch(e){return"N/A"}},enteredDrugs(){const e=[];return this.drugs.forEach(t=>{if(t.entries){const c=t.entries.filter(e=>e.current_quantity!=e.originalQuantity);c.forEach(c=>{e.push({label:t.shortname,value:{...c,...t}})})}}),e}},watch:{drugs:{async handler(){this.$emit("onValue",this.enteredDrugs)},immediate:!0,deep:!0}}}),g=(c("cfc3"),c("6b0d")),m=c.n(g);const y=m()(j,[["render",n],["__scopeId","data-v-6ecee078"]]);t["default"]=y},"86f4":function(e,t,c){"use strict";c("4910")},"8c55":function(e,t,c){},cfc3:function(e,t,c){"use strict";c("8c55")}}]);
//# sourceMappingURL=TouchFormElement18.3396d9ee.js.map