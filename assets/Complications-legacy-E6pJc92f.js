System.register(["./index-legacy-DDADMnop.js","./HisStandardForm-legacy-BmDNxnlt.js","./useEncounter-legacy-DEwMQivU.js","./commons-legacy-Ck4BOAUF.js","./isEmpty-legacy-DyPdMuAa.js","./encounter_guidelines-legacy-BkRGG_sA.js","./GuidelineEngine-legacy-KsvQuFdF.js"],(function(e,a){"use strict";var t,l,n,s,o,u,i,d,c,r,v,f,_,p,h,g,m,E,I,y,S,O,b,N,C,R,A,T,D,k,L,P,j,x,U,H,w,Y,G,V,$,F,M,W;return{setters:[e=>{t=e.d,l=e.r,n=e.ar,s=e.t,o=e.u,u=e.B,i=e.x,d=e.w,c=e.y,r=e.z,v=e.E,f=e.C,_=e.a1,p=e.Y,h=e.G,g=e.v,m=e.as,E=e.Q,I=e.R,y=e.O,S=e.aV,O=e.Z,b=e._,N=e.$,C=e.dh,R=e.U,A=e.dm,T=e.a0,D=e.ae,k=e.S,L=e.a3,P=e.a4,j=e.a8,x=e.bJ,U=e.bO,H=e.ab,w=e.c$,Y=e.aL,G=e.ac,V=e.dR,$=e.a5},e=>{F=e.H},e=>{M=e.u},e=>{W=e.r},null,null,null],execute:function(){var a=document.createElement("style");a.textContent="ion-col[data-v-feb7a6c4]{border-right:solid 1px #ccc}.side-title[data-v-feb7a6c4]{width:100%;padding:.5em;text-align:center;background:#e9e8e8;font-size:1.2em}p[data-v-feb7a6c4]{font-weight:700}\n",document.head.appendChild(a);const B={key:0,class:"side-title"},J=j(t({__name:"SideEffects",props:{prevSideEffectState:{type:Object},sideEffects:{type:Object,required:!0},drugs:{type:Array,default:()=>[]}},setup(e){const a=l(""),t=l({}),j=e,x=n((()=>Object.keys(t.value).every((e=>{const a=t.value[e];return Object.keys(a.drugReason).some((e=>a.drugReason[e].isChecked))||`${a.otherReason}`.length>0}))));function U(){m.dismiss()}function H(){const e=[];Object.keys(t.value).forEach((a=>{Object.keys(t.value[a].drugReason).forEach((l=>{t.value[a].drugReason[l].isChecked&&e.push({concept:t.value[a].concept,drug:t.value[a].drugReason[l].detail})})),t.value[a].otherReason&&e.push({concept:t.value[a].concept,other:t.value[a].otherReason})})),m.dismiss({values:e,state:t.value})}function w(e){e.detail.checked&&(t.value[a.value].otherReason="")}function Y(){Object.keys(t.value[a.value].drugReason).forEach((e=>{t.value[a.value].drugReason[e].isChecked=!1}))}return s((()=>{j.prevSideEffectState?t.value=j.prevSideEffectState:j.sideEffects.forEach((e=>{a.value||(a.value=e.label),t.value[e.label]={concept:e.other.concept,drugReason:j.drugs.reduce(((e,a)=>(e[a.drug.name]={isChecked:!1,detail:a},e)),{}),otherReason:""}}))})),(e,l)=>(o(),u(v,null,[i(c(y),null,{default:d((()=>[i(c(E),null,{default:d((()=>[i(c(I),{class:"his-lg-text"},{default:d((()=>[r("Suspected causes")])),_:1})])),_:1})])),_:1}),i(c(k),{style:{overflowY:"hidden",background:"grey"}},{default:d((()=>[i(c(S),null,{default:d((()=>[i(c(O),null,{default:d((()=>[i(c(b),null,{default:d((()=>[i(c(N),{style:{overflowY:"auto",height:"78vh"}},{default:d((()=>[i(c(C),{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e)},{default:d((()=>[(o(!0),u(v,null,f(t.value,((e,a)=>(o(),g(c(R),{class:"his-md-text",key:a},{default:d((()=>[i(c(A),{slot:"start",value:a},null,8,["value"]),i(c(T),null,{default:d((()=>[r(p(a),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),i(c(b),{style:{overflowY:"auto",height:"78vh"}},{default:d((()=>[a.value?(o(),u("div",B,[_("b",null,p(a.value),1),r(" causes ")])):h("",!0),a.value?(o(),g(c(N),{key:1},{default:d((()=>[i(c(R),{class:"his-lg-text"},{default:d((()=>[i(c(T),null,{default:d((()=>[r("Current Medication(s)")])),_:1})])),_:1}),(o(!0),u(v,null,f(t.value[a.value].drugReason,((e,a)=>(o(),g(c(R),{class:"his-md-text",key:a},{default:d((()=>[i(c(T),null,{default:d((()=>[r(p(a),1)])),_:2},1024),i(c(D),{onIonChange:w,slot:"start",modelValue:e.isChecked,"onUpdate:modelValue":a=>e.isChecked=a},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)))),128))])),_:1})):h("",!0),a.value?(o(),g(c(C),{key:2,onIonChange:Y,modelValue:t.value[a.value].otherReason,"onUpdate:modelValue":l[1]||(l[1]=e=>t.value[a.value].otherReason=e)},{default:d((()=>[i(c(R),{class:"his-lg-text"},{default:d((()=>[i(c(T),null,{default:d((()=>[r("Previous Medication")])),_:1})])),_:1}),i(c(R),{class:"his-md-text"},{default:d((()=>[i(c(T),null,{default:d((()=>[r("Other, not drug related")])),_:1}),i(c(A),{slot:"start",value:"Other"})])),_:1}),i(c(R),{class:"his-md-text"},{default:d((()=>[i(c(T),null,{default:d((()=>[r("Drug side effect")])),_:1}),i(c(A),{slot:"start",value:"Drug side effect"})])),_:1})])),_:1},8,["modelValue"])):h("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),i(c(P),null,{default:d((()=>[i(c(E),null,{default:d((()=>[i(c(L),{onClick:U,slot:"start",size:"large",color:"danger"},{default:d((()=>[r(" Close ")])),_:1}),i(c(L),{onClick:H,size:"large",slot:"end",disabled:!x.value},{default:d((()=>[r(" Save ")])),_:1},8,["disabled"])])),_:1})])),_:1})],64))}}),[["__scopeId","data-v-feb7a6c4"]]);e("default",t({__name:"Complications",setup(e){const a=l([]),t=new x(-1,U.COMPLICATIONS),n=l([]),s=l({}),u={pageOne:{"Abnominal pain":"ABNOMINAL_PAIN",Athralgia:"ATHRALGIA","Colour body fluids":"COLOUR_BODY_FLUIDS",Depression:"DEPRESSION",Fatigue:"FATIGUE",Gastrointestinal:"GASTROINTESTINAL",Headache:"HEADACHE","Hearing Difficulties":"HEARING_DIFFICULTIES",Hematological:"HEMATOLOGICAL",Hepatoxicity:"HEPATOXICITY",Hypothyroidism:"HYPOTHYROIDISM",Itching:"SKIN_ITCHING"},pageTwo:{Jaundice:"JAUNDICE","Lactic Acidosis":"LACTIC_ACIDOSIS",Numbness:"NUMBNESS_IN_HANDS_FEET_LEGS","Optic Neuritis":"OPTIC_NEURITIS",Pancreatitis:"PANCREATITIS","Periferal Neuropathy":"PERIFERAL_NEUROPATHY",Psychosis:"PSYCHOSIS","QT Prolongation":"QT_PROLONGATION","Renal failure":"RENAL_FAILURE","Skin Rash":"SKIN_RASH",Toxicity:"TOXICITY"}},{goToNextTask:r,patientDashboardUrl:v}=M(((e,l)=>{t.patientID=l,t.providerID=e,a.value=[function(){let e=[];return{id:"history",helpText:"Side effects / Contraindications history",type:H.TT_TABLE_VIEWER,init:async()=>{const a=await x.getJson(`programs/${t.programID}/patients/${l}/medication_side_effects`,{date:t.date});return Object.keys(a).forEach((t=>{e.push([w(t),Object.values(a[t]).flat(1).map((e=>`<b>${e.name}</b> ${e.drug_induced?"(Drug-induced)":""} : ${e.drug||"Unknown"} `)).join("<p/>")])})),!0},condition:()=>e.length,options:()=>[{label:"",value:"",other:{columns:["Date","Condition"],rows:e}}]}}(),...Object.keys(u).map(((e,a)=>({id:e,helpText:`Page ${a+1}: Contraindications / Side effects`,type:H.TT_MULTIPLE_YES_NO,init:async()=>(Y.isEmpty(n.value)&&(n.value=await x.getJson(`patients/${l}/last_drugs_received`,{program_id:t.programID})),!0),beforeNext:async a=>{const t=a.filter((e=>"YES_ANSWER"===e.value));if(t.length){const a=await m.create({component:J,backdropDismiss:!1,cssClass:"large-modal",componentProps:{sideEffects:t,drugs:n.value}});a.present();const{data:l}=await a.onDidDismiss();if(!l)return!1;s.value[e]=l.values}return!0},validation:e=>G.validateSeries([()=>G.required(e),()=>G.anyEmpty(e)]),computedValue:e=>e.map((e=>({concept_id:V("MALAWI_TB_SIDE_EFFECTS"),value_coded:V(`${e.other.concept}`),child:[{concept_id:V(`${e.other.concept}`),value_coded:V(`${e.value}`),obs_datetime:t.date}],obs_datetime:t.date}))),options:a=>Object.keys(u[e]).map((t=>({label:t,value:a[e]?.find((e=>e.label===t))?.value||"",other:{concept:u[e][t],values:[{value:"YES_ANSWER",label:"Yes"},{value:"NO_ANSWER",label:"No"}]}}))),config:{footerBtns:[{name:"None",slot:"end",onClickComponentEvents:{refreshOptions:()=>Object.keys(u[e]).map((a=>({label:a,value:"NO_ANSWER",other:{concept:u[e][a],values:[{value:"YES_ANSWER",label:"Yes"},{value:"NO_ANSWER",label:"No"}]}})))},onClick:()=>"None"}]}})))]}));async function f(e,a){await t.createEncounter(),await t.saveObservationList([...await W(a),...Object.values(s.value).flat(1).map((e=>e.other&&/drug/i.test(e.other)?{concept_id:V("DRUG_INDUCED"),value_coded:V(e.concept),value_text:"Past medication history"}:e.drug?{concept_id:V("DRUG_INDUCED"),value_coded:V(e.concept),value_drug:e.drug.drug.drug_id}:{concept_id:V("CONTRAINDICATIONS"),value_coded:V(e.concept)}))]),r()}return(e,t)=>(o(),g(c($),null,{default:d((()=>[i(F,{cancelDestinationPath:c(v),onFinishAction:f,fields:a.value,skipSummary:!0},null,8,["cancelDestinationPath","fields"])])),_:1}))}}))}}}));