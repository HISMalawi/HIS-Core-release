System.register(["./TableReportTemplate-legacy-C4LBGtof.js","./index-legacy-CNrLGT3P.js","./identifier_service-legacy-CzeOi4cB.js","./DrillTableModal-legacy-DZYeuey9.js","./VoidReason-legacy-Bzxn6_fV.js","./HisStandardForm-legacy-OekRIZB_.js","./ReportErrors-legacy-C_GtpKAy.js"],(function(e,t){"use strict";var i,s,n,r,a,o,l,d,c,p,m,u,f,y,h;return{setters:[e=>{i=e.R},e=>{s=e.d,n=e.L,r=e.F,a=e.V,o=e.H,l=e.O,d=e.q,c=e._,p=e.r,m=e.o,u=e.c},e=>{f=e.I},e=>{y=e.D},e=>{h=e.p},null,null],execute:function(){const t=s({components:{ReportTemplate:i},data:()=>({service:{},dde:{},title:"Multiple Identifiers",fields:[],rows:[],columns:[[n.thTxt("First Name"),n.thTxt("Last Name"),n.thTxt("Gender"),n.thTxt("Number of identifiers"),n.thTxt("View")]]}),async created(){this.fields=this.getFormFields()},methods:{async onPeriod({identifier:e}){const t=parseInt(e.value.toString());this.title=e.label+" Multiple Identifiers",this.service=new f,this.service.setIdentifierType(t),this.rows=await this.getRows()},getFormFields:()=>[{id:"identifier",helpText:"Select Identifier type",type:r.TT_SELECT,validation:e=>a.required(e),options:async()=>(await f.getIdentifierTypes()).map((e=>({label:e.name,value:e.patient_identifier_type_id})))}],toDate:e=>o.toStandardHisDisplayFormat(e),async drillDuplicates(e,t){(await l.create({component:y,cssClass:"custom-modal",componentProps:{title:"Identifiers belonging to client",columns:["identifier","date created","void"],onRows:async()=>e.map(((i,s)=>{try{return[i.identifier,this.toDate(i.date_created),{type:"button",name:"Void",color:"danger",action:async()=>{await this.voidActiveItem(i.patient_identifier_id,e,s,t)},disabled:!(e.length>1)}]}catch(n){return d("Unable to load patient details"),["N/A","N/A","N/A","N/A","N/A"]}}))}})).present()},voidActiveItem(e,t,i,s){h((async n=>{try{l.dismiss().then((async()=>{await this.service.voidMultipleIdentifiers([e],n,t[0].identifier_type);const r=t.splice(i,1);r.length>1?await this.drillDuplicates(r,s):this.rows.splice(s,1)}))}catch(r){d(`${r}`)}}),"void-modal custom-modal-backdrop")},async getRows(){return(await this.service.getMultipleIdentifiers()).map(((e,t)=>[n.td(e.given_name),n.td(e.family_name),n.td(e.gender),n.td(e.identifiers.length),n.tdBtn("Select",(()=>this.drillDuplicates(e.identifiers,t)))]))}}});e("default",c(t,[["render",function(e,t,i,s,n,r){const a=p("report-template");return m(),u(a,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,canExportCsv:!1,canExportPDf:!1,onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])}]]))}}}));