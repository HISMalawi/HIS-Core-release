import{H as u}from"./HisStandardForm-CWpBcokh.js";import{D as d}from"./drug_service-DLzaDH9F.js";import{d as p,ab as s,ac as r,de as c,aL as n,p as l,a8 as h,v as m,ad as _,u as y}from"./index-CG6KEPsv.js";const g=p({components:{HisStandardForm:u},data:()=>({fields:[],packSizes:[]}),async created(){this.fields=[{id:"drug",helpText:"Select drug",type:s.TT_SELECT,validation:e=>r.required(e),options:async(e,t="")=>(await d.getDrugs({name:t})).map(i=>({label:i.name,value:i.drug_id})),onValue:e=>(this.packSizes=c.getPackSizes(e.value),e),config:{showKeyboard:!0,isFilterDataViaApi:!0}},{id:"drug_pack_size",helpText:"Select Quantity",type:s.TT_SELECT,condition:()=>!n.isEmpty(this.packSizes),options:()=>[...this.packSizes.map(e=>({label:"".concat(e),value:e})),{label:"Other (specify)",value:"Other"}]},{id:"quantity",helpText:"Input quantity",type:s.TT_NUMBER,validation:e=>r.required(e),condition:e=>n.isEmpty(this.packSizes)||e.drug_pack_size.value.match(/other/i),config:{showKeyboard:!0}}]},methods:{async onSubmit(e){const t=n.isEmpty(this.packSizes)||e.drug_pack_size.label.includes("Other")?e.quantity.value:e.drug_pack_size.value;try{await l(e.drug.value,t),this.$router.push({path:"/"})}catch(a){console.log(a)}}}});function S(e,t,a,i,f,k){const o=_("his-standard-form");return y(),m(o,{skipSummary:!0,fields:e.fields,onOnFinish:e.onSubmit},null,8,["fields","onOnFinish"])}const b=h(g,[["render",S]]);export{b as default};