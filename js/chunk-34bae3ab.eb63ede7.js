(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34bae3ab"],{"1d60":function(e,t,o){"use strict";var n=o("7a23");const a=Object(n["withScopeId"])("data-v-c7c0d35c");Object(n["pushScopeId"])("data-v-c7c0d35c");const c={id:"report-content"},r={id:"moh_template"},l={key:0,class:"main-title"},i={key:1,class:"main-title"},s={key:2,class:"main-title"},p={key:3,class:"table-section"},d={key:4,colspan:2,class:"table-section"},b={key:5};Object(n["popScopeId"])();const u=a((function(e,t,o,u,m,j){const O=Object(n["resolveComponent"])("layout");return Object(n["openBlock"])(),Object(n["createBlock"])(O,{logo:e.logo,title:e.title,toCSV:e.toCSV,toPDF:e.toPDF,period:e.period,dateGenerated:e.dateGenerated,refreshReport:e.refresh,configure:e.configureReport},{default:a(()=>[Object(n["createVNode"])("div",c,[Object(n["createVNode"])("table",r,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.reportData.indicators,(t,o)=>(Object(n["openBlock"])(),Object(n["createBlock"])("tr",{key:o},[t.isMainTitle?(Object(n["openBlock"])(),Object(n["createBlock"])("td",l,"#")):Object(n["createCommentVNode"])("",!0),t.isMainTitle?(Object(n["openBlock"])(),Object(n["createBlock"])("td",i,Object(n["toDisplayString"])(t.label),1)):Object(n["createCommentVNode"])("",!0),t.isMainTitle?(Object(n["openBlock"])(),Object(n["createBlock"])("td",s,"#")):Object(n["createCommentVNode"])("",!0),t.isSectionTitle?(Object(n["openBlock"])(),Object(n["createBlock"])("td",p)):Object(n["createCommentVNode"])("",!0),t.isSectionTitle?(Object(n["openBlock"])(),Object(n["createBlock"])("td",d,Object(n["toDisplayString"])(t.label),1)):Object(n["createCommentVNode"])("",!0),t.isMainTitle||t.isSectionTitle?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])("td",b,Object(n["toDisplayString"])(t.index),1)),t.isMainTitle||t.isSectionTitle?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])("td",{key:6,style:t.style||{},class:"table-key"},Object(n["toDisplayString"])(t.label),5)),t.isMainTitle||t.isSectionTitle?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])("td",{key:7,class:"table-value",onClick:o=>e.onClickValue(t)},Object(n["toDisplayString"])(t._value),9,["onClick"]))]))),128))])])]),_:1},8,["logo","title","toCSV","toPDF","period","dateGenerated","refreshReport","configure"])}));var m=o("954d"),j=o("0882"),O=o("2ef0"),f=o("d20e"),v=o("ba82"),_=Object(n["defineComponent"])({components:{Layout:m["a"]},props:{params:{type:Object,required:!0}},setup(e){const t=Object(j["a"])(e.params.title);function o(){t.setReportPeriod({isPeriodSelection:!0,minDate:e.params.minDate,maxDate:e.params.maxDate,generate:(t,o,n)=>{const a=new f["a"](e.params.endpoint);return a.startDate=n.start_date,a.endDate=n.end_date,a.name=e.params.name,a.requestReport({type:"moh"})}})}function a(e){console.log(e.value),Object(O["isEmpty"])(e._drill)||t.defaultDrillDown(e.label,e._drill)}function c(){const[e,...o]=t.reportData.indicators.map(e=>[e.index||"",e.label,e._value||""]);return{rows:o,columns:[["#",t.reportData.indicators[0].label,"#"]]}}return Object(n["watch"])(()=>t.reportData.data,o=>{t.reportData.indicators=e.params.indicators.map(e=>{if("function"===typeof e.value){const t=e.value(o);Array.isArray(t)&&(e._value=t.length,e._drill=t)}return e})},{deep:!0}),Object(n["onMounted"])(()=>{Object(O["isEmpty"])(t.reportData.data)&&(t.reportData.indicators=e.params.indicators.map(e=>("function"===typeof e.value&&(e._value=""),e)),o())}),{onClickValue:a,configureReport:o,logo:"login-logos/Malawi-Coat_of_arms_of_arms.png",title:t.title,period:t.period,reportData:t.reportData,dateGenerated:t.dateGenerated,refresh:t.updateReportData,toPDF:()=>{const{rows:e,columns:o}=c();Object(v["c"])(o,e,t.reportDescription())},toCSV:()=>{const{rows:e,columns:o}=c();Object(v["a"])(o,t.appendReportStamp(e),t.reportDescription())}}}}),y=(o("8e6a"),o("d959")),g=o.n(y);const V=g()(_,[["render",u],["__scopeId","data-v-c7c0d35c"]]);t["a"]=V},4064:function(e,t,o){},"88ab":function(e,t,o){},"8e6a":function(e,t,o){"use strict";o("4064")},"954d":function(e,t,o){"use strict";var n=o("7a23");const a=Object(n["withScopeId"])("data-v-6b2171ae");Object(n["pushScopeId"])("data-v-6b2171ae");const c={class:"header-text-list"},r={key:0},l={class:"report-content"},i=Object(n["createTextVNode"])("Date Generated: "),s=Object(n["createTextVNode"])("APP version: "),p=Object(n["createTextVNode"])("API version: ");Object(n["popScopeId"])();const d=a((function(e,t,o,d,b,u){const m=Object(n["resolveComponent"])("ion-img"),j=Object(n["resolveComponent"])("ion-thumbnail"),O=Object(n["resolveComponent"])("ion-label"),f=Object(n["resolveComponent"])("ion-item"),v=Object(n["resolveComponent"])("ion-toolbar"),_=Object(n["resolveComponent"])("ion-header"),y=Object(n["resolveComponent"])("ion-content"),g=Object(n["resolveComponent"])("ion-chip"),V=Object(n["resolveComponent"])("ion-footer"),k=Object(n["resolveComponent"])("his-footer"),C=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(C,null,{default:a(()=>[Object(n["createVNode"])(_,null,{default:a(()=>[Object(n["createVNode"])(v,null,{default:a(()=>[Object(n["createVNode"])(f,null,{default:a(()=>[e.reportLogo?(Object(n["openBlock"])(),Object(n["createBlock"])(j,{key:0},{default:a(()=>[Object(n["createVNode"])(m,{src:e.reportLogo},null,8,["src"])]),_:1})):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(O,null,{default:a(()=>[Object(n["createVNode"])("ul",c,[Object(n["createVNode"])("li",null,[Object(n["createVNode"])("b",null,Object(n["toDisplayString"])(e.title),1)]),e.period?(Object(n["openBlock"])(),Object(n["createBlock"])("li",r,[Object(n["createVNode"])("b",null,Object(n["toDisplayString"])(e.period),1)])):Object(n["createCommentVNode"])("",!0)])]),_:1})]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(y,null,{default:a(()=>[Object(n["createVNode"])("div",l,[Object(n["renderSlot"])(e.$slots,"default")])]),_:3}),Object(n["createVNode"])(V,null,{default:a(()=>[Object(n["createVNode"])(v,null,{default:a(()=>[Object(n["createVNode"])(g,{color:"primary"},{default:a(()=>[i,Object(n["createVNode"])("b",null,Object(n["toDisplayString"])(e.dateGenerated),1)]),_:1}),Object(n["createVNode"])(g,{color:"primary"},{default:a(()=>[s,Object(n["createVNode"])("b",null,Object(n["toDisplayString"])(e.appVersion),1)]),_:1}),Object(n["createVNode"])(g,{color:"primary"},{default:a(()=>[p,Object(n["createVNode"])("b",null,Object(n["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(k,{color:"dark",btns:e.buttons},null,8,["btns"])]),_:1})}));var b=o("8a30"),u=o("1718"),m=o("0f25"),j=o("6c02"),O=o("1c74"),f=Object(n["defineComponent"])({components:{IonLabel:b["x"],IonItem:b["w"],HisFooter:m["a"],IonPage:b["D"],IonHeader:b["q"],IonContent:b["n"],IonToolbar:b["S"],IonChip:b["l"],IonFooter:b["o"],IonThumbnail:b["Q"],IonImg:b["s"]},props:{title:{type:String},period:{type:String},logo:{type:String},toCSV:{type:Function,required:!1},toPDF:{type:Function,required:!1},configure:{type:Function,required:!1},refreshReport:{type:Function,required:!0},dateGenerated:{type:String,default:"-"}},setup(e){const t=Object(j["f"])(),o=[],a=O["e"].getCoreVersion(),c=O["e"].getApiVersion(),r=Object(n["computed"])(()=>e.logo?Object(u["a"])(e.logo):null);function l(e,t){return{name:e.name||"Btn",size:e.size||"large",slot:e.slot||"start",color:e.color||"primary",visible:e.visible||!0,onClick:t}}return"function"===typeof e.toCSV&&o.push(l({name:"CSV"},e.toCSV)),"function"===typeof e.toPDF&&o.push(l({name:"PDF"},e.toPDF)),"function"===typeof e.configure&&o.push(l({name:"Set Date",slot:"end",color:"primary"},e.configure)),o.push(l({name:"Refresh",slot:"end",color:"warning"},e.refreshReport)),o.push(l({name:"Finish",slot:"end",color:"success"},()=>t.push("/"))),{buttons:o,appVersion:a,apiVersion:c,reportLogo:r}}}),v=(o("ccba"),o("d959")),_=o.n(v);const y=_()(f,[["render",d],["__scopeId","data-v-6b2171ae"]]);t["a"]=y},ccba:function(e,t,o){"use strict";o("88ab")},d6ac:function(e,t,o){"use strict";o.r(t);var n=o("7a23");function a(e,t,o,a,c,r){const l=Object(n["resolveComponent"])("moh-template"),i=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(i,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l,{params:e.params},null,8,["params"])]),_:1})}var c=o("8a30"),r=o("1d60"),l=Object(n["defineComponent"])({components:{IonPage:c["D"],MohTemplate:r["a"]},setup(){const e={paddingRight:"50%",fontWeight:"bold",textAlign:"right"},t={title:"HTS Summary",name:"HTS SUMMARY",indicators:[{isMainTitle:!0,label:"HIV testing summary (from initial and confirmatory register)"},{label:"Total clients tested for HIV",index:"1",value:e=>e["total_clients_tested_for_hiv"]},{isSectionTitle:!0,label:"HIV test results by sex"},{label:"New negative",index:"2",value:e=>e["new_negative"]},{label:"New positive total",index:"3",value:e=>e["new_positive_total"]},{label:"Male",index:"4",style:e,value:e=>e["new_positive_male"]},{label:"Female",index:"5",style:e,value:e=>e["new_positive_female"]},{label:"Confirmatory positive total (prev. pos. professional test)",index:"6",value:e=>e["confirmatory_positive_total_prev_pos_professional_test"]},{label:"Male",index:"7",style:e,value:e=>e["confirmed_positive_male"]},{label:"Female",index:"8",style:e,value:e=>e["confirmed_positive_female"]},{label:"Confirmatory inconclusive total (prev. pos. professional test)",index:"9",value:e=>e["confirmatory_inconclusive_total_prev_pos_professional_test"]},{label:"Male",index:"10",style:e,value:e=>e["confirmed_inconclusive_male"]},{label:"Female",index:"11",style:e,value:e=>e["confirmed_inconclusive_female"]},{label:"New exposed infant",index:"12",value:e=>e["new_exposed_infant"]},{label:"New inconclusive",index:"13",value:e=>e["new_inconclusive"]}]};return{params:t}}}),i=o("d959"),s=o.n(i);const p=s()(l,[["render",a]]);t["default"]=p}}]);
//# sourceMappingURL=chunk-34bae3ab.eb63ede7.js.map