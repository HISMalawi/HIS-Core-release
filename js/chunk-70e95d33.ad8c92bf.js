(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70e95d33"],{"0c57":function(e,t,o){"use strict";o("e310")},"8eed":function(e,t,o){"use strict";o.r(t);var a=o("7a23");const c=Object(a["withScopeId"])("data-v-45cde8b0");Object(a["pushScopeId"])("data-v-45cde8b0");const n=Object(a["createTextVNode"])(" Merge history "),r=Object(a["createTextVNode"])("NPID Holder: "),l=Object(a["createTextVNode"])(" Person name "),s=Object(a["createTextVNode"])("Transactions:"),d=Object(a["createTextVNode"])(" Cancel "),b=Object(a["createTextVNode"])(" Reverse ");Object(a["popScopeId"])();const i=c((function(e,t,o,i,u,O){const j=Object(a["resolveComponent"])("ion-text"),p=Object(a["resolveComponent"])("ion-title"),m=Object(a["resolveComponent"])("ion-toolbar"),f=Object(a["resolveComponent"])("ion-header"),_=Object(a["resolveComponent"])("ion-label"),h=Object(a["resolveComponent"])("ion-item"),v=Object(a["resolveComponent"])("ion-list"),N=Object(a["resolveComponent"])("report-table"),g=Object(a["resolveComponent"])("ion-content"),y=Object(a["resolveComponent"])("ion-button"),k=Object(a["resolveComponent"])("ion-footer"),V=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createBlock"])(V,null,{default:c(()=>[Object(a["createVNode"])(f,null,{default:c(()=>[Object(a["createVNode"])(m,null,{default:c(()=>[Object(a["createVNode"])(p,{class:"his-lg-text"},{default:c(()=>[Object(a["createVNode"])(j,{color:"danger"},{default:c(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.npid),1)]),_:1}),n]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(g,null,{default:c(()=>[Object(a["createVNode"])(p,{class:"his-md-text his-card"},{default:c(()=>[r]),_:1}),Object(a["createVNode"])(v,null,{default:c(()=>[Object(a["createVNode"])(h,{lines:"none",class:"his-md-text"},{default:c(()=>[Object(a["createVNode"])(_,null,{default:c(()=>[l]),_:1}),Object(a["createVNode"])("b",null,Object(a["toDisplayString"])(e.holderName),1)]),_:1}),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.patientInfo,(e,t)=>(Object(a["openBlock"])(),Object(a["createBlock"])(h,{lines:"none",class:"his-md-text",key:t},{default:c(()=>[Object(a["createVNode"])(_,null,{default:c(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.label)+": ",1)]),_:2},1024),Object(a["createVNode"])("b",null,Object(a["toDisplayString"])(e.value),1)]),_:2},1024))),128))]),_:1}),Object(a["createVNode"])(p,{class:"his-md-text his-card"},{default:c(()=>[s]),_:1}),Object(a["createVNode"])(N,{config:{tableCssTheme:"art-report-theme"},columns:e.columns,rows:e.rows},null,8,["columns","rows"])]),_:1}),Object(a["createVNode"])(k,null,{default:c(()=>[Object(a["createVNode"])(m,{color:"dark"},{default:c(()=>[Object(a["createVNode"])(y,{onClick:e.cancel,color:"danger",size:"large",slot:"start"},{default:c(()=>[d]),_:1},8,["onClick"]),Object(a["createVNode"])(y,{onClick:e.rollback,disabled:!e.isReversible,color:"success",size:"large",slot:"end"},{default:c(()=>[b]),_:1},8,["onClick","disabled"])]),_:1})]),_:1})]),_:1})}));var u=o("8a30"),O=o("80e3"),j=o("9ceb"),p=o("1c74");class m extends p["e"]{static getMergeHistory(e){return this.getJson("/rollback/merge_history",{identifier:e})}static rollback(e){return this.postJson("/rollback/rollback_patient",{patient_id:e,program_id:this.getProgramID()})}}var f=o("6c02"),_=o("b5e4"),h=o("9283"),v=Object(a["defineComponent"])({components:{IonText:u["O"],IonPage:u["D"],IonContent:u["n"],IonToolbar:u["S"],IonHeader:u["q"],IonFooter:u["o"],IonTitle:u["R"],IonList:u["y"],IonItem:u["w"],IonLabel:u["x"],IonButton:u["d"],ReportTable:O["a"]},setup(){const e=Object(f["e"])(),t=Object(f["f"])(),o=Object(a["ref"])(-1),c=Object(a["ref"])([]),n=Object(a["ref"])([]),r=(""+e.params.id).toUpperCase(),l=Object(a["ref"])("N/A"),s=Object(a["ref"])([{label:"Birthdate",value:"N/A"},{label:"Gender",value:"N/A"}]),d=[[j["a"].thTxt("Merge type"),j["a"].thTxt("Merge date"),j["a"].thTxt("First Name"),j["a"].thTxt("Last name"),j["a"].thTxt("Birthdate"),j["a"].thTxt("Gender")]],b=Object(a["computed"])(()=>n.value.length>0);function i(){t.back()}async function u(){await Object(_["a"])("Are you sure you want to merge transactions")&&(await m.rollback(o.value)?t.back():Object(_["c"])("Failed to rollback"))}return Object(a["onMounted"])(async()=>{if(r){try{n.value=await m.getMergeHistory(r)||[]}catch(e){Object(_["c"])("Merge history not found for "+r)}c.value=n.value.map(e=>(-1===o.value&&(o.value=e["secondary_id"],l.value=`${e["secondary_first_name"]} ${e["secondary_surname"]}`,s.value=[{label:"Birthdate",value:h["b"].toStandardHisDisplayFormat(e["secondary_birthdate"])},{label:"Gender",value:e["secondary_gender"]}]),[j["a"].td(e["merge_type"]),j["a"].tdDate(e["merge_date"]),j["a"].td(e["primary_first_name"]),j["a"].td(e["primary_surname"]),j["a"].tdDate(e["primary_birthdate"]),j["a"].td(e["primary_gender"])]))}else t.back()}),{cancel:i,holderName:l,isReversible:b,patientInfo:s,rollback:u,columns:d,rows:c,npid:r}}}),N=(o("0c57"),o("d959")),g=o.n(N);const y=g()(v,[["render",i],["__scopeId","data-v-45cde8b0"]]);t["default"]=y},e310:function(e,t,o){}}]);
//# sourceMappingURL=chunk-70e95d33.ad8c92bf.js.map