System.register(["./index-legacy-DDADMnop.js","./Export-legacy-VbltoLZZ.js"],(function(e,t){"use strict";var a,l,o,r,n,c,s,i,u,d,f,p,h,y,g,m,b,v,k,C,P,w,x,S,_,I,D,T,V,F,z,R,U,$,O,E,L,H,K,M,Q,Y,B,N,j,A,W,q,G,Z,X,J;return{setters:[e=>{a=e.d,l=e.Q,o=e.U,r=e.aZ,n=e.a0,c=e.R,s=e.O,i=e.a3,u=e.a4,d=e.S,f=e.cL,p=e.aY,h=e.aQ,y=e.b$,g=e.c0,m=e.ap,b=e.r,v=e.ar,k=e.aI,C=e.cQ,P=e.cR,w=e.cS,x=e.cT,S=e.cU,_=e.cV,I=e.cW,D=e.cX,T=e.aO,V=e.al,F=e.bw,z=e.aT,R=e.cY,U=e.cZ,$=e.aL,O=e.c1,E=e.c_,L=e.a8,H=e.ad,K=e.u,M=e.B,Q=e.x,Y=e.w,B=e.v,N=e.G,j=e.z,A=e.Y,W=e.a1,q=e.E,G=e.C,Z=e.b0},e=>{X=e.a,J=e.t}],execute:function(){var t=document.createElement("style");t.textContent="th[data-v-b74096c9],td[data-v-b74096c9]{border-collapse:collapse;min-width:160px;border:1px solid rgb(158,158,158)}td[data-v-b74096c9]{font-weight:500;font-size:.8em;padding:.4em}.stick-report-header[data-v-b74096c9]{position:sticky;top:0;z-index:1000}tr[data-v-b74096c9]:nth-child(2n){background-color:#f0f0f0}.clickable-cell[data-v-b74096c9]{color:#0645ad}.his-floating-keyboard[data-v-b74096c9]{bottom:70px!important}\n",document.head.appendChild(t);const ee=a({components:{IonToolbar:l,IonItem:o,IonIcon:r,IonLabel:n,IonTitle:c,IonHeader:s,IonButton:i,IonFooter:u,IonContent:d,IonButtons:f,IonChip:p,HisKeyboard:h,IonThumbnail:y,IonImg:g},props:{title:{type:String,default:"Report"},headerBadge:{type:Object},iconUrl:{type:String},subtitle:{type:String},columns:{type:Object,required:!0},columnData:{type:Array,default:()=>[]},enablePagination:{type:Boolean,default:!0},rowsPerPage:{type:Number,default:10},onFinish:{type:Function},onRefresh:{type:Function},onConfigure:{type:Function},csvQuarter:{type:String},reportPrefix:{type:String,default:""},defaultSortedColumn:{type:String},defaultSortOrder:{type:Object,default:"desc"}},setup(e){const t=m(),a=b([]),l=b(0),o=b(""),r=b(""),n=b("desc"),c=b(!1),s=v((()=>{let t=a.value;return n.value&&r.value&&(t=R(a.value)[n.value]((e=>e.sortData[r.value]))),o.value?new U(t,{threshold:.3,keys:["searchIndex"],useExtendedSearch:!0}).search(o.value,{limit:e.rowsPerPage}).map((e=>e.item)):t})),i=v((()=>$.chunk(s.value,e.rowsPerPage).length)),u=v((()=>l.value+2<=i.value)),d=v((()=>l.value>0)),f=v((()=>$.chunk(s.value,e.rowsPerPage)[l.value])),p=()=>e.columns.reduce(((e,t)=>e.concat(t)),[]).filter((e=>e.value||e.ref)),h=(t,l=!1)=>{const o=p().filter((e=>["pdf"!==t||"boolean"!=typeof e.encrypted||e?.encrypted&&!l,"csv"!==t||!e?.encrypted,!e.canExport||e?.canExport[t],"boolean"!=typeof e.exportable||e.exportable].every(Boolean))),r=o.map((e=>e.exportedValue&&e.exportedValue.column?e.exportedValue.column(e):e.secondaryLabel||e.label)),n=o.map((e=>e.ref));return{headers:r,rows:a.value.reduce(((e,t)=>[...e,t.row.filter((({column:e})=>n.includes(e.ref))).map((e=>e.column.exportedValue&&e.column.exportedValue.dataValue?e.column.exportedValue.dataValue(e):e.value))]),[]),filename:`${e.reportPrefix} ${V.getLocationName()??""} ${O(e.title).replace(e.reportPrefix,"")} ${E(e.csvQuarter??e.subtitle??"")}`}},y=e=>{e.forEach((e=>{const t={...e},l=p().map((a=>{let l="";const o=e[a.ref];try{l=$.isEmpty(e)?"...":"function"==typeof a.toValue?`${a.toValue(o)}`:"function"==typeof a.value?a.value(e):e[a.ref]||""}catch(r){l=a?.defaultValue||"_ERROR_",console.error(r)}return t[a.ref]=l,"function"==typeof a.sortValue&&(t[a.ref]=a.sortValue(o)),{column:a,refData:o,value:l,data:e}}));a.value.push({row:l,data:e,sortData:t,searchIndex:[...l,l.map((e=>e.value)).join(" ")]})}))};return k((()=>e.columnData),(t=>{if(a.value=[],!Array.isArray(t)||!t.length)return l.value=0,o.value="",r.value=e.defaultSortedColumn??"",n.value=e.defaultSortOrder,void y(Array.from({length:e.rowsPerPage}).map((()=>({}))));y(t)}),{immediate:!0,deep:!0}),{first:()=>l.value=0,last:()=>l.value=i.value-1||0,next:()=>l.value+=1,prev:()=>l.value-=1,selectPage:()=>D((e=>{const t=parseInt(e);parseInt(e)<=i.value&&(l.value=t)}),{title:"Select page"}),sortColumn:e=>{r.value=e,n.value="asc"===n.value?"desc":"asc"},onClickTablecell:e=>{try{return void("function"==typeof e.column?.tdClick&&e.column?.tdClick(e))}catch(t){console.error(t)}},toPDF:async()=>{let e;if(p().some((e=>e?.encrypted))&&"Secure PDF"===await T("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color")){const t=V.getUserName();e={encryption:{userPassword:t,ownerPassword:t,userPermissions:["print"]}}}const{headers:t,rows:a,filename:l}=h("pdf",!e);X([t],a,l,!0,e)},toCSV:()=>{const{headers:t,rows:a,filename:l}=h("csv");J([t],[...a,[`Date Created: ${F().format("DD/MMM/YYYY HH:MM:ss")}`],[`Quarter: ${e.csvQuarter||e.subtitle}`],[`HIS-Core Version: ${V.getCoreVersion()}`],[`API Version: ${V.getApiVersion()}`],[`Site UUID: ${V.getSiteUUID()}`],[`Generated by: ${V.getUserName()}`]],l)},finish:()=>{"function"==typeof e.onFinish?e.onFinish():t.push("/")},filterTable:e=>{o.value=z(e,o.value),l.value=0},sync:C,search:P,close:w,arrowUp:x,arrowDown:S,funnelOutline:_,page:f,canNext:u,searchTerm:o,totalPages:i,sortOrder:n,canPrev:d,currentPage:l,columnSorted:r,QWERTY:I,showSearchKeyboard:c}}}),te={key:0},ae={class:"his-sm-text"},le={style:{width:"100%"}},oe={class:"stick-report-header"},re=["colspan","rowspan","onClick"],ne=["onClick"],ce=["innerHTML"];e("v",L(ee,[["render",function(e,t,a,l,o,r){const n=H("ion-img"),c=H("ion-thumbnail"),s=H("ion-title"),i=H("ion-icon"),u=H("ion-button"),d=H("ion-label"),f=H("ion-chip"),p=H("ion-buttons"),h=H("ion-toolbar"),y=H("ion-header"),g=H("ion-item"),m=H("ion-content"),b=H("his-keyboard"),v=H("ion-footer");return K(),M(q,null,[Q(y,null,{default:Y((()=>[Q(h,null,{default:Y((()=>[e.iconUrl?(K(),B(c,{key:0,slot:"start"},{default:Y((()=>[Q(n,{src:e.iconUrl},null,8,["src"])])),_:1})):N("",!0),Q(s,{slot:"start",class:"his-md-text"},{default:Y((()=>[j(A(e.title)+" ",1),e.subtitle?(K(),M("br",te)):N("",!0),W("span",ae,A(e.subtitle),1)])),_:1}),Q(p,{slot:"end"},{default:Y((()=>["function"==typeof e.onConfigure?(K(),B(u,{key:0,onClick:t[0]||(t[0]=()=>e.onConfigure?e.onConfigure():null)},{default:Y((()=>[Q(i,{size:"large",icon:e.funnelOutline},null,8,["icon"])])),_:1})):N("",!0),e.searchTerm?(K(),B(f,{key:1,onClick:t[1]||(t[1]=()=>{e.searchTerm="",e.showSearchKeyboard=!1}),class:"his-md-text",color:"primary"},{default:Y((()=>[Q(d,null,{default:Y((()=>[j(A(e.searchTerm?`Search: ${e.searchTerm}`:""),1)])),_:1}),Q(i,{icon:e.close},null,8,["icon"])])),_:1})):N("",!0),Q(u,{color:e.showSearchKeyboard?"primary":"dark",onClick:t[2]||(t[2]=()=>e.showSearchKeyboard=!e.showSearchKeyboard),size:"large"},{default:Y((()=>[Q(i,{size:"large",icon:e.search},null,8,["icon"])])),_:1},8,["color"]),"function"==typeof e.onRefresh?(K(),B(u,{key:2,onClick:t[3]||(t[3]=()=>e.onRefresh?e.onRefresh():null),color:"success",size:"large"},{default:Y((()=>[Q(i,{size:"large",icon:e.sync},null,8,["icon"])])),_:1})):N("",!0)])),_:1})])),_:1}),(e.headerBadge||[]).length?(K(),B(h,{key:0,color:"light"},{default:Y((()=>[(K(!0),M(q,null,G(e.headerBadge,((t,a)=>(K(),B(f,{onClick:e=>"function"==typeof t.action?t.action():null,key:a,color:t?.color||"dark"},{default:Y((()=>[Q(i,{icon:t?.icon||e.search},null,8,["icon"]),Q(d,{innerHTML:t.text},null,8,["innerHTML"])])),_:2},1032,["onClick","color"])))),128))])),_:1})):N("",!0)])),_:1}),Q(m,{"scroll-y":"","scroll-x":""},{default:Y((()=>[W("table",le,[W("thead",oe,[(K(!0),M(q,null,G(e.columns,((t,a)=>(K(),M("tr",{key:a},[(K(!0),M(q,null,G(t,((t,a)=>(K(),M("th",{key:a,colspan:t?.span?.thColspan||1,rowspan:t?.span?.thRowspan||1,onClick:a=>e.sortColumn(t.ref)},[Q(g,{lines:"none"},{default:Y((()=>[e.columnSorted&&e.columnSorted===t.ref?(K(),B(i,{key:0,icon:"asc"===e.sortOrder?e.arrowUp:e.arrowDown},null,8,["icon"])):N("",!0),Q(d,null,{default:Y((()=>[W("b",null,A(t.label),1)])),_:2},1024)])),_:2},1024)],8,re)))),128))])))),128))]),W("tbody",null,[(K(!0),M(q,null,G(e.page,((t,a)=>(K(),M("tr",{key:a},[(K(!0),M(q,null,G(t.row,((t,a)=>(K(),M("td",{key:a,onClick:()=>e.onClickTablecell(t),class:Z({"clickable-cell":t?.column?.tdClick})},[W("span",{innerHTML:t.value,class:"his-sm-text"},null,8,ce)],10,ne)))),128))])))),128))])])])),_:1}),Q(v,null,{default:Y((()=>[e.showSearchKeyboard?(K(),B(b,{key:0,kbConfig:e.QWERTY,onKeyPress:e.filterTable},null,8,["kbConfig","onKeyPress"])):N("",!0),Q(h,{color:"dark"},{default:Y((()=>[Q(u,{onClick:t[4]||(t[4]=t=>e.toCSV()),size:"large"},{default:Y((()=>[j(" CSV ")])),_:1}),Q(u,{onClick:t[5]||(t[5]=t=>e.toPDF()),size:"large"},{default:Y((()=>[j(" PDF ")])),_:1}),e.totalPages>1?(K(),B(u,{key:0,onClick:e.first,disabled:0===e.currentPage||e.totalPages<=2,size:"large",slot:"end"},{default:Y((()=>[j(" First ")])),_:1},8,["onClick","disabled"])):N("",!0),e.totalPages>1?(K(),B(u,{key:1,onClick:e.prev,disabled:!e.canPrev,color:"light",size:"large",slot:"end"},{default:Y((()=>[j(" Prev ")])),_:1},8,["onClick","disabled"])):N("",!0),e.totalPages>1?(K(),B(u,{key:2,onClick:e.selectPage,size:"large",slot:"end",color:"light"},{default:Y((()=>[j(A(e.currentPage)+" / "+A(e.totalPages-1),1)])),_:1},8,["onClick"])):N("",!0),e.totalPages>1?(K(),B(u,{key:3,onClick:e.next,disabled:!e.canNext,color:"light",size:"large",slot:"end"},{default:Y((()=>[j(" Next ")])),_:1},8,["onClick","disabled"])):N("",!0),e.totalPages>1?(K(),B(u,{key:4,onClick:e.last,disabled:e.currentPage+1>=e.totalPages||e.totalPages<=2,size:"large",slot:"end"},{default:Y((()=>[j(" Last ")])),_:1},8,["onClick","disabled"])):N("",!0),Q(u,{onClick:e.finish,color:"success",size:"large",slot:"end"},{default:Y((()=>[j(" Finish ")])),_:1},8,["onClick"])])),_:1})])),_:1})],64)}],["__scopeId","data-v-b74096c9"]]))}}}));