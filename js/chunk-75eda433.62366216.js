(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75eda433","TouchFormElement38"],{"04a0":function(e,t,o){},"0a79":function(e,t,o){"use strict";var c=o("7a23");function n(e,t,o,n,a,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{id:"view-port",class:Object(c["normalizeClass"])(e.showFull?"":"half")},[Object(c["renderSlot"])(e.$slots,"default",{},void 0,!0)],2)}var a=Object(c["defineComponent"])({name:"ViewPort",props:{showFull:{type:Boolean,default:()=>!0}}}),r=(o("a4d3"),o("d959")),l=o.n(r);const s=l()(a,[["render",n],["__scopeId","data-v-7c293cad"]]);t["a"]=s},3286:function(e,t,o){"use strict";o.r(t);var c=o("7a23");function n(e,t,o,n,a,r){const l=Object(c["resolveComponent"])("ion-title"),s=Object(c["resolveComponent"])("ion-toolbar"),d=Object(c["resolveComponent"])("ion-header"),u=Object(c["resolveComponent"])("ion-label"),i=Object(c["resolveComponent"])("ion-item"),b=Object(c["resolveComponent"])("ion-list"),j=Object(c["resolveComponent"])("ion-col"),O=Object(c["resolveComponent"])("report-data-table"),p=Object(c["resolveComponent"])("ion-row"),g=Object(c["resolveComponent"])("ion-grid"),m=Object(c["resolveComponent"])("view-port"),v=Object(c["resolveComponent"])("ion-content"),C=Object(c["resolveComponent"])("ion-button"),f=Object(c["resolveComponent"])("ion-footer"),h=Object(c["resolveComponent"])("ion-page");return Object(c["openBlock"])(),Object(c["createBlock"])(h,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(d,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(s,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(l,{class:"his-lg-text"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(" Drug Set ")]),_:1})]),_:1})]),_:1}),Object(c["createVNode"])(v,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(m,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(g,{style:{"background-color":"white"},class:"view-port-content"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(p,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{size:"4"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(b,null,{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.drugSets,(t,o)=>(Object(c["openBlock"])(),Object(c["createBlock"])(i,{class:"his-sm-text",button:"",detail:"",color:e.selectedDrugSet.id===t.id?"lightblue":"",onClick:o=>e.selectedDrugSet=t,key:o},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(u,null,{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.name),1)]),_:2},1024)]),_:2},1032,["color","onClick"]))),128))]),_:1})]),_:1}),Object(c["createVNode"])(j,{size:"8"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{columns:e.drugSetColumns,rows:e.drugSetRows,config:{tableCssTheme:"art-report-theme"}},null,8,["columns","rows"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),Object(c["createVNode"])(f,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(s,{color:"dark"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(C,{onClick:e.cancel,slot:"start",color:"danger",size:"large"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(" Cancel ")]),_:1},8,["onClick"]),e.hasSelectedDrugSet?(Object(c["openBlock"])(),Object(c["createBlock"])(C,{key:0,onClick:e.voidDrugset,slot:"end",color:"danger",size:"large"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(" Void Drug Set ")]),_:1},8,["onClick"])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(C,{onClick:e.addDrugset,slot:"end",color:"success",size:"large"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(" Add Drug Set ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}o("14d9");var a=o("0a79"),r=o("80e3"),l=o("9ceb"),s=o("d867"),d=o("c84b"),u=o("2ef0"),i=o("6605"),b=o("b5e4"),j=Object(c["defineComponent"])({components:{IonPage:s["D"],ReportDataTable:r["a"],IonList:s["y"],IonItem:s["w"],IonLabel:s["x"],ViewPort:a["a"],IonButton:s["d"],IonContent:s["n"],IonHeader:s["q"],IonGrid:s["p"],IonRow:s["H"],IonCol:s["m"],IonTitle:s["R"],IonFooter:s["o"],IonToolbar:s["S"]},setup(){const e=Object(i["i"])(),t=Object(c["ref"])({}),o=Object(c["ref"])([]),n=[[l["a"].thTxt("Drug"),l["a"].thTxt("Duration in days"),l["a"].thTxt("Frequency")]],a=Object(c["computed"])(()=>!Object(u["isEmpty"])(o.value)),r=Object(c["computed"])(()=>{var e,o;return(null===(e=t.value)||void 0===e||null===(o=e.drugs)||void 0===o?void 0:o.map(e=>[l["a"].td(e["drug_name"]||"N/A"),l["a"].td(e.duration||"N/A"),l["a"].td(e.frequency)]))||[]});function s(){e.back()}function j(){e.push({name:"add anc drugset"})}async function O(){if(await Object(b["a"])("Are you sure you want to void this drug set?"))try{await d["a"].voidDrugSet(t.value.id||-1),o.value=o.value.filter(e=>e.id!=t.value.id),Object(u["isEmpty"])(o.value)?t.value={}:t.value=o.value[0]}catch(e){Object(b["e"])("e")}}return Object(c["onMounted"])(async()=>{o.value=await d["a"].getDrugSets(),Object(u["isEmpty"])(o.value)||(t.value=o.value[0])}),{cancel:s,addDrugset:j,voidDrugset:O,drugSets:o,hasSelectedDrugSet:a,selectedDrugSet:t,drugSetColumns:n,drugSetRows:r}}}),O=(o("5271"),o("d959")),p=o.n(O);const g=p()(j,[["render",n],["__scopeId","data-v-31e11cd2"]]);t["default"]=g},5271:function(e,t,o){"use strict";o("9b6e")},"9b6e":function(e,t,o){},a4d3:function(e,t,o){"use strict";o("04a0")},c84b:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));o("13d5"),o("14d9");var c=o("1c74");class n extends c["e"]{static saveDrugSet(e){const t={...e};return t["datetime"]=c["e"].getSessionDate(),this.postJson("/drug_sets",e)}static voidDrugSet(e){return this.void("/drug_sets/"+e,{date:this.getSessionDate()})}static async getDrugSets(){const e=await this.getJson("drug_sets");return e?Object.keys(e["set_names"]).reduce((t,o)=>{const c=e["set_names"][o],n=e["set_descriptions"][o],a=e["drug_sets"][o];return t.push({id:parseInt(o),name:c,description:n,drugs:Object.keys(a).reduce((e,t)=>[...e,{id:parseInt(t),...a[t],drug_name:a[t].drug_name,duration:parseInt(a[t].duration),frequency:a[t].frequency,units:a[t].units}],[])}),t},[]):[]}}}}]);
//# sourceMappingURL=chunk-75eda433.62366216.js.map