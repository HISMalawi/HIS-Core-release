(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc83f310"],{"1cba":function(e,a,t){var n=t("4796"),o=t("9aff"),l=t("6428");function i(e){return function(a,t,i){return i&&"number"!=typeof i&&o(a,t,i)&&(t=i=void 0),a=l(a),void 0===t?(t=a,a=0):t=l(t),i=void 0===i?a<t?1:-1:l(i),n(a,t,i,e)}}e.exports=i},4796:function(e,a){var t=Math.ceil,n=Math.max;function o(e,a,o,l){var i=-1,u=n(t((a-e)/(o||1)),0),s=Array(u);while(u--)s[l?u:++i]=e,e+=o;return s}e.exports=o},4971:function(e,a,t){"use strict";t("13d5"),t("14d9"),Object.defineProperty(a,"__esModule",{value:!0});var n=t("9b02"),o=t("13ea"),l=t("93c6"),i=t("7a23"),u=t("5a3a"),s=t("d867"),r=t("ff79"),c=t("2ef0");function d(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var p=d(n),v=d(o),h=d(l),g=d(u);async function f(e,a=!1,t){let n=e;return"function"===typeof t&&(n=await t()),a?n.map((e,a)=>({...e,index:a+1})):n}function m(e,a){if(v["default"](a))return e;const t=a.map(({order:e})=>e);return h["default"](e.slice(),a.map(({column:e})=>a=>{let t=p["default"](a,e.path);return!t||v["default"](t)?"":("function"===typeof e.preSort&&(t=e.preSort(t)),"number"===typeof t||e.sortCaseSensitive?t:t.toString().toLowerCase())}),t)}function y(e,a){const{page:t,pageSize:n,totalPages:o}=e,l=t*n-(n-1),i=t===o?a:t*n;return a?`Showing ${l} to ${i} of ${a} entries`:"No data available"}function b(e,a,t){return e.totalPages=Math.ceil(a/e.pageSize),e.totalPages<=e.visibleBtns?(e.start=1,e.end=e.totalPages,e):!t.includes(e.page-1)&&1!==e.page||!t.includes(e.page+1)&&e.page!==e.totalPages?(e.start=1===e.page?1:e.page-1,e.end=e.start+e.visibleBtns-5,e.start<=3&&(e.end+=3-e.start,e.start=1),e.end>=e.totalPages-2&&(e.start-=e.end-(e.totalPages-2),e.end=e.totalPages),e.start=Math.max(e.start,1),e):e}function I(e,a){if(v["default"](e))return e;const{page:t,pageSize:n}=a,o=(t-1)*n;return e.slice(o,o+n)}function w(e){return e.reduce((e,a)=>(a.initialSort&&e.push({column:a,order:a.initialSortOrder||"asc"}),e),[])}function C(e,a){const t=e.findIndex(e=>e.column.path===a.path);return t>=0?e[t].order="asc"===e[t].order?"desc":"asc":e=[{column:a,order:"asc"}],e}function S(e,a){return!a||v["default"](e)?e:e.slice().filter(e=>Object.values(e).some(e=>e&&JSON.stringify(e).toLowerCase().includes(a.toLowerCase())))}const k=i.defineComponent({name:"SelectInput",props:{value:{type:Object,default:()=>({})},label:{type:String,default:""},placeholder:{type:String,default:"Select Option"},options:{type:Array,default:()=>[]},asyncOptions:{type:Function,required:!1},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},required:{type:Boolean,default:!1},validate:{type:Function,required:!1}},emits:["select"],setup(e,{emit:a}){const t=i.ref(),n=i.ref(!1),o=i.ref(""),l=i.ref([]),u=i.ref(""),d=i.computed(()=>u.value?"box-input-error":""),p=i.computed(()=>e.label?"ion-margin-top":""),v=i.computed(()=>e.multiple?l.value.filter(({isChecked:e})=>e):t.value?[t.value]:[]),h=i.computed(()=>!o.value&&c.isEmpty(v.value)&&!n.value),g=i.computed({get:()=>e.value,set:e=>a("select",e)}),f=()=>{t.value=void 0,c.isEmpty(g.value)||(Array.isArray(g.value)&&e.multiple&&g.value.forEach(e=>{const a=l.value.findIndex(({value:a})=>a===e.value);-1===a?l.value.push({...e,isChecked:!0}):l.value[a].isChecked=!0}),t.value=l.value.find(e=>Array.isArray(g.value)?e.value===g.value[0].value:e.value===g.value.value),c.isEmpty(t.value)&&(t.value=Array.isArray(g.value)?g.value[0]:g.value))},m=async()=>{const a="function"===typeof e.asyncOptions?await e.asyncOptions(o.value):e.options.filter(({label:e})=>e.toLowerCase().includes(o.value.toLowerCase()));v.value.forEach(e=>{const t=a.findIndex(a=>a.value===e.value);-1===t?a.push(e):a[t].isChecked=!0}),l.value=a},y=async()=>{if(e.required&&c.isEmpty(g.value))return u.value="This field is required";if("function"===typeof e.validate){const a=await e.validate(g.value);a&&a.length&&(u.value=a.join(", "))}return u.value=""},b=()=>{n.value=!1,g.value=e.multiple?v.value:c.isEmpty(v.value)?{}:v.value[0],o.value="",y()},I=()=>{e.disabled||(n.value=!0,u.value="")},w=a=>{if(!e.multiple)return t.value=a,b();g.value=e.multiple?v.value:c.isEmpty(v.value)?{}:v.value[0],o.value=""},C=a=>e.multiple?a.isChecked=!1:t.value=void 0,S=()=>{o.value="",t.value=void 0,l.value.forEach(e=>e.isChecked=!1)};return i.watch(()=>e.value,()=>f()),i.watch([o,()=>e.options,()=>e.asyncOptions],async()=>{await m(),f()}),i.onMounted(async()=>{await m(),f(),addEventListener("click",e=>{const a=e.target.closest(".inner-input-box");!a&&n.value&&b()})}),i.onBeforeUnmount(()=>removeEventListener("click",e=>console.log(e))),()=>[e.label&&i.h(s.IonLabel,{class:"ion-padding-bottom bold"},e.label),i.h("div",{class:`outer-input-box box-input ${d.value} ${p.value}`},i.h("div",{class:"inner-input-box"},[i.h("div",{style:{display:"flex",flexWrap:"wrap",width:"100%"},onClick:I},[...v.value.map(e=>i.h(s.IonChip,[i.h(s.IonLabel,e.label),i.h(s.IonIcon,{icon:r.closeCircle,color:"danger",onClick:()=>C(e),style:{zIndex:90}})])),i.h(s.IonInput,{disabled:e.disabled,placeholder:h.value?e.placeholder:"",class:"search-input",value:o.value,onIonInput:e=>o.value=e.target.value})]),n.value&&i.h("div",{class:"input-options"},i.h(s.IonList,l.value.map((a,t)=>i.h(s.IonItem,{lines:t+1===l.value.length?"none":void 0,onClick:()=>w(a)},[e.multiple&&i.h(s.IonCheckbox,{class:"input-option-checkbox",slot:"start",value:a.isChecked,onIonInput:e=>a.isChecked=e.target.checked}),i.h(s.IonLabel,a.label)])))),i.h("div",{class:"input-icon"},[(o.value||v.value.length)&&i.h(s.IonIcon,{icon:r.close,onClick:S}),i.h(s.IonIcon,{icon:n.value?r.chevronUp:r.chevronDown,onClick:n.value?b:I})].filter(Boolean))])),u.value&&i.h(s.IonNote,{color:"danger"},u.value)]}}),x=i.defineComponent({props:{range:{type:Object,default:()=>({startDate:"",endDate:""})}},emits:["rangeChange"],setup(e,{emit:a}){const t=i.ref(e.range.startDate),n=i.ref(e.range.endDate),o=i.computed(()=>({startDate:t.value,endDate:n.value}));return i.watch(o,e=>a("rangeChange",e)),()=>i.h(s.IonGrid,{class:"ion-no-padding ion-no-margin"},i.h(s.IonRow,[i.h(s.IonCol,{size:"6"},i.h(s.IonInput,{type:"date",class:"box-input",value:t.value,onIonInput:e=>t.value=e.target.value,style:{width:"100%"}})),i.h(s.IonCol,{size:"1",style:{display:"flex",justifyContent:"center "}},i.h(s.IonIcon,{icon:r.arrowForward,style:{fontSize:"24px",padding:".5rem"}})),i.h(s.IonCol,{size:"5"},i.h(s.IonInput,{type:"date",class:"box-input",value:n.value,onIonInput:e=>n.value=e.target.value,style:{width:"100%"}}))]))}}),z=i.defineComponent({name:"DataTable",props:{rows:{type:Array,default:()=>[]},asyncRows:{type:Function,required:!1},columns:{type:Array,default:()=>[]},actionsButtons:{type:Array,default:()=>[]},rowActionsButtons:{type:Array,default:()=>[]},customFilters:{type:Array,default:()=>[]},color:{type:String},config:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1}},emits:["customFilter","queryChange","drilldown"],setup(e,{emit:a,slots:t}){var n,o,l,u,c,d,h,z,B,A,O,P,F,R,L,D;const E=i.ref(!1),j=i.ref([]),T=i.ref([]),U=i.computed(()=>T.value.length),q=i.computed(()=>v["default"](e.rowActionsButtons)?N.value.length:N.value.length+1),M=i.computed(()=>$.pagination.enabled?g["default"]($.pagination.start,$.pagination.end+1):[]),N=i.computed(()=>e.config.showIndices?[{path:"index",label:"#",initialSort:!0,initialSortOrder:"asc"},...e.columns]:e.columns),$=i.reactive({search:"",sort:[],pagination:{enabled:null===(n=null===(o=e.config)||void 0===o||null===(o=o.pagination)||void 0===o?void 0:o.enabled)||void 0===n||n,page:null!==(l=null===(u=e.config)||void 0===u||null===(u=u.pagination)||void 0===u?void 0:u.page)&&void 0!==l?l:1,pageSize:null!==(c=null===(d=e.config)||void 0===d||null===(d=d.pagination)||void 0===d?void 0:d.pageSize)&&void 0!==c?c:10,start:null!==(h=null===(z=e.config)||void 0===z||null===(z=z.pagination)||void 0===z?void 0:z.start)&&void 0!==h?h:1,end:null!==(B=null===(A=e.config)||void 0===A||null===(A=A.pagination)||void 0===A?void 0:A.end)&&void 0!==B?B:1,totalPages:null!==(O=null===(P=e.config)||void 0===P||null===(P=P.pagination)||void 0===P?void 0:P.totalPages)&&void 0!==O?O:1,visibleBtns:null!==(F=null===(R=e.config)||void 0===R||null===(R=R.pagination)||void 0===R?void 0:R.visibleBtns)&&void 0!==F?F:7,pageSizeOptions:null!==(L=null===(D=e.config)||void 0===D||null===(D=D.pagination)||void 0===D?void 0:D.pageSizeOptions)&&void 0!==L?L:[5,10,20,50,100]}}),G=i.ref([]),J=i.computed(()=>!1!==e.config.showSearchField||e.customFilters.length>0||e.actionsButtons.length>0),W=i.reactive(e.customFilters.reduce((e,a)=>(e[a.id]=a.value,e),{})),Q=async()=>{E.value=!0,j.value=await f(e.rows,e.config.showIndices||!1,e.asyncRows),$.sort=w(N.value),V($.pagination),E.value=!1},V=(e,a,t)=>{a&&($.search=a),t&&($.sort=C($.sort,t));const n=S(j.value,$.search);T.value=m(n,$.sort),$.pagination.enabled?($.pagination=b(e,U.value,M.value),G.value=I(T.value,$.pagination)):G.value=T.value};i.watch(W,()=>{!1===e.config.showSubmitButton&&a("customFilter",W)},{immediate:!0,deep:!0}),i.watch(()=>e.rows,()=>Q(),{deep:!0,immediate:!0}),i.onMounted(()=>Q());const _=()=>!1!==e.config.showSearchField?i.h(s.IonCol,{size:"4"},[i.h(s.IonSearchbar,{placeholder:"search here...",class:"box ion-no-padding",value:$.search,onIonInput:e=>V({...$.pagination,page:1},e.target.value)})]):null,H=e=>i.h(s.IonCol,{size:""+e.gridSize||"3"},i.h(k,{options:e.options,placeholder:e.label||e.placeholder||"Select Item",value:e.value,multiple:e.multiple,onSelect:a=>{"function"===typeof e.onUpdate&&e.onUpdate(a),W[e.id]=a}})),K=e=>i.h(s.IonCol,{size:""+e.gridSize||"6"},i.h(x,{range:i.computed(()=>e.value||{startDate:"",endDate:""}).value,onRangeChange:async a=>{"function"===typeof e.onUpdate&&e.onUpdate(a),W[e.id]=a}})),X=e=>i.h(s.IonCol,{size:"4"},i.h(s.IonInput,{class:"box",type:e.type,placeholder:e.placeholder,value:i.computed(()=>e.value||"").value,onIonInput:async a=>{const t=a.target.value;"function"===typeof e.onUpdate&&e.onUpdate(t),W[e.id]=t}})),Y=()=>e.customFilters.map(e=>e.slotName&&"function"===typeof t[e.slotName]?i.h(s.IonCol,{size:""+(e.gridSize||"3")},t[e.slotName]({filter:e})):"dateRange"===e.type?K(e):"select"===e.type?H(e):X(e)),Z=()=>e.customFilters.length>0&&!1!==e.config.showSubmitButton?i.h(s.IonCol,{size:"2"},[i.h(s.IonButton,{color:"primary",class:"ion-no-margin",onClick:()=>a("customFilter",W)},"Submit")]):null,ee=()=>e.actionsButtons.map(e=>{var a;return i.h(s.IonButton,{class:"ion-float-right",color:e.color||"primary",size:null!==(a=e.size)&&void 0!==a?a:"default",onClick:()=>e.action(G.value,j.value,$,N.value)},e.icon?i.h(s.IonIcon,{icon:e.icon}):e.label)}),ae=()=>J.value&&i.h(s.IonGrid,{style:{width:"100%",fontWeight:500}},i.h(s.IonRow,[i.h(s.IonCol,{size:"7"},i.h(s.IonRow,[_(),...Y(),Z()])),i.h(s.IonCol,{size:"5",class:"ion-padding-end"},ee())])),te=()=>$.pagination.enabled&&$.pagination.totalPages>1&&i.h(s.IonGrid,{style:{width:"100%",textAlign:"left",color:"black"},class:"ion-padding"},i.h(s.IonRow,[i.h(s.IonCol,{size:"4"},ne()),i.h(s.IonCol,{size:"5",class:"text-center"},[le(),ie()]),i.h(s.IonCol,{size:"3"},ue())])),ne=()=>{const{page:e,start:a,end:t,totalPages:n}=$.pagination,o=e=>V({...$.pagination,page:e}),l=[oe({icon:r.caretBack,disabled:e===a,onClick:()=>o(e-1)})];return a>3&&(l.push(oe({label:"1",onClick:()=>o(1)})),l.push(oe({label:"...",disabled:!0}))),M.value.forEach(e=>{l.push(oe({label:e,onClick:()=>o(e)}))}),t<n-2&&(l.push(oe({label:"...",disabled:!0})),l.push(oe({label:n,onClick:()=>o(n)}))),l.push(oe({icon:r.caretForward,disabled:e===t||v["default"](T.value),onClick:()=>o(e+1)})),l},oe=({disabled:e,label:a,icon:t,onClick:n})=>i.h(s.IonButton,{onClick:n,disabled:e,size:"small",color:$.pagination.page===a?"primary":"light"},t?i.h(s.IonIcon,{icon:t}):a||"Button"),le=()=>i.h(s.IonItem,{class:"box go-to-input",lines:"none"},[i.h(s.IonLabel,{class:"ion-margin-end"},"Go to page"),i.h(s.IonInput,{type:"number",min:1,max:$.pagination.totalPages,value:$.pagination.page,style:{paddingRight:"15px"},debounce:500,onIonChange:e=>{const a=e.target.value;a>0&&a<=$.pagination.totalPages&&V({...$.pagination,page:a})}})]),ie=()=>i.h(s.IonItem,{class:"box per-page-input",lines:"none"},[i.h(s.IonLabel,"Items per page"),i.h(s.IonSelect,{value:$.pagination.pageSize,onIonChange:e=>V({...$.pagination,pageSize:e.target.value,page:1})},[...$.pagination.pageSizeOptions.map(e=>i.h(s.IonSelectOption,{value:e,key:e},e)),i.h(s.IonSelectOption,{value:U.value},"All")])]),ue=()=>i.h(s.IonCol,{size:"4",class:"pagination-info"},i.computed(()=>y($.pagination,U.value)).value),se=()=>i.h("thead",{class:e.color||""},i.h("tr",[...N.value.map(e=>ce(e)),!v["default"](e.rowActionsButtons)&&i.h("th","Actions")])),re=e=>{const a={marginRight:"5px",float:"right",cursor:"pointer"},t=i.computed(()=>{const a=$.sort.find(a=>a.column.path===e.path);return a?"asc"==a.order?r.arrowUp:r.arrowDown:r.swapVertical});return i.h(s.IonIcon,{icon:t.value,style:a})},ce=e=>{var a;const t={minWidth:/index/i.test(e.path)?"80px":"190px",...e.thStyles},n=()=>V($.pagination,$.search,e);return i.h("th",{key:e.label,style:t,class:null===(a=e.thClasses)||void 0===a?void 0:a.join(" "),onClick:n},[i.h("span",e.label),!1!==e.sortable&&re(e)])},de=()=>i.h("tbody",{class:"table-body"},E.value||e.loading?pe():v["default"](T.value)?ve():ge()),pe=()=>g["default"](0,9).map(e=>i.h("tr",{key:e},i.h("td",{colspan:q.value},i.h(s.IonSkeletonText,{animated:!0,style:{width:"100%"}})))),ve=()=>i.h("tr",i.h("td",{colspan:q.value},i.h("div",{class:"no-data-table"},"No data available"))),he=async(a,t)=>{const n=e.rowActionsButtons.find(e=>e.default);n&&await n.action(a,t)},ge=()=>G.value.map((e,a)=>i.h("tr",{key:e,onClick:()=>he(e,a)},[...fe(e),be(e,a)])),fe=e=>N.value.map((a,t)=>{var n;const o=["data-cell",...null!==(n=a.tdClasses)&&void 0!==n?n:[]].join(" ");return i.h("td",{key:t,class:o,style:a.tdStyles},me(e,a))}),me=(e,t)=>{let n=p["default"](e,t.path);return"function"===typeof t.formatter&&n&&(n=t.formatter(n,e)),t.drillable&&!v["default"](n)?i.h("a",{onClick:()=>a("drilldown",{column:t,row:e})},ye(n)):ye(n)},ye=e=>Array.isArray(e)?e.length:e,be=(a,t)=>v["default"](e.rowActionsButtons)?null:i.h("td",e.rowActionsButtons.map(e=>{const n="function"!==typeof e.condition||e.condition(a);return n?Ie(a,t,e):null})),Ie=(e,a,t)=>{var n;return i.h(s.IonButton,{key:t.icon,size:null!==(n=t.size)&&void 0!==n?n:"small",color:t.color||"primary",onClick:()=>t.action(e,a)},t.icon?i.h(s.IonIcon,{icon:t.icon}):t.label||"Button")},we=()=>i.h("div",{class:"responsive-table ion-padding-horizontal"},i.h("table",{class:"table bordered-table striped-table"},[se(),de()]));return()=>[ae(),we(),te()]}}),B={install(e,a){e.config.globalProperties.$globalTableOptions=a,e.provide("globalTableOptions",a),e.component("DataTable",z)}};a.DataTable=z,a.VTable=B,a.buildPaginationInfo=y,a.calculatePageRange=b,a.filterRows=S,a.getActiveRows=I,a.getRows=f,a.initializeSortQueries=w,a.sortRows=m,a.updateSortQueries=C},"5a3a":function(e,a,t){var n=t("1cba"),o=n();e.exports=o},"93c6":function(e,a,t){var n=t("6a5c"),o=t("6747");function l(e,a,t,l){return null==e?[]:(o(a)||(a=null==a?[]:[a]),t=l?void 0:t,o(t)||(t=null==t?[]:[t]),n(e,a,t))}e.exports=l},b211:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("d867");const o={async show(e){return(await n["loadingController"].create({message:e||"Loading...",spinner:"crescent",translucent:!0})).present()},async hide(){n["loadingController"].getTop().then(e=>e?n["loadingController"].dismiss():null)}}}}]);
//# sourceMappingURL=chunk-dc83f310.ffe8c6bb.js.map