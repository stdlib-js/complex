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

var f32 = require( '@stdlib/number/float64/base/to-float32' );
var Complex64 = require( './../../../../float32/ctor' );
var realf = require( './../../../../float32/real' );
var imagf = require( './../../../../float32/imag' );


// MAIN //

/**
* Scales a single-precision complex floating-point number by a real-valued single-precision floating-point scalar constant.
*
* @param {number} alpha - scalar constant
* @param {Complex64} z - complex number
* @returns {Complex64} result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var z = new Complex64( 5.0, 3.0 );
* // returns <Complex64>
*
* var out = scale( 5.0, z );
* // returns <Complex64>
*
* var re = realf( out );
* // returns 25.0
*
* var im = imagf( out );
* // returns 15.0
*/
function scale( alpha, z ) {
	return new Complex64( f32( realf(z)*alpha ), f32( imagf(z)*alpha ) );
}


// EXPORTS //

module.exports = scale;
