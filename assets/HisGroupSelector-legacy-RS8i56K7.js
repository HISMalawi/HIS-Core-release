System.register(["./FieldMixin.vue_vue_type_script_lang-legacy-C25ZP8FO.js","./index-legacy-DDADMnop.js"],(function(e,t){"use strict";var l,a,u,o,s,d,i,n,r,c,h,p,m,_,f,v,b,V,y,G,g,w,x,I,O;return{setters:[e=>{l=e._},e=>{a=e.d,u=e._,o=e.Z,s=e.aV,d=e.$,i=e.U,n=e.bP,r=e.dh,c=e.dm,h=e.a0,p=e.aL,m=e.a8,_=e.ad,f=e.u,v=e.v,b=e.w,V=e.a1,y=e.x,G=e.B,g=e.E,w=e.C,x=e.z,I=e.Y,O=e.G}],execute:function(){var t=document.createElement("style");t.textContent="#view-port[data-v-b335083c]{height:81vh}.his-card[data-v-b335083c]{padding:.1em;height:34vh;overflow-y:scroll}\n",document.head.appendChild(t);const k=a({mixins:[l],components:{IonCol:u,IonRow:o,IonGrid:s,IonList:d,IonItem:i,ViewPort:n,IonRadioGroup:r,IonRadio:c,IonLabel:h},data:()=>({selected:{},listData:[]}),watch:{selected:{handler(e){p.isEmpty(e)||this.$emit("onValue",e)},immediate:!0,deep:!0},clear(){this.selected={},this.initiateList()}},methods:{init(){this.$emit("onFieldActivated",this),this.initiateList()},async initiateList(){this.listData=(await this.options(this.fdata,this.cdata)).map((e=>(e.other.subGroupOptions&&(e.other.subGroupOptionValue=null),e)))}},mounted(){this.init()},activated(){this.init()}}),L={class:"view-port-content"};e("default",m(k,[["render",function(e,t,l,a,u,o){const s=_("ion-radio"),d=_("ion-label"),i=_("ion-item"),n=_("ion-list"),r=_("ion-radio-group"),c=_("ion-col"),h=_("ion-row"),p=_("ion-grid"),m=_("view-port");return f(),v(m,null,{default:b((()=>[V("div",L,[y(p,null,{default:b((()=>[y(h,null,{default:b((()=>[y(c,null,{default:b((()=>[y(r,{modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selected=t)},{default:b((()=>[y(n,{class:"his-card"},{default:b((()=>[(f(!0),G(g,null,w(e.listData,((e,t)=>(f(),v(i,{class:"his-md-text",key:t},{default:b((()=>[y(s,{slot:"start",value:e},null,8,["value"]),y(d,null,{default:b((()=>[x(I(e.label),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1}),e.selected?.other?.options?(f(),v(c,{key:0},{default:b((()=>[y(r,{modelValue:e.selected.value,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selected.value=t)},{default:b((()=>[y(n,{class:"his-card"},{default:b((()=>[(f(!0),G(g,null,w(e.selected.other.options,((e,t)=>(f(),v(i,{class:"his-md-text",key:t},{default:b((()=>[y(s,{slot:"start",value:e.label},null,8,["value"]),y(d,null,{default:b((()=>[x(I(e.label),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1})):O("",!0)])),_:1}),e.selected?.other?.subgroupTitle?(f(),v(h,{key:0},{default:b((()=>[y(c,null,{default:b((()=>[V("h4",null,I(e.selected?.other?.subgroupTitle),1)])),_:1})])),_:1})):O("",!0),e.selected?.other?.subGroupOptions?(f(),v(h,{key:1},{default:b((()=>[y(c,null,{default:b((()=>[y(r,{modelValue:e.selected.other.subGroupOptionValue,"onUpdate:modelValue":t[2]||(t[2]=t=>e.selected.other.subGroupOptionValue=t)},{default:b((()=>[y(n,{class:"his-card"},{default:b((()=>[(f(!0),G(g,null,w(e.selected.other.subGroupOptions,((e,t)=>(f(),v(i,{class:"his-md-text",key:t},{default:b((()=>[y(s,{slot:"start",value:e},null,8,["value"]),y(d,null,{default:b((()=>[x(I(e.label),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1}),e.selected?.other?.subGroupOptionValue?.other?.options?(f(),v(c,{key:0},{default:b((()=>[y(r,{modelValue:e.selected.other.subGroupOptionValue.value,"onUpdate:modelValue":t[3]||(t[3]=t=>e.selected.other.subGroupOptionValue.value=t)},{default:b((()=>[y(n,{class:"his-card"},{default:b((()=>[(f(!0),G(g,null,w(e.selected.other.subGroupOptionValue.other.options,((e,t)=>(f(),v(i,{class:"his-md-text",key:t},{default:b((()=>[y(s,{slot:"start",value:e.label},null,8,["value"]),y(d,null,{default:b((()=>[x(I(e.label),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1})):O("",!0)])),_:1})):O("",!0)])),_:1})])])),_:1})}],["__scopeId","data-v-b335083c"]]))}}}));