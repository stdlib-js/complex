// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r()}(this,(function(){"use strict";function e(e){var r=e.default;if("function"==typeof r){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(e){return!1}},n=Object.defineProperty;var o=function(e){return"number"==typeof e};function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}var a=function(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e},c=o,u=a,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase;var p=function(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!c(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=u(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=u(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===f.call(e.specifier)?f.call(t):l.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t};var s=function(e){return"string"==typeof e},m=o,v=Math.abs,y=String.prototype.toLowerCase,g=String.prototype.toUpperCase,h=String.prototype.replace,d=/e\+(\d)$/,b=/e-(\d)$/,w=/^(\d+)$/,x=/^(\d+)e/,E=/\.0$/,j=/\.0*e/,_=/(\..*[^0])0*e/;var S=function(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!m(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":v(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=h.call(t,_,"$1e"),t=h.call(t,j,"e"),t=h.call(t,E,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=h.call(t,d,"e+0$1"),t=h.call(t,b,"e-0$1"),e.alternate&&(t=h.call(t,w,"$1."),t=h.call(t,x,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===g.call(e.specifier)?g.call(t):y.call(t)};function T(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var O=p,P=s,A=S,k=function(e,r,t){var n=r-e.length;return n<0?e:e=t?e+T(n):T(n)+e},F=a,C=String.fromCharCode,I=isNaN,V=Array.isArray;function N(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}var R=function(e){var r,t,n,o,i,a,c,u,l;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(n=e[u],P(n))a+=n;else{if(r=void 0!==n.precision,!(n=N(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,I(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=O(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!I(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(i)?String(n.arg):C(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=F(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=k(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a},L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function B(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}var M=R,$=function(e){var r,t,n,o;for(t=[],o=0,n=L.exec(e);n;)(r=e.slice(o,L.lastIndex-n[0].length)).length&&t.push(r),t.push(B(n)),o=L.lastIndex,n=L.exec(e);return(r=e.slice(o)).length&&t.push(r),t},Y=function(e){return"string"==typeof e};var G=function e(r){var t,n,o;if(!Y(r))throw new TypeError(e("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=$(r),(n=new Array(arguments.length))[0]=t,o=1;o<n.length;o++)n[o]=arguments[o];return M.apply(null,n)},W=G,X=W,Z=Object.prototype,D=Z.toString,z=Z.__defineGetter__,U=Z.__defineSetter__,H=Z.__lookupGetter__,J=Z.__lookupSetter__;var q=function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===D.call(e))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(H.call(e,r)||J.call(e,r)?(n=e.__proto__,e.__proto__=Z,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&z&&z.call(e,r,t.get),a&&U&&U.call(e,r,t.set),e},K=n,Q=q,ee=t()?K:Q,re=ee;var te=function(e,r,t){re(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})},ne=te,oe=ee;var ie=function(e,r,t){oe(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},ae=ie;var ce=function(e){return"number"==typeof e};var ue=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var le=function(){return ue&&"symbol"==typeof Symbol.toStringTag},fe=Object.prototype.toString,pe=fe;var se=function(e){return pe.call(e)},me=Object.prototype.hasOwnProperty;var ve=function(e,r){return null!=e&&me.call(e,r)},ye="function"==typeof Symbol?Symbol.toStringTag:"",ge=ve,he=ye,de=fe;var be=se,we=function(e){var r,t,n;if(null==e)return de.call(e);t=e[he],r=ge(e,he);try{e[he]=void 0}catch(r){return de.call(e)}return n=de.call(e),r?e[he]=t:delete e[he],n},xe=le()?we:be,Ee=Number,je=Ee.prototype.toString;var _e=xe,Se=Ee,Te=function(e){try{return je.call(e),!0}catch(e){return!1}},Oe=le();var Pe=function(e){return"object"==typeof e&&(e instanceof Se||(Oe?Te(e):"[object Number]"===_e(e)))},Ae=ce,ke=Pe;var Fe=ae,Ce=function(e){return Ae(e)||ke(e)},Ie=Pe;Fe(Ce,"isPrimitive",ce),Fe(Ce,"isObject",Ie);var Ve=Ce;var Ne=Ve.isPrimitive,Re=ee,Le=ae,Be=W,Me=function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"},$e=function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e};function Ye(e,r){if(!(this instanceof Ye))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ne(e))throw new TypeError(Be("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ne(r))throw new TypeError(Be("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Re(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Re(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Le(Ye,"BYTES_PER_ELEMENT",8),Le(Ye.prototype,"BYTES_PER_ELEMENT",8),Le(Ye.prototype,"byteLength",16),Le(Ye.prototype,"toString",Me),Le(Ye.prototype,"toJSON",$e);var Ge=Ye,We="function"==typeof Math.fround?Math.fround:null,Xe=xe,Ze="function"==typeof Float32Array;var De=function(e){return Ze&&e instanceof Float32Array||"[object Float32Array]"===Xe(e)},ze=Number.POSITIVE_INFINITY,Ue="function"==typeof Float32Array?Float32Array:null,He=De,Je=ze,qe=Ue;var Ke=function(){var e,r;if("function"!=typeof qe)return!1;try{r=new qe([1,3.14,-3.14,5e40]),e=He(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Je}catch(r){e=!1}return e};var Qe="function"==typeof Float32Array?Float32Array:void 0,er=function(){throw new Error("not implemented")},rr=Ke()?Qe:er,tr=new rr(1);var nr=We;"function"!=typeof nr&&(nr=function(e){return tr[0]=e,tr[0]});var or=Ve.isPrimitive,ir=ee,ar=ae,cr=nr,ur=W,lr=function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"},fr=function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e};function pr(e,r){if(!(this instanceof pr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!or(e))throw new TypeError(ur("invalid argument. Real component must be a number. Value: `%s`.",e));if(!or(r))throw new TypeError(ur("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return ir(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:cr(e)}),ir(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:cr(r)}),this}ar(pr,"BYTES_PER_ELEMENT",4),ar(pr.prototype,"BYTES_PER_ELEMENT",4),ar(pr.prototype,"byteLength",8),ar(pr.prototype,"toString",lr),ar(pr.prototype,"toJSON",fr);var sr=pr,mr=W,vr={float64:Ge,float32:sr};var yr=function(e,r,t){var n;if(arguments.length>2){if(n=vr[t])return new n(e,r);throw new TypeError(mr("invalid argument. Must provide a recognized data type. Value: `%s`.",t))}return new vr.float64(e,r)},gr=yr;var hr=function(e){return new e.constructor(e.re,-e.im)};var dr=function(e){return new e.constructor(e.re,-e.im)},br={complex64:sr,complex128:Ge};var wr=function(e){return br[e]||null},xr=wr;var Er=function(){return/^\s*function\s*([^(]*)/i},jr=Er;ae(jr,"REGEXP",Er());var _r=jr,Sr=xe;var Tr=Array.isArray?Array.isArray:function(e){return"[object Array]"===Sr(e)},Or=Tr,Pr=W;var Ar=function(e){return null!==e&&"object"==typeof e};ae(Ar,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Pr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Or(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ar));var kr=Ar,Fr=kr;var Cr=xe,Ir=_r.REGEXP,Vr=function(e){return Fr(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))};var Nr=function(e){var r,t,n;if(("Object"===(t=Cr(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ir.exec(n.toString()))return r[1]}return Vr(e)?"Buffer":t},Rr=Nr,Lr=Rr,Br={Complex64:"complex64",Complex128:"complex128"},Mr=[sr,Ge],$r=["complex64","complex128"],Yr=$r.length;var Gr=function(e){var r;for(r=0;r<Yr;r++)if(e instanceof Mr[r])return $r[r];return Br[Lr(e)]||null},Wr=["complex64","complex128"];var Xr=function(){return Wr.slice()};var Zr=function(e){return e.im};var Dr=function(e){return e.im};var zr=function(e){return Object.keys(Object(e))},Ur=zr;var Hr=function(){return function(){return 2!==(Ur(arguments)||"").length}(1,2)},Jr=void 0!==Object.keys,qr=xe;var Kr,Qr=function(e){return"[object Arguments]"===qr(e)},et=Qr;Kr=function(){return et(arguments)}();var rt=Kr;var tt=function(e){return"string"==typeof e},nt=String.prototype.valueOf;var ot=xe,it=function(e){try{return nt.call(e),!0}catch(e){return!1}},at=le();var ct=function(e){return"object"==typeof e&&(e instanceof String||(at?it(e):"[object String]"===ot(e)))},ut=tt,lt=ct;var ft=ae,pt=function(e){return ut(e)||lt(e)},st=ct;ft(pt,"isPrimitive",tt),ft(pt,"isObject",st);var mt=pt;var vt=function(e){return e!=e},yt=Ve.isPrimitive,gt=vt;var ht=function(e){return yt(e)&&gt(e)},dt=Ve.isObject,bt=vt;var wt=function(e){return dt(e)&&bt(e.valueOf())},xt=ht,Et=wt;var jt=ae,_t=function(e){return xt(e)||Et(e)},St=wt;jt(_t,"isPrimitive",ht),jt(_t,"isObject",St);var Tt=_t,Ot=Ee.NEGATIVE_INFINITY,Pt=Math.floor;var At=function(e){return Pt(e)===e},kt=ze,Ft=Ot,Ct=At;var It=function(e){return e<kt&&e>Ft&&Ct(e)},Vt=Ve.isPrimitive,Nt=It;var Rt=function(e){return Vt(e)&&Nt(e)},Lt=Ve.isObject,Bt=It;var Mt=function(e){return Lt(e)&&Bt(e.valueOf())},$t=Rt,Yt=Mt;var Gt=ae,Wt=function(e){return $t(e)||Yt(e)},Xt=Mt;Gt(Wt,"isPrimitive",Rt),Gt(Wt,"isObject",Xt);var Zt,Dt=Wt,zt=Object.prototype.propertyIsEnumerable;Zt=!zt.call("beep","0");var Ut=mt,Ht=Tt.isPrimitive,Jt=Dt.isPrimitive,qt=zt,Kt=Zt;var Qt=function(e,r){var t;return null!=e&&(!(t=qt.call(e,r))&&Kt&&Ut(e)?!Ht(r=+r)&&Jt(r)&&r>=0&&r<e.length:t)},en=Qt,rn=ve,tn=en,nn=Tr,on=At;var an=rt?Qr:function(e){return null!==e&&"object"==typeof e&&!nn(e)&&"number"==typeof e.length&&on(e.length)&&e.length>=0&&e.length<=4294967295&&rn(e,"callee")&&!tn(e,"callee")},cn=an,un=zr,ln=Array.prototype.slice;var fn=function(e){return cn(e)?un(ln.call(e)):un(e)};var pn=en((function(){}),"prototype"),sn=!en({toString:null},"toString"),mn=At;var vn=Tt,yn=function(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&mn(e.length)&&e.length>=0&&e.length<=9007199254740991},gn=mt.isPrimitive,hn=Dt.isPrimitive,dn=W;var bn=function(e,r,t){var n,o;if(!yn(e)&&!gn(e))throw new TypeError(dn("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!hn(t))throw new TypeError(dn("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(vn(r)){for(;o<n;o++)if(vn(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1},wn=bn,xn=/./;var En=function(e){return"boolean"==typeof e},jn=Boolean.prototype.toString;var _n=xe,Sn=function(e){try{return jn.call(e),!0}catch(e){return!1}},Tn=le();var On=function(e){return"object"==typeof e&&(e instanceof Boolean||(Tn?Sn(e):"[object Boolean]"===_n(e)))},Pn=En,An=On;var kn=ae,Fn=function(e){return Pn(e)||An(e)},Cn=On;kn(Fn,"isPrimitive",En),kn(Fn,"isObject",Cn);var In=Fn;var Vn=function(){return new Function("return this;")()},Nn="object"==typeof self?self:null,Rn="object"==typeof window?window:null,Ln="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Bn="object"==typeof Ln?Ln:null;module.exports=Bn;var Mn=In.isPrimitive,$n=W,Yn=Vn,Gn=Nn,Wn=Rn,Xn=e(Object.freeze({__proto__:null}));var Zn=function(e){if(arguments.length){if(!Mn(e))throw new TypeError($n("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Yn()}if(Gn)return Gn;if(Wn)return Wn;if(Xn)return Xn;throw new Error("unexpected error. Unable to resolve global object.")},Dn=Zn(),zn=Dn.document&&Dn.document.childNodes,Un=Int8Array,Hn=xn,Jn=zn,qn=Un;var Kn=Rr;var Qn=Rr;var eo=function(e){var r;return null===e?"null":"object"===(r=typeof e)?Kn(e).toLowerCase():r},ro=function(e){return Qn(e).toLowerCase()},to=function(){return"function"==typeof Hn||"object"==typeof qn||"function"==typeof Jn}()?ro:eo;var no,oo=function(e){return e.constructor&&e.constructor.prototype===e},io="undefined"==typeof window?void 0:window,ao=ve,co=wn,uo=to,lo=oo,fo=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],po=io;no=function(){var e;if("undefined"===uo(po))return!1;for(e in po)try{-1===co(fo,e)&&ao(po,e)&&null!==po[e]&&"object"===uo(po[e])&&lo(po[e])}catch(e){return!0}return!1}();var so="undefined"!=typeof window,mo=no,vo=oo,yo=so;var go=kr,ho=ve,bo=an,wo=pn,xo=sn,Eo=function(e){if(!1===yo&&!mo)return vo(e);try{return vo(e)}catch(e){return!1}},jo=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var _o=zr,So=fn,To=function(e){var r,t,n,o,i,a,c;if(o=[],bo(e)){for(c=0;c<e.length;c++)o.push(c.toString());return o}if("string"==typeof e){if(e.length>0&&!ho(e,"0"))for(c=0;c<e.length;c++)o.push(c.toString())}else{if(!1===(n="function"==typeof e)&&!go(e))return o;t=wo&&n}for(i in e)t&&"prototype"===i||!ho(e,i)||o.push(String(i));if(xo)for(r=Eo(e),c=0;c<jo.length;c++)a=jo[c],r&&"constructor"===a||!ho(e,a)||o.push(String(a));return o},Oo=Jr?Hr()?So:_o:To,Po=ve,Ao={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}};function ko(){var e,r,t,n,o,i,a,c,u;for(t={},r=(e=Oo(Ao)).length,u=0;u<r;u++){for(o=e[u],a=Ao[o],n={},c=0;c<r;c++)n[i=e[c]]=a[i];t[o]=n}return t}var Fo=function(e,r){var t;return 0===arguments.length?ko():Po(Ao,e)&&Po(t=Ao[e],r)?t[r]:null},Co=Fo;var Io=function(e){return e.re};var Vo=function(e){return e.re},No=xe,Ro="function"==typeof Float64Array;var Lo="function"==typeof Float64Array?Float64Array:null,Bo=function(e){return Ro&&e instanceof Float64Array||"[object Float64Array]"===No(e)},Mo=Lo;var $o=function(){var e,r;if("function"!=typeof Mo)return!1;try{r=new Mo([1,3.14,-3.14,NaN]),e=Bo(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e};var Yo="function"==typeof Float64Array?Float64Array:void 0,Go=function(){throw new Error("not implemented")},Wo=$o()?Yo:Go;var Xo=function(e){var r=new Wo(2);return r[0]=e.re,r[1]=e.im,r},Zo=rr;var Do=function(e){var r=new Zo(2);return r[0]=e.re,r[1]=e.im,r},zo=Ve.isPrimitive,Uo={Complex128:Ge,Complex64:sr};var Ho=function(e,r){var t;return r&&r.type&&zo(r.re)&&zo(r.im)&&(t=Uo[r.type])?new t(r.re,r.im):r},Jo=Ho,qo=Ve.isPrimitive,Ko=sr;var Qo=function(e,r){return r&&r.type&&"Complex64"===r.type&&qo(r.re)&&qo(r.im)?new Ko(r.re,r.im):r},ei=Ve.isPrimitive,ri=Ge;var ti=function(e,r){return r&&r.type&&"Complex128"===r.type&&ei(r.re)&&ei(r.im)?new ri(r.re,r.im):r},ni={};return ne(ni,"complex",gr),ne(ni,"conj",hr),ne(ni,"conjf",dr),ne(ni,"complexCtors",xr),ne(ni,"complexDataType",Gr),ne(ni,"complexDataTypes",Xr),ne(ni,"Complex64",sr),ne(ni,"Complex128",Ge),ne(ni,"imag",Zr),ne(ni,"imagf",Dr),ne(ni,"complexPromotionRules",Co),ne(ni,"real",Io),ne(ni,"realf",Vo),ne(ni,"reim",Xo),ne(ni,"reimf",Do),ne(ni,"reviveComplex",Jo),ne(ni,"reviveComplex64",Qo),ne(ni,"reviveComplex128",ti),ni}));
//# sourceMappingURL=index.js.map
