System.register(["./index-legacy-BsbMrqEO.js","./tb_report_service-legacy-B_K5owpj.js","./TableView-legacy-gG0hdQFU.js","./v2utils-legacy-i8Yf9CmJ.js","./Export-legacy-BCoNjk-A.js"],(function(e,a){"use strict";var r,t,n,o,s,l,c,i,g,u,d,p,f,v,m,b,w,_,R,y,F;return{setters:[e=>{r=e.d,t=e.a5,n=e.cX,o=e.r,s=e.t,l=e.aI,c=e.as,i=e.af,g=e.Q,u=e.aK,d=e.aj,p=e.cK,f=e.a8,v=e.ad,m=e.u,b=e.v,w=e.w,_=e.x},e=>{R=e.T},e=>{y=e.v},e=>{F=e.A},null],execute:function(){const a=r({components:{IonPage:t,IonLoading:n,v2Datatable:y},setup(){const e=o([]),a=o(""),r=o(!1),t=new R,n=o(void 0),f=o(void 0),v=(e,r)=>({ref:r,label:e,toValue:e=>e.length,tdClick:async e=>{e.refData.length&&(await c.create({component:F,backdropDismiss:!1,cssClass:"large-modal",componentProps:{subtitle:a,patientIdentifiers:e.refData,title:`${e.data.ageGroup} ${e.data.gender} ${e.column.label}`,onFinish:()=>c.getTop().then((e=>e&&c.dismiss()))}})).present()}}),m=[[{label:"#",ref:"index"},{label:"Age group",ref:"ageGroup"},{label:"Gender",ref:"gender"},v("TX_CURR","tx_curr"),v("Symptom Screen (alone)","symptom_screen_alone"),v("CXR screen","cxr_screen"),v("mWRD screen","mwrd_screen"),v("New on ART/Screen Positive","sceen_pos_new"),v("New on ART/Screen Negative","sceen_neg_new"),v("Already on ART/Screen Positive","sceen_pos_prev"),v("Already on ART/Screen Negative","sceen_neg_prev"),v("TB RX_New on ART","started_tb_new"),v("TB RX_Prev on ART","started_tb_prev")]],b=async(a=!1)=>{if(!n.value||!f.value)return g("Start date and end date required!");r.value=!0,e.value=[];try{const r=await t.getTxTbReport(a,"pepfar"),n={F:"Female",M:"Male"},o=Object.keys(r).reduce(((e,a)=>{if("Unknown"===a)return e;const t=r[a];return Object.keys(t).forEach((r=>{e[r].rows.push({ageGroup:a,gender:n[r],...t[r]}),e[r].aggregate=Object.keys(t[r]).reduce(((e,a)=>Array.isArray(t[r][a])?{...e,[a]:[...e[a]||[],...t[r][a]]}:e),e[r].aggregate)})),e}),{M:{rows:[],aggregate:{}},F:{rows:[],aggregate:{}}});e.value=[...o.F.rows,...o.M.rows,{ageGroup:"All",gender:"Male",...o.M.aggregate}];const s=Object.values(o.F.aggregate).reduce(((e,a)=>e.concat(a)),[]),l=await t.getMaternalStatus(u.uniq(s)),c=l.FBf.concat(l.FP);["FP","FNP","FBf"].forEach((a=>{e.value.push(Object.keys(o.F.aggregate).reduce(((e,r)=>({...e,[r]:o.F.aggregate[r].filter((e=>"FNP"===a?!c.includes(e):l[a].includes(e)))})),{ageGroup:"All",gender:a}))})),e.value=e.value.map(((e,a)=>({index:a+1,...e})))}catch(o){console.error(o),d("Unable to generate report!")}r.value=!1},w=()=>p({onFinish:(e,r,n,o)=>{a.value=`Period: ${n}`,t.startDate=e,t.endDate=r,o&&t.setOccupation(o),b()}});return s((()=>w())),{Img:l,reportData:e,isLoading:r,onRefreshReport:async()=>b(await i("Do you want to rebuild report?")),configure:w,generate:b,columns:m,period:a}}});e("default",f(a,[["render",function(e,a,r,t,n,o){const s=v("ion-loading"),l=v("v2Datatable"),c=v("ion-page");return m(),b(c,null,{default:w((()=>[_(s,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),_(l,{title:"Tx TB Report","icon-url":e.Img("login-logos/PEPFAR.png"),subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:100,onConfigure:e.configure,onRefresh:e.onRefreshReport,"report-prefix":"Pepfar"},null,8,["icon-url","subtitle","columns","columnData","onConfigure","onRefresh"])])),_:1})}]]))}}}));