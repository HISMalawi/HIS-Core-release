import{S as X,d as O,X as G,Y as F,Z as Q,$ as W,a0 as $,a1 as J,F as A,t as C,V as _,a2 as Z,a3 as x,q as ee,a4 as te,_ as U,o as d,x as c,A as a,v as h,a5 as N,a6 as B,B as k,y as P,z as V,a7 as se,a8 as M,a9 as K,h as oe,f as ae,k as ne,D as ie,I as le,j as re,i as ue,l as de,m as pe,aa as ce,ab as fe,K as S,ac as he,M as me,ad as ye,ae as _e,N as ge,af as D,ag as we,ah as Ie,r as u,c as T,w as i,b as r,u as g}from"./index-BFVcutZq.js";import{s as ve}from"./storage-DBvOSj8j.js";const E=ve("IndexedDBStorage"),be=[{key:"villages",endpoint:"villages"},{key:"traditional_authorities",endpoint:"traditional_authorities"},{key:"districts",endpoint:"districts"},{key:"regions",endpoint:"regions"},{key:"locations",endpoint:"locations"}];async function Ce(){for(const e of be)if(!await E.existsinStorage(e.key))try{const t=await X.getJson(e.endpoint,{paginate:!1});E.saveToStorage(e.key,t)}catch(t){console.warn("Issue loading/saving metadata ".concat(e,": ").concat(t))}}const ke=O({props:{useVirtualInput:{type:Boolean}},data:function(){return{LOGIN_KEYBOARD:G,auth:{},userInput:{type:String,username:"",password:""},focusInput:{type:Object,value:"",id:""},display:"none",keyboardTop:"",btnCaption:"",Caps:{type:Boolean,on:!1}}},created(){this.auth=new F,Q.clearScreenTimeout()},setup(){const{facilityName:e,district:t}=te();return{facilityName:e,district:t}},methods:{renderKeyBoard(e){this.focusInput=e.currentTarget,this.focusInput.id=="password"?this.btnCaption="Login":this.btnCaption="Next";let t=e.currentTarget.getBoundingClientRect().top;t=parseInt(t),this.keyboardTop=t+20+"px;",this.display="table",window.scrollTo(0,9999)},keyPress(e){const t=e.currentTarget.id;let o;try{t.match(/Del./i)?this.focusInput.value=this.focusInput.value.substring(0,this.focusInput.value.length-1):t.match(/Next/i)?(this.display="none",o=this.$refs.password,o.click()):t.match(/Login/i)?(this.display="none",this.doLogin()):t.match(/Caps/i)?(this.Caps.on=!this.Caps.on,this.display="none",this.focusInput.id==="username"?o=this.$refs.username:o=this.$refs.password,o.click()):t.match(/Hide/i)?this.display="none":this.focusInput.value+=t,this.focusInput.id=="username"?this.userInput.username=this.focusInput.value:this.userInput.password=this.focusInput.value}catch(p){console.warn("input error")}},doLogin:async function(){if(this.userInput.username&&this.userInput.password){this.auth.setUsername(this.userInput.username);try{if(this.auth.versionLockingIsEnabled()&&await this.auth.validateIfCorrectAPIVersion(),!await this.auth.checkTimeIntegrity())throw"Local date does not match API date. Please Update your device's date";if(await this.auth.login(this.userInput.password),this.auth.startSession(),W.value=!1,(await $.create({message:"Loading metadata, this may take a while...",backdropDismiss:!1})).present(),await Ce(),$.getTop().then(t=>t&&$.dismiss()),(await Promise.all([this.auth.passwordPolicyEnabled(),this.auth.passwordExpired()])).every(Boolean)){const t=o=>"".concat(o.value).toLowerCase();return J([{id:"new_password",proxyID:"password",helpText:"Change your password",type:A.TT_TEXT,init:()=>(setTimeout(()=>{C("Your password has expired! please change it now!",8e3)},500),!0),computedValue:o=>t(o),validation:o=>_.validateSeries([()=>_.required(o),()=>_.hasLengthRangeOf(o,4,15),()=>{if("".concat(this.userInput.password).toLowerCase()===t(o))return["New password should not match old password"]}]),config:{inputType:"password"}},{id:"verify_password",proxyID:"password",helpText:"Confirm Password",type:A.TT_TEXT,computedValue:o=>t(o),validation:(o,p)=>_.validateSeries([()=>_.required(o),()=>{if(t(p.verify_password)!=t(p.new_password))return["New password does not match current password"]}]),config:{inputType:"password"}}],{onFinish:async(o,p)=>{await Z.updateUser(this.auth.userID,p)?(await this.auth.resetUserPasswordChangeCheck(),this.$router.push("/select_hc_location")):C("Unable to update user")}})}this.$router.push("/select_hc_location")}catch(e){e instanceof x?C("Invalid username or password"):ee("Unable to login. Please contact your local administrator for assistance",5e4)}}else C("Complete form to log in")}},computed:{btnStyles(){return"display: ".concat(this.display,"; top: ").concat(this.keyboardTop,";")}}}),$e=e=>(M("data-v-5cf02301"),e=e(),K(),e),Se={class:"main",ref:"main"},Te={class:"cells ion-padding-bottom"},Pe=$e(()=>a("b",{style:{color:"#8b4513"}},"Facility: ",-1)),Ve={style:{color:"#cd853f"}},Le={class:"rows"},Ae={class:"cells"},Ne=["readonly"],Be={class:"rows input-rows"},De={class:"cells"},Ee=["readonly"],Oe={class:"rows"},Fe=["id"],Ue=["id"];function Me(e,t,o,p,w,m){return d(),c(k,null,[a("div",Se,[a("div",Te,[a("h3",null,[Pe,a("b",Ve,h(e.facilityName)+" ("+h(e.district)+")",1)])]),a("div",Le,[a("div",Ae,[N(a("input",{type:"text",name:"usename",autocomplete:"off",placeholder:"Username",id:"username",ref:"username","onUpdate:modelValue":t[0]||(t[0]=n=>e.userInput.username=n),onClick:t[1]||(t[1]=n=>e.renderKeyBoard(n)),class:"input-boxes",readonly:e.useVirtualInput},null,8,Ne),[[B,e.userInput.username]])])]),a("div",Be,[a("div",De,[N(a("input",{"onUpdate:modelValue":t[2]||(t[2]=n=>e.userInput.password=n),type:"password",name:"password",ref:"password",id:"password",onClick:t[3]||(t[3]=n=>e.renderKeyBoard(n)),class:"input-boxes",placeholder:"Password",readonly:e.useVirtualInput},null,8,Ee),[[B,e.userInput.password]])])])],512),a("div",{id:"keyboard",style:se(e.btnStyles),class:"keyboard"},[(d(!0),c(k,null,P(e.LOGIN_KEYBOARD,(n,f)=>(d(),c("span",{key:f},[a("div",Oe,[(d(!0),c(k,null,P(n,s=>(d(),c("div",{class:"cells",key:s},[s==="Next"||s==="Login"?(d(),c("button",{key:0,id:e.btnCaption,class:"keyboard-btn login-btn",onClick:t[4]||(t[4]=l=>e.keyPress(l))},h(e.btnCaption),9,Fe)):V("",!0),s!="Login"&&s!="Next"?(d(),c("button",{key:1,id:e.Caps.on?s.toUpperCase():s.toLowerCase(),class:"keyboard-btn",onClick:t[5]||(t[5]=l=>e.keyPress(l))},h(s==="Del."||s==="Caps"?s:e.Caps.on?s.toUpperCase():s.toLowerCase()),9,Ue)):V("",!0)]))),128))])]))),128))],4)],64)}const Ke=U(ke,[["render",Me],["__scopeId","data-v-5cf02301"]]),Re=O({name:"login",components:{IonItem:oe,Inputs:Ke,IonButton:ae,IonTitle:ne,IonLabel:ie,IonPage:le,IonHeader:re,IonToolbar:ue,IonContent:de,IonFooter:pe,IonSelect:ce,IonSelectOption:fe},setup(){const e=S([]),t=async()=>{const s=await we("Application Selection","Please specify the application you wish to use",e.value.map(l=>l.name),[{name:"Cancel",color:"danger",slot:"start"},{name:"Confirm",color:"primary",slot:"end",role:"action"}]);if(s.selection&&s.action!="Cancel"){const l=e.value.find(y=>y.name===s.selection);window.open("".concat(l.protocol||"http","://").concat(l.IP,":").concat(l.port||80),"_blank")}},{activePlatformProfile:o,platformProfiles:p}=he(),w=S(""),m=S(""),n=me(()=>o.value.keyboard===ye.HIS_KEYBOARD_ONLY),f=Object.keys(p.value).map(s=>({label:s,value:{profileName:s,...p.value[s]}}));return _e(m,s=>{o.value=(Ie.find(f,{label:s})||{}).value}),ge(async()=>{var I,v;const s=new F;e.value=((I=await s.loadConfig())==null?void 0:I.otherApps)||[];const l=s.getHeadVersion();s.setActiveVersion(l);const y=await s.getApiVersion();w.value="".concat(l," / ").concat(y),m.value=((v=o.value)==null?void 0:v.profileName)||""}),{version:w,profile:m,otherApps:e,deviceProfiles:f,useVirtualInputOnly:n,activePlatformProfile:o,coatImg:D("login-logos/Malawi-Coat_of_arms_of_arms.png"),pepfarImg:D("login-logos/PEPFAR.png"),showConfig:localStorage.getItem("useLocalStorage")==="true",openSelect:t}}}),R=e=>(M("data-v-5c9fa721"),e=e(),K(),e),Ye=R(()=>a("b",{style:{color:"#8b4513"}},"National ",-1)),ze=R(()=>a("b",{style:{color:"#cd853f"}},"EMR",-1)),He={slot:"start"},je=["src"],qe=["src"];function Xe(e,t,o,p,w,m){const n=u("ion-label"),f=u("ion-title"),s=u("ion-toolbar"),l=u("ion-header"),y=u("inputs"),I=u("ion-content"),v=u("ion-select-option"),Y=u("ion-select"),L=u("ion-button"),z=u("ion-item"),H=u("ion-footer"),j=u("ion-page");return d(),T(j,null,{default:i(()=>[r(l,null,{default:i(()=>[r(s,null,{default:i(()=>[r(f,null,{default:i(()=>[r(n,{style:{fontWeight:"bolder",fontSize:"1.9em"}},{default:i(()=>[Ye,ze]),_:1})]),_:1}),r(n,{class:"ion-padding",slot:"end"},{default:i(()=>[g(" Version: "),a("b",null,h(e.version),1)]),_:1})]),_:1})]),_:1}),r(I,{fullscreen:"false",style:{}},{default:i(()=>[r(y,{useVirtualInput:e.useVirtualInputOnly},null,8,["useVirtualInput"])]),_:1}),r(H,null,{default:i(()=>[r(s,null,{default:i(()=>[a("span",He,[a("img",{id:"coat",src:e.coatImg,alt:"Malawi Coat of Arms logo"},null,8,je),a("img",{id:"pepfar",src:e.pepfarImg,alt:"PEPFAR logo"},null,8,qe)]),r(z,{class:"his-sm-text",style:{width:"75%"},slot:"end"},{default:i(()=>[r(n,null,{default:i(()=>[g("Device Profile")]),_:1}),r(Y,{modelValue:e.profile,"onUpdate:modelValue":t[0]||(t[0]=b=>e.profile=b),value:e.profile},{default:i(()=>[(d(!0),c(k,null,P(e.deviceProfiles,(b,q)=>(d(),T(v,{key:q,value:b.label},{default:i(()=>[g(h(b.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","value"]),r(L,{color:"dark",fill:"outline",size:"large",slot:"end","router-link":"/settings/host"},{default:i(()=>[g(" Network ")]),_:1}),e.otherApps.length?(d(),T(L,{key:0,color:"dark",fill:"outline",size:"large",slot:"end",onClick:e.openSelect},{default:i(()=>[g(" Other Applications ")]),_:1},8,["onClick"])):V("",!0)]),_:1})]),_:1})]),_:1})]),_:1})}const We=U(Re,[["render",Xe],["__scopeId","data-v-5c9fa721"]]);export{We as default};