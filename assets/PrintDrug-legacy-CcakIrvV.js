System.register(["./HisStandardForm-legacy-BmDNxnlt.js","./drug_service-legacy-B0etst2g.js","./index-legacy-DDADMnop.js"],(function(e,i){"use strict";var t,a,s,n,r,d,u,c,l,o,p,h;return{setters:[e=>{t=e.H},e=>{a=e.D},e=>{s=e.d,n=e.ab,r=e.ac,d=e.de,u=e.aL,c=e.p,l=e.a8,o=e.v,p=e.ad,h=e.u}],execute:function(){const i=s({components:{HisStandardForm:t},data:()=>({fields:[],packSizes:[]}),async created(){this.fields=[{id:"drug",helpText:"Select drug",type:n.TT_SELECT,validation:e=>r.required(e),options:async(e,i="")=>(await a.getDrugs({name:i})).map((e=>({label:e.name,value:e.drug_id}))),onValue:e=>(this.packSizes=d.getPackSizes(e.value),e),config:{showKeyboard:!0,isFilterDataViaApi:!0}},{id:"drug_pack_size",helpText:"Select Quantity",type:n.TT_SELECT,condition:()=>!u.isEmpty(this.packSizes),options:()=>[...this.packSizes.map((e=>({label:`${e}`,value:e}))),{label:"Other (specify)",value:"Other"}]},{id:"quantity",helpText:"Input quantity",type:n.TT_NUMBER,validation:e=>r.required(e),condition:e=>u.isEmpty(this.packSizes)||e.drug_pack_size.value.match(/other/i),config:{showKeyboard:!0}}]},methods:{async onSubmit(e){const i=u.isEmpty(this.packSizes)||e.drug_pack_size.label.includes("Other")?e.quantity.value:e.drug_pack_size.value;try{await c(e.drug.value,i),this.$router.push({path:"/"})}catch(t){console.log(t)}}}});e("default",l(i,[["render",function(e,i,t,a,s,n){const r=p("his-standard-form");return h(),o(r,{skipSummary:!0,fields:e.fields,onOnFinish:e.onSubmit},null,8,["fields","onOnFinish"])}]]))}}}));