import{bk as _,d as h,I as v,K as T,dF as P,F as l,ao as m,_ as b,r as d,o as F,c as H,w as I,b as N}from"./index-BFVcutZq.js";import{H as S}from"./HisStandardForm-DO3sZVdL.js";class V extends _{constructor(r,t=-1){super(r,194,t)}}const k=h({components:{IonPage:v,HisStandardForm:S},setup(){const n=T([]),r=new V(-1),{toOption:t,yesNoOptions:i,saveEncounter:p,patientDashboardUrl:u}=P({onInitVisit:()=>{n.value=[o(),a()]}});function o(){return{id:"partner_present",helpText:"Partner",type:l.TT_YES_NO,isRequired:()=>!0,finalComputedValue:e=>({obs:r.buildValueText("Partner present",e)}),options:()=>[{label:"Is partner present at this session?",value:"",values:i()}]}}function a(){return{id:"partner_hiv_status",helpText:"Partner HIV Status",type:l.TT_SELECT,isRequired:()=>!0,finalComputedValue:e=>({obs:r.buildValueCoded("Partner HIV Status",e.value)}),options:e=>{const s=[t("HIV unknown"),{label:"HIV Negative",value:"Negative"},t("Positive ART unknown"),t("Positive on ART"),t("Positive NOT on ART")];return e.partner_present==="No"&&s.push(t("No partner")),s}}}function f(e,s){const c=(e==null?void 0:e.offer_partner_hiv_test)==="Yes";p({encounterName:"Partner Reception",encounterTypeID:r.encounterTypeID,computedData:s,skipNextTask:c,callback:()=>{c&&m.push("/patient/registration")}})}return{patientDashboardUrl:u,onFinish:f,fields:n}}});function y(n,r,t,i,p,u){const o=d("his-standard-form"),a=d("ion-page");return F(),H(a,null,{default:I(()=>[N(o,{formLabel:"Partner reception",fields:n.fields,onFinishAction:n.onFinish,skipSummary:!0,cancelDestinationPath:n.patientDashboardUrl()},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}const g=b(k,[["render",y]]);export{g as default};