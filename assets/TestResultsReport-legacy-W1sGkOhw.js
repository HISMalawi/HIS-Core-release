System.register(["./lab_report_service-legacy-DOXPvFw9.js","./ReportMixin.vue_vue_type_script_lang-legacy-DWNP96Om.js","./TableReportTemplate-legacy-BKTskeEM.js","./index-legacy-DLdqxVnr.js","./BasicReportTemplate-legacy-38jIYQh2.js","./Export-legacy-pUCWT6tL.js","./index-legacy-Cy5lJcFI.js","./Pagination-legacy-rWo9aFQy.js","./HisStandardForm-legacy-D9LtBbE8.js","./ReportErrors-legacy-C00jm-0H.js"],(function(e,t){"use strict";var s,r,a,i,o,l,n,d,p,h,u;return{setters:[e=>{s=e.L},e=>{r=e._},e=>{a=e.R},e=>{i=e.d,o=e.ao,l=e.a9,n=e.dn,d=e.a6,p=e.ab,h=e.u,u=e.v},null,null,null,null,null,null],execute:function(){const t=i({mixins:[r],components:{ReportTemplate:a},data:()=>({title:"Lab test result(s)",rows:[],cohort:[],reportType:"",reportReady:!1,columns:[],patientLevelColumns:[[o.thTxt("ARV#"),o.thTxt("Gender"),o.thTxt("Birthdate"),o.thTxt("Ordered"),o.thTxt("Specimen"),o.thTxt("Test"),o.thTxt("Result"),o.thTxt("Released")]],disaggregatedColumns:[o.thTxt("Age group"),o.thTxt("Gender")]}),created(){this.report=new s,this.fields=this.getFormFields()},methods:{async onPeriod({type:e,tests:t}){this.reportReady=!0,this.rows=[],this.period=this.report.getDateIntervalPeriod(),this.reportType=e.value,"disaggregated"===this.reportType?this.setDisaggregatedRows(t):"patient_level"===this.reportType&&this.setPatientLevelRows(t)},getFormFields(){return[...this.getDateDurationFields(),{id:"tests",helpText:"Available test(s) results",type:l.TT_MULTIPLE_SELECT,options:async(e,t,s)=>{this.report.setStartDate(s.start_date),this.report.setEndDate(s.end_date);const r=await this.report.getLabResultsReport(),a=this.buildAvailableTests(r);return this.buildAvailableTestOptions(a)}},{id:"type",helpText:"Select report type",type:l.TT_SELECT,options:()=>[{label:"Disaggregated",value:"disaggregated"},{label:"Patient level",value:"patient_level"}]}]},buildAvailableTests(e){const t={};return this.sortByArvNumber(e).forEach((e=>{e.measures.forEach((s=>{s.name in t||(t[s.name]=[]),t[s.name].push({id:e.patient_id,arv:e.arv_number,gender:e.gender,ageGroup:e.age_group,birthdate:this.toDate(e.birthdate),ordered:this.toDate(e.order_date),specimen:e.test,test:s.name,result:`${s.modifier} ${s.value}`,released:this.toDate(e.result_date)})}))})),t},buildAvailableTestOptions(e){const t=[];for(const s in e){const r=e[s];t.push({label:s,value:r.length,other:r})}return t},setDisaggregatedRows(e){const t=[],s=[];this.columns=[this.disaggregatedColumns.concat(e.map((e=>o.thTxt(e.label))))];for(const r in n){const a=n[r],i=[o.td(a),o.td("M")],l=[o.td(a),o.td("F")];e.forEach((({other:e})=>{const t=t=>e.filter((e=>e.gender===t&&e.ageGroup===a)).map((e=>e.id));i.push(this.drill(t("M"))),l.push(this.drill(t("F")))})),t.push(i),s.push(l),this.rows=[...s,...t]}},setPatientLevelRows(e){this.columns=this.patientLevelColumns,e.forEach((({other:e})=>{e.forEach((e=>{this.rows.push([this.tdARV(e.arv),o.td(e.gender),o.tdDate(e.birthdate),o.tdDate(e.ordered),o.td(e.specimen),o.td(e.test),o.td(e.result),o.tdDate(e.released)])}))}))}}});e("default",d(t,[["render",function(e,t,s,r,a,i){const o=p("report-template");return h(),u(o,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,canExportCsv:!0,canExportPDf:!0,reportReady:e.reportReady,onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","reportReady","onReportConfiguration"])}]]))}}}));