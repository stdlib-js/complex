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
* Evaluates the identity function for a single-precision complex floating-point number.
*
* @private
* @param {Complex64} z - input value
* @returns {Complex64} input value
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var v = cidentityf( new Complex64( -1.0, 2.0 ) );
* // returns <Complex64>[ -1.0, 2.0 ]
*/
function cidentityf( z ) {
	var v = addon( z );
	return new Complex64( v.re, v.im );
}


// EXPORTS //

module.exports = cidentityf;
