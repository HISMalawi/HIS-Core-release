import{d,a5 as l,ao as i,cM as m,ah as c,a6 as u,ab as n,u as f,v as h,w as _,x as R}from"./index-ATRrruTT.js";import{R as v}from"./TableReportTemplate-Ct9Da_YR.js";import{_ as g}from"./ReportMixin.vue_vue_type_script_lang-DvImhbl3.js";import"./Export-BikdWX3S.js";import"./index-_1Jf0d3I.js";import"./HisStandardForm-7DlnDJZP.js";import"./ReportErrors-DTBmgqjr.js";import"./BasicReportTemplate-DAgXssZp.js";import"./Pagination-BUwSxtcq.js";const w=d({mixins:[g],components:{IonPage:l,ReportTemplate:v},data:()=>({title:"Revenue Report",rows:[],service:{},columns:[[i.thTxt("Total revenue")]]}),mounted(){this.fields=this.getDateDurationFields()},methods:{onPeriod(e,r){this.service=new m("REVENUE COLLECTED",r.start_date,r.end_date),this.period=this.service.periodStr();const o=this.service.requestReport();typeof o=="object"&&o.then&&o.then(t=>{t.forEach(s=>{this.rows.push([i.td(s.total_revenue)])})}).catch(t=>c("".concat(t)))}}});function C(e,r,o,t,s,E){const a=n("report-template"),p=n("ion-page");return f(),h(p,null,{default:_(()=>[R(a,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,headerInfoList:e.headerList,config:{showIndex:!0},onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","headerInfoList","onReportConfiguration"])]),_:1})}const q=u(w,[["render",C]]);export{q as default};