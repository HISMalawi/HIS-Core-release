(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b21e093"],{"03f6":function(e,t,a){"use strict";a.r(t);var o=a("7a23"),r=a("b211"),n=a("8727"),l=a("9283"),c=a("b5e4"),s=a("c1e4"),i=Object(o["defineComponent"])({__name:"SystemUsageReport",setup(e){const t=Object(o["ref"])(""),a=Object(o["ref"])(""),i=Object(o["computed"])(()=>t.value&&a.value?`${l["c"].toStandardHisDisplayFormat(t.value)} - \n      ${l["c"].toStandardHisDisplayFormat(a.value)}`:""),d=Object(o["ref"])([]),u=[{path:"given_name",label:"First name"},{path:"family_name",label:"Last name"},{path:"role",label:"Role"},{path:"registered_on",label:"Registered on",formatter:l["c"].toStandardHisDisplayFormat},{path:"encounters",label:"Encounters Created"}],p=async e=>{if(e&&"dateRange"in e&&(t.value=e.dateRange.startDate,a.value=e.dateRange.endDate),!t.value&&!a.value)return Object(c["e"])("Invalid report date");r["a"].show();try{d.value=await s["a"].getSystemUsageByUsers(t.value,a.value)}catch(o){Object(c["e"])("Failed to load report data"),console.error(o)}r["a"].hide()};return(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(n["a"],{title:"User System Usage Report","report-icon":"reports/line-chart.png",columns:u,rows:d.value,period:i.value,useDateRangeFilter:"",onCustomFilter:p,onRegenerate:p},null,8,["rows","period"]))}});const d=i;t["default"]=d},"0bb4":function(e,t,a){},"40e3":function(e,t,a){"use strict";a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return g}));a("88a7"),a("271a"),a("5494");var o=a("4971"),r=a("2ef0"),n=a("1c74"),l=a("5a0c"),c=a.n(l),s=a("8baf"),i=a("0da4"),d=a.n(i);function u(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/(\r\n|\n|\r)/gm,"").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function p(){const e=n["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}}function b(e,t){return t||!1!==e.exportable}function m(e,t=!1){return e.filter(e=>b(e,t)).map(e=>e.label)}function f(e,t,a=!1){return t.map(t=>e.filter(e=>b(e,a)).map(e=>{let a=Object(r["get"])(t,e.path);return"function"===typeof e.formatter&&a&&(a=e.formatter(a,t)),u(e.drillable&&Array.isArray(a)?a.length:a)}))}function j(e){const{columns:t,rows:a,quarter:r,period:l,filters:s,safeMode:i}=e,d=m(t,i),u=f(t,Object(o["sortRows"])(a,(null===s||void 0===s?void 0:s.sort)||[]),i);let p=d.join(",")+"\n";return p+=u.map(e=>e.join(",")).join("\n"),p+="\nDate Created:  "+c()().format("DD/MMM/YYYY HH:MM:ss"),r&&(p+="\nQuarter: "+r),l&&(p+="\nQuarter: "+l),p+="\ne-Mastercard Version : "+n["e"].getAppVersion(),p+="\nAPI Version "+n["e"].getApiVersion(),p+="\nSite UUID: "+n["e"].getSiteUUID(),p}function O(e){const t=new Blob([j(e)],{type:"text/csv;charset=utf-8;"}),a=document.createElement("a");a.href=window.URL.createObjectURL(t),a.setAttribute("download",e.filename+".csv"),document.body.appendChild(a),a.click(),document.body.removeChild(a)}function g(e){const{filename:t,canHorizontalPageBreak:a,columns:r,rows:n,filters:l,safeMode:c}=e,i=[m(r,c)],b=f(r,Object(o["sortRows"])(n,(null===l||void 0===l?void 0:l.sort)||[]),c),j=c?p():{},O=new s["default"]({...j}),g=O.splitTextToSize(u(t),180),v=g.length<=1?20:10*g.length;O.text(g,14,10);const y={startY:v,head:i,body:b};a&&(y.tableWidth="wrap",y.horizontalPageBreak=!0,y.horizontalPageBreakRepeat=0),d()(O,y);const w=t+".pdf";O.save(w)}},"4e59":function(e,t,a){},"5f0b":function(e,t,a){},6361:function(e,t,a){"use strict";a("0bb4")},7717:function(e,t,a){"use strict";var o=a("7a23");const r={class:"date-picker-wrapper"},n=["value"],l=["value"];function c(e,t,a,c,s,i){const d=Object(o["resolveComponent"])("ion-icon"),u=Object(o["resolveComponent"])("date-picker");return Object(o["openBlock"])(),Object(o["createBlock"])(u,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(o["withCtx"])(({inputValue:t,inputEvents:a})=>[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(o["toHandlers"])(a.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,n),Object(o["createVNode"])(d,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(o["toHandlers"])(a.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,l)])]),_:1},8,["modelValue","masks","popover"])}var s=a("d867"),i=a("ff79"),d=a("5db2"),u=a("9283"),p=Object(o["defineComponent"])({name:"DateRangePicker",components:{IonIcon:s["IonIcon"],DatePicker:d["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const a=Object(o["ref"])({input:"DD/MMM/YYYY"}),r=Object(o["ref"])({visibility:"click"}),n=Object(o["computed"])({get:()=>e.modelValue,set:({start:e,end:a})=>t("update:modelValue",{start:u["c"].toStandardHisFormat(e),end:u["c"].toStandardHisFormat(a)})});return{arrowForward:i["arrowForward"],range:n,masks:a,popover:r}}}),b=(a("6361"),a("6b0d")),m=a.n(b);const f=m()(p,[["render",c],["__scopeId","data-v-4991088d"]]);t["a"]=f},8727:function(e,t,a){"use strict";var o=a("7a23");const r=["src"],n=["innerHTML"],l=["innerHTML"],c={key:1},s={key:2},i={key:3},d={key:4};function u(e,t,a,u,p,b){const m=Object(o["resolveComponent"])("ion-col"),f=Object(o["resolveComponent"])("ion-row"),j=Object(o["resolveComponent"])("ion-grid"),O=Object(o["resolveComponent"])("ion-card-header"),g=Object(o["resolveComponent"])("date-range-picker"),v=Object(o["resolveComponent"])("date-picker"),y=Object(o["resolveComponent"])("data-table"),w=Object(o["resolveComponent"])("ion-card-content"),h=Object(o["resolveComponent"])("ion-card");return Object(o["openBlock"])(),Object(o["createBlock"])(h,{style:{padding:"0 !important"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(o["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,r)]),_:1}),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h1",{innerHTML:e.title},null,8,n),e.subtitle?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(o["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",c," Period: "+Object(o["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",s," Quarter: "+Object(o["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",i,"Date: "+Object(o["toDisplayString"])(e.date),1)):Object(o["createCommentVNode"])("",!0),e.totalClients?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",d,"Total Clients: "+Object(o["toDisplayString"])(e.totalClients),1)):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(w,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(y,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(o["createSlots"])({dateRange:Object(o["withCtx"])(()=>[Object(o["createVNode"])(g,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(o["renderList"])(e.$slots,(t,a)=>({name:a,fn:Object(o["withCtx"])(({filter:t})=>[Object(o["renderSlot"])(e.$slots,a,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}a("14d9");var p=a("d867"),b=a("ad8d"),m=a("5a0c"),f=a.n(m),j=a("5969"),O=a("4971"),g=a("b5e4"),v=a("2ef0"),y=a("40e3"),w=a("7717");const h=["value"];function D(e,t,a,r,n,l){const c=Object(o["resolveComponent"])("date-picker",!0);return Object(o["openBlock"])(),Object(o["createBlock"])(c,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(o["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:e,class:"box date-picker-input"},Object(o["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,h)]),_:1},8,["modelValue","masks"])}var k=a("5db2"),C=a("9283"),V=Object(o["defineComponent"])({name:"DTDatePicker",components:{DatePicker:k["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const a=Object(o["ref"])({input:"DD/MMM/YYYY"}),r=Object(o["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",C["c"].toStandardHisFormat(e))});return{date:r,masks:a}}}),R=(a("9a25"),a("6b0d")),B=a.n(R);const F=B()(V,[["render",D],["__scopeId","data-v-2b798694"]]);var S=F,I=a("7f35"),M=Object(o["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:O["DataTable"],DateRangePicker:w["a"],DatePicker:S},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const a=Object(o["ref"])({}),r=Object(o["ref"])(""),n=Object(o["computed"])(()=>Object(y["c"])(`\n      ${e.reportType} \n      ${b["b"].getLocationName()} \n      ${(e.filename||e.title).replace(e.reportType,"")} \n      ${e.period?e.period:e.date}\n    `)),l=Object(o["computed"])(()=>{var t,a;const o=[...e.actionButtons];return e.showRefreshButton&&o.push(d()),e.canExportCsv&&o.push(u(n.value,null===(t=e.quarter)||void 0===t?void 0:t.label,e.period)),e.canExportPDF&&o.push(p(n.value,null===(a=e.quarter)||void 0===a?void 0:a.label,e.period)),o}),c=Object(o["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:j["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),s=e=>{if("dateRange"in e){if(Object(v["isEmpty"])(a.value))return Object(g["e"])("Invalid date range");e.dateRange={startDate:a.value.start,endDate:a.value.end}}if("date"in e){if(Object(v["isEmpty"])(r.value))return Object(g["e"])("Invalid date");e.date=r.value}if(c.value.every(t=>!1===t.required||(Object(v["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(v["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(v["isEmpty"])(e)))))return t("customFilter",e);Object(g["e"])("Invalid filters")},i=e=>{t("drilldown",e)},d=()=>({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),u=(e,t,a)=>({label:"CSV",color:"primary",action:async(o,r,n,l)=>{Object(y["a"])({rows:r,filters:n,columns:l,quarter:t,period:a,filename:e})}}),p=(t,a,o)=>({label:"PDF",color:"primary",action:async(r,n,l,c)=>{let s=!1;if(e.useSecureExport){const e=await Object(I["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");s="Secure PDF"===e}Object(y["b"])({rows:n,filters:l,columns:c,quarter:a,period:o,filename:t,safeMode:s})}});return{actionBtns:l,filters:c,onCustomFilter:s,onDrilldown:i,dayjs:f.a,dateRange:a,pickerDate:r}}});a("f522");const P=B()(M,[["render",u],["__scopeId","data-v-4840dd5c"]]);t["a"]=P},"9a25":function(e,t,a){"use strict";a("5f0b")},f522:function(e,t,a){"use strict";a("4e59")}}]);
//# sourceMappingURL=chunk-7b21e093.dc9997ef.js.map