import{d as m,a5 as b,r as l,ap as h,aH as g,aK as v,bp as _,cW as P,ca as D,by as w,a8 as y,ad as p,u as T,v as E,w as $,x as k}from"./index-DrPQ21-i.js";import{v as A}from"./TableView-DYQq8HZp.js";const F=25,B=m({props:{title:{type:String,default:"Drilldown"},patientIdentifiers:{type:Object},onFinish:{type:Function}},components:{IonPage:b,v2Datatable:A},setup(e){const n=l(!0),o=l("-"),a=l([]),c=h(),u=[[{label:"TB Number",ref:"identifier"},{label:"Name",ref:"name"},{label:"Gender",ref:"gender"},{label:"Age",ref:"age"},{label:"Action",ref:"patient_id",exportable:!1,tdClick:({data:t})=>c.push({path:"/patient/dashboard/".concat(t.person_id)}),value:()=>"View client"}]];function s(){n.value=!1,typeof e.onFinish=="function"&&e.onFinish()}return g(()=>e.patientIdentifiers,async t=>{if(a.value=[],o.value="Total: 0",!(t&&t.length))return;const f=v.chunk(t,1e3);for(const d of f){try{if(!n.value)break;const r=(await _.getTBPersons(d)).map(i=>({...i,birthdate:P(i.birthdate),gender:D(i.gender)}));a.value=[...a.value,...r]}catch(r){console.error(r)}o.value="Total: ".concat(a.value.length," of ").concat((t||[]).length),await w(100)}},{immediate:!0}),{columns:u,subtitle:o,reportData:a,canLoadData:n,ITEMS_PER_PAGE:F,runFinishAction:s}}});function I(e,n,o,a,c,u){const s=p("v2Datatable"),t=p("ion-page");return T(),E(t,null,{default:$(()=>[k(s,{title:e.title,subtitle:e.subtitle,columnData:e.reportData,columns:e.columns,"on-finish":e.runFinishAction,rowsPerPage:e.ITEMS_PER_PAGE},null,8,["title","subtitle","columnData","columns","on-finish","rowsPerPage"])]),_:1})}const S=y(B,[["render",I]]);export{S as T};