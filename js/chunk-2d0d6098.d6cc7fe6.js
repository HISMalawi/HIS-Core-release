(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6098"],{"719a":function(t,e,a){"use strict";a.r(e);var n=a("7a23");function s(t,e,a,s,o,i){const r=Object(n["resolveComponent"])("report-template");return Object(n["openBlock"])(),Object(n["createBlock"])(r,{title:t.title,rows:t.rows,columns:t.columns},null,8,["title","rows","columns"])}a("caad");var o=a("91e4"),i=a("44e3"),r=a("d6aa"),c=a("9ceb"),d=Object(n["defineComponent"])({mixins:[i["a"]],components:{ReportTemplate:r["a"]},data:()=>({title:"Stock report",rows:[],stock:[],columns:[[c["a"].thTxt("Batch Number"),c["a"].thTxt("Medication"),c["a"].thTxt("Units"),c["a"].thTxt("Closing Balance"),c["a"].thTxt("Losses"),c["a"].thTxt("(+ve Adjustment)"),c["a"].thTxt("(-ve Adjustment)"),c["a"].thTxt("Quantity Used"),c["a"].thTxt("Quantity Received")]]}),async created(){this.report=new o["a"];const t=await this.report.loadTrail();this.createStock(t)},methods:{createStock(t){const e={};t.forEach(t=>{e[t.batch_number]||(e[t.batch_number]={drug_name:t.drug_name,drug_id:t.drug_id,"Closing balance":0,Losses:0,"Positive adjustment":0,"Negative adjustment":0,"Quantity used":0,"Quantity receieved":0});const a=t.amount_committed_to_stock;e[t.batch_number]["Closing balance"]+=a,e[t.batch_number]["Losses"]+=["Expired","Damaged","Phased out","Banned","Missing","For trainings"].includes(t.transaction_reason)?a:0,e[t.batch_number]["Positive adjustment"]+=["Drugs delivered"].includes(t.transaction_reason)?a:0,e[t.batch_number]["Negative adjustment"]+=["Transfer to another facility/relocation"].includes(t.transaction_reason)?a:0,e[t.batch_number]["Quantity used"]+=["Drug dispensed"].includes(t.transaction_reason)?a:0,e[t.batch_number]["Quantity receieved"]+=["Drugs delivered"].includes(t.transaction_reason)?a:0}),Object.keys(e).forEach(t=>{this.rows.push([c["a"].td(t),c["a"].td(e[t]["drug_name"]),c["a"].td("Tins"),c["a"].td(e[t]["Closing balance"]),c["a"].td(e[t]["Losses"]),c["a"].td(e[t]["Positive adjustment"]),c["a"].td(e[t]["Negative adjustment"]),c["a"].td(e[t]["Quantity used"]),c["a"].td(e[t]["Quantity receieved"])])})}}}),u=a("6b0d"),l=a.n(u);const m=l()(d,[["render",s]]);e["default"]=m}}]);
//# sourceMappingURL=chunk-2d0d6098.d6cc7fe6.js.map