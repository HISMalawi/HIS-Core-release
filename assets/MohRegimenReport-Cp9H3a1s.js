var c=Object.defineProperty;var l=(t,s,e)=>s in t?c(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var o=(t,s,e)=>l(t,typeof s!="symbol"?s+"":s,e);import{_ as m}from"./ReportMixin.vue_vue_type_script_lang-Da78yexD.js";import{R as u}from"./TableReportTemplate-B9gJG81F.js";import{ce as f,d as g,a5 as R,aq as r,a8 as _,v as w,w as D,ad as p,u as T,x as k}from"./index-CG6KEPsv.js";import"./BasicReportTemplate-DH-zB7dh.js";import"./Export-ngX2Az_3.js";import"./index-bO2fy8Iw.js";import"./Pagination-BNbmZwZV.js";import"./HisStandardForm-CWpBcokh.js";import"./ReportErrors-CnbOzUh9.js";class x extends f{constructor(){super();o(this,"regenerate");o(this,"data");o(this,"clients");this.clients=[],this.data=[],this.regenerate=!1}setRegenerate(e){this.regenerate=e}async generateReport(){this.data=[],this.clients=[];const e=await this.getReport("latest_regimen_dispensed",this.buildRequest({rebuild_outcome:this.regenerate}));if(!e)return[];for(const a in e){for(const n in e[a]){const i=e[a][n];this.data.push({identifier:i.identifier,drugName:i.name,gender:i.gender,dob:i.birthdate,dispensationDate:i.dispensation_date,packSize:i.pack_sizes[0],packSizes:i.pack_sizes.length,quantity:i.quantity})}this.clients.push(parseInt("".concat(a)))}return this.data}}const S=g({mixins:[m],components:{ReportTemplate:u,IonPage:R},data:()=>({title:"Regimen Report",rows:[],headerList:[],columns:[[r.thTxt("ARV#"),r.thTxt("Gender"),r.thTxt("DOB"),r.thTxt("Drug Name"),r.thTxt("Date"),r.thTxt("Pack size"),r.thTxt("Total pack"),r.thTxt("Total pills")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(t,s,e=!1){this.rows=[],this.report=new x,this.report.setOccupation(s.occupation),this.report.setRegenerate(e),this.report.setStartDate(s.start_date),this.report.setEndDate(s.end_date),this.period=this.report.getDateIntervalPeriod();const a=await this.report.generateReport();this.setRows(a),this.headerList=[{label:"Total clients",value:this.report.clients.length}]},setRows(t){const s=e=>e?r.tdDate(e):r.td("N/A");this.rows=this.sortByArvNumber(t,"identifier").map(e=>[this.tdARV(e.identifier),r.td(this.formatGender(e.gender)),s(e.dob),r.td(e.drugName),s(e.dispensationDate),r.td(e.packSize),r.td(e.packSizes),r.td(e.quantity)])}}});function b(t,s,e,a,n,i){const d=p("report-template"),h=p("ion-page");return T(),w(h,null,{default:D(()=>[k(d,{reportPrefix:"MoH",title:t.title,period:t.period,rows:t.rows,fields:t.fields,columns:t.columns,hasServerSideCaching:!0,headerInfoList:t.headerList,onReportConfiguration:t.onPeriod},null,8,["title","period","rows","fields","columns","headerInfoList","onReportConfiguration"])]),_:1})}const L=_(S,[["render",b]]);export{L as default};