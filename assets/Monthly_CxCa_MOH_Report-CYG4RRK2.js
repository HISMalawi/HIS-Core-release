import{d as ae,S as re,X as se,aY as le,a1 as ie,U as ce,R as ue,a3 as de,a4 as fe,W as ge,cG as pe,ap as ve,r as m,ar as K,aH as _e,cL as me,cM as be,cN as he,cO as ye,cP as Ce,dJ as De,b5 as we,al as I,bv as te,aK as W,a8 as ne,ad as g,u as c,B as v,x as d,w as u,z as P,E as Y,H as k,K as w,v as V,G as $,C as j,a$ as Ie,aF as Se,a5 as Oe,cX as Te,t as ke,Q as $e,aj as Ne,az as Ae,cW as z,as as U,ab as x,ac as B,ai as Re}from"./index-DrPQ21-i.js";import{b as He,t as Ee}from"./Export-CWTuI3QV.js";import{C as Me}from"./cxca_report_service-C9LBAqys.js";import{D as Ve}from"./DrillPatientIds-DI8gru2H.js";import"./TableView-DYQq8HZp.js";const Fe=ae({components:{IonToolbar:re,IonItem:se,IonIcon:le,IonLabel:ie,IonTitle:ce,IonHeader:ue,IonButton:de,IonFooter:fe,IonContent:ge,IonButtons:pe},props:{title:{type:String,default:"Report"},subtitle:{type:String},columns:{type:Object,required:!0},columnData:{type:Array,default:()=>[]},onFinish:{type:Function},onRefresh:{type:Function},onConfigure:{type:Function},csvQuarter:{type:String},headers:{type:Array,default:()=>[]},order:{type:Array,default:()=>[]},csvSpacing:{type:Number},csvSubHeader:{type:Array,default:()=>[]},csvData:{type:Array,default:()=>[]}},setup(n){const b=ve(),S=m([]),O=m(""),y=m("desc"),A=K(()=>n.columns.slice(0,1)),C=K(()=>{var s;const o=[];return(s=n.columnData)==null||s.forEach(e=>{const a=n.columns[1].map(t=>{let r="",l={},i=1;try{W.isEmpty(e)?r="...":typeof t.value=="function"?r=t.value(e):r=e[t.ref]||""}catch(h){r="_ERROR_",console.error(h)}return typeof t.dataStyle=="function"&&(l=t.dataStyle(e)),typeof t.colSpan=="function"&&(i=t.colSpan(e)),{column:t,data:e,value:r,styling:l,colSpan:i,[t.ref||"nada"]:r}});o.push({row:a,data:e,searchIndex:[...a,a.map(t=>t.value).join(" ")]})}),o}),_=o=>{O.value=o,y.value=y.value==="asc"?"desc":"asc"},p=()=>{typeof n.onFinish=="function"?n.onFinish():b.push("/")},R=o=>{var s,e;try{typeof((s=o.column)==null?void 0:s.tdClick)=="function"&&((e=o.column)==null||e.tdClick(o));return}catch(a){console.error(a)}},T=()=>n.columns.reduce((o,s)=>o.concat(s),[]).filter(o=>o.value||o.ref),H=()=>{var s;const o=(s=window==null?void 0:window.document)==null?void 0:s.getElementById("report-content");He("\n                <html>\n                    <head> \n                        <style> \n                        table {\n                            border-collapse: collapse;\n                        }\n                        th, td {\n                            width: 4%;\n                            text-align: left;\n                            border: solid 1px black;\n                        }\n                        td {\n                            border-bottom: 1px solid rgb(165, 165, 165);\n                            padding: 0.6em;\n                            font-weight: 500;\n                            font-size: .8em;\n                        }\n                        </style>    \n                    </head>\n                <body> \n                 ".concat(o.innerHTML,"    \n                </body>\n                </html>\n            "))},F=()=>{const o="".concat(I.getLocationName()||"Unknown site","-").concat(n.title,"-").concat(n.subtitle,"-").concat(I.getSessionDate());Ee([n.headers],[...n.csvData,["Date Created: ".concat(te().format("DD/MMM/YYYY HH:MM:ss"))],["Quarter: ".concat(n.csvQuarter||n.subtitle)],["HIS-Core Version: ".concat(I.getCoreVersion())],["API Version: ".concat(I.getApiVersion())],["Site UUID: ".concat(I.getSiteUUID())],["Generated by: ".concat(I.getUserName())]],o)},E=o=>{o.forEach(s=>{const e=T().map(a=>{let t="",r={},l=1;try{W.isEmpty(s)?t="...":typeof a.value=="function"?t=a.value(s):t=s[a.ref]||""}catch(i){t="_ERROR_",console.error(i)}return typeof a.dataStyle=="function"&&(r=a.dataStyle(s)),typeof a.colSpan=="function"&&(l=a.colSpan(s)),{column:a,data:s,value:t,styling:r,colSpan:l,[a.ref||"nada"]:t}});S.value.push({row:e,data:s,searchIndex:[...e,e.map(a=>a.value).join(" ")]})})};return _e(()=>n.columnData,o=>{S.value=[],Array.isArray(o)&&E(o)},{immediate:!0,deep:!0}),{sortColumn:_,onClickTablecell:R,toPDF:H,toCSV:F,finish:p,headerRow:A,sync:me,search:be,close:he,arrowUp:ye,arrowDown:Ce,document:De,calendar:we,sortOrder:y,sectionOne:C,columnSorted:O}}}),Le={key:0},Pe={class:"his-sm-text"},Ye={id:"report-content"},je={class:"art-report-theme"},ze={class:"stick-report-header"},Ue=["colspan","rowspan","onClick"],Be=["onClick","colspan"];function Qe(n,b,S,O,y,A){const C=g("ion-title"),_=g("ion-icon"),p=g("ion-button"),R=g("ion-buttons"),T=g("ion-toolbar"),H=g("ion-header"),F=g("ion-label"),E=g("ion-item"),o=g("ion-content"),s=g("ion-footer");return c(),v($,null,[d(H,null,{default:u(()=>[d(T,null,{default:u(()=>[d(C,{class:"his-md-text"},{default:u(()=>[P(Y(n.title)+" ",1),n.subtitle?(c(),v("br",Le)):k("",!0),w("span",Pe,Y(n.subtitle),1)]),_:1}),d(R,{slot:"end"},{default:u(()=>[typeof n.onConfigure=="function"?(c(),V(p,{key:0,onClick:n.onConfigure},{default:u(()=>[d(_,{size:"large",icon:n.calendar},null,8,["icon"])]),_:1},8,["onClick"])):k("",!0),typeof n.onRefresh=="function"?(c(),V(p,{key:1,onClick:n.onRefresh,color:"success",size:"large"},{default:u(()=>[d(_,{size:"large",icon:n.sync},null,8,["icon"])]),_:1},8,["onClick"])):k("",!0)]),_:1})]),_:1})]),_:1}),d(o,{"scroll-y":"","scroll-x":""},{default:u(()=>[w("div",Ye,[w("table",je,[w("thead",ze,[(c(!0),v($,null,j(n.headerRow,(e,a)=>(c(),v("tr",{key:a},[(c(!0),v($,null,j(e,(t,r)=>{var l,i;return c(),v("th",{key:r,colspan:((l=t==null?void 0:t.span)==null?void 0:l.thColspan)||1,rowspan:((i=t==null?void 0:t.span)==null?void 0:i.thRowspan)||1,onClick:h=>n.sortColumn(t.ref)},[d(E,{lines:"none"},{default:u(()=>[n.columnSorted&&n.columnSorted===t.ref?(c(),V(_,{key:0,icon:n.sortOrder==="asc"?n.arrowUp:n.arrowDown},null,8,["icon"])):k("",!0),a<n.columns.length-1?(c(),V(F,{key:1,class:"ion-text-center"},{default:u(()=>[w("b",null,Y(t.label),1)]),_:2},1024)):k("",!0)]),_:2},1024)],8,Ue)}),128))]))),128))]),w("tbody",null,[(c(!0),v($,null,j(n.sectionOne,(e,a)=>(c(),v("tr",{key:a},[(c(!0),v($,null,j(e.row||[],(t,r)=>{var l;return c(),v($,{key:r},[t.value!="TH"?(c(),v("td",{key:0,onClick:()=>n.onClickTablecell(t),class:Ie({"clickable-cell":(l=t==null?void 0:t.column)==null?void 0:l.tdClick}),colspan:t.colSpan},[w("b",{style:Se(t.styling),class:"his-sm-text"},Y(t.value),5)],10,Be)):k("",!0)],64)}),128))]))),128))])])])]),_:1}),d(s,null,{default:u(()=>[d(T,{color:"dark"},{default:u(()=>[d(p,{onClick:b[0]||(b[0]=e=>n.toCSV()),size:"large"},{default:u(()=>[P(" CSV ")]),_:1}),d(p,{onClick:b[1]||(b[1]=e=>n.toPDF()),size:"large"},{default:u(()=>[P(" PDF ")]),_:1}),d(p,{onClick:n.finish,color:"success",size:"large",slot:"end"},{default:u(()=>[P(" Finish ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}const We=ne(Fe,[["render",Qe],["__scopeId","data-v-26464ae3"]]),Q=m([]),N=m(""),M=m(""),J=m(""),G=m(!1),ee=m(""),X=m([]),qe=ae({components:{IonPage:Oe,IonLoading:Te,v2Datatable:We},setup(){const n=["screened_disaggregated_by_age","screened_disaggregated_by_hiv_status","screened_disaggregated_by_reason_for_visit","screened_disaggregated_by_screening_method","screening_results_hiv_positive","screening_results_hiv_negative","suspects_disaggregated_by_age","total_treated","total_treated_disaggregated_by_tx_option","referral_reasons","referral_feedback","family_planning"],b=e=>Math.floor(e.length/2),S=(e,a)=>e.slice(0,a),O=(e,a)=>e.slice(a),y=(e,a)=>{const t=[];for(let r=0;r<e.length;r++)t.push(e[r].concat(a[r]));return t},A=e=>{const a=[],t=[],r=Object.keys(e);let l,i=0,h=0,D="";return r.forEach(f=>{Object.entries(e[f]).forEach(([L,q])=>{l!=f&&(i=i+1,h=0,T.forEach(Z=>{Z[0]==f&&(f=Z[1])}),a.push([i,f,"TH"]),t.push([i,f,""])),Array.isArray(q)?(h=h+1,D=i+"."+h,a.push([D,L,q]),t.push([D,L,q])):(a.push([D,L,[]]),t.push([D,L,[]])),l=f})}),X.value=t,a},C=e=>{const a={};return n.forEach(t=>{e[t]&&(a[t]=e[t])}),a},_=async(e,a)=>{a.length<=0||(await U.create({component:Ve,backdropDismiss:!1,cssClass:"large-modal",componentProps:{title:e,subtitle:J,patientIdentifiers:a,onFinish:()=>U.getTop().then(t=>t&&U.dismiss())}})).present()},p=e=>(e.forEach(a=>{a[2]=a[2]==="TH"?" ":a[2],Array.isArray(a[5])&&(a[5]=""+a[5].length),Array.isArray(a[2])&&(a[2]=""+a[2].length,a[5]=a[5]==="TH"?" ":a[5])}),e),R=["age_group","cryotherapy","thermocoagulation","leep","via_deffered","via_reffered","suspected_reffered"],T=[["family_planning","Offered family planning services"],["referral_feedback","Number of clients with referral feedback"],["referral_reasons","Number of clients referred disaggregated by referral reasons"],["screened_disaggregated_by_age","Number of clients screened for cervical cancer disaggregated by age"],["screened_disaggregated_by_hiv_status","Number of clients screened for cervical cancer disaggregated by HIV status"],["screened_disaggregated_by_reason_for_visit","Number of clients screened for cervical cancer disaggregated by reason for visit"],["screened_disaggregated_by_screening_method","Number of clients screened disaggregated by screening method"],["screening_results_hiv_negative","Cervical cancer screening results (HIV- / unknown)"],["screening_results_hiv_positive","Cervical cancer screening results (HIV+)"],["suspects_disaggregated_by_age","Cervical Cancer suspects disaggregated by age"],["total_treated","Total number of clients treated"],["total_treated_disaggregated_by_tx_option","Number of clients treated disaggregated by treatment option"]],H=["Indicator #","Name of Indicator","Value","Indicator #","Name of Indicator","Value"],E=[[{label:"indicator #",ref:""},{label:"Name of indicator",ref:""},{label:"value",ref:""},{label:"indicator #",ref:""},{label:"Name of indicator",ref:""},{label:"value",ref:""}],[{label:"Indicator #",ref:"data.indicatorOne",secondaryLabel:"Indicator #",value:e=>e.indicatorOne},{label:"Name of Indicator",ref:"data.nameOfIndicatorOne",secondaryLabel:"Name of Indicator",value:e=>e.nameOfIndicatorOne,dataStyle:e=>e.valueOne==="TH"?{fontWeight:"bold"}:{fontWeight:"normal"},colSpan:e=>e.valueOne==="TH"?2:1},{label:"value",ref:"data.valueOne",secondaryLabel:"Value",value:e=>Array.isArray(e.valueOne)?e.valueOne.length:e.valueOne,tdClick:({data:e})=>_("".concat(e.indicatorOne," ").concat(e.nameOfIndicatorOne),e.valueOne)},{label:"Indicator #",ref:"data.indicatorTwo",secondaryLabel:"Indicator #",value:e=>e.indicatorTwo},{label:"Name of Indicator",ref:"data.nameOfIndicatorTwo",secondaryLabel:"Name of Indicator",value:e=>e.nameOfIndicatorTwo,dataStyle:e=>e.valueTwo==="TH"?{fontWeight:"bold"}:{fontWeight:"normal"},colSpan:e=>e.valueTwo==="TH"?2:1},{label:"value",ref:"data.valueTwo",secondaryLabel:"Value",value:e=>Array.isArray(e.valueTwo)?e.valueTwo.length:e.valueTwo,tdClick:({data:e})=>_("".concat(e.indicatorTwo," ").concat(e.nameOfIndicatorTwo),e.valueTwo)}]],o=async()=>{if(!(N.value&&M.value))return $e("Start date and end date required!");G.value=!0,Q.value=[];const e=new Me;e.startDate=N.value,e.endDate=M.value;try{const a=await e.getClinicReport("SCREENED FOR CXCA"),t=C(a),r=A(t),l=b(r),i=y(S(r,l),O(r,l)),h=W.cloneDeep(i);X.value=p(h);const D=i.map(f=>({indicatorOne:f[0],nameOfIndicatorOne:f[1],valueOne:f[2],indicatorTwo:f[3],nameOfIndicatorTwo:f[4],valueTwo:f[5]}));Q.value=D}catch(a){Ne("Unable to generate report!"),console.error(a)}G.value=!1},s=()=>Ae([{id:"year",helpText:"Select Year",type:x.TT_NUMBER,computedValue:e=>e.value,validation:e=>{const a=W.isPlainObject(e)?e.value:-1;return B.validateSeries([()=>B.required(e),()=>isNaN(parseInt("".concat(a)))?["Invalid year"]:null,()=>B.rangeOf(e,2e3,Re.getYear(I.getSessionDate()))])}},{id:"month",helpText:"Select Month",type:x.TT_SELECT,validation:e=>B.required(e),computedValue:e=>e.value,options:()=>[{label:"January",value:"01"},{label:"February",value:"02"},{label:"March",value:"03"},{label:"April",value:"04"},{label:"May",value:"05"},{label:"June",value:"06"},{label:"July",value:"07"},{label:"August",value:"08"},{label:"September",value:"09"},{label:"October",value:"10"},{label:"November",value:"11"},{label:"December",value:"12"}]}],e=>{N.value="".concat(e.year.value,"-").concat(e.month.value,"-01"),M.value=te(new Date(N.value).toISOString()).endOf("month").format("YYYY-MM-DD"),J.value="Period (".concat(z(N.value)," to ").concat(z(M.value),")"),U.dismiss(),ee.value="".concat(z(N.value)," to ").concat(z(M.value)),o()});return ke(()=>!Q.value.length&&s()),{columns:E,isLoading:G,reportData:Q,period:J,csvQuarter:ee,generate:o,configure:s,order:R,csvheaders:H,spacing:5,csvData:X}}});function Je(n,b,S,O,y,A){const C=g("ion-loading"),_=g("v2Datatable"),p=g("ion-page");return c(),V(p,null,{default:u(()=>[d(C,{"is-open":n.isLoading,message:"Please wait..."},null,8,["is-open"]),d(_,{title:"MONTHLY MOH Report",subtitle:n.period,columns:n.columns,columnData:n.reportData,rowsPerPage:25,onConfigure:n.configure,csvQuarter:n.csvQuarter,onRefresh:()=>n.generate(),order:n.order,headers:n.csvheaders,"csv-spacing":n.spacing,"csv-data":n.csvData},null,8,["subtitle","columns","columnData","onConfigure","csvQuarter","onRefresh","order","headers","csv-spacing","csv-data"])]),_:1})}const ea=ne(qe,[["render",Je]]);export{ea as default};