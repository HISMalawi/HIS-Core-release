System.register(["./index-legacy-BsbMrqEO.js","./ReportMixin.vue_vue_type_script_lang-legacy-CHLSQ8v_.js","./TableReportTemplate-legacy-B8kkJ7he.js","./BasicReportTemplate-legacy-CTVmLSqg.js","./Export-legacy-BCoNjk-A.js","./Pagination-legacy-DXSkeWTn.js","./HisStandardForm-legacy-BbU4Bs9R.js","./ReportErrors-legacy-B8HqD67j.js"],(function(t,e){"use strict";var r,o,i,s,d,n,l,a,h,p,c,u,T;return{setters:[t=>{r=t.cb,o=t.d,i=t.aq,s=t.dk,d=t.aK,n=t.a8,l=t.ad,a=t.u,h=t.v,p=t.w,c=t.x},t=>{u=t._},t=>{T=t.R},null,null,null,null,null],execute:function(){class e extends r{constructor(){super()}getCohort(){return this.getReport("moh_tpt")}}const g=o({mixins:[u],components:{ReportTemplate:T},data:()=>({title:"MOH TPT Cohort",cohort:{},rows:[],index:0,columns:[[i.thTxt("Age group"),i.thTxt("Gender"),i.thTxt("Initiated ART"),i.thTxt("Initiated TPT"),i.thTxt("Completed TPT"),i.thTxt("Not Completed TPT"),i.thTxt("Died"),i.thTxt("Defaulted"),i.thTxt("Stopped ART"),i.thTxt("TO"),i.thTxt("Confirmed TB "),i.thTxt("Pregnant")]]}),created(){this.preGenerateRows(),this.fields=this.getDateDurationFields()},methods:{async onPeriod(t,r){this.rows=[],this.preGenerateRows(),this.report=new e,this.report.setOccupation(r.occupation),this.report.setStartDate(r.start_date),this.report.setEndDate(r.end_date),this.period=this.report.getDateIntervalPeriod(),this.cohort=await this.report.getCohort()||[],this.index=0,this.setRows("F"),this.setRows("M")},preGenerateRows(){this.rows=[];const t=t=>{s.forEach((e=>{this.rows.push([i.td(e),i.td(t),i.td("..."),i.td("..."),i.td("..."),i.td("..."),i.td("..."),i.td("..."),i.td("..."),i.td("..."),i.td("..."),i.td("...")])}))};t("Female"),t("Male")},setRows(t){s.forEach((e=>{const r=d.find(this.cohort,{age_group:e,gender:t});this.rows[this.index]=[i.td(e),i.td(this.formatGender(r.gender)),this.drill(r.initiated_art,`Initiate ART ${e} ${t}`),this.drill(r.started_tpt,`Started TPT ${e} ${t}`),this.drill(r.completed_tpt,`Completed TPT ${e} ${t}`),this.drill(r.not_completed_tpt,`Not completed TPT ${e} ${t}`),this.drill(r.died,`Died ${e} ${t}`),this.drill(r.defaulted,`Defaulted ${e} ${t}`),this.drill(r.stopped,`Stopped ${e} ${t}`),this.drill(r.transfer_out,`Transfer out ${e} ${t}`),this.drill(r.confirmed_tb,`Confirmed TB ${e} ${t}`),this.drill(r.pregnant,`Pregnant ${e} ${t}`)],++this.index}))}}});t("default",n(g,[["render",function(t,e,r,o,i,s){const d=l("report-template"),n=l("ion-page");return a(),h(n,null,{default:p((()=>[c(d,{title:t.title,period:t.period,rows:t.rows,fields:t.fields,columns:t.columns,config:{showIndex:!0},reportPrefix:"MOH",onReportConfiguration:t.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])])),_:1})}]]))}}}));