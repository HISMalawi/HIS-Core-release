System.register(["./index-legacy-BsbMrqEO.js","./TableView-legacy-gG0hdQFU.js"],(function(t,e){"use strict";var a,n,i,l,o,r,s,u,c,d,f,p,m,h,b,g;return{setters:[t=>{a=t.d,n=t.a5,i=t.r,l=t.ap,o=t.aH,r=t.aK,s=t.ah,u=t.cW,c=t.by,d=t.a8,f=t.ad,p=t.u,m=t.v,h=t.w,b=t.x},t=>{g=t.v}],execute:function(){const e=a({props:{title:{type:String,default:"Drilldown"},patientIdentifiers:{type:Object},onFinish:{type:Function}},components:{IonPage:n,v2Datatable:g},setup(t){const e=i("-"),a=i([]),n=l(),d=[[{label:"National ID",ref:"national_id"},{label:"First name",ref:"given_name"},{label:"Last name",ref:"family_name"},{label:"Birthdate",ref:"birthdate"},{label:"Action",ref:"patient_id",exportable:!1,tdClick:({data:t})=>n.push({path:`/patient/dashboard/${t.patient_id}`}),value:()=>"View client"}]];return o((()=>t.patientIdentifiers),(async t=>{if(a.value=[],e.value="Total: 0",!t||!t.length)return;const n=r.chunk(t,20);for(const l of n){for(const n of l){try{const t=new s(await s.findByID(n));a.value.push({patient_id:t.getID(),national_id:t.getNationalID(),given_name:t.getGivenName(),family_name:t.getFamilyName(),birthdate:u(t.getBirthdate())})}catch(i){console.error(i),a.value.push({})}e.value=`Total: ${a.value.length} of ${(t||[]).length}`}await c(500)}}),{immediate:!0}),{columns:d,subtitle:e,reportData:a,ITEMS_PER_PAGE:20}}});t("D",d(e,[["render",function(t,e,a,n,i,l){const o=f("v2Datatable"),r=f("ion-page");return p(),m(r,null,{default:h((()=>[b(o,{title:t.title,subtitle:t.subtitle,columnData:t.reportData,columns:t.columns,"on-finish":t.onFinish,rowsPerPage:t.ITEMS_PER_PAGE},null,8,["title","subtitle","columnData","columns","on-finish","rowsPerPage"])])),_:1})}]]))}}}));