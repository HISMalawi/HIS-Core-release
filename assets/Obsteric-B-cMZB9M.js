var m=Object.defineProperty;var T=(e,t,l)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var p=(e,t,l)=>(T(e,typeof t!="symbol"?t+"":t,l),l);import{_ as f}from"./EncounterMixin.vue_vue_type_script_lang-BjcFUOZj.js";import{bk as _,d as g,I as y,F as o,n as V,V as r,dx as v,_ as x,r as b,o as E,c as S,w as C,b as w}from"./index-BFVcutZq.js";import"./encounter_guidelines-fEzG7yyD.js";import"./GuidelineEngine-D6V1_Znr.js";import"./HisStandardForm-DO3sZVdL.js";class N extends _{constructor(l,c){super(l,82,c);p(this,"para");p(this,"gravida");p(this,"nextGravida");this.para=0,this.gravida=0,this.nextGravida=0}async initData(){this.para=await this.getFirstValueNumber("Parity")||0,this.gravida=await this.getFirstValueNumber("Gravida")||0,this.nextGravida=this.gravida>0?this.gravida+1:0}}const q=g({components:{IonPage:y},mixins:[f],data:()=>({service:{}}),watch:{ready:{async handler(e){e&&(this.service=new N(this.patientID,this.providerID),await this.service.initData(),this.fields=this.getFields())},immediate:!0}},methods:{async onFinish(e,t){const l=await this.resolveObs(t);await this.service.createEncounter(),await this.service.saveObservationList(l),this.nextTask()},getFields(){return[{id:"gravida",helpText:"Gravida",type:o.TT_NUMBER,defaultValue:()=>this.service.nextGravida>0?this.service.nextGravida:null,beforeNext:async e=>!(parseInt("".concat(e.value))>9&&!await V("The value is greater than maximum 9. Are you sure about this value?")),computedValue:e=>this.service.buildValueNumber("Gravida",e.value),validation:e=>this.validateSeries([()=>r.required(e),()=>r.rangeOf(e,this.service.nextGravida||1,19)])},{id:"para",helpText:"Para",type:o.TT_NUMBER,condition:e=>e.gravida.value>1,computedValue:e=>this.service.buildValueNumber("Parity",e.value),validation:(e,t)=>this.validateSeries([()=>r.required(e),()=>r.rangeOf(e,this.service.para,t.gravida.value-1)])},{id:"known_pregnancies",helpText:"Pregnancies with available information",type:o.TT_ANC_PREGNANCY_INPUT_CONFIG,condition:e=>e.gravida.value>1&&e.para.value>0,config:{hiddenFooterBtns:["Clear"],pregnancyCount:e=>e.para.value}},{id:"pregnancy_details",helpText:"Pregnancy details",type:o.TT_ANC_PREGNANCY_DETAILS_INPUT,condition:e=>{const t=parseInt("".concat(e.gravida.value))-parseInt("".concat(e.para.value))-1;return e.gravida.value>1&&(t>=1||e.known_pregnancies.some(l=>l.isChecked))},validation:e=>this.validateSeries([()=>r.required(e),()=>this.inArray(e,t=>t.label==="_INCOMPLETE_RECORD_ERROR_")?["Pregnancy details incomplete!!"]:null]),config:{hiddenFooterBtns:["Clear"]},computedValue:e=>e.filter(t=>{var l;return((l=t==null?void 0:t.other)==null?void 0:l.obs)||!1}).map(t=>t.other.obs),options:e=>{const t=parseInt("".concat(e.gravida.value))-parseInt("".concat(e.para.value))-1,l=[];for(let n=0;n<t;++n){const d=n+1;l.push({label:'<span style="color:red;">'.concat(d,"<sup>").concat(v(d),"</sup> Abortion</span>"),value:-1,other:{data:[[{label:"Year of abortion",value:"",required:!0,field:{id:"year",helpText:"Year of abortion",type:o.TT_NUMBER,computedValue:a=>this.service.buildValueNumber("Year of abortion",a.value),validation:a=>this.validateSeries([()=>r.required(a),()=>{const[u]=this.patient.getBirthdate().split("-"),[i]=this.service.getDate().split("-");return r.rangeOf(a,u,i)}])}},{label:"Place of abortion",value:"",required:!0,field:{id:"place_of_abortion",helpText:"Place of abortion",type:o.TT_SELECT,computedValue:a=>this.service.buildValueText("Place of birth",a.value),validation:a=>this.validateSeries([()=>r.required(a)]),options:()=>this.mapStrToOptions(["Health facility","In transit","TBA","Home","Other"])}},{label:"Type of abortion",value:"",required:!0,field:{id:"type_of_abortion",helpText:"Type of abortion",type:o.TT_SELECT,computedValue:a=>this.service.buildValueCoded("Type of Abortion",a.value),validation:a=>this.validateSeries([()=>r.required(a)]),options:()=>this.mapStrToOptions(["Complete abortion","Incomplete abortion"])}},{label:"Procedure done",value:"",required:!0,field:{id:"procedure_done",helpText:"Procedure done",type:o.TT_SELECT,validation:a=>this.validateSeries([()=>r.required(a)]),computedValue:a=>this.service.buildValueText("Procedure done",a.value),options:()=>this.mapStrToOptions(["Manual Vacuum Aspiration (MVA)","Evacuation","None"])}},{label:"Gestation (weeks)",value:"",required:!0,field:{id:"gestation_weeks",helpText:"Gestation (weeks)",type:o.TT_NUMBER,computedValue:a=>this.service.buildValueNumber("Gestation",a.value),validation:a=>this.validateSeries([()=>r.required(a),()=>r.rangeOf(a,0,28)])}}]]}})}return[...(e.known_pregnancies||[]).filter(n=>n.isChecked).map(n=>{const d=[],a=[];for(let u=0;u<n.value;++u)a.push("".concat(u+1,"<sup>").concat(v(u+1),"</sup> born in ").concat(n.label," pregnancy")),d.push([{label:"Year of birth",value:"",required:!0,field:{id:"year",helpText:"Year of birth",type:o.TT_NUMBER,computedValue:i=>this.service.buildValueNumber("Year of Birth",i.value),validation:i=>this.validateSeries([()=>r.required(i),()=>{const[h]=this.patient.getBirthdate().split("-"),[s]=this.service.getDate().split("-");return r.rangeOf(i,h,s)}])}},{label:"Place of birth",value:"",required:!0,field:{id:"place_of_birth",helpText:"Place of birth",type:o.TT_SELECT,computedValue:i=>this.service.buildValueText("Place of birth",i.value),validation:i=>r.required(i),options:()=>this.mapStrToOptions(["Health facility","In transit","TBA","Home"])}},{label:"Gestation (weeks)",value:"",required:!0,field:{id:"gestation_weeks",helpText:"Gestation (weeks)",type:o.TT_NUMBER,computedValue:i=>this.service.buildValueNumber("Gestation",i.value),validation:i=>this.validateSeries([()=>r.required(i),()=>r.rangeOf(i,24,42)])}},{label:"Method of delivery",value:"",required:!0,field:{id:"method_of_delivery",helpText:"Method of delivery",type:o.TT_SELECT,computedValue:i=>this.service.buildValueText("Method of delivery",i.value),validation:i=>r.required(i),options:()=>this.mapStrToOptions(["Spontaneous Vertex","Caesarean Section","Vacuum extraction delivery","Breech","Forceps","Others"])}},{label:"Condition at birth",value:"",required:!0,field:{id:"condition_at_birth",helpText:"Condition at birth",type:o.TT_SELECT,computedValue:i=>this.service.buildValueText("Condition at Birth",i.value),onValueUpdate:(i,h)=>{h.forEach(s=>{s.label==="Alive now"&&(s.required=i.value==="Alive",s.disabled=i.value!="Alive")})},validation:i=>r.required(i),options:()=>this.mapStrToOptions(["Alive","Macerated Still Birth (MSB)","Fresh Still Birth (FSB)"])}},{label:"Birth weight",value:"",required:!0,field:{id:"birth_weight",helpText:"Birth weight",type:o.TT_TEXT,computedValue:i=>this.service.buildValueText("Birth weight",i.value),validation:i=>this.validateSeries([()=>r.required(i),()=>i.value!="Unknown"&&!"".concat(i.value).match(/^\d{1,3}\.\d{1,5}$/)?["Invalid weight ".concat(i.value,". Don't forget decimal point")]:null,()=>["N/A","Unknown"].includes("".concat(i.value))?null:r.rangeOf(i,1,5)]),config:{customKeyboard:[[["1","2","3"],["4","5","6"],["7","8","9"],["","0","."]],[["Unknown","Delete"]]],onUnknownEstimateField:()=>({id:"birth_weight_estimate",helpText:"Birth weight estimate",type:o.TT_SELECT,validation:i=>r.required(i),options:()=>this.mapOptions(["Normal","Big baby","Small baby"])}),noChars:!1}}},{label:"Alive now",value:"",disabled:!0,required:!1,field:{id:"alive_now",helpText:"Alive now",type:o.TT_SELECT,computedValue:i=>this.service.buildValueCoded("Alive",i.value),onValueUpdate:(i,h)=>{h.forEach(s=>{s.label==="Age at death"&&(s.required=i.value==="No",s.disabled=i.value==="Yes")})},validation:i=>this.validateSeries([()=>r.required(i)]),options:()=>this.yesNoOptions()}},{label:"Age at death",value:"",disabled:!0,required:!1,field:{id:"age_at_death",helpText:"Age at death",type:o.TT_AGE_INPUT,computedValue:i=>this.service.buildValueText("Age at Death",i.value),validation:i=>this.validateSeries([()=>r.required(i)])}}]);return n.label="".concat(n.label," delivery"),n.other={data:d,rowTitles:a},n}),...l]}},{id:"previous_complications",helpText:"Previous complications",type:o.TT_MULTI_SELECT_GRID,condition:e=>e.gravida.value>1,validation:e=>this.validateSeries([()=>r.required(e),()=>e.map(l=>l.value==="").some(Boolean)?["Please complete Complication selection!!"]:null]),computedValue:e=>e.filter(t=>t.value!="").map(t=>this.service.buildValueCoded(t.label,t.value)),config:{hiddenFooterBtns:["Clear"]},options:()=>[{label:"Episiotomy",value:"",other:{options:this.yesNoOptions()}},{label:"Hemorrhage",value:"",other:{options:this.mapStrToOptions(["No","APH","PPH"])}},{label:"Pre-eclampsia",value:"",other:{onClick:(e,t)=>{t.forEach(l=>{l.label==="Eclampsia"&&(l.other.visible=e.value==="Yes")})},options:this.yesNoOptions()}},{label:"Eclampsia",value:"",other:{visible:!1,options:this.yesNoOptions()}}]}]}}});function A(e,t,l,c,n,d){const a=b("his-standard-form"),u=b("ion-page");return E(),S(u,null,{default:C(()=>[w(a,{fields:e.fields,skipSummary:!0,onFinishAction:e.onFinish,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}const $=x(q,[["render",A]]);export{$ as default};