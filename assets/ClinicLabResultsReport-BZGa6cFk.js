import{d as E,r as l,t as R,u as S,v as P,w as G,x as A,y,cN as k,a9 as L,cZ as o,a5 as B,aH as M,cb as v,d5 as V,dn as F}from"./index-DYyilVc9.js";import{v as j}from"./TableView-CfmDrYrY.js";import{L as I}from"./lab_report_service-C9vOnQ8Y.js";import{w as N,b as U,a as H}from"./v2utils-DJWwNf4b.js";import"./Export-9HDPVIRb.js";import"./index-0_K7-O2F.js";const X=E({__name:"ClinicLabResultsReport",setup(Z){const x=M("reports.png"),p=l([]),m=l(""),b=l("asc"),f=l(""),c=l([]),n=new I,_=l([]),d=l("disaggregated"),h=l([]),O=r=>{const a={};return r.forEach(e=>{e.measures.forEach(t=>{t.name in a||(a[t.name]=[]),a[t.name].push({id:e.patient_id,arv:e.arv_number,gender:e.gender,ageGroup:e.age_group,birthdate:o(e.birthdate),ordered:o(e.order_date),specimen:e.test,test:t.name,result:"".concat(t.modifier," ").concat(t.value),released:o(e.result_date)})})}),a},g=()=>{const r=[[H("arv"),{label:"Gender",ref:"gender",toValue:e=>v(e)},{label:"Birthdate",ref:"birthdate",toValue:e=>"".concat(o(e))},{label:"Ordered",ref:"ordered",toValue:e=>"".concat(o(e))},{label:"Specimen",ref:"specimen"},{label:"Test",ref:"test"},{label:"Result",ref:"result"},{label:"Released",ref:"released",toValue:e=>"".concat(o(e))}]],a={disaggregated:{sortColumn:"gender",sortOrder:"desc",columns:[[{label:"Age group",ref:"age_group"},{label:"Gender",ref:"gender",toValue:e=>v(e)},...c.value.map(e=>({ref:e.label,label:e.label,toValue:t=>t.length,tdClick:t=>U({title:"".concat(t.data.age_group," | ").concat(v(t.data.gender)," | ").concat(e.label),columns:r,columnData:t.refData})}))]],data:()=>{const e=u=>F.reduce((i,s)=>{const $=c.value.reduce((w,C)=>({...w,[C.label]:C.other.filter(D=>D.ageGroup===s&&D.gender===u)}),{});return{...i,[s]:{age_group:s,gender:u,...$}}},{}),t=u=>Object.values(e(u)).flat(1);return[...t("F"),...t("M")]}},patient_level:{sortColumn:"arv",sortOrder:"asc",columns:r,data:()=>c.value.map(e=>e.other).flat(1)}};h.value=[{text:"<b>View Disaggregated</b>",icon:V,color:d.value==="disaggregated"?"primary":"dark",action:()=>{d.value="disaggregated",g()}},{text:"<b>View Patient Level</b>",icon:V,color:d.value==="patient_level"?"primary":"dark",action:()=>{d.value="patient_level",g()}}],setTimeout(()=>{const e=a[d.value];_.value=e.columns,p.value=e.data(),f.value=e.sortColumn,b.value=e.sortOrder},100)},T=()=>k({fields:[{id:"tests",helpText:"Available test(s) results",type:L.TT_MULTIPLE_SELECT,options:async(r,a,e)=>{n.setStartDate(e.start_date),n.setEndDate(e.end_date);const t=await N(async()=>{const u=await n.getLabResultsReport(),i=O(u);return Object.keys(i).map(s=>({label:s,value:i[s].length,other:i[s]}))},!1);return t!=null?t:[]}},{id:"type",helpText:"Select report type",type:L.TT_SELECT,options:()=>[{label:"Disaggregated",value:"disaggregated"},{label:"Patient level",value:"patient_level"}]}],defaultOnFinish:(r,a)=>{a.occupation&&n.setOccupation(a.occupation),m.value="".concat(o(a.start_date)," to ").concat(o(a.end_date)),n.startDate=a.start_date,n.endDate=a.end_date,c.value=r.tests,d.value=r.type.value,g()}});return R(()=>!p.value.length&&T()),(r,a)=>(S(),P(y(B),null,{default:G(()=>[A(j,{"header-badge":h.value,"default-sorted-column":f.value,"default-sort-order":b.value,"icon-url":y(x),title:"Lab test result(s)","report-prefix":"Clinic",subtitle:m.value,columns:_.value,columnData:p.value,rowsPerPage:50,onConfigure:T},null,8,["header-badge","default-sorted-column","default-sort-order","icon-url","subtitle","columns","columnData"])]),_:1}))}});export{X as default};