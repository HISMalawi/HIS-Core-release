System.register(["./stock_report_service-legacy-DODO3XvI.js","./ReportMixin.vue_vue_type_script_lang-legacy-CgeWbkk0.js","./BasicReportTemplate-legacy-CLJMIOJT.js","./index-legacy-BClzHwRE.js","./Export-legacy-6qZf0wdz.js","./index-legacy-CwybCMSN.js","./Pagination-legacy-CrStNTWm.js"],(function(t,e){"use strict";var s,a,n,o,i,r,u,c,l;return{setters:[t=>{s=t.S},t=>{a=t._},t=>{n=t.D},t=>{o=t.d,i=t.ao,r=t.a6,u=t.v,c=t.ab,l=t.u},null,null,null],execute:function(){const e=o({mixins:[a],components:{ReportTemplate:n},data:()=>({title:"Stock report",rows:[],stock:[],columns:[[i.thTxt("Product Code"),i.thTxt("Medication"),i.thTxt("Units"),i.thTxt("Closing Balance"),i.thTxt("Losses"),i.thTxt("(+ve Adjustment)"),i.thTxt("(-ve Adjustment)"),i.thTxt("Quantity Used"),i.thTxt("Quantity Received")]]}),async created(){this.report=new s,(await this.report.getStockReport()).forEach((t=>{this.rows.push([i.td(t.product_code||""),i.td(t.drug_name),i.td(t.units),i.tdNum(Math.abs(t.closing_balance)),i.tdNum(Math.abs(t.losses)),i.tdNum(Math.abs(t.positive_adjustment)),i.tdNum(Math.abs(t.negative_adjustment)),i.tdNum(Math.abs(t.quantity_used)),i.tdNum(Math.abs(t.quantity_received))])}))}});t("default",r(e,[["render",function(t,e,s,a,n,o){const i=c("report-template");return l(),u(i,{title:t.title,rows:t.rows,columns:t.columns},null,8,["title","rows","columns"])}]]))}}}));