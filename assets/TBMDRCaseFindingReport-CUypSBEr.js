import{R as m}from"./TableReportTemplate-BzYrhG4C.js";import{d as h,a5 as f,r as o,ab as r,ac as s,as as l,Q as _,aq as i,a8 as v,ad as u,u as b,v as T,w as g,x as C}from"./index-DrPQ21-i.js";import{T as R}from"./tb_report_service-C8USayzQ.js";import{_ as D}from"./ReportMixin.vue_vue_type_script_lang-BkEBICIk.js";import{T as x}from"./TBDrilldown-Ce_Jm9Wl.js";import"./Export-CWTuI3QV.js";import"./HisStandardForm-rh8Trs2q.js";import"./ReportErrors-DfCcETVj.js";import"./BasicReportTemplate-C9nv9YKJ.js";import"./Pagination-CnUjUj_l.js";import"./TableView-DYQq8HZp.js";const w=h({mixins:[D],components:{IonPage:f,ReportTemplate:m},data:()=>({rows:[],columns:o([[]]),subtitle:o("-"),data:o([]),yearValue:o(""),quarterValue:o(1),indicatorsValue:o([]),footerText:o("Select All"),reportIndicators:[{label:"Patients aged fourteen and below",value:"patients_aged_fourteen_and_below"},{label:"Patients aged fourteen and above",value:"patients_aged_fourteen_and_above"},{label:"New DR cases",value:"new_dr_cases"},{label:"Previously treated with firstline drugs",value:"previously_treated_with_firstline_drugs"},{label:"Previously treated for TB Drug Resistance",value:"previously_treated_for_tb_drug_resistance"},{label:"Patients on Individualised regimen",value:"patients_on_individualised_regimen"},{label:"Patients on Short regimen",value:"patients_on_short_regimen"},{label:"Patients on Standardised regimen",value:"patients_on_standardised_regimen"},{label:"DR Male patients",value:"dr_male_patients"},{label:"DR Female patients",value:"dr_female_patients"},{label:"DR HIV Positive patients",value:"dr_hiv_positive_patients"},{label:"DR HIV Negative patients",value:"dr_hiv_negative_patients"},{label:"DR patients on ART",value:"dr_patients_on_art"},{label:"DR patients not on ART",value:"dr_patients_not_on_art"}],reportConfig:[],age_groups:["0-4","5-14","15-24","25-34","35-44","45-54","55-64","65+"]}),mounted(){this.init()},methods:{init(){this.reportConfig=[{id:"year",helpText:"Year",type:r.TT_NUMBER,validation:e=>s.required(e),computedValue:e=>e.value},{id:"quater",helpText:"Quater",type:r.TT_SELECT,requireNext:!1,options:()=>[{label:"First",value:1},{label:"Second",value:2},{label:"Third",value:3},{label:"Fourth",value:4}],validation:e=>s.required(e),computedValue:e=>e.value},{id:"indicators",helpText:"Indicators",type:r.TT_MULTIPLE_SELECT,options:()=>this.reportIndicators,validation:e=>s.required(e),computedValue:e=>e.map(t=>t.value),config:{footerBtns:[{name:this.footerText,slot:"end",onClickComponentEvents:{refreshOptions:()=>this.footerText==="Select All"?this.selectAll():this.deSelectAll()},onClick:()=>"None"}]}}],this.columns=this.buildColumns()},async generate(e){try{this.rows=[],this.indicatorsValue=e.indicators.map(a=>a.value),this.yearValue=e.year.value,this.quarterValue=e.quater.value;const t=new R;this.data=await t.getMDRTBCaseFindingReport(this.yearValue,this.quarterValue,this.indicatorsValue),this.populateData(),l.getTop().then(a=>a&&l.dismiss())}catch(t){console.error(t),_("Unable to generate report")}},populateData(){this.data.forEach(e=>{var a;const t=[i.td((a=this.reportIndicators.find(n=>n.value==this.indicatorsValue.find(d=>d===e.indicator)))==null?void 0:a.label),this.toDrillColumn(e.indicator,e.data.clinical.male),this.toDrillColumn(e.indicator,e.data.clinical.female),this.toDrillColumn(e.indicator,e.data.mdr_confirmed.male),this.toDrillColumn(e.indicator,e.data.mdr_confirmed.female),this.toDrillColumn(e.indicator,e.data.rif_confirmed.male),this.toDrillColumn(e.indicator,e.data.rif_confirmed.female),this.toDrillColumn(e.indicator,e.data.total.male),this.toDrillColumn(e.indicator,e.data.total.female)];this.rows.push(t)})},toDrillColumn(e,t){return i.tdLink(t.length,()=>{this.drilldown({indicator:e,ids:t})})},async drilldown(e){(await l.create({component:x,backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:e.indicator,patientIdentifiers:e.ids,subtitle:"Period: ".concat(this.period," Q").concat(this.quarterValue),onFinish:()=>l.getTop().then(t=>t&&l.dismiss())}})).present()},buildColumns(){const e=["Clinical","Confirmed","Confirmed RR","Totals"],t=[[i.thTxt("",{sortable:!1,exportable:!1}),i.thTxt("DR RR/TB Cases detected and enrolled",{sortable:!1,exportable:!1})]];return e.forEach(a=>{t[0].push(i.thTxt(a,{colspan:2,sortable:!1,exportable:!1}))}),t[1]=[],t[1].push(i.thTxt("",{sortable:!1,exportable:!1})),e.forEach(()=>{t[1].push(i.thTxt("Male",{sortable:!1,exportable:!1}),i.thTxt("Female",{sortable:!1,exportable:!1}))}),t},deSelectAll(){const e=this.reportIndicators;return this.footerText="Select All",e.map(t=>({...t,isChecked:!1}))},selectAll(){const e=this.reportIndicators;return this.footerText="Deselect All",e.map(t=>({...t,isChecked:!0}))}}});function V(e,t,a,n,d,y){const p=u("report-template"),c=u("ion-page");return b(),T(c,null,{default:g(()=>[C(p,{title:"TB MDR Case Finding Report",period:"Period",rows:e.rows,fields:e.reportConfig,columns:e.columns,reportPrefix:"NTP",config:{showIndex:!0},onReportConfiguration:e.generate},null,8,["rows","fields","columns","onReportConfiguration"])]),_:1})}const $=v(w,[["render",V]]);export{$ as default};