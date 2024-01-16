// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,m=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,d=/(\..*[^0])0*e/;function b(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":l(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=s.call(n,d,"$1e"),n=s.call(n,v,"e"),n=s.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,m,"e+0$1"),n=s.call(n,y,"e-0$1"),e.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,h,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):f.call(n)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+x(n):x(n)+e}var T=String.fromCharCode,j=isNaN,S=Array.isArray;function _(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,i,a,l,f,p,s;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",f=1,p=0;p<e.length;p++)if(c(n=e[p]))l+=n;else{if(r=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,j(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,o;for(t=[],o=0,n=A.exec(e);n;)(r=e.slice(o,A.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),o=A.lastIndex,n=A.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function C(e){return"string"==typeof e}function k(e){var r,t;if(!C(e))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var I,P=Object.prototype,N=P.toString,L=P.__defineGetter__,R=P.__defineSetter__,B=P.__lookupGetter__,M=P.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(B.call(e,r)||M.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};var $=I;function Y(e,r,t){$(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var G=/./;function W(e,r,t){$(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"boolean"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return Z&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,q=Object.prototype.hasOwnProperty;function z(e,r){return null!=e&&q.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"",K=D()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[J],r=z(e,J);try{e[J]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[J]=t:delete e[J],n}:function(e){return U.call(e)},Q=Boolean,ee=Boolean.prototype.toString,re=D();function te(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function ne(e){return X(e)||te(e)}function oe(){return new Function("return this;")()}W(ne,"isPrimitive",X),W(ne,"isObject",te);var ie="object"==typeof self?self:null,ae="object"==typeof window?window:null,ue="object"==typeof globalThis?globalThis:null,ce=function(e){if(arguments.length){if(!X(e))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return oe()}if(ue)return ue;if(ie)return ie;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),le=ce.document&&ce.document.childNodes,fe=Int8Array;function pe(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;W(pe,"REGEXP",se);var me=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function ye(e){return null!==e&&"object"==typeof e}function ge(e){var r,t,n,o;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=se.exec(n.toString()))return r[1]}return ye(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}W(ye,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!me(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ye));var he="function"==typeof G||"object"==typeof fe||"function"==typeof le?function(e){return ge(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ge(e).toLowerCase():r};function we(e){return"function"===he(e)}function ve(e){return"number"==typeof e}var de=Number,be=de.prototype.toString,xe=D();function Ee(e){return"object"==typeof e&&(e instanceof de||(xe?function(e){try{return be.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function Te(e){return ve(e)||Ee(e)}W(Te,"isPrimitive",ve),W(Te,"isObject",Ee);var je=Number.POSITIVE_INFINITY,Se=de.NEGATIVE_INFINITY,_e=Math.floor;function Oe(e){return _e(e)===e}function Ae(e){return e<je&&e>Se&&Oe(e)}function Fe(e){return ve(e)&&Ae(e)}function Ve(e){return Ee(e)&&Ae(e.valueOf())}function Ce(e){return Fe(e)||Ve(e)}function ke(e){return Fe(e)&&e>=0}function Ie(e){return Ve(e)&&e.valueOf()>=0}function Pe(e){return ke(e)||Ie(e)}W(Ce,"isPrimitive",Fe),W(Ce,"isObject",Ve),W(Pe,"isPrimitive",ke),W(Pe,"isObject",Ie);var Ne="number",Le="number",Re={};function Be(e,r){if(!(this instanceof Be))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ve(e))throw new TypeError(k("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ve(r))throw new TypeError(k("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return $(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),$(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Re,"cast",(function(e,r,t){var n;if(!we(e))throw new TypeError(k("invalid argument. First argument must be a function. Value: `%s`.",e));if(!ke(r))throw new TypeError(k("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!we(t))throw new TypeError(k("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return n=[function(){var r=e();return typeof r===Ne?new t(r,0):r},function(r){var n=e(r);return typeof n===Ne?new t(n,0):n},function(r,n){var o=e(r,n);return typeof o===Ne?new t(o,0):o},function(r,n,o){var i=e(r,n,o);return typeof i===Ne?new t(i,0):i},function(r,n,o,i){var a=e(r,n,o,i);return typeof a===Ne?new t(a,0):a},function(r,n,o,i,a){var u=e(r,n,o,i,a);return typeof u===Ne?new t(u,0):u}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)r.push(arguments[o]);return typeof(n=e.apply(null,r))===Ne?new t(n,0):n}})),Y(Re,"wrap",(function(e,r,t){var n;if(!we(e))throw new TypeError(k("invalid argument. First argument must be a function. Value: `%s`.",e));if(!ke(r))throw new TypeError(k("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!we(t))throw new TypeError(k("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return n=[function(){return e()},function(r){return typeof r===Le&&(r=new t(r,0)),e(r)},function(r,n){return typeof r===Le&&(r=new t(r,0)),typeof n===Le&&(n=new t(n,0)),e(r,n)},function(r,n,o){return typeof r===Le&&(r=new t(r,0)),typeof n===Le&&(n=new t(n,0)),typeof o===Le&&(o=new t(o,0)),e(r,n,o)},function(r,n,o,i){return typeof r===Le&&(r=new t(r,0)),typeof n===Le&&(n=new t(n,0)),typeof o===Le&&(o=new t(o,0)),typeof i===Le&&(i=new t(i,0)),e(r,n,o,i)},function(r,n,o,i,a){return typeof r===Le&&(r=new t(r,0)),typeof n===Le&&(n=new t(n,0)),typeof o===Le&&(o=new t(o,0)),typeof i===Le&&(i=new t(i,0)),typeof a===Le&&(a=new t(a,0)),e(r,n,o,i,a)}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)typeof(n=arguments[o])===Le&&(n=new t(n,0)),r.push(n);return e.apply(null,r)}})),W(Be,"BYTES_PER_ELEMENT",8),W(Be.prototype,"BYTES_PER_ELEMENT",8),W(Be.prototype,"byteLength",16),W(Be.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),W(Be.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Me,$e="function"==typeof Math.fround?Math.fround:null,Ye="function"==typeof Float32Array,Ge="function"==typeof Float32Array?Float32Array:null,We="function"==typeof Float32Array?Float32Array:void 0;Me=function(){var e,r,t;if("function"!=typeof Ge)return!1;try{r=new Ge([1,3.14,-3.14,5e40]),t=r,e=(Ye&&t instanceof Float32Array||"[object Float32Array]"===K(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===je}catch(r){e=!1}return e}()?We:function(){throw new Error("not implemented")};var Xe=Me,Ze=new Xe(1),De="function"==typeof $e?$e:function(e){return Ze[0]=e,Ze[0]};function Ue(e,r){if(!(this instanceof Ue))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ve(e))throw new TypeError(k("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ve(r))throw new TypeError(k("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return $(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:De(e)}),$(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:De(r)}),this}W(Ue,"BYTES_PER_ELEMENT",4),W(Ue.prototype,"BYTES_PER_ELEMENT",4),W(Ue.prototype,"byteLength",8),W(Ue.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),W(Ue.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var qe,ze={float64:Be,float32:Ue},He={complex64:Ue,complex128:Be},Je={Complex64:"complex64",Complex128:"complex128"},Ke=[Ue,Be],Qe=["complex64","complex128"],er=Qe.length,rr=["complex64","complex128"],tr="function"==typeof Float64Array,nr="function"==typeof Float64Array?Float64Array:null,or="function"==typeof Float64Array?Float64Array:void 0;qe=function(){var e,r,t;if("function"!=typeof nr)return!1;try{r=new nr([1,3.14,-3.14,NaN]),t=r,e=(tr&&t instanceof Float64Array||"[object Float64Array]"===K(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?or:function(){throw new Error("not implemented")};var ir=qe;function ar(e){var r=new ir(2);return r[0]=e.re,r[1]=e.im,r}function ur(e){var r=new Xe(2);return r[0]=e.re,r[1]=e.im,r}function cr(e){return Object.keys(Object(e))}var lr,fr=void 0!==Object.keys;function pr(e){return"[object Arguments]"===K(e)}lr=function(){return pr(arguments)}();var sr=lr;function mr(e){return"string"==typeof e}var yr=String.prototype.valueOf,gr=D();function hr(e){return"object"==typeof e&&(e instanceof String||(gr?function(e){try{return yr.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function wr(e){return mr(e)||hr(e)}function vr(e){return e!=e}function dr(e){return ve(e)&&vr(e)}function br(e){return Ee(e)&&vr(e.valueOf())}function xr(e){return dr(e)||br(e)}W(wr,"isPrimitive",mr),W(wr,"isObject",hr),W(xr,"isPrimitive",dr),W(xr,"isObject",br);var Er=Object.prototype.propertyIsEnumerable,Tr=!Er.call("beep","0");function jr(e,r){var t;return null!=e&&(!(t=Er.call(e,r))&&Tr&&wr(e)?!dr(r=+r)&&Fe(r)&&r>=0&&r<e.length:t)}var Sr=sr?pr:function(e){return null!==e&&"object"==typeof e&&!me(e)&&"number"==typeof e.length&&Oe(e.length)&&e.length>=0&&e.length<=4294967295&&z(e,"callee")&&!jr(e,"callee")},_r=Array.prototype.slice,Or=jr((function(){}),"prototype"),Ar=!jr({toString:null},"toString");function Fr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Oe(e.length)&&e.length>=0&&e.length<=9007199254740991}function Vr(e,r,t){var n,o;if(!Fr(e)&&!mr(e))throw new TypeError(k("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Fe(t))throw new TypeError(k("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(xr(r)){for(;o<n;o++)if(xr(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}function Cr(e){return e.constructor&&e.constructor.prototype===e}var kr,Ir=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Pr="undefined"==typeof window?void 0:window,Nr=function(){var e;if("undefined"===he(Pr))return!1;for(e in Pr)try{-1===Vr(Ir,e)&&z(Pr,e)&&null!==Pr[e]&&"object"===he(Pr[e])&&Cr(Pr[e])}catch(e){return!0}return!1}(),Lr="undefined"!=typeof window,Rr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];kr=fr?function(){return 2!==(cr(arguments)||"").length}(1,2)?function(e){return Sr(e)?cr(_r.call(e)):cr(e)}:cr:function(e){var r,t,n,o,i,a,u;if(o=[],Sr(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!z(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(0==(n="function"==typeof e)&&!ye(e))return o;t=Or&&n}for(i in e)t&&"prototype"===i||!z(e,i)||o.push(String(i));if(Ar)for(r=function(e){if(!1===Lr&&!Nr)return Cr(e);try{return Cr(e)}catch(e){return!1}}(e),u=0;u<Rr.length;u++)a=Rr[u],r&&"constructor"===a||!z(e,a)||o.push(String(a));return o};var Br=kr,Mr={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}};function $r(){var e,r,t,n,o,i,a,u,c;for(t={},r=(e=Br(Mr)).length,c=0;c<r;c++){for(o=e[c],a=Mr[o],n={},u=0;u<r;u++)n[i=e[u]]=a[i];t[o]=n}return t}var Yr={Complex128:Be,Complex64:Ue},Gr={};return Y(Gr,"base",Re),Y(Gr,"complex",(function(e,r,t){var n;if(arguments.length>2){if(n=ze[t])return new n(e,r);throw new TypeError(k("invalid argument. Must provide a recognized data type. Value: `%s`.",t))}return new ze.float64(e,r)})),Y(Gr,"conj",(function(e){return new e.constructor(e.re,-e.im)})),Y(Gr,"conjf",(function(e){return new e.constructor(e.re,-e.im)})),Y(Gr,"complexCtors",(function(e){return He[e]||null})),Y(Gr,"complexDataType",(function(e){var r;for(r=0;r<er;r++)if(e instanceof Ke[r])return Qe[r];return Je[ge(e)]||null})),Y(Gr,"complexDataTypes",(function(){return rr.slice()})),Y(Gr,"equalComplex128",(function(e,r){var t=ar(e),n=ar(r);return t[0]===n[0]&&t[1]===n[1]})),Y(Gr,"equalComplex64",(function(e,r){var t=ur(e),n=ur(r);return t[0]===n[0]&&t[1]===n[1]})),Y(Gr,"Complex64",Ue),Y(Gr,"Complex128",Be),Y(Gr,"imag",(function(e){return e.im})),Y(Gr,"imagf",(function(e){return e.im})),Y(Gr,"complexPromotionRules",(function(e,r){var t;return 0===arguments.length?$r():z(Mr,e)&&z(t=Mr[e],r)?t[r]:null})),Y(Gr,"real",(function(e){return e.re})),Y(Gr,"realf",(function(e){return e.re})),Y(Gr,"reim",ar),Y(Gr,"reimf",ur),Y(Gr,"reviveComplex",(function(e,r){var t;return r&&r.type&&ve(r.re)&&ve(r.im)&&(t=Yr[r.type])?new t(r.re,r.im):r})),Y(Gr,"reviveComplex64",(function(e,r){return r&&r.type&&"Complex64"===r.type&&ve(r.re)&&ve(r.im)?new Ue(r.re,r.im):r})),Y(Gr,"reviveComplex128",(function(e,r){return r&&r.type&&"Complex128"===r.type&&ve(r.re)&&ve(r.im)?new Be(r.re,r.im):r})),Gr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r();
//# sourceMappingURL=browser.js.map
