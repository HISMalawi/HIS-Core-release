(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c27baa2"],{"3a8c":function(e,t,o){"use strict";function n(e){return parseInt(e.split("-")[2])||0}o.d(t,"a",(function(){return n}))},"40e3":function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var n=o("4971"),r=o("2ef0"),a=o("1c74"),l=o("5a0c"),c=o.n(l);function i(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function s({columns:e,rows:t,quarter:o,period:l,filters:s}){let d=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return d+="\n",d+=Object(n["sortRows"])(t,(null===s||void 0===s?void 0:s.sort)||[]).map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let o=Object(r["get"])(t,e.path);return"function"===typeof e.formatter&&o&&(o=e.formatter(o,t)),i(e.drillable&&Array.isArray(o)?o.length:o)}).join(",")).join("\n"),d+="\nDate Created:  "+c()().format("DD/MMM/YYYY HH:MM:ss"),o&&(d+="\nQuarter: "+o),l&&(d+="\nQuarter: "+l),d+="\ne-Mastercard Version : "+a["e"].getAppVersion(),d+="\nAPI Version "+a["e"].getApiVersion(),d+="\nSite UUID: "+a["e"].getSiteUUID(),d}function d(e){const t=new Blob([s(e)],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=window.URL.createObjectURL(t),o.setAttribute("download",e.filename+".csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}},"6bee":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function r(e,t,o,r,a,l){const c=Object(n["resolveComponent"])("base-report-table");return Object(n["openBlock"])(),Object(n["createBlock"])(c,{title:"Pregnant Patients Clinic Report","report-icon":"reports/pregnant.png",columns:e.columns,rows:e.rows,period:e.period,rowActionButtons:e.rowActionBtns,useDateRangeFilter:"",onCustomFilter:e.getData},null,8,["columns","rows","period","rowActionButtons","onCustomFilter"])}o("14d9");var a=o("b211"),l=o("afbc"),c=o("8727"),i=o("ad8d"),s=o("9283"),d=o("5a0c"),u=o.n(d),p=o("0011"),b=o("3a8c"),m=Object(n["defineComponent"])({name:"ClinicAppointments",components:{BaseReportTable:c["a"]},setup(){const e=Object(n["ref"])(""),t=Object(n["ref"])([]),o=[{path:"arv_number",label:"ARV Number",preSort:b["a"],initialSort:!0},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:p["g"]},{path:"birthdate",label:"Date of Birth",formatter:e=>u()(e).format(s["a"])}],r=async({dateRange:o})=>{await a["a"].show();const n=new i["b"];n.setStartDate(o.startDate),n.setEndDate(o.endDate),e.value=n.getDateIntervalPeriod(),t.value=await n.getPregnantWomen(),await a["a"].hide()},c=[{label:"Select",default:!0,action:e=>{l["a"].push("/emc/patient/"+e["patient_id"])}}];return{rows:t,columns:o,rowActionBtns:c,period:e,getData:r}}}),f=o("d959"),j=o.n(f);const O=j()(m,[["render",r]]);t["default"]=O},8727:function(e,t,o){"use strict";var n=o("7a23");const r=["src"],a=["innerHTML"],l=["innerHTML"],c={key:1},i={key:2},s={key:3},d={key:4};function u(e,t,o,u,p,b){const m=Object(n["resolveComponent"])("ion-col"),f=Object(n["resolveComponent"])("ion-row"),j=Object(n["resolveComponent"])("ion-grid"),O=Object(n["resolveComponent"])("ion-card-header"),y=Object(n["resolveComponent"])("data-table"),w=Object(n["resolveComponent"])("ion-card-content"),g=Object(n["resolveComponent"])("ion-card"),h=Object(n["resolveComponent"])("Layout");return Object(n["openBlock"])(),Object(n["createBlock"])(h,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(g,{style:{padding:"0 !important"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(O,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(j,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(n["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,r)]),_:1}),Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("h1",{innerHTML:e.title},null,8,a),e.subtitle?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(n["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",c," Period: "+Object(n["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",i," Quarter: "+Object(n["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",s,"Date: "+Object(n["toDisplayString"])(e.dayjs(e.date).format("DD/MMM/YYYY")),1)):Object(n["createCommentVNode"])("",!0),e.totalClients?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",d,"Total Clients: "+Object(n["toDisplayString"])(e.totalClients),1)):Object(n["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(w,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(y,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(n["createSlots"])({_:2},[Object(n["renderList"])(e.$slots,(t,o)=>({name:o,fn:Object(n["withCtx"])(({filter:t})=>[Object(n["renderSlot"])(e.$slots,o,{filter:t})])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})]),_:3})}o("14d9");var p=o("d867"),b=o("ad8d"),m=o("5a0c"),f=o.n(m),j=o("8d56"),O=o("5969"),y=o("4971"),w=o("b5e4"),g=o("2ef0"),h=o("40e3"),C=Object(n["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],Layout:j["a"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:y["DataTable"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const o=Object(n["computed"])(()=>`${b["b"].getLocationName()} ${e.title} ${e.period?e.period:e.date}`),r=Object(n["computed"])(()=>{const n=[...e.actionButtons];return e.showRefreshButton&&n.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&n.push({label:"CSV",color:"primary",action:async(t,n,r,a)=>{var l;return Object(h["a"])({rows:n,filters:r,columns:a,quarter:null===(l=e.quarter)||void 0===l?void 0:l.label,period:e.period,filename:o.value})}}),n}),a=Object(n["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",gridSize:5,value:{startDate:e.period.split("-")[0],endDate:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:O["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",value:e.date}),t}),l=e=>"dateRange"in e&&new Date(e.dateRange.startDate)>new Date(e.dateRange.endDate)?Object(w["e"])("Invalid date range"):a.value.every(t=>!1===t.required||(Object(g["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(g["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(g["isEmpty"])(e))))?t("customFilter",e):void Object(w["e"])("Invalid filters"),c=e=>{t("drilldown",e)};return{actionBtns:r,filters:a,onCustomFilter:l,onDrilldown:c,dayjs:f.a}}}),v=o("d959"),D=o.n(v);const B=D()(C,[["render",u]]);t["a"]=B}}]);
//# sourceMappingURL=chunk-2c27baa2.6b6a8524.js.map