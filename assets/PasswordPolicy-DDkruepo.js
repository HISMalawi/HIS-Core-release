import{d as u,a5 as c,a7 as n,a8 as s,a9 as i,aa as t,a6 as p,v as _,w as P,ab as r,u as f,x as m}from"./index-ATRrruTT.js";import{H as h}from"./HisStandardForm-7DlnDJZP.js";const y=u({components:{HisStandardForm:h,IonPage:c},data:()=>({fields:[]}),created(){this.fields=[this.enablePasswordChangePolicy(),this.setPasswordChangeInterval()]},methods:{async onFinish(a,e){await Promise.all(Object.keys(e).map(o=>n.set(o,e[o]))),this.$router.push("/")},enablePasswordChangePolicy(){let a=!1;return{id:s.PASSWORD_POLICY_ENABLED,helpText:"Password reset policy",type:i.TT_YES_NO,init:async()=>(a=await n.isProp("".concat(s.PASSWORD_POLICY_ENABLED,"=true")),!0),validation:e=>t.required(e),defaultValue:()=>a,computedValue:e=>e,options:()=>[{label:"Do you want to enable password reset policy?",values:[{label:"Yes",value:"true"},{label:"No",value:"false"}]}]}},setPasswordChangeInterval(){let a=0;return{id:s.PASSWORD_RESET_INTERVAL,helpText:"Specify number of days to reset password",type:i.TT_NUMBER,init:async()=>(a=await n.get(s.PASSWORD_RESET_INTERVAL),!0),defaultValue:()=>a,computedValue:e=>e.value,condition:e=>e[s.PASSWORD_POLICY_ENABLED]==="true",validation:e=>t.validateSeries([()=>t.required(e),()=>t.rangeOf(e,1,365)])}}}});function S(a,e,o,E,w,A){const l=r("his-standard-form"),d=r("ion-page");return f(),_(d,null,{default:P(()=>[m(l,{fields:a.fields,onFinishAction:a.onFinish,skipSummary:!0},null,8,["fields","onFinishAction"])]),_:1})}const b=p(y,[["render",S]]);export{b as default};