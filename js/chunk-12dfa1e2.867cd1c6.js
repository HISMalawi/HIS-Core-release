(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12dfa1e2"],{4390:function(e,t,r){},"44e3":function(e,t,r){"use strict";var o=r("1c74"),a=r("7a23"),s=r("b446"),n=r("23e6"),i=r("9283"),c=r("8a30"),l=r("d6aa"),d=r("5969"),u=r("d95e"),p=r("2706"),h=r("9ceb"),m=r("2ef0"),b=Object(a["defineComponent"])({data:()=>({fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",drillDownCache:{}}),methods:{formatGender(e){return"M"===e||"male"===e.toLowerCase()?"Male":"Female"},toDate(e){return i["b"].toStandardHisDisplayFormat(e)},sortByArvNumber(e,t="arv_number"){try{return e.sort((e,r)=>this.getArvInt(e[t])>this.getArvInt(r[t])?1:-1)}catch(r){return console.error(r),e}},getArvInt(e){if("string"===typeof e){const[t,r,o]=e.split("-"),a=parseInt(o);return"number"===typeof a?a:0}return 0},tdARV(e,t={}){return h["a"].td(e,{sortValue:this.getArvInt(e),...t})},confirmPatient(e){return this.$router.push("/patients/confirm?person_id="+e)},async drilldownAsyncRows(e,t,r,o=!0){const a=await c["Z"].create({component:l["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:r,canExport:o,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>c["Z"].dismiss()}});a.present()},async drilldownData(e,t,r,o){const a=await c["Z"].create({component:l["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:r,rowParser:o,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>c["Z"].dismiss()}});a.present()},getDefaultDrillDownTable(){const e=[[h["a"].thTxt("ARV number"),h["a"].thTxt("Gender"),h["a"].thTxt("Birth Date"),h["a"].thTxt("Actions")]],t=async e=>{let t=0;const r=e.map(async e=>{let r=null,o=null;if(Object(m["isArray"])(e)){const[t,r]=e;if(o=t,r in this.drillDownCache){const[e,...t]=this.drillDownCache[r];return[o,...t]}}else if(r=e,r in this.drillDownCache)return this.drillDownCache[r];const a=await n["a"].findByID(r),s=new n["a"](a),i=[];return o&&(t=1,i.push(o)),i.push(this.tdARV(s.getArvNumber())),i.push(h["a"].td(this.formatGender(s.getGender()))),i.push(h["a"].tdDate(s.getBirthdate().toString())),i.push(h["a"].tdBtn("Show",async()=>{await c["Z"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+r})})),this.drillDownCache[r]=i,i}),o=await Promise.all(r);return o.sort((e,r)=>e[t].sortValue>r[t].sortValue?1:-1)};return{rowParser:t,columns:e}},runTableDrill(e,t="Drilldown patients"){const{columns:r,rowParser:o}=this.getDefaultDrillDownTable();this.drilldownData(t,r,e,o)},drill(e,t="Drill table"){return e&&e.length>0?h["a"].tdLink(e.length,()=>this.runTableDrill(e,t)):h["a"].td(0)},getQuaterOptions(){const e=d["a"].getReportQuarters();return e.map(e=>({label:e.name,value:e.start,other:e}))},getDateDurationFields(e=!1,t=!1,r=5,a=o["e"].getSessionDate()){const n="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:u["b"].TT_SELECT,condition:()=>e,validation:e=>p["a"].required(e),options:()=>{const e=d["a"].getReportQuarters(r);let o=e.map(e=>({label:e.name,value:e.start,other:e}));return t&&(o=[{label:"Set custom period",value:"custom_period",other:{}},...o]),o}},...Object(s["b"])({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,minDate:()=>n,maxDate:()=>a,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(s["b"])({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,unload:(e,t,r,o)=>{"next"===t&&(this.endDate=o.end_date)},minDate:(e,t)=>t.start_date,maxDate:()=>a,estimation:{allowUnknown:!1},computeValue:e=>e})]}}});const g=b;t["a"]=g},"552a":function(e,t,r){"use strict";var o=r("7a23");const a=Object(o["withScopeId"])("data-v-71037ce6");Object(o["pushScopeId"])("data-v-71037ce6");const s={class:"header-text-list"},n=Object(o["createTextVNode"])("Title "),i=Object(o["createTextVNode"])("Period "),c={key:0},l={class:"report-content"},d=Object(o["createTextVNode"])("Date Created: "),u=Object(o["createTextVNode"])("His-Core Version: "),p=Object(o["createTextVNode"])("API Version: ");Object(o["popScopeId"])();const h=a((function(e,t,r,h,m,b){const g=Object(o["resolveComponent"])("his-standard-form"),D=Object(o["resolveComponent"])("ion-img"),f=Object(o["resolveComponent"])("ion-thumbnail"),O=Object(o["resolveComponent"])("ion-label"),w=Object(o["resolveComponent"])("report-filter"),j=Object(o["resolveComponent"])("ion-toolbar"),y=Object(o["resolveComponent"])("ion-header"),P=Object(o["resolveComponent"])("report-table"),v=Object(o["resolveComponent"])("ion-content"),F=Object(o["resolveComponent"])("pagination"),C=Object(o["resolveComponent"])("ion-chip"),S=Object(o["resolveComponent"])("ion-footer"),_=Object(o["resolveComponent"])("his-footer"),V=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["withDirectives"])(Object(o["createVNode"])(g,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[o["vShow"],e.showForm]]),e.showForm?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(V,{key:0},{default:a(()=>[Object(o["createVNode"])(y,null,{default:a(()=>[Object(o["createVNode"])(j,null,{default:a(()=>[Object(o["createVNode"])(f,{slot:"start"},{default:a(()=>[Object(o["createVNode"])(D,{src:e.logo},null,8,["src"])]),_:1}),Object(o["createVNode"])(O,null,{default:a(()=>[Object(o["createVNode"])("ul",s,[Object(o["createVNode"])("li",null,[n,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.title),1)]),Object(o["createVNode"])("li",null,[i,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.period),1)]),e.customInfo?(Object(o["openBlock"])(),Object(o["createBlock"])("li",c,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.customInfo.label)+" ",1),Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.customInfo.value),1)])):Object(o["createCommentVNode"])("",!0)])]),_:1}),Object(o["createVNode"])(w,{slot:"end",showPerPageFilter:e.showFilters||e.paginated,disableSearchFilter:e.isTableLoading,disablePerPageFilter:e.isTableLoading,totalRowCount:e.tableRows.length,onOnItemsPerPage:t[1]||(t[1]=t=>e.itemsPerPage=t),onOnSearchFilter:t[2]||(t[2]=t=>e.searchFilter=t)},null,8,["showPerPageFilter","disableSearchFilter","disablePerPageFilter","totalRowCount"])]),_:1})]),_:1}),Object(o["createVNode"])(v,null,{default:a(()=>[Object(o["createVNode"])("div",l,[Object(o["createVNode"])(P,{rows:e.rows,paginated:e.paginated,asyncRows:e.asyncRows,rowParser:e.rowParser,config:{...e.config,tableCssTheme:e.tableCssTheme},columns:e.columns,showFilters:e.showFilters,newPage:e.currentPage,searchFilter:e.searchFilter,rowsPerPage:e.itemsPerPage,onOnIsLoading:t[3]||(t[3]=t=>e.isTableLoading=t),onOnTableRows:t[4]||(t[4]=t=>e.tableRows=t),onOnPagination:t[5]||(t[5]=t=>e.totalPages=t.length),onOnActiveColumns:t[6]||(t[6]=t=>e.activeColumns=t),onOnActiveRows:t[7]||(t[7]=t=>e.activeRows=t)},null,8,["rows","paginated","asyncRows","rowParser","config","columns","showFilters","newPage","searchFilter","rowsPerPage"])])]),_:1}),Object(o["createVNode"])(S,null,{default:a(()=>[!e.searchFilter&&e.paginated||!e.searchFilter&&e.totalPages>0&&e.paginated?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:0},{default:a(()=>[Object(o["createVNode"])(F,{perPage:e.itemsPerPage,maxVisibleButtons:10,totalPages:e.totalPages,onOnChangePage:t[8]||(t[8]=t=>e.currentPage=t)},null,8,["perPage","totalPages"])]),_:1})):Object(o["createCommentVNode"])("",!0),e.showReportStamp?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:1},{default:a(()=>[Object(o["createVNode"])(C,{color:"primary"},{default:a(()=>[d,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.date),1)]),_:1}),Object(o["createVNode"])(C,{color:"primary"},{default:a(()=>[u,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(o["createVNode"])(C,{color:"primary"},{default:a(()=>[p,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1}),Object(o["createVNode"])(_,{color:e.footerColor,btns:e.btns},null,8,["color","btns"])]),_:1}))],64)}));var m=r("0f25"),b=r("80e3"),g=r("ba82"),D=r("9ceb"),f=r("7920"),O=r("8a30"),w=r("1c74"),j=r("9283"),y=r("2f2a"),P=r("1799"),v=r("b5e4"),F=Object(o["defineComponent"])({components:{HisStandardForm:f["a"],IonHeader:O["q"],ReportTable:b["a"],HisFooter:m["a"],IonPage:O["D"],IonContent:O["n"],IonToolbar:O["S"],Pagination:P["a"],ReportFilter:y["a"],IonFooter:O["o"],IonChip:O["l"],IonLabel:O["x"]},props:{title:{type:String,required:!0},period:{type:String,default:""},config:{type:Object},fields:{type:Object,default:()=>[]},columns:{type:Object,required:!0},rows:{type:Object,required:!0},paginated:{type:Boolean,default:!1},customBtns:{type:Array,default:()=>[]},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},onReportConfiguration:{type:Function,required:!1},rowParser:{type:Function},showFilters:{type:Boolean,default:!1},rowsPerPage:{type:Number},asyncRows:{type:Function},footerColor:{type:String,default:"dark"},customFileName:{type:String,default:""},canExport:{type:Boolean,default:!0},showReportStamp:{type:Boolean,default:!0},customInfo:{type:Object}},data:()=>({formData:{},computeFormData:{},btns:[],isLoadingData:!1,showForm:!1,logo:"/assets/images/login-logos/Malawi-Coat_of_arms_of_arms.png",isTableLoading:!1,searchFilter:"",itemsPerPage:50,currentPage:0,tableRows:[],totalPages:0,activeColumns:[],activeRows:[],date:j["b"].toStandardHisDisplayFormat(w["e"].getSessionDate()),apiVersion:w["e"].getApiVersion(),coreVersion:w["e"].getCoreVersion(),siteUUID:w["e"].getSiteUUID(),tableCssTheme:"opd-report-theme"}),methods:{getFileName(){return`${w["e"].getLocationName()} ${this.title} ${this.period}`},async onFinish(e,t){this.formData=e,this.computeFormData=t,this.showForm=!1,await this.presentLoading();try{this.onReportConfiguration&&await this.onReportConfiguration(this.formData,this.computeFormData),O["X"].dismiss()}catch(r){console.error(r),Object(v["c"])(""+r),O["X"].dismiss()}},async reloadReport(){await this.onFinish(this.formData,this.computeFormData)},async presentLoading(){const e=await O["X"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.showForm=!!this.fields.length,this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(D["b"])(this.columns,this.rows);Object(g["a"])(e,[...t,["Date Created: "+this.date],["Period: "+this.period],["HIS-Core Version: "+this.coreVersion],["API Version: "+this.apiVersion],["Site UUID: "+this.siteUUID]],this.getFileName())}},{name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{const{columns:e,rows:t}=Object(D["b"])(this.columns,this.rows);Object(g["c"])(e,t,this.getFileName())}},{name:"Back",size:"large",slot:"end",color:"primary",visible:!0,onClick:()=>this.showForm=!0},{name:"Refresh",size:"large",slot:"end",color:"warning",visible:!0,onClick:()=>this.reloadReport()},{name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>this.$router.push({path:"/"})})}}),C=(r("b39e"),r("d959")),S=r.n(C);const _=S()(F,[["render",h],["__scopeId","data-v-71037ce6"]]);t["a"]=_},5969:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("1c74"),a=r("9283"),s=r("5a0c"),n=r.n(s);class i extends o["e"]{constructor(){super(),this.endDate="",this.startDate="",this.quarter="",this.date=o["e"].getSessionDate(),this.programID=o["e"].getProgramID()}getDateIntervalPeriod(){return`${a["b"].toStandardHisDisplayFormat(this.startDate)} - ${a["b"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setQuarter(e){this.quarter=e}getReport(e,t={}){return o["e"].getJson(e,this.buildRequest(t))}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.quarter&&(t["quarter"]=this.quarter),{...t,...e}}static getQuarterBounds(e){const t=t=>n()(`${e}-${t}-01`).daysInMonth(),r=t=>`${e}-${t}-01 00:00`,o=r=>`${e}-${r}-${t(r)} 00:00`;return{Q1:{qtr:1,start:r("01"),end:o("03")},Q2:{qtr:2,start:r("04"),end:o("06")},Q3:{qtr:3,start:r("07"),end:o("09")},Q4:{qtr:4,start:r("10"),end:o("12")}}}static getQtrByDate(e){const t=this.getQuarterBounds(e.getFullYear());for(const r in t){const{start:o,end:a}=t[r];if(e>=new Date(o)&&e<=new Date(a))return t[r]}return null}static buildQtrObj(e,t){const r=this.getQuarterBounds(t),{start:o,end:a}=r[e];return{start:o,end:a,name:`${e} ${t}`}}static getReportQuarters(e=5){const t=[];let r=new Date,o=r.getFullYear();const a=o;r=new Date(`${a}-${r.getMonth()+1}-${r.getDate()} 00:00`);const s=this.getQtrByDate(r);let n=s.qtr,i=0;4===n&&t.push(this.buildQtrObj("Q1",o+1));while(i<e)0===i&&n<4&&t.push(this.buildQtrObj("Q"+(n+1),o)),t.push(this.buildQtrObj("Q"+n,o)),n=n>0?n-=1:n,o=0==n?o-1:o,n=0==n?n+=4:n,i++;return t}}},7920:function(e,t,r){"use strict";var o=r("7a23");function a(e,t,r,a,s,n){return Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,8,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var s=r("9441"),n=Object(o["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:s["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),i=r("d959"),c=r.n(i);const l=c()(n,[["render",a]]);t["a"]=l},b39e:function(e,t,r){"use strict";r("4390")},e4c1:function(e,t,r){"use strict";r.r(t);var o=r("7a23");function a(e,t,r,a,s,n){const i=Object(o["resolveComponent"])("report-template"),c=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(c,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{title:e.title,rows:e.rows,fields:e.fields,columns:e.columns,period:e.period,onReportConfiguration:e.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])]),_:1})}r("13d5");var s=r("fcd5"),n=r("552a"),i=r("9ceb"),c=r("44e3"),l=r("2ef0"),d=r("8a30"),u=Object(o["defineComponent"])({components:{ReportTemplate:n["a"],IonPage:d["D"]},mixins:[c["a"]],data:()=>({title:"OPD diagnosis by address report",rows:[],reportService:{},columns:[[i["a"].thTxt("Address"),i["a"].thTxt("Diagnosis"),i["a"].thTxt("Count")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(e,t){this.reportService=new s["d"],this.reportService.setStartDate(t.start_date),this.reportService.setEndDate(t.end_date),this.period=this.reportService.getDateIntervalPeriod(),this.rows=this.buildRows(await this.reportService.getDiagnosisByAddress())},totalDiagnosis(e){return Object.values(e).reduce((e,t)=>e+t,0)},buildRows(e){const t=[];if(Object(l["isEmpty"])(e))return t;for(const r in e)for(const o in e[r])t.push([i["a"].td(o),i["a"].td(r),i["a"].td(e[r][o])]);return t}}}),p=r("d959"),h=r.n(p);const m=h()(u,[["render",a]]);t["default"]=m},fcd5:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return c})),r.d(t,"b",(function(){return l})),r.d(t,"d",(function(){return d}));var o=r("1c74"),a=r("9283"),s=r("b89f"),n=r("bef6");const i={one:"AL 1",two:"AL 2",three:"AL 3",four:"LA 4"},c=["Diabetes","Hypertension","Stroke","Suspected cancer","Confirmed cancer","Palliative cancer","Asthma","Depression","Acute psychosis","Chronic psychosis","Epilepsy"],l=["Organic mental disorder (Chronic)","Organic mental disorder (acute)","Alcohol use mental disorder","Drug use mental disorder","Schizophrenia","Acute and transient psychotic disorder","Schizo-affective disorder","Mood-affective disorder (MANIC)","Mood-affective disorder (BIPOLAR)","Mood-affective disorder (DEPRESSION)","Anxiety disorder","Stress reaction adjustment disorder","Dissociative conversion disorder","Somatoform disorder","Puerperal mental disorder","Personality/Behaviour disorder","Mental retardation","Psychological mental disorder","Hyperkinetic conduct disorder","Epilepsy"];class d extends o["e"]{constructor(){super(),this.endDate="",this.startDate="",this.epiweek="",this.date=o["e"].getSessionDate(),this.programID=o["e"].getProgramID()}getPatientsWithNIDs(){return this.getReport("with_nids")}getClinicRegistrations(){return this.getReport("registration")}getAttendance(){return this.getReport(`programs/${this.programID}/reports/attendance`)}getDrugsGivenWithoutPrescription(){return this.getReport("drugs_given_without_prescription")}getDrugsGivenWithPrescription(){return this.getReport("drugs_given_with_prescription")}getDiagnosis(){const e=`programs/${this.programID}/reports/diagnosis`;return o["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate,date:this.date})}getDiagnosisByAddress(){return this.getReport("diagnosis_by_address")}getLaPrescriptions(){const e=`programs/${this.programID}/reports/la_prescriptions`;return o["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate})}printLaReport(e){const t=new s["a"],r=`programs/${this.programID}/barcodes/la_report`,o={"date[start]":this.startDate,"date[end]":this.endDate};return Object.keys(i).forEach((t,r)=>{r++,o[r+"[prescription]"]=e[`total_la_${t}_prescribed_drugs`],o[r+"[dispensed]"]=e[`total_la_${t}_dispensed_drugs`]}),t.printLbl(`${r}?${n["a"].parameterizeObjToString(o)}`)}getDateIntervalPeriod(){return`${a["b"].toStandardHisDisplayFormat(this.startDate)} - ${a["b"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setEpiWeek(e){this.epiweek=e}getReportPeriod(){return this.startDate&&this.endDate?`${a["b"].toStandardHisDisplayFormat(this.startDate)} - ${a["b"].toStandardHisDisplayFormat(this.endDate)}`:"-"}getReport(e,t={}){return o["e"].getJson(e,this.buildRequest(t))}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.epiweek&&(t["epiweek"]=this.epiweek),{...t,...e}}static getReportQuarters(e=4){const t=[];let r=a["b"].getCurrentYear();for(let o=0;o<e;++o)t.push({name:"Q4 "+r,start:r+"-10-01",end:r+"-12-31"}),t.push({name:"Q3 "+r,start:r+"-07-01",end:r+"-09-30"}),t.push({name:"Q2 "+r,start:r+"-04-01",end:r+"-06-30"}),t.push({name:"Q1 "+r,start:r+"-01-01",end:r+"-03-31"}),--r;return t}}}}]);
//# sourceMappingURL=chunk-12dfa1e2.867cd1c6.js.map