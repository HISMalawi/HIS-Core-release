import{d as o,a7 as i,a8 as s,as as a,bR as t,K as l,a9 as _,aa as d,a6 as A,v as p,H as E,ab as N,u as c}from"./index-ATRrruTT.js";import{H as T}from"./HisStandardForm-7DlnDJZP.js";const h=o({components:{HisStandardForm:T},methods:{onFinish(e){i.set(this.property,e.preference).then(()=>{switch(this.property){case s.DDE_ENABLED:a.invalidate("IS_DDE_ENABLED");break;case t.DRUG_MANAGEMENT:a.invalidate("IS_ART_DRUG_MANAGEMENT_ENABLED");break;case s.MILITARY_SITE:a.invalidate("IS_MILITARY_SITE");break;case t.FAST_TRACK:a.invalidate("IS_ART_FAST_TRACK_ENABLED");break;case t.HTN_ENHANCEMENT:a.invalidate("IS_ART_HTN_ENABLED");break;case t.FILING_NUMBERS:a.invalidate("IS_ART_FILING_NUMBER_ENABLED");break;case t.PILLS_REMAINING:a.invalidate("ASK_HANGING_PILLS");break;case t.THREE_HP_AUTO_SELECT:a.invalidate("ART_AUTO_3HP_SELECTION");break;case s.MALAWI_NATIONAL_ID_SCANNER_ENABLED:a.invalidate("MALAWI_NATIONAL_ID_SCANNER_ENABLED");break}l("Property set")}).then(()=>this.$router.push("/"))},async getFields(){this.fields=[{id:"preference",helpText:this.label,type:_.TT_YES_NO,defaultValue:()=>this.val,validation:e=>d.required(e),options:()=>[{label:this.label,values:[{label:"yes",value:"true"},{label:"no",value:"false"}]}]}]}},data(){return{property:null,fields:[],label:null,val:""}},watch:{$route:{async handler({query:e}){if(e.label&&e.property){try{this.val=await i.get(e.property)}catch(r){console.log("fixed global property not found error")}this.property=e.property,this.label=e.label,this.getFields()}},deep:!0,immediate:!0}}});function I(e,r,S,u,L,b){const n=N("his-standard-form");return e.fields.length>0?(c(),p(n,{key:0,fields:e.fields,onOnSubmit:e.onSubmit,onOnFinish:e.onFinish,skipSummary:!0},null,8,["fields","onOnSubmit","onOnFinish"])):E("",!0)}const R=A(h,[["render",I]]);export{R as default};