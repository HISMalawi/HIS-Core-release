(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e523fed2"],{b31c:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var r,s=o("ade3"),a=(o("13d5"),o("14d9"),o("2ef0")),i=o("5969");(function(t){t["MOH_CACHE"]="mohCache"})(r||(r={}));class n extends i["a"]{constructor(){super(),Object(s["a"])(this,"regenerate",void 0),this.regenerate=!1}cohortUrl(){return`programs/${this.programID}/reports/cohort`}setRegenerate(t){this.regenerate=t}getCohortDrillDown(t){return i["a"].getJson("cohort_report_drill_down",{id:t,date:this.date,program_id:this.programID})}requestCohort(t){return i["a"].ajxGet(this.cohortUrl(),t)}qaurterRequestParams(){const t={name:this.quarter,regenerate:this.regenerate};return this.occupation&&(t["occupation"]=this.occupation),t}datePeriodRequestParams(){const t={name:`Cohort-${this.startDate}-${this.endDate}`,start_date:this.startDate,end_date:this.endDate,regenerate:this.regenerate};return this.occupation&&(t["occupation"]=this.occupation),t}getCachedCohortValues(){const t=sessionStorage.getItem(r.MOH_CACHE);if(t){const e=JSON.parse(t);if(e.start_date===this.startDate&&e.end_date===this.endDate||e.quarter===this.quarter)return e.data}}cacheCohort(t){sessionStorage.setItem(r.MOH_CACHE,JSON.stringify({start_date:this.startDate,end_date:this.endDate,quarter:this.quarter,data:t}))}validateIndicators(t,e){const o=this.getCachedCohortValues();if(o){const r=Object.keys(t).reduce((e,r)=>{const s=Object(a["find"])(o,{name:r}),i=t[r],n=s?s.contents:null,h=i.param,d=i.check(parseInt(n),h);return d&&e.push(i.error(n,h)),e},[]);return e(r)}return-1}}},cca6:function(t,e,o){"use strict";o.r(e);var r=o("7a23");function s(t,e,o,s,a,i){const n=Object(r["resolveComponent"])("report-template"),h=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createBlock"])(h,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(n,{title:t.title,period:t.period,rows:t.rows,fields:t.fields,columns:t.columns,reportPrefix:"PEPFAR",config:{showIndex:!0},validationErrors:t.errors,showValidationStatus:t.showStatus,headerInfoList:t.headerInfoList,onReportConfiguration:t.onPeriod},null,8,["title","period","rows","fields","columns","validationErrors","showValidationStatus","headerInfoList","onReportConfiguration"])]),_:1})}o("14d9");var a=o("44e3"),i=o("9a5e"),n=o("4ba2"),h=o("9ceb"),d=o("b31c"),c=o("ad8d"),l=Object(r["defineComponent"])({mixins:[a["a"]],components:{ReportTemplate:n["a"]},data:()=>({title:"TX Curr MMD Report",cohort:{},rows:[],totals:new Set,errors:[],showStatus:!1,columns:[[h["a"].thTxt("Age group"),h["a"].thTxt("Gender"),h["a"].thNum("# of clients on <3 months of ARVs"),h["a"].thNum("# of clients on 3 - 5 months of ARVs"),h["a"].thNum("# of clients on >= 6 months of ARVs")]],headerInfoList:[],mohCohort:{},canValidate:!1}),watch:{async canValidate(t){t&&await this.validateReport()}},created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(t,e){this.canValidate=!1,this.totals.clear(),this.errors=[],this.showStatus=!1,this.rows=[],this.report=new i["a"],this.mohCohort=new d["a"],this.mohCohort.setOccupation(e.occupation),this.mohCohort.setStartDate(e.start_date),this.mohCohort.setEndDate(e.end_date),this.report.setOccupation(e.occupation),this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.period=this.report.getDateIntervalPeriod(),this.report.initArvRefillPeriod(!0),await this.setRows(),this.canValidate=!0,this.showStatus=!0,this.setHeaderInfoList()},getValues(t,e){const o=[],r=[],s=[];for(const a in t){const e=t[a],i=e.prescribed_days;this.totals.add(a),i<90&&o.push(a),i>=90&&i<=150&&r.push(a),i>150&&s.push(a)}return[this.drill(o,`# of clients on < 3 months of ARVs (${e})`),this.drill(r,`# of clients on 3 - 5 months of ARVs (${e})`),this.drill(s,`# of clients on  >= 6 months of ARVs (${e})`)]},async setRows(){let t=0,e=0;const o=[],r=[];for(const s in c["a"]){const a=c["a"][s];if("<1 year"===a)t=0,e=0;else if("90 plus years"===a)t=90,e=1e4;else{const[o,r]=a.split("-");t=parseInt(o),e=parseInt(r)}const i=await this.report.getTxCurrMMDReport(t,e);this.report.initArvRefillPeriod(!1),i?(r.push([h["a"].td(a),h["a"].td("Female"),...this.getValues(i["Female"],a+" Female")]),o.push([h["a"].td(a),h["a"].td("Male"),...this.getValues(i["Male"],a+" Male")])):(r.push([h["a"].td(a),h["a"].td("Female"),h["a"].td(0),h["a"].td(0),h["a"].td(0)]),o.push([h["a"].td(a),h["a"].td("Male"),h["a"].td(0),h["a"].td(0),h["a"].td(0)])),this.rows=[...r,...o]}},setHeaderInfoList(){this.headerInfoList=[{label:"Total clients",value:this.totals.size,other:{onclick:()=>this.runTableDrill(Array.from(this.totals),"Total Clients")}}]},validateReport(){const t={total_alive_and_on_art:{param:this.totals.size,check:(t,e)=>e>t,error:(t,e)=>`\n                        MoH cohort Alive and on ART clients <b>(${t})</b> is not\n                        matching with total TX MMD clients <b>(${e})</b>.\n                    `}},e=this.mohCohort.validateIndicators(t,t=>this.errors=t);-1===e&&(this.errors=["Report not validated. Run the MoH cohort report for similar reporting period and then run this report"])}}}),u=o("6b0d"),p=o.n(u);const f=p()(l,[["render",s]]);e["default"]=f}}]);
//# sourceMappingURL=chunk-e523fed2.ee3bb0bd.js.map