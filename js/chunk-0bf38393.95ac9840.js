(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bf38393"],{"04f1":function(e,t,n){"use strict";n("63c6")},2048:function(e,t,n){"use strict";var c=n("7a23");function o(e,t,n,o,r,i){const s=Object(c["resolveComponent"])("v2Datatable"),a=Object(c["resolveComponent"])("ion-page");return Object(c["openBlock"])(),Object(c["createBlock"])(a,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(s,{title:e.title,subtitle:e.subtitle,columnData:e.reportData,columns:e.columns,"on-finish":e.onFinish,rowsPerPage:e.ITEMS_PER_PAGE},null,8,["title","subtitle","columnData","columns","on-finish","rowsPerPage"])]),_:1})}n("14d9");var r=n("d867"),i=n("99ae"),s=n("6605"),a=n("2ef0"),l=n("8734"),h=n("23e6"),u=n("0011");const d=20,g={};var p=Object(c["defineComponent"])({props:{title:{type:String,default:"Drilldown"},patientIdentifiers:{type:Object},onFinish:{type:Function}},components:{IonPage:r["D"],v2Datatable:i["a"]},setup(e){const t=Object(c["ref"])("-"),n=Object(c["ref"])([]),o=Object(s["i"])(),r=[[{label:"National ID",ref:"national_id"},{label:"First name",ref:"given_name"},{label:"Last name",ref:"family_name"},{label:"Birthdate",ref:"birthdate"},{label:"Action",ref:"patient_id",exportable:!1,tdClick:({data:e})=>o.push({path:"/patient/dashboard/"+e.patient_id}),value:()=>"View client"}]];return Object(c["watch"])(()=>e.patientIdentifiers,async e=>{if(n.value=[],t.value="Total: 0",!e||!e.length)return;const c=Object(a["chunk"])(e,d);for(const r of c){for(const c of r){try{let e=null;g[c]?e=g[c]:(e=new h["a"](await h["a"].findByID(c)),g[c]=e),n.value.push({patient_id:e.getID(),national_id:e.getNationalID(),given_name:e.getGivenName(),family_name:e.getFamilyName(),birthdate:Object(u["g"])(e.getBirthdate())})}catch(o){console.error(o),n.value.push({})}t.value=`Total: ${n.value.length} of ${(e||[]).length}`}await Object(l["a"])(500)}},{immediate:!0}),{columns:r,subtitle:t,reportData:n,ITEMS_PER_PAGE:d}}}),f=n("d959"),b=n.n(f);const m=b()(p,[["render",o]]);t["a"]=m},"63c6":function(e,t,n){},"99ae":function(e,t,n){"use strict";var c=n("7a23");const o={key:0},r={class:"his-sm-text"},i={class:"art-report-theme"},s={class:"stick-report-header"},a=["colspan","rowspan","onClick"],l=["onClick"],h={class:"his-sm-text"};function u(e,t,n,u,d,g){const p=Object(c["resolveComponent"])("ion-img"),f=Object(c["resolveComponent"])("ion-thumbnail"),b=Object(c["resolveComponent"])("ion-title"),m=Object(c["resolveComponent"])("ion-icon"),O=Object(c["resolveComponent"])("ion-button"),j=Object(c["resolveComponent"])("ion-label"),y=Object(c["resolveComponent"])("ion-chip"),k=Object(c["resolveComponent"])("ion-buttons"),x=Object(c["resolveComponent"])("ion-toolbar"),v=Object(c["resolveComponent"])("ion-header"),C=Object(c["resolveComponent"])("ion-item"),w=Object(c["resolveComponent"])("ion-content"),M=Object(c["resolveComponent"])("ion-footer");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(v,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(x,null,{default:Object(c["withCtx"])(()=>[e.logo?(Object(c["openBlock"])(),Object(c["createBlock"])(f,{key:0,slot:"start"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(p,{src:e.logo},null,8,["src"])]),_:1})):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(b,{class:"his-md-text"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.title)+" ",1),e.subtitle?(Object(c["openBlock"])(),Object(c["createElementBlock"])("br",o)):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("span",r,Object(c["toDisplayString"])(e.subtitle),1)]),_:1}),Object(c["createVNode"])(k,{slot:"end"},{default:Object(c["withCtx"])(()=>["function"===typeof e.onConfigure?(Object(c["openBlock"])(),Object(c["createBlock"])(O,{key:0,onClick:e.onConfigure},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(m,{size:"large",icon:e.document},null,8,["icon"])]),_:1},8,["onClick"])):Object(c["createCommentVNode"])("",!0),e.searchTerm?(Object(c["openBlock"])(),Object(c["createBlock"])(y,{key:1,onClick:t[0]||(t[0]=t=>e.searchTerm=""),class:"his-md-text",color:"warning"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,null,{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.searchTerm),1)]),_:1}),Object(c["createVNode"])(m,{icon:e.close},null,8,["icon"])]),_:1})):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(O,{onClick:e.searchTable,size:"large"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(m,{size:"large",icon:e.search},null,8,["icon"])]),_:1},8,["onClick"]),"function"===typeof e.onRefresh?(Object(c["openBlock"])(),Object(c["createBlock"])(O,{key:2,onClick:e.onRefresh,color:"success",size:"large"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(m,{size:"large",icon:e.sync},null,8,["icon"])]),_:1},8,["onClick"])):Object(c["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1}),Object(c["createVNode"])(w,{"scroll-y":"","scroll-x":""},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("table",i,[Object(c["createElementVNode"])("thead",s,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.columns,(t,n)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:n},[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t,(t,n)=>{var o,r;return Object(c["openBlock"])(),Object(c["createElementBlock"])("th",{key:n,colspan:(null===t||void 0===t||null===(o=t.span)||void 0===o?void 0:o.thColspan)||1,rowspan:(null===t||void 0===t||null===(r=t.span)||void 0===r?void 0:r.thRowspan)||1,onClick:n=>e.sortColumn(t.ref)},[Object(c["createVNode"])(C,{lines:"none"},{default:Object(c["withCtx"])(()=>[e.columnSorted&&e.columnSorted===t.ref?(Object(c["openBlock"])(),Object(c["createBlock"])(m,{key:0,icon:"asc"===e.sortOrder?e.arrowUp:e.arrowDown},null,8,["icon"])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(j,{class:"ion-text-center"},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("b",null,Object(c["toDisplayString"])(t.label),1)]),_:2},1024)]),_:2},1024)],8,a)}),128))]))),128))]),Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.page,(t,n)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:n},[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t.row,(t,n)=>{var o;return Object(c["openBlock"])(),Object(c["createElementBlock"])("td",{key:n,onClick:()=>e.onClickTablecell(t),class:Object(c["normalizeClass"])({"clickable-cell":null===t||void 0===t||null===(o=t.column)||void 0===o?void 0:o.tdClick})},[Object(c["createElementVNode"])("span",h,Object(c["toDisplayString"])(t.value),1)],10,l)}),128))]))),128))])])]),_:1}),Object(c["createVNode"])(M,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(x,{color:"dark"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{onClick:t[1]||(t[1]=t=>e.toCSV()),size:"large"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(" CSV ")]),_:1}),Object(c["createVNode"])(O,{onClick:t[2]||(t[2]=t=>e.toPDF()),size:"large"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(" PDF ")]),_:1}),e.totalPages>1?(Object(c["openBlock"])(),Object(c["createBlock"])(O,{key:0,onClick:e.first,disabled:0===e.currentPage||e.totalPages<=2,size:"large",slot:"end"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(" First ")]),_:1},8,["onClick","disabled"])):Object(c["createCommentVNode"])("",!0),e.totalPages>1?(Object(c["openBlock"])(),Object(c["createBlock"])(O,{key:1,onClick:e.prev,disabled:!e.canPrev,color:"light",size:"large",slot:"end"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(" Prev ")]),_:1},8,["onClick","disabled"])):Object(c["createCommentVNode"])("",!0),e.totalPages>1?(Object(c["openBlock"])(),Object(c["createBlock"])(O,{key:2,onClick:e.selectPage,size:"large",slot:"end",color:"light"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.currentPage)+" / "+Object(c["toDisplayString"])(e.totalPages-1),1)]),_:1},8,["onClick"])):Object(c["createCommentVNode"])("",!0),e.totalPages>1?(Object(c["openBlock"])(),Object(c["createBlock"])(O,{key:3,onClick:e.next,disabled:!e.canNext,color:"light",size:"large",slot:"end"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(" Next ")]),_:1},8,["onClick","disabled"])):Object(c["createCommentVNode"])("",!0),e.totalPages>1?(Object(c["openBlock"])(),Object(c["createBlock"])(O,{key:4,onClick:e.last,disabled:e.currentPage+1>=e.totalPages||e.totalPages<=2,size:"large",slot:"end"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(" Last ")]),_:1},8,["onClick","disabled"])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(O,{onClick:e.finish,color:"success",size:"large",slot:"end"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(" Finish ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}n("14d9"),n("13d5");var d=n("d867"),g=n("ff79"),p=n("c731"),f=n("2ef0"),b=n("25da"),m=n("d95e");function O(e){return Array.isArray?Array.isArray(e):"[object Array]"===I(e)}const j=1/0;function y(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-j?"-0":t}function k(e){return null==e?"":y(e)}function x(e){return"string"===typeof e}function v(e){return"number"===typeof e}function C(e){return!0===e||!1===e||M(e)&&"[object Boolean]"==I(e)}function w(e){return"object"===typeof e}function M(e){return w(e)&&null!==e}function _(e){return void 0!==e&&null!==e}function N(e){return!e.trim().length}function I(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const S="Incorrect 'index' type",L=e=>"Invalid value for key "+e,V=e=>`Pattern length exceeds max of ${e}.`,E=e=>`Missing ${e} property in key`,P=e=>`Property 'weight' in key '${e}' must be a positive integer`,A=Object.prototype.hasOwnProperty;class B{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(e=>{let n=F(e);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight}),this._keys.forEach(e=>{e.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function F(e){let t=null,n=null,c=null,o=1,r=null;if(x(e)||O(e))c=e,t=T(e),n=$(e);else{if(!A.call(e,"name"))throw new Error(E("name"));const i=e.name;if(c=i,A.call(e,"weight")&&(o=e.weight,o<=0))throw new Error(P(i));t=T(i),n=$(i),r=e.getFn}return{path:t,id:n,weight:o,src:c,getFn:r}}function T(e){return O(e)?e:e.split(".")}function $(e){return O(e)?e.join("."):e}function D(e,t){let n=[],c=!1;const o=(e,t,r)=>{if(_(e))if(t[r]){let i=t[r];const s=e[i];if(!_(s))return;if(r===t.length-1&&(x(s)||v(s)||C(s)))n.push(k(s));else if(O(s)){c=!0;for(let e=0,n=s.length;e<n;e+=1)o(s[e],t,r+1)}else t.length&&o(s,t,r+1)}else n.push(e)};return o(e,x(t)?t.split("."):t,0),c?n:n[0]}const R={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},z={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},W={location:0,threshold:.6,distance:100},U={useExtendedSearch:!1,getFn:D,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var H={...z,...R,...W,...U};const q=/[^ ]+/g;function J(e=1,t=3){const n=new Map,c=Math.pow(10,t);return{get(t){const o=t.match(q).length;if(n.has(o))return n.get(o);const r=1/Math.pow(o,.5*e),i=parseFloat(Math.round(r*c)/c);return n.set(o,i),i},clear(){n.clear()}}}class K{constructor({getFn:e=H.getFn,fieldNormWeight:t=H.fieldNormWeight}={}){this.norm=J(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((e,t)=>{this._keysMap[e.id]=t})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,x(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();x(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!_(e)||N(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach((t,c)=>{let o=t.getFn?t.getFn(e):this.getFn(e,t.path);if(_(o))if(O(o)){let e=[];const t=[{nestedArrIndex:-1,value:o}];while(t.length){const{nestedArrIndex:n,value:c}=t.pop();if(_(c))if(x(c)&&!N(c)){let t={v:c,i:n,n:this.norm.get(c)};e.push(t)}else O(c)&&c.forEach((e,n)=>{t.push({nestedArrIndex:n,value:e})})}n.$[c]=e}else if(x(o)&&!N(o)){let e={v:o,n:this.norm.get(o)};n.$[c]=e}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function Q(e,t,{getFn:n=H.getFn,fieldNormWeight:c=H.fieldNormWeight}={}){const o=new K({getFn:n,fieldNormWeight:c});return o.setKeys(e.map(F)),o.setSources(t),o.create(),o}function G(e,{getFn:t=H.getFn,fieldNormWeight:n=H.fieldNormWeight}={}){const{keys:c,records:o}=e,r=new K({getFn:t,fieldNormWeight:n});return r.setKeys(c),r.setIndexRecords(o),r}function Y(e,{errors:t=0,currentLocation:n=0,expectedLocation:c=0,distance:o=H.distance,ignoreLocation:r=H.ignoreLocation}={}){const i=t/e.length;if(r)return i;const s=Math.abs(c-n);return o?i+s/o:s?1:i}function X(e=[],t=H.minMatchCharLength){let n=[],c=-1,o=-1,r=0;for(let i=e.length;r<i;r+=1){let i=e[r];i&&-1===c?c=r:i||-1===c||(o=r-1,o-c+1>=t&&n.push([c,o]),c=-1)}return e[r-1]&&r-c>=t&&n.push([c,r-1]),n}const Z=32;function ee(e,t,n,{location:c=H.location,distance:o=H.distance,threshold:r=H.threshold,findAllMatches:i=H.findAllMatches,minMatchCharLength:s=H.minMatchCharLength,includeMatches:a=H.includeMatches,ignoreLocation:l=H.ignoreLocation}={}){if(t.length>Z)throw new Error(V(Z));const h=t.length,u=e.length,d=Math.max(0,Math.min(c,u));let g=r,p=d;const f=s>1||a,b=f?Array(u):[];let m;while((m=e.indexOf(t,p))>-1){let e=Y(t,{currentLocation:m,expectedLocation:d,distance:o,ignoreLocation:l});if(g=Math.min(e,g),p=m+h,f){let e=0;while(e<h)b[m+e]=1,e+=1}}p=-1;let O=[],j=1,y=h+u;const k=1<<h-1;for(let v=0;v<h;v+=1){let c=0,r=y;while(c<r){const e=Y(t,{errors:v,currentLocation:d+r,expectedLocation:d,distance:o,ignoreLocation:l});e<=g?c=r:y=r,r=Math.floor((y-c)/2+c)}y=r;let s=Math.max(1,d-r+1),a=i?u:Math.min(d+r,u)+h,m=Array(a+2);m[a+1]=(1<<v)-1;for(let i=a;i>=s;i-=1){let c=i-1,r=n[e.charAt(c)];if(f&&(b[c]=+!!r),m[i]=(m[i+1]<<1|1)&r,v&&(m[i]|=(O[i+1]|O[i])<<1|1|O[i+1]),m[i]&k&&(j=Y(t,{errors:v,currentLocation:c,expectedLocation:d,distance:o,ignoreLocation:l}),j<=g)){if(g=j,p=c,p<=d)break;s=Math.max(1,2*d-p)}}const x=Y(t,{errors:v+1,currentLocation:d,expectedLocation:d,distance:o,ignoreLocation:l});if(x>g)break;O=m}const x={isMatch:p>=0,score:Math.max(.001,j)};if(f){const e=X(b,s);e.length?a&&(x.indices=e):x.isMatch=!1}return x}function te(e){let t={};for(let n=0,c=e.length;n<c;n+=1){const o=e.charAt(n);t[o]=(t[o]||0)|1<<c-n-1}return t}class ne{constructor(e,{location:t=H.location,threshold:n=H.threshold,distance:c=H.distance,includeMatches:o=H.includeMatches,findAllMatches:r=H.findAllMatches,minMatchCharLength:i=H.minMatchCharLength,isCaseSensitive:s=H.isCaseSensitive,ignoreLocation:a=H.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:c,includeMatches:o,findAllMatches:r,minMatchCharLength:i,isCaseSensitive:s,ignoreLocation:a},this.pattern=s?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(e,t)=>{this.chunks.push({pattern:e,alphabet:te(e),startIndex:t})},h=this.pattern.length;if(h>Z){let e=0;const t=h%Z,n=h-t;while(e<n)l(this.pattern.substr(e,Z),e),e+=Z;if(t){const e=h-Z;l(this.pattern.substr(e),e)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}const{location:c,distance:o,threshold:r,findAllMatches:i,minMatchCharLength:s,ignoreLocation:a}=this.options;let l=[],h=0,u=!1;this.chunks.forEach(({pattern:t,alphabet:d,startIndex:g})=>{const{isMatch:p,score:f,indices:b}=ee(e,t,d,{location:c+g,distance:o,threshold:r,findAllMatches:i,minMatchCharLength:s,includeMatches:n,ignoreLocation:a});p&&(u=!0),h+=f,p&&b&&(l=[...l,...b])});let d={isMatch:u,score:u?h/this.chunks.length:1};return u&&n&&(d.indices=l),d}}class ce{constructor(e){this.pattern=e}static isMultiMatch(e){return oe(e,this.multiRegex)}static isSingleMatch(e){return oe(e,this.singleRegex)}search(){}}function oe(e,t){const n=e.match(t);return n?n[1]:null}class re extends ce{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class ie extends ce{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=e.indexOf(this.pattern),n=-1===t;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class se extends ce{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class ae extends ce{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class le extends ce{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class he extends ce{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class ue extends ce{constructor(e,{location:t=H.location,threshold:n=H.threshold,distance:c=H.distance,includeMatches:o=H.includeMatches,findAllMatches:r=H.findAllMatches,minMatchCharLength:i=H.minMatchCharLength,isCaseSensitive:s=H.isCaseSensitive,ignoreLocation:a=H.ignoreLocation}={}){super(e),this._bitapSearch=new ne(e,{location:t,threshold:n,distance:c,includeMatches:o,findAllMatches:r,minMatchCharLength:i,isCaseSensitive:s,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class de extends ce{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,n=0;const c=[],o=this.pattern.length;while((t=e.indexOf(this.pattern,n))>-1)n=t+o,c.push([t,n-1]);const r=!!c.length;return{isMatch:r,score:r?0:1,indices:c}}}const ge=[re,de,se,ae,he,le,ie,ue],pe=ge.length,fe=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,be="|";function me(e,t={}){return e.split(be).map(e=>{let n=e.trim().split(fe).filter(e=>e&&!!e.trim()),c=[];for(let o=0,r=n.length;o<r;o+=1){const e=n[o];let r=!1,i=-1;while(!r&&++i<pe){const n=ge[i];let o=n.isMultiMatch(e);o&&(c.push(new n(o,t)),r=!0)}if(!r){i=-1;while(++i<pe){const n=ge[i];let o=n.isSingleMatch(e);if(o){c.push(new n(o,t));break}}}}return c})}const Oe=new Set([ue.type,de.type]);class je{constructor(e,{isCaseSensitive:t=H.isCaseSensitive,includeMatches:n=H.includeMatches,minMatchCharLength:c=H.minMatchCharLength,ignoreLocation:o=H.ignoreLocation,findAllMatches:r=H.findAllMatches,location:i=H.location,threshold:s=H.threshold,distance:a=H.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:c,findAllMatches:r,ignoreLocation:o,location:i,threshold:s,distance:a},this.pattern=t?e:e.toLowerCase(),this.query=me(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:c}=this.options;e=c?e:e.toLowerCase();let o=0,r=[],i=0;for(let s=0,a=t.length;s<a;s+=1){const c=t[s];r.length=0,o=0;for(let t=0,s=c.length;t<s;t+=1){const s=c[t],{isMatch:a,indices:l,score:h}=s.search(e);if(!a){i=0,o=0,r.length=0;break}if(o+=1,i+=h,n){const e=s.constructor.type;Oe.has(e)?r=[...r,...l]:r.push(l)}}if(o){let e={isMatch:!0,score:i/o};return n&&(e.indices=r),e}}return{isMatch:!1,score:1}}}const ye=[];function ke(...e){ye.push(...e)}function xe(e,t){for(let n=0,c=ye.length;n<c;n+=1){let c=ye[n];if(c.condition(e,t))return new c(e,t)}return new ne(e,t)}const ve={AND:"$and",OR:"$or"},Ce={PATH:"$path",PATTERN:"$val"},we=e=>!(!e[ve.AND]&&!e[ve.OR]),Me=e=>!!e[Ce.PATH],_e=e=>!O(e)&&w(e)&&!we(e),Ne=e=>({[ve.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Ie(e,t,{auto:n=!0}={}){const c=e=>{let o=Object.keys(e);const r=Me(e);if(!r&&o.length>1&&!we(e))return c(Ne(e));if(_e(e)){const c=r?e[Ce.PATH]:o[0],i=r?e[Ce.PATTERN]:e[c];if(!x(i))throw new Error(L(c));const s={keyId:$(c),pattern:i};return n&&(s.searcher=xe(i,t)),s}let i={children:[],operator:o[0]};return o.forEach(t=>{const n=e[t];O(n)&&n.forEach(e=>{i.children.push(c(e))})}),i};return we(e)||(e=Ne(e)),c(e)}function Se(e,{ignoreFieldNorm:t=H.ignoreFieldNorm}){e.forEach(e=>{let n=1;e.matches.forEach(({key:e,norm:c,score:o})=>{const r=e?e.weight:null;n*=Math.pow(0===o&&r?Number.EPSILON:o,(r||1)*(t?1:c))}),e.score=n})}function Le(e,t){const n=e.matches;t.matches=[],_(n)&&n.forEach(e=>{if(!_(e.indices)||!e.indices.length)return;const{indices:n,value:c}=e;let o={indices:n,value:c};e.key&&(o.key=e.key.src),e.idx>-1&&(o.refIndex=e.idx),t.matches.push(o)})}function Ve(e,t){t.score=e.score}function Ee(e,t,{includeMatches:n=H.includeMatches,includeScore:c=H.includeScore}={}){const o=[];return n&&o.push(Le),c&&o.push(Ve),e.map(e=>{const{idx:n}=e,c={item:t[n],refIndex:n};return o.length&&o.forEach(t=>{t(e,c)}),c})}class Pe{constructor(e,t={},n){this.options={...H,...t},this.options.useExtendedSearch,this._keyStore=new B(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof K))throw new Error(S);this._myIndex=t||Q(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){_(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let n=0,c=this._docs.length;n<c;n+=1){const o=this._docs[n];e(o,n)&&(this.removeAt(n),n-=1,c-=1,t.push(o))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:c,shouldSort:o,sortFn:r,ignoreFieldNorm:i}=this.options;let s=x(e)?x(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Se(s,{ignoreFieldNorm:i}),o&&s.sort(r),v(t)&&t>-1&&(s=s.slice(0,t)),Ee(s,this._docs,{includeMatches:n,includeScore:c})}_searchStringList(e){const t=xe(e,this.options),{records:n}=this._myIndex,c=[];return n.forEach(({v:e,i:n,n:o})=>{if(!_(e))return;const{isMatch:r,score:i,indices:s}=t.searchIn(e);r&&c.push({item:e,idx:n,matches:[{score:i,value:e,norm:o,indices:s}]})}),c}_searchLogical(e){const t=Ie(e,this.options),n=(e,t,c)=>{if(!e.children){const{keyId:n,searcher:o}=e,r=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(t,n),searcher:o});return r&&r.length?[{idx:c,item:t,matches:r}]:[]}const o=[];for(let r=0,i=e.children.length;r<i;r+=1){const i=e.children[r],s=n(i,t,c);if(s.length)o.push(...s);else if(e.operator===ve.AND)return[]}return o},c=this._myIndex.records,o={},r=[];return c.forEach(({$:e,i:c})=>{if(_(e)){let i=n(t,e,c);i.length&&(o[c]||(o[c]={idx:c,item:e,matches:[]},r.push(o[c])),i.forEach(({matches:e})=>{o[c].matches.push(...e)}))}}),r}_searchObjectList(e){const t=xe(e,this.options),{keys:n,records:c}=this._myIndex,o=[];return c.forEach(({$:e,i:c})=>{if(!_(e))return;let r=[];n.forEach((n,c)=>{r.push(...this._findMatches({key:n,value:e[c],searcher:t}))}),r.length&&o.push({idx:c,item:e,matches:r})}),o}_findMatches({key:e,value:t,searcher:n}){if(!_(t))return[];let c=[];if(O(t))t.forEach(({v:t,i:o,n:r})=>{if(!_(t))return;const{isMatch:i,score:s,indices:a}=n.searchIn(t);i&&c.push({score:s,key:e,value:t,idx:o,norm:r,indices:a})});else{const{v:o,n:r}=t,{isMatch:i,score:s,indices:a}=n.searchIn(o);i&&c.push({score:s,key:e,value:o,norm:r,indices:a})}return c}}Pe.version="6.6.2",Pe.createIndex=Q,Pe.parseIndex=G,Pe.config=H,Pe.parseQuery=Ie,ke(je);var Ae=n("ba82"),Be=n("1c74"),Fe=n("6605"),Te=n("5a0c"),$e=n.n(Te),De=n("1718"),Re=Object(c["defineComponent"])({components:{IonImg:d["s"],IonThumbnail:d["R"],IonToolbar:d["T"],IonItem:d["w"],IonIcon:d["r"],IonLabel:d["x"],IonTitle:d["S"],IonHeader:d["q"],IonButton:d["d"],IonFooter:d["o"],IonContent:d["n"],IonButtons:d["e"],IonChip:d["l"]},props:{icon:{type:String},title:{type:String,default:"Report"},subtitle:{type:String},columns:{type:Object,required:!0},columnData:{type:Array,default:()=>[]},enablePagination:{type:Boolean,default:!0},rowsPerPage:{type:Number,default:10},onFinish:{type:Function},onRefresh:{type:Function},onConfigure:{type:Function},csvQuarter:{type:String}},setup(e){const t=Object(Fe["i"])(),n=Object(c["ref"])([]),o=Object(c["ref"])(0),r=Object(c["ref"])(""),i=Object(c["ref"])(""),s=Object(c["ref"])("desc"),a=Object(c["computed"])(()=>e.icon?Object(De["a"])(e.icon):""),l=Object(c["computed"])(()=>{const t=Object(b["a"])(n.value)[s.value](e=>e.data[i.value]);if(r.value){const n=new Pe(t,{threshold:.3,keys:["searchIndex"],useExtendedSearch:!0});return n.search(r.value,{limit:e.rowsPerPage}).map(e=>e.item)}return t}),h=Object(c["computed"])(()=>Object(f["chunk"])(l.value,e.rowsPerPage).length),u=Object(c["computed"])(()=>o.value+2<=h.value),d=Object(c["computed"])(()=>o.value>0),O=Object(c["computed"])(()=>{const t=Object(f["chunk"])(l.value,e.rowsPerPage);return t[o.value]}),j=e=>{i.value=e,s.value="asc"===s.value?"desc":"asc"},y=()=>Object(p["c"])(e=>{const t=parseInt(e);parseInt(e)<=h.value&&(o.value=t)},{title:"Select page"}),k=()=>{Object(p["b"])({id:"search",helpText:"Find",type:m["b"].TT_TEXT},e=>{setTimeout(()=>{r.value=e?e.value:"",o.value=0},3)})},x=()=>o.value=0,v=()=>o.value=h.value-1||0,C=()=>o.value+=1,w=()=>o.value-=1,M=()=>{"function"===typeof e.onFinish?e.onFinish():t.push("/")},_=e=>{try{var t,n;if("function"===typeof(null===(t=e.column)||void 0===t?void 0:t.tdClick))null===(n=e.column)||void 0===n||n.tdClick(e);return}catch(c){console.error(c)}},N=()=>e.columns.reduce((e,t)=>e.concat(t),[]).filter(e=>e.value||e.ref),I=t=>{const c=N().filter(e=>[!e.canExport||(null===e||void 0===e?void 0:e.canExport[t]),"boolean"!==typeof e.exportable||e.exportable].every(Boolean)),o=c.map(e=>e.exportedValue&&e.exportedValue.column?e.exportedValue.column(e):e.secondaryLabel||e.label),r=c.map(e=>e.ref),i=n.value.reduce((e,t)=>{const n=t.row.filter(({column:e})=>r.includes(e.ref)).map(e=>e.column.exportedValue&&e.column.exportedValue.dataValue?e.column.exportedValue.dataValue(e):e.value);return[...e,n]},[]),s=`${Be["e"].getLocationName()||"Unknown site"}-${e.title}-${e.subtitle}-${Be["e"].getSessionDate()}`;return{headers:o,rows:i,filename:s}},S=()=>{const{headers:e,rows:t,filename:n}=I("pdf");Object(Ae["d"])([e],t,n,!0)},L=()=>{const{headers:t,rows:n,filename:c}=I("csv");Object(Ae["b"])([t],[...n,["Date Created: "+$e()().format("DD/MMM/YYYY HH:MM:ss")],["Quarter: "+(e.csvQuarter||e.subtitle)],["HIS-Core Version: "+Be["e"].getCoreVersion()],["API Version: "+Be["e"].getApiVersion()],["Site UUID: "+Be["e"].getSiteUUID()],["Generated by: "+Be["e"].getUserName()]],c)},V=e=>{e.forEach(e=>{const t=N().map(t=>{let n="";try{n=Object(f["isEmpty"])(e)?"...":"function"===typeof t.value?t.value(e):e[t.ref]||""}catch(c){n="_ERROR_",console.error(c)}return{column:t,data:e,value:n,[t.ref||"nada"]:n}});n.value.push({row:t,data:e,searchIndex:[...t,t.map(e=>e.value).join(" ")]})})};return Object(c["watch"])(()=>e.columnData,t=>{if(n.value=[],!Array.isArray(t)||!t.length)return o.value=0,r.value="",i.value="",void V(Array.from({length:e.rowsPerPage}).map(()=>({})));V(t)},{immediate:!0,deep:!0}),{first:x,last:v,next:C,prev:w,selectPage:y,sortColumn:j,searchTable:k,onClickTablecell:_,toPDF:S,toCSV:L,finish:M,logo:a,sync:g["Q"],search:g["L"],close:g["s"],arrowUp:g["h"],arrowDown:g["g"],document:g["v"],page:O,canNext:u,searchTerm:r,totalPages:h,sortOrder:s,canPrev:d,currentPage:o,columnSorted:i}}}),ze=(n("04f1"),n("d959")),We=n.n(ze);const Ue=We()(Re,[["render",u],["__scopeId","data-v-ae31c05a"]]);t["a"]=Ue}}]);
//# sourceMappingURL=chunk-0bf38393.95ac9840.js.map