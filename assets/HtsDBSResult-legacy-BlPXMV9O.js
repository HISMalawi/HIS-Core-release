System.register(["./EncounterMixin.vue_vue_type_script_lang-legacy-B7zjV7nz.js","./index-legacy-CNrLGT3P.js","./patient_lab_result_service-legacy-BSfbhdAA.js","./encounter_guidelines-legacy-BxkBj-oZ.js","./GuidelineEngine-legacy-KsvQuFdF.js","./HisStandardForm-legacy-OekRIZB_.js"],(function(e,t){"use strict";var s,i,a,l,r,n,o,u,d,c,h,m,p,v,_,b,y;return{setters:[e=>{s=e._},e=>{i=e.d,a=e.I,l=e.F,r=e.ah,n=e.ct,o=e.aW,u=e.ba,d=e.V,c=e.t,h=e._,m=e.r,p=e.o,v=e.c,_=e.w,b=e.b},e=>{y=e.P},null,null,null],execute:function(){const t=i({components:{IonPage:a},mixins:[s],data:()=>({lab:{},orders:[]}),watch:{ready:{async handler(e){e&&(this.lab=new y(this.patientID),this.orders=await this.lab.getTestsWithoutResults(),this.fields=[this.ordersWithoutResultsField(),this.alphaResultField(),this.resultField(),this.resultDateField()])},immediate:!0}},methods:{async onFinish(e,t){this.lab.setTestID(t.result.testID),this.lab.setResultDate(e.result_date.label),await this.lab.createEncounter(),await this.lab.createLabResult([t.result.measures]),this.nextTask()},ordersWithoutResultsField(){let e=[];return{id:"orders",helpText:"Select DBS Order",type:l.TT_SELECT,init:async()=>(e.filter((e=>/dbs/i.test(e.specimen.name)&&e.tests.some((e=>/viral load|HIV DNA polymerase chain reaction/i.test(e.name)&&null===e.result)))),!0),isRequired:()=>!0,options:e=>null!=e.orders?e.orders:this.orders.map((e=>{const t=r.find(e.tests,(e=>/viral load|HIV DNA polymerase chain reaction/i.test(e.name)));return{label:`#${e.accession_number} ${n(e.order_date)}`,value:t.concept_id,other:{testID:t.id}}}))}},resultDateField:()=>({id:"result_date",helpText:"Result date",type:l.TT_FULL_DATE,isRequired:()=>!0,condition:e=>e.orders.value,validation:(e,t)=>{const s=o(t.orders.other.order_date).format(u);return new Date(e.label)>new Date(s)?[`Result date ${e.label} cannot be greater than order date of ${s}`]:null}}),alphaResultField(){return{id:"result",helpText:"Select Test Result",type:l.TT_SELECT,group:"test_indicator",finalComputedValue:(e,t)=>({testID:t.orders.other.testID,measures:{indicator:{concept_id:t.orders.value},value:e.value,value_type:"text"}}),appearInSummary:()=>!1,validation:e=>d.required(e),condition:async()=>this.orders.filter((e=>/dbs/i.test(e.specimen.name)&&e.tests.some((e=>/HIV DNA polymerase chain reaction/i.test(e.name)&&null===e.result)))).length>0,options:()=>[{label:"Positive",value:"positive"},{label:"Negative",value:"negative"}]}},resultField(){return{id:"result",helpText:"Test result",type:l.TT_TEXT,isRequired:()=>!0,condition:()=>this.orders.filter((e=>/dbs/i.test(e.specimen.name)&&e.tests.some((e=>/viral load/i.test(e.name)&&null===e.result)))).length>0,config:{customKeyboard:[[["1","2","3"],["4","5","6","=","<",">"],["7","8","9","."],["","0",""]],[["Delete"]]]},onValue:e=>!!/^(=|<|>)([0-9]*)$/m.test(`${e.value}`)||(c("You must enter a modifer and numbers only. i.e =90 / >19 / < 750"),!1),finalComputedValue:(e,t)=>({testID:t.orders.other.testID,measures:{indicator:{concept_id:t.orders.value},value:parseInt(`${e.value}`.substring(1)),value_modifier:`${e.value}`.charAt(0),value_type:"numeric"}})}}}});e("default",h(t,[["render",function(e,t,s,i,a,l){const r=m("his-standard-form"),n=m("ion-page");return p(),v(n,null,{default:_((()=>[b(r,{formLabel:"DBS Result",fields:e.fields,onFinishAction:e.onFinish,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])])),_:1})}]]))}}}));