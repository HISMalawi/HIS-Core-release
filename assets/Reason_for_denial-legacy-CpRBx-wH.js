System.register(["./index-legacy-BsbMrqEO.js","./TableView-legacy-DG1nax7h.js","./cxca_report_service-legacy-CioXTRNn.js","./DrillPatientIds-legacy-CKhrXjHW.js","./Export-legacy-BCoNjk-A.js","./TableView-legacy-gG0hdQFU.js"],(function(e,a){"use strict";var t,n,s,l,o,r,i,u,c,d,v,g,p,m,h,D,b,y,T;return{setters:[e=>{t=e.d,n=e.a5,s=e.cX,l=e.t,o=e.r,r=e.az,i=e.cW,u=e.as,c=e.ab,d=e.ac,v=e.a8,g=e.ad,p=e.u,m=e.v,h=e.w,D=e.x},e=>{b=e.v},e=>{y=e.C},e=>{T=e.D},null,null],execute:function(){const a=o([]),f=o(""),R=o(""),_=o(""),w=o(!1),L=o(""),C=t({components:{IonPage:n,IonLoading:s,v2Datatable:b},setup(){const e=async()=>{const e=new y;e.startDate=f.value,e.endDate=R.value;try{const n=await e.getClinicReport("REASON FOR NOT SCREENING REPORT"),s=t(n);a.value=s}catch(n){console.log(n)}},t=e=>Object.keys(e).map((a=>({reason:a,patients:e[a]}))),n=[[{label:"Reason",ref:"data.reason",value:e=>e.reason},{label:"Total",ref:"data.patients.length",secondaryLabel:"Clients diagnosed with",value:e=>e.patients.length,tdClick:({column:e,data:a})=>(async(e,a)=>{a.length<=0||(await u.create({component:T,backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:e,subtitle:_,patientIdentifiers:a,onFinish:()=>u.getTop().then((e=>e&&u.dismiss()))}})).present()})(`${e.secondaryLabel} ${a.reason} `,a.patients)}]],s=()=>r([{id:"start_date",helpText:"Start Date",type:c.TT_FULL_DATE,validation:e=>d.required(e),computedValue:e=>e.value},{id:"end_date",helpText:"End Date",type:c.TT_FULL_DATE,validation:e=>d.required(e),computedValue:e=>e.value}],((a,t)=>{f.value=t.start_date,R.value=t.end_date,_.value=`Period (${i(f.value)} to ${i(R.value)})`,u.dismiss(),L.value=`${i(f.value)} to ${i(R.value)}`,e()}));return l((()=>!a.value.length&&s())),{columns:n,isLoading:w,reportData:a,period:_,csvQuarter:L,csvheaders:["Reason","Total"],generate:e,configure:s}}});e("default",v(C,[["render",function(e,a,t,n,s,l){const o=g("ion-loading"),r=g("v2Datatable"),i=g("ion-page");return p(),m(i,null,{default:h((()=>[D(o,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),D(r,{title:"Denial Reason",subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:25,onConfigure:e.configure,csvQuarter:e.csvQuarter,headers:e.csvheaders,onRefresh:e.generate},null,8,["subtitle","columns","columnData","onConfigure","csvQuarter","headers","onRefresh"])])),_:1})}]]))}}}));