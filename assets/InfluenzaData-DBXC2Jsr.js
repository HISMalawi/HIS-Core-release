import{H as b}from"./HisStandardForm-DO3sZVdL.js";import{bk as I,d as k,K as S,F as o,ah as E,o as v,c as F,w as L,b as x,cD as u,I as C}from"./index-BFVcutZq.js";import{u as O}from"./useEncounter-D0sesEfx.js";import{b as r,r as P}from"./commons-CSbjPVvq.js";import"./encounter_guidelines-fEzG7yyD.js";import"./GuidelineEngine-D6V1_Znr.js";class w extends I{constructor(s,n){super(s,56,n)}}const A=k({__name:"InfluenzaData",setup(c){const s=S([]);let n;const{goToNextTask:d,patientDashboardUrl:p}=O((e,t,a)=>{n=new w(t,e),s.value=[f(a.isChildBearing()),_(),h(),T(),y()]});async function m(e,t){await n.createEncounter();const a=await P(t);await n.saveObservationList(a),d()}function f(e){return{id:"background_information",helpText:"Background Information",type:o.TT_MULTIPLE_YES_NO,computedValue:t=>i("Background information",t),options:(t,a)=>{const l=["Influenza vaccine in the last 1 year","Currently (or in the last week) taking antibiotics","Current Smoker","Were you a smoker 3 months ago","RDT or blood smear positive for malaria"];return e&&l.push("Pregnant?"),r(l,a)}}}function _(){return{id:"symptoms",helpText:"Symptoms",type:o.TT_MULTIPLE_YES_NO,options:(e,t)=>r(["Fever greater than 38 degrees celsius"],t),computedValue:e=>i("Symptom",e)}}function h(){return{id:"flulike_illness",helpText:"Flu-like Illness",type:o.TT_MULTIPLE_YES_NO,computedValue:e=>i("Flu-like illness",e),options:(e,t)=>r(["Cough","Sore throat","Headache","Rhinorrhea","Limb or joint-pain","Vomiting or diarrhoea"],t)}}function T(){return{id:"admission_criteria",helpText:"Admission Criteria",type:o.TT_MULTIPLE_YES_NO,computedValue:e=>i("Admission Criteria",e),options:(e,t)=>r(["Patient confused (newly disoriented in place, person or time)","Respiratory rate greater than or equal to 30","Oxygen saturation less than or equal to 90 percent","Blood pressure systolic less than 90 MMHG","Heart rate greater than 120 per minute","Inability to Stand"],t)}}function y(){return{id:"recruitment",helpText:"Influenza recruitment",type:o.TT_MULTIPLE_YES_NO,options:(e,t)=>r(["Influenza like illness","Severe Acute Respiratory Infection"],t),condition:e=>g(e),computedValue:e=>i("Influenza",e)}}function i(e,t){return E.isEmpty(t)?null:{obs:t.map(async a=>({...await n.buildValueCoded(e,a.label),child:[await n.buildValueCoded(a.label,a.value)]}))}}function g(e){return Object.values(e).some(Boolean)}return(e,t)=>(v(),F(u(C),null,{default:L(()=>[x(b,{cancelDestinationPath:u(p),fields:s.value,onFinishAction:m,skipSummary:!0},null,8,["cancelDestinationPath","fields"])]),_:1}))}});export{A as default};