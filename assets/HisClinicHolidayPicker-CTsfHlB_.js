import{d as p,bM as _,aU as m,$ as h,_ as f,aK as y,ai as b,a8 as w,ad as s,u as k,v,w as o,K as a,x as n,E as D,a6 as $,a7 as I}from"./index-DrPQ21-i.js";import{a as V}from"./v-calendar.es-BhGHzhWm.js";import{_ as C}from"./FieldMixin.vue_vue_type_script_lang-DIlaXP0E.js";const g=p({components:{DatePicker:V,ViewPort:_,IonGrid:m,IonCol:h,IonRow:f},mixins:[C],watch:{days:{async handler(t){if(!y.isEmpty(t)){const e=t.map(i=>i.date).join();if(this.onValue&&!await this.onValue(e,this))return;this.$emit("onValue",{label:e,value:e})}},immediate:!0,deep:!0}},data:()=>({days:[],selectAttribute:{dot:!0}}),computed:{attributes(){return this.days.map(t=>({highlight:!0,dates:t.date}))},totalDays(){return this.days.length}},methods:{onDayClick(t){const e=this.days.findIndex(i=>i.id===t.id);e>=0?this.days.splice(e,1):this.days.push({id:t.id,date:b.toStandardHisFormat(t.date)})}},async created(){if(this.defaultValue){const t=await this.defaultValue();this.days=t.split(",").map(e=>({id:e,date:e}))}},mounted(){this.$emit("onFieldActivated",this)},activated(){this.$emit("onFieldActivated",this)}}),x=t=>($("data-v-60e00b28"),t=t(),I(),t),S={class:"view-port-content"},H=x(()=>a("tr",null,[a("td",null,[a("b",null,"Total Holidays Set")])],-1));function P(t,e,i,A,B,E){const d=s("DatePicker"),l=s("ion-col"),c=s("ion-row"),r=s("ion-grid"),u=s("view-port");return k(),v(u,null,{default:o(()=>[a("div",S,[n(r,null,{default:o(()=>[n(c,null,{default:o(()=>[n(l,{size:"9"},{default:o(()=>[n(d,{"is-expanded":"",attributes:t.attributes,"select-attribute":t.selectAttribute,onDayclick:t.onDayClick},null,8,["attributes","select-attribute","onDayclick"])]),_:1}),n(l,{size:"3"},{default:o(()=>[a("table",null,[a("tr",null,[a("td",null,[H,a("tr",null,[a("td",null,D(t.totalDays),1)])])])])]),_:1})]),_:1})]),_:1})])]),_:1})}const N=w(g,[["render",P],["__scopeId","data-v-60e00b28"]]);export{N as default};