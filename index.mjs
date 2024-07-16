// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.1-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.3-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constructor-name@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";var f="number";var x="number";var v={};function d(e,t){if(!(this instanceof d))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!o(e))throw new TypeError(r("invalid argument. Real component must be a number. Value: `%s`.",e));if(!o(t))throw new TypeError(r("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return i(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:l(e)}),i(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:l(t)}),this}function h(e,t){if(!(this instanceof h))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!o(e))throw new TypeError(r("invalid argument. Real component must be a number. Value: `%s`.",e));if(!o(t))throw new TypeError(r("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return i(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),i(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}e(v,"cast",(function(e,o,i){if(!t(e))throw new TypeError(r("invalid argument. First argument must be a function. Value: `%s`.",e));if(!n(o))throw new TypeError(r("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",o));if(!t(i))throw new TypeError(r("invalid argument. Third argument must be a constructor function. Value: `%s`.",i));return o<=5?[function(){var t=e();if(typeof t===f)return new i(t,0);return t},function(t){var n=e(t);if(typeof n===f)return new i(n,0);return n},function(t,n){var r=e(t,n);if(typeof r===f)return new i(r,0);return r},function(t,n,r){var o=e(t,n,r);if(typeof o===f)return new i(o,0);return o},function(t,n,r,o){var m=e(t,n,r,o);if(typeof m===f)return new i(m,0);return m},function(t,n,r,o,m){var l=e(t,n,r,o,m);if(typeof l===f)return new i(l,0);return l}][o]:function(){var t,n,r;for(t=[],r=0;r<arguments.length;r++)t.push(arguments[r]);if(typeof(n=e.apply(null,t))===f)return new i(n,0);return n}})),e(v,"wrap",(function(e,o,i){if(!t(e))throw new TypeError(r("invalid argument. First argument must be a function. Value: `%s`.",e));if(!n(o))throw new TypeError(r("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",o));if(!t(i))throw new TypeError(r("invalid argument. Third argument must be a constructor function. Value: `%s`.",i));return o<=5?[function(){return e()},function(t){typeof t===x&&(t=new i(t,0));return e(t)},function(t,n){typeof t===x&&(t=new i(t,0));typeof n===x&&(n=new i(n,0));return e(t,n)},function(t,n,r){typeof t===x&&(t=new i(t,0));typeof n===x&&(n=new i(n,0));typeof r===x&&(r=new i(r,0));return e(t,n,r)},function(t,n,r,o){typeof t===x&&(t=new i(t,0));typeof n===x&&(n=new i(n,0));typeof r===x&&(r=new i(r,0));typeof o===x&&(o=new i(o,0));return e(t,n,r,o)},function(t,n,r,o,m){typeof t===x&&(t=new i(t,0));typeof n===x&&(n=new i(n,0));typeof r===x&&(r=new i(r,0));typeof o===x&&(o=new i(o,0));typeof m===x&&(m=new i(m,0));return e(t,n,r,o,m)}][o]:function(){var t,n,r;for(t=[],r=0;r<arguments.length;r++)typeof(n=arguments[r])===x&&(n=new i(n,0)),t.push(n);return e.apply(null,t)}})),m(d,"BYTES_PER_ELEMENT",4),m(d.prototype,"BYTES_PER_ELEMENT",4),m(d.prototype,"byteLength",8),m(d.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),m(d.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e})),m(h,"BYTES_PER_ELEMENT",8),m(h.prototype,"BYTES_PER_ELEMENT",8),m(h.prototype,"byteLength",16),m(h.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),m(h.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var y={complex64:d,complex128:h};function w(e){return y[e]||null}var g={float64:"complex128",float32:"complex64"},b=w(g.float64);function j(e,t,n){var o;if(arguments.length>2){if(o=w(g[n]))return new o(e,t);throw new TypeError(r("invalid argument. Must provide a recognized data type. Value: `%s`.",n))}return new b(e,t)}var E={Complex64:"complex64",Complex128:"complex128"},T=["complex64","complex128"];function C(){return T.slice()}var V,S=C(),R=[];for(V=0;V<S.length;V++)R.push(w(S[V]));var _=S.length;function P(e){var t;for(t=0;t<_;t++)if(e instanceof R[t])return S[t];return E[p(e)]||null}function L(e){return new e.constructor(e.re,-e.im)}function N(e){var t=new u(2);return t[0]=e.re,t[1]=e.im,t}function M(e,t){return t&&t.type&&"Complex64"===t.type&&o(t.re)&&o(t.im)?new d(t.re,t.im):t}function B(e){return new e.constructor(e.re,-e.im)}function D(e){var t=new s(2);return t[0]=e.re,t[1]=e.im,t}function Y(e,t){return t&&t.type&&"Complex128"===t.type&&o(t.re)&&o(t.im)?new h(t.re,t.im):t}function k(e){return e.im}function F(e){return e.im}var I={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}};function J(e,t){var n;return 0===arguments.length?function(){var e,t,n,r,o,i,m,l,p;for(n={},t=(e=c(I)).length,p=0;p<t;p++){for(o=e[p],m=I[o],r={},l=0;l<t;l++)r[i=e[l]]=m[i];n[o]=r}return n}():a(I,e)&&(n=I[e],a(n,t))?n[t]:null}function O(e){return e.re}function z(e){return e.re}var q={Complex128:h,Complex64:d};function A(e,t){var n;return t&&t.type&&o(t.re)&&o(t.im)&&(n=q[t.type])?new n(t.re,t.im):t}var G={};e(G,"base",v),e(G,"complex",j),e(G,"complexCtors",w),e(G,"complexDataType",P),e(G,"complexDataTypes",C),e(G,"conjf",L),e(G,"Complex64",d),e(G,"reimf",N),e(G,"reviveComplex64",M),e(G,"conj",B),e(G,"Complex128",h),e(G,"reim",D),e(G,"reviveComplex128",Y),e(G,"imag",k),e(G,"imagf",F),e(G,"complexPromotionRules",J),e(G,"real",O),e(G,"realf",z),e(G,"reviveComplex",A);export{h as Complex128,d as Complex64,v as base,j as complex,w as complexCtors,P as complexDataType,C as complexDataTypes,J as complexPromotionRules,B as conj,L as conjf,G as default,k as imag,F as imagf,O as real,z as realf,D as reim,N as reimf,A as reviveComplex,Y as reviveComplex128,M as reviveComplex64};
//# sourceMappingURL=index.mjs.map
