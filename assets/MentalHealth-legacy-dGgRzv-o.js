System.register(["./opd_report_service-legacy-CAsrv9tf.js","./BaseTableReport-legacy-ac9slSL_.js","./index-legacy-DLdqxVnr.js","./ReportMixin.vue_vue_type_script_lang-legacy-DWNP96Om.js","./Export-legacy-pUCWT6tL.js","./index-legacy-Cy5lJcFI.js","./HisStandardForm-legacy-D9LtBbE8.js","./BasicReportTemplate-legacy-38jIYQh2.js","./Pagination-legacy-rWo9aFQy.js"],(function(e,t){"use strict";var s,a,r,l,i,o,n,u,h,d,c,p,y,m;return{setters:[e=>{s=e.O,a=e.M},e=>{r=e.R},e=>{l=e.d,i=e.a5,o=e.ao,n=e.cZ,u=e.a6,h=e.ab,d=e.u,c=e.v,p=e.w,y=e.x},e=>{m=e._},null,null,null,null,null],execute:function(){const t=l({components:{ReportTemplate:r,IonPage:i},mixins:[m],data:()=>({title:"Mental health report",rows:[],reportService:{},columns:[[o.thTxt("",{sortable:!1,exportable:!1}),o.thTxt("New cases",{colspan:4,sortable:!1,exportable:!1}),o.thTxt("Subsequent cases",{colspan:4,sortable:!1,exportable:!1})],[o.thTxt("Diagnosis"),o.thTxt("Male (0-15 years)",{value:"Males (0-15 years New Cases)"}),o.thTxt("Male (>=16 years)",{value:"Males (>=16 years New Cases)"}),o.thTxt("Female (0-15 years)",{value:"Females (0-15 years New Cases)"}),o.thTxt("Female (>=16 years)",{value:"Females (>=16 years New Cases)"}),o.thTxt("Male (0-15 years)",{value:"Males (0-15 years Subsequent Cases)"}),o.thTxt("Male (>=16 years)",{value:"Males (>=16 years Subsequent Cases)"}),o.thTxt("Female (0-15 years)",{value:"Females (0-15 years Subsequent Cases)"}),o.thTxt("Female (>=16 years)",{value:"Females (>=16 years Subsequent Cases)"})]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(e,t){this.reportService=new s,this.reportService.setStartDate(t.start_date),this.reportService.setEndDate(t.end_date),this.period=this.reportService.getDateIntervalPeriod();const a=await this.reportService.getMentalHealth();this.rows=this.buildRows(a)},buildRows(e){return a.map((t=>[o.td(t,{style:{textAlign:"left"}}),this.toDrillColumn(e,t,"M","0-15 years",!0),this.toDrillColumn(e,t,"M",">=16 years",!0),this.toDrillColumn(e,t,"F","0-15 years",!0),this.toDrillColumn(e,t,"F",">=16 years",!0),this.toDrillColumn(e,t,"M","0-15 years"),this.toDrillColumn(e,t,"M",">=16 years"),this.toDrillColumn(e,t,"F","0-15 years"),this.toDrillColumn(e,t,"F",">=16 years")]))},getAgeGroup:e=>e<16?"0-15 years":">=16 years",toDrillColumn(e,t,s,a,r=!1){const l=e.filter((e=>e.name===t&&e.gender===s&&this.getAgeGroup(e.age)===a&&(!r||/new patient/i.test(e.type_of_visit))));if(l.length){const e=[[o.thTxt("Name"),o.thTxt("Birthdate (Age)"),o.thTxt("Address")]],r=l.map((e=>[o.td(`${e.given_name} ${e.family_name}`),o.td(`${n(e.birthdate)} (${e.age})`),o.td(`${e.village}, ${e.ta}, ${e.district}`)]));return o.tdLink(l.length,(()=>this.drilldownData(`${a} ${this.formatGender(s)} patients with ${t}`,e,r,void 0)))}return o.td(0)}}});e("default",u(t,[["render",function(e,t,s,a,r,l){const i=h("report-template"),o=h("ion-page");return d(),c(o,null,{default:p((()=>[y(i,{title:e.title,rows:e.rows,fields:e.fields,columns:e.columns,period:e.period,reportPrefix:"Clinic",onReportConfiguration:e.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])])),_:1})}]]))}}}));