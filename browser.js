// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,s=/e\+(\d)$/,m=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,d=/(\..*[^0])0*e/;function w(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":c(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=p.call(n,d,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,s,"e+0$1"),n=p.call(n,m,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,g,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function b(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var x=String.fromCharCode,E=Array.isArray;function S(e){return e!=e}function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,n,i,a,c,l,f,p,s,m,y,g;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,f=0;f<e.length;f++)if("string"==typeof(n=e[f]))c+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,m=n.width,y=n.padRight,g=void 0,(g=m-s.length)<0?s:s=y?s+b(g):b(g)+s)),c+=n.arg||"",l+=1}return c}var _=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,o;for(t=[],o=0,n=_.exec(e);n;)(r=e.slice(o,_.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),o=_.lastIndex,n=_.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function O(e){var r,t;if("string"!=typeof e)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return j.apply(null,r)}var A,I=Object.prototype,N=I.toString,k=I.__defineGetter__,C=I.__defineSetter__,P=I.__lookupGetter__,$=I.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};var L=A;function R(e,r,t){L(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var B=/./;function M(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"boolean"==typeof e}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return Y&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString,U=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&U.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"",H=Z()?function(e){var r,t,n;if(null==e)return G.call(e);t=e[z],r=X(e,z);try{e[z]=void 0}catch(r){return G.call(e)}return n=G.call(e),r?e[z]=t:delete e[z],n}:function(e){return G.call(e)},J=Boolean,D=Boolean.prototype.toString,K=Z();function Q(e){return"object"==typeof e&&(e instanceof J||(K?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ee(e){return W(e)||Q(e)}M(ee,"isPrimitive",W),M(ee,"isObject",Q);var re="object"==typeof self?self:null,te="object"==typeof window?window:null,ne="object"==typeof globalThis?globalThis:null,oe=function(e){if(arguments.length){if(!W(e))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ne)return ne;if(re)return re;if(te)return te;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=oe.document&&oe.document.childNodes,ae=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var ce=/^\s*function\s*([^(]*)/i;M(ue,"REGEXP",ce);var le=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function fe(e){return null!==e&&"object"==typeof e}var pe=function(e){if("function"!=typeof e)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!le(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(fe);function se(e){var r,t,n,o;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ce.exec(n.toString()))return r[1]}return fe(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(fe,"isObjectLikeArray",pe);var me="function"==typeof B||"object"==typeof ae||"function"==typeof ie?function(e){return se(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?se(e).toLowerCase():r};function ye(e){return"function"===me(e)}function ge(e){return"number"==typeof e}var he=Number,ve=he.prototype.toString,de=Z();function we(e){return"object"==typeof e&&(e instanceof he||(de?function(e){try{return ve.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function be(e){return ge(e)||we(e)}M(be,"isPrimitive",ge),M(be,"isObject",we);var xe=Number.POSITIVE_INFINITY,Ee=he.NEGATIVE_INFINITY,Se=Math.floor;function Te(e){return Se(e)===e}function je(e){return e<xe&&e>Ee&&Te(e)}function _e(e){return ge(e)&&je(e)}function Fe(e){return we(e)&&je(e.valueOf())}function Ve(e){return _e(e)||Fe(e)}function Oe(e){return _e(e)&&e>=0}function Ae(e){return Fe(e)&&e.valueOf()>=0}function Ie(e){return Oe(e)||Ae(e)}M(Ve,"isPrimitive",_e),M(Ve,"isObject",Fe),M(Ie,"isPrimitive",Oe),M(Ie,"isObject",Ae);var Ne="number",ke="number",Ce={};R(Ce,"cast",(function(e,r,t){var n;if(!ye(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Oe(r))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!ye(t))throw new TypeError(O("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return n=[function(){var r=e();return typeof r===Ne?new t(r,0):r},function(r){var n=e(r);return typeof n===Ne?new t(n,0):n},function(r,n){var o=e(r,n);return typeof o===Ne?new t(o,0):o},function(r,n,o){var i=e(r,n,o);return typeof i===Ne?new t(i,0):i},function(r,n,o,i){var a=e(r,n,o,i);return typeof a===Ne?new t(a,0):a},function(r,n,o,i,a){var u=e(r,n,o,i,a);return typeof u===Ne?new t(u,0):u}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)r.push(arguments[o]);return typeof(n=e.apply(null,r))===Ne?new t(n,0):n}})),R(Ce,"wrap",(function(e,r,t){var n;if(!ye(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Oe(r))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!ye(t))throw new TypeError(O("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return n=[function(){return e()},function(r){return typeof r===ke&&(r=new t(r,0)),e(r)},function(r,n){return typeof r===ke&&(r=new t(r,0)),typeof n===ke&&(n=new t(n,0)),e(r,n)},function(r,n,o){return typeof r===ke&&(r=new t(r,0)),typeof n===ke&&(n=new t(n,0)),typeof o===ke&&(o=new t(o,0)),e(r,n,o)},function(r,n,o,i){return typeof r===ke&&(r=new t(r,0)),typeof n===ke&&(n=new t(n,0)),typeof o===ke&&(o=new t(o,0)),typeof i===ke&&(i=new t(i,0)),e(r,n,o,i)},function(r,n,o,i,a){return typeof r===ke&&(r=new t(r,0)),typeof n===ke&&(n=new t(n,0)),typeof o===ke&&(o=new t(o,0)),typeof i===ke&&(i=new t(i,0)),typeof a===ke&&(a=new t(a,0)),e(r,n,o,i,a)}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)typeof(n=arguments[o])===ke&&(n=new t(n,0)),r.push(n);return e.apply(null,r)}}));var Pe,$e="function"==typeof Math.fround?Math.fround:null,Le="function"==typeof Float32Array,Re="function"==typeof Float32Array?Float32Array:null,Be="function"==typeof Float32Array?Float32Array:void 0;Pe=function(){var e,r,t;if("function"!=typeof Re)return!1;try{r=new Re([1,3.14,-3.14,5e40]),t=r,e=(Le&&t instanceof Float32Array||"[object Float32Array]"===H(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===xe}catch(r){e=!1}return e}()?Be:function(){throw new Error("not implemented")};var Me=Pe,We=new Me(1),Ye="function"==typeof $e?$e:function(e){return We[0]=e,We[0]};function Ze(e,r){if(!(this instanceof Ze))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ge(e))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ge(r))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return L(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ye(e)}),L(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ye(r)}),this}function Ge(e,r){if(!(this instanceof Ge))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ge(e))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ge(r))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return L(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),L(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}M(Ze,"BYTES_PER_ELEMENT",4),M(Ze.prototype,"BYTES_PER_ELEMENT",4),M(Ze.prototype,"byteLength",8),M(Ze.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),M(Ze.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e})),M(Ge,"BYTES_PER_ELEMENT",8),M(Ge.prototype,"BYTES_PER_ELEMENT",8),M(Ge.prototype,"byteLength",16),M(Ge.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),M(Ge.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ue={complex64:Ze,complex128:Ge};function Xe(e){return Ue[e]||null}var qe={float64:"complex128",float32:"complex64"},ze=Xe(qe.float64),He={Complex64:"complex64",Complex128:"complex128"},Je=["complex64","complex128"];function De(){return Je.slice()}var Ke,Qe=De(),er=[];for(Ke=0;Ke<Qe.length;Ke++)er.push(Xe(Qe[Ke]));var rr=Qe.length;function tr(e){return e.re}function nr(e){return e.im}function or(e){var r=new Me(2);return r[0]=e.re,r[1]=e.im,r}function ir(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function ar(e,r){return e===r||e!=e&&r!=r}var ur={};R(ur,"isEqual",(function(e,r){var t=or(e),n=or(r);return t[0]===n[0]&&t[1]===n[1]})),R(ur,"isNotEqual",(function(e,r){var t=or(e),n=or(r);return t[0]!==n[0]||t[1]!==n[1]})),R(ur,"isSameValue",(function(e,r){var t=or(e),n=or(r);return ir(t[0],n[0])&&ir(t[1],n[1])})),R(ur,"isSameValueZero",(function(e,r){var t=or(e),n=or(r);return ar(t[0],n[0])&&ar(t[1],n[1])}));var cr={};function lr(e){return"string"==typeof e}R(cr,"add",(function(e,r){return new Ze(Ye(tr(e)+tr(r)),Ye(nr(e)+nr(r)))})),R(cr,"assert",ur),R(cr,"mul",(function(e,r){var t=tr(e),n=tr(r),o=nr(e),i=nr(r),a=Ye(t*n)-Ye(o*i),u=Ye(t*i)+Ye(o*n);return new Ze(Ye(a),Ye(u))}));var fr=String.prototype.valueOf,pr=Z();function sr(e){return"object"==typeof e&&(e instanceof String||(pr?function(e){try{return fr.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function mr(e){return lr(e)||sr(e)}function yr(e,r,t){return e.replace(r,t)}M(mr,"isPrimitive",lr),M(mr,"isObject",sr);var gr={};function hr(e){return e.re}function vr(e){return e.im}R(gr,"base",cr),R(gr,"conj",(function(e){return new e.constructor(e.re,-e.im)})),R(gr,"Complex64",Ze),R(gr,"imag",nr),R(gr,"parseComplex64",(function(e){var r,t,n=0;if(!lr(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));if(!(r=yr(e,/\s/g,"").match(/^([-+]?(\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i?)?([-+])?((\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i)?$/)))throw new Error(O("invalid argument. Unable to parse input string as a complex number. Value: `%s`.",e));return t=r[1]&&!r[1].endsWith("i")?parseFloat(r[1]):0,r[4]?n=("-"===r[3]?-1:1)*parseFloat(yr(r[4],/i$/,"")):r[1]&&r[1].endsWith("i")&&(n=parseFloat(yr(r[1],/i$/,""))),new Ze(t,n)})),R(gr,"real",tr),R(gr,"reim",or),R(gr,"reviveComplex64",(function(e,r){return r&&r.type&&"Complex64"===r.type&&ge(r.re)&&ge(r.im)?new Ze(r.re,r.im):r}));var dr,wr="function"==typeof Float64Array,br="function"==typeof Float64Array?Float64Array:null,xr="function"==typeof Float64Array?Float64Array:void 0;dr=function(){var e,r,t;if("function"!=typeof br)return!1;try{r=new br([1,3.14,-3.14,NaN]),t=r,e=(wr&&t instanceof Float64Array||"[object Float64Array]"===H(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?xr:function(){throw new Error("not implemented")};var Er=dr;function Sr(e){var r=new Er(2);return r[0]=e.re,r[1]=e.im,r}function Tr(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function jr(e,r){return e===r||e!=e&&r!=r}var _r={};R(_r,"isEqual",(function(e,r){var t=Sr(e),n=Sr(r);return t[0]===n[0]&&t[1]===n[1]})),R(_r,"isNotEqual",(function(e,r){var t=Sr(e),n=Sr(r);return t[0]!==n[0]||t[1]!==n[1]})),R(_r,"isSameValue",(function(e,r){var t=Sr(e),n=Sr(r);return Tr(t[0],n[0])&&Tr(t[1],n[1])})),R(_r,"isSameValueZero",(function(e,r){var t=Sr(e),n=Sr(r);return jr(t[0],n[0])&&jr(t[1],n[1])}));var Fr={};R(Fr,"add",(function(e,r){return new Ge(hr(e)+hr(r),vr(e)+vr(r))})),R(Fr,"assert",_r),R(Fr,"mul",(function(e,r){var t=hr(e),n=hr(r),o=vr(e),i=vr(r);return new Ge(t*n-o*i,t*i+o*n)}));var Vr={};function Or(e){return Object.keys(Object(e))}R(Vr,"base",Fr),R(Vr,"conj",(function(e){return new e.constructor(e.re,-e.im)})),R(Vr,"Complex128",Ge),R(Vr,"imag",vr),R(Vr,"parseComplex128",(function(e){var r,t,n=0;if(!lr(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));if(!(r=yr(e,/\s/g,"").match(/^([-+]?(\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i?)?([-+])?((\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i)?$/)))throw new Error(O("invalid argument. Unable to parse input string as a complex number. Value: `%s`.",e));return t=r[1]&&!r[1].endsWith("i")?parseFloat(r[1]):0,r[4]?n=("-"===r[3]?-1:1)*parseFloat(yr(r[4],/i$/,"")):r[1]&&r[1].endsWith("i")&&(n=parseFloat(yr(r[1],/i$/,""))),new Ge(t,n)})),R(Vr,"real",hr),R(Vr,"reim",Sr),R(Vr,"reviveComplex128",(function(e,r){return r&&r.type&&"Complex128"===r.type&&ge(r.re)&&ge(r.im)?new Ge(r.re,r.im):r}));var Ar,Ir=void 0!==Object.keys;function Nr(e){return"[object Arguments]"===H(e)}Ar=function(){return Nr(arguments)}();var kr=Ar;function Cr(e){return e!=e}function Pr(e){return ge(e)&&Cr(e)}function $r(e){return we(e)&&Cr(e.valueOf())}function Lr(e){return Pr(e)||$r(e)}M(Lr,"isPrimitive",Pr),M(Lr,"isObject",$r);var Rr=Object.prototype.propertyIsEnumerable,Br=!Rr.call("beep","0");function Mr(e,r){var t;return null!=e&&(!(t=Rr.call(e,r))&&Br&&mr(e)?!Pr(r=+r)&&_e(r)&&r>=0&&r<e.length:t)}var Wr=kr?Nr:function(e){return null!==e&&"object"==typeof e&&!le(e)&&"number"==typeof e.length&&Te(e.length)&&e.length>=0&&e.length<=4294967295&&X(e,"callee")&&!Mr(e,"callee")},Yr=Array.prototype.slice,Zr=Mr((function(){}),"prototype"),Gr=!Mr({toString:null},"toString"),Ur=9007199254740991;function Xr(e,r,t){var n,o,i;if(!("object"==typeof(i=e)&&null!==i&&"number"==typeof i.length&&Te(i.length)&&i.length>=0&&i.length<=Ur||lr(e)))throw new TypeError(O("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!_e(t))throw new TypeError(O("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Lr(r)){for(;o<n;o++)if(Lr(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}function qr(e){return e.constructor&&e.constructor.prototype===e}var zr,Hr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Jr="undefined"==typeof window?void 0:window,Dr=function(){var e;if("undefined"===me(Jr))return!1;for(e in Jr)try{-1===Xr(Hr,e)&&X(Jr,e)&&null!==Jr[e]&&"object"===me(Jr[e])&&qr(Jr[e])}catch(e){return!0}return!1}(),Kr="undefined"!=typeof window,Qr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];zr=Ir?function(){return 2!==(Or(arguments)||"").length}(1,2)?function(e){return Wr(e)?Or(Yr.call(e)):Or(e)}:Or:function(e){var r,t,n,o,i,a,u;if(o=[],Wr(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!X(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(0==(n="function"==typeof e)&&!fe(e))return o;t=Zr&&n}for(i in e)t&&"prototype"===i||!X(e,i)||o.push(String(i));if(Gr)for(r=function(e){if(!1===Kr&&!Dr)return qr(e);try{return qr(e)}catch(e){return!1}}(e),u=0;u<Qr.length;u++)a=Qr[u],r&&"constructor"===a||!X(e,a)||o.push(String(a));return o};var et=zr,rt={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}},tt={Complex128:Ge,Complex64:Ze},nt={};return R(nt,"base",Ce),R(nt,"complex",(function(e,r,t){var n;if(arguments.length>2){if(n=Xe(qe[t]))return new n(e,r);throw new TypeError(O("invalid argument. Must provide a recognized data type. Value: `%s`.",t))}return new ze(e,r)})),R(nt,"ctors",Xe),R(nt,"dtype",(function(e){var r;for(r=0;r<rr;r++)if(e instanceof er[r])return Qe[r];return He[se(e)]||null})),R(nt,"dtypes",De),R(nt,"float32",gr),R(nt,"float64",Vr),R(nt,"promotionRules",(function(e,r){var t;return 0===arguments.length?function(){var e,r,t,n,o,i,a,u,c;for(t={},r=(e=et(rt)).length,c=0;c<r;c++){for(o=e[c],a=rt[o],n={},u=0;u<r;u++)n[i=e[u]]=a[i];t[o]=n}return t}():X(rt,e)&&X(t=rt[e],r)?t[r]:null})),R(nt,"reviveComplex",(function(e,r){var t;return r&&r.type&&ge(r.re)&&ge(r.im)&&(t=tt[r.type])?new t(r.re,r.im):r})),nt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r();
//# sourceMappingURL=browser.js.map
