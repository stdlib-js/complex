/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var EPS = require( '@stdlib/constants/float64/eps' );
var Complex128 = require( './../../../../../float64/ctor' );
var isAlmostEqual = require( './../lib' );

var z1 = new Complex128( 1.0, 3.0+EPS );
var z2 = new Complex128( 1.0+EPS, 3.0 );
console.log( isAlmostEqual( z1, z2, 1 ) );
// => true

z1 = new Complex128( 1.0, 3.0+EPS );
z2 = new Complex128( 1.0+EPS+EPS, 3.0 );
console.log( isAlmostEqual( z1, z2, 1 ) );
// => false

z1 = new Complex128( 0.0, 0.0 );
z2 = new Complex128( -0.0, 0.0 );
console.log( isAlmostEqual( z1, z2, 0 ) );
// => true

z1 = new Complex128( NaN, 0.0 );
z2 = new Complex128( 1.0, 0.0 );
console.log( isAlmostEqual( z1, z2, 1 ) );
// => false
