// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(e){return"string"==typeof e}var u=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,m=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,d=/(\..*[^0])0*e/;function w(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":u(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=s.call(n,d,"$1e"),n=s.call(n,b,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,m,"e+0$1"),n=s.call(n,v,"e-0$1"),e.alternate&&(n=s.call(n,y,"$1."),n=s.call(n,g,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):f.call(n)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+x(n):x(n)+e}var j=String.fromCharCode,E=isNaN,O=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,i,a,u,f,p,s;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",f=1,p=0;p<e.length;p++)if(l(n=e[p]))u+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),u+=n.arg||"",f+=1}return u}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,n,o;for(t=[],o=0,n=A.exec(e);n;)(r=e.slice(o,A.lastIndex-n[0].length)).length&&t.push(r),t.push(C(n)),o=A.lastIndex,n=A.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function k(e){return"string"==typeof e}function F(e){var r,t,n;if(!k(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=P(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var I,V=Object.freeze({__proto__:null,default:F}),N=Object.prototype,R=N.toString,L=N.__defineGetter__,z=N.__defineSetter__,B=N.__lookupGetter__,M=N.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(B.call(e,r)||M.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(e,r,t.get),a&&z&&z.call(e,r,t.set),e};var $=I,Y=Object.freeze({__proto__:null,default:$});function D(e,r,t){$(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function G(e){var r=e.default;if("function"==typeof r){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var W=G(V);function X(e,r,t){$(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=Object.freeze({__proto__:null,default:X});function U(e){return"number"==typeof e}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return H&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var K=Object.prototype.hasOwnProperty;function Q(e,r){return null!=e&&K.call(e,r)}var ee=Object.freeze({__proto__:null,default:Q}),re="function"==typeof Symbol?Symbol:void 0,te="function"==typeof re?re.toStringTag:"";var ne=J()?function(e){var r,t,n;if(null==e)return q.call(e);t=e[te],r=Q(e,te);try{e[te]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[te]=t:delete e[te],n}:function(e){return q.call(e)},oe=Number,ie=oe.prototype.toString;var ae=J();function ce(e){return"object"==typeof e&&(e instanceof oe||(ae?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object Number]"===ne(e)))}function le(e){return U(e)||ce(e)}X(le,"isPrimitive",U),X(le,"isObject",ce);var ue=G(Object.freeze({__proto__:null,default:le,isPrimitive:U,isObject:ce})),fe=G(Y),pe=G(Z);var se=function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"};var me=function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e},ve=ue.isPrimitive,ye=fe,ge=pe,he=W,be=se,de=me;function we(e,r){if(!(this instanceof we))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ve(e))throw new TypeError(he("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ve(r))throw new TypeError(he("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return ye(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),ye(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}ge(we,"BYTES_PER_ELEMENT",8),ge(we.prototype,"BYTES_PER_ELEMENT",8),ge(we.prototype,"byteLength",16),ge(we.prototype,"toString",be),ge(we.prototype,"toJSON",de);var xe=we,_e="function"==typeof Math.fround?Math.fround:null,je="function"==typeof Float32Array;var Ee=Number.POSITIVE_INFINITY,Oe="function"==typeof Float32Array?Float32Array:null;var Se,Te="function"==typeof Float32Array?Float32Array:void 0;Se=function(){var e,r,t;if("function"!=typeof Oe)return!1;try{r=new Oe([1,3.14,-3.14,5e40]),t=r,e=(je&&t instanceof Float32Array||"[object Float32Array]"===ne(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Ee}catch(r){e=!1}return e}()?Te:function(){throw new Error("not implemented")};var Ae=Se,Ce=Object.freeze({__proto__:null,default:Ae}),Pe=new Ae(1);var ke="function"==typeof _e?_e:function(e){return Pe[0]=e,Pe[0]},Fe=G(Object.freeze({__proto__:null,default:ke}));var Ie=function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"};var Ve=function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e},Ne=ue.isPrimitive,Re=fe,Le=pe,ze=Fe,Be=W,Me=Ie,$e=Ve;function Ye(e,r){if(!(this instanceof Ye))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ne(e))throw new TypeError(Be("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ne(r))throw new TypeError(Be("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Re(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ze(e)}),Re(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ze(r)}),this}Le(Ye,"BYTES_PER_ELEMENT",4),Le(Ye.prototype,"BYTES_PER_ELEMENT",4),Le(Ye.prototype,"byteLength",8),Le(Ye.prototype,"toString",Me),Le(Ye.prototype,"toJSON",$e);var De=Ye,Ge=W,We={float64:xe,float32:De};var Xe=function(e,r,t){var n;if(arguments.length>2){if(n=We[t])return new n(e,r);throw new TypeError(Ge("invalid argument. Must provide a recognized data type. Value: `%s`.",t))}return new We.float64(e,r)},Ze=Xe;var Ue=function(e){return new e.constructor(e.re,-e.im)};var He=function(e){return new e.constructor(e.re,-e.im)},Je={complex64:De,complex128:xe};var qe=function(e){return Je[e]||null},Ke=qe;function Qe(){return/^\s*function\s*([^(]*)/i}var er=/^\s*function\s*([^(]*)/i;X(Qe,"REGEXP",er);var rr=Array.isArray?Array.isArray:function(e){return"[object Array]"===ne(e)};function tr(e){return null!==e&&"object"==typeof e}function nr(e){var r,t,n,o;if(("Object"===(t=ne(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=er.exec(n.toString()))return r[1]}return tr(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}X(tr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!rr(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(tr));var or=G(Object.freeze({__proto__:null,default:nr})),ir={Complex64:"complex64",Complex128:"complex128"},ar=[De,xe],cr=["complex64","complex128"],lr=cr.length;var ur=function(e){var r;for(r=0;r<lr;r++)if(e instanceof ar[r])return cr[r];return ir[or(e)]||null},fr=["complex64","complex128"];var pr=function(){return fr.slice()};var sr=function(e){return e.im};var mr=function(e){return e.im};function vr(e){return Object.keys(Object(e))}var yr=void 0!==Object.keys;function gr(e){return"[object Arguments]"===ne(e)}var hr=function(){return gr(arguments)}();function br(e){return"string"==typeof e}var dr=String.prototype.valueOf;var wr=J();function xr(e){return"object"==typeof e&&(e instanceof String||(wr?function(e){try{return dr.call(e),!0}catch(e){return!1}}(e):"[object String]"===ne(e)))}function _r(e){return br(e)||xr(e)}function jr(e){return e!=e}function Er(e){return U(e)&&jr(e)}function Or(e){return ce(e)&&jr(e.valueOf())}function Sr(e){return Er(e)||Or(e)}X(_r,"isPrimitive",br),X(_r,"isObject",xr),X(Sr,"isPrimitive",Er),X(Sr,"isObject",Or);var Tr=oe.NEGATIVE_INFINITY,Ar=Math.floor;function Cr(e){return Ar(e)===e}function Pr(e){return e<Ee&&e>Tr&&Cr(e)}function kr(e){return U(e)&&Pr(e)}function Fr(e){return ce(e)&&Pr(e.valueOf())}function Ir(e){return kr(e)||Fr(e)}X(Ir,"isPrimitive",kr),X(Ir,"isObject",Fr);var Vr=Object.prototype.propertyIsEnumerable;var Nr=!Vr.call("beep","0");function Rr(e,r){var t;return null!=e&&(!(t=Vr.call(e,r))&&Nr&&_r(e)?!Er(r=+r)&&kr(r)&&r>=0&&r<e.length:t)}var Lr=hr?gr:function(e){return null!==e&&"object"==typeof e&&!rr(e)&&"number"==typeof e.length&&Cr(e.length)&&e.length>=0&&e.length<=4294967295&&Q(e,"callee")&&!Rr(e,"callee")},zr=Array.prototype.slice;var Br=Rr((function(){}),"prototype"),Mr=!Rr({toString:null},"toString");function $r(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Cr(e.length)&&e.length>=0&&e.length<=9007199254740991}function Yr(e,r,t){var n,o;if(!$r(e)&&!br(e))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!kr(t))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Sr(r)){for(;o<n;o++)if(Sr(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}var Dr=/./;function Gr(e){return"boolean"==typeof e}var Wr=Boolean,Xr=Boolean.prototype.toString;var Zr=J();function Ur(e){return"object"==typeof e&&(e instanceof Wr||(Zr?function(e){try{return Xr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ne(e)))}function Hr(e){return Gr(e)||Ur(e)}function Jr(){return new Function("return this;")()}X(Hr,"isPrimitive",Gr),X(Hr,"isObject",Ur);var qr="object"==typeof self?self:null,Kr="object"==typeof window?window:null,Qr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},et="object"==typeof Qr?Qr:null,rt="object"==typeof globalThis?globalThis:null;var tt=function(e){if(arguments.length){if(!Gr(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Jr()}if(rt)return rt;if(qr)return qr;if(Kr)return Kr;if(et)return et;throw new Error("unexpected error. Unable to resolve global object.")}(),nt=tt.document&&tt.document.childNodes,ot=Int8Array;var it="function"==typeof Dr||"object"==typeof ot||"function"==typeof nt?function(e){return nr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?nr(e).toLowerCase():r};function at(e){return e.constructor&&e.constructor.prototype===e}var ct=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],lt="undefined"==typeof window?void 0:window;var ut=function(){var e;if("undefined"===it(lt))return!1;for(e in lt)try{-1===Yr(ct,e)&&Q(lt,e)&&null!==lt[e]&&"object"===it(lt[e])&&at(lt[e])}catch(e){return!0}return!1}(),ft="undefined"!=typeof window;var pt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var st=yr?function(){return 2!==(vr(arguments)||"").length}(1,2)?function(e){return Lr(e)?vr(zr.call(e)):vr(e)}:vr:function(e){var r,t,n,o,i,a,c;if(o=[],Lr(e)){for(c=0;c<e.length;c++)o.push(c.toString());return o}if("string"==typeof e){if(e.length>0&&!Q(e,"0"))for(c=0;c<e.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof e)&&!tr(e))return o;t=Br&&n}for(i in e)t&&"prototype"===i||!Q(e,i)||o.push(String(i));if(Mr)for(r=function(e){if(!1===ft&&!ut)return at(e);try{return at(e)}catch(e){return!1}}(e),c=0;c<pt.length;c++)a=pt[c],r&&"constructor"===a||!Q(e,a)||o.push(String(a));return o},mt=G(Object.freeze({__proto__:null,default:st})),vt=G(ee),yt={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}};function gt(){var e,r,t,n,o,i,a,c,l;for(t={},r=(e=mt(yt)).length,l=0;l<r;l++){for(o=e[l],a=yt[o],n={},c=0;c<r;c++)n[i=e[c]]=a[i];t[o]=n}return t}var ht=function(e,r){var t;return 0===arguments.length?gt():vt(yt,e)&&vt(t=yt[e],r)?t[r]:null};var bt=function(e){return e.re};var dt=function(e){return e.re},wt="function"==typeof Float64Array;var xt="function"==typeof Float64Array?Float64Array:null;var _t,jt="function"==typeof Float64Array?Float64Array:void 0;_t=function(){var e,r,t;if("function"!=typeof xt)return!1;try{r=new xt([1,3.14,-3.14,NaN]),t=r,e=(wt&&t instanceof Float64Array||"[object Float64Array]"===ne(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?jt:function(){throw new Error("not implemented")};var Et=_t,Ot=G(Object.freeze({__proto__:null,default:Et}));var St=function(e){var r=new Ot(2);return r[0]=e.re,r[1]=e.im,r},Tt=G(Ce);var At=function(e){var r=new Tt(2);return r[0]=e.re,r[1]=e.im,r},Ct={Complex128:xe,Complex64:De},Pt=ue.isPrimitive,kt=Ct;var Ft=function(e,r){var t;return r&&r.type&&Pt(r.re)&&Pt(r.im)&&(t=kt[r.type])?new t(r.re,r.im):r},It=Ft,Vt=ue.isPrimitive,Nt=De;var Rt=function(e,r){return r&&r.type&&"Complex64"===r.type&&Vt(r.re)&&Vt(r.im)?new Nt(r.re,r.im):r},Lt=ue.isPrimitive,zt=xe;var Bt=function(e,r){return r&&r.type&&"Complex128"===r.type&&Lt(r.re)&&Lt(r.im)?new zt(r.re,r.im):r},Mt={};D(Mt,"complex",Ze),D(Mt,"conj",Ue),D(Mt,"conjf",He),D(Mt,"complexCtors",Ke),D(Mt,"complexDataType",ur),D(Mt,"complexDataTypes",pr),D(Mt,"Complex64",De),D(Mt,"Complex128",xe),D(Mt,"imag",sr),D(Mt,"imagf",mr),D(Mt,"complexPromotionRules",ht),D(Mt,"real",bt),D(Mt,"realf",dt),D(Mt,"reim",St),D(Mt,"reimf",At),D(Mt,"reviveComplex",It),D(Mt,"reviveComplex64",Rt),D(Mt,"reviveComplex128",Bt);export{xe as Complex128,De as Complex64,Ze as complex,Ke as complexCtors,ur as complexDataType,pr as complexDataTypes,ht as complexPromotionRules,Ue as conj,He as conjf,Mt as default,sr as imag,mr as imagf,bt as real,dt as realf,St as reim,At as reimf,It as reviveComplex,Bt as reviveComplex128,Rt as reviveComplex64};
//# sourceMappingURL=mod.js.map
