import{d as C,r as h,a9 as f,ae as _,aQ as l,bw as s,aL as P,aa as A,u as D,v as N,w as R,x as S,y as v,bu as y,bv as $,dZ as B,a5 as E}from"./index-ATRrruTT.js";import{H as I}from"./HisStandardForm-7DlnDJZP.js";import{u as V}from"./useEncounter-DD-d41Xj.js";import{R as g}from"./relations_service-DMiGeHCu.js";import{p as G}from"./VoidReason-CeyJ1jvr.js";import"./isEmpty-DB6b62pN.js";import"./encounter_guidelines-BqqB3D2c.js";import"./GuidelineEngine-D6V1_Znr.js";const W=C({__name:"Contacts",setup(k){const c=h([]),u=h();function b(t){const o=y(),a=y(t),n=o.diff(a,"year"),e=o.diff(a.add(n,"year"),"month"),i=o.diff(a.add(n,"year").add(e,"month"),"day");return n>0?"".concat(n," year").concat(n>1?"s":""," old"):e>0?"".concat(e," month").concat(e>1?"s":""," old"):"".concat(i," day").concat(i>1?"s":""," old")}const{patientDashboardUrl:p,patientId:F}=V((t,o,a)=>{u.value=a;const n=()=>{let e={},i=[];return{id:"contacts",helpText:"Contacts",type:f.TT_TABLE_VIEWER,onload:d=>e=d,init:async()=>(i=await a.getGuardian(),!0),options:()=>{const d=i.map(r=>["".concat(r.relation.names[0].given_name," ").concat(r.relation.names[0].family_name),r.relation.gender==="M"?"Male":"Female",b(r.relation.birthdate),{name:"Screen",type:"button",action:()=>_(r.relation.person_id,l)},{id:r.relationship_id,name:"Void",type:"button",color:"danger",action:()=>G(async x=>{await g.voidRelation(o,r.relationship_id,x),e.rows=e.rows.filter(m=>m[m.length-1].id!=r.relationship_id)})}]);return[{label:"",value:"",other:{columns:["Name","Gender","Age","Screen","Void"],rows:d}}]},config:{overrideDefaultFooterBtns:{nextBtn:{name:"Add contact"}}}}};c.value=[n(),s.getGivenNameField(),s.getFamilyNameField(),s.getGenderField(),...P(s.getDobConfig()),s.getCellNumberField(),{id:"action",helpText:"Next step:",type:f.TT_SELECT,requireNext:!1,validation:e=>A.required(e),options:()=>[{label:"Add another contact",value:1,other:{action:()=>location.reload()}},{label:"Proceed to diagnosis",value:2,other:{action:e=>_(e,l)}},{label:"Go to dashboard",value:3,other:{action:()=>l.push(p.value)}}]}]});function T(){const t=u.value.patient;return{home_district:t.person.addresses[0].address2,current_district:t.person.addresses[0].state_province,current_village:t.person.addresses[0].city_village,current_traditional_authority:t.person.addresses[0].township_division,home_village:t.person.addresses[0].neighborhood_cell,home_traditional_authority:t.person.addresses[0].county_district}}async function w(t,o){var e,i;const a=new $,n={...T(),...s.resolvePerson(o)};await a.createPerson(n),await a.createPatient(),await g.createRelation(F.value,a.personId,B.TB_CONTACT),typeof((i=(e=t.action)==null?void 0:e.other)==null?void 0:i.action)=="function"&&t.action.other.action(a.personId)}return(t,o)=>(D(),N(v(E),null,{default:R(()=>[S(I,{cancelDestinationPath:v(p),onFinishAction:w,fields:c.value,skipSummary:!0},null,8,["cancelDestinationPath","fields"])]),_:1}))}});export{W as default};