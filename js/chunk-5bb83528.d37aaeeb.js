(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bb83528"],{"054e":function(e,t,r){"use strict";r("6547c")},"1b7d":function(e,t,r){"use strict";r.r(t);var n=r("7a23");function o(e,t,r,o,a,i){var c=Object(n["resolveComponent"])("report-template"),s=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(s,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(c,{title:e.title,period:e.period,rows:e.rows,columns:e.columns,headerInfoList:e.headerList,reportPrefix:"MoH",config:{showIndex:!0},validationErrors:e.errors,showValidationStatus:e.canValidate,hasServerSideCaching:!0,enabledPDFHorizontalPageBreak:!0,onReportConfiguration:e.onPeriod,onDefaultConfiguration:e.onLoadDefault},null,8,["title","period","rows","columns","headerInfoList","validationErrors","showValidationStatus","onReportConfiguration","onDefaultConfiguration"])]})),_:1})}var a=r("1da1"),i=r("2909"),c=(r("96cf"),r("99af"),r("d81d"),r("d3b7"),r("4e82"),r("b64b"),r("4de4"),r("159b"),r("caad"),r("2532"),r("ac1f"),r("466d"),r("3ca3"),r("ddb0"),r("44e3")),s=r("2ef6"),u=r("87e7"),l=r("b5e4"),d=r("2ef0"),p=r("4ba2"),f=r("9ceb"),h=r("8a30"),g=r("b31c"),m=r("ad8d"),b=Object(n["defineComponent"])({mixins:[c["a"]],components:{ReportTemplate:p["a"],IonPage:h["D"]},data:function(){return{title:"Disaggregated report",columns:[[f["a"].thTxt("Age group"),f["a"].thTxt("Gender"),f["a"].thNum("Tx new (new on ART)"),f["a"].thNum("TX curr (receiving ART)"),f["a"].thNum("TX curr (received IPT)"),f["a"].thNum("TX curr (screened for TB)")].concat(Object(i["a"])(u["b"].map((function(e){return f["a"].thNum(e)}))),[f["a"].thNum("Unknown"),f["a"].thNum("Total (regimen)")])],errors:[],showStatus:!1,rowDataRefs:["txNew","txCurr","txGivenIpt","txScreenTB"].concat(Object(i["a"])(u["b"]),["N/A","regimenTotals"]),dataRefLabels:{txNew:"Tx new (new on ART)",txCurr:"Tx curr (receiving ART)",txGivenIpt:"TX curr (received IPT)",txScreenTB:"TX curr (screened for TB)","N/A":"Unknown",regimenTotals:"Regimen Totals"},aggregations:[],mohCohort:{},maleFemaleAgeGroupData:{},headerList:[],canValidate:!1,onLoadDefault:null,sortIndexes:{}}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.$route.query,r.start_date&&r.end_date&&r.quarter&&(e.onLoadDefault=function(){return e.onPeriod({quarter:{label:r.quarter,other:{start:r.start_date,end:r.end_date}}},{})});case 2:case"end":return t.stop()}}),t)})))()},watch:{canValidate:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e){r.next=3;break}return r.next=3,t.validateReport();case 3:case"end":return r.stop()}}),r)})))()}},computed:{rows:function(){var e=this;return Object.keys(this.sortIndexes).sort((function(e,t){return parseInt(e)-parseInt(t)})).reduce((function(t,r){return t.concat(e.sortIndexes[r])}),[])}},methods:{onPeriod:function(e,t){var r=arguments,n=this;return Object(a["a"])(regeneratorRuntime.mark((function o(){var a,i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return a=r.length>2&&void 0!==r[2]&&r[2],n.canValidate=!1,n.maleFemaleAgeGroupData={},n.aggregations=[],n.sortIndexes={},n.errors=[],n.report=new s["a"],n.mohCohort=new g["a"],e.quarter?(n.mohCohort.setQuarter(e.quarter.label),n.mohCohort.setStartDate(e.quarter.other.start),n.mohCohort.setEndDate(e.quarter.other.end),n.report.setQuarter(e.quarter.label),n.report.setStartDate(e.quarter.other.start),n.report.setEndDate(e.quarter.other.end),n.period="Custom"===e.quarter.label?n.report.getDateIntervalPeriod():e.quarter.label):(n.mohCohort.setStartDate(t.start_date),n.mohCohort.setEndDate(t.end_date),n.report.setStartDate(t.start_date),n.report.setEndDate(t.end_date),n.period=n.report.getDateIntervalPeriod()),n.report.setRebuildOutcome(a),o.next=12,n.report.init();case 12:if(i=o.sent,i){o.next=15;break}return o.abrupt("return",Object(l["e"])("Unable to initialise report"));case 15:return o.next=17,n.setTableRows();case 17:n.canValidate=!0;case 18:case"end":return o.stop()}}),o)})))()},setTableRows:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.setFemaleRows(1);case 2:return t.next=4,e.setMaleRows(2);case 4:return t.next=6,e.setTotalMalesRow(3);case 6:return t.next=8,e.setFemalePregnantRows(4);case 8:return t.next=10,e.setFemaleBreastFeedingRows(6);case 10:return t.next=12,e.setFemaleNotPregnantRows(5);case 12:case"end":return t.stop()}}),t)})))()},getColumnLabel:function(e){return e in this.dataRefLabels?this.dataRefLabels[e]:e},getTotals:function(e){return this.aggregations.filter((function(t){return e(t)})).reduce((function(e,t){return e.concat(t.data)}),[])},addAggregation:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];this.aggregations.push({col:e,gender:t,data:r})},getRegimenRows:function(e,t){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var o,a,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=[],a=[],n.next=4,r.report.getRegimenDistribution();case 4:return c=n.sent,s=[].concat(Object(i["a"])(u["b"]),["N/A"]),s.forEach((function(n){c[n]&&(o=o.concat(c[n])),a.push(r.drill(c[n],"Regimen ".concat(n," | ").concat(e," | ").concat(t))),r.addAggregation(n,t,c[n])})),a.push(r.drill(o,"Regimen Totals | ".concat(e," | ").concat(t))),r.addAggregation("regimenTotals",t,o),n.abrupt("return",a);case 10:case"end":return n.stop()}}),n)})))()},getValue:function(e,t,r){switch(e){case"tx_given_ipt":return this.report.getTxIpt();case"tx_screened_for_tb":return this.report.getTxCurrTB();default:return t in r?r[t][e]:[]}},setTotalMalesRow:function(e){var t=this,r=function(e,r){var n=t.aggregations.filter((function(t){return"Male"===t.gender&&t.col===e})).reduce((function(e,t){return e.concat(t.data)}),[]);return t.drill(n,r)},n=this.rowDataRefs.map((function(e){return r(e,"".concat(t.getColumnLabel(e)," | All Male"))}));this.sortIndexes[e]=[[f["a"].td("All"),f["a"].td("Male")].concat(Object(i["a"])(n))]},setFemaleNotPregnantRows:function(e){var t=this,r=function(e,r){return t.aggregations.filter((function(e){return e.gender.match(/fp|fbf/i)&&e.col===r})).reduce((function(e,t){return e.concat(t.data||[])}),[]).includes(e)},n=function(e,n){var o=t.aggregations.filter((function(t){return"Female"===t.gender&&t.col===e})).reduce((function(t,n){return t.concat(n.data.filter((function(t){return!r(t,e)})))}),[]);return t.drill(o,n)},o=this.rowDataRefs.map((function(e){return n(e,"".concat(t.getColumnLabel(e)," | FNP"))}));this.sortIndexes[e]=[[f["a"].td("All"),f["a"].td("FNP")].concat(Object(i["a"])(o))]},setFemaleRows:function(e){return this.report.setGender("female"),this.setRows(e,"F",m["a"],"Female")},setMaleRows:function(e){return this.report.setGender("male"),this.setRows(e,"M",m["a"],"Male")},setFemalePregnantRows:function(e){return this.report.setGender("pregnant"),this.setRows(e,"F",["All"],"FP","Pregnant")},setFemaleBreastFeedingRows:function(e){return this.report.setGender("breastfeeding"),this.setRows(e,"F",["All"],"FBf","Breastfeeding")},setRows:function(e,t,r,n){var o=arguments,c=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var u,l,p;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:u=o.length>4&&void 0!==o[4]?o[4]:"",l=regeneratorRuntime.mark((function o(s){var l,p,h,g,m,b,v;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(l=[],p=[],h=[],g=[],m=u||r[s],c.report.setAgeGroup(m),m in c.maleFemaleAgeGroupData){o.next=12;break}return o.next=9,c.report.getCohort();case 9:b=o.sent,c.report.setRebuildOutcome(!1),c.maleFemaleAgeGroupData[m]=Object(d["isEmpty"])(b)?{}:b[m];case 12:if(Object(d["isEmpty"])(c.maleFemaleAgeGroupData[m])){o.next=30;break}return v=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",c.getValue(r,t,c.maleFemaleAgeGroupData[m]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.next=16,v("tx_new");case 16:return l=o.sent,o.next=19,v("tx_curr");case 19:return p=o.sent,o.next=22,v("tx_given_ipt");case 22:return h=o.sent,o.next=25,v("tx_screened_for_tb");case 25:g=o.sent,c.addAggregation("txNew",n,l),c.addAggregation("txCurr",n,p),c.addAggregation("txGivenIpt",n,h),c.addAggregation("txScreenTB",n,g);case 30:o.t0=c.report.getGender(),o.next="breastfeeding"===o.t0?33:"pregnant"===o.t0?36:39;break;case 33:return c.report.setAgeGroup("All"),c.report.setGender("Fbf"),o.abrupt("break",39);case 36:return c.report.setAgeGroup("All"),c.report.setGender("FP"),o.abrupt("break",39);case 39:return c.sortIndexes[e]||(c.sortIndexes[e]=[]),o.t1=c.sortIndexes[e],o.t2=[f["a"].td(r[s]),f["a"].td(n),c.drill(l,"Tx new (new on ART) | ".concat(m," | ").concat(n)),c.drill(p,"Tx curr (receiving ART) | ".concat(m," | ").concat(n)),c.drill(h,"TX curr (received IPT) | ".concat(m," | ").concat(n)),c.drill(g,"TX curr (screened for TB) | ".concat(m," | ").concat(n))],o.t3=i["a"],o.next=45,c.getRegimenRows(m,n);case 45:o.t4=o.sent,o.t5=(0,o.t3)(o.t4),o.t6=o.t2.concat.call(o.t2,o.t5),o.t1.push.call(o.t1,o.t6);case 49:case"end":return o.stop()}}),o)})),s.t0=regeneratorRuntime.keys(r);case 3:if((s.t1=s.t0()).done){s.next=8;break}return p=s.t1.value,s.delegateYield(l(p),"t2",6);case 6:s.next=3;break;case 8:case"end":return s.stop()}}),s)})))()},setHeaderInfoList:function(e){var t=this;this.headerList=[{label:"Total Alive and on ART",value:e.length,other:{onclick:function(){return t.runTableDrill(e,"Total Alive on ART")}}}]},validateReport:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.getTotals((function(e){return"txCurr"===e.col&&e.gender.match(/male|female/i)})),e.setHeaderInfoList(r),n={total_alive_and_on_art:{param:r.length,check:function(e,t){return e!=t},error:function(e,t){return"\n                        Total alive of <b>".concat(t,"</b>\n                        Does not match total alive of <b>").concat(e,"</b> on MOH report\n                    ")}}},o=e.mohCohort.validateIndicators(n,(function(t){return e.errors=t})),-1===o&&(e.errors=["Report not validated. Run the MoH cohort report for similar reporting period and then run this report"]);case 5:case"end":return t.stop()}}),t)})))()}}}),v=r("6b0d"),O=r.n(v);const j=O()(b,[["render",o]]);t["default"]=j},"2ef6":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("1da1"),o=r("d4ec"),a=r("bee2"),i=r("262e"),c=r("2caf"),s=(r("96cf"),r("5969")),u=r("ad8d"),l=function(e){Object(i["a"])(r,e);var t=Object(c["a"])(r);function r(){var e;return Object(o["a"])(this,r),e=t.call(this),e.gender="",e.ageGroup=u["a"][0],e.initialize=!0,e.rebuildOutcome=!0,e}return Object(a["a"])(r,[{key:"init",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.initialize=!0,e.next=3,this.getCohort();case 3:if(t=e.sent,!t||"created"!==t.temp_disaggregated){e.next=7;break}return this.initialize=!1,e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"setAgeGroup",value:function(e){this.ageGroup=e}},{key:"setInitialization",value:function(e){this.initialize=e}},{key:"setRebuildOutcome",value:function(e){this.rebuildOutcome=e}},{key:"setGender",value:function(e){this.gender=e}},{key:"getGender",value:function(){return this.gender}},{key:"getCohort",value:function(){return this.getReport("cohort_disaggregated",{age_group:"".concat(this.ageGroup),rebuild_outcome:"".concat(this.rebuildOutcome),initialize:"".concat(this.initialize)})}},{key:"getTxIpt",value:function(){return this.getReport("clients_given_ipt",{gender:this.gender,age_group:"".concat(this.ageGroup)})}},{key:"getTxCurrTB",value:function(){return this.getReport("screened_for_tb",{gender:this.gender,age_group:"".concat(this.ageGroup)})}},{key:"getRegimenDistribution",value:function(){return this.getReport("disaggregated_regimen_distribution",{gender:"".concat(this.gender),age_group:"".concat(this.ageGroup)})}}]),r}(s["a"])},"41b4":function(e,t,r){},"4a46":function(e,t,r){"use strict";r("41b4")},"4ba2":function(e,t,r){"use strict";var n=r("5530"),o=r("7a23"),a=Object(o["withScopeId"])("data-v-47b6d7e8");Object(o["pushScopeId"])("data-v-47b6d7e8");var i={class:"header-text-list"},c=Object(o["createTextVNode"])("Title "),s=Object(o["createTextVNode"])("Period "),u={key:1},l={key:0},d=Object(o["createTextVNode"])(" Error(s) found. Click for more "),p=Object(o["createTextVNode"])(" Report is Consistent "),f={class:"report-content"},h=Object(o["createTextVNode"])("Date Created: "),g=Object(o["createTextVNode"])("His-Core Version: "),m=Object(o["createTextVNode"])("API Version: ");Object(o["popScopeId"])();var b=a((function(e,t,r,b,v,O){var j=Object(o["resolveComponent"])("his-standard-form"),w=Object(o["resolveComponent"])("ion-title"),y=Object(o["resolveComponent"])("ion-img"),k=Object(o["resolveComponent"])("ion-thumbnail"),R=Object(o["resolveComponent"])("ion-chip"),x=Object(o["resolveComponent"])("ion-label"),C=Object(o["resolveComponent"])("ion-item"),A=Object(o["resolveComponent"])("ion-toolbar"),_=Object(o["resolveComponent"])("ion-header"),P=Object(o["resolveComponent"])("report-table"),D=Object(o["resolveComponent"])("ion-content"),I=Object(o["resolveComponent"])("ion-footer"),V=Object(o["resolveComponent"])("his-footer"),T=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["withDirectives"])(Object(o["createVNode"])(j,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[o["vShow"],!e.canShowReport]]),e.canShowReport?(Object(o["openBlock"])(),Object(o["createBlock"])(T,{key:0},{default:a((function(){return[Object(o["createVNode"])(_,null,{default:a((function(){return[Object(o["createVNode"])(A,null,{default:a((function(){return[e.showtitleOnly?(Object(o["openBlock"])(),Object(o["createBlock"])(w,{key:0},{default:a((function(){return[Object(o["createVNode"])("span",{innerHTML:e.title},null,8,["innerHTML"])]})),_:1})):Object(o["createCommentVNode"])("",!0),e.showtitleOnly?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(C,{key:1},{default:a((function(){return[Object(o["createVNode"])(k,{slot:"start"},{default:a((function(){return[Object(o["createVNode"])(y,{src:e.logo},null,8,["src"])]})),_:1}),Object(o["createVNode"])(x,null,{default:a((function(){return[Object(o["createVNode"])("ul",i,[Object(o["createVNode"])("li",null,[c,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.title),1)]),Object(o["createVNode"])("li",null,[s,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.period),1)]),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.headerInfoList,(function(e,t){var r,n;return Object(o["openBlock"])(),Object(o["createBlock"])("li",{key:t},[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.label)+" ",1),e&&null!==e&&void 0!==e&&null!==(r=e.other)&&void 0!==r&&r.onclick?(Object(o["openBlock"])(),Object(o["createBlock"])("a",{key:0,href:"#",onClick:Object(o["withModifiers"])((function(t){return e.other.onclick()}),["prevent"])},Object(o["toDisplayString"])(e.value),9,["onClick"])):Object(o["createCommentVNode"])("",!0),!e||null!==e&&void 0!==e&&null!==(n=e.other)&&void 0!==n&&n.onclick?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("b",u,[Object(o["createVNode"])("span",{innerHTML:e.value},null,8,["innerHTML"])]))])})),128)),e.showValidationStatus?(Object(o["openBlock"])(),Object(o["createBlock"])("li",l,[e.hasErrors?(Object(o["openBlock"])(),Object(o["createBlock"])(R,{key:0,onClick:e.showErrors,color:"danger"},{default:a((function(){return[Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.errorCount),1),d]})),_:1},8,["onClick"])):Object(o["createCommentVNode"])("",!0),e.hasErrors?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(R,{key:1,color:"success"},{default:a((function(){return[p]})),_:1}))])):Object(o["createCommentVNode"])("",!0)])]})),_:1})]})),_:1}))]})),_:1})]})),_:1}),Object(o["createVNode"])(D,null,{default:a((function(){return[Object(o["createVNode"])("div",f,[Object(o["createVNode"])(P,{rows:e.rows,columns:e.columns,showFilters:e.showFilters,config:Object(n["a"])(Object(n["a"])({},e.config),{},{tableCssTheme:e.tableCssTheme}),onOnActiveColumns:e.onActiveColumns,onOnActiveRows:e.onActiveRows},null,8,["rows","columns","showFilters","config","onOnActiveColumns","onOnActiveRows"])])]})),_:1}),Object(o["createVNode"])(I,null,{default:a((function(){return[Object(o["createVNode"])(A,null,{default:a((function(){return[Object(o["createVNode"])(R,{color:"primary"},{default:a((function(){return[h,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.date),1)]})),_:1}),Object(o["createVNode"])(R,{color:"primary"},{default:a((function(){return[g,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.coreVersion),1)]})),_:1}),Object(o["createVNode"])(R,{color:"primary"},{default:a((function(){return[m,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.apiVersion),1)]})),_:1})]})),_:1})]})),_:1}),Object(o["createVNode"])(V,{btns:e.btns},null,8,["btns"])]})),_:1})):Object(o["createCommentVNode"])("",!0)],64)})),v=r("2909"),O=r("1da1"),j=(r("96cf"),r("d3b7"),r("159b"),r("b0c0"),r("ac1f"),r("466d"),r("99af"),r("0f25")),w=r("80e3"),y=r("ba82"),k=r("9ceb"),R=r("7920"),x=r("8a30"),C=r("b5e4"),A=r("1718"),_=r("1c74"),P=r("5a0c"),D=r.n(P),I=r("2ef0"),V=Object(o["withScopeId"])("data-v-0ed0c7a2");Object(o["pushScopeId"])("data-v-0ed0c7a2");var T=Object(o["createTextVNode"])(" Close ");Object(o["popScopeId"])();var F=V((function(e,t,r,n,a,i){var c=Object(o["resolveComponent"])("ion-title"),s=Object(o["resolveComponent"])("ion-toolbar"),u=Object(o["resolveComponent"])("ion-header"),l=Object(o["resolveComponent"])("ion-item"),d=Object(o["resolveComponent"])("ion-list"),p=Object(o["resolveComponent"])("ion-grid"),f=Object(o["resolveComponent"])("ion-button"),h=Object(o["resolveComponent"])("ion-footer");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(u,null,{default:V((function(){return[Object(o["createVNode"])(s,null,{default:V((function(){return[Object(o["createVNode"])(c,null,{default:V((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title),1)]})),_:1})]})),_:1})]})),_:1}),Object(o["createVNode"])(p,{class:"selector"},{default:V((function(){return[Object(o["createVNode"])(d,null,{default:V((function(){return[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.errors,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(l,{class:"his-md-text ion-padding",key:t},{default:V((function(){return[Object(o["createVNode"])("span",{innerHTML:"(".concat(t+1,") ").concat(e)},null,8,["innerHTML"])]})),_:2},1024)})),128))]})),_:1})]})),_:1}),Object(o["createVNode"])(h,null,{default:V((function(){return[Object(o["createVNode"])(s,null,{default:V((function(){return[Object(o["createVNode"])(f,{class:"close-btn",color:"danger",size:"large",onClick:e.closeModal,slot:"end"},{default:V((function(){return[T]})),_:1},8,["onClick"])]})),_:1})]})),_:1})],64)})),N=Object(o["defineComponent"])({components:{IonGrid:x["p"],IonList:x["y"],IonItem:x["w"],IonFooter:x["o"],IonButton:x["d"],IonToolbar:x["Q"],IonHeader:x["q"],IonTitle:x["P"]},props:{title:{type:String,default:"Report Errors"},errors:{type:Array,required:!0}},methods:{closeModal:function(){return Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["X"].dismiss({});case 2:case"end":return e.stop()}}),e)})))()}}}),S=(r("054e"),r("6b0d")),B=r.n(S);const E=B()(N,[["render",F],["__scopeId","data-v-0ed0c7a2"]]);var L=E,q=Object(o["defineComponent"])({components:{HisStandardForm:R["a"],IonHeader:x["q"],ReportTable:w["a"],HisFooter:j["a"],IonPage:x["D"],IonContent:x["n"],IonToolbar:x["Q"],IonChip:x["l"],IonFooter:x["o"],IonLabel:x["x"],IonThumbnail:x["O"],IonItem:x["w"],IonImg:x["s"]},props:{showValidationStatus:{type:Boolean,default:!1},validationErrors:{type:Array,default:function(){return[]}},config:{type:Object},headerInfoList:{type:Array,default:function(){return[]}},reportPrefix:{type:String,default:"HIS-Core"},reportLogo:{type:String},showtitleOnly:{type:Boolean,default:!1},title:{type:String,required:!0},period:{type:String},showFilters:{type:Boolean,default:!1},fields:{type:Object},columns:{type:Object,required:!0},rows:{type:Object,required:!0},customBtns:{type:Array,default:function(){return[]}},hasServerSideCaching:{type:Boolean,default:!1},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},enabledPDFHorizontalPageBreak:{type:Boolean,default:!1},onFinishBtnAction:{type:Function},onReportConfiguration:{type:Function,required:!0},onDefaultConfiguration:{type:Function},customFileName:{type:String,default:""}},data:function(){return{date:"",formData:{},btns:[],computeFormData:{},activeColumns:[],activeRows:[],isLoadingData:!1,canShowReport:!1,siteUUID:_["e"].getSiteUUID(),apiVersion:_["e"].getApiVersion(),coreVersion:_["e"].getCoreVersion(),artVersion:_["e"].getAppVersion(),tableCssTheme:"art-report-theme"}},watch:{validationErrors:{handler:function(e){Object(I["isEmpty"])(e)||this.showErrors()},deep:!0,immediate:!0},fields:{handler:function(e){Object(I["isEmpty"])(e)||this.btns.forEach((function(e){"Back"===e.name&&(e.visible=!0)}))},immediate:!0}},computed:{logo:function(){if(!this.reportLogo&&"string"===typeof this.reportPrefix){if(this.reportPrefix.match(/pepfar/i))return Object(A["a"])("login-logos/PEPFAR.png");if(this.reportPrefix.match(/moh/i))return Object(A["a"])("login-logos/Malawi-Coat_of_arms_of_arms.png")}return Object(A["a"])("reports.png")},hasErrors:function(){return!Object(I["isEmpty"])(this.validationErrors)},errorCount:function(){return this.validationErrors?this.validationErrors.length:0}},methods:{showErrors:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x["X"].create({component:L,backdropDismiss:!1,cssClass:"large-modal",componentProps:{errors:e.validationErrors}});case 2:r=t.sent,r.present();case 4:case"end":return t.stop()}}),t)})))()},refreshTimeStamp:function(){this.date=D()().format("DD/MMM/YYYY HH:MM:ss")},onActiveColumns:function(e){this.activeColumns=e},onActiveRows:function(e){this.activeRows=e},getFileName:function(){return this.customFileName?this.customFileName:"".concat(this.reportPrefix," ").concat(_["e"].getLocationName()," ").concat(this.title," ").concat(this.period)},onLoadDefault:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.canShowReport=!0,t.next=3,e.presentLoading();case 3:if(t.prev=3,e.refreshTimeStamp(),!e.onDefaultConfiguration){t.next=8;break}return t.next=8,e.onDefaultConfiguration();case 8:x["V"].dismiss(),t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](3),Object(C["c"])(t.t0),console.error(t.t0),x["V"].dismiss();case 16:case"end":return t.stop()}}),t,null,[[3,11]])})))()},onFinish:function(e,t){var r=arguments,n=this;return Object(O["a"])(regeneratorRuntime.mark((function o(){var a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return a=r.length>2&&void 0!==r[2]&&r[2],n.formData=e,n.computeFormData=t,n.canShowReport=!0,o.next=6,n.presentLoading();case 6:return o.prev=6,n.refreshTimeStamp(),o.next=10,n.onReportConfiguration(n.formData,n.computeFormData,a);case 10:x["V"].dismiss(),o.next=18;break;case 13:o.prev=13,o.t0=o["catch"](6),Object(C["c"])(o.t0),console.error(o.t0),x["V"].dismiss();case 18:case"end":return o.stop()}}),o,null,[[6,13]])})))()},reloadReport:function(){var e=arguments,t=this;return Object(O["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.length>0&&void 0!==e[0]&&e[0],Object(I["isEmpty"])(t.formData)&&Object(I["isEmpty"])(t.computeFormData)){r.next=5;break}return r.next=4,t.onFinish(t.formData,t.computeFormData,n);case 4:return r.abrupt("return");case 5:if(!t.onDefaultConfiguration){r.next=8;break}return r.next=8,t.onLoadDefault();case 8:case"end":return r.stop()}}),r)})))()},presentLoading:function(){return Object(O["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["V"].create({message:"Please wait...",backdropDismiss:!1});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;this.onDefaultConfiguration&&this.onLoadDefault(),this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=Object(k["b"])(e.activeColumns,e.activeRows),n=r.columns,o=r.rows,Object(y["a"])(n,[].concat(Object(v["a"])(o),[["Date Created: ".concat(e.date)],["Quarter: ".concat(e.period)],["HIS-Core Version: ".concat(e.coreVersion)],["API Version: ".concat(e.apiVersion)],["Site UUID: ".concat(e.siteUUID)]]),e.getFileName());case 2:case"end":return t.stop()}}),t)})));function r(){return t.apply(this,arguments)}return r}()}),this.btns.push({name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=Object(k["b"])(e.activeColumns,e.activeRows),n=r.columns,o=r.rows,Object(y["b"])(n,o,e.getFileName(),e.enabledPDFHorizontalPageBreak);case 2:case"end":return t.stop()}}),t)})));function r(){return t.apply(this,arguments)}return r}()}),this.btns.push({name:"Refresh/Rebuild",size:"large",slot:"end",color:"warning",visible:!0,onClick:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=!1,!e.hasServerSideCaching){t.next=5;break}return t.next=4,Object(C["a"])("Do you want to rebuild report cache?",{header:"Rebuild Report"});case 4:r=t.sent;case 5:e.reloadReport(r);case 6:case"end":return t.stop()}}),t)})));function r(){return t.apply(this,arguments)}return r}()}),this.btns.push({name:"Back",size:"large",slot:"end",color:"primary",visible:!Object(I["isEmpty"])(this.fields),onClick:function(){return e.canShowReport=!1}}),this.btns.push({name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:function(){e.onFinishBtnAction?e.onFinishBtnAction():e.$router.push({path:"/"})}})}});r("4a46");const G=B()(q,[["render",b],["__scopeId","data-v-47b6d7e8"]]);t["a"]=G},"6547c":function(e,t,r){},7920:function(e,t,r){"use strict";var n=r("7a23");function o(e,t,r,o,a,i){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,8,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var a=r("9441"),i=Object(n["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:a["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),c=r("6b0d"),s=r.n(c);const u=s()(i,[["render",o]]);t["a"]=u},"87e7":function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return u})),r.d(t,"e",(function(){return l})),r.d(t,"a",(function(){return d})),r.d(t,"d",(function(){return p}));var n=r("d4ec"),o=r("bee2"),a=r("262e"),i=r("2caf"),c=r("5969"),s=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4PP","4PA","9PP","9PA","11PP","11PA","12PP","12PA","14PP","14PA","15PP","15PA","16P","17PP","17PA"],u=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4P","4PP","4PA","9P","9PP","9PA","11P","11PP","11PA","12PP","12PA","14P","14PP","14PA","15P","15PP","15PA","16P","17P","17PP","17PA"],l=["10 - 13.9 Kg","14 - 19.9 Kg","20 - 24.9 Kg","25 - 29.9 Kg","3 - 3.9 Kg","30 - 34.9 Kg","35 - 39.9 Kg","4 - 4.9 Kg","40 Kg +","40 - 49.9 Kg","50 Kg +","6 - 9.9 Kg","Unknown"],d=["pellets","tablets","granules"],p=function(e){Object(a["a"])(r,e);var t=Object(i["a"])(r);function r(){var e;return Object(n["a"])(this,r),e=t.call(this),e.type="pepfar",e}return Object(o["a"])(r,[{key:"setReportType",value:function(e){this.type=e}},{key:"getTptNewInitiations",value:function(){return this.getReport("programs/".concat(this.programID,"/reports/tpt_newly_initiated"))}},{key:"getRegimenFormulationReport",value:function(e,t){return this.getReport("programs/".concat(this.programID,"/reports/regimens_and_formulations"),{regimen:e,formulation:t})}},{key:"getRegimenReport",value:function(){return this.getReport("regimen_report",{type:this.type})}},{key:"getRegimenSwitchReport",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.getReport("regimen_switch",{pepfar:e})}},{key:"getRegimensByWeight",value:function(){return this.getReport("programs/".concat(this.programID,"/reports/regimens_by_weight_and_gender"))}},{key:"getSCReport",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.getReport("sc_arvdisp",{pepfar:e})}}]),r}(c["a"])},ad8d:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r("d4ec"),o=r("bee2"),a=r("262e"),i=r("2caf"),c=r("5969"),s=["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"],u=function(e){Object(a["a"])(r,e);var t=Object(i["a"])(r);function r(){return Object(n["a"])(this,r),t.call(this)}return Object(o["a"])(r,[{key:"getBookedAppointments",value:function(e){return c["a"].getJson("programs/".concat(this.programID,"/scheduled_appointments"),{date:e})}},{key:"getViralLoadResults",value:function(e){return this.getReport("/programs/".concat(this.programID,"/reports/high_vl_patients"),{range:e})}},{key:"getOtherOutcome",value:function(e){return this.getReport("patient_outcome_list",{outcome:e})}},{key:"getPatientVisitTypes",value:function(){return this.getReport("patient_visit_types")}},{key:"getClientsDueForVl",value:function(){return this.getReport("clients_due_vl")}},{key:"getClientRentention",value:function(){return this.getReport("/programs/".concat(this.programID,"/reports/retention"))}},{key:"getExternalConsultationClients",value:function(){return this.getReport("".concat(this.programID,"/external_consultation_clients"))}},{key:"getMissedAppointments",value:function(){return this.getReport("missed_appointments")}},{key:"getPregnantWomen",value:function(){return this.getReport("/programs/".concat(this.programID,"/reports/pregnant_patients"))}},{key:"getArchivingCandidates",value:function(){return c["a"].getJson("programs/".concat(this.programID,"/reports/archiving_candidates"),{start_date:this.date})}}]),r}(c["a"])},b31c:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n,o=r("d4ec"),a=r("bee2"),i=r("262e"),c=r("2caf"),s=(r("99af"),r("e9c4"),r("d3b7"),r("b64b"),r("2ef0")),u=r("5969");(function(e){e["MOH_CACHE"]="mohCache"})(n||(n={}));var l=function(e){Object(i["a"])(r,e);var t=Object(c["a"])(r);function r(){var e;return Object(o["a"])(this,r),e=t.call(this),e.regenerate=!1,e}return Object(a["a"])(r,[{key:"cohortUrl",value:function(){return"programs/".concat(this.programID,"/reports/cohort")}},{key:"setRegenerate",value:function(e){this.regenerate=e}},{key:"getCohortDrillDown",value:function(e){return u["a"].getJson("cohort_report_drill_down",{id:e,date:this.date,program_id:this.programID})}},{key:"requestCohort",value:function(e){return u["a"].ajxGet(this.cohortUrl(),e)}},{key:"qaurterRequestParams",value:function(){return{name:this.quarter,regenerate:this.regenerate}}},{key:"datePeriodRequestParams",value:function(){return{name:"Cohort-".concat(this.startDate,"-").concat(this.endDate),start_date:this.startDate,end_date:this.endDate,regenerate:this.regenerate}}},{key:"getCachedCohortValues",value:function(){var e=sessionStorage.getItem(n.MOH_CACHE);if(e){var t=JSON.parse(e);if(t.start_date===this.startDate&&t.end_date===this.endDate||t.quarter===this.quarter)return t.data}}},{key:"cacheCohort",value:function(e){sessionStorage.setItem(n.MOH_CACHE,JSON.stringify({start_date:this.startDate,end_date:this.endDate,quarter:this.quarter,data:e}))}},{key:"validateIndicators",value:function(e,t){var r=this.getCachedCohortValues();if(r){var n=Object.keys(e).reduce((function(t,n){var o=Object(s["find"])(r,{name:n}),a=e[n],i=o?o.contents:null,c=a.param,u=a.check(parseInt(i),c);return u&&t.push(a.error(i,c)),t}),[]);return t(n)}return-1}}]),r}(u["a"])}}]);
//# sourceMappingURL=chunk-5bb83528.d37aaeeb.js.map