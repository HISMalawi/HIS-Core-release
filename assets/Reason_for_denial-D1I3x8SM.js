import{d as b,a5 as C,cl as R,t as w,r as o,ay as y,cZ as s,aq as r,a9 as D,aa as _,a6 as $,ab as u,u as L,v as P,w as E,x as h}from"./index-ATRrruTT.js";import{v as F}from"./TableView-BCFs59hT.js";import{C as O}from"./cxca_report_service-DahNgDWu.js";import{D as k}from"./DrillPatientIds-J0HsAuBJ.js";import"./Export-BikdWX3S.js";import"./index-_1Jf0d3I.js";import"./TableView-C0_sXf7R.js";const d=o([]),l=o(""),i=o(""),p=o(""),N=o(!1),T=o(""),S=b({components:{IonPage:C,IonLoading:R,v2Datatable:F},setup(){const t=async()=>{const e=new O;e.startDate=l.value,e.endDate=i.value;try{const a=await e.getClinicReport("REASON FOR NOT SCREENING REPORT"),n=m(a);d.value=n}catch(a){console.log(a)}},m=e=>Object.keys(e).map(a=>({reason:a,patients:e[a]})),v=async(e,a)=>{a.length<=0||(await r.create({component:k,backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:e,subtitle:p,patientIdentifiers:a,onFinish:()=>r.getTop().then(n=>n&&r.dismiss())}})).present()},f=["Reason","Total"],g=[[{label:"Reason",ref:"data.reason",value:e=>e.reason},{label:"Total",ref:"data.patients.length",secondaryLabel:"Clients diagnosed with",value:e=>e.patients.length,tdClick:({column:e,data:a})=>v("".concat(e.secondaryLabel," ").concat(a.reason," "),a.patients)}]],c=()=>y([{id:"start_date",helpText:"Start Date",type:D.TT_FULL_DATE,validation:e=>_.required(e),computedValue:e=>e.value},{id:"end_date",helpText:"End Date",type:D.TT_FULL_DATE,validation:e=>_.required(e),computedValue:e=>e.value}],(e,a)=>{l.value=a.start_date,i.value=a.end_date,p.value="Period (".concat(s(l.value)," to ").concat(s(i.value),")"),r.dismiss(),T.value="".concat(s(l.value)," to ").concat(s(i.value)),t()});return w(()=>!d.value.length&&c()),{columns:g,isLoading:N,reportData:d,period:p,csvQuarter:T,csvheaders:f,generate:t,configure:c}}});function A(t,m,v,f,g,c){const e=u("ion-loading"),a=u("v2Datatable"),n=u("ion-page");return L(),P(n,null,{default:E(()=>[h(e,{"is-open":t.isLoading,message:"Please wait..."},null,8,["is-open"]),h(a,{title:"Denial Reason",subtitle:t.period,columns:t.columns,columnData:t.reportData,rowsPerPage:25,onConfigure:t.configure,csvQuarter:t.csvQuarter,headers:t.csvheaders,onRefresh:t.generate},null,8,["subtitle","columns","columnData","onConfigure","csvQuarter","headers","onRefresh"])]),_:1})}const U=$(S,[["render",A]]);export{U as default};