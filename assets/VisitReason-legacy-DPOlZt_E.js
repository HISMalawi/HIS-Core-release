System.register(["./BaseTableReport-legacy-CMILcoPJ.js","./index-legacy-DDADMnop.js","./ReportMixin.vue_vue_type_script_lang-legacy-DFpdPjeO.js","./cxca_report_service-legacy-NhKQB9CU.js","./Export-legacy-VbltoLZZ.js","./index-legacy-Cjf3InP9.js","./HisStandardForm-legacy-BmDNxnlt.js","./BasicReportTemplate-legacy-BhecaIAc.js","./Pagination-legacy-BsCsjPhJ.js"],(function(e,t){"use strict";var r,n,s,i,o,a,l,c,u,d,p,g;return{setters:[e=>{r=e.R},e=>{n=e.d,s=e.a5,i=e.aq,o=e.a8,a=e.ad,l=e.u,c=e.v,u=e.w,d=e.x},e=>{p=e._},e=>{g=e.C},null,null,null,null,null],execute:function(){const t=n({components:{ReportTemplate:r,IonPage:s},mixins:[p],data:()=>({title:"Visit reasons",rows:[],reportService:{},columns:[[i.thTxt(""),i.thTxt("Reason"),i.thTxt("Number")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(e,t){this.reportService=new g,this.reportService.setStartDate(t.start_date),this.reportService.setEndDate(t.end_date);const r=await this.reportService.getClinicReport("VISIT REASONS");this.rows=this.buildRows(r)},buildRows(e){const t=[],r={},n=["Initial Screening","Postponed treatment","One year subsequent check-up after treatment","Subsequent screening","Problem visit after treatment","Referral"];let s=1;for(const i of n){null==r[i]&&(r[i]=[]);for(const t of e){const e=t.reason,n=t.patient_id;e==i&&r[e].push(n)}}for(const o in r)t.push([i.td(s++),i.td(o),i.td(r[o].length)]);return t}}});e("default",o(t,[["render",function(e,t,r,n,s,i){const o=a("report-template"),p=a("ion-page");return l(),c(p,null,{default:u((()=>[d(o,{title:e.title,rows:e.rows,fields:e.fields,columns:e.columns,period:e.period,onReportConfiguration:e.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])])),_:1})}]]))}}}));