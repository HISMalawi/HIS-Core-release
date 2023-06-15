(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5709f79b"],{1648:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const a={class:"his-card"};function r(e,t,n,r,c,i){const l=Object(o["resolveComponent"])("date-range-picker"),s=Object(o["resolveComponent"])("ion-col"),d=Object(o["resolveComponent"])("ion-label"),u=Object(o["resolveComponent"])("ion-badge"),b=Object(o["resolveComponent"])("ion-item"),p=Object(o["resolveComponent"])("ion-list"),j=Object(o["resolveComponent"])("line-chart"),O=Object(o["resolveComponent"])("ion-row"),f=Object(o["resolveComponent"])("ion-grid"),m=Object(o["resolveComponent"])("layout");return Object(o["openBlock"])(),Object(o["createBlock"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{size:"5",offset:"7",class:"ion-padding"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{range:e.range,onRangeChange:e.fetchData},null,8,["range","onRangeChange"])]),_:1}),Object(o["createVNode"])(s,{size:"2",class:"ion-padding-top"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",a,[Object(o["createVNode"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{button:"",onClick:t[0]||(t[0]=t=>e.drilldown(e.totalAttendance,"Total Attendance"))},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Total Attendance ")]),_:1}),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.totalAttendance.length),1)]),_:1})]),_:1}),Object(o["createVNode"])(b,{button:"",onClick:t[1]||(t[1]=t=>e.drilldown(e.totalPatientVisits,"Total patient visits"))},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Patient Visit ")]),_:1}),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.totalPatientVisits.length),1)]),_:1})]),_:1}),Object(o["createVNode"])(b,{button:"",onClick:t[2]||(t[2]=t=>e.drilldown(e.totalGuardianVisits,"Total guardian visits"))},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Guardian Visit ")]),_:1}),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.totalGuardianVisits.length),1)]),_:1})]),_:1})]),_:1})])]),_:1}),Object(o["createVNode"])(s,{size:"10"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{series:e.series,options:e.options,onPointSelection:e.pointSelection,placeholder:"select date period"},null,8,["series","options","onPointSelection"])]),_:1})]),_:1})]),_:1})]),_:1})}n("14d9");var c=n("8d56"),i=n("c5be"),l=n("d867"),s=n("2ef0"),d=n("7717"),u=n("ad8d"),b=n("b211"),p=n("23e6"),j=n("da44"),O=n("564f"),f=n("6605"),m=n("9283"),h=n("0011"),w=n("3a8c"),C=Object(o["defineComponent"])({components:{Layout:c["a"],LineChart:i["a"],IonGrid:l["IonGrid"],IonRow:l["IonRow"],IonCol:l["IonCol"],DateRangePicker:d["a"]},setup(){const e=Object(f["i"])(),t=Object(o["reactive"])({}),n=Object(o["ref"])([]),a=Object(o["computed"])(()=>{var e;return(null===(e=n.value[0])||void 0===e?void 0:e.raw.flat())||[]}),r=Object(o["computed"])(()=>{var e;return(null===(e=n.value[1])||void 0===e?void 0:e.raw.flat())||[]}),c=Object(o["computed"])(()=>n.value.map(({raw:e})=>e).flat(3)),i={title:{text:"Patient Vists Statistics",align:"left"},yaxis:{title:{text:"Number of clients"},plotAreaHeight:800}},l=e=>{const t={},n={},o={},a=[{name:"Patient present",raw:[],data:[]},{name:"Guardian present",raw:[],data:[]},{name:"Both patient and guardian present",raw:[],data:[]}];return Object.entries(e).forEach(([e,r])=>{t[e]=[],n[e]=[],o[e]=[],Object.entries(r).forEach(([a,{patient_present:r,guardian_present:c}])=>{c&&r?o[e].push({patientId:a,date:e}):r?t[e].push({patientId:a,date:e}):c&&n[e].push({patientId:a,date:e})});const c=new Date(e).getTime();a[0].data.push([c,t[e].length]),a[0].raw.push(t[e]),a[1].data.push([c,n[e].length]),a[1].raw.push(n[e]),a[2].data.push([c,o[e].length]),a[2].raw.push(o[e])}),a},d=async e=>{b["a"].show(),Object.assign(t,e);const o=new u["b"];o.setStartDate(e.startDate),o.setEndDate(e.endDate);const a=await o.getPatientVisitTypes();n.value=l(a),b["a"].hide()},C=async e=>{const t=await p["a"].findByID(e),n=new p["a"](t);return{arv_number:n.getArvNumber(),birthdate:n.getBirthdate(),gender:n.getGender(),address:""+n.getCurrentVillage(),...t}},g=async(t,n="Drill down clients")=>{if(Object(s["isEmpty"])(t))return;const a=[{path:"arv_number",label:"ARV Number",initialSort:!0,initialSortOrder:"asc",preSort:w["a"]},{path:"birthdate",label:"Date of Birth",formatter:m["c"].toStandardHisDisplayFormat},{path:"gender",label:"Gender",formatter:h["g"]},{path:"date",label:"Visit Date",formatter:m["c"].toStandardHisDisplayFormat},{path:"address",label:"Address"}],r=Object(o["ref"])([]),c=async()=>{for(const{patientId:e,date:n}of t){const t=await C(e);r.value.push({...t,date:n})}};c();const i=[{label:"Select",action:t=>e.push("/emc/patient/"+t["patient_id"])}];await j["a"].show(O["a"],{title:n,columns:a,rows:r.value,rowActionButtons:i})},v=async(e,t)=>{if(!Object(s["isEmpty"])(n.value))try{await g(n.value[t].raw[e],n.value[t].name+" visits")}catch(o){console.error(o)}};return{range:t,series:n,options:i,totalAttendance:c,totalPatientVisits:a,totalGuardianVisits:r,fetchData:d,pointSelection:v,drilldown:g}}}),g=n("d959"),v=n.n(g);const y=v()(C,[["render",r]]);t["default"]=y},"3a8c":function(e,t,n){"use strict";function o(e){return parseInt(e.split("-")[2])||0}n.d(t,"a",(function(){return o}))},"40e3":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n("4971"),a=n("2ef0"),r=n("1c74"),c=n("5a0c"),i=n.n(c);function l(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function s({columns:e,rows:t,quarter:n,period:c,filters:s}){let d=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return d+="\n",d+=Object(o["sortRows"])(t,(null===s||void 0===s?void 0:s.sort)||[]).map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let n=Object(a["get"])(t,e.path);return"function"===typeof e.formatter&&n&&(n=e.formatter(n,t)),l(e.drillable&&Array.isArray(n)?n.length:n)}).join(",")).join("\n"),d+="\nDate Created:  "+i()().format("DD/MMM/YYYY HH:MM:ss"),n&&(d+="\nQuarter: "+n),c&&(d+="\nQuarter: "+c),d+="\ne-Mastercard Version : "+r["e"].getAppVersion(),d+="\nAPI Version "+r["e"].getApiVersion(),d+="\nSite UUID: "+r["e"].getSiteUUID(),d}function d(e){const t=new Blob([s(e)],{type:"text/csv;charset=utf-8;"}),n=document.createElement("a");n.href=window.URL.createObjectURL(t),n.setAttribute("download",e.filename+".csv"),document.body.appendChild(n),n.click(),document.body.removeChild(n)}},"564f":function(e,t,n){"use strict";var o=n("7a23");function a(e,t,n,a,r,c){const i=Object(o["resolveComponent"])("IonIcon"),l=Object(o["resolveComponent"])("IonButton"),s=Object(o["resolveComponent"])("IonButtons"),d=Object(o["resolveComponent"])("IonTitle"),u=Object(o["resolveComponent"])("IonToolbar"),b=Object(o["resolveComponent"])("IonHeader"),p=Object(o["resolveComponent"])("data-table"),j=Object(o["resolveComponent"])("IonContent"),O=Object(o["resolveComponent"])("IonPage");return Object(o["openBlock"])(),Object(o["createBlock"])(O,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{slot:"end"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{slot:"end",onClick:t[0]||(t[0]=t=>e.modal.hide()),"icon-only":""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{icon:e.close},null,8,["icon"])]),_:1})]),_:1}),Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(j,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"row-actions-buttons":e.rowActionButtons,"actions-buttons":e.actionBtns,color:"custom"},null,8,["rows","async-rows","columns","row-actions-buttons","actions-buttons"])]),_:1})]),_:1})}n("14d9");var r=n("d867"),c=n("4971"),i=n("ff79"),l=n("da44"),s=n("5a0c"),d=n.n(s),u=n("40e3"),b=Object(o["defineComponent"])({name:"DrilldownTable",components:{DataTable:c["DataTable"],IonButton:r["IonButton"],IonPage:r["IonPage"],IonHeader:r["IonHeader"],IonContent:r["IonContent"],IonToolbar:r["IonToolbar"],IonButtons:r["IonButtons"],IonTitle:r["IonTitle"],IonIcon:r["IonIcon"]},props:{title:{type:String,default:"Report"},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},columns:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},actionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},period:{type:String,default:""}},setup(e){const t=Object(o["computed"])(()=>{const t=[...e.actionButtons];return e.canExportCsv&&t.push({label:"CSV",color:"primary",action:async(t,n,o,a)=>Object(u["a"])({rows:n,filters:o,columns:a,period:e.period.includes("Custom")?e.period.substring(6):e.period,filename:`${e.title}-${d()().format("DD-MMM-YYYY")}`})}),t});return{close:i["close"],modal:l["a"],actionBtns:t}}}),p=n("d959"),j=n.n(p);const O=j()(b,[["render",a]]);t["a"]=O},7717:function(e,t,n){"use strict";var o=n("7a23");function a(e,t,n,a,r,c){const i=Object(o["resolveComponent"])("ion-input"),l=Object(o["resolveComponent"])("ion-col"),s=Object(o["resolveComponent"])("ion-icon"),d=Object(o["resolveComponent"])("ion-row"),u=Object(o["resolveComponent"])("ion-grid");return Object(o["openBlock"])(),Object(o["createBlock"])(u,{class:"ion-no-padding ion-no-margin",style:{height:"100%"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{size:"6"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{modelValue:e.start,"onUpdate:modelValue":t[0]||(t[0]=t=>e.start=t),type:"date",class:"box",style:{width:"100%",height:"100%"}},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(l,{size:"1",style:{display:"flex","justify-content":"center"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{icon:e.arrowForward,style:{fontSize:"24px",padding:".5rem"}},null,8,["icon"])]),_:1}),Object(o["createVNode"])(l,{size:"5"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{modelValue:e.end,"onUpdate:modelValue":t[1]||(t[1]=t=>e.end=t),type:"date",class:"box",style:{width:"100%",height:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}var r=n("d867"),c=n("ff79"),i=n("5a0c"),l=n.n(i),s=n("b5e4"),d=Object(o["defineComponent"])({name:"DateRangePicker",components:{IonInput:r["IonInput"],IonGrid:r["IonGrid"],IonRow:r["IonRow"],IonCol:r["IonCol"],IonIcon:r["IonIcon"]},props:{range:{type:Object,default:()=>({startDate:"",endDate:""})}},emits:["rangeChange"],setup(e,{emit:t}){const n=Object(o["ref"])(e.range.startDate),a=Object(o["ref"])(e.range.endDate),r=(e,t)=>!(!l()(e).isSame(t)&&!l()(e).isBefore(t))||(Object(s["e"])("Start date must be before or equal to end date"),!1),i=Object(o["computed"])(()=>{if(n.value&&a.value&&r(n.value,a.value))return{startDate:n.value,endDate:a.value}});return Object(o["watch"])(i,e=>{e&&t("rangeChange",e)}),{arrowForward:c["arrowForward"],start:n,end:a}}}),u=n("d959"),b=n.n(u);const p=b()(d,[["render",a]]);t["a"]=p},c5be:function(e,t,n){"use strict";var o=n("7a23");function a(e,t,n,a,r,c){const i=Object(o["resolveComponent"])("apex-chart"),l=Object(o["resolveComponent"])("ion-card-content"),s=Object(o["resolveComponent"])("ion-card");return Object(o["openBlock"])(),Object(o["createBlock"])(s,{class:"his-card",style:{height:"100%"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{width:"100%",height:e.height,type:"line",options:e.chartOptions,series:e.series,onMarkerClick:e.onPointSelection},null,8,["height","options","series","onMarkerClick"])]),_:1})]),_:1})}var r=n("d867"),c=n("ae27"),i=n.n(c),l=Object(o["defineComponent"])({name:"LineChart",props:{series:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})},height:{type:[String,Number],default:560},placeholder:{type:String,default:"Loading data..."}},components:{IonCard:r["IonCard"],IonCardContent:r["IonCardContent"],ApexChart:i.a},emits:["pointSelection"],setup(e,{emit:t}){const n=Object(o["computed"])(()=>{const t={chart:{id:"line-chart",type:"line"},xaxis:{type:"datetime",tickAmount:2,labels:{show:!0,rotate:-75}},markers:{size:8,hover:{sizeOffset:3}},tooltip:{x:{format:"dd/MMM/yyyy"}},title:{text:"Line Chart",align:"left"},noData:{text:e.placeholder,align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:"#a7a7a7",fontSize:"25px",fontFamily:"Helvetica"}}};for(const n in e.options)t[n]={...t[n],...e.options[n]};return t}),a=(e,n,{dataPointIndex:o,seriesIndex:a})=>{console.log(e,n),t("pointSelection",o,a<=0?0:a)};return{chartOptions:n,onPointSelection:a}}}),s=n("d959"),d=n.n(s);const u=d()(l,[["render",a]]);t["a"]=u},da44:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("d867");const a={async show(e,t,n="custom-modal",a=!0){const r=await o["modalController"].create({component:e,cssClass:n,backdropDismiss:a,componentProps:t});r.present();const{data:c}=await r.onWillDismiss();if(c)return c},async hide(e){await o["modalController"].dismiss(e)}}}}]);
//# sourceMappingURL=chunk-5709f79b.38dbad17.js.map