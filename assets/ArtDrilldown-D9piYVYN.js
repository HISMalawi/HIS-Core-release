import{d as b,I as h,K as l,J as m,ae as g,ah as v,b1 as _,ct as P,bR as D,b9 as w,_ as A,r as f,o as y,c as E,w as $,b as k}from"./index-BFVcutZq.js";import{v as F}from"./TableView-CvEqt4DX.js";const I=25,R=b({props:{title:{type:String,default:"Drilldown"},patientIdentifiers:{type:Object},onFinish:{type:Function}},components:{IonPage:h,v2Datatable:F},setup(e){const a=l(!0),o=l("-"),n=l([]),c=m(),u=[[{label:"ARV Number",ref:"identifier"},{label:"Gender",ref:"gender"},{label:"Birthdate",ref:"birthdate"},{label:"Action",ref:"patient_id",exportable:!1,tdClick:({data:t})=>c.push({path:"/patient/dashboard/".concat(t.person_id)}),value:()=>"View client"}]];function r(){a.value=!1,typeof e.onFinish=="function"&&e.onFinish()}return g(()=>e.patientIdentifiers,async t=>{if(n.value=[],o.value="Total: 0",!(t&&t.length))return;const p=v.chunk(t,1e3);for(const d of p){try{if(!a.value)break;const s=(await _.getPersons(d)).map(i=>({...i,birthdate:P(i.birthdate),gender:D(i.gender)}));n.value=[...n.value,...s]}catch(s){console.error(s)}o.value="Total: ".concat(n.value.length," of ").concat((t||[]).length),await w(100)}},{immediate:!0}),{columns:u,subtitle:o,reportData:n,canLoadData:a,ITEMS_PER_PAGE:I,runFinishAction:r}}});function C(e,a,o,n,c,u){const r=f("v2Datatable"),t=f("ion-page");return y(),E(t,null,{default:$(()=>[k(r,{title:e.title,subtitle:e.subtitle,columnData:e.reportData,columns:e.columns,"on-finish":e.runFinishAction,rowsPerPage:e.ITEMS_PER_PAGE},null,8,["title","subtitle","columnData","columns","on-finish","rowsPerPage"])]),_:1})}const T=A(R,[["render",C]]);export{T as A};