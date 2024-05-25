// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-assert-is-same-value@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-assert-is-same-value-zero@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-assert-is-same-value-zero@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-assert-is-same-value@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.1-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.3-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constructor-name@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";function h(e){var n=new t(2);return n[0]=e.re,n[1]=e.im,n}function y(e){var t=new n(2);return t[0]=e.re,t[1]=e.im,t}var w={};e(w,"isEqual",(function(e,t){var n=h(e),r=h(t);return n[0]===r[0]&&n[1]===r[1]})),e(w,"isEqualf",(function(e,t){var n=y(e),r=y(t);return n[0]===r[0]&&n[1]===r[1]})),e(w,"isNotEqual",(function(e,t){var n=h(e),r=h(t);return n[0]!==r[0]||n[1]!==r[1]})),e(w,"isNotEqualf",(function(e,t){var n=y(e),r=y(t);return n[0]!==r[0]||n[1]!==r[1]})),e(w,"isSameValue",(function(e,t){var n=h(e),o=h(t);return r(n[0],o[0])&&r(n[1],o[1])})),e(w,"isSameValueZero",(function(e,t){var n=h(e),r=h(t);return o(n[0],r[0])&&o(n[1],r[1])})),e(w,"isSameValueZerof",(function(e,t){var n=y(e),r=y(t);return i(n[0],r[0])&&i(n[1],r[1])})),e(w,"isSameValuef",(function(e,t){var n=y(e),r=y(t);return m(n[0],r[0])&&m(n[1],r[1])}));var b="number";var g="number";var j={};function E(e,t){if(!(this instanceof E))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!p(e))throw new TypeError(u("invalid argument. Real component must be a number. Value: `%s`.",e));if(!p(t))throw new TypeError(u("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return a(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:f(e)}),a(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:f(t)}),this}function T(e,t){if(!(this instanceof T))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!p(e))throw new TypeError(u("invalid argument. Real component must be a number. Value: `%s`.",e));if(!p(t))throw new TypeError(u("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return a(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),a(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}e(j,"assert",w),e(j,"cast",(function(e,t,n){if(!l(e))throw new TypeError(u("invalid argument. First argument must be a function. Value: `%s`.",e));if(!s(t))throw new TypeError(u("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(!l(n))throw new TypeError(u("invalid argument. Third argument must be a constructor function. Value: `%s`.",n));return t<=5?[function(){var t=e();if(typeof t===b)return new n(t,0);return t},function(t){var r=e(t);if(typeof r===b)return new n(r,0);return r},function(t,r){var o=e(t,r);if(typeof o===b)return new n(o,0);return o},function(t,r,o){var i=e(t,r,o);if(typeof i===b)return new n(i,0);return i},function(t,r,o,i){var m=e(t,r,o,i);if(typeof m===b)return new n(m,0);return m},function(t,r,o,i,m){var l=e(t,r,o,i,m);if(typeof l===b)return new n(l,0);return l}][t]:function(){var t,r,o;for(t=[],o=0;o<arguments.length;o++)t.push(arguments[o]);if(typeof(r=e.apply(null,t))===b)return new n(r,0);return r}})),e(j,"wrap",(function(e,t,n){if(!l(e))throw new TypeError(u("invalid argument. First argument must be a function. Value: `%s`.",e));if(!s(t))throw new TypeError(u("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(!l(n))throw new TypeError(u("invalid argument. Third argument must be a constructor function. Value: `%s`.",n));return t<=5?[function(){return e()},function(t){typeof t===g&&(t=new n(t,0));return e(t)},function(t,r){typeof t===g&&(t=new n(t,0));typeof r===g&&(r=new n(r,0));return e(t,r)},function(t,r,o){typeof t===g&&(t=new n(t,0));typeof r===g&&(r=new n(r,0));typeof o===g&&(o=new n(o,0));return e(t,r,o)},function(t,r,o,i){typeof t===g&&(t=new n(t,0));typeof r===g&&(r=new n(r,0));typeof o===g&&(o=new n(o,0));typeof i===g&&(i=new n(i,0));return e(t,r,o,i)},function(t,r,o,i,m){typeof t===g&&(t=new n(t,0));typeof r===g&&(r=new n(r,0));typeof o===g&&(o=new n(o,0));typeof i===g&&(i=new n(i,0));typeof m===g&&(m=new n(m,0));return e(t,r,o,i,m)}][t]:function(){var t,r,o;for(t=[],o=0;o<arguments.length;o++)typeof(r=arguments[o])===g&&(r=new n(r,0)),t.push(r);return e.apply(null,t)}})),c(E,"BYTES_PER_ELEMENT",4),c(E.prototype,"BYTES_PER_ELEMENT",4),c(E.prototype,"byteLength",8),c(E.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(E.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e})),c(T,"BYTES_PER_ELEMENT",8),c(T.prototype,"BYTES_PER_ELEMENT",8),c(T.prototype,"byteLength",16),c(T.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(T.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var C={complex64:E,complex128:T};function V(e){return C[e]||null}var S={float64:"complex128",float32:"complex64"},N=V(S.float64);function R(e,t,n){var r;if(arguments.length>2){if(r=V(S[n]))return new r(e,t);throw new TypeError(u("invalid argument. Must provide a recognized data type. Value: `%s`.",n))}return new N(e,t)}function _(e){return new e.constructor(e.re,-e.im)}function P(e){return new e.constructor(e.re,-e.im)}var L={Complex64:"complex64",Complex128:"complex128"},M=[E,T],q=["complex64","complex128"],B=q.length;function D(e){var t;for(t=0;t<B;t++)if(e instanceof M[t])return q[t];return L[x(e)]||null}var Y=["complex64","complex128"];function k(){return Y.slice()}function z(e){return e.im}function F(e){return e.im}var I={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}};function J(e,t){var n;return 0===arguments.length?function(){var e,t,n,r,o,i,m,l,s;for(n={},t=(e=v(I)).length,s=0;s<t;s++){for(o=e[s],m=I[o],r={},l=0;l<t;l++)r[i=e[l]]=m[i];n[o]=r}return n}():d(I,e)&&(n=I[e],d(n,t))?n[t]:null}function O(e){return e.re}function Z(e){return e.re}var A={Complex128:T,Complex64:E};function G(e,t){var n;return t&&t.type&&p(t.re)&&p(t.im)&&(n=A[t.type])?new n(t.re,t.im):t}function H(e,t){return t&&t.type&&"Complex64"===t.type&&p(t.re)&&p(t.im)?new E(t.re,t.im):t}function K(e,t){return t&&t.type&&"Complex128"===t.type&&p(t.re)&&p(t.im)?new T(t.re,t.im):t}var Q={};e(Q,"base",j),e(Q,"complex",R),e(Q,"conj",_),e(Q,"conjf",P),e(Q,"complexCtors",V),e(Q,"complexDataType",D),e(Q,"complexDataTypes",k),e(Q,"Complex64",E),e(Q,"Complex128",T),e(Q,"imag",z),e(Q,"imagf",F),e(Q,"complexPromotionRules",J),e(Q,"real",O),e(Q,"realf",Z),e(Q,"reim",h),e(Q,"reimf",y),e(Q,"reviveComplex",G),e(Q,"reviveComplex64",H),e(Q,"reviveComplex128",K);export{T as Complex128,E as Complex64,j as base,R as complex,V as complexCtors,D as complexDataType,k as complexDataTypes,J as complexPromotionRules,_ as conj,P as conjf,Q as default,z as imag,F as imagf,O as real,Z as realf,h as reim,y as reimf,G as reviveComplex,K as reviveComplex128,H as reviveComplex64};
//# sourceMappingURL=index.mjs.map
