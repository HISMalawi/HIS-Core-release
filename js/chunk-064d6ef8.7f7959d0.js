(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-064d6ef8"],{5969:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r("1c74"),n=r("9283"),o=r("5a0c"),s=r.n(o);class i extends a["e"]{constructor(){super(),this.endDate="",this.startDate="",this.quarter="",this.date=a["e"].getSessionDate(),this.programID=a["e"].getProgramID()}getDateIntervalPeriod(){return`${n["c"].toStandardHisDisplayFormat(this.startDate)} - ${n["c"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setQuarter(e){this.quarter=e}getReport(e,t={}){return a["e"].getJson(e,this.buildRequest(t))}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.quarter&&(t["quarter"]=this.quarter),{...t,...e}}static getQuarterBounds(e){const t=t=>s()(`${e}-${t}-01`).daysInMonth(),r=t=>`${e}-${t}-01 00:00`,a=r=>`${e}-${r}-${t(r)} 00:00`;return{Q1:{qtr:1,start:r("01"),end:a("03")},Q2:{qtr:2,start:r("04"),end:a("06")},Q3:{qtr:3,start:r("07"),end:a("09")},Q4:{qtr:4,start:r("10"),end:a("12")}}}static getQtrByDate(e){const t=this.getQuarterBounds(e.getFullYear());for(const r in t){const{start:a,end:n}=t[r];if(e>=new Date(a)&&e<=new Date(n))return t[r]}return null}static buildQtrObj(e,t){const r=this.getQuarterBounds(t),{start:a,end:n}=r[e];return{start:a,end:n,name:`${e} ${t}`}}static getReportQuarters(e=5){const t=[];let r=new Date,a=r.getFullYear();const n=a;r=new Date(`${n}-${r.getMonth()+1}-${r.getDate()} 00:00`);const o=this.getQtrByDate(r);let s=o.qtr,i=0;4===s&&t.push(this.buildQtrObj("Q1",a+1));while(i<e)0===i&&s<4&&t.push(this.buildQtrObj("Q"+(s+1),a)),t.push(this.buildQtrObj("Q"+s,a)),s=s>0?s-=1:s,a=0==s?a-1:a,s=0==s?s+=4:s,i++;return t}}},8727:function(e,t,r){"use strict";var a=r("7a23");const n={key:1},o={key:2},s={key:3},i={key:4};function l(e,t,r,l,c,u){const d=Object(a["resolveComponent"])("ion-col"),p=Object(a["resolveComponent"])("ion-row"),g=Object(a["resolveComponent"])("ion-grid"),m=Object(a["resolveComponent"])("ion-card-header"),b=Object(a["resolveComponent"])("data-table"),h=Object(a["resolveComponent"])("ion-card-content"),y=Object(a["resolveComponent"])("ion-card"),f=Object(a["resolveComponent"])("Layout");return Object(a["openBlock"])(),Object(a["createBlock"])(f,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(y,{class:"his-card",style:{padding:"0 !important"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(g,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(p,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])("img",{src:"assets/images/"+e.reportIcon,style:{height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"}},null,12,["src"])]),_:1}),Object(a["createVNode"])(d,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])("h1",{innerHTML:e.title},null,8,["innerHTML"]),e.subtitle?(Object(a["openBlock"])(),Object(a["createBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,["innerHTML"])):Object(a["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(a["openBlock"])(),Object(a["createBlock"])("h5",n," Period: "+Object(a["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(a["openBlock"])(),Object(a["createBlock"])("h5",o," Quarter: "+Object(a["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(a["openBlock"])(),Object(a["createBlock"])("h5",s,"Date: "+Object(a["toDisplayString"])(e.dayjs(e.date).format("DD/MMM/YYYY")),1)):Object(a["createCommentVNode"])("",!0),e.totalClients?(Object(a["openBlock"])(),Object(a["createBlock"])("h5",i,"Total Clients: "+Object(a["toDisplayString"])(e.totalClients),1)):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(h,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},null,8,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","onCustomFilter","onDrilldown"])]),_:1})]),_:1})]),_:1})}var c=r("8a30"),u=r("ad8d"),d=r("5a0c"),p=r.n(d),g=r("8d56"),m=r("5969"),b=r("4971"),h=r("b5e4"),y=r("2ef0"),f=r("1c74");function D(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function j({columns:e,rows:t,quarter:r,period:a}){let n=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return n+="\n",n+=t.map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let r=Object(y["get"])(t,e.path);return"function"===typeof e.formatter&&r&&(r=e.formatter(r)),D(e.drillable&&Array.isArray(r)?r.length:r)}).join(",")).join("\n"),n+="\nDate Created:  "+new Date,r&&(n+="\nQuarter: "+r),a&&(n+="\nQuarter: "+a),n+="\ne-Mastercard Version : "+f["e"].getAppVersion(),n+="\nAPI Version "+f["e"].getApiVersion(),n+="\nSite UUID: "+f["e"].getSiteUUID(),n}function O(e){const t=new Blob([j(e)],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.setAttribute("download",e.filename+".csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}var v=Object(a["defineComponent"])({name:"BaseReportTable",components:{IonCard:c["IonCard"],IonCardHeader:c["IonCardHeader"],IonCardContent:c["IonCardContent"],Layout:g["a"],IonGrid:c["IonGrid"],IonRow:c["IonRow"],IonCol:c["IonCol"],DataTable:b["DataTable"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const r=Object(a["computed"])(()=>`${u["b"].getLocationName()} ${e.title} ${e.period?e.period:e.date}`),n=Object(a["computed"])(()=>{const a=[...e.actionButtons];return e.showRefreshButton&&a.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&a.push({label:"CSV",color:"primary",action:async(t,a)=>{var n;return O({rows:a,columns:e.columns,quarter:null===(n=e.quarter)||void 0===n?void 0:n.label,period:e.period,filename:r.value})}}),a}),o=Object(a["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",gridSize:5,value:{startDate:e.period.split("-")[0],endDate:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:m["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",value:e.date}),t}),s=e=>"dateRange"in e&&p()(e.dateRange.startDate).isAfter(e.dateRange.endDate)?Object(h["e"])("Invalid date range"):o.value.every(t=>!1===t.required||(Object(y["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(y["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(y["isEmpty"])(e))))?t("customFilter",e):void Object(h["e"])("Invalid filters"),i=e=>{t("drilldown",e)};return{actionBtns:n,filters:o,onCustomFilter:s,onDrilldown:i,dayjs:p.a}}}),w=r("d959"),A=r.n(w);const P=A()(v,[["render",l]]);t["a"]=P},"87e7":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return l}));var a=r("5969");const n=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4PP","4PA","9PP","9PA","11PP","11PA","12PP","12PA","14PP","14PA","15PP","15PA","16P","17PP","17PA"],o=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4P","4PP","4PA","9P","9PP","9PA","11P","11PP","11PA","12PP","12PA","14P","14PP","14PA","15P","15PP","15PA","16P","17P","17PP","17PA"],s=["10 - 13.9 Kg","14 - 19.9 Kg","20 - 24.9 Kg","25 - 29.9 Kg","3 - 3.9 Kg","30 - 34.9 Kg","35 - 39.9 Kg","4 - 4.9 Kg","40 Kg +","40 - 49.9 Kg","50 Kg +","6 - 9.9 Kg","Unknown"],i=["pellets","tablets","granules"];class l extends a["a"]{constructor(){super(),this.type="pepfar"}setReportType(e){this.type=e}getTptNewInitiations(){return this.getReport(`programs/${this.programID}/reports/tpt_newly_initiated`)}getRegimenFormulationReport(e,t){return this.getReport(`programs/${this.programID}/reports/regimens_and_formulations`,{regimen:e,formulation:t})}getRegimenReport(){return this.getReport("regimen_report",{type:this.type})}getRegimenSwitchReport(e=!1){return this.getReport("regimen_switch",{pepfar:e})}getRegimensByWeight(){return this.getReport(`programs/${this.programID}/reports/regimens_by_weight_and_gender`)}getSCReport(e=!1){return this.getReport("sc_arvdisp",{pepfar:e})}}},ad8d:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var a=r("5969");const n=["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"];class o extends a["a"]{constructor(){super()}getBookedAppointments(e){return a["a"].getJson(`programs/${this.programID}/scheduled_appointments`,{date:e})}getViralLoadResults(e){return this.getReport(`/programs/${this.programID}/reports/high_vl_patients`,{range:e})}getOtherOutcome(e){return this.getReport("patient_outcome_list",{outcome:e})}getPatientVisitTypes(){return this.getReport("patient_visit_types")}getClientsDueForVl(){return this.getReport("clients_due_vl")}getClientRentention(){return this.getReport(`/programs/${this.programID}/reports/retention`)}getExternalConsultationClients(){return this.getReport(this.programID+"/external_consultation_clients")}getMissedAppointments(){return this.getReport("missed_appointments")}getPregnantWomen(){return this.getReport(`/programs/${this.programID}/reports/pregnant_patients`)}getArchivingCandidates(){return a["a"].getJson(`programs/${this.programID}/reports/archiving_candidates`,{start_date:this.date})}getIncompleteVisits(){return this.getReport("incomplete_visits",{tool_name:"INCOMPLETE VISITS"})}}},cd6a:function(e,t,r){"use strict";r.r(t);var a=r("7a23");function n(e,t,r,n,o,s){const i=Object(a["resolveComponent"])("base-report-table");return Object(a["openBlock"])(),Object(a["createBlock"])(i,{title:"MoH Viral Load Report","report-icon":"reports/vl.png",period:e.period,columns:e.columns,rows:e.rows,"custom-filters":e.filters,useDateRangeFilter:"",onRegenerate:t[1]||(t[1]=()=>e.regenerateReport()),onCustomFilter:e.fetchData},null,8,["period","columns","rows","custom-filters","onCustomFilter"])}var o=r("b211"),s=r("8727"),i=r("87e7"),l=r("df93"),c=r("ad8d"),u=r("2ef0"),d=Object(a["defineComponent"])({name:"ViralLoad",components:{BaseReportTable:s["a"]},setup(){const e=Object(a["ref"])([]),t=Object(a["ref"])(),r=Object(a["ref"])(),n=Object(a["ref"])("-"),s=[{path:"index",label:"#",initialSort:!0,initialSortOrder:"asc"},{path:"ageGroup",label:"Age Group"},...i["b"].map(e=>({path:e,label:e})),{path:"N/A",label:"Uknown"}],d=async a=>{await o["a"].show();const s=new l["a"];t.value=a.minVL,r.value=a.maxVL,s.setStartDate(a.dateRange.startDate),s.setEndDate(a.dateRange.endDate),n.value=s.getDateIntervalPeriod();const d=await s.getViralLoad({from:t.value,to:r.value});let p=0;const g=[];for(let e of c["a"]){e=e.replace("-"," - ");const t={index:p++,ageGroup:e};for(const r of[...i["b"],"N/A"])t[r]=Object(u["get"])(d,`${e}.${r}`,0);g.push(t)}await o["a"].hide(),e.value=g},p=async()=>{const[e,a]=n.value.split(" - ");e&&a&&t.value&&r.value&&await d({dateRange:{startDate:e,endDate:a},minVL:t.value,maxVL:r.value})},g=Object(a["computed"])(()=>[{id:"minVL",placeholder:"Min Viral Load",type:"number",value:t.value},{id:"maxVL",placeholder:"Max Viral Load",type:"number",value:r.value}]);return{period:n,rows:e,columns:s,filters:g,regenerateReport:p,fetchData:d}}}),p=r("d959"),g=r.n(p);const m=g()(d,[["render",n]]);t["default"]=m},df93:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r("bef6"),n=r("5969");class o extends n["a"]{constructor(){super()}getVLCoverage(e={}){return this.getReport(`programs/${this.programID}/reports/viral_load_coverage`,{rebuild_outcomes:!0,...e})}getMaternalStatus(e){const t=a["a"].parameterizeObjToString({start_date:this.startDate,end_date:this.endDate,date:this.date,program_id:this.programID,report_definition:"pepfar"});return n["a"].postJson("vl_maternal_status?"+t,{patient_ids:e})}getViralLoad(e={}){return this.getReport(`programs/${this.programID}/reports/vl_disaggregated`,e)}}}}]);
//# sourceMappingURL=chunk-064d6ef8.7f7959d0.js.map