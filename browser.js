// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,s=/e\+(\d)$/,m=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function d(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":c(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=p.call(n,v,"$1e"),n=p.call(n,w,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,s,"e+0$1"),n=p.call(n,m,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,g,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function b(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var x=String.fromCharCode,E=Array.isArray;function T(e){return e!=e}function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,n,i,a,c,l,f,p,s,m,y,g;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,f=0;f<e.length;f++)if("string"==typeof(n=e[f]))c+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,T(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,m=n.width,y=n.padRight,g=void 0,(g=m-s.length)<0?s:s=y?s+b(g):b(g)+s)),c+=n.arg||"",l+=1}return c}var _=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,o;for(t=[],o=0,n=_.exec(e);n;)(r=e.slice(o,_.lastIndex-n[0].length)).length&&t.push(r),t.push(O(n)),o=_.lastIndex,n=_.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function F(e){var r,t;if("string"!=typeof e)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return S.apply(null,r)}var V,k=Object.prototype,C=k.toString,I=k.__defineGetter__,P=k.__defineSetter__,N=k.__lookupGetter__,L=k.__lookupSetter__;V=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(N.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=k,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(e,r,t.get),a&&P&&P.call(e,r,t.set),e};var R=V;function B(e,r,t){R(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var M=/./;function $(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Y(e){return"boolean"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return G&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Z=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&Z.call(e,r)}var U="function"==typeof Symbol?Symbol:void 0,z="function"==typeof U?U.toStringTag:"",H=W()?function(e){var r,t,n;if(null==e)return X.call(e);t=e[z],r=D(e,z);try{e[z]=void 0}catch(r){return X.call(e)}return n=X.call(e),r?e[z]=t:delete e[z],n}:function(e){return X.call(e)},J=Boolean,q=Boolean.prototype.toString,K=W();function Q(e){return"object"==typeof e&&(e instanceof J||(K?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ee(e){return Y(e)||Q(e)}$(ee,"isPrimitive",Y),$(ee,"isObject",Q);var re="object"==typeof self?self:null,te="object"==typeof window?window:null,ne="object"==typeof globalThis?globalThis:null,oe=function(e){if(arguments.length){if(!Y(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ne)return ne;if(re)return re;if(te)return te;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=oe.document&&oe.document.childNodes,ae=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var ce=/^\s*function\s*([^(]*)/i;$(ue,"REGEXP",ce);var le=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function fe(e){return null!==e&&"object"==typeof e}var pe=function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!le(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(fe);function se(e){var r,t,n,o;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ce.exec(n.toString()))return r[1]}return fe(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}$(fe,"isObjectLikeArray",pe);var me="function"==typeof M||"object"==typeof ae||"function"==typeof ie?function(e){return se(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?se(e).toLowerCase():r};function ye(e){return"function"===me(e)}function ge(e){return"number"==typeof e}var he=Number,we=he.prototype.toString,ve=W();function de(e){return"object"==typeof e&&(e instanceof he||(ve?function(e){try{return we.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function be(e){return ge(e)||de(e)}$(be,"isPrimitive",ge),$(be,"isObject",de);var xe=Number.POSITIVE_INFINITY,Ee=he.NEGATIVE_INFINITY,Te=Math.floor;function je(e){return Te(e)===e}function Se(e){return e<xe&&e>Ee&&je(e)}function _e(e){return ge(e)&&Se(e)}function Oe(e){return de(e)&&Se(e.valueOf())}function Ae(e){return _e(e)||Oe(e)}function Fe(e){return _e(e)&&e>=0}function Ve(e){return Oe(e)&&e.valueOf()>=0}function ke(e){return Fe(e)||Ve(e)}$(Ae,"isPrimitive",_e),$(Ae,"isObject",Oe),$(ke,"isPrimitive",Fe),$(ke,"isObject",Ve);var Ce="number",Ie="number",Pe={};B(Pe,"cast",(function(e,r,t){var n;if(!ye(e))throw new TypeError(F("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Fe(r))throw new TypeError(F("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!ye(t))throw new TypeError(F("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return n=[function(){var r=e();return typeof r===Ce?new t(r,0):r},function(r){var n=e(r);return typeof n===Ce?new t(n,0):n},function(r,n){var o=e(r,n);return typeof o===Ce?new t(o,0):o},function(r,n,o){var i=e(r,n,o);return typeof i===Ce?new t(i,0):i},function(r,n,o,i){var a=e(r,n,o,i);return typeof a===Ce?new t(a,0):a},function(r,n,o,i,a){var u=e(r,n,o,i,a);return typeof u===Ce?new t(u,0):u}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)r.push(arguments[o]);return typeof(n=e.apply(null,r))===Ce?new t(n,0):n}})),B(Pe,"wrap",(function(e,r,t){var n;if(!ye(e))throw new TypeError(F("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Fe(r))throw new TypeError(F("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!ye(t))throw new TypeError(F("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return n=[function(){return e()},function(r){return typeof r===Ie&&(r=new t(r,0)),e(r)},function(r,n){return typeof r===Ie&&(r=new t(r,0)),typeof n===Ie&&(n=new t(n,0)),e(r,n)},function(r,n,o){return typeof r===Ie&&(r=new t(r,0)),typeof n===Ie&&(n=new t(n,0)),typeof o===Ie&&(o=new t(o,0)),e(r,n,o)},function(r,n,o,i){return typeof r===Ie&&(r=new t(r,0)),typeof n===Ie&&(n=new t(n,0)),typeof o===Ie&&(o=new t(o,0)),typeof i===Ie&&(i=new t(i,0)),e(r,n,o,i)},function(r,n,o,i,a){return typeof r===Ie&&(r=new t(r,0)),typeof n===Ie&&(n=new t(n,0)),typeof o===Ie&&(o=new t(o,0)),typeof i===Ie&&(i=new t(i,0)),typeof a===Ie&&(a=new t(a,0)),e(r,n,o,i,a)}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)typeof(n=arguments[o])===Ie&&(n=new t(n,0)),r.push(n);return e.apply(null,r)}}));var Ne,Le="function"==typeof Math.fround?Math.fround:null,Re="function"==typeof Float32Array,Be="function"==typeof Float32Array?Float32Array:null,Me="function"==typeof Float32Array?Float32Array:void 0;Ne=function(){var e,r,t;if("function"!=typeof Be)return!1;try{r=new Be([1,3.14,-3.14,5e40]),t=r,e=(Re&&t instanceof Float32Array||"[object Float32Array]"===H(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===xe}catch(r){e=!1}return e}()?Me:function(){throw new Error("not implemented")};var $e=Ne,Ye=new $e(1),Ge="function"==typeof Le?Le:function(e){return Ye[0]=e,Ye[0]};function We(e,r){if(!(this instanceof We))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ge(e))throw new TypeError(F("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ge(r))throw new TypeError(F("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return R(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ge(e)}),R(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ge(r)}),this}function Xe(e,r){if(!(this instanceof Xe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ge(e))throw new TypeError(F("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ge(r))throw new TypeError(F("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return R(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),R(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}$(We,"BYTES_PER_ELEMENT",4),$(We.prototype,"BYTES_PER_ELEMENT",4),$(We.prototype,"byteLength",8),$(We.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),$(We.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e})),$(Xe,"BYTES_PER_ELEMENT",8),$(Xe.prototype,"BYTES_PER_ELEMENT",8),$(Xe.prototype,"byteLength",16),$(Xe.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),$(Xe.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ze={complex64:We,complex128:Xe};function De(e){return Ze[e]||null}var Ue={float64:"complex128",float32:"complex64"},ze=De(Ue.float64),He={Complex64:"complex64",Complex128:"complex128"},Je=["complex64","complex128"];function qe(){return Je.slice()}var Ke,Qe=qe(),er=[];for(Ke=0;Ke<Qe.length;Ke++)er.push(De(Qe[Ke]));var rr,tr=Qe.length,nr="function"==typeof Float64Array,or="function"==typeof Float64Array?Float64Array:null,ir="function"==typeof Float64Array?Float64Array:void 0;rr=function(){var e,r,t;if("function"!=typeof or)return!1;try{r=new or([1,3.14,-3.14,NaN]),t=r,e=(nr&&t instanceof Float64Array||"[object Float64Array]"===H(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ir:function(){throw new Error("not implemented")};var ar=rr;function ur(e){return Object.keys(Object(e))}var cr,lr=void 0!==Object.keys;function fr(e){return"[object Arguments]"===H(e)}cr=function(){return fr(arguments)}();var pr=cr;function sr(e){return"string"==typeof e}var mr=String.prototype.valueOf,yr=W();function gr(e){return"object"==typeof e&&(e instanceof String||(yr?function(e){try{return mr.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function hr(e){return sr(e)||gr(e)}function wr(e){return e!=e}function vr(e){return ge(e)&&wr(e)}function dr(e){return de(e)&&wr(e.valueOf())}function br(e){return vr(e)||dr(e)}$(hr,"isPrimitive",sr),$(hr,"isObject",gr),$(br,"isPrimitive",vr),$(br,"isObject",dr);var xr=Object.prototype.propertyIsEnumerable,Er=!xr.call("beep","0");function Tr(e,r){var t;return null!=e&&(!(t=xr.call(e,r))&&Er&&hr(e)?!vr(r=+r)&&_e(r)&&r>=0&&r<e.length:t)}var jr=pr?fr:function(e){return null!==e&&"object"==typeof e&&!le(e)&&"number"==typeof e.length&&je(e.length)&&e.length>=0&&e.length<=4294967295&&D(e,"callee")&&!Tr(e,"callee")},Sr=Array.prototype.slice,_r=Tr((function(){}),"prototype"),Or=!Tr({toString:null},"toString"),Ar=9007199254740991;function Fr(e,r,t){var n,o,i;if(!("object"==typeof(i=e)&&null!==i&&"number"==typeof i.length&&je(i.length)&&i.length>=0&&i.length<=Ar||sr(e)))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!_e(t))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(br(r)){for(;o<n;o++)if(br(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}function Vr(e){return e.constructor&&e.constructor.prototype===e}var kr,Cr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ir="undefined"==typeof window?void 0:window,Pr=function(){var e;if("undefined"===me(Ir))return!1;for(e in Ir)try{-1===Fr(Cr,e)&&D(Ir,e)&&null!==Ir[e]&&"object"===me(Ir[e])&&Vr(Ir[e])}catch(e){return!0}return!1}(),Nr="undefined"!=typeof window,Lr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];kr=lr?function(){return 2!==(ur(arguments)||"").length}(1,2)?function(e){return jr(e)?ur(Sr.call(e)):ur(e)}:ur:function(e){var r,t,n,o,i,a,u;if(o=[],jr(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!D(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(0==(n="function"==typeof e)&&!fe(e))return o;t=_r&&n}for(i in e)t&&"prototype"===i||!D(e,i)||o.push(String(i));if(Or)for(r=function(e){if(!1===Nr&&!Pr)return Vr(e);try{return Vr(e)}catch(e){return!1}}(e),u=0;u<Lr.length;u++)a=Lr[u],r&&"constructor"===a||!D(e,a)||o.push(String(a));return o};var Rr=kr,Br={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}},Mr={Complex128:Xe,Complex64:We},$r={};return B($r,"base",Pe),B($r,"complex",(function(e,r,t){var n;if(arguments.length>2){if(n=De(Ue[t]))return new n(e,r);throw new TypeError(F("invalid argument. Must provide a recognized data type. Value: `%s`.",t))}return new ze(e,r)})),B($r,"complexCtors",De),B($r,"complexDataType",(function(e){var r;for(r=0;r<tr;r++)if(e instanceof er[r])return Qe[r];return He[se(e)]||null})),B($r,"complexDataTypes",qe),B($r,"conjf",(function(e){return new e.constructor(e.re,-e.im)})),B($r,"Complex64",We),B($r,"imagf",(function(e){return e.im})),B($r,"realf",(function(e){return e.re})),B($r,"reimf",(function(e){var r=new $e(2);return r[0]=e.re,r[1]=e.im,r})),B($r,"reviveComplex64",(function(e,r){return r&&r.type&&"Complex64"===r.type&&ge(r.re)&&ge(r.im)?new We(r.re,r.im):r})),B($r,"conj",(function(e){return new e.constructor(e.re,-e.im)})),B($r,"Complex128",Xe),B($r,"imag",(function(e){return e.im})),B($r,"real",(function(e){return e.re})),B($r,"reim",(function(e){var r=new ar(2);return r[0]=e.re,r[1]=e.im,r})),B($r,"reviveComplex128",(function(e,r){return r&&r.type&&"Complex128"===r.type&&ge(r.re)&&ge(r.im)?new Xe(r.re,r.im):r})),B($r,"complexPromotionRules",(function(e,r){var t;return 0===arguments.length?function(){var e,r,t,n,o,i,a,u,c;for(t={},r=(e=Rr(Br)).length,c=0;c<r;c++){for(o=e[c],a=Br[o],n={},u=0;u<r;u++)n[i=e[u]]=a[i];t[o]=n}return t}():D(Br,e)&&D(t=Br[e],r)?t[r]:null})),B($r,"reviveComplex",(function(e,r){var t;return r&&r.type&&ge(r.re)&&ge(r.im)&&(t=Mr[r.type])?new t(r.re,r.im):r})),$r},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r();
//# sourceMappingURL=browser.js.map
