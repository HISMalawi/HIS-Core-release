import{d as z,r as v,a5 as H,cl as K,t as X,ay as ee,bu as I,cZ as $,aq as S,a9 as g,aa as y,a6 as te,v as ae,w as re,ab as M,u as ne,x as N}from"./index-DYyilVc9.js";import{v as le}from"./TableView-BFqvvACS.js";import{A as oe}from"./aetc_report_service-CsgUop0s.js";import{D as se}from"./DrillPatientIds-C4tYXxYk.js";import"./Export-9HDPVIRb.js";import"./index-0_K7-O2F.js";import"./TableView-CfmDrYrY.js";const w=v([]),o=v(""),u=v(""),Y=v(""),ue=v(!1),B=v(""),J=v(""),U=v(""),j=v(""),ie=z({components:{IonPage:H,IonLoading:K,v2Datatable:le},setup(){const c=async()=>{const e=new oe;e.startDate=o.value,e.endDate=u.value,e.startAge=J.value,e.endAge=U.value,e.reportType=j.value;try{const a=await e.getClinicReport("OPD GENERAL");w.value=a}catch(a){console.log(a)}},k=async(e,a)=>{a.length<=0||(await S.create({component:se,backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:e,subtitle:Y,patientIdentifiers:a,onFinish:()=>S.getTop().then(i=>i&&S.dismiss())}})).present()},f=()=>{let e=[];const a=new Date().getFullYear();for(let i=2008;i<=a;i++)e.push(i+"");return e.reverse()},E=()=>{let e=[];const a=new Date().getFullYear(),i=new Date().getMonth()+1,m=i<=3?1:i<=6?2:i<=9?3:4;for(let d=2008;d<=a;d++)for(let D=1;D<=4;D++)(d<a||d===a&&D<=m)&&e.push("Q".concat(D," ").concat(d));return e.reverse()},b=e=>e.map(a=>({label:a,value:a})),V=["Data Element","Value"],T=[[{label:"No",ref:"",value:(e,a)=>++a},{label:"Data Element",ref:"",value:e=>e.diagnosis},{label:"Value",ref:"",value:e=>e.patients.length,tdClick:({column:e,data:a})=>k("".concat(e.secondaryLabel," ").concat(a.diagnosis," "),a.patients)}]],h=()=>ee([{id:"start_age",helpText:"Start Age",type:g.TT_NUMBER,computedValue:e=>e.value,validation:e=>y.required(e)},{id:"end_age",helpText:"End Age",type:g.TT_NUMBER,computedValue:e=>e.value,validation:e=>y.required(e)},{id:"report_type",helpText:"Report type",type:g.TT_SELECT,computedValue:e=>e.value,options:()=>[{label:"General Outpatient",value:"General Outpatient"},{label:"Pediatrics",value:"Pediatrics"},{label:"General Diagnoses",value:"General Diagnoses"},{label:"Pediatrics Diagnosis",value:"Pediatrics Diagnosis"}]},{id:"report_range",helpText:"Select Range",type:g.TT_SELECT,computedValue:e=>e.value,options:()=>[{label:"Week",value:"Week"},{label:"Month",value:"Month"},{label:"Quarter",value:"Quarter"},{label:"Year",value:"Year"},{label:"Select Range",value:"Select-Range"}]},{id:"report_range_year",helpText:"Select Year",type:g.TT_SELECT,condition:e=>e.report_range.value==="Year"||e.report_range.value==="Month"||e.report_range.value==="Week",computedValue:e=>e.label,options:()=>{const e=f();return[...b(e)]}},{id:"report_range_quaters",helpText:"Select Quater",type:g.TT_SELECT,condition:e=>e.report_range.value==="Quarter",computedValue:e=>e.value,options:()=>{const e=E();return[...b(e)]}},{id:"start_date",helpText:"Start Date",type:g.TT_FULL_DATE,validation:e=>y.required(e),computedValue:e=>e.value,condition:e=>e.report_range.value==="Select-Range"},{id:"report_range_month",helpText:"Select Month",type:g.TT_SELECT,validation:e=>y.required(e),computedValue:e=>e.value,condition:e=>e.report_range.value==="Month",options:()=>[{label:"January",value:"01"},{label:"February",value:"02"},{label:"March",value:"03"},{label:"April",value:"04"},{label:"May",value:"05"},{label:"June",value:"06"},{label:"July",value:"07"},{label:"August",value:"08"},{label:"September",value:"09"},{label:"October",value:"10"},{label:"November",value:"11"},{label:"December",value:"12"}]},{id:"report_range_week",helpText:"Select Week",type:g.TT_SELECT,condition:e=>{const a=new Date().getFullYear()+"";return e.report_range.value==="Week"&&e.report_range_year.value===a},options:()=>[{label:"This Week",value:"This Week"},{label:"Last Week",value:"Last Week"},{label:"This Month",value:"This Month"},{label:"Last Month",value:"Last Month"},{label:"All Dates",value:"All Dates"}]}],(e,a)=>{var i,m,d,D,L,W,A,C,O,q,P,R,F,Q,G,x;if(((i=e.report_range)==null?void 0:i.value)==="Month"&&(o.value="".concat(a.report_range_year,"-").concat(a.report_range_month,"-01"),u.value=I(new Date(o.value).toISOString()).endOf("month").format("YYYY-MM-DD")),((m=e.report_range)==null?void 0:m.value)==="Select-Range"&&(o.value="".concat(e.year.value,"-").concat(e.month.value,"-01"),u.value=I(new Date(o.value).toISOString()).endOf("month").format("YYYY-MM-DD")),((d=e.report_range)==null?void 0:d.value)==="Year"&&(o.value="".concat(a.report_range_year,"-01-01"),u.value="".concat(a.report_range_year,"-12-31")),((D=e.report_range)==null?void 0:D.value)==="Week"&&((L=e.report_range_week)==null?void 0:L.value)==="This Week"){const t=new Date,n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),l=new Date(t);l.setDate(t.getDate()-t.getDay());const s=new Date(t);s.setDate(t.getDate()+(6-t.getDay()));const p="".concat(n,"-").concat(r,"-").concat(String(l.getDate()).padStart(2,"0")),_="".concat(n,"-").concat(r,"-").concat(String(s.getDate()).padStart(2,"0"));o.value=p,u.value=_}if(((W=e.report_range)==null?void 0:W.value)==="Week"&&((A=e.report_range_week)==null?void 0:A.value)==="Last Week"){const t=new Date;t.setDate(t.getDate()-7);const n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),l=new Date(t);l.setDate(t.getDate()-t.getDay());const s=new Date(t);s.setDate(t.getDate()+(6-t.getDay()));const p="".concat(n,"-").concat(r,"-").concat(String(l.getDate()).padStart(2,"0")),_="".concat(n,"-").concat(r,"-").concat(String(s.getDate()).padStart(2,"0"));o.value=p,u.value=_}if(((C=e.report_range)==null?void 0:C.value)==="Week"&&((O=e.report_range_week)==null?void 0:O.value)==="This Month"){const t=new Date,n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),l="".concat(n,"-").concat(r,"-01"),s=new Date(n,t.getMonth()+1,0),p="".concat(n,"-").concat(r,"-").concat(String(s.getDate()).padStart(2,"0"));o.value=l,u.value=p}if(((q=e.report_range)==null?void 0:q.value)==="Week"&&((P=e.report_range_week)==null?void 0:P.value)==="Last Month"){const t=new Date,n=t.getFullYear(),r=t.getMonth()+1,l=r===1?12:r-1,s=l===12?n-1:n,p=new Date(n,r-1,0),_="".concat(s,"-").concat(String(l).padStart(2,"0"),"-01"),Z="".concat(s,"-").concat(String(l).padStart(2,"0"),"-").concat(String(p.getDate()).padStart(2,"0"));o.value=_,u.value=Z}if(((R=e.report_range)==null?void 0:R.value)==="Week"&&((F=e.report_range_week)==null?void 0:F.value)==="All Dates"){const t=new Date,n=t.getFullYear(),r="".concat(n,"-01-01"),l=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),p="".concat(n,"-").concat(l,"-").concat(s);o.value=r,u.value=p}if(((Q=e.report_range)==null?void 0:Q.value)==="Quarter"){const t=a.report_range_quaters.split(" "),n=parseInt(t[0].slice(1),10),r=parseInt(t[1],10),l={1:"".concat(r,"-01-01"),2:"".concat(r,"-04-01"),3:"".concat(r,"-07-01"),4:"".concat(r,"-10-01")},s={1:"".concat(r,"-03-31"),2:"".concat(r,"-06-30"),3:"".concat(r,"-09-30"),4:"".concat(r,"-12-31")};o.value=l[n],u.value=s[n]}((G=e.report_range)==null?void 0:G.value)==="Week"&&((x=e.report_range_year)==null?void 0:x.value)<new Date().getFullYear()&&(o.value="".concat(e.report_range_year.value,"-01-01"),u.value="".concat(e.report_range_year.value,"-12-31")),J.value=a.start_age,U.value=a.end_age,j.value=a.report_type,Y.value="Period (".concat($(o.value)," to ").concat($(u.value),")"),S.dismiss(),B.value="".concat($(o.value)," to ").concat($(u.value)),c()});return X(()=>!w.value.length&&h()),{columns:T,isLoading:ue,reportData:w,period:Y,csvQuarter:B,csvheaders:V,generate:c,configure:h}}});function ce(c,k,f,E,b,V){const T=M("ion-loading"),h=M("v2Datatable"),e=M("ion-page");return ne(),ae(e,null,{default:re(()=>[N(T,{"is-open":c.isLoading,message:"Please wait..."},null,8,["is-open"]),N(h,{title:"OPD General Report",subtitle:c.period,columns:c.columns,columnData:c.reportData,rowsPerPage:25,onConfigure:c.configure,csvQuarter:c.csvQuarter,headers:c.csvheaders,onRefresh:()=>c.generate()},null,8,["subtitle","columns","columnData","onConfigure","csvQuarter","headers","onRefresh"])]),_:1})}const me=te(ie,[["render",ce]]);export{me as default};