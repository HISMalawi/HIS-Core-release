(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de126"],{"83a6":function(e,t,n){"use strict";n.r(t);var o=n("7a23");function i(e,t,n,i,r,a){var s=Object(o["resolveComponent"])("his-standard-form"),c=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(c,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{fields:e.fields,skipSummary:!0,onFinishAction:e.onFinish,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])]})),_:1})}var r=n("1da1"),a=(n("d3b7"),n("d81d"),n("4de4"),n("96cf"),n("7365")),s=n("2989"),c=n("8a30"),u=n("d95e"),l=Object(o["defineComponent"])({components:{IonPage:c["D"]},mixins:[a["a"]],data:function(){return{service:{}}},watch:{ready:{handler:function(e){e&&(this.service=new s["a"](this.patientID,this.providerID),this.fields=this.getFields())}}},methods:{onFinish:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.resolveObs(t);case 2:return o=e.sent,e.next=5,n.service.createEncounter();case 5:return e.next=7,n.service.saveObservationList(o);case 7:return e.next=9,n.service.printSocialHistory();case 9:n.nextTask();case 10:case"end":return e.stop()}}),e)})))()},getFields:function(){var e=this;return[{id:"history",helpText:"Social history",type:u["b"].TT_MULTI_SELECT_GRID,validation:function(e){return e.map((function(e){return""===e.value})).some(Boolean)?["Please complete selection!!"]:null},computedValue:function(t){return t.filter((function(e){return""!=e.value})).map((function(t){return e.service.buildValueCoded(t.other.concept,t.value)}))},options:function(){return[{label:"Currently Smoking",value:"",other:{concept:"patient smokes",options:e.yesNoOptions()}},{label:"Currently taking alcohol",value:"",other:{concept:"Currently taking alcohol",options:e.yesNoOptions()}},{label:"Marital status",value:"",other:{concept:"Marital status",options:[e.toOption("Never Married"),e.toOption("Married"),e.toOption("Seperated"),e.toOption("Divorced")]}}]}}]}}}),d=n("6b0d"),p=n.n(d);const h=p()(l,[["render",i]]);t["default"]=h}}]);
//# sourceMappingURL=chunk-2d0de126.5ac2ea5e.js.map