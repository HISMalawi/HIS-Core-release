System.register(["./index-legacy-CNrLGT3P.js","./StagingMixin.vue_vue_type_script_lang-legacy-JCPn2jzt.js","./vitals_service-legacy-D9Xzeij7.js","./PersonFieldHelper-legacy-BoBLQ8TI.js","./EncounterMixin.vue_vue_type_script_lang-legacy-B7zjV7nz.js","./encounter_guidelines-legacy-BxkBj-oZ.js","./GuidelineEngine-legacy-KsvQuFdF.js","./HisStandardForm-legacy-OekRIZB_.js","./LocationFieldOptions-legacy-DJYLOgCp.js","./storage-legacy-uuFjVbAf.js"],(function(e,t){"use strict";var i,a,s,n,o,r,l,u,d,h,c,g,_,v,p,m,b,T,y,f,V,w,D,S,E,C;return{setters:[e=>{i=e.bk,a=e.d,s=e.bb,n=e.b8,o=e.T,r=e.U,l=e.aT,u=e.F,d=e.V,h=e.ah,c=e.ct,g=e.ai,_=e.H,v=e.aW,p=e.bt,m=e.cQ,b=e.t,T=e.cR,y=e.aj,f=e._,V=e.r,w=e.o,D=e.c},e=>{S=e._},e=>{E=e.V},e=>{C=e.P},null,null,null,null,null,null],execute:function(){class t extends i{constructor(e,t){super(e,9,t)}}const N=a({mixins:[S],data:()=>({registration:{},prescription:{},dispensation:{},regimens:[],customRegimens:[],htsSummaryData:null,vitals:{}}),watch:{ready:{async handler(e){e&&(this.canShowStagingFields=!1,this.registration=new t(this.patientID,this.providerID),this.vitals=new E(this.patientID,this.providerID),this.showStagingWeightChart=!1,this.fields=this.getRegistrationFields())},immediate:!0}},methods:{async onSubmit(e,t){const i={...t};if(null!=e.hts){const e=new s(this.patientID,this.providerID);await e.createEncounter(),await e.savePatientType("New patient")}if(await this.registration.createEncounter(),this.hasStaging(e)&&(await this.submitStaging(t),await this.vitals.createEncounter(),await this.vitals.saveObservationList(await this.resolveObs(i,"vitals"))),await this.registration.saveObservationList(await this.resolveObs(i,"reg")),e?.cell_phone_number?.value){const e=new n;e.setPersonID(this.patientID),await e.updatePerson(C.resolvePerson(t)),o.invalidate("ACTIVE_PATIENT")}r("Clinic registration complete!"),this.nextTask()},async HTSSummaryData(){return await l.getProgramSummary(this.patientID,18)},buildDateObs(e,t,i){let a={};return a=t.match(/unknown/i)?this.registration.buildValueText(e,"Unknown"):i?this.registration.buildValueDateEstimated(e,t):this.registration.buildValueDate(e,t),a},hasLinkageCodeField(){return{id:"has_linkage_code",helpText:"HTS Linkage code",type:u.TT_YES_NO,init:async()=>(this.htsSummaryData=await this.HTSSummaryData(),!0),isRequired:()=>!0,condition:()=>null===this.htsSummaryData,options:()=>[{label:"Does client have linkage code?",value:"",values:this.yesNoOptions()}]}},htsSerialNumber(){let e=[];return{id:"hts_serial_number",helpText:"HTS Linkage Number",type:u.TT_LINKAGE_CODE,appearInSummary:()=>null===this.htsSummaryData,validation:t=>d.validateSeries([()=>d.required(t),()=>t?.other?.isValidLinkageCode?null:(e=h.uniq(e.concat(`${t.value}`)),["Invalid Scanform linkage code"])]),condition:e=>null==this.htsSummaryData.htc_serial_number||"Yes"===e.has_linkage_code,finalComputedValue:t=>({obs:[this.registration.buildValueText("HTC Serial number",`${t.value}`),...e.map((e=>this.registration.buildValueText("Invalid",e)))]})}},htsDataHiddenField(){let e=!1,i=[];return{id:"hts",helpText:"HTS Information",type:u.TT_HIDDEN,init:async a=>{try{const s=this.htsSummaryData;if(e="Positive"===s.hiv_status,!e)return!0;const n=s.htc_serial_number??a.hts_serial_number.value;i=[{label:"HIV Status",value:s.hiv_status},{label:"Result date",value:c(s.test_result_date)},{label:"HTS Number",value:n,other:{obs:()=>this.registration.buildValueText("HTC Serial number",n)}},{label:"Confirmatory test type",value:"Rapid test",other:{obs:()=>this.registration.buildValueCoded("Confirmatory hiv test type","HIV rapid test")}},{label:"Confirmatory test date",value:c(s.hiv_status_date),other:{obs:()=>this.registration.buildValueDate("Confirmatory HIV test date",s.hiv_status_date)}},{label:"Confirmatory test location",value:t.getLocationName(),other:{obs:()=>this.registration.buildValueText("Confirmatory HIV test location",t.getLocationName())}},{label:"Received ART/Prophylaxis before?",value:s.ever_received_art,other:{obs:()=>this.registration.buildValueCoded("Ever received ART",s.ever_received_art)}},{label:"Last time taken drugs",value:c(s.last_date_taken_drugs),other:{obs:()=>this.registration.buildValueDate("Date ART last taken",s.last_date_taken_drugs),obsCondition:()=>"Yes"===s.ever_received_art}}]}catch(s){return console.error(s),!1}return!0},defaultValue:()=>i,summaryMapValue:e=>e,finalComputedValue:e=>({tag:"reg",obs:e.filter((e=>e?.other?.obs&&("function"!=typeof e.other.obsCondition||e.other.obsCondition()))).map((e=>e.other.obs()))}),condition:()=>e}},getRegistrationFields(){return[{id:"followup_agreement",helpText:"Agrees to follow-up",type:u.TT_MULTIPLE_YES_NO,summaryMapValue:({value:e,label:t})=>({value:e,label:`${t} followup`}),validation:e=>this.validateSeries([()=>d.required(e),()=>d.anyEmpty(e)]),computedValue:e=>{const t=[];return e.forEach((({label:e,value:i})=>{t.push(this.registration.buildValueCoded(e,i)),t.push(this.registration.buildValueCoded("Agrees to followup",e))})),{tag:"reg",obs:t}},options:e=>h.isEmpty(e.followup_agreement)?[{label:"Phone",value:"",other:{values:this.yesNoOptions()}},{label:"Home visit",value:"",other:{values:this.yesNoOptions()}}]:e.followup_agreement},this.hasLinkageCodeField(),this.htsSerialNumber(),this.htsDataHiddenField(),(()=>({...C.getCellNumberField(),config:{customKeyboard:[[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],[["+265","/"],["Delete"]]]},condition:e=>{const t=this.patient.getPhoneNumber();return e.followup_agreement.some((e=>"Phone"===e.label&&"Yes"===e.value&&(!t||/unknown|n\/a/i.test(t))))}}))(),{id:"received_arvs",helpText:"Ever received ARVs for treatment or prophylaxis?",type:u.TT_SELECT,computedValue:({value:e})=>({tag:"reg",obs:this.registration.buildValueCoded("Ever received ART",e)}),condition:e=>null===e.hts,validation:e=>d.required(e),options:()=>this.yesNoOptions()},...g({id:"date_last_taken_arvs",helpText:"Last taken ARVS",required:!0,minDate:()=>this.patient.getBirthdate(),maxDate:()=>this.staging.getDate(),condition:e=>"Yes"===e.received_arvs.value,estimation:{allowUnknown:!0},computeValue:(e,t)=>({date:e,tag:"reg",isEstimate:t,obs:this.buildDateObs("Date ART last taken",e,t)})}),{id:"taken_art_in_last_two_months",helpText:"Taken ARVs in the last two months?",type:u.TT_SELECT,validation:e=>d.required(e),computedValue:({value:e})=>({tag:"reg",obs:[this.registration.buildValueCoded("Has the patient taken ART in the last two months",e)]}),options:()=>this.yesNoUnknownOptions(),condition:e=>"Unknown"===e.year_date_last_taken_arvs.value},{id:"taken_art_in_last_two_weeks",helpText:"Taken ARV's in the last two weeks?",type:u.TT_SELECT,computedValue:({value:e},t)=>{let i="";const a=[];let s=-1;return"Yes"===e?s=14:"Yes"===t.taken_art_in_last_two_months.value&&(s=60),s>0&&(i=_.getDateBeforeByDays(this.registration.getDate(),s),a.push(this.registration.buildValueDateEstimated("Date ART last taken",i))),{date:i,tag:"reg",obs:[...a,this.registration.buildValueCoded("Has the patient taken ART in the last two weeks",e)]}},validation:e=>d.required(e),condition:e=>"Yes"===e.taken_art_in_last_two_months.value,options:()=>this.yesNoUnknownOptions()},{id:"ever_registered_at_art_clinic",helpText:"Ever registered at an ART clinic?",type:u.TT_SELECT,computedValue:({value:e})=>({tag:"reg",obs:this.registration.buildValueCoded("Ever registered at ART clinic",e)}),validation:e=>d.required(e),condition:e=>"Yes"===e.received_arvs.value,options:()=>this.yesNoOptions()},{id:"location_of_art_initialization",helpText:"Location of ART initiation",type:u.TT_SELECT,computedValue:({label:e})=>({tag:"reg",obs:this.registration.buildValueText("Location of ART initiation",e)}),validation:e=>d.required(e),condition:e=>"Yes"===e.ever_registered_at_art_clinic.value,options:(e,t="")=>this.getFacilities(t),config:{showKeyboard:!0,isFilterDataViaApi:!0}},...g({id:"date_started_art",helpText:"Started ART",required:!0,init:async()=>(await this.initStaging(this.patient),!0),beforeNext:e=>{const t=v(e).diff(this.patient.getBirthdate(),"years");return this.staging.setAge(t),this.stagingFacts.age=t,this.stagingFacts.ageInMonths=12*t,!0},condition:e=>"Yes"===e.ever_registered_at_art_clinic.value,minDate:()=>this.patient.getBirthdate(),maxDate:()=>this.staging.getDate(),estimation:{allowUnknown:!0,estimationFieldType:p.MONTH_ESTIMATE_FIELD},computeValue:(e,t)=>(this.staging.setDate(e),this.vitals.setDate(e),{date:e,tag:"reg",isEstimate:t,obs:this.buildDateObs("Date ART started",e,t)})}),{id:"previous_art_number",helpText:"ART number at previous location",type:u.TT_TEXT,condition:e=>"Yes"===e.ever_registered_at_art_clinic.value,computedValue:e=>({tag:"reg",obs:this.registration.buildValueText("ART number at previous location",e.value)}),validation:e=>d.required(e)},{id:"has_transfer_letter",helpText:"Has staging information?",type:u.TT_SELECT,validation:e=>d.required(e),computedValue:({value:e})=>({tag:"reg",obs:this.registration.buildValueCoded("Has transfer letter",e)}),options:()=>this.yesNoOptions(),condition:e=>"Yes"===e.ever_registered_at_art_clinic.value},{id:"height",helpText:"Height (CM)",type:u.TT_NUMBER,condition:e=>"Yes"===e.has_transfer_letter.value,computedValue:({value:e})=>({tag:"vitals",obs:this.vitals.buildValueNumber("Height",e)}),validation:e=>this.validateSeries([()=>d.required(e),()=>d.isNumber(e),()=>d.rangeOf(e,40,222)])},{id:"weight",helpText:"Weight (Kg)",type:u.TT_TEXT,unload:async(e,t,i)=>{const a=i.weight.value,s=i.height.value,n=await m.getBMI(a,s,this.patient.getGender(),this.patient.getAge());if(this.stagingFacts.bmi=n.index,!this.staging.isPedaid())return;const o=await this.patient.getMedianWeightHeight();try{this.stagingFacts.weightPercentile=parseFloat(a)/parseFloat(o.weight)*100}catch(r){this.stagingFacts.weightPercentile=0}},computedValue:({value:e})=>({tag:"vitals",obs:this.vitals.buildValueNumber("weight",e)}),condition:e=>"Yes"===e.has_transfer_letter.value,validation:e=>this.validateSeries([()=>{const t={...e,other:{modifier:"."}};return this.vitals.isNotEmptyandFloat(t)},()=>d.rangeOf(e,1,300)]),config:{customKeyboard:[[["1","2","3",""],["4","5","6",""],["7","8","9","."],["","0","",""]],[["Delete"]]]}},...this.getStagingFields(),{id:"new_cd4_percent_available",helpText:"CD4 percent available",type:u.TT_SELECT,options:()=>this.yesNoOptions(),condition:e=>"Yes"===e.has_transfer_letter.value,validation:e=>d.required(e)},{id:"cd4_percent",helpText:"CD4 Percent",type:u.TT_TEXT,condition:e=>"Yes"===e.new_cd4_percent_available.value,computedValue:({value:e})=>({tag:"staging",obs:this.registration.buildValueNumber("CD4 percent",parseInt(e.toString().substring(1)),"%")}),onValue:e=>!(e.value&&!this.staging.cd4CountIsValid(e.value)&&(b("Cd4 percentage invalid. Use one modifier or start with either of these symbols: >, < or ="),1)),validation:e=>d.required(e),config:{customKeyboard:[T,[["Delete"]]]}},{id:"type_of_confirmatory_hiv_test",helpText:"Confirmatory HIV test",type:u.TT_SELECT,validation:e=>d.required(e),condition:e=>null===e.hts,onValue:async e=>("Not done"===e.value&&await y("Reminder","UNKNOWN HIV CONFIRMATORY TEST","Please arrange for a confirmatory test",[{name:"Agreed",color:"success",slot:"start"}]),!0),computedValue:({value:e})=>({tag:"reg",obs:this.registration.buildValueCoded("Confirmatory hiv test type",e)}),options:e=>[{label:"Rapid antibody test",value:"HIV rapid test"},{label:"DNA PCR",value:"HIV DNA polymerase chain reaction"},{label:"Not done",value:"Not done",disabled:"Yes"===e.has_linkage_code}]},{id:"confirmatory_hiv_test_location",helpText:"Location of confirmatory HIV test",type:u.TT_SELECT,defaultValue:e=>"Yes"===(e.ever_registered_at_art_clinic&&e.ever_registered_at_art_clinic.value)?"":t.getLocationName(),computedValue:e=>({tag:"reg",obs:this.registration.buildValueText("Confirmatory HIV test location",e.label)}),validation:e=>d.required(e),condition:e=>"Not done"!=e.type_of_confirmatory_hiv_test.value,options:(e,t="")=>this.getFacilities(t),config:{showKeyboard:!0,isFilterDataViaApi:!0}},...g({id:"date_of_confirmatory_hiv_test",helpText:"Confirmatory HIV test",beforeNext:async(e,t)=>{if("Yes"!=t.received_arvs.value){const t=v(this.staging.getDate()).diff(e,"days");if(t>=20)return"Yes, its accurate"===await y("Data inconsistency warning",`Confirmatory Date for newly initiated ART patient is ${t} days ago`,"Are you sure this is accurate?",[{name:"No, Re-enter date",slot:"start",color:"success"},{name:"Yes, its accurate",slot:"end",color:"danger"}])}return!0},condition:e=>e.confirmatory_hiv_test_location.value,required:!0,minDate:()=>this.patient.getBirthdate(),maxDate:()=>this.staging.getDate(),estimation:{allowUnknown:!0,estimationFieldType:p.MONTH_ESTIMATE_FIELD},computeValue:(e,t)=>({date:e,tag:"reg",isEstimate:t,obs:this.buildDateObs("Confirmatory HIV test date",e,t)})}),this.getStagingSummaryField("Staging summary")]}}});e("default",f(N,[["render",function(e,t,i,a,s,n){const o=V("his-standard-form");return w(),D(o,{cancelDestinationPath:e.cancelDestination,fields:e.fields,onFinishAction:e.onSubmit},null,8,["cancelDestinationPath","fields","onFinishAction"])}]]))}}}));