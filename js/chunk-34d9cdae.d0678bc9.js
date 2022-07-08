(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34d9cdae"],{"6d14":function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r("1da1"),a=r("b85c"),i=r("2909"),o=r("3835"),s=r("d4ec"),c=r("bee2"),u=r("262e"),d=r("2caf"),l=(r("96cf"),r("4fad"),r("99af"),r("b0c0"),r("d3b7"),r("159b"),r("ac1f"),r("1276"),r("498a"),r("fcd5")),p=r("1c74"),h=function(e){Object(u["a"])(r,e);var t=Object(d["a"])(r);function r(){var e;return Object(s["a"])(this,r),e=t.call(this),e.regenerate=!1,e}return Object(c["a"])(r,[{key:"setRegenerate",value:function(e){this.regenerate=e}},{key:"requestIDSRWeekly",value:function(){return this.getReport("generate_weekly_idsr_report",{request:"true"})}},{key:"requestIDSRMonthly",value:function(){return this.getReport("generate_monthly_idsr_report",{request:"true"})}},{key:"renderResults",value:function(e){for(var t=[],r=1,n=0,a=Object.entries(e);n<a.length;n++){var s=Object(o["a"])(a[n],2),c=s[0],u=s[1],d=[],l=u,p={id:0,name:"",lessThanFiveYears:"",lessThanFiveYearsPatientIds:"",greaterThanEqualFiveYears:"",greaterThanEqualFiveYearsPatientIds:"",total:0,totalPatientIds:""};p.name=c;var h=0;p.id=r,r+=1;for(var f=0,m=Object.entries(l);f<m.length;f++){var g=Object(o["a"])(m[f],2),v=g[0],b=g[1],w=b;null!=w&&(h+=w.length,p.total=h,w.length&&(d.push.apply(d,Object(i["a"])(w)),p.totalPatientIds=d),"<5yrs"==v&&(p.lessThanFiveYears=w.length,p.lessThanFiveYearsPatientIds=w),">=5yrs"==v&&(p.greaterThanEqualFiveYears=w.length,p.greaterThanEqualFiveYearsPatientIds=w))}t.push(p)}return t}},{key:"getCSVString",value:function(e){var t,r="Diseases/Events/Conditions, <5 yrs, >=5 yrs, Total,\n",n=Object(a["a"])(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;r+="".concat(i.name,",").concat(i.lessThanFiveYears,",").concat(i.greaterThanEqualFiveYears,",").concat(i.total,",\n")}}catch(o){n.e(o)}finally{n.f()}return{CSVString:r}}}],[{key:"getReportEpiWeeks",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,p["e"].getJson("get_weeks");case 3:return r=e.sent,r.reverse().forEach((function(e){var r=e[1].split(" "),n=r[0],a=r[2],i=e[0].split("W"),o=i[0]+"/W"+i[1];t.push({name:o,start:n,end:a})})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getReportMonths",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,p["e"].getJson("get_months");case 3:return r=e.sent,r.forEach((function(e){var r=e[1],n=r[0],a=r[1],i=a.split("to");t.push({name:n,start:i[0],end:i[1].trim()})})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(l["d"])},c2b0:function(e,t,r){"use strict";var n=r("2909"),a=r("3835"),i=r("1da1"),o=(r("96cf"),r("99af"),r("d3b7"),r("3ca3"),r("ddb0"),r("d81d"),r("25f0"),r("b0c0"),r("7a23")),s=r("b446"),c=r("23e6"),u=r("9283"),d=r("8a30"),l=r("d6aa"),p=r("fcd5"),h=r("6d14"),f=r("d95e"),m=r("2706"),g=r("9ceb"),v=r("5a0c"),b=r.n(v),w=r("1c74"),D=r("2ef0"),y=Object(o["defineComponent"])({data:function(){return{fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",drillDownCache:{}}},methods:{toDate:function(e){return u["b"].toStandardHisDisplayFormat(e)},confirmPatient:function(e){return this.$router.push("/patients/confirm?person_id=".concat(e))},exportToCustomPDF:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=open("","","width:1024px, height:768px"),n=document.getElementById("report-content"),n&&r&&(r.document.write("\n                    <html>\n                    <head>\n                        <title>".concat(e,'</title>\n                        <link rel="stylesheet" media="print" href="/assets/css/cohort.css" />\n                    </head>\n                    <body>\n                        ').concat(n.innerHTML,"\n                    </body>\n                    </html>\n                ")),setTimeout((function(){r.print(),r.close()}),3500));case 3:case"end":return t.stop()}}),t)})))()},onDrillDown:function(e,t){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!Object(D["isEmpty"])(t)){n.next=2;break}return n.abrupt("return");case 2:return a=[[g["a"].thTxt("First name"),g["a"].thTxt("Last name"),g["a"].thTxt("Gender"),g["a"].thTxt("Age"),g["a"].thTxt("Phone"),g["a"].thTxt("Address"),g["a"].thTxt("Action")]],o=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].findByID(t);case 2:return n=e.sent,a=new c["a"](n),e.abrupt("return",[g["a"].td(a.getGivenName()),g["a"].td(a.getFamilyName()),g["a"].td(a.getGender()),g["a"].td(a.getAge()),g["a"].td(a.getPhoneNumber()),g["a"].td("".concat(a.getCurrentDistrict(),", ").concat(a.getCurrentVillage(),", ").concat(a.getClosestLandmark())),g["a"].tdBtn("Select",Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["X"].dismiss({});case 2:r.$router.push({path:"/patient/dashboard/".concat(t)});case 3:case"end":return e.stop()}}),e)}))))]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.abrupt("return",r.drilldownData(e,a,t,o));case 5:case"end":return n.stop()}}),n)})))()},drilldownAsyncRows:function(e,t,r){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,d["X"].create({component:l["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:r,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:function(){return d["X"].dismiss()}}});case 2:a=n.sent,a.present();case 4:case"end":return n.stop()}}),n)})))()},drilldownData:function(e,t,r,n){return Object(i["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,d["X"].create({component:l["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:r,rowParser:n,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:function(){return d["X"].dismiss()}}});case 2:i=a.sent,i.present();case 4:case"end":return a.stop()}}),a)})))()},getDefaultDrillDownTable:function(){var e=this,t=[[g["a"].thTxt("ARV number"),g["a"].thTxt("Gender"),g["a"].thTxt("Birth Date"),g["a"].thTxt("Actions")]],r=function(t){return t.map(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var n,o,s,u,l,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=Object(a["a"])(r,2),o=n[0],s=n[1],!(s in e.drillDownCache)){t.next=3;break}return t.abrupt("return",[o]);case 3:return t.next=5,c["a"].findByID(s);case 5:return u=t.sent,l=new c["a"](u),p=[o,g["a"].td(l.getArvNumber()),g["a"].td(l.getGender()),g["a"].tdDate(l.getBirthdate().toString()),g["a"].tdBtn("Show",Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["X"].dismiss({});case 2:e.$router.push({path:"/patient/dashboard/".concat(s)});case 3:case"end":return t.stop()}}),t)}))))],e.drillDownCache[s]=p,t.abrupt("return",p);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())};return{rowParser:r,columns:t}},runTableDrill:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Drilldown patients",r=this.getDefaultDrillDownTable(),n=r.columns,a=r.rowParser;this.drilldownData(t,n,e,a)},drill:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Drill table";return e&&e.length>0?g["a"].tdLink(e.length,(function(){return t.runTableDrill(e,r)})):g["a"].td(0)},getEpiweeksFields:function(){return[{id:"epiweek",helpText:"Select EPI week",type:f["b"].TT_SELECT,validation:function(e){return m["a"].required(e)},options:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].getReportEpiWeeks();case 2:return t=e.sent,r=t.map((function(e){return{label:e.name+" - ("+b()(e.start).format("DD/MMM/YYYY")+" - "+b()(e.end).format("DD/MMM/YYYY")+")",value:e.start,other:e}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]},getMonthlyFields:function(){return[{id:"idsrmonth",helpText:"Select Month",type:f["b"].TT_SELECT,validation:function(e){return m["a"].required(e)},options:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].getReportMonths();case 2:return t=e.sent,r=t.map((function(e){return{label:e.name+" - ("+b()(e.start).format("DD/MMM/YYYY")+" - "+b()(e.end).format("DD/MMM/YYYY")+")",value:e.start,other:e}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]},getDateDurationFields:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,i="2001-01-01",o=w["e"].getSessionDate();return[{id:"quarter",helpText:"Select Quarter",type:f["b"].TT_SELECT,condition:function(){return t},validation:function(e){return m["a"].required(e)},options:function(){var e=p["d"].getReportQuarters(a),t=e.map((function(e){return{label:e.name,value:e.start,other:e}}));return r&&(t=[{label:"Set custom period",value:"custom_period",other:{}}].concat(Object(n["a"])(t))),t}}].concat(Object(n["a"])(Object(s["b"])({id:"start_date",helpText:"Start",required:!0,condition:function(e){return e.quarter&&"custom_period"===e.quarter.value||!t},minDate:function(){return i},maxDate:function(){return o},estimation:{allowUnknown:!1},computeValue:function(e){return e}})),Object(n["a"])(Object(s["b"])({id:"end_date",helpText:"End",required:!0,condition:function(e){return e.quarter&&"custom_period"===e.quarter.value||!t},unload:function(t,r,n,a){"next"===r&&(e.endDate=a.end_date)},minDate:function(e,t){return t.start_date},maxDate:function(){return o},estimation:{allowUnknown:!1},computeValue:function(e){return e}})))}}});const k=y;t["a"]=k},cb01:function(e,t,r){"use strict";var n=r("7a23"),a={style:{margin:"auto",width:"95%","margin-top":"1%"}};function i(e,t,r,i,o,s){var c=Object(n["resolveComponent"])("report-table");return Object(n["openBlock"])(),Object(n["createBlock"])("div",a,[Object(n["createVNode"])(c,{columns:e.columns,rows:e.rows,config:{tableCssTheme:e.tableCssTheme}},null,8,["columns","rows","config"])])}r("a9e3"),r("d3b7"),r("159b"),r("b0c0");var o=r("80e3"),s=r("9ceb"),c=Object(n["defineComponent"])({components:{ReportTable:o["a"]},props:{clinicName:{type:String,default:""},reportparams:{type:Object,required:!0},totalOPDVisits:{type:Number,required:!0},reportName:{type:String,required:!0},periodLabel:{type:String,required:!0},periodDates:{type:String,required:!0},rangeLabel:{type:String,required:!0},range:{type:String,required:!0}},data:function(){return{tableCssTheme:"opd-report-theme",rows:[],columns:[[s["a"].thTxt(this.reportName,{colspan:2,sortable:!1,exportable:!1})]]}},mounted:function(){this.initTable()},methods:{initTable:function(){var e=[],t=[{name:"Country:",value:"Malawi"},{name:"Reporting Facility Name:",value:this.clinicName},{name:this.rangeLabel+":",value:this.range},{name:this.periodLabel+":",value:this.periodDates},{name:"Total OPD Visits:",value:this.totalOPDVisits}];t.forEach((function(t){"undefined:"!==t.name&&e.push([s["a"].td(t.name,{style:{textAlign:"left"}}),s["a"].td(t.value,{style:{textAlign:"left"}})])})),this.rows=e}}}),u=r("6b0d"),d=r.n(u);const l=d()(c,[["render",i]]);t["a"]=l},fcd5:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"c",(function(){return h})),r.d(t,"b",(function(){return f})),r.d(t,"d",(function(){return m}));var n=r("5530"),a=r("d4ec"),i=r("bee2"),o=r("262e"),s=r("2caf"),c=(r("d3b7"),r("159b"),r("b64b"),r("99af"),r("1c74")),u=r("9283"),d=r("b89f"),l=r("bef6"),p={one:"AL 1",two:"AL 2",three:"AL 3",four:"LA 4"},h=["Diabetes","Hypertension","Stroke","Suspected cancer","Confirmed cancer","Palliative cancer","Asthma","Depression","Acute psychosis","Chronic psychosis","Epilepsy"],f=["Organic mental disorder (Chronic)","Organic mental disorder (acute)","Alcohol use mental disorder","Drug use mental disorder","Schizophrenia","Acute and transient psychotic disorder","Schizo-affective disorder","Mood-affective disorder (MANIC)","Mood-affective disorder (BIPOLAR)","Mood-affective disorder (DEPRESSION)","Anxiety disorder","Stress reaction adjustment disorder","Dissociative conversion disorder","Somatoform disorder","Puerperal mental disorder","Personality/Behaviour disorder","Mental retardation","Psychological mental disorder","Hyperkinetic conduct disorder","Epilepsy"],m=function(e){Object(o["a"])(r,e);var t=Object(s["a"])(r);function r(){var e;return Object(a["a"])(this,r),e=t.call(this),e.endDate="",e.startDate="",e.epiweek="",e.date=c["e"].getSessionDate(),e.programID=c["e"].getProgramID(),e}return Object(i["a"])(r,[{key:"getPatientsWithNIDs",value:function(){return this.getReport("with_nids")}},{key:"getClinicRegistrations",value:function(){return this.getReport("registration")}},{key:"getDrugsGivenWithoutPrescription",value:function(){return this.getReport("drugs_given_without_prescription")}},{key:"getDrugsGivenWithPrescription",value:function(){return this.getReport("drugs_given_with_prescription")}},{key:"getDiagnosis",value:function(){var e="programs/".concat(this.programID,"/reports/diagnosis");return c["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate,date:this.date})}},{key:"getDiagnosisByAddress",value:function(){return this.getReport("diagnosis_by_address")}},{key:"getLaPrescriptions",value:function(){var e="programs/".concat(this.programID,"/reports/la_prescriptions");return c["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate})}},{key:"printLaReport",value:function(e){var t=new d["a"],r="programs/".concat(this.programID,"/barcodes/la_report"),n={"date[start]":this.startDate,"date[end]":this.endDate};return Object.keys(p).forEach((function(t,r){r++,n["".concat(r,"[prescription]")]=e["total_la_".concat(t,"_prescribed_drugs")],n["".concat(r,"[dispensed]")]=e["total_la_".concat(t,"_dispensed_drugs")]})),t.printLbl("".concat(r,"?").concat(l["a"].parameterizeObjToString(n)))}},{key:"getDateIntervalPeriod",value:function(){return"".concat(u["b"].toStandardHisDisplayFormat(this.startDate)," - ").concat(u["b"].toStandardHisDisplayFormat(this.endDate))}},{key:"setStartDate",value:function(e){this.startDate=e}},{key:"setEndDate",value:function(e){this.endDate=e}},{key:"setEpiWeek",value:function(e){this.epiweek=e}},{key:"getReportPeriod",value:function(){return this.startDate&&this.endDate?"".concat(u["b"].toStandardHisDisplayFormat(this.startDate)," - ").concat(u["b"].toStandardHisDisplayFormat(this.endDate)):"-"}},{key:"getReport",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c["e"].getJson(e,this.buildRequest(t))}},{key:"buildRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.epiweek&&(t["epiweek"]=this.epiweek),Object(n["a"])(Object(n["a"])({},t),e)}}],[{key:"getReportQuarters",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t=[],r=u["b"].getCurrentYear(),n=0;n<e;++n)t.push({name:"Q4 ".concat(r),start:"".concat(r,"-10-01"),end:"".concat(r,"-12-31")}),t.push({name:"Q3 ".concat(r),start:"".concat(r,"-07-01"),end:"".concat(r,"-09-30")}),t.push({name:"Q2 ".concat(r),start:"".concat(r,"-04-01"),end:"".concat(r,"-06-30")}),t.push({name:"Q1 ".concat(r),start:"".concat(r,"-01-01"),end:"".concat(r,"-03-31")}),--r;return t}}]),r}(c["e"])}}]);
//# sourceMappingURL=chunk-34d9cdae.d0678bc9.js.map