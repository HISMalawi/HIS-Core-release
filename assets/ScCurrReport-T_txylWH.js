import{d,a5 as f,cl as D,r as c,t as v,aH as b,d4 as m,aq as _,O as C,ah as P,cN as R,a6 as S,v as h,w,ab as u,u as y,x as g}from"./index-ATRrruTT.js";import{v as k}from"./TableView-C0_sXf7R.js";import{S as I}from"./stock_report_service-B2EA82FU.js";import{D as $}from"./DrillTableModal-DmVoeyj1.js";import"./Export-BikdWX3S.js";import"./index-_1Jf0d3I.js";const A=d({components:{IonPage:f,IonLoading:D,v2Datatable:k},setup(){const e=c([]),i=c(""),n=c(!1),t=new I,p=[[{label:"#",ref:"index"},{label:"ARV drug category",ref:"category"},{label:"# of bottles (units) remaining",ref:"units",value:a=>m(a.units),tdClick:async a=>{(await _.create({component:$,cssClass:"custom-modal",componentProps:{title:a.data.category,columns:["Drug","Quantity"],onRows:()=>{var o;return(((o=a.data)==null?void 0:o.granular_spec)||[]).map(s=>[s.drug_name,m(s.units)])}}})).present()}}]],l=async()=>{if(!(t.startDate&&t.endDate))return C("Start date and end date required!");n.value=!0,e.value=[];try{e.value=(await t.getScCurrReport()).map((a,o)=>({...a,index:o+1}))}catch(a){P("Unable to generate report!")}n.value=!1},r=()=>R({onFinish:(a,o,s)=>{i.value=s,t.startDate=a,t.endDate=o,l()}});return v(()=>!e.value.length&&r()),{Img:b,reportData:e,isLoading:n,configure:r,generate:l,columns:p,period:i}}});function F(e,i,n,t,p,l){const r=u("ion-loading"),a=u("v2Datatable"),o=u("ion-page");return y(),h(o,null,{default:w(()=>[g(r,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),g(a,{title:"Sc Curr","icon-url":e.Img("login-logos/PEPFAR.png"),subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:20,onConfigure:e.configure,onRefresh:()=>e.generate(),reportPrefix:"PEPFAR"},null,8,["icon-url","subtitle","columns","columnData","onConfigure","onRefresh"])]),_:1})}const x=S(A,[["render",F]]);export{x as default};