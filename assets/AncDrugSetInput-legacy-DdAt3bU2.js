System.register(["./index-legacy-CNrLGT3P.js","./FieldMixin.vue_vue_type_script_lang-legacy-B1v8-yn1.js"],(function(t,e){"use strict";var i,a,n,l,s,d,u,r,o,c,h,y,f,p,v,_,q,m,b,g,w,x,F,D,E;return{setters:[t=>{i=t.d,a=t.br,n=t.aq,l=t.as,s=t.ar,d=t.bq,u=t.O,r=t.cT,o=t.F,c=t.ah,h=t.V,y=t._,f=t.r,p=t.o,v=t.c,_=t.w,q=t.A,m=t.b,b=t.x,g=t.B,w=t.y,x=t.v,F=t.a8,D=t.a9},t=>{E=t._}],execute:function(){var e=document.createElement("style");e.textContent=".his-card[data-v-d61d903b]{text-align:center;font-weight:700;border:solid 1px #ccc;height:75px;width:100%}.view-port-content[data-v-d61d903b]{height:100%}\n",document.head.appendChild(e);const C=i({components:{ViewPort:a,IonGrid:n,IonCol:l,IonRow:s,IonInput:d},mixins:[E],data:()=>({listData:[]}),watch:{listData:{handler(){this.$emit("onValue",this.listData)},deep:!0,immediate:!0}},mounted(){this.init()},activated(){this.init()},methods:{clearValue(){this.listData=this.listData.filter((t=>(t.other.frequency="",t.other.quantity="",!0)))},async init(){this.$emit("onFieldActivated",this),this.listData=await this.options(this.fdata,this.cdata,this.listData)},async launchEditor(t,e){(await u.create({component:r,backdropDismiss:!1,cssClass:"full-modal",componentProps:{dismissType:"modal",currentField:t,onFinish:e}})).present()},editFrequency(t){this.launchEditor({id:"edit_frequency",helpText:`Edit Frequency for ${t.label}`,type:o.TT_SELECT,defaultValue:()=>t.other.frequency,options:()=>c.isEmpty(this.config.drugFrequencies)?[]:this.config.drugFrequencies,validation:t=>h.required(t)},(e=>{t.other.frequency=e.value}))},editQuantity(t){this.launchEditor({id:"edit_quantity",helpText:`Edit quantity for ${t.label}`,type:o.TT_NUMBER,defaultValue:()=>t.other.quantity,validation:t=>h.required(t)},(e=>{t.other.quantity=parseInt(`${e.value}`)}))}}}),T=t=>(F("data-v-d61d903b"),t=t(),D(),t),I={class:"view-port-content"},k=T((()=>q("b",null," Drugs ",-1))),z=T((()=>q("b",null," Quantity",-1))),V=T((()=>q("b",null," Frequency ",-1))),$={class:"his-card",style:{textAlign:"left"}};t("default",y(C,[["render",function(t,e,i,a,n,l){const s=f("ion-col"),d=f("ion-row"),u=f("ion-input"),r=f("ion-grid"),o=f("view-port");return p(),v(o,null,{default:_((()=>[q("div",I,[m(r,null,{default:_((()=>[m(d,null,{default:_((()=>[m(s,{size:"6"},{default:_((()=>[k])),_:1}),m(s,{size:"3"},{default:_((()=>[z])),_:1}),m(s,{size:"3"},{default:_((()=>[V])),_:1})])),_:1}),(p(!0),b(g,null,w(t.listData,((e,i)=>(p(),v(d,{key:i},{default:_((()=>[m(s,{size:"6"},{default:_((()=>[q("div",$,x(e.label),1)])),_:2},1024),m(s,{size:"3"},{default:_((()=>[m(u,{readonly:"",value:e.other.quantity,onClick:i=>t.editQuantity(e),class:"his-card"},null,8,["value","onClick"])])),_:2},1024),m(s,{size:"3"},{default:_((()=>[m(u,{readonly:"",value:e.other.frequency,onClick:i=>t.editFrequency(e),class:"his-card"},null,8,["value","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])])),_:1})}],["__scopeId","data-v-d61d903b"]]))}}}));