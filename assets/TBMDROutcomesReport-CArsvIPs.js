import{R as m}from"./TableReportTemplate-B9gJG81F.js";import{d as f,a5 as T,r as l,ab as u,ac as d,as as i,M as b,aq as o,a8 as C,v as g,w as v,ad as p,u as x,x as _}from"./index-CG6KEPsv.js";import{T as w}from"./tb_report_service-CaMDoPOh.js";import{_ as V}from"./ReportMixin.vue_vue_type_script_lang-Da78yexD.js";import{T as y}from"./TBDrilldown-DHFwF_IH.js";import"./Export-ngX2Az_3.js";import"./index-bO2fy8Iw.js";import"./HisStandardForm-CWpBcokh.js";import"./ReportErrors-CnbOzUh9.js";import"./BasicReportTemplate-DH-zB7dh.js";import"./Pagination-BNbmZwZV.js";import"./TableView-QLAT3IiF.js";const A=f({mixins:[V],components:{IonPage:T,ReportTemplate:m},data:()=>({rows:[],columns:l([[]]),subtitle:l("-"),data:l([]),yearValue:l(""),quarterValue:l(1),footerText:l("Select All"),indicatorsValue:l([]),reportIndicators:[{value:"total_cohort_cases_started",label:"Total cohort cases started"},{value:"cured",label:"Cured"},{value:"completed",label:"Completed"},{value:"died",label:"Died"},{value:"failed",label:"Failed"}],reportConfig:[],age_groups:["0-4","5-14","15-24","25-34","35-44","45-54","55-64","65+"]}),mounted(){this.init()},methods:{init(){this.reportConfig=[{id:"year",helpText:"Year",type:u.TT_NUMBER,validation:e=>d.required(e),computedValue:e=>e.value},{id:"quater",helpText:"Quater",type:u.TT_SELECT,requireNext:!1,options:()=>[{label:"First",value:1},{label:"Second",value:2},{label:"Third",value:3},{label:"Fourth",value:4}],validation:e=>d.required(e),computedValue:e=>e.value},{id:"indicators",helpText:"Indicators",type:u.TT_MULTIPLE_SELECT,options:()=>this.reportIndicators,validation:e=>d.required(e),computedValue:e=>e.map(t=>t.value),config:{footerBtns:[{name:this.footerText,slot:"end",onClickComponentEvents:{refreshOptions:()=>this.footerText==="Select All"?this.selectAll():this.deSelectAll()},onClick:()=>"None"}]}}]},async generate(e){try{this.rows=[],this.columns=this.buildColumns(e.indicators.map(a=>a.label)),this.indicatorsValue=e.indicators.map(a=>a.value),this.yearValue=e.year.value,this.quarterValue=e.quater.value;const t=new w;this.data=await t.getTBOutcomesReport(this.yearValue,this.quarterValue,this.indicatorsValue),this.pushGenderAggregatedHeaders(),this.populateRows(),this.addTotals(),i.getTop().then(a=>a&&i.dismiss())}catch(t){console.error(t),b("Unable to generate report")}},addTotals(){let e=this.data.flatMap(t=>{const a=Object.values(t).reduce((n,s)=>s&&s.male&&s.male.length>0?s.male:n,[]),r=Object.values(t).reduce((n,s)=>s&&s.female&&s.female.length>0?s.female:n,[]);return[a,r]});e=e.map(t=>this.toDrillColumn("total",{total:t,indicator:""})),e.unshift(o.td("Totals")),this.rows.push(e)},populateRows(){this.rows=this.age_groups.map(e=>{const t=[];return t.push(o.td(e)),this.data.forEach(a=>{const r=a[e];t.push(r?this.toDrillColumn("male",r):o.td(0)),t.push(r?this.toDrillColumn("female",r):o.td(0))}),t})},pushGenderAggregatedHeaders(){this.columns[1]=[],this.columns[1].push(o.thTxt("",{sortable:!1,exportable:!1}));for(let e=0;e<this.indicatorsValue.length;e++)this.columns[1].push(o.thTxt("M",{sortable:!1,exportable:!1}),o.thTxt("F",{sortable:!1,exportable:!1}))},toDrillColumn(e,t){return t[e].length==0?o.td(0):o.tdLink(t[e].length,()=>{this.drilldown({indicator:t.indicator,ids:[t[e]]})})},async drilldown(e){(await i.create({component:y,backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:e.indicator,patientIdentifiers:e.ids,subtitle:"Period: ".concat(this.period," Q").concat(this.quarterValue),onFinish:()=>i.getTop().then(t=>t&&i.dismiss())}})).present()},buildColumns(e){const t=[[o.thTxt("",{sortable:!1,exportable:!1}),o.thTxt("Age Category",{sortable:!1,exportable:!1})]];return e.forEach(a=>{t[0].push(o.thTxt(a,{colspan:2,sortable:!1,exportable:!0}))}),t},deSelectAll(){const e=this.reportIndicators;return this.footerText="Select All",e.map(t=>({...t,isChecked:!1}))},selectAll(){const e=this.reportIndicators;return this.footerText="Deselect All",e.map(t=>({...t,isChecked:!0}))}}});function D(e,t,a,r,n,s){const c=p("report-template"),h=p("ion-page");return x(),g(h,null,{default:v(()=>[_(c,{title:"MDR Outcomes report",period:"Period",rows:e.rows,fields:e.reportConfig,columns:e.columns,reportPrefix:"NTP",config:{showIndex:!0},onReportConfiguration:e.generate},null,8,["rows","fields","columns","onReportConfiguration"])]),_:1})}const L=C(A,[["render",D]]);export{L as default};