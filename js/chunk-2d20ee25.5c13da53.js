(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ee25"],{b0ef:function(t,e,r){"use strict";r.r(e);var a=r("7a23");function o(t,e,r,o,s,i){const n=Object(a["resolveComponent"])("report-template");return Object(a["openBlock"])(),Object(a["createBlock"])(n,{title:t.title,period:t.period,rows:t.rows,fields:t.fields,columns:t.columns,onReportConfiguration:t.onPeriod,config:{showIndex:!1}},null,8,["title","period","rows","fields","columns","onReportConfiguration"])}r("14d9");var s=r("87e7"),i=r("44e3"),n=r("4ba2"),d=r("9ceb"),p=Object(a["defineComponent"])({mixins:[i["a"]],components:{ReportTemplate:n["a"]},data:()=>({title:"Clinic Regimen Report",rows:[],columns:[[d["a"].thTxt("ARV#"),d["a"].thTxt("Gender"),d["a"].thTxt("DOB"),d["a"].thTxt("ART start date"),d["a"].thTxt("Weight(Kg)"),d["a"].thTxt("Curr.Reg"),d["a"].thTxt("ARVs"),d["a"].thTxt("Curr.reg dispensed"),d["a"].thTxt("VL result"),d["a"].thTxt("Date of VL result")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(t,e){this.rows=[],this.report=new s["d"],this.report.setReportType("moh"),this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.report.setOccupation(e.occupation),this.period=this.report.getDateIntervalPeriod(),this.setRows(await this.report.getRegimenReport())},setRows(t){this.sortByArvNumber(Object.values(t)).map(t=>{let e="";const r=t.medication.map(t=>(e=this.toDate(t.start_date),`${t.medication} (${t.quantity})`));this.rows.push([d["a"].td(t.arv_number),d["a"].td(this.formatGender(t.gender)),d["a"].tdDate(t.birthdate),d["a"].tdDate(t.art_start_date),d["a"].td(t.current_weight),d["a"].td(t.current_regimen||"N/A"),d["a"].td(r.join(", ")),d["a"].tdDate(e),d["a"].td(t.vl_result),d["a"].tdDate(t.vl_result_date)])})}}}),c=r("6b0d"),h=r.n(c);const l=h()(p,[["render",o]]);e["default"]=l}}]);
//# sourceMappingURL=chunk-2d20ee25.5c13da53.js.map