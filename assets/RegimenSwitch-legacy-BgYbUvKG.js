System.register(["./regimen_report_service-legacy-tiE-HI-f.js","./ReportMixin.vue_vue_type_script_lang-legacy-DWNP96Om.js","./TableReportTemplate-legacy-BKTskeEM.js","./index-legacy-DLdqxVnr.js","./BasicReportTemplate-legacy-38jIYQh2.js","./Export-legacy-pUCWT6tL.js","./index-legacy-Cy5lJcFI.js","./Pagination-legacy-rWo9aFQy.js","./HisStandardForm-legacy-D9LtBbE8.js","./ReportErrors-legacy-C00jm-0H.js"],(function(e,t){"use strict";var r,i,s,o,n,a,l,d,c,u,p,g;return{setters:[e=>{r=e.a},e=>{i=e._},e=>{s=e.R},e=>{o=e.d,n=e.a5,a=e.ao,l=e.a6,d=e.v,c=e.w,u=e.ab,p=e.u,g=e.x},null,null,null,null,null,null],execute:function(){const t=o({mixins:[i],components:{ReportTemplate:s,IonPage:n},data:()=>({title:"PEPFAR Regimen Switch Report",rows:[],columns:[[a.thTxt("ARV#"),a.thTxt("Gender"),a.thTxt("DOB"),a.thTxt("Prev.Reg"),a.thTxt("Curr.Reg"),a.thTxt("ARVs"),a.thTxt("Curr.reg dispensed date")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(e,t){this.rows=[],this.report=new r,this.report.setOccupation(t.occupation),this.report.setStartDate(t.start_date),this.report.setEndDate(t.end_date),this.period=this.report.getDateIntervalPeriod(),this.setRows(await this.report.getRegimenSwitchReport(!0))},setRows(e){this.sortByArvNumber(Object.values(e)).forEach((e=>{let t="";const r=e.medication.map((e=>(t=e.start_date,`${e.medication} (${e.quantity})`)));this.rows.push([a.td(e.arv_number),a.td(this.formatGender(e.gender)),a.tdDate(e.birthdate),a.td(e.previous_regimen),a.td(e.current_regimen),a.td(r.join(", ")),a.tdDate(t)])}))}}});e("default",l(t,[["render",function(e,t,r,i,s,o){const n=u("report-template"),a=u("ion-page");return p(),d(a,null,{default:c((()=>[g(n,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,reportPrefix:"PEPFAR",onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])])),_:1})}]]))}}}));