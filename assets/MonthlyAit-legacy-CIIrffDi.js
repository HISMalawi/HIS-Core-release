System.register(["./DataTableTemplate-legacy-B1efiMR-.js","./index-legacy-CNrLGT3P.js","./Layout-legacy-Bczfe5sC.js"],(function(e,l){"use strict";var a,o,r,n,t,i,p;return{setters:[e=>{a=e.H},e=>{o=e.d,r=e.dE,n=e._,t=e.r,i=e.o,p=e.c},null],execute:function(){const l=o({components:{HtsTemplate:a},setup(){const e=(e,l)=>e.age_group===l?e.age_group:[],l=new r("monthly_ait");return{params:{logo:"reports.png",title:"Monthly_AIT",prefix:"Clinic",columns:[[{label:"",exportable:!1},{label:"Unknown age",exportable:!1,colSpan:2},{label:"<15 years",exportable:!1,colSpan:2},{label:"15-19 years",exportable:!1,colSpan:2},{label:"20-24 years",exportable:!1,colSpan:2},{label:"25-29 years",exportable:!1,colSpan:2},{label:"30-34 years",exportable:!1,colSpan:2},{label:"35-39 years",exportable:!1,colSpan:2},{label:"40-44 years",exportable:!1,colSpan:2},{label:"45-49 years",exportable:!1,colSpan:2},{label:"50+ years",exportable:!1,colSpan:2},{label:"Total",exportable:!1,colSpan:2}],[{label:"Indicator",value:e=>e.indicator},{label:"M",columnType:"drilldown",exportLabel:e=>"unknown Male",value:l=>e(l,"unknown").M},{label:"F",columnType:"drilldown",exportLabel:e=>"unknown Female",value:l=>e(l,"unknown").F},{label:"M",columnType:"drilldown",exportLabel:e=>"<15 years Male",value:l=>e(l,"<15 years").M},{label:"F",columnType:"drilldown",exportLabel:e=>"<15 years Female",value:l=>e(l,"<15 years").F},{label:"M",columnType:"drilldown",exportLabel:e=>"15-19 years Male",value:l=>e(l,"15-19 years").M},{label:"F",columnType:"drilldown",exportLabel:e=>"15-19 years Female",value:l=>e(l,"15-19 years").F},{label:"M",columnType:"drilldown",exportLabel:e=>"20-24 years Male",value:l=>e(l,"20-24 years").M},{label:"F",columnType:"drilldown",exportLabel:e=>"20-24 years Female",value:l=>e(l,"20-24 years").F},{label:"M",columnType:"drilldown",exportLabel:e=>"25-29 years Male",value:l=>e(l,"25-29 years").M},{label:"F",columnType:"drilldown",exportLabel:e=>"25-29 years Female",value:l=>e(l,"25-29 years").F},{label:"M",columnType:"drilldown",exportLabel:e=>"30-34 years Male",value:l=>e(l,"30-34 years").M},{label:"F",columnType:"drilldown",exportLabel:e=>"30-34 years Female",value:l=>e(l,"30-34 years").F},{label:"M",columnType:"drilldown",exportLabel:e=>"35-39 years Male",value:l=>e(l,"35-39 years").M},{label:"F",columnType:"drilldown",exportLabel:e=>"35-39 years Female",value:l=>e(l,"35-39 years").F},{label:"M",columnType:"drilldown",exportLabel:e=>"40-44 years Male",value:l=>e(l,"40-44 years").M},{label:"F",columnType:"drilldown",exportLabel:e=>"40-44 years Female",value:l=>e(l,"40-44 years").F},{label:"M",columnType:"drilldown",exportLabel:e=>"45-49 years Male",value:l=>e(l,"45-49 years").M},{label:"F",columnType:"drilldown",exportLabel:e=>"45-49 years Female",value:l=>e(l,"45-49 years").F},{label:"M",columnType:"drilldown",exportLabel:e=>"50+ years Male",value:l=>e(l,"50+ years").M},{label:"F",columnType:"drilldown",exportLabel:e=>"50+ years Female",value:l=>e(l,"50+ years").F},{label:"M",columnType:"drilldown",exportLabel:e=>"Total Male",value:l=>e(l,"Total").M},{label:"F",columnType:"drilldown",exportLabel:e=>"Total Female",value:l=>e(l,"Total").F}]],hasPeriodSelection:!0,prePopulate:()=>[{indicator:"# of Index clients elligible for Partner Notification"},{indicator:"Testing entry - HTS"},{indicator:"Testing entry - ART"},{indicator:"# of Index clients offered Partner Notification services"},{indicator:"# of Index clients accepted Partner Notification services"},{indicator:"# of contacts elicited by Index Clients"},{indicator:"Tracing not attempted"},{indicator:"Not found"},{indicator:"Refused interview/HTS"},{indicator:"New positive"},{indicator:"New negative"},{indicator:"Inconclusive/Exp."},{indicator:"HIVST"},{indicator:"Recent negative"},{indicator:"Previous positive on ART"},{indicator:"Previous positive Not on ART"}],data:async(e,a,o)=>(l.startDate=o.start_date,l.endDate=o.end_date,l.requestReport())}}}});e("default",n(l,[["render",function(e,l,a,o,r,n){const s=t("hts-template");return i(),p(s,{params:e.params},null,8,["params"])}]]))}}}));