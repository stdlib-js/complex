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

var isAlmostEqualF32 = require( '@stdlib/number/float32/base/assert/is-almost-equal' );
var reimf = require( './../../../../../float32/reim' );


// MAIN //

/**
* Tests whether two single-precision complex floating-point numbers are approximately equal within a specified number of ULPs (units in the last place).
*
* ## Notes
*
* -   The function returns `false` if either input value has a `NaN` real or imaginary component.
* -   The function does not distinguish between `-0` and `+0`, treating them as equal.
*
* @param {Complex64} z1 - first complex number
* @param {Complex64} z2 - second complex number
* @param {number} maxULP - maximum allowed ULP difference
* @returns {boolean} boolean indicating whether two single-precision complex floating-point numbers are approximately equal within a specified number of ULPs
*
* @example
* var EPS = require( '@stdlib/constants/float32/eps' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var z1 = new Complex64( 1.0, 3.0 );
* var z2 = new Complex64( 1.0+EPS, 3.0 );
*
* var bool = isAlmostEqualf( z1, z2, 0 );
* // returns false
*
* bool = isAlmostEqualf( z1, z2, 1 );
* // returns true
*/
function isAlmostEqualf( z1, z2, maxULP ) {
	var parts1 = reimf( z1 );
	var parts2 = reimf( z2 );
	return (
		isAlmostEqualF32( parts1[ 0 ], parts2[ 0 ], maxULP ) &&
		isAlmostEqualF32( parts1[ 1 ], parts2[ 1 ], maxULP )
	);
}


// EXPORTS //

module.exports = isAlmostEqualf;
