import{d as r,br as c,_ as d,r as u,o,c as p,w as _,A as t,x as n,B as h,y as m,v as s,a8 as f,a9 as v}from"./index-BFVcutZq.js";import{_ as b}from"./FieldMixin.vue_vue_type_script_lang-CwvFuJwx.js";const w=r({components:{ViewPort:c},mixins:[b],data:()=>({listData:[]}),methods:{async init(){this.$emit("onFieldActivated",this),this.listData=await this.options(this.fdata,this.cdata)}},mounted(){this.init()},activated(){this.init()}}),N=e=>(f("data-v-1756a70f"),e=e(),v(),e),x=N(()=>t("tr",null,[t("th",null,"   "),t("th",null," Name "),t("th",null," New Number "),t("th",null," Old Number ")],-1)),$={class:"f-number f-active-col"},B={class:"f-number f-inactive-col"};function k(e,y,D,I,S,g){const i=u("view-port");return o(),p(i,null,{default:_(()=>[t("table",null,[x,(o(!0),n(h,null,m(e.listData,(a,l)=>(o(),n("tr",{key:l},[t("td",null,s(a.label),1),t("td",null,s(a.value),1),t("td",null,[t("div",$,s(a.other.activeNumber),1)]),t("td",null,[t("div",B,s(a.other.dormantNumber),1)])]))),128))])]),_:1})}const F=d(w,[["render",k],["__scopeId","data-v-1756a70f"]]);export{F as default};