System.register(["./index-legacy-BsbMrqEO.js","./HisStandardForm-legacy-BbU4Bs9R.js"],(function(e,t){"use strict";var i,a,s,r,o,l,n,u,c,d,p,v,_,y,m;return{setters:[e=>{i=e.d,a=e.a5,s=e.au,r=e.aA,o=e.aj,l=e.ab,n=e.ac,u=e.bh,c=e.a8,d=e.ad,p=e.u,v=e.v,_=e.w,y=e.x},e=>{m=e.H}],execute:function(){const t=i({components:{HisStandardForm:m,IonPage:a},data:()=>({fields:[]}),created(){this.fields=[this.selectUser(),this.selectUserActivity(),this.limitUserSelection()]},methods:{onFinish(e,t){s.invalidate("CAN_EDIT_ACTIVITIES"),s.invalidate("ART_USER_SELECTED_ACTIVITIES");const i=Object.values(t).map((e=>r.postJson("user_properties",e)));Promise.all(i).then((()=>this.$router.back())).catch((()=>o("Unable to update user activities")))},selectUser(){let e=[];return{id:"user_id",helpText:"Select Username",type:l.TT_SELECT,validation:e=>n.required(e),init:async()=>(e=await r.getAllUsers(),!0),options:()=>e.map((e=>({label:e.username,value:e.user_id,other:e}))),config:{showKeyboard:!0}}},selectUserActivity(){const e={},t=u?.getActiveApp()?.primaryPatientActivites||[];return{id:"activities",helpText:"Preset user activities",type:l.TT_MULTIPLE_SELECT,computedValue:(e,t)=>({user_id:t.user_id.value,property:"activities",property_value:e.map((e=>e.value)).join(",")}),validation:e=>n.required(e),options:async i=>{if(!e[i.user_id.value])try{e[i.user_id.value]=(await r.getJson("user_properties",{user_id:i.user_id.value,property:"activities"})).property_value}catch(a){console.warn(a)}return t.map((t=>{const a=t.workflowID||t.name;return{value:a,label:`${t.name}`.toUpperCase(),isChecked:`${e[i.user_id.value]}`.split(",").some((e=>e.toLowerCase()===a.toLowerCase())),disabled:"boolean"==typeof t.availableOnActivitySelection&&!t.availableOnActivitySelection}}))}}},limitUserSelection:()=>({id:"lock_user_to_art_activities",helpText:"Can user modify activities?",type:l.TT_SELECT,computedValue:(e,t)=>({user_id:t.user_id.value,property:"lock_user_to_art_activities",property_value:e.value}),defaultValue:async e=>{try{return(await r.getJson("user_properties",{user_id:e.user_id.value,property:"lock_user_to_art_activities"})).property_value}catch(t){console.log(t)}},validation:e=>n.required(e),options:()=>[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]})}});e("default",c(t,[["render",function(e,t,i,a,s,r){const o=d("his-standard-form"),l=d("ion-page");return p(),v(l,null,{default:_((()=>[y(o,{fields:e.fields,onFinishAction:e.onFinish,skipSummary:!0},null,8,["fields","onFinishAction"])])),_:1})}]]))}}}));