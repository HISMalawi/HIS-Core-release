function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ZebraPrinterImage-BVGdYb5S.js","assets/index-C6EjxQ0a.js","assets/index-CYSS9HYB.css","assets/ZebraPrinterImage-BGgG7HM-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as m,bA as p,aD as c,b6 as _,K as i,ae as u,_ as f,r as v,o as l,c as d,w as M,b7 as D}from"./index-C6EjxQ0a.js";const C=m({components:{IonModal:p,ZebraModal:c(()=>_(()=>import("./ZebraPrinterImage-BVGdYb5S.js"),__vite__mapDeps([0,1,2,3])))},emits:["modalDismissed"],props:{modalName:{type:String}},setup(e,{emit:n}){const o=i(!1),s=i("");function t(){o.value=!1,n("modalDismissed")}return u(e,({modalName:a})=>{a?(s.value=a,o.value=!0):o.value=!1},{deep:!0}),{dismissModal:t,modalIsOpen:o,activeModal:s}}});function O(e,n,o,s,t,a){const r=v("ion-modal");return l(),d(r,{"is-open":e.modalIsOpen},{default:M(()=>[(l(),d(D(e.activeModal),{onOnDismissModal:e.dismissModal},null,40,["onOnDismissModal"]))]),_:1},8,["is-open"])}const I=f(C,[["render",O]]);export{I as default};
