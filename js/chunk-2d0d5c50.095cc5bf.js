(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5c50"],{7067:function(e,a,t){"use strict";t.r(a);var r=t("7a23");function l(e,a,t,l,o,n){const d=Object(r["resolveComponent"])("ion-loading"),c=Object(r["resolveComponent"])("v2Datatable"),s=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createBlock"])(s,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(d,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),Object(r["createVNode"])(c,{title:"CECAP TX Report",subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:25,onConfigure:e.configure,csvQuarter:e.csvQuarter,onRefresh:()=>e.generate(),order:e.order,headers:e.csvheaders,"csv-spacing":e.spacing,"csv-sub-header":e.subHeaders},null,8,["subtitle","columns","columnData","onConfigure","csvQuarter","onRefresh","order","headers","csv-spacing","csv-sub-header"])]),_:1})}t("14d9");var o=t("d867"),n=t("349c"),d=t("ad9e"),c=t("b5e4"),s=t("2048"),u=t("0011"),f=t("c731"),g=t("d95e"),i=t("2ef0"),p=t("2706"),b=t("1c74"),v=t("9283"),h=t("5a0c"),y=t.n(h);const _=Object(r["ref"])([]),m=Object(r["ref"])(""),C=Object(r["ref"])(""),L=Object(r["ref"])(""),$=Object(r["ref"])(!1),T=Object(r["ref"])("");var R=Object(r["defineComponent"])({components:{IonPage:o["D"],IonLoading:o["z"],v2Datatable:n["a"]},setup(){Object(r["ref"])([]);const e=(e,r)=>{const l=[a(e.first_time_screened),a(e.rescreened_after_prev_visit),a(e.post_treatment_followup)];return l.push(t(r)),l},a=e=>e.map(e=>{const{age_group:a,...t}=e;return{...t,age_group:a}}),t=e=>{const a=[];for(const t in e){const r={};r[t]=e[t],a.push(r)}return a},l=async(e,a)=>{(await o["ab"].create({component:s["a"],backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:e,subtitle:L,patientIdentifiers:a,onFinish:()=>o["ab"].getTop().then(e=>e&&o["ab"].dismiss())}})).present()},n=["age_group","cryotherapy","thermocoagulation","leep","via_deffered","via_reffered","suspected_reffered"],h=["Age Disaggregate","Cryotherapy","Thermocoagulation","Leep","VIA + Defferred Tx","VIA + Referred","CxCa Suspect Referred"],R=[["","","","1st time screened","","",""],["","","","Rescreened after previous negative","","",""],["","","","Post-treatment follow-up","","",""],["","","","Month Summary","","",""]],k=5,O=[[{label:"Facility:",ref:""},{label:"Month/Year:",ref:"",span:{thColspan:3}},{label:"Report Officer:",ref:"",span:{thColspan:4}}],[{label:"Age Disaggregate:",ref:"data.age_group",value:e=>e.age_group},{label:"Cryotherapy",ref:"data.cryotherapy.length",secondaryLabel:"1st screened (cryotherapy)",value:e=>e.cryotherapy.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.cryotherapy)},{label:"Thermocoagulation",ref:"data.thermocoagulation.length",secondaryLabel:"1st screened (thermocoagulation)",value:e=>e.thermocoagulation.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.thermocoagulation)},{label:"LEEP",ref:"data.leep.length",secondaryLabel:"1st screened (LEEP)",value:e=>e.leep.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.leep)},{label:"VIA+Deferred Tx",ref:"data.via_deffered.length",secondaryLabel:"1st screened (VIA Deferred)",value:e=>e.via_deffered.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.via_deffered)},{label:"VIA+ Referred",ref:"data.via_reffered.length",secondaryLabel:"1st screened (VIA Referred)",value:e=>e.via_reffered.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.via_reffered)},{label:"CXCA Suspect Referred",ref:"data.suspected_reffered.length",secondaryLabel:"1st screened (CxCa Suspect Referred)",value:e=>e.suspected_reffered.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.suspected_reffered)}],[{label:"Age Disaggregate:",ref:"data.age_group",value:e=>e.age_group},{label:"Cryotherapy",ref:"data.cryotherapy.length",secondaryLabel:"Rescreened after previous negative (cryotherapy)",value:e=>e.cryotherapy.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.cryotherapy)},{label:"Thermocoagulation",ref:"data.thermocoagulation.length",secondaryLabel:"Rescreened after previous negative (thermocoagulation)",value:e=>e.thermocoagulation.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.thermocoagulation)},{label:"LEEP",ref:"data.leep.length",secondaryLabel:"Rescreened after previous negative (LEEP)",value:e=>e.leep.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.leep)},{label:"VIA+Deferred Tx",ref:"data.via_deffered.length",secondaryLabel:"Rescreened after previous negative (VIA Deferred)",value:e=>e.via_deffered.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.via_deffered)},{label:"VIA+ Referred",ref:"first_time_screened_via_reffered",secondaryLabel:"Rescreened after previous negative (VIA Referred)",value:e=>e.via_reffered.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.via_reffered)},{label:"CXCA Suspect Referred",ref:"data.suspected_reffered.length",secondaryLabel:"Rescreened after previous negative (CxCa Suspect Referred)",value:e=>e.suspected_reffered.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.suspected_reffered)}],[{label:"Age Disaggregate:",ref:"data.age_group",value:e=>e.age_group},{label:"Cryotherapy",ref:"data.cryotherapy.length",secondaryLabel:"Post-treatment follow-up (cryotherapy)",value:e=>e.cryotherapy.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.cryotherapy)},{label:"Thermocoagulation",ref:"data.thermocoagulation.length",secondaryLabel:"Post-treatment follow-up (thermocoagulation)",value:e=>e.thermocoagulation.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.thermocoagulation)},{label:"LEEP",ref:"data.leep.length",secondaryLabel:"Post-treatment follow-up (LEEP)",value:e=>e.leep.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.leep)},{label:"VIA+Deferred Tx",ref:"data.via_deffered.length",secondaryLabel:"Post-treatment follow-up (VIA Deferred)",value:e=>e.via_deffered.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.via_deffered)},{label:"VIA+ Referred",ref:"data.via_reffered.length",secondaryLabel:"Post-treatment follow-up (VIA Referred)",value:e=>e.via_reffered.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.via_reffered)},{label:"CXCA Suspect Referred",ref:"data.suspected_reffered.length",secondaryLabel:"Post-treatment follow-up (CxCa Suspect Referred)",value:e=>e.suspected_reffered.length,tdClick:({column:e,data:a})=>l(`${a.age_group} ${e.secondaryLabel}`,a.suspected_reffered)}],[{label:"1st time Screened",ref:"",exportable:!1,span:{thColspan:7}}],[{label:"Rescreened after previous negative",ref:"",exportable:!1,span:{thColspan:7}}],[{label:"Post-treatment follow-up",ref:"",span:{thColspan:7}}],[{label:"Month Summary",ref:"",span:{thColspan:7}}],[{label:"Total Cryotherapy",ref:"data.total_cyrotherapy.length",secondaryLabel:"Total Cryotherapy",value:e=>e.total_cyrotherapy.length,tdClick:({column:e,data:a})=>l(""+e.secondaryLabel,a.total_cyrotherapy)}],[{label:"Total Thermocoagulation",ref:"data.total_thermocoagulation.length",secondaryLabel:"Total Thermocoagulation",value:e=>e.total_thermocoagulation.length,tdClick:({column:e,data:a})=>l(""+e.secondaryLabel,a.total_thermocoagulation)}],[{label:"Total LEEP",ref:"data.total_leep.length",secondaryLabel:"Total LEEP",value:e=>e.total_leep.length,tdClick:({column:e,data:a})=>l(""+e.secondaryLabel,a.total_leep)}],[{label:"Total # Same Day Tx",ref:"data.total_number_same_day_tx.length",secondaryLabel:"Total # Same Day Tx",value:e=>e.total_number_same_day_tx.length,tdClick:({column:e,data:a})=>l(""+e.secondaryLabel,a.total_number_same_day_tx)}],[{label:"Total VIA+ Deferred Tx",ref:"data.total_via_deffered.length",secondaryLabel:"Total VIA+ Deferred Tx",value:e=>e.total_via_deffered.length,tdClick:({column:e,data:a})=>l(""+e.secondaryLabel,a.total_via_deffered)}],[{label:"Total VIA+ Referred",ref:"data.total_via_reffered.length",secondaryLabel:"Total VIA+ Referred",value:e=>e.total_via_reffered.length,tdClick:({column:e,data:a})=>l(""+e.secondaryLabel,a.total_via_reffered)}],[{label:"Total CXCA Suspect Referred",ref:"data.suspects_reffered.length",secondaryLabel:"Total CXCA Suspect Referred",value:e=>e.suspects_reffered.length,tdClick:({column:e,data:a})=>l(""+e.secondaryLabel,a.suspects_reffered)}],[{label:"Total Referred",ref:"data.total_reffered.length",secondaryLabel:"Total Referred",value:e=>e.total_reffered.length,tdClick:({column:e,data:a})=>l(""+e.secondaryLabel,a.total_reffered)}]],A=async()=>{if(!m.value||!C.value)return Object(c["e"])("Start date and end date required!");$.value=!0,_.value=[];const a=new d["a"];a.startDate=m.value,a.endDate=C.value;try{const t=await a.getClinicReport("MONTHLY CECAP TX");_.value=e(t.data,t.totals)}catch(t){Object(c["c"])("Unable to generate report!"),console.error(t)}$.value=!1},D=()=>Object(f["a"])([{id:"year",helpText:"Select Year",type:g["b"].TT_NUMBER,computedValue:e=>e.value,validation:e=>{const a=Object(i["isPlainObject"])(e)?e.value:-1;return p["a"].validateSeries([()=>p["a"].required(e),()=>isNaN(parseInt(""+a))?["Invalid year"]:null,()=>p["a"].rangeOf(e,2e3,v["b"].getYear(b["e"].getSessionDate()))])}},{id:"month",helpText:"Select Month",type:g["b"].TT_SELECT,validation:e=>p["a"].required(e),computedValue:e=>e.value,options:()=>[{label:"January",value:"01"},{label:"February",value:"02"},{label:"March",value:"03"},{label:"April",value:"04"},{label:"May",value:"05"},{label:"June",value:"06"},{label:"July",value:"07"},{label:"August",value:"08"},{label:"September",value:"09"},{label:"October",value:"10"},{label:"November",value:"11"},{label:"December",value:"12"}]}],{onFinish:e=>{m.value=`${e.year.value}-${e.month.value}-01`,C.value=y()(new Date(m.value).toISOString()).endOf("month").format("YYYY-MM-DD"),L.value=`Period (${Object(u["g"])(m.value)} to ${Object(u["g"])(C.value)})`,o["ab"].dismiss(),T.value=`${Object(u["g"])(m.value)} to ${Object(u["g"])(C.value)}`,A()}});return Object(r["onMounted"])(()=>!_.value.length&&D()),{columns:O,isLoading:$,reportData:_,period:L,csvQuarter:T,generate:A,configure:D,order:n,csvheaders:h,spacing:k,subHeaders:R}}}),k=t("6b0d"),O=t.n(k);const A=O()(R,[["render",l]]);a["default"]=A}}]);
//# sourceMappingURL=chunk-2d0d5c50.095cc5bf.js.map