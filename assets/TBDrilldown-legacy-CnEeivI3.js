System.register(["./index-legacy-DLdqxVnr.js","./TableView-legacy-CQt1jCTg.js"],(function(e,t){"use strict";var n,a,i,l,r,o,s,u,c,b,d,f,p,g,h,m,v;return{setters:[e=>{n=e.d,a=e.a5,i=e.r,l=e.an,r=e.aG,o=e.aJ,s=e.bo,u=e.cZ,c=e.cb,b=e.bx,d=e.a6,f=e.ab,p=e.u,g=e.v,h=e.w,m=e.x},e=>{v=e.v}],execute:function(){const t=n({props:{title:{type:String,default:"Drilldown"},patientIdentifiers:{type:Object},onFinish:{type:Function}},components:{IonPage:a,v2Datatable:v},setup(e){const t=i(!0),n=i("-"),a=i([]),d=l(),f=[[{label:"TB Number",ref:"identifier"},{label:"Name",ref:"name"},{label:"Gender",ref:"gender"},{label:"Age",ref:"age"},{label:"Action",ref:"patient_id",exportable:!1,tdClick:({data:e})=>d.push({path:`/patient/dashboard/${e.person_id}`}),value:()=>"View client"}]];return r((()=>e.patientIdentifiers),(async e=>{if(a.value=[],n.value="Total: 0",!e||!e.length)return;const i=o.chunk(e,1e3);for(const r of i){try{if(!t.value)break;const e=(await s.getTBPersons(r)).map((e=>({...e,birthdate:u(e.birthdate),gender:c(e.gender)})));a.value=[...a.value,...e]}catch(l){console.error(l)}n.value=`Total: ${a.value.length} of ${(e||[]).length}`,await b(100)}}),{immediate:!0}),{columns:f,subtitle:n,reportData:a,canLoadData:t,ITEMS_PER_PAGE:25,runFinishAction:function(){t.value=!1,"function"==typeof e.onFinish&&e.onFinish()}}}});e("T",d(t,[["render",function(e,t,n,a,i,l){const r=f("v2Datatable"),o=f("ion-page");return p(),g(o,null,{default:h((()=>[m(r,{title:e.title,subtitle:e.subtitle,columnData:e.reportData,columns:e.columns,"on-finish":e.runFinishAction,rowsPerPage:e.ITEMS_PER_PAGE},null,8,["title","subtitle","columnData","columns","on-finish","rowsPerPage"])])),_:1})}]]))}}}));