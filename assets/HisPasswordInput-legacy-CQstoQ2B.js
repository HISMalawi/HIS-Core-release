System.register(["./index-legacy-BClzHwRE.js","./BaseTextInput-legacy-CQD8xMXf.js","./FieldMixin.vue_vue_type_script_lang-legacy-BKgLScHf.js","./main-legacy-Dbxgxdjv.js"],(function(e,s){"use strict";var a,t,o,n,r,i,l,u,c,d,p,h,v,m,w,g,y,b,I,V,f,S,k,_,x,C;return{setters:[e=>{a=e.d,t=e.ep,o=e.a2,n=e._,r=e.$,i=e.aT,l=e.aO,u=e.bN,c=e.a0,d=e.W,p=e.a1,h=e.eq,v=e.aR,m=e.a6,w=e.ab,g=e.u,y=e.B,b=e.x,I=e.w,V=e.G,f=e.E,S=e.C,k=e.Z},e=>{_=e.default},e=>{x=e._},e=>{C=e.p}],execute:function(){var s=document.createElement("style");s.textContent="#view-port[data-v-a8d4a760]{height:53vh}.view-port-content[data-v-a8d4a760]{height:80%}\n/*$vite$:1*/",document.head.appendChild(s);const $=a({components:{IonProgressBar:t,IonInput:o,IonRow:n,IonCol:r,IonGrid:i,BaseInput:_,HisKeyboard:l,ViewPort:u,IonList:c,IonItem:d,IonLabel:p},mixins:[x],data:()=>({value:"",passwordScore:0,recommendations:[],keyboard:h}),computed:{progressValue(){return this.passwordScore?this.passwordScore/5:0},progressColor(){return this.passwordScore>=3&&this.passwordScore<5?"warning":this.passwordScore>=5?"success":"danger"}},methods:{async emitValue(e){this.value=`${e.value??""}`;const s=C(this.value);if(this.passwordScore=0,this.passwordScore+=s.score,this.recommendations=s?.feedback?.suggestions??[],/^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/i.test(this.value)?this.passwordScore+=2:this.recommendations=["Password must have a combination of letters, numbers and special characters"],this.passwordScore<3)return this.$emit("onValue",null);this.$emit("onValue",e)},async onKbValue(e){await this.emitValue({label:e,value:e})},async keypress(e){const s=v(e,this.value,this.config?.casing);await this.emitValue({label:s,value:s})}},watch:{clear(){this.emitValue({})}}}),K={class:"ion-text-center"},P={style:{"list-style":"none"}};e("default",m($,[["render",function(e,s,a,t,o,n){const r=w("base-input"),i=w("ion-progress-bar"),l=w("view-port"),u=w("his-keyboard");return g(),y(f,null,[b(l,{showFull:!1},{default:I((()=>[b(r,{type:"password",value:e.value,onOnValue:e.onKbValue},null,8,["value","onOnValue"]),b(i,{color:e.progressColor,value:e.progressValue},null,8,["color","value"]),V("div",K,[V("ul",P,[(g(!0),y(f,null,S(e.recommendations,((e,s)=>(g(),y("li",{key:s},k(e),1)))),128))])])])),_:1}),b(u,{kbConfig:e.keyboard,onKeyPress:e.keypress,disabled:!1},null,8,["kbConfig","onKeyPress"])],64)}],["__scopeId","data-v-a8d4a760"]]))}}}));