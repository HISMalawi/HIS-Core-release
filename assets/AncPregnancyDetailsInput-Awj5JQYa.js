import{_ as S}from"./FieldMixin.vue_vue_type_script_lang-D5O7Hfr7.js";import{d as x,W as G,a1 as P,a0 as z,S as R,a2 as W,df as q,dk as O,aT as Z,$ as j,_ as J,bN as K,cR as Q,cS as X,O as Y,aq as I,cd as ee,a6 as ae,ab as i,u as s,v as r,w as a,x as n,B as c,E as p,C as k,H as y,G as w,z as le,Z as H}from"./index-DYyilVc9.js";const te=x({name:"HisSelect",mixins:[S],components:{IonItem:G,IonLabel:P,IonList:z,IonTitle:R,IonInput:W,IonRadioGroup:q,IonRadio:O,IonGrid:Z,IonCol:j,IonRow:J,ViewPort:K},setup(){return{arrowUp:Q,arrowDown:X}},data:()=>({selected:"",listData:[]}),mounted(){this.init()},activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this),this.listData=await this.options(this.fdata),this.listData.length&&(this.selected=this.listData[0].label)},warn(e){Y(e)},async launchModal(e,o){(await I.create({component:ee,backdropDismiss:!1,cssClass:"full-modal",componentProps:{dismissType:"modal",currentField:e,onFinish:o}})).present()},async editField(e,o){const b=d=>{var u;e.value=d,typeof((u=e==null?void 0:e.field)==null?void 0:u.onValueUpdate)=="function"&&e.field.onValueUpdate(d,o)};this.launchModal(e.field,d=>{var u,v;if(!Array.isArray(d)&&d.label.match(/unknown/i)&&typeof((v=(u=e.field)==null?void 0:u.config)==null?void 0:v.onUnknownEstimateField)=="function")return this.launchModal(e.field.config.onUnknownEstimateField(),g=>b(g));b(d)})}},watch:{listData:{handler(e){typeof this.onValue=="function"&&this.onValue([...e]),this.$emit("onValue",[...e])},deep:!0}}}),ne={key:0};function se(e,o,b,d,u,v){const g=i("ion-radio"),C=i("ion-label"),V=i("ion-item"),N=i("ion-radio-group"),U=i("ion-list"),_=i("ion-col"),A=i("ion-title"),D=i("ion-row"),F=i("ion-input"),$=i("ion-grid"),B=i("view-port");return s(),r(B,null,{default:a(()=>[n($,{class:"view-port-content"},{default:a(()=>[n(D,null,{default:a(()=>[n(_,{size:"4"},{default:a(()=>[n(U,null,{default:a(()=>[n(N,{modelValue:e.selected,"onUpdate:modelValue":o[0]||(o[0]=l=>e.selected=l)},{default:a(()=>[(s(!0),c(p,null,k(e.listData,(l,f)=>(s(),r(V,{detail:"",lines:"none",class:"his-md-text his-card ion-padding",key:f},{default:a(()=>[n(g,{slot:"start",value:l.label},null,8,["value"]),n(C,{innerHTML:l.label},null,8,["innerHTML"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),n(_,null,{default:a(()=>[(s(!0),c(p,null,k(e.listData,(l,f)=>(s(),c("div",{key:f},[e.selected===l.label?(s(),c("div",ne,[(s(!0),c(p,null,k(l.other.data,(E,T)=>(s(),r($,{style:{"margin-bottom":"10px"},class:"his-card",key:T},{default:a(()=>{var L;return[(L=l==null?void 0:l.other)!=null&&L.rowTitles?(s(),r(D,{key:0,style:{background:"#F8F8F8"}},{default:a(()=>[n(_,{class:"ion-text-center"},{default:a(()=>{var t,h;return[n(A,{class:"his-md-text",innerHTML:(t=l==null?void 0:l.other)!=null&&t.rowTitles&&((h=l==null?void 0:l.other)==null?void 0:h.rowTitles[T])||""},null,8,["innerHTML"])]}),_:2},1024)]),_:2},1024)):y("",!0),o[1]||(o[1]=w("p",null,null,-1)),(s(!0),c(p,null,k(E,(t,h)=>(s(),r(D,{key:h},{default:a(()=>[n(_,null,{default:a(()=>[t.disabled?(s(),r(V,{key:0,onClick:m=>e.warn("Cannot edit ".concat(t.label)),class:"his-sm-text"},{default:a(()=>[n(C,{slot:"start"},{default:a(()=>[le(H(t.label),1)]),_:2},1024),n(F,{placeholder:"N/A",slot:"end"})]),_:2},1032,["onClick"])):y("",!0),t.disabled?y("",!0):(s(),r(V,{key:1,class:"his-sm-text",onClick:m=>e.editField(t,e.listData[f].other.data[T])},{default:a(()=>{var m,M;return[n(C,{color:(m=t==null?void 0:t.value)!=null&&m.label?"":"danger"},{default:a(()=>[w("b",null,H(t.label),1)]),_:2},1032,["color"]),n(F,{class:"his-md-text",slot:"end",readonly:!0,value:(M=t==null?void 0:t.value)==null?void 0:M.label,placeholder:"Click to edit"},null,8,["value"])]}),_:2},1032,["onClick"]))]),_:2},1024)]),_:2},1024))),128))]}),_:2},1024))),128))])):y("",!0)]))),128))]),_:1})]),_:1})]),_:1})]),_:1})}const de=ae(te,[["render",se],["__scopeId","data-v-41f94882"]]);export{de as default};