System.register(["./index-legacy-CNrLGT3P.js","./ReportMixin.vue_vue_type_script_lang-legacy-CGeB03oo.js","./TableReportTemplate-legacy-C4LBGtof.js","./HisStandardForm-legacy-OekRIZB_.js","./ReportErrors-legacy-C_GtpKAy.js"],(function(t,e){"use strict";var o,r,i,a,s,n,d,l,h,p,u;return{setters:[t=>{o=t.d,r=t.L,i=t.F,a=t.V,s=t.cJ,n=t._,d=t.r,l=t.o,h=t.c},t=>{p=t._},t=>{u=t.R},null,null],execute:function(){const e=o({mixins:[p],components:{ReportTemplate:u},data:()=>({title:"",totalClients:[],rows:[],columns:[],outcome:""}),created(){const t=[[r.thTxt("ARV#"),r.thTxt("First name",{csvExportable:!1,pdfExportable:!0}),r.thTxt("Last name",{csvExportable:!1,pdfExportable:!0}),r.thTxt("Birthdate"),r.thTxt("Gender"),r.thTxt("Outcome date"),r.thTxt("Actions")]],e=t=>[r.td(t.identifier),r.td(t.given_name),r.td(t.family_name),r.tdDate(t.birthdate),r.td(this.formatGender(t.gender)),r.tdDate(t.outcome_date),r.tdBtn("View",(()=>this.$router.push({path:`/patient/dashboard/${t.patient_id}`})))];this.fields=[...this.getDateDurationFields(),{id:"outcome",helpText:"Select outcome",type:i.TT_SELECT,validation:t=>a.required(t),options:()=>[{label:"Transfer Out",value:"Transfer Out",other:{columns:[[r.thTxt("ARV#"),r.thTxt("First name",{csvExportable:!1,pdfExportable:!0}),r.thTxt("Last name",{csvExportable:!1,pdfExportable:!0}),r.thTxt("Birthdate"),r.thTxt("Gender"),r.thTxt("Outcome date"),r.thTxt("TO Location"),r.thTxt("Actions")]],rowBuilder:t=>[r.td(t.identifier),r.td(t.given_name),r.td(t.family_name),r.tdDate(t.birthdate),r.td(this.formatGender(t.gender)),r.tdDate(t.outcome_date),r.td(t.transferred_out_to),r.tdBtn("View",(()=>this.$router.push({path:`/patient/dashboard/${t.patient_id}`})))]}},{label:"Died",value:"Died",other:{columns:t,rowBuilder:e}},{label:"Stopped",value:"Stopped",other:{columns:t,rowBuilder:e}}]}]},methods:{async onPeriod({outcome:t},e){this.rows=[],this.columns=t.other.columns,this.report=new s,this.report.setOccupation(e.occupation),this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.outcome=t.value.toString(),this.title=`${this.outcome} Report`,this.period=this.report.getDateIntervalPeriod(),this.setRows(await this.report.getOtherOutcome(this.outcome),t.other.rowBuilder)},setRows(t,e){t&&this.sortByArvNumber(t,"identifier").forEach((t=>this.rows.push(e(t))))}}});t("default",n(e,[["render",function(t,e,o,r,i,a){const s=d("report-template");return l(),h(s,{title:t.title,period:t.period,rows:t.rows,fields:t.fields,columns:t.columns,encryptPDF:!0,onReportConfiguration:t.onPeriod,"report-prefix":"Clinic"},null,8,["title","period","rows","fields","columns","onReportConfiguration"])}]]))}}}));