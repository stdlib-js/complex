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

'use strict';

// MODULES //

var f32 = require( '@stdlib/number/float64/base/to-float32' );
var Complex64 = require( './../../../../float32/ctor' );
var realf = require( './../../../../float32/real' );
var imagf = require( './../../../../float32/imag' );


// MAIN //

/**
* Subtracts two single-precision complex floating-point numbers.
*
* @param {Complex64} z1 - complex number
* @param {Complex64} z2 - complex number
* @returns {Complex64} result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var z1 = new Complex64( 5.0, 3.0 );
* var z2 = new Complex64( -2.0, 1.0 );
*
* var out = csubf( z1, z2 );
* // returns <Complex64>[ 7.0, 2.0 ]
*/
function csubf( z1, z2 ) {
	var re = f32( realf( z1 ) - realf( z2 ) );
	var im = f32( imagf( z1 ) - imagf( z2 ) );
	return new Complex64( re, im );
}


// EXPORTS //

module.exports = csubf;
