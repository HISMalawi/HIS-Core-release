System.register(["./BaseTableReport-legacy-DLDU-jz1.js","./index-legacy-BsbMrqEO.js","./ReportMixin.vue_vue_type_script_lang-legacy-CHLSQ8v_.js","./cxca_report_service-legacy-CioXTRNn.js","./Export-legacy-BCoNjk-A.js","./HisStandardForm-legacy-BbU4Bs9R.js","./BasicReportTemplate-legacy-CTVmLSqg.js","./Pagination-legacy-DXSkeWTn.js"],(function(e,t){"use strict";var r,s,o,l,n,a,i,c,p,u,d,h;return{setters:[e=>{r=e.R},e=>{s=e.d,o=e.a5,l=e.aq,n=e.a8,a=e.ad,i=e.u,c=e.v,p=e.w,u=e.x},e=>{d=e._},e=>{h=e.C},null,null,null,null],execute:function(){const t=s({components:{ReportTemplate:r,IonPage:o},mixins:[d],data:()=>({title:"CC All Questions",rows:[],reportService:{},columns:[[l.thTxt("",{sortable:!1,exportable:!1}),l.thTxt("Type of Screening",{colspan:3,sortable:!1,exportable:!1}),l.thTxt("Screening Result",{colspan:3,sortable:!1,exportable:!1}),l.thTxt("Type of Treatment",{colspan:3,sortable:!1,exportable:!1})],[l.thTxt("Fine Age"),l.thTxt("CXCA_SCRN_First screen"),l.thTxt("CXCA_SCRN_Rescreen"),l.thTxt("CXCA_SCRN_Follow Up Screen"),l.thTxt("CXCA_SCRN_Negative"),l.thTxt("CXCA_SCRN_Positive"),l.thTxt("CXCA_SCRN_Suspected Cancer"),l.thTxt("CXCA_TX_Cryotherapy"),l.thTxt("CXCA_TX_Thermocoagulation"),l.thTxt("CXCA_TX_LEEP")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(e,t){this.reportService=new h,this.reportService.setStartDate(t.start_date),this.reportService.setEndDate(t.end_date);const r=await this.reportService.getPepfarReport("CC All Questions");this.rows=this.buildRows(r)},buildRows:e=>e.map((e=>[l.td(e.age_group),l.td(e.first_screen.length),l.td(e.rescreen.length),l.td(e.follow_up_screen.length),l.td(e.result_negative.length),l.td(e.result_positive.length),l.td(e.result_suspected_cancer.length),l.td(e.cryotherapy.length),l.td(e.thermocoagulation.length),l.td(e.leep.length)]))}});e("default",n(t,[["render",function(e,t,r,s,o,l){const n=a("report-template"),d=a("ion-page");return i(),c(d,null,{default:p((()=>[u(n,{title:e.title,rows:e.rows,fields:e.fields,columns:e.columns,period:e.period,onReportConfiguration:e.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])])),_:1})}]]))}}}));