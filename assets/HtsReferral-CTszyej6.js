import{bk as V,d as H,I as N,K as C,dF as R,F as T,aV as P,dI as k,_ as F,r as _,o as y,c as x,w as $,b as O}from"./index-BFVcutZq.js";import{H as w}from"./hts_circumcision_service-BgYrofz0.js";import{H as M}from"./HisStandardForm-DO3sZVdL.js";class E extends V{constructor(c,o=-1){super(c,114,o)}}const D=H({components:{IonPage:N,HisStandardForm:M},setup(){const r=new E(-1),c=C([]),o=C(!1),{visitID:l,getEncounter:p,saveEncounter:f,patientDashboardUrl:d,htsClient:u}=R({onInitVisit:()=>{c.value=[g(),S()]}});function I(i,a){f({encounterTypeID:r.encounterTypeID,encounterName:"REFERRAL",computedData:a})}function m(i){return E.getFirstValueCoded(l.value,i)}function g(){let i=!1;const a=[];return{id:"services",helpText:"Refer Client to other Services?",type:T.TT_MULTIPLE_SELECT,isRequired:()=>!0,init:async()=>{const s=u.age;if(u.gender==="M"){const n=p("CIRCUMCISION");n?i=/no/i.test(n["Circumcision status"])&&s>14&&s<64:P().isOfflineMode.value||(i=[await new w(l.value).getRecentCircumcisionStatus()==="No",s>14&&s<64].every(Boolean))}const t=["Hepatitis B Test Result","Syphilis Test Result"],e=p("Testing");if(e)t.forEach(n=>{e[n]==="Positive"&&a.push(n)}),o.value=/positive/i.test("".concat(e["HIV status"]));else if(!P().isOfflineMode.value){for(const n of t)await m(n)==="Positive"&&a.push(n);o.value=["Positive","Positive Initial Professional"].includes(await m("HIV status"))}return!0},finalComputedValue:s=>({obs:s.map(t=>r.buildValueText("Referrals ordered","".concat(t.value)))}),onValueUpdate(s,t){return s.map(e=>(t.value==="None"&&e.value!="None"&&(e.isChecked=!1),t.value!="None"&&t.isChecked&&e.value==="None"&&(e.isChecked=!1),e))},options:s=>{const t=[],e=(n,v={})=>{const h=s.services?s.services.some(b=>b.value===n):!1;return{label:n,value:n,isChecked:h,...v}};return t.push(e("STI",a.length?{description:{text:"Client tested positive for ".concat(k(a),". Please recommend this option if client has not started yet")}}:{})),t.push(e("TB")),u.gender==="M"&&t.push(e("VMMC",i?{description:{text:"Client is not circumcised, please recommend this option"}}:{})),t.push(e("PrEP ",o.value?{disabled:o.value,description:{text:"Client is HIV positive, cannot refer for PrEP"}}:{})),t.push(e("PEP ",o.value?{disabled:o.value,description:{text:"Client is HIV positive, cannot refer for PEP"}}:{})),t.push(e("Other")),t.push(e("None")),t},config:{footerBtns:[{name:"None",slot:"end",onClickComponentEvents:{refreshOptions:(s,t)=>t.map(e=>(e.isChecked=e.label==="None",e))},onClick:()=>"None"}]}}}function S(){return{id:"comment",helpText:"Comments (Optional)",type:T.TT_NOTE,finalComputedValue:i=>i&&!/^\s*$/gi.test("".concat(i.value))?{obs:r.buildValueText("Comments","".concat(i.value))}:null}}return{patientDashboardUrl:d,onFinish:I,fields:c}}});function B(r,c,o,l,p,f){const d=_("his-standard-form"),u=_("ion-page");return y(),x(u,null,{default:$(()=>[O(d,{formLabel:"Referral",skipSummary:!0,fields:r.fields,onFinishAction:r.onFinish,cancelDestinationPath:r.patientDashboardUrl()},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}const q=F(D,[["render",B]]);export{q as default};