(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ebfe8ecc"],{"0db2":function(e,t,a){"use strict";var o=a("7a23");const l={key:0,class:"ion-float-right ion-margin-end checkbox-label"},n={key:0,style:{background:"#f2f2f2",height:"100%",padding:".5rem","flex-grow":"1"}},r={style:{background:"#ffffff",height:"100%",padding:".5rem","flex-grow":"8"}},i={key:1,style:{background:"#f2f2f2",height:"100%",padding:".5rem","flex-grow":"1"}};function c(e,t,a,c,u,d){const s=Object(o["resolveComponent"])("ion-checkbox"),m=Object(o["resolveComponent"])("ion-label"),b=Object(o["resolveComponent"])("ion-input"),p=Object(o["resolveComponent"])("ion-note");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[e.model.label?(Object(o["openBlock"])(),Object(o["createBlock"])(m,{key:0,class:"ion-padding-bottom bold"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.model.label),1),e.allowUnknown?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",l,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.model.label)+" Unknown? ",1),Object(o["createVNode"])(s,{modelValue:e.isUnknown,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isUnknown=t)},null,8,["modelValue"])])):Object(o["createCommentVNode"])("",!0)]),_:1})):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),style:{width:"100%",height:"2.5rem",display:"flex","justify-content":"space-between"}},[e.prefix?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[Object(o["createVNode"])(m,{class:"checkbox-label bold"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.prefix),1)]),_:1})])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",r,[Object(o["createVNode"])(b,{class:"ion-no-margin ion-no-padding",modelValue:e.model.value,"onUpdate:modelValue":t[1]||(t[1]=t=>e.model.value=t),type:e.password?"password":"text",placeholder:e.model.placeholder,disabled:e.model.disabled||e.isUnknown,onIonFocus:t[2]||(t[2]=t=>e.model.error=""),onIonBlur:e.validate},null,8,["modelValue","type","placeholder","disabled","onIonBlur"])]),e.suffix?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createVNode"])(m,{class:"checkbox-label bold ion-float-right"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.suffix),1)]),_:1})])):Object(o["createCommentVNode"])("",!0)],2),e.model.error?(Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:1,color:"danger"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.model.error),1)]),_:1})):Object(o["createCommentVNode"])("",!0)],64)}var u=a("d867"),d=Object(o["defineComponent"])({name:"TextInput",props:{modelValue:{type:Object,default:()=>({})},allowUnknown:{type:Boolean,default:!1},form:{type:Object,default:()=>({})},prefix:{type:String,default:""},suffix:{type:String,default:""},password:{type:Boolean,default:!1}},components:{IonLabel:u["IonLabel"],IonInput:u["IonInput"],IonNote:u["IonNote"],IonCheckbox:u["IonCheckbox"]},emits:["update:modelValue"],setup(e,{emit:t}){const a=Object(o["ref"])(!1),l=Object(o["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)}),n=async()=>{if(l.value.required&&!l.value.value)return l.value.error="This field is required";if(!e.allowUnknown&&"Unknown"===l.value.value||"N/A"===l.value.value)return l.value.error="Unknown is not allowed";if(l.value.validation){const t=await l.value.validation({label:l.value.value,value:l.value.value},e.form);if(t&&t.length)return l.value.error+=t.toString()}return l.value.error=""};return Object(o["watch"])(a,e=>{e?(l.value.value="Unknown",l.value.error="",l.value.disabled=!0):(l.value.value="",l.value.disabled=!1)}),Object(o["watch"])(e.modelValue,e=>{"Unknown"===e.value?a.value||(a.value=!0):a.value=!1}),Object(o["onMounted"])(()=>{"Unknown"!==l.value.value||a.value||(a.value=!0)}),{validate:n,model:l,isUnknown:a}}}),s=a("d959"),m=a.n(s);const b=m()(d,[["render",c]]);t["a"]=b},"1f9a":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var o=a("ade3"),l=a("1c74"),n=a("ad60"),r=a("d10e");class i extends l["e"]{constructor(){super()}static create(e){return super.postJson("/person_attributes",e)}}var c=a("4db7");class u extends l["e"]{constructor(){super(),Object(o["a"])(this,"personId",void 0),this.personId=0}getPersonID(){return this.personId}setPersonID(e){this.personId=e}async registerPatient(e,t){await this.createPerson(e),await this.createPersonAttributes(t);const a=await this.createPatient();return await this.printPatient(),a}async registerGuardian(e){return this.createPerson(e)}updatePerson(e){return new r["a"](e).update(this.personId)}async createPerson(e){const t=await new r["a"](e).create();return this.personId=t.person_id,t}createPatient(){return n["a"].createPatient(this.personId)}async createPersonAttributes(e){for(const t in e)await i.create({...e[t],person_id:this.personId})}printPatient(){return new c["a"](this.personId).printNidLbl()}}},"2cef":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var o=a("1c74");class l extends o["e"]{constructor(){super()}static voidRelation(e,t,a){return o["e"].void(`people/${e}/relationships/${t}`,{reason:a})}static async amendRelation(e,t,a,o){return await l.voidRelation(e,a,"Updating guardian relationship"),l.createRelation(e,t,o)}static getRelations(){return super.getJson("types/relationships")}static createRelation(e,t,a){return super.postJson(`people/${e}/relationships`,{relationship_type_id:a,relation_id:t})}}},"4cb7":function(e,t,a){},"5ab5":function(e,t,a){"use strict";var o=a("7a23");const l={key:0},n={key:1},r={key:2,class:"ion-float-right ion-margin-end checkbox-label"},i={key:2,style:{display:"flex","justify-content":"flex-start"}},c={class:"ion-margin-top ion-padding-end"},u=["disabled"],d=Object(o["createElementVNode"])("option",{value:0,disabled:"",selected:"",hidden:""},"MM",-1),s=["value"];function m(e,t,a,m,b,p){const v=Object(o["resolveComponent"])("ion-checkbox"),O=Object(o["resolveComponent"])("ion-label"),j=Object(o["resolveComponent"])("ion-input"),f=Object(o["resolveComponent"])("ion-icon"),h=Object(o["resolveComponent"])("ion-button"),g=Object(o["resolveComponent"])("DatePicker"),y=Object(o["resolveComponent"])("ion-note");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[e.model.label?(Object(o["openBlock"])(),Object(o["createBlock"])(O,{key:0,class:"ion-padding-bottom bold"},{default:Object(o["withCtx"])(()=>[e.isEstimated?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",l,Object(o["toDisplayString"])(e.estimationLabel),1)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",n,Object(o["toDisplayString"])(e.model.label),1)),e.allowEstimation?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",r,[Object(o["createTextVNode"])(" Estimate "+Object(o["toDisplayString"])(e.model.label)+" ",1),Object(o["createVNode"])(v,{modelValue:e.isEstimated,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isEstimated=t)},null,8,["modelValue"])])):Object(o["createCommentVNode"])("",!0)]),_:1})):Object(o["createCommentVNode"])("",!0),e.isEstimated?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:1,type:"number",class:Object(o["normalizeClass"])(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),modelValue:e.age,"onUpdate:modelValue":t[1]||(t[1]=t=>e.age=t),placeholder:e.estimationLabel,disabled:e.model.disabled,min:1,onIonInput:e.onEstimate,onIonFocus:t[2]||(t[2]=()=>e.model.error=""),onIonBlur:e.validate},null,8,["class","modelValue","placeholder","disabled","onIonInput","onIonBlur"])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(g,{mode:"date",modelValue:e.pickerDate,"onUpdate:modelValue":t[3]||(t[3]=t=>e.pickerDate=t),"min-date":e.minDate,"max-date":e.maxDate,masks:{input:"YYYY-MM-DD"}},{default:Object(o["withCtx"])(({showPopover:t})=>[Object(o["createVNode"])(h,{onClick:t},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,{icon:e.calendar},null,8,["icon"])]),_:2},1032,["onClick"])]),_:1},8,["modelValue","min-date","max-date"])]),Object(o["createVNode"])(j,{modelValue:e.day,"onUpdate:modelValue":t[4]||(t[4]=t=>e.day=t),min:1,max:31,class:Object(o["normalizeClass"])(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),style:{width:"30%"},type:"number",placeholder:"DD",disabled:e.model.disabled,onIonFocus:t[5]||(t[5]=()=>e.model.error=""),onIonBlur:e.validate},null,8,["modelValue","class","disabled","onIonBlur"]),Object(o["withDirectives"])(Object(o["createElementVNode"])("select",{"onUpdate:modelValue":t[6]||(t[6]=t=>e.month=t),class:Object(o["normalizeClass"])(["ion-margin-top ion-margin-horizontal",e.model.error?"box-input-error":"box-input"]),style:Object(o["normalizeStyle"])([{"background-color":"#fff",width:"30%"},e.month?{color:"#000"}:{color:"#a0a0a0"}]),disabled:e.model.disabled,onFocus:t[7]||(t[7]=()=>e.model.error=""),onBlur:t[8]||(t[8]=(...t)=>e.validate&&e.validate(...t))},[d,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.months,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("option",{value:t+1,key:t},Object(o["toDisplayString"])(e),9,s))),128))],46,u),[[o["vModelSelect"],e.month]]),Object(o["createVNode"])(j,{modelValue:e.year,"onUpdate:modelValue":t[9]||(t[9]=t=>e.year=t),min:1900,class:Object(o["normalizeClass"])(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),type:"number",placeholder:"YYYY",disabled:e.model.disabled,onIonFocus:t[10]||(t[10]=()=>e.model.error=""),onIonBlur:e.validate},null,8,["modelValue","class","disabled","onIonBlur"])])),e.model.error?(Object(o["openBlock"])(),Object(o["createBlock"])(y,{key:3,color:"danger"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.model.error),1)]),_:1})):Object(o["createCommentVNode"])("",!0)],64)}var b=a("d867"),p=a("9283"),v=a("5a0c"),O=a.n(v),j=a("2706"),f=a("0ba8"),h=a("b5b2"),g=a("ff79"),y=a("0261"),V=Object(o["defineComponent"])({name:"DateInput",props:{modelValue:{type:Object,default:()=>({})},form:{type:Object,default:()=>({})},minDate:{type:String,default:""},maxDate:{type:String,default:""},allowEstimation:{type:Boolean,default:!1},estimationLabel:{type:String,default:"Estimate"}},components:{IonLabel:b["IonLabel"],IonInput:b["IonInput"],IonNote:b["IonNote"],IonCheckbox:b["IonCheckbox"],DatePicker:y["b"]},emits:["update:modelValue","isEstimated"],setup(e,{emit:t}){const a=Object(o["ref"])(!1),l=Object(o["ref"])(),n=Object(o["ref"])(e.modelValue.value?O()(e.modelValue.value).date():void 0),r=Object(o["ref"])(e.modelValue.value?O()(e.modelValue.value).month()+1:0),i=Object(o["ref"])(e.modelValue.value?O()(e.modelValue.value).year():void 0),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u=Object(o["ref"])(e.modelValue.value),d=Object(o["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)}),s=e=>{var t;d.value.error=null===(t=j["a"].isNumber({value:e.target.value}))||void 0===t?void 0:t.join(),d.value.error||(l.value=parseInt(e.target.value))},m=async()=>{let t="";if(a.value&&l.value)t=p["c"].toStandardHisFormat(p["c"].estimateDateFromAge(l.value));else if(n.value||r.value||i.value){const e=`${i.value}-${r.value}-${n.value}`;if(!e.match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))return d.value.error="Invalid date";t=p["c"].toStandardHisFormat(e)}if(d.value.required&&!t)return d.value.error="This field is required";if(e.minDate&&new Date(t)<new Date(e.minDate))return d.value.error=a.value?`Estimated period must be less than or equal to ${O()(t).diff(e.minDate,"years")} years`:"Date must be after "+e.minDate;if(e.maxDate&&new Date(t)>new Date(e.maxDate))return d.value.error=a.value?`Estimated period must be more than or equal to ${O()(t).diff(e.maxDate,"years")} years`:"Date must be before "+e.maxDate;if(d.value.validation){const a=await d.value.validation({label:t,value:t},e.form);if(a&&a.length)return d.value.error+=a.toString()}d.value.error="",d.value.value=t};Object(o["watch"])(u,e=>{n.value=O()(e).date(),r.value=O()(e).month()+1,i.value=O()(e).year(),m()});const b=()=>{l.value=void 0,n.value=void 0,r.value=0,i.value=void 0,d.value.error="",u.value=""};return Object(o["watch"])(()=>e.modelValue.value,e=>{n.value=e?O()(e).date():void 0,r.value=e?O()(e).month()+1:0,i.value=e?O()(e).year():void 0,u.value=e}),Object(o["watch"])([()=>e.minDate,()=>e.maxDate],()=>m()),Object(o["watch"])(a,e=>{b(),t("isEstimated",e)}),Object(o["onMounted"])(()=>f["b"].on(h["a"].ON_CLEAR,b)),{validate:m,onEstimate:s,pickerDate:u,isEstimated:a,model:d,age:l,day:n,month:r,year:i,months:c,calendar:g["calendar"]}}}),w=(a("a69e"),a("d959")),N=a.n(w);const k=N()(V,[["render",m]]);t["a"]=k},"5e76":function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return s})),a.d(t,"e",(function(){return m}));a("13d5"),a("14d9");var o=a("7957"),l=a("0011"),n=a("2ef0"),r=a("b211"),i=a("b5e4");async function c(e){for(const t in e){if(e[t].required&&Object(n["isEmpty"])(e[t].value)){e[t].error="This field is required";continue}if("function"!==typeof e[t].validation){e[t].error="";continue}const a="object"===typeof e[t].value?e[t].value:{label:e[t].value,value:e[t].value},o=await e[t].validation(a,e);o&&o.length>0?(e[t].error=o.toString(),console.log(t,e[t].error)):e[t].error=""}return Object.values(e).every(({error:e})=>!e)}function u(e,t=!1){const a={},o={};for(const n in e)if(e[n].value){const r=t?Object(l["j"])(n):n;a[r]=e[n].value,"function"===typeof e[n].computedValue&&(o[r]=e[n].computedValue(e[n].value,e))}return{formData:a,computedFormData:o}}function d(e,t=""){const a=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const a=t.obs?t.obs:t;return Array.isArray(a)?e=e.concat(a):e.push(a),e},[]);return Promise.all(a)}async function s(e,t){return await Promise.all(t.map(async t=>o["a"].buildGroupValueCoded(e,t.label,t.isChecked?"Yes":"No")))}async function m(e,t,a){if(!await c(e))return;const o=(null===a||void 0===a?void 0:a.showloader)||!1;try{o&&await r["a"].show();const{formData:l,computedFormData:n}=u(e,null===a||void 0===a?void 0:a.underscoreKeys);await t(l,n)}catch(l){Object(i["e"])(""+l),console.error(l)}finally{o&&await r["a"].hide()}}},6664:function(e,t,a){},"93c6":function(e,t,a){"use strict";a("6664")},a69e:function(e,t,a){"use strict";a("4cb7")},b211:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var o=a("d867");const l={async show(e){return(await o["loadingController"].create({message:e||"Loading...",spinner:"crescent",translucent:!0})).present()},async hide(){o["loadingController"].getTop().then(e=>e?o["loadingController"].dismiss():null)}}},b5b2:function(e,t,a){"use strict";var o;a.d(t,"a",(function(){return o})),function(e){e["RELOAD_PATIENT_DATA"]="reload_patient_data",e["RELOAD_PATIENT_VISIT_DATA"]="reload_patient_visit_data",e["RELOAD_GUARDIAN_DATA"]="reload_guardian_data",e["RELOAD_LATEST_VL_RESULT"]="reload_latest_vl_result",e["RELOAD_STAGING_INFORMATION"]="reload_staging_info",e["ON_CLEAR"]="on_clear",e["ON_INITIAL_VISIT_DATE"]="on_initital_visit_date"}(o||(o={}))},be95:function(e,t,a){"use strict";var o=a("7a23");const l={key:0,class:"ion-float-right ion-margin-end checkbox-label"},n={class:"inner-input-box"},r={key:0,class:"input-options"},i={class:"input-icon"};function c(e,t,a,c,u,d){const s=Object(o["resolveComponent"])("ion-checkbox"),m=Object(o["resolveComponent"])("ion-label"),b=Object(o["resolveComponent"])("ion-input"),p=Object(o["resolveComponent"])("ion-icon"),v=Object(o["resolveComponent"])("ion-chip"),O=Object(o["resolveComponent"])("ion-item"),j=Object(o["resolveComponent"])("ion-list"),f=Object(o["resolveComponent"])("ion-note");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[e.model.label?(Object(o["openBlock"])(),Object(o["createBlock"])(m,{key:0,class:"ion-padding-bottom bold"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.model.label),1),e.allowCustom?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",l,[Object(o["createTextVNode"])(" Add Custom "+Object(o["toDisplayString"])(e.model.label)+"? ",1),Object(o["createVNode"])(s,{modelValue:e.isCustom,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isCustom=t),onIonChange:t[1]||(t[1]=t=>e.model.value="")},null,8,["modelValue"])])):Object(o["createCommentVNode"])("",!0)]),_:1})):Object(o["createCommentVNode"])("",!0),e.isCustom?(Object(o["openBlock"])(),Object(o["createBlock"])(b,{key:1,class:Object(o["normalizeClass"])(["box-input",{"box-input-error":e.model.error,"ion-margin-top":e.model.label}]),modelValue:e.customOption,"onUpdate:modelValue":t[2]||(t[2]=t=>e.customOption=t),placeholder:e.model.placeholder||e.model.label,disabled:e.model.disabled,onIonFocus:t[3]||(t[3]=()=>e.model.error=""),onIonBlur:e.validate,onIonInput:e.onCustomValue},null,8,["class","modelValue","placeholder","disabled","onIonBlur","onIonInput"])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:2,class:Object(o["normalizeClass"])(["outer-input-box box-input",{"box-input-error":e.model.error,"ion-margin-top":e.model.label}])},[Object(o["createElementVNode"])("div",n,[Object(o["createElementVNode"])("div",{style:{display:"flex","flex-wrap":"wrap",width:"100%"},onClick:t[6]||(t[6]=(...t)=>e.onShowOptions&&e.onShowOptions(...t))},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.tags,(t,a)=>(Object(o["openBlock"])(),Object(o["createBlock"])(v,{key:a},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.label),1)]),_:2},1024),Object(o["createVNode"])(p,{icon:e.closeCircle,color:"danger",onClick:a=>e.diselect(t),style:{"z-index":"20"}},null,8,["icon","onClick"])]),_:2},1024))),128)),Object(o["createVNode"])(b,{disabled:e.model.disabled,placeholder:e.showPlaceholder?e.model.placeholder||"select option":"",modelValue:e.filter,"onUpdate:modelValue":t[4]||(t[4]=t=>e.filter=t),class:"search-input",ref:"searchInput",onKeydown:t[5]||(t[5]=t=>e.handleKeyDown(t))},null,8,["disabled","placeholder","modelValue"])]),e.showOptions?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createVNode"])(j,null,{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.filteredOptions,(t,a)=>{var l;return Object(o["openBlock"])(),Object(o["createBlock"])(O,{key:a,lines:a+1===e.filteredOptions.length?"none":"",color:t.value===(null===(l=e.focusedOption)||void 0===l?void 0:l.value)?"light":"",onClick:a=>e.onSelect(t)},{default:Object(o["withCtx"])(()=>[e.multiple?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:0,class:"input-option-checkbox",slot:"start",modelValue:t.isChecked,"onUpdate:modelValue":e=>t.isChecked=e},null,8,["modelValue","onUpdate:modelValue"])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.label),1)]),_:2},1024)]),_:2},1032,["lines","color","onClick"])}),128))]),_:1})])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",i,[e.filter||e.tags.length>0?(Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:0,icon:e.close,onClick:e.onReset},null,8,["icon","onClick"])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(p,{icon:e.showOptions?e.chevronUp:e.chevronDown,onClick:t[7]||(t[7]=t=>e.showOptions?e.onCloseOptions():e.onShowOptions())},null,8,["icon"])])])],2)),e.model.error?(Object(o["openBlock"])(),Object(o["createBlock"])(f,{key:3,color:"danger"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.model.error),1)]),_:1})):Object(o["createCommentVNode"])("",!0)],64)}a("14d9");var u=a("d867"),d=a("ff79"),s=a("2ef0"),m=Object(o["defineComponent"])({name:"SelectInput",props:{modelValue:{type:Object,default:()=>({})},form:{type:Object,default:()=>({})},options:{type:Array,default:()=>[]},asyncOptions:{type:Function,required:!1},allowCustom:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},infiniteScrolling:{type:Boolean,default:!1}},components:{IonLabel:u["IonLabel"],IonInput:u["IonInput"],IonNote:u["IonNote"],IonIcon:u["IonIcon"],IonCheckbox:u["IonCheckbox"],IonList:u["IonList"],IonChip:u["IonChip"],IonItem:u["IonItem"]},emits:["update:modelValue"],setup(e,{emit:t}){const a=Object(o["ref"])(!1),l=Object(o["ref"])(""),n=Object(o["ref"])(),r=Object(o["ref"])(!1),i=Object(o["ref"])(),c=Object(o["ref"])(""),u=Object(o["ref"])([]),m=Object(o["ref"])(1),b=Object(o["computed"])(()=>e.multiple?u.value.filter(({isChecked:e})=>e):n.value?[n.value]:[]),p=Object(o["computed"])(()=>!c.value&&Object(s["isEmpty"])(b.value)&&!r.value),v=Object(o["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)}),O=()=>{c.value="",n.value=void 0,u.value.forEach(e=>e.isChecked=!1)},j=()=>{if(n.value=void 0,Object(s["isEmpty"])(v.value.value))return O();if(Array.isArray(v.value.value)&&e.multiple)return v.value.value.forEach(e=>{const t=u.value.findIndex(({value:t})=>t===e.value);-1===t?u.value.push({...e,isChecked:!0}):u.value[t].isChecked=!0});const t=u.value.find(e=>e.value===v.value.value);n.value=t||{label:v.value.value,value:v.value.value}},f=async()=>{const t="function"===typeof e.asyncOptions?await e.asyncOptions(c.value):e.options.filter(({label:e})=>e.toLowerCase().includes(c.value.toLowerCase()));b.value.forEach(e=>{const a=t.findIndex(t=>t.value===e.value);-1===a?t.push(e):t[a].isChecked=!0}),u.value=t},h=async()=>{if(v.value.required&&Object(s["isEmpty"])(v.value.value))return v.value.error="This field is required";if(v.value.validation){const t=await v.value.validation({label:v.value.value,value:v.value.value},e.form);if(t&&t.length)return v.value.error+=t.toString()}return v.value.error=""},g=()=>{r.value=!1,v.value.value=e.multiple?b.value:Object(s["isEmpty"])(b.value)?void 0:b.value[0],c.value="",h()},y=()=>{v.value.disabled||(r.value=!0,v.value.error="")},V=()=>{v.value.value={label:l.value,value:l.value}},w=t=>{e.multiple||(n.value=t,g()),v.value.value=e.multiple?b.value:Object(s["isEmpty"])(b.value)?void 0:b.value[0],c.value=""},N=t=>e.multiple?t.isChecked=!1:n.value=void 0,k=e=>{e.preventDefault();const t=u.value.indexOf(i.value)+1;i.value=u.value[t]||u.value[0]},C=e=>{e.preventDefault();const t=u.value.indexOf(i.value)-1;i.value=u.value[t]||u.value[u.value.length-1]},x=e=>{switch(r.value||(r.value=!0),e.key){case"ArrowDown":k(e);break;case"ArrowUp":C(e);break;case" ":case"Enter":w(i.value);break;case"Escape":g();break}};return Object(o["watch"])(c,async()=>{m.value++,await f()}),Object(o["watch"])([()=>e.options,()=>e.asyncOptions],async()=>f()),Object(o["watch"])(()=>e.modelValue.value,e=>Object(s["isEmpty"])(e)&&j(),{deep:!0,immediate:!0}),Object(o["watch"])(r,e=>e&&(i.value=n.value||u.value[0])),Object(o["onMounted"])(async()=>{await f(),j(),addEventListener("click",e=>{const t=e.target.closest(".inner-input-box");!t&&r.value&&g()})}),Object(o["onBeforeUnmount"])(()=>removeEventListener("click",e=>console.log(e))),{validate:h,onSelect:w,onReset:O,onShowOptions:y,onCloseOptions:g,diselect:N,onCustomValue:V,handleKeyDown:x,model:v,customOption:l,isCustom:a,chevronDown:d["chevronDown"],chevronUp:d["chevronUp"],close:d["close"],closeCircle:d["closeCircle"],selectedOption:n,showOptions:r,focusedOption:i,showPlaceholder:p,filteredOptions:u,filter:c,tags:b}}}),b=(a("93c6"),a("d959")),p=a.n(b);const v=p()(m,[["render",c],["__scopeId","data-v-6a10da64"]]);t["a"]=v},d10e:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var o=a("ade3"),l=a("1c74");class n extends l["e"]{constructor(e){super(),Object(o["a"])(this,"person",void 0),this.person=e}create(){return l["e"].postJson("/people",this.person)}update(e){return l["e"].putJson("people/"+e,{...this.person,program_id:l["e"].getProgramID()})}static searchFamilyName(e){return super.getJson("/search/family_name",{search_string:e})}static searchGivenName(e){return super.getJson("/search/given_name",{search_string:e})}static async getPersonFullName(e){const t=await super.getJson(`/people/${e}/names`);return t&&t.length?t[0].given_name+" "+t[0].family_name:""}}},e3d3:function(e,t,a){"use strict";a.r(t);var o=a("7a23");const l=Object(o["createElementVNode"])("h1",null,"New Patient Registration",-1),n=Object(o["createElementVNode"])("b",null,"Personal Details",-1),r=Object(o["createElementVNode"])("b",null,"Guardian details",-1),i={class:"ion-margin-start checkbox-label"};function c(e,t,a,c,u,d){const s=Object(o["resolveComponent"])("ion-col"),m=Object(o["resolveComponent"])("ion-row"),b=Object(o["resolveComponent"])("ion-title"),p=Object(o["resolveComponent"])("TextInput"),v=Object(o["resolveComponent"])("DateInput"),O=Object(o["resolveComponent"])("SelectInput"),j=Object(o["resolveComponent"])("ion-checkbox"),f=Object(o["resolveComponent"])("ion-button"),h=Object(o["resolveComponent"])("ion-grid"),g=Object(o["resolveComponent"])("Layout");return Object(o["openBlock"])(),Object(o["createBlock"])(g,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{class:"ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[l]),_:1})]),_:1}),Object(o["createVNode"])(m,{class:"his-card"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{size:"12"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{class:"ion-text-center ion-margin-vertical"},{default:Object(o["withCtx"])(()=>[n]),_:1}),Object(o["createVNode"])(m,{class:"ion-margin-top ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{size:"4",class:"ion-margin-top ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{modelValue:e.patient.givenName,"onUpdate:modelValue":t[0]||(t[0]=t=>e.patient.givenName=t)},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(s,{size:"4",class:"ion-margin-top ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{modelValue:e.patient.middleName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.patient.middleName=t)},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(s,{size:"4",class:"ion-margin-top ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{modelValue:e.patient.familyName,"onUpdate:modelValue":t[2]||(t[2]=t=>e.patient.familyName=t)},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(s,{size:"8",class:"ion-margin-top ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{modelValue:e.patient.birthdate,"onUpdate:modelValue":t[3]||(t[3]=t=>e.patient.birthdate=t),allowEstimation:!0,estimationLabel:"Estimate Age",minDate:"1920-01-01",maxDate:e.today,onIsEstimated:t[4]||(t[4]=t=>e.isBirthdateEstimated=t)},null,8,["modelValue","maxDate"])]),_:1}),Object(o["createVNode"])(s,{size:"4",class:"ion-margin-top ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.patient.gender,"onUpdate:modelValue":t[5]||(t[5]=t=>e.patient.gender=t),options:e.genderOptions},null,8,["modelValue","options"])]),_:1}),Object(o["createVNode"])(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{modelValue:e.patient.cellPhoneNumber,"onUpdate:modelValue":t[6]||(t[6]=t=>e.patient.cellPhoneNumber=t),allowUnknown:""},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.patient.homeVillage,"onUpdate:modelValue":t[7]||(t[7]=t=>e.patient.homeVillage=t),asyncOptions:e.getVillagesByName,allowCustom:""},null,8,["modelValue","asyncOptions"])]),_:1}),Object(o["createVNode"])(s,{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.patient.landmark,"onUpdate:modelValue":t[8]||(t[8]=t=>e.patient.landmark=t),options:e.landmarks,allowCustom:""},null,8,["modelValue","options"])]),_:1})]),_:1}),Object(o["createVNode"])(b,{class:"ion-text-center ion-margin-vertical ion-padding-top"},{default:Object(o["withCtx"])(()=>[r,Object(o["createElementVNode"])("span",i,[Object(o["createTextVNode"])(" Guardian Details Unknown? "),Object(o["createVNode"])(j,{modelValue:e.guardianAbsent,"onUpdate:modelValue":t[9]||(t[9]=t=>e.guardianAbsent=t)},null,8,["modelValue"])])]),_:1}),Object(o["createVNode"])(m,{class:"ion-margin-top ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{modelValue:e.guardian.givenName,"onUpdate:modelValue":t[10]||(t[10]=t=>e.guardian.givenName=t)},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{modelValue:e.guardian.familyName,"onUpdate:modelValue":t[11]||(t[11]=t=>e.guardian.familyName=t)},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(s,{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{modelValue:e.guardian.cellPhoneNumber,"onUpdate:modelValue":t[12]||(t[12]=t=>e.guardian.cellPhoneNumber=t),allowUnknown:""},null,8,["modelValue"])]),_:1})]),_:1}),Object(o["createVNode"])(f,{class:"ion-margin-top ion-float-right",onClick:e.onFinish,size:"large",color:"success"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Finish")]),_:1},8,["onClick"]),Object(o["createVNode"])(f,{class:"ion-margin-top ion-float-right",onClick:e.onClear,size:"large",color:"warning"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Clear")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})}a("14d9");var u=a("8d56"),d=a("d867"),s=a("b5e4"),m=a("2706"),b=a("5713"),p=a("2ef0"),v=a("1f9a"),O=a("6605"),j=a("2cef"),f=a("0db2"),h=a("5ab5"),g=a("be95"),y=a("e86e"),V=a("5e76"),w=a("0011"),N=a("b211"),k=a("0ba8"),C=a("b5b2"),x=a("5a0c"),I=a.n(x),_=a("9283"),E=Object(o["defineComponent"])({components:{Layout:u["a"],IonGrid:d["IonGrid"],IonRow:d["IonRow"],IonCol:d["IonCol"],TextInput:f["a"],DateInput:h["a"],SelectInput:g["a"],IonCheckbox:d["IonCheckbox"]},setup(){const e=Object(O["i"])(),t=I()().format(_["b"]),a=Object(o["ref"])(!1),l=Object(o["ref"])(!1),n=Object(y["e"])(),r=[{label:"Male",value:"M"},{label:"Female",value:"F"}],i=Object(o["reactive"])({givenName:{label:"First Name",value:"",placeholder:"Enter First Name",required:!0,error:""},familyName:{label:"last Name",value:"",placeholder:"Enter Last Name",required:!0},middleName:{label:"middle Name",value:"",placeholder:"Enter middle Name"},gender:{value:"",required:!0,label:"Gender",placeholder:"select gender"},birthdate:{value:"",label:"Date of Birth",required:!0},cellPhoneNumber:{value:"",required:!0,label:"Cellphone Number",placeholder:"Enter cellphone number e.g. 0991234567",validation:async e=>"Unknown"!==e.value&&m["a"].isMWPhoneNumber(e)},homeVillage:{value:"",label:"Home Village",placeholder:"Home Village",required:!0},landmark:{value:"",label:"Landmark",placeholder:"Closest Landmark or Plot Number",required:!0}}),c=Object(o["reactive"])({givenName:{label:"First Name",value:"",placeholder:"Enter First Name",required:!0},familyName:{label:"Last Name",value:"",placeholder:"Enter Last Name",required:!0},cellPhoneNumber:{value:"",required:!0,label:"Cellphone Number",placeholder:"Enter cellphone number e.g. 0991234567",validation:async e=>"Unknown"!==e.value&&m["a"].isMWPhoneNumber(e)}});Object(o["watch"])(l,e=>{e?(c.givenName.value="Unknown",c.familyName.value="Unknown",c.cellPhoneNumber.value="Unknown",c.givenName.disabled=!0,c.familyName.disabled=!0,c.givenName.error="",c.familyName.error="",c.cellPhoneNumber.error=""):(c.givenName.value="",c.familyName.value="",c.cellPhoneNumber.value="",c.givenName.disabled=!1,c.familyName.disabled=!1)});const u=async()=>{if(await Object(s["a"])("Are you sure you want to clear all fields?")){for(const e in i)i[e].value=void 0,i[e].error="";for(const e in c)c[e].value=void 0,c[e].error="";k["b"].emit(C["a"].ON_CLEAR)}},d=(e,t={})=>{const a={facility_name:null,occupation:null};for(const o in e)a[Object(w["j"])(o)]=e[o];return{...a,...t}},f=async e=>{var t;const a=Object(p["isEmpty"])(e)||null===e||void 0===e||null===(t=e.other)||void 0===t||!t.traditional_authority_id?null:await b["a"].getTraditionalAuthorityById(e.other.traditional_authority_id),o=Object(p["isEmpty"])(a)?null:await b["a"].getDistrictByID(a[0].district_id);return{home_district:Object(p["isEmpty"])(o)?"N/A":o[0].name,home_traditional_authority:Object(p["isEmpty"])(a)?"N/A":a[0].name,home_village:(null===e||void 0===e?void 0:e.label)||"N/A",current_district:Object(p["isEmpty"])(o)?"N/A":o[0].name,current_traditional_authority:Object(p["isEmpty"])(a)?"N/A":a[0].name,current_village:(null===e||void 0===e?void 0:e.label)||"N/A"}},h=async()=>{const t=await Object(V["a"])(i),o=!!l.value||await Object(V["a"])(c);if(t&&o){await N["a"].show("Saving...");try{const t=Object(V["c"])(i).formData,n=new v["a"],r=await f(t.homeVillage),u=d(t,{...r,isPatient:!0,patient_type:null,gender:t.gender.value,landmark:t.landmark.value,birthdate_estimated:a.value?"Yes":"No",relationship:l.value?"No":"Yes"});await n.createPerson(u),await n.createPatient();const s=n.getPersonID();if(!l.value&&o){const{formData:e}=Object(V["c"])(c),t=await f(),a=d(e,{...t,middle_name:"",gender:"N/A",birthdate:"N/A",birthdate_estimated:"N/A",landmark:"N/A",relationship:"N/A",patient_type:"",isPatient:!1,patient_id:s});await n.registerGuardian(a);const o=n.getPersonID();await j["a"].createRelation(s,o,13)}N["a"].hide(),e.push(`/emc/registration/${s}/true`)}catch(n){console.log(n),N["a"].hide()}}};return{today:t,patient:i,guardian:c,landmarks:n,genderOptions:r,guardianAbsent:l,isBirthdateEstimated:a,onClear:u,onFinish:h,getVillagesByName:y["j"]}}}),D=a("d959"),B=a.n(D);const A=B()(E,[["render",c]]);t["default"]=A},e86e:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"g",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"a",(function(){return d})),a.d(t,"h",(function(){return s})),a.d(t,"i",(function(){return m})),a.d(t,"j",(function(){return b})),a.d(t,"e",(function(){return p}));var o=a("5713"),l=a("2ef0");async function n(e=""){const t=await o["a"].getFacilities({name:e});return t.filter(e=>!Object(l["isEmpty"])(e)&&""!=e.name.trim()).map(e=>({label:e.name,value:e.location_id,other:e}))}async function r(e=""){const t=await o["a"].getLabs({search_name:e});return t.map(e=>({label:e,value:e}))}async function i(e=""){const t=await o["a"].getFacilities({name:e,tag:"Facility adult sections"});return t.map(e=>({label:e.name,value:e.name,other:e}))}async function c(){const e=await o["a"].getSpecialistClinics();return e.map(e=>({label:e.name,value:e.name,other:e}))}async function u(){const e=await o["a"].getRegions();return e.map(e=>({label:e.name,value:e.region_id,other:e}))}async function d(e){const t=await o["a"].getDistricts(e);return t.map(e=>({label:e.name,value:e.district_id,other:e}))}async function s(e,t=""){const a=await o["a"].getTraditionalAuthorities(e,t);return a.map(e=>({label:e.name,value:e.traditional_authority_id,other:e}))}async function m(e,t=""){const a=await o["a"].getVillages(e,t);return a.map(e=>({label:e.name,value:e.village_id,other:e}))}async function b(e="a",t=1){const a=await o["a"].getVillagesByName(e,t);return a.map(e=>({label:e.name,value:e.village_id,other:e}))}function p(){const e=["Catholic Church","CCAP","Seventh Day","Mosque","Primary School","Borehole","Secondary School","College","Market","Football Ground","Other"];return e.map(e=>({label:e,value:e,other:{code:e}}))}}}]);
//# sourceMappingURL=chunk-ebfe8ecc.d848e8b0.js.map