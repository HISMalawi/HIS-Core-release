import{d as P,a5 as S,r,t as k,aG as B,bk as v,O as F,ay as I,aq as c,a9 as f,aa as T,aQ as R,a6 as $,v as q,w as A,ab as g,u as E,x as N}from"./index-DYyilVc9.js";import{v as x}from"./TableView-CfmDrYrY.js";import{T as H}from"./tb_report_service-BVgPHRII.js";import{T as M}from"./TBDrilldown-SREH4xK7.js";import"./Export-9HDPVIRb.js";import"./index-0_K7-O2F.js";const L=P({components:{IonPage:S,v2Datatable:x},setup(){const o=r("-"),d=r([]),i=r(""),u=r(1),p=r([]),n=r("Select All"),s=(e,t)=>({label:e,ref:t,toValue:a=>a.length,tdClick:a=>m(a)}),m=async e=>{(await c.create({component:M,backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:e.column.label,patientIdentifiers:e.refData,subtitle:"Period: ".concat(i.value," Q").concat(u.value),onFinish:()=>c.getTop().then(t=>t&&c.dismiss())}})).present()},l=r([{label:"Total with HIV Result Documented",value:"total_with_hiv_result_documented"},{label:"New and Relapse TB Cases Notified",value:"new_and_relapse_tb_cases_notified"},{label:"Total Tested HIV Positive",value:"total_tested_hiv_positive"},{label:"Started CPT",value:"started_cpt"},{label:"Started ART before TB Treatment",value:"started_art_before_tb_treatment"},{label:"Started ART while on Treatment",value:"started_art_while_on_treatment"}]),C=[[{label:"Indicator",ref:"indicator",value:e=>{var t;return"".concat((t=l.value.find(a=>a.value===e.indicator))==null?void 0:t.label)}},s("Male","male"),s("Female","female"),s("Total","total")]],_=async()=>{(await v.create({backdropDismiss:!1,message:"Generating report, Please wait..."})).present();try{const t=await new H().getTBHIVReportingForm(i.value,u.value,p.value);d.value=t.map(a=>({indicator:a.indicator,female:a.female,male:a.male,total:a.total}))}catch(e){console.error(e),F("Unable to generate report")}v.getTop().then(e=>e&&v.dismiss())},b=()=>I([{id:"year",helpText:"Year",type:f.TT_NUMBER,validation:e=>T.required(e),computedValue:e=>e.value},{id:"quater",helpText:"Quater",type:f.TT_SELECT,requireNext:!1,options:()=>[{label:"First",value:1},{label:"Second",value:2},{label:"Third",value:3},{label:"Fourth",value:4}],validation:e=>T.required(e),computedValue:e=>e.value},{id:"indicators",helpText:"Indicators",type:f.TT_MULTIPLE_SELECT,options:()=>l.value,validation:e=>T.required(e),computedValue:e=>e.map(t=>t.value),config:{footerBtns:[{name:n,slot:"end",onClickComponentEvents:{refreshOptions:()=>n.value==="Select All"?(l.value=y(),l):(l.value=V(),l)},onClick:()=>"None"}]}}],async(e,t)=>{const{year:a,quater:h,indicators:D}=t;i.value=a,u.value=h,p.value=D,o.value="Period: ".concat(a," Q").concat(h),c.dismiss(),_()},()=>{});k(()=>{b()}),B(l.value,e=>{e.every(t=>t.isChecked)?n.value="Deselect All":n.value="Select All"});const w=()=>R.push("/"),V=()=>l.value.map(e=>(e.isChecked=!1,e)),y=()=>l.value.map(e=>(e.isChecked=!0,e));return{data:d,columns:C,subtitle:o,configure:b,generate:_,onFinish:w}}});function Q(o,d,i,u,p,n){const s=g("v2Datatable"),m=g("ion-page");return E(),q(m,null,{default:A(()=>[N(s,{title:"TB/HIV Reporting Form",subtitle:o.subtitle,columnData:o.data,columns:o.columns,"on-finish":o.onFinish,"on-refresh":o.generate,"on-configure":o.configure,rowsPerPage:20,"report-prefix":"NTP"},null,8,["subtitle","columnData","columns","on-finish","on-refresh","on-configure"])]),_:1})}const z=$(L,[["render",Q]]);export{z as default};