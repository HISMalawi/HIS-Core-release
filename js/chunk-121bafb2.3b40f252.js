(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-121bafb2"],{"054e":function(e,t,o){"use strict";o("9c1a")},"4a46":function(e,t,o){"use strict";o("5a43")},"4ba2":function(e,t,o){"use strict";var n=o("7a23");const i=Object(n["withScopeId"])("data-v-47b6d7e8");Object(n["pushScopeId"])("data-v-47b6d7e8");const r={class:"header-text-list"},a=Object(n["createTextVNode"])("Title "),c=Object(n["createTextVNode"])("Period "),s={key:1},l={key:0},d=Object(n["createTextVNode"])(" Error(s) found. Click for more "),p=Object(n["createTextVNode"])(" Report is Consistent "),b={class:"report-content"},u=Object(n["createTextVNode"])("Date Created: "),m=Object(n["createTextVNode"])("His-Core Version: "),h=Object(n["createTextVNode"])("API Version: ");Object(n["popScopeId"])();const O=i((function(e,t,o,O,j,f){const y=Object(n["resolveComponent"])("his-standard-form"),C=Object(n["resolveComponent"])("ion-title"),g=Object(n["resolveComponent"])("ion-img"),v=Object(n["resolveComponent"])("ion-thumbnail"),w=Object(n["resolveComponent"])("ion-chip"),I=Object(n["resolveComponent"])("ion-label"),k=Object(n["resolveComponent"])("ion-item"),V=Object(n["resolveComponent"])("ion-toolbar"),N=Object(n["resolveComponent"])("ion-header"),F=Object(n["resolveComponent"])("report-table"),B=Object(n["resolveComponent"])("ion-content"),D=Object(n["resolveComponent"])("ion-footer"),S=Object(n["resolveComponent"])("his-footer"),T=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["withDirectives"])(Object(n["createVNode"])(y,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[n["vShow"],!e.canShowReport]]),e.canShowReport?(Object(n["openBlock"])(),Object(n["createBlock"])(T,{key:0},{default:i(()=>[Object(n["createVNode"])(N,null,{default:i(()=>[Object(n["createVNode"])(V,null,{default:i(()=>[e.showtitleOnly?(Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:0},{default:i(()=>[Object(n["createVNode"])("span",{innerHTML:e.title},null,8,["innerHTML"])]),_:1})):Object(n["createCommentVNode"])("",!0),e.showtitleOnly?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(k,{key:1},{default:i(()=>[Object(n["createVNode"])(v,{slot:"start"},{default:i(()=>[Object(n["createVNode"])(g,{src:e.logo},null,8,["src"])]),_:1}),Object(n["createVNode"])(I,null,{default:i(()=>[Object(n["createVNode"])("ul",r,[Object(n["createVNode"])("li",null,[a,Object(n["createVNode"])("b",null,Object(n["toDisplayString"])(e.title),1)]),Object(n["createVNode"])("li",null,[c,Object(n["createVNode"])("b",null,Object(n["toDisplayString"])(e.period),1)]),(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.headerInfoList,(e,t)=>{var o,i;return Object(n["openBlock"])(),Object(n["createBlock"])("li",{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.label)+" ",1),e&&null!==e&&void 0!==e&&null!==(o=e.other)&&void 0!==o&&o.onclick?(Object(n["openBlock"])(),Object(n["createBlock"])("a",{key:0,href:"#",onClick:Object(n["withModifiers"])(t=>e.other.onclick(),["prevent"])},Object(n["toDisplayString"])(e.value),9,["onClick"])):Object(n["createCommentVNode"])("",!0),!e||null!==e&&void 0!==e&&null!==(i=e.other)&&void 0!==i&&i.onclick?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])("b",s,[Object(n["createVNode"])("span",{innerHTML:e.value},null,8,["innerHTML"])]))])}),128)),e.showValidationStatus?(Object(n["openBlock"])(),Object(n["createBlock"])("li",l,[e.hasErrors?(Object(n["openBlock"])(),Object(n["createBlock"])(w,{key:0,onClick:e.showErrors,color:"danger"},{default:i(()=>[Object(n["createVNode"])("b",null,Object(n["toDisplayString"])(e.errorCount),1),d]),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0),e.hasErrors?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(w,{key:1,color:"success"},{default:i(()=>[p]),_:1}))])):Object(n["createCommentVNode"])("",!0)])]),_:1})]),_:1}))]),_:1})]),_:1}),Object(n["createVNode"])(B,null,{default:i(()=>[Object(n["createVNode"])("div",b,[Object(n["createVNode"])(F,{rows:e.rows,columns:e.columns,showFilters:e.showFilters,config:{...e.config,tableCssTheme:e.tableCssTheme},onOnActiveColumns:e.onActiveColumns,onOnActiveRows:e.onActiveRows},null,8,["rows","columns","showFilters","config","onOnActiveColumns","onOnActiveRows"])])]),_:1}),Object(n["createVNode"])(D,null,{default:i(()=>[Object(n["createVNode"])(V,null,{default:i(()=>[Object(n["createVNode"])(w,{color:"primary"},{default:i(()=>[u,Object(n["createVNode"])("b",null,Object(n["toDisplayString"])(e.date),1)]),_:1}),Object(n["createVNode"])(w,{color:"primary"},{default:i(()=>[m,Object(n["createVNode"])("b",null,Object(n["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(n["createVNode"])(w,{color:"primary"},{default:i(()=>[h,Object(n["createVNode"])("b",null,Object(n["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(S,{btns:e.btns},null,8,["btns"])]),_:1})):Object(n["createCommentVNode"])("",!0)],64)}));var j=o("0f25"),f=o("80e3"),y=o("ba82"),C=o("9ceb"),g=o("7920"),v=o("8a30"),w=o("b5e4"),I=o("1718"),k=o("1c74"),V=o("5a0c"),N=o.n(V),F=o("2ef0");const B=Object(n["withScopeId"])("data-v-0ed0c7a2");Object(n["pushScopeId"])("data-v-0ed0c7a2");const D=Object(n["createTextVNode"])(" Close ");Object(n["popScopeId"])();const S=B((function(e,t,o,i,r,a){const c=Object(n["resolveComponent"])("ion-title"),s=Object(n["resolveComponent"])("ion-toolbar"),l=Object(n["resolveComponent"])("ion-header"),d=Object(n["resolveComponent"])("ion-item"),p=Object(n["resolveComponent"])("ion-list"),b=Object(n["resolveComponent"])("ion-grid"),u=Object(n["resolveComponent"])("ion-button"),m=Object(n["resolveComponent"])("ion-footer");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])(l,null,{default:B(()=>[Object(n["createVNode"])(s,null,{default:B(()=>[Object(n["createVNode"])(c,null,{default:B(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(b,{class:"selector"},{default:B(()=>[Object(n["createVNode"])(p,null,{default:B(()=>[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.errors,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(d,{class:"his-md-text ion-padding",key:t},{default:B(()=>[Object(n["createVNode"])("span",{innerHTML:`(${t+1}) ${e}`},null,8,["innerHTML"])]),_:2},1024))),128))]),_:1})]),_:1}),Object(n["createVNode"])(m,null,{default:B(()=>[Object(n["createVNode"])(s,null,{default:B(()=>[Object(n["createVNode"])(u,{class:"close-btn",color:"danger",size:"large",onClick:e.closeModal,slot:"end"},{default:B(()=>[D]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}));var T=Object(n["defineComponent"])({components:{IonGrid:v["IonGrid"],IonList:v["IonList"],IonItem:v["IonItem"],IonFooter:v["IonFooter"],IonButton:v["IonButton"],IonToolbar:v["IonToolbar"],IonHeader:v["IonHeader"],IonTitle:v["IonTitle"]},props:{title:{type:String,default:"Report Errors"},errors:{type:Array,required:!0}},methods:{async closeModal(){await v["modalController"].dismiss({})}}}),_=(o("054e"),o("d959")),x=o.n(_);const R=x()(T,[["render",S],["__scopeId","data-v-0ed0c7a2"]]);var P=R,E=Object(n["defineComponent"])({components:{HisStandardForm:g["a"],IonHeader:v["IonHeader"],ReportTable:f["a"],HisFooter:j["a"],IonPage:v["IonPage"],IonContent:v["IonContent"],IonToolbar:v["IonToolbar"],IonChip:v["IonChip"],IonFooter:v["IonFooter"],IonLabel:v["IonLabel"],IonThumbnail:v["IonThumbnail"],IonItem:v["IonItem"],IonImg:v["IonImg"]},props:{showValidationStatus:{type:Boolean,default:!1},validationErrors:{type:Array,default:()=>[]},config:{type:Object},headerInfoList:{type:Array,default:()=>[]},reportPrefix:{type:String,default:"HIS-Core"},reportLogo:{type:String},showtitleOnly:{type:Boolean,default:!1},title:{type:String,required:!0},period:{type:String},showFilters:{type:Boolean,default:!1},fields:{type:Object},columns:{type:Object,required:!0},rows:{type:Object,required:!0},customBtns:{type:Array,default:()=>[]},hasServerSideCaching:{type:Boolean,default:!1},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},enabledPDFHorizontalPageBreak:{type:Boolean,default:!1},onFinishBtnAction:{type:Function},onReportConfiguration:{type:Function,required:!0},onDefaultConfiguration:{type:Function},customFileName:{type:String,default:""}},data:()=>({date:"",formData:{},btns:[],computeFormData:{},activeColumns:[],activeRows:[],isLoadingData:!1,canShowReport:!1,siteUUID:k["e"].getSiteUUID(),apiVersion:k["e"].getApiVersion(),coreVersion:k["e"].getCoreVersion(),artVersion:k["e"].getAppVersion(),tableCssTheme:"art-report-theme"}),watch:{validationErrors:{handler(e){Object(F["isEmpty"])(e)||this.showErrors()},deep:!0,immediate:!0},fields:{handler(e){Object(F["isEmpty"])(e)||this.btns.forEach(e=>{"Back"===e.name&&(e.visible=!0)})},immediate:!0}},computed:{logo(){if(!this.reportLogo&&"string"===typeof this.reportPrefix){if(this.reportPrefix.match(/pepfar/i))return Object(I["a"])("login-logos/PEPFAR.png");if(this.reportPrefix.match(/moh/i))return Object(I["a"])("login-logos/Malawi-Coat_of_arms_of_arms.png")}return Object(I["a"])("reports.png")},hasErrors(){return!Object(F["isEmpty"])(this.validationErrors)},errorCount(){return this.validationErrors?this.validationErrors.length:0}},methods:{async showErrors(){const e=await v["modalController"].create({component:P,backdropDismiss:!1,cssClass:"large-modal",componentProps:{errors:this.validationErrors}});e.present()},refreshTimeStamp(){this.date=N()().format("DD/MMM/YYYY HH:MM:ss")},onActiveColumns(e){this.activeColumns=e},onActiveRows(e){this.activeRows=e},getFileName(){return this.customFileName?this.customFileName:`${this.reportPrefix} ${k["e"].getLocationName()} ${this.title} ${this.period}`},async onLoadDefault(){this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),this.onDefaultConfiguration&&await this.onDefaultConfiguration(),v["loadingController"].dismiss()}catch(e){Object(w["c"])(e),console.error(e),v["loadingController"].dismiss()}},async onFinish(e,t,o=!1){this.formData=e,this.computeFormData=t,this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),await this.onReportConfiguration(this.formData,this.computeFormData,o),v["loadingController"].dismiss()}catch(n){Object(w["c"])(n),console.error(n),v["loadingController"].dismiss()}},async reloadReport(e=!1){Object(F["isEmpty"])(this.formData)&&Object(F["isEmpty"])(this.computeFormData)?this.onDefaultConfiguration&&await this.onLoadDefault():await this.onFinish(this.formData,this.computeFormData,e)},async presentLoading(){const e=await v["loadingController"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.onDefaultConfiguration&&this.onLoadDefault(),this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(C["b"])(this.activeColumns,this.activeRows);Object(y["a"])(e,[...t,["Date Created: "+this.date],["Quarter: "+this.period],["HIS-Core Version: "+this.coreVersion],["API Version: "+this.apiVersion],["Site UUID: "+this.siteUUID]],this.getFileName())}}),this.btns.push({name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{const{columns:e,rows:t}=Object(C["b"])(this.activeColumns,this.activeRows);Object(y["c"])(e,t,this.getFileName(),this.enabledPDFHorizontalPageBreak)}}),this.btns.push({name:"Refresh/Rebuild",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>{let e=!1;this.hasServerSideCaching&&(e=await Object(w["a"])("Do you want to rebuild report cache?",{header:"Rebuild Report"})),this.reloadReport(e)}}),this.btns.push({name:"Back",size:"large",slot:"end",color:"primary",visible:!Object(F["isEmpty"])(this.fields),onClick:()=>this.canShowReport=!1}),this.btns.push({name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>{this.onFinishBtnAction?this.onFinishBtnAction():this.$router.push({path:"/"})}})}});o("4a46");const A=x()(E,[["render",O],["__scopeId","data-v-47b6d7e8"]]);t["a"]=A},"5a43":function(e,t,o){},7920:function(e,t,o){"use strict";var n=o("7a23");function i(e,t,o,i,r,a){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,8,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var r=o("9441"),a=Object(n["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:r["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),c=o("d959"),s=o.n(c);const l=s()(a,[["render",i]]);t["a"]=l},"7bdc":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function i(e,t,o,i,r,a){const c=Object(n["resolveComponent"])("report-template");return Object(n["openBlock"])(),Object(n["createBlock"])(c,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,canExportCsv:!1,canExportPDf:!1,onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])}var r=o("4ba2"),a=o("d95e"),c=o("9ceb"),s=o("fb25"),l=o("2706"),d=o("7f12"),p=o("8a30"),b=o("23e6"),u=o("9283"),m=o("fa73"),h=o("b5e4"),O=Object(n["defineComponent"])({components:{ReportTemplate:r["a"]},data:()=>({service:{},dde:{},title:"Duplicate Identifiers",fields:[],rows:[],columns:[[c["a"].thTxt("Identifier"),c["a"].thTxt("Count"),c["a"].thTxt("View"),c["a"].thTxt("Resolve")]]}),async created(){this.fields=this.getFormFields(),this.dde=new m["a"],await this.dde.loadDDEStatus()},methods:{async onPeriod({identifier:e}){const t=parseInt(e.value.toString());this.title=e.label+" Duplicates",this.service=new s["a"],this.service.setIdentifierType(t),this.rows=await this.getRows()},getFormFields(){return[{id:"identifier",helpText:"Select Identifier type",type:a["b"].TT_SELECT,validation:e=>l["a"].required(e),options:async()=>(await s["a"].getIdentifierTypes()).map(e=>({label:e.name,value:e.patient_identifier_type_id}))}]},toDate(e){return u["c"].toStandardHisDisplayFormat(e)},async drillDuplicates(e){const t=await p["modalController"].create({component:d["a"],cssClass:"custom-modal",componentProps:{title:"Persons using identifier "+e,columns:["Given name","Family name","Gender","Birth date","Action"],onRows:async()=>{const t=await this.service.getPatientsByIdentifier(e);return t.map(e=>{try{const t=new b["a"](e);return[t.getGivenName(),t.getFamilyName(),t.getGender(),this.toDate(t.getBirthdate()),{type:"button",name:"View",action:()=>{p["modalController"].dismiss().then(()=>{this.$router.push("/patient/dashboard/"+t.getID())})}}]}catch(t){return Object(h["c"])("Unable to load patient details"),["N/A","N/A","N/A","N/A","N/A"]}})}}});t.present()},async getRows(){return(await this.service.getDuplicateIndentifiers()).map(e=>[c["a"].td(e.identifier),c["a"].td(e.count),c["a"].tdBtn("Select",()=>this.drillDuplicates(e.identifier)),c["a"].tdBtn("Resolve",()=>{this.$router.push("/npid/duplicates/"+e.identifier)},{event:{disabled:3!=this.service.getIdentifierType()}},"danger")])}}}),j=o("d959"),f=o.n(j);const y=f()(O,[["render",i]]);t["default"]=y},"7f12":function(e,t,o){"use strict";var n=o("7a23");const i={key:0},r={key:1},a=Object(n["createTextVNode"])(" Close ");function c(e,t,o,c,s,l){const d=Object(n["resolveComponent"])("ion-title"),p=Object(n["resolveComponent"])("ion-toolbar"),b=Object(n["resolveComponent"])("ion-header"),u=Object(n["resolveComponent"])("his-basic-table"),m=Object(n["resolveComponent"])("text-skeloton"),h=Object(n["resolveComponent"])("ion-content"),O=Object(n["resolveComponent"])("ion-button"),j=Object(n["resolveComponent"])("ion-footer");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])(b,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(h,null,{default:Object(n["withCtx"])(()=>[e.ready?(Object(n["openBlock"])(),Object(n["createBlock"])("div",i,[Object(n["createVNode"])(u,{columns:e.columns,rows:e.rows},null,8,["columns","rows"])])):(Object(n["openBlock"])(),Object(n["createBlock"])("div",r,[Object(n["createVNode"])(m)]))]),_:1}),Object(n["createVNode"])(j,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(O,{color:"danger",onClick:e.closeModal,slot:"end"},{default:Object(n["withCtx"])(()=>[a]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var s=o("a3a5"),l=o("8a30"),d=o("ded6"),p=Object(n["defineComponent"])({components:{HisBasicTable:s["a"],IonHeader:l["IonHeader"],IonToolbar:l["IonToolbar"],IonContent:l["IonContent"],IonFooter:l["IonFooter"],IonButton:l["IonButton"],TextSkeloton:d["a"]},props:{title:{type:String,required:!0},columns:{type:Object,required:!0},onRows:{type:Function,required:!0}},data:()=>({rows:[],ready:!1}),watch:{onRows:{async handler(e){e&&(this.rows=await e(),this.ready=!0)},immediate:!0,deep:!0}},methods:{async closeModal(){await l["modalController"].dismiss({})}}}),b=o("d959"),u=o.n(b);const m=u()(p,[["render",c]]);t["a"]=m},"9c1a":function(e,t,o){},fb25:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o("1c74");class i extends n["e"]{constructor(){super(),this.identifierType=-1}static getIdentifierTypes(){return super.getJson("types/patient_identifiers")}static async arvNumberExists(e){const t=await super.getJson(`programs/${super.getProgramID()}/lookup_arv_number/${e}`);return t.exists}getIdentifierType(){return this.identifierType}setIdentifierType(e){this.identifierType=e}getDuplicateIndentifiers(){return n["e"].getJson("search/identifiers/duplicates",{type_id:this.identifierType})}getPatientsByIdentifier(e){return n["e"].getJson("search/patients/by_identifier",{type_id:this.identifierType,identifier:e})}}}}]);
//# sourceMappingURL=chunk-121bafb2.3b40f252.js.map