(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d917c4c"],{2779:function(t,e,a){"use strict";a("4ce7")},"44e3":function(t,e,a){"use strict";a("14d9");var n=a("1c74"),r=a("7a23"),i=a("b446"),s=a("23e6"),o=a("9283"),c=a("d867"),d=a("d6aa"),l=a("5969"),h=a("d95e"),p=a("2706"),u=a("9ceb"),m=a("2ef0"),b=Object(r["defineComponent"])({data:()=>({fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",drillDownCache:{}}),methods:{formatGender(t){const e=(""+t).toUpperCase();return"M"===e||"MALE"===e?"Male":"F"===e||"FEMALE"===e?"Female":/fbf|fnp|fp/i.test(t)?e:t},toDate(t){return o["b"].toStandardHisDisplayFormat(t)},sortByArvNumber(t,e="arv_number"){try{return t.sort((t,a)=>this.getArvInt(t[e])>this.getArvInt(a[e])?1:-1)}catch(a){return console.error(a),t}},getArvInt(t){if("string"===typeof t){const[e,a,n]=t.split("-"),r=parseInt(n);return"number"===typeof r?r:0}return 0},tdARV(t,e={}){return u["a"].td(t,{sortValue:this.getArvInt(t),...e})},confirmPatient(t){return this.$router.push("/patients/confirm?person_id="+t)},async drilldownAsyncRows(t,e,a,n=!0){const r=await c["ab"].create({component:d["a"],cssClass:"large-modal",componentProps:{title:t,columns:e,asyncRows:a,canExport:n,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>c["ab"].dismiss()}});r.present()},async drilldownData(t,e,a,n){const r=await c["ab"].create({component:d["a"],cssClass:"large-modal",componentProps:{title:t,columns:e,rows:a,rowParser:n,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>c["ab"].dismiss()}});r.present()},getDefaultDrillDownTable(){const t=[[u["a"].thTxt("ARV number"),u["a"].thTxt("Gender"),u["a"].thTxt("Birth Date"),u["a"].thTxt("Actions")]],e=async t=>{let e=0;const a=t.map(async t=>{let a=null,n=null;if(Object(m["isArray"])(t)){const[e,a]=t;if(n=e,a in this.drillDownCache){const[t,...e]=this.drillDownCache[a];return[n,...e]}}else if(a=t,a in this.drillDownCache)return this.drillDownCache[a];const r=await s["a"].findByID(a),i=new s["a"](r),o=[];return n&&(e=1,o.push(n)),o.push(this.tdARV(i.getArvNumber())),o.push(u["a"].td(this.formatGender(i.getGender()))),o.push(u["a"].tdDate(i.getBirthdate().toString())),o.push(u["a"].tdBtn("Show",async()=>{await c["ab"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+a})})),this.drillDownCache[a]=o,o}),n=await Promise.all(a);return n.sort((t,a)=>t[e].sortValue>a[e].sortValue?1:-1)};return{rowParser:e,columns:t}},runTableDrill(t,e="Drilldown patients"){const{columns:a,rowParser:n}=this.getDefaultDrillDownTable();this.drilldownData(e,a,t,n)},drill(t,e="Drill table"){return t&&t.length>0?u["a"].tdLink(t.length,()=>this.runTableDrill(t,e)):u["a"].td(0)},getQuaterOptions(){const t=l["a"].getReportQuarters();return t.map(t=>({label:t.name,value:t.start,other:t}))},getDateDurationFields(t=!1,e=!1,a=5,r=n["e"].getSessionDate()){const s="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:h["b"].TT_SELECT,condition:()=>t,validation:t=>p["a"].required(t),options:()=>{const t=l["a"].getReportQuarters(a);let n=t.map(t=>({label:t.name,value:t.start,other:t}));return e&&(n=[{label:"Set custom period",value:"custom_period",other:{}},...n]),n}},...Object(i["b"])({id:"start_date",helpText:"Start",required:!0,condition:e=>e.quarter&&"custom_period"===e.quarter.value||!t,minDate:()=>s,maxDate:()=>r,estimation:{allowUnknown:!1},computeValue:t=>t}),...Object(i["b"])({id:"end_date",helpText:"End",required:!0,condition:e=>e.quarter&&"custom_period"===e.quarter.value||!t,unload:(t,e,a,n)=>{"next"===e&&(this.endDate=n.end_date)},minDate:(t,e)=>e.start_date,maxDate:()=>r,estimation:{allowUnknown:!1},computeValue:t=>t})]}}});const g=b;e["a"]=g},"4ce7":function(t,e,a){},5969:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("ade3"),r=(a("14d9"),a("1c74")),i=a("9283"),s=a("5a0c"),o=a.n(s);class c extends r["e"]{constructor(){super(),Object(n["a"])(this,"programID",void 0),Object(n["a"])(this,"startDate",void 0),Object(n["a"])(this,"endDate",void 0),Object(n["a"])(this,"date",void 0),Object(n["a"])(this,"quarter",void 0),this.endDate="",this.startDate="",this.quarter="",this.date=r["e"].getSessionDate(),this.programID=r["e"].getProgramID()}getDateIntervalPeriod(){return`${i["b"].toStandardHisDisplayFormat(this.startDate)} - ${i["b"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(t){this.startDate=t}setEndDate(t){this.endDate=t}setQuarter(t){this.quarter=t}getReport(t,e={}){return r["e"].getJson(t,this.buildRequest(e))}buildRequest(t={}){const e={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(e["start_date"]=this.startDate,e["end_date"]=this.endDate),this.quarter&&(e["quarter"]=this.quarter),{...e,...t}}static getQuarterBounds(t){const e=e=>o()(`${t}-${e}-01`).daysInMonth(),a=e=>`${t}-${e}-01 00:00`,n=a=>`${t}-${a}-${e(a)} 00:00`;return{Q1:{qtr:1,start:a("01"),end:n("03")},Q2:{qtr:2,start:a("04"),end:n("06")},Q3:{qtr:3,start:a("07"),end:n("09")},Q4:{qtr:4,start:a("10"),end:n("12")}}}static getQtrByDate(t){const e=this.getQuarterBounds(t.getFullYear());for(const a in e){const{start:n,end:r}=e[a];if(t>=new Date(n)&&t<=new Date(r))return e[a]}return null}static buildQtrObj(t,e){const a=this.getQuarterBounds(e),{start:n,end:r}=a[t];return{start:n,end:r,name:`${t} ${e}`}}static getReportQuarters(t=5){const e=[];let a=new Date,n=a.getFullYear();const r=n;a=new Date(`${r}-${a.getMonth()+1}-${a.getDate()} 00:00`);const i=this.getQtrByDate(a);let s=i.qtr,o=0;4===s&&e.push(this.buildQtrObj("Q1",n+1));while(o<t)0===o&&s<4&&e.push(this.buildQtrObj("Q"+(s+1),n)),e.push(this.buildQtrObj("Q"+s,n)),s=s>0?s-=1:s,n=0==s?n-1:n,s=0==s?s+=4:s,o++;return e}}},7920:function(t,e,a){"use strict";var n=a("7a23");function r(t,e,a,r,i,s){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(t.formType),{fields:t.fields,skipSummary:t.skipSummary,activeField:t.activeField,cancelDestinationPath:t.cancelDestinationPath,onOnFinish:t.onFinish,onFinish:t.onFinishAction,onOnIndex:t.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var i=a("9441"),s=Object(n["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:i["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(t,e){this.$emit("onFinish",t,e)},onIndex(t){this.$emit("onIndex",t)}}}),o=a("d959"),c=a.n(o);const d=c()(s,[["render",r]]);e["a"]=d},ad8d:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i}));var n=a("5969");const r=["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"];class i extends n["a"]{constructor(){super()}getBookedAppointments(t){return n["a"].getJson(`programs/${this.programID}/scheduled_appointments`,{date:t})}getViralLoadResults(t){return this.getReport(`/programs/${this.programID}/reports/high_vl_patients`,{range:t})}getOtherOutcome(t){return this.getReport("patient_outcome_list",{outcome:t})}getPatientVisitTypes(){return this.getReport("patient_visit_types")}getClientsDueForVl(){return this.getReport("clients_due_vl")}getClientRentention(){return this.getReport(`/programs/${this.programID}/reports/retention`)}getExternalConsultationClients(){return this.getReport(this.programID+"/external_consultation_clients")}getMissedAppointments(){return this.getReport("missed_appointments")}getPregnantWomen(){return this.getReport(`/programs/${this.programID}/reports/pregnant_patients`)}getArchivingCandidates(){return n["a"].getJson(`programs/${this.programID}/reports/archiving_candidates`,{start_date:this.date})}}},fe31:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const r=t=>(Object(n["pushScopeId"])("data-v-1cf253bc"),t=t(),Object(n["popScopeId"])(),t),i=r(()=>Object(n["createElementVNode"])("br",null,null,-1)),s=r(()=>Object(n["createElementVNode"])("br",null,null,-1)),o={class:"view-port-content"};function c(t,e,a,r,c,d){const l=Object(n["resolveComponent"])("his-standard-form"),h=Object(n["resolveComponent"])("ion-title"),p=Object(n["resolveComponent"])("ion-toolbar"),u=Object(n["resolveComponent"])("ion-header"),m=Object(n["resolveComponent"])("ApexChart"),b=Object(n["resolveComponent"])("view-port"),g=Object(n["resolveComponent"])("ion-content"),O=Object(n["resolveComponent"])("ion-button"),D=Object(n["resolveComponent"])("ion-footer"),w=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[t.canShowReport?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0,onOnFinish:t.onPeriod,skipSummary:!0,fields:t.fields},null,8,["onOnFinish","fields"])),t.canShowReport?(Object(n["openBlock"])(),Object(n["createBlock"])(w,{key:1},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(h,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Total Attendance: "),Object(n["createElementVNode"])("a",{href:"#",onClick:e[0]||(e[0]=Object(n["withModifiers"])(()=>t.drillPatients("Total attendance",t.totalAttendance),["prevent"]))},Object(n["toDisplayString"])(t.totalAttendance.length),1),i,Object(n["createTextVNode"])(" Patient visit: "),Object(n["createElementVNode"])("a",{href:"#",onClick:e[1]||(e[1]=Object(n["withModifiers"])(()=>t.drillPatients("Total patient visits",t.totalPatientVisits),["prevent"]))},Object(n["toDisplayString"])(t.totalPatientVisits.length),1),s,Object(n["createTextVNode"])(" Guardian visit: "),Object(n["createElementVNode"])("a",{href:"#",onClick:e[2]||(e[2]=Object(n["withModifiers"])(()=>t.drillPatients("Guardian visits",t.totalGuardianVisits),["prevent"]))},Object(n["toDisplayString"])(t.totalGuardianVisits.length),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(g,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",o,[Object(n["createVNode"])(m,{width:t.width,height:t.height,type:t.chartType,options:t.chartOptions,series:t.series,onMarkerClick:t.onPointSelection},null,8,["width","height","type","options","series","onMarkerClick"])])]),_:1})]),_:1}),Object(n["createVNode"])(D,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p,{color:"dark"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(O,{onClick:e[3]||(e[3]=e=>t.canShowReport=!1),slot:"start",size:"large"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" New Date ")]),_:1}),Object(n["createVNode"])(O,{slot:"end",size:"large","router-link":"/",color:"success"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Finish ")]),_:1})]),_:1})]),_:1})]),_:1})):Object(n["createCommentVNode"])("",!0)],64)}a("13d5"),a("14d9");var d=a("d867"),l=a("0a79"),h=a("ad8d"),p=a("7920"),u=a("44e3"),m=a("2ef0"),b=a("ae27"),g=a.n(b),O=a("9ceb"),D=a("23e6"),w=Object(n["defineComponent"])({components:{ApexChart:g.a,IonPage:d["D"],IonHeader:d["q"],IonTitle:d["S"],IonToolbar:d["T"],IonContent:d["n"],IonFooter:d["o"],IonButton:d["d"],ViewPort:l["a"],HisStandardForm:p["a"]},mixins:[u["a"]],data:()=>({patients:{},reportData:{},chartType:"area",height:"100%",width:"100%",canShowReport:!1,report:{},series:[],patientPresent:{},guardianPresent:{},bothPresent:{},chartOptions:{title:{text:"HIV Reception encounters"},yaxis:{title:{text:"Number of clients"},plotAreaHeight:800},xaxis:{type:"datetime"},markers:{size:8,hover:{sizeOffset:3}}}}),created(){this.fields=this.getDateDurationFields()},computed:{totalAttendance(){let t=[];return Object.keys(this.reportData).forEach(e=>{t=t.concat(Object.keys(this.reportData[e]).map(t=>({patient_id:t,date:e})))}),t},totalPatientVisits(){return Object.keys(this.patientPresent).reduce((t,e)=>t.concat(this.patientPresent[e].map(t=>({patient_id:t,date:e}))),[])},totalGuardianVisits(){return Object.keys(this.guardianPresent).reduce((t,e)=>t.concat(this.guardianPresent[e].map(t=>({patient_id:t,date:e}))),[])}},methods:{async onPeriod(t,e){await this.presentLoading(),this.reportData={},this.canShowReport=!0,this.patientPresent={},this.guardianPresent={},this.report=new h["b"],this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.reportData=await this.report.getPatientVisitTypes(),this.series=this.buildSeries(this.reportData),d["Y"].dismiss()},async presentLoading(){(await d["Y"].create({message:"Please wait...",backdropDismiss:!1})).present()},async drillPatients(t,e){const a=[[O["a"].thTxt("ARV Number"),O["a"].thTxt("First name"),O["a"].thTxt("Last name"),O["a"].thTxt("Gender"),O["a"].thTxt("Visit date"),O["a"].thTxt("Action")]],n=async t=>{const e=t.map(async t=>{let e=null;if(this.patients[t.patient_id])e=this.patients[t.patient_id];else{const a=await D["a"].findByID(t.patient_id);e=new D["a"](a),this.patients[t.patient_id]=e}try{return[this.tdARV(e.getArvNumber()),O["a"].td(e.getGivenName()),O["a"].td(e.getFamilyName()),O["a"].td(this.formatGender(e.getGender())),O["a"].tdDate(t.date),O["a"].tdBtn("Show",async()=>{await d["ab"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+t.patient_id})})]}catch(a){return[O["a"].td("N/A"),O["a"].td("N/A"),O["a"].td("N/A"),O["a"].td("N/A"),O["a"].td("N/A"),O["a"].tdBtn("Show",async()=>{await d["ab"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+t.patient_id})})]}});return Promise.all(e)};this.drilldownData(t,a,e,n)},onPointSelection(t,e,{dataPointIndex:a,seriesIndex:n}){try{const t=n<=0?0:n,e=this.series[t].data[a],r=this.series[t].raw[a],i=Array.from({length:r.length},(t,a)=>({patient_id:r[a],date:new Date(e[0]).toISOString()}));this.drillPatients("Point selection",i)}catch(t){console.log("Error loading point selection data")}},buildSeries(t){const e=Object(m["uniq"])(Object.keys(t)),a=(e,a,n)=>{e in a||(a[e]=[]);const r=Object.entries(t[e]).filter(([t,e])=>n(e.patient_present,e.guardian_present)).map(([t])=>t);return a[e]=[...a[e],...r],a},n=t=>e.map(e=>[new Date(e).getTime(),t[e].length]),r=t=>e.map(e=>t[e]);for(const i in t)a(i,this.patientPresent,(t,e)=>t&&!e),a(i,this.guardianPresent,(t,e)=>!t&&e),a(i,this.bothPresent,(t,e)=>t&&e);return[{name:"Patient present",raw:r(this.patientPresent),data:n(this.patientPresent)},{name:"Guardian present",raw:r(this.guardianPresent),data:n(this.guardianPresent)},{name:"Both patient and guardian present",raw:r(this.bothPresent),data:n(this.bothPresent)}]}}}),y=(a("2779"),a("d959")),f=a.n(y);const j=f()(w,[["render",c],["__scopeId","data-v-1cf253bc"]]);e["default"]=j}}]);
//# sourceMappingURL=chunk-8d917c4c.24ba611a.js.map