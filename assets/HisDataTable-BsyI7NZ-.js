import{d as i,bM as e,an as n,a8 as c,ad as o,u as r,v as d,w as f,K as l,x as m,aF as p}from"./index-DrPQ21-i.js";import{_ as h}from"./FieldMixin.vue_vue_type_script_lang-DIlaXP0E.js";const _=i({components:{ViewPort:e,HisTable:n},mixins:[h],data:()=>({columns:[],rows:[]}),methods:{async init(){this.$emit("onFieldActivated",this),typeof this.config.columns=="function"&&(this.columns=await this.config.columns(this.fdata,this.cdata)),typeof this.config.rows=="function"&&(this.rows=await this.config.rows(this.fdata,this.cdata))}},mounted(){this.init()},activated(){this.init()}}),u={class:"view-port-content"};function w(t,v,g,b,y,$){const s=o("his-table"),a=o("view-port");return r(),d(a,{style:p(t.config.viewPortStyle)},{default:f(()=>[l("div",u,[m(s,{columns:t.columns,rows:t.rows,config:t.config.dataTableConfig},null,8,["columns","rows","config"])])]),_:1},8,["style"])}const B=c(_,[["render",w],["__scopeId","data-v-d62ad42b"]]);export{B as default};