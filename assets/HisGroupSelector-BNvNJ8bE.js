import{_ as U}from"./FieldMixin.vue_vue_type_script_lang-CwvFuJwx.js";import{d as E,as as R,ar as S,aq as T,g as A,h as F,br as q,cO as z,cS as H,D as P,ah as j,_ as J,r as n,o,c as u,w as e,A as C,b as l,x as v,B as G,y,u as k,v as m,z as w}from"./index-BFVcutZq.js";const K=E({mixins:[U],components:{IonCol:R,IonRow:S,IonGrid:T,IonList:A,IonItem:F,ViewPort:q,IonRadioGroup:z,IonRadio:H,IonLabel:P},data:()=>({selected:{},listData:[]}),watch:{selected:{handler(t){j.isEmpty(t)||this.$emit("onValue",t)},immediate:!0,deep:!0},clear(){this.selected={},this.initiateList()}},methods:{clearValue(){this.selected={},this.initiateList()},init(){this.$emit("onFieldActivated",this),this.initiateList()},async initiateList(){this.listData=(await this.options(this.fdata,this.cdata)).map(t=>(t.other.subGroupOptions&&(t.other.subGroupOptionValue=null),t))}},mounted(){this.init()},activated(){this.init()}}),M={class:"view-port-content"};function Q(t,i,W,X,Y,Z){const _=n("ion-radio"),h=n("ion-label"),f=n("ion-item"),V=n("ion-list"),b=n("ion-radio-group"),c=n("ion-col"),O=n("ion-row"),D=n("ion-grid"),N=n("view-port");return o(),u(N,null,{default:e(()=>[C("div",M,[l(D,null,{default:e(()=>{var I,L,$,B;return[l(O,null,{default:e(()=>{var d,r;return[l(c,null,{default:e(()=>[l(b,{modelValue:t.selected,"onUpdate:modelValue":i[0]||(i[0]=a=>t.selected=a)},{default:e(()=>[l(V,{class:"his-card"},{default:e(()=>[(o(!0),v(G,null,y(t.listData,(a,p)=>(o(),u(f,{class:"his-md-text",key:p},{default:e(()=>[l(_,{slot:"start",value:a},null,8,["value"]),l(h,null,{default:e(()=>[k(m(a.label),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1}),(r=(d=t.selected)==null?void 0:d.other)!=null&&r.options?(o(),u(c,{key:0},{default:e(()=>[l(b,{modelValue:t.selected.value,"onUpdate:modelValue":i[1]||(i[1]=a=>t.selected.value=a)},{default:e(()=>[l(V,{class:"his-card"},{default:e(()=>[(o(!0),v(G,null,y(t.selected.other.options,(a,p)=>(o(),u(f,{class:"his-md-text",key:p},{default:e(()=>[l(_,{slot:"start",value:a.label},null,8,["value"]),l(h,null,{default:e(()=>[k(m(a.label),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1})):w("",!0)]}),_:1}),(L=(I=t.selected)==null?void 0:I.other)!=null&&L.subgroupTitle?(o(),u(O,{key:0},{default:e(()=>[l(c,null,{default:e(()=>{var d,r;return[C("h4",null,m((r=(d=t.selected)==null?void 0:d.other)==null?void 0:r.subgroupTitle),1)]}),_:1})]),_:1})):w("",!0),(B=($=t.selected)==null?void 0:$.other)!=null&&B.subGroupOptions?(o(),u(O,{key:1},{default:e(()=>{var d,r,a,p;return[l(c,null,{default:e(()=>[l(b,{modelValue:t.selected.other.subGroupOptionValue,"onUpdate:modelValue":i[2]||(i[2]=s=>t.selected.other.subGroupOptionValue=s)},{default:e(()=>[l(V,{class:"his-card"},{default:e(()=>[(o(!0),v(G,null,y(t.selected.other.subGroupOptions,(s,g)=>(o(),u(f,{class:"his-md-text",key:g},{default:e(()=>[l(_,{slot:"start",value:s},null,8,["value"]),l(h,null,{default:e(()=>[k(m(s.label),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1}),(p=(a=(r=(d=t.selected)==null?void 0:d.other)==null?void 0:r.subGroupOptionValue)==null?void 0:a.other)!=null&&p.options?(o(),u(c,{key:0},{default:e(()=>[l(b,{modelValue:t.selected.other.subGroupOptionValue.value,"onUpdate:modelValue":i[3]||(i[3]=s=>t.selected.other.subGroupOptionValue.value=s)},{default:e(()=>[l(V,{class:"his-card"},{default:e(()=>[(o(!0),v(G,null,y(t.selected.other.subGroupOptionValue.other.options,(s,g)=>(o(),u(f,{class:"his-md-text",key:g},{default:e(()=>[l(_,{slot:"start",value:s.label},null,8,["value"]),l(h,null,{default:e(()=>[k(m(s.label),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1})):w("",!0)]}),_:1})):w("",!0)]}),_:1})])]),_:1})}const te=J(K,[["render",Q],["__scopeId","data-v-ef487cb3"]]);export{te as default};