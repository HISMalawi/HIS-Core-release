(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement14","TouchFormElement9"],{"0a79":function(t,e,a){"use strict";var n=a("7a23");function i(t,e,a,i,o,s){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{id:"view-port",class:Object(n["normalizeClass"])(t.showFull?"":"half")},[Object(n["renderSlot"])(t.$slots,"default",{},void 0,!0)],2)}var o=Object(n["defineComponent"])({name:"ViewPort",props:{showFull:{type:Boolean,default:()=>!0}}}),s=(a("a4d3"),a("6b0d")),c=a.n(s);const l=c()(o,[["render",i],["__scopeId","data-v-7c293cad"]]);e["a"]=l},"51c8":function(t,e,a){"use strict";a.r(e);var n=a("7a23"),i=Object(n["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const o=i;e["default"]=o},"83af":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("cc6f");class i extends n["a"]{constructor(t,e){super(t,7,e)}async getNextAppointment(){return n["a"].getJson(`/programs/${this.programID}/patients/${this.patientID}/next_appointment_date`,{date:this.date})}static async getDailiyAppointments(t){const e=n["a"].getProgramID();return n["a"].getJson(`/programs/${e}/booked_appointments`,{date:t,paginate:!1})}}},a4d3:function(t,e,a){"use strict";a("a6f7")},a6f7:function(t,e,a){},b2eb:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const i={class:"view-port-content"},o=["onClick"],s={key:0,class:"appointments"},c=Object(n["createElementVNode"])("b",null,"Medication Run out Date",-1),l=Object(n["createElementVNode"])("p",null,null,-1),r=Object(n["createElementVNode"])("b",null,"User set appointment date",-1),d=Object(n["createElementVNode"])("p",null,null,-1),u=Object(n["createElementVNode"])("b",null,"Appointment(s)",-1),p=Object(n["createElementVNode"])("p",null,null,-1),b=Object(n["createElementVNode"])("b",null,"Appointment limit (per/day)",-1),m=Object(n["createElementVNode"])("p",null,null,-1);function h(t,e,a,h,O,j){const D=Object(n["resolveComponent"])("Calendar"),y=Object(n["resolveComponent"])("ion-col"),f=Object(n["resolveComponent"])("ion-label"),w=Object(n["resolveComponent"])("ion-item"),C=Object(n["resolveComponent"])("ion-list"),g=Object(n["resolveComponent"])("ion-row"),v=Object(n["resolveComponent"])("ion-grid"),V=Object(n["resolveComponent"])("view-port");return Object(n["openBlock"])(),Object(n["createBlock"])(V,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(v,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(g,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(y,{size:"8"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(D,{color:"blue",ref:"calendar","is-expanded":"",class:"custom-calendar","min-date":t.sessionDate,"max-date":t.runOutDate,attributes:t.attributes,masks:t.masks,"disable-page-swipe":""},{"day-content":Object(n["withCtx"])(({day:e})=>[Object(n["createElementVNode"])("div",{onClick:a=>t.dayClicked(e),class:Object(n["normalizeClass"])({selected:e.id===t.cDate,isDisabled:e.isDisabled})},[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.day),1),e.id===t.cDate?(Object(n["openBlock"])(),Object(n["createElementBlock"])("sup",s,Object(n["toDisplayString"])(t.appointments.length),1)):Object(n["createCommentVNode"])("",!0)],10,o)]),_:1},8,["min-date","max-date","attributes","masks"])]),_:1}),Object(n["createVNode"])(y,{size:"4",class:"his-card"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])(()=>[t.showMedicationRunoutDate&&t.rDate?(Object(n["openBlock"])(),Object(n["createBlock"])(w,{key:0,class:"his-sm-text"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,{class:"ion-text-wrap"},{default:Object(n["withCtx"])(()=>[c,l,Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.rDate),1)]),_:1})]),_:1})):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(w,{class:"his-sm-text"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,{class:"ion-text-wrap"},{default:Object(n["withCtx"])(()=>[r,d,Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.aDate),1)]),_:1})]),_:1}),Object(n["createVNode"])(w,{class:"his-sm-text"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,{class:"ion-text-wrap"},{default:Object(n["withCtx"])(()=>[u,p,Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.appointments.length),1)]),_:1})]),_:1}),Object(n["createVNode"])(w,{class:"his-sm-text"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,{class:"ion-text-wrap"},{default:Object(n["withCtx"])(()=>[b,m,Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.appointmentLimit),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})}var O=a("0a79"),j=a("d867"),D=a("0261"),y=a("9283"),f=a("83af"),w=a("51c8"),C=a("d1ca"),g=a("b5e4"),v=a("5a0c"),V=a.n(v),N=Object(n["defineComponent"])({components:{ViewPort:O["a"],Calendar:D["a"],IonGrid:j["IonGrid"],IonCol:j["IonCol"],IonRow:j["IonRow"]},mixins:[w["default"]],watch:{startDate:{async handler(t){const e=t||y["c"].toStandardHisDisplayFormat(this.sessionDate);this.$emit("onValue",{label:"",value:e})},immediate:!0}},data:()=>({rows:[],startDate:null,runOutDate:null,appointments:[],clinicHolidays:[],clinicDays:[],patientAge:0,appointmentLimit:0,sessionDate:null,masks:{weekdays:"WWW"}}),mounted(){this.$emit("onFieldActivated",this)},activated(){this.$emit("onFieldActivated",this)},async created(){this.patientAge=this.config.patientAge||0,await this.getAppointmentLimit(),await this.getClinicHolidays(),await this.getClinicDays();const t=await this.options(this.fdata);this.sessionDate=f["a"].getSessionDate();const e=t[0].other.appointmentDate;this.appointments=await this.getAppointments(e),this.setDate(e),this.runOutDate=t[0].other.runOutDate?new Date(t[0].other.runOutDate):null},methods:{getAppointments(t){return f["a"].getDailiyAppointments(y["c"].toStandardHisFormat(t))},async getAppointmentLimit(){const t=await C["b"].appointmentLimit();t&&(this.appointmentLimit=t)},async getClinicHolidays(){const t=await C["b"].clinicHolidays();t&&(this.clinicHolidays=t.split(","))},async getClinicDays(){let t="";t=this.patientAge>=18?await C["b"].adultClinicDays():await C["b"].peadsClinicDays(),t&&(this.clinicDays=t.split(","))},async isDateAvalaible(t){const e=await this.getAppointments(t);if(0!==e.length&&e.length>=this.appointmentLimit){const e=await Object(g["a"])("Appointment limit reached for the selected date "+y["c"].toStandardHisDisplayFormat(t),{header:"APPOINTMENT LIMIT REACHED",cancelBtnLabel:"Proceed with Selected Date",confirmBtnLabel:"Select Another Date"});if(e)return!1}if(this.clinicHolidays.includes(y["c"].toStandardHisFormat(t))){const t=await Object(g["a"])("Selected date is a clinic holiday, do you want to set an appointment?");if(!t)return!1}const a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=a[V()(t).day()];if(!this.clinicDays.includes(n)){const e=await Object(g["a"])(`The selected date ${y["c"].toStandardHisDisplayFormat(t)} is not a clinic day. Do you want to proceed with this date?`);if(!e)return!1}return this.appointments=e,!0},async setDate(t){this.startDate=new Date(t);const e=this.$refs.calendar;await e.move(this.startDate),await e.focusDate(this.startDate)},async dayClicked(t){!t.isDisabled&&await this.isDateAvalaible(t.id)&&this.setDate(t.id)}},computed:{showMedicationRunoutDate(){var t,e;return"boolean"!==typeof(null===(t=this.config)||void 0===t?void 0:t.hideRunoutDate)||!(null!==(e=this.config)&&void 0!==e&&e.hideRunoutDate)},aDate(){return y["c"].toStandardHisDisplayFormat(this.startDate)},rDate(){return y["c"].toStandardHisDisplayFormat(this.runOutDate)},cDate(){return y["c"].toStandardHisFormat(this.startDate)},attributes(){return[{highlight:!0,dates:this.aDate}]}}}),x=(a("d09b"),a("6b0d")),A=a.n(x);const E=A()(N,[["render",h]]);e["default"]=E},d09b:function(t,e,a){"use strict";a("f1b3")},f1b3:function(t,e,a){}}]);
//# sourceMappingURL=TouchFormElement14.46daf4cd.js.map