import{d as k,a2 as g,_ as w,$ as C,aT as P,aO as A,bN as O,aF as V,e5 as B,r as b,aG as $,aJ as E,e6 as F,aR as R,a6 as j,ab as t,u as v,B as y,x as l,w as p,E as I,C as N,v as H,a_ as K}from"./index-DYyilVc9.js";import{_ as D}from"./FieldMixin.vue_vue_type_script_lang-D5O7Hfr7.js";const L=k({components:{IonInput:g,IonRow:w,IonCol:C,IonGrid:P,HisKeyboard:A,ViewPort:O},mixins:[D],watch:{clear(){this.addressInputs={first:"",second:"",third:"",fourth:""}}},setup(n,{emit:i}){const{activePlatformProfile:h}=V();B(()=>i("onFieldActivated",this));const s=b("first"),a=b({first:"",second:"",third:"",fourth:""}),u={first:"second",second:"third",third:"fourth",fourth:"third"},m=o=>s.value=o,c=()=>s.value=u[s.value]||s.value,f=()=>s.value=Object.keys(u).find(o=>u[o]===s.value)||s.value;function _(o){if(/→/i.test(o))return c();if(/←/i.test(o))return f();const r=s.value,e=R(o,a.value[r]);if(e.length>3)return c();a.value[r]=e.charAt(0)==="0"&&e.length>1?e.substring(1):e}return $(a,o=>{if(!o)return;if(Object.values(o).map(e=>!E.isEmpty(e)).every(Boolean)){const e=Object.values(o).map(d=>d).join(".");i("onValue",{label:e,value:e})}else i("onValue",null)},{deep:!0,immediate:!0}),{activePlatformProfile:h,keypress:_,activeIndex:s,onAddressClick:m,addressInputs:a,numbers:[F,[["Delete"],["Clear"]]]}}});function T(n,i,h,s,a,u){const m=t("ion-input"),c=t("ion-col"),f=t("ion-row"),_=t("ion-grid"),o=t("view-port"),r=t("his-keyboard");return v(),y(I,null,[l(o,{showFull:!1},{default:p(()=>[l(_,null,{default:p(()=>[l(f,null,{default:p(()=>[(v(!0),y(I,null,N(Object.keys(n.addressInputs),e=>(v(),H(c,{key:e},{default:p(()=>[l(m,{readonly:n.activePlatformProfile.keyboard==="HIS_KEYBOARD_ONLY",mode:"md",inputmode:"numeric",type:"number",max:255,class:K([{"highlighted-input":e===n.activeIndex},"input_display"]),modelValue:n.addressInputs[e],"onUpdate:modelValue":d=>n.addressInputs[e]=d,onIonFocus:d=>n.onAddressClick(e),style:{textAlign:"center"},placeholder:"0"},null,8,["readonly","class","modelValue","onUpdate:modelValue","onIonFocus"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),l(r,{onKeyPress:n.keypress,kbConfig:n.numbers},null,8,["onKeyPress","kbConfig"])],64)}const M=j(L,[["render",T],["__scopeId","data-v-ad8175b5"]]);export{M as default};