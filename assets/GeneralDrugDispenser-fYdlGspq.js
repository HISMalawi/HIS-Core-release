import{d as I,d$ as z,aq as V,a6 as S,ab as i,u as a,B as r,x as o,w as s,G as e,E as y,C as D,z as h,Z as u,bN as H,aN as E,_ as G,$ as M,v as q,H as B}from"./index-ATRrruTT.js";import{O as F}from"./ActionSideButton-h3q0eItO.js";import{R as U}from"./ResetButton-FvjnzZ03.js";import{_ as K}from"./FieldMixin.vue_vue_type_script_lang-Cq8VqPZ3.js";const Q=I({data:()=>({amount:"",keyboard:z}),props:{drugName:{type:String,required:!0},amountNeeded:{type:String,required:!0},onDispense:{type:Function,required:!0}},methods:{async onKeyPress(t){const n=this.amount;t.match(/del/i)?this.amount=n.substring(0,n.length-1):t.match(/clear/i)?this.amount="":t.match(/close/i)?this.onClose():t.match(/reset/i)?this.amount="":t.match(/dispense/i)?(this.amount&&this.onDispense(this.amount),this.onClose()):this.amount+=t},async onClose(){await V.dismiss({})}}}),L={class:"",style:{border:".1rem solid #c2c2c2c2"}},T={class:"keypad"};function Y(t,n,c,_,d,k){const p=i("ion-input"),m=i("ion-button"),g=i("ion-col"),f=i("ion-label"),b=i("ion-item"),C=i("ion-list"),$=i("ion-row"),l=i("ion-grid"),v=i("ion-content"),w=i("ion-toolbar"),O=i("ion-footer");return a(),r(y,null,[o(v,null,{default:s(()=>[o(l,null,{default:s(()=>[o($,null,{default:s(()=>[o(g,{size:"5"},{default:s(()=>[e("div",L,[o(p,{type:"text",class:"keypad-input",value:t.amount},null,8,["value"]),e("table",T,[(a(!0),r(y,null,D(t.keyboard,(N,P)=>(a(),r("tr",{key:P},[(a(!0),r(y,null,D(N,(A,R)=>(a(),r("td",{class:"his-keyboard-margin",key:"btn-".concat(R)},[o(m,{color:"primary",class:"his-keyboard-btn",onClick:st=>t.onKeyPress(A)},{default:s(()=>[h(u(A),1)]),_:2},1032,["onClick"])]))),128))]))),128))])])]),_:1}),o(g,{size:"7"},{default:s(()=>[o(C,null,{default:s(()=>[o(b,null,{default:s(()=>[o(f,null,{default:s(()=>[n[1]||(n[1]=e("b",null,"Medication: ",-1)),h(" "+u(t.drugName),1)]),_:1})]),_:1}),o(b,null,{default:s(()=>[o(f,null,{default:s(()=>[n[2]||(n[2]=e("b",null,"Amount needed: ",-1)),h(u(t.amountNeeded),1)]),_:1})]),_:1}),o(b,null,{default:s(()=>[o(f,null,{default:s(()=>[n[3]||(n[3]=e("b",null,"Amount Dispensed: ",-1)),h(u(t.amount.length?t.amount:0),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(O,null,{default:s(()=>[o(w,null,{default:s(()=>[o(m,{onClick:t.onClose,color:"danger",size:"large",slot:"start"},{default:s(()=>n[4]||(n[4]=[h(" Close ")])),_:1},8,["onClick"]),o(m,{onClick:n[0]||(n[0]=N=>t.onDispense(t.amount)),disabled:t.amount.length<=0,color:"success",size:"large",slot:"end"},{default:s(()=>n[5]||(n[5]=[h(" Dispense ")])),_:1},8,["disabled"])]),_:1})]),_:1})],64)}const Z=S(Q,[["render",Y],["__scopeId","data-v-59c9686c"]]),j=I({components:{ViewPort:H,Barcode:E,NavButton:F,ResetButton:U,IonRow:G,IonCol:M},mixins:[K],data:()=>({isDispensing:!1,tab:"prescribe",listData:[]}),mounted(){this.init()},activated(){this.init()},computed:{medicationHistory(){return this.config&&this.config.medicationHistory?this.config.medicationHistory:[]}},methods:{async init(){this.$emit("onFieldActivated",this),this.listData=await this.options(this.fdata)},async onScan(t){const[n,c]=t.split("-"),_=this.listData.map(async d=>{if(d.other.drug_id===parseInt(n)){const k=parseInt(d.value.toString()),p=parseInt(c);await this.updateOnValue(d,p,[],!0)&&(d.value=p+k)}return d});this.listData=await Promise.all(_)},async onReset(t){await this.updateOnValue(t,-1)},async updateOnValue(t,n,c=[],_=!1){return this.onValue&&!await this.onValue({label:t.label,other:{dispenses:c,...t.other},value:n},_)?!1:(t.value=n<0?0:n,this.$emit("onValue",t),this.onValueUpdate&&(this.listData=await this.onValueUpdate(t,this.listData)),!0)},async launchDispenser(t){if(this.isDispensing)return;this.isDispensing=!0;const n=await V.create({component:Z,backdropDismiss:!1,cssClass:"custom-modal",componentProps:{drugName:t.label,amountNeeded:t.other.amount_needed,onDispense:async c=>{await this.updateOnValue(t,c)&&await V.dismiss({})}}});n.present(),await n.onDidDismiss(),this.isDispensing=!1}}}),J={class:"view-port-content"},W={key:0,class:"his-card history"},X={class:"his-table"},x={key:1,class:"prescription-tab"},tt={class:"prescription-table-section his-card"},nt={class:"his-table"},et={class:"barcode-section"};function ot(t,n,c,_,d,k){const p=i("nav-button"),m=i("ion-col"),g=i("ion-input"),f=i("reset-button"),b=i("barcode"),C=i("ion-row"),$=i("view-port");return a(),q($,null,{default:s(()=>[e("div",J,[o(C,null,{default:s(()=>[o(m,{size:"2"},{default:s(()=>[o(p,{onClick:n[0]||(n[0]=l=>t.tab="prescribe"),isActive:t.tab==="prescribe",image:"prescription/rx",label:"Prescribed"},null,8,["isActive"]),o(p,{onClick:n[1]||(n[1]=l=>t.tab="history"),isActive:t.tab==="history",image:"prescription/history",label:"History"},null,8,["isActive"])]),_:1}),o(m,{size:"10"},{default:s(()=>[t.tab==="history"?(a(),r("div",W,[e("table",X,[n[2]||(n[2]=e("tr",null,[e("th",null," Medication"),e("th",null," Date"),e("th",null," Amount dispensed ")],-1)),(a(!0),r(y,null,D(t.medicationHistory,(l,v)=>(a(),r("tr",{key:v},[e("td",null,u(l.medication),1),e("td",null,u(l.date),1),e("td",null,u(l.amount),1)]))),128))])])):B("",!0),t.tab==="prescribe"?(a(),r("div",x,[e("div",tt,[e("table",nt,[n[3]||(n[3]=e("tr",null,[e("th",null," Medication"),e("th",null," Amount needed"),e("th",null," Amount dispensed "),e("th",null," Reset ")],-1)),(a(!0),r(y,null,D(t.listData,(l,v)=>(a(),r("tr",{key:v},[e("td",null,u(l.label),1),e("td",null,u(l.other.amount_needed),1),e("td",null,[o(g,{disabled:l.value>0,value:l.value,onClick:w=>l.value<=0?t.launchDispenser(l):null,class:"dosage-input"},null,8,["disabled","value","onClick"])]),e("td",null,[o(f,{disabled:l.value<=0,onClick:w=>l.value>0?t.onReset(l):null},null,8,["disabled","onClick"])])]))),128))])]),e("div",et,[o(b,{onOnScan:t.onScan,class:"his-card"},null,8,["onOnScan"])])])):B("",!0)]),_:1})]),_:1})])]),_:1})}const ut=S(j,[["render",ot],["__scopeId","data-v-57e38329"]]);export{ut as default};