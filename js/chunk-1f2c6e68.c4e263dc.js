(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f2c6e68"],{"5c5b":function(e,t,a){"use strict";a.r(t);var n=a("7a23");function o(e,t,a,o,r,i){const u=Object(n["resolveComponent"])("ion-loading"),l=Object(n["resolveComponent"])("v2Datatable"),c=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(c,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,{"is-open":e.isLoading,message:"Please wait..."},null,8,["is-open"]),Object(n["createVNode"])(l,{title:"Sc Curr",subtitle:e.period,columns:e.columns,columnData:e.reportData,rowsPerPage:20,onConfigure:e.configure,onRefresh:()=>e.generate()},null,8,["subtitle","columns","columnData","onConfigure","onRefresh"])]),_:1})}var r=a("d867"),i=a("99ae"),u=a("91e4"),l=a("775a"),c=a("b5e4"),d=a("7f12"),s=a("0011"),p=Object(n["defineComponent"])({components:{IonPage:r["D"],IonLoading:r["z"],v2Datatable:i["a"]},setup(){const e=Object(n["ref"])([]),t=Object(n["ref"])(""),a=Object(n["ref"])(!1),o=new u["a"],i=[[{label:"#",ref:"index"},{label:"ARV drug category",ref:"category"},{label:"# of bottles (units) remaining",ref:"units",value:e=>Object(s["g"])(e.units),tdClick:async e=>{(await r["Z"].create({component:d["a"],cssClass:"custom-modal",componentProps:{title:e.data.category,columns:["Drug","Quantity"],onRows:()=>{var t;return((null===(t=e.data)||void 0===t?void 0:t.granular_spec)||[]).map(e=>[e.drug_name,Object(s["g"])(e.units)])}}})).present()}}]],p=async()=>{if(!o.startDate||!o.endDate)return Object(c["e"])("Start date and end date required!");a.value=!0,e.value=[];try{e.value=(await o.getScCurrReport()).map((e,t)=>({...e,index:t+1}))}catch(t){Object(c["c"])("Unable to generate report!")}a.value=!1},m=()=>Object(l["a"])({onFinish:(e,a,n)=>{t.value=`Period (${n})`,o.startDate=e,o.endDate=a,p()}});return Object(n["onMounted"])(()=>!e.value.length&&m()),{reportData:e,isLoading:a,configure:m,generate:p,columns:i,period:t}}}),m=a("6b0d"),b=a.n(m);const f=b()(p,[["render",o]]);t["default"]=f},"6be2":function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"g",(function(){return i})),a.d(t,"f",(function(){return u})),a.d(t,"e",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return d})),a.d(t,"h",(function(){return p})),a.d(t,"a",(function(){return m}));var n=a("3800");const o=[n["m"],[["","Delete"]]],r=[n["j"],[["Delete"]]],i=[n["j"],[["Delete","Unknown"]]],u=[n["j"],[["N/A"],["Delete","Unknown"]]],l=[n["j"],[["Delete"]]],c=[n["j"],[["Unknown","Delete"],["Qwerty","A-Z"]]],d=[n["h"],[["Unknown"]]],s=[n["a"],[["0-9","Delete"],["Qwerty","Unknown"],["","Space"]]],p=[n["l"],[["","Delete"],["?123","0-9"],["Space","Unknown"]]],m=[{btn:"0-9",keyboard:c},{btn:"?123",keyboard:o},{btn:"A-Z",keyboard:s},{btn:"Qwerty",keyboard:p}]},"775a":function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n,o,r=a("d95e"),i=a("1c74"),u=a("b446"),l=a("0011"),c=a("c731"),d=a("b5e4"),s=a("d867"),p=a("7a23"),m=a("2706");(function(e){e["MULTI_FIELD_DATE"]="Multipage date fields",e["CALENDAR_FIELD"]="Calendar",e["SINGLE_DATE_INPUT_FIELD"]="Single page date"})(n||(n={})),function(e){e["PERIOD_INPUT_TYPE"]="hts_report_date_period_type"}(o||(o={}));const b=Object(p["reactive"])({datePeriodInputType:localStorage.getItem(o.PERIOD_INPUT_TYPE)||n.MULTI_FIELD_DATE});function f(e){Object(c["a"])([...Object(u["b"])({id:"start_date",helpText:"Start",required:!0,minDate:()=>(null===e||void 0===e?void 0:e.minDate)||"",maxDate:()=>(null===e||void 0===e?void 0:e.maxDate)||i["e"].getSessionDate(),condition:()=>b.datePeriodInputType===n.MULTI_FIELD_DATE,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(u["b"])({id:"end_date",helpText:"End",required:!0,minDate:(e,t)=>t.start_date,maxDate:()=>(null===e||void 0===e?void 0:e.maxDate)||i["e"].getSessionDate(),condition:()=>b.datePeriodInputType===n.MULTI_FIELD_DATE,estimation:{allowUnknown:!1},computeValue:e=>e}),{id:"alt_start_date",proxyID:"start_date",helpText:"Start Date",type:r["b"].TT_FULL_DATE,validation:t=>{if(!t)return["Date is required"];const a=e.maxDate||i["e"].getSessionDate();return e.minDate&&new Date(t.value)<new Date(e.minDate)?[`${Object(l["f"])(""+t.value)} is less than minimum date of ${Object(l["f"])(e.minDate)}`]:a&&new Date(t.value)>new Date(a)?[`${Object(l["f"])(""+t.value)} is greater than max date of ${Object(l["f"])(a)}`]:null},computedValue:e=>e.value,condition:()=>b.datePeriodInputType===n.SINGLE_DATE_INPUT_FIELD},{id:"alt_end_date",proxyID:"end_date",helpText:"End Date",type:r["b"].TT_FULL_DATE,defaultValue:e=>e.start_date.value,validation:(t,a)=>{if(!t)return["Date is required"];const n=e.maxDate||i["e"].getSessionDate();return a.start_date.value&&new Date(t.value)<new Date(a.start_date.value)?[`${Object(l["f"])(""+t.value)} is less than minimum date of ${Object(l["f"])(a.start_date.value)}`]:n&&new Date(t.value)>new Date(n)?[`${Object(l["f"])(""+t.value)} is greater than max date of ${Object(l["f"])(n)}`]:null},computedValue:e=>e.label,condition:()=>b.datePeriodInputType===n.SINGLE_DATE_INPUT_FIELD},{id:"calendar_start_date",proxyID:"start_date",helpText:"Start Date",type:r["b"].TT_DATE_PICKER,computedValue:e=>e,condition:()=>b.datePeriodInputType===n.CALENDAR_FIELD,validation:e=>m["a"].required(e),config:{minDate:()=>e.minDate||null,maxDate:()=>e.maxDate||i["e"].getSessionDate(),infoItems:(e,t)=>[{label:"Start Date",value:Object(l["f"])(e)||"-"},{label:"End Date",value:Object(l["f"])(t.end_date)||"-"}],persistInfoItems:!1}},{id:"calendar_end_date",proxyID:"end_date",helpText:"End Date",type:r["b"].TT_DATE_PICKER,validation:e=>m["a"].required(e),defaultValue:e=>e.start_date.value,computedValue:e=>e,condition:()=>b.datePeriodInputType===n.CALENDAR_FIELD,config:{minDate:e=>e.start_date.value,maxDate:()=>e.maxDate||i["e"].getSessionDate(),infoItems:(e,t)=>[{label:"Start Date",value:Object(l["f"])(t.start_date)||"-"},{label:"End Date",value:Object(l["f"])(e)}],persistInfoItems:!1}}],async(t,a)=>{console.log(a),s["Z"].dismiss();try{const t=`${Object(l["f"])(a.start_date)} to ${Object(l["f"])(a.end_date)}`;e.onFinish(a.start_date,a.end_date,t)}catch(n){Object(d["c"])("An error has occurred")}})}},"7f12":function(e,t,a){"use strict";var n=a("7a23");const o={key:0},r={key:1};function i(e,t,a,i,u,l){const c=Object(n["resolveComponent"])("ion-title"),d=Object(n["resolveComponent"])("ion-toolbar"),s=Object(n["resolveComponent"])("ion-header"),p=Object(n["resolveComponent"])("his-basic-table"),m=Object(n["resolveComponent"])("text-skeloton"),b=Object(n["resolveComponent"])("ion-content"),f=Object(n["resolveComponent"])("ion-button"),D=Object(n["resolveComponent"])("ion-footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(s,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(b,null,{default:Object(n["withCtx"])(()=>[e.ready?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createVNode"])(p,{columns:e.columns,rows:e.rows},null,8,["columns","rows"])])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["createVNode"])(m)]))]),_:1}),Object(n["createVNode"])(D,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,{color:"danger",onClick:e.closeModal,slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Close ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var u=a("a3a5"),l=a("d867"),c=a("ded6"),d=Object(n["defineComponent"])({components:{HisBasicTable:u["a"],IonHeader:l["q"],IonToolbar:l["S"],IonContent:l["n"],IonFooter:l["o"],IonButton:l["d"],TextSkeloton:c["a"]},props:{title:{type:String,required:!0},columns:{type:Object,required:!0},onRows:{type:Function,required:!0}},data:()=>({rows:[],ready:!1}),watch:{onRows:{async handler(e){e&&(this.rows=await e(),this.ready=!0)},immediate:!0,deep:!0}},methods:{async closeModal(){await l["Z"].dismiss({})}}}),s=a("6b0d"),p=a.n(s);const m=p()(d,[["render",i]]);t["a"]=m},"91e4":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("ade3"),o=a("5969");class r extends o["a"]{constructor(){super(),Object(n["a"])(this,"stock",void 0),this.stock=[]}async loadStock(){this.stock=await this.getReport("pharmacy/items",{paginate:!1})}getStockReport(){return o["a"].getJson("pharmacy/stock_report",{paginate:!1})}getStockCardReport(){return this.getReport(`programs/${this.programID}/reports/stock_card`)}loadTrail(){return this.getReport("pharmacy/audit_trail/grouped")}getTrailDetails(e,t,a){return this.getReport("pharmacy/audit_trail",{transaction_date:e,drug_id:t,transaction_reason:a})}getScCurrReport(){return this.getReport("programs/1/reports/sc_curr")}getDiscrepancyReport(){return this.getReport(`programs/${this.programID}/reports/discrepancy_report`)}groupStock(){const e={};for(const t in this.stock){const a=this.stock[t],n=a["drug_id"];e[n]||(e[n]={current_quantity:0,dispensed_quantity:0,pack_size:a.pack_size,drug_name:null===a["drug_name"]?a["drug_legacy_name"]:a["drug_name"]}),0!==a.current_quantity&&(e[n]["current_quantity"]+=parseFloat(a.current_quantity),a.dispensed_quantity&&(e[n]["dispensed_quantity"]+=parseFloat(a.dispensed_quantity)))}return Object.values(e).map(e=>{let t="0";return t=null==e.pack_size?e.current_quantity+"(tabs)":Math.trunc(e.current_quantity/e.pack_size),{drugName:e.drug_name,quantintyDispensed:e.dispensed_quantity,currentQuantity:t,quantityIsTabs:null===e.pack_size}})}}},b446:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return T}));a("14d9"),a("13d5");var n,o=a("d95e"),r=[{label:"Jan",value:1},{label:"Feb",value:2},{label:"Mar",value:3},{label:"Apr",value:4},{label:"May",value:5},{label:"Jun",value:6},{label:"Jul",value:7},{label:"Aug",value:8},{label:"Sep",value:9},{label:"Oct",value:10},{label:"Nov",value:11},{label:"Dec",value:12}],i=a("9283"),u=a("2706"),l=a("3800"),c=a("6be2"),d=a("5a0c"),s=a.n(d),p=a("1c74");function m(e,t,a=!0){const n=[];return a&&n.push("UNKNOWN"),{id:e,helpText:t+" Year",appearInSummary:()=>!1,type:o["b"].TT_TEXT,config:{customKeyboard:[l["j"],[n,["DELETE"]]]}}}function b(e,t){return{id:e,helpText:t+" Month",appearInSummary:()=>!1,type:o["b"].TT_SELECT,options:()=>r}}function f(e,t){return{id:e,helpText:t+" Day",type:o["b"].TT_MONTHLY_DAYS,appearInSummary:()=>!1}}function D(e,t){return{id:e,helpText:t+" Estimated period",type:o["b"].TT_SELECT,appearInSummary:()=>!1,options:()=>[{label:"6 months ago",value:180},{label:"12 months ago",value:365},{label:"18 months ago",value:540},{label:"24 months ago",value:730},{label:"Over 2 years ago",value:730}]}}function v(e,t){return{id:e,helpText:t+" Age Estimate",type:o["b"].TT_NUMBER,appearInSummary:()=>!1,config:{keypad:c["e"]}}}function _(e){return parseInt(e)<10?"0"+e:e}async function y(e,t,a){if(t.defaultValue){const n=await t.defaultValue(e);if(n){const[e,t,o]=n.split("-");switch(a){case"Year":return e||"";case"Month":return parseInt(t)||"";case"Day":return parseInt(o)||""}}}return""}function g(e){return i["b"].toStandardHisDisplayFormat(e)}function h(e,t,a,n){if(t.minDate){const o=t.minDate(a,n);if(new Date(e)<new Date(o))return[`${g(e)} is less than minimum date of ${g(o)}`]}if(t.maxDate){const o=t.maxDate(a,n);if(o&&new Date(e)>new Date(o))return[`${g(e)} is greater than max date of  ${g(o)}`]}}function T(e,t=""){let a="",o="",l="",c="",d=!1;const T="year_"+e.id,O="month_"+e.id,j="day_"+e.id,w="age_estimate_"+e.id,I="duration_estimate_"+e.id,x=m(T,e.helpText,e.estimation.allowUnknown),k=b(O,e.helpText),E=f(j,e.helpText),S=v(w,e.helpText),N=D(I,e.helpText),V="boolean"===typeof e.estimation.allowUnknownMonthDay&&e.estimation.allowUnknownMonthDay,C=t=>!(t[T]&&t[T].value&&["Unknown"].includes(t[T].value))&&(!e.condition||e.condition(t)),$=(e,t)=>{const a=[{type:"year",value:o,default:"YYYY"},{type:"month",value:l,default:"MM"},{type:"day",value:c,default:"DD"}];return a.reduce((a,n)=>{const o=[null,void 0,"Unknown",""];return t===n.type?o.includes(e)?a.push(n.default):a.push(e):o.includes(n.value)?a.push(n.default):a.push(n.value),a},[]).join("-")};"function"===typeof e.init&&(x.init=e.init),x.updateHelpTextOnValue=e=>`${x.helpText} (${$(null===e||void 0===e?void 0:e.label,"year")})`,x.proxyID=e.id,x.unload=e=>o=e.value.toString(),x.config={...x.config,...e.config},x.defaultValue=t=>y(t,e,"Year"),x.condition=t=>!e.condition||e.condition(t),x.validation=(t,a,n)=>{if(e.required&&u["a"].required(t))return["Year cannot be empty"];const o=t?t.value:"";if(!e.estimation.allowUnknown&&o.toString().match(/unknown/i))return["Value unknown is not permitted"];if(o&&!["Unknown"].includes(o)&&isNaN(o)||o<1900)return["Invalid Year"];if(o&&"function"===typeof e.minDate){const t=i["b"].getYear(e.minDate(a,n));if(parseInt(o)<t)return[`Year of ${o} is less than Minimum year of ${t}`]}if(o&&"function"===typeof e.maxDate){const t=e.maxDate(a,n);if(t&&o>i["b"].getYear(t))return[`Year of ${o} exceeds Maximum year of ${i["b"].getYear(t)}`]}return null},x.summaryMapValue=()=>({label:e.summaryLabel||e.helpText,value:a?g(a):"Unknown"}),x.appearInSummary=(t,a)=>a===e.id,x.computedValue=t=>{if(a){const[n,o,r]=a.split("-");return a=`${t.value}-${o}-${r}`,e.computeValue(a,!1)}if(t&&"Unknown"===t.value)return a="",e.computeValue("Unknown",!1)},k.updateHelpTextOnValue=e=>`${k.helpText} (${$(null===e||void 0===e?void 0:e.label,"month")})`,k.proxyID=e.id,k.unload=e=>l=_(e.value.toString()),k.condition=e=>C(e),k.validation=e=>u["a"].required(e),k.defaultValue=t=>y(t,e,"Month"),V&&(k.options=()=>[...r,{label:"Unknown",value:"Unknown"}]),k.computedValue=(t,n)=>{if((""+t.value).match(/unknown/i))return a=n[T].value+"-07-15",e.computeValue(a,!0);if(a){const[n,o,r]=a.split("-"),i=_(""+t.value);return a=`${n}-${i}-${r}`,e.computeValue(a,!1)}},E.proxyID=e.id,E.updateHelpTextOnValue=e=>`${E.helpText} (${$(null===e||void 0===e?void 0:e.label,"day")})`,E.condition=e=>!(""+e[O].value).match(/unknown/i)&&C(e),E.validation=(t,n,r)=>u["a"].required(t)?["Day is required for date"]:(d=!!(""+t.value).match(/unknown/i),c=d?"15":_(""+t.value),a=`${o}-${l}-${c}`,h(a,e,n,r)),E.defaultValue=t=>y(t,e,"Day"),E.computedValue=()=>e.computeValue(a,d),E.unload=(t,a,n,o)=>{e.unload&&e.unload(t,a,n,o)},E.beforeNext=(t,n)=>!e.beforeNext||e.beforeNext(a,n),E.config={year:e=>e[T].value,month:e=>e[O].value},V||(E.config.keyboardActions=[]);const L=(t,a)=>{const n=["Unknown"===t[T].value,!e.condition||e.condition(t),e.estimation.estimationFieldType===a];return n.every(Boolean)};return S.proxyID=e.id,S.validation=(t,n,o)=>{if(t&&t.value>300)return["Age estimate is too high and exceeding hard limit of 300"];if(isNaN(parseInt(t.value.toString())))return["Please enter a valid number"];const r=/^(12[0-7]|1[01][0-9]|[1-9]?[0-9])$/;if(!t.value.toString().match(r))return["Not a valid age estimate"];const i=s()(p["e"].getSessionDate()).subtract(t.value,"years").year();return a=i+"-07-15",h(a,e,n,o)},S.condition=e=>L(e,n.AGE_ESTIMATE_FIELD),S.computedValue=()=>e.computeValue(a,!0),S.beforeNext=(t,n)=>!e.beforeNext||e.beforeNext(a,n),N.proxyID=e.id,N.validation=(t,n,o)=>u["a"].required(t)?["Please select an estimate"]:(a=s()(p["e"].getSessionDate()).subtract(t.value,"day").format(i["a"]),h(a,e,n,o)),N.condition=e=>L(e,n.MONTH_ESTIMATE_FIELD),N.computedValue=()=>e.computeValue(a,!0),N.beforeNext=(t,n)=>!e.beforeNext||e.beforeNext(a,n),[x,k,E,S,N]}(function(e){e["AGE_ESTIMATE_FIELD"]="age-estimate-field",e["MONTH_ESTIMATE_FIELD"]="month-period-estimate-field"})(n||(n={}))}}]);
//# sourceMappingURL=chunk-1f2c6e68.c4e263dc.js.map