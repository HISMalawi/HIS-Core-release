import{d as u,F as a,V as r,G as c,L as n,P as s,aU as h,bh as m,aT as f,ah as p,t as l,_ as g,r as y,o as b,c as T}from"./index-BFVcutZq.js";import{H as _}from"./HisStandardForm-DO3sZVdL.js";const A=u({components:{HisStandardForm:_},data:()=>({app:{},fields:[],fieldComponent:"",people:[],patient:{},assignNewARVNumber:!1,suggestedARVNumber:""}),created(){this.setApp(),this.fields=[this.getIdSelectionField(),this.getIdSearchField(),this.getARVDuplicatesField(),this.getReassignARVNumberField()]},methods:{getIdSelectionField(){return{id:"identifier_type",helpText:"Select identifier type",type:a.TT_SELECT,requireNext:!1,validation:e=>r.required(e),options:async()=>{const e=this.app.programPatientIdentifiers?Object.values(this.app.programPatientIdentifiers):[],t=await Promise.all(e.map(async i=>typeof i.visible=="function"?await i.visible():i.globalPropertySetting?await c.isProp(i.globalPropertySetting):!0));return e.filter((i,o)=>i.useForSearch&&t[o]).map(i=>({label:i.name,value:i.id,other:i}))}}},getIdSearchField(){return{id:"identifier",helpText:"Identifier",dynamicHelpText:e=>"Search by ".concat(e.identifier_type.label),type:a.TT_TEXT,validation:(e,t)=>r.validateSeries([()=>r.required(e),()=>{var i;return typeof((i=t.identifier_type.other)==null?void 0:i.validation)=="function"?t.identifier_type.other.validation(e):null}]),config:{casing:"uppercase",initialKb:e=>{var t;return((t=e.identifier_type.other)==null?void 0:t.keyboardName)||"0-9"},prependValue:e=>{var t;return((t=e.identifier_type.other)==null?void 0:t.prefix())||""}}}},getARVDuplicatesField(){return{id:"arv_duplicates",helpText:"Duplicates",dynamicHelpText:e=>"Duplicate patients with identifer ".concat(e.identifier.value),type:a.TT_DATA_TABLE,requireNext:!1,condition:async e=>await this.hasDuplicates(e)&&e.identifier_type.label==="ARV Number",config:{hiddenFooterBtns:["Clear","Finish"],columns:()=>[[n.thTxt("First Name"),n.thTxt("Family Name"),n.thTxt("Gender"),n.thDate("Birthdate"),n.thTxt("Current Village"),n.thTxt("Actions",{colspan:2})]],rows:()=>this.people.map(e=>{var i;const t=new s(e);return[n.td(t.getGivenName()),n.td(t.getFamilyName()),n.td(t.getGender()),n.tdDate((i=t.getBirthdate())==null?void 0:i.toString()),n.td(t.getCurrentVillage()),n.tdBtn("Select patient",()=>this.selectPatient(t.getID()),{style:{fontSize:"12px",textTransform:"none"}},"warning"),n.tdBtn("Re-assign identifier",()=>this.reassignARVNumber(t),{style:{fontSize:"12px",textTransform:"none"}},"danger")]})}}},getReassignARVNumberField(){return{id:"arv_number",helpText:"ART number",type:a.TT_TEXT,computedValue:({value:e})=>e,validation:e=>r.required(e),condition:()=>this.fieldComponent==="arv_number"&&this.assignNewARVNumber,defaultValue:()=>this.suggestedARVNumber,config:{initialKb:"0-9",prependValue:e=>e.identifier_type.other.prefix()}}},setApp(){const e=h.getActiveApp();e&&(this.app=e)},async hasDuplicates(e){return this.people=await s.findByOtherID(e.identifier_type.value,e.identifier.value),this.people.length>1},selectPatient(e){this.$router.push("/patients/confirm?person_id=".concat(e))},async reassignARVNumber(e){const t=await m.create({});t.present();const i=await f.getNextSuggestedARVNumber();this.suggestedARVNumber=i.arv_number.replace(/^\D+|\s/g,""),this.patient=e,this.assignNewARVNumber=!0,this.fieldComponent="arv_number",t.dismiss()},async onFinish(e){if(p.isEmpty(this.people))l("Client not found");else if(this.assignNewARVNumber&&!p.isEmpty(this.patient))try{await this.patient.updateARVNumber(e.arv_number.value),this.selectPatient(this.patient.getID())}catch(t){l("".concat(t))}else{const t=new s(this.people[0]);this.selectPatient(t.getID())}}}});function v(e,t,i,o,N,F){const d=y("his-standard-form");return b(),T(d,{formLabel:"Find Identifier",fields:e.fields,onFinishAction:e.onFinish,skipSummary:!0,activeField:e.fieldComponent},null,8,["fields","onFinishAction","activeField"])}const R=g(A,[["render",v]]);export{R as default};