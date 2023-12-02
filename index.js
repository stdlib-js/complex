// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,m=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function d(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":l(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,w,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,m,"e+0$1"),n=s.call(n,y,"e-0$1"),e.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,v,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):f.call(n)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+x(n):x(n)+e}var j=String.fromCharCode,T=isNaN,S=Array.isArray;function _(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,i,a,l,f,p,s;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",f=1,p=0;p<e.length;p++)if(c(n=e[p]))l+=n;else{if(r=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,T(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,o;for(t=[],o=0,n=A.exec(e);n;)(r=e.slice(o,A.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),o=A.lastIndex,n=A.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function k(e){return"string"==typeof e}function C(e){var r,t;if(!k(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var I,P=Object.prototype,N=P.toString,L=P.__defineGetter__,R=P.__defineSetter__,B=P.__lookupGetter__,M=P.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(B.call(e,r)||M.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};var $=I;function Y(e,r,t){$(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var G=/./;function W(e,r,t){$(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"boolean"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return Z&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function H(e,r){return null!=e&&z.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var K=D()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[q],r=H(e,q);try{e[q]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[q]=t:delete e[q],n}:function(e){return U.call(e)},Q=Boolean,ee=Boolean.prototype.toString;var re=D();function te(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function ne(e){return X(e)||te(e)}function oe(){return new Function("return this;")()}W(ne,"isPrimitive",X),W(ne,"isObject",te);var ie="object"==typeof self?self:null,ae="object"==typeof window?window:null,ue="object"==typeof global?global:null,ce="object"==typeof globalThis?globalThis:null;var le=function(e){if(arguments.length){if(!X(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return oe()}if(ce)return ce;if(ie)return ie;if(ae)return ae;if(ue)return ue;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=le.document&&le.document.childNodes,pe=Int8Array;function se(){return/^\s*function\s*([^(]*)/i}var me=/^\s*function\s*([^(]*)/i;W(se,"REGEXP",me);var ye=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function ge(e){return null!==e&&"object"==typeof e}function ve(e){var r,t,n,o;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=me.exec(n.toString()))return r[1]}return ge(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}W(ge,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ye(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ge));var he="function"==typeof G||"object"==typeof pe||"function"==typeof fe?function(e){return ve(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ve(e).toLowerCase():r};function we(e){return"function"===he(e)}function be(e){return"number"==typeof e}var de=Number,xe=de.prototype.toString;var Ee=D();function je(e){return"object"==typeof e&&(e instanceof de||(Ee?function(e){try{return xe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function Te(e){return be(e)||je(e)}W(Te,"isPrimitive",be),W(Te,"isObject",je);var Se=Number.POSITIVE_INFINITY,_e=de.NEGATIVE_INFINITY,Oe=Math.floor;function Ae(e){return Oe(e)===e}function Fe(e){return e<Se&&e>_e&&Ae(e)}function Ve(e){return be(e)&&Fe(e)}function ke(e){return je(e)&&Fe(e.valueOf())}function Ce(e){return Ve(e)||ke(e)}function Ie(e){return Ve(e)&&e>=0}function Pe(e){return ke(e)&&e.valueOf()>=0}function Ne(e){return Ie(e)||Pe(e)}W(Ce,"isPrimitive",Ve),W(Ce,"isObject",ke),W(Ne,"isPrimitive",Ie),W(Ne,"isObject",Pe);var Le="number";var Re="number";var Be={};function Me(e,r){if(!(this instanceof Me))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!be(e))throw new TypeError(C("invalid argument. Real component must be a number. Value: `%s`.",e));if(!be(r))throw new TypeError(C("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return $(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),$(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Be,"cast",(function(e,r,t){var n;if(!we(e))throw new TypeError(C("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Ie(r))throw new TypeError(C("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!we(t))throw new TypeError(C("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return n=[function(){var r=e();if(typeof r===Le)return new t(r,0);return r},function(r){var n=e(r);if(typeof n===Le)return new t(n,0);return n},function(r,n){var o=e(r,n);if(typeof o===Le)return new t(o,0);return o},function(r,n,o){var i=e(r,n,o);if(typeof i===Le)return new t(i,0);return i},function(r,n,o,i){var a=e(r,n,o,i);if(typeof a===Le)return new t(a,0);return a},function(r,n,o,i,a){var u=e(r,n,o,i,a);if(typeof u===Le)return new t(u,0);return u}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)r.push(arguments[o]);if(typeof(n=e.apply(null,r))===Le)return new t(n,0);return n}})),Y(Be,"wrap",(function(e,r,t){var n;if(!we(e))throw new TypeError(C("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Ie(r))throw new TypeError(C("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!we(t))throw new TypeError(C("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return n=[function(){return e()},function(r){typeof r===Re&&(r=new t(r,0));return e(r)},function(r,n){typeof r===Re&&(r=new t(r,0));typeof n===Re&&(n=new t(n,0));return e(r,n)},function(r,n,o){typeof r===Re&&(r=new t(r,0));typeof n===Re&&(n=new t(n,0));typeof o===Re&&(o=new t(o,0));return e(r,n,o)},function(r,n,o,i){typeof r===Re&&(r=new t(r,0));typeof n===Re&&(n=new t(n,0));typeof o===Re&&(o=new t(o,0));typeof i===Re&&(i=new t(i,0));return e(r,n,o,i)},function(r,n,o,i,a){typeof r===Re&&(r=new t(r,0));typeof n===Re&&(n=new t(n,0));typeof o===Re&&(o=new t(o,0));typeof i===Re&&(i=new t(i,0));typeof a===Re&&(a=new t(a,0));return e(r,n,o,i,a)}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)typeof(n=arguments[o])===Re&&(n=new t(n,0)),r.push(n);return e.apply(null,r)}})),W(Me,"BYTES_PER_ELEMENT",8),W(Me.prototype,"BYTES_PER_ELEMENT",8),W(Me.prototype,"byteLength",16),W(Me.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),W(Me.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var $e="function"==typeof Math.fround?Math.fround:null,Ye="function"==typeof Float32Array;var Ge="function"==typeof Float32Array?Float32Array:null;var We,Xe="function"==typeof Float32Array?Float32Array:void 0;We=function(){var e,r,t;if("function"!=typeof Ge)return!1;try{r=new Ge([1,3.14,-3.14,5e40]),t=r,e=(Ye&&t instanceof Float32Array||"[object Float32Array]"===K(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Se}catch(r){e=!1}return e}()?Xe:function(){throw new Error("not implemented")};var Ze=We,De=new Ze(1);var Ue="function"==typeof $e?$e:function(e){return De[0]=e,De[0]};function ze(e,r){if(!(this instanceof ze))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!be(e))throw new TypeError(C("invalid argument. Real component must be a number. Value: `%s`.",e));if(!be(r))throw new TypeError(C("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return $(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ue(e)}),$(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ue(r)}),this}W(ze,"BYTES_PER_ELEMENT",4),W(ze.prototype,"BYTES_PER_ELEMENT",4),W(ze.prototype,"byteLength",8),W(ze.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),W(ze.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var He={float64:Me,float32:ze};var Je={complex64:ze,complex128:Me};var qe={Complex64:"complex64",Complex128:"complex128"},Ke=[ze,Me],Qe=["complex64","complex128"],er=Qe.length;var rr=["complex64","complex128"];function tr(e){return Object.keys(Object(e))}var nr,or=void 0!==Object.keys;function ir(e){return"[object Arguments]"===K(e)}nr=function(){return ir(arguments)}();var ar=nr;function ur(e){return"string"==typeof e}var cr=String.prototype.valueOf;var lr=D();function fr(e){return"object"==typeof e&&(e instanceof String||(lr?function(e){try{return cr.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function pr(e){return ur(e)||fr(e)}function sr(e){return e!=e}function mr(e){return be(e)&&sr(e)}function yr(e){return je(e)&&sr(e.valueOf())}function gr(e){return mr(e)||yr(e)}W(pr,"isPrimitive",ur),W(pr,"isObject",fr),W(gr,"isPrimitive",mr),W(gr,"isObject",yr);var vr=Object.prototype.propertyIsEnumerable;var hr=!vr.call("beep","0");function wr(e,r){var t;return null!=e&&(!(t=vr.call(e,r))&&hr&&pr(e)?!mr(r=+r)&&Ve(r)&&r>=0&&r<e.length:t)}var br=ar?ir:function(e){return null!==e&&"object"==typeof e&&!ye(e)&&"number"==typeof e.length&&Ae(e.length)&&e.length>=0&&e.length<=4294967295&&H(e,"callee")&&!wr(e,"callee")},dr=Array.prototype.slice;var xr=wr((function(){}),"prototype"),Er=!wr({toString:null},"toString");function jr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ae(e.length)&&e.length>=0&&e.length<=9007199254740991}function Tr(e,r,t){var n,o;if(!jr(e)&&!ur(e))throw new TypeError(C("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Ve(t))throw new TypeError(C("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(gr(r)){for(;o<n;o++)if(gr(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}function Sr(e){return e.constructor&&e.constructor.prototype===e}var _r=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Or="undefined"==typeof window?void 0:window;var Ar=function(){var e;if("undefined"===he(Or))return!1;for(e in Or)try{-1===Tr(_r,e)&&H(Or,e)&&null!==Or[e]&&"object"===he(Or[e])&&Sr(Or[e])}catch(e){return!0}return!1}(),Fr="undefined"!=typeof window;var Vr,kr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Vr=or?function(){return 2!==(tr(arguments)||"").length}(1,2)?function(e){return br(e)?tr(dr.call(e)):tr(e)}:tr:function(e){var r,t,n,o,i,a,u;if(o=[],br(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!H(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!ge(e))return o;t=xr&&n}for(i in e)t&&"prototype"===i||!H(e,i)||o.push(String(i));if(Er)for(r=function(e){if(!1===Fr&&!Ar)return Sr(e);try{return Sr(e)}catch(e){return!1}}(e),u=0;u<kr.length;u++)a=kr[u],r&&"constructor"===a||!H(e,a)||o.push(String(a));return o};var Cr=Vr,Ir={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}};function Pr(){var e,r,t,n,o,i,a,u,c;for(t={},r=(e=Cr(Ir)).length,c=0;c<r;c++){for(o=e[c],a=Ir[o],n={},u=0;u<r;u++)n[i=e[u]]=a[i];t[o]=n}return t}var Nr="function"==typeof Float64Array;var Lr="function"==typeof Float64Array?Float64Array:null;var Rr,Br="function"==typeof Float64Array?Float64Array:void 0;Rr=function(){var e,r,t;if("function"!=typeof Lr)return!1;try{r=new Lr([1,3.14,-3.14,NaN]),t=r,e=(Nr&&t instanceof Float64Array||"[object Float64Array]"===K(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?Br:function(){throw new Error("not implemented")};var Mr=Rr;var $r={Complex128:Me,Complex64:ze};var Yr={};return Y(Yr,"base",Be),Y(Yr,"complex",(function(e,r,t){var n;if(arguments.length>2){if(n=He[t])return new n(e,r);throw new TypeError(C("invalid argument. Must provide a recognized data type. Value: `%s`.",t))}return new He.float64(e,r)})),Y(Yr,"conj",(function(e){return new e.constructor(e.re,-e.im)})),Y(Yr,"conjf",(function(e){return new e.constructor(e.re,-e.im)})),Y(Yr,"complexCtors",(function(e){return Je[e]||null})),Y(Yr,"complexDataType",(function(e){var r;for(r=0;r<er;r++)if(e instanceof Ke[r])return Qe[r];return qe[ve(e)]||null})),Y(Yr,"complexDataTypes",(function(){return rr.slice()})),Y(Yr,"Complex64",ze),Y(Yr,"Complex128",Me),Y(Yr,"imag",(function(e){return e.im})),Y(Yr,"imagf",(function(e){return e.im})),Y(Yr,"complexPromotionRules",(function(e,r){var t;return 0===arguments.length?Pr():H(Ir,e)&&H(t=Ir[e],r)?t[r]:null})),Y(Yr,"real",(function(e){return e.re})),Y(Yr,"realf",(function(e){return e.re})),Y(Yr,"reim",(function(e){var r=new Mr(2);return r[0]=e.re,r[1]=e.im,r})),Y(Yr,"reimf",(function(e){var r=new Ze(2);return r[0]=e.re,r[1]=e.im,r})),Y(Yr,"reviveComplex",(function(e,r){var t;return r&&r.type&&be(r.re)&&be(r.im)&&(t=$r[r.type])?new t(r.re,r.im):r})),Y(Yr,"reviveComplex64",(function(e,r){return r&&r.type&&"Complex64"===r.type&&be(r.re)&&be(r.im)?new ze(r.re,r.im):r})),Y(Yr,"reviveComplex128",(function(e,r){return r&&r.type&&"Complex128"===r.type&&be(r.re)&&be(r.im)?new Me(r.re,r.im):r})),Yr}));
//# sourceMappingURL=index.js.map
