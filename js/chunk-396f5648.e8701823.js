(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-396f5648"],{d48c:function(t,e,r){"use strict";r.r(e);var i=r("7a23");function a(t,e,r,a,s,n){const o=Object(i["resolveComponent"])("report-template"),d=Object(i["resolveComponent"])("ion-page");return Object(i["openBlock"])(),Object(i["createBlock"])(d,null,{default:Object(i["withCtx"])(()=>[Object(i["createVNode"])(o,{title:t.title,rows:t.rows,fields:t.fields,columns:t.columns,itemsPerPage:12,period:t.period,onReportConfiguration:t.init,paginated:""},null,8,["title","rows","fields","columns","period","onReportConfiguration"])]),_:1})}var s=r("fcd5"),n=r("552a"),o=r("9ceb"),d=r("9283"),c=r("44e3"),p=r("d867"),h=Object(i["defineComponent"])({components:{ReportTemplate:n["a"],IonPage:p["IonPage"]},mixins:[c["a"]],data:()=>({title:"OPD medication given (without prescription)",rows:[],columns:[[o["a"].thTxt("First Name"),o["a"].thTxt("Last Name"),o["a"].thTxt("Gender"),o["a"].thTxt("DOB"),o["a"].thTxt("Drug"),o["a"].thTxt("Quantity"),o["a"].thTxt("Date")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(t,e){const r=new s["d"];r.setStartDate(e.start_date),r.setEndDate(e.end_date),this.period=r.getDateIntervalPeriod(),this.rows=this.buildRows(await r.getDrugsGivenWithoutPrescription())},buildRows(t){return t.length?t.map(t=>[o["a"].td(t.given_name),o["a"].td(t.family_name),o["a"].td(t.gender),o["a"].td(d["c"].toStandardHisDisplayFormat(t.birthdate)),o["a"].td(t.drug_name),o["a"].td(t.quantity),o["a"].td(d["c"].toStandardHisDisplayFormat(t.date))]):[]}}}),u=r("d959"),g=r.n(u);const l=g()(h,[["render",a]]);e["default"]=l},fcd5:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return p})),r.d(e,"d",(function(){return h}));var i=r("ade3"),a=(r("14d9"),r("1c74")),s=r("9283"),n=r("b89f"),o=r("bef6");const d={one:"AL 1",two:"AL 2",three:"AL 3",four:"LA 4"},c=["Diabetes","Hypertension","Stroke","Suspected cancer","Confirmed cancer","Palliative cancer","Asthma","Depression","Acute psychosis","Chronic psychosis","Epilepsy"],p=["Organic mental disorder (Chronic)","Organic mental disorder (acute)","Alcohol use mental disorder","Drug use mental disorder","Schizophrenia","Acute and transient psychotic disorder","Schizo-affective disorder","Mood-affective disorder (MANIC)","Mood-affective disorder (BIPOLAR)","Mood-affective disorder (DEPRESSION)","Anxiety disorder","Stress reaction adjustment disorder","Dissociative conversion disorder","Somatoform disorder","Puerperal mental disorder","Personality/Behaviour disorder","Mental retardation","Psychological mental disorder","Hyperkinetic conduct disorder","Epilepsy"];class h extends a["e"]{constructor(){super(),Object(i["a"])(this,"programID",void 0),Object(i["a"])(this,"startDate",void 0),Object(i["a"])(this,"endDate",void 0),Object(i["a"])(this,"date",void 0),Object(i["a"])(this,"epiweek",void 0),this.endDate="",this.startDate="",this.epiweek="",this.date=a["e"].getSessionDate(),this.programID=a["e"].getProgramID()}getPatientsWithNIDs(){return this.getReport("with_nids")}getClinicRegistrations(){return this.getReport("registration")}getAttendance(){return this.getReport(`programs/${this.programID}/reports/attendance`)}getDrugsGivenWithoutPrescription(){return this.getReport("drugs_given_without_prescription")}getDrugsGivenWithPrescription(){return this.getReport("drugs_given_with_prescription")}getDiagnosis(){const t=`programs/${this.programID}/reports/diagnosis`;return a["e"].getJson(t,{start_date:this.startDate,end_date:this.endDate,date:this.date})}getDiagnosisByAddress(){return this.getReport("diagnosis_by_address")}getLaPrescriptions(){const t=`programs/${this.programID}/reports/la_prescriptions`;return a["e"].getJson(t,{start_date:this.startDate,end_date:this.endDate})}printLaReport(t){const e=new n["a"],r=`programs/${this.programID}/barcodes/la_report`,i={"date[start]":this.startDate,"date[end]":this.endDate};return Object.keys(d).forEach((e,r)=>{r++,i[r+"[prescription]"]=t[`total_la_${e}_prescribed_drugs`],i[r+"[dispensed]"]=t[`total_la_${e}_dispensed_drugs`]}),e.printLbl(`${r}?${o["a"].parameterizeObjToString(i)}`)}getDateIntervalPeriod(){return`${s["c"].toStandardHisDisplayFormat(this.startDate)} - ${s["c"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(t){this.startDate=t}setEndDate(t){this.endDate=t}setEpiWeek(t){this.epiweek=t}getReportPeriod(){return this.startDate&&this.endDate?`${s["c"].toStandardHisDisplayFormat(this.startDate)} - ${s["c"].toStandardHisDisplayFormat(this.endDate)}`:"-"}getReport(t,e={}){return a["e"].getJson(t,this.buildRequest(e))}buildRequest(t={}){const e={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(e["start_date"]=this.startDate,e["end_date"]=this.endDate),this.epiweek&&(e["epiweek"]=this.epiweek),{...e,...t}}static getReportQuarters(t=4){const e=[];let r=s["c"].getCurrentYear();for(let i=0;i<t;++i)e.push({name:"Q4 "+r,start:r+"-10-01",end:r+"-12-31"}),e.push({name:"Q3 "+r,start:r+"-07-01",end:r+"-09-30"}),e.push({name:"Q2 "+r,start:r+"-04-01",end:r+"-06-30"}),e.push({name:"Q1 "+r,start:r+"-01-01",end:r+"-03-31"}),--r;return e}}}}]);
//# sourceMappingURL=chunk-396f5648.e8701823.js.map