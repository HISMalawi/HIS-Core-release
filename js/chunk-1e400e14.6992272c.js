(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e400e14"],{"349c":function(e,t,a){"use strict";var l=a("7a23");const o={key:0},n={class:"his-sm-text"},c={id:"report-content"},r={class:"art-report-theme"},s={class:"stick-report-header"},i=["colspan","rowspan","onClick"],d={colspan:7},u={class:"his-sm-text"},b=["onClick"],p={class:"his-sm-text"},m={colspan:7},v={class:"his-sm-text"},O=["onClick"],g={class:"his-sm-text"},f={colspan:7},j={class:"his-sm-text"},h=["onClick"],y={class:"his-sm-text"},_={colspan:7},k={class:"his-sm-text"},C={colspan:"2"},E={class:"his-sm-text"},x={colspan:"6"},N=["onClick"];function w(e,t,a,w,V,L){const B=Object(l["resolveComponent"])("ion-title"),S=Object(l["resolveComponent"])("ion-icon"),T=Object(l["resolveComponent"])("ion-button"),D=Object(l["resolveComponent"])("ion-buttons"),R=Object(l["resolveComponent"])("ion-toolbar"),$=Object(l["resolveComponent"])("ion-header"),F=Object(l["resolveComponent"])("ion-label"),I=Object(l["resolveComponent"])("ion-item"),P=Object(l["resolveComponent"])("ion-content"),A=Object(l["resolveComponent"])("ion-footer");return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[Object(l["createVNode"])($,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(R,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(B,{class:"his-md-text"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.title)+" ",1),e.subtitle?(Object(l["openBlock"])(),Object(l["createElementBlock"])("br",o)):Object(l["createCommentVNode"])("",!0),Object(l["createElementVNode"])("span",n,Object(l["toDisplayString"])(e.subtitle),1)]),_:1}),Object(l["createVNode"])(D,{slot:"end"},{default:Object(l["withCtx"])(()=>["function"===typeof e.onConfigure?(Object(l["openBlock"])(),Object(l["createBlock"])(T,{key:0,onClick:e.onConfigure},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(S,{size:"large",icon:e.document},null,8,["icon"])]),_:1},8,["onClick"])):Object(l["createCommentVNode"])("",!0),"function"===typeof e.onRefresh?(Object(l["openBlock"])(),Object(l["createBlock"])(T,{key:1,onClick:e.onRefresh,color:"success",size:"large"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(S,{size:"large",icon:e.sync},null,8,["icon"])]),_:1},8,["onClick"])):Object(l["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1}),Object(l["createVNode"])(P,{"scroll-y":"","scroll-x":""},{default:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("div",c,[Object(l["createElementVNode"])("table",r,[Object(l["createElementVNode"])("thead",s,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.columnsMinusOne,(t,a)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("tr",{key:a},[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(t,(t,o)=>{var n,c;return Object(l["openBlock"])(),Object(l["createElementBlock"])("th",{key:o,colspan:(null===t||void 0===t||null===(n=t.span)||void 0===n?void 0:n.thColspan)||1,rowspan:(null===t||void 0===t||null===(c=t.span)||void 0===c?void 0:c.thRowspan)||1,onClick:a=>e.sortColumn(t.ref)},[Object(l["createVNode"])(I,{lines:"none"},{default:Object(l["withCtx"])(()=>[e.columnSorted&&e.columnSorted===t.ref?(Object(l["openBlock"])(),Object(l["createBlock"])(S,{key:0,icon:"asc"===e.sortOrder?e.arrowUp:e.arrowDown},null,8,["icon"])):Object(l["createCommentVNode"])("",!0),a<e.columns.length-1?(Object(l["openBlock"])(),Object(l["createBlock"])(F,{key:1,class:"ion-text-center"},{default:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("b",null,Object(l["toDisplayString"])(t.label),1)]),_:2},1024)):Object(l["createCommentVNode"])("",!0)]),_:2},1024)],8,i)}),128))]))),128))]),Object(l["createElementVNode"])("tbody",null,[Object(l["createElementVNode"])("tr",null,[Object(l["createElementVNode"])("td",d,[Object(l["createElementVNode"])("span",u,Object(l["toDisplayString"])(e.columns[4][0].label),1)])]),(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.sectionOne,(t,a)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("tr",{key:a},[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(t.row||[],(t,a)=>{var o;return Object(l["openBlock"])(),Object(l["createElementBlock"])("td",{key:a,onClick:()=>e.onClickTablecell(t),class:Object(l["normalizeClass"])({"clickable-cell":null===t||void 0===t||null===(o=t.column)||void 0===o?void 0:o.tdClick})},[Object(l["createElementVNode"])("b",p,Object(l["toDisplayString"])(t.value),1)],10,b)}),128))]))),128)),Object(l["createElementVNode"])("tr",null,[Object(l["createElementVNode"])("td",m,[Object(l["createElementVNode"])("span",v,Object(l["toDisplayString"])(e.columns[5][0].label),1)])]),(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.sectionTwo,(t,a)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("tr",{key:a},[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(t.row,(t,a)=>{var o;return Object(l["openBlock"])(),Object(l["createElementBlock"])("td",{key:a,onClick:()=>e.onClickTablecell(t),class:Object(l["normalizeClass"])({"clickable-cell":null===t||void 0===t||null===(o=t.column)||void 0===o?void 0:o.tdClick})},[Object(l["createElementVNode"])("span",g,Object(l["toDisplayString"])(t.value),1)],10,O)}),128))]))),128)),Object(l["createElementVNode"])("tr",null,[Object(l["createElementVNode"])("td",f,[Object(l["createElementVNode"])("span",j,Object(l["toDisplayString"])(e.columns[6][0].label),1)])]),(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.sectionThree,(t,a)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("tr",{key:a},[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(t.row,(t,a)=>{var o;return Object(l["openBlock"])(),Object(l["createElementBlock"])("td",{key:a,onClick:()=>e.onClickTablecell(t),class:Object(l["normalizeClass"])({"clickable-cell":null===t||void 0===t||null===(o=t.column)||void 0===o?void 0:o.tdClick})},[Object(l["createElementVNode"])("span",y,Object(l["toDisplayString"])(t.value),1)],10,h)}),128))]))),128)),Object(l["createElementVNode"])("tr",null,[Object(l["createElementVNode"])("td",_,[Object(l["createElementVNode"])("span",k,Object(l["toDisplayString"])(e.columns[7][0].label),1)])]),(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.sectionTotals,(t,a)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("tr",{key:a},[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(t.row,(t,a)=>{var o;return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],{key:a},[Object(l["createElementVNode"])("td",C,[Object(l["createElementVNode"])("span",E,Object(l["toDisplayString"])(t.column.label),1)]),Object(l["createElementVNode"])("td",x,[Object(l["createElementVNode"])("span",{class:Object(l["normalizeClass"])(["his-sm-text",{"clickable-cell":null===t||void 0===t||null===(o=t.column)||void 0===o?void 0:o.tdClick}]),onClick:()=>e.onClickTablecell(t)},Object(l["toDisplayString"])(t.value),11,N)])],64)}),128))]))),128))])])])]),_:1}),Object(l["createVNode"])(A,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(R,{color:"dark"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(T,{onClick:t[0]||(t[0]=t=>e.toCSV()),size:"large"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(" CSV ")]),_:1}),Object(l["createVNode"])(T,{onClick:t[1]||(t[1]=t=>e.toPDF()),size:"large"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(" PDF ")]),_:1}),Object(l["createVNode"])(T,{onClick:e.finish,color:"success",size:"large",slot:"end"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(" Finish ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}a("14d9"),a("13d5");var V=a("d867"),L=a("ff79"),B=a("2ef0"),S=a("ba82"),T=a("1c74"),D=a("6605"),R=a("5a0c"),$=a.n(R),F=Object(l["defineComponent"])({components:{IonToolbar:V["S"],IonItem:V["w"],IonIcon:V["r"],IonLabel:V["x"],IonTitle:V["R"],IonHeader:V["q"],IonButton:V["d"],IonFooter:V["o"],IonContent:V["n"],IonButtons:V["e"]},props:{title:{type:String,default:"Report"},subtitle:{type:String},columns:{type:Object,required:!0},columnData:{type:Array,default:()=>[]},onFinish:{type:Function},onRefresh:{type:Function},onConfigure:{type:Function},csvQuarter:{type:String},headers:{type:Array,default:()=>[]},order:{type:Array,default:()=>[]},csvSpacing:{type:Number},csvSubHeader:{type:Array,default:()=>[]}},setup(e){const t=Object(D["i"])(),a=Object(l["ref"])([]),o=Object(l["ref"])(""),n=Object(l["ref"])("desc"),c=Object(l["computed"])(()=>e.columns.slice(0,2)),r=Object(l["computed"])(()=>{var t;const a=[];return null===(t=e.columnData[0])||void 0===t||t.forEach(t=>{const l=e.columns[1].map(e=>{let a="";try{a=Object(B["isEmpty"])(t)?"...":"function"===typeof e.value?e.value(t):t[e.ref]||""}catch(l){a="_ERROR_",console.error(l)}return{column:e,data:t,value:a,[e.ref||"nada"]:a}});a.push({row:l,data:t,searchIndex:[...l,l.map(e=>e.value).join(" ")]})}),a}),s=Object(l["computed"])(()=>{var t;const a=[];return null===(t=e.columnData[1])||void 0===t||t.forEach(t=>{const l=e.columns[2].map(e=>{let a="";try{a=Object(B["isEmpty"])(t)?"...":"function"===typeof e.value?e.value(t):t[e.ref]||""}catch(l){a="_ERROR_",console.error(l)}return{column:e,data:t,value:a,[e.ref||"nada"]:a}});a.push({row:l,data:t,searchIndex:[...l,l.map(e=>e.value).join(" ")]})}),a}),i=Object(l["computed"])(()=>{var t;const a=[];return null===(t=e.columnData[2])||void 0===t||t.forEach(t=>{const l=e.columns[3].map(e=>{let a="";try{a=Object(B["isEmpty"])(t)?"...":"function"===typeof e.value?e.value(t):t[e.ref]||""}catch(l){a="_ERROR_",console.error(l)}return{column:e,data:t,value:a,[e.ref||"nada"]:a}});a.push({row:l,data:t,searchIndex:[...l,l.map(e=>e.value).join(" ")]})}),a}),d=Object(l["computed"])(()=>{var t;const a=[];return null===(t=e.columnData[3])||void 0===t||t.forEach((t,l)=>{const o=e.columns[8+l].map(e=>{let a="";try{a=Object(B["isEmpty"])(t)?"...":"function"===typeof e.value?e.value(t):t[e.ref]||""}catch(l){a="_ERROR_",console.error(l)}return{column:e,data:t,value:a,[e.ref||"nada"]:a}});a.push({row:o,data:t,searchIndex:[...o,o.map(e=>e.value).join(" ")]})}),a}),u=e=>{o.value=e,n.value="asc"===n.value?"desc":"asc"},b=()=>{"function"===typeof e.onFinish?e.onFinish():t.push("/")},p=e=>{try{var t,a;if("function"===typeof(null===(t=e.column)||void 0===t?void 0:t.tdClick))null===(a=e.column)||void 0===a||a.tdClick(e);return}catch(l){console.error(l)}},m=()=>e.columns.reduce((e,t)=>e.concat(t),[]).filter(e=>e.value||e.ref),v=()=>{var e,t;const a=null===(e=window)||void 0===e||null===(t=e.document)||void 0===t?void 0:t.getElementById("report-content");Object(S["b"])(`\n                <html>\n                    <head> \n                        <style> \n                        table {\n                            border-collapse: collapse;\n                        }\n                        th, td {\n                            width: 4%;\n                            text-align: center;\n                            border: solid 1px black;\n                        }\n                        td {\n                            border-bottom: 1px solid rgb(165, 165, 165);\n                            padding: 0.6em;\n                            font-weight: 500;\n                            font-size: .8em;\n                        }\n                        </style>    \n                    </head>\n                <body> \n                 ${a.innerHTML}    \n                </body>\n                </html>\n            `)},O=()=>{const t=t=>{const a=t.map(t=>t.map(t=>e.order.map(e=>{const a=t[e];return Array.isArray(a)?a.length:a}).filter(e=>void 0!==e)).filter(e=>e.length>0)).filter(e=>e.length>0);return a},a=e=>e.map(e=>{const[t]=Object.keys(e),a=e[t],l=Array.isArray(a)?a.length:0,o=[t,l];for(let n=0;n<5;n++)o.push("");return o}),l=t(e.columnData),o=a(e.columnData[3]),n=l.flat();o.forEach(e=>{n.push(e)});const c=`${T["e"].getLocationName()||"Unknown site"}-${e.title}-${e.subtitle}-${T["e"].getSessionDate()}`,r=()=>{const t=[...n],a=[0,9,18,27],l=e.csvSubHeader.length;return a.forEach((a,o)=>{const n=e.csvSubHeader[o%l];t.splice(a,0,[...n])}),t};Object(S["a"])([e.headers],[...r(),["Date Created: "+$()().format("DD/MMM/YYYY HH:MM:ss")],["Quarter: "+(e.csvQuarter||e.subtitle)],["HIS-Core Version: "+T["e"].getCoreVersion()],["API Version: "+T["e"].getApiVersion()],["Site UUID: "+T["e"].getSiteUUID()],["Generated by: "+T["e"].getUserName()]],c)},g=e=>{e.forEach(e=>{const t=m().map(t=>{let a="";try{a=Object(B["isEmpty"])(e)?"...":"function"===typeof t.value?t.value(e):e[t.ref]||""}catch(l){a="_ERROR_",console.error(l)}return{column:t,data:e,value:a,[t.ref||"nada"]:a}});a.value.push({row:t,data:e,searchIndex:[...t,t.map(e=>e.value).join(" ")]})})};return Object(l["watch"])(()=>e.columnData,e=>{a.value=[],Array.isArray(e)&&g(e)},{immediate:!0,deep:!0}),{sortColumn:u,onClickTablecell:p,toPDF:v,toCSV:O,finish:b,columnsMinusOne:c,sync:L["O"],search:L["J"],close:L["r"],arrowUp:L["h"],arrowDown:L["g"],document:L["u"],sortOrder:n,sectionOne:r,sectionTwo:s,sectionThree:i,sectionTotals:d,columnSorted:o}}}),I=(a("6d60"),a("d959")),P=a.n(I);const A=P()(F,[["render",w],["__scopeId","data-v-08e3fef8"]]);t["a"]=A},"6d60":function(e,t,a){"use strict";a("a456")},7864:function(e,t,a){"use strict";a.r(t);var l=a("7a23");function o(e,t,a,o,n,c){const r=Object(l["resolveComponent"])("ion-loading"),s=Object(l["resolveComponent"])("v2Datatable"),i=Object(l["resolveComponent"])("ion-page");return Object(l["openBlock"])(),Object(l["createBlock"])(i,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(r,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),Object(l["createVNode"])(s,{title:"Monthly Screen Report",subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:25,onConfigure:e.configure,csvQuarter:e.csvQuarter,onRefresh:()=>e.generate(),order:e.order,headers:e.csvheaders,"csv-spacing":e.spacing,"csv-sub-header":e.subHeaders},null,8,["subtitle","columns","columnData","onConfigure","csvQuarter","onRefresh","order","headers","csv-spacing","csv-sub-header"])]),_:1})}a("14d9");var n=a("d867"),c=a("349c"),r=a("ad9e"),s=a("b5e4"),i=a("2048"),d=a("0011"),u=a("c731"),b=a("d95e"),p=a("2ef0"),m=a("2706"),v=a("1c74"),O=a("9283"),g=a("5a0c"),f=a.n(g);const j=Object(l["ref"])([]),h=Object(l["ref"])(""),y=Object(l["ref"])(""),_=Object(l["ref"])(""),k=Object(l["ref"])(!1),C=Object(l["ref"])("");var E=Object(l["defineComponent"])({components:{IonPage:n["D"],IonLoading:n["z"],v2Datatable:c["a"]},setup(){Object(l["ref"])([]);const e=(e,l)=>{const o=[t(e.first_time_screened),t(e.rescreened_after_prev_visit),t(e.post_treatment_followup)];return o.push(a(l)),o},t=e=>e.map(e=>{const{age_group:t,...a}=e;return{...a,age_group:t}}),a=e=>{const t=[];for(const a in e){const l={};l[a]=e[a],t.push(l)}return t},o=async(e,t)=>{(await n["Z"].create({component:i["a"],backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:e,subtitle:_,patientIdentifiers:t,onFinish:()=>n["Z"].getTop().then(e=>e&&n["Z"].dismiss())}})).present()},c=["age_group","negative","positive","for_same_day_tx","suspected"],g=["Age Group","Negative","Positive","Suspected Cancer"],E=[["","","1st time screened","",""],["","","Rescreened after previous negative","",""],["","","Post-treatment follow-up","",""],["","","Month Summary","",""]],x=3,N=[[{label:"Facility:",ref:""},{label:"Month/Year:",ref:"",span:{thColspan:1}},{label:"Report Officer:",ref:"",span:{thColspan:3}}],[{label:"Age Disaggregate:",ref:"data.age_group",value:e=>e.age_group},{label:"Negative",ref:"data.cryotherapy.length",secondaryLabel:"1st screened (negative)",value:e=>e.negative.length,tdClick:({column:e,data:t})=>o(`${t.age_group} ${e.secondaryLabel}`,t.negative)},{label:"Positive",ref:"data.positive.length",secondaryLabel:"1st screened (positive)",value:e=>e.positive.length,tdClick:({column:e,data:t})=>o(`${t.age_group} ${e.secondaryLabel}`,t.positive)},{label:"For same day Tx",ref:"data.for_same_day_tx.length",secondaryLabel:"1st screened (For same day Tx)",value:e=>e.for_same_day_tx.length,tdClick:({column:e,data:t})=>o(`${t.age_group} ${e.secondaryLabel}`,t.for_same_day_tx)},{label:"Suspected Cancer",ref:"data.suspected.length",secondaryLabel:"1st screened (Suspected Cancer)",value:e=>e.suspected.length,tdClick:({column:e,data:t})=>o(`${t.age_group} ${e.secondaryLabel}`,t.suspected)}],[{label:"Age Disaggregate:",ref:"data.age_group",value:e=>e.age_group},{label:"Negative",ref:"data.cryotherapy.length",secondaryLabel:"Rescreened after previous negative (negative)",value:e=>e.negative.length,tdClick:({column:e,data:t})=>o(`${t.age_group} ${e.secondaryLabel}`,t.negative)},{label:"Positive",ref:"data.positive.length",secondaryLabel:"Rescreened after previous negative (positive)",value:e=>e.positive.length,tdClick:({column:e,data:t})=>o(`${t.age_group} ${e.secondaryLabel}`,t.positive)},{label:"For same day Tx",ref:"data.for_same_day_tx.length",secondaryLabel:"Rescreened after previous negative (For same day Tx)",value:e=>e.for_same_day_tx.length,tdClick:({column:e,data:t})=>o(`${t.age_group} ${e.secondaryLabel}`,t.for_same_day_tx)},{label:"Suspected Cancer",ref:"data.suspected.length",secondaryLabel:"Rescreened after previous negative (Suspected Cancer)",value:e=>e.suspected.length,tdClick:({column:e,data:t})=>o(`${t.age_group} ${e.secondaryLabel}`,t.suspected)}],[{label:"Age Disaggregate:",ref:"data.age_group",value:e=>e.age_group},{label:"Negative",ref:"data.cryotherapy.length",secondaryLabel:"Post-treatment follow-up (negative)",value:e=>e.negative.length,tdClick:({column:e,data:t})=>o(`${t.age_group} ${e.secondaryLabel}`,t.negative)},{label:"Positive",ref:"data.positive.length",secondaryLabel:"Post-treatment follow-up positive)",value:e=>e.positive.length,tdClick:({column:e,data:t})=>o(`${t.age_group} ${e.secondaryLabel}`,t.positive)},{label:"For same day Tx",ref:"data.for_same_day_tx.length",secondaryLabel:"Post-treatment follow-up (For same day Tx)",value:e=>e.for_same_day_tx.length,tdClick:({column:e,data:t})=>o(`${t.age_group} ${e.secondaryLabel}`,t.for_same_day_tx)},{label:"Suspected Cancer",ref:"data.suspected.length",secondaryLabel:"Post-treatment follow-up (Suspected Cancer)",value:e=>e.suspected.length,tdClick:({column:e,data:t})=>o(`${t.age_group} ${e.secondaryLabel}`,t.suspected)}],[{label:"1st time Screened",ref:"",exportable:!1,span:{thColspan:7}}],[{label:"Rescreened after previous negative",ref:"",exportable:!1,span:{thColspan:7}}],[{label:"Post-treatment follow-up",ref:"",span:{thColspan:7}}],[{label:"Month Summary",ref:"",span:{thColspan:7}}],[{label:"Total Screened",ref:"data.total_screened.length",secondaryLabel:"Total Screened",value:e=>e.total_screened.length,tdClick:({column:e,data:t})=>o(""+e.secondaryLabel,t.total_screened)}],[{label:"Total Negative",ref:"data.total_negative.length",secondaryLabel:"Total Negative",value:e=>e.total_negative.length,tdClick:({column:e,data:t})=>o(""+e.secondaryLabel,t.total_negative)}],[{label:"Total Via + eligible for same day Tx",ref:"data.total_via_plus_eligible_for_same_day_tx.length",secondaryLabel:"Total Via + eligible for same day Tx",value:e=>e.total_via_plus_eligible_for_same_day_tx.length,tdClick:({column:e,data:t})=>o(""+e.secondaryLabel,t.total_via_plus_eligible_for_same_day_tx)}],[{label:"Total Positive",ref:"data.total_positive.length",secondaryLabel:"Total Positive",value:e=>e.total_positive.length,tdClick:({column:e,data:t})=>o(""+e.secondaryLabel,t.total_positive)}],[{label:"Total Suspected Cancer",ref:"data.total_suspect_cancer.length",secondaryLabel:"Total Suspected Cancer",value:e=>e.total_suspect_cancer.length,tdClick:({column:e,data:t})=>o(""+e.secondaryLabel,t.total_suspect_cancer)}],[{label:"Total VIA+ Referred",ref:"data.total_via_reffered.length",secondaryLabel:"Total VIA+ Referred",value:e=>e.total_via_reffered.length,tdClick:({column:e,data:t})=>o(""+e.secondaryLabel,t.total_via_reffered)}],[{label:"Total CXCA Suspect Referred",ref:"data.suspects_reffered.length",secondaryLabel:"Total CXCA Suspect Referred",value:e=>e.suspects_reffered.length,tdClick:({column:e,data:t})=>o(""+e.secondaryLabel,t.suspects_reffered)}],[{label:"Total Referred",ref:"data.total_reffered.length",secondaryLabel:"Total Referred",value:e=>e.total_reffered.length,tdClick:({column:e,data:t})=>o(""+e.secondaryLabel,t.total_reffered)}]],w=async()=>{if(!h.value||!y.value)return Object(s["e"])("Start date and end date required!");k.value=!0,j.value=[];const t=new r["a"];t.startDate=h.value,t.endDate=y.value;try{const l=await t.getClinicReport("MONTHLY SCREEN");j.value=e(l.data,l.totals),a((await t.getClinicReport("MONTHLY CECAP TX")).totals)}catch(l){Object(s["c"])("Unable to generate report!"),console.error(l)}k.value=!1},V=()=>Object(u["a"])([{id:"year",helpText:"Select Year",type:b["b"].TT_NUMBER,computedValue:e=>e.value,validation:e=>{const t=Object(p["isPlainObject"])(e)?e.value:-1;return m["a"].validateSeries([()=>m["a"].required(e),()=>isNaN(parseInt(""+t))?["Invalid year"]:null,()=>m["a"].rangeOf(e,2e3,O["b"].getYear(v["e"].getSessionDate()))])}},{id:"month",helpText:"Select Month",type:b["b"].TT_SELECT,validation:e=>m["a"].required(e),computedValue:e=>e.value,options:()=>[{label:"January",value:"01"},{label:"February",value:"02"},{label:"March",value:"03"},{label:"April",value:"04"},{label:"May",value:"05"},{label:"June",value:"06"},{label:"July",value:"07"},{label:"August",value:"08"},{label:"September",value:"09"},{label:"October",value:"10"},{label:"November",value:"11"},{label:"December",value:"12"}]}],e=>{h.value=`${e.year.value}-${e.month.value}-01`,y.value=f()(new Date(h.value).toISOString()).endOf("month").format("YYYY-MM-DD"),_.value=`Period (${Object(d["f"])(h.value)} to ${Object(d["f"])(y.value)})`,n["Z"].dismiss(),C.value=`${Object(d["f"])(h.value)} to ${Object(d["f"])(y.value)}`,w()});return Object(l["onMounted"])(()=>!j.value.length&&V()),{columns:N,isLoading:k,reportData:j,period:_,csvQuarter:C,generate:w,configure:V,order:c,csvheaders:g,spacing:x,subHeaders:E}}}),x=a("d959"),N=a.n(x);const w=N()(E,[["render",o]]);t["default"]=w},a456:function(e,t,a){}}]);
//# sourceMappingURL=chunk-1e400e14.6992272c.js.map