import{d as y,a5 as D,r,t as k,aG as A,bk as d,O as V,ay as S,aq as u,a9 as _,aa as b,aQ as $,a6 as q,v as F,w as I,ab as g,u as E,x}from"./index-ATRrruTT.js";import{v as M}from"./TableView-C0_sXf7R.js";import{T as R}from"./tb_report_service-B86l3q_M.js";import{T as L}from"./TBDrilldown-C5BsBHhQ.js";import"./Export-BikdWX3S.js";import"./index-_1Jf0d3I.js";const Q=y({components:{IonPage:D,v2Datatable:M},setup(){const s=r("-"),c=r([]),n=r(""),i=r(1),p=r([]),l=r("Select All"),m=(e,t)=>({label:e,ref:t,toValue:a=>a.length,tdClick:a=>v(a)}),v=async e=>{(console.log(e),await u.create({component:L,backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:e.column.label,patientIdentifiers:e.refData,subtitle:"Period: ".concat(n.value," Q").concat(i.value),onFinish:()=>u.getTop().then(t=>t&&u.dismiss())}})).present()},o=r([{label:"Number of Presumptive TB Cases",value:"number_of_presumptive_tb_cases"},{label:"Number of Female Presumptive TB Cases",value:"number_of_female_presumptive_tb_cases"},{label:"Number of Male Presumptive TB Cases",value:"number_of_male_presumptive_tb_cases"},{label:"Number of Presumptive TB Cases on ART",value:"number_of_presumptive_tb_cases_on_art"},{label:"Number of Presumptive TB Cases not on ART",value:"number_of_presumptive_tb_cases_not_on_art"},{label:"Number of HIV Negative Presumptives",value:"number_of_hiv_negative_presumptives"},{label:"Number of Presumptive TB Cases New Positive",value:"number_of_presumptive_tb_cases_new_positive_hiv"},{label:"Number of Adult OPD Attendees",value:"number_of_adult_opd_attendees"},{label:"New Smear Positive",value:"new_smear_positive"},{label:"New MTB Detected Xpert",value:"new_mtb_detected_xpert"},{label:"New TB Cases Among HIV Positive Presumptives",value:"new_tb_cases_among_hiv_positive_presumptives"}]),P=[[{label:"Indicator",ref:"indicator",value:e=>{var t;return"".concat((t=o.value.find(a=>a.value===e.indicator))==null?void 0:t.label)}},m("Total","total")]],f=async()=>{(await d.create({backdropDismiss:!1,message:"Generating report, Please wait..."})).present();try{const t=await new R().getTBPresumptives(n.value,i.value,p.value);c.value=t.map(a=>({indicator:a.indicator,total:a.total}))}catch(e){console.error(e),V("Unable to generate report")}d.getTop().then(e=>e&&d.dismiss())},T=()=>S([{id:"year",helpText:"Year",type:_.TT_NUMBER,validation:e=>b.required(e),computedValue:e=>e.value},{id:"quater",helpText:"Quater",type:_.TT_SELECT,requireNext:!1,options:()=>[{label:"First",value:1},{label:"Second",value:2},{label:"Third",value:3},{label:"Fourth",value:4}],validation:e=>b.required(e),computedValue:e=>e.value},{id:"indicators",helpText:"Indicators",type:_.TT_MULTIPLE_SELECT,options:()=>o.value,validation:e=>b.required(e),computedValue:e=>e.map(t=>t.value),config:{footerBtns:[{name:l,slot:"end",onClickComponentEvents:{refreshOptions:()=>l.value==="Select All"?(o.value=N(),o):(o.value=w(),o)},onClick:()=>"None"}]}}],async(e,t)=>{const{year:a,quater:h,indicators:B}=t;n.value=a,i.value=h,p.value=B,s.value="Period: ".concat(a," Q").concat(h),u.dismiss(),f()},()=>{});k(()=>{T()}),A(o,e=>{e.every(t=>t.isChecked)?l.value="Deselect All":l.value="Select All"});const C=()=>$.push("/"),w=()=>o.value.map(t=>({...t,isChecked:!1})),N=()=>o.value.map(t=>({...t,isChecked:!0}));return{data:c,columns:P,subtitle:s,configure:T,generate:f,onFinish:C}}});function O(s,c,n,i,p,l){const m=g("v2Datatable"),v=g("ion-page");return E(),F(v,null,{default:I(()=>[x(m,{title:"TB Presumptives Report",subtitle:s.subtitle,columnData:s.data,columns:s.columns,"on-finish":s.onFinish,"on-refresh":s.generate,"on-configure":s.configure,rowsPerPage:20,"report-prefix":"NTP"},null,8,["subtitle","columnData","columns","on-finish","on-refresh","on-configure"])]),_:1})}const j=q(Q,[["render",O]]);export{j as default};