System.register(["./index-legacy-CNrLGT3P.js","./ReportMixin.vue_vue_type_script_lang-legacy-CGeB03oo.js","./TableReportTemplate-legacy-C4LBGtof.js","./HisStandardForm-legacy-OekRIZB_.js","./ReportErrors-legacy-C_GtpKAy.js"],(function(t,e){"use strict";var s,r,i,n,a,o,l,d,p,c,h,u,m,f,_;return{setters:[t=>{s=t.d,r=t.I,i=t.cH,n=t.L,a=t.cJ,o=t.aW,l=t.S,d=t._,p=t.r,c=t.o,h=t.c,u=t.w,m=t.b},t=>{f=t._},t=>{_=t.R},null,null],execute:function(){const e=s({mixins:[f],components:{ReportTemplate:_,IonPage:r},data:()=>({title:"Clinic Clients due for VL <small>(clients with appointments in specified period)</small>",rows:[],columns:[]}),async created(){const t=await i.filingNumbersEnabled();this.columns.push([n.thTxt(t?"Filing #":"ARV#"),n.thTxt("First name",{csvExportable:!1,pdfExportable:!0}),n.thTxt("Last name",{csvExportable:!1,pdfExportable:!0}),n.thTxt("Gender"),n.thTxt("Age"),n.thTxt("App."),n.thTxt("ART started"),n.thTxt("Months on ART"),n.thTxt("Milestone"),n.thTxt("Ordered"),n.thTxt("Result"),n.thTxt("Released")]),this.fields=this.getDateDurationFields(!1,!1,5,null)},methods:{async onPeriod(t,e){this.rows=[],this.report=new a,this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.report.setOccupation(e.occupation),this.period=this.report.getDateIntervalPeriod();const s=await this.report.getClientsDueForVl();this.setRows(s)},async setRows(t){t.forEach((t=>{this.rows.push([n.tdLink(t.arv_number,(()=>this.confirmPatient(t.patient_id))),n.td(t.given_name),n.td(t.family_name),n.td(this.formatGender(t.gender)),n.td(t.birthdate?o(l.getSessionDate()).diff(t.birthdate,"years"):"N/A"),n.tdDate(t.appointment_date),n.tdDate(t.start_date),n.td(t.months_on_art),n.tdDate(t.mile_stone),n.tdDate(t.last_result_order_date),n.td(t.last_result),n.tdDate(t.last_result_date)])}))}}});t("default",d(e,[["render",function(t,e,s,r,i,n){const a=p("report-template"),o=p("ion-page");return c(),h(o,null,{default:u((()=>[m(a,{title:t.title,period:t.period,rows:t.rows,fields:t.fields,columns:t.columns,showtitleOnly:!0,canExportPDf:!0,encryptPDF:!0,onReportConfiguration:t.onPeriod,"report-prefix":"Clinic"},null,8,["title","period","rows","fields","columns","onReportConfiguration"])])),_:1})}]]))}}}));