System.register(["./index-legacy-CNrLGT3P.js","./ReportMixin.vue_vue_type_script_lang-legacy-CGeB03oo.js","./BaseTableReport-legacy-b_HVReff.js","./HisStandardForm-legacy-OekRIZB_.js"],(function(t,e){"use strict";var n,o,r,i,s,a,l,d,p,c,h,m,u,b,f;return{setters:[t=>{n=t.d,o=t.I,r=t.L,i=t.cJ,s=t.F,a=t.V,l=t.cv,d=t._,p=t.r,c=t.o,h=t.c,m=t.w,u=t.b},t=>{b=t._},t=>{f=t.R},null],execute:function(){const e=n({mixins:[b],components:{ReportTemplate:f,IonPage:o},data:()=>({title:"Booked clients",date:"",rows:[],appointments:{},columns:[[r.thTxt("ARV#"),r.thTxt("First name",{csvExportable:!1,pdfExportable:!0}),r.thTxt("Last name",{csvExportable:!1,pdfExportable:!0}),r.thTxt("Gender"),r.thTxt("birthdate"),r.thTxt("Outcome"),r.thTxt("Current Address",{csvExportable:!1,pdfExportable:!0}),r.thTxt("Actions",{csvExportable:!1,pdfExportable:!1})]]}),created(){this.report=new i,this.fields=[{id:"date",helpText:"Select date",type:s.TT_DATE_PICKER,defaultValue:()=>i.getSessionDate(),validation:t=>a.required(t),onValue:async t=>(this.report.setStartDate(t),this.appointments[t]||(this.appointments[t]=await this.report.getBookedAppointments(t)||[]),!0),config:{infoItems:t=>[{label:"Appointments",value:this.appointments[t]?.length||0}]}}]},methods:{onPeriod(t){this.rows=[],this.period=t.date.label,this.setRows(this.appointments[t.date.value])},setRows(t){l(t).asc((t=>t.given_name)).forEach((t=>{this.rows.push([this.tdARV(t.arv_number||"N/A"),r.td(t.given_name),r.td(t.family_name),r.td(this.formatGender(t.gender)),r.tdDate(t.birthdate),r.td(t.outcome),r.td(`District: <br/> <b>${t.district}</b><br/>\n                        Village: <br/> <b>${t.village}</b><br/>\n                        Land-mark: <br/> <b>${t.land_mark}</b><br/>\n                        Cellphone: <br/> <b>${t.cell_phone}</b>`),r.tdBtn("Select",(()=>this.confirmPatient(t.person_id)))])}))}}});t("default",d(e,[["render",function(t,e,n,o,r,i){const s=p("report-template"),a=p("ion-page");return c(),h(a,null,{default:m((()=>[u(s,{title:t.title,period:t.period,rows:t.rows,fields:t.fields,columns:t.columns,showtitleOnly:!0,config:{showIndex:!1},encryptPDF:!0,reportPrefix:"Clinic",onReportConfiguration:t.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])])),_:1})}]]))}}}));