System.register(["./index-legacy-CNrLGT3P.js","./HisStandardForm-legacy-OekRIZB_.js","./PersonFieldHelper-legacy-BoBLQ8TI.js","./VoidReason-legacy-Bzxn6_fV.js","./LocationFieldOptions-legacy-DJYLOgCp.js","./storage-legacy-uuFjVbAf.js"],(function(t,e){"use strict";var i,a,n,r,s,o,d,l,h,c,u,g,m,p,_,f,D,F,y,R,b;return{setters:[t=>{i=t.S,a=t.d,n=t.P,r=t.b8,s=t.t,o=t.p,d=t.H,l=t.F,h=t.V,c=t.bd,u=t.ah,g=t.b9,m=t.aj,p=t.ai,_=t._,f=t.r,D=t.o,F=t.c},t=>{y=t.H},t=>{R=t.P},t=>{b=t.p},null,null],execute:function(){class e extends i{constructor(){super()}static voidRelation(t,e,a){return i.void(`people/${t}/relationships/${e}`,{reason:a})}static async amendRelation(t,i,a,n){return await e.voidRelation(t,a,"Updating guardian relationship"),e.createRelation(t,i,n)}static getRelations(){return super.getJson("types/relationships")}static createRelation(t,e,i){return super.postJson(`people/${t}/relationships`,{relationship_type_id:i,relation_id:e})}}const A=a({components:{HisStandardForm:y},data:()=>({patientData:{},guardianData:{},fieldAction:"",fieldComponent:"",fields:[],form:{},redirectURL:"",activeField:"",currentAddressAttributes:["current_region","current_district","current_village","current_traditional_authority"],homeAddressAttributes:["home_region","home_district","home_traditional_authority","home_village"]}),watch:{$route:{async handler({params:t,query:e}){if(t.patient_id){const i=await n.findByID(t.patient_id);i&&(this.patientData=R.mapPersonData(i.person),e.edit_guardian&&(this.fieldAction="edit"),this.fields=this.getFields())}e.source&&(this.redirectURL=e.source)},immediate:!0,deep:!0}},methods:{getFields(){let t=[];return t.push(this.guardianSelection()),t.push(this.guardianIndex()),t.push(this.scanGuardian()),t.push(this.givenNameField()),t.push(this.familyNameField()),t.push(this.genderField()),t.push(this.searchResultField()),t=t.concat(this.dobFields()),t.push(this.homeRegionField()),t.push(this.homeDistrictField()),t.push(this.homeTAField()),t.push(this.homeVillageField()),t.push(this.currentRegionField()),t.push(this.currentDistrictField()),t.push(this.currentTAField()),t.push(this.currentVillage()),t=t.concat(this.landmarkFields()),t.push(this.cellPhoneField()),t.push(this.relationsField()),t},async onFinish(t,i){if(this.isEditMode()){if("relations"!=this.activeField){const t=new r;t.setPersonID(this.guardianData.id),await t.updatePerson(R.resolvePerson(i)),Object.keys(i).forEach((t=>{t in this.guardianData&&(this.guardianData[t]=i[t]?.date||i[t].person)}))}else if(this.guardianData?.relation){const i=await e.amendRelation(this.patientData.id,this.guardianData.id,this.guardianData.relation.relationship_id,t.relations.other.relationship_type_id);i&&(this.guardianData.relation=i)}this.fieldComponent="guardian_index"}else if(this.isSameAsPatient(i))s("Guardian cannot be the same patient");else{let a=-1;if(this.isRegistrationMode()){const t=new r;await t.registerGuardian(R.resolvePerson(i)),a=t.getPersonID()}else a=this.guardianData.id;await e.createRelation(this.patientData.id,a,t.relations.other.relationship_type_id),this.redirectURL?this.$router.push({name:this.redirectURL}):this.$route.query.edit_guardian?this.fieldComponent="select_guardian":await o(this.patientData.id,this.$router,this.$route)}},isEditMode(){return"edit"===this.fieldAction},isSearchMode(){return["Search","Registration"].includes(this.fieldAction)},isRegistrationMode(){return"Registration"===this.fieldAction},canEdit(t,e=!0,i=!0){return this.isEditMode()?t.includes(this.activeField)&&i:e},isSameAsPatient(t){let e="",i="",a="";return this.isRegistrationMode()?(e=d.toStandardHisDisplayFormat(t.birth_date.date),i=t.given_name.person&&t.family_name.person,a=t.gender.person):(e=this.guardianData.birth_date,i=this.guardianData.name,a=this.guardianData.gender),i.toLowerCase()===this.patientData.name.toLowerCase()&&e===this.patientData.birth_date&&a===this.patientData.gender},guardianSelection(){return{id:"select_guardian",helpText:"Select guardian to edit/view",type:l.TT_SELECT,condition:()=>this.isEditMode(),validation:t=>h.required(t),options:async()=>{const t=await c.getRelationships(this.patientData.id);return u.isEmpty(t)?(await g(450),"Register new"===await m("Patient has no guardians","","Select option to proceed",[{name:"Cancel",slot:"start",color:"danger"},{name:"Register new",slot:"start",color:"success"}])?(this.guardianData={},this.fieldAction="Registration",this.fieldComponent="scan"):this.$router.back(),[]):t.map((t=>{const e=R.mapPersonData(t.relation);return{label:`${e.name} (${t.type.b_is_to_a})`,value:t.relation.person_id,other:{relations:t,details:e}}}))},config:{footerBtns:[{name:"New Guardian",slot:"end",color:"primary",onClick:()=>{this.guardianData={},this.fieldAction="Registration",this.fieldComponent="scan"}}]}}},getDefaultVal(t){try{return this.guardianData[t]}catch(e){return""}},guardianIndex(){return{id:"guardian_index",helpText:"Guardian details",type:l.TT_TABLE_VIEWER,condition:t=>t.select_guardian.value,options:t=>{this.guardianData&&this.guardianData.id!=t.select_guardian.value&&(this.guardianData={...t.select_guardian.other.details,relation:t.select_guardian.other.relations});const e=t=>({name:"Edit",type:"button",action:()=>{this.activeField=t,this.fieldComponent=this.activeField}});return[{label:"",value:"",other:{rows:[["Given Name",this.guardianData.given_name,e("given_name")],["Family Name",this.guardianData.family_name,e("family_name")],["Gender",this.guardianData.gender,e("gender")],["Birthdate",d.toStandardHisDisplayFormat(this.guardianData.birth_date),e("year_birth_date")],["Cell Phone Number",this.guardianData.cell_phone_number,e("cell_phone_number")],["Home District",this.guardianData.home_district,e("home_region")],["Home TA",this.guardianData.home_traditional_authority,e("home_region")],["Home Village",this.guardianData.home_village,e("home_region")],["Current district",this.guardianData.current_district,e("current_region")],["Current T/A",this.guardianData.current_traditional_authority,e("current_region")],["Landmark",this.guardianData.landmark,e("default_landmarks")],["Relation",this.guardianData.relation.type.b_is_to_a,e("relations")]]}}]},config:{overrideDefaultFooterBtns:{nextBtn:{name:"Finish",slot:"end",color:"success",onClick:()=>this.fieldComponent="select_guardian"}},footerBtns:[{name:"Void Relation",slot:"start",color:"danger",onClick:async()=>{b((async t=>{await e.voidRelation(this.patientData.id,this.guardianData.relation.relationship_id,t),this.fieldComponent="select_guardian"}))}}],hiddenFooterBtns:["Clear","Back"]}}},givenNameField(){const t=R.getGivenNameField();return t.helpText="Guardian First name",t.defaultValue=()=>this.getDefaultVal(t.id),t.condition=()=>this.canEdit([t.id],this.isSearchMode()),t},familyNameField(){const t=R.getFamilyNameField();return t.helpText="Guardian Last name",t.defaultValue=()=>this.getDefaultVal(t.id),t.condition=()=>this.canEdit([t.id],this.isSearchMode()),t},genderField(){const t=R.getGenderField();return t.defaultValue=()=>this.getDefaultVal(t.id),t.condition=()=>this.canEdit([t.id],this.isSearchMode()),t},dobFields(){const t=R.getDobConfig();return t.defaultValue=()=>this.getDefaultVal("birth_date"),t.condition=()=>this.canEdit(["year_birth_date","month_birth_date","day_birth_date"],this.isRegistrationMode()),p(t)},homeRegionField(){const t=R.getHomeRegionField();return t.condition=()=>this.canEdit(this.homeAddressAttributes,this.isRegistrationMode()),t},homeDistrictField(){const t=R.getHomeDistrictField();return t.condition=()=>this.canEdit(this.homeAddressAttributes,this.isRegistrationMode()),t},homeTAField(){const t=R.getHomeTaField();return t.condition=t=>this.canEdit(this.homeAddressAttributes,this.isRegistrationMode()&&!t.home_region.label.match(/foreign/i),!t.home_region.label.match(/foreign/i)),t},homeVillageField(){const t=R.getHomeVillageField();return t.condition=t=>this.canEdit(this.homeAddressAttributes,this.isRegistrationMode()&&!t.home_region.label.match(/foreign/i),!t.home_region.label.match(/foreign/i)),t},currentRegionField(){const t=R.getCurrentRegionField();return t.condition=()=>this.canEdit(this.currentAddressAttributes,this.isRegistrationMode()),t},currentDistrictField(){const t=R.getCurrentDistrictField();return t.condition=()=>this.canEdit(this.currentAddressAttributes,this.isRegistrationMode()),t},currentTAField(){const t=R.getCurrentTAfield();return t.condition=t=>this.canEdit(this.currentAddressAttributes,this.isRegistrationMode()&&!t.current_region.label.match(/foreign/i),!t.current_region.label.match(/foreign/i)),t},currentVillage(){const t=R.getCurrentVillageField();return t.condition=t=>this.canEdit(this.currentAddressAttributes,this.isRegistrationMode()&&!t.current_region.label.match(/foreign/i),!t.current_region.label.match(/foreign/i)),t},cellPhoneField(){const t=R.getCellNumberField();return t.condition=()=>this.canEdit([t.id],this.isRegistrationMode()),t},landmarkFields(){const t=R.getLandmarkFields(),e=t[0].proxyID||t[0].id;return t[0].defaultValue=()=>this.getDefaultVal(e),t[0].condition=()=>this.canEdit([e],this.isRegistrationMode()),t},relationsField(){return{id:"relations",helpText:"Select relationship type",type:l.TT_RELATION_SELECTION,defaultValue:()=>this.getDefaultVal("relations"),validation:t=>h.required(t),condition:()=>this.canEdit(["relations"]),onload:t=>{if(t.patient=this.patientData,this.isRegistrationMode()){const e=R.resolvePerson(t.cdata);t.guardian={name:`${e.given_name} ${e.family_name}`,birth_date:d.toStandardHisDisplayFormat(e.birthdate),home_address:`${e.home_district} ${e.home_traditional_authority}`}}else t.guardian=this.guardianData},options:async()=>(await e.getRelations()).map((t=>({label:t.b_is_to_a,value:t.description,other:t}))),config:{hiddenFooterBtns:["Clear"]}}},scanGuardian(){return{id:"scan",helpText:"Scan or Register Guardian",type:l.TT_BARCODE,requireNext:!1,condition:()=>!this.isEditMode(),onValue:async t=>{const e=await n.findByNpid(t);return u.isEmpty(e)||(this.guardianData=R.mapPersonData(e[0].person),this.fieldComponent="relations",this.fieldAction="Scan"),!1},config:{hiddenFooterBtns:["Clear","Next","Back"],footerBtns:[{name:"Find or Register Guardian",color:"success",slot:"end",onClick:()=>{this.fieldAction="Search",this.fieldComponent="given_name"}}]}}},searchResultField(){return{id:"results",helpText:"Search results",type:l.TT_PERSON_RESULT_VIEW,dynamicHelpText:t=>`Search results for \n                "${t.given_name.value} ${t.family_name.value} | ${t.gender.label}"\n                `,appearInSummary:()=>!1,condition:()=>this.isSearchMode(),validation:t=>h.required(t),options:async t=>(await n.search({given_name:t.given_name.value,family_name:t.family_name.value,gender:t.gender.value})).map((t=>R.getPersonAttributeOptions(t))),config:{hiddenFooterBtns:["Clear","Next","Back"],footerBtns:[{name:"Edit Search",slot:"end",onClick:()=>{this.fieldAction="Search",this.fieldComponent="given_name"}},{name:"New Guardian",slot:"end",onClick:()=>{this.fieldAction="Registration",this.fieldComponent="year_birth_date"}},{name:"Continue Guardian",color:"success",slot:"end",state:{disabled:{default:()=>!0,onValue:(t,e)=>u.isEmpty(e.results)}},onClick:t=>{this.guardianData=R.mapPersonData(t.results.other.person.person),this.fieldComponent="relations",this.fieldAction="Search"}}]}}}}});t("default",_(A,[["render",function(t,e,i,a,n,r){const s=f("his-standard-form");return D(),F(s,{onOnIndex:e[0]||(e[0]=e=>t.fieldComponent=""),skipSummary:!0,activeField:t.fieldComponent,fields:t.fields,onFinishAction:t.onFinish,cancelDestinationPath:`/patient/dashboard/${t.patientData.id}`},null,8,["activeField","fields","onFinishAction","cancelDestinationPath"])}]]))}}}));