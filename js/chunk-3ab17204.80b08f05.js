(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ab17204"],{2012:function(e,t,a){},2048:function(e,t,a){"use strict";var n=a("7a23");function o(e,t,a,o,r,c){const l=Object(n["resolveComponent"])("v2Datatable"),i=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(i,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l,{title:e.title,subtitle:e.subtitle,columnData:e.reportData,columns:e.columns,"on-finish":e.onFinish,rowsPerPage:e.ITEMS_PER_PAGE},null,8,["title","subtitle","columnData","columns","on-finish","rowsPerPage"])]),_:1})}a("14d9");var r=a("d867"),c=a("99ae"),l=a("6605"),i=a("2ef0"),s=a("8734"),d=a("23e6"),u=a("0011");const b=20,p={};var m=Object(n["defineComponent"])({props:{title:{type:String,default:"Drilldown"},patientIdentifiers:{type:Object},onFinish:{type:Function}},components:{IonPage:r["D"],v2Datatable:c["a"]},setup(e){const t=Object(n["ref"])("-"),a=Object(n["ref"])([]),o=Object(l["i"])(),r=[[{label:"National ID",ref:"national_id"},{label:"First name",ref:"given_name"},{label:"Last name",ref:"family_name"},{label:"Birthdate",ref:"birthdate"},{label:"Action",ref:"patient_id",exportable:!1,tdClick:({data:e})=>o.push({path:"/patient/dashboard/"+e.patient_id}),value:()=>"View client"}]];return Object(n["watch"])(()=>e.patientIdentifiers,async e=>{if(a.value=[],t.value="Total: 0",!e||!e.length)return;const n=Object(i["chunk"])(e,b);for(const r of n){for(const n of r){try{let e=null;p[n]?e=p[n]:(e=new d["a"](await d["a"].findByID(n)),p[n]=e),a.value.push({patient_id:e.getID(),national_id:e.getNationalID(),given_name:e.getGivenName(),family_name:e.getFamilyName(),birthdate:Object(u["g"])(e.getBirthdate())})}catch(o){console.error(o),a.value.push({})}t.value=`Total: ${a.value.length} of ${(e||[]).length}`}await Object(s["a"])(500)}},{immediate:!0}),{columns:r,subtitle:t,reportData:a,ITEMS_PER_PAGE:b}}}),v=a("6b0d"),O=a.n(v);const _=O()(m,[["render",o]]);t["a"]=_},"775a":function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n,o,r=a("d95e"),c=a("1c74"),l=a("b446"),i=a("0011"),s=a("c731"),d=a("b5e4"),u=a("d867"),b=a("7a23"),p=a("2706");(function(e){e["MULTI_FIELD_DATE"]="Multipage date fields",e["CALENDAR_FIELD"]="Calendar",e["SINGLE_DATE_INPUT_FIELD"]="Single page date"})(n||(n={})),function(e){e["PERIOD_INPUT_TYPE"]="hts_report_date_period_type"}(o||(o={}));const m=Object(b["reactive"])({datePeriodInputType:localStorage.getItem(o.PERIOD_INPUT_TYPE)||n.MULTI_FIELD_DATE});function v(e){Object(s["a"])([...Object(l["b"])({id:"start_date",helpText:"Start",required:!0,minDate:()=>(null===e||void 0===e?void 0:e.minDate)||"",maxDate:()=>(null===e||void 0===e?void 0:e.maxDate)||c["e"].getSessionDate(),condition:()=>m.datePeriodInputType===n.MULTI_FIELD_DATE,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(l["b"])({id:"end_date",helpText:"End",required:!0,minDate:(e,t)=>t.start_date,maxDate:()=>(null===e||void 0===e?void 0:e.maxDate)||c["e"].getSessionDate(),condition:()=>m.datePeriodInputType===n.MULTI_FIELD_DATE,estimation:{allowUnknown:!1},computeValue:e=>e}),{id:"alt_start_date",proxyID:"start_date",helpText:"Start Date",type:r["b"].TT_FULL_DATE,validation:t=>{if(!t)return["Date is required"];const a=e.maxDate||c["e"].getSessionDate();return e.minDate&&new Date(t.value)<new Date(e.minDate)?[`${Object(i["g"])(""+t.value)} is less than minimum date of ${Object(i["g"])(e.minDate)}`]:a&&new Date(t.value)>new Date(a)?[`${Object(i["g"])(""+t.value)} is greater than max date of ${Object(i["g"])(a)}`]:null},computedValue:e=>e.value,condition:()=>m.datePeriodInputType===n.SINGLE_DATE_INPUT_FIELD},{id:"alt_end_date",proxyID:"end_date",helpText:"End Date",type:r["b"].TT_FULL_DATE,defaultValue:e=>e.start_date.value,validation:(t,a)=>{if(!t)return["Date is required"];const n=e.maxDate||c["e"].getSessionDate();return a.start_date.value&&new Date(t.value)<new Date(a.start_date.value)?[`${Object(i["g"])(""+t.value)} is less than minimum date of ${Object(i["g"])(a.start_date.value)}`]:n&&new Date(t.value)>new Date(n)?[`${Object(i["g"])(""+t.value)} is greater than max date of ${Object(i["g"])(n)}`]:null},computedValue:e=>e.label,condition:()=>m.datePeriodInputType===n.SINGLE_DATE_INPUT_FIELD},{id:"calendar_start_date",proxyID:"start_date",helpText:"Start Date",type:r["b"].TT_DATE_PICKER,computedValue:e=>e,condition:()=>m.datePeriodInputType===n.CALENDAR_FIELD,validation:e=>p["a"].required(e),config:{minDate:()=>e.minDate||null,maxDate:()=>e.maxDate||c["e"].getSessionDate(),infoItems:(e,t)=>[{label:"Start Date",value:Object(i["g"])(e)||"-"},{label:"End Date",value:Object(i["g"])(t.end_date)||"-"}],persistInfoItems:!1}},{id:"calendar_end_date",proxyID:"end_date",helpText:"End Date",type:r["b"].TT_DATE_PICKER,validation:e=>p["a"].required(e),defaultValue:e=>e.start_date.value,computedValue:e=>e,condition:()=>m.datePeriodInputType===n.CALENDAR_FIELD,config:{minDate:e=>e.start_date.value,maxDate:()=>e.maxDate||c["e"].getSessionDate(),infoItems:(e,t)=>[{label:"Start Date",value:Object(i["g"])(t.start_date)||"-"},{label:"End Date",value:Object(i["g"])(e)}],persistInfoItems:!1}}],{onFinish:async(t,a)=>{u["ab"].dismiss();try{const t=`${Object(i["g"])(a.start_date)} to ${Object(i["g"])(a.end_date)}`;e.onFinish(a.start_date,a.end_date,t)}catch(n){Object(d["c"])("An error has occurred")}}})}},"937e":function(e,t,a){"use strict";a.r(t);var n=a("7a23");function o(e,t,a,o,r,c){const l=Object(n["resolveComponent"])("ion-loading"),i=Object(n["resolveComponent"])("v2Datatable"),s=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(s,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),Object(n["createVNode"])(i,{title:"CXCA SCRN Report",csvQuarter:e.csvQuarter,subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:25,onConfigure:e.configure,onRefresh:()=>e.generate()},null,8,["csvQuarter","subtitle","columns","columnData","onConfigure","onRefresh"])]),_:1})}a("13d5"),a("14d9");var r=a("d867"),c=a("99ae"),l=a("ad9e"),i=a("775a"),s=a("b5e4"),d=a("2048"),u=a("0011");const b=Object(n["ref"])([]),p=Object(n["ref"])(""),m=Object(n["ref"])(""),v=Object(n["ref"])(""),O=Object(n["ref"])(!1),_=Object(n["ref"])("");var g=Object(n["defineComponent"])({components:{IonPage:r["D"],IonLoading:r["z"],v2Datatable:c["a"]},setup(){const e=async(e,t)=>{(await r["ab"].create({component:d["a"],backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:e,subtitle:v,patientIdentifiers:t,onFinish:()=>r["ab"].getTop().then(e=>e&&r["ab"].dismiss())}})).present()},t=[[{label:"#",ref:"index",span:{thRowspan:2}},{label:"Age group",ref:"age_group",span:{thRowspan:2}},{label:"Gender",ref:"gender",exportable:!1,span:{thRowspan:2}},{label:"1st time screened",ref:"",span:{thColspan:3}},{label:"Rescreened after previous negative",ref:"",span:{thColspan:3}},{label:"Post-treatment follow-up",ref:"",span:{thColspan:3}}],[{label:"Negative",ref:"first_time_screened_negative",secondaryLabel:"1st screened (Negative)",value:e=>e.first_time_screened.negative.length,tdClick:({column:t,data:a})=>e(`${a.age_group} ${t.secondaryLabel}`,a.first_time_screened.negative)},{label:"Positive",ref:"first_time_screened_positive",secondaryLabel:"1st time screened (Positive)",value:e=>e.first_time_screened.positive.length,tdClick:({column:t,data:a})=>e(`${a.age_group} ${t.secondaryLabel}`,a.first_time_screened.positive)},{label:"Suspected Cancer",ref:"first_time_screened_suspected_cancer",secondaryLabel:"1st screened(Suspected cancer)",value:e=>e.first_time_screened.suspected.length,tdClick:({column:t,data:a})=>e(`${a.age_group} ${t.secondaryLabel}`,a.first_time_screened.suspected)},{label:"Negative",ref:"rescreened_after_prev_visit_negative",secondaryLabel:"Rescreen after prev visit (Negative)",value:e=>e.rescreened_after_prev_visit.negative.length,tdClick:({column:t,data:a})=>e(`${a.age_group} ${t.secondaryLabel}`,a.rescreened_after_prev_visit.negative)},{label:"Positive",ref:"rescreened_after_prev_visit_positive",secondaryLabel:"Rescreen after prev visit (Positive)",value:e=>e.rescreened_after_prev_visit.positive.length,tdClick:({column:t,data:a})=>e(`${a.age_group} ${t.secondaryLabel}`,a.rescreened_after_prev_visit.positive)},{label:"Suspected cancer",ref:"rescreened_after_prev_visit_suspected",secondaryLabel:"Rescreen after prev visit (Suspected)",value:e=>e.rescreened_after_prev_visit.suspected.length,tdClick:({column:t,data:a})=>e(`${a.age_group} ${t.secondaryLabel}`,a.rescreened_after_prev_visit.suspected)},{label:"Negative",ref:"post_treatment_followup_negative",secondaryLabel:"Post-treatment followup(Negative)",value:e=>e.post_treatment_followup.negative.length,tdClick:({column:t,data:a})=>e(`${a.age_group} ${t.secondaryLabel}`,a.post_treatment_followup.negative)},{label:"Positive",ref:"post_treatment_followup_positive",secondaryLabel:"Post-treatment followup (Positive)",value:e=>e.post_treatment_followup.positive.length,tdClick:({column:t,data:a})=>e(`${a.age_group} ${t.secondaryLabel}`,a.post_treatment_followup.positive)},{label:"Suspected cancer",ref:"post_treatment_followup_suspected",secondaryLabel:"Post-treatment followup (Suspected)",value:e=>e.post_treatment_followup.suspected.length,tdClick:({column:t,data:a})=>e(`${a.age_group} ${t.secondaryLabel}`,a.post_treatment_followup.suspected)}]],a=async()=>{if(!p.value||!m.value)return Object(s["e"])("Start date and end date required!");O.value=!0,b.value=[];const e=new l["a"];e.startDate=p.value,e.endDate=m.value;try{b.value=(await e.getClinicReport("CXCA SCRN")).slice(5).map((e,t)=>(e.index=t+1,e.gender="Female",e));const t=e=>{const t=t=>b.value.reduce((a,n)=>a.concat(n[e][t]||[]),[]);return{positive:t("positive"),negative:t("negative"),suspected:t("suspected")}};b.value.push({age_group:"All",gender:"Female",index:b.value.length+1,first_time_screened:t("first_time_screened"),post_treatment_followup:t("post_treatment_followup"),rescreened_after_prev_visit:t("rescreened_after_prev_visit")})}catch(t){Object(s["c"])("Unable to generate report!")}O.value=!1},o=()=>Object(i["a"])({onFinish:(e,t,n)=>{p.value=e,m.value=t,v.value=`Period (${n})`,_.value=`${Object(u["g"])(p.value)} to ${Object(u["g"])(m.value)}`,a()}});return Object(n["onMounted"])(()=>!b.value.length&&o()),{columns:t,isLoading:O,reportData:b,period:v,csvQuarter:_,generate:a,configure:o}}}),j=a("6b0d"),f=a.n(j);const h=f()(g,[["render",o]]);t["default"]=h},"99ae":function(e,t,a){"use strict";var n=a("7a23");const o={key:0},r={class:"his-sm-text"},c={class:"art-report-theme"},l={class:"stick-report-header"},i=["colspan","rowspan","onClick"],s=["onClick"],d={class:"his-sm-text"};function u(e,t,a,u,b,p){const m=Object(n["resolveComponent"])("ion-title"),v=Object(n["resolveComponent"])("ion-icon"),O=Object(n["resolveComponent"])("ion-button"),_=Object(n["resolveComponent"])("ion-label"),g=Object(n["resolveComponent"])("ion-chip"),j=Object(n["resolveComponent"])("ion-buttons"),f=Object(n["resolveComponent"])("ion-toolbar"),h=Object(n["resolveComponent"])("ion-header"),D=Object(n["resolveComponent"])("ion-item"),C=Object(n["resolveComponent"])("ion-content"),k=Object(n["resolveComponent"])("ion-footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(h,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(m,{class:"his-md-text"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title)+" ",1),e.subtitle?(Object(n["openBlock"])(),Object(n["createElementBlock"])("br",o)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("span",r,Object(n["toDisplayString"])(e.subtitle),1)]),_:1}),Object(n["createVNode"])(j,{slot:"end"},{default:Object(n["withCtx"])(()=>["function"===typeof e.onConfigure?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:0,onClick:e.onConfigure},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(v,{size:"large",icon:e.document},null,8,["icon"])]),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0),e.searchTerm?(Object(n["openBlock"])(),Object(n["createBlock"])(g,{key:1,onClick:t[0]||(t[0]=t=>e.searchTerm=""),class:"his-md-text",color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(_,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.searchTerm),1)]),_:1}),Object(n["createVNode"])(v,{icon:e.close},null,8,["icon"])]),_:1})):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(O,{onClick:e.searchTable,size:"large"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(v,{size:"large",icon:e.search},null,8,["icon"])]),_:1},8,["onClick"]),"function"===typeof e.onRefresh?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:2,onClick:e.onRefresh,color:"success",size:"large"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(v,{size:"large",icon:e.sync},null,8,["icon"])]),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(C,{"scroll-y":"","scroll-x":""},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("table",c,[Object(n["createElementVNode"])("thead",l,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.columns,(t,a)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:a},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t,(t,a)=>{var o,r;return Object(n["openBlock"])(),Object(n["createElementBlock"])("th",{key:a,colspan:(null===t||void 0===t||null===(o=t.span)||void 0===o?void 0:o.thColspan)||1,rowspan:(null===t||void 0===t||null===(r=t.span)||void 0===r?void 0:r.thRowspan)||1,onClick:a=>e.sortColumn(t.ref)},[Object(n["createVNode"])(D,{lines:"none"},{default:Object(n["withCtx"])(()=>[e.columnSorted&&e.columnSorted===t.ref?(Object(n["openBlock"])(),Object(n["createBlock"])(v,{key:0,icon:"asc"===e.sortOrder?e.arrowUp:e.arrowDown},null,8,["icon"])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(_,{class:"ion-text-center"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(t.label),1)]),_:2},1024)]),_:2},1024)],8,i)}),128))]))),128))]),Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.page,(t,a)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:a},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t.row,(t,a)=>{var o;return Object(n["openBlock"])(),Object(n["createElementBlock"])("td",{key:a,onClick:()=>e.onClickTablecell(t),class:Object(n["normalizeClass"])({"clickable-cell":null===t||void 0===t||null===(o=t.column)||void 0===o?void 0:o.tdClick})},[Object(n["createElementVNode"])("span",d,Object(n["toDisplayString"])(t.value),1)],10,s)}),128))]))),128))])])]),_:1}),Object(n["createVNode"])(k,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,{color:"dark"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(O,{onClick:t[1]||(t[1]=t=>e.toCSV()),size:"large"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" CSV ")]),_:1}),Object(n["createVNode"])(O,{onClick:t[2]||(t[2]=t=>e.toPDF()),size:"large"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" PDF ")]),_:1}),e.totalPages>1?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:0,onClick:e.first,disabled:0===e.currentPage||e.totalPages<=2,size:"large",slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" First ")]),_:1},8,["onClick","disabled"])):Object(n["createCommentVNode"])("",!0),e.totalPages>1?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:1,onClick:e.prev,disabled:!e.canPrev,color:"light",size:"large",slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Prev ")]),_:1},8,["onClick","disabled"])):Object(n["createCommentVNode"])("",!0),e.totalPages>1?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:2,onClick:e.selectPage,size:"large",slot:"end",color:"light"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.currentPage)+" / "+Object(n["toDisplayString"])(e.totalPages-1),1)]),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0),e.totalPages>1?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:3,onClick:e.next,disabled:!e.canNext,color:"light",size:"large",slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Next ")]),_:1},8,["onClick","disabled"])):Object(n["createCommentVNode"])("",!0),e.totalPages>1?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:4,onClick:e.last,disabled:e.currentPage+1>=e.totalPages||e.totalPages<=2,size:"large",slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Last ")]),_:1},8,["onClick","disabled"])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(O,{onClick:e.finish,color:"success",size:"large",slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Finish ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}a("14d9"),a("13d5");var b=a("d867"),p=a("ff79"),m=a("c731"),v=a("2ef0"),O=a("017e"),_=a("d95e"),g=a("6062"),j=a("ba82"),f=a("1c74"),h=a("6605"),D=a("5a0c"),C=a.n(D),k=a("1718"),y=Object(n["defineComponent"])({components:{IonImg:b["s"],IonThumbnail:b["R"],IonToolbar:b["T"],IonItem:b["w"],IonIcon:b["r"],IonLabel:b["x"],IonTitle:b["S"],IonHeader:b["q"],IonButton:b["d"],IonFooter:b["o"],IonContent:b["n"],IonButtons:b["e"],IonChip:b["l"]},props:{icon:{type:String},title:{type:String,default:"Report"},subtitle:{type:String},columns:{type:Object,required:!0},columnData:{type:Array,default:()=>[]},enablePagination:{type:Boolean,default:!0},rowsPerPage:{type:Number,default:10},onFinish:{type:Function},onRefresh:{type:Function},onConfigure:{type:Function},csvQuarter:{type:String}},setup(e){const t=Object(h["i"])(),a=Object(n["ref"])([]),o=Object(n["ref"])(0),r=Object(n["ref"])(""),c=Object(n["ref"])(""),l=Object(n["ref"])("desc"),i=Object(n["computed"])(()=>e.icon?Object(k["a"])(e.icon):""),s=Object(n["computed"])(()=>{const t=Object(O["a"])(a.value)[l.value](e=>e.data[c.value]);if(r.value){const a=new g["a"](t,{threshold:.3,keys:["searchIndex"],useExtendedSearch:!0});return a.search(r.value,{limit:e.rowsPerPage}).map(e=>e.item)}return t}),d=Object(n["computed"])(()=>Object(v["chunk"])(s.value,e.rowsPerPage).length),u=Object(n["computed"])(()=>o.value+2<=d.value),b=Object(n["computed"])(()=>o.value>0),D=Object(n["computed"])(()=>{const t=Object(v["chunk"])(s.value,e.rowsPerPage);return t[o.value]}),y=e=>{c.value=e,l.value="asc"===l.value?"desc":"asc"},w=()=>Object(m["c"])(e=>{const t=parseInt(e);parseInt(e)<=d.value&&(o.value=t)},{title:"Select page"}),x=()=>{Object(m["b"])({id:"search",helpText:"Find",type:_["b"].TT_TEXT},e=>{setTimeout(()=>{r.value=e?e.value:"",o.value=0},3)})},I=()=>o.value=0,P=()=>o.value=d.value-1||0,N=()=>o.value+=1,T=()=>o.value-=1,V=()=>{"function"===typeof e.onFinish?e.onFinish():t.push("/")},E=e=>{try{var t,a;if("function"===typeof(null===(t=e.column)||void 0===t?void 0:t.tdClick))null===(a=e.column)||void 0===a||a.tdClick(e);return}catch(n){console.error(n)}},S=()=>e.columns.reduce((e,t)=>e.concat(t),[]).filter(e=>e.value||e.ref),L=t=>{const n=S().filter(e=>[!e.canExport||(null===e||void 0===e?void 0:e.canExport[t]),"boolean"!==typeof e.exportable||e.exportable].every(Boolean)),o=n.map(e=>e.exportedValue&&e.exportedValue.column?e.exportedValue.column(e):e.secondaryLabel||e.label),r=n.map(e=>e.ref),c=a.value.reduce((e,t)=>{const a=t.row.filter(({column:e})=>r.includes(e.ref)).map(e=>e.column.exportedValue&&e.column.exportedValue.dataValue?e.column.exportedValue.dataValue(e):e.value);return[...e,a]},[]),l=`${f["e"].getLocationName()||"Unknown site"}-${e.title}-${e.subtitle}-${f["e"].getSessionDate()}`;return{headers:o,rows:c,filename:l}},B=()=>{const{headers:e,rows:t,filename:a}=L("pdf");Object(j["d"])([e],t,a,!0)},F=()=>{const{headers:t,rows:a,filename:n}=L("csv");Object(j["b"])([t],[...a,["Date Created: "+C()().format("DD/MMM/YYYY HH:MM:ss")],["Quarter: "+(e.csvQuarter||e.subtitle)],["HIS-Core Version: "+f["e"].getCoreVersion()],["API Version: "+f["e"].getApiVersion()],["Site UUID: "+f["e"].getSiteUUID()],["Generated by: "+f["e"].getUserName()]],n)},R=e=>{e.forEach(e=>{const t=S().map(t=>{let a="";try{a=Object(v["isEmpty"])(e)?"...":"function"===typeof t.value?t.value(e):e[t.ref]||""}catch(n){a="_ERROR_",console.error(n)}return{column:t,data:e,value:a,[t.ref||"nada"]:a}});a.value.push({row:t,data:e,searchIndex:[...t,t.map(e=>e.value).join(" ")]})})};return Object(n["watch"])(()=>e.columnData,t=>{if(a.value=[],!Array.isArray(t)||!t.length)return o.value=0,r.value="",c.value="",void R(Array.from({length:e.rowsPerPage}).map(()=>({})));R(t)},{immediate:!0,deep:!0}),{first:I,last:P,next:N,prev:T,selectPage:w,sortColumn:y,searchTable:x,onClickTablecell:E,toPDF:B,toCSV:F,finish:V,logo:i,sync:p["Q"],search:p["L"],close:p["s"],arrowUp:p["h"],arrowDown:p["g"],document:p["v"],page:D,canNext:u,searchTerm:r,totalPages:d,sortOrder:l,canPrev:b,currentPage:o,columnSorted:c}}}),w=(a("b6b5"),a("6b0d")),x=a.n(w);const I=x()(y,[["render",u],["__scopeId","data-v-6bdc361e"]]);t["a"]=I},ad9e:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("ade3"),o=(a("14d9"),a("1c74")),r=a("9283");class c extends o["e"]{constructor(){super(),Object(n["a"])(this,"programID",void 0),Object(n["a"])(this,"startDate",void 0),Object(n["a"])(this,"endDate",void 0),Object(n["a"])(this,"date",void 0),this.endDate="",this.startDate="",this.date=o["e"].getSessionDate(),this.programID=o["e"].getProgramID()}getPepfarReport(e){return this.getReport("pepfar_cxca",{report_name:e})}getClinicReport(e){return this.getReport("screened_for_cxca",{report_name:e})}getMohReport(e){return this.getReport("screened_for_cxca",{report_name:e})}getDateIntervalPeriod(){return`${r["b"].toStandardHisDisplayFormat(this.startDate)} - ${r["b"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}getReportPeriod(){return this.startDate&&this.endDate?`${r["b"].toStandardHisDisplayFormat(this.startDate)} - ${r["b"].toStandardHisDisplayFormat(this.endDate)}`:"-"}getReport(e,t={}){return o["e"].getJson(e,this.buildRequest(t))}buildRequest(e={}){const t={date:this.date,program_id:24};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),{...t,...e}}static getReportQuarters(e=4){const t=[];let a=r["b"].getCurrentYear();for(let n=0;n<e;++n)t.push({name:"Q4 "+a,start:a+"-10-01",end:a+"-12-31"}),t.push({name:"Q3 "+a,start:a+"-07-01",end:a+"-09-30"}),t.push({name:"Q2 "+a,start:a+"-04-01",end:a+"-06-30"}),t.push({name:"Q1 "+a,start:a+"-01-01",end:a+"-03-31"}),--a;return t}}},b6b5:function(e,t,a){"use strict";a("2012")}}]);
//# sourceMappingURL=chunk-3ab17204.80b08f05.js.map