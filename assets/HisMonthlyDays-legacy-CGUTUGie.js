System.register(["./BaseTextInput-legacy-Cuz_a5CI.js","./index-legacy-BsbMrqEO.js","./FieldMixin.vue_vue_type_script_lang-legacy-DLDcwhDk.js"],(function(e,t){"use strict";var a,i,s,n,l,o,u,r,h,d,c,y,f,m,b,v,g;return{setters:[e=>{a=e.default},e=>{i=e.d,s=e.aP,n=e.bM,l=e.e5,o=e.aS,u=e.e6,r=e.a8,h=e.ad,d=e.u,c=e.B,y=e.x,f=e.w,m=e.E,b=e.H,v=e.G},e=>{g=e._}],execute:function(){const t=i({components:{BaseInput:a,HisKeyboard:s,ViewPort:n},mixins:[g],data:()=>({value:"",errors:"",minDays:1,maxDays:30,keyboard:[]}),mounted(){this.init()},activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this);let e=u;this.config?(this.config.year&&this.config.month&&(e=this.generateKeypad(this.config.year(this.fdata),this.config.month(this.fdata))),this.config.keyboardActions?this.keyboard=[e,this.config.keyboardActions]:this.keyboard=[e,[["Unknown"]]]):this.keyboard=l,await this.setDefaultValue()},onKbValue(e){this.value=e,this.emitValue()},keypress(e){this.value=o(e,""),this.emitValue()},emitValue(){this.errors="";let e=this.value;if(e)if(e.toString().match(/unknown/i))this.$emit("onValue",{label:"Unknown",value:"Unknown"});else{if(isNaN(e))return this.errors="Invalid number",void this.$emit("onValue",null);e=parseInt(e),e<this.minDays||e>this.maxDays?(this.errors="Value number is out of range",this.$emit("onValue",null)):this.$emit("onValue",{label:e,value:e})}else this.$emit("onValue",null)},generateKeypad(e,t){const a=[[]];this.maxDays=new Date(e,t,0).getDate();let i=0,s=0;for(let n=0;n<this.maxDays;++n)s>7&&(++i,a[i]=[],s=0),a[i].push(`${n+1}`),++s;return a},async setDefaultValue(){if(this.defaultValue&&!this.value){const e=await this.defaultValue(this.fdata,this.cdata);e&&(this.value=e,this.emitValue())}}},watch:{clear(){this.value=""}}}),V={key:0,style:{color:"red","font-weight":"bold"}};e("default",r(t,[["render",function(e,t,a,i,s,n){const l=h("base-input"),o=h("view-port"),u=h("his-keyboard");return d(),c(v,null,[y(o,null,{default:f((()=>[y(l,{value:e.value,onOnValue:e.onKbValue},null,8,["value","onOnValue"]),e.errors?(d(),c("span",V," **"+m(e.errors)+"** ",1)):b("",!0)])),_:1}),y(u,{kbConfig:e.keyboard,onKeyPress:e.keypress,disabled:!1},null,8,["kbConfig","onKeyPress"])],64)}]]))}}}));