import{d as W,I as j,K as z,dF as Y,F as o,H as D,ah as A,ao as X,aV as J,dG as x,ct as Q,aW as Z,bf as S,bg as ee,t as te,_ as ae,r as H,o as le,c as ne,w as ie,b as re}from"./index-BFVcutZq.js";import{P as _}from"./PersonFieldHelper-ByV868UO.js";import{H as se}from"./hts_items_given-D1O6NzGR.js";import{T as oe,K as h}from"./testKits-3Uv8EKdG.js";import{H as ue}from"./HisStandardForm-DO3sZVdL.js";import"./LocationFieldOptions-C8xpWQA4.js";import"./storage-DBvOSj8j.js";const de=W({components:{IonPage:j,HisStandardForm:ue},setup(){const V=z([E(),C(),w(),P(),R(),K(),$(),U(),L(),O(),M(),q(),...B()]),s=new se(-1),{resolveObs:k,mapStrToOptions:F}=Y();async function N(e,a){const{saveObsOffline:d,savePersonOffline:n,synchronizeRecord:i}=J(),l=n("Self test client registration",_.resolvePerson(a),[]);d({id:l,observations:await k(a,"reg"),encounterName:"Self-test kit register",encounterTypeID:s.encounterTypeID,meta:e}),i(l),X.push("/")}function y(e){var a;return((a=A.find(e.items_given_to_client||[],{label:"Self-Test Kit"}))==null?void 0:a.value)||0}function E(){return{id:"accesspoint_type",helpText:"Distribution point type",type:o.TT_SELECT,isRequired:()=>!0,finalComputedValue:e=>({tag:"reg",obs:s.buildValueCoded("HTS Access Type",e.value)}),options:()=>F(["Health Facility","Community"])}}function C(){return{id:"facility_access_points",helpText:"Health facility distribution point",type:o.TT_SELECT_GRID,isRequired:()=>!0,condition:e=>e.accesspoint_type.value==="Health Facility",summaryMapValue:e=>e,finalComputedValue:e=>({tag:"reg",obs:s.buildValueText("Location where test took place",e.value.toString())}),config:{columnsPerRow:2},options:()=>[{label:"1 | VCT",value:"VCT"},{label:"2 | ANC",value:"ANC First Visit"},{label:"3 | Inpatient",value:"Inpatient"},{label:"4 | STI",value:"STI"},{label:"5 | PMTCT-Follow-up (ANC FUP, Mat, Post-nat, BF)",value:"PMTCT FUP"},{label:"6 | Index",value:"Index"},{label:"7 | Paediatric",value:"Paediatric"},{label:"8 | VMMC",value:"VMMC"},{label:"9 | Malnutrition",value:"Malnutrition"},{label:"10 | TB",value:"TB"},{label:"11 | OPD",value:"OPD"},{label:"12 | Other PITC (PrEP, dental e.t.c)",value:"Other"},{label:"18 | SNS (Social Network Strategies)",value:"SNS"}]}}function w(){return{id:"community_access_points",helpText:"Community distribution points",type:o.TT_SELECT,condition:e=>e.accesspoint_type.value==="Community",isRequired:()=>!0,finalComputedValue:e=>({tag:"reg",obs:s.buildValueText("Location where test took place","".concat(e.value))}),options:()=>[{label:"13 | VCT",value:"VCT"},{label:"14 | Index",value:"Index"},{label:"15 | VMMC",value:"VMMC"},{label:"16 | Other",value:"Other"},{label:"17 | SNS",value:"SNS"},{label:"19 | Mobile",value:"Mobile"}]}}function P(){return{id:"gender",helpText:"Recipient's Sex",type:o.TT_SELECT,isRequired:()=>!0,finalComputedValue:e=>({person:e.value}),options:()=>[{label:"Female",value:"F"},{label:"Male",value:"M"}]}}function R(){return{id:"birthdate",helpText:"Recipient's age",type:o.TT_NUMBER,isRequired:()=>!0,validation:e=>{const a=parseInt("".concat(e.value));return/unknown/i.test("".concat(e.value))?null:a<=10||a>=125||isNaN(a)?["Invalid Age"]:null},finalComputedValue:e=>({person:{birthdate:D.estimateDateFromAge(e.value),birthdate_estimated:!0}})}}function K(){return{id:"pregnancy_status",helpText:"Pregnancy Status",type:o.TT_SELECT,isRequired:()=>!0,condition:e=>e.gender.value==="F",finalComputedValue:e=>({tag:"reg",obs:s.buildValueCoded("Pregnancy status",e.value)}),options:()=>[{label:"Non-pregnant",value:"Not Pregnant / Breastfeeding"},{label:"Pregnant",value:"Pregnant woman"},{label:"Breastfeeding",value:"Breastfeeding"}]}}function $(){return{id:"last_hiv_result",helpText:"Recipient's Last HIV Test Results",type:o.TT_SELECT,isRequired:()=>!0,finalComputedValue:e=>({tag:"reg",obs:s.buildValueCoded("Previous HIV Test Results",e.value)}),options:()=>F(["Never Tested","Negative","Positive NOT on ART","Positive on ART","Inconclusive"])}}function U(){return{id:"last_time_hiv_tested",helpText:"Time since last HIV test",type:o.TT_AGE_INPUT,condition:e=>e.last_hiv_result.value&&e.last_hiv_result.value!="Never Tested",isRequired:()=>!0,validation:(e,a)=>parseInt("".concat(e.other.value))<=0&&!/day/i.test(e.other.timeUnit)?["Enter ".concat(e.other.timeUnit," greater than zero")]:e.other.timeUnit==="Days"&&parseInt("".concat(e.other.value))>90?["Enter ".concat(e.other.timeUnit," less than 90, use Weeks Instead")]:e.other.timeUnit==="Weeks"&&parseInt("".concat(e.other.value))>12?["Enter ".concat(e.other.timeUnit," less than 12, use Months Instead")]:e.other.timeUnit==="Months"&&parseInt("".concat(e.other.value))>24?["Enter ".concat(e.other.timeUnit," less than 24, use Years Instead")]:e.other.timeUnit==="Years"&&parseInt("".concat(e.other.value))>parseInt(a.birthdate.value)?["".concat(e.label," is greater than client's age of ").concat(a.birthdate.value," Years")]:e.other.value.length>1&&e.other.value[0]==="0"?["Value ".concat(e.other.value," is invalid!")]:e.other.value.length>1&&e.other.value[0]==="0"?["Value ".concat(e.other.value," is invalid!")]:null,finalComputedValue:e=>({tag:"reg",obs:s.buildObs("Time of HIV test",{value_datetime:e.other.date,value_text:e.value})}),config:{excludeUnits:["Hours"]}}}function L(){return{id:"items_given_to_client",helpText:"Items given to the client",type:o.TT_ADHERENCE_INPUT,isRequired:()=>!0,summaryMapValue:e=>e,validation:e=>{if(e.every(l=>l.value===""))return["Values cannot be empty"];if(e.some(l=>/self-test/i.test(l.label)&&(!l.value||parseInt("".concat(l.value))<=0)))return["Please enter number of self kits to give client"];const a=3,d=99,n=99,i=5;return e.some(l=>/self-test/i.test(l.label)&&parseInt("".concat(l.value))>a)?["Cannot distribute more than ".concat(a," Self-test kits. Please adjust the number accordingly")]:e.some(l=>l.label=="Male condoms"&&parseInt("".concat(l.value))>d)?["Cannot distribute more than ".concat(d," Male Condoms. Please adjust the number accordingly")]:e.some(l=>l.label=="Female condoms"&&parseInt("".concat(l.value))>n)?["Cannot distribute more than ".concat(n," Female Condoms. Please adjust the number accordingly")]:e.some(l=>/frs/i.test(l.label.toLowerCase())&&parseInt("".concat(l.value))>i)?["Cannot distribute more than ".concat(i," FRS. Please adjust the number accordingly")]:null},options:e=>A.isEmpty(e.items_given_to_client)?[{label:"Self-Test Kit",value:""},{label:"Male condoms",value:""},{label:"Female condoms",value:""},{label:"FRS",value:""}]:e.items_given_to_client,finalComputedValue:e=>({tag:"reg",obs:e.filter(a=>a.value).map(a=>s.buildValueNumber(a.label,parseInt("".concat(a.value))))}),config:{noFloat:!0,titles:{label:"Item",value:"Quantity"}}}}function M(){const{initKits:e,getLotNo:a,getExpiryDate:d}=oe();return{id:"test_kit",helpText:"Kit information",type:o.TT_INPUT_ARRAY,config:{columns:[{label:"Kit Name"},{label:"Kit Lot No."},{label:"Kit Expiry Date"}]},init:async()=>(await e(),!0),isRequired:()=>!0,summaryMapValue:n=>{var i;return(i=n==null?void 0:n.other)==null?void 0:i.fields},validation:n=>n.map(l=>l.other.fields).some(l=>l.some(v=>v.value===""))?["Some rows are missing data"]:null,condition:()=>!a(h.HIV_SELF_KIT),defaultOutput:n=>{if(y(n)>=1&&a(h.HIV_SELF_KIT))return Array.from({length:y(n)}).map(()=>({label:h.HIV_SELF_KIT,value:a(h.HIV_SELF_KIT),other:{fields:[{label:"Kit name",value:h.HIV_SELF_KIT,other:{obs:()=>s.buildValueText("Kit name",h.HIV_SELF_KIT)}},{label:"KitLot No.",value:a(h.HIV_SELF_KIT),other:{obs:()=>s.buildValueText("Kit lot number",a(h.HIV_SELF_KIT))}},{label:"Kit Expiry date",value:d(h.HIV_SELF_KIT),other:{obs:()=>s.buildValueDate("kit expiry date",d(h.HIV_SELF_KIT))}}]}}))},finalComputedValue:n=>({obs:n.map(l=>l.other.fields).map(async l=>{const[v,...p]=l.filter(T=>typeof T.other.obs=="function").map(T=>T.other.obs(T));return{...await v,child:await Promise.all(p)}})}),options:async n=>{if(n.test_kit!=null)return n.test_kit;const i=()=>({label:"Kit Name",value:h.HIV_SELF_KIT,other:{obs:t=>s.buildValueText("Kit name",t.value),onclick:(t,r,u,g,c)=>{x({id:"name",helpText:"Kit Name",type:o.TT_TEXT,isRequired:()=>!0},f=>{t.value=f.value,u===0&&c.forEach(b=>{b.other.fields.forEach(m=>{/name/i.test(m.label)&&m.value===""&&(m.value=t.value)})})})}}}),l=()=>({label:"Kit Lot No.",value:a(h.HIV_SELF_KIT),other:{obs:t=>s.buildValueNumber("Kit lot number",t.value),onclick:(t,r,u,g,c)=>{x({id:"lot",helpText:"Enter Lot Number",type:o.TT_TEXT,isRequired:()=>!0},f=>{t.value=f.value,u===0&&c.forEach(b=>{b.other.fields.forEach(m=>{/lot/i.test(m.label)&&m.value===""&&(m.value=t.value)})})})}}}),v=()=>({label:"Kit Expiry Date",value:d(h.HIV_SELF_KIT),other:{obs:t=>s.buildValueDate("kit expiry date",t.value),onclick:(t,r,u,g,c)=>{x({id:"end_user",helpText:"Kit Expiry Date",type:o.TT_FULL_DATE,isRequired:()=>!0,validation:f=>new Date(f.label)<new Date(s.date)?["Expiry date cannot be less than current date "+Q(s.date)]:Z(f.label).diff(s.date,"month")<=2?["It's not advisable to use a test kit that will expire in less than 2 months"]:null},f=>{t.value=f.value,u===0&&c.forEach(b=>{b.other.fields.forEach(m=>{/expiry/i.test(m.label)&&m.value===""&&(m.value=t.value)})})})}}}),p=y(n),T=(t=p)=>Array.from({length:t},()=>({label:"",value:"",other:{fields:[i(),l(),v()]}}));return Array.isArray(n.test_kit)?p<n.test_kit.length?n.test_kit.slice(0,p):p>n.test_kit.length?[...n.test_kit,...T(p-n.test_kit.length)]:n.test_kit:T()}}}function O(){return{id:"self_test_kits",helpText:"Self-test kit users",type:o.TT_INPUT_ARRAY,isRequired:()=>!0,condition:e=>e.items_given_to_client.some(a=>/self-test/i.test(a.label)&&parseInt("".concat(a.value))>0),finalComputedValue:e=>({tag:"reg",obs:e.map(a=>a.other.fields).map(async a=>{const[d,...n]=a.filter(i=>typeof i.other.obs=="function").map(i=>i.other.obs(i.value,i));return{...await d,child:await Promise.all(n)}})}),summaryMapValue:e=>e.other.fields.map(a=>{var n;const d={...a};return d.label==="Age"&&((n=d==null?void 0:d.other)!=null&&n.estimate)&&(d.value="".concat(d.value," (Estimated)")),d}),config:{columns:[{label:"End-User"},{label:"Sex"},{label:"Age"},{label:"Approach"},{label:"Result"}]},validation:e=>{const a=e.map(i=>i.other.fields);return a.some(i=>{const l=i.filter(v=>v.value!="").length;return l>0&&l<4})?["Some rows have incomplete data!"]:a.some(i=>i.some(l=>l.value===""))?["Some rows are missing data"]:null},options:e=>{const a=(t,r,u,g)=>{t.forEach(c=>{var f;if(typeof((f=c==null?void 0:c.other)==null?void 0:f.broadcastlistener)=="function"){const b=c.other.broadcastlistener(r,u,g);b&&(c.value=b.value,c.disabled=b.disabled)}})},d=()=>({label:"User",value:"",other:{obs:t=>s.buildValueCoded("Self-test end user",t),onclick:async(t,r,u,g,c)=>{var m;const f=c.filter((I,G)=>G!=u),b=[];if(!/Self/.test(JSON.stringify(f))){const I=(m=e.last_hiv_result)==null?void 0:m.value;/positive/.test(I.toLowerCase())||b.push("Self")}S([...b,"Sexual partner","Caretaker for child","Other"],I=>{a(r,"User",I,t.value),t.value=I},{title:"Select End-User",preset:t!=null?t.value:"",size:"small-modal"})}}}),n=()=>({label:"Sex",value:"",other:{broadcastlistener:(t,r,u)=>{if(t==="User"){if(r==="Self")return{value:e.gender.label,disabled:!0};if(u==="Self")return{value:"",disabled:!1}}},obs:t=>s.buildValueCoded("Gender of contact",t),onclick:t=>{S(["Female","Male"],r=>t.value=r,{title:"Select sex",size:"small-modal",preset:t!=null?t.value:""})}}}),i=()=>({label:"Result",value:"N/A",other:{obs:t=>{if(t&&!/n\/a/i.test("".concat(t)))return s.buildValueCoded("Test 1",t)},onclick:(t,r)=>{S(["Negative","Positive","N/A"],u=>{a(r,"Result",u,t.value),t.value=u},{title:"Directly-assisted HIV Result"})}}}),l=()=>({label:"Age",value:"",other:{broadcastlistener:(t,r)=>{if(t==="User")return r==="Self"?{value:"".concat(e.birthdate.value),disabled:!0}:{value:"",disabled:!1}},obs:(t,r)=>{var g;const u=parseInt(t);if((g=r==null?void 0:r.other)!=null&&g.estimate)return s.buildNumericEstimate("Age of contact",u);{const c=D.estimateDateFromAge(u);return s.buildObs("Age of contact",{value_datetime:c,value_numeric:u})}},onclick:t=>{ee((r,u)=>{if(r&&parseInt("".concat(r))>=125)return t.value="",te("Age exceeds maximum human life expectancy of 124 years");t.value=r,t.other.estimate=u},{title:"Age",preset:" ",toggleButton:"Age is estimated?",noFloat:!0,strictNumbers:!0})}}}),v=()=>({label:"Approach",value:"",other:{broadcastlistener:(t,r)=>{if(t==="User")return r!="Self"?{value:"Un-assisted",disabled:!0}:{value:"",disabled:!1}},obs:t=>s.buildValueCoded("Self-test approach",t),onclick:(t,r)=>{S(["Directly-assisted","Un-assisted"],u=>{a(r,"Approach",u,t.value),t.value=u},{title:"Select approach",size:"small-modal",preset:t!=null?t.value:""})}}}),p=y(e),T=(t=p)=>Array.from({length:t},()=>({label:"item",value:"N/A",other:{fields:[d(),n(),l(),v(),i()]}}));return Array.isArray(e.self_test_kits)?p<e.self_test_kits.length?e.self_test_kits.slice(0,p):p>e.self_test_kits.length?[...e.self_test_kits,...T(p-e.self_test_kits.length)]:e.self_test_kits:T()}}}function q(){return{id:"visit_type",helpText:"Visit Type",type:o.TT_HIDDEN,isRequired:()=>!0,computedValue:e=>({tag:"reg",obs:s.buildValueCoded("Visit type","Self test distribution")})}}function B(){return[(()=>{const e=_.getGivenNameField();return e.validation=()=>!0,e.type=o.TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=_.getFamilyNameField();return e.type=o.TT_HIDDEN,e.validation=()=>!0,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=_.getHomeDistrictField();return e.type=o.TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=_.getHomeTaField();return e.type=o.TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=_.getHomeVillageField();return e.type=o.TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=_.getCurrentDistrictField();return e.type=o.TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=_.getCurrentTAfield();return e.type=o.TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=_.getCurrentVillageField();return e.type=o.TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})(),(()=>{const e=_.getCellNumberField();return e.type=o.TT_HIDDEN,e.computedValue=()=>({person:"Unknown"}),e})()]}return{onFinish:N,fields:V}}});function ce(V,s,k,F,N,y){const E=H("his-standard-form"),C=H("ion-page");return le(),ne(C,null,{default:ie(()=>[re(E,{formLabel:"Self Test Registration",fields:V.fields,onFinishAction:V.onFinish,cancelDestinationPath:"/"},null,8,["fields","onFinishAction"])]),_:1})}const ve=ae(de,[["render",ce]]);export{ve as default};