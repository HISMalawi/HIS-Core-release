import{_ as g}from"./ReportMixin.vue_vue_type_script_lang-DvImhbl3.js";import{b as d,a as w,W as R}from"./regimen_report_service-u2j3lnu0.js";import{d as _,a5 as D,ao as t,aJ as l,a6 as E,v as I,w as T,ab as c,u as b,x as N}from"./index-ATRrruTT.js";import{R as k}from"./TableReportTemplate-Ct9Da_YR.js";import"./BasicReportTemplate-DAgXssZp.js";import"./Export-BikdWX3S.js";import"./index-_1Jf0d3I.js";import"./Pagination-BUwSxtcq.js";import"./HisStandardForm-7DlnDJZP.js";import"./ReportErrors-DTBmgqjr.js";const C=_({mixins:[g],components:{ReportTemplate:k,IonPage:D},data:()=>({rows:[],title:"Regimen distribution (Weight)",columns:[]}),created(){this.columns=[[t.thTxt("Weight band"),t.thTxt("Gender"),...d.map(o=>t.thNum(o)),t.thNum("Unknown"),t.thNum("Total (regimen)")]],this.fields=this.getDateDurationFields()},methods:{async onPeriod(o,n,a=!1){this.rows=[],this.report=new w,this.report.setOccupation(n.occupation),this.report.setStartDate(n.start_date),this.report.setEndDate(n.end_date),this.period=this.report.getDateIntervalPeriod();const s=await this.report.getRegimensByWeight(a);await this.setRows(s)},async setRows(o){const n=s=>[...d,"N/A"].map(i=>{const e=s.filter(r=>!!r[i]).map(r=>Object.values(r)[0]);return t.td(l.isEmpty(e)?0:e[0])}),a=s=>s.reduce((i,e)=>i+e.td,0);R.forEach(s=>{o.filter(e=>e.weight===s).forEach(e=>{const r=n(e.males),p=n(e.females),h=[t.td(s),t.td("Male"),...r,t.td(a(r))],u=[t.td(s),t.td("Female"),...p,t.td(a(p))];if(this.rows.push(h),this.rows.push(u),!l.isEmpty(e.unknown_gender)){const m=n(e.unknown_gender),f=a(m);this.rows.push([t.td(s),t.td("Unknown Gender"),...m,t.td(f)])}})})}}});function P(o,n,a,s,i,e){const r=c("report-template"),p=c("ion-page");return b(),I(p,null,{default:T(()=>[N(r,{title:o.title,period:o.period,rows:o.rows,fields:o.fields,columns:o.columns,reportPrefix:"MoH",config:{showIndex:!1},enabledPDFHorizontalPageBreak:!0,onReportConfiguration:o.onPeriod,hasServerSideCaching:!0},null,8,["title","period","rows","fields","columns","onReportConfiguration"])]),_:1})}const F=E(C,[["render",P]]);export{F as default};