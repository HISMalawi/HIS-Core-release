import{d as p,bT as n,bk as c,O as u,a9 as r,aa as t,bU as f,aM as g,a6 as h,v as m,ab as T,u as _}from"./index-DYyilVc9.js";import{H as S}from"./HisStandardForm-DTCBPBFW.js";const y=p({components:{HisStandardForm:S},methods:{async onFinish(e){const s=e.protocol.value,a=e.ip_address.value,i=e.port.value;n.setLocalStorage(s,a,i),await(await c.create({message:"Please wait...",backdropDismiss:!1})).present();const o=await n.healthCheck();c.dismiss(),!(o&&o.status===200)||!o?(u("\n          Unable to connect to: ".concat(s,"://").concat(a,": ").concat(i,"\n        ")),this.clearLocalStorage()):this.$router.back()},getFields(){this.fields=[{id:"protocol",helpText:"Select Protocol",type:r.TT_SELECT,requireNext:!1,validation:e=>t.required(e),options:()=>[{label:"HTTP",value:"http"},{label:"HTTPS",value:"https"}]},{id:"ip_address",helpText:"Enter IP Address",type:r.TT_IP_ADDRESS,validation:e=>t.required(e)||t.isIPAddress(e)},{id:"port",helpText:"Enter Port",validation:e=>t.required(e),type:r.TT_TEXT,config:{customKeyboard:[f,[["Delete"]]]}}]},async showConfigNotice(){this.isUsingLocalStorage()&&await g("Config notice","The system is currently using user specified configurations.                 Do you wish to reset back to server configurations?","",[{name:"Reset configurations",slot:"start",color:"success"},{name:"New configurations",slot:"end"}])==="Reset configurations"&&(this.clearLocalStorage(),this.$router.back())},isUsingLocalStorage(){return localStorage.getItem("useLocalStorage")==="true"},clearLocalStorage(){const e=["useLocalStorage","apiURL","apiPort","apiProtocol"];n.removeOnly(e)}},data(){return{fields:[]}},async mounted(){await this.showConfigNotice(),this.getFields()}});function b(e,s,a,i,l,o){const d=T("his-standard-form");return _(),m(d,{fields:e.fields,onFinishAction:e.onFinish,skipSummary:!0},null,8,["fields","onFinishAction"])}const P=h(y,[["render",b]]);export{P as default};