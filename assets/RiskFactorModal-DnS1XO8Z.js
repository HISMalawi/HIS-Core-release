import{bI as $,d as x,as as u,bq as _,a3 as M,W as P,R as S,U as E,S as H,a1 as R,a0 as z,X as L,ae as N,_ as O,a4 as U,aU as Y,$ as A,a8 as T,ad as n,u as r,B as p,x as o,w as t,z as i,G as m,C as q,v as h,E as G,H as j}from"./index-DrPQ21-i.js";class K extends ${constructor(a,s){super(a,30,s)}}const W=x({name:"Modal",props:{factors:{type:Object,required:!0},title:{type:String,default:""}},computed:{showManageBPButton(){return this.$route.name!="bp_management"}},created(){this.patientID=parseInt("".concat(this.$route.params.patient_id))},methods:{async postActivities(){const e=new K(this.patientID,-1);if(await e.createEncounter()){const s=await this.buildObs();await e.saveObservationList(s),await this.closeModal()}},manageBP(){this.$router.push("/art/encounters/bp_management/".concat(this.patientID))},exit(){u.dismiss([])},async closeModal(){await u.dismiss(this.riskFactors)},async buildObs(){return this.riskFactors.map(e=>{const a=e.isChecked===!0?"Yes":"No",s=_.getConceptID(a,!0);return{concept_id:_.getConceptID(e.concept,!0),value_coded:s}})}},data(){return{patientID:-1,riskFactors:[{name:"Diabetes",isChecked:!1,concept:"Diabetes"},{name:"Cronic kidney disease",isChecked:!1,concept:"CKD"},{name:"Past history of IHD or CVD",isChecked:!1,concept:"history of CVD"},{name:"First degree relative with IHD or CVD <65",isChecked:!1,concept:"relative with CVD"},{name:"Patient currently smokes",isChecked:!1,concept:"patient smokes"}]}},mounted(){this.factors.forEach(e=>{if(e.value==="Yes"){const a=this.riskFactors.findIndex(s=>s.concept===e.concept);this.riskFactors[a].isChecked=!0}})},components:{IonButton:M,IonContent:P,IonHeader:S,IonTitle:E,IonToolbar:H,IonLabel:R,IonList:z,IonItem:L,IonCheckbox:N,IonRow:O,IonFooter:U,IonGrid:Y,IonCol:A}});function X(e,a,s,f,J,Q){const k=n("ion-title"),d=n("ion-toolbar"),C=n("ion-header"),I=n("ion-label"),b=n("ion-checkbox"),g=n("ion-item"),v=n("ion-list"),w=n("ion-col"),y=n("ion-row"),D=n("ion-grid"),B=n("ion-content"),l=n("ion-button"),F=n("ion-footer");return r(),p(m,null,[o(C,null,{default:t(()=>[o(d,null,{default:t(()=>[o(k,null,{default:t(()=>[i("Risk Factors")]),_:1})]),_:1})]),_:1}),o(B,{style:{overflowY:"hidden",background:"grey"}},{default:t(()=>[o(D,null,{default:t(()=>[o(y,null,{default:t(()=>[o(w,null,{default:t(()=>[o(v,{style:{overflowY:"auto",height:"78vh"}},{default:t(()=>[(r(!0),p(m,null,q(e.riskFactors,c=>(r(),h(g,{key:c},{default:t(()=>[o(I,null,{default:t(()=>[i(G(c.name),1)]),_:2},1024),o(b,{modelValue:c.isChecked,"onUpdate:modelValue":V=>c.isChecked=V,slot:"start"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(F,null,{default:t(()=>[o(d,null,{default:t(()=>[o(l,{size:"large",onClick:e.exit,slot:"start",color:"danger"},{default:t(()=>[i(" Close ")]),_:1},8,["onClick"]),e.showManageBPButton?(r(),h(l,{key:0,size:"large",onClick:e.manageBP,slot:"start"},{default:t(()=>[i(" Manage BP ")]),_:1},8,["onClick"])):j("",!0),o(l,{size:"large",color:"success",onClick:e.postActivities,slot:"end"},{default:t(()=>[i(" Save ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}const ee=T(W,[["render",X],["__scopeId","data-v-a68c415c"]]);export{ee as R};