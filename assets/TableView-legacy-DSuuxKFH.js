System.register(["./index-legacy-CNrLGT3P.js","./fuse-legacy-CQoBB3MK.js","./HisKeyboard-legacy-DlfcKdJX.js"],(function(e,l){"use strict";var t,o,a,n,r,c,s,i,u,d,f,p,h,g,y,m,b,v,k,C,P,x,w,_,I,S,z,V,T,D,F,K,$,R,E,U,B,H,A,M,O,j,L,N,Q,Y,W,J,q,G,X;return{setters:[e=>{t=e.d,o=e.i,a=e.h,n=e.aw,r=e.D,c=e.k,s=e.j,i=e.f,u=e.m,d=e.l,f=e.ci,p=e.av,h=e.bJ,g=e.bK,y=e.J,m=e.K,b=e.M,v=e.cv,k=e.ah,C=e.ae,P=e.aE,x=e.cw,w=e.cx,_=e.cy,I=e.cz,S=e.cA,z=e.cB,V=e.bg,T=e.bO,D=e.bN,F=e.aW,K=e.S,$=e.ap,R=e.bL,E=e.cC,U=e._,B=e.r,H=e.o,A=e.x,M=e.b,O=e.w,j=e.c,L=e.z,N=e.u,Q=e.v,Y=e.A,W=e.B,J=e.y,q=e.az},e=>{G=e.F},e=>{X=e.H}],execute:function(){var l=document.createElement("style");l.textContent="th[data-v-540e223c],td[data-v-540e223c]{width:4%;border-collapse:collapse;text-align:center}td[data-v-540e223c]{border-bottom:1px solid rgb(165,165,165);padding:.6em;font-weight:500;font-size:.8em}.stick-report-header[data-v-540e223c]{background:#fff;border-bottom:2px solid #ccc;position:sticky;top:0;z-index:1000}tr[data-v-540e223c]:nth-child(2n){background-color:#f0f0f0}.clickable-cell[data-v-540e223c]{color:#0645ad;font-weight:600;font-size:1em}.his-floating-keyboard[data-v-540e223c]{bottom:70px!important}\n",document.head.appendChild(l);const Z=t({components:{IonToolbar:o,IonItem:a,IonIcon:n,IonLabel:r,IonTitle:c,IonHeader:s,IonButton:i,IonFooter:u,IonContent:d,IonButtons:f,IonChip:p,HisKeyboard:X,IonThumbnail:h,IonImg:g},props:{title:{type:String,default:"Report"},headerBadge:{type:Object},iconUrl:{type:String},subtitle:{type:String},columns:{type:Object,required:!0},columnData:{type:Array,default:()=>[]},enablePagination:{type:Boolean,default:!0},rowsPerPage:{type:Number,default:10},onFinish:{type:Function},onRefresh:{type:Function},onConfigure:{type:Function},csvQuarter:{type:String},reportPrefix:{type:String,default:""}},setup(e){const l=y(),t=m([]),o=m(0),a=m(""),n=m(""),r=m("desc"),c=m(!1),s=b((()=>{let l=t.value;return r.value&&n.value&&(l=v(t.value)[r.value]((e=>e.data[n.value]))),a.value?new G(l,{threshold:.3,keys:["searchIndex"],useExtendedSearch:!0}).search(a.value,{limit:e.rowsPerPage}).map((e=>e.item)):l})),i=b((()=>k.chunk(s.value,e.rowsPerPage).length)),u=b((()=>o.value+2<=i.value)),d=b((()=>o.value>0)),f=b((()=>k.chunk(s.value,e.rowsPerPage)[o.value])),p=()=>e.columns.reduce(((e,l)=>e.concat(l)),[]).filter((e=>e.value||e.ref)),h=l=>{const o=p().filter((e=>[!e.canExport||e?.canExport[l],"boolean"!=typeof e.exportable||e.exportable].every(Boolean))),a=o.map((e=>e.exportedValue&&e.exportedValue.column?e.exportedValue.column(e):e.secondaryLabel||e.label)),n=o.map((e=>e.ref));return{headers:a,rows:t.value.reduce(((e,l)=>[...e,l.row.filter((({column:e})=>n.includes(e.ref))).map((e=>e.column.exportedValue&&e.column.exportedValue.dataValue?e.column.exportedValue.dataValue(e):e.value))]),[]),filename:`${e.reportPrefix} ${K.getLocationName()??""} ${R(e.title).replace(e.reportPrefix,"")} ${E(e.csvQuarter??e.subtitle??"")}`}},g=e=>{e.forEach((e=>{const l=p().map((l=>{let t="";const o=e[l.ref];try{t=k.isEmpty(e)?"...":"function"==typeof l.toValue?`${l.toValue(o)}`:"function"==typeof l.value?l.value(e):e[l.ref]||""}catch(a){t=l?.defaultValue||"_ERROR_",console.error(a)}return{column:l,refData:o,value:t,data:e}}));t.value.push({row:l,data:e,searchIndex:[...l,l.map((e=>e.value)).join(" ")]})}))};return C((()=>e.columnData),(l=>{if(t.value=[],!Array.isArray(l)||!l.length)return o.value=0,a.value="",n.value="",void g(Array.from({length:e.rowsPerPage}).map((()=>({}))));g(l)}),{immediate:!0,deep:!0}),{first:()=>o.value=0,last:()=>o.value=i.value-1||0,next:()=>o.value+=1,prev:()=>o.value-=1,selectPage:()=>V((e=>{const l=parseInt(e);parseInt(e)<=i.value&&(o.value=l)}),{title:"Select page"}),sortColumn:e=>{n.value=e,r.value="asc"===r.value?"desc":"asc"},onClickTablecell:e=>{try{return void("function"==typeof e.column?.tdClick&&e.column?.tdClick(e))}catch(l){console.error(l)}},toPDF:()=>{const{headers:e,rows:l,filename:t}=h("pdf");T([e],l,t,!0)},toCSV:()=>{const{headers:l,rows:t,filename:o}=h("csv");D([l],[...t,[`Date Created: ${F().format("DD/MMM/YYYY HH:MM:ss")}`],[`Quarter: ${e.csvQuarter||e.subtitle}`],[`HIS-Core Version: ${K.getCoreVersion()}`],[`API Version: ${K.getApiVersion()}`],[`Site UUID: ${K.getSiteUUID()}`],[`Generated by: ${K.getUserName()}`]],o)},finish:()=>{"function"==typeof e.onFinish?e.onFinish():l.push("/")},filterTable:e=>{a.value=$(e,a.value),o.value=0},sync:P,search:x,close:w,arrowUp:_,arrowDown:I,funnelOutline:S,page:f,canNext:u,searchTerm:a,totalPages:i,sortOrder:r,canPrev:d,currentPage:o,columnSorted:n,QWERTY:z,showSearchKeyboard:c}}}),ee={key:0},le={class:"his-sm-text"},te={class:"art-report-theme"},oe={class:"stick-report-header"},ae=["colspan","rowspan","onClick"],ne=["onClick"],re={class:"his-sm-text"};e("v",U(Z,[["render",function(e,l,t,o,a,n){const r=B("ion-img"),c=B("ion-thumbnail"),s=B("ion-title"),i=B("ion-icon"),u=B("ion-button"),d=B("ion-label"),f=B("ion-chip"),p=B("ion-buttons"),h=B("ion-toolbar"),g=B("ion-header"),y=B("ion-item"),m=B("ion-content"),b=B("his-keyboard"),v=B("ion-footer");return H(),A(W,null,[M(g,null,{default:O((()=>[M(h,null,{default:O((()=>[e.iconUrl?(H(),j(c,{key:0,slot:"start"},{default:O((()=>[M(r,{src:e.iconUrl},null,8,["src"])])),_:1})):L("",!0),M(s,{slot:"start",class:"his-md-text"},{default:O((()=>[N(Q(e.title)+" ",1),e.subtitle?(H(),A("br",ee)):L("",!0),Y("span",le,Q(e.subtitle),1)])),_:1}),M(p,{slot:"end"},{default:O((()=>["function"==typeof e.onConfigure?(H(),j(u,{key:0,onClick:l[0]||(l[0]=()=>e.onConfigure?e.onConfigure():null)},{default:O((()=>[M(i,{size:"large",icon:e.funnelOutline},null,8,["icon"])])),_:1})):L("",!0),e.searchTerm?(H(),j(f,{key:1,onClick:l[1]||(l[1]=()=>{e.searchTerm="",e.showSearchKeyboard=!1}),class:"his-md-text",color:"primary"},{default:O((()=>[M(d,null,{default:O((()=>[N(Q(e.searchTerm?`Search: ${e.searchTerm}`:""),1)])),_:1}),M(i,{icon:e.close},null,8,["icon"])])),_:1})):L("",!0),M(u,{color:e.showSearchKeyboard?"primary":"dark",onClick:l[2]||(l[2]=()=>e.showSearchKeyboard=!e.showSearchKeyboard),size:"large"},{default:O((()=>[M(i,{size:"large",icon:e.search},null,8,["icon"])])),_:1},8,["color"]),"function"==typeof e.onRefresh?(H(),j(u,{key:2,onClick:l[3]||(l[3]=()=>e.onRefresh?e.onRefresh():null),color:"success",size:"large"},{default:O((()=>[M(i,{size:"large",icon:e.sync},null,8,["icon"])])),_:1})):L("",!0)])),_:1})])),_:1}),(e.headerBadge||[]).length?(H(),j(h,{key:0,color:"light"},{default:O((()=>[(H(!0),A(W,null,J(e.headerBadge,((l,t)=>(H(),j(f,{onClick:e=>"function"==typeof l.action?l.action():null,key:t,color:l?.color||"dark"},{default:O((()=>[M(i,{icon:l?.icon||e.search},null,8,["icon"]),M(d,{innerHTML:l?.text},null,8,["innerHTML"])])),_:2},1032,["onClick","color"])))),128))])),_:1})):L("",!0)])),_:1}),M(m,{"scroll-y":"","scroll-x":""},{default:O((()=>[Y("table",te,[Y("thead",oe,[(H(!0),A(W,null,J(e.columns,((l,t)=>(H(),A("tr",{key:t},[(H(!0),A(W,null,J(l,((l,t)=>(H(),A("th",{key:t,colspan:l?.span?.thColspan||1,rowspan:l?.span?.thRowspan||1,onClick:t=>e.sortColumn(l.ref)},[M(y,{lines:"none"},{default:O((()=>[e.columnSorted&&e.columnSorted===l.ref?(H(),j(i,{key:0,icon:"asc"===e.sortOrder?e.arrowUp:e.arrowDown},null,8,["icon"])):L("",!0),M(d,{class:"ion-text-center"},{default:O((()=>[Y("b",null,Q(l.label),1)])),_:2},1024)])),_:2},1024)],8,ae)))),128))])))),128))]),Y("tbody",null,[(H(!0),A(W,null,J(e.page,((l,t)=>(H(),A("tr",{key:t},[(H(!0),A(W,null,J(l.row,((l,t)=>(H(),A("td",{key:t,onClick:()=>e.onClickTablecell(l),class:q({"clickable-cell":l?.column?.tdClick})},[Y("span",re,Q(l.value),1)],10,ne)))),128))])))),128))])])])),_:1}),M(v,null,{default:O((()=>[e.showSearchKeyboard?(H(),j(b,{key:0,kbConfig:e.QWERTY,onKeyPress:e.filterTable},null,8,["kbConfig","onKeyPress"])):L("",!0),M(h,{color:"dark"},{default:O((()=>[M(u,{onClick:l[4]||(l[4]=l=>e.toCSV()),size:"large"},{default:O((()=>[N(" CSV ")])),_:1}),M(u,{onClick:l[5]||(l[5]=l=>e.toPDF()),size:"large"},{default:O((()=>[N(" PDF ")])),_:1}),e.totalPages>1?(H(),j(u,{key:0,onClick:e.first,disabled:0===e.currentPage||e.totalPages<=2,size:"large",slot:"end"},{default:O((()=>[N(" First ")])),_:1},8,["onClick","disabled"])):L("",!0),e.totalPages>1?(H(),j(u,{key:1,onClick:e.prev,disabled:!e.canPrev,color:"light",size:"large",slot:"end"},{default:O((()=>[N(" Prev ")])),_:1},8,["onClick","disabled"])):L("",!0),e.totalPages>1?(H(),j(u,{key:2,onClick:e.selectPage,size:"large",slot:"end",color:"light"},{default:O((()=>[N(Q(e.currentPage)+" / "+Q(e.totalPages-1),1)])),_:1},8,["onClick"])):L("",!0),e.totalPages>1?(H(),j(u,{key:3,onClick:e.next,disabled:!e.canNext,color:"light",size:"large",slot:"end"},{default:O((()=>[N(" Next ")])),_:1},8,["onClick","disabled"])):L("",!0),e.totalPages>1?(H(),j(u,{key:4,onClick:e.last,disabled:e.currentPage+1>=e.totalPages||e.totalPages<=2,size:"large",slot:"end"},{default:O((()=>[N(" Last ")])),_:1},8,["onClick","disabled"])):L("",!0),M(u,{onClick:e.finish,color:"success",size:"large",slot:"end"},{default:O((()=>[N(" Finish ")])),_:1},8,["onClick"])])),_:1})])),_:1})],64)}],["__scopeId","data-v-540e223c"]]))}}}));