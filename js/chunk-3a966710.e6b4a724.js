(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a966710"],{3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"l",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"k",(function(){return s})),n.d(t,"i",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"c",(function(){return h})),n.d(t,"h",(function(){return m})),n.d(t,"f",(function(){return p}));const a=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],i=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],o=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],r=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],s=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],c=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],l=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],u=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],d=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],h=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],m=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],p=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},7052:function(e,t,n){"use strict";n.r(t);var a=n("7a23");function i(e,t,n,i,o,r){const s=Object(a["resolveComponent"])("his-standard-form");return Object(a["openBlock"])(),Object(a["createBlock"])(s,{fields:e.fields,activeField:e.activeField,onFinishAction:e.onFinish,skipSummary:!0},null,8,["fields","activeField","onFinishAction"])}var o=n("d95e"),r=n("7920"),s=n("3800"),c=n("2706");class l{constructor(){this.BASE30_DIGITS_INDEX={},this.BASE30_DIGITS="0123456789ABCDEFGHJKLMNPRTVWXY".split(""),this.BASE30_DIGITS.forEach((e,t)=>this.BASE30_DIGITS_INDEX[e]=t)}convertFromDecimal(e,t=30){if(t<2||t>30)throw"Invalid base ${toBase}";let n="";while(e>0)n=this.BASE30_DIGITS[e%t]+n,e=Math.floor(e/t);return n}static calculateLuhnCheckDigit(e){const t=e.toString().split("").map(e=>Number.parseInt(e,10)),n=t.length%2;let a=0;t.forEach((e,t)=>{t%2===n&&(e*=2),e>9&&(e-=9),a+=e});const i=a%10;return 0===i?0:10-i}isValidDHACode(e){try{const t=this.convertToDecimal(e).toString(),n=(Number.parseInt(t[0],10),l.calculateLuhnCheckDigit(10*Number.parseInt(t,10)));return 0===n}catch(t){return console.error(t),!1}}convertToDecimal(e){if(0==e.length)return 0;const t=this.BASE30_DIGITS_INDEX[e[0]];if(void 0===t||null===t)throw"Invalid base ${fromBase} number: ${number}";return t*30**(e.length-1)+this.convertToDecimal(e.slice(1))}}var u=n("9283"),d=n("3d6c"),h=n("b5e4"),m=n("e86e"),p=n("1c74"),f=n("2ef0"),b=Object(a["defineComponent"])({components:{HisStandardForm:r["a"]},data:()=>({activeField:"",fields:[],drugs:[],selectedDrugs:[],barcode:"",stockService:{}}),methods:{async onFinish(e){const t=e.enter_batches;let n=[];for(let i=0;i<t.length;i++){const o=t[i].value,r=d["a"].getPackSize(o.drug_id),s=r*o.tins,c={},l={reallocation_code:e.authorization.value,quantity:s,reason:e.reasons.value};try{if("Relocations"===e.task.value){c["location_id"]=e.relocation_location.value;const t=await this.stockService.relocateItems(o.id,{...l,...c});t||n.push("Could not save record for"+d["a"].getShortName(o.drug_id))}else{const e=await this.stockService.disposeItems(o.id,{...l,...c});e||n.push("Could not save record for"+d["a"].getShortName(o.drug_id))}}catch(a){a instanceof p["a"]&&!Object(f["isEmpty"])(a.errors)?n=n.concat(a.errors):n.push(a),console.log(a)}}0===n.length?(Object(h["d"])("Stock succesfully moved"),this.$router.push("/")):Object(h["c"])(""+n.join(","))},getFields(){return[{id:"task",helpText:"Select task",type:o["b"].TT_SELECT,validation:e=>c["a"].required(e),options:()=>[{label:"Relocations",value:"Relocations"},{label:"Disposal",value:"Disposal"}]},{id:"relocation_location",helpText:"Destination",type:o["b"].TT_SELECT,validation:e=>c["a"].required(e)||c["a"].notTheSame(e.label,""+d["a"].getLocationName()),condition:e=>"Relocations"===e.task.value,options:(e,t="")=>Object(m["b"])(t),computedValue:e=>e.label,config:{showKeyboard:!0,isFilterDataViaApi:!0}},{id:"date",dynamicHelpText:e=>"Date of "+e.task.label,helpText:"Set date",type:o["b"].TT_FULL_DATE,validation:e=>c["a"].required(e)},{id:"select drugs",helpText:"Select drugs",type:o["b"].TT_MULTIPLE_SELECT,requireNext:!0,validation:e=>c["a"].required(e),options:async(e,t)=>{const n=await this.getItems();return n.map(e=>(e.isChecked=t.filter(t=>t.label===e.label).length>=1,e))},unload:e=>this.selectedDrugs=e},{id:"enter_batches",helpText:"Batch entry",type:o["b"].TT_BATCH_MOVEMENT,beforeNext:(e,t,n,{currentFieldContext:a})=>{const i=e=>e.map((e,t)=>""+e.label).join(" & "),o=a.drugs.filter(e=>e.entries.map(e=>!e.tins).every(Boolean));if(!Object(f["isEmpty"])(o)){const e=i(o);return Object(h["e"])("Please fix partial batch entries for drugs: "+e),!1}return!0},options:()=>this.selectedDrugs,validation:e=>c["a"].required(e)},{id:"authorization",helpText:"Enter authorization code",type:o["b"].TT_TEXT,config:{customKeyboard:[s["c"],[["Delete"]]]},validation:e=>c["a"].validateSeries([()=>c["a"].required(e),()=>{const t=e.value,n=new l;return n.isValidDHACode(t.toUpperCase())?null:["Invalid authorization code"]}])},{id:"reasons",helpText:"Select reason",type:o["b"].TT_SELECT,validation:e=>c["a"].required(e),options:e=>this.getReasons(e)},{id:"summary",helpText:"Summary",type:o["b"].TT_TABLE_VIEWER,options:e=>this.buildResults(e),config:{hiddenFooterBtns:["Clear"]}}]},buildResults(e){const t="Relocations"===e.task.value,n=["Drug","Total Tins","Expiry date","Authorization code"];t&&n.push("Relocation");const a=e.enter_batches.map(n=>{const a=n.value,i=[d["a"].getShortName(a.drug_id),a.tins,u["c"].toStandardHisDisplayFormat(a.expiry_date),e.authorization.value.toUpperCase()];return t&&i.push(e.relocation_location.label),i});return[{label:"Confirm entry",value:"Table",other:{columns:n,rows:a}}]},prepDrugs(e){const t=[],n=this.barcode;return e.enter_batches.value.forEach(a=>{t.push({batch_number:a.batchNumber,items:[{barcode:n,drug_id:a.drugID,expiry_date:a.expiry,quantity:parseInt(a.tabs)*parseInt(a.tins),delivery_date:e.date.value}]})}),t},selectAll(e){return e.map(e=>(e.isChecked=!0,e))},async getItems(){const e=await this.stockService.getItems();return this.formatDrugs(e)},mapVal(e){return e.map(e=>({label:e,value:e}))},getReasons(e){return"Relocations"===e.task.value?this.mapVal(["Transfer to another facility/relocation","For trainings"]):this.mapVal(["Expired","Damaged","Phased out","Banned","Missing"])},formatDrugs(e){return e.map(e=>({label:`${d["a"].getShortName(e.drug_id)} (${d["a"].getPackSize(e.drug_id)}) Expiry date: ${u["c"].toStandardHisDisplayFormat(e.expiry_date)} \n          Batch (${e.batch_number})\n          `,value:e}))}},created(){this.stockService=new d["a"],this.fields=this.getFields()}}),g=n("d959"),v=n.n(g);const y=v()(b,[["render",i]]);t["default"]=y},7920:function(e,t,n){"use strict";var a=n("7a23");function i(e,t,n,i,o,r){return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,8,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var o=n("9441"),r=Object(a["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:o["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=n("d959"),c=n.n(s);const l=c()(r,[["render",i]]);t["a"]=l},e86e:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return m})),n.d(t,"e",(function(){return p}));var a=n("5713"),i=n("2ef0");async function o(e=""){const t=await a["a"].getFacilities({name:e});return t.filter(e=>!Object(i["isEmpty"])(e)&&""!=e.name.trim()).map(e=>({label:e.name,value:e.location_id,other:e}))}async function r(e=""){const t=await a["a"].getLabs({search_name:e});return t.map(e=>({label:e,value:e}))}async function s(e=""){const t=await a["a"].getFacilities({name:e,tag:"Facility adult sections"});return t.map(e=>({label:e.name,value:e.name,other:e}))}async function c(){const e=await a["a"].getSpecialistClinics();return e.map(e=>({label:e.name,value:e.name,other:e}))}async function l(){const e=await a["a"].getRegions();return e.map(e=>({label:e.name,value:e.region_id,other:e}))}async function u(e){const t=await a["a"].getDistricts(e);return t.map(e=>({label:e.name,value:e.district_id,other:e}))}async function d(e,t=""){const n=await a["a"].getTraditionalAuthorities(e,t);return n.map(e=>({label:e.name,value:e.traditional_authority_id,other:e}))}async function h(e,t=""){const n=await a["a"].getVillages(e,t);return n.map(e=>({label:e.name,value:e.village_id,other:e}))}async function m(e="a",t=1){const n=await a["a"].getVillagesByName(e,t);return n.map(e=>({label:e.name,value:e.village_id,other:e}))}function p(){const e=["Catholic Church","CCAP","Seventh Day","Mosque","Primary School","Borehole","Secondary School","College","Market","Football Ground","Other"];return e.map(e=>({label:e,value:e,other:{code:e}}))}}}]);
//# sourceMappingURL=chunk-3a966710.e6b4a724.js.map