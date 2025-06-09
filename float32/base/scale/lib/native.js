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
* Scales a single-precision complex floating-point number by a real-valued single-precision floating-point scalar constant.
*
* @private
* @param {number} alpha - scalar constant
* @param {Complex64} z - complex number
* @returns {Complex64} result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var z = new Complex64( 5.0, 3.0 );
*
* var out = scale( 5.0, z );
* // returns <Complex64>[ 25.0, 15.0 ]
*/
function scale( alpha, z ) {
	var v = addon( alpha, z );
	return new Complex64( v.re, v.im );
}


// EXPORTS //

module.exports = scale;
