System.register(["./HisStandardForm-legacy-BmDNxnlt.js","./index-legacy-DDADMnop.js","./commons-legacy-Ck4BOAUF.js","./useEncounter-legacy-DEwMQivU.js","./isEmpty-legacy-DyPdMuAa.js","./encounter_guidelines-legacy-BkRGG_sA.js","./GuidelineEngine-legacy-KsvQuFdF.js"],(function(e,t){"use strict";var a,i,n,l,o,r,s,c,u,d,f,y,m,b,g,h,p,v,T,w;return{setters:[e=>{a=e.H},e=>{i=e.bJ,n=e.d,l=e.r,o=e.ab,r=e.ac,s=e.bR,c=e.av,u=e.M,d=e.af,f=e.aj,y=e.u,m=e.v,b=e.w,g=e.x,h=e.y,p=e.a5,v=e.aL},e=>{T=e.r},e=>{w=e.u},null,null,null],execute:function(){class t extends i{constructor(e,t){super(e,114,t)}}class D extends i{constructor(e,t){super(e,40,t)}}e("default",n({__name:"DischargePatient",setup(e){let i,n;const S=l([]),{goToNextTask:x,patientDashboardUrl:E}=w(((e,a)=>{n=new D(a,e),i=new t(a,e),S.value=[{id:"outcome_status",helpText:"Select Discharge Outcome",type:o.TT_SELECT,validation:e=>r.required(e),computedValue:e=>({tag:"outcome",obs:n.buildValueCoded("outcome",e.value)}),options:()=>[{label:"Referred (Within the Facility)",value:"Patient transferred internally"},{label:"Dead",value:"Died in treatment"},{label:"Abscorded",value:"Absconded"},{label:"Alive (Discharged home)",value:"Discharged home"},{label:"Transferred (Another health facility)",value:"Discharged to another facility"}]},{id:"facility_name",helpText:"Select Facility name",type:o.TT_SELECT,validation:e=>r.required(e),computedValue:e=>({tag:"referral",obs:i.buildValueText("Referred",e.label)}),condition:e=>"Discharged to another facility"===e.outcome_status.value,options:(e,t="")=>s(t),config:{showKeyboard:!0,isFilterDataViaApi:!0}},{id:"internal_sections",helpText:"Select Ward/internal section",type:o.TT_SELECT,validation:e=>r.required(e),computedValue:e=>({tag:"referral",obs:i.buildValueText("Specialist clinic",e.label)}),condition:e=>"Patient transferred internally"===e.outcome_status.value,options:()=>c.getInternalSections(),config:{showKeyboard:!0,footerBtns:[{name:"Add Section",slot:"end",color:"success",onClick:async(e,t,a)=>{if("string"!=typeof a.filter||a.filter.length<3)return u("Please enter a valid section name");if(a.filtered.some((e=>e.label.toLowerCase()===a.filter.toLowerCase())))return u("Section already existing");if(await d("Do you want to add internal section?")){const e=await c.createInternalSection(a.filter.toUpperCase());e?(a.filter=e.name,a.listData=[{label:e.name,value:e.id},...a.listData]):f(`Unable to add ${a.filter}`)}}}]}}]}));async function _(e,t){await n.createEncounter();const a=await T({...t},"outcome");await n.saveObservationList(a);const l=await T({...t},"referral");v.isEmpty(l)||(await i.createEncounter(),await i.saveObservationList(l)),x()}return(e,t)=>(y(),m(h(p),null,{default:b((()=>[g(a,{cancelDestinationPath:h(E),fields:S.value,onFinishAction:_,skipSummary:""},null,8,["cancelDestinationPath","fields"])])),_:1}))}}))}}}));