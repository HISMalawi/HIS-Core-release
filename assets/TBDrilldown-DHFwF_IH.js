import{d as m,a5 as b,r as l,ap as h,aI as g,aL as v,bq as _,c$ as P,cd as D,bz as w,a8 as T,ad as f,u as $,v as y,w as E,x as k}from"./index-CG6KEPsv.js";import{v as A}from"./TableView-QLAT3IiF.js";const F=25,I=m({props:{title:{type:String,default:"Drilldown"},patientIdentifiers:{type:Object},onFinish:{type:Function}},components:{IonPage:b,v2Datatable:A},setup(e){const a=l(!0),o=l("-"),n=l([]),c=h(),u=[[{label:"TB Number",ref:"identifier"},{label:"Name",ref:"name"},{label:"Gender",ref:"gender"},{label:"Age",ref:"age"},{label:"Action",ref:"patient_id",exportable:!1,tdClick:({data:t})=>c.push({path:"/patient/dashboard/".concat(t.person_id)}),value:()=>"View client"}]];function s(){a.value=!1,typeof e.onFinish=="function"&&e.onFinish()}return g(()=>e.patientIdentifiers,async t=>{if(n.value=[],o.value="Total: 0",!(t&&t.length))return;const p=v.chunk(t,1e3);for(const d of p){try{if(!a.value)break;const r=(await _.getTBPersons(d)).map(i=>({...i,birthdate:P(i.birthdate),gender:D(i.gender)}));n.value=[...n.value,...r]}catch(r){console.error(r)}o.value="Total: ".concat(n.value.length," of ").concat((t||[]).length),await w(100)}},{immediate:!0}),{columns:u,subtitle:o,reportData:n,canLoadData:a,ITEMS_PER_PAGE:F,runFinishAction:s}}});function B(e,a,o,n,c,u){const s=f("v2Datatable"),t=f("ion-page");return $(),y(t,null,{default:E(()=>[k(s,{title:e.title,subtitle:e.subtitle,columnData:e.reportData,columns:e.columns,"on-finish":e.runFinishAction,rowsPerPage:e.ITEMS_PER_PAGE},null,8,["title","subtitle","columnData","columns","on-finish","rowsPerPage"])]),_:1})}const S=T(I,[["render",B]]);export{S as T};