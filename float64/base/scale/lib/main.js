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

var Complex128 = require( './../../../../float64/ctor' );
var real = require( './../../../../float64/real' );
var imag = require( './../../../../float64/imag' );


// MAIN //

/**
* Scales a double-precision complex floating-point number by a real-valued double-precision floating-point scalar constant.
*
* @param {number} alpha - scalar constant
* @param {Complex128} z - complex number
* @returns {Complex128} result
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var z = new Complex128( 5.0, 3.0 );
* // returns <Complex128>
*
* var out = scale( 5.0, z );
* // returns <Complex128>
*
* var re = real( out );
* // returns 25.0
*
* var im = imag( out );
* // returns 15.0
*/
function scale( alpha, z ) {
	return new Complex128( real( z ) * alpha, imag( z ) * alpha );
}


// EXPORTS //

module.exports = scale;
