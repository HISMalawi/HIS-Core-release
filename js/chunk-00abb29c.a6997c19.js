(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00abb29c"],{"1d60":function(e,t,l){"use strict";var a=l("7a23");const i=Object(a["withScopeId"])("data-v-c7c0d35c");Object(a["pushScopeId"])("data-v-c7c0d35c");const n={id:"report-content"},o={id:"moh_template"},s={key:0,class:"main-title"},r={key:1,class:"main-title"},_={key:2,class:"main-title"},c={key:3,class:"table-section"},d={key:4,colspan:2,class:"table-section"},u={key:5};Object(a["popScopeId"])();const v=i((function(e,t,l,v,b,p){const m=Object(a["resolveComponent"])("layout");return Object(a["openBlock"])(),Object(a["createBlock"])(m,{logo:e.logo,title:e.title,toCSV:e.toCSV,toPDF:e.toPDF,period:e.period,dateGenerated:e.dateGenerated,refreshReport:e.refresh,configure:e.configureReport},{default:i(()=>[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("table",o,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.reportData.indicators,(t,l)=>(Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:l},[t.isMainTitle?(Object(a["openBlock"])(),Object(a["createBlock"])("td",s,"#")):Object(a["createCommentVNode"])("",!0),t.isMainTitle?(Object(a["openBlock"])(),Object(a["createBlock"])("td",r,Object(a["toDisplayString"])(t.label),1)):Object(a["createCommentVNode"])("",!0),t.isMainTitle?(Object(a["openBlock"])(),Object(a["createBlock"])("td",_,"#")):Object(a["createCommentVNode"])("",!0),t.isSectionTitle?(Object(a["openBlock"])(),Object(a["createBlock"])("td",c)):Object(a["createCommentVNode"])("",!0),t.isSectionTitle?(Object(a["openBlock"])(),Object(a["createBlock"])("td",d,Object(a["toDisplayString"])(t.label),1)):Object(a["createCommentVNode"])("",!0),t.isMainTitle||t.isSectionTitle?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("td",u,Object(a["toDisplayString"])(t.index),1)),t.isMainTitle||t.isSectionTitle?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("td",{key:6,style:t.style||{},class:"table-key"},Object(a["toDisplayString"])(t.label),5)),t.isMainTitle||t.isSectionTitle?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("td",{key:7,class:"table-value",onClick:l=>e.onClickValue(t)},Object(a["toDisplayString"])(t._value),9,["onClick"]))]))),128))])])]),_:1},8,["logo","title","toCSV","toPDF","period","dateGenerated","refreshReport","configure"])}));var b=l("954d"),p=l("0882"),m=l("2ef0"),y=l("d20e"),g=l("ba82"),x=Object(a["defineComponent"])({components:{Layout:b["a"]},props:{params:{type:Object,required:!0}},setup(e){const t=Object(p["a"])(e.params.title);function l(){t.setReportPeriod({isPeriodSelection:!0,minDate:e.params.minDate,maxDate:e.params.maxDate,generate:(t,l,a)=>{const i=new y["a"](e.params.endpoint);return i.startDate=a.start_date,i.endDate=a.end_date,i.name=e.params.name,i.requestReport({type:"moh"})}})}function i(e){console.log(e.value),Object(m["isEmpty"])(e._drill)||t.defaultDrillDown(e.label,e._drill)}function n(){const[e,...l]=t.reportData.indicators.map(e=>[e.index||"",e.label,e._value||""]);return{rows:l,columns:[["#",t.reportData.indicators[0].label,"#"]]}}return Object(a["watch"])(()=>t.reportData.data,l=>{t.reportData.indicators=e.params.indicators.map(e=>{if("function"===typeof e.value){const t=e.value(l);Array.isArray(t)&&(e._value=t.length,e._drill=t)}return e})},{deep:!0}),Object(a["onMounted"])(()=>{Object(m["isEmpty"])(t.reportData.data)&&(t.reportData.indicators=e.params.indicators.map(e=>("function"===typeof e.value&&(e._value=""),e)),l())}),{onClickValue:i,configureReport:l,logo:"login-logos/Malawi-Coat_of_arms_of_arms.png",title:t.title,period:t.period,reportData:t.reportData,dateGenerated:t.dateGenerated,refresh:t.updateReportData,toPDF:()=>{const{rows:e,columns:l}=n();Object(g["c"])(l,e,t.reportDescription())},toCSV:()=>{const{rows:e,columns:l}=n();Object(g["a"])(l,t.appendReportStamp(e),t.reportDescription())}}}}),f=(l("8e6a"),l("d959")),h=l.n(f);const O=h()(x,[["render",v],["__scopeId","data-v-c7c0d35c"]]);t["a"]=O},4064:function(e,t,l){},"5b4b":function(e,t,l){"use strict";l.r(t);var a=l("7a23");function i(e,t,l,i,n,o){const s=Object(a["resolveComponent"])("moh-template"),r=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createBlock"])(r,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{params:e.params},null,8,["params"])]),_:1})}var n=l("8a30"),o=l("1d60"),s=Object(a["defineComponent"])({components:{IonPage:n["D"],MohTemplate:o["a"]},setup(){const e={title:"Initial Tested for HIV",name:"HTS INITIAL TESTED FOR HIV",indicators:[{isMainTitle:!0,label:"Integrated Initial Testing Register"},{label:"Total clients tested for HIV",index:"1",value:e=>e["total_clients_tested_for_hiv"]},{isSectionTitle:!0,label:"Access Point Type"},{label:"Total clients tested at the facility",index:"2",value:e=>e["total_clients_tested_at_the_facility"]},{label:"Facility: VCT",index:"3",value:e=>e["facility_vct"]},{label:"Facility: ANC first visit",index:"4",value:e=>e["facility_anc_first_visit"]},{label:"Facility: Inpatient",index:"5",value:e=>e["facility_inpatient"]},{label:"Facility: STI",index:"6",value:e=>e["facility_sti"]},{label:"Facility: PMTCT-FUP",index:"7",value:e=>e["facility_pmtct_fup"]},{label:"Facility: Index",index:"8",value:e=>e["facility_index"]},{label:"Facility: Paediatric",index:"9",value:e=>e["facility_paediatric"]},{label:"Facility: VMMC",index:"10",value:e=>e["facility_vmmc"]},{label:"Facility: Malnutrition",index:"11",value:e=>e["facility_malnutrition"]},{label:"Facility: TB",index:"12",value:e=>e["facility_tb"]},{label:"Facility: OPD",index:"13",value:e=>e["facility_opd"]},{label:"Facility: Other PITC",index:"14",value:e=>e["facility_other_pitc"]},{label:"Facility: SNS",index:"15",value:e=>e["facility_sns"]},{label:"Total clients tested in the community",index:"16",value:e=>e["total_clients_tested_in_the_community"]},{label:"Community: VMMC",index:"17",value:e=>e["community_vmmc"]},{label:"Community: Index",index:"18",value:e=>e["community_index"]},{label:"Community: Mobile",index:"19",value:e=>e["community_mobile"]},{label:"Community: VCT",index:"20",value:e=>e["community_vct"]},{label:"Community: Other",index:"21",value:e=>e["community_other"]},{label:"Community: SNS",index:"22",value:e=>e["community_sns"]},{label:"Invalid entry",index:"23",value:e=>e["access_point_type_invalid_entry"]},{label:"Missing",index:"24",value:e=>e["access_point_type_missing"]},{isSectionTitle:!0,label:"Sex / Pregnancy"},{label:"Total males",index:"25",value:e=>e["sex_or_pregnancy_total_males"]},{label:"Male circumcised",index:"26",value:e=>e["sex_or_pregnancy_male_circumcised"]},{label:"Male non-circumcised",index:"27",value:e=>e["sex_or_pregnancy_male_non_circumcised"]},{label:"Total females",index:"28",value:e=>e["sex_or_pregnancy_total_females"]},{label:"Female non-pregnant",index:"29",value:e=>e["sex_or_pregnancy_female_non_pregnant"]},{label:"Female pregnant",index:"30",value:e=>e["sex_or_pregnancy_female_pregnant"]},{label:"Female breastfeeding",index:"31",value:e=>e["sex_or_pregnancy_female_breastfeeding"]},{label:"Invalid entry",index:"32",value:e=>e["sex_or_pregnancy_invalid_entry"]},{label:"Missing",index:"33",value:e=>e["sex_or_pregnancy_missing"]},{isSectionTitle:!0,label:"Age group (years)"},{label:"A: under 1",index:"34",value:e=>e["age_group_years_a_under_1"]},{label:"B: 1-14",index:"35",value:e=>e["age_group_years_b_1_to_14"]},{label:"C: 15-24",index:"36",value:e=>e["age_group_years_c_15_to_24"]},{label:"D: 25+",index:"37",value:e=>e["age_group_years_d_25_plus"]},{label:"Missing",index:"38",value:e=>e["age_group_years_missing"]},{isSectionTitle:!0,label:"Last HIV test"},{label:"Never tested",index:"39",value:e=>e["last_hiv_test_never_tested"]},{label:"Negative self-test",index:"40",value:e=>e["last_hiv_test_negative_self_test"]},{label:"Negative prof. test",index:"41",value:e=>e["last_hiv_test_negative_prof_test"]},{label:"Positive self-test",index:"42",value:e=>e["last_hiv_test_positive_self_test"]},{label:"Positive prof. test",index:"43",value:e=>e["last_hiv_test_positive_prof_test"]},{label:"Invalid self-test",index:"44",value:e=>e["last_hiv_test_invalid_self_test"]},{label:"Inconclusive prof. test",index:"45",value:e=>e["last_hiv_test_inconclusive_prof_test"]},{label:"Exposed infant",index:"46",value:e=>e["last_hiv_test_exposed_infant"]},{label:"Invalid entry",index:"47",value:e=>e["last_hiv_test_invalid_entry"]},{label:"Missing",index:"48",value:e=>e["last_hiv_test_missing"]},{isSectionTitle:!0,label:"Time since last HIV test"},{label:"12+ months",index:"49",value:e=>e["time_since_last_hiv_test_12_plus_months"]},{label:"6-11 months",index:"50",value:e=>e["time_since_last_hiv_test_6_to_11_months"]},{label:"3-5 months",index:"51",value:e=>e["time_since_last_hiv_test_3_to_5_months"]},{label:"14 days – 2 months",index:"52",value:e=>e["time_since_last_hiv_test_14_days_to_2_months"]},{label:"1 – 13 days",index:"53",value:e=>e["time_since_last_hiv_test_1_to_13_days"]},{label:"Same day",index:"54",value:e=>e["time_since_last_hiv_test_same_day"]},{label:"Invalid entry",index:"55",value:e=>e["time_since_last_hiv_test_invalid_entry"]},{label:"Not applicable / missing",index:"56",value:e=>e["time_since_last_hiv_test_not_applicable_or_missing"]},{isSectionTitle:!0,label:"Ever taken ARVs"},{label:"No",index:"57",value:e=>e["ever_taken_arvs_no"]},{label:"PrEP",index:"58",value:e=>e["ever_taken_arvs_prep"]},{label:"PEP",index:"59",value:e=>e["ever_taken_arvs_pep"]},{label:"ART",index:"60",value:e=>e["ever_taken_arvs_art"]},{label:"Invalid entry",index:"61",value:e=>e["ever_taken_arvs_invalid_entry"]},{label:"Missing",index:"62",value:e=>e["ever_taken_arvs_missing"]},{isSectionTitle:!0,label:"Time since last taken ARVs"},{label:"12+ months",index:"63",value:e=>e["time_since_last_taken_arvs_12_plus_months"]},{label:"6-11 months",index:"64",value:e=>e["time_since_last_taken_arvs_6_to_11_months"]},{label:"3-5 months",index:"65",value:e=>e["time_since_last_taken_arvs_3_to_5_months"]},{label:"14 days – 2 months",index:"66",value:e=>e["time_since_last_taken_arvs_14_days_to_2_months"]},{label:"1 – 13 days",index:"67",value:e=>e["time_since_last_taken_arvs_1_to_13_days"]},{label:"Same day",index:"68",value:e=>e["time_since_last_taken_arvs_same_day"]},{label:"Invalid entry",index:"69",value:e=>e["time_since_last_taken_arvs_invalid_entry"]},{label:"Not applicable / missing",index:"70",value:e=>e["time_since_last_taken_arvs_not_applicable_or_missing"]},{isSectionTitle:!0,label:"Risk category"},{label:"Low",index:"71",value:e=>e["risk_category_low"]},{label:"Ongoing",index:"72",value:e=>e["risk_category_ongoing"]},{label:"High-risk event",index:"73",value:e=>e["risk_category_highrisk_event"]},{label:"Not done",index:"74",value:e=>e["risk_category_not_done"]},{label:"Invalid entry",index:"75",value:e=>e["risk_category_invalid_entry"]},{label:"Missing",index:"76",value:e=>e["risk_category_missing"]},{isSectionTitle:!0,label:"HIV test 1 result"},{label:"Negative",index:"77",value:e=>e["hiv_test_1_result_negative"]},{label:"Positive",index:"78",value:e=>e["hiv_test_1_result_positive"]},{label:"Not done",index:"79",value:e=>e["hiv_test_1_result_not_done"]},{label:"Invalid entry",index:"80",value:e=>e["hiv_test_1_result_invalid_entry"]},{label:"Missing",index:"81",value:e=>e["hiv_test_1_result_missing"]},{isSectionTitle:!0,label:"Hepatitis B test result"},{label:"Negative",index:"82",value:e=>e["hepatitis_b_test_result_negative"]},{label:"Positive",index:"83",value:e=>e["hepatitis_b_test_result_positive"]},{label:"Not done",index:"84",value:e=>e["hepatitis_b_test_result_not_done"]},{label:"Invalid entry",index:"85",value:e=>e["hepatitis_b_test_result_invalid_entry"]},{label:"Missing",index:"86",value:e=>e["hepatitis_b_test_result_missing"]},{isSectionTitle:!0,label:"Syphilis test result"},{label:"Negative",index:"87",value:e=>e["syphilis_test_result_negative"]},{label:"Positive",index:"88",value:e=>e["syphilis_test_result_positive"]},{label:"Not done",index:"89",value:e=>e["syphilis_test_result_not_done"]},{label:"Invalid entry",index:"90",value:e=>e["syphilis_test_result_invalid_entry"]},{label:"Missing",index:"91",value:e=>e["syphilis_test_result_missing"]},{isSectionTitle:!0,label:"Partner present"},{label:"Yes",index:"92",value:e=>e["partner_present_yes"]},{label:"No",index:"93",value:e=>e["partner_present_no"]},{label:"Invalid entry",index:"94",value:e=>e["partner_present_invalid_entry"]},{label:"Missing",index:"95",value:e=>e["partner_present_missing"]},{isSectionTitle:!0,label:"Partner HIV status"},{label:"No partner",index:"96",value:e=>e["partner_hiv_status_no_partner"]},{label:"HIV status unknown",index:"97",value:e=>e["partner_hiv_status_hiv_status_unknown"]},{label:"HIV negative",index:"98",value:e=>e["partner_hiv_status_hiv_negative"]},{label:"HIV positive, ART unknown",index:"99",value:e=>e["partner_hiv_status_hiv_positive_art_unknown"]},{label:"HIV positive, not on ART",index:"100",value:e=>e["partner_hiv_status_hiv_positive_not_on_art"]},{label:"HIV positive, on ART",index:"101",value:e=>e["partner_hiv_status_hiv_positive_on_art"]},{label:"Invalid entry",index:"102",value:e=>e["partner_hiv_status_invalid_entry"]},{label:"Missing",index:"103",value:e=>e["partner_hiv_status_missing"]},{isSectionTitle:!0,label:"Referral for HIV re-testing"},{label:"No re-test needed",index:"104",value:e=>e["referral_for_hiv_retesting_no_retest_needed"]},{label:"Re-test needed",index:"105",value:e=>e["referral_for_hiv_retesting_retest_needed"]},{label:"Confirmatory test",index:"106",value:e=>e["referral_for_hiv_retesting_confirmatory_test"]},{label:"Invalid entry",index:"107",value:e=>e["referral_for_hiv_retesting_invalid_entry"]},{label:"Missing",index:"108",value:e=>e["referral_for_hiv_retesting_missing"]},{isSectionTitle:!0,label:"Referral for PrEP"},{label:"No",index:"109",value:e=>e["referral_for_prep_no"]},{label:"Yes",index:"110",value:e=>e["referral_for_prep_yes"]},{label:"Invalid entry",index:"111",value:e=>e["referral_for_prep_invalid_entry"]},{label:"Missing",index:"112",value:e=>e["referral_for_prep_missing"]},{isSectionTitle:!0,label:"FRS given"},{label:"Family referral slips: sum",index:"113",value:e=>e["frs_given_family_referral_slips_sum"]},{label:"Invalid entry",index:"114",value:e=>e["frs_given_invalid_entry"]},{isSectionTitle:!0,label:"Male condoms given"},{label:"Male condoms: sum",index:"115",value:e=>e["male_condoms_given_male_condoms_sum"]},{label:"Invalid entry",index:"116",value:e=>e["male_condoms_given_invalid_entry"]},{isSectionTitle:!0,label:"Female condoms given"},{label:"Female condoms: sum",index:"117",value:e=>e["female_condoms_given_female_condoms_sum"]},{label:"Invalid entry",index:"118",value:e=>e["female_condoms_given_invalid_entry"]},{isSectionTitle:!0,label:"Linking with HIV confirmatory register"},{label:"Total clients: HIV test 1 positive",index:"119",value:e=>e["linking_with_hiv_confirmatory_register_total_clients_hiv_test_1_positive"]},{label:"Linked",index:"120",value:e=>e["linking_with_hiv_confirmatory_register_linked"]},{label:"Missing (Link-ID not in conf. register)",index:"121",value:e=>e["missing_link_id_not_in_conf_register"]},{label:"Total clients: HIV test 1 negative",index:"122",value:e=>e["total_clients_hiv_test_1_negative"]},{label:"Not applicable (not linked)",index:"123",value:e=>e["not_applicable_not_linked"]},{label:"Invalid (Link-ID in conf. register)",index:"124",value:e=>e["invalid_link_id_in_conf_register"]}]};return{params:e}}}),r=l("d959"),_=l.n(r);const c=_()(s,[["render",i]]);t["default"]=c},"88ab":function(e,t,l){},"8e6a":function(e,t,l){"use strict";l("4064")},"954d":function(e,t,l){"use strict";var a=l("7a23");const i=Object(a["withScopeId"])("data-v-6b2171ae");Object(a["pushScopeId"])("data-v-6b2171ae");const n={class:"header-text-list"},o={key:0},s={class:"report-content"},r=Object(a["createTextVNode"])("Date Generated: "),_=Object(a["createTextVNode"])("APP version: "),c=Object(a["createTextVNode"])("API version: ");Object(a["popScopeId"])();const d=i((function(e,t,l,d,u,v){const b=Object(a["resolveComponent"])("ion-img"),p=Object(a["resolveComponent"])("ion-thumbnail"),m=Object(a["resolveComponent"])("ion-label"),y=Object(a["resolveComponent"])("ion-item"),g=Object(a["resolveComponent"])("ion-toolbar"),x=Object(a["resolveComponent"])("ion-header"),f=Object(a["resolveComponent"])("ion-content"),h=Object(a["resolveComponent"])("ion-chip"),O=Object(a["resolveComponent"])("ion-footer"),j=Object(a["resolveComponent"])("his-footer"),k=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createBlock"])(k,null,{default:i(()=>[Object(a["createVNode"])(x,null,{default:i(()=>[Object(a["createVNode"])(g,null,{default:i(()=>[Object(a["createVNode"])(y,null,{default:i(()=>[e.reportLogo?(Object(a["openBlock"])(),Object(a["createBlock"])(p,{key:0},{default:i(()=>[Object(a["createVNode"])(b,{src:e.reportLogo},null,8,["src"])]),_:1})):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(m,null,{default:i(()=>[Object(a["createVNode"])("ul",n,[Object(a["createVNode"])("li",null,[Object(a["createVNode"])("b",null,Object(a["toDisplayString"])(e.title),1)]),e.period?(Object(a["openBlock"])(),Object(a["createBlock"])("li",o,[Object(a["createVNode"])("b",null,Object(a["toDisplayString"])(e.period),1)])):Object(a["createCommentVNode"])("",!0)])]),_:1})]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(f,null,{default:i(()=>[Object(a["createVNode"])("div",s,[Object(a["renderSlot"])(e.$slots,"default")])]),_:3}),Object(a["createVNode"])(O,null,{default:i(()=>[Object(a["createVNode"])(g,null,{default:i(()=>[Object(a["createVNode"])(h,{color:"primary"},{default:i(()=>[r,Object(a["createVNode"])("b",null,Object(a["toDisplayString"])(e.dateGenerated),1)]),_:1}),Object(a["createVNode"])(h,{color:"primary"},{default:i(()=>[_,Object(a["createVNode"])("b",null,Object(a["toDisplayString"])(e.appVersion),1)]),_:1}),Object(a["createVNode"])(h,{color:"primary"},{default:i(()=>[c,Object(a["createVNode"])("b",null,Object(a["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(j,{color:"dark",btns:e.buttons},null,8,["btns"])]),_:1})}));var u=l("8a30"),v=l("1718"),b=l("0f25"),p=l("6c02"),m=l("1c74"),y=Object(a["defineComponent"])({components:{IonLabel:u["x"],IonItem:u["w"],HisFooter:b["a"],IonPage:u["D"],IonHeader:u["q"],IonContent:u["n"],IonToolbar:u["S"],IonChip:u["l"],IonFooter:u["o"],IonThumbnail:u["Q"],IonImg:u["s"]},props:{title:{type:String},period:{type:String},logo:{type:String},toCSV:{type:Function,required:!1},toPDF:{type:Function,required:!1},configure:{type:Function,required:!1},refreshReport:{type:Function,required:!0},dateGenerated:{type:String,default:"-"}},setup(e){const t=Object(p["f"])(),l=[],i=m["e"].getCoreVersion(),n=m["e"].getApiVersion(),o=Object(a["computed"])(()=>e.logo?Object(v["a"])(e.logo):null);function s(e,t){return{name:e.name||"Btn",size:e.size||"large",slot:e.slot||"start",color:e.color||"primary",visible:e.visible||!0,onClick:t}}return"function"===typeof e.toCSV&&l.push(s({name:"CSV"},e.toCSV)),"function"===typeof e.toPDF&&l.push(s({name:"PDF"},e.toPDF)),"function"===typeof e.configure&&l.push(s({name:"Set Date",slot:"end",color:"primary"},e.configure)),l.push(s({name:"Refresh",slot:"end",color:"warning"},e.refreshReport)),l.push(s({name:"Finish",slot:"end",color:"success"},()=>t.push("/"))),{buttons:l,appVersion:i,apiVersion:n,reportLogo:o}}}),g=(l("ccba"),l("d959")),x=l.n(g);const f=x()(y,[["render",d],["__scopeId","data-v-6b2171ae"]]);t["a"]=f},ccba:function(e,t,l){"use strict";l("88ab")}}]);
//# sourceMappingURL=chunk-00abb29c.a6997c19.js.map