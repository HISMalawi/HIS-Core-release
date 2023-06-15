(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da0e543e"],{"3a8c":function(e,t,o){"use strict";function a(e){return parseInt(e.split("-")[2])||0}o.d(t,"a",(function(){return a}))},"40e3":function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var a=o("4971"),n=o("2ef0"),r=o("1c74"),l=o("5a0c"),c=o.n(l);function i(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function s({columns:e,rows:t,quarter:o,period:l,filters:s}){let d=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return d+="\n",d+=Object(a["sortRows"])(t,(null===s||void 0===s?void 0:s.sort)||[]).map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let o=Object(n["get"])(t,e.path);return"function"===typeof e.formatter&&o&&(o=e.formatter(o,t)),i(e.drillable&&Array.isArray(o)?o.length:o)}).join(",")).join("\n"),d+="\nDate Created:  "+c()().format("DD/MMM/YYYY HH:MM:ss"),o&&(d+="\nQuarter: "+o),l&&(d+="\nQuarter: "+l),d+="\ne-Mastercard Version : "+r["e"].getAppVersion(),d+="\nAPI Version "+r["e"].getApiVersion(),d+="\nSite UUID: "+r["e"].getSiteUUID(),d}function d(e){const t=new Blob([s(e)],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=window.URL.createObjectURL(t),o.setAttribute("download",e.filename+".csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}},"649f":function(e,t,o){"use strict";o.r(t);var a=o("7a23");function n(e,t,o,n,r,l){const c=Object(a["resolveComponent"])("base-report-table");return Object(a["openBlock"])(),Object(a["createBlock"])(c,{title:"Clients Due For Viral Load Clinic Report","report-icon":"reports/viral_load.png",columns:e.columns,rows:e.rows,period:e.period,rowActionButtons:e.rowActionBtns,useDateRangeFilter:"",onCustomFilter:e.getData},null,8,["columns","rows","period","rowActionButtons","onCustomFilter"])}o("14d9");var r=o("b211"),l=o("afbc"),c=o("8727"),i=o("ad8d"),s=o("9283"),d=o("5a0c"),u=o.n(d),p=o("0011"),b=o("3a8c"),m=Object(a["defineComponent"])({name:"ClientsDueForVL",components:{BaseReportTable:c["a"]},setup(){const e=Object(a["ref"])("-"),t=Object(a["ref"])([]),o=[{path:"number",label:"#",initialSort:!0,initialSortOrder:"asc"},{path:"arv_number",label:"ARV Number",preSort:b["a"]},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:p["g"]},{path:"birthdate",label:"Date of Birth",formatter:e=>u()(e).format(s["a"])},{path:"appointment_date",label:"App Date",formatter:e=>u()(e).format(s["a"])},{path:"months_on_art",label:"Months on ART"},{path:"mile_stone",label:"Milestone",formatter:e=>u()(e).format(s["a"])}],n=async({dateRange:o})=>{await r["a"].show();const a=new i["b"];a.setStartDate(o.startDate),a.setEndDate(o.endDate),e.value=a.getDateIntervalPeriod(),t.value=(await a.getClientsDueForVl()).map((e,t)=>({...e,number:++t})),await r["a"].hide()},c=[{label:"Select",default:!0,action:e=>{l["a"].push("/emc/patient/"+e["patient_id"])}}];return{rows:t,columns:o,rowActionBtns:c,period:e,getData:n}}}),f=o("d959"),j=o.n(f);const O=j()(m,[["render",n]]);t["default"]=O},8727:function(e,t,o){"use strict";var a=o("7a23");const n=["src"],r=["innerHTML"],l=["innerHTML"],c={key:1},i={key:2},s={key:3},d={key:4};function u(e,t,o,u,p,b){const m=Object(a["resolveComponent"])("ion-col"),f=Object(a["resolveComponent"])("ion-row"),j=Object(a["resolveComponent"])("ion-grid"),O=Object(a["resolveComponent"])("ion-card-header"),y=Object(a["resolveComponent"])("data-table"),w=Object(a["resolveComponent"])("ion-card-content"),h=Object(a["resolveComponent"])("ion-card"),g=Object(a["resolveComponent"])("Layout");return Object(a["openBlock"])(),Object(a["createBlock"])(g,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,{style:{padding:"0 !important"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(O,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(j,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(f,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(a["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,n)]),_:1}),Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("h1",{innerHTML:e.title},null,8,r),e.subtitle?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(a["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",c," Period: "+Object(a["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",i," Quarter: "+Object(a["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",s,"Date: "+Object(a["toDisplayString"])(e.dayjs(e.date).format("DD/MMM/YYYY")),1)):Object(a["createCommentVNode"])("",!0),e.totalClients?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",d,"Total Clients: "+Object(a["toDisplayString"])(e.totalClients),1)):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(w,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(y,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(a["createSlots"])({_:2},[Object(a["renderList"])(e.$slots,(t,o)=>({name:o,fn:Object(a["withCtx"])(({filter:t})=>[Object(a["renderSlot"])(e.$slots,o,{filter:t})])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})]),_:3})}o("14d9");var p=o("d867"),b=o("ad8d"),m=o("5a0c"),f=o.n(m),j=o("8d56"),O=o("5969"),y=o("4971"),w=o("b5e4"),h=o("2ef0"),g=o("40e3"),C=Object(a["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],Layout:j["a"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:y["DataTable"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const o=Object(a["computed"])(()=>`${b["b"].getLocationName()} ${e.title} ${e.period?e.period:e.date}`),n=Object(a["computed"])(()=>{const a=[...e.actionButtons];return e.showRefreshButton&&a.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&a.push({label:"CSV",color:"primary",action:async(t,a,n,r)=>{var l;return Object(g["a"])({rows:a,filters:n,columns:r,quarter:null===(l=e.quarter)||void 0===l?void 0:l.label,period:e.period,filename:o.value})}}),a}),r=Object(a["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",gridSize:5,value:{startDate:e.period.split("-")[0],endDate:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:O["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",value:e.date}),t}),l=e=>"dateRange"in e&&new Date(e.dateRange.startDate)>new Date(e.dateRange.endDate)?Object(w["e"])("Invalid date range"):r.value.every(t=>!1===t.required||(Object(h["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(h["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(h["isEmpty"])(e))))?t("customFilter",e):void Object(w["e"])("Invalid filters"),c=e=>{t("drilldown",e)};return{actionBtns:n,filters:r,onCustomFilter:l,onDrilldown:c,dayjs:f.a}}}),D=o("d959"),v=o.n(D);const B=v()(C,[["render",u]]);t["a"]=B}}]);
//# sourceMappingURL=chunk-da0e543e.fe42bafa.js.map