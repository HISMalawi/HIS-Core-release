import{d as h,al as t,aN as l,ai as r,aO as u,au as p,J as d,M as c,ag as m,a8 as f,v as S,ad as y,u as _}from"./index-CG6KEPsv.js";import{H as $}from"./HisStandardForm-CWpBcokh.js";const B=h({components:{HisStandardForm:$},data:()=>({apiDate:"",fields:[]}),async created(){this.apiDate=await t.getApiDate(),this.fields=l({id:"session_date",helpText:"Session Date",required:!0,minDate:()=>"2000-01-01",maxDate:()=>this.apiDate,estimation:{allowUnknown:!1},computeValue:e=>e,config:{footerBtns:[{name:"Reset",slot:"end",color:"success",state:{visible:{default:()=>t.isBDE()}},onClick:async()=>{await this.resetSessionDate()}}]}})},async mounted(){await this.showBdeNotice()},methods:{async showBdeNotice(){if(!t.isBDE())return;const e=r.toStandardHisDisplayFormat(t.getCachedApiDate()||""),i=r.toStandardHisDisplayFormat(t.getSessionDate()),a=await u("BDE Notice","The system is currently in Back Data Entry Mode(BDE).                 Do you wish to reset the date to ".concat(e,"?"),"BDE Date: ".concat(i),[{name:"Reset Date",slot:"start",color:"success"},{name:"Keep BDE Date",slot:"end",color:"danger"},{name:"New date",slot:"end"}]);if(a==="Reset Date")return await this.resetSessionDate();a==="Keep BDE Date"&&this.redirect()},async resetSessionDate(){try{await t.resetSessionDate(),p.invalidate("PROVIDERS"),d("Session date has been reset to ".concat(this.formatDate(this.apiDate))),this.redirect()}catch(e){c("".concat(e))}},redirect(){const e=this.$route.query.patient_dashboard_redirection_id;e?this.$router.push("/patient/dashboard/".concat(e)):this.$router.back()},async onSubmit(e,i){var o,n;const a=i.session_date;try{await t.setSessionDate(a),d("Successfully Back dated to ".concat(this.formatDate(a)));const s=(n=(o=this.$route)==null?void 0:o.query)==null?void 0:n.patient_id;s?m(s,this.$router):this.redirect()}catch(s){c("".concat(s))}},formatDate(e){return r.toStandardHisDisplayFormat(e)}}});function w(e,i,a,o,n,s){const D=y("his-standard-form");return _(),S(D,{skipSummary:!0,fields:e.fields,onOnFinish:e.onSubmit},null,8,["fields","onOnFinish"])}const g=f(B,[["render",w]]);export{g as default};