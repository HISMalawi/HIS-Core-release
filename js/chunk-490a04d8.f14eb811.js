(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-490a04d8"],{"054e":function(e,t,n){"use strict";n("6547c")},1497:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5969");class o extends r["a"]{constructor(){super(),this.programID=23}getSamplesDrawnReport(){return this.getReport("samples_drawn")}getLabResultsReport(){return this.getReport("lab_test_results")}}},"41b4":function(e,t,n){},"4a46":function(e,t,n){"use strict";n("41b4")},"4ba2":function(e,t,n){"use strict";var r=n("5530"),o=n("7a23"),a=Object(o["withScopeId"])("data-v-47b6d7e8");Object(o["pushScopeId"])("data-v-47b6d7e8");var i={class:"header-text-list"},c=Object(o["createTextVNode"])("Title "),s=Object(o["createTextVNode"])("Period "),u={key:1},l={key:0},d=Object(o["createTextVNode"])(" Error(s) found. Click for more "),p=Object(o["createTextVNode"])(" Report is Consistent "),b={class:"report-content"},f=Object(o["createTextVNode"])("Date Created: "),m=Object(o["createTextVNode"])("His-Core Version: "),h=Object(o["createTextVNode"])("API Version: ");Object(o["popScopeId"])();var O=a((function(e,t,n,O,g,v){var j=Object(o["resolveComponent"])("his-standard-form"),y=Object(o["resolveComponent"])("ion-title"),k=Object(o["resolveComponent"])("ion-img"),C=Object(o["resolveComponent"])("ion-thumbnail"),w=Object(o["resolveComponent"])("ion-chip"),R=Object(o["resolveComponent"])("ion-label"),V=Object(o["resolveComponent"])("ion-item"),x=Object(o["resolveComponent"])("ion-toolbar"),D=Object(o["resolveComponent"])("ion-header"),F=Object(o["resolveComponent"])("report-table"),T=Object(o["resolveComponent"])("ion-content"),_=Object(o["resolveComponent"])("ion-footer"),N=Object(o["resolveComponent"])("his-footer"),S=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["withDirectives"])(Object(o["createVNode"])(j,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[o["vShow"],!e.canShowReport]]),e.canShowReport?(Object(o["openBlock"])(),Object(o["createBlock"])(S,{key:0},{default:a((function(){return[Object(o["createVNode"])(D,null,{default:a((function(){return[Object(o["createVNode"])(x,null,{default:a((function(){return[e.showtitleOnly?(Object(o["openBlock"])(),Object(o["createBlock"])(y,{key:0},{default:a((function(){return[Object(o["createVNode"])("span",{innerHTML:e.title},null,8,["innerHTML"])]})),_:1})):Object(o["createCommentVNode"])("",!0),e.showtitleOnly?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(V,{key:1},{default:a((function(){return[Object(o["createVNode"])(C,{slot:"start"},{default:a((function(){return[Object(o["createVNode"])(k,{src:e.logo},null,8,["src"])]})),_:1}),Object(o["createVNode"])(R,null,{default:a((function(){return[Object(o["createVNode"])("ul",i,[Object(o["createVNode"])("li",null,[c,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.title),1)]),Object(o["createVNode"])("li",null,[s,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.period),1)]),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.headerInfoList,(function(e,t){var n,r;return Object(o["openBlock"])(),Object(o["createBlock"])("li",{key:t},[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.label)+" ",1),e&&null!==e&&void 0!==e&&null!==(n=e.other)&&void 0!==n&&n.onclick?(Object(o["openBlock"])(),Object(o["createBlock"])("a",{key:0,href:"#",onClick:Object(o["withModifiers"])((function(t){return e.other.onclick()}),["prevent"])},Object(o["toDisplayString"])(e.value),9,["onClick"])):Object(o["createCommentVNode"])("",!0),!e||null!==e&&void 0!==e&&null!==(r=e.other)&&void 0!==r&&r.onclick?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("b",u,[Object(o["createVNode"])("span",{innerHTML:e.value},null,8,["innerHTML"])]))])})),128)),e.showValidationStatus?(Object(o["openBlock"])(),Object(o["createBlock"])("li",l,[e.hasErrors?(Object(o["openBlock"])(),Object(o["createBlock"])(w,{key:0,onClick:e.showErrors,color:"danger"},{default:a((function(){return[Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.errorCount),1),d]})),_:1},8,["onClick"])):Object(o["createCommentVNode"])("",!0),e.hasErrors?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(w,{key:1,color:"success"},{default:a((function(){return[p]})),_:1}))])):Object(o["createCommentVNode"])("",!0)])]})),_:1})]})),_:1}))]})),_:1})]})),_:1}),Object(o["createVNode"])(T,null,{default:a((function(){return[Object(o["createVNode"])("div",b,[Object(o["createVNode"])(F,{rows:e.rows,columns:e.columns,showFilters:e.showFilters,config:Object(r["a"])(Object(r["a"])({},e.config),{},{tableCssTheme:e.tableCssTheme}),onOnActiveColumns:e.onActiveColumns,onOnActiveRows:e.onActiveRows},null,8,["rows","columns","showFilters","config","onOnActiveColumns","onOnActiveRows"])])]})),_:1}),Object(o["createVNode"])(_,null,{default:a((function(){return[Object(o["createVNode"])(x,null,{default:a((function(){return[Object(o["createVNode"])(w,{color:"primary"},{default:a((function(){return[f,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.date),1)]})),_:1}),Object(o["createVNode"])(w,{color:"primary"},{default:a((function(){return[m,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.coreVersion),1)]})),_:1}),Object(o["createVNode"])(w,{color:"primary"},{default:a((function(){return[h,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.apiVersion),1)]})),_:1})]})),_:1})]})),_:1}),Object(o["createVNode"])(N,{btns:e.btns},null,8,["btns"])]})),_:1})):Object(o["createCommentVNode"])("",!0)],64)})),g=n("2909"),v=n("1da1"),j=(n("96cf"),n("d3b7"),n("159b"),n("b0c0"),n("ac1f"),n("466d"),n("99af"),n("0f25")),y=n("80e3"),k=n("ba82"),C=n("9ceb"),w=n("7920"),R=n("8a30"),V=n("b5e4"),x=n("1718"),D=n("1c74"),F=n("5a0c"),T=n.n(F),_=n("2ef0"),N=Object(o["withScopeId"])("data-v-0ed0c7a2");Object(o["pushScopeId"])("data-v-0ed0c7a2");var S=Object(o["createTextVNode"])(" Close ");Object(o["popScopeId"])();var I=N((function(e,t,n,r,a,i){var c=Object(o["resolveComponent"])("ion-title"),s=Object(o["resolveComponent"])("ion-toolbar"),u=Object(o["resolveComponent"])("ion-header"),l=Object(o["resolveComponent"])("ion-item"),d=Object(o["resolveComponent"])("ion-list"),p=Object(o["resolveComponent"])("ion-grid"),b=Object(o["resolveComponent"])("ion-button"),f=Object(o["resolveComponent"])("ion-footer");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(u,null,{default:N((function(){return[Object(o["createVNode"])(s,null,{default:N((function(){return[Object(o["createVNode"])(c,null,{default:N((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title),1)]})),_:1})]})),_:1})]})),_:1}),Object(o["createVNode"])(p,{class:"selector"},{default:N((function(){return[Object(o["createVNode"])(d,null,{default:N((function(){return[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.errors,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(l,{class:"his-md-text ion-padding",key:t},{default:N((function(){return[Object(o["createVNode"])("span",{innerHTML:"(".concat(t+1,") ").concat(e)},null,8,["innerHTML"])]})),_:2},1024)})),128))]})),_:1})]})),_:1}),Object(o["createVNode"])(f,null,{default:N((function(){return[Object(o["createVNode"])(s,null,{default:N((function(){return[Object(o["createVNode"])(b,{class:"close-btn",color:"danger",size:"large",onClick:e.closeModal,slot:"end"},{default:N((function(){return[S]})),_:1},8,["onClick"])]})),_:1})]})),_:1})],64)})),B=Object(o["defineComponent"])({components:{IonGrid:R["p"],IonList:R["y"],IonItem:R["w"],IonFooter:R["o"],IonButton:R["d"],IonToolbar:R["Q"],IonHeader:R["q"],IonTitle:R["P"]},props:{title:{type:String,default:"Report Errors"},errors:{type:Array,required:!0}},methods:{closeModal:function(){return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R["X"].dismiss({});case 2:case"end":return e.stop()}}),e)})))()}}}),E=(n("054e"),n("6b0d")),P=n.n(E);const A=P()(B,[["render",I],["__scopeId","data-v-0ed0c7a2"]]);var L=A,M=Object(o["defineComponent"])({components:{HisStandardForm:w["a"],IonHeader:R["q"],ReportTable:y["a"],HisFooter:j["a"],IonPage:R["D"],IonContent:R["n"],IonToolbar:R["Q"],IonChip:R["l"],IonFooter:R["o"],IonLabel:R["x"],IonThumbnail:R["O"],IonItem:R["w"],IonImg:R["s"]},props:{showValidationStatus:{type:Boolean,default:!1},validationErrors:{type:Array,default:function(){return[]}},config:{type:Object},headerInfoList:{type:Array,default:function(){return[]}},reportPrefix:{type:String,default:"HIS-Core"},reportLogo:{type:String},showtitleOnly:{type:Boolean,default:!1},title:{type:String,required:!0},period:{type:String},showFilters:{type:Boolean,default:!1},fields:{type:Object},columns:{type:Object,required:!0},rows:{type:Object,required:!0},customBtns:{type:Array,default:function(){return[]}},hasServerSideCaching:{type:Boolean,default:!1},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},enabledPDFHorizontalPageBreak:{type:Boolean,default:!1},onFinishBtnAction:{type:Function},onReportConfiguration:{type:Function,required:!0},onDefaultConfiguration:{type:Function},customFileName:{type:String,default:""}},data:function(){return{date:"",formData:{},btns:[],computeFormData:{},activeColumns:[],activeRows:[],isLoadingData:!1,canShowReport:!1,siteUUID:D["e"].getSiteUUID(),apiVersion:D["e"].getApiVersion(),coreVersion:D["e"].getCoreVersion(),artVersion:D["e"].getAppVersion(),tableCssTheme:"art-report-theme"}},watch:{validationErrors:{handler:function(e){Object(_["isEmpty"])(e)||this.showErrors()},deep:!0,immediate:!0},fields:{handler:function(e){Object(_["isEmpty"])(e)||this.btns.forEach((function(e){"Back"===e.name&&(e.visible=!0)}))},immediate:!0}},computed:{logo:function(){if(!this.reportLogo&&"string"===typeof this.reportPrefix){if(this.reportPrefix.match(/pepfar/i))return Object(x["a"])("login-logos/PEPFAR.png");if(this.reportPrefix.match(/moh/i))return Object(x["a"])("login-logos/Malawi-Coat_of_arms_of_arms.png")}return Object(x["a"])("reports.png")},hasErrors:function(){return!Object(_["isEmpty"])(this.validationErrors)},errorCount:function(){return this.validationErrors?this.validationErrors.length:0}},methods:{showErrors:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,R["X"].create({component:L,backdropDismiss:!1,cssClass:"large-modal",componentProps:{errors:e.validationErrors}});case 2:n=t.sent,n.present();case 4:case"end":return t.stop()}}),t)})))()},refreshTimeStamp:function(){this.date=T()().format("DD/MMM/YYYY HH:MM:ss")},onActiveColumns:function(e){this.activeColumns=e},onActiveRows:function(e){this.activeRows=e},getFileName:function(){return this.customFileName?this.customFileName:"".concat(this.reportPrefix," ").concat(D["e"].getLocationName()," ").concat(this.title," ").concat(this.period)},onLoadDefault:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.canShowReport=!0,t.next=3,e.presentLoading();case 3:if(t.prev=3,e.refreshTimeStamp(),!e.onDefaultConfiguration){t.next=8;break}return t.next=8,e.onDefaultConfiguration();case 8:R["V"].dismiss(),t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](3),Object(V["c"])(t.t0),console.error(t.t0),R["V"].dismiss();case 16:case"end":return t.stop()}}),t,null,[[3,11]])})))()},onFinish:function(e,t){var n=arguments,r=this;return Object(v["a"])(regeneratorRuntime.mark((function o(){var a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return a=n.length>2&&void 0!==n[2]&&n[2],r.formData=e,r.computeFormData=t,r.canShowReport=!0,o.next=6,r.presentLoading();case 6:return o.prev=6,r.refreshTimeStamp(),o.next=10,r.onReportConfiguration(r.formData,r.computeFormData,a);case 10:R["V"].dismiss(),o.next=18;break;case 13:o.prev=13,o.t0=o["catch"](6),Object(V["c"])(o.t0),console.error(o.t0),R["V"].dismiss();case 18:case"end":return o.stop()}}),o,null,[[6,13]])})))()},reloadReport:function(){var e=arguments,t=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.length>0&&void 0!==e[0]&&e[0],Object(_["isEmpty"])(t.formData)&&Object(_["isEmpty"])(t.computeFormData)){n.next=5;break}return n.next=4,t.onFinish(t.formData,t.computeFormData,r);case 4:return n.abrupt("return");case 5:if(!t.onDefaultConfiguration){n.next=8;break}return n.next=8,t.onLoadDefault();case 8:case"end":return n.stop()}}),n)})))()},presentLoading:function(){return Object(v["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R["V"].create({message:"Please wait...",backdropDismiss:!1});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;this.onDefaultConfiguration&&this.onLoadDefault(),this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=Object(C["b"])(e.activeColumns,e.activeRows),r=n.columns,o=n.rows,Object(k["a"])(r,[].concat(Object(g["a"])(o),[["Date Created: ".concat(e.date)],["Quarter: ".concat(e.period)],["HIS-Core Version: ".concat(e.coreVersion)],["API Version: ".concat(e.apiVersion)],["Site UUID: ".concat(e.siteUUID)]]),e.getFileName());case 2:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()}),this.btns.push({name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=Object(C["b"])(e.activeColumns,e.activeRows),r=n.columns,o=n.rows,Object(k["b"])(r,o,e.getFileName(),e.enabledPDFHorizontalPageBreak);case 2:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()}),this.btns.push({name:"Refresh/Rebuild",size:"large",slot:"end",color:"warning",visible:!0,onClick:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=!1,!e.hasServerSideCaching){t.next=5;break}return t.next=4,Object(V["a"])("Do you want to rebuild report cache?",{header:"Rebuild Report"});case 4:n=t.sent;case 5:e.reloadReport(n);case 6:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()}),this.btns.push({name:"Back",size:"large",slot:"end",color:"primary",visible:!Object(_["isEmpty"])(this.fields),onClick:function(){return e.canShowReport=!1}}),this.btns.push({name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:function(){e.onFinishBtnAction?e.onFinishBtnAction():e.$router.push({path:"/"})}})}});n("4a46");const H=P()(M,[["render",O],["__scopeId","data-v-47b6d7e8"]]);t["a"]=H},"6547c":function(e,t,n){},7920:function(e,t,n){"use strict";var r=n("7a23");function o(e,t,n,o,a,i){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,8,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var a=n("9441"),i=Object(r["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:a["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),c=n("6b0d"),s=n.n(c);const u=s()(i,[["render",o]]);t["a"]=u},ad8d:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n("d4ec"),o=n("bee2"),a=n("262e"),i=n("2caf"),c=n("5969"),s=["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"],u=function(e){Object(a["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(r["a"])(this,n),t.call(this)}return Object(o["a"])(n,[{key:"getBookedAppointments",value:function(e){return c["a"].getJson("programs/".concat(this.programID,"/scheduled_appointments"),{date:e})}},{key:"getViralLoadResults",value:function(e){return this.getReport("/programs/".concat(this.programID,"/reports/high_vl_patients"),{range:e})}},{key:"getOtherOutcome",value:function(e){return this.getReport("patient_outcome_list",{outcome:e})}},{key:"getPatientVisitTypes",value:function(){return this.getReport("patient_visit_types")}},{key:"getClientsDueForVl",value:function(){return this.getReport("clients_due_vl")}},{key:"getClientRentention",value:function(){return this.getReport("/programs/".concat(this.programID,"/reports/retention"))}},{key:"getExternalConsultationClients",value:function(){return this.getReport("".concat(this.programID,"/external_consultation_clients"))}},{key:"getMissedAppointments",value:function(){return this.getReport("missed_appointments")}},{key:"getPregnantWomen",value:function(){return this.getReport("/programs/".concat(this.programID,"/reports/pregnant_patients"))}},{key:"getArchivingCandidates",value:function(){return c["a"].getJson("programs/".concat(this.programID,"/reports/archiving_candidates"),{start_date:this.date})}}]),n}(c["a"])},e9ce:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t,n,o,a,i){var c=Object(r["resolveComponent"])("report-template");return Object(r["openBlock"])(),Object(r["createBlock"])(c,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,canExportCsv:!0,canExportPDf:!0,reportReady:e.reportReady,onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","reportReady","onReportConfiguration"])}var a=n("2909"),i=n("1da1"),c=(n("99af"),n("d3b7"),n("159b"),n("b0c0"),n("ac1f"),n("00b4"),n("d81d"),n("4de4"),n("96cf"),n("1497")),s=n("44e3"),u=n("4ba2"),l=n("ad8d"),d=n("d95e"),p=n("9ceb"),b=Object(r["defineComponent"])({mixins:[s["a"]],components:{ReportTemplate:u["a"]},data:function(){return{title:"Lab test result(s)",rows:[],cohort:[],reportType:"",reportReady:!1,columns:[],patientLevelColumns:[[p["a"].thTxt("ARV#"),p["a"].thTxt("Gender"),p["a"].thTxt("Birthdate"),p["a"].thTxt("Ordered"),p["a"].thTxt("Specimen"),p["a"].thTxt("Test"),p["a"].thTxt("Result"),p["a"].thTxt("Released")]],disaggregatedColumns:[p["a"].thTxt("Age group"),p["a"].thTxt("Gender")]}},created:function(){this.report=new c["a"],this.fields=this.getFormFields()},methods:{onPeriod:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.type,o=e.tests,t.reportReady=!0,t.rows=[],t.period=t.report.getDateIntervalPeriod(),t.reportType=r.value,"disaggregated"===t.reportType?t.setDisaggregatedRows(o):"patient_level"===t.reportType&&t.setPatientLevelRows(o);case 6:case"end":return n.stop()}}),n)})))()},getFormFields:function(){var e=this;return[].concat(Object(a["a"])(this.getDateDurationFields()),[{id:"tests",helpText:"Available test(s) results",type:d["b"].TT_MULTIPLE_SELECT,options:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n,r,o){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.report.setStartDate(o.start_date),e.report.setEndDate(o.end_date),t.next=4,e.report.getLabResultsReport();case 4:return a=t.sent,i=e.buildAvailableTests(a),t.abrupt("return",e.buildAvailableTestOptions(i));case 7:case"end":return t.stop()}}),t)})));function n(e,n,r){return t.apply(this,arguments)}return n}()},{id:"type",helpText:"Select report type",type:d["b"].TT_SELECT,options:function(){return[{label:"Disaggregated",value:"disaggregated"},{label:"Patient level",value:"patient_level"}]}}])},buildAvailableTests:function(e){var t=this,n={};return this.sortByArvNumber(e).forEach((function(e){e.measures.forEach((function(r){r.name in n||(n[r.name]=[]),n[r.name].push({id:e.patient_id,arv:e.arv_number,gender:e.gender,ageGroup:e.age_group,birthdate:t.toDate(e.birthdate),ordered:t.toDate(e.order_date),specimen:e.test,test:r.name,result:"".concat(r.modifier," ").concat(r.value),released:t.toDate(e.result_date)})}))})),n},buildAvailableTestOptions:function(e){var t=[];for(var n in e){var r=e[n];t.push({label:n,value:r.length,other:r})}return t},setDisaggregatedRows:function(e){var t=this,n=[],r=[];this.columns=[this.disaggregatedColumns.concat(e.map((function(e){return p["a"].thTxt(e.label)})))];var o=function(o){var a=l["a"][o],i=[p["a"].td(a),p["a"].td("M")],c=[p["a"].td(a),p["a"].td("F")];e.forEach((function(e){var n=e.other,r=function(e){return n.filter((function(t){return t.gender===e&&t.ageGroup===a})).map((function(e){return e.id}))};i.push(t.drill(r("M"))),c.push(t.drill(r("F")))})),n.push(i),r.push(c),t.rows=[].concat(r,n)};for(var a in l["a"])o(a)},setPatientLevelRows:function(e){var t=this;this.columns=[this.patientLevelColumns],e.forEach((function(e){var n=e.other;n.forEach((function(e){t.rows.push([t.tdARV(e.arv),p["a"].td(e.gender),p["a"].tdDate(e.birthdate),p["a"].tdDate(e.ordered),p["a"].td(e.specimen),p["a"].td(e.test),p["a"].td(e.result),p["a"].tdDate(e.released)])}))}))}}}),f=n("6b0d"),m=n.n(f);const h=m()(b,[["render",o]]);t["default"]=h}}]);
//# sourceMappingURL=chunk-490a04d8.f14eb811.js.map