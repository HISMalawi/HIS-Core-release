System.register(["./opd_report_service-legacy-CAsrv9tf.js","./BaseTableReport-legacy-ac9slSL_.js","./index-legacy-DLdqxVnr.js","./ReportMixin.vue_vue_type_script_lang-legacy-DWNP96Om.js","./Export-legacy-pUCWT6tL.js","./index-legacy-Cy5lJcFI.js","./HisStandardForm-legacy-D9LtBbE8.js","./BasicReportTemplate-legacy-38jIYQh2.js","./Pagination-legacy-rWo9aFQy.js"],(function(t,e){"use strict";var i,r,s,a,n,o,l,d,c,p,u,g,h;return{setters:[t=>{i=t.O},t=>{r=t.R},t=>{s=t.d,a=t.a5,n=t.ao,o=t.ag,l=t.a6,d=t.ab,c=t.u,p=t.v,u=t.w,g=t.x},t=>{h=t._},null,null,null,null,null],execute:function(){const e=s({components:{ReportTemplate:r,IonPage:a},mixins:[h],data:()=>({title:"Clients / Patients with NIDs",rows:[],reportService:{},columns:[[n.thTxt("NID"),n.thTxt("First Name"),n.thTxt("Last Name"),n.thTxt("Gender"),n.thTxt("DOB"),n.thTxt("Date Reg."),n.thTxt("Address")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(t,e){this.reportService=new i,this.reportService.setStartDate(e.start_date),this.reportService.setEndDate(e.end_date),this.period=this.reportService.getDateIntervalPeriod(),this.rows=this.buildRows(await this.reportService.getPatientsWithNIDs())},buildRows:t=>t.length?t.map((t=>[n.td(t.nid),n.td(t.given_name),n.td(t.family_name),n.td(t.gender),n.td(o.toStandardHisDisplayFormat(t.birthdate)),n.td(o.toStandardHisDisplayFormat(t.date)),n.td(t.address)])):[]}});t("default",l(e,[["render",function(t,e,i,r,s,a){const n=d("report-template"),o=d("ion-page");return c(),p(o,null,{default:u((()=>[g(n,{title:t.title,rows:t.rows,fields:t.fields,columns:t.columns,period:t.period,reportPrefix:"Clinic",onReportConfiguration:t.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])])),_:1})}]]))}}}));