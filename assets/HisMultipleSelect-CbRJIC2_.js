import K from"./SelectMixin-BRQkL8vO.js";import{d as x,ae as B,am as S,aY as F,U as O,$ as P,a0 as U,aZ as y,aL as L,aT as N,cS as T,cZ as H,a8 as M,ad as i,u as o,B as c,x as l,w as n,v as h,G as u,E as r,C as k,z as C,Y as f,a1 as b}from"./index-CG6KEPsv.js";import"./BaseTextInput-BumvZKMF.js";import"./FieldMixin.vue_vue_type_script_lang-8lytXBXT.js";const Y=x({components:{IonCheckbox:B,IonText:S,IonChip:F,IonItem:O,IonList:P,IonLabel:U,IonIcon:y},data:()=>({listData:[],filter:""}),name:"HisMultipleSelect",mixins:[K],methods:{async init(){this.$emit("onFieldActivated",this),!(!L.isEmpty(this.listData)&&this.config.buildOptionsOnce)&&(this.listData=await this.options(this.fdata,this.getChecked(this.listData),this.cdata,this.listData),this.$emit("onValue",this.getChecked(this.listData)))},async onselect(e){var s;if(setTimeout(()=>this.filter="",30),typeof((s=e==null?void 0:e.other)==null?void 0:s.onEvent)=="function"&&await e.other.onEvent(e.isChecked),this.onValue&&e.isChecked&&!await this.onValue(e,this.fdata,this.cdata)){e.isChecked=!1;return}this.updateParent(e)},async updateParent(e){this.onValueUpdate&&(this.listData=await this.onValueUpdate([...this.listData],e,this.fdata,this.cdata)),this.$emit("onValue",this.getChecked(this.listData))},onKbValue(e){this.filter=e},keypress(e){this.filter=N(e,this.filter)},uncheck(e){let s=null;this.listData.forEach(a=>{a.label===e&&!a.disabled&&(s=a,a.isChecked=!1)}),this.updateParent(s)},getChecked(e){return e.filter(s=>s.isChecked)},isDescription(e,s=!1){return e?e!=null&&e.show?e.show==="onChecked"&&s||e.show==="always":!0:!1}},computed:{closeIcon:()=>T,listValues(){return this.filter?new H(this.listData,{threshold:.3,keys:["label"],useExtendedSearch:!0}).search(this.filter).map(s=>s.item):this.listData},checkedItems(){return this.getChecked(this.listData)}},watch:{clear(){this.listData.forEach(e=>e.isChecked=!1)},footerButtonEvent:{async handler(e){var s,a;e&&typeof((s=e.onClickComponentEvents)==null?void 0:s.refreshOptions)=="function"&&(this.listData=await((a=e.onClickComponentEvents)==null?void 0:a.refreshOptions(e,this.listData,this.fdata,this.cdata)),this.$emit("onValue",this.getChecked(this.listData)))},deep:!0,immediate:!0}},mounted(){this.init()},activated(){this.init()}});function Z(e,s,a,z,A,G){const _=i("his-text-input"),w=i("ion-icon"),D=i("ion-chip"),V=i("ion-checkbox"),p=i("ion-text"),I=i("ion-label"),g=i("ion-item"),v=i("ion-list"),E=i("view-port"),$=i("his-keyboard");return o(),c(r,null,[l(E,{showFull:!e.showKeyboard},{default:n(()=>[e.showKeyboard?(o(),h(_,{key:0,value:e.filter,onOnValue:s[0]||(s[0]=t=>e.onKbValue(t,e.showKeyboard)),disabled:!1},null,8,["value"])):u("",!0),(o(!0),c(r,null,k(e.checkedItems,(t,d)=>(o(),c("span",{key:d},[l(D,{class:"his-md-text",color:"primary",onClick:m=>e.uncheck(t.label)},{default:n(()=>[C(f(t.label)+" ",1),l(w,{icon:e.closeIcon},null,8,["icon"])]),_:2},1032,["onClick"])]))),128)),l(v,{class:"view-port-content"},{default:n(()=>[(o(!0),c(r,null,k(e.listValues,(t,d)=>(o(),h(g,{onClick:()=>e.onselect(t),key:d,color:t.isChecked?"lightblue":"",lines:t.isChecked?"none":""},{default:n(()=>[l(V,{slot:"start",modelValue:t.isChecked,"onUpdate:modelValue":m=>t.isChecked=m,disabled:t==null?void 0:t.disabled},null,8,["modelValue","onUpdate:modelValue","disabled"]),l(I,null,{default:n(()=>[l(p,{class:"his-md-text"},{default:n(()=>[C(f(t.label),1)]),_:2},1024),e.isDescription(t.description,t.isChecked)?(o(),h(p,{key:0,color:t.description.color},{default:n(()=>[b("p",null,[b("i",null,f(t.description.text),1)])]),_:2},1032,["color"])):u("",!0)]),_:2},1024)]),_:2},1032,["onClick","color","lines"]))),128))]),_:1})]),_:1},8,["showFull"]),e.showKeyboard?(o(),h($,{key:0,kbConfig:e.keyboard,onKeyPress:e.keypress},null,8,["kbConfig","onKeyPress"])):u("",!0)],64)}const R=M(Y,[["render",Z]]);export{R as default};