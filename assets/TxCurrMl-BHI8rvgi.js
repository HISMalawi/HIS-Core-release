import{_ as m}from"./ReportMixin.vue_vue_type_script_lang-DYy2lpd9.js";import{T as f}from"./tx_report_service-CpvsloX5.js";import{R as T}from"./TableReportTemplate-BDV868op.js";import{d as w,I,L as t,ah as R,cW as p,_ as D,r as h,o as F,c as x,w as P,b as g}from"./index-BFVcutZq.js";import"./HisStandardForm-DO3sZVdL.js";import"./ReportErrors-B0y1wUIE.js";const _=w({mixins:[m],components:{ReportTemplate:T,IonPage:I},data:()=>({title:"PEPFAR Tx ML Report",rows:[],drillData:{},columns:[[t.thTxt("Age group"),t.thTxt("Gender"),t.thTxt("Died"),t.thTxt("IIT <3 mo"),t.thTxt("IIT 3-5 mo"),t.thTxt("IIT 6+ mo"),t.thTxt("Transferred out"),t.thTxt("Refused (Stopped)")]],indexLabel:["Died","IIT <3 mo","IIT 3-5 mo","IIT 6+ mo","Tranferred out","Refused (Stopped)"],cohort:{}}),created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(e,r){this.rows=[],this.report=new f,this.report.setOccupation(r.occupation),this.report.setStartDate(r.start_date),this.report.setEndDate(r.end_date),this.period=this.report.getDateIntervalPeriod(),this.cohort=await this.report.getTxMlReport(),this.setRows("F"),this.setRows("M"),this.setTotalMaleRow(),this.setMaternalRows()},drilldown(e,r){const n=[[t.thTxt("ARV#"),t.thTxt("DOB"),t.thTxt("Dispensed"),t.thTxt("ARVs")]],o=async()=>{if(r in this.drillData)return this.drillData[r];const l=await this.report.getTxMMDClientLevelData(e);if(!l)return[];const d=this.report.remapTxClientLevelData(l).map(s=>{const a=s.drugs.map(i=>{const u="\n                                <table style='width: 100%;'> \n                                    <td style='width: 65%;'>".concat(i.name,"</td>\n                                    <td style='width: 30%;'>(").concat(i.quantity,", ").concat(i.dose," a day)</td>\n                                </table>"),c="".concat(i.name," (Quantity: ").concat(i.quantity," Dose: ").concat(i.dose,")");return{tableView:u,dataView:c}});return[t.td(s.id||"N/A"),t.tdDate(s.dob),t.tdDate(s.dispenseDate),t.td(a.map(i=>i.tableView).join("<p/>"),{value:a.map(i=>i.dataView).join("|")})]});return this.drillData[r]=d,d};return e.length<=0?t.td(0):t.tdLink(e.length,()=>this.drilldownAsyncRows(r,n,o))},aggregate(e,r){return Object.values(this.cohort).reduce((n,o)=>o[e]?[...o[e][this.indexLabel.indexOf(r)],...n]:n,[])},setTotalMaleRow(){const e=r=>this.drilldown(this.aggregate("M",r),r);this.rows.push([t.td("All"),t.td("Male"),e("Died"),e("IIT <3 mo"),e("IIT 3-5 mo"),e("IIT 6+ mo"),e("Tranferred out"),e("Refused (Stopped)")])},async setMaternalRows(){const e=this.indexLabel.reduce((s,a)=>[...s,{indicator:a,data:this.aggregate("F",a)}],[]),r=await this.report.getMaternalStatus(R.uniq(e.reduce((s,a)=>[...s,...a.data],[]).map(s=>s))),n=s=>e.reduce((a,i)=>i.indicator===s?[...a,...i.data]:a,[]),o=(s,a)=>this.drilldown(n(a).filter(i=>r[s].includes(i)),"All ".concat(a," Female Pregnant")),l=r.FBf.concat(r.FP),d=s=>this.drilldown(n(s).filter(a=>!l.includes(a)),"All ".concat(s," Female not pregnant"));this.rows.push([t.td("All"),t.td("FP"),o("FP","Died"),o("FP","IIT <3 mo"),o("FP","IIT 3-5 mo"),o("FP","IIT 6+ mo"),o("FP","Tranferred out"),o("FP","Refused (Stopped)")]),this.rows.push([t.td("All"),t.td("FNP"),d("Died"),d("IIT <3 mo"),d("IIT 3-5 mo"),d("IIT 6+ mo"),d("Tranferred out"),d("Refused (Stopped)")]),this.rows.push([t.td("All"),t.td("FBF"),o("FBf","Died"),o("FBf","IIT <3 mo"),o("FBf","IIT 3-5 mo"),o("FBf","IIT 6+ mo"),o("FBf","Tranferred out"),o("FBf","Refused (Stopped)")])},setRows(e){for(const r in p){const n=p[r],o=this.formatGender(e);try{const l=this.cohort[n][e],d="".concat(o,"s ").concat(n),s=l.map((a,i)=>this.drilldown(a,"".concat(d," ").concat(this.indexLabel[i])));this.rows.push([t.td(n),t.td(o),...s])}catch(l){this.rows.push([t.td(n),t.td(o),t.td(0),t.td(0),t.td(0),t.td(0),t.td(0),t.td(0)])}}}}});function $(e,r,n,o,l,d){const s=h("report-template"),a=h("ion-page");return F(),x(a,null,{default:P(()=>[g(s,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,config:{showIndex:!0},reportPrefix:"PEPFAR",onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])]),_:1})}const C=D(_,[["render",$]]);export{C as default};