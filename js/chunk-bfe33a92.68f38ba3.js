(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bfe33a92"],{7337:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=Object(r["withScopeId"])("data-v-146a0e6b");Object(r["pushScopeId"])("data-v-146a0e6b");var s=Object(r["createVNode"])("h1",{class:"ion-text-center"}," High BP Alert ",-1),c={key:0,class:"vertically-align ion-text-center"},o={style:{"font-weight":"bold"}},i={class:"name"},u=Object(r["createTextVNode"])(" has "),d=Object(r["createTextVNode"])(" blood pressure of "),l={class:"bp"},p=Object(r["createVNode"])("br",null,null,-1),b=Object(r["createVNode"])("span",null,[Object(r["createTextVNode"])(" Retesting BP is "),Object(r["createVNode"])("span",{style:{"font-weight":"bold",color:"#000000","text-decoration":"underline"}},"optional"),Object(r["createTextVNode"])(". "),Object(r["createVNode"])("br"),Object(r["createTextVNode"])(" Do you want to test BP? ")],-1),h={key:1,class:"vertically-align ion-text-center"},f=Object(r["createTextVNode"])(" No BP Reading found "),O=Object(r["createVNode"])("br",null,null,-1),j=Object(r["createVNode"])("h1",null," Do you want to test BP? ",-1),g=Object(r["createTextVNode"])(" No "),m=Object(r["createTextVNode"])(" Yes ");Object(r["popScopeId"])();var k=a((function(e,t,n,k,x,B){var v=Object(r["resolveComponent"])("ion-content"),N=Object(r["resolveComponent"])("ion-button"),w=Object(r["resolveComponent"])("ion-toolbar"),V=Object(r["resolveComponent"])("ion-footer"),y=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createBlock"])(y,null,{default:a((function(){return[Object(r["createVNode"])(v,null,{default:a((function(){return[s,e.hasPressureReading?(Object(r["openBlock"])(),Object(r["createBlock"])("div",c,[Object(r["withDirectives"])(Object(r["createVNode"])("h2",o," (Patient already on BP drugs) ",512),[[r["vShow"],e.patientOnBpDrugs]]),Object(r["createVNode"])("h2",null,[Object(r["createVNode"])("span",i,Object(r["toDisplayString"])(e.patientName),1),u,Object(r["withDirectives"])(Object(r["createVNode"])("span",null," a high ",512),[[r["vShow"],e.highBP]]),d,Object(r["createVNode"])("span",l,Object(r["toDisplayString"])(e.sysBp)+" / "+Object(r["toDisplayString"])(e.dsBP),1),p,b])])):Object(r["createCommentVNode"])("",!0),e.hasPressureReading?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])("div",h,[f,O,j]))]})),_:1}),Object(r["createVNode"])(V,null,{default:a((function(){return[Object(r["createVNode"])(w,{color:"dark"},{default:a((function(){return[Object(r["createVNode"])(N,{onClick:t[1]||(t[1]=function(){return e.hasPressureReading?e.showRiskFactors():e.nextTask()}),size:"large",color:"danger",slot:"start"},{default:a((function(){return[g]})),_:1}),Object(r["createVNode"])(N,{onClick:e.recaptureBp,size:"large",color:"success",slot:"end"},{default:a((function(){return[m]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1})})),x=(n("d81d"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),B=n("7365"),v=n("8a30"),N=n("d1ca"),w=n("32b3"),V=n("8158"),y=n("77fd"),P=n("7957"),T=n("2ef0"),D=Object(r["defineComponent"])({mixins:[B["a"]],components:{IonFooter:v["o"],IonContent:v["n"],IonPage:v["B"],IonButton:v["d"],IonToolbar:v["N"]},data:function(){return{sysBp:0,dsBP:0,riskFactors:[],patientOnBpDrugs:!1,isPregnant:!1,systolicThreshold:145,diastolicTheshold:94}},methods:{showRiskFactors:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v["V"].create({component:y["a"],backdropDismiss:!1,cssClass:"large-modal",componentProps:{factors:e.riskFactors}});case 2:return n=t.sent,n.present(),t.next=6,n.onDidDismiss();case 6:r=t.sent,a=r.data,Object(T["isEmpty"])(a)||e.nextTask();case 9:case"end":return t.stop()}}),t)})))()},getRiskFactors:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=V["a"].getConceptsByCategory("risk factors"),r=n.map(function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P["a"].getFirstValueCoded(e.patientID,n.name);case 2:return r=t.sent,t.abrupt("return",{concept:n.name,value:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",Promise.all(r));case 3:case"end":return t.stop()}}),t)})))()},recaptureBp:function(){this.$router.push("/art/encounters/vitals/".concat(this.patientID,"?vital_options=BP"))}},watch:{ready:{handler:function(e){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,v["T"].create({message:"Verifying Blood Pressure...",backdropDismiss:!1});case 4:return r=n.sent,n.next=7,r.present();case 7:return a=new w["a"](t.patientID,t.providerID),n.next=10,t.getRiskFactors();case 10:return t.riskFactors=n.sent,n.next=13,N["b"].systolicThreshold();case 13:if(n.t0=n.sent,n.t0){n.next=16;break}n.t0=145;case 16:return t.systolicThreshold=n.t0,n.next=19,N["b"].diastolicThreshold();case 19:if(n.t1=n.sent,n.t1){n.next=22;break}n.t1=94;case 22:return t.diastolicTheshold=n.t1,n.next=25,a.getDiastolicBp();case 25:if(n.t2=n.sent,n.t2){n.next=28;break}n.t2=0;case 28:return t.dsBP=n.t2,n.next=31,a.getSystolicBp();case 31:if(n.t3=n.sent,n.t3){n.next=34;break}n.t3=0;case 34:return t.sysBp=n.t3,n.next=37,a.onBpDrugs();case 37:if(n.t4=n.sent,n.t4){n.next=40;break}n.t4=!1;case 40:if(t.patientOnBpDrugs=n.t4,!t.patient.isChildBearing()){n.next=50;break}return n.next=44,t.patient.isPregnant();case 44:if(n.t6=n.sent,n.t6){n.next=47;break}n.t6=!1;case 47:n.t5=n.t6,n.next=51;break;case 50:n.t5=!1;case 51:t.isPregnant=n.t5,v["T"].dismiss();case 53:case"end":return n.stop()}}),n)})))()},immediate:!0}},computed:{patientName:function(){return this.ready?this.patient.getFullName():"Patient"},hasPressureReading:function(){return this.sysBp>0&&this.dsBP>0},highBP:function(){return(this.sysBp>=this.systolicThreshold&&this.dsBP>=this.diastolicTheshold||this.dsBP>=this.diastolicTheshold)&&!this.isPregnant}}}),R=(n("8bd6"),n("d959")),C=n.n(R);const I=C()(D,[["render",k],["__scopeId","data-v-146a0e6b"]]);t["default"]=I},"8bd6":function(e,t,n){"use strict";n("c658")},c658:function(e,t,n){}}]);
//# sourceMappingURL=chunk-bfe33a92.68f38ba3.js.map