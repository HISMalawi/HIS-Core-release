const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PatientConfirmationCards-CRTGlp9q.js","assets/index-DrPQ21-i.js","assets/index-DTbC15fW.css","assets/PatientConfirmationCards-DoYo8luI.css"])))=>i.map(i=>d[i]);
import{aN as l,bG as v,bH as k,bI as j,bg as K,bv as O,d as q,W as J,R as Q,a4 as Z,a5 as tt,S as et,bJ as at,_ as nt,$ as it,a3 as st,b3 as rt,bh as ot,ak as ct,aK as m,ai as L,aA as F,bs as b,ah as f,aj as N,bK as lt,bL as S,au as P,bt as dt,bA as pt,br as ht,as as V,Q as $,af as H,by as w,M as U,s as ut,bz as mt,ag as gt,bu as ft,a8 as Dt,ad as u,u as I,v as E,w as d,x as h,K as o,z as p,E as g,B as yt,C as Nt,G as It,H as B,a6 as Et,a7 as _t}from"./index-DrPQ21-i.js";import{m as Pt}from"./GuidelineEngine-D6V1_Znr.js";import{p as wt}from"./VoidReason-CKHv1eIH.js";var C=(t=>(t.ON_CONTINUE="oncontinue",t.ONLOAD="onload",t))(C||{}),n=(t=>(t.FORCE_EXIT="forceExit",t.GO_HOME="gotoHome",t.GO_BACK="goBack",t.CONTINUE="continue",t.ENROLL="enroll",t.EXIT="exit",t.ACTIVATE_FN="activateFn",t.ASSIGN_NPID="assignNpid",t.UPDATE_DMG="updateDemographics",t.PRINT_NPID="printNPID",t.CREATE_NPID_WITH_REMOTE_DIFF="createNpiDWithRemote",t.REFRESH_DDE_DEMOGRAPHICS="refreshDemographicsDDE",t.UPDATE_LOCAL_DDE_DIFFS="updateLocalDiffs",t.RESOLVE_DUPLICATE_NPIDS="resolveDuplicateNpids",t.ADD_AS_DRUG_REFILL="addAsDrugRefill",t.ADD_AS_NEW_PATIENT="addAsNewPatient",t.ADD_AS_EXTERNAL_CONSULTATION="addAsExternalConsultation",t.INITIATE_ANC_PREGNANCY="initiateNewAncPregnancy",t.VIEW_MERGE_AUDIT_FOR_NPID="viewMergeAuditForNpid",t.SEARCH_BY_NAME="searchByName",t))(n||{});const At={"[DDE NOT ENABLED] Do not proceed if patient is not found in the system":{weight:98,targetEvent:"onload",actions:{alert:async()=>await l(" 0 Search results","Patient has not been found","Choose how to proceed",[{name:"Close",slot:"start",color:"primary"},{name:"Search by name",slot:"end",color:"success"}],"his-danger-color")==="Search by name"?"searchByName":"gotoHome"},conditions:{globalProperties({ddeEnabled:t}){return t===!1},patientFound(t){return t===!1}}},"[DDE ENABLED] Show invalid attributes for a patient whose remote":{weight:78,targetEvent:"onload",actions:{alert:async t=>(await v("DDE Entity Error","Remote patient has invalid attributes",["Attribute","Errors"],t.demographics.invalidDemographics,[{name:"Close",slot:"start",color:"danger"}],"his-danger-color"),"goBack")},conditions:{demographics({hasInvalidDemographics:t}){return t===!0}}},"[DDE ENABLED] Do not proceed if NPID is not found and Provide history of voided NPIDS":{weight:98,targetEvent:"onload",actions:{alert:async t=>{const e=await v("Voided patients with ID ".concat(t.scannedNpid),"NPID was not found. Please review available patient with similar ID",t.dde.voidedNpids.cols,t.dde.voidedNpids.rows,[{name:"Close",slot:"start",color:"primary"},{name:"Merge history",slot:"end",color:"primary"},{name:"Search by name",slot:"end",color:"success"}],"his-danger-color");return e==="Merge history"?"viewMergeAuditForNpid":e==="Search by name"?"searchByName":"gotoHome"}},conditions:{globalProperties({ddeEnabled:t}){return t===!0},patientFound(t){return t===!1}}},"[DDE NOT ENABLED] Notify the user to proceed with Remote NPID if local NPID does not match remote":{weight:77,targetEvent:"onload",actions:{alert:async({dde:t})=>(await l("Missing Local NPID",'Local NPID of "'.concat(t.localNpidDiff,'" does not match remote "').concat(t.remoteNpidDiff,'"'),"Proceed to Fix issue",[{name:"Resolve issue",slot:"start",color:"danger"}],"his-danger-color"),"createNpiDWithRemote")},conditions:{dde({localNpidDiff:t,remoteNpidDiff:e}){return t!=e},globalProperties({ddeEnabled:t}){return t===!0}}},"Warn if patient is missing National ID and assign them one":{weight:75,targetEvent:"onload",actions:{alert:async()=>(await l("Missing National ID","Patient was found BUT has no National ID","The system is going to assign the patient with a new ID",[{name:"OK",slot:"start",color:"primary"}],"his-danger-color"),"assignNpid")},conditions:{currentNpid:t=>k(t)}},"Detect NPID over 5 duplicates and prompt the user to resolve them":{weight:99,targetEvent:"onload",actions:{alert:async({scannedNpid:t})=>await l("More than 5 duplicates found","There are more than 5 duplicates for this NPID (".concat(t,"). Please search by name and gender"),"Choose how to proceed",[{name:"Close",slot:"start",color:"danger"},{name:"Search by name",slot:"start",color:"primary"}],"his-danger-color")==="Search by name"?"searchByName":"gotoHome"},conditions:{npidHasOverFiveDuplicates(t){return t}}},"Detect NPID duplicates and prompt the user to resolve them":{weight:99,targetEvent:"onload",actions:{alert:async({scannedNpid:t})=>(await l("DUPLICATE NPID","NPID ".concat(t," is currently assigned to multiple patients"),"Proceed to resolve the issue",[{name:"Resolve Duplicate NPIDs",slot:"start",color:"danger"}],"his-danger-color"),"resolveDuplicateNpids")},conditions:{npidHasDuplicates(t){return t}}},"Warn before proceeding if patient is deceased based on current Patient state":{weight:50,targetEvent:"oncontinue",actions:{alert:async()=>await l("Deceased Patient","Patient outcome is Died!","Do you want to continue?",[{name:"Yes",slot:"start",color:"danger"},{name:"No",slot:"end",color:"success"}],"his-warning-color")==="Yes"?"continue":"forceExit"},conditions:{currentOutcome:t=>t==="Patient died"}},"Warn before proceeding if patient stopped treatment based on current Patient state":{weight:49,targetEvent:"oncontinue",actions:{alert:async()=>await l("Stopped Treatment","Patient outcome is Stopped Treatment ","Do you want to continue?",[{name:"Yes",slot:"start",color:"danger"},{name:"No",slot:"end",color:"success"}],"his-warning-color")==="Yes"?"continue":"forceExit"},conditions:{currentOutcome:t=>t==="Treatment stopped"}},"[ART patient visit purpose] Select purpose of visit if patient is Transferred out or Emergency supply":{weight:70,targetEvent:"oncontinue",actions:{alert:async({patientType:t,currentOutcome:e})=>{let a=[];switch((t==="External consultation"||e==="Patient transferred out")&&(a=[{name:"Emergency supply",slot:"start",color:"primary"},{name:"New Patient",slot:"end",color:"primary"}]),t==="Emergency supply"&&(a=[{name:"External Consultation",slot:"start",color:"primary"},{name:"New Patient",slot:"end",color:"primary"}]),t==="New patient"&&(a=[{name:"External Consultation",slot:"start",color:"primary"},{name:"Emergency supply",slot:"start",color:"primary"}]),await l("Purpose of visit","Patient type: ".concat(t," | State: ").concat(e),"Please select purpose of the visit",[...a,{name:"Continue",slot:"end",color:"success"}])){case"Emergency supply":return"addAsDrugRefill";case"External Consultation":return"addAsExternalConsultation";case"New Patient":return"addAsNewPatient";default:return"continue"}}},conditions:{programName:t=>t==="ART",patientType:(t,{currentOutcome:e})=>["Emergency supply","External consultation"].includes(t)||e==="Patient transferred out"}},"Prompt patient enrollment in current programme if not enrolled":{weight:30,targetEvent:"onload",actions:{alert:async()=>await l("Programme Enrollment","Patient is not enrolled in current programme, do you want to enroll?","",[{name:"Yes",slot:"start",color:"success"},{name:"No",slot:"end",color:"danger"}])==="Yes"?"enroll":"exit"},conditions:{enrolledInProgram:t=>t===!1}},"(ART Filing numbers) Prompt dormant filing number reactivation if patient has a dormant filing number":{weight:25,targetEvent:"onload",actions:{alert:async()=>await l("Filing Numbers","Activate dormant #?","",[{name:"Yes",slot:"start",color:"success"},{name:"No",slot:"end",color:"danger"}])==="Yes"?"activateFn":"exit"},conditions:{programName:t=>t==="ART",identifiers:t=>t.includes("Archived filing number"),currentOutcome:t=>!["Treatment stopped","Patient transferred out","Patient died"].includes(t),globalProperties({useFilingNumbers:t}){return t}}},"[DDE OFF] Prompt the user to update patient demographics when data is incomplete":{weight:92,targetEvent:"onload",actions:{alert:async()=>await l("Demographics","Patient data is incomplete","Do you want to review and update now?",[{name:"Yes",slot:"start",color:"success"},{name:"No",slot:"end",color:"danger"}],"his-danger-color")==="Yes"?"updateDemographics":"exit"},conditions:{globalProperties({ddeEnabled:t}){return t===!1},demographics:({patientIsComplete:t})=>t===!1,patientFound:t=>t===!0}},"[DDE] Alert When remote Patient demographics dont match Local Demographics ":{weight:93,targetEvent:"onload",actions:{alert:async({dde:t})=>await v("Demographics Mismatch","Local Demographics do not match Remote Demographics",["Attributes","Local","Remote"],t.diffRows,[{name:"Use Local",slot:"start",color:"primary"},{name:"Use Remote",slot:"start",color:"primary"}],"his-danger-color",t.diffRowColors)==="Use Local"?"updateLocalDiffs":"refreshDemographicsDDE"},conditions:{dde({hasDemographicConflict:t}){return t}}},"[DDE] Alert to print newer NPID when the scanned NPID doesnt match active NPID":{weight:69,targetEvent:"onload",actions:{alert:async({currentNpid:t})=>(await l("[DDE] NATIONAL ID","Patient has a newer National Identifier ".concat(t),"Print and proceed",[{name:"Print",slot:"start",color:"primary"}]),"printNPID")},conditions:{globalProperties({ddeEnabled:t}){return t===!0},scannedNpid(t,{currentNpid:e}){return!t.match(new RegExp(e,"i"))}}},"assign newer NPID when the current one is invalid":{weight:68,targetEvent:"onload",actions:{alert:async({currentNpid:t})=>(await l("NATIONAL ID","Current NPID ".concat(t," is invalid"),"Reasign and Print",[{name:"Reassign",slot:"start",color:"primary"}]),"assignNpid")},conditions:{demographics:({patientIsComplete:t})=>t===!0,patientFound:t=>t===!0,hasInvalidNpid(t){return t}}},"[DDE ON] Warn program managers when Patient has incomplete demographics. Dont force them to update though":{weight:91,targetEvent:"onload",actions:{alert:async()=>await l("Demographics","Patient data is incomplete data","Do you want to review and update now?",[{name:"Yes",slot:"start",color:"success"},{name:"No",slot:"end",color:"danger"}],"his-danger-color")==="Yes"?"updateDemographics":"continue"},conditions:{globalProperties({ddeEnabled:t}){return t===!0},demographics:({patientIsComplete:t})=>t===!1,patientFound:t=>t===!0,userRoles(t){return t.includes("Program Manager")===!0}}},"[DDE ON] Force Users to update Incomplete Patient demographics":{weight:92,targetEvent:"onload",actions:{alert:async()=>await l("Patient Demographics","Demographic data is incomplete","Continue to update",[{name:"Update",slot:"start",color:"success"},{name:"Cancel",slot:"start",color:"danger"}],"his-warning-color")==="Cancel"?"gotoHome":"updateDemographics"},conditions:{globalProperties({ddeEnabled:t}){return t===!0},demographics:({patientIsComplete:t})=>t===!1,userRoles:t=>t.includes("Program Manager")===!1}},"Warn the user when patient has high viral load":{weight:45,targetEvent:"onload",actions:{alert:async()=>(await l("High Viral Load","Patient has a high viral load, please take immediate action!","",[{name:"OK",slot:"end",color:"danger"}],"his-danger-color"),"continue")},conditions:{hasHighViralLoad:t=>t===!0}},"[ANC] Warn last LMP is more than 8 months ago and ask to initiate new pregnancy":{weight:32,targetEvent:"oncontinue",actions:{alert:async({anc:t})=>await l("Pregancy overdue","Last menstrual period was ".concat(t.lmpMonths," months ago!"),"Would you like to initiate new pregnancy?",[{name:"Yes",slot:"end",color:"success"},{name:"No",slot:"end",color:"danger"}],"his-danger-color")==="Yes"?"initiateNewAncPregnancy":"continue"},conditions:{programName:t=>t==="ANC",anc:t=>t.currentPregnancyIsOverdue===!0}},"[ANC] Exit if client is NOT ELIGIBLE for ANC":{weight:89,targetEvent:"onload",actions:{alert:async()=>await l("Client not eligible for ANC","This program is for women eligible for ANC only","If this is a mistake, please update client Demographics or Exit",[{name:"EXIT",slot:"end",color:"success"},{name:"EDIT DEMOGRAPHICS",slot:"end",color:"danger"}],"his-danger-color")==="EXIT"?"gotoHome":"updateDemographics"},conditions:{demographics:({gender:t})=>{const e=t.toLowerCase();return e==="m"||e==="male"},programName:t=>t==="ANC"}}};class M extends j{constructor(e,a){super(e,111,a)}async getLmpInMonths(){const e=await K.getProgramInformation(this.patientID);if(e.date_of_lnmp){const a=O(e.date_of_lnmp);return O(this.date).diff(a,"months")}return-1}async pregnancyIsOverdue(){return await this.getLmpInMonths()>9}async canInitiateNewPregnancy(){return await this.getLmpInMonths()>=7}async createNewPregnancyStatus(){return await this.createEncounter(),this.saveValueCodedObs("Pregnancy status","New")}}const vt=q({name:"Patient Confirmation",components:{IonContent:J,IonHeader:Q,IonFooter:Z,IonPage:tt,IonToolbar:et,IonSpinner:at,IonRow:nt,IonCol:it,IonButton:st,ConfirmationCard:rt(()=>ft(()=>import("./PatientConfirmationCards-CRTGlp9q.js"),__vite__mapDeps([0,1,2,3])))},data:()=>({app:{},program:{},patient:{},localPatient:{},ddeInstance:{},useDDE:!1,programInfo:{},isReady:!1,cards:[],facts:{hasHighViralLoad:!1,patientFound:!1,npidHasDuplicates:!1,npidHasOverFiveDuplicates:!1,userRoles:[],scannedNpid:"",currentNpid:"",hasInvalidNpid:!1,enrolledInProgram:!1,programName:"N/A",currentOutcome:"",programs:[],identifiers:[],patientType:"N/A",patientTypeLastUpdated:"",anc:{lmpMonths:-1,canInitiateNewPregnancy:!1,currentPregnancyIsOverdue:!1},dde:{localNpidDiff:"",remoteNpidDiff:"",voidedNpids:{cols:[],rows:[]},hasDemographicConflict:!1,localDiffs:{},diffRows:[],diffRowColors:[]},demographics:{patientIsComplete:!1,hasInvalidDemographics:!1,invalidDemographics:[],givenName:"",familyName:"",patientName:"",landmark:"",phoneNumber:"",currentDistrict:"",currentTA:"",currentVillage:"",ancestryDistrict:"",ancestryTA:"",ancestryVillage:"",gender:"",birthdate:""},globalProperties:{useFilingNumbers:!1,ddeEnabled:!1}}}),created(){this.initCards(),this.app=ot.getActiveApp()||{}},mounted(){this.app&&(this.updateCards(),this.ddeInstance=new ct,this.setGlobalPropertyFacts().then(()=>{const t=this.$route.query;!m.isEmpty(t)&&(t.person_id||t.patient_barcode)&&this.findAndSetPatient(t.person_id,t.patient_barcode)}))},computed:{demographics(){return this.facts.demographics},birthdate(){return L.toStandardHisDisplayFormat(this.facts.demographics.birthdate)},canVoidClient(){return this.facts.patientFound&&F.isDataManager()}},methods:{initCards(){for(let t=0;t<6;t++)this.cards[t]={label:"-",isLoading:!0,values:[]}},async updateCards(){if(typeof this.app.confirmationSummary=="function"){const t=this.app.confirmationSummary(this.patient,this.program,this.facts),e=Object.keys(t);for(let a=0;a<this.cards.length;a++){const i=e[a]?t[e[a]]():[];if(this.cards[a]={label:e[a]||"-",isLoading:!1,values:i},typeof i=="object"&&i.then)this.cards[a].isLoading=!0,m.isEmpty(this.patient)||i.then(r=>{this.cards[a].isLoading=!1,this.cards[a].values=r}).catch(r=>{this.cards[a].isLoading=!1,console.error("".concat(r))});else for(let r=0;r<i.length;++r){const s=i[r];this.cards[a].values[r]=s,m.isEmpty(this.patient)||(typeof s.init=="function"&&await s.init(),typeof s.asyncValue=="function"?s.asyncValue().then(c=>{this.cards[a].values[r].value=c}).catch(c=>{this.cards[a].values[r].value="_ERROR_",console.error("".concat(c))}):typeof s.staticValue=="function"&&(this.cards[a].values[r].value=s.staticValue()))}}}},async setViralLoadStatus(){try{const e=(await b.getOrders(this.patient.getID())).reduce((a,i)=>{const r=b.getVLResults(i);return m.isEmpty(r)||r[0].date<a.date?a:r[0]},{});this.facts.hasHighViralLoad=b.isHighViralLoadResult(e)}catch(t){console.error(t)}},async findAndSetPatient(t,e){let a=null;this.isReady=!1,this.localPatient={},this.facts.scannedNpid||(this.facts.scannedNpid=e||""),this.useDDE&&e?a=this.ddeInstance.searchNpid(e):t?a=f.findByID(t):a=f.findByNpid(e),this.handleSearchResults(a).then(()=>this.isReady=!0).catch(i=>N("".concat(i),3e5))},async handleSearchResults(t){let e=[];try{e=await t}catch(a){if(a instanceof lt&&!m.isEmpty(a.entity))e=a.entity;else if(a instanceof S&&Array.isArray(a.errors)){const[i,...r]=a.errors;typeof i=="string"&&i==="Invalid parameter(s)"&&this.setInvalidParametersFacts(r)}else N("".concat(a),3e5)}if(m.isEmpty(e)&&!m.isEmpty(this.localPatient)&&(e=this.localPatient),Array.isArray(e)&&e.length>1?(this.facts.npidHasDuplicates=e.length<=5,this.facts.npidHasOverFiveDuplicates=e.length>5):this.facts.patientFound=!m.isEmpty(e),this.facts.patientFound){this.patient=new f(Array.isArray(e)?e[0]:e),this.updateCards(),P.set("ACTIVE_PATIENT",this.patient),this.setPatientFacts();const a=[];a.push(this.setProgramFacts()),this.useDDE&&a.push(this.setDDEFacts()),this.facts.programName==="ANC"&&a.push(this.setAncFacts()),this.facts.programName==="ART"&&a.push(this.setViralLoadStatus()),this.facts.currentNpid=this.patient.getNationalID(),a.push(this.validateNpid()),await Promise.all(a)}else this.facts.scannedNpid&&this.setVoidedNpidFacts(this.facts.scannedNpid);this.onEvent(C.ONLOAD).then(()=>this.isReady=!0).catch(a=>{N("".concat(a),3e5),this.isReady=!0})},async validateNpid(){if(this.useDDE)this.facts.hasInvalidNpid=!this.patient.getDocID()||this.patient.getDocID()&&k(this.patient.getNationalID());else{const t=await f.findByNpid(this.facts.currentNpid,{page_size:2});this.facts.hasInvalidNpid=Array.isArray(t)&&t.length>1}},setInvalidParametersFacts(t){this.facts.demographics.hasInvalidDemographics=!0,this.facts.demographics.invalidDemographics=t.map(e=>{const a=Object.entries(e),i=a[0][0],r=a[0][1];return[i,r.join(", ")]})},reloadPatient(){return this.findAndSetPatient(this.patient.getID(),void 0)},setPatientFacts(){this.facts.demographics.patientIsComplete=this.patient.patientIsComplete(),this.facts.demographics.patientName=this.patient.getFullName(),this.facts.demographics.givenName=this.patient.getGivenName(),this.facts.demographics.familyName=this.patient.getFamilyName(),this.facts.demographics.landmark=this.patient.getAttribute(19),this.facts.demographics.phoneNumber=this.patient.getAttribute(12),this.facts.demographics.gender=this.patient.getGender(),this.facts.demographics.birthdate=this.patient.getBirthdate(),this.facts.demographics.ancestryDistrict=this.patient.getHomeDistrict(),this.facts.demographics.ancestryTA=this.patient.getHomeTA(),this.facts.demographics.ancestryVillage=this.patient.getHomeVillage(),this.facts.demographics.currentDistrict=this.patient.getCurrentDistrict(),this.facts.demographics.currentTA=this.patient.getCurrentTA(),this.facts.demographics.currentVillage=this.patient.getCurrentVillage(),this.facts.identifiers=this.patient.getIdentifiers().map(t=>t.type.name)},async setGlobalPropertyFacts(){this.facts.globalProperties.ddeEnabled=await P.get("IS_DDE_ENABLED"),this.useDDE=this.facts.globalProperties.ddeEnabled,this.app.applicationName==="ART"&&(this.facts.globalProperties.useFilingNumbers=await P.get("IS_ART_FILING_NUMBER_ENABLED"))},async setAncFacts(){const t=new M(this.patient.getID(),-1);this.facts.anc.canInitiateNewPregnancy=await t.canInitiateNewPregnancy(),this.facts.anc.currentPregnancyIsOverdue=await t.pregnancyIsOverdue(),this.facts.anc.lmpMonths=await t.getLmpInMonths()},buildDDEDiffs(t){const e=[],a={givenName:{label:"First Name",ref:"given_name"},familyName:{label:"Last Name",ref:"family_name"},birthdate:{label:"Birthdate",ref:"birthdate"},gender:{label:"Gender",ref:"gender"},phoneNumber:{label:"Phone number",ref:"phone_number"},ancestryDistrict:{label:"Home District",ref:"home_district"},ancestryTA:{label:"Home TA",ref:"home_traditional_authority"},ancestryVillage:{label:"Home Village",ref:"home_village"},currentDistrict:{label:"Current District",ref:"current_district"},currentTA:{label:"Current TA",ref:"current_traditional_authority"},currentVillage:{label:"Current Village",ref:"current_village"}};let i=0;const r={indexes:[],class:"his-empty-set-color"};for(const s in a){let c=this.facts.demographics[s],y=c;a[s].ref in t&&(r.indexes.push(i),c=t[a[s].ref].local,y=t[a[s].ref].remote),e.push([a[s].label,c,y]),++i}return{comparisons:e,rowColors:[r]}},async setProgramFacts(){this.facts.programName=this.app.applicationName;try{this.program=new dt(this.patient.getID()),this.programInfo=await this.program.getProgram(),P.set("PATIENT_PROGRAM",this.programInfo);const{program:t,outcome:e}=this.programInfo;this.facts.enrolledInProgram=!(pt(t)||t.match(/n\/a/i)),this.facts.currentOutcome=e,this.facts.userRoles=F.getUserRoles().map(i=>i.role);const a=await ht.getFirstObs(this.patient.getID(),"Type of patient");a!=null&&a.value_coded&&(this.facts.patientType=a.value_coded,this.facts.patientTypeLastUpdated=L.toStandardHisFormat(a.obs_datetime))}catch(t){console.error("".concat(t))}},async setDDEFacts(){var t;try{const e=(t=await this.ddeInstance.getLocalAndRemoteDiffs())==null?void 0:t.diff;this.facts.dde.localDiffs=this.ddeInstance.formatDiffValuesByType(e,"local");const{comparisons:a,rowColors:i}=this.buildDDEDiffs(e);if(this.facts.dde.diffRows=a,this.facts.dde.diffRowColors=i,e.npid){const{local:r,remote:s}=e.npid;this.facts.dde.localNpidDiff=r,this.facts.dde.remoteNpidDiff=s,delete e.npid}this.facts.dde.hasDemographicConflict=!m.isEmpty(e)}catch(e){console.warn(e)}},async setVoidedNpidFacts(t){const e=["Name","Birthdate","Gender","Ancestry Home","CurrentID","Action"];let a=[];const i=await this.ddeInstance.findVoidedIdentifier(t);i&&(a=i.map(r=>{const s=new f(r);return[s.getFullName(),s.getBirthdate(),s.getGender(),s.getHomeTA(),s.getNationalID(),{type:"button",name:"Select",action:async()=>{if(s.patientIsComplete()){if(s.getNationalID().match(/unknown/i)||!s.getDocID())try{return await s.assignNpid(),await this.findAndSetPatient(s.getID(),void 0),V.dismiss()}catch(c){return $("Failed to assign npid to patient with unknown npid."),console.error(c)}}else return this.$router.push("/patient/registration?edit_person=".concat(s.getID()));await V.dismiss(),await this.findAndSetPatient(void 0,s.getNationalID())}}]}),this.facts.dde.voidedNpids.cols=e,this.facts.dde.voidedNpids.rows=a)},async onEvent(t,e={}){var i,r;const a=Pt(this.facts,At,"",t,"weight");for(const s in a){const c=a[s];if((i=c==null?void 0:c.actions)!=null&&i.alert){const y=await((r=c==null?void 0:c.actions)==null?void 0:r.alert(this.facts));if(await this.runFlowState(y)===n.FORCE_EXIT)return!1}}typeof e=="function"&&e()},async onInitiateNewAncPregnancy(){await H("Are you sure you want to initiate new pregnancy?")&&(await this.initiateNewAncPregnancy()?(this.facts.anc.canInitiateNewPregnancy=!1,this.facts.anc.currentPregnancyIsOverdue=!1,this.nextTask()):$("Unable to initiate new pregnancy"))},initiateNewAncPregnancy(){return new M(this.patient.getID(),-1).createNewPregnancyStatus()},async runFlowState(t){const e={};if(e[n.GO_HOME]=()=>(this.$router.push("/"),n.FORCE_EXIT),e[n.GO_BACK]=()=>(this.$router.back(),n.FORCE_EXIT),e[n.ENROLL]=()=>this.program.enrollProgram(),e[n.ACTIVATE_FN]=()=>(this.$router.push("/art/filing_numbers/".concat(this.patient.getID(),"?assign=true")),n.FORCE_EXIT),e[n.UPDATE_DMG]=()=>(this.$router.push("/patient/registration?edit_person=".concat(this.patient.getID())),n.FORCE_EXIT),e[n.PRINT_NPID]=async()=>(await this.ddeInstance.printNpid(this.patient.getID()),await w(1800),n.CONTINUE),e[n.CREATE_NPID_WITH_REMOTE_DIFF]=async()=>{const a=this.facts.dde.remoteNpidDiff;try{if(a&&await this.ddeInstance.createNPID(a))return this.facts.scannedNpid=a,this.facts.currentNpid=a,this.facts.dde.localNpidDiff=a,U("Remote NPID successfully updated"),await w(300),await this.ddeInstance.printNpid(),await this.findAndSetPatient(void 0,a),n.FORCE_EXIT}catch(i){const r=/Identifier already assigned to another patient/i;if(i instanceof S&&i.errors.join(",").match(r)){const s=await this.ddeInstance.reassignNpid(this.patient.getDocID());if(s)return this.patient=new f(s),U("Patient has been reassigned NPID"),await w(300),await this.ddeInstance.printNpid(),await this.findAndSetPatient(void 0,this.patient.getNationalID()),n.FORCE_EXIT}N("Unable to assign NPID: ".concat(i))}},e[n.ASSIGN_NPID]=async()=>(await this.patient.assignNpid(),await ut(this.patient.getID()),await w(300),await this.reloadPatient(),n.FORCE_EXIT),e[n.INITIATE_ANC_PREGNANCY]=async()=>(await this.initiateNewAncPregnancy(),n.CONTINUE),e[n.VIEW_MERGE_AUDIT_FOR_NPID]=()=>(this.$router.push("/merge/rollback/".concat(this.facts.scannedNpid)),n.FORCE_EXIT),e[n.RESOLVE_DUPLICATE_NPIDS]=()=>(this.$router.push("/npid/duplicates/".concat(this.facts.scannedNpid)),n.FORCE_EXIT),e[n.REFRESH_DDE_DEMOGRAPHICS]=async()=>(await this.ddeInstance.refreshDemographics(),await this.reloadPatient(),n.FORCE_EXIT),e[n.ADD_AS_DRUG_REFILL]=async()=>(await this.createPatientType("Emergency supply"),n.CONTINUE),e[n.ADD_AS_NEW_PATIENT]=async()=>(await this.createPatientType("New patient"),n.CONTINUE),e[n.ADD_AS_EXTERNAL_CONSULTATION]=async()=>(await this.createPatientType("External consultation"),n.CONTINUE),e[n.SEARCH_BY_NAME]=()=>(this.$router.push("/patient/registration"),n.FORCE_EXIT),e[n.UPDATE_LOCAL_DDE_DIFFS]=async()=>(await this.ddeInstance.updateLocalDifferences(this.facts.dde.localDiffs),await this.reloadPatient(),n.FORCE_EXIT),t in e)try{return await e[t]()}catch(a){N("".concat(a))}return t},async createPatientType(t){if(t!=this.facts.patientType&&this.facts.patientTypeLastUpdated===f.getSessionDate()&&!await H('This client was flagged today as "'.concat(this.facts.patientType,'", altering patient type to "').concat(t,'" may affect record integrity, do you want to affect change?')))return;const e=new mt(this.patient.getID(),-1);await e.createEncounter(),await e.savePatientType(t)},async onVoid(){wt(async t=>{try{await f.voidPatient(this.patient.getID(),t),this.$router.push("/")}catch(e){N("".concat(e))}},"void-modal")},nextTask(){this.onEvent(C.ON_CONTINUE,()=>{gt(this.patient.getID(),this.$router)})}}}),D=t=>(Et("data-v-ae6ca33b"),t=t(),_t(),t),bt={class:"tool-bar-medium-card"},Ct={class:"his-sm-text"},Tt=D(()=>o("p",null,null,-1)),Rt={class:"his-sm-text"},Ot=D(()=>o("p",null,null,-1)),Lt={class:"his-sm-text"},Ft={class:"tool-bar-medium-card"},St={class:"his-sm-text"},Vt=D(()=>o("p",null,null,-1)),$t={class:"his-sm-text"},Ht=D(()=>o("p",null,null,-1)),Ut={class:"his-sm-text"},Bt=D(()=>o("p",null,null,-1)),Mt={class:"tool-bar-medium-card"},kt={class:"his-sm-text"},Gt=D(()=>o("p",null,null,-1)),xt={class:"his-sm-text"},Xt=D(()=>o("p",null,null,-1)),Wt={class:"his-sm-text"},Yt=D(()=>o("p",null,null,-1));function zt(t,e,a,i,r,s){const c=u("ion-col"),y=u("ion-row"),T=u("ion-toolbar"),G=u("ion-header"),x=u("confirmation-card"),X=u("ion-content"),_=u("ion-button"),W=u("ion-spinner"),Y=u("ion-footer"),z=u("ion-page");return I(),E(z,null,{default:d(()=>[h(G,{translucent:!0},{default:d(()=>[h(T,null,{default:d(()=>[h(y,null,{default:d(()=>[h(c,null,{default:d(()=>[o("div",bt,[o("span",Ct,[p("Patient Name: "),o("b",null,g(t.demographics.patientName),1)]),p(),Tt,o("span",Rt,[p("Birthdate: "),o("b",null,g(t.birthdate),1)]),p(),Ot,o("span",Lt,[p("Gender: "),o("b",null,g(t.demographics.gender),1)])])]),_:1}),h(c,null,{default:d(()=>[o("div",Ft,[o("span",St,[p("Ancestry district: "),o("b",null,g(t.demographics.ancestryDistrict),1)]),Vt,o("span",$t,[p("Ancestry TA: "),o("b",null,g(t.demographics.ancestryTA),1)]),Ht,o("span",Ut,[p("Ancestry village: "),o("b",null,g(t.demographics.ancestryVillage),1)]),Bt])]),_:1}),h(c,null,{default:d(()=>[o("div",Mt,[o("span",kt,[p("Current District:"),o("b",null,g(t.demographics.currentDistrict),1),Gt]),o("span",xt,[p("Current TA: "),o("b",null,g(t.demographics.currentTA),1),Xt]),o("span",Wt,[p("Current Village: "),o("b",null,g(t.demographics.currentVillage),1),Yt])])]),_:1})]),_:1})]),_:1})]),_:1}),h(X,null,{default:d(()=>[h(y,null,{default:d(()=>[(I(!0),yt(It,null,Nt(t.cards,(A,R)=>(I(),E(c,{"size-md":"4","size-sm":"12",key:R},{default:d(()=>[(I(),E(x,{key:"card-".concat(R),title:A.label,items:A.values,isLoading:A.isLoading},null,8,["title","items","isLoading"]))]),_:2},1024))),128))]),_:1})]),_:1}),h(Y,null,{default:d(()=>[h(T,{color:"dark"},{default:d(()=>[h(_,{color:"danger",size:"large","router-link":"/"},{default:d(()=>[p(" Cancel ")]),_:1}),h(_,{disabled:!t.canVoidClient,color:"danger left",size:"large",onClick:t.onVoid},{default:d(()=>[p("Void Client")]),_:1},8,["disabled","onClick"]),t.facts.anc.canInitiateNewPregnancy?(I(),E(_,{key:0,slot:"end",size:"large",onClick:t.onInitiateNewAncPregnancy},{default:d(()=>[p(" New Pregnancy ")]),_:1},8,["onClick"])):B("",!0),h(_,{disabled:!t.facts.patientFound||t.facts.patientFound&&!t.isReady,slot:"end",color:"success",size:"large",onClick:t.nextTask},{default:d(()=>[t.isReady?B("",!0):(I(),E(W,{key:0,name:"crescent"})),p(" Continue ")]),_:1},8,["disabled","onClick"])]),_:1})]),_:1})]),_:1})}const Jt=Dt(vt,[["render",zt],["__scopeId","data-v-ae6ca33b"]]);export{Jt as default};