System.register(["./index-legacy-CNrLGT3P.js","./hts_circumcision_service-legacy-2NgAjf66.js","./HisStandardForm-legacy-OekRIZB_.js"],(function(e,n){"use strict";var t,i,s,a,o,c,r,u,l,d,m,f,p;return{setters:[e=>{t=e.d,i=e.I,s=e.K,a=e.dF,o=e.F,c=e._,r=e.r,u=e.o,l=e.c,d=e.w,m=e.b},e=>{f=e.H},e=>{p=e.H}],execute:function(){const n=t({components:{IonPage:i,HisStandardForm:p},setup(){const e=s([]),n=new f(-1),{yesNoOptions:t,saveEncounter:i,patientDashboardUrl:c}=a({onInitVisit:()=>{e.value=[{id:"hts_male_circumcised",helpText:"Circumcision status",type:o.TT_YES_NO,isRequired:()=>!0,finalComputedValue:e=>{const t="Circumcision status";return{offlineMeta:{[t]:e},obs:n.buildValueCoded(t,e)}},options:()=>[{label:"Is client circumcised?",value:"",values:t()}]}]}});return{patientDashboardUrl:c,onFinish:function(e,t){i({encounterName:"CIRCUMCISION",encounterTypeID:n.encounterTypeID,computedData:t})},fields:e}}});e("default",c(n,[["render",function(e,n,t,i,s,a){const o=r("his-standard-form"),c=r("ion-page");return u(),l(c,null,{default:d((()=>[m(o,{formLabel:"Circumcision status",fields:e.fields,onFinishAction:e.onFinish,skipSummary:!0,cancelDestinationPath:e.patientDashboardUrl()},null,8,["fields","onFinishAction","cancelDestinationPath"])])),_:1})}]]))}}}));