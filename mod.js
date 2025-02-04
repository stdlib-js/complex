// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,s=/e\+(\d)$/,m=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,v=/\.0$/,d=/\.0*e/,h=/(\..*[^0])0*e/;function w(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":c(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=p.call(n,h,"$1e"),n=p.call(n,d,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,s,"e+0$1"),n=p.call(n,m,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,g,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function b(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var x=String.fromCharCode,E=Array.isArray;function S(e){return e!=e}function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,i,a,c,l,f,p,s,m,y,g;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,f=0;f<e.length;f++)if(n=e[f],"string"==typeof n)c+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,m=n.width,y=n.padRight,g=void 0,(g=m-s.length)<0?s:s=y?s+b(g):b(g)+s)),c+=n.arg||"",l+=1}return c}var _=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,o;for(t=[],o=0,n=_.exec(e);n;)(r=e.slice(o,_.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),o=_.lastIndex,n=_.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function O(e){var r,t;if("string"!=typeof e)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var A,I=Object.prototype,N=I.toString,k=I.__defineGetter__,C=I.__defineSetter__,P=I.__lookupGetter__,$=I.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};var L=A;function R(e,r,t){L(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var B=/./;function M(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"boolean"==typeof e}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return Y&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&U.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"";var H=Z()?function(e){var r,t,n;if(null==e)return G.call(e);t=e[z],r=X(e,z);try{e[z]=void 0}catch(r){return G.call(e)}return n=G.call(e),r?e[z]=t:delete e[z],n}:function(e){return G.call(e)},J=Boolean,D=Boolean.prototype.toString;var K=Z();function Q(e){return"object"==typeof e&&(e instanceof J||(K?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ee(e){return W(e)||Q(e)}M(ee,"isPrimitive",W),M(ee,"isObject",Q);var re="object"==typeof self?self:null,te="object"==typeof window?window:null,ne="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},oe="object"==typeof ne?ne:null,ie="object"==typeof globalThis?globalThis:null;var ae=function(e){if(arguments.length){if(!W(e))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ie)return ie;if(re)return re;if(te)return te;if(oe)return oe;throw new Error("unexpected error. Unable to resolve global object.")}(),ue=ae.document&&ae.document.childNodes,ce=Int8Array;function le(){return/^\s*function\s*([^(]*)/i}var fe=/^\s*function\s*([^(]*)/i;M(le,"REGEXP",fe);var pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function se(e){return null!==e&&"object"==typeof e}var me=function(e){if("function"!=typeof e)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!pe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(se);function ye(e){var r,t,n,o;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=fe.exec(n.toString()))return r[1]}return se(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(se,"isObjectLikeArray",me);var ge="function"==typeof B||"object"==typeof ce||"function"==typeof ue?function(e){return ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ye(e).toLowerCase():r};function ve(e){return"function"===ge(e)}function de(e){return"number"==typeof e}var he=Number,we=he.prototype.toString;var be=Z();function xe(e){return"object"==typeof e&&(e instanceof he||(be?function(e){try{return we.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function Ee(e){return de(e)||xe(e)}M(Ee,"isPrimitive",de),M(Ee,"isObject",xe);var Se=Number.POSITIVE_INFINITY,je=he.NEGATIVE_INFINITY,Te=Math.floor;function _e(e){return Te(e)===e}function Fe(e){return e<Se&&e>je&&_e(e)}function Ve(e){return de(e)&&Fe(e)}function Oe(e){return xe(e)&&Fe(e.valueOf())}function Ae(e){return Ve(e)||Oe(e)}function Ie(e){return Ve(e)&&e>=0}function Ne(e){return Oe(e)&&e.valueOf()>=0}function ke(e){return Ie(e)||Ne(e)}M(Ae,"isPrimitive",Ve),M(Ae,"isObject",Oe),M(ke,"isPrimitive",Ie),M(ke,"isObject",Ne);var Ce="number";var Pe="number";var $e={};R($e,"cast",(function(e,r,t){var n;if(!ve(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Ie(r))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!ve(t))throw new TypeError(O("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return n=[function(){var r=e();if(typeof r===Ce)return new t(r,0);return r},function(r){var n=e(r);if(typeof n===Ce)return new t(n,0);return n},function(r,n){var o=e(r,n);if(typeof o===Ce)return new t(o,0);return o},function(r,n,o){var i=e(r,n,o);if(typeof i===Ce)return new t(i,0);return i},function(r,n,o,i){var a=e(r,n,o,i);if(typeof a===Ce)return new t(a,0);return a},function(r,n,o,i,a){var u=e(r,n,o,i,a);if(typeof u===Ce)return new t(u,0);return u}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)r.push(arguments[o]);if(typeof(n=e.apply(null,r))===Ce)return new t(n,0);return n}})),R($e,"wrap",(function(e,r,t){var n;if(!ve(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Ie(r))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!ve(t))throw new TypeError(O("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return n=[function(){return e()},function(r){typeof r===Pe&&(r=new t(r,0));return e(r)},function(r,n){typeof r===Pe&&(r=new t(r,0));typeof n===Pe&&(n=new t(n,0));return e(r,n)},function(r,n,o){typeof r===Pe&&(r=new t(r,0));typeof n===Pe&&(n=new t(n,0));typeof o===Pe&&(o=new t(o,0));return e(r,n,o)},function(r,n,o,i){typeof r===Pe&&(r=new t(r,0));typeof n===Pe&&(n=new t(n,0));typeof o===Pe&&(o=new t(o,0));typeof i===Pe&&(i=new t(i,0));return e(r,n,o,i)},function(r,n,o,i,a){typeof r===Pe&&(r=new t(r,0));typeof n===Pe&&(n=new t(n,0));typeof o===Pe&&(o=new t(o,0));typeof i===Pe&&(i=new t(i,0));typeof a===Pe&&(a=new t(a,0));return e(r,n,o,i,a)}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)typeof(n=arguments[o])===Pe&&(n=new t(n,0)),r.push(n);return e.apply(null,r)}}));var Le="function"==typeof Math.fround?Math.fround:null,Re="function"==typeof Float32Array;var Be="function"==typeof Float32Array?Float32Array:null;var Me,We="function"==typeof Float32Array?Float32Array:void 0;Me=function(){var e,r,t;if("function"!=typeof Be)return!1;try{r=new Be([1,3.14,-3.14,5e40]),t=r,e=(Re&&t instanceof Float32Array||"[object Float32Array]"===H(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Se}catch(r){e=!1}return e}()?We:function(){throw new Error("not implemented")};var Ye=Me,Ze=new Ye(1);var Ge="function"==typeof Le?Le:function(e){return Ze[0]=e,Ze[0]};function Ue(e,r){if(!(this instanceof Ue))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!de(e))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",e));if(!de(r))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return L(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ge(e)}),L(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ge(r)}),this}function Xe(e,r){if(!(this instanceof Xe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!de(e))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",e));if(!de(r))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return L(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),L(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}M(Ue,"BYTES_PER_ELEMENT",4),M(Ue.prototype,"BYTES_PER_ELEMENT",4),M(Ue.prototype,"byteLength",8),M(Ue.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),M(Ue.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e})),M(Xe,"BYTES_PER_ELEMENT",8),M(Xe.prototype,"BYTES_PER_ELEMENT",8),M(Xe.prototype,"byteLength",16),M(Xe.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),M(Xe.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var qe={complex64:Ue,complex128:Xe};function ze(e){return qe[e]||null}var He={float64:"complex128",float32:"complex64"},Je=ze(He.float64);function De(e,r,t){var n;if(arguments.length>2){if(n=ze(He[t]))return new n(e,r);throw new TypeError(O("invalid argument. Must provide a recognized data type. Value: `%s`.",t))}return new Je(e,r)}var Ke={Complex64:"complex64",Complex128:"complex128"},Qe=["complex64","complex128"];function er(){return Qe.slice()}var rr,tr=er(),nr=[];for(rr=0;rr<tr.length;rr++)nr.push(ze(tr[rr]));var or=tr.length;function ir(e){var r;for(r=0;r<or;r++)if(e instanceof nr[r])return tr[r];return Ke[ye(e)]||null}function ar(e){return e.re}function ur(e){return e.im}function cr(e){var r=new Ye(2);return r[0]=e.re,r[1]=e.im,r}function lr(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function fr(e,r){return e===r||e!=e&&r!=r}var pr={};R(pr,"isEqual",(function(e,r){var t=cr(e),n=cr(r);return t[0]===n[0]&&t[1]===n[1]})),R(pr,"isNotEqual",(function(e,r){var t=cr(e),n=cr(r);return t[0]!==n[0]||t[1]!==n[1]})),R(pr,"isSameValue",(function(e,r){var t=cr(e),n=cr(r);return lr(t[0],n[0])&&lr(t[1],n[1])})),R(pr,"isSameValueZero",(function(e,r){var t=cr(e),n=cr(r);return fr(t[0],n[0])&&fr(t[1],n[1])}));var sr={};function mr(e){return"string"==typeof e}R(sr,"add",(function(e,r){return new Ue(Ge(ar(e)+ar(r)),Ge(ur(e)+ur(r)))})),R(sr,"assert",pr),R(sr,"mul",(function(e,r){var t=ar(e),n=ar(r),o=ur(e),i=ur(r),a=Ge(t*n)-Ge(o*i),u=Ge(t*i)+Ge(o*n);return new Ue(Ge(a),Ge(u))}));var yr=String.prototype.valueOf;var gr=Z();function vr(e){return"object"==typeof e&&(e instanceof String||(gr?function(e){try{return yr.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function dr(e){return mr(e)||vr(e)}function hr(e,r,t){return e.replace(r,t)}M(dr,"isPrimitive",mr),M(dr,"isObject",vr);var wr={};function br(e){return e.re}function xr(e){return e.im}function Er(e,r){return new Xe(br(e)+br(r),xr(e)+xr(r))}R(wr,"base",sr),R(wr,"conj",(function(e){return new e.constructor(e.re,-e.im)})),R(wr,"Complex64",Ue),R(wr,"imag",ur),R(wr,"parseComplex64",(function(e){var r,t,n=0;if(!mr(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));if(!(r=hr(e,/\s/g,"").match(/^([-+]?(\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i?)?([-+])?((\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i)?$/)))throw new Error(O("invalid argument. Unable to parse input string as a complex number. Value: `%s`.",e));return t=r[1]&&!r[1].endsWith("i")?parseFloat(r[1]):0,r[4]?n=("-"===r[3]?-1:1)*parseFloat(hr(r[4],/i$/,"")):r[1]&&r[1].endsWith("i")&&(n=parseFloat(hr(r[1],/i$/,""))),new Ue(t,n)})),R(wr,"real",ar),R(wr,"reim",cr),R(wr,"reviveComplex64",(function(e,r){return r&&r.type&&"Complex64"===r.type&&de(r.re)&&de(r.im)?new Ue(r.re,r.im):r})),M(Er,"assign",(function(e,r,t,n,o,i,a){return o[a]=e+t,o[a+i]=r+n,o})),M(Er,"strided",(function(e,r,t,n,o,i,a,u,c){return a[c]=e[t]+n[i],a[c+u]=e[t+r]+n[i+o],a}));var Sr="function"==typeof Float64Array;var jr="function"==typeof Float64Array?Float64Array:null;var Tr,_r="function"==typeof Float64Array?Float64Array:void 0;Tr=function(){var e,r,t;if("function"!=typeof jr)return!1;try{r=new jr([1,3.14,-3.14,NaN]),t=r,e=(Sr&&t instanceof Float64Array||"[object Float64Array]"===H(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?_r:function(){throw new Error("not implemented")};var Fr=Tr;function Vr(e){var r=new Fr(2);return r[0]=e.re,r[1]=e.im,r}function Or(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function Ar(e,r){return e===r||e!=e&&r!=r}var Ir={};function Nr(e,r){var t=br(e),n=br(r),o=xr(e),i=xr(r);return new Xe(t*n-o*i,t*i+o*n)}function kr(e,r,t){var n=br(e),o=xr(e),i=br(r),a=xr(r);return new Xe(n*i-o*a+br(t),n*a+o*i+xr(t))}function Cr(e,r){return new Xe(br(r)*e,xr(r)*e)}R(Ir,"isEqual",(function(e,r){var t=Vr(e),n=Vr(r);return t[0]===n[0]&&t[1]===n[1]})),R(Ir,"isNotEqual",(function(e,r){var t=Vr(e),n=Vr(r);return t[0]!==n[0]||t[1]!==n[1]})),R(Ir,"isSameValue",(function(e,r){var t=Vr(e),n=Vr(r);return Or(t[0],n[0])&&Or(t[1],n[1])})),R(Ir,"isSameValueZero",(function(e,r){var t=Vr(e),n=Vr(r);return Ar(t[0],n[0])&&Ar(t[1],n[1])})),M(Nr,"assign",(function(e,r,t,n,o,i,a){return o[a]=e*t-r*n,o[a+i]=e*n+r*t,o})),M(Nr,"strided",(function(e,r,t,n,o,i,a,u,c){var l=e[t],f=e[t+r],p=n[i],s=n[i+o];return a[c]=l*p-f*s,a[c+u]=l*s+f*p,a})),M(kr,"assign",(function(e,r,t,n,o,i,a,u,c){return a[c]=e*t-r*n+o,a[c+u]=e*n+r*t+i,a})),M(kr,"strided",(function(e,r,t,n,o,i,a,u,c,l,f,p){var s=e[t],m=e[t+r],y=n[i],g=n[i+o],v=a[c],d=a[c+u];return l[p]=s*y-m*g+v,l[p+f]=s*g+m*y+d,l})),M(Cr,"assign",(function(e,r,t,n,o,i){return n[i]=r*e,n[i+o]=t*e,n})),M(Cr,"strided",(function(e,r,t,n,o,i,a){return o[a]=e*r[n],o[a+i]=e*r[n+t],o}));var Pr={};R(Pr,"add",Er),R(Pr,"assert",Ir),R(Pr,"mul",Nr),R(Pr,"muladd",kr),R(Pr,"scale",Cr);var $r={};function Lr(e){return Object.keys(Object(e))}R($r,"base",Pr),R($r,"conj",(function(e){return new e.constructor(e.re,-e.im)})),R($r,"Complex128",Xe),R($r,"imag",xr),R($r,"parseComplex128",(function(e){var r,t,n=0;if(!mr(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));if(!(r=hr(e,/\s/g,"").match(/^([-+]?(\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i?)?([-+])?((\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i)?$/)))throw new Error(O("invalid argument. Unable to parse input string as a complex number. Value: `%s`.",e));return t=r[1]&&!r[1].endsWith("i")?parseFloat(r[1]):0,r[4]?n=("-"===r[3]?-1:1)*parseFloat(hr(r[4],/i$/,"")):r[1]&&r[1].endsWith("i")&&(n=parseFloat(hr(r[1],/i$/,""))),new Xe(t,n)})),R($r,"real",br),R($r,"reim",Vr),R($r,"reviveComplex128",(function(e,r){return r&&r.type&&"Complex128"===r.type&&de(r.re)&&de(r.im)?new Xe(r.re,r.im):r}));var Rr=void 0!==Object.keys;function Br(e){return"[object Arguments]"===H(e)}var Mr=function(){return Br(arguments)}();function Wr(e){return e!=e}function Yr(e){return de(e)&&Wr(e)}function Zr(e){return xe(e)&&Wr(e.valueOf())}function Gr(e){return Yr(e)||Zr(e)}M(Gr,"isPrimitive",Yr),M(Gr,"isObject",Zr);var Ur=Object.prototype.propertyIsEnumerable;var Xr=!Ur.call("beep","0");function qr(e,r){var t;return null!=e&&(!(t=Ur.call(e,r))&&Xr&&dr(e)?!Yr(r=+r)&&Ve(r)&&r>=0&&r<e.length:t)}var zr=Mr?Br:function(e){return null!==e&&"object"==typeof e&&!pe(e)&&"number"==typeof e.length&&_e(e.length)&&e.length>=0&&e.length<=4294967295&&X(e,"callee")&&!qr(e,"callee")},Hr=Array.prototype.slice;var Jr=qr((function(){}),"prototype"),Dr=!qr({toString:null},"toString"),Kr=9007199254740991;function Qr(e,r,t){var n,o,i;if(!(i=e,"object"==typeof i&&null!==i&&"number"==typeof i.length&&_e(i.length)&&i.length>=0&&i.length<=Kr||mr(e)))throw new TypeError(O("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Ve(t))throw new TypeError(O("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Gr(r)){for(;o<n;o++)if(Gr(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}function et(e){return e.constructor&&e.constructor.prototype===e}var rt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],tt="undefined"==typeof window?void 0:window;var nt=function(){var e;if("undefined"===ge(tt))return!1;for(e in tt)try{-1===Qr(rt,e)&&X(tt,e)&&null!==tt[e]&&"object"===ge(tt[e])&&et(tt[e])}catch(e){return!0}return!1}(),ot="undefined"!=typeof window;var it,at=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];it=Rr?function(){return 2!==(Lr(arguments)||"").length}(1,2)?function(e){return zr(e)?Lr(Hr.call(e)):Lr(e)}:Lr:function(e){var r,t,n,o,i,a,u;if(o=[],zr(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!X(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!se(e))return o;t=Jr&&n}for(i in e)t&&"prototype"===i||!X(e,i)||o.push(String(i));if(Dr)for(r=function(e){if(!1===ot&&!nt)return et(e);try{return et(e)}catch(e){return!1}}(e),u=0;u<at.length;u++)a=at[u],r&&"constructor"===a||!X(e,a)||o.push(String(a));return o};var ut=it,ct={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}};function lt(e,r){var t;return 0===arguments.length?function(){var e,r,t,n,o,i,a,u,c;for(t={},r=(e=ut(ct)).length,c=0;c<r;c++){for(o=e[c],a=ct[o],n={},u=0;u<r;u++)n[i=e[u]]=a[i];t[o]=n}return t}():X(ct,e)&&X(t=ct[e],r)?t[r]:null}var ft={Complex128:Xe,Complex64:Ue};function pt(e,r){var t;return r&&r.type&&de(r.re)&&de(r.im)&&(t=ft[r.type])?new t(r.re,r.im):r}var st={};R(st,"base",$e),R(st,"complex",De),R(st,"ctors",ze),R(st,"dtype",ir),R(st,"dtypes",er),R(st,"float32",wr),R(st,"float64",$r),R(st,"promotionRules",lt),R(st,"reviveComplex",pt);export{$e as base,De as complex,ze as ctors,st as default,ir as dtype,er as dtypes,wr as float32,$r as float64,lt as promotionRules,pt as reviveComplex};
//# sourceMappingURL=mod.js.map
