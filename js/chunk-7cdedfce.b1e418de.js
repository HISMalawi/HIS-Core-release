(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cdedfce"],{"095f":function(e,t,o){},"15ab":function(e,t,o){"use strict";o.r(t);var a=o("7a23");function r(e,t,o,r,s,n){const i=Object(a["resolveComponent"])("report-template"),l=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createBlock"])(l,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{title:e.title,rows:e.rows,fields:e.fields,columns:e.columns,period:e.period,customInfo:e.customInfo,onReportConfiguration:e.init},null,8,["title","rows","fields","columns","period","customInfo","onReportConfiguration"])]),_:1})}o("13d5");var s=o("fcd5"),n=o("552a"),i=o("9ceb"),l=o("44e3"),c=o("2ef0"),d=o("8a30"),u=o("23e6"),h=Object(a["defineComponent"])({components:{ReportTemplate:n["a"],IonPage:d["D"]},mixins:[l["a"]],data:()=>({title:"OPD Diagnosis",rows:[],reportService:{},customInfo:{label:"Total OPD Visits",value:0},columns:[[i["a"].thTxt("Age Groups",{sortable:!1,exportable:!1}),i["a"].thTxt("<6 months",{colspan:2,sortable:!1,exportable:!1}),i["a"].thTxt("6 months < 5 yrs",{colspan:2,sortable:!1,exportable:!1}),i["a"].thTxt("5 yrs < 14 yrs",{colspan:2,sortable:!1,exportable:!1}),i["a"].thTxt("> 14 yrs",{colspan:2,sortable:!1,exportable:!1}),i["a"].thTxt("",{sortable:!1,exportable:!1})],[i["a"].thTxt("Diagnosis"),i["a"].thTxt("F",{value:"Females <6 months"}),i["a"].thTxt("M",{value:"Males <6 months"}),i["a"].thTxt("F",{value:"Females 6 months < 5 yrs"}),i["a"].thTxt("M",{value:"Males 6 months < 5 yrs"}),i["a"].thTxt("F",{value:"Females 5 yrs < 14 yrs"}),i["a"].thTxt("M",{value:"Males 5 yrs < 14 yrs"}),i["a"].thTxt("F",{value:"Females > 14 yrs"}),i["a"].thTxt("M",{value:"Males > 14 yrs"}),i["a"].thTxt("Total")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(e,t){this.reportService=new s["d"],this.reportService.setStartDate(t.start_date),this.reportService.setEndDate(t.end_date),this.period=this.reportService.getDateIntervalPeriod(),this.rows=this.buildRows(await this.reportService.getDiagnosis())},totalDiagnosis(e){return Object.values(e).reduce((e,t)=>e+t,0)},getDrillDownColumns(){return[[i["a"].thTxt("Patient ID"),i["a"].thTxt("First Name"),i["a"].thTxt("Last Name"),i["a"].thTxt("Gender"),i["a"].thTxt("Phone Number"),i["a"].thTxt("Address")]]},buildColumn(e,t="Drilldown Data"){return Object(c["isEmpty"])(e)?i["a"].td(0):i["a"].tdLink(e.length,async()=>this.drilldownData(t,this.getDrillDownColumns(),e,async e=>await Promise.all(e.map(async e=>{const t=await u["a"].findByID(e),o=new u["a"](t);return[i["a"].td(e),i["a"].td(o.getGivenName()),i["a"].td(o.getFamilyName()),i["a"].td(o.getGender()),i["a"].td(o.getPhoneNumber()),i["a"].td(`${o.getCurrentDistrict()}, ${o.getCurrentVillage()}, ${o.getClosestLandmark()}`)]}))))},buildRows(e){if(Object(c["isEmpty"])(e))return[];const t=[];return Object.keys(e).forEach(o=>{const a=Object(c["get"])(e[o],"F.0-5 months",[]),r=Object(c["get"])(e[o],"M.0-5 months",[]),s=Object(c["get"])(e[o],"F.6 mth < 5 yrs",[]),n=Object(c["get"])(e[o],"M.6 mth < 5 yrs",[]),l=Object(c["get"])(e[o],"F.5-14 yrs",[]),d=Object(c["get"])(e[o],"M.5-14 yrs",[]),u=Object(c["get"])(e[o],"F.>= 14 years",[]),h=Object(c["get"])(e[o],"M.>= 14 years",[]);this.customInfo.value+=s.length+n.length,this.customInfo.value+=a.length+r.length,this.customInfo.value+=l.length+d.length,this.customInfo.value+=u.length+h.length,t.push([i["a"].td(o,{style:{textAlign:"left"}}),this.buildColumn(a,"under 6 months females diagnosed with "+o),this.buildColumn(r,"under 6 months males diagnosed with "+o),this.buildColumn(s,"under 5 years females diagnosed with "+o),this.buildColumn(n,"under 5 years males diagnosed with "+o),this.buildColumn(l,"under 14 years females diagnosed with "+o),this.buildColumn(d,"under 14 years males diagnosed with "+o),this.buildColumn(u,"over 14 years females diagnosed with "+o),this.buildColumn(h,"over 14 years males diagnosed with "+o),this.buildColumn([...s,...n,...a,...r,...l,...d,...u,...h],"Total diagnosed with "+o)])}),t.sort((e,t)=>e[0].td<t[0].td?-1:e[0].td>t[0].td?1:0)}}}),p=o("6b0d"),b=o.n(p);const m=b()(h,[["render",r]]);t["default"]=m},"552a":function(e,t,o){"use strict";var a=o("7a23");const r=Object(a["withScopeId"])("data-v-2d48b9a4");Object(a["pushScopeId"])("data-v-2d48b9a4");const s=Object(a["createVNode"])("b",null,"Title",-1),n=Object(a["createVNode"])("b",null,"Period",-1),i={class:"report-content"},l=Object(a["createTextVNode"])("Date Created: "),c=Object(a["createTextVNode"])("His-Core Version: "),d=Object(a["createTextVNode"])("API Version: ");Object(a["popScopeId"])();const u=r((function(e,t,o,u,h,p){const b=Object(a["resolveComponent"])("his-standard-form"),m=Object(a["resolveComponent"])("ion-col"),g=Object(a["resolveComponent"])("ion-row"),f=Object(a["resolveComponent"])("ion-toolbar"),O=Object(a["resolveComponent"])("report-filter"),j=Object(a["resolveComponent"])("ion-header"),y=Object(a["resolveComponent"])("report-table"),w=Object(a["resolveComponent"])("ion-content"),D=Object(a["resolveComponent"])("pagination"),v=Object(a["resolveComponent"])("ion-chip"),C=Object(a["resolveComponent"])("ion-footer"),P=Object(a["resolveComponent"])("his-footer"),F=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["withDirectives"])(Object(a["createVNode"])(b,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[a["vShow"],e.showForm]]),e.showForm?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])(F,{key:0},{default:r(()=>[Object(a["createVNode"])(j,null,{default:r(()=>[Object(a["createVNode"])(f,null,{default:r(()=>[Object(a["createVNode"])(g,null,{default:r(()=>[Object(a["createVNode"])(m,{size:"2"},{default:r(()=>[Object(a["createVNode"])("img",{class:"ion-margin-start",src:e.logo,style:{width:e.customInfo?"80px":"60px"}},null,12,["src"])]),_:1}),Object(a["createVNode"])(m,null,{default:r(()=>[Object(a["createVNode"])(g,null,{default:r(()=>[Object(a["createVNode"])(m,{size:"3"},{default:r(()=>[s]),_:1}),Object(a["createVNode"])(m,null,{default:r(()=>[Object(a["createVNode"])("b",null,Object(a["toDisplayString"])(e.title),1)]),_:1})]),_:1}),e.period?(Object(a["openBlock"])(),Object(a["createBlock"])(g,{key:0},{default:r(()=>[Object(a["createVNode"])(m,{size:"3"},{default:r(()=>[n]),_:1}),Object(a["createVNode"])(m,null,{default:r(()=>[Object(a["createVNode"])("b",null,Object(a["toDisplayString"])(e.period),1)]),_:1})]),_:1})):Object(a["createCommentVNode"])("",!0),e.customInfo?(Object(a["openBlock"])(),Object(a["createBlock"])(g,{key:1},{default:r(()=>[Object(a["createVNode"])(m,{size:"3"},{default:r(()=>[Object(a["createVNode"])("b",null,Object(a["toDisplayString"])(e.customInfo.label),1)]),_:1}),Object(a["createVNode"])(m,null,{default:r(()=>[Object(a["createVNode"])("b",null,Object(a["toDisplayString"])(e.customInfo.value),1)]),_:1})]),_:1})):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(f,null,{default:r(()=>[Object(a["createVNode"])(O,{showPerPageFilter:e.showFilters||e.paginated,disableSearchFilter:e.isTableLoading,disablePerPageFilter:e.isTableLoading,totalRowCount:e.tableRows.length,onOnItemsPerPage:t[1]||(t[1]=t=>e.itemsPerPage=t),onOnSearchFilter:t[2]||(t[2]=t=>e.searchFilter=t)},null,8,["showPerPageFilter","disableSearchFilter","disablePerPageFilter","totalRowCount"])]),_:1})]),_:1}),Object(a["createVNode"])(w,null,{default:r(()=>[Object(a["createVNode"])("div",i,[Object(a["createVNode"])(y,{rows:e.rows,paginated:e.paginated,asyncRows:e.asyncRows,rowParser:e.rowParser,config:{...e.config,tableCssTheme:e.tableCssTheme},columns:e.columns,showFilters:e.showFilters,newPage:e.currentPage,searchFilter:e.searchFilter,rowsPerPage:e.itemsPerPage,onOnIsLoading:t[3]||(t[3]=t=>e.isTableLoading=t),onOnTableRows:t[4]||(t[4]=t=>e.tableRows=t),onOnPagination:t[5]||(t[5]=t=>e.totalPages=t.length),onOnActiveColumns:t[6]||(t[6]=t=>e.activeColumns=t),onOnActiveRows:t[7]||(t[7]=t=>e.activeRows=t)},null,8,["rows","paginated","asyncRows","rowParser","config","columns","showFilters","newPage","searchFilter","rowsPerPage"])])]),_:1}),Object(a["createVNode"])(C,null,{default:r(()=>[!e.searchFilter&&e.paginated||!e.searchFilter&&e.totalPages>0&&e.paginated?(Object(a["openBlock"])(),Object(a["createBlock"])(f,{key:0},{default:r(()=>[Object(a["createVNode"])(D,{perPage:e.itemsPerPage,maxVisibleButtons:10,totalPages:e.totalPages,onOnChangePage:t[8]||(t[8]=t=>e.currentPage=t)},null,8,["perPage","totalPages"])]),_:1})):Object(a["createCommentVNode"])("",!0),e.showReportStamp?(Object(a["openBlock"])(),Object(a["createBlock"])(f,{key:1},{default:r(()=>[Object(a["createVNode"])(v,{color:"primary"},{default:r(()=>[l,Object(a["createVNode"])("b",null,Object(a["toDisplayString"])(e.date),1)]),_:1}),Object(a["createVNode"])(v,{color:"primary"},{default:r(()=>[c,Object(a["createVNode"])("b",null,Object(a["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(a["createVNode"])(v,{color:"primary"},{default:r(()=>[d,Object(a["createVNode"])("b",null,Object(a["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})):Object(a["createCommentVNode"])("",!0)]),_:1}),Object(a["createVNode"])(P,{color:e.footerColor,btns:e.btns},null,8,["color","btns"])]),_:1}))],64)}));var h=o("0f25"),p=o("80e3"),b=o("ba82"),m=o("9ceb"),g=o("7920"),f=o("8a30"),O=o("1c74"),j=o("9283"),y=o("2f2a"),w=o("1799"),D=o("b5e4"),v=Object(a["defineComponent"])({components:{HisStandardForm:g["a"],IonHeader:f["q"],ReportTable:p["a"],HisFooter:h["a"],IonPage:f["D"],IonContent:f["n"],IonToolbar:f["Q"],IonRow:f["H"],IonCol:f["m"],Pagination:w["a"],ReportFilter:y["a"],IonFooter:f["o"],IonChip:f["l"]},props:{title:{type:String,required:!0},period:{type:String,default:""},config:{type:Object},fields:{type:Object,default:()=>[]},columns:{type:Object,required:!0},rows:{type:Object,required:!0},paginated:{type:Boolean,default:!1},customBtns:{type:Array,default:()=>[]},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},onReportConfiguration:{type:Function,required:!1},rowParser:{type:Function},showFilters:{type:Boolean,default:!1},rowsPerPage:{type:Number},asyncRows:{type:Function},footerColor:{type:String,default:"dark"},customFileName:{type:String,default:""},canExport:{type:Boolean,default:!0},showReportStamp:{type:Boolean,default:!0},customInfo:{type:Object}},data:()=>({formData:{},computeFormData:{},btns:[],isLoadingData:!1,showForm:!1,logo:"/assets/images/login-logos/Malawi-Coat_of_arms_of_arms.png",isTableLoading:!1,searchFilter:"",itemsPerPage:50,currentPage:0,tableRows:[],totalPages:0,activeColumns:[],activeRows:[],date:j["b"].toStandardHisDisplayFormat(O["e"].getSessionDate()),apiVersion:O["e"].getApiVersion(),coreVersion:O["e"].getCoreVersion(),siteUUID:O["e"].getSiteUUID(),tableCssTheme:"opd-report-theme"}),methods:{getFileName(){return`${this.title}-${this.period}`},async onFinish(e,t){this.formData=e,this.computeFormData=t,this.showForm=!1,await this.presentLoading();try{this.onReportConfiguration&&await this.onReportConfiguration(this.formData,this.computeFormData),f["V"].dismiss()}catch(o){console.error(o),Object(D["c"])(""+o),f["V"].dismiss()}},async reloadReport(){await this.onFinish(this.formData,this.computeFormData)},async presentLoading(){const e=await f["V"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.showForm=!!this.fields.length,this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(m["b"])(this.columns,this.rows);Object(b["a"])(e,[...t,["Date Created: "+this.date],["Period: "+this.period],["HIS-Core Version: "+this.coreVersion],["API Version: "+this.apiVersion],["Site UUID: "+this.siteUUID]],this.getFileName())}},{name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{const{columns:e,rows:t}=Object(m["b"])(this.columns,this.rows);Object(b["b"])(e,t,this.getFileName())}},{name:"Back",size:"large",slot:"end",color:"warning",visible:!0,onClick:()=>this.showForm=!0},{name:"Refresh",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>this.reloadReport()},{name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:async()=>this.$router.push({path:"/"})})}}),C=(o("9192"),o("6b0d")),P=o.n(C);const F=P()(v,[["render",u],["__scopeId","data-v-2d48b9a4"]]);t["a"]=F},9192:function(e,t,o){"use strict";o("095f")},fcd5:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"c",(function(){return l})),o.d(t,"b",(function(){return c})),o.d(t,"d",(function(){return d}));var a=o("1c74"),r=o("9283"),s=o("b89f"),n=o("bef6");const i={one:"AL 1",two:"AL 2",three:"AL 3",four:"LA 4"},l=["Diabetes","Hypertension","Stroke","Suspected cancer","Confirmed cancer","Palliative cancer","Asthma","Depression","Acute psychosis","Chronic psychosis","Epilepsy"],c=["Organic mental disorder (Chronic)","Organic mental disorder (acute)","Alcohol use mental disorder","Drug use mental disorder","Schizophrenia","Acute and transient psychotic disorder","Schizo-affective disorder","Mood-affective disorder (MANIC)","Mood-affective disorder (BIPOLAR)","Mood-affective disorder (DEPRESSION)","Anxiety disorder","Stress reaction adjustment disorder","Dissociative conversion disorder","Somatoform disorder","Puerperal mental disorder","Personality/Behaviour disorder","Mental retardation","Psychological mental disorder","Hyperkinetic conduct disorder","Epilepsy"];class d extends a["e"]{constructor(){super(),this.endDate="",this.startDate="",this.epiweek="",this.date=a["e"].getSessionDate(),this.programID=a["e"].getProgramID()}getPatientsWithNIDs(){return this.getReport("with_nids")}getClinicRegistrations(){return this.getReport("registration")}getDrugsGivenWithoutPrescription(){return this.getReport("drugs_given_without_prescription")}getDrugsGivenWithPrescription(){return this.getReport("drugs_given_with_prescription")}getDiagnosis(){const e=`programs/${this.programID}/reports/diagnosis`;return a["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate,date:this.date})}getDiagnosisByAddress(){return this.getReport("diagnosis_by_address")}getLaPrescriptions(){const e=`programs/${this.programID}/reports/la_prescriptions`;return a["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate})}printLaReport(e){const t=new s["a"],o=`programs/${this.programID}/barcodes/la_report`,a={"date[start]":this.startDate,"date[end]":this.endDate};return Object.keys(i).forEach((t,o)=>{o++,a[o+"[prescription]"]=e[`total_la_${t}_prescribed_drugs`],a[o+"[dispensed]"]=e[`total_la_${t}_dispensed_drugs`]}),t.printLbl(`${o}?${n["a"].parameterizeObjToString(a)}`)}getDateIntervalPeriod(){return`${r["b"].toStandardHisDisplayFormat(this.startDate)} - ${r["b"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setEpiWeek(e){this.epiweek=e}getReportPeriod(){return this.startDate&&this.endDate?`${r["b"].toStandardHisDisplayFormat(this.startDate)} - ${r["b"].toStandardHisDisplayFormat(this.endDate)}`:"-"}getReport(e,t={}){return a["e"].getJson(e,this.buildRequest(t))}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.epiweek&&(t["epiweek"]=this.epiweek),{...t,...e}}static getReportQuarters(e=4){const t=[];let o=r["b"].getCurrentYear();for(let a=0;a<e;++a)t.push({name:"Q4 "+o,start:o+"-10-01",end:o+"-12-31"}),t.push({name:"Q3 "+o,start:o+"-07-01",end:o+"-09-30"}),t.push({name:"Q2 "+o,start:o+"-04-01",end:o+"-06-30"}),t.push({name:"Q1 "+o,start:o+"-01-01",end:o+"-03-31"}),--o;return t}}}}]);
//# sourceMappingURL=chunk-7cdedfce.b1e418de.js.map