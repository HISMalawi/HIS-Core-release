(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f04b8cc"],{"05e1":function(e,t,a){"use strict";var r=a("7a23");const n={class:"my-table",style:{margin:"auto",width:"95%","margin-top":"3%","margin-bottom":"3%"}};function s(e,t,a,s,i,o){const d=Object(r["resolveComponent"])("report-table");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",n,[Object(r["createVNode"])(d,{columns:e.columns,rows:e.rows,config:{tableCssTheme:e.tableCssTheme}},null,8,["columns","rows","config"])])}a("14d9");var i=a("6d14"),o=a("1c74"),d=a("5a0c"),l=a.n(d),c=a("80e3"),h=a("9ceb"),p=Object(r["defineComponent"])({components:{ReportTable:c["a"]},data:function(){return{conditions:[],lessThanFiveYears:" < 5 yrs ",greaterAndEqualFiveYears:" >= 5 yrs ",total:" Total ",tableCssTheme:"opd-report-theme",rows:[],columns:[[h["a"].thTxt("",{colspan:2,sortable:!1,exportable:!1}),h["a"].thTxt("Out-patient Cases",{colspan:3,sortable:!1,exportable:!1})],[h["a"].thTxt(""),h["a"].thTxt("Diseases/Events/Conditions"),h["a"].thTxt("< 5 yrs"),h["a"].thTxt(">= 5 yrs"),h["a"].thTxt("Total")]]}},props:["params","epiweek","quarter","onDrillDown"],methods:{renderResults(){const e=new i["a"],t=e.renderResults(this.params);t.length&&(this.conditions=t,this.rows=this.buildRows(t))},onDownload(){const e=new i["a"];let{CSVString:t}=e.getCSVString(this.conditions);t+=`\n          Date Created: ${l()().format("DD/MMM/YYYY HH:MM:ss")}\n          His-Core Version: ${o["e"].getCoreVersion()}\n          API Version: ${o["e"].getApiVersion()}\n          Report Period: ${this.epiweek}\n          Site: ${o["e"].getLocationName()}\n          Site UUID: ${o["e"].getSiteUUID()}`;const a=new Blob([t],{type:"text/csv;charset=utf-8;"}),r=`${o["e"].getLocationName()} Weekly IDSR report ${this.quarter}`;if(navigator.msSaveBlob)navigator.msSaveBlob(a,"exportFilename");else{const e=document.createElement("a");e.href=window.URL.createObjectURL(a),e.setAttribute("download",r+".csv"),document.body.appendChild(e),e.click(),document.body.removeChild(e)}},buildRows(e){const t=[];return e.forEach(e=>{t.push([h["a"].td(e.id,{style:{textAlign:"left"}}),h["a"].td(e.name,{style:{textAlign:"left"}}),this.buildRow(this.lessThanFiveYears+"("+e.name+")",e.lessThanFiveYears,e.lessThanFiveYearsPatientIds),this.buildRow(this.greaterAndEqualFiveYears+"("+e.name+")",e.greaterThanEqualFiveYears,e.greaterThanEqualFiveYearsPatientIds),this.buildRow(this.total+"("+e.name+")",e.total,e.totalPatientIds)])}),t},buildRow(e,t,a){return"string"==typeof t?h["a"].td(""):t>0?h["a"].tdLink(t,async()=>this.onDrillDown(e,a)):h["a"].td(0)}},watch:{params:{immediate:!0,handler(){this.renderResults()}}}}),u=a("d959"),m=a.n(u);const g=m()(p,[["render",s]]);t["a"]=g},"6d14":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a("ade3"),n=(a("14d9"),a("fcd5")),s=a("1c74");class i extends n["d"]{constructor(){super(),Object(r["a"])(this,"regenerate",void 0),this.regenerate=!1}setRegenerate(e){this.regenerate=e}requestIDSRWeekly(){return this.getReport("generate_weekly_idsr_report",{request:"true"})}requestIDSRMonthly(){return this.getReport("generate_monthly_idsr_report",{request:"true"})}renderResults(e){const t=[];let a=1;for(const[r,n]of Object.entries(e)){const e=[],s=n,i={id:0,name:"",lessThanFiveYears:"",lessThanFiveYearsPatientIds:"",greaterThanEqualFiveYears:"",greaterThanEqualFiveYearsPatientIds:"",total:0,totalPatientIds:""};i.name=r;let o=0;i.id=a,a+=1;for(const[t,a]of Object.entries(s)){const r=a;null!=r&&(o+=r.length,i.total=o,r.length&&(e.push(...r),i.totalPatientIds=e),"<5yrs"==t&&(i.lessThanFiveYears=r.length,i.lessThanFiveYearsPatientIds=r),">=5yrs"==t&&(i.greaterThanEqualFiveYears=r.length,i.greaterThanEqualFiveYearsPatientIds=r))}t.push(i)}return t}getCSVString(e){let t="Diseases/Events/Conditions, <5 yrs, >=5 yrs, Total,\n";for(const a of e)t+=`${a.name},${a.lessThanFiveYears},${a.greaterThanEqualFiveYears},${a.total},\n`;return{CSVString:t}}static async getReportEpiWeeks(){const e=[],t=await s["e"].getJson("get_weeks");return t.reverse().forEach(t=>{const a=t[1].split(" "),r=a[0],n=a[2],s=t[0].split("W"),i=s[0]+"/W"+s[1];e.push({name:i,start:r,end:n})}),e}static async getReportMonths(){const e=[],t=await s["e"].getJson("get_months");return t.forEach(t=>{const a=t[1],r=a[0],n=a[1],s=n.split("to");e.push({name:r,start:s[0],end:s[1].trim()})}),e}}},7920:function(e,t,a){"use strict";var r=a("7a23");function n(e,t,a,n,s,i){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var s=a("9441"),i=Object(r["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:s["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),o=a("d959"),d=a.n(o);const l=d()(i,[["render",n]]);t["a"]=l},c2b0:function(e,t,a){"use strict";a("14d9");var r=a("7a23"),n=a("b446"),s=a("23e6"),i=a("9283"),o=a("d867"),d=a("d6aa"),l=a("fcd5"),c=a("6d14"),h=a("d95e"),p=a("2706"),u=a("9ceb"),m=a("5a0c"),g=a.n(m),b=a("1c74"),D=a("2ef0"),w=Object(r["defineComponent"])({data:()=>({fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",drillDownCache:{}}),methods:{toDate(e){return i["b"].toStandardHisDisplayFormat(e)},confirmPatient(e){return this.$router.push("/patients/confirm?person_id="+e)},async exportToCustomPDF(e){const t=open("","","width:1024px, height:768px"),a=document.getElementById("report-content");a&&t&&(t.document.write(`\n                    <html>\n                    <head>\n                        <title>${e}</title>\n                        <link rel="stylesheet" media="print" href="/assets/css/cohort.css" />\n                    </head>\n                    <body>\n                        ${a.innerHTML}\n                    </body>\n                    </html>\n                `),setTimeout(()=>{t.print(),t.close()},3500))},async onDrillDown(e,t){if(Object(D["isEmpty"])(t))return;const a=[[u["a"].thTxt("First name"),u["a"].thTxt("Last name"),u["a"].thTxt("Gender"),u["a"].thTxt("Age"),u["a"].thTxt("Phone"),u["a"].thTxt("Address"),u["a"].thTxt("Action")]],r=async e=>await Promise.all(e.map(async e=>{const t=await s["a"].findByID(e),a=new s["a"](t);return[u["a"].td(a.getGivenName()),u["a"].td(a.getFamilyName()),u["a"].td(a.getGender()),u["a"].td(a.getAge()),u["a"].td(a.getPhoneNumber()),u["a"].td(`${a.getCurrentDistrict()}, ${a.getCurrentVillage()}, ${a.getClosestLandmark()}`),u["a"].tdBtn("Select",async()=>{await o["ab"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+e})})]}));return this.drilldownData(e,a,t,r)},async drilldownAsyncRows(e,t,a){const r=await o["ab"].create({component:d["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:a,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>o["ab"].dismiss()}});r.present()},async drilldownData(e,t,a,r){const n=await o["ab"].create({component:d["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:a,rowParser:r,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>o["ab"].dismiss()}});n.present()},getDefaultDrillDownTable(){const e=[[u["a"].thTxt("ARV number"),u["a"].thTxt("Gender"),u["a"].thTxt("Birth Date"),u["a"].thTxt("Actions")]],t=e=>e.map(async e=>{const[t,a]=e;if(a in this.drillDownCache)return[t];const r=await s["a"].findByID(a),n=new s["a"](r),i=[t,u["a"].td(n.getArvNumber()),u["a"].td(n.getGender()),u["a"].tdDate(n.getBirthdate().toString()),u["a"].tdBtn("Show",async()=>{await o["ab"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+a})})];return this.drillDownCache[a]=i,i});return{rowParser:t,columns:e}},runTableDrill(e,t="Drilldown patients"){const{columns:a,rowParser:r}=this.getDefaultDrillDownTable();this.drilldownData(t,a,e,r)},drill(e,t="Drill table"){return e&&e.length>0?u["a"].tdLink(e.length,()=>this.runTableDrill(e,t)):u["a"].td(0)},getEpiweeksFields(){return[{id:"epiweek",helpText:"Select EPI week",type:h["b"].TT_SELECT,validation:e=>p["a"].required(e),options:async()=>{const e=await c["a"].getReportEpiWeeks(),t=e.map(e=>({label:e.name+" - ("+g()(e.start).format("DD/MMM/YYYY")+" - "+g()(e.end).format("DD/MMM/YYYY")+")",value:e.start,other:e}));return t}}]},getMonthlyFields(){return[{id:"idsrmonth",helpText:"Select Month",type:h["b"].TT_SELECT,validation:e=>p["a"].required(e),options:async()=>{const e=await c["a"].getReportMonths(),t=e.map(e=>({label:e.name+" - ("+g()(e.start).format("DD/MMM/YYYY")+" - "+g()(e.end).format("DD/MMM/YYYY")+")",value:e.start,other:e}));return t}}]},getDateDurationFields(e=!1,t=!1,a=5){const r="2001-01-01",s=b["e"].getSessionDate();return[{id:"quarter",helpText:"Select Quarter",type:h["b"].TT_SELECT,condition:()=>e,validation:e=>p["a"].required(e),options:()=>{const e=l["d"].getReportQuarters(a);let r=e.map(e=>({label:e.name,value:e.start,other:e}));return t&&(r=[{label:"Set custom period",value:"custom_period",other:{}},...r]),r}},...Object(n["b"])({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,minDate:()=>r,maxDate:()=>s,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(n["b"])({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,unload:(e,t,a,r)=>{"next"===t&&(this.endDate=r.end_date)},minDate:(e,t)=>t.start_date,maxDate:()=>s,estimation:{allowUnknown:!1},computeValue:e=>e})]}}});const y=w;t["a"]=y},cb01:function(e,t,a){"use strict";var r=a("7a23");const n={style:{margin:"auto",width:"95%","margin-top":"1%"}};function s(e,t,a,s,i,o){const d=Object(r["resolveComponent"])("report-table");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",n,[Object(r["createVNode"])(d,{columns:e.columns,rows:e.rows,config:{tableCssTheme:e.tableCssTheme}},null,8,["columns","rows","config"])])}a("14d9");var i=a("80e3"),o=a("9ceb"),d=Object(r["defineComponent"])({components:{ReportTable:i["a"]},props:{clinicName:{type:String,default:""},reportparams:{type:Object,required:!0},totalOPDVisits:{type:Number,required:!0},reportName:{type:String,required:!0},periodLabel:{type:String,required:!0},periodDates:{type:String,required:!0},rangeLabel:{type:String,required:!0},range:{type:String,required:!0}},data:function(){return{tableCssTheme:"opd-report-theme",rows:[],columns:[[o["a"].thTxt(this.reportName,{colspan:2,sortable:!1,exportable:!1})]]}},mounted(){this.initTable()},watch:{totalOPDVisits(e,t){this.initTable()}},methods:{initTable(){const e=[],t=[{name:"Country:",value:"Malawi"},{name:"Reporting Facility Name:",value:this.clinicName},{name:this.rangeLabel+":",value:this.range},{name:this.periodLabel+":",value:this.periodDates},{name:"Total OPD Visits:",value:this.totalOPDVisits}];t.forEach(t=>{"undefined:"!==t.name&&e.push([o["a"].td(t.name,{style:{textAlign:"left"}}),o["a"].td(t.value,{style:{textAlign:"left"}})])}),this.rows=e}}}),l=a("d959"),c=a.n(l);const h=c()(d,[["render",s]]);t["a"]=h},fcd5:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return h}));var r=a("ade3"),n=(a("14d9"),a("1c74")),s=a("9283"),i=a("b89f"),o=a("bef6");const d={one:"AL 1",two:"AL 2",three:"AL 3",four:"LA 4"},l=["Diabetes","Hypertension","Stroke","Suspected cancer","Confirmed cancer","Palliative cancer","Asthma","Depression","Acute psychosis","Chronic psychosis","Epilepsy"],c=["Organic mental disorder (Chronic)","Organic mental disorder (acute)","Alcohol use mental disorder","Drug use mental disorder","Schizophrenia","Acute and transient psychotic disorder","Schizo-affective disorder","Mood-affective disorder (MANIC)","Mood-affective disorder (BIPOLAR)","Mood-affective disorder (DEPRESSION)","Anxiety disorder","Stress reaction adjustment disorder","Dissociative conversion disorder","Somatoform disorder","Puerperal mental disorder","Personality/Behaviour disorder","Mental retardation","Psychological mental disorder","Hyperkinetic conduct disorder","Epilepsy"];class h extends n["e"]{constructor(){super(),Object(r["a"])(this,"programID",void 0),Object(r["a"])(this,"startDate",void 0),Object(r["a"])(this,"endDate",void 0),Object(r["a"])(this,"date",void 0),Object(r["a"])(this,"epiweek",void 0),this.endDate="",this.startDate="",this.epiweek="",this.date=n["e"].getSessionDate(),this.programID=n["e"].getProgramID()}getPatientsWithNIDs(){return this.getReport("with_nids")}getClinicRegistrations(){return this.getReport("registration")}getAttendance(){return this.getReport(`programs/${this.programID}/reports/attendance`)}getDrugsGivenWithoutPrescription(){return this.getReport("drugs_given_without_prescription")}getDrugsGivenWithPrescription(){return this.getReport("drugs_given_with_prescription")}getDiagnosis(){const e=`programs/${this.programID}/reports/diagnosis`;return n["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate,date:this.date})}getDiagnosisByAddress(){return this.getReport("diagnosis_by_address")}getLaPrescriptions(){const e=`programs/${this.programID}/reports/la_prescriptions`;return n["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate})}getMalariaReport(){const e=`programs/${this.programID}/reports/malaria_report`;return n["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate,date:this.date})}printLaReport(e){const t=new i["a"],a=`programs/${this.programID}/barcodes/la_report`,r={"date[start]":this.startDate,"date[end]":this.endDate};return Object.keys(d).forEach((t,a)=>{a++,r[a+"[prescription]"]=e[`total_la_${t}_prescribed_drugs`],r[a+"[dispensed]"]=e[`total_la_${t}_dispensed_drugs`]}),t.printLbl(`${a}?${o["a"].parameterizeObjToString(r)}`)}getDateIntervalPeriod(){return`${s["b"].toStandardHisDisplayFormat(this.startDate)} - ${s["b"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setEpiWeek(e){this.epiweek=e}getReportPeriod(){return this.startDate&&this.endDate?`${s["b"].toStandardHisDisplayFormat(this.startDate)} - ${s["b"].toStandardHisDisplayFormat(this.endDate)}`:"-"}getReport(e,t={}){return n["e"].getJson(e,this.buildRequest(t))}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.epiweek&&(t["epiweek"]=this.epiweek),{...t,...e}}static getReportQuarters(e=4){const t=[];let a=s["b"].getCurrentYear();for(let r=0;r<e;++r)t.push({name:"Q4 "+a,start:a+"-10-01",end:a+"-12-31"}),t.push({name:"Q3 "+a,start:a+"-07-01",end:a+"-09-30"}),t.push({name:"Q2 "+a,start:a+"-04-01",end:a+"-06-30"}),t.push({name:"Q1 "+a,start:a+"-01-01",end:a+"-03-31"}),--a;return t}}}}]);
//# sourceMappingURL=chunk-8f04b8cc.2650cb23.js.map