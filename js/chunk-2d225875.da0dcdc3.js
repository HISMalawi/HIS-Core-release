(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225875"],{e57f:function(e,t,o){"use strict";o.r(t);var n=o("7a23");function s(e,t,o,s,a,r){const i=Object(n["resolveComponent"])("report-template"),d=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(d,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(i,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,reportPrefix:"MoH",config:{showIndex:!1},enabledPDFHorizontalPageBreak:!0,onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])]),_:1})}o("13d5"),o("14d9");var a=o("44e3"),r=o("87e7"),i=o("2ef0"),d=o("4ba2"),c=o("9ceb"),l=o("d867"),p=Object(n["defineComponent"])({mixins:[a["a"]],components:{ReportTemplate:d["a"],IonPage:l["D"]},data:()=>({rows:[],title:"Regimen distribution (Weight)",columns:[]}),created(){this.columns=[[c["a"].thTxt("Weight band"),c["a"].thTxt("Gender"),...r["c"].map(e=>c["a"].thNum(e)),c["a"].thNum("Unknown"),c["a"].thNum("Total (regimen)")]],this.fields=this.getDateDurationFields()},methods:{async onPeriod(e,t){this.rows=[],this.report=new r["d"],this.report.setStartDate(t.start_date),this.report.setEndDate(t.end_date),this.period=this.report.getDateIntervalPeriod();const o=await this.report.getRegimensByWeight();await this.setRows(o)},async setRows(e){const t=e=>[...r["c"],"N/A"].map(t=>{const o=e.filter(e=>!!e[t]).map(e=>Object.values(e)[0]);return c["a"].td(Object(i["isEmpty"])(o)?0:o[0])}),o=e=>e.reduce((e,t)=>e+t.td,0);r["e"].forEach(n=>{const s=e.filter(e=>e.weight===n);s.forEach(e=>{const s=t(e.males),a=t(e.females),r=[c["a"].td(n),c["a"].td("Male"),...s,c["a"].td(o(s))],d=[c["a"].td(n),c["a"].td("Female"),...a,c["a"].td(o(a))];if(this.rows.push(r),this.rows.push(d),!Object(i["isEmpty"])(e.unknown_gender)){const s=t(e.unknown_gender),a=o(s);this.rows.push([c["a"].td(n),c["a"].td("Unknown Gender"),...s,c["a"].td(a)])}})})}}}),h=o("6b0d"),u=o.n(h);const m=u()(p,[["render",s]]);t["default"]=m}}]);
//# sourceMappingURL=chunk-2d225875.da0dcdc3.js.map