System.register(["./index-legacy-DDADMnop.js","./HisStandardForm-legacy-BmDNxnlt.js","./ReportMixin.vue_vue_type_script_lang-legacy-DFpdPjeO.js","./BasicReportTemplate-legacy-BhecaIAc.js","./Export-legacy-VbltoLZZ.js","./index-legacy-Cjf3InP9.js","./Pagination-legacy-BsCsjPhJ.js"],(function(t,e){"use strict";var a,n,i,s,r,o,d,l,h,c,p,u,g,m,P,f,y,w,_,b,v,x,k,S,A,D,T,j,C,I,O,V,G;return{setters:[t=>{a=t.d,n=t.db,i=t.a5,s=t.O,r=t.R,o=t.Q,d=t.S,l=t.a4,h=t.a3,c=t.bP,p=t.dc,u=t.bm,g=t.ah,m=t.aq,P=t.aL,f=t.as,y=t.a8,w=t.B,_=t.v,b=t.G,v=t.w,x=t.E,k=t.ad,S=t.u,A=t.x,D=t.z,T=t.a1,j=t.Y,C=t.c4,I=t.a6,O=t.a7},t=>{V=t.H},t=>{G=t._},null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent="a[data-v-a93c0f70]{font-weight:700;text-decoration:none}#view-port[data-v-a93c0f70]{height:77vh}\n",document.head.appendChild(e);const N=a({components:{ApexChart:n,IonPage:i,IonHeader:s,IonTitle:r,IonToolbar:o,IonContent:d,IonFooter:l,IonButton:h,ViewPort:c,HisStandardForm:V},mixins:[G],data:()=>({patients:{},reportData:{},chartType:"area",height:"100%",width:"100%",canShowReport:!1,report:{},series:[],patientPresent:{},guardianPresent:{},bothPresent:{},chartOptions:{title:{text:"HIV Reception encounters"},yaxis:{title:{text:"Number of clients"},plotAreaHeight:800},xaxis:{type:"datetime"},markers:{size:8,hover:{sizeOffset:3}}}}),created(){this.fields=this.getDateDurationFields()},computed:{totalAttendance(){let t=[];return Object.keys(this.reportData).forEach((e=>{t=t.concat(Object.keys(this.reportData[e]).map((t=>({patient_id:t,date:e}))))})),t},totalPatientVisits(){return Object.keys(this.patientPresent).reduce(((t,e)=>t.concat(this.patientPresent[e].map((t=>({patient_id:t,date:e}))))),[])},totalGuardianVisits(){return Object.keys(this.guardianPresent).reduce(((t,e)=>t.concat(this.guardianPresent[e].map((t=>({patient_id:t,date:e}))))),[])}},methods:{async onPeriod(t,e){await this.presentLoading(),this.reportData={},this.canShowReport=!0,this.patientPresent={},this.guardianPresent={},this.report=new p,this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.reportData=await this.report.getPatientVisitTypes(),this.series=this.buildSeries(this.reportData),u.dismiss()},async presentLoading(){(await u.create({message:"Please wait...",backdropDismiss:!1})).present()},async getCachedPatient(t){if(!(t in this.patients)){const e=await g.findByID(t);this.patients[t]=new g(e)}return this.patients[t]},async drillPatients(t,e){const a=[[m.thTxt("ARV Number"),m.thTxt("First name"),m.thTxt("Last name"),m.thTxt("Gender"),m.thTxt("Visit date"),m.thTxt("Action")]];this.drilldownData(t,a,e,(async t=>{const e=t.map((async t=>{const e=await this.getCachedPatient(t.patient_id);try{return[this.tdARV(e.getArvNumber()),m.td(e.getGivenName()),m.td(e.getFamilyName()),m.td(this.formatGender(e.getGender())),m.tdDate(t.date),m.tdBtn("Show",(async()=>{await f.dismiss({}),this.$router.push({path:`/patient/dashboard/${t.patient_id}`})}))]}catch(a){return[m.td("N/A"),m.td("N/A"),m.td("N/A"),m.td("N/A"),m.td("N/A"),m.tdBtn("Show",(async()=>{await f.dismiss({}),this.$router.push({path:`/patient/dashboard/${t.patient_id}`})}))]}}));return Promise.all(e)}))},onPointSelection(t,e,{dataPointIndex:a,seriesIndex:n}){try{const t=n<=0?0:n,e=this.series[t].data[a],i=this.series[t].raw[a],s=Array.from({length:i.length},((t,a)=>({patient_id:i[a],date:new Date(e[0]).toISOString()})));this.drillPatients("Point selection",s)}catch(i){console.log("Error loading point selection data")}},buildSeries(t){const e=P.uniq(Object.keys(t)),a=(e,a,n)=>{e in a||(a[e]=[]);const i=Object.entries(t[e]).filter((([,t])=>n(t.patient_present,t.guardian_present))).map((([t])=>t));return a[e]=[...a[e],...i],a},n=t=>e.map((e=>[new Date(e).getTime(),t[e].length])),i=t=>e.map((e=>t[e]));for(const s in t)a(s,this.patientPresent,((t,e)=>t&&!e)),a(s,this.guardianPresent,((t,e)=>!t&&e)),a(s,this.bothPresent,((t,e)=>t&&e));return[{name:"Patient present",raw:i(this.patientPresent),data:n(this.patientPresent)},{name:"Guardian present",raw:i(this.guardianPresent),data:n(this.guardianPresent)},{name:"Both patient and guardian present",raw:i(this.bothPresent),data:n(this.bothPresent)}]}}}),R=t=>(I("data-v-a93c0f70"),t=t(),O(),t),F=R((()=>T("br",null,null,-1))),B=R((()=>T("br",null,null,-1))),E={class:"view-port-content"};t("default",y(N,[["render",function(t,e,a,n,i,s){const r=k("his-standard-form"),o=k("ion-title"),d=k("ion-toolbar"),l=k("ion-header"),h=k("ApexChart"),c=k("view-port"),p=k("ion-content"),u=k("ion-button"),g=k("ion-footer"),m=k("ion-page");return S(),w(x,null,[t.canShowReport?b("",!0):(S(),_(r,{key:0,onOnFinish:t.onPeriod,skipSummary:!0,fields:t.fields},null,8,["onOnFinish","fields"])),t.canShowReport?(S(),_(m,{key:1},{default:v((()=>[A(l,null,{default:v((()=>[A(d,null,{default:v((()=>[A(o,null,{default:v((()=>[D(" Total Attendance: "),T("a",{href:"#",onClick:e[0]||(e[0]=C((()=>t.drillPatients("Total attendance",t.totalAttendance)),["prevent"]))},j(t.totalAttendance.length),1),F,D(" Patient visit: "),T("a",{href:"#",onClick:e[1]||(e[1]=C((()=>t.drillPatients("Total patient visits",t.totalPatientVisits)),["prevent"]))},j(t.totalPatientVisits.length),1),B,D(" Guardian visit: "),T("a",{href:"#",onClick:e[2]||(e[2]=C((()=>t.drillPatients("Guardian visits",t.totalGuardianVisits)),["prevent"]))},j(t.totalGuardianVisits.length),1)])),_:1})])),_:1})])),_:1}),A(p,null,{default:v((()=>[A(c,null,{default:v((()=>[T("div",E,[A(h,{width:t.width,height:t.height,type:t.chartType,options:t.chartOptions,series:t.series,onMarkerClick:t.onPointSelection},null,8,["width","height","type","options","series","onMarkerClick"])])])),_:1})])),_:1}),A(g,null,{default:v((()=>[A(d,{color:"dark"},{default:v((()=>[A(u,{onClick:e[3]||(e[3]=e=>t.canShowReport=!1),slot:"start",size:"large"},{default:v((()=>[D(" New Date ")])),_:1}),A(u,{slot:"end",size:"large","router-link":"/",color:"success"},{default:v((()=>[D(" Finish ")])),_:1})])),_:1})])),_:1})])),_:1})):b("",!0)],64)}],["__scopeId","data-v-a93c0f70"]]))}}}));