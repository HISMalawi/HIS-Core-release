System.register(["./index-legacy-DLdqxVnr.js","./FieldMixin.vue_vue_type_script_lang-legacy-B8ZN9oa0.js"],(function(t,e){"use strict";var a,n,i,l,s,c,o,u,d,r,h,p,m,v,f,g,y,k,D,b,w,x;return{setters:[t=>{a=t.d,n=t.bN,i=t.b_,l=t.a2,s=t.aJ,c=t.aq,o=t.db,u=t.a6,d=t.ab,r=t.u,h=t.v,p=t.w,m=t.G,v=t.x,f=t.z,g=t.B,y=t.E,k=t.C,D=t.Z,b=t.aC,w=t.ce},t=>{x=t._}],execute:function(){var e=document.createElement("style");e.textContent=".ico[data-v-326ca0cf]{width:60px}.view-port-content[data-v-326ca0cf]{height:100%;background:#fff}.dosage-input[data-v-326ca0cf]{text-align:center;font-weight:700;border:solid 1px #ccc;height:60px;width:7vw;background-color:#fafad2}.custom-med-frequency[data-v-326ca0cf]{width:100px;height:70px;font-weight:700;background:#fafad2;font-size:1em}\n/*$vite$:1*/",document.head.appendChild(e);const C=a({components:{ViewPort:n,IonImg:i,IonInput:l},mixins:[x],data:()=>({listData:[],keypadActive:!1}),watch:{clear:{handler(){this.listData=this.listData.filter((t=>(t.other.am=0,t.other.noon=0,t.other.pm=0,t.other.frequency="Daily (QOD)",!0)))},immediate:!0},listData:{handler(){this.$emit("onValue",this.listData)},deep:!0,immediate:!0}},mounted(){this.init()},activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this);const t=await this.options(this.fdata);this.updateListData(t)},img:t=>`assets/images/prescription/${t}.png`,updateListData(t){this.listData=t.map((t=>{const e=s.find(this.listData,{label:t.label,value:t.value});return e||e||t}))},async launchKeyPad(t,e){if(this.keypadActive)return;this.keypadActive=!0;const a=await c.create({component:o,backdropDismiss:!1,cssClass:"keypad-modal custom-modal-backdrop",componentProps:{title:t.label,preset:t.other[e],strictNumbers:!0,onKeyPress(a){t.other[e]=a}}});a.present(),await a.onDidDismiss(),this.keypadActive=!1}}}),_={class:"view-port-content"},q={class:"his-table"},P=["onUpdate:modelValue"];t("default",u(C,[["render",function(t,e,a,n,i,l){const s=d("ion-img"),c=d("ion-input"),o=d("view-port");return r(),h(o,null,{default:p((()=>[m("div",_,[m("table",q,[m("tr",null,[e[4]||(e[4]=m("th",null," Medication",-1)),m("th",null,[v(s,{class:"ico",src:t.img("morning")},null,8,["src"]),e[0]||(e[0]=f(" Morning "))]),m("th",null,[v(s,{class:"ico",src:t.img("noon")},null,8,["src"]),e[1]||(e[1]=f(" Noon "))]),m("th",null,[v(s,{class:"ico",src:t.img("evening")},null,8,["src"]),e[2]||(e[2]=f(" Evening "))]),m("th",null,[v(s,{class:"ico",src:t.img("frequency")},null,8,["src"]),e[3]||(e[3]=f(" Frequency "))])]),(r(!0),g(y,null,k(t.listData,((a,n)=>(r(),g("tr",{key:n},[m("td",null,D(a.label),1),m("td",null,[v(c,{value:a.other.am,onClick:e=>t.launchKeyPad(a,"am"),class:"dosage-input"},null,8,["value","onClick"])]),m("td",null,[v(c,{value:a.other.noon,onClick:e=>t.launchKeyPad(a,"noon"),class:"dosage-input"},null,8,["value","onClick"])]),m("td",null,[v(c,{value:a.other.pm,onClick:e=>t.launchKeyPad(a,"pm"),class:"dosage-input"},null,8,["value","onClick"])]),m("td",null,[b(m("select",{"onUpdate:modelValue":t=>a.other.frequency=t,class:"custom-med-frequency"},e[5]||(e[5]=[m("option",{value:"Weekly (QW)"}," Weekly ",-1),m("option",{value:"Daily (QOD)"}," Daily ",-1)]),8,P),[[w,a.other.frequency]])])])))),128))])])])),_:1})}],["__scopeId","data-v-326ca0cf"]]))}}}));