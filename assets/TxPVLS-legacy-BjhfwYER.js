System.register(["./ReportMixin.vue_vue_type_script_lang-legacy-CHLSQ8v_.js","./TableReportTemplate-legacy-B8kkJ7he.js","./index-legacy-BsbMrqEO.js","./viral_load_report-legacy-ySFdthhp.js","./v2utils-legacy-i8Yf9CmJ.js","./BasicReportTemplate-legacy-CTVmLSqg.js","./Export-legacy-BCoNjk-A.js","./Pagination-legacy-DXSkeWTn.js","./HisStandardForm-legacy-BbU4Bs9R.js","./ReportErrors-legacy-B8HqD67j.js","./TableView-legacy-gG0hdQFU.js"],(function(t,e){"use strict";var o,i,r,l,s,a,n,d,h,w,g,u,c,_,p,D;return{setters:[t=>{o=t._},t=>{i=t.R},t=>{r=t.d,l=t.a5,s=t.aq,a=t.as,n=t.aK,d=t.dk,h=t.a8,w=t.ad,g=t.u,u=t.v,c=t.w,_=t.x},t=>{p=t.V},t=>{D=t.A},null,null,null,null,null,null],execute:function(){const e=r({mixins:[o],components:{ReportTemplate:i,IonPage:l},data:()=>({cohort:{},rows:[],totals:{F:{},M:{}},columns:[[s.thTxt("Age group"),s.thTxt("Gender"),s.thTxt("TX_CURR"),s.thTxt("Due for VL"),s.thTxt("Routine (Sample Drawn)"),s.thTxt("Targeted (Sample Drawn)"),s.thTxt("Routine (High VL (>=1000 copies))"),s.thTxt("Targeted High VL (>=1000 copies)"),s.thTxt("Routine (Low VL (<1000 copies))"),s.thTxt("Targeted (Low VL (<1000 copies))")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async onPeriod(t,e){this.rows=[],this.totals={F:{},M:{}},this.report=new p,this.report.setOccupation(e.occupation),this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.period=this.report.getDateIntervalPeriod(),this.cohort=await this.report.getVLCoverage(),await this.setRows("F"),await this.setRows("M"),this.setAllMalesTotalsRow(),await this.setFemaleTotalsRow()},setTotals(t,e,o){this.totals[e][t]||(this.totals[e][t]=[]),this.totals[e][t]=this.totals[e][t].concat(o)},drillDown(t,e){return t.length>=1?s.tdLink(t.length,(async()=>(await a.create({component:D,backdropDismiss:!1,cssClass:"large-modal",componentProps:{subtitle:this.period,patientIdentifiers:t,title:e,onFinish:()=>a.getTop().then((t=>t&&a.dismiss()))}})).present())):s.td(0)},async setFemaleTotalsRow(){const t=this.totals.F,e=n.uniq(Object.values(t).flat(1)),o=await this.report.getMaternalStatus(e),i=o.FBf.concat(o.FP),r=(t,e)=>e.filter((e=>o[t].includes(e))),l=t=>t.filter((t=>!i.includes(t)));this.rows.push([s.td("All"),s.td("FP"),this.drillDown(r("FP",t.tx_curr),"TX_CURR FP"),this.drillDown(r("FP",t.due_for_vl),"Due for VL FP"),this.drillDown(r("FP",t.drawn_routine),"Routine (Sample Drawn) FP"),this.drillDown(r("FP",t.drawn_targeted),"Targetted (Sample Drawn) FP"),this.drillDown(r("FP",t.high_vl_routine),"Routine (High VL (>=1000 copies)) FP"),this.drillDown(r("FP",t.high_vl_targeted),"Targeted High VL (>=1000 copies) FP"),this.drillDown(r("FP",t.low_vl_routine),"Routine (Low VL (<1000 copies)) FP"),this.drillDown(r("FP",t.low_vl_targeted),"Targeted (Low VL (<1000 copies)) FP")]),this.rows.push([s.td("All"),s.td("FNP"),this.drillDown(l(t.tx_curr),"TX_CURR FNP"),this.drillDown(l(t.due_for_vl),"Due for VL FNP"),this.drillDown(l(t.drawn_routine),"Routine (Sample Drawn) FNP"),this.drillDown(l(t.drawn_targeted),"Targetted (Sample Drawn) FNP"),this.drillDown(l(t.high_vl_routine),"Routine (High VL (>=1000 copies)) FNP"),this.drillDown(l(t.high_vl_targeted),"Targeted High VL (>=1000 copies) FNP"),this.drillDown(l(t.low_vl_routine),"Routine (Low VL (<1000 copies)) FNP"),this.drillDown(l(t.low_vl_targeted),"Targeted (Low VL (<1000 copies)) FNP")]),this.rows.push([s.td("All"),s.td("FBF"),this.drillDown(r("FBf",t.tx_curr),"TX_CURR FBf"),this.drillDown(r("FBf",t.due_for_vl),"Due for VL FBf"),this.drillDown(r("FBf",t.drawn_routine),"Routine (Sample Drawn) FBf"),this.drillDown(r("FBf",t.drawn_targeted),"Targetted (Sample Drawn) FBf"),this.drillDown(r("FBf",t.high_vl_routine),"Routine (High VL (>=1000 copies)) FBf"),this.drillDown(r("FBf",t.high_vl_targeted),"Targeted High VL (>=1000 copies) FBf"),this.drillDown(r("FBf",t.low_vl_routine),"Routine (Low VL (<1000 copies)) FBf"),this.drillDown(r("FBf",t.low_vl_targeted),"Targeted (Low VL (<1000 copies)) FBf")])},setAllMalesTotalsRow(){const t=this.totals.M;return this.rows.push([s.td("All"),s.td("Male"),this.drillDown(t.tx_curr,"TX_CURR Male"),this.drillDown(t.due_for_vl,"Due for VL Male"),this.drillDown(t.drawn_routine,"Routine (Sample Drawn) Male"),this.drillDown(t.drawn_targeted,"Targetted (Sample Drawn) Male"),this.drillDown(t.high_vl_routine,"Routine (High VL (>=1000 copies)) Male"),this.drillDown(t.high_vl_targeted,"Targeted High VL (>=1000 copies) Male"),this.drillDown(t.low_vl_routine,"Routine (Low VL (<1000 copies)) Male"),this.drillDown(t.low_vl_targeted,"Targeted (Low VL (<1000 copies)) Male")])},async setRows(t){const e=this.formatGender(t);for(const o of d){const i=(e,o,i)=>(this.setTotals(e,t,o),this.drillDown(o,i));this.rows.push([s.td(o),s.td(e),i("tx_curr",n.get(this.cohort,`${o}.${t}.tx_curr`,[]),`${o} TX_CURR (${e})`),i("due_for_vl",n.get(this.cohort,`${o}.${t}.due_for_vl`,[]),`${o} Due for VL (${e})`),i("drawn_routine",n.get(this.cohort,`${o}.${t}.drawn.routine`,[]),`${o} Routine (Sample Drawn) (${e}s)`),i("drawn_targeted",n.get(this.cohort,`${o}.${t}.drawn.targeted`,[]),`${o} Targeted (Sample Drawn) (${e}s)`),i("high_vl_routine",n.get(this.cohort,`${o}.${t}.high_vl.routine`,[]),`${o} Routine (High VL (>=1000 copies)) (${e}s)`),i("high_vl_targeted",n.get(this.cohort,`${o}.${t}.high_vl.targeted`,[]),`${o} Targeted High VL (>=1000 copies) (${e}s)`),i("low_vl_routine",n.get(this.cohort,`${o}.${t}.low_vl.routine`,[]),`${o} Routine (Low VL (<1000 copies)) (${e}s)`),i("low_vl_targeted",n.get(this.cohort,`${o}.${t}.low_vl.targeted`,[]),`${o} Targeted (Low VL (<1000 copies)) (${e}s)`)])}}}});t("default",h(e,[["render",function(t,e,o,i,r,l){const s=w("report-template"),a=w("ion-page");return g(),u(a,null,{default:c((()=>[_(s,{title:"PEPFAR TX_PVLS Report",period:t.period,rows:t.rows,fields:t.fields,columns:t.columns,config:{showIndex:!0},reportPrefix:"PEPFAR",onReportConfiguration:t.onPeriod},null,8,["period","rows","fields","columns","onReportConfiguration"])])),_:1})}]]))}}}));