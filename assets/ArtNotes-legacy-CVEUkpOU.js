System.register(["./index-legacy-CNrLGT3P.js","./HisStandardForm-legacy-OekRIZB_.js","./EncounterMixin.vue_vue_type_script_lang-legacy-B7zjV7nz.js","./encounter_guidelines-legacy-BxkBj-oZ.js","./GuidelineEngine-legacy-KsvQuFdF.js"],(function(e,i){"use strict";var t,n,s,a,r,c,o,l,d,u;return{setters:[e=>{t=e.bk,n=e.d,s=e.F,a=e.V,r=e._,c=e.r,o=e.o,l=e.c},e=>{d=e.H},e=>{u=e._},null,null],execute:function(){class i extends t{constructor(e,i){super(e,105,i)}}const h=n({mixins:[u],components:{HisStandardForm:d},data:()=>({service:{}}),watch:{ready:{async handler(e){e&&(this.service=new i(this.patientID,this.providerID),this.fields=[this.notesField()])},immediate:!0}},methods:{async onFinish(e,i){await this.service.createEncounter(),await this.service.saveObservationList(await this.resolveObs(i)),this.nextTask()},notesField(){return{id:"noted",helpText:"Clinical Notes",type:s.TT_NOTE,validation:e=>a.required(e),computedValue:e=>({obs:this.service.buildValueText("Notes",e.value)})}}}});e("default",r(h,[["render",function(e,i,t,n,s,a){const r=c("his-standard-form");return o(),l(r,{fields:e.fields,onFinishAction:e.onFinish,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])}]]))}}}));