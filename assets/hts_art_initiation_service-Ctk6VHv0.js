var l=Object.defineProperty;var p=(i,n,t)=>n in i?l(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var c=(i,n,t)=>(p(i,typeof n!="symbol"?n+"":n,t),t);import{bk as u,ak as d}from"./index-BFVcutZq.js";class v extends u{constructor(t,s=-1){super(t,79,s);c(this,"patientID");c(this,"printoutService",new d);this.patientID=t}async printHtsLinkageId(t){await this.printoutService.printLbl("/patients/".concat(this.patientID,"/labels/print_hts_linkage_code/").concat(t))}async getHtsCode(){return await this.getFirstValueText("HTC serial number")||"Un-assigned"}validLinkID(t){const s={A:0,C:1,H:2,K:3,L:4,N:5,P:6,W:7,X:8,Y:9},e=/^(\d{1,4})-(\d{1,3})-(\d{1,2})-([A-CE-HK-NP-Y])$/.exec(t);if(!e)return["Invalid LinkID format"];const r=parseInt(e[1],10),a=parseInt(e[2],10),o=parseInt(e[3],10),g=e[4];return e[1].length!==r.toString().length||e[3].length!==o.toString().length||e[2].length!==a.toString().length?["Invalid LinkID, book number and row number should not have leading zeros"]:isNaN(r)||isNaN(a)||isNaN(o)||r<1||r>9999||a<1||a>999||o<1||o>99?["Invalid LinkID format on book, page, or row number"]:s.hasOwnProperty(g)?null:["Invalid check digit"]}}export{v as H};