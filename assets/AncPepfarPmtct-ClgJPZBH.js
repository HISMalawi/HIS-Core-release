import{A as _}from"./anc_pepfar_report_service-jgQW6p1N.js";import{d as m,aq as t,a8 as g,ad as i,u,v as d,w,x as f}from"./index-CG6KEPsv.js";import{A as T}from"./AncReports-C5rL_JMZ.js";import{R as v}from"./TableReportTemplate-B9gJG81F.js";import"./BasicReportTemplate-DH-zB7dh.js";import"./Export-ngX2Az_3.js";import"./index-bO2fy8Iw.js";import"./Pagination-BNbmZwZV.js";import"./HisStandardForm-CWpBcokh.js";import"./ReportErrors-CnbOzUh9.js";const h=m({components:{ReportTemplate:v},setup(){const o=T("PMTCT STAT"),{reportData:r,drill:n,fd:s}=o;return r.columns=[[t.thTxt("Age group"),t.thTxt("Gender"),t.thTxt("Known positive"),t.thTxt("Newly Tested Positives"),t.thTxt("New Negatives"),t.thTxt("Recent negative"),t.thTxt("Not Done"),t.thTxt("New on ART	"),t.thTxt("Already on ART")]],{...o,onPeriod:async(l,a)=>{r.rows=[],r.service=new _,r.service.setStartDate(a.start_date),r.service.setEndDate(a.end_date),r.period="".concat(s(a.start_date)," to ").concat(s(a.end_date)),(await r.service.generatePmtctStatArt()).forEach(e=>{r.rows.push([t.td(e.age_group),t.td("Female"),n("Known positive ".concat(e.age_group),e.known_positive),n("Newly Tested Positives ".concat(e.age_group),e.newly_tested_positives),n("New Negatives ".concat(e.age_group),e.new_negatives),n("Recent negative ".concat(e.age_group),e.recent_negatives),n("Not Done ".concat(e.age_group),e.not_done),n("New on ART ".concat(e.age_group),e.new_on_art),n("Already on ART ".concat(e.age_group),e.already_on_art)])})}}}});function A(o,r,n,s,c,l){const a=i("report-template"),p=i("ion-page");return u(),d(p,null,{default:w(()=>[f(a,{title:o.title,period:o.period,rows:o.rows,fields:o.fields,columns:o.columns,config:{showIndex:!0},reportPrefix:"Pepfar",onReportConfiguration:o.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])]),_:1})}const b=g(h,[["render",A]]);export{b as default};