(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c503d9c"],{"0bb4":function(e,t,o){},"3a8c":function(e,t,o){"use strict";function a(e){return parseInt(e.split("-")[2])||0}o.d(t,"a",(function(){return a}))},"40e3":function(e,t,o){"use strict";o.d(t,"c",(function(){return d})),o.d(t,"a",(function(){return j})),o.d(t,"b",(function(){return g}));var a=o("4971"),n=o("2ef0"),r=o("1c74"),l=o("5a0c"),c=o.n(l),i=o("8baf"),s=o("0da4"),u=o.n(s);function d(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/(\r\n|\n|\r)/gm,"").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function p(){const e=r["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}}function b(e,t){return t||!1!==e.exportable}function m(e,t=!1){return e.filter(e=>b(e,t)).map(e=>e.label)}function f(e,t,o=!1){return t.map(t=>e.filter(e=>b(e,o)).map(e=>{let o=Object(n["get"])(t,e.path);return"function"===typeof e.formatter&&o&&(o=e.formatter(o,t)),d(e.drillable&&Array.isArray(o)?o.length:o)}))}function O(e){const{columns:t,rows:o,quarter:n,period:l,filters:i,safeMode:s}=e,u=m(t,s),d=f(t,Object(a["sortRows"])(o,(null===i||void 0===i?void 0:i.sort)||[]),s);let p=u.join(",")+"\n";return p+=d.map(e=>e.join(",")).join("\n"),p+="\nDate Created:  "+c()().format("DD/MMM/YYYY HH:MM:ss"),n&&(p+="\nQuarter: "+n),l&&(p+="\nQuarter: "+l),p+="\ne-Mastercard Version : "+r["e"].getAppVersion(),p+="\nAPI Version "+r["e"].getApiVersion(),p+="\nSite UUID: "+r["e"].getSiteUUID(),p}function j(e){const t=new Blob([O(e)],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=window.URL.createObjectURL(t),o.setAttribute("download",e.filename+".csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}function g(e){const{filename:t,canHorizontalPageBreak:o,columns:n,rows:r,filters:l,safeMode:c}=e,s=[m(n,c)],b=f(n,Object(a["sortRows"])(r,(null===l||void 0===l?void 0:l.sort)||[]),c),O=c?p():{},j=new i["default"]({...O}),g=j.splitTextToSize(d(t),180),v=g.length<=1?20:10*g.length;j.text(g,14,10);const w={startY:v,head:s,body:b};o&&(w.tableWidth="wrap",w.horizontalPageBreak=!0,w.horizontalPageBreakRepeat=0),u()(j,w);const h=t+".pdf";j.save(h)}},"4be8":function(e,t,o){"use strict";o.r(t);var a=o("7a23");function n(e,t,o,n,r,l){const c=Object(a["resolveComponent"])("base-report-table");return Object(a["openBlock"])(),Object(a["createBlock"])(c,{title:e.title,"report-icon":"clean.jpg",period:e.period,columns:e.columns,rows:e.rows,rowActionButtons:e.rowActionBtns,"custom-filters":e.filters,useDateRangeFilter:"",onCustomFilter:e.fetchData},null,8,["title","period","columns","rows","rowActionButtons","custom-filters","onCustomFilter"])}o("14d9");var r=o("b211"),l=o("afbc"),c=o("8727"),i=o("df95"),s=o("9283"),u=o("5a0c"),d=o.n(u),p=o("0011"),b=o("3a8c"),m=Object(a["defineComponent"])({name:"DataCleaning",components:{BaseReportTable:c["a"]},setup(){const e=Object(a["ref"])([]),t=Object(a["reactive"])({}),o=Object(a["computed"])(()=>"Data Cleaning Tools "+((null===t||void 0===t?void 0:t.value)||"")),n=Object(a["ref"])("-"),c=[{path:"arv_number",label:"ARV Number",preSort:b["a"],initialSort:!0},{path:"given_name",label:"First Name"},{path:"family_name",label:"Last Name"},{path:"gender",label:"Gender",formatter:p["i"]},{path:"birthdate",label:"Date of Birth",formatter:e=>d()(e).format(s["a"])}],u=async o=>{await r["a"].show();const a=new i["b"];a.setStartDate(o.dateRange.startDate),a.setEndDate(o.dateRange.endDate),Object.assign(t,o.tool),n.value=a.getDateIntervalPeriod(),e.value=await a.getCleaningToolReport(t.value),await r["a"].hide()},m=[{label:"Show",default:!0,action:e=>{l["a"].push("/emc/patient/"+e["patient_id"])}}],f=Object(a["computed"])(()=>[{id:"tool",label:"Select Cleaning Tool",type:"select",value:t,gridSize:5,options:Object.values(i["a"]).map(e=>({label:e.toLowerCase(),value:e}))}]);return{period:n,title:o,rows:e,columns:c,rowActionBtns:m,filters:f,fetchData:u}}}),f=o("6b0d"),O=o.n(f);const j=O()(m,[["render",n]]);t["default"]=j},"4e59":function(e,t,o){},"5f0b":function(e,t,o){},6361:function(e,t,o){"use strict";o("0bb4")},7717:function(e,t,o){"use strict";var a=o("7a23");const n={class:"date-picker-wrapper"},r=["value"],l=["value"];function c(e,t,o,c,i,s){const u=Object(a["resolveComponent"])("ion-icon"),d=Object(a["resolveComponent"])("date-picker");return Object(a["openBlock"])(),Object(a["createBlock"])(d,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(a["withCtx"])(({inputValue:t,inputEvents:o})=>[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("input",Object(a["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(a["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,r),Object(a["createVNode"])(u,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(a["createElementVNode"])("input",Object(a["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(a["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,l)])]),_:1},8,["modelValue","masks","popover"])}var i=o("d867"),s=o("ff79"),u=o("0261"),d=o("9283"),p=Object(a["defineComponent"])({name:"DateRangePicker",components:{IonIcon:i["IonIcon"],DatePicker:u["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(a["ref"])({input:"DD/MMM/YYYY"}),n=Object(a["ref"])({visibility:"click"}),r=Object(a["computed"])({get:()=>e.modelValue,set:({start:e,end:o})=>t("update:modelValue",{start:d["c"].toStandardHisFormat(e),end:d["c"].toStandardHisFormat(o)})});return{arrowForward:s["arrowForward"],range:r,masks:o,popover:n}}}),b=(o("6361"),o("6b0d")),m=o.n(b);const f=m()(p,[["render",c],["__scopeId","data-v-4991088d"]]);t["a"]=f},8727:function(e,t,o){"use strict";var a=o("7a23");const n=["src"],r=["innerHTML"],l=["innerHTML"],c={key:1},i={key:2},s={key:3},u={key:4};function d(e,t,o,d,p,b){const m=Object(a["resolveComponent"])("ion-col"),f=Object(a["resolveComponent"])("ion-row"),O=Object(a["resolveComponent"])("ion-grid"),j=Object(a["resolveComponent"])("ion-card-header"),g=Object(a["resolveComponent"])("date-range-picker"),v=Object(a["resolveComponent"])("date-picker"),w=Object(a["resolveComponent"])("data-table"),h=Object(a["resolveComponent"])("ion-card-content"),D=Object(a["resolveComponent"])("ion-card");return Object(a["openBlock"])(),Object(a["createBlock"])(D,{style:{padding:"0 !important"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(j,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(O,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(f,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(a["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,n)]),_:1}),Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("h1",{innerHTML:e.title},null,8,r),e.subtitle?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(a["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",c," Period: "+Object(a["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",i," Quarter: "+Object(a["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",s,"Date: "+Object(a["toDisplayString"])(e.date),1)):Object(a["createCommentVNode"])("",!0),e.totalClients?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",u,"Total Clients: "+Object(a["toDisplayString"])(e.totalClients),1)):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(h,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(w,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(a["createSlots"])({dateRange:Object(a["withCtx"])(()=>[Object(a["createVNode"])(g,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(a["withCtx"])(()=>[Object(a["createVNode"])(v,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(a["renderList"])(e.$slots,(t,o)=>({name:o,fn:Object(a["withCtx"])(({filter:t})=>[Object(a["renderSlot"])(e.$slots,o,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}o("14d9");var p=o("d867"),b=o("ad8d"),m=o("5a0c"),f=o.n(m),O=o("5969"),j=o("4971"),g=o("b5e4"),v=o("2ef0"),w=o("40e3"),h=o("7717");const D=["value"];function y(e,t,o,n,r,l){const c=Object(a["resolveComponent"])("date-picker",!0);return Object(a["openBlock"])(),Object(a["createBlock"])(c,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(a["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(a["createElementVNode"])("input",Object(a["mergeProps"])({value:e,class:"box date-picker-input"},Object(a["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,D)]),_:1},8,["modelValue","masks"])}var C=o("0261"),S=o("9283"),E=Object(a["defineComponent"])({name:"DTDatePicker",components:{DatePicker:C["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(a["ref"])({input:"DD/MMM/YYYY"}),n=Object(a["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",S["c"].toStandardHisFormat(e))});return{date:n,masks:o}}}),R=(o("9a25"),o("6b0d")),k=o.n(R);const I=k()(E,[["render",y],["__scopeId","data-v-2b798694"]]);var V=I,T=o("7f35"),B=Object(a["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:j["DataTable"],DateRangePicker:h["a"],DatePicker:V},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const o=Object(a["ref"])({}),n=Object(a["ref"])(""),r=Object(a["computed"])(()=>Object(w["c"])(`\n      ${e.reportType} \n      ${b["b"].getLocationName()} \n      ${(e.filename||e.title).replace(e.reportType,"")} \n      ${e.period?e.period:e.date}\n    `)),l=Object(a["computed"])(()=>{var t,o;const a=[...e.actionButtons];return e.showRefreshButton&&a.push(u()),e.canExportCsv&&a.push(d(r.value,null===(t=e.quarter)||void 0===t?void 0:t.label,e.period)),e.canExportPDF&&a.push(p(r.value,null===(o=e.quarter)||void 0===o?void 0:o.label,e.period)),a}),c=Object(a["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:O["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),i=e=>{if("dateRange"in e){if(Object(v["isEmpty"])(o.value))return Object(g["e"])("Invalid date range");e.dateRange={startDate:o.value.start,endDate:o.value.end}}if("date"in e){if(Object(v["isEmpty"])(n.value))return Object(g["e"])("Invalid date");e.date=n.value}if(c.value.every(t=>!1===t.required||(Object(v["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(v["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(v["isEmpty"])(e)))))return t("customFilter",e);Object(g["e"])("Invalid filters")},s=e=>{t("drilldown",e)},u=()=>({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),d=(e,t,o)=>({label:"CSV",color:"primary",action:async(a,n,r,l)=>{Object(w["a"])({rows:n,filters:r,columns:l,quarter:t,period:o,filename:e})}}),p=(t,o,a)=>({label:"PDF",color:"primary",action:async(n,r,l,c)=>{let i=!1;if(e.useSecureExport){const e=await Object(T["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");i="Secure PDF"===e}Object(w["b"])({rows:r,filters:l,columns:c,quarter:o,period:a,filename:t,safeMode:i})}});return{actionBtns:l,filters:c,onCustomFilter:i,onDrilldown:s,dayjs:f.a,dateRange:o,pickerDate:n}}});o("f522");const N=k()(B,[["render",d],["__scopeId","data-v-4840dd5c"]]);t["a"]=N},"9a25":function(e,t,o){"use strict";o("5f0b")},df95:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return r}));var a,n=o("5969");(function(e){e["DobMoreThanEnrolledDate"]="DOB MORE THAN DATE ENROLLED",e["ClientsWithEncountersAfterDeath"]="CLIENTS WITH ENCOUNTERS AFTER DECLARED DEAD",e["DateEnrolledLessThanEarliestStartDate"]="DATE ENROLLED LESS THAN EARLIEST START DATE",e["MalesWithFemaleObs"]="MALE CLIENTS WITH FEMALE OBS",e["PrescriptionWithoutDispensation"]="PRESCRIPTION WITHOUT DISPENSATION",e["MissingDemographics"]="MISSING DEMOGRAPHICS",e["MissingStartReasons"]="MISSING START REASONS",e["MultipleStartReasons"]="MULTIPLE START REASONS",e["PreArtOrUnknownOutcomes"]="PRE ART OR UNKNOWN OUTCOMES",e["MissingVlResults"]="MISSING VL RESULTS"})(a||(a={}));class r extends n["a"]{constructor(){super()}saveDataCleaningVerification(e){return n["a"].postJson("data_cleaning_confirmation",e)}getCleaningToolReport(e){return this.getReport("art_data_cleaning_tools",{report_name:e})}getEnrolledOnArtBeforeBirth(){return n["a"].getJson("enrolled_on_art_before_birth")}getIncompleteVisits(){return this.getReport("incomplete_visits",{tool_name:"INCOMPLETE VISITS"})}}},f522:function(e,t,o){"use strict";o("4e59")}}]);
//# sourceMappingURL=chunk-2c503d9c.0f2943ce.js.map