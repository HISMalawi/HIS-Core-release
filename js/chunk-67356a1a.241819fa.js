(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67356a1a"],{2941:function(t,e,r){"use strict";r.r(e);var a=r("7a23");function s(t,e,r,s,i,n){const o=Object(a["resolveComponent"])("report-template"),d=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createBlock"])(d,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(o,{title:t.title,rows:t.rows,fields:t.fields,columns:t.columns,period:t.period,onReportConfiguration:t.init,customBtns:t.customBtns},null,8,["title","rows","fields","columns","period","onReportConfiguration","customBtns"])]),_:1})}r("14d9"),r("13d5");var i=r("fcd5"),n=r("552a"),o=r("9ceb"),d=r("9283"),c=r("44e3"),h=r("d867"),p=Object(a["defineComponent"])({components:{ReportTemplate:n["a"],IonPage:h["IonPage"]},mixins:[c["a"]],data:()=>({title:"OPD medication given (with prescription)",rows:[],reportData:[],highLevelStats:[],columns:[[o["a"].thTxt("First Name"),o["a"].thTxt("Last Name"),o["a"].thTxt("Gender"),o["a"].thTxt("DOB"),o["a"].thTxt("Drug"),o["a"].thTxt("Quantity"),o["a"].thTxt("Date")]],customBtns:[]}),created(){this.fields=this.getDateDurationFields(),this.customBtns.push({name:"High level view",size:"large",slot:"start",color:"primary",visible:!0,onClick:async()=>await this.showModal()})},methods:{async init(t,e){const r=new i["d"];r.setStartDate(e.start_date),r.setEndDate(e.end_date),this.period=r.getDateIntervalPeriod(),this.reportData=await r.getDrugsGivenWithPrescription(),this.rows=this.buildRows(this.reportData)},buildRows(t){return t.length?t.map(t=>[o["a"].td(t.given_name),o["a"].td(t.family_name),o["a"].td(t.gender),o["a"].td(d["c"].toStandardHisDisplayFormat(t.birthdate)),o["a"].td(t.drug_name),o["a"].td(t.quantity),o["a"].td(d["c"].toStandardHisDisplayFormat(t.date))]):[]},async showModal(){await this.buildHighlevelView();const t=[[o["a"].thTxt("Number"),o["a"].thTxt("Drug Name"),o["a"].thTxt("Quantity")]];let e=1;const r=this.highLevelStats.map(t=>[o["a"].td(e++),o["a"].td(t.label),o["a"].td(t.value)]);await this.drilldownData("Durgs Given with prescription Report Summary",t,r,!1)},async buildHighlevelView(){const t=await this.reportData.reduce((function(t,e){return t[e.drug_name]||(t[e.drug_name]={label:e.drug_name,value:0}),t[e.drug_name].value+=e.quantity,t}),{});this.highLevelStats=Object.keys(t).map(e=>t[e])}}}),u=r("d959"),l=r.n(u);const g=l()(p,[["render",s]]);e["default"]=g},fcd5:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return h})),r.d(e,"d",(function(){return p}));var a=r("ade3"),s=(r("14d9"),r("1c74")),i=r("9283"),n=r("b89f"),o=r("bef6");const d={one:"AL 1",two:"AL 2",three:"AL 3",four:"LA 4"},c=["Diabetes","Hypertension","Stroke","Suspected cancer","Confirmed cancer","Palliative cancer","Asthma","Depression","Acute psychosis","Chronic psychosis","Epilepsy"],h=["Organic mental disorder (Chronic)","Organic mental disorder (acute)","Alcohol use mental disorder","Drug use mental disorder","Schizophrenia","Acute and transient psychotic disorder","Schizo-affective disorder","Mood-affective disorder (MANIC)","Mood-affective disorder (BIPOLAR)","Mood-affective disorder (DEPRESSION)","Anxiety disorder","Stress reaction adjustment disorder","Dissociative conversion disorder","Somatoform disorder","Puerperal mental disorder","Personality/Behaviour disorder","Mental retardation","Psychological mental disorder","Hyperkinetic conduct disorder","Epilepsy"];class p extends s["e"]{constructor(){super(),Object(a["a"])(this,"programID",void 0),Object(a["a"])(this,"startDate",void 0),Object(a["a"])(this,"endDate",void 0),Object(a["a"])(this,"date",void 0),Object(a["a"])(this,"epiweek",void 0),this.endDate="",this.startDate="",this.epiweek="",this.date=s["e"].getSessionDate(),this.programID=s["e"].getProgramID()}getPatientsWithNIDs(){return this.getReport("with_nids")}getClinicRegistrations(){return this.getReport("registration")}getAttendance(){return this.getReport(`programs/${this.programID}/reports/attendance`)}getDrugsGivenWithoutPrescription(){return this.getReport("drugs_given_without_prescription")}getDrugsGivenWithPrescription(){return this.getReport("drugs_given_with_prescription")}getDiagnosis(){const t=`programs/${this.programID}/reports/diagnosis`;return s["e"].getJson(t,{start_date:this.startDate,end_date:this.endDate,date:this.date})}getDiagnosisByAddress(){return this.getReport("diagnosis_by_address")}getLaPrescriptions(){const t=`programs/${this.programID}/reports/la_prescriptions`;return s["e"].getJson(t,{start_date:this.startDate,end_date:this.endDate})}printLaReport(t){const e=new n["a"],r=`programs/${this.programID}/barcodes/la_report`,a={"date[start]":this.startDate,"date[end]":this.endDate};return Object.keys(d).forEach((e,r)=>{r++,a[r+"[prescription]"]=t[`total_la_${e}_prescribed_drugs`],a[r+"[dispensed]"]=t[`total_la_${e}_dispensed_drugs`]}),e.printLbl(`${r}?${o["a"].parameterizeObjToString(a)}`)}getDateIntervalPeriod(){return`${i["c"].toStandardHisDisplayFormat(this.startDate)} - ${i["c"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(t){this.startDate=t}setEndDate(t){this.endDate=t}setEpiWeek(t){this.epiweek=t}getReportPeriod(){return this.startDate&&this.endDate?`${i["c"].toStandardHisDisplayFormat(this.startDate)} - ${i["c"].toStandardHisDisplayFormat(this.endDate)}`:"-"}getReport(t,e={}){return s["e"].getJson(t,this.buildRequest(e))}buildRequest(t={}){const e={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(e["start_date"]=this.startDate,e["end_date"]=this.endDate),this.epiweek&&(e["epiweek"]=this.epiweek),{...e,...t}}static getReportQuarters(t=4){const e=[];let r=i["c"].getCurrentYear();for(let a=0;a<t;++a)e.push({name:"Q4 "+r,start:r+"-10-01",end:r+"-12-31"}),e.push({name:"Q3 "+r,start:r+"-07-01",end:r+"-09-30"}),e.push({name:"Q2 "+r,start:r+"-04-01",end:r+"-06-30"}),e.push({name:"Q1 "+r,start:r+"-01-01",end:r+"-03-31"}),--r;return e}}}}]);
//# sourceMappingURL=chunk-67356a1a.241819fa.js.map