System.register(["./index-legacy-DLdqxVnr.js","./FieldMixin.vue_vue_type_script_lang-legacy-B8ZN9oa0.js"],(function(t,e){"use strict";var l,a,n,o,i,s,u,d,r,c,h,b,f,p,x,_,m,v,g,y,w;return{setters:[t=>{l=t.d,a=t.a1,n=t.ej,o=t._,i=t.b_,s=t.$,u=t.a0,d=t.W,r=t.a6,c=t.ab,h=t.u,b=t.v,f=t.w,p=t.x,x=t.G,_=t.Z,m=t.B,v=t.E,g=t.C,y=t.z},t=>{w=t._}],execute:function(){var e=document.createElement("style");e.textContent=".large-card[data-v-769cbad1]{padding:5%;border-radius:15px;border:1px solid #ccc;height:82vh;background-color:#fff;overflow-y:auto;-webkit-box-shadow:0px -2px 19px -2px rgba(196,190,196,1);-moz-box-shadow:0px -2px 19px -2px rgba(196,190,196,1);box-shadow:0 -2px 19px -2px #c4bec4}\n/*$vite$:1*/",document.head.appendChild(e);const I=l({mixins:[w],components:{IonLabel:a,IonAvatar:n,IonRow:o,IonImg:i,IonCol:s,IonList:u,IonItem:d},data:()=>({listData:[],selectedResult:{}}),methods:{async init(){this.$emit("onFieldActivated",this),this.listData=await this.options(this.fdata,this),this.onSelect(this.listData[0]||{})},async onSelect(t){if(t){if(this.onValue&&!(await this.onValue(t,this)))return;this.selectedResult=t,this.$emit("onValue",t)}}},mounted(){this.init()},activated(){this.init()}}),k={class:"large-card"},C={class:"large-card"};t("default",r(I,[["render",function(t,e,l,a,n,o){const i=c("ion-img"),s=c("ion-avatar"),u=c("ion-label"),d=c("ion-item"),r=c("ion-list"),w=c("ion-col"),I=c("ion-row");return h(),b(I,null,{default:f((()=>[p(w,{size:"5"},{default:f((()=>[x("div",k,[x("h3",null," Matches found: ("+_(t.listData.length)+"): ",1),p(r,null,{default:f((()=>[(h(!0),m(v,null,g(t.listData,((l,a)=>(h(),b(d,{button:"",key:a,detail:!0,color:l.value===t.selectedResult.value?"light":"",onClick:e=>t.onSelect(l)},{default:f((()=>[p(s,null,{default:f((()=>[p(i,{src:"/assets/images/avatar.svg"})])),_:1}),p(u,null,{default:f((()=>[y(_(l.label)+" ",1),e[0]||(e[0]=x("br",null,null,-1)),e[1]||(e[1]=y(" Home District: ")),x("b",null,_(l.other.foundPerson.home_district),1),e[2]||(e[2]=y()),e[3]||(e[3]=x("br",null,null,-1)),e[4]||(e[4]=y(" Home TA: ")),x("b",null,_(l.other.home_traditional_authority),1),e[5]||(e[5]=y(" Score: ")),x("b",null,_(l?.other?.score||"-"),1)])),_:2},1024)])),_:2},1032,["color","onClick"])))),128))])),_:1})])])),_:1}),p(w,{size:"7"},{default:f((()=>[x("div",C,[x("h1",null," Match score: "+_(t.selectedResult?.other?.score||"-"),1),p(r,null,{default:f((()=>[(h(!0),m(v,null,g(t.selectedResult?.other?.comparisons||[],((t,e)=>(h(),b(d,{key:e,inset:"none"},{default:f((()=>[(h(!0),m(v,null,g(t,((t,e)=>(h(),b(u,{color:"danger",key:e},{default:f((()=>[x("b",null,_(t),1)])),_:2},1024)))),128))])),_:2},1024)))),128))])),_:1})])])),_:1})])),_:1})}],["__scopeId","data-v-769cbad1"]]))}}}));