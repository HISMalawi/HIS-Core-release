System.register(["./regimen_report_service-legacy-CVjnfjGs.js","./ReportMixin.vue_vue_type_script_lang-legacy-CgeWbkk0.js","./TableReportTemplate-legacy-B-fYR7sy.js","./index-legacy-BClzHwRE.js","./BasicReportTemplate-legacy-CLJMIOJT.js","./Export-legacy-6qZf0wdz.js","./index-legacy-CwybCMSN.js","./Pagination-legacy-CrStNTWm.js","./HisStandardForm-legacy-I0WV5d_F.js","./ReportErrors-legacy-BbwQKtXj.js"],(function(t,e){"use strict";var r,i,s,o,n,a,l,d,c,u,p,g;return{setters:[t=>{r=t.a},t=>{i=t._},t=>{s=t.R},t=>{o=t.d,n=t.a5,a=t.ao,l=t.a6,d=t.v,c=t.w,u=t.ab,p=t.u,g=t.x},null,null,null,null,null,null],execute:function(){const e=o({mixins:[i],components:{ReportTemplate:s,IonPage:n},data:()=>({title:"PEPFAR Regimen Switch Report",rows:[],columns:[[a.thTxt("ARV#"),a.thTxt("Gender"),a.thTxt("DOB"),a.thTxt("Prev.Reg"),a.thTxt("Curr.Reg"),a.thTxt("ARVs"),a.thTxt("Curr.reg dispensed date")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(t,e){this.rows=[],this.report=new r,this.report.setOccupation(e.occupation),this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.period=this.report.getDateIntervalPeriod(),this.setRows(await this.report.getRegimenSwitchReport(!0))},setRows(t){this.sortByArvNumber(Object.values(t)).forEach((t=>{let e="";const r=t.medication.map((t=>(e=t.start_date,`${t.medication} (${t.quantity})`)));this.rows.push([a.td(t.arv_number),a.td(this.formatGender(t.gender)),a.tdDate(t.birthdate),a.td(t.previous_regimen),a.td(t.current_regimen),a.td(r.join(", ")),a.tdDate(e)])}))}}});t("default",l(e,[["render",function(t,e,r,i,s,o){const n=u("report-template"),a=u("ion-page");return p(),d(a,null,{default:c((()=>[g(n,{title:t.title,period:t.period,rows:t.rows,fields:t.fields,columns:t.columns,reportPrefix:"PEPFAR",onReportConfiguration:t.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])])),_:1})}]]))}}}));