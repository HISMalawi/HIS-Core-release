System.register(["./index-legacy-DDADMnop.js","./TableView-legacy-D4xz2kz1.js","./clinic_report_service-legacy-G6ChkJJa.js","./v2utils-legacy-ByvmIHrr.js","./Export-legacy-VbltoLZZ.js","./index-legacy-Cjf3InP9.js"],(function(e,t){"use strict";var n,a,r,l,o,i,u,s,c,g,p,d,f,v,m,D,b;return{setters:[e=>{n=e.d,a=e.a5,r=e.r,l=e.t,o=e.aJ,i=e.cP,u=e.M,s=e.a8,c=e.v,g=e.u,p=e.w,d=e.x,f=e.ad},e=>{v=e.v},e=>{m=e.C},e=>{D=e.w,b=e.s},null,null],execute:function(){const t=n({components:{IonPage:a,v2Datatable:v},setup(){const e=o("reports.png"),t=r([]),n=r(""),a=new m,s=(e,t)=>({ref:t,label:e,toValue:e=>e.length,tdClick:e=>b({title:`${e.column.label}`,subtitle:n.value,patientIdentifiers:e.refData})}),c=[[{label:"Regimen",ref:"regimen"},s("Due for VL","due_for_vl"),s("Sample drawn","drawn"),s("High vl (>=1000 copies))","high_vl"),s("Low vl (<1000 copies))","low_vl")]],g=()=>D((async()=>{if(!a.startDate||!a.endDate)return u("Start date and end date required!");t.value=[],t.value=await a.getVlSuppressionReport()})),p=()=>i({onFinish:(e,t,r,l)=>{l&&a.setOccupation(l),n.value=`${r}`,a.startDate=e,a.endDate=t,g()}});return l((()=>p())),{logo:e,reportData:t,configure:p,generate:g,columns:c,period:n}}});e("default",s(t,[["render",function(e,t,n,a,r,l){const o=f("v2Datatable"),i=f("ion-page");return g(),c(i,null,{default:p((()=>[d(o,{title:"Clinic VL Suppression Report","icon-url":e.logo,subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:30,onConfigure:e.configure,onRefresh:()=>e.generate(),"report-prefix":"Clinic"},null,8,["icon-url","subtitle","columns","columnData","onConfigure","onRefresh"])])),_:1})}]]))}}}));