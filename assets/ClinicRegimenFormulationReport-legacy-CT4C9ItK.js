System.register(["./regimen_report_service-legacy-nd-as-fr.js","./ReportMixin.vue_vue_type_script_lang-legacy-CGeB03oo.js","./TableReportTemplate-legacy-C4LBGtof.js","./index-legacy-CNrLGT3P.js","./HisStandardForm-legacy-OekRIZB_.js","./ReportErrors-legacy-C_GtpKAy.js"],(function(e,t){"use strict";var r,o,i,n,s,a,l,d,p,u,c,m,h;return{setters:[e=>{r=e.R,o=e.F,i=e.a},e=>{n=e._},e=>{s=e.R},e=>{a=e.d,l=e.L,d=e.F,p=e.V,u=e._,c=e.r,m=e.o,h=e.c},null,null],execute:function(){const t=a({mixins:[n],components:{ReportTemplate:s},data:()=>({title:"Regimen Formulation: Patient level report",totalClients:[],rows:[],columns:[[l.thTxt("ARV#"),l.thTxt("Formulation"),l.thTxt("Gender"),l.thTxt("DOB")]]}),created(){this.fields=[...this.getDateDurationFields(),{id:"regimen",helpText:"Select regimen",type:d.TT_SELECT,validation:e=>p.required(e),options:()=>r.map((e=>({label:e,value:e})))},{id:"formulation",helpText:"Select formulation",type:d.TT_SELECT,validation:e=>p.required(e),options:()=>o.map((e=>({label:e,value:e})))}]},methods:{async onPeriod({regimen:e,formulation:t},r){this.rows=[],this.report=new i,this.report.setStartDate(r.start_date),this.report.setEndDate(r.end_date),this.report.setOccupation(r.occupation),this.period=this.report.getDateIntervalPeriod();const o=t.value,n=e.value,s=await this.report.getRegimenFormulationReport(n,o);this.setRows(s,n,o)},async setRows(e,t,r){this.sortByArvNumber(e).forEach((e=>{this.rows.push([l.td(e.arv_number),l.td(`(${t}) ${r}`),l.td(this.formatGender(e.gender)),l.tdDate(e.birthdate)])}))}}});e("default",u(t,[["render",function(e,t,r,o,i,n){const s=c("report-template");return m(),h(s,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,onReportConfiguration:e.onPeriod,"report-prefix":"Clinic"},null,8,["title","period","rows","fields","columns","onReportConfiguration"])}]]))}}}));