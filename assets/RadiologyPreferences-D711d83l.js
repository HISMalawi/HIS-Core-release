import{d as n,a5 as i,a7 as c,K as l,a9 as d,aa as f,bP as p,a6 as u,ab as o,u as _,v as m,w as h,x as L}from"./index-ATRrruTT.js";import{R,a as P}from"./radiology_global_props-DeQ74rgN.js";import{H as A}from"./HisStandardForm-7DlnDJZP.js";const F=n({components:{HisStandardForm:A,IonPage:i},data:()=>({preference:"",fields:[]}),created(){this.preference=this.$route.params.name,this.fields=[...this.defaultReferralLocation()]},methods:{async onFinish(e,a){for(const t in a)await c.set(t,a[t]),l("Property has been updated",2e3);this.$router.back()},isPreference(e){return!this.preference||e===this.preference},defaultReferralLocation(){return[{id:R.DEFAULT_REFERRAL_LOCATION,helpText:"Default external referral location",type:d.TT_SELECT,computedValue:e=>e.label,defaultValue:()=>P.defaultReferralLocation(),validation:e=>f.required(e),condition:()=>this.isPreference("default_referral_location"),options:(e,a="")=>p(a),config:{showKeyboard:!0,isFilterDataViaApi:!0}}]}}});function O(e,a,t,y,b,T){const r=o("his-standard-form"),s=o("ion-page");return _(),m(s,null,{default:h(()=>[L(r,{fields:e.fields,onFinishAction:e.onFinish,skipSummary:!0},null,8,["fields","onFinishAction"])]),_:1})}const C=u(F,[["render",O]]);export{C as default};