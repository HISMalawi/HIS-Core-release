System.register(["./index-legacy-Lddj3iK3.js","./TableView-legacy-KAbs10gu.js","./stock_report_service-legacy-kI1t_xwx.js","./DrillTableModal-legacy-DhXTS2dS.js","./Export-legacy-CDL1ma8x.js","./index-legacy-BIezcsaE.js"],(function(e,a){"use strict";var t,n,r,o,l,s,i,u,c,g,d,p,m,f,y,v,D,b,P,w;return{setters:[e=>{t=e.d,n=e.a5,r=e.cz,o=e.r,l=e.t,s=e.aQ,i=e.di,u=e.aq,c=e.O,g=e.ah,d=e.d2,p=e.a6,m=e.v,f=e.w,y=e.ab,v=e.u,D=e.x},e=>{b=e.v},e=>{P=e.S},e=>{w=e.D},null,null],execute:function(){const a=t({components:{IonPage:n,IonLoading:r,v2Datatable:b},setup(){const e=o([]),a=o(""),t=o(!1),n=new P,r=[[{label:"#",ref:"index"},{label:"ARV drug category",ref:"category"},{label:"# of bottles (units) remaining",ref:"units",value:e=>i(e.units),tdClick:async e=>{(await u.create({component:w,cssClass:"custom-modal",componentProps:{title:e.data.category,columns:["Drug","Quantity"],onRows:()=>(e.data?.granular_spec||[]).map((e=>[e.drug_name,i(e.units)]))}})).present()}}]],p=async()=>{if(!n.startDate||!n.endDate)return c("Start date and end date required!");t.value=!0,e.value=[];try{e.value=(await n.getScCurrReport()).map(((e,a)=>({...e,index:a+1})))}catch(a){g("Unable to generate report!")}t.value=!1},m=()=>d({onFinish:(e,t,r)=>{a.value=r,n.startDate=e,n.endDate=t,p()}});return l((()=>!e.value.length&&m())),{Img:s,reportData:e,isLoading:t,configure:m,generate:p,columns:r,period:a}}});e("default",p(a,[["render",function(e,a,t,n,r,o){const l=y("ion-loading"),s=y("v2Datatable"),i=y("ion-page");return v(),m(i,null,{default:f((()=>[D(l,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),D(s,{title:"Sc Curr","icon-url":e.Img("login-logos/PEPFAR.png"),subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:20,onConfigure:e.configure,onRefresh:()=>e.generate(),reportPrefix:"PEPFAR"},null,8,["icon-url","subtitle","columns","columnData","onConfigure","onRefresh"])])),_:1})}]]))}}}));
