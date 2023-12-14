(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df73b692"],{"054e":function(e,t,o){"use strict";o("6547")},3811:function(e,t,o){},"44e3":function(e,t,o){"use strict";o("14d9");var r=o("1c74"),n=o("7a23"),a=o("b446"),i=o("23e6"),s=o("9283"),l=o("d867"),c=o("d6aa"),d=o("5969"),p=o("d95e"),u=o("2706"),h=o("9ceb"),m=o("2ef0"),b=o("8e8b"),f=o("3e53"),O=o("0011"),j=Object(n["defineComponent"])({data:()=>({app:f["a"].getActiveApp(),fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",isMilitarySite:!1,drillDownCache:{}}),methods:{formatGender(e){return Object(O["b"])(e)},toDate(e){return s["b"].toStandardHisDisplayFormat(e)},sortByArvNumber(e,t="arv_number"){try{return e.sort((e,o)=>this.getArvInt(e[t])>this.getArvInt(o[t])?1:-1)}catch(o){return console.error(o),e}},getArvInt(e){if("string"===typeof e){const t=e.split("-")[2],o=parseInt(t);return"number"===typeof o?o:0}return 0},tdARV(e,t={}){return h["a"].td(e,{sortValue:this.getArvInt(e),...t})},confirmPatient(e){return this.$router.push("/patients/confirm?person_id="+e)},async drilldownAsyncRows(e,t,o,r=!0){const n=await l["X"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:o,canExport:r,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["X"].dismiss()}});n.present()},async drilldownData(e,t,o,r){const n=await l["X"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:o,rowParser:r,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["X"].dismiss()}});n.present()},getDefaultDrillDownTable(){const e=[[h["a"].thTxt("ARV number"),h["a"].thTxt("Gender"),h["a"].thTxt("Birth Date"),h["a"].thTxt("Actions")]],t=async e=>{let t=0;const o=e.map(async e=>{let o=null,r=null;if(Object(m["isArray"])(e)){const[t,o]=e;if(r=t,o in this.drillDownCache)return[r,...this.drillDownCache[o].slice(1)]}else if(o=e,o in this.drillDownCache)return this.drillDownCache[o];const n=await i["a"].findByID(o),a=new i["a"](n),s=[];return r&&(t=1,s.push(r)),s.push(this.tdARV(a.getArvNumber())),s.push(h["a"].td(this.formatGender(a.getGender()))),s.push(h["a"].tdDate(a.getBirthdate().toString())),s.push(h["a"].tdBtn("Show",async()=>{await l["X"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+o})})),this.drillDownCache[o]=s,s}),r=await Promise.all(o);return r.sort((e,o)=>e[t].sortValue>o[t].sortValue?1:-1)};return{rowParser:t,columns:e}},runTableDrill(e,t="Drilldown patients"){const{columns:o,rowParser:r}=this.getDefaultDrillDownTable();this.drilldownData(t,o,e,r)},drill(e,t="Drill table"){return e&&e.length>0?h["a"].tdLink(e.length,()=>this.runTableDrill(e,t)):h["a"].td(0)},getQuaterOptions(){const e=d["a"].getReportQuarters();return e.map(e=>({label:e.name,value:e.start,other:e}))},getDateDurationFields(e=!1,t=!1,o=5,n=r["e"].getSessionDate()){const i="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:p["b"].TT_SELECT,condition:()=>e,validation:e=>u["a"].required(e),options:()=>{const e=d["a"].getReportQuarters(o);let r=e.map(e=>({label:e.name,value:e.start,other:e}));return t&&(r=[{label:"Set custom period",value:"custom_period",other:{}},...r]),r}},...Object(a["b"])({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,minDate:()=>i,maxDate:()=>n,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(a["b"])({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,unload:(e,t,o,r)=>{"next"===t&&(this.endDate=r.end_date)},minDate:(e,t)=>t.start_date,maxDate:()=>n,estimation:{allowUnknown:!1},computeValue:e=>e}),{id:"occupation",helpText:"Report Group",type:p["b"].TT_SELECT,init:async()=>(this.isMilitarySite=await b["a"].get("IS_MILITARY_SITE"),!0),computedValue:e=>e.value,condition:()=>{var e;return"ART"===(null===(e=this.app)||void 0===e?void 0:e.applicationName)&&this.isMilitarySite},validation:e=>u["a"].required(e),options:()=>[{label:"All",value:"All"},{label:"Military",value:"Military"},{label:"Civilian",value:"Civilian"}]}]}}});const g=j;t["a"]=g},"4ba2":function(e,t,o){"use strict";var r=o("7a23");const n=["innerHTML"],a={class:"header-text-list"},i=["onClick"],s={key:1},l=["innerHTML"],c={key:0},d={class:"report-content"};function p(e,t,o,p,u,h){const m=Object(r["resolveComponent"])("his-standard-form"),b=Object(r["resolveComponent"])("ion-title"),f=Object(r["resolveComponent"])("ion-img"),O=Object(r["resolveComponent"])("ion-thumbnail"),j=Object(r["resolveComponent"])("ion-chip"),g=Object(r["resolveComponent"])("ion-label"),w=Object(r["resolveComponent"])("ion-item"),y=Object(r["resolveComponent"])("ion-toolbar"),C=Object(r["resolveComponent"])("ion-header"),D=Object(r["resolveComponent"])("report-table"),v=Object(r["resolveComponent"])("ion-content"),T=Object(r["resolveComponent"])("ion-footer"),x=Object(r["resolveComponent"])("his-footer"),F=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["withDirectives"])(Object(r["createVNode"])(m,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[r["vShow"],!e.canShowReport]]),e.canShowReport?(Object(r["openBlock"])(),Object(r["createBlock"])(F,{key:0},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(C,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(y,null,{default:Object(r["withCtx"])(()=>[e.showtitleOnly?(Object(r["openBlock"])(),Object(r["createBlock"])(b,{key:0},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("span",{innerHTML:e.title},null,8,n)]),_:1})):Object(r["createCommentVNode"])("",!0),e.showtitleOnly?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(w,{key:1},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(O,{slot:"start"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(f,{src:e.logo},null,8,["src"])]),_:1}),Object(r["createVNode"])(g,null,{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("ul",a,[Object(r["createElementVNode"])("li",null,[Object(r["createTextVNode"])("Title "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.title),1)]),Object(r["createElementVNode"])("li",null,[Object(r["createTextVNode"])("Period "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.period),1)]),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.headerInfoList,(e,t)=>{var o,n;return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:t},[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.label)+" ",1),e&&null!==e&&void 0!==e&&null!==(o=e.other)&&void 0!==o&&o.onclick?(Object(r["openBlock"])(),Object(r["createElementBlock"])("a",{key:0,href:"#",onClick:Object(r["withModifiers"])(t=>e.other.onclick(),["prevent"])},Object(r["toDisplayString"])(e.value),9,i)):Object(r["createCommentVNode"])("",!0),!e||null!==e&&void 0!==e&&null!==(n=e.other)&&void 0!==n&&n.onclick?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("b",s,[Object(r["createElementVNode"])("span",{innerHTML:e.value},null,8,l)]))])}),128)),e.showValidationStatus?(Object(r["openBlock"])(),Object(r["createElementBlock"])("li",c,[e.hasErrors?(Object(r["openBlock"])(),Object(r["createBlock"])(j,{key:0,onClick:e.showErrors,color:"danger"},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.errorCount),1),Object(r["createTextVNode"])(" Error(s) found. Click for more ")]),_:1},8,["onClick"])):Object(r["createCommentVNode"])("",!0),e.hasErrors?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(j,{key:1,color:"success"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(" Report is Consistent ")]),_:1}))])):Object(r["createCommentVNode"])("",!0)])]),_:1})]),_:1}))]),_:1})]),_:1}),Object(r["createVNode"])(v,null,{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(D,{rows:e.rows,columns:e.columns,showFilters:e.showFilters,config:{...e.config,tableCssTheme:e.tableCssTheme},onOnActiveColumns:e.onActiveColumns,onOnActiveRows:e.onActiveRows},null,8,["rows","columns","showFilters","config","onOnActiveColumns","onOnActiveRows"])])]),_:1}),Object(r["createVNode"])(T,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(y,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(j,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("Date Created: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.date),1)]),_:1}),Object(r["createVNode"])(j,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("His-Core Version: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(r["createVNode"])(j,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("API Version: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(x,{btns:e.btns},null,8,["btns"])]),_:1})):Object(r["createCommentVNode"])("",!0)],64)}o("14d9");var u=o("0f25"),h=o("80e3"),m=o("ba82"),b=o("9ceb"),f=o("7920"),O=o("d867"),j=o("b5e4"),g=o("1718"),w=o("1c74"),y=o("5a0c"),C=o.n(y),D=o("2ef0"),v=o("ff8f"),T=o("7f35"),x=o("0011"),F=Object(r["defineComponent"])({components:{HisStandardForm:f["a"],IonHeader:O["q"],ReportTable:h["a"],HisFooter:u["a"],IonPage:O["D"],IonContent:O["n"],IonToolbar:O["S"],IonChip:O["l"],IonFooter:O["o"],IonLabel:O["x"],IonThumbnail:O["Q"],IonItem:O["w"],IonImg:O["s"]},props:{encryptPDF:{type:Boolean,default:!1},showValidationStatus:{type:Boolean,default:!1},validationErrors:{type:Array,default:()=>[]},config:{type:Object},headerInfoList:{type:Array,default:()=>[]},reportPrefix:{type:String,default:""},reportLogo:{type:String},showtitleOnly:{type:Boolean,default:!1},title:{type:String,required:!0},period:{type:String},showFilters:{type:Boolean,default:!1},fields:{type:Array,default:()=>[]},columns:{type:Object,required:!0},rows:{type:Object,required:!0},customBtns:{type:Array,default:()=>[]},hasServerSideCaching:{type:Boolean,default:!1},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},enabledPDFHorizontalPageBreak:{type:Boolean,default:!1},onFinishBtnAction:{type:Function},onReportConfiguration:{type:Function,required:!0},onDefaultConfiguration:{type:Function},customFileName:{type:String,default:""}},data:()=>({date:"",formData:{},btns:[],computeFormData:{},activeColumns:[],activeRows:[],isLoadingData:!1,canShowReport:!1,siteUUID:w["e"].getSiteUUID(),apiVersion:w["e"].getApiVersion(),coreVersion:w["e"].getCoreVersion(),artVersion:w["e"].getAppVersion(),tableCssTheme:"art-report-theme"}),watch:{validationErrors:{handler(e){Object(D["isEmpty"])(e)||this.showErrors()},deep:!0,immediate:!0},fields:{handler(e){Object(D["isEmpty"])(e)?(this.canShowReport=!0,this.refreshTimeStamp()):(this.canShowReport=!1,this.btns.forEach(e=>{"Back"===e.name&&(e.visible=!0)}))},immediate:!0}},computed:{logo(){if(!this.reportLogo&&"string"===typeof this.reportPrefix){if(this.reportPrefix.match(/pepfar/i))return Object(g["a"])("login-logos/PEPFAR.png");if(this.reportPrefix.match(/moh/i))return Object(g["a"])("login-logos/Malawi-Coat_of_arms_of_arms.png")}return Object(g["a"])("reports.png")},hasErrors(){return!Object(D["isEmpty"])(this.validationErrors)},errorCount(){return this.validationErrors?this.validationErrors.length:0},footerRows(){const e=[["Date Created: "+this.date]];return this.period&&e.push(["Quarter: "+this.period]),e.push(["HIS-Core Version: "+this.coreVersion]),e.push(["API Version: "+this.apiVersion]),e.push(["Site UUID: "+this.siteUUID]),e.push(["Generated by: "+w["e"].getUserName()]),e}},methods:{async showErrors(){const e=await O["X"].create({component:v["a"],backdropDismiss:!1,cssClass:"large-modal",componentProps:{errors:this.validationErrors}});e.present()},pdfEncryptionData(){const e=w["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}},refreshTimeStamp(){this.date=C()().format("DD/MMM/YYYY HH:MM:ss")},onActiveColumns(e){this.activeColumns=e},onActiveRows(e){this.activeRows=e},getFileName(){var e;return this.customFileName||`${this.reportPrefix} ${w["e"].getLocationName()} ${Object(x["g"])(this.title).replace(this.reportPrefix,"")} ${null!==(e=this.period)&&void 0!==e?e:this.date}`},async onLoadDefault(){this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),this.onDefaultConfiguration&&await this.onDefaultConfiguration(),O["W"].dismiss()}catch(e){Object(j["c"])(""+e),console.error(e),O["W"].dismiss()}},async onFinish(e,t,o=!1){this.formData=e,this.computeFormData=t,this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),await this.onReportConfiguration(this.formData,this.computeFormData,o),O["W"].dismiss()}catch(r){Object(j["c"])(""+r),console.error(r),O["W"].dismiss()}},async reloadReport(e=!1){Object(D["isEmpty"])(this.formData)&&Object(D["isEmpty"])(this.computeFormData)?this.onDefaultConfiguration&&await this.onLoadDefault():await this.onFinish(this.formData,this.computeFormData,e)},async presentLoading(){const e=await O["W"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.onDefaultConfiguration&&this.onLoadDefault(),this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(b["b"])(this.activeColumns,this.activeRows,"csvMode");Object(m["a"])(e,[...t,...this.footerRows],this.getFileName())}}),this.btns.push({name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{let e="pdfMode";if(this.encryptPDF){const t=await Object(T["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");e="Secure PDF"===t?"pdfMode":"ignorePDFColumnexport"}const{columns:t,rows:o}=Object(b["b"])(this.activeColumns,this.activeRows,e);Object(m["c"])(t,o,this.getFileName(),this.enabledPDFHorizontalPageBreak,this.encryptPDF&&"ignorePDFColumnexport"!=e?this.pdfEncryptionData():{})}}),this.btns.push({name:"Refresh/Rebuild",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>{let e=!1;this.hasServerSideCaching&&(e=await Object(j["a"])("Do you want to rebuild report cache?",{header:"Rebuild Report"})),this.reloadReport(e)}}),this.btns.push({name:"Back",size:"large",slot:"end",color:"primary",visible:!Object(D["isEmpty"])(this.fields),onClick:()=>this.canShowReport=!1}),this.btns.push({name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>{this.onFinishBtnAction?this.onFinishBtnAction():this.$router.push({path:"/"})}})}}),I=(o("68a7"),o("6b0d")),R=o.n(I);const V=R()(F,[["render",p],["__scopeId","data-v-5ed78ee7"]]);t["a"]=V},6547:function(e,t,o){},"68a7":function(e,t,o){"use strict";o("3811")},7920:function(e,t,o){"use strict";var r=o("7a23");function n(e,t,o,n,a,i){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var a=o("9441"),i=Object(r["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:a["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=o("6b0d"),l=o.n(s);const c=l()(i,[["render",n]]);t["a"]=c},"9a5e":function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var r=o("ade3"),n=(o("14d9"),o("5969")),a=o("bef6");class i extends n["a"]{constructor(){super(),Object(r["a"])(this,"org",void 0),Object(r["a"])(this,"initializeArvRefillReportTables",void 0),this.org="pepfar",this.initializeArvRefillReportTables=!0}initArvRefillPeriod(e){this.initializeArvRefillReportTables=e}setOrg(e){this.org=e}getClinicTxRtt(){return this.getReport(`programs/${this.programID}/reports/clinic_tx_rtt`)}getTxMMDClientLevelData(e){const t=a["a"].parameterizeObjToString({start_date:this.startDate,end_date:this.endDate,program_id:this.programID,date:this.date,org:this.org}),o="tx_mmd_client_level_data?"+t;return n["a"].postJson(o,{patient_ids:e})}remapTxClientLevelData(e){return e.map(e=>{let t=null;const o=[];for(const r in e){const n=Object.values(e[r]);n.forEach(e=>{for(const r in e){const n=e[r];t||(t={id:n.arv_number,dob:n.birthdate,dispenseDate:n.start_date}),o.push({name:n.drug_name,quantity:n.quantity,dose:n.dose_per_day})}})}return{...t,drugs:o}})}getTxCurrMMDReport(e,t){return this.getReport("arv_refill_periods",{org:this.org,min_age:""+e,max_age:""+t,initialize_tables:""+this.initializeArvRefillReportTables})}getTxMlReport(){return this.getReport("tx_ml")}getTxNewReport(){return this.getReport(`programs/${this.programID}/reports/tx_new`)}getTxRttReport(){return this.getReport("tx_rtt")}getMaternalStatus(e){const t=a["a"].parameterizeObjToString({start_date:this.startDate,end_date:this.endDate,date:this.date,program_id:this.programID,report_definition:"pepfar"});return n["a"].postJson("vl_maternal_status?"+t,{patient_ids:e})}}},cab4:function(e,t,o){"use strict";o.r(t);var r=o("7a23");function n(e,t,o,n,a,i){const s=Object(r["resolveComponent"])("report-template"),l=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createBlock"])(l,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(s,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,config:{showIndex:!0},reportPrefix:"PEPFAR",onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])]),_:1})}o("13d5"),o("14d9");var a=o("44e3"),i=o("9a5e"),s=o("4ba2"),l=o("9ceb"),c=o("d867"),d=o("ad8d"),p=o("2ef0"),u=Object(r["defineComponent"])({mixins:[a["a"]],components:{ReportTemplate:s["a"],IonPage:c["D"]},data:()=>({title:"PEPFAR Tx ML Report",rows:[],drillData:{},columns:[[l["a"].thTxt("Age group"),l["a"].thTxt("Gender"),l["a"].thTxt("Died"),l["a"].thTxt("IIT <3 mo"),l["a"].thTxt("IIT 3-5 mo"),l["a"].thTxt("IIT 6+ mo"),l["a"].thTxt("Transferred out"),l["a"].thTxt("Refused (Stopped)")]],indexLabel:["Died","IIT <3 mo","IIT 3-5 mo","IIT 6+ mo","Tranferred out","Refused (Stopped)"],cohort:{}}),created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(e,t){this.rows=[],this.report=new i["a"],this.report.setOccupation(t.occupation),this.report.setStartDate(t.start_date),this.report.setEndDate(t.end_date),this.period=this.report.getDateIntervalPeriod(),this.cohort=await this.report.getTxMlReport(),this.setRows("F"),this.setRows("M"),this.setTotalMaleRow(),this.setMaternalRows()},drilldown(e,t){const o=[[l["a"].thTxt("ARV#"),l["a"].thTxt("DOB"),l["a"].thTxt("Dispensed"),l["a"].thTxt("ARVs")]],r=async()=>{if(t in this.drillData)return this.drillData[t];const o=await this.report.getTxMMDClientLevelData(e);if(!o)return[];const r=this.report.remapTxClientLevelData(o).map(e=>{const t=e.drugs.map(e=>{const t=`\n                                <table style='width: 100%;'> \n                                    <td style='width: 65%;'>${e.name}</td>\n                                    <td style='width: 30%;'>(${e.quantity}, ${e.dose} a day)</td>\n                                </table>`,o=`${e.name} (Quantity: ${e.quantity} Dose: ${e.dose})`;return{tableView:t,dataView:o}});return[l["a"].td(e.id||"N/A"),l["a"].tdDate(e.dob),l["a"].tdDate(e.dispenseDate),l["a"].td(t.map(e=>e.tableView).join("<p/>"),{value:t.map(e=>e.dataView).join("|")})]});return this.drillData[t]=r,r};return e.length<=0?l["a"].td(0):l["a"].tdLink(e.length,()=>this.drilldownAsyncRows(t,o,r))},aggregate(e,t){return Object.values(this.cohort).reduce((o,r)=>r[e]?[...r[e][this.indexLabel.indexOf(t)],...o]:o,[])},setTotalMaleRow(){const e=e=>this.drilldown(this.aggregate("M",e),e);this.rows.push([l["a"].td("All"),l["a"].td("Male"),e("Died"),e("IIT <3 mo"),e("IIT 3-5 mo"),e("IIT 6+ mo"),e("Tranferred out"),e("Refused (Stopped)")])},async setMaternalRows(){const e=this.indexLabel.reduce((e,t)=>[...e,{indicator:t,data:this.aggregate("F",t)}],[]),t=await this.report.getMaternalStatus(Object(p["uniq"])(e.reduce((e,t)=>[...e,...t.data],[]).map(e=>e))),o=t=>e.reduce((e,o)=>o.indicator===t?[...e,...o.data]:e,[]),r=(e,r)=>this.drilldown(o(r).filter(o=>t[e].includes(o)),`All ${r} Female Pregnant`),n=t.FBf.concat(t.FP),a=e=>this.drilldown(o(e).filter(e=>!n.includes(e)),`All ${e} Female not pregnant`);this.rows.push([l["a"].td("All"),l["a"].td("FP"),r("FP","Died"),r("FP","IIT <3 mo"),r("FP","IIT 3-5 mo"),r("FP","IIT 6+ mo"),r("FP","Tranferred out"),r("FP","Refused (Stopped)")]),this.rows.push([l["a"].td("All"),l["a"].td("FNP"),a("Died"),a("IIT <3 mo"),a("IIT 3-5 mo"),a("IIT 6+ mo"),a("Tranferred out"),a("Refused (Stopped)")]),this.rows.push([l["a"].td("All"),l["a"].td("FBF"),r("FBf","Died"),r("FBf","IIT <3 mo"),r("FBf","IIT 3-5 mo"),r("FBf","IIT 6+ mo"),r("FBf","Tranferred out"),r("FBf","Refused (Stopped)")])},setRows(e){for(const o in d["a"]){const r=d["a"][o],n=this.formatGender(e);try{const t=this.cohort[r][e],o=`${n}s ${r}`,a=t.map((e,t)=>this.drilldown(e,`${o} ${this.indexLabel[t]}`));this.rows.push([l["a"].td(r),l["a"].td(n),...a])}catch(t){this.rows.push([l["a"].td(r),l["a"].td(n),l["a"].td(0),l["a"].td(0),l["a"].td(0),l["a"].td(0),l["a"].td(0),l["a"].td(0)])}}}}}),h=o("6b0d"),m=o.n(h);const b=m()(u,[["render",n]]);t["default"]=b},ff8f:function(e,t,o){"use strict";var r=o("7a23");const n=["innerHTML"];function a(e,t,o,a,i,s){const l=Object(r["resolveComponent"])("ion-title"),c=Object(r["resolveComponent"])("ion-toolbar"),d=Object(r["resolveComponent"])("ion-header"),p=Object(r["resolveComponent"])("ion-item"),u=Object(r["resolveComponent"])("ion-list"),h=Object(r["resolveComponent"])("ion-grid"),m=Object(r["resolveComponent"])("ion-button"),b=Object(r["resolveComponent"])("ion-footer");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(d,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(c,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(l,null,{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(h,{class:"selector"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])(()=>[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.errors,(e,t)=>(Object(r["openBlock"])(),Object(r["createBlock"])(p,{class:"his-md-text ion-padding",key:t},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("span",{innerHTML:`(${t+1}) ${e}`},null,8,n)]),_:2},1024))),128))]),_:1})]),_:1}),Object(r["createVNode"])(b,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(c,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(m,{class:"close-btn",color:"danger",size:"large",onClick:e.closeModal,slot:"end"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(" Close ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var i=o("d867"),s=Object(r["defineComponent"])({components:{IonGrid:i["p"],IonList:i["y"],IonItem:i["w"],IonFooter:i["o"],IonButton:i["d"],IonToolbar:i["S"],IonHeader:i["q"],IonTitle:i["R"]},props:{title:{type:String,default:"Report Errors"},errors:{type:Array,required:!0}},methods:{async closeModal(){await i["X"].dismiss({})}}}),l=(o("054e"),o("6b0d")),c=o.n(l);const d=c()(s,[["render",a],["__scopeId","data-v-0ed0c7a2"]]);t["a"]=d}}]);
//# sourceMappingURL=chunk-df73b692.caf213d2.js.map