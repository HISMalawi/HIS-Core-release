System.register(["./BaseTextInput-legacy-B0M1JZ-n.js","./HisKeyboard-legacy-DlfcKdJX.js","./index-legacy-CNrLGT3P.js","./FieldMixin.vue_vue_type_script_lang-legacy-B1v8-yn1.js"],(function(e,t){"use strict";var a,i,l,n,s,u,o,d,h,c,r,p,y,f,v,b,m,V,g,w,_,K,k,I,x,C,D;return{setters:[e=>{a=e.default},e=>{i=e.H},e=>{l=e.d,n=e.bq,s=e.ar,u=e.as,o=e.aq,d=e.br,h=e.g,c=e.h,r=e.D,p=e.cB,y=e.ah,f=e.ap,v=e._,b=e.r,m=e.o,V=e.x,g=e.b,w=e.w,_=e.c,K=e.z,k=e.B,I=e.y,x=e.u,C=e.v},e=>{D=e._}],execute:function(){var t=document.createElement("style");t.textContent="#view-port[data-v-9ff1c3d4]{height:53vh}.view-port-content[data-v-9ff1c3d4]{height:80%}\n",document.head.appendChild(t);const j=l({components:{IonInput:n,IonRow:s,IonCol:u,IonGrid:o,BaseInput:a,HisKeyboard:i,ViewPort:d,IonList:h,IonItem:c,IonLabel:r},mixins:[D],data:()=>({value:"",prependValue:"",initalKeyboardName:"",keyboard:{},listData:[]}),computed:{inputType(){return this.config&&"inputType"in this.config?this.config.inputType:"text"}},mounted(){this.init()},activated(){this.init()},methods:{clearValue(){this.value=""},async init(){this.keyboard=this.config?.customKeyboard||p,this.initalKeyboardName="function"==typeof this.config?.initialKb?this.config?.initialKb(this.fdata,this.cdata):this.config?.initialKb||"",this.$emit("onFieldActivated",this),this.config&&this.config.prependValue&&(this.prependValue=await this.config.prependValue(this.fdata)),await this.setDefaultValue()},async setDefaultValue(){if(this.defaultValue&&!this.value){const e=await this.defaultValue(this.fdata,this.cdata);e&&(y.isPlainObject(e)?(this.emitValue(e),this.value=e.value.toString()):(this.value=e,this.emitValue({label:e,value:e})))}},async emitValue(e){if(""===e.value)return this.value="",this.$emit("onValue",null);this.onValue&&!(await this.onValue(e))||(e.value=this.prependValue?`${this.prependValue}${e.value}`:e.value,this.value=e.label,this.$emit("onValue",e))},async onselect(e){await this.emitValue(e)},async onKbValue(e){await this.emitValue({label:e,value:e})},async keypress(e){const t=f(e,this.value,this.config?.casing);await this.emitValue({label:t,value:t})}},watch:{value:{async handler(){this.options&&(this.listData=await this.options(this.fdata))},deep:!0}}});e("default",v(j,[["render",function(e,t,a,i,l,n){const s=b("ion-input"),u=b("ion-col"),o=b("base-input"),d=b("ion-row"),h=b("ion-grid"),c=b("ion-label"),r=b("ion-item"),p=b("ion-list"),y=b("view-port"),f=b("his-keyboard");return m(),V(k,null,[g(y,{showFull:!1},{default:w((()=>[g(h,null,{default:w((()=>[g(d,null,{default:w((()=>[e.prependValue?(m(),_(u,{key:0,"size-md":"4"},{default:w((()=>[g(s,{readonly:e.isReadOnly,value:e.prependValue,class:"input_display",disabled:!0},null,8,["readonly","value"])])),_:1})):K("",!0),g(u,{"size-md":""},{default:w((()=>[g(o,{type:e.inputType,value:e.value,onOnValue:e.onKbValue},null,8,["type","value","onOnValue"])])),_:1})])),_:1})])),_:1}),e.listData.length>0?(m(),_(p,{key:0,class:"view-port-content"},{default:w((()=>[(m(!0),V(k,null,I(e.listData,((t,a)=>(m(),_(r,{class:"his-md-text",button:"",key:a,onClick:a=>e.onselect(t)},{default:w((()=>[g(c,null,{default:w((()=>[x(C(t.label),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):K("",!0)])),_:1}),g(f,{initalKeyboardName:e.initalKeyboardName,kbConfig:e.keyboard,onKeyPress:e.keypress,disabled:!1},null,8,["initalKeyboardName","kbConfig","onKeyPress"])],64)}],["__scopeId","data-v-9ff1c3d4"]]))}}}));