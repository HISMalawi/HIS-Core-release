System.register(["./index-legacy-DLdqxVnr.js","./TableView-legacy-CQt1jCTg.js","./defaulters_report_service-legacy-LB8lpU3_.js","./v2utils-legacy-DSVOqmzD.js","./Export-legacy-pUCWT6tL.js","./index-legacy-Cy5lJcFI.js"],(function(e,a){"use strict";var t,l,r,n,u,d,i,s,c,o,f,m,b,g,v,p,$,_,y;return{setters:[e=>{t=e.d,l=e.r,r=e.t,n=e.u,u=e.v,d=e.w,i=e.x,s=e.y,c=e.cb,o=e.cZ,f=e.cN,m=e.a5,b=e.aH,g=e.O,v=e.c_},e=>{p=e.v},e=>{$=e.D},e=>{_=e.a,y=e.w},null,null],execute:function(){e("default",t({__name:"ClinicDefaulters",setup(e){const a=b("reports.png"),t=l([]),D=l(""),V=l([]),h=new $;h.setIsPepfar(!1);const x=[[_(),{label:"First name",ref:"given_name",encrypted:!0},{label:"Last name",ref:"family_name",encrypted:!0},{label:"Gender",ref:"gender",toValue:e=>c(e)},{label:"Birthdate",ref:"birthdate",toValue:e=>`${o(e)}`},{label:"Appointment date",ref:"appointment_date",toValue:e=>`${o(e)}`},{label:"Date defaulted",ref:"defaulter_date",toValue:e=>`${o(e)}`},{label:"Address",ref:"district",encrypted:!0,exportedValue:{dataValue:e=>`\n                Cell: ${e.data?.cell_number??"-"},\n                Village: ${e.data?.village??"-"}, \n                District: ${e.data?.district??"-"}, \n                TA: ${e.data?.ta??"-"}, \n                Landmark: ${e.data?.land_mark??"-"} \n            `},value:e=>(e.cell_number?`CELL: ${e.cell_number} <br/>`:"")+(e.village?`VILLAGE: ${e.village} <br/>`:"")+(e.district?`DISTRICT: ${e.district} <br/>`:"")+(e.ta?`TA: ${e.ta} <br/>`:"")+(e.landmark?`Landmark: ${e.landmark}`:"")}]],C=()=>y((async()=>{if(!h.startDate||!h.endDate)return g("Start date and end date required!");V.value=[],t.value=[],t.value=await h.getDefaulters(),V.value=[{text:`Total defaulters: <b>${t.value.length}</b>`,icon:v,color:"primary"}]})),L=()=>f({onFinish:(e,a,t,l)=>{l&&h.setOccupation(l),D.value=`${t}`,h.startDate=e,h.endDate=a,C()}});return r((()=>!t.value.length&&L())),(e,l)=>(n(),u(s(m),null,{default:d((()=>[i(p,{"default-sort-order":"asc","default-sorted-column":"arv_number","icon-url":s(a),title:"Clinic Defaulters Report","report-prefix":"Clinic",subtitle:D.value,columns:x,columnData:t.value,rowsPerPage:50,onConfigure:L,onRefresh:C,headerBadge:V.value},null,8,["icon-url","subtitle","columnData","headerBadge"])])),_:1}))}}))}}}));