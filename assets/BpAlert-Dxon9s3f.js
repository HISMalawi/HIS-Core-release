import{_ as v}from"./EncounterMixin.vue_vue_type_script_lang-_NQuqjHg.js";import{d as b,a4 as D,W as C,a5 as R,a3 as T,S as I,as as F,aK as S,bq as N,br as $,bl as u,d5 as m,a8 as O,ad as i,u as c,v as V,w as n,x as r,B as g,aD as _,c0 as B,K as t,E as d,z as e,H as f,a6 as A,a7 as E}from"./index-DrPQ21-i.js";import{B as x}from"./htn_service-CwrOol97.js";import{R as z}from"./RiskFactorModal-DnS1XO8Z.js";import"./encounter_guidelines-D8L0Wl1z.js";import"./GuidelineEngine-D6V1_Znr.js";import"./HisStandardForm-rh8Trs2q.js";const H=b({mixins:[v],components:{IonFooter:D,IonContent:C,IonPage:R,IonButton:T,IonToolbar:I},data:()=>({sysBp:0,dsBP:0,riskFactors:[],patientOnBpDrugs:!1,isPregnant:!1,systolicThreshold:145,diastolicTheshold:94}),methods:{async showRiskFactors(){const s=await F.create({component:z,backdropDismiss:!1,cssClass:"large-modal",componentProps:{factors:this.riskFactors}});s.present();const{data:o}=await s.onDidDismiss();S.isEmpty(o)||this.nextTask()},async getRiskFactors(){const o=N.getConceptsByCategory("risk factors").map(async a=>{const h=await $.getFirstValueCoded(this.patientID,a.name);return{concept:a.name,value:h}});return Promise.all(o)},recaptureBp(){this.$router.push("/art/encounters/vitals/".concat(this.patientID,"?vital_options=BP"))}},watch:{ready:{async handler(s){if(!s)return;await(await u.create({message:"Verifying Blood Pressure...",backdropDismiss:!1})).present();const a=new x(this.patientID,this.providerID);this.riskFactors=await this.getRiskFactors(),this.systolicThreshold=await m.systolicThreshold()||145,this.diastolicTheshold=await m.diastolicThreshold()||94,this.dsBP=await a.getDiastolicBp()||0,this.sysBp=await a.getSystolicBp()||0,this.patientOnBpDrugs=await a.onBpDrugs()||!1,this.isPregnant=this.patient.isChildBearing()&&await this.patient.isPregnant()||!1,u.dismiss()},immediate:!0}},computed:{patientName(){return this.ready?this.patient.getFullName():"Patient"},hasPressureReading(){return this.sysBp>0&&this.dsBP>0},highBP(){return(this.sysBp>=this.systolicThreshold&&this.dsBP>=this.diastolicTheshold||this.dsBP>=this.diastolicTheshold)&&!this.isPregnant}}}),l=s=>(A("data-v-8630601f"),s=s(),E(),s),K=l(()=>t("h1",{class:"ion-text-center"}," High BP Alert ",-1)),L={key:0,class:"vertically-align ion-text-center"},M={style:{"font-weight":"bold"}},j={class:"name"},q={class:"bp"},G=l(()=>t("br",null,null,-1)),W=l(()=>t("span",null,[e(" Retesting BP is "),t("span",{style:{"font-weight":"bold",color:"#000000","text-decoration":"underline"}},"optional"),e(". "),t("br"),e(" Do you want to test BP? ")],-1)),Y={key:1,class:"vertically-align ion-text-center"},J=l(()=>t("br",null,null,-1)),Q=l(()=>t("h1",null," Do you want to test BP? ",-1));function U(s,o,a,h,X,Z){const P=i("ion-content"),p=i("ion-button"),y=i("ion-toolbar"),w=i("ion-footer"),k=i("ion-page");return c(),V(k,null,{default:n(()=>[r(P,null,{default:n(()=>[K,s.hasPressureReading?(c(),g("div",L,[_(t("h2",M," (Patient already on BP drugs) ",512),[[B,s.patientOnBpDrugs]]),t("h2",null,[t("span",j,d(s.patientName),1),e(" has "),_(t("span",null," a high ",512),[[B,s.highBP]]),e(" blood pressure of "),t("span",q,d(s.sysBp)+" / "+d(s.dsBP),1),G,W])])):f("",!0),s.hasPressureReading?f("",!0):(c(),g("div",Y,[e(" No BP Reading found "),J,Q]))]),_:1}),r(w,null,{default:n(()=>[r(y,{color:"dark"},{default:n(()=>[r(p,{onClick:o[0]||(o[0]=()=>s.hasPressureReading?s.showRiskFactors():s.nextTask()),size:"large",color:"danger",slot:"start"},{default:n(()=>[e(" No ")]),_:1}),r(p,{onClick:s.recaptureBp,size:"large",color:"success",slot:"end"},{default:n(()=>[e(" Yes ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}const rs=O(H,[["render",U],["__scopeId","data-v-8630601f"]]);export{rs as default};