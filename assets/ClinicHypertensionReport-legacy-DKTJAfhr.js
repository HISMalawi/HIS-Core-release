System.register(["./index-legacy-DLdqxVnr.js","./TableView-legacy-CQt1jCTg.js","./clinic_report_service-legacy-DvN4sQ_V.js","./HypertensionDrilldown-legacy-DBdD3vbc.js","./v2utils-legacy-DSVOqmzD.js","./Export-legacy-pUCWT6tL.js","./index-legacy-Cy5lJcFI.js"],(function(e,n){"use strict";var a,t,r,l,o,i,g,p,s,c,m,d,u,_,f,y,b,h;return{setters:[e=>{a=e.d,t=e.a5,r=e.r,l=e.t,o=e.aH,i=e.cN,g=e.aq,p=e.O,s=e.a6,c=e.v,m=e.w,d=e.ab,u=e.u,_=e.x},e=>{f=e.v},e=>{y=e.C},e=>{b=e.H},e=>{h=e.w},null,null],execute:function(){const n=a({components:{IonPage:t,v2Datatable:f},setup(){const e=o("reports.png"),n=r([]),a=r(""),t=new y,s=(e,n)=>({label:e,ref:n,toValue:e=>e.length,tdClick:e=>m(`${e.column.label}`,e.refData)}),c=[[{label:"#",ref:"index"},{label:"Age group",ref:"age_group"},{label:"Gender",ref:"gender"},s("Screened for HTN","screened"),s("Normal <140/<90","normal_reading"),s("Mild 140-159/90-99","mild_reading"),s("Moderate 160-180/100-110","moderate_reading"),s("Severe >180/>110","severe_reading"),s("Hydrochlorothiazide 25mg","hydrochlorothiazide_25mg"),s("Amlodipine 5mg","amlodipine_5mg"),s("Amlodipine 10 mg","amlodipine_10mg"),s("Captopril 25mg","captopril_25mg"),s("Captopril 6-25mg","captopril_6_25mg"),s("Captopril 12-5mg","captopril_12_5mg"),s("Captopril 50mg","captopril_50mg"),s("Enalapril 5 mg","enalapril_5mg"),s("Enalapril 10mg","enalapril_10mg"),s("Atenolol 50mg","atenolol_50mg"),s("Atenolol 100mg","atenolol_100mg"),s("Nifedipine 10mg","nifedipine_10mg"),s("Nifedipine 20mg","nifedipine_20mg"),s("Total (regimen)","total_regimen")]],m=async(e,n)=>{n.length&&(await g.create({component:b,backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:e,subtitle:a,patients:n,onFinish:()=>g.getTop().then((e=>e&&g.dismiss()))}})).present()},d=()=>h((async()=>{if(!t.startDate||!t.endDate)return p("Start date and end date required!");n.value=[];const e=await t.getHypertensionReport(),a=Object.keys(e).reduce(((n,a)=>(n.M.push({age_group:a,gender:"Male",...e[a].M}),n.F.push({age_group:a,gender:"Female",...e[a].F}),n)),{F:[],M:[]});n.value=a.F.concat(a.M).map(((e,n)=>({index:n+1,...e})))})),u=()=>i({onFinish:(e,n,r,l)=>{l&&t.setOccupation(l),a.value=`${r}`,t.startDate=e,t.endDate=n,d()}});return l((()=>u())),{logo:e,reportData:n,configure:u,generate:d,columns:c,period:a}}});e("default",s(n,[["render",function(e,n,a,t,r,l){const o=d("v2Datatable"),i=d("ion-page");return u(),c(i,null,{default:m((()=>[_(o,{title:"Hypertension Report","icon-url":e.logo,subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:50,onConfigure:e.configure,onRefresh:()=>e.generate(),"report-prefix":"Clinic"},null,8,["icon-url","subtitle","columns","columnData","onConfigure","onRefresh"])])),_:1})}]]))}}}));