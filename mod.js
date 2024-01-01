// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,m=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function d(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":l(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,w,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,m,"e+0$1"),n=s.call(n,y,"e-0$1"),e.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,v,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):f.call(n)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+x(n):x(n)+e}var T=String.fromCharCode,j=isNaN,S=Array.isArray;function _(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,i,a,l,f,p,s;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",f=1,p=0;p<e.length;p++)if(c(n=e[p]))l+=n;else{if(r=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,j(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,o;for(t=[],o=0,n=A.exec(e);n;)(r=e.slice(o,A.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),o=A.lastIndex,n=A.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function k(e){return"string"==typeof e}function C(e){var r,t;if(!k(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var I,P=Object.prototype,N=P.toString,R=P.__defineGetter__,L=P.__defineSetter__,B=P.__lookupGetter__,M=P.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(B.call(e,r)||M.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&R&&R.call(e,r,t.get),a&&L&&L.call(e,r,t.set),e};var $=I;function Y(e,r,t){$(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var G=/./;function W(e,r,t){$(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function D(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return X&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function H(e,r){return null!=e&&z.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var K=Z()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[q],r=H(e,q);try{e[q]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[q]=t:delete e[q],n}:function(e){return U.call(e)},Q=Boolean,ee=Boolean.prototype.toString;var re=Z();function te(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function ne(e){return D(e)||te(e)}function oe(){return new Function("return this;")()}W(ne,"isPrimitive",D),W(ne,"isObject",te);var ie="object"==typeof self?self:null,ae="object"==typeof window?window:null,ue="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ce="object"==typeof ue?ue:null,le="object"==typeof globalThis?globalThis:null;var fe=function(e){if(arguments.length){if(!D(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return oe()}if(le)return le;if(ie)return ie;if(ae)return ae;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),pe=fe.document&&fe.document.childNodes,se=Int8Array;function me(){return/^\s*function\s*([^(]*)/i}var ye=/^\s*function\s*([^(]*)/i;W(me,"REGEXP",ye);var ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function ve(e){return null!==e&&"object"==typeof e}function he(e){var r,t,n,o;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ye.exec(n.toString()))return r[1]}return ve(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}W(ve,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ge(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ve));var we="function"==typeof G||"object"==typeof se||"function"==typeof pe?function(e){return he(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?he(e).toLowerCase():r};function be(e){return"function"===we(e)}function de(e){return"number"==typeof e}var xe=Number,Ee=xe.prototype.toString;var Te=Z();function je(e){return"object"==typeof e&&(e instanceof xe||(Te?function(e){try{return Ee.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function Se(e){return de(e)||je(e)}W(Se,"isPrimitive",de),W(Se,"isObject",je);var _e=Number.POSITIVE_INFINITY,Oe=xe.NEGATIVE_INFINITY,Ae=Math.floor;function Fe(e){return Ae(e)===e}function Ve(e){return e<_e&&e>Oe&&Fe(e)}function ke(e){return de(e)&&Ve(e)}function Ce(e){return je(e)&&Ve(e.valueOf())}function Ie(e){return ke(e)||Ce(e)}function Pe(e){return ke(e)&&e>=0}function Ne(e){return Ce(e)&&e.valueOf()>=0}function Re(e){return Pe(e)||Ne(e)}W(Ie,"isPrimitive",ke),W(Ie,"isObject",Ce),W(Re,"isPrimitive",Pe),W(Re,"isObject",Ne);var Le="number";var Be="number";var Me={};function $e(e,r){if(!(this instanceof $e))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!de(e))throw new TypeError(C("invalid argument. Real component must be a number. Value: `%s`.",e));if(!de(r))throw new TypeError(C("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return $(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),$(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Me,"cast",(function(e,r,t){var n;if(!be(e))throw new TypeError(C("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Pe(r))throw new TypeError(C("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!be(t))throw new TypeError(C("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return n=[function(){var r=e();if(typeof r===Le)return new t(r,0);return r},function(r){var n=e(r);if(typeof n===Le)return new t(n,0);return n},function(r,n){var o=e(r,n);if(typeof o===Le)return new t(o,0);return o},function(r,n,o){var i=e(r,n,o);if(typeof i===Le)return new t(i,0);return i},function(r,n,o,i){var a=e(r,n,o,i);if(typeof a===Le)return new t(a,0);return a},function(r,n,o,i,a){var u=e(r,n,o,i,a);if(typeof u===Le)return new t(u,0);return u}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)r.push(arguments[o]);if(typeof(n=e.apply(null,r))===Le)return new t(n,0);return n}})),Y(Me,"wrap",(function(e,r,t){var n;if(!be(e))throw new TypeError(C("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Pe(r))throw new TypeError(C("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!be(t))throw new TypeError(C("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return n=[function(){return e()},function(r){typeof r===Be&&(r=new t(r,0));return e(r)},function(r,n){typeof r===Be&&(r=new t(r,0));typeof n===Be&&(n=new t(n,0));return e(r,n)},function(r,n,o){typeof r===Be&&(r=new t(r,0));typeof n===Be&&(n=new t(n,0));typeof o===Be&&(o=new t(o,0));return e(r,n,o)},function(r,n,o,i){typeof r===Be&&(r=new t(r,0));typeof n===Be&&(n=new t(n,0));typeof o===Be&&(o=new t(o,0));typeof i===Be&&(i=new t(i,0));return e(r,n,o,i)},function(r,n,o,i,a){typeof r===Be&&(r=new t(r,0));typeof n===Be&&(n=new t(n,0));typeof o===Be&&(o=new t(o,0));typeof i===Be&&(i=new t(i,0));typeof a===Be&&(a=new t(a,0));return e(r,n,o,i,a)}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)typeof(n=arguments[o])===Be&&(n=new t(n,0)),r.push(n);return e.apply(null,r)}})),W($e,"BYTES_PER_ELEMENT",8),W($e.prototype,"BYTES_PER_ELEMENT",8),W($e.prototype,"byteLength",16),W($e.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),W($e.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ye="function"==typeof Math.fround?Math.fround:null,Ge="function"==typeof Float32Array;var We="function"==typeof Float32Array?Float32Array:null;var De,Xe="function"==typeof Float32Array?Float32Array:void 0;De=function(){var e,r,t;if("function"!=typeof We)return!1;try{r=new We([1,3.14,-3.14,5e40]),t=r,e=(Ge&&t instanceof Float32Array||"[object Float32Array]"===K(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===_e}catch(r){e=!1}return e}()?Xe:function(){throw new Error("not implemented")};var Ze=De,Ue=new Ze(1);var ze="function"==typeof Ye?Ye:function(e){return Ue[0]=e,Ue[0]};function He(e,r){if(!(this instanceof He))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!de(e))throw new TypeError(C("invalid argument. Real component must be a number. Value: `%s`.",e));if(!de(r))throw new TypeError(C("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return $(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ze(e)}),$(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ze(r)}),this}W(He,"BYTES_PER_ELEMENT",4),W(He.prototype,"BYTES_PER_ELEMENT",4),W(He.prototype,"byteLength",8),W(He.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),W(He.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Je={float64:$e,float32:He};function qe(e,r,t){var n;if(arguments.length>2){if(n=Je[t])return new n(e,r);throw new TypeError(C("invalid argument. Must provide a recognized data type. Value: `%s`.",t))}return new Je.float64(e,r)}function Ke(e){return new e.constructor(e.re,-e.im)}function Qe(e){return new e.constructor(e.re,-e.im)}var er={complex64:He,complex128:$e};function rr(e){return er[e]||null}var tr={Complex64:"complex64",Complex128:"complex128"},nr=[He,$e],or=["complex64","complex128"],ir=or.length;function ar(e){var r;for(r=0;r<ir;r++)if(e instanceof nr[r])return or[r];return tr[he(e)]||null}var ur=["complex64","complex128"];function cr(){return ur.slice()}function lr(e){return e.im}function fr(e){return e.im}function pr(e){return Object.keys(Object(e))}var sr=void 0!==Object.keys;function mr(e){return"[object Arguments]"===K(e)}var yr=function(){return mr(arguments)}();function gr(e){return"string"==typeof e}var vr=String.prototype.valueOf;var hr=Z();function wr(e){return"object"==typeof e&&(e instanceof String||(hr?function(e){try{return vr.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function br(e){return gr(e)||wr(e)}function dr(e){return e!=e}function xr(e){return de(e)&&dr(e)}function Er(e){return je(e)&&dr(e.valueOf())}function Tr(e){return xr(e)||Er(e)}W(br,"isPrimitive",gr),W(br,"isObject",wr),W(Tr,"isPrimitive",xr),W(Tr,"isObject",Er);var jr=Object.prototype.propertyIsEnumerable;var Sr=!jr.call("beep","0");function _r(e,r){var t;return null!=e&&(!(t=jr.call(e,r))&&Sr&&br(e)?!xr(r=+r)&&ke(r)&&r>=0&&r<e.length:t)}var Or=yr?mr:function(e){return null!==e&&"object"==typeof e&&!ge(e)&&"number"==typeof e.length&&Fe(e.length)&&e.length>=0&&e.length<=4294967295&&H(e,"callee")&&!_r(e,"callee")},Ar=Array.prototype.slice;var Fr=_r((function(){}),"prototype"),Vr=!_r({toString:null},"toString");function kr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Fe(e.length)&&e.length>=0&&e.length<=9007199254740991}function Cr(e,r,t){var n,o;if(!kr(e)&&!gr(e))throw new TypeError(C("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!ke(t))throw new TypeError(C("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Tr(r)){for(;o<n;o++)if(Tr(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}function Ir(e){return e.constructor&&e.constructor.prototype===e}var Pr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Nr="undefined"==typeof window?void 0:window;var Rr=function(){var e;if("undefined"===we(Nr))return!1;for(e in Nr)try{-1===Cr(Pr,e)&&H(Nr,e)&&null!==Nr[e]&&"object"===we(Nr[e])&&Ir(Nr[e])}catch(e){return!0}return!1}(),Lr="undefined"!=typeof window;var Br=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Mr=sr?function(){return 2!==(pr(arguments)||"").length}(1,2)?function(e){return Or(e)?pr(Ar.call(e)):pr(e)}:pr:function(e){var r,t,n,o,i,a,u;if(o=[],Or(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!H(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!ve(e))return o;t=Fr&&n}for(i in e)t&&"prototype"===i||!H(e,i)||o.push(String(i));if(Vr)for(r=function(e){if(!1===Lr&&!Rr)return Ir(e);try{return Ir(e)}catch(e){return!1}}(e),u=0;u<Br.length;u++)a=Br[u],r&&"constructor"===a||!H(e,a)||o.push(String(a));return o},$r={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}};function Yr(){var e,r,t,n,o,i,a,u,c;for(t={},r=(e=Mr($r)).length,c=0;c<r;c++){for(o=e[c],a=$r[o],n={},u=0;u<r;u++)n[i=e[u]]=a[i];t[o]=n}return t}function Gr(e,r){var t;return 0===arguments.length?Yr():H($r,e)&&H(t=$r[e],r)?t[r]:null}function Wr(e){return e.re}function Dr(e){return e.re}var Xr="function"==typeof Float64Array;var Zr="function"==typeof Float64Array?Float64Array:null;var Ur,zr="function"==typeof Float64Array?Float64Array:void 0;Ur=function(){var e,r,t;if("function"!=typeof Zr)return!1;try{r=new Zr([1,3.14,-3.14,NaN]),t=r,e=(Xr&&t instanceof Float64Array||"[object Float64Array]"===K(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?zr:function(){throw new Error("not implemented")};var Hr=Ur;function Jr(e){var r=new Hr(2);return r[0]=e.re,r[1]=e.im,r}function qr(e){var r=new Ze(2);return r[0]=e.re,r[1]=e.im,r}var Kr={Complex128:$e,Complex64:He};function Qr(e,r){var t;return r&&r.type&&de(r.re)&&de(r.im)&&(t=Kr[r.type])?new t(r.re,r.im):r}function et(e,r){return r&&r.type&&"Complex64"===r.type&&de(r.re)&&de(r.im)?new He(r.re,r.im):r}function rt(e,r){return r&&r.type&&"Complex128"===r.type&&de(r.re)&&de(r.im)?new $e(r.re,r.im):r}var tt={};Y(tt,"base",Me),Y(tt,"complex",qe),Y(tt,"conj",Ke),Y(tt,"conjf",Qe),Y(tt,"complexCtors",rr),Y(tt,"complexDataType",ar),Y(tt,"complexDataTypes",cr),Y(tt,"Complex64",He),Y(tt,"Complex128",$e),Y(tt,"imag",lr),Y(tt,"imagf",fr),Y(tt,"complexPromotionRules",Gr),Y(tt,"real",Wr),Y(tt,"realf",Dr),Y(tt,"reim",Jr),Y(tt,"reimf",qr),Y(tt,"reviveComplex",Qr),Y(tt,"reviveComplex64",et),Y(tt,"reviveComplex128",rt);export{$e as Complex128,He as Complex64,Me as base,qe as complex,rr as complexCtors,ar as complexDataType,cr as complexDataTypes,Gr as complexPromotionRules,Ke as conj,Qe as conjf,tt as default,lr as imag,fr as imagf,Wr as real,Dr as realf,Jr as reim,qr as reimf,Qr as reviveComplex,rt as reviveComplex128,et as reviveComplex64};
//# sourceMappingURL=mod.js.map
