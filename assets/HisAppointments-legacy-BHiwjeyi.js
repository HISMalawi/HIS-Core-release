System.register(["./index-legacy-CNrLGT3P.js","./v-calendar.es-legacy-DEgLg7eV.js","./appointment_service-legacy-BNwn8pIH.js","./FieldMixin.vue_vue_type_script_lang-legacy-B1v8-yn1.js"],(function(t,a){"use strict";var e,i,n,s,o,d,c,r,l,u,p,h,m,y,g,D,b,v,w,f,x,k,_;return{setters:[t=>{e=t.d,i=t.br,n=t.aq,s=t.as,o=t.ar,d=t.H,c=t.cH,r=t.n,l=t.aW,u=t._,p=t.r,h=t.o,m=t.c,y=t.w,g=t.A,D=t.b,b=t.az,v=t.v,w=t.x,f=t.z},t=>{x=t._},t=>{k=t.A},t=>{_=t._}],execute:function(){var a=document.createElement("style");a.textContent="::-webkit-scrollbar{width:0px}::-webkit-scrollbar-track{display:none}.custom-calendar.vc-container{--day-border: 1px solid #b8c2cc;--day-border-highlight: 1px solid #b8c2cc;--day-width: 80px;--day-height: 82px;--weekday-bg: #f8fafc;--weekday-border: 1px solid #eaeaea;border-radius:0!important;width:100%}.custom-calendar.vc-container .vc-day-content{padding:50px;background:none}.custom-calendar.vc-container .vc-header{background-color:#f1f5f8;padding:10px 0}.custom-calendar.vc-container .vc-weeks{padding:0}.custom-calendar.vc-container .vc-weekday{background-color:var(--weekday-bg);border-bottom:var(--weekday-border);border-top:var(--weekday-border);padding:5px}.custom-calendar.vc-container .vc-day{padding:30px 5px 3px;text-align:center;height:var(--day-height);min-width:var(--day-width);background-color:#fff}.custom-calendar.vc-container .vc-day.weekday-1,.custom-calendar.vc-container .vc-day.weekday-7{background-color:#eff8ff}.custom-calendar.vc-container .vc-day:not(.on-bottom){border-bottom:var(--day-border)}.custom-calendar.vc-container .vc-day:not(.on-bottom).weekday-1{border-bottom:var(--day-border-highlight)}.custom-calendar.vc-container .vc-day:not(.on-right){border-right:var(--day-border)}.custom-calendar.vc-container .vc-day-dots{margin-bottom:5px}.custom-calendar.vc-container .vc-highlight,.custom-calendar.vc-container .vc-highlights .vc-day-layer{border-radius:0!important;padding:0!important;background:#3182ce!important;color:#fff}.selected{font-size:3vh;height:100%;margin-top:0!important;color:#fff;text-align:center}.appointments{position:absolute;top:15px;right:5px;color:#adff2f}\n",document.head.appendChild(a);const A=e({components:{ViewPort:i,Calendar:x,IonGrid:n,IonCol:s,IonRow:o},mixins:[_],watch:{startDate:{async handler(t){const a=t||d.toStandardHisDisplayFormat(this.sessionDate);this.$emit("onValue",{label:d.toStandardHisDisplayFormat(a),value:a})},immediate:!0}},data:()=>({rows:[],startDate:null,runOutDate:null,appointments:[],clinicHolidays:[],clinicDays:[],patientAge:0,appointmentLimit:0,sessionDate:null,masks:{weekdays:"WWW"}}),mounted(){this.$emit("onFieldActivated",this)},activated(){this.$emit("onFieldActivated",this)},async created(){this.patientAge=this.config.patientAge||0,await this.getAppointmentLimit(),await this.getClinicHolidays(),await this.getClinicDays();const t=await this.options(this.fdata);this.sessionDate=k.getSessionDate();const a=t[0].other.appointmentDate;this.appointments=await this.getAppointments(a),this.setDate(a),this.runOutDate=t[0].other.runOutDate?new Date(t[0].other.runOutDate):null},methods:{getAppointments:t=>k.getDailiyAppointments(d.toStandardHisFormat(t)),async getAppointmentLimit(){const t=await c.appointmentLimit();t&&(this.appointmentLimit=t)},async getClinicHolidays(){const t=await c.clinicHolidays();t&&(this.clinicHolidays=t.split(","))},async getClinicDays(){let t="";t=this.patientAge>=18?await c.adultClinicDays():await c.peadsClinicDays(),t&&(this.clinicDays=t.split(","))},async isDateAvalaible(t){const a=await this.getAppointments(t);if(0!==a.length&&a.length>=this.appointmentLimit&&await r(`Appointment limit reached for the selected date ${d.toStandardHisDisplayFormat(t)}`,{header:"APPOINTMENT LIMIT REACHED",cancelBtnLabel:"Proceed with Selected Date",confirmBtnLabel:"Select Another Date"}))return!1;if(this.clinicHolidays.includes(d.toStandardHisFormat(t))&&!(await r("Selected date is a clinic holiday, do you want to set an appointment?")))return!1;const e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][l(t).day()];return!(!this.clinicDays.includes(e)&&!(await r(`The selected date ${d.toStandardHisDisplayFormat(t)} is not a clinic day. Do you want to proceed with this date?`)))&&(this.appointments=a,!0)},async setDate(t){this.startDate=new Date(t);const a=this.$refs.calendar;await a.move(this.startDate),await a.focusDate(this.startDate)},async dayClicked(t){!t.isDisabled&&await this.isDateAvalaible(t.id)&&this.setDate(t.id)}},computed:{showMedicationRunoutDate(){return"boolean"!=typeof this.config?.hideRunoutDate||!this.config?.hideRunoutDate},aDate(){return d.toStandardHisDisplayFormat(this.startDate)},rDate(){return d.toStandardHisDisplayFormat(this.runOutDate)},cDate(){return d.toStandardHisFormat(this.startDate)},attributes(){return[{highlight:!0,dates:this.aDate}]}}}),H={class:"view-port-content"},S=["onClick"],C={key:0,class:"appointments"},F=g("b",null,"Medication Run out Date",-1),L=g("p",null,null,-1),M=g("b",null,"User set appointment date",-1),O=g("p",null,null,-1),R=g("b",null,"Appointment(s)",-1),I=g("p",null,null,-1),T=g("b",null,"Appointment limit (per/day)",-1),$=g("p",null,null,-1);t("default",u(A,[["render",function(t,a,e,i,n,s){const o=p("Calendar"),d=p("ion-col"),c=p("ion-label"),r=p("ion-item"),l=p("ion-list"),u=p("ion-row"),x=p("ion-grid"),k=p("view-port");return h(),m(k,null,{default:y((()=>[g("div",H,[D(x,null,{default:y((()=>[D(u,null,{default:y((()=>[D(d,{size:"8"},{default:y((()=>[D(o,{color:"blue",ref:"calendar","is-expanded":"",class:"custom-calendar","min-date":t.sessionDate,"max-date":t.runOutDate,attributes:t.attributes,masks:t.masks,"disable-page-swipe":""},{"day-content":y((({day:a})=>[g("div",{onClick:e=>t.dayClicked(a),class:b({selected:a.id===t.cDate,isDisabled:a.isDisabled})},[g("span",null,v(a.day),1),a.id===t.cDate?(h(),w("sup",C,v(t.appointments.length),1)):f("",!0)],10,S)])),_:1},8,["min-date","max-date","attributes","masks"])])),_:1}),D(d,{size:"4",class:"his-card"},{default:y((()=>[D(l,null,{default:y((()=>[t.showMedicationRunoutDate&&t.rDate?(h(),m(r,{key:0,class:"his-sm-text"},{default:y((()=>[D(c,{class:"ion-text-wrap"},{default:y((()=>[F,L,g("span",null,v(t.rDate),1)])),_:1})])),_:1})):f("",!0),D(r,{class:"his-sm-text"},{default:y((()=>[D(c,{class:"ion-text-wrap"},{default:y((()=>[M,O,g("span",null,v(t.aDate),1)])),_:1})])),_:1}),D(r,{class:"his-sm-text"},{default:y((()=>[D(c,{class:"ion-text-wrap"},{default:y((()=>[R,I,g("span",null,v(t.appointments.length),1)])),_:1})])),_:1}),D(r,{class:"his-sm-text"},{default:y((()=>[D(c,{class:"ion-text-wrap"},{default:y((()=>[T,$,g("span",null,v(t.appointmentLimit),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])])),_:1})}]]))}}}));