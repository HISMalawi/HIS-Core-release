System.register(["./index-legacy-BClzHwRE.js","./HisStandardForm-legacy-I0WV5d_F.js","./ReportMixin.vue_vue_type_script_lang-legacy-Bewc2xD2.js","./MOHReportHeader-legacy-DAT3mAyO.js","./IDSRTableTemplate-legacy-CXLxZsj4.js","./BasicReportTemplate-legacy-CLJMIOJT.js","./Export-legacy-6qZf0wdz.js","./index-legacy-CwybCMSN.js","./Pagination-legacy-CrStNTWm.js","./opd_report_service-legacy-yXJR3Qxi.js"],(function(e,t){"use strict";var i,r,a,o,s,n,l,p,d,c,g,h,m,D,u,y,b,k,f,w,L,R;return{setters:[e=>{i=e.d,r=e.cl,a=e.bY,o=e.a5,s=e.U,n=e.ag,l=e.aj,p=e.a6,d=e.ab,c=e.u,g=e.B,h=e.x,m=e.v,D=e.H,u=e.w,y=e.G,b=e.E},e=>{k=e.H},e=>{f=e._},e=>{w=e.I,L=e.a},e=>{R=e.M},null,null,null,null,null],execute:function(){const t=i({mixins:[f],components:{IonLoading:r,IdsrH:w,Weekly:R,HisStandardForm:k,HisFooter:a,IonPage:o,IonContent:s},data:()=>({formData:{},componentKey:0,computedFormData:{},idsr:{},btns:[],isLoading:!1,fields:[],reportID:-1,periodLabel:"Week Dates",periodDates:"",reportName:"WEEKLY DISEASE SURVEILLANCE REPORT",rangeLabel:"Week Number",reportTitle:"",range:"",TotalOPDVisits:0,clinicName:L.getLocationName(),reportReady:!1,reportUrlParams:"",regenarate:""}),created(){this.btns=this.getBtns(),this.fields=this.getEpiweeksFields()},methods:{async onPeriod(e,t,i=!1){this.componentKey+=1,this.formData=e,this.computedFormData=t,this.reportReady=!0,this.isLoading=!0,this.report=new L,this.report.setRegenerate(i),this.report.setEpiWeek(e.epiweek.label),this.report.setStartDate(n.toStandardHisFormat(e.epiweek.other.start)),this.report.setEndDate(n.toStandardHisFormat(e.epiweek.other.end)),this.periodDates=this.report.getReportPeriod(),this.range=e.epiweek.label.split(" ")[0],this.reportTitle=`MOH ${l.getLocationName()} Weekly IDSR Report ${this.periodDates}`;try{const e=await this.report.requestIDSRWeekly(),t=await this.report.getAttendance();e&&t&&(this.reportID="data",this.TotalOPDVisits=t.length,this.idsr=e)}catch(r){console.log(r)}finally{this.isLoading=!1}},getBtns(){return[{name:"CSV",size:"large",slot:"start",color:"primary",visible:!0,onClick:async()=>{this.$refs.rep.onDownload(this.reportTitle)}},{name:"PDF",size:"large",slot:"start",color:"primary",visible:!0,onClick:()=>this.exportToCustomPDF(this.reportTitle)},{name:"Back",size:"large",slot:"end",color:"warning",visible:!0,onClick:()=>this.reportReady=!1},{name:"Refresh",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>await this.onPeriod(this.formData,this.computedFormData,!0)},{name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>this.$router.push({path:"/"})}]}}}),P={id:"report-content"};e("default",p(t,[["render",function(e,t,i,r,a,o){const s=d("ion-loading"),n=d("his-standard-form"),l=d("idsr-h"),p=d("weekly"),k=d("ion-content"),f=d("his-footer"),w=d("ion-page");return c(),g(b,null,[h(s,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),e.reportReady?D("",!0):(c(),m(n,{key:0,onOnFinish:e.onPeriod,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"])),e.reportReady?(c(),m(w,{key:1},{default:u((()=>[h(k,null,{default:u((()=>[y("div",P,[(c(),m(l,{key:e.componentKey,reportName:e.reportName,rangeLabel:e.rangeLabel,range:e.range,ref:"header",periodLabel:e.periodLabel,periodDates:e.periodDates,clinicName:e.clinicName,totalOPDVisits:e.TotalOPDVisits},null,8,["reportName","rangeLabel","range","periodLabel","periodDates","clinicName","totalOPDVisits"])),(c(),m(p,{key:e.componentKey,onDrillDown:e.onDrillDown,params:e.idsr,periodDates:e.periodDates,epiweek:e.range,ref:"rep"},null,8,["onDrillDown","params","periodDates","epiweek"]))])])),_:1}),h(f,{btns:e.btns},null,8,["btns"])])),_:1})):D("",!0),t[0]||(t[0]=y("div",{id:"print"},null,-1))],64)}]]))}}}));