System.register(["./TableReportTemplate-legacy-C4LBGtof.js","./index-legacy-CNrLGT3P.js","./identifier_service-legacy-CzeOi4cB.js","./DrillTableModal-legacy-DZYeuey9.js","./HisStandardForm-legacy-OekRIZB_.js","./ReportErrors-legacy-C_GtpKAy.js"],(function(e,t){"use strict";var i,s,n,r,a,o,d,l,c,p,u,m,h,f,g,y;return{setters:[e=>{i=e.R},e=>{s=e.d,n=e.L,r=e.s,a=e.F,o=e.V,d=e.H,l=e.O,c=e.P,p=e.q,u=e._,m=e.r,h=e.o,f=e.c},e=>{g=e.I},e=>{y=e.D},null,null],execute:function(){const t=s({components:{ReportTemplate:i},data:()=>({service:{},dde:{},title:"Duplicate Identifiers",fields:[],rows:[],columns:[[n.thTxt("Identifier"),n.thTxt("Count"),n.thTxt("View"),n.thTxt("Resolve")]]}),async created(){this.fields=this.getFormFields(),this.dde=new r,await this.dde.loadDDEStatus()},methods:{async onPeriod({identifier:e}){const t=parseInt(e.value.toString());this.title=e.label+" Duplicates",this.service=new g,this.service.setIdentifierType(t),this.rows=await this.getRows()},getFormFields:()=>[{id:"identifier",helpText:"Select Identifier type",type:a.TT_SELECT,validation:e=>o.required(e),options:async()=>(await g.getIdentifierTypes()).map((e=>({label:e.name,value:e.patient_identifier_type_id})))}],toDate:e=>d.toStandardHisDisplayFormat(e),async drillDuplicates(e){(await l.create({component:y,cssClass:"custom-modal",componentProps:{title:`Persons using identifier ${e}`,columns:["Given name","Family name","Gender","Birth date","Action"],onRows:async()=>(await this.service.getPatientsByIdentifier(e)).map((e=>{try{const t=new c(e);return[t.getGivenName(),t.getFamilyName(),t.getGender(),this.toDate(t.getBirthdate()),{type:"button",name:"View",action:()=>{l.dismiss().then((()=>{this.$router.push(`/patient/dashboard/${t.getID()}`)}))}}]}catch(t){return p("Unable to load patient details"),["N/A","N/A","N/A","N/A","N/A"]}}))}})).present()},async getRows(){return(await this.service.getDuplicateIndentifiers()).map((e=>[n.td(e.identifier),n.td(e.count),n.tdBtn("Select",(()=>this.drillDuplicates(e.identifier))),n.tdBtn("Resolve",(()=>{this.$router.push(`/npid/duplicates/${e.identifier}`)}),{event:{disabled:3!=this.service.getIdentifierType()}},"danger")]))}}});e("default",u(t,[["render",function(e,t,i,s,n,r){const a=m("report-template");return h(),f(a,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,canExportCsv:!1,canExportPDf:!1,onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])}]]))}}}));