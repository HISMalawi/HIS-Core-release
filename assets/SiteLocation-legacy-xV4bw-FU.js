System.register(["./index-legacy-CNrLGT3P.js","./HisStandardForm-legacy-OekRIZB_.js"],(function(e,i){"use strict";var t,n,a,s,o,l,r,d,c,h,u,m;return{setters:[e=>{t=e.d,n=e.Q,a=e.T,s=e.U,o=e.F,l=e.V,r=e.W,d=e._,c=e.r,h=e.o,u=e.c},e=>{m=e.H}],execute:function(){const i=t({components:{HisStandardForm:m},methods:{onFinish(e){const i=e.location.value;n.setHealthCenterID(i).then((()=>{a.invalidate("CURRENT_LOCATION"),s("Property set")})).then((()=>this.$router.push("/")))},async getFields(){this.fields=[{id:"location",helpText:"Please select facility name",type:o.TT_SELECT,config:{showKeyboard:!0,isFilterDataViaApi:!0},validation:e=>l.required(e),options:(e,i="")=>this.getFacilities(i)}]},getFacilities:async(e="")=>(await r.getFacilities({name:e})).map((e=>({label:e.name,value:e.location_id,other:{id:e.location_id}})))},data:()=>({val:"",fields:[]}),watch:{$route:{async handler(){this.val=await n.healthCenterID(),this.getFields()},deep:!0,immediate:!0}}});e("default",d(i,[["render",function(e,i,t,n,a,s){const o=c("his-standard-form");return h(),u(o,{fields:e.fields,onOnSubmit:e.onSubmit,onOnFinish:e.onFinish,skipSummary:!0},null,8,["fields","onOnSubmit","onOnFinish"])}]]))}}}));