import{d as I,a1 as j,aU as R,aZ as D,_ as A,$ as S,cG as G,a3 as H,cH as O,r as w,ar as b,t as E,a8 as M,ad as r,u as c,B as u,K as o,x as n,w as e,z as a,E as s,G as y,C as B,a6 as z,a7 as F}from"./index-DrPQ21-i.js";const K=I({components:{IonLabel:j,IonGrid:R,IonBadge:D,IonRow:A,IonCol:S,IonButtons:G,IonButton:H},setup(){const{sortedNotifications:t,hasNotifications:d,clearNotification:N,openNotification:L}=O(),V=w([]),C=w(),g=b(()=>h("highVL").length),v=b(()=>h("rejectedVL").length),i=b(()=>h("normalVL").length);function _(f){V.value=[],C.value=f,V.value=h(f)}function h(f){var m,l,p;return((p=(l=(m=t.value)==null?void 0:m[0])==null?void 0:l.vlMessageObs)==null?void 0:p[f])||[]}return E(()=>_("highVL")),{onselect:_,tabData:V,highVlCount:g,activeButton:C,rejectedVlCount:v,normalVlCount:i,hasNotifications:d,clearNotification:N,openNotification:L}}}),$=t=>(z("data-v-390e2f23"),t=t(),F(),t),T={key:0},U={class:"button-container"},Z={class:"result-container"},q={key:0},J=$(()=>o("thead",null,[o("tr",{class:"his-sm-text"},[o("th",null,"ARV #"),o("th",null,"Accession #"),o("th",null,"Order Date"),o("th",null,"Rejection Reason"),o("th",null,"Action")])],-1)),P=["color"],Q={key:1},W=$(()=>o("thead",null,[o("tr",{class:"his-sm-text"},[o("th",null,"ARV #"),o("th",null,"Accession #"),o("th",null,"Order Date"),o("th",null,"Result"),o("th",null,"Result Date"),o("th",null,"Action")])],-1)),X=["color"],Y={key:1,class:"his-card ion-text-center his-lg-text"};function x(t,d,N,L,V,C){const g=r("ion-label"),v=r("ion-badge"),i=r("ion-button"),_=r("ion-col"),h=r("ion-row"),f=r("ion-grid"),m=r("ion-buttons");return c(),u("div",null,[t.hasNotifications?(c(),u("div",T,[o("div",U,[n(f,null,{default:e(()=>[n(h,null,{default:e(()=>[n(_,null,{default:e(()=>[n(i,{color:t.activeButton==="highVL"?"primary":"light",onClick:d[0]||(d[0]=l=>t.onselect("highVL"))},{default:e(()=>[n(g,{class:"ion-padding",slot:"start"},{default:e(()=>[a("High VL")]),_:1}),n(v,{color:"warning"},{default:e(()=>[a(s(t.highVlCount),1)]),_:1})]),_:1},8,["color"])]),_:1}),n(_,null,{default:e(()=>[n(i,{color:t.activeButton==="rejectedVL"?"primary":"light",onClick:d[1]||(d[1]=l=>t.onselect("rejectedVL"))},{default:e(()=>[n(g,{class:"ion-padding"},{default:e(()=>[a("Rejected")]),_:1}),n(v,{color:"warning"},{default:e(()=>[a(s(t.rejectedVlCount),1)]),_:1})]),_:1},8,["color"])]),_:1}),n(_,null,{default:e(()=>[n(i,{color:t.activeButton==="normalVL"?"primary":"light",onClick:d[2]||(d[2]=l=>t.onselect("normalVL"))},{default:e(()=>[n(g,{class:"ion-padding"},{default:e(()=>[a("Normal Results")]),_:1}),n(v,{color:"success"},{default:e(()=>[a(s(t.normalVlCount),1)]),_:1})]),_:1},8,["color"])]),_:1})]),_:1})]),_:1})]),o("div",Z,[t.activeButton==="rejectedVL"?(c(),u("table",q,[J,o("tbody",null,[(c(!0),u(y,null,B(t.tabData,(l,p)=>(c(),u("tr",{color:l.read?"":"light",class:"his-md-text",key:p},[o("td",null,[o("small",null,s(l.arv),1)]),o("td",null,[o("small",null,s(l.accession),1)]),o("td",null,[o("small",null,s(l.order_date),1)]),o("td",null,[o("small",null,s(l.rejection_reason),1)]),o("td",null,[n(m,{slot:"end"},{default:e(()=>[n(i,{onClick:k=>t.openNotification(l),fill:"solid",color:"success"},{default:e(()=>[a(" View ")]),_:2},1032,["onClick"]),n(i,{onClick:k=>t.clearNotification(l.id),fill:"solid",color:"warning"},{default:e(()=>[a(" Clear ")]),_:2},1032,["onClick"])]),_:2},1024)])],8,P))),128))])])):(c(),u("table",Q,[W,o("tbody",null,[(c(!0),u(y,null,B(t.tabData,(l,p)=>(c(),u("tr",{color:l.read?"":"light",class:"his-md-text",key:p},[o("td",null,[o("small",null,s(l.arv),1)]),o("td",null,[o("small",null,s(l.accession),1)]),o("td",null,[o("small",null,s(l.order_date),1)]),o("td",null,[o("small",null,s(l.results),1)]),o("td",null,[o("small",null,s(l.results_date),1)]),o("td",null,[n(m,{slot:"end"},{default:e(()=>[n(i,{onClick:k=>t.openNotification(l),fill:"solid",color:"success"},{default:e(()=>[a(" View ")]),_:2},1032,["onClick"]),n(i,{onClick:k=>t.clearNotification(l.id),fill:"solid",color:"warning"},{default:e(()=>[a(" Clear ")]),_:2},1032,["onClick"])]),_:2},1024)])],8,X))),128))])]))])])):(c(),u("div",Y," No notifications "))])}const to=M(K,[["render",x],["__scopeId","data-v-390e2f23"]]);export{to as default};