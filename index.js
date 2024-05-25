// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,s=/e\+(\d)$/,m=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":c(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,s,"e+0$1"),n=p.call(n,m,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,g,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function d(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var x=String.fromCharCode,E=Array.isArray;function S(e){return e!=e}function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,i,a,c,l,f,p,s,m,y,g;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,f=0;f<e.length;f++)if(n=e[f],"string"==typeof n)c+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,m=n.width,y=n.padRight,g=void 0,(g=m-s.length)<0?s:s=y?s+d(g):d(g)+s)),c+=n.arg||"",l+=1}return c}var _=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,o;for(t=[],o=0,n=_.exec(e);n;)(r=e.slice(o,_.lastIndex-n[0].length)).length&&t.push(r),t.push(O(n)),o=_.lastIndex,n=_.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function A(e){var r,t;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var F,k=Object.prototype,C=k.toString,I=k.__defineGetter__,P=k.__defineSetter__,N=k.__lookupGetter__,L=k.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(N.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=k,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(e,r,t.get),a&&P&&P.call(e,r,t.set),e};var R=F;function B(e,r,t){R(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function $(){return M&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;function G(e,r){return null!=e&&Z.call(e,r)}var W="function"==typeof Symbol?Symbol:void 0,X="function"==typeof W?W.toStringTag:"";var q=$()?function(e){var r,t,n;if(null==e)return Y.call(e);t=e[X],r=G(e,X);try{e[X]=void 0}catch(r){return Y.call(e)}return n=Y.call(e),r?e[X]=t:delete e[X],n}:function(e){return Y.call(e)},D="function"==typeof Float64Array;var U="function"==typeof Float64Array?Float64Array:null;var z,H="function"==typeof Float64Array?Float64Array:void 0;z=function(){var e,r,t;if("function"!=typeof U)return!1;try{r=new U([1,3.14,-3.14,NaN]),t=r,e=(D&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?H:function(){throw new Error("not implemented")};var J=z;function K(e){var r=new J(2);return r[0]=e.re,r[1]=e.im,r}var Q="function"==typeof Float32Array;var ee=Number.POSITIVE_INFINITY,re="function"==typeof Float32Array?Float32Array:null;var te,ne="function"==typeof Float32Array?Float32Array:void 0;te=function(){var e,r,t;if("function"!=typeof re)return!1;try{r=new re([1,3.14,-3.14,5e40]),t=r,e=(Q&&t instanceof Float32Array||"[object Float32Array]"===q(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ee}catch(r){e=!1}return e}()?ne:function(){throw new Error("not implemented")};var oe=te;function ie(e){var r=new oe(2);return r[0]=e.re,r[1]=e.im,r}function ae(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function ue(e,r){return e===r||e!=e&&r!=r}function ce(e,r){return e===r||e!=e&&r!=r}function le(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}var fe={};B(fe,"isEqual",(function(e,r){var t=K(e),n=K(r);return t[0]===n[0]&&t[1]===n[1]})),B(fe,"isEqualf",(function(e,r){var t=ie(e),n=ie(r);return t[0]===n[0]&&t[1]===n[1]})),B(fe,"isNotEqual",(function(e,r){var t=K(e),n=K(r);return t[0]!==n[0]||t[1]!==n[1]})),B(fe,"isNotEqualf",(function(e,r){var t=ie(e),n=ie(r);return t[0]!==n[0]||t[1]!==n[1]})),B(fe,"isSameValue",(function(e,r){var t=K(e),n=K(r);return ae(t[0],n[0])&&ae(t[1],n[1])})),B(fe,"isSameValueZero",(function(e,r){var t=K(e),n=K(r);return ue(t[0],n[0])&&ue(t[1],n[1])})),B(fe,"isSameValueZerof",(function(e,r){var t=ie(e),n=ie(r);return ce(t[0],n[0])&&ce(t[1],n[1])})),B(fe,"isSameValuef",(function(e,r){var t=ie(e),n=ie(r);return le(t[0],n[0])&&le(t[1],n[1])}));var pe=/./;function se(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function me(e){return"boolean"==typeof e}var ye=Boolean,ge=Boolean.prototype.toString;var ve=$();function he(e){return"object"==typeof e&&(e instanceof ye||(ve?function(e){try{return ge.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function we(e){return me(e)||he(e)}se(we,"isPrimitive",me),se(we,"isObject",he);var be="object"==typeof self?self:null,de="object"==typeof window?window:null,xe="object"==typeof global?global:null,Ee="object"==typeof globalThis?globalThis:null;var Se=function(e){if(arguments.length){if(!me(e))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(Ee)return Ee;if(be)return be;if(de)return de;if(xe)return xe;throw new Error("unexpected error. Unable to resolve global object.")}(),je=Se.document&&Se.document.childNodes,Te=Int8Array;function _e(){return/^\s*function\s*([^(]*)/i}var Oe=/^\s*function\s*([^(]*)/i;se(_e,"REGEXP",Oe);var Ve=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)};function Ae(e){return null!==e&&"object"==typeof e}function Fe(e){var r,t,n,o;if(("Object"===(t=q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Oe.exec(n.toString()))return r[1]}return Ae(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}se(Ae,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ve(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ae));var ke="function"==typeof pe||"object"==typeof Te||"function"==typeof je?function(e){return Fe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Fe(e).toLowerCase():r};function Ce(e){return"function"===ke(e)}function Ie(e){return"number"==typeof e}var Pe=Number,Ne=Pe.prototype.toString;var Le=$();function Re(e){return"object"==typeof e&&(e instanceof Pe||(Le?function(e){try{return Ne.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function Be(e){return Ie(e)||Re(e)}se(Be,"isPrimitive",Ie),se(Be,"isObject",Re);var Me=Pe.NEGATIVE_INFINITY,$e=Math.floor;function Ye(e){return $e(e)===e}function Ze(e){return e<ee&&e>Me&&Ye(e)}function Ge(e){return Ie(e)&&Ze(e)}function We(e){return Re(e)&&Ze(e.valueOf())}function Xe(e){return Ge(e)||We(e)}function qe(e){return Ge(e)&&e>=0}function De(e){return We(e)&&e.valueOf()>=0}function Ue(e){return qe(e)||De(e)}se(Xe,"isPrimitive",Ge),se(Xe,"isObject",We),se(Ue,"isPrimitive",qe),se(Ue,"isObject",De);var ze="number";var He="number";var Je={};function Ke(e,r){if(!(this instanceof Ke))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ie(e))throw new TypeError(A("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ie(r))throw new TypeError(A("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return R(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),R(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}B(Je,"assert",fe),B(Je,"cast",(function(e,r,t){var n;if(!Ce(e))throw new TypeError(A("invalid argument. First argument must be a function. Value: `%s`.",e));if(!qe(r))throw new TypeError(A("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!Ce(t))throw new TypeError(A("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return n=[function(){var r=e();if(typeof r===ze)return new t(r,0);return r},function(r){var n=e(r);if(typeof n===ze)return new t(n,0);return n},function(r,n){var o=e(r,n);if(typeof o===ze)return new t(o,0);return o},function(r,n,o){var i=e(r,n,o);if(typeof i===ze)return new t(i,0);return i},function(r,n,o,i){var a=e(r,n,o,i);if(typeof a===ze)return new t(a,0);return a},function(r,n,o,i,a){var u=e(r,n,o,i,a);if(typeof u===ze)return new t(u,0);return u}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)r.push(arguments[o]);if(typeof(n=e.apply(null,r))===ze)return new t(n,0);return n}})),B(Je,"wrap",(function(e,r,t){var n;if(!Ce(e))throw new TypeError(A("invalid argument. First argument must be a function. Value: `%s`.",e));if(!qe(r))throw new TypeError(A("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!Ce(t))throw new TypeError(A("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return n=[function(){return e()},function(r){typeof r===He&&(r=new t(r,0));return e(r)},function(r,n){typeof r===He&&(r=new t(r,0));typeof n===He&&(n=new t(n,0));return e(r,n)},function(r,n,o){typeof r===He&&(r=new t(r,0));typeof n===He&&(n=new t(n,0));typeof o===He&&(o=new t(o,0));return e(r,n,o)},function(r,n,o,i){typeof r===He&&(r=new t(r,0));typeof n===He&&(n=new t(n,0));typeof o===He&&(o=new t(o,0));typeof i===He&&(i=new t(i,0));return e(r,n,o,i)},function(r,n,o,i,a){typeof r===He&&(r=new t(r,0));typeof n===He&&(n=new t(n,0));typeof o===He&&(o=new t(o,0));typeof i===He&&(i=new t(i,0));typeof a===He&&(a=new t(a,0));return e(r,n,o,i,a)}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)typeof(n=arguments[o])===He&&(n=new t(n,0)),r.push(n);return e.apply(null,r)}})),se(Ke,"BYTES_PER_ELEMENT",8),se(Ke.prototype,"BYTES_PER_ELEMENT",8),se(Ke.prototype,"byteLength",16),se(Ke.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),se(Ke.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Qe="function"==typeof Math.fround?Math.fround:null,er=new oe(1);var rr="function"==typeof Qe?Qe:function(e){return er[0]=e,er[0]};function tr(e,r){if(!(this instanceof tr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ie(e))throw new TypeError(A("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ie(r))throw new TypeError(A("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return R(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:rr(e)}),R(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:rr(r)}),this}se(tr,"BYTES_PER_ELEMENT",4),se(tr.prototype,"BYTES_PER_ELEMENT",4),se(tr.prototype,"byteLength",8),se(tr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),se(tr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var nr={float64:Ke,float32:tr};var or={complex64:tr,complex128:Ke};var ir={Complex64:"complex64",Complex128:"complex128"},ar=[tr,Ke],ur=["complex64","complex128"],cr=ur.length;var lr=["complex64","complex128"];function fr(e){return Object.keys(Object(e))}var pr,sr=void 0!==Object.keys;function mr(e){return"[object Arguments]"===q(e)}pr=function(){return mr(arguments)}();var yr=pr;function gr(e){return"string"==typeof e}var vr=String.prototype.valueOf;var hr=$();function wr(e){return"object"==typeof e&&(e instanceof String||(hr?function(e){try{return vr.call(e),!0}catch(e){return!1}}(e):"[object String]"===q(e)))}function br(e){return gr(e)||wr(e)}function dr(e){return e!=e}function xr(e){return Ie(e)&&dr(e)}function Er(e){return Re(e)&&dr(e.valueOf())}function Sr(e){return xr(e)||Er(e)}se(br,"isPrimitive",gr),se(br,"isObject",wr),se(Sr,"isPrimitive",xr),se(Sr,"isObject",Er);var jr=Object.prototype.propertyIsEnumerable;var Tr=!jr.call("beep","0");function _r(e,r){var t;return null!=e&&(!(t=jr.call(e,r))&&Tr&&br(e)?!xr(r=+r)&&Ge(r)&&r>=0&&r<e.length:t)}var Or=yr?mr:function(e){return null!==e&&"object"==typeof e&&!Ve(e)&&"number"==typeof e.length&&Ye(e.length)&&e.length>=0&&e.length<=4294967295&&G(e,"callee")&&!_r(e,"callee")},Vr=Array.prototype.slice;var Ar=_r((function(){}),"prototype"),Fr=!_r({toString:null},"toString"),kr=9007199254740991;function Cr(e,r,t){var n,o,i;if(!(i=e,"object"==typeof i&&null!==i&&"number"==typeof i.length&&Ye(i.length)&&i.length>=0&&i.length<=kr||gr(e)))throw new TypeError(A("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Ge(t))throw new TypeError(A("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Sr(r)){for(;o<n;o++)if(Sr(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}function Ir(e){return e.constructor&&e.constructor.prototype===e}var Pr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Nr="undefined"==typeof window?void 0:window;var Lr=function(){var e;if("undefined"===ke(Nr))return!1;for(e in Nr)try{-1===Cr(Pr,e)&&G(Nr,e)&&null!==Nr[e]&&"object"===ke(Nr[e])&&Ir(Nr[e])}catch(e){return!0}return!1}(),Rr="undefined"!=typeof window;var Br,Mr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Br=sr?function(){return 2!==(fr(arguments)||"").length}(1,2)?function(e){return Or(e)?fr(Vr.call(e)):fr(e)}:fr:function(e){var r,t,n,o,i,a,u;if(o=[],Or(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!G(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!Ae(e))return o;t=Ar&&n}for(i in e)t&&"prototype"===i||!G(e,i)||o.push(String(i));if(Fr)for(r=function(e){if(!1===Rr&&!Lr)return Ir(e);try{return Ir(e)}catch(e){return!1}}(e),u=0;u<Mr.length;u++)a=Mr[u],r&&"constructor"===a||!G(e,a)||o.push(String(a));return o};var $r=Br,Yr={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}};var Zr={Complex128:Ke,Complex64:tr};var Gr={};return B(Gr,"base",Je),B(Gr,"complex",(function(e,r,t){var n;if(arguments.length>2){if(n=nr[t])return new n(e,r);throw new TypeError(A("invalid argument. Must provide a recognized data type. Value: `%s`.",t))}return new nr.float64(e,r)})),B(Gr,"conj",(function(e){return new e.constructor(e.re,-e.im)})),B(Gr,"conjf",(function(e){return new e.constructor(e.re,-e.im)})),B(Gr,"complexCtors",(function(e){return or[e]||null})),B(Gr,"complexDataType",(function(e){var r;for(r=0;r<cr;r++)if(e instanceof ar[r])return ur[r];return ir[Fe(e)]||null})),B(Gr,"complexDataTypes",(function(){return lr.slice()})),B(Gr,"Complex64",tr),B(Gr,"Complex128",Ke),B(Gr,"imag",(function(e){return e.im})),B(Gr,"imagf",(function(e){return e.im})),B(Gr,"complexPromotionRules",(function(e,r){var t;return 0===arguments.length?function(){var e,r,t,n,o,i,a,u,c;for(t={},r=(e=$r(Yr)).length,c=0;c<r;c++){for(o=e[c],a=Yr[o],n={},u=0;u<r;u++)n[i=e[u]]=a[i];t[o]=n}return t}():G(Yr,e)&&G(t=Yr[e],r)?t[r]:null})),B(Gr,"real",(function(e){return e.re})),B(Gr,"realf",(function(e){return e.re})),B(Gr,"reim",K),B(Gr,"reimf",ie),B(Gr,"reviveComplex",(function(e,r){var t;return r&&r.type&&Ie(r.re)&&Ie(r.im)&&(t=Zr[r.type])?new t(r.re,r.im):r})),B(Gr,"reviveComplex64",(function(e,r){return r&&r.type&&"Complex64"===r.type&&Ie(r.re)&&Ie(r.im)?new tr(r.re,r.im):r})),B(Gr,"reviveComplex128",(function(e,r){return r&&r.type&&"Complex128"===r.type&&Ie(r.re)&&Ie(r.im)?new Ke(r.re,r.im):r})),Gr}));
//# sourceMappingURL=index.js.map
