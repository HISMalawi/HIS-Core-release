import{d,a5 as f,cn as D,r as c,t as v,aJ as _,d6 as m,as as b,M as C,aj as P,cP as R,a8 as S,v as w,w as h,ad as u,u as y,x as g}from"./index-CG6KEPsv.js";import{v as k}from"./TableView-QLAT3IiF.js";import{S as I}from"./stock_report_service-CObj5uI8.js";import{D as $}from"./DrillTableModal-CQMtbAj5.js";import"./Export-ngX2Az_3.js";import"./index-bO2fy8Iw.js";const A=d({components:{IonPage:f,IonLoading:D,v2Datatable:k},setup(){const e=c([]),i=c(""),n=c(!1),t=new I,p=[[{label:"#",ref:"index"},{label:"ARV drug category",ref:"category"},{label:"# of bottles (units) remaining",ref:"units",value:a=>m(a.units),tdClick:async a=>{(await b.create({component:$,cssClass:"custom-modal",componentProps:{title:a.data.category,columns:["Drug","Quantity"],onRows:()=>{var o;return(((o=a.data)==null?void 0:o.granular_spec)||[]).map(s=>[s.drug_name,m(s.units)])}}})).present()}}]],l=async()=>{if(!(t.startDate&&t.endDate))return C("Start date and end date required!");n.value=!0,e.value=[];try{e.value=(await t.getScCurrReport()).map((a,o)=>({...a,index:o+1}))}catch(a){P("Unable to generate report!")}n.value=!1},r=()=>R({onFinish:(a,o,s)=>{i.value=s,t.startDate=a,t.endDate=o,l()}});return v(()=>!e.value.length&&r()),{Img:_,reportData:e,isLoading:n,configure:r,generate:l,columns:p,period:i}}});function F(e,i,n,t,p,l){const r=u("ion-loading"),a=u("v2Datatable"),o=u("ion-page");return y(),w(o,null,{default:h(()=>[g(r,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),g(a,{title:"Sc Curr","icon-url":e.Img("login-logos/PEPFAR.png"),subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:20,onConfigure:e.configure,onRefresh:()=>e.generate(),reportPrefix:"PEPFAR"},null,8,["icon-url","subtitle","columns","columnData","onConfigure","onRefresh"])]),_:1})}const j=S(A,[["render",F]]);export{j as default};