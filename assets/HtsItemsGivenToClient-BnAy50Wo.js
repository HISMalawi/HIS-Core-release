import{d as $,I as R,K as O,dF as U,F as I,n as P,ah as A,dG as x,ct as M,aW as G,bf as T,bg as q,t as j,b4 as Y,_ as z,r as C,o as B,c as W,w as X,b as J}from"./index-BFVcutZq.js";import{H as Q}from"./hts_items_given-D1O6NzGR.js";import{T as Z,K as p}from"./testKits-3Uv8EKdG.js";import{H as ee}from"./HisStandardForm-DO3sZVdL.js";const te=$({components:{IonPage:R,HisStandardForm:ee},setup(){const g=O([]),o=new Q(-1),{visitID:K,htsClient:S,getEncounter:V,saveEncounter:k,patientDashboardUrl:F}=U({onInitVisit:()=>{g.value=[w(),L(),D(),H()]}});function E(t,a){k({encounterName:"ITEMS GIVEN",encounterTypeID:o.encounterTypeID,computedData:a})}async function N(t){return await Y.getFirstValueCoded(K.value,t)||"Unknown"}function _(t){var a;return t.items_given_to_client&&Array.isArray(t.items_given_to_client)&&((a=A.find(t.items_given_to_client,{label:"Self-Test Kit"}))==null?void 0:a.value)||0}function w(){return{id:"items_given_to_client_selection",helpText:"Items given to the client",type:I.TT_ADHERENCE_INPUT,isRequired:()=>!0,appearInSummary:()=>!1,beforeNext:async t=>!(t.every(a=>a.value===""||parseInt("".concat(a.value))<=0)&&!await P("Are you sure you want to proceed without giving items to client ?")),validation:t=>t.some(l=>/self-test/i.test(l.label)&&parseInt("".concat(l.value))>3)?["Cannot distribute more than 3 Self-test kits. Please adjust the number accordingly"]:t.some(l=>/male condoms/i.test(l.label.toLowerCase())&&parseInt("".concat(l.value))>99)?["Cannot distribute more than 99 Male Condoms. Please adjust the number accordingly"]:t.some(l=>l.label=="Female condoms"&&parseInt("".concat(l.value))>99)?["Cannot distribute more than 99 Female Condoms. Please adjust the number accordingly"]:t.some(l=>/frs/i.test(l.label.toLowerCase())&&parseInt("".concat(l.value))>5)?["Cannot distribute more than 5 FRS. Please adjust the number accordingly"]:null,options:t=>A.isEmpty(t.items_given_to_client_selection)?[{label:"Self-Test Kit",value:""},{label:"Male condoms",value:""},{label:"Female condoms",value:""},{label:"FRS",value:""}]:t.items_given_to_client_selection,config:{noFloat:!0,titles:{label:"Item",value:"Quantity"}}}}function L(){return{id:"items_given_to_client",helpText:"Items given",type:I.TT_HIDDEN,summaryMapValue:t=>({label:"".concat(t.label," given"),value:t.value}),defaultValue:t=>t.items_given_to_client_selection.every(a=>a.value===""||parseInt("".concat(a.value))<=0)?{label:"No items",value:"Yes"}:t.items_given_to_client_selection.filter(a=>parseInt("".concat(a.value))>0),finalComputedValue:t=>Array.isArray(t)?{obs:t.map(a=>o.buildValueNumber(a.label,parseInt("".concat(a.value))))}:{obs:o.buildValueCoded("None","Yes")}}}function H(){const{initKits:t,getLotNo:a,getExpiryDate:c}=Z();return{id:"test_kit",helpText:"Kit information",type:I.TT_INPUT_ARRAY,config:{columns:[{label:"Kit Name"},{label:"Kit Lot No."},{label:"Kit Expiry Date"}]},init:async()=>(await t(),!0),isRequired:()=>!0,summaryMapValue:i=>{var r;return(r=i==null?void 0:i.other)==null?void 0:r.fields},validation:i=>i.map(l=>l.other.fields).some(l=>l.some(h=>h.value===""))?["Some rows are missing data"]:null,condition:i=>_(i)>=1&&!a(p.HIV_SELF_KIT),finalComputedValue:i=>({obs:i.map(l=>l.other.fields).map(async l=>{const[h,...v]=l.filter(b=>typeof b.other.obs=="function").map(b=>b.other.obs(b));return{...await h,child:await Promise.all(v)}})}),defaultOutput:i=>{if(_(i)>=1&&a(p.HIV_SELF_KIT))return Array.from({length:_(i)}).map(()=>({label:p.HIV_SELF_KIT,value:a(p.HIV_SELF_KIT),other:{fields:[{label:"Kit name",value:p.HIV_SELF_KIT,other:{obs:()=>o.buildValueText("Kit name",p.HIV_SELF_KIT)}},{label:"KitLot No.",value:a(p.HIV_SELF_KIT),other:{obs:()=>o.buildValueText("Kit lot number",a(p.HIV_SELF_KIT))}},{label:"Kit Expiry date",value:c(p.HIV_SELF_KIT),other:{obs:()=>o.buildValueDate("kit expiry date",c(p.HIV_SELF_KIT))}}]}}))},options:async i=>{if(i.test_kit!=null)return i.test_kit;const r=()=>({label:"Kit Name",value:p.HIV_SELF_KIT,other:{obs:e=>o.buildValueText("Kit name",e.value),onclick:(e,s,n,y,d)=>{x({id:"name",helpText:"Kit Name",type:I.TT_TEXT,isRequired:()=>!0},f=>{e.value=f.value,n===0&&d.forEach(u=>{u.other.fields.forEach(m=>{/name/i.test(m.label)&&m.value===""&&(m.value=e.value)})})})}}}),l=()=>({label:"Kit Lot No.",value:a(p.HIV_SELF_KIT),other:{obs:e=>o.buildValueNumber("Kit lot number",e.value),onclick:(e,s,n,y,d)=>{x({id:"lot",helpText:"Enter Lot Number",type:I.TT_TEXT,isRequired:()=>!0},f=>{e.value=f.value,n===0&&d.forEach(u=>{u.other.fields.forEach(m=>{/lot/i.test(m.label)&&m.value===""&&(m.value=e.value)})})})}}}),h=()=>({label:"Kit Expiry Date",value:c(p.HIV_SELF_KIT),other:{obs:e=>o.buildValueDate("kit expiry date",e.value),onclick:(e,s,n,y,d)=>{x({id:"end_user",helpText:"Kit Expiry Date",type:I.TT_FULL_DATE,isRequired:()=>!0,validation:f=>new Date(f.label)<new Date(o.date)?["Expiry date cannot be less than current date "+M(o.date)]:G(f.label).diff(o.date,"month")<=2?["It's not advisable to use a test kit that will expire in less than 2 months"]:null},f=>{e.value=f.value,n===0&&d.forEach(u=>{u.other.fields.forEach(m=>{/expiry/i.test(m.label)&&m.value===""&&(m.value=e.value)})})})}}}),v=_(i),b=(e=v)=>Array.from({length:e},()=>({label:"",value:"",other:{fields:[r(),l(),h()]}}));return Array.isArray(i.test_kit)?v<i.test_kit.length?i.test_kit.slice(0,v):v>i.test_kit.length?[...i.test_kit,...b(v-i.test_kit.length)]:i.test_kit:b()}}}function D(){return{id:"self_test_kits",helpText:"Self-test kit users",type:I.TT_INPUT_ARRAY,isRequired:()=>!0,condition:t=>t.items_given_to_client.some(a=>/self-test/i.test(a.label)&&parseInt("".concat(a.value))>0),finalComputedValue:t=>({obs:t.map(a=>a.other.fields).map(async a=>{const[c,...i]=a.filter(r=>typeof r.other.obs=="function").map(r=>r.other.obs(r.value,r));return{...await c,child:await Promise.all(i)}})}),summaryMapValue:t=>t.other.fields.map(a=>{var i;const c={...a};return c.label==="Age"&&((i=c==null?void 0:c.other)!=null&&i.estimate)&&(c.value="".concat(c.value," (Estimated)")),c}),validation:t=>{const a=t.map(r=>r.other.fields);return a.some(r=>{const l=r.filter(h=>h.value!="").length;return l>0&&l<4})?["Some rows have incomplete data!"]:a.some(r=>r.some(l=>l.value===""))?["Some rows are missing data"]:null},config:{columns:[{label:"End-User"},{label:"Sex"},{label:"Age"},{label:"Approach"},{label:"Result"}]},options:t=>{const a=(e,s,n,y)=>{e.forEach(d=>{var f;if(typeof((f=d==null?void 0:d.other)==null?void 0:f.broadcastlistener)=="function"){const u=d.other.broadcastlistener(s,n,y);u&&(d.value=u.value,d.disabled=u.disabled)}})},c=()=>({label:"User",value:"",other:{obs:e=>o.buildValueCoded("Self-test end user",e),onclick:async(e,s,n,y,d)=>{const f=[];if(!/Self/.test(JSON.stringify(d.filter((u,m)=>m!=n)))){const u=V("Testing"),m=u?"".concat(u==null?void 0:u.hiv_result):await N("HIV status");/positive/.test(m.toLowerCase())||f.push("Self")}T([...f,"Sexual partner","Other"],u=>{a(s,"User",u,e.value),e.value=u},{title:"Select End-User",preset:e!=null?e.value:"",size:"small-modal"})}}}),i=()=>({label:"Sex",value:"",other:{broadcastlistener:(e,s,n)=>{if(e==="User"){if(s==="Self")return{value:S.gender==="M"?"Male":"Female",disabled:!0};if(n==="Self")return{value:"",disabled:!1}}},obs:e=>o.buildValueCoded("Gender of contact",e),onclick:e=>{T(["Female","Male"],s=>e.value=s,{title:"Select sex",size:"small-modal",preset:e!=null?e.value:""})}}}),r=()=>({label:"Age",value:"",other:{broadcastlistener:(e,s)=>{if(e==="User")return s==="Self"?{value:"".concat(S.age),disabled:!0}:{value:"",disabled:!1}},obs:(e,s)=>{var y;const n=parseInt(e);return(y=s==null?void 0:s.other)!=null&&y.estimate?o.buildNumericEstimate("Age of contact",n):o.buildValueNumber("Age of contact",n)},onclick:e=>{q((s,n)=>{if(s&&parseInt("".concat(s))>=125)return e.value="",j("Age exceeds maximum human life expectancy of 124 years");e.value=s,e.other.estimate=n},{title:"Age",preset:" ",toggleButton:"Age is estimated?",noFloat:!0,strictNumbers:!0})}}}),l=()=>({label:"Approach",value:"",other:{broadcastlistener:(e,s)=>{if(e==="User")return s!="Self"?{value:"Un-assisted",disabled:!0}:{value:"",disabled:!1}},obs:e=>o.buildValueCoded("Self-test approach",e),onclick:(e,s)=>{T(["Directly-assisted","Un-assisted"],n=>{a(s,"Approach",n,e.value),e.value=n},{title:"Select approach",size:"small-modal",preset:e!=null?e.value:""})}}}),h=()=>({label:"Result",value:"N/A",other:{obs:e=>{if(e&&!/n\/a/i.test("".concat(e)))return o.buildValueCoded("Test 1",e)},onclick:(e,s)=>{T(["Negative","Positive","N/A"],n=>{a(s,"Result",n,e.value),e.value=n},{title:"Directly-assisted HIV Result"})}}}),v=_(t),b=(e=v)=>Array.from({length:e},()=>({label:"item",value:"N/A",other:{fields:[c(),i(),r(),l(),h()]}}));return Array.isArray(t.self_test_kits)?_(t)<t.self_test_kits.length?t.self_test_kits.slice(0,_(t)):_(t)>t.self_test_kits.length?[...t.self_test_kits,...b(_(t)-t.self_test_kits.length)]:t.self_test_kits:b()}}}return{patientDashboardUrl:F,onFinish:E,fields:g}}});function ae(g,o,K,S,V,k){const F=C("his-standard-form"),E=C("ion-page");return B(),W(E,null,{default:X(()=>[J(F,{formLabel:"Items Given",fields:g.fields,onFinishAction:g.onFinish,cancelDestinationPath:g.patientDashboardUrl()},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}const re=z(te,[["render",ae]]);export{re as default};