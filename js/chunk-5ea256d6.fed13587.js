(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ea256d6"],{"44e3":function(e,t,r){"use strict";r("14d9");var o=r("1c74"),a=r("7a23"),s=r("b446"),i=r("23e6"),n=r("9283"),c=r("d867"),l=r("d6aa"),d=r("5969"),p=r("d95e"),u=r("2706"),h=r("9ceb"),m=r("2ef0"),b=Object(a["defineComponent"])({data:()=>({fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",drillDownCache:{}}),methods:{formatGender(e){const t=(""+e).toUpperCase();return"M"===t||"MALE"===t?"Male":"F"===t||"FEMALE"===t?"Female":/fbf|fnp|fp/i.test(e)?t:e},toDate(e){return n["b"].toStandardHisDisplayFormat(e)},sortByArvNumber(e,t="arv_number"){try{return e.sort((e,r)=>this.getArvInt(e[t])>this.getArvInt(r[t])?1:-1)}catch(r){return console.error(r),e}},getArvInt(e){if("string"===typeof e){const[t,r,o]=e.split("-"),a=parseInt(o);return"number"===typeof a?a:0}return 0},tdARV(e,t={}){return h["a"].td(e,{sortValue:this.getArvInt(e),...t})},confirmPatient(e){return this.$router.push("/patients/confirm?person_id="+e)},async drilldownAsyncRows(e,t,r,o=!0){const a=await c["Z"].create({component:l["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:r,canExport:o,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>c["Z"].dismiss()}});a.present()},async drilldownData(e,t,r,o){const a=await c["Z"].create({component:l["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:r,rowParser:o,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>c["Z"].dismiss()}});a.present()},getDefaultDrillDownTable(){const e=[[h["a"].thTxt("ARV number"),h["a"].thTxt("Gender"),h["a"].thTxt("Birth Date"),h["a"].thTxt("Actions")]],t=async e=>{let t=0;const r=e.map(async e=>{let r=null,o=null;if(Object(m["isArray"])(e)){const[t,r]=e;if(o=t,r in this.drillDownCache){const[e,...t]=this.drillDownCache[r];return[o,...t]}}else if(r=e,r in this.drillDownCache)return this.drillDownCache[r];const a=await i["a"].findByID(r),s=new i["a"](a),n=[];return o&&(t=1,n.push(o)),n.push(this.tdARV(s.getArvNumber())),n.push(h["a"].td(this.formatGender(s.getGender()))),n.push(h["a"].tdDate(s.getBirthdate().toString())),n.push(h["a"].tdBtn("Show",async()=>{await c["Z"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+r})})),this.drillDownCache[r]=n,n}),o=await Promise.all(r);return o.sort((e,r)=>e[t].sortValue>r[t].sortValue?1:-1)};return{rowParser:t,columns:e}},runTableDrill(e,t="Drilldown patients"){const{columns:r,rowParser:o}=this.getDefaultDrillDownTable();this.drilldownData(t,r,e,o)},drill(e,t="Drill table"){return e&&e.length>0?h["a"].tdLink(e.length,()=>this.runTableDrill(e,t)):h["a"].td(0)},getQuaterOptions(){const e=d["a"].getReportQuarters();return e.map(e=>({label:e.name,value:e.start,other:e}))},getDateDurationFields(e=!1,t=!1,r=5,a=o["e"].getSessionDate()){const i="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:p["b"].TT_SELECT,condition:()=>e,validation:e=>u["a"].required(e),options:()=>{const e=d["a"].getReportQuarters(r);let o=e.map(e=>({label:e.name,value:e.start,other:e}));return t&&(o=[{label:"Set custom period",value:"custom_period",other:{}},...o]),o}},...Object(s["b"])({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,minDate:()=>i,maxDate:()=>a,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(s["b"])({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,unload:(e,t,r,o)=>{"next"===t&&(this.endDate=o.end_date)},minDate:(e,t)=>t.start_date,maxDate:()=>a,estimation:{allowUnknown:!1},computeValue:e=>e})]}}});const g=b;t["a"]=g},"4b65":function(e,t,r){},"552a":function(e,t,r){"use strict";var o=r("7a23");const a={class:"header-text-list"},s={key:0},i={class:"report-content"};function n(e,t,r,n,c,l){const d=Object(o["resolveComponent"])("his-standard-form"),p=Object(o["resolveComponent"])("ion-img"),u=Object(o["resolveComponent"])("ion-thumbnail"),h=Object(o["resolveComponent"])("ion-label"),m=Object(o["resolveComponent"])("report-filter"),b=Object(o["resolveComponent"])("ion-toolbar"),g=Object(o["resolveComponent"])("ion-header"),D=Object(o["resolveComponent"])("report-table"),O=Object(o["resolveComponent"])("ion-content"),f=Object(o["resolveComponent"])("pagination"),w=Object(o["resolveComponent"])("ion-chip"),j=Object(o["resolveComponent"])("ion-footer"),y=Object(o["resolveComponent"])("his-footer"),v=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["withDirectives"])(Object(o["createVNode"])(d,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[o["vShow"],e.showForm]]),e.showForm?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(v,{key:0},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(g,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,{slot:"start"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{src:e.logo},null,8,["src"])]),_:1}),Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("ul",a,[Object(o["createElementVNode"])("li",null,[Object(o["createTextVNode"])("Title "),Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(e.title),1)]),Object(o["createElementVNode"])("li",null,[Object(o["createTextVNode"])("Period "),Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(e.period),1)]),e.customInfo?(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",s,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.customInfo.label)+" ",1),Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(e.customInfo.value),1)])):Object(o["createCommentVNode"])("",!0)])]),_:1}),Object(o["createVNode"])(m,{slot:"end",showPerPageFilter:e.showFilters||e.paginated,disableSearchFilter:e.isTableLoading,disablePerPageFilter:e.isTableLoading,totalRowCount:e.tableRows.length,onOnItemsPerPage:t[0]||(t[0]=t=>e.itemsPerPage=t),onOnSearchFilter:t[1]||(t[1]=t=>e.searchFilter=t)},null,8,["showPerPageFilter","disableSearchFilter","disablePerPageFilter","totalRowCount"])]),_:1})]),_:1}),Object(o["createVNode"])(O,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",i,[Object(o["createVNode"])(D,{rows:e.rows,paginated:e.paginated,asyncRows:e.asyncRows,rowParser:e.rowParser,config:{...e.config,tableCssTheme:e.tableCssTheme},columns:e.columns,showFilters:e.showFilters,newPage:e.currentPage,searchFilter:e.searchFilter,rowsPerPage:e.itemsPerPage,onOnIsLoading:t[2]||(t[2]=t=>e.isTableLoading=t),onOnTableRows:t[3]||(t[3]=t=>e.tableRows=t),onOnPagination:t[4]||(t[4]=t=>e.totalPages=t.length),onOnActiveColumns:t[5]||(t[5]=t=>e.activeColumns=t),onOnActiveRows:t[6]||(t[6]=t=>e.activeRows=t)},null,8,["rows","paginated","asyncRows","rowParser","config","columns","showFilters","newPage","searchFilter","rowsPerPage"])])]),_:1}),Object(o["createVNode"])(j,null,{default:Object(o["withCtx"])(()=>[!e.searchFilter&&e.paginated||!e.searchFilter&&e.totalPages>0&&e.paginated?(Object(o["openBlock"])(),Object(o["createBlock"])(b,{key:0},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,{perPage:e.itemsPerPage,maxVisibleButtons:10,totalPages:e.totalPages,onOnChangePage:t[7]||(t[7]=t=>e.currentPage=t)},null,8,["perPage","totalPages"])]),_:1})):Object(o["createCommentVNode"])("",!0),e.showReportStamp?(Object(o["openBlock"])(),Object(o["createBlock"])(b,{key:1},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(w,{color:"primary"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Date Created: "),Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(e.date),1)]),_:1}),Object(o["createVNode"])(w,{color:"primary"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("His-Core Version: "),Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(o["createVNode"])(w,{color:"primary"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("API Version: "),Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1}),Object(o["createVNode"])(y,{color:e.footerColor,btns:e.btns},null,8,["color","btns"])]),_:1}))],64)}r("14d9");var c=r("0f25"),l=r("80e3"),d=r("ba82"),p=r("9ceb"),u=r("7920"),h=r("d867"),m=r("1c74"),b=r("9283"),g=r("2f2a"),D=r("1799"),O=r("b5e4"),f=Object(o["defineComponent"])({components:{HisStandardForm:u["a"],IonHeader:h["q"],ReportTable:l["a"],HisFooter:c["a"],IonPage:h["D"],IonContent:h["n"],IonToolbar:h["S"],Pagination:D["a"],ReportFilter:g["a"],IonFooter:h["o"],IonChip:h["l"],IonLabel:h["x"]},props:{title:{type:String,required:!0},period:{type:String,default:""},config:{type:Object},fields:{type:Array,default:()=>[]},columns:{type:Array,required:!0},rows:{type:Array,required:!0},paginated:{type:Boolean,default:!1},customBtns:{type:Array,default:()=>[]},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},onReportConfiguration:{type:Function,required:!1},rowParser:{type:Function},showFilters:{type:Boolean,default:!1},rowsPerPage:{type:Number},asyncRows:{type:Function},footerColor:{type:String,default:"dark"},customFileName:{type:String,default:""},canExport:{type:Boolean,default:!0},showReportStamp:{type:Boolean,default:!0},customInfo:{type:Object}},data:()=>({formData:{},computeFormData:{},btns:[],isLoadingData:!1,showForm:!1,logo:"/assets/images/login-logos/Malawi-Coat_of_arms_of_arms.png",isTableLoading:!1,searchFilter:"",itemsPerPage:50,currentPage:0,tableRows:[],totalPages:0,activeColumns:[],activeRows:[],date:b["b"].toStandardHisDisplayFormat(m["e"].getSessionDate()),apiVersion:m["e"].getApiVersion(),coreVersion:m["e"].getCoreVersion(),siteUUID:m["e"].getSiteUUID(),tableCssTheme:"opd-report-theme"}),methods:{getFileName(){return`${m["e"].getLocationName()} ${this.title} ${this.period}`},async onFinish(e,t){this.formData=e,this.computeFormData=t,this.showForm=!1,await this.presentLoading();try{this.onReportConfiguration&&await this.onReportConfiguration(this.formData,this.computeFormData),h["X"].dismiss()}catch(r){console.error(r),Object(O["c"])(""+r),h["X"].dismiss()}},async reloadReport(){await this.onFinish(this.formData,this.computeFormData)},async presentLoading(){const e=await h["X"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.showForm=!!this.fields.length,this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(p["b"])(this.columns,this.rows);Object(d["a"])(e,[...t,["Date Created: "+this.date],["Period: "+this.period],["HIS-Core Version: "+this.coreVersion],["API Version: "+this.apiVersion],["Site UUID: "+this.siteUUID]],this.getFileName())}},{name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{const{columns:e,rows:t}=Object(p["b"])(this.columns,this.rows);Object(d["c"])(e,t,this.getFileName())}},{name:"Back",size:"large",slot:"end",color:"primary",visible:!0,onClick:()=>this.showForm=!0},{name:"Refresh",size:"large",slot:"end",color:"warning",visible:!0,onClick:()=>this.reloadReport()},{name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>this.$router.push({path:"/"})})}}),w=(r("c7b4"),r("d959")),j=r.n(w);const y=j()(f,[["render",n],["__scopeId","data-v-70df9616"]]);t["a"]=y},5969:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r("ade3"),a=(r("14d9"),r("1c74")),s=r("9283"),i=r("5a0c"),n=r.n(i);class c extends a["e"]{constructor(){super(),Object(o["a"])(this,"programID",void 0),Object(o["a"])(this,"startDate",void 0),Object(o["a"])(this,"endDate",void 0),Object(o["a"])(this,"date",void 0),Object(o["a"])(this,"quarter",void 0),this.endDate="",this.startDate="",this.quarter="",this.date=a["e"].getSessionDate(),this.programID=a["e"].getProgramID()}getDateIntervalPeriod(){return`${s["b"].toStandardHisDisplayFormat(this.startDate)} - ${s["b"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setQuarter(e){this.quarter=e}getReport(e,t={}){return a["e"].getJson(e,this.buildRequest(t))}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.quarter&&(t["quarter"]=this.quarter),{...t,...e}}static getQuarterBounds(e){const t=t=>n()(`${e}-${t}-01`).daysInMonth(),r=t=>`${e}-${t}-01 00:00`,o=r=>`${e}-${r}-${t(r)} 00:00`;return{Q1:{qtr:1,start:r("01"),end:o("03")},Q2:{qtr:2,start:r("04"),end:o("06")},Q3:{qtr:3,start:r("07"),end:o("09")},Q4:{qtr:4,start:r("10"),end:o("12")}}}static getQtrByDate(e){const t=this.getQuarterBounds(e.getFullYear());for(const r in t){const{start:o,end:a}=t[r];if(e>=new Date(o)&&e<=new Date(a))return t[r]}return null}static buildQtrObj(e,t){const r=this.getQuarterBounds(t),{start:o,end:a}=r[e];return{start:o,end:a,name:`${e} ${t}`}}static getReportQuarters(e=5){const t=[];let r=new Date,o=r.getFullYear();const a=o;r=new Date(`${a}-${r.getMonth()+1}-${r.getDate()} 00:00`);const s=this.getQtrByDate(r);let i=s.qtr,n=0;4===i&&t.push(this.buildQtrObj("Q1",o+1));while(n<e)0===n&&i<4&&t.push(this.buildQtrObj("Q"+(i+1),o)),t.push(this.buildQtrObj("Q"+i,o)),i=i>0?i-=1:i,o=0==i?o-1:o,i=0==i?i+=4:i,n++;return t}}},7666:function(e,t,r){"use strict";r.r(t);var o=r("7a23");function a(e,t,r,a,s,i){const n=Object(o["resolveComponent"])("report-template"),c=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(c,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{title:e.title,rows:e.rows,fields:e.fields,columns:e.columns,period:e.period,onReportConfiguration:e.init,customBtns:e.customBtns},null,8,["title","rows","fields","columns","period","onReportConfiguration","customBtns"])]),_:1})}r("14d9");var s=r("fcd5"),i=r("552a"),n=r("9ceb"),c=r("44e3"),l=r("2ef0"),d=r("d867"),p=Object(o["defineComponent"])({components:{ReportTemplate:i["a"],IonPage:d["D"]},mixins:[c["a"]],data:()=>({title:"Lumefantrine + Arthemether Report",rows:[],reportService:{},prescriptions:{},columns:[[n["a"].thTxt("Types of LA"),n["a"].thTxt("Prescribed"),n["a"].thTxt("Dispensed")]],customBtns:[]}),created(){this.fields=this.getDateDurationFields(),this.customBtns.push({name:"Print",size:"large",slot:"start",color:"primary",visible:!0,onClick:async()=>this.reportService.printLaReport(this.prescriptions)})},methods:{async init(e,t){this.reportService=new s["d"],this.reportService.setStartDate(t.start_date),this.reportService.setEndDate(t.end_date),this.period=this.reportService.getDateIntervalPeriod(),this.prescriptions=await this.reportService.getLaPrescriptions(),this.rows=this.buildRows(this.prescriptions)},buildRows(e){return Object(l["isEmpty"])(e)?[]:Object.keys(s["a"]).map(t=>[n["a"].td(s["a"][t]),n["a"].td(e[`total_la_${t}_prescribed_drugs`]),n["a"].td(e[`total_la_${t}_dispensed_drugs`])])}}}),u=r("d959"),h=r.n(u);const m=h()(p,[["render",a]]);t["default"]=m},7920:function(e,t,r){"use strict";var o=r("7a23");function a(e,t,r,a,s,i){return Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var s=r("9441"),i=Object(o["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:s["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),n=r("d959"),c=r.n(n);const l=c()(i,[["render",a]]);t["a"]=l},c7b4:function(e,t,r){"use strict";r("4b65")},fcd5:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return d})),r.d(t,"d",(function(){return p}));var o=r("ade3"),a=(r("14d9"),r("1c74")),s=r("9283"),i=r("b89f"),n=r("bef6");const c={one:"AL 1",two:"AL 2",three:"AL 3",four:"LA 4"},l=["Diabetes","Hypertension","Stroke","Suspected cancer","Confirmed cancer","Palliative cancer","Asthma","Depression","Acute psychosis","Chronic psychosis","Epilepsy"],d=["Organic mental disorder (Chronic)","Organic mental disorder (acute)","Alcohol use mental disorder","Drug use mental disorder","Schizophrenia","Acute and transient psychotic disorder","Schizo-affective disorder","Mood-affective disorder (MANIC)","Mood-affective disorder (BIPOLAR)","Mood-affective disorder (DEPRESSION)","Anxiety disorder","Stress reaction adjustment disorder","Dissociative conversion disorder","Somatoform disorder","Puerperal mental disorder","Personality/Behaviour disorder","Mental retardation","Psychological mental disorder","Hyperkinetic conduct disorder","Epilepsy"];class p extends a["e"]{constructor(){super(),Object(o["a"])(this,"programID",void 0),Object(o["a"])(this,"startDate",void 0),Object(o["a"])(this,"endDate",void 0),Object(o["a"])(this,"date",void 0),Object(o["a"])(this,"epiweek",void 0),this.endDate="",this.startDate="",this.epiweek="",this.date=a["e"].getSessionDate(),this.programID=a["e"].getProgramID()}getPatientsWithNIDs(){return this.getReport("with_nids")}getClinicRegistrations(){return this.getReport("registration")}getAttendance(){return this.getReport(`programs/${this.programID}/reports/attendance`)}getDrugsGivenWithoutPrescription(){return this.getReport("drugs_given_without_prescription")}getDrugsGivenWithPrescription(){return this.getReport("drugs_given_with_prescription")}getDiagnosis(){const e=`programs/${this.programID}/reports/diagnosis`;return a["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate,date:this.date})}getDiagnosisByAddress(){return this.getReport("diagnosis_by_address")}getLaPrescriptions(){const e=`programs/${this.programID}/reports/la_prescriptions`;return a["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate})}printLaReport(e){const t=new i["a"],r=`programs/${this.programID}/barcodes/la_report`,o={"date[start]":this.startDate,"date[end]":this.endDate};return Object.keys(c).forEach((t,r)=>{r++,o[r+"[prescription]"]=e[`total_la_${t}_prescribed_drugs`],o[r+"[dispensed]"]=e[`total_la_${t}_dispensed_drugs`]}),t.printLbl(`${r}?${n["a"].parameterizeObjToString(o)}`)}getDateIntervalPeriod(){return`${s["b"].toStandardHisDisplayFormat(this.startDate)} - ${s["b"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setEpiWeek(e){this.epiweek=e}getReportPeriod(){return this.startDate&&this.endDate?`${s["b"].toStandardHisDisplayFormat(this.startDate)} - ${s["b"].toStandardHisDisplayFormat(this.endDate)}`:"-"}getReport(e,t={}){return a["e"].getJson(e,this.buildRequest(t))}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.epiweek&&(t["epiweek"]=this.epiweek),{...t,...e}}static getReportQuarters(e=4){const t=[];let r=s["b"].getCurrentYear();for(let o=0;o<e;++o)t.push({name:"Q4 "+r,start:r+"-10-01",end:r+"-12-31"}),t.push({name:"Q3 "+r,start:r+"-07-01",end:r+"-09-30"}),t.push({name:"Q2 "+r,start:r+"-04-01",end:r+"-06-30"}),t.push({name:"Q1 "+r,start:r+"-01-01",end:r+"-03-31"}),--r;return t}}}}]);
//# sourceMappingURL=chunk-5ea256d6.fed13587.js.map