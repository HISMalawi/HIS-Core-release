(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddf11"],{8410:function(e,t,o){"use strict";o.r(t);var a=o("7a23");const n={id:"report-content"},i=Object(a["createElementVNode"])("div",{id:"print"},null,-1);function r(e,t,o,r,s,c){const l=Object(a["resolveComponent"])("ion-loading"),d=Object(a["resolveComponent"])("his-standard-form"),p=Object(a["resolveComponent"])("hmis-header"),m=Object(a["resolveComponent"])("hmis-template"),h=Object(a["resolveComponent"])("ion-content"),b=Object(a["resolveComponent"])("his-footer"),D=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(l,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),e.reportReady?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:0,onOnFinish:e.onPeriod,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"])),e.reportReady?(Object(a["openBlock"])(),Object(a["createBlock"])(D,{key:1},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",n,[(Object(a["openBlock"])(),Object(a["createBlock"])(p,{key:e.componentKey,reportName:e.reportName,ref:"header",periodLabel:e.periodLabel,periodDates:e.periodDates,clinicName:e.clinicName,totalOPDVisits:e.TotalOPDVisits},null,8,["reportName","periodLabel","periodDates","clinicName","totalOPDVisits"])),(Object(a["openBlock"])(),Object(a["createBlock"])(m,{key:e.componentKey,reportName:e.reportName,onDrillDown:e.onDrillDown,params:e.hmis15Data,periodDates:e.periodDates,ref:"rep"},null,8,["reportName","onDrillDown","params","periodDates"]))])]),_:1}),Object(a["createVNode"])(b,{btns:e.btns},null,8,["btns"])]),_:1})):Object(a["createCommentVNode"])("",!0),i],64)}o("14d9");var s=o("0f25"),c=o("d867"),l=o("7920"),d=o("c2b0"),p=o("3822"),m=o("cb01"),h=o("9d7f"),b=o("9283"),D=Object(a["defineComponent"])({mixins:[d["a"]],components:{IonLoading:c["IonLoading"],HmisHeader:m["a"],HmisTemplate:h["a"],HisStandardForm:l["a"],HisFooter:s["a"],IonPage:c["IonPage"],IonContent:c["IonContent"]},data:()=>({formData:{},componentKey:0,computedFormData:{},hmis15Data:{},btns:[],isLoading:!1,fields:[],reportID:-1,periodLabel:"Period",periodDates:"",reportName:"HMIS 17",TotalOPDVisits:0,clinicName:p["a"].getLocationName(),reportReady:!1}),created(){this.btns=this.getBtns(),this.fields=this.getDateDurationFields()},methods:{async onPeriod(e,t,o=!1){this.componentKey+=1,this.formData=e,this.computedFormData=t,this.reportReady=!0,this.isLoading=!0,this.report=new p["a"],this.report.setRegenerate(o),this.report.setStartDate(b["c"].toStandardHisFormat(t.start_date)),this.report.setEndDate(b["c"].toStandardHisFormat(t.end_date)),this.periodDates=this.report.getReportPeriod();try{const e=await this.report.requestHMIS17(),t=await this.report.getAttendance();e&&t&&(this.reportID="data",this.TotalOPDVisits=t.length,this.hmis15Data=e)}catch(a){console.log(a)}finally{this.isLoading=!1}},getBtns(){return[{name:"CSV",size:"large",slot:"start",color:"primary",visible:!0,onClick:async()=>{const e=this.$refs.rep;e.onDownload()}},{name:"PDF",size:"large",slot:"start",color:"primary",visible:!0,onClick:()=>this.exportToCustomPDF(this.reportName)},{name:"Back",size:"large",slot:"end",color:"warning",visible:!0,onClick:()=>this.reportReady=!1},{name:"Refresh",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>await this.onPeriod(this.formData,this.computedFormData,!0)},{name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>this.$router.push({path:"/"})}]}}}),O=o("d959"),g=o.n(O);const u=g()(D,[["render",r]]);t["default"]=u}}]);
//# sourceMappingURL=chunk-2d0ddf11.f03361b5.js.map