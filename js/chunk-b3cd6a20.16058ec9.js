(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3cd6a20"],{"0481":function(e,n,t){"use strict";var r=t("23e7"),a=t("a2bf"),i=t("7b0b"),c=t("50c4"),o=t("a691"),s=t("65f0");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,n=i(this),t=c(n.length),r=s(n,0);return r.length=a(r,n,n,t,0,void 0===e?1:o(e)),r}})},4069:function(e,n,t){var r=t("44d2");r("flat")},a2bf:function(e,n,t){"use strict";var r=t("e8b5"),a=t("50c4"),i=t("0366"),c=function(e,n,t,o,s,u,l,d){var p,f=s,m=0,h=!!l&&i(l,d,3);while(m<o){if(m in t){if(p=h?h(t[m],m,n):t[m],u>0&&r(p))f=c(e,n,p,a(p.length),f,u-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[f]=p}f++}m++}return f};e.exports=c},fea93:function(e,n,t){"use strict";t.r(n);var r=t("7a23");function a(e,n,t,a,i,c){var o=Object(r["resolveComponent"])("his-standard-form"),s=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createBlock"])(s,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(o,{cancelDestinationPath:e.cancelDestination,fields:e.fields,onFinishAction:e.onSubmit},null,8,["cancelDestinationPath","fields","onFinishAction"])]})),_:1})}t("0481"),t("d81d"),t("4069"),t("d3b7"),t("3ca3"),t("ddb0"),t("96cf");var i=t("1da1"),c=t("9441"),o=t("7365"),s=t("331e"),u=t("c4e4"),l=t("2706"),d=t("d95e"),p=t("8a30"),f=Object(r["defineComponent"])({components:{HisStandardForm:c["a"],IonPage:p["B"]},mixins:[o["a"]],data:function(){return{complaintsService:{}}},watch:{ready:{handler:function(e){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e&&(n.complaintsService=new s["a"](n.patientID,n.providerID),n.fields=n.getFields());case 1:case"end":return t.stop()}}),t)})))()},immediate:!0,deep:!0}},methods:{onSubmit:function(e,n){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(n.complaints);case 2:return r=e.sent,e.next=5,t.complaintsService.createEncounter();case 5:return e.next=7,t.complaintsService.saveObservationList(r);case 7:t.nextTask();case 8:case"end":return e.stop()}}),e)})))()},launchOrderSelection:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p["V"].create({component:u["a"],backdropDismiss:!1,cssClass:"large-modal"});case 2:return n=e.sent,n.present(),e.next=6,n.onDidDismiss();case 6:case"end":return e.stop()}}),e)})))()},getFields:function(){var e=this;return[{id:"complaints",helpText:"Presenting Complaints",type:d["b"].TT_COMPLAINTS_PICKER,validation:function(e){return l["a"].required(e)},computedValue:function(n){var t=n.map((function(n){var t=e.complaintsService.buildValueCoded("Presenting complaint",n.other.parent),r=e.complaintsService.buildValueCodedFromConceptId(n.other.parent,n.other.concept_id);return[t,r]}));return t.flat(1)},config:{footerBtns:[{name:"Lab Order",size:"large",slot:"end",color:"primary",visible:!0,onClick:function(){var n=Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.launchOrderSelection();case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),visibleOnStateChange:function(e){return 1===e.index}}]}}]}}}),m=t("d959"),h=t.n(m);const v=h()(f,[["render",a]]);n["default"]=v}}]);
//# sourceMappingURL=chunk-b3cd6a20.16058ec9.js.map