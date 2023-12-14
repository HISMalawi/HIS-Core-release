(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99890d0e"],{"054e":function(e,t,o){"use strict";o("6547")},"0ddb":function(e,t,o){"use strict";o.r(t);var r=o("7a23");function n(e,t,o,n,i,a){const s=Object(r["resolveComponent"])("report-template"),l=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createBlock"])(l,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(s,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,config:{showIndex:!0},reportPrefix:"Clinic",onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])]),_:1})}o("14d9"),o("13d5");var i=o("44e3"),a=o("9a5e"),s=o("4ba2"),l=o("9ceb"),c=o("ad8d"),d=o("2ef0"),u=Object(r["defineComponent"])({mixins:[i["a"]],components:{ReportTemplate:s["a"]},data:()=>({title:"TX RTT Report",cohort:{},rows:[],columns:[[l["a"].thTxt("Age group"),l["a"].thTxt("Gender"),l["a"].thTxt("Returned <3 mo"),l["a"].thTxt("Returned 3-5 mo"),l["a"].thTxt("Returned 6+ mo")]],aggregated:[]}),created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(e,t){this.rows=[],this.aggregated=[],this.report=new a["a"],this.report.setStartDate(t.start_date),this.report.setEndDate(t.end_date),this.report.setOccupation(t.occupation),this.period=this.report.getDateIntervalPeriod(),this.cohort=await this.report.getClinicTxRtt(),await this.setRows("F"),await this.setRows("M"),this.setMaleTotalsRow(),await this.setFemaleRows()},drillData(e,t,o,r){return this.aggregated.push({gender:o,ageGroup:t,column:r,data:e}),this.drill(e,`${t} (${o}s) ${r}`)},setMaleTotalsRow(){const e=e=>this.drill(this.aggregated.filter(t=>"Male"===t.gender&&t.column===e).reduce((e,t)=>e.concat(t.data),[]),"All Male "+e);this.rows.push([l["a"].td("All"),l["a"].td("Male"),e("Returned <3 mo"),e("Returned 3-5 mo"),e("Returned 6+ mo")])},async setFemaleRows(){const e=this.aggregated.filter(e=>e.gender.match(/female/i)).reduce((e,t)=>e.concat(t.data),[]),t=await this.report.getMaternalStatus(Object(d["uniq"])(e)),o=t.FBf.concat(t.FP),r=e=>this.aggregated.filter(e=>e.gender.match(/female/i)).filter(t=>t.column===e).reduce((e,t)=>Object(d["uniq"])(e.concat(t.data)),[]),n=(e,o)=>this.drill(r(o).filter(o=>t[e].includes(o)),"All "+o),i=e=>this.drill(r(e).filter(e=>!o.includes(e)),"All "+e);this.rows.push([l["a"].td("All"),l["a"].td("FP"),n("FP","Returned <3 mo"),n("FP","Returned 3-5 mo"),n("FP","Returned 6+ mo")]),this.rows.push([l["a"].td("All"),l["a"].td("FNP"),i("Returned <3 mo"),i("Returned 3-5 mo"),i("Returned 6+ mo")]),this.rows.push([l["a"].td("All"),l["a"].td("FBF"),n("FBf","Returned <3 mo"),n("FBf","Returned 3-5 mo"),n("FBf","Returned 6+ mo")])},async setRows(e){const t=(e,t)=>e.filter(e=>t(e.months)).map(e=>e.patient_id);for(const o in c["a"]){const r=c["a"][o],n=this.formatGender(e);if(r in this.cohort){const o=this.cohort[r][e],i=e=>t(o,e);this.rows.push([l["a"].td(r),l["a"].td(n),this.drillData(i(e=>e<3),r,n,"Returned <3 mo"),this.drillData(i(e=>e>=3&&e<=5),r,n,"Returned 3-5 mo"),this.drillData(i(e=>e>=6),r,n,"Returned 6+ mo")])}else this.rows.push([l["a"].td(r),l["a"].td(n),l["a"].td(0),l["a"].td(0),l["a"].td(0)])}}}}),p=o("6b0d"),h=o.n(p);const m=h()(u,[["render",n]]);t["default"]=m},3811:function(e,t,o){},"44e3":function(e,t,o){"use strict";o("14d9");var r=o("1c74"),n=o("7a23"),i=o("b446"),a=o("23e6"),s=o("9283"),l=o("d867"),c=o("d6aa"),d=o("5969"),u=o("d95e"),p=o("2706"),h=o("9ceb"),m=o("2ef0"),b=o("8e8b"),O=o("3e53"),f=o("0011"),j=Object(n["defineComponent"])({data:()=>({app:O["a"].getActiveApp(),fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",isMilitarySite:!1,drillDownCache:{}}),methods:{formatGender(e){return Object(f["b"])(e)},toDate(e){return s["b"].toStandardHisDisplayFormat(e)},sortByArvNumber(e,t="arv_number"){try{return e.sort((e,o)=>this.getArvInt(e[t])>this.getArvInt(o[t])?1:-1)}catch(o){return console.error(o),e}},getArvInt(e){if("string"===typeof e){const t=e.split("-")[2],o=parseInt(t);return"number"===typeof o?o:0}return 0},tdARV(e,t={}){return h["a"].td(e,{sortValue:this.getArvInt(e),...t})},confirmPatient(e){return this.$router.push("/patients/confirm?person_id="+e)},async drilldownAsyncRows(e,t,o,r=!0){const n=await l["X"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:o,canExport:r,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["X"].dismiss()}});n.present()},async drilldownData(e,t,o,r){const n=await l["X"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:o,rowParser:r,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["X"].dismiss()}});n.present()},getDefaultDrillDownTable(){const e=[[h["a"].thTxt("ARV number"),h["a"].thTxt("Gender"),h["a"].thTxt("Birth Date"),h["a"].thTxt("Actions")]],t=async e=>{let t=0;const o=e.map(async e=>{let o=null,r=null;if(Object(m["isArray"])(e)){const[t,o]=e;if(r=t,o in this.drillDownCache)return[r,...this.drillDownCache[o].slice(1)]}else if(o=e,o in this.drillDownCache)return this.drillDownCache[o];const n=await a["a"].findByID(o),i=new a["a"](n),s=[];return r&&(t=1,s.push(r)),s.push(this.tdARV(i.getArvNumber())),s.push(h["a"].td(this.formatGender(i.getGender()))),s.push(h["a"].tdDate(i.getBirthdate().toString())),s.push(h["a"].tdBtn("Show",async()=>{await l["X"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+o})})),this.drillDownCache[o]=s,s}),r=await Promise.all(o);return r.sort((e,o)=>e[t].sortValue>o[t].sortValue?1:-1)};return{rowParser:t,columns:e}},runTableDrill(e,t="Drilldown patients"){const{columns:o,rowParser:r}=this.getDefaultDrillDownTable();this.drilldownData(t,o,e,r)},drill(e,t="Drill table"){return e&&e.length>0?h["a"].tdLink(e.length,()=>this.runTableDrill(e,t)):h["a"].td(0)},getQuaterOptions(){const e=d["a"].getReportQuarters();return e.map(e=>({label:e.name,value:e.start,other:e}))},getDateDurationFields(e=!1,t=!1,o=5,n=r["e"].getSessionDate()){const a="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:u["b"].TT_SELECT,condition:()=>e,validation:e=>p["a"].required(e),options:()=>{const e=d["a"].getReportQuarters(o);let r=e.map(e=>({label:e.name,value:e.start,other:e}));return t&&(r=[{label:"Set custom period",value:"custom_period",other:{}},...r]),r}},...Object(i["b"])({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,minDate:()=>a,maxDate:()=>n,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(i["b"])({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,unload:(e,t,o,r)=>{"next"===t&&(this.endDate=r.end_date)},minDate:(e,t)=>t.start_date,maxDate:()=>n,estimation:{allowUnknown:!1},computeValue:e=>e}),{id:"occupation",helpText:"Report Group",type:u["b"].TT_SELECT,init:async()=>(this.isMilitarySite=await b["a"].get("IS_MILITARY_SITE"),!0),computedValue:e=>e.value,condition:()=>{var e;return"ART"===(null===(e=this.app)||void 0===e?void 0:e.applicationName)&&this.isMilitarySite},validation:e=>p["a"].required(e),options:()=>[{label:"All",value:"All"},{label:"Military",value:"Military"},{label:"Civilian",value:"Civilian"}]}]}}});const g=j;t["a"]=g},"4ba2":function(e,t,o){"use strict";var r=o("7a23");const n=["innerHTML"],i={class:"header-text-list"},a=["onClick"],s={key:1},l=["innerHTML"],c={key:0},d={class:"report-content"};function u(e,t,o,u,p,h){const m=Object(r["resolveComponent"])("his-standard-form"),b=Object(r["resolveComponent"])("ion-title"),O=Object(r["resolveComponent"])("ion-img"),f=Object(r["resolveComponent"])("ion-thumbnail"),j=Object(r["resolveComponent"])("ion-chip"),g=Object(r["resolveComponent"])("ion-label"),w=Object(r["resolveComponent"])("ion-item"),C=Object(r["resolveComponent"])("ion-toolbar"),v=Object(r["resolveComponent"])("ion-header"),y=Object(r["resolveComponent"])("report-table"),D=Object(r["resolveComponent"])("ion-content"),R=Object(r["resolveComponent"])("ion-footer"),x=Object(r["resolveComponent"])("his-footer"),F=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["withDirectives"])(Object(r["createVNode"])(m,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[r["vShow"],!e.canShowReport]]),e.canShowReport?(Object(r["openBlock"])(),Object(r["createBlock"])(F,{key:0},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(v,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(C,null,{default:Object(r["withCtx"])(()=>[e.showtitleOnly?(Object(r["openBlock"])(),Object(r["createBlock"])(b,{key:0},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("span",{innerHTML:e.title},null,8,n)]),_:1})):Object(r["createCommentVNode"])("",!0),e.showtitleOnly?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(w,{key:1},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(f,{slot:"start"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(O,{src:e.logo},null,8,["src"])]),_:1}),Object(r["createVNode"])(g,null,{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("ul",i,[Object(r["createElementVNode"])("li",null,[Object(r["createTextVNode"])("Title "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.title),1)]),Object(r["createElementVNode"])("li",null,[Object(r["createTextVNode"])("Period "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.period),1)]),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.headerInfoList,(e,t)=>{var o,n;return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:t},[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.label)+" ",1),e&&null!==e&&void 0!==e&&null!==(o=e.other)&&void 0!==o&&o.onclick?(Object(r["openBlock"])(),Object(r["createElementBlock"])("a",{key:0,href:"#",onClick:Object(r["withModifiers"])(t=>e.other.onclick(),["prevent"])},Object(r["toDisplayString"])(e.value),9,a)):Object(r["createCommentVNode"])("",!0),!e||null!==e&&void 0!==e&&null!==(n=e.other)&&void 0!==n&&n.onclick?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("b",s,[Object(r["createElementVNode"])("span",{innerHTML:e.value},null,8,l)]))])}),128)),e.showValidationStatus?(Object(r["openBlock"])(),Object(r["createElementBlock"])("li",c,[e.hasErrors?(Object(r["openBlock"])(),Object(r["createBlock"])(j,{key:0,onClick:e.showErrors,color:"danger"},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.errorCount),1),Object(r["createTextVNode"])(" Error(s) found. Click for more ")]),_:1},8,["onClick"])):Object(r["createCommentVNode"])("",!0),e.hasErrors?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(j,{key:1,color:"success"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(" Report is Consistent ")]),_:1}))])):Object(r["createCommentVNode"])("",!0)])]),_:1})]),_:1}))]),_:1})]),_:1}),Object(r["createVNode"])(D,null,{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(y,{rows:e.rows,columns:e.columns,showFilters:e.showFilters,config:{...e.config,tableCssTheme:e.tableCssTheme},onOnActiveColumns:e.onActiveColumns,onOnActiveRows:e.onActiveRows},null,8,["rows","columns","showFilters","config","onOnActiveColumns","onOnActiveRows"])])]),_:1}),Object(r["createVNode"])(R,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(C,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(j,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("Date Created: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.date),1)]),_:1}),Object(r["createVNode"])(j,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("His-Core Version: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(r["createVNode"])(j,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("API Version: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(x,{btns:e.btns},null,8,["btns"])]),_:1})):Object(r["createCommentVNode"])("",!0)],64)}o("14d9");var p=o("0f25"),h=o("80e3"),m=o("ba82"),b=o("9ceb"),O=o("7920"),f=o("d867"),j=o("b5e4"),g=o("1718"),w=o("1c74"),C=o("5a0c"),v=o.n(C),y=o("2ef0"),D=o("ff8f"),R=o("7f35"),x=o("0011"),F=Object(r["defineComponent"])({components:{HisStandardForm:O["a"],IonHeader:f["q"],ReportTable:h["a"],HisFooter:p["a"],IonPage:f["D"],IonContent:f["n"],IonToolbar:f["S"],IonChip:f["l"],IonFooter:f["o"],IonLabel:f["x"],IonThumbnail:f["Q"],IonItem:f["w"],IonImg:f["s"]},props:{encryptPDF:{type:Boolean,default:!1},showValidationStatus:{type:Boolean,default:!1},validationErrors:{type:Array,default:()=>[]},config:{type:Object},headerInfoList:{type:Array,default:()=>[]},reportPrefix:{type:String,default:""},reportLogo:{type:String},showtitleOnly:{type:Boolean,default:!1},title:{type:String,required:!0},period:{type:String},showFilters:{type:Boolean,default:!1},fields:{type:Array,default:()=>[]},columns:{type:Object,required:!0},rows:{type:Object,required:!0},customBtns:{type:Array,default:()=>[]},hasServerSideCaching:{type:Boolean,default:!1},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},enabledPDFHorizontalPageBreak:{type:Boolean,default:!1},onFinishBtnAction:{type:Function},onReportConfiguration:{type:Function,required:!0},onDefaultConfiguration:{type:Function},customFileName:{type:String,default:""}},data:()=>({date:"",formData:{},btns:[],computeFormData:{},activeColumns:[],activeRows:[],isLoadingData:!1,canShowReport:!1,siteUUID:w["e"].getSiteUUID(),apiVersion:w["e"].getApiVersion(),coreVersion:w["e"].getCoreVersion(),artVersion:w["e"].getAppVersion(),tableCssTheme:"art-report-theme"}),watch:{validationErrors:{handler(e){Object(y["isEmpty"])(e)||this.showErrors()},deep:!0,immediate:!0},fields:{handler(e){Object(y["isEmpty"])(e)?(this.canShowReport=!0,this.refreshTimeStamp()):(this.canShowReport=!1,this.btns.forEach(e=>{"Back"===e.name&&(e.visible=!0)}))},immediate:!0}},computed:{logo(){if(!this.reportLogo&&"string"===typeof this.reportPrefix){if(this.reportPrefix.match(/pepfar/i))return Object(g["a"])("login-logos/PEPFAR.png");if(this.reportPrefix.match(/moh/i))return Object(g["a"])("login-logos/Malawi-Coat_of_arms_of_arms.png")}return Object(g["a"])("reports.png")},hasErrors(){return!Object(y["isEmpty"])(this.validationErrors)},errorCount(){return this.validationErrors?this.validationErrors.length:0},footerRows(){const e=[["Date Created: "+this.date]];return this.period&&e.push(["Quarter: "+this.period]),e.push(["HIS-Core Version: "+this.coreVersion]),e.push(["API Version: "+this.apiVersion]),e.push(["Site UUID: "+this.siteUUID]),e.push(["Generated by: "+w["e"].getUserName()]),e}},methods:{async showErrors(){const e=await f["X"].create({component:D["a"],backdropDismiss:!1,cssClass:"large-modal",componentProps:{errors:this.validationErrors}});e.present()},pdfEncryptionData(){const e=w["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}},refreshTimeStamp(){this.date=v()().format("DD/MMM/YYYY HH:MM:ss")},onActiveColumns(e){this.activeColumns=e},onActiveRows(e){this.activeRows=e},getFileName(){var e;return this.customFileName||`${this.reportPrefix} ${w["e"].getLocationName()} ${Object(x["g"])(this.title).replace(this.reportPrefix,"")} ${null!==(e=this.period)&&void 0!==e?e:this.date}`},async onLoadDefault(){this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),this.onDefaultConfiguration&&await this.onDefaultConfiguration(),f["W"].dismiss()}catch(e){Object(j["c"])(""+e),console.error(e),f["W"].dismiss()}},async onFinish(e,t,o=!1){this.formData=e,this.computeFormData=t,this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),await this.onReportConfiguration(this.formData,this.computeFormData,o),f["W"].dismiss()}catch(r){Object(j["c"])(""+r),console.error(r),f["W"].dismiss()}},async reloadReport(e=!1){Object(y["isEmpty"])(this.formData)&&Object(y["isEmpty"])(this.computeFormData)?this.onDefaultConfiguration&&await this.onLoadDefault():await this.onFinish(this.formData,this.computeFormData,e)},async presentLoading(){const e=await f["W"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.onDefaultConfiguration&&this.onLoadDefault(),this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(b["b"])(this.activeColumns,this.activeRows,"csvMode");Object(m["a"])(e,[...t,...this.footerRows],this.getFileName())}}),this.btns.push({name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{let e="pdfMode";if(this.encryptPDF){const t=await Object(R["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");e="Secure PDF"===t?"pdfMode":"ignorePDFColumnexport"}const{columns:t,rows:o}=Object(b["b"])(this.activeColumns,this.activeRows,e);Object(m["c"])(t,o,this.getFileName(),this.enabledPDFHorizontalPageBreak,this.encryptPDF&&"ignorePDFColumnexport"!=e?this.pdfEncryptionData():{})}}),this.btns.push({name:"Refresh/Rebuild",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>{let e=!1;this.hasServerSideCaching&&(e=await Object(j["a"])("Do you want to rebuild report cache?",{header:"Rebuild Report"})),this.reloadReport(e)}}),this.btns.push({name:"Back",size:"large",slot:"end",color:"primary",visible:!Object(y["isEmpty"])(this.fields),onClick:()=>this.canShowReport=!1}),this.btns.push({name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>{this.onFinishBtnAction?this.onFinishBtnAction():this.$router.push({path:"/"})}})}}),V=(o("68a7"),o("6b0d")),T=o.n(V);const _=T()(F,[["render",u],["__scopeId","data-v-5ed78ee7"]]);t["a"]=_},6547:function(e,t,o){},"68a7":function(e,t,o){"use strict";o("3811")},7920:function(e,t,o){"use strict";var r=o("7a23");function n(e,t,o,n,i,a){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var i=o("9441"),a=Object(r["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:i["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=o("6b0d"),l=o.n(s);const c=l()(a,[["render",n]]);t["a"]=c},"9a5e":function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r=o("ade3"),n=(o("14d9"),o("5969")),i=o("bef6");class a extends n["a"]{constructor(){super(),Object(r["a"])(this,"org",void 0),Object(r["a"])(this,"initializeArvRefillReportTables",void 0),this.org="pepfar",this.initializeArvRefillReportTables=!0}initArvRefillPeriod(e){this.initializeArvRefillReportTables=e}setOrg(e){this.org=e}getClinicTxRtt(){return this.getReport(`programs/${this.programID}/reports/clinic_tx_rtt`)}getTxMMDClientLevelData(e){const t=i["a"].parameterizeObjToString({start_date:this.startDate,end_date:this.endDate,program_id:this.programID,date:this.date,org:this.org}),o="tx_mmd_client_level_data?"+t;return n["a"].postJson(o,{patient_ids:e})}remapTxClientLevelData(e){return e.map(e=>{let t=null;const o=[];for(const r in e){const n=Object.values(e[r]);n.forEach(e=>{for(const r in e){const n=e[r];t||(t={id:n.arv_number,dob:n.birthdate,dispenseDate:n.start_date}),o.push({name:n.drug_name,quantity:n.quantity,dose:n.dose_per_day})}})}return{...t,drugs:o}})}getTxCurrMMDReport(e,t){return this.getReport("arv_refill_periods",{org:this.org,min_age:""+e,max_age:""+t,initialize_tables:""+this.initializeArvRefillReportTables})}getTxMlReport(){return this.getReport("tx_ml")}getTxNewReport(){return this.getReport(`programs/${this.programID}/reports/tx_new`)}getTxRttReport(){return this.getReport("tx_rtt")}getMaternalStatus(e){const t=i["a"].parameterizeObjToString({start_date:this.startDate,end_date:this.endDate,date:this.date,program_id:this.programID,report_definition:"pepfar"});return n["a"].postJson("vl_maternal_status?"+t,{patient_ids:e})}}},ff8f:function(e,t,o){"use strict";var r=o("7a23");const n=["innerHTML"];function i(e,t,o,i,a,s){const l=Object(r["resolveComponent"])("ion-title"),c=Object(r["resolveComponent"])("ion-toolbar"),d=Object(r["resolveComponent"])("ion-header"),u=Object(r["resolveComponent"])("ion-item"),p=Object(r["resolveComponent"])("ion-list"),h=Object(r["resolveComponent"])("ion-grid"),m=Object(r["resolveComponent"])("ion-button"),b=Object(r["resolveComponent"])("ion-footer");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(d,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(c,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(l,null,{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(h,{class:"selector"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])(()=>[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.errors,(e,t)=>(Object(r["openBlock"])(),Object(r["createBlock"])(u,{class:"his-md-text ion-padding",key:t},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("span",{innerHTML:`(${t+1}) ${e}`},null,8,n)]),_:2},1024))),128))]),_:1})]),_:1}),Object(r["createVNode"])(b,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(c,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(m,{class:"close-btn",color:"danger",size:"large",onClick:e.closeModal,slot:"end"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(" Close ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var a=o("d867"),s=Object(r["defineComponent"])({components:{IonGrid:a["p"],IonList:a["y"],IonItem:a["w"],IonFooter:a["o"],IonButton:a["d"],IonToolbar:a["S"],IonHeader:a["q"],IonTitle:a["R"]},props:{title:{type:String,default:"Report Errors"},errors:{type:Array,required:!0}},methods:{async closeModal(){await a["X"].dismiss({})}}}),l=(o("054e"),o("6b0d")),c=o.n(l);const d=c()(s,[["render",i],["__scopeId","data-v-0ed0c7a2"]]);t["a"]=d}}]);
//# sourceMappingURL=chunk-99890d0e.74416786.js.map