import{H as s}from"./HisStandardForm-DO3sZVdL.js";import{d as r,F as c,W as i,V as l,ak as d,_ as p,r as m,o as u,c as f}from"./index-BFVcutZq.js";const _=r({components:{HisStandardForm:s},data:()=>({fields:[]}),async created(){this.fields=[{id:"location",helpText:"Please select facility name",type:c.TT_SELECT,defaultValue:()=>i.getUserLocation(),validation:e=>l.required(e),options:async(e,a="")=>(await i.getFacilities({name:a})).map(o=>({label:o.name,value:o.location_id})),config:{showKeyboard:!0,isFilterDataViaApi:!0}}]},methods:{async onSubmit(e){const a=new d;try{await a.printLocation(e.location.value),this.$router.push({path:"/"})}catch(t){console.log(t)}}}});function h(e,a,t,o,y,F){const n=m("his-standard-form");return u(),f(n,{skipSummary:!0,fields:e.fields,onOnFinish:e.onSubmit},null,8,["fields","onOnFinish"])}const b=p(_,[["render",h]]);export{b as default};