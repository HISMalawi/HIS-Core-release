(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e047aac"],{"0bb4":function(e,t,o){},2265:function(e,t,o){"use strict";o.r(t);var r=o("7a23");function n(e,t,o,n,a,l){const c=Object(r["resolveComponent"])("base-report-table");return Object(r["openBlock"])(),Object(r["createBlock"])(c,{title:"Clinic TX RTT Report","report-icon":"reports/restart.png","report-type":"Clinic",columns:e.columns,rows:e.rows,period:e.period,useDateRangeFilter:"",onCustomFilter:e.fetchData,onDrilldown:e.onDrilldown},null,8,["columns","rows","period","onCustomFilter","onDrilldown"])}o("14d9"),o("13d5");var a=o("b211"),l=o("8727"),c=o("da44"),s=o("564f"),i=o("ad8d"),d=o("2ef0"),u=o("9a5e"),p=o("23e6"),b=o("9283"),m=o("0011"),f=o("3a8c"),g=Object(r["defineComponent"])({components:{BaseReportTable:l["a"]},setup(){const e=Object(r["ref"])("-"),t=Object(r["ref"])([]),o=new u["a"],n=[{path:"index",label:"#",initialSort:!0,initialSortOrder:"asc"},{path:"age_group",label:"Age group"},{path:"gender",label:"Gender"},{path:"return_less_than_3_mo",label:"Returned <3 mo",drillable:!0},{path:"return_by_3_to_5_mo",label:"Returned 3-5 mo",drillable:!0},{path:"return_6_plus_mo",label:"Returned 6+ mo",drillable:!0}],l=(e,t)=>e.filter(e=>t(e.months)).map(e=>e.patient_id),g=async(e,o,r)=>{for(const n of i["a"]){const a=Object(d["get"])(e,`${n}.${o}`,[]);t.value.push({gender:Object(m["i"])(o),index:r++,age_group:n,return_less_than_3_mo:l(a,e=>e<3),return_by_3_to_5_mo:l(a,e=>e>=3&&e<6),return_6_plus_mo:l(a,e=>e>=6)})}},j=(e,t,o)=>e.filter(e=>e.gender===o).reduce((e,o)=>e.concat(o[t]),[]),O=(e,o)=>{t.value.push({index:o++,gender:"Male",age_group:"All",return_less_than_3_mo:j(e,"return_less_than_3_mo","Male"),return_by_3_to_5_mo:j(e,"return_by_3_to_5_mo","Male"),return_6_plus_mo:j(e,"return_6_plus_mo","Male")})},h=async(e,r)=>{const n=["return_less_than_3_mo","return_by_3_to_5_mo","return_6_plus_mo"],a=["FP","FNP","FBf"],l=Object(d["uniq"])(n.map(t=>j(e,t,"Female")).reduce((e,t)=>e.concat(t),[])),c=await o.getMaternalStatus(l),s=c.FBf.concat(c.FP),i=(t,o)=>j(e,t,"Female").filter(e=>"FNP"===o?!s.includes(e):c[o].includes(e));for(const o of a){const e={index:r++,gender:o,age_group:"All"};n.forEach(t=>e[t]=i(t,o)),t.value.push(e)}},w=async({dateRange:r})=>{a["a"].show(),o.setStartDate(r.startDate),o.setEndDate(r.endDate),e.value=o.getDateIntervalPeriod();const n=await o.getClinicTxRtt();t.value=[],g(n,"F",1),g(n,"M",21),O(t.value,41),await h(t.value,42),await a["a"].hide()},v=async e=>{const t=[{path:"arv_number",label:"ARV Number",preSort:f["a"],initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:b["c"].toStandardHisDisplayFormat},{path:"gender",label:"Gender",formatter:m["i"]},{path:"address",label:"Address"}],o=e.row[e.column.path],r=[];for(const n of o){const e=await p["a"].findByID(n),t=new p["a"](e);r.push({arv_number:t.getArvNumber(),birthdate:t.getBirthdate(),gender:t.getGender(),address:""+t.getCurrentVillage()})}await c["a"].show(s["a"],{title:`${e.row.age_group} ${e.column.label} ${e.row.gender}s`,columns:t,rows:r})};return{rows:t,columns:n,period:e,fetchData:w,onDrilldown:v}}}),j=o("6b0d"),O=o.n(j);const h=O()(g,[["render",n]]);t["default"]=h},"3a8c":function(e,t,o){"use strict";function r(e){return parseInt(e.split("-")[2])||0}o.d(t,"a",(function(){return r}))},"40e3":function(e,t,o){"use strict";o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return j})),o.d(t,"b",(function(){return O}));o("88a7"),o("271a"),o("5494");var r=o("4971"),n=o("2ef0"),a=o("1c74"),l=o("5a0c"),c=o.n(l),s=o("8baf"),i=o("0da4"),d=o.n(i);function u(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/(\r\n|\n|\r)/gm,"").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function p(){const e=a["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}}function b(e,t){return t||!1!==e.exportable}function m(e,t=!1){return e.filter(e=>b(e,t)).map(e=>e.label)}function f(e,t,o=!1){return t.map(t=>e.filter(e=>b(e,o)).map(e=>{let o=Object(n["get"])(t,e.path);return"function"===typeof e.formatter&&o&&(o=e.formatter(o,t)),u(e.drillable&&Array.isArray(o)?o.length:o)}))}function g(e){const{columns:t,rows:o,quarter:n,period:l,filters:s,safeMode:i}=e,d=m(t,i),u=f(t,Object(r["sortRows"])(o,(null===s||void 0===s?void 0:s.sort)||[]),i);let p=d.join(",")+"\n";return p+=u.map(e=>e.join(",")).join("\n"),p+="\nDate Created:  "+c()().format("DD/MMM/YYYY HH:MM:ss"),n&&(p+="\nQuarter: "+n),l&&(p+="\nQuarter: "+l),p+="\ne-Mastercard Version : "+a["e"].getAppVersion(),p+="\nAPI Version "+a["e"].getApiVersion(),p+="\nSite UUID: "+a["e"].getSiteUUID(),p}function j(e){const t=new Blob([g(e)],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=window.URL.createObjectURL(t),o.setAttribute("download",e.filename+".csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}function O(e){const{filename:t,canHorizontalPageBreak:o,columns:n,rows:a,filters:l,safeMode:c}=e,i=[m(n,c)],b=f(n,Object(r["sortRows"])(a,(null===l||void 0===l?void 0:l.sort)||[]),c),g=c?p():{},j=new s["default"]({...g}),O=j.splitTextToSize(u(t),180),h=O.length<=1?20:10*O.length;j.text(O,14,10);const w={startY:h,head:i,body:b};o&&(w.tableWidth="wrap",w.horizontalPageBreak=!0,w.horizontalPageBreakRepeat=0),d()(j,w);const v=t+".pdf";j.save(v)}},"4e59":function(e,t,o){},"564f":function(e,t,o){"use strict";var r=o("7a23");function n(e,t,o,n,a,l){const c=Object(r["resolveComponent"])("IonIcon"),s=Object(r["resolveComponent"])("IonButton"),i=Object(r["resolveComponent"])("IonButtons"),d=Object(r["resolveComponent"])("IonTitle"),u=Object(r["resolveComponent"])("IonToolbar"),p=Object(r["resolveComponent"])("IonHeader"),b=Object(r["resolveComponent"])("data-table"),m=Object(r["resolveComponent"])("IonContent"),f=Object(r["resolveComponent"])("IonPage");return Object(r["openBlock"])(),Object(r["createBlock"])(f,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(i,{slot:"end"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(s,{slot:"end",onClick:t[0]||(t[0]=t=>e.modal.hide()),"icon-only":""},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(c,{icon:e.close},null,8,["icon"])]),_:1})]),_:1}),Object(r["createVNode"])(d,null,{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(m,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(b,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"row-actions-buttons":e.rowActionButtons,"actions-buttons":e.actionBtns,color:"custom"},null,8,["rows","async-rows","columns","row-actions-buttons","actions-buttons"])]),_:1})]),_:1})}o("14d9");var a=o("d867"),l=o("4971"),c=o("ff79"),s=o("da44"),i=o("5a0c"),d=o.n(i),u=o("40e3"),p=Object(r["defineComponent"])({name:"DrilldownTable",components:{DataTable:l["DataTable"],IonButton:a["IonButton"],IonPage:a["IonPage"],IonHeader:a["IonHeader"],IonContent:a["IonContent"],IonToolbar:a["IonToolbar"],IonButtons:a["IonButtons"],IonTitle:a["IonTitle"],IonIcon:a["IonIcon"]},props:{title:{type:String,default:"Report"},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},columns:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},actionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},period:{type:String,default:""}},setup(e){const t=Object(r["computed"])(()=>{const t=[...e.actionButtons];return e.canExportCsv&&t.push({label:"CSV",color:"primary",action:async(t,o,r,n)=>Object(u["a"])({rows:o,filters:r,columns:n,period:e.period.includes("Custom")?e.period.substring(6):e.period,filename:`${e.title}-${d()().format("DD-MMM-YYYY")}`})}),t});return{close:c["close"],modal:s["a"],actionBtns:t}}}),b=o("6b0d"),m=o.n(b);const f=m()(p,[["render",n]]);t["a"]=f},"5f0b":function(e,t,o){},6361:function(e,t,o){"use strict";o("0bb4")},7717:function(e,t,o){"use strict";var r=o("7a23");const n={class:"date-picker-wrapper"},a=["value"],l=["value"];function c(e,t,o,c,s,i){const d=Object(r["resolveComponent"])("ion-icon"),u=Object(r["resolveComponent"])("date-picker");return Object(r["openBlock"])(),Object(r["createBlock"])(u,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(r["withCtx"])(({inputValue:t,inputEvents:o})=>[Object(r["createElementVNode"])("div",n,[Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(r["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,a),Object(r["createVNode"])(d,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(r["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,l)])]),_:1},8,["modelValue","masks","popover"])}var s=o("d867"),i=o("ff79"),d=o("5db2"),u=o("9283"),p=Object(r["defineComponent"])({name:"DateRangePicker",components:{IonIcon:s["IonIcon"],DatePicker:d["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(r["ref"])({input:"DD/MMM/YYYY"}),n=Object(r["ref"])({visibility:"click"}),a=Object(r["computed"])({get:()=>e.modelValue,set:({start:e,end:o})=>t("update:modelValue",{start:u["c"].toStandardHisFormat(e),end:u["c"].toStandardHisFormat(o)})});return{arrowForward:i["arrowForward"],range:a,masks:o,popover:n}}}),b=(o("6361"),o("6b0d")),m=o.n(b);const f=m()(p,[["render",c],["__scopeId","data-v-4991088d"]]);t["a"]=f},8727:function(e,t,o){"use strict";var r=o("7a23");const n=["src"],a=["innerHTML"],l=["innerHTML"],c={key:1},s={key:2},i={key:3},d={key:4};function u(e,t,o,u,p,b){const m=Object(r["resolveComponent"])("ion-col"),f=Object(r["resolveComponent"])("ion-row"),g=Object(r["resolveComponent"])("ion-grid"),j=Object(r["resolveComponent"])("ion-card-header"),O=Object(r["resolveComponent"])("date-range-picker"),h=Object(r["resolveComponent"])("date-picker"),w=Object(r["resolveComponent"])("data-table"),v=Object(r["resolveComponent"])("ion-card-content"),_=Object(r["resolveComponent"])("ion-card");return Object(r["openBlock"])(),Object(r["createBlock"])(_,{style:{padding:"0 !important"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(j,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(g,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(f,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(r["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,n)]),_:1}),Object(r["createVNode"])(m,null,{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("h1",{innerHTML:e.title},null,8,a),e.subtitle?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(r["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",c," Period: "+Object(r["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",s," Quarter: "+Object(r["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",i,"Date: "+Object(r["toDisplayString"])(e.date),1)):Object(r["createCommentVNode"])("",!0),e.totalClients?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",d,"Total Clients: "+Object(r["toDisplayString"])(e.totalClients),1)):Object(r["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(v,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(w,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(r["createSlots"])({dateRange:Object(r["withCtx"])(()=>[Object(r["createVNode"])(O,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(r["withCtx"])(()=>[Object(r["createVNode"])(h,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(r["renderList"])(e.$slots,(t,o)=>({name:o,fn:Object(r["withCtx"])(({filter:t})=>[Object(r["renderSlot"])(e.$slots,o,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}o("14d9");var p=o("d867"),b=o("ad8d"),m=o("5a0c"),f=o.n(m),g=o("5969"),j=o("4971"),O=o("b5e4"),h=o("2ef0"),w=o("40e3"),v=o("7717");const _=["value"];function y(e,t,o,n,a,l){const c=Object(r["resolveComponent"])("date-picker",!0);return Object(r["openBlock"])(),Object(r["createBlock"])(c,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(r["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:e,class:"box date-picker-input"},Object(r["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,_)]),_:1},8,["modelValue","masks"])}var C=o("5db2"),D=o("9283"),I=Object(r["defineComponent"])({name:"DTDatePicker",components:{DatePicker:C["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(r["ref"])({input:"DD/MMM/YYYY"}),n=Object(r["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",D["c"].toStandardHisFormat(e))});return{date:n,masks:o}}}),R=(o("9a25"),o("6b0d")),k=o.n(R);const x=k()(I,[["render",y],["__scopeId","data-v-2b798694"]]);var B=x,V=o("7f35"),F=Object(r["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:j["DataTable"],DateRangePicker:v["a"],DatePicker:B},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const o=Object(r["ref"])({}),n=Object(r["ref"])(""),a=Object(r["computed"])(()=>Object(w["c"])(`\n      ${e.reportType} \n      ${b["b"].getLocationName()} \n      ${(e.filename||e.title).replace(e.reportType,"")} \n      ${e.period?e.period:e.date}\n    `)),l=Object(r["computed"])(()=>{var t,o;const r=[...e.actionButtons];return e.showRefreshButton&&r.push(d()),e.canExportCsv&&r.push(u(a.value,null===(t=e.quarter)||void 0===t?void 0:t.label,e.period)),e.canExportPDF&&r.push(p(a.value,null===(o=e.quarter)||void 0===o?void 0:o.label,e.period)),r}),c=Object(r["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:g["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),s=e=>{if("dateRange"in e){if(Object(h["isEmpty"])(o.value))return Object(O["e"])("Invalid date range");e.dateRange={startDate:o.value.start,endDate:o.value.end}}if("date"in e){if(Object(h["isEmpty"])(n.value))return Object(O["e"])("Invalid date");e.date=n.value}if(c.value.every(t=>!1===t.required||(Object(h["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(h["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(h["isEmpty"])(e)))))return t("customFilter",e);Object(O["e"])("Invalid filters")},i=e=>{t("drilldown",e)},d=()=>({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),u=(e,t,o)=>({label:"CSV",color:"primary",action:async(r,n,a,l)=>{Object(w["a"])({rows:n,filters:a,columns:l,quarter:t,period:o,filename:e})}}),p=(t,o,r)=>({label:"PDF",color:"primary",action:async(n,a,l,c)=>{let s=!1;if(e.useSecureExport){const e=await Object(V["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");s="Secure PDF"===e}Object(w["b"])({rows:a,filters:l,columns:c,quarter:o,period:r,filename:t,safeMode:s})}});return{actionBtns:l,filters:c,onCustomFilter:s,onDrilldown:i,dayjs:f.a,dateRange:o,pickerDate:n}}});o("f522");const M=k()(F,[["render",u],["__scopeId","data-v-4840dd5c"]]);t["a"]=M},"9a25":function(e,t,o){"use strict";o("5f0b")},"9a5e":function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"a",(function(){return d}));var r=o("ade3"),n=(o("14d9"),o("13d5"),o("5969")),a=o("bef6"),l=o("2ef0"),c=o("ad8d");const s=["F","M"],i=["Died","IIT <3 mo","IIT 3-5 mo","IIT 6+ mo","Transferred out","Refused (Stopped)"];class d extends n["a"]{constructor(){super(),Object(r["a"])(this,"org",void 0),Object(r["a"])(this,"initializeArvRefillReportTables",void 0),this.org="pepfar",this.initializeArvRefillReportTables=!0}initArvRefillPeriod(e){this.initializeArvRefillReportTables=e}setOrg(e){this.org=e}getClinicTxRtt(){return this.getReport(`programs/${this.programID}/reports/clinic_tx_rtt`)}getTxMMDClientLevelData(e){const t=a["a"].parameterizeObjToString({start_date:this.startDate,end_date:this.endDate,program_id:this.programID,date:this.date,org:this.org}),o="tx_mmd_client_level_data?"+t;return n["a"].postJson(o,{patient_ids:e})}remapTxClientLevelData(e){return e.map(e=>{let t=null;const o=[];for(const r in e){const n=Object.values(e[r]);n.forEach(e=>{for(const r in e){const n=e[r];t||(t={id:n.arv_number,dob:n.birthdate,dispenseDate:n.start_date}),o.push({name:n.drug_name,quantity:n.quantity,dose:n.dose_per_day})}})}return{...t,drugs:o}})}getTxCurrMMDReport(e,t){return this.getReport("arv_refill_periods",{org:this.org,min_age:""+e,max_age:""+t,initialize_tables:""+this.initializeArvRefillReportTables})}getTxMlReport(){return this.getReport("tx_ml")}getTxNewReport(e){const t={};return t.rebuild=(null===e||void 0===e?void 0:e.toString())||"false",this.getReport(`programs/${this.programID}/reports/tx_new`,t)}getTxRttReport(){return this.getReport("tx_rtt")}buildTxMlReportData(e){const t=[];return s.forEach(o=>{c["a"].forEach(r=>{const n={gender:o,age_group:r};i.forEach((t,a)=>{n[t]=Object(l["get"])(e,`${r}.${o}[${a}]`,[])}),t.push(n)})}),t}aggregateTxML(e,t,o){return Object.values(e).reduce((e,r)=>r[t]?[...r[t][i.indexOf(o)],...e]:e,[])}getAggregatedTxMLMaleData(e){const t={gender:"Male",age_group:"All"};for(const o of i)t[o]=this.aggregateTxML(e,"M",o);return t}async getAggregatedTxMLMaternalStatus(e){const t=i.reduce((t,o)=>[...t,{indicator:o,data:this.aggregateTxML(e,"F",o)}],[]),o=Object(l["uniq"])(t.reduce((e,t)=>[...e,...t.data],[]).map(e=>e.patient_id)),r=await this.getMaternalStatus(o),n=r.FBf.concat(r.FP),a=[];for(const l of["FP","FNP","FBf"]){const e={gender:l,age_group:"All"};for(const o of i)e[o]=t.reduce((e,t)=>t.indicator===o?[...e,...t.data]:e,[]).filter(e=>"FNP"===l?!n.includes(e.patient_id):r[l].includes(e.patient_id));a.push(e)}return a}}},da44:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var r=o("d867");const n={async show(e,t,o="custom-modal",n=!0){const a=await r["modalController"].create({component:e,cssClass:o,backdropDismiss:n,componentProps:t});a.present();const{data:l}=await a.onWillDismiss();if(l)return l},async hide(e){await r["modalController"].dismiss(e)}}},f522:function(e,t,o){"use strict";o("4e59")}}]);
//# sourceMappingURL=chunk-0e047aac.7da3bbb9.js.map