System.register(["./FieldMixin.vue_vue_type_script_lang-legacy-B8ZN9oa0.js","./index-legacy-DLdqxVnr.js"],(function(e,t){"use strict";var l,a,u,o,s,i,d,n,r,c,h,p,_,f,m,v,b,V,y,G,g,w,x,I,O;return{setters:[e=>{l=e._},e=>{a=e.d,u=e.$,o=e._,s=e.aT,i=e.a0,d=e.W,n=e.bN,r=e.df,c=e.dk,h=e.a1,p=e.aJ,_=e.a6,f=e.ab,m=e.u,v=e.v,b=e.w,V=e.G,y=e.x,G=e.B,g=e.E,w=e.C,x=e.z,I=e.Z,O=e.H}],execute:function(){var t=document.createElement("style");t.textContent="#view-port[data-v-b335083c]{height:81vh}.his-card[data-v-b335083c]{padding:.1em;height:34vh;overflow-y:scroll}\n/*$vite$:1*/",document.head.appendChild(t);const k=a({mixins:[l],components:{IonCol:u,IonRow:o,IonGrid:s,IonList:i,IonItem:d,ViewPort:n,IonRadioGroup:r,IonRadio:c,IonLabel:h},data:()=>({selected:{},listData:[]}),watch:{selected:{handler(e){p.isEmpty(e)||this.$emit("onValue",e)},immediate:!0,deep:!0},clear(){this.selected={},this.initiateList()}},methods:{init(){this.$emit("onFieldActivated",this),this.initiateList()},async initiateList(){this.listData=(await this.options(this.fdata,this.cdata)).map((e=>(e.other.subGroupOptions&&(e.other.subGroupOptionValue=null),e)))}},mounted(){this.init()},activated(){this.init()}}),L={class:"view-port-content"};e("default",_(k,[["render",function(e,t,l,a,u,o){const s=f("ion-radio"),i=f("ion-label"),d=f("ion-item"),n=f("ion-list"),r=f("ion-radio-group"),c=f("ion-col"),h=f("ion-row"),p=f("ion-grid"),_=f("view-port");return m(),v(_,null,{default:b((()=>[V("div",L,[y(p,null,{default:b((()=>[y(h,null,{default:b((()=>[y(c,null,{default:b((()=>[y(r,{modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selected=t)},{default:b((()=>[y(n,{class:"his-card"},{default:b((()=>[(m(!0),G(g,null,w(e.listData,((e,t)=>(m(),v(d,{class:"his-md-text",key:t},{default:b((()=>[y(s,{slot:"start",value:e},null,8,["value"]),y(i,null,{default:b((()=>[x(I(e.label),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1}),e.selected?.other?.options?(m(),v(c,{key:0},{default:b((()=>[y(r,{modelValue:e.selected.value,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selected.value=t)},{default:b((()=>[y(n,{class:"his-card"},{default:b((()=>[(m(!0),G(g,null,w(e.selected.other.options,((e,t)=>(m(),v(d,{class:"his-md-text",key:t},{default:b((()=>[y(s,{slot:"start",value:e.label},null,8,["value"]),y(i,null,{default:b((()=>[x(I(e.label),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1})):O("",!0)])),_:1}),e.selected?.other?.subgroupTitle?(m(),v(h,{key:0},{default:b((()=>[y(c,null,{default:b((()=>[V("h4",null,I(e.selected?.other?.subgroupTitle),1)])),_:1})])),_:1})):O("",!0),e.selected?.other?.subGroupOptions?(m(),v(h,{key:1},{default:b((()=>[y(c,null,{default:b((()=>[y(r,{modelValue:e.selected.other.subGroupOptionValue,"onUpdate:modelValue":t[2]||(t[2]=t=>e.selected.other.subGroupOptionValue=t)},{default:b((()=>[y(n,{class:"his-card"},{default:b((()=>[(m(!0),G(g,null,w(e.selected.other.subGroupOptions,((e,t)=>(m(),v(d,{class:"his-md-text",key:t},{default:b((()=>[y(s,{slot:"start",value:e},null,8,["value"]),y(i,null,{default:b((()=>[x(I(e.label),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1}),e.selected?.other?.subGroupOptionValue?.other?.options?(m(),v(c,{key:0},{default:b((()=>[y(r,{modelValue:e.selected.other.subGroupOptionValue.value,"onUpdate:modelValue":t[3]||(t[3]=t=>e.selected.other.subGroupOptionValue.value=t)},{default:b((()=>[y(n,{class:"his-card"},{default:b((()=>[(m(!0),G(g,null,w(e.selected.other.subGroupOptionValue.other.options,((e,t)=>(m(),v(d,{class:"his-md-text",key:t},{default:b((()=>[y(s,{slot:"start",value:e.label},null,8,["value"]),y(i,null,{default:b((()=>[x(I(e.label),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1})):O("",!0)])),_:1})):O("",!0)])),_:1})])])),_:1})}],["__scopeId","data-v-b335083c"]]))}}}));