System.register(["./index-legacy-CNrLGT3P.js","./ReportDateSelectionPrompt-legacy-DN4Nhexe.js","./tx_report_service-legacy-LWOPxp6r.js","./TableView-legacy-DSuuxKFH.js","./ArtDrilldown-legacy-BX7rPIVx.js","./fuse-legacy-CQoBB3MK.js","./HisKeyboard-legacy-DlfcKdJX.js"],(function(e,t){"use strict";var a,n,r,o,l,s,g,i,c,u,d,p,_,m,f,h,b,D,v,w,y,F,P;return{setters:[e=>{a=e.d,n=e.I,r=e.cm,o=e.K,l=e.N,s=e.af,g=e.t,i=e.ah,c=e.cn,u=e.O,d=e.q,p=e.co,_=e.cp,m=e._,f=e.r,h=e.o,b=e.c,D=e.w,v=e.b},e=>{w=e.D},e=>{y=e.T},e=>{F=e.v},e=>{P=e.A},null,null],execute:function(){const t=a({components:{IonPage:n,IonLoading:r,v2Datatable:F},setup(){const e=o([]),t=o(""),a=o(!1),n=o([]),r=new y;function m(e,t){return{ref:t,label:e,toValue:e=>e.length,tdClick:async e=>{e.refData.length&&(await u.create({component:P,backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:`${e.data.age_group} ${e.data.gender} ${e.column.label}`,patientIdentifiers:e.refData,onFinish:()=>u.getTop().then((e=>e&&u.dismiss()))}})).present()}}}const f=[[{label:"#",ref:"index"},{label:"Age group",ref:"age_group"},{label:"Gender",ref:"gender"},m("CD4 <200","cd4_less_than_200"),m("CD4 >=200","cd4_greater_than_or_equal_to_200"),m("Unknown CD4","unknown_cd4_count"),m("Not Eligible for CD4","not_eligible_for_cd4"),m("Returned <3 mo","returned_less_than_3_months"),m("Returned 3-5 mo","returned_greater_than_3_months_and_less_than_6_months"),m("Returned 6+ mo","returned_greater_than_or_equal_to_6_months")]],h=async()=>{r.startDate&&r.endDate||g("Start date and end date required!"),a.value=!0;try{const a=await r.getTxRttReport(),o={F:"Female",M:"Male"},l=a.reduce(((e,t)=>("Unknown"!=t.age_group&&(e[t.gender].rows.push({...t,gender:o[t.gender]}),e[t.gender].aggregate=Object.keys(t).reduce(((e,a)=>Array.isArray(t[a])?{...e,[a]:[...e[a]||[],...t[a]]}:e),e[t.gender].aggregate)),e)),{M:{rows:[],aggregate:{}},F:{rows:[],aggregate:{}}});e.value=[...l.F.rows,...l.M.rows,{age_group:"All",gender:"Male",...l.M.aggregate}];const s=Object.values(l.F.aggregate).flat(1),g=await r.getMaternalStatus(i.uniq(s)),d=g.FBf.concat(g.FP);["FP","FNP","FBf"].forEach((t=>{e.value.push(Object.keys(l.F.aggregate).reduce(((e,a)=>({...e,[a]:l.F.aggregate[a].filter((e=>"FNP"===t?!d.includes(e):g[t].includes(e)))})),{age_group:"All",gender:t}))})),e.value=e.value.map(((e,t)=>({index:t+1,...e})));const p=Object.values(l.M.aggregate).flat(1),_=i.uniq([...s,...p]);n.value.push({id:"stats",text:`Total <b>${_.length}</b>`,icon:c,color:"primary",action:async()=>{(await u.create({component:P,backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:"Total Clients",subtitle:t.value,patientIdentifiers:_,onFinish:()=>u.getTop().then((e=>e&&u.dismiss()))}})).present()}})}catch(o){console.error(o),d("Unable to generate report!"),n.value=[{text:"Unable to generate report!",color:"danger",icon:p,action:function(){n.value=[{text:`Exception occured: <b>${o}</b>`,color:"danger",icon:_}]}}]}a.value=!1},b=()=>w({onFinish:(e,a,n,o)=>{t.value=n,r.startDate=e,r.endDate=a,o&&r.setOccupation(o),h()}});return l((()=>b())),{headerBadge:n,reportData:e,isLoading:a,Img:s,configure:b,generate:h,columns:f,period:t}}});e("default",m(t,[["render",function(e,t,a,n,r,o){const l=f("ion-loading"),s=f("v2Datatable"),g=f("ion-page");return h(),b(g,null,{default:D((()=>[v(l,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),v(s,{title:"TX RTT Report","report-prefix":"Pepfar","icon-url":e.Img("login-logos/PEPFAR.png"),subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:100,headerBadge:e.headerBadge,onConfigure:e.configure,onRefresh:()=>e.generate()},null,8,["icon-url","subtitle","columns","columnData","headerBadge","onConfigure","onRefresh"])])),_:1})}]]))}}}));