System.register(["./index-legacy-BsbMrqEO.js","./tx_report_service-legacy-C0jM_h2S.js","./TableView-legacy-gG0hdQFU.js","./v2utils-legacy-i8Yf9CmJ.js","./ReportErrors-legacy-B8HqD67j.js","./moh_cohort_service-legacy-Bdhy1-vE.js","./Export-legacy-BCoNjk-A.js"],(function(e,t){"use strict";var n,a,r,o,i,s,l,c,d,u,g,p,m,_,f,h,b,w,v,x,D,y,T,$,k,A,P,R;return{setters:[e=>{n=e.d,a=e.a5,r=e.cX,o=e.r,i=e.t,s=e.aI,l=e.as,c=e.Q,d=e.af,u=e.aK,g=e.cY,p=e.aj,m=e.cZ,_=e.c_,f=e.cK,h=e.c$,b=e.d0,w=e.a8,v=e.ad,x=e.u,D=e.v,y=e.w,T=e.x},e=>{$=e.T},e=>{k=e.v},e=>{A=e.A},e=>{P=e.R},e=>{R=e.M},null],execute:function(){const t=n({components:{IonPage:a,IonLoading:r,v2Datatable:k},setup(){const e=o([]),t=o(""),n=o(!1),a=new $,r=o([]),w=new R,v=(e,n)=>({ref:n,label:e,toValue:e=>e.length,tdClick:async e=>{e.refData.length&&(await l.create({component:A,backdropDismiss:!1,cssClass:"large-modal",componentProps:{subtitle:t,patientIdentifiers:e.refData,title:`${e.data.age_group} ${e.data.gender} ${e.column.label}`,onFinish:()=>l.getTop().then((e=>e&&l.dismiss()))}})).present()}}),x=[[{label:"#",ref:"index"},{label:"Age group",ref:"age_group"},{label:"Gender",ref:"gender"},v("Tx new CD4 <200","cd4_less_than_200"),v("Tx new CD4 >=200","cd4_greater_than_equal_to_200"),v("Tx new CD4 Unknown","cd4_unknown_or_not_done"),v("Transfer-ins","transfer_in")]],D=function(e){const t=r.value.findIndex((t=>t.id===e.id));-1!==t?r.value[t]=e:r.value.push(e)},y=async function(e){const t="validationErrors";(await l.create({id:t,component:P,backdropDismiss:!1,cssClass:"large-modal",componentProps:{errors:e}})).present(),D({id:t,text:`<b>${e.length}</b> validation errors detected`,icon:b,color:"danger",action:()=>y(e)})},T=async(o=!1)=>{if(!a.startDate||!a.endDate)return c("Start date and end date required!");const i=o&&await d("Do you want to rebuild report?");n.value=!0,e.value=[];try{const n=await a.getTxNewReport(i),r=n.filter((e=>!["All"].includes(e.age_group))).reduce(((e,t)=>(e[t.gender]=Object.keys(t).reduce(((e,n)=>Array.isArray(t[n])?{...e,[n]:[...e[n]||[],...t[n]]}:e),e[t.gender]||{}),e)),{Male:{},Female:{}});e.value=n;const o=n.reduce(((e,t)=>{if("FP"===t.gender){const n=Object.values(t).filter(Array.isArray).flat();return e.concat(n)}return e}),[]),s=["cd4_less_than_200","cd4_greater_than_equal_to_200","cd4_unknown_or_not_done"],c=u.uniq(["Female","Male"].reduce(((e,t)=>[...e,...s.map((e=>r[t][e])).flat(1)]),[]));D({id:"stats",text:`Tx new <b>${c.length}</b>`,icon:g,color:"primary",action:async()=>{(await l.create({component:A,backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:"All TxNew",subtitle:t.value,patientIdentifiers:c,onFinish:()=>l.getTop().then((e=>e&&l.dismiss()))}})).present()}}),function(e){const t={initiated_on_art_first_time:{param:e.total,check:(e,t)=>e!=t,error:(e,t)=>`\n                        MOH cohort initiated on ART first time <b>(${e})</b> is not matching Tx New <b>(${t})</b>\n                    `},initial_pregnant_females_all_ages:{param:e.pregnant,check:(e,t)=>e!=t,error:(e,t)=>`\n                        MOH cohort initial pregnant females all ages \n                        <b>(${e})</b> is not matching with TX new Pregnant women <b>${t}</b>\n                    `},males_initiated_on_art_first_time:{param:e.male,check:(e,t)=>e!=t,error:(e,t)=>`\n                        MoH Cohort males initiated on ART first time <b>(${e})</b>\n                        is not matching with TX new All male <b>(${t})</b>\n                    `},"quarterly_re_initiated_on_art + transfer_in":{param:e.transfer_in,check:(e,t)=>e!=t,error:(e,t)=>`\n                        Quarterly Transfer In + Reinitiated Clients <b>${e}</b>  does not match Transfer In <b>${t}</b> clients in TXNEW report\n                    `}};-1===w.validateIndicators(t,(e=>{e.length?y(e):D({id:"reportOk",text:"<b>Report is consistent</b>",icon:h,color:"success"})}))&&y(["Report not validated. Run the MoH cohort report for similar reporting period and then run this report"])}({total:c.length,pregnant:u.uniq(s.map((e=>r.Female[e].filter((e=>o.includes(e))))).flat(1)).length,male:u.uniq(s.map((e=>r.Male[e])).flat(1)).length,transfer_in:[...r.Male.transfer_in,...r.Female.transfer_in].length}),e.value=e.value.map(((e,t)=>({index:t+1,...e})))}catch(s){console.error(`${s}`),p("Unable to generate report!"),r.value=[{text:"Unable to generate report!",color:"danger",icon:m,action:function(){r.value=[{text:`Exception occured: <b>${s}</b>`,color:"danger",icon:_}]}}]}n.value=!1},k=()=>f({onFinish:(e,n,r,o)=>{t.value=r,a.startDate=e,a.endDate=n,o&&a.setOccupation(o),w.setStartDate(a.startDate),w.setEndDate(a.endDate),T()}});return i((()=>k())),{Img:s,headerBadge:r,reportData:e,isLoading:n,configure:k,generate:T,columns:x,period:t}}});e("default",w(t,[["render",function(e,t,n,a,r,o){const i=v("ion-loading"),s=v("v2Datatable"),l=v("ion-page");return x(),D(l,null,{default:y((()=>[T(i,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),T(s,{"icon-url":e.Img("login-logos/PEPFAR.png"),title:"Pepfar Tx New","report-prefix":"Pepfar",subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:100,headerBadge:e.headerBadge,onConfigure:e.configure,onRefresh:()=>e.generate(!0)},null,8,["icon-url","subtitle","columns","columnData","headerBadge","onConfigure","onRefresh"])])),_:1})}]]))}}}));