(function(e){function t(t){for(var n,u,a=t[0],i=t[1],l=t[2],f=0,b=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&b.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},c=[];function u(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"98528454"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=u(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",l.name="ChunkLoadError",l.type=n,l.request=c,r[1](l)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var s=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={id:"nav"},c=Object(n["e"])("Home"),u=Object(n["e"])(" | "),a=Object(n["e"])("About");function i(e,t){var r=Object(n["s"])("router-link"),i=Object(n["s"])("router-view");return Object(n["o"])(),Object(n["d"])(n["a"],null,[Object(n["f"])("div",o,[Object(n["f"])(r,{to:"/"},{default:Object(n["w"])((function(){return[c]})),_:1}),u,Object(n["f"])(r,{to:"/about"},{default:Object(n["w"])((function(){return[a]})),_:1})]),Object(n["f"])(i)],64)}const l={};l.render=i;var f=l,s=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),b={class:"home"};function d(e,t,r,o,c,u){var a=Object(n["s"])("HelloWorld");return Object(n["o"])(),Object(n["d"])("div",b,[Object(n["f"])(a)])}var p=Object(n["x"])("data-v-5a6214ae"),v=p((function(e,t,r,o,c,u){return Object(n["o"])(),Object(n["d"])("h1",null,"hello")})),j=Object(n["g"])({});j.render=v,j.__scopeId="data-v-5a6214ae";var O=j,h=Object(n["g"])({name:"Home",components:{HelloWorld:O}});h.render=d;var m=h,y=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],g=Object(s["a"])({history:Object(s["b"])(""),routes:y}),w=g;Object(n["c"])(f).use(w).mount("#app")}});
//# sourceMappingURL=app.3c584944.js.map