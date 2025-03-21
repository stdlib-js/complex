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

'use strict';

var Complex64 = require( './../../../float32/ctor' );
var addf = require( '@stdlib/number/float32/base/add' );
var realf = require( './../../../float32/real' );
var imagf = require( './../../../float32/imag' );
var castReturn = require( './../lib' );

var f = castReturn( addf, 2, Complex64 );

// ...

var z = f( 3.0, 4.0 );
// returns <Complex64>

var re = realf( z );
// returns 7.0

var im = imagf( z );
// returns 0.0

console.log( '%d + %di', re, im );
// => '7 + 0i'
