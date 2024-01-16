"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var L=t(function(gi,Y){"use strict";var F=require("@stdlib/assert/is-function"),Hr=require("@stdlib/assert/is-nonnegative-integer").isPrimitive,O=require("@stdlib/string/format"),w="number";function Qr(e,r,i){var m;if(!F(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Hr(r))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!F(i))throw new TypeError(O("invalid argument. Third argument must be a constructor function. Value: `%s`.",i));return m=[v,q,E,f,x,S],r<=5?m[r]:N;function v(){var o=e();return typeof o===w?new i(o,0):o}function q(o){var n=e(o);return typeof n===w?new i(n,0):n}function E(o,n){var u=e(o,n);return typeof u===w?new i(u,0):u}function f(o,n,u){var p=e(o,n,u);return typeof p===w?new i(p,0):p}function x(o,n,u,p){var l=e(o,n,u,p);return typeof l===w?new i(l,0):l}function S(o,n,u,p,l){var P=e(o,n,u,p,l);return typeof P===w?new i(P,0):P}function N(){var o,n,u;for(o=[],u=0;u<arguments.length;u++)o.push(arguments[u]);return n=e.apply(null,o),typeof n===w?new i(n,0):n}}Y.exports=Qr});var J=t(function(bi,j){"use strict";var Wr=L();j.exports=Wr});var D=t(function(Ei,k){"use strict";var M=require("@stdlib/assert/is-function"),Xr=require("@stdlib/assert/is-nonnegative-integer").isPrimitive,R=require("@stdlib/string/format"),c="number";function Zr(e,r,i){var m;if(!M(e))throw new TypeError(R("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Xr(r))throw new TypeError(R("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!M(i))throw new TypeError(R("invalid argument. Third argument must be a constructor function. Value: `%s`.",i));return m=[v,q,E,f,x,S],r<=5?m[r]:N;function v(){return e()}function q(o){return typeof o===c&&(o=new i(o,0)),e(o)}function E(o,n){return typeof o===c&&(o=new i(o,0)),typeof n===c&&(n=new i(n,0)),e(o,n)}function f(o,n,u){return typeof o===c&&(o=new i(o,0)),typeof n===c&&(n=new i(n,0)),typeof u===c&&(u=new i(u,0)),e(o,n,u)}function x(o,n,u,p){return typeof o===c&&(o=new i(o,0)),typeof n===c&&(n=new i(n,0)),typeof u===c&&(u=new i(u,0)),typeof p===c&&(p=new i(p,0)),e(o,n,u,p)}function S(o,n,u,p,l){return typeof o===c&&(o=new i(o,0)),typeof n===c&&(n=new i(n,0)),typeof u===c&&(u=new i(u,0)),typeof p===c&&(p=new i(p,0)),typeof l===c&&(l=new i(l,0)),e(o,n,u,p,l)}function N(){var o,n,u;for(o=[],u=0;u<arguments.length;u++)n=arguments[u],typeof n===c&&(n=new i(n,0)),o.push(n);return e.apply(null,o)}}k.exports=Zr});var B=t(function(Ti,I){"use strict";var $r=D();I.exports=$r});var U=t(function(Ci,K){"use strict";var A=require("@stdlib/utils/define-read-only-property"),V={};A(V,"cast",J());A(V,"wrap",B());K.exports=V});var H=t(function(di,G){"use strict";function zr(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}G.exports=zr});var W=t(function(Si,Q){"use strict";function et(){var e={};return e.type="Complex128",e.re=this.re,e.im=this.im,e}Q.exports=et});var ee=t(function(Ni,z){"use strict";var X=require("@stdlib/assert/is-number").isPrimitive,Z=require("@stdlib/utils/define-property"),T=require("@stdlib/utils/define-nonenumerable-read-only-property"),$=require("@stdlib/string/format"),rt=H(),tt=W();function y(e,r){if(!(this instanceof y))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!X(e))throw new TypeError($("invalid argument. Real component must be a number. Value: `%s`.",e));if(!X(r))throw new TypeError($("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}T(y,"BYTES_PER_ELEMENT",8);T(y.prototype,"BYTES_PER_ELEMENT",8);T(y.prototype,"byteLength",16);T(y.prototype,"toString",rt);T(y.prototype,"toJSON",tt);z.exports=y});var h=t(function(Pi,re){"use strict";var it=ee();re.exports=it});var ie=t(function(Oi,te){"use strict";function ot(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}te.exports=ot});var ne=t(function(Ri,oe){"use strict";function nt(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}oe.exports=nt});var ce=t(function(Vi,me){"use strict";var ue=require("@stdlib/assert/is-number").isPrimitive,se=require("@stdlib/utils/define-property"),C=require("@stdlib/utils/define-nonenumerable-read-only-property"),ae=require("@stdlib/number/float64/base/to-float32"),pe=require("@stdlib/string/format"),ut=ie(),st=ne();function g(e,r){if(!(this instanceof g))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ue(e))throw new TypeError(pe("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ue(r))throw new TypeError(pe("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return se(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ae(e)}),se(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ae(r)}),this}C(g,"BYTES_PER_ELEMENT",4);C(g.prototype,"BYTES_PER_ELEMENT",4);C(g.prototype,"byteLength",8);C(g.prototype,"toString",ut);C(g.prototype,"toJSON",st);me.exports=g});var b=t(function(_i,le){"use strict";var at=ce();le.exports=at});var xe=t(function(Fi,fe){"use strict";var pt=h(),mt=b(),ct={float64:pt,float32:mt};fe.exports=ct});var we=t(function(Yi,qe){"use strict";var lt=require("@stdlib/string/format"),ve=xe();function ft(e,r,i){var m;if(arguments.length>2){if(m=ve[i],m)return new m(e,r);throw new TypeError(lt("invalid argument. Must provide a recognized data type. Value: `%s`.",i))}return new ve.float64(e,r)}qe.exports=ft});var he=t(function(Li,ye){"use strict";var xt=we();ye.exports=xt});var be=t(function(ji,ge){"use strict";function vt(e){return new e.constructor(e.re,-e.im)}ge.exports=vt});var Te=t(function(Ji,Ee){"use strict";var qt=be();Ee.exports=qt});var de=t(function(Mi,Ce){"use strict";function wt(e){return new e.constructor(e.re,-e.im)}Ce.exports=wt});var Ne=t(function(ki,Se){"use strict";var yt=de();Se.exports=yt});var Oe=t(function(Di,Pe){"use strict";var ht=b(),gt=h(),bt={complex64:ht,complex128:gt};Pe.exports=bt});var Ve=t(function(Ii,Re){"use strict";var Et=Oe();function Tt(e){return Et[e]||null}Re.exports=Tt});var Fe=t(function(Bi,_e){"use strict";var Ct=Ve();_e.exports=Ct});var Le=t(function(Ai,Ye){"use strict";var dt={Complex64:"complex64",Complex128:"complex128"};Ye.exports=dt});var Je=t(function(Ki,je){"use strict";var St=b(),Nt=h(),Pt=[St,Nt];je.exports=Pt});var ke=t(function(Ui,Me){"use strict";var Ot=["complex64","complex128"];Me.exports=Ot});var Be=t(function(Gi,Ie){"use strict";var Rt=require("@stdlib/utils/constructor-name"),Vt=Le(),_t=Je(),De=ke(),Ft=De.length;function Yt(e){var r;for(r=0;r<Ft;r++)if(e instanceof _t[r])return De[r];return Vt[Rt(e)]||null}Ie.exports=Yt});var Ke=t(function(Hi,Ae){"use strict";var Lt=Be();Ae.exports=Lt});var Ue=t(function(Qi,jt){jt.exports=["complex64","complex128"]});var He=t(function(Wi,Ge){"use strict";var Jt=Ue();function Mt(){return Jt.slice()}Ge.exports=Mt});var We=t(function(Xi,Qe){"use strict";var kt=He();Qe.exports=kt});var Ze=t(function(Zi,Xe){"use strict";var Dt=require("@stdlib/array/float64");function It(e){var r=new Dt(2);return r[0]=e.re,r[1]=e.im,r}Xe.exports=It});var _=t(function($i,$e){"use strict";var Bt=Ze();$e.exports=Bt});var rr=t(function(zi,er){"use strict";var ze=_();function At(e,r){var i=ze(e),m=ze(r);return i[0]===m[0]&&i[1]===m[1]}er.exports=At});var ir=t(function(eo,tr){"use strict";var Kt=rr();tr.exports=Kt});var nr=t(function(ro,or){"use strict";function Ut(e){return e.im}or.exports=Ut});var sr=t(function(to,ur){"use strict";var Gt=nr();ur.exports=Gt});var pr=t(function(io,ar){"use strict";function Ht(e){return e.im}ar.exports=Ht});var cr=t(function(oo,mr){"use strict";var Qt=pr();mr.exports=Qt});var lr=t(function(no,Wt){Wt.exports={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}}});var vr=t(function(uo,xr){"use strict";var Xt=require("@stdlib/utils/keys"),fr=require("@stdlib/assert/has-own-property"),d=lr();function Zt(){var e,r,i,m,v,q,E,f,x;for(i={},e=Xt(d),r=e.length,x=0;x<r;x++){for(v=e[x],E=d[v],m={},f=0;f<r;f++)q=e[f],m[q]=E[q];i[v]=m}return i}function $t(e,r){var i;return arguments.length===0?Zt():fr(d,e)&&(i=d[e],fr(i,r))?i[r]:null}xr.exports=$t});var wr=t(function(so,qr){"use strict";var zt=vr();qr.exports=zt});var hr=t(function(ao,yr){"use strict";function ei(e){return e.re}yr.exports=ei});var br=t(function(po,gr){"use strict";var ri=hr();gr.exports=ri});var Tr=t(function(mo,Er){"use strict";function ti(e){return e.re}Er.exports=ti});var dr=t(function(co,Cr){"use strict";var ii=Tr();Cr.exports=ii});var Nr=t(function(lo,Sr){"use strict";var oi=require("@stdlib/array/float32");function ni(e){var r=new oi(2);return r[0]=e.re,r[1]=e.im,r}Sr.exports=ni});var Or=t(function(fo,Pr){"use strict";var ui=Nr();Pr.exports=ui});var Vr=t(function(xo,Rr){"use strict";var si=h(),ai=b(),pi={Complex128:si,Complex64:ai};Rr.exports=pi});var Yr=t(function(vo,Fr){"use strict";var _r=require("@stdlib/assert/is-number").isPrimitive,mi=Vr();function ci(e,r){var i;return r&&r.type&&_r(r.re)&&_r(r.im)&&(i=mi[r.type],i)?new i(r.re,r.im):r}Fr.exports=ci});var jr=t(function(qo,Lr){"use strict";var li=Yr();Lr.exports=li});var kr=t(function(wo,Mr){"use strict";var Jr=require("@stdlib/assert/is-number").isPrimitive,fi=b();function xi(e,r){return r&&r.type&&r.type==="Complex64"&&Jr(r.re)&&Jr(r.im)?new fi(r.re,r.im):r}Mr.exports=xi});var Ir=t(function(yo,Dr){"use strict";var vi=kr();Dr.exports=vi});var Kr=t(function(ho,Ar){"use strict";var Br=require("@stdlib/assert/is-number").isPrimitive,qi=h();function wi(e,r){return r&&r.type&&r.type==="Complex128"&&Br(r.re)&&Br(r.im)?new qi(r.re,r.im):r}Ar.exports=wi});var Gr=t(function(go,Ur){"use strict";var yi=Kr();Ur.exports=yi});var a=require("@stdlib/utils/define-read-only-property"),s={};a(s,"base",U());a(s,"complex",he());a(s,"conj",Te());a(s,"conjf",Ne());a(s,"complexCtors",Fe());a(s,"complexDataType",Ke());a(s,"complexDataTypes",We());a(s,"equalComplex128",ir());a(s,"Complex64",b());a(s,"Complex128",h());a(s,"imag",sr());a(s,"imagf",cr());a(s,"complexPromotionRules",wr());a(s,"real",br());a(s,"realf",dr());a(s,"reim",_());a(s,"reimf",Or());a(s,"reviveComplex",jr());a(s,"reviveComplex64",Ir());a(s,"reviveComplex128",Gr());module.exports=s;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
