var D=Object.defineProperty;var p=(n,s,r)=>s in n?D(n,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[s]=r;var o=(n,s,r)=>p(n,typeof s!="symbol"?s+"":s,r);import{al as h,aK as l,bI as g,d5 as m}from"./index-DrPQ21-i.js";import{D as c}from"./drug_order_service-DFNDV6-6.js";class y extends h{constructor(){super()}static async fetchAvailableDrugStock(s){const r=await this.getJson("pharmacy/items",{drug_id:s});if(!l.isEmpty(r))return r.map(t=>({quantity:t.current_quantity,packSize:t.pack_size}))}}const d={11:[30],21:[25],22:[60],24:[30,60,90,100],30:[90],39:[60],73:[120],74:[60],76:[1e3],297:[30,60,90],576:[30,60,90],613:[60],731:[60],732:[60],733:[60],734:[30],735:[30],736:[60],738:[60],931:[12,30,60],932:[30],954:[60],963:[30,60,90],968:[60],969:[30],971:[30,60,90],976:[60],977:[30],982:[30],983:[30,90],1039:[30,60,90],1043:[60],1044:[30],1056:[24],1216:[3,6,8,12]};class v extends g{constructor(r,t){super(r,54,t);o(this,"drugHistory");o(this,"currentDrugOrder");o(this,"useDrugManagement");this.drugHistory=[],this.currentDrugOrder=[],this.useDrugManagement=!1}setIsDrugManagementEnabled(r){this.useDrugManagement=r}async loadDrugManagementEnabled(){this.useDrugManagement=await m.drugManagementEnabled()}getDrugHistory(){return this.drugHistory}getCurrentOrder(){return this.currentDrugOrder}buildDispensations(r,t,e){const u=[];for(let a=0;a<e;a++)u.push({drug_order_id:r,date:this.date,quantity:t/e});return u}saveDispensations(r){return g.postJson("/dispensations",{dispensations:r,program_id:g.getProgramID()})}async voidOrder(r){return g.void("/dispensations/".concat(r),{})}async loadDrugHistory(){try{this.drugHistory=await c.getDrugOrderHistory(this.patientID)||[]}catch(r){console.warn(r)}}async loadCurrentDrugOrder(){if(this.currentDrugOrder=await c.getDrugOrders(this.patientID)||[],!!this.useDrugManagement)for(const r of this.currentDrugOrder){const t=await y.fetchAvailableDrugStock(r.drug.drug_id);r.stocks=this.groupByPackSize(t)}}groupByPackSize(r){const t=new Map;return r==null||r.forEach(({packSize:e,quantity:u})=>{var a,i;e&&(t.has(e)?t.set(e,{packSize:e,quantity:u+((i=(a=t.get(e))==null?void 0:a.quantity)!=null?i:0)}):t.set(e,{quantity:u,packSize:e}))}),Array.from(t.values())}getDrugPackSizes(r){return r in d?d[r]:[30,60,90]}calcCompletePack(r,t){const e=r.barcodes.sort((a,i)=>a.tabs-i.tabs);if(e.length==0||t==0)return t;for(const a in e){const{tabs:i}=e[a];if(parseInt(i)>=t)return i}return parseInt(e[e.length-1].tabs)}}export{v as D};