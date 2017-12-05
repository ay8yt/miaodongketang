"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};!function(n,e){var r=function(n){function e(n){if(null===n)return"null";var e=void 0===n?"undefined":_typeof(n);if("object"!==e)return e;var r=g.call(n).slice(8,-1).toLowerCase();return"object"!==r?r:n.constructor==Object?r:"unkonw"}function r(n){return"object"===e(n)}function t(n){return"function"===e(n)}function o(n){return"string"===e(n)}function u(){for(var n=arguments[0]||{},e=v.call(arguments,1),r=e.length,t=0;t<r;t++){var o=e[t];for(var u in o)n[u]=o[u]}return n}function i(){var n=v.call(arguments);return u.apply(null,[{}].concat(n))}function c(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\\/g,"&#92;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function a(n){return n.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")}function _(n){function e(){return"template.js error"}var r="template.js error\n\n";for(var t in n)r+="<"+t+">\n"+n[t]+"\n\n";return r+="<message>\n"+n.message+"\n\n",function(n,e){"undefined"!=typeof console&&console[n]&&console[n](e)}("error",r),s.error(n),e.toString=function(){return'__code__ = "template.js error"'},e}function f(n,e){var r=function(n,e){function r(n){return';__code__ += ("'+(n=n.replace(/('|")/g,"\\$1").replace(/\n/g," "))+'")\n'}function t(n){var e,r,t;return(r=/^(?:=|(:.*?)=)(.*)$/.exec(n))?(e=r[2],';__code__ += __modifierMap__["'+(t=Boolean(r[1])?r[1].slice(1):c?"h":"")+'"](typeof ('+e+') !== "undefined" ? ('+e+') : "")\n'):";"+n+"\n"}var o="",u=e.sTag,i=e.eTag,c=e.escape;for(var a=n.split(u),_=0,f=a.length;_<f;_++){var l=a[_].split(i);1===l.length?o+=r(l[0]):(o+=t(l[0]),l[1]&&(o+=r(l[1])))}return o}(n,e),t='\n    var html = (function (__data__, __modifierMap__) {\n        var __str__ = "", __code__ = "";\n        for(var key in __data__) {\n            __str__+=("var " + key + "=__data__[\'" + key + "\'];");\n        }\n        eval(__str__);\n\n'+r+"\n        ;return __code__;\n    }(__data__, __modifierMap__));\n    return html;\n";t=t.replace(/[\r]/g," ");try{var o=new Function("__data__","__modifierMap__",t);return o.toString=function(){return r},o}catch(n){throw n.temp="function anonymous(__data__, __modifierMap__) {"+t+"}",n}}function l(n,e){function r(r){r=i(d,r);try{var o=t(r,m);return o=e.compress?a(o):o}catch(e){return e.name="RenderError",e.tpl=n,e.render=t.toString(),_(e)()}}e=i(s,e);try{var t=f(n,e)}catch(e){return e.name="CompileError",e.tpl=n,e.render=e.temp,delete e.temp,_(e)}return r.toString=function(){return t.toString()},r}function p(n,e){if("string"!=typeof n)return"";var t=l(n);return r(e)?t(e):t}var s={sTag:"<%",eTag:"%>",compress:!1,escape:!0,error:function(n){}},d={},m={"":function(n){return function(n){return n}(n)},h:function(n){return c(n)},u:function(n){return encodeURI(n)}},g={}.toString,v=[].slice;return p.config=function(n){return r(n)&&(s=u(s,n)),i(s)},p.registerFunction=function(n,e){return o(n)?t(e)?d[n]=e:d[n]:i(d)},p.unregisterFunction=function(n){return!!o(n)&&(delete d[n],!0)},p.registerModifier=function(n,e){return o(n)?t(e)?m[n]=e:m[n]:i(m)},p.unregisterModifier=function(n){return!!o(n)&&(delete m[n],!0)},p.__encodeHTML=c,p.__compress=a,p.__handelError=_,p.__compile=l,p.version="0.7.1",p}();if("function"==typeof define&&define.amd)define("template",function(){return r});else if("object"===("undefined"==typeof exports?"undefined":_typeof(exports)))module.exports=r;else{var t=n.template;r.noConflict=function(){return n.template===r&&(n.template=t),r},n.template=r}}(void 0);