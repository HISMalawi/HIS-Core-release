import{_ as h}from"./EncounterMixin.vue_vue_type_script_lang-BjcFUOZj.js";import{H as v}from"./HisStandardForm-DO3sZVdL.js";import{S as f,d as T,I as y,F as r,V as a,ah as s,t as l,n as _,q as E,_ as x,r as d,o as b,c as F,w as O,b as g}from"./index-BFVcutZq.js";import{R as u}from"./radiology_examination_service-CqEyTus9.js";import{P as R}from"./PersonFieldHelper-ByV868UO.js";import{a as S}from"./radiology_global_props-DBv8UMPe.js";import"./encounter_guidelines-fEzG7yyD.js";import"./GuidelineEngine-D6V1_Znr.js";import"./LocationFieldOptions-C8xpWQA4.js";import"./storage-DBvOSj8j.js";class p extends f{constructor(){super()}static getInternalSections(){return super.getJson("internal_sections")}static createInternalSection(t){return super.postJson("internal_sections",{name:t})}}const V=T({mixins:[h],components:{IonPage:y,HisStandardForm:v},data:()=>({service:{},examinationOptions:[],defaultExternalLocation:"",detailedExaminationOptions:[]}),watch:{ready:{handler(e){e&&(this.service=new u(this.patientID,this.providerID),this.fields.push(this.listOfRadiologyTestsField()),this.fields.push(this.examinationField()),this.fields.push(this.detailedExaminationField()),this.fields.push(this.referralTypeField()),this.fields.push(this.internalReferralField()),this.fields.push(this.externalReferralField()),this.fields.push(this.payingField()),this.fields.push(this.paymentTypeField()),this.fields.push(this.receiptField()),this.fields.push(this.paymentAmountField()),this.fields.push(this.invoiceField()),this.fields.push(this.invoiceAmountField()))},immediate:!0}},methods:{async getTestsOptions(e){return(await u.getListOfRadiologyTests(e)).map(t=>({label:t.name,value:t.concept_id}))},validateAmount(e){return e.match(/([0-9]+\\.[0-9])|Unknown$/i)?["You must enter a decimal number"]:null},async onFinish(e,t){await this.service.createEncounter();const i=await this.service.createOrder({concept_id:t.list_of_radiology_test.concept,encounter_id:this.service.encounterID,provider_id:this.providerID}),n=(await this.resolveObs(t)).map(o=>(o.order_id=i.order_id,o));await this.service.saveObservationList(n),this.service.printExamination(i.accession_number),this.gotoPatientDashboard()},listOfRadiologyTestsField(){let e=[],t=-1;return{id:"list_of_radiology_test",helpText:"Please select the type of examination",type:r.TT_SELECT,validation:i=>a.required(i),computedValue:i=>({concept:i.value,obs:this.service.buildValueCoded("RADIOLOGY TEST",i.value)}),beforeNext:async i=>(t!=i.value&&(t=i.value,this.examinationOptions=await this.getTestsOptions(i.value)),!0),options:async()=>(s.isEmpty(e)&&(e=await this.getTestsOptions("LIST OF RADIOLOGY TESTS")),e)}},examinationField(){let e=-1;return{id:"examination",helpText:"Please select the examination",type:r.TT_SELECT,validation:t=>a.required(t),computedValue:t=>({obs:this.service.buildValueCoded("Examination",t.value)}),condition:()=>!s.isEmpty(this.examinationOptions),beforeNext:async(t,i)=>(e!=i.list_of_radiology_test.value&&(e=t.value,this.detailedExaminationOptions=await this.getTestsOptions(e)),!0),options:()=>this.examinationOptions}},detailedExaminationField(){return{id:"detailed_examination",helpText:"Please select the detailed examination",type:r.TT_SELECT,condition:()=>!s.isEmpty(this.detailedExaminationOptions),computedValue:e=>({obs:this.service.buildValueCoded("Detailed examination",e.value)}),validation:e=>a.required(e),options:()=>this.detailedExaminationOptions}},referralTypeField(){return{id:"referral_type",helpText:"Please select the referral type",type:r.TT_SELECT,validation:e=>a.required(e),computedValue:e=>({obs:this.service.buildValueText("Source of referral",e.label)}),options:()=>this.mapStrToOptions(["External","Internal"])}},externalReferralField(){const e=R.getFacilityLocationField();return e.id="external_referral",e.init=async()=>(this.defaultExternalLocation=await S.defaultReferralLocation(),!0),e.defaultValue=()=>this.defaultExternalLocation,e.condition=t=>t.referral_type.value==="External",e.computedValue=t=>({obs:this.service.buildValueText("REFERRED FROM",t.label)}),e},internalReferralField(){let e=[];return{id:"referred_by",helpText:"Referred from",type:r.TT_SELECT,validation:t=>a.required(t),condition:t=>t.referral_type.value==="Internal",computedValue:t=>({obs:this.service.buildValueText("REFERRED FROM",t.label)}),options:async()=>(s.isEmpty(e)&&(e=(await p.getInternalSections()).map(t=>({value:t.id,label:"".concat(t==null?void 0:t.name).toUpperCase()}))),e),config:{showKeyboard:!0,footerBtns:[{name:"Add Referral",slot:"end",color:"success",onClick:async(t,i,n)=>{if(typeof n.filter!="string"||n.filter.length<3)return l("Please enter a valid name");if(n.filtered.some(o=>o.label.toLowerCase()===n.filter.toLowerCase()))return l("Can't add already existing referral location");if(await _("Do you want to add referral location?")){const o=await p.createInternalSection(n.filter.toUpperCase());o?(n.filter=o.name,n.listData=[{label:o.name,value:o.id},...n.listData]):E("Unable to add ".concat(n.filter))}}}]}}},payingField(){return{id:"paying",helpText:"Is this a paying patient?",type:r.TT_SELECT,computedValue:e=>({obs:this.service.buildValueCoded("PAYING",e.value)}),validation:e=>a.required(e),options:()=>this.yesNoOptions()}},paymentTypeField(){return{id:"payment_type",helpText:"Select payment method",type:r.TT_SELECT,validation:e=>a.required(e),condition:e=>e.paying.value==="Yes",computedValue:e=>({obs:this.service.buildValueCoded("PAYMENT TYPE",e.value)}),options:()=>this.mapStrToOptions(["Cash","Invoice"])}},receiptField(){return{id:"receipt_number",helpText:"Enter receipt number",type:r.TT_TEXT,condition:e=>e.payment_type.value==="Cash",computedValue:e=>({obs:this.service.buildValueText("RECEIPT NUMBER",e.value)}),validation:e=>a.validateSeries([()=>a.required(e),()=>this.validateAmount("".concat(e.value))])}},invoiceField(){return{id:"invoice_number",helpText:"Enter invoice number",type:r.TT_TEXT,computedValue:e=>({obs:this.service.buildValueText("INVOICE NUMBER",e.value)}),condition:e=>e.payment_type.value==="Invoice",validation:e=>a.required(e)}},paymentAmountField(){return{id:"payment_amount",helpText:"Enter payment amount",type:r.TT_NUMBER,condition:e=>e.receipt_number.value,computedValue:e=>({obs:this.service.buildValueNumber("PAYMENT AMOUNT",e.value)}),validation:e=>a.validateSeries([()=>a.required(e),()=>this.validateAmount("".concat(e.value))])}},invoiceAmountField(){return{id:"invoice_amount",helpText:"Enter invoice amount",type:r.TT_NUMBER,condition:e=>e.invoice_number.value,computedValue:e=>({obs:this.service.buildValueNumber("INVOICE AMOUNT",e.value)}),validation:e=>a.validateSeries([()=>a.required(e),()=>this.validateAmount("".concat(e.value))])}}}});function C(e,t,i,n,o,I){const c=d("his-standard-form"),m=d("ion-page");return b(),F(m,null,{default:O(()=>[g(c,{fields:e.fields,onFinishAction:e.onFinish,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}const Y=x(V,[["render",C]]);export{Y as default};