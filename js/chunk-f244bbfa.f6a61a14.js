(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f244bbfa"],{"03ef":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={style:{border:".1rem solid white"}}},"4b630":function(e,t,r){},"552a":function(e,t,r){"use strict";var n=r("7a23"),a=Object(n["withScopeId"])("data-v-4aa5994e");Object(n["pushScopeId"])("data-v-4aa5994e");var o=Object(n["createTextVNode"])("Title"),i=Object(n["createTextVNode"])("Period"),c={class:"report-content"};Object(n["popScopeId"])();var s=a((function(e,t,r,s,u,d){var l=Object(n["resolveComponent"])("his-standard-form"),p=Object(n["resolveComponent"])("ion-col"),f=Object(n["resolveComponent"])("ion-row"),m=Object(n["resolveComponent"])("ion-toolbar"),h=Object(n["resolveComponent"])("ion-header"),b=Object(n["resolveComponent"])("report-table"),g=Object(n["resolveComponent"])("ion-content"),v=Object(n["resolveComponent"])("his-footer"),O=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["withDirectives"])(Object(n["createVNode"])(l,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[n["vShow"],e.showForm]]),e.showForm?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:0},{default:a((function(){return[Object(n["createVNode"])(h,null,{default:a((function(){return[Object(n["createVNode"])(m,null,{default:a((function(){return[Object(n["createVNode"])(f,null,{default:a((function(){return[Object(n["createVNode"])(p,{size:"2"},{default:a((function(){return[Object(n["createVNode"])("img",{class:"logo",src:e.logo},null,8,["src"])]})),_:1}),Object(n["createVNode"])(p,null,{default:a((function(){return[Object(n["createVNode"])(f,null,{default:a((function(){return[Object(n["createVNode"])(p,{size:"2"},{default:a((function(){return[o]})),_:1}),Object(n["createVNode"])(p,null,{default:a((function(){return[Object(n["createVNode"])("b",null,Object(n["toDisplayString"])(e.title),1)]})),_:1})]})),_:1}),e.period?(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:0},{default:a((function(){return[Object(n["createVNode"])(p,{size:"2"},{default:a((function(){return[i]})),_:1}),Object(n["createVNode"])(p,null,{default:a((function(){return[Object(n["createVNode"])("b",null,Object(n["toDisplayString"])(e.period),1)]})),_:1})]})),_:1})):Object(n["createCommentVNode"])("",!0)]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(g,null,{default:a((function(){return[Object(n["createVNode"])("div",c,[Object(n["createVNode"])(b,{rows:e.rows,columns:e.columns,paginated:e.paginated,itemsPerPage:e.itemsPerPage},null,8,["rows","columns","paginated","itemsPerPage"])])]})),_:1}),Object(n["createVNode"])(v,{btns:e.btns},null,8,["btns"])]})),_:1}))],64)})),u=(r("99af"),r("a9e3"),r("96cf"),r("1da1")),d=r("0f25"),l=r("80e3"),p=r("ba82"),f=r("9ceb"),m=r("7920"),h=r("8a30"),b=r("b5e4"),g=Object(n["defineComponent"])({components:{HisStandardForm:m["a"],IonHeader:h["q"],ReportTable:l["a"],HisFooter:d["a"],IonPage:h["B"],IonContent:h["n"],IonToolbar:h["N"],IonRow:h["F"],IonCol:h["m"]},props:{title:{type:String,required:!0},period:{type:String,default:""},fields:{type:Object,default:function(){return[]}},columns:{type:Object,required:!0},rows:{type:Object,required:!0},paginated:{type:Boolean,default:!1},itemsPerPage:{type:Number,default:5},customBtns:{type:Array,default:function(){return[]}},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},onReportConfiguration:{type:Function,required:!1}},data:function(){return{formData:{},computeFormData:{},btns:[],isLoadingData:!1,showForm:!1,logo:"/assets/images/login-logos/Malawi-Coat_of_arms_of_arms.png"}},methods:{getFileName:function(){return"".concat(this.title,"-").concat(this.period)},onFinish:function(e,t){var r=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r.formData=e,r.computeFormData=t,r.showForm=!1,n.next=5,r.presentLoading();case 5:if(n.prev=5,!r.onReportConfiguration){n.next=9;break}return n.next=9,r.onReportConfiguration(r.formData,r.computeFormData);case 9:h["T"].dismiss(),n.next=17;break;case 12:n.prev=12,n.t0=n["catch"](5),console.error(n.t0),Object(b["c"])(n.t0),h["T"].dismiss();case 17:case"end":return n.stop()}}),n,null,[[5,12]])})))()},reloadReport:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.onFinish(e.formData,e.computeFormData);case 2:case"end":return t.stop()}}),t)})))()},presentLoading:function(){return Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["T"].create({message:"Please wait...",backdropDismiss:!1});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;this.showForm=!!this.fields.length,this.btns=this.customBtns,this.canExportCsv&&this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:!0,onClick:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=Object(f["b"])(e.columns,e.rows),n=r.columns,a=r.rows,Object(p["a"])(n,a,e.getFileName());case 2:case"end":return t.stop()}}),t)})));function r(){return t.apply(this,arguments)}return r}()}),this.canExportPDf&&this.btns.push({name:"PDF",size:"large",slot:"start",color:"primary",visible:!0,onClick:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=Object(f["b"])(e.columns,e.rows),n=r.columns,a=r.rows,Object(p["b"])(n,a,e.getFileName());case 2:case"end":return t.stop()}}),t)})));function r(){return t.apply(this,arguments)}return r}()}),this.btns.push({name:"Back",size:"large",slot:"end",color:"warning",visible:!0,onClick:function(){return e.showForm=!0}}),this.btns.push({name:"Refresh",size:"large",slot:"end",color:"warning",visible:!0,onClick:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.reloadReport());case 1:case"end":return t.stop()}}),t)})));function r(){return t.apply(this,arguments)}return r}()}),this.btns.push({name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.$router.push({path:"/"}));case 1:case"end":return t.stop()}}),t)})));function r(){return t.apply(this,arguments)}return r}()})}}),v=(r("5965"),r("d959")),O=r.n(v);const j=O()(g,[["render",s],["__scopeId","data-v-4aa5994e"]]);t["a"]=j},5965:function(e,t,r){"use strict";r("4b630")},f482:function(e,t,r){"use strict";r.r(t);var n=r("7a23");function a(e,t,r,a,o,i){var c=Object(n["resolveComponent"])("report-template"),s=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(s,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(c,{title:e.title,rows:e.rows,fields:e.fields,columns:e.columns,period:e.period,onReportConfiguration:e.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])]})),_:1})}r("d81d"),r("96cf");var o=r("1da1"),i=r("5530"),c=r("fcd5"),s=r("552a"),u=r("9ceb"),d=r("44e3"),l=r("03ef"),p=r("8a30"),f=Object(n["defineComponent"])({components:{ReportTemplate:s["a"],IonPage:p["B"]},mixins:[d["a"]],data:function(){return{title:"Cases seen report",rows:[],reportService:{},columns:[[u["a"].thTxt("",Object(i["a"])({colspan:2},l["a"])),u["a"].thTxt("New cases",Object(i["a"])({colspan:2},l["a"])),u["a"].thTxt("All cases",Object(i["a"])({colspan:2},l["a"]))],[u["a"].thTxt("NCD type",l["a"]),u["a"].thTxt("Male",l["a"]),u["a"].thTxt("Female",l["a"]),u["a"].thTxt("Male",l["a"]),u["a"].thTxt("Female",l["a"])]]}},created:function(){this.fields=this.getDateDurationFields()},methods:{init:function(e,t){var r=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r.reportService=new c["d"],r.reportService.setStartDate(t.start_date),r.reportService.setEndDate(t.end_date),r.period=r.reportService.getDateIntervalPeriod(),r.rows=r.buildRows();case 5:case"end":return e.stop()}}),e)})))()},buildRows:function(){return c["c"].map((function(e){return[u["a"].td(e,{style:{textAlign:"left"}}),u["a"].td(""),u["a"].td(""),u["a"].td(""),u["a"].td("")]}))}}}),m=r("d959"),h=r.n(m);const b=h()(f,[["render",a]]);t["default"]=b},fcd5:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"c",(function(){return f})),r.d(t,"b",(function(){return m})),r.d(t,"d",(function(){return h}));r("99af"),r("4160"),r("b64b"),r("159b");var n=r("5530"),a=r("d4ec"),o=r("bee2"),i=r("262e"),c=r("2caf"),s=r("1c74"),u=r("9283"),d=r("b89f"),l=r("bef6"),p={one:"AL 1",two:"AL 2",three:"AL 3",four:"LA 4"},f=["Diabetes","Hypertension","Stroke","Suspected cancer","Confirmed cancer","Palliative cancer","Asthma","Depression","Acute psychosis","Chronic psychosis","Epilepsy"],m=["Organic mental disorder (Chronic)","Organic mental disorder (acute)","Alcohol use mental disorder","Drug use mental disorder","Schizophrenia","Acute and transient psychotic disorder","Schizo-affective disorder","Mood-affective disorder (MANIC)","Mood-affective disorder (BIPOLAR)","Mood-affective disorder (DEPRESSION)","Anxiety disorder","Stress reaction adjustment disorder","Dissociative conversion disorder","Somatoform disorder","Puerperal mental disorder","Personality/Behaviour disorder","Mental retardation","Psychological mental disorder","Hyperkinetic conduct disorder","Epilepsy"],h=function(e){Object(i["a"])(r,e);var t=Object(c["a"])(r);function r(){var e;return Object(a["a"])(this,r),e=t.call(this),e.endDate="",e.startDate="",e.quarter="",e.date=s["d"].getSessionDate(),e.programID=s["d"].getProgramID(),e}return Object(o["a"])(r,[{key:"getPatientsWithNIDs",value:function(){return this.getReport("with_nids")}},{key:"getClinicRegistrations",value:function(){return this.getReport("registration")}},{key:"getDrugsGivenWithoutPrescription",value:function(){return this.getReport("drugs_given_without_prescription")}},{key:"getDrugsGivenWithPrescription",value:function(){return this.getReport("drugs_given_with_prescription")}},{key:"getDiagnosis",value:function(){return this.getReport("diagnosis")}},{key:"getDiagnosisByAddress",value:function(){return this.getReport("diagnosis_by_address")}},{key:"getLaPrescriptions",value:function(){var e="programs/".concat(this.programID,"/reports/la_prescriptions");return s["d"].getJson(e,{start_date:this.startDate,end_date:this.endDate})}},{key:"printLaReport",value:function(e){var t=new d["a"],r="programs/".concat(this.programID,"/barcodes/la_report"),n={"date[start]":this.startDate,"date[end]":this.endDate};return Object.keys(p).forEach((function(t,r){r++,n["".concat(r,"[prescription]")]=e["total_la_".concat(t,"_prescribed_drugs")],n["".concat(r,"[dispensed]")]=e["total_la_".concat(t,"_dispensed_drugs")]})),t.printLbl("".concat(r,"?").concat(l["a"].parameterizeObjToString(n)))}},{key:"getDateIntervalPeriod",value:function(){return"".concat(u["a"].toStandardHisDisplayFormat(this.startDate)," - ").concat(u["a"].toStandardHisDisplayFormat(this.endDate))}},{key:"setStartDate",value:function(e){this.startDate=e}},{key:"setEndDate",value:function(e){this.endDate=e}},{key:"setQuarter",value:function(e){this.quarter=e}},{key:"getReport",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s["d"].getJson(e,this.buildRequest(t))}},{key:"buildRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.quarter&&(t["quarter"]=this.quarter),Object(n["a"])(Object(n["a"])({},t),e)}}],[{key:"getReportQuarters",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t=[],r=u["a"].getCurrentYear(),n=0;n<e;++n)t.push({name:"Q4 ".concat(r),start:"".concat(r,"-10-01"),end:"".concat(r,"-12-31")}),t.push({name:"Q3 ".concat(r),start:"".concat(r,"-07-01"),end:"".concat(r,"-09-30")}),t.push({name:"Q2 ".concat(r),start:"".concat(r,"-04-01"),end:"".concat(r,"-06-30")}),t.push({name:"Q1 ".concat(r),start:"".concat(r,"-01-01"),end:"".concat(r,"-03-31")}),--r;return t}}]),r}(s["d"])}}]);
//# sourceMappingURL=chunk-f244bbfa.f6a61a14.js.map