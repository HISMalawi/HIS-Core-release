(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement21","TouchFormElement5","TouchFormElement54","TouchFormElement8"],{"08d2":function(e,t,i){},"331e":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var o=i("cc6f"),n=i("8158");class a extends o["a"]{constructor(e,t){super(e,122,t)}static async getComplaintsList(e,t=""){return n["a"].getConceptSet(e,t)}async fetchLatestTriageEncounter(){return await a.getObs({concept_id:n["a"].getConceptID("History of COVID-19 contact"),start_date:this.date,end_date:this.date,person_id:this.patientID})}}},"347b":function(e,t,i){"use strict";i("08d2")},"36ad":function(e,t,i){"use strict";i.r(t);var o=i("7a23");function n(e,t,i,n,a,l){const s=Object(o["resolveComponent"])("ion-input");return Object(o["openBlock"])(),Object(o["createBlock"])(s,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t),type:e.type,disabled:e.disabled,readonly:e.readOnly,autocapitalize:"sentences",placeholder:e.placeholder},null,8,["modelValue","type","disabled","readonly","placeholder"])}var a=i("d867"),l=i("2ed9"),s=Object(o["defineComponent"])({name:"HisInput",components:{IonInput:a["v"]},setup(){const{activePlatformProfile:e}=Object(l["e"])(),t=Object(o["computed"])(()=>"HIS_KEYBOARD_ONLY"===e.value.keyboard);return{readOnly:t}},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1},placeholder:{type:String,default:()=>""}}}),c=(i("86f4"),i("6b0d")),r=i.n(c);const d=r()(s,[["render",n],["__scopeId","data-v-04472bbc"]]);t["default"]=d},4910:function(e,t,i){},"51c8":function(e,t,i){"use strict";i.r(t);var o=i("7a23"),n=Object(o["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const a=n;t["default"]=a},"7f29":function(e,t,i){"use strict";i("cd67")},"82a9":function(e,t,i){"use strict";i.r(t);i("14d9");var o=i("7a23"),n=i("db10"),a=i("2345"),l=i("36ad"),s=i("6be2"),c=i("0a79"),r=i("51c8"),d=i("d867"),h=i("2ef0"),u=Object(o["defineComponent"])({components:{IonList:d["y"],IonItem:d["w"],IonLabel:d["x"],HisTextInput:l["default"],HisKeyboard:n["a"],ViewPort:c["a"],IonGrid:d["p"],IonRow:d["I"],IonCol:d["m"],IonInfiniteScroll:d["t"],IonInfiniteScrollContent:d["u"],IonContent:d["n"]},mixins:[r["default"]],data:()=>({showKeyboard:!1,selected:"",filter:"",filtered:[],keyboard:s["h"],listData:[],infiniteScroll:{enabled:!1,page:1,limit:10,threshold:"100px",handler:async(e,t,i)=>[]}}),created(){var e,t,i,o,n,a;this.showKeyboard=!0===(null===(e=this.config)||void 0===e?void 0:e.showKeyboard),this.infiniteScroll.enabled=!0===(null===(t=this.config)||void 0===t||null===(t=t.infiniteScroll)||void 0===t?void 0:t.enabled),this.infiniteScroll.page=(null===(i=this.config)||void 0===i||null===(i=i.infiniteScroll)||void 0===i?void 0:i.page)||1,this.infiniteScroll.limit=(null===(o=this.config)||void 0===o||null===(o=o.infiniteScroll)||void 0===o?void 0:o.limit)||10,this.infiniteScroll.threshold=(null===(n=this.config)||void 0===n||null===(n=n.infiniteScroll)||void 0===n?void 0:n.threshold)||"100px",this.infiniteScroll.handler=null===(a=this.config)||void 0===a||null===(a=a.infiniteScroll)||void 0===a?void 0:a.handler},watch:{footerButtonEvent:{handler(e){if(Object(h["isPlainObject"])(e.onClickComponentEvents)){const t=(null===e||void 0===e?void 0:e.onClickComponentEvents)||{};if(t&&"function"===typeof t.setValue){const i=t.setValue(e);"string"===typeof i&&(this.filter=i,this.selected=i,this.$emit("onValue",{label:i,value:i}))}}},deep:!0},listData:{handler(e){e&&(this.filtered=e)},deep:!0,immediate:!0},filter:{async handler(e){var t;if(e)if(null!==(t=this.config)&&void 0!==t&&t.isFilterDataViaApi){if(this.filtered=await this.options(this.fdata,e),this.selected===this.filter){const e=Object(h["find"])(this.filtered,{label:this.filter});e&&this.$emit("onValue",e)}}else this.infiniteScroll.enabled&&(this.infiniteScroll.page=1),this.filtered=this.listData.filter(e=>this.isMatch(e.label,this.filter));else this.filtered=this.listData},immediate:!0}},methods:{onTTsetValueComponentEvent(e){"string"===typeof e&&(this.filter=e,this.selected=e,this.$emit("onValue",{label:e,value:e}))},isMatch(e,t){return e.match(new RegExp(t,"i"))},clearSelection(){this.filter="",this.selected=""},onKbValue(e,t=!0){t&&this.selected!==e&&(this.filter=e,this.selected=this.filter)},keypress(e){this.filter||(this.selected=""),this.filter=Object(a["a"])(e,this.selected),this.selected=this.filter},async pushData(e){if(this.infiniteScroll.enabled&&"function"===typeof this.infiniteScroll.handler){this.infiniteScroll.page++;const e=await this.infiniteScroll.handler(this.filter,this.infiniteScroll.page,this.infiniteScroll.limit);this.listData.push(...e)}e.target.complete()}}}),p=(i("347b"),i("6b0d")),b=i.n(p);const f=b()(u,[["__scopeId","data-v-f5aee92a"]]);t["default"]=f},"82d1":function(e,t,i){"use strict";i.r(t);var o=i("7a23");const n={style:{}};function a(e,t,i,a,l,s){const c=Object(o["resolveComponent"])("his-text-input"),r=Object(o["resolveComponent"])("ion-text"),d=Object(o["resolveComponent"])("ion-label"),h=Object(o["resolveComponent"])("ion-chip"),u=Object(o["resolveComponent"])("ion-col"),p=Object(o["resolveComponent"])("ion-row"),b=Object(o["resolveComponent"])("ion-item"),f=Object(o["resolveComponent"])("ion-list"),m=Object(o["resolveComponent"])("ion-checkbox"),O=Object(o["resolveComponent"])("his-keyboard"),y=Object(o["resolveComponent"])("ion-grid"),j=Object(o["resolveComponent"])("view-port");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(j,{showFull:!e.showKeyboard,style:{padding:"0",height:"82vh"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{value:e.selected,placeholder:"Search",onOnValue:e.onKBValue,onClick:e.keyboardStatus},null,8,["value","onOnValue","onClick"]),Object(o["createVNode"])(y,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,{size:"12"},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.checkedItems,(t,i)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:i},[Object(o["createVNode"])(h,{color:"danger",onClick:i=>e.uncheck(t)},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{class:"his-md-text"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])]))),128))]),_:1})]),_:1}),Object(o["createVNode"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,{size:"4"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,{style:{overflowY:"auto",height:"80vh",margin:0}},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.groupNames,(t,i)=>Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(b,{key:i,onClick:i=>e.getSpecificComplaints(t.value),detail:!0,color:e.ActiveCategory===t.label?"light":""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{class:"his-md-text"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","color"])),[[o["vShow"],t.other.display]])),128))]),_:1})]),_:1}),e.ActiveCategory?(Object(o["openBlock"])(),Object(o["createBlock"])(u,{key:0,style:{overflowY:"auto",height:"75vh"}},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",n,[Object(o["createVNode"])(f,{class:"view-port-content"},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.activeCategoryItems,(t,i)=>Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(b,{key:i,color:t.isChecked?"light":""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{class:"his-md-text"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.label),1)]),_:2},1024)]),_:2},1024),Object(o["createVNode"])(m,{slot:"end",modelValue:t.isChecked,"onUpdate:modelValue":e=>t.isChecked=e,onIonChange:i=>e.onselect(t,i),disabled:null===t||void 0===t?void 0:t.disabled},null,8,["modelValue","onUpdate:modelValue","onIonChange","disabled"])]),_:2},1032,["color"])),[[o["vShow"],t.other.display]])),128))]),_:1})])]),_:1})):Object(o["createCommentVNode"])("",!0),e.showKeyboard?(Object(o["openBlock"])(),Object(o["createBlock"])(O,{key:1,kbConfig:e.keyboard,onKeyPress:e.keypress},null,8,["kbConfig","onKeyPress"])):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1},8,["showFull"])])}i("14d9");var l=i("d867"),s=i("82a9"),c=i("331e"),r=i("2ef0"),d=i("db10"),h=Object(o["defineComponent"])({components:{IonCheckbox:l["k"],IonText:l["P"],IonChip:l["l"],HisKeyboard:d["a"]},name:"HisComplaintsPicker",mixins:[s["default"]],data:()=>({complaintsList:{},ActiveCategory:"",allComplainList:{},displayComplainList:{},groupNames:[],showKeyboard:!1,groupData:[]}),methods:{async init(){this.$emit("onFieldActivated",this);const e=await c["a"].getComplaintsList("Presenting complaint group");this.listData=this.mapListToOptions(e),this.groupData=e,this.groupNames=this.listData;for(const t in this.listData){const e=this.listData[t].label,i=await c["a"].getComplaintsList(e);this.allComplainList[e]=this.mapListToOptions(i,e)}this.$emit("onValue",this.getChecked(this.complaintsList))},clearValue(){for(const e in this.complaintsList)this.complaintsList[e]=this.complaintsList[e].map(e=>(e.isChecked=!1,e))},async onselect(e,t){this.$nextTick(async()=>{const i={...e};if(i.isChecked=t.target.checked,this.onValue&&i.isChecked){const e=await this.onValue(i);if(!e)return t.target.checked=!1}this.onValueUpdate&&(this.complaintsList=await this.onValueUpdate({...this.complaintsList},i)),this.$emit("onValue",this.getChecked(this.complaintsList))})},async onKBValue(e){if(""!=e){for(const e in this.groupNames)this.groupNames[e].other["display"]=!1;for(const t in this.listData){let i="";const o=this.listData[t].label,n=[],a=this.allComplainList[o];for(const t in a){const l=a[t].label;l.toLowerCase().match(e.toLowerCase())&&o?(a[t].other["display"]=!0,n.push(a[t]),i=o,this.ActiveCategory=o):(a[t].other["display"]=!1,n.push(a[t]))}if(""!=i)for(const e in this.groupNames)this.groupNames[e].label==o&&(this.groupNames[e].other["display"]=!0);this.allComplainList[o]=n}this.complaintsList[this.ActiveCategory]=this.allComplainList[this.ActiveCategory]}else{for(const e in this.listData){const t=this.listData[e].label,i=[],o=this.allComplainList[t];for(const e in o)o[e].other["display"]=!0,i.push(o[e]);this.allComplainList[t]=i}this.groupNames=this.mapListToOptions(this.groupData),console.log(this.groupNames),this.ActiveCategory=""}},keyboardStatus(){this.showKeyboard=!this.showKeyboard},async getSpecificComplaints(e){e in this.complaintsList||(this.complaintsList[e]=this.allComplainList[e]),this.ActiveCategory=e},mapListToOptions(e,t=""){if(Object(r["isEmpty"])(e))return[];const i={display:!0};return e.map(e=>{const o={label:e.name,value:e.name,isChecked:!1,other:{...e,...i}};return t&&(o.other.parent=t),o})},uncheck(e){this.complaintsList[e.other.parent].forEach(t=>{t.label===e.label&&(t.isChecked=!1)})},getChecked(e){const t=[];for(const i in e)t.push(...e[i].filter(e=>e.isChecked));return t}},computed:{checkedItems(){return this.getChecked(this.complaintsList)},activeCategoryItems(){return this.complaintsList[this.ActiveCategory]}},mounted(){this.init()},activated(){this.init()}}),u=(i("7f29"),i("6b0d")),p=i.n(u);const b=p()(h,[["render",a],["__scopeId","data-v-b7ba7008"]]);t["default"]=b},"86f4":function(e,t,i){"use strict";i("4910")},cd67:function(e,t,i){},db10:function(e,t,i){"use strict";var o=i("7a23");const n={class:"his-floating-keyboard"},a={class:"his-floating-keyboard-content"};function l(e,t,i,l,s,c){const r=Object(o["resolveComponent"])("base-keyboard");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[Object(o["createElementVNode"])("div",a,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.activeLayout,(t,i)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:i},[Object(o["createVNode"])(r,{layout:t,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])]))),128))])])}var s=i("6be2"),c=i("c924"),r=Object(o["defineComponent"])({components:{BaseKeyboard:c["a"]},props:{initalKeyboardName:{type:String},kbConfig:{type:Array,required:!0},onKeyPress:{type:Function,required:!0}},data:()=>({activeLayout:{}}),watch:{initalKeyboardName:{handler(e){e&&this.$nextTick(()=>this.switchKeyboard(e))},immediate:!0},kbConfig:{handler(e){e&&(this.activeLayout=e)},deep:!0,immediate:!0}},methods:{keypress(e){this.isFunctionKey(e)||this.onKeyPress(e)},isFunctionKey(e){return!!this.switchKeyboard(e)},switchKeyboard(e){const t=s["a"].map(e=>e.btn).indexOf(e);return t>=0&&(this.activeLayout=s["a"][t].keyboard,!0)}}}),d=i("6b0d"),h=i.n(d);const u=h()(r,[["render",l]]);t["a"]=u}}]);
//# sourceMappingURL=TouchFormElement21.9fc03d70.js.map