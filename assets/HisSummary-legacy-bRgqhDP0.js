System.register(["./index-legacy-BClzHwRE.js","./FieldMixin.vue_vue_type_script_lang-legacy-BKgLScHf.js"],(function(t,e){"use strict";var i,a,n,l,s,o,u,d,c,r,h,m,v,p,g,w,_,b,f;return{setters:[t=>{i=t.d,a=t.a0,n=t.a1,l=t.W,s=t.aJ,o=t.a6,u=t.ab,d=t.u,c=t.v,r=t.w,h=t.x,m=t.B,v=t.E,p=t.C,g=t.z,w=t.Z,_=t.bN,b=t.G},t=>{f=t._}],execute:function(){var e=document.createElement("style");e.textContent=".view-port-content[data-v-09231a3b]{height:100%}.lb-value[data-v-09231a3b]{font-weight:700;text-align:end}.item .sc-ion-label-md-h[data-v-09231a3b]{white-space:normal}.list-md[data-v-09231a3b]{height:100%;overflow:auto}.view-port-content[data-v-623722c2]{height:100%}\n/*$vite$:1*/",document.head.appendChild(e);const D=i({props:{listData:{type:Object}},data:()=>({splitFactor:10}),components:{IonList:a,IonLabel:n,IonItem:l},computed:{singleView(){let t=this.listData?.length;return t=this.listData?.length,!(t>this.splitFactor)},multiViewSummaryItems(){const t=this.listData?.length,e=this.singleView?this.listData?.length:Math.ceil(t/2);return s.chunk(this.listData,e)}}}),y=i({components:{ViewPort:_,list:o(D,[["render",function(t,e,i,a,n,l){const s=u("ion-label"),o=u("ion-item"),_=u("ion-col"),b=u("ion-row"),f=u("ion-list");return d(),c(f,null,{default:r((()=>[h(b,null,{default:r((()=>[(d(!0),m(v,null,p(t.multiViewSummaryItems,((e,i)=>(d(),c(_,{key:i,size:t.singleView?12:6},{default:r((()=>[(d(!0),m(v,null,p(e,((t,e)=>(d(),c(o,{class:"his-sm-text",key:e},{default:r((()=>[h(s,null,{default:r((()=>[g(w(t.label),1)])),_:2},1024),h(s,{class:"lb-value",innerHTML:t.value,slot:"end"},null,8,["innerHTML"])])),_:2},1024)))),128))])),_:2},1032,["size"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-09231a3b"]])},mixins:[f],data:()=>({listData:[]}),methods:{init(){this.$emit("onFieldActivated",this),this.listData=this.options(this.fdata,this.cdata)}},mounted(){this.init()},activated(){this.init()}}),x={class:"view-port-content"};t("default",o(y,[["render",function(t,e,i,a,n,l){const s=u("list"),o=u("view-port");return d(),c(o,null,{default:r((()=>[b("div",x,[h(s,{listData:t.listData},null,8,["listData"])])])),_:1})}],["__scopeId","data-v-623722c2"]]))}}}));