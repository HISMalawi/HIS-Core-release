import{H as f}from"./HisStandardForm-rh8Trs2q.js";import{bI as S,d as v,r as w,ab as _,ac as b,av as r,Q as s,af as g,aj as h,u as y,v as x,w as C,x as T,y as c,a5 as D}from"./index-DrPQ21-i.js";import{u as P}from"./useEncounter-DKfF-d5Z.js";import"./isEmpty-BSlM0y0K.js";import"./encounter_guidelines-D8L0Wl1z.js";import"./GuidelineEngine-D6V1_Znr.js";class A extends S{constructor(i,a){super(i,42,a)}}const B=v({__name:"AdmitPatient",setup(l){const i=w([]);let a;const{goToNextTask:u,patientDashboardUrl:d}=P((e,o)=>{a=new A(o,e),i.value.push(p())});async function m(e,o){const t=await Promise.all([o.internal_sections]);await a.createEncounter(),await a.saveObservationList(t),u()}function p(){return{id:"internal_sections",helpText:"Select Ward/internal section",type:_.TT_SELECT,validation:e=>b.required(e),computedValue:e=>a.buildValueText("Admit to ward",e.label),options:()=>r.getInternalSections(),config:{showKeyboard:!0,footerBtns:[{name:"Add Section",slot:"end",color:"success",onClick:async(e,o,t)=>{if(typeof t.filter!="string"||t.filter.length<3)return s("Please enter a valid section name");if(t.filtered.some(n=>n.label.toLowerCase()===t.filter.toLowerCase()))return s("Section already existing");if(await g("Do you want to add internal section?")){const n=await r.createInternalSection(t.filter.toUpperCase());n?(t.filter=n.name,t.listData=[{label:n.name,value:n.id},...t.listData]):h("Unable to add ".concat(t.filter))}}}]}}}return(e,o)=>(y(),x(c(D),null,{default:C(()=>[T(f,{cancelDestinationPath:c(d),fields:i.value,onFinishAction:m,skipSummary:!0},null,8,["cancelDestinationPath","fields"])]),_:1}))}});export{B as default};