System.register(["./BaseTextInput-legacy-CQD8xMXf.js","./index-legacy-BClzHwRE.js","./FieldMixin.vue_vue_type_script_lang-legacy-BKgLScHf.js"],(function(e,t){"use strict";var i,l,a,n,s,u,o,d,r,c,m,v,h,y,b,f,p,V,k,U,_,g,I;return{setters:[e=>{i=e.default},e=>{l=e.d,a=e.aO,n=e.bN,s=e.W,u=e.a0,o=e.a1,d=e.dk,r=e.df,c=e.e0,m=e.aR,v=e.a6,h=e.ab,y=e.u,b=e.B,f=e.x,p=e.w,V=e.E,k=e.C,U=e.v,_=e.z,g=e.Z},e=>{I=e._}],execute:function(){const t=l({components:{BaseInput:i,HisKeyboard:a,ViewPort:n,IonItem:s,IonList:u,IonLabel:o,IonRadio:d,IonRadioGroup:r},mixins:[I],data:()=>({value:"",selectedTimeUnit:"",timeUnits:["Hours","Days","Weeks","Months","Years"],keyboard:c}),mounted(){this.$emit("onFieldActivated",this)},activated(){this.$emit("onFieldActivated",this)},methods:{onKbValue(e){this.value=e},keypress(e){this.value=m(e,this.value)},emitValue(e,t){if(e&&t){const i=`${e} ${t}`;this.$emit("onValue",e?{label:i,value:i,other:{value:e,timeUnit:t}}:null)}else this.$emit("onValue",null)}},watch:{value(e){this.emitValue(e,this.selectedTimeUnit)},selectedTimeUnit(e){this.emitValue(this.value,e)},clear(){this.value="",this.selectedTimeUnit=""}}});e("default",v(t,[["render",function(e,t,i,l,a,n){const s=h("base-input"),u=h("ion-radio"),o=h("ion-label"),d=h("ion-item"),r=h("ion-radio-group"),c=h("ion-list"),m=h("view-port"),v=h("his-keyboard");return y(),b(V,null,[f(m,null,{default:p((()=>[f(s,{value:e.value,onOnValue:e.onKbValue},null,8,["value","onOnValue"]),f(c,{class:"view-port-content"},{default:p((()=>[f(r,{modelValue:e.selectedTimeUnit,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedTimeUnit=t)},{default:p((()=>[(y(!0),b(V,null,k(e.timeUnits,((e,t)=>(y(),U(d,{class:"his-md-text",key:t},{default:p((()=>[f(u,{slot:"start",value:e},null,8,["value"]),f(o,null,{default:p((()=>[_(g(e),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),f(v,{kbConfig:e.keyboard,onKeyPress:e.keypress},null,8,["kbConfig","onKeyPress"])],64)}]]))}}}));