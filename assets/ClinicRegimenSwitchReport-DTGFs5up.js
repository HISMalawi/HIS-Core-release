import{d as f,r as c,t as g,u as _,v,w as b,x as R,y as d,cd as h,c$ as o,cP as w,a5 as D,aJ as C,M as V}from"./index-CG6KEPsv.js";import{a as S}from"./regimen_report_service-BXdem81B.js";import{v as x}from"./TableView-QLAT3IiF.js";import{a as P,w as $}from"./v2utils-DRYjph3H.js";import"./Export-ngX2Az_3.js";import"./index-bO2fy8Iw.js";const q=f({__name:"ClinicRegimenSwitchReport",setup(y){const m=C("reports.png"),r=c([]),s=c(""),a=new S,p=[[P(),{label:"Gender",ref:"gender",toValue:e=>h(e)},{label:"DOB",ref:"birthdate",toValue:e=>o(e)},{label:"ART start date",ref:"art_start_date",toValue:e=>o(e)},{label:"Weight",ref:"current_weight"},{label:"Prev.Reg",ref:"previous_regimen"},{label:"Curr.Reg",ref:"current_regimen"},{label:"ARVs",ref:"medication",toValue:e=>e.map(t=>"".concat(t.medication," (").concat(t.quantity,")")).join(", ")},{label:"Curr.reg dispensed",ref:"last_dispensation_date",toValue:e=>o(e)}]],i=()=>$(async()=>{if(!(a.startDate&&a.endDate))return V("Start date and end date required!");r.value=[];const e=await a.getRegimenSwitchReport(!1);r.value=Object.values(e).map(t=>({...t,last_dispensation_date:t.medication.reduce((u,n)=>n.start_date,"")}))}),l=()=>w({onFinish:(e,t,u,n)=>{n&&a.setOccupation(n),s.value="".concat(u),a.startDate=e,a.endDate=t,i()}});return g(()=>!r.value.length&&l()),(e,t)=>(_(),v(d(D),null,{default:b(()=>[R(x,{"default-sort-order":"asc","default-sorted-column":"arv_number","icon-url":d(m),title:"Clinic Regimen Switch Report","report-prefix":"Clinic",subtitle:s.value,columns:p,columnData:r.value,rowsPerPage:50,onConfigure:l,onRefresh:i},null,8,["icon-url","subtitle","columnData"])]),_:1}))}});export{q as default};