(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-957d3328"],{"3b8c":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("cc6f"),a=n("7957"),o=n("5a0c"),r=n.n(o),s=n("2ef0");class c extends i["a"]{constructor(e,t){super(e,53,t)}getFamilyPlanningMethods(){return["ORAL CONTRACEPTIVE PILLS","DEPO-PROVERA","INTRAUTERINE CONTRACEPTION","CONTRACEPTIVE IMPLANT","MALE CONDOMS","FEMALE CONDOMS","TUBAL LIGATION","NONE"]}async getTptTreatmentStatus(){return i["a"].getJson(`/patients/${this.patientID}/tpt_status`)}async patientHitMenopause(){const e=await a["a"].getFirstObs(this.patientID,"Why does the woman not use birth control");return!(!e||"string"!==typeof(null===e||void 0===e?void 0:e.value_text))&&(!!e.value_text.match(/menopause/i)&&i["a"].obsInValidPeriod(e))}async hasTreatmentHistoryObs(){const e=await a["a"].getFirstObs(this.patientID,"Previous TB treatment history");return e&&i["a"].obsInValidPeriod(e)}getDrugSideEffects(){return i["a"].getJson(`programs/${i["a"].getProgramID()}/patients/${this.patientID}/medication_side_effects`,{date:this.date})}getClient(){return i["a"].getFirstValueCoded(this.patientID,"Patient present")}async clientDueForCxCa(){const e=await i["a"].getJson("last_cxca_screening_details",{id:this.patientID,date:this.date});if(!Object(s["isEmpty"])(e)){const t=e["date_screened"],n=r()(this.date).diff(t,"years");return n>=1}return!0}async clientHasHadAHysterectomy(){const e=await i["a"].getFirstValueCoded(this.patientID,"Reason for NOT offering CxCa");if("Hysterectomy"===e)return!0;const t=await i["a"].getFirstValueText(this.patientID,"Treatment");return"Hysterectomy"===t}async getTLObs(){const e=e=>e&&"Tubal ligation"===e.value_coded&&i["a"].obsInValidPeriod(e),t=await i["a"].getFirstObs(this.patientID,"Family planning");if(e(t))return e(t);{const t=await i["a"].getFirstObs(this.patientID,"Method of family planning");return e(t)}}async getPreviousDrugs(){const e=await i["a"].getJson(`patients/${this.patientID}/drugs_received`);if(!e)return;const t={};return e.forEach(e=>{t[e.drug_inventory_id]=e}),t}familyPlanningMethods(e,t){const n={"ORAL CONTRACEPTIVE PILLS":{"DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","CONTRACEPTIVE IMPLANT":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"DEPO-PROVERA":{"ORAL CONTRACEPTIVE PILLS":"N","INTRAUTERINE CONTRACEPTION":"N","CONTRACEPTIVE IMPLANT":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"INTRAUTERINE CONTRACEPTION":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","CONTRACEPTIVE IMPLANT":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"CONTRACEPTIVE IMPLANT":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"MALE CONDOMS":{"ORAL CONTRACEPTIVE PILLS":"Y","DEPO-PROVERA":"Y","INTRAUTERINE CONTRACEPTION":"Y","CONTRACEPTIVE IMPLANT":"Y","FEMALE CONDOMS":"Y","RYTHM METHOD":"Y","TUBAL LIGATION":"N",VASECTOMY:"Y"},"FEMALE CONDOMS":{"ORAL CONTRACEPTIVE PILLS":"Y","DEPO-PROVERA":"Y","INTRAUTERINE CONTRACEPTION":"Y","CONTRACEPTIVE IMPLANT":"Y","MALE CONDOMS":"Y","RYTHM METHOD":"Y","TUBAL LIGATION":"N",VASECTOMY:"Y"},"RYTHM METHOD":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"Y","CONTRACEPTIVE IMPLANT":"N","TUBAL LIGATION":"N",VASECTOMY:"N"},"TUBAL LIGATION":{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"N","FEMALE CONDOMS":"N","CONTRACEPTIVE IMPLANT":"N","RYTHM METHOD":"N",VASECTOMY:"N"},VASECTOMY:{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"Y","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"Y","FEMALE CONDOMS":"N","CONTRACEPTIVE IMPLANT":"Y","RYTHM METHOD":"N","TUBAL LIGATION":"N"},NONE:{"ORAL CONTRACEPTIVE PILLS":"N","DEPO-PROVERA":"N","INTRAUTERINE CONTRACEPTION":"N","MALE CONDOMS":"N","FEMALE CONDOMS":"N","CONTRACEPTIVE IMPLANT":"N","RYTHM METHOD":"N","TUBAL LIGATION":"N"}},i=n[e];return t.map(e=>"N"===i[e.label]?{label:e.label,value:e.value,isChecked:!1,disabled:!0}:{label:e.label,value:e.value,isChecked:e.isChecked,disabled:!1})}}},"519d":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("cc6f");class a extends i["a"]{constructor(e,t){super(e,9,t)}}},"5e76":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return h}));n("13d5"),n("14d9");var i=n("7957"),a=n("0011"),o=n("2ef0"),r=n("b211"),s=n("b5e4");async function c(e){for(const t in e){if(e[t].required&&Object(o["isEmpty"])(e[t].value)){e[t].error="This field is required";continue}if("function"!==typeof e[t].validation){e[t].error="";continue}const n="object"===typeof e[t].value?e[t].value:{label:e[t].value,value:e[t].value},i=await e[t].validation(n,e);i&&i.length>0?(e[t].error=i.toString(),console.log(t,e[t].error)):e[t].error=""}return Object.values(e).every(({error:e})=>!e)}function d(e,t=!1){const n={},i={};for(const o in e)if(e[o].value){const r=t?Object(a["j"])(o):o;n[r]=e[o].value,"function"===typeof e[o].computedValue&&(i[r]=e[o].computedValue(e[o].value,e))}return{formData:n,computedFormData:i}}function l(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):e.push(n),e},[]);return Promise.all(n)}async function u(e,t){return await Promise.all(t.map(async t=>i["a"].buildGroupValueCoded(e,t.label,t.isChecked?"Yes":"No")))}async function h(e,t,n){if(!await c(e))return;const i=(null===n||void 0===n?void 0:n.showloader)||!1;try{i&&await r["a"].show();const{formData:a,computedFormData:o}=d(e,null===n||void 0===n?void 0:n.underscoreKeys);await t(a,o)}catch(a){Object(s["e"])(""+a),console.error(a)}finally{i&&await r["a"].hide()}}},"81f9":function(e,t,n){"use strict";n.r(t);var i=n("7a23");function a(e,t,n,a,o,r){const s=Object(i["resolveComponent"])("ion-col"),c=Object(i["resolveComponent"])("ion-row"),d=Object(i["resolveComponent"])("ion-grid"),l=Object(i["resolveComponent"])("layout");return Object(i["openBlock"])(),Object(i["createBlock"])(l,null,{default:Object(i["withCtx"])(()=>[Object(i["createVNode"])(d,null,{default:Object(i["withCtx"])(()=>[Object(i["createVNode"])(c,{class:"his-card"},{default:Object(i["withCtx"])(()=>[e.isReady?(Object(i["openBlock"])(),Object(i["createBlock"])(s,{key:0,size:"12"},{default:Object(i["withCtx"])(()=>[(Object(i["openBlock"])(),Object(i["createBlock"])(i["KeepAlive"],null,[(Object(i["openBlock"])(),Object(i["createBlock"])(Object(i["resolveDynamicComponent"])(e.activeForm),{patient:e.patient,isNewPatient:e.isNewPatient,sitePrefix:e.sitePrefix,initialVisitDate:e.initialVisitDate,observations:e.observations,onOnValue:e.onValue,onOnNext:e.onNext,onOnPrevious:e.onPrevious,onOnFinish:e.onFinish},null,40,["patient","isNewPatient","sitePrefix","initialVisitDate","observations","onOnValue","onOnNext","onOnPrevious","onOnFinish"]))],1024))]),_:1})):Object(i["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})}n("14d9");var o=n("6605"),r=n("8d56"),s=n("d867"),c=n("8e8b"),d=n("b5e4"),l=n("b211"),u=n("519d"),h=n("3b8c"),A=n("b515"),g=n("8df6"),O=n("5e76"),T=n("74f4"),E=n("85d6"),p=n("ec2a"),N=n("2ef0"),I=n("8158"),C=n("0ba8"),m=n("b5b2"),f=Object(i["defineComponent"])({components:{ClinicRegistration:Object(i["defineAsyncComponent"])(()=>Promise.all([n.e("chunk-366b6f0a"),n.e("chunk-2bec457a"),n.e("chunk-2d0d3fd7")]).then(n.bind(null,"5eb3"))),Staging:Object(i["defineAsyncComponent"])(()=>Promise.all([n.e("chunk-366b6f0a"),n.e("chunk-3ededa9e")]).then(n.bind(null,"27dd"))),Layout:r["a"],IonGrid:s["IonGrid"],IonRow:s["IonRow"],IonCol:s["IonCol"],IonButton:s["IonButton"]},setup(){const e=Object(o["h"])(),t=Object(o["i"])(),n=Object(i["ref"])(!1),a=Object(i["reactive"])({}),r=Object(i["ref"])("ClinicRegistration"),s=Object(i["ref"])(""),f=parseInt(e.params.id.toString()||""),w=!!e.params.new.toString().match(/true/i),v=Object(i["computed"])(()=>"Staging"===r.value),D=Object(i["computed"])(()=>"Staging"===r.value),b=Object(i["ref"])({}),y=Object(i["ref"])(""),P=Object(i["ref"])([]),R=Object(i["reactive"])({}),M=Object(i["ref"])(!1),_=()=>{const e=new T["a"](f);e.getPrograms().then(e=>{M.value=e.some(e=>"HIV PROGRAM"===e.program.name)})},L=e=>a[e.type]=e.data,S=()=>r.value="Staging",V=()=>r.value="ClinicRegistration",H=async()=>{const{arvNumberEditable:e,formData:n,computedData:i}=a.registration,{computedData:o}=a.staging;try{if(l["a"].show(),!w&&!Object(N["isEmpty"])(P.value))for(const e of P.value)await p["a"].voidEncounter(e,"Duplicate");await u["a"].setSessionDate(n.initialVisitDate),e&&n.arvNumber&&await b.value.createArvNumber(`${s.value}-ARV-${n.arvNumber}`);const a=new g["a"](f,-1);await a.createEncounter();const r=await Object(O["d"])(i,"patient type");await a.saveObservationList(r);const c=new u["a"](f,-1);await c.createEncounter();const I=await Object(O["d"])(i,"registration");if(await c.saveObservationList(I),"Yes"===n.everRegisteredAtClinic){const e=new A["a"](f,-1);await e.createEncounter();const t=await Object(O["d"])(i,"vitals");await e.saveObservationList(t);const n=new h["a"](f,-1);await n.createEncounter();const a=await Object(O["d"])(i,"consultation");await n.saveObservationList(a)}const C=new E["a"](f,b.value.getAge(),-1);await C.createEncounter();const m=await Object(O["d"])(o);if(await C.saveObservationList(m),w||!M.value){const e=new T["a"](f);e.setProgramDate(n.initialVisitDate),await e.enrollProgram()}await l["a"].hide(),await u["a"].resetSessionDate(),await Object(d["d"])("Saved successfully"),t.push("/emc/patient/"+f)}catch(r){await l["a"].hide(),console.log(r),Object(d["e"])(""+r)}},G=async e=>{for(const t of e){P.value.includes(t.encounter_id)||P.value.push(t.encounter_id);const e=await I["a"].getConceptName(t.concept_id);let n="";t.value_datetime||t.value_drug?n=t.value_datetime:t.value_text?n=t.value_text:t.value_numeric?n=t.value_numeric:t.value_coded&&(n=await I["a"].getConceptName(t.value_coded)),t.value_modifier&&(n=t.value_modifier+n),R[e]=n}};return Object(i["onMounted"])(async()=>{if(_(),b.value=await c["a"].get("ACTIVE_PATIENT",{patientID:f}),c["a"].get("SITE_PREFIX").then(e=>s.value=e),!w){const e=await p["a"].getEncounters(f,{encounter_type_id:9});if(Object(N["isEmpty"])(e))return n.value=!0;if(y.value=Object(N["get"])(e,"[0].encounter_datetime",""),y.value){const e=await p["a"].getEncounters(f,{date:y.value});for(const t of e)[9,53,6,5,52].includes(t.encounter_type)&&await G(t.observations)}}n.value=!0,C["b"].on(m["a"].ON_INITIAL_VISIT_DATE,e=>y.value=e)}),{activeForm:r,patient:b,isNewPatient:w,isStaging:v,isRegistration:D,sitePrefix:s,isReady:n,initialVisitDate:y,observations:R,onValue:L,onFinish:H,onNext:S,onPrevious:V}}}),w=n("d959"),v=n.n(w);const D=v()(f,[["render",a]]);t["default"]=D},"85d6":function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var i=n("ade3"),a=n("cc6f"),o=n("5713"),r=(n("13d5"),n("8158")),s=n("b5e4");const c="2014-04-01",d={"Adults with stage 4 conditions":{concept:"WHO STAGE IV ADULT",priority:1,conditions:{stage:e=>4===e}},"Classify as stage 4 when reason for ART is WHO STAGE 4":{concept:"WHO STAGE IV ADULT",priority:2,conditions:{reasonForArt:e=>"WHO STAGE IV ADULT"===e}},"Adults with stage 3 conditions":{concept:"WHO STAGE III ADULT",priority:3,conditions:{stage:e=>3===e}},"Adults with stage 2 conditions":{concept:"WHO STAGE II ADULT",priority:4,conditions:{stage:e=>2===e}},"Adults with stage 1 conditions":{concept:"WHO STAGE I ADULT",priority:5,conditions:{stage:e=>1===e}}},l={"Children with stage 4 conditions":{concept:"WHO STAGE IV PEDS",priority:1,conditions:{stage:e=>4===e}},"Classify as stage 4 when reason for ART is WHO STAGE 4":{concept:"WHO STAGE IV PEDS",priority:2,conditions:{reasonForArt:e=>"WHO STAGE IV PEDS"===e}},"For children with stage 3 conditions":{concept:"WHO STAGE III PEDS",priority:3,conditions:{stage:e=>3===e}},"Children with stage 2 conditions":{concept:"WHO STAGE II PEDS",priority:4,conditions:{stage:e=>2===e}},"Children with stage 1 conditions":{concept:"WHO STAGE I PEDS",priority:5,conditions:{stage:e=>1===e}}},u={"Warn if Severe weight loss is selected when actual patient BMI is acceptable":{priority:1,actions:{alert:async e=>await Object(s["a"])(`Patient's BMI of ${e.bmi} greater than 18.5, do you wish to proceed?`,{confirmBtnLabel:"Yes, keep severe weightloss",cancelBtnLabel:"No, cancel"})},conditions:{selectedCondition(e){return"Severe weight loss >10% and/or BMI <18.5kg/m^2, unexplained"===e},bmi:e=>e>18.5}},"Warn for contradicting stage defining conditions":{priority:1,actions:{alert:async e=>{const t=await Object(s["a"])("CONTRADICTING STAGE DEFINING CONDITIONS",{confirmBtnLabel:"Keep Asymptomatic",cancelBtnLabel:"Keep other(s)"});return!!t&&(e.stage=1,e.selectedConditions=[],e.stageThreeConditions=[],e.stageFourConditions=[],e.stageTwoConditions=[],!0)}},conditions:{selectedCondition(e){return"Asymptomatic HIV infection"===e},stage:e=>e>=2}}},h={"For children whose current weight percentile is less than 70":{priority:1,actions:{isChecked:!0},description:{color:"danger",show:"always",info:e=>"Child has a low weight percentile of "+e.weightPercentile},conditions:{selectedCondition(e){return"Severe unexplained wasting or malnutrition not responding to treatment (weight-for-height/ -age <70% or MUAC less than 11cm or oedema)"===e},weightPercentile(e){return e<70}}},"Enable Moderate unexplained malnutrition for children whose weight for height is 70-79%":{priority:1,actions:{isChecked:!0},description:{color:"danger",show:"always",info:e=>"Child has weight percentile of "+e.weightPercentile},conditions:{selectedCondition(e){return"Moderate unexplained wasting/malnutrition not responding to treatment (weight-for-height/ -age 70-79% or muac 11-12 cm)"===e},weightPercentile(e){return e>=70&&e<=79}}},"Disable moderate weight loss when Severe unexplained weight loss is chosen":{priority:2,actions:{isChecked:!1,disabled:!0},description:{color:"secondary",show:"always",info:()=>"Severe weight loss/manutrition was already selected"},conditions:{selectedCondition(e){return"Moderate unexplained wasting/malnutrition not responding to treatment (weight-for-height/ -age 70-79% or muac 11-12 cm)"===e},selectedConditions(e){return e.includes("Severe unexplained wasting or malnutrition not responding to treatment (weight-for-height/ -age <70% or MUAC less than 11cm or oedema)")}}}},A={"Adults with a BMI less than 16":{priority:1,actions:{isChecked:!0},description:{color:"danger",show:"always",info:e=>"Adult has a low BMI of "+e.bmi},conditions:{selectedCondition(e){return"Severe weight loss >10% and/or BMI <18.5kg/m^2, unexplained"===e},bmi:e=>e<16}},"Adults whose BMI is between 16 and 18":{priority:3,actions:{isChecked:!0},description:{color:"warning",show:"onChecked",info:e=>`BMI of ${e.bmi} is between 16 and 18`},conditions:{selectedCondition:e=>"Moderate weight loss less than or equal to 10 percent, unexplained"===e,bmi:e=>e>=16&&e<=18.5}},"Disable Moderate weight loss if severe weightloss is selected":{priority:2,actions:{isChecked:!1,disabled:!0},description:{color:"secondary",show:"always",info:()=>"Severe weight loss was already selected"},conditions:{selectedCondition(e){return"Moderate weight loss less than or equal to 10 percent, unexplained"===e},selectedConditions(e){return e.includes("Severe weight loss >10% and/or BMI <18.5kg/m^2, unexplained")}}}},g={"Has stage 4 conditions":{concept:"WHO STAGE IV PEDS",priority:1,conditions:{stage:e=>4===e}},"Has stage 3 conditions":{concept:"WHO STAGE III PEDS",priority:2,conditions:{stage:e=>3===e}},"Children under twelve months who tested positive on Rapid test and have presumed severe HIV":{concept:"PRESUMED SEVERE HIV",priority:3,conditions:{ageInMonths(e){return e<12},selectedConditions:e=>{const t=r["a"].getConceptsByCategory("pshd_condition");for(const n in t)if(e.includes(n))return!0;return!1},testType(e){return"HIV rapid test"===e}}},"Children under twelve who tested positive via HIV DNA Polymerase Chain Reaction test":{concept:"HIV DNA polymerase chain reaction",priority:4,conditions:{ageInMonths:e=>e<12,testType:e=>"HIV DNA polymerase chain reaction"===e}},"Children who are less than 24 months":{concept:"HIV infected",priority:5,conditions:{ageInMonths:e=>e<24}},"Children between 24 and 56 months who have stage 2 or 1 conditions":{concept:"CD4 COUNT LESS THAN OR EQUAL TO 750",priority:6,conditions:{ageInMonths(e){return e>=24&&e<=56},cd4Date:e=>new Date(e)<=new Date("2014-04-01"),cd4(e){return e<=750},cd4Modifier(e){return"<"===e||"="===e},stage(e){return e<=2}}},"Children with CD4 count less than 500 and have stage 1 and stage 2 conditions":{concept:"CD4 COUNT LESS THAN OR EQUAL TO 500",priority:7,conditions:{cd4(e){return e<=500},cd4Date:e=>new Date(e)<=new Date("2014-04-01"),cd4Modifier(e){return"<"===e||"="===e},stage(e){return e<=2}}},"Children over the date 2014-04-01 who are more than five years old and have cd4 count less than 500":{concept:"CD4 COUNT LESS THAN OR EQUAL TO 500",priority:9,conditions:{cd4Date:e=>new Date(e)<=new Date("2014-04-01"),age(e){return e>5},cd4(e){return e<=500},cd4Modifier(e){return"<"===e||"="===e}}},"Children over date 2014-04-01 and less than Five years old":{concept:"HIV infected",priority:10,conditions:{date(e){return e>="2014-04-01"},age(e){return e<=5}}},"Women who are breast feeding":{concept:"BREASTFEEDING",priority:11,conditions:{gender(e){return"F"===e},breastFeeding(e){return"Yes"===e},stage:e=>e<=2}},"Women who are pregnant":{concept:"PATIENT PREGNANT",priority:12,conditions:{gender(e){return"F"===e},pregnant(e){return"Yes"===e},stage(e){return e<=2}}},"Asymptomatic patient with either stage one or stage two conditions":{concept:"Asymptomatic",priority:13,conditions:{stage:e=>e<=2}}},O={"Has stage 4 conditions":{concept:"WHO STAGE IV ADULT",priority:1,conditions:{stage:e=>4===e}},"Has HIV wasting syndrome identified in stage 3":{concept:"WHO STAGE IV ADULT",priority:2,conditions:{selectedConditions:e=>{const t=r["a"].getConceptsByCategory("severe_hiv_wasting_syndrome"),n=t.reduce((t,n)=>e.includes(n.name)?t+1:0,0);return n>=2}}},"Has stage 3 conditions":{concept:"WHO STAGE III ADULT",priority:3,conditions:{stage:e=>3===e}},"CD4 less than 350 for adults before 2014":{concept:"cd4 less than or equal to 350",priority:4,conditions:{cd4Date:e=>new Date(e)<=new Date("2014-04-01"),cd4(e){return e<=350},cd4Modifier(e){return"<"===e||"="===e}}},"CD4 less than 250 for adults after 2014":{concept:"cd4 less than or equal to 250",priority:4,conditions:{cd4Date:e=>new Date(e)<=new Date("2014-04-01"),cd4(e){return e<=250},cd4Modifier(e){return"<"===e||"="===e}}},"CD4 less than 350 for adults after 2014":{concept:"cd4 less than or equal to 350",priority:5,conditions:{cd4Date:e=>new Date(e)<=new Date("2014-04-01"),cd4(e){return e<=350},cd4Modifier(e){return"<"===e||"="===e}}},"CD4 less than 500 for adults after 2014":{concept:"cd4 less than or equal to 500",priority:6,conditions:{cd4Date:e=>new Date(e)<=new Date("2014-04-01"),cd4(e){return e<=500},cd4Modifier(e){return"<"===e||"="===e}}},"Women who are breast feeding":{concept:"BREASTFEEDING",priority:8,conditions:{gender(e){return"F"===e},breastFeeding(e){return"Yes"===e},stage:e=>e<=2}},"Women who are pregnant":{concept:"PATIENT PREGNANT",priority:7,conditions:{gender(e){return"F"===e},pregnant(e){return"Yes"===e},stage(e){return e<=2}}},"Asymptomatic patient with either stage one or stage two conditions":{concept:"Asymptomatic",priority:9,conditions:{stage:e=>e<=2}}};var T;(function(e){e["ADULT_STAGE_4"]="stage_4_conditions_adults",e["ADULT_STAGE_3"]="stage_3_conditions_adults",e["ADULT_STAGE_2"]="stage_2_conditions_adults",e["ADULT_STAGE_1"]="stage_1_conditions_adults",e["PEDAID_STAGE_4"]="stage_4_conditions_pedaids",e["PEDAID_STAGE_3"]="stage_3_conditions_pedaids",e["PEDAID_STAGE_2"]="stage_2_conditions_pedaids",e["PEDAID_STAGE_1"]="stage_1_conditions_pedaids"})(T||(T={}));class E extends a["a"]{constructor(e,t,n){super(e,52,n),Object(i["a"])(this,"age",void 0),Object(i["a"])(this,"confirmatoryTest",void 0),this.age=t,this.confirmatoryTest=null}isAdult(){return this.age>=15}isPedaid(){return this.age<=14}setAge(e){this.age=e}getFacilities(e=""){return o["a"].getFacilities({name:e})}getConfirmatoryTestType(){return this.confirmatoryTest}cd4CountIsValid(e){try{return!!e.match(/^(=|<|>)([0-9]*)$/m)}catch(t){return!1}}getAlertGuidelines(){return u}getWhoStageGuidelines(){return this.isAdult()?d:l}getProgramEligibilityGuidelines(){return this.isAdult()?O:g}getRecommendedConditionGuidelines(){return this.isAdult()?A:h}getStagingConditions(e){const t=this.getStagingCategoryByNum(e);return a["a"].getConceptsByCategory(t)}getAllWhoStages(){return a["a"].getConceptsByCategory("whole_staging_numbers")}getAllReasonsForART(e=this.date){const t=a["a"].getConceptsByCategory("reason_for_art");return new Date(e)<new Date(c)?t:t.filter(e=>!e.name.match(/cd4/i))}buildWhoStageObs(e){return this.buildValueCoded("Who stage",e)}buildWhoCriteriaObs(e){return this.buildValueCoded("Who stages criteria present",e)}buildReasonForArtObs(e){return this.buildValueCoded("Reason for ART eligibility",e)}getStagingCategoryByNum(e){switch(e){case 1:return this.isAdult()?T.ADULT_STAGE_1:T.PEDAID_STAGE_1;case 2:return this.isAdult()?T.ADULT_STAGE_2:T.PEDAID_STAGE_2;case 3:return this.isAdult()?T.ADULT_STAGE_3:T.PEDAID_STAGE_3;case 4:return this.isAdult()?T.ADULT_STAGE_4:T.PEDAID_STAGE_4;default:return""}}async loadHivConfirmatoryTestType(){const e=await a["a"].getFirstValueCoded(this.patientID,"Confirmatory hiv test type");e&&(this.confirmatoryTest=e)}}},b211:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("d867");const a={async show(e){return(await i["loadingController"].create({message:e||"Loading...",spinner:"crescent",translucent:!0})).present()},async hide(){i["loadingController"].getTop().then(e=>e?i["loadingController"].dismiss():null)}}},b515:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("14d9");var i=n("cc6f"),a=n("2ef0");class o extends i["a"]{constructor(e,t){super(e,6,t)}isNotEmptyandNumber(e){return(""+e.value).match(/^-?\d+\.?\d*$/)?null:["Invalid entry for "+e.label]}isNotEmptyandFloat(e){var t;return(""+e.value).match(/^\d{1,3}\.\d{1,5}$/)?null:[`Invalid entry for ${e.label}. Don't forget to add a decimal. e.g. 56.2 ${(null===(t=e.other)||void 0===t?void 0:t.modifier)||""}`]}checkMinMax(e,t,n){const i=[];var a,o;parseFloat(""+e.value)<t&&i.push([`${e.label} entered is less than minimum ${t} ${(null===e||void 0===e||null===(a=e.other)||void 0===a?void 0:a.modifier)||""}`]);parseFloat(""+e.value)>n&&i.push([`${e.label} entered is greater than maximum ${n} ${(null===e||void 0===e||null===(o=e.other)||void 0===o?void 0:o.modifier)||""}`]);return i.length>0?i:null}validateAll(e){const t=[];return e.map(e=>{const n=this.validator(e);return Object(a["isArray"])(n)?t.push(n):null}),t.length>0?t:null}mergeErrors(e){const t=[];return e.forEach(e=>{Object(a["isArray"])(e)&&t.push(e)}),t.length>0?t:null}isValidBPReading(e){const t=[],n=(""+e.value).match(/^\d{1,3}\/\d{1,3}$/g)?null:["Invalid BP reading"];if(t.push(n),null==n){const n=(""+e.value).split("/"),i={label:"Systolic",value:n[0]},a={label:"Diastolic",value:n[1]};t.push(this.checkMinMax(a,30,200)),t.push(this.checkMinMax(i,40,250))}return this.mergeErrors(t)}validator(e){const t=[{name:"Weight",validator:e=>{const t=this.isNotEmptyandFloat(e),n=this.checkMinMax(e,2,250);return this.mergeErrors([t,n])}},{name:"Height",validator:e=>{const t=[];return t.push(this.isNotEmptyandNumber(e)),t.push(this.checkMinMax(e,40,220)),this.mergeErrors(t)}},{name:"BP",validator:e=>this.isValidBPReading(e)},{name:"Temp",validator:e=>{const t=this.isNotEmptyandNumber(e),n=this.checkMinMax(e,30,42);return this.mergeErrors([t,n])}},{name:"SP02",validator:e=>{const t=this.checkMinMax(e,40,100);return this.mergeErrors([t])}},{name:"Pulse",validator:e=>{const t=this.checkMinMax(e,50,120);return this.mergeErrors([t])}}],n=t.filter(t=>t.name===e.label);return n.length>0?n[0].validator(e):null}}},b5b2:function(e,t,n){"use strict";var i;n.d(t,"a",(function(){return i})),function(e){e["RELOAD_PATIENT_DATA"]="reload_patient_data",e["RELOAD_PATIENT_VISIT_DATA"]="reload_patient_visit_data",e["RELOAD_GUARDIAN_DATA"]="reload_guardian_data",e["RELOAD_LATEST_VL_RESULT"]="reload_latest_vl_result",e["RELOAD_STAGING_INFORMATION"]="reload_staging_info",e["ON_CLEAR"]="on_clear",e["ON_INITIAL_VISIT_DATE"]="on_initital_visit_date"}(i||(i={}))}}]);
//# sourceMappingURL=chunk-957d3328.49b45ff7.js.map