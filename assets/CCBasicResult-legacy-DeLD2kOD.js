System.register(["./BaseTableReport-legacy-DLDU-jz1.js","./index-legacy-BsbMrqEO.js","./ReportMixin.vue_vue_type_script_lang-legacy-CHLSQ8v_.js","./cxca_report_service-legacy-CioXTRNn.js","./Export-legacy-BCoNjk-A.js","./HisStandardForm-legacy-BbU4Bs9R.js","./BasicReportTemplate-legacy-CTVmLSqg.js","./Pagination-legacy-DXSkeWTn.js"],(function(e,t){"use strict";var r,s,i,n,a,o,l,c,d,C,u,p;return{setters:[e=>{r=e.R},e=>{s=e.d,i=e.a5,n=e.aq,a=e.a8,o=e.ad,l=e.u,c=e.v,d=e.w,C=e.x},e=>{u=e._},e=>{p=e.C},null,null,null,null],execute:function(){const t=s({components:{ReportTemplate:r,IonPage:i},mixins:[u],data:()=>({title:"CC Basic Results",rows:[],reportService:{},columns:[[n.thTxt("Fine Age"),n.thTxt("CXCA_SCRN_D"),n.thTxt("CXCA_SCRN_N"),n.thTxt("CXCA_SCRN_POS"),n.thTxt("CXCA_SCRN_TX")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(e,t){this.reportService=new p,this.reportService.setStartDate(t.start_date),this.reportService.setEndDate(t.end_date);const r=await this.reportService.getPepfarReport("CC Basic Result");this.rows=this.buildRows(r)},buildRows:e=>e.map((e=>[n.td(e.age_group),n.td(e.CXCA_SCRN_D.length),n.td(e.CXCA_SCRN_N.length),n.td(e.CXCA_SCRN_POS.length),n.td(e.CXCA_SCRN_TX.length)]))}});e("default",a(t,[["render",function(e,t,r,s,i,n){const a=o("report-template"),u=o("ion-page");return l(),c(u,null,{default:d((()=>[C(a,{title:e.title,rows:e.rows,fields:e.fields,columns:e.columns,period:e.period,onReportConfiguration:e.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])])),_:1})}]]))}}}));