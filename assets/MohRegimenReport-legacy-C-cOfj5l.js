System.register(["./ReportMixin.vue_vue_type_script_lang-legacy-CGeB03oo.js","./TableReportTemplate-legacy-C4LBGtof.js","./index-legacy-CNrLGT3P.js","./HisStandardForm-legacy-OekRIZB_.js","./ReportErrors-legacy-C_GtpKAy.js"],(function(t,e){"use strict";var s,i,r,a,n,o,d,l,c,h,p,u;return{setters:[t=>{s=t._},t=>{i=t.R},t=>{r=t.bT,a=t.d,n=t.I,o=t.L,d=t._,l=t.r,c=t.o,h=t.c,p=t.w,u=t.b},null,null],execute:function(){class e extends r{regenerate;data;clients;constructor(){super(),this.clients=[],this.data=[],this.regenerate=!1}setRegenerate(t){this.regenerate=t}async generateReport(){this.data=[],this.clients=[];const t=await this.getReport("latest_regimen_dispensed",this.buildRequest({rebuild_outcome:this.regenerate}));if(!t)return[];for(const e in t){for(const s in t[e]){const i=t[e][s];this.data.push({identifier:i.identifier,drugName:i.name,gender:i.gender,dob:i.birthdate,dispensationDate:i.dispensation_date,packSize:i.pack_sizes[0],packSizes:i.pack_sizes.length,quantity:i.quantity})}this.clients.push(parseInt(`${e}`))}return this.data}}const g=a({mixins:[s],components:{ReportTemplate:i,IonPage:n},data:()=>({title:"Regimen Report",rows:[],headerList:[],columns:[[o.thTxt("ARV#"),o.thTxt("Gender"),o.thTxt("DOB"),o.thTxt("Drug Name"),o.thTxt("Date"),o.thTxt("Pack size"),o.thTxt("Total pack"),o.thTxt("Total pills")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(t,s,i=!1){this.rows=[],this.report=new e,this.report.setOccupation(s.occupation),this.report.setRegenerate(i),this.report.setStartDate(s.start_date),this.report.setEndDate(s.end_date),this.period=this.report.getDateIntervalPeriod();const r=await this.report.generateReport();this.setRows(r),this.headerList=[{label:"Total clients",value:this.report.clients.length}]},setRows(t){const e=t=>t?o.tdDate(t):o.td("N/A");this.rows=this.sortByArvNumber(t,"identifier").map((t=>[this.tdARV(t.identifier),o.td(this.formatGender(t.gender)),e(t.dob),o.td(t.drugName),e(t.dispensationDate),o.td(t.packSize),o.td(t.packSizes),o.td(t.quantity)]))}}});t("default",d(g,[["render",function(t,e,s,i,r,a){const n=l("report-template"),o=l("ion-page");return c(),h(o,null,{default:p((()=>[u(n,{reportPrefix:"MoH",title:t.title,period:t.period,rows:t.rows,fields:t.fields,columns:t.columns,hasServerSideCaching:!0,headerInfoList:t.headerList,onReportConfiguration:t.onPeriod},null,8,["title","period","rows","fields","columns","headerInfoList","onReportConfiguration"])])),_:1})}]]))}}}));