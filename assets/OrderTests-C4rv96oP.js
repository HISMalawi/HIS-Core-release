import{d as v,d7 as b,dq as h,bp as p,br as d,O as u,as as y,ad as T,ag as S,aj as F,bk as o,ah as B,a9 as s,aa as l,bP as D,bw as g,a6 as C,ab as L,u as I,v as w}from"./index-DYyilVc9.js";import{_ as x}from"./EncounterMixin.vue_vue_type_script_lang-3aLRiEGa.js";import{L as R}from"./lab_order_service-BWeje4aQ.js";import"./encounter_guidelines-DT95fKHF.js";import"./GuidelineEngine-D6V1_Znr.js";import"./HisStandardForm-DTCBPBFW.js";const O=v({mixins:[x],data:()=>({patientID:-1,service:{},fields:[],barcode:"",activityType:"",canScanDBS:!1,isNextBtnDisabled:!0,verifyingBarcode:!1}),async created(){this.canScanDBS=await b.canScanDBS()},watch:{$route:{handler({query:e,params:t}){e&&t&&(this.patientID=t.patient_id,this.activityType=e.type,this.service=new h(this.patientID),this.fields=[this.getClinianGivenNameField(),this.getClinianFamilyNameField(),this.getFacililityLocationField(),this.getReasonForTestField(),this.getTestSpecimensField(),this.getTestSelectionField(),this.getBarcodeInput(),this.getTestCombinationField()])},immediate:!0,deep:!0}},methods:{async onSubmit(e,t){const i=await p.getConceptID("HIV viral load"),c=await p.getConceptID("Plasma");if(t.specimen.concept_id!=c){const a=t.tests.findIndex(n=>n.concept_id===i);if(a!==-1){const r=await new R(parseInt(this.patientID),this.providerID).createEncounter();if(r){const _=t.tests.splice(a,1)[0],f=this.buildLabOrders(t,_.concept_id,r),m=await d.saveOrdersArray(r.encounter_id,f);if(!m)return u("Unable to save lab orders");y.invalidate("PATIENT_LAB_ORDERS"),await T("Lab orders and encounter created!, print out your last orders?",{confirmBtnLabel:"Yes",cancelBtnLabel:"No"})&&await this.service.printSpecimenLabel(m[0].order_id),t.tests.length<=0&&this.$router.push("/patient/dashboard/".concat(this.patientID))}}}if(t.tests.length>0){const a=await this.service.placeOrder(t);a&&(await this.service.printSpecimenLabel(a[0].order_id),this.$router.push("/patient/dashboard/".concat(this.patientID)))}},buildLabOrders(e,t,i){return[{...this.barcode?{accession_number:this.barcode}:{},encounter_id:i.encounter_id,tests:[{concept_id:t}],reason_for_test_id:e.reason_for_test_id,target_lab:e.target_lab,date:S.toStandardHisFormat(F.getSessionDate()),requesting_clinician:e.requesting_clinician,specimen:{concept_id:e.specimen.concept_id}}]},async verifyingScanedBarcode(e){if(this.verifyingBarcode=!this.verifyingBarcode,this.verifyingBarcode)return!1;if((await o.create({message:"Checking ".concat(e)})).present(),this.isNextBtnDisabled=!0,!/^([A-Z]{1})?[0-9]{7,8}$/i.test("".concat(e).trim()))return u("Invalid Barcode"),this.verifyingBarcode=!1,o.getTop().then(i=>i&&o.dismiss()),!1;try{if(await d.accessionNumExists(e))u("Barcode ".concat(e," was already used"));else return this.barcode=e,this.isNextBtnDisabled=!1,!0}catch(i){B("Failed to confirm barcode "+e+", Please try again later",8e3)}this.verifyingBarcode=!1,o.getTop().then(i=>i&&o.dismiss())},getFacililityLocationField(){return{id:"target_lab",helpText:"Requesting location",type:s.TT_SELECT,defaultValue:()=>h.getLocationName(),validation:e=>l.required(e),options:(e,t="")=>D(t),computedValue:e=>e.label,config:{showKeyboard:!0,isFilterDataViaApi:!0}}},getClinianGivenNameField(){const e=g.getGivenNameField();return e.helpText="Requesting clinician - First name",e.proxyID="requesting_clinician",e.condition=()=>this.activityType==="DRAW_SAMPLES",e.appearInSummary=()=>!1,e},getClinianFamilyNameField(){const e=g.getFamilyNameField();return e.helpText="Requesting clinician - Last name",e.proxyID="requesting_clinician",e.condition=()=>this.activityType==="DRAW_SAMPLES",e.summaryMapValue=(t,i)=>({label:"Clinician name",value:"".concat(i.given_name.value," ").concat(t.value)}),e.computedValue=(t,i)=>"".concat(i.given_name.value," ").concat(t.value),e},getReasonForTestField(){return{id:"reason_for_test_id",helpText:"Reason for test",type:s.TT_SELECT,validation:e=>l.required(e),computedValue:e=>p.getCachedConceptID(e.value,!0),options:()=>[{label:"Routine",value:"Routine"},{label:"Targeted",value:"Targeted"},{label:"Confirmatory",value:"Confirmatory"},{label:"Repeat / Missing",value:"Repeat / Missing"},{label:"Stat",value:"Stat"}]}},getTestSpecimensField(){return{id:"specimen",helpText:"Select specimen",type:s.TT_SELECT,condition:()=>this.activityType==="DRAW_SAMPLES",validation:e=>l.required(e),computedValue:e=>({concept_id:e.value}),options:async()=>(await d.getSpecimens("")).map(t=>({label:t.name,value:t.concept_id})),config:{showKeyboard:!0}}},getTestSelectionField(){let e="";return{id:"tests",helpText:"Select tests",type:s.TT_GRID_SELECTOR,validation:t=>l.required(t),computedValue:t=>t.map(i=>({concept_id:i.value})),options:async(t,i,c)=>t.specimen&&t.specimen.label!=e?(e=t.specimen.label,(await d.getTestTypesBySpecimen(t.specimen.label)).map(n=>({label:n.name,value:n.concept_id,isChecked:!1,other:n}))):c}},getBarcodeInput(){return{id:"barcode",helpText:"Scan viral load barcode",type:s.TT_BARCODE,onValue:async e=>await this.verifyingScanedBarcode(e),summaryMapValue:e=>({label:"Scaned Barcode",value:e}),condition:e=>e.tests.some(t=>t.label==="HIV viral load"&&this.canScanDBS)&&e.specimen.label!=="Plasma",config:{hiddenFooterBtns:["Clear"],overrideDefaultFooterBtns:{nextBtn:{name:"Next",state:{disabled:{default:()=>this.isNextBtnDisabled}}}},showScannedBarcode:!0}}},getTestCombinationField(){return{id:"combine_tests",helpText:"Combine test(s) in one order",type:s.TT_SELECT,computedValue:e=>e.value==="Yes",condition:e=>e.tests.length>1,validation:e=>l.required(e),options:()=>this.yesNoOptions()}}}});function E(e,t,i,c,a,n){const r=L("his-standard-form");return I(),w(r,{fields:e.fields,onFinishAction:e.onSubmit},null,8,["fields","onFinishAction"])}const M=C(O,[["render",E]]);export{M as default};