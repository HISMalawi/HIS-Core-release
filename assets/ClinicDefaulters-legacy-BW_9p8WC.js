System.register(["./defaulters_report_service-legacy-BwiwS5Q4.js","./ReportMixin.vue_vue_type_script_lang-legacy-CGeB03oo.js","./TableReportTemplate-legacy-C4LBGtof.js","./index-legacy-CNrLGT3P.js","./HisStandardForm-legacy-OekRIZB_.js","./ReportErrors-legacy-C_GtpKAy.js"],(function(t,e){"use strict";var r,a,s,i,o,n,l,d,p,c,u,h;return{setters:[t=>{r=t.D},t=>{a=t._},t=>{s=t.R},t=>{i=t.d,o=t.I,n=t.L,l=t._,d=t.r,p=t.o,c=t.c,u=t.w,h=t.b},null,null],execute:function(){const e=i({mixins:[a],components:{ReportTemplate:s,IonPage:o},data:()=>({title:"Clinic Defaulters report",rows:[],columns:[[n.thTxt("ARV#"),n.thTxt("First name",{csvExportable:!1,pdfExportable:!0}),n.thTxt("Last name",{csvExportable:!1,pdfExportable:!0}),n.thTxt("Gender"),n.thTxt("Birthdate"),n.thTxt("Appointment date"),n.thTxt("Date defaulted"),n.thTxt("Address",{csvExportable:!1,pdfExportable:!0})]]}),created(){this.fields=this.getDateDurationFields(!1,!1,5,null)},methods:{async onPeriod(t,e){this.rows=[],this.report=new r,this.report.setIsPepfar(!1),this.report.setOccupation(e.occupation),this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.period=this.report.getDateIntervalPeriod();const a=await this.report.getDefaulters();this.setRows(a),this.title=`Clinic Defaulters report <b>(${a.length} Defaulters)</b>`},async setRows(t){this.sortByArvNumber(t).forEach((t=>{this.rows.push([n.td(t.arv_number),n.td(t.given_name),n.td(t.family_name),n.td(this.formatGender(t.gender)),n.tdDate(t.birthdate),n.tdDate(t.appointment_date),n.tdDate(t.defaulter_date),n.td((t.cell_number?`CELL: ${t.cell_number} <br/>`:"")+(t.village?`VILLAGE: ${t.village} <br/>`:"")+(t.district?`DISTRICT: ${t.district} <br/>`:"")+(t.ta?`TA: ${t.ta} <br/>`:"")+(t.landmark?`Landmark: ${t.landmark}`:""))])}))}}});t("default",l(e,[["render",function(t,e,r,a,s,i){const o=d("report-template"),n=d("ion-page");return p(),c(n,null,{default:u((()=>[h(o,{title:t.title,period:t.period,rows:t.rows,fields:t.fields,columns:t.columns,showtitleOnly:!0,onReportConfiguration:t.onPeriod,encryptPDF:!0,reportPrefix:"Clinic"},null,8,["title","period","rows","fields","columns","onReportConfiguration"])])),_:1})}]]))}}}));