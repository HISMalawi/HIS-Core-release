import{d as c,a5 as l,a7 as n,a8 as o,a9 as u,aa as a,a6 as p,v as m,w as f,ab as s,u as _,x as h}from"./index-ATRrruTT.js";import{H as T}from"./HisStandardForm-7DlnDJZP.js";const y=c({components:{HisStandardForm:T,IonPage:l},data:()=>({fields:[]}),created(){this.fields=[this.inactivityTimeout()]},methods:{onFinish(e,t){Promise.all(Object.keys(t).map(i=>n.set(i,t[i]))).then(()=>this.$router.push("/"))},inactivityTimeout(){let e=0;return{id:o.INACTIVITY_TIMEOUT,helpText:"Specify the minutes of inactivity before logging out the user.",type:u.TT_NUMBER,init:async()=>(e=await n.get(o.INACTIVITY_TIMEOUT),!0),defaultValue:()=>e>0?e/6e4:e,computedValue:t=>parseInt("".concat(t.value))*6e4,validation:t=>a.validateSeries([()=>a.required(t),()=>a.rangeOf(t,0,1440)])}}}});function I(e,t,i,g,v,S){const r=s("his-standard-form"),d=s("ion-page");return _(),m(d,null,{default:f(()=>[h(r,{fields:e.fields,onFinishAction:e.onFinish,skipSummary:!0},null,8,["fields","onFinishAction"])]),_:1})}const V=p(y,[["render",I]]);export{V as default};