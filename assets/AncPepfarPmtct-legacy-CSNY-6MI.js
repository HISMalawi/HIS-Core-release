System.register(["./anc_pepfar_report_service-legacy-CVm7AwIs.js","./index-legacy-DLdqxVnr.js","./AncReports-legacy-n5hiTX2O.js","./TableReportTemplate-legacy-BKTskeEM.js","./BasicReportTemplate-legacy-38jIYQh2.js","./Export-legacy-pUCWT6tL.js","./index-legacy-Cy5lJcFI.js","./Pagination-legacy-rWo9aFQy.js","./HisStandardForm-legacy-D9LtBbE8.js","./ReportErrors-legacy-C00jm-0H.js"],(function(e,t){"use strict";var o,n,r,a,s,i,l,g,p,c,d;return{setters:[e=>{o=e.A},e=>{n=e.d,r=e.ao,a=e.a6,s=e.ab,i=e.u,l=e.v,g=e.w,p=e.x},e=>{c=e.A},e=>{d=e.R},null,null,null,null,null,null],execute:function(){const t=n({components:{ReportTemplate:d},setup(){const e=c("PMTCT STAT"),{reportData:t,drill:n,fd:a}=e;return t.columns=[[r.thTxt("Age group"),r.thTxt("Gender"),r.thTxt("Known positive"),r.thTxt("Newly Tested Positives"),r.thTxt("New Negatives"),r.thTxt("Recent negative"),r.thTxt("Not Done"),r.thTxt("New on ART\t"),r.thTxt("Already on ART")]],{...e,onPeriod:async(e,s)=>{t.rows=[],t.service=new o,t.service.setStartDate(s.start_date),t.service.setEndDate(s.end_date),t.period=`${a(s.start_date)} to ${a(s.end_date)}`,(await t.service.generatePmtctStatArt()).forEach((e=>{t.rows.push([r.td(e.age_group),r.td("Female"),n(`Known positive ${e.age_group}`,e.known_positive),n(`Newly Tested Positives ${e.age_group}`,e.newly_tested_positives),n(`New Negatives ${e.age_group}`,e.new_negatives),n(`Recent negative ${e.age_group}`,e.recent_negatives),n(`Not Done ${e.age_group}`,e.not_done),n(`New on ART ${e.age_group}`,e.new_on_art),n(`Already on ART ${e.age_group}`,e.already_on_art)])}))}}}});e("default",a(t,[["render",function(e,t,o,n,r,a){const c=s("report-template"),d=s("ion-page");return i(),l(d,null,{default:g((()=>[p(c,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,config:{showIndex:!0},reportPrefix:"Pepfar",onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])])),_:1})}]]))}}}));