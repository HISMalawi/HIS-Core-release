import D from"./SelectMixin-BRQkL8vO.js";import{d as $,aL as u,a8 as S,ad as a,u as s,v as c,w as e,x as i,B as _,E as h,C as f,a1 as r,b0 as x,Y as p,aG as B}from"./index-CG6KEPsv.js";import"./BaseTextInput-BumvZKMF.js";import"./FieldMixin.vue_vue_type_script_lang-8lytXBXT.js";const g=$({name:"HisSelect",mixins:[D],watch:{clear(){this.clearSelection()}},mounted(){this.init()},activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this),this.listData=await this.options(this.fdata),await this.setDefaultValue()},async setDefaultValue(){if(this.defaultValue){const t=await this.defaultValue(this.fdata,this.cdata,this.selected);if(t){const o=u.find(this.listData,{label:t})||u.find(this.listData,{value:t});o&&this.onselect(o)}}},async onselect(t){if(this.selected=t.label,this.onValue&&!await this.onValue(t,this)){this.selected="";return}this.onValueUpdate&&(this.listData=await this.onValueUpdate(t,this.listData)),this.$emit("onValue",t)}}}),z=["onClick"];function E(t,o,F,H,L,N){const m=a("ion-label"),v=a("ion-item"),d=a("ion-list"),w=a("ion-col"),V=a("ion-row"),k=a("ion-grid"),b=a("view-port");return s(),c(b,null,{default:e(()=>[i(d,{class:"view-port-content"},{default:e(()=>[i(k,null,{default:e(()=>[i(V,null,{default:e(()=>[(s(!0),_(h,null,f(t.filtered,(l,y)=>(s(),c(w,{size:"4",key:y},{default:e(()=>[r("div",{class:x(["his-card clickable",{"active-card-color":t.selected===l.label}]),onClick:n=>t.onselect(l)},[i(d,null,{default:e(()=>[(s(!0),_(h,null,f(l.other.list,(n,C)=>(s(),c(v,{key:C},{default:e(()=>[i(m,null,{default:e(()=>[r("b",null,p(n.label),1)]),_:2},1024),r("span",{style:B(n.style||{})},p(n.value),5)]),_:2},1024))),128))]),_:2},1024)],10,z)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})}const M=S(g,[["render",E],["__scopeId","data-v-c5476f74"]]);export{M as default};