import{R as n}from"./TableReportTemplate-BzYrhG4C.js";import{d as p,a5 as d,aq as t,a8 as l,ad as a,u as m,v as c,w as f,x as u}from"./index-DrPQ21-i.js";import{_ as h}from"./ReportMixin.vue_vue_type_script_lang-BkEBICIk.js";import{C as _}from"./cxca_report_service-C9LBAqys.js";import"./Export-CWTuI3QV.js";import"./HisStandardForm-rh8Trs2q.js";import"./ReportErrors-DfCcETVj.js";import"./BasicReportTemplate-C9nv9YKJ.js";import"./Pagination-CnUjUj_l.js";const x=p({components:{ReportTemplate:n,IonPage:d},mixins:[h],data:()=>({title:"Booked Clients",rows:[],reportService:{},columns:[[t.thTxt("Identifier"),t.thTxt("First Name",{csvExportable:!1,pdfExportable:!0}),t.thTxt("Last Name",{csvExportable:!1,pdfExportable:!0}),t.thTxt("Birthdate"),t.thTxt("Booked date"),t.thTxt("Seen"),t.thTxt("Action",{csvExportable:!1,pdfExportable:!0})]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(o,e){this.reportService=new _,this.reportService.setStartDate(e.start_date),this.reportService.setEndDate(e.end_date);const r=await this.reportService.getClinicReport("BOOKED CLIENTS FROM ART RAW DATA");this.rows=this.buildRows(r)},buildRows(o){return o.map(e=>[t.td(e.identifier),t.td(e.given_name),t.td(e.family_name),t.tdDate(e.dob),t.td(e.booked_date),t.td(e.seen),t.tdBtn("View",()=>this.$router.push("/patient/dashboard/".concat(e.person_id)))])}}});function v(o,e,r,C,b,w){const i=a("report-template"),s=a("ion-page");return m(),c(s,null,{default:f(()=>[u(i,{title:o.title,rows:o.rows,fields:o.fields,columns:o.columns,period:o.period,canExportPDf:"",canExportCsv:"",encryptPDF:"",onReportConfiguration:o.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])]),_:1})}const A=l(x,[["render",v]]);export{A as default};