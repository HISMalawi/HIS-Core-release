import{d as g,r as n,da as O,t as y,u as D,v as C,w as V,x as w,y as p,cN as T,a9 as x,aa as S,cZ as a,cb as v,a5 as P,aH as B}from"./index-DYyilVc9.js";import{v as F}from"./TableView-CfmDrYrY.js";import{w as G,a as _,c as b}from"./v2utils-DJWwNf4b.js";import"./Export-9HDPVIRb.js";import"./index-0_K7-O2F.js";const E=g({__name:"ClinicOtherOutcomeReport",setup(L){const h=B("reports.png"),r=n([]),i=n(""),u=n(""),l=new O,s=n([]),c=[_("identifier"),{label:"First name",ref:"given_name",encrypted:!0},{label:"Last name",ref:"family_name",encrypted:!0},{label:"Birthdate",ref:"birthdate",toValue:e=>a(e)},{label:"Gender",ref:"gender",toValue:e=>v(e)},{label:"Outcome date",ref:"outcome_date",toValue:e=>a(e)},b()],d=()=>G(async()=>{r.value=[],r.value=await l.getOtherOutcome(u.value)}),m=()=>T({fields:[{id:"outcome",helpText:"Select outcome",type:x.TT_SELECT,validation:e=>S.required(e),options:()=>[{label:"Transfer Out",value:"Transfer Out",other:{columns:[_("identifier"),{label:"First name",ref:"given_name",encrypted:!0},{label:"Last name",ref:"family_name",encrypted:!0},{label:"Birthdate",ref:"birthdate",toValue:e=>a(e)},{label:"Gender",ref:"gender",toValue:e=>v(e)},{label:"Outcome date",ref:"outcome_date",toValue:e=>a(e)},{label:"TO Location",ref:"transferred_out_to"},b()]}},{label:"Died",value:"Died",other:{columns:c}},{label:"Stopped",value:"Stopped",other:{columns:c}}]}],defaultOnFinish:(e,t)=>{var o,f;t.occupation&&l.setOccupation(t.occupation),i.value="".concat(a(t.start_date)," to ").concat(a(t.end_date)),l.startDate=t.start_date,l.endDate=t.end_date,u.value="".concat(e.outcome.value),s.value=[(f=(o=e.outcome.other)==null?void 0:o.columns)!=null?f:[]],d()}});return y(()=>!r.value.length&&m()),(e,t)=>(D(),C(p(P),null,{default:V(()=>{var o;return[w(F,{"default-sort-order":"asc","default-sorted-column":"identifier","icon-url":p(h),subtitle:i.value,title:"".concat((o=u.value)!=null?o:"N/A"," Report"),"report-prefix":"Clinic",columns:s.value,onConfigure:m,columnData:r.value,rowsPerPage:50,onRefresh:d},null,8,["icon-url","subtitle","title","columns","columnData"])]}),_:1}))}});export{E as default};