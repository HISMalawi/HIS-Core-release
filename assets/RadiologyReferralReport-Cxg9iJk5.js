import{d as l,a5 as d,ao as r,cM as c,ah as m,a6 as f,ab as a,u as h,v as u,w as R,x as _}from"./index-DYyilVc9.js";import{R as g}from"./TableReportTemplate-6_9AlrQV.js";import{_ as w}from"./ReportMixin.vue_vue_type_script_lang-CEXbppxj.js";import"./Export-9HDPVIRb.js";import"./index-0_K7-O2F.js";import"./HisStandardForm-DTCBPBFW.js";import"./ReportErrors-CQuDJBF6.js";import"./BasicReportTemplate-DFIxWLJ4.js";import"./Pagination-Ba4M3RDu.js";const v=l({mixins:[w],components:{IonPage:d,ReportTemplate:g},data:()=>({title:"Referral Report",rows:[],service:{},columns:[[r.thTxt("Clinic"),r.thTxt("Total")]]}),mounted(){this.fields=this.getDateDurationFields()},methods:{onPeriod(e,s){this.service=new c("REFERRAL REPORT",s.start_date,s.end_date),this.period=this.service.periodStr();const o=this.service.requestReport();typeof o=="object"&&o.then&&o.then(t=>{t.forEach(i=>{this.rows.push([r.td(i.clinic),r.td(i.total)])})}).catch(t=>m("".concat(t)))}}});function C(e,s,o,t,i,$){const n=a("report-template"),p=a("ion-page");return h(),u(p,null,{default:R(()=>[_(n,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,headerInfoList:e.headerList,config:{showIndex:!0},onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","headerInfoList","onReportConfiguration"])]),_:1})}const q=f(v,[["render",C]]);export{q as default};