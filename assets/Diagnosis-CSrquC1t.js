import{H as y}from"./HisStandardForm-7DlnDJZP.js";import{bH as c,bp as C,d as x,r as d,br as E,a9 as p,aa as L,aJ as m,u as P,v as N,w as F,x as O,y as g,a5 as V,aj as M,ad as k}from"./index-ATRrruTT.js";import{u as I}from"./useEncounter-DD-d41Xj.js";import{a as R,r as f}from"./commons-C_qhrxz8.js";import"./isEmpty-DB6b62pN.js";import"./encounter_guidelines-BqqB3D2c.js";import"./GuidelineEngine-D6V1_Znr.js";class _ extends c{constructor(t,s){super(t,41,s)}static async getDiagnosis(t="",s=1,n=10){const o=C.getConceptID("Qech outpatient diagnosis list");return c.getJson("diagnosis",{id:o,name:t,page:s,page_size:n})}}class $ extends c{constructor(t,s){super(t,105,s)}}const z=x({__name:"Diagnosis",setup(l){let t,s;const n=d("No"),o=d([]),{goToNextTask:v,patientDashboardUrl:T}=I((a,e)=>{E.getLatestMalariaTestResult(e).then(i=>n.value=i),t=new $(e,a),s=new _(e,a),o.value=[u("Primary"),u("Secondary"),w()]});async function S(a,e){await s.createEncounter();const i=await f({...e,obs_datetime:M.getSessionDate()},"diagnosis");await s.saveObservationList(i);const r=await f({...e},"notes");m.isEmpty(r)||(await t.createEncounter(),await t.saveObservationList(r)),v()}async function b(a){return a.some(({label:i})=>/Malaria/i.test(i))?n.value==="Positive"?!0:await k("Patient has ".concat(n.value," malaria test result. Do you want to continue?")):!0}function u(a){return{id:"".concat(a.toLowerCase(),"_diagnosis"),helpText:"".concat(a," Diagnosis"),type:p.TT_INFINITE_SCROLL_MULTIPLE_SELECT,validation:e=>a==="Primary"?L.required(e):null,options:async(e,i="",r=1,D=10)=>{const h=await _.getDiagnosis(i,r,D);return R(h,"name","concept_id")},beforeNext:async e=>await b(e),computedValue:e=>({tag:"diagnosis",obs:e.map(({value:i})=>s.buildValueCoded("".concat(a," Diagnosis"),i))}),config:{isFilterDataViaApi:!0,showKeyboard:!0}}}function w(){return{id:"clinical_notes",helpText:"Clinical notes",type:p.TT_TEXT,computedValue:a=>m.isEmpty(a)?null:{tag:"notes",obs:t.buildValueText("Clinical notes construct",a.value)}}}return(a,e)=>(P(),N(g(V),null,{default:F(()=>[O(y,{cancelDestinationPath:g(T),fields:o.value,onFinishAction:S},null,8,["cancelDestinationPath","fields"])]),_:1}))}});export{z as default};