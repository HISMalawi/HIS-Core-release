import{d as p,r as l,da as _,t as b,d7 as g,cb as v,bu as D,aj as h,cZ as n,cN as V,u as C,v as w,w as A,x as R,y as c,a5 as y,aH as x,O as P}from"./index-ATRrruTT.js";import{v as F}from"./TableView-C0_sXf7R.js";import{a as L,w as O}from"./v2utils-CjCFVQDN.js";import"./Export-BikdWX3S.js";import"./index-_1Jf0d3I.js";const T=p({__name:"ClinicDueForViralLoad",setup(S){const t=l([]),f=x("reports.png"),o=l(""),a=new _,s=l([[]]);b(()=>{g.filingNumbersEnabled().then(r=>{s.value=[[r?{label:"Filing #",ref:"arv_number"}:L(),{label:"First name",ref:"given_name",encrypted:!0},{label:"Last name",ref:"family_name",encrypted:!0},{label:"Gender",ref:"gender",toValue:e=>v(e)},{label:"Age",ref:"birthdate",toValue:e=>e?D(h.getSessionDate()).diff(e,"years"):"N/A"},{label:"App.",ref:"appointment_date",toValue:e=>"".concat(n(e))},{label:"ART started",ref:"start_date",toValue:e=>"".concat(n(e))},{label:"Months on ART",ref:"months_on_art"},{label:"Milestone",ref:"mile_stone"},{label:"Ordered",ref:"last_result_order_date",toValue:e=>"".concat(n(e))},{label:"Result",ref:"last_result"},{label:"Released",ref:"last_result_date",toValue:e=>"".concat(n(e))}]],!t.value.length&&u()})});const i=()=>O(async()=>{if(!(a.startDate&&a.endDate))return P("Start date and end date required!");t.value=[],t.value=await a.getClientsDueForVl()}),u=()=>V({maxDate:"",onFinish:(r,e,m,d)=>{d&&a.setOccupation(d),o.value="".concat(m),a.startDate=r,a.endDate=e,i()}});return(r,e)=>(C(),w(c(y),null,{default:A(()=>[R(F,{title:"Clinic Clients due for VL (clients with appointments in specified period)","report-prefix":"Clinic","default-sort-order":"asc","default-sorted-column":"arv_number","icon-url":c(f),subtitle:o.value,columns:s.value,columnData:t.value,rowsPerPage:50,onConfigure:u,onRefresh:i},null,8,["icon-url","subtitle","columns","columnData"])]),_:1}))}});export{T as default};