(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b196d84"],{"054e":function(e,t,o){"use strict";o("9c1a")},"44e3":function(e,t,o){"use strict";var r=o("1c74"),a=o("7a23"),n=o("b446"),i=o("23e6"),s=o("9283"),l=o("8a30"),c=o("d6aa"),d=o("5969"),h=o("d95e"),u=o("2706"),p=o("9ceb"),m=o("2ef0"),b=Object(a["defineComponent"])({data:()=>({fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",drillDownCache:{}}),methods:{formatGender(e){return"M"===e||"male"===e.toLowerCase()?"Male":"Female"},toDate(e){return s["b"].toStandardHisDisplayFormat(e)},sortByArvNumber(e,t="arv_number"){try{return e.sort((e,o)=>this.getArvInt(e[t])>this.getArvInt(o[t])?1:-1)}catch(o){return console.error(o),e}},getArvInt(e){if("string"===typeof e){const[t,o,r]=e.split("-"),a=parseInt(r);return"number"===typeof a?a:0}return 0},tdARV(e,t={}){return p["a"].td(e,{sortValue:this.getArvInt(e),...t})},confirmPatient(e){return this.$router.push("/patients/confirm?person_id="+e)},async drilldownAsyncRows(e,t,o,r=!0){const a=await l["Z"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:o,canExport:r,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["Z"].dismiss()}});a.present()},async drilldownData(e,t,o,r){const a=await l["Z"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:o,rowParser:r,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["Z"].dismiss()}});a.present()},getDefaultDrillDownTable(){const e=[[p["a"].thTxt("ARV number"),p["a"].thTxt("Gender"),p["a"].thTxt("Birth Date"),p["a"].thTxt("Actions")]],t=async e=>{let t=0;const o=e.map(async e=>{let o=null,r=null;if(Object(m["isArray"])(e)){const[t,o]=e;if(r=t,o in this.drillDownCache){const[e,...t]=this.drillDownCache[o];return[r,...t]}}else if(o=e,o in this.drillDownCache)return this.drillDownCache[o];const a=await i["a"].findByID(o),n=new i["a"](a),s=[];return r&&(t=1,s.push(r)),s.push(this.tdARV(n.getArvNumber())),s.push(p["a"].td(this.formatGender(n.getGender()))),s.push(p["a"].tdDate(n.getBirthdate().toString())),s.push(p["a"].tdBtn("Show",async()=>{await l["Z"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+o})})),this.drillDownCache[o]=s,s}),r=await Promise.all(o);return r.sort((e,o)=>e[t].sortValue>o[t].sortValue?1:-1)};return{rowParser:t,columns:e}},runTableDrill(e,t="Drilldown patients"){const{columns:o,rowParser:r}=this.getDefaultDrillDownTable();this.drilldownData(t,o,e,r)},drill(e,t="Drill table"){return e&&e.length>0?p["a"].tdLink(e.length,()=>this.runTableDrill(e,t)):p["a"].td(0)},getQuaterOptions(){const e=d["a"].getReportQuarters();return e.map(e=>({label:e.name,value:e.start,other:e}))},getDateDurationFields(e=!1,t=!1,o=5,a=r["e"].getSessionDate()){const i="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:h["b"].TT_SELECT,condition:()=>e,validation:e=>u["a"].required(e),options:()=>{const e=d["a"].getReportQuarters(o);let r=e.map(e=>({label:e.name,value:e.start,other:e}));return t&&(r=[{label:"Set custom period",value:"custom_period",other:{}},...r]),r}},...Object(n["b"])({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,minDate:()=>i,maxDate:()=>a,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(n["b"])({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,unload:(e,t,o,r)=>{"next"===t&&(this.endDate=r.end_date)},minDate:(e,t)=>t.start_date,maxDate:()=>a,estimation:{allowUnknown:!1},computeValue:e=>e})]}}});const g=b;t["a"]=g},"4a46":function(e,t,o){"use strict";o("5a43")},"4ba2":function(e,t,o){"use strict";var r=o("7a23");const a=Object(r["withScopeId"])("data-v-47b6d7e8");Object(r["pushScopeId"])("data-v-47b6d7e8");const n={class:"header-text-list"},i=Object(r["createTextVNode"])("Title "),s=Object(r["createTextVNode"])("Period "),l={key:1},c={key:0},d=Object(r["createTextVNode"])(" Error(s) found. Click for more "),h=Object(r["createTextVNode"])(" Report is Consistent "),u={class:"report-content"},p=Object(r["createTextVNode"])("Date Created: "),m=Object(r["createTextVNode"])("His-Core Version: "),b=Object(r["createTextVNode"])("API Version: ");Object(r["popScopeId"])();const g=a((function(e,t,o,g,w,f){const O=Object(r["resolveComponent"])("his-standard-form"),D=Object(r["resolveComponent"])("ion-title"),j=Object(r["resolveComponent"])("ion-img"),v=Object(r["resolveComponent"])("ion-thumbnail"),_=Object(r["resolveComponent"])("ion-chip"),y=Object(r["resolveComponent"])("ion-label"),V=Object(r["resolveComponent"])("ion-item"),F=Object(r["resolveComponent"])("ion-toolbar"),C=Object(r["resolveComponent"])("ion-header"),T=Object(r["resolveComponent"])("report-table"),R=Object(r["resolveComponent"])("ion-content"),S=Object(r["resolveComponent"])("ion-footer"),B=Object(r["resolveComponent"])("his-footer"),k=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["withDirectives"])(Object(r["createVNode"])(O,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[r["vShow"],!e.canShowReport]]),e.canShowReport?(Object(r["openBlock"])(),Object(r["createBlock"])(k,{key:0},{default:a(()=>[Object(r["createVNode"])(C,null,{default:a(()=>[Object(r["createVNode"])(F,null,{default:a(()=>[e.showtitleOnly?(Object(r["openBlock"])(),Object(r["createBlock"])(D,{key:0},{default:a(()=>[Object(r["createVNode"])("span",{innerHTML:e.title},null,8,["innerHTML"])]),_:1})):Object(r["createCommentVNode"])("",!0),e.showtitleOnly?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(V,{key:1},{default:a(()=>[Object(r["createVNode"])(v,{slot:"start"},{default:a(()=>[Object(r["createVNode"])(j,{src:e.logo},null,8,["src"])]),_:1}),Object(r["createVNode"])(y,null,{default:a(()=>[Object(r["createVNode"])("ul",n,[Object(r["createVNode"])("li",null,[i,Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.title),1)]),Object(r["createVNode"])("li",null,[s,Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.period),1)]),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(e.headerInfoList,(e,t)=>{var o,a;return Object(r["openBlock"])(),Object(r["createBlock"])("li",{key:t},[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.label)+" ",1),e&&null!==e&&void 0!==e&&null!==(o=e.other)&&void 0!==o&&o.onclick?(Object(r["openBlock"])(),Object(r["createBlock"])("a",{key:0,href:"#",onClick:Object(r["withModifiers"])(t=>e.other.onclick(),["prevent"])},Object(r["toDisplayString"])(e.value),9,["onClick"])):Object(r["createCommentVNode"])("",!0),!e||null!==e&&void 0!==e&&null!==(a=e.other)&&void 0!==a&&a.onclick?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])("b",l,[Object(r["createVNode"])("span",{innerHTML:e.value},null,8,["innerHTML"])]))])}),128)),e.showValidationStatus?(Object(r["openBlock"])(),Object(r["createBlock"])("li",c,[e.hasErrors?(Object(r["openBlock"])(),Object(r["createBlock"])(_,{key:0,onClick:e.showErrors,color:"danger"},{default:a(()=>[Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.errorCount),1),d]),_:1},8,["onClick"])):Object(r["createCommentVNode"])("",!0),e.hasErrors?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(_,{key:1,color:"success"},{default:a(()=>[h]),_:1}))])):Object(r["createCommentVNode"])("",!0)])]),_:1})]),_:1}))]),_:1})]),_:1}),Object(r["createVNode"])(R,null,{default:a(()=>[Object(r["createVNode"])("div",u,[Object(r["createVNode"])(T,{rows:e.rows,columns:e.columns,showFilters:e.showFilters,config:{...e.config,tableCssTheme:e.tableCssTheme},onOnActiveColumns:e.onActiveColumns,onOnActiveRows:e.onActiveRows},null,8,["rows","columns","showFilters","config","onOnActiveColumns","onOnActiveRows"])])]),_:1}),Object(r["createVNode"])(S,null,{default:a(()=>[Object(r["createVNode"])(F,null,{default:a(()=>[Object(r["createVNode"])(_,{color:"primary"},{default:a(()=>[p,Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.date),1)]),_:1}),Object(r["createVNode"])(_,{color:"primary"},{default:a(()=>[m,Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(r["createVNode"])(_,{color:"primary"},{default:a(()=>[b,Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(B,{btns:e.btns},null,8,["btns"])]),_:1})):Object(r["createCommentVNode"])("",!0)],64)}));var w=o("0f25"),f=o("80e3"),O=o("ba82"),D=o("9ceb"),j=o("7920"),v=o("8a30"),_=o("b5e4"),y=o("1718"),V=o("1c74"),F=o("5a0c"),C=o.n(F),T=o("2ef0");const R=Object(r["withScopeId"])("data-v-0ed0c7a2");Object(r["pushScopeId"])("data-v-0ed0c7a2");const S=Object(r["createTextVNode"])(" Close ");Object(r["popScopeId"])();const B=R((function(e,t,o,a,n,i){const s=Object(r["resolveComponent"])("ion-title"),l=Object(r["resolveComponent"])("ion-toolbar"),c=Object(r["resolveComponent"])("ion-header"),d=Object(r["resolveComponent"])("ion-item"),h=Object(r["resolveComponent"])("ion-list"),u=Object(r["resolveComponent"])("ion-grid"),p=Object(r["resolveComponent"])("ion-button"),m=Object(r["resolveComponent"])("ion-footer");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(c,null,{default:R(()=>[Object(r["createVNode"])(l,null,{default:R(()=>[Object(r["createVNode"])(s,null,{default:R(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(u,{class:"selector"},{default:R(()=>[Object(r["createVNode"])(h,null,{default:R(()=>[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(e.errors,(e,t)=>(Object(r["openBlock"])(),Object(r["createBlock"])(d,{class:"his-md-text ion-padding",key:t},{default:R(()=>[Object(r["createVNode"])("span",{innerHTML:`(${t+1}) ${e}`},null,8,["innerHTML"])]),_:2},1024))),128))]),_:1})]),_:1}),Object(r["createVNode"])(m,null,{default:R(()=>[Object(r["createVNode"])(l,null,{default:R(()=>[Object(r["createVNode"])(p,{class:"close-btn",color:"danger",size:"large",onClick:e.closeModal,slot:"end"},{default:R(()=>[S]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}));var k=Object(r["defineComponent"])({components:{IonGrid:v["p"],IonList:v["y"],IonItem:v["w"],IonFooter:v["o"],IonButton:v["d"],IonToolbar:v["S"],IonHeader:v["q"],IonTitle:v["R"]},props:{title:{type:String,default:"Report Errors"},errors:{type:Array,required:!0}},methods:{async closeModal(){await v["Z"].dismiss({})}}}),L=(o("054e"),o("d959")),N=o.n(L);const P=N()(k,[["render",B],["__scopeId","data-v-0ed0c7a2"]]);var x=P,I=Object(r["defineComponent"])({components:{HisStandardForm:j["a"],IonHeader:v["q"],ReportTable:f["a"],HisFooter:w["a"],IonPage:v["D"],IonContent:v["n"],IonToolbar:v["S"],IonChip:v["l"],IonFooter:v["o"],IonLabel:v["x"],IonThumbnail:v["Q"],IonItem:v["w"],IonImg:v["s"]},props:{showValidationStatus:{type:Boolean,default:!1},validationErrors:{type:Array,default:()=>[]},config:{type:Object},headerInfoList:{type:Array,default:()=>[]},reportPrefix:{type:String,default:"HIS-Core"},reportLogo:{type:String},showtitleOnly:{type:Boolean,default:!1},title:{type:String,required:!0},period:{type:String},showFilters:{type:Boolean,default:!1},fields:{type:Object},columns:{type:Object,required:!0},rows:{type:Object,required:!0},customBtns:{type:Array,default:()=>[]},hasServerSideCaching:{type:Boolean,default:!1},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},enabledPDFHorizontalPageBreak:{type:Boolean,default:!1},onFinishBtnAction:{type:Function},onReportConfiguration:{type:Function,required:!0},onDefaultConfiguration:{type:Function},customFileName:{type:String,default:""}},data:()=>({date:"",formData:{},btns:[],computeFormData:{},activeColumns:[],activeRows:[],isLoadingData:!1,canShowReport:!1,siteUUID:V["e"].getSiteUUID(),apiVersion:V["e"].getApiVersion(),coreVersion:V["e"].getCoreVersion(),artVersion:V["e"].getAppVersion(),tableCssTheme:"art-report-theme"}),watch:{validationErrors:{handler(e){Object(T["isEmpty"])(e)||this.showErrors()},deep:!0,immediate:!0},fields:{handler(e){Object(T["isEmpty"])(e)||this.btns.forEach(e=>{"Back"===e.name&&(e.visible=!0)})},immediate:!0}},computed:{logo(){if(!this.reportLogo&&"string"===typeof this.reportPrefix){if(this.reportPrefix.match(/pepfar/i))return Object(y["a"])("login-logos/PEPFAR.png");if(this.reportPrefix.match(/moh/i))return Object(y["a"])("login-logos/Malawi-Coat_of_arms_of_arms.png")}return Object(y["a"])("reports.png")},hasErrors(){return!Object(T["isEmpty"])(this.validationErrors)},errorCount(){return this.validationErrors?this.validationErrors.length:0}},methods:{async showErrors(){const e=await v["Z"].create({component:x,backdropDismiss:!1,cssClass:"large-modal",componentProps:{errors:this.validationErrors}});e.present()},refreshTimeStamp(){this.date=C()().format("DD/MMM/YYYY HH:MM:ss")},onActiveColumns(e){this.activeColumns=e},onActiveRows(e){this.activeRows=e},getFileName(){return this.customFileName?this.customFileName:`${this.reportPrefix} ${V["e"].getLocationName()} ${this.title} ${this.period}`},async onLoadDefault(){this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),this.onDefaultConfiguration&&await this.onDefaultConfiguration(),v["X"].dismiss()}catch(e){Object(_["c"])(e),console.error(e),v["X"].dismiss()}},async onFinish(e,t,o=!1){this.formData=e,this.computeFormData=t,this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),await this.onReportConfiguration(this.formData,this.computeFormData,o),v["X"].dismiss()}catch(r){Object(_["c"])(r),console.error(r),v["X"].dismiss()}},async reloadReport(e=!1){Object(T["isEmpty"])(this.formData)&&Object(T["isEmpty"])(this.computeFormData)?this.onDefaultConfiguration&&await this.onLoadDefault():await this.onFinish(this.formData,this.computeFormData,e)},async presentLoading(){const e=await v["X"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.onDefaultConfiguration&&this.onLoadDefault(),this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(D["b"])(this.activeColumns,this.activeRows);Object(O["a"])(e,[...t,["Date Created: "+this.date],["Quarter: "+this.period],["HIS-Core Version: "+this.coreVersion],["API Version: "+this.apiVersion],["Site UUID: "+this.siteUUID]],this.getFileName())}}),this.btns.push({name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{const{columns:e,rows:t}=Object(D["b"])(this.activeColumns,this.activeRows);Object(O["c"])(e,t,this.getFileName(),this.enabledPDFHorizontalPageBreak)}}),this.btns.push({name:"Refresh/Rebuild",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>{let e=!1;this.hasServerSideCaching&&(e=await Object(_["a"])("Do you want to rebuild report cache?",{header:"Rebuild Report"})),this.reloadReport(e)}}),this.btns.push({name:"Back",size:"large",slot:"end",color:"primary",visible:!Object(T["isEmpty"])(this.fields),onClick:()=>this.canShowReport=!1}),this.btns.push({name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>{this.onFinishBtnAction?this.onFinishBtnAction():this.$router.push({path:"/"})}})}});o("4a46");const A=N()(I,[["render",g],["__scopeId","data-v-47b6d7e8"]]);t["a"]=A},5969:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var r=o("1c74"),a=o("9283"),n=o("5a0c"),i=o.n(n);class s extends r["e"]{constructor(){super(),this.endDate="",this.startDate="",this.quarter="",this.date=r["e"].getSessionDate(),this.programID=r["e"].getProgramID()}getDateIntervalPeriod(){return`${a["b"].toStandardHisDisplayFormat(this.startDate)} - ${a["b"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setQuarter(e){this.quarter=e}getReport(e,t={}){return r["e"].getJson(e,this.buildRequest(t))}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.quarter&&(t["quarter"]=this.quarter),{...t,...e}}static getQuarterBounds(e){const t=t=>i()(`${e}-${t}-01`).daysInMonth(),o=t=>`${e}-${t}-01 00:00`,r=o=>`${e}-${o}-${t(o)} 00:00`;return{Q1:{qtr:1,start:o("01"),end:r("03")},Q2:{qtr:2,start:o("04"),end:r("06")},Q3:{qtr:3,start:o("07"),end:r("09")},Q4:{qtr:4,start:o("10"),end:r("12")}}}static getQtrByDate(e){const t=this.getQuarterBounds(e.getFullYear());for(const o in t){const{start:r,end:a}=t[o];if(e>=new Date(r)&&e<=new Date(a))return t[o]}return null}static buildQtrObj(e,t){const o=this.getQuarterBounds(t),{start:r,end:a}=o[e];return{start:r,end:a,name:`${e} ${t}`}}static getReportQuarters(e=5){const t=[];let o=new Date,r=o.getFullYear();const a=r;o=new Date(`${a}-${o.getMonth()+1}-${o.getDate()} 00:00`);const n=this.getQtrByDate(o);let i=n.qtr,s=0;4===i&&t.push(this.buildQtrObj("Q1",r+1));while(s<e)0===s&&i<4&&t.push(this.buildQtrObj("Q"+(i+1),r)),t.push(this.buildQtrObj("Q"+i,r)),i=i>0?i-=1:i,r=0==i?r-1:r,i=0==i?i+=4:i,s++;return t}}},"5a43":function(e,t,o){},7920:function(e,t,o){"use strict";var r=o("7a23");function a(e,t,o,a,n,i){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,8,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var n=o("9441"),i=Object(r["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:n["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=o("d959"),l=o.n(s);const c=l()(i,[["render",a]]);t["a"]=c},"9c1a":function(e,t,o){},ad8d:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return n}));var r=o("5969");const a=["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"];class n extends r["a"]{constructor(){super()}getBookedAppointments(e){return r["a"].getJson(`programs/${this.programID}/scheduled_appointments`,{date:e})}getViralLoadResults(e){return this.getReport(`/programs/${this.programID}/reports/high_vl_patients`,{range:e})}getOtherOutcome(e){return this.getReport("patient_outcome_list",{outcome:e})}getPatientVisitTypes(){return this.getReport("patient_visit_types")}getClientsDueForVl(){return this.getReport("clients_due_vl")}getClientRentention(){return this.getReport(`/programs/${this.programID}/reports/retention`)}getExternalConsultationClients(){return this.getReport(this.programID+"/external_consultation_clients")}getMissedAppointments(){return this.getReport("missed_appointments")}getPregnantWomen(){return this.getReport(`/programs/${this.programID}/reports/pregnant_patients`)}getArchivingCandidates(){return r["a"].getJson(`programs/${this.programID}/reports/archiving_candidates`,{start_date:this.date})}}},af8a:function(e,t,o){"use strict";o.r(t);var r=o("7a23");function a(e,t,o,a,n,i){const s=Object(r["resolveComponent"])("report-template"),l=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createBlock"])(l,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(s,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,config:{showIndex:!0},reportPrefix:"PEPFAR",onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])]),_:1})}o("13d5");var n=o("44e3"),i=o("4ba2"),s=o("9ceb"),l=o("bef6"),c=o("5969");class d extends c["a"]{constructor(){super()}getVLCoverage(){return this.getReport(`programs/${this.programID}/reports/viral_load_coverage`,{rebuild_outcomes:!0})}getMaternalStatus(e){const t=l["a"].parameterizeObjToString({start_date:this.startDate,end_date:this.endDate,date:this.date,program_id:this.programID,report_definition:"pepfar"});return c["a"].postJson("vl_maternal_status?"+t,{patient_ids:e})}}var h=o("ad8d"),u=o("8a30"),p=o("2ef0"),m=Object(r["defineComponent"])({mixins:[n["a"]],components:{ReportTemplate:i["a"],IonPage:u["D"]},data:()=>({title:"VL Coverage report",cohort:{},rows:[],totals:{F:{},M:{}},columns:[[s["a"].thTxt("",{colspan:4,exportable:!1}),s["a"].thTxt("Sample Drawn",{colspan:2,exportable:!1}),s["a"].thTxt("High VL (>=1000 copies)",{colspan:2,exportable:!1}),s["a"].thTxt("Low VL (<1000 copies)",{colspan:2,exportable:!1})],[s["a"].thTxt("Age group"),s["a"].thTxt("Gender"),s["a"].thTxt("Due for VL"),s["a"].thTxt("Routine",{value:"Routine (Sample Drawn)"}),s["a"].thTxt("Targeted",{value:"Targeted (Sample Drawn)"}),s["a"].thTxt("Routine",{value:"Routine (High VL (>=1000 copies))"}),s["a"].thTxt("Targeted",{value:"Targeted High VL (>=1000 copies)"}),s["a"].thTxt("Routine",{value:"Routine (Low VL (<1000 copies))"}),s["a"].thTxt("Targeted",{value:"Targeted (Low VL (<1000 copies))"})]]}),created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(e,t){this.rows=[],this.totals={F:{},M:{}},this.report=new d,this.report.setStartDate(t.start_date),this.report.setEndDate(t.end_date),this.period=this.report.getDateIntervalPeriod(),this.cohort=await this.report.getVLCoverage(),await this.setRows("F"),await this.setRows("M"),this.setAllMalesTotalsRow(),await this.setFemaleTotalsRow()},setTotals(e,t,o){this.totals[t][e]||(this.totals[t][e]=[]),this.totals[t][e]=this.totals[t][e].concat(o)},drillDown(e,t){if(e.length>=1){const o=[[s["a"].thTxt("ARV #"),s["a"].thTxt("DOB"),s["a"].thTxt("Gender"),s["a"].thTxt("Action")]],r=()=>this.sortByArvNumber(e).map(e=>[this.tdARV(e.arv_number),s["a"].tdDate(e.birthdate),s["a"].td(this.formatGender(e.gender)),s["a"].tdBtn("Show",()=>this.$router.push({path:"/patient/dashboard/"+e.patient_id}))]);return s["a"].tdLink(e.length,()=>this.drilldownAsyncRows(t,o,r))}return s["a"].td(0)},async setFemaleTotalsRow(){const e=this.totals.F,t=Object.values(e).reduce((e,t)=>Object(p["uniq"])(e.concat(t.map(e=>e.patient_id))),[]),o=await this.report.getMaternalStatus(t),r=o.FBf.concat(o.FP),a=(e,t)=>t.filter(t=>o[e].includes(t.patient_id)),n=e=>e.filter(e=>!r.includes(e.patient_id));this.rows.push([s["a"].td("All"),s["a"].td("FP"),this.drillDown(a("FP",e.due_for_vl),"Due for VL FP"),this.drillDown(a("FP",e.drawn_routine),"Routine (Sample Drawn) FP"),this.drillDown(a("FP",e.drawn_targeted),"Targetted (Sample Drawn) FP"),this.drillDown(a("FP",e.high_vl_routine),"Routine (High VL (>=1000 copies)) FP"),this.drillDown(a("FP",e.high_vl_targeted),"Targeted High VL (>=1000 copies) FP"),this.drillDown(a("FP",e.low_vl_routine),"Routine (Low VL (<1000 copies)) FP"),this.drillDown(a("FP",e.low_vl_targeted),"Targeted (Low VL (<1000 copies)) FP")]),this.rows.push([s["a"].td("All"),s["a"].td("FNP"),this.drillDown(n(e.due_for_vl),"Due for VL FNP"),this.drillDown(n(e.drawn_routine),"Routine (Sample Drawn) FNP"),this.drillDown(n(e.drawn_targeted),"Targetted (Sample Drawn) FNP"),this.drillDown(n(e.high_vl_routine),"Routine (High VL (>=1000 copies)) FNP"),this.drillDown(n(e.high_vl_targeted),"Targeted High VL (>=1000 copies) FNP"),this.drillDown(n(e.low_vl_routine),"Routine (Low VL (<1000 copies)) FNP"),this.drillDown(n(e.low_vl_targeted),"Targeted (Low VL (<1000 copies)) FNP")]),this.rows.push([s["a"].td("All"),s["a"].td("FBf"),this.drillDown(a("FBf",e.due_for_vl),"Due for VL FBf"),this.drillDown(a("FBf",e.drawn_routine),"Routine (Sample Drawn) FBf"),this.drillDown(a("FBf",e.drawn_targeted),"Targetted (Sample Drawn) FBf"),this.drillDown(a("FBf",e.high_vl_routine),"Routine (High VL (>=1000 copies)) FBf"),this.drillDown(a("FBf",e.high_vl_targeted),"Targeted High VL (>=1000 copies) FBf"),this.drillDown(a("FBf",e.low_vl_routine),"Routine (Low VL (<1000 copies)) FBf"),this.drillDown(a("FBf",e.low_vl_targeted),"Targeted (Low VL (<1000 copies)) FBf")])},setAllMalesTotalsRow(){const e=this.totals["M"];return this.rows.push([s["a"].td("All"),s["a"].td("Male"),this.drillDown(e.due_for_vl,"Due for VL Male"),this.drillDown(e.drawn_routine,"Routine (Sample Drawn) Male"),this.drillDown(e.drawn_targeted,"Targetted (Sample Drawn) Male"),this.drillDown(e.high_vl_routine,"Routine (High VL (>=1000 copies)) Male"),this.drillDown(e.high_vl_targeted,"Targeted High VL (>=1000 copies) Male"),this.drillDown(e.low_vl_routine,"Routine (Low VL (<1000 copies)) Male"),this.drillDown(e.low_vl_targeted,"Targeted (Low VL (<1000 copies)) Male")])},async setRows(e){const t=this.formatGender(e);for(const o of h["a"])if(o in this.cohort){const r=this.cohort[o],a=(t,o,r)=>{const a=o.filter(t=>t.gender===e);return this.setTotals(t,e,a),this.drillDown(a,r)};this.rows.push([s["a"].td(o),s["a"].td(t),a("due_for_vl",r.due_for_vl,`${o} Due for VL (${t})`),a("drawn_routine",r.drawn.routine,`${o} Routine (Sample Drawn) (${t}s)`),a("drawn_targeted",r.drawn.targeted,`${o} Targeted (Sample Drawn) (${t}s)`),a("high_vl_routine",r.high_vl.routine,`${o} Routine (High VL (>=1000 copies)) (${t}s)`),a("high_vl_targeted",r.high_vl.targeted,`${o} Targeted High VL (>=1000 copies) (${t}s)`),a("low_vl_routine",r.low_vl.routine,`${o} Routine (Low VL (<1000 copies)) (${t}s)`),a("low_vl_targeted",r.low_vl.targeted,`${o} Targeted (Low VL (<1000 copies)) (${t}s)`)])}else this.rows.push([s["a"].td(o),s["a"].td(t),s["a"].td(0),s["a"].td(0),s["a"].td(0),s["a"].td(0),s["a"].td(0),s["a"].td(0)])}}}),b=o("d959"),g=o.n(b);const w=g()(m,[["render",a]]);t["default"]=w}}]);
//# sourceMappingURL=chunk-3b196d84.61b472c3.js.map