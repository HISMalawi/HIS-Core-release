import{d as p,bP as _,aV as m,_ as h,Z as f,aL as y,ai as b,a8 as w,ad as s,u as k,v,w as o,a1 as a,x as n,Y as D,a6 as V,a7 as $}from"./index-CG6KEPsv.js";import{a as I}from"./v-calendar.es-CXKptJpF.js";import{_ as C}from"./FieldMixin.vue_vue_type_script_lang-8lytXBXT.js";const g=p({components:{DatePicker:I,ViewPort:_,IonGrid:m,IonCol:h,IonRow:f},mixins:[C],watch:{days:{async handler(t){if(!y.isEmpty(t)){const e=t.map(i=>i.date).join();if(this.onValue&&!await this.onValue(e,this))return;this.$emit("onValue",{label:e,value:e})}},immediate:!0,deep:!0}},data:()=>({days:[],selectAttribute:{dot:!0}}),computed:{attributes(){return this.days.map(t=>({highlight:!0,dates:t.date}))},totalDays(){return this.days.length}},methods:{onDayClick(t){const e=this.days.findIndex(i=>i.id===t.id);e>=0?this.days.splice(e,1):this.days.push({id:t.id,date:b.toStandardHisFormat(t.date)})}},async created(){if(this.defaultValue){const t=await this.defaultValue();this.days=t.split(",").map(e=>({id:e,date:e}))}},mounted(){this.$emit("onFieldActivated",this)},activated(){this.$emit("onFieldActivated",this)}}),x=t=>(V("data-v-60e00b28"),t=t(),$(),t),P={class:"view-port-content"},S=x(()=>a("tr",null,[a("td",null,[a("b",null,"Total Holidays Set")])],-1));function H(t,e,i,A,B,F){const d=s("DatePicker"),l=s("ion-col"),c=s("ion-row"),r=s("ion-grid"),u=s("view-port");return k(),v(u,null,{default:o(()=>[a("div",P,[n(r,null,{default:o(()=>[n(c,null,{default:o(()=>[n(l,{size:"9"},{default:o(()=>[n(d,{"is-expanded":"",attributes:t.attributes,"select-attribute":t.selectAttribute,onDayclick:t.onDayClick},null,8,["attributes","select-attribute","onDayclick"])]),_:1}),n(l,{size:"3"},{default:o(()=>[a("table",null,[a("tr",null,[a("td",null,[S,a("tr",null,[a("td",null,D(t.totalDays),1)])])])])]),_:1})]),_:1})]),_:1})])]),_:1})}const j=w(g,[["render",H],["__scopeId","data-v-60e00b28"]]);export{j as default};