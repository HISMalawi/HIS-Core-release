System.register(["./data_cleaning_report_service-legacy-B6EisqxU.js","./ReportMixin.vue_vue_type_script_lang-legacy-DWNP96Om.js","./TableReportTemplate-legacy-BKTskeEM.js","./index-legacy-DLdqxVnr.js","./TableView-legacy-CQt1jCTg.js","./BasicReportTemplate-legacy-38jIYQh2.js","./Export-legacy-pUCWT6tL.js","./index-legacy-Cy5lJcFI.js","./Pagination-legacy-rWo9aFQy.js","./HisStandardForm-legacy-D9LtBbE8.js","./ReportErrors-legacy-C00jm-0H.js"],(function(t,e){"use strict";var a,s,i,n,r,o,l,d,h,c,u,m,p,D,g,f,_,w,T,R,x,b;return{setters:[t=>{a=t.D,s=t.C},t=>{i=t._},t=>{n=t.R},t=>{r=t.d,o=t.a5,l=t.a9,d=t.aa,h=t.aL,c=t.ao,u=t.aJ,m=t.dm,p=t.aq,D=t.cZ,g=t.aj,f=t.a6,_=t.v,w=t.w,T=t.ab,R=t.u,x=t.x},t=>{b=t.v},null,null,null,null,null,null],execute:function(){const e=r({mixins:[i],components:{ReportTemplate:n,IonPage:o},data:()=>({title:"Data cleaning report",rows:[],columns:[]}),created(){this.fields=[{id:"indicator",helpText:"Select indicator",type:l.TT_SELECT,requireNext:!1,validation:t=>d.required(t),options:()=>this.getIndicatorOptions()},...h({id:"start_date",helpText:"Start",required:!0,condition:t=>!t.indicator.other.skipDateSelection,minDate:()=>"2001-01-01",maxDate:()=>g.getSessionDate(),estimation:{allowUnknown:!1},computeValue:t=>t}),...h({id:"end_date",helpText:"End",required:!0,condition:t=>!t.indicator.other.skipDateSelection,minDate:(t,e)=>e.start_date,maxDate:()=>g.getSessionDate(),estimation:{allowUnknown:!1},computeValue:t=>t})]},methods:{async onPeriod(t,e){this.rows=[],this.title=t.indicator.label;const a=t.indicator;this.columns=a.other.columns,await a.other.setRows(t,e)},masterCardBtn(t){return c.tdBtn("View",(()=>this.$router.push(`/art/mastercard/${t}`)))},getDefaultIndicatorColumns:(t=[])=>[[c.thTxt("ARV Number"),c.thTxt("Patient Id"),c.thTxt("First Name"),c.thTxt("Last Name"),c.thTxt("Gender"),c.thTxt("Date of birth"),...t,c.thTxt("Action")]],async setDefaultIndicatorRows(t,e,s,i=null){this.report=new a,this.report.setStartDate(e),this.report.setEndDate(s),this.period=this.report.getDateIntervalPeriod();const n=this.sortByArvNumber(await this.report.getCleaningToolReport(t)||[],"arv_number");u.isEmpty(n)||n.forEach((t=>{const e="function"==typeof i?i(t):[];this.rows.push([c.td(t.arv_number),c.td(t.patient_id),c.td(t.given_name),c.td(t.family_name),c.td(this.formatGender(t.gender)),c.tdDate(t.birthdate),...e,this.masterCardBtn(t.patient_id)])}))},getIndicatorOptions(){return[{label:"DOB > Date enrolled",value:s.DobMoreThanEnrolledDate,other:{skipDateSelection:!1,columns:this.getDefaultIndicatorColumns(),setRows:(t,e)=>this.setDefaultIndicatorRows(s.DobMoreThanEnrolledDate,e.start_date,e.end_date)}},{label:"Date enrolled < Earliest start date",value:s.DateEnrolledLessThanEarliestStartDate,other:{skipDateSelection:!1,columns:this.getDefaultIndicatorColumns([c.thTxt("Earliest start date"),c.thTxt("Date enrolled")]),setRows:(t,e)=>this.setDefaultIndicatorRows(s.DateEnrolledLessThanEarliestStartDate,e.start_date,e.end_date,(t=>[c.tdDate(t.earliest_start_date),c.tdDate(t.date_enrolled)]))}},{label:"Encounters after Death",value:s.ClientsWithEncountersAfterDeath,other:{skipDateSelection:!1,columns:this.getDefaultIndicatorColumns(),setRows:(t,e)=>this.setDefaultIndicatorRows(s.ClientsWithEncountersAfterDeath,e.start_date,e.end_date)}},{label:"Incomplete visits",value:"Incomplete visits",other:{skipDateSelection:!1,columns:[[c.thTxt("ARV#"),c.thTxt("NHID"),c.thTxt("First name"),c.thTxt("Last name"),c.thTxt("Gender"),c.thTxt("Birthdate"),c.thTxt("Date(s)"),c.thTxt("Action")]],setRows:async(t,e)=>{this.report=new a,this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.period=this.report.getDateIntervalPeriod();const s=await this.report.getIncompleteVisits();for(const a in s){const t=s[a];this.rows.push([c.td(t.arv_number),c.td(t.national_id),c.td(t.given_name),c.td(t.family_name),c.td(this.formatGender(t.gender)),c.tdDate(t.birthdate),c.td(t.dates.map((t=>this.toDate(t))).join("<br/>")),this.masterCardBtn(parseInt(a.toString()))])}}}},{label:"Enrolled on ART before birth",value:"Enrolled on ART before birth",other:{skipDateSelection:!0,columns:[[c.thTxt("ARV number"),c.thTxt("Name"),c.thTxt("Earliest start date"),c.thTxt("Date enrolled"),c.thTxt("Gender"),c.thTxt("Birth Date"),c.thTxt("Action")]],setRows:async()=>{try{this.report=new a,(await this.report.getEnrolledOnArtBeforeBirth()).forEach((t=>{this.rows.push([c.td(t.identifier),c.td(t.name),c.tdDate(t.earliest_start_date),c.tdDate(t.date_enrolled),c.td(this.formatGender(t.gender)),c.tdDate(t.birthdate),this.masterCardBtn(t.patient_id)])}))}catch(t){if(!(t instanceof m))throw t}}}},{label:"Missing VL Results",value:"Missing VL Results",other:{columns:[[c.thTxt("ARV number"),c.thTxt("First name"),c.thTxt("Last name"),c.thTxt("Gender"),c.thTxt("Accession number"),c.thTxt("Order date"),c.thTxt("Action")]],setRows:async(t,e)=>{try{this.report=new a,this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.period=this.report.getDateIntervalPeriod(),(await this.report.getCleaningToolReport(s.MissingVlResults)).forEach((t=>{this.rows.push([c.td(t.arv_number),c.td(t.given_name),c.td(t.family_name),c.td(this.formatGender(t.gender)),c.td(t.accession_number),c.tdDate(t.order_date),this.masterCardBtn(t.patient_id)])}))}catch(i){if(!(i instanceof m))throw i}}}},{label:"Male patients with female observations",value:s.MalesWithFemaleObs,other:{skipDateSelection:!1,columns:this.getDefaultIndicatorColumns([c.thTxt("Visit date")]),setRows:(t,e)=>this.setDefaultIndicatorRows(s.MalesWithFemaleObs,e.start_date,e.end_date,(t=>[(()=>{const e=`${t.visit_date}`.split(",");return e.length<=1?c.tdDate(t.visit_date):c.tdLink(`${e.length} visits dates`,(async()=>{(await p.create({component:b,backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:`${e.length} visit dates`,columns:[[{label:"ARV",ref:"arv_number"},{label:"Given name",ref:"given_name"},{label:"Family name",ref:"family_name"},{label:"Visit date",ref:"visit_date"}]],columnData:e.map((e=>({...t,visit_date:D(e)}))),onFinish:()=>p.dismiss()}})).present()}))})()]))}},{label:"Missing important demographics elements",value:s.MissingDemographics,other:{skipDateSelection:!1,columns:this.getDefaultIndicatorColumns(),setRows:(t,e)=>this.setDefaultIndicatorRows(s.MissingDemographics,e.start_date,e.end_date)}},{label:"Missing start reason",value:s.MissingStartReasons,other:{skipDateSelection:!1,columns:this.getDefaultIndicatorColumns(),setRows:(t,e)=>this.setDefaultIndicatorRows(s.MissingStartReasons,e.start_date,e.end_date)}},{label:"Missing ART start date",value:s.MissingArtStartDate,other:{skipDateSelection:!1,columns:this.getDefaultIndicatorColumns(),setRows:(t,e)=>this.setDefaultIndicatorRows(s.MissingArtStartDate,e.start_date,e.end_date)}},{label:"Multiple start reasons",value:s.MultipleStartReasons,other:{skipDateSelection:!1,columns:this.getDefaultIndicatorColumns([c.thTxt("Reasons"),c.thTxt("Visits")]),setRows:(t,e)=>this.setDefaultIndicatorRows(s.MultipleStartReasons,e.start_date,e.end_date,(t=>[c.td(`${t.reasons}`.split(",").join("<p/>")),c.td(t.visits.split(",").map((t=>D(t))).join("<p/>"))]))}},{label:"Patients with Pre-ART / Unknown outcome",value:s.PreArtOrUnknownOutcomes,other:{skipDateSelection:!1,columns:this.getDefaultIndicatorColumns(),setRows:(t,e)=>this.setDefaultIndicatorRows(s.PreArtOrUnknownOutcomes,e.start_date,e.end_date)}},{label:"Prescriptions without dispensations",value:s.PrescriptionWithoutDispensation,other:{skipDateSelection:!1,columns:this.getDefaultIndicatorColumns([c.thTxt("Visit Date")]),setRows:(t,e)=>this.setDefaultIndicatorRows(s.PrescriptionWithoutDispensation,e.start_date,e.end_date,(t=>[c.tdDate(t.visit_date)]))}},{label:"Different pregnancy value on same date",value:s.DifferentPregnancyValueOnSameDate,other:{skipDateSelection:!1,columns:this.getDefaultIndicatorColumns([c.thTxt("Visit Date")]),setRows:(t,e)=>this.setDefaultIndicatorRows(s.DifferentPregnancyValueOnSameDate,e.start_date,e.end_date,(t=>[c.tdDate(t.visit_date)]))}}]}}});t("default",f(e,[["render",function(t,e,a,s,i,n){const r=T("report-template"),o=T("ion-page");return R(),_(o,null,{default:w((()=>[x(r,{title:t.title,period:t.period,rows:t.rows,fields:t.fields,columns:t.columns,showFilters:!0,onReportConfiguration:t.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])])),_:1})}]]))}}}));