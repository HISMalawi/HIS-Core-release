(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d411be7"],{"42e2":function(e,t,o){},"857e":function(e,t,o){"use strict";o.r(t);var a=o("7a23");const r={class:"his-card"};function c(e,t,o,c,i,n){const l=Object(a["resolveComponent"])("ion-title"),s=Object(a["resolveComponent"])("ion-toolbar"),u=Object(a["resolveComponent"])("barcode-input"),b=Object(a["resolveComponent"])("ion-header"),d=Object(a["resolveComponent"])("ion-label"),p=Object(a["resolveComponent"])("ion-item"),O=Object(a["resolveComponent"])("ion-col"),j=Object(a["resolveComponent"])("ion-text"),v=Object(a["resolveComponent"])("ion-row"),x=Object(a["resolveComponent"])("ion-grid"),N=Object(a["resolveComponent"])("ion-content"),y=Object(a["resolveComponent"])("ion-button"),f=Object(a["resolveComponent"])("ion-footer"),h=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createBlock"])(h,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{color:"light"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(l,{class:"ion-text-center his-md-text"},{default:Object(a["withCtx"])(()=>{var t;return[Object(a["createElementVNode"])("b",null,Object(a["toDisplayString"])((null===(t=e.kits[e.activeIndex])||void 0===t?void 0:t.kitName)||"-"),1)]}),_:1})]),_:1}),Object(a["createVNode"])(s,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,{style:{margin:"0px auto",width:"90%"},onOnScan:e.onScan},null,8,["onOnScan"])]),_:1})]),_:1}),Object(a["createVNode"])(N,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(x,null,{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.kits,(t,o)=>(Object(a["openBlock"])(),Object(a["createBlock"])(v,{onClick:()=>e.activeIndex=o,class:Object(a["normalizeClass"])(e.activeIndex===o?"his-card active":""),key:o},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(O,{size:"4"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",r,[Object(a["createVNode"])(p,{lines:"none"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,null,{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" Kit name ")]),_:1}),Object(a["createVNode"])(d,{slot:"end"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("b",null,Object(a["toDisplayString"])(t.kitName),1)]),_:2},1024)]),_:2},1024)])]),_:2},1024),Object(a["createVNode"])(O,{size:"4"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["his-card",t.expiryDate&&!t.lotNo?"error":""])},[Object(a["createVNode"])(p,{onClick:t=>e.updateLot(o),lines:"none"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,null,{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" Lot No. ")]),_:1}),Object(a["createVNode"])(d,{slot:"end"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("b",null,Object(a["toDisplayString"])(t.lotNo),1)]),_:2},1024)]),_:2},1032,["onClick"])],2)]),_:2},1024),Object(a["createVNode"])(O,{size:"4"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["his-card",!t.expiryDate&&t.lotNo?"error":""])},[Object(a["createVNode"])(p,{onClick:t=>e.updateExpiryDate(o),lines:"none"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,null,{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" Expiry Date ")]),_:1}),Object(a["createVNode"])(d,{color:t.expiryDateError?"danger":"",slot:"end"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("b",null,Object(a["toDisplayString"])(t.expiryDate),1)]),_:2},1032,["color"])]),_:2},1032,["onClick"]),t.expiryDateError?(Object(a["openBlock"])(),Object(a["createBlock"])(j,{key:0,color:"danger",class:"ion-text-center"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.expiryDateError),1)]),_:2},1024)):Object(a["createCommentVNode"])("",!0)],2)]),_:2},1024)]),_:2},1032,["onClick","class"]))),128))]),_:1})]),_:1}),Object(a["createVNode"])(f,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{color:"light"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(y,{onClick:e.clear,slot:"end",color:"warning",size:"large"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" Clear ")]),_:1},8,["onClick"]),Object(a["createVNode"])(y,{onClick:e.save,disabled:!e.canFinish||e.hasErrors,slot:"end",color:"success",size:"large"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" Finish ")]),_:1},8,["onClick","disabled"])]),_:1})]),_:1})]),_:1})}var i=o("d867"),n=o("efaf"),l=o("c731"),s=o("d95e"),u=o("b5e4"),b=o("afbc"),d=o("cd10"),p=o("1c74"),O=Object(a["defineComponent"])({components:{IonGrid:i["p"],IonCol:i["m"],IonRow:i["H"],IonPage:i["D"],IonTitle:i["R"],IonHeader:i["q"],IonToolbar:i["S"],IonContent:i["n"],IonFooter:i["o"],IonButton:i["d"],BarcodeInput:n["a"],IonItem:i["w"],IonLabel:i["x"],IonText:i["O"]},setup(){const{kits:e,initKits:t,saveKits:o}=Object(d["b"])(),r=Object(a["ref"])(),c=Object(a["ref"])(!1),i=Object(a["computed"])(()=>e.value.some(t=>!t.lotNo&&t.expiryDate||!t.expiryDate&&t.lotNo||e.value.some(e=>e.expiryDateError))),n=()=>{e.value.forEach(e=>(e.expiryDate&&new Date(e.expiryDate)<=new Date(p["e"].getSessionDate())?e.expiryDateError="Kit has expired!!":e.expiryDateError="",e))};function O(t){Object(l["b"])({id:"lot",helpText:e.value[t].kitName+" Lot No.",type:s["b"].TT_TEXT,defaultValue:()=>e.value[t].lotNo},o=>{const a=(null===o||void 0===o?void 0:o.value)||"";e.value[t].lotNo=a})}function j(t){Object(l["b"])({id:"expiry",helpText:e.value[t].kitName+" Expiry Date",type:s["b"].TT_FULL_DATE,defaultValue:()=>e.value[t].expiryDate},o=>{const a=(null===o||void 0===o?void 0:o.value)||"";e.value[t].expiryDate=a,n()})}function v(t){e.value[r.value].lotNo=t,e.value[r.value].expiryDate||j(r.value)}async function x(){await Object(u["a"])("Are you sure you want to clear everything?")&&(e.value.forEach(e=>{e.expiryDate="",e.lotNo="",e.expiryDateError=""}),r.value=null)}async function N(){if(n(),i.value)return Object(u["e"])("Some kits have errors! please fix them below");if(!e.value.every(e=>!(e.lotNo&&e.expiryDate))||await Object(u["a"])("Do you want to continue without updating test kits?")){c.value=!1;try{return await o(),Object(u["d"])("Testkits updated!"),b["a"].back()}catch(t){Object(u["c"])("General error has occured!")}c.value=!0}}return Object(a["onMounted"])(()=>t().then(()=>{n(),c.value=!0})),{kits:e,activeIndex:r,hasErrors:i,canFinish:c,save:N,onScan:v,updateLot:O,updateExpiryDate:j,clear:x}}}),j=(o("c72e"),o("d959")),v=o.n(j);const x=v()(O,[["render",c],["__scopeId","data-v-c7645506"]]);t["default"]=x},c72e:function(e,t,o){"use strict";o("42e2")},cd10:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return n}));var a,r=o("1c74"),c=o("2ef0"),i=o("7a23");function n(){const e=Object(i["ref"])([]),t=async()=>{try{const e=await r["e"].getJson("user_properties",{property:"HTS_PROGRAMS"});return e.property_value.split(",").map(e=>e.trim())}catch(e){console.error(""+e)}},o=async()=>{const o=[{kitName:a.UNIGOLD,lotNo:"",expiryDate:"",testGroup:"profession_hiv_kit",visible:!0,userProp:"HIV Test"},{kitName:a.DETERMINE,lotNo:"",expiryDate:"",testGroup:"profession_hiv_kit",visible:!0,userProp:"HIV Test"},{kitName:a.BIOLINE,lotNo:"",expiryDate:"",testGroup:"profession_hiv_kit",visible:!0,userProp:"HIV Test"},{kitName:a.HIV_SELF_KIT,lotNo:"",expiryDate:"",visible:!0},{kitName:a.SYPHILIS,lotNo:"",expiryDate:"",visible:!0,userProp:"Syphilis Test"},{kitName:a.HEPATITIS,lotNo:"",expiryDate:"",visible:!0,userProp:"Hepatitis B Test"}];try{const i=await t(),n=await r["e"].getJson("user_properties",{property:a.TEST_KIT_USER_PROPERTY}),l=JSON.parse(n.property_value);o.forEach(e=>{e.userProp&&(e.visible=i.includes(e.userProp));const t=Object(c["find"])(l,{kitName:e.kitName});t&&(e.lotNo=t.lotNo,e.expiryDate=t.expiryDate)}),e.value=o.filter(e=>e.visible)}catch(i){e.value=o,console.error(""+i)}},n=t=>{const o=Object(c["find"])(e.value,{kitName:t});return o?new Date(o.expiryDate)<=new Date(r["e"].getSessionDate())?"":o.lotNo:""},l=t=>{const o=Object(c["find"])(e.value,{kitName:t});return o?new Date(o.expiryDate)<=new Date(r["e"].getSessionDate())?"":o.expiryDate:""},s=async()=>{const t=await r["e"].postJson("user_properties",{property:a.TEST_KIT_USER_PROPERTY,property_value:JSON.stringify(e.value)});return!!t};return{kits:e,initKits:o,saveKits:s,getLotNo:n,getExpiryDate:l}}(function(e){e["TEST_KIT_USER_PROPERTY"]="hts_user_assigned_kits",e["HIV_SELF_KIT"]="HIV self-kit",e["SYPHILIS"]="Syphilis",e["HEPATITIS"]="Hepatitis B",e["BIOLINE"]="Bioline",e["DETERMINE"]="Determine",e["UNIGOLD"]="Unigold"})(a||(a={}))}}]);
//# sourceMappingURL=chunk-0d411be7.f5f8239b.js.map