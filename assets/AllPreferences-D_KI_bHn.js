import{d as N,O as y,an as C,b_ as v,a5 as H,S as T,Q as x,aq as t,bm as L,d9 as e,ai as P,a8 as k,v as A,w as i,ad as n,u as D,x as o,a1 as p}from"./index-CG6KEPsv.js";const _={style:{wordWrap:"break-word",maxWidth:"130px"}},E=N({components:{IonHeader:y,ReportTable:C,HisFooter:v,IonPage:H,IonContent:T,IonToolbar:x},data:()=>({title:"Systems settings",btns:[],rows:[],columns:[[t.thTxt("Property"),t.thTxt("Value",_)]]}),async created(){const a=await L.create({});a.present(),this.btns.push({name:"finish",color:"success",slot:"end",visible:!0,size:"large",onClick:()=>this.$router.push("/")}),this.rows=await this.buildRows(),a.dismiss()},methods:{async getClinicHolidays(){const a=await e.clinicHolidays();return a&&a.split(",").map(s=>P.toStandardHisDisplayFormat(s)).join(", ")},async buildRows(){const a=await e.filingNumberLimit(),s=await e.filingNumberPrefix(),c=await e.htnAgeThreshold(),r=await e.adultClinicDays(),u=await e.peadsClinicDays(),m=await this.getClinicHolidays(),l=await e.systolicThreshold(),d=await e.diastolicThreshold();return[[t.td("Cervical cancer screening activated"),t.td(await e.cervicalCancerScreeningEnabled()?"Yes":"No")],[t.td("Drug management activated"),t.td(await e.drugManagementEnabled()?"Yes":"No")],[t.td("Viral load activated"),t.td(await e.VLEnabled()?"Yes":"No")],[t.td("Extended Lab activated"),t.td(await e.extendedLabEnabled()?"Yes":"No")],[t.td("3HP auto select activated"),t.td(await e.threeHPAutoSelectEnabled()?"Yes":"No")],[t.td("Ask pills at home"),t.td(await e.askPillsRemaining()?"Yes":"No")],[t.td("Appointment limit"),t.td(await e.appointmentLimit())],[t.td("Adult clinic days"),t.td(r||"Not set")],[t.td("Paeds clinic days"),t.td(u||"Not set")],[t.td("Clinic holidays"),t.td(m||"Not set",_)],[t.td("HTN screening activated"),t.td(await e.htnEnabled()?"Yes":"No")],[t.td("HTN screening age"),t.td(c||"Not set")],[t.td("Systolic blood pressure"),t.td(l||"Not Set")],[t.td("Diastolic blood pressure"),t.td(d||"Not Set")],[t.td("Filling number limit"),t.td(a||"Not set")],[t.td("Use filling number"),t.td(await e.filingNumbersEnabled()?"Yes":"No")],[t.td("Filling number prefix"),t.td(s||"Not set")],[t.td("Fast track activated"),t.td(await e.fastTrackEnabled()?"Yes":"No")]]}}}),S=["innerHTML"],Y={class:"report-content"};function R(a,s,c,r,u,m){const l=n("ion-title"),d=n("ion-toolbar"),b=n("ion-header"),h=n("report-table"),w=n("ion-content"),g=n("his-footer"),f=n("ion-page");return D(),A(f,null,{default:i(()=>[o(b,null,{default:i(()=>[o(d,null,{default:i(()=>[o(l,null,{default:i(()=>[p("span",{innerHTML:a.title},null,8,S)]),_:1})]),_:1})]),_:1}),o(w,null,{default:i(()=>[p("div",Y,[o(h,{rows:a.rows,columns:a.columns},null,8,["rows","columns"])])]),_:1}),o(g,{btns:a.btns,color:"dark"},null,8,["btns"])]),_:1})}const I=k(E,[["render",R],["__scopeId","data-v-f1d3ace6"]]);export{I as default};