(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement18","TouchFormElement5","TouchFormElement8"],{"36ad":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c=Object(a["withScopeId"])("data-v-64dded10"),o=c((function(e,t,n,c,o,r){const l=Object(a["resolveComponent"])("ion-input");return Object(a["openBlock"])(),Object(a["createBlock"])(l,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[1]||(t[1]=t=>e.text=t),type:e.type,disabled:e.disabled,readonly:e.readOnly,autocapitalize:"sentences"},null,8,["modelValue","type","disabled","readonly"])}));var r=n("8a30"),l=n("2ed9"),u=Object(a["defineComponent"])({name:"HisInput",components:{IonInput:r["v"]},setup(){const{activePlatformProfile:e}=Object(l["e"])(),t=Object(a["computed"])(()=>"HIS_KEYBOARD_ONLY"===e.value.keyboard);return{readOnly:t}},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1}}}),i=(n("ba6e"),n("d959")),s=n.n(i);const d=s()(u,[["render",o],["__scopeId","data-v-64dded10"]]);t["default"]=d},"51c8":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=Object(a["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const o=c;t["default"]=o},7989:function(e,t,n){},"7b0f":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c=Object(a["withScopeId"])("data-v-df91638e");Object(a["pushScopeId"])("data-v-df91638e");const o={key:0,class:"his-card"},r=Object(a["createTextVNode"])("Expiry Date"),l=Object(a["createTextVNode"])("Available Tins"),u=Object(a["createTextVNode"])("Verified Stock");Object(a["popScopeId"])();const i=c((function(e,t,n,i,s,d){const p=Object(a["resolveComponent"])("his-text-input"),b=Object(a["resolveComponent"])("ion-item"),f=Object(a["resolveComponent"])("ion-list"),m=Object(a["resolveComponent"])("ion-col"),h=Object(a["resolveComponent"])("ion-label"),O=Object(a["resolveComponent"])("ion-input"),g=Object(a["resolveComponent"])("ion-row"),j=Object(a["resolveComponent"])("ion-grid"),y=Object(a["resolveComponent"])("view-port");return Object(a["openBlock"])(),Object(a["createBlock"])(y,null,{default:c(()=>[Object(a["createVNode"])(p,{readonly:"",value:e.fullSelectedDrugName},null,8,["value"]),Object(a["createVNode"])(j,{style:{background:"white"}},{default:c(()=>[Object(a["createVNode"])(g,null,{default:c(()=>[Object(a["createVNode"])(m,{size:"4",class:"border-right scroll-list"},{default:c(()=>[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.drugs,(t,n)=>(Object(a["openBlock"])(),Object(a["createBlock"])(f,{key:n},{default:c(()=>[Object(a["createVNode"])(b,{detail:"",color:n===e.selectedDrug?"secondary":"",onClick:t=>e.selectDrug(n)},{default:c(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(`${t.shortName} (${t.packSizes[0]})`),1)]),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:1}),Object(a["createVNode"])(m,null,{default:c(()=>[null!==e.selectedDrug?(Object(a["openBlock"])(),Object(a["createBlock"])(j,{key:0,class:"scroll-list"},{default:c(()=>[e.noStockForDrug?(Object(a["openBlock"])(),Object(a["createBlock"])("h3",o," No stock information available for drug")):Object(a["createCommentVNode"])("",!0),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.drugs[e.selectedDrug].entries,(t,n)=>(Object(a["openBlock"])(),Object(a["createBlock"])(g,{key:n},{default:c(()=>[Object(a["createVNode"])(m,null,{default:c(()=>[Object(a["createVNode"])(b,null,{default:c(()=>[Object(a["createVNode"])(h,{position:"floating"},{default:c(()=>[r]),_:1}),Object(a["createVNode"])(O,{readonly:"",value:e.fmtDate(t.expiry_date)},null,8,["value"])]),_:2},1024)]),_:2},1024),Object(a["createVNode"])(m,null,{default:c(()=>[Object(a["createVNode"])(b,null,{default:c(()=>[Object(a["createVNode"])(h,{position:"floating"},{default:c(()=>[l]),_:1}),Object(a["createVNode"])(O,{readonly:"",placeholder:"0",value:e.fmtNumber(t.originalQuantity)},null,8,["value"])]),_:2},1024)]),_:2},1024),Object(a["createVNode"])(m,null,{default:c(()=>[Object(a["createVNode"])(b,null,{default:c(()=>[Object(a["createVNode"])(h,{position:"floating"},{default:c(()=>[u]),_:1}),Object(a["createVNode"])(O,{readonly:"",placeholder:"0",value:e.fmtNumber(t.current_quantity),color:t.current_quantity!=t.originalQuantity?"danger":"success",onClick:t=>e.enterAmount(n)},null,8,["value","color","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1})}));var s=n("8a30"),d=n("3d6c"),p=n("0a79"),b=n("51c8"),f=n("e6e9"),m=n("2706"),h=n("d95e"),O=n("36ad"),g=n("2ef0"),j=n("0011"),y=Object(a["defineComponent"])({components:{ViewPort:p["a"],HisTextInput:O["default"],IonGrid:s["p"],IonCol:s["m"],IonRow:s["H"]},mixins:[b["default"]],data:()=>({drugs:[],selectedDrug:null,stockService:{}}),mounted(){this.init()},activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this),this.stockService=new d["a"],await this.setDefaultValue()},fmtNumber(e){return Object(j["f"])(e)},fmtDate(e){return Object(j["e"])(e)},async setDefaultValue(){if(!Object(g["isEmpty"])(this.drugs))return;const e=await this.options();this.drugs=[],e.forEach(e=>{this.drugs.push({...e.value})})},getModalTitle(e){return`${e} (${this.drugs[this.selectedDrug].fullName})`},getDrugValue(e,t){return this.drugs[this.selectedDrug].entries[e][t]},setDrugValue(e,t,n){this.drugs[this.selectedDrug].entries[e][t]=n?n.value:""},async enterAmount(e){const t=this.getDrugValue(e,"batch_number");this.launchKeyPad({id:"tins",helpText:this.getModalTitle("Enter number of tins for Batch "+t),type:h["b"].TT_NUMBER,defaultValue:()=>this.getDrugValue(e,"current_quantity"),validation:e=>!e||e&&!e.value?null:m["a"].validateSeries([()=>m["a"].isNumber(e),()=>e.value<0?["Number of tins must be greater than 1"]:null])},t=>{this.setDrugValue(e,"current_quantity",t)})},async launchKeyPad(e,t){const n=await s["Z"].create({component:f["a"],backdropDismiss:!1,cssClass:"full-modal",componentProps:{dismissType:"modal",currentField:e,onFinish:t}});n.present()},async selectDrug(e){if(this.selectedDrug=e,!("entries"in this.drugs[e])){const t=await this.stockService.getItem(this.drugs[this.selectedDrug].drugID);this.drugs[e]["entries"]=t.map(e=>(e.originalQuantity=e["current_quantity"],e))}}},computed:{noStockForDrug(){try{return!this.drugs[this.selectedDrug].entries||this.drugs[this.selectedDrug].entries.length<=0}catch(e){return!1}},fullSelectedDrugName(){try{return this.drugs[this.selectedDrug].fullName}catch(e){return"N/A"}},enteredDrugs(){const e=[];return this.drugs.forEach(t=>{if(t.entries){const n=t.entries.filter(e=>e.current_quantity!=e.originalQuantity);n.forEach(n=>{e.push({label:t.shortname,value:{...n,...t}})})}}),e}},watch:{clear(){this.drugs=this.drugs.map(e=>e.entries?(e.entries=e.entries.map(e=>(e["current_quantity"]=e.originalQuantity,e)),e):e)},drugs:{async handler(){this.$emit("onValue",this.enteredDrugs)},immediate:!0,deep:!0}}}),v=(n("dee7"),n("d959")),V=n.n(v);const N=V()(y,[["render",i],["__scopeId","data-v-df91638e"]]);t["default"]=N},ba6e:function(e,t,n){"use strict";n("7989")},dee7:function(e,t,n){"use strict";n("fc9b")},fc9b:function(e,t,n){}}]);
//# sourceMappingURL=TouchFormElement18.c104970c.js.map