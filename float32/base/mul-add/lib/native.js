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

// MODULES //

var Complex64 = require( './../../../../float32/ctor' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Performs a multiply-add operation involving three single-precision complex floating-point numbers.
*
* @private
* @param {Complex64} alpha - complex number
* @param {Complex64} x - complex number
* @param {Complex64} y - complex number
* @returns {Complex64} result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var z1 = new Complex64( 5.0, 3.0 );
* var z2 = new Complex64( -2.0, 1.0 );
* var z3 = new Complex64( 7.0, -8.0 );
*
* var out = muladd( z1, z2, z3 );
* // returns <Complex64>[ -6.0, -9.0 ]
*/
function muladd( alpha, x, y ) {
	var v = addon( alpha, x, y );
	return new Complex64( v.re, v.im );
}


// EXPORTS //

module.exports = muladd;
