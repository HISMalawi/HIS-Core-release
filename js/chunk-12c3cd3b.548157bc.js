(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12c3cd3b"],{4390:function(e,t,o){},"44e3":function(e,t,o){"use strict";var r=o("1c74"),a=o("7a23"),n=o("b446"),s=o("23e6"),i=o("9283"),l=o("8a30"),c=o("d6aa"),d=o("5969"),u=o("d95e"),p=o("2706"),h=o("9ceb"),m=o("2ef0"),b=o("0011"),g=Object(a["defineComponent"])({data:()=>({fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",drillDownCache:{}}),methods:{formatGender(e){return Object(b["f"])(e)},toDate(e){return i["c"].toStandardHisDisplayFormat(e)},sortByArvNumber(e,t="arv_number"){try{return e.sort((e,o)=>this.getArvInt(e[t])>this.getArvInt(o[t])?1:-1)}catch(o){return console.error(o),e}},getArvInt(e){if("string"===typeof e){const[t,o,r]=e.split("-"),a=parseInt(r);return"number"===typeof a?a:0}return 0},tdARV(e,t={}){return h["a"].td(e,{sortValue:this.getArvInt(e),...t})},confirmPatient(e){return this.$router.push("/patients/confirm?person_id="+e)},async drilldownAsyncRows(e,t,o,r=!0){const a=await l["modalController"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:o,canExport:r,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["modalController"].dismiss()}});a.present()},async drilldownData(e,t,o,r){const a=await l["modalController"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:o,rowParser:r,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["modalController"].dismiss()}});a.present()},getDefaultDrillDownTable(){const e=[[h["a"].thTxt("ARV number"),h["a"].thTxt("Gender"),h["a"].thTxt("Birth Date"),h["a"].thTxt("Actions")]],t=async e=>{let t=0;const o=e.map(async e=>{let o=null,r=null;if(Object(m["isArray"])(e)){const[t,o]=e;if(r=t,o in this.drillDownCache){const[e,...t]=this.drillDownCache[o];return[r,...t]}}else if(o=e,o in this.drillDownCache)return this.drillDownCache[o];const a=await s["a"].findByID(o),n=new s["a"](a),i=[];return r&&(t=1,i.push(r)),i.push(this.tdARV(n.getArvNumber())),i.push(h["a"].td(this.formatGender(n.getGender()))),i.push(h["a"].tdDate(n.getBirthdate().toString())),i.push(h["a"].tdBtn("Show",async()=>{await l["modalController"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+o})})),this.drillDownCache[o]=i,i}),r=await Promise.all(o);return r.sort((e,o)=>e[t].sortValue>o[t].sortValue?1:-1)};return{rowParser:t,columns:e}},runTableDrill(e,t="Drilldown patients"){const{columns:o,rowParser:r}=this.getDefaultDrillDownTable();this.drilldownData(t,o,e,r)},drill(e,t="Drill table"){return e&&e.length>0?h["a"].tdLink(e.length,()=>this.runTableDrill(e,t)):h["a"].td(0)},getQuaterOptions(){const e=d["a"].getReportQuarters();return e.map(e=>({label:e.name,value:e.start,other:e}))},getDateDurationFields(e=!1,t=!1,o=5,a=r["e"].getSessionDate()){const s="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:u["b"].TT_SELECT,condition:()=>e,validation:e=>p["a"].required(e),options:()=>{const e=d["a"].getReportQuarters(o);let r=e.map(e=>({label:e.name,value:e.start,other:e}));return t&&(r=[{label:"Set custom period",value:"custom_period",other:{}},...r]),r}},...Object(n["b"])({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,minDate:()=>s,maxDate:()=>a,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(n["b"])({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,unload:(e,t,o,r)=>{"next"===t&&(this.endDate=r.end_date)},minDate:(e,t)=>t.start_date,maxDate:()=>a,estimation:{allowUnknown:!1},computeValue:e=>e})]}}});const D=g;t["a"]=D},"552a":function(e,t,o){"use strict";var r=o("7a23");const a=Object(r["withScopeId"])("data-v-71037ce6");Object(r["pushScopeId"])("data-v-71037ce6");const n={class:"header-text-list"},s=Object(r["createTextVNode"])("Title "),i=Object(r["createTextVNode"])("Period "),l={key:0},c={class:"report-content"},d=Object(r["createTextVNode"])("Date Created: "),u=Object(r["createTextVNode"])("His-Core Version: "),p=Object(r["createTextVNode"])("API Version: ");Object(r["popScopeId"])();const h=a((function(e,t,o,h,m,b){const g=Object(r["resolveComponent"])("his-standard-form"),D=Object(r["resolveComponent"])("ion-img"),O=Object(r["resolveComponent"])("ion-thumbnail"),f=Object(r["resolveComponent"])("ion-label"),w=Object(r["resolveComponent"])("report-filter"),j=Object(r["resolveComponent"])("ion-toolbar"),y=Object(r["resolveComponent"])("ion-header"),F=Object(r["resolveComponent"])("report-table"),C=Object(r["resolveComponent"])("ion-content"),P=Object(r["resolveComponent"])("pagination"),v=Object(r["resolveComponent"])("ion-chip"),V=Object(r["resolveComponent"])("ion-footer"),S=Object(r["resolveComponent"])("his-footer"),I=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["withDirectives"])(Object(r["createVNode"])(g,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[r["vShow"],e.showForm]]),e.showForm?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(I,{key:0},{default:a(()=>[Object(r["createVNode"])(y,null,{default:a(()=>[Object(r["createVNode"])(j,null,{default:a(()=>[Object(r["createVNode"])(O,{slot:"start"},{default:a(()=>[Object(r["createVNode"])(D,{src:e.logo},null,8,["src"])]),_:1}),Object(r["createVNode"])(f,null,{default:a(()=>[Object(r["createVNode"])("ul",n,[Object(r["createVNode"])("li",null,[s,Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.title),1)]),Object(r["createVNode"])("li",null,[i,Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.period),1)]),e.customInfo?(Object(r["openBlock"])(),Object(r["createBlock"])("li",l,[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.customInfo.label)+" ",1),Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.customInfo.value),1)])):Object(r["createCommentVNode"])("",!0)])]),_:1}),Object(r["createVNode"])(w,{slot:"end",showPerPageFilter:e.showFilters||e.paginated,disableSearchFilter:e.isTableLoading,disablePerPageFilter:e.isTableLoading,totalRowCount:e.tableRows.length,onOnItemsPerPage:t[1]||(t[1]=t=>e.itemsPerPage=t),onOnSearchFilter:t[2]||(t[2]=t=>e.searchFilter=t)},null,8,["showPerPageFilter","disableSearchFilter","disablePerPageFilter","totalRowCount"])]),_:1})]),_:1}),Object(r["createVNode"])(C,null,{default:a(()=>[Object(r["createVNode"])("div",c,[Object(r["createVNode"])(F,{rows:e.rows,paginated:e.paginated,asyncRows:e.asyncRows,rowParser:e.rowParser,config:{...e.config,tableCssTheme:e.tableCssTheme},columns:e.columns,showFilters:e.showFilters,newPage:e.currentPage,searchFilter:e.searchFilter,rowsPerPage:e.itemsPerPage,onOnIsLoading:t[3]||(t[3]=t=>e.isTableLoading=t),onOnTableRows:t[4]||(t[4]=t=>e.tableRows=t),onOnPagination:t[5]||(t[5]=t=>e.totalPages=t.length),onOnActiveColumns:t[6]||(t[6]=t=>e.activeColumns=t),onOnActiveRows:t[7]||(t[7]=t=>e.activeRows=t)},null,8,["rows","paginated","asyncRows","rowParser","config","columns","showFilters","newPage","searchFilter","rowsPerPage"])])]),_:1}),Object(r["createVNode"])(V,null,{default:a(()=>[!e.searchFilter&&e.paginated||!e.searchFilter&&e.totalPages>0&&e.paginated?(Object(r["openBlock"])(),Object(r["createBlock"])(j,{key:0},{default:a(()=>[Object(r["createVNode"])(P,{perPage:e.itemsPerPage,maxVisibleButtons:10,totalPages:e.totalPages,onOnChangePage:t[8]||(t[8]=t=>e.currentPage=t)},null,8,["perPage","totalPages"])]),_:1})):Object(r["createCommentVNode"])("",!0),e.showReportStamp?(Object(r["openBlock"])(),Object(r["createBlock"])(j,{key:1},{default:a(()=>[Object(r["createVNode"])(v,{color:"primary"},{default:a(()=>[d,Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.date),1)]),_:1}),Object(r["createVNode"])(v,{color:"primary"},{default:a(()=>[u,Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(r["createVNode"])(v,{color:"primary"},{default:a(()=>[p,Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})):Object(r["createCommentVNode"])("",!0)]),_:1}),Object(r["createVNode"])(S,{color:e.footerColor,btns:e.btns},null,8,["color","btns"])]),_:1}))],64)}));var m=o("0f25"),b=o("80e3"),g=o("ba82"),D=o("9ceb"),O=o("7920"),f=o("8a30"),w=o("1c74"),j=o("9283"),y=o("2f2a"),F=o("1799"),C=o("b5e4"),P=Object(r["defineComponent"])({components:{HisStandardForm:O["a"],IonHeader:f["IonHeader"],ReportTable:b["a"],HisFooter:m["a"],IonPage:f["IonPage"],IonContent:f["IonContent"],IonToolbar:f["IonToolbar"],Pagination:F["a"],ReportFilter:y["a"],IonFooter:f["IonFooter"],IonChip:f["IonChip"],IonLabel:f["IonLabel"]},props:{title:{type:String,required:!0},period:{type:String,default:""},config:{type:Object},fields:{type:Object,default:()=>[]},columns:{type:Object,required:!0},rows:{type:Object,required:!0},paginated:{type:Boolean,default:!1},customBtns:{type:Array,default:()=>[]},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},onReportConfiguration:{type:Function,required:!1},rowParser:{type:Function},showFilters:{type:Boolean,default:!1},rowsPerPage:{type:Number},asyncRows:{type:Function},footerColor:{type:String,default:"dark"},customFileName:{type:String,default:""},canExport:{type:Boolean,default:!0},showReportStamp:{type:Boolean,default:!0},customInfo:{type:Object}},data:()=>({formData:{},computeFormData:{},btns:[],isLoadingData:!1,showForm:!1,logo:"/assets/images/login-logos/Malawi-Coat_of_arms_of_arms.png",isTableLoading:!1,searchFilter:"",itemsPerPage:50,currentPage:0,tableRows:[],totalPages:0,activeColumns:[],activeRows:[],date:j["c"].toStandardHisDisplayFormat(w["e"].getSessionDate()),apiVersion:w["e"].getApiVersion(),coreVersion:w["e"].getCoreVersion(),siteUUID:w["e"].getSiteUUID(),tableCssTheme:"opd-report-theme"}),methods:{getFileName(){return`${w["e"].getLocationName()} ${this.title} ${this.period}`},async onFinish(e,t){this.formData=e,this.computeFormData=t,this.showForm=!1,await this.presentLoading();try{this.onReportConfiguration&&await this.onReportConfiguration(this.formData,this.computeFormData),f["loadingController"].dismiss()}catch(o){console.error(o),Object(C["c"])(""+o),f["loadingController"].dismiss()}},async reloadReport(){await this.onFinish(this.formData,this.computeFormData)},async presentLoading(){const e=await f["loadingController"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.showForm=!!this.fields.length,this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(D["b"])(this.columns,this.rows);Object(g["a"])(e,[...t,["Date Created: "+this.date],["Period: "+this.period],["HIS-Core Version: "+this.coreVersion],["API Version: "+this.apiVersion],["Site UUID: "+this.siteUUID]],this.getFileName())}},{name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{const{columns:e,rows:t}=Object(D["b"])(this.columns,this.rows);Object(g["c"])(e,t,this.getFileName())}},{name:"Back",size:"large",slot:"end",color:"primary",visible:!0,onClick:()=>this.showForm=!0},{name:"Refresh",size:"large",slot:"end",color:"warning",visible:!0,onClick:()=>this.reloadReport()},{name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>this.$router.push({path:"/"})})}}),v=(o("b39e"),o("d959")),V=o.n(v);const S=V()(P,[["render",h],["__scopeId","data-v-71037ce6"]]);t["a"]=S},5969:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var r=o("1c74"),a=o("9283"),n=o("5a0c"),s=o.n(n);class i extends r["e"]{constructor(){super(),this.endDate="",this.startDate="",this.quarter="",this.date=r["e"].getSessionDate(),this.programID=r["e"].getProgramID()}getDateIntervalPeriod(){return`${a["c"].toStandardHisDisplayFormat(this.startDate)} - ${a["c"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setQuarter(e){this.quarter=e}getReport(e,t={}){return r["e"].getJson(e,this.buildRequest(t))}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.quarter&&(t["quarter"]=this.quarter),{...t,...e}}static getQuarterBounds(e){const t=t=>s()(`${e}-${t}-01`).daysInMonth(),o=t=>`${e}-${t}-01 00:00`,r=o=>`${e}-${o}-${t(o)} 00:00`;return{Q1:{qtr:1,start:o("01"),end:r("03")},Q2:{qtr:2,start:o("04"),end:r("06")},Q3:{qtr:3,start:o("07"),end:r("09")},Q4:{qtr:4,start:o("10"),end:r("12")}}}static getQtrByDate(e){const t=this.getQuarterBounds(e.getFullYear());for(const o in t){const{start:r,end:a}=t[o];if(e>=new Date(r)&&e<=new Date(a))return t[o]}return null}static buildQtrObj(e,t){const o=this.getQuarterBounds(t),{start:r,end:a}=o[e];return{start:r,end:a,name:`${e} ${t}`}}static getReportQuarters(e=5){const t=[];let o=new Date,r=o.getFullYear();const a=r;o=new Date(`${a}-${o.getMonth()+1}-${o.getDate()} 00:00`);const n=this.getQtrByDate(o);let s=n.qtr,i=0;4===s&&t.push(this.buildQtrObj("Q1",r+1));while(i<e)0===i&&s<4&&t.push(this.buildQtrObj("Q"+(s+1),r)),t.push(this.buildQtrObj("Q"+s,r)),s=s>0?s-=1:s,r=0==s?r-1:r,s=0==s?s+=4:s,i++;return t}}},7920:function(e,t,o){"use strict";var r=o("7a23");function a(e,t,o,a,n,s){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,8,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var n=o("9441"),s=Object(r["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:n["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),i=o("d959"),l=o.n(i);const c=l()(s,[["render",a]]);t["a"]=c},ad9e:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var r=o("1c74"),a=o("9283");class n extends r["e"]{constructor(){super(),this.endDate="",this.startDate="",this.date=r["e"].getSessionDate(),this.programID=r["e"].getProgramID()}getPepfarReport(e){return this.getReport("pepfar_cxca",{report_name:e})}getClinicReport(e){return this.getReport("screened_for_cxca",{report_name:e})}getDateIntervalPeriod(){return`${a["c"].toStandardHisDisplayFormat(this.startDate)} - ${a["c"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}getReportPeriod(){return this.startDate&&this.endDate?`${a["c"].toStandardHisDisplayFormat(this.startDate)} - ${a["c"].toStandardHisDisplayFormat(this.endDate)}`:"-"}getReport(e,t={}){return r["e"].getJson(e,this.buildRequest(t))}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),{...t,...e}}static getReportQuarters(e=4){const t=[];let o=a["c"].getCurrentYear();for(let r=0;r<e;++r)t.push({name:"Q4 "+o,start:o+"-10-01",end:o+"-12-31"}),t.push({name:"Q3 "+o,start:o+"-07-01",end:o+"-09-30"}),t.push({name:"Q2 "+o,start:o+"-04-01",end:o+"-06-30"}),t.push({name:"Q1 "+o,start:o+"-01-01",end:o+"-03-31"}),--o;return t}}},b39e:function(e,t,o){"use strict";o("4390")}}]);
//# sourceMappingURL=chunk-12c3cd3b.548157bc.js.map