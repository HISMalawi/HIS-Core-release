System.register(["./index-legacy-BsbMrqEO.js","./TableView-legacy-gG0hdQFU.js","./v2utils-legacy-i8Yf9CmJ.js","./Export-legacy-BCoNjk-A.js"],(function(e,t){"use strict";var a,l,r,n,s,u,i,o,d,c,f,b,m,_,p,v,g,y,V,D,h;return{setters:[e=>{a=e.d,l=e.r,r=e.d8,n=e.t,s=e.d5,u=e.ca,i=e.bv,o=e.al,d=e.cW,c=e.cK,f=e.u,b=e.v,m=e.w,_=e.x,p=e.y,v=e.a5,g=e.aI,y=e.Q},e=>{V=e.v},e=>{D=e.a,h=e.w},null],execute:function(){e("default",a({__name:"ClinicDueForViralLoad",setup(e){const t=l([]),a=g("reports.png"),w=l(""),x=new r,C=l([[]]);n((()=>{s.filingNumbersEnabled().then((e=>{C.value=[[e?{label:"Filing #",ref:"arv_number"}:D(),{label:"First name",ref:"given_name",encrypted:!0},{label:"Last name",ref:"family_name",encrypted:!0},{label:"Gender",ref:"gender",toValue:e=>u(e)},{label:"Age",ref:"birthdate",toValue:e=>e?i(o.getSessionDate()).diff(e,"years"):"N/A"},{label:"App.",ref:"appointment_date",toValue:e=>`${d(e)}`},{label:"ART started",ref:"start_date",toValue:e=>`${d(e)}`},{label:"Months on ART",ref:"months_on_art"},{label:"Milestone",ref:"mile_stone"},{label:"Ordered",ref:"last_result_order_date",toValue:e=>`${d(e)}`},{label:"Result",ref:"last_result"},{label:"Released",ref:"last_result_date",toValue:e=>`${d(e)}`}]],!t.value.length&&F()}))}));const A=()=>h((async()=>{if(!x.startDate||!x.endDate)return y("Start date and end date required!");t.value=[],t.value=await x.getClientsDueForVl()})),F=()=>c({onFinish:(e,t,a,l)=>{l&&x.setOccupation(l),w.value=`${a}`,x.startDate=e,x.endDate=t,A()}});return(e,l)=>(f(),b(p(v),null,{default:m((()=>[_(V,{title:"Clinic Clients due for VL (clients with appointments in specified period)","report-prefix":"Clinic","default-sort-order":"asc","default-sorted-column":"arv_number","icon-url":p(a),subtitle:w.value,columns:C.value,columnData:t.value,rowsPerPage:50,onConfigure:F,onRefresh:A},null,8,["icon-url","subtitle","columns","columnData"])])),_:1}))}}))}}}));