import{K as N,ah as r,S as n,dH as y}from"./index-BFVcutZq.js";var D=(e=>(e.TEST_KIT_USER_PROPERTY="hts_user_assigned_kits",e.HIV_SELF_KIT="HIV self-kit",e.SYPHILIS="Syphilis",e.HEPATITIS="Hepatitis B",e.BIOLINE="Bioline",e.DETERMINE="Determine",e.UNIGOLD="Unigold",e))(D||{});function d(){const e=N([]),{getUserProp:a,setUserProp:l}=y(),p=async()=>{try{const s=await a("HTS_PROGRAMS");return"".concat(s||"").split(",").map(t=>t.trim())}catch(s){console.error("".concat(s))}return[]};return{kits:e,initKits:async()=>{const s=[{kitName:"Unigold",lotNo:"",expiryDate:"",testGroup:"profession_hiv_kit",visible:!0,userProp:"HIV Test"},{kitName:"Determine",lotNo:"",expiryDate:"",testGroup:"profession_hiv_kit",visible:!0,userProp:"HIV Test"},{kitName:"Bioline",lotNo:"",expiryDate:"",testGroup:"profession_hiv_kit",visible:!0,userProp:"HIV Test"},{kitName:"HIV self-kit",lotNo:"",expiryDate:"",visible:!0},{kitName:"Syphilis",lotNo:"",expiryDate:"",visible:!0,userProp:"Syphilis Test"},{kitName:"Hepatitis B",lotNo:"",expiryDate:"",visible:!0,userProp:"Hepatitis B Test"}];try{const t=await p(),u=await a("hts_user_assigned_kits"),c=JSON.parse(u||"");s.forEach(i=>{i.userProp&&!r.isEmpty(t)&&(i.visible=t.includes(i.userProp));const o=r.find(c,{kitName:i.kitName});o&&(i.lotNo=o.lotNo,i.expiryDate=o.expiryDate)}),e.value=s.filter(i=>i.visible)}catch(t){e.value=s,console.error("".concat(t))}},saveKits:()=>l("hts_user_assigned_kits",JSON.stringify(e.value)),getLotNo:s=>{const t=r.find(e.value,{kitName:s});return t?new Date(t.expiryDate)<=new Date(n.getSessionDate())?"":t.lotNo:""},getExpiryDate:s=>{const t=r.find(e.value,{kitName:s});return t?new Date(t.expiryDate)<=new Date(n.getSessionDate())?"":t.expiryDate:""}}}export{D as K,d as T};