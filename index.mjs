// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constructor-name@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";function f(e){var n=new t(2);return n[0]=e.re,n[1]=e.im,n}function x(e){var t=new n(2);return t[0]=e.re,t[1]=e.im,t}var v={};e(v,"isEqual",(function(e,t){var n=f(e),r=f(t);return n[0]===r[0]&&n[1]===r[1]})),e(v,"isEqualf",(function(e,t){var n=x(e),r=x(t);return n[0]===r[0]&&n[1]===r[1]})),e(v,"isNotEqual",(function(e,t){var n=f(e),r=f(t);return n[0]!==r[0]||n[1]!==r[1]})),e(v,"isNotEqualf",(function(e,t){var n=x(e),r=x(t);return n[0]!==r[0]||n[1]!==r[1]}));var d="number";var h="number";var y={};function w(e,t){if(!(this instanceof w))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!m(e))throw new TypeError(i("invalid argument. Real component must be a number. Value: `%s`.",e));if(!m(t))throw new TypeError(i("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}function g(e,t){if(!(this instanceof g))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!m(e))throw new TypeError(i("invalid argument. Real component must be a number. Value: `%s`.",e));if(!m(t))throw new TypeError(i("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:u(e)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:u(t)}),this}e(y,"assert",v),e(y,"cast",(function(e,t,n){if(!r(e))throw new TypeError(i("invalid argument. First argument must be a function. Value: `%s`.",e));if(!o(t))throw new TypeError(i("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(!r(n))throw new TypeError(i("invalid argument. Third argument must be a constructor function. Value: `%s`.",n));return t<=5?[function(){var t=e();if(typeof t===d)return new n(t,0);return t},function(t){var r=e(t);if(typeof r===d)return new n(r,0);return r},function(t,r){var o=e(t,r);if(typeof o===d)return new n(o,0);return o},function(t,r,o){var i=e(t,r,o);if(typeof i===d)return new n(i,0);return i},function(t,r,o,i){var m=e(t,r,o,i);if(typeof m===d)return new n(m,0);return m},function(t,r,o,i,m){var l=e(t,r,o,i,m);if(typeof l===d)return new n(l,0);return l}][t]:function(){var t,r,o;for(t=[],o=0;o<arguments.length;o++)t.push(arguments[o]);if(typeof(r=e.apply(null,t))===d)return new n(r,0);return r}})),e(y,"wrap",(function(e,t,n){if(!r(e))throw new TypeError(i("invalid argument. First argument must be a function. Value: `%s`.",e));if(!o(t))throw new TypeError(i("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(!r(n))throw new TypeError(i("invalid argument. Third argument must be a constructor function. Value: `%s`.",n));return t<=5?[function(){return e()},function(t){typeof t===h&&(t=new n(t,0));return e(t)},function(t,r){typeof t===h&&(t=new n(t,0));typeof r===h&&(r=new n(r,0));return e(t,r)},function(t,r,o){typeof t===h&&(t=new n(t,0));typeof r===h&&(r=new n(r,0));typeof o===h&&(o=new n(o,0));return e(t,r,o)},function(t,r,o,i){typeof t===h&&(t=new n(t,0));typeof r===h&&(r=new n(r,0));typeof o===h&&(o=new n(o,0));typeof i===h&&(i=new n(i,0));return e(t,r,o,i)},function(t,r,o,i,m){typeof t===h&&(t=new n(t,0));typeof r===h&&(r=new n(r,0));typeof o===h&&(o=new n(o,0));typeof i===h&&(i=new n(i,0));typeof m===h&&(m=new n(m,0));return e(t,r,o,i,m)}][t]:function(){var t,r,o;for(t=[],o=0;o<arguments.length;o++)typeof(r=arguments[o])===h&&(r=new n(r,0)),t.push(r);return e.apply(null,t)}})),p(w,"BYTES_PER_ELEMENT",8),p(w.prototype,"BYTES_PER_ELEMENT",8),p(w.prototype,"byteLength",16),p(w.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),p(w.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e})),p(g,"BYTES_PER_ELEMENT",4),p(g.prototype,"BYTES_PER_ELEMENT",4),p(g.prototype,"byteLength",8),p(g.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),p(g.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var b={float64:w,float32:g};function j(e,t,n){var r;if(arguments.length>2){if(r=b[n])return new r(e,t);throw new TypeError(i("invalid argument. Must provide a recognized data type. Value: `%s`.",n))}return new b.float64(e,t)}function E(e){return new e.constructor(e.re,-e.im)}function T(e){return new e.constructor(e.re,-e.im)}var C={complex64:g,complex128:w};function V(e){return C[e]||null}var S={Complex64:"complex64",Complex128:"complex128"},N=[g,w],R=["complex64","complex128"],_=R.length;function P(e){var t;for(t=0;t<_;t++)if(e instanceof N[t])return R[t];return S[s(e)]||null}var L=["complex64","complex128"];function M(){return L.slice()}function q(e){return e.im}function B(e){return e.im}var D={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}};function Y(){var e,t,n,r,o,i,m,l,p;for(n={},t=(e=a(D)).length,p=0;p<t;p++){for(o=e[p],m=D[o],r={},l=0;l<t;l++)r[i=e[l]]=m[i];n[o]=r}return n}function k(e,t){var n;return 0===arguments.length?Y():c(D,e)&&c(n=D[e],t)?n[t]:null}function F(e){return e.re}function I(e){return e.re}var J={Complex128:w,Complex64:g};function O(e,t){var n;return t&&t.type&&m(t.re)&&m(t.im)&&(n=J[t.type])?new n(t.re,t.im):t}function z(e,t){return t&&t.type&&"Complex64"===t.type&&m(t.re)&&m(t.im)?new g(t.re,t.im):t}function A(e,t){return t&&t.type&&"Complex128"===t.type&&m(t.re)&&m(t.im)?new w(t.re,t.im):t}var G={};e(G,"base",y),e(G,"complex",j),e(G,"conj",E),e(G,"conjf",T),e(G,"complexCtors",V),e(G,"complexDataType",P),e(G,"complexDataTypes",M),e(G,"Complex64",g),e(G,"Complex128",w),e(G,"imag",q),e(G,"imagf",B),e(G,"complexPromotionRules",k),e(G,"real",F),e(G,"realf",I),e(G,"reim",f),e(G,"reimf",x),e(G,"reviveComplex",O),e(G,"reviveComplex64",z),e(G,"reviveComplex128",A);export{w as Complex128,g as Complex64,y as base,j as complex,V as complexCtors,P as complexDataType,M as complexDataTypes,k as complexPromotionRules,E as conj,T as conjf,G as default,q as imag,B as imagf,F as real,I as realf,f as reim,x as reimf,O as reviveComplex,A as reviveComplex128,z as reviveComplex64};
//# sourceMappingURL=index.mjs.map
