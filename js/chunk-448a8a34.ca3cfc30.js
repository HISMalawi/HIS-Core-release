(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-448a8a34"],{"1b7d":function(t,e,r){"use strict";r.r(e);var a=r("7a23");function s(t,e,r,s,i,o){const n=Object(a["resolveComponent"])("report-template"),h=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createBlock"])(h,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(n,{title:t.title,period:t.period,rows:t.rows,columns:t.columns,headerInfoList:t.headerList,reportPrefix:"MoH",config:{showIndex:!0},validationErrors:t.errors,showValidationStatus:t.canValidate,hasServerSideCaching:!0,enabledPDFHorizontalPageBreak:!0,onReportConfiguration:t.onPeriod,onDefaultConfiguration:t.onLoadDefault},null,8,["title","period","rows","columns","headerInfoList","validationErrors","showValidationStatus","onReportConfiguration","onDefaultConfiguration"])]),_:1})}r("13d5"),r("14d9");var i=r("44e3"),o=r("2ef6"),n=r("87e7"),h=r("b5e4"),d=r("2ef0"),c=r("4ba2"),l=r("9ceb"),u=r("d867"),g=r("b31c"),p=r("ad8d"),m=Object(a["defineComponent"])({mixins:[i["a"]],components:{ReportTemplate:c["a"],IonPage:u["D"]},data:()=>({title:"Disaggregated report",columns:[[l["a"].thTxt("Age group"),l["a"].thTxt("Gender"),l["a"].thNum("Tx new (new on ART)"),l["a"].thNum("TX curr (receiving ART)"),l["a"].thNum("TX curr (received IPT)"),l["a"].thNum("TX curr (screened for TB)"),...n["b"].map(t=>l["a"].thNum(t)),l["a"].thNum("Unknown"),l["a"].thNum("Total (regimen)")]],errors:[],showStatus:!1,rowDataRefs:["txNew","txCurr","txGivenIpt","txScreenTB",...n["b"],"N/A","regimenTotals"],dataRefLabels:{txNew:"Tx new (new on ART)",txCurr:"Tx curr (receiving ART)",txGivenIpt:"TX curr (received IPT)",txScreenTB:"TX curr (screened for TB)","N/A":"Unknown",regimenTotals:"Regimen Totals"},aggregations:[],mohCohort:{},maleFemaleAgeGroupData:{},headerList:[],canValidate:!1,onLoadDefault:null,sortIndexes:{}}),async created(){const{query:t}=this.$route;t.start_date&&t.end_date&&t.quarter&&(this.onLoadDefault=()=>this.onPeriod({quarter:{label:t.quarter,other:{start:t.start_date,end:t.end_date,occupation:t.occupation}}},{}))},watch:{async canValidate(t){t&&await this.validateReport()}},computed:{rows(){return Object.keys(this.sortIndexes).sort((t,e)=>parseInt(t)-parseInt(e)).reduce((t,e)=>t.concat(this.sortIndexes[e]),[])}},methods:{async onPeriod(t,e,r=!1){this.canValidate=!1,this.maleFemaleAgeGroupData={},this.aggregations=[],this.sortIndexes={},this.errors=[],this.report=new o["a"],this.mohCohort=new g["a"],t.quarter?(this.mohCohort.setOccupation(t.quarter.other.occupation),this.mohCohort.setQuarter(t.quarter.label),this.mohCohort.setStartDate(t.quarter.other.start),this.mohCohort.setEndDate(t.quarter.other.end),this.report.setQuarter(t.quarter.label),this.report.setOccupation(t.quarter.other.occupation),this.report.setStartDate(t.quarter.other.start),this.report.setEndDate(t.quarter.other.end),this.period="Custom"===t.quarter.label?this.report.getDateIntervalPeriod():t.quarter.label):(this.report.setOccupation(e.occupation),this.mohCohort.setOccupation(e.occupation),this.mohCohort.setStartDate(e.start_date),this.mohCohort.setEndDate(e.end_date),this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.period=this.report.getDateIntervalPeriod()),this.report.setRebuildOutcome(r);const a=await this.report.init();if(!a)return Object(h["e"])("Unable to initialise report");await this.setTableRows(),this.canValidate=!0},async setTableRows(){await this.setFemaleRows(1),await this.setMaleRows(2),await this.setTotalMalesRow(3),await this.setFemalePregnantRows(4),await this.setFemaleBreastFeedingRows(6),await this.setFemaleNotPregnantRows(5)},getColumnLabel(t){return t in this.dataRefLabels?this.dataRefLabels[t]:t},getTotals(t){return this.aggregations.filter(e=>t(e)).reduce((t,e)=>t.concat(e.data),[])},addAggregation(t,e,r=[]){this.aggregations.push({col:t,gender:e,data:r})},async getRegimenRows(t,e){let r=[];const a=[],s=await this.report.getRegimenDistribution(),i=[...n["b"],"N/A"];return i.forEach(i=>{s[i]&&(r=r.concat(s[i])),a.push(this.drill(s[i],`Regimen ${i} | ${t} | ${e}`)),this.addAggregation(i,e,s[i])}),a.push(this.drill(r,`Regimen Totals | ${t} | ${e}`)),this.addAggregation("regimenTotals",e,r),a},getValue(t,e,r){switch(t){case"tx_given_ipt":return this.report.getTxIpt();case"tx_screened_for_tb":return this.report.getTxCurrTB();default:return e in r?r[e][t]:[]}},setTotalMalesRow(t){const e=(t,e)=>{const r=this.aggregations.filter(e=>"Male"===e.gender&&e.col===t).reduce((t,e)=>t.concat(e.data),[]);return this.drill(r,e)},r=this.rowDataRefs.map(t=>e(t,this.getColumnLabel(t)+" | All Male"));this.sortIndexes[t]=[[l["a"].td("All"),l["a"].td("Male"),...r]]},setFemaleNotPregnantRows(t){const e=(t,e)=>this.aggregations.filter(t=>t.gender.match(/fp|fbf/i)&&t.col===e).reduce((t,e)=>t.concat(e.data||[]),[]).includes(t),r=(t,r)=>{const a=this.aggregations.filter(e=>"Female"===e.gender&&e.col===t).reduce((r,a)=>r.concat(a.data.filter(r=>!e(r,t))),[]);return this.drill(a,r)},a=this.rowDataRefs.map(t=>r(t,this.getColumnLabel(t)+" | FNP"));this.sortIndexes[t]=[[l["a"].td("All"),l["a"].td("FNP"),...a]]},setFemaleRows(t){return this.report.setGender("female"),this.setRows(t,"F",p["a"],"Female")},setMaleRows(t){return this.report.setGender("male"),this.setRows(t,"M",p["a"],"Male")},setFemalePregnantRows(t){return this.report.setGender("pregnant"),this.setRows(t,"F",["All"],"FP","Pregnant")},setFemaleBreastFeedingRows(t){return this.report.setGender("breastfeeding"),this.setRows(t,"F",["All"],"FBf","Breastfeeding")},async setRows(t,e,r,a,s=""){for(const i in r){let o=[],n=[],h=[],c=[];const u=s||r[i];if(this.report.setAgeGroup(u),!(u in this.maleFemaleAgeGroupData)){const t=await this.report.getCohort();this.report.setRebuildOutcome(!1),this.maleFemaleAgeGroupData[u]=Object(d["isEmpty"])(t)?{}:t[u]}if(!Object(d["isEmpty"])(this.maleFemaleAgeGroupData[u])){const t=async t=>this.getValue(t,e,this.maleFemaleAgeGroupData[u]);o=await t("tx_new"),n=await t("tx_curr"),h=await t("tx_given_ipt"),c=await t("tx_screened_for_tb"),this.addAggregation("txNew",a,o),this.addAggregation("txCurr",a,n),this.addAggregation("txGivenIpt",a,h),this.addAggregation("txScreenTB",a,c)}switch(this.report.getGender()){case"breastfeeding":this.report.setAgeGroup("All"),this.report.setGender("Fbf");break;case"pregnant":this.report.setAgeGroup("All"),this.report.setGender("FP");break}this.sortIndexes[t]||(this.sortIndexes[t]=[]),this.sortIndexes[t].push([l["a"].td(r[i]),l["a"].td(this.formatGender(a)),this.drill(o,`Tx new (new on ART) | ${u} | ${a}`),this.drill(n,`Tx curr (receiving ART) | ${u} | ${a}`),this.drill(h,`TX curr (received IPT) | ${u} | ${a}`),this.drill(c,`TX curr (screened for TB) | ${u} | ${a}`),...await this.getRegimenRows(u,a)])}},setHeaderInfoList(t){this.headerList=[{label:"Total Alive and on ART",value:t.length,other:{onclick:()=>this.runTableDrill(t,"Total Alive on ART")}}]},async validateReport(){const t=this.getTotals(t=>"txCurr"===t.col&&t.gender.match(/male|female/i));this.setHeaderInfoList(t);const e={total_alive_and_on_art:{param:t.length,check:(t,e)=>t!=e,error:(t,e)=>`\n                        Total alive of <b>${e}</b>\n                        Does not match total alive of <b>${t}</b> on MOH report\n                    `}},r=this.mohCohort.validateIndicators(e,t=>this.errors=t);-1===r&&(this.errors=["Report not validated. Run the MoH cohort report for similar reporting period and then run this report"])}}}),w=r("6b0d"),b=r.n(w);const f=b()(m,[["render",s]]);e["default"]=f},"2ef6":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var a=r("ade3"),s=r("5969"),i=r("ad8d");class o extends s["a"]{constructor(){super(),Object(a["a"])(this,"gender",void 0),Object(a["a"])(this,"ageGroup",void 0),Object(a["a"])(this,"initialize",void 0),Object(a["a"])(this,"rebuildOutcome",void 0),this.gender="",this.ageGroup=i["a"][0],this.initialize=!0,this.rebuildOutcome=!0}async init(){this.initialize=!0;const t=await this.getCohort();return!(!t||"created"!==t.temp_disaggregated)&&(this.initialize=!1,!0)}setAgeGroup(t){this.ageGroup=t}setInitialization(t){this.initialize=t}setRebuildOutcome(t){this.rebuildOutcome=t}setGender(t){this.gender=t}getGender(){return this.gender}getCohort(){return this.getReport("cohort_disaggregated",{age_group:""+this.ageGroup,rebuild_outcome:""+this.rebuildOutcome,initialize:""+this.initialize})}getTxIpt(){return this.getReport("clients_given_ipt",{gender:this.gender,age_group:""+this.ageGroup})}getTxCurrTB(){return this.getReport("screened_for_tb",{gender:this.gender,age_group:""+this.ageGroup})}getRegimenDistribution(){return this.getReport("disaggregated_regimen_distribution",{gender:""+this.gender,age_group:""+this.ageGroup})}}},b31c:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var a,s=r("ade3"),i=(r("13d5"),r("14d9"),r("2ef0")),o=r("5969");(function(t){t["MOH_CACHE"]="mohCache"})(a||(a={}));class n extends o["a"]{constructor(){super(),Object(s["a"])(this,"regenerate",void 0),this.regenerate=!1}cohortUrl(){return`programs/${this.programID}/reports/cohort`}setRegenerate(t){this.regenerate=t}getCohortDrillDown(t){return o["a"].getJson("cohort_report_drill_down",{id:t,date:this.date,program_id:this.programID})}requestCohort(t){return o["a"].ajxGet(this.cohortUrl(),t)}qaurterRequestParams(){const t={name:this.quarter,regenerate:this.regenerate};return this.occupation&&(t["occupation"]=this.occupation),t}datePeriodRequestParams(){const t={name:`Cohort-${this.startDate}-${this.endDate}`,start_date:this.startDate,end_date:this.endDate,regenerate:this.regenerate};return this.occupation&&(t["occupation"]=this.occupation),t}getCachedCohortValues(){const t=sessionStorage.getItem(a.MOH_CACHE);if(t){const e=JSON.parse(t);if(e.start_date===this.startDate&&e.end_date===this.endDate||e.quarter===this.quarter)return e.data}}cacheCohort(t){sessionStorage.setItem(a.MOH_CACHE,JSON.stringify({start_date:this.startDate,end_date:this.endDate,quarter:this.quarter,data:t}))}validateIndicators(t,e){const r=this.getCachedCohortValues();if(r){const a=Object.keys(t).reduce((e,a)=>{const s=Object(i["find"])(r,{name:a}),o=t[a],n=s?s.contents:null,h=o.param,d=o.check(parseInt(n),h);return d&&e.push(o.error(n,h)),e},[]);return e(a)}return-1}}}}]);
//# sourceMappingURL=chunk-448a8a34.ca3cfc30.js.map