(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abb8448a"],{"0bb4":function(e,t,o){},"3a8c":function(e,t,o){"use strict";function r(e){return parseInt(e.split("-")[2])||0}o.d(t,"a",(function(){return r}))},"40e3":function(e,t,o){"use strict";o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return h})),o.d(t,"b",(function(){return j}));o("88a7"),o("271a"),o("5494");var r=o("4971"),a=o("2ef0"),n=o("1c74"),l=o("5a0c"),s=o.n(l),c=o("8baf"),i=o("0da4"),d=o.n(i);function u(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/(\r\n|\n|\r)/gm,"").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function p(){const e=n["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}}function b(e,t){return t||!1!==e.exportable}function g(e,t=!1){return e.filter(e=>b(e,t)).map(e=>e.label)}function m(e,t,o=!1){return t.map(t=>e.filter(e=>b(e,o)).map(e=>{let o=Object(a["get"])(t,e.path);return"function"===typeof e.formatter&&o&&(o=e.formatter(o,t)),u(e.drillable&&Array.isArray(o)?o.length:o)}))}function f(e){const{columns:t,rows:o,quarter:a,period:l,filters:c,safeMode:i}=e,d=g(t,i),u=m(t,Object(r["sortRows"])(o,(null===c||void 0===c?void 0:c.sort)||[]),i);let p=d.join(",")+"\n";return p+=u.map(e=>e.join(",")).join("\n"),p+="\nDate Created:  "+s()().format("DD/MMM/YYYY HH:MM:ss"),a&&(p+="\nQuarter: "+a),l&&(p+="\nQuarter: "+l),p+="\ne-Mastercard Version : "+n["e"].getAppVersion(),p+="\nAPI Version "+n["e"].getApiVersion(),p+="\nSite UUID: "+n["e"].getSiteUUID(),p}function h(e){const t=new Blob([f(e)],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=window.URL.createObjectURL(t),o.setAttribute("download",e.filename+".csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}function j(e){const{filename:t,canHorizontalPageBreak:o,columns:a,rows:n,filters:l,safeMode:s}=e,i=[g(a,s)],b=m(a,Object(r["sortRows"])(n,(null===l||void 0===l?void 0:l.sort)||[]),s),f=s?p():{},h=new c["default"]({...f}),j=h.splitTextToSize(u(t),180),O=j.length<=1?20:10*j.length;h.text(j,14,10);const w={startY:O,head:i,body:b};o&&(w.tableWidth="wrap",w.horizontalPageBreak=!0,w.horizontalPageBreakRepeat=0),d()(h,w);const v=t+".pdf";h.save(v)}},"469e":function(e,t,o){"use strict";o.r(t);var r=o("7a23");function a(e,t,o,a,n,l){const s=Object(r["resolveComponent"])("base-report-table");return Object(r["openBlock"])(),Object(r["createBlock"])(s,{title:"PEPFAR TX RTT Report",subtitle:"Clients that have their clinical dispensation visit falling in the reporting period and \n      there is a difference of 30 or more days between their visit date and their previous appointment date / runout date","report-icon":"reports/restart.png","report-type":"PEPFAR",columns:e.columns,rows:e.rows,period:e.period,useDateRangeFilter:"","show-refresh-button":!1,onCustomFilter:e.fetchData,onDrilldown:e.onDrilldown,showIndices:""},null,8,["columns","rows","period","onCustomFilter","onDrilldown"])}o("13d5"),o("14d9");var n=o("b211"),l=o("8727"),s=o("da44"),c=o("564f"),i=o("23e6"),d=o("9283"),u=o("5a0c"),p=o.n(u),b=o("0011"),g=o("3a8c"),m=o("ade3"),f=o("2ef0"),h=o("ad8d"),j=o("9a5e");const O=["F","M"],w=["<3 months","3-5 months","6+ months"];class v extends j["a"]{constructor(){super(),Object(m["a"])(this,"aggregations",void 0),this.aggregations=[]}getClinicTxRtt(){return this.getReport(`programs/${this.programID}/reports/clinic_tx_rtt`)}getTxRttReport(){return this.getReport("tx_rtt")}buildReportData(e){return O.forEach(t=>{h["a"].forEach(o=>{const r=Object(f["get"])(e,`${o}.${t}`,[]);this.aggregations.push({gender:t,age_group:o,"<3 months":this.filterBy(r,e=>e<3),"3-5 months":this.filterBy(r,e=>e>=3&&e<6),"6+ months":this.filterBy(r,e=>e>=6)})})}),this.aggregations}filterBy(e,t){return e.filter(e=>t(e.months)).map(e=>e.patient_id)}aggregate(e,t){return this.aggregations.reduce((o,r)=>r.gender===e&&r[t]?[...o,...r[t]]:o,[])}getAggregatedMaleData(){const e={gender:"Male",age_group:"All"};return w.forEach(t=>e[t]=this.aggregate("M",t)),e}async getAggregatedMaternalStatus(){const e=w.reduce((e,t)=>[...e,{indicator:t,data:this.aggregate("F",t)}],[]),t=Object(f["uniq"])(e.reduce((e,t)=>[...e,...t.data],[])),o=await this.getMaternalStatus(t),r=o.FBf.concat(o.FP),a=[];for(const n of["FP","FNP","FBf"]){const t={gender:n,age_group:"All"};for(const a of w)t[a]=e.reduce((e,t)=>t.indicator===a?[...e,...t.data]:e,[]).filter(e=>"FNP"===n?!r.includes(e):o[n].includes(e));a.push(t)}return a}}var y=Object(r["defineComponent"])({name:"TBPrev",components:{BaseReportTable:l["a"]},setup(){const e=Object(r["ref"])("-"),t=Object(r["ref"])([]),o=new v,a=[{path:"age_group",label:"Age group"},{path:"gender",label:"Gender",formatter:b["i"]},{path:"cd4_less_than_200",label:"CD4 <200",drillable:!0},{path:"cd4_greater_than_or_equal_to_200",label:"CD4 >=200",drillable:!0},{path:"unknown_cd4_count",label:"Unknown CD4",drillable:!0},{path:"not_eligible_for_cd4",label:"Not Eligible for CD4",drillable:!0},{path:"returned_less_than_3_months",label:"Returned <3 mo",drillable:!0},{path:"returned_greater_than_3_months_and_less_than_6_months",label:"Returned 3-5 mo",drillable:!0},{path:"returned_greater_than_or_equal_to_6_months",label:"Returned 6+ mo",drillable:!0}],l=async({dateRange:r})=>{await n["a"].show(),o.setStartDate(r.startDate),o.setEndDate(r.endDate),e.value=o.getDateIntervalPeriod();const a=await o.getTxRttReport(),l=u(a);t.value=[...l.F.rows,...l.M.rows,m(l.M.aggregate),...await h(l.F.aggregate)],await n["a"].hide()},u=e=>{const t={M:{rows:[],aggregate:{}},F:{rows:[],aggregate:{}}};return e.reduce((e,t)=>{if("Unknown"!==t.age_group){const o=t.gender;e[o].rows.push(t),e[o].aggregate=Object.keys(t).reduce((e,o)=>Array.isArray(t[o])?{...e,[o]:[...e[o]||[],...t[o]]}:e,e[o].aggregate)}return e},t)},m=e=>({age_group:"All",gender:"Male",...e}),h=async e=>{const t=Object.values(e).flat(1),r=await o.getMaternalStatus(Object(f["uniq"])(t)),a=r.FBf.concat(r.FP);return["FP","FNP","FBf"].map(t=>Object.keys(e).reduce((o,n)=>({...o,[n]:e[n].filter(e=>"FNP"===t?!a.includes(e):r[t].includes(e))}),{age_group:"All",gender:t}))},j=async e=>{const t=[{path:"arv_number",label:"ARV Number",preSort:g["a"],initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:e=>p()(e).format(d["a"])},{path:"gender",label:"Gender",formatter:b["i"]},{path:"address",label:"Address"}],o=Object(r["ref"])([]),a=async()=>{for(const t of e.row[e.column.path]){const e=await i["a"].findByID(t),r=new i["a"](e);o.value.push({arv_number:r.getArvNumber(),birthdate:r.getBirthdate(),gender:r.getGender(),address:""+r.getCurrentVillage()})}};a(),await s["a"].show(c["a"],{columns:t,rows:o.value,title:`${e.row.age_group} ${e.column.label} ${e.row.gender}s`})};return{rows:t,columns:a,period:e,fetchData:l,onDrilldown:j}}}),_=o("6b0d"),C=o.n(_);const D=C()(y,[["render",a]]);t["default"]=D},"4e59":function(e,t,o){},"564f":function(e,t,o){"use strict";var r=o("7a23");function a(e,t,o,a,n,l){const s=Object(r["resolveComponent"])("IonIcon"),c=Object(r["resolveComponent"])("IonButton"),i=Object(r["resolveComponent"])("IonButtons"),d=Object(r["resolveComponent"])("IonTitle"),u=Object(r["resolveComponent"])("IonToolbar"),p=Object(r["resolveComponent"])("IonHeader"),b=Object(r["resolveComponent"])("data-table"),g=Object(r["resolveComponent"])("IonContent"),m=Object(r["resolveComponent"])("IonPage");return Object(r["openBlock"])(),Object(r["createBlock"])(m,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(i,{slot:"end"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(c,{slot:"end",onClick:t[0]||(t[0]=t=>e.modal.hide()),"icon-only":""},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(s,{icon:e.close},null,8,["icon"])]),_:1})]),_:1}),Object(r["createVNode"])(d,null,{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(g,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(b,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"row-actions-buttons":e.rowActionButtons,"actions-buttons":e.actionBtns,color:"custom"},null,8,["rows","async-rows","columns","row-actions-buttons","actions-buttons"])]),_:1})]),_:1})}o("14d9");var n=o("d867"),l=o("4971"),s=o("ff79"),c=o("da44"),i=o("5a0c"),d=o.n(i),u=o("40e3"),p=Object(r["defineComponent"])({name:"DrilldownTable",components:{DataTable:l["DataTable"],IonButton:n["IonButton"],IonPage:n["IonPage"],IonHeader:n["IonHeader"],IonContent:n["IonContent"],IonToolbar:n["IonToolbar"],IonButtons:n["IonButtons"],IonTitle:n["IonTitle"],IonIcon:n["IonIcon"]},props:{title:{type:String,default:"Report"},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},columns:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},actionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},period:{type:String,default:""}},setup(e){const t=Object(r["computed"])(()=>{const t=[...e.actionButtons];return e.canExportCsv&&t.push({label:"CSV",color:"primary",action:async(t,o,r,a)=>Object(u["a"])({rows:o,filters:r,columns:a,period:e.period.includes("Custom")?e.period.substring(6):e.period,filename:`${e.title}-${d()().format("DD-MMM-YYYY")}`})}),t});return{close:s["close"],modal:c["a"],actionBtns:t}}}),b=o("6b0d"),g=o.n(b);const m=g()(p,[["render",a]]);t["a"]=m},"5f0b":function(e,t,o){},6361:function(e,t,o){"use strict";o("0bb4")},7717:function(e,t,o){"use strict";var r=o("7a23");const a={class:"date-picker-wrapper"},n=["value"],l=["value"];function s(e,t,o,s,c,i){const d=Object(r["resolveComponent"])("ion-icon"),u=Object(r["resolveComponent"])("date-picker");return Object(r["openBlock"])(),Object(r["createBlock"])(u,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(r["withCtx"])(({inputValue:t,inputEvents:o})=>[Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(r["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,n),Object(r["createVNode"])(d,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(r["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,l)])]),_:1},8,["modelValue","masks","popover"])}var c=o("d867"),i=o("ff79"),d=o("5db2"),u=o("9283"),p=Object(r["defineComponent"])({name:"DateRangePicker",components:{IonIcon:c["IonIcon"],DatePicker:d["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(r["ref"])({input:"DD/MMM/YYYY"}),a=Object(r["ref"])({visibility:"click"}),n=Object(r["computed"])({get:()=>e.modelValue,set:({start:e,end:o})=>t("update:modelValue",{start:u["c"].toStandardHisFormat(e),end:u["c"].toStandardHisFormat(o)})});return{arrowForward:i["arrowForward"],range:n,masks:o,popover:a}}}),b=(o("6361"),o("6b0d")),g=o.n(b);const m=g()(p,[["render",s],["__scopeId","data-v-4991088d"]]);t["a"]=m},8727:function(e,t,o){"use strict";var r=o("7a23");const a=["src"],n=["innerHTML"],l=["innerHTML"],s={key:1},c={key:2},i={key:3},d={key:4};function u(e,t,o,u,p,b){const g=Object(r["resolveComponent"])("ion-col"),m=Object(r["resolveComponent"])("ion-row"),f=Object(r["resolveComponent"])("ion-grid"),h=Object(r["resolveComponent"])("ion-card-header"),j=Object(r["resolveComponent"])("date-range-picker"),O=Object(r["resolveComponent"])("date-picker"),w=Object(r["resolveComponent"])("data-table"),v=Object(r["resolveComponent"])("ion-card-content"),y=Object(r["resolveComponent"])("ion-card");return Object(r["openBlock"])(),Object(r["createBlock"])(y,{style:{padding:"0 !important"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(h,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(f,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(m,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(g,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(r["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,a)]),_:1}),Object(r["createVNode"])(g,null,{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("h1",{innerHTML:e.title},null,8,n),e.subtitle?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(r["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",s," Period: "+Object(r["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",c," Quarter: "+Object(r["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",i,"Date: "+Object(r["toDisplayString"])(e.date),1)):Object(r["createCommentVNode"])("",!0),e.totalClients?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",d,"Total Clients: "+Object(r["toDisplayString"])(e.totalClients),1)):Object(r["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(v,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(w,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(r["createSlots"])({dateRange:Object(r["withCtx"])(()=>[Object(r["createVNode"])(j,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(r["withCtx"])(()=>[Object(r["createVNode"])(O,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(r["renderList"])(e.$slots,(t,o)=>({name:o,fn:Object(r["withCtx"])(({filter:t})=>[Object(r["renderSlot"])(e.$slots,o,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}o("14d9");var p=o("d867"),b=o("ad8d"),g=o("5a0c"),m=o.n(g),f=o("5969"),h=o("4971"),j=o("b5e4"),O=o("2ef0"),w=o("40e3"),v=o("7717");const y=["value"];function _(e,t,o,a,n,l){const s=Object(r["resolveComponent"])("date-picker",!0);return Object(r["openBlock"])(),Object(r["createBlock"])(s,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(r["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:e,class:"box date-picker-input"},Object(r["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,y)]),_:1},8,["modelValue","masks"])}var C=o("5db2"),D=o("9283"),R=Object(r["defineComponent"])({name:"DTDatePicker",components:{DatePicker:C["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(r["ref"])({input:"DD/MMM/YYYY"}),a=Object(r["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",D["c"].toStandardHisFormat(e))});return{date:a,masks:o}}}),I=(o("9a25"),o("6b0d")),k=o.n(I);const B=k()(R,[["render",_],["__scopeId","data-v-2b798694"]]);var F=B,x=o("7f35"),M=Object(r["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:h["DataTable"],DateRangePicker:v["a"],DatePicker:F},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const o=Object(r["ref"])({}),a=Object(r["ref"])(""),n=Object(r["computed"])(()=>Object(w["c"])(`\n      ${e.reportType} \n      ${b["b"].getLocationName()} \n      ${(e.filename||e.title).replace(e.reportType,"")} \n      ${e.period?e.period:e.date}\n    `)),l=Object(r["computed"])(()=>{var t,o;const r=[...e.actionButtons];return e.showRefreshButton&&r.push(d()),e.canExportCsv&&r.push(u(n.value,null===(t=e.quarter)||void 0===t?void 0:t.label,e.period)),e.canExportPDF&&r.push(p(n.value,null===(o=e.quarter)||void 0===o?void 0:o.label,e.period)),r}),s=Object(r["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:f["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),c=e=>{if("dateRange"in e){if(Object(O["isEmpty"])(o.value))return Object(j["e"])("Invalid date range");e.dateRange={startDate:o.value.start,endDate:o.value.end}}if("date"in e){if(Object(O["isEmpty"])(a.value))return Object(j["e"])("Invalid date");e.date=a.value}if(s.value.every(t=>!1===t.required||(Object(O["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(O["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(O["isEmpty"])(e)))))return t("customFilter",e);Object(j["e"])("Invalid filters")},i=e=>{t("drilldown",e)},d=()=>({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),u=(e,t,o)=>({label:"CSV",color:"primary",action:async(r,a,n,l)=>{Object(w["a"])({rows:a,filters:n,columns:l,quarter:t,period:o,filename:e})}}),p=(t,o,r)=>({label:"PDF",color:"primary",action:async(a,n,l,s)=>{let c=!1;if(e.useSecureExport){const e=await Object(x["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");c="Secure PDF"===e}Object(w["b"])({rows:n,filters:l,columns:s,quarter:o,period:r,filename:t,safeMode:c})}});return{actionBtns:l,filters:s,onCustomFilter:c,onDrilldown:i,dayjs:m.a,dateRange:o,pickerDate:a}}});o("f522");const V=k()(M,[["render",u],["__scopeId","data-v-4840dd5c"]]);t["a"]=V},"9a25":function(e,t,o){"use strict";o("5f0b")},"9a5e":function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"a",(function(){return d}));var r=o("ade3"),a=(o("14d9"),o("13d5"),o("5969")),n=o("bef6"),l=o("2ef0"),s=o("ad8d");const c=["F","M"],i=["Died","IIT <3 mo","IIT 3-5 mo","IIT 6+ mo","Transferred out","Refused (Stopped)"];class d extends a["a"]{constructor(){super(),Object(r["a"])(this,"org",void 0),Object(r["a"])(this,"initializeArvRefillReportTables",void 0),this.org="pepfar",this.initializeArvRefillReportTables=!0}initArvRefillPeriod(e){this.initializeArvRefillReportTables=e}setOrg(e){this.org=e}getClinicTxRtt(){return this.getReport(`programs/${this.programID}/reports/clinic_tx_rtt`)}getTxMMDClientLevelData(e){const t=n["a"].parameterizeObjToString({start_date:this.startDate,end_date:this.endDate,program_id:this.programID,date:this.date,org:this.org}),o="tx_mmd_client_level_data?"+t;return a["a"].postJson(o,{patient_ids:e})}remapTxClientLevelData(e){return e.map(e=>{let t=null;const o=[];for(const r in e){const a=Object.values(e[r]);a.forEach(e=>{for(const r in e){const a=e[r];t||(t={id:a.arv_number,dob:a.birthdate,dispenseDate:a.start_date}),o.push({name:a.drug_name,quantity:a.quantity,dose:a.dose_per_day})}})}return{...t,drugs:o}})}getTxCurrMMDReport(e,t){return this.getReport("arv_refill_periods",{org:this.org,min_age:""+e,max_age:""+t,initialize_tables:""+this.initializeArvRefillReportTables})}getTxMlReport(){return this.getReport("tx_ml")}getTxNewReport(e){const t={};return t.rebuild=(null===e||void 0===e?void 0:e.toString())||"false",this.getReport(`programs/${this.programID}/reports/tx_new`,t)}getTxRttReport(){return this.getReport("tx_rtt")}buildTxMlReportData(e){const t=[];return c.forEach(o=>{s["a"].forEach(r=>{const a={gender:o,age_group:r};i.forEach((t,n)=>{a[t]=Object(l["get"])(e,`${r}.${o}[${n}]`,[])}),t.push(a)})}),t}aggregateTxML(e,t,o){return Object.values(e).reduce((e,r)=>r[t]?[...r[t][i.indexOf(o)],...e]:e,[])}getAggregatedTxMLMaleData(e){const t={gender:"Male",age_group:"All"};for(const o of i)t[o]=this.aggregateTxML(e,"M",o);return t}async getAggregatedTxMLMaternalStatus(e){const t=i.reduce((t,o)=>[...t,{indicator:o,data:this.aggregateTxML(e,"F",o)}],[]),o=Object(l["uniq"])(t.reduce((e,t)=>[...e,...t.data],[]).map(e=>e.patient_id)),r=await this.getMaternalStatus(o),a=r.FBf.concat(r.FP),n=[];for(const l of["FP","FNP","FBf"]){const e={gender:l,age_group:"All"};for(const o of i)e[o]=t.reduce((e,t)=>t.indicator===o?[...e,...t.data]:e,[]).filter(e=>"FNP"===l?!a.includes(e.patient_id):r[l].includes(e.patient_id));n.push(e)}return n}}},da44:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r=o("d867");const a={async show(e,t,o="custom-modal",a=!0){const n=await r["modalController"].create({component:e,cssClass:o,backdropDismiss:a,componentProps:t});n.present();const{data:l}=await n.onWillDismiss();if(l)return l},async hide(e){await r["modalController"].dismiss(e)}}},f522:function(e,t,o){"use strict";o("4e59")}}]);
//# sourceMappingURL=chunk-abb8448a.834901bd.js.map