(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4198ca50"],{"0d3b":function(e,t,r){var n=r("d039"),a=r("b622"),i=r("c430"),o=a("iterator");e.exports=!n((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach((function(e,n){t["delete"]("b"),r+=n+e})),i&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},"2b3d":function(e,t,r){"use strict";r("3ca3");var n,a=r("23e7"),i=r("83ab"),o=r("0d3b"),s=r("da84"),u=r("37e8"),c=r("6eeb"),l=r("19aa"),h=r("5135"),f=r("60da"),p=r("4df4"),d=r("6547").codeAt,g=r("5fb2"),m=r("d44e"),v=r("9861"),b=r("69f3"),w=s.URL,y=v.URLSearchParams,k=v.getState,R=b.set,D=b.getterFor("URL"),S=Math.floor,x=Math.pow,L="Invalid authority",j="Invalid scheme",O="Invalid host",T="Invalid port",A=/[A-Za-z]/,q=/[\d+-.A-Za-z]/,P=/\d/,U=/^(0x|0X)/,_=/^[0-7]+$/,E=/^\d+$/,C=/^[\dA-Fa-f]+$/,F=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,I=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,B=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,M=/[\u0009\u000A\u000D]/g,Y=function(e,t){var r,n,a;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return O;if(r=V(t.slice(1,-1)),!r)return O;e.host=r}else if(Z(e)){if(t=g(t),F.test(t))return O;if(r=N(t),null===r)return O;e.host=r}else{if(I.test(t))return O;for(r="",n=p(t),a=0;a<n.length;a++)r+=$(n[a],W);e.host=r}},N=function(e){var t,r,n,a,i,o,s,u=e.split(".");if(u.length&&""==u[u.length-1]&&u.pop(),t=u.length,t>4)return e;for(r=[],n=0;n<t;n++){if(a=u[n],""==a)return e;if(i=10,a.length>1&&"0"==a.charAt(0)&&(i=U.test(a)?16:8,a=a.slice(8==i?1:2)),""===a)o=0;else{if(!(10==i?E:8==i?_:C).test(a))return e;o=parseInt(a,i)}r.push(o)}for(n=0;n<t;n++)if(o=r[n],n==t-1){if(o>=x(256,5-t))return null}else if(o>255)return null;for(s=r.pop(),n=0;n<r.length;n++)s+=r[n]*x(256,3-n);return s},V=function(e){var t,r,n,a,i,o,s,u=[0,0,0,0,0,0,0,0],c=0,l=null,h=0,f=function(){return e.charAt(h)};if(":"==f()){if(":"!=e.charAt(1))return;h+=2,c++,l=c}while(f()){if(8==c)return;if(":"!=f()){t=r=0;while(r<4&&C.test(f()))t=16*t+parseInt(f(),16),h++,r++;if("."==f()){if(0==r)return;if(h-=r,c>6)return;n=0;while(f()){if(a=null,n>0){if(!("."==f()&&n<4))return;h++}if(!P.test(f()))return;while(P.test(f())){if(i=parseInt(f(),10),null===a)a=i;else{if(0==a)return;a=10*a+i}if(a>255)return;h++}u[c]=256*u[c]+a,n++,2!=n&&4!=n||c++}if(4!=n)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;u[c++]=t}else{if(null!==l)return;h++,c++,l=c}}if(null!==l){o=c-l,c=7;while(0!=c&&o>0)s=u[c],u[c--]=u[l+o-1],u[l+--o]=s}else if(8!=c)return;return u},H=function(e){for(var t=null,r=1,n=null,a=0,i=0;i<8;i++)0!==e[i]?(a>r&&(t=n,r=a),n=null,a=0):(null===n&&(n=i),++a);return a>r&&(t=n,r=a),t},J=function(e){var t,r,n,a;if("number"==typeof e){for(t=[],r=0;r<4;r++)t.unshift(e%256),e=S(e/256);return t.join(".")}if("object"==typeof e){for(t="",n=H(e),r=0;r<8;r++)a&&0===e[r]||(a&&(a=!1),n===r?(t+=r?":":"::",a=!0):(t+=e[r].toString(16),r<7&&(t+=":")));return"["+t+"]"}return e},W={},G=f({},W,{" ":1,'"':1,"<":1,">":1,"`":1}),Q=f({},G,{"#":1,"?":1,"{":1,"}":1}),X=f({},Q,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),$=function(e,t){var r=d(e,0);return r>32&&r<127&&!h(t,e)?e:encodeURIComponent(e)},z={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Z=function(e){return h(z,e.scheme)},K=function(e){return""!=e.username||""!=e.password},ee=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},te=function(e,t){var r;return 2==e.length&&A.test(e.charAt(0))&&(":"==(r=e.charAt(1))||!t&&"|"==r)},re=function(e){var t;return e.length>1&&te(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},ne=function(e){var t=e.path,r=t.length;!r||"file"==e.scheme&&1==r&&te(t[0],!0)||t.pop()},ae=function(e){return"."===e||"%2e"===e.toLowerCase()},ie=function(e){return e=e.toLowerCase(),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},oe={},se={},ue={},ce={},le={},he={},fe={},pe={},de={},ge={},me={},ve={},be={},we={},ye={},ke={},Re={},De={},Se={},xe={},Le={},je=function(e,t,r,a){var i,o,s,u,c=r||oe,l=0,f="",d=!1,g=!1,m=!1;r||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(B,"")),t=t.replace(M,""),i=p(t);while(l<=i.length){switch(o=i[l],c){case oe:if(!o||!A.test(o)){if(r)return j;c=ue;continue}f+=o.toLowerCase(),c=se;break;case se:if(o&&(q.test(o)||"+"==o||"-"==o||"."==o))f+=o.toLowerCase();else{if(":"!=o){if(r)return j;f="",c=ue,l=0;continue}if(r&&(Z(e)!=h(z,f)||"file"==f&&(K(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=f,r)return void(Z(e)&&z[e.scheme]==e.port&&(e.port=null));f="","file"==e.scheme?c=we:Z(e)&&a&&a.scheme==e.scheme?c=ce:Z(e)?c=pe:"/"==i[l+1]?(c=le,l++):(e.cannotBeABaseURL=!0,e.path.push(""),c=Se)}break;case ue:if(!a||a.cannotBeABaseURL&&"#"!=o)return j;if(a.cannotBeABaseURL&&"#"==o){e.scheme=a.scheme,e.path=a.path.slice(),e.query=a.query,e.fragment="",e.cannotBeABaseURL=!0,c=Le;break}c="file"==a.scheme?we:he;continue;case ce:if("/"!=o||"/"!=i[l+1]){c=he;continue}c=de,l++;break;case le:if("/"==o){c=ge;break}c=De;continue;case he:if(e.scheme=a.scheme,o==n)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query;else if("/"==o||"\\"==o&&Z(e))c=fe;else if("?"==o)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query="",c=xe;else{if("#"!=o){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.path.pop(),c=De;continue}e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query,e.fragment="",c=Le}break;case fe:if(!Z(e)||"/"!=o&&"\\"!=o){if("/"!=o){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,c=De;continue}c=ge}else c=de;break;case pe:if(c=de,"/"!=o||"/"!=f.charAt(l+1))continue;l++;break;case de:if("/"!=o&&"\\"!=o){c=ge;continue}break;case ge:if("@"==o){d&&(f="%40"+f),d=!0,s=p(f);for(var v=0;v<s.length;v++){var b=s[v];if(":"!=b||m){var w=$(b,X);m?e.password+=w:e.username+=w}else m=!0}f=""}else if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&Z(e)){if(d&&""==f)return L;l-=p(f).length+1,f="",c=me}else f+=o;break;case me:case ve:if(r&&"file"==e.scheme){c=ke;continue}if(":"!=o||g){if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&Z(e)){if(Z(e)&&""==f)return O;if(r&&""==f&&(K(e)||null!==e.port))return;if(u=Y(e,f),u)return u;if(f="",c=Re,r)return;continue}"["==o?g=!0:"]"==o&&(g=!1),f+=o}else{if(""==f)return O;if(u=Y(e,f),u)return u;if(f="",c=be,r==ve)return}break;case be:if(!P.test(o)){if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&Z(e)||r){if(""!=f){var y=parseInt(f,10);if(y>65535)return T;e.port=Z(e)&&y===z[e.scheme]?null:y,f=""}if(r)return;c=Re;continue}return T}f+=o;break;case we:if(e.scheme="file","/"==o||"\\"==o)c=ye;else{if(!a||"file"!=a.scheme){c=De;continue}if(o==n)e.host=a.host,e.path=a.path.slice(),e.query=a.query;else if("?"==o)e.host=a.host,e.path=a.path.slice(),e.query="",c=xe;else{if("#"!=o){re(i.slice(l).join(""))||(e.host=a.host,e.path=a.path.slice(),ne(e)),c=De;continue}e.host=a.host,e.path=a.path.slice(),e.query=a.query,e.fragment="",c=Le}}break;case ye:if("/"==o||"\\"==o){c=ke;break}a&&"file"==a.scheme&&!re(i.slice(l).join(""))&&(te(a.path[0],!0)?e.path.push(a.path[0]):e.host=a.host),c=De;continue;case ke:if(o==n||"/"==o||"\\"==o||"?"==o||"#"==o){if(!r&&te(f))c=De;else if(""==f){if(e.host="",r)return;c=Re}else{if(u=Y(e,f),u)return u;if("localhost"==e.host&&(e.host=""),r)return;f="",c=Re}continue}f+=o;break;case Re:if(Z(e)){if(c=De,"/"!=o&&"\\"!=o)continue}else if(r||"?"!=o)if(r||"#"!=o){if(o!=n&&(c=De,"/"!=o))continue}else e.fragment="",c=Le;else e.query="",c=xe;break;case De:if(o==n||"/"==o||"\\"==o&&Z(e)||!r&&("?"==o||"#"==o)){if(ie(f)?(ne(e),"/"==o||"\\"==o&&Z(e)||e.path.push("")):ae(f)?"/"==o||"\\"==o&&Z(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&te(f)&&(e.host&&(e.host=""),f=f.charAt(0)+":"),e.path.push(f)),f="","file"==e.scheme&&(o==n||"?"==o||"#"==o))while(e.path.length>1&&""===e.path[0])e.path.shift();"?"==o?(e.query="",c=xe):"#"==o&&(e.fragment="",c=Le)}else f+=$(o,Q);break;case Se:"?"==o?(e.query="",c=xe):"#"==o?(e.fragment="",c=Le):o!=n&&(e.path[0]+=$(o,W));break;case xe:r||"#"!=o?o!=n&&("'"==o&&Z(e)?e.query+="%27":e.query+="#"==o?"%23":$(o,W)):(e.fragment="",c=Le);break;case Le:o!=n&&(e.fragment+=$(o,G));break}l++}},Oe=function(e){var t,r,n=l(this,Oe,"URL"),a=arguments.length>1?arguments[1]:void 0,o=String(e),s=R(n,{type:"URL"});if(void 0!==a)if(a instanceof Oe)t=D(a);else if(r=je(t={},String(a)),r)throw TypeError(r);if(r=je(s,o,null,t),r)throw TypeError(r);var u=s.searchParams=new y,c=k(u);c.updateSearchParams(s.query),c.updateURL=function(){s.query=String(u)||null},i||(n.href=Ae.call(n),n.origin=qe.call(n),n.protocol=Pe.call(n),n.username=Ue.call(n),n.password=_e.call(n),n.host=Ee.call(n),n.hostname=Ce.call(n),n.port=Fe.call(n),n.pathname=Ie.call(n),n.search=Be.call(n),n.searchParams=Me.call(n),n.hash=Ye.call(n))},Te=Oe.prototype,Ae=function(){var e=D(this),t=e.scheme,r=e.username,n=e.password,a=e.host,i=e.port,o=e.path,s=e.query,u=e.fragment,c=t+":";return null!==a?(c+="//",K(e)&&(c+=r+(n?":"+n:"")+"@"),c+=J(a),null!==i&&(c+=":"+i)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(c+="?"+s),null!==u&&(c+="#"+u),c},qe=function(){var e=D(this),t=e.scheme,r=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(n){return"null"}return"file"!=t&&Z(e)?t+"://"+J(e.host)+(null!==r?":"+r:""):"null"},Pe=function(){return D(this).scheme+":"},Ue=function(){return D(this).username},_e=function(){return D(this).password},Ee=function(){var e=D(this),t=e.host,r=e.port;return null===t?"":null===r?J(t):J(t)+":"+r},Ce=function(){var e=D(this).host;return null===e?"":J(e)},Fe=function(){var e=D(this).port;return null===e?"":String(e)},Ie=function(){var e=D(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Be=function(){var e=D(this).query;return e?"?"+e:""},Me=function(){return D(this).searchParams},Ye=function(){var e=D(this).fragment;return e?"#"+e:""},Ne=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(i&&u(Te,{href:Ne(Ae,(function(e){var t=D(this),r=String(e),n=je(t,r);if(n)throw TypeError(n);k(t.searchParams).updateSearchParams(t.query)})),origin:Ne(qe),protocol:Ne(Pe,(function(e){var t=D(this);je(t,String(e)+":",oe)})),username:Ne(Ue,(function(e){var t=D(this),r=p(String(e));if(!ee(t)){t.username="";for(var n=0;n<r.length;n++)t.username+=$(r[n],X)}})),password:Ne(_e,(function(e){var t=D(this),r=p(String(e));if(!ee(t)){t.password="";for(var n=0;n<r.length;n++)t.password+=$(r[n],X)}})),host:Ne(Ee,(function(e){var t=D(this);t.cannotBeABaseURL||je(t,String(e),me)})),hostname:Ne(Ce,(function(e){var t=D(this);t.cannotBeABaseURL||je(t,String(e),ve)})),port:Ne(Fe,(function(e){var t=D(this);ee(t)||(e=String(e),""==e?t.port=null:je(t,e,be))})),pathname:Ne(Ie,(function(e){var t=D(this);t.cannotBeABaseURL||(t.path=[],je(t,e+"",Re))})),search:Ne(Be,(function(e){var t=D(this);e=String(e),""==e?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",je(t,e,xe)),k(t.searchParams).updateSearchParams(t.query)})),searchParams:Ne(Me),hash:Ne(Ye,(function(e){var t=D(this);e=String(e),""!=e?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",je(t,e,Le)):t.fragment=null}))}),c(Te,"toJSON",(function(){return Ae.call(this)}),{enumerable:!0}),c(Te,"toString",(function(){return Ae.call(this)}),{enumerable:!0}),w){var Ve=w.createObjectURL,He=w.revokeObjectURL;Ve&&c(Oe,"createObjectURL",(function(e){return Ve.apply(w,arguments)})),He&&c(Oe,"revokeObjectURL",(function(e){return He.apply(w,arguments)}))}m(Oe,"URL"),a({global:!0,forced:!o,sham:!i},{URL:Oe})},"5fb2":function(e,t,r){"use strict";var n=2147483647,a=36,i=1,o=26,s=38,u=700,c=72,l=128,h="-",f=/[^\0-\u007E]/,p=/[.\u3002\uFF0E\uFF61]/g,d="Overflow: input needs wider integers to process",g=a-i,m=Math.floor,v=String.fromCharCode,b=function(e){var t=[],r=0,n=e.length;while(r<n){var a=e.charCodeAt(r++);if(a>=55296&&a<=56319&&r<n){var i=e.charCodeAt(r++);56320==(64512&i)?t.push(((1023&a)<<10)+(1023&i)+65536):(t.push(a),r--)}else t.push(a)}return t},w=function(e){return e+22+75*(e<26)},y=function(e,t,r){var n=0;for(e=r?m(e/u):e>>1,e+=m(e/t);e>g*o>>1;n+=a)e=m(e/g);return m(n+(g+1)*e/(e+s))},k=function(e){var t=[];e=b(e);var r,s,u=e.length,f=l,p=0,g=c;for(r=0;r<e.length;r++)s=e[r],s<128&&t.push(v(s));var k=t.length,R=k;k&&t.push(h);while(R<u){var D=n;for(r=0;r<e.length;r++)s=e[r],s>=f&&s<D&&(D=s);var S=R+1;if(D-f>m((n-p)/S))throw RangeError(d);for(p+=(D-f)*S,f=D,r=0;r<e.length;r++){if(s=e[r],s<f&&++p>n)throw RangeError(d);if(s==f){for(var x=p,L=a;;L+=a){var j=L<=g?i:L>=g+o?o:L-g;if(x<j)break;var O=x-j,T=a-j;t.push(v(w(j+O%T))),x=m(O/T)}t.push(v(w(x))),g=y(p,S,R==k),p=0,++R}}++p,++f}return t.join("")};e.exports=function(e){var t,r,n=[],a=e.toLowerCase().replace(p,".").split(".");for(t=0;t<a.length;t++)r=a[t],n.push(f.test(r)?"xn--"+k(r):r);return n.join(".")}},"6d14":function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("1da1"),a=r("b85c"),i=r("2909"),o=r("3835"),s=r("d4ec"),u=r("bee2"),c=r("262e"),l=r("2caf"),h=(r("96cf"),r("4fad"),r("99af"),r("b0c0"),r("d3b7"),r("159b"),r("ac1f"),r("1276"),r("498a"),r("fcd5")),f=r("1c74"),p=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(s["a"])(this,r),e=t.call(this),e.regenerate=!1,e}return Object(u["a"])(r,[{key:"setRegenerate",value:function(e){this.regenerate=e}},{key:"requestIDSRWeekly",value:function(){return this.getReport("generate_weekly_idsr_report",{request:"true"})}},{key:"requestIDSRMonthly",value:function(){return this.getReport("generate_monthly_idsr_report",{request:"true"})}},{key:"renderResults",value:function(e){for(var t=[],r=1,n=0,a=Object.entries(e);n<a.length;n++){var s=Object(o["a"])(a[n],2),u=s[0],c=s[1],l=[],h=c,f={id:0,name:"",lessThanFiveYears:"",lessThanFiveYearsPatientIds:"",greaterThanEqualFiveYears:"",greaterThanEqualFiveYearsPatientIds:"",total:0,totalPatientIds:""};f.name=u;var p=0;f.id=r,r+=1;for(var d=0,g=Object.entries(h);d<g.length;d++){var m=Object(o["a"])(g[d],2),v=m[0],b=m[1],w=b;null!=w&&(p+=w.length,f.total=p,w.length&&(l.push.apply(l,Object(i["a"])(w)),f.totalPatientIds=l),"<5yrs"==v&&(f.lessThanFiveYears=w.length,f.lessThanFiveYearsPatientIds=w),">=5yrs"==v&&(f.greaterThanEqualFiveYears=w.length,f.greaterThanEqualFiveYearsPatientIds=w))}t.push(f)}return t}},{key:"getCSVString",value:function(e){var t,r="Diseases/Events/Conditions, <5 yrs, >=5 yrs, Total,\n",n=Object(a["a"])(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;r+="".concat(i.name,",").concat(i.lessThanFiveYears,",").concat(i.greaterThanEqualFiveYears,",").concat(i.total,",\n")}}catch(o){n.e(o)}finally{n.f()}return{CSVString:r}}}],[{key:"getReportEpiWeeks",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,f["e"].getJson("get_weeks");case 3:return r=e.sent,r.reverse().forEach((function(e){var r=e[1].split(" "),n=r[0],a=r[2],i=e[0].split("W"),o=i[0]+"/W"+i[1];t.push({name:o,start:n,end:a})})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getReportMonths",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,f["e"].getJson("get_months");case 3:return r=e.sent,r.forEach((function(e){var r=e[1],n=r[0],a=r[1],i=a.split("to");t.push({name:n,start:i[0],end:i[1].trim()})})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(h["d"])},9861:function(e,t,r){"use strict";r("e260");var n=r("23e7"),a=r("d066"),i=r("0d3b"),o=r("6eeb"),s=r("e2cc"),u=r("d44e"),c=r("9ed3"),l=r("69f3"),h=r("19aa"),f=r("5135"),p=r("0366"),d=r("f5df"),g=r("825a"),m=r("861d"),v=r("7c73"),b=r("5c6c"),w=r("9a1f"),y=r("35a1"),k=r("b622"),R=a("fetch"),D=a("Headers"),S=k("iterator"),x="URLSearchParams",L=x+"Iterator",j=l.set,O=l.getterFor(x),T=l.getterFor(L),A=/\+/g,q=Array(4),P=function(e){return q[e-1]||(q[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},U=function(e){try{return decodeURIComponent(e)}catch(t){return e}},_=function(e){var t=e.replace(A," "),r=4;try{return decodeURIComponent(t)}catch(n){while(r)t=t.replace(P(r--),U);return t}},E=/[!'()~]|%20/g,C={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},F=function(e){return C[e]},I=function(e){return encodeURIComponent(e).replace(E,F)},B=function(e,t){if(t){var r,n,a=t.split("&"),i=0;while(i<a.length)r=a[i++],r.length&&(n=r.split("="),e.push({key:_(n.shift()),value:_(n.join("="))}))}},M=function(e){this.entries.length=0,B(this.entries,e)},Y=function(e,t){if(e<t)throw TypeError("Not enough arguments")},N=c((function(e,t){j(this,{type:L,iterator:w(O(e).entries),kind:t})}),"Iterator",(function(){var e=T(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r})),V=function(){h(this,V,x);var e,t,r,n,a,i,o,s,u,c=arguments.length>0?arguments[0]:void 0,l=this,p=[];if(j(l,{type:x,entries:p,updateURL:function(){},updateSearchParams:M}),void 0!==c)if(m(c))if(e=y(c),"function"===typeof e){t=e.call(c),r=t.next;while(!(n=r.call(t)).done){if(a=w(g(n.value)),i=a.next,(o=i.call(a)).done||(s=i.call(a)).done||!i.call(a).done)throw TypeError("Expected sequence with length 2");p.push({key:o.value+"",value:s.value+""})}}else for(u in c)f(c,u)&&p.push({key:u,value:c[u]+""});else B(p,"string"===typeof c?"?"===c.charAt(0)?c.slice(1):c:c+"")},H=V.prototype;s(H,{append:function(e,t){Y(arguments.length,2);var r=O(this);r.entries.push({key:e+"",value:t+""}),r.updateURL()},delete:function(e){Y(arguments.length,1);var t=O(this),r=t.entries,n=e+"",a=0;while(a<r.length)r[a].key===n?r.splice(a,1):a++;t.updateURL()},get:function(e){Y(arguments.length,1);for(var t=O(this).entries,r=e+"",n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){Y(arguments.length,1);for(var t=O(this).entries,r=e+"",n=[],a=0;a<t.length;a++)t[a].key===r&&n.push(t[a].value);return n},has:function(e){Y(arguments.length,1);var t=O(this).entries,r=e+"",n=0;while(n<t.length)if(t[n++].key===r)return!0;return!1},set:function(e,t){Y(arguments.length,1);for(var r,n=O(this),a=n.entries,i=!1,o=e+"",s=t+"",u=0;u<a.length;u++)r=a[u],r.key===o&&(i?a.splice(u--,1):(i=!0,r.value=s));i||a.push({key:o,value:s}),n.updateURL()},sort:function(){var e,t,r,n=O(this),a=n.entries,i=a.slice();for(a.length=0,r=0;r<i.length;r++){for(e=i[r],t=0;t<r;t++)if(a[t].key>e.key){a.splice(t,0,e);break}t===r&&a.push(e)}n.updateURL()},forEach:function(e){var t,r=O(this).entries,n=p(e,arguments.length>1?arguments[1]:void 0,3),a=0;while(a<r.length)t=r[a++],n(t.value,t.key,this)},keys:function(){return new N(this,"keys")},values:function(){return new N(this,"values")},entries:function(){return new N(this,"entries")}},{enumerable:!0}),o(H,S,H.entries),o(H,"toString",(function(){var e,t=O(this).entries,r=[],n=0;while(n<t.length)e=t[n++],r.push(I(e.key)+"="+I(e.value));return r.join("&")}),{enumerable:!0}),u(V,x),n({global:!0,forced:!i},{URLSearchParams:V}),i||"function"!=typeof R||"function"!=typeof D||n({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,r,n,a=[e];return arguments.length>1&&(t=arguments[1],m(t)&&(r=t.body,d(r)===x&&(n=t.headers?new D(t.headers):new D,n.has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=v(t,{body:b(0,String(r)),headers:b(0,n)}))),a.push(t)),R.apply(this,a)}}),e.exports={URLSearchParams:V,getState:O}},"9a1f":function(e,t,r){var n=r("825a"),a=r("35a1");e.exports=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return n(t.call(e))}},c2b0:function(e,t,r){"use strict";var n=r("2909"),a=r("3835"),i=r("1da1"),o=(r("96cf"),r("99af"),r("d3b7"),r("3ca3"),r("ddb0"),r("d81d"),r("25f0"),r("b0c0"),r("7a23")),s=r("b446"),u=r("23e6"),c=r("9283"),l=r("8a30"),h=r("d6aa"),f=r("fcd5"),p=r("6d14"),d=r("d95e"),g=r("2706"),m=r("9ceb"),v=r("5a0c"),b=r.n(v),w=r("1c74"),y=r("2ef0"),k=Object(o["defineComponent"])({data:function(){return{fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",drillDownCache:{}}},methods:{toDate:function(e){return c["b"].toStandardHisDisplayFormat(e)},confirmPatient:function(e){return this.$router.push("/patients/confirm?person_id=".concat(e))},exportToCustomPDF:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=open("","","width:1024px, height:768px"),n=document.getElementById("report-content"),n&&r&&(r.document.write("\n                    <html>\n                    <head>\n                        <title>".concat(e,'</title>\n                        <link rel="stylesheet" media="print" href="/assets/css/cohort.css" />\n                    </head>\n                    <body>\n                        ').concat(n.innerHTML,"\n                    </body>\n                    </html>\n                ")),setTimeout((function(){r.print(),r.close()}),3500));case 3:case"end":return t.stop()}}),t)})))()},onDrillDown:function(e,t){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!Object(y["isEmpty"])(t)){n.next=2;break}return n.abrupt("return");case 2:return a=[[m["a"].thTxt("First name"),m["a"].thTxt("Last name"),m["a"].thTxt("Gender"),m["a"].thTxt("Age"),m["a"].thTxt("Phone"),m["a"].thTxt("Address"),m["a"].thTxt("Action")]],o=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].findByID(t);case 2:return n=e.sent,a=new u["a"](n),e.abrupt("return",[m["a"].td(a.getGivenName()),m["a"].td(a.getFamilyName()),m["a"].td(a.getGender()),m["a"].td(a.getAge()),m["a"].td(a.getPhoneNumber()),m["a"].td("".concat(a.getCurrentDistrict(),", ").concat(a.getCurrentVillage(),", ").concat(a.getClosestLandmark())),m["a"].tdBtn("Select",Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["X"].dismiss({});case 2:r.$router.push({path:"/patient/dashboard/".concat(t)});case 3:case"end":return e.stop()}}),e)}))))]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.abrupt("return",r.drilldownData(e,a,t,o));case 5:case"end":return n.stop()}}),n)})))()},drilldownAsyncRows:function(e,t,r){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,l["X"].create({component:h["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:r,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:function(){return l["X"].dismiss()}}});case 2:a=n.sent,a.present();case 4:case"end":return n.stop()}}),n)})))()},drilldownData:function(e,t,r,n){return Object(i["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,l["X"].create({component:h["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:r,rowParser:n,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:function(){return l["X"].dismiss()}}});case 2:i=a.sent,i.present();case 4:case"end":return a.stop()}}),a)})))()},getDefaultDrillDownTable:function(){var e=this,t=[[m["a"].thTxt("ARV number"),m["a"].thTxt("Gender"),m["a"].thTxt("Birth Date"),m["a"].thTxt("Actions")]],r=function(t){return t.map(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var n,o,s,c,h,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=Object(a["a"])(r,2),o=n[0],s=n[1],!(s in e.drillDownCache)){t.next=3;break}return t.abrupt("return",[o]);case 3:return t.next=5,u["a"].findByID(s);case 5:return c=t.sent,h=new u["a"](c),f=[o,m["a"].td(h.getArvNumber()),m["a"].td(h.getGender()),m["a"].tdDate(h.getBirthdate().toString()),m["a"].tdBtn("Show",Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["X"].dismiss({});case 2:e.$router.push({path:"/patient/dashboard/".concat(s)});case 3:case"end":return t.stop()}}),t)}))))],e.drillDownCache[s]=f,t.abrupt("return",f);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())};return{rowParser:r,columns:t}},runTableDrill:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Drilldown patients",r=this.getDefaultDrillDownTable(),n=r.columns,a=r.rowParser;this.drilldownData(t,n,e,a)},drill:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Drill table";return e&&e.length>0?m["a"].tdLink(e.length,(function(){return t.runTableDrill(e,r)})):m["a"].td(0)},getEpiweeksFields:function(){return[{id:"epiweek",helpText:"Select EPI week",type:d["b"].TT_SELECT,validation:function(e){return g["a"].required(e)},options:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p["a"].getReportEpiWeeks();case 2:return t=e.sent,r=t.map((function(e){return{label:e.name+" - ("+b()(e.start).format("DD/MMM/YYYY")+" - "+b()(e.end).format("DD/MMM/YYYY")+")",value:e.start,other:e}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]},getMonthlyFields:function(){return[{id:"idsrmonth",helpText:"Select Month",type:d["b"].TT_SELECT,validation:function(e){return g["a"].required(e)},options:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p["a"].getReportMonths();case 2:return t=e.sent,r=t.map((function(e){return{label:e.name+" - ("+b()(e.start).format("DD/MMM/YYYY")+" - "+b()(e.end).format("DD/MMM/YYYY")+")",value:e.start,other:e}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]},getDateDurationFields:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,i="2001-01-01",o=w["e"].getSessionDate();return[{id:"quarter",helpText:"Select Quarter",type:d["b"].TT_SELECT,condition:function(){return t},validation:function(e){return g["a"].required(e)},options:function(){var e=f["d"].getReportQuarters(a),t=e.map((function(e){return{label:e.name,value:e.start,other:e}}));return r&&(t=[{label:"Set custom period",value:"custom_period",other:{}}].concat(Object(n["a"])(t))),t}}].concat(Object(n["a"])(Object(s["b"])({id:"start_date",helpText:"Start",required:!0,condition:function(e){return e.quarter&&"custom_period"===e.quarter.value||!t},minDate:function(){return i},maxDate:function(){return o},estimation:{allowUnknown:!1},computeValue:function(e){return e}})),Object(n["a"])(Object(s["b"])({id:"end_date",helpText:"End",required:!0,condition:function(e){return e.quarter&&"custom_period"===e.quarter.value||!t},unload:function(t,r,n,a){"next"===r&&(e.endDate=a.end_date)},minDate:function(e,t){return t.start_date},maxDate:function(){return o},estimation:{allowUnknown:!1},computeValue:function(e){return e}})))}}});const R=k;t["a"]=R},cb01:function(e,t,r){"use strict";var n=r("7a23"),a={style:{margin:"auto",width:"95%","margin-top":"1%"}};function i(e,t,r,i,o,s){var u=Object(n["resolveComponent"])("report-table");return Object(n["openBlock"])(),Object(n["createBlock"])("div",a,[Object(n["createVNode"])(u,{columns:e.columns,rows:e.rows,config:{tableCssTheme:e.tableCssTheme}},null,8,["columns","rows","config"])])}r("a9e3"),r("d3b7"),r("159b"),r("b0c0");var o=r("80e3"),s=r("9ceb"),u=Object(n["defineComponent"])({components:{ReportTable:o["a"]},props:{clinicName:{type:String,default:""},reportparams:{type:Object,required:!0},totalOPDVisits:{type:Number,required:!0},reportName:{type:String,required:!0},periodLabel:{type:String,required:!0},periodDates:{type:String,required:!0},rangeLabel:{type:String,required:!0},range:{type:String,required:!0}},data:function(){return{tableCssTheme:"opd-report-theme",rows:[],columns:[[s["a"].thTxt(this.reportName,{colspan:2,sortable:!1,exportable:!1})]]}},mounted:function(){this.initTable()},methods:{initTable:function(){var e=[],t=[{name:"Country:",value:"Malawi"},{name:"Reporting Facility Name:",value:this.clinicName},{name:this.rangeLabel+":",value:this.range},{name:this.periodLabel+":",value:this.periodDates},{name:"Total OPD Visits:",value:this.totalOPDVisits}];t.forEach((function(t){"undefined:"!==t.name&&e.push([s["a"].td(t.name,{style:{textAlign:"left"}}),s["a"].td(t.value,{style:{textAlign:"left"}})])})),this.rows=e}}}),c=r("6b0d"),l=r.n(c);const h=l()(u,[["render",i]]);t["a"]=h},fcd5:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"c",(function(){return p})),r.d(t,"b",(function(){return d})),r.d(t,"d",(function(){return g}));var n=r("5530"),a=r("d4ec"),i=r("bee2"),o=r("262e"),s=r("2caf"),u=(r("d3b7"),r("159b"),r("b64b"),r("99af"),r("1c74")),c=r("9283"),l=r("b89f"),h=r("bef6"),f={one:"AL 1",two:"AL 2",three:"AL 3",four:"LA 4"},p=["Diabetes","Hypertension","Stroke","Suspected cancer","Confirmed cancer","Palliative cancer","Asthma","Depression","Acute psychosis","Chronic psychosis","Epilepsy"],d=["Organic mental disorder (Chronic)","Organic mental disorder (acute)","Alcohol use mental disorder","Drug use mental disorder","Schizophrenia","Acute and transient psychotic disorder","Schizo-affective disorder","Mood-affective disorder (MANIC)","Mood-affective disorder (BIPOLAR)","Mood-affective disorder (DEPRESSION)","Anxiety disorder","Stress reaction adjustment disorder","Dissociative conversion disorder","Somatoform disorder","Puerperal mental disorder","Personality/Behaviour disorder","Mental retardation","Psychological mental disorder","Hyperkinetic conduct disorder","Epilepsy"],g=function(e){Object(o["a"])(r,e);var t=Object(s["a"])(r);function r(){var e;return Object(a["a"])(this,r),e=t.call(this),e.endDate="",e.startDate="",e.epiweek="",e.date=u["e"].getSessionDate(),e.programID=u["e"].getProgramID(),e}return Object(i["a"])(r,[{key:"getPatientsWithNIDs",value:function(){return this.getReport("with_nids")}},{key:"getClinicRegistrations",value:function(){return this.getReport("registration")}},{key:"getDrugsGivenWithoutPrescription",value:function(){return this.getReport("drugs_given_without_prescription")}},{key:"getDrugsGivenWithPrescription",value:function(){return this.getReport("drugs_given_with_prescription")}},{key:"getDiagnosis",value:function(){var e="programs/".concat(this.programID,"/reports/diagnosis");return u["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate,date:this.date})}},{key:"getDiagnosisByAddress",value:function(){return this.getReport("diagnosis_by_address")}},{key:"getLaPrescriptions",value:function(){var e="programs/".concat(this.programID,"/reports/la_prescriptions");return u["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate})}},{key:"printLaReport",value:function(e){var t=new l["a"],r="programs/".concat(this.programID,"/barcodes/la_report"),n={"date[start]":this.startDate,"date[end]":this.endDate};return Object.keys(f).forEach((function(t,r){r++,n["".concat(r,"[prescription]")]=e["total_la_".concat(t,"_prescribed_drugs")],n["".concat(r,"[dispensed]")]=e["total_la_".concat(t,"_dispensed_drugs")]})),t.printLbl("".concat(r,"?").concat(h["a"].parameterizeObjToString(n)))}},{key:"getDateIntervalPeriod",value:function(){return"".concat(c["b"].toStandardHisDisplayFormat(this.startDate)," - ").concat(c["b"].toStandardHisDisplayFormat(this.endDate))}},{key:"setStartDate",value:function(e){this.startDate=e}},{key:"setEndDate",value:function(e){this.endDate=e}},{key:"setEpiWeek",value:function(e){this.epiweek=e}},{key:"getReportPeriod",value:function(){return this.startDate&&this.endDate?"".concat(c["b"].toStandardHisDisplayFormat(this.startDate)," - ").concat(c["b"].toStandardHisDisplayFormat(this.endDate)):"-"}},{key:"getReport",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u["e"].getJson(e,this.buildRequest(t))}},{key:"buildRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.epiweek&&(t["epiweek"]=this.epiweek),Object(n["a"])(Object(n["a"])({},t),e)}}],[{key:"getReportQuarters",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t=[],r=c["b"].getCurrentYear(),n=0;n<e;++n)t.push({name:"Q4 ".concat(r),start:"".concat(r,"-10-01"),end:"".concat(r,"-12-31")}),t.push({name:"Q3 ".concat(r),start:"".concat(r,"-07-01"),end:"".concat(r,"-09-30")}),t.push({name:"Q2 ".concat(r),start:"".concat(r,"-04-01"),end:"".concat(r,"-06-30")}),t.push({name:"Q1 ".concat(r),start:"".concat(r,"-01-01"),end:"".concat(r,"-03-31")}),--r;return t}}]),r}(u["e"])}}]);
//# sourceMappingURL=chunk-4198ca50.8c34b920.js.map