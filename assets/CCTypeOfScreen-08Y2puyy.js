import{R as a}from"./BaseTableReport-BIGNZ_Al.js";import{d as p,a5 as l,aq as o,a8 as c,ad as s,u as m,v as d,w as _,x as f}from"./index-DrPQ21-i.js";import{_ as C}from"./ReportMixin.vue_vue_type_script_lang-BkEBICIk.js";import{C as u}from"./cxca_report_service-C9LBAqys.js";import"./Export-CWTuI3QV.js";import"./HisStandardForm-rh8Trs2q.js";import"./BasicReportTemplate-C9nv9YKJ.js";import"./Pagination-CnUjUj_l.js";const h=p({components:{ReportTemplate:a,IonPage:l},mixins:[C],data:()=>({title:"CC Type of Screen",rows:[],reportService:{},columns:[[o.thTxt("Fine Age"),o.thTxt("CXCA_SCRN_First screen"),o.thTxt("CXCA_SCRN_Rescreen"),o.thTxt("CXCA_SCRN_Follow Up Screen")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(e,t){this.reportService=new u,this.reportService.setStartDate(t.start_date),this.reportService.setEndDate(t.end_date);const r=await this.reportService.getPepfarReport("CC Type of Screen");this.rows=this.buildRows(r)},buildRows(e){return e.map(t=>[o.td(t.age_group),o.td(t.first_screen.length),o.td(t.rescreen.length),o.td(t.follow_up_screen.length)])}}});function S(e,t,r,w,g,R){const n=s("report-template"),i=s("ion-page");return m(),d(i,null,{default:_(()=>[f(n,{title:e.title,rows:e.rows,fields:e.fields,columns:e.columns,period:e.period,onReportConfiguration:e.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])]),_:1})}const N=c(h,[["render",S]]);export{N as default};