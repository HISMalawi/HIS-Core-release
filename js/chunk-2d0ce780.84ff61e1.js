(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ce780"],{"601a":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function r(e,t,o,r,a,i){const s=Object(n["resolveComponent"])("report-template"),c=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(c,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,{title:e.title,rows:e.rows,fields:e.fields,columns:e.columns,period:e.period,onReportConfiguration:e.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])]),_:1})}var a=o("552a"),i=o("9ceb"),s=o("44e3"),c=o("d867"),C=o("ad9e"),d=Object(n["defineComponent"])({components:{ReportTemplate:a["a"],IonPage:c["D"]},mixins:[s["a"]],data:()=>({title:"CC Basic Results",rows:[],reportService:{},columns:[[i["a"].thTxt("Fine Age"),i["a"].thTxt("CXCA_SCRN_D"),i["a"].thTxt("CXCA_SCRN_N"),i["a"].thTxt("CXCA_SCRN_POS"),i["a"].thTxt("CXCA_SCRN_TX")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(e,t){this.reportService=new C["a"],this.reportService.setStartDate(t.start_date),this.reportService.setEndDate(t.end_date);const o=await this.reportService.getPepfarReport("CC Basic Result");this.rows=this.buildRows(o)},buildRows(e){return e.map(e=>[i["a"].td(e.age_group),i["a"].td(e["CXCA_SCRN_D"].length),i["a"].td(e["CXCA_SCRN_N"].length),i["a"].td(e["CXCA_SCRN_POS"].length),i["a"].td(e["CXCA_SCRN_TX"].length)])}}}),l=o("6b0d"),p=o.n(l);const u=p()(d,[["render",r]]);t["default"]=u}}]);
//# sourceMappingURL=chunk-2d0ce780.84ff61e1.js.map