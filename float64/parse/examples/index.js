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

'use strict';

var isComplex128 = require( '@stdlib/assert/is-complex128' );
var real = require( './../../../float64/real' );
var imag = require( './../../../float64/imag' );
var parseComplex128 = require( './../lib' );

var str = '-0.5 + 1.25i';

var z = parseComplex128( str );
console.log( z );
// => <Complex128>

var bool = ( isComplex128( z ) );
console.log( bool );
// => true

bool = ( real( z ) === -0.5 );
console.log( bool );
// => true

bool = ( imag( z ) === 1.25 );
console.log( bool );
// => true
