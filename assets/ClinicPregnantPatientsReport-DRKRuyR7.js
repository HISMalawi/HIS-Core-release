import{d as f,r as i,d8 as d,t as g,u as v,v as _,w as b,x as D,y as c,cW as P,cK as h,a5 as w,aI as C}from"./index-DrPQ21-i.js";import{v as x}from"./TableView-DYQq8HZp.js";import{a as y,w as B}from"./v2utils-B87E9iaX.js";import"./Export-CWTuI3QV.js";const V=f({__name:"ClinicPregnantPatientsReport",setup(R){const u=C("reports.png"),e=i([]),n=i(""),t=new d,p=[[y(),{label:"First name",ref:"given_name",encrypted:!0},{label:"Last name",ref:"family_name",encrypted:!0},{label:"Birthdate",ref:"birthdate",toValue:a=>"".concat(P(a))}]],r=()=>B(async()=>{e.value=[],e.value=await t.getPregnantWomen()}),o=()=>h({onFinish:(a,s,m,l)=>{l&&t.setOccupation(l),n.value="".concat(m),t.startDate=a,t.endDate=s,r()}});return g(()=>!e.value.length&&o()),(a,s)=>(v(),_(c(w),null,{default:b(()=>[D(x,{"icon-url":c(u),"default-sort-order":"asc","default-sorted-column":"arv_number",subtitle:n.value,title:"Clinic Pregnant patients report","report-prefix":"Clinic",columns:p,onConfigure:o,columnData:e.value,rowsPerPage:50,onRefresh:r},null,8,["icon-url","subtitle","columnData"])]),_:1}))}});export{V as default};