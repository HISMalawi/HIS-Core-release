System.register(["./index-legacy-CNrLGT3P.js","./hts_art_initiation_service-legacy-DHvKYoNz.js","./HisStandardForm-legacy-OekRIZB_.js"],(function(t,e){"use strict";var n,i,a,s,o,r,d,l,c,u,p,f,h;return{setters:[t=>{n=t.d,i=t.I,a=t.K,s=t.dF,o=t.F,r=t._,d=t.r,l=t.o,c=t.c,u=t.w,p=t.b},t=>{f=t.H},t=>{h=t.H}],execute:function(){const e=n({components:{IonPage:i,HisStandardForm:h},setup(){const t=a([]),e=new f(-1),{nextTask:n,mapStrToOptions:i,patientDashboardUrl:r}=s({onInitVisit:()=>{let n="";t.value=[{id:"linkage_code",helpText:"LINKAGE CODE",type:o.TT_TEXT_BANNER,init:async()=>(n=await e.getHtsCode(),!0),options:()=>i([n])}]}});return{patientDashboardUrl:r,nextTask:n,fields:t}}});t("default",r(e,[["render",function(t,e,n,i,a,s){const o=d("his-standard-form"),r=d("ion-page");return l(),c(r,null,{default:u((()=>[p(o,{formLabel:"View HTS Code",fields:t.fields,skipSummary:!0,onFinishAction:t.nextTask,cancelDestinationPath:t.patientDashboardUrl()},null,8,["fields","onFinishAction","cancelDestinationPath"])])),_:1})}]]))}}}));