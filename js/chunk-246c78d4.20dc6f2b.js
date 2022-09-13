(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-246c78d4"],{"6f4a":function(e,t,n){},7337:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=Object(r["withScopeId"])("data-v-146a0e6b");Object(r["pushScopeId"])("data-v-146a0e6b");var c=Object(r["createVNode"])("h1",{class:"ion-text-center"}," High BP Alert ",-1),a={key:0,class:"vertically-align ion-text-center"},s={style:{"font-weight":"bold"}},i={class:"name"},u=Object(r["createTextVNode"])(" has "),d=Object(r["createTextVNode"])(" blood pressure of "),l={class:"bp"},b=Object(r["createVNode"])("br",null,null,-1),p=Object(r["createVNode"])("span",null,[Object(r["createTextVNode"])(" Retesting BP is "),Object(r["createVNode"])("span",{style:{"font-weight":"bold",color:"#000000","text-decoration":"underline"}},"optional"),Object(r["createTextVNode"])(". "),Object(r["createVNode"])("br"),Object(r["createTextVNode"])(" Do you want to test BP? ")],-1),f={key:1,class:"vertically-align ion-text-center"},h=Object(r["createTextVNode"])(" No BP Reading found "),O=Object(r["createVNode"])("br",null,null,-1),j=Object(r["createVNode"])("h1",null," Do you want to test BP? ",-1),m=Object(r["createTextVNode"])(" No "),k=Object(r["createTextVNode"])(" Yes ");Object(r["popScopeId"])();var g=o((function(e,t,n,g,v,x){var C=Object(r["resolveComponent"])("ion-content"),V=Object(r["resolveComponent"])("ion-button"),B=Object(r["resolveComponent"])("ion-toolbar"),N=Object(r["resolveComponent"])("ion-footer"),w=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createBlock"])(w,null,{default:o((function(){return[Object(r["createVNode"])(C,null,{default:o((function(){return[c,e.hasPressureReading?(Object(r["openBlock"])(),Object(r["createBlock"])("div",a,[Object(r["withDirectives"])(Object(r["createVNode"])("h2",s," (Patient already on BP drugs) ",512),[[r["vShow"],e.patientOnBpDrugs]]),Object(r["createVNode"])("h2",null,[Object(r["createVNode"])("span",i,Object(r["toDisplayString"])(e.patientName),1),u,Object(r["withDirectives"])(Object(r["createVNode"])("span",null," a high ",512),[[r["vShow"],e.highBP]]),d,Object(r["createVNode"])("span",l,Object(r["toDisplayString"])(e.sysBp)+" / "+Object(r["toDisplayString"])(e.dsBP),1),b,p])])):Object(r["createCommentVNode"])("",!0),e.hasPressureReading?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])("div",f,[h,O,j]))]})),_:1}),Object(r["createVNode"])(N,null,{default:o((function(){return[Object(r["createVNode"])(B,{color:"dark"},{default:o((function(){return[Object(r["createVNode"])(V,{onClick:t[1]||(t[1]=function(){return e.hasPressureReading?e.showRiskFactors():e.nextTask()}),size:"large",color:"danger",slot:"start"},{default:o((function(){return[m]})),_:1}),Object(r["createVNode"])(V,{onClick:e.recaptureBp,size:"large",color:"success",slot:"end"},{default:o((function(){return[k]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1})})),v=n("1da1"),x=(n("d81d"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("7365")),C=n("8a30"),V=n("d1ca"),B=n("32b3"),N=n("8158"),w=n("77fd"),y=n("7957"),I=n("2ef0"),D=Object(r["defineComponent"])({mixins:[x["a"]],components:{IonFooter:C["o"],IonContent:C["n"],IonPage:C["D"],IonButton:C["d"],IonToolbar:C["Q"]},data:function(){return{sysBp:0,dsBP:0,riskFactors:[],patientOnBpDrugs:!1,isPregnant:!1,systolicThreshold:145,diastolicTheshold:94}},methods:{showRiskFactors:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C["X"].create({component:w["a"],backdropDismiss:!1,cssClass:"large-modal",componentProps:{factors:e.riskFactors}});case 2:return n=t.sent,n.present(),t.next=6,n.onDidDismiss();case 6:r=t.sent,o=r.data,Object(I["isEmpty"])(o)||e.nextTask();case 9:case"end":return t.stop()}}),t)})))()},getRiskFactors:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=N["a"].getConceptsByCategory("risk factors"),r=n.map(function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y["a"].getFirstValueCoded(e.patientID,n.name);case 2:return r=t.sent,t.abrupt("return",{concept:n.name,value:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",Promise.all(r));case 3:case"end":return t.stop()}}),t)})))()},recaptureBp:function(){this.$router.push("/art/encounters/vitals/".concat(this.patientID,"?vital_options=BP"))}},watch:{ready:{handler:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,C["V"].create({message:"Verifying Blood Pressure...",backdropDismiss:!1});case 4:return r=n.sent,n.next=7,r.present();case 7:return o=new B["a"](t.patientID,t.providerID),n.next=10,t.getRiskFactors();case 10:return t.riskFactors=n.sent,n.next=13,V["b"].systolicThreshold();case 13:if(n.t0=n.sent,n.t0){n.next=16;break}n.t0=145;case 16:return t.systolicThreshold=n.t0,n.next=19,V["b"].diastolicThreshold();case 19:if(n.t1=n.sent,n.t1){n.next=22;break}n.t1=94;case 22:return t.diastolicTheshold=n.t1,n.next=25,o.getDiastolicBp();case 25:if(n.t2=n.sent,n.t2){n.next=28;break}n.t2=0;case 28:return t.dsBP=n.t2,n.next=31,o.getSystolicBp();case 31:if(n.t3=n.sent,n.t3){n.next=34;break}n.t3=0;case 34:return t.sysBp=n.t3,n.next=37,o.onBpDrugs();case 37:if(n.t4=n.sent,n.t4){n.next=40;break}n.t4=!1;case 40:if(t.patientOnBpDrugs=n.t4,!t.patient.isChildBearing()){n.next=50;break}return n.next=44,t.patient.isPregnant();case 44:if(n.t6=n.sent,n.t6){n.next=47;break}n.t6=!1;case 47:n.t5=n.t6,n.next=51;break;case 50:n.t5=!1;case 51:t.isPregnant=n.t5,C["V"].dismiss();case 53:case"end":return n.stop()}}),n)})))()},immediate:!0}},computed:{patientName:function(){return this.ready?this.patient.getFullName():"Patient"},hasPressureReading:function(){return this.sysBp>0&&this.dsBP>0},highBP:function(){return(this.sysBp>=this.systolicThreshold&&this.dsBP>=this.diastolicTheshold||this.dsBP>=this.diastolicTheshold)&&!this.isPregnant}}}),P=(n("8bd6"),n("6b0d")),_=n.n(P);const T=_()(D,[["render",g],["__scopeId","data-v-146a0e6b"]]);t["default"]=T},"77fd":function(e,t,n){"use strict";n("b0c0");var r=n("7a23"),o=Object(r["withScopeId"])("data-v-1b2b2db4");Object(r["pushScopeId"])("data-v-1b2b2db4");var c=Object(r["createTextVNode"])("Risk Factors"),a=Object(r["createTextVNode"])(" Close "),s=Object(r["createTextVNode"])(" Manage BP "),i=Object(r["createTextVNode"])(" Save ");Object(r["popScopeId"])();var u=o((function(e,t,n,u,d,l){var b=Object(r["resolveComponent"])("ion-title"),p=Object(r["resolveComponent"])("ion-toolbar"),f=Object(r["resolveComponent"])("ion-header"),h=Object(r["resolveComponent"])("ion-label"),O=Object(r["resolveComponent"])("ion-checkbox"),j=Object(r["resolveComponent"])("ion-item"),m=Object(r["resolveComponent"])("ion-list"),k=Object(r["resolveComponent"])("ion-col"),g=Object(r["resolveComponent"])("ion-row"),v=Object(r["resolveComponent"])("ion-grid"),x=Object(r["resolveComponent"])("ion-content"),C=Object(r["resolveComponent"])("ion-button"),V=Object(r["resolveComponent"])("ion-footer");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(f,null,{default:o((function(){return[Object(r["createVNode"])(p,null,{default:o((function(){return[Object(r["createVNode"])(b,null,{default:o((function(){return[c]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(x,{style:{overflowY:"hidden",background:"grey"}},{default:o((function(){return[Object(r["createVNode"])(v,null,{default:o((function(){return[Object(r["createVNode"])(g,null,{default:o((function(){return[Object(r["createVNode"])(k,null,{default:o((function(){return[Object(r["createVNode"])(m,{style:{overflowY:"auto",height:"78vh"}},{default:o((function(){return[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(e.riskFactors,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(j,{key:e},{default:o((function(){return[Object(r["createVNode"])(h,null,{default:o((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.name),1)]})),_:2},1024),Object(r["createVNode"])(O,{modelValue:e.isChecked,"onUpdate:modelValue":function(t){return e.isChecked=t},slot:"start"},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024)})),128))]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(V,null,{default:o((function(){return[Object(r["createVNode"])(p,null,{default:o((function(){return[Object(r["createVNode"])(C,{size:"large",onClick:e.exit,slot:"start",color:"danger"},{default:o((function(){return[a]})),_:1},8,["onClick"]),e.showManageBPButton?(Object(r["openBlock"])(),Object(r["createBlock"])(C,{key:0,size:"large",onClick:e.manageBP,slot:"start"},{default:o((function(){return[s]})),_:1},8,["onClick"])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(C,{size:"large",color:"success",onClick:e.postActivities,slot:"end"},{default:o((function(){return[i]})),_:1},8,["onClick"])]})),_:1})]})),_:1})],64)})),d=n("1da1"),l=(n("96cf"),n("d81d"),n("d3b7"),n("159b"),n("c740"),n("8a30")),b=n("cc6f");class p extends b["a"]{constructor(e,t){super(e,30,t)}}var f=n("8158"),h=Object(r["defineComponent"])({name:"Modal",props:{factors:{type:Object,required:!0},title:{type:String,default:""}},computed:{showManageBPButton:function(){return"bp_management"!=this.$route.name}},created:function(){this.patientID=parseInt("".concat(this.$route.params.patient_id))},methods:{postActivities:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new p(e.patientID,-1),t.next=3,n.createEncounter();case 3:if(r=t.sent,!r){t.next=12;break}return t.next=7,e.buildObs();case 7:return o=t.sent,t.next=10,n.saveObservationList(o);case 10:return t.next=12,e.closeModal();case 12:case"end":return t.stop()}}),t)})))()},manageBP:function(){this.$router.push("/art/encounters/bp_management/".concat(this.patientID))},exit:function(){l["X"].dismiss([])},closeModal:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["X"].dismiss(e.riskFactors);case 2:case"end":return t.stop()}}),t)})))()},buildObs:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.riskFactors.map((function(e){var t=!0===e.isChecked?"Yes":"No",n=f["a"].getConceptID(t,!0),r=f["a"].getConceptID(e.concept,!0);return{concept_id:r,value_coded:n}})));case 1:case"end":return t.stop()}}),t)})))()}},data:function(){return{patientID:-1,riskFactors:[{name:"Diabetes",isChecked:!1,concept:"Diabetes"},{name:"Cronic kidney disease",isChecked:!1,concept:"CKD"},{name:"Past history of IHD or CVD",isChecked:!1,concept:"history of CVD"},{name:"First degree relative with IHD or CVD <65",isChecked:!1,concept:"relative with CVD"},{name:"Patient currently smokes",isChecked:!1,concept:"patient smokes"}]}},mounted:function(){var e=this;this.factors.forEach((function(t){if("Yes"===t.value){var n=e.riskFactors.findIndex((function(e){return e.concept===t.concept}));e.riskFactors[n].isChecked=!0}}))},components:{IonButton:l["d"],IonContent:l["n"],IonHeader:l["q"],IonTitle:l["P"],IonToolbar:l["Q"],IonLabel:l["x"],IonList:l["y"],IonItem:l["w"],IonCheckbox:l["k"],IonRow:l["H"],IonFooter:l["o"],IonGrid:l["p"],IonCol:l["m"]}}),O=(n("9719"),n("6b0d")),j=n.n(O);const m=j()(h,[["render",u],["__scopeId","data-v-1b2b2db4"]]);t["a"]=m},"8bd6":function(e,t,n){"use strict";n("8d5d")},"8d5d":function(e,t,n){},9719:function(e,t,n){"use strict";n("6f4a")},c740:function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").findIndex,c=n("44d2"),a=n("ae40"),s="findIndex",i=!0,u=a(s);s in[]&&Array(1)[s]((function(){i=!1})),r({target:"Array",proto:!0,forced:i||!u},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),c(s)}}]);
//# sourceMappingURL=chunk-246c78d4.20dc6f2b.js.map