System.register(["./index-legacy-BsbMrqEO.js","./TableView-legacy-gG0hdQFU.js","./Export-legacy-BCoNjk-A.js"],(function(e,a){"use strict";var t,r,l,n,u,i,s,o,d,c,v,f,g,b,p,m,h,y;return{setters:[e=>{t=e.d,r=e.r,l=e.dN,n=e.ar,u=e.t,i=e.u,s=e.v,o=e.w,d=e.x,c=e.y,v=e.cX,f=e.a5,g=e.Q,b=e.aj,p=e.cK,m=e.ca,h=e.cW},e=>{y=e.v},null],execute:function(){e("default",t({__name:"ClinicOutcomes",setup(e){const a=r([]),t=r(""),D=r(!1),w=new l,_=n((()=>[[{label:"Age Group",ref:"age_group"},{label:"Gender",ref:"gender"},{label:"Alive",ref:"alive"},{label:"Died",ref:"gender",value:e=>m(e.gender)},{label:"Referred Within",ref:"birthdate",value:e=>h(e.birthdate)},{label:"Transferred Out",ref:"order_date",value:e=>h(e.order_date)}]])),x=async()=>{if(!w.startDate||!w.endDate)return g("Start date and end date required!");D.value=!0,a.value=[];try{a.value=await w.getOutcomesReport()}catch(e){b("Unable to generate report!")}D.value=!1},R=()=>p({onFinish:(e,a,r)=>{t.value=`Period (${r})`,w.startDate=e,w.endDate=a,x()}});return u((()=>R())),(e,r)=>(i(),s(c(f),null,{default:o((()=>[d(c(v),{"is-open":D.value,message:"Please wait..."},null,8,["is-open"]),d(y,{title:"Clinic Outcomes Report",subtitle:t.value,columns:_.value,columnData:a.value,rowsPerPage:15,onConfigure:R,onRefresh:()=>x(),"report-prefix":"Clinic"},null,8,["subtitle","columns","columnData","onRefresh"])])),_:1}))}}))}}}));