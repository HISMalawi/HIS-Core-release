System.register(["./stock_report_service-legacy-CRoeq5ys.js","./ReportMixin.vue_vue_type_script_lang-legacy-CGeB03oo.js","./TableReportTemplate-legacy-C4LBGtof.js","./index-legacy-CNrLGT3P.js","./HisStandardForm-legacy-OekRIZB_.js","./ReportErrors-legacy-C_GtpKAy.js"],(function(t,e){"use strict";var r,o,s,i,n,a,l,c,d,p,u,h;return{setters:[t=>{r=t.S},t=>{o=t._},t=>{s=t.R},t=>{i=t.d,n=t.L,a=t.cE,l=t._,c=t.r,d=t.o,p=t.c,u=t.w,h=t.b},null,null],execute:function(){const e=i({mixins:[o],components:{ReportTemplate:s},data:()=>({title:"HIV Stock report",rows:[],stock:[],columns:[[n.thTxt("Medication"),n.thTxt("Pack Size"),n.thTxt("Opening Stock (Tins/Pallets)"),n.thTxt("Quantity Dispensed (Tins/Pallets)"),n.thTxt("Stock on hand (Tins/Pallets)")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(t,e){this.report=new r,this.rows=[],this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.period=this.report.getDateIntervalPeriod(),(await this.report.getStockCardReport()).forEach((t=>{this.rows.push([n.td(t.drug_name),n.td(t.pack_size),n.td(a(t.opening_balance)),n.td(a(t.dispensed_quantity||0)),n.td(a(t.closing_balance))])}))}}});t("default",l(e,[["render",function(t,e,r,o,s,i){const n=c("report-template"),a=c("ion-page");return d(),p(a,null,{default:u((()=>[h(n,{title:t.title,period:t.period,rows:t.rows,fields:t.fields,columns:t.columns,reportPrefix:"Clinic",onReportConfiguration:t.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])])),_:1})}]]))}}}));