(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ffd9cb4"],{"44e3":function(t,e,a){"use strict";var r=a("1c74"),s=a("7a23"),n=a("b446"),o=a("23e6"),i=a("9283"),u=a("8a30"),d=a("d6aa"),c=a("5969"),l=a("d95e"),h=a("2706"),p=a("9ceb"),m=a("2ef0"),D=Object(s["defineComponent"])({data:()=>({fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",drillDownCache:{}}),methods:{formatGender(t){return"M"===t||"male"===t.toLowerCase()?"Male":"Female"},toDate(t){return i["b"].toStandardHisDisplayFormat(t)},sortByArvNumber(t,e="arv_number"){try{return t.sort((t,a)=>this.getArvInt(t[e])>this.getArvInt(a[e])?1:-1)}catch(a){return console.error(a),t}},getArvInt(t){if("string"===typeof t){const[e,a,r]=t.split("-"),s=parseInt(r);return"number"===typeof s?s:0}return 0},tdARV(t,e={}){return p["a"].td(t,{sortValue:this.getArvInt(t),...e})},confirmPatient(t){return this.$router.push("/patients/confirm?person_id="+t)},async drilldownAsyncRows(t,e,a,r=!0){const s=await u["Z"].create({component:d["a"],cssClass:"large-modal",componentProps:{title:t,columns:e,asyncRows:a,canExport:r,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>u["Z"].dismiss()}});s.present()},async drilldownData(t,e,a,r){const s=await u["Z"].create({component:d["a"],cssClass:"large-modal",componentProps:{title:t,columns:e,rows:a,rowParser:r,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>u["Z"].dismiss()}});s.present()},getDefaultDrillDownTable(){const t=[[p["a"].thTxt("ARV number"),p["a"].thTxt("Gender"),p["a"].thTxt("Birth Date"),p["a"].thTxt("Actions")]],e=async t=>{let e=0;const a=t.map(async t=>{let a=null,r=null;if(Object(m["isArray"])(t)){const[e,a]=t;if(r=e,a in this.drillDownCache){const[t,...e]=this.drillDownCache[a];return[r,...e]}}else if(a=t,a in this.drillDownCache)return this.drillDownCache[a];const s=await o["a"].findByID(a),n=new o["a"](s),i=[];return r&&(e=1,i.push(r)),i.push(this.tdARV(n.getArvNumber())),i.push(p["a"].td(this.formatGender(n.getGender()))),i.push(p["a"].tdDate(n.getBirthdate().toString())),i.push(p["a"].tdBtn("Show",async()=>{await u["Z"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+a})})),this.drillDownCache[a]=i,i}),r=await Promise.all(a);return r.sort((t,a)=>t[e].sortValue>a[e].sortValue?1:-1)};return{rowParser:e,columns:t}},runTableDrill(t,e="Drilldown patients"){const{columns:a,rowParser:r}=this.getDefaultDrillDownTable();this.drilldownData(e,a,t,r)},drill(t,e="Drill table"){return t&&t.length>0?p["a"].tdLink(t.length,()=>this.runTableDrill(t,e)):p["a"].td(0)},getQuaterOptions(){const t=c["a"].getReportQuarters();return t.map(t=>({label:t.name,value:t.start,other:t}))},getDateDurationFields(t=!1,e=!1,a=5,s=r["e"].getSessionDate()){const o="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:l["b"].TT_SELECT,condition:()=>t,validation:t=>h["a"].required(t),options:()=>{const t=c["a"].getReportQuarters(a);let r=t.map(t=>({label:t.name,value:t.start,other:t}));return e&&(r=[{label:"Set custom period",value:"custom_period",other:{}},...r]),r}},...Object(n["b"])({id:"start_date",helpText:"Start",required:!0,condition:e=>e.quarter&&"custom_period"===e.quarter.value||!t,minDate:()=>o,maxDate:()=>s,estimation:{allowUnknown:!1},computeValue:t=>t}),...Object(n["b"])({id:"end_date",helpText:"End",required:!0,condition:e=>e.quarter&&"custom_period"===e.quarter.value||!t,unload:(t,e,a,r)=>{"next"===e&&(this.endDate=r.end_date)},minDate:(t,e)=>e.start_date,maxDate:()=>s,estimation:{allowUnknown:!1},computeValue:t=>t})]}}});const g=D;e["a"]=g},"4dbc":function(t,e,a){"use strict";a.r(e);var r=a("7a23");function s(t,e,a,s,n,o){const i=Object(r["resolveComponent"])("report-template");return Object(r["openBlock"])(),Object(r["createBlock"])(i,{title:t.title,rows:t.rows,paginated:!0,customBtns:[{name:"DATE",size:"large",slot:"end",color:"warning",visible:!0,onClick:t.setReport}],columns:t.columns},null,8,["title","rows","customBtns","columns"])}var n=a("91e4"),o=a("44e3"),i=a("d6aa"),u=a("9ceb"),d=a("c731"),c=a("b5e4"),l=a("fe70"),h=Object(r["defineComponent"])({mixins:[o["a"]],components:{ReportTemplate:i["a"]},data:()=>({title:"Audit trail",rows:[],columns:[[u["a"].thTxt("Product Code"),u["a"].thTxt("Medication"),u["a"].thTxt("Transaction date"),u["a"].thTxt("Transaction type"),u["a"].thTxt("Quantity"),u["a"].thTxt("Username"),u["a"].thTxt("reason")]]}),mounted(){this.setReport()},methods:{setReport(){this.rows=[],Object(d["a"])(this.getDateDurationFields(),{onFinish:async(t,e)=>{await l["f"].dismiss(),(await l["d"].create({message:"Please wait",backdropDismiss:!1})).present(),this.report=new n["a"],this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.title="Audit trail "+this.report.getDateIntervalPeriod(),this.report.loadTrail().then(t=>{t.forEach(t=>{this.rows.push([u["a"].td(t.product_code||""),u["a"].td(t.drug_name),u["a"].tdDate(t.transaction_date),u["a"].td(t.transaction_type),u["a"].tdNum(t.amount_committed_to_stock),u["a"].td(t.username),u["a"].td(t.transaction_reason)])}),l["d"].dismiss()}).catch(t=>{l["d"].dismiss(),Object(c["c"])(t)})}})}}}),p=a("d959"),m=a.n(p);const D=m()(h,[["render",s]]);e["default"]=D},5969:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var r=a("1c74"),s=a("9283"),n=a("5a0c"),o=a.n(n);class i extends r["e"]{constructor(){super(),this.endDate="",this.startDate="",this.quarter="",this.date=r["e"].getSessionDate(),this.programID=r["e"].getProgramID()}getDateIntervalPeriod(){return`${s["b"].toStandardHisDisplayFormat(this.startDate)} - ${s["b"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(t){this.startDate=t}setEndDate(t){this.endDate=t}setQuarter(t){this.quarter=t}getReport(t,e={}){return r["e"].getJson(t,this.buildRequest(e))}buildRequest(t={}){const e={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(e["start_date"]=this.startDate,e["end_date"]=this.endDate),this.quarter&&(e["quarter"]=this.quarter),{...e,...t}}static getQuarterBounds(t){const e=e=>o()(`${t}-${e}-01`).daysInMonth(),a=e=>`${t}-${e}-01 00:00`,r=a=>`${t}-${a}-${e(a)} 00:00`;return{Q1:{qtr:1,start:a("01"),end:r("03")},Q2:{qtr:2,start:a("04"),end:r("06")},Q3:{qtr:3,start:a("07"),end:r("09")},Q4:{qtr:4,start:a("10"),end:r("12")}}}static getQtrByDate(t){const e=this.getQuarterBounds(t.getFullYear());for(const a in e){const{start:r,end:s}=e[a];if(t>=new Date(r)&&t<=new Date(s))return e[a]}return null}static buildQtrObj(t,e){const a=this.getQuarterBounds(e),{start:r,end:s}=a[t];return{start:r,end:s,name:`${t} ${e}`}}static getReportQuarters(t=5){const e=[];let a=new Date,r=a.getFullYear();const s=r;a=new Date(`${s}-${a.getMonth()+1}-${a.getDate()} 00:00`);const n=this.getQtrByDate(a);let o=n.qtr,i=0;4===o&&e.push(this.buildQtrObj("Q1",r+1));while(i<t)0===i&&o<4&&e.push(this.buildQtrObj("Q"+(o+1),r)),e.push(this.buildQtrObj("Q"+o,r)),o=o>0?o-=1:o,r=0==o?r-1:r,o=0==o?o+=4:o,i++;return e}}},"91e4":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var r=a("5969");class s extends r["a"]{constructor(){super(),this.stock=[]}async loadStock(){this.stock=await r["a"].getJson("pharmacy/items",{paginate:!1})}getStockReport(){return r["a"].getJson("pharmacy/stock_report",{paginate:!1})}loadTrail(){return this.getReport("pharmacy/audit_trail")}groupStock(){const t={};for(const e in this.stock){const a=this.stock[e],r=a["drug_id"];t[r]||(t[r]={current_quantity:0,expiry_dates:[],pack_size:a.pack_size,drug_name:null===a["drug_name"]?a["drug_legacy_name"]:a["drug_name"]}),0!==a.current_quantity&&(t[r]["current_quantity"]+=parseFloat(a.current_quantity),t[r]["expiry_dates"].push(a["expiry_date"]))}return Object.values(t).map(t=>{let e="0";e=null==t.pack_size?t.current_quantity+"(tabs)":Math.trunc(t.current_quantity/t.pack_size);const a=t.expiry_dates.sort((t,e)=>+new Date(t)-+new Date(e))[0];return{drugName:t.drug_name,currentQuantity:e,quantityIsTabs:null===t.pack_size,expiryDate:a}})}}}}]);
//# sourceMappingURL=chunk-1ffd9cb4.aef1ea0a.js.map