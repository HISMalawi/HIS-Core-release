System.register(["./FieldMixin.vue_vue_type_script_lang-legacy-DLDcwhDk.js","./index-legacy-BsbMrqEO.js"],(function(t,e){"use strict";var i,n,s,a,l,c;return{setters:[t=>{i=t._},t=>{n=t.d,s=t.a8,a=t.u,l=t.B,c=t.K}],execute:function(){const e=n({mixins:[i],data:()=>({value:""}),methods:{async init(){this.$emit("onFieldActivated",this);const t=await this.options(this.fdata,this.cdata);this.value=t[0].value}},mounted(){this.init()},activated(){this.init()}}),r={class:"center"},u={class:"text vertically-align his-lg-text",style:{"text-align":"center"}},d=["innerHTML"];t("default",s(e,[["render",function(t,e,i,n,s,v){return a(),l("div",r,[c("p",u,[c("span",{innerHTML:t.value},null,8,d)])])}]]))}}}));