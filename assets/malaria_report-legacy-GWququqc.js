System.register(["./MOHReportHeader-legacy-CViAwvwO.js","./aetc_report_service-legacy-hzl5WC3I.js","./index-legacy-CNrLGT3P.js","./HisStandardForm-legacy-OekRIZB_.js","./opd_report_service-legacy-yqGpEi26.js"],(function(a,t){"use strict";var l,e,n,i,s,r,o,d,m,c,D,_,g,u,p,f,y,h,w,C,x,b,A,k,P,T,S,v,L,R,M,O,Q,I,F;return{setters:[a=>{l=a.a,e=a.I},a=>{n=a.A},a=>{i=a.d,s=a.H,r=a.ah,o=a.L,d=a.O,m=a.bS,c=a.F,D=a.V,_=a.aW,g=a.S,u=a.ai,p=a.P,f=a.cm,y=a.bI,h=a.I,w=a.l,C=a._,x=a.r,b=a.o,A=a.x,k=a.b,P=a.c,T=a.z,S=a.w,v=a.B,L=a.A,R=a.v,M=a.u,O=a.a8,Q=a.a9},a=>{I=a.H},a=>{F=a.O}],execute:function(){var t=document.createElement("style");t.textContent="table[data-v-25413a36]{width:100%;border-collapse:collapse}tr[data-v-25413a36]{height:45px}td[data-v-25413a36]{border:.1px solid grey;text-align:center}.td-text-align-left[data-v-25413a36]{text-align:left;padding-left:10px}\n",document.head.appendChild(t);const N=i({data:()=>({fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",drillDownCache:{}}),methods:{toDate:a=>s.toStandardHisDisplayFormat(a),confirmPatient(a){return this.$router.push(`/patients/confirm?person_id=${a}`)},async exportToCustomPDF(a){const t=open("","","width:1024px, height:768px"),l=document.getElementById("report-content");l&&t&&(t.document.write(`\n                    <html>\n                    <head>\n                        <title>${a}</title>\n                        <link rel="stylesheet" media="print" href="/assets/css/cohort.css" />\n                    </head>\n                    <body>\n                        ${l.innerHTML}\n                    </body>\n                    </html>\n                `),setTimeout((()=>{t.print(),t.close()}),3500))},async onDrillDown(a,t){if(r.isEmpty(t))return;const l=[[o.thTxt("First name"),o.thTxt("Last name"),o.thTxt("Gender"),o.thTxt("Age"),o.thTxt("Phone"),o.thTxt("Address"),o.thTxt("Action")]];return this.drilldownData(a,l,t,(async a=>await Promise.all(a.map((async a=>{const t=await p.findByID(a),l=new p(t);return[o.td(l.getGivenName()),o.td(l.getFamilyName()),o.td(l.getGender()),o.td(l.getAge()),o.td(l.getPhoneNumber()),o.td(`${l.getCurrentDistrict()}, ${l.getCurrentVillage()}, ${l.getClosestLandmark()}`),o.tdBtn("Select",(async()=>{await d.dismiss({}),this.$router.push({path:`/patient/dashboard/${a}`})}))]})))))},async drilldownAsyncRows(a,t,l){(await d.create({component:m,cssClass:"large-modal",componentProps:{title:a,columns:t,asyncRows:l,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>d.dismiss()}})).present()},async drilldownData(a,t,l,e){(await d.create({component:m,cssClass:"large-modal",componentProps:{title:a,columns:t,rows:l,rowParser:e,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>d.dismiss()}})).present()},getDefaultDrillDownTable(){return{rowParser:a=>a.map((async a=>{const[t,l]=a;if(l in this.drillDownCache)return[t];const e=await p.findByID(l),n=new p(e),i=[t,o.td(n.getArvNumber()),o.td(n.getGender()),o.tdDate(n.getBirthdate().toString()),o.tdBtn("Show",(async()=>{await d.dismiss({}),this.$router.push({path:`/patient/dashboard/${l}`})}))];return this.drillDownCache[l]=i,i})),columns:[[o.thTxt("ARV number"),o.thTxt("Gender"),o.thTxt("Birth Date"),o.thTxt("Actions")]]}},runTableDrill(a,t="Drilldown patients"){const{columns:l,rowParser:e}=this.getDefaultDrillDownTable();this.drilldownData(t,l,a,e)},drill(a,t="Drill table"){return a&&a.length>0?o.tdLink(a.length,(()=>this.runTableDrill(a,t))):o.td(0)},getEpiweeksFields:()=>[{id:"epiweek",helpText:"Select EPI week",type:c.TT_SELECT,validation:a=>D.required(a),options:async()=>(await l.getReportEpiWeeks()).map((a=>({label:a.name+" - ("+_(a.start).format("DD/MMM/YYYY")+" - "+_(a.end).format("DD/MMM/YYYY")+")",value:a.start,other:a})))}],getMonthlyFields:()=>[{id:"idsrmonth",helpText:"Select Month",type:c.TT_SELECT,validation:a=>D.required(a),options:async()=>(await l.getReportMonths()).map((a=>({label:a.name+" - ("+_(a.start).format("DD/MMM/YYYY")+" - "+_(a.end).format("DD/MMM/YYYY")+")",value:a.start,other:a})))}],getDateDurationFields(a=!1,t=!1,l=5){const e=g.getSessionDate();return[{id:"quarter",helpText:"Select Quarter",type:c.TT_SELECT,condition:()=>a,validation:a=>D.required(a),options:()=>{let a=F.getReportQuarters(l).map((a=>({label:a.name,value:a.start,other:a})));return t&&(a=[{label:"Set custom period",value:"custom_period",other:{}},...a]),a}},...u({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!a,minDate:()=>"2001-01-01",maxDate:()=>e,estimation:{allowUnknown:!1},computeValue:a=>a}),...u({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!a,unload:(a,t,l,e)=>{"next"===t&&(this.endDate=e.end_date)},minDate:(a,t)=>t.start_date,maxDate:()=>e,estimation:{allowUnknown:!1},computeValue:a=>a})]}}}),Y=i({mixins:[N],components:{IonLoading:f,HisStandardForm:I,HisFooter:y,IonPage:h,IonContent:w,IdsrH:e},data:function(){return{show:!0,conditions:[],formData:{},lessThanFiveYears:" < 5 yrs",greaterAndEqualFiveYears:" >= 5 yrs",total:" Total",btns:[],fields:[],reportReady:!1,reportService:{},malariaData:"",confirmMalaria:"",componentKey:0,computedFormData:{},idsr:{},isLoading:!1,reportID:-1,periodLabel:"Month Dates",periodDates:"",reportName:"MALARIA HEALTH FACILITY MONTHLY REPORT",rangeLabel:"Month",range:"",TotalOPDVisits:0,clinicName:l.getLocationName()}},props:["params","epiweek","quarter"],created(){this.btns=this.getBtns(),this.fields=this.getMonthlyFields()},methods:{renderResults(){const a=(new l).renderResults(this.params);a.length&&(this.conditions=a,this.show=!1)},onDownload(){const a=new l;let{CSVString:t}=a.getCSVString(this.conditions);t+=`\n           Date Created: ${_().format("DD/MMM/YYYY HH:MM:ss")}\n           His-Core Version: ${g.getCoreVersion()}\n           API Version: ${g.getApiVersion()}\n           Report Period: ${this.epiweek}\n           Site: ${g.getLocationName()}\n           Site UUID: ${g.getSiteUUID()}`;const e=new Blob([t],{type:"text/csv;charset=utf-8;"}),n=`${g.getLocationName()} Weekly IDSR report ${this.quarter}`;if(navigator.msSaveBlob)navigator.msSaveBlob(e,"exportFilename");else{const a=document.createElement("a");a.href=window.URL.createObjectURL(e),a.setAttribute("download",`${n}.csv`),document.body.appendChild(a),a.click(),document.body.removeChild(a)}},async onPeriod(a){try{this.reportReady=!0,this.isLoading=!1,this.reportService=new n,this.reportService.startDate=a.idsrmonth.other.start.trim(),this.reportService.endDate=a.idsrmonth.other.end,this.period=this.reportService.getDateIntervalPeriod(),this.malariaData=await this.reportService.getMalariaReport(),this.periodDates=this.reportService.getReportPeriod(),this.range=a.idsrmonth.label.split(" ")[0],this.malariaData.total_OPD_attendance.total_patient_less_5yrs&&(this.TotalOPDVisits=this.malariaData.total_OPD_attendance.total_patient_less_5yrs.length),this.malariaData.total_OPD_attendance.total_patient_more_5yrs&&(this.TotalOPDVisits=this.malariaData.total_OPD_attendance.total_patient_more_5yrs.length+this.TotalOPDVisits)}catch(t){console.log(t)}finally{this.isLoading=!1}},getBtns(){return[{name:"CSV",size:"large",slot:"start",color:"primary",visible:!0,onClick:async()=>{this.$refs.rep.onDownload()}},{name:"PDF",size:"large",slot:"start",color:"primary",visible:!0,onClick:()=>this.exportToCustomPDF("Print Malaria Monthly Report")},{name:"Back",size:"large",slot:"end",color:"warning",visible:!0,onClick:()=>this.reportReady=!1},{name:"Refresh",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>await this.onPeriod(this.formData)},{name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>this.$router.push({path:"/"})}]}}}),$=a=>(O("data-v-25413a36"),a=a(),Q(),a),B={key:0,id:"report-content"},V={class:"my-table",style:{margin:"auto",width:"95%","margin-top":"3%","margin-bottom":"3%"}},E=$((()=>L("tr",null,[L("td",{rowspan:"2",class:"td-span-width"},[L("b",null,"Out Patient Department")]),L("td",{colspan:"2",class:"td-span-width"},[L("b",null,"Out Patient Number>")])],-1))),H=$((()=>L("tr",null,[L("td",{class:"td-span-width"},[L("b",null,"< 5 yrs")]),L("td",{class:"td-span-width"},[L("b",null," > 5 yrs")])],-1))),U=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"A:"),M(" Confirmed (Co) Malaria Cases")],-1))),X=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"B:"),M(" Presumed (Pr) Malaria Cases (Clinically Diagnosed)")],-1))),q=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"C:"),M(" Confirmed malaria in pregnant woman (c)")],-1))),j=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"D:"),M(" Presumed (clinically diagnosed) malaria in pregnant woman (d)")],-1))),z=$((()=>L("td",{class:""},[M(" Total OPD Malaria Cases "),L("b",null,"(A+B+C+D)")],-1))),G=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"F:"),M(" Total OPD Attendance: All causes (Including malaria cases)")],-1))),W={key:0},K={key:0},Z=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"G:"),M(" Confirmed malaria treatment failure (tf)")],-1))),J=$((()=>L("tr",null,[L("td",{colspan:"3",class:""},[L("b",null,"Treatment in OPD")])],-1))),aa=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"H:"),M(" Confirmed cases receiving first-line anti malarial medication (LA)")],-1))),ta=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"I:"),M(" Presumed malaria cases receiving first-line anti malarial medication(LA)")],-1))),la=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"J:"),M(" Confirmed cases receiving second-line anti malarial medication (ASAQ)")],-1))),ea=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"K:"),M(" Presumed malaria cases receiving second-line anti malarial medication(ASAQ)")],-1))),na=$((()=>L("tr",null,[L("td",{colspan:"3",class:""},[L("b",null,"Lab/mRDT in OPD")])],-1))),ia=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"L:"),M(" Suspected malaria cases tested (mRDT)")],-1))),sa=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"M:"),M(" Positive malaria cases (mRDT)")],-1))),ra=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"N:"),M(" Suspected malaria cases tested (microscopy)")],-1))),oa=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"O:"),M(" Positive malaria cases (microscopy)")],-1))),da=$((()=>L("td",{class:""},[M(" Total suspected malaria cases "),L("b",null,"(B+D+L+N)")],-1))),ma=$((()=>L("tr",null,[L("td",{rowspan:"2",class:"td-span-width"},[L("b",null,"In Patient Department")]),L("td",{colspan:"2",class:"td-span-width"},[L("b",null,"In Patient Numbers")])],-1))),ca=$((()=>L("tr",null,[L("td",{class:"td-span-width"},[L("b",null," < 5 yrs")]),L("td",{class:"td-span-width"},[L("b",null," > 5 yrs")])],-1))),Da=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"Q:"),M(" Total suspected malaria cases tested (microscopy)")],-1))),_a=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"R:"),M(" Confirmed malaria cases (microscopy)")],-1))),ga=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"S:"),M(" Presumed malaria cases (clinically diagnosed without test)")],-1))),ua=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"T:"),M(" Confirmed malaria in pregnant woman (c)")],-1))),pa=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"U:"),M(" Presumed (clinically diagnosed) malaria in pregnant woman (d)")],-1))),fa=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"V:"),M(" Total suspected malaria cases (Q+S+U)")],-1))),ya=$((()=>L("b",null,"W:",-1))),ha=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"X:"),M(" Confirmed malaria treatment failure (tf)")],-1))),wa=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"Y:"),M(" Total inpatient malaria deaths")],-1))),Ca=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"Z:"),M(" Total Inpatient: all causes")],-1))),xa=$((()=>L("td",{class:"td-text-align-left"},[L("b",null,"ZA:"),M(" Total Inpatient Deaths: all causes")],-1))),ba=$((()=>L("tr",null,[L("td",{colspan:"3",class:""},[L("b",null,"Commodities Used")])],-1))),Aa=$((()=>L("tr",null,[L("td",{class:""},[L("b",null,"Item")]),L("td",{class:""},[L("b",null,"Unit of Issue")]),L("td",{class:""},[L("b",null,"Quantity Dispensed/Used")])],-1))),ka=$((()=>L("td",{class:"td-text-align-left"},"LA 1X6",-1))),Pa=$((()=>L("td",{class:""},"tab",-1))),Ta=$((()=>L("td",{class:"td-text-align-left"},"LA 2X6",-1))),Sa=$((()=>L("td",{class:""},"tab",-1))),va=$((()=>L("td",{class:"td-text-align-left"},"LA 3X6",-1))),La=$((()=>L("td",{class:""},"tab",-1))),Ra=$((()=>L("td",{class:"td-text-align-left"},"LA 4X6",-1))),Ma=$((()=>L("td",{class:""},"tab",-1))),Oa=$((()=>L("td",{class:"td-text-align-left"},"ITN Distributed to Pregnant women",-1))),Qa=$((()=>L("td",{class:""},"net",-1))),Ia=$((()=>L("td",{class:"td-text-align-left"},"ITN Distributed to Newborn babies",-1))),Fa=$((()=>L("td",{class:""},"net",-1))),Na=$((()=>L("td",{class:"td-text-align-left"},"SP",-1))),Ya=$((()=>L("td",{class:""},"tab",-1))),$a=$((()=>L("td",{class:"td-text-align-left"},"RDTs",-1))),Ba=$((()=>L("td",{class:""},"test",-1))),Va=$((()=>L("td",{class:"td-text-align-left"},"ASAQ 25mg/67.5mg (3 tablets)",-1))),Ea=$((()=>L("td",{class:""},"tab",-1))),Ha=$((()=>L("td",{class:"td-text-align-left"},"ASAQ 50mg/135mg (3 tablets)",-1))),Ua=$((()=>L("td",{class:""},"tab",-1))),Xa=$((()=>L("td",{class:"td-text-align-left"},"ASAQ 100mg/270mg (3 tablets)",-1))),qa=$((()=>L("td",{class:""},"tab",-1))),ja=$((()=>L("td",{class:"td-text-align-left"},"ASAQ 100mg/270mg (6 tablets)",-1))),za=$((()=>L("td",{class:""},"tab",-1)));a("default",C(Y,[["render",function(a,t,l,e,n,i){const s=x("ion-loading"),r=x("his-standard-form"),o=x("idsr-h"),d=x("ion-content"),m=x("his-footer"),c=x("ion-page");return b(),A(v,null,[k(s,{"is-open":a.isLoading,message:"Please wait..."},null,8,["is-open"]),a.reportReady?T("",!0):(b(),P(r,{key:0,onOnFinish:a.onPeriod,skipSummary:!0,fields:a.fields},null,8,["onOnFinish","fields"])),a.reportReady?(b(),P(c,{key:1},{default:S((()=>[k(d,null,{default:S((()=>[a.malariaData?(b(),A("div",B,[(b(),P(o,{key:a.componentKey,reportName:a.reportName,rangeLabel:a.rangeLabel,range:a.range,ref:"header",periodLabel:a.periodLabel,periodDates:a.periodDates,clinicName:a.clinicName,totalOPDVisits:a.TotalOPDVisits},null,8,["reportName","rangeLabel","range","periodLabel","periodDates","clinicName","totalOPDVisits"])),L("table",V,[E,H,L("tr",null,[U,L("td",{class:"td-text-align-left",onClick:t[0]||(t[0]=t=>a.onDrillDown("Confirmed (Co) Malaria Cases < 5yrs",a.malariaData.confrim_non_pregnant_less_5yrs))},[L("a",null,R(a.malariaData.confrim_non_pregnant_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[1]||(t[1]=t=>a.onDrillDown("Confirmed (Co) Malaria Cases > 5yrs",a.malariaData.confrim_non_pregnant_more_5yrs))},[L("a",null,R(a.malariaData.confrim_non_pregnant_more_5yrs.length),1)])]),L("tr",null,[X,L("td",{class:"td-text-align-left",onClick:t[2]||(t[2]=t=>a.onDrillDown("Presumed (Pr) Malaria Cases (Clinically Diagnosed) < 5yrs",a.malariaData.presume_non_pregnant_less_5yrs))},[L("a",null,R(a.malariaData.presume_non_pregnant_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[3]||(t[3]=t=>a.onDrillDown("Presumed (Pr) Malaria Cases (Clinically Diagnosed) > 5yrs",a.malariaData.presume_non_pregnant_more_5yrs))},[L("a",null,R(a.malariaData.presume_non_pregnant_more_5yrs.length),1)])]),L("tr",null,[q,L("td",{class:"td-text-align-left",onClick:t[4]||(t[4]=t=>a.onDrillDown("Confirmed malaria in pregnant woman (c) < 5yrs",a.malariaData.confirm_pregnant_less_5yrs))},[L("a",null,R(a.malariaData.confirm_pregnant_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[5]||(t[5]=t=>a.onDrillDown("Confirmed malaria in pregnant woman (c) > 5yrs",a.malariaData.confirm_pregnant_more_5yrs))},[L("a",null,R(a.malariaData.confirm_pregnant_more_5yrs.length),1)])]),L("tr",null,[j,L("td",{class:"td-text-align-left",onClick:t[6]||(t[6]=t=>a.onDrillDown("Presumed (clinically diagnosed) malaria in pregnant woman (d) < 5yrs",a.malariaData.presume_pregnant_less_5yrs))},[L("a",null,R(a.malariaData.presume_pregnant_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[7]||(t[7]=t=>a.onDrillDown("Presumed (clinically diagnosed) malaria in pregnant woman (d) > 5yrs",a.malariaData.presume_pregnant_more_5yrs))},[L("a",null,R(a.malariaData.presume_pregnant_more_5yrs.length),1)])]),L("tr",null,[z,L("td",{class:"td-text-align-left",onClick:t[8]||(t[8]=t=>a.onDrillDown("Total OPD Malaria Cases (A+B+C+D) < 5yrs",a.malariaData.total_OPD_malaria_cases_less_5yrs))},[L("a",null,R(a.malariaData.total_OPD_malaria_cases_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[9]||(t[9]=t=>a.onDrillDown("Total OPD Malaria Cases (A+B+C+D) > 5yrs",a.malariaData.total_OPD_malaria_cases_more_5yrs))},[L("a",null,R(a.malariaData.total_OPD_malaria_cases_more_5yrs.length),1)])]),L("tr",null,[G,L("td",{class:"td-text-align-left",onClick:t[10]||(t[10]=t=>a.onDrillDown("Total OPD Attendance: All causes (Including malaria cases) < 5yrs",a.malariaData.total_OPD_attendance.total_patient_less_5yrs))},[a.malariaData.total_OPD_attendance.total_patient_less_5yrs?(b(),A("span",W,[L("a",null,R(a.malariaData.total_OPD_attendance.total_patient_less_5yrs.length),1)])):T("",!0)]),L("td",{class:"td-text-align-left",onClick:t[11]||(t[11]=t=>a.onDrillDown("Total OPD Attendance: All causes (Including malaria cases) > 5yrs",a.malariaData.total_OPD_attendance.total_patient_more_5yrs))},[a.malariaData.total_OPD_attendance.total_patient_more_5yrs?(b(),A("span",K,[L("a",null,R(a.malariaData.total_OPD_attendance.total_patient_more_5yrs.length),1)])):T("",!0)])]),L("tr",null,[Z,L("td",{class:"td-text-align-left",onClick:t[12]||(t[12]=t=>a.onDrillDown("Confirmed malaria treatment failure (tf) < 5yrs",a.malariaData.confirmed_malaria_treatment_failure_less_5yrs))},[L("a",null,R(a.malariaData.confirmed_malaria_treatment_failure_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[13]||(t[13]=t=>a.onDrillDown("Confirmed malaria treatment failure (tf) > 5yrs",a.malariaData.confirmed_malaria_treatment_failure_more_5yrs))},[L("a",null,R(a.malariaData.confirmed_malaria_treatment_failure_more_5yrs.length),1)])]),J,L("tr",null,[aa,L("td",{class:"td-text-align-left",onClick:t[14]||(t[14]=t=>a.onDrillDown("Confirmed cases receiving first-line anti malarial medication (LA) < 5yrs",a.malariaData.confirmed_malaria_LA_less_5yrs))},[L("a",null,R(a.malariaData.confirmed_malaria_LA_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[15]||(t[15]=t=>a.onDrillDown("Confirmed cases receiving first-line anti malarial medication (LA) > 5yrs",a.malariaData.confirmed_malaria_LA_more_5yrs))},[L("a",null,R(a.malariaData.confirmed_malaria_LA_more_5yrs.length),1)])]),L("tr",null,[ta,L("td",{class:"td-text-align-left",onClick:t[16]||(t[16]=t=>a.onDrillDown("Presumed malaria cases receiving first-line anti malarial medication(LA) < 5yrs",a.malariaData.presumed_malaria_LA_less_5yrs))},[L("a",null,R(a.malariaData.presumed_malaria_LA_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[17]||(t[17]=t=>a.onDrillDown("Presumed malaria cases receiving first-line anti malarial medication(LA) > 5yrs",a.malariaData.presumed_malaria_LA_more_5yrs))},[L("a",null,R(a.malariaData.presumed_malaria_LA_more_5yrs.length),1)])]),L("tr",null,[la,L("td",{class:"td-text-align-left",onClick:t[18]||(t[18]=t=>a.onDrillDown("Confirmed cases receiving second-line anti malarial medication (ASAQ) < 5yrs",a.malariaData.confirmed_malaria_ASAQ_less_5yrs))},[L("a",null,R(a.malariaData.confirmed_malaria_ASAQ_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[19]||(t[19]=t=>a.onDrillDown("Confirmed cases receiving second-line anti malarial medication (ASAQ) > 5yrs",a.malariaData.confirmed_malaria_ASAQ_more_5yrs))},[L("a",null,R(a.malariaData.confirmed_malaria_ASAQ_more_5yrs.length),1)])]),L("tr",null,[ea,L("td",{class:"td-text-align-left",onClick:t[20]||(t[20]=t=>a.onDrillDown("Presumed malaria cases receiving second-line anti malarial medication(ASAQ) < 5yrs",a.malariaData.presumed_malaria_ASAQ_less_5yrs))},[L("a",null,R(a.malariaData.presumed_malaria_ASAQ_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[21]||(t[21]=t=>a.onDrillDown("Presumed malaria cases receiving second-line anti malarial medication(ASAQ) > 5yrs",a.malariaData.presumed_malaria_ASAQ_more_5yrs))},[L("a",null,R(a.malariaData.presumed_malaria_ASAQ_more_5yrs.length),1)])]),na,L("tr",null,[ia,L("td",{class:"td-text-align-left",onClick:t[22]||(t[22]=t=>a.onDrillDown("Suspected malaria cases tested (mRDT) < 5yrs",a.malariaData.suspected_malaria_mRDT_less_5yrs))},[L("a",null,R(a.malariaData.suspected_malaria_mRDT_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[23]||(t[23]=t=>a.onDrillDown("Suspected malaria cases tested (mRDT) > 5yrs",a.malariaData.suspected_malaria_mRDT_more_5yrs))},[L("a",null,R(a.malariaData.suspected_malaria_mRDT_more_5yrs.length),1)])]),L("tr",null,[sa,L("td",{class:"td-text-align-left",onClick:t[24]||(t[24]=t=>a.onDrillDown("Positive malaria cases (mRDT) < 5yrs",a.malariaData.positive_malaria_mRDT_less_5yrs))},[L("a",null,R(a.malariaData.positive_malaria_mRDT_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[25]||(t[25]=t=>a.onDrillDown("Positive malaria cases (mRDT) > 5yrs",a.malariaData.positive_malaria_mRDT_more_5yrs))},[L("a",null,R(a.malariaData.positive_malaria_mRDT_more_5yrs.length),1)])]),L("tr",null,[ra,L("td",{class:"td-text-align-left",onClick:t[26]||(t[26]=t=>a.onDrillDown("Suspected malaria cases tested (microscopy) < 5yrs",a.malariaData.suspected_malaria_microscopy_less_5yrs))},[L("a",null,R(a.malariaData.suspected_malaria_microscopy_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[27]||(t[27]=t=>a.onDrillDown("Suspected malaria cases tested (microscopy) > 5yrs",a.malariaData.suspected_malaria_microscopy_more_5yrs))},[L("a",null,R(a.malariaData.suspected_malaria_microscopy_more_5yrs.length),1)])]),L("tr",null,[oa,L("td",{class:"td-text-align-left",onClick:t[28]||(t[28]=t=>a.onDrillDown("Positive malaria cases (microscopy) < 5yrs",a.malariaData.positive_malaria_microscopy_less_5yrs))},[L("a",null,R(a.malariaData.positive_malaria_microscopy_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[29]||(t[29]=t=>a.onDrillDown("Positive malaria cases (microscopy) > 5yrs",a.malariaData.positive_malaria_microscopy_more_5yrs))},[L("a",null,R(a.malariaData.positive_malaria_microscopy_more_5yrs.length),1)])]),L("tr",null,[da,L("td",{class:"td-text-align-left",onClick:t[30]||(t[30]=t=>a.onDrillDown("Total suspected malaria cases (B+D+L+N) < 5yrs",a.malariaData.total_suspected_malaria_cases_less_5yrs))},[L("a",null,R(a.malariaData.total_suspected_malaria_cases_less_5yrs.length),1)]),L("td",{class:"td-text-align-left",onClick:t[31]||(t[31]=t=>a.onDrillDown("Total suspected malaria cases (B+D+L+N) > 5yrs",a.malariaData.total_suspected_malaria_cases_more_5yrs))},[L("a",null,R(a.malariaData.total_suspected_malaria_cases_more_5yrs.length),1)])]),ma,ca,L("tr",null,[Da,L("td",{class:"td-text-align-left",onClick:t[32]||(t[32]=t=>a.onDrillDown("Total suspected malaria cases tested (microscopy) < 5yrs",a.malariaData))}),L("td",{class:"td-text-align-left",onClick:t[33]||(t[33]=t=>a.onDrillDown("Total suspected malaria cases tested (microscopy) > 5yrs",a.malariaData))})]),L("tr",null,[_a,L("td",{class:"td-text-align-left",onClick:t[34]||(t[34]=t=>a.onDrillDown("Confirmed malaria cases (microscopy) < 5yrs",a.malariaData))}),L("td",{class:"td-text-align-left",onClick:t[35]||(t[35]=t=>a.onDrillDown("Confirmed malaria cases (microscopy) > 5yrs",a.malariaData))})]),L("tr",null,[ga,L("td",{class:"td-text-align-left",onClick:t[36]||(t[36]=t=>a.onDrillDown("Presumed malaria cases (clinically diagnosed without test) < 5yrs",a.malariaData))}),L("td",{class:"td-text-align-left",onClick:t[37]||(t[37]=t=>a.onDrillDown("Presumed malaria cases (clinically diagnosed without test) > 5yrs",a.malariaData))})]),L("tr",null,[ua,L("td",{class:"td-text-align-left",onClick:t[38]||(t[38]=t=>a.onDrillDown("Confirmed malaria in pregnant woman (c) < 5yrs",a.malariaData))}),L("td",{class:"td-text-align-left",onClick:t[39]||(t[39]=t=>a.onDrillDown("Confirmed malaria in pregnant woman (c) > 5yrs",a.malariaData))})]),L("tr",null,[pa,L("td",{class:"td-text-align-left",onClick:t[40]||(t[40]=t=>a.onDrillDown("Presumed (clinically diagnosed) malaria in pregnant woman (d) < 5yrs",a.malariaData))}),L("td",{class:"td-text-align-left",onClick:t[41]||(t[41]=t=>a.onDrillDown("Presumed (clinically diagnosed) malaria in pregnant woman (d) > 5yrs",a.malariaData))})]),L("tr",null,[fa,L("td",{class:"td-text-align-left",onClick:t[42]||(t[42]=t=>a.onDrillDown("Total suspected malaria cases (Q+S+U)",a.malariaData))}),L("td",{class:"td-text-align-left",onClick:t[43]||(t[43]=t=>a.onDrillDown("Total suspected malaria cases (Q+S+U)",a.malariaData))})]),L("tr",null,[L("td",{class:"td-text-align-left",onClick:t[44]||(t[44]=t=>a.onDrillDown("Confirmed",a.malariaData))},[ya,M(" Total malaria cases (R+S+T+U) ")]),L("td",{class:"td-text-align-left",onClick:t[45]||(t[45]=t=>a.onDrillDown("Confirmed",a.malariaData))}),L("td",{class:"td-text-align-left",onClick:t[46]||(t[46]=t=>a.onDrillDown("Confirmed",a.malariaData))})]),L("tr",null,[ha,L("td",{class:"td-text-align-left",onClick:t[47]||(t[47]=t=>a.onDrillDown("Confirmed",a.malariaData))}),L("td",{class:"td-text-align-left",onClick:t[48]||(t[48]=t=>a.onDrillDown("Confirmed",a.malariaData))})]),L("tr",null,[wa,L("td",{class:"td-text-align-left",onClick:t[49]||(t[49]=t=>a.onDrillDown("Confirmed",a.malariaData))}),L("td",{class:"td-text-align-left",onClick:t[50]||(t[50]=t=>a.onDrillDown("Confirmed",a.malariaData))})]),L("tr",null,[Ca,L("td",{class:"td-text-align-left",onClick:t[51]||(t[51]=t=>a.onDrillDown("Confirmed",a.malariaData))}),L("td",{class:"td-text-align-left",onClick:t[52]||(t[52]=t=>a.onDrillDown("Confirmed",a.malariaData))})]),L("tr",null,[xa,L("td",{class:"td-text-align-left",onClick:t[53]||(t[53]=t=>a.onDrillDown("Confirmed",a.malariaData))}),L("td",{class:"td-text-align-left",onClick:t[54]||(t[54]=t=>a.onDrillDown("Confirmed",a.malariaData))})]),ba,Aa,L("tr",null,[ka,Pa,L("td",{class:"td-text-align-left",onClick:t[55]||(t[55]=t=>a.onDrillDown("LA 1X6",a.malariaData.LA_1X6))},[L("a",null,R(1*a.malariaData.LA_1X6.length*6),1)])]),L("tr",null,[Ta,Sa,L("td",{class:"td-text-align-left",onClick:t[56]||(t[56]=t=>a.onDrillDown("LA 2X6",a.malariaData.LA_2X6))},[L("a",null,R(2*a.malariaData.LA_2X6.length*6),1)])]),L("tr",null,[va,La,L("td",{class:"td-text-align-left",onClick:t[57]||(t[57]=t=>a.onDrillDown("LA 3X6",a.malariaData.LA_3X6))},[L("a",null,R(3*a.malariaData.LA_3X6.length*6),1)])]),L("tr",null,[Ra,Ma,L("td",{class:"td-text-align-left",onClick:t[58]||(t[58]=t=>a.onDrillDown("LA 4X6",a.malariaData.LA_4X6))},[L("a",null,R(6*a.malariaData.LA_4X6.length*4),1)])]),L("tr",null,[Oa,Qa,L("td",{class:"td-text-align-left",onClick:t[59]||(t[59]=t=>a.onDrillDown("Confirmed",a.malariaData))})]),L("tr",null,[Ia,Fa,L("td",{class:"td-text-align-left",onClick:t[60]||(t[60]=t=>a.onDrillDown("Confirmed",a.malariaData))})]),L("tr",null,[Na,Ya,L("td",{class:"td-text-align-left",onClick:t[61]||(t[61]=t=>a.onDrillDown("SP",a.malariaData.sp))},[L("a",null,R(a.malariaData.sp.length),1)])]),L("tr",null,[$a,Ba,L("td",{class:"td-text-align-left",onClick:t[62]||(t[62]=t=>a.onDrillDown("Confirmed",a.malariaData))})]),L("tr",null,[Va,Ea,L("td",{class:"td-text-align-left",onClick:t[63]||(t[63]=t=>a.onDrillDown("ASAQ 25mg/67.5mg (3 tablets)",a.malariaData.ASAQ_25mg))},[L("a",null,R(3*a.malariaData.ASAQ_25mg.length),1)])]),L("tr",null,[Ha,Ua,L("td",{class:"td-text-align-left",onClick:t[64]||(t[64]=t=>a.onDrillDown("ASAQ 50mg/135mg (3 tablets)",a.malariaData.ASAQ_50mg))},[L("a",null,R(3*a.malariaData.ASAQ_50mg.length),1)])]),L("tr",null,[Xa,qa,L("td",{class:"td-text-align-left",onClick:t[65]||(t[65]=t=>a.onDrillDown("ASAQ 100mg/270mg (3 tablets)",a.malariaData.ASAQ_100mg_3tabs))},[L("a",null,R(3*a.malariaData.ASAQ_100mg_3tabs.length),1)])]),L("tr",null,[ja,za,L("td",{class:"td-text-align-left",onClick:t[66]||(t[66]=t=>a.onDrillDown("ASAQ 100mg/270mg (6 tablets)",a.malariaData.ASAQ_100mg_6tabs))},[L("a",null,R(6*a.malariaData.ASAQ_100mg_6tabs.length),1)])])])])):T("",!0)])),_:1}),k(m,{btns:a.btns},null,8,["btns"])])),_:1})):T("",!0)],64)}],["__scopeId","data-v-25413a36"]]))}}}));