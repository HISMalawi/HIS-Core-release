(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70d1d76d"],{2265:function(e,t,r){"use strict";r.r(t);var o=r("7a23");function a(e,t,r,a,n,s){const i=Object(o["resolveComponent"])("base-report-table");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{title:"Clinic TX RTT Report","report-icon":"reports/restart.png",columns:e.columns,rows:e.rows,period:e.period,useDateRangeFilter:"",onCustomFilter:e.fetchData,onDrilldown:e.onDrilldown},null,8,["columns","rows","period","onCustomFilter","onDrilldown"])}r("14d9"),r("13d5");var n=r("b211"),s=r("8727"),i=r("da44"),l=r("564f"),c=r("ad8d"),d=r("2ef0"),u=r("9a5e"),p=r("23e6"),b=r("9283"),m=r("0011"),g=r("3a8c"),h=Object(o["defineComponent"])({name:"TBPrev",components:{BaseReportTable:s["a"]},setup(){const e=Object(o["ref"])("-"),t=Object(o["ref"])([]),r=new u["a"],a=[{path:"index",label:"#",initialSort:!0,initialSortOrder:"asc"},{path:"age_group",label:"Age group"},{path:"gender",label:"Gender"},{path:"return_less_than_3_mo",label:"Returned <3 mo",drillable:!0},{path:"return_by_3_to_5_mo",label:"Returned 3-5 mo",drillable:!0},{path:"return_6_plus_mo",label:"Returned 6+ mo",drillable:!0}],s=(e,t)=>e.filter(e=>t(e.months)).map(e=>e.patient_id),h=async(e,r,o)=>{for(const a of c["a"]){const n=Object(d["get"])(e,`${a}.${r}`,[]);t.value.push({gender:Object(m["f"])(r),index:o++,age_group:a,return_less_than_3_mo:s(n,e=>e<3),return_by_3_to_5_mo:s(n,e=>e>=3&&e<6),return_6_plus_mo:s(n,e=>e>=6)})}},f=(e,t,r)=>e.filter(e=>e.gender===r).reduce((e,r)=>e.concat(r[t]),[]),_=(e,r)=>{t.value.push({index:r++,gender:"Male",age_group:"All",return_less_than_3_mo:f(e,"return_less_than_3_mo","Male"),return_by_3_to_5_mo:f(e,"return_by_3_to_5_mo","Male"),return_6_plus_mo:f(e,"return_6_plus_mo","Male")})},j=async(e,o)=>{const a=["return_less_than_3_mo","return_by_3_to_5_mo","return_6_plus_mo"],n=["FP","FNP","FBf"],s=Object(d["uniq"])(a.map(t=>f(e,t,"Female")).reduce((e,t)=>e.concat(t),[])),i=await r.getMaternalStatus(s),l=i.FBf.concat(i.FP),c=(t,r)=>f(e,t,"Female").filter(e=>"FNP"===r?!l.includes(e):i[r].includes(e));for(const r of n){const e={index:o++,gender:r,age_group:"All"};a.forEach(t=>e[t]=c(t,r)),t.value.push(e)}},O=async({dateRange:o})=>{n["a"].show(),r.setStartDate(o.startDate),r.setEndDate(o.endDate),e.value=r.getDateIntervalPeriod();const a=await r.getClinicTxRtt();t.value=[],h(a,"F",1),h(a,"M",21),_(t.value,41),await j(t.value,42),await n["a"].hide()},y=async e=>{const t=[{path:"arv_number",label:"ARV Number",preSort:g["a"],initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:b["c"].toStandardHisDisplayFormat},{path:"gender",label:"Gender",formatter:m["f"]},{path:"address",label:"Address"}],r=e.row[e.column.path],o=[];for(const a of r){const e=await p["a"].findByID(a),t=new p["a"](e);o.push({arv_number:t.getArvNumber(),birthdate:t.getBirthdate(),gender:t.getGender(),address:""+t.getCurrentVillage()})}await i["a"].show(l["a"],{title:`${e.row.age_group} ${e.column.label} ${e.row.gender}s`,columns:t,rows:o})};return{rows:t,columns:a,period:e,fetchData:O,onDrilldown:y}}}),f=r("d959"),_=r.n(f);const j=_()(h,[["render",a]]);t["default"]=j},"3a8c":function(e,t,r){"use strict";function o(e){return parseInt(e.split("-")[2])||0}r.d(t,"a",(function(){return o}))},"564f":function(e,t,r){"use strict";var o=r("7a23");function a(e,t,r,a,n,s){const i=Object(o["resolveComponent"])("IonIcon"),l=Object(o["resolveComponent"])("IonButton"),c=Object(o["resolveComponent"])("IonButtons"),d=Object(o["resolveComponent"])("IonTitle"),u=Object(o["resolveComponent"])("IonToolbar"),p=Object(o["resolveComponent"])("IonHeader"),b=Object(o["resolveComponent"])("data-table"),m=Object(o["resolveComponent"])("IonContent"),g=Object(o["resolveComponent"])("IonFooter"),h=Object(o["resolveComponent"])("IonPage");return Object(o["openBlock"])(),Object(o["createBlock"])(h,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{slot:"end"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{slot:"end",onClick:t[0]||(t[0]=t=>e.modal.hide()),"icon-only":""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{icon:e.close},null,8,["icon"])]),_:1})]),_:1}),Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"row-actions-buttons":e.rowActionButtons,color:"custom"},null,8,["rows","async-rows","columns","row-actions-buttons"])]),_:1}),Object(o["createVNode"])(g,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{class:"ion-margin ion-float-right",onClick:t[1]||(t[1]=t=>e.modal.hide())},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Close")]),_:1})]),_:1})]),_:1})}var n=r("d867"),s=r("4971"),i=r("ff79"),l=r("da44"),c=Object(o["defineComponent"])({name:"DrilldownTable",components:{DataTable:s["DataTable"],IonButton:n["IonButton"],IonPage:n["IonPage"],IonHeader:n["IonHeader"],IonContent:n["IonContent"],IonToolbar:n["IonToolbar"],IonButtons:n["IonButtons"],IonFooter:n["IonFooter"],IonTitle:n["IonTitle"],IonIcon:n["IonIcon"]},props:{title:{type:String,default:"Report"},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},columns:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},actionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!1},period:{type:String,default:""}},setup(){return{close:i["close"],modal:l["a"]}}}),d=r("d959"),u=r.n(d);const p=u()(c,[["render",a]]);t["a"]=p},5969:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r("ade3"),a=(r("14d9"),r("1c74")),n=r("9283"),s=r("bef6"),i=r("5a0c"),l=r.n(i);class c extends a["e"]{constructor(){super(),Object(o["a"])(this,"programID",void 0),Object(o["a"])(this,"startDate",void 0),Object(o["a"])(this,"endDate",void 0),Object(o["a"])(this,"date",void 0),Object(o["a"])(this,"quarter",void 0),this.endDate="",this.startDate="",this.quarter="",this.date=a["e"].getSessionDate(),this.programID=a["e"].getProgramID()}getDateIntervalPeriod(){return`${n["c"].toStandardHisDisplayFormat(this.startDate)} - ${n["c"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setQuarter(e){this.quarter=e}getReport(e,t={}){return a["e"].getJson(e,this.buildRequest(t))}getMaternalStatus(e,t="pepfar"){const r=s["a"].parameterizeObjToString(this.buildRequest({report_definition:t}));return a["e"].postJson("vl_maternal_status?"+r,{patient_ids:e})}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.quarter&&(t["quarter"]=this.quarter),{...t,...e}}static getQuarterBounds(e){const t=t=>l()(`${e}-${t}-01`).daysInMonth(),r=t=>`${e}-${t}-01 00:00`,o=r=>`${e}-${r}-${t(r)} 00:00`;return{Q1:{qtr:1,start:r("01"),end:o("03")},Q2:{qtr:2,start:r("04"),end:o("06")},Q3:{qtr:3,start:r("07"),end:o("09")},Q4:{qtr:4,start:r("10"),end:o("12")}}}static getQtrByDate(e){const t=this.getQuarterBounds(e.getFullYear());for(const r in t){const{start:o,end:a}=t[r];if(e>=new Date(o)&&e<=new Date(a))return t[r]}return null}static buildQtrObj(e,t){const r=this.getQuarterBounds(t),{start:o,end:a}=r[e];return{start:o,end:a,name:`${e} ${t}`}}static getReportQuarters(e=5){const t=[];let r=new Date,o=r.getFullYear();const a=o;r=new Date(`${a}-${r.getMonth()+1}-${r.getDate()} 00:00`);const n=this.getQtrByDate(r);let s=n.qtr,i=0;4===s&&t.push(this.buildQtrObj("Q1",o+1));while(i<e)0===i&&s<4&&t.push(this.buildQtrObj("Q"+(s+1),o)),t.push(this.buildQtrObj("Q"+s,o)),s=s>0?s-=1:s,o=0==s?o-1:o,s=0==s?s+=4:s,i++;return t}}},8727:function(e,t,r){"use strict";var o=r("7a23");const a=["src"],n=["innerHTML"],s=["innerHTML"],i={key:1},l={key:2},c={key:3},d={key:4};function u(e,t,r,u,p,b){const m=Object(o["resolveComponent"])("ion-col"),g=Object(o["resolveComponent"])("ion-row"),h=Object(o["resolveComponent"])("ion-grid"),f=Object(o["resolveComponent"])("ion-card-header"),_=Object(o["resolveComponent"])("data-table"),j=Object(o["resolveComponent"])("ion-card-content"),O=Object(o["resolveComponent"])("ion-card"),y=Object(o["resolveComponent"])("Layout");return Object(o["openBlock"])(),Object(o["createBlock"])(y,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{class:"his-card",style:{padding:"0 !important"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(g,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(o["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,a)]),_:1}),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h1",{innerHTML:e.title},null,8,n),e.subtitle?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,s)):Object(o["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",i," Period: "+Object(o["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",l," Quarter: "+Object(o["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",c,"Date: "+Object(o["toDisplayString"])(e.dayjs(e.date).format("DD/MMM/YYYY")),1)):Object(o["createCommentVNode"])("",!0),e.totalClients?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",d,"Total Clients: "+Object(o["toDisplayString"])(e.totalClients),1)):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(j,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(_,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(o["createSlots"])({_:2},[Object(o["renderList"])(e.$slots,(t,r)=>({name:r,fn:Object(o["withCtx"])(({filter:t})=>[Object(o["renderSlot"])(e.$slots,r,{filter:t})])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})]),_:3})}r("14d9");var p=r("d867"),b=r("ad8d"),m=r("5a0c"),g=r.n(m),h=r("8d56"),f=r("5969"),_=r("4971"),j=r("b5e4"),O=r("2ef0"),y=r("1c74");function w(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function D({columns:e,rows:t,quarter:r,period:o,filters:a}){let n=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return n+="\n",n+=Object(_["sortRows"])(t,(null===a||void 0===a?void 0:a.sort)||[]).map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let r=Object(O["get"])(t,e.path);return"function"===typeof e.formatter&&r&&(r=e.formatter(r,t)),w(e.drillable&&Array.isArray(r)?r.length:r)}).join(",")).join("\n"),n+="\nDate Created:  "+g()().format("DD/MMM/YYYY HH:MM:ss"),r&&(n+="\nQuarter: "+r),o&&(n+="\nQuarter: "+o),n+="\ne-Mastercard Version : "+y["e"].getAppVersion(),n+="\nAPI Version "+y["e"].getApiVersion(),n+="\nSite UUID: "+y["e"].getSiteUUID(),n}function v(e){const t=new Blob([D(e)],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.setAttribute("download",e.filename+".csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}var C=Object(o["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],Layout:h["a"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:_["DataTable"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const r=Object(o["computed"])(()=>`${b["b"].getLocationName()} ${e.title} ${e.period?e.period:e.date}`),a=Object(o["computed"])(()=>{const o=[...e.actionButtons];return e.showRefreshButton&&o.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&o.push({label:"CSV",color:"primary",action:async(t,o,a,n)=>{var s;return v({rows:o,filters:a,columns:n,quarter:null===(s=e.quarter)||void 0===s?void 0:s.label,period:e.period,filename:r.value})}}),o}),n=Object(o["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",gridSize:5,value:{startDate:e.period.split("-")[0],endDate:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:f["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",value:e.date}),t}),s=e=>"dateRange"in e&&g()(e.dateRange.startDate).isAfter(e.dateRange.endDate)?Object(j["e"])("Invalid date range"):n.value.every(t=>!1===t.required||(Object(O["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(O["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(O["isEmpty"])(e))))?t("customFilter",e):void Object(j["e"])("Invalid filters"),i=e=>{t("drilldown",e)};return{actionBtns:a,filters:n,onCustomFilter:s,onDrilldown:i,dayjs:g.a}}}),I=r("d959"),R=r.n(I);const B=R()(C,[["render",u]]);t["a"]=B},"9a5e":function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return d}));var o=r("ade3"),a=(r("14d9"),r("13d5"),r("5969")),n=r("bef6"),s=r("2ef0"),i=r("ad8d");const l=["F","M"],c=["Died","IIT <3 mo","IIT 3-5 mo","IIT 6+ mo","Tranferred out","Refused (Stopped)"];class d extends a["a"]{constructor(){super(),Object(o["a"])(this,"org",void 0),Object(o["a"])(this,"initializeArvRefillReportTables",void 0),this.org="pepfar",this.initializeArvRefillReportTables=!0}initArvRefillPeriod(e){this.initializeArvRefillReportTables=e}setOrg(e){this.org=e}getClinicTxRtt(){return this.getReport(`programs/${this.programID}/reports/clinic_tx_rtt`)}getTxMMDClientLevelData(e){const t=n["a"].parameterizeObjToString({start_date:this.startDate,end_date:this.endDate,program_id:this.programID,date:this.date,org:this.org}),r="tx_mmd_client_level_data?"+t;return a["a"].postJson(r,{patient_ids:e})}remapTxClientLevelData(e){return e.map(e=>{let t=null;const r=[];for(const o in e){const a=Object.values(e[o]);a.forEach(e=>{for(const o in e){const a=e[o];t||(t={id:a.arv_number,dob:a.birthdate,dispenseDate:a.start_date}),r.push({name:a.drug_name,quantity:a.quantity,dose:a.dose_per_day})}})}return{...t,drugs:r}})}getTxCurrMMDReport(e,t){return this.getReport("arv_refill_periods",{org:this.org,min_age:""+e,max_age:""+t,initialize_tables:""+this.initializeArvRefillReportTables})}getTxMlReport(){return this.getReport("tx_ml")}getTxRttReport(){return this.getReport("tx_rtt")}buildTxMlReportData(e){const t=[];return l.forEach(r=>{i["a"].forEach(o=>{const a={gender:r,age_group:o};c.forEach((t,n)=>{a[t]=Object(s["get"])(e,`${o}.${r}[${n}]`,[])}),t.push(a)})}),t}aggregateTxML(e,t,r){return Object.values(e).reduce((e,o)=>o[t]?[...o[t][c.indexOf(r)],...e]:e,[])}getAggregatedTxMLMaleData(e){const t={gender:"Male",age_group:"All"};for(const r of c)t[r]=this.aggregateTxML(e,"M",r);return t}async getAggregatedTxMLMaternalStatus(e){const t=c.reduce((t,r)=>[...t,{indicator:r,data:this.aggregateTxML(e,"F",r)}],[]),r=Object(s["uniq"])(t.reduce((e,t)=>[...e,...t.data],[]).map(e=>e.patient_id)),o=await this.getMaternalStatus(r),a=o.FBf.concat(o.FP),n=[];for(const s of["FP","FNP","FBf"]){const e={gender:s,age_group:"All"};for(const r of c)e[r]=t.reduce((e,t)=>t.indicator===r?[...e,...t.data]:e,[]).filter(e=>"FNP"===s?!a.includes(e.patient_id):o[s].includes(e.patient_id));n.push(e)}return n}}},ad8d:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var o=r("5969");const a=["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"];class n extends o["a"]{constructor(){super()}getBookedAppointments(e){return o["a"].getJson(`programs/${this.programID}/scheduled_appointments`,{date:e})}getViralLoadResults(e){return this.getReport(`/programs/${this.programID}/reports/high_vl_patients`,{range:e})}getOtherOutcome(e){return this.getReport("patient_outcome_list",{outcome:e})}getPatientVisitTypes(){return this.getReport("patient_visit_types")}getClientsDueForVl(){return this.getReport("clients_due_vl")}getClientRentention(){return this.getReport(`/programs/${this.programID}/reports/retention`)}getExternalConsultationClients(){return this.getReport(this.programID+"/external_consultation_clients")}getMissedAppointments(){return this.getReport("missed_appointments")}getPregnantWomen(){return this.getReport(`/programs/${this.programID}/reports/pregnant_patients`)}getArchivingCandidates(){return o["a"].getJson(`programs/${this.programID}/reports/archiving_candidates`,{start_date:this.date})}getIncompleteVisits(){return this.getReport("incomplete_visits",{tool_name:"INCOMPLETE VISITS"})}}},da44:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("d867");const a={async show(e,t,r="custom-modal",a=!0){const n=await o["modalController"].create({component:e,cssClass:r,backdropDismiss:a,componentProps:t});n.present();const{data:s}=await n.onWillDismiss();if(s)return s},async hide(e){await o["modalController"].dismiss(e)}}}}]);
//# sourceMappingURL=chunk-70d1d76d.3e13868a.js.map