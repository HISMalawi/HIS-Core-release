(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement41","TouchFormElement5","TouchFormElement54","TouchFormElement8"],{"08d2":function(e,t,i){},"347b":function(e,t,i){"use strict";i("08d2")},3581:function(e,t,i){"use strict";i("5024")},"36ad":function(e,t,i){"use strict";i.r(t);var s=i("7a23");function n(e,t,i,n,r,o){const l=Object(s["resolveComponent"])("ion-input");return Object(s["openBlock"])(),Object(s["createBlock"])(l,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t),type:e.type,disabled:e.disabled,readonly:e.readOnly,autocapitalize:"sentences",placeholder:e.placeholder},null,8,["modelValue","type","disabled","readonly","placeholder"])}var r=i("d867"),o=i("2ed9"),l=Object(s["defineComponent"])({name:"HisInput",components:{IonInput:r["v"]},setup(){const{activePlatformProfile:e}=Object(o["e"])(),t=Object(s["computed"])(()=>"HIS_KEYBOARD_ONLY"===e.value.keyboard);return{readOnly:t}},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1},placeholder:{type:String,default:()=>""}}}),a=(i("86f4"),i("6b0d")),c=i.n(a);const d=c()(l,[["render",n],["__scopeId","data-v-04472bbc"]]);t["default"]=d},4910:function(e,t,i){},5024:function(e,t,i){},"51c8":function(e,t,i){"use strict";i.r(t);var s=i("7a23"),n=Object(s["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const r=n;t["default"]=r},"82a9":function(e,t,i){"use strict";i.r(t);i("14d9");var s=i("7a23"),n=i("db10"),r=i("2345"),o=i("36ad"),l=i("6be2"),a=i("0a79"),c=i("51c8"),d=i("d867"),h=i("2ef0"),u=Object(s["defineComponent"])({components:{IonList:d["y"],IonItem:d["w"],IonLabel:d["x"],HisTextInput:o["default"],HisKeyboard:n["a"],ViewPort:a["a"],IonGrid:d["p"],IonRow:d["I"],IonCol:d["m"],IonInfiniteScroll:d["t"],IonInfiniteScrollContent:d["u"],IonContent:d["n"]},mixins:[c["default"]],data:()=>({showKeyboard:!1,selected:"",filter:"",filtered:[],keyboard:l["h"],listData:[],infiniteScroll:{enabled:!1,page:1,limit:10,threshold:"100px",handler:async(e,t,i)=>[]}}),created(){var e,t,i,s,n,r;this.showKeyboard=!0===(null===(e=this.config)||void 0===e?void 0:e.showKeyboard),this.infiniteScroll.enabled=!0===(null===(t=this.config)||void 0===t||null===(t=t.infiniteScroll)||void 0===t?void 0:t.enabled),this.infiniteScroll.page=(null===(i=this.config)||void 0===i||null===(i=i.infiniteScroll)||void 0===i?void 0:i.page)||1,this.infiniteScroll.limit=(null===(s=this.config)||void 0===s||null===(s=s.infiniteScroll)||void 0===s?void 0:s.limit)||10,this.infiniteScroll.threshold=(null===(n=this.config)||void 0===n||null===(n=n.infiniteScroll)||void 0===n?void 0:n.threshold)||"100px",this.infiniteScroll.handler=null===(r=this.config)||void 0===r||null===(r=r.infiniteScroll)||void 0===r?void 0:r.handler},watch:{footerButtonEvent:{handler(e){if(Object(h["isPlainObject"])(e.onClickComponentEvents)){const t=(null===e||void 0===e?void 0:e.onClickComponentEvents)||{};if(t&&"function"===typeof t.setValue){const i=t.setValue(e);"string"===typeof i&&(this.filter=i,this.selected=i,this.$emit("onValue",{label:i,value:i}))}}},deep:!0},listData:{handler(e){e&&(this.filtered=e)},deep:!0,immediate:!0},filter:{async handler(e){var t;if(e)if(null!==(t=this.config)&&void 0!==t&&t.isFilterDataViaApi){if(this.filtered=await this.options(this.fdata,e),this.selected===this.filter){const e=Object(h["find"])(this.filtered,{label:this.filter});e&&this.$emit("onValue",e)}}else this.infiniteScroll.enabled&&(this.infiniteScroll.page=1),this.filtered=this.listData.filter(e=>this.isMatch(e.label,this.filter));else this.filtered=this.listData},immediate:!0}},methods:{onTTsetValueComponentEvent(e){"string"===typeof e&&(this.filter=e,this.selected=e,this.$emit("onValue",{label:e,value:e}))},isMatch(e,t){return e.match(new RegExp(t,"i"))},clearSelection(){this.filter="",this.selected=""},onKbValue(e,t=!0){t&&this.selected!==e&&(this.filter=e,this.selected=this.filter)},keypress(e){this.filter||(this.selected=""),this.filter=Object(r["a"])(e,this.selected),this.selected=this.filter},async pushData(e){if(this.infiniteScroll.enabled&&"function"===typeof this.infiniteScroll.handler){this.infiniteScroll.page++;const e=await this.infiniteScroll.handler(this.filter,this.infiniteScroll.page,this.infiniteScroll.limit);this.listData.push(...e)}e.target.complete()}}}),f=(i("347b"),i("6b0d")),p=i.n(f);const m=p()(u,[["__scopeId","data-v-f5aee92a"]]);t["default"]=m},"86f4":function(e,t,i){"use strict";i("4910")},d11f:function(e,t,i){"use strict";i.r(t);var s=i("7a23");const n={class:"view-port-content"};function r(e,t,i,r,o,l){const a=Object(s["resolveComponent"])("his-text-input"),c=Object(s["resolveComponent"])("ion-label"),d=Object(s["resolveComponent"])("ion-item"),h=Object(s["resolveComponent"])("DynamicScroller"),u=Object(s["resolveComponent"])("view-port"),f=Object(s["resolveComponent"])("his-keyboard");return Object(s["openBlock"])(),Object(s["createElementBlock"])(s["Fragment"],null,[Object(s["createVNode"])(u,{showFull:!e.showKeyboard},{default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(a,{readonly:!e.showKeyboard,value:e.selected,onOnValue:t[0]||(t[0]=t=>e.onKbValue(t,e.showKeyboard))},null,8,["readonly","value"]),Object(s["createElementVNode"])("div",n,[Object(s["createVNode"])(h,{items:e.filtered,"min-item-size":50,"key-field":"label",class:"scrollable"},{default:Object(s["withCtx"])(({item:t,index:i})=>[(Object(s["openBlock"])(),Object(s["createBlock"])(d,{class:"his-md-text",button:"",key:i,color:t.label===e.selected?"lightblue":"",lines:t.isChecked?"none":"",disabled:!(!("disabled"in t)||!t.disabled),onClick:i=>e.onselect(t)},{default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(c,null,{default:Object(s["withCtx"])(()=>[Object(s["createTextVNode"])(Object(s["toDisplayString"])(t.label),1)]),_:2},1024)]),_:2},1032,["color","lines","disabled","onClick"]))]),_:1},8,["items"])])]),_:1},8,["showFull"]),e.showKeyboard?(Object(s["openBlock"])(),Object(s["createBlock"])(f,{key:0,kbConfig:e.keyboard,onKeyPress:e.keypress},null,8,["kbConfig","onKeyPress"])):Object(s["createCommentVNode"])("",!0)],64)}var o=i("82a9"),l=i("2ef0"),a=i("d867");function c(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var i=e.indexOf("Trident/");if(i>0){var s=e.indexOf("rv:");return parseInt(e.substring(s+3,e.indexOf(".",s)),10)}var n=e.indexOf("Edge/");return n>0?parseInt(e.substring(n+5,e.indexOf(".",n)),10):-1}let d;function h(){h.init||(h.init=!0,d=-1!==c())}var u={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){h(),Object(s["nextTick"])(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",d&&this.$el.appendChild(e),e.data="about:blank",d||this.$el.appendChild(e)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!d&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const f=Object(s["withScopeId"])("data-v-b329ee4c");Object(s["pushScopeId"])("data-v-b329ee4c");const p={class:"resize-observer",tabindex:"-1"};Object(s["popScopeId"])();const m=f((e,t,i,n,r,o)=>(Object(s["openBlock"])(),Object(s["createBlock"])("div",p)));u.render=m,u.__scopeId="data-v-b329ee4c",u.__file="src/components/ResizeObserver.vue";function b(e){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function g(e,t,i){return t&&y(e.prototype,t),i&&y(e,i),e}function O(e){return S(e)||z(e)||$(e)||w()}function S(e){if(Array.isArray(e))return _(e)}function z(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function $(e,t){if(e){if("string"===typeof e)return _(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}function w(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(e){var t;return t="function"===typeof e?{callback:e}:e,t}function k(e,t){var i,s,n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=function(o){for(var l=arguments.length,a=new Array(l>1?l-1:0),c=1;c<l;c++)a[c-1]=arguments[c];if(n=a,!i||o!==s){var d=r.leading;"function"===typeof d&&(d=d(o,s)),i&&o===s||!d||e.apply(void 0,[o].concat(O(n))),s=o,clearTimeout(i),i=setTimeout((function(){e.apply(void 0,[o].concat(O(n))),i=0}),t)}};return o._clear=function(){clearTimeout(i),i=null},o}function I(e,t){if(e===t)return!0;if("object"===b(e)){for(var i in e)if(!I(e[i],t[i]))return!1;return!0}return!1}var x=function(){function e(t,i,s){v(this,e),this.el=t,this.observer=null,this.frozen=!1,this.createObserver(i,s)}return g(e,[{key:"createObserver",value:function(e,t){var i=this;if(this.observer&&this.destroyObserver(),!this.frozen){if(this.options=j(e),this.callback=function(e,t){i.options.callback(e,t),e&&i.options.once&&(i.frozen=!0,i.destroyObserver())},this.callback&&this.options.throttle){var n=this.options.throttleOptions||{},r=n.leading;this.callback=k(this.callback,this.options.throttle,{leading:function(e){return"both"===r||"visible"===r&&e||"hidden"===r&&!e}})}this.oldResult=void 0,this.observer=new IntersectionObserver((function(e){var t=e[0];if(e.length>1){var s=e.find((function(e){return e.isIntersecting}));s&&(t=s)}if(i.callback){var n=t.isIntersecting&&t.intersectionRatio>=i.threshold;if(n===i.oldResult)return;i.oldResult=n,i.callback(n,t)}}),this.options.intersection),Object(s["nextTick"])((function(){i.observer&&i.observer.observe(i.el)}))}}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&"number"===typeof this.options.intersection.threshold?this.options.intersection.threshold:0}}]),e}();function V(e,t,i){var s=t.value;if(s)if("undefined"===typeof IntersectionObserver)console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var n=new x(e,s,i);e._vue_visibilityState=n}}function T(e,t,i){var s=t.value,n=t.oldValue;if(!I(s,n)){var r=e._vue_visibilityState;s?r?r.createObserver(s,i):V(e,{value:s},i):D(e)}}function D(e){var t=e._vue_visibilityState;t&&(t.destroyObserver(),delete e._vue_visibilityState)}var C={beforeMount:V,updated:T,unmounted:D};var R=function(e){return{all:e=e||new Map,on:function(t,i){var s=e.get(t);s&&s.push(i)||e.set(t,[i])},off:function(t,i){var s=e.get(t);s&&s.splice(s.indexOf(i)>>>0,1)},emit:function(t,i){(e.get(t)||[]).slice().map((function(e){e(i)})),(e.get("*")||[]).slice().map((function(e){e(t,i)}))}}},B={itemsLimit:1e3},A=/(auto|scroll)/;function P(e,t){return null===e.parentNode?t:P(e.parentNode,t.concat([e]))}var E=function(e,t){return getComputedStyle(e,null).getPropertyValue(t)},F=function(e){return E(e,"overflow")+E(e,"overflow-y")+E(e,"overflow-x")},M=function(e){return A.test(F(e))};function N(e){if(e instanceof HTMLElement||e instanceof SVGElement){for(var t=P(e.parentNode,[]),i=0;i<t.length;i+=1)if(M(t[i]))return t[i];return document.scrollingElement||document.documentElement}}function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}var U={items:{type:Array,required:!0},keyField:{type:String,default:"id"},direction:{type:String,default:"vertical",validator:function(e){return["vertical","horizontal"].includes(e)}},listTag:{type:String,default:"div"},itemTag:{type:String,default:"div"}};function H(){return this.items.length&&"object"!==L(this.items[0])}var K=!1;if("undefined"!==typeof window){K=!1;try{var W=Object.defineProperty({},"passive",{get:function(){K=!0}});window.addEventListener("test",null,W)}catch(re){}}let q=0;var Y={name:"RecycleScroller",components:{ResizeObserver:u},directives:{ObserveVisibility:C},props:{...U,itemSize:{type:Number,default:null},gridItems:{type:Number,default:void 0},itemSecondarySize:{type:Number,default:void 0},minItemSize:{type:[Number,String],default:null},sizeField:{type:String,default:"size"},typeField:{type:String,default:"type"},buffer:{type:Number,default:200},pageMode:{type:Boolean,default:!1},prerender:{type:Number,default:0},emitUpdate:{type:Boolean,default:!1},updateInterval:{type:Number,default:0},skipHover:{type:Boolean,default:!1},listTag:{type:String,default:"div"},itemTag:{type:String,default:"div"},listClass:{type:[String,Object,Array],default:""},itemClass:{type:[String,Object,Array],default:""}},emits:["resize","visible","hidden","update","scroll-start","scroll-end"],data(){return{pool:[],totalSize:0,ready:!1,hoverKey:null}},computed:{sizes(){if(null===this.itemSize){const e={"-1":{accumulator:0}},t=this.items,i=this.sizeField,s=this.minItemSize;let n,r=1e4,o=0;for(let l=0,a=t.length;l<a;l++)n=t[l][i]||s,n<r&&(r=n),o+=n,e[l]={accumulator:o,size:n};return this.$_computedMinItemSize=r,e}return[]},simpleArray:H,itemIndexByKey(){const{keyField:e,items:t}=this,i={};for(let s=0,n=t.length;s<n;s++)i[t[s][e]]=s;return i}},watch:{items(){this.updateVisibleItems(!0)},pageMode(){this.applyPageMode(),this.updateVisibleItems(!1)},sizes:{handler(){this.updateVisibleItems(!1)},deep:!0},gridItems(){this.updateVisibleItems(!0)},itemSecondarySize(){this.updateVisibleItems(!0)}},created(){this.$_startIndex=0,this.$_endIndex=0,this.$_views=new Map,this.$_unusedViews=new Map,this.$_scrollDirty=!1,this.$_lastUpdateScrollPosition=0,this.prerender&&(this.$_prerender=!0,this.updateVisibleItems(!1)),this.gridItems&&!this.itemSize&&console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems")},mounted(){this.applyPageMode(),this.$nextTick(()=>{this.$_prerender=!1,this.updateVisibleItems(!0),this.ready=!0})},activated(){const e=this.$_lastUpdateScrollPosition;"number"===typeof e&&this.$nextTick(()=>{this.scrollToPosition(e)})},beforeUnmount(){this.removeListeners()},methods:{addView(e,t,i,n,r){const o=Object(s["markRaw"])({id:q++,index:t,used:!0,key:n,type:r}),l=Object(s["shallowReactive"])({item:i,position:0,nr:o});return e.push(l),l},unuseView(e,t=!1){const i=this.$_unusedViews,s=e.nr.type;let n=i.get(s);n||(n=[],i.set(s,n)),n.push(e),t||(e.nr.used=!1,e.position=-9999)},handleResize(){this.$emit("resize"),this.ready&&this.updateVisibleItems(!1)},handleScroll(e){if(!this.$_scrollDirty){if(this.$_scrollDirty=!0,this.$_updateTimeout)return;const e=()=>requestAnimationFrame(()=>{this.$_scrollDirty=!1;const{continuous:e}=this.updateVisibleItems(!1,!0);e||(clearTimeout(this.$_refreshTimout),this.$_refreshTimout=setTimeout(this.handleScroll,this.updateInterval+100))});e(),this.updateInterval&&(this.$_updateTimeout=setTimeout(()=>{this.$_updateTimeout=0,this.$_scrollDirty&&e()},this.updateInterval))}},handleVisibilityChange(e,t){this.ready&&(e||0!==t.boundingClientRect.width||0!==t.boundingClientRect.height?(this.$emit("visible"),requestAnimationFrame(()=>{this.updateVisibleItems(!1)})):this.$emit("hidden"))},updateVisibleItems(e,t=!1){const i=this.itemSize,s=this.gridItems||1,n=this.itemSecondarySize||i,r=this.$_computedMinItemSize,o=this.typeField,l=this.simpleArray?null:this.keyField,a=this.items,c=a.length,d=this.sizes,h=this.$_views,u=this.$_unusedViews,f=this.pool,p=this.itemIndexByKey;let m,b,v,y,g,O;if(c)if(this.$_prerender)m=y=0,b=g=Math.min(this.prerender,a.length),v=null;else{const e=this.getScroll();if(t){let t=e.start-this.$_lastUpdateScrollPosition;if(t<0&&(t=-t),null===i&&t<r||t<i)return{continuous:!0}}this.$_lastUpdateScrollPosition=e.start;const n=this.buffer;e.start-=n,e.end+=n;let o=0;if(this.$refs.before&&(o=this.$refs.before.scrollHeight,e.start-=o),this.$refs.after){const t=this.$refs.after.scrollHeight;e.end+=t}if(null===i){let t,i,s=0,n=c-1,r=~~(c/2);do{i=r,t=d[r].accumulator,t<e.start?s=r:r<c-1&&d[r+1].accumulator>e.start&&(n=r),r=~~((s+n)/2)}while(r!==i);for(r<0&&(r=0),m=r,v=d[c-1].accumulator,b=r;b<c&&d[b].accumulator<e.end;b++);for(-1===b?b=a.length-1:(b++,b>c&&(b=c)),y=m;y<c&&o+d[y].accumulator<e.start;y++);for(g=y;g<c&&o+d[g].accumulator<e.end;g++);}else{m=~~(e.start/i*s);const t=m%s;m-=t,b=Math.ceil(e.end/i*s),y=Math.max(0,Math.floor((e.start-o)/i*s)),g=Math.floor((e.end-o)/i*s),m<0&&(m=0),b>c&&(b=c),y<0&&(y=0),g>c&&(g=c),v=Math.ceil(c/s)*i}}else m=b=y=g=v=0;b-m>B.itemsLimit&&this.itemsLimitError(),this.totalSize=v;const S=m<=this.$_endIndex&&b>=this.$_startIndex;if(S)for(let j=0,k=f.length;j<k;j++)O=f[j],O.nr.used&&(e&&(O.nr.index=p[O.item[l]]),(null==O.nr.index||O.nr.index<m||O.nr.index>=b)&&this.unuseView(O));const z=S?null:new Map;let $,_,w;for(let j=m;j<b;j++){$=a[j];const e=l?$[l]:$;if(null==e)throw new Error(`Key is ${e} on item (keyField is '${l}')`);if(O=h.get(e),!i&&!d[j].size){O&&this.unuseView(O);continue}_=$[o];let t=u.get(_),r=!1;if(O){if(!O.nr.used&&(O.nr.used=!0,r=!0,t)){const e=t.indexOf(O);-1!==e&&t.splice(e,1)}}else S?O=t&&t.length?t.pop():this.addView(f,j,$,e,_):(w=z.get(_)||0,(!t||w>=t.length)&&(O=this.addView(f,j,$,e,_),this.unuseView(O,!0),t=u.get(_)),O=t[w],z.set(_,w+1)),h.delete(O.nr.key),O.nr.used=!0,O.nr.index=j,O.nr.key=e,O.nr.type=_,h.set(e,O),r=!0;O.item=$,r&&(j===a.length-1&&this.$emit("scroll-end"),0===j&&this.$emit("scroll-start")),null===i?(O.position=d[j-1].accumulator,O.offset=0):(O.position=Math.floor(j/s)*i,O.offset=j%s*n)}return this.$_startIndex=m,this.$_endIndex=b,this.emitUpdate&&this.$emit("update",m,b,y,g),clearTimeout(this.$_sortTimer),this.$_sortTimer=setTimeout(this.sortViews,this.updateInterval+300),{continuous:S}},getListenerTarget(){let e=N(this.$el);return!window.document||e!==window.document.documentElement&&e!==window.document.body||(e=window),e},getScroll(){const{$el:e,direction:t}=this,i="vertical"===t;let s;if(this.pageMode){const t=e.getBoundingClientRect(),n=i?t.height:t.width;let r=-(i?t.top:t.left),o=i?window.innerHeight:window.innerWidth;r<0&&(o+=r,r=0),r+o>n&&(o=n-r),s={start:r,end:r+o}}else s=i?{start:e.scrollTop,end:e.scrollTop+e.clientHeight}:{start:e.scrollLeft,end:e.scrollLeft+e.clientWidth};return s},applyPageMode(){this.pageMode?this.addListeners():this.removeListeners()},addListeners(){this.listenerTarget=this.getListenerTarget(),this.listenerTarget.addEventListener("scroll",this.handleScroll,!!K&&{passive:!0}),this.listenerTarget.addEventListener("resize",this.handleResize)},removeListeners(){this.listenerTarget&&(this.listenerTarget.removeEventListener("scroll",this.handleScroll),this.listenerTarget.removeEventListener("resize",this.handleResize),this.listenerTarget=null)},scrollToItem(e){let t;const i=this.gridItems||1;t=null===this.itemSize?e>0?this.sizes[e-1].accumulator:0:Math.floor(e/i)*this.itemSize,this.scrollToPosition(t)},scrollToPosition(e){const t="vertical"===this.direction?{scroll:"scrollTop",start:"top"}:{scroll:"scrollLeft",start:"left"};let i,s,n;if(this.pageMode){const r=N(this.$el),o="HTML"===r.tagName?0:r[t.scroll],l=r.getBoundingClientRect(),a=this.$el.getBoundingClientRect(),c=a[t.start]-l[t.start];i=r,s=t.scroll,n=e+o+c}else i=this.$el,s=t.scroll,n=e;i[s]=n},itemsLimitError(){throw setTimeout(()=>{console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.","Scroller:",this.$el),console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.")}),new Error("Rendered items limit reached")},sortViews(){this.pool.sort((e,t)=>e.nr.index-t.nr.index)}}};const G={key:0,ref:"before",class:"vue-recycle-scroller__slot"},J={key:1,ref:"after",class:"vue-recycle-scroller__slot"};function X(e,t,i,n,r,o){const l=Object(s["resolveComponent"])("ResizeObserver"),a=Object(s["resolveDirective"])("observe-visibility");return Object(s["withDirectives"])((Object(s["openBlock"])(),Object(s["createElementBlock"])("div",{class:Object(s["normalizeClass"])(["vue-recycle-scroller",{ready:r.ready,"page-mode":i.pageMode,["direction-"+e.direction]:!0}]),onScrollPassive:t[0]||(t[0]=(...e)=>o.handleScroll&&o.handleScroll(...e))},[e.$slots.before?(Object(s["openBlock"])(),Object(s["createElementBlock"])("div",G,[Object(s["renderSlot"])(e.$slots,"before")],512)):Object(s["createCommentVNode"])("v-if",!0),(Object(s["openBlock"])(),Object(s["createBlock"])(Object(s["resolveDynamicComponent"])(i.listTag),{ref:"wrapper",style:Object(s["normalizeStyle"])({["vertical"===e.direction?"minHeight":"minWidth"]:r.totalSize+"px"}),class:Object(s["normalizeClass"])(["vue-recycle-scroller__item-wrapper",i.listClass])},{default:Object(s["withCtx"])(()=>[(Object(s["openBlock"])(!0),Object(s["createElementBlock"])(s["Fragment"],null,Object(s["renderList"])(r.pool,t=>(Object(s["openBlock"])(),Object(s["createBlock"])(Object(s["resolveDynamicComponent"])(i.itemTag),Object(s["mergeProps"])({key:t.nr.id,style:r.ready?{transform:`translate${"vertical"===e.direction?"Y":"X"}(${t.position}px) translate${"vertical"===e.direction?"X":"Y"}(${t.offset}px)`,width:i.gridItems?("vertical"===e.direction&&i.itemSecondarySize||i.itemSize)+"px":void 0,height:i.gridItems?("horizontal"===e.direction&&i.itemSecondarySize||i.itemSize)+"px":void 0}:null,class:["vue-recycle-scroller__item-view",[i.itemClass,{hover:!i.skipHover&&r.hoverKey===t.nr.key}]]},Object(s["toHandlers"])(i.skipHover?{}:{mouseenter:()=>{r.hoverKey=t.nr.key},mouseleave:()=>{r.hoverKey=null}})),{default:Object(s["withCtx"])(()=>[Object(s["renderSlot"])(e.$slots,"default",{item:t.item,index:t.nr.index,active:t.nr.used})]),_:2},1040,["style","class"]))),128)),Object(s["renderSlot"])(e.$slots,"empty")]),_:3},8,["style","class"])),e.$slots.after?(Object(s["openBlock"])(),Object(s["createElementBlock"])("div",J,[Object(s["renderSlot"])(e.$slots,"after")],512)):Object(s["createCommentVNode"])("v-if",!0),Object(s["createVNode"])(l,{onNotify:o.handleResize},null,8,["onNotify"])],34)),[[a,o.handleVisibilityChange]])}Y.render=X,Y.__file="src/components/RecycleScroller.vue";var Q={name:"DynamicScroller",components:{RecycleScroller:Y},provide(){return"undefined"!==typeof ResizeObserver&&(this.$_resizeObserver=new ResizeObserver(e=>{requestAnimationFrame(()=>{if(Array.isArray(e))for(const t of e)if(t.target&&t.target.$_vs_onResize){let e,i;if(t.borderBoxSize){const s=t.borderBoxSize[0];e=s.inlineSize,i=s.blockSize}else e=t.contentRect.width,i=t.contentRect.height;t.target.$_vs_onResize(t.target.$_vs_id,e,i)}})})),{vscrollData:this.vscrollData,vscrollParent:this,vscrollResizeObserver:this.$_resizeObserver}},inheritAttrs:!1,props:{...U,minItemSize:{type:[Number,String],required:!0}},emits:["resize","visible"],data(){return{vscrollData:{active:!0,sizes:{},keyField:this.keyField,simpleArray:!1}}},computed:{simpleArray:H,itemsWithSize(){const e=[],{items:t,keyField:i,simpleArray:s}=this,n=this.vscrollData.sizes,r=t.length;for(let o=0;o<r;o++){const r=t[o],l=s?o:r[i];let a=n[l];"undefined"!==typeof a||this.$_undefinedMap[l]||(a=0),e.push({item:r,id:l,size:a})}return e}},watch:{items(){this.forceUpdate()},simpleArray:{handler(e){this.vscrollData.simpleArray=e},immediate:!0},direction(e){this.forceUpdate(!0)},itemsWithSize(e,t){const i=this.$el.scrollTop;let s=0,n=0;const r=Math.min(e.length,t.length);for(let l=0;l<r;l++){if(s>=i)break;s+=t[l].size||this.minItemSize,n+=e[l].size||this.minItemSize}const o=n-s;0!==o&&(this.$el.scrollTop+=o)}},beforeCreate(){this.$_updates=[],this.$_undefinedSizes=0,this.$_undefinedMap={},this.$_events=R()},activated(){this.vscrollData.active=!0},deactivated(){this.vscrollData.active=!1},unmounted(){this.$_events.all.clear()},methods:{onScrollerResize(){const e=this.$refs.scroller;e&&this.forceUpdate(),this.$emit("resize")},onScrollerVisible(){this.$_events.emit("vscroll:update",{force:!1}),this.$emit("visible")},forceUpdate(e=!1){(e||this.simpleArray)&&(this.vscrollData.sizes={}),this.$_events.emit("vscroll:update",{force:!0})},scrollToItem(e){const t=this.$refs.scroller;t&&t.scrollToItem(e)},getItemSize(e,t){const i=this.simpleArray?null!=t?t:this.items.indexOf(e):e[this.keyField];return this.vscrollData.sizes[i]||0},scrollToBottom(){if(this.$_scrollingToBottom)return;this.$_scrollingToBottom=!0;const e=this.$el;this.$nextTick(()=>{e.scrollTop=e.scrollHeight+5e3;const t=()=>{e.scrollTop=e.scrollHeight+5e3,requestAnimationFrame(()=>{e.scrollTop=e.scrollHeight+5e3,0===this.$_undefinedSizes?this.$_scrollingToBottom=!1:requestAnimationFrame(t)})};requestAnimationFrame(t)})}}};function Z(e,t,i,n,r,o){const l=Object(s["resolveComponent"])("RecycleScroller");return Object(s["openBlock"])(),Object(s["createBlock"])(l,Object(s["mergeProps"])({ref:"scroller",items:o.itemsWithSize,"min-item-size":i.minItemSize,direction:e.direction,"key-field":"id","list-tag":e.listTag,"item-tag":e.itemTag},e.$attrs,{onResize:o.onScrollerResize,onVisible:o.onScrollerVisible}),{default:Object(s["withCtx"])(({item:t,index:i,active:n})=>[Object(s["renderSlot"])(e.$slots,"default",Object(s["normalizeProps"])(Object(s["guardReactiveProps"])({item:t.item,index:i,active:n,itemWithSize:t})))]),before:Object(s["withCtx"])(()=>[Object(s["renderSlot"])(e.$slots,"before")]),after:Object(s["withCtx"])(()=>[Object(s["renderSlot"])(e.$slots,"after")]),empty:Object(s["withCtx"])(()=>[Object(s["renderSlot"])(e.$slots,"empty")]),_:3},16,["items","min-item-size","direction","list-tag","item-tag","onResize","onVisible"])}Q.render=Z,Q.__file="src/components/DynamicScroller.vue";var ee={name:"DynamicScrollerItem",inject:["vscrollData","vscrollParent","vscrollResizeObserver"],props:{item:{required:!0},watchData:{type:Boolean,default:!1},active:{type:Boolean,required:!0},index:{type:Number,default:void 0},sizeDependencies:{type:[Array,Object],default:null},emitResize:{type:Boolean,default:!1},tag:{type:String,default:"div"}},emits:["resize"],computed:{id(){if(this.vscrollData.simpleArray)return this.index;if(this.vscrollData.keyField in this.item)return this.item[this.vscrollData.keyField];throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`)},size(){return this.vscrollData.sizes[this.id]||0},finalActive(){return this.active&&this.vscrollData.active}},watch:{watchData:"updateWatchData",id(e,t){if(this.$el.$_vs_id=this.id,this.size||this.onDataUpdate(),this.$_sizeObserved){const i=this.vscrollData.sizes[t],s=this.vscrollData.sizes[e];null!=i&&i!==s&&this.applySize(i)}},finalActive(e){this.size||(e?this.vscrollParent.$_undefinedMap[this.id]||(this.vscrollParent.$_undefinedSizes++,this.vscrollParent.$_undefinedMap[this.id]=!0):this.vscrollParent.$_undefinedMap[this.id]&&(this.vscrollParent.$_undefinedSizes--,this.vscrollParent.$_undefinedMap[this.id]=!1)),this.vscrollResizeObserver?e?this.observeSize():this.unobserveSize():e&&this.$_pendingVScrollUpdate===this.id&&this.updateSize()}},created(){if(!this.$isServer&&(this.$_forceNextVScrollUpdate=null,this.updateWatchData(),!this.vscrollResizeObserver)){for(const e in this.sizeDependencies)this.$watch(()=>this.sizeDependencies[e],this.onDataUpdate);this.vscrollParent.$_events.on("vscroll:update",this.onVscrollUpdate)}},mounted(){this.finalActive&&(this.updateSize(),this.observeSize())},beforeUnmount(){this.vscrollParent.$_events.off("vscroll:update",this.onVscrollUpdate),this.unobserveSize()},methods:{updateSize(){this.finalActive?this.$_pendingSizeUpdate!==this.id&&(this.$_pendingSizeUpdate=this.id,this.$_forceNextVScrollUpdate=null,this.$_pendingVScrollUpdate=null,this.computeSize(this.id)):this.$_forceNextVScrollUpdate=this.id},updateWatchData(){this.watchData&&!this.vscrollResizeObserver?this.$_watchData=this.$watch("item",()=>{this.onDataUpdate()},{deep:!0}):this.$_watchData&&(this.$_watchData(),this.$_watchData=null)},onVscrollUpdate({force:e}){!this.finalActive&&e&&(this.$_pendingVScrollUpdate=this.id),this.$_forceNextVScrollUpdate!==this.id&&!e&&this.size||this.updateSize()},onDataUpdate(){this.updateSize()},computeSize(e){this.$nextTick(()=>{if(this.id===e){const e=this.$el.offsetWidth,t=this.$el.offsetHeight;this.applyWidthHeight(e,t)}this.$_pendingSizeUpdate=null})},applyWidthHeight(e,t){const i=~~("vertical"===this.vscrollParent.direction?t:e);i&&this.size!==i&&this.applySize(i)},applySize(e){this.vscrollParent.$_undefinedMap[this.id]&&(this.vscrollParent.$_undefinedSizes--,this.vscrollParent.$_undefinedMap[this.id]=void 0),this.vscrollData.sizes[this.id]=e,this.emitResize&&this.$emit("resize",this.id)},observeSize(){this.vscrollResizeObserver&&(this.$_sizeObserved||(this.vscrollResizeObserver.observe(this.$el),this.$el.$_vs_id=this.id,this.$el.$_vs_onResize=this.onResize,this.$_sizeObserved=!0))},unobserveSize(){this.vscrollResizeObserver&&this.$_sizeObserved&&(this.vscrollResizeObserver.unobserve(this.$el),this.$el.$_vs_onResize=void 0,this.$_sizeObserved=!1)},onResize(e,t,i){this.id===e&&this.applyWidthHeight(t,i)}},render(){return Object(s["h"])(this.tag,this.$slots.default())}};ee.__file="src/components/DynamicScrollerItem.vue";var te=Object(s["defineComponent"])({name:"HisSelect",components:{IonItem:a["w"],IonLabel:a["x"],DynamicScroller:Q},mixins:[o["default"]],data:()=>({isInit:!1}),mounted(){this.init()},activated(){this.init()},methods:{clearValue(){this.clearSelection()},async init(){if(this.$emit("onFieldActivated",this),this.listData=await this.options(this.fdata),this.isInit){if("function"===typeof this.config.onInitValue){const e=await this.config.onInitValue(this.selected,this.fdata,this.cdata);if(e){const t=Object(l["find"])(this.listData,{label:e})||Object(l["find"])(this.listData,{value:e});t?this.onselect(t):(this.selected=e,this.filter=e)}else this.onselect(null),this.filter=""}}else await this.setDefaultValue();this.isInit=!0},async setDefaultValue(){if(this.defaultValue){const e=await this.defaultValue(this.fdata,this.cdata,this.selected);if(e){const t=Object(l["find"])(this.listData,{label:e})||Object(l["find"])(this.listData,{value:e});t?this.onselect(t):(this.selected=e,this.filter=e)}}},async onselect(e){if(this.selected=e?e.label:"",this.onValue){const t=await this.onValue(e,this);if(!t)return void(this.selected="")}this.$emit("onValue",e)}}}),ie=(i("3581"),i("6b0d")),se=i.n(ie);const ne=se()(te,[["render",r],["__scopeId","data-v-f0385dda"]]);t["default"]=ne},db10:function(e,t,i){"use strict";var s=i("7a23");const n={class:"his-floating-keyboard"},r={class:"his-floating-keyboard-content"};function o(e,t,i,o,l,a){const c=Object(s["resolveComponent"])("base-keyboard");return Object(s["openBlock"])(),Object(s["createElementBlock"])("div",n,[Object(s["createElementVNode"])("div",r,[(Object(s["openBlock"])(!0),Object(s["createElementBlock"])(s["Fragment"],null,Object(s["renderList"])(e.activeLayout,(t,i)=>(Object(s["openBlock"])(),Object(s["createElementBlock"])("div",{key:i},[Object(s["createVNode"])(c,{layout:t,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])]))),128))])])}var l=i("6be2"),a=i("c924"),c=Object(s["defineComponent"])({components:{BaseKeyboard:a["a"]},props:{initalKeyboardName:{type:String},kbConfig:{type:Array,required:!0},onKeyPress:{type:Function,required:!0}},data:()=>({activeLayout:{}}),watch:{initalKeyboardName:{handler(e){e&&this.$nextTick(()=>this.switchKeyboard(e))},immediate:!0},kbConfig:{handler(e){e&&(this.activeLayout=e)},deep:!0,immediate:!0}},methods:{keypress(e){this.isFunctionKey(e)||this.onKeyPress(e)},isFunctionKey(e){return!!this.switchKeyboard(e)},switchKeyboard(e){const t=l["a"].map(e=>e.btn).indexOf(e);return t>=0&&(this.activeLayout=l["a"][t].keyboard,!0)}}}),d=i("6b0d"),h=i.n(d);const u=h()(c,[["render",o]]);t["a"]=u}}]);
//# sourceMappingURL=TouchFormElement41.b3b82174.js.map