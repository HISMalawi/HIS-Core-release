System.register(["./index-legacy-DDADMnop.js","./TableView-legacy-D4xz2kz1.js","./v2utils-legacy-ByvmIHrr.js","./Export-legacy-VbltoLZZ.js","./index-legacy-Cjf3InP9.js"],(function(e,t){"use strict";var l,a,r,n,s,u,i,o,d,c,f,b,m,_,g,p,v,y,V,D,h;return{setters:[e=>{l=e.d,a=e.r,r=e.dc,n=e.t,s=e.d9,u=e.cd,i=e.bw,o=e.al,d=e.c$,c=e.cP,f=e.u,b=e.v,m=e.w,_=e.x,g=e.y,p=e.a5,v=e.aJ,y=e.M},e=>{V=e.v},e=>{D=e.a,h=e.w},null,null],execute:function(){e("default",l({__name:"ClinicDueForViralLoad",setup(e){const t=a([]),l=v("reports.png"),w=a(""),x=new r,C=a([[]]);n((()=>{s.filingNumbersEnabled().then((e=>{C.value=[[e?{label:"Filing #",ref:"arv_number"}:D(),{label:"First name",ref:"given_name",encrypted:!0},{label:"Last name",ref:"family_name",encrypted:!0},{label:"Gender",ref:"gender",toValue:e=>u(e)},{label:"Age",ref:"birthdate",toValue:e=>e?i(o.getSessionDate()).diff(e,"years"):"N/A"},{label:"App.",ref:"appointment_date",toValue:e=>`${d(e)}`},{label:"ART started",ref:"start_date",toValue:e=>`${d(e)}`},{label:"Months on ART",ref:"months_on_art"},{label:"Milestone",ref:"mile_stone"},{label:"Ordered",ref:"last_result_order_date",toValue:e=>`${d(e)}`},{label:"Result",ref:"last_result"},{label:"Released",ref:"last_result_date",toValue:e=>`${d(e)}`}]],!t.value.length&&j()}))}));const $=()=>h((async()=>{if(!x.startDate||!x.endDate)return y("Start date and end date required!");t.value=[],t.value=await x.getClientsDueForVl()})),j=()=>c({onFinish:(e,t,l,a)=>{a&&x.setOccupation(a),w.value=`${l}`,x.startDate=e,x.endDate=t,$()}});return(e,a)=>(f(),b(g(p),null,{default:m((()=>[_(V,{title:"Clinic Clients due for VL (clients with appointments in specified period)","report-prefix":"Clinic","default-sort-order":"asc","default-sorted-column":"arv_number","icon-url":g(l),subtitle:w.value,columns:C.value,columnData:t.value,rowsPerPage:50,onConfigure:j,onRefresh:$},null,8,["icon-url","subtitle","columns","columnData"])])),_:1}))}}))}}}));