System.register(["./index-legacy-BsbMrqEO.js","./HisStandardForm-legacy-BbU4Bs9R.js","./ReportMixin.vue_vue_type_script_lang-legacy-DDD9JuTo.js","./HMISTemplate-legacy-CEaMKibA.js","./MOHReportHeader-legacy-DxQij5ZH.js","./BasicReportTemplate-legacy-CTVmLSqg.js","./Export-legacy-BCoNjk-A.js","./Pagination-legacy-DXSkeWTn.js","./opd_report_service-legacy-BZ4aiAD4.js"],(function(e,t){"use strict";var i,a,o,r,s,n,l,d,p,c,m,h,g,D,u,y,f,H,b,P,F,N;return{setters:[e=>{i=e.d,a=e.cX,o=e.bX,r=e.a5,s=e.W,n=e.ai,l=e.al,d=e.a8,p=e.ad,c=e.u,m=e.B,h=e.x,g=e.v,D=e.H,u=e.w,y=e.K,f=e.G},e=>{H=e.H},e=>{b=e._},e=>{P=e.H,F=e.a},e=>{N=e.I},null,null,null,null],execute:function(){const t=i({mixins:[b],components:{IonLoading:a,HmisHeader:N,HmisTemplate:P,HisStandardForm:H,HisFooter:o,IonPage:r,IonContent:s},data:()=>({formData:{},componentKey:0,computedFormData:{},hmis15Data:{},btns:[],isLoading:!1,fields:[],reportID:-1,periodLabel:"Period",periodDates:"",reportName:"HMIS 15",TotalOPDVisits:0,clinicName:F.getLocationName(),reportReady:!1,reportTitle:""}),created(){this.btns=this.getBtns(),this.fields=this.getDateDurationFields()},methods:{async onPeriod(e,t,i=!1){this.componentKey+=1,this.formData=e,this.computedFormData=t,this.reportReady=!0,this.isLoading=!0,this.report=new F,this.report.setRegenerate(i),this.report.setStartDate(n.toStandardHisFormat(t.start_date)),this.report.setEndDate(n.toStandardHisFormat(t.end_date)),this.periodDates=this.report.getReportPeriod(),this.reportTitle=`MOH ${l.getLocationName()} HMIS 15 Report ${this.periodDates}`;try{const e=await this.report.requestHMIS15(),t=await this.report.getAttendance();e&&t&&(this.reportID="data",this.TotalOPDVisits=t.length,this.hmis15Data=e)}catch(a){console.log(a)}finally{this.isLoading=!1}},getBtns(){return[{name:"CSV",size:"large",slot:"start",color:"primary",visible:!0,onClick:async()=>{this.$refs.rep.onDownload(this.reportTitle)}},{name:"PDF",size:"large",slot:"start",color:"primary",visible:!0,onClick:()=>this.exportToCustomPDF(this.reportTitle)},{name:"Back",size:"large",slot:"end",color:"warning",visible:!0,onClick:()=>this.reportReady=!1},{name:"Refresh",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>await this.onPeriod(this.formData,this.computedFormData,!0)},{name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>this.$router.push({path:"/"})}]}}}),v={id:"report-content"},w=y("div",{id:"print"},null,-1);e("default",d(t,[["render",function(e,t,i,a,o,r){const s=p("ion-loading"),n=p("his-standard-form"),l=p("hmis-header"),d=p("hmis-template"),H=p("ion-content"),b=p("his-footer"),P=p("ion-page");return c(),m(f,null,[h(s,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),e.reportReady?D("",!0):(c(),g(n,{key:0,onOnFinish:e.onPeriod,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"])),e.reportReady?(c(),g(P,{key:1},{default:u((()=>[h(H,null,{default:u((()=>[y("div",v,[(c(),g(l,{key:e.componentKey,reportName:e.reportName,ref:"header",periodLabel:e.periodLabel,periodDates:e.periodDates,clinicName:e.clinicName,totalOPDVisits:e.TotalOPDVisits},null,8,["reportName","periodLabel","periodDates","clinicName","totalOPDVisits"])),(c(),g(d,{key:e.componentKey,reportName:e.reportName,onDrillDown:e.onDrillDown,params:e.hmis15Data,periodDates:e.periodDates,ref:"rep"},null,8,["reportName","onDrillDown","params","periodDates"]))])])),_:1}),h(b,{btns:e.btns},null,8,["btns"])])),_:1})):D("",!0),w],64)}]]))}}}));