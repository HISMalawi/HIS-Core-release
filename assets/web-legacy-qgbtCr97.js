System.register(["./index-legacy-DLdqxVnr.js"],(function(e,r){"use strict";var t;return{setters:[e=>{t=e.em}],execute:function(){e("LabelPrinterWeb",class extends t{async printLabel(e){if(!e.url)throw new TypeError("Unable to Print Label: URL is required");document.location=e.url}async discover(){return{devices:[{name:"webPrinter",address:"Browser",port:"Browser"}]}}})}}}));