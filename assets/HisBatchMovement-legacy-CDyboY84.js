System.register(["./index-legacy-DDADMnop.js","./FieldMixin.vue_vue_type_script_lang-legacy-C25ZP8FO.js","./BaseTextInput-legacy-CHY0BQz7.js"],(function(e,t){"use strict";var l,s,i,a,u,n,r,o,d,c,g,h,f,p,m,v,_,D,y,b,T,x,V,k,I,C,w;return{setters:[e=>{l=e.d,s=e.bP,i=e.aV,a=e.$,u=e._,n=e.Z,r=e.U,o=e.a0,d=e.a2,c=e.d6,g=e.dr,h=e.ab,f=e.ac,p=e.a8,m=e.ad,v=e.u,_=e.v,D=e.w,y=e.x,b=e.B,T=e.E,x=e.C,V=e.z,k=e.Y,I=e.G},e=>{C=e._},e=>{w=e.default}],execute:function(){var t=document.createElement("style");t.textContent="ion-label[data-v-549e1350]{font-weight:700}.border-right[data-v-549e1350]{border-right:solid 1px #ccc}.scroll-list[data-v-549e1350]{height:70vh;overflow:auto}.input_display[data-v-549e1350]{font-size:1.3em}\n",document.head.appendChild(t);const $=l({components:{ViewPort:s,IonGrid:i,IonList:a,IonCol:u,IonRow:n,IonItem:r,IonLabel:o,IonInput:d,HisTextInput:w},mixins:[C],data:()=>({drugs:[],selectedDrug:null}),async activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this),this.drugs=await this.options(),this.drugs.length>=1&&this.selectDrug(0)},fmtNumber:e=>c(e),getModalTitle(e){return`${e} (${this.drugs[this.selectedDrug].label})`},getDrugValue(e){return this.drugs[this.selectedDrug].other[e]},setDrugValue(e,t){this.drugs[this.selectedDrug].other[e]=t?t.value:""},enterTins(){g({id:"tins",helpText:this.getModalTitle("Enter number of tins"),type:h.TT_NUMBER,defaultValue:()=>this.getDrugValue("tins"),validation:e=>!e||e&&!e.value?null:f.validateSeries([()=>f.isNumber(e),()=>e.value<=0?["Number of tins must be greater than 1"]:null,()=>e.value>this.getDrugValue("quantity")?["You cannot dispose/relocate more than available tins"]:null])},(e=>this.setDrugValue("tins",e)))},async selectReason(){const e=this.getDrugValue("batch_number");g({id:"reason",helpText:this.getModalTitle(`Select reason for disposing/relocating Batch ${e}`),type:h.TT_SELECT,defaultValue:()=>this.getDrugValue("reason"),validation:e=>f.required(e),options:()=>this.config?.getReasons(this.drugs[this.selectedDrug],this.fdata)||[]},(e=>{this.setDrugValue("reason",e)}))},selectDrug(e){this.selectedDrug=e}},computed:{fullSelectedDrugName(){try{const[e,t,,l]=this.drugs[this.selectedDrug]?.description?.text.split("-")??"";return`${this.drugs[this.selectedDrug].label} (${e}-${t}-${l})`}catch(e){return"N/A"}},updatedDrugs(){return this.drugs.filter((e=>!!e.other?.tins&&!!e.other?.reason))}},watch:{clear(){this.drugs=this.drugs.map((e=>(e.other={...e.other,tins:null,quantity:e.current_quantity/e.pack_size||1,reason:""},e)))},drugs:{async handler(){this.$emit("onValue",this.updatedDrugs)},immediate:!0,deep:!0}}});e("default",p($,[["render",function(e,t,l,s,i,a){const u=m("his-text-input"),n=m("ion-item"),r=m("ion-list"),o=m("ion-col"),d=m("ion-label"),c=m("ion-input"),g=m("ion-row"),h=m("ion-grid"),f=m("view-port");return v(),_(f,null,{default:D((()=>[y(u,{readonly:"",value:e.fullSelectedDrugName},null,8,["value"]),y(h,{style:{background:"white"}},{default:D((()=>[y(g,null,{default:D((()=>[y(o,{size:"4",class:"border-right scroll-list"},{default:D((()=>[(v(!0),b(T,null,x(e.drugs,((t,l)=>(v(),_(r,{key:l},{default:D((()=>[y(n,{detail:"",color:l===e.selectedDrug?"secondary":"",onClick:t=>e.selectDrug(l)},{default:D((()=>[V(k(t.label),1)])),_:2},1032,["color","onClick"])])),_:2},1024)))),128))])),_:1}),y(o,null,{default:D((()=>[null!==e.selectedDrug?(v(),_(h,{key:0,class:"scroll-list"},{default:D((()=>[y(g,null,{default:D((()=>[y(o,{size:"12",class:"ion-margin-bottom"},{default:D((()=>[y(n,null,{default:D((()=>[y(d,{position:"floating"},{default:D((()=>[V("Available Tins/Pallets (pack size: "+k(e.drugs[e.selectedDrug].other?.pack_size)+"):",1)])),_:1}),y(c,{readonly:"",disabled:"",value:e.fmtNumber(e.drugs[e.selectedDrug].other?.quantity)},null,8,["value"])])),_:1})])),_:1}),y(o,{size:"12"},{default:D((()=>[y(n,null,{default:D((()=>[y(d,{position:"floating"},{default:D((()=>[V("Total Tins Relocated/Disposed")])),_:1}),y(c,{readonly:"",color:"primary",value:e.fmtNumber(e.drugs[e.selectedDrug].other?.tins||0),onClick:e.enterTins},null,8,["value","onClick"])])),_:1})])),_:1}),y(o,{size:"12"},{default:D((()=>[y(n,null,{default:D((()=>[y(d,{position:"floating"},{default:D((()=>[V("Reason for Relocating/Disposing")])),_:1}),y(c,{readonly:"",color:"primary",placeholder:"select reason",value:e.drugs[e.selectedDrug].other?.reason||"",onClick:e.selectReason},null,8,["value","onClick"])])),_:1})])),_:1})])),_:1})])),_:1})):I("",!0)])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-549e1350"]]))}}}));