(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0880b52c"],{"123f":function(e,t,o){"use strict";o("2f7b")},"1b7f":function(e,t,o){},"1d25":function(e,t,o){"use strict";o("8dd4")},"2f7b":function(e,t,o){},"349d":function(e,t,o){"use strict";o("1b7f")},"74a7":function(e,t,o){"use strict";o("dc83")},"7e95":function(e,t,o){"use strict";o.r(t);var n=o("7a23");const a=e=>(Object(n["pushScopeId"])("data-v-5550e750"),e=e(),Object(n["popScopeId"])(),e),c={style:{width:"97.8%",margin:"auto"}},r={id:"cummulative",class:"cummulative_hight",style:{border:"1px solid #999","border-bottom":"none","background-color":"#f6f2ca",height:"25vh",overflow:"auto",padding:"5px"}},i={style:{width:"100%"}},l=a(()=>Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th",null,"Drug"),Object(n["createElementVNode"])("th",null,"Frequency"),Object(n["createElementVNode"])("th",null,"Dosage"),Object(n["createElementVNode"])("th",null,"Duration"),Object(n["createElementVNode"])("th")])],-1)),s={class:"dosage-input"},d={class:"dosage-input"},u={class:"dosage-input"},b={class:"dosage-input"},h=["onClick"],m={key:2,class:"content"};function p(e,t,o,a,p,O){const j=Object(n["resolveComponent"])("ion-input"),g=Object(n["resolveComponent"])("ion-icon"),f=Object(n["resolveComponent"])("ion-button"),v=Object(n["resolveComponent"])("his-text-input"),y=Object(n["resolveComponent"])("ion-text"),C=Object(n["resolveComponent"])("ion-label"),k=Object(n["resolveComponent"])("ion-checkbox"),I=Object(n["resolveComponent"])("ion-item"),N=Object(n["resolveComponent"])("ion-list"),V=Object(n["resolveComponent"])("ion-infinite-scroll-content"),x=Object(n["resolveComponent"])("ion-infinite-scroll"),D=Object(n["resolveComponent"])("ion-content"),w=Object(n["resolveComponent"])("view-port"),_=Object(n["resolveComponent"])("his-keyboard"),E=Object(n["resolveComponent"])("prescription-frequency"),S=Object(n["resolveComponent"])("prescription-keypad"),B=Object(n["resolveComponent"])("ion-toolbar"),T=Object(n["resolveComponent"])("ion-footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("table",i,[l,Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.checkedItems,(t,o)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:o},[Object(n["createElementVNode"])("td",s,[Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(t.label),1)]),Object(n["createElementVNode"])("td",d,[Object(n["createVNode"])(j,{readonly:"",placeholder:"Add frequency..",value:t.other.frequency},null,8,["value"])]),Object(n["createElementVNode"])("td",u,[Object(n["createVNode"])(j,{readonly:"",placeholder:"Add dosage..",value:t.other.dosage},null,8,["value"])]),Object(n["createElementVNode"])("td",b,[Object(n["createVNode"])(j,{readonly:"",placeholder:"Add duration..",value:t.other.duration},null,8,["value"])]),Object(n["createElementVNode"])("td",{class:"dosage-input",onClick:o=>e.unCheck(t)},[Object(n["createVNode"])(f,{color:"danger"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(g,{icon:e.trash},null,8,["icon"])]),_:1})],8,h)]))),128))])])])]),e.switchKeyboard?(Object(n["openBlock"])(),Object(n["createBlock"])(w,{key:0,style:{"margin-top":"0px",height:"37vh"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(v,{value:e.selected,onOnValue:e.onKBValue},null,8,["value","onOnValue"]),Object(n["createVNode"])(D,{style:{width:"100%"},class:"ion-padding-bottom"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])(["ion-content-scroll-host",{"ion-margin-bottom ion-padding-bottom":e.disableScroll}])},[Object(n["createVNode"])(N,{class:Object(n["normalizeClass"])(["view-port-content",{"ion-margin-bottom":e.disableScroll}])},{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.listData,(t,o)=>(Object(n["openBlock"])(),Object(n["createBlock"])(I,{key:o,color:t.isChecked?"lightblue":"",lines:t.isChecked?"none":""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])(()=>{var e;return[Object(n["createVNode"])(y,{class:"his-md-text"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.label),1)]),_:2},1024),t.description&&t.isChecked?(Object(n["openBlock"])(),Object(n["createBlock"])(y,{key:0,color:null===(e=t.description)||void 0===e?void 0:e.color},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("p",null,[Object(n["createElementVNode"])("i",null,Object(n["toDisplayString"])(t.description.text),1)])]),_:2},1032,["color"])):Object(n["createCommentVNode"])("",!0)]}),_:2},1024),Object(n["createVNode"])(k,{slot:"start",modelValue:t.isChecked,"onUpdate:modelValue":e=>t.isChecked=e,onIonChange:o=>e.onSelect(t,o),disabled:t.disabled},null,8,["modelValue","onUpdate:modelValue","onIonChange","disabled"])]),_:2},1032,["color","lines"]))),128))]),_:1},8,["class"]),Object(n["createVNode"])(x,{onIonInfinite:t[0]||(t[0]=t=>e.pushData(t)),threshold:"100px",disabled:e.disableScroll},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(V,{"loading-spinner":"crescent","loading-text":"Loading more data..."})]),_:1},8,["disabled"])],2)]),_:1})]),_:1})):Object(n["createCommentVNode"])("",!0),e.switchKeyboard?(Object(n["openBlock"])(),Object(n["createBlock"])(_,{key:1,kbConfig:e.keyboard,onKeyPress:e.keypress},null,8,["kbConfig","onKeyPress"])):Object(n["createCommentVNode"])("",!0),e.switchKeyboard?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",m,[Object(n["createVNode"])(E,{list:e.list,onFrequencyKeypress:t[1]||(t[1]=t=>e.label=t),onClick:t[2]||(t[2]=t=>e.frequencyKeypress())},null,8,["list"]),Object(n["createVNode"])(S,{onKeyPress:e.dosageKeypress,title:"Dosage",onClick:e.isComplete},null,8,["onKeyPress","onClick"]),Object(n["createVNode"])(S,{onKeyPress:e.durationKeypress,title:"Duration",onClick:e.isComplete},null,8,["onKeyPress","onClick"])]))]),Object(n["createVNode"])(T,{style:{position:"absolute",bottom:"0"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(B,{color:"dark"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,{"router-link":e.cancelDestination,slot:"start",size:"large",color:"danger"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Cancel ")]),_:1},8,["router-link"]),e.switchKeyboard?(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:0,onClick:e.predefinedMalariaDrug,slot:"end",size:"large",color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Predefined Malaria Drugs ")]),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0),e.switchKeyboard?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:1,onClick:t[3]||(t[3]=t=>e.durationKeypress("Confirm")),slot:"end",size:"large",color:"success"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Add Drug ")]),_:1})),Object(n["createVNode"])(f,{onClick:e.clearPrescription,slot:"end",size:"large",color:"warning"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Clear ")]),_:1},8,["onClick"]),Object(n["createVNode"])(f,{disabled:e.disableNextBtn,onClick:e.savePrescription,slot:"end",size:"large",color:"success"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Finish ")]),_:1},8,["disabled","onClick"])]),_:1})]),_:1})],64)}o("14d9"),o("3c65");var O=o("6be2"),j=o("0a79"),g=o("2345"),f=o("36ad");function v(e,t,o,a,c,r){const i=Object(n["resolveComponent"])("ion-title"),l=Object(n["resolveComponent"])("ion-toolbar"),s=Object(n["resolveComponent"])("ion-header"),d=Object(n["resolveComponent"])("ion-label"),u=Object(n["resolveComponent"])("ion-item"),b=Object(n["resolveComponent"])("ion-list"),h=Object(n["resolveComponent"])("ion-content"),m=Object(n["resolveComponent"])("ion-button"),p=Object(n["resolveComponent"])("ion-footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(s,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(i,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("Select Malaria Drugs")]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(h,{style:{overflowY:"hidden",background:"grey"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{class:"view-port-content"},{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.items,(o,a)=>(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:a,class:"items"},{default:Object(n["withCtx"])(()=>{var a;return[Object(n["createVNode"])(d,{class:Object(n["normalizeClass"])(null!==o&&void 0!==o&&null!==(a=o.other)&&void 0!==a&&a.wrapTxt?"ion-text-wrap":""),innerHTML:o.label,onClick:[e.submitData,t[0]||(t[0]=t=>e.closeModal("later"))],value:o.value},null,8,["class","innerHTML","onClick","value"])]}),_:2},1024))),128))]),_:1})]),_:1}),Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(m,{slot:"start",color:"danger",size:"large",onClick:t[1]||(t[1]=t=>e.closeModal("later"))},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Cancel ")]),_:1})]),_:1})]),_:1})],64)}var y=o("d867"),C=Object(n["defineComponent"])({name:"Modal",props:{items:{type:Object,required:!0},submitData:{type:Function}},async created(){console.log("created modal")},methods:{async closeModal(e){await y["modalController"].dismiss(e)}},data(){return{content:"Content",artStartDate:"",monthsOnART:"",lastOrder:"",currentRegimen:"",regimenStartDate:""}},components:{IonHeader:y["IonHeader"],IonToolbar:y["IonToolbar"],IonTitle:y["IonTitle"],IonContent:y["IonContent"],IonFooter:y["IonFooter"],IonButton:y["IonButton"]}}),k=(o("74a7"),o("6b0d")),I=o.n(k);const N=I()(C,[["render",v],["__scopeId","data-v-4296b308"]]);var V=N,x=o("51c8"),D=o("db10"),w=o("ff79");const _={class:"freq-content"};function E(e,t,o,a,c,r){const i=Object(n["resolveComponent"])("snap"),l=Object(n["resolveComponent"])("center"),s=Object(n["resolveComponent"])("ion-radio"),d=Object(n["resolveComponent"])("ion-label"),u=Object(n["resolveComponent"])("ion-item"),b=Object(n["resolveComponent"])("ion-radio-group"),h=Object(n["resolveComponent"])("ion-list");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",_,[Object(n["createVNode"])(l,{style:{"padding-top":"12px"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(i,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Frequency ")]),_:1})]),_:1}),Object(n["createVNode"])(h,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{value:e.activeLabel},{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.list,(t,o)=>(Object(n["openBlock"])(),Object(n["createBlock"])(u,{class:"his-md-text",key:o,onClick:o=>e.frequencyKeypress(t)},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,{slot:"start",value:t},null,8,["value"]),Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1},8,["value"])]),_:1})])}var S=Object(n["defineComponent"])({components:{IonList:y["IonList"],IonItem:y["IonItem"],IonRadio:y["IonRadio"],IonRadioGroup:y["IonRadioGroup"]},data:()=>({activeLabel:""}),props:{list:{type:Object,required:!0},label:String},methods:{async frequencyKeypress(e){this.$emit("frequencyKeypress",e)}}});o("1d25");const B=I()(S,[["render",E],["__scopeId","data-v-c96516f6"]]);var T=B;const A={class:"keypad"};function K(e,t,o,a,c,r){const i=Object(n["resolveComponent"])("snap"),l=Object(n["resolveComponent"])("ion-input"),s=Object(n["resolveComponent"])("base-keyboard");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",A,[Object(n["createVNode"])(i,{class:"ion-text-center"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title),1)]),_:1}),Object(n["createVNode"])(l,{value:e.value,style:{"text-align":"center",border:"solid 1px #b7b7b7","margin-top":"12px","margin-bottom":"12px"}},null,8,["value"]),Object(n["createVNode"])(s,{btnSize:"8.5vw",layout:e.keypad,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])])}var M=o("c924"),q=o("3800"),L=Object(n["defineComponent"])({components:{BaseKeyboard:M["a"]},props:{title:{type:String},preset:{type:String},onKeyPress:{type:Function,required:!0},strictNumbers:{type:Boolean,default:!1}},data:()=>({value:"",keypad:q["l"]}),watch:{preset:{handler(e){e&&(this.value=e.toString())},immediate:!0}},methods:{async keypress(e){if(this.strictNumbers){if(e.includes(".")&&this.value.includes("."))return;e.includes(".")||"0"!==this.value||(this.value=""),this.value=Object(g["a"])(e,this.value),this.value||(this.value=""),""+parseInt(this.value)===this.value?this.onKeyPress(parseInt(this.value)):this.onKeyPress(this.value)}else this.value=Object(g["a"])(e,this.value),this.onKeyPress(this.value)}}});o("349d");const P=I()(L,[["render",K],["__scopeId","data-v-89df07b8"]]);var F=P,H=o("ade3"),Q=o("cc6f"),R=o("71c3"),z=o("9b7c"),$=o("76f1");const Y=[{label:"ONCE A DAY (OD)",code:"OD",value:1},{label:"TWICE A DAY (BD)",code:"BD",value:2},{label:"THREE TIMES A DAY (TDS)",code:"TDS",value:3},{label:"FOUR TIMES A DAY (QID)",code:"QID",value:4},{label:"FIVE TIMES A DAY (5X/D)",code:"5X/D",value:5},{label:"SIX TIMES A DAY (Q4HRS)",code:"Q4HRS",value:6},{label:"IN THE MORNING (QAM)",code:"QAM",value:1},{label:"ONCE A DAY AT NOON (QNOON)",code:"QNOON",value:1},{label:"IN THE EVENING (QPM)",code:"QPM",value:1},{label:"ONCE A DAY AT NIGHT (QHS)",code:"QHS",value:1},{label:"EVERY OTHER DAY (QOD)",code:"QOD",value:.5},{label:"ONCE A WEEK (QWK)",code:"QWK",value:.14},{label:"ONCE A MONTH",code:"ONCE A MONTH",value:.03},{label:"TWICE A MONTH",code:"TWICE A MONTH",value:.071},{label:"Unknown",code:"Unknown",value:0}],U=[{drug_id:236,duration:3,tabs:6,name:"Lumefantrine + Arthemether 1 x 6",dose_strength:1,units:"tabs",frequency:2},{drug_id:237,duration:3,tabs:12,name:"Lumefantrine + Arthemether 2 x 6",dose_strength:2,units:"tabs",frequency:2},{drug_id:238,duration:3,tabs:18,name:"Lumefantrine + Arthemether 3 x 6",dose_strength:3,units:"tabs",frequency:2},{drug_id:239,duration:3,tabs:24,name:"Lumefantrine + Arthemether 4 x 6",dose_strength:4,units:"tabs",frequency:2},{drug_id:311,duration:1,tabs:1,name:"SP (525mg tablet)",dose_strength:1,units:"tabs",frequency:.03},{drug_id:1218,duration:1,tabs:1,name:"Artesunate injenction",dose_strength:1,units:"ml",frequency:1},{drug_id:1219,duration:3,tabs:3,name:"ASAQ 25mg/67.5mg (3 tablets)",dose_strength:1,units:"mg",frequency:1},{drug_id:1220,duration:3,tabs:3,name:"ASAQ 50mg/135mg (3 tablets)",dose_strength:1,units:"mg",frequency:1},{drug_id:1221,duration:3,tabs:3,name:"ASAQ 100mg/270mg (3 tablets)",dose_strength:1,units:"mg",frequency:1},{drug_id:1222,duration:3,tabs:6,name:"ASAQ 100mg/270mg (6 tablets)",dose_strength:2,units:"mg",frequency:1}];class W extends Q["a"]{constructor(e,t){super(e,25,t)}async loadDrugs(e="",t=1,o=10){const n=await $["a"].getDrugs({name:e,page:t,page_size:o,concept_set:"OPD Medication"});return n.map(e=>({label:e.name,value:e.name,other:e}))}async getDrugs(e="",t=1,o=10){const n=await $["a"].getDrugs({name:e,page:t,page_size:o,concept_set:"OPD Medication"});return n.map(e=>({label:e.name,value:e.name,other:e}))}async hasMalaria(){const e=await z["a"].getLatestMalariaTestResult(this.patientID);if("No"===e){const e=await Q["a"].getAllValueCoded(this.patientID,"Primary diagnosis");if(e.includes("Malaria"))return!0;const t=await Q["a"].getAllValueCoded(this.patientID,"Secondary diagnosis");return!!t.includes("Malaria")}return"Positive"===e}createDrugOrder(e){return R["a"].create({encounter_id:this.encounterID,drug_orders:e})}}Object(H["a"])(W,"getDrugs",void 0);var G=o("7365"),X=o("0fa1"),J=o("b5e4"),Z=o("9283"),ee=o("4db7"),te=Object(n["defineComponent"])({name:"HisInfiniteScrollMultipleSelect",mixins:[x["default"],G["a"]],components:{PrescriptionKeypad:F,IonCheckbox:y["IonCheckbox"],IonText:y["IonText"],IonButton:y["IonButton"],ViewPort:j["a"],HisTextInput:f["default"],IonContent:y["IonContent"],IonList:y["IonList"],IonItem:y["IonItem"],IonLabel:y["IonLabel"],HisKeyboard:D["a"],IonInfiniteScroll:y["IonInfiniteScroll"],IonInfiniteScrollContent:y["IonInfiniteScrollContent"],IonFooter:y["IonFooter"],IonToolbar:y["IonToolbar"],PrescriptionFrequency:T},data:()=>({switchKeyboard:!0,keyboard:O["h"],listData:[],checkedItems:[],disableScroll:!1,filter2:"",selected:"",selectedItems:[],malariaDrug:[],prescriptionService:{},label:String,page:1,limit:10,trash:w["trash"],list:Y.map(e=>e.label),showMalariaDrugs:!1,hasMalaria:!1,disableNextBtn:!0,confirmBtn:!1}),watch:{checkedItems:{handler(e){this.listData.forEach(t=>{e.find(e=>e.value===t.value)?t.isChecked=!0:t.isChecked=!1}),this.$emit("onValue",e)},deep:!0,immediate:!0},filter2:{async handler(){this.page=1,this.disableScroll=!1;const e=await this.getListData();[...this.checkedItems].forEach(t=>{const o=e.findIndex(e=>e.value===t.value);-1===o?e.push(t):e[o].isChecked=!0}),this.listData=e}}},mounted(){this.init()},activated(){this.init()},methods:{async init(){this.listData=await this.getListData()},async getListData(){return this.prescriptionService=new W(this.patientID,this.providerID),await this.prescriptionService.loadDrugs(this.filter2,this.page,this.limit)},async dosageKeypress(e){this.checkedItems[0].other["dosage"]=e},async frequencyKeypress(){this.checkedItems[0].other["frequency"]=this.label},async durationKeypress(e){e.match(/Confirm/i)?(this.confirmBtn=!0,this.inputFieldType()):this.checkedItems[0].other["duration"]=e},async keypress(e){this.filter2||(this.selected=""),this.filter2=Object(g["a"])(e,this.selected),this.selected=this.filter2},async onKBValue(e){this.listData&&this.selected!==e&&(this.filter2=e,this.selected=this.filter2)},async pushData(e){this.page++;const t=await this.getListData();t.length>0?this.listData=[...this.listData,...t.filter(e=>!this.listData.find(t=>t.value===e.value))]:this.disableScroll=!0,e.target.complete()},isComplete(){const e=this.checkedItems[0];return e.other["frequency"]&&e.other["duration"]&&e.other["dosage"]?(this.confirmBtn=!1,this.disableNextBtn=!1,!0):(this.disableNextBtn=!0,this.confirmBtn&&(Object(J["e"])("complete prescription details for "+e.label),this.confirmBtn=!1),!1)},inputFieldType(){return!this.switchKeyboard&&this.isComplete()?(this.switchKeyboard=!0,!0):(this.switchKeyboard=!1,!1)},async predefinedMalariaDrug(){if(this.hasMalaria=await this.prescriptionService.hasMalaria(),!this.hasMalaria&&!await Object(J["a"])("Patient has no malaria. Do you still want to prescribe anti malaria drugs?"))return;const e=await y["modalController"].create({component:V,backdropDismiss:!1,cssClass:"lager-modal",componentProps:{items:U.map(e=>({label:`${e.name}, ${e.frequency} time(s) a day, for ${e.duration} days`,value:[e.name,e.frequency,e.duration,e.dose_strength,e.units,e.drug_id],other:e})),submitData:async e=>{const t=e.target.attributes.value.nodeValue.split(","),o=Y.find(e=>e.value==t[1]),n={isChecked:!0,label:t[0],other:{frequency:o.label,units:t[4],drug_id:t[5],duration:t[2],dosage:t[3]},value:t[0]},a=["Lumefantrine + Arthemether 1 x 6","Lumefantrine + Arthemether 2 x 6","Lumefantrine + Arthemether 3 x 6","Lumefantrine + Arthemether 4 x 6"];a.includes(t[0])&&(this.checkedItems=this.checkedItems.filter(e=>!a.includes(e.value))),this.checkedItems.unshift(n),this.isComplete()&&(this.disableNextBtn=!1)}}});e.present()},onSelect(e,t){this.$nextTick(async()=>{e.isChecked?-1===this.checkedItems.findIndex(t=>t.value===e.value)&&(this.checkedItems.unshift(e),this.selected="",this.inputFieldType(),this.isComplete()):this.unCheck(e)})},unCheck(e){1==this.checkedItems.length&&(this.disableNextBtn=!0,this.switchKeyboard=!0),this.checkedItems=this.checkedItems.filter(t=>t.value!==e.value)},clearPrescription(){this.selected=""},async savePrescription(){try{const e=this.mapToOrders(),t=await this.prescriptionService.createEncounter();if(!t)return Object(J["e"])("Unable to create treatment encounter");const o=await this.prescriptionService.createDrugOrder(e);if(!o)return Object(J["e"])("Unable to create drug orders!");Object(J["d"])("Drug order has been created"),this.printVisitSummary(),Object(X["b"])(this.patientID,this.$router)}catch(e){console.error(e)}},mapToOrders(){return this.checkedItems.map(e=>{const t=W.getSessionDate(),o=Y.find(t=>t.label===e.other.frequency);return{drug_inventory_id:e.other.drug_id,equivalent_daily_dose:"Unknown"==e.other.dosage?0:e.other.dosage*o.value,start_date:t,auto_expire_date:this.calculateExpireDate(t,e.other.duration),units:e.other.units,instructions:`${e.label}: ${e.other.dosage} ${e.other.units} ${o.code} for ${e.other.duration} days`,dose:e.other.dosage,frequency:o.code}})},calculateExpireDate(e,t){const o=new Date(e);return o.setDate(o.getDate()+parseInt(t)),Z["c"].toStandardHisFormat(o)},printVisitSummary(){const e=new ee["a"](this.patientID);return e.printVisitSummaryLbl(W.getSessionDate())}},created(){this.keyboard=O["h"],this.page=1,this.limit=10}});o("123f");const oe=I()(te,[["render",p],["__scopeId","data-v-5550e750"]]);t["default"]=oe},"8dd4":function(e,t,o){},dc83:function(e,t,o){}}]);
//# sourceMappingURL=chunk-0880b52c.76b861b9.js.map