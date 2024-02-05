(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9cfeeccc"],{"1ad6":function(e,t,a){"use strict";a("a002")},"3c87":function(e,t,a){"use strict";a.r(t);var o=a("7a23");function r(e,t,a,r,s,n){const i=Object(o["resolveComponent"])("report-template"),l=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(l,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{title:e.title,rows:e.rows,fields:e.fields,columns:e.columns,period:e.period,reportPrefix:"Clinic",onReportConfiguration:e.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])]),_:1})}var s=a("fcd5"),n=a("552a"),i=a("9ceb"),l=a("44e3"),c=a("d867"),d=Object(o["defineComponent"])({components:{ReportTemplate:n["a"],IonPage:c["IonPage"]},mixins:[l["a"]],data:()=>({title:"Mental health report",rows:[],reportService:{},columns:[[i["a"].thTxt("",{sortable:!1,exportable:!1}),i["a"].thTxt("New cases",{colspan:4,sortable:!1,exportable:!1}),i["a"].thTxt("Subsequent cases",{colspan:4,sortable:!1,exportable:!1})],[i["a"].thTxt("Diagnosis"),i["a"].thTxt("Male (0-15 years)",{value:"Males (0-15 years New Cases)"}),i["a"].thTxt("Male (>=16 years)",{value:"Males (>=16 years New Cases)"}),i["a"].thTxt("Female (0-15 years)",{value:"Females (0-15 years New Cases)"}),i["a"].thTxt("Female (>=16 years)",{value:"Females (>=16 years New Cases)"}),i["a"].thTxt("Male (0-15 years)",{value:"Males (0-15 years Subsequent Cases)"}),i["a"].thTxt("Male (>=16 years)",{value:"Males (>=16 years Subsequent Cases)"}),i["a"].thTxt("Female (0-15 years)",{value:"Females (0-15 years Subsequent Cases)"}),i["a"].thTxt("Female (>=16 years)",{value:"Females (>=16 years Subsequent Cases)"})]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(e,t){this.reportService=new s["d"],this.reportService.setStartDate(t.start_date),this.reportService.setEndDate(t.end_date),this.period=this.reportService.getDateIntervalPeriod(),this.rows=this.buildRows()},buildRows(){return s["b"].map(e=>[i["a"].td(e,{style:{textAlign:"left"}}),i["a"].td(""),i["a"].td(""),i["a"].td(""),i["a"].td(""),i["a"].td(""),i["a"].td(""),i["a"].td(""),i["a"].td("")])}}}),p=a("6b0d"),u=a.n(p);const h=u()(d,[["render",r]]);t["default"]=h},"44e3":function(e,t,a){"use strict";a("14d9");var o=a("1c74"),r=a("7a23"),s=a("b446"),n=a("23e6"),i=a("9283"),l=a("d867"),c=a("d6aa"),d=a("5969"),p=a("d95e"),u=a("2706"),h=a("9ceb"),m=a("2ef0"),b=a("8e8b"),g=a("3e53"),f=a("0011"),O=Object(r["defineComponent"])({data:()=>({app:g["a"].getActiveApp(),fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",isMilitarySite:!1,drillDownCache:{}}),methods:{formatGender(e){return Object(f["b"])(e)},toDate(e){return i["c"].toStandardHisDisplayFormat(e)},sortByArvNumber(e,t="arv_number"){try{return e.sort((e,a)=>this.getArvInt(e[t])>this.getArvInt(a[t])?1:-1)}catch(a){return console.error(a),e}},getArvInt(e){if("string"===typeof e){const t=e.split("-")[2],a=parseInt(t);return"number"===typeof a?a:0}return 0},tdARV(e,t={}){return h["a"].td(e,{sortValue:this.getArvInt(e),...t})},confirmPatient(e){return this.$router.push("/patients/confirm?person_id="+e)},async drilldownAsyncRows(e,t,a,o=!0){const r=await l["modalController"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:a,canExport:o,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["modalController"].dismiss()}});r.present()},async drilldownData(e,t,a,o){const r=await l["modalController"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:a,rowParser:o,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["modalController"].dismiss()}});r.present()},getDefaultDrillDownTable(){const e=[[h["a"].thTxt("ARV number"),h["a"].thTxt("Gender"),h["a"].thTxt("Birth Date"),h["a"].thTxt("Actions")]],t=async e=>{let t=0;const a=e.map(async e=>{let a=null,o=null;if(Object(m["isArray"])(e)){const[t,a]=e;if(o=t,a in this.drillDownCache)return[o,...this.drillDownCache[a].slice(1)]}else if(a=e,a in this.drillDownCache)return this.drillDownCache[a];const r=await n["a"].findByID(a),s=new n["a"](r),i=[];return o&&(t=1,i.push(o)),i.push(this.tdARV(s.getArvNumber())),i.push(h["a"].td(this.formatGender(s.getGender()))),i.push(h["a"].tdDate(s.getBirthdate().toString())),i.push(h["a"].tdBtn("Show",async()=>{await l["modalController"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+a})})),this.drillDownCache[a]=i,i}),o=await Promise.all(a);return o.sort((e,a)=>e[t].sortValue>a[t].sortValue?1:-1)};return{rowParser:t,columns:e}},runTableDrill(e,t="Drilldown patients"){const{columns:a,rowParser:o}=this.getDefaultDrillDownTable();this.drilldownData(t,a,e,o)},drill(e,t="Drill table"){return e&&e.length>0?h["a"].tdLink(e.length,()=>this.runTableDrill(e,t)):h["a"].td(0)},getQuaterOptions(){const e=d["a"].getReportQuarters();return e.map(e=>({label:e.name,value:e.start,other:e}))},getDateDurationFields(e=!1,t=!1,a=5,r=o["e"].getSessionDate()){const n="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:p["b"].TT_SELECT,condition:()=>e,validation:e=>u["a"].required(e),options:()=>{const e=d["a"].getReportQuarters(a);let o=e.map(e=>({label:e.name,value:e.start,other:e}));return t&&(o=[{label:"Set custom period",value:"custom_period",other:{}},...o]),o}},...Object(s["b"])({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,minDate:()=>n,maxDate:()=>r,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(s["b"])({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,unload:(e,t,a,o)=>{"next"===t&&(this.endDate=o.end_date)},minDate:(e,t)=>t.start_date,maxDate:()=>r,estimation:{allowUnknown:!1},computeValue:e=>e}),{id:"occupation",helpText:"Report Group",type:p["b"].TT_SELECT,init:async()=>(this.isMilitarySite=await b["a"].get("IS_MILITARY_SITE"),!0),computedValue:e=>e.value,condition:()=>{var e;return"ART"===(null===(e=this.app)||void 0===e?void 0:e.applicationName)&&this.isMilitarySite},validation:e=>u["a"].required(e),options:()=>[{label:"All",value:"All"},{label:"Military",value:"Military"},{label:"Civilian",value:"Civilian"}]}]}}});const y=O;t["a"]=y},"552a":function(e,t,a){"use strict";var o=a("7a23");const r=e=>(Object(o["pushScopeId"])("data-v-b87105ea"),e=e(),Object(o["popScopeId"])(),e),s={class:"header-text-list"},n={key:0},i=r(()=>Object(o["createElementVNode"])("template",null,null,-1)),l={class:"report-content"};function c(e,t,a,r,c,d){const p=Object(o["resolveComponent"])("his-standard-form"),u=Object(o["resolveComponent"])("ion-img"),h=Object(o["resolveComponent"])("ion-thumbnail"),m=Object(o["resolveComponent"])("ion-label"),b=Object(o["resolveComponent"])("report-filter"),g=Object(o["resolveComponent"])("ion-toolbar"),f=Object(o["resolveComponent"])("ion-header"),O=Object(o["resolveComponent"])("report-table"),y=Object(o["resolveComponent"])("ion-content"),w=Object(o["resolveComponent"])("pagination"),D=Object(o["resolveComponent"])("ion-chip"),j=Object(o["resolveComponent"])("ion-footer"),v=Object(o["resolveComponent"])("his-footer"),C=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["withDirectives"])(Object(o["createVNode"])(p,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[o["vShow"],e.showForm]]),e.showForm?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(C,{key:0},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(g,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,{slot:"start"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,{src:e.logo},null,8,["src"])]),_:1}),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>{var a;return[Object(o["createElementVNode"])("ul",s,[Object(o["createElementVNode"])("li",null,[Object(o["createTextVNode"])("Title "),Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(e.title),1)]),Object(o["createElementVNode"])("li",null,[Object(o["createTextVNode"])("Period "),Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(e.period),1)]),e.customInfo?(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",n,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.customInfo.label)+" ",1),Object(o["createElementVNode"])("b",null,["function"===typeof(null===(a=e.customInfo)||void 0===a||null===(a=a.other)||void 0===a?void 0:a.click)?(Object(o["openBlock"])(),Object(o["createElementBlock"])("a",{key:0,href:"#",onClick:t[0]||(t[0]=Object(o["withModifiers"])(t=>e.customInfo.other.click(),["prevent"]))},Object(o["toDisplayString"])(e.customInfo.value),1)):(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:1},[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.customInfo.value),1)],64))])])):Object(o["createCommentVNode"])("",!0),i])]}),_:1}),Object(o["createVNode"])(b,{slot:"end",showPerPageFilter:e.showFilters||e.paginated,disableSearchFilter:e.isTableLoading,disablePerPageFilter:e.isTableLoading,totalRowCount:e.tableRows.length,customFilter:e.customFilter,onOnItemsPerPage:t[1]||(t[1]=t=>e.itemsPerPage=t),onOnItemsVLtype:t[2]||(t[2]=t=>e.itemsVLtype=t),onOnSearchFilter:t[3]||(t[3]=t=>e.searchFilter=t)},null,8,["showPerPageFilter","disableSearchFilter","disablePerPageFilter","totalRowCount","customFilter"])]),_:1})]),_:1}),Object(o["createVNode"])(y,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",l,[Object(o["createVNode"])(O,{rows:e.rows,paginated:e.paginated,asyncRows:e.asyncRows,rowParser:e.rowParser,config:{...e.config,tableCssTheme:e.tableCssTheme},columns:e.columns,showFilters:e.showFilters,newPage:e.currentPage,searchFilter:e.searchFilter,rowsPerPage:e.itemsPerPage,onOnIsLoading:t[4]||(t[4]=t=>e.isTableLoading=t),onOnTableRows:t[5]||(t[5]=t=>e.tableRows=t),onOnPagination:t[6]||(t[6]=t=>e.totalPages=t.length),onOnActiveColumns:t[7]||(t[7]=t=>e.activeColumns=t),onOnActiveRows:t[8]||(t[8]=t=>e.activeRows=t)},null,8,["rows","paginated","asyncRows","rowParser","config","columns","showFilters","newPage","searchFilter","rowsPerPage"])])]),_:1}),Object(o["createVNode"])(j,null,{default:Object(o["withCtx"])(()=>[!e.searchFilter&&e.paginated||!e.searchFilter&&e.totalPages>0&&e.paginated?(Object(o["openBlock"])(),Object(o["createBlock"])(g,{key:0},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(w,{perPage:e.itemsPerPage,maxVisibleButtons:10,totalPages:e.totalPages,onOnChangePage:t[9]||(t[9]=t=>e.currentPage=t)},null,8,["perPage","totalPages"])]),_:1})):Object(o["createCommentVNode"])("",!0),e.showReportStamp?(Object(o["openBlock"])(),Object(o["createBlock"])(g,{key:1},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(D,{color:"primary"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Date Created: "),Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(e.date),1)]),_:1}),Object(o["createVNode"])(D,{color:"primary"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("His-Core Version: "),Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(o["createVNode"])(D,{color:"primary"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("API Version: "),Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1}),Object(o["createVNode"])(v,{color:e.footerColor,btns:e.btns},null,8,["color","btns"])]),_:1}))],64)}a("14d9");var d=a("0f25"),p=a("80e3"),u=a("ba82"),h=a("9ceb"),m=a("7920"),b=a("d867"),g=a("1c74"),f=a("9283"),O=a("2f2a"),y=a("1799"),w=a("b5e4"),D=a("7f35"),j=a("0011"),v=Object(o["defineComponent"])({components:{HisStandardForm:m["a"],IonHeader:b["IonHeader"],ReportTable:p["a"],HisFooter:d["a"],IonPage:b["IonPage"],IonContent:b["IonContent"],IonToolbar:b["IonToolbar"],Pagination:y["a"],ReportFilter:O["a"],IonFooter:b["IonFooter"],IonChip:b["IonChip"],IonLabel:b["IonLabel"]},props:{title:{type:String,required:!0},customFilter:{type:Function},period:{type:String,default:""},encryptPDF:{type:Boolean,default:!1},config:{type:Object},fields:{type:Array,default:()=>[]},columns:{type:Array,required:!0},rows:{type:Array,required:!0},paginated:{type:Boolean,default:!1},customBtns:{type:Array,default:()=>[]},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},onReportConfiguration:{type:Function,required:!1},rowParser:{type:Function},showFilters:{type:Boolean,default:!1},showVLFilter:{type:Boolean,default:!1},rowsPerPage:{type:Number},asyncRows:{type:Function},footerColor:{type:String,default:"dark"},customFileName:{type:String,default:""},canExport:{type:Boolean,default:!0},showReportStamp:{type:Boolean,default:!0},customInfo:{type:Object},reportPrefix:{type:String,default:""}},data:()=>({formData:{},computeFormData:{},btns:[],isLoadingData:!1,showForm:!1,logo:"/assets/images/login-logos/Malawi-Coat_of_arms_of_arms.png",isTableLoading:!1,searchFilter:"",itemsPerPage:50,itemsVLtype:"",currentPage:0,tableRows:[],totalPages:0,activeColumns:[],activeRows:[],date:f["c"].toStandardHisDisplayFormat(g["e"].getSessionDate()),apiVersion:g["e"].getApiVersion(),coreVersion:g["e"].getCoreVersion(),siteUUID:g["e"].getSiteUUID(),tableCssTheme:"opd-report-theme"}),methods:{getFileName(){var e,t;return`${null!==(e=this.reportPrefix)&&void 0!==e?e:""} ${g["e"].getLocationName()} ${Object(j["g"])(this.title).replace(this.reportPrefix,"")} ${null!==(t=this.period)&&void 0!==t?t:this.date}`},pdfEncryptionData(){const e=g["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}},async onFinish(e,t){this.formData=e,this.computeFormData=t,this.showForm=!1,await this.presentLoading();try{this.onReportConfiguration&&await this.onReportConfiguration(this.formData,this.computeFormData),b["loadingController"].dismiss()}catch(a){console.error(a),Object(w["c"])(""+a),b["loadingController"].dismiss()}},async reloadReport(){await this.onFinish(this.formData,this.computeFormData)},async presentLoading(){const e=await b["loadingController"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.showForm=!!this.fields.length,this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(h["b"])(this.columns,this.rows,"csvMode");Object(u["a"])(e,[...t,["Date Created: "+this.date],["Period: "+this.period],["HIS-Core Version: "+this.coreVersion],["API Version: "+this.apiVersion],["Site UUID: "+this.siteUUID]],this.getFileName())}},{name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{let e="pdfMode";if(this.encryptPDF){const t=await Object(D["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");e="Secure PDF"===t?"pdfMode":"ignorePDFColumnexport"}const{columns:t,rows:a}=Object(h["b"])(this.activeColumns,this.activeRows,e);Object(u["c"])(t,a,this.getFileName(),!1,this.encryptPDF&&"ignorePDFColumnexport"!=e?this.pdfEncryptionData():{})}},{name:"Back",size:"large",slot:"end",color:"primary",visible:!0,onClick:()=>this.showForm=!0},{name:"Refresh",size:"large",slot:"end",color:"warning",visible:!0,onClick:()=>this.reloadReport()},{name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>this.$router.push({path:"/"})})}}),C=(a("1ad6"),a("6b0d")),F=a.n(C);const P=F()(v,[["render",c],["__scopeId","data-v-b87105ea"]]);t["a"]=P},7920:function(e,t,a){"use strict";var o=a("7a23");function r(e,t,a,r,s,n){return Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var s=a("9441"),n=Object(o["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:s["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),i=a("6b0d"),l=a.n(i);const c=l()(n,[["render",r]]);t["a"]=c},a002:function(e,t,a){},fcd5:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return p}));var o=a("ade3"),r=(a("14d9"),a("1c74")),s=a("9283"),n=a("b89f"),i=a("bef6");const l={one:"AL 1",two:"AL 2",three:"AL 3",four:"LA 4"},c=["Diabetes","Hypertension","Stroke","Suspected cancer","Confirmed cancer","Palliative cancer","Asthma","Depression","Acute psychosis","Chronic psychosis","Epilepsy"],d=["Organic mental disorder (Chronic)","Organic mental disorder (acute)","Alcohol use mental disorder","Drug use mental disorder","Schizophrenia","Acute and transient psychotic disorder","Schizo-affective disorder","Mood-affective disorder (MANIC)","Mood-affective disorder (BIPOLAR)","Mood-affective disorder (DEPRESSION)","Anxiety disorder","Stress reaction adjustment disorder","Dissociative conversion disorder","Somatoform disorder","Puerperal mental disorder","Personality/Behaviour disorder","Mental retardation","Psychological mental disorder","Hyperkinetic conduct disorder","Epilepsy"];class p extends r["e"]{constructor(){super(),Object(o["a"])(this,"programID",void 0),Object(o["a"])(this,"startDate",void 0),Object(o["a"])(this,"endDate",void 0),Object(o["a"])(this,"date",void 0),Object(o["a"])(this,"epiweek",void 0),this.endDate="",this.startDate="",this.epiweek="",this.date=r["e"].getSessionDate(),this.programID=r["e"].getProgramID()}getPatientsWithNIDs(){return this.getReport("with_nids")}getClinicRegistrations(){return this.getReport("registration")}getAttendance(){return this.getReport(`programs/${this.programID}/reports/attendance`)}getDrugs(){const e=`programs/${this.programID}/reports/drug`;return r["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate,date:this.date})}getDiagnosis(){const e=`programs/${this.programID}/reports/diagnosis`;return r["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate,date:this.date})}getDiagnosisByAddress(){return this.getReport("diagnosis_by_address")}getLaPrescriptions(){const e=`programs/${this.programID}/reports/la_prescriptions`;return r["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate})}getMalariaReport(){const e=`programs/${this.programID}/reports/malaria_report`;return r["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate,date:this.date})}printLaReport(e){const t=new n["a"],a=`programs/${this.programID}/barcodes/la_report`,o={"date[start]":this.startDate,"date[end]":this.endDate};return Object.keys(l).forEach((t,a)=>{a++,o[a+"[prescription]"]=e[`total_la_${t}_prescribed_drugs`],o[a+"[dispensed]"]=e[`total_la_${t}_dispensed_drugs`]}),t.printLbl(`${a}?${i["a"].parameterizeObjToString(o)}`)}getDateIntervalPeriod(){return`${s["c"].toStandardHisDisplayFormat(this.startDate)} - ${s["c"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setEpiWeek(e){this.epiweek=e}getReportPeriod(){return this.startDate&&this.endDate?`${s["c"].toStandardHisDisplayFormat(this.startDate)} - ${s["c"].toStandardHisDisplayFormat(this.endDate)}`:"-"}getReport(e,t={}){return r["e"].getJson(e,this.buildRequest(t))}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.epiweek&&(t["epiweek"]=this.epiweek),{...t,...e}}static getReportQuarters(e=4){const t=[];let a=s["c"].getCurrentYear();for(let o=0;o<e;++o)t.push({name:"Q4 "+a,start:a+"-10-01",end:a+"-12-31"}),t.push({name:"Q3 "+a,start:a+"-07-01",end:a+"-09-30"}),t.push({name:"Q2 "+a,start:a+"-04-01",end:a+"-06-30"}),t.push({name:"Q1 "+a,start:a+"-01-01",end:a+"-03-31"}),--a;return t}}}}]);
//# sourceMappingURL=chunk-9cfeeccc.c010642a.js.map