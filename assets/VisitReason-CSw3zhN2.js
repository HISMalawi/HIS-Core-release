import{R as d}from"./BaseTableReport-BodYJOd6.js";import{d as m,a5 as u,aq as s,a8 as f,ad as c,u as h,v as _,w as R,x as S}from"./index-CG6KEPsv.js";import{_ as w}from"./ReportMixin.vue_vue_type_script_lang-Da78yexD.js";import{C as v}from"./cxca_report_service-DuKrjsJ-.js";import"./Export-ngX2Az_3.js";import"./index-bO2fy8Iw.js";import"./HisStandardForm-CWpBcokh.js";import"./BasicReportTemplate-DH-zB7dh.js";import"./Pagination-BNbmZwZV.js";const g=m({components:{ReportTemplate:d,IonPage:u},mixins:[w],data:()=>({title:"Visit reasons",rows:[],reportService:{},columns:[[s.thTxt(""),s.thTxt("Reason"),s.thTxt("Number")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(t,r){this.reportService=new v,this.reportService.setStartDate(r.start_date),this.reportService.setEndDate(r.end_date);const e=await this.reportService.getClinicReport("VISIT REASONS");this.rows=this.buildRows(e)},buildRows(t){const r=[],e={},a=["Initial Screening","Postponed treatment","One year subsequent check-up after treatment","Subsequent screening","Problem visit after treatment","Referral"];let p=1;for(const o of a){e[o]==null&&(e[o]=[]);for(const n of t){const i=n.reason,l=n.patient_id;i==o&&e[i].push(l)}}for(const o in e)r.push([s.td(p++),s.td(o),s.td(e[o].length)]);return r}}});function C(t,r,e,a,p,o){const n=c("report-template"),i=c("ion-page");return h(),_(i,null,{default:R(()=>[S(n,{title:t.title,rows:t.rows,fields:t.fields,columns:t.columns,period:t.period,onReportConfiguration:t.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])]),_:1})}const N=f(g,[["render",C]]);export{N as default};