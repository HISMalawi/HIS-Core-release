System.register(["./index-legacy-BsbMrqEO.js","./tb_report_service-legacy-B_K5owpj.js","./TableView-legacy-gG0hdQFU.js","./v2utils-legacy-i8Yf9CmJ.js","./Export-legacy-BCoNjk-A.js"],(function(e,a){"use strict";var r,t,n,o,s,l,c,g,i,u,d,p,f,m,_,v,w,b,y,R,T;return{setters:[e=>{r=e.d,t=e.a5,n=e.cX,o=e.r,s=e.t,l=e.aI,c=e.as,g=e.af,i=e.Q,u=e.aK,d=e.aj,p=e.cK,f=e.a8,m=e.ad,_=e.u,v=e.v,w=e.w,b=e.x},e=>{y=e.T},e=>{R=e.v},e=>{T=e.A},null],execute:function(){const a=r({components:{IonPage:t,IonLoading:n,v2Datatable:R},setup(){const e=o([]),a=o(""),r=o(!1),t=new y,n=(e,r)=>({ref:r,label:e,toValue:e=>e.length,tdClick:async e=>{e.refData.length&&(await c.create({component:T,backdropDismiss:!1,cssClass:"large-modal",componentProps:{subtitle:a,patientIdentifiers:e.refData,title:`${e.data.ageGroup} ${e.data.gender} ${e.column.label}`,onFinish:()=>c.getTop().then((e=>e&&c.dismiss()))}})).present()}}),f=[[{label:"#",ref:"index"},{label:"Age group",ref:"ageGroup"},{label:"Gender",ref:"gender"},n("TX_CURR","tx_curr"),n("Symptom Screen (alone)","symptom_screen_alone"),n("CXR screen","cxr_screen"),n("mWRD screen","mwrd_screen"),n("New on ART/Screen Positive","sceen_pos_new"),n("New on ART/Screen Negative","sceen_neg_new"),n("Already on ART/Screen Positive","sceen_pos_prev"),n("Already on ART/Screen Negative","sceen_neg_prev"),n("TB RX_New on ART","started_tb_new"),n("TB RX_Prev on ART","started_tb_prev")]],m=async(a=!1)=>{if(!t.startDate||!t.endDate)return i("Start date and end date required!");r.value=!0,e.value=[];try{const r=await t.getTxTbReport(a,"moh"),n={F:"Female",M:"Male"},o=Object.keys(r).reduce(((e,a)=>{if("Unknown"===a)return e;const t=r[a];return Object.keys(t).forEach((r=>{e[r].rows.push({ageGroup:a,gender:n[r],...t[r]}),e[r].aggregate=Object.keys(t[r]).reduce(((e,a)=>Array.isArray(t[r][a])?{...e,[a]:[...e[a]||[],...t[r][a]]}:e),e[r].aggregate)})),e}),{M:{rows:[],aggregate:{}},F:{rows:[],aggregate:{}}});e.value=[...o.F.rows,...o.M.rows,{ageGroup:"All",gender:"Male",...o.M.aggregate}];const s=Object.values(o.F.aggregate).reduce(((e,a)=>e.concat(a)),[]),l=await t.getMaternalStatus(u.uniq(s)),c=l.FBf.concat(l.FP);["FP","FNP","FBf"].forEach((a=>{e.value.push(Object.keys(o.F.aggregate).reduce(((e,r)=>({...e,[r]:o.F.aggregate[r].filter((e=>"FNP"===a?!c.includes(e):l[a].includes(e)))})),{ageGroup:"All",gender:a}))})),e.value=e.value.map(((e,a)=>({index:a+1,...e})))}catch(n){console.error(n),d("Unable to generate report!")}r.value=!1},_=()=>p({onFinish:(e,r,n,o)=>{a.value=`Period: ${n}`,t.startDate=e,t.endDate=r,o&&t.setOccupation(o),m()}});return s((()=>_())),{Img:l,reportData:e,isLoading:r,onRefreshReport:async()=>m(await g("Do you want to rebuild report?")),configure:_,generate:m,columns:f,period:a}}});e("default",f(a,[["render",function(e,a,r,t,n,o){const s=m("ion-loading"),l=m("v2Datatable"),c=m("ion-page");return _(),v(c,null,{default:w((()=>[b(s,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),b(l,{title:"Tx TB Report","icon-url":e.Img("login-logos/Malawi-Coat_of_arms_of_arms.png"),subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:100,onConfigure:e.configure,onRefresh:e.onRefreshReport,"report-prefix":"MOH"},null,8,["icon-url","subtitle","columns","columnData","onConfigure","onRefresh"])])),_:1})}]]))}}}));