System.register(["./opd_report_service-legacy-yqGpEi26.js","./BaseTableReport-legacy-b_HVReff.js","./index-legacy-CNrLGT3P.js","./ReportMixin.vue_vue_type_script_lang-legacy-CGeB03oo.js","./HisStandardForm-legacy-OekRIZB_.js"],(function(t,e){"use strict";var r,s,i,o,n,a,c,p,l,d,u,h,m,_;return{setters:[t=>{r=t.O,s=t.L},t=>{i=t.R},t=>{o=t.d,n=t.I,a=t.L,c=t.ah,p=t._,l=t.r,d=t.o,u=t.c,h=t.w,m=t.b},t=>{_=t._},null],execute:function(){const e=o({components:{ReportTemplate:i,IonPage:n},mixins:[_],data:()=>({title:"Lumefantrine + Arthemether Report",rows:[],reportService:{},prescriptions:{},columns:[[a.thTxt("Types of LA"),a.thTxt("Prescribed"),a.thTxt("Dispensed")]],customBtns:[]}),created(){this.fields=this.getDateDurationFields(),this.customBtns.push({name:"Print",size:"large",slot:"start",color:"primary",visible:!0,onClick:async()=>this.reportService.printLaReport(this.prescriptions)})},methods:{async init(t,e){this.reportService=new r,this.reportService.setStartDate(e.start_date),this.reportService.setEndDate(e.end_date),this.period=this.reportService.getDateIntervalPeriod(),this.prescriptions=await this.reportService.getLaPrescriptions(),this.rows=this.buildRows(this.prescriptions)},buildRows:t=>c.isEmpty(t)?[]:Object.keys(s).map((e=>[a.td(s[e]),a.td(t[`total_la_${e}_prescribed_drugs`]),a.td(t[`total_la_${e}_dispensed_drugs`])]))}});t("default",p(e,[["render",function(t,e,r,s,i,o){const n=l("report-template"),a=l("ion-page");return d(),u(a,null,{default:h((()=>[m(n,{title:t.title,rows:t.rows,fields:t.fields,columns:t.columns,period:t.period,reportPrefix:"Clinic",onReportConfiguration:t.init,customBtns:t.customBtns},null,8,["title","rows","fields","columns","period","onReportConfiguration","customBtns"])])),_:1})}]]))}}}));