import{d as R,a1 as B,ej as S,_ as z,b_ as A,$ as L,a0 as M,W as N,a6 as E,ab as s,u as l,v as _,w as n,x as i,G as a,Z as r,B as m,E as f,C as h,z as d}from"./index-DYyilVc9.js";import{_ as F}from"./FieldMixin.vue_vue_type_script_lang-D5O7Hfr7.js";const H=R({mixins:[F],components:{IonLabel:B,IonAvatar:S,IonRow:z,IonImg:A,IonCol:L,IonList:M,IonItem:N},data:()=>({listData:[],selectedResult:{}}),methods:{async init(){this.$emit("onFieldActivated",this),this.listData=await this.options(this.fdata,this),this.onSelect(this.listData[0]||{})},async onSelect(o){o&&(this.onValue&&!await this.onValue(o,this)||(this.selectedResult=o,this.$emit("onValue",o)))}},mounted(){this.init()},activated(){this.init()}}),P={class:"large-card"},T={class:"large-card"};function j(o,t,x,G,W,Z){const I=s("ion-img"),$=s("ion-avatar"),p=s("ion-label"),v=s("ion-item"),b=s("ion-list"),g=s("ion-col"),w=s("ion-row");return l(),_(w,null,{default:n(()=>[i(g,{size:"5"},{default:n(()=>[a("div",P,[a("h3",null," Matches found: ("+r(o.listData.length)+"): ",1),i(b,null,{default:n(()=>[(l(!0),m(f,null,h(o.listData,(e,c)=>(l(),_(v,{button:"",key:c,detail:!0,color:e.value===o.selectedResult.value?"light":"",onClick:u=>o.onSelect(e)},{default:n(()=>[i($,null,{default:n(()=>[i(I,{src:"/assets/images/avatar.svg"})]),_:1}),i(p,null,{default:n(()=>{var u;return[d(r(e.label)+" ",1),t[0]||(t[0]=a("br",null,null,-1)),t[1]||(t[1]=d(" Home District: ")),a("b",null,r(e.other.foundPerson.home_district),1),t[2]||(t[2]=d()),t[3]||(t[3]=a("br",null,null,-1)),t[4]||(t[4]=d(" Home TA: ")),a("b",null,r(e.other.home_traditional_authority),1),t[5]||(t[5]=d(" Score: ")),a("b",null,r(((u=e==null?void 0:e.other)==null?void 0:u.score)||"-"),1)]}),_:2},1024)]),_:2},1032,["color","onClick"]))),128))]),_:1})])]),_:1}),i(g,{size:"7"},{default:n(()=>{var e,c;return[a("div",T,[a("h1",null," Match score: "+r(((c=(e=o.selectedResult)==null?void 0:e.other)==null?void 0:c.score)||"-"),1),i(b,null,{default:n(()=>{var u,k;return[(l(!0),m(f,null,h(((k=(u=o.selectedResult)==null?void 0:u.other)==null?void 0:k.comparisons)||[],(y,C)=>(l(),_(v,{key:C,inset:"none"},{default:n(()=>[(l(!0),m(f,null,h(y,(D,V)=>(l(),_(p,{color:"danger",key:V},{default:n(()=>[a("b",null,r(D),1)]),_:2},1024))),128))]),_:2},1024))),128))]}),_:1})])]}),_:1})]),_:1})}const K=E(H,[["render",j],["__scopeId","data-v-769cbad1"]]);export{K as default};