(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3812bb0c"],{3192:function(e,t,r){"use strict";r.r(t);var a=r("7a23");function n(e,t,r,n,o,s){const i=Object(a["resolveComponent"])("base-report-table");return Object(a["openBlock"])(),Object(a["createBlock"])(i,{title:"Regimen Formulation: Patient Level Clinic Report","report-icon":"reports/medical.png",period:e.period,columns:e.columns,rows:e.rows,rowActionButtons:e.rowActionBtns,"custom-filters":e.filters,useDateRangeFilter:"",onRegenerate:t[0]||(t[0]=()=>e.regenerateReport()),onCustomFilter:e.fetchData},null,8,["period","columns","rows","rowActionButtons","custom-filters","onCustomFilter"])}r("14d9");var o=r("b211"),s=r("afbc"),i=r("8727"),l=r("87e7"),c=r("9283"),u=r("5a0c"),d=r.n(u),p=r("0011"),g=r("3a8c"),m=Object(a["defineComponent"])({name:"RegimenFormulation",components:{BaseReportTable:i["a"]},setup(){const e=Object(a["ref"])([]),t=Object(a["reactive"])({}),r=Object(a["reactive"])({}),n=Object(a["ref"])("-"),i=new l["d"],u=[{path:"arv_number",label:"ARV Number",preSort:g["a"],initialSort:!0},{path:"gender",label:"Gender",formatter:p["f"]},{path:"birthdate",label:"Date of Birth",formatter:e=>d()(e).format(c["a"])}],m=async a=>{await o["a"].show(),i.setStartDate(a.dateRange.startDate),i.setEndDate(a.dateRange.endDate),n.value=i.getDateIntervalPeriod(),Object.assign(t,a.regimen),Object.assign(r,a.formulation),e.value=await i.getRegimenFormulationReport(t.value,r.value),await o["a"].hide()},b=async()=>{n.value&&t.value&&r.value&&(await o["a"].show(),e.value=await i.getRegimenFormulationReport(t.value,r.value),await o["a"].hide())},h=[{label:"Select",default:!0,action:e=>{s["a"].push("/emc/patient/"+e["patient_id"])}}],y=Object(a["computed"])(()=>[{id:"regimen",label:"Select Regimen",type:"select",value:t,options:l["b"].map(e=>({label:e,value:e}))},{id:"formulation",label:"Formulation",type:"select",value:r,options:l["a"].map(e=>({label:e,value:e}))}]);return{period:n,rows:e,columns:u,rowActionBtns:h,filters:y,regenerateReport:b,fetchData:m}}}),b=r("6b0d"),h=r.n(b);const y=h()(m,[["render",n]]);t["default"]=y},"3a8c":function(e,t,r){"use strict";function a(e){return parseInt(e.split("-")[2])||0}r.d(t,"a",(function(){return a}))},5969:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r("ade3"),n=(r("14d9"),r("1c74")),o=r("9283"),s=r("5a0c"),i=r.n(s);class l extends n["e"]{constructor(){super(),Object(a["a"])(this,"programID",void 0),Object(a["a"])(this,"startDate",void 0),Object(a["a"])(this,"endDate",void 0),Object(a["a"])(this,"date",void 0),Object(a["a"])(this,"quarter",void 0),this.endDate="",this.startDate="",this.quarter="",this.date=n["e"].getSessionDate(),this.programID=n["e"].getProgramID()}getDateIntervalPeriod(){return`${o["c"].toStandardHisDisplayFormat(this.startDate)} - ${o["c"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setQuarter(e){this.quarter=e}getReport(e,t={}){return n["e"].getJson(e,this.buildRequest(t))}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.quarter&&(t["quarter"]=this.quarter),{...t,...e}}static getQuarterBounds(e){const t=t=>i()(`${e}-${t}-01`).daysInMonth(),r=t=>`${e}-${t}-01 00:00`,a=r=>`${e}-${r}-${t(r)} 00:00`;return{Q1:{qtr:1,start:r("01"),end:a("03")},Q2:{qtr:2,start:r("04"),end:a("06")},Q3:{qtr:3,start:r("07"),end:a("09")},Q4:{qtr:4,start:r("10"),end:a("12")}}}static getQtrByDate(e){const t=this.getQuarterBounds(e.getFullYear());for(const r in t){const{start:a,end:n}=t[r];if(e>=new Date(a)&&e<=new Date(n))return t[r]}return null}static buildQtrObj(e,t){const r=this.getQuarterBounds(t),{start:a,end:n}=r[e];return{start:a,end:n,name:`${e} ${t}`}}static getReportQuarters(e=5){const t=[];let r=new Date,a=r.getFullYear();const n=a;r=new Date(`${n}-${r.getMonth()+1}-${r.getDate()} 00:00`);const o=this.getQtrByDate(r);let s=o.qtr,i=0;4===s&&t.push(this.buildQtrObj("Q1",a+1));while(i<e)0===i&&s<4&&t.push(this.buildQtrObj("Q"+(s+1),a)),t.push(this.buildQtrObj("Q"+s,a)),s=s>0?s-=1:s,a=0==s?a-1:a,s=0==s?s+=4:s,i++;return t}}},8727:function(e,t,r){"use strict";var a=r("7a23");const n=["src"],o=["innerHTML"],s=["innerHTML"],i={key:1},l={key:2},c={key:3},u={key:4};function d(e,t,r,d,p,g){const m=Object(a["resolveComponent"])("ion-col"),b=Object(a["resolveComponent"])("ion-row"),h=Object(a["resolveComponent"])("ion-grid"),y=Object(a["resolveComponent"])("ion-card-header"),f=Object(a["resolveComponent"])("data-table"),j=Object(a["resolveComponent"])("ion-card-content"),O=Object(a["resolveComponent"])("ion-card"),D=Object(a["resolveComponent"])("Layout");return Object(a["openBlock"])(),Object(a["createBlock"])(D,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(O,{class:"his-card",style:{padding:"0 !important"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(y,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(a["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,n)]),_:1}),Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("h1",{innerHTML:e.title},null,8,o),e.subtitle?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,s)):Object(a["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",i," Period: "+Object(a["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",l," Quarter: "+Object(a["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",c,"Date: "+Object(a["toDisplayString"])(e.dayjs(e.date).format("DD/MMM/YYYY")),1)):Object(a["createCommentVNode"])("",!0),e.totalClients?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",u,"Total Clients: "+Object(a["toDisplayString"])(e.totalClients),1)):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(j,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(f,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},null,8,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","onCustomFilter","onDrilldown"])]),_:1})]),_:1})]),_:1})}r("14d9");var p=r("d867"),g=r("ad8d"),m=r("5a0c"),b=r.n(m),h=r("8d56"),y=r("5969"),f=r("4971"),j=r("b5e4"),O=r("2ef0"),D=r("1c74");function w(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function v({columns:e,rows:t,quarter:r,period:a}){let n=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return n+="\n",n+=t.map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let r=Object(O["get"])(t,e.path);return"function"===typeof e.formatter&&r&&(r=e.formatter(r)),w(e.drillable&&Array.isArray(r)?r.length:r)}).join(",")).join("\n"),n+="\nDate Created:  "+b()().format("DD/MMM/YYYY HH:MM:ss"),r&&(n+="\nQuarter: "+r),a&&(n+="\nQuarter: "+a),n+="\ne-Mastercard Version : "+D["e"].getAppVersion(),n+="\nAPI Version "+D["e"].getApiVersion(),n+="\nSite UUID: "+D["e"].getSiteUUID(),n}function A(e){const t=new Blob([v(e)],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.setAttribute("download",e.filename+".csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}var R=Object(a["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],Layout:h["a"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:f["DataTable"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const r=Object(a["computed"])(()=>`${g["b"].getLocationName()} ${e.title} ${e.period?e.period:e.date}`),n=Object(a["computed"])(()=>{const a=[...e.actionButtons];return e.showRefreshButton&&a.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&a.push({label:"CSV",color:"primary",action:async(t,a)=>{var n;return A({rows:a,columns:e.columns,quarter:null===(n=e.quarter)||void 0===n?void 0:n.label,period:e.period,filename:r.value})}}),a}),o=Object(a["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",gridSize:5,value:{startDate:e.period.split("-")[0],endDate:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:y["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",value:e.date}),t}),s=e=>"dateRange"in e&&b()(e.dateRange.startDate).isAfter(e.dateRange.endDate)?Object(j["e"])("Invalid date range"):o.value.every(t=>!1===t.required||(Object(O["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(O["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(O["isEmpty"])(e))))?t("customFilter",e):void Object(j["e"])("Invalid filters"),i=e=>{t("drilldown",e)};return{actionBtns:n,filters:o,onCustomFilter:s,onDrilldown:i,dayjs:b.a}}}),P=r("6b0d"),C=r.n(P);const B=C()(R,[["render",d]]);t["a"]=B},"87e7":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"d",(function(){return c}));var a=r("ade3"),n=r("5969");const o=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4PP","4PA","9PP","9PA","11PP","11PA","12PP","12PA","14PP","14PA","15PP","15PA","16P","17PP","17PA"],s=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4P","4PP","4PA","9P","9PP","9PA","11P","11PP","11PA","12PP","12PA","14P","14PP","14PA","15P","15PP","15PA","16P","17P","17PP","17PA"],i=["10 - 13.9 Kg","14 - 19.9 Kg","20 - 24.9 Kg","25 - 29.9 Kg","3 - 3.9 Kg","30 - 34.9 Kg","35 - 39.9 Kg","4 - 4.9 Kg","40 Kg +","40 - 49.9 Kg","50 Kg +","6 - 9.9 Kg","Unknown"],l=["pellets","tablets","granules"];class c extends n["a"]{constructor(){super(),Object(a["a"])(this,"type",void 0),this.type="pepfar"}setReportType(e){this.type=e}getTptNewInitiations(){return this.getReport(`programs/${this.programID}/reports/tpt_newly_initiated`)}getRegimenFormulationReport(e,t){return this.getReport(`programs/${this.programID}/reports/regimens_and_formulations`,{regimen:e,formulation:t})}getRegimenReport(){return this.getReport("regimen_report",{type:this.type})}getRegimenSwitchReport(e=!1){return this.getReport("regimen_switch",{pepfar:e})}getRegimensByWeight(){return this.getReport(`programs/${this.programID}/reports/regimens_by_weight_and_gender`)}getSCReport(e=!1){return this.getReport("sc_arvdisp",{pepfar:e})}}},ad8d:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var a=r("5969");const n=["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"];class o extends a["a"]{constructor(){super()}getBookedAppointments(e){return a["a"].getJson(`programs/${this.programID}/scheduled_appointments`,{date:e})}getViralLoadResults(e){return this.getReport(`/programs/${this.programID}/reports/high_vl_patients`,{range:e})}getOtherOutcome(e){return this.getReport("patient_outcome_list",{outcome:e})}getPatientVisitTypes(){return this.getReport("patient_visit_types")}getClientsDueForVl(){return this.getReport("clients_due_vl")}getClientRentention(){return this.getReport(`/programs/${this.programID}/reports/retention`)}getExternalConsultationClients(){return this.getReport(this.programID+"/external_consultation_clients")}getMissedAppointments(){return this.getReport("missed_appointments")}getPregnantWomen(){return this.getReport(`/programs/${this.programID}/reports/pregnant_patients`)}getArchivingCandidates(){return a["a"].getJson(`programs/${this.programID}/reports/archiving_candidates`,{start_date:this.date})}getIncompleteVisits(){return this.getReport("incomplete_visits",{tool_name:"INCOMPLETE VISITS"})}}}}]);
//# sourceMappingURL=chunk-3812bb0c.ab33aa40.js.map