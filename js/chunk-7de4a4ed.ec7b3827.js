(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7de4a4ed"],{"0bb4":function(e,t,o){},"40e3":function(e,t,o){"use strict";o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return j})),o.d(t,"b",(function(){return O}));o("88a7"),o("271a"),o("5494");var r=o("4971"),n=o("2ef0"),a=o("1c74"),c=o("5a0c"),l=o.n(c),s=o("8baf"),i=o("0da4"),d=o.n(i);function u(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/(\r\n|\n|\r)/gm,"").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function p(){const e=a["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}}function m(e,t){return t||!1!==e.exportable}function b(e,t=!1){return e.filter(e=>m(e,t)).map(e=>e.label)}function f(e,t,o=!1){return t.map(t=>e.filter(e=>m(e,o)).map(e=>{let o=Object(n["get"])(t,e.path);return"function"===typeof e.formatter&&o&&(o=e.formatter(o,t)),u(e.drillable&&Array.isArray(o)?o.length:o)}))}function g(e){const{columns:t,rows:o,quarter:n,period:c,filters:s,safeMode:i}=e,d=b(t,i),u=f(t,Object(r["sortRows"])(o,(null===s||void 0===s?void 0:s.sort)||[]),i);let p=d.join(",")+"\n";return p+=u.map(e=>e.join(",")).join("\n"),p+="\nDate Created:  "+l()().format("DD/MMM/YYYY HH:MM:ss"),n&&(p+="\nQuarter: "+n),c&&(p+="\nQuarter: "+c),p+="\ne-Mastercard Version : "+a["e"].getAppVersion(),p+="\nAPI Version "+a["e"].getApiVersion(),p+="\nSite UUID: "+a["e"].getSiteUUID(),p}function j(e){const t=new Blob([g(e)],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=window.URL.createObjectURL(t),o.setAttribute("download",e.filename+".csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}function O(e){const{filename:t,canHorizontalPageBreak:o,columns:n,rows:a,filters:c,safeMode:l}=e,i=[b(n,l)],m=f(n,Object(r["sortRows"])(a,(null===c||void 0===c?void 0:c.sort)||[]),l),g=l?p():{},j=new s["default"]({...g}),O=j.splitTextToSize(u(t),180),h=O.length<=1?20:10*O.length;j.text(O,14,10);const y={startY:h,head:i,body:m};o&&(y.tableWidth="wrap",y.horizontalPageBreak=!0,y.horizontalPageBreakRepeat=0),d()(j,y);const w=t+".pdf";j.save(w)}},"4e59":function(e,t,o){},"5f0b":function(e,t,o){},6361:function(e,t,o){"use strict";o("0bb4")},7717:function(e,t,o){"use strict";var r=o("7a23");const n={class:"date-picker-wrapper"},a=["value"],c=["value"];function l(e,t,o,l,s,i){const d=Object(r["resolveComponent"])("ion-icon"),u=Object(r["resolveComponent"])("date-picker");return Object(r["openBlock"])(),Object(r["createBlock"])(u,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(r["withCtx"])(({inputValue:t,inputEvents:o})=>[Object(r["createElementVNode"])("div",n,[Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(r["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,a),Object(r["createVNode"])(d,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(r["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,c)])]),_:1},8,["modelValue","masks","popover"])}var s=o("d867"),i=o("ff79"),d=o("0261"),u=o("9283"),p=Object(r["defineComponent"])({name:"DateRangePicker",components:{IonIcon:s["IonIcon"],DatePicker:d["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(r["ref"])({input:"DD/MMM/YYYY"}),n=Object(r["ref"])({visibility:"click"}),a=Object(r["computed"])({get:()=>e.modelValue,set:({start:e,end:o})=>t("update:modelValue",{start:u["c"].toStandardHisFormat(e),end:u["c"].toStandardHisFormat(o)})});return{arrowForward:i["arrowForward"],range:a,masks:o,popover:n}}}),m=(o("6361"),o("6b0d")),b=o.n(m);const f=b()(p,[["render",l],["__scopeId","data-v-4991088d"]]);t["a"]=f},8727:function(e,t,o){"use strict";var r=o("7a23");const n=["src"],a=["innerHTML"],c=["innerHTML"],l={key:1},s={key:2},i={key:3},d={key:4};function u(e,t,o,u,p,m){const b=Object(r["resolveComponent"])("ion-col"),f=Object(r["resolveComponent"])("ion-row"),g=Object(r["resolveComponent"])("ion-grid"),j=Object(r["resolveComponent"])("ion-card-header"),O=Object(r["resolveComponent"])("date-range-picker"),h=Object(r["resolveComponent"])("date-picker"),y=Object(r["resolveComponent"])("data-table"),w=Object(r["resolveComponent"])("ion-card-content"),v=Object(r["resolveComponent"])("ion-card");return Object(r["openBlock"])(),Object(r["createBlock"])(v,{style:{padding:"0 !important"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(j,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(g,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(f,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(b,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(r["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,n)]),_:1}),Object(r["createVNode"])(b,null,{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("h1",{innerHTML:e.title},null,8,a),e.subtitle?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,c)):Object(r["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",l," Period: "+Object(r["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",s," Quarter: "+Object(r["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",i,"Date: "+Object(r["toDisplayString"])(e.date),1)):Object(r["createCommentVNode"])("",!0),e.totalClients?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",d,"Total Clients: "+Object(r["toDisplayString"])(e.totalClients),1)):Object(r["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(w,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(y,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(r["createSlots"])({dateRange:Object(r["withCtx"])(()=>[Object(r["createVNode"])(O,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(r["withCtx"])(()=>[Object(r["createVNode"])(h,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(r["renderList"])(e.$slots,(t,o)=>({name:o,fn:Object(r["withCtx"])(({filter:t})=>[Object(r["renderSlot"])(e.$slots,o,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}o("14d9");var p=o("d867"),m=o("ad8d"),b=o("5a0c"),f=o.n(b),g=o("5969"),j=o("4971"),O=o("b5e4"),h=o("2ef0"),y=o("40e3"),w=o("7717");const v=["value"];function P(e,t,o,n,a,c){const l=Object(r["resolveComponent"])("date-picker",!0);return Object(r["openBlock"])(),Object(r["createBlock"])(l,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(r["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:e,class:"box date-picker-input"},Object(r["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,v)]),_:1},8,["modelValue","masks"])}var D=o("0261"),k=o("9283"),A=Object(r["defineComponent"])({name:"DTDatePicker",components:{DatePicker:D["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(r["ref"])({input:"DD/MMM/YYYY"}),n=Object(r["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",k["c"].toStandardHisFormat(e))});return{date:n,masks:o}}}),R=(o("9a25"),o("6b0d")),C=o.n(R);const V=C()(A,[["render",P],["__scopeId","data-v-2b798694"]]);var B=V,F=o("7f35"),I=Object(r["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:j["DataTable"],DateRangePicker:w["a"],DatePicker:B},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const o=Object(r["ref"])({}),n=Object(r["ref"])(""),a=Object(r["computed"])(()=>Object(y["c"])(`\n      ${e.reportType} \n      ${m["b"].getLocationName()} \n      ${(e.filename||e.title).replace(e.reportType,"")} \n      ${e.period?e.period:e.date}\n    `)),c=Object(r["computed"])(()=>{var t,o;const r=[...e.actionButtons];return e.showRefreshButton&&r.push(d()),e.canExportCsv&&r.push(u(a.value,null===(t=e.quarter)||void 0===t?void 0:t.label,e.period)),e.canExportPDF&&r.push(p(a.value,null===(o=e.quarter)||void 0===o?void 0:o.label,e.period)),r}),l=Object(r["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:g["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),s=e=>{if("dateRange"in e){if(Object(h["isEmpty"])(o.value))return Object(O["e"])("Invalid date range");e.dateRange={startDate:o.value.start,endDate:o.value.end}}if("date"in e){if(Object(h["isEmpty"])(n.value))return Object(O["e"])("Invalid date");e.date=n.value}if(l.value.every(t=>!1===t.required||(Object(h["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(h["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(h["isEmpty"])(e)))))return t("customFilter",e);Object(O["e"])("Invalid filters")},i=e=>{t("drilldown",e)},d=()=>({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),u=(e,t,o)=>({label:"CSV",color:"primary",action:async(r,n,a,c)=>{Object(y["a"])({rows:n,filters:a,columns:c,quarter:t,period:o,filename:e})}}),p=(t,o,r)=>({label:"PDF",color:"primary",action:async(n,a,c,l)=>{let s=!1;if(e.useSecureExport){const e=await Object(F["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");s="Secure PDF"===e}Object(y["b"])({rows:a,filters:c,columns:l,quarter:o,period:r,filename:t,safeMode:s})}});return{actionBtns:c,filters:l,onCustomFilter:s,onDrilldown:i,dayjs:f.a,dateRange:o,pickerDate:n}}});o("f522");const M=C()(I,[["render",u],["__scopeId","data-v-4840dd5c"]]);t["a"]=M},"87e7":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return c})),o.d(t,"e",(function(){return l})),o.d(t,"a",(function(){return s})),o.d(t,"d",(function(){return i}));var r=o("ade3"),n=o("5969");const a=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4PP","4PA","9PP","9PA","11PP","11PA","12PP","12PA","14PP","14PA","15PP","15PA","16P","17PP","17PA"],c=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4P","4PP","4PA","9P","9PP","9PA","11P","11PP","11PA","12PP","12PA","14P","14PP","14PA","15P","15PP","15PA","16P","17P","17PP","17PA"],l=["10 - 13.9 Kg","14 - 19.9 Kg","20 - 24.9 Kg","25 - 29.9 Kg","3 - 3.9 Kg","30 - 34.9 Kg","35 - 39.9 Kg","4 - 4.9 Kg","40 Kg +","40 - 49.9 Kg","50 Kg +","6 - 9.9 Kg","Unknown"],s=["pellets","tablets","granules"];class i extends n["a"]{constructor(){super(),Object(r["a"])(this,"type",void 0),this.type="pepfar"}setReportType(e){this.type=e}getTptNewInitiations(){return this.getReport(`programs/${this.programID}/reports/tpt_newly_initiated`)}getRegimenFormulationReport(e,t){return this.getReport(`programs/${this.programID}/reports/regimens_and_formulations`,{regimen:e,formulation:t})}getRegimenReport(){return this.getReport("regimen_report",{type:this.type})}getRegimenSwitchReport(e=!1){return this.getReport("regimen_switch",{pepfar:e})}getRegimensByWeight(){return this.getReport(`programs/${this.programID}/reports/regimens_by_weight_and_gender`)}getSCReport(e=!1){return this.getReport("sc_arvdisp",{pepfar:e})}}},"9a25":function(e,t,o){"use strict";o("5f0b")},b9fb:function(e,t,o){"use strict";o.r(t);var r=o("7a23");function n(e,t,o,n,a,c){const l=Object(r["resolveComponent"])("base-report-table");return Object(r["openBlock"])(),Object(r["createBlock"])(l,{title:"MoH Regimen Distribution By Weight Report","report-icon":"reports/electronics.png","report-type":"MOH",columns:e.columns,rows:e.rows,period:e.period,useDateRangeFilter:"",onCustomFilter:e.fetchData,onRegenerate:e.onRegenerate},null,8,["columns","rows","period","onCustomFilter","onRegenerate"])}o("14d9");var a=o("b211"),c=o("8727"),l=o("87e7"),s=o("5a0c"),i=o.n(s),d=o("0011"),u=Object(r["defineComponent"])({name:"RegimenDistribution",components:{BaseReportTable:c["a"]},setup(){const e=Object(r["ref"])("-"),t=Object(r["ref"])([]),o=[{path:"weight_band",label:"Weight Band"},{path:"gender",label:"Gender",formatter:d["i"]},...l["c"].map(e=>({path:e,label:e})),{path:"N/A",label:"Unknown"},{path:"total",label:"Total"}],n=async({dateRange:o})=>{await a["a"].show();const r=new l["d"];r.setStartDate(o.startDate),r.setEndDate(o.endDate),e.value=r.getDateIntervalPeriod();const n=await r.getRegimensByWeight(),c=[];for(const e of l["e"])for(const t of["females","males"]){const o=n.find(t=>t.weight===e);if(o){const r={weight_band:e,gender:"females"===t?"Female":"Male",total:0};for(const e of[...l["c"],"N/A"]){const n=o[t].find(t=>Object.keys(t)[0]===e);n?(r[e]=n[e],r.total+=n[e]):r[e]=0}c.push(r)}}t.value=c,await a["a"].hide()},c=async()=>{const[t,o]=e.value.split("-");t&&o&&n({dateRange:{startDate:i()(t).format("YYYY-MM-DD"),endDate:i()(o).format("YYYY-MM-DD")}})};return{rows:t,columns:o,period:e,fetchData:n,onRegenerate:c}}}),p=o("6b0d"),m=o.n(p);const b=m()(u,[["render",n]]);t["default"]=b},f522:function(e,t,o){"use strict";o("4e59")}}]);
//# sourceMappingURL=chunk-7de4a4ed.ec7b3827.js.map