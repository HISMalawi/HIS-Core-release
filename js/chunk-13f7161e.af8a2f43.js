(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13f7161e"],{"12f0":function(e,t,a){"use strict";a.r(t);var n=a("7a23");function i(e,t,a,i,o,l){const r=Object(n["resolveComponent"])("information-header"),s=Object(n["resolveComponent"])("report-table"),c=Object(n["resolveComponent"])("preloader"),u=Object(n["resolveComponent"])("pagination"),d=Object(n["resolveComponent"])("ion-content"),b=Object(n["resolveComponent"])("his-footer"),p=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(p,{style:{background:"#fff"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(r,{items:e.patientCardInfo,numberOfColumns:4,onAddGuardian:e.addGuardian,onUpdate:e.updateDemographics,onUpdateARVNumber:e.updateARVNumber},null,8,["items","onAddGuardian","onUpdate","onUpdateARVNumber"]),Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,{paginated:!0,rows:e.rows,columns:e.columns,rowsPerPage:e.itemsPerPage,newPage:e.currentPage,asyncRowParser:e.onNewRow,onOnPagination:t[0]||(t[0]=t=>e.totalPages=t.length)},null,8,["rows","columns","rowsPerPage","newPage","asyncRowParser"]),e.visitDatesInitialised?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(c,{key:0,itemCount:5})),Object(n["createVNode"])(u,{perPage:e.itemsPerPage,maxVisibleButtons:20,totalPages:e.totalPages,onOnChangePage:t[1]||(t[1]=t=>e.currentPage=t)},null,8,["perPage","totalPages"])]),_:1}),Object(n["createVNode"])(b,{btns:e.btns},null,8,["btns"])]),_:1})}a("14d9");var o=a("9283"),l=a("23e6"),r=a("7957");const s={style:{padding:".1rem"}},c={style:{width:"100%",display:"flex",justifyContent:"space-between",fontSize:"12px",margin:0,padding:0}},u=["onClick"],d=["innerHTML"];function b(e,t,a,i,o,l){const r=Object(n["resolveComponent"])("ion-item"),b=Object(n["resolveComponent"])("ion-list"),p=Object(n["resolveComponent"])("multi-column-view");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s,[Object(n["createVNode"])(p,{items:e.items,numberOfColumns:e.numberOfColumns},{default:Object(n["withCtx"])(({entries:t})=>[Object(n["createVNode"])(b,null,{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t,t=>(Object(n["openBlock"])(),Object(n["createBlock"])(r,{key:t.label,style:{padding:"0 !important",margin:"0 !important"}},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.label)+": ",1),t.other&&t.other.editable?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",{key:0,onClick:a=>e.onClick(t)},[Object(n["createElementVNode"])("a",null,[Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(t.value),1)])],8,u)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("b",{key:1,innerHTML:t.value||"N/A"},null,8,d))])]),_:2},1024))),128))]),_:2},1024)]),_:1},8,["items","numberOfColumns"])])}var p=a("92c1"),m=Object(n["defineComponent"])({name:"InformationHeader",components:{MultiColumnView:p["a"]},props:{icon:{required:!1},items:{type:Object,required:!0},numberOfColumns:{type:Number,default:2}},emits:["update","updateARVNumber","addGuardian"],setup(e,{emit:t}){const a=e=>"demographics"===e.other.category?t("update",e.other.attribute):"arv_number"===e.other.category?t("updateARVNumber"):t("addGuardian");return{onClick:a}}}),h=(a("8945"),a("6b0d")),g=a.n(h);const O=g()(m,[["render",b],["__scopeId","data-v-94355f20"]]);var v=O,j=a("0f25"),f=a("2ef0"),C=a("d867"),V=a("7def"),y=a("b5e4"),P=a("ad60"),I=a("4db7"),w=a("8e8b"),N=a("80e3"),k=a("9ceb"),T=a("1799"),B=a("ded6");function x(e,t,a,i,o,l){const r=Object(n["resolveComponent"])("ion-title"),s=Object(n["resolveComponent"])("ion-toolbar"),c=Object(n["resolveComponent"])("ion-header"),u=Object(n["resolveComponent"])("information-header"),d=Object(n["resolveComponent"])("ion-content"),b=Object(n["resolveComponent"])("ion-button"),p=Object(n["resolveComponent"])("ion-footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(c,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(r,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,{items:e.visitData},null,8,["items"])]),_:1}),Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{onClick:e.closeModal,slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Close ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var _=Object(n["defineComponent"])({components:{InformationHeader:v},props:{title:{type:String,required:!0},visitData:{type:Object,required:!0}},methods:{async closeModal(){await C["modalController"].dismiss({})}}});const D=g()(_,[["render",x]]);var A=D,S=Object(n["defineComponent"])({components:{Preloader:B["a"],Pagination:T["a"],IonPage:C["IonPage"],ReportTable:N["a"],IonContent:C["IonContent"],HisFooter:j["a"],InformationHeader:v},data:()=>({patientId:0,patient:{},patientCardInfo:[],btns:[],itemsPerPage:10,currentPage:0,totalPages:0,pages:[],visitDates:[],tbStats:[],visitDatesInitialised:!1,columns:[[k["a"].thTxt("VISIT DATE"),k["a"].thTxt("WEIGHT (Kg)"),k["a"].thTxt("REG"),k["a"].thTxt("VIRAL LOAD"),k["a"].thTxt("TB STATUS"),k["a"].thTxt("OUTCOME"),k["a"].thTxt("PILLS DISPENSED"),k["a"].thTxt("ACTIONS")]],rows:[]}),created(){this.setPatientCards(),this.patientId=parseInt(""+this.$route.params.patient_id),l["a"].getPatientVisits(this.patientId,!0).then(e=>{this.visitDatesInitialised=!0,this.visitDates=e,this.rows=e.map(e=>[k["a"].tdBtn(o["c"].toStandardHisDisplayFormat(e),()=>new I["a"](this.patientId).printVisitSummaryLbl(e)),k["a"].td("..."),k["a"].td("..."),k["a"].td("..."),k["a"].td("..."),k["a"].td("..."),k["a"].td("..."),k["a"].td("...")])}).catch(e=>{this.visitDatesInitialised=!0,Object(y["c"])(""+e),console.error(e)}),this.btns.push({name:"Finish",color:"success",size:"large",slot:"end",visible:!0,onClick:()=>{Object(y["a"])("Are you sure you want to exit?").then(e=>{if(e)return this.$router.push("/patient/dashboard/"+this.patientId)})}})},async mounted(){if(this.patientId)for(const e of this.patientCardInfo)"function"===typeof e.init&&await e.init(),"function"===typeof e.asyncValue?e.asyncValue(e).then(t=>e.value=t||""):"function"===typeof e.staticValue&&(e.value=e.staticValue())},methods:{setPatientCards(){this.patientCardInfo=[{label:"ARV Number",value:"...",staticValue:()=>this.patient.getArvNumber(),init:async()=>{this.patient=await w["a"].get("ACTIVE_PATIENT",{patientID:this.patientId})},other:{editable:!0,category:"arv_number"}},{label:"National Patient ID",value:"...",staticValue:()=>this.patient.getNationalID()},{label:"Given Name",value:"...",staticValue:()=>this.patient.getGivenName(),other:{editable:!0,attribute:"given_name",category:"demographics"}},{label:"Family Name",value:"...",staticValue:()=>this.patient.getFamilyName(),other:{editable:!0,attribute:"family_name",category:"demographics"}},{label:"Age",value:"...",staticValue:()=>this.patient.getAge(),other:{editable:!0,attribute:"year_birth_date",category:"demographics"}},{label:"Sex",value:"...",staticValue:()=>this.patient.getGender(),other:{editable:!0,attribute:"gender",category:"demographics"}},{label:"Location",value:"...",staticValue:()=>this.patient.getCurrentVillage(),other:{editable:!0,attribute:"home_region",category:"demographics"}},{label:"Landmark",value:"...",staticValue:()=>this.patient.getAttribute(19)},{label:"Guardian",value:"...",asyncValue:async e=>{const t=await V["a"].getGuardianDetails(this.patientId);return Object(f["isEmpty"])(t)?(e.other.editable=!0,"add"):t.map(e=>` ${e.name} (${e.relationshipType})`).join(" ")},other:{editable:!1,attribute:"",category:"guardian"}},{label:"Init W(KG)",value:"...",asyncValue:()=>this.patient.getInitialWeight()},{label:"Init H(CM)",value:"...",asyncValue:()=>this.patient.getInitialHeight()},{label:"Init BMI",value:"...",asyncValue:()=>this.patient.getInitialBMI()},{label:"TI",value:"...",asyncValue:()=>r["a"].getFirstValueCoded(this.patientId,"Ever received ART")},{label:"Agrees to follow up",value:"...",asyncValue:()=>r["a"].getFirstValueCoded(this.patientId,"Agrees to followup")},{label:"Reason for starting ART",value:"...",asyncValue:()=>r["a"].getFirstValueCoded(this.patientId,"Reason for ART eligibility")},{label:"HIV test date",value:"...",asyncValue:async()=>{const e=await r["a"].getFirstValueDatetime(this.patientId,"Confirmatory HIV test date");return e?o["c"].toStandardHisDisplayFormat(e):""}},{label:"HIV test place",value:"...",asyncValue:()=>r["a"].getFirstValueText(this.patientId,"Confirmatory HIV test location")},{label:"Date of starting first line ART",value:"...",asyncValue:async()=>{const e=await r["a"].getFirstValueDatetime(this.patientId,"Date ART started");return e?o["c"].toStandardHisDisplayFormat(e):""}},{label:"Pulmonary TB within the last 2 years",value:"...",init:async()=>{this.tbStats=await r["a"].getAllValueCoded(this.patientId,"Who stages criteria present")||[]},staticValue:()=>this.hasTbStat("Tuberculosis (PTB or EPTB) within the last 2 years")},{label:"Extra pulmonary TB (EPTB)",value:"...",staticValue:()=>this.hasTbStat("Extrapulmonary tuberculosis (EPTB)")},{label:"Pulmonary TB (current)",value:"...",staticValue:()=>this.hasTbStat("Pulmonary tuberculosis (current)")},{label:"Kaposis sarcoma",value:"...",staticValue:()=>this.hasTbStat("Kaposis sarcoma")}]},buildDetails(e){const t=e=>e.map(([e,t])=>`${e} (${t})`).join("/");return[{label:"Outcome",value:e.outcome},{label:"Outcome Date",value:e.outcome_date},{label:"Side effects",value:e.side_effects},{label:"Viral load",value:e.viral_load},{label:"Pills Brought",value:t(e.pills_brought)},{label:"Pills dispensed",value:t(e.pills_dispensed)},{label:"Visit by",value:e.visit_by},{label:"Regimen",value:e.regimen},{label:"Adherence",value:t(e.adherence)},{label:"TB Status",value:e.tb_status},{label:"Height (cm)",value:e.height},{label:"Weight (Kg)",value:e.weight},{label:"BMI",value:e.bmi}]},async onNewRow(e){const t=[...e];if(t[1]&&"..."!=t[1].td)return t;const a=t[0].td,n=await P["a"].getCurrentProgramInformation(this.patientId,a),i=await P["a"].getMastercardDrugInformation(this.patientId,a),o=((null===i||void 0===i?void 0:i.pills_given)||[]).map(e=>`${e["short_name"]||e["name"]} <b>(${e.quantity||"?"})</b>`).join("<br/>");return t[1]=k["a"].td(n.weight),t[2]=k["a"].td(n.regimen),t[3]=k["a"].td(n.viral_load),t[4]=k["a"].td(n.tb_status),t[5]=k["a"].td(n.outcome.match(/Unk/i)?"Unknown":n.outcome),t[6]=k["a"].td(o),t[7]=k["a"].tdBtn("More",async()=>{(await C["modalController"].create({component:A,backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:a,visitData:this.buildDetails(n)}})).present()}),t},hasTbStat(e){return this.tbStats.includes(e)?"Yes":"No"},updateDemographics(e){this.$router.push({path:"/patient/registration",query:{edit_person:this.patientId,person_attribute:e}})},addGuardian(){var e;this.$router.push({path:"/guardian/registration/"+this.patientId,query:{source:null===(e=this.$route.name)||void 0===e?void 0:e.toString()}})},updateARVNumber(){this.$router.push({name:"Edit ARV Number"})}}});const E=g()(S,[["render",i]]);t["default"]=E},1799:function(e,t,a){"use strict";var n=a("7a23");const i={class:"pagination"},o={class:"btn-group"};function l(e,t,a,l,r,s){const c=Object(n["resolveComponent"])("ion-button"),u=Object(n["resolveComponent"])("ion-icon");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[Object(n["createElementVNode"])("div",o,[Object(n["createVNode"])(c,{color:"light",onClick:e.setFirstPage,disabled:e.isInFirstPage},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" First ")]),_:1},8,["onClick","disabled"]),Object(n["createVNode"])(c,{color:"light",onClick:e.prevPage},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,{icon:e.caretBack},null,8,["icon"])]),_:1},8,["onClick"]),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.pages,e=>(Object(n["openBlock"])(),Object(n["createBlock"])(c,{onClick:t=>e.show(),color:e.isActive?"primary":"light",key:e.index},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.name),1)]),_:2},1032,["onClick","color"]))),128)),Object(n["createVNode"])(c,{color:"light",onClick:e.nextPage},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,{icon:e.caretForward},null,8,["icon"])]),_:1},8,["onClick"]),Object(n["createVNode"])(c,{color:"light",onClick:e.setLastPage,disabled:e.isInLastPage},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Last ")]),_:1},8,["onClick","disabled"])]),Object(n["createElementVNode"])("h6",null,"Page "+Object(n["toDisplayString"])(e.currentPage+1)+" of "+Object(n["toDisplayString"])(e.totalPages),1)])}a("14d9");var r=a("ff79"),s=a("d867"),c=Object(n["defineComponent"])({components:{IonIcon:s["IonIcon"],IonButton:s["IonButton"]},props:{maxVisibleButtons:{type:Number,required:!1,default:3},totalPages:{type:Number,required:!0}},emits:["onChangePage"],setup(e,{emit:t}){const a=Object(n["ref"])(0),i=Object(n["computed"])(()=>0===a.value),o=Object(n["computed"])(()=>a.value===e.totalPages),l=Object(n["computed"])(()=>0===a.value?0:a.value===e.totalPages?e.totalPages-e.maxVisibleButtons:a.value-1),s=e=>t("onChangePage",e),c=Object(n["computed"])(()=>{const t=[];for(let n=l.value;n<=Math.min(l.value+e.maxVisibleButtons-1,e.totalPages-1);n++)t.push({index:n,name:n+1,show:()=>a.value=n,isActive:n===a.value});return t});Object(n["watch"])(e,({totalPages:e})=>{"number"===typeof e&&(a.value=0)},{immediate:!0,deep:!0}),Object(n["watch"])(a,e=>s(e));const u=()=>a.value=0,d=()=>a.value=e.totalPages-1,b=()=>{a.value>0&&(a.value-=1)},p=()=>{a.value+1<e.totalPages&&(a.value+=1)};return{currentPage:a,caretBack:r["caretBack"],caretForward:r["caretForward"],startPage:l,pages:c,isInFirstPage:i,isInLastPage:o,nextPage:p,prevPage:b,setPage:s,setFirstPage:u,setLastPage:d}}}),u=(a("f099"),a("6b0d")),d=a.n(u);const b=d()(c,[["render",l],["__scopeId","data-v-04a5a269"]]);t["a"]=b},"3aa1":function(e,t,a){},"5a7d":function(e,t,a){},8945:function(e,t,a){"use strict";a("5a7d")},f099:function(e,t,a){"use strict";a("3aa1")}}]);
//# sourceMappingURL=chunk-13f7161e.af8a2f43.js.map