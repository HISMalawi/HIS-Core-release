import{d as g,a5 as w,r as d,aG as v,aJ as _,bo as D,cZ as p,cb as P,bx as y,a6 as A,ab as m,u as k,v as C,w as T,x as $,aQ as F,aq as o,bk as i,ah as I}from"./index-ATRrruTT.js";import{v as h}from"./TableView-C0_sXf7R.js";const V=25,E=g({props:{title:{type:String,default:"Drilldown"},patientIdentifiers:{type:Object},onFinish:{type:Function},viewRef:{type:String,default:"person_id"}},components:{IonPage:w,v2Datatable:h},setup(e){const a=d(!0),t=d("-"),n=d([]),r=[[S("identifier","ARV Number"),{label:"Gender",ref:"gender"},{label:"Birthdate",ref:"birthdate"},{label:"Art start date",ref:"art_start_date"},x(e.viewRef)]];function f(){a.value=!1,typeof e.onFinish=="function"&&e.onFinish()}return v(()=>e.patientIdentifiers,async s=>{if(n.value=[],t.value="Total: 0",!(s&&s.length))return;const c=_.chunk(s,1e3);for(const b of c){try{if(!a.value)break;const u=(await D.getPersons(b)).map(l=>({...l,birthdate:p(l.birthdate),art_start_date:p(l.art_start_date),gender:P(l.gender)}));n.value=[...n.value,...u]}catch(u){console.error(u)}t.value="Total: ".concat(n.value.length," of ").concat((s||[]).length),await y(100)}},{immediate:!0}),{columns:r,subtitle:t,reportData:n,canLoadData:a,ITEMS_PER_PAGE:V,runFinishAction:f}}});function G(e,a,t,n,r,f){const s=m("v2Datatable"),c=m("ion-page");return k(),C(c,null,{default:T(()=>[$(s,{title:e.title,subtitle:e.subtitle,columnData:e.reportData,columns:e.columns,"default-sort-order":"asc","default-sorted-column":"identifier","on-finish":e.runFinishAction,rowsPerPage:e.ITEMS_PER_PAGE},null,8,["title","subtitle","columnData","columns","on-finish","rowsPerPage"])]),_:1})}const R=A(E,[["render",G]]);function N(e){return e.map((a,t)=>({...a,index:t+1}))}function S(e="arv_number",a="ARV#"){return{ref:e,label:a,sortValue:t=>{var r;const n="".concat(t).match(new RegExp("\\w{2,5}-arv-(?<arvDigit>\\d*)","i"));return parseInt(((r=n==null?void 0:n.groups)==null?void 0:r.arvDigit)||"-1")}}}function x(e="patient_id",a="/patient/dashboard/"){return{ref:e,label:"Actions",exportable:!1,toValue:()=>"View",tdClick:({refData:t})=>F.push("".concat(a).concat(t))}}async function j(e){var a;((a=e.columnData)!=null?a:[]).length&&(await o.create({component:h,backdropDismiss:!1,cssClass:"large-modal",componentProps:{onFinish:()=>o.getTop().then(t=>t&&o.dismiss()),...e}})).present()}async function q(e){e.patientIdentifiers.length&&(await o.create({component:R,backdropDismiss:!1,cssClass:"large-modal",componentProps:{onFinish:()=>o.getTop().then(a=>a&&o.dismiss()),...e}})).present()}async function J(e,a=!0){a&&(await i.create({message:"Please wait...",backdropDismiss:!1})).present();try{const t=await e();return i.getTop().then(n=>n?i.dismiss():null),t}catch(t){console.error(t),I("Unable to generate report")}i.getTop().then(t=>t?i.dismiss():null)}export{R as A,S as a,j as b,x as c,N as d,q as s,J as w};