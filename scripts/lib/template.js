"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,n){var r=function(e){var n={sTag:"<%",eTag:"%>",compress:!1,escape:!0,error:function(e){}},r={},t={"":function(e){return e},h:function(e){return p(e)},u:function(e){return encodeURI(e)}},o={}.toString,u=[].slice;function i(e){if(null===e)return"null";var n=void 0===e?"undefined":_typeof(e);if("object"!==n)return n;var r=o.call(e).slice(8,-1).toLowerCase();return"object"!==r?r:e.constructor==Object?r:"unkonw"}function c(e){return"object"===i(e)}function a(e){return"function"===i(e)}function _(e){return"string"===i(e)}function f(){for(var e=arguments[0]||{},n=u.call(arguments,1),r=n.length,t=0;t<r;t++){var o=n[t];for(var i in o)e[i]=o[i]}return e}function l(){var e=u.call(arguments);return f.apply(null,[{}].concat(e))}function p(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\\/g,"&#92;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function s(e){return e.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")}function d(e){var r,t,o="template.js error\n\n";for(var u in e)o+="<"+u+">\n"+e[u]+"\n\n";function i(){return"template.js error"}return o+="<message>\n"+e.message+"\n\n",r="error",t=o,"undefined"!=typeof console&&console[r]&&console[r](t),n.error(e),i.toString=function(){return'__code__ = "template.js error"'},i}function m(e,n){var r=function(e,n){var r="",t=n.sTag,o=n.eTag,u=n.escape;function i(e){return';__code__ += ("'+(e=e.replace(/('|")/g,"\\$1").replace(/\n/g," "))+'")\n'}function c(e){var n,r;return(r=/^(?:=|(:.*?)=)(.*)$/.exec(e))?(n=r[2],';__code__ += __modifierMap__["'+(Boolean(r[1])?r[1].slice(1):u?"h":"")+'"](typeof ('+n+') !== "undefined" ? ('+n+') : "")\n'):";"+e+"\n"}for(var a=e.split(t),_=0,f=a.length;_<f;_++){var l=a[_].split(o);1===l.length?r+=i(l[0]):(r+=c(l[0]),l[1]&&(r+=i(l[1])))}return r}(e,n),t='\n    var html = (function (__data__, __modifierMap__) {\n        var __str__ = "", __code__ = "";\n        for(var key in __data__) {\n            __str__+=("var " + key + "=__data__[\'" + key + "\'];");\n        }\n        eval(__str__);\n\n'+r+"\n        ;return __code__;\n    }(__data__, __modifierMap__));\n    return html;\n";t=t.replace(/[\r]/g," ");try{var o=new Function("__data__","__modifierMap__",t);return o.toString=function(){return r},o}catch(e){throw e.temp="function anonymous(__data__, __modifierMap__) {"+t+"}",e}}function g(e,o){o=l(n,o);try{var u=m(e,o)}catch(n){return n.name="CompileError",n.tpl=e,n.render=n.temp,delete n.temp,d(n)}function i(n){n=l(r,n);try{var i=u(n,t);return i=o.compress?s(i):i}catch(n){return n.name="RenderError",n.tpl=e,n.render=u.toString(),d(n)()}}return i.toString=function(){return u.toString()},i}function v(e,n){if("string"!=typeof e)return"";var r=g(e);return c(n)?r(n):r}return v.config=function(e){return c(e)&&(n=f(n,e)),l(n)},v.registerFunction=function(e,n){return _(e)?a(n)?r[e]=n:r[e]:l(r)},v.unregisterFunction=function(e){return!!_(e)&&(delete r[e],!0)},v.registerModifier=function(e,n){return _(e)?a(n)?t[e]=n:t[e]:l(t)},v.unregisterModifier=function(e){return!!_(e)&&(delete t[e],!0)},v.__encodeHTML=p,v.__compress=s,v.__handelError=d,v.__compile=g,v.version="0.7.1",v}();if("function"==typeof define&&define.amd)define("template",function(){return r});else if("object"===("undefined"==typeof exports?"undefined":_typeof(exports)))module.exports=r;else{var t=e.template;r.noConflict=function(){return e.template===r&&(e.template=t),r},e.template=r}}(void 0);