import{d as g,a6 as w,u as a,B as v,G as d,Z as f,a_ as C,bN as D,_ as S,$ as B,aJ as b,ab as c,v as h,w as r,x as m,E as $,C as k}from"./index-ATRrruTT.js";import E from"./SelectMixin-DcgA835B.js";import"./BaseTextInput-GZeTLgPx.js";import"./FieldMixin.vue_vue_type_script_lang-Cq8VqPZ3.js";const z=g({props:{showTitle:{type:Boolean,default:!0},enabled:{type:Boolean,default:!0},color:{type:String},label:{type:String,required:!0},value:{type:String,required:!0}},computed:{state(){return this.enabled?"".concat(this.color," clickable"):"disabled-card-color"}},methods:{onclick(){this.enabled&&this.$emit("onclick")}}}),A={class:"title"},O={class:"his-sm-text",style:{textAlign:"center"}};function F(e,t,l,o,i,u){return a(),v("div",{class:C("his-card ".concat(e.state)),onClick:t[0]||(t[0]=(...n)=>e.onclick&&e.onclick(...n))},[d("table",null,[d("td",A,f(e.value)+"  ",1),d("td",O,f(e.label),1)])],2)}const L=w(z,[["render",F],["__scopeId","data-v-7146cdca"]]),N=g({components:{ViewPort:D,RegimenCard:L,IonRow:S,IonCol:B},mixins:[E],watch:{clear(e){e&&this.clearSelection()}},computed:{leftItems(){return b.isEmpty(this.listData)?[]:this.listData[0]},rightItems(){return b.isEmpty(this.listData)?[]:this.listData[1]}},async mounted(){this.init()},activated(){this.$emit("onFieldActivated",this)},methods:{async init(){this.$emit("onFieldActivated",this);const e=await this.options(this.fdata);this.listData=this.buildList(e)},buildList(e){const t=[[],[]],l=o=>o.sort((i,u)=>i.value>u.value?1:-1);return e.forEach(o=>{parseInt(o.value.toString())<10?t[0].push(o):t[1].push(o)}),[l(t[0]),l(t[1])]},async onselect(e){if(this.selected=e.label,this.onValue&&!await this.onValue(e)){this.selected="",this.$emit("onValue",null);return}this.onValueUpdate&&(this.listData=await this.onValueUpdate([...this.listData],e)),this.$emit("onValue",e)}}}),R={class:"view-port-content"};function q(e,t,l,o,i,u){const n=c("regimen-card"),_=c("ion-col"),y=c("ion-row"),I=c("view-port");return a(),h(I,null,{default:r(()=>[d("div",R,[m(y,null,{default:r(()=>[m(_,{"size-md":"6","size-sm":"12"},{default:r(()=>[(a(!0),v($,null,k(e.leftItems,(s,p)=>(a(),h(n,{class:"regimen-item",key:p,label:s.label,value:s.value,onOnclick:V=>e.onselect(s),color:s.label===e.selected?"active-card-color":"inactive-card-color"},null,8,["label","value","onOnclick","color"]))),128))]),_:1}),m(_,{"size-md":"6","size-sm":"12"},{default:r(()=>[(a(!0),v($,null,k(e.rightItems,(s,p)=>(a(),h(n,{class:"regimen-item",key:p,label:s.label,value:s.value,onOnclick:V=>e.onselect(s),color:s.label===e.selected?"active-card-color":"inactive-card-color"},null,8,["label","value","onOnclick","color"]))),128))]),_:1})]),_:1})])]),_:1})}const J=w(N,[["render",q],["__scopeId","data-v-63d39285"]]);export{J as default};