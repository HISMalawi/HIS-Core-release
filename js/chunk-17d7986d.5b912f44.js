(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17d7986d"],{"10be":function(e,t,i){"use strict";var n=i("7a23");const a={class:"keypad"};function r(e,t,i,r,s,o){const c=Object(n["resolveComponent"])("ion-input"),l=Object(n["resolveComponent"])("ion-chip"),d=Object(n["resolveComponent"])("center"),u=Object(n["resolveComponent"])("base-keyboard"),m=Object(n["resolveComponent"])("ion-content");return Object(n["openBlock"])(),Object(n["createBlock"])(m,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",a,[Object(n["createVNode"])(c,{value:e.value,disabled:!0,class:"keypad-input"},null,8,["value"]),Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title||"keypad"),1)]),_:1})]),_:1}),Object(n["createVNode"])(u,{btnSize:"96px",layout:e.keypad,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])])]),_:1})}var s=i("c924"),o=i("3800"),c=i("2345"),l=i("fe70"),d=Object(n["defineComponent"])({components:{BaseKeyboard:s["a"]},props:{title:{type:String},preset:{type:String},onKeyPress:{type:Function,required:!0},strictNumbers:{type:Boolean,default:!1}},data:()=>({value:"0",keypad:o["d"]}),watch:{preset:{handler(e){e&&(this.value=e.toString())},immediate:!0}},methods:{async keypress(e){if(e.match(/done/i))await l["j"].dismiss(this.value);else if(this.strictNumbers){if(e.includes(".")&&this.value.includes("."))return;e.includes(".")||"0"!==this.value||(this.value=""),this.value=Object(c["a"])(e,this.value),this.value||(this.value="0"),""+parseInt(this.value)===this.value?this.onKeyPress(parseInt(this.value)):this.onKeyPress(this.value)}else this.value=Object(c["a"])(e,this.value),this.onKeyPress(this.value)}}}),u=(i("27f1"),i("d959")),m=i.n(u);const h=m()(d,[["render",r],["__scopeId","data-v-7454247c"]]);t["a"]=h},"12c7":function(e,t,i){"use strict";i.r(t);var n=i("7a23");function a(e,t,i,a,r,s){const o=Object(n["resolveComponent"])("his-standard-form");return Object(n["openBlock"])(),Object(n["createBlock"])(o,{skipSummary:!0,activeField:e.fieldComponent,onOnIndex:t[0]||(t[0]=t=>e.fieldComponent=""),fields:e.fields},null,8,["activeField","fields"])}var r=i("2ef0"),s=i("d95e"),o=i("d867"),c=i("23e6"),l=i("ade3"),d=i("1c74"),u=i("b89f"),m=i("d1ca");class h extends d["e"]{constructor(){super(),Object(l["a"])(this,"patientID",void 0),Object(l["a"])(this,"activePrefix",void 0),Object(l["a"])(this,"dormantPrefix",void 0),this.patientID=0,this.activePrefix="",this.dormantPrefix=""}getActivePrx(){return this.activePrefix}getDormantPrx(){return this.dormantPrefix}getPatientID(){return this.patientID}setPatientID(e){this.patientID=e}formatNumber(e){const t=e.search(this.activePrefix)>=0?this.activePrefix:e.search(this.dormantPrefix)>=0?this.dormantPrefix:"";return t?e.substring(t.length,e.length):e}async loadFilingPrefix(){const e=await m["b"].filingNumberPrefix();if(e){const[t,i]=e.split(",");this.activePrefix=t,this.dormantPrefix=i}}isActiveFilingNum(e){return!!e.match(new RegExp(this.activePrefix,"i"))}isDormantFilingNum(e){return!!e.match(new RegExp(this.dormantPrefix,"i"))}async assignFilingNumber(){return d["e"].postJson(`patients/${this.patientID}/filing_number`,{})}async getFilingNumber(e){const t=`${this.activePrefix}${e}`,i=await d["e"].getJson("search/patients/by_identifier",{type_id:17,identifier:t});return i?i.map(e=>{const i=new c["a"](e);return{identifier:t,patient_id:i.getID(),given_name:i.getGivenName(),family_name:i.getFamilyName(),state:"N/A",appointment_date:""}}):[]}archiveFilingNumber(){return d["e"].getJson("archive_active_filing_number",{patient_id:this.patientID})}archivePatient(e,t){return d["e"].postJson("swap_active_number",{primary_patient_id:this.patientID,secondary_patient_id:e,identifier:t})}getArchivingCandidates(e=0,t=10){return d["e"].getJson("archiving_candidates",{page:e,page_size:t})}getPastFilingNumbers(){return d["e"].getJson(`patients/${this.patientID}/past_filing_numbers`)}printFilingNumber(){const e=new u["a"];return e.printLbl(`patients/${this.patientID}/labels/filing_number`)}}var p=i("7920"),b=i("2706"),f=i("b5e4"),g=i("9283"),v=i("10be"),y=i("0fa1"),F=i("8e8b"),N=Object(n["defineComponent"])({components:{HisStandardForm:p["a"]},data:()=>({service:{},patient:{},fieldComponent:"",fields:[],nextWorkflowRouteName:"",filingNumberAssignment:{}}),watch:{$route:{async handler({query:e,params:t}){if(t&&t.patient_id&&(this.service=new h,this.service.setPatientID(t.patient_id),this.patient=await this.getPatient(t.patient_id),await this.service.loadFilingPrefix()),e){if(this.fields=[this.getFilingNumberField(),this.getCandidateSelectionField(),this.getFilingNumberHistoryField()],"true"===e.archive)return void await this.archiveFilingNumber();"true"===e.assign&&await this.onAssignFilingNumber(),"true"===e.trail&&(this.fieldComponent="view_filing_history"),e.next_workflow_task&&(this.nextWorkflowRouteName=e.next_workflow_task)}},immediate:!0,deep:!0}},methods:{toFID(e){return this.service.formatNumber(e)},async onAssignFilingNumber(){const e=await this.newFilingNumber();e?(this.filingNumberAssignment=e,this.fieldComponent="filing_number_management",F["a"].invalidate("ACTIVE_PATIENT")):(this.fieldComponent="select_candidate_to_swap",Object(f["e"])("Out of filing numbers, Please select eligible candidate"))},async newFilingNumber(){const e={primary:{label:"Dormant → Active",value:this.patient.name,other:{activeNumber:this.patient.filingID?this.toFID(this.patient.filingID):"N/A",dormantNumber:"N/A"}},archived:{label:"Active → Dormant",value:"N/A",other:{activeNumber:"N/A",dormantNumber:"N/A"}}};if(this.service.isActiveFilingNum(this.patient.filingID))return e;await this.presentLoading();const t=await this.service.assignFilingNumber();if(o["X"].dismiss(),!Object(r["isEmpty"])(t)){if(e.primary.other={activeNumber:this.toFID(t.new_identifier.identifier),dormantNumber:this.service.isDormantFilingNum(this.patient.filingID)?this.toFID(this.patient.filingID):"N/A"},!Object(r["isEmpty"])(t.archived_identifier)){const i=await this.getPatient(t.archived_identifier.patient_id);e.archived={label:"Active → Dormant",value:i.name,other:{activeNumber:this.toFID(t.archived_identifier.identifier),dormantNumber:this.toFID(t.new_identifier.identifier)}}}return e}},async swapExistingFilingNumbers(e){const t=await this.service.archivePatient(e.patient_id,e.identifier);if(t)return{primary:{label:"Dormant → Active",value:this.patient.name,other:{activeNumber:this.toFID(t.active_number),dormantNumber:this.toFID(this.patient.filingID)||"N/A"}},archived:{label:"Active → Dormant",value:`${e.given_name} ${e.family_name}`,other:{patientID:e.patient_id,activeNumber:this.toFID(t.dormant_number),dormantNumber:this.toFID(t.active_number)}}}},async presentLoading(e="Please wait..."){const t=await o["X"].create({message:e,backdropDismiss:!1});await t.present()},async getPatient(e){const t=await c["a"].findByID(e);if(t){const e=new c["a"](t);return{id:e.getID(),filingID:e.getFilingNumber(),name:`${e.getGivenName()} ${e.getFamilyName()}`}}return{}},async archiveFilingNumber(){await this.presentLoading("Archiving filing number");try{await this.service.archiveFilingNumber(),await this.service.printFilingNumber(),F["a"].invalidate("ACTIVE_PATIENT")}catch(e){Object(f["c"])(""+e)}await o["X"].dismiss(),this.$router.back()},async filingNumberSearchKeypad(){const e=await o["Z"].create({component:v["a"],backdropDismiss:!1,cssClass:"keypad-modal",componentProps:{title:"Find Active number",strictNumbers:!1,onKeyPress:()=>{}}});await e.present();const{data:t}=await e.onDidDismiss();return t},async getArchivingCandidates(e=0){const t=await this.service.getArchivingCandidates(e);return this.formatCandidateOptions(t)},formatCandidateOptions(e){return e.map(e=>({label:`${e.given_name} ${e.family_name} (${e.state})`,value:e.identifier,other:{data:e,list:[{label:"Filing #",value:this.toFID(e.identifier),style:{color:"green",fontWeight:"bold"}},{label:"Given name",value:e.given_name},{label:"Family name",value:e.family_name},{label:"Outcome",value:e.state.match(/trans/i)?"TO":e.state.match(/stop/i)?"Tx stopped":e.state},{label:"LAD",value:g["b"].toStandardHisDisplayFormat(e.appointment_date)}]}}))},getFilingNumberHistoryField(){return{id:"view_filing_history",type:s["b"].TT_TABLE_VIEWER,helpText:"Filing Number Trail",condition:()=>!1,options:async()=>{const e=["Status","Filing #","Date Created","Date voided"],t=await this.service.getPastFilingNumbers(),i=t.map(e=>{const t=0===e.voided;return[t?"Active":"Voided",this.toFID(e.identifier),g["b"].toStandardHisDisplayFormat(e.date_created),t?"N/A":g["b"].toStandardHisDisplayFormat(e.date_voided)]});return[{label:"Filing Number Trail",value:"Trail",other:{columns:e,rows:i}}]},config:{toolbarInfo:[{label:"Current filing #",value:this.toFID(this.patient.filingID)},{label:"Status",value:this.service.isActiveFilingNum(this.patient.filingID)?"Active":this.service.isDormantFilingNum(this.patient.filingID)?"Dormant":"N/A"}],hiddenFooterBtns:["Clear","Next","Back","Finish"],footerBtns:[{name:"Get filing #",slot:"end",state:{visible:{default:()=>this.service.isDormantFilingNum(this.patient.filingID)}},onClick:async()=>await this.onAssignFilingNumber()}]}}},getCandidateSelectionField(){let e={},t=0,i="",n=[];return{id:"select_candidate_to_swap",type:s["b"].TT_CARD_SELECTOR,helpText:"Filing Number (Archive)",condition:()=>!1,validation:e=>b["a"].required(e),onload:t=>e=t,onValue:async e=>{if(e){const t=await Object(f["a"])("Do you want to archive "+e.value);if(t){const t=await this.swapExistingFilingNumbers(e.other.data);if(t)return this.filingNumberAssignment=t,this.fieldComponent="filing_number_management",!0}}return!1},options:()=>this.getArchivingCandidates(),config:{hiddenFooterBtns:["Clear","Back","Finish","Next"],footerBtns:[{name:"Reset",slot:"end",color:"warning",state:{visible:{default:()=>!!i}},onClick:()=>{i="",e.listData=n,n=[]}},{name:"Specify",slot:"end",color:"success",onClick:async()=>{if(i=await this.filingNumberSearchKeypad(),i){const t=await this.service.getFilingNumber(i);n=[...e.listData],e.listData=this.formatCandidateOptions(t)}}},{name:"Previous batch",slot:"end",state:{visible:{default:()=>!i},disabled:{default:()=>t<=0}},onClick:async()=>{t-=1,e.listData=await this.getArchivingCandidates(t)}},{name:"Next batch",slot:"end",state:{visible:{default:()=>!i},disabled:{default:()=>e.listData&&e.listData.length<=1}},onClick:async()=>{t+=1,e.listData=await this.getArchivingCandidates(t)}}]}}},getFilingNumberField(){return{id:"filing_number_management",type:s["b"].TT_FILING_NUMBER_VIEW,helpText:"Filing Number Management",onload:async()=>await this.service.printFilingNumber(),condition:()=>!1,options:()=>[this.filingNumberAssignment.primary,this.filingNumberAssignment.archived],config:{hiddenFooterBtns:["Cancel","Clear","Next"],footerBtns:[{name:"Print #",slot:"start",onClick:async()=>this.service.printFilingNumber()},{name:"Print Dormant#",slot:"start",state:{visible:{default:()=>{var e,t,i;return!(null===(e=this.filingNumberAssignment)||void 0===e||null===(t=e.archived)||void 0===t||null===(i=t.other)||void 0===i||!i.patientID)}}},onClick:async()=>{const e=new h;e.setPatientID(this.filingNumberAssignment.archived.other.patientID),await e.printFilingNumber()}},{name:"Continue",color:"success",slot:"end",onClick:()=>Object(y["b"])(this.patient.id,this.$router,this.$route)}]}}}}}),w=i("d959"),D=i.n(w);const _=D()(N,[["render",a]]);t["default"]=_},2345:function(e,t,i){"use strict";function n(e,t,i){let n=t;if(e.match(/enter/i))return n+"\r\n";if(e.match(/clear/i))return"";if(n=e.match(/delete|del/i)?n.match(/unknown/i)||n.match(/n\/a/i)?"":n.substring(0,n.length-1):e.match(/space/i)?t+" ":e.match(/unknown/i)?"Unknown":e.match(/n\/a/i)?"N/A":n.match(/unknown/i)||n.match(/n\/a/i)?e:`${t}${e}`,"string"===typeof n&&n)switch(i){case"lowercase":n=n.toLowerCase();break;case"uppercase":n=n.toUpperCase();break;default:n=n.charAt(0).toUpperCase()+n.slice(1);break}return n}i.d(t,"a",(function(){return n}))},"27f1":function(e,t,i){"use strict";i("3f97")},3800:function(e,t,i){"use strict";i.d(t,"d",(function(){return n})),i.d(t,"l",(function(){return a})),i.d(t,"e",(function(){return r})),i.d(t,"b",(function(){return s})),i.d(t,"k",(function(){return o})),i.d(t,"i",(function(){return c})),i.d(t,"g",(function(){return l})),i.d(t,"a",(function(){return d})),i.d(t,"j",(function(){return u})),i.d(t,"c",(function(){return m})),i.d(t,"h",(function(){return h})),i.d(t,"f",(function(){return p}));const n=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],a=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],r=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],s=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],o=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],c=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],l=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],d=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],u=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],m=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],h=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],p=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"3f97":function(e,t,i){},7920:function(e,t,i){"use strict";var n=i("7a23");function a(e,t,i,a,r,s){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var r=i("9441"),s=Object(n["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:r["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),o=i("d959"),c=i.n(o);const l=c()(s,[["render",a]]);t["a"]=l},c924:function(e,t,i){"use strict";var n=i("7a23");function a(e,t,i,a,r,s){const o=Object(n["resolveComponent"])("ion-button");return Object(n["openBlock"])(),Object(n["createElementBlock"])("table",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.layout,(t,i)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:i},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(t,i)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("td",{class:"his-keyboard-margin",key:"btn-"+i},[t?(Object(n["openBlock"])(),Object(n["createBlock"])(o,{key:0,style:Object(n["normalizeStyle"])({width:e.btnSize}),class:"his-keyboard-btn",onClick:()=>e.keyPress(t)},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t),1)]),_:2},1032,["style","onClick"])):Object(n["createCommentVNode"])("",!0)]))),128))]))),128))])}var r=i("d867"),s=Object(n["defineComponent"])({components:{IonButton:r["d"]},props:{btnSize:{type:String,default:"90%"},layout:{type:Array,required:!0,default:()=>[]},onKeyPress:{type:Function,required:!0}},methods:{keyPress(e){this.onKeyPress(e)}}}),o=i("d959"),c=i.n(o);const l=c()(s,[["render",a]]);t["a"]=l}}]);
//# sourceMappingURL=chunk-17d7986d.5b912f44.js.map