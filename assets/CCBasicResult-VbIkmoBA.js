import{R as n}from"./BaseTableReport-BodYJOd6.js";import{d as p,a5 as C,aq as t,a8 as l,ad as s,u as _,v as m,w as c,x as d}from"./index-CG6KEPsv.js";import{_ as u}from"./ReportMixin.vue_vue_type_script_lang-Da78yexD.js";import{C as h}from"./cxca_report_service-DuKrjsJ-.js";import"./Export-ngX2Az_3.js";import"./index-bO2fy8Iw.js";import"./HisStandardForm-CWpBcokh.js";import"./BasicReportTemplate-DH-zB7dh.js";import"./Pagination-BNbmZwZV.js";const R=p({components:{ReportTemplate:n,IonPage:C},mixins:[u],data:()=>({title:"CC Basic Results",rows:[],reportService:{},columns:[[t.thTxt("Fine Age"),t.thTxt("CXCA_SCRN_D"),t.thTxt("CXCA_SCRN_N"),t.thTxt("CXCA_SCRN_POS"),t.thTxt("CXCA_SCRN_TX")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(e,o){this.reportService=new h,this.reportService.setStartDate(o.start_date),this.reportService.setEndDate(o.end_date);const r=await this.reportService.getPepfarReport("CC Basic Result");this.rows=this.buildRows(r)},buildRows(e){return e.map(o=>[t.td(o.age_group),t.td(o.CXCA_SCRN_D.length),t.td(o.CXCA_SCRN_N.length),t.td(o.CXCA_SCRN_POS.length),t.td(o.CXCA_SCRN_TX.length)])}}});function f(e,o,r,S,g,w){const i=s("report-template"),a=s("ion-page");return _(),m(a,null,{default:c(()=>[d(i,{title:e.title,rows:e.rows,fields:e.fields,columns:e.columns,period:e.period,onReportConfiguration:e.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])]),_:1})}const P=l(R,[["render",f]]);export{P as default};