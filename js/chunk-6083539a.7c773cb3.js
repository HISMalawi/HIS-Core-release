(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6083539a"],{"054e":function(e,t,o){"use strict";o("6547")},"1d39":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function r(e,t,o,r,i,a){const s=Object(n["resolveComponent"])("report-template"),c=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(c,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,config:{showIndex:!0},reportPrefix:"Clinic",onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])]),_:1})}o("13d5"),o("14d9");var i=o("44e3"),a=o("6cb7"),s=o("4ba2"),c=o("9ceb"),l=o("2ef0");const d=[{indicator:"started_tpt_new",label:e=>"Started (New on ART) "+e},{indicator:"started_tpt_prev",label:e=>"Started (Previous on ART) "+e},{indicator:"completed_tpt_new",label:e=>"Completed (New on ART) "+e},{indicator:"completed_tpt_prev",label:e=>"Completed (Previous on ART) "+e},{indicator:"not_completed_tpt",label:e=>"Not completed "+e},{indicator:"died",label:e=>"Died on "+e},{indicator:"defaulted",label:e=>"Defaulted "+e},{indicator:"stopped",label:e=>"Stopped "+e},{indicator:"transfer_out",label:e=>"Transfer out with "+e},{indicator:"confirmed_tb",label:e=>"Confirmed TB on "+e},{indicator:"pregnant",label:e=>"Pregnant on "+e},{indicator:"breast_feeding",label:e=>"Breastfeeding "+e},{indicator:"skin_rash",label:e=>"Skin rash "+e},{indicator:"peripheral_neuropathy",label:e=>"Peripheral neuropathy "+e},{indicator:"yellow_eyes",label:e=>"Yellow eyes "+e},{indicator:"nausea",label:e=>"Nausea "+e},{indicator:"dizziness",label:e=>"Dizziness "+e}];var p=Object(n["defineComponent"])({mixins:[i["a"]],components:{ReportTemplate:s["a"]},data:()=>({title:"TPT Outcome",cohort:{},rows:[],columns:[[c["a"].thTxt("Age group"),c["a"].thTxt("TPT Type"),c["a"].thTxt("Started TPT (New on ART)"),c["a"].thTxt("Started TPT (Previous on ART)"),c["a"].thTxt("Completed TPT (New on ART)"),c["a"].thTxt("Completed TPT (Previous on ART)"),c["a"].thTxt("Not completed TPT"),c["a"].thTxt("Died"),c["a"].thTxt("Defaulted"),c["a"].thTxt("Stopped ART"),c["a"].thTxt("TO"),c["a"].thTxt("Confirmed TB "),c["a"].thTxt("Pregnant"),c["a"].thTxt("Breastfeeding"),c["a"].thTxt("Skin rash"),c["a"].thTxt("Peripheral neuropathy"),c["a"].thTxt("Yellow eyes"),c["a"].thTxt("Nausea"),c["a"].thTxt("Dizziness")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(e,t){this.rows=[],this.report=new a["a"],this.report.setStartDate(t.start_date),this.report.setEndDate(t.end_date),this.report.setOccupation(t.occupation),this.period=this.report.getDateIntervalPeriod(),this.cohort=await this.report.getTtpOutcomes()||[],this.setRows(),this.setMaleTotalsRow(),await this.setFemaleAggregations()},setMaleTotalsRow(){const e=this.cohort.reduce((e,t)=>(d.forEach(o=>{e[o.indicator]||(e[o.indicator]=[]),t[o.indicator]&&(e[o.indicator]=e[o.indicator].concat(t[o.indicator].filter(e=>"M"===e.gender).map(e=>e.patient_id)))}),e),{});this.rows.push([c["a"].td("All"),c["a"].td("Male"),...d.map(t=>this.drill(e[t.indicator],t.label("All")))])},async setFemaleAggregations(){const e=this.cohort.reduce((e,t)=>(d.forEach(o=>{e[o.indicator]||(e[o.indicator]=[]),t[o.indicator]&&(e[o.indicator]=e[o.indicator].concat(t[o.indicator].filter(e=>"F"===e.gender).map(e=>e.patient_id)),e.all=e.all.concat(e[o.indicator]))}),e),{all:[]}),t=this.cohort.reduce((e,t)=>Object(l["uniq"])(e.concat(t.pregnant||[])),[]),o=this.cohort.reduce((e,t)=>Object(l["uniq"])(e.concat(t.breast_feeding||[])),[]),n=t.concat(o);this.rows.push([c["a"].td("All"),c["a"].td("FP"),...d.map(o=>this.drill(e[o.indicator].filter(e=>t.includes(e)),o.label("All FP")))]),this.rows.push([c["a"].td("All"),c["a"].td("FNP"),...d.map(t=>this.drill(e[t.indicator].filter(e=>!n.includes(e)),t.label("All FNP")))]),this.rows.push([c["a"].td("All"),c["a"].td("FBF"),...d.map(t=>this.drill(e[t.indicator].filter(e=>o.includes(e)),t.label("All FBF")))])},setRows(){const e=[],t=[];this.cohort.forEach(o=>{const n=[c["a"].td(o.age_group),c["a"].td(o.tpt_type),...d.map(e=>this.drill((o[e.indicator]||[]).map(e=>e.patient_id),e.label(o.tpt_type)))];"3HP"===o.tpt_type?t.push(n):e.push(n)}),this.rows=t.concat(e)}}}),u=o("6b0d"),h=o.n(u);const b=h()(p,[["render",r]]);t["default"]=b},"44e3":function(e,t,o){"use strict";o("14d9");var n=o("1c74"),r=o("7a23"),i=o("b446"),a=o("23e6"),s=o("9283"),c=o("d867"),l=o("d6aa"),d=o("5969"),p=o("d95e"),u=o("2706"),h=o("9ceb"),b=o("2ef0"),m=o("8e8b"),O=o("3e53"),f=Object(r["defineComponent"])({data:()=>({app:O["a"].getActiveApp(),fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",isMilitarySite:!1,drillDownCache:{}}),methods:{formatGender(e){const t=(""+e).toUpperCase();return"M"===t||"MALE"===t?"Male":"F"===t||"FEMALE"===t?"Female":/fbf|fnp|fp/i.test(e)?t:e},toDate(e){return s["b"].toStandardHisDisplayFormat(e)},sortByArvNumber(e,t="arv_number"){try{return e.sort((e,o)=>this.getArvInt(e[t])>this.getArvInt(o[t])?1:-1)}catch(o){return console.error(o),e}},getArvInt(e){if("string"===typeof e){const[t,o,n]=e.split("-"),r=parseInt(n);return"number"===typeof r?r:0}return 0},tdARV(e,t={}){return h["a"].td(e,{sortValue:this.getArvInt(e),...t})},confirmPatient(e){return this.$router.push("/patients/confirm?person_id="+e)},async drilldownAsyncRows(e,t,o,n=!0){const r=await c["Z"].create({component:l["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:o,canExport:n,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>c["Z"].dismiss()}});r.present()},async drilldownData(e,t,o,n){const r=await c["Z"].create({component:l["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:o,rowParser:n,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>c["Z"].dismiss()}});r.present()},getDefaultDrillDownTable(){const e=[[h["a"].thTxt("ARV number"),h["a"].thTxt("Gender"),h["a"].thTxt("Birth Date"),h["a"].thTxt("Actions")]],t=async e=>{let t=0;const o=e.map(async e=>{let o=null,n=null;if(Object(b["isArray"])(e)){const[t,o]=e;if(n=t,o in this.drillDownCache){const[e,...t]=this.drillDownCache[o];return[n,...t]}}else if(o=e,o in this.drillDownCache)return this.drillDownCache[o];const r=await a["a"].findByID(o),i=new a["a"](r),s=[];return n&&(t=1,s.push(n)),s.push(this.tdARV(i.getArvNumber())),s.push(h["a"].td(this.formatGender(i.getGender()))),s.push(h["a"].tdDate(i.getBirthdate().toString())),s.push(h["a"].tdBtn("Show",async()=>{await c["Z"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+o})})),this.drillDownCache[o]=s,s}),n=await Promise.all(o);return n.sort((e,o)=>e[t].sortValue>o[t].sortValue?1:-1)};return{rowParser:t,columns:e}},runTableDrill(e,t="Drilldown patients"){const{columns:o,rowParser:n}=this.getDefaultDrillDownTable();this.drilldownData(t,o,e,n)},drill(e,t="Drill table"){return e&&e.length>0?h["a"].tdLink(e.length,()=>this.runTableDrill(e,t)):h["a"].td(0)},getQuaterOptions(){const e=d["a"].getReportQuarters();return e.map(e=>({label:e.name,value:e.start,other:e}))},getDateDurationFields(e=!1,t=!1,o=5,r=n["e"].getSessionDate()){const a="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:p["b"].TT_SELECT,condition:()=>e,validation:e=>u["a"].required(e),options:()=>{const e=d["a"].getReportQuarters(o);let n=e.map(e=>({label:e.name,value:e.start,other:e}));return t&&(n=[{label:"Set custom period",value:"custom_period",other:{}},...n]),n}},...Object(i["b"])({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,minDate:()=>a,maxDate:()=>r,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(i["b"])({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,unload:(e,t,o,n)=>{"next"===t&&(this.endDate=n.end_date)},minDate:(e,t)=>t.start_date,maxDate:()=>r,estimation:{allowUnknown:!1},computeValue:e=>e}),{id:"occupation",helpText:"Report Group",type:p["b"].TT_SELECT,init:async()=>(this.isMilitarySite=await m["a"].get("IS_MILITARY_SITE"),!0),computedValue:e=>e.value,condition:()=>{var e;return"ART"===(null===(e=this.app)||void 0===e?void 0:e.applicationName)&&this.isMilitarySite},validation:e=>u["a"].required(e),options:()=>[{label:"All",value:"All"},{label:"Military",value:"Military"},{label:"Civilian",value:"Civilian"}]}]}}});const j=f;t["a"]=j},"4ba2":function(e,t,o){"use strict";var n=o("7a23");const r=["innerHTML"],i={class:"header-text-list"},a=["onClick"],s={key:1},c=["innerHTML"],l={key:0},d={class:"report-content"};function p(e,t,o,p,u,h){const b=Object(n["resolveComponent"])("his-standard-form"),m=Object(n["resolveComponent"])("ion-title"),O=Object(n["resolveComponent"])("ion-img"),f=Object(n["resolveComponent"])("ion-thumbnail"),j=Object(n["resolveComponent"])("ion-chip"),w=Object(n["resolveComponent"])("ion-label"),g=Object(n["resolveComponent"])("ion-item"),C=Object(n["resolveComponent"])("ion-toolbar"),y=Object(n["resolveComponent"])("ion-header"),v=Object(n["resolveComponent"])("report-table"),D=Object(n["resolveComponent"])("ion-content"),T=Object(n["resolveComponent"])("ion-footer"),x=Object(n["resolveComponent"])("his-footer"),F=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["withDirectives"])(Object(n["createVNode"])(b,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[n["vShow"],!e.canShowReport]]),e.canShowReport?(Object(n["openBlock"])(),Object(n["createBlock"])(F,{key:0},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(y,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])(()=>[e.showtitleOnly?(Object(n["openBlock"])(),Object(n["createBlock"])(m,{key:0},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("span",{innerHTML:e.title},null,8,r)]),_:1})):Object(n["createCommentVNode"])("",!0),e.showtitleOnly?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(g,{key:1},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,{slot:"start"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(O,{src:e.logo},null,8,["src"])]),_:1}),Object(n["createVNode"])(w,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("ul",i,[Object(n["createElementVNode"])("li",null,[Object(n["createTextVNode"])("Title "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.title),1)]),Object(n["createElementVNode"])("li",null,[Object(n["createTextVNode"])("Period "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.period),1)]),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.headerInfoList,(e,t)=>{var o,r;return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.label)+" ",1),e&&null!==e&&void 0!==e&&null!==(o=e.other)&&void 0!==o&&o.onclick?(Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{key:0,href:"#",onClick:Object(n["withModifiers"])(t=>e.other.onclick(),["prevent"])},Object(n["toDisplayString"])(e.value),9,a)):Object(n["createCommentVNode"])("",!0),!e||null!==e&&void 0!==e&&null!==(r=e.other)&&void 0!==r&&r.onclick?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("b",s,[Object(n["createElementVNode"])("span",{innerHTML:e.value},null,8,c)]))])}),128)),e.showValidationStatus?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",l,[e.hasErrors?(Object(n["openBlock"])(),Object(n["createBlock"])(j,{key:0,onClick:e.showErrors,color:"danger"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.errorCount),1),Object(n["createTextVNode"])(" Error(s) found. Click for more ")]),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0),e.hasErrors?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(j,{key:1,color:"success"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Report is Consistent ")]),_:1}))])):Object(n["createCommentVNode"])("",!0)])]),_:1})]),_:1}))]),_:1})]),_:1}),Object(n["createVNode"])(D,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",d,[Object(n["createVNode"])(v,{rows:e.rows,columns:e.columns,showFilters:e.showFilters,config:{...e.config,tableCssTheme:e.tableCssTheme},onOnActiveColumns:e.onActiveColumns,onOnActiveRows:e.onActiveRows},null,8,["rows","columns","showFilters","config","onOnActiveColumns","onOnActiveRows"])])]),_:1}),Object(n["createVNode"])(T,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(j,{color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("Date Created: "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.date),1)]),_:1}),Object(n["createVNode"])(j,{color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("His-Core Version: "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(n["createVNode"])(j,{color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("API Version: "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(x,{btns:e.btns},null,8,["btns"])]),_:1})):Object(n["createCommentVNode"])("",!0)],64)}o("14d9");var u=o("0f25"),h=o("80e3"),b=o("ba82"),m=o("9ceb"),O=o("7920"),f=o("d867"),j=o("b5e4"),w=o("1718"),g=o("1c74"),C=o("5a0c"),y=o.n(C),v=o("2ef0");const D=["innerHTML"];function T(e,t,o,r,i,a){const s=Object(n["resolveComponent"])("ion-title"),c=Object(n["resolveComponent"])("ion-toolbar"),l=Object(n["resolveComponent"])("ion-header"),d=Object(n["resolveComponent"])("ion-item"),p=Object(n["resolveComponent"])("ion-list"),u=Object(n["resolveComponent"])("ion-grid"),h=Object(n["resolveComponent"])("ion-button"),b=Object(n["resolveComponent"])("ion-footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(u,{class:"selector"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.errors,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(d,{class:"his-md-text ion-padding",key:t},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("span",{innerHTML:`(${t+1}) ${e}`},null,8,D)]),_:2},1024))),128))]),_:1})]),_:1}),Object(n["createVNode"])(b,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(h,{class:"close-btn",color:"danger",size:"large",onClick:e.closeModal,slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Close ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var x=Object(n["defineComponent"])({components:{IonGrid:f["p"],IonList:f["y"],IonItem:f["w"],IonFooter:f["o"],IonButton:f["d"],IonToolbar:f["S"],IonHeader:f["q"],IonTitle:f["R"]},props:{title:{type:String,default:"Report Errors"},errors:{type:Array,required:!0}},methods:{async closeModal(){await f["Z"].dismiss({})}}}),F=(o("054e"),o("6b0d")),V=o.n(F);const k=V()(x,[["render",T],["__scopeId","data-v-0ed0c7a2"]]);var S=k,N=o("7f35"),_=o("0011"),P=Object(n["defineComponent"])({components:{HisStandardForm:O["a"],IonHeader:f["q"],ReportTable:h["a"],HisFooter:u["a"],IonPage:f["D"],IonContent:f["n"],IonToolbar:f["S"],IonChip:f["l"],IonFooter:f["o"],IonLabel:f["x"],IonThumbnail:f["Q"],IonItem:f["w"],IonImg:f["s"]},props:{encryptPDF:{type:Boolean,default:!1},showValidationStatus:{type:Boolean,default:!1},validationErrors:{type:Array,default:()=>[]},config:{type:Object},headerInfoList:{type:Array,default:()=>[]},reportPrefix:{type:String,default:"HIS-Core"},reportLogo:{type:String},showtitleOnly:{type:Boolean,default:!1},title:{type:String,required:!0},period:{type:String},showFilters:{type:Boolean,default:!1},fields:{type:Object},columns:{type:Object,required:!0},rows:{type:Object,required:!0},customBtns:{type:Array,default:()=>[]},hasServerSideCaching:{type:Boolean,default:!1},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},enabledPDFHorizontalPageBreak:{type:Boolean,default:!1},onFinishBtnAction:{type:Function},onReportConfiguration:{type:Function,required:!0},onDefaultConfiguration:{type:Function},customFileName:{type:String,default:""}},data:()=>({date:"",formData:{},btns:[],computeFormData:{},activeColumns:[],activeRows:[],isLoadingData:!1,canShowReport:!1,siteUUID:g["e"].getSiteUUID(),apiVersion:g["e"].getApiVersion(),coreVersion:g["e"].getCoreVersion(),artVersion:g["e"].getAppVersion(),tableCssTheme:"art-report-theme"}),watch:{validationErrors:{handler(e){Object(v["isEmpty"])(e)||this.showErrors()},deep:!0,immediate:!0},fields:{handler(e){Object(v["isEmpty"])(e)||this.btns.forEach(e=>{"Back"===e.name&&(e.visible=!0)})},immediate:!0}},computed:{logo(){if(!this.reportLogo&&"string"===typeof this.reportPrefix){if(this.reportPrefix.match(/pepfar/i))return Object(w["a"])("login-logos/PEPFAR.png");if(this.reportPrefix.match(/moh/i))return Object(w["a"])("login-logos/Malawi-Coat_of_arms_of_arms.png")}return Object(w["a"])("reports.png")},hasErrors(){return!Object(v["isEmpty"])(this.validationErrors)},errorCount(){return this.validationErrors?this.validationErrors.length:0}},methods:{async showErrors(){const e=await f["Z"].create({component:S,backdropDismiss:!1,cssClass:"large-modal",componentProps:{errors:this.validationErrors}});e.present()},pdfEncryptionData(){const e=g["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}},refreshTimeStamp(){this.date=y()().format("DD/MMM/YYYY HH:MM:ss")},onActiveColumns(e){this.activeColumns=e},onActiveRows(e){this.activeRows=e},getFileName(){return this.customFileName||`${this.reportPrefix} ${g["e"].getLocationName()} ${Object(_["e"])(this.title)} ${this.period}`},async onLoadDefault(){this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),this.onDefaultConfiguration&&await this.onDefaultConfiguration(),f["X"].dismiss()}catch(e){Object(j["c"])(""+e),console.error(e),f["X"].dismiss()}},async onFinish(e,t,o=!1){this.formData=e,this.computeFormData=t,this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),await this.onReportConfiguration(this.formData,this.computeFormData,o),f["X"].dismiss()}catch(n){Object(j["c"])(""+n),console.error(n),f["X"].dismiss()}},async reloadReport(e=!1){Object(v["isEmpty"])(this.formData)&&Object(v["isEmpty"])(this.computeFormData)?this.onDefaultConfiguration&&await this.onLoadDefault():await this.onFinish(this.formData,this.computeFormData,e)},async presentLoading(){const e=await f["X"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.onDefaultConfiguration&&this.onLoadDefault(),this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(m["b"])(this.activeColumns,this.activeRows,"csvMode");Object(b["a"])(e,[...t,["Date Created: "+this.date],["Quarter: "+this.period],["HIS-Core Version: "+this.coreVersion],["API Version: "+this.apiVersion],["Site UUID: "+this.siteUUID],["Generated by: "+g["e"].getUserName()]],this.getFileName())}}),this.btns.push({name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{let e="pdfMode";if(this.encryptPDF){const t=await Object(N["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");e="Secure PDF"===t?"pdfMode":"ignorePDFColumnexport"}const{columns:t,rows:o}=Object(m["b"])(this.activeColumns,this.activeRows,e);Object(b["c"])(t,o,this.getFileName(),this.enabledPDFHorizontalPageBreak,this.encryptPDF&&"ignorePDFColumnexport"!=e?this.pdfEncryptionData():{})}}),this.btns.push({name:"Refresh/Rebuild",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>{let e=!1;this.hasServerSideCaching&&(e=await Object(j["a"])("Do you want to rebuild report cache?",{header:"Rebuild Report"})),this.reloadReport(e)}}),this.btns.push({name:"Back",size:"large",slot:"end",color:"primary",visible:!Object(v["isEmpty"])(this.fields),onClick:()=>this.canShowReport=!1}),this.btns.push({name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>{this.onFinishBtnAction?this.onFinishBtnAction():this.$router.push({path:"/"})}})}});o("6aae");const E=V()(P,[["render",p],["__scopeId","data-v-f22df5d8"]]);t["a"]=E},6547:function(e,t,o){},"6aae":function(e,t,o){"use strict";o("a05b")},"6cb7":function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n=o("5969");class r extends n["a"]{constructor(){super()}getTtpOutcomes(){return this.getReport(`programs/${this.programID}/reports/tpt_outcome`)}getHypertensionReport(){return this.getReport(`programs/${this.programID}/reports/hypertension_report`)}}},7920:function(e,t,o){"use strict";var n=o("7a23");function r(e,t,o,r,i,a){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var i=o("9441"),a=Object(n["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:i["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=o("6b0d"),c=o.n(s);const l=c()(a,[["render",r]]);t["a"]=l},a05b:function(e,t,o){}}]);
//# sourceMappingURL=chunk-6083539a.7c773cb3.js.map