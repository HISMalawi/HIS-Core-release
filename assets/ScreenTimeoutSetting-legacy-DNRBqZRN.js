System.register(["./index-legacy-BsbMrqEO.js","./HisStandardForm-legacy-BbU4Bs9R.js"],(function(e,t){"use strict";var i,a,n,s,r,o,u,d,l,c,f,h,m;return{setters:[e=>{i=e.d,a=e.a5,n=e.a9,s=e.aa,r=e.ab,o=e.ac,u=e.a8,d=e.ad,l=e.u,c=e.v,f=e.w,h=e.x},e=>{m=e.H}],execute:function(){const t=i({components:{HisStandardForm:m,IonPage:a},data:()=>({fields:[]}),created(){this.fields=[this.inactivityTimeout()]},methods:{onFinish(e,t){Promise.all(Object.keys(t).map((e=>n.set(e,t[e])))).then((()=>this.$router.push("/")))},inactivityTimeout(){let e=0;return{id:s.INACTIVITY_TIMEOUT,helpText:"Specify the minutes of inactivity before logging out the user.",type:r.TT_NUMBER,init:async()=>(e=await n.get(s.INACTIVITY_TIMEOUT),!0),defaultValue:()=>e>0?e/6e4:e,computedValue:e=>6e4*parseInt(`${e.value}`),validation:e=>o.validateSeries([()=>o.required(e),()=>o.rangeOf(e,0,1440)])}}}});e("default",u(t,[["render",function(e,t,i,a,n,s){const r=d("his-standard-form"),o=d("ion-page");return l(),c(o,null,{default:f((()=>[h(r,{fields:e.fields,onFinishAction:e.onFinish,skipSummary:!0},null,8,["fields","onFinishAction"])])),_:1})}]]))}}}));