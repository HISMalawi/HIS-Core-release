import{R as s}from"./BaseTableReport-C3BiH-Jh.js";import{d as p,a5 as m,ao as o,a6 as l,ab as a,u as c,v as d,w as h,x as _}from"./index-DYyilVc9.js";import{_ as f}from"./ReportMixin.vue_vue_type_script_lang-CEXbppxj.js";import{C as u}from"./cxca_report_service-DcYH_dX9.js";import"./Export-9HDPVIRb.js";import"./index-0_K7-O2F.js";import"./HisStandardForm-DTCBPBFW.js";import"./BasicReportTemplate-DFIxWLJ4.js";import"./Pagination-Ba4M3RDu.js";const C=p({components:{ReportTemplate:s,IonPage:m},mixins:[f],data:()=>({title:"CC Type of Treatment",rows:[],reportService:{},columns:[[o.thTxt("Fine Age"),o.thTxt("CXCA_TX_Cryotherapy"),o.thTxt("CXCA_TX_Thermocoagulation"),o.thTxt("CXCA_TX_LEEP")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(t,e){this.reportService=new u,this.reportService.setStartDate(e.start_date),this.reportService.setEndDate(e.end_date);const r=await this.reportService.getPepfarReport("CC Type of Treatment");this.rows=this.buildRows(r)},buildRows(t){return t.map(e=>[o.td(e.age_group),o.td(e.cryotherapy.length),o.td(e.thermocoagulation.length),o.td(e.leep.length)])}}});function T(t,e,r,g,w,v){const i=a("report-template"),n=a("ion-page");return c(),d(n,null,{default:h(()=>[_(i,{title:t.title,rows:t.rows,fields:t.fields,columns:t.columns,period:t.period,onReportConfiguration:t.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])]),_:1})}const E=l(C,[["render",T]]);export{E as default};