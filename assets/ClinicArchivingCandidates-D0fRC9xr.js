import{d as c,r as i,d8 as l,t as u,u as m,v as p,w as f,x as d,y as o,cW as g,a5 as v,aI as _}from"./index-DrPQ21-i.js";import{v as w}from"./TableView-DYQq8HZp.js";import{w as h}from"./v2utils-B87E9iaX.js";import"./Export-CWTuI3QV.js";const k=c({__name:"ClinicArchivingCandidates",setup(C){const r=_("reports.png"),e=i([]),n=new l,s=[[{label:"Filing#",ref:"filing_number"},{label:"Outcome",ref:"outcome"},{label:"Outcome date",ref:"outcome_date",toValue:t=>"".concat(g(t))}]],a=()=>h(async()=>{e.value=[],e.value=await n.getArchivingCandidates()});return u(()=>a()),(t,b)=>(m(),p(o(v),null,{default:f(()=>[d(w,{"icon-url":o(r),title:"Active clients with adverse outcomes","report-prefix":"Clinic",columns:s,columnData:e.value,rowsPerPage:50,onRefresh:a},null,8,["icon-url","columnData"])]),_:1}))}});export{k as default};