System.register(["./opd_report_service-legacy-CAsrv9tf.js","./BaseTableReport-legacy-ac9slSL_.js","./index-legacy-DLdqxVnr.js","./ReportMixin.vue_vue_type_script_lang-legacy-DWNP96Om.js","./Export-legacy-pUCWT6tL.js","./index-legacy-Cy5lJcFI.js","./HisStandardForm-legacy-D9LtBbE8.js","./BasicReportTemplate-legacy-38jIYQh2.js","./Pagination-legacy-rWo9aFQy.js"],(function(t,e){"use strict";var i,a,s,r,n,l,o,d,u,c,g,p,h,y,m;return{setters:[t=>{i=t.O},t=>{a=t.R},t=>{s=t.d,r=t.a5,n=t.ao,l=t.ag,o=t.aj,d=t.dy,u=t.a6,c=t.ab,g=t.u,p=t.v,h=t.w,y=t.x},t=>{m=t._},null,null,null,null,null],execute:function(){const e=s({components:{ReportTemplate:a,IonPage:r},mixins:[m],data:()=>({title:"Clinic Registration",rows:[],reportData:[],columns:[[n.thTxt("Reg"),n.thTxt("First Name"),n.thTxt("Last Name"),n.thTxt("Gender"),n.thTxt("DOB"),n.thTxt("Date reg.")]],customBtns:[]}),created(){this.fields=this.getDateDurationFields(),this.customBtns.push({name:"High level view",size:"large",slot:"start",color:"primary",visible:!0,onClick:async()=>this.showModal()})},methods:{async init(t,e){const a=new i;a.setStartDate(e.start_date),a.setEndDate(e.end_date),this.period=a.getDateIntervalPeriod();const s=await a.getClinicRegistrations();this.reportData=s.sort(((t,e)=>t.visit_type>e.visit_type?1:t.visit_type<e.visit_type?-1:0)),this.rows=this.buildRows(this.reportData)},buildRows:t=>t.length?t.map((t=>[n.td(t.visit_type),n.td(t.given_name),n.td(t.family_name),n.td(t.gender),n.td(l.toStandardHisDisplayFormat(t.birthdate)),n.td(l.toStandardHisDisplayFormat(t.visit_date))])):[],filterBy(t,e){return this.reportData.filter((i=>{const a=l.calculateAge(i.birthdate,o.getSessionDate());return i.visit_type===t&&("under5"===e?a<=5:a>6)}))},modalData(){const t=[...this.filterBy("New patient","under5")].length,e=[...this.filterBy("New patient","over5")].length,i=t+e,a=[...this.filterBy("Referral","under5")].length,s=[...this.filterBy("Referral","over5")].length,r=a+s,n=[...this.filterBy("Revisiting","under5")].length,l=[...this.filterBy("Revisiting","over5")].length;return[{label:"New patient",under5:t,over5:e,value:i},{label:"Referral",under5:a,over5:s,value:r},{label:"Revisiting",under5:n,over5:l,value:n+l}]},async showModal(){await d([...this.modalData()])}}});t("default",u(e,[["render",function(t,e,i,a,s,r){const n=c("report-template"),l=c("ion-page");return g(),p(l,null,{default:h((()=>[y(n,{title:t.title,rows:t.rows,fields:t.fields,columns:t.columns,itemsPerPage:10,period:t.period,reportPrefix:"Clinic",onReportConfiguration:t.init,customBtns:t.customBtns,paginated:""},null,8,["title","rows","fields","columns","period","onReportConfiguration","customBtns"])])),_:1})}]]))}}}));