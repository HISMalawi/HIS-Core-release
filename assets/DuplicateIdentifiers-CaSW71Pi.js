import{R as l}from"./TableReportTemplate-BDV868op.js";import{d as p,L as t,s as c,F as m,V as u,H as f,O as n,P as h,q as g,_ as y,r as v,o as w,c as D}from"./index-BFVcutZq.js";import{I as o}from"./identifier_service-DDlglwcj.js";import{D as T}from"./DrillTableModal-W63Zu9qj.js";import"./HisStandardForm-DO3sZVdL.js";import"./ReportErrors-B0y1wUIE.js";const I=p({components:{ReportTemplate:l},data:()=>({service:{},dde:{},title:"Duplicate Identifiers",fields:[],rows:[],columns:[[t.thTxt("Identifier"),t.thTxt("Count"),t.thTxt("View"),t.thTxt("Resolve")]]}),async created(){this.fields=this.getFormFields(),this.dde=new c,await this.dde.loadDDEStatus()},methods:{async onPeriod({identifier:e}){const s=parseInt(e.value.toString());this.title=e.label+" Duplicates",this.service=new o,this.service.setIdentifierType(s),this.rows=await this.getRows()},getFormFields(){return[{id:"identifier",helpText:"Select Identifier type",type:m.TT_SELECT,validation:e=>u.required(e),options:async()=>(await o.getIdentifierTypes()).map(e=>({label:e.name,value:e.patient_identifier_type_id}))}]},toDate(e){return f.toStandardHisDisplayFormat(e)},async drillDuplicates(e){(await n.create({component:T,cssClass:"custom-modal",componentProps:{title:"Persons using identifier ".concat(e),columns:["Given name","Family name","Gender","Birth date","Action"],onRows:async()=>(await this.service.getPatientsByIdentifier(e)).map(a=>{try{const i=new h(a);return[i.getGivenName(),i.getFamilyName(),i.getGender(),this.toDate(i.getBirthdate()),{type:"button",name:"View",action:()=>{n.dismiss().then(()=>{this.$router.push("/patient/dashboard/".concat(i.getID()))})}}]}catch(i){return g("Unable to load patient details"),["N/A","N/A","N/A","N/A","N/A"]}})}})).present()},async getRows(){return(await this.service.getDuplicateIndentifiers()).map(e=>[t.td(e.identifier),t.td(e.count),t.tdBtn("Select",()=>this.drillDuplicates(e.identifier)),t.tdBtn("Resolve",()=>{this.$router.push("/npid/duplicates/".concat(e.identifier))},{event:{disabled:this.service.getIdentifierType()!=3}},"danger")])}}});function _(e,s,r,a,i,C){const d=v("report-template");return w(),D(d,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,canExportCsv:!1,canExportPDf:!1,onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])}const B=y(I,[["render",_]]);export{B as default};