System.register(["./index-legacy-CNrLGT3P.js","./ReportMixin.vue_vue_type_script_lang-legacy-CGeB03oo.js","./TableReportTemplate-legacy-C4LBGtof.js","./HisStandardForm-legacy-OekRIZB_.js","./ReportErrors-legacy-C_GtpKAy.js"],(function(t,e){"use strict";var r,i,o,s,n,a,d,l,p;return{setters:[t=>{r=t.d,i=t.L,o=t.cJ,s=t._,n=t.r,a=t.o,d=t.c},t=>{l=t._},t=>{p=t.R},null,null],execute:function(){const e=r({mixins:[l],components:{ReportTemplate:p},data:()=>({title:"Clinic External consultation clients",totalClients:[],rows:[],reportReady:!1,isLoading:!1,columns:[[i.thTxt("NPID"),i.thTxt("Client Type"),i.thTxt("First name",{csvExportable:!1,pdfExportable:!0}),i.thTxt("Last name",{csvExportable:!1,pdfExportable:!0}),i.thTxt("Gender"),i.thTxt("DOB"),i.thTxt("Date set")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(t,e){this.reportReady=!0,this.isLoading=!0,this.rows=[],this.report=new o,this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.report.setOccupation(e.occupation),this.period=this.report.getDateIntervalPeriod(),this.setRows(await this.report.getExternalConsultationClients()),this.isLoading=!1},async setRows(t){t.forEach((t=>{this.rows.push([i.td(t.npid),i.td(t.patient_type),i.td(t.given_name),i.td(t.family_name),i.td(this.formatGender(t.gender)),i.tdDate(t.birthdate),i.tdDate(t.date_set)])}))}}});t("default",s(e,[["render",function(t,e,r,i,o,s){const l=n("report-template");return a(),d(l,{title:t.title,period:t.period,rows:t.rows,fields:t.fields,columns:t.columns,reportReady:t.reportReady,isLoading:t.isLoading,onReportConfiguration:t.onPeriod,encryptPDF:!0,"report-prefix":"Clinic"},null,8,["title","period","rows","fields","columns","reportReady","isLoading","onReportConfiguration"])}]]))}}}));