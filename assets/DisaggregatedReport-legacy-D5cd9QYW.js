System.register(["./index-legacy-DLdqxVnr.js","./opd_report_service-legacy-CAsrv9tf.js","./TableView-legacy-CQt1jCTg.js","./v2utils-legacy-DSVOqmzD.js","./Export-legacy-pUCWT6tL.js","./index-legacy-Cy5lJcFI.js"],(function(e,a){"use strict";var t,n,r,o,l,i,s,c,u,g,d,p,f,m,b,D,v,h,y,x,j;return{setters:[e=>{t=e.d,n=e.a5,r=e.cl,o=e.r,l=e.t,i=e.aH,s=e.O,c=e.ah,u=e.d0,g=e.cN,d=e.aq,p=e.a6,f=e.ab,m=e.u,b=e.v,D=e.w,v=e.x},e=>{h=e.O,y=e.D},e=>{x=e.v},e=>{j=e.A},null,null],execute:function(){const a=t({components:{IonPage:n,IonLoading:r,v2Datatable:x},setup(){const e=o([]),a=o(""),t=o(""),n=o(!1),r=new h,p=o([]);let f=0;const m=(e,t)=>({ref:t,label:e,defaultValue:"0",toValue:e=>e.length,tdClick:async e=>{e.refData.length&&(async e=>{(await d.create({component:j,backdropDismiss:!1,cssClass:"large-modal",componentProps:{...e,subtitle:a.value,onFinish:()=>d.getTop().then((e=>e&&d.dismiss()))}})).present()})({patientIdentifiers:e.refData,title:`${e.data.age_group} ${e.data.gender} ${e.column.label}`})}}),b=[[{label:"#",ref:"index",toValue:()=>++f},{label:"Age group",ref:"ageGroup"},{label:"Gender",ref:"gender"},...Object.entries(y).map((([e,a])=>m(a,e)))]],D=async()=>{if(!r.startDate||!r.endDate)return s("Start date and end date required!");n.value=!0;try{e.value=await r.getDisaggReport()}catch(a){console.error(a);const e="Unable to generate report!";c(e),p.value=[{text:e,color:"danger",icon:u,action:function(){p.value=[{text:`Exception occured: <b>${a}</b>`,color:"danger",icon:u}]}}]}n.value=!1,t.value=""},v=()=>g({onFinish:(e,t,n)=>{a.value=n,r.startDate=e,r.endDate=t,D()}});return l((()=>v())),{Img:i,headerBadge:p,reportData:e,isLoading:n,configure:v,generate:D,columns:b,period:a}}});e("default",p(a,[["render",function(e,a,t,n,r,o){const l=f("ion-loading"),i=f("v2Datatable"),s=f("ion-page");return m(),b(s,null,{default:D((()=>[v(l,{"is-open":e.isLoading,message:"Please wait.."},null,8,["is-open"]),v(i,{"icon-url":e.Img("reports.png"),title:"Clinic Disaggregated Report","report-prefix":"clinic",subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:100,onConfigure:e.configure,onRefresh:e.generate,headerBadge:e.headerBadge},null,8,["icon-url","subtitle","columns","columnData","onConfigure","onRefresh","headerBadge"])])),_:1})}]]))}}}));