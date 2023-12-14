(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19ca9e00"],{"10be":function(e,t,a){"use strict";var o=a("7a23");const n={class:"keypad"};function l(e,t,a,l,c,r){const i=Object(o["resolveComponent"])("ion-input"),u=Object(o["resolveComponent"])("ion-chip"),s=Object(o["resolveComponent"])("center"),d=Object(o["resolveComponent"])("base-keyboard"),b=Object(o["resolveComponent"])("ion-content");return Object(o["openBlock"])(),Object(o["createBlock"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",n,[Object(o["createVNode"])(i,{value:e.value,disabled:!0,class:"keypad-input"},null,8,["value"]),Object(o["createVNode"])(s,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title||"keypad"),1)]),_:1})]),_:1}),Object(o["createVNode"])(d,{btnSize:"96px",layout:e.keypad,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])])]),_:1})}var c=a("c924"),r=a("3800"),i=a("2345"),u=a("fe70"),s=Object(o["defineComponent"])({components:{BaseKeyboard:c["a"]},props:{title:{type:String},preset:{type:String},onKeyPress:{type:Function,required:!0},strictNumbers:{type:Boolean,default:!1}},data:()=>({value:"0",keypad:r["d"]}),watch:{preset:{handler(e){e&&(this.value=e.toString())},immediate:!0}},methods:{async keypress(e){if(e.match(/done/i))await u["b"].dismiss(this.value);else if(this.strictNumbers){if(e.includes(".")&&this.value.includes("."))return;e.includes(".")||"0"!==this.value||(this.value=""),this.value=Object(i["a"])(e,this.value),this.value||(this.value="0"),""+parseInt(this.value)===this.value?this.onKeyPress(parseInt(this.value)):this.onKeyPress(this.value)}else this.value=Object(i["a"])(e,this.value),this.onKeyPress(this.value)}}}),d=(a("27f1"),a("6b0d")),b=a.n(d);const p=b()(s,[["render",l],["__scopeId","data-v-7454247c"]]);t["a"]=p},"27f1":function(e,t,a){"use strict";a("a3fb")},"4b85":function(e,t,a){},"74f9":function(e,t,a){"use strict";a.r(t);var o=a("7a23"),n=a("d867"),l=a("99ae"),c=a("775a"),r=a("b5e4"),i=a("0011"),u=a("48da"),s=Object(o["defineComponent"])({__name:"ClinicOutcomes",setup(e){const t=Object(o["ref"])([]),a=Object(o["ref"])(""),s=Object(o["ref"])(!1),d=new u["a"],b=Object(o["computed"])(()=>[[{label:"Age Group",ref:"age_group"},{label:"Gender",ref:"gender"},{label:"Alive",ref:"alive"},{label:"Died",ref:"gender",value:e=>Object(i["b"])(e.gender)},{label:"Referred Within",ref:"birthdate",value:e=>Object(i["h"])(e.birthdate)},{label:"Transferred Out",ref:"order_date",value:e=>Object(i["h"])(e.order_date)}]]),p=async()=>{if(!d.startDate||!d.endDate)return Object(r["e"])("Start date and end date required!");s.value=!0,t.value=[];try{t.value=await d.getOutcomesReport()}catch(e){Object(r["c"])("Unable to generate report!")}s.value=!1},m=()=>Object(c["a"])({onFinish:(e,t,o)=>{a.value=`Period (${o})`,d.startDate=e,d.endDate=t,p()}});return Object(o["onMounted"])(()=>m()),(e,c)=>(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["unref"])(n["D"]),null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(n["z"]),{"is-open":s.value,message:"Please wait..."},null,8,["is-open"]),Object(o["createVNode"])(l["a"],{title:"Clinic Outcomes Report",subtitle:a.value,columns:b.value,columnData:t.value,rowsPerPage:15,onConfigure:m,onRefresh:()=>p(),"report-prefix":"Clinic"},null,8,["subtitle","columns","columnData","onRefresh"])]),_:1}))}});const d=s;t["default"]=d},"775a":function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var o,n,l=a("d95e"),c=a("1c74"),r=a("b446"),i=a("0011"),u=a("c731"),s=a("b5e4"),d=a("d867"),b=a("7a23"),p=a("2706"),m=a("3e53"),O=a("8e8b");(function(e){e["MULTI_FIELD_DATE"]="Multipage date fields",e["CALENDAR_FIELD"]="Calendar",e["SINGLE_DATE_INPUT_FIELD"]="Single page date"})(o||(o={})),function(e){e["PERIOD_INPUT_TYPE"]="hts_report_date_period_type"}(n||(n={}));const f=Object(b["reactive"])({datePeriodInputType:localStorage.getItem(n.PERIOD_INPUT_TYPE)||o.MULTI_FIELD_DATE});function v(e){Object(u["a"])([...Object(r["b"])({id:"start_date",helpText:"Start",required:!0,minDate:()=>(null===e||void 0===e?void 0:e.minDate)||"",maxDate:()=>(null===e||void 0===e?void 0:e.maxDate)||c["e"].getSessionDate(),condition:()=>f.datePeriodInputType===o.MULTI_FIELD_DATE,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(r["b"])({id:"end_date",helpText:"End",required:!0,minDate:(e,t)=>t.start_date,maxDate:()=>(null===e||void 0===e?void 0:e.maxDate)||c["e"].getSessionDate(),condition:()=>f.datePeriodInputType===o.MULTI_FIELD_DATE,estimation:{allowUnknown:!1},computeValue:e=>e}),{id:"alt_start_date",proxyID:"start_date",helpText:"Start Date",type:l["b"].TT_FULL_DATE,validation:t=>{if(!t)return["Date is required"];const a=e.maxDate||c["e"].getSessionDate();return e.minDate&&new Date(t.value)<new Date(e.minDate)?[`${Object(i["h"])(""+t.value)} is less than minimum date of ${Object(i["h"])(e.minDate)}`]:a&&new Date(t.value)>new Date(a)?[`${Object(i["h"])(""+t.value)} is greater than max date of ${Object(i["h"])(a)}`]:null},computedValue:e=>e.value,condition:()=>f.datePeriodInputType===o.SINGLE_DATE_INPUT_FIELD},{id:"alt_end_date",proxyID:"end_date",helpText:"End Date",type:l["b"].TT_FULL_DATE,defaultValue:e=>e.start_date.value,validation:(t,a)=>{if(!t)return["Date is required"];const o=e.maxDate||c["e"].getSessionDate();return a.start_date.value&&new Date(t.value)<new Date(a.start_date.value)?[`${Object(i["h"])(""+t.value)} is less than minimum date of ${Object(i["h"])(a.start_date.value)}`]:o&&new Date(t.value)>new Date(o)?[`${Object(i["h"])(""+t.value)} is greater than max date of ${Object(i["h"])(o)}`]:null},computedValue:e=>e.label,condition:()=>f.datePeriodInputType===o.SINGLE_DATE_INPUT_FIELD},{id:"calendar_start_date",proxyID:"start_date",helpText:"Start Date",type:l["b"].TT_DATE_PICKER,computedValue:e=>e,condition:()=>f.datePeriodInputType===o.CALENDAR_FIELD,validation:e=>p["a"].required(e),config:{minDate:()=>e.minDate||null,maxDate:()=>e.maxDate||c["e"].getSessionDate(),infoItems:(e,t)=>[{label:"Start Date",value:Object(i["h"])(e)||"-"},{label:"End Date",value:Object(i["h"])(t.end_date)||"-"}],persistInfoItems:!1}},{id:"calendar_end_date",proxyID:"end_date",helpText:"End Date",type:l["b"].TT_DATE_PICKER,validation:e=>p["a"].required(e),defaultValue:e=>e.start_date.value,computedValue:e=>e,condition:()=>f.datePeriodInputType===o.CALENDAR_FIELD,config:{minDate:e=>e.start_date.value,maxDate:()=>e.maxDate||c["e"].getSessionDate(),infoItems:(e,t)=>[{label:"Start Date",value:Object(i["h"])(t.start_date)||"-"},{label:"End Date",value:Object(i["h"])(e)}],persistInfoItems:!1}},(()=>{let e=!1;return{id:"occupation",helpText:"Report Group",type:l["b"].TT_SELECT,init:async()=>(e=await O["a"].get("IS_MILITARY_SITE"),!0),computedValue:e=>e.value,condition:()=>{var t;return"ART"===(null===(t=m["a"].getActiveApp())||void 0===t?void 0:t.applicationName)&&e},validation:e=>p["a"].required(e),options:()=>[{label:"All",value:"All"},{label:"Military",value:"Military"},{label:"Civilian",value:"Civilian"}]}})()],async(t,a)=>{console.log(a),d["X"].dismiss();try{const t=`${Object(i["h"])(a.start_date)} to ${Object(i["h"])(a.end_date)}`;e.onFinish(a.start_date,a.end_date,t,a)}catch(o){Object(s["c"])("An error has occurred")}})}},"99ae":function(e,t,a){"use strict";var o=a("7a23");const n={key:0},l={class:"his-sm-text"},c={class:"art-report-theme"},r={class:"stick-report-header"},i=["colspan","rowspan","onClick"],u=["onClick"],s={class:"his-sm-text"};function d(e,t,a,d,b,p){const m=Object(o["resolveComponent"])("ion-img"),O=Object(o["resolveComponent"])("ion-thumbnail"),f=Object(o["resolveComponent"])("ion-title"),v=Object(o["resolveComponent"])("ion-icon"),j=Object(o["resolveComponent"])("ion-button"),h=Object(o["resolveComponent"])("ion-label"),y=Object(o["resolveComponent"])("ion-chip"),C=Object(o["resolveComponent"])("ion-buttons"),g=Object(o["resolveComponent"])("ion-toolbar"),k=Object(o["resolveComponent"])("ion-header"),x=Object(o["resolveComponent"])("ion-item"),D=Object(o["resolveComponent"])("ion-content"),_=Object(o["resolveComponent"])("his-keyboard"),T=Object(o["resolveComponent"])("ion-footer");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(k,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(g,null,{default:Object(o["withCtx"])(()=>[e.iconUrl?(Object(o["openBlock"])(),Object(o["createBlock"])(O,{key:0,slot:"start"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,{src:e.iconUrl},null,8,["src"])]),_:1})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(f,{slot:"start",class:"his-md-text"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title)+" ",1),e.subtitle?(Object(o["openBlock"])(),Object(o["createElementBlock"])("br",n)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("span",l,Object(o["toDisplayString"])(e.subtitle),1)]),_:1}),Object(o["createVNode"])(C,{slot:"end"},{default:Object(o["withCtx"])(()=>["function"===typeof e.onConfigure?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:0,onClick:t[0]||(t[0]=()=>e.onConfigure?e.onConfigure():null)},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{size:"large",icon:e.funnelOutline},null,8,["icon"])]),_:1})):Object(o["createCommentVNode"])("",!0),e.searchTerm?(Object(o["openBlock"])(),Object(o["createBlock"])(y,{key:1,onClick:t[1]||(t[1]=()=>{e.searchTerm="",e.showSearchKeyboard=!1}),class:"his-md-text",color:"primary"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.searchTerm?"Search: "+e.searchTerm:""),1)]),_:1}),Object(o["createVNode"])(v,{icon:e.close},null,8,["icon"])]),_:1})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(j,{color:e.showSearchKeyboard?"primary":"dark",onClick:t[2]||(t[2]=()=>e.showSearchKeyboard=!e.showSearchKeyboard),size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{size:"large",icon:e.search},null,8,["icon"])]),_:1},8,["color"]),"function"===typeof e.onRefresh?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:2,onClick:t[3]||(t[3]=()=>e.onRefresh?e.onRefresh():null),color:"success",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{size:"large",icon:e.sync},null,8,["icon"])]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1}),(e.headerBadge||[]).length?(Object(o["openBlock"])(),Object(o["createBlock"])(g,{key:0,color:"light"},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.headerBadge,(t,a)=>(Object(o["openBlock"])(),Object(o["createBlock"])(y,{onClick:e=>"function"===typeof t.action?t.action():null,key:a,color:(null===t||void 0===t?void 0:t.color)||"dark"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{icon:(null===t||void 0===t?void 0:t.icon)||e.search},null,8,["icon"]),Object(o["createVNode"])(h,{innerHTML:null===t||void 0===t?void 0:t.text},null,8,["innerHTML"])]),_:2},1032,["onClick","color"]))),128))]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1}),Object(o["createVNode"])(D,{"scroll-y":"","scroll-x":""},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("table",c,[Object(o["createElementVNode"])("thead",r,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.columns,(t,a)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:a},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(t,(t,a)=>{var n,l;return Object(o["openBlock"])(),Object(o["createElementBlock"])("th",{key:a,colspan:(null===t||void 0===t||null===(n=t.span)||void 0===n?void 0:n.thColspan)||1,rowspan:(null===t||void 0===t||null===(l=t.span)||void 0===l?void 0:l.thRowspan)||1,onClick:a=>e.sortColumn(t.ref)},[Object(o["createVNode"])(x,{lines:"none"},{default:Object(o["withCtx"])(()=>[e.columnSorted&&e.columnSorted===t.ref?(Object(o["openBlock"])(),Object(o["createBlock"])(v,{key:0,icon:"asc"===e.sortOrder?e.arrowUp:e.arrowDown},null,8,["icon"])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(h,{class:"ion-text-center"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(t.label),1)]),_:2},1024)]),_:2},1024)],8,i)}),128))]))),128))]),Object(o["createElementVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.page,(t,a)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:a},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(t.row,(t,a)=>{var n;return Object(o["openBlock"])(),Object(o["createElementBlock"])("td",{key:a,onClick:()=>e.onClickTablecell(t),class:Object(o["normalizeClass"])({"clickable-cell":null===t||void 0===t||null===(n=t.column)||void 0===n?void 0:n.tdClick})},[Object(o["createElementVNode"])("span",s,Object(o["toDisplayString"])(t.value),1)],10,u)}),128))]))),128))])])]),_:1}),Object(o["createVNode"])(T,null,{default:Object(o["withCtx"])(()=>[e.showSearchKeyboard?(Object(o["openBlock"])(),Object(o["createBlock"])(_,{key:0,kbConfig:e.QWERTY,onKeyPress:e.filterTable},null,8,["kbConfig","onKeyPress"])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(g,{color:"dark"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{onClick:t[4]||(t[4]=t=>e.toCSV()),size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" CSV ")]),_:1}),Object(o["createVNode"])(j,{onClick:t[5]||(t[5]=t=>e.toPDF()),size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" PDF ")]),_:1}),e.totalPages>1?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:0,onClick:e.first,disabled:0===e.currentPage||e.totalPages<=2,size:"large",slot:"end"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" First ")]),_:1},8,["onClick","disabled"])):Object(o["createCommentVNode"])("",!0),e.totalPages>1?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:1,onClick:e.prev,disabled:!e.canPrev,color:"light",size:"large",slot:"end"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Prev ")]),_:1},8,["onClick","disabled"])):Object(o["createCommentVNode"])("",!0),e.totalPages>1?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:2,onClick:e.selectPage,size:"large",slot:"end",color:"light"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.currentPage)+" / "+Object(o["toDisplayString"])(e.totalPages-1),1)]),_:1},8,["onClick"])):Object(o["createCommentVNode"])("",!0),e.totalPages>1?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:3,onClick:e.next,disabled:!e.canNext,color:"light",size:"large",slot:"end"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Next ")]),_:1},8,["onClick","disabled"])):Object(o["createCommentVNode"])("",!0),e.totalPages>1?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:4,onClick:e.last,disabled:e.currentPage+1>=e.totalPages||e.totalPages<=2,size:"large",slot:"end"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Last ")]),_:1},8,["onClick","disabled"])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(j,{onClick:e.finish,color:"success",size:"large",slot:"end"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Finish ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}a("14d9"),a("13d5");var b=a("d867"),p=a("ff79"),m=a("2ef0"),O=a("017e"),f=a("c731"),v=a("6062"),j=a("ba82"),h=a("1c74"),y=a("6605"),C=a("5a0c"),g=a.n(C),k=a("0011"),x=a("db10"),D=a("6be2"),_=a("2345"),T=Object(o["defineComponent"])({components:{IonToolbar:b["S"],IonItem:b["w"],IonIcon:b["r"],IonLabel:b["x"],IonTitle:b["R"],IonHeader:b["q"],IonButton:b["d"],IonFooter:b["o"],IonContent:b["n"],IonButtons:b["e"],IonChip:b["l"],HisKeyboard:x["a"],IonThumbnail:b["Q"],IonImg:b["s"]},props:{title:{type:String,default:"Report"},headerBadge:{type:Object},iconUrl:{type:String},subtitle:{type:String},columns:{type:Object,required:!0},columnData:{type:Array,default:()=>[]},enablePagination:{type:Boolean,default:!0},rowsPerPage:{type:Number,default:10},onFinish:{type:Function},onRefresh:{type:Function},onConfigure:{type:Function},csvQuarter:{type:String},reportPrefix:{type:String,default:""}},setup(e){const t=Object(y["i"])(),a=Object(o["ref"])([]),n=Object(o["ref"])(0),l=Object(o["ref"])(""),c=Object(o["ref"])(""),r=Object(o["ref"])("desc"),i=Object(o["ref"])(!1),u=Object(o["computed"])(()=>{let t=a.value;if(r.value&&c.value&&(t=Object(O["a"])(a.value)[r.value](e=>e.data[c.value])),l.value){const a=new v["a"](t,{threshold:.3,keys:["searchIndex"],useExtendedSearch:!0});return a.search(l.value,{limit:e.rowsPerPage}).map(e=>e.item)}return t}),s=Object(o["computed"])(()=>Object(m["chunk"])(u.value,e.rowsPerPage).length),d=Object(o["computed"])(()=>n.value+2<=s.value),b=Object(o["computed"])(()=>n.value>0),C=Object(o["computed"])(()=>{const t=Object(m["chunk"])(u.value,e.rowsPerPage);return t[n.value]}),x=e=>{c.value=e,r.value="asc"===r.value?"desc":"asc"},T=()=>Object(f["c"])(e=>{const t=parseInt(e);parseInt(e)<=s.value&&(n.value=t)},{title:"Select page"}),V=()=>n.value=0,w=()=>n.value=s.value-1||0,N=()=>n.value+=1,I=()=>n.value-=1,E=()=>{"function"===typeof e.onFinish?e.onFinish():t.push("/")},S=e=>{try{var t,a;if("function"===typeof(null===(t=e.column)||void 0===t?void 0:t.tdClick))null===(a=e.column)||void 0===a||a.tdClick(e);return}catch(o){console.error(o)}},B=()=>e.columns.reduce((e,t)=>e.concat(t),[]).filter(e=>e.value||e.ref),P=t=>{var o,n,l;const c=B().filter(e=>[!e.canExport||(null===e||void 0===e?void 0:e.canExport[t]),"boolean"!==typeof e.exportable||e.exportable].every(Boolean)),r=c.map(e=>e.exportedValue&&e.exportedValue.column?e.exportedValue.column(e):e.secondaryLabel||e.label),i=c.map(e=>e.ref),u=a.value.reduce((e,t)=>{const a=t.row.filter(({column:e})=>i.includes(e.ref)).map(e=>e.column.exportedValue&&e.column.exportedValue.dataValue?e.column.exportedValue.dataValue(e):e.value);return[...e,a]},[]),s=`${e.reportPrefix} ${null!==(o=h["e"].getLocationName())&&void 0!==o?o:""} ${Object(k["g"])(e.title).replace(e.reportPrefix,"")} ${Object(k["f"])(null!==(n=null!==(l=e.csvQuarter)&&void 0!==l?l:e.subtitle)&&void 0!==n?n:"")}`;return{headers:r,rows:u,filename:s}},F=()=>{const{headers:e,rows:t,filename:a}=P("pdf");Object(j["c"])([e],t,a,!0)},A=()=>{const{headers:t,rows:a,filename:o}=P("csv");Object(j["a"])([t],[...a,["Date Created: "+g()().format("DD/MMM/YYYY HH:MM:ss")],["Quarter: "+(e.csvQuarter||e.subtitle)],["HIS-Core Version: "+h["e"].getCoreVersion()],["API Version: "+h["e"].getApiVersion()],["Site UUID: "+h["e"].getSiteUUID()],["Generated by: "+h["e"].getUserName()]],o)},L=e=>{l.value=Object(_["a"])(e,l.value),n.value=0},U=e=>{e.forEach(e=>{const t=B().map(t=>{let a="";const o=e[t.ref];try{a=Object(m["isEmpty"])(e)?"...":"function"===typeof t.toValue?""+t.toValue(o):"function"===typeof t.value?t.value(e):e[t.ref]||""}catch(n){a=(null===t||void 0===t?void 0:t.defaultValue)||"_ERROR_",console.error(n)}return{column:t,refData:o,value:a,data:e}});a.value.push({row:t,data:e,searchIndex:[...t,t.map(e=>e.value).join(" ")]})})};return Object(o["watch"])(()=>e.columnData,t=>{if(a.value=[],!Array.isArray(t)||!t.length)return n.value=0,l.value="",c.value="",void U(Array.from({length:e.rowsPerPage}).map(()=>({})));U(t)},{immediate:!0,deep:!0}),{first:V,last:w,next:N,prev:I,selectPage:T,sortColumn:x,onClickTablecell:S,toPDF:F,toCSV:A,finish:E,filterTable:L,sync:p["G"],search:p["D"],close:p["p"],arrowUp:p["g"],arrowDown:p["f"],funnelOutline:p["t"],page:C,canNext:d,searchTerm:l,totalPages:s,sortOrder:r,canPrev:b,currentPage:n,columnSorted:c,QWERTY:D["h"],showSearchKeyboard:i}}}),V=(a("e7d8"),a("6b0d")),w=a.n(V);const N=w()(T,[["render",d],["__scopeId","data-v-613ab08c"]]);t["a"]=N},a3fb:function(e,t,a){},b446:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return g}));a("14d9"),a("13d5");var o,n=a("d95e"),l=[{label:"Jan",value:1},{label:"Feb",value:2},{label:"Mar",value:3},{label:"Apr",value:4},{label:"May",value:5},{label:"Jun",value:6},{label:"Jul",value:7},{label:"Aug",value:8},{label:"Sep",value:9},{label:"Oct",value:10},{label:"Nov",value:11},{label:"Dec",value:12}],c=a("9283"),r=a("2706"),i=a("3800"),u=a("6be2"),s=a("5a0c"),d=a.n(s),b=a("1c74");function p(e,t,a=!0){const o=[];return a&&o.push("UNKNOWN"),{id:e,helpText:t+" Year",appearInSummary:()=>!1,type:n["b"].TT_TEXT,config:{customKeyboard:[i["k"],[o,["DELETE"]]]}}}function m(e,t){return{id:e,helpText:t+" Month",appearInSummary:()=>!1,type:n["b"].TT_SELECT,options:()=>l}}function O(e,t){return{id:e,helpText:t+" Day",type:n["b"].TT_MONTHLY_DAYS,appearInSummary:()=>!1}}function f(e,t){return{id:e,helpText:t+" Estimated period",type:n["b"].TT_SELECT,appearInSummary:()=>!1,options:()=>[{label:"6 months ago",value:180},{label:"12 months ago",value:365},{label:"18 months ago",value:540},{label:"24 months ago",value:730},{label:"Over 2 years ago",value:730}]}}function v(e,t){return{id:e,helpText:t+" Age Estimate",type:n["b"].TT_NUMBER,appearInSummary:()=>!1,config:{keypad:u["e"]}}}function j(e){return parseInt(e)<10?"0"+e:e}async function h(e,t,a){if(t.defaultValue){const o=await t.defaultValue(e);if(o){const[e,t,n]=o.split("-");switch(a){case"Year":return e||"";case"Month":return parseInt(t)||"";case"Day":return parseInt(n)||""}}}return""}function y(e){return c["b"].toStandardHisDisplayFormat(e)}function C(e,t,a,o){if(t.minDate){const n=t.minDate(a,o);if(new Date(e)<new Date(n))return[`${y(e)} is less than minimum date of ${y(n)}`]}if(t.maxDate){const n=t.maxDate(a,o);if(n&&new Date(e)>new Date(n))return[`${y(e)} is greater than max date of  ${y(n)}`]}}function g(e){let t="",a="",n="",i="",u=!1;const s="year_"+e.id,g="month_"+e.id,k="day_"+e.id,x="age_estimate_"+e.id,D="duration_estimate_"+e.id,_=p(s,e.helpText,e.estimation.allowUnknown),T=m(g,e.helpText),V=O(k,e.helpText),w=v(x,e.helpText),N=f(D,e.helpText),I="boolean"===typeof e.estimation.allowUnknownMonthDay&&e.estimation.allowUnknownMonthDay,E=t=>!(t[s]&&t[s].value&&["Unknown"].includes(t[s].value))&&(!e.condition||e.condition(t)),S=(e,t)=>{const o=[{type:"year",value:a,default:"YYYY"},{type:"month",value:n,default:"MM"},{type:"day",value:i,default:"DD"}];return o.reduce((a,o)=>{const n=[null,void 0,"Unknown",""];return t===o.type?n.includes(e)?a.push(o.default):a.push(e):n.includes(o.value)?a.push(o.default):a.push(o.value),a},[]).join("-")};"function"===typeof e.init&&(_.init=e.init),_.updateHelpTextOnValue=e=>`${_.helpText} (${S(null===e||void 0===e?void 0:e.label,"year")})`,_.proxyID=e.id,_.unload=e=>a=e.value.toString(),_.config={..._.config,...e.config},_.defaultValue=t=>h(t,e,"Year"),_.condition=t=>!e.condition||e.condition(t),_.validation=(t,a,o)=>{if(e.required&&r["a"].required(t))return["Year cannot be empty"];const n=t?t.value:"";if(!e.estimation.allowUnknown&&n.toString().match(/unknown/i))return["Value unknown is not permitted"];if(n&&!["Unknown"].includes(n)&&isNaN(n)||n<1900)return["Invalid Year"];if(n&&"function"===typeof e.minDate){const t=c["b"].getYear(e.minDate(a,o));if(parseInt(n)<t)return[`Year of ${n} is less than Minimum year of ${t}`]}if(n&&"function"===typeof e.maxDate){const t=e.maxDate(a,o);if(t&&n>c["b"].getYear(t))return[`Year of ${n} exceeds Maximum year of ${c["b"].getYear(t)}`]}return null},_.summaryMapValue=()=>({label:e.summaryLabel||e.helpText,value:t?y(t):"Unknown"}),_.appearInSummary=(t,a)=>a===e.id,_.computedValue=a=>{if(t){const[,o,n]=t.split("-");return t=`${a.value}-${o}-${n}`,e.computeValue(t,!1)}if(a&&"Unknown"===a.value)return t="",e.computeValue("Unknown",!1)},T.updateHelpTextOnValue=e=>`${T.helpText} (${S(null===e||void 0===e?void 0:e.label,"month")})`,T.proxyID=e.id,T.unload=e=>n=j(e.value.toString()),T.condition=e=>E(e),T.validation=e=>r["a"].required(e),T.defaultValue=t=>h(t,e,"Month"),I&&(T.options=()=>[...l,{label:"Unknown",value:"Unknown"}]),T.computedValue=(a,o)=>{if((""+a.value).match(/unknown/i))return t=o[s].value+"-07-15",e.computeValue(t,!0);if(t){const[o,,n]=t.split("-"),l=j(""+a.value);return t=`${o}-${l}-${n}`,e.computeValue(t,!1)}},V.proxyID=e.id,V.updateHelpTextOnValue=e=>`${V.helpText} (${S(null===e||void 0===e?void 0:e.label,"day")})`,V.condition=e=>!(""+e[g].value).match(/unknown/i)&&E(e),V.validation=(o,l,c)=>r["a"].required(o)?["Day is required for date"]:(u=!!(""+o.value).match(/unknown/i),i=u?"15":j(""+o.value),t=`${a}-${n}-${i}`,C(t,e,l,c)),V.defaultValue=t=>h(t,e,"Day"),V.computedValue=()=>e.computeValue(t,u),V.unload=(t,a,o,n)=>{e.unload&&e.unload(t,a,o,n)},V.beforeNext=(a,o)=>!e.beforeNext||e.beforeNext(t,o),V.config={year:e=>e[s].value,month:e=>e[g].value},I||(V.config.keyboardActions=[]);const B=(t,a)=>{const o=["Unknown"===t[s].value,!e.condition||e.condition(t),e.estimation.estimationFieldType===a];return o.every(Boolean)};return w.proxyID=e.id,w.validation=(a,o,n)=>{if(a&&a.value>300)return["Age estimate is too high and exceeding hard limit of 300"];if(isNaN(parseInt(a.value.toString())))return["Please enter a valid number"];const l=/^(12[0-7]|1[01][0-9]|[1-9]?[0-9])$/;if(!a.value.toString().match(l))return["Not a valid age estimate"];const c=d()(b["e"].getSessionDate()).subtract(a.value,"years").year();return t=c+"-07-15",C(t,e,o,n)},w.condition=e=>B(e,o.AGE_ESTIMATE_FIELD),w.computedValue=()=>e.computeValue(t,!0),w.beforeNext=(a,o)=>!e.beforeNext||e.beforeNext(t,o),N.proxyID=e.id,N.validation=(a,o,n)=>r["a"].required(a)?["Please select an estimate"]:(t=d()(b["e"].getSessionDate()).subtract(a.value,"day").format(c["a"]),C(t,e,o,n)),N.condition=e=>B(e,o.MONTH_ESTIMATE_FIELD),N.computedValue=()=>e.computeValue(t,!0),N.beforeNext=(a,o)=>!e.beforeNext||e.beforeNext(t,o),[_,T,V,w,N]}(function(e){e["AGE_ESTIMATE_FIELD"]="age-estimate-field",e["MONTH_ESTIMATE_FIELD"]="month-period-estimate-field"})(o||(o={}))},c731:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return u}));var o=a("d867"),n=a("e6e9"),l=a("9441"),c=a("10be");async function r(e,t,a=null){(await o["X"].create({component:l["a"],backdropDismiss:!1,cssClass:"full-modal",componentProps:{onFinish:t,fields:e,skipSummary:!0,disableAutoModalDismiss:!0,cancelAction:()=>{"function"===typeof a&&a(),o["X"].dismiss()}}})).present()}async function i(e,t={}){const a="boolean"!==typeof(null===t||void 0===t?void 0:t.strictNumbers)||(null===t||void 0===t?void 0:t.strictNumbers),n=await o["X"].create({component:c["a"],backdropDismiss:!1,cssClass:"keypad-modal custom-modal-backdrop",componentProps:{title:(null===t||void 0===t?void 0:t.title)||"",preset:(null===t||void 0===t?void 0:t.preset)||"",toggleButton:null===t||void 0===t?void 0:t.toggleButton,strictNumbers:a,customKeyboard:null===t||void 0===t?void 0:t.customKeyboard,noFloat:"boolean"===typeof(null===t||void 0===t?void 0:t.noFloat)&&t.noFloat,onKeyPress(t,o){e(a?parseInt(t):t,o)}}});n.present()}async function u(e,t){(await o["X"].create({component:n["a"],backdropDismiss:!1,cssClass:"full-modal",componentProps:{dismissType:"modal",currentField:e,onFinish:t}})).present()}},e6e9:function(e,t,a){"use strict";var o=a("7a23");function n(e,t,a,n,l,c){const r=Object(o["resolveComponent"])("ion-title"),i=Object(o["resolveComponent"])("ion-toolbar"),u=Object(o["resolveComponent"])("ion-header"),s=Object(o["resolveComponent"])("ion-content"),d=Object(o["resolveComponent"])("ion-button"),b=Object(o["resolveComponent"])("ion-footer"),p=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{class:"his-lg-text ion-text-center"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.currentField.helpText),1)]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(s,null,{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(),Object(o["createBlock"])(o["KeepAlive"],null,[(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.currentField.type),{key:e.currentField.id,options:e.currentField.options,preset:e.currentField.preset,clear:e.valueClearIndex,fdata:e.formData,config:e.currentField.config,cdata:e.computedFormData,activationState:e.state,onValue:e.currentField.onValue,defaultValue:e.currentField.defaultValue,onValueUpdate:e.currentField.onValueUpdate,onOnValue:e.onFieldValue},null,40,["options","preset","clear","fdata","config","cdata","activationState","onValue","defaultValue","onValueUpdate","onOnValue"]))],1024))]),_:1}),Object(o["createVNode"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{color:"light"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{disabled:e.disableBtn,onClick:e.onClose,slot:"start",color:"danger",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Close ")]),_:1},8,["disabled","onClick"]),Object(o["createVNode"])(d,{disabled:e.disableBtn,onClick:e.onClear,slot:"end",color:"warning",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Clear ")]),_:1},8,["disabled","onClick"]),Object(o["createVNode"])(d,{disabled:e.disableBtn,onClick:e.onDone,slot:"end",color:"success",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Done ")]),_:1},8,["disabled","onClick"])]),_:1})]),_:1})]),_:1})}var l=a("b5e4"),c=a("d95e"),r=a("d867");function i(){const e={};return c["a"].forEach(t=>{e[t]=Object(o["defineAsyncComponent"])(()=>a("f159")(`./${t}.vue`))}),e}var u=Object(o["defineComponent"])({name:"SingleFieldTouchForm",components:{IonPage:r["D"],IonContent:r["n"],IonFooter:r["o"],IonToolbar:r["S"],IonButton:r["d"],IonHeader:r["q"],IonTitle:r["R"],...i()},props:{dismissType:{type:String},onFinish:{type:Function,required:!0},currentField:{type:Object,required:!0}},data:()=>({valueClearIndex:0,formData:{},computedFormData:{},state:"",value:null,disableBtn:!1}),methods:{onClose(){"modal"===this.dismissType?r["X"].dismiss():this.$router.back()},onClear(){this.valueClearIndex+=1,this.value=null},onFieldValue(e){this.value=e},onDone(){if(this.disableBtn=!0,this.currentField.validation){const e=this.currentField.validation(this.value);if(this.disableBtn=!1,e)return Object(l["e"])(e.join(", "),6e4)}try{this.onFinish(this.value)}catch(e){Object(l["c"])(""+e),console.error(e)}this.onClose(),this.disableBtn=!1}}}),s=a("6b0d"),d=a.n(s);const b=d()(u,[["render",n]]);t["a"]=b},e7d8:function(e,t,a){"use strict";a("4b85")}}]);
//# sourceMappingURL=chunk-19ca9e00.099180b3.js.map