System.register(["./index-legacy-CNrLGT3P.js","./FieldMixin.vue_vue_type_script_lang-legacy-B1v8-yn1.js"],(function(t,s){"use strict";var e,o,i,l,n,r,a,c,h,d,u,w;return{setters:[t=>{e=t.d,o=t.br,i=t.at,l=t.ah,n=t._,r=t.r,a=t.o,c=t.c,h=t.w,d=t.A,u=t.b},t=>{w=t._}],execute:function(){var s=document.createElement("style");s.textContent=".view-port-content[data-v-e849c9d9]{background:#fff!important}\n",document.head.appendChild(s);const m=e({components:{ViewPort:o,HisTable:i},mixins:[w],data:()=>({isInit:!1,data:{},columns:[],rows:[],rowColors:[],cellColors:[],styles:[]}),watch:{data:{handler(t){if(l.isEmpty(t))return this.$emit("onValue",null),this.rows=[];const[s]=t;this.columns=s.other.columns,this.rows=s.other.rows,this.rowColors=s.other.rowColors,this.cellColors=s.other.cellColors,this.styles=this.config?this.config.styles:[],this.$emit("onValue",t)},deep:!0}},methods:{clearValue(){this.data=[]},async init(){this.$emit("onFieldActivated",this),this.data=await this.options(this.fdata,this.cdata,this)}},mounted(){this.init()},activated(){this.isInit?this.init():this.isInit=!0}}),C={class:"view-port-content"};t("default",n(m,[["render",function(t,s,e,o,i,l){const n=r("his-table"),w=r("view-port");return a(),c(w,null,{default:h((()=>[d("div",C,[u(n,{columns:t.columns,styles:t.styles,rows:t.rows,rowColors:t.rowColors,cellColors:t.cellColors},null,8,["columns","styles","rows","rowColors","cellColors"])])])),_:1})}],["__scopeId","data-v-e849c9d9"]]))}}}));