System.register(["./index-legacy-BClzHwRE.js","./TableView-legacy-Cm1La1b_.js","./v2utils-legacy-DubgdDDG.js","./Export-legacy-6qZf0wdz.js","./index-legacy-CwybCMSN.js"],(function(e,t){"use strict";var l,a,r,s,d,o,u,n,i,c,v,_,b,g,f,T,m,y,p,D,w,O;return{setters:[e=>{l=e.d,a=e.r,r=e.cc,s=e.ap,d=e.t,o=e.u,u=e.v,n=e.w,i=e.x,c=e.y,v=e.cZ,_=e.ag,b=e.cN,g=e.a5,f=e.aH,T=e.d5,m=e.d6,y=e.aI},e=>{p=e.v},e=>{D=e.a,w=e.w,O=e.b},null,null],execute:function(){e("default",l({__name:"ClinicViralLoadRegister",setup(e){const t=f("reports.png"),l=a(""),h=a([]),R=a("All"),j=a([]),C=new r,x=[[D(),{label:"Accession #",ref:"accession_number"},{label:"Status",ref:"order_status"},{label:"Order Date",ref:"date_ordered",toValue:e=>`${v(e)}`},{label:"Result",ref:"result",toValue:e=>e?e.replace(/</g,"&lt;"):""},{label:"Date received",ref:"date_received",toValue:e=>`${v(e)??""}`},{label:"Mode of Delivery",ref:"result_delivery_mode",toValue:e=>"test_results_delivered_to_site_electronically"==e?"Electronic":"test_results_delivered_to_site_manually"==e?"Manual":""},{label:"Test reason",ref:"test_reason"},{label:"TAT(Days)",ref:"tat",value:e=>e.date_received&&e.date_ordered?_.dateDiffInDays(e.date_received,e.date_ordered):""}]],A={All:()=>!0,"No results":e=>!e.result,"With Results":e=>e.result,Rejected:e=>"test-rejected"===e.order_status,Drawn:e=>"drawn"===e.order_status,Pending:e=>"pending"===e.order_status,Started:e=>"started"===e.order_status,Failed:e=>"failed"===e.order_status,"Not-done":e=>"not-done"===e.order_status,Completed:e=>"completed"===e.order_status,"Targeted orders":e=>/target/i.test(`${e.test_reason}`),"Targeted orders with results":e=>/target/i.test(`${e.test_reason}`)&&e.result},S=e=>A[e]?h.value.filter((t=>A[e](t))):[],N=s((()=>S(R.value))),P=()=>{j.value=[{text:"<b>High level view</b>",icon:T,color:"primary",action:()=>(async()=>{const e=e=>S(e).length||"0",t=[{label:"Total Orders",value:e("All")},{label:"Total Orders With Results",value:e("With Results")},{label:"Total Orders No Results",value:e("No results")},{label:"Total Orders Rejected",value:e("Rejected")},{label:"Total Targeted Orders",value:e("Targeted orders")},{label:"Total Targeted Orders With Results",value:e("Targeted orders with results")},{label:"Total Orders Drawn",value:e("Drawn")},{label:"Total Orders Pending",value:e("Pending")},{label:"Total Orders Started",value:e("Started")},{label:"Total Orders Failed",value:e("Failed")},{label:"Total Orders Not-done",value:e("Not-done")},{label:"Total Orders Completed",value:e("Completed")},{label:"Average TAT (days)",value:(()=>{let e=0;const t=h.value.reduce(((t,l)=>l.date_received&&l.date_ordered?(++e,t+parseInt(`${_.dateDiffInDays(l.date_received,l.date_ordered)}`)):t),0);return Math.floor(t/e)})()}];O({title:"Register Summary",columns:[[{label:"Indicator",ref:"label"},{label:"Count",ref:"value"}]],columnData:t,subtitle:l.value,rowsPerPage:50})})()},{text:`<b>Report filter: <i>${R.value}</i></b>`,icon:m,color:"primary",action:async()=>{const e=await y("Select report filter","",Object.keys(A),[{name:"Cancel",slot:"start"},{name:"Select",slot:"end",role:"action"}]);R.value=e?.selection||R.value,P()}}]},V=()=>w((async()=>{h.value=[],j.value=[],h.value=await C.getClinicElectronicAlerts(),P()})),$=()=>b({onFinish:(e,t,a,r)=>{r&&C.setOccupation(r),l.value=`${a}`,C.startDate=e,C.endDate=t,V()}});return d((()=>!h.value.length&&$())),(e,a)=>(o(),u(c(g),null,{default:n((()=>[i(p,{"default-sort-order":"asc","default-sorted-column":"arv_number","icon-url":c(t),subtitle:l.value,title:"Viral Load Register","report-prefix":"Clinic",columns:x,onConfigure:$,headerBadge:j.value,columnData:N.value,rowsPerPage:50,onRefresh:V},null,8,["icon-url","subtitle","headerBadge","columnData"])])),_:1}))}}))}}}));