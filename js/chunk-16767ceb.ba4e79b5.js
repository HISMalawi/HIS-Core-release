(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16767ceb"],{7920:function(e,t,i){"use strict";var n=i("7a23");function a(e,t,i,a,o,s){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var o=i("9441"),s=Object(n["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:o["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),r=i("6b0d"),d=i.n(r);const c=d()(s,[["render",a]]);t["a"]=c},"7dd5":function(e,t,i){"use strict";i.r(t);var n=i("7a23");function a(e,t,i,a,o,s){const r=Object(n["resolveComponent"])("his-standard-form");return Object(n["openBlock"])(),Object(n["createBlock"])(r,{fields:e.fields,activeField:e.activeField,onFinishAction:e.onFinish,skipSummary:!0},null,8,["fields","activeField","onFinishAction"])}i("14d9");var o=i("d95e"),s=i("7920"),r=i("2706"),d=i("9283"),c=i("3d6c"),l=i("b5e4"),u=i("0011"),p=Object(n["defineComponent"])({components:{HisStandardForm:s["a"]},data:()=>({activeField:"",fields:[],drugs:[],selectedDrugs:[],barcode:"",stockService:{}}),methods:{async onFinish(e){const t=this.prepDrugs(e);try{await this.stockService.batchUpdate({verification_date:e.date.value,reason:e.reason.value,items:t}),Object(l["d"])("Stock succesfully updated"),this.$router.push("/")}catch(i){Object(l["c"])("Could not save stock"),console.error(i)}},getFields(){return[{id:"date",helpText:"Verification Date",type:o["b"].TT_FULL_DATE,validation:e=>r["a"].required(e)},{id:"enter_batches",helpText:"Batch entry",type:o["b"].TT_BATCH_VERIFICATION,options:()=>this.drugs,validation:e=>r["a"].required(e)},{id:"reason",helpText:"Select reason",type:o["b"].TT_SELECT,validation:e=>r["a"].required(e),options:()=>[{label:"Monthly stock take",value:"Monthly stock take"},{label:"Audit",value:"Audit"},{label:"Adhoc (due to stock imbalance)",value:"Adhoc (due to stock imbalance)"},{label:"Supervision",value:"Supervision"},{label:"Handover",value:"Handover"}]},{id:"verification_summary",helpText:"Summary",type:o["b"].TT_TABLE_VIEWER,options:e=>this.buildResults(e.enter_batches),config:{hiddenFooterBtns:["Clear"]}}]},buildResults(e){const t=["Drug","Tins/Pallets","Reason for Modification","Expiry date"],i=e.map(e=>{const t=e.value;return[t.shortName,Object(u["h"])(t["current_quantity"]),t.reason,d["b"].toStandardHisDisplayFormat(t.expiry_date)]});return[{label:"Confirm entry",value:"Table",other:{columns:t,rows:i}}]},prepDrugs(e){return e.enter_batches.map(e=>({id:e.value.id,current_quantity:parseInt(e.value.pack_size)*parseInt(e.value.current_quantity),delivered_quantity:e.value.delivered_quantity,pack_size:e.value.pack_size,expiry_date:e.value.expiry_date,delivery_date:e.value.delivery_date,reason:e.value.reason}))},selectAll(e){return e.map(e=>(e.isChecked=!0,e))},getFormattedDrugs(){return this.stockService.getItems().then(e=>e.map(e=>({label:(null===e||void 0===e?void 0:e.drug_name)||(null===e||void 0===e?void 0:e.drug_legacy_name)||"N/A",value:e})))}},async created(){this.stockService=new c["a"],this.fields=this.getFields(),this.drugs=await this.getFormattedDrugs()}}),h=i("6b0d"),v=i.n(h);const m=v()(p,[["render",a]]);t["default"]=m}}]);
//# sourceMappingURL=chunk-16767ceb.ba4e79b5.js.map