System.register(["./EncounterMixin.vue_vue_type_script_lang-legacy-B7zjV7nz.js","./index-legacy-CNrLGT3P.js","./encounter_guidelines-legacy-BxkBj-oZ.js","./GuidelineEngine-legacy-KsvQuFdF.js","./HisStandardForm-legacy-OekRIZB_.js"],(function(e,t){"use strict";var i,n,s,o,a,l,r,c,u,h,d;return{setters:[e=>{i=e._},e=>{n=e.d,s=e.I,o=e.du,a=e.F,l=e._,r=e.r,c=e.o,u=e.c,h=e.w,d=e.b},null,null,null],execute:function(){const t=n({components:{IonPage:s},mixins:[i],data:()=>({service:{}}),watch:{ready:{handler(e){e&&(this.service=new o(this.patientID,this.providerID),this.fields=this.getFields())}}},methods:{async onFinish(e,t){const i=await this.resolveObs(t);await this.service.createEncounter(),await this.service.saveObservationList(i),await this.service.printSocialHistory(),this.nextTask()},getFields(){return[{id:"history",helpText:"Social history",type:a.TT_MULTI_SELECT_GRID,validation:e=>e.map((e=>""===e.value)).some(Boolean)?["Please complete selection!!"]:null,computedValue:e=>e.filter((e=>""!=e.value)).map((e=>this.service.buildValueCoded(e.other.concept,e.value))),options:()=>[{label:"Currently Smoking",value:"",other:{concept:"patient smokes",options:this.yesNoOptions()}},{label:"Currently taking alcohol",value:"",other:{concept:"Currently taking alcohol",options:this.yesNoOptions()}},{label:"Marital status",value:"",other:{concept:"Marital status",options:[this.toOption("Never Married"),this.toOption("Married"),this.toOption("Seperated"),this.toOption("Divorced")]}}]}]}}});e("default",l(t,[["render",function(e,t,i,n,s,o){const a=r("his-standard-form"),l=r("ion-page");return c(),u(l,null,{default:h((()=>[d(a,{fields:e.fields,skipSummary:!0,onFinishAction:e.onFinish,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])])),_:1})}]]))}}}));