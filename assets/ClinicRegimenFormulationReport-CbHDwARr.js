import{d as v,r,t as _,u as b,v as R,w as D,x as T,y as m,cb as h,cZ as n,cN as S,a9 as c,aa as p,a5 as C,aH as F,O as w}from"./index-DYyilVc9.js";import{v as x}from"./TableView-CfmDrYrY.js";import{a as E,R as V,F as y}from"./regimen_report_service-CtcAKQAy.js";import{a as O,w as G}from"./v2utils-DJWwNf4b.js";import"./Export-9HDPVIRb.js";import"./index-0_K7-O2F.js";const $=v({__name:"ClinicRegimenFormulationReport",setup(N){const f=F("reports.png"),o=r([]),l=r(""),i=r(""),u=r(""),t=new E,g=[[O(),{label:"Gender",ref:"gender",toValue:e=>h(e)},{label:"Date of Birth",ref:"birthdate",toValue:e=>"".concat(n(e))},{label:"Reg. name",ref:"regimen"},{label:"Formulation",ref:"drugs"}]],s=()=>G(async()=>{if(!(t.startDate&&t.endDate))return w("Start date and end date required!");o.value=[],o.value=await t.getRegimenFormulationReport(u.value,i.value)}),d=()=>S({fields:[{id:"regimen",helpText:"Select regimen",type:c.TT_SELECT,validation:e=>p.required(e),options:()=>V.map(e=>({label:e,value:e}))},{id:"formulation",helpText:"Select formulation",type:c.TT_SELECT,validation:e=>p.required(e),options:()=>y.map(e=>({label:e,value:e}))}],defaultOnFinish:(e,a)=>{l.value="".concat(n(a.start_date)," to ").concat(n(a.end_date)),t.startDate=a.start_date,t.endDate=a.end_date,a.occupation&&t.setOccupation(a.occupation),i.value=e.formulation.value,u.value=e.regimen.value,s()}});return _(()=>!o.value.length&&d()),(e,a)=>(b(),R(m(C),null,{default:D(()=>[T(x,{"default-sort-order":"asc","default-sorted-column":"arv_number","icon-url":m(f),title:"Regimen Formulation: Patient level report","report-prefix":"Clinic",subtitle:l.value,columns:g,columnData:o.value,rowsPerPage:50,onConfigure:d,onRefresh:s},null,8,["icon-url","subtitle","columnData"])]),_:1}))}});export{$ as default};