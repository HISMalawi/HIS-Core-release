(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01dd2699"],{"054e":function(e,t,o){"use strict";o("9c1a")},"1d66":function(e,t,o){"use strict";o("353d")},"353d":function(e,t,o){},"44e3":function(e,t,o){"use strict";o("14d9");var r=o("1c74"),n=o("7a23"),a=o("b446"),i=o("23e6"),s=o("9283"),l=o("d867"),c=o("d6aa"),d=o("5969"),h=o("d95e"),u=o("2706"),p=o("9ceb"),m=o("2ef0"),b=Object(n["defineComponent"])({data:()=>({fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",drillDownCache:{}}),methods:{formatGender(e){const t=(""+e).toUpperCase();return"M"===t||"MALE"===t?"Male":"F"===t||"FEMALE"===t?"Female":/fbf|fnp|fp/i.test(e)?t:e},toDate(e){return s["c"].toStandardHisDisplayFormat(e)},sortByArvNumber(e,t="arv_number"){try{return e.sort((e,o)=>this.getArvInt(e[t])>this.getArvInt(o[t])?1:-1)}catch(o){return console.error(o),e}},getArvInt(e){if("string"===typeof e){const[t,o,r]=e.split("-"),n=parseInt(r);return"number"===typeof n?n:0}return 0},tdARV(e,t={}){return p["a"].td(e,{sortValue:this.getArvInt(e),...t})},confirmPatient(e){return this.$router.push("/patients/confirm?person_id="+e)},async drilldownAsyncRows(e,t,o,r=!0){const n=await l["modalController"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:o,canExport:r,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["modalController"].dismiss()}});n.present()},async drilldownData(e,t,o,r){const n=await l["modalController"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:o,rowParser:r,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["modalController"].dismiss()}});n.present()},getDefaultDrillDownTable(){const e=[[p["a"].thTxt("ARV number"),p["a"].thTxt("Gender"),p["a"].thTxt("Birth Date"),p["a"].thTxt("Actions")]],t=async e=>{let t=0;const o=e.map(async e=>{let o=null,r=null;if(Object(m["isArray"])(e)){const[t,o]=e;if(r=t,o in this.drillDownCache){const[e,...t]=this.drillDownCache[o];return[r,...t]}}else if(o=e,o in this.drillDownCache)return this.drillDownCache[o];const n=await i["a"].findByID(o),a=new i["a"](n),s=[];return r&&(t=1,s.push(r)),s.push(this.tdARV(a.getArvNumber())),s.push(p["a"].td(this.formatGender(a.getGender()))),s.push(p["a"].tdDate(a.getBirthdate().toString())),s.push(p["a"].tdBtn("Show",async()=>{await l["modalController"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+o})})),this.drillDownCache[o]=s,s}),r=await Promise.all(o);return r.sort((e,o)=>e[t].sortValue>o[t].sortValue?1:-1)};return{rowParser:t,columns:e}},runTableDrill(e,t="Drilldown patients"){const{columns:o,rowParser:r}=this.getDefaultDrillDownTable();this.drilldownData(t,o,e,r)},drill(e,t="Drill table"){return e&&e.length>0?p["a"].tdLink(e.length,()=>this.runTableDrill(e,t)):p["a"].td(0)},getQuaterOptions(){const e=d["a"].getReportQuarters();return e.map(e=>({label:e.name,value:e.start,other:e}))},getDateDurationFields(e=!1,t=!1,o=5,n=r["e"].getSessionDate()){const i="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:h["b"].TT_SELECT,condition:()=>e,validation:e=>u["a"].required(e),options:()=>{const e=d["a"].getReportQuarters(o);let r=e.map(e=>({label:e.name,value:e.start,other:e}));return t&&(r=[{label:"Set custom period",value:"custom_period",other:{}},...r]),r}},...Object(a["b"])({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,minDate:()=>i,maxDate:()=>n,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(a["b"])({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,unload:(e,t,o,r)=>{"next"===t&&(this.endDate=r.end_date)},minDate:(e,t)=>t.start_date,maxDate:()=>n,estimation:{allowUnknown:!1},computeValue:e=>e})]}}});const g=b;t["a"]=g},"4ba2":function(e,t,o){"use strict";var r=o("7a23");const n=["innerHTML"],a={class:"header-text-list"},i=["onClick"],s={key:1},l=["innerHTML"],c={key:0},d={class:"report-content"};function h(e,t,o,h,u,p){const m=Object(r["resolveComponent"])("his-standard-form"),b=Object(r["resolveComponent"])("ion-title"),g=Object(r["resolveComponent"])("ion-img"),f=Object(r["resolveComponent"])("ion-thumbnail"),O=Object(r["resolveComponent"])("ion-chip"),j=Object(r["resolveComponent"])("ion-label"),w=Object(r["resolveComponent"])("ion-item"),C=Object(r["resolveComponent"])("ion-toolbar"),y=Object(r["resolveComponent"])("ion-header"),v=Object(r["resolveComponent"])("report-table"),D=Object(r["resolveComponent"])("ion-content"),F=Object(r["resolveComponent"])("ion-footer"),x=Object(r["resolveComponent"])("his-footer"),T=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["withDirectives"])(Object(r["createVNode"])(m,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[r["vShow"],!e.canShowReport]]),e.canShowReport?(Object(r["openBlock"])(),Object(r["createBlock"])(T,{key:0},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(y,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(C,null,{default:Object(r["withCtx"])(()=>[e.showtitleOnly?(Object(r["openBlock"])(),Object(r["createBlock"])(b,{key:0},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("span",{innerHTML:e.title},null,8,n)]),_:1})):Object(r["createCommentVNode"])("",!0),e.showtitleOnly?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(w,{key:1},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(f,{slot:"start"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(g,{src:e.logo},null,8,["src"])]),_:1}),Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("ul",a,[Object(r["createElementVNode"])("li",null,[Object(r["createTextVNode"])("Title "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.title),1)]),Object(r["createElementVNode"])("li",null,[Object(r["createTextVNode"])("Period "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.period),1)]),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.headerInfoList,(e,t)=>{var o,n;return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:t},[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.label)+" ",1),e&&null!==e&&void 0!==e&&null!==(o=e.other)&&void 0!==o&&o.onclick?(Object(r["openBlock"])(),Object(r["createElementBlock"])("a",{key:0,href:"#",onClick:Object(r["withModifiers"])(t=>e.other.onclick(),["prevent"])},Object(r["toDisplayString"])(e.value),9,i)):Object(r["createCommentVNode"])("",!0),!e||null!==e&&void 0!==e&&null!==(n=e.other)&&void 0!==n&&n.onclick?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("b",s,[Object(r["createElementVNode"])("span",{innerHTML:e.value},null,8,l)]))])}),128)),e.showValidationStatus?(Object(r["openBlock"])(),Object(r["createElementBlock"])("li",c,[e.hasErrors?(Object(r["openBlock"])(),Object(r["createBlock"])(O,{key:0,onClick:e.showErrors,color:"danger"},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.errorCount),1),Object(r["createTextVNode"])(" Error(s) found. Click for more ")]),_:1},8,["onClick"])):Object(r["createCommentVNode"])("",!0),e.hasErrors?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(O,{key:1,color:"success"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(" Report is Consistent ")]),_:1}))])):Object(r["createCommentVNode"])("",!0)])]),_:1})]),_:1}))]),_:1})]),_:1}),Object(r["createVNode"])(D,null,{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(v,{rows:e.rows,columns:e.columns,showFilters:e.showFilters,config:{...e.config,tableCssTheme:e.tableCssTheme},onOnActiveColumns:e.onActiveColumns,onOnActiveRows:e.onActiveRows},null,8,["rows","columns","showFilters","config","onOnActiveColumns","onOnActiveRows"])])]),_:1}),Object(r["createVNode"])(F,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(C,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(O,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("Date Created: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.date),1)]),_:1}),Object(r["createVNode"])(O,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("His-Core Version: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(r["createVNode"])(O,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("API Version: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(x,{btns:e.btns},null,8,["btns"])]),_:1})):Object(r["createCommentVNode"])("",!0)],64)}o("14d9");var u=o("0f25"),p=o("80e3"),m=o("ba82"),b=o("9ceb"),g=o("7920"),f=o("d867"),O=o("b5e4"),j=o("1718"),w=o("1c74"),C=o("5a0c"),y=o.n(C),v=o("2ef0");const D=["innerHTML"];function F(e,t,o,n,a,i){const s=Object(r["resolveComponent"])("ion-title"),l=Object(r["resolveComponent"])("ion-toolbar"),c=Object(r["resolveComponent"])("ion-header"),d=Object(r["resolveComponent"])("ion-item"),h=Object(r["resolveComponent"])("ion-list"),u=Object(r["resolveComponent"])("ion-grid"),p=Object(r["resolveComponent"])("ion-button"),m=Object(r["resolveComponent"])("ion-footer");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(c,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(l,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(s,null,{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(u,{class:"selector"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(h,null,{default:Object(r["withCtx"])(()=>[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.errors,(e,t)=>(Object(r["openBlock"])(),Object(r["createBlock"])(d,{class:"his-md-text ion-padding",key:t},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("span",{innerHTML:`(${t+1}) ${e}`},null,8,D)]),_:2},1024))),128))]),_:1})]),_:1}),Object(r["createVNode"])(m,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(l,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(p,{class:"close-btn",color:"danger",size:"large",onClick:e.closeModal,slot:"end"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(" Close ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var x=Object(r["defineComponent"])({components:{IonGrid:f["IonGrid"],IonList:f["IonList"],IonItem:f["IonItem"],IonFooter:f["IonFooter"],IonButton:f["IonButton"],IonToolbar:f["IonToolbar"],IonHeader:f["IonHeader"],IonTitle:f["IonTitle"]},props:{title:{type:String,default:"Report Errors"},errors:{type:Array,required:!0}},methods:{async closeModal(){await f["modalController"].dismiss({})}}}),T=(o("054e"),o("d959")),R=o.n(T);const V=R()(x,[["render",F],["__scopeId","data-v-0ed0c7a2"]]);var I=V,k=o("7f35"),_=o("0011"),N=Object(r["defineComponent"])({components:{HisStandardForm:g["a"],IonHeader:f["IonHeader"],ReportTable:p["a"],HisFooter:u["a"],IonPage:f["IonPage"],IonContent:f["IonContent"],IonToolbar:f["IonToolbar"],IonChip:f["IonChip"],IonFooter:f["IonFooter"],IonLabel:f["IonLabel"],IonThumbnail:f["IonThumbnail"],IonItem:f["IonItem"],IonImg:f["IonImg"]},props:{encryptPDF:{type:Boolean,default:!1},showValidationStatus:{type:Boolean,default:!1},validationErrors:{type:Array,default:()=>[]},config:{type:Object},headerInfoList:{type:Array,default:()=>[]},reportPrefix:{type:String,default:"HIS-Core"},reportLogo:{type:String},showtitleOnly:{type:Boolean,default:!1},title:{type:String,required:!0},period:{type:String},showFilters:{type:Boolean,default:!1},fields:{type:Object},columns:{type:Object,required:!0},rows:{type:Object,required:!0},customBtns:{type:Array,default:()=>[]},hasServerSideCaching:{type:Boolean,default:!1},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},enabledPDFHorizontalPageBreak:{type:Boolean,default:!1},onFinishBtnAction:{type:Function},onReportConfiguration:{type:Function,required:!0},onDefaultConfiguration:{type:Function},customFileName:{type:String,default:""}},data:()=>({date:"",formData:{},btns:[],computeFormData:{},activeColumns:[],activeRows:[],isLoadingData:!1,canShowReport:!1,siteUUID:w["e"].getSiteUUID(),apiVersion:w["e"].getApiVersion(),coreVersion:w["e"].getCoreVersion(),artVersion:w["e"].getAppVersion(),tableCssTheme:"art-report-theme"}),watch:{validationErrors:{handler(e){Object(v["isEmpty"])(e)||this.showErrors()},deep:!0,immediate:!0},fields:{handler(e){Object(v["isEmpty"])(e)||this.btns.forEach(e=>{"Back"===e.name&&(e.visible=!0)})},immediate:!0}},computed:{logo(){if(!this.reportLogo&&"string"===typeof this.reportPrefix){if(this.reportPrefix.match(/pepfar/i))return Object(j["a"])("login-logos/PEPFAR.png");if(this.reportPrefix.match(/moh/i))return Object(j["a"])("login-logos/Malawi-Coat_of_arms_of_arms.png")}return Object(j["a"])("reports.png")},hasErrors(){return!Object(v["isEmpty"])(this.validationErrors)},errorCount(){return this.validationErrors?this.validationErrors.length:0}},methods:{async showErrors(){const e=await f["modalController"].create({component:I,backdropDismiss:!1,cssClass:"large-modal",componentProps:{errors:this.validationErrors}});e.present()},pdfEncryptionData(){const e=w["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}},refreshTimeStamp(){this.date=y()().format("DD/MMM/YYYY HH:MM:ss")},onActiveColumns(e){this.activeColumns=e},onActiveRows(e){this.activeRows=e},getFileName(){return this.customFileName?this.customFileName:`${this.reportPrefix} ${w["e"].getLocationName()} ${Object(_["e"])(this.title)} ${this.period}`},async onLoadDefault(){this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),this.onDefaultConfiguration&&await this.onDefaultConfiguration(),f["loadingController"].dismiss()}catch(e){Object(O["c"])(""+e),console.error(e),f["loadingController"].dismiss()}},async onFinish(e,t,o=!1){this.formData=e,this.computeFormData=t,this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),await this.onReportConfiguration(this.formData,this.computeFormData,o),f["loadingController"].dismiss()}catch(r){Object(O["c"])(""+r),console.error(r),f["loadingController"].dismiss()}},async reloadReport(e=!1){Object(v["isEmpty"])(this.formData)&&Object(v["isEmpty"])(this.computeFormData)?this.onDefaultConfiguration&&await this.onLoadDefault():await this.onFinish(this.formData,this.computeFormData,e)},async presentLoading(){const e=await f["loadingController"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.onDefaultConfiguration&&this.onLoadDefault(),this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(b["b"])(this.activeColumns,this.activeRows,"csvMode");Object(m["a"])(e,[...t,["Date Created: "+this.date],["Quarter: "+this.period],["HIS-Core Version: "+this.coreVersion],["API Version: "+this.apiVersion],["Site UUID: "+this.siteUUID],["Generated by: "+w["e"].getUserName()]],this.getFileName())}}),this.btns.push({name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{let e="pdfMode";if(this.encryptPDF){const t=await Object(k["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");e="Secure PDF"===t?"pdfMode":"ignorePDFColumnexport"}const{columns:t,rows:o}=Object(b["b"])(this.activeColumns,this.activeRows,e);Object(m["c"])(t,o,this.getFileName(),this.enabledPDFHorizontalPageBreak,this.encryptPDF&&"ignorePDFColumnexport"!=e?this.pdfEncryptionData():{})}}),this.btns.push({name:"Refresh/Rebuild",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>{let e=!1;this.hasServerSideCaching&&(e=await Object(O["a"])("Do you want to rebuild report cache?",{header:"Rebuild Report"})),this.reloadReport(e)}}),this.btns.push({name:"Back",size:"large",slot:"end",color:"primary",visible:!Object(v["isEmpty"])(this.fields),onClick:()=>this.canShowReport=!1}),this.btns.push({name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>{this.onFinishBtnAction?this.onFinishBtnAction():this.$router.push({path:"/"})}})}});o("1d66");const P=R()(N,[["render",h],["__scopeId","data-v-2feab4be"]]);t["a"]=P},7920:function(e,t,o){"use strict";var r=o("7a23");function n(e,t,o,n,a,i){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var a=o("9441"),i=Object(r["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:a["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=o("d959"),l=o.n(s);const c=l()(i,[["render",n]]);t["a"]=c},"9a5e":function(e,t,o){"use strict";o.d(t,"b",(function(){return c})),o.d(t,"a",(function(){return d}));var r=o("ade3"),n=(o("14d9"),o("13d5"),o("5969")),a=o("bef6"),i=o("2ef0"),s=o("ad8d");const l=["F","M"],c=["Died","IIT <3 mo","IIT 3-5 mo","IIT 6+ mo","Tranferred out","Refused (Stopped)"];class d extends n["a"]{constructor(){super(),Object(r["a"])(this,"org",void 0),Object(r["a"])(this,"initializeArvRefillReportTables",void 0),this.org="pepfar",this.initializeArvRefillReportTables=!0}initArvRefillPeriod(e){this.initializeArvRefillReportTables=e}setOrg(e){this.org=e}getClinicTxRtt(){return this.getReport(`programs/${this.programID}/reports/clinic_tx_rtt`)}getTxMMDClientLevelData(e){const t=a["a"].parameterizeObjToString({start_date:this.startDate,end_date:this.endDate,program_id:this.programID,date:this.date,org:this.org}),o="tx_mmd_client_level_data?"+t;return n["a"].postJson(o,{patient_ids:e})}remapTxClientLevelData(e){return e.map(e=>{let t=null;const o=[];for(const r in e){const n=Object.values(e[r]);n.forEach(e=>{for(const r in e){const n=e[r];t||(t={id:n.arv_number,dob:n.birthdate,dispenseDate:n.start_date}),o.push({name:n.drug_name,quantity:n.quantity,dose:n.dose_per_day})}})}return{...t,drugs:o}})}getTxCurrMMDReport(e,t){return this.getReport("arv_refill_periods",{org:this.org,min_age:""+e,max_age:""+t,initialize_tables:""+this.initializeArvRefillReportTables})}getTxMlReport(){return this.getReport("tx_ml")}getTxRttReport(){return this.getReport("tx_rtt")}buildTxMlReportData(e){const t=[];return l.forEach(o=>{s["a"].forEach(r=>{const n={gender:o,age_group:r};c.forEach((t,a)=>{n[t]=Object(i["get"])(e,`${r}.${o}[${a}]`,[])}),t.push(n)})}),t}aggregateTxML(e,t,o){return Object.values(e).reduce((e,r)=>r[t]?[...r[t][c.indexOf(o)],...e]:e,[])}getAggregatedTxMLMaleData(e){const t={gender:"Male",age_group:"All"};for(const o of c)t[o]=this.aggregateTxML(e,"M",o);return t}async getAggregatedTxMLMaternalStatus(e){const t=c.reduce((t,o)=>[...t,{indicator:o,data:this.aggregateTxML(e,"F",o)}],[]),o=Object(i["uniq"])(t.reduce((e,t)=>[...e,...t.data],[]).map(e=>e.patient_id)),r=await this.getMaternalStatus(o),n=r.FBf.concat(r.FP),a=[];for(const i of["FP","FNP","FBf"]){const e={gender:i,age_group:"All"};for(const o of c)e[o]=t.reduce((e,t)=>t.indicator===o?[...e,...t.data]:e,[]).filter(e=>"FNP"===i?!n.includes(e.patient_id):r[i].includes(e.patient_id));a.push(e)}return a}}},"9c1a":function(e,t,o){},d1a4:function(e,t,o){"use strict";o.r(t);var r=o("7a23");function n(e,t,o,n,a,i){const s=Object(r["resolveComponent"])("report-template"),l=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createBlock"])(l,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(s,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,config:{showIndex:!0},reportPrefix:"PEPFAR",onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])]),_:1})}o("13d5"),o("14d9");var a=o("44e3"),i=o("9a5e"),s=o("4ba2"),l=o("9ceb"),c=o("ad8d"),d=o("2ef0"),h=Object(r["defineComponent"])({mixins:[a["a"]],components:{ReportTemplate:s["a"]},data:()=>({title:"TX RTT Report",cohort:{},rows:[],columns:[[l["a"].thTxt("Age group"),l["a"].thTxt("Gender"),l["a"].thTxt("Returned <3 mo"),l["a"].thTxt("Returned 3-5 mo"),l["a"].thTxt("Returned 6+ mo")]],aggregations:[]}),created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(e,t){this.rows=[],this.aggregations=[],this.report=new i["a"],this.report.setStartDate(t.start_date),this.report.setEndDate(t.end_date),this.period=this.report.getDateIntervalPeriod(),this.cohort=await this.report.getTxRttReport(),this.setRows("F"),this.setRows("M"),this.setTotalMaleRow(),this.setMaternalRows()},aggregate(e,t){return this.aggregations.reduce((o,r)=>r.gender===e&&r[t]?[...o,...r[t]]:o,[])},setTotalMaleRow(){const e=e=>this.drill(this.aggregate("M",e),"All male "+e);this.rows.push([l["a"].td("All"),l["a"].td("Male"),e("<3 months"),e("3-5 months"),e("6+ months")])},async setMaternalRows(){const e=["<3 months","3-5 months","6+ months"].reduce((e,t)=>[...e,{indicator:t,data:this.aggregate("F",t)}],[]),t=await this.report.getMaternalStatus(Object(d["uniq"])(e.reduce((e,t)=>[...e,...t.data],[]).map(e=>e))),o=t=>e.reduce((e,o)=>o.indicator===t?[...e,...o.data]:e,[]),r=(e,r)=>this.drill(o(r).filter(o=>t[e].includes(o)),`All returned ${r} (${e})`),n=t.FBf.concat(t.FP),a=e=>this.drill(o(e).filter(e=>!n.includes(e)),`All returned ${e} FNP`);this.rows.push([l["a"].td("All"),l["a"].td("FP"),r("FP","<3 months"),r("FP","3-5 months"),r("FP","6+ months")]),this.rows.push([l["a"].td("All"),l["a"].td("FNP"),a("<3 months"),a("3-5 months"),a("6+ months")]),this.rows.push([l["a"].td("All"),l["a"].td("FBF"),r("FBf","<3 months"),r("FBf","3-5 months"),r("FBf","6+ months")])},setRows(e){const t=(e,t)=>e.filter(e=>t(e.months)).map(e=>e.patient_id);for(const o in c["a"]){const r=c["a"][o],n=this.formatGender(e);if(r in this.cohort){const o=this.cohort[r][e],a=e=>t(o,e),i=a(e=>e<3),s=a(e=>e>=3&&e<=5),c=a(e=>e>=6);this.rows.push([l["a"].td(r),l["a"].td(n),this.drill(i,`${r} (${n}s) Returned <3 mo`),this.drill(s,`${r} (${n}s) Returned 3-5 mo`),this.drill(c,`${r} (${n}s) Returned 6+ mo`)]),this.aggregations.push({gender:e,"<3 months":i,"3-5 months":s,"6+ months":c})}else this.rows.push([l["a"].td(r),l["a"].td(n),l["a"].td(0),l["a"].td(0),l["a"].td(0)])}}}}),u=o("d959"),p=o.n(u);const m=p()(h,[["render",n]]);t["default"]=m}}]);
//# sourceMappingURL=chunk-01dd2699.55ad9805.js.map